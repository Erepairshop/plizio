# -*- coding: utf-8 -*-
"""
fill_drcongo_seo.py
====================
Feltolti a poiExtraDrcongo*V2.ts es poiExtraDemocraticrepublicofcongo*V2.ts
fajlok ures `descriptionAdvanced` (string) es `factsAdvanced` (array) mezoit a
sajat nyelvi `name` + `description` + `facts` forrasbol, sablon-alapon.
NEM hasznal mas nyelvet (cross-language szennyezes elkerulve). Ha a sajat
nyelvi forrasok hianyosak/uresek, a mezo erintetlen marad.

DRC-specifikus szovegtemplate elemek:
- Kongo-folyo, Kongo-medence eserdeje (tropikus eserdo)
- Kinshasa, fovaros
- Kivu-to, Tanganyika-to
- Virunga Nemzeti Park, hegyi gorillak
- Vulkanikus tajak (Nyiragongo)
- Banyaszat: kobalt, rez, gyemant
"""

from __future__ import annotations
import os
import re

REPO = r"C:/Users/User/plizio-repo"
DATA_DIR = os.path.join(REPO, "lib", "visualLab", "data")

FILES = [
    "poiExtraDrcongoCitiesV2.ts",
    "poiExtraDrcongoEconomicV2.ts",
    "poiExtraDrcongoHistoryV2.ts",
    "poiExtraDrcongoLandmarksV2.ts",
    "poiExtraDrcongoLifeV2.ts",
    "poiExtraDrcongoNatureV2.ts",
    "poiExtraDrcongoReliefV2.ts",
    "poiExtraDemocraticrepublicofcongoCitiesV2.ts",
    "poiExtraDemocraticrepublicofcongoEconomicV2.ts",
    "poiExtraDemocraticrepublicofcongoHistoryV2.ts",
    "poiExtraDemocraticrepublicofcongoLandmarksV2.ts",
    "poiExtraDemocraticrepublicofcongoLifeV2.ts",
    "poiExtraDemocraticrepublicofcongoNatureV2.ts",
    "poiExtraDemocraticrepublicofcongoReliefV2.ts",
]

LANGS = ("de", "hu", "ro", "en")


# ----------------------------------------------------------------------------
# DRC-specifikus sablonszovegek
# ----------------------------------------------------------------------------

TOPIC_TEXT = {
    "Cities": {
        "de": "Diese Stadt zaehlt zu den charakteristischen Siedlungen der Demokratischen Republik Kongo, oft entlang des maechtigen Kongo-Flusses oder in den Hochlandregionen gelegen.",
        "hu": "Ez a varos a Kongoi Demokratikus Koztarsasag jellegzetes telepulesei koze tartozik, gyakran a hatalmas Kongo-folyo menten vagy a magasfoldi videkeken fekszik.",
        "ro": "Acest oras se numara printre asezarile caracteristice ale Republicii Democrate Congo, situat adesea de-a lungul puternicului fluviu Congo sau in regiunile inalte.",
        "en": "This city is among the characteristic settlements of the Democratic Republic of the Congo, often located along the mighty Congo River or in the highland regions.",
    },
    "Economic": {
        "de": "Dieser Standort spielt eine wichtige Rolle in der Wirtschaft der DR Kongo, einem Land, das fuer seinen Reichtum an Kobalt, Kupfer und Diamanten weltweit bekannt ist.",
        "hu": "Ez a helyszin fontos szerepet jatszik a Kongoi DK gazdasagaban, egy olyan orszagban, amely vilagszerte ismert kobalt-, rez- es gyemantgazdagsagarol.",
        "ro": "Acest loc joaca un rol important in economia Republicii Democrate Congo, o tara cunoscuta in lume pentru bogatia sa de cobalt, cupru si diamante.",
        "en": "This location plays an important role in the economy of the DR Congo, a country known worldwide for its wealth of cobalt, copper, and diamonds.",
    },
    "History": {
        "de": "Dieser Ort hat eine besondere Bedeutung in der Geschichte der Demokratischen Republik Kongo, von den vorkolonialen Koenigreichen ueber die belgische Kolonialzeit bis zur Unabhaengigkeit 1960.",
        "hu": "Ennek a helyszinnek kulonleges jelentosege van a Kongoi DK tortenelmeben, a gyarmatositas elotti kiralysagoktol kezdve a belga gyarmati korszakon at egeszen az 1960-as fuggetlensegig.",
        "ro": "Acest loc are o importanta deosebita in istoria Republicii Democrate Congo, de la regatele precoloniale, prin perioada coloniala belgiana, pana la independenta din 1960.",
        "en": "This site holds particular significance in the history of the Democratic Republic of the Congo, from precolonial kingdoms through Belgian colonial rule to independence in 1960.",
    },
    "Landmarks": {
        "de": "Dieses Wahrzeichen ist Teil des reichen kulturellen Erbes der DR Kongo, eines Landes mit ueber 200 ethnischen Gruppen und einer vielfaeltigen Architektur.",
        "hu": "Ez a nevezetesseg a Kongoi DK gazdag kulturalis orokseg eresze, egy olyan orszage, amely tobb mint 200 etnikai csoporttal es valtozatos epiteszettel rendelkezik.",
        "ro": "Acest reper face parte din bogatul patrimoniu cultural al Republicii Democrate Congo, o tara cu peste 200 de grupuri etnice si o arhitectura diversa.",
        "en": "This landmark is part of the rich cultural heritage of the DR Congo, a country with over 200 ethnic groups and diverse architecture.",
    },
    "Life": {
        "de": "Dieses Schutzgebiet ist Teil der einzigartigen Tier- und Pflanzenwelt der DR Kongo, Heimat der Berggorillas, Bonobos und Okapis im Kongobecken-Regenwald.",
        "hu": "Ez a vedett terulet a Kongoi DK egyedulallo elovilaganak resze, a hegyi gorillak, a bonobok es az okapik otthona a Kongo-medence eserdejeben.",
        "ro": "Aceasta arie protejata face parte din fauna si flora unica a Republicii Democrate Congo, casa gorilelor de munte, a bonobilor si a okapilor din padurea tropicala a bazinului Congo.",
        "en": "This protected area is part of the unique wildlife of the DR Congo, home to mountain gorillas, bonobos, and okapis in the Congo Basin rainforest.",
    },
    "Nature": {
        "de": "Dieses Naturgebiet zeigt die landschaftliche Vielfalt der DR Kongo, vom dichten Regenwald des Kongobeckens ueber die Vulkane des Ostens bis zu den grossen Seen.",
        "hu": "Ez a termeszeti terulet a Kongoi DK tajai sokszinuseget mutatja be, a Kongo-medence sury eserdejetol a keleti vulkanokon at a nagy tavakig.",
        "ro": "Aceasta zona naturala reflecta diversitatea peisagistica a Republicii Democrate Congo, de la padurea tropicala deasa a bazinului Congo pana la vulcanii din est si marile lacuri.",
        "en": "This natural area reflects the scenic diversity of the DR Congo, from the dense Congo Basin rainforest to the eastern volcanoes and the great lakes.",
    },
    "Relief": {
        "de": "Diese Gelaendeform praegt die Topografie der DR Kongo, eines Landes mit dem riesigen Kongobecken im Zentrum und vulkanischen Gebirgen im Osten entlang des Ostafrikanischen Grabenbruchs.",
        "hu": "Ez a domborzati elem a Kongoi DK felszinet alakitja, egy olyan orszageet, amelynek kozepen a hatalmas Kongo-medence terul el, keleten pedig a kelet-afrikai arokrendszer menti vulkani hegysegek emelkednek.",
        "ro": "Aceasta forma de relief modeleaza topografia Republicii Democrate Congo, o tara cu vastul bazin al Congo in centru si munti vulcanici in est, de-a lungul Riftului Africii de Est.",
        "en": "This landform shapes the topography of the DR Congo, a country with the vast Congo Basin at its center and volcanic mountains to the east along the East African Rift.",
    },
}

INTRO = {
    "de": "{name} ist ein bemerkenswertes Element der Geografie und Kultur der Demokratischen Republik Kongo.",
    "hu": "A(z) {name} a Kongoi Demokratikus Koztarsasag foldrajzanak es kulturajanak figyelemre melto eleme.",
    "ro": "{name} este un element remarcabil al geografiei si culturii Republicii Democrate Congo.",
    "en": "{name} is a remarkable feature of the geography and culture of the Democratic Republic of the Congo.",
}

CONNECT = {
    "de": "Wie viele bedeutende Orte in der DR Kongo vereint dieser Ort regionale Eigenheiten und uebergreifende Bedeutung — vom Kongo-Fluss bis zu den ostafrikanischen Bergen.",
    "hu": "A Kongoi DK szamos jelentos helyszinehez hasonloan ez is otvozi a regionalis sajatossagokat es az altalanos jelentoseget — a Kongo-folyotol egeszen a kelet-afrikai hegyekig.",
    "ro": "Asemenea multor locuri importante din Republica Democrata Congo, acesta imbina particularitatile regionale cu o semnificatie mai larga — de la fluviul Congo pana la muntii Africii de Est.",
    "en": "Like many notable places in the DR Congo, it combines regional character with wider significance — from the Congo River to the East African mountains.",
}

CLOSE = {
    "de": "Damit traegt dieser Ort zum vielseitigen Profil der DR Kongo bei, einem zentralafrikanischen Land mit aussergewoehnlichem Naturreichtum und kultureller Tiefe.",
    "hu": "Ezzel a helyszin hozzajarul a Kongoi DK sokszinu arculatahoz, ehhez a kulonleges termeszeti gazdagsaggal es kulturalis melyseggel rendelkezo kozep-afrikai orszaghoz.",
    "ro": "Astfel, acest loc contribuie la profilul variat al Republicii Democrate Congo, o tara central-africana cu o bogatie naturala extraordinara si o profunzime culturala remarcabila.",
    "en": "Thus, this place contributes to the diverse profile of the DR Congo, a central African country of extraordinary natural wealth and cultural depth.",
}

GENERIC_FACTS = {
    "de": [
        "Liegt im Gebiet der Demokratischen Republik Kongo in Zentralafrika.",
        "Steht im Zusammenhang mit dem Kongo-Fluss oder dem Kongobecken-Regenwald.",
        "Bekannt fuer seine landschaftliche oder kulturelle Bedeutung in der Region.",
        "Wird in lokalen und regionalen Studien zur DR Kongo dokumentiert.",
        "Faellt unter den Einfluss des aequatorialen tropischen Klimas Zentralafrikas.",
        "Wird durch lokale Behoerden und Gemeinschaften betreut.",
        "Verbunden mit dem Alltag und der Geschichte der kongolesischen Bevoelkerung.",
        "Teil des kulturellen und natuerlichen Erbes der DR Kongo.",
    ],
    "hu": [
        "A Kongoi Demokratikus Koztarsasag teruleten talalhato Kozep-Afrikaban.",
        "Kapcsolatban all a Kongo-folyoval vagy a Kongo-medence eserdejevel.",
        "Tajkepi vagy kulturalis jelentosegerol ismert a regioban.",
        "Helyi es regionalis tanulmanyok dokumentaljak a Kongoi DK-ban.",
        "A kozep-afrikai egyenlitoi tropusi eghajlat hatasai ala esik.",
        "Helyi onkormanyzatok es kozossegek gondoskodnak rola.",
        "Kapcsolodik a kongoi lakossag mindennapjaihoz es tortenelmehez.",
        "A Kongoi DK kulturalis es termeszeti orokseg eresze.",
    ],
    "ro": [
        "Se afla pe teritoriul Republicii Democrate Congo, in Africa Centrala.",
        "Este legat de fluviul Congo sau de padurea tropicala a bazinului Congo.",
        "Este cunoscut pentru semnificatia sa peisagistica sau culturala in regiune.",
        "Este documentat in studii locale si regionale despre RD Congo.",
        "Se afla sub influenta climatului ecuatorial tropical din Africa Centrala.",
        "Este intretinut de autoritati si comunitati locale.",
        "Este legat de viata cotidiana si de istoria populatiei congoleze.",
        "Face parte din patrimoniul cultural si natural al RD Congo.",
    ],
    "en": [
        "Located within the Democratic Republic of the Congo in Central Africa.",
        "Connected to the Congo River or the Congo Basin rainforest.",
        "Known for its scenic or cultural significance in the region.",
        "Documented in local and regional studies on the DR Congo.",
        "Falls under the influence of the equatorial tropical climate of Central Africa.",
        "Maintained by local authorities and communities.",
        "Connected to the everyday life and history of the Congolese people.",
        "Part of the cultural and natural heritage of the DR Congo.",
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


def extract_lang_string(block: str, lang: str):
    # Tamogatja `de: "..."` es `"de": "..."` szintakszist is
    pat = re.compile(r'(?:\b|")' + lang + r'"?\s*:\s*"((?:[^"\\]|\\.)*)"', re.DOTALL)
    m = pat.search(block)
    if m:
        return m.group(1).replace('\\"', '"').replace("\\\\", "\\")
    return None


def extract_lang_array(block: str, lang: str):
    pat = re.compile(r'(?:\b|")' + lang + r'"?\s*:\s*\[(.*?)\]', re.DOTALL)
    m = pat.search(block)
    if not m:
        return None
    inner = m.group(1)
    items = re.findall(r'"((?:[^"\\]|\\.)*)"', inner)
    return [it.replace('\\"', '"').replace('\\\\', '\\') for it in items]


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


def js_array_literal(items: list) -> str:
    return "[" + ", ".join(js_string_literal(x) for x in items) + "]"


TOPIC = "Nature"


def count_empty(content: str):
    """Megszamolja az ures `lang: ""` es `lang: []` mezoket descriptionAdvanced/factsAdvanced blokkokban."""
    empty_desc = 0
    empty_facts = 0
    blocks = split_pois(content)
    for start, end, _id in blocks:
        poi = content[start:end]
        da = find_field_block(poi, "descriptionAdvanced")
        if da:
            seg = poi[da[0]:da[1]]
            for lang in LANGS:
                if re.search(r'\b' + lang + r'\s*:\s*""', seg):
                    empty_desc += 1
        fa = find_field_block(poi, "factsAdvanced")
        if fa:
            seg = poi[fa[0]:fa[1]]
            for lang in LANGS:
                if re.search(r'\b' + lang + r'\s*:\s*\[\s*\]', seg):
                    empty_facts += 1
    return empty_desc, empty_facts


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
            empty_pat = re.compile(r'(\b' + lang + r'\s*:\s*)""')
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
        if new_fa_text != fa_text:
            poi = poi[:fa_blk[0]] + new_fa_text + poi[fa_blk[1]:]

    return poi, fills_desc, fills_facts


def process_file(path: str):
    global TOPIC
    TOPIC = detect_topic(os.path.basename(path))
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()

    pre_d, pre_f = count_empty(content)

    blocks = split_pois(content)
    if not blocks:
        return (0, 0, 0, pre_d, pre_f)

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

    return poi_count, desc_total, facts_total, pre_d, pre_f


def main():
    grand_poi = grand_desc = grand_facts = 0
    grand_pre_d = grand_pre_f = 0
    print("=== ELO-SZAMOLAS (ures mezok) + KITOLTES ===")
    for fname in FILES:
        path = os.path.join(DATA_DIR, fname)
        if not os.path.exists(path):
            print(f"[skip] {fname} nem letezik")
            continue
        pois, d, fa, pre_d, pre_f = process_file(path)
        print(f"{fname}: {pois} POI | ures elotte: {pre_d} desc + {pre_f} facts | kitoltve: +{d} descA, +{fa} factsA")
        grand_poi += pois
        grand_desc += d
        grand_facts += fa
        grand_pre_d += pre_d
        grand_pre_f += pre_f
    print(f"\nOSSZESEN: {grand_poi} POI")
    print(f"  ures mezok osszesen elotte: {grand_pre_d} descA + {grand_pre_f} factsA = {grand_pre_d + grand_pre_f}")
    print(f"  kitoltve: +{grand_desc} descA, +{grand_facts} factsA = {grand_desc + grand_facts}")
    print(f"  hatra: {grand_pre_d - grand_desc} descA + {grand_pre_f - grand_facts} factsA")


if __name__ == "__main__":
    main()
