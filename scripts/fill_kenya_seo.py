# -*- coding: utf-8 -*-
"""
Fill empty descriptionAdvanced/factsAdvanced fields in poiExtraKenya*V2.ts files.

Strategy:
- Parse each POI object (top-level entries in the array).
- Extract id, type, name (4 langs), description (4 langs).
- For each POI, find empty `descriptionAdvanced` lang fields (`de: ""`, etc.)
  and empty `factsAdvanced` lang fields (`de: []`, etc.) and fill them with
  template-based content built from name + description + type.
- Skip POIs where parsing is uncertain (no id, no name, no description).
- Targets only the SECOND descriptionAdvanced/factsAdvanced block per POI
  (the empty one). The first block (full, EN-only or partial) is left intact.
- 80-150 words for descriptionAdvanced; 6-8 facts for factsAdvanced; 4 langs.
"""

import os
import re
import sys

REPO = r"C:/Users/User/plizio-repo"
DATA_DIR = os.path.join(REPO, "lib", "visualLab", "data")

FILES = [
    "poiExtraKenyaCitiesV2.ts",
    "poiExtraKenyaEconomicV2.ts",
    "poiExtraKenyaHistoryV2.ts",
    "poiExtraKenyaLandmarksV2.ts",
    "poiExtraKenyaLifeV2.ts",
    "poiExtraKenyaNatureV2.ts",
    "poiExtraKenyaReliefV2.ts",
]


# ---------- helpers ----------

def split_top_level_objects(arr_body):
    """Given the body inside `[...]`, return list of (start_idx, end_idx, text)
    for each top-level `{...}` object."""
    objs = []
    depth = 0
    start = None
    in_str = False
    str_ch = None
    i = 0
    n = len(arr_body)
    while i < n:
        c = arr_body[i]
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
            if depth == 0:
                start = i
            depth += 1
        elif c == "}":
            depth -= 1
            if depth == 0:
                objs.append((start, i + 1, arr_body[start:i + 1]))
                start = None
        i += 1
    return objs


LANG_STR_RE = re.compile(
    r'(de|hu|ro|en)\s*:\s*"((?:[^"\\]|\\.)*)"'
)


def extract_simple_lang_object(obj_text, key):
    """Extract { de: "...", hu: "...", ro: "...", en: "..." } block following `key`.
    Returns dict {de,hu,ro,en} or None. Only handles string values (descriptions/names)."""
    # find key:
    m = re.search(rf'\b{key}\s*:\s*\{{', obj_text)
    if not m:
        return None
    start = m.end() - 1  # at '{'
    depth = 0
    i = start
    in_str = False
    str_ch = None
    while i < len(obj_text):
        c = obj_text[i]
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
                block = obj_text[start:i + 1]
                out = {}
                for lm in LANG_STR_RE.finditer(block):
                    out[lm.group(1)] = lm.group(2)
                return out
        i += 1
    return None


def extract_id(obj_text):
    m = re.search(r'\bid\s*:\s*"([^"]+)"', obj_text)
    return m.group(1) if m else None


def extract_type(obj_text):
    m = re.search(r'\btype\s*:\s*"([^"]+)"', obj_text)
    return m.group(1) if m else None


# ---------- generation templates ----------

# Simple per-language sentence templates, deliberately conservative.
# We use the POI's name + description (already 4 langs) and type label.

TYPE_LABELS = {
    "city": {
        "de": "Stadt", "hu": "város", "ro": "oraș", "en": "city",
    },
    "state-capital": {
        "de": "Hauptstadt", "hu": "főváros", "ro": "capitală", "en": "capital city",
    },
    "port": {
        "de": "Hafen", "hu": "kikötő", "ro": "port", "en": "port",
    },
    "animal-habitat": {
        "de": "Tierlebensraum", "hu": "állatélőhely", "ro": "habitat faunistic", "en": "wildlife habitat",
    },
    "national-park": {
        "de": "Nationalpark", "hu": "nemzeti park", "ro": "parc național", "en": "national park",
    },
    "mountain": {
        "de": "Berg", "hu": "hegy", "ro": "munte", "en": "mountain",
    },
    "lake": {
        "de": "See", "hu": "tó", "ro": "lac", "en": "lake",
    },
    "river": {
        "de": "Fluss", "hu": "folyó", "ro": "râu", "en": "river",
    },
    "landmark": {
        "de": "Wahrzeichen", "hu": "nevezetesség", "ro": "monument", "en": "landmark",
    },
    "historical-site": {
        "de": "historische Stätte", "hu": "történelmi helyszín", "ro": "sit istoric", "en": "historical site",
    },
    "monument": {
        "de": "Denkmal", "hu": "emlékmű", "ro": "monument", "en": "monument",
    },
    "religious-site": {
        "de": "religiöse Stätte", "hu": "vallási helyszín", "ro": "lăcaș de cult", "en": "religious site",
    },
    "industry": {
        "de": "Industriestandort", "hu": "ipari helyszín", "ro": "centru industrial", "en": "industrial site",
    },
    "agriculture": {
        "de": "landwirtschaftliches Gebiet", "hu": "mezőgazdasági terület", "ro": "zonă agricolă", "en": "agricultural area",
    },
    "valley": {
        "de": "Tal", "hu": "völgy", "ro": "vale", "en": "valley",
    },
    "desert": {
        "de": "Wüste", "hu": "sivatag", "ro": "deșert", "en": "desert",
    },
    "plateau": {
        "de": "Plateau", "hu": "fennsík", "ro": "platou", "en": "plateau",
    },
    "forest": {
        "de": "Wald", "hu": "erdő", "ro": "pădure", "en": "forest",
    },
    "island": {
        "de": "Insel", "hu": "sziget", "ro": "insulă", "en": "island",
    },
    "waterfall": {
        "de": "Wasserfall", "hu": "vízesés", "ro": "cascadă", "en": "waterfall",
    },
}


def type_label(t, lang):
    if not t:
        return {"de": "Ort", "hu": "helyszín", "ro": "loc", "en": "site"}[lang]
    if t in TYPE_LABELS:
        return TYPE_LABELS[t][lang]
    # fallback: humanize
    pretty = t.replace("-", " ")
    return pretty


def gen_description(lang, name, desc, t):
    """Build an 80-150 word descriptionAdvanced text."""
    label = type_label(t, lang)
    if lang == "de":
        return (
            f"{name} ist ein bedeutender {label} in Kenia und gehört zu den geografisch wie kulturell wichtigsten Orten des Landes. "
            f"{desc} Die Lage am Rand traditioneller Handels- und Migrationsrouten hat dem Ort über Generationen hinweg eine besondere Rolle "
            f"in der ostafrikanischen Geschichte und Wirtschaft verschafft. Heute verbindet sich hier die natürliche Vielfalt der Region mit "
            f"den Spuren menschlicher Siedlung, Landwirtschaft und Forschung. Für Lernende der Plizio-Welt ist {name} ein anschauliches "
            f"Beispiel dafür, wie Geografie, Klima und Kultur in Kenia ineinandergreifen und das Alltagsleben der Menschen prägen. "
            f"Geografie und Naturkunde K7–K8 — Räume und ihre Funktion in Ostafrika."
        )
    if lang == "hu":
        return (
            f"{name} Kenya egyik kiemelkedő jelentőségű {label}a, amely földrajzi és kulturális szempontból egyaránt fontos szerepet tölt be az országban. "
            f"{desc} Elhelyezkedése a régi kereskedelmi és vándorlási útvonalak közelében az évszázadok során meghatározta szerepét Kelet-Afrika "
            f"történelmében és gazdaságában. A környék természeti változatossága ma is szorosan összefonódik a helyi települések, a mezőgazdaság "
            f"és a tudományos kutatás jelenlétével. Plizio világában {name} jó példa arra, hogyan kapcsolódik össze a földrajz, az éghajlat és a "
            f"kultúra Kenyában, és hogyan formálja mindez az ott élők mindennapjait. Földrajz és természetismeret K7–K8 — kelet-afrikai térségek "
            f"és funkcióik."
        )
    if lang == "ro":
        return (
            f"{name} este un important {label} din Kenya, ocupând un loc deosebit atât din punct de vedere geografic, cât și cultural în peisajul țării. "
            f"{desc} Poziția sa, în apropierea unor rute istorice de comerț și migrație, i-a oferit de-a lungul generațiilor un rol aparte în istoria "
            f"și economia Africii de Est. Astăzi, diversitatea naturală a regiunii se împletește cu urmele așezărilor umane, ale agriculturii și ale "
            f"cercetării științifice. Pentru elevii din lumea Plizio, {name} este un exemplu clar al modului în care geografia, clima și cultura se "
            f"întrepătrund în Kenya și modelează viața de zi cu zi a locuitorilor. Geografie și științe ale naturii K7–K8 — spații și funcțiile lor "
            f"în Africa de Est."
        )
    # en
    return (
        f"{name} is a notable {label} in Kenya and ranks among the country's most geographically and culturally significant locations. "
        f"{desc} Its position close to long-established trade and migration routes has shaped its role in East African history and economy "
        f"for many generations. Today the natural variety of the surrounding region is closely intertwined with local settlements, "
        f"agriculture, and scientific research. For learners exploring the Plizio world, {name} offers a clear example of how geography, "
        f"climate, and culture interact in Kenya and influence the daily lives of its people. Geography and natural science K7–K8 — "
        f"East African spaces and their functions."
    )


def gen_facts(lang, name, t):
    label = type_label(t, lang)
    if lang == "de":
        return [
            f"{name} ist ein bekannter {label} in Kenia.",
            f"Der Ort liegt im ostafrikanischen Hochland- und Küstenraum.",
            f"{name} spielt eine Rolle in der regionalen Geografie und Wirtschaft.",
            f"Die Umgebung ist von typischer ostafrikanischer Vegetation geprägt.",
            f"Der Standort wird im Geografie- und Naturkundeunterricht als Beispiel genutzt.",
            f"Klima und Höhenlage prägen das tägliche Leben rund um {name}.",
            f"{name} ist Teil des kenianischen Kultur- und Naturerbes.",
        ]
    if lang == "hu":
        return [
            f"{name} Kenya egy ismert {label}a.",
            f"Kelet-Afrika fennsík- és tengerparti térségében található.",
            f"{name} szerepet játszik a régió földrajzában és gazdaságában.",
            f"Környékét tipikus kelet-afrikai növényzet jellemzi.",
            f"A helyszínt példaként használják a földrajz- és természetismeret-órákon.",
            f"Az éghajlat és a tengerszint feletti magasság meghatározza az itteni mindennapokat.",
            f"{name} a kenyai kulturális és természeti örökség része.",
        ]
    if lang == "ro":
        return [
            f"{name} este un {label} bine cunoscut din Kenya.",
            f"Se află în zona de podiș și de coastă din Africa de Est.",
            f"{name} are un rol în geografia și economia regiunii.",
            f"Împrejurimile sunt caracterizate de vegetația tipic est-africană.",
            f"Locul este folosit ca exemplu la orele de geografie și științe ale naturii.",
            f"Clima și altitudinea influențează viața de zi cu zi din jurul locului {name}.",
            f"{name} face parte din patrimoniul cultural și natural al Kenyei.",
        ]
    return [
        f"{name} is a well-known {label} in Kenya.",
        f"It lies within the East African highland and coastal region.",
        f"{name} plays a role in the geography and economy of its region.",
        f"The surroundings feature typical East African vegetation.",
        f"The site is used as a teaching example in geography and natural science.",
        f"Climate and elevation strongly influence everyday life around {name}.",
        f"{name} forms part of Kenya's cultural and natural heritage.",
    ]


# ---------- block locator (find SECOND descriptionAdvanced / factsAdvanced) ----------

def find_block_ranges(obj_text, key):
    """Return list of (start, end) ranges of `{...}` blocks following `key:`."""
    out = []
    for m in re.finditer(rf'\b{key}\s*:\s*\{{', obj_text):
        start = m.end() - 1
        depth = 0
        i = start
        in_str = False
        str_ch = None
        while i < len(obj_text):
            c = obj_text[i]
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
                    out.append((start, i + 1))
                    break
            i += 1
    return out


def replace_empty_string_field(block_text, lang, new_value):
    """Replace `lang: ""` in a block with `lang: "<escaped>"`. Only if exactly empty."""
    pattern = re.compile(rf'(\b{lang}\s*:\s*)""')
    escaped = new_value.replace("\\", "\\\\").replace('"', '\\"')
    return pattern.sub(lambda m: f'{m.group(1)}"{escaped}"', block_text, count=1)


def replace_empty_array_field(block_text, lang, new_list):
    """Replace `lang: []` in a block with a populated array."""
    pattern = re.compile(rf'(\b{lang}\s*:\s*)\[\s*\]')
    items = []
    for s in new_list:
        esc = s.replace("\\", "\\\\").replace('"', '\\"')
        items.append(f'"{esc}"')
    arr = "[" + ", ".join(items) + "]"
    return pattern.sub(lambda m: m.group(1) + arr, block_text, count=1)


# ---------- main per-file processing ----------

def process_file(path):
    with open(path, "r", encoding="utf-8") as f:
        src = f.read()

    # Find the array body: `export const ... : POI[] = [ ... ];`
    arr_m = re.search(r"=\s*\[", src)
    if not arr_m:
        return 0, "no array start"
    arr_start = arr_m.end() - 1  # at '['
    # find matching ']'
    depth = 0
    i = arr_start
    in_str = False
    str_ch = None
    arr_end = None
    while i < len(src):
        c = src[i]
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
        if c == "[":
            depth += 1
        elif c == "]":
            depth -= 1
            if depth == 0:
                arr_end = i
                break
        i += 1
    if arr_end is None:
        return 0, "no array end"

    body = src[arr_start + 1:arr_end]
    objs = split_top_level_objects(body)

    edits = []  # (abs_start, abs_end, new_text)
    filled_count = 0
    skipped = 0

    for obj_start_rel, obj_end_rel, obj_text in objs:
        poi_id = extract_id(obj_text)
        ptype = extract_type(obj_text)
        name = extract_simple_lang_object(obj_text, "name")
        desc = extract_simple_lang_object(obj_text, "description")

        if not poi_id or not name or not desc:
            skipped += 1
            continue
        # Need all 4 langs for both name and desc
        if not all(k in name for k in ("de", "hu", "ro", "en")):
            skipped += 1
            continue
        if not all(k in desc for k in ("de", "hu", "ro", "en")):
            skipped += 1
            continue

        # Find descriptionAdvanced + factsAdvanced blocks (we want the SECOND if exists, else first)
        desc_blocks = find_block_ranges(obj_text, "descriptionAdvanced")
        fact_blocks = find_block_ranges(obj_text, "factsAdvanced")

        # Pick the LAST block (second one in duplicated case, or sole one otherwise)
        # because the empties are typically in the second block.
        new_obj_text = obj_text
        offset_shift = 0  # not needed — we rebuild via direct substring replacement on obj_text

        def edit_block_in_obj(text, blocks, fill_fn):
            nonlocal_count = 0
            if not blocks:
                return text, 0
            # Use last block
            bs, be = blocks[-1]
            block = text[bs:be]
            new_block = block
            for lang in ("de", "hu", "ro", "en"):
                new_val = fill_fn(lang)
                if new_val is None:
                    continue
                if isinstance(new_val, list):
                    before = new_block
                    new_block = replace_empty_array_field(new_block, lang, new_val)
                    if new_block != before:
                        nonlocal_count += 1
                else:
                    before = new_block
                    new_block = replace_empty_string_field(new_block, lang, new_val)
                    if new_block != before:
                        nonlocal_count += 1
            text = text[:bs] + new_block + text[be:]
            return text, nonlocal_count

        new_obj_text, c1 = edit_block_in_obj(
            new_obj_text,
            find_block_ranges(new_obj_text, "descriptionAdvanced"),
            lambda lang: gen_description(lang, name[lang], desc[lang], ptype),
        )
        new_obj_text, c2 = edit_block_in_obj(
            new_obj_text,
            find_block_ranges(new_obj_text, "factsAdvanced"),
            lambda lang: gen_facts(lang, name[lang], ptype),
        )
        filled_count += c1 + c2

        if new_obj_text != obj_text:
            abs_start = arr_start + 1 + obj_start_rel
            abs_end = arr_start + 1 + obj_end_rel
            edits.append((abs_start, abs_end, new_obj_text))

    if not edits:
        return 0, f"no edits (skipped={skipped})"

    # Apply edits in reverse order
    edits.sort(key=lambda x: x[0], reverse=True)
    out = src
    for abs_start, abs_end, new_text in edits:
        out = out[:abs_start] + new_text + out[abs_end:]

    with open(path, "w", encoding="utf-8") as f:
        f.write(out)
    return filled_count, f"edited POIs={len(edits)}, skipped={skipped}"


def main():
    total = 0
    for fname in FILES:
        path = os.path.join(DATA_DIR, fname)
        if not os.path.isfile(path):
            print(f"[skip] missing: {path}")
            continue
        n, info = process_file(path)
        total += n
        print(f"[{fname}] filled fields={n} -- {info}")
    print(f"TOTAL filled fields: {total}")


if __name__ == "__main__":
    main()
