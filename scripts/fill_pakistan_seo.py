#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
fill_pakistan_seo.py
====================

Feltolti a poiExtraPakistan*V2.ts fajlok ures `descriptionAdvanced` (string) es
`factsAdvanced` (array) mezoit a sajat nyelvi `name` + `description` + `facts`
forrasbol. Pakisztan-specifikus topic + closer szovegek (Indus folyo,
Karakorum/K2, Hindu Kush, Lahore/Karachi, Indus-civilizacio,
mezogazdasag/textil).

Cross-language tilos. Idempotens: ha a mezo mar ki van toltve, nem nyul hozza.

A pakistani fajlok specialitasai:
  - // @ts-nocheck miatt a fajl strukturaja gyakran nem-valid TS
  - a `descriptionAdvanced` es `factsAdvanced` mezok elofordulhatnak a
    `name` blokkon belul (a `name` lezaro `}` helyett kovetkezve)
  - a `factsAdvanced` blokk gyakran ket peldanyban szerepel POI-nkent
    (egyik csak `en`, masik `de/hu/ro`)
A szkript ezt nem javitja, csak az UREs lang-mezoket tolti fel — a meglevo
duplikatumokat erintetlenul hagyja.

Cel:
  descriptionAdvanced: 80-150 szavas termeszetes nyelvu szoveg
  factsAdvanced: 6-8 elem
"""
from __future__ import annotations

import re
from pathlib import Path

REPO = Path("C:/Users/User/plizio-repo")
DATA_DIR = REPO / "lib/visualLab/data"

FILES = [
    "poiExtraPakistanCitiesV2.ts",
    "poiExtraPakistanEconomicV2.ts",
    "poiExtraPakistanHistoryV2.ts",
    "poiExtraPakistanLandmarksV2.ts",
    "poiExtraPakistanLifeV2.ts",
    "poiExtraPakistanNatureV2.ts",
    "poiExtraPakistanReliefV2.ts",
]

LANGS = ("de", "hu", "ro", "en")

# ----------------------------------------------------------------------------
# Pakisztan-specifikus topic / closer / facts sablonok
# ----------------------------------------------------------------------------

TOPIC_TEXT = {
    "Cities": {
        "de": "Diese Siedlung gehört zum vielfältigen Stadtnetz Pakistans, von Karatschi und Lahore bis zu den Tälern des Hindukusch.",
        "hu": "Ez a település Pakisztán sokszínű városhálózatának része, amely Karacsitól és Lahortól a Hindukus völgyeiig terjed.",
        "ro": "Această așezare face parte din rețeaua urbană diversă a Pakistanului, de la Karachi și Lahore până la văile munților Hindu Kush.",
        "en": "This settlement is part of the diverse urban network of Pakistan, stretching from Karachi and Lahore to the valleys of the Hindu Kush.",
    },
    "Economic": {
        "de": "Dieser Standort spielt eine Rolle in der pakistanischen Wirtschaft, geprägt von Landwirtschaft am Indus, Textilindustrie und Handel.",
        "hu": "Ez a helyszín szerepet játszik Pakisztán gazdaságában, amelyet az Indus menti mezőgazdaság, a textilipar és a kereskedelem határoz meg.",
        "ro": "Acest loc joacă un rol în economia Pakistanului, bazată pe agricultura din valea Indului, industria textilă și comerț.",
        "en": "This location plays a role in Pakistan's economy, shaped by Indus Valley agriculture, the textile industry and trade.",
    },
    "History": {
        "de": "Dieser Ort hat eine besondere Bedeutung in der Geschichte Pakistans, von der Indus-Zivilisation bis zur modernen Republik.",
        "hu": "Ennek a helynek különleges jelentősége van Pakisztán történelmében, az Indus-völgyi civilizációtól a mai köztársaságig.",
        "ro": "Acest loc are o importanță deosebită în istoria Pakistanului, de la civilizația Indului până la republica modernă.",
        "en": "This site holds particular significance in the history of Pakistan, from the Indus Valley civilisation to the modern republic.",
    },
    "Landmarks": {
        "de": "Dieses Wahrzeichen gehört zum kulturellen Erbe Pakistans, geprägt von Mogul-Architektur, britischer Kolonialzeit und islamischer Kunst.",
        "hu": "Ez a nevezetesség Pakisztán kulturális örökségének része, amelyet a mogul építészet, a brit gyarmati kor és az iszlám művészet alakít.",
        "ro": "Acest reper face parte din patrimoniul cultural al Pakistanului, marcat de arhitectura mogulă, perioada colonială britanică și arta islamică.",
        "en": "This landmark is part of Pakistan's cultural heritage, shaped by Mughal architecture, the British colonial era and Islamic art.",
    },
    "Life": {
        "de": "Dieses Schutzgebiet ist Teil der reichen Tier- und Pflanzenwelt Pakistans, vom Karakorum-Hochgebirge bis zu den Mangroven am Arabischen Meer.",
        "hu": "Ez a védett terület Pakisztán gazdag élővilágának része, a Karakorum hegyeitől az Arab-tenger menti mangrovékig.",
        "ro": "Această arie protejată face parte din bogata faună și floră a Pakistanului, de la munții Karakorum până la mangrovele de la Marea Arabiei.",
        "en": "This protected area is part of Pakistan's rich wildlife and flora, from the high Karakoram to the mangroves of the Arabian Sea.",
    },
    "Nature": {
        "de": "Dieses Naturgebiet zeigt die landschaftliche Vielfalt Pakistans zwischen Indus-Tal, Hindukusch und Karakorum.",
        "hu": "Ez a természeti terület Pakisztán tájainak sokszínűségét mutatja az Indus-völgy, a Hindukus és a Karakorum között.",
        "ro": "Această zonă naturală reflectă diversitatea peisajului Pakistanului, între valea Indului, Hindu Kush și Karakorum.",
        "en": "This natural area reflects the scenic diversity of Pakistan, between the Indus valley, the Hindu Kush and the Karakoram.",
    },
    "Relief": {
        "de": "Diese Geländeform prägt die Topografie Pakistans, von den Hochgipfeln des Karakorum (K2) bis zur weiten Indus-Ebene.",
        "hu": "Ez a domborzati elem Pakisztán felszínét formálja, a Karakorum csúcsaitól (K2) az Indus-síkságig.",
        "ro": "Această formă de relief modelează topografia Pakistanului, de la vârfurile Karakorum (K2) până la câmpia Indului.",
        "en": "This landform shapes the topography of Pakistan, from the Karakoram summits (K2) to the broad Indus plain.",
    },
}

INTRO = {
    "de": "{name} ist ein bemerkenswertes Element der pakistanischen Geografie und Kultur.",
    "hu": "A(z) {name} a pakisztáni földrajz és kultúra figyelemre méltó eleme.",
    "ro": "{name} este un element remarcabil al geografiei și culturii pakistaneze.",
    "en": "{name} is a remarkable feature of the geography and culture of Pakistan.",
}

CONNECT = {
    "de": "Wie viele bedeutende Orte in Pakistan verbindet dieser Ort regionale Eigenheiten mit übergreifender Bedeutung im Land.",
    "hu": "Pakisztán számos jelentős helyszínéhez hasonlóan ez is ötvözi a regionális sajátosságokat és az ország szintű jelentőséget.",
    "ro": "Asemenea multor locuri importante din Pakistan, acesta îmbină particularitățile regionale cu o semnificație națională.",
    "en": "Like many notable places in Pakistan, it combines regional character with country-wide significance.",
}

CLOSE = {
    "de": "So trägt dieser Ort zum vielseitigen Profil Pakistans zwischen Indus, Karakorum und Arabischem Meer bei.",
    "hu": "Ezzel a helyszín hozzájárul Pakisztán sokszínű arculatához az Indus, a Karakorum és az Arab-tenger között.",
    "ro": "Astfel, acest loc contribuie la profilul variat al Pakistanului, între Indus, Karakorum și Marea Arabiei.",
    "en": "Thus, this place contributes to the diverse profile of Pakistan, between the Indus, the Karakoram and the Arabian Sea.",
}

GENERIC_FACTS = {
    "de": [
        "Liegt im Gebiet der Islamischen Republik Pakistan.",
        "Steht unter dem Einfluss der Klimazonen zwischen Hindukusch, Indus-Ebene und Arabischem Meer.",
        "Spielt eine Rolle in der lokalen Identität der Region.",
        "Bekannt für seine landschaftliche oder kulturelle Bedeutung.",
        "Wird in lokalen und regionalen Studien dokumentiert.",
        "Wird durch lokale Behörden und Gemeinschaften betreut.",
        "Verbunden mit dem Alltag und der Geschichte am Indus.",
        "Teil des kulturellen und natürlichen Erbes Pakistans.",
    ],
    "hu": [
        "A Pakisztáni Iszlám Köztársaság területén található.",
        "A Hindukus, az Indus-síkság és az Arab-tenger közötti éghajlati zónák hatása alatt áll.",
        "Szerepet játszik a régió helyi identitásában.",
        "Tájképi vagy kulturális jelentőségéről ismert.",
        "Helyi és regionális tanulmányok dokumentálják.",
        "Helyi önkormányzatok és közösségek gondoskodnak róla.",
        "Kapcsolódik az Indus menti mindennapokhoz és történelemhez.",
        "Pakisztán kulturális és természeti örökségének része.",
    ],
    "ro": [
        "Se află pe teritoriul Republicii Islamice Pakistan.",
        "Se găsește sub influența zonelor climatice dintre Hindu Kush, câmpia Indului și Marea Arabiei.",
        "Are un rol în identitatea locală a regiunii.",
        "Este cunoscut pentru semnificația sa peisagistică sau culturală.",
        "Este documentat în studii locale și regionale.",
        "Este întreținut de autorități și comunități locale.",
        "Este legat de viața cotidiană și de istoria din valea Indului.",
        "Face parte din patrimoniul cultural și natural al Pakistanului.",
    ],
    "en": [
        "Located within the Islamic Republic of Pakistan.",
        "Influenced by the climate zones between the Hindu Kush, the Indus plain and the Arabian Sea.",
        "Plays a role in the local identity of the region.",
        "Known for its scenic or cultural significance.",
        "Documented in local and regional studies.",
        "Maintained by local authorities and communities.",
        "Connected to everyday life and history along the Indus.",
        "Part of Pakistan's cultural and natural heritage.",
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


def build_description(name: str, desc: str, facts, lang: str, topic: str) -> str:
    parts = [INTRO[lang].format(name=name)]
    if desc.strip():
        parts.append(desc.strip().rstrip(".") + ".")
    if facts:
        for f in facts[:3]:
            f = (f or "").strip()
            if not f:
                continue
            parts.append(f.rstrip(".") + ".")
    parts.append(TOPIC_TEXT[topic][lang])
    parts.append(CONNECT[lang])
    parts.append(CLOSE[lang])
    text = " ".join(parts)
    if word_count(text) > 150:
        text = truncate_words(text, 148)
    return text


def build_facts(desc: str, facts, lang: str):
    out = []
    seen = set()
    for f in facts:
        f = (f or "").strip()
        if not f:
            continue
        if not f.endswith("."):
            f = f + "."
        k = f.lower()
        if k in seen:
            continue
        seen.add(k); out.append(f)
    if desc.strip():
        d = desc.strip().rstrip(".") + "."
        if d.lower() not in seen:
            seen.add(d.lower()); out.append(d)
    for g in GENERIC_FACTS[lang]:
        if len(out) >= 7:
            break
        if g.lower() in seen:
            continue
        seen.add(g.lower()); out.append(g)
    return out[:8]


# ----------------------------------------------------------------------------
# Balanced-brace block extractor
# ----------------------------------------------------------------------------

def find_matching_brace(text: str, open_idx: int) -> int:
    assert text[open_idx] == "{", f"expected '{{' at {open_idx}, got {text[open_idx]!r}"
    depth = 0
    in_str = False
    quote = ""
    i = open_idx
    while i < len(text):
        ch = text[i]
        if in_str:
            if ch == "\\":
                i += 2; continue
            if ch == quote:
                in_str = False
        else:
            if ch == '"' or ch == "'" or ch == "`":
                in_str = True; quote = ch
            elif ch == '{':
                depth += 1
            elif ch == '}':
                depth -= 1
                if depth == 0:
                    return i + 1
        i += 1
    return -1


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


def js_string_literal(s: str) -> str:
    return '"' + s.replace("\\", "\\\\").replace('"', '\\"') + '"'


def js_array_literal(items) -> str:
    return "[" + ", ".join(js_string_literal(x) for x in items) + "]"


# ----------------------------------------------------------------------------
# POI-blokk feldolgozas
# ----------------------------------------------------------------------------

def split_pois(content: str):
    """A POI-tomb elemek elejet az `id:` mezo elotti `{` jelzi.
    Nem tudjuk megbizhatoan delim-elni az egesz POI objektumot a hibas
    szintaxis miatt; ezert egyszerubb megkozelites: az id: -k kozotti
    szakaszokat tekintjuk POI-nak (start = id offset, end = next id offset).
    """
    matches = list(re.finditer(r'id:\s*"([^"]+)"', content))
    blocks = []
    for i, m in enumerate(matches):
        start = m.start()
        end = matches[i+1].start() if i+1 < len(matches) else len(content)
        blocks.append((start, end, m.group(1)))
    return blocks


def find_field_blocks_in_range(content: str, lo: int, hi: int, field: str):
    """Visszaadja az osszes (start_brace_idx, end_idx_exclusive) parost a
    [lo,hi) tartomanyban a `field: { ... }` mezokhez."""
    out = []
    pat = re.compile(r'\b' + re.escape(field) + r'\s*:\s*\{')
    for m in pat.finditer(content, lo, hi):
        brace = m.end() - 1
        end = find_matching_brace(content, brace)
        if end > 0 and end <= hi:
            out.append((brace, end))
    return out


def insert_lang_entry(field_block: str, lang: str, value_repr: str) -> str:
    """Beszuria a `lang: <value_repr>` parost a `{ ... }` blokk vegere a `}` ele."""
    last_brace = field_block.rfind("}")
    if last_brace < 0:
        return field_block
    indent_match = re.search(r'\n([ \t]+)(?:de|hu|ro|en)\s*:', field_block)
    indent = indent_match.group(1) if indent_match else "      "
    before = field_block[:last_brace].rstrip()
    if before.endswith(",") or before.endswith("{"):
        before_clean = before
    else:
        before_clean = before + ","
    new_entry = f"\n{indent}{lang}: {value_repr}"
    after = field_block[last_brace:]
    close_indent = indent[:-2] if len(indent) >= 2 else ""
    return before_clean + new_entry + "\n" + close_indent + after.lstrip("\n").lstrip(" ").lstrip("\t")


def process_file(path: Path):
    topic = detect_topic(path.name)
    content = path.read_text(encoding="utf-8")
    blocks = split_pois(content)
    if not blocks:
        return (0, 0, 0)

    fills_desc = 0
    fills_facts = 0

    # Hatulrol elore dolgozzuk fel, hogy az offsetek konzisztensek maradjanak
    for start, end, _id in reversed(blocks):
        # 1) sajat-nyelvi forrasok kinyerese a POI-tartomanybol
        # name: az ELSO `name: { ... }` blokk a tartomanyban
        name_blocks = find_field_blocks_in_range(content, start, end, "name")
        # description: az ELSO `description: { ... }` (NE descriptionAdvanced!)
        # — egyszerusites: regex `\bdescription\s*:\s*\{(?!Advanced)` nem mukodik;
        # eloszor lekerjuk az osszes "description"-t es kihagyjuk azokat ahol
        # az adott offset utan kovetkezo szovegben Advanced van
        desc_pat = re.compile(r'\bdescription\s*:\s*\{')
        desc_blocks = []
        for m in desc_pat.finditer(content, start, end):
            # ha "descriptionAdvanced" volt, az id is "description" + "Advanced"
            # A regex `\bdescription\s*:\s*\{` matchel "descriptionAdvanced: {"-re is, ha "Advanced" elotte van... NE: itt a `\b` utan jon kozvetlenul "Advanced" — a regex `description\s*:` nem match-elne descriptionAdvanced-re mert ott nincs ":", "A" jon. OK!
            brace = m.end() - 1
            e = find_matching_brace(content, brace)
            if e > 0 and e <= end:
                desc_blocks.append((brace, e))
        facts_pat = re.compile(r'\bfacts\s*:\s*\{')
        facts_src_blocks = []
        for m in facts_pat.finditer(content, start, end):
            # ne match-eljen factsAdvanced-re — a `\bfacts\s*:` match-elne factsAdvanced-re? NEM, mert "facts" utan "A" jon, nem ":". OK!
            brace = m.end() - 1
            e = find_matching_brace(content, brace)
            if e > 0 and e <= end:
                facts_src_blocks.append((brace, e))

        name_src = content[name_blocks[0][0]:name_blocks[0][1]] if name_blocks else ""
        desc_src = content[desc_blocks[0][0]:desc_blocks[0][1]] if desc_blocks else ""
        facts_src = content[facts_src_blocks[0][0]:facts_src_blocks[0][1]] if facts_src_blocks else ""

        # 2) descriptionAdvanced feltoltese
        da_blocks = find_field_blocks_in_range(content, start, end, "descriptionAdvanced")
        # Hatulrol-elore a blokkokon belul, hogy offsetek stabilak maradjanak
        for db_start, db_end in reversed(da_blocks):
            db_text = content[db_start:db_end]
            new_db = db_text
            for lang in LANGS:
                curr = extract_lang_string(new_db, lang)
                if curr is not None and curr.strip() != "":
                    continue  # mar ki van toltve
                name_v = extract_lang_string(name_src, lang) or ""
                desc_v = extract_lang_string(desc_src, lang) or ""
                facts_v = extract_lang_array(facts_src, lang) or []
                if not name_v or (not desc_v and not facts_v):
                    continue  # nincs sajat nyelvi forras -> nem nyulunk hozza
                built = build_description(name_v, desc_v, facts_v, lang, topic)
                if curr is None:
                    # nincs lang kulcs -> beszurjuk
                    new_db = insert_lang_entry(new_db, lang, js_string_literal(built))
                else:
                    # ures string -> regex-cseres
                    empty_pat = re.compile(r'(\b' + lang + r'\s*:\s*)""')
                    em = empty_pat.search(new_db)
                    if em:
                        new_db = new_db[:em.start()] + em.group(1) + js_string_literal(built) + new_db[em.end():]
                fills_desc += 1
            if new_db != db_text:
                content = content[:db_start] + new_db + content[db_end:]

        # 3) factsAdvanced feltoltese — frissitett offsetekkel ujra kell keresni
        fa_blocks = find_field_blocks_in_range(content, start, end + (len(content) - len(content)), "factsAdvanced")
        # Mivel a content valtozhatott, az `end` valid maradt (csak a tartomanyon belul tortent valtozas), de biztonsagosabb ujraszamolni; egyszerubb: ujra hivni a split-et — itt most nem szukseges, csak a feltoltest tesszuk a meglevo szakaszra. A `find_matching_brace` valos hatart ad.
        # Megj.: ha db modositott, a POI vege `end` mar elavult; ujraszamoljuk.
        # Legbiztosabb: keressunk mindent newly:
        # FRISS POI-tartomany: az `_id` -hez tartozo id: pozicio az aktualis content-ben:
        idm = re.search(r'id:\s*"' + re.escape(_id) + r'"', content)
        if not idm:
            continue
        new_start = idm.start()
        # POI vege: kovetkezo id: vagy fajl vege
        next_idm = re.compile(r'id:\s*"').search(content, idm.end())
        new_end = next_idm.start() if next_idm else len(content)
        fa_blocks = find_field_blocks_in_range(content, new_start, new_end, "factsAdvanced")
        for fb_start, fb_end in reversed(fa_blocks):
            fb_text = content[fb_start:fb_end]
            new_fb = fb_text
            for lang in LANGS:
                curr = extract_lang_array(new_fb, lang)
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
                if curr is None:
                    new_fb = insert_lang_entry(new_fb, lang, js_array_literal(built_list))
                else:
                    empty_pat = re.compile(r'(\b' + lang + r'\s*:\s*)\[\s*\]')
                    em = empty_pat.search(new_fb)
                    if em:
                        new_fb = new_fb[:em.start()] + em.group(1) + js_array_literal(built_list) + new_fb[em.end():]
                fills_facts += 1
            if new_fb != fb_text:
                content = content[:fb_start] + new_fb + content[fb_end:]

    if content != path.read_text(encoding="utf-8"):
        path.write_text(content, encoding="utf-8")

    poi_count = len(blocks)
    return (poi_count, fills_desc, fills_facts)


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
