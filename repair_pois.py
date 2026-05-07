import os
import re

files = [
    "lib/visualLab/data/poiExtraSenegalEconomicV2.ts",
    "lib/visualLab/data/poiExtraSenegalHistoryV2.ts",
    "lib/visualLab/data/poiExtraSenegalLandmarksV2.ts",
    "lib/visualLab/data/poiExtraSenegalLifeV2.ts",
    "lib/visualLab/data/poiExtraSenegalNatureV2.ts",
    "lib/visualLab/data/poiExtraSenegalReliefV2.ts"
]

def repair_file(file_path):
    if not os.path.exists(file_path):
        return
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 1. Fix the "},," and "}  facts:" issue
    # The script inserted blocks and broke the closing of the previous block.
    # Looking at the pattern:
    # },,
    # descriptionAdvanced: { ... },
    # factsAdvanced: { ... }
    # } facts: { ... }
    
    # Actually, the most reliable way is to find the duplicated fields within the same POI block.
    
    # First, fix the "},," and extra commas
    content = content.replace("},,", "},")
    
    # Fix the broken concatenation where it closed the object and then added fields
    # Example: }    descriptionAdvanced: {
    content = re.sub(r'\}\s*descriptionAdvanced:', r',\n    descriptionAdvanced:', content)
    content = re.sub(r'\}\s*factsAdvanced:', r',\n    factsAdvanced:', content)
    
    # Fix duplicated descriptionAdvanced/factsAdvanced blocks by keeping the one that has Romanian content
    # or just merging them if they are adjacent.
    
    # This is complex with regex. Let's try to find POI blocks and clean them.
    
    poi_blocks = re.split(r'(?=\{\s*id:)', content)
    new_content = poi_blocks[0] # Header
    
    for block in poi_blocks[1:]:
        # If it's the last part after the last POI, it might contain ];
        # Split it if needed
        footer = ""
        if "];" in block:
            parts = block.split("];")
            block = parts[0]
            footer = "];" + "];".join(parts[1:])
        
        # In each block, look for duplicated fields
        for field in ["descriptionAdvanced", "factsAdvanced"]:
            occurrences = list(re.finditer(field + r'\s*:\s*\{', block))
            if len(occurrences) > 1:
                # Keep the one with 'ro:' content that is not empty
                best_match = None
                for match in occurrences:
                    # Extract the whole field block
                    # This is tricky without a parser, but we can try to match braces
                    start = match.start()
                    # Find matching closing brace
                    depth = 0
                    end = -1
                    for i in range(start + len(field) + 1, len(block)):
                        if block[i] == '{': depth += 1
                        elif block[i] == '}':
                            if depth == 0:
                                end = i + 1
                                break
                            else: depth -= 1
                    
                    if end != -1:
                        field_content = block[start:end]
                        if 'ro: "' in field_content and 'ro: ""' not in field_content:
                            best_match = field_content
                        elif 'ro: [' in field_content and 'ro: []' not in field_content:
                            best_match = field_content
                
                if best_match:
                    # Remove all occurrences and insert the best one at the end of the object
                    # First, remove all
                    for match in reversed(occurrences):
                        start = match.start()
                        depth = 0
                        end = -1
                        for i in range(start + len(field) + 1, len(block)):
                            if block[i] == '{': depth += 1
                            elif block[i] == '}':
                                if depth == 0:
                                    end = i + 1
                                    break
                                else: depth -= 1
                        if end != -1:
                            # Remove the block and any preceding/trailing comma
                            block = block[:start].rstrip().rstrip(',') + block[end:].lstrip().lstrip(',')
                    
                    # Insert the best one before the last closing brace of the POI
                    block = block.rstrip()
                    last_brace_idx = block.rfind('}')
                    if last_brace_idx != -1:
                        block = block[:last_brace_idx].rstrip().rstrip(',') + ",\n    " + best_match + "\n  " + block[last_brace_idx:]
        
        # Final cleanup for this block
        block = block.replace(",,", ",")
        new_content += block + footer

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f"Repaired {file_path}")

for f in files:
    repair_file(f)
