"""Deduplicate descriptionAdvanced/factsAdvanced blocks in poiExtra*V2.ts files.

Rules:
- For each POI: merge multiple descriptionAdvanced blocks into one (per-lang first non-empty wins).
- Same for factsAdvanced.
- Cross-language fill is FORBIDDEN — missing langs stay missing.
- Skip Drcongo, Democraticrepublicofcongo, Guatemala, Pakistan files.
- Idempotent.

Approach:
- For each POI body (text between top-level `\n  {\n` and `\n  },` boundaries),
  find all `descriptionAdvanced: { ... }` and `factsAdvanced: { ... }` blocks
  using brace-matching, parse per-lang values, merge, and replace.
"""
import os, re, glob, sys, io

DATA_DIR = r'C:/Users/User/plizio-repo/lib/visualLab/data'
SKIP_PATTERNS = ('Drcongo', 'Democraticrepublicofcongo', 'Guatemala', 'Pakistan')
LANGS = ('de', 'hu', 'ro', 'en')


def find_balanced_block(s, start_idx):
    """Given index pointing at '{', return (open_idx, close_idx) inclusive of braces.
    Respects strings (single/double/backtick) and escapes within."""
    assert s[start_idx] == '{'
    depth = 0
    i = start_idx
    n = len(s)
    in_str = None  # quote char or None
    escape = False
    while i < n:
        c = s[i]
        if in_str:
            if escape:
                escape = False
            elif c == '\\':
                escape = True
            elif c == in_str:
                in_str = None
        else:
            if c in ('"', "'", '`'):
                in_str = c
            elif c == '{':
                depth += 1
            elif c == '}':
                depth -= 1
                if depth == 0:
                    return (start_idx, i)
        i += 1
    return None  # unbalanced


def parse_lang_object(block_text):
    """Parse a `{ de: "...", hu: [...], ... }` block.
    Returns dict lang -> raw value substring (string literal or array literal),
    preserving original formatting.
    Only handles top-level lang keys de/hu/ro/en.
    """
    # Strip outer braces
    inner = block_text[1:-1]
    result = {}
    i = 0
    n = len(inner)
    while i < n:
        # skip whitespace and commas
        while i < n and inner[i] in ' \t\r\n,':
            i += 1
        if i >= n:
            break
        # match lang key: identifier followed by ':'
        m = re.match(r'(de|hu|ro|en)\s*:\s*', inner[i:])
        if not m:
            # skip until next comma at depth 0
            depth = 0
            in_str = None
            escape = False
            j = i
            while j < n:
                c = inner[j]
                if in_str:
                    if escape: escape = False
                    elif c == '\\': escape = True
                    elif c == in_str: in_str = None
                else:
                    if c in ('"', "'", '`'): in_str = c
                    elif c in '{[(':
                        depth += 1
                    elif c in '}])':
                        depth -= 1
                    elif c == ',' and depth == 0:
                        break
                j += 1
            i = j
            continue
        lang = m.group(1)
        i += m.end()
        # parse value: either string literal or array literal
        # find end of value (top-level comma or end)
        depth = 0
        in_str = None
        escape = False
        start = i
        while i < n:
            c = inner[i]
            if in_str:
                if escape: escape = False
                elif c == '\\': escape = True
                elif c == in_str: in_str = None
            else:
                if c in ('"', "'", '`'): in_str = c
                elif c in '{[(':
                    depth += 1
                elif c in '}])':
                    depth -= 1
                elif c == ',' and depth == 0:
                    break
            i += 1
        val = inner[start:i].rstrip()
        result[lang] = val
    return result


def is_empty_value(val):
    """Check if a parsed value is essentially empty (e.g. "" or [] or whitespace)."""
    s = val.strip()
    if s == '""' or s == "''" or s == '``':
        return True
    if s == '[]':
        return True
    return False


def split_pois(text):
    """Yield (preamble, [(poi_body, sep), ...], suffix) so we can reassemble.
    A POI starts with '\n  {\n' and ends just before '\n  },\n' or '\n  }]\n' (closing of array).
    Returns (header, list_of_pois_text_with_trailing_sep, footer).
    """
    # Find header end (the array opener)
    m = re.search(r':\s*POI\[\]\s*=\s*\[\n', text)
    if not m:
        return None
    header_end = m.end()
    header = text[:header_end]
    rest = text[header_end:]

    # POIs delimited by `  {\n ... \n  },\n` or final `  }];\n`
    # Use a state machine: find each top-level `  {` start at column 2.
    pois = []
    i = 0
    n = len(rest)
    while i < n:
        # capture leading whitespace (indentation) so we preserve it on output
        ws_start = i
        while i < n and rest[i] in ' \t\r\n':
            i += 1
        leading_ws = rest[ws_start:i]
        if i >= n:
            # trailing whitespace -> include in footer
            i = ws_start
            break
        if rest[i] == ']':
            # array closer; rewind to leading_ws so it goes to footer
            i = ws_start
            break
        if rest[i] != '{':
            i = ws_start
            break
        # find matching close brace
        block = find_balanced_block(rest, i)
        if not block:
            return None
        body = leading_ws + rest[i:block[1]+1]
        i = block[1] + 1
        # consume trailing chars up to (and including) '\n' after possible ',' or rest of line (e.g., `, image: "..."}` already inside)
        # Actually image is already inside the closing `}` (e.g. `}, image: "..."}` - no, look again)
        # In the Algeria sample: `    }, image: "/poi-images/...webp"},` -- the trailing "}, image:..." is INSIDE last fact key brace? Let's check.
        # Actually the structure shown was: `factsAdvanced: { ... }, image: "...webp"},` -- the outer `},` ends the POI. So `}` we matched IS the outermost POI brace.
        # The trailing chars after our matched `}` should be `,\n  ` (separator) or `\n]`
        # Capture up to next `\n`
        sep_start = i
        while i < n and rest[i] != '\n':
            i += 1
        if i < n:
            i += 1  # include newline
        sep = rest[sep_start:i]
        pois.append((body, sep))
    footer = rest[i:]
    return (header, pois, footer)


def find_advanced_blocks(body, key_name):
    """Find all `<key_name>: { ... }` blocks at depth-1 in POI body.
    Returns list of (start_idx, end_idx, parsed_dict) where indices are over `body`.
    The block span is from the start of `<key>` keyword to just past the closing `}`.
    """
    results = []
    pattern = re.compile(r'\b' + re.escape(key_name) + r'\s*:\s*\{')
    for m in pattern.finditer(body):
        # find the brace index
        brace_idx = body.find('{', m.start())
        bb = find_balanced_block(body, brace_idx)
        if not bb:
            continue
        # The "block" we want to replace spans from m.start() to bb[1]+1
        block_text = body[brace_idx:bb[1]+1]
        parsed = parse_lang_object(block_text)
        results.append((m.start(), bb[1]+1, parsed))
    return results


def merge_blocks(blocks):
    """blocks: list of dicts lang->raw_val. Merge: first non-empty per lang wins."""
    merged = {}
    for b in blocks:
        for lang in LANGS:
            if lang in b and lang not in merged and not is_empty_value(b[lang]):
                merged[lang] = b[lang]
    # Also include any non-LANGS keys from first block? Skip — only LANGS supported.
    return merged


def render_block(key_name, merged_dict):
    """Render a `key: { de: ..., hu: ..., ro: ..., en: ... }` block on a single line."""
    parts = []
    for lang in LANGS:
        if lang in merged_dict:
            parts.append(f'{lang}: {merged_dict[lang]}')
    if not parts:
        return None  # nothing to render
    return f'{key_name}: {{ ' + ', '.join(parts) + ' }'


def process_poi_body(body):
    """Returns (new_body, dupes_found, slots_merged, slots_missing).
    dupes_found: number of duplicate blocks removed (extra blocks beyond the first per key).
    slots_merged: number of lang slots aggregated from extra blocks into the canonical block.
    slots_missing: total lang slots missing in the final merged blocks (only counted for keys
       that had duplicates, since we don't fill non-duplicated cases).
    """
    dupes = 0
    merged_slots = 0
    missing_slots = 0
    new_body = body
    for key in ('descriptionAdvanced', 'factsAdvanced'):
        blocks = find_advanced_blocks(new_body, key)
        if len(blocks) <= 1:
            continue
        # multiple blocks => duplicate
        dupes += len(blocks) - 1
        # Merge
        parsed_list = [b[2] for b in blocks]
        first_dict = parsed_list[0]
        merged = merge_blocks(parsed_list)
        # Count merged slots: how many langs in `merged` came from non-first blocks (i.e., first didn't have that lang or was empty)
        for lang in LANGS:
            in_first = lang in first_dict and not is_empty_value(first_dict[lang])
            in_merged = lang in merged
            if in_merged and not in_first:
                merged_slots += 1
            if not in_merged:
                missing_slots += 1
        # Render new block
        new_block_text = render_block(key, merged)
        if new_block_text is None:
            # All blocks empty; just remove all but first (replace with empty)
            new_block_text = f'{key}: {{}}'
        # Replace from rightmost to leftmost so indices stay valid
        # Strategy: replace first block with new merged text; remove rest with their following ',' or whitespace
        # Sort blocks by start desc
        blocks_sorted = sorted(blocks, key=lambda x: x[0], reverse=True)
        for idx, (start, end, _) in enumerate(blocks_sorted):
            is_first = (start == blocks[0][0])
            if is_first:
                # replace with merged
                new_body = new_body[:start] + new_block_text + new_body[end:]
            else:
                # remove block AND surrounding comma + whitespace/newline
                # extend `end` forward past trailing ',\n    ' if present
                e = end
                # consume trailing comma+whitespace
                m = re.match(r',\s*', new_body[e:])
                if m:
                    e += m.end()
                else:
                    # consume preceding whitespace+comma
                    s = start
                    bm = re.search(r',\s*$', new_body[:s])
                    if bm:
                        start = bm.start()
                new_body = new_body[:start] + new_body[e:]
    return new_body, dupes, merged_slots, missing_slots


def should_skip(filepath):
    name = os.path.basename(filepath)
    return any(p in name for p in SKIP_PATTERNS)


def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        text = f.read()
    parsed = split_pois(text)
    if not parsed:
        return None
    header, pois, footer = parsed
    new_pois = []
    file_dupes = 0
    file_merged = 0
    file_missing = 0
    for body, sep in pois:
        new_body, d, mg, ms = process_poi_body(body)
        new_pois.append((new_body, sep))
        file_dupes += d
        file_merged += mg
        file_missing += ms
    if file_dupes == 0:
        return (0, 0, 0, False)
    new_text = header + ''.join(b + s for b, s in new_pois) + footer
    if new_text != text:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_text)
        return (file_dupes, file_merged, file_missing, True)
    return (file_dupes, file_merged, file_missing, False)


def main():
    files = sorted(glob.glob(os.path.join(DATA_DIR, 'poiExtra*V2.ts')))
    report_lines = []
    total_files = 0
    total_dupes = 0
    total_merged = 0
    total_missing = 0
    skipped = 0
    for fp in files:
        if should_skip(fp):
            skipped += 1
            continue
        result = process_file(fp)
        if result is None:
            continue
        d, mg, ms, changed = result
        if d > 0:
            total_files += 1
            total_dupes += d
            total_merged += mg
            total_missing += ms
            report_lines.append(f"{os.path.basename(fp)}: dupes={d}, merged_slots={mg}, missing_slots={ms}, changed={changed}")
    print(f"Processed (skipped {skipped}); files with dupes: {total_files}")
    print(f"Total: duplicates_removed={total_dupes}, slots_merged={total_merged}, slots_missing={total_missing}")
    print()
    for line in report_lines:
        print(line)


if __name__ == '__main__':
    main()
