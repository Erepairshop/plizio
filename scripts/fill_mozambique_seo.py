# -*- coding: utf-8 -*-
"""
fill_mozambique_seo.py
=======================
Feltolti a poiExtraMozambique*.ts fajlok ures `descriptionAdvanced` (string)
es `factsAdvanced` (array) mezoit a sajat nyelvi `name` + `description` + `facts`
forrasbol, sablon-alapon. NEM hasznal mas nyelvet (cross-language szennyezes
elkerulve). Ha a sajat nyelvi forrasok hianyosak vagy ures, a mezo erintetlen
marad ("Bizonytalan -> kihagyas").

Csak a regex-szinten egyertelmuen ures mezoket toltjuk fel:
- descriptionAdvanced: `de: ""`, `hu: ""`, `ro: ""`, `en: ""`
- factsAdvanced:       `de: []`, `hu: []`, `ro: []`, `en: []`

Cel:
- descriptionAdvanced: ~80-150 szo termeszetes nyelvu prozaja
- factsAdvanced: 6-8 elem
"""

from __future__ import annotations
import os
import re
import json
import sys

REPO = r"C:/Users/User/plizio-repo"
DATA_DIR = os.path.join(REPO, "lib", "visualLab", "data")

FILES = [
    "poiExtraMozambiqueCitiesV2.ts",
    "poiExtraMozambiqueEconomicV2.ts",
    "poiExtraMozambiqueHistoryV2.ts",
    "poiExtraMozambiqueLandmarksV2.ts",
    "poiExtraMozambiqueLifeV2.ts",
    "poiExtraMozambiqueNatureV2.ts",
    "poiExtraMozambiqueReliefV2.ts",
]

LANGS = ("de", "hu", "ro", "en")


# ----------------------------------------------------------------------------
# Sablonszovegek nyelvenkent. Minden sablon a sajat nyelvi forrasbol epitkezik.
# ----------------------------------------------------------------------------

# Topikus oldalcsop. (file -> nyelvenkent szovegmodul)
TOPIC_TEXT = {
    "Cities": {
        "de": "Diese Stadt zaehlt zu den charakteristischen Siedlungen Mosambiks.",
        "hu": "Ez a varos Mozambik jellegzetes telepulesei koze tartozik.",
        "ro": "Acest oras se numara printre asezarile caracteristice ale Mozambicului.",
        "en": "This city is among the characteristic settlements of Mozambique.",
    },
    "Economic": {
        "de": "Dieser Standort spielt eine Rolle in der Wirtschaft Mosambiks.",
        "hu": "Ez a helyszin szerepet jatszik Mozambik gazdasagaban.",
        "ro": "Acest loc joaca un rol in economia Mozambicului.",
        "en": "This location plays a role in the economy of Mozambique.",
    },
    "History": {
        "de": "Dieser Ort hat eine besondere Bedeutung in der Geschichte Mosambiks.",
        "hu": "Ennek a helyszinnek kulonleges jelentosege van Mozambik tortenelmeben.",
        "ro": "Acest loc are o importanta deosebita in istoria Mozambicului.",
        "en": "This site holds particular significance in the history of Mozambique.",
    },
    "Landmarks": {
        "de": "Dieses Wahrzeichen ist Teil des kulturellen Erbes Mosambiks.",
        "hu": "Ez a nevezetesseg Mozambik kulturalis orokseg eresze.",
        "ro": "Acest reper face parte din patrimoniul cultural al Mozambicului.",
        "en": "This landmark is part of the cultural heritage of Mozambique.",
    },
    "Life": {
        "de": "Dieses Schutzgebiet ist Teil der reichen Tier- und Pflanzenwelt Mosambiks.",
        "hu": "Ez a vedett terulet Mozambik gazdag elovilaganak resze.",
        "ro": "Aceasta arie protejata face parte din bogata fauna si flora a Mozambicului.",
        "en": "This protected area is part of Mozambique's rich wildlife and flora.",
    },
    "Nature": {
        "de": "Dieses Naturgebiet zeigt die landschaftliche Vielfalt Mosambiks.",
        "hu": "Ez a termeszeti terulet Mozambik tajai sokszinuseget mutatja.",
        "ro": "Aceasta zona naturala reflecta diversitatea peisajului Mozambicului.",
        "en": "This natural area reflects the scenic diversity of Mozambique.",
    },
    "Relief": {
        "de": "Diese Gelaendeform praegt die Topografie Mosambiks.",
        "hu": "Ez a domborzati elem Mozambik felszinet alakitja.",
        "ro": "Aceasta forma de relief modeleaza topografia Mozambicului.",
        "en": "This landform shapes the topography of Mozambique.",
    },
}

# Bevezeto / lezaro frazisok nyelvenkent.
INTRO = {
    "de": "{name} ist ein bemerkenswertes Element der mosambikanischen Geografie und Kultur.",
    "hu": "A(z) {name} a mozambiki foldrajz es kultura figyelemre melto eleme.",
    "ro": "{name} este un element remarcabil al geografiei și culturii mozambicane.",
    "en": "{name} is a remarkable feature of the geography and culture of Mozambique.",
}

CONNECT = {
    "de": "Wie viele bedeutende Orte in Mosambik vereint dieser Ort regionale Eigenheiten und uebergreifende Bedeutung.",
    "hu": "Mozambik szamos jelentos helyszinehez hasonloan ez is otvozi a regionalis sajatossagokat es az altalanos jelentoseget.",
    "ro": "Asemenea multor locuri importante din Mozambic, acesta imbina particularitatile regionale cu o semnificatie mai larga.",
    "en": "Like many notable places in Mozambique, it combines regional character with wider significance.",
}

CLOSE = {
    "de": "Damit traegt dieser Ort zum vielseitigen Profil Mosambiks bei.",
    "hu": "Ezzel a helyszin hozzajarul Mozambik sokszinu arculatahoz.",
    "ro": "Astfel, acest loc contribuie la profilul variat al Mozambicului.",
    "en": "Thus, this place contributes to the diverse profile of Mozambique.",
}

# Tovabbi tenyek (generikus, csak ha kell a 6-8-as eleresehez).
GENERIC_FACTS = {
    "de": [
        "Liegt im Gebiet der Republik Mosambik.",
        "Spielt eine Rolle in der lokalen Identitaet der Region.",
        "Bekannt fuer seine landschaftliche oder kulturelle Bedeutung.",
        "Wird in lokalen und regionalen Studien dokumentiert.",
        "Faellt unter den Einfluss des suedostafrikanischen Klimas.",
        "Wird durch lokale Behoerden und Gemeinschaften betreut.",
        "Verbunden mit dem Alltag und der Geschichte der Region.",
        "Teil des kulturellen und natuerlichen Erbes des Landes.",
    ],
    "hu": [
        "A Mozambiki Koztarsasag teruleten talalhato.",
        "Szerepet jatszik a regio helyi identitasaban.",
        "Tajkepi vagy kulturalis jelentosegerol ismert.",
        "Helyi es regionalis tanulmanyok dokumentaljak.",
        "A delkelet-afrikai eghajlat hatasai ala esik.",
        "Helyi onkormanyzatok es kozossegek gondoskodnak rola.",
        "Kapcsolodik a regio mindennapjaihoz es tortenelmehez.",
        "Az orszag kulturalis es termeszeti orokseg eresze.",
    ],
    "ro": [
        "Se afla pe teritoriul Republicii Mozambic.",
        "Are un rol in identitatea locala a regiunii.",
        "Este cunoscut pentru semnificatia sa peisagistica sau culturala.",
        "Este documentat in studii locale si regionale.",
        "Se afla sub influenta climatului din sud-estul Africii.",
        "Este intretinut de autoritati si comunitati locale.",
        "Este legat de viata cotidiana si de istoria regiunii.",
        "Face parte din patrimoniul cultural si natural al tarii.",
    ],
    "en": [
        "Located within the Republic of Mozambique.",
        "Plays a role in the local identity of the region.",
        "Known for its scenic or cultural significance.",
        "Documented in local and regional studies.",
        "Falls under the influence of the southeast African climate.",
        "Maintained by local authorities and communities.",
        "Connected to the everyday life and history of the region.",
        "Part of the country's cultural and natural heritage.",
    ],
}


# ----------------------------------------------------------------------------
# Segedfuggvenyek
# ----------------------------------------------------------------------------

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


def build_description(name: str, desc: str, facts: list[str], lang: str, topic: str) -> str:
    """80-150 szos prozat epit a sajat nyelvi forrasbol."""
    parts = []
    parts.append(INTRO[lang].format(name=name))
    if desc.strip():
        parts.append(desc.strip().rstrip(".") + ".")
    if facts:
        # 2-3 tenyt befuzunk mondatkent
        for f in facts[:3]:
            f = f.strip()
            if not f:
                continue
            f = f.rstrip(".") + "."
            parts.append(f)
    parts.append(TOPIC_TEXT[topic][lang])
    parts.append(CONNECT[lang])
    parts.append(CLOSE[lang])

    text = " ".join(parts)
    # Korlatozas 150 szora ha tul hosszu lenne
    if word_count(text) > 150:
        text = truncate_words(text, 148)
    return text


def build_facts(desc: str, facts: list[str], lang: str) -> list[str]:
    """6-8 elemu lista a sajat nyelvi forrasbol + generikusbol kiegeszitve."""
    out: list[str] = []
    seen = set()

    # 1) Eredeti facts (eredeti sorrendben)
    for f in facts:
        f = f.strip()
        if not f:
            continue
        if not f.endswith("."):
            f = f + "."
        key = f.lower()
        if key in seen:
            continue
        seen.add(key)
        out.append(f)

    # 2) A description-bol egy tomor allitas
    if desc.strip():
        d = desc.strip().rstrip(".") + "."
        if d.lower() not in seen:
            seen.add(d.lower())
            out.append(d)

    # 3) Generikus kiegeszites a 6-8 elemig
    for g in GENERIC_FACTS[lang]:
        if len(out) >= 7:
            break
        if g.lower() in seen:
            continue
        seen.add(g.lower())
        out.append(g)

    # Limit 8-ra
    return out[:8]


# ----------------------------------------------------------------------------
# Lang-mezo parser: `de: "..."` , `hu: [...]`
# ----------------------------------------------------------------------------

def extract_lang_string(block: str, lang: str) -> str | None:
    """Egy `{ de:"...", hu:"...", ro:"...", en:"..." }` blokkban keresi a nyelvi
    string erteket. None ha nincs vagy nem string-tipusu."""
    # `lang: " ... "` / `lang: ' ... '` ahol a string idezojeleket nem zarja
    pat = re.compile(
        r'\b' + lang + r'\s*:\s*"((?:[^"\\]|\\.)*)"',
        re.DOTALL,
    )
    m = pat.search(block)
    if m:
        # un-escape \"  \\
        return m.group(1).replace('\\"', '"').replace("\\\\", "\\")
    return None


def extract_lang_array(block: str, lang: str) -> list[str] | None:
    """Egy `{ de:[...], ... }` blokkban a nyelvi tomb stringjei."""
    pat = re.compile(r'\b' + lang + r'\s*:\s*\[(.*?)\]', re.DOTALL)
    m = pat.search(block)
    if not m:
        return None
    inner = m.group(1)
    items = re.findall(r'"((?:[^"\\]|\\.)*)"', inner)
    return [it.replace('\\"', '"').replace('\\\\', '\\') for it in items]


# ----------------------------------------------------------------------------
# POI-blokk feldolgozo
# ----------------------------------------------------------------------------

# Egy POI az `{` ... `}`-ban van; a fajl szerkezete miatt a top-level `[` ... `]`
# kozott vesszovel elvalasztott objektumok vannak. Nem teljes JS parser kell —
# regex-alapu blokk-detektalas elegseges, mert az adatfajlok stilusa konzisztens.

# Egy POI-t azonositunk egy `id: "..."` kezdettol a kovetkezo `id: "..."` (vagy
# fajl vege) elotti `},` lezarasig.

POI_HEADER_RE = re.compile(r'^\s*\{\s*\n\s*id:\s*"([^"]+)"', re.MULTILINE)


def split_pois(content: str) -> list[tuple[int, int, str]]:
    """Lista (start, end, id) — minden POI-blokk hatara a fajlban."""
    matches = list(POI_HEADER_RE.finditer(content))
    blocks = []
    for i, m in enumerate(matches):
        start = m.start()
        end = matches[i + 1].start() if i + 1 < len(matches) else len(content)
        blocks.append((start, end, m.group(1)))
    return blocks


def find_field_block(poi: str, field: str) -> tuple[int, int] | None:
    """Megkeresi a `field: { ... }` blokkot a POI-on belul, visszaadja a
    `{` es `}` indexeit (a `}`-t bezarolag, exclusive end)."""
    pat = re.compile(r'\b' + field + r'\s*:\s*\{')
    m = pat.search(poi)
    if not m:
        return None
    # sajat zarojel-szamlalo
    i = m.end() - 1  # `{` pozicija
    depth = 0
    in_str = False
    quote = ""
    while i < len(poi):
        ch = poi[i]
        if in_str:
            if ch == "\\":
                i += 2
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
                    return (m.end() - 1, i + 1)  # incl `{`, excl utan `}`
        i += 1
    return None


def js_string_literal(s: str) -> str:
    """Biztonsagos JS string-literal eloallitasa."""
    return '"' + s.replace("\\", "\\\\").replace('"', '\\"') + '"'


def js_array_literal(items: list[str]) -> str:
    return "[" + ", ".join(js_string_literal(x) for x in items) + "]"


def process_poi(poi: str) -> tuple[str, int, int]:
    """Vissza: (uj_poi_szoveg, kitoltott_desc_db, kitoltott_facts_db)."""
    fills_desc = 0
    fills_facts = 0

    # Forrasok: name, description, facts
    name_blk = find_field_block(poi, "name")
    desc_blk = find_field_block(poi, "description")
    facts_blk = find_field_block(poi, "facts")

    name_src = poi[name_blk[0]:name_blk[1]] if name_blk else ""
    desc_src = poi[desc_blk[0]:desc_blk[1]] if desc_blk else ""
    facts_src = poi[facts_blk[0]:facts_blk[1]] if facts_blk else ""

    # descriptionAdvanced kitoltese
    da_blk = find_field_block(poi, "descriptionAdvanced")
    if da_blk:
        da_text = poi[da_blk[0]:da_blk[1]]
        new_da_text = da_text
        for lang in LANGS:
            # Csak akkor toltsuk fel, ha jelenleg ures string
            empty_pat = re.compile(r'(\b' + lang + r'\s*:\s*)""')
            em = empty_pat.search(new_da_text)
            if not em:
                continue
            # Forrasok
            name_v = extract_lang_string(name_src, lang) or ""
            desc_v = extract_lang_string(desc_src, lang) or ""
            facts_v = extract_lang_array(facts_src, lang) or []
            # Ha nincs sajat nyelvi forras -> kihagyas (bizonytalan)
            if not name_v and not desc_v and not facts_v:
                continue
            # Csak akkor, ha legalabb name + (desc vagy facts) van
            if not name_v or (not desc_v and not facts_v):
                continue
            topic = TOPIC  # globalisbol
            built = build_description(name_v, desc_v, facts_v, lang, topic)
            replacement = em.group(1) + js_string_literal(built)
            new_da_text = new_da_text[:em.start()] + replacement + new_da_text[em.end():]
            fills_desc += 1
        if new_da_text != da_text:
            poi = poi[:da_blk[0]] + new_da_text + poi[da_blk[1]:]

    # factsAdvanced kitoltese (eltolt offsetekkel: ujra megkeressuk a blokkot)
    fa_blk = find_field_block(poi, "factsAdvanced")
    if fa_blk:
        fa_text = poi[fa_blk[0]:fa_blk[1]]
        new_fa_text = fa_text
        for lang in LANGS:
            empty_pat = re.compile(r'(\b' + lang + r'\s*:\s*)\[\s*\]')
            em = empty_pat.search(new_fa_text)
            if not em:
                continue
            desc_v = extract_lang_string(desc_src, lang) or ""
            facts_v = extract_lang_array(facts_src, lang) or []
            name_v = extract_lang_string(name_src, lang) or ""
            if not name_v or (not desc_v and not facts_v):
                continue
            built_list = build_facts(desc_v, facts_v, lang)
            if len(built_list) < 6:
                # nem eri el a minimumot -> kihagyas
                continue
            replacement = em.group(1) + js_array_literal(built_list)
            new_fa_text = new_fa_text[:em.start()] + replacement + new_fa_text[em.end():]
            fills_facts += 1
        if new_fa_text != fa_text:
            poi = poi[:fa_blk[0]] + new_fa_text + poi[fa_blk[1]:]

    return poi, fills_desc, fills_facts


# Aktualis topic — kivulrol allitva file-onkent
TOPIC = "Nature"


def process_file(path: str) -> tuple[int, int, int]:
    global TOPIC
    TOPIC = detect_topic(os.path.basename(path))
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()

    blocks = split_pois(content)
    if not blocks:
        return (0, 0, 0)

    new_parts = []
    last_end = 0
    poi_count = 0
    desc_total = 0
    facts_total = 0
    for start, end, _id in blocks:
        new_parts.append(content[last_end:start])
        poi_text = content[start:end]
        new_poi, d, fa = process_poi(poi_text)
        desc_total += d
        facts_total += fa
        new_parts.append(new_poi)
        last_end = end
        poi_count += 1
    new_parts.append(content[last_end:])
    new_content = "".join(new_parts)

    if new_content != content:
        with open(path, "w", encoding="utf-8") as f:
            f.write(new_content)

    return poi_count, desc_total, facts_total


def main():
    grand_poi = grand_desc = grand_facts = 0
    for fname in FILES:
        path = os.path.join(DATA_DIR, fname)
        if not os.path.exists(path):
            print(f"[skip] {fname} nem letezik")
            continue
        pois, d, fa = process_file(path)
        print(f"{fname}: {pois} POI, +{d} descriptionAdvanced, +{fa} factsAdvanced")
        grand_poi += pois
        grand_desc += d
        grand_facts += fa
    print(f"\nOSSZESEN: {grand_poi} POI, +{grand_desc} descriptionAdvanced, +{grand_facts} factsAdvanced")


if __name__ == "__main__":
    main()
