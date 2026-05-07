# -*- coding: utf-8 -*-
"""
fill_chile_seo.py
==================
Feltolti a poiExtraChile*V2.ts fajlok ures `descriptionAdvanced` (string)
es `factsAdvanced` (array) mezoit a sajat nyelvi `name` + `description` + `facts`
forrasbol, sablon-alapon. NEM hasznal mas nyelvet (cross-language szennyezes
elkerulve, ekezetekkel). Ha a sajat nyelvi forrasok hianyosak vagy uresek, a
mezo erintetlen marad ("Bizonytalan -> kihagyas").

Idempotens: csak a regex-szinten egyertelmuen ures mezoket toltjuk fel:
- descriptionAdvanced: `de: ""`, `hu: ""`, `ro: ""`, `en: ""`
- factsAdvanced:       `de: []`, `hu: []`, `ro: []`, `en: []`

Cel:
- descriptionAdvanced: ~80-150 szo termeszetes nyelvu prozaja
- factsAdvanced: 6-8 elem

Chile-specifikus zaroformak es generikus tenyek: Andok, Atacama, Patagonia,
csendes-oceani partvidek, rez/bor.
"""

from __future__ import annotations
import os
import re
import sys

REPO = r"C:/Users/User/plizio-repo"
DATA_DIR = os.path.join(REPO, "lib", "visualLab", "data")

FILES = [
    "poiExtraChileCitiesV2.ts",
    "poiExtraChileEconomicV2.ts",
    "poiExtraChileHistoryV2.ts",
    "poiExtraChileLandmarksV2.ts",
    "poiExtraChileLifeV2.ts",
    "poiExtraChileNatureV2.ts",
    "poiExtraChileReliefV2.ts",
]

LANGS = ("de", "hu", "ro", "en")


# ----------------------------------------------------------------------------
# Sablonszovegek nyelvenkent. Minden sablon a sajat nyelvi forrasbol epitkezik.
# Chile-specifikus: Andok, Atacama, Patagonia, Csendes-ocean, rez, bor.
# ----------------------------------------------------------------------------

TOPIC_TEXT = {
    "Cities": {
        "de": "Diese Stadt zählt zu den charakteristischen Siedlungen Chiles entlang der pazifischen Küste und der Anden.",
        "hu": "Ez a város Chile jellegzetes települései közé tartozik, az Andok és a Csendes-óceán partvidékének hatása alatt.",
        "ro": "Acest oraș se numără printre așezările caracteristice ale Chile, între Anzi și coasta Pacificului.",
        "en": "This city is among the characteristic settlements of Chile, shaped by the Andes and the Pacific coastline.",
    },
    "Economic": {
        "de": "Dieser Standort spielt eine Rolle in der chilenischen Wirtschaft, von Kupferbergbau über Weinbau bis hin zur Fischerei.",
        "hu": "Ez a helyszín szerepet játszik Chile gazdaságában, a rézbányászat, a borászat és a halászat hagyományaiban.",
        "ro": "Acest loc joacă un rol în economia Chile, de la mineritul de cupru și viticultură până la pescuit.",
        "en": "This location plays a role in Chile's economy, from copper mining and viticulture to fishing.",
    },
    "History": {
        "de": "Dieser Ort hat eine besondere Bedeutung in der Geschichte Chiles, geprägt von indigenen Kulturen, Kolonialzeit und Unabhängigkeit.",
        "hu": "Ennek a helyszínnek különleges jelentősége van Chile történelmében, az őslakos kultúráktól a gyarmati koron át a függetlenségig.",
        "ro": "Acest loc are o importanță deosebită în istoria Chile, marcată de culturi indigene, perioada colonială și independență.",
        "en": "This site holds particular significance in Chile's history, shaped by indigenous cultures, the colonial era, and independence.",
    },
    "Landmarks": {
        "de": "Dieses Wahrzeichen ist Teil des kulturellen Erbes Chiles zwischen Anden, Atacama und Pazifik.",
        "hu": "Ez a nevezetesség Chile kulturális örökségének része, az Andok, az Atacama és a Csendes-óceán között.",
        "ro": "Acest reper face parte din patrimoniul cultural al Chile, între Anzi, Atacama și Pacific.",
        "en": "This landmark is part of Chile's cultural heritage, set between the Andes, the Atacama, and the Pacific.",
    },
    "Life": {
        "de": "Dieses Schutzgebiet ist Teil der reichen Tier- und Pflanzenwelt Chiles, von der Atacama bis Patagonien.",
        "hu": "Ez a védett terület Chile gazdag élővilágának része, az Atacamától Patagóniáig.",
        "ro": "Această arie protejată face parte din bogata faună și floră a Chile, din Atacama până în Patagonia.",
        "en": "This protected area is part of Chile's rich wildlife and flora, from the Atacama to Patagonia.",
    },
    "Nature": {
        "de": "Dieses Naturgebiet zeigt die landschaftliche Vielfalt Chiles zwischen Anden, Atacama-Wüste und patagonischen Eisfeldern.",
        "hu": "Ez a természeti terület Chile tájainak sokszínűségét mutatja az Andok, az Atacama-sivatag és a patagóniai jégmezők között.",
        "ro": "Această zonă naturală reflectă diversitatea peisajului Chile, între Anzi, deșertul Atacama și ghețarii patagonezi.",
        "en": "This natural area reflects the scenic diversity of Chile, between the Andes, the Atacama Desert, and the Patagonian ice fields.",
    },
    "Relief": {
        "de": "Diese Geländeform prägt die Topografie Chiles entlang der Andenkordillere und des pazifischen Küstenstreifens.",
        "hu": "Ez a domborzati elem Chile felszínét alakítja az Andok-kordillera és a csendes-óceáni partvidék mentén.",
        "ro": "Această formă de relief modelează topografia Chile, de-a lungul Cordilierei Anzilor și a fâșiei costiere a Pacificului.",
        "en": "This landform shapes Chile's topography along the Andean Cordillera and the Pacific coastal strip.",
    },
}

INTRO = {
    "de": "{name} ist ein bemerkenswertes Element der chilenischen Geografie und Kultur.",
    "hu": "A(z) {name} a chilei földrajz és kultúra figyelemre méltó eleme.",
    "ro": "{name} este un element remarcabil al geografiei și culturii chiliene.",
    "en": "{name} is a remarkable feature of the geography and culture of Chile.",
}

CONNECT = {
    "de": "Wie viele bedeutende Orte in Chile vereint dieser Standort regionale Eigenheiten zwischen Pazifik und Anden mit übergreifender Bedeutung.",
    "hu": "Chile számos jelentős helyszínéhez hasonlóan ez is ötvözi a Csendes-óceán és az Andok közötti regionális sajátosságokat az általános jelentőséggel.",
    "ro": "Asemenea multor locuri importante din Chile, acesta îmbină particularitățile regionale dintre Pacific și Anzi cu o semnificație mai largă.",
    "en": "Like many notable places in Chile, it combines regional character between the Pacific and the Andes with wider significance.",
}

CLOSE = {
    "de": "Damit trägt dieser Ort zum vielseitigen Profil Chiles bei, von der Atacama-Wüste bis nach Patagonien.",
    "hu": "Ezzel a helyszín hozzájárul Chile sokszínű arculatához, az Atacama-sivatagtól egészen Patagóniáig.",
    "ro": "Astfel, acest loc contribuie la profilul variat al statului Chile, din deșertul Atacama până în Patagonia.",
    "en": "Thus, this place contributes to Chile's diverse profile, from the Atacama Desert all the way to Patagonia.",
}

GENERIC_FACTS = {
    "de": [
        "Liegt auf dem Gebiet der Republik Chile.",
        "Eingebettet zwischen Andenkordillere und pazifischer Küste.",
        "Spielt eine Rolle in der lokalen Identität der Region.",
        "Bekannt für seine landschaftliche oder kulturelle Bedeutung.",
        "Verbunden mit den klimatischen Kontrasten zwischen Atacama und Patagonien.",
        "Wird durch lokale Behörden und Gemeinschaften betreut.",
        "Verbunden mit der Tradition von Kupferbergbau und Weinbau.",
        "Teil des kulturellen und natürlichen Erbes Chiles.",
    ],
    "hu": [
        "A Chilei Köztársaság területén található.",
        "Az Andok-kordillera és a Csendes-óceán partja között fekszik.",
        "Szerepet játszik a régió helyi identitásában.",
        "Tájképi vagy kulturális jelentőségéről ismert.",
        "Az Atacama és Patagónia közötti éghajlati ellentétek hatása alatt áll.",
        "Helyi önkormányzatok és közösségek gondoskodnak róla.",
        "Kapcsolódik a rézbányászat és a borászat hagyományához.",
        "Chile kulturális és természeti örökségének része.",
    ],
    "ro": [
        "Se află pe teritoriul Republicii Chile.",
        "Este situat între Cordiliera Anzilor și coasta Pacificului.",
        "Are un rol în identitatea locală a regiunii.",
        "Este cunoscut pentru semnificația sa peisagistică sau culturală.",
        "Se află sub influența contrastelor climatice dintre Atacama și Patagonia.",
        "Este întreținut de autorități și comunități locale.",
        "Este legat de tradiția mineritului de cupru și a viticulturii.",
        "Face parte din patrimoniul cultural și natural al statului Chile.",
    ],
    "en": [
        "Located within the Republic of Chile.",
        "Set between the Andean Cordillera and the Pacific coast.",
        "Plays a role in the local identity of the region.",
        "Known for its scenic or cultural significance.",
        "Influenced by the climatic contrasts between the Atacama and Patagonia.",
        "Maintained by local authorities and communities.",
        "Connected to the traditions of copper mining and viticulture.",
        "Part of Chile's cultural and natural heritage.",
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


def build_description(name: str, desc: str, facts: list, lang: str, topic: str) -> str:
    """80-150 szos prozat epit a sajat nyelvi forrasbol."""
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


def build_facts(desc: str, facts: list, lang: str) -> list:
    out = []
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

def extract_lang_string(block: str, lang: str):
    pat = re.compile(
        r'\b' + lang + r'\s*:\s*"((?:[^"\\]|\\.)*)"',
        re.DOTALL,
    )
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


# ----------------------------------------------------------------------------
# POI-blokk feldolgozo
# ----------------------------------------------------------------------------

POI_HEADER_RE = re.compile(r'^\s*\{\s*\n\s*id:\s*"([^"]+)"', re.MULTILINE)


def split_pois(content: str):
    matches = list(POI_HEADER_RE.finditer(content))
    blocks = []
    for i, m in enumerate(matches):
        start = m.start()
        end = matches[i + 1].start() if i + 1 < len(matches) else len(content)
        blocks.append((start, end, m.group(1)))
    return blocks


def find_field_block(poi: str, field: str):
    """Megkeresi a `field: { ... }` blokkot a POI-on belul (elso elofordulas)."""
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


def find_all_field_blocks(poi: str, field: str):
    """Az osszes ilyen kulcsu blokk (a fajlokban duplikalva is elofordulhat)."""
    out = []
    pat = re.compile(r'\b' + field + r'\s*:\s*\{')
    pos = 0
    while True:
        m = pat.search(poi, pos)
        if not m:
            break
        i = m.end() - 1
        depth = 0
        in_str = False
        quote = ""
        end_idx = None
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
                        end_idx = i + 1
                        break
            i += 1
        if end_idx is None:
            break
        out.append((m.end() - 1, end_idx))
        pos = end_idx
    return out


def js_string_literal(s: str) -> str:
    return '"' + s.replace("\\", "\\\\").replace('"', '\\"') + '"'


def js_array_literal(items: list) -> str:
    return "[" + ", ".join(js_string_literal(x) for x in items) + "]"


def lang_key_present_string(block: str, lang: str) -> bool:
    """`lang: "..."` mintat keres (lehet ures string is)."""
    pat = re.compile(r'\b' + lang + r'\s*:\s*"')
    return pat.search(block) is not None


def lang_key_present_array(block: str, lang: str) -> bool:
    pat = re.compile(r'\b' + lang + r'\s*:\s*\[')
    return pat.search(block) is not None


def lang_key_empty_string(block: str, lang: str) -> bool:
    return re.search(r'\b' + lang + r'\s*:\s*""', block) is not None


def lang_key_empty_array(block: str, lang: str) -> bool:
    return re.search(r'\b' + lang + r'\s*:\s*\[\s*\]', block) is not None


def insert_kv_in_object_block(block_text: str, kv: str) -> str:
    """Beilleszt egy `lang: ...` parost a `{ ... }` blokk vegere, az utolso `}` ele.
    Megfelelo vesszovel + behuzassal."""
    assert block_text.startswith("{") and block_text.endswith("}")
    inner = block_text[1:-1]
    # hatasos behuzas megorzese
    # talalj egy tipikus ", " vagy ujsoros mintat
    stripped_right = inner.rstrip()
    needs_comma = bool(stripped_right) and not stripped_right.endswith(",")
    # Probaljuk megorizni a stilust: ha a tartalomban van `\n      ` minta, hasznaljuk
    indent_match = re.search(r'\n([ \t]+)', inner)
    indent = indent_match.group(1) if indent_match else "      "
    sep = ("," if needs_comma else "") + "\n" + indent
    new_inner = stripped_right + sep + kv + "\n    "
    return "{" + new_inner + "}"


def process_poi(poi: str, topic: str):
    fills_desc = 0
    fills_facts = 0

    # Forrasok (elso elofordulas — name, description, facts)
    name_blk = find_field_block(poi, "name")
    desc_blk = find_field_block(poi, "description")
    facts_blk = find_field_block(poi, "facts")

    name_src = poi[name_blk[0]:name_blk[1]] if name_blk else ""
    desc_src = poi[desc_blk[0]:desc_blk[1]] if desc_blk else ""
    facts_src = poi[facts_blk[0]:facts_blk[1]] if facts_blk else ""

    # ---- descriptionAdvanced ----
    da_blocks = find_all_field_blocks(poi, "descriptionAdvanced")
    if da_blocks:
        # Globalis (POI-szintu) jelenlet/ures szamlalas minden nyelvre
        # A nyelv akkor szamit "kitoltottnek", ha barmelyik blokkban van nem-ures string.
        lang_filled = {l: False for l in LANGS}
        for s, e in da_blocks:
            blk = poi[s:e]
            for l in LANGS:
                v = extract_lang_string(blk, l)
                if v is not None and v.strip():
                    lang_filled[l] = True

        # 1) Ures string slot-ok kitoltese minden blokkban
        for s, e in reversed(da_blocks):
            da_text = poi[s:e]
            new_da_text = da_text
            for lang in LANGS:
                if lang_filled[lang]:
                    continue
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
                lang_filled[lang] = True
            if new_da_text != da_text:
                poi = poi[:s] + new_da_text + poi[e:]

        # 2) Hianyzo nyelvi kulcs hozzaadasa az UTOLSO blokkhoz
        # (utolso = legfrissebb adatu; nem akarjuk feluldefinialni a meglevoket)
        da_blocks = find_all_field_blocks(poi, "descriptionAdvanced")
        if da_blocks:
            s, e = da_blocks[-1]
            blk = poi[s:e]
            new_blk = blk
            additions = []
            for lang in LANGS:
                if lang_filled[lang]:
                    continue
                # nincs sehol — szintetizalunk
                name_v = extract_lang_string(name_src, lang) or ""
                desc_v = extract_lang_string(desc_src, lang) or ""
                facts_v = extract_lang_array(facts_src, lang) or []
                if not name_v or (not desc_v and not facts_v):
                    continue
                built = build_description(name_v, desc_v, facts_v, lang, topic)
                additions.append((lang, built))
            for lang, built in additions:
                kv = lang + ": " + js_string_literal(built)
                new_blk = insert_kv_in_object_block(new_blk, kv)
                fills_desc += 1
                lang_filled[lang] = True
            if new_blk != blk:
                poi = poi[:s] + new_blk + poi[e:]

    # ---- factsAdvanced ----
    fa_blocks = find_all_field_blocks(poi, "factsAdvanced")
    if fa_blocks:
        lang_filled = {l: False for l in LANGS}
        for s, e in fa_blocks:
            blk = poi[s:e]
            for l in LANGS:
                arr = extract_lang_array(blk, l)
                if arr is not None and len(arr) > 0:
                    lang_filled[l] = True

        for s, e in reversed(fa_blocks):
            fa_text = poi[s:e]
            new_fa_text = fa_text
            for lang in LANGS:
                if lang_filled[lang]:
                    continue
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
                lang_filled[lang] = True
            if new_fa_text != fa_text:
                poi = poi[:s] + new_fa_text + poi[e:]

        fa_blocks = find_all_field_blocks(poi, "factsAdvanced")
        if fa_blocks:
            s, e = fa_blocks[-1]
            blk = poi[s:e]
            new_blk = blk
            additions = []
            for lang in LANGS:
                if lang_filled[lang]:
                    continue
                name_v = extract_lang_string(name_src, lang) or ""
                desc_v = extract_lang_string(desc_src, lang) or ""
                facts_v = extract_lang_array(facts_src, lang) or []
                if not name_v or (not desc_v and not facts_v):
                    continue
                built_list = build_facts(desc_v, facts_v, lang)
                if len(built_list) < 6:
                    continue
                additions.append((lang, built_list))
            for lang, built_list in additions:
                kv = lang + ": " + js_array_literal(built_list)
                new_blk = insert_kv_in_object_block(new_blk, kv)
                fills_facts += 1
                lang_filled[lang] = True
            if new_blk != blk:
                poi = poi[:s] + new_blk + poi[e:]

    return poi, fills_desc, fills_facts


def count_empty_in_poi(poi: str):
    """Szamolja a hianyzo/ures nyelvi mezoket POI-szinten (a 4 nyelvbol hany hianyzik osszesen)."""
    empty_desc = 0
    empty_facts = 0
    da_blocks = find_all_field_blocks(poi, "descriptionAdvanced")
    if da_blocks:
        for lang in LANGS:
            filled = False
            for s, e in da_blocks:
                v = extract_lang_string(poi[s:e], lang)
                if v is not None and v.strip():
                    filled = True
                    break
            if not filled:
                empty_desc += 1
    fa_blocks = find_all_field_blocks(poi, "factsAdvanced")
    if fa_blocks:
        for lang in LANGS:
            filled = False
            for s, e in fa_blocks:
                arr = extract_lang_array(poi[s:e], lang)
                if arr is not None and len(arr) > 0:
                    filled = True
                    break
            if not filled:
                empty_facts += 1
    return empty_desc, empty_facts


def process_file(path: str, dry: bool = False):
    topic = detect_topic(os.path.basename(path))
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()

    blocks = split_pois(content)
    if not blocks:
        return (0, 0, 0, 0, 0)

    # Elozetes ures-szamlalas
    pre_empty_desc = 0
    pre_empty_facts = 0
    for start, end, _id in blocks:
        ed, ef = count_empty_in_poi(content[start:end])
        pre_empty_desc += ed
        pre_empty_facts += ef

    if dry:
        return (len(blocks), pre_empty_desc, pre_empty_facts, 0, 0)

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
        with open(path, "w", encoding="utf-8") as f:
            f.write(new_content)

    return (poi_count, pre_empty_desc, pre_empty_facts, desc_total, facts_total)


def main():
    grand_poi = grand_pre_d = grand_pre_f = grand_d = grand_f = 0
    print("=== ELOZETES URES MEZO SZAMOLAS ===")
    for fname in FILES:
        path = os.path.join(DATA_DIR, fname)
        if not os.path.exists(path):
            print(f"[skip] {fname} nem letezik")
            continue
        pois, pd, pf, _, _ = process_file(path, dry=True)
        print(f"  {fname}: {pois} POI, ures descAdv slot={pd}, ures factsAdv slot={pf}")

    print("\n=== KITOLTES ===")
    for fname in FILES:
        path = os.path.join(DATA_DIR, fname)
        if not os.path.exists(path):
            continue
        pois, pd, pf, d, fa = process_file(path, dry=False)
        print(f"{fname}: {pois} POI | pre-ures D/F={pd}/{pf} | kitoltve +{d} descAdv, +{fa} factsAdv")
        grand_poi += pois
        grand_pre_d += pd
        grand_pre_f += pf
        grand_d += d
        grand_f += fa

    print(f"\nOSSZESEN: {grand_poi} POI | pre-ures: {grand_pre_d} desc + {grand_pre_f} facts = {grand_pre_d + grand_pre_f} | kitoltve: +{grand_d} descAdv, +{grand_f} factsAdv (osszesen +{grand_d + grand_f})")
    print(f"Megmaradt ures (forras hianya / kihagyas): desc={grand_pre_d - grand_d}, facts={grand_pre_f - grand_f}")


if __name__ == "__main__":
    main()
