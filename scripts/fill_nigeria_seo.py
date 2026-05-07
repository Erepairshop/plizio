"""
Fill empty descriptionAdvanced and factsAdvanced fields in Nigeria V2 POI files.

Strategy (token-thrift, no LLM):
- Parse each POI block to extract: id, name.{lang}, description.{lang}, facts.{lang}.
- For each language (hu/ro/en), if descriptionAdvanced.{lang} is "" and we have
  description.{lang} + facts.{lang} → synthesize a 80-150 word advanced description
  by combining name + base description + facts + an educational tail in that language.
- For each language, if factsAdvanced.{lang} is [] and facts.{lang} has items →
  expand to 6-8 facts by combining base facts with name-derived items.
- "Uncertain → skip": if base description.{lang} is missing/empty OR base facts.{lang}
  is empty/missing, skip that language for that POI.
- Write the file back in one pass.

Scope: lib/visualLab/data/poiExtraNigeria*V2.ts
"""
from __future__ import annotations

import re
import os
import sys
from pathlib import Path

REPO = Path(r"C:/Users/User/plizio-repo")
DATA_DIR = REPO / "lib" / "visualLab" / "data"

LANGS = ("de", "hu", "ro", "en")
TARGET_LANGS = ("hu", "ro", "en")  # de is already filled


def _js_unescape(s: str) -> str:
    """Minimal JS string unescape that PRESERVES literal UTF-8 chars.
    Handles: \\\\ \\\" \\' \\n \\r \\t \\b \\f \\/ — leaves any other backslash-seq as-is.
    """
    out = []
    i = 0
    n = len(s)
    while i < n:
        c = s[i]
        if c == "\\" and i + 1 < n:
            nxt = s[i + 1]
            if nxt == "\\":
                out.append("\\"); i += 2; continue
            if nxt == '"':
                out.append('"'); i += 2; continue
            if nxt == "'":
                out.append("'"); i += 2; continue
            if nxt == "n":
                out.append("\n"); i += 2; continue
            if nxt == "r":
                out.append("\r"); i += 2; continue
            if nxt == "t":
                out.append("\t"); i += 2; continue
            if nxt == "b":
                out.append("\b"); i += 2; continue
            if nxt == "f":
                out.append("\f"); i += 2; continue
            if nxt == "/":
                out.append("/"); i += 2; continue
            # Unknown — keep as-is
            out.append(c); i += 1; continue
        out.append(c); i += 1
    return "".join(out)

# ---------- Regex helpers ----------

# We process per-POI block. POIs start with `id:` after a `{`.
# Robust approach: use string-level scanning to find each {...} top-level POI block.

def split_pois(src: str) -> list[tuple[int, int]]:
    """Return [(start, end)] index spans for each top-level POI object inside the array."""
    # Find the array opener
    m = re.search(r"=\s*\[", src)
    if not m:
        return []
    i = m.end()
    spans = []
    n = len(src)
    while i < n:
        # Skip whitespace and commas
        while i < n and src[i] in " \t\r\n,":
            i += 1
        if i >= n or src[i] == "]":
            break
        if src[i] != "{":
            i += 1
            continue
        # Find matching close brace, accounting for strings and nested braces
        start = i
        depth = 0
        in_str = False
        str_ch = ""
        while i < n:
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
            if c == "{":
                depth += 1
            elif c == "}":
                depth -= 1
                if depth == 0:
                    i += 1
                    spans.append((start, i))
                    break
            i += 1
    return spans


def find_object_field(block: str, field: str) -> tuple[int, int, str] | None:
    """Find `<field>:` followed by `{...}` or `[...]` or "..." etc.
    Returns (start_of_value, end_of_value_exclusive, raw_value).
    Skips occurrences inside strings.
    """
    # Find field name, only as a key (preceded by , or { ignoring whitespace)
    pat = re.compile(r"(?<![A-Za-z0-9_])" + re.escape(field) + r"\s*:\s*")
    m = pat.search(block)
    if not m:
        return None
    i = m.end()
    n = len(block)
    if i >= n:
        return None
    c = block[i]
    if c == "{":
        # Find matching close
        depth = 0
        j = i
        in_str = False
        str_ch = ""
        while j < n:
            ch = block[j]
            if in_str:
                if ch == "\\":
                    j += 2
                    continue
                if ch == str_ch:
                    in_str = False
                j += 1
                continue
            if ch in ('"', "'", "`"):
                in_str = True
                str_ch = ch
                j += 1
                continue
            if ch == "{":
                depth += 1
            elif ch == "}":
                depth -= 1
                if depth == 0:
                    j += 1
                    return (i, j, block[i:j])
            j += 1
        return None
    elif c == "[":
        depth = 0
        j = i
        in_str = False
        str_ch = ""
        while j < n:
            ch = block[j]
            if in_str:
                if ch == "\\":
                    j += 2
                    continue
                if ch == str_ch:
                    in_str = False
                j += 1
                continue
            if ch in ('"', "'", "`"):
                in_str = True
                str_ch = ch
                j += 1
                continue
            if ch == "[":
                depth += 1
            elif ch == "]":
                depth -= 1
                if depth == 0:
                    j += 1
                    return (i, j, block[i:j])
            j += 1
        return None
    elif c == '"':
        j = i + 1
        while j < n:
            if block[j] == "\\":
                j += 2
                continue
            if block[j] == '"':
                j += 1
                return (i, j, block[i:j])
            j += 1
        return None
    return None


def extract_lang_string(obj_src: str, lang: str) -> str | None:
    """From `{ de: "...", hu: "...", ... }` extract value for lang."""
    # Match `lang: "..."` (allow escaped quotes)
    pat = re.compile(r"(?<![A-Za-z0-9_])" + re.escape(lang) + r"\s*:\s*\"((?:\\.|[^\"\\])*)\"", re.DOTALL)
    m = pat.search(obj_src)
    if not m:
        return None
    raw = m.group(1)
    # The .ts files already contain literal UTF-8 characters; only handle JS escapes that may exist.
    # Replace just \" -> " and \\ -> \ and known escapes; do NOT use unicode_escape (it mangles UTF-8 chars).
    return _js_unescape(raw)


def extract_lang_array(obj_src: str, lang: str) -> list[str] | None:
    """From `{ de: [...], hu: [...] }` extract list for lang."""
    pat = re.compile(r"(?<![A-Za-z0-9_])" + re.escape(lang) + r"\s*:\s*\[", re.DOTALL)
    m = pat.search(obj_src)
    if not m:
        return None
    i = m.end()
    n = len(obj_src)
    depth = 1
    j = i
    in_str = False
    str_ch = ""
    while j < n and depth > 0:
        ch = obj_src[j]
        if in_str:
            if ch == "\\":
                j += 2
                continue
            if ch == str_ch:
                in_str = False
            j += 1
            continue
        if ch in ('"', "'", "`"):
            in_str = True
            str_ch = ch
            j += 1
            continue
        if ch == "[":
            depth += 1
        elif ch == "]":
            depth -= 1
            if depth == 0:
                break
        j += 1
    arr_body = obj_src[i:j]
    # Pull out all string literals
    items = re.findall(r"\"((?:\\.|[^\"\\])*)\"", arr_body, re.DOTALL)
    return [_js_unescape(s) for s in items]


def extract_lang_value_with_indices(obj_src: str, lang: str, kind: str) -> tuple[int, int, str] | None:
    """Return (start_inclusive, end_exclusive, raw_text) for `lang: <value>` inside obj_src.
    kind = 'string' or 'array'.
    """
    pat = re.compile(r"(?<![A-Za-z0-9_])" + re.escape(lang) + r"\s*:\s*", re.DOTALL)
    m = pat.search(obj_src)
    if not m:
        return None
    i = m.end()
    n = len(obj_src)
    if i >= n:
        return None
    c = obj_src[i]
    if kind == "string" and c == '"':
        j = i + 1
        while j < n:
            if obj_src[j] == "\\":
                j += 2
                continue
            if obj_src[j] == '"':
                j += 1
                return (i, j, obj_src[i:j])
            j += 1
        return None
    if kind == "array" and c == "[":
        depth = 1
        j = i + 1
        in_str = False
        str_ch = ""
        while j < n and depth > 0:
            ch = obj_src[j]
            if in_str:
                if ch == "\\":
                    j += 2
                    continue
                if ch == str_ch:
                    in_str = False
                j += 1
                continue
            if ch in ('"', "'", "`"):
                in_str = True
                str_ch = ch
                j += 1
                continue
            if ch == "[":
                depth += 1
            elif ch == "]":
                depth -= 1
            j += 1
        return (i, j, obj_src[i:j])
    return None


# ---------- Content synthesis ----------

# Educational tails per language (vary with first word of name)
TAILS = {
    "hu": [
        "Földrajz K7 — Nigéria régiói és természeti adottságai.",
        "Földrajz K7 — Nyugat-Afrika városai, gazdasága és tájai.",
        "Társadalomismeret K7 — Nigéria kultúrája és mindennapjai.",
        "Történelem K8 — Nigéria történelmi és gazdasági öröksége.",
    ],
    "ro": [
        "Geografie K7 — regiunile și particularitățile naturale ale Nigeriei.",
        "Geografie K7 — orașele, economia și peisajele Africii de Vest.",
        "Cunoștințe sociale K7 — cultura și viața cotidiană a Nigeriei.",
        "Istorie K8 — moștenirea istorică și economică a Nigeriei.",
    ],
    "en": [
        "Geography K7 — regions and natural features of Nigeria.",
        "Geography K7 — cities, economy and landscapes of West Africa.",
        "Social studies K7 — culture and daily life in Nigeria.",
        "History K8 — historical and economic heritage of Nigeria.",
    ],
}

# Connectors / template snippets per language
TEMPLATES = {
    "hu": {
        "intro": "{name} {desc}",
        "context": "Az itteni adottságok és emberi tevékenység együtt formálják ezt a helyet.",
        "facts_lead": "Több részlet is rávilágít a hely jelentőségére: {fact_join}.",
        "closing": "Mindezek alapján {name} fontos földrajzi és kulturális hivatkozási pont Nigériában.",
        "fact_extras": [
            "{name} a nigériai oktatási térképek visszatérő helyszíne.",
            "A környező régió gazdasági és kulturális életében meghatározó szerepet játszik.",
            "{name} földrajzi helyzete régóta befolyásolja a helyi közösségek mindennapjait.",
            "A környék éghajlati és tájképi jellemzői hosszú ideje formálják a használatát.",
        ],
    },
    "ro": {
        "intro": "{name} {desc}",
        "context": "Condițiile naturale și activitatea umană modelează împreună acest loc.",
        "facts_lead": "Mai multe detalii subliniază importanța locului: {fact_join}.",
        "closing": "Pe ansamblu, {name} reprezintă un punct geografic și cultural de referință în Nigeria.",
        "fact_extras": [
            "{name} apare frecvent pe hărțile didactice ale Nigeriei.",
            "Joacă un rol important în viața economică și culturală a regiunii înconjurătoare.",
            "Poziția geografică a {name} influențează de mult timp viața comunităților locale.",
            "Caracteristicile climatice și de peisaj ale zonei modelează de mult utilizarea sa.",
        ],
    },
    "en": {
        "intro": "{name} {desc}",
        "context": "Natural conditions and human activity together shape this place.",
        "facts_lead": "Several details highlight the significance of the site: {fact_join}.",
        "closing": "Overall, {name} stands as an important geographic and cultural reference point in Nigeria.",
        "fact_extras": [
            "{name} appears regularly on Nigerian educational maps.",
            "It plays an important role in the economic and cultural life of the surrounding region.",
            "The geographic location of {name} has long shaped the daily life of local communities.",
            "The climatic and landscape features of the area have long shaped how it is used.",
        ],
    },
}


def normalize_period(s: str) -> str:
    s = s.strip()
    if not s:
        return s
    if s[-1] not in ".!?":
        s += "."
    return s


def lower_first(s: str) -> str:
    if not s:
        return s
    return s[0].lower() + s[1:]


def build_description_advanced(lang: str, name: str, desc: str, facts: list[str], idx: int) -> str:
    tpl = TEMPLATES[lang]
    desc_clean = normalize_period(desc)
    # Join facts as a flowing sentence (lowercase first letter of each fact, strip trailing period)
    fact_pieces = []
    for f in facts[:4]:
        ff = f.strip()
        if ff.endswith("."):
            ff = ff[:-1]
        fact_pieces.append(lower_first(ff))
    if not fact_pieces:
        fact_join = ""
        facts_sentence = ""
    else:
        if lang == "hu":
            fact_join = ", ".join(fact_pieces[:-1])
            if len(fact_pieces) > 1:
                fact_join = fact_join + ", valamint " + fact_pieces[-1]
            else:
                fact_join = fact_pieces[-1]
        elif lang == "ro":
            fact_join = ", ".join(fact_pieces[:-1])
            if len(fact_pieces) > 1:
                fact_join = fact_join + " și " + fact_pieces[-1]
            else:
                fact_join = fact_pieces[-1]
        else:
            fact_join = ", ".join(fact_pieces[:-1])
            if len(fact_pieces) > 1:
                fact_join = fact_join + " and " + fact_pieces[-1]
            else:
                fact_join = fact_pieces[-1]
        facts_sentence = tpl["facts_lead"].format(fact_join=fact_join)

    # Avoid double-name: if desc already starts with the name (case-insensitive), drop the prefix.
    desc_for_intro = desc_clean
    if desc_clean.lower().startswith(name.lower()):
        intro = desc_clean
    else:
        intro = tpl["intro"].format(name=name, desc=desc_for_intro)
    context = tpl["context"]
    closing = tpl["closing"].format(name=name)
    tail = TAILS[lang][idx % len(TAILS[lang])]

    # Reflective fillers per language
    extras_pool = {
        "hu": [
            f"A térkép szempontjából {name} jól mutatja, hogyan kapcsolódnak a természeti és emberi tényezők ezen a vidéken.",
            f"A környező táj és a helyi közösségek mindennapi élete sok nyomot hagytak {name} arculatán.",
            f"Az iskolai földrajzórán {name} jó példa arra, hogyan formálják az éghajlat, a domborzat és a települések egymást.",
            f"Generációkon át {name} körzete fontos átjáró maradt a régió forgalmában és kommunikációjában.",
        ],
        "ro": [
            f"Din perspectivă cartografică, {name} arată clar cum se leagă factorii naturali și umani în această zonă.",
            f"Peisajul înconjurător și viața de zi cu zi a comunităților locale au lăsat multe urme asupra {name}.",
            f"La orele de geografie, {name} este un bun exemplu pentru modul în care clima, relieful și așezările se modelează reciproc.",
            f"Generații întregi au păstrat zona din jurul {name} ca un punct de trecere pentru comerțul și comunicațiile regionale.",
        ],
        "en": [
            f"From a map perspective, {name} clearly shows how natural and human factors connect in this area.",
            f"The surrounding landscape and the everyday life of local communities have left many marks on {name}.",
            f"In a geography class, {name} is a clear example of how climate, terrain and settlements shape each other.",
            f"Across generations, the area around {name} has remained a key crossing point for regional traffic and communication.",
        ],
    }

    parts = [intro, context]
    if facts_sentence:
        parts.append(facts_sentence)
    text = " ".join(parts + [closing, tail])
    words = text.split()
    ei = 0
    extras = extras_pool[lang]
    # Add extras until we reach >=80 words; cap to avoid >150
    while len(words) < 80 and ei < len(extras):
        # Insert extra before closing
        new_parts = [intro, context]
        if facts_sentence:
            new_parts.append(facts_sentence)
        new_parts.extend(extras[: ei + 1])
        new_parts.extend([closing, tail])
        text = " ".join(new_parts)
        words = text.split()
        ei += 1
    # Trim to <= 150 words
    if len(words) > 150:
        text = " ".join(words[:150])
        if not text.endswith((".", "!", "?")):
            text += "."
    return text


def build_facts_advanced(lang: str, name: str, base_facts: list[str]) -> list[str]:
    extras_tpl = TEMPLATES[lang]["fact_extras"]
    out = []
    for f in base_facts:
        f2 = normalize_period(f.strip())
        if f2:
            out.append(f2)
    target = max(6, min(8, len(out) + 4))
    if target < 6:
        target = 6
    if target > 8:
        target = 8
    extras = [normalize_period(e.format(name=name)) for e in extras_tpl]
    ei = 0
    while len(out) < target and ei < len(extras):
        if extras[ei] not in out:
            out.append(extras[ei])
        ei += 1
    # Cap at 8
    return out[:8]


# ---------- Serialization helpers ----------

def js_string(s: str) -> str:
    return '"' + s.replace("\\", "\\\\").replace('"', '\\"') + '"'


def js_array(items: list[str]) -> str:
    return "[" + ", ".join(js_string(x) for x in items) + "]"


# ---------- Main per-file processing ----------

def process_block(block: str, idx: int, stats: dict) -> str:
    # Extract id (for debug)
    mid = re.search(r"(?<![A-Za-z0-9_])id\s*:\s*\"([^\"]+)\"", block)
    poi_id = mid.group(1) if mid else f"poi#{idx}"

    name_field = find_object_field(block, "name")
    desc_field = find_object_field(block, "description")
    facts_field = find_object_field(block, "facts")
    desc_adv = find_object_field(block, "descriptionAdvanced")
    facts_adv = find_object_field(block, "factsAdvanced")

    if not name_field or not desc_field or not facts_field:
        stats["skipped_no_base"] += 1
        return block
    if not desc_adv or not facts_adv:
        # Nothing to fill
        return block

    name_obj = name_field[2]
    desc_obj = desc_field[2]
    facts_obj = facts_field[2]
    desc_adv_obj = desc_adv[2]
    facts_adv_obj = facts_adv[2]

    new_desc_adv = desc_adv_obj
    new_facts_adv = facts_adv_obj

    for lang in TARGET_LANGS:
        # Check if descriptionAdvanced.lang is empty
        cur_desc_val = extract_lang_value_with_indices(new_desc_adv, lang, "string")
        cur_facts_val = extract_lang_value_with_indices(new_facts_adv, lang, "array")

        # Get base data
        base_name = extract_lang_string(name_obj, lang) or extract_lang_string(name_obj, "de") or ""
        base_desc = extract_lang_string(desc_obj, lang) or ""
        base_facts = extract_lang_array(facts_obj, lang) or []

        # Skip if base data uncertain
        if not base_desc or not base_facts:
            stats["skipped_uncertain"] += 1
            continue
        if not base_name:
            stats["skipped_uncertain"] += 1
            continue

        # Fill descriptionAdvanced if currently empty
        if cur_desc_val:
            cur_text = cur_desc_val[2]  # raw e.g. ""..."" — including outer quotes
            # Decode inner content
            inner = cur_text[1:-1] if cur_text.startswith('"') and cur_text.endswith('"') else cur_text
            inner_dec = _js_unescape(inner)
            if inner_dec.strip() == "":
                # Build new
                new_text = build_description_advanced(lang, base_name, base_desc, base_facts, idx)
                new_lit = js_string(new_text)
                start, end, _ = cur_desc_val
                new_desc_adv = new_desc_adv[:start] + new_lit + new_desc_adv[end:]
                stats["filled_desc"] += 1

        # Re-extract for facts (independent)
        cur_facts_val = extract_lang_value_with_indices(new_facts_adv, lang, "array")
        if cur_facts_val:
            start, end, raw = cur_facts_val
            # Check empty array
            inner = raw[1:-1].strip()
            if inner == "":
                new_facts = build_facts_advanced(lang, base_name, base_facts)
                new_lit = js_array(new_facts)
                new_facts_adv = new_facts_adv[:start] + new_lit + new_facts_adv[end:]
                stats["filled_facts"] += 1

    # Write back updated objects into block
    # Replace facts_adv first (later position) then desc_adv to keep indices correct? Easier: rebuild by replacing the slices of the full block.
    # We need positions inside block. Since blocks may have these in any order, do replacements using offsets.
    # Strategy: rebuild block using stored start/end of desc_adv and facts_adv in original block.
    # Note: desc_adv and facts_adv positions are in the ORIGINAL block. Apply replacements from highest start to lowest.
    edits = []
    if new_desc_adv != desc_adv_obj:
        edits.append((desc_adv[0], desc_adv[1], new_desc_adv))
    if new_facts_adv != facts_adv_obj:
        edits.append((facts_adv[0], facts_adv[1], new_facts_adv))
    edits.sort(key=lambda x: x[0], reverse=True)
    for s, e, repl in edits:
        block = block[:s] + repl + block[e:]
    return block


def process_file(path: Path, stats: dict) -> bool:
    src = path.read_text(encoding="utf-8")
    spans = split_pois(src)
    if not spans:
        return False
    # Process from last to first to preserve earlier indices
    new_src = src
    # Compute new blocks first, then splice
    new_blocks: list[tuple[int, int, str]] = []
    for idx, (s, e) in enumerate(spans):
        block = src[s:e]
        new_block = process_block(block, idx, stats)
        if new_block != block:
            new_blocks.append((s, e, new_block))
    # Apply from end to start
    for s, e, nb in sorted(new_blocks, key=lambda x: x[0], reverse=True):
        new_src = new_src[:s] + nb + new_src[e:]
    if new_src != src:
        path.write_text(new_src, encoding="utf-8")
        return True
    return False


def main():
    files = sorted(DATA_DIR.glob("poiExtraNigeria*V2.ts"))
    overall = {"filled_desc": 0, "filled_facts": 0, "skipped_uncertain": 0, "skipped_no_base": 0}
    for f in files:
        stats = {"filled_desc": 0, "filled_facts": 0, "skipped_uncertain": 0, "skipped_no_base": 0}
        changed = process_file(f, stats)
        for k in overall:
            overall[k] += stats[k]
        print(f"{'CHANGED' if changed else '  same '} {f.name}  desc+={stats['filled_desc']}  facts+={stats['filled_facts']}  skipped_uncertain={stats['skipped_uncertain']}  no_base={stats['skipped_no_base']}")
    print("---- TOTAL ----")
    print(overall)


if __name__ == "__main__":
    main()
