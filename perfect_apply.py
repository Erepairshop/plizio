import json
import re
import os

# Load all generated content from JSON batches
all_items = {}
for i in range(1, 7):
    path = f"seo_outputs/seo_senegal_en_batch{i}.json"
    if os.path.exists(path):
        with open(path, "r") as f:
            data = json.load(f)
            for item in data["items"]:
                all_items[item["id"]] = item

files = [
    "lib/visualLab/data/poiExtraSenegalCitiesV2.ts",
    "lib/visualLab/data/poiExtraSenegalEconomicV2.ts",
    "lib/visualLab/data/poiExtraSenegalHistoryV2.ts",
    "lib/visualLab/data/poiExtraSenegalLandmarksV2.ts",
    "lib/visualLab/data/poiExtraSenegalLifeV2.ts",
    "lib/visualLab/data/poiExtraSenegalNatureV2.ts",
    "lib/visualLab/data/poiExtraSenegalReliefV2.ts"
]

def update_poi_file(file_path):
    print(f"Processing {file_path}...")
    with open(file_path, "r") as f:
        content = f.read()

    # Split into POI objects. 
    # We use a simple strategy: split by "  {" at the start of a line if it is followed by id:
    # Actually, let's use a more robust regex to find the array content.
    match = re.search(r"export const \w+: POI\[\] = \[(.*)\];", content, re.DOTALL)
    if not match:
        print(f"Could not find array in {file_path}")
        return
    
    array_content = match.group(1)
    
    # Extract each POI object block
    # Objects are separated by "},"
    poi_blocks = re.split(r"},\s*(?=\{)", array_content)
    
    new_blocks = []
    for block in poi_blocks:
        block = block.strip()
        if not block: continue
        if not block.startswith("{"): block = "{" + block
        if not block.endswith("}"): block = block + "}"
        
        # Extract ID
        id_match = re.search(r"id:\s*\"([^\"]+)\"", block)
        if not id_match:
            new_blocks.append(block)
            continue
        
        poi_id = id_match.group(1)
        
        # If we have updates for this POI
        if poi_id in all_items:
            update = all_items[poi_id]
            
            # Update descriptionAdvanced en
            # We look for descriptionAdvanced: { ... en: "..." ... }
            # Or just descriptionAdvanced: { ... }
            desc_adv_match = re.search(r"descriptionAdvanced:\s*\{([^}]*)\}", block, re.DOTALL)
            if desc_adv_match:
                inner = desc_adv_match.group(1)
                if 'en:' in inner:
                    # Use a lambda to avoid backslash issues in replacement string
                    replacement = f"en: {json.dumps(update['descriptionAdvanced'])}"
                    inner = re.sub(r"en:\s*\"[^\"]*\"", lambda m: replacement, inner)
                else:
                    # Append en: "..."
                    inner = inner.strip()
                    if inner and not inner.endswith(","): inner += ","
                    inner += f"\n      en: {json.dumps(update['descriptionAdvanced'])}"
                
                block = block.replace(desc_adv_match.group(0), f"descriptionAdvanced: {{{inner}\n    }}")
            else:
                # Create descriptionAdvanced block
                desc_block = f",\n    descriptionAdvanced: {{\n      en: {json.dumps(update['descriptionAdvanced'])}\n    }}"
                # Insert before the last }
                block = block.rstrip("}").rstrip() + desc_block + "\n  }"

            # Update factsAdvanced en
            facts_adv_match = re.search(r"factsAdvanced:\s*\{([^}]*)\}", block, re.DOTALL)
            if facts_adv_match:
                inner = facts_adv_match.group(1)
                if 'en:' in inner:
                    replacement = f"en: {json.dumps(update['factsAdvanced'])}"
                    inner = re.sub(r"en:\s*\[[^\]]*\]", lambda m: replacement, inner)
                else:
                    inner = inner.strip()
                    if inner and not inner.endswith(","): inner += ","
                    inner += f"\n      en: {json.dumps(update['factsAdvanced'])}"
                block = block.replace(facts_adv_match.group(0), f"factsAdvanced: {{{inner}\n    }}")
            else:
                facts_block = f",\n    factsAdvanced: {{\n      en: {json.dumps(update['factsAdvanced'])}\n    }}"
                block = block.rstrip("}").rstrip() + facts_block + "\n  }"

        new_blocks.append(block)

    # Reconstruct the file
    new_array_content = "\n  " + ",\n  ".join(new_blocks) + "\n"
    new_content = content[:match.start(1)] + new_array_content + content[match.end(1):]
    
    # Final cleanup of any potential double commas or syntax errors from previous steps
    new_content = re.sub(r",\s*,", ",", new_content)
    
    with open(file_path, "w") as f:
        f.write(new_content)

for f in files:
    if os.path.exists(f):
        update_poi_file(f)

print("Perfect apply finished.")
