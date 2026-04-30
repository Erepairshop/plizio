import re
import json

def analyze_pois(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Simple regex to find POI objects. This might be fragile but let's try.
    # It looks for id: "..." and then tries to find the following descriptionAdvanced and factsAdvanced
    poi_blocks = re.findall(r'\{\s+id:\s+"([^"]+)"(.*?)\n\s+\}(?=,\n\s+\{|,\n\];|,\n\s+\];|\];)', content, re.DOTALL)
    
    results = []
    for poi_id, block in poi_blocks:
        desc_adv_en = ""
        facts_adv_en = []
        
        # Check descriptionAdvanced
        desc_match = re.search(r'descriptionAdvanced:\s*\{(.*?)\}', block, re.DOTALL)
        if desc_match:
            en_match = re.search(r'en:\s*"([^"]*)"', desc_match.group(1))
            if en_match:
                desc_adv_en = en_match.group(1)
        
        # Check factsAdvanced
        facts_match = re.search(r'factsAdvanced:\s*\{(.*?)\}', block, re.DOTALL)
        if facts_match:
            en_match = re.search(r'en:\s*\[(.*?)\]', facts_match.group(1), re.DOTALL)
            if en_match:
                # This is a bit simplified, but should work for empty/non-empty check
                facts_content = en_match.group(1).strip()
                if facts_content:
                    facts_adv_en = [f.strip() for f in facts_content.split(',')]
        
        results.append({
            "id": poi_id,
            "has_desc_en": bool(desc_adv_en),
            "has_facts_en": bool(facts_adv_en)
        })
    
    return results

pois = analyze_pois('lib/visualLab/data/belgiumPoi.ts')
print(json.dumps(pois, indent=2))
