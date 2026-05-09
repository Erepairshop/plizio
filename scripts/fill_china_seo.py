# -*- coding: utf-8 -*-
"""
fill_china_seo.py
==================
Feltolti a poiExtraChina*V2.ts fajlok ures `descriptionAdvanced` (string) es
`factsAdvanced` (array) mezoit a sajat nyelvi `name` + `description` + `facts`
forrasbol, sablon-alapon. Cross-language szennyezes elkerulve, idempotens.

Kina-specifikus topic+frazis szovegek: Jangce / Sarga-folyo, Himalaja / Tibet,
Gobi / Taklamakan, Beijing / Shanghai / Guangzhou / Hong Kong, Nagy Fal,
Tiltott Varos, dinasztiak (Han, Tang, Ming, Qing), gyartas / csucstechnologia /
selyem / tea / porcelan.
"""

from __future__ import annotations
import os
import re
import sys
from pathlib import Path

REPO = r"C:/Users/User/plizio-repo"
DATA_DIR = Path(REPO) / "lib" / "visualLab" / "data"

FILES = [
    "poiExtraChinaCitiesV2.ts",
    "poiExtraChinaEconomicV2.ts",
    "poiExtraChinaHistoryV2.ts",
    "poiExtraChinaLandmarksV2.ts",
    "poiExtraChinaLifeV2.ts",
    "poiExtraChinaNatureV2.ts",
    "poiExtraChinaReliefV2.ts",
]

LANGS = ("de", "hu", "ro", "en")


# ----------------------------------------------------------------------------
# Sablonszovegek nyelvenkent (Kina)
# ----------------------------------------------------------------------------

TOPIC_TEXT = {
    "Cities": {
        "de": "Diese Stadt zählt zu den charakteristischen Siedlungen Chinas, von Peking über Shanghai bis Guangzhou und Hongkong, geprägt von jahrtausendealter Tradition und moderner Hochtechnologie.",
        "hu": "Ez a város Kína jellegzetes települései közé tartozik, Pekingtől Sanghajon át Kantonig és Hongkongig, ahol az évezredes hagyomány és a modern csúcstechnológia találkozik.",
        "ro": "Acest oraș se numără printre așezările caracteristice ale Chinei, de la Beijing la Shanghai, Guangzhou și Hong Kong, îmbinând tradiția milenară cu tehnologia modernă.",
        "en": "This city is among the characteristic settlements of China, from Beijing to Shanghai, Guangzhou and Hong Kong, where millennia-old tradition meets modern high technology.",
    },
    "Economic": {
        "de": "Dieser Standort spielt eine Rolle in der Wirtschaft Chinas, geprägt von Fertigungsindustrie, Elektronik, E-Commerce, Schiffbau, Seide-, Tee- und Porzellanhandel sowie globalen Lieferketten.",
        "hu": "Ez a helyszín szerepet játszik Kína gazdaságában, amelyet a feldolgozóipar, az elektronika, az e-kereskedelem, a hajógyártás, a selyem-, tea- és porcelánkereskedelem, valamint a globális ellátási láncok jellemeznek.",
        "ro": "Acest loc joacă un rol în economia Chinei, marcată de industria prelucrătoare, electronică, comerț electronic, construcții navale, comerțul cu mătase, ceai și porțelan, precum și lanțurile globale de aprovizionare.",
        "en": "This location plays a role in China's economy, shaped by manufacturing, electronics, e-commerce, shipbuilding, the silk, tea and porcelain trade, and global supply chains.",
    },
    "History": {
        "de": "Dieser Ort hat eine besondere Bedeutung in der Geschichte Chinas, von den Dynastien Han, Tang, Ming und Qing über die Seidenstraße bis zur modernen Volksrepublik.",
        "hu": "Ennek a helyszínnek különleges jelentősége van Kína történelmében, a Han-, Tang-, Ming- és Csing-dinasztiától a Selyemúton át a modern Kínai Népköztársaságig.",
        "ro": "Acest loc are o importanță deosebită în istoria Chinei, de la dinastiile Han, Tang, Ming și Qing, prin Drumul Mătăsii, până la Republica Populară modernă.",
        "en": "This site holds particular significance in the history of China, from the Han, Tang, Ming and Qing dynasties through the Silk Road to the modern People's Republic.",
    },
    "Landmarks": {
        "de": "Dieses Wahrzeichen ist Teil des kulturellen Erbes Chinas, oft geprägt durch die Große Mauer, die Verbotene Stadt, kaiserliche Paläste, buddhistische und taoistische Tempel.",
        "hu": "Ez a nevezetesség Kína kulturális örökségének része, amelyet gyakran a Nagy Fal, a Tiltott Város, a császári paloták, valamint buddhista és taoista templomok formálnak.",
        "ro": "Acest reper face parte din patrimoniul cultural al Chinei, adesea modelat de Marele Zid, Orașul Interzis, palatele imperiale și templele budiste și taoiste.",
        "en": "This landmark is part of China's cultural heritage, often shaped by the Great Wall, the Forbidden City, imperial palaces, and Buddhist and Taoist temples.",
    },
    "Life": {
        "de": "Dieses Schutzgebiet ist Teil der reichen Tier- und Pflanzenwelt Chinas, von den Bambuswäldern Sichuans mit dem Großen Panda bis zu den Hochlandsteppen Tibets und den subtropischen Wäldern Yunnans.",
        "hu": "Ez a védett terület Kína gazdag élővilágának része, a szecsuáni bambuszerdőktől és az óriáspanda élőhelyétől a tibeti magaslati sztyeppékig és Jünnan szubtrópusi erdeiig.",
        "ro": "Această arie protejată face parte din bogata faună și floră a Chinei, de la pădurile de bambus din Sichuan și habitatul ursului panda până la stepele de altitudine din Tibet și pădurile subtropicale din Yunnan.",
        "en": "This protected area is part of China's rich wildlife and flora, from the bamboo forests of Sichuan and the giant panda's habitat to the high steppes of Tibet and the subtropical forests of Yunnan.",
    },
    "Nature": {
        "de": "Dieses Naturgebiet zeigt die landschaftliche Vielfalt Chinas, vom Jangtsekiang über den Gelben Fluss bis zum Himalaja, der Wüste Gobi und der Taklamakan sowie den Karstlandschaften Guilins.",
        "hu": "Ez a természeti terület Kína tájainak sokszínűségét mutatja, a Jangcétől a Sárga-folyón át a Himalájáig, a Góbi és a Taklamakán sivatagig, valamint Kuejlin karsztvidékéig.",
        "ro": "Această zonă naturală reflectă diversitatea peisajului Chinei, de la Yangtze și Fluviul Galben până la Himalaya, deșerturile Gobi și Taklamakan și peisajele carstice din Guilin.",
        "en": "This natural area reflects the scenic diversity of China, from the Yangtze and Yellow River to the Himalayas, the Gobi and Taklamakan deserts, and the karst landscapes of Guilin.",
    },
    "Relief": {
        "de": "Diese Geländeform prägt die Topografie Chinas, zwischen dem Hochland von Tibet, dem Himalaja, den Becken von Tarim und Sichuan sowie den Tiefebenen am Gelben Fluss und Jangtsekiang.",
        "hu": "Ez a domborzati elem Kína felszínét alakítja, a Tibeti-fennsík, a Himalája, a Tarim- és a Szecsuáni-medence, valamint a Sárga-folyó és a Jangce alföldjei között.",
        "ro": "Această formă de relief modelează topografia Chinei, între Podișul Tibetan, Himalaya, bazinele Tarim și Sichuan și câmpiile joase ale Fluviului Galben și Yangtze.",
        "en": "This landform shapes the topography of China, between the Tibetan Plateau, the Himalayas, the Tarim and Sichuan basins, and the lowlands of the Yellow River and the Yangtze.",
    },
}

INTRO = {
    "de": "{name} ist ein bemerkenswertes Element der chinesischen Geografie und Kultur.",
    "hu": "A(z) {name} a kínai földrajz és kultúra figyelemre méltó eleme.",
    "ro": "{name} este un element remarcabil al geografiei și culturii chineze.",
    "en": "{name} is a remarkable feature of the geography and culture of China.",
}

CONNECT = {
    "de": "Wie viele bedeutende Orte in China verbindet dieser Ort regionale Eigenheiten mit dem Erbe der kaiserlichen Dynastien, des Konfuzianismus, Buddhismus und Taoismus sowie der modernen Industrienation.",
    "hu": "Kína számos jelentős helyszínéhez hasonlóan ez is ötvözi a regionális sajátosságokat a császári dinasztiák, a konfucianizmus, a buddhizmus és a taoizmus, valamint a modern ipari nemzet örökségével.",
    "ro": "Asemenea multor locuri importante din China, acesta îmbină particularitățile regionale cu moștenirea dinastiilor imperiale, a confucianismului, budismului și taoismului, precum și a națiunii industriale moderne.",
    "en": "Like many notable places in China, it combines regional character with the legacy of the imperial dynasties, Confucianism, Buddhism and Taoism, and the modern industrial nation.",
}

CLOSE = {
    "de": "Damit trägt dieser Ort zum vielseitigen Profil Chinas bei — vom Himalaja über die Große Mauer und den Jangtsekiang bis zu den Megastädten an der Pazifikküste.",
    "hu": "Ezzel a helyszín hozzájárul Kína sokszínű arculatához — a Himalájától a Nagy Falon és a Jangcén át a Csendes-óceán partján fekvő óriásvárosokig.",
    "ro": "Astfel, acest loc contribuie la profilul variat al Chinei — de la Himalaya, prin Marele Zid și Yangtze, până la metropolele de pe coasta Pacificului.",
    "en": "Thus, this place contributes to the diverse profile of China — from the Himalayas and the Great Wall to the Yangtze and the megacities along the Pacific coast.",
}

GENERIC_FACTS = {
    "de": [
        "Liegt im Gebiet der Volksrepublik China in Ostasien.",
        "Spielt eine Rolle in der lokalen Identität der Region.",
        "Bekannt für seine landschaftliche oder kulturelle Bedeutung.",
        "Wird in lokalen und regionalen Studien dokumentiert.",
        "Steht unter dem Einfluss des kontinentalen Monsunklimas und der pazifischen Strömungen.",
        "Wird durch lokale Behörden und Gemeinschaften betreut.",
        "Verbunden mit der chinesischen Fertigungsindustrie, dem Seiden-, Tee- oder Porzellanhandel.",
        "Teil des kulturellen und natürlichen Erbes des Landes, geprägt von kaiserlichen Dynastien, Konfuzianismus, Buddhismus und Taoismus.",
    ],
    "hu": [
        "A Kínai Népköztársaság területén található, Kelet-Ázsiában.",
        "Szerepet játszik a régió helyi identitásában.",
        "Tájképi vagy kulturális jelentőségéről ismert.",
        "Helyi és regionális tanulmányok dokumentálják.",
        "A kontinentális monszun éghajlat és a csendes-óceáni áramlatok hatásai alá esik.",
        "Helyi önkormányzatok és közösségek gondoskodnak róla.",
        "Kapcsolódik a kínai feldolgozóiparhoz, a selyem-, tea- vagy porcelánkereskedelemhez.",
        "Az ország kulturális és természeti örökségének része, a császári dinasztiák, a konfucianizmus, a buddhizmus és a taoizmus hatásaival.",
    ],
    "ro": [
        "Se află pe teritoriul Republicii Populare Chineze, în Asia de Est.",
        "Are un rol în identitatea locală a regiunii.",
        "Este cunoscut pentru semnificația sa peisagistică sau culturală.",
        "Este documentat în studii locale și regionale.",
        "Se află sub influența climatului musonic continental și a curenților Pacificului.",
        "Este întreținut de autoritățile și comunitățile locale.",
        "Este legat de industria prelucrătoare chineză și de comerțul cu mătase, ceai sau porțelan.",
        "Face parte din patrimoniul cultural și natural al țării, marcat de dinastiile imperiale, confucianism, budism și taoism.",
    ],
    "en": [
        "Located within the People's Republic of China in East Asia.",
        "Plays a role in the local identity of the region.",
        "Known for its scenic or cultural significance.",
        "Documented in local and regional studies.",
        "Falls under the influence of the continental monsoon climate and Pacific currents.",
        "Maintained by local authorities and communities.",
        "Connected to Chinese manufacturing and the silk, tea, or porcelain trade.",
        "Part of the country's cultural and natural heritage, shaped by imperial dynasties, Confucianism, Buddhism, and Taoism.",
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


def count_empty_fields(path: Path) -> tuple[int, int]:
    content = path.read_text(encoding="utf-8")
    blocks = split_pois(content)
    empty_desc = 0
    empty_facts = 0
    for start, end, _id in blocks:
        poi = content[start:end]
        da_blk = find_field_block(poi, "descriptionAdvanced")
        fa_blk = find_field_block(poi, "factsAdvanced")
        if da_blk:
            da_text = poi[da_blk[0]:da_blk[1]]
            for lang in LANGS:
                v = extract_lang_string(da_text, lang)
                if v is None or v.strip() == "":
                    empty_desc += 1
        else:
            empty_desc += 4
        if fa_blk:
            fa_text = poi[fa_blk[0]:fa_blk[1]]
            for lang in LANGS:
                v = extract_lang_array(fa_text, lang)
                if v is None or len([x for x in v if x and x.strip()]) == 0:
                    empty_facts += 1
        else:
            empty_facts += 4
    return empty_desc, empty_facts


def main():
    print("=== ELOSZOR: ures mezok szamolasa ===")
    pre_total_desc = pre_total_facts = 0
    for fname in FILES:
        path = DATA_DIR / fname
        if not path.exists():
            print(f"[skip] {fname} nem letezik")
            continue
        ed, ef = count_empty_fields(path)
        print(f"  {fname}: ures descAdv={ed}, ures factsAdv={ef}")
        pre_total_desc += ed
        pre_total_facts += ef
    print(f"  OSSZESEN ures: descAdv={pre_total_desc}, factsAdv={pre_total_facts}")

    print("\n=== MOST: feltoltes ===")
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

    print("\n=== UTANA: ures mezok szamolasa (idempotencia ellenorzes) ===")
    post_total_desc = post_total_facts = 0
    for fname in FILES:
        path = DATA_DIR / fname
        if not path.exists():
            continue
        ed, ef = count_empty_fields(path)
        print(f"  {fname}: ures descAdv={ed}, ures factsAdv={ef}")
        post_total_desc += ed
        post_total_facts += ef
    print(f"  OSSZESEN MARADT ures: descAdv={post_total_desc}, factsAdv={post_total_facts}")


if __name__ == "__main__":
    main()
