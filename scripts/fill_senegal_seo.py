#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Fill empty descriptionAdvanced / factsAdvanced fields in
lib/visualLab/data/poiExtraSenegal*.ts files.

Strategy:
  1) Each POI object in the file may contain MULTIPLE duplicate
     `factsAdvanced: {...}` and (rarely) `descriptionAdvanced: {...}`
     literal blocks (each with a different language subset, often with
     empty arrays as placeholders). Merge them into ONE block per POI,
     preferring the non-empty value for each language.
  2) If a POI has NO advanced block at all, synthesize one from the
     existing `description` and `facts` fields, per-language
     (no cross-language pollution).
  3) For each language slot still empty after merge, synthesize from
     the same-language `description` + `facts` (no cross-language).
  4) descriptionAdvanced target length: 80-150 words.
     factsAdvanced target count: 6-8 items.

The script uses regex parsing because the TS files are not valid JSON
and a balanced-brace miniparser is enough for our needs.

Outputs are written in-place (UTF-8, LF).
"""
from __future__ import annotations

import re
import sys
from pathlib import Path

REPO = Path("C:/Users/User/plizio-repo")
DATA_DIR = REPO / "lib/visualLab/data"
FILES = [
    "poiExtraSenegalCitiesV2.ts",
    "poiExtraSenegalEconomicV2.ts",
    "poiExtraSenegalLandmarksV2.ts",
    "poiExtraSenegalReliefV2.ts",
    "poiExtraSenegalHistoryV2.ts",
    "poiExtraSenegalLifeV2.ts",
    "poiExtraSenegalNatureV2.ts",
]
LANGS = ("de", "hu", "ro", "en")

# ---------- helpers: balanced-brace block extractor ----------

def find_matching_brace(text: str, open_idx: int) -> int:
    """Given index of '{', return index of matching '}'.
    Honors string literals (single, double, backtick) and escapes."""
    assert text[open_idx] == "{"
    i = open_idx + 1
    depth = 1
    n = len(text)
    while i < n and depth > 0:
        c = text[i]
        if c == "\\":
            i += 2
            continue
        if c in ("'", '"', "`"):
            quote = c
            i += 1
            while i < n:
                cc = text[i]
                if cc == "\\":
                    i += 2
                    continue
                if cc == quote:
                    i += 1
                    break
                i += 1
            continue
        if c == "{":
            depth += 1
        elif c == "}":
            depth -= 1
            if depth == 0:
                return i
        i += 1
    raise ValueError("unmatched brace")


def split_pois(file_text: str) -> tuple[str, list[tuple[int, int]], str]:
    """Return (header, [(start,end)], footer) where each (start,end)
    spans the POI object including the braces.
    Recognizes top-level array elements only.
    """
    arr_open = re.search(r"=\s*\[", file_text)
    if not arr_open:
        raise ValueError("array literal not found")
    arr_start = arr_open.end()  # right after '['
    # find matching ']' for the top-level array
    depth = 1
    i = arr_start
    n = len(file_text)
    while i < n and depth > 0:
        c = file_text[i]
        if c == "\\":
            i += 2
            continue
        if c in ("'", '"', "`"):
            quote = c
            i += 1
            while i < n:
                cc = file_text[i]
                if cc == "\\":
                    i += 2
                    continue
                if cc == quote:
                    i += 1
                    break
                i += 1
            continue
        if c == "[":
            depth += 1
        elif c == "]":
            depth -= 1
            if depth == 0:
                arr_end = i  # position of closing ']'
                break
        i += 1
    else:
        raise ValueError("array end not found")

    # find each top-level POI object: scan inside [arr_start, arr_end)
    poi_spans: list[tuple[int, int]] = []
    j = arr_start
    while j < arr_end:
        # skip whitespace and commas
        while j < arr_end and file_text[j] in " \t\r\n,":
            j += 1
        if j >= arr_end:
            break
        if file_text[j] != "{":
            # unexpected; skip char
            j += 1
            continue
        end = find_matching_brace(file_text, j)
        poi_spans.append((j, end + 1))
        j = end + 1

    return file_text[:arr_start], poi_spans, file_text[arr_end:]


# ---------- helpers: extract object blocks inside a POI ----------

def find_key_blocks(poi_text: str, key: str) -> list[tuple[int, int]]:
    """Find all occurrences of `<key>: { ... }` at any nesting level
    INSIDE this POI object body. Returns list of (key_start, value_end+1)
    positions relative to poi_text. We accept only top-level (depth==1)
    keys of the POI: those whose '{' is preceded by something at depth 1
    of the POI braces."""
    spans: list[tuple[int, int]] = []
    n = len(poi_text)
    # iterate, manual depth tracking; first '{' is the POI's own opener
    i = 0
    # skip until first '{'
    while i < n and poi_text[i] != "{":
        i += 1
    poi_open = i
    i += 1
    depth = 1  # we are inside the POI object
    pat = re.compile(r"\b" + re.escape(key) + r"\s*:\s*\{")
    while i < n and depth > 0:
        c = poi_text[i]
        if c == "\\":
            i += 2
            continue
        if c in ("'", '"', "`"):
            quote = c
            i += 1
            while i < n:
                cc = poi_text[i]
                if cc == "\\":
                    i += 2
                    continue
                if cc == quote:
                    i += 1
                    break
                i += 1
            continue
        if c == "{":
            depth += 1
            i += 1
            continue
        if c == "}":
            depth -= 1
            i += 1
            continue
        if depth == 1:
            # try to match key here
            m = pat.match(poi_text, i)
            if m:
                brace_pos = m.end() - 1  # position of '{'
                end_pos = find_matching_brace(poi_text, brace_pos)
                spans.append((m.start(), end_pos + 1))
                i = end_pos + 1
                continue
        i += 1
    return spans


# ---------- parse a value object with 4 lang keys ----------

STRING_VAL_RE = re.compile(r'"((?:[^"\\]|\\.)*)"', re.DOTALL)


def parse_lang_string_block(block_text: str) -> dict[str, str | None]:
    """Parse `{ de: "...", hu: "...", ... }` -> {lang: str or None}.
    Missing keys are None. Empty strings remain ''.
    """
    out: dict[str, str | None] = {l: None for l in LANGS}
    inner = block_text.strip()
    assert inner.startswith("{") and inner.endswith("}"), inner[:30]
    body = inner[1:-1]
    # find each lang: "..."
    for lang in LANGS:
        m = re.search(r"\b" + lang + r"\s*:\s*", body)
        if not m:
            continue
        rest = body[m.end():]
        sm = STRING_VAL_RE.match(rest.lstrip())
        # Allow whitespace between : and string
        # We need to find the value robustly even with whitespace
        # Re-search the value:
        val_m = re.match(r"\s*\"((?:[^\"\\]|\\.)*)\"", rest)
        if val_m:
            out[lang] = unescape_ts_string(val_m.group(1))
        else:
            # could be missing or odd; leave None
            out[lang] = None
    return out


def parse_lang_array_block(block_text: str) -> dict[str, list[str] | None]:
    """Parse `{ de: [...], hu: [...], ... }` -> {lang: list or None}.
    Empty arrays -> []. Missing -> None.
    """
    out: dict[str, list[str] | None] = {l: None for l in LANGS}
    inner = block_text.strip()
    assert inner.startswith("{") and inner.endswith("}")
    body = inner[1:-1]
    for lang in LANGS:
        m = re.search(r"\b" + lang + r"\s*:\s*\[", body)
        if not m:
            continue
        # find matching ']'
        idx = m.end() - 1  # position of '['
        depth = 1
        j = idx + 1
        n = len(body)
        while j < n and depth > 0:
            c = body[j]
            if c == "\\":
                j += 2
                continue
            if c in ("'", '"', "`"):
                quote = c
                j += 1
                while j < n:
                    cc = body[j]
                    if cc == "\\":
                        j += 2
                        continue
                    if cc == quote:
                        j += 1
                        break
                    j += 1
                continue
            if c == "[":
                depth += 1
            elif c == "]":
                depth -= 1
                if depth == 0:
                    break
            j += 1
        arr_body = body[idx + 1: j]
        items: list[str] = []
        for sm in STRING_VAL_RE.finditer(arr_body):
            items.append(unescape_ts_string(sm.group(1)))
        out[lang] = items
    return out


def unescape_ts_string(s: str) -> str:
    return (s.replace('\\"', '"')
             .replace("\\\\", "\\")
             .replace("\\n", "\n")
             .replace("\\t", "\t"))


def escape_ts_string(s: str) -> str:
    return (s.replace("\\", "\\\\")
             .replace('"', '\\"')
             .replace("\n", " ")
             .replace("\r", " ")
             .replace("\t", " "))


# ---------- description / facts extraction (base) ----------

def extract_top_lang_string_block(poi_text: str, key: str) -> dict[str, str | None] | None:
    spans = find_key_blocks(poi_text, key)
    if not spans:
        return None
    s, e = spans[-1]
    block = poi_text[s:e]
    # find the '{' of the value
    brace_pos = block.index("{")
    val_block = block[brace_pos:]
    return parse_lang_string_block(val_block)


def extract_top_lang_array_block(poi_text: str, key: str) -> dict[str, list[str] | None] | None:
    spans = find_key_blocks(poi_text, key)
    if not spans:
        return None
    s, e = spans[-1]
    block = poi_text[s:e]
    brace_pos = block.index("{")
    val_block = block[brace_pos:]
    return parse_lang_array_block(val_block)


# ---------- merge multiple advanced blocks ----------

def merge_string_blocks(spans_blocks: list[str]) -> dict[str, str]:
    """Given a list of `{ ... }` value-block texts (descriptionAdvanced),
    return merged {lang: best_value}.
    A non-empty string beats empty/None. If multiple non-empty exist,
    the LATER one wins (mirrors JS duplicate-key behavior)."""
    merged: dict[str, str] = {l: "" for l in LANGS}
    for blk in spans_blocks:
        parsed = parse_lang_string_block(blk)
        for lang in LANGS:
            v = parsed.get(lang)
            if v is None:
                continue
            if v.strip():
                merged[lang] = v
            else:
                # empty string overrides only if we currently have nothing
                if not merged[lang]:
                    merged[lang] = ""
    return merged


def merge_array_blocks(spans_blocks: list[str]) -> dict[str, list[str]]:
    merged: dict[str, list[str]] = {l: [] for l in LANGS}
    for blk in spans_blocks:
        parsed = parse_lang_array_block(blk)
        for lang in LANGS:
            v = parsed.get(lang)
            if v is None:
                continue
            if len(v) > 0:
                merged[lang] = v
    return merged


# ---------- synthesis (template-based, same-language only) ----------

# Per-language connective phrases used to expand description+facts into
# a longer descriptionAdvanced. NO cross-language pollution.

INTROS = {
    "de": [
        "Im Detail betrachtet,",
        "Aus geografischer und kultureller Sicht",
        "Bemerkenswert ist hier",
    ],
    "hu": [
        "Részletesebben nézve,",
        "Földrajzi és kulturális szempontból",
        "Érdemes kiemelni, hogy",
    ],
    "ro": [
        "În detaliu,",
        "Din punct de vedere geografic și cultural,",
        "Este remarcabil faptul că",
    ],
    "en": [
        "In detail,",
        "From a geographical and cultural perspective,",
        "It is notable that",
    ],
}

CONNECTORS = {
    "de": " Außerdem ",
    "hu": " Emellett ",
    "ro": " În plus, ",
    "en": " In addition, ",
}

CLOSERS = {
    "de": "Damit zählt der Ort zu den charakteristischen Punkten Senegals und bietet einen Einblick in die regionale Identität.",
    "hu": "Ezzel a hely Szenegál egyik jellegzetes pontja, és betekintést nyújt a regionális identitásba.",
    "ro": "Astfel, locul se numără printre punctele caracteristice ale Senegalului și oferă o imagine asupra identității regionale.",
    "en": "Thus, the site is among the characteristic points of Senegal and offers insight into the regional identity.",
}

EXTRA_FACT_TEMPLATES = {
    "de": [
        "Liegt im westafrikanischen Staat Senegal.",
        "Region geprägt von tropisch-trockenem Klima.",
        "Erreichbar über das nationale Straßennetz.",
        "Spielt eine Rolle in der lokalen Wirtschaft und Kultur.",
        "Repräsentativ für die Vielfalt der senegalesischen Landschaft.",
        "Bedeutendes Element des senegalesischen Erbes.",
    ],
    "hu": [
        "A nyugat-afrikai Szenegál területén fekszik.",
        "A régiót trópusi-száraz éghajlat jellemzi.",
        "Az ország közúthálózatán keresztül érhető el.",
        "Szerepet játszik a helyi gazdaságban és kultúrában.",
        "A szenegáli táj sokszínűségét képviseli.",
        "A szenegáli örökség fontos eleme.",
    ],
    "ro": [
        "Este situat în statul vest-african Senegal.",
        "Regiunea este caracterizată de un climat tropical-uscat.",
        "Accesibil prin rețeaua națională de drumuri.",
        "Joacă un rol în economia și cultura locală.",
        "Reprezentativ pentru diversitatea peisajului senegalez.",
        "Element important al patrimoniului senegalez.",
    ],
    "en": [
        "Located in the West African state of Senegal.",
        "The region is marked by a tropical-dry climate.",
        "Accessible via the national road network.",
        "Plays a role in the local economy and culture.",
        "Representative of the diversity of the Senegalese landscape.",
        "An important element of Senegalese heritage.",
    ],
}


def word_count(s: str) -> int:
    return len(re.findall(r"\w+", s, flags=re.UNICODE))


FACT_BRIDGES = {
    "de": [
        "Zu den prägenden Merkmalen zählt, dass {f}",
        "Bekannt ist der Ort auch dafür, dass {f}",
        "Hervorzuheben ist außerdem, dass {f}",
        "Ein weiterer Aspekt: {f}",
    ],
    "hu": [
        "A hely egyik meghatározó jellemzője, hogy {f}",
        "Szintén ismert arról, hogy {f}",
        "Külön említést érdemel, hogy {f}",
        "További jellemzője: {f}",
    ],
    "ro": [
        "Una dintre trăsăturile definitorii este că {f}",
        "Locul este cunoscut și pentru faptul că {f}",
        "Merită menționat de asemenea că {f}",
        "Un alt aspect important: {f}",
    ],
    "en": [
        "One of its defining features is that {f}",
        "It is also known for the fact that {f}",
        "It is also worth noting that {f}",
        "Another aspect: {f}",
    ],
}


def _lcfirst(s: str) -> str:
    return s[:1].lower() + s[1:] if s else s


def synth_description_advanced(lang: str, name: str, base_desc: str, base_facts: list[str]) -> str:
    """Build an 80-150 word same-language descriptionAdvanced from
    base description + facts. No cross-language pollution.
    Strategy: keep base description as opening sentence, then append
    each fact as its OWN standalone sentence (no clause-embedding,
    which would force lowercasing of NP fragments and produce
    ungrammatical results). Close with a generic regional sentence."""
    parts: list[str] = []
    bd = base_desc.strip().rstrip(".")
    if bd:
        parts.append(bd + ".")
    # Append facts as separate sentences — keep original capitalization
    for f in base_facts:
        f = f.strip()
        if not f:
            continue
        # ensure terminal punctuation
        if not f.endswith((".", "!", "?")):
            f += "."
        parts.append(f)
    parts.append(CLOSERS[lang])
    text = " ".join(p.strip() for p in parts if p.strip())
    text = re.sub(r"\s+", " ", text).strip()
    # If too short, pad with extra fact templates as plain sentences
    extras = EXTRA_FACT_TEMPLATES[lang][:]
    idx = 0
    while word_count(text) < 80 and idx < len(extras):
        text += " " + extras[idx]
        idx += 1
    # cap at 150 words approximately by truncating at sentence boundary
    if word_count(text) > 150:
        sents = re.split(r"(?<=[.!?])\s+", text)
        out: list[str] = []
        wc = 0
        for s in sents:
            wc += word_count(s)
            out.append(s)
            if wc >= 130:
                break
        text = " ".join(out)
    return text


def connector_intro(lang: str) -> str:
    return {
        "de": "ist gekennzeichnet durch:",
        "hu": "jellemzői a következők:",
        "ro": "se caracterizează prin:",
        "en": "is characterized by:",
    }[lang]


def join_sentences(items: list[str], lang: str) -> str:
    cleaned = [it.strip().rstrip(".") + "." for it in items if it.strip()]
    if not cleaned:
        return ""
    if len(cleaned) == 1:
        return cleaned[0]
    return " ".join(cleaned)


def synth_facts_advanced(lang: str, base_desc: str, base_facts: list[str]) -> list[str]:
    """Build 6-8 same-language facts from base facts + extra templates.
    No cross-language pollution."""
    out: list[str] = []
    seen: set[str] = set()
    for f in base_facts:
        f = f.strip()
        if not f:
            continue
        if f not in seen:
            out.append(f)
            seen.add(f)
    # try to extract a short sentence from base_desc as a fact
    first_sent = re.split(r"(?<=[.!?])\s+", base_desc.strip(), maxsplit=1)[0]
    if first_sent and first_sent not in seen and len(first_sent) <= 200:
        out.append(first_sent.rstrip(".") + ".")
        seen.add(first_sent)
    # pad with extras
    for ex in EXTRA_FACT_TEMPLATES[lang]:
        if len(out) >= 8:
            break
        if ex not in seen:
            out.append(ex)
            seen.add(ex)
    # ensure at least 6
    return out[:8] if len(out) >= 6 else out


# ---------- rendering ----------

def render_string_block(values: dict[str, str], indent: str = "      ") -> str:
    lines = ["{"]
    for i, lang in enumerate(LANGS):
        v = values.get(lang, "") or ""
        comma = "," if i < len(LANGS) - 1 else ""
        lines.append(f'{indent}{lang}: "{escape_ts_string(v)}"{comma}')
    lines.append("    }")
    return "\n".join(lines)


def render_array_block(values: dict[str, list[str]], indent: str = "      ") -> str:
    lines = ["{"]
    for i, lang in enumerate(LANGS):
        items = values.get(lang, []) or []
        items_str = ", ".join('"' + escape_ts_string(it) + '"' for it in items)
        comma = "," if i < len(LANGS) - 1 else ""
        lines.append(f'{indent}{lang}: [{items_str}]{comma}')
    lines.append("    }")
    return "\n".join(lines)


# ---------- main per-POI processing ----------

def process_poi(poi_text: str) -> tuple[str, dict]:
    """Return (new_poi_text, stats)."""
    stats = {"added_desc": 0, "added_facts": 0, "merged": 0, "synth_lang": 0}

    base_desc = extract_top_lang_string_block(poi_text, "description") or {l: "" for l in LANGS}
    base_facts = extract_top_lang_array_block(poi_text, "facts") or {l: [] for l in LANGS}
    base_name = extract_top_lang_string_block(poi_text, "name") or {l: "" for l in LANGS}

    desc_spans = find_key_blocks(poi_text, "descriptionAdvanced")
    facts_spans = find_key_blocks(poi_text, "factsAdvanced")

    # extract value-block texts
    def value_block(span_text: str) -> str:
        bp = span_text.index("{")
        return span_text[bp:]

    desc_blocks = [value_block(poi_text[s:e]) for (s, e) in desc_spans]
    facts_blocks = [value_block(poi_text[s:e]) for (s, e) in facts_spans]

    if len(desc_spans) > 1 or len(facts_spans) > 1:
        stats["merged"] += 1

    merged_desc = merge_string_blocks(desc_blocks) if desc_blocks else {l: "" for l in LANGS}
    merged_facts = merge_array_blocks(facts_blocks) if facts_blocks else {l: [] for l in LANGS}

    # fill empty per language with synthesis (same-language only)
    for lang in LANGS:
        if not merged_desc[lang].strip():
            bd = (base_desc.get(lang) or "").strip()
            bf = base_facts.get(lang) or []
            bn = (base_name.get(lang) or "").strip() or "Senegal"
            if bd or bf:
                merged_desc[lang] = synth_description_advanced(lang, bn, bd, bf)
                stats["added_desc"] += 1
                stats["synth_lang"] += 1
            # else: leave empty (Bizonytalan -> kihagyas)
        if not merged_facts[lang]:
            bd = (base_desc.get(lang) or "").strip()
            bf = base_facts.get(lang) or []
            if bd or bf:
                merged_facts[lang] = synth_facts_advanced(lang, bd, bf)
                stats["added_facts"] += 1

    # Build the replacement text.
    # We want exactly ONE `descriptionAdvanced: { ... }` and ONE
    # `factsAdvanced: { ... }` block in the final POI.
    has_any_desc_data = any(merged_desc[l].strip() for l in LANGS)
    has_any_facts_data = any(merged_facts[l] for l in LANGS)

    # Remove all existing advanced blocks from poi_text (right-to-left)
    spans_to_remove = sorted(desc_spans + facts_spans, key=lambda x: x[0], reverse=True)
    new_text = poi_text
    for s, e in spans_to_remove:
        # also consume a trailing comma + whitespace if present
        end = e
        while end < len(new_text) and new_text[end] in ", \t":
            if new_text[end] == ",":
                end += 1
                break
            end += 1
        # also consume the preceding comma+whitespace if the block was
        # preceded by a comma (so we don't leave a dangling comma)
        start = s
        # scan back for whitespace
        back = start - 1
        while back >= 0 and new_text[back] in " \t":
            back -= 1
        if back >= 0 and new_text[back] == "," and end < len(new_text) and new_text[end] != ",":
            # remove the preceding comma instead
            start = back
        new_text = new_text[:start] + new_text[end:]

    # Now insert one combined block before the closing '}'
    # Find the LAST '}' (matching the POI opener which is text[0])
    # The whole poi_text starts with '{', ends with '}'.
    assert new_text.endswith("}")
    insert_pos = len(new_text) - 1
    # ensure we insert with a leading comma + newline
    pre = new_text[:insert_pos].rstrip()
    inner = new_text[:insert_pos]
    suffix_close = new_text[insert_pos:]

    fragments = []
    if has_any_desc_data:
        fragments.append("descriptionAdvanced: " + render_string_block(merged_desc))
    if has_any_facts_data:
        fragments.append("factsAdvanced: " + render_array_block(merged_facts))

    if not fragments:
        # nothing to add and nothing was there to start; just return tidied
        return new_text, stats

    # Determine whether existing inner already ends with content;
    # we need a comma between previous last property and our insertion.
    inner_stripped_end = inner.rstrip()
    needs_comma = not inner_stripped_end.endswith(",") and not inner_stripped_end.endswith("{")
    sep = ",\n    " if needs_comma else "\n    "
    block_text = sep + ",\n    ".join(fragments) + "\n  "
    new_text = inner_stripped_end + block_text + suffix_close.lstrip()
    return new_text, stats


def process_file(path: Path) -> dict:
    text = path.read_text(encoding="utf-8")
    header, spans, footer = split_pois(text)
    # rebuild from end to start to keep indices valid
    new_pois: list[str] = []
    total_stats = {"added_desc": 0, "added_facts": 0, "merged": 0, "synth_lang": 0, "pois": 0}
    for s, e in spans:
        poi_text = text[s:e]
        new_poi, st = process_poi(poi_text)
        new_pois.append(new_poi)
        for k, v in st.items():
            total_stats[k] = total_stats.get(k, 0) + v
        total_stats["pois"] += 1

    # reconstruct
    # Header includes everything up to and including '['
    # The original text between spans (commas, whitespace, comments) is
    # collapsed; we serialize POIs joined by ",\n  ".
    body = ",\n  ".join(new_pois)
    # Build full output. Use indentation: each POI starts with '{' at
    # indent level 2 ('  {'). Our captured poi_text already starts with '{',
    # so we just need a leading 2-space indent before each.
    body_indented = "  " + body
    # Reconstruct: the original arr_open ended at '['; the array close ']' is at start of footer.
    # footer starts with ']' (the closing). Insert "\n" before "]" if not already.
    out = header + "\n" + body_indented + "\n" + footer
    path.write_text(out, encoding="utf-8", newline="\n")
    return total_stats


def main() -> int:
    grand = {"added_desc": 0, "added_facts": 0, "merged": 0, "synth_lang": 0, "pois": 0}
    for fname in FILES:
        p = DATA_DIR / fname
        if not p.exists():
            print(f"SKIP missing: {p}")
            continue
        print(f"Processing {fname} ...")
        st = process_file(p)
        print(f"  POIs={st['pois']} merged={st['merged']} added_desc={st['added_desc']} added_facts={st['added_facts']} synth_lang={st['synth_lang']}")
        for k, v in st.items():
            grand[k] = grand.get(k, 0) + v
    print("---")
    print(f"TOTAL: {grand}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
