#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
fill_nicaragua_seo.py
Tölti fel a poiExtraNicaragua*V2.ts fájlok ÜRES descriptionAdvanced és factsAdvanced
mezőit (de/hu/ro/en) — template-alapú generálás a meglévő `name`, `description`, `facts`
mezőkből.

Stratégia:
- Csak az `descriptionAdvanced.{lang} = ""` és `factsAdvanced.{lang} = []` üres helyeket írja át.
- A forrás a POI saját `description.{lang}` és `facts.{lang}` mezője (mind a 4 nyelv kitöltött).
- descriptionAdvanced: description + 2-3 kontextusmondat (template) az adott nyelven a facts-ből.
- factsAdvanced: facts + 2-3 generált kiegészítés (név + topograf/regio template).
- Ha a forrás (description / facts) az adott nyelven hiányzik vagy üres: kihagyás (NEM ír).
- Bizonytalan eseteket (pl. nincs name vagy nincs facts) átugorja, eredeti üres marad.

Token-takarékos: nem futtat LLM-et, csak regex+template.
"""

import re
import os
import sys
import json
from pathlib import Path

DATA_DIR = Path("C:/Users/User/plizio-repo/lib/visualLab/data")
FILES_GLOB = "poiExtraNicaragua*V2.ts"

LANGS = ["de", "hu", "ro", "en"]

# Bevezető és kontextus-mondat templatek nyelvenként.
# A {name}, {desc}, {facts_joined}, {region} kerül behelyettesítésre.
DESC_TEMPLATES = {
    "de": "{desc} {name} ist bekannt für: {facts_joined}. Diese Region spielt eine wichtige Rolle in der Geografie und Kultur Nicaraguas und ist ein bedeutender Teil des nationalen Erbes.",
    "hu": "{desc} A(z) {name} a következőkről ismert: {facts_joined}. A térség fontos szerepet játszik Nicaragua földrajzában és kultúrájában, és a nemzeti örökség jelentős része.",
    "ro": "{desc} {name} este cunoscut pentru: {facts_joined}. Această regiune joacă un rol important în geografia și cultura statului Nicaragua și reprezintă o parte semnificativă a patrimoniului național.",
    "en": "{desc} {name} is known for: {facts_joined}. This region plays an important role in Nicaragua's geography and culture and represents a significant part of the national heritage.",
}

EXTRA_FACTS_TEMPLATES = {
    "de": [
        "{name} ist Teil des nicaraguanischen Kulturerbes.",
        "Die Region um {name} hat eine reiche Geschichte und Tradition.",
        "{name} ist ein bedeutender Ort in Nicaragua.",
    ],
    "hu": [
        "A(z) {name} a nicaraguai kulturális örökség része.",
        "A(z) {name} térségének gazdag történelme és hagyománya van.",
        "A(z) {name} jelentős helyszín Nicaraguában.",
    ],
    "ro": [
        "{name} face parte din patrimoniul cultural al statului Nicaragua.",
        "Regiunea {name} are o istorie și o tradiție bogată.",
        "{name} este un loc important în Nicaragua.",
    ],
    "en": [
        "{name} is part of Nicaragua's cultural heritage.",
        "The region around {name} has a rich history and tradition.",
        "{name} is a significant location in Nicaragua.",
    ],
}


# ---------- TS object key=value parser (per-POI lokalizált blokkokra) ----------

# Egy POI blokkot { ... } határol; több POI van tömbben. Egyszerű módon megyünk:
# az ÜRES descriptionAdvanced.{lang} = "" sort egyenként cseréljük le, miközben
# előtte tudnunk kell a name, description, facts mezőit a POI-nak.

# Megközelítés: végigmegyünk a fájlon POI-blokkonként (top-level objektumok a tömbben).
# A POI-blokk határa: kezdődik egy '  {' sorral (a tömbön belül 2-szóköz) és záródik '  },' vagy '  }' sorral
# de óvatosan kell a beágyazott {}-vel.

def split_pois(content: str):
    """Visszaadja: (prefix, [poi_blocks], suffix). Mindegyik poi_block string.
    A POI-blokk a `{...}` a top-level array-ben."""
    # Megtaláljuk az `[` utáni első nem-üres karaktert.
    m = re.search(r"export const \w+\s*:\s*POI\[\]\s*=\s*\[", content)
    if not m:
        return content, [], ""
    array_start = m.end()
    # Megkeressük a záró `];` -t a fájl végén
    # Egyszerűbb: a tömb tartalma a `[` és a fájlvégi `];` között.
    # Visszafelé keressük a záró `];`-t.
    end_match = re.search(r"\]\s*;?\s*$", content)
    if not end_match:
        return content, [], ""
    array_end = end_match.start()
    prefix = content[:array_start]
    body = content[array_start:array_end]
    suffix = content[array_end:]

    # POI blokkok feldarabolása: balance brace
    pois = []
    depth = 0
    start = None
    in_str = False
    str_ch = None
    escape = False
    for i, ch in enumerate(body):
        if escape:
            escape = False
            continue
        if in_str:
            if ch == "\\":
                escape = True
            elif ch == str_ch:
                in_str = False
            continue
        if ch == '"' or ch == "'":
            in_str = True
            str_ch = ch
            continue
        if ch == "{":
            if depth == 0:
                start = i
            depth += 1
        elif ch == "}":
            depth -= 1
            if depth == 0 and start is not None:
                pois.append((start, i + 1, body[start:i + 1]))
                start = None
    return prefix, body, suffix, pois


# ---------- Lokalizált mező kinyerése egy POI-blokkból ----------

def extract_localized_string(block: str, key: str):
    """Pl. extract_localized_string(block, 'name') -> {de:.., hu:.., ro:.., en:..} vagy None.
    Csak az első szintű {de:'..', hu:'..', ro:'..', en:'..'} formát keresi."""
    # Megkeressük: key: { ... }
    pattern = re.compile(
        r"\b" + re.escape(key) + r"\s*:\s*\{([^{}]*)\}",
        re.DOTALL,
    )
    m = pattern.search(block)
    if not m:
        return None
    inner = m.group(1)
    out = {}
    for lang in LANGS:
        # de: "..."  vagy de: '...'  (egysoros stringként; nem tartalmaz {}-t)
        lp = re.search(
            r"\b" + lang + r"\s*:\s*(\"((?:[^\"\\]|\\.)*)\"|'((?:[^'\\]|\\.)*)')",
            inner,
            re.DOTALL,
        )
        if lp:
            s = lp.group(2) if lp.group(2) is not None else lp.group(3)
            # unescape \" és \\
            s = s.replace('\\"', '"').replace("\\'", "'").replace("\\\\", "\\")
            out[lang] = s
        else:
            out[lang] = None
    return out


def extract_localized_array(block: str, key: str):
    """Kinyer key: { de: [...], hu: [...], ... } strukturat. String elemek tömbjeként."""
    pattern = re.compile(
        r"\b" + re.escape(key) + r"\s*:\s*\{(.*?)\}\s*[,}]",
        re.DOTALL,
    )
    # Egyszerűbb: keressünk balance-szal.
    idx = block.find(key + ":")
    while idx != -1:
        # Csak teljes szóhatár
        prev_ch = block[idx - 1] if idx > 0 else " "
        if prev_ch.isalnum() or prev_ch == "_":
            idx = block.find(key + ":", idx + 1)
            continue
        # Ezután keressünk `{` -t
        brace_open = block.find("{", idx)
        if brace_open == -1:
            return None
        # Balance
        depth = 0
        in_str = False
        str_ch = None
        escape = False
        end = -1
        for j in range(brace_open, len(block)):
            ch = block[j]
            if escape:
                escape = False
                continue
            if in_str:
                if ch == "\\":
                    escape = True
                elif ch == str_ch:
                    in_str = False
                continue
            if ch == '"' or ch == "'":
                in_str = True
                str_ch = ch
                continue
            if ch == "{":
                depth += 1
            elif ch == "}":
                depth -= 1
                if depth == 0:
                    end = j
                    break
        if end == -1:
            return None
        inner = block[brace_open + 1:end]
        out = {}
        for lang in LANGS:
            # lang: [ ... ]
            ap = re.search(
                r"\b" + lang + r"\s*:\s*\[(.*?)\]",
                inner,
                re.DOTALL,
            )
            if not ap:
                out[lang] = None
                continue
            arr_inner = ap.group(1).strip()
            if arr_inner == "":
                out[lang] = []
                continue
            # Stringek extrahálása az arr_inner-ből
            strs = re.findall(
                r"\"((?:[^\"\\]|\\.)*)\"|'((?:[^'\\]|\\.)*)'",
                arr_inner,
                re.DOTALL,
            )
            items = []
            for a, b in strs:
                s = a if a else b
                s = s.replace('\\"', '"').replace("\\'", "'").replace("\\\\", "\\")
                items.append(s)
            out[lang] = items
        return out
    return None


# ---------- Generátorok ----------

def join_facts_lower(facts, max_n=3):
    """Mondatba fűzi az első N factsot, vesszővel."""
    if not facts:
        return ""
    sel = facts[:max_n]
    sel = [s.rstrip(".").strip() for s in sel]
    if len(sel) == 1:
        return sel[0]
    return ", ".join(sel[:-1]) + " és " + sel[-1] if False else ", ".join(sel)


def generate_description_advanced(name, desc, facts, lang):
    """Generál descriptionAdvanced szöveget az adott nyelven. Visszaadja None-t,
    ha hiányzik forrás (bizonytalan)."""
    if not name or not desc:
        return None
    if not facts or len(facts) < 2:
        return None
    facts_joined = join_facts_lower(facts, 3).lower()
    template = DESC_TEMPLATES[lang]
    text = template.format(name=name, desc=desc.strip(), facts_joined=facts_joined)
    # Word count check: 80-150
    words = text.split()
    if len(words) < 60:  # túl rövid
        # Adjunk hozzá még egy mondatot
        extra_facts = EXTRA_FACTS_TEMPLATES[lang]
        text += " " + extra_facts[0].format(name=name)
    if len(words) > 200:
        return None
    return text


def generate_facts_advanced(name, facts, lang):
    """Generál factsAdvanced tömböt. 6-8 elem."""
    if not name or not facts or len(facts) < 3:
        return None
    out = list(facts)  # kezdjük a meglévő fact-ekkel
    # Egészítsük ki templatekkel
    extras = EXTRA_FACTS_TEMPLATES[lang]
    for ex in extras:
        if len(out) >= 7:
            break
        out.append(ex.format(name=name))
    # 6-8 elem
    if len(out) < 6:
        return None
    return out[:8]


# ---------- Csere a POI-blokkban ----------

def escape_ts_string(s: str) -> str:
    return s.replace("\\", "\\\\").replace('"', '\\"')


def fill_block(block: str, stats: dict) -> str:
    """Egy POI-blokk üres descAdv/factsAdv helyeit kitölti."""
    name = extract_localized_string(block, "name")
    desc = extract_localized_string(block, "description")
    facts = extract_localized_array(block, "facts")

    if not name or not desc or not facts:
        return block  # nincs elég forrás, kihagyás

    # 1) descriptionAdvanced: keressük az üres `lang: ""` mezőket az descriptionAdvanced blokkban.
    block = fill_localized_string_block(block, "descriptionAdvanced",
                                        lambda lang: generate_description_advanced(
                                            name.get(lang),
                                            desc.get(lang),
                                            facts.get(lang),
                                            lang),
                                        stats, "desc")

    # 2) factsAdvanced
    block = fill_localized_array_block(block, "factsAdvanced",
                                       lambda lang: generate_facts_advanced(
                                           name.get(lang),
                                           facts.get(lang),
                                           lang),
                                       stats, "facts")

    return block


def find_block_brace_range(block: str, key: str):
    """Megkeresi a `key: { ... }` blokk határát (brace open/close indexek)."""
    idx = 0
    while True:
        idx = block.find(key, idx)
        if idx == -1:
            return None
        prev_ch = block[idx - 1] if idx > 0 else " "
        if prev_ch.isalnum() or prev_ch == "_":
            idx += len(key)
            continue
        # Ellenőrzés: utána `:` jön (esetleg whitespace)
        after = block[idx + len(key):]
        m = re.match(r"\s*:\s*\{", after)
        if not m:
            idx += len(key)
            continue
        brace_open = idx + len(key) + m.end() - 1
        # Balance
        depth = 0
        in_str = False
        str_ch = None
        escape = False
        for j in range(brace_open, len(block)):
            ch = block[j]
            if escape:
                escape = False
                continue
            if in_str:
                if ch == "\\":
                    escape = True
                elif ch == str_ch:
                    in_str = False
                continue
            if ch == '"' or ch == "'":
                in_str = True
                str_ch = ch
                continue
            if ch == "{":
                depth += 1
            elif ch == "}":
                depth -= 1
                if depth == 0:
                    return (brace_open, j)
        return None


def fill_localized_string_block(block: str, key: str, gen_fn, stats: dict, kind: str) -> str:
    rng = find_block_brace_range(block, key)
    if not rng:
        return block
    open_i, close_i = rng
    inner = block[open_i + 1:close_i]
    new_inner = inner
    for lang in LANGS:
        # Megkeressük az adott nyelvű mezőt: lang: "..."
        # Csak akkor cseréljük, ha üres ("")
        # Több előfordulás is lehet (pl. duplikált en: ""), kezeljük az ELSŐT.
        pat = re.compile(
            r"(\b" + lang + r"\s*:\s*)\"\"",
            re.DOTALL,
        )
        m = pat.search(new_inner)
        if not m:
            continue
        # Ellenőrizzük: csak az ÜRES "" mezőket cseréljük (a regex pont ezt nézi)
        generated = gen_fn(lang)
        if generated is None:
            stats["skipped_" + kind] = stats.get("skipped_" + kind, 0) + 1
            continue
        replacement = m.group(1) + '"' + escape_ts_string(generated) + '"'
        new_inner = new_inner[:m.start()] + replacement + new_inner[m.end():]
        stats["filled_" + kind] = stats.get("filled_" + kind, 0) + 1

    return block[:open_i + 1] + new_inner + block[close_i:]


def fill_localized_array_block(block: str, key: str, gen_fn, stats: dict, kind: str) -> str:
    rng = find_block_brace_range(block, key)
    if not rng:
        return block
    open_i, close_i = rng
    inner = block[open_i + 1:close_i]
    new_inner = inner
    for lang in LANGS:
        # lang: []
        pat = re.compile(
            r"(\b" + lang + r"\s*:\s*)\[\s*\]",
            re.DOTALL,
        )
        m = pat.search(new_inner)
        if not m:
            continue
        generated = gen_fn(lang)
        if generated is None:
            stats["skipped_" + kind] = stats.get("skipped_" + kind, 0) + 1
            continue
        items_str = ", ".join('"' + escape_ts_string(it) + '"' for it in generated)
        replacement = m.group(1) + "[" + items_str + "]"
        new_inner = new_inner[:m.start()] + replacement + new_inner[m.end():]
        stats["filled_" + kind] = stats.get("filled_" + kind, 0) + 1

    return block[:open_i + 1] + new_inner + block[close_i:]


# ---------- Fő ----------

def process_file(path: Path, stats: dict):
    content = path.read_text(encoding="utf-8")
    result = split_pois(content)
    if len(result) != 4:
        print(f"  [SKIP] Could not parse {path.name}", file=sys.stderr)
        return
    prefix, body, suffix, pois = result

    new_body_parts = []
    last_end = 0
    for start, end, blk in pois:
        new_body_parts.append(body[last_end:start])
        new_blk = fill_block(blk, stats)
        new_body_parts.append(new_blk)
        last_end = end
    new_body_parts.append(body[last_end:])
    new_content = prefix + "".join(new_body_parts) + suffix

    if new_content != content:
        path.write_text(new_content, encoding="utf-8")
        print(f"  [OK] Wrote {path.name}")
    else:
        print(f"  [..] No changes in {path.name}")


def main():
    files = sorted(DATA_DIR.glob(FILES_GLOB))
    print(f"Found {len(files)} files in {DATA_DIR}")
    stats = {}
    for f in files:
        print(f"Processing: {f.name}")
        process_file(f, stats)
    print("\n=== Stats ===")
    for k in sorted(stats.keys()):
        print(f"  {k}: {stats[k]}")


if __name__ == "__main__":
    main()
