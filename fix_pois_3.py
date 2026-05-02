import re

def fix_missing_obj_closing(path):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    # The issue: `facts: { ... },\n  {` needs to be `facts: { ... }\n  },\n  {`
    # Also `facts: { ... }\n  {` needs to be `facts: { ... }\n  },\n  {`
    # Let's find cases where an object `{ id:` appears after `},` or `}` and ensure the previous POI object is closed.
    
    # Let's use regex:
    # If we see `    },\n  {\n    id:` -> that's correct (facts closed, object closed, next object)
    # If we see `    },\n    {\n      id:` -> that might be nested badly?
    # If we see `    },\n  {\n      id:` where `},` was closing `facts`, then the outer POI object is NOT closed!
    
    # Since we know `facts: { ... }` or `factsAdvanced: { ... }` are the last fields.
    # Let's just split by `  {\n    id: "`
    
    parts = content.split('  {\n    id: "')
    for i in range(1, len(parts)):
        prev = parts[i-1]
        # check how prev ends
        # it should end with `    }\n  },\n`
        # if it ends with `    },\n` it means it closed `facts` but not the POI.
        prev = prev.rstrip()
        if prev.endswith('},'):
            parts[i-1] = prev[:-1] + '\n  },\n'
        elif prev.endswith('}'):
            parts[i-1] = prev + '\n  },\n'
            
    content = '  {\n    id: "'.join(parts)
    
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

fix_missing_obj_closing("lib/visualLab/data/poiExtraParaguayEconomicV2.ts")
fix_missing_obj_closing("lib/visualLab/data/poiExtraIvorycoastNatureV2.ts")
