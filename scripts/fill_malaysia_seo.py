# -*- coding: utf-8 -*-
"""
fill_malaysia_seo.py
====================
Feltolti a poiExtraMalaysia*V2.ts fajlok ures `descriptionAdvanced` (string) es
`factsAdvanced` (array) mezoit a sajat nyelvi `name` + `description` + `facts`
forrasbol, sablon-alapon. NEM hasznal mas nyelvet (cross-language szennyezes
elkerulve). Ha a sajat nyelvi forrasok hianyosak, a mezo erintetlen marad.

Mintat kovet: scripts/fill_thailand_seo.py — Malajzia-specifikus topic+frazis
szovegekkel (Malaj-felsziget, Borneo / Sabah / Sarawak, Kuala Lumpur, Petronas
tornyok, tropikus esoerdo, palmaolaj, elektronika, multikulturalis malaj-kinai-
indiai tarsadalom).

Csak az egyertelmuen ures mezoket toltjuk fel:
- descriptionAdvanced: `de: ""`, `hu: ""`, `ro: ""`, `en: ""`
- factsAdvanced:       `de: []`, `hu: []`, `ro: []`, `en: []`

Cel:
- descriptionAdvanced: ~80-150 szavas termeszetes nyelvu prozaja
- factsAdvanced: 6-8 elem
"""

from __future__ import annotations
import re
from pathlib import Path

REPO = r"C:/Users/User/plizio-repo"
DATA_DIR = Path(REPO) / "lib" / "visualLab" / "data"

FILES = [
    "poiExtraMalaysiaCitiesV2.ts",
    "poiExtraMalaysiaEconomicV2.ts",
    "poiExtraMalaysiaHistoryV2.ts",
    "poiExtraMalaysiaLandmarksV2.ts",
    "poiExtraMalaysiaLifeV2.ts",
    "poiExtraMalaysiaNatureV2.ts",
    "poiExtraMalaysiaReliefV2.ts",
]

LANGS = ("de", "hu", "ro", "en")


# ----------------------------------------------------------------------------
# Sablonszovegek nyelvenkent (Malajzia)
# ----------------------------------------------------------------------------

TOPIC_TEXT = {
    "Cities": {
        "de": "Diese Stadt zählt zu den charakteristischen Siedlungen Malaysias, ob auf der Malaiischen Halbinsel oder auf Borneo in Sabah und Sarawak.",
        "hu": "Ez a város Malajzia jellegzetes települései közé tartozik, akár a Maláj-félszigeten, akár Borneó szigetén Sabah és Sarawak államban.",
        "ro": "Acest oraș se numără printre așezările caracteristice ale Malaeziei, fie pe Peninsula Malaya, fie pe insula Borneo, în Sabah și Sarawak.",
        "en": "This city is among the characteristic settlements of Malaysia, set either on the Malay Peninsula or on Borneo in Sabah and Sarawak.",
    },
    "Economic": {
        "de": "Dieser Standort spielt eine Rolle in der Wirtschaft Malaysias, geprägt von Palmöl, Elektronikindustrie, Erdöl, Erdgas und Tourismus.",
        "hu": "Ez a helyszín szerepet játszik Malajzia gazdaságában, amelyet a pálmaolaj, az elektronikai ipar, a kőolaj, a földgáz és a turizmus határoz meg.",
        "ro": "Acest loc joacă un rol în economia Malaeziei, marcată de uleiul de palmier, industria electronică, petrol, gaze naturale și turism.",
        "en": "This location plays a role in the economy of Malaysia, shaped by palm oil, electronics manufacturing, oil and gas, and tourism.",
    },
    "History": {
        "de": "Dieser Ort hat eine besondere Bedeutung in der Geschichte Malaysias, vom Sultanat Malakka über die britische Kolonialzeit bis zur Unabhängigkeit 1957.",
        "hu": "Ennek a helyszínnek különleges jelentősége van Malajzia történelmében, a Malakkai Szultánságtól a brit gyarmati időszakon át az 1957-es függetlenségig.",
        "ro": "Acest loc are o importanță deosebită în istoria Malaeziei, de la Sultanatul Malacca, prin perioada colonială britanică, până la independența din 1957.",
        "en": "This site holds particular significance in the history of Malaysia, from the Malacca Sultanate through British colonial rule to independence in 1957.",
    },
    "Landmarks": {
        "de": "Dieses Wahrzeichen ist Teil des kulturellen Erbes Malaysias, oft verbunden mit den Petronas Towers, Moscheen, chinesischen Tempeln und kolonialen Bauten.",
        "hu": "Ez a nevezetesség Malajzia kulturális örökségének része, gyakran a Petronas-tornyokhoz, mecsetekhez, kínai templomokhoz és gyarmati épületekhez kötődik.",
        "ro": "Acest reper face parte din patrimoniul cultural al Malaeziei, adesea legat de Turnurile Petronas, moschei, temple chinezești și clădiri coloniale.",
        "en": "This landmark is part of the cultural heritage of Malaysia, often linked to the Petronas Towers, mosques, Chinese temples and colonial-era buildings.",
    },
    "Life": {
        "de": "Dieses Schutzgebiet ist Teil der reichen Tier- und Pflanzenwelt Malaysias, mit tropischen Regenwäldern, Orang-Utans, Nashornvögeln und Mangrovenküsten.",
        "hu": "Ez a védett terület Malajzia gazdag élővilágának része, trópusi esőerdőkkel, orangutánokkal, szarvascsőrű madarakkal és mangrove partokkal.",
        "ro": "Această arie protejată face parte din bogata faună și floră a Malaeziei, cu păduri tropicale, urangutani, păsări rinocer și coaste cu mangrove.",
        "en": "This protected area is part of Malaysia's rich wildlife and flora, with tropical rainforests, orangutans, hornbills and mangrove coastlines.",
    },
    "Nature": {
        "de": "Dieses Naturgebiet zeigt die landschaftliche Vielfalt Malaysias, von der Malaiischen Halbinsel über die Inseln der Straße von Malakka bis zu Borneo.",
        "hu": "Ez a természeti terület Malajzia tájainak sokszínűségét mutatja, a Maláj-félszigettől a Malakkai-szoros szigetein át Borneóig.",
        "ro": "Această zonă naturală reflectă diversitatea peisajului Malaeziei, de la Peninsula Malaya, prin insulele Strâmtorii Malacca, până în Borneo.",
        "en": "This natural area reflects the scenic diversity of Malaysia, from the Malay Peninsula through the islands of the Strait of Malacca to Borneo.",
    },
    "Relief": {
        "de": "Diese Geländeform prägt die Topografie Malaysias, von den Titiwangsa-Bergen der Halbinsel bis zum Kinabalu in Sabah und den Küstenebenen am Südchinesischen Meer.",
        "hu": "Ez a domborzati elem Malajzia felszínét alakítja, a félsziget Titiwangsa-hegységétől a sabahi Kinabaluig és a Dél-kínai-tenger menti partvidékekig.",
        "ro": "Această formă de relief modelează topografia Malaeziei, de la munții Titiwangsa de pe peninsulă până la Kinabalu în Sabah și câmpiile de coastă ale Mării Chinei de Sud.",
        "en": "This landform shapes the topography of Malaysia, from the Titiwangsa Range on the peninsula to Mount Kinabalu in Sabah and the coastal plains along the South China Sea.",
    },
}

INTRO = {
    "de": "{name} ist ein bemerkenswertes Element der malaysischen Geografie und Kultur.",
    "hu": "A(z) {name} a malajziai földrajz és kultúra figyelemre méltó eleme.",
    "ro": "{name} este un element remarcabil al geografiei și culturii malaeziene.",
    "en": "{name} is a remarkable feature of the geography and culture of Malaysia.",
}

CONNECT = {
    "de": "Wie viele bedeutende Orte in Malaysia vereint dieser Ort regionale Eigenheiten mit dem Erbe der multikulturellen malaiisch-chinesisch-indischen Gesellschaft und der Tropen.",
    "hu": "Malajzia számos jelentős helyszínéhez hasonlóan ez is ötvözi a regionális sajátosságokat a multikulturális malaj-kínai-indiai társadalom és a trópusok örökségével.",
    "ro": "Asemenea multor locuri importante din Malaezia, acesta îmbină particularitățile regionale cu moștenirea societății multiculturale malaeze-chineze-indiene și a tropicelor.",
    "en": "Like many notable places in Malaysia, it combines regional character with the legacy of the multicultural Malay-Chinese-Indian society and the tropics.",
}

CLOSE = {
    "de": "Damit trägt dieser Ort zum vielseitigen Profil Malaysias zwischen Kuala Lumpur, Borneo, Palmölplantagen und tropischem Regenwald bei.",
    "hu": "Ezzel a helyszín hozzájárul Malajzia sokszínű arculatához, Kuala Lumpur, Borneó, a pálmaolaj-ültetvények és a trópusi esőerdő között.",
    "ro": "Astfel, acest loc contribuie la profilul variat al Malaeziei, între Kuala Lumpur, Borneo, plantațiile de palmier și pădurea tropicală.",
    "en": "Thus, this place contributes to the diverse profile of Malaysia, between Kuala Lumpur, Borneo, palm oil plantations and tropical rainforest.",
}

GENERIC_FACTS = {
    "de": [
        "Liegt im Gebiet der Föderation Malaysia.",
        "Wird vom tropischen Monsunklima Südostasiens geprägt.",
        "Verbunden mit dem Erbe des Sultanats Malakka und der britischen Kolonialzeit.",
        "Steht entweder auf der Malaiischen Halbinsel oder auf Borneo (Sabah, Sarawak).",
        "Eingebettet in eine Landschaft aus Regenwäldern, Palmölplantagen und Küsten.",
        "Bekannt für die multikulturelle malaiisch-chinesisch-indische Gesellschaft.",
        "Wichtig für Palmöl, Elektronik, Erdöl, Erdgas oder Tourismus.",
        "Teil des kulturellen und natürlichen Erbes Malaysias.",
    ],
    "hu": [
        "A Malajziai Szövetség területén található.",
        "A délkelet-ázsiai trópusi monszunéghajlat alakítja.",
        "Kapcsolódik a Malakkai Szultánság és a brit gyarmati korszak örökségéhez.",
        "Vagy a Maláj-félszigeten, vagy Borneó szigetén (Sabah, Sarawak) helyezkedik el.",
        "Esőerdőkkel, pálmaolaj-ültetvényekkel és tengerpartokkal övezett táj része.",
        "A multikulturális malaj-kínai-indiai társadalmáról ismert.",
        "Fontos szerepet játszik a pálmaolaj-, elektronikai, kőolaj-, földgáz- vagy idegenforgalmi ágazatban.",
        "Malajzia kulturális és természeti örökségének része.",
    ],
    "ro": [
        "Se află pe teritoriul Federației Malaeziei.",
        "Este modelat de climatul musonic tropical din Asia de Sud-Est.",
        "Este legat de moștenirea Sultanatului Malacca și a perioadei coloniale britanice.",
        "Se află fie pe Peninsula Malaya, fie pe insula Borneo (Sabah, Sarawak).",
        "Este înconjurat de păduri tropicale, plantații de palmier și coaste.",
        "Cunoscut pentru societatea multiculturală malaeză-chineză-indiană.",
        "Important pentru uleiul de palmier, electronică, petrol, gaze naturale sau turism.",
        "Face parte din patrimoniul cultural și natural al Malaeziei.",
    ],
    "en": [
        "Located within the Federation of Malaysia.",
        "Shaped by the tropical monsoon climate of Southeast Asia.",
        "Linked to the heritage of the Malacca Sultanate and the British colonial era.",
        "Lies either on the Malay Peninsula or on Borneo (Sabah, Sarawak).",
        "Surrounded by rainforests, palm oil plantations and coastlines.",
        "Known for the multicultural Malay-Chinese-Indian society.",
        "Important for palm oil, electronics, oil and gas, or tourism.",
        "Part of Malaysia's cultural and natural heritage.",
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
    """Megszamolja az ures descriptionAdvanced/factsAdvanced lang mezoket."""
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
    print("=== Malaysia SEO fill — pre-scan ===")
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

    print("=== Malaysia SEO fill — fill ===")
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
