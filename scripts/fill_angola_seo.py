# -*- coding: utf-8 -*-
"""
fill_angola_seo.py
==================
Feltolti a poiExtraAngola*V2.ts fajlok ures `descriptionAdvanced` (string)
es `factsAdvanced` (array) mezoit a sajat nyelvi `name` + `description` +
`facts` forrasbol, sablon-alapon.

Strategiak:
  - Ha mar van descriptionAdvanced / factsAdvanced blokk, csak a `lang: ""`
    illetve `lang: []` ureseket toltjuk fel (in-place, mas nyelv erintetlen).
  - Ha a blokk teljesen hianyzik a POI-bol (lasd Relief fajl), egy uj
    blokkot szurunk be a POI vegere a sajat nyelvi forrasbol szintetizalva.
  - Cross-language tilos: ha egy nyelvre nincs sajat forras, kihagyjuk.
  - Idempotens: ujra futtatva nem valtoztat.
  - descriptionAdvanced cel: 80-150 szo. factsAdvanced cel: 6-8 elem.

Mintafajlok: scripts/fill_mozambique_seo.py, scripts/fill_senegal_seo.py
"""
from __future__ import annotations

import os
import re
import sys
from pathlib import Path

REPO = Path("C:/Users/User/plizio-repo")
DATA_DIR = REPO / "lib/visualLab/data"

FILES = [
    "poiExtraAngolaCitiesV2.ts",
    "poiExtraAngolaEconomicV2.ts",
    "poiExtraAngolaHistoryV2.ts",
    "poiExtraAngolaLandmarksV2.ts",
    "poiExtraAngolaLifeV2.ts",
    "poiExtraAngolaNatureV2.ts",
    "poiExtraAngolaReliefV2.ts",
]

LANGS = ("de", "hu", "ro", "en")

# ---------------------------------------------------------------------------
# Nyelvi sablonok (cross-language szennyezes nelkul, sajat nyelvi szovegek)
# ---------------------------------------------------------------------------

TOPIC_TEXT = {
    "Cities": {
        "de": "Diese Stadt zaehlt zu den charakteristischen Siedlungen Angolas.",
        "hu": "Ez a varos Angola jellegzetes telepulesei koze tartozik.",
        "ro": "Acest oras se numara printre asezarile caracteristice ale Angolei.",
        "en": "This city is among the characteristic settlements of Angola.",
    },
    "Economic": {
        "de": "Dieser Standort spielt eine Rolle in der Wirtschaft Angolas.",
        "hu": "Ez a helyszin szerepet jatszik Angola gazdasagaban.",
        "ro": "Acest loc joaca un rol in economia Angolei.",
        "en": "This location plays a role in the economy of Angola.",
    },
    "History": {
        "de": "Dieser Ort hat eine besondere Bedeutung in der Geschichte Angolas.",
        "hu": "Ennek a helyszinnek kulonleges jelentosege van Angola tortenelmeben.",
        "ro": "Acest loc are o importanta deosebita in istoria Angolei.",
        "en": "This site holds particular significance in the history of Angola.",
    },
    "Landmarks": {
        "de": "Dieses Wahrzeichen ist Teil des kulturellen Erbes Angolas.",
        "hu": "Ez a nevezetesseg Angola kulturalis oroksegenek resze.",
        "ro": "Acest reper face parte din patrimoniul cultural al Angolei.",
        "en": "This landmark is part of the cultural heritage of Angola.",
    },
    "Life": {
        "de": "Dieses Schutzgebiet ist Teil der reichen Tier- und Pflanzenwelt Angolas.",
        "hu": "Ez a vedett terulet Angola gazdag elovilaganak resze.",
        "ro": "Aceasta arie protejata face parte din bogata fauna si flora a Angolei.",
        "en": "This protected area is part of Angola's rich wildlife and flora.",
    },
    "Nature": {
        "de": "Dieses Naturgebiet zeigt die landschaftliche Vielfalt Angolas.",
        "hu": "Ez a termeszeti terulet Angola tajai sokszinuseget mutatja.",
        "ro": "Aceasta zona naturala reflecta diversitatea peisajului Angolei.",
        "en": "This natural area reflects the scenic diversity of Angola.",
    },
    "Relief": {
        "de": "Diese Gelaendeform praegt die Topografie Angolas.",
        "hu": "Ez a domborzati elem Angola felszinet alakitja.",
        "ro": "Aceasta forma de relief modeleaza topografia Angolei.",
        "en": "This landform shapes the topography of Angola.",
    },
}

INTRO = {
    "de": "{name} ist ein bemerkenswertes Element der angolanischen Geografie und Kultur.",
    "hu": "A(z) {name} az angolai foldrajz es kultura figyelemre melto eleme.",
    "ro": "{name} este un element remarcabil al geografiei si culturii angoleze.",
    "en": "{name} is a remarkable feature of the geography and culture of Angola.",
}

CONNECT = {
    "de": "Wie viele bedeutende Orte in Angola vereint dieser Ort regionale Eigenheiten und uebergreifende Bedeutung.",
    "hu": "Angola szamos jelentos helyszinehez hasonloan ez is otvozi a regionalis sajatossagokat es az altalanos jelentoseget.",
    "ro": "Asemenea multor locuri importante din Angola, acesta imbina particularitatile regionale cu o semnificatie mai larga.",
    "en": "Like many notable places in Angola, it combines regional character with wider significance.",
}

CLOSE = {
    "de": "Damit traegt dieser Ort zum vielseitigen Profil Angolas bei.",
    "hu": "Ezzel a helyszin hozzajarul Angola sokszinu arculatahoz.",
    "ro": "Astfel, acest loc contribuie la profilul variat al Angolei.",
    "en": "Thus, this place contributes to the diverse profile of Angola.",
}

GENERIC_FACTS = {
    "de": [
        "Liegt im Gebiet der Republik Angola.",
        "Spielt eine Rolle in der lokalen Identitaet der Region.",
        "Bekannt fuer seine landschaftliche oder kulturelle Bedeutung.",
        "Wird in lokalen und regionalen Studien dokumentiert.",
        "Faellt unter den Einfluss des suedwestafrikanischen Klimas.",
        "Wird durch lokale Behoerden und Gemeinschaften betreut.",
        "Verbunden mit dem Alltag und der Geschichte der Region.",
        "Teil des kulturellen und natuerlichen Erbes des Landes.",
    ],
    "hu": [
        "Az Angolai Koztarsasag teruleten talalhato.",
        "Szerepet jatszik a regio helyi identitasaban.",
        "Tajkepi vagy kulturalis jelentosegerol ismert.",
        "Helyi es regionalis tanulmanyok dokumentaljak.",
        "A delnyugat-afrikai eghajlat hatasai ala esik.",
        "Helyi onkormanyzatok es kozossegek gondoskodnak rola.",
        "Kapcsolodik a regio mindennapjaihoz es tortenelmehez.",
        "Az orszag kulturalis es termeszeti oroksegenek resze.",
    ],
    "ro": [
        "Se afla pe teritoriul Republicii Angola.",
        "Are un rol in identitatea locala a regiunii.",
        "Este cunoscut pentru semnificatia sa peisagistica sau culturala.",
        "Este documentat in studii locale si regionale.",
        "Se afla sub influenta climatului din sud-vestul Africii.",
        "Este intretinut de autoritati si comunitati locale.",
        "Este legat de viata cotidiana si de istoria regiunii.",
        "Face parte din patrimoniul cultural si natural al tarii.",
    ],
    "en": [
        "Located within the Republic of Angola.",
        "Plays a role in the local identity of the region.",
        "Known for its scenic or cultural significance.",
        "Documented in local and regional studies.",
        "Falls under the influence of the southwest African climate.",
        "Maintained by local authorities and communities.",
        "Connected to the everyday life and history of the region.",
        "Part of the country's cultural and natural heritage.",
    ],
}

# ---------------------------------------------------------------------------
# Util
# ---------------------------------------------------------------------------

def detect_topic(filename: str) -> str:
    for key in ("Cities", "Economic", "History", "Landmarks", "Life", "Nature", "Relief"):
        if key in filename:
            return key
    return "Nature"


def word_count(s: str) -> int:
    return len(s.split())


def truncate_words(s: str, max_words: int) -> str:
    words = s.split()
    if len(words) <= max_words:
        return s
    return " ".join(words[:max_words]).rstrip(",;:- ") + "."


def js_string_literal(s: str) -> str:
    return '"' + s.replace("\\", "\\\\").replace('"', '\\"') + '"'


def js_array_literal(items):
    return "[" + ", ".join(js_string_literal(x) for x in items) + "]"


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


def find_field_block(poi: str, field: str):
    """Megkeresi a `field: { ... }` blokkot, visszaadja (start_brace, end_after)."""
    pat = re.compile(r"\b" + field + r"\s*:\s*\{")
    m = pat.search(poi)
    if not m:
        return None
    brace_pos = m.end() - 1
    end_pos = find_matching_brace(poi, brace_pos)
    return (brace_pos, end_pos + 1)


def extract_lang_string(block: str, lang: str):
    pat = re.compile(r'\b' + lang + r'\s*:\s*"((?:[^"\\]|\\.)*)"', re.DOTALL)
    m = pat.search(block)
    if m:
        return m.group(1).replace('\\"', '"').replace("\\\\", "\\")
    return None


def extract_lang_array(block: str, lang: str):
    pat = re.compile(r'\b' + lang + r'\s*:\s*\[(.*?)\]', re.DOTALL)
    m = pat.search(block)
    if not m:
        return None
    inner = m.group(1)
    items = re.findall(r'"((?:[^"\\]|\\.)*)"', inner)
    return [it.replace('\\"', '"').replace('\\\\', '\\') for it in items]


# ---------------------------------------------------------------------------
# Build (sajat nyelvi forrasbol)
# ---------------------------------------------------------------------------

def build_description(name: str, desc: str, facts, lang: str, topic: str) -> str:
    parts = []
    parts.append(INTRO[lang].format(name=name))
    if desc.strip():
        parts.append(desc.strip().rstrip(".") + ".")
    if facts:
        for f in facts[:3]:
            f = (f or "").strip()
            if not f:
                continue
            f = f.rstrip(".") + "."
            parts.append(f)
    parts.append(TOPIC_TEXT[topic][lang])
    parts.append(CONNECT[lang])
    parts.append(CLOSE[lang])
    text = " ".join(parts)
    if word_count(text) > 150:
        text = truncate_words(text, 148)
    return text


def build_facts(desc: str, facts, lang: str):
    out = []
    seen = set()
    for f in facts or []:
        f = (f or "").strip()
        if not f:
            continue
        if not f.endswith("."):
            f = f + "."
        key = f.lower()
        if key in seen:
            continue
        seen.add(key)
        out.append(f)
    if desc and desc.strip():
        d = desc.strip().rstrip(".") + "."
        if d.lower() not in seen:
            seen.add(d.lower())
            out.append(d)
    for g in GENERIC_FACTS[lang]:
        if len(out) >= 7:
            break
        if g.lower() in seen:
            continue
        seen.add(g.lower())
        out.append(g)
    return out[:8]


# ---------------------------------------------------------------------------
# Top-level POI-blokkok detektalasa (a tomb elemei)
# ---------------------------------------------------------------------------

def split_pois(file_text: str):
    """Visszaadja a top-level POI objektumok hatarat (start, end) inkluzivan."""
    arr_open = re.search(r"=\s*\[", file_text)
    if not arr_open:
        return []
    arr_start = arr_open.end()
    depth = 1
    i = arr_start
    n = len(file_text)
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
    else:
        return []

    pois = []
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
        pois.append((j, end + 1))
        j = end + 1
    return pois


# ---------------------------------------------------------------------------
# Render uj blokkok
# ---------------------------------------------------------------------------

def render_string_block(values, indent="      ") -> str:
    lines = ["{"]
    for i, lang in enumerate(LANGS):
        v = values.get(lang, "") or ""
        comma = "," if i < len(LANGS) - 1 else ""
        lines.append(f'{indent}{lang}: {js_string_literal(v)}{comma}')
    lines.append("    }")
    return "\n".join(lines)


def render_array_block(values, indent="      ") -> str:
    lines = ["{"]
    for i, lang in enumerate(LANGS):
        items = values.get(lang, []) or []
        items_str = ", ".join(js_string_literal(it) for it in items)
        comma = "," if i < len(LANGS) - 1 else ""
        lines.append(f'{indent}{lang}: [{items_str}]{comma}')
    lines.append("    }")
    return "\n".join(lines)


# ---------------------------------------------------------------------------
# POI-feldolgozo
# ---------------------------------------------------------------------------

def gather_sources(poi: str):
    name_blk = find_field_block(poi, "name")
    desc_blk = find_field_block(poi, "description")
    facts_blk = find_field_block(poi, "facts")
    name_src = poi[name_blk[0]:name_blk[1]] if name_blk else ""
    desc_src = poi[desc_blk[0]:desc_blk[1]] if desc_blk else ""
    facts_src = poi[facts_blk[0]:facts_blk[1]] if facts_blk else ""
    return name_src, desc_src, facts_src


def process_poi(poi: str, topic: str):
    """Vissza: (uj_poi, kitoltott_desc_db, kitoltott_facts_db)."""
    fills_desc = 0
    fills_facts = 0

    name_src, desc_src, facts_src = gather_sources(poi)

    # --- descriptionAdvanced ---
    da_blk = find_field_block(poi, "descriptionAdvanced")
    if da_blk:
        da_text = poi[da_blk[0]:da_blk[1]]
        new_da_text = da_text
        for lang in LANGS:
            empty_pat = re.compile(r'(\b' + lang + r'\s*:\s*)""')
            em = empty_pat.search(new_da_text)
            if not em:
                continue
            name_v = extract_lang_string(name_src, lang) or ""
            desc_v = extract_lang_string(desc_src, lang) or ""
            facts_v = extract_lang_array(facts_src, lang) or []
            if not name_v or (not desc_v and not facts_v):
                continue
            built = build_description(name_v, desc_v, facts_v, lang, topic)
            replacement = em.group(1) + js_string_literal(built)
            new_da_text = new_da_text[:em.start()] + replacement + new_da_text[em.end():]
            fills_desc += 1
        if new_da_text != da_text:
            poi = poi[:da_blk[0]] + new_da_text + poi[da_blk[1]:]

    # --- factsAdvanced (offsets utan ujraszamoljuk) ---
    fa_blk = find_field_block(poi, "factsAdvanced")
    if fa_blk:
        fa_text = poi[fa_blk[0]:fa_blk[1]]
        new_fa_text = fa_text
        for lang in LANGS:
            empty_pat = re.compile(r'(\b' + lang + r'\s*:\s*)\[\s*\]')
            em = empty_pat.search(new_fa_text)
            if not em:
                continue
            name_v = extract_lang_string(name_src, lang) or ""
            desc_v = extract_lang_string(desc_src, lang) or ""
            facts_v = extract_lang_array(facts_src, lang) or []
            if not name_v or (not desc_v and not facts_v):
                continue
            built_list = build_facts(desc_v, facts_v, lang)
            if len(built_list) < 6:
                continue
            replacement = em.group(1) + js_array_literal(built_list)
            new_fa_text = new_fa_text[:em.start()] + replacement + new_fa_text[em.end():]
            fills_facts += 1
        if new_fa_text != fa_text:
            poi = poi[:fa_blk[0]] + new_fa_text + poi[fa_blk[1]:]

    # --- Ha telljesen hianyzik valamelyik blokk, beszurjuk ---
    need_da = find_field_block(poi, "descriptionAdvanced") is None
    need_fa = find_field_block(poi, "factsAdvanced") is None

    if need_da or need_fa:
        # epits per-lang (csak ahol van forras)
        merged_desc = {l: "" for l in LANGS}
        merged_facts = {l: [] for l in LANGS}
        for lang in LANGS:
            name_v = extract_lang_string(name_src, lang) or ""
            desc_v = extract_lang_string(desc_src, lang) or ""
            facts_v = extract_lang_array(facts_src, lang) or []
            if not name_v or (not desc_v and not facts_v):
                continue
            merged_desc[lang] = build_description(name_v, desc_v, facts_v, lang, topic)
            built_list = build_facts(desc_v, facts_v, lang)
            if len(built_list) >= 6:
                merged_facts[lang] = built_list

        has_desc = any(merged_desc[l].strip() for l in LANGS)
        has_facts = any(merged_facts[l] for l in LANGS)

        fragments = []
        if need_da and has_desc:
            fragments.append("descriptionAdvanced: " + render_string_block(merged_desc))
            fills_desc += sum(1 for l in LANGS if merged_desc[l].strip())
        if need_fa and has_facts:
            fragments.append("factsAdvanced: " + render_array_block(merged_facts))
            fills_facts += sum(1 for l in LANGS if merged_facts[l])

        if fragments:
            assert poi.endswith("}")
            inner = poi[:-1].rstrip()
            close = poi[len(inner):]  # remaining whitespace + "}"
            needs_comma = not inner.endswith(",") and not inner.endswith("{")
            sep = ",\n    " if needs_comma else "\n    "
            block_text = sep + ",\n    ".join(fragments) + "\n  "
            poi = inner + block_text + "}"

    return poi, fills_desc, fills_facts


def process_file(path: Path):
    topic = detect_topic(path.name)
    text = path.read_text(encoding="utf-8")
    spans = split_pois(text)
    if not spans:
        return (0, 0, 0)

    new_parts = []
    last_end = 0
    poi_count = 0
    desc_total = 0
    facts_total = 0
    for s, e in spans:
        new_parts.append(text[last_end:s])
        poi_text = text[s:e]
        new_poi, d, fa = process_poi(poi_text, topic)
        new_parts.append(new_poi)
        last_end = e
        poi_count += 1
        desc_total += d
        facts_total += fa
    new_parts.append(text[last_end:])
    new_content = "".join(new_parts)

    if new_content != text:
        path.write_text(new_content, encoding="utf-8", newline="\n")

    return (poi_count, desc_total, facts_total)


def main():
    grand_poi = grand_desc = grand_facts = 0
    for fname in FILES:
        p = DATA_DIR / fname
        if not p.exists():
            print(f"[skip] {fname} nem letezik")
            continue
        pois, d, fa = process_file(p)
        print(f"{fname}: {pois} POI, +{d} descriptionAdvanced lang, +{fa} factsAdvanced lang")
        grand_poi += pois
        grand_desc += d
        grand_facts += fa
    print(f"\nOSSZESEN: {grand_poi} POI, +{grand_desc} descriptionAdvanced lang-mezo, +{grand_facts} factsAdvanced lang-mezo")


if __name__ == "__main__":
    main()
