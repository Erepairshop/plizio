
import sys
import json
from pathlib import Path

def batch_replace(file_path: Path, replacements: list):
    content = file_path.read_text(encoding="utf-8")
    
    for old, new in replacements:
        content = content.replace(old, new)
        
    file_path.write_text(content, encoding="utf-8")

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python batch_replace.py <replacements_json_file>")
        sys.exit(1)
        
    replacements_file = Path(sys.argv[1])
    if not replacements_file.exists():
        print(f"Replacements file not found: {replacements_file}")
        sys.exit(1)
        
    with open(replacements_file, 'r', encoding='utf-8') as f:
        data = json.load(f)
        
    file_to_process = Path(data["file_path"])
    if not file_to_process.exists():
        print(f"File to process not found: {file_to_process}")
        sys.exit(1)
        
    batch_replace(file_to_process, data["replacements"])
    
    print(f"Finished processing {file_to_process.name}")
