import re
import os

file_path = "/mnt/c/Users/User/plizio-repo/lib/visualLab/data/poiExtraBelizeHistoryV2.ts"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Find the array content
match = re.search(r"export const poiExtraBelizeHistoryV2: POI\[\] = \[(.*)\];", content, re.DOTALL)
if not match:
    print("Could not find the POI array")
    exit(1)

array_content = match.group(1)

# Split by POI objects. 
pois_raw = re.split(r"\n  \{", "\n" + array_content)
pois_raw = [p.strip() for p in pois_raw if p.strip()]

def clean_poi(poi_str):
    id_match = re.search(r'id:\s*"([^"]+)"', poi_str)
    poi_id = id_match.group(1) if id_match else "unknown"
    
    name_en_match = re.search(r'en:\s*"([^"]+)"', poi_str) # First en match is usually the name
    poi_name = name_en_match.group(1) if name_en_match else poi_id
    
    lines = poi_str.split("\n")
    new_lines = []
    
    all_en_desc = []
    all_en_facts = []
    
    i = 0
    while i < len(lines):
        line = lines[i]
        
        if "descriptionAdvanced: {" in line:
            block_content = ""
            depth = 1
            j = i
            while depth > 0 and j < len(lines):
                line_j = lines[j]
                if j > i:
                    if "{" in line_j: depth += line_j.count("{")
                    if "}" in line_j: depth -= line_j.count("}")
                block_content += line_j + "\n"
                j += 1
            en_match = re.search(r'en:\s*"(.*?)"', block_content, re.DOTALL)
            if en_match and en_match.group(1).strip():
                all_en_desc.append(en_match.group(1).strip())
            i = j
            continue
            
        if "factsAdvanced: {" in line:
            block_content = ""
            depth = 1
            j = i
            while depth > 0 and j < len(lines):
                line_j = lines[j]
                if j > i:
                    if "{" in line_j: depth += line_j.count("{")
                    if "}" in line_j: depth -= line_j.count("}")
                block_content += line_j + "\n"
                j += 1
            en_facts_match = re.search(r'en:\s*\[(.*?)\]', block_content, re.DOTALL)
            if en_facts_match:
                facts_str = en_facts_match.group(1)
                facts = re.findall(r'["\'](.*?)["\']', facts_str)
                if facts:
                    all_en_facts.append(facts)
            i = j
            continue
        
        if line.strip() and line.strip() != "}" and line.strip() != "},":
             new_lines.append(line)
        i += 1

    best_desc = max(all_en_desc, key=len) if all_en_desc else ""
    best_facts = all_en_facts[-1] if all_en_facts else []
    
    # Validation
    desc_word_count = len(best_desc.split())
    facts_count = len(best_facts)
    
    print(f"POI: {poi_id} | Name: {poi_name} | Words: {desc_word_count} | Facts: {facts_count}")
    
    # Build the cleaned object
    cleaned_poi = "  {\n"
    for line in new_lines:
        if line.strip():
            cleaned_poi += line + "\n"
    
    cleaned_poi += '    descriptionAdvanced: {\n'
    cleaned_poi += '      de: "",\n'
    cleaned_poi += '      hu: "",\n'
    cleaned_poi += '      ro: "",\n'
    cleaned_poi += f'      en: "{best_desc}",\n'
    cleaned_poi += '    },\n'
    
    cleaned_poi += '    factsAdvanced: {\n'
    cleaned_poi += '      de: [],\n'
    cleaned_poi += '      hu: [],\n'
    cleaned_poi += '      ro: [],\n'
    facts_formatted = ",\n".join([f"        '{f}'" for f in best_facts])
    cleaned_poi += f'      en: [\n{facts_formatted}\n      ],\n'
    cleaned_poi += '    }\n'
    cleaned_poi += '  }'
    
    return cleaned_poi

cleaned_pois = [clean_poi(p) for p in pois_raw]

new_content = "import type { POI } from \"./poi\";\n\nexport const poiExtraBelizeHistoryV2: POI[] = [\n"
new_content += ",\n".join(cleaned_pois)
new_content += "\n];\n"

with open(file_path, "w", encoding="utf-8") as f:
    f.write(new_content)

print(f"Processed {len(cleaned_pois)} POIs")
