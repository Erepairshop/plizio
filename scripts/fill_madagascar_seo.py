#!/usr/bin/env python3
"""
Fill empty descriptionAdvanced/factsAdvanced fields in poiExtraMadagascar*V2.ts files.

Strategy: every POI has TWO duplicate descriptionAdvanced and factsAdvanced blocks.
The SECOND (last) block is the active one in TS object literals. The second block
typically has de/hu populated and ro/en empty (or vice versa). We copy the missing
language content from the FIRST block into the SECOND block's empty slots.

Fallback: if first block also lacks the language, build a minimal template from the
basic `description` and `name` fields.
"""

import os
import re
import json

DATA_DIR = os.path.join(os.path.dirname(__file__), "..", "lib", "visualLab", "data")
FILES = [
    "poiExtraMadagascarCitiesV2.ts",
    "poiExtraMadagascarEconomicV2.ts",
    "poiExtraMadagascarHistoryV2.ts",
    "poiExtraMadagascarLandmarksV2.ts",
    "poiExtraMadagascarLifeV2.ts",
    "poiExtraMadagascarNatureV2.ts",
    "poiExtraMadagascarReliefV2.ts",
]

LANGS = ["de", "hu", "ro", "en"]


# Templates for fallback descriptionAdvanced (when both blocks lack the language).
# Use placeholders {name} and {desc}. ~80-150 words.
DESC_TEMPLATES = {
    "de": (
        "{name} ist ein bedeutender Ort in Madagaskar. {desc} "
        "Die geografische Lage und die natürlichen Gegebenheiten prägen die Region nachhaltig "
        "und machen sie zu einem charakteristischen Bestandteil der madagassischen Landschaft. "
        "Die kulturelle und wirtschaftliche Bedeutung ist über Jahrzehnte gewachsen und spiegelt "
        "sich in der lokalen Bevölkerung, der Architektur und den traditionellen Wirtschaftsformen wider. "
        "Heute ist {name} ein wichtiger Bezugspunkt für Besucher, Forscher und Einheimische, "
        "die sich für die einzigartige Natur und Geschichte der Insel interessieren. "
        "Geografie K6 — Madagaskar, Regionen und Lebensräume."
    ),
    "hu": (
        "{name} fontos helyszín Madagaszkáron. {desc} "
        "A földrajzi fekvés és a természeti adottságok meghatározó módon alakítják a régiót, "
        "amely jellegzetes részét képezi a sziget változatos tájképének. "
        "A kulturális és gazdasági jelentősége az évtizedek alatt folyamatosan növekedett, "
        "és tükröződik a helyi közösség életében, az építészetben és a hagyományos gazdasági tevékenységekben. "
        "Ma {name} fontos viszonyítási pont a látogatók, a kutatók és a helyiek számára, "
        "akik a sziget egyedülálló természeti és történelmi öröksége iránt érdeklődnek. "
        "Plizio tanterv: Földrajz K6 — Madagaszkár régiói és tájai."
    ),
    "ro": (
        "{name} este un loc important din Madagascar. {desc} "
        "Așezarea geografică și condițiile naturale modelează în mod semnificativ regiunea, "
        "făcând-o o parte caracteristică a peisajului malgaș. "
        "Importanța sa culturală și economică a crescut de-a lungul deceniilor și se reflectă "
        "în viața comunității locale, în arhitectură și în activitățile economice tradiționale. "
        "Astăzi, {name} reprezintă un punct de referință pentru vizitatori, cercetători și localnici, "
        "interesați de natura unică și de istoria bogată a insulei. "
        "Geografie K6 — Madagascar, regiuni și ecosisteme."
    ),
    "en": (
        "{name} is a significant location in Madagascar. {desc} "
        "The geographic setting and natural conditions strongly shape the region, "
        "making it a distinctive part of the diverse Malagasy landscape. "
        "Its cultural and economic importance has grown over decades and is reflected "
        "in the daily life of the local community, the architecture, and traditional livelihoods. "
        "Today, {name} serves as a key reference point for visitors, researchers, and residents "
        "interested in the unique nature and rich history of the island. "
        "Geography K6 — Madagascar, regions and habitats."
    ),
}

FACTS_TEMPLATES = {
    "de": [
        "Liegt in Madagaskar.",
        "Ist Teil der charakteristischen Landschaft der Insel.",
        "Hat regionale Bedeutung für die lokale Bevölkerung.",
        "Wird in geografischen und kulturellen Studien erwähnt.",
        "Spiegelt die natürlichen Gegebenheiten der Region wider.",
        "Bildet einen Bezugspunkt für Besucher und Forscher.",
    ],
    "hu": [
        "Madagaszkáron található.",
        "A sziget jellegzetes tájképének része.",
        "Regionális jelentőséggel bír a helyi lakosság számára.",
        "Földrajzi és kulturális tanulmányokban szerepel.",
        "Tükrözi a régió természeti adottságait.",
        "Viszonyítási pont a látogatók és kutatók számára.",
    ],
    "ro": [
        "Se află în Madagascar.",
        "Face parte din peisajul caracteristic al insulei.",
        "Are importanță regională pentru populația locală.",
        "Este menționat în studii geografice și culturale.",
        "Reflectă condițiile naturale ale regiunii.",
        "Reprezintă un punct de referință pentru vizitatori și cercetători.",
    ],
    "en": [
        "Located in Madagascar.",
        "Forms part of the island's distinctive landscape.",
        "Has regional importance for the local population.",
        "Mentioned in geographic and cultural studies.",
        "Reflects the natural conditions of the region.",
        "Serves as a reference point for visitors and researchers.",
    ],
}


def find_block_end(text, start):
    """Given index right after '{', find the matching '}'. Track string and bracket depth."""
    depth = 1
    i = start
    in_str = False
    str_ch = None
    while i < len(text):
        c = text[i]
        if in_str:
            if c == "\\":
                i += 2
                continue
            if c == str_ch:
                in_str = False
            i += 1
            continue
        if c in ('"', "'", "`"):
            in_str = True
            str_ch = c
            i += 1
            continue
        if c == "{":
            depth += 1
        elif c == "}":
            depth -= 1
            if depth == 0:
                return i
        i += 1
    return -1


def parse_lang_obj(block_text, kind):
    """Parse a {de:..., hu:..., ro:..., en:...} block.
    kind = 'desc' (string values) or 'facts' (array values).
    Returns dict lang -> (raw_value_str, is_empty, start_offset, end_offset) within block_text.
    """
    result = {}
    for lang in LANGS:
        if kind == "desc":
            # match: lang: "..."  (multi-line possible)
            pat = re.compile(
                r'\b' + lang + r'\s*:\s*"((?:[^"\\]|\\.)*)"',
                re.DOTALL,
            )
        else:
            pat = re.compile(
                r'\b' + lang + r'\s*:\s*\[((?:[^\[\]]|\[[^\]]*\])*)\]',
                re.DOTALL,
            )
        m = pat.search(block_text)
        if m:
            raw = m.group(1)
            is_empty = (raw.strip() == "")
            result[lang] = (raw, is_empty, m.start(), m.end())
    return result


def escape_ts_string(s):
    """Escape a string for TS double-quoted literal."""
    return s.replace("\\", "\\\\").replace('"', '\\"').replace("\n", " ")


def build_facts_array(items):
    """Build TS array literal '["a", "b", ...]' from list of strings."""
    return "[" + ", ".join('"' + escape_ts_string(x) + '"' for x in items) + "]"


def parse_ts_array(raw):
    """Crude parse of a TS array of strings: extract double-quoted items."""
    items = []
    i = 0
    while i < len(raw):
        if raw[i] == '"':
            j = i + 1
            while j < len(raw):
                if raw[j] == "\\":
                    j += 2
                    continue
                if raw[j] == '"':
                    break
                j += 1
            items.append(raw[i + 1:j])
            i = j + 1
        else:
            i += 1
    return items


# Regex to find each POI object — match outer braces of array elements at top level.
# Easier: split on '{\n    id:' boundaries.

def iter_pois(text):
    """Yield (start, end, id_str, body_text) for each POI in the array."""
    # Find each `id: "..."` occurrence; then walk back to '{' and forward to matching '}'.
    for m in re.finditer(r'id:\s*"([^"]+)"', text):
        # walk back to the nearest top-level '{' that opens this object
        i = m.start()
        depth = 0
        while i > 0:
            i -= 1
            c = text[i]
            if c == '}':
                depth += 1
            elif c == '{':
                if depth == 0:
                    obj_start = i
                    break
                depth -= 1
        else:
            continue
        obj_end = find_block_end(text, obj_start + 1)
        if obj_end == -1:
            continue
        yield obj_start, obj_end, m.group(1), text[obj_start:obj_end + 1]


def find_advanced_blocks(body, key):
    """Find all `{key}: { ... }` block spans within body. Returns list of (start_brace, end_brace_inclusive)."""
    blocks = []
    for m in re.finditer(r'\b' + key + r'\s*:\s*\{', body):
        brace_pos = body.index('{', m.end() - 1)
        end = find_block_end(body, brace_pos + 1)
        if end != -1:
            blocks.append((brace_pos, end))
    return blocks


def get_basic_field(body, key):
    """Get the value of the basic `name` or `description` field for a POI body.
    Returns dict lang->str if it's an object literal."""
    m = re.search(r'\b' + key + r'\s*:\s*\{', body)
    if not m:
        return {}
    brace_pos = body.index('{', m.end() - 1)
    end = find_block_end(body, brace_pos + 1)
    if end == -1:
        return {}
    block = body[brace_pos + 1:end]
    out = {}
    for lang in LANGS:
        pm = re.search(r'\b' + lang + r'\s*:\s*"((?:[^"\\]|\\.)*)"', block, re.DOTALL)
        if pm:
            out[lang] = pm.group(1)
    return out


def process_file(path):
    with open(path, "r", encoding="utf-8") as f:
        text = f.read()

    # Walk POIs in order; we will rebuild text by replacing POI bodies one by one.
    # To avoid offset issues, do replacements from end to start.
    pois = list(iter_pois(text))
    pois.sort(key=lambda x: x[0])

    filled_count = 0
    new_text = text
    # Process from last to first to keep earlier offsets valid.
    for obj_start, obj_end, poi_id, body in reversed(pois):
        names = get_basic_field(body, "name")
        descs = get_basic_field(body, "description")

        new_body = body

        for kind, key in [("desc", "descriptionAdvanced"), ("facts", "factsAdvanced")]:
            blocks = find_advanced_blocks(new_body, key)
            if len(blocks) < 2:
                continue
            # First block (source), Last block (active target)
            first_start, first_end = blocks[0]
            last_start, last_end = blocks[-1]

            first_text = new_body[first_start + 1:first_end]
            last_text = new_body[last_start + 1:last_end]

            first_parsed = parse_lang_obj(first_text, kind)
            last_parsed = parse_lang_obj(last_text, kind)

            replacements = []  # list of (start_in_last, end_in_last, new_value_str)

            for lang in LANGS:
                if lang not in last_parsed:
                    continue
                raw, is_empty, ls, le = last_parsed[lang]
                if not is_empty:
                    continue

                # Source: first block same lang
                source_value = None
                if lang in first_parsed and not first_parsed[lang][1]:
                    source_value = first_parsed[lang][0]

                if kind == "desc":
                    if source_value:
                        new_inner = source_value
                    else:
                        # fallback template
                        nm = names.get(lang) or names.get("en") or names.get("de") or poi_id
                        ds = descs.get(lang) or ""
                        new_inner = DESC_TEMPLATES[lang].format(name=nm, desc=ds)
                        # escape for TS string (already plain text; no quotes inside expected)
                        new_inner = escape_ts_string(new_inner)
                    new_value = '"' + new_inner + '"'
                    new_value_full = lang + ': ' + new_value
                else:
                    if source_value is not None:
                        # Reuse the raw array contents
                        items = parse_ts_array(source_value)
                        if not items:
                            items = list(FACTS_TEMPLATES[lang])
                    else:
                        items = list(FACTS_TEMPLATES[lang])
                    new_value = build_facts_array(items)
                    new_value_full = lang + ': ' + new_value

                replacements.append((ls, le, new_value_full))
                filled_count += 1

            if not replacements:
                continue

            # Apply replacements in last_text from end to start.
            replacements.sort(key=lambda r: r[0], reverse=True)
            new_last_text = last_text
            for ls, le, val in replacements:
                new_last_text = new_last_text[:ls] + val + new_last_text[le:]

            new_body = (
                new_body[:last_start + 1]
                + new_last_text
                + new_body[last_end:]
            )

        if new_body != body:
            new_text = new_text[:obj_start] + new_body + new_text[obj_end + 1:]

    if new_text != text:
        with open(path, "w", encoding="utf-8") as f:
            f.write(new_text)

    return filled_count


def main():
    total = 0
    per_file = {}
    for fname in FILES:
        path = os.path.normpath(os.path.join(DATA_DIR, fname))
        n = process_file(path)
        per_file[fname] = n
        total += n
        print(f"{fname}: filled {n} fields")
    print(f"TOTAL: {total} fields")


if __name__ == "__main__":
    main()
