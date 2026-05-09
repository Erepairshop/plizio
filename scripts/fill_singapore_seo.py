# -*- coding: utf-8 -*-
"""
fill_singapore_seo.py
=====================
Feltolti a poiExtraSingapore*V2.ts fajlok ures `descriptionAdvanced` (string) es
`factsAdvanced` (array) mezoit a sajat nyelvi `name` + `description` + `facts`
forrasbol, sablon-alapon. NEM hasznal mas nyelvet (cross-language szennyezes
elkerulve). Idempotens: csak ures mezoket tolt fel.

Mintat kovet: scripts/fill_malaysia_seo.py — Szingapur-specifikus topic+frazis
szovegekkel (varosallam, Malaj-felsziget vege, Marina Bay, Gardens by the Bay,
kikoto-penzugyi-tech hub, Changi reptér, multikulturalis kinai-malaj-indiai-
eurazsiai tarsadalom).
"""

from __future__ import annotations
import re
from pathlib import Path

REPO = r"C:/Users/User/plizio-repo"
DATA_DIR = Path(REPO) / "lib" / "visualLab" / "data"

FILES = [
    "poiExtraSingaporeCitiesV2.ts",
    "poiExtraSingaporeEconomicV2.ts",
    "poiExtraSingaporeHistoryV2.ts",
    "poiExtraSingaporeLandmarksV2.ts",
    "poiExtraSingaporeLifeV2.ts",
    "poiExtraSingaporeNatureV2.ts",
    "poiExtraSingaporeReliefV2.ts",
]

LANGS = ("de", "hu", "ro", "en")


# ----------------------------------------------------------------------------
# Sablonszovegek nyelvenkent (Szingapur)
# ----------------------------------------------------------------------------

TOPIC_TEXT = {
    "Cities": {
        "de": "Dieser Stadtteil ist Teil des Stadtstaates Singapur an der Südspitze der Malaiischen Halbinsel, geprägt von Marina Bay, Hochhaustürmen und einer dichten multikulturellen Bevölkerung.",
        "hu": "Ez a városrész a Maláj-félsziget déli csúcsán fekvő Szingapúr városállam része, amelyet a Marina Bay, a felhőkarcolók és a sűrű, multikulturális népesség jellemez.",
        "ro": "Acest cartier face parte din orașul-stat Singapore, situat la capătul sudic al Peninsulei Malaya, marcat de Marina Bay, zgârie-nori și o populație densă, multiculturală.",
        "en": "This district is part of the city-state of Singapore at the southern tip of the Malay Peninsula, shaped by Marina Bay, high-rise towers and a dense multicultural population.",
    },
    "Economic": {
        "de": "Dieser Standort spielt eine Rolle in der Wirtschaft Singapurs, eines globalen Finanz-, Hafen- und Technologiezentrums mit Containerterminals, Banken, Raffinerien und dem Flughafen Changi.",
        "hu": "Ez a helyszín szerepet játszik Szingapúr gazdaságában, amely globális pénzügyi, kikötői és technológiai központ konténerterminálokkal, bankokkal, finomítókkal és a Changi reptérrel.",
        "ro": "Acest loc joacă un rol în economia Singaporelui, un centru global financiar, portuar și tehnologic, cu terminale de containere, bănci, rafinării și aeroportul Changi.",
        "en": "This location plays a role in the economy of Singapore, a global financial, port and technology hub with container terminals, banks, refineries and Changi Airport.",
    },
    "History": {
        "de": "Dieser Ort hat eine besondere Bedeutung in der Geschichte Singapurs, von der Gründung durch Stamford Raffles 1819 über die britische Kolonialzeit und die japanische Besatzung bis zur Unabhängigkeit 1965.",
        "hu": "Ennek a helyszínnek különleges jelentősége van Szingapúr történelmében, Stamford Raffles 1819-es alapításától a brit gyarmati időszakon és a japán megszálláson át az 1965-ös függetlenségig.",
        "ro": "Acest loc are o importanță deosebită în istoria Singaporelui, de la fondarea de către Stamford Raffles în 1819, prin perioada colonială britanică și ocupația japoneză, până la independența din 1965.",
        "en": "This site holds particular significance in the history of Singapore, from its founding by Stamford Raffles in 1819 through British colonial rule and Japanese occupation to independence in 1965.",
    },
    "Landmarks": {
        "de": "Dieses Wahrzeichen ist Teil des kulturellen Erbes Singapurs, oft verbunden mit Marina Bay Sands, dem Merlion, Gardens by the Bay, Chinatown, Little India und Kampong Glam.",
        "hu": "Ez a nevezetesség Szingapúr kulturális örökségének része, gyakran a Marina Bay Sandshez, a Merlionhoz, a Gardens by the Bayhez, Chinatownhoz, Little Indiához és Kampong Glamhoz kötődik.",
        "ro": "Acest reper face parte din patrimoniul cultural al Singaporelui, adesea legat de Marina Bay Sands, Merlion, Gardens by the Bay, Chinatown, Little India și Kampong Glam.",
        "en": "This landmark is part of the cultural heritage of Singapore, often linked to Marina Bay Sands, the Merlion, Gardens by the Bay, Chinatown, Little India and Kampong Glam.",
    },
    "Life": {
        "de": "Dieses Schutzgebiet ist Teil der Tier- und Pflanzenwelt Singapurs, mit tropischen Regenwaldresten, Mangroven, Nashornvögeln, Langschwanzmakaken und einer reichen Vogelwelt trotz dichter Bebauung.",
        "hu": "Ez a védett terület Szingapúr élővilágának része, trópusi esőerdő-maradványokkal, mangrovékkal, szarvascsőrű madarakkal, hosszúfarkú makákókkal és gazdag madárvilággal a sűrű beépítettség ellenére.",
        "ro": "Această arie protejată face parte din fauna și flora Singaporelui, cu resturi de pădure tropicală, mangrove, păsări rinocer, macaci cu coadă lungă și o avifaună bogată, în ciuda urbanizării dense.",
        "en": "This protected area is part of Singapore's wildlife and flora, with remnants of tropical rainforest, mangroves, hornbills, long-tailed macaques and a rich birdlife despite dense urban development.",
    },
    "Nature": {
        "de": "Dieses Naturgebiet zeigt die landschaftliche Vielfalt Singapurs, vom zentralen Wassereinzugsgebiet über die Südküsteninseln bis zu den Mangroven von Sungei Buloh und den Hügeln von Bukit Timah.",
        "hu": "Ez a természeti terület Szingapúr tájainak sokszínűségét mutatja, a központi vízgyűjtőtől a déli partvidék szigetein át a Sungei Buloh mangrovéiig és a Bukit Timah dombjaiig.",
        "ro": "Această zonă naturală reflectă diversitatea peisajului Singaporelui, de la bazinul central, prin insulele coastei sudice, până la mangrovele Sungei Buloh și dealurile Bukit Timah.",
        "en": "This natural area reflects the scenic diversity of Singapore, from the central water catchment through the southern coastal islands to the Sungei Buloh mangroves and the hills of Bukit Timah.",
    },
    "Relief": {
        "de": "Diese Geländeform prägt die Topografie Singapurs, einer flachen tropischen Insel an der Spitze der Malaiischen Halbinsel mit dem Bukit Timah als höchstem Punkt und ausgedehnten landgewonnenen Küsten.",
        "hu": "Ez a domborzati elem Szingapúr felszínét alakítja, egy lapos trópusi szigetét a Maláj-félsziget csúcsán, ahol a Bukit Timah a legmagasabb pont, és kiterjedt feltöltött partvidékek vannak.",
        "ro": "Această formă de relief modelează topografia Singaporelui, o insulă tropicală joasă la capătul Peninsulei Malaya, cu Bukit Timah ca punct culminant și litoraluri întinse câștigate prin umpluturi.",
        "en": "This landform shapes the topography of Singapore, a low tropical island at the tip of the Malay Peninsula, with Bukit Timah as its highest point and extensive reclaimed coastlines.",
    },
}

INTRO = {
    "de": "{name} ist ein bemerkenswertes Element der Geografie und Kultur Singapurs.",
    "hu": "A(z) {name} a szingapúri földrajz és kultúra figyelemre méltó eleme.",
    "ro": "{name} este un element remarcabil al geografiei și culturii Singaporelui.",
    "en": "{name} is a remarkable feature of the geography and culture of Singapore.",
}

CONNECT = {
    "de": "Wie viele bedeutende Orte in Singapur vereint dieser Ort die Dichte des Stadtstaates mit dem Erbe der multikulturellen chinesisch-malaiisch-indisch-eurasischen Gesellschaft und der tropischen Lage.",
    "hu": "Szingapúr számos jelentős helyszínéhez hasonlóan ez is ötvözi a városállam sűrűségét a multikulturális kínai-malaj-indiai-eurázsiai társadalom és a trópusi fekvés örökségével.",
    "ro": "Asemenea multor locuri importante din Singapore, acesta îmbină densitatea orașului-stat cu moștenirea societății multiculturale chineze-malaeze-indiene-eurasiatice și a poziției tropicale.",
    "en": "Like many notable places in Singapore, it combines the density of the city-state with the legacy of the multicultural Chinese-Malay-Indian-Eurasian society and the tropical setting.",
}

CLOSE = {
    "de": "Damit trägt dieser Ort zum vielseitigen Profil Singapurs zwischen Marina Bay, Gardens by the Bay, dem Hafen, dem Finanzplatz und dem Flughafen Changi bei.",
    "hu": "Ezzel a helyszín hozzájárul Szingapúr sokszínű arculatához, a Marina Bay, a Gardens by the Bay, a kikötő, a pénzügyi központ és a Changi reptér között.",
    "ro": "Astfel, acest loc contribuie la profilul variat al Singaporelui, între Marina Bay, Gardens by the Bay, port, centrul financiar și aeroportul Changi.",
    "en": "Thus, this place contributes to the diverse profile of Singapore, between Marina Bay, Gardens by the Bay, the port, the financial centre and Changi Airport.",
}

GENERIC_FACTS = {
    "de": [
        "Liegt im Stadtstaat Singapur an der Südspitze der Malaiischen Halbinsel.",
        "Wird vom tropischen Regenwaldklima mit hoher Luftfeuchtigkeit ganzjährig geprägt.",
        "Verbunden mit dem Erbe von Stamford Raffles, der britischen Kolonialzeit und der Unabhängigkeit 1965.",
        "Eingebettet in eine Landschaft aus Hochhäusern, Häfen, Inseln und tropischen Grünflächen.",
        "Bekannt für die multikulturelle chinesisch-malaiisch-indisch-eurasische Gesellschaft.",
        "Wichtig für Finanzen, Containerhafen, Raffinerien, Tourismus und den Flughafen Changi.",
        "Geprägt von Marina Bay, Gardens by the Bay und dem Wahrzeichen Merlion.",
        "Teil des kulturellen und natürlichen Erbes Singapurs.",
    ],
    "hu": [
        "A Maláj-félsziget déli csúcsán fekvő Szingapúr városállam területén található.",
        "Egész évben a trópusi esőerdőéghajlat és a magas páratartalom alakítja.",
        "Kapcsolódik Stamford Raffles, a brit gyarmati korszak és az 1965-ös függetlenség örökségéhez.",
        "Felhőkarcolókkal, kikötőkkel, szigetekkel és trópusi zöldterületekkel övezett táj része.",
        "A multikulturális kínai-malaj-indiai-eurázsiai társadalmáról ismert.",
        "Fontos szerepet játszik a pénzügy, a konténerkikötő, a finomítók, az idegenforgalom és a Changi reptér ágazataiban.",
        "Marina Bay, Gardens by the Bay és a Merlion-jelkép határozza meg.",
        "Szingapúr kulturális és természeti örökségének része.",
    ],
    "ro": [
        "Se află în orașul-stat Singapore, la capătul sudic al Peninsulei Malaya.",
        "Este modelat tot anul de climatul tropical de pădure ecuatorială și umiditate ridicată.",
        "Este legat de moștenirea lui Stamford Raffles, a perioadei coloniale britanice și a independenței din 1965.",
        "Este înconjurat de zgârie-nori, porturi, insule și spații verzi tropicale.",
        "Cunoscut pentru societatea multiculturală chineză-malaeză-indiană-eurasiatică.",
        "Important pentru finanțe, portul de containere, rafinării, turism și aeroportul Changi.",
        "Marcat de Marina Bay, Gardens by the Bay și simbolul Merlion.",
        "Face parte din patrimoniul cultural și natural al Singaporelui.",
    ],
    "en": [
        "Located in the city-state of Singapore at the southern tip of the Malay Peninsula.",
        "Shaped year-round by a tropical rainforest climate with high humidity.",
        "Linked to the legacy of Stamford Raffles, the British colonial era and independence in 1965.",
        "Surrounded by skyscrapers, ports, islands and tropical green spaces.",
        "Known for the multicultural Chinese-Malay-Indian-Eurasian society.",
        "Important for finance, the container port, refineries, tourism and Changi Airport.",
        "Marked by Marina Bay, Gardens by the Bay and the Merlion symbol.",
        "Part of Singapore's cultural and natural heritage.",
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


def process_file(path: Path) -> tuple[int, int, int]:
    topic = detect_topic(path.name)
    content = path.read_text(encoding="utf-8")
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
    return poi_count, desc_total, facts_total


def count_empty_before(path: Path) -> tuple[int, int]:
    content = path.read_text(encoding="utf-8")
    blocks = split_pois(content)
    empty_desc = 0
    empty_facts = 0
    for start, end, _id in blocks:
        poi = content[start:end]
        da = find_field_block(poi, "descriptionAdvanced")
        if da:
            txt = poi[da[0]:da[1]]
            for lang in LANGS:
                v = extract_lang_string(txt, lang)
                if v is not None and v.strip() == "":
                    empty_desc += 1
        fa = find_field_block(poi, "factsAdvanced")
        if fa:
            txt = poi[fa[0]:fa[1]]
            for lang in LANGS:
                arr = extract_lang_array(txt, lang)
                if arr is not None and len([x for x in arr if x and x.strip()]) == 0:
                    empty_facts += 1
    return empty_desc, empty_facts


def main():
    print("=== Singapore SEO fill — pre-scan ===")
    pre_desc = pre_facts = 0
    for fname in FILES:
        path = DATA_DIR / fname
        if not path.exists():
            print(f"[skip] {fname} nem letezik")
            continue
        ed, ef = count_empty_before(path)
        pre_desc += ed
        pre_facts += ef
        print(f"  {fname}: ures descAdv={ed}, ures factsAdv={ef}")
    print(f"  OSSZESEN ELOTTE: ures descAdv={pre_desc}, ures factsAdv={pre_facts}\n")

    print("=== Singapore SEO fill — fill ===")
    grand_poi = grand_desc = grand_facts = 0
    for fname in FILES:
        path = DATA_DIR / fname
        if not path.exists():
            continue
        pois, d, fa = process_file(path)
        print(f"  {fname}: {pois} POI, +{d} descriptionAdvanced, +{fa} factsAdvanced")
        grand_poi += pois
        grand_desc += d
        grand_facts += fa
    print(f"\nOSSZESEN: {grand_poi} POI, +{grand_desc} descriptionAdvanced, +{grand_facts} factsAdvanced")


if __name__ == "__main__":
    main()
