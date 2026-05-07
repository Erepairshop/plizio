import json
import sys

def append_items():
    try:
        new_items = json.load(sys.stdin)
        with open('seo_angola_de.json', 'r', encoding='utf-8') as f:
            data = json.load(f)

        data['items'].extend(new_items)

        with open('seo_angola_de.json', 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
        print("Successfully appended items.")
    except Exception as e:
        print(f"Error: {e}")
        sys.exit(1)

if __name__ == "__main__":
    append_items()
