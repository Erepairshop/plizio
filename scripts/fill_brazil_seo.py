# -*- coding: utf-8 -*-
"""
fill_brazil_seo.py
====================
Feltolti a poiExtraBrazil*V2.ts fajlok ures `descriptionAdvanced` (string) es
`factsAdvanced` (array) mezoit a sajat nyelvi `name` + `description` + `facts`
forrasbol, sablon-alapon. NEM hasznal mas nyelvet (cross-language szennyezes
elkerulve). Ha a sajat nyelvi forrasok hianyosak, a mezo erintetlen marad.

Mintat kovet: scripts/fill_morocco_seo.py — Brazilia-specifikus topic+frazis
szovegekkel (Amazonas, Atlanti-erdo, Sao Paulo/Rio, szamba/futball/karneval,
kave/szoja/cukornad/vaserc).

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
    "poiExtraBrazilCitiesV2.ts",
    "poiExtraBrazilEconomicV2.ts",
    "poiExtraBrazilHistoryV2.ts",
    "poiExtraBrazilLandmarksV2.ts",
    "poiExtraBrazilLifeV2.ts",
    "poiExtraBrazilNatureV2.ts",
    "poiExtraBrazilReliefV2.ts",
]

LANGS = ("de", "hu", "ro", "en")


# ----------------------------------------------------------------------------
# Sablonszovegek nyelvenkent (Brazilia)
# ----------------------------------------------------------------------------

TOPIC_TEXT = {
    "Cities": {
        "de": "Diese Stadt zählt zu den charakteristischen Siedlungen Brasiliens, zwischen den Metropolen São Paulo und Rio de Janeiro und den weiten Räumen des Landesinneren.",
        "hu": "Ez a város Brazília jellegzetes települései közé tartozik, São Paulo és Rio de Janeiro nagyvárosai, valamint a tágas belső területek között.",
        "ro": "Acest oraș se numără printre așezările caracteristice ale Braziliei, între metropolele São Paulo și Rio de Janeiro și întinderile vaste ale interiorului.",
        "en": "This city is among the characteristic settlements of Brazil, set between the metropolises of São Paulo and Rio de Janeiro and the vast spaces of the interior.",
    },
    "Economic": {
        "de": "Dieser Standort spielt eine Rolle in der Wirtschaft Brasiliens, das stark von Kaffee, Soja, Zuckerrohr und Eisenerz geprägt ist.",
        "hu": "Ez a helyszín szerepet játszik Brazília gazdaságában, amelyet erősen meghatároz a kávé, a szója, a cukornád és a vasérc.",
        "ro": "Acest loc joacă un rol în economia Braziliei, puternic marcată de cafea, soia, trestie de zahăr și minereu de fier.",
        "en": "This location plays a role in the economy of Brazil, strongly shaped by coffee, soybeans, sugarcane, and iron ore.",
    },
    "History": {
        "de": "Dieser Ort hat eine besondere Bedeutung in der Geschichte Brasiliens, von der portugiesischen Kolonialzeit bis zur modernen Republik.",
        "hu": "Ennek a helyszínnek különleges jelentősége van Brazília történelmében, a portugál gyarmati kortól a modern köztársaságig.",
        "ro": "Acest loc are o importanță deosebită în istoria Braziliei, de la perioada colonială portugheză până la republica modernă.",
        "en": "This site holds particular significance in the history of Brazil, from the Portuguese colonial era to the modern republic.",
    },
    "Landmarks": {
        "de": "Dieses Wahrzeichen ist Teil des kulturellen Erbes Brasiliens, das Samba, Fußball und den weltberühmten Karneval zusammenführt.",
        "hu": "Ez a nevezetesség Brazília kulturális örökségének része, amely összefonja a szambát, a futballt és a világhírű karnevált.",
        "ro": "Acest reper face parte din patrimoniul cultural al Braziliei, care îmbină samba, fotbalul și carnavalul de renume mondial.",
        "en": "This landmark is part of the cultural heritage of Brazil, blending samba, football, and the world-famous Carnival.",
    },
    "Life": {
        "de": "Dieses Schutzgebiet ist Teil der reichen Tier- und Pflanzenwelt Brasiliens, vom Amazonas-Regenwald bis zum atlantischen Küstenwald (Mata Atlântica).",
        "hu": "Ez a védett terület Brazília gazdag élővilágának része, az Amazonas esőerdejétől az atlanti-óceáni partvidéki erdőkig (Mata Atlântica).",
        "ro": "Această arie protejată face parte din bogata faună și floră a Braziliei, de la pădurea amazoniană până la pădurea atlantică (Mata Atlântica).",
        "en": "This protected area is part of Brazil's rich wildlife and flora, from the Amazon rainforest to the Atlantic coastal forest (Mata Atlântica).",
    },
    "Nature": {
        "de": "Dieses Naturgebiet zeigt die landschaftliche Vielfalt Brasiliens, von der Amazonas-Region über das Pantanal bis zum Cerrado.",
        "hu": "Ez a természeti terület Brazília tájainak sokszínűségét mutatja, az Amazonas-vidéktől a Pantanalon át a Cerradóig.",
        "ro": "Această zonă naturală reflectă diversitatea peisajului Braziliei, de la regiunea amazoniană la Pantanal și Cerrado.",
        "en": "This natural area reflects the scenic diversity of Brazil, from the Amazon region to the Pantanal and the Cerrado.",
    },
    "Relief": {
        "de": "Diese Geländeform prägt die Topografie Brasiliens, das von ausgedehnten Hochebenen, Küstengebirgen und dem Amazonas-Tiefland geprägt ist.",
        "hu": "Ez a domborzati elem Brazília felszínét alakítja, amelyet kiterjedt fennsíkok, parti hegységek és az Amazonas-medence jellemez.",
        "ro": "Această formă de relief modelează topografia Braziliei, marcată de podișuri vaste, munți de coastă și câmpia amazoniană.",
        "en": "This landform shapes the topography of Brazil, marked by extensive plateaus, coastal ranges, and the Amazon lowland.",
    },
}

INTRO = {
    "de": "{name} ist ein bemerkenswertes Element der brasilianischen Geografie und Kultur.",
    "hu": "A(z) {name} a brazil földrajz és kultúra figyelemre méltó eleme.",
    "ro": "{name} este un element remarcabil al geografiei și culturii braziliene.",
    "en": "{name} is a remarkable feature of the geography and culture of Brazil.",
}

CONNECT = {
    "de": "Wie viele bedeutende Orte in Brasilien verbindet dieser Ort regionale Eigenheiten mit der übergreifenden Bedeutung des fünftgrößten Landes der Welt.",
    "hu": "Brazília számos jelentős helyszínéhez hasonlóan ez is ötvözi a regionális sajátosságokat a világ ötödik legnagyobb országának tágabb jelentőségével.",
    "ro": "Asemenea multor locuri importante din Brazilia, acesta îmbină particularitățile regionale cu semnificația mai largă a celei de-a cincea țări ca mărime din lume.",
    "en": "Like many notable places in Brazil, it combines regional character with the wider significance of the world's fifth-largest country.",
}

CLOSE = {
    "de": "Damit trägt dieser Ort zum vielseitigen Profil Brasiliens bei, wo tropische Natur, portugiesisches Erbe, Samba, Fußball und Karneval ineinandergreifen.",
    "hu": "Ezzel a helyszín hozzájárul Brazília sokszínű arculatához, ahol összefonódik a trópusi természet, a portugál örökség, a szamba, a futball és a karnevál.",
    "ro": "Astfel, acest loc contribuie la profilul variat al Braziliei, unde se împletesc natura tropicală, moștenirea portugheză, samba, fotbalul și carnavalul.",
    "en": "Thus, this place contributes to the diverse profile of Brazil, where tropical nature, Portuguese heritage, samba, football, and Carnival come together.",
}

GENERIC_FACTS = {
    "de": [
        "Liegt im Gebiet der Föderativen Republik Brasilien.",
        "Spielt eine Rolle in der lokalen Identität der Region.",
        "Verbunden mit dem Alltag und der Geschichte des Landes.",
        "Steht unter dem Einfluss des überwiegend tropischen Klimas Brasiliens.",
        "Portugiesisch ist die Amtssprache und prägt das kulturelle Leben.",
        "Brasilien ist bekannt für Samba, Fußball und den Karneval von Rio.",
        "Wirtschaft des Landes wird stark von Kaffee, Soja, Zuckerrohr und Eisenerz geprägt.",
        "Teil des kulturellen und natürlichen Erbes des größten Landes Südamerikas.",
    ],
    "hu": [
        "A Brazil Szövetségi Köztársaság területén található.",
        "Szerepet játszik a régió helyi identitásában.",
        "Kapcsolódik az ország mindennapjaihoz és történelméhez.",
        "Brazília túlnyomóan trópusi éghajlatának hatása alatt áll.",
        "A hivatalos nyelv a portugál, amely meghatározza a kulturális életet.",
        "Brazília a szambáról, a futballról és a riói karneválról ismert.",
        "Az ország gazdaságát erősen meghatározza a kávé, a szója, a cukornád és a vasérc.",
        "Dél-Amerika legnagyobb országának kulturális és természeti örökségéhez tartozik.",
    ],
    "ro": [
        "Se află pe teritoriul Republicii Federative a Braziliei.",
        "Are un rol în identitatea locală a regiunii.",
        "Este legat de viața cotidiană și de istoria țării.",
        "Se află sub influența climei predominant tropicale a Braziliei.",
        "Limba oficială este portugheza, care marchează viața culturală.",
        "Brazilia este cunoscută pentru samba, fotbal și carnavalul de la Rio.",
        "Economia țării este marcată puternic de cafea, soia, trestie de zahăr și minereu de fier.",
        "Face parte din patrimoniul cultural și natural al celei mai mari țări din America de Sud.",
    ],
    "en": [
        "Located within the Federative Republic of Brazil.",
        "Plays a role in the local identity of the region.",
        "Connected to the everyday life and history of the country.",
        "Influenced by Brazil's predominantly tropical climate.",
        "Portuguese is the official language and shapes cultural life.",
        "Brazil is known for samba, football, and the Carnival of Rio.",
        "The country's economy is strongly shaped by coffee, soybeans, sugarcane, and iron ore.",
        "Part of the cultural and natural heritage of the largest country in South America.",
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

    # Ha a descriptionAdvanced/factsAdvanced mezo teljesen hianyzik, beszurjuk
    # ures vazat a `facts` blokk utan, hogy a tovabbi fill logika dolgozhasson rajta.
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


def count_empty(path: Path) -> tuple[int, int]:
    """Visszaad: (ures descriptionAdvanced lang-mezok, ures factsAdvanced lang-mezok)."""
    content = path.read_text(encoding="utf-8")
    blocks = split_pois(content)
    empty_desc = 0
    empty_facts = 0
    for start, end, _id in blocks:
        poi = content[start:end]
        da = find_field_block(poi, "descriptionAdvanced")
        if da:
            blk = poi[da[0]:da[1]]
            for lang in LANGS:
                v = extract_lang_string(blk, lang)
                if v is None or not v.strip():
                    empty_desc += 1
        else:
            empty_desc += len(LANGS)
        fa = find_field_block(poi, "factsAdvanced")
        if fa:
            blk = poi[fa[0]:fa[1]]
            for lang in LANGS:
                v = extract_lang_array(blk, lang)
                if v is None or not [x for x in v if x and x.strip()]:
                    empty_facts += 1
        else:
            empty_facts += len(LANGS)
    return empty_desc, empty_facts


def main():
    print("=== ELOFELMERES (ures lang-mezok) ===")
    pre = {}
    for fname in FILES:
        path = DATA_DIR / fname
        if not path.exists():
            print(f"[skip] {fname} nem letezik")
            continue
        ed, ef = count_empty(path)
        pre[fname] = (ed, ef)
        print(f"  {fname}: ures descAdv={ed}, ures factsAdv={ef}")

    print("\n=== FELTOLTES ===")
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

    print("\n=== UTOFELMERES (ures lang-mezok) ===")
    for fname in FILES:
        path = DATA_DIR / fname
        if not path.exists():
            continue
        ed, ef = count_empty(path)
        ped, pef = pre.get(fname, (0, 0))
        print(f"  {fname}: ures descAdv={ed} (volt {ped}), ures factsAdv={ef} (volt {pef})")

    print(f"\nOSSZESEN: {grand_poi} POI, +{grand_desc} descriptionAdvanced, +{grand_facts} factsAdvanced")


if __name__ == "__main__":
    main()
