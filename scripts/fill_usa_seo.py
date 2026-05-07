# -*- coding: utf-8 -*-
"""
fill_usa_seo.py
================
Feltolti a poiExtraUsa*V2.ts fajlok ures `descriptionAdvanced` (string) es
`factsAdvanced` (array) mezoit a sajat nyelvi `name` + `description` + `facts`
forrasbol, sablon-alapon. NEM hasznal mas nyelvet (cross-language szennyezes
elkerulve). Ha a sajat nyelvi forrasok hianyosak, a mezo erintetlen marad.

Mintat kovet: scripts/fill_morocco_seo.py — USA-specifikus topic+frazis
szovegekkel (kontinentalis USA, Sziklas-hegyseg, Appalache, Mississippi,
Nagy-tavak, Texas/Florida/California, alapito atyak, Manifest Destiny,
ipari hatalom, IT/Silicon Valley, mezogazdasag).

Csak a regex-szinten egyertelmuen ures mezoket toltjuk fel:
- descriptionAdvanced: `de: ""`, `hu: ""`, `ro: ""`, `en: ""`
- factsAdvanced:       `de: []`, `hu: []`, `ro: []`, `en: []`

Cel:
- descriptionAdvanced: ~80-150 szavas termeszetes nyelvu prozaja
- factsAdvanced: 6-8 elem
"""

from __future__ import annotations
import re
import sys
from pathlib import Path

REPO = r"C:/Users/User/plizio-repo"
DATA_DIR = Path(REPO) / "lib" / "visualLab" / "data"

FILES = [
    "poiExtraUsaCitiesV2.ts",
    "poiExtraUsaEconomicV2.ts",
    "poiExtraUsaHistoryV2.ts",
    "poiExtraUsaLandmarksV2.ts",
    "poiExtraUsaLifeV2.ts",
    "poiExtraUsaNatureV2.ts",
    "poiExtraUsaReliefV2.ts",
]

LANGS = ("de", "hu", "ro", "en")


# ----------------------------------------------------------------------------
# Sablonszovegek nyelvenkent (USA)
# ----------------------------------------------------------------------------

TOPIC_TEXT = {
    "Cities": {
        "de": "Diese Stadt zaehlt zu den charakteristischen Siedlungen der Vereinigten Staaten und spiegelt die urbane Vielfalt zwischen Ost- und Westkueste wider.",
        "hu": "Ez a varos az Egyesult Allamok jellegzetes telepulesei koze tartozik, amely tukrozi a keleti es nyugati partvidek kozotti varosi sokszinuseget.",
        "ro": "Acest oras se numara printre asezarile caracteristice ale Statelor Unite, reflectand diversitatea urbana dintre coasta de est si cea de vest.",
        "en": "This city is among the characteristic settlements of the United States, reflecting the urban diversity between the East and West coasts.",
    },
    "Economic": {
        "de": "Dieser Standort spielt eine wichtige Rolle in der Wirtschaft der USA, einer der groessten Volkswirtschaften der Welt mit starkem Technologie-, Industrie- und Agrarsektor.",
        "hu": "Ez a helyszin fontos szerepet jatszik az USA gazdasagaban, amely a vilag egyik legnagyobb gazdasaga eros technologiai, ipari es mezogazdasagi szektorral.",
        "ro": "Acest loc joaca un rol important in economia SUA, una dintre cele mai mari economii din lume, cu sectoare puternice de tehnologie, industrie si agricultura.",
        "en": "This location plays an important role in the economy of the USA, one of the world's largest economies with strong technology, industrial and agricultural sectors.",
    },
    "History": {
        "de": "Dieser Ort hat eine besondere Bedeutung in der Geschichte der USA, von der Kolonialzeit ueber die Gruendervaeter und Manifest Destiny bis zum Aufstieg als Industriemacht.",
        "hu": "Ennek a helyszinnek kulonleges jelentosege van az USA tortenelmeben, a gyarmati idoszaktol az alapito atyakon es a Manifest Destiny-n at egeszen az ipari hatalomma valasig.",
        "ro": "Acest loc are o importanta deosebita in istoria SUA, de la perioada coloniala, prin parintii fondatori si Manifest Destiny, pana la ascensiunea ca putere industriala.",
        "en": "This site holds particular significance in U.S. history, from the colonial era through the Founding Fathers and Manifest Destiny to the rise as an industrial power.",
    },
    "Landmarks": {
        "de": "Dieses Wahrzeichen ist Teil des kulturellen Erbes der Vereinigten Staaten und steht symbolisch fuer die nationale Identitaet von Kueste zu Kueste.",
        "hu": "Ez a nevezetesseg az Egyesult Allamok kulturalis oroksegenek resze, es szimbolikusan kepviseli a nemzeti identitast az egyik parttol a masikig.",
        "ro": "Acest reper face parte din patrimoniul cultural al Statelor Unite si reprezinta simbolic identitatea nationala de la o coasta la cealalta.",
        "en": "This landmark is part of the cultural heritage of the United States and stands as a symbol of national identity from coast to coast.",
    },
    "Life": {
        "de": "Dieses Schutzgebiet ist Teil der reichen Tier- und Pflanzenwelt der USA, von den Rocky Mountains und Appalachen ueber die Great Lakes bis zu den Wuesten und Subtropen Floridas.",
        "hu": "Ez a vedett terulet az USA gazdag elovilaganak resze, a Sziklas-hegysegtol es az Appalache-hegysegtol a Nagy-tavakon at egeszen Florida sivatagi es szubtropusi videkeig.",
        "ro": "Aceasta arie protejata face parte din bogata fauna si flora a SUA, de la Muntii Stancosi si Apalasi, prin Marile Lacuri, pana la deserturile si zonele subtropicale din Florida.",
        "en": "This protected area is part of the rich wildlife and flora of the USA, from the Rocky Mountains and Appalachians through the Great Lakes to the deserts and subtropics of Florida.",
    },
    "Nature": {
        "de": "Dieses Naturgebiet zeigt die landschaftliche Vielfalt der USA, vom kontinentalen Kernland mit Mississippi und Great Plains bis zu Kuesten, Bergen und Wuesten.",
        "hu": "Ez a termeszeti terulet az USA tajainak sokszinuseget mutatja, a kontinentalis kozepso reszektol a Mississippivel es a Great Plains-szel a partvidekig, hegyekig es sivatagokig.",
        "ro": "Aceasta zona naturala reflecta diversitatea peisajului SUA, de la inima continentala cu Mississippi si Marile Campii pana la coaste, munti si deserturi.",
        "en": "This natural area reflects the scenic diversity of the USA, from the continental heartland with the Mississippi and Great Plains to coasts, mountains and deserts.",
    },
    "Relief": {
        "de": "Diese Gelaendeform praegt die Topografie der USA — zwischen Rocky Mountains, Appalachen, Mississippi-Becken und den weiten Great Plains.",
        "hu": "Ez a domborzati elem az USA felszinet alakitja — a Sziklas-hegyseg, az Appalache-hegyseg, a Mississippi-medence es a kiterjedt Great Plains kozott.",
        "ro": "Aceasta forma de relief modeleaza topografia SUA — intre Muntii Stancosi, Muntii Apalasi, bazinul Mississippi si vastele Mari Campii.",
        "en": "This landform shapes the topography of the USA — between the Rocky Mountains, the Appalachians, the Mississippi basin and the vast Great Plains.",
    },
}

INTRO = {
    "de": "{name} ist ein bemerkenswertes Element der amerikanischen Geografie und Kultur.",
    "hu": "A(z) {name} az amerikai foldrajz es kultura figyelemre melto eleme.",
    "ro": "{name} este un element remarcabil al geografiei si culturii americane.",
    "en": "{name} is a remarkable feature of the geography and culture of the United States.",
}

CONNECT = {
    "de": "Wie viele bedeutende Orte in den USA verbindet dieser Ort regionale Eigenheiten mit nationaler Bedeutung — vom industriellen Erbe ueber die Landwirtschaft des Mittleren Westens bis zu den IT-Zentren rund um Silicon Valley.",
    "hu": "Az USA szamos jelentos helyszinehez hasonloan ez is otvozi a regionalis sajatossagokat es az orszagos jelentoseget — az ipari orokseggel, a kozepnyugat mezogazdasagaval es a Silicon Valley koruli IT-kozpontokkal egyutt.",
    "ro": "Asemenea multor locuri importante din SUA, acesta imbina particularitatile regionale cu semnificatia nationala — de la mostenirea industriala si agricultura Vestului Mijlociu pana la centrele IT din jurul Silicon Valley.",
    "en": "Like many notable places in the USA, it combines regional character with national significance — from industrial heritage and Midwestern agriculture to the IT hubs around Silicon Valley.",
}

CLOSE = {
    "de": "Damit traegt dieser Ort zum vielseitigen Profil der Vereinigten Staaten bei.",
    "hu": "Ezzel a helyszin hozzajarul az Egyesult Allamok sokszinu arculatahoz.",
    "ro": "Astfel, acest loc contribuie la profilul variat al Statelor Unite.",
    "en": "Thus, this place contributes to the diverse profile of the United States.",
}

GENERIC_FACTS = {
    "de": [
        "Liegt im Gebiet der Vereinigten Staaten von Amerika.",
        "Spielt eine Rolle in der regionalen Identitaet zwischen Ost- und Westkueste.",
        "Bekannt fuer landschaftliche, wirtschaftliche oder kulturelle Bedeutung.",
        "Wird in nationalen und regionalen Studien dokumentiert.",
        "Wird durch das vielfaeltige Klima zwischen Atlantik, Pazifik und kontinentalem Inland gepraegt.",
        "Steht im Zusammenhang mit der industriellen und agrarischen Entwicklung der USA.",
        "Verbunden mit der Geschichte der Gruendervaeter und der Westexpansion (Manifest Destiny).",
        "Teil des reichen Natur- und Kulturerbes der Vereinigten Staaten.",
    ],
    "hu": [
        "Az Amerikai Egyesult Allamok teruleten talalhato.",
        "Szerepet jatszik a keleti es nyugati partvidek kozotti regionalis identitasban.",
        "Tajkepi, gazdasagi vagy kulturalis jelentosegerol ismert.",
        "Orszagos es regionalis tanulmanyok dokumentaljak.",
        "Az Atlanti-ocean, a Csendes-ocean es a kontinentalis belso teruletek kozott valtakozo eghajlat alakitja.",
        "Kapcsolodik az USA ipari es mezogazdasagi fejlodesehez.",
        "Osszekapcsolodik az alapito atyak es a nyugati terjeszkedes (Manifest Destiny) tortenetevel.",
        "Az Egyesult Allamok gazdag termeszeti es kulturalis oroksegenek resze.",
    ],
    "ro": [
        "Se afla pe teritoriul Statelor Unite ale Americii.",
        "Are un rol in identitatea regionala intre coasta de est si cea de vest.",
        "Este cunoscut pentru semnificatia sa peisagistica, economica sau culturala.",
        "Este documentat in studii nationale si regionale.",
        "Se afla sub influenta climatului divers dintre Atlantic, Pacific si interiorul continental.",
        "Este legat de dezvoltarea industriala si agricola a SUA.",
        "Conectat cu istoria parintilor fondatori si cu expansiunea spre vest (Manifest Destiny).",
        "Face parte din bogatul patrimoniu natural si cultural al Statelor Unite.",
    ],
    "en": [
        "Located within the United States of America.",
        "Plays a role in the regional identity between the East and West coasts.",
        "Known for its scenic, economic or cultural significance.",
        "Documented in national and regional studies.",
        "Shaped by the diverse climate between the Atlantic, the Pacific and the continental interior.",
        "Tied to the industrial and agricultural development of the USA.",
        "Connected to the history of the Founding Fathers and the westward expansion (Manifest Destiny).",
        "Part of the rich natural and cultural heritage of the United States.",
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


def insert_lang_entry(field_block: str, lang: str, value_repr: str) -> str:
    last_brace = field_block.rfind("}")
    if last_brace < 0:
        return field_block
    indent_match = re.search(r'\n([ \t]+)(?:de|hu|ro|en)\s*:', field_block)
    indent = indent_match.group(1) if indent_match else "      "
    before = field_block[:last_brace].rstrip()
    if before.endswith(","):
        before_clean = before
    elif before.endswith("{"):
        before_clean = before
    else:
        before_clean = before + ","
    new_entry = f"\n{indent}{lang}: {value_repr}"
    after = field_block[last_brace:]
    close_indent = indent[:-2] if len(indent) >= 2 else ""
    return before_clean + new_entry + "\n" + close_indent + after.lstrip("\n").lstrip(" ").lstrip("\t")


def process_poi(poi: str, topic: str) -> tuple[str, int, int]:
    fills_desc = 0
    fills_facts = 0

    name_blk = find_field_block(poi, "name")
    desc_blk = find_field_block(poi, "description")
    facts_blk = find_field_block(poi, "facts")

    name_src = poi[name_blk[0]:name_blk[1]] if name_blk else ""
    desc_src = poi[desc_blk[0]:desc_blk[1]] if desc_blk else ""
    facts_src = poi[facts_blk[0]:facts_blk[1]] if facts_blk else ""

    if facts_blk and not find_field_block(poi, "descriptionAdvanced"):
        line_start = poi.rfind("\n", 0, facts_blk[0]) + 1
        facts_kw = poi.rfind("facts", line_start, facts_blk[0])
        outer_indent = poi[line_start:facts_kw] if facts_kw > 0 else "    "
        skeleton = (
            f',\n{outer_indent}descriptionAdvanced: {{\n'
            f'{outer_indent}  de: "",\n'
            f'{outer_indent}  hu: "",\n'
            f'{outer_indent}  ro: "",\n'
            f'{outer_indent}  en: "",\n'
            f'{outer_indent}}}'
        )
        poi = poi[:facts_blk[1]] + skeleton + poi[facts_blk[1]:]

    if find_field_block(poi, "descriptionAdvanced") and not find_field_block(poi, "factsAdvanced"):
        da_after = find_field_block(poi, "descriptionAdvanced")
        line_start = poi.rfind("\n", 0, da_after[0]) + 1
        da_kw = poi.rfind("descriptionAdvanced", line_start, da_after[0])
        outer_indent = poi[line_start:da_kw] if da_kw > 0 else "    "
        skeleton = (
            f',\n{outer_indent}factsAdvanced: {{\n'
            f'{outer_indent}  de: [],\n'
            f'{outer_indent}  hu: [],\n'
            f'{outer_indent}  ro: [],\n'
            f'{outer_indent}  en: [],\n'
            f'{outer_indent}}}'
        )
        poi = poi[:da_after[1]] + skeleton + poi[da_after[1]:]

    # descriptionAdvanced
    da_blk = find_field_block(poi, "descriptionAdvanced")
    if da_blk:
        da_text = poi[da_blk[0]:da_blk[1]]
        new_da_text = da_text
        for lang in LANGS:
            empty_pat = re.compile(r'(\b' + lang + r'\s*:\s*)""')
            em = empty_pat.search(new_da_text)
            curr = extract_lang_string(new_da_text, lang)
            if curr is not None and curr.strip() != "":
                continue
            name_v = extract_lang_string(name_src, lang) or ""
            desc_v = extract_lang_string(desc_src, lang) or ""
            facts_v = extract_lang_array(facts_src, lang) or []
            if not name_v or (not desc_v and not facts_v):
                continue
            built = build_description(name_v, desc_v, facts_v, lang, topic)
            if em:
                replacement = em.group(1) + js_string_literal(built)
                new_da_text = new_da_text[:em.start()] + replacement + new_da_text[em.end():]
            else:
                new_da_text = insert_lang_entry(new_da_text, lang, js_string_literal(built))
            fills_desc += 1
        if new_da_text != da_text:
            poi = poi[:da_blk[0]] + new_da_text + poi[da_blk[1]:]

    # factsAdvanced
    fa_blk = find_field_block(poi, "factsAdvanced")
    if fa_blk:
        fa_text = poi[fa_blk[0]:fa_blk[1]]
        new_fa_text = fa_text
        for lang in LANGS:
            empty_pat = re.compile(r'(\b' + lang + r'\s*:\s*)\[\s*\]')
            em = empty_pat.search(new_fa_text)
            curr = extract_lang_array(new_fa_text, lang)
            if curr is not None and len([x for x in curr if x and x.strip()]) > 0:
                continue
            desc_v = extract_lang_string(desc_src, lang) or ""
            facts_v = extract_lang_array(facts_src, lang) or []
            name_v = extract_lang_string(name_src, lang) or ""
            if not name_v or (not desc_v and not facts_v):
                continue
            built_list = build_facts(desc_v, facts_v, lang)
            if len(built_list) < 6:
                continue
            if em:
                replacement = em.group(1) + js_array_literal(built_list)
                new_fa_text = new_fa_text[:em.start()] + replacement + new_fa_text[em.end():]
            else:
                new_fa_text = insert_lang_entry(new_fa_text, lang, js_array_literal(built_list))
            fills_facts += 1
        if new_fa_text != fa_text:
            poi = poi[:fa_blk[0]] + new_fa_text + poi[fa_blk[1]:]

    return poi, fills_desc, fills_facts


def count_empty_fields(content: str) -> tuple[int, int]:
    """Return (empty_desc_string, empty_facts_array) totals."""
    empty_desc = len(re.findall(r'(?:de|hu|ro|en)\s*:\s*""', content))
    empty_facts = len(re.findall(r'(?:de|hu|ro|en)\s*:\s*\[\s*\]', content))
    return empty_desc, empty_facts


def process_file(path: Path) -> tuple[int, int, int, int, int]:
    topic = detect_topic(path.name)
    content = path.read_text(encoding="utf-8")
    pre_ed, pre_ef = count_empty_fields(content)
    blocks = split_pois(content)
    if not blocks:
        return (0, 0, 0, pre_ed, pre_ef)
    new_parts = []
    last_end = 0
    poi_count = 0
    desc_total = 0
    facts_total = 0
    for start, end, _id in blocks:
        new_parts.append(content[last_end:start])
        poi_text = content[start:end]
        new_poi, d, fa = process_poi(poi_text, topic)
        desc_total += d
        facts_total += fa
        new_parts.append(new_poi)
        last_end = end
        poi_count += 1
    new_parts.append(content[last_end:])
    new_content = "".join(new_parts)
    if new_content != content:
        path.write_text(new_content, encoding="utf-8")
    return poi_count, desc_total, facts_total, pre_ed, pre_ef


def main():
    grand_poi = grand_desc = grand_facts = 0
    grand_pre_ed = grand_pre_ef = 0
    print("=== fill_usa_seo.py ===")
    for fname in FILES:
        path = DATA_DIR / fname
        if not path.exists():
            print(f"[skip] {fname} nem letezik")
            continue
        pois, d, fa, pre_ed, pre_ef = process_file(path)
        post = path.read_text(encoding="utf-8")
        post_ed, post_ef = count_empty_fields(post)
        print(
            f"{fname}: POI={pois} | empty BEFORE desc=\"\":{pre_ed} facts=[]:{pre_ef}"
            f" | filled +desc:{d} +facts:{fa}"
            f" | empty AFTER desc=\"\":{post_ed} facts=[]:{post_ef}"
        )
        grand_poi += pois
        grand_desc += d
        grand_facts += fa
        grand_pre_ed += pre_ed
        grand_pre_ef += pre_ef
    print("---")
    print(
        f"OSSZESEN: {grand_poi} POI | empty BEFORE: desc=\"\":{grand_pre_ed} facts=[]:{grand_pre_ef}"
        f" | filled: +desc:{grand_desc} +facts:{grand_facts}"
    )


if __name__ == "__main__":
    main()
