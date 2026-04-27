import json
import re
import os

def merge_faqs():
    ts_file_path = r'C:\Users\User\plizio-repo\lib\visualLab\data\poiExtraDe2.ts'
    json_files = [
        r'C:\Users\User\plizio-repo\tmp_faqs_hessen.json',
        r'C:\Users\User\plizio-repo\tmp_faqs_niedersachsen.json',
        r'C:\Users\User\plizio-repo\tmp_faqs_sachsen.json',
        r'C:\Users\User\plizio-repo\tmp_faqs_rp.json'
    ]

    all_faqs = {}
    for jf in json_files:
        with open(jf, 'r', encoding='utf-8') as f:
            all_faqs.update(json.load(f))

    with open(ts_file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Sort IDs by length descending to avoid partial matches if any (though here IDs are unique)
    sorted_ids = sorted(all_faqs.keys(), key=len, reverse=True)

    for poi_id in sorted_ids:
        faqs = all_faqs[poi_id]
        faq_json = json.dumps(faqs, indent=4, ensure_ascii=False)
        # Adjust indentation for the TS file
        faq_ts = "faq: " + faq_json.replace('\n', '\n    ')
        
        # Find the POI block by ID and then find the facts block within it
        # We look for the closing brace of facts: { ... }
        # Pattern: id: "poi_id" ... facts: { ... } ,
        # We want to insert after the }, of facts
        
        id_pattern = rf'id:\s*"{poi_id}"'
        id_match = re.search(id_pattern, content)
        if not id_match:
            print(f"Warning: {poi_id} not found")
            continue
            
        start_search = id_match.end()
        # Find the next facts: {
        facts_match = re.search(r'facts:\s*\{', content[start_search:])
        if not facts_match:
            print(f"Warning: facts not found for {poi_id}")
            continue
            
        facts_start = start_search + facts_match.start()
        
        # Find the closing brace of the facts object
        # It's the first }, after facts: { that is at the same indentation level
        # Actually, in this file it seems consistent:
        # facts: {
        #   ...
        # },
        
        # Look for the first \n    }, after facts_start
        closing_facts_match = re.search(r'\n    \},', content[facts_start:])
        if not closing_facts_match:
            print(f"Warning: closing facts not found for {poi_id}")
            continue
            
        insert_pos = facts_start + closing_facts_match.end()
        
        # Insert the FAQ
        insertion = f"\n    {faq_ts},"
        content = content[:insert_pos] + insertion + content[insert_pos:]

    with open(ts_file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print("Successfully merged FAQs into TS file")

if __name__ == "__main__":
    merge_faqs()
