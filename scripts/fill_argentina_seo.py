# -*- coding: utf-8 -*-
"""
fill_argentina_seo.py
======================
Argentina-specifikus valtozat a fill_chile_seo.py / fill_cuba_seo.py mintara.
Feltolti a poiExtraArgentina*V2.ts fajlok ures `descriptionAdvanced` (string)
es `factsAdvanced` (array) mezoit a sajat nyelvi `name` + `description` + `facts`
forrasbol, sablon-alapon. NEM hasznal mas nyelvet (cross-language szennyezes
elkerulve, ekezetekkel). Ha a sajat nyelvi forrasok hianyosak vagy uresek, a
mezo erintetlen marad ("Bizonytalan -> kihagyas"). Idempotens.

Argentina-specifikus motivumok: Pampak, Andok, Patagonia, Buenos Aires, tango,
marhahus / asado, bor (Mendoza/Malbec), szoja, Iguazu.
"""

from __future__ import annotations
import os
import re

REPO = r"C:/Users/User/plizio-repo"
DATA_DIR = os.path.join(REPO, "lib", "visualLab", "data")

FILES = [
    "poiExtraArgentinaCitiesV2.ts",
    "poiExtraArgentinaEconomicV2.ts",
    "poiExtraArgentinaHistoryV2.ts",
    "poiExtraArgentinaLandmarksV2.ts",
    "poiExtraArgentinaLifeV2.ts",
    "poiExtraArgentinaNatureV2.ts",
    "poiExtraArgentinaReliefV2.ts",
]

LANGS = ("de", "hu", "ro", "en")


# ----------------------------------------------------------------------------
# Argentina-specifikus sablonszovegek nyelvenkent.
# ----------------------------------------------------------------------------

TOPIC_TEXT = {
    "Cities": {
        "de": "Diese Stadt zählt zu den charakteristischen Siedlungen Argentiniens zwischen den Anden, der Pampa und der atlantischen Küste.",
        "hu": "Ez a város Argentína jellegzetes települései közé tartozik, az Andok, a Pampák és az atlanti partvidék között.",
        "ro": "Acest oraș se numără printre așezările caracteristice ale Argentinei, între Anzi, Pampa și coasta Atlanticului.",
        "en": "This city is among the characteristic settlements of Argentina, set between the Andes, the Pampas, and the Atlantic coast.",
    },
    "Economic": {
        "de": "Dieser Standort spielt eine Rolle in der argentinischen Wirtschaft, von Rinderzucht und Weinbau bis hin zu Soja- und Getreideexporten.",
        "hu": "Ez a helyszín szerepet játszik Argentína gazdaságában, a marhatenyésztéstől és borászattól a szója- és gabonaexportig.",
        "ro": "Acest loc joacă un rol în economia Argentinei, de la creșterea vitelor și viticultură până la exportul de soia și cereale.",
        "en": "This location plays a role in Argentina's economy, from cattle ranching and viticulture to soy and grain exports.",
    },
    "History": {
        "de": "Dieser Ort hat eine besondere Bedeutung in der Geschichte Argentiniens, geprägt von indigenen Kulturen, der Kolonialzeit und der Unabhängigkeit von 1816.",
        "hu": "Ennek a helyszínnek különleges jelentősége van Argentína történelmében, az őslakos kultúráktól a gyarmati koron át az 1816-os függetlenségig.",
        "ro": "Acest loc are o importanță deosebită în istoria Argentinei, marcată de culturi indigene, perioada colonială și independența din 1816.",
        "en": "This site holds particular significance in Argentina's history, shaped by indigenous cultures, the colonial era, and the independence of 1816.",
    },
    "Landmarks": {
        "de": "Dieses Wahrzeichen ist Teil des kulturellen Erbes Argentiniens, von Buenos Aires und dem Tango bis zu den weiten Räumen der Pampa und Patagoniens.",
        "hu": "Ez a nevezetesség Argentína kulturális örökségének része, Buenos Airestől és a tangótól a Pampák és Patagónia tág tereiig.",
        "ro": "Acest reper face parte din patrimoniul cultural al Argentinei, de la Buenos Aires și tangou până la întinderile Pampei și Patagoniei.",
        "en": "This landmark is part of Argentina's cultural heritage, from Buenos Aires and tango to the wide expanses of the Pampas and Patagonia.",
    },
    "Life": {
        "de": "Dieses Schutzgebiet ist Teil der reichen Tier- und Pflanzenwelt Argentiniens, vom subtropischen Norden bis zu den patagonischen Steppen.",
        "hu": "Ez a védett terület Argentína gazdag élővilágának része, a szubtrópusi északtól a patagóniai sztyeppékig.",
        "ro": "Această arie protejată face parte din bogata faună și floră a Argentinei, din nordul subtropical până în stepele patagoneze.",
        "en": "This protected area is part of Argentina's rich wildlife and flora, from the subtropical north to the Patagonian steppes.",
    },
    "Nature": {
        "de": "Dieses Naturgebiet zeigt die landschaftliche Vielfalt Argentiniens zwischen den Anden, den Wasserfällen von Iguazú, der Pampa und den Gletschern Patagoniens.",
        "hu": "Ez a természeti terület Argentína tájainak sokszínűségét mutatja az Andok, az Iguazú-vízesések, a Pampák és a patagóniai gleccserek között.",
        "ro": "Această zonă naturală reflectă diversitatea peisajului Argentinei, între Anzi, cascadele Iguazú, Pampa și ghețarii Patagoniei.",
        "en": "This natural area reflects the scenic diversity of Argentina, between the Andes, the Iguazú Falls, the Pampas, and the Patagonian glaciers.",
    },
    "Relief": {
        "de": "Diese Geländeform prägt die Topografie Argentiniens entlang der Andenkordillere, der Pampa und der patagonischen Plateaus.",
        "hu": "Ez a domborzati elem Argentína felszínét alakítja az Andok-kordillera, a Pampák és a patagóniai fennsíkok mentén.",
        "ro": "Această formă de relief modelează topografia Argentinei, de-a lungul Cordilierei Anzilor, a Pampei și a platourilor patagoneze.",
        "en": "This landform shapes Argentina's topography along the Andean Cordillera, the Pampas, and the Patagonian plateaus.",
    },
}

INTRO = {
    "de": "{name} ist ein bemerkenswertes Element der argentinischen Geografie und Kultur.",
    "hu": "A(z) {name} az argentin földrajz és kultúra figyelemre méltó eleme.",
    "ro": "{name} este un element remarcabil al geografiei și culturii argentiniene.",
    "en": "{name} is a remarkable feature of the geography and culture of Argentina.",
}

CONNECT = {
    "de": "Wie viele bedeutende Orte in Argentinien vereint dieser Standort regionale Eigenheiten zwischen Anden, Pampa und Atlantik mit übergreifender Bedeutung.",
    "hu": "Argentína számos jelentős helyszínéhez hasonlóan ez is ötvözi az Andok, a Pampák és az Atlanti-óceán közötti regionális sajátosságokat az általános jelentőséggel.",
    "ro": "Asemenea multor locuri importante din Argentina, acesta îmbină particularitățile regionale dintre Anzi, Pampa și Atlantic cu o semnificație mai largă.",
    "en": "Like many notable places in Argentina, it combines regional character among the Andes, the Pampas, and the Atlantic with wider significance.",
}

CLOSE = {
    "de": "Damit trägt dieser Ort zum vielseitigen Profil Argentiniens bei, von Buenos Aires und dem Tango über Asado und Malbec-Weine bis hin zu den Eisfeldern Patagoniens.",
    "hu": "Ezzel a helyszín hozzájárul Argentína sokszínű arculatához, Buenos Airestől és a tangótól az asadón és a Malbec borokon át egészen Patagónia jégmezőiig.",
    "ro": "Astfel, acest loc contribuie la profilul variat al Argentinei, de la Buenos Aires și tangou, prin asado și vinurile Malbec, până la ghețarii Patagoniei.",
    "en": "Thus, this place contributes to Argentina's diverse profile, from Buenos Aires and tango, through asado and Malbec wines, all the way to the ice fields of Patagonia.",
}

GENERIC_FACTS = {
    "de": [
        "Liegt auf dem Gebiet der Argentinischen Republik.",
        "Eingebettet zwischen Andenkordillere, Pampa und atlantischer Küste.",
        "Spielt eine Rolle in der lokalen Identität der Region.",
        "Bekannt für seine landschaftliche oder kulturelle Bedeutung.",
        "Verbunden mit den klimatischen Kontrasten zwischen subtropischem Norden und patagonischem Süden.",
        "Wird durch lokale Behörden und Gemeinschaften betreut.",
        "Verbunden mit der Tradition von Rinderzucht, Asado und Malbec-Wein.",
        "Teil des kulturellen und natürlichen Erbes Argentiniens.",
    ],
    "hu": [
        "Az Argentin Köztársaság területén található.",
        "Az Andok-kordillera, a Pampák és az atlanti partvidék között fekszik.",
        "Szerepet játszik a régió helyi identitásában.",
        "Tájképi vagy kulturális jelentőségéről ismert.",
        "A szubtrópusi észak és a patagóniai dél közötti éghajlati ellentétek hatása alatt áll.",
        "Helyi önkormányzatok és közösségek gondoskodnak róla.",
        "Kapcsolódik a marhatenyésztés, az asado és a Malbec bor hagyományához.",
        "Argentína kulturális és természeti örökségének része.",
    ],
    "ro": [
        "Se află pe teritoriul Republicii Argentina.",
        "Este situat între Cordiliera Anzilor, Pampa și coasta Atlanticului.",
        "Are un rol în identitatea locală a regiunii.",
        "Este cunoscut pentru semnificația sa peisagistică sau culturală.",
        "Se află sub influența contrastelor climatice dintre nordul subtropical și sudul patagonez.",
        "Este întreținut de autorități și comunități locale.",
        "Este legat de tradiția creșterii vitelor, a asado-ului și a vinului Malbec.",
        "Face parte din patrimoniul cultural și natural al Argentinei.",
    ],
    "en": [
        "Located within the Argentine Republic.",
        "Set between the Andean Cordillera, the Pampas, and the Atlantic coast.",
        "Plays a role in the local identity of the region.",
        "Known for its scenic or cultural significance.",
        "Influenced by the climatic contrasts between the subtropical north and Patagonian south.",
        "Maintained by local authorities and communities.",
        "Connected to the traditions of cattle ranching, asado, and Malbec wine.",
        "Part of Argentina's cultural and natural heritage.",
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
    pat = re.compile(r'\b' + lang + r'\s*:\s*"((?:[^"\\]|\\.)*)"', re.DOTALL)
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
    desc_blk = find_field_block(poi, "description")
    facts_blk = find_field_block(poi, "facts")

    name_src = poi[name_blk[0]:name_blk[1]] if name_blk else ""
    desc_src = poi[desc_blk[0]:desc_blk[1]] if desc_blk else ""
    facts_src = poi[facts_blk[0]:facts_blk[1]] if facts_blk else ""

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

        # 1) Ures string slot kitoltes
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
                if not name_v or (not desc_v and not facts_v):
                    continue
                built = build_description(name_v, desc_v, facts_v, lang, topic)
                replacement = em.group(1) + js_string_literal(built)
                new_da_text = new_da_text[:em.start()] + replacement + new_da_text[em.end():]
                fills_desc += 1
                lang_filled[lang] = True
            if new_da_text != da_text:
                poi = poi[:s] + new_da_text + poi[e:]

        # 2) Hianyzo nyelvi kulcs hozzaadasa az utolso blokkhoz
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
                if not name_v or (not desc_v and not facts_v):
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
                if not name_v or (not desc_v and not facts_v):
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
                if not name_v or (not desc_v and not facts_v):
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
