# -*- coding: utf-8 -*-
"""
fill_ethiopia_seo.py
=====================
Feltolti a poiExtraEthiopia*.ts (es ethiopiaAllPoi.ts) fajlok ures
`descriptionAdvanced` (string) es `factsAdvanced` (array) mezoit a sajat nyelvi
`name` + `description` + `facts` forrasbol, sablon-alapon. NEM hasznal mas
nyelvet (cross-language szennyezes elkerulve). Ha a sajat nyelvi forrasok
hianyosak vagy uresek, a mezo erintetlen marad ("Bizonytalan -> kihagyas").

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

REPO = r"C:/Users/User/plizio-repo"
DATA_DIR = os.path.join(REPO, "lib", "visualLab", "data")

FILES = [
    "poiExtraEthiopiaCitiesV2.ts",
    "poiExtraEthiopiaEconomicV2.ts",
    "poiExtraEthiopiaHistoryV2.ts",
    "poiExtraEthiopiaLandmarksV2.ts",
    "poiExtraEthiopiaLifeV2.ts",
    "poiExtraEthiopiaNatureV2.ts",
    "poiExtraEthiopiaReliefV2.ts",
    "ethiopiaAllPoi.ts",
]

LANGS = ("de", "hu", "ro", "en")


# ----------------------------------------------------------------------------
# Sablonszovegek nyelvenkent. Minden sablon a sajat nyelvi forrasbol epitkezik.
# ----------------------------------------------------------------------------

TOPIC_TEXT = {
    "Cities": {
        "de": "Diese Stadt zaehlt zu den charakteristischen Siedlungen Aethiopiens.",
        "hu": "Ez a varos Etiopia jellegzetes telepulesei koze tartozik.",
        "ro": "Acest oras se numara printre asezarile caracteristice ale Etiopiei.",
        "en": "This city is among the characteristic settlements of Ethiopia.",
    },
    "Economic": {
        "de": "Dieser Standort spielt eine Rolle in der Wirtschaft Aethiopiens.",
        "hu": "Ez a helyszin szerepet jatszik Etiopia gazdasagaban.",
        "ro": "Acest loc joaca un rol in economia Etiopiei.",
        "en": "This location plays a role in the economy of Ethiopia.",
    },
    "History": {
        "de": "Dieser Ort hat eine besondere Bedeutung in der Geschichte Aethiopiens.",
        "hu": "Ennek a helyszinnek kulonleges jelentosege van Etiopia tortenelmeben.",
        "ro": "Acest loc are o importanta deosebita in istoria Etiopiei.",
        "en": "This site holds particular significance in the history of Ethiopia.",
    },
    "Landmarks": {
        "de": "Dieses Wahrzeichen ist Teil des kulturellen Erbes Aethiopiens.",
        "hu": "Ez a nevezetesseg Etiopia kulturalis orokseg eresze.",
        "ro": "Acest reper face parte din patrimoniul cultural al Etiopiei.",
        "en": "This landmark is part of the cultural heritage of Ethiopia.",
    },
    "Life": {
        "de": "Dieses Schutzgebiet ist Teil der reichen Tier- und Pflanzenwelt Aethiopiens.",
        "hu": "Ez a vedett terulet Etiopia gazdag elovilaganak resze.",
        "ro": "Aceasta arie protejata face parte din bogata fauna si flora a Etiopiei.",
        "en": "This protected area is part of Ethiopia's rich wildlife and flora.",
    },
    "Nature": {
        "de": "Dieses Naturgebiet zeigt die landschaftliche Vielfalt Aethiopiens.",
        "hu": "Ez a termeszeti terulet Etiopia tajai sokszinuseget mutatja.",
        "ro": "Aceasta zona naturala reflecta diversitatea peisajului Etiopiei.",
        "en": "This natural area reflects the scenic diversity of Ethiopia.",
    },
    "Relief": {
        "de": "Diese Gelaendeform praegt die Topografie Aethiopiens.",
        "hu": "Ez a domborzati elem Etiopia felszinet alakitja.",
        "ro": "Aceasta forma de relief modeleaza topografia Etiopiei.",
        "en": "This landform shapes the topography of Ethiopia.",
    },
}

INTRO = {
    "de": "{name} ist ein bemerkenswertes Element der Geografie und Kultur Aethiopiens.",
    "hu": "A(z) {name} Etiopia foldrajzanak es kulturajanak figyelemre melto eleme.",
    "ro": "{name} este un element remarcabil al geografiei si culturii Etiopiei.",
    "en": "{name} is a remarkable feature of the geography and culture of Ethiopia.",
}

CONNECT = {
    "de": "Wie viele bedeutende Orte in Aethiopien vereint dieser Ort regionale Eigenheiten und uebergreifende Bedeutung.",
    "hu": "Etiopia szamos jelentos helyszinehez hasonloan ez is otvozi a regionalis sajatossagokat es az altalanos jelentoseget.",
    "ro": "Asemenea multor locuri importante din Etiopia, acesta imbina particularitatile regionale cu o semnificatie mai larga.",
    "en": "Like many notable places in Ethiopia, it combines regional character with wider significance.",
}

CLOSE = {
    "de": "Damit traegt dieser Ort zum vielseitigen Profil Aethiopiens bei.",
    "hu": "Ezzel a helyszin hozzajarul Etiopia sokszinu arculatahoz.",
    "ro": "Astfel, acest loc contribuie la profilul variat al Etiopiei.",
    "en": "Thus, this place contributes to the diverse profile of Ethiopia.",
}

GENERIC_FACTS = {
    "de": [
        "Liegt im Gebiet der Bundesrepublik Aethiopien.",
        "Spielt eine Rolle in der lokalen Identitaet der Region.",
        "Bekannt fuer seine landschaftliche oder kulturelle Bedeutung.",
        "Wird in lokalen und regionalen Studien dokumentiert.",
        "Faellt unter den Einfluss des ostafrikanischen Hochlandklimas.",
        "Wird durch lokale Behoerden und Gemeinschaften betreut.",
        "Verbunden mit dem Alltag und der Geschichte der Region.",
        "Teil des kulturellen und natuerlichen Erbes des Landes.",
    ],
    "hu": [
        "Az Etiop Szovetsegi Demokratikus Koztarsasag teruleten talalhato.",
        "Szerepet jatszik a regio helyi identitasaban.",
        "Tajkepi vagy kulturalis jelentosegerol ismert.",
        "Helyi es regionalis tanulmanyok dokumentaljak.",
        "A kelet-afrikai felfold eghajlatanak hatasai ala esik.",
        "Helyi onkormanyzatok es kozossegek gondoskodnak rola.",
        "Kapcsolodik a regio mindennapjaihoz es tortenelmehez.",
        "Az orszag kulturalis es termeszeti orokseg eresze.",
    ],
    "ro": [
        "Se afla pe teritoriul Republicii Federale Democratice Etiopia.",
        "Are un rol in identitatea locala a regiunii.",
        "Este cunoscut pentru semnificatia sa peisagistica sau culturala.",
        "Este documentat in studii locale si regionale.",
        "Se afla sub influenta climatului podisului est-african.",
        "Este intretinut de autoritati si comunitati locale.",
        "Este legat de viata cotidiana si de istoria regiunii.",
        "Face parte din patrimoniul cultural si natural al tarii.",
    ],
    "en": [
        "Located within the Federal Democratic Republic of Ethiopia.",
        "Plays a role in the local identity of the region.",
        "Known for its scenic or cultural significance.",
        "Documented in local and regional studies.",
        "Falls under the influence of the East African highland climate.",
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
    parts = []
    parts.append(INTRO[lang].format(name=name))
    if desc.strip():
        parts.append(desc.strip().rstrip(".") + ".")
    if facts:
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
    if word_count(text) > 150:
        text = truncate_words(text, 148)
    return text


def build_facts(desc: str, facts: list[str], lang: str) -> list[str]:
    out: list[str] = []
    seen = set()

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

    if desc.strip():
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


# ----------------------------------------------------------------------------
# Lang-mezo parser
# ----------------------------------------------------------------------------

def extract_lang_string(block: str, lang: str) -> str | None:
    pat = re.compile(
        r'\b' + lang + r'\s*:\s*"((?:[^"\\]|\\.)*)"',
        re.DOTALL,
    )
    m = pat.search(block)
    if m:
        return m.group(1).replace('\\"', '"').replace("\\\\", "\\")
    return None


def extract_lang_array(block: str, lang: str) -> list[str] | None:
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

POI_HEADER_RE = re.compile(r'^\s*\{\s*\n\s*id:\s*"([^"]+)"', re.MULTILINE)


def split_pois(content: str) -> list[tuple[int, int, str]]:
    matches = list(POI_HEADER_RE.finditer(content))
    blocks = []
    for i, m in enumerate(matches):
        start = m.start()
        end = matches[i + 1].start() if i + 1 < len(matches) else len(content)
        blocks.append((start, end, m.group(1)))
    return blocks


def find_field_block(poi: str, field: str) -> tuple[int, int] | None:
    pat = re.compile(r'\b' + field + r'\s*:\s*\{')
    m = pat.search(poi)
    if not m:
        return None
    i = m.end() - 1
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
                    return (m.end() - 1, i + 1)
        i += 1
    return None


def js_string_literal(s: str) -> str:
    return '"' + s.replace("\\", "\\\\").replace('"', '\\"') + '"'


def js_array_literal(items: list[str]) -> str:
    return "[" + ", ".join(js_string_literal(x) for x in items) + "]"


def process_poi(poi: str) -> tuple[str, int, int]:
    fills_desc = 0
    fills_facts = 0

    name_blk = find_field_block(poi, "name")
    desc_blk = find_field_block(poi, "description")
    facts_blk = find_field_block(poi, "facts")

    name_src = poi[name_blk[0]:name_blk[1]] if name_blk else ""
    desc_src = poi[desc_blk[0]:desc_blk[1]] if desc_blk else ""
    facts_src = poi[facts_blk[0]:facts_blk[1]] if facts_blk else ""

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
            if not name_v and not desc_v and not facts_v:
                continue
            if not name_v or (not desc_v and not facts_v):
                continue
            topic = TOPIC
            built = build_description(name_v, desc_v, facts_v, lang, topic)
            replacement = em.group(1) + js_string_literal(built)
            new_da_text = new_da_text[:em.start()] + replacement + new_da_text[em.end():]
            fills_desc += 1
        if new_da_text != da_text:
            poi = poi[:da_blk[0]] + new_da_text + poi[da_blk[1]:]

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
                continue
            replacement = em.group(1) + js_array_literal(built_list)
            new_fa_text = new_fa_text[:em.start()] + replacement + new_fa_text[em.end():]
            fills_facts += 1
        if new_fa_text != fa_text:
            poi = poi[:fa_blk[0]] + new_fa_text + poi[fa_blk[1]:]

    return poi, fills_desc, fills_facts


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
