
import json
import sys
import os

def main():
    if len(sys.argv) < 2:
        print("Usage: python apply_seo_json_v5.py <json_file>")
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
            lines = f.readlines()

        new_lines = []
        for line in lines:
            new_lines.append(line)
            for item in data.get("items", []):
                poi_id = item.get("id")
                if f'id: "{poi_id}"' in line:
                    print(f"Found POI: {poi_id}")
                    
                    desc_de = json.dumps(item["descriptionAdvancedDe"], ensure_ascii=False)
                    desc_hu = json.dumps(item["descriptionAdvancedHu"], ensure_ascii=False)
                    desc_ro = json.dumps(item["descriptionAdvancedRo"], ensure_ascii=False)
                    desc_en = json.dumps(item["descriptionAdvancedEn"], ensure_ascii=False)
                    
                    new_lines.append("    descriptionAdvanced: {
")
                    new_lines.append(f"      de: {desc_de},
")
                    new_lines.append(f"      hu: {desc_hu},
")
                    new_lines.append(f"      ro: {desc_ro},
")
                    new_lines.append(f"      en: {desc_en}
")
                    new_lines.append("    },
")

                    facts_de = json.dumps(item.get("factsAdvancedDe", item.get("factsAdvanced")), ensure_ascii=False)
                    facts_hu = json.dumps(item.get("factsAdvancedHu", item.get("factsAdvanced")), ensure_ascii=False)
                    facts_ro = json.dumps(item.get("factsAdvancedRo", item.get("factsAdvanced")), ensure_ascii=False)
                    facts_en = json.dumps(item.get("factsAdvancedEn", item.get("factsAdvanced")), ensure_ascii=False)

                    new_lines.append("    factsAdvanced: {
")
                    new_lines.append(f"      de: {facts_de},
")
                    new_lines.append(f"      hu: {facts_hu},
")
                    new_lines.append(f"      ro: {facts_ro},
")
                    new_lines.append(f"      en: {facts_en}
")
                    new_lines.append("    }
")


        with open(file_path, 'w', encoding='utf-8') as f:
            f.writelines(new_lines)
        print(f"Finished processing {file_path}")

if __name__ == "__main__":
    main()
