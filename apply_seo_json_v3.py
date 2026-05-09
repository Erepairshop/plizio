
import json
import sys
import os
import re

def main():
    if len(sys.argv) < 2:
        print("Usage: python apply_seo_json_v3.py <json_file>")
        sys.exit(1)

    json_file_path = sys.argv[1]
    if not os.path.exists(json_file_path):
        print(f"Error: JSON file not found at {json_file_path}")
        sys.exit(1)

    with open(json_file_path, 'r', encoding='utf-8') as f:
        data = json.load(f)

    project_root = r'C:/Users/User/plizio-repo'
    files_to_update = data.get("files", [])
    
    for file_path_suffix in files_to_update:
        file_path = os.path.join(project_root, file_path_suffix).replace('/', os.sep)
        if not os.path.exists(file_path):
            print(f"Warning: File not found, skipping: {file_path}")
            continue

        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        for item in data.get("items", []):
            poi_id = item.get("id")
            if not poi_id:
                continue
            
            print(f"Processing POI: {poi_id}")

            poi_regex = re.compile(r"{\s*id:\s*"" + re.escape(poi_id) + r""[\s\S]*?}(?=\s*,\s*|(?:\s*]))", re.DOTALL)
            match = poi_regex.search(content)

            if not match:
                print(f"  Warning: POI with id '{poi_id}' not found in {file_path}")
                continue

            poi_text = match.group(0)
            print(f"  Original POI text:
{poi_text}")

            new_poi_text = poi_text

            if "descriptionAdvancedDe" in item:
                desc_de = json.dumps(item["descriptionAdvancedDe"], ensure_ascii=False)
                desc_hu = json.dumps(item["descriptionAdvancedHu"], ensure_ascii=False)
                desc_ro = json.dumps(item["descriptionAdvancedRo"], ensure_ascii=False)
                desc_en = json.dumps(item["descriptionAdvancedEn"], ensure_ascii=False)
                
                desc_block = "descriptionAdvanced: {
" + 
                             "      de: " + desc_de + ",
" + 
                             "      hu: " + desc_hu + ",
" + 
                             "      ro: " + desc_ro + ",
" + 
                             "      en: " + desc_en + "
" + 
                             "    }"

                if "descriptionAdvanced:" in new_poi_text:
                    print("  Updating existing descriptionAdvanced block")
                    new_poi_text = re.sub(r"descriptionAdvanced:\s*\{[\s\S]*?\}", desc_block, new_poi_text, flags=re.DOTALL)
                else:
                    print("  Adding new descriptionAdvanced block")
                    new_poi_text = new_poi_text.rstrip().rstrip('}').rstrip() + ",
    " + desc_block + "
  }"
            
            if "factsAdvancedDe" in item:
                facts_de = json.dumps(item["factsAdvancedDe"], ensure_ascii=False)
                facts_hu = json.dumps(item["factsAdvancedHu"], ensure_ascii=False)
                facts_ro = json.dumps(item["factsAdvancedRo"], ensure_ascii=False)
                facts_en = json.dumps(item["factsAdvancedEn"], ensure_ascii=False)

                facts_block = "factsAdvanced: {
" + 
                              "      de: " + facts_de + ",
" + 
                              "      hu: " + facts_hu + ",
" + 
                              "      ro: " + facts_ro + ",
" + 
                              "      en: " + facts_en + "
" + 
                              "    }"

                if "factsAdvanced:" in new_poi_text:
                    print("  Updating existing factsAdvanced block")
                    new_poi_text = re.sub(r"factsAdvanced:\s*\{[\s\S]*?\}", facts_block, new_poi_text, flags=re.DOTALL)
                else:
                    print("  Adding new factsAdvanced block")
                    # Check if we need to add a closing brace back
                    if not new_poi_text.strip().endswith('}'):
                        new_poi_text = new_poi_text.rstrip().rstrip('}').rstrip() + ",
    " + facts_block + "
  }"
                    else:
                        new_poi_text = new_poi_text.rstrip().rstrip('}').rstrip() + ",
    " + facts_block


            print(f"  New POI text:
{new_poi_text}")
            content = content.replace(poi_text, new_poi_text)

        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Finished processing {file_path}")

if __name__ == "__main__":
    main()
