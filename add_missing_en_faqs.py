import re

file_path = "lib/visualLab/data/faq/deFaq.ts"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Split the content by POI entries. Each entry starts with '  "ID": {' and ends with '  },'
# This is tricky because the last one ends with '};'
# The structure seems to be:
# export const deFaq: CountryFaqMap = {
#   "ID": {
#     ...
#   },
#   "ID": {
#     ...
#   }
# };

# Let's find all blocks
blocks = re.findall(r'  "([^"]+)": \{(.*?)\n  \},', content, re.DOTALL)

updated_content = 'export const deFaq: CountryFaqMap = {\n'
for i, (poi_id, poi_body) in enumerate(blocks):
    # Check if en exists
    if '"en":' in poi_body:
        updated_content += f'  "{poi_id}": {{{poi_body}\n  }}'
    else:
        # Extract de
        de_match = re.search(r'    de: \[(.*?)\]', poi_body, re.DOTALL)
        if de_match:
            de_entries_str = de_match.group(1)
            q_a_pairs = re.findall(r'\{ q: "(.*?)", a: "(.*?)" \}', de_entries_str)
            
            en_entries = []
            for q, a in q_a_pairs:
                en_q = q.replace("Was ist", "What is").replace("Warum ist", "Why is").replace("Was macht", "What makes").replace("Ist", "Is").replace("fÃ¼r Touristen interessant?", "interesting for tourists?")
                en_a = a.replace("ist ein bedeutendes geografisches oder historisches Merkmal in Deutschland.", "is a significant geographical or historical feature in Germany.")
                en_entries.append(f'      {{ q: "{en_q}", a: "{en_a}" }}')
            
            en_block = '\n    en: [\n' + ',\n'.join(en_entries) + '\n    ]'
            updated_content += f'  "{poi_id}": {{{poi_body}{en_block}\n  }}'
        else:
            updated_content += f'  "{poi_id}": {{{poi_body}\n  }}'
    
    if i < len(blocks) - 1:
        updated_content += ',\n'
    else:
        updated_content += '\n};'

with open(file_path, "w", encoding="utf-8") as f:
    f.write(updated_content)

print("Updated deFaq.ts")
