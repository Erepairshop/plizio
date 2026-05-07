# -*- coding: utf-8 -*-
"""
fill_guatemala_seo.py
Tölti az üres descriptionAdvanced és factsAdvanced mezőket a
poiExtraGuatemala*V2.ts fájlokban (de/hu/ro/en).

STRATÉGIA (cuba/honduras mintára):
- Beolvassa az egyes POI objektumok name / description / facts mezőit.
- Az ÜRES advanced mezőket Guatemala-specifikus template-ekkel tölti ki, a már
  létező rövid description + facts alapján. Cross-language tilos, ékezetekkel,
  idempotens (csak az üres mezőket írja).
- Guatemala-specifikus motívumok: maja örökség, Tikal, Antigua, Atitlán-tó,
  vulkáni hegylánc, kávé/cukornád/banán, Petén-medence.

Futtatás: `python scripts/fill_guatemala_seo.py`
"""
from __future__ import annotations

import os
import re
import json

REPO_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_DIR = os.path.join(REPO_ROOT, "lib", "visualLab", "data")

LANGS = ("de", "hu", "ro", "en")

# ----- Guatemala-specifikus, biztonságos sablonok 4 nyelven --------------------

INTRO_TEMPLATES = {
    "de": [
        "{name} ist ein bemerkenswerter Ort in Guatemala, an dem sich das reiche Erbe der Maya, die vulkanische Hochlandlandschaft und die kulturelle Vielfalt des Landes besonders gut erleben lassen.",
        "{name} gehört zu den Punkten Guatemalas, an denen sich die Geschichte der Maya, die fruchtbaren Vulkanböden und der lebendige Alltag zwischen Petén-Tiefland und pazifischer Küste eindrucksvoll begegnen.",
    ],
    "hu": [
        "{name} Guatemala egyik figyelemre méltó pontja, ahol a maja örökség, a vulkáni felföld és az ország sokszínű kultúrája kézzelfoghatóan találkozik.",
        "{name} azon helyek közé tartozik Guatemalában, ahol a táj, a maja múlt és a hétköznapi élet a Petén-medence, az Atitlán-tó és a Csendes-óceán közötti térben különleges egységet alkot.",
    ],
    "ro": [
        "{name} este un punct remarcabil al Guatemalei, unde moștenirea maya, peisajul vulcanic și diversitatea culturală a țării se întâlnesc într-un mod expresiv.",
        "{name} face parte dintre locurile din Guatemala în care trecutul maya, solurile vulcanice fertile și viața de zi cu zi între bazinul Petén și coasta Pacificului se întrepătrund într-o formă aparte.",
    ],
    "en": [
        "{name} is a notable location in Guatemala where the rich Maya heritage, the volcanic highland landscape and the country's cultural diversity come together in a striking way.",
        "{name} is one of those places in Guatemala where the Maya past, the fertile volcanic soils and everyday life between the Petén lowlands and the Pacific coast meet in a distinctive setting.",
    ],
}

CONNECTORS = {
    "de": [
        "Zugleich",
        "Darüber hinaus",
        "In der Region",
        "Charakteristisch ist auch",
        "Bemerkenswert ist",
    ],
    "hu": [
        "Ugyanakkor",
        "Emellett",
        "A környéken",
        "Jellemző továbbá",
        "Külön említést érdemel",
    ],
    "ro": [
        "În același timp",
        "Pe lângă acestea",
        "În zonă",
        "De asemenea",
        "Merită menționat",
    ],
    "en": [
        "At the same time",
        "In addition",
        "In the surrounding area",
        "Another characteristic feature",
        "It is also worth noting",
    ],
}

CLOSERS = {
    "de": [
        "Damit fügt sich {name} stimmig in das Gesamtbild Guatemalas ein und zeigt, wie eng Maya-Kultur, Vulkanlandschaft und der Anbau von Kaffee, Zuckerrohr und Bananen die Identität des Landes prägen.",
        "So wird {name} zu einem aussagekräftigen Beispiel für die Verbindung von Maya-Erbe, Hochlandgeografie und tropischer Wirtschaft, die Guatemala kennzeichnet.",
    ],
    "hu": [
        "Mindezekkel együtt {name} jól illeszkedik Guatemala összképébe, és megmutatja, mennyire szorosan kapcsolódik egymáshoz a maja kultúra, a vulkanikus felföld, valamint a kávé, a cukornád és a banán termesztése.",
        "Így válik {name} a maja örökség, a hegyvidéki környezet és a trópusi mezőgazdaság sajátos guatemalai találkozásának beszédes példájává.",
    ],
    "ro": [
        "Astfel, {name} se încadrează firesc în imaginea de ansamblu a Guatemalei, arătând cât de strâns sunt legate cultura maya, peisajul vulcanic și cultivarea cafelei, a trestiei de zahăr și a bananelor.",
        "În acest fel, {name} devine un exemplu sugestiv pentru întâlnirea dintre moștenirea maya, geografia montană și agricultura tropicală care definesc Guatemala.",
    ],
    "en": [
        "In this way, {name} fits naturally into the wider picture of Guatemala, showing how closely Maya culture, the volcanic highlands and the cultivation of coffee, sugar cane and bananas are intertwined.",
        "{name} therefore stands as a telling example of the meeting between Maya heritage, mountain geography and tropical agriculture that defines Guatemala.",
    ],
}

EXTRA_FACTS = {
    "de": [
        "Liegt in Guatemala, einem zentralamerikanischen Land mit ausgeprägtem Maya-Erbe.",
        "Spiegelt typische Merkmale seiner Region zwischen Hochland, Petén-Tiefland und Pazifikküste wider.",
        "Eingebettet in Guatemalas Mosaik aus Vulkanen, Seen wie dem Atitlán und alten Maya-Stätten wie Tikal und Antigua.",
        "Bestandteil der geografischen Bildung K7–K8.",
    ],
    "hu": [
        "Guatemalában, a maja örökségéről ismert közép-amerikai országban található.",
        "Tükrözi a felföld, a Petén-medence és a Csendes-óceáni partvidék közötti régiójára jellemző sajátosságokat.",
        "Beleilleszkedik Guatemala vulkánjai, az Atitlán-tó és az olyan maja helyszínek, mint Tikal és Antigua alkotta kulturális mozaikba.",
        "A K7–K8 földrajzi tananyag része.",
    ],
    "ro": [
        "Se află în Guatemala, o țară central-americană cu o moștenire maya pronunțată.",
        "Reflectă trăsăturile tipice ale regiunii sale, situată între podișul înalt, bazinul Petén și coasta Pacificului.",
        "Se integrează în mozaicul guatemalez format din vulcani, lacuri precum Atitlán și situri maya precum Tikal și Antigua.",
        "Face parte din curriculumul de geografie K7–K8.",
    ],
    "en": [
        "Located in Guatemala, a Central American country with a strong Maya heritage.",
        "Reflects features typical of its region between the highlands, the Petén lowlands and the Pacific coast.",
        "Set within Guatemala's mosaic of volcanoes, lakes such as Atitlán and Maya sites like Tikal and Antigua.",
        "Part of the K7–K8 geography curriculum.",
    ],
}

MIN_WORDS = 80
MAX_WORDS = 150


# ----- Segédek ---------------------------------------------------------------

def word_count(s: str) -> int:
    return len(re.findall(r"\S+", s))


def clamp_words(s: str, max_words: int = MAX_WORDS) -> str:
    words = s.split()
    if len(words) <= max_words:
        return s
    out = " ".join(words[:max_words]).rstrip(",.;: ")
    if not out.endswith("."):
        out += "."
    return out


def build_description_advanced(lang: str, name: str, base_desc: str, facts: list[str]) -> str | None:
    if not name or not base_desc or not facts:
        return None
    facts_clean = [f.strip().rstrip(".") for f in facts if f and f.strip()]
    if len(facts_clean) < 2:
        return None

    intro = INTRO_TEMPLATES[lang][0].format(name=name)
    connectors = CONNECTORS[lang]
    closer = CLOSERS[lang][0].format(name=name)

    mid_parts = [base_desc.strip().rstrip(".") + "."]
    fact_take = facts_clean[:4]
    for i, f in enumerate(fact_take):
        c = connectors[i % len(connectors)]
        mid_parts.append(f"{c} {f}.")

    text = " ".join([intro] + mid_parts + [closer])
    if word_count(text) < MIN_WORDS and len(facts_clean) > len(fact_take):
        for f in facts_clean[len(fact_take):len(fact_take) + 3]:
            text = text.rsplit(" ", 1)[0] + f" {f}. " + text.rsplit(" ", 1)[1]
            if word_count(text) >= MIN_WORDS:
                break
    text = clamp_words(text, MAX_WORDS)
    if word_count(text) < 60:
        return None
    return text


def build_facts_advanced(lang: str, name: str, base_facts: list[str]) -> list[str] | None:
    if not base_facts:
        return None
    base_clean = [f.strip() for f in base_facts if f and f.strip()]
    if len(base_clean) == 0:
        return None
    extras = [e.format(name=name) if "{name}" in e else e for e in EXTRA_FACTS[lang]]
    out = list(base_clean)
    for e in extras:
        if e not in out:
            out.append(e)
        if len(out) >= 7:
            break
    if len(out) < 6:
        return None
    return out[:8]


# ----- TS parser (regex alapú) -----------------------------------------------

def extract_lang_string(block: str, field: str, lang: str) -> str | None:
    m = re.search(rf"{field}\s*:\s*\{{([\s\S]*?)\}}", block)
    if not m:
        return None
    body = m.group(1)
    lm = re.search(rf'\b{lang}\s*:\s*"((?:[^"\\]|\\.)*)"', body)
    if not lm:
        return None
    raw = lm.group(1)
    try:
        return json.loads('"' + raw + '"')
    except Exception:
        return raw


def extract_lang_array(block: str, field: str, lang: str) -> list[str] | None:
    m = re.search(rf"{field}\s*:\s*\{{([\s\S]*?)\}}\s*,", block)
    if not m:
        m = re.search(rf"{field}\s*:\s*\{{([\s\S]*?)\}}", block)
    if not m:
        return None
    body = m.group(1)
    lm = re.search(rf"\b{lang}\s*:\s*\[([\s\S]*?)\]", body)
    if not lm:
        return None
    raw = lm.group(1).strip()
    if not raw:
        return []
    items = re.findall(r'"((?:[^"\\]|\\.)*)"', raw)
    out = []
    for it in items:
        try:
            out.append(json.loads('"' + it + '"'))
        except Exception:
            out.append(it)
    return out


def js_string_literal(s: str) -> str:
    return json.dumps(s, ensure_ascii=False)


def js_array_literal(items: list[str]) -> str:
    return "[" + ", ".join(json.dumps(x, ensure_ascii=False) for x in items) + "]"


def process_block(block: str, stats: dict) -> str:
    poi_id_m = re.search(r'id:\s*"([^"]+)"', block)
    if not poi_id_m:
        return block

    names = {l: extract_lang_string(block, "name", l) for l in LANGS}
    descs = {l: extract_lang_string(block, "description", l) for l in LANGS}
    facts = {l: extract_lang_array(block, "facts", l) for l in LANGS}

    new_block = block

    # ÖSSZES descriptionAdvanced és factsAdvanced blokkot kezeljük (több is lehet egy POI-ban)
    def fill_desc_blocks(text: str) -> str:
        # iteráljuk fordítva, hogy az offsetek ne csússzanak
        matches = list(re.finditer(r"(descriptionAdvanced\s*:\s*\{)([\s\S]*?)(\})", text))
        for m in reversed(matches):
            inner = m.group(2)
            new_inner = inner
            for lang in LANGS:
                empty_re = re.compile(rf'(\b{lang}\s*:\s*)""')
                if empty_re.search(new_inner):
                    new_text = build_description_advanced(
                        lang, names.get(lang) or "", descs.get(lang) or "", facts.get(lang) or []
                    )
                    if new_text:
                        replacement = lambda mm, t=new_text: mm.group(1) + js_string_literal(t)
                        new_inner, n = empty_re.subn(replacement, new_inner, count=1)
                        if n:
                            stats["desc_filled"] += 1
                    else:
                        stats["desc_skipped"] += 1
            if new_inner != inner:
                text = text[: m.start(2)] + new_inner + text[m.end(2):]
        return text

    def fill_facts_blocks(text: str) -> str:
        matches = list(re.finditer(r"(factsAdvanced\s*:\s*\{)([\s\S]*?)(\})", text))
        for m in reversed(matches):
            inner = m.group(2)
            new_inner = inner
            for lang in LANGS:
                empty_re = re.compile(rf'(\b{lang}\s*:\s*)\[\s*\]')
                if empty_re.search(new_inner):
                    new_facts = build_facts_advanced(lang, names.get(lang) or "", facts.get(lang) or [])
                    if new_facts:
                        replacement = lambda mm, t=new_facts: mm.group(1) + js_array_literal(t)
                        new_inner, n = empty_re.subn(replacement, new_inner, count=1)
                        if n:
                            stats["facts_filled"] += 1
                    else:
                        stats["facts_skipped"] += 1
            if new_inner != inner:
                text = text[: m.start(2)] + new_inner + text[m.end(2):]
        return text

    new_block = fill_desc_blocks(new_block)
    new_block = fill_facts_blocks(new_block)
    return new_block


def scan_and_replace_poi_objects(content: str, stats: dict) -> str:
    out = []
    i = 0
    n = len(content)
    while i < n:
        ch = content[i]
        if ch == "{":
            depth = 0
            j = i
            in_str = False
            str_quote = ""
            esc = False
            while j < n:
                c = content[j]
                if in_str:
                    if esc:
                        esc = False
                    elif c == "\\":
                        esc = True
                    elif c == str_quote:
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
                            break
                j += 1
            if j < n and depth == 0:
                block = content[i:j + 1]
                if re.search(r'^\s*\{\s*\n?\s*id\s*:\s*"', block):
                    new_block = process_block(block, stats)
                    out.append(new_block)
                else:
                    out.append(block)
                i = j + 1
                continue
        out.append(ch)
        i += 1
    return "".join(out)


def process_file(path: str, stats: dict) -> bool:
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()
    new_content = scan_and_replace_poi_objects(content, stats)
    if new_content != content:
        with open(path, "w", encoding="utf-8") as f:
            f.write(new_content)
        return True
    return False


def main():
    files = sorted(
        os.path.join(DATA_DIR, fn)
        for fn in os.listdir(DATA_DIR)
        if re.match(r"poiExtraGuatemala.*V2\.ts$", fn)
    )
    print(f"Talált fájlok: {len(files)}")
    total_stats = {"desc_filled": 0, "desc_skipped": 0, "facts_filled": 0, "facts_skipped": 0}
    for p in files:
        stats = {"desc_filled": 0, "desc_skipped": 0, "facts_filled": 0, "facts_skipped": 0}
        changed = process_file(p, stats)
        for k in stats:
            total_stats[k] += stats[k]
        flag = "*" if changed else " "
        print(
            f" {flag} {os.path.basename(p):42s}"
            f"  desc+{stats['desc_filled']:>3} (skip {stats['desc_skipped']})"
            f"  facts+{stats['facts_filled']:>3} (skip {stats['facts_skipped']})"
        )
    print("-" * 60)
    print(
        f" Összes: desc+{total_stats['desc_filled']} (skip {total_stats['desc_skipped']}) "
        f"facts+{total_stats['facts_filled']} (skip {total_stats['facts_skipped']})"
    )


if __name__ == "__main__":
    main()
