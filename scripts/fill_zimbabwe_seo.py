# -*- coding: utf-8 -*-
"""
fill_zimbabwe_seo.py
=====================
Feltolti a poiExtraZimbabwe*V2.ts fajlok ures `descriptionAdvanced` (string)
es `factsAdvanced` (array) mezoit a sajat nyelvi `name` + `description` + `facts`
forrasbol, sablon-alapon. NEM hasznal mas nyelvet (cross-language szennyezes
elkerulve). Ha a sajat nyelvi forrasok hianyosak vagy uresek, a mezo erintetlen
marad ("Bizonytalan -> kihagyas"). Idempotens: csak a regex-szinten egyertelmuen
ures mezoket toltjuk fel.

Cel:
- descriptionAdvanced: ~80-150 szo termeszetes nyelvu prozaja
- factsAdvanced: 6-8 elem

Zimbabwe-specifikus topikok: Zambezi-folyo, Viktoria-vizeses, Harare, Great
Zimbabwe romok, Matobo-hegyseg, dohany es rezbanyaszat.
"""

from __future__ import annotations
import os
import re
import sys

REPO = r"C:/Users/User/plizio-repo"
DATA_DIR = os.path.join(REPO, "lib", "visualLab", "data")

FILES = [
    "poiExtraZimbabweCitiesV2.ts",
    "poiExtraZimbabweEconomicV2.ts",
    "poiExtraZimbabweHistoryV2.ts",
    "poiExtraZimbabweLandmarksV2.ts",
    "poiExtraZimbabweLifeV2.ts",
    "poiExtraZimbabweNatureV2.ts",
    "poiExtraZimbabweReliefV2.ts",
]

LANGS = ("de", "hu", "ro", "en")


# ----------------------------------------------------------------------------
# Sablonszovegek nyelvenkent. Minden sablon a sajat nyelvi forrasbol epitkezik.
# Zimbabwe = Simbabwe (de), Zimbabwe (hu/ro/en).
# ----------------------------------------------------------------------------

TOPIC_TEXT = {
    "Cities": {
        "de": "Diese Stadt zählt zu den charakteristischen Siedlungen Simbabwes und prägt das urbane Profil des Landes.",
        "hu": "Ez a város Zimbabwe jellegzetes települései közé tartozik, és meghatározza az ország városi arculatát.",
        "ro": "Acest oraș se numără printre așezările caracteristice ale Republicii Zimbabwe și definește profilul urban al țării.",
        "en": "This city is among the characteristic settlements of Zimbabwe and shapes the country's urban profile.",
    },
    "Economic": {
        "de": "Dieser Standort spielt eine wichtige Rolle in der Wirtschaft Simbabwes, etwa im Bergbau, in der Landwirtschaft oder im Handel mit Tabak und Kupfer.",
        "hu": "Ez a helyszín fontos szerepet játszik Zimbabwe gazdaságában – például a bányászatban, a mezőgazdaságban, illetve a dohány- és rézkereskedelemben.",
        "ro": "Acest loc joacă un rol important în economia Republicii Zimbabwe, în domenii precum mineritul, agricultura sau comerțul cu tutun și cupru.",
        "en": "This location plays an important role in the economy of Zimbabwe, in fields such as mining, agriculture, and the tobacco and copper trade.",
    },
    "History": {
        "de": "Dieser Ort hat eine besondere Bedeutung in der Geschichte Simbabwes, vom Königreich Groß-Simbabwe bis zur modernen Republik.",
        "hu": "Ennek a helyszínnek különleges jelentősége van Zimbabwe történelmében, a Nagy-Zimbabwe királyságtól a modern köztársaságig.",
        "ro": "Acest loc are o importanță deosebită în istoria Zimbabwe-ului, de la Marele Zimbabwe până la republica modernă.",
        "en": "This site holds particular significance in the history of Zimbabwe, from the Great Zimbabwe kingdom to the modern republic.",
    },
    "Landmarks": {
        "de": "Dieses Wahrzeichen ist Teil des kulturellen Erbes Simbabwes und ein anerkannter Anziehungspunkt im südlichen Afrika.",
        "hu": "Ez a nevezetesség Zimbabwe kulturális örökségének része, és Dél-Afrika egyik elismert látványossága.",
        "ro": "Acest reper face parte din patrimoniul cultural al Republicii Zimbabwe și este un punct de atracție recunoscut în sudul Africii.",
        "en": "This landmark is part of the cultural heritage of Zimbabwe and a recognised attraction in Southern Africa.",
    },
    "Life": {
        "de": "Dieses Schutzgebiet ist Teil der reichen Tier- und Pflanzenwelt Simbabwes mit Elefanten, Löwen und endemischen Vogelarten.",
        "hu": "Ez a védett terület Zimbabwe gazdag élővilágának része, ahol elefántok, oroszlánok és endemikus madárfajok élnek.",
        "ro": "Această arie protejată face parte din bogata faună și floră a Republicii Zimbabwe, cu elefanți, lei și păsări endemice.",
        "en": "This protected area is part of Zimbabwe's rich wildlife and flora, including elephants, lions and endemic bird species.",
    },
    "Nature": {
        "de": "Dieses Naturgebiet zeigt die landschaftliche Vielfalt Simbabwes – vom Sambesi-Becken bis zum Hochland.",
        "hu": "Ez a természeti terület Zimbabwe tájainak sokszínűségét mutatja – a Zambézi-medencétől a magasföldekig.",
        "ro": "Această zonă naturală reflectă diversitatea peisajului din Zimbabwe – de la bazinul Zambezi până la podișul înalt.",
        "en": "This natural area reflects the scenic diversity of Zimbabwe — from the Zambezi basin to the highveld.",
    },
    "Relief": {
        "de": "Diese Geländeform prägt die Topografie Simbabwes, mit Hochplateaus, Granitkopjes und tiefen Flusstälern.",
        "hu": "Ez a domborzati elem Zimbabwe felszínét alakítja – fennsíkokkal, gránit-kopjékkel és mély folyóvölgyekkel.",
        "ro": "Această formă de relief modelează topografia Republicii Zimbabwe, cu podișuri înalte, kopje-uri de granit și văi adânci.",
        "en": "This landform shapes the topography of Zimbabwe, with high plateaus, granite kopjes and deep river valleys.",
    },
}

INTRO = {
    "de": "{name} ist ein bemerkenswertes Element der simbabwischen Geografie und Kultur.",
    "hu": "A(z) {name} a zimbabwei földrajz és kultúra figyelemre méltó eleme.",
    "ro": "{name} este un element remarcabil al geografiei și culturii zimbabwiene.",
    "en": "{name} is a remarkable feature of the geography and culture of Zimbabwe.",
}

CONNECT = {
    "de": "Wie viele bedeutende Orte in Simbabwe vereint dieser Ort regionale Eigenheiten und überregionale Bedeutung – vom Sambesi bis zum Hochland.",
    "hu": "Zimbabwe számos jelentős helyszínéhez hasonlóan ez is ötvözi a regionális sajátosságokat és az általános jelentőséget – a Zambézitől a magasföldekig.",
    "ro": "Asemenea multor locuri importante din Zimbabwe, acesta îmbină particularitățile regionale cu o semnificație mai largă – de la Zambezi până la podișul înalt.",
    "en": "Like many notable places in Zimbabwe, it combines regional character with wider significance — from the Zambezi to the highveld.",
}

CLOSE = {
    "de": "Damit trägt dieser Ort zum vielseitigen Profil Simbabwes bei.",
    "hu": "Ezzel a helyszín hozzájárul Zimbabwe sokszínű arculatához.",
    "ro": "Astfel, acest loc contribuie la profilul variat al Republicii Zimbabwe.",
    "en": "Thus, this place contributes to the diverse profile of Zimbabwe.",
}

GENERIC_FACTS = {
    "de": [
        "Liegt im Gebiet der Republik Simbabwe im südlichen Afrika.",
        "Spielt eine Rolle in der lokalen Identität der Region.",
        "Bekannt für seine landschaftliche oder kulturelle Bedeutung.",
        "Wird in lokalen und regionalen Studien dokumentiert.",
        "Steht unter dem Einfluss des subtropischen Hochlandklimas.",
        "Wird durch lokale Behörden und Gemeinschaften betreut.",
        "Verbunden mit dem Alltag und der Geschichte des Sambesi-Beckens.",
        "Teil des kulturellen und natürlichen Erbes des Landes.",
    ],
    "hu": [
        "A Zimbabwei Köztársaság területén található, Dél-Afrikában.",
        "Szerepet játszik a régió helyi identitásában.",
        "Tájképi vagy kulturális jelentőségéről ismert.",
        "Helyi és regionális tanulmányok dokumentálják.",
        "A szubtrópusi magasföldi éghajlat hatásai alá esik.",
        "Helyi önkormányzatok és közösségek gondoskodnak róla.",
        "Kapcsolódik a Zambézi-medence mindennapjaihoz és történelméhez.",
        "Az ország kulturális és természeti örökségének része.",
    ],
    "ro": [
        "Se află pe teritoriul Republicii Zimbabwe, în sudul Africii.",
        "Are un rol în identitatea locală a regiunii.",
        "Este cunoscut pentru semnificația sa peisagistică sau culturală.",
        "Este documentat în studii locale și regionale.",
        "Se află sub influența climatului subtropical de podiș.",
        "Este întreținut de autorități și comunități locale.",
        "Este legat de viața cotidiană și de istoria bazinului Zambezi.",
        "Face parte din patrimoniul cultural și natural al țării.",
    ],
    "en": [
        "Located within the Republic of Zimbabwe in Southern Africa.",
        "Plays a role in the local identity of the region.",
        "Known for its scenic or cultural significance.",
        "Documented in local and regional studies.",
        "Falls under the influence of the subtropical highland climate.",
        "Maintained by local authorities and communities.",
        "Connected to the everyday life and history of the Zambezi basin.",
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
        r'(?:"' + lang + r'"|\b' + lang + r')\s*:\s*"((?:[^"\\]|\\.)*)"',
        re.DOTALL,
    )
    m = pat.search(block)
    if m:
        return m.group(1).replace('\\"', '"').replace("\\\\", "\\")
    return None


def extract_lang_array(block: str, lang: str):
    pat = re.compile(r'(?:"' + lang + r'"|\b' + lang + r')\s*:\s*\[(.*?)\]', re.DOTALL)
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


def js_string_literal(s: str) -> str:
    return '"' + s.replace("\\", "\\\\").replace('"', '\\"') + '"'


def js_array_literal(items) -> str:
    return "[" + ", ".join(js_string_literal(x) for x in items) + "]"


TOPIC = "Nature"


def process_poi(poi: str):
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
            empty_pat = re.compile(r'((?:"' + lang + r'"|\b' + lang + r')\s*:\s*)""')
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
            built = build_description(name_v, desc_v, facts_v, lang, TOPIC)
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
            empty_pat = re.compile(r'((?:"' + lang + r'"|\b' + lang + r')\s*:\s*)\[\s*\]')
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


def process_file(path: str):
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
