import os
import re

files = [
    "lib/visualLab/data/poiExtraAngolaCitiesV2.ts",
    "lib/visualLab/data/poiExtraAngolaEconomicV2.ts",
    "lib/visualLab/data/poiExtraAngolaHistoryV2.ts",
    "lib/visualLab/data/poiExtraAngolaLandmarksV2.ts",
    "lib/visualLab/data/poiExtraAngolaLifeV2.ts",
    "lib/visualLab/data/poiExtraAngolaNatureV2.ts",
    "lib/visualLab/data/poiExtraAngolaReliefV2.ts"
]

for file_path in files:
    if not os.path.exists(file_path):
        continue
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Fix the corrupted lines: "}descriptionAdvanced", "}  de:", etc.
    # It seems it inserted "}   " or similar at the start of many lines.
    # Let's use regex to find "}descriptionAdvanced" and then remove all "} " from subsequent lines until the next real object or end of block.
    
    # Actually, a simpler way: replace "}descriptionAdvanced" with "descriptionAdvanced"
    # and "}  de:" with "  de:", etc.
    
    new_content = content.replace("    }descriptionAdvanced", "    descriptionAdvanced")
    new_content = new_content.replace("    }  de:", "      de:")
    new_content = new_content.replace("    }  hu:", "      hu:")
    new_content = new_content.replace("    }  ro:", "      ro:")
    new_content = new_content.replace("    }  en:", "      en:")
    new_content = new_content.replace("    }factsAdvanced", "    factsAdvanced")
    new_content = new_content.replace("    }  de: []", "      de: []")
    new_content = new_content.replace("    }  hu: [", "      hu: [")
    new_content = new_content.replace("    }  ro: []", "      ro: []")
    new_content = new_content.replace("    }  en: []", "      en: []")
    new_content = new_content.replace("    }  en: \"\"", "      en: \"\"")
    new_content = new_content.replace("    }\n    factsAdvanced", "    },\n    factsAdvanced")
    
    # Also need to fix the case where } is at the end of the line
    # Wait, look at the grep output:
    # }descriptionAdvanced: {
    # }  de: "",
    
    # Regex approach for better coverage
    new_content = re.sub(r'^\s*\}descriptionAdvanced', '    descriptionAdvanced', new_content, flags=re.MULTILINE)
    new_content = re.sub(r'^\s*\}  (de|hu|ro|en):', r'      \1:', new_content, flags=re.MULTILINE)
    new_content = re.sub(r'^\s*\}factsAdvanced', '    factsAdvanced', new_content, flags=re.MULTILINE)
    new_content = re.sub(r'^\s*\}\s+(de|hu|ro|en):', r'      \1:', new_content, flags=re.MULTILINE)
    
    # Fix missing comma before descriptionAdvanced
    # Usually it's after facts: { ... }
    # Let's find "}\n    descriptionAdvanced" and replace with "},\n    descriptionAdvanced"
    new_content = re.sub(r'\}\n\s+descriptionAdvanced', '},\n    descriptionAdvanced', new_content)
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f"Fixed {file_path}")
