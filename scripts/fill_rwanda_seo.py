#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Fill empty descriptionAdvanced / factsAdvanced fields in
lib/visualLab/data/poiExtraRwanda*V2.ts files.

Rwanda-specific closers / extra facts highlight: Land of a Thousand
Hills, East African Great Lakes region, Kigali capital, Congo-Nile
divide, Virunga mountain gorillas, Volcanoes / Nyungwe / Akagera
national parks, coffee and tea economy, post-1994 reconciliation.
"""
from __future__ import annotations

import re
import sys
from pathlib import Path

REPO = Path("C:/Users/User/plizio-repo")
DATA_DIR = REPO / "lib/visualLab/data"
FILES = [
    "poiExtraRwandaCitiesV2.ts",
    "poiExtraRwandaEconomicV2.ts",
    "poiExtraRwandaHistoryV2.ts",
    "poiExtraRwandaLandmarksV2.ts",
    "poiExtraRwandaLifeV2.ts",
    "poiExtraRwandaNatureV2.ts",
    "poiExtraRwandaReliefV2.ts",
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


# ---------- Rwanda-specific closers + extra facts ----------

CLOSERS = {
    "de": "Damit zählt der Ort zu den prägenden Punkten Ruandas, des „Landes der tausend Hügel“ in Ostafrika, und spiegelt die Verbindung von Kongo-Nil-Wasserscheide, den Virunga-Vulkanen mit ihren Berggorillas, der Hauptstadt Kigali, dem nationalen Wiederaufbau nach 1994 sowie dem Anbau von Kaffee und Tee in Höhenlagen wider.",
    "hu": "Ezzel a hely Ruanda, az „ezer domb országa“ kelet-afrikai állam egyik jellegzetes pontja, amely a Kongó–Nílus vízválasztó, a Virunga-vulkánok hegyi gorillái, a főváros Kigali, az 1994 utáni nemzeti újjáépítés, valamint a magaslati kávé- és teatermesztés összefonódását tükrözi.",
    "ro": "Astfel, locul se numără printre punctele caracteristice ale Rwandei, „țara celor o mie de dealuri“ din Africa de Est, reflectând împletirea dintre cumpăna apelor Congo–Nil, vulcanii Virunga cu gorilele de munte, capitala Kigali, reconstrucția națională de după 1994 și cultivarea cafelei și a ceaiului la altitudine.",
    "en": "Thus, the site is among the characteristic points of Rwanda, the East African \"Land of a Thousand Hills\", reflecting the interplay of the Congo-Nile divide, the Virunga volcanoes home to mountain gorillas, the capital Kigali, post-1994 national reconciliation, and high-altitude coffee and tea cultivation.",
}

EXTRA_FACT_TEMPLATES = {
    "de": [
        "Kleiner Binnenstaat in Ostafrika, bekannt als „Land der tausend Hügel“.",
        "Tropisches Hochlandklima, mild dank Höhenlagen zwischen 1000 und 4500 m.",
        "Kigali ist als Hauptstadt politisches, wirtschaftliches und kulturelles Zentrum.",
        "Die Kongo-Nil-Wasserscheide verläuft von Nord nach Süd durch das Land.",
        "Der Virunga-Vulkanbogen im Norden beherbergt die letzten Berggorillas.",
        "Drei Nationalparks (Volcanoes, Nyungwe, Akagera) decken Vulkane, Bergregenwald und Savanne ab.",
        "Nach dem Genozid von 1994 hat Ruanda einen bemerkenswerten Wiederaufbau- und Versöhnungsweg eingeschlagen.",
        "Wichtigste Exportprodukte sind hochwertiger Kaffee und Tee, Tourismus ist eine Schlüsselbranche.",
    ],
    "hu": [
        "Kelet-afrikai kis tengerpart nélküli állam, „az ezer domb országa“ néven ismert.",
        "Trópusi felföldi éghajlat, a 1000–4500 m közötti magasság miatt enyhe.",
        "Az ország politikai, gazdasági és kulturális központja a főváros, Kigali.",
        "A Kongó–Nílus vízválasztó észak–déli irányban fut át az országon.",
        "Az északon emelkedő Virunga-vulkánok a hegyi gorillák utolsó otthona.",
        "Három nemzeti park (Volcanoes, Nyungwe, Akagera) öleli fel a vulkánokat, a hegyi esőerdőt és a szavannát.",
        "Az 1994-es népirtás után az ország figyelemre méltó újjáépítési és megbékélési utat járt be.",
        "Fő exporttermékei a magas minőségű kávé és tea, a turizmus pedig kulcsfontosságú ágazat.",
    ],
    "ro": [
        "Stat mic, fără ieșire la mare, în Africa de Est, cunoscut ca „țara celor o mie de dealuri“.",
        "Climat tropical de altitudine, blând datorită cotelor de 1000–4500 m.",
        "Capitala Kigali este centrul politic, economic și cultural al țării.",
        "Cumpăna apelor Congo–Nil traversează țara de la nord la sud.",
        "Vulcanii Virunga din nord adăpostesc ultimele gorile de munte.",
        "Trei parcuri naționale (Volcanoes, Nyungwe, Akagera) acoperă vulcani, păduri ecuatoriale de munte și savană.",
        "După genocidul din 1994, Rwanda a parcurs un drum remarcabil de reconstrucție și reconciliere.",
        "Principalele exporturi sunt cafeaua și ceaiul de înaltă calitate, iar turismul este o ramură-cheie.",
    ],
    "en": [
        "A small landlocked country in East Africa, known as the \"Land of a Thousand Hills\".",
        "Tropical highland climate, kept mild by altitudes ranging from 1,000 to 4,500 m.",
        "Kigali, the capital, is the country's political, economic and cultural hub.",
        "The Congo-Nile divide runs north-south through the country, splitting drainage basins.",
        "The Virunga volcanic chain in the north shelters some of the last mountain gorillas.",
        "Three flagship national parks (Volcanoes, Nyungwe, Akagera) span volcanoes, montane rainforest and savanna.",
        "Following the 1994 genocide, Rwanda has pursued a remarkable path of rebuilding and reconciliation.",
        "Top exports are high-quality coffee and tea, with tourism a key growth sector.",
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
            bn = (base_name.get(lang) or "").strip() or "Rwanda"
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
