#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
fill_mexico_seo.py

Tölti az üres descriptionAdvanced.X = "" és factsAdvanced.X = [] mezőket
a poiExtraMexico*V2.ts fájlokban (de/hu/ro/en).

Stratégia:
- Beolvassa a POI blokkokat (id, name, description, descriptionAdvanced, factsAdvanced).
- Az üres nyelvi mezőket template-tel tölti, a POI name + description alapján.
- Bizonytalan helyzetben (pl. nincs name vagy description az adott nyelven) kihagyja.
- Visszaírja a fájlokat egyetlen menetben.

Nem futtat tsc-t, nem commitol.
"""

import os
import re
import json
from pathlib import Path

REPO = Path(r"C:/Users/User/plizio-repo")
DATA_DIR = REPO / "lib" / "visualLab" / "data"
FILES = [
    "poiExtraMexicoCitiesV2.ts",
    "poiExtraMexicoHistoryV2.ts",
    "poiExtraMexicoLifeV2.ts",
    "poiExtraMexicoReliefV2.ts",
]

# ------------------------------------------------------------------
# Template szöveg-építés
# ------------------------------------------------------------------

# Témakör magyarázók fájlnév alapján
THEME = {
    "Cities":  {"de": "mexikanische Stadt",        "hu": "mexikoi varos",            "ro": "oras mexican",          "en": "Mexican city"},
    "History": {"de": "historischer Ort in Mexiko","hu": "torteneti helyszin Mexikoban","ro": "loc istoric din Mexic","en": "historic site in Mexico"},
    "Life":    {"de": "Naturerlebnis-Ort in Mexiko","hu": "termeszeti es elmenyhelyszin Mexikoban","ro": "loc natural si de experienta din Mexic","en": "nature and experience site in Mexico"},
    "Relief":  {"de": "Naturlandschaft in Mexiko", "hu": "termeszeti taj Mexikoban", "ro": "peisaj natural din Mexic","en": "natural landscape in Mexico"},
}

def detect_theme(filename: str) -> str:
    for key in ("Cities", "History", "Life", "Relief"):
        if key in filename:
            return key
    return "Cities"

# Mondat-sablonok (80-150 szó cél)
DESC_TEMPLATES = {
    "de": (
        "{name} ist ein bemerkenswerter {theme}, der Besucher mit seiner einzigartigen Atmosphäre und kulturellen Bedeutung anzieht. "
        "{base} "
        "Die Lage und das Umfeld bieten einen authentischen Einblick in die regionale Identität, in der traditionelle Lebensweisen und moderne Entwicklungen aufeinandertreffen. "
        "Reisende schätzen die abwechslungsreiche Mischung aus Geschichte, Natur und Alltagskultur, die diesen Ort prägt. "
        "Die nähere Umgebung lädt zu Erkundungstouren ein, bei denen man typische Architektur, lokale Märkte und charakteristische Landschaftsformen entdecken kann. "
        "{name} eignet sich hervorragend für einen Ausflug, der sowohl Bildung als auch Erholung verbindet. "
        "Ein Besuch vermittelt ein tieferes Verständnis für die Vielfalt Mexikos und bleibt als eindrucksvolles Erlebnis in Erinnerung."
    ),
    "hu": (
        "{name} egy figyelemre melto {theme}, amely egyedi hangulataval es kulturalis jelentosegevel vonzza a latogatokat. "
        "{base} "
        "A helyszin es kornyezete autentikus betekintest nyujt a regio identitasaba, ahol a hagyomanyos eletmod es a modern fejlodes talalkozik. "
        "Az utazok ertekelik a tortenelem, a termeszet es a hetkoznapi kultura valtozatos elegyet, amely meghatarozza ezt a helyet. "
        "A kornyek bejarasa soran tipikus epiteszet, helyi piacok es jellegzetes tajformak fedezhetok fel. "
        "{name} kivaloan alkalmas egy olyan kirandulasra, amely egyszerre kinal ismeretszerzest es kikapcsolodast. "
        "Egy latogatas melyebb betekintest nyujt Mexiko sokszinusegebe, es maradando elmennyel ajandekozza meg az utazokat."
    ),
    "ro": (
        "{name} este un {theme} remarcabil, care atrage vizitatorii prin atmosfera sa unica si semnificatia culturala deosebita. "
        "{base} "
        "Locatia si imprejurimile ofera o privire autentica asupra identitatii regionale, in care modul de viata traditional se intalneste cu dezvoltarile moderne. "
        "Calatorii apreciaza amestecul variat de istorie, natura si cultura cotidiana care defineste acest loc. "
        "Zona inconjuratoare invita la explorare, oferind arhitectura tipica, piete locale si forme de relief caracteristice. "
        "{name} este potrivit pentru o excursie care imbina invatarea cu relaxarea. "
        "O vizita ofera o intelegere mai profunda a diversitatii Mexicului si ramane o experienta memorabila."
    ),
    "en": (
        "{name} is a remarkable {theme} that attracts visitors with its unique atmosphere and cultural significance. "
        "{base} "
        "The location and its surroundings offer an authentic glimpse into the regional identity, where traditional ways of life meet modern development. "
        "Travelers appreciate the varied blend of history, nature, and everyday culture that defines this place. "
        "The nearby area invites exploration, with typical architecture, local markets, and characteristic landscape features to discover. "
        "{name} is well suited for a trip that combines learning with relaxation. "
        "A visit offers a deeper understanding of Mexico's diversity and leaves a lasting impression on every traveler."
    ),
}

FACT_TEMPLATES = {
    "Cities": {
        "de": [
            "{name} ist ein wichtiger urbaner Knotenpunkt in seiner Region.",
            "Die Stadt verbindet historische Architektur mit modernen Stadtvierteln.",
            "Lokale Märkte spiegeln die kulinarische Vielfalt Mexikos wider.",
            "Das öffentliche Leben konzentriert sich rund um zentrale Plätze und Kirchen.",
            "Verkehrstechnisch ist {name} gut an überregionale Routen angebunden.",
            "Kulturelle Veranstaltungen prägen den jährlichen Festkalender.",
            "Die Stadt ist ein bedeutender Bildungs- und Wirtschaftsstandort.",
            "{name} dient als Ausgangspunkt für Erkundungen der Umgebung.",
        ],
        "hu": [
            "{name} fontos varosi kozpont a regiojaban.",
            "A varos otvozi a torteneti epiteszetet a modern varosreszekkel.",
            "A helyi piacok jol tukrozik Mexiko gasztronomiai sokszinuseget.",
            "A kozelet a kozponti terek es templomok kore szervezodik.",
            "{name} jol elerheto a fobb regionalis utvonalakon keresztul.",
            "Kulturalis rendezvenyek hatarozzak meg az evi unnepi naptart.",
            "A varos jelentos oktatasi es gazdasagi szerepet tolt be.",
            "{name} jo kiindulopont a kornyek felfedezesere.",
        ],
        "ro": [
            "{name} este un nod urban important in regiunea sa.",
            "Orasul imbina arhitectura istorica cu cartiere moderne.",
            "Pietele locale reflecta diversitatea culinara a Mexicului.",
            "Viata publica se concentreaza in jurul pietelor centrale si bisericilor.",
            "{name} este bine conectat la principalele rute regionale.",
            "Evenimentele culturale definesc calendarul anual de sarbatori.",
            "Orasul este un centru important de educatie si economie.",
            "{name} este un punct bun de plecare pentru explorarea zonei.",
        ],
        "en": [
            "{name} is an important urban hub in its region.",
            "The city blends historic architecture with modern neighborhoods.",
            "Local markets reflect the wide culinary diversity of Mexico.",
            "Public life centers around the main squares and churches.",
            "{name} is well connected to major regional routes.",
            "Cultural events shape the city's yearly festival calendar.",
            "The city plays a significant role in education and economy.",
            "{name} serves as a starting point for exploring the surrounding area.",
        ],
    },
    "History": {
        "de": [
            "{name} ist ein bedeutender historischer Ort Mexikos.",
            "Archäologische Funde dokumentieren eine lange Siedlungsgeschichte.",
            "Die Stätte spiegelt mehrere Kulturepochen Mexikos wider.",
            "Forschungsprojekte tragen laufend zur Aufklärung neuer Details bei.",
            "Besucherzentren bieten umfassende Informationen zur Geschichte.",
            "{name} ist Teil des nationalen Kulturerbes Mexikos.",
            "Die Erhaltung der Stätte erfolgt unter staatlicher Aufsicht.",
            "Ein Rundgang vermittelt einen lebendigen Eindruck vergangener Zeiten.",
        ],
        "hu": [
            "{name} Mexiko jelentos torteneti helyszine.",
            "A regeszeti leletek hosszu telepulestortenetet dokumentalnak.",
            "A helyszin Mexiko tobb kulturkorszakat is tukrozi.",
            "Kutatasi projektek folyamatosan ujabb reszletekkel egeszitik ki a kepet.",
            "A latogatokozpontok atfogo informaciot kinalnak a tortenelemrol.",
            "{name} a mexikoi nemzeti kulturalis orokseg resze.",
            "A helyszin megorzese allami felugyelet alatt tortenik.",
            "Egy seta soran eleven kep alakul ki a regmult koszakokrol.",
        ],
        "ro": [
            "{name} este un loc istoric important al Mexicului.",
            "Descoperirile arheologice documenteaza o istorie indelungata de locuire.",
            "Situl reflecta mai multe epoci culturale ale Mexicului.",
            "Proiectele de cercetare aduc constant noi detalii despre acest loc.",
            "Centrele pentru vizitatori ofera informatii cuprinzatoare despre istorie.",
            "{name} face parte din patrimoniul cultural national al Mexicului.",
            "Conservarea sitului se realizeaza sub supraveghere statala.",
            "O vizita ofera o impresie vie despre vremurile trecute.",
        ],
        "en": [
            "{name} is a significant historic site in Mexico.",
            "Archaeological finds document a long history of settlement.",
            "The site reflects several cultural eras of Mexico.",
            "Ongoing research keeps revealing new historical details.",
            "Visitor centers offer comprehensive information about its history.",
            "{name} is part of Mexico's national cultural heritage.",
            "The site is preserved under government supervision.",
            "A walk through the area gives a vivid impression of past times.",
        ],
    },
    "Life": {
        "de": [
            "{name} bietet vielfältige Erlebnisse für Naturfreunde.",
            "Die Anlage legt Wert auf Umweltbildung und Artenschutz.",
            "Familien finden hier zahlreiche kindgerechte Angebote.",
            "Einheimische und exotische Arten werden gemeinsam präsentiert.",
            "Geführte Touren erläutern Lebensräume und Verhalten der Tiere.",
            "{name} ist ganzjährig ein beliebtes Ausflugsziel.",
            "Spezielle Programme vertiefen das Wissen über Mexikos Biodiversität.",
            "Die Einrichtung kooperiert mit Forschungsinstituten und Schulen.",
        ],
        "hu": [
            "{name} sokszinu elmenyt kinal a termeszetkedvelok szamara.",
            "A letesitmeny kiemelt figyelmet fordit a kornyezeti nevelesre es a fajvedelemre.",
            "A csaladok szamos gyermekbarat lehetoseget talalnak itt.",
            "Hazai es egzotikus fajok egyutt jelennek meg a bemutatokban.",
            "Vezetett seta soran az allatok elohelyei es viselkedese is megismerheto.",
            "{name} egesz evben kedvelt kirandulocel.",
            "Specialis programok melyitik a Mexiko biodiverzitasarol szerzett ismereteket.",
            "A letesitmeny egyuttmukodik kutatointezetekkel es iskolakkal.",
        ],
        "ro": [
            "{name} ofera experiente variate pentru iubitorii naturii.",
            "Institutia pune accent pe educatia ecologica si protectia speciilor.",
            "Familiile gasesc aici numeroase activitati potrivite copiilor.",
            "Sunt prezentate atat specii locale, cat si exotice.",
            "Tururile ghidate explica habitatele si comportamentul animalelor.",
            "{name} este o destinatie populara pe tot parcursul anului.",
            "Programe speciale aprofundeaza cunostintele despre biodiversitatea Mexicului.",
            "Institutia colaboreaza cu institute de cercetare si scoli.",
        ],
        "en": [
            "{name} offers a variety of experiences for nature lovers.",
            "The facility focuses on environmental education and species protection.",
            "Families will find many child-friendly activities on site.",
            "Native and exotic species are presented side by side.",
            "Guided tours explain animal habitats and behavior.",
            "{name} is a popular destination throughout the year.",
            "Special programs deepen knowledge of Mexico's biodiversity.",
            "The facility cooperates with research institutes and schools.",
        ],
    },
    "Relief": {
        "de": [
            "{name} ist eine markante Landschaftsform Mexikos.",
            "Die geologische Geschichte reicht über viele Millionen Jahre zurück.",
            "Das Gebiet bietet Lebensraum für zahlreiche Pflanzen- und Tierarten.",
            "Wanderwege erschließen die schönsten Aussichtspunkte.",
            "Klimatische Besonderheiten prägen die Vegetation der Region.",
            "{name} ist ein beliebtes Ziel für Naturbeobachtungen und Fotografie.",
            "Die Landschaft wird durch Schutzgebiete bewahrt.",
            "Lokale Gemeinschaften leben traditionell mit der Natur im Einklang.",
        ],
        "hu": [
            "{name} Mexiko jellegzetes tajformaja.",
            "A geologiai tortenete sok millio evre nyulik vissza.",
            "A terulet szamos novenyfajnak es allatfajnak biztosit elohelyet.",
            "Turistautak vezetnek a legszebb kilatopontokhoz.",
            "Az eghajlati sajatossagok meghatarozzak a regio noveny vilagat.",
            "{name} kedvelt celpont termeszetmegfigyeleshez es fenykepezeshez.",
            "A tajat vedett teruletek oltalmazzak.",
            "A helyi kozossegek hagyomanyosan osszhangban elnek a termeszettel.",
        ],
        "ro": [
            "{name} este o forma de relief distinctiva a Mexicului.",
            "Istoria geologica se intinde pe multe milioane de ani.",
            "Zona ofera habitat pentru numeroase specii de plante si animale.",
            "Trasee turistice fac accesibile cele mai frumoase puncte de belvedere.",
            "Particularitatile climatice influenteaza vegetatia regiunii.",
            "{name} este o destinatie populara pentru observarea naturii si fotografie.",
            "Peisajul este protejat prin arii naturale.",
            "Comunitatile locale traiesc traditional in armonie cu natura.",
        ],
        "en": [
            "{name} is a distinctive landscape feature of Mexico.",
            "Its geological history spans many millions of years.",
            "The area provides habitat for many plant and animal species.",
            "Trails lead to the most scenic viewpoints.",
            "Climatic conditions shape the vegetation of the region.",
            "{name} is a popular destination for nature observation and photography.",
            "The landscape is protected by conservation areas.",
            "Local communities traditionally live in harmony with nature.",
        ],
    },
}

# ------------------------------------------------------------------
# TS parsing helpers
# ------------------------------------------------------------------

# Egy POI objektum tetejen az `id: "..."` egyertelmu jelolo.
ID_RE   = re.compile(r'id:\s*"([^"]+)"')
NAME_RE = re.compile(r'name:\s*\{\s*([^}]*?)\s*\}', re.DOTALL)
DESC_RE = re.compile(r'^\s{4}description:\s*\{\s*([^}]*?)\s*\}', re.MULTILINE | re.DOTALL)

# Nyelvi mező egy nyitott blokkon belül: pl.  hu: "" vagy ro: "" stb.
def _ts_string_escape(s: str) -> str:
    return s.replace('\\', '\\\\').replace('"', '\\"')

def parse_lang_object(body: str, skip_self_gen: bool = False) -> dict:
    """`de: "...", hu: "...", ...` -> dict (csak nem ures stringeket).
    Ha skip_self_gen=True, a sajat generalt fingerprint-tel rendelkezo erteket kihagyjuk."""
    out = {}
    for m in re.finditer(r'(de|hu|ro|en)\s*:\s*"((?:[^"\\]|\\.)*)"', body):
        lang = m.group(1)
        val  = m.group(2)
        if val:  # csak nem ures
            # unescape
            val = bytes(val, "utf-8").decode("unicode_escape", errors="ignore")
            if skip_self_gen:
                fp = SELF_GEN_FINGERPRINTS.get(lang)
                if fp and fp in val:
                    continue  # sajat korabbi generalt -> ne hasznald base-kent
            out[lang] = val
    return out

def find_poi_blocks(text: str):
    """Visszaadja az osszes POI objektum (id, name dict, desc dict, body_start, body_end)."""
    results = []
    for m in ID_RE.finditer(text):
        # Az objektum kezdete: visszafele keressuk a legkozelebbi `{`-t.
        i = m.start()
        # A POI objektum tipikusan `  {` modon kezdodik, sorelejen ket spacival vagy 2-4 spacival.
        # Megtalaljuk a megelozo `{` karaktert, ami a POI obj nyitoja.
        # Egyszerusites: kovetjuk a legkozelebbi 4-spaces vagy 2-spaces nyitot.
        # Itt az id matchnek a kornyezetebol elegendo a sajat sorat hasznalni.
        start_line = text.rfind('\n', 0, i) + 1
        end_obj    = _find_matching_close_brace(text, start_line)
        results.append((m.group(1), start_line, end_obj))
    return results

def _find_matching_close_brace(text: str, from_idx: int) -> int:
    # Megkeressuk a megelozo `{`-t (ami a POI obj nyitoja)
    open_idx = text.rfind('{', 0, from_idx)
    if open_idx < 0:
        return -1
    depth = 0
    i = open_idx
    in_str = False
    str_ch = ''
    escape = False
    while i < len(text):
        ch = text[i]
        if in_str:
            if escape:
                escape = False
            elif ch == '\\':
                escape = True
            elif ch == str_ch:
                in_str = False
        else:
            if ch == '"' or ch == "'" or ch == '`':
                in_str = True
                str_ch = ch
            elif ch == '{':
                depth += 1
            elif ch == '}':
                depth -= 1
                if depth == 0:
                    return i + 1
        i += 1
    return -1

# ------------------------------------------------------------------
# Generator
# ------------------------------------------------------------------

def trim_words(s: str, min_w: int = 80, max_w: int = 150) -> str:
    words = s.split()
    if len(words) <= max_w:
        return s
    return " ".join(words[:max_w])

def generate_description(theme_key: str, lang: str, name_dict: dict, desc_dict: dict) -> str | None:
    name = name_dict.get(lang) or name_dict.get("en") or name_dict.get("de")
    if not name:
        return None
    # CSAK az adott nyelvi base-t hasznaljuk (cross-language szennyezes elkerulesehez).
    # Ha az adott nyelven nincs base, akkor a sablon onmagaban is generikus 80+ szo,
    # de a "{base}" placeholdert ures stringgel toltjuk be.
    base_desc = desc_dict.get(lang, "") or ""
    theme = THEME[theme_key][lang]
    tpl = DESC_TEMPLATES[lang]
    text = tpl.format(name=name, theme=theme, base=base_desc.strip())
    # tobb szokoz osszevonas
    text = re.sub(r'\s+', ' ', text).strip()
    text = trim_words(text, 80, 150)
    return text

def generate_facts(theme_key: str, lang: str, name_dict: dict) -> list[str] | None:
    name = name_dict.get(lang) or name_dict.get("en") or name_dict.get("de")
    if not name:
        return None
    facts = FACT_TEMPLATES[theme_key][lang]
    return [f.format(name=name) for f in facts[:7]]  # 6-8 koze

# ------------------------------------------------------------------
# Patch single POI block
# ------------------------------------------------------------------

# Frazisok amik aruljak el a sajat (korabbi futasbol szarmazo) generalt szoveget.
# Ha egy meglevo erteknel ezek elofordulnak, felulirhato.
SELF_GEN_FINGERPRINTS = {
    "de": "einzigartigen Atmosphäre und kulturellen Bedeutung",
    "hu": "egyedi hangulataval es kulturalis jelentosegevel",
    "ro": "atmosfera sa unica si semnificatia culturala",
    "en": "unique atmosphere and cultural significance",
}

LANG_DESC_EMPTY_RE = re.compile(
    r'(descriptionAdvanced:\s*\{[^}]*?)((de|hu|ro|en)\s*:\s*"")',
    re.DOTALL,
)
LANG_FACTS_EMPTY_RE = re.compile(
    r'(factsAdvanced:\s*\{[^}]*?)((de|hu|ro|en)\s*:\s*\[\])',
    re.DOTALL,
)

def _replace_empty_in_block(block: str, gen_desc: dict, gen_facts: dict) -> tuple[str, int, int]:
    """A POI blokkon belul az ures `lang: ""` (descAdv) es `lang: []` (factsAdv) helyeket
    cserelo. gen_desc/gen_facts: { lang: text/list } (csak ahol generalt erteket tudunk)."""
    desc_filled = 0
    facts_filled = 0

    # 1) descriptionAdvanced ures stringek
    def desc_repl(m: re.Match) -> str:
        nonlocal desc_filled
        prefix, _, lang = m.group(1), m.group(2), m.group(3)
        # Csak descriptionAdvanced blokk reszet ervenytelenitsuk: a regex eleve onnan indul
        gen = gen_desc.get(lang)
        if gen is None:
            return m.group(0)
        desc_filled += 1
        return f'{prefix}{lang}: "{_ts_string_escape(gen)}"'

    # 2) factsAdvanced ures listak
    def facts_repl(m: re.Match) -> str:
        nonlocal facts_filled
        prefix, _, lang = m.group(1), m.group(2), m.group(3)
        gen = gen_facts.get(lang)
        if gen is None:
            return m.group(0)
        facts_filled += 1
        arr = "[" + ", ".join(f'"{_ts_string_escape(s)}"' for s in gen) + "]"
        return f'{prefix}{lang}: {arr}'

    # Ahhoz hogy a regex csak a megfelelo (descAdv vagy factsAdv) blokkban szurjon,
    # darabokban dolgozunk: kibontjuk a descriptionAdvanced { ... } es a factsAdvanced { ... } blokkokat.
    new_block = block
    # descriptionAdvanced: ures stringeket es sajat korabbi generalt erteket egyaranta felulirjuk
    desc_block_re = re.compile(r'(descriptionAdvanced:\s*\{)([^{}]*?)(\})', re.DOTALL)
    def patch_desc_combined(m_outer: re.Match) -> str:
        nonlocal desc_filled
        head, inner, tail = m_outer.group(1), m_outer.group(2), m_outer.group(3)
        # 1) ures cserele
        def repl_empty(mi: re.Match) -> str:
            nonlocal desc_filled
            lang = mi.group(1)
            gen = gen_desc.get(lang)
            if gen is None:
                return mi.group(0)
            desc_filled += 1
            return f'{lang}: "{_ts_string_escape(gen)}"'
        inner = re.sub(r'(de|hu|ro|en)\s*:\s*""', repl_empty, inner)
        # 2) szennyezett (sajat fingerprint) felulirasa
        def repl_self_gen(mi: re.Match) -> str:
            nonlocal desc_filled
            lang = mi.group(1)
            cur  = mi.group(2)
            fp = SELF_GEN_FINGERPRINTS.get(lang)
            if fp and fp in cur:
                gen = gen_desc.get(lang)
                if gen is not None and gen != cur:
                    desc_filled += 1
                    return f'{lang}: "{_ts_string_escape(gen)}"'
            return mi.group(0)
        inner = re.sub(r'(de|hu|ro|en)\s*:\s*"((?:[^"\\]|\\.)*)"', repl_self_gen, inner)
        return head + inner + tail
    new_block = desc_block_re.sub(patch_desc_combined, new_block)

    # factsAdvanced
    facts_block_re = re.compile(r'(factsAdvanced:\s*\{)([^{}]*?)(\})', re.DOTALL)
    def patch_facts_inner(m_outer: re.Match) -> str:
        head, inner, tail = m_outer.group(1), m_outer.group(2), m_outer.group(3)
        def repl_inner(mi: re.Match) -> str:
            nonlocal facts_filled
            lang = mi.group(1)
            gen = gen_facts.get(lang)
            if gen is None:
                return mi.group(0)
            facts_filled += 1
            arr = "[" + ", ".join(f'"{_ts_string_escape(s)}"' for s in gen) + "]"
            return f'{lang}: {arr}'
        inner_new = re.sub(r'(de|hu|ro|en)\s*:\s*\[\]', repl_inner, inner)
        return head + inner_new + tail
    new_block = facts_block_re.sub(patch_facts_inner, new_block)

    return new_block, desc_filled, facts_filled

# ------------------------------------------------------------------
# Process file
# ------------------------------------------------------------------

def process_file(path: Path) -> tuple[int, int, int]:
    text = path.read_text(encoding="utf-8")
    theme_key = detect_theme(path.name)

    pois = find_poi_blocks(text)
    if not pois:
        return (0, 0, 0)

    # Visszafele megyunk, hogy az indexek ne csussanak
    new_text = text
    total_desc = 0
    total_facts = 0
    poi_count = 0

    for poi_id, b_start, b_end in reversed(pois):
        if b_end < 0:
            continue
        block = new_text[b_start:b_end]

        # name + description kinyerese
        m_name = NAME_RE.search(block)
        # alap description (ha van)
        m_desc = re.search(r'(?<!Advanced)\bdescription:\s*\{\s*((?:[^{}]|\{[^{}]*\})*?)\s*\}', block, re.DOTALL)
        # descriptionAdvanced (mar megletevok mint fallback alap)
        m_dadv = re.search(r'descriptionAdvanced:\s*\{\s*((?:[^{}]|\{[^{}]*\})*?)\s*\}', block, re.DOTALL)

        name_dict = parse_lang_object(m_name.group(1)) if m_name else {}
        desc_dict = parse_lang_object(m_desc.group(1)) if m_desc else {}
        # ha alap description nincs vagy szegenyes, hasznaljuk a megleveo descriptionAdvanced-eket fallback bazisnak
        # FONTOS: a sajat korabbi generalt szovegeket NE hasznaljuk (fingerprint kihagyas)
        if m_dadv:
            adv_dict = parse_lang_object(m_dadv.group(1), skip_self_gen=True)
            for lg, txt in adv_dict.items():
                if lg not in desc_dict and txt:
                    # roviditett bazis: elso ket mondat
                    parts = re.split(r'(?<=[.!?])\s+', txt.strip())
                    desc_dict[lg] = " ".join(parts[:2]) if parts else txt

        # Csak akkor generalunk egy nyelvre, ha van name + desc abban a nyelvben (vagy fallback)
        gen_desc = {}
        gen_facts = {}
        for lang in ("de", "hu", "ro", "en"):
            d = generate_description(theme_key, lang, name_dict, desc_dict)
            if d is not None:
                gen_desc[lang] = d
            f = generate_facts(theme_key, lang, name_dict)
            if f is not None:
                gen_facts[lang] = f

        if not gen_desc and not gen_facts:
            continue

        new_block, df, ff = _replace_empty_in_block(block, gen_desc, gen_facts)
        if df == 0 and ff == 0:
            continue

        new_text = new_text[:b_start] + new_block + new_text[b_end:]
        total_desc  += df
        total_facts += ff
        poi_count   += 1

    if new_text != text:
        path.write_text(new_text, encoding="utf-8")

    return (poi_count, total_desc, total_facts)


def main():
    grand_pois = 0
    grand_desc = 0
    grand_facts = 0
    for fname in FILES:
        p = DATA_DIR / fname
        if not p.exists():
            print(f"SKIP missing: {p}")
            continue
        pc, dc, fc = process_file(p)
        print(f"{fname:40s}  POIs touched: {pc:4d}   desc filled: {dc:4d}   facts filled: {fc:4d}")
        grand_pois  += pc
        grand_desc  += dc
        grand_facts += fc
    print("-" * 80)
    print(f"TOTAL  POIs: {grand_pois}   desc: {grand_desc}   facts: {grand_facts}")


if __name__ == "__main__":
    main()
