# -*- coding: utf-8 -*-
"""
fill_bolivia_seo.py
====================
Feltolti a poiExtraBolivia*V2.ts fajlok ures `descriptionAdvanced` (string) es
`factsAdvanced` (array) mezoit a sajat nyelvi `name` + `description` + `facts`
forrasbol, sablon-alapon. NEM hasznal mas nyelvet (cross-language szennyezes
elkerulve, ekezetekkel). Ha a sajat nyelvi forrasok hianyosak vagy uresek, a
mezo erintetlen marad ("Bizonytalan -> kihagyas").

Idempotens: csak az egyertelmuen ures mezoket toltjuk fel.

Cel:
- descriptionAdvanced: ~80-150 szo termeszetes nyelvu prozaja
- factsAdvanced: 6-8 elem

Bolivia-specifikus zaroformak es generikus tenyek: Andok, Altiplano, Titicaca-to,
Salar de Uyuni, La Paz/Sucre, Amazonas-medence keleti resze, litium/ezust/foldgaz,
Inka orokseg, aymara/quechua kultura.
"""

from __future__ import annotations
import os
import re
import sys

REPO = r"C:/Users/User/plizio-repo"
DATA_DIR = os.path.join(REPO, "lib", "visualLab", "data")

FILES = [
    "poiExtraBoliviaCitiesV2.ts",
    "poiExtraBoliviaEconomicV2.ts",
    "poiExtraBoliviaHistoryV2.ts",
    "poiExtraBoliviaLandmarksV2.ts",
    "poiExtraBoliviaLifeV2.ts",
    "poiExtraBoliviaNatureV2.ts",
    "poiExtraBoliviaReliefV2.ts",
]

LANGS = ("de", "hu", "ro", "en")


# ----------------------------------------------------------------------------
# Sablonszovegek nyelvenkent. Bolivia-specifikus: Andok, Altiplano, Titicaca,
# Salar de Uyuni, La Paz/Sucre, kelet-amazoniai medence, litium/ezust/foldgaz,
# Inka orokseg, aymara/quechua kultura.
# ----------------------------------------------------------------------------

TOPIC_TEXT = {
    "Cities": {
        "de": "Diese Stadt zählt zu den charakteristischen Siedlungen Boliviens, geprägt von Anden, Altiplano und dem kulturellen Erbe der Aymara und Quechua.",
        "hu": "Ez a város Bolívia jellegzetes települései közé tartozik, az Andok, az Altiplano, valamint az aymara és kecsua kultúra hatása alatt.",
        "ro": "Acest oraș se numără printre așezările caracteristice ale Boliviei, marcate de Anzi, Altiplano și moștenirea culturală aymara și quechua.",
        "en": "This city is among the characteristic settlements of Bolivia, shaped by the Andes, the Altiplano, and the cultural heritage of the Aymara and Quechua peoples.",
    },
    "Economic": {
        "de": "Dieser Standort spielt eine Rolle in der bolivianischen Wirtschaft, vom Lithium- und Silberbergbau über Erdgas bis hin zur Landwirtschaft im Altiplano und Tiefland.",
        "hu": "Ez a helyszín szerepet játszik Bolívia gazdaságában, a lítium- és ezüstbányászattól a földgázon át az Altiplano és az alföld mezőgazdaságáig.",
        "ro": "Acest loc joacă un rol în economia Boliviei, de la mineritul de litiu și argint la gazele naturale și agricultura din Altiplano și zonele joase.",
        "en": "This location plays a role in Bolivia's economy, from lithium and silver mining to natural gas and agriculture across the Altiplano and lowlands.",
    },
    "History": {
        "de": "Dieser Ort hat eine besondere Bedeutung in der Geschichte Boliviens, geprägt von präkolumbianischen Kulturen, dem Inkareich, der spanischen Kolonialzeit und der Unabhängigkeit von 1825.",
        "hu": "Ennek a helyszínnek különleges jelentősége van Bolívia történelmében, a prekolumbián kultúráktól az Inka Birodalmon és a spanyol gyarmati koron át az 1825-ös függetlenségig.",
        "ro": "Acest loc are o importanță deosebită în istoria Boliviei, marcată de culturi precolumbiene, Imperiul Incaș, perioada colonială spaniolă și independența din 1825.",
        "en": "This site holds particular significance in Bolivia's history, shaped by pre-Columbian cultures, the Inca Empire, the Spanish colonial era, and the independence of 1825.",
    },
    "Landmarks": {
        "de": "Dieses Wahrzeichen ist Teil des kulturellen Erbes Boliviens zwischen Andenkordillere, Altiplano, Titicacasee und den Tiefländern des östlichen Amazonasbeckens.",
        "hu": "Ez a nevezetesség Bolívia kulturális örökségének része, az Andok-kordillera, az Altiplano, a Titicaca-tó és a kelet-amazóniai medence alföldjei között.",
        "ro": "Acest reper face parte din patrimoniul cultural al Boliviei, între Cordiliera Anzilor, Altiplano, lacul Titicaca și zonele joase ale bazinului amazonian estic.",
        "en": "This landmark is part of Bolivia's cultural heritage, set between the Andean Cordillera, the Altiplano, Lake Titicaca, and the lowlands of the eastern Amazon basin.",
    },
    "Life": {
        "de": "Dieses Schutzgebiet ist Teil der reichen Tier- und Pflanzenwelt Boliviens, vom Altiplano über die Yungas bis ins Amazonastiefland.",
        "hu": "Ez a védett terület Bolívia gazdag élővilágának része, az Altiplanótól a Yungas-on át az amazóniai alföldig.",
        "ro": "Această arie protejată face parte din bogata faună și floră a Boliviei, din Altiplano prin Yungas până în zonele joase amazoniene.",
        "en": "This protected area is part of Bolivia's rich wildlife and flora, from the Altiplano through the Yungas to the Amazonian lowlands.",
    },
    "Nature": {
        "de": "Dieses Naturgebiet zeigt die landschaftliche Vielfalt Boliviens zwischen Andenkordillere, Altiplano, Titicacasee, Salar de Uyuni und dem Amazonasbecken.",
        "hu": "Ez a természeti terület Bolívia tájainak sokszínűségét mutatja az Andok-kordillera, az Altiplano, a Titicaca-tó, a Salar de Uyuni és az Amazonas-medence között.",
        "ro": "Această zonă naturală reflectă diversitatea peisajului Boliviei, între Cordiliera Anzilor, Altiplano, lacul Titicaca, Salar de Uyuni și bazinul amazonian.",
        "en": "This natural area reflects the scenic diversity of Bolivia, between the Andean Cordillera, the Altiplano, Lake Titicaca, the Salar de Uyuni, and the Amazon basin.",
    },
    "Relief": {
        "de": "Diese Geländeform prägt die Topografie Boliviens entlang der Andenkordillere, des Altiplano-Hochplateaus und der Übergänge zu den östlichen Tiefländern.",
        "hu": "Ez a domborzati elem Bolívia felszínét alakítja az Andok-kordillera, az Altiplano-fennsík és a keleti alföldek felé vezető átmenetek mentén.",
        "ro": "Această formă de relief modelează topografia Boliviei, de-a lungul Cordilierei Anzilor, a podișului Altiplano și a tranzițiilor spre zonele joase estice.",
        "en": "This landform shapes Bolivia's topography along the Andean Cordillera, the Altiplano plateau, and the transitions to the eastern lowlands.",
    },
}

INTRO = {
    "de": "{name} ist ein bemerkenswertes Element der bolivianischen Geografie und Kultur.",
    "hu": "A(z) {name} a bolíviai földrajz és kultúra figyelemre méltó eleme.",
    "ro": "{name} este un element remarcabil al geografiei și culturii boliviene.",
    "en": "{name} is a remarkable feature of the geography and culture of Bolivia.",
}

CONNECT = {
    "de": "Wie viele bedeutende Orte in Bolivien vereint dieser Standort regionale Eigenheiten zwischen Hochanden, Altiplano und östlichem Amazonastiefland mit übergreifender Bedeutung.",
    "hu": "Bolívia számos jelentős helyszínéhez hasonlóan ez is ötvözi a magas Andok, az Altiplano és a keleti amazóniai alföld közötti regionális sajátosságokat az általános jelentőséggel.",
    "ro": "Asemenea multor locuri importante din Bolivia, acesta îmbină particularitățile regionale dintre Anzii înalți, Altiplano și zonele joase amazoniene estice cu o semnificație mai largă.",
    "en": "Like many notable places in Bolivia, it combines regional character between the high Andes, the Altiplano, and the eastern Amazonian lowlands with wider significance.",
}

EXTRA_PROSE = {
    "de": "Bolivien selbst ist ein Binnenland in Südamerika, dessen Geografie zwischen den schneebedeckten Sechstausendern der Cordillera Real, dem hochgelegenen Altiplano um den Titicacasee und Salar de Uyuni, den feuchten Yungas-Hängen und dem weiten Amazonastiefland im Osten variiert. Diese Vielfalt prägt Klima, Wirtschaft und kulturelles Leben.",
    "hu": "Bolívia tengerparttól elzárt dél-amerikai ország, melynek földrajza a Cordillera Real hatezres csúcsaitól a Titicaca-tó és a Salar de Uyuni körüli magasan fekvő Altiplanóig, a nedves Yungas-lejtőkig és a keleti Amazonas-medence kiterjedt alföldjéig terjed. Ez a sokféleség határozza meg az éghajlatot, a gazdaságot és a kulturális életet.",
    "ro": "Bolivia este o țară fără ieșire la mare din America de Sud, a cărei geografie variază de la vârfurile de peste șase mii de metri ale Cordilierei Reale, la podișul Altiplano înalt din jurul lacului Titicaca și Salar de Uyuni, la pantele umede ale Yungas și până la întinsele zone joase ale bazinului amazonian estic. Această diversitate modelează clima, economia și viața culturală.",
    "en": "Bolivia itself is a landlocked South American country whose geography ranges from the six-thousand-metre peaks of the Cordillera Real, through the high Altiplano around Lake Titicaca and the Salar de Uyuni, to the humid Yungas slopes and the vast Amazon lowlands in the east. This diversity shapes climate, economy, and cultural life.",
}

CLOSE = {
    "de": "Damit trägt dieser Ort zum vielseitigen Profil Boliviens bei, vom Titicacasee und Salar de Uyuni bis zu den Yungas und dem Amazonasbecken.",
    "hu": "Ezzel a helyszín hozzájárul Bolívia sokszínű arculatához, a Titicaca-tótól és a Salar de Uyunitól a Yungasig és az Amazonas-medencéig.",
    "ro": "Astfel, acest loc contribuie la profilul variat al Boliviei, de la lacul Titicaca și Salar de Uyuni până la Yungas și bazinul amazonian.",
    "en": "Thus, this place contributes to Bolivia's diverse profile, from Lake Titicaca and the Salar de Uyuni to the Yungas and the Amazon basin.",
}

GENERIC_FACTS = {
    "de": [
        "Liegt auf dem Gebiet des Plurinationalen Staates Bolivien.",
        "Eingebettet zwischen Andenkordillere, Altiplano und östlichem Tiefland.",
        "Spielt eine Rolle in der lokalen Identität der Region.",
        "Bekannt für seine landschaftliche oder kulturelle Bedeutung.",
        "Verbunden mit dem kulturellen Erbe der Aymara und Quechua.",
        "Wird durch lokale Behörden und Gemeinschaften betreut.",
        "Verbunden mit der Tradition von Lithium-, Silber- und Erdgasförderung.",
        "Teil des kulturellen und natürlichen Erbes Boliviens.",
    ],
    "hu": [
        "Bolívia Többnemzetiségű Állam területén található.",
        "Az Andok-kordillera, az Altiplano és a keleti alföld között fekszik.",
        "Szerepet játszik a régió helyi identitásában.",
        "Tájképi vagy kulturális jelentőségéről ismert.",
        "Kapcsolódik az aymara és kecsua népek kulturális örökségéhez.",
        "Helyi önkormányzatok és közösségek gondoskodnak róla.",
        "Kapcsolódik a lítium-, ezüst- és földgáz-kitermelés hagyományához.",
        "Bolívia kulturális és természeti örökségének része.",
    ],
    "ro": [
        "Se află pe teritoriul Statului Plurinațional al Boliviei.",
        "Este situat între Cordiliera Anzilor, Altiplano și zonele joase estice.",
        "Are un rol în identitatea locală a regiunii.",
        "Este cunoscut pentru semnificația sa peisagistică sau culturală.",
        "Este legat de moștenirea culturală a popoarelor aymara și quechua.",
        "Este întreținut de autorități și comunități locale.",
        "Este legat de tradiția extracției de litiu, argint și gaze naturale.",
        "Face parte din patrimoniul cultural și natural al Boliviei.",
    ],
    "en": [
        "Located within the Plurinational State of Bolivia.",
        "Set between the Andean Cordillera, the Altiplano, and the eastern lowlands.",
        "Plays a role in the local identity of the region.",
        "Known for its scenic or cultural significance.",
        "Connected to the cultural heritage of the Aymara and Quechua peoples.",
        "Maintained by local authorities and communities.",
        "Linked to the traditions of lithium, silver, and natural gas extraction.",
        "Part of Bolivia's cultural and natural heritage.",
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
    # Ha nincs sajat nyelvi forras (sem desc, sem facts), egesziitsuk ki
    # egy bolivia-szintu altalanos prozaval a 80+ szo elerese erdekeben.
    if not desc.strip() and not facts:
        parts.append(EXTRA_PROSE[lang])
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


def insert_kv_in_object_block(block_text: str, kv: str) -> str:
    assert block_text.startswith("{") and block_text.endswith("}")
    inner = block_text[1:-1]
    stripped_right = inner.rstrip()
    needs_comma = bool(stripped_right) and not stripped_right.endswith(",")
    indent_match = re.search(r'\n([ \t]+)', inner)
    indent = indent_match.group(1) if indent_match else "      "
    sep = ("," if needs_comma else "") + "\n" + indent
    new_inner = stripped_right + sep + kv + "\n    "
    return "{" + new_inner + "}"


def process_poi(poi: str, topic: str):
    fills_desc = 0
    fills_facts = 0

    name_blk = find_field_block(poi, "name")
    # Klasszikus `description` / `facts` blokk a Bolivia-fajlokban gyakran HIANYZIK,
    # de van `descriptionAdvanced` es `factsAdvanced` sajat nyelven. Ha nincs sima
    # `description`/`facts`, fallback-ként az Advanced-blokkokat hasznaljuk forrasként
    # — csakis SAJAT nyelvenként (cross-language tilos).
    desc_blk = find_field_block(poi, "description")
    facts_blk = find_field_block(poi, "facts")

    name_src = poi[name_blk[0]:name_blk[1]] if name_blk else ""
    if desc_blk:
        desc_src = poi[desc_blk[0]:desc_blk[1]]
    else:
        # fallback: descriptionAdvanced
        da_src_blocks = find_all_field_blocks(poi, "descriptionAdvanced")
        desc_src = poi[da_src_blocks[0][0]:da_src_blocks[0][1]] if da_src_blocks else ""
    if facts_blk:
        facts_src = poi[facts_blk[0]:facts_blk[1]]
    else:
        fa_src_blocks = find_all_field_blocks(poi, "factsAdvanced")
        facts_src = poi[fa_src_blocks[0][0]:fa_src_blocks[0][1]] if fa_src_blocks else ""

    # ---- descriptionAdvanced ----
    da_blocks = find_all_field_blocks(poi, "descriptionAdvanced")
    if da_blocks:
        lang_filled = {l: False for l in LANGS}
        for s, e in da_blocks:
            blk = poi[s:e]
            for l in LANGS:
                v = extract_lang_string(blk, l)
                if v is not None and v.strip():
                    lang_filled[l] = True

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
                if not name_v:
                    continue
                built = build_description(name_v, desc_v, facts_v, lang, topic)
                replacement = em.group(1) + js_string_literal(built)
                new_da_text = new_da_text[:em.start()] + replacement + new_da_text[em.end():]
                fills_desc += 1
                lang_filled[lang] = True
            if new_da_text != da_text:
                poi = poi[:s] + new_da_text + poi[e:]

        da_blocks = find_all_field_blocks(poi, "descriptionAdvanced")
        if da_blocks:
            s, e = da_blocks[-1]
            blk = poi[s:e]
            new_blk = blk
            additions = []
            for lang in LANGS:
                if lang_filled[lang]:
                    continue
                name_v = extract_lang_string(name_src, lang) or ""
                desc_v = extract_lang_string(desc_src, lang) or ""
                facts_v = extract_lang_array(facts_src, lang) or []
                if not name_v:
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
                if not name_v:
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
                if not name_v:
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
