import re

file_path = "/mnt/c/Users/User/plizio-repo/lib/visualLab/data/poiExtraBelizeHistoryV2.ts"

with open(file_path, "r", encoding="utf-8") as f:
    lines = f.readlines()

new_lines = []
in_block = False
block_type = None # 'object' or 'array'

for i, line in enumerate(lines):
    stripped = line.strip()
    
    # Fix the missing braces for name, description, facts
    if stripped in ["name: {", "description: {"]:
        in_block = True
        block_type = "object"
        new_lines.append(line)
        continue
    
    if stripped == "facts: {":
        in_block = True
        block_type = "facts_obj"
        new_lines.append(line)
        continue

    if in_block:
        if block_type == "object" and stripped.startswith('en: "'):
            # This is the last line of name or description
            new_lines.append(line)
            new_lines.append("    },\n")
            in_block = False
            continue
        
        if block_type == "facts_obj":
            if stripped.startswith('en: ['):
                # We need to find the end of this array
                new_lines.append(line)
                block_type = "facts_en_array"
                continue
        
        if block_type == "facts_en_array" and stripped == "],":
            new_lines.append(line)
            new_lines.append("    },\n")
            in_block = False
            continue
            
    # Remove the stray commas that my previous script might have left
    if stripped == "," or stripped == ", ,":
        continue
        
    # Fix the ID indentation and formatting
    if stripped.startswith('id: "'):
        new_lines.append("    " + stripped + ",\n")
        continue

    new_lines.append(line)

# Also fix the factsAdvanced.en quotes and formatting
# And ensure only 8 facts are kept
content = "".join(new_lines)

def fix_facts(match):
    facts_content = match.group(1)
    facts = re.findall(r"'(.*?)'", facts_content)
    # Filter out stray commas/empty strings from the previous mess
    facts = [f for f in facts if f.strip() and f not in [",", ", "]]
    # Trim to 8 facts
    facts = facts[:8]
    formatted = ",\n".join([f"        '{f}'" for f in facts])
    return f"      en: [\n{formatted}\n      ],"

content = re.sub(r"en: \[\n(.*?)\n      \],", fix_facts, content, flags=re.DOTALL)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Restoration and cleanup complete.")
