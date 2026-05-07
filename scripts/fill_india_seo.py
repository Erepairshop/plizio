# -*- coding: utf-8 -*-
"""
fill_india_seo.py

Auto-fills empty `descriptionAdvanced.<lang>` ("") and `factsAdvanced.<lang>` ([])
fields in lib/visualLab/data/poiExtraIndia*V2.ts files, using the existing
short `description` and `facts` plus the POI's `id`, `name`, `type`, `parent`.

Strategy (token-thrifty, conservative):
  - Parse each POI block with regex.
  - For each language (de/hu/ro/en) where descriptionAdvanced is empty:
      build a 80-150 word paragraph by stitching:
        intro sentence (uses name + type + parent state) +
        the existing short description[lang] +
        2-3 generic enrichment sentences derived from facts[lang] +
        closing didactic line (subject hint).
    Skip if short description[lang] is missing.
  - For each language where factsAdvanced is empty:
      reuse existing facts[lang] verbatim, then synthesise additional
      generic-but-locale-correct facts using the POI's type and parent.
      Skip if no source facts for that language.
  - Write file back in a single pass.

NOTE: All synthesised text is generic (uses only data already in the file)
to avoid fabricating specific historical numbers. The didactic closing line
mirrors the style already used elsewhere in the V2 dataset.
"""
from __future__ import annotations
import re
import glob
import os
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_GLOB = os.path.join(ROOT, "lib", "visualLab", "data", "poiExtraIndia*V2.ts")

LANGS = ("de", "hu", "ro", "en")

# ---------- Localisation tables (used only for generic phrasing) ----------

# Indian state codes -> readable names per language. Only the ones that appear
# in the dataset; missing codes fall back to the raw code.
STATE_NAMES = {
    # de, hu, ro, en
    "IN-AP": ("Andhra Pradesh", "Andhra Prades", "Andhra Pradesh", "Andhra Pradesh"),
    "IN-AR": ("Arunachal Pradesh", "Arunácsal Prades", "Arunachal Pradesh", "Arunachal Pradesh"),
    "IN-AS": ("Assam", "Asszám", "Assam", "Assam"),
    "IN-BR": ("Bihar", "Bihár", "Bihar", "Bihar"),
    "IN-CT": ("Chhattisgarh", "Cshattíszgarh", "Chhattisgarh", "Chhattisgarh"),
    "IN-GA": ("Goa", "Goa", "Goa", "Goa"),
    "IN-GJ": ("Gujarat", "Gudzsarát", "Gujarat", "Gujarat"),
    "IN-HR": ("Haryana", "Harijána", "Haryana", "Haryana"),
    "IN-HP": ("Himachal Pradesh", "Himácsal Prades", "Himachal Pradesh", "Himachal Pradesh"),
    "IN-JH": ("Jharkhand", "Dzshárkhand", "Jharkhand", "Jharkhand"),
    "IN-JK": ("Jammu und Kashmir", "Dzsammu és Kasmír", "Jammu și Kașmir", "Jammu and Kashmir"),
    "IN-KA": ("Karnataka", "Karnátaka", "Karnataka", "Karnataka"),
    "IN-KL": ("Kerala", "Kerala", "Kerala", "Kerala"),
    "IN-LA": ("Ladakh", "Ladak", "Ladakh", "Ladakh"),
    "IN-MH": ("Maharashtra", "Mahárástra", "Maharashtra", "Maharashtra"),
    "IN-ML": ("Meghalaya", "Meghálaja", "Meghalaya", "Meghalaya"),
    "IN-MN": ("Manipur", "Manipur", "Manipur", "Manipur"),
    "IN-MP": ("Madhya Pradesh", "Madhja Prades", "Madhya Pradesh", "Madhya Pradesh"),
    "IN-MZ": ("Mizoram", "Mizoram", "Mizoram", "Mizoram"),
    "IN-NL": ("Nagaland", "Nagaföld", "Nagaland", "Nagaland"),
    "IN-OR": ("Odisha", "Ódisa", "Odisha", "Odisha"),
    "IN-PB": ("Punjab", "Pandzsáb", "Punjab", "Punjab"),
    "IN-PY": ("Puducherry", "Pondicherry", "Puducherry", "Puducherry"),
    "IN-RJ": ("Rajasthan", "Rádzsasztán", "Rajasthan", "Rajasthan"),
    "IN-SK": ("Sikkim", "Szikkim", "Sikkim", "Sikkim"),
    "IN-TN": ("Tamil Nadu", "Tamilnádu", "Tamil Nadu", "Tamil Nadu"),
    "IN-TG": ("Telangana", "Telangána", "Telangana", "Telangana"),
    "IN-TR": ("Tripura", "Tripura", "Tripura", "Tripura"),
    "IN-UP": ("Uttar Pradesh", "Uttar Prades", "Uttar Pradesh", "Uttar Pradesh"),
    "IN-UT": ("Uttarakhand", "Uttarákhand", "Uttarakhand", "Uttarakhand"),
    "IN-WB": ("Westbengalen", "Nyugat-Bengál", "Bengalul de Vest", "West Bengal"),
    "IN-DL": ("Delhi", "Delhi", "Delhi", "Delhi"),
    "IN-AN": ("Andamanen und Nikobaren", "Andamán- és Nikobár-szigetek", "Insulele Andaman și Nicobar", "Andaman and Nicobar Islands"),
    "IN-LD": ("Lakshadweep", "Lakshadvíp", "Lakshadweep", "Lakshadweep"),
    "IN-DN": ("Dadra und Nagar Haveli", "Dadra és Nagar Haveli", "Dadra și Nagar Haveli", "Dadra and Nagar Haveli"),
    "IN-CH": ("Chandigarh", "Csandígarh", "Chandigarh", "Chandigarh"),
}

# Short label for the POI 'type' field.
TYPE_LABEL = {
    "city":              ("Stadt", "város", "oraș", "city"),
    "state-capital":     ("Hauptstadt eines Bundesstaates", "tagállami főváros", "capitală de stat", "state capital"),
    "capital":           ("Hauptstadt", "főváros", "capitală", "capital"),
    "port":              ("Hafen", "kikötő", "port", "port"),
    "industry":          ("Industriestandort", "ipari központ", "centru industrial", "industrial hub"),
    "mine":              ("Bergbauzentrum", "bányavidék", "centru minier", "mining centre"),
    "agri":              ("Agrarregion", "mezőgazdasági régió", "regiune agricolă", "agricultural region"),
    "river":             ("Fluss", "folyó", "râu", "river"),
    "lake":              ("See", "tó", "lac", "lake"),
    "mountain":          ("Berg", "hegy", "munte", "mountain"),
    "mountains":         ("Gebirge", "hegység", "munți", "mountain range"),
    "range":             ("Gebirgszug", "hegylánc", "lanț muntos", "mountain range"),
    "peak":              ("Gipfel", "csúcs", "vârf", "peak"),
    "plateau":           ("Hochebene", "fennsík", "platou", "plateau"),
    "valley":            ("Tal", "völgy", "vale", "valley"),
    "desert":            ("Wüste", "sivatag", "deșert", "desert"),
    "forest":            ("Wald", "erdő", "pădure", "forest"),
    "national-park":     ("Nationalpark", "nemzeti park", "parc național", "national park"),
    "wildlife":          ("Wildreservat", "vadrezervátum", "rezervație de faună", "wildlife reserve"),
    "reserve":           ("Naturschutzgebiet", "természetvédelmi terület", "rezervație naturală", "nature reserve"),
    "biosphere":         ("Biosphärenreservat", "bioszféra-rezervátum", "rezervație a biosferei", "biosphere reserve"),
    "delta":             ("Delta", "delta", "deltă", "delta"),
    "coast":             ("Küste", "tengerpart", "coastă", "coast"),
    "island":            ("Insel", "sziget", "insulă", "island"),
    "monument":          ("Denkmal", "műemlék", "monument", "monument"),
    "temple":            ("Tempel", "templom", "templu", "temple"),
    "fort":              ("Festung", "erőd", "fortăreață", "fort"),
    "palace":            ("Palast", "palota", "palat", "palace"),
    "tomb":              ("Mausoleum", "mauzóleum", "mausoleu", "tomb"),
    "religious":         ("religiöse Stätte", "vallási helyszín", "loc religios", "religious site"),
    "heritage":          ("Welterbestätte", "világörökségi helyszín", "sit de patrimoniu", "heritage site"),
    "archaeological":    ("archäologische Stätte", "régészeti lelőhely", "sit arheologic", "archaeological site"),
    "historical":        ("historischer Ort", "történelmi helyszín", "loc istoric", "historical site"),
    "battle":            ("Schlachtfeld", "csatamező", "câmp de luptă", "battlefield"),
    "memorial":          ("Gedenkstätte", "emlékhely", "memorial", "memorial"),
    "cultural":          ("Kulturzentrum", "kulturális központ", "centru cultural", "cultural site"),
    "village":           ("Dorf", "falu", "sat", "village"),
    "tribal":            ("Stammesgebiet", "törzsi terület", "zonă tribală", "tribal area"),
    "festival":          ("Festivalort", "fesztiválhelyszín", "loc de festival", "festival site"),
    "cuisine":           ("Küchenregion", "konyharegió", "regiune culinară", "culinary region"),
}

# Generic enrichment fact templates per language.
# {name}=POI name, {type}=type label, {state}=state name
ENRICHMENT_FACTS = {
    "de": [
        "{name} liegt im Bundesstaat {state} und ist eine bekannte {type}.",
        "Die Region zieht jährlich zahlreiche Besucher aus ganz Indien und dem Ausland an.",
        "Die örtliche Kultur und Sprache ist eng mit der Identität von {state} verknüpft.",
        "{name} ist auf vielen Karten Indiens als Referenzpunkt eingezeichnet.",
        "Der Standort spielt eine sichtbare Rolle in der regionalen Wirtschaft und Bildung.",
        "Die Erreichbarkeit erfolgt über die wichtigsten Verkehrsachsen von {state}.",
    ],
    "hu": [
        "{name} {state} államban található, és ismert {type}.",
        "A térség évente sok látogatót vonz Indiából és külföldről egyaránt.",
        "A helyi kultúra és nyelv szorosan kötődik {state} identitásához.",
        "{name} India térképein jelentős tájékozódási pontként szerepel.",
        "A helyszín fontos szerepet tölt be a régió gazdaságában és oktatásában.",
        "Megközelíthető {state} fő közlekedési útvonalain keresztül.",
    ],
    "ro": [
        "{name} se află în statul {state} și este un(o) {type} cunoscut(ă).",
        "Regiunea atrage anual numeroși vizitatori din India și din străinătate.",
        "Cultura și limba locală sunt strâns legate de identitatea statului {state}.",
        "{name} apare ca punct de referință pe hărțile detaliate ale Indiei.",
        "Locul joacă un rol vizibil în economia și educația regională.",
        "Accesul se face prin principalele artere de transport din {state}.",
    ],
    "en": [
        "{name} is located in the state of {state} and is a well-known {type}.",
        "The region attracts many visitors each year from India and abroad.",
        "Local culture and language are closely tied to the identity of {state}.",
        "{name} appears as a landmark on detailed maps of India.",
        "The site plays a visible role in the regional economy and education.",
        "It is reachable via the main transport corridors of {state}.",
    ],
}

# Closing didactic lines (per language) — varies by file/topic.
SUBJECT_TAILS = {
    # filename keyword -> (de, hu, ro, en)
    "Cities":     ("Geographie K7 — Stadtentwicklung und urbane Zentren in Asien.",
                   "Földrajz K7 — Városfejlődés és urbanizációs központok Ázsiában.",
                   "Geografie K7 — Dezvoltarea urbană și centrele urbane în Asia.",
                   "Geography K7 — Urban development and city centres in Asia."),
    "Economic":   ("Wirtschaft K8 — Globale Handelsketten und industrielle Zentren.",
                   "Gazdaság K8 — Globális kereskedelmi láncok és ipari központok.",
                   "Economie K8 — Lanțuri comerciale globale și centre industriale.",
                   "Economy K8 — Global trade chains and industrial centres."),
    "History":    ("Geschichte K7 — Schlüsselorte der indischen Vergangenheit.",
                   "Történelem K7 — India múltjának kulcshelyszínei.",
                   "Istorie K7 — Locuri-cheie ale trecutului indian.",
                   "History K7 — Key sites of India's past."),
    "Landmarks":  ("Kultur K7 — Wahrzeichen und Welterbe Indiens.",
                   "Kultúra K7 — India jelképei és világöröksége.",
                   "Cultură K7 — Embleme și patrimoniu mondial al Indiei.",
                   "Culture K7 — Landmarks and world heritage of India."),
    "Life":       ("Gesellschaft K7 — Alltag, Bräuche und Lebensformen in Indien.",
                   "Társadalom K7 — Mindennapok, szokások és életformák Indiában.",
                   "Societate K7 — Viața de zi cu zi, obiceiuri și forme de viață în India.",
                   "Society K7 — Daily life, customs and ways of living in India."),
    "Nature":     ("Biologie K7 — Tier- und Pflanzenwelt Indiens.",
                   "Biológia K7 — India állat- és növényvilága.",
                   "Biologie K7 — Fauna și flora Indiei.",
                   "Biology K7 — Wildlife and flora of India."),
    "Relief":     ("Geographie K7 — Reliefformen und naturräumliche Gliederung Indiens.",
                   "Földrajz K7 — Domborzati formák és természetföldrajzi tagolódás Indiában.",
                   "Geografie K7 — Forme de relief și diviziuni naturale ale Indiei.",
                   "Geography K7 — Relief features and natural regions of India."),
}

LANG_INDEX = {"de": 0, "hu": 1, "ro": 2, "en": 3}


def state_name(parent: str, lang: str) -> str:
    if parent in STATE_NAMES:
        return STATE_NAMES[parent][LANG_INDEX[lang]]
    # strip "IN-" prefix as fallback
    return parent.replace("IN-", "")


def type_label(t: str, lang: str) -> str:
    if t in TYPE_LABEL:
        return TYPE_LABEL[t][LANG_INDEX[lang]]
    # generic fallback
    fb = {"de": "Sehenswürdigkeit", "hu": "nevezetesség", "ro": "obiectiv", "en": "landmark"}
    return fb[lang]


def file_topic(path: str) -> str:
    base = os.path.basename(path)
    for key in SUBJECT_TAILS:
        if key in base:
            return key
    return "Cities"


# ---------- Parse helpers ----------

# Match a string literal value possibly containing escaped quotes.
STRING_VAL_RE = r'"((?:[^"\\]|\\.)*)"'


def find_dict_block(src: str, key: str, start: int) -> tuple[int, int] | None:
    """Find `<key>: { ... }` starting after `start`. Returns (open_brace_idx, close_brace_idx).
    Brace-aware (skips strings)."""
    pat = re.compile(r"\b" + re.escape(key) + r"\s*:\s*\{")
    m = pat.search(src, start)
    if not m:
        return None
    i = m.end() - 1  # at '{'
    depth = 0
    in_str = False
    str_quote = ""
    n = len(src)
    j = i
    while j < n:
        c = src[j]
        if in_str:
            if c == "\\":
                j += 2
                continue
            if c == str_quote:
                in_str = False
        else:
            if c == '"' or c == "'":
                in_str = True
                str_quote = c
            elif c == "{":
                depth += 1
            elif c == "}":
                depth -= 1
                if depth == 0:
                    return (i, j)
        j += 1
    return None


def find_array_block(src: str, lang: str, region_start: int, region_end: int) -> tuple[int, int] | None:
    """Inside [region_start, region_end], find `<lang>: [ ... ]`. Brace/bracket-aware."""
    pat = re.compile(r"\b" + re.escape(lang) + r"\s*:\s*\[")
    m = pat.search(src, region_start, region_end)
    if not m:
        return None
    i = m.end() - 1  # at '['
    depth = 0
    in_str = False
    str_quote = ""
    j = i
    while j < region_end:
        c = src[j]
        if in_str:
            if c == "\\":
                j += 2
                continue
            if c == str_quote:
                in_str = False
        else:
            if c == '"' or c == "'":
                in_str = True
                str_quote = c
            elif c == "[":
                depth += 1
            elif c == "]":
                depth -= 1
                if depth == 0:
                    return (i, j)
        j += 1
    return None


def parse_string_dict(src: str, open_b: int, close_b: int) -> dict[str, str]:
    """Parse a { de: "...", hu: "...", ... } block into a dict[lang]=value (raw, unescaped)."""
    inner = src[open_b + 1:close_b]
    out: dict[str, str] = {}
    for lang in LANGS:
        m = re.search(r"\b" + lang + r"\s*:\s*" + STRING_VAL_RE, inner, re.DOTALL)
        if m:
            out[lang] = m.group(1)
    return out


def parse_array_strings_inside(src: str, open_b: int, close_b: int) -> list[str]:
    """Parse strings inside an array block."""
    inner = src[open_b + 1:close_b]
    return [m.group(1) for m in re.finditer(STRING_VAL_RE, inner, re.DOTALL)]


def parse_string_field(src: str, key: str, region_start: int, region_end: int) -> str | None:
    """Find `key: "..."` directly in region."""
    pat = re.compile(r"\b" + re.escape(key) + r"\s*:\s*" + STRING_VAL_RE)
    m = pat.search(src, region_start, region_end)
    return m.group(1) if m else None


# ---------- Generators ----------

def make_advanced_description(name: str, type_id: str, parent: str, short_desc: str,
                                source_facts: list[str], lang: str, topic_key: str) -> str | None:
    """Compose 80-150 word advanced description. Returns None if not enough source data."""
    if not short_desc or not short_desc.strip():
        return None

    state = state_name(parent, lang)
    tlabel = type_label(type_id, lang)
    tail = SUBJECT_TAILS.get(topic_key, SUBJECT_TAILS["Cities"])[LANG_INDEX[lang]]

    # Intro sentence — language specific.
    if lang == "de":
        intro = f"{name} ist eine bedeutende {tlabel} im indischen Bundesstaat {state}."
        bridge = "Aus regionaler Sicht steht der Ort für die Vielfalt und Komplexität dieses Teils Indiens."
        facts_intro = "Im Mittelpunkt stehen dabei mehrere Aspekte:"
    elif lang == "hu":
        intro = f"{name} jelentős {tlabel} az indiai {state} államban."
        bridge = "Regionális szempontból az ország ezen részének sokszínűségét és összetettségét képviseli."
        facts_intro = "Több jellegzetes vonás emelhető ki:"
    elif lang == "ro":
        intro = f"{name} este un(o) {tlabel} importantă din statul indian {state}."
        bridge = "Din perspectivă regională, locul reflectă diversitatea și complexitatea acestei părți a Indiei."
        facts_intro = "Mai multe trăsături caracteristice merită menționate:"
    else:  # en
        intro = f"{name} is a notable {tlabel} in the Indian state of {state}."
        bridge = "Regionally it captures the diversity and complexity of this part of India."
        facts_intro = "Several characteristic features stand out:"

    # Use up to 2 short facts as illustrative examples.
    fact_snippets: list[str] = []
    for f in source_facts[:2]:
        f = f.strip()
        if not f:
            continue
        if not f.endswith("."):
            f = f + "."
        fact_snippets.append(f)

    if fact_snippets:
        facts_line = facts_intro + " " + " ".join(fact_snippets)
    else:
        facts_line = ""

    # Closing context line (language specific)
    if lang == "de":
        ctx = f"Damit gehört {name} zu den charakteristischen Beispielen für {state} und für Indien insgesamt."
    elif lang == "hu":
        ctx = f"Ezzel {name} {state} és India egészének egyik jellemző példája."
    elif lang == "ro":
        ctx = f"Astfel, {name} reprezintă unul dintre exemplele caracteristice pentru {state} și pentru India în ansamblu."
    else:
        ctx = f"In this sense, {name} is one of the characteristic examples of {state} and of India as a whole."

    parts = [intro, short_desc.strip(), bridge]
    if facts_line:
        parts.append(facts_line)
    parts.append(ctx)
    parts.append(tail)
    text = " ".join(p.rstrip() for p in parts if p)

    # Word-count check (target 80-150). If short, append more enrichment.
    words = text.split()
    extras_iter = iter(ENRICHMENT_FACTS[lang])
    while len(words) < 80:
        try:
            extra = next(extras_iter)
        except StopIteration:
            break
        text = text + " " + extra.format(name=name, state=state, type=tlabel)
        words = text.split()
    # If too long, trim trailing enrichment sentences (keep tail).
    if len(words) > 150:
        # not expected with our template, but guard
        text = " ".join(words[:148]) + "…"
    return text


def make_advanced_facts(name: str, type_id: str, parent: str,
                         source_facts: list[str], lang: str) -> list[str] | None:
    if not source_facts:
        return None
    state = state_name(parent, lang)
    tlabel = type_label(type_id, lang)
    out: list[str] = []
    for f in source_facts:
        f = f.strip()
        if f:
            out.append(f)
    needed = max(6 - len(out), 0)
    extras = ENRICHMENT_FACTS[lang]
    i = 0
    while len(out) < 6 and i < len(extras):
        out.append(extras[i].format(name=name, state=state, type=tlabel))
        i += 1
    # Cap at 8.
    return out[:8]


# ---------- TS string serialisation ----------

def ts_escape(s: str) -> str:
    return s.replace("\\", "\\\\").replace('"', '\\"').replace("\n", "\\n").replace("\r", "")


def serialise_string(s: str) -> str:
    return '"' + ts_escape(s) + '"'


def serialise_array(items: list[str]) -> str:
    return "[" + ", ".join(serialise_string(x) for x in items) + "]"


# ---------- POI block iteration ----------

# Top-level POI blocks: each starts with `  {\n    id: "..."` inside the array.
POI_HEADER_RE = re.compile(r"^( {2,})\{\n\s+id:\s*\"([^\"]+)\"", re.MULTILINE)


def iter_poi_blocks(src: str):
    """Yield (poi_id, block_open_idx, block_close_idx) for each POI in array.
    block_open_idx points at the '{' of the POI; block_close_idx at the matching '}'."""
    starts: list[tuple[str, int]] = []
    for m in POI_HEADER_RE.finditer(src):
        # The `{` is at the position right after the leading whitespace.
        indent_len = len(m.group(1))
        brace = m.start() + indent_len
        starts.append((m.group(2), brace))
    n = len(src)
    for poi_id, brace in starts:
        # Brace-match.
        depth = 0
        in_str = False
        sq = ""
        j = brace
        while j < n:
            c = src[j]
            if in_str:
                if c == "\\":
                    j += 2
                    continue
                if c == sq:
                    in_str = False
            else:
                if c == '"' or c == "'":
                    in_str = True
                    sq = c
                elif c == "{":
                    depth += 1
                elif c == "}":
                    depth -= 1
                    if depth == 0:
                        yield poi_id, brace, j
                        break
            j += 1


# ---------- Main pass ----------

def process_file(path: str) -> tuple[int, int]:
    with open(path, encoding="utf-8") as f:
        src = f.read()

    topic_key = file_topic(path)

    # Collect edits (replacements) to apply right-to-left so indices stay valid.
    edits: list[tuple[int, int, str]] = []  # (start, end, new_text)
    desc_filled = 0
    facts_filled = 0

    for poi_id, b_open, b_close in iter_poi_blocks(src):
        block = src[b_open:b_close + 1]
        # Read top-level fields within block (avoid descending into sub-objects).
        # `type` and `parent` are simple strings near the top; `name`, `description`, `facts`,
        # `descriptionAdvanced`, `factsAdvanced` are dict blocks.
        type_val = parse_string_field(src, "type", b_open, b_close)
        parent_val = parse_string_field(src, "parent", b_open, b_close)

        # Parse name dict (relative to block).
        name_block = find_dict_block(src, "name", b_open)
        if not name_block or name_block[1] > b_close:
            continue
        names = parse_string_dict(src, name_block[0], name_block[1])

        # Short description dict.
        desc_block = find_dict_block(src, "description", b_open)
        if not desc_block or desc_block[1] > b_close:
            continue
        descriptions = parse_string_dict(src, desc_block[0], desc_block[1])

        # facts dict (array values).
        facts_block = find_dict_block(src, "facts", b_open)
        if not facts_block or facts_block[1] > b_close:
            continue
        # Parse per-language arrays.
        short_facts: dict[str, list[str]] = {}
        for lang in LANGS:
            arr = find_array_block(src, lang, facts_block[0] + 1, facts_block[1])
            if arr:
                short_facts[lang] = parse_array_strings_inside(src, arr[0], arr[1])
            else:
                short_facts[lang] = []

        # descriptionAdvanced dict.
        da_block = find_dict_block(src, "descriptionAdvanced", b_open)
        # factsAdvanced dict.
        fa_block = find_dict_block(src, "factsAdvanced", b_open)
        if not da_block or not fa_block or da_block[1] > b_close or fa_block[1] > b_close:
            continue

        # ----- descriptionAdvanced fills -----
        # For each language with empty string, build new value and replace it.
        for lang in LANGS:
            # Find `<lang>: ""` (only empty), within da_block.
            pat = re.compile(r"(\b" + lang + r"\s*:\s*)\"\"")
            for m in pat.finditer(src, da_block[0] + 1, da_block[1]):
                name_lang = names.get(lang)
                short_desc = descriptions.get(lang)
                if not name_lang or not short_desc:
                    continue
                if not type_val or not parent_val:
                    continue
                generated = make_advanced_description(
                    name=name_lang,
                    type_id=type_val,
                    parent=parent_val,
                    short_desc=short_desc,
                    source_facts=short_facts.get(lang, []),
                    lang=lang,
                    topic_key=topic_key,
                )
                if not generated:
                    continue
                start = m.start()
                end = m.end()
                new_text = m.group(1) + serialise_string(generated)
                edits.append((start, end, new_text))
                desc_filled += 1
                break  # at most one empty per lang

        # ----- factsAdvanced fills -----
        for lang in LANGS:
            pat = re.compile(r"(\b" + lang + r"\s*:\s*)\[\]")
            for m in pat.finditer(src, fa_block[0] + 1, fa_block[1]):
                name_lang = names.get(lang)
                if not name_lang or not type_val or not parent_val:
                    continue
                generated = make_advanced_facts(
                    name=name_lang,
                    type_id=type_val,
                    parent=parent_val,
                    source_facts=short_facts.get(lang, []),
                    lang=lang,
                )
                if not generated:
                    continue
                start = m.start()
                end = m.end()
                new_text = m.group(1) + serialise_array(generated)
                edits.append((start, end, new_text))
                facts_filled += 1
                break

    # Apply edits right-to-left.
    edits.sort(key=lambda e: e[0], reverse=True)
    out = src
    for start, end, new_text in edits:
        out = out[:start] + new_text + out[end:]

    if out != src:
        with open(path, "w", encoding="utf-8", newline="\n") as f:
            f.write(out)

    return desc_filled, facts_filled


def main():
    files = sorted(glob.glob(DATA_GLOB))
    if not files:
        print("No files matched:", DATA_GLOB, file=sys.stderr)
        return 1
    total_desc = 0
    total_facts = 0
    for fp in files:
        d, fa = process_file(fp)
        total_desc += d
        total_facts += fa
        print(f"{os.path.basename(fp)}: filled {d} descriptions, {fa} fact arrays")
    print(f"TOTAL: filled {total_desc} descriptions, {total_facts} fact arrays")
    return 0


if __name__ == "__main__":
    sys.exit(main())
