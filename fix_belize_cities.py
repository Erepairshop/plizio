
import re
import os

file_path = "lib/visualLab/data/poiExtraBelizeCitiesV2.ts"

with open(file_path, "r", encoding="utf-8") as f:
    lines = f.readlines()

new_lines = []
in_poi = False
current_poi_lines = []

def process_poi(poi_lines):
    content = "".join(poi_lines)
    
    # Try to extract and merge descriptionAdvanced
    desc_adv_de = ""
    desc_adv_en = ""
    # Look for all descriptionAdvanced blocks
    matches = re.finditer(r'descriptionAdvanced:\s*\{([^\}]+)\}', content)
    for m in matches:
        block = m.group(1)
        de_m = re.search(r'de:\s*"([^"]*)"', block)
        en_m = re.search(r'en:\s*"([^"]*)"', block)
        if de_m and de_m.group(1).strip():
            desc_adv_de = de_m.group(1).strip()
        if en_m and en_m.group(1).strip():
            desc_adv_en = en_m.group(1).strip()
            
    # Same for factsAdvanced
    facts_adv_de = []
    facts_adv_en = []
    matches = re.finditer(r'factsAdvanced:\s*\{([^\}]+)\}', content)
    for m in matches:
        block = m.group(1)
        # Match array content: de: [ ... ]
        de_m = re.search(r'de:\s*\[([^\]]*)\]', block)
        en_m = re.search(r'en:\s*\[([^\]]*)\]', block)
        if de_m and de_m.group(1).strip():
            # Clean up and split by comma, then strip quotes
            items = re.findall(r'"([^"]*)"', de_m.group(1))
            if items: facts_adv_de = items
        if en_m and en_m.group(1).strip():
            items = re.findall(r'"([^"]*)"', en_m.group(1))
            if items: facts_adv_en = items

    # Remove all descriptionAdvanced and factsAdvanced blocks and double commas
    content = re.sub(r'descriptionAdvanced:\s*\{[^\}]+\},?', '', content)
    content = re.sub(r'factsAdvanced:\s*\{[^\}]+\},?', '', content)
    content = re.sub(r',,+', ',', content)
    
    # Re-insert consolidated blocks before the closing brace
    # Find last brace
    last_brace_idx = content.rfind('}')
    
    # Format descriptionAdvanced
    desc_block = f'\n    descriptionAdvanced: {{\n      de: "{desc_adv_de}",\n      hu: "",\n      ro: "",\n      en: "{desc_adv_en}"\n    }},'
    
    # Format factsAdvanced
    def format_list(l):
        if not l: return "[]"
        return "[\n        " + ",\n        ".join([f'"{i}"' for i in l]) + "\n      ]"
    
    facts_block = f'\n    factsAdvanced: {{\n      de: {format_list(facts_adv_de)},\n      hu: [],\n      ro: [],\n      en: {format_list(facts_adv_en)}\n    }}'
    
    content = content[:last_brace_idx].rstrip().rstrip(',') + ',' + desc_block + facts_block + "\n  }"
    return content

for line in lines:
    if "  {" == line.strip():
        in_poi = True
        current_poi_lines = [line]
    elif in_poi:
        current_poi_lines.append(line)
        if "  }," == line.strip() or "  }" == line.strip():
            in_poi = False
            new_lines.append(process_poi(current_poi_lines))
            if "  }" == line.strip() and not line.endswith('},'): # if it was the last one
                 pass # we'll handle trailing comma later
    else:
        new_lines.append(line)

# Final join and fix commas
final_content = "".join(new_lines)
# Ensure pois are separated by },
final_content = re.sub(r'\}\s+\{', '},\n  {', final_content)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(final_content)
