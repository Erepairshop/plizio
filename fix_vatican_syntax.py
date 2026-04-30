import re
import os

def fix_syntax(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Fix missing } after name object
    # Pattern: name: { ... (no closing brace) \n descriptionAdvanced:
    content = re.sub(
        r'(name:\s*\{[^{}]*)(?!\})\s*,\s*\n\s*descriptionAdvanced:',
        r'\1 },\n  descriptionAdvanced:',
        content
    )

    # 2. Fix double commas
    content = content.replace('},,', '},')

    # 3. Fix duplicate descriptionAdvanced/factsAdvanced
    # We want to keep the one that has the longest 'de' content, or just the first one.
    # Actually, let's just keep the last one inserted if duplicates exist in a block.
    
    # First, let's normalize the whitespace around fields
    content = re.sub(r',\s*descriptionAdvanced:', ',\n    descriptionAdvanced:', content)
    content = re.sub(r',\s*factsAdvanced:', ',\n    factsAdvanced:', content)

    # Use a more robust way to handle POI blocks
    blocks = re.split(r'(\n\s*\{\s*\n\s*id:)', content)
    new_content = blocks[0]
    for i in range(1, len(blocks), 2):
        header = blocks[i]
        block = blocks[i+1]
        
        # Within this block, find all descriptionAdvanced
        desc_matches = list(re.finditer(r'descriptionAdvanced:\s*\{.*?\},', block, re.DOTALL))
        if len(desc_matches) > 1:
            # Keep the one with non-empty 'de' content
            best_match = desc_matches[0]
            for match in desc_matches:
                if 'de: ""' not in match.group(0) and 'de: \'\'' not in match.group(0):
                    best_match = match
            
            # Remove all and insert best at the end of the block (before closing })
            block_no_desc = block
            for match in reversed(desc_matches):
                block_no_desc = block_no_desc[:match.start()] + block_no_desc[match.end():]
            
            block = block_no_desc.rstrip().rstrip('}').rstrip().rstrip(',') + ',\n    ' + best_match.group(0).strip() + '\n  }'
        
        # Same for factsAdvanced
        facts_matches = list(re.finditer(r'factsAdvanced:\s*\{.*?\},', block, re.DOTALL))
        if len(facts_matches) > 1:
            best_match = facts_matches[0]
            for match in facts_matches:
                if 'de: []' not in match.group(0):
                    best_match = match
            
            block_no_facts = block
            for match in reversed(facts_matches):
                block_no_facts = block_no_facts[:match.start()] + block_no_facts[match.end():]
            
            block = block_no_facts.rstrip().rstrip('}').rstrip().rstrip(',') + ',\n    ' + best_match.group(0).strip() + '\n  }'
        
        new_content += header + block

    # Final cleanup of trailing commas and braces
    new_content = re.sub(r',\s*\}', '\n  }', new_content)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)

if __name__ == "__main__":
    ts_files = [
        'lib/visualLab/data/poiExtraVaticanCities.ts',
        'lib/visualLab/data/poiExtraVaticanHistory.ts',
        'lib/visualLab/data/poiExtraVaticanOther.ts'
    ]
    for ts_file in ts_files:
        if os.path.exists(ts_file):
            print(f"Fixing {ts_file}...")
            fix_syntax(ts_file)
