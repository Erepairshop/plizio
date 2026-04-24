import json
import os

try:
    with open('ai_k5_content.json', 'r', encoding='utf-8') as f1:
        data1 = json.load(f1)
    
    with open('ai_k5_content_part2.json', 'r', encoding='utf-8') as f2:
        data2 = json.load(f2)
    
    # Merge data
    data1.update(data2)
    
    target_path = 'C:/Users/User/tmp/ai_k5_content.json'
    target_dir = os.path.dirname(target_path)
    
    if not os.path.exists(target_dir):
        os.makedirs(target_dir, exist_ok=True)
        
    with open(target_path, 'w', encoding='utf-8') as f:
        json.dump(data1, f, ensure_ascii=False, indent=2)
    print(f"Successfully merged and saved to {target_path}")

except Exception as e:
    print(f"Error: {e}")
    # Fallback to local workspace if tmp is not accessible
    try:
        with open('ai_k5_content_full.json', 'w', encoding='utf-8') as f:
            json.dump(data1, f, ensure_ascii=False, indent=2)
        print("Saved to ai_k5_content_full.json in local workspace instead.")
    except Exception as e2:
        print(f"Fatal Error: {e2}")
