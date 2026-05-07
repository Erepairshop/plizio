# -*- coding: utf-8 -*-
"""
fill_libya_seo.py
==================
Feltolti a poiExtraLibya*V2.ts fajlok ures `descriptionAdvanced` (string) es
`factsAdvanced` (array) mezoit a sajat nyelvi `name` + `description` + `facts`
forrasbol, sablon-alapon. NEM hasznal mas nyelvet (cross-language szennyezes
elkerulve). Ha a sajat nyelvi forrasok hianyosak, a mezo erintetlen marad.

Mintat kovet: scripts/fill_algeria_seo.py, scripts/fill_egypt_seo.py — Libya-specifikus
topic+frazis szovegekkel: Szahara, Foldkozi-tenger partvidek, Tripoli, Bengazi,
Leptis Magna okori romok, koolaj/foldgaz, fenekviz/Great Man-Made River.

Csak a regex-szinten egyertelmuen ures mezoket toltjuk fel:
- descriptionAdvanced: `de: ""`, `hu: ""`, `ro: ""`, `en: ""`
- factsAdvanced:       `de: []`, `hu: []`, `ro: []`, `en: []`

Cel:
- descriptionAdvanced: ~80-150 szavas termeszetes nyelvu prozaja
- factsAdvanced: 6-8 elem
"""

from __future__ import annotations
import os
import re
import sys
from pathlib import Path

REPO = r"C:/Users/User/plizio-repo"
DATA_DIR = Path(REPO) / "lib" / "visualLab" / "data"

FILES = [
    "poiExtraLibyaCitiesV2.ts",
    "poiExtraLibyaEconomicV2.ts",
    "poiExtraLibyaHistoryV2.ts",
    "poiExtraLibyaLandmarksV2.ts",
    "poiExtraLibyaLifeV2.ts",
    "poiExtraLibyaNatureV2.ts",
    "poiExtraLibyaReliefV2.ts",
]

LANGS = ("de", "hu", "ro", "en")


# ----------------------------------------------------------------------------
# Sablonszovegek nyelvenkent (Libya)
# ----------------------------------------------------------------------------

TOPIC_TEXT = {
    "Cities": {
        "de": "Diese Stadt zählt zu den charakteristischen Siedlungen Libyens, zwischen der Mittelmeerküste rund um Tripolis und Bengasi und den Weiten der Sahara.",
        "hu": "Ez a város Líbia jellegzetes települései közé tartozik, a Tripoli és Bengázi körüli földközi-tengeri partvidék és a Szahara végtelenje között.",
        "ro": "Acest oraș se numără printre așezările caracteristice ale Libiei, între coasta mediteraneană din jurul orașelor Tripoli și Bengazi și întinderile Saharei.",
        "en": "This city is among the characteristic settlements of Libya, between the Mediterranean coast around Tripoli and Benghazi and the vast Sahara.",
    },
    "Economic": {
        "de": "Dieser Standort spielt eine Rolle in der libyschen Wirtschaft, die stark von Erdöl- und Erdgasförderung sowie von fossilem Tiefenwasser geprägt ist.",
        "hu": "Ez a helyszín szerepet játszik Líbia gazdaságában, amelyet erősen meghatároz a kőolaj- és földgázkitermelés, valamint a mélységi fosszilis vízkészletek hasznosítása.",
        "ro": "Acest loc joacă un rol în economia Libiei, puternic marcată de extracția de petrol și gaze naturale și de utilizarea apelor fosile de adâncime.",
        "en": "This location plays a role in the economy of Libya, strongly shaped by oil and natural gas extraction and by the use of deep fossil groundwater.",
    },
    "History": {
        "de": "Dieser Ort hat eine besondere Bedeutung in der Geschichte Libyens, von den phönizischen und römischen Siedlungen wie Leptis Magna bis zur osmanischen und modernen Epoche.",
        "hu": "Ennek a helyszínnek különleges jelentősége van Líbia történelmében, a föníciai és római településektől, mint Leptis Magna, az oszmán és modern korszakig.",
        "ro": "Acest loc are o importanță deosebită în istoria Libiei, de la așezările feniciene și romane precum Leptis Magna, până la epoca otomană și cea modernă.",
        "en": "This site holds particular significance in the history of Libya, from Phoenician and Roman settlements such as Leptis Magna to the Ottoman and modern eras.",
    },
    "Landmarks": {
        "de": "Dieses Wahrzeichen ist Teil des kulturellen Erbes Libyens und spiegelt punisch-römische, arabische, berberische und mediterrane Einflüsse wider.",
        "hu": "Ez a nevezetesség Líbia kulturális örökségének része, és föníciai-római, arab, berber valamint mediterrán hatásokat tükröz.",
        "ro": "Acest reper face parte din patrimoniul cultural al Libiei și reflectă influențe punico-romane, arabe, berbere și mediteraneene.",
        "en": "This landmark is part of the cultural heritage of Libya, reflecting Punic-Roman, Arab, Berber and Mediterranean influences.",
    },
    "Life": {
        "de": "Dieses Schutzgebiet ist Teil der Tier- und Pflanzenwelt Libyens, von der Mittelmeerküste über die Halbwüsten bis tief in die Sahara.",
        "hu": "Ez a védett terület Líbia élővilágának része, a Földközi-tenger partjától a félsivatagokon át a Szahara mélyéig.",
        "ro": "Această arie protejată face parte din fauna și flora Libiei, de la coasta mediteraneană prin semideșerturi până în adâncul Saharei.",
        "en": "This protected area is part of Libya's wildlife and flora, from the Mediterranean coast through semi-deserts deep into the Sahara.",
    },
    "Nature": {
        "de": "Dieses Naturgebiet zeigt die landschaftliche Vielfalt Libyens, vom Mittelmeer über die Küstenebenen bis zu den Sandmeeren und Felsplateaus der Sahara.",
        "hu": "Ez a természeti terület Líbia tájainak sokszínűségét mutatja, a Földközi-tengertől a parti síkságokon át a Szahara homoktengereiig és sziklafennsíkjaiig.",
        "ro": "Această zonă naturală reflectă diversitatea peisajului Libiei, de la Mediterana, prin câmpiile costiere, până la mările de nisip și platourile stâncoase ale Saharei.",
        "en": "This natural area reflects the scenic diversity of Libya, from the Mediterranean across coastal plains to the sand seas and rocky plateaus of the Sahara.",
    },
    "Relief": {
        "de": "Diese Geländeform prägt die Topografie Libyens, eines weitgehend von der Sahara bedeckten Landes mit schmalem Mittelmeerstreifen und Bergmassiven wie dem Tibesti im Süden.",
        "hu": "Ez a domborzati elem Líbia felszínét alakítja, egy túlnyomórészt a Szahara által borított országét, amelynek keskeny földközi-tengeri partsávja és olyan hegytömbjei vannak, mint a déli Tibeszti.",
        "ro": "Această formă de relief modelează topografia Libiei, o țară acoperită în mare parte de Sahara, cu o fâșie îngustă mediteraneană și masive precum Tibesti în sud.",
        "en": "This landform shapes the topography of Libya, a country largely covered by the Sahara, with a narrow Mediterranean strip and mountain massifs such as Tibesti in the south.",
    },
}

INTRO = {
    "de": "{name} ist ein bemerkenswertes Element der libyschen Geografie und Kultur.",
    "hu": "A(z) {name} a líbiai földrajz és kultúra figyelemre méltó eleme.",
    "ro": "{name} este un element remarcabil al geografiei și culturii libiene.",
    "en": "{name} is a remarkable feature of the geography and culture of Libya.",
}

CONNECT = {
    "de": "Wie viele bedeutende Orte in Libyen vereint dieser Ort punisch-römisches und berberisches Erbe mit mediterranen und saharischen Einflüssen.",
    "hu": "Líbia számos jelentős helyszínéhez hasonlóan ez is ötvözi a föníciai-római és berber örökséget a mediterrán és szaharai hatásokkal.",
    "ro": "Asemenea multor locuri importante din Libia, acesta îmbină moștenirea punico-romană și berberă cu influențele mediteraneene și sahariene.",
    "en": "Like many notable places in Libya, it combines Punic-Roman and Berber heritage with Mediterranean and Saharan influences.",
}

CLOSE = {
    "de": "Damit trägt dieser Ort zum vielseitigen Profil Libyens bei, zwischen antiken Ruinen, Wüstenoasen und der Küste am Mittelmeer.",
    "hu": "Ezzel a helyszín hozzájárul Líbia sokszínű arculatához, az ókori romok, a sivatagi oázisok és a földközi-tengeri partvidék között.",
    "ro": "Astfel, acest loc contribuie la profilul variat al Libiei, între ruinele antice, oazele deșertului și coasta Mediteranei.",
    "en": "Thus, this place contributes to the diverse profile of Libya, between ancient ruins, desert oases and the Mediterranean coast.",
}

GENERIC_FACTS = {
    "de": [
        "Liegt im Gebiet des Staates Libyen in Nordafrika.",
        "Spielt eine Rolle in der lokalen Identität der Region.",
        "Bekannt für seine landschaftliche oder kulturelle Bedeutung.",
        "Wird in lokalen und regionalen Studien dokumentiert.",
        "Steht unter dem Einfluss des Klimas zwischen Mittelmeer und Sahara.",
        "Wird durch lokale Behörden und Gemeinschaften betreut.",
        "Verbunden mit dem berberischen, arabischen und punisch-römischen Erbe der Region.",
        "Teil des kulturellen und natürlichen Erbes Libyens.",
    ],
    "hu": [
        "Líbia államának területén, Észak-Afrikában található.",
        "Szerepet játszik a régió helyi identitásában.",
        "Tájképi vagy kulturális jelentőségéről ismert.",
        "Helyi és regionális tanulmányok dokumentálják.",
        "A Földközi-tenger és a Szahara közötti éghajlat hatásai alá esik.",
        "Helyi önkormányzatok és közösségek gondoskodnak róla.",
        "Kapcsolódik a régió berber, arab és föníciai-római örökségéhez.",
        "Líbia kulturális és természeti örökségének része.",
    ],
    "ro": [
        "Se află pe teritoriul statului Libia, în Africa de Nord.",
        "Are un rol în identitatea locală a regiunii.",
        "Este cunoscut pentru semnificația sa peisagistică sau culturală.",
        "Este documentat în studii locale și regionale.",
        "Se află sub influența climatului dintre Mediterana și Sahara.",
        "Este întreținut de autorități și comunități locale.",
        "Este legat de moștenirea berberă, arabă și punico-romană a regiunii.",
        "Face parte din patrimoniul cultural și natural al Libiei.",
    ],
    "en": [
        "Located within the State of Libya in North Africa.",
        "Plays a role in the local identity of the region.",
        "Known for its scenic or cultural significance.",
        "Documented in local and regional studies.",
        "Falls under the influence of the climate between the Mediterranean and the Sahara.",
        "Maintained by local authorities and communities.",
        "Connected to the Berber, Arab and Punic-Roman heritage of the region.",
        "Part of Libya's cultural and natural heritage.",
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


def main():
    grand_poi = grand_desc = grand_facts = 0
    for fname in FILES:
        path = DATA_DIR / fname
        if not path.exists():
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
