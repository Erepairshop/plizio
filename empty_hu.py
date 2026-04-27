import re

def empty_hu_fields(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Empty descriptionAdvanced.hu
    content = re.sub(r'(descriptionAdvanced:\s*{[^}]*?hu:\s*)"[^"]*"', r'\1""', content, flags=re.DOTALL)
    
    # Empty factsAdvanced.hu
    content = re.sub(r'(factsAdvanced:\s*{[^}]*?hu:\s*)\[[^\]]*\]', r'\1[]', content, flags=re.DOTALL)

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

empty_hu_fields('lib/visualLab/data/poiExtraHu2.ts')
empty_hu_fields('lib/visualLab/data/poiExtraHu3.ts')
print("Emptied all hu fields in Hu2 and Hu3.")
