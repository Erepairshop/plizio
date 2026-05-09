# -*- coding: utf-8 -*-
"""
fill_belize_seo.py
Tölti az üres descriptionAdvanced és factsAdvanced mezőket a
poiExtraBelize*V2.ts fájlokban (de/hu/ro/en).

STRATÉGIA (Honduras/Cuba minta):
- Beolvassa az egyes POI objektumok name / description / facts mezőit.
- Az ÜRES advanced mezőket template-ekkel tölti ki AZONOS nyelvű forrásból
  (description + facts). Cross-language pollution TILOS.
- Csak `descriptionAdvanced.X = ""` és `factsAdvanced.X = []` literalokat ír.
- Idempotens: már kitöltött mezőket nem érint.
- Belize-specifikus closer / extra-fact: Barrier Reef (UNESCO), karib partvidék,
  maja örökség (Caracol, Xunantunich), Belmopan/Belize City, esőerdő, ekoturizmus,
  cukornád/citrusok.

Futtatás: `python scripts/fill_belize_seo.py`
"""
from __future__ import annotations

import os
import re
import json
import sys

REPO_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_DIR = os.path.join(REPO_ROOT, "lib", "visualLab", "data")

LANGS = ("de", "hu", "ro", "en")

# ----- Belize-specifikus, biztonságos sablonok 4 nyelven ---------------------

INTRO_TEMPLATES = {
    "de": [
        "{name} ist ein bemerkenswerter Ort in Belize, der die Vielfalt des kleinen mittelamerikanischen Landes anschaulich macht.",
        "{name} gehört zu den Punkten, an denen die geografischen und kulturellen Eigenheiten von Belize besonders deutlich werden.",
    ],
    "hu": [
        "{name} Belize egyik kiemelkedő pontja, amely jól mutatja a kis közép-amerikai ország földrajzi és kulturális sokszínűségét.",
        "{name} azon helyek közé tartozik Belize-ben, ahol a táj, a karibi partvidék és a maja örökség sajátos módon találkozik.",
    ],
    "ro": [
        "{name} este un punct remarcabil al statului Belize, care reflectă diversitatea geografică și culturală a acestei mici țări central-americane.",
        "{name} face parte dintre locurile din Belize unde peisajul, coasta caraibiană și moștenirea mayașă se întâlnesc într-un mod aparte.",
    ],
    "en": [
        "{name} is a notable location in Belize that reflects the geographic and cultural diversity of this small Central American country.",
        "{name} is one of those places in Belize where landscape, Caribbean coastline and Maya heritage come together in a distinctive way.",
    ],
}

CONNECTORS = {
    "de": ["Zugleich", "Darüber hinaus", "In der Region", "Charakteristisch ist auch"],
    "hu": ["Ugyanakkor", "Emellett", "A környéken", "Jellemző továbbá"],
    "ro": ["În același timp", "Pe lângă acestea", "În zonă", "De asemenea"],
    "en": ["At the same time", "In addition", "In the surrounding area", "Another characteristic feature"],
}

CLOSERS = {
    "de": [
        "Damit fügt sich {name} gut in das Gesamtbild von Belize ein und zeigt, wie eng Karibikküste, Regenwald, Maya-Erbe und Wirtschaft im Land verknüpft sind.",
        "So wird {name} zu einem aussagekräftigen Beispiel für die Kontraste zwischen Belize Barrier Reef, Tieflandregenwald und Hinterland.",
    ],
    "hu": [
        "Mindezekkel együtt {name} jól illeszkedik Belize összképébe, és megmutatja, mennyire szorosan kapcsolódik egymáshoz a Belize Barrier Reef, az esőerdő, a maja örökség és a gazdaság.",
        "Így válik {name} a karibi partvidék, az alföldi esőerdő és a maja kultúra (Caracol, Xunantunich) közötti kontrasztok beszédes példájává.",
    ],
    "ro": [
        "Astfel, {name} se încadrează firesc în imaginea de ansamblu a statului Belize, arătând cât de strâns sunt legate coasta caraibiană, pădurea tropicală, moștenirea mayașă și economia în această țară.",
        "În acest fel, {name} devine un exemplu sugestiv pentru contrastele dintre Belize Barrier Reef, pădurile tropicale joase și interiorul muntos al țării.",
    ],
    "en": [
        "In this way, {name} fits naturally into the wider picture of Belize, showing how closely linked the Caribbean coastline, rainforest, Maya heritage and economy are across the country.",
        "{name} therefore stands as a telling example of the contrasts between the Belize Barrier Reef, lowland rainforest and the country's hinterland.",
    ],
}

EXTRA_FACTS = {
    "de": [
        "Liegt im mittelamerikanischen Land Belize an der Karibikküste.",
        "Belize beherbergt das Belize Barrier Reef, ein UNESCO-Welterbe.",
        "Spiegelt typische Merkmale seiner Region wider, die von Maya-Kultur und tropischem Klima geprägt ist.",
        "Bedeutende Maya-Stätten wie Caracol und Xunantunich liegen im Hinterland des Landes.",
        "Bestandteil der geografischen Bildung K7-K8.",
    ],
    "hu": [
        "A közép-amerikai Belize karibi partvidékén található.",
        "Belize ad otthont a Belize Barrier Reefnek, amely UNESCO világörökség.",
        "Tükrözi a régiójára jellemző sajátosságokat, amelyeket a maja kultúra és a trópusi éghajlat alakít.",
        "Az ország belsejében jelentős maja városok találhatók, mint Caracol és Xunantunich.",
        "A K7-K8 földrajzi tananyag része.",
    ],
    "ro": [
        "Se află în țara central-americană Belize, pe coasta Mării Caraibilor.",
        "Belize găzduiește Belize Barrier Reef, sit din patrimoniul UNESCO.",
        "Reflectă trăsăturile tipice ale regiunii sale, marcate de cultura mayașă și climatul tropical.",
        "În interiorul țării se află situri mayașe importante precum Caracol și Xunantunich.",
        "Face parte din curriculumul de geografie K7-K8.",
    ],
    "en": [
        "Located in the Central American country of Belize on the Caribbean coast.",
        "Belize is home to the Belize Barrier Reef, a UNESCO World Heritage site.",
        "Reflects features typical of its region, shaped by Maya culture and a tropical climate.",
        "Major Maya sites such as Caracol and Xunantunich lie in the country's interior.",
        "Part of the K7-K8 geography curriculum.",
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
        # toldjuk be a closer ELÉ a maradék factokat
        extra = []
        for f in facts_clean[len(fact_take):len(fact_take) + 3]:
            extra.append(f"{connectors[(len(fact_take)) % len(connectors)]} {f}.")
            if word_count(" ".join([intro] + mid_parts + extra + [closer])) >= MIN_WORDS:
                break
        text = " ".join([intro] + mid_parts + extra + [closer])
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
        # extra-kkal próbáljuk feltölteni 6-ra
        for e in extras:
            if e not in out:
                out.append(e)
            if len(out) >= 6:
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

    for lang in LANGS:
        # 1. descriptionAdvanced
        da_match = re.search(r"(descriptionAdvanced\s*:\s*\{)([\s\S]*?)(\})", new_block)
        if da_match:
            inner = da_match.group(2)
            empty_re = re.compile(rf'(\b{lang}\s*:\s*)""')
            if empty_re.search(inner):
                new_text = build_description_advanced(
                    lang, names.get(lang) or "", descs.get(lang) or "", facts.get(lang) or []
                )
                if new_text:
                    replacement = lambda m, t=new_text: m.group(1) + js_string_literal(t)
                    new_inner, n = empty_re.subn(replacement, inner, count=1)
                    if n:
                        new_block = new_block[: da_match.start(2)] + new_inner + new_block[da_match.end(2):]
                        stats["desc_filled"] += 1
                else:
                    stats["desc_skipped"] += 1

        # 2. factsAdvanced
        fa_match = re.search(r"(factsAdvanced\s*:\s*\{)([\s\S]*?)(\})", new_block)
        if fa_match:
            inner = fa_match.group(2)
            empty_re = re.compile(rf'(\b{lang}\s*:\s*)\[\s*\]')
            if empty_re.search(inner):
                new_facts = build_facts_advanced(lang, names.get(lang) or "", facts.get(lang) or [])
                if new_facts:
                    replacement = lambda m, t=new_facts: m.group(1) + js_array_literal(t)
                    new_inner, n = empty_re.subn(replacement, inner, count=1)
                    if n:
                        new_block = new_block[: fa_match.start(2)] + new_inner + new_block[fa_match.end(2):]
                        stats["facts_filled"] += 1
                else:
                    stats["facts_skipped"] += 1

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
        if re.match(r"poiExtraBelize.*V2\.ts$", fn)
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
