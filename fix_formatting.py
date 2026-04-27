import re
import os

files = [
    'lib/visualLab/data/dominicanrepublicPoi.ts',
    'lib/visualLab/data/haitiPoi.ts',
    'lib/visualLab/data/jamaicaPoi.ts',
    'lib/visualLab/data/bahamasPoi.ts',
    'lib/visualLab/data/trinidadPoi.ts'
]

for file_path in files:
    if not os.path.exists(file_path):
        continue
        
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Fix double commas
    content = content.replace(',,', ',')
    
    # Fix missing comma after faq block
    # Match faq: { ... } followed by a key without a comma
    content = re.sub(r'(faq:\s*\{.*?\})\s*(\w+:)', r'\1,\n    \2', content, flags=re.DOTALL)
    
    # Fix indentation for historyYear etc. if they were shifted
    # (Optional, but let's try to keep it clean)
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"Fixed formatting in {file_path}")
