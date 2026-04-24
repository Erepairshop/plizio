import json

def merge_json():
    files = ['k5.json', 'k6.json', 'k7.json', 'k8.json']
    final_data = {}
    
    for file in files:
        with open(file, 'r', encoding='utf-8') as f:
            data = json.load(f)
            final_data.update(data)
            
    with open('gesch_hu_new.json', 'w', encoding='utf-8') as f:
        json.dump(final_data, f, ensure_ascii=False, indent=2)

if __name__ == "__main__":
    merge_json()
