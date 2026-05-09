#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Apply 4-lang descriptionAdvanced fills to poiExtraParaguayCitiesV2.ts.

Approach v2 (safer):
- For each POI id in DATA, locate the POI block by its `id: "..."` line and walk its
  brace structure (TS object literal) using a robust state machine that handles strings.
- Then locate (or create) the `descriptionAdvanced: { ... }` block within that POI.
- For each lang where current length < 50 chars, replace the lang's value.
- If `descriptionAdvanced` block is missing entirely, insert it after `facts: { ... }`.
"""
import re
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent))

from paraguay_v2_data_part1 import DATA_PART1
from paraguay_v2_data_part2 import DATA_PART2
from paraguay_v2_data_part3 import DATA_PART3
from paraguay_v2_data_part4 import DATA_PART4
from paraguay_v2_data_part5 import DATA_PART5

DATA = {}
for d in (DATA_PART1, DATA_PART2, DATA_PART3, DATA_PART4, DATA_PART5):
    DATA.update(d)

FILE = Path(r"C:\Users\User\plizio-repo\lib\visualLab\data\poiExtraParaguayCitiesV2.ts")


def js_escape(s: str) -> str:
    return s.replace("\\", "\\\\").replace('"', '\\"').replace("\n", "\\n")


def find_matching_brace(text: str, open_pos: int) -> int:
    """Given text and position of an opening brace, return position of matching close.
    Handles double-quoted strings with backslash escapes; single-quoted strings ditto."""
    assert text[open_pos] == '{'
    depth = 1
    i = open_pos + 1
    while i < len(text):
        c = text[i]
        if c == '"' or c == "'":
            quote = c
            i += 1
            while i < len(text):
                if text[i] == '\\':
                    i += 2
                    continue
                if text[i] == quote:
                    i += 1
                    break
                i += 1
            continue
        if c == '/':
            # comment? skip // and /* */
            if i + 1 < len(text) and text[i+1] == '/':
                while i < len(text) and text[i] != '\n':
                    i += 1
                continue
            if i + 1 < len(text) and text[i+1] == '*':
                i += 2
                while i + 1 < len(text) and not (text[i] == '*' and text[i+1] == '/'):
                    i += 1
                i += 2
                continue
        if c == '{':
            depth += 1
        elif c == '}':
            depth -= 1
            if depth == 0:
                return i
        i += 1
    raise ValueError("unmatched brace")


def find_poi_block(text: str, pid: str):
    """Return (start_brace_pos, end_brace_pos) of the POI object whose id is pid."""
    m = re.search(r'id:\s*"' + re.escape(pid) + r'"', text)
    if not m:
        return None
    # walk back to find the opening '{' of the object
    i = m.start()
    depth = 0
    while i >= 0:
        c = text[i]
        if c == '}':
            depth += 1
        elif c == '{':
            if depth == 0:
                break
            depth -= 1
        i -= 1
    if i < 0:
        return None
    open_pos = i
    close_pos = find_matching_brace(text, open_pos)
    return (open_pos, close_pos)


def find_field_block(text: str, poi_start: int, poi_end: int, field: str):
    """Find `field: { ... }` within the POI region. Return (key_start, open_brace, close_brace)
    or None."""
    pattern = re.compile(r'\b' + re.escape(field) + r'\s*:\s*\{')
    m = pattern.search(text, poi_start, poi_end)
    if not m:
        return None
    open_pos = m.end() - 1  # position of '{'
    close_pos = find_matching_brace(text, open_pos)
    return (m.start(), open_pos, close_pos)


def get_lang_lengths(inner: str):
    out = {}
    for lang in ("de", "hu", "ro", "en"):
        # Match lang: " ... " allowing escaped quotes inside
        lm = re.search(r'\b' + lang + r'\s*:\s*"((?:[^"\\]|\\.)*)"', inner)
        if lm:
            s = lm.group(1).replace('\\"', '"').replace('\\\\', '\\')
            out[lang] = len(s)
        else:
            out[lang] = 0
    return out


def replace_lang_in_inner(inner: str, lang: str, new_text: str) -> str:
    """Replace existing `lang: "..."` value or append it."""
    escaped = js_escape(new_text)
    pattern = re.compile(r'(\b' + lang + r'\s*:\s*")((?:[^"\\]|\\.)*)(")')
    if pattern.search(inner):
        return pattern.sub(lambda m: m.group(1) + escaped + m.group(3), inner, count=1)
    # append before trailing whitespace
    stripped = inner.rstrip()
    trailing = inner[len(stripped):]
    if stripped.endswith(','):
        return stripped + f'\n      {lang}: "{escaped}"' + trailing
    else:
        return stripped + f',\n      {lang}: "{escaped}"' + trailing


def build_full_descadv(entry: dict, indent="    ") -> str:
    """Build a `descriptionAdvanced: { ... }` block."""
    lines = [f'{indent}descriptionAdvanced: {{']
    parts = []
    for lang in ("de", "hu", "ro", "en"):
        s = entry.get(lang) or ""
        parts.append(f'{indent}  {lang}: "{js_escape(s)}"')
    lines.append(",\n".join(parts))
    lines.append(f'{indent}}}')
    return "\n".join(lines)


def process(text: str):
    updated_pois = 0
    lang_writes = 0
    # Process POIs in reverse file order (so absolute positions of earlier POIs aren't shifted
    # by later edits). We sort by start offset descending.
    poi_offsets = []
    for pid in DATA.keys():
        block = find_poi_block(text, pid)
        if block is None:
            continue
        poi_offsets.append((block[0], pid, block))
    poi_offsets.sort(reverse=True)  # descending start offset

    for _, pid, (poi_start, poi_end) in poi_offsets:
        entry = DATA[pid]
        # Re-find each pass since text changes between iterations? No — we only edit
        # the current POI's region in this iteration, and we go in reverse order, so
        # earlier POIs' offsets remain valid for the NEXT iteration.
        # BUT: poi_start/poi_end were computed BEFORE any edits. If we edit a POI later
        # in the file (we go reverse, so later=first iteration), earlier POIs are
        # unchanged. So poi_start/poi_end remain valid for earlier POIs.
        # However, since we computed them all up-front, they are stale for earlier POIs
        # if later edits change file length above them — but later POIs are AFTER, so
        # they're below. Edits in later POIs do NOT shift earlier POIs' positions.
        # CORRECT for reverse processing as long as we processed in reverse.

        # Re-derive boundaries to be safe — find the POI again in the current text
        block = find_poi_block(text, pid)
        if block is None:
            continue
        poi_start, poi_end = block

        descadv = find_field_block(text, poi_start, poi_end, "descriptionAdvanced")
        if descadv is None:
            # Need to insert. Find facts: { ... } and insert after its closing brace.
            facts = find_field_block(text, poi_start, poi_end, "facts")
            factsAdv = find_field_block(text, poi_start, poi_end, "factsAdvanced")
            # insertion point = after the close brace of facts (or factsAdvanced if exists)
            insert_after = (factsAdv or facts)
            if insert_after is None:
                # fallback: insert before poi closing brace
                # find last char before poi_end
                i = poi_end - 1
                while i > poi_start and text[i] in ' \t\r\n':
                    i -= 1
                if text[i] == ',':
                    insert_pos = i + 1
                    prefix = "\n"
                else:
                    insert_pos = i + 1
                    prefix = ",\n"
                new_block_text = build_full_descadv(entry)
                text = text[:insert_pos] + prefix + new_block_text + "\n  " + text[insert_pos:]
            else:
                close_pos = insert_after[2]  # position of '}'
                # insert after this brace, with comma + newline
                new_block_text = build_full_descadv(entry)
                text = text[:close_pos+1] + ",\n" + new_block_text + text[close_pos+1:]
            updated_pois += 1
            lang_writes += sum(1 for l in ("de","hu","ro","en") if entry.get(l))
            continue

        # descadv exists — patch lang values
        _, open_b, close_b = descadv
        inner = text[open_b+1:close_b]
        lengths = get_lang_lengths(inner)
        new_inner = inner
        changed = False
        for lang in ("de", "hu", "ro", "en"):
            if lengths.get(lang, 0) >= 50:
                continue
            new_text_lang = entry.get(lang)
            if not new_text_lang:
                continue
            new_inner = replace_lang_in_inner(new_inner, lang, new_text_lang)
            changed = True
            lang_writes += 1
        if changed:
            text = text[:open_b+1] + new_inner + text[close_b:]
            updated_pois += 1

    return text, updated_pois, lang_writes


text = FILE.read_text(encoding="utf-8")
text, n_pois, n_langs = process(text)
FILE.write_text(text, encoding="utf-8")
print(f"Updated {n_pois} POIs, wrote {n_langs} lang strings.")
