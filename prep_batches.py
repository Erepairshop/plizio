import re
import json

with open("lib/visualLab/data/hungaryPoi.ts", "r", encoding="utf-8") as f:
    content = f.read()

# We can find IDs using a simpler regex and split by that.
matches = list(re.finditer(r'id:\s*["\']([^"\']+)["\']', content))

pois_to_process = []
for i in range(len(matches)):
    poi_id = matches[i].group(1)
    start_idx = matches[i].end()
    end_idx = matches[i+1].start() if i + 1 < len(matches) else len(content)
    
    block = content[start_idx:end_idx]
    
    # Check if ro is empty in descriptionAdvanced
    desc_adv_match = re.search(r'descriptionAdvanced\s*:\s*\{([^}]*)\}', block)
    needs_update = False
    
    if desc_adv_match:
        ro_match = re.search(r'ro\s*:\s*["\'](.*?)["\']', desc_adv_match.group(1))
        if not ro_match or ro_match.group(1).strip() == "":
            needs_update = True
    else:
        needs_update = True
        
    if needs_update:
        pois_to_process.append(poi_id)

print(f"Total POIs needing update: {len(pois_to_process)}")

batch_size = 40
for i in range(0, len(pois_to_process), batch_size):
    batch = pois_to_process[i:i+batch_size]
    batch_num = i // batch_size + 1
    with open(f"hu_batch_{batch_num}.json", "w", encoding="utf-8") as f:
        json.dump(batch, f, indent=2)

print(f"Batches created. Total batches: {(len(pois_to_process)-1)//batch_size + 1}")
