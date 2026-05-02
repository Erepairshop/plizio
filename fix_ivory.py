import re

def fix_ivory(path):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Replace `  }\n  },\n  {` with `  },\n  {`
    content = content.replace('  }\n  },\n  {', '  },\n  {')
    
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

fix_ivory("lib/visualLab/data/poiExtraIvorycoastNatureV2.ts")
