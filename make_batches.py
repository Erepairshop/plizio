import json

with open('ro1_pois.json', 'r', encoding='utf-8') as f:
    pois = json.load(f)

# We only need to translate to hu
batches = []
current_batch = []
batch_size = 13

for p in pois:
    if len(current_batch) >= batch_size:
        batches.append(current_batch)
        current_batch = []
    
    current_batch.append({
        "id": p["id"],
        "name_hu": p["name"].get("hu", ""),
        "desc_de": p["descriptionAdvanced"].get("de", ""),
        "facts_de": p["factsAdvanced"].get("de", [])
    })

if current_batch:
    batches.append(current_batch)

for i, b in enumerate(batches):
    with open(f'batch_{i}.json', 'w', encoding='utf-8') as f:
        json.dump(b, f, ensure_ascii=False, indent=2)

print(f"Created {len(batches)} batches.")
