#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Fill empty descriptionAdvanced / factsAdvanced fields in
lib/visualLab/data/poiExtraCostarica*V2.ts files.

Costa Rica-specific closer/extra-template:
trópusi esőerdő, San José, Arenal vulkán, Karib + Csendes-óceáni
partvidék, Manuel Antonio NP, Monteverde Cloud Forest, kávé/banán/
eko-turizmus, "pura vida".

Mirrors scripts/fill_elsalvador_seo.py and fill_cuba_seo.py.
"""
from __future__ import annotations

import re
import sys
from pathlib import Path

REPO = Path("C:/Users/User/plizio-repo")
DATA_DIR = REPO / "lib/visualLab/data"
FILES = [
    "poiExtraCostaricaCitiesV2.ts",
    "poiExtraCostaricaEconomicV2.ts",
    "poiExtraCostaricaHistoryV2.ts",
    "poiExtraCostaricaLandmarksV2.ts",
    "poiExtraCostaricaLifeV2.ts",
    "poiExtraCostaricaNatureV2.ts",
    "poiExtraCostaricaReliefV2.ts",
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


STRING_VAL_RE = re.compile(
    r'"((?:[^"\\]|\\.)*)"|\'((?:[^\'\\]|\\.)*)\'', re.DOTALL
)


def _match_string_literal(s: str):
    """Match a quoted string at the start of s (after optional ws).
    Supports double or single quotes. Returns the unescaped content
    or None if no string literal is present."""
    m = re.match(r"\s*\"((?:[^\"\\]|\\.)*)\"", s)
    if m:
        return unescape_ts_string(m.group(1))
    m = re.match(r"\s*'((?:[^'\\]|\\.)*)'", s)
    if m:
        return unescape_ts_string(m.group(1))
    return None


def parse_lang_string_block(block_text: str) -> dict:
    out = {l: None for l in LANGS}
    inner = block_text.strip()
    assert inner.startswith("{") and inner.endswith("}"), inner[:30]
    body = inner[1:-1]
    # find each `lang:` ONLY at top level of this brace body, not inside
    # nested string literals. We scan character-by-character.
    n = len(body)
    i = 0
    while i < n:
        c = body[i]
        if c in (' ', '\t', '\r', '\n', ','):
            i += 1
            continue
        if c in ("'", '"', '`'):
            # skip string literal
            quote = c
            i += 1
            while i < n:
                cc = body[i]
                if cc == "\\":
                    i += 2
                    continue
                if cc == quote:
                    i += 1
                    break
                i += 1
            continue
        # try to match an identifier (lang key)
        m = re.match(r"([A-Za-z_$][\w$]*)\s*:\s*", body[i:])
        if not m:
            i += 1
            continue
        ident = m.group(1)
        i += m.end()
        # parse value
        if i < n and body[i] in ('"', "'"):
            val = _match_string_literal(body[i:])
            if val is not None and ident in LANGS:
                out[ident] = val
            # advance past the literal
            quote = body[i]
            i += 1
            while i < n:
                cc = body[i]
                if cc == "\\":
                    i += 2
                    continue
                if cc == quote:
                    i += 1
                    break
                i += 1
        else:
            # non-string value; skip until comma at this level
            depth_b = 0
            depth_p = 0
            while i < n:
                cc = body[i]
                if cc in ("'", '"', '`'):
                    quote = cc
                    i += 1
                    while i < n:
                        ccc = body[i]
                        if ccc == "\\":
                            i += 2
                            continue
                        if ccc == quote:
                            i += 1
                            break
                        i += 1
                    continue
                if cc == "{":
                    depth_b += 1
                elif cc == "}":
                    if depth_b == 0:
                        break
                    depth_b -= 1
                elif cc == "[":
                    depth_p += 1
                elif cc == "]":
                    depth_p -= 1
                elif cc == "," and depth_b == 0 and depth_p == 0:
                    i += 1
                    break
                i += 1
    return out


def parse_lang_array_block(block_text: str) -> dict:
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
        items: list[str] = []
        for sm in STRING_VAL_RE.finditer(arr_body):
            raw = sm.group(1) if sm.group(1) is not None else sm.group(2)
            items.append(unescape_ts_string(raw))
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


def merge_string_blocks(spans_blocks: list) -> dict:
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


def merge_array_blocks(spans_blocks: list) -> dict:
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


# ---------- Costa Rica-specific synthesis templates ----------

CLOSERS = {
    "de": "Damit zählt der Ort zu den charakteristischen Punkten Costa Ricas und spiegelt die Verbindung von tropischem Regenwald, Vulkanlandschaften wie dem Arenal, der Doppelküste an Karibik und Pazifik, Kaffee- und Bananenanbau sowie dem global beachteten Ökotourismus im Geist von „pura vida“ wider.",
    "hu": "Ezzel a hely Costa Rica egyik jellegzetes pontja, amely a trópusi esőerdő, az olyan vulkáni tájak, mint az Arenal, a karibi és csendes-óceáni partvidék kettőssége, a kávé- és banántermesztés, valamint a „pura vida” szellemiségű világhírű ökoturizmus összefonódását tükrözi.",
    "ro": "Astfel, locul se numără printre punctele caracteristice ale Costa Ricăi, reflectând împletirea dintre pădurea tropicală umedă, peisajele vulcanice precum Arenal, dubla coastă caraibiană și pacifică, cultivarea cafelei și a bananelor, precum și ecoturismul recunoscut internațional, în spiritul „pura vida”.",
    "en": "Thus, the site is among the characteristic points of Costa Rica, reflecting the interplay of tropical rainforest, volcanic landscapes such as Arenal, the twin Caribbean and Pacific coastlines, coffee and banana cultivation, and the country's world-renowned ecotourism in the spirit of \"pura vida\".",
}

EXTRA_FACT_TEMPLATES = {
    "de": [
        "Liegt in Costa Rica, einem zentralamerikanischen Land zwischen Karibik und Pazifik.",
        "Tropisches Klima mit ausgeprägter Regen- und Trockenzeit prägt die Region.",
        "Hauptstadt San José im Zentraltal ist das politische und wirtschaftliche Herz des Landes.",
        "Vulkane wie Arenal, Poás und Irazú prägen die Landschaft Costa Ricas.",
        "Kaffee, Bananen und Ökotourismus zählen zu den wichtigsten Wirtschaftszweigen.",
        "Nationalparks wie Manuel Antonio, Corcovado und Tortuguero schützen eine außergewöhnliche Artenvielfalt.",
        "Der Nebelwald von Monteverde ist ein weltweit bekanntes Symbol des costa-ricanischen Naturschutzes.",
        "Die Lebensphilosophie „pura vida“ steht für Gelassenheit, Naturverbundenheit und Gastfreundschaft.",
    ],
    "hu": [
        "Costa Ricában, a Karib-tenger és a Csendes-óceán közötti közép-amerikai országban található.",
        "Trópusi éghajlat jellemzi, kifejezett esős és száraz évszakkal.",
        "Az ország szíve a Központi-völgyben fekvő főváros, San José.",
        "A táj képét vulkánok – például az Arenal, a Poás és az Irazú – határozzák meg.",
        "A gazdaság fő pillérei a kávé- és banántermesztés, valamint az ökoturizmus.",
        "A Manuel Antonio, a Corcovado és a Tortuguero nemzeti parkok rendkívüli biodiverzitást őriznek.",
        "A Monteverde-i ködöserdő a costa-ricai természetvédelem világszerte ismert jelképe.",
        "A „pura vida” életfilozófia a nyugalom, a természetközelség és a vendégszeretet jelképe.",
    ],
    "ro": [
        "Este situat în Costa Rica, o țară central-americană între Marea Caraibilor și Oceanul Pacific.",
        "Climat tropical, cu sezon ploios și sezon secetos bine conturate.",
        "Capitala San José, situată în Valea Centrală, este inima politică și economică a țării.",
        "Vulcani precum Arenal, Poás și Irazú modelează peisajul Costa Ricăi.",
        "Cafeaua, bananele și ecoturismul sunt printre cele mai importante ramuri economice.",
        "Parcuri naționale precum Manuel Antonio, Corcovado și Tortuguero protejează o biodiversitate excepțională.",
        "Pădurea de nori Monteverde este un simbol mondial al conservării naturii din Costa Rica.",
        "Filozofia de viață „pura vida” întruchipează calmul, legătura cu natura și ospitalitatea.",
    ],
    "en": [
        "Located in Costa Rica, a Central American country between the Caribbean Sea and the Pacific Ocean.",
        "Tropical climate with distinct wet and dry seasons shapes the region.",
        "San José, the capital in the Central Valley, is the country's political and economic heart.",
        "Volcanoes such as Arenal, Poás and Irazú shape Costa Rica's landscape.",
        "Coffee, bananas and ecotourism are among the most important economic sectors.",
        "National parks like Manuel Antonio, Corcovado and Tortuguero protect outstanding biodiversity.",
        "The Monteverde Cloud Forest is a globally recognised symbol of Costa Rican conservation.",
        "The \"pura vida\" lifestyle stands for calm, closeness to nature, and warm hospitality.",
    ],
}


def word_count(s: str) -> int:
    return len(re.findall(r"\w+", s, flags=re.UNICODE))


def synth_description_advanced(lang: str, name: str, base_desc: str, base_facts: list) -> str:
    parts: list[str] = []
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
        out: list[str] = []
        wc = 0
        for s in sents:
            wc += word_count(s)
            out.append(s)
            if wc >= 130:
                break
        text = " ".join(out)
    return text


def synth_facts_advanced(lang: str, base_desc: str, base_facts: list) -> list:
    out: list[str] = []
    seen: set[str] = set()
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


def process_poi(poi_text: str) -> tuple:
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
            bn = (base_name.get(lang) or "").strip() or "Costa Rica"
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


def count_empty_fields(text: str) -> dict:
    """Count empty (string "" or array []) language slots inside
    descriptionAdvanced and factsAdvanced blocks."""
    counts = {"desc_empty": 0, "facts_empty": 0,
              "desc_total": 0, "facts_total": 0}
    header, spans, footer = split_pois(text)
    for s, e in spans:
        poi_text = text[s:e]
        for key, kind in (("descriptionAdvanced", "string"),
                          ("factsAdvanced", "array")):
            blocks = find_key_blocks(poi_text, key)
            if not blocks:
                # treat all 4 langs as empty
                counts[f"{('desc' if key=='descriptionAdvanced' else 'facts')}_empty"] += 4
                counts[f"{('desc' if key=='descriptionAdvanced' else 'facts')}_total"] += 4
                continue
            # merge
            value_blocks = []
            for ss, ee in blocks:
                bp = poi_text[ss:ee].index("{")
                value_blocks.append(poi_text[ss:ee][bp:])
            if kind == "string":
                merged = merge_string_blocks(value_blocks)
                for l in LANGS:
                    counts["desc_total"] += 1
                    if not merged[l].strip():
                        counts["desc_empty"] += 1
            else:
                merged = merge_array_blocks(value_blocks)
                for l in LANGS:
                    counts["facts_total"] += 1
                    if not merged[l]:
                        counts["facts_empty"] += 1
    return counts


def process_file(path: Path) -> dict:
    text = path.read_text(encoding="utf-8")
    pre = count_empty_fields(text)
    header, spans, footer = split_pois(text)
    new_pois: list[str] = []
    total_stats = {"added_desc": 0, "added_facts": 0, "merged": 0,
                   "synth_lang": 0, "pois": 0}
    for s, e in spans:
        poi_text = text[s:e]
        new_poi, st = process_poi(poi_text)
        new_pois.append(new_poi)
        for k, v in st.items():
            total_stats[k] = total_stats.get(k, 0) + v
        total_stats["pois"] += 1

    if not new_pois:
        # File has empty array — nothing to do, leave file as-is
        post = pre
        total_stats["pre_empty_desc"] = pre["desc_empty"]
        total_stats["pre_empty_facts"] = pre["facts_empty"]
        total_stats["post_empty_desc"] = post["desc_empty"]
        total_stats["post_empty_facts"] = post["facts_empty"]
        return total_stats

    body = ",\n  ".join(new_pois)
    body_indented = "  " + body
    out = header + "\n" + body_indented + "\n" + footer
    path.write_text(out, encoding="utf-8", newline="\n")
    post = count_empty_fields(out)
    total_stats["pre_empty_desc"] = pre["desc_empty"]
    total_stats["pre_empty_facts"] = pre["facts_empty"]
    total_stats["post_empty_desc"] = post["desc_empty"]
    total_stats["post_empty_facts"] = post["facts_empty"]
    return total_stats


def main() -> int:
    grand = {"added_desc": 0, "added_facts": 0, "merged": 0,
             "synth_lang": 0, "pois": 0,
             "pre_empty_desc": 0, "pre_empty_facts": 0,
             "post_empty_desc": 0, "post_empty_facts": 0}
    for fname in FILES:
        p = DATA_DIR / fname
        if not p.exists():
            print(f"SKIP missing: {p}")
            continue
        print(f"Processing {fname} ...")
        st = process_file(p)
        print(f"  POIs={st['pois']} merged={st['merged']} "
              f"added_desc={st['added_desc']} added_facts={st['added_facts']} "
              f"synth_lang={st['synth_lang']} "
              f"empty_desc {st['pre_empty_desc']}->{st['post_empty_desc']} "
              f"empty_facts {st['pre_empty_facts']}->{st['post_empty_facts']}")
        for k, v in st.items():
            grand[k] = grand.get(k, 0) + v
    print("---")
    print(f"TOTAL: {grand}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
