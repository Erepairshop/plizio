"""Deterministically patch descriptionAdvanced.{lang} + factsAdvanced.{lang} into a POI TS file
based on a JSON manifest. NO Gemini-style 'replace' tool fragility.

JSON manifest schema:
{
  "lang": "all",                        // 'all' means use the lang dict from the item
  "files": [                            // list of target TS files
    "lib/visualLab/data/poiExtraHu1.ts",
    "lib/visualLab/data/poiExtraHu2.ts"
  ],
  "items": [
    {
      "id": "geo-gellert-hegy-extra",
      "descriptionAdvanced": { "de": "...", "hu": "...", "ro": "...", "en": "..." },
      "factsAdvanced": { "de": [], "hu": [], "ro": [], "en": [] }
    },
    ...
  ]
}
"""
import json
import os
import re
import sys
from pathlib import Path


def _detect_repo() -> Path:
    """Auto-detect repo root depending on OS (Windows or WSL/Linux)."""
    candidates = [
        Path("/mnt/c/Users/User/plizio-repo"),  # WSL view
        Path("C:/Users/User/plizio-repo"),  # native Windows
        Path("/c/Users/User/plizio-repo"),  # mingw
    ]
    for c in candidates:
        if c.is_dir():
            return c
    return candidates[0]


REPO = _detect_repo()
LANGS = ["de", "hu", "ro", "en"]


def find_poi_block(content: str, poi_id: str):
    """Return (start, end) of the POI object containing id == poi_id, or None."""
    pattern = rf'(?:^|\W)["\']?id["\']?\s*:\s*["\']{re.escape(poi_id)}["\']'
    m = re.search(pattern, content, re.MULTILINE)
    if not m:
        return None
    id_pos = m.start()
    depth = 0
    start = id_pos
    for i in range(id_pos, -1, -1):
        c = content[i]
        if ch_in_string(content, i): continue
        if c == '}': depth += 1
        elif c == '{':
            if depth == 0:
                start = i
                break
            depth -= 1
    depth = 0
    end = start
    for i in range(start, len(content)):
        c = content[i]
        if ch_in_string(content, i): continue
        if c == '{': depth += 1
        elif c == '}':
            depth -= 1
            if depth == 0:
                end = i + 1
                break
    return (start, end)

def ch_in_string(text, pos):
    in_str = None
    esc = False
    for i in range(pos):
        ch = text[i]
        if in_str:
            if esc: esc = False
            elif ch == "\\": esc = True
            elif ch == in_str: in_str = None
        elif ch in ('"', "'"): in_str = ch
    return in_str is not None

def has_field(block: str, field: str) -> bool:
    return re.search(rf'(?:^|\s)["\']?{field}["\']?\s*:', block, re.MULTILINE) is not None

def detect_quote_style(block: str) -> str:
    if re.search(r'"id"\s*:', block): return '"'
    return ""

def _find_balanced_span(text: str, open_pos: int, open_char: str, close_char: str) -> int | None:
    if open_pos < 0 or open_pos >= len(text) or text[open_pos] != open_char: return None
    depth = 0
    in_string = None
    escaped = False
    for i in range(open_pos, len(text)):
        ch = text[i]
        if in_string:
            if escaped: escaped = False
            elif ch == "\\": escaped = True
            elif ch == in_string: in_string = None
            continue
        if ch in ('"', "'"): in_string = ch
        elif ch == open_char: depth += 1
        elif ch == close_char:
            depth -= 1
            if depth == 0: return i + 1
    return None

def _find_js_value_end(text: str, start_pos: int) -> int | None:
    i = start_pos
    while i < len(text) and text[i].isspace(): i += 1
    if i >= len(text): return None
    if text[i] in ('"', "'"):
        quote = text[i]
        i += 1
        escaped = False
        while i < len(text):
            ch = text[i]
            if escaped: escaped = False
            elif ch == "\\": escaped = True
            elif ch == quote: return i + 1
            i += 1
        return None
    if text[i] == "[": return _find_balanced_span(text, i, "[", "]")
    return None

def _js_literal(value) -> str:
    return json.dumps(value, ensure_ascii=False)

def update_lang_field(block: str, parent_field: str, lang: str, value, content_type: str) -> str:
    parent_pat = rf'(["\']?{parent_field}["\']?\s*:\s*)\{{'
    pm = re.search(parent_pat, block, re.DOTALL)
    if not pm: return None
    body_start = pm.end() - 1
    body_end = _find_balanced_span(block, body_start, "{", "}")
    if body_end is None: return None
    body = block[body_start + 1 : body_end - 1]
    qs = '"' if re.search(r'"\w+"\s*:', body) else ""
    if content_type == "string":
        new_val = _js_literal(value.replace("\n", " "))
    else:
        new_val = _js_literal([x.replace("\n", " ") for x in value])
    lang_pat = rf'({qs}{lang}{qs}\s*:\s*)'
    lm = re.search(lang_pat, body)
    if lm:
        value_start = lm.end()
        value_end = _find_js_value_end(body, value_start)
        if value_end is not None:
            new_body = body[:value_start] + new_val + body[value_end:]
            return block[:body_start] + "{" + new_body + "}" + block[body_end:]
    indent_match = re.search(r'\n(\s+)', body)
    indent = indent_match.group(1) if indent_match else "      "
    body_stripped = body.rstrip()
    if body_stripped and not body_stripped.endswith(","): body_stripped += ","
    new_body = body_stripped + f'\n{indent}{qs}{lang}{qs}: {new_val}\n' + (indent[:-2] if len(indent) > 2 else "")
    return block[:body_start] + "{" + new_body + "}" + block[body_end:]

def insert_seo_block(block: str, item: dict) -> str:
    qs = detect_quote_style(block)
    id_match = re.search(r'\n(\s+)["\']?id["\']?\s*:', block)
    indent = id_match.group(1) if id_match else "    "
    
    def make_obj(data, fmt):
        parts = []
        for L in LANGS:
            val = data.get(L, "" if fmt == "string" else [])
            v_str = _js_literal(val if fmt == "array" else str(val).replace("\n", " "))
            parts.append(f'{indent}  {L}: {v_str}')
        return "{\n" + ",\n".join(parts) + f"\n{indent}}}"

    desc_obj = make_obj(item["descriptionAdvanced"], "string")
    facts_obj = make_obj(item["factsAdvanced"], "array")
    insertion = f',\n{indent}descriptionAdvanced: {desc_obj},\n{indent}factsAdvanced: {facts_obj}'
    m = re.search(r',?\s*\}$', block)
    if not m: return block
    return block[:m.start()] + insertion + "\n" + indent[:-2] + "}"

def patch_file(file_path: Path, items: list) -> int:
    text = file_path.read_text(encoding="utf-8")
    matched = 0
    for item in items:
        poi_id = item["id"]
        loc = find_poi_block(text, poi_id)
        if not loc: continue
        start, end = loc
        block = text[start:end]
        if has_field(block, "descriptionAdvanced"):
            for L in LANGS:
                block = update_lang_field(block, "descriptionAdvanced", L, item["descriptionAdvanced"][L], "string")
                block = update_lang_field(block, "factsAdvanced", L, item["factsAdvanced"][L], "array")
        else:
            block = insert_seo_block(block, item)
        text = text[:start] + block + text[end:]
        matched += 1
    file_path.write_text(text, encoding="utf-8", newline="\n")
    return matched

def main(json_path):
    with open(json_path, encoding="utf-8") as f:
        manifest = json.load(f)
    files = [REPO / f for f in manifest["files"]]
    items = manifest["items"]
    for fp in files:
        count = patch_file(fp, items)
        print(f"Updated {count} POIs in {fp.name}")
    
    import subprocess
    subprocess.run(["git", "add"] + [str(f) for f in files])
    msg = f"feat(POI): Bahamas +{len(items)} SEO fields (4-lang)"
    subprocess.run(["git", "commit", "-m", msg])
    sha = subprocess.check_output(["git", "rev-parse", "--short", "HEAD"], text=True).strip()
    print(f"COMMIT OK: {sha}")

if __name__ == "__main__":
    main(sys.argv[1])
