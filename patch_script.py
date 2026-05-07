import sys
from pathlib import Path

p = Path("/mnt/c/Users/User/plizio_orch/apply_seo_json.py")
content = p.read_text(encoding="utf-8")

# Fix the lang_obj bug (already fixed by sed but let's be sure)
content = content.replace('v = items.get(L, "") if L == lang', 'v = items if L == lang')

# Fix the update_lang_field bug/logic
# I'll replace the whole function with a more reliable one.

new_func = """
def update_lang_field(block: str, parent_field: str, lang: str, value, content_type: str) -> str:
    parent_pat = rf'(["\\\' ]?{parent_field}["\\\' ]?\\s*:\\s*)\\{{'
    pm = re.search(parent_pat, block, re.DOTALL)
    if not pm: return None
    body_start = pm.end() - 1
    body_end = _find_balanced_span(block, body_start, "{", "}")
    if body_end is None: return None
    body = block[body_start + 1 : body_end - 1]
    
    # Detect quote style for keys
    qs = '"' if re.search(r'"\\w+"\\s*:', body) else ""
    
    if content_type == "string":
        new_val = _js_literal(value.replace("\\n", " "))
    else:
        new_val = _js_literal([x.replace("\\n", " ") for x in value])
    
    lang_pat = rf'([{qs}]?{lang}[{qs}]?\\s*:\\s*)'
    lm = re.search(lang_pat, body)
    if lm:
        v_start = lm.end()
        v_end = _find_js_value_end(body, v_start)
        if v_end is not None:
            new_body = body[:v_start] + new_val + body[v_end:]
            return block[:body_start+1] + new_body + block[body_end-1:]
    
    # Not found, insert
    body_stripped = body.rstrip()
    if body_stripped and not body_stripped.endswith(","):
        body_stripped += ","
    new_body = body_stripped + f"\\n      {qs}{lang}{qs}: {new_val}"
    return block[:body_start+1] + new_body + "\\n    " + block[body_end-1:]
"""

# Use regex to replace the function
pattern = r'def update_lang_field\(.*?\)\s*->\s*str:.*?return block\[:body_start\] \+ "\{" \+ new_body \+ close_brace \+ block\[body_end:\]'
import re
content = re.sub(pattern, new_func, content, flags=re.DOTALL)

p.write_text(content, encoding="utf-8")
print("Script patched successfully")
