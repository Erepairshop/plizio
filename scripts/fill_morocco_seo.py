# -*- coding: utf-8 -*-
"""
fill_morocco_seo.py
====================
Feltolti a poiExtraMorocco*V2.ts fajlok ures `descriptionAdvanced` (string) es
`factsAdvanced` (array) mezoit a sajat nyelvi `name` + `description` + `facts`
forrasbol, sablon-alapon. NEM hasznal mas nyelvet (cross-language szennyezes
elkerulve). Ha a sajat nyelvi forrasok hianyosak, a mezo erintetlen marad.

Mintat kovet: scripts/fill_mozambique_seo.py — Marokko-specifikus topic+frazis
szovegekkel.

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
    "poiExtraMoroccoCitiesV2.ts",
    "poiExtraMoroccoEconomicV2.ts",
    "poiExtraMoroccoHistoryV2.ts",
    "poiExtraMoroccoLandmarksV2.ts",
    "poiExtraMoroccoLifeV2.ts",
    "poiExtraMoroccoNatureV2.ts",
    "poiExtraMoroccoReliefV2.ts",
]

LANGS = ("de", "hu", "ro", "en")


# ----------------------------------------------------------------------------
# Sablonszovegek nyelvenkent (Marokko)
# ----------------------------------------------------------------------------

TOPIC_TEXT = {
    "Cities": {
        "de": "Diese Stadt zählt zu den charakteristischen Siedlungen Marokkos.",
        "hu": "Ez a város Marokkó jellegzetes települései közé tartozik.",
        "ro": "Acest oraș se numără printre așezările caracteristice ale Marocului.",
        "en": "This city is among the characteristic settlements of Morocco.",
    },
    "Economic": {
        "de": "Dieser Standort spielt eine Rolle in der Wirtschaft Marokkos.",
        "hu": "Ez a helyszín szerepet játszik Marokkó gazdaságában.",
        "ro": "Acest loc joacă un rol în economia Marocului.",
        "en": "This location plays a role in the economy of Morocco.",
    },
    "History": {
        "de": "Dieser Ort hat eine besondere Bedeutung in der Geschichte Marokkos.",
        "hu": "Ennek a helyszínnek különleges jelentősége van Marokkó történelmében.",
        "ro": "Acest loc are o importanță deosebită în istoria Marocului.",
        "en": "This site holds particular significance in the history of Morocco.",
    },
    "Landmarks": {
        "de": "Dieses Wahrzeichen ist Teil des kulturellen Erbes Marokkos.",
        "hu": "Ez a nevezetesség Marokkó kulturális örökségének része.",
        "ro": "Acest reper face parte din patrimoniul cultural al Marocului.",
        "en": "This landmark is part of the cultural heritage of Morocco.",
    },
    "Life": {
        "de": "Dieses Schutzgebiet ist Teil der reichen Tier- und Pflanzenwelt Marokkos.",
        "hu": "Ez a védett terület Marokkó gazdag élővilágának része.",
        "ro": "Această arie protejată face parte din bogata faună și floră a Marocului.",
        "en": "This protected area is part of Morocco's rich wildlife and flora.",
    },
    "Nature": {
        "de": "Dieses Naturgebiet zeigt die landschaftliche Vielfalt Marokkos.",
        "hu": "Ez a természeti terület Marokkó tájainak sokszínűségét mutatja.",
        "ro": "Această zonă naturală reflectă diversitatea peisajului Marocului.",
        "en": "This natural area reflects the scenic diversity of Morocco.",
    },
    "Relief": {
        "de": "Diese Geländeform prägt die Topografie Marokkos.",
        "hu": "Ez a domborzati elem Marokkó felszínét alakítja.",
        "ro": "Această formă de relief modelează topografia Marocului.",
        "en": "This landform shapes the topography of Morocco.",
    },
}

INTRO = {
    "de": "{name} ist ein bemerkenswertes Element der marokkanischen Geografie und Kultur.",
    "hu": "A(z) {name} a marokkói földrajz és kultúra figyelemre méltó eleme.",
    "ro": "{name} este un element remarcabil al geografiei și culturii marocane.",
    "en": "{name} is a remarkable feature of the geography and culture of Morocco.",
}

CONNECT = {
    "de": "Wie viele bedeutende Orte in Marokko vereint dieser Ort regionale Eigenheiten und übergreifende Bedeutung.",
    "hu": "Marokkó számos jelentős helyszínéhez hasonlóan ez is ötvözi a regionális sajátosságokat és az általános jelentőséget.",
    "ro": "Asemenea multor locuri importante din Maroc, acesta îmbină particularitățile regionale cu o semnificație mai largă.",
    "en": "Like many notable places in Morocco, it combines regional character with wider significance.",
}

CLOSE = {
    "de": "Damit trägt dieser Ort zum vielseitigen Profil Marokkos bei.",
    "hu": "Ezzel a helyszín hozzájárul Marokkó sokszínű arculatához.",
    "ro": "Astfel, acest loc contribuie la profilul variat al Marocului.",
    "en": "Thus, this place contributes to the diverse profile of Morocco.",
}

GENERIC_FACTS = {
    "de": [
        "Liegt im Gebiet des Königreichs Marokko.",
        "Spielt eine Rolle in der lokalen Identität der Region.",
        "Bekannt für seine landschaftliche oder kulturelle Bedeutung.",
        "Wird in lokalen und regionalen Studien dokumentiert.",
        "Steht unter dem Einfluss des nordwestafrikanischen Klimas.",
        "Wird durch lokale Behörden und Gemeinschaften betreut.",
        "Verbunden mit dem Alltag und der Geschichte der Region.",
        "Teil des kulturellen und natürlichen Erbes des Landes.",
    ],
    "hu": [
        "A Marokkói Királyság területén található.",
        "Szerepet játszik a régió helyi identitásában.",
        "Tájképi vagy kulturális jelentőségéről ismert.",
        "Helyi és regionális tanulmányok dokumentálják.",
        "Az északnyugat-afrikai éghajlat hatásai alá esik.",
        "Helyi önkormányzatok és közösségek gondoskodnak róla.",
        "Kapcsolódik a régió mindennapjaihoz és történelméhez.",
        "Az ország kulturális és természeti örökségének része.",
    ],
    "ro": [
        "Se află pe teritoriul Regatului Maroc.",
        "Are un rol în identitatea locală a regiunii.",
        "Este cunoscut pentru semnificația sa peisagistică sau culturală.",
        "Este documentat în studii locale și regionale.",
        "Se află sub influența climatului din nord-vestul Africii.",
        "Este întreținut de autorități și comunități locale.",
        "Este legat de viața cotidiană și de istoria regiunii.",
        "Face parte din patrimoniul cultural și natural al țării.",
    ],
    "en": [
        "Located within the Kingdom of Morocco.",
        "Plays a role in the local identity of the region.",
        "Known for its scenic or cultural significance.",
        "Documented in local and regional studies.",
        "Falls under the influence of the northwest African climate.",
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


def find_field_block(poi: str, field: str, start_pos: int = 0) -> tuple[int, int] | None:
    pat = re.compile(r'\b' + field + r'\s*:\s*\{')
    m = pat.search(poi, start_pos)
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


def find_all_field_blocks(poi: str, field: str) -> list[tuple[int, int]]:
    blocks = []
    pos = 0
    while True:
        b = find_field_block(poi, field, pos)
        if b is None:
            break
        blocks.append(b)
        pos = b[1]
    return blocks


def js_string_literal(s: str) -> str:
    return '"' + s.replace("\\", "\\\\").replace('"', '\\"') + '"'


def js_array_literal(items: list[str]) -> str:
    return "[" + ", ".join(js_string_literal(x) for x in items) + "]"


def insert_lang_entry(field_block: str, lang: str, value_repr: str) -> str:
    """Beszuria a `lang: <value_repr>` parost a `{ ... }` blokk vegere a `}` ele.
    Megorzi a relativ behuzast: a meglevo entries-ek behuzasat probalja kovetni.
    """
    last_brace = field_block.rfind("}")
    if last_brace < 0:
        return field_block
    # Find indentation of an existing entry (line containing 'lang_name:')
    # Use the most recent `\n  ...lang:` style indent.
    indent_match = re.search(r'\n([ \t]+)(?:de|hu|ro|en)\s*:', field_block)
    indent = indent_match.group(1) if indent_match else "      "
    before = field_block[:last_brace].rstrip()
    # Trim trailing comma if any (we'll re-add with comma between entries).
    if before.endswith(","):
        before_clean = before
    elif before.endswith("{"):
        # empty block: no leading comma
        before_clean = before
    else:
        before_clean = before + ","
    new_entry = f"\n{indent}{lang}: {value_repr}"
    after = field_block[last_brace:]
    # Determine closing brace indent (one level less than entry indent)
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

    # Ha a descriptionAdvanced/factsAdvanced mezo teljesen hianyzik, beszurjuk
    # ures vazat a `facts` blokk utan, hogy a tovabbi fill logika dolgozhasson rajta.
    if facts_blk and not find_field_block(poi, "descriptionAdvanced"):
        # Find indentation of facts field line
        # Use the indent of the line where 'facts:' appears
        line_start = poi.rfind("\n", 0, facts_blk[0]) + 1
        # leading whitespace before 'facts:'
        # facts_blk[0] is `{`; find the 'facts' keyword start
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
        # facts_blk position unchanged; descriptionAdvanced now exists right after.

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

    # descriptionAdvanced — minden elofordulasra (duplikalt blokkok lehetnek)
    # Hatulrol elore megyunk, hogy az indexek ne csusszanjanak el.
    da_blks = find_all_field_blocks(poi, "descriptionAdvanced")
    for da_blk in reversed(da_blks):
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

    # factsAdvanced — minden elofordulasra
    fa_blks = find_all_field_blocks(poi, "factsAdvanced")
    for fa_blk in reversed(fa_blks):
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
