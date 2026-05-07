import re
from add_cz_ro_1 import ro_data as ro_data_1
from add_cz_ro_2 import ro_data as ro_data_2
from add_cz_ro_3 import ro_data as ro_data_3

all_data = {}
all_data.update(ro_data_1)
all_data.update(ro_data_2)
all_data.update(ro_data_3)

files_to_fix = [
    "lib/visualLab/data/poiExtraCzechRepublicCities.ts",
    "lib/visualLab/data/czechrepublicPoi.ts"
]

for file_path in files_to_fix:
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()
        
    matches = list(re.finditer(r"id:\s*\"([^\"]+)\"", content))
    new_content = content
    
    for match in reversed(matches):
        start_pos = match.start()
        obj_start = content.rfind("{", 0, start_pos)
        depth = 0
        obj_end = -1
        for i in range(obj_start, len(content)):
            if content[i] == "{":
                depth += 1
            elif content[i] == "}":
                depth -= 1
                if depth == 0:
                    obj_end = i + 1
                    break
        
        if obj_end != -1:
            old_block = content[obj_start:obj_end]
            poi_id_match = re.search(r"id:\s*\"([^\"]+)\"", old_block)
            if poi_id_match:
                poi_id = poi_id_match.group(1)
                if poi_id in all_data:
                    data = all_data[poi_id]
                    updated_block = old_block
                    
                    # Find all descriptionAdvanced blocks
                    desc_matches = list(re.finditer(r"descriptionAdvanced:\s*\{([^\}]*)\}", updated_block, re.DOTALL))
                    for d_match in reversed(desc_matches):
                        inner = d_match.group(1)
                        ro_match = re.search(r"ro:\s*\"([^\"]*)\"", inner)
                        if ro_match:
                            new_ro = f"ro: \"{data['desc']}\""
                            new_inner = inner.replace(ro_match.group(0), new_ro)
                            # Replace specifically this part of the block
                            d_start = d_match.start(1)
                            d_end = d_match.end(1)
                            updated_block = updated_block[:d_start] + new_inner + updated_block[d_end:]
                    
                    # Find all factsAdvanced blocks
                    facts_matches = list(re.finditer(r"factsAdvanced:\s*\{([^\}]*)\}", updated_block, re.DOTALL))
                    facts_list_str = "[\n      \"" + "\",\n      \"".join(data["facts"]) + "\"\n    ]"
                    for f_match in reversed(facts_matches):
                        inner = f_match.group(1)
                        ro_match = re.search(r"ro:\s*\[([^\]]*)\]", inner, re.DOTALL)
                        if ro_match:
                            new_ro = f"ro: {facts_list_str}"
                            new_inner = inner.replace(ro_match.group(0), new_ro)
                            f_start = f_match.start(1)
                            f_end = f_match.end(1)
                            updated_block = updated_block[:f_start] + new_inner + updated_block[f_end:]
                            
                    if updated_block != old_block:
                        new_content = new_content[:obj_start] + updated_block + new_content[obj_end:]
                        
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(new_content)
    print(f"Fixed {file_path}")
