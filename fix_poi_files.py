
import re

files = [
    r"C:\Users\User\plizio-repo\lib\visualLab\data\poiExtraCostaricaEconomicV2.ts",
    r"C:\Users\User\plizio-repo\lib\visualLab\data\poiExtraCostaricaHistoryV2.ts",
    r"C:\Users\User\plizio-repo\lib\visualLab\data\poiExtraCostaricaLandmarksV2.ts",
    r"C:\Users\User\plizio-repo\lib\visualLab\data\poiExtraCostaricaLifeV2.ts"
]

def fix_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 1. Fix missing closing brace in name block if it looks like:
    # en: "..."
    # ,
    # to:
    # en: "..."
    # },
    # (only if it's followed by descriptionAdvanced or similar)
    content = re.sub(r'(en: "[^"]+")\s*,\s*(descriptionAdvanced:|factsAdvanced:)', r'\1\n    },\n    \2', content)

    # 2. Fix the premature closing brace followed by description:
    # factsAdvanced: { ... }
    # }
    # },
    # description: {
    # to:
    # factsAdvanced: { ... },
    # description: {
    
    # We look for:
    #    }
    #  },
    #    description: {
    
    # Pattern to match the premature closing of the POI object
    # It usually happens after factsAdvanced or descriptionAdvanced
    content = re.sub(r'(\s+)\}\s*\}\s*,\s*description: \{', r'\1}, \n    description: {', content)
    
    # Or more generally:
    # Find a '  },' that is immediately followed by '    description: {' or '    facts: {'
    # and remove it, while making sure the previous block ended with a comma if needed.
    
    # Let's try a more surgical approach for the History file first as it's the most broken.
    
    # If we see:
    #    }
    #  },
    #    description: {
    # change to:
    #    },
    #    description: {
    
    content = re.sub(r'(\n\s+)\}\s*\n\s+\},\n\s+description: \{', r'\1},\n    description: {', content)
    
    # Also handle 'facts: {' if it's orphaned (though usually it follows description)
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Processed {file_path}")

for f in files:
    fix_file(f)
