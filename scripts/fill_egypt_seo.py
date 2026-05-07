# -*- coding: utf-8 -*-
"""
fill_egypt_seo.py
==================
Feltolti a poiExtraEgypt*V2.ts fajlok ures `descriptionAdvanced` (string) es
`factsAdvanced` (array) mezoit a sajat nyelvi `name` + `description` + `facts`
forrasbol, sablon-alapon. NEM hasznal mas nyelvet (cross-language szennyezes
elkerulve). Ha a sajat nyelvi forrasok hianyosak, a mezo erintetlen marad.

Mintat kovet: scripts/fill_morocco_seo.py / fill_sudan_seo.py — Egyiptom-
specifikus topic+frazis szovegekkel: Nilus, piramisok, Szahara, Voros-tenger,
faraok orokseg, Szuezi-csatorna.

Csak a regex-szinten egyertelmuen ures mezoket toltjuk fel:
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
    "poiExtraEgyptCitiesV2.ts",
    "poiExtraEgyptEconomicV2.ts",
    "poiExtraEgyptHistoryV2.ts",
    "poiExtraEgyptLandmarksV2.ts",
    "poiExtraEgyptLifeV2.ts",
    "poiExtraEgyptNatureV2.ts",
    "poiExtraEgyptReliefV2.ts",
]

LANGS = ("de", "hu", "ro", "en")


# ----------------------------------------------------------------------------
# Sablonszovegek nyelvenkent (Egyiptom)
# ----------------------------------------------------------------------------

TOPIC_TEXT = {
    "Cities": {
        "de": "Diese Stadt zählt zu den charakteristischen Siedlungen Ägyptens, oft entlang des Nils oder am Roten Meer.",
        "hu": "Ez a város Egyiptom jellegzetes települései közé tartozik, gyakran a Nílus mentén vagy a Vörös-tenger partján.",
        "ro": "Acest oraș se numără printre așezările caracteristice ale Egiptului, adesea de-a lungul Nilului sau la Marea Roșie.",
        "en": "This city is among the characteristic settlements of Egypt, often along the Nile or on the Red Sea coast.",
    },
    "Economic": {
        "de": "Dieser Standort spielt eine Rolle in der Wirtschaft Ägyptens, geprägt vom Nil, dem Suezkanal und dem Tourismus.",
        "hu": "Ez a helyszín szerepet játszik Egyiptom gazdaságában, amelyet a Nílus, a Szuezi-csatorna és a turizmus alakít.",
        "ro": "Acest loc joacă un rol în economia Egiptului, modelată de Nil, Canalul Suez și turism.",
        "en": "This location plays a role in the economy of Egypt, shaped by the Nile, the Suez Canal and tourism.",
    },
    "History": {
        "de": "Dieser Ort hat eine besondere Bedeutung in der Geschichte Ägyptens, vom pharaonischen Erbe bis zur Neuzeit.",
        "hu": "Ennek a helyszínnek különleges jelentősége van Egyiptom történelmében, a fáraók örökségétől napjainkig.",
        "ro": "Acest loc are o importanță deosebită în istoria Egiptului, de la moștenirea faraonică până în epoca modernă.",
        "en": "This site holds particular significance in the history of Egypt, from pharaonic heritage to modern times.",
    },
    "Landmarks": {
        "de": "Dieses Wahrzeichen ist Teil des kulturellen Erbes Ägyptens, das durch Pyramiden, Tempel und Nilstädte geprägt ist.",
        "hu": "Ez a nevezetesség Egyiptom kulturális örökségének része, amelyet piramisok, templomok és nílusi városok jellemeznek.",
        "ro": "Acest reper face parte din patrimoniul cultural al Egiptului, marcat de piramide, temple și orașe nilotice.",
        "en": "This landmark is part of Egypt's cultural heritage, shaped by pyramids, temples and Nile cities.",
    },
    "Life": {
        "de": "Dieses Schutzgebiet ist Teil der Tier- und Pflanzenwelt Ägyptens, zwischen Nil, Wüste und Rotem Meer.",
        "hu": "Ez a védett terület Egyiptom élővilágának része, a Nílus, a sivatag és a Vörös-tenger között.",
        "ro": "Această arie protejată face parte din fauna și flora Egiptului, între Nil, deșert și Marea Roșie.",
        "en": "This protected area is part of Egypt's wildlife and flora, between the Nile, desert and Red Sea.",
    },
    "Nature": {
        "de": "Dieses Naturgebiet zeigt die landschaftliche Vielfalt Ägyptens, von Nil-Oasen bis zur Sahara.",
        "hu": "Ez a természeti terület Egyiptom tájainak sokszínűségét mutatja, a Nílus oázisaitól a Szaharáig.",
        "ro": "Această zonă naturală reflectă diversitatea peisajului Egiptului, de la oazele Nilului până la Sahara.",
        "en": "This natural area reflects the scenic diversity of Egypt, from Nile oases to the Sahara.",
    },
    "Relief": {
        "de": "Diese Geländeform prägt die Topografie Ägyptens, zwischen Nil-Tal, Wüstenplateaus und Sinai.",
        "hu": "Ez a domborzati elem Egyiptom felszínét alakítja, a Nílus völgye, sivatagi fennsíkok és a Sínai-félsziget között.",
        "ro": "Această formă de relief modelează topografia Egiptului, între valea Nilului, platouri deșertice și Sinai.",
        "en": "This landform shapes the topography of Egypt, between the Nile valley, desert plateaus and Sinai.",
    },
}

INTRO = {
    "de": "{name} ist ein bemerkenswertes Element der Geografie und Kultur Ägyptens.",
    "hu": "A(z) {name} az egyiptomi földrajz és kultúra figyelemre méltó eleme.",
    "ro": "{name} este un element remarcabil al geografiei și culturii Egiptului.",
    "en": "{name} is a remarkable feature of the geography and culture of Egypt.",
}

CONNECT = {
    "de": "Wie viele bedeutende Orte in Ägypten verbindet dieser Ort das Erbe der Pharaonen mit dem heutigen Leben am Nil.",
    "hu": "Egyiptom számos jelentős helyszínéhez hasonlóan ez is összeköti a fáraók örökségét a mai nílusi élettel.",
    "ro": "Asemenea multor locuri importante din Egipt, acesta îmbină moștenirea faraonilor cu viața de astăzi de pe Nil.",
    "en": "Like many notable places in Egypt, it links the pharaonic heritage with present-day life along the Nile.",
}

CLOSE = {
    "de": "Damit trägt dieser Ort zum vielseitigen Profil Ägyptens zwischen Sahara, Nil, Suezkanal und Rotem Meer bei.",
    "hu": "Ezzel a helyszín hozzájárul Egyiptom sokszínű arculatához a Szahara, a Nílus, a Szuezi-csatorna és a Vörös-tenger között.",
    "ro": "Astfel, acest loc contribuie la profilul variat al Egiptului între Sahara, Nil, Canalul Suez și Marea Roșie.",
    "en": "Thus, this place contributes to the diverse profile of Egypt between the Sahara, the Nile, the Suez Canal and the Red Sea.",
}

GENERIC_FACTS = {
    "de": [
        "Liegt im Gebiet der Arabischen Republik Ägypten.",
        "Steht in Verbindung mit dem Nil oder dem benachbarten Wüstenraum.",
        "Wird vom heißen Wüstenklima Nordostafrikas geprägt.",
        "Bekannt für seine landschaftliche oder kulturhistorische Bedeutung.",
        "Wird in lokalen und regionalen Studien dokumentiert.",
        "Wird durch lokale Behörden und Gemeinschaften betreut.",
        "Verbunden mit dem pharaonischen Erbe und dem heutigen Alltag.",
        "Teil des kulturellen und natürlichen Erbes Ägyptens.",
    ],
    "hu": [
        "Az Egyiptomi Arab Köztársaság területén található.",
        "Kapcsolódik a Nílushoz vagy a környező sivatagi térséghez.",
        "Az északkelet-afrikai forró sivatagi éghajlat alakítja.",
        "Tájképi vagy kultúrtörténeti jelentőségéről ismert.",
        "Helyi és regionális tanulmányok dokumentálják.",
        "Helyi önkormányzatok és közösségek gondoskodnak róla.",
        "Kapcsolódik a fáraók örökségéhez és a mai mindennapokhoz.",
        "Egyiptom kulturális és természeti örökségének része.",
    ],
    "ro": [
        "Se află pe teritoriul Republicii Arabe Egipt.",
        "Este legat de Nil sau de spațiul deșertic învecinat.",
        "Este modelat de clima caldă deșertică din nord-estul Africii.",
        "Este cunoscut pentru semnificația sa peisagistică sau cultural-istorică.",
        "Este documentat în studii locale și regionale.",
        "Este întreținut de autorități și comunități locale.",
        "Este legat de moștenirea faraonică și de viața cotidiană.",
        "Face parte din patrimoniul cultural și natural al Egiptului.",
    ],
    "en": [
        "Located within the Arab Republic of Egypt.",
        "Connected with the Nile or the surrounding desert area.",
        "Shaped by the hot desert climate of northeastern Africa.",
        "Known for its scenic or cultural-historical significance.",
        "Documented in local and regional studies.",
        "Maintained by local authorities and communities.",
        "Linked to the pharaonic heritage and everyday life today.",
        "Part of Egypt's cultural and natural heritage.",
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


def count_empty(content: str) -> tuple[int, int]:
    """Megszamolja az ures `de/hu/ro/en: ""` es `de/hu/ro/en: []` mezoket
    a descriptionAdvanced/factsAdvanced blokkokban."""
    blocks = split_pois(content)
    empty_desc = 0
    empty_facts = 0
    for start, end, _id in blocks:
        poi = content[start:end]
        da = find_field_block(poi, "descriptionAdvanced")
        if da:
            da_text = poi[da[0]:da[1]]
            for lang in LANGS:
                if re.search(r'\b' + lang + r'\s*:\s*""', da_text):
                    empty_desc += 1
        fa = find_field_block(poi, "factsAdvanced")
        if fa:
            fa_text = poi[fa[0]:fa[1]]
            for lang in LANGS:
                if re.search(r'\b' + lang + r'\s*:\s*\[\s*\]', fa_text):
                    empty_facts += 1
    return empty_desc, empty_facts


def process_file(path: Path) -> tuple[int, int, int, int, int]:
    topic = detect_topic(path.name)
    content = path.read_text(encoding="utf-8")
    pre_empty_desc, pre_empty_facts = count_empty(content)
    blocks = split_pois(content)
    if not blocks:
        return (0, 0, 0, pre_empty_desc, pre_empty_facts)
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
    return poi_count, desc_total, facts_total, pre_empty_desc, pre_empty_facts


def main():
    grand_poi = grand_desc = grand_facts = 0
    grand_pre_d = grand_pre_f = 0
    for fname in FILES:
        path = DATA_DIR / fname
        if not path.exists():
            print(f"[skip] {fname} nem letezik")
            continue
        pois, d, fa, pre_d, pre_f = process_file(path)
        print(f"{fname}: {pois} POI, ures elotte d/f={pre_d}/{pre_f}, +{d} descriptionAdvanced, +{fa} factsAdvanced")
        grand_poi += pois
        grand_desc += d
        grand_facts += fa
        grand_pre_d += pre_d
        grand_pre_f += pre_f
    print(
        f"\nOSSZESEN: {grand_poi} POI, ures elotte d/f={grand_pre_d}/{grand_pre_f}, "
        f"+{grand_desc} descriptionAdvanced, +{grand_facts} factsAdvanced"
    )


if __name__ == "__main__":
    main()
