#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Fill empty descriptionAdvanced / factsAdvanced fields in
lib/visualLab/data/poiExtraIndonesia*.ts files.

Mirrors fill_cuba_seo.py / fill_bahamas_seo.py logic, with
Indonesia-specific closers and extra-fact templates:
17000+ szigetes szigetvilág, Java/Sumatra/Borneo/Bali/Pápua,
vulkanikus tűzgyűrű, rizs/pálmaolaj/szén, hindu-buddhista-iszlám
kultúrális réteg.
"""
from __future__ import annotations

import re
import sys
from pathlib import Path

REPO = Path("C:/Users/User/plizio-repo")
DATA_DIR = REPO / "lib/visualLab/data"
FILES = [
    "poiExtraIndonesiaCitiesV2.ts",
    "poiExtraIndonesiaEconomicV2.ts",
    "poiExtraIndonesiaHistoryV2.ts",
    "poiExtraIndonesiaLandmarksV2.ts",
    "poiExtraIndonesiaLifeV2.ts",
    "poiExtraIndonesiaNatureV2.ts",
    "poiExtraIndonesiaReliefV2.ts",
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


# ---------- Indonesia-specific closers / extras ----------

CLOSERS = {
    "de": "Damit zählt der Ort zu den charakteristischen Punkten Indonesiens, des größten Inselstaates der Welt mit über 17.000 Inseln, und spiegelt die Verbindung von vulkanischem Pazifischen Feuerring, tropischem Regenwald sowie hindu-buddhistisch-islamisch geprägter Kultur wider.",
    "hu": "Ezzel a hely Indonézia, a világ legnagyobb, több mint 17 000 szigetből álló szigetállamának egyik jellegzetes pontja, amely a Csendes-óceáni tűzgyűrű vulkanizmusa, a trópusi esőerdők, valamint a hindu-buddhista-iszlám kulturális rétegek összefonódását tükrözi.",
    "ro": "Astfel, locul se numără printre punctele caracteristice ale Indoneziei, cel mai mare stat insular din lume, cu peste 17.000 de insule, reflectând împletirea dintre vulcanismul Cercului de Foc al Pacificului, pădurile tropicale și straturile culturale hindu-budiste-islamice.",
    "en": "Thus, the site is among the characteristic points of Indonesia, the world's largest archipelagic state with over 17,000 islands, reflecting the interplay of the Pacific Ring of Fire's volcanism, tropical rainforest, and the layered Hindu-Buddhist-Islamic cultural heritage.",
}

EXTRA_FACT_TEMPLATES = {
    "de": [
        "Liegt im indonesischen Archipel mit über 17.000 Inseln, darunter Java, Sumatra, Borneo (Kalimantan), Sulawesi, Bali und Westneuguinea (Papua).",
        "Tropisches Klima mit ausgeprägter Regen- und Trockenzeit, beeinflusst vom Monsun.",
        "Teil des Pazifischen Feuerrings mit zahlreichen aktiven Vulkanen wie Merapi, Krakatau und Tambora.",
        "Wirtschaft stützt sich auf Reis- und Palmölanbau, Kohle-, Nickel- und Erdgasförderung sowie Tourismus.",
        "Hauptstadt Jakarta auf Java ist das politische und wirtschaftliche Zentrum des Landes.",
        "Indonesien ist das bevölkerungsreichste muslimische Land der Welt, mit hindu-buddhistischen Wurzeln vor allem auf Bali und Java.",
        "Reiche Biodiversität mit Orang-Utans, Komodowaranen, Tigern und ausgedehnten Korallenriffen.",
        "Bedeutendes Element des indonesischen Natur- und Kulturerbes.",
    ],
    "hu": [
        "Az indonéz szigetvilágban fekszik, amely több mint 17 000 szigetből áll, köztük Jáva, Szumátra, Borneó (Kalimantan), Celebesz, Bali és Nyugat-Új-Guinea (Pápua).",
        "Trópusi éghajlat jellemzi, kifejezett esős és száraz évszakkal, a monszun által befolyásolva.",
        "A Csendes-óceáni tűzgyűrű része, számos aktív vulkánnal, mint a Merapi, a Krakatau és a Tambora.",
        "Gazdasága a rizs- és pálmaolaj-termesztésre, a szén-, nikkel- és földgázkitermelésre, valamint a turizmusra épül.",
        "Az ország politikai és gazdasági központja a főváros, Jakarta, Jáva szigetén.",
        "Indonézia a világ legnépesebb muszlim többségű országa, hindu-buddhista gyökerekkel, főleg Balin és Jáván.",
        "Gazdag élővilág jellemzi: orangutánok, komodói sárkányok, tigrisek és kiterjedt korallzátonyok.",
        "Az indonéz természeti és kulturális örökség fontos eleme.",
    ],
    "ro": [
        "Este situat în arhipelagul indonezian, format din peste 17.000 de insule, printre care Java, Sumatra, Borneo (Kalimantan), Sulawesi, Bali și Noua Guinee de Vest (Papua).",
        "Climat tropical cu sezon ploios și sezon secetos bine conturate, influențat de musoni.",
        "Face parte din Cercul de Foc al Pacificului, cu numeroși vulcani activi precum Merapi, Krakatau și Tambora.",
        "Economia se bazează pe cultivarea orezului și a uleiului de palmier, exploatarea cărbunelui, nichelului și a gazelor naturale, precum și pe turism.",
        "Capitala Jakarta, situată pe insula Java, este centrul politic și economic al țării.",
        "Indonezia este cea mai populată țară cu majoritate musulmană din lume, cu rădăcini hindu-budiste, în special în Bali și Java.",
        "Biodiversitate bogată: urangutani, dragoni de Komodo, tigri și recife de corali extinse.",
        "Element important al patrimoniului natural și cultural indonezian.",
    ],
    "en": [
        "Located in the Indonesian archipelago of over 17,000 islands, including Java, Sumatra, Borneo (Kalimantan), Sulawesi, Bali and Western New Guinea (Papua).",
        "Tropical climate with distinct wet and dry seasons, shaped by the monsoon.",
        "Part of the Pacific Ring of Fire with numerous active volcanoes such as Merapi, Krakatau and Tambora.",
        "The economy relies on rice and palm-oil cultivation, coal, nickel and natural-gas extraction, and tourism.",
        "Jakarta on Java is the country's political and economic hub.",
        "Indonesia is the world's most populous Muslim-majority nation, with Hindu-Buddhist roots especially on Bali and Java.",
        "Rich biodiversity including orangutans, Komodo dragons, tigers and extensive coral reefs.",
        "An important element of Indonesia's natural and cultural heritage.",
    ],
}


def word_count(s: str) -> int:
    return len(re.findall(r"\w+", s, flags=re.UNICODE))


def synth_description_advanced(lang: str, name: str, base_desc: str, base_facts):
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


def synth_facts_advanced(lang: str, base_desc: str, base_facts):
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


def render_string_block(values, indent="      "):
    lines = ["{"]
    for i, lang in enumerate(LANGS):
        v = values.get(lang, "") or ""
        comma = "," if i < len(LANGS) - 1 else ""
        lines.append(f'{indent}{lang}: "{escape_ts_string(v)}"{comma}')
    lines.append("    }")
    return "\n".join(lines)


def render_array_block(values, indent="      "):
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
            bn = (base_name.get(lang) or "").strip() or "Indonesia"
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


def count_empty_fields(path: Path):
    text = path.read_text(encoding="utf-8")
    _, spans, _ = split_pois(text)
    empty_desc = 0
    empty_facts = 0
    missing_desc_block = 0
    missing_facts_block = 0
    for s, e in spans:
        poi_text = text[s:e]
        d = extract_top_lang_string_block(poi_text, "descriptionAdvanced")
        f = extract_top_lang_array_block(poi_text, "factsAdvanced")
        if d is None:
            missing_desc_block += 1
        else:
            for lang in LANGS:
                v = d.get(lang)
                if v is None or not (v or "").strip():
                    empty_desc += 1
        if f is None:
            missing_facts_block += 1
        else:
            for lang in LANGS:
                v = f.get(lang)
                if v is None or len(v) == 0:
                    empty_facts += 1
    return {
        "pois": len(spans),
        "empty_desc_lang": empty_desc,
        "empty_facts_lang": empty_facts,
        "missing_desc_block": missing_desc_block,
        "missing_facts_block": missing_facts_block,
    }


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
    print("=== PRE-SCAN: empty fields per file ===")
    pre_grand = {"pois": 0, "empty_desc_lang": 0, "empty_facts_lang": 0,
                 "missing_desc_block": 0, "missing_facts_block": 0}
    for fname in FILES:
        p = DATA_DIR / fname
        if not p.exists():
            print(f"SKIP missing: {p}")
            continue
        st = count_empty_fields(p)
        print(f"  {fname}: POIs={st['pois']} empty_desc_lang={st['empty_desc_lang']} "
              f"empty_facts_lang={st['empty_facts_lang']} "
              f"missing_desc_block={st['missing_desc_block']} "
              f"missing_facts_block={st['missing_facts_block']}")
        for k, v in st.items():
            pre_grand[k] = pre_grand.get(k, 0) + v
    print(f"  PRE-TOTAL: {pre_grand}")
    print()
    print("=== FILL ===")
    grand = {"added_desc": 0, "added_facts": 0, "merged": 0, "synth_lang": 0, "pois": 0}
    for fname in FILES:
        p = DATA_DIR / fname
        if not p.exists():
            continue
        print(f"Processing {fname} ...")
        st = process_file(p)
        print(f"  POIs={st['pois']} merged={st['merged']} added_desc={st['added_desc']} "
              f"added_facts={st['added_facts']} synth_lang={st['synth_lang']}")
        for k, v in st.items():
            grand[k] = grand.get(k, 0) + v
    print("---")
    print(f"FILL-TOTAL: {grand}")
    print()
    print("=== POST-SCAN: remaining empty fields ===")
    post_grand = {"pois": 0, "empty_desc_lang": 0, "empty_facts_lang": 0,
                  "missing_desc_block": 0, "missing_facts_block": 0}
    for fname in FILES:
        p = DATA_DIR / fname
        if not p.exists():
            continue
        st = count_empty_fields(p)
        print(f"  {fname}: empty_desc_lang={st['empty_desc_lang']} "
              f"empty_facts_lang={st['empty_facts_lang']} "
              f"missing_desc_block={st['missing_desc_block']} "
              f"missing_facts_block={st['missing_facts_block']}")
        for k, v in st.items():
            post_grand[k] = post_grand.get(k, 0) + v
    print(f"  POST-TOTAL: {post_grand}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
