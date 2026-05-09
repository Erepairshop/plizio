#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Fill empty descriptionAdvanced / factsAdvanced fields in
lib/visualLab/data/poiExtraDominicanrepublic*V2.ts files.

Dominican Republic-specific closers / extra facts highlight:
eastern half of Hispaniola, Caribbean Sea, Santo Domingo (oldest
European city of the Americas), Pico Duarte, Cordillera Central,
Spanish colonial heritage, coffee / sugarcane / cocoa / cigar economy,
merengue and bachata culture.
"""
from __future__ import annotations

import re
import sys
from pathlib import Path

REPO = Path("C:/Users/User/plizio-repo")
DATA_DIR = REPO / "lib/visualLab/data"
FILES = [
    "poiExtraDominicanrepublicCitiesV2.ts",
    "poiExtraDominicanrepublicEconomicV2.ts",
    "poiExtraDominicanrepublicHistoryV2.ts",
    "poiExtraDominicanrepublicLandmarksV2.ts",
    "poiExtraDominicanrepublicLifeV2.ts",
    "poiExtraDominicanrepublicNatureV2.ts",
    "poiExtraDominicanrepublicReliefV2.ts",
]
LANGS = ("de", "hu", "ro", "en")

# ---------- helpers: balanced-brace block extractor ----------

def find_matching_brace(text: str, open_idx: int) -> int:
    assert text[open_idx] == "{"
    i = open_idx + 1
    depth = 1
    n = len(text)
    while i < n and depth > 0:
        c = text[i]
        if c == "\\":
            i += 2
            continue
        if c in ("'", '"', "`"):
            quote = c
            i += 1
            while i < n:
                cc = text[i]
                if cc == "\\":
                    i += 2
                    continue
                if cc == quote:
                    i += 1
                    break
                i += 1
            continue
        if c == "{":
            depth += 1
        elif c == "}":
            depth -= 1
            if depth == 0:
                return i
        i += 1
    raise ValueError("unmatched brace")


def split_pois(file_text: str):
    arr_open = re.search(r"=\s*\[", file_text)
    if not arr_open:
        raise ValueError("array literal not found")
    arr_start = arr_open.end()
    depth = 1
    i = arr_start
    n = len(file_text)
    arr_end = -1
    while i < n and depth > 0:
        c = file_text[i]
        if c == "\\":
            i += 2
            continue
        if c in ("'", '"', "`"):
            quote = c
            i += 1
            while i < n:
                cc = file_text[i]
                if cc == "\\":
                    i += 2
                    continue
                if cc == quote:
                    i += 1
                    break
                i += 1
            continue
        if c == "[":
            depth += 1
        elif c == "]":
            depth -= 1
            if depth == 0:
                arr_end = i
                break
        i += 1
    if arr_end < 0:
        raise ValueError("array end not found")

    poi_spans = []
    j = arr_start
    while j < arr_end:
        while j < arr_end and file_text[j] in " \t\r\n,":
            j += 1
        if j >= arr_end:
            break
        if file_text[j] != "{":
            j += 1
            continue
        end = find_matching_brace(file_text, j)
        poi_spans.append((j, end + 1))
        j = end + 1

    return file_text[:arr_start], poi_spans, file_text[arr_end:]


def find_key_blocks(poi_text: str, key: str):
    spans = []
    n = len(poi_text)
    i = 0
    while i < n and poi_text[i] != "{":
        i += 1
    i += 1
    depth = 1
    pat = re.compile(r"\b" + re.escape(key) + r"\s*:\s*\{")
    while i < n and depth > 0:
        c = poi_text[i]
        if c == "\\":
            i += 2
            continue
        if c in ("'", '"', "`"):
            quote = c
            i += 1
            while i < n:
                cc = poi_text[i]
                if cc == "\\":
                    i += 2
                    continue
                if cc == quote:
                    i += 1
                    break
                i += 1
            continue
        if c == "{":
            depth += 1
            i += 1
            continue
        if c == "}":
            depth -= 1
            i += 1
            continue
        if depth == 1:
            m = pat.match(poi_text, i)
            if m:
                brace_pos = m.end() - 1
                end_pos = find_matching_brace(poi_text, brace_pos)
                spans.append((m.start(), end_pos + 1))
                i = end_pos + 1
                continue
        i += 1
    return spans


STRING_VAL_RE = re.compile(r'"((?:[^"\\]|\\.)*)"', re.DOTALL)


def parse_lang_string_block(block_text: str):
    out = {l: None for l in LANGS}
    inner = block_text.strip()
    assert inner.startswith("{") and inner.endswith("}"), inner[:30]
    body = inner[1:-1]
    for lang in LANGS:
        m = re.search(r"\b" + lang + r"\s*:\s*", body)
        if not m:
            continue
        rest = body[m.end():]
        val_m = re.match(r"\s*\"((?:[^\"\\]|\\.)*)\"", rest)
        if val_m:
            out[lang] = unescape_ts_string(val_m.group(1))
        else:
            out[lang] = None
    return out


def parse_lang_array_block(block_text: str):
    out = {l: None for l in LANGS}
    inner = block_text.strip()
    assert inner.startswith("{") and inner.endswith("}")
    body = inner[1:-1]
    for lang in LANGS:
        m = re.search(r"\b" + lang + r"\s*:\s*\[", body)
        if not m:
            continue
        idx = m.end() - 1
        depth = 1
        j = idx + 1
        n = len(body)
        while j < n and depth > 0:
            c = body[j]
            if c == "\\":
                j += 2
                continue
            if c in ("'", '"', "`"):
                quote = c
                j += 1
                while j < n:
                    cc = body[j]
                    if cc == "\\":
                        j += 2
                        continue
                    if cc == quote:
                        j += 1
                        break
                    j += 1
                continue
            if c == "[":
                depth += 1
            elif c == "]":
                depth -= 1
                if depth == 0:
                    break
            j += 1
        arr_body = body[idx + 1: j]
        items = []
        for sm in STRING_VAL_RE.finditer(arr_body):
            items.append(unescape_ts_string(sm.group(1)))
        out[lang] = items
    return out


def unescape_ts_string(s: str) -> str:
    return (s.replace('\\"', '"')
             .replace("\\\\", "\\")
             .replace("\\n", "\n")
             .replace("\\t", "\t"))


def escape_ts_string(s: str) -> str:
    return (s.replace("\\", "\\\\")
             .replace('"', '\\"')
             .replace("\n", " ")
             .replace("\r", " ")
             .replace("\t", " "))


def extract_top_lang_string_block(poi_text: str, key: str):
    spans = find_key_blocks(poi_text, key)
    if not spans:
        return None
    s, e = spans[-1]
    block = poi_text[s:e]
    brace_pos = block.index("{")
    val_block = block[brace_pos:]
    return parse_lang_string_block(val_block)


def extract_top_lang_array_block(poi_text: str, key: str):
    spans = find_key_blocks(poi_text, key)
    if not spans:
        return None
    s, e = spans[-1]
    block = poi_text[s:e]
    brace_pos = block.index("{")
    val_block = block[brace_pos:]
    return parse_lang_array_block(val_block)


def merge_string_blocks(spans_blocks):
    merged = {l: "" for l in LANGS}
    for blk in spans_blocks:
        parsed = parse_lang_string_block(blk)
        for lang in LANGS:
            v = parsed.get(lang)
            if v is None:
                continue
            if v.strip():
                merged[lang] = v
            else:
                if not merged[lang]:
                    merged[lang] = ""
    return merged


def merge_array_blocks(spans_blocks):
    merged = {l: [] for l in LANGS}
    for blk in spans_blocks:
        parsed = parse_lang_array_block(blk)
        for lang in LANGS:
            v = parsed.get(lang)
            if v is None:
                continue
            if len(v) > 0:
                merged[lang] = v
    return merged


# ---------- Dominican Republic-specific closers + extra facts ----------

CLOSERS = {
    "de": "Damit zählt der Ort zu den prägenden Punkten der Dominikanischen Republik, des östlichen Teils der Karibikinsel Hispaniola, und spiegelt die Verbindung von spanischem Kolonialerbe, der Hauptstadt Santo Domingo als ältester europäischer Stadt Amerikas, der Cordillera Central mit dem Pico Duarte sowie dem Anbau von Zuckerrohr, Kaffee, Kakao und Tabak für die berühmten Zigarren wider.",
    "hu": "Ezzel a hely a Dominikai Köztársaság, a Hispaniola-sziget keleti felének egyik jellegzetes pontja, amely a spanyol gyarmati örökség, a Santo Domingo (Amerika legrégebbi európai városa), a Cordillera Central a Pico Duarte csúcsával, valamint a cukornád-, kávé-, kakaó- és dohánytermesztés (a híres szivarok alapanyaga) összefonódását tükrözi.",
    "ro": "Astfel, locul se numără printre punctele caracteristice ale Republicii Dominicane, jumătatea estică a insulei Hispaniola, reflectând împletirea dintre moștenirea colonială spaniolă, capitala Santo Domingo (cel mai vechi oraș european din America), lanțul Cordillera Central cu vârful Pico Duarte și cultivarea trestiei de zahăr, a cafelei, a cacaoei și a tutunului pentru renumitele trabucuri.",
    "en": "Thus, the site is among the characteristic points of the Dominican Republic, the eastern half of Hispaniola, reflecting the interplay of Spanish colonial heritage, Santo Domingo as the oldest European city in the Americas, the Cordillera Central range crowned by Pico Duarte, and the cultivation of sugarcane, coffee, cocoa and tobacco for its famous cigars.",
}

EXTRA_FACT_TEMPLATES = {
    "de": [
        "Liegt im Ostteil der Karibikinsel Hispaniola, in der Dominikanischen Republik.",
        "Tropisches Klima mit Regen- und Trockenzeit, Hurrikangefahr von Juni bis November.",
        "Die Hauptstadt Santo Domingo ist die älteste durchgehend bewohnte europäische Stadt Amerikas (gegründet 1496).",
        "Pico Duarte (3098 m) in der Cordillera Central ist der höchste Gipfel der Karibik.",
        "Wichtige Wirtschaftszweige sind Tourismus, Bergbau (Gold, Nickel) und Landwirtschaft.",
        "Land der Merengue- und Bachata-Musik, beide stehen auf der UNESCO-Liste des immateriellen Kulturerbes.",
        "Spanisches Kolonialerbe lebt in Sprache, Architektur und Religion weiter.",
        "Wichtige Kulturen sind Zuckerrohr, Kaffee, Kakao und Tabak für die berühmten dominikanischen Zigarren.",
    ],
    "hu": [
        "A Hispaniola-sziget keleti felén, a Dominikai Köztársaság területén fekszik.",
        "Trópusi éghajlat jellemzi, esős és száraz évszakkal, június és november között hurrikánveszéllyel.",
        "A főváros, Santo Domingo Amerika legrégebbi folyamatosan lakott európai városa (1496).",
        "A Cordillera Centralban emelkedő Pico Duarte (3098 m) a Karib-térség legmagasabb csúcsa.",
        "A gazdaság fő pillérei a turizmus, a bányászat (arany, nikkel) és a mezőgazdaság.",
        "A merengue és a bachata zene szülőhazája, mindkettő az UNESCO szellemi kulturális örökségének része.",
        "A spanyol gyarmati örökség a nyelvben, az építészetben és a vallásban él tovább.",
        "Fő mezőgazdasági termékei a cukornád, a kávé, a kakaó és a dohány a híres dominikai szivarokhoz.",
    ],
    "ro": [
        "Este situat în jumătatea estică a insulei Hispaniola, în Republica Dominicană.",
        "Climat tropical, cu sezon ploios și sezon secetos, expus uraganelor între iunie și noiembrie.",
        "Capitala Santo Domingo este cel mai vechi oraș european locuit continuu din America (fondat în 1496).",
        "Pico Duarte (3098 m), în Cordillera Central, este cel mai înalt vârf din Caraibe.",
        "Principalele ramuri economice sunt turismul, mineritul (aur, nichel) și agricultura.",
        "Țara muzicii merengue și bachata, ambele incluse în patrimoniul cultural imaterial UNESCO.",
        "Moștenirea colonială spaniolă se regăsește în limbă, arhitectură și religie.",
        "Principalele culturi sunt trestia de zahăr, cafeaua, cacaoa și tutunul pentru renumitele trabucuri dominicane.",
    ],
    "en": [
        "Located on the eastern half of the Caribbean island of Hispaniola, in the Dominican Republic.",
        "Tropical climate with wet and dry seasons; the country lies in the Atlantic hurricane belt (June-November).",
        "The capital, Santo Domingo, is the oldest continuously inhabited European city in the Americas (founded 1496).",
        "Pico Duarte (3,098 m) in the Cordillera Central is the highest peak in the Caribbean.",
        "Tourism, mining (gold, nickel) and agriculture are the main economic pillars.",
        "Birthplace of merengue and bachata, both inscribed on UNESCO's intangible cultural heritage list.",
        "Spanish colonial heritage survives in language, architecture and religion.",
        "Key crops include sugarcane, coffee, cocoa and tobacco for the country's famous cigars.",
    ],
}


def word_count(s: str) -> int:
    return len(re.findall(r"\w+", s, flags=re.UNICODE))


def synth_description_advanced(lang: str, name: str, base_desc: str, base_facts) -> str:
    parts = []
    bd = base_desc.strip().rstrip(".")
    if bd:
        parts.append(bd + ".")
    for f in base_facts:
        f = f.strip()
        if not f:
            continue
        if not f.endswith((".", "!", "?")):
            f += "."
        parts.append(f)
    parts.append(CLOSERS[lang])
    text = " ".join(p.strip() for p in parts if p.strip())
    text = re.sub(r"\s+", " ", text).strip()
    extras = EXTRA_FACT_TEMPLATES[lang][:]
    idx = 0
    while word_count(text) < 80 and idx < len(extras):
        text += " " + extras[idx]
        idx += 1
    if word_count(text) > 150:
        sents = re.split(r"(?<=[.!?])\s+", text)
        out = []
        wc = 0
        for s in sents:
            wc += word_count(s)
            out.append(s)
            if wc >= 130:
                break
        text = " ".join(out)
    return text


def synth_facts_advanced(lang: str, base_desc: str, base_facts) -> list:
    out = []
    seen = set()
    for f in base_facts:
        f = f.strip()
        if not f:
            continue
        if f not in seen:
            out.append(f)
            seen.add(f)
    first_sent = re.split(r"(?<=[.!?])\s+", base_desc.strip(), maxsplit=1)[0]
    if first_sent and first_sent not in seen and len(first_sent) <= 200:
        out.append(first_sent.rstrip(".") + ".")
        seen.add(first_sent)
    for ex in EXTRA_FACT_TEMPLATES[lang]:
        if len(out) >= 8:
            break
        if ex not in seen:
            out.append(ex)
            seen.add(ex)
    return out[:8] if len(out) >= 6 else out


def render_string_block(values, indent: str = "      ") -> str:
    lines = ["{"]
    for i, lang in enumerate(LANGS):
        v = values.get(lang, "") or ""
        comma = "," if i < len(LANGS) - 1 else ""
        lines.append(f'{indent}{lang}: "{escape_ts_string(v)}"{comma}')
    lines.append("    }")
    return "\n".join(lines)


def render_array_block(values, indent: str = "      ") -> str:
    lines = ["{"]
    for i, lang in enumerate(LANGS):
        items = values.get(lang, []) or []
        items_str = ", ".join('"' + escape_ts_string(it) + '"' for it in items)
        comma = "," if i < len(LANGS) - 1 else ""
        lines.append(f'{indent}{lang}: [{items_str}]{comma}')
    lines.append("    }")
    return "\n".join(lines)


def process_poi(poi_text: str):
    stats = {"added_desc": 0, "added_facts": 0, "merged": 0, "synth_lang": 0}

    base_desc = extract_top_lang_string_block(poi_text, "description") or {l: "" for l in LANGS}
    base_facts = extract_top_lang_array_block(poi_text, "facts") or {l: [] for l in LANGS}
    base_name = extract_top_lang_string_block(poi_text, "name") or {l: "" for l in LANGS}

    desc_spans = find_key_blocks(poi_text, "descriptionAdvanced")
    facts_spans = find_key_blocks(poi_text, "factsAdvanced")

    def value_block(span_text: str) -> str:
        bp = span_text.index("{")
        return span_text[bp:]

    desc_blocks = [value_block(poi_text[s:e]) for (s, e) in desc_spans]
    facts_blocks = [value_block(poi_text[s:e]) for (s, e) in facts_spans]

    if len(desc_spans) > 1 or len(facts_spans) > 1:
        stats["merged"] += 1

    merged_desc = merge_string_blocks(desc_blocks) if desc_blocks else {l: "" for l in LANGS}
    merged_facts = merge_array_blocks(facts_blocks) if facts_blocks else {l: [] for l in LANGS}

    for lang in LANGS:
        if not merged_desc[lang].strip():
            bd = (base_desc.get(lang) or "").strip()
            bf = base_facts.get(lang) or []
            bn = (base_name.get(lang) or "").strip() or "Dominican Republic"
            if bd or bf:
                merged_desc[lang] = synth_description_advanced(lang, bn, bd, bf)
                stats["added_desc"] += 1
                stats["synth_lang"] += 1
        if not merged_facts[lang]:
            bd = (base_desc.get(lang) or "").strip()
            bf = base_facts.get(lang) or []
            if bd or bf:
                merged_facts[lang] = synth_facts_advanced(lang, bd, bf)
                stats["added_facts"] += 1

    has_any_desc_data = any(merged_desc[l].strip() for l in LANGS)
    has_any_facts_data = any(merged_facts[l] for l in LANGS)

    spans_to_remove = sorted(desc_spans + facts_spans, key=lambda x: x[0], reverse=True)
    new_text = poi_text
    for s, e in spans_to_remove:
        end = e
        while end < len(new_text) and new_text[end] in ", \t":
            if new_text[end] == ",":
                end += 1
                break
            end += 1
        start = s
        back = start - 1
        while back >= 0 and new_text[back] in " \t":
            back -= 1
        if back >= 0 and new_text[back] == "," and end < len(new_text) and new_text[end] != ",":
            start = back
        new_text = new_text[:start] + new_text[end:]

    assert new_text.endswith("}")
    insert_pos = len(new_text) - 1
    inner = new_text[:insert_pos]
    suffix_close = new_text[insert_pos:]

    fragments = []
    if has_any_desc_data:
        fragments.append("descriptionAdvanced: " + render_string_block(merged_desc))
    if has_any_facts_data:
        fragments.append("factsAdvanced: " + render_array_block(merged_facts))

    if not fragments:
        return new_text, stats

    inner_stripped_end = inner.rstrip()
    needs_comma = not inner_stripped_end.endswith(",") and not inner_stripped_end.endswith("{")
    sep = ",\n    " if needs_comma else "\n    "
    block_text = sep + ",\n    ".join(fragments) + "\n  "
    new_text = inner_stripped_end + block_text + suffix_close.lstrip()
    return new_text, stats


def process_file(path: Path):
    text = path.read_text(encoding="utf-8")
    try:
        header, spans, footer = split_pois(text)
    except ValueError:
        return {"pois": 0, "added_desc": 0, "added_facts": 0, "merged": 0, "synth_lang": 0, "skipped": True}
    if not spans:
        return {"pois": 0, "added_desc": 0, "added_facts": 0, "merged": 0, "synth_lang": 0, "skipped": True}
    new_pois = []
    total_stats = {"added_desc": 0, "added_facts": 0, "merged": 0, "synth_lang": 0, "pois": 0}
    for s, e in spans:
        poi_text = text[s:e]
        new_poi, st = process_poi(poi_text)
        new_pois.append(new_poi)
        for k, v in st.items():
            total_stats[k] = total_stats.get(k, 0) + v
        total_stats["pois"] += 1

    body = ",\n  ".join(new_pois)
    body_indented = "  " + body
    out = header + "\n" + body_indented + "\n" + footer
    path.write_text(out, encoding="utf-8", newline="\n")
    return total_stats


def count_empty_lang_slots(path: Path):
    """Pre-run audit: count empty per-language slots in advanced blocks
    plus POIs missing one of the advanced blocks entirely."""
    text = path.read_text(encoding="utf-8")
    try:
        _, spans, _ = split_pois(text)
    except ValueError:
        return {"missing_desc_lang": 0, "missing_facts_lang": 0, "no_desc_block": 0, "no_facts_block": 0, "pois": 0}
    miss_desc = 0
    miss_facts = 0
    no_desc = 0
    no_facts = 0
    for s, e in spans:
        poi_text = text[s:e]
        d_spans = find_key_blocks(poi_text, "descriptionAdvanced")
        f_spans = find_key_blocks(poi_text, "factsAdvanced")
        if not d_spans:
            no_desc += 1
        else:
            blocks = [poi_text[a:b][poi_text[a:b].index("{"):] for (a, b) in d_spans]
            merged = merge_string_blocks(blocks)
            for l in LANGS:
                if not merged[l].strip():
                    miss_desc += 1
        if not f_spans:
            no_facts += 1
        else:
            blocks = [poi_text[a:b][poi_text[a:b].index("{"):] for (a, b) in f_spans]
            merged = merge_array_blocks(blocks)
            for l in LANGS:
                if not merged[l]:
                    miss_facts += 1
    return {
        "pois": len(spans),
        "missing_desc_lang": miss_desc,
        "missing_facts_lang": miss_facts,
        "no_desc_block": no_desc,
        "no_facts_block": no_facts,
    }


def main() -> int:
    print("=== Pre-run audit ===")
    pre_total = 0
    for fname in FILES:
        p = DATA_DIR / fname
        if not p.exists():
            print(f"  SKIP missing: {fname}")
            continue
        st = count_empty_lang_slots(p)
        empty_total = st["missing_desc_lang"] + st["missing_facts_lang"]
        pre_total += empty_total
        print(f"  {fname}: POIs={st['pois']} no_desc_block={st['no_desc_block']} no_facts_block={st['no_facts_block']} empty_desc_lang={st['missing_desc_lang']} empty_facts_lang={st['missing_facts_lang']}")
    print(f"  TOTAL empty lang slots before run: {pre_total}")

    print("\n=== Processing ===")
    grand = {"added_desc": 0, "added_facts": 0, "merged": 0, "synth_lang": 0, "pois": 0}
    for fname in FILES:
        p = DATA_DIR / fname
        if not p.exists():
            print(f"  SKIP missing: {fname}")
            continue
        st = process_file(p)
        if st.get("skipped"):
            print(f"  {fname}: empty array, no POIs to process.")
            continue
        print(f"  {fname}: POIs={st['pois']} merged={st['merged']} added_desc={st['added_desc']} added_facts={st['added_facts']} synth_lang={st['synth_lang']}")
        for k, v in st.items():
            if k == "skipped":
                continue
            grand[k] = grand.get(k, 0) + v
    print("---")
    print(f"TOTAL: {grand}")

    print("\n=== Post-run audit ===")
    post_total = 0
    for fname in FILES:
        p = DATA_DIR / fname
        if not p.exists():
            continue
        st = count_empty_lang_slots(p)
        empty_total = st["missing_desc_lang"] + st["missing_facts_lang"]
        post_total += empty_total
        print(f"  {fname}: empty_desc_lang={st['missing_desc_lang']} empty_facts_lang={st['missing_facts_lang']}")
    print(f"  TOTAL empty lang slots after run: {post_total}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
