import re

file_path = 'lib/visualLab/data/finlandPoi.ts'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Match POI blocks
matches = list(re.finditer(r'id:\s*["\']([^"\']+)["\']', content))

for i in range(len(matches)):
    start = matches[i].start()
    end = matches[i+1].start() if i + 1 < len(matches) else len(content)
    block = content[start:end]
    
    poi_id = matches[i].group(1)
    
    # Check if de is filled in descriptionAdvanced
    has_de_desc = False
    m_desc = re.search(r'descriptionAdvanced:\s*{[^}]*de:\s*["\']([^"\']*)["\']', block, re.DOTALL)
    if m_desc and m_desc.group(1).strip() and m_desc.group(1) != "...":
        has_de_desc = True
        
    # Check if de is filled in factsAdvanced
    has_de_facts = False
    m_facts = re.search(r'factsAdvanced:\s*{[^}]*de:\s*\[(.*?)\]', block, re.DOTALL)
    if m_facts:
        de_content = m_facts.group(1)
        if re.search(r'["\'][^"\']+["\']', de_content) and "..." not in de_content:
            has_de_facts = True
            
    if not (has_de_desc and has_de_facts):
        print(f"ID: {poi_id} - Needs SEO expansion (Desc={has_de_desc}, Facts={has_de_facts})")
