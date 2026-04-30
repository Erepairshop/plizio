import re

def audit():
    with open('lib/visualLab/data/denmarkPoi.ts', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Simple regex to find POI blocks and their IDs
    # This is rough because of the broken structure
    poi_blocks = re.findall(r'\{[^{}]*id:\s*"([^"]+)"[^{}]*\}', content, re.DOTALL)
    
    # Better approach: find all "id: '...'" and then the surrounding context
    ids = re.findall(r'id:\s*"([^"]+)"', content)
    print(f"Total POIs found by ID: {len(ids)}")
    
    for poi_id in ids:
        # Find the block for this ID
        # We look for the start of the object and try to find descriptionAdvanced.en
        pattern = rf'id:\s*"{poi_id}"(.*?)(?=\bid:\s*"|\s*\];|\Z)'
        match = re.search(pattern, content, re.DOTALL)
        if match:
            block = match.group(1)
            # Check for non-empty en in descriptionAdvanced
            # This is tricky because of duplicates
            en_desc = re.findall(r'descriptionAdvanced:.*?en:\s*"([^"]*)"', block, re.DOTALL)
            has_en = any(len(d.strip()) > 10 for d in en_desc)
            
            en_facts = re.findall(r'factsAdvanced:.*?en:\s*\[(.*?)\]', block, re.DOTALL)
            has_facts = any(len(f.strip()) > 10 for f in en_facts)
            
            if not has_en or not has_facts:
                print(f"MISSING: {poi_id} (Desc: {has_en}, Facts: {has_facts})")
            else:
                print(f"OK: {poi_id}")

audit()
