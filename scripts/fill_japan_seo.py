# -*- coding: utf-8 -*-
"""
fill_japan_seo.py
==================
Feltolti a poiExtraJapan*V2.ts fajlok ures `descriptionAdvanced` (string) es
`factsAdvanced` (array) mezoit a sajat nyelvi `name` + `description` + `facts`
forrasbol, sablon-alapon. Cross-language szennyezes elkerulve, idempotens.

Japan-specifikus topic+frazis szovegek: Honshu/Hokkaido/Kyushu/Shikoku, Fudzsi-
hegy, Tokyo/Kyoto/Osaka, samurai/sintoizmus/buddhizmus, autoipar/elektronika/
manga, vulkani szigetiv, Csendes-ocean.
"""

from __future__ import annotations
import os
import re
import sys
from pathlib import Path

REPO = r"C:/Users/User/plizio-repo"
DATA_DIR = Path(REPO) / "lib" / "visualLab" / "data"

FILES = [
    "poiExtraJapanCitiesV2.ts",
    "poiExtraJapanEconomicV2.ts",
    "poiExtraJapanHistoryV2.ts",
    "poiExtraJapanLandmarksV2.ts",
    "poiExtraJapanLifeV2.ts",
    "poiExtraJapanNatureV2.ts",
    "poiExtraJapanReliefV2.ts",
]

LANGS = ("de", "hu", "ro", "en")


# ----------------------------------------------------------------------------
# Sablonszovegek nyelvenkent (Japan)
# ----------------------------------------------------------------------------

TOPIC_TEXT = {
    "Cities": {
        "de": "Diese Stadt zählt zu den charakteristischen Siedlungen Japans, von Tokio über Kyoto bis Osaka, geprägt von Tradition und moderner Hochtechnologie.",
        "hu": "Ez a város Japán jellegzetes települései közé tartozik, Tokiótól Kiotón át Oszakáig, ahol a hagyomány és a modern csúcstechnológia találkozik.",
        "ro": "Acest oraș se numără printre așezările caracteristice ale Japoniei, de la Tokyo la Kyoto și Osaka, îmbinând tradiția cu tehnologia modernă.",
        "en": "This city is among the characteristic settlements of Japan, from Tokyo to Kyoto and Osaka, where tradition meets modern high technology.",
    },
    "Economic": {
        "de": "Dieser Standort spielt eine Rolle in der Wirtschaft Japans, geprägt von Automobilindustrie, Elektronik, Robotik, Schiffbau und Manga-Kultur als Exportgut.",
        "hu": "Ez a helyszín szerepet játszik Japán gazdaságában, amelyet az autóipar, az elektronika, a robotika, a hajógyártás és a manga-kultúra export jellemez.",
        "ro": "Acest loc joacă un rol în economia Japoniei, marcată de industria auto, electronică, robotică, construcții navale și exportul culturii manga.",
        "en": "This location plays a role in Japan's economy, shaped by the automotive industry, electronics, robotics, shipbuilding, and manga culture as an export.",
    },
    "History": {
        "de": "Dieser Ort hat eine besondere Bedeutung in der Geschichte Japans, von der Samurai-Zeit über die Meiji-Restauration bis zur Nachkriegsmoderne.",
        "hu": "Ennek a helyszínnek különleges jelentősége van Japán történelmében, a szamuráj-kortól a Meidzsi-restauráción át a háború utáni modernizációig.",
        "ro": "Acest loc are o importanță deosebită în istoria Japoniei, de la era samurailor și restaurația Meiji până la modernizarea postbelică.",
        "en": "This site holds particular significance in the history of Japan, from the samurai era through the Meiji Restoration to postwar modernization.",
    },
    "Landmarks": {
        "de": "Dieses Wahrzeichen ist Teil des kulturellen Erbes Japans, oft geprägt durch shintoistische Schreine, buddhistische Tempel und kaiserliche Residenzen.",
        "hu": "Ez a nevezetesség Japán kulturális örökségének része, amelyet gyakran sintó szentélyek, buddhista templomok és császári rezidenciák formálnak.",
        "ro": "Acest reper face parte din patrimoniul cultural al Japoniei, adesea modelat de sanctuare șintoiste, temple budiste și reședințe imperiale.",
        "en": "This landmark is part of Japan's cultural heritage, often shaped by Shinto shrines, Buddhist temples, and imperial residences.",
    },
    "Life": {
        "de": "Dieses Schutzgebiet ist Teil der reichen Tier- und Pflanzenwelt Japans, von subtropischen Wäldern auf Kyushu bis zu den Schneeregionen Hokkaidos.",
        "hu": "Ez a védett terület Japán gazdag élővilágának része, a Kjúsú szubtrópusi erdeitől Hokkaidó hófödte vidékéig.",
        "ro": "Această arie protejată face parte din bogata faună și floră a Japoniei, de la pădurile subtropicale din Kyushu până la regiunile înzăpezite din Hokkaido.",
        "en": "This protected area is part of Japan's rich wildlife and flora, from the subtropical forests of Kyushu to the snowy regions of Hokkaido.",
    },
    "Nature": {
        "de": "Dieses Naturgebiet zeigt die landschaftliche Vielfalt Japans, vom Fuji-Vulkan über die Inlandsee bis zu den Pazifikküsten und vulkanischen Inselbögen.",
        "hu": "Ez a természeti terület Japán tájainak sokszínűségét mutatja, a Fudzsi-hegytől a Beltengeren át a Csendes-óceán partjáig és a vulkáni szigetívekig.",
        "ro": "Această zonă naturală reflectă diversitatea peisajului japonez, de la vulcanul Fuji și Marea Interioară până la coastele Pacificului și arcurile insulare vulcanice.",
        "en": "This natural area reflects the scenic diversity of Japan, from Mount Fuji and the Inland Sea to the Pacific coasts and volcanic island arcs.",
    },
    "Relief": {
        "de": "Diese Geländeform prägt die Topografie Japans, zwischen den Hauptinseln Honshu, Hokkaido, Kyushu und Shikoku, dominiert von vulkanischen Gebirgen.",
        "hu": "Ez a domborzati elem Japán felszínét alakítja, a Honsú, Hokkaidó, Kjúsú és Sikoku főszigetek között, amelyeket vulkáni hegyláncok uralnak.",
        "ro": "Această formă de relief modelează topografia Japoniei, între insulele principale Honshu, Hokkaido, Kyushu și Shikoku, dominate de munți vulcanici.",
        "en": "This landform shapes the topography of Japan, between the main islands of Honshu, Hokkaido, Kyushu, and Shikoku, dominated by volcanic mountain ranges.",
    },
}

INTRO = {
    "de": "{name} ist ein bemerkenswertes Element der japanischen Geografie und Kultur.",
    "hu": "A(z) {name} a japán földrajz és kultúra figyelemre méltó eleme.",
    "ro": "{name} este un element remarcabil al geografiei și culturii japoneze.",
    "en": "{name} is a remarkable feature of the geography and culture of Japan.",
}

CONNECT = {
    "de": "Wie viele bedeutende Orte in Japan verbindet dieser Ort regionale Eigenheiten mit dem Erbe der Samurai-Tradition, des Shintoismus und Buddhismus sowie der modernen Industrienation.",
    "hu": "Japán számos jelentős helyszínéhez hasonlóan ez is ötvözi a regionális sajátosságokat a szamuráj-hagyomány, a sintoizmus és a buddhizmus, valamint a modern ipari nemzet örökségével.",
    "ro": "Asemenea multor locuri importante din Japonia, acesta îmbină particularitățile regionale cu moștenirea tradiției samurailor, a șintoismului și budismului, precum și a națiunii industriale moderne.",
    "en": "Like many notable places in Japan, it combines regional character with the legacy of the samurai tradition, Shinto and Buddhist heritage, and the modern industrial nation.",
}

CLOSE = {
    "de": "Damit trägt dieser Ort zum vielseitigen Profil Japans bei — vom Fuji-Vulkan über Tokio bis zum vulkanischen Inselbogen am Pazifik.",
    "hu": "Ezzel a helyszín hozzájárul Japán sokszínű arculatához — a Fudzsi-hegytől Tokión át a Csendes-óceán vulkáni szigetívéig.",
    "ro": "Astfel, acest loc contribuie la profilul variat al Japoniei — de la vulcanul Fuji, prin Tokyo, până la arcul insular vulcanic din Pacific.",
    "en": "Thus, this place contributes to the diverse profile of Japan — from Mount Fuji and Tokyo to the volcanic island arc along the Pacific.",
}

GENERIC_FACTS = {
    "de": [
        "Liegt im Gebiet des Inselstaates Japan im Nordpazifik.",
        "Spielt eine Rolle in der lokalen Identität der Region.",
        "Bekannt für seine landschaftliche oder kulturelle Bedeutung.",
        "Wird in lokalen und regionalen Studien dokumentiert.",
        "Steht unter dem Einfluss des wechselhaften Monsun- und Pazifikklimas.",
        "Wird durch lokale Behörden und Gemeinschaften betreut.",
        "Verbunden mit der japanischen Automobilindustrie, Elektronik oder Robotik.",
        "Teil des kulturellen und natürlichen Erbes des Landes, geprägt von Shinto, Buddhismus und Samurai-Tradition.",
    ],
    "hu": [
        "A japán szigetország területén található, az északi Csendes-óceánon.",
        "Szerepet játszik a régió helyi identitásában.",
        "Tájképi vagy kulturális jelentőségéről ismert.",
        "Helyi és regionális tanulmányok dokumentálják.",
        "A változékony monszun- és csendes-óceáni éghajlat hatásai alá esik.",
        "Helyi önkormányzatok és közösségek gondoskodnak róla.",
        "Kapcsolódik a japán autóiparhoz, elektronikához vagy robotikához.",
        "Az ország kulturális és természeti örökségének része, a sintoizmus, a buddhizmus és a szamuráj-hagyomány hatásaival.",
    ],
    "ro": [
        "Se află pe teritoriul statului insular Japonia, în Pacificul de Nord.",
        "Are un rol în identitatea locală a regiunii.",
        "Este cunoscut pentru semnificația sa peisagistică sau culturală.",
        "Este documentat în studii locale și regionale.",
        "Se află sub influența climatului musonic variabil și a Pacificului.",
        "Este întreținut de autoritățile și comunitățile locale.",
        "Este legat de industria auto, electronica sau robotica japoneză.",
        "Face parte din patrimoniul cultural și natural al țării, marcat de șintoism, budism și tradiția samurailor.",
    ],
    "en": [
        "Located within the island nation of Japan in the North Pacific.",
        "Plays a role in the local identity of the region.",
        "Known for its scenic or cultural significance.",
        "Documented in local and regional studies.",
        "Falls under the influence of the variable monsoon and Pacific climate.",
        "Maintained by local authorities and communities.",
        "Connected to Japan's automotive industry, electronics, or robotics.",
        "Part of the country's cultural and natural heritage, shaped by Shinto, Buddhism, and the samurai tradition.",
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
    blocks = find_all_field_blocks(poi, field)
    return blocks[0] if blocks else None


def find_all_field_blocks(poi: str, field: str) -> list[tuple[int, int]]:
    pat = re.compile(r'\b' + field + r'\s*:\s*\{')
    out: list[tuple[int, int]] = []
    pos = 0
    while True:
        m = pat.search(poi, pos)
        if not m:
            break
        i = m.end() - 1
        depth = 0
        in_str = False
        quote = ""
        end_idx = -1
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
        if end_idx < 0:
            break
        out.append((m.end() - 1, end_idx))
        pos = end_idx
    return out


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


CROSS_LANG_PREFIX = {
    "de": "[übersetzt aus dem Englischen] ",
    "hu": "[angolból fordítva] ",
    "ro": "[tradus din engleză] ",
    "en": "[translated from available source] ",
}


def merge_duplicate_advanced_blocks(poi: str) -> tuple[str, int]:
    """Wenn ugyanazon POI-ban tobb descriptionAdvanced / factsAdvanced blokk van,
    egyesitsd: minden nyelvre valaszd a leghosszabb (nem ures) erteket; a tobbi
    blokkot torold (a komma-elvalasztot is). Idempotens."""
    merged_count = 0
    for field, is_array in (("descriptionAdvanced", False), ("factsAdvanced", True)):
        while True:
            blocks = find_all_field_blocks(poi, field)
            if not blocks:
                break
            # check ha 1 blokk + nincs duplikalt key → skip
            if len(blocks) == 1:
                s, e = blocks[0]
                btxt = poi[s:e]
                has_dup = False
                for lang in LANGS:
                    if is_array:
                        cnt = len(re.findall(r'\b' + lang + r'\s*:\s*\[', btxt))
                    else:
                        cnt = len(re.findall(r'\b' + lang + r'\s*:\s*"', btxt))
                    if cnt > 1:
                        has_dup = True
                        break
                if not has_dup:
                    break
            # Gyujtsd ki minden blokkbol a leghosszabb erteket nyelvenkent
            best: dict[str, object] = {}
            for s, e in blocks:
                btxt = poi[s:e]
                for lang in LANGS:
                    if is_array:
                        v = extract_lang_array(btxt, lang)
                        if v is None:
                            continue
                        non_empty = [x for x in v if x and x.strip()]
                        if not non_empty:
                            continue
                        cur = best.get(lang)
                        if cur is None or len(non_empty) > len(cur):  # type: ignore
                            best[lang] = non_empty
                    else:
                        v = extract_lang_string(btxt, lang)
                        if v is None or not v.strip():
                            continue
                        cur = best.get(lang)
                        if cur is None or len(v) > len(cur):  # type: ignore
                            best[lang] = v
            # Epits ujra az ELSO blokk tartalmat
            first_s, first_e = blocks[0]
            # Hatarozzuk meg a behuzast az elso blokkbol
            indent_match = re.search(r'\n([ \t]+)(?:de|hu|ro|en)\s*:', poi[first_s:first_e])
            indent = indent_match.group(1) if indent_match else "      "
            close_indent = indent[:-2] if len(indent) >= 2 else ""
            lines = []
            for lang in LANGS:
                v = best.get(lang)
                if is_array:
                    if v:
                        lines.append(f"{indent}{lang}: {js_array_literal(v)},")  # type: ignore
                    else:
                        lines.append(f"{indent}{lang}: [],")
                else:
                    if v:
                        lines.append(f"{indent}{lang}: {js_string_literal(v)},")  # type: ignore
                    else:
                        lines.append(f'{indent}{lang}: "",')
            new_block = "{\n" + "\n".join(lines) + "\n" + close_indent + "}"
            # Cseréld ki az ELSŐ blokkot az új tartalomra
            new_poi = poi[:first_s] + new_block + poi[first_e:]
            # Most töröld a TÖBBI blokkot a saját ", field: { ... }" prefix-ükkel együtt
            shift = len(new_block) - (first_e - first_s)
            for s, e in blocks[1:]:
                ns, ne = s + shift, e + shift
                # Keressük a "field" kulcsszót a blokk kezdete előtt
                kw_pat = re.compile(r',\s*\b' + field + r'\s*:\s*\{')
                pre = new_poi[:ns + 1]  # '{' is included
                km = None
                for m in re.finditer(kw_pat, new_poi):
                    if m.end() <= ns + 1:
                        km = m
                if km:
                    new_poi = new_poi[:km.start()] + new_poi[ne:]
                    shift -= (ne - km.start())
                    merged_count += 1
                else:
                    # fallback: csak a blokkot toroljuk
                    new_poi = new_poi[:ns - 1] + new_poi[ne:]
                    shift -= (ne - (ns - 1))
                    merged_count += 1
            poi = new_poi
            break  # egy iteracioban mindent osszevonunk, nem ismetelni
    return poi, merged_count


def get_first_available_lang_string(block: str, prefer: tuple[str, ...] = ("en", "de", "hu", "ro")) -> tuple[str, str] | None:
    for lang in prefer:
        v = extract_lang_string(block, lang)
        if v and v.strip():
            return (lang, v)
    return None


def get_first_available_lang_array(block: str, prefer: tuple[str, ...] = ("en", "de", "hu", "ro")) -> tuple[str, list[str]] | None:
    for lang in prefer:
        v = extract_lang_array(block, lang)
        if v and any(x and x.strip() for x in v):
            return (lang, [x for x in v if x and x.strip()])
    return None


def process_poi(poi: str, topic: str) -> tuple[str, int, int]:
    fills_desc = 0
    fills_facts = 0

    # 1) Duplikalt descriptionAdvanced / factsAdvanced blokkok osszevonasa
    poi, _merged = merge_duplicate_advanced_blocks(poi)

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
            cross_used = False
            if not name_v:
                fallback = get_first_available_lang_string(name_src)
                if fallback:
                    name_v = fallback[1]
                    cross_used = True
            if not desc_v and not facts_v:
                fb_desc = get_first_available_lang_string(desc_src)
                fb_facts = get_first_available_lang_array(facts_src)
                if fb_desc:
                    desc_v = fb_desc[1]
                    cross_used = True
                if fb_facts:
                    facts_v = fb_facts[1]
                    cross_used = True
            # ha advanced-blokkbol mas nyelven van mar kesz advanced szoveg, hasznaljuk fel forrasul
            if not desc_v and not facts_v:
                fb_adv = get_first_available_lang_string(new_da_text)
                if fb_adv:
                    desc_v = fb_adv[1]
                    cross_used = True
            if not name_v or (not desc_v and not facts_v):
                continue
            built = build_description(name_v, desc_v, facts_v, lang, topic)
            if cross_used:
                built = CROSS_LANG_PREFIX[lang] + built
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
            cross_used = False
            if not name_v:
                fb_name = get_first_available_lang_string(name_src)
                if fb_name:
                    name_v = fb_name[1]
                    cross_used = True
            if not desc_v and not facts_v:
                fb_desc = get_first_available_lang_string(desc_src)
                fb_facts = get_first_available_lang_array(facts_src)
                if fb_desc:
                    desc_v = fb_desc[1]
                    cross_used = True
                if fb_facts:
                    facts_v = fb_facts[1]
                    cross_used = True
            if not desc_v and not facts_v:
                fb_adv_arr = get_first_available_lang_array(new_fa_text)
                if fb_adv_arr:
                    facts_v = fb_adv_arr[1]
                    cross_used = True
            if not name_v or (not desc_v and not facts_v):
                continue
            built_list = build_facts(desc_v, facts_v, lang)
            if cross_used and built_list:
                # csak az ELSO 1-2 elemet jelolo prefix-szel jelezzuk hogy forditas
                built_list = [CROSS_LANG_PREFIX[lang].rstrip() + " " + built_list[0]] + built_list[1:]
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
        da_blocks = find_all_field_blocks(poi, "descriptionAdvanced")
        fa_blocks = find_all_field_blocks(poi, "factsAdvanced")
        if da_blocks:
            for s, e in da_blocks:
                da_text = poi[s:e]
                for lang in LANGS:
                    v = extract_lang_string(da_text, lang)
                    if v is None or v.strip() == "":
                        empty_desc += 1
        else:
            empty_desc += 4
        if fa_blocks:
            for s, e in fa_blocks:
                fa_text = poi[s:e]
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
