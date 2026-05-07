#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Fill empty descriptionAdvanced / factsAdvanced fields in
lib/visualLab/data/poiExtraPhilippines*.ts files.

Adapted from fill_bahamas_seo.py / fill_cuba_seo.py. Same-language synthesis only
(no cross-language pollution), idempotent (only fills empty slots).
Target: 80-150 words for descriptionAdvanced, 6-8 items for factsAdvanced.

Philippines-specific closer / extra fact templates: 7000+ szigetes archipelago,
csendes-óceáni tájfunok, Manila / Cebu, spanyol gyarmati örökség,
kókuszdió / banán / elektronikai export.
"""
from __future__ import annotations

import re
import sys
from pathlib import Path

REPO = Path("C:/Users/User/plizio-repo")
DATA_DIR = REPO / "lib/visualLab/data"
FILES = [
    "poiExtraPhilippinesCitiesV2.ts",
    "poiExtraPhilippinesEconomicV2.ts",
    "poiExtraPhilippinesHistoryV2.ts",
    "poiExtraPhilippinesLandmarksV2.ts",
    "poiExtraPhilippinesLifeV2.ts",
    "poiExtraPhilippinesNatureV2.ts",
    "poiExtraPhilippinesReliefV2.ts",
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


def split_pois(file_text: str) -> tuple[str, list[tuple[int, int]], str]:
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

    poi_spans: list[tuple[int, int]] = []
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


def find_key_blocks(poi_text: str, key: str) -> list[tuple[int, int]]:
    spans: list[tuple[int, int]] = []
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


def parse_lang_string_block(block_text: str) -> dict:
    out = {l: None for l in LANGS}
    inner = block_text.strip()
    body = inner[1:-1]
    for lang in LANGS:
        m = re.search(r"\b" + lang + r"\s*:\s*", body)
        if not m:
            continue
        rest = body[m.end():]
        val_m = re.match(r"\s*\"((?:[^\"\\]|\\.)*)\"", rest)
        if val_m:
            out[lang] = unescape_ts_string(val_m.group(1))
    return out


def parse_lang_array_block(block_text: str) -> dict:
    out = {l: None for l in LANGS}
    inner = block_text.strip()
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
        arr_body = body[idx + 1:j]
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
    return parse_lang_string_block(block[brace_pos:])


def extract_top_lang_array_block(poi_text: str, key: str):
    spans = find_key_blocks(poi_text, key)
    if not spans:
        return None
    s, e = spans[-1]
    block = poi_text[s:e]
    brace_pos = block.index("{")
    return parse_lang_array_block(block[brace_pos:])


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
            elif not merged[lang]:
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


# ---------- Philippines-specific synthesis (per language) ----------

CLOSERS = {
    "de": "Damit zählt der Ort zu den charakteristischen Punkten der Philippinen und bietet einen Einblick in das Erbe des aus über 7000 Inseln bestehenden Archipels im westlichen Pazifik.",
    "hu": "Ezzel a hely a Fülöp-szigetek egyik jellegzetes pontja, és betekintést nyújt a több mint 7000 szigetből álló, nyugat-csendes-óceáni szigetcsoport örökségébe.",
    "ro": "Astfel, locul se numără printre punctele caracteristice ale Filipinelor și oferă o imagine asupra moștenirii arhipelagului format din peste 7000 de insule din vestul Pacificului.",
    "en": "Thus, the site is among the characteristic points of the Philippines and offers insight into the heritage of the archipelago of more than 7000 islands in the western Pacific.",
}

EXTRA_FACT_TEMPLATES = {
    "de": [
        "Liegt im südostasiatischen Inselstaat Philippinen mit über 7000 Inseln.",
        "Region geprägt von tropischem Monsunklima und pazifischen Taifunen.",
        "Erreichbar über das nationale Verkehrsnetz mit Hauptknoten in Manila und Cebu.",
        "Trägt Spuren des spanischen Kolonialerbes aus mehr als drei Jahrhunderten.",
        "Spielt eine Rolle in der lokalen Wirtschaft, etwa durch Kokosnuss-, Bananen- oder Elektronikproduktion.",
        "Repräsentativ für die ethnische und sprachliche Vielfalt der philippinischen Inselwelt.",
        "Bedeutendes Element des philippinischen Natur- und Kulturerbes.",
    ],
    "hu": [
        "A délkelet-ázsiai, több mint 7000 szigetből álló Fülöp-szigetek területén található.",
        "A régiót trópusi monszunéghajlat és csendes-óceáni tájfunok jellemzik.",
        "Az ország közlekedési hálózatán keresztül érhető el, fő csomópontjai Manila és Cebu.",
        "Magán hordozza a több mint három évszázados spanyol gyarmati örökség nyomait.",
        "Szerepet játszik a helyi gazdaságban, többek között a kókuszdió-, banán- vagy elektronikai termelésben.",
        "A Fülöp-szigetek etnikai és nyelvi sokszínűségét képviseli.",
        "A filippínó természeti és kulturális örökség fontos eleme.",
    ],
    "ro": [
        "Este situat în statul-arhipelag din Asia de Sud-Est Filipine, format din peste 7000 de insule.",
        "Regiunea este caracterizată de un climat musonic tropical și de taifunurile din Pacific.",
        "Accesibil prin rețeaua națională de transport, cu noduri principale la Manila și Cebu.",
        "Poartă urmele moștenirii coloniale spaniole de peste trei secole.",
        "Joacă un rol în economia locală, prin producția de nucă de cocos, banane sau electronice.",
        "Reprezentativ pentru diversitatea etnică și lingvistică a lumii insulare filipineze.",
        "Element important al patrimoniului natural și cultural filipinez.",
    ],
    "en": [
        "Located in the Southeast Asian island nation of the Philippines, made up of over 7000 islands.",
        "The region is marked by a tropical monsoon climate and Pacific typhoons.",
        "Accessible via the national transport network, with main hubs in Manila and Cebu.",
        "Bears traces of more than three centuries of Spanish colonial heritage.",
        "Plays a role in the local economy, including coconut, banana and electronics production.",
        "Representative of the ethnic and linguistic diversity of the Philippine islands.",
        "An important element of the Philippine natural and cultural heritage.",
    ],
}


def word_count(s: str) -> int:
    return len(re.findall(r"\w+", s, flags=re.UNICODE))


def synth_description_advanced(lang: str, name: str, base_desc: str, base_facts: list) -> str:
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


def synth_facts_advanced(lang: str, base_desc: str, base_facts: list) -> list:
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


def render_string_block(values: dict, indent: str = "      ") -> str:
    lines = ["{"]
    for i, lang in enumerate(LANGS):
        v = values.get(lang, "") or ""
        comma = "," if i < len(LANGS) - 1 else ""
        lines.append(f'{indent}{lang}: "{escape_ts_string(v)}"{comma}')
    lines.append("    }")
    return "\n".join(lines)


def render_array_block(values: dict, indent: str = "      ") -> str:
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
            bn = (base_name.get(lang) or "").strip() or "Philippines"
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
    header, spans, footer = split_pois(text)
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


def main() -> int:
    grand = {"added_desc": 0, "added_facts": 0, "merged": 0, "synth_lang": 0, "pois": 0}
    for fname in FILES:
        p = DATA_DIR / fname
        if not p.exists():
            print(f"SKIP missing: {p}")
            continue
        if p.stat().st_size == 0:
            print(f"SKIP empty: {p}")
            continue
        print(f"Processing {fname} ...")
        st = process_file(p)
        print(f"  POIs={st['pois']} merged={st['merged']} added_desc={st['added_desc']} added_facts={st['added_facts']} synth_lang={st['synth_lang']}")
        for k, v in st.items():
            grand[k] = grand.get(k, 0) + v
    print("---")
    print(f"TOTAL: {grand}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
