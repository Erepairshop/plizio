import re, json
import apply_ro_1
import apply_ro_2

# Merge payloads
merged_data_by_id = apply_ro_1.data
merged_data_by_name = apply_ro_2.data_by_name

with open("lib/visualLab/data/poiExtraIcelandCities.ts", "r", encoding="utf-8") as f:
    content = f.read()

pois_text = re.split(r"(?=\n  \{\n    id:)", content)
out_blocks = []

for block in pois_text:
    if "id:" not in block:
        out_blocks.append(block)
        continue
        
    id_match = re.search(r"id:\s*\"(.*?)\"", block)
    name_match = re.search(r"name:\s*\{.*?en:\s*\"(.*?)\"", block)
    
    if not id_match or not name_match:
        out_blocks.append(block)
        continue
        
    pid = id_match.group(1)
    name = name_match.group(1)
    
    info = None
    if pid in merged_data_by_id:
        info = merged_data_by_id[pid]
    elif name in merged_data_by_name:
        info = merged_data_by_name[name]
        
    if info:
        # Add descriptionAdvanced if entirely missing
        if "descriptionAdvanced:" not in block:
            inject_desc = f"""
    descriptionAdvanced: {{
      de: "",
      hu: "",
      ro: "{info['desc']}",
      en: ""
    }},"""
            block = re.sub(r"(description:\s*\{.*?\},\n    facts:\s*\{.*?\},?)", r"\1" + inject_desc, block, flags=re.DOTALL)
        else:
            def repl_desc(m2):
                inner = m2.group(1)
                if "ro: \"\"" in inner:
                    inner = inner.replace("ro: \"\"", f"ro: \"{info['desc']}\"")
                elif "ro:" not in inner:
                    inner = f"\n        ro: \"{info['desc']}\",\n" + inner
                else:
                    # if ro is corrupted or already there, replace the value
                    inner = re.sub(r"ro:\s*\".*?\",", f"ro: \"{info['desc']}\",", inner, flags=re.DOTALL)
                return "descriptionAdvanced: {" + inner + "}"
            block = re.sub(r"descriptionAdvanced:\s*\{(.*?)\}", repl_desc, block, flags=re.DOTALL)
            
        # Add factsAdvanced if entirely missing
        ro_facts = json.dumps(info['facts'], ensure_ascii=False)
        if "factsAdvanced:" not in block:
            inject_facts = f"""
    factsAdvanced: {{
      de: [],
      hu: [],
      ro: {ro_facts},
      en: []
    }},"""
            block = re.sub(r"(descriptionAdvanced:\s*\{.*?\},?)", r"\1" + inject_facts, block, flags=re.DOTALL)
        else:
            def repl_facts(m2):
                inner = m2.group(1)
                if "ro: []" in inner:
                    inner = inner.replace("ro: []", f"ro: {ro_facts}")
                elif "ro:" not in inner:
                    inner = f"\n        ro: {ro_facts},\n" + inner
                else:
                    # Replace existing ro array
                    inner = re.sub(r"ro:\s*\[.*?\],", f"ro: {ro_facts},", inner, flags=re.DOTALL)
                return "factsAdvanced: {" + inner + "}"
            block = re.sub(r"factsAdvanced:\s*\{(.*?)\}", repl_facts, block, flags=re.DOTALL)
            
    out_blocks.append(block)

with open("lib/visualLab/data/poiExtraIcelandCities.ts", "w", encoding="utf-8") as f:
    f.write("".join(out_blocks))

print("Applied previously generated data safely WITH creation of missing fields.")
