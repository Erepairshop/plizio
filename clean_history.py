import re
import os

file_path = 'lib/visualLab/data/poiExtraIndiaHistoryV2.ts'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Pattern to find de: "..." inside descriptionAdvanced
# We want to keep only the part before the first "Geschichte K..." or similar if there is a duplicate.
# However, a simpler way is to look for the stray " that I saw.

def clean_de(match):
    text = match.group(1)
    # If text contains " in the middle, it might be the corruption point
    # Example: ... unter Akbar."Stadt des Sieges', ...
    if '."Stadt' in text:
        text = text.split('."Stadt')[0] + '."'
    elif '."Angel' in text:
        text = text.split('."Angel')[0] + '."'
    
    # Also remove duplicates of "Geschichte K8"
    parts = text.split('Geschichte K')
    if len(parts) > 2:
        text = parts[0] + 'Geschichte K' + parts[1]
    
    return f'de: "{text}"'

# This is a bit risky with regex. 
# Better: just replace the known corrupted strings.

corruptions = [
    'Geschichte K7 — Die Glanzzeit des Mogulreiches unter Akbar."Stadt des Sieges\'',
    'Geschichte K8 — Die britische Raj-Ära und koloniale Monumentalarchitektur."Angel of Victory\''
]

for c in corruptions:
    if c in content:
        print(f"Found corruption: {c[:50]}...")
        # Replace with just the first part
        fixed = c.split('."')[0] + '."'
        content = content.replace(c, fixed)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)
print("Cleaned file.")
