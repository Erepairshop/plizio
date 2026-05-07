import re

file_path = 'lib/visualLab/data/switzerlandPoi.ts'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

def merge_split_strings(match):
    prefix = match.group(1)
    array_content = match.group(2)
    suffix = match.group(3)
    
    # Find all strings in the array
    strings = re.findall(r'"([^"]*)"', array_content)
    if not strings:
        return match.group(0)
    
    merged = []
    for s in strings:
        if not s: continue
        # If the string starts with a lowercase letter, a digit, or a comma/space/punctuation, merge it with previous
        if merged and (s[0].islower() or s[0].isdigit() or s.startswith(',') or s.startswith(' ') or s.startswith('and') or s.startswith('or')):
            # If it's a 3-digit sequence following a comma, merge it as a number
            if s.isdigit() and len(s) == 3:
                merged[-1] += "," + s
            else:
                merged[-1] += ", " + s.strip()
        else:
            merged.append(s)
    
    # Clean up any double spaces or " , " issues
    merged = [re.sub(r'\s+,\s*', ', ', s).strip() for s in merged]
    merged = [re.sub(r',\s+,', ',', s) for s in merged]
    
    new_array_content = '",\n        "'.join(merged)
    return f'{prefix}[\n        "{new_array_content}"\n      ]{suffix}'

# Target factsAdvanced en and ro arrays
content = re.sub(r'((?:en|ro):\s*)\[(.*?)\](\s*})', merge_split_strings, content, flags=re.DOTALL)

# Fix some common artifacts
content = re.sub(r',\s+000', ',000', content)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)
