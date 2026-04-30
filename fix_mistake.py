
import os
import re

files = [
    'lib/visualLab/data/poiExtraPortugalNature.ts',
    'lib/visualLab/data/poiExtraPortugalIndustry.ts'
]

def fix_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # We want to find ro: "..." and hu: "..." inside descriptionAdvanced and factsAdvanced and clear them if they were added.
    # But wait, it's easier to just match the whole blocks.
    
    def clear_ro_hu(match):
        block_type = match.group(1) # descriptionAdvanced or factsAdvanced
        block_content = match.group(2)
        
        # Clear hu: "..." or hu: [...]
        block_content = re.sub(r'hu:\s*"[^"]*"', 'hu: ""', block_content)
        block_content = re.sub(r'hu:\s*\[[^\]]*\]', 'hu: []', block_content)
        
        # Clear ro: "..." or ro: [...]
        block_content = re.sub(r'ro:\s*"[^"]*"', 'ro: ""', block_content)
        block_content = re.sub(r'ro:\s*\[[^\]]*\]', 'ro: []', block_content)
        
        return f'{block_type}: {{{block_content}}}'

    # Match descriptionAdvanced: { ... }
    content = re.sub(r'(descriptionAdvanced):\s*\{([^\}]+)\}', clear_ro_hu, content, flags=re.DOTALL)
    # Match factsAdvanced: { ... }
    content = re.sub(r'(factsAdvanced):\s*\{([^\}]+)\}', clear_ro_hu, content, flags=re.DOTALL)
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

# Before running my fix, I need to RESTORE the name, description, and facts fields.
# Since I don't want to use git, I'll have to rely on the generalist or re-read and patch.
# Actually, I'll just ask the generalist to fix its mistake.
