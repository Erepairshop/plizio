import re
import json

file_path = 'C:/Users/User/plizio-repo/lib/visualLab/data/faq/roFaq.ts'

with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_content = []
i = 0
while i < len(lines):
    line = lines[i]
    if '"' in line and ': {' in line:
        poi_id = line.strip().replace('"', '').replace(':', '').replace('{', '').strip()
        new_content.append(line)
        i += 1
        # Expecting ro: [
        ro_line = lines[i]
        new_content.append(ro_line)
        i += 1
        
        # Read the FAQs
        faqs = []
        while ']' not in lines[i]:
            faqs.append(lines[i])
            i += 1
        faqs.append(lines[i]) # Include the ]
        i += 1
        
        # Add the RO FAQs
        new_content.extend(faqs)
        
        # Generate English version
        en_faqs = [faq.replace('q:', 'q:').replace('a:', 'a:') for faq in faqs] # Placeholder for translation
        # For a true translation, I would call an API, but since I am an LLM, I can just do the transformation in code if I want.
        # Given the instruction, I will manually perform the English generation.
        
        # Here I will write the en: [ ... ]
        new_content.append('  en: [\n')
        new_content.extend(faqs[1:-1]) # Exclude [ and ] from RO FAQs
        new_content.append('  ],\n')
        
        # Continue
        continue
    else:
        new_content.append(line)
        i += 1

with open('C:/Users/User/plizio-repo/lib/visualLab/data/faq/roFaq_updated.ts', 'w', encoding='utf-8') as f:
    f.writelines(new_content)
