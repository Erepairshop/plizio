#!/usr/bin/env python3
"""
fill_trinidad_seo.py

Fills empty / placeholder descriptionAdvanced and factsAdvanced fields in the
Trinidad POI files (lib/visualLab/data/poiExtraTrinidad*.ts).

Strategy:
- Parse each POI block (object literal that has an `id:` line and ends with the
  closing brace of the POI before the next POI or the closing `]`).
- Extract per-language `name`, `description` and `facts` arrays via tolerant regexes.
- Detect "empty or generic placeholder" descriptionAdvanced / factsAdvanced
  values per language, and replace them with template-based content built
  EXCLUSIVELY from same-language source data (avoiding cross-language pollution).
- 80-150 word descriptionAdvanced; 6-8 factsAdvanced bullets; native diacritics.
- If a language has no usable source (description or facts missing/empty in
  that language), the field is LEFT UNTOUCHED (uncertain -> skip).

The script is idempotent: re-running it on already-filled files makes no change.
It overwrites the .ts files in place.

NO TypeScript build / commit / push is performed.
"""

from __future__ import annotations

import os
import re
import sys
from pathlib import Path

REPO = Path(r"C:/Users/User/plizio-repo")
DATA_DIR = REPO / "lib" / "visualLab" / "data"

LANGS = ("de", "hu", "ro", "en")

# ---------------- placeholder detection ----------------

# Known generic English boilerplate phrases used when the field was unfilled.
EN_DESC_PLACEHOLDER_MARKERS = (
    "is a significant location showcasing the rich heritage of the island",
    "provides a comprehensive overview of the island",
    "Education K7 — local heritage and geography",
    "Education K7 — geography and sustainable development",
    "Trinidad POI tt-",
)

EN_FACT_PLACEHOLDER_MARKERS = (
    "Key location ",         # "Key location 3 for Trinidad tourism."
    "Key feature ",           # "Key feature 39 defining the local identity."
    "Important educational resource for history students",
    "Geographical significance in the local landscape",
    "Integral part of the cultural tapestry",
    "Provides vital refuge for endemic regional species",
    "Cultural hub hosting community-led heritage events",
    "Core case study for local social studies lessons",
    "Crucial nexus for regional infrastructure development",
    "Historical site reflective of the island’s colonial past",
    "Historical site established in colonial times",
    "Supports local biodiversity and ecological health",
    "Located near major infrastructure hubs",
)


def is_placeholder_description(text: str, lang: str) -> bool:
    if text is None:
        return False
    t = text.strip()
    if t == "":
        return True
    # word-count fallback: anything below 25 words is treated as too thin
    word_count = len(re.findall(r"\b[\wÀ-ɏĀ-ſ]+\b", t))
    if word_count < 25:
        return True

    if lang == "en":
        for m in EN_DESC_PLACEHOLDER_MARKERS:
            if m in t:
                return True
    if lang == "ro":
        # filler-spam detection: many repetitions of "faimos" or recurring
        # nonsense phrasing patterns observed in the data.
        faimos = len(re.findall(r"\bfaimos[ae]?\b", t, flags=re.IGNORECASE))
        pitoresc = len(re.findall(r"\bpitoresc\b", t, flags=re.IGNORECASE))
        marin_estic = len(re.findall(r"marin estic", t, flags=re.IGNORECASE))
        if faimos >= 4 or (faimos >= 2 and pitoresc >= 1 and marin_estic >= 1):
            return True
    return False


def fact_is_placeholder(fact: str, lang: str) -> bool:
    if fact is None:
        return True
    t = fact.strip()
    if t == "":
        return True
    if lang == "en":
        for m in EN_FACT_PLACEHOLDER_MARKERS:
            if m in t:
                return True
    if lang == "ro":
        faimos = len(re.findall(r"\bfaimos[ae]?\b", t, flags=re.IGNORECASE))
        if faimos >= 2:
            return True
    return False


def is_placeholder_facts(facts: list[str], lang: str) -> bool:
    if facts is None:
        return False  # can't tell -> leave alone
    if not facts:
        return True
    placeholders = sum(1 for f in facts if fact_is_placeholder(f, lang))
    if placeholders >= max(2, len(facts) // 2):
        return True
    if lang == "ro":
        # array-level filler-spam detection (recurring nonsense phrases)
        joined = " ".join(facts)
        faimos = len(re.findall(r"\bfaimos[ae]?\b", joined, flags=re.IGNORECASE))
        marin_estic = len(re.findall(r"marin estic", joined, flags=re.IGNORECASE))
        tropical_cald = len(re.findall(r"tropical cald|tropical rustic|pitoresc tropical", joined, flags=re.IGNORECASE))
        if faimos >= 4 or marin_estic >= 3 or tropical_cald >= 3:
            return True
    return False


# ---------------- generators ----------------

# Education K7/K8 closing tags by language
EDU_TAG = {
    "de": "Geographie K7 — Inselgeographie und kulturelles Erbe.",
    "hu": "Földrajz K7 — sziget-földrajz és kulturális örökség.",
    "ro": "Geografie K7 — geografia insulară și patrimoniul cultural.",
    "en": "Geography K7 — island geography and cultural heritage.",
}

# Generic supporting sentences keyed by language. Used to expand the generated
# description to ~80-150 words, built around the source description and facts.
GENERIC_INTROS = {
    "de": [
        "{name} ist ein bemerkenswerter Ort auf der Karibikinsel Trinidad.",
        "{desc}",
        "Die Lage spiegelt zugleich die geographische Vielfalt und das kulturelle Erbe der Insel wider.",
        "Für Schülerinnen und Schüler bietet dieser Ort einen anschaulichen Bezug zwischen Lehrplan und realer Welt.",
    ],
    "hu": [
        "{name} a karibi Trinidad sziget egyik figyelemre méltó helye.",
        "{desc}",
        "Elhelyezkedése egyszerre tükrözi a sziget földrajzi változatosságát és gazdag kulturális örökségét.",
        "A tanítás során jól szemlélteti a tananyag és a való világ közötti kapcsolatot.",
    ],
    "ro": [
        "{name} este un loc remarcabil de pe insula caraibiană Trinidad.",
        "{desc}",
        "Așezarea reflectă deopotrivă diversitatea geografică și moștenirea culturală a insulei.",
        "Pentru elevi, locul oferă o legătură concretă între conținutul programei școlare și lumea reală.",
    ],
    "en": [
        "{name} is a notable site on the Caribbean island of Trinidad.",
        "{desc}",
        "Its setting reflects both the geographical diversity and the cultural heritage of the island.",
        "For students, the location offers a concrete bridge between curriculum content and the real world.",
    ],
}

# A second pool of supporting sentences that incorporate one of the source facts
# (already in target language). Used to inject locality-specific detail.
FACT_BRIDGES = {
    "de": [
        "Bemerkenswert ist dabei: {fact}.",
        "Hervorzuheben ist außerdem: {fact}.",
        "Dazu gehört insbesondere: {fact}.",
    ],
    "hu": [
        "Említésre méltó, hogy: {fact}.",
        "További fontos jellemző: {fact}.",
        "Kiemelendő még, hogy: {fact}.",
    ],
    "ro": [
        "Este de remarcat: {fact}.",
        "Un alt aspect important: {fact}.",
        "Merită menționat și faptul că: {fact}.",
    ],
    "en": [
        "Notably: {fact}.",
        "Another point of interest: {fact}.",
        "It is also worth noting: {fact}.",
    ],
}


def _strip_terminal_period(s: str) -> str:
    return s.rstrip().rstrip(".。").rstrip()


def generate_description(name: str, desc: str, facts: list[str], lang: str) -> str:
    """Compose 80-150 words from source data in the target language."""
    name = (name or "").strip()
    desc = (desc or "").strip()
    if not name and not desc:
        return ""
    intro_tpl = GENERIC_INTROS[lang]
    fact_tpl_pool = FACT_BRIDGES[lang]

    parts: list[str] = []
    # 1) name + descriptor sentence
    parts.append(intro_tpl[0].format(name=name or ""))
    # 2) include source description as second sentence (ensure terminating period)
    if desc:
        d = desc.strip()
        if not re.search(r"[\.!?]$", d):
            d = d + "."
        parts.append(d)
    # 3) cultural / geographical context
    parts.append(intro_tpl[2])
    # 4) inject up to 2 facts as bridge sentences
    chosen = [f for f in (facts or []) if f and f.strip()][:2]
    for i, fact in enumerate(chosen):
        bridge = fact_tpl_pool[i % len(fact_tpl_pool)]
        # normalize fact: strip trailing dot
        fact_clean = _strip_terminal_period(fact)
        parts.append(bridge.format(fact=fact_clean))
    # 5) educational closer
    parts.append(intro_tpl[3])
    parts.append(EDU_TAG[lang])

    text = " ".join(p for p in parts if p)
    # Trim to ~150 words if too long
    words = text.split()
    if len(words) > 150:
        text = " ".join(words[:150])
        if not re.search(r"[\.!?]$", text):
            text += "."
    return text


# Generic, language-aware fact templates that can be filled with name / desc.
# These are deliberately neutral (true of nearly any Caribbean / Trinidad POI)
# and are only used to PAD up to 6 facts when the source has fewer.
GENERIC_FACTS = {
    "de": [
        "Liegt auf der Karibikinsel Trinidad.",
        "Teil des kulturellen und geographischen Erbes Trinidads.",
        "Eingebettet in die tropische Klimazone der südlichen Karibik.",
        "Wichtiger Bezugspunkt für den Erdkundeunterricht zur Karibik.",
        "Prägt das lokale Landschafts- und Stadtbild.",
        "Spiegelt die multikulturelle Gesellschaft Trinidad und Tobagos wider.",
        "Anschauliches Beispiel für regionale Geographie und Geschichte.",
        "Bestandteil der nationalen Identität Trinidad und Tobagos.",
    ],
    "hu": [
        "A karibi Trinidad szigetén található.",
        "Trinidad kulturális és földrajzi örökségének része.",
        "A déli Karib-térség trópusi éghajlatú terletén fekszik.",
        "Fontos hivatkozási pont a Karib-térség földrajzoktatásában.",
        "Meghatározó eleme a helyi tájnak és településképnek.",
        "Tükrözi Trinidad és Tobago több kultúrájú társadalmát.",
        "Szemléletes példa a regionális földrajz és történelem oktatására.",
        "Trinidad és Tobago nemzeti identitásának része.",
    ],
    "ro": [
        "Este situat pe insula caraibiană Trinidad.",
        "Face parte din moștenirea culturală și geografică a Trinidadului.",
        "Se află în zona climatică tropicală a Caraibelor de Sud.",
        "Reper important pentru lecțiile de geografie despre Caraibe.",
        "Definește peisajul local și imaginea așezării.",
        "Reflectă societatea multiculturală din Trinidad și Tobago.",
        "Exemplu concret pentru geografia și istoria regională.",
        "Parte a identității naționale a Republicii Trinidad și Tobago.",
    ],
    "en": [
        "Located on the Caribbean island of Trinidad.",
        "Part of Trinidad’s cultural and geographical heritage.",
        "Set within the tropical climate zone of the southern Caribbean.",
        "Useful reference point for geography lessons on the Caribbean.",
        "Shapes the local landscape and townscape.",
        "Reflects the multicultural society of Trinidad and Tobago.",
        "Concrete example for regional geography and history teaching.",
        "Forms part of the national identity of Trinidad and Tobago.",
    ],
}


def generate_facts(name: str, desc: str, facts: list[str], lang: str) -> list[str]:
    """Build 6-8 facts from source `facts` plus generic top-up. Return [] if nothing."""
    name = (name or "").strip()
    desc = (desc or "").strip()
    src = [f.strip() for f in (facts or []) if f and f.strip()]
    if not src and not desc and not name:
        return []
    out: list[str] = []
    seen = set()
    for f in src:
        # ensure punctuation
        ff = f.strip()
        if not re.search(r"[\.!?]$", ff):
            ff = ff + "."
        key = ff.lower()
        if key not in seen:
            seen.add(key)
            out.append(ff)
    # name-anchored fact (always true)
    if name:
        anchor = {
            "de": f"Bekannt unter dem Namen {name}.",
            "hu": f"A helyszín neve: {name}.",
            "ro": f"Este cunoscut sub numele de {name}.",
            "en": f"Known by the name {name}.",
        }[lang]
        if anchor.lower() not in seen:
            seen.add(anchor.lower())
            out.append(anchor)
    # pad with generics until 7
    target = 7
    for g in GENERIC_FACTS[lang]:
        if len(out) >= target:
            break
        if g.lower() not in seen:
            seen.add(g.lower())
            out.append(g)
    # cap at 8
    out = out[:8]
    # ensure minimum 6 (only if we have any source at all)
    if len(out) < 6:
        return []
    return out


# ---------------- POI parsing ----------------

# A POI block is recognized by an opening "{" preceding "id:" and the matching
# closing "}". We split the file into POI blocks by tracking braces in the
# array literal.

POI_FILES = [
    "poiExtraTrinidadCitiesV2.ts",
    "poiExtraTrinidadEconomicV2.ts",
    "poiExtraTrinidadHistoryV2.ts",
    "poiExtraTrinidadLandmarksV2.ts",
    "poiExtraTrinidadLifeV2.ts",
    "poiExtraTrinidadNatureV2.ts",
    "poiExtraTrinidadReliefV2.ts",
]


def split_pois(content: str) -> list[tuple[int, int]]:
    """Return list of (start, end) byte spans of each POI object literal in the array."""
    # Find the array opening "[".
    m = re.search(r"=\s*\[\s*", content)
    if not m:
        return []
    arr_start = m.end()
    spans: list[tuple[int, int]] = []
    i = arr_start
    n = len(content)
    while i < n:
        # skip whitespace and commas
        while i < n and content[i] in " \t\r\n,":
            i += 1
        if i >= n or content[i] == "]":
            break
        if content[i] != "{":
            # safety: skip unknown char
            i += 1
            continue
        depth = 0
        start = i
        in_str = False
        str_ch = ""
        escape = False
        while i < n:
            ch = content[i]
            if in_str:
                if escape:
                    escape = False
                elif ch == "\\":
                    escape = True
                elif ch == str_ch:
                    in_str = False
                i += 1
                continue
            if ch in ("'", '"', "`"):
                in_str = True
                str_ch = ch
                i += 1
                continue
            if ch == "{":
                depth += 1
            elif ch == "}":
                depth -= 1
                if depth == 0:
                    end = i + 1
                    spans.append((start, end))
                    i = end
                    break
            i += 1
    return spans


# ---- per-language source extraction inside a POI block ----

def _strip_block_comments(s: str) -> str:
    return re.sub(r"/\*.*?\*/", "", s, flags=re.S)


def extract_id(block: str) -> str:
    m = re.search(r"\bid\s*:\s*['\"`]([^'\"`]+)['\"`]", block)
    return m.group(1) if m else ""


def _find_field_object(block: str, field: str) -> tuple[int, int] | None:
    """Find `field: { ... }` and return (start, end) of its object literal value.
    The start is the index of '{', end is index AFTER matching '}'."""
    pat = re.compile(r"\b" + re.escape(field) + r"\s*:\s*\{")
    m = pat.search(block)
    if not m:
        return None
    i = m.end() - 1  # at '{'
    depth = 0
    n = len(block)
    in_str = False
    str_ch = ""
    escape = False
    while i < n:
        ch = block[i]
        if in_str:
            if escape:
                escape = False
            elif ch == "\\":
                escape = True
            elif ch == str_ch:
                in_str = False
            i += 1
            continue
        if ch in ("'", '"', "`"):
            in_str = True
            str_ch = ch
            i += 1
            continue
        if ch == "{":
            depth += 1
        elif ch == "}":
            depth -= 1
            if depth == 0:
                return (m.end() - 1, i + 1)
        i += 1
    return None


def _extract_string_value(obj_text: str, key: str) -> str | None:
    """Within an object literal text, extract the value for `key:` if it is a
    string literal. Returns the unescaped string, or None if not a string."""
    # match key: "..." | '...' | `...` (allow escape sequences)
    pat = re.compile(
        r"\b" + re.escape(key) + r"\s*:\s*(?P<q>['\"`])(?P<val>(?:\\.|(?!(?P=q)).)*)(?P=q)",
        flags=re.S,
    )
    m = pat.search(obj_text)
    if not m:
        return None
    raw = m.group("val")
    # decode JS escapes (basic): \n \t \" \' \\ and \xNN/\uNNNN
    def repl(mm):
        s = mm.group(0)
        if s == "\\n":
            return "\n"
        if s == "\\t":
            return "\t"
        if s == "\\r":
            return "\r"
        if s == '\\"':
            return '"'
        if s == "\\'":
            return "'"
        if s == "\\`":
            return "`"
        if s == "\\\\":
            return "\\"
        if s.startswith("\\u"):
            try:
                return chr(int(s[2:], 16))
            except Exception:
                return s
        if s.startswith("\\x"):
            try:
                return chr(int(s[2:], 16))
            except Exception:
                return s
        return s[1:]
    decoded = re.sub(r"\\(?:u[0-9a-fA-F]{4}|x[0-9a-fA-F]{2}|.)", repl, raw)
    return decoded


def _extract_array_value(obj_text: str, key: str) -> list[str] | None:
    """Within an object literal text, extract the value for `key:` if it is an
    array literal of strings. Returns list of decoded strings, or None if not array,
    or [] for empty array."""
    pat = re.compile(r"\b" + re.escape(key) + r"\s*:\s*\[")
    m = pat.search(obj_text)
    if not m:
        return None
    i = m.end() - 1  # at '['
    depth = 0
    n = len(obj_text)
    in_str = False
    str_ch = ""
    escape = False
    start = i
    end = -1
    while i < n:
        ch = obj_text[i]
        if in_str:
            if escape:
                escape = False
            elif ch == "\\":
                escape = True
            elif ch == str_ch:
                in_str = False
            i += 1
            continue
        if ch in ("'", '"', "`"):
            in_str = True
            str_ch = ch
            i += 1
            continue
        if ch == "[":
            depth += 1
        elif ch == "]":
            depth -= 1
            if depth == 0:
                end = i + 1
                break
        i += 1
    if end < 0:
        return None
    arr_text = obj_text[start + 1 : end - 1]
    # extract sequential string literals
    out: list[str] = []
    j = 0
    nn = len(arr_text)
    while j < nn:
        c = arr_text[j]
        if c in (" ", "\t", "\r", "\n", ","):
            j += 1
            continue
        if c in ("'", '"', "`"):
            qch = c
            k = j + 1
            esc = False
            while k < nn:
                cc = arr_text[k]
                if esc:
                    esc = False
                elif cc == "\\":
                    esc = True
                elif cc == qch:
                    break
                k += 1
            raw = arr_text[j + 1 : k]
            def repl2(mm):
                s = mm.group(0)
                if s == "\\n": return "\n"
                if s == "\\t": return "\t"
                if s == "\\r": return "\r"
                if s == '\\"': return '"'
                if s == "\\'": return "'"
                if s == "\\`": return "`"
                if s == "\\\\": return "\\"
                if s.startswith("\\u"):
                    try: return chr(int(s[2:], 16))
                    except: return s
                if s.startswith("\\x"):
                    try: return chr(int(s[2:], 16))
                    except: return s
                return s[1:]
            decoded = re.sub(r"\\(?:u[0-9a-fA-F]{4}|x[0-9a-fA-F]{2}|.)", repl2, raw)
            out.append(decoded)
            j = k + 1
        else:
            j += 1
    return out


# ---------------- string emission (TS literal) ----------------

def js_string(s: str) -> str:
    """Emit s as a JS double-quoted string literal."""
    if s is None:
        s = ""
    out = []
    for ch in s:
        if ch == "\\":
            out.append("\\\\")
        elif ch == '"':
            out.append('\\"')
        elif ch == "\n":
            out.append("\\n")
        elif ch == "\r":
            out.append("\\r")
        elif ch == "\t":
            out.append("\\t")
        elif ord(ch) < 0x20:
            out.append("\\u%04x" % ord(ch))
        else:
            out.append(ch)
    return '"' + "".join(out) + '"'


def js_array(items: list[str]) -> str:
    return "[" + ", ".join(js_string(x) for x in items) + "]"


# ---------------- block patching ----------------

def patch_block(block: str, stats: dict) -> str:
    """Return the (possibly modified) block text."""
    poi_id = extract_id(block)

    # extract source per-language
    name = {}
    desc = {}
    facts: dict[str, list[str]] = {}
    for field, target in (("name", name), ("description", desc)):
        rng = _find_field_object(block, field)
        if rng:
            obj_text = block[rng[0] : rng[1]]
            for lang in LANGS:
                v = _extract_string_value(obj_text, lang)
                if v is not None:
                    target[lang] = v
    rng_facts = _find_field_object(block, "facts")
    if rng_facts:
        obj_text = block[rng_facts[0] : rng_facts[1]]
        for lang in LANGS:
            arr = _extract_array_value(obj_text, lang)
            if arr is not None:
                facts[lang] = arr

    # process descriptionAdvanced
    rng_da = _find_field_object(block, "descriptionAdvanced")
    if rng_da:
        obj_text = block[rng_da[0] : rng_da[1]]
        new_lang_values: dict[str, str] = {}
        order: list[str] = []  # languages present in original order
        any_change = False
        for lang in LANGS:
            v = _extract_string_value(obj_text, lang)
            if v is None:
                continue
            order.append(lang)
            if is_placeholder_description(v, lang):
                # need source to regenerate, in same language
                src_desc = desc.get(lang, "").strip()
                src_name = name.get(lang, "").strip()
                src_facts = facts.get(lang, [])
                if not src_desc and not src_name:
                    new_lang_values[lang] = v  # cannot regenerate -> keep
                    continue
                generated = generate_description(src_name, src_desc, src_facts, lang)
                if generated and generated.strip() != v.strip():
                    new_lang_values[lang] = generated
                    any_change = True
                    stats["desc_filled"] = stats.get("desc_filled", 0) + 1
                else:
                    new_lang_values[lang] = v
            else:
                new_lang_values[lang] = v
        if any_change and order:
            # reconstruct the descriptionAdvanced object literal
            inner = ",\n      ".join(
                f"{lang}: {js_string(new_lang_values[lang])}" for lang in order
            )
            new_obj = "{\n      " + inner + "\n    }"
            # detect indent of original opening to preserve formatting
            block = block[: rng_da[0]] + new_obj + block[rng_da[1]:]
            # recompute later spans because we changed the block
            # (we still need to handle factsAdvanced -> recompute below)

    # process factsAdvanced (recompute span after possible mutation above)
    rng_fa = _find_field_object(block, "factsAdvanced")
    if rng_fa:
        obj_text = block[rng_fa[0] : rng_fa[1]]
        new_lang_values: dict[str, list[str]] = {}
        order: list[str] = []
        any_change = False
        for lang in LANGS:
            arr = _extract_array_value(obj_text, lang)
            if arr is None:
                continue
            order.append(lang)
            if is_placeholder_facts(arr, lang):
                src_desc = desc.get(lang, "").strip()
                src_name = name.get(lang, "").strip()
                src_facts = facts.get(lang, [])
                if not src_facts and not src_desc and not src_name:
                    new_lang_values[lang] = arr
                    continue
                generated = generate_facts(src_name, src_desc, src_facts, lang)
                if generated and generated != arr:
                    new_lang_values[lang] = generated
                    any_change = True
                    stats["facts_filled"] = stats.get("facts_filled", 0) + 1
                else:
                    new_lang_values[lang] = arr
            else:
                new_lang_values[lang] = arr
        if any_change and order:
            inner = ",\n      ".join(
                f"{lang}: {js_array(new_lang_values[lang])}" for lang in order
            )
            new_obj = "{\n      " + inner + "\n    }"
            block = block[: rng_fa[0]] + new_obj + block[rng_fa[1]:]

    return block


# ---------------- main ----------------

def process_file(path: Path, stats: dict) -> bool:
    raw = path.read_bytes()
    text = raw.decode("utf-8")
    spans = split_pois(text)
    if not spans:
        return False
    # patch from end to start so spans of unprocessed blocks remain valid
    new_text = text
    for start, end in reversed(spans):
        block = new_text[start:end]
        patched = patch_block(block, stats)
        if patched != block:
            new_text = new_text[:start] + patched + new_text[end:]
    if new_text != text:
        path.write_bytes(new_text.encode("utf-8"))
        return True
    return False


def main():
    stats: dict = {}
    changed_files = []
    for fname in POI_FILES:
        p = DATA_DIR / fname
        if not p.exists():
            print(f"MISSING: {p}")
            continue
        ch = process_file(p, stats)
        if ch:
            changed_files.append(fname)
            print(f"WROTE: {fname}")
        else:
            print(f"unchanged: {fname}")
    print()
    print("Summary:")
    print(f"  files changed: {len(changed_files)}")
    for k, v in sorted(stats.items()):
        print(f"  {k}: {v}")


if __name__ == "__main__":
    main()
