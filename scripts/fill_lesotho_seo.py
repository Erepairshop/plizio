#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Fill empty descriptionAdvanced / factsAdvanced fields in
lib/visualLab/data/poiExtraLesotho*V2.ts files.

Adapted from fill_tanzania_seo.py / fill_mozambique_seo.py.

Lesotho-specific framing:
  - Drakensberg / Maluti highlands ("Mountain Kingdom", "Sky Kingdom")
  - Maseru, capital on the Caledon River
  - Enclave fully surrounded by South Africa
  - Basotho culture (Sesotho language, Mokorotlo hat, Seanamarena blanket)
  - Wool / mohair / water exports (Lesotho Highlands Water Project)

Strategy mirrors tanzania: merge multiple advanced blocks into one,
synthesize empty per-language slots from same-language description+facts
(NO cross-language pollution). Idempotent: rerunning leaves filled
fields untouched. Targets: 80-150 words descriptionAdvanced,
6-8 items factsAdvanced.
"""
from __future__ import annotations

import re
import sys
from pathlib import Path

REPO = Path("C:/Users/User/plizio-repo")
DATA_DIR = REPO / "lib/visualLab/data"
FILES = [
    "poiExtraLesothoCitiesV2.ts",
    "poiExtraLesothoNatureV2.ts",
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


# ---------- helpers: extract object blocks inside a POI ----------

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


# ---------- parse a value object with 4 lang keys ----------

STRING_VAL_RE = re.compile(r'"((?:[^"\\]|\\.)*)"', re.DOTALL)


def parse_lang_string_block(block_text: str) -> dict:
    out: dict = {l: None for l in LANGS}
    inner = block_text.strip()
    assert inner.startswith("{") and inner.endswith("}"), inner[:30]
    body = inner[1:-1]
    for lang in LANGS:
        m = re.search(r'(?:"|\b)' + lang + r'(?:"|\b)\s*:\s*', body)
        if not m:
            continue
        rest = body[m.end():]
        val_m = re.match(r"\s*\"((?:[^\"\\]|\\.)*)\"", rest)
        if val_m:
            out[lang] = unescape_ts_string(val_m.group(1))
        else:
            out[lang] = None
    return out


def parse_lang_array_block(block_text: str) -> dict:
    out: dict = {l: None for l in LANGS}
    inner = block_text.strip()
    assert inner.startswith("{") and inner.endswith("}")
    body = inner[1:-1]
    for lang in LANGS:
        m = re.search(r'(?:"|\b)' + lang + r'(?:"|\b)\s*:\s*\[', body)
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


def merge_string_blocks(spans_blocks: list) -> dict:
    merged: dict = {l: "" for l in LANGS}
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
    merged: dict = {l: [] for l in LANGS}
    for blk in spans_blocks:
        parsed = parse_lang_array_block(blk)
        for lang in LANGS:
            v = parsed.get(lang)
            if v is None:
                continue
            if len(v) > 0:
                merged[lang] = v
    return merged


# ---------- Lesotho-specific synthesis content ----------

CLOSERS = {
    "de": "Damit zaehlt der Ort zu den charakteristischen Punkten Lesothos — eines vollstaendig von Suedafrika umschlossenen Binnenstaats, der durch die hohen Drakensberge und die Maloti-Berge, die Hauptstadt Maseru am Caledon-Fluss, die Sesotho-sprachige Basotho-Kultur mit dem Mokorotlo-Hut und der Seanamarena-Decke sowie durch Wolle, Mohair und das Lesotho Highlands Water Project gepraegt ist — und bietet einen Einblick in die regionale Identitaet des sogenannten 'Bergkoenigreichs' am Himmel.",
    "hu": "Ezzel a hely Lesotho egyik jellegzetes pontja — egy olyan, a Dél-Afrikai Köztársaság által teljesen körülvett enklávé-államé, amelyet a magas Drakensberg- és Maloti-hegység, a Caledon-folyó partján fekvő főváros Maseru, a sesotho nyelvű basotho kultúra a mokorotlo kalappal és a seanamarena takaróval, valamint a gyapjú, a moher és a Lesotho Highlands vízprojekt alakít —, és betekintést nyújt az „égi királyság” regionális identitásába.",
    "ro": "Astfel, locul se numără printre punctele caracteristice ale statului Lesotho — un mic regat-enclavă înconjurat complet de Africa de Sud, modelat de munții înalți Drakensberg și Maloti, de capitala Maseru de pe râul Caledon, de cultura basotho de limbă sesotho cu pălăria mokorotlo și pătura seanamarena, precum și de exporturile de lână, mohair și de proiectul hidrologic al platourilor înalte — și oferă o imagine asupra identității regionale a așa-numitului „Regat al Cerului”.",
    "en": "Thus, the site is among the characteristic points of Lesotho — a small mountain kingdom entirely enclaved within South Africa, shaped by the high Drakensberg and Maloti ranges, by its capital Maseru on the Caledon River, by Sesotho-speaking Basotho culture with the mokorotlo hat and the Seanamarena blanket, and by its exports of wool, mohair and water from the Lesotho Highlands Water Project — and offers insight into the regional identity of this so-called 'Kingdom in the Sky'.",
}

EXTRA_FACT_TEMPLATES = {
    "de": [
        "Liegt im Koenigreich Lesotho, einer von Suedafrika vollstaendig umschlossenen Binnenenklave im suedlichen Afrika.",
        "Gehoert zum Hochland des Maluti- und Drakensberg-Gebirges, weshalb das Land oft 'Bergkoenigreich' oder 'Himmelreich' genannt wird.",
        "Ueber 80 Prozent des Staatsgebiets liegen oberhalb von 1800 Metern, der Tiefpunkt ist mit etwa 1400 Metern der hoechste der Welt.",
        "Das Klima ist alpin gepraegt, mit kuehlen Sommern, frostigen Wintern und regelmaessigem Schneefall in den Hochlagen.",
        "Wirtschaftlich pruegen Wolle und Mohair, Diamanten sowie der Wasserexport im Rahmen des Lesotho Highlands Water Project das Land.",
        "Die Basotho-Kultur lebt in der Sesotho-Sprache, im Mokorotlo-Hut, in der Seanamarena-Decke und im Reiten auf dem zaehen Basotho-Pony fort.",
        "Maseru am Caledon-Fluss ist Hauptstadt, Verwaltungssitz und groesster Wirtschaftsstandort des Landes.",
    ],
    "hu": [
        "A Lesothói Királyság területén fekszik, amely a Dél-Afrikai Köztársaság által teljesen körülvett enkláveként ékelődik a déli féltekére.",
        "A Maloti- és a Drakensberg-hegység magasföldjéhez tartozik, ezért az országot gyakran „hegyi királyságnak” vagy „égi királyságnak” nevezik.",
        "Az ország területének több mint 80 százaléka 1800 méter felett található, a legmélyebb pontja mintegy 1400 méteren a világ legmagasabb mélypontja.",
        "Az éghajlat hegyvidéki jellegű: hűvös nyarak, fagyos telek és a magasabb régiókban rendszeres havazás jellemzi.",
        "A gazdaságot a gyapjú és a moher, a gyémánt és a Lesotho Highlands vízprojekt keretében zajló vízkivitel határozza meg.",
        "A basotho kultúrát a sesotho nyelv, a mokorotlo kalap, a seanamarena takaró és a kitartó basotho hátasló őrzi.",
        "A Caledon-folyó mellett fekvő Maseru az ország fővárosa, közigazgatási központja és legnagyobb gazdasági gócpontja.",
    ],
    "ro": [
        "Este situat în Regatul Lesotho, o enclavă montană înconjurată complet de Republica Africa de Sud.",
        "Aparține platoului înalt al munților Maloti și Drakensberg, motiv pentru care țara este adesea numită „Regatul Munților” sau „Regatul Cerului”.",
        "Peste 80% din teritoriu se află la peste 1800 de metri altitudine, iar cel mai jos punct, la aproximativ 1400 m, este cel mai înalt punct minim din lume.",
        "Climatul este de tip alpin, cu veri răcoroase, ierni geroase și ninsori frecvente în zonele înalte.",
        "Economia se sprijină pe lână și mohair, pe diamante și pe exportul de apă realizat prin Lesotho Highlands Water Project.",
        "Cultura basotho se păstrează prin limba sesotho, prin pălăria mokorotlo, prin pătura seanamarena și prin renumitul ponei basotho.",
        "Maseru, situat pe râul Caledon, este capitala, centrul administrativ și principalul pol economic al țării.",
    ],
    "en": [
        "Located in the Kingdom of Lesotho, a mountain enclave entirely surrounded by South Africa in the southern part of the continent.",
        "Forms part of the Maloti and Drakensberg highlands, which earns the country its nicknames 'Mountain Kingdom' and 'Kingdom in the Sky'.",
        "More than 80 percent of the territory lies above 1800 metres, and its lowest point at about 1400 metres is the highest such low point on Earth.",
        "The climate is alpine in character, with cool summers, frosty winters and regular snowfall in the higher elevations.",
        "Economically, the country relies on wool and mohair, on diamonds and on water exports through the Lesotho Highlands Water Project.",
        "Basotho culture is preserved through the Sesotho language, the mokorotlo hat, the Seanamarena blanket and the hardy Basotho pony.",
        "Maseru, on the banks of the Caledon River, is the capital, administrative seat and largest economic centre of the country.",
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


# ---------- rendering ----------

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


# ---------- main per-POI processing ----------

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
            bn = (base_name.get(lang) or "").strip() or "Lesotho"
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


def process_file(path: Path) -> dict:
    text = path.read_text(encoding="utf-8")
    header, spans, footer = split_pois(text)
    new_pois: list[str] = []
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
