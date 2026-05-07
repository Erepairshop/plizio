import re

def find_missing_keys(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    all_ids = re.findall(r'id:\s*"([^"]+)"', content)
    
    missing_de = []
    missing_hu = []
    missing_ro = []
    missing_en = []
    
    for poi_id in all_ids:
        pattern = r'id:\s*"' + poi_id + r'"(.*?)(?=id:\s*"|$)'
        block_match = re.search(pattern, content, re.DOTALL)
        if block_match:
            block = block_match.group(1)
            
            # Check descriptionAdvanced
            if 'descriptionAdvanced' in block:
                desc_match = re.search(r'descriptionAdvanced:\s*{([^{}]*)}', block, re.DOTALL)
                if desc_match:
                    desc_content = desc_match.group(1)
                    if 'de:' not in desc_content or re.search(r'de:\s*""', desc_content):
                        missing_de.append(poi_id + " (desc)")
                    if 'hu:' not in desc_content or re.search(r'hu:\s*""', desc_content):
                        missing_hu.append(poi_id + " (desc)")
                    if 'ro:' not in desc_content or re.search(r'ro:\s*""', desc_content):
                        missing_ro.append(poi_id + " (desc)")
                    if 'en:' not in desc_content or re.search(r'en:\s*""', desc_content):
                        missing_en.append(poi_id + " (desc)")
            else:
                missing_de.append(poi_id + " (no descAdv)")

            # Check factsAdvanced
            if 'factsAdvanced' in block:
                facts_match = re.search(r'factsAdvanced:\s*{([^{}]*)}', block, re.DOTALL)
                if facts_match:
                    facts_content = facts_match.group(1)
                    if 'de:' not in facts_content or re.search(r'de:\s*\[\s*\]', facts_content):
                        missing_de.append(poi_id + " (facts)")
                    if 'hu:' not in facts_content or re.search(r'hu:\s*\[\s*\]', facts_content):
                        missing_hu.append(poi_id + " (facts)")
                    if 'ro:' not in facts_content or re.search(r'ro:\s*\[\s*\]', facts_content):
                        missing_ro.append(poi_id + " (facts)")
                    if 'en:' not in facts_content or re.search(r'en:\s*\[\s*\]', facts_content):
                        missing_en.append(poi_id + " (facts)")
            else:
                missing_de.append(poi_id + " (no factsAdv)")
                
    return missing_de, missing_hu, missing_ro, missing_en

m_de, m_hu, m_ro, m_en = find_missing_keys('lib/visualLab/data/finlandPoi.ts')

print(f"Missing/Empty DE: {len(m_de)}")
for m in m_de: print(f"  - {m}")
print(f"Missing/Empty HU: {len(m_hu)}")
# for m in m_hu: print(f"  - {m}")
print(f"Missing/Empty RO: {len(m_ro)}")
# for m in m_ro: print(f"  - {m}")
print(f"Missing/Empty EN: {len(m_en)}")
# for m in m_en: print(f"  - {m}")
