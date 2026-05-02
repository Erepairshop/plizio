import json
import re
import os

# Load all JSON data
data = {}
for i in range(1, 4):
    with open(f'seo_data_{i}.json', 'r', encoding='utf-8') as f:
        data.update(json.load(f))

file_path = '/mnt/c/Users/User/plizio-repo/lib/visualLab/data/belarusPoi.ts'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Helper to inject or update descriptionAdvanced and factsAdvanced
def update_poi(match):
    poi_text = match.group(0)
    id_match = re.search(r'id:\s*["\']([^"\']+)["\']', poi_text)
    if not id_match:
        return poi_text
    
    poi_id = id_match.group(1)
    if poi_id not in data:
        return poi_text
    
    seo_data = data[poi_id]
    da_hu = seo_data['descriptionAdvanced']
    fa_hu = json.dumps(seo_data['factsAdvanced'], ensure_ascii=False)
    
    # Check if descriptionAdvanced exists
    da_match = re.search(r'(descriptionAdvanced:\s*\{)(.*?)(\})', poi_text, flags=re.DOTALL)
    if da_match:
        da_content = da_match.group(2)
        # Check if hu is empty
        hu_match = re.search(r'hu:\s*["\'](.*?)["\']', da_content, flags=re.DOTALL)
        if not hu_match or hu_match.group(1).strip() == "":
            # Replace empty hu
            new_da_content = re.sub(r'hu:\s*["\'][\s\S]*?["\']', f'hu: {json.dumps(da_hu, ensure_ascii=False)}', da_content)
            if new_da_content == da_content and "hu:" not in da_content:
                # Add hu: if missing entirely
                new_da_content = da_content.rstrip() + f',\n    hu: {json.dumps(da_hu, ensure_ascii=False)}\n  '
            poi_text = poi_text[:da_match.start(2)] + new_da_content + poi_text[da_match.end(2):]
    else:
        # Inject descriptionAdvanced before 'description:' or 'facts:' if possible, else before '}'
        da_str = f'''descriptionAdvanced: {{
    de: "",
    hu: {json.dumps(da_hu, ensure_ascii=False)},
    ro: "",
    en: ""
  }},
  '''
        if 'description:' in poi_text:
            poi_text = poi_text.replace('description:', da_str + 'description:', 1)
        elif 'facts:' in poi_text:
            poi_text = poi_text.replace('facts:', da_str + 'facts:', 1)
        else:
            poi_text = re.sub(r'\}\s*$', da_str + '}', poi_text)

    # Re-evaluate poi_text for factsAdvanced
    fa_match = re.search(r'(factsAdvanced:\s*\{)(.*?)(\})', poi_text, flags=re.DOTALL)
    if fa_match:
        fa_content = fa_match.group(2)
        # Check if hu is empty array
        hu_match = re.search(r'hu:\s*\[(.*?)\]', fa_content, flags=re.DOTALL)
        if not hu_match or hu_match.group(1).strip() == "":
            # Replace empty hu array
            # fa_hu is already a JSON array string like '["a", "b"]'
            fa_hu_formatted = fa_hu.replace('[', '[\n      ').replace('", "', '",\n      "').replace(']', '\n    ]')
            new_fa_content = re.sub(r'hu:\s*\[[\s\S]*?\]', f'hu: {fa_hu_formatted}', fa_content)
            if new_fa_content == fa_content and "hu:" not in fa_content:
                new_fa_content = fa_content.rstrip() + f',\n    hu: {fa_hu_formatted}\n  '
            poi_text = poi_text[:fa_match.start(2)] + new_fa_content + poi_text[fa_match.end(2):]
    else:
        fa_hu_formatted = fa_hu.replace('[', '[\n      ').replace('", "', '",\n      "').replace(']', '\n    ]')
        fa_str = f'''factsAdvanced: {{
    de: [],
    hu: {fa_hu_formatted},
    ro: [],
    en: []
  }},
  '''
        if 'description:' in poi_text:
            poi_text = poi_text.replace('description:', fa_str + 'description:', 1)
        elif 'facts:' in poi_text:
            poi_text = poi_text.replace('facts:', fa_str + 'facts:', 1)
        else:
            poi_text = re.sub(r'\}\s*$', fa_str + '}', poi_text)

    return poi_text

# Regex to find POI blocks: starts with { and contains id: "...", ends with }
# Since TS objects can have nested braces, doing this strictly with regex is hard.
# We'll split the content by 'id: "' and process each chunk.

parts = re.split(r'(id:\s*["\'])', content)
new_content = parts[0]

updated_count = 0
for i in range(1, len(parts), 2):
    prefix = parts[i]
    chunk = parts[i+1]
    
    id_match = re.match(r'([^"\']+)["\']', chunk)
    if id_match:
        poi_id = id_match.group(1)
        if poi_id in data:
            # We need to find the end of this POI. It's safe to assume the POI ends before the next 'id: "' or at the end of the array.
            # But chunk is just the text until the NEXT id: ". 
            # So the POI body is basically within this chunk.
            # Actually, `chunk` contains the rest of the POI and possibly some array separators.
            # Let's just process the chunk directly.
            
            seo_data = data[poi_id]
            da_hu = seo_data['descriptionAdvanced']
            fa_hu = json.dumps(seo_data['factsAdvanced'], ensure_ascii=False)
            
            # descriptionAdvanced update
            da_match = re.search(r'(descriptionAdvanced:\s*\{)(.*?)(\})', chunk, flags=re.DOTALL)
            if da_match:
                da_content = da_match.group(2)
                hu_match = re.search(r'hu:\s*["\'](.*?)["\']', da_content, flags=re.DOTALL)
                if not hu_match or hu_match.group(1).strip() == "":
                    new_da_content = re.sub(r'hu:\s*["\'][\s\S]*?["\']', f'hu: {json.dumps(da_hu, ensure_ascii=False)}', da_content)
                    chunk = chunk[:da_match.start(2)] + new_da_content + chunk[da_match.end(2):]
                    updated_count += 1
            else:
                da_str = f'''descriptionAdvanced: {{
    de: "",
    hu: {json.dumps(da_hu, ensure_ascii=False)},
    ro: "",
    en: ""
  }},
  '''
                if 'description:' in chunk:
                    chunk = chunk.replace('description:', da_str + 'description:', 1)
                    updated_count += 1
            
            # factsAdvanced update
            fa_match = re.search(r'(factsAdvanced:\s*\{)(.*?)(\}\s*,)', chunk, flags=re.DOTALL)
            if not fa_match:
                fa_match = re.search(r'(factsAdvanced:\s*\{)(.*?)(\})', chunk, flags=re.DOTALL)
                
            if fa_match:
                fa_content = fa_match.group(2)
                hu_match = re.search(r'hu:\s*\[(.*?)\]', fa_content, flags=re.DOTALL)
                if not hu_match or hu_match.group(1).strip() == "":
                    fa_hu_formatted = fa_hu.replace('[', '[\n      ').replace('", "', '",\n      "').replace(']', '\n    ]')
                    new_fa_content = re.sub(r'hu:\s*\[[\s\S]*?\]', f'hu: {fa_hu_formatted}', fa_content)
                    chunk = chunk[:fa_match.start(2)] + new_fa_content + chunk[fa_match.end(2):]
            else:
                fa_hu_formatted = fa_hu.replace('[', '[\n      ').replace('", "', '",\n      "').replace(']', '\n    ]')
                fa_str = f'''factsAdvanced: {{
    de: [],
    hu: {fa_hu_formatted},
    ro: [],
    en: []
  }},
  '''
                if 'description:' in chunk:
                    chunk = chunk.replace('description:', fa_str + 'description:', 1)
            
    new_content += prefix + chunk

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print(f"Update script completed. Processed chunks for {updated_count} POIs.")
