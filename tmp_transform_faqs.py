import json
import os

def transform_json(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    new_data = {}
    for poi_id, faqs in data.items():
        transformed = {
            "de": [],
            "hu": [],
            "ro": [],
            "en": []
        }
        for item in faqs:
            transformed["de"].append({"q": item["question"]["de"], "a": item["answer"]["de"]})
            transformed["hu"].append({"q": item["question"]["hu"], "a": item["answer"]["hu"]})
            transformed["ro"].append({"q": item["question"]["ro"], "a": item["answer"]["ro"]})
            transformed["en"].append({"q": item["question"]["en"], "a": item["answer"]["en"]})
        new_data[poi_id] = transformed
        
    with open(file_path, 'w', encoding='utf-8') as f:
        json.dump(new_data, f, indent=4, ensure_ascii=False)

if __name__ == "__main__":
    json_files = [
        r'C:\Users\User\plizio-repo\tmp_faqs_hessen.json',
        r'C:\Users\User\plizio-repo\tmp_faqs_niedersachsen.json',
        r'C:\Users\User\plizio-repo\tmp_faqs_sachsen.json',
        r'C:\Users\User\plizio-repo\tmp_faqs_rp.json'
    ]
    for jf in json_files:
        transform_json(jf)
    print("Transformed all JSON files")
