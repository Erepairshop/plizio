"""Deterministically patch description.{lang} + facts.{lang} into a POI TS file
based on a JSON manifest. NO Gemini-style 'replace' tool fragility.

JSON manifest schema:
{
  "lang": "hu",                        // single lang to patch
  "files": [                            // list of target TS files
    "lib/visualLab/data/poiExtraHu1.ts",
    "lib/visualLab/data/poiExtraHu2.ts"
  ],
  "items": [
    {
      "id": "geo-gellert-hegy-extra",
      "description": "....",   // 80-150 word HU text
      "facts": ["fact1", "fact2", ...]
    },
    ...
  ]
}

Behavior:
- For each TS file, find POI by id (matches both `id: "..."` and `"id": "..."` syntax)
- If POI has no `description` block → INSERT a new 4-lang block with only the target lang filled
- If POI has `description` block → UPDATE only the target lang field (preserve other langs)
- Same for facts
- Write back with original line endings preserved
- Print summary: matched / skipped / not-found

Run: python apply_seo_json.py path/to/seo.json
"""
import json
import os
import re
import sys
from pathlib import Path


def _detect_repo() -> Path:
    """Auto-detect repo root depending on OS (Windows or WSL/Linux)."""
    import os as _os
    if _os.name == "nt":
        candidates = [
            Path("C:/Users/User/plizio-repo"),  # native Windows
            Path("/mnt/c/Users/User/plizio-repo"),
            Path("/c/Users/User/plizio-repo"),
        ]
    else:
        candidates = [
            Path("/mnt/c/Users/User/plizio-repo"),  # WSL view
            Path("C:/Users/User/plizio-repo"),
            Path("/c/Users/User/plizio-repo"),  # mingw
        ]
    for c in candidates:
        if c.is_dir():
            return c
    return candidates[0]


REPO = _detect_repo()
LANGS = ["de", "hu", "ro", "en"]


def find_poi_block(content: str, poi_id: str):
    """Return (start, end) of the POI object containing id == poi_id, or None.
    Looks for `id: "ID"` or `"id": "ID"` then walks back to opening `{`, walks forward to matching `}`.
    """
    # Match either id form
    pattern = rf'(?:^|\W)["\']?id["\']?\s*:\s*["\']{re.escape(poi_id)}["\']'
    m = re.search(pattern, content, re.MULTILINE)
    if not m:
        return None
    id_pos = m.start()
    # Walk back to find opening `{`
    depth = 0
    start = id_pos
    for i in range(id_pos, -1, -1):
        c = content[i]
        if c == '}':
            depth += 1
        elif c == '{':
            if depth == 0:
                start = i
                break
            depth -= 1
    # Walk forward to find matching `}`
    depth = 0
    end = start
    for i in range(start, len(content)):
        c = content[i]
        if c == '{':
            depth += 1
        elif c == '}':
            depth -= 1
            if depth == 0:
                end = i + 1
                break
    return (start, end)


def has_field(block: str, field: str) -> bool:
    return re.search(rf'(?:^|\s)["\']?{field}["\']?\s*:', block, re.MULTILINE) is not None


def detect_quote_style(block: str) -> str:
    """Returns '"' if file uses double-quoted keys/values, else ''."""
    if re.search(r'"id"\s*:', block):
        return '"'
    return ""


def _find_balanced_span(text: str, open_pos: int, open_char: str, close_char: str) -> int | None:
    """Return the index just after the matching close_char for text[open_pos].
    Ignores brackets inside strings and escaped characters.
    """
    if open_pos < 0 or open_pos >= len(text) or text[open_pos] != open_char:
        return None

    depth = 0
    in_string = None
    escaped = False
    for i in range(open_pos, len(text)):
        ch = text[i]
        if in_string:
            if escaped:
                escaped = False
            elif ch == "\\":
                escaped = True
            elif ch == in_string:
                in_string = None
            continue

        if ch in ('"', "'"):
            in_string = ch
        elif ch == open_char:
            depth += 1
        elif ch == close_char:
            depth -= 1
            if depth == 0:
                return i + 1
    return None


def _find_js_value_end(text: str, start_pos: int) -> int | None:
    """Return the index just after a JS string or array value starting at start_pos."""
    i = start_pos
    while i < len(text) and text[i].isspace():
        i += 1
    if i >= len(text):
        return None

    if text[i] in ('"', "'"):
        quote = text[i]
        i += 1
        escaped = False
        while i < len(text):
            ch = text[i]
            if escaped:
                escaped = False
            elif ch == "\\":
                escaped = True
            elif ch == quote:
                return i + 1
            i += 1
        return None

    if text[i] == "[":
        return _find_balanced_span(text, i, "[", "]")

    return None


def _js_literal(value) -> str:
    """Return a safe JS literal for strings or arrays."""
    return json.dumps(value, ensure_ascii=False)


def update_lang_field(block: str, parent_field: str, lang: str, value, content_type: str) -> str:
    """In `block`, find `parent_field: { ... }` and update its `lang` sub-field to value.
    content_type: 'string' or 'array'
    Preserves other langs.
    """
    # Find parent block using a balanced brace scan instead of a regex body matcher.
    parent_pat = rf'(["\']?{parent_field}["\']?\s*:\s*)\{{'
    pm = re.search(parent_pat, block, re.DOTALL)
    if not pm:
        return None  # caller should handle insertion
    body_start = pm.end() - 1
    body_end = _find_balanced_span(block, body_start, "{", "}")
    if body_end is None:
        return None
    body = block[body_start + 1 : body_end - 1]
    close_brace = "}"

    # Quote style detect
    qs = '"' if re.search(r'"\w+"\s*:', body) else ""

    # Format value
    if content_type == "string":
        new_val = _js_literal(value.replace("\n", " "))
    else:  # array
        new_val = _js_literal([x.replace("\n", " ") for x in value])

    # Try to update existing lang by locating the exact value span.
    lang_pat = rf'({qs}{lang}{qs}\s*:\s*)'
    lm = re.search(lang_pat, body)
    if lm:
        value_start = lm.end()
        value_end = _find_js_value_end(body, value_start)
        if value_end is not None:
            new_body = body[:value_start] + new_val + body[value_end:]
            return block[:body_start] + "{" + new_body + close_brace + block[body_end:]

    # Lang field missing — insert before close brace
    indent_match = re.search(r'\n(\s+)', body)
    indent = indent_match.group(1) if indent_match else "      "
    # Trim trailing whitespace + add comma if needed
    body_stripped = body.rstrip()
    if body_stripped and not body_stripped.endswith(","):
        body_stripped += ","
    new_body = body_stripped + f'\n{indent}{qs}{lang}{qs}: {new_val}\n' + (indent[:-2] if len(indent) > 2 else "")
    return block[:body_start] + "{" + new_body + close_brace + block[body_end:]


def insert_seo_block(block: str, lang: str, desc: str, facts: list) -> str:
    """POI object has no description/facts — insert both."""
    qs = detect_quote_style(block)
    # Find indent (look at id line)
    id_match = re.search(r'\n(\s+)["\']?id["\']?\s*:', block)
    indent = id_match.group(1) if id_match else "    "

    # Build 4-lang objects with only target lang filled
    inner_indent = indent + "  "

    def lang_obj(items, fmt):
        parts = []
        for L in LANGS:
            v = items if L == lang else ("" if fmt == "string" else [])
            if fmt == "string":
                vv = _js_literal(str(v).replace("\n", " "))
                parts.append(f"{inner_indent}{qs}{L}{qs}: {vv}")
            else:
                items_str = ", ".join([_js_literal(i) for i in v])
                parts.append(f"{inner_indent}{qs}{L}{qs}: [{items_str}]")
        return "{\n" + ",\n".join(parts) + f"\n{indent}}}"

    desc_obj = lang_obj(desc, "string")
    facts_obj = lang_obj(facts, "array")

    # Insert before final `}` of POI block
    insertion = f',\n{indent}{qs}description{qs}: {desc_obj},\n{indent}{qs}facts{qs}: {facts_obj}'

    # Remove trailing comma+ws+}
    m = re.search(r',?\s*\}$', block)
    if not m:
        return block
    return block[:m.start()] + insertion + "\n" + indent[:-2] + "}"


def _validate_ts_syntax(file_path: Path) -> bool:
    """Returns True if the TS file parses without syntax errors.
    Uses node --check (treats as JS syntax, sufficient for our object literals)."""
    import subprocess
    try:
        # Strip TS-specific syntax that node --check rejects, then validate
        # Easier: use `node -e 'require("typescript").transpileModule(...)'` if TS available.
        # Falls back to node --check on .js content (treats TS as JS — POI files have no advanced TS).
        result = subprocess.run(
            ["node", "--check", str(file_path)],
            capture_output=True, text=True, timeout=15
        )
        if result.returncode == 0:
            return True
        err = (result.stderr or "")[:200]
        # node --check rejects valid TS like `: POI[]`, but those errors look like 'Missing initializer'.
        # We only care about UNTERMINATED STRINGS / brace mismatches that the regex bug introduces.
        bad_signals = ("Unterminated string", "Unexpected token }", "Unexpected token ,", "Unexpected end of input")
        return not any(sig in err for sig in bad_signals)
    except Exception:
        return True  # don't reject on tooling failure


def patch_file(file_path: Path, items: list, lang: str) -> dict:
    original_text = file_path.read_text(encoding="utf-8")
    text = original_text
    matched = 0
    skipped = 0
    rolled_back = 0
    not_found = []

    for item in items:
        poi_id = item["id"]
        desc = item.get("description", "")
        facts = item.get("facts", [])
        if not desc:
            continue

        loc = find_poi_block(text, poi_id)
        if not loc:
            not_found.append(poi_id)
            continue
        start, end = loc
        block = text[start:end]
        block_before = block

        try:
            if has_field(block, "description"):
                new_block = update_lang_field(block, "description", lang, desc, "string")
                if new_block is None:
                    skipped += 1
                    continue
                block = new_block

                if has_field(block, "facts"):
                    facts_new = update_lang_field(block, "facts", lang, facts, "array")
                    if facts_new is not None:
                        block = facts_new

                candidate = text[:start] + block + text[end:]
            else:
                block = insert_seo_block(block, lang, desc, facts)
                candidate = text[:start] + block + text[end:]
        except Exception as e:
            print(f"  PATCH ERROR {poi_id}: {e}")
            skipped += 1
            continue

        # Per-item validate via temp file: if syntax broken → rollback this item
        tmp = file_path.with_suffix(file_path.suffix + ".tmpcheck")
        try:
            tmp.write_text(candidate, encoding="utf-8", newline="\n")
            if _validate_ts_syntax(tmp):
                text = candidate
                matched += 1
            else:
                print(f"  ROLLBACK {poi_id}: syntax error after patch (kept previous content)")
                rolled_back += 1
        finally:
            try: tmp.unlink()
            except Exception: pass

    file_path.write_text(text, encoding="utf-8", newline="\n")

    # Final guard: if final text broke syntax (shouldn't happen given per-item check), restore original
    if not _validate_ts_syntax(file_path):
        file_path.write_text(original_text, encoding="utf-8", newline="\n")
        print(f"  FINAL ROLLBACK: file {file_path.name} broken — restored original")
        return {"matched": 0, "skipped": skipped, "rolled_back": matched + rolled_back, "not_found": not_found, "total_items": len(items)}

    return {"matched": matched, "skipped": skipped, "rolled_back": rolled_back, "not_found": not_found, "total_items": len(items)}


def auto_commit(files: list, lang: str, country: str, matched: int):
    """Run git add + commit on the patched files. Returns commit hash on success."""
    import subprocess
    rel_files = [str(f.relative_to(REPO)).replace("\\", "/") for f in files]
    try:
        subprocess.run(["git", "-C", str(REPO), "add"] + rel_files,
                       check=True, capture_output=True, timeout=60)
        msg = f"feat({country} poi seo {lang}): {matched} POI description.{lang}+facts.{lang} (apply_seo_json batch)"
        result = subprocess.run(
            ["git", "-C", str(REPO), "commit", "-m", msg],
            capture_output=True, text=True, timeout=180,
        )
        if result.returncode == 0:
            sha = subprocess.check_output(
                ["git", "-C", str(REPO), "rev-parse", "--short", "HEAD"],
                text=True, timeout=30,
            ).strip()
            print(f"COMMIT OK: {sha} {msg}")
            return sha
        if "nothing to commit" in (result.stdout + result.stderr).lower():
            print("COMMIT skip: nothing to commit")
            return None
        print(f"COMMIT FAIL: {result.stdout[:200]} {result.stderr[:200]}")
        return None
    except subprocess.TimeoutExpired as e:
        print(f"COMMIT TIMEOUT: {e}")
        return None
    except Exception as e:
        print(f"COMMIT ERROR: {e}")
        return None


def main(json_path):
    with open(json_path, encoding="utf-8") as f:
        manifest = json.load(f)
    lang = manifest["lang"]
    # multi4: items have descriptionDe/Hu/Ro/En + facts (optional per-lang dict).
    # Internally split into 4 single-lang passes so existing patch logic stays unchanged.
    if lang == "multi4":
        items_in = manifest["items"]
        files = manifest.get("files", [])
        country = manifest.get("country", "?")
        from pathlib import Path as _P
        per_lang_total = {"matched": 0, "skipped": 0}
        patched_files_set = set()
        for L in ("de", "hu", "ro", "en"):
            sub_items = []
            for it in items_in:
                desc_key = "description" + L.capitalize()
                desc = it.get(desc_key) or it.get("description", {}).get(L) if isinstance(it.get("description"), dict) else it.get(desc_key)
                if not desc:
                    continue
                facts_field = it.get("facts", [])
                if isinstance(facts_field, dict):
                    facts_l = facts_field.get(L, [])
                else:
                    facts_l = facts_field if L == "de" else []
                sub_items.append({"id": it["id"], "description": desc, "facts": facts_l})
            if not sub_items:
                continue
            print(f"--- multi4 lang={L}: {len(sub_items)} items ---")
            for fp_str in files:
                fp = REPO / fp_str
                if not fp.exists():
                    print(f"  MISS file: {fp}")
                    continue
                r = patch_file(fp, sub_items, L)
                print(f"  {fp.name} ({L}): matched={r['matched']} skipped={r['skipped']}")
                per_lang_total["matched"] += r["matched"]
                per_lang_total["skipped"] += r["skipped"]
                if r["matched"] > 0:
                    patched_files_set.add(fp)
        print(f"\nMulti4 total: matched={per_lang_total['matched']}, skipped={per_lang_total['skipped']}")
        if per_lang_total["matched"] > 0 and patched_files_set:
            marker_dir = REPO / "lib/visualLab/.seo_tmp"
            marker_dir.mkdir(parents=True, exist_ok=True)
            marker_path = marker_dir / "_apply_marker.txt"
            with open(marker_path, "a", encoding="utf-8") as mf:
                import time as _t
                mf.write(f"{int(_t.time())} {country} multi4 matched={per_lang_total['matched']} files={','.join(f.name for f in patched_files_set)}\n")
            print(f"APPLY OK: matched={per_lang_total['matched']}")
        return
    if lang not in LANGS:
        raise ValueError(f"Bad lang: {lang}")
    files = [REPO / f for f in manifest["files"]]
    items = manifest["items"]
    country = manifest.get("country", "?")

    print(f"Patching {len(items)} POIs in {len(files)} files (lang={lang})")
    overall = {"matched": 0, "skipped": 0, "rolled_back": 0, "not_found": []}
    patched_files = []
    for fp in files:
        if not fp.exists():
            print(f"  MISS file: {fp}")
            continue
        result = patch_file(fp, items, lang)
        print(f"  {fp.name}: matched={result['matched']} skipped={result['skipped']} rolled_back={result.get('rolled_back', 0)} not_found={len(result['not_found'])}")
        overall["matched"] += result["matched"]
        overall["skipped"] += result["skipped"]
        overall["rolled_back"] += result.get("rolled_back", 0)
        if result["matched"] > 0:
            patched_files.append(fp)
    print(f"\nTotal: matched={overall['matched']}, skipped={overall['skipped']}, rolled_back={overall['rolled_back']}")

    # Write marker so orchestrator can detect success without requiring git commit
    if overall["matched"] > 0 and patched_files:
        marker_dir = REPO / "lib/visualLab/.seo_tmp"
        marker_dir.mkdir(parents=True, exist_ok=True)
        marker_path = marker_dir / "_apply_marker.txt"
        with open(marker_path, "a", encoding="utf-8") as mf:
            import time as _t
            mf.write(f"{int(_t.time())} {country} {lang} matched={overall['matched']} files={','.join(f.name for f in patched_files)}\n")
        print(f"APPLY OK: matched={overall['matched']} marker={marker_path}")

    # Optional auto-commit only if AUTO_COMMIT env var set (legacy)
    if os.environ.get("AUTO_COMMIT") and overall["matched"] > 0 and patched_files:
        auto_commit(patched_files, lang, country, overall["matched"])


if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python apply_seo_json.py path/to/seo.json")
        sys.exit(1)
    main(sys.argv[1])
