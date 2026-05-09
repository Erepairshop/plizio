# -*- coding: utf-8 -*-
"""
fill_drcongo_dedup_seo.py
==========================
A poiExtraDrcongoNatureV2.ts (es altalanosabban a Drcongo*V2) fajlokban egyes
POI-k DUPLIKALT `descriptionAdvanced` es `factsAdvanced` blokkokat tartalmaznak:
az elso blokk reszben kitoltott (de/hu/ro), a masodik blokk reszben ures (csak hu).
A TS object-literal szabaly szerint az UTOLSO kulcs nyer, igy a megjelenitett
ertek a (mostly) ures masodik blokk -> a SEO valojaban hianyos.

Ez a szkript:
1) megkeresi az osszes POI-t,
2) ha 2+ descA / factsA blokk van, MERGEli oket egy blokkba (ures helyekre az
   elozo blokkbol, vagy a sablonbol pottja az ertekeket),
3) az osszes duplikalt blokkot eltavolitja, csak egy maradjon POI-nkent,
4) ha tovabbra is ures egy mezo (es van forras name+desc/facts), kitolti sablonbol.
NEM hasznal mas nyelvu adatokat (cross-language tilos). Idempotens.
"""

from __future__ import annotations
import os
import re
import sys

REPO = r"C:/Users/User/plizio-repo"
DATA_DIR = os.path.join(REPO, "lib", "visualLab", "data")

# A tanzania/mozambique mintara - ugyanazokat a sablonokat hasznaljuk
sys.path.insert(0, os.path.join(REPO, "scripts"))
from fill_drcongo_seo import (
    TOPIC_TEXT, INTRO, CONNECT, CLOSE, GENERIC_FACTS,
    LANGS, build_description, build_facts,
    extract_lang_string, extract_lang_array,
    find_field_block, js_string_literal, js_array_literal,
    detect_topic, split_pois,
)
import fill_drcongo_seo as base

FILES = [
    "poiExtraDrcongoCitiesV2.ts",
    "poiExtraDrcongoEconomicV2.ts",
    "poiExtraDrcongoHistoryV2.ts",
    "poiExtraDrcongoLandmarksV2.ts",
    "poiExtraDrcongoLifeV2.ts",
    "poiExtraDrcongoNatureV2.ts",
    "poiExtraDrcongoReliefV2.ts",
    # Megjegyzes: a Democraticrepublicofcongo*V2 fajlokat KIHAGYJUK -- azok mas
    # adatszerkezetuek (pl. raw `description` mezok hianyoznak), ezert a tanzania-mintas
    # template-fill helytelen kimenetet adna. Csak a Drcongo*V2 fajlokat kezeljuk.
]


def find_all_field_blocks(poi: str, field: str):
    """Az osszes (start_brace_idx, end_brace_idx_exclusive, key_start) tuple a `field: { ... }` blokkokra."""
    pat = re.compile(r'\b' + field + r'\s*:\s*\{')
    out = []
    for m in pat.finditer(poi):
        i = m.end() - 1  # nyito {
        depth = 0
        in_str = False
        quote = ""
        j = i
        while j < len(poi):
            ch = poi[j]
            if in_str:
                if ch == "\\":
                    j += 2
                    continue
                if ch == quote:
                    in_str = False
            else:
                if ch == '"' or ch == "'":
                    in_str = True
                    quote = ch
                elif ch == '{':
                    depth += 1
                elif ch == '}':
                    depth -= 1
                    if depth == 0:
                        out.append((m.start(), j + 1, i, j + 1))
                        break
            j += 1
    return out


def parse_string_field(seg: str):
    """Visszaadja {lang: value | None} a `lang: "..."` minta alapjan. Ures string -> None (mintha nem lenne)."""
    res = {}
    for lang in LANGS:
        v = extract_lang_string(seg, lang)
        if v is None:
            res[lang] = None
        elif v.strip() == "":
            res[lang] = None
        else:
            res[lang] = v
    return res


def parse_array_field(seg: str):
    res = {}
    for lang in LANGS:
        arr = extract_lang_array(seg, lang)
        if arr is None:
            res[lang] = None
        elif len(arr) == 0:
            res[lang] = None
        else:
            res[lang] = arr
    return res


def merge_string_blocks(blocks_text: list):
    """Egyesit tobb desc-blokk szoveget. Az elso nem-None nyer langenkent."""
    merged = {l: None for l in LANGS}
    for seg in blocks_text:
        parsed = parse_string_field(seg)
        for l in LANGS:
            if merged[l] is None and parsed[l] is not None:
                merged[l] = parsed[l]
    return merged


def merge_array_blocks(blocks_text: list):
    merged = {l: None for l in LANGS}
    for seg in blocks_text:
        parsed = parse_array_field(seg)
        for l in LANGS:
            if merged[l] is None and parsed[l] is not None:
                merged[l] = parsed[l]
    return merged


def render_string_block(values: dict) -> str:
    """`descriptionAdvanced: { de: "...", hu: "...", ro: "...", en: "..." }`."""
    parts = []
    for l in LANGS:
        v = values.get(l) or ""
        parts.append(f"      {l}: {js_string_literal(v)}")
    return "descriptionAdvanced: {\n" + ",\n".join(parts) + "\n    }"


def render_array_block(values: dict) -> str:
    parts = []
    for l in LANGS:
        arr = values.get(l) or []
        parts.append(f"      {l}: {js_array_literal(arr)}")
    return "factsAdvanced: {\n" + ",\n".join(parts) + "\n    }"


def get_name_desc_facts(poi: str):
    name_blk = find_field_block(poi, "name")
    desc_blk = find_field_block(poi, "description")
    facts_blk = find_field_block(poi, "facts")
    name_src = poi[name_blk[0]:name_blk[1]] if name_blk else ""
    desc_src = poi[desc_blk[0]:desc_blk[1]] if desc_blk else ""
    facts_src = poi[facts_blk[0]:facts_blk[1]] if facts_blk else ""
    return name_src, desc_src, facts_src


def fill_with_template(merged_desc: dict, merged_facts: dict, name_src: str, desc_src: str, facts_src: str, topic: str):
    """A merged ertekek ures (None) helyeit kitolti sablonbol nyelvenkent."""
    fills_d = 0
    fills_f = 0
    for lang in LANGS:
        name_v = extract_lang_string(name_src, lang) or ""
        desc_v = extract_lang_string(desc_src, lang) or ""
        facts_v = extract_lang_array(facts_src, lang) or []

        if merged_desc[lang] is None:
            # csak akkor toltunk, ha van forras
            if name_v and (desc_v or facts_v):
                merged_desc[lang] = build_description(name_v, desc_v, facts_v, lang, topic)
                fills_d += 1

        if merged_facts[lang] is None:
            if name_v and (desc_v or facts_v):
                built = build_facts(desc_v, facts_v, lang)
                if len(built) >= 6:
                    merged_facts[lang] = built
                    fills_f += 1
    return fills_d, fills_f


def process_poi(poi: str, topic: str):
    """Visszaadja (uj_poi, dedup_d, dedup_f, fills_d, fills_f)."""
    da_blocks = find_all_field_blocks(poi, "descriptionAdvanced")
    fa_blocks = find_all_field_blocks(poi, "factsAdvanced")

    name_src, desc_src, facts_src = get_name_desc_facts(poi)

    dedup_d = max(0, len(da_blocks) - 1)
    dedup_f = max(0, len(fa_blocks) - 1)

    # --- merge desc blocks
    if da_blocks:
        seg_texts = [poi[b[0]:b[1]] for b in da_blocks]
        merged_d = merge_string_blocks(seg_texts)
    else:
        merged_d = {l: None for l in LANGS}

    if fa_blocks:
        seg_texts_f = [poi[b[0]:b[1]] for b in fa_blocks]
        merged_f = merge_array_blocks(seg_texts_f)
    else:
        merged_f = {l: None for l in LANGS}

    fills_d, fills_f = fill_with_template(merged_d, merged_f, name_src, desc_src, facts_src, topic)

    # --- replace strategy: az ELSO blokkot lecsereljuk a merge-eltre, a tobbit toroljuk.
    # Sorrend: elobb a kesobbi blokkokat toroljuk (hatuolrol elore), aztan az elsot lecsereljuk.

    # Kombinaljuk a desc es facts blokkokat egy utbaval, hatuolrol elore.
    # Egy "blokk-rekord": (start, end, kind, idx) where kind in {"d","f"}, idx index a sajat listabol.
    all_blocks = []
    for i, b in enumerate(da_blocks):
        all_blocks.append((b[0], b[1], "d", i))
    for i, b in enumerate(fa_blocks):
        all_blocks.append((b[0], b[1], "f", i))
    all_blocks.sort(key=lambda x: x[0])

    # Toroljuk a duplikaltakat hatuolrol elore. Az elsot (idx==0) megtartjuk, csak content-et csereljuk.
    # Es kezeljuk a "}, image:" ill. "}, ..." kovetkezo karaktereket.
    new_poi = poi
    for b in reversed(all_blocks):
        start, end, kind, idx = b
        if idx == 0:
            # csere
            if kind == "d":
                replacement = render_string_block(merged_d)
            else:
                replacement = render_array_block(merged_f)
            new_poi = new_poi[:start] + replacement + new_poi[end:]
        else:
            # toroljuk a blokkot ES az utana levo "," (vagy elotti)
            # Az obj egy property; tipikusan: "    descriptionAdvanced: {...},\n    factsAdvanced: {...}"
            # Vagy: "...}, image:..."  -> ekkor a `, ` is a property reszem, NE toroljuk az image-et.
            # Egyszeru megkozelites: toroljuk a [start:end] blokkot, majd takaritsuk a kornyezo veszelyteles
            # vesszoket. A `, image:` az image elott -> ez OUTSIDE az end-en. Az end a `}` utan all.
            # Sajatos minta a fajlban: "    descriptionAdvanced: {\n  ...\n    },\n    factsAdvanced..." vagy
            # "    factsAdvanced: { ... }, image: ...".
            # Toroljuk az end utan eljovo `,\n    ` -ot (ha kovetkezo kulcs jon), VAGY az start elotti `,\n    ` -ot (ha mast koto utan).
            # Egyszerubb: keressuk meg a jobb/bal whitespace+vesszo + ujsor, es vagjuk.

            # Keressuk az `end` utani max 200 karakter mintat
            seg_after = new_poi[end:end + 200]
            seg_before = new_poi[max(0, start - 200):start]

            after_match = re.match(r'^\s*,\s*\n', seg_after)
            if after_match:
                # toroljuk a ", \n" -t is
                cut_end = end + after_match.end()
                new_poi = new_poi[:start] + new_poi[cut_end:]
            else:
                # talan elotte van ", " amit torolni kell
                before_match = re.search(r',\s*\n\s*$', seg_before)
                if before_match:
                    new_start = (start - len(seg_before)) + before_match.start()
                    new_poi = new_poi[:new_start] + new_poi[end:]
                else:
                    # csak a blokkot toroljuk
                    new_poi = new_poi[:start] + new_poi[end:]

            # Ha bal-jobbon kettos vesszo lett (pl. "}, ,\n    image"), takaritsuk
            new_poi = re.sub(r',\s*,', ',', new_poi)

    # Maradek takaritas: ", image: ..." minta megorzodik. Es ", \n    factsAdvanced..." is.
    # Az elso blokkot lecsereltuk, igy az `},` vagy `}` utan rendezett.

    return new_poi, dedup_d, dedup_f, fills_d, fills_f


def process_file(path: str):
    topic = detect_topic(os.path.basename(path))
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()

    blocks = split_pois(content)
    if not blocks:
        return (0, 0, 0, 0, 0)

    new_parts = []
    last_end = 0
    poi_count = 0
    total_dd = total_df = 0
    total_fd = total_ff = 0
    for start, end, _id in blocks:
        new_parts.append(content[last_end:start])
        poi_text = content[start:end]
        new_poi, dd, df, fd, ff = process_poi(poi_text, topic)
        total_dd += dd
        total_df += df
        total_fd += fd
        total_ff += ff
        new_parts.append(new_poi)
        last_end = end
        poi_count += 1
    new_parts.append(content[last_end:])
    new_content = "".join(new_parts)

    if new_content != content:
        with open(path, "w", encoding="utf-8") as f:
            f.write(new_content)

    return poi_count, total_dd, total_df, total_fd, total_ff


def main():
    g_poi = g_dd = g_df = g_fd = g_ff = 0
    print("=== DEDUP + KITOLTES ===")
    for fname in FILES:
        path = os.path.join(DATA_DIR, fname)
        if not os.path.exists(path):
            print(f"[skip] {fname} nem letezik")
            continue
        pois, dd, df, fd, ff = process_file(path)
        print(f"{fname}: {pois} POI | dedup: -{dd} descA, -{df} factsA | template-fill: +{fd} descA, +{ff} factsA")
        g_poi += pois
        g_dd += dd
        g_df += df
        g_fd += fd
        g_ff += ff
    print(f"\nOSSZESEN: {g_poi} POI")
    print(f"  dedup blokkok: {g_dd} descA + {g_df} factsA = {g_dd + g_df}")
    print(f"  sablon-kitoltes: {g_fd} descA + {g_ff} factsA = {g_fd + g_ff}")


if __name__ == "__main__":
    main()
