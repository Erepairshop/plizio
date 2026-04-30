
import json

def to_ts(pois, var_name):
    lines = [
        'import type { POI } from "./poi";',
        '',
        f'export const {var_name}: POI[] = ['
    ]
    
    for i, poi in enumerate(pois):
        lines.append('  {')
        lines.append(f'    id: "{poi["id"]}",')
        lines.append(f'    type: "{poi["type"]}",')
        lines.append(f'    parent: "{poi["parent"]}",')
        lines.append(f'    coords: [{poi["coords"][0]}, {poi["coords"][1]}],')
        
        for key in ['name', 'description', 'facts', 'descriptionAdvanced', 'factsAdvanced']:
            lines.append(f'    {key}: {{')
            for lang in ['de', 'hu', 'ro', 'en']:
                val = poi[key][lang]
                if isinstance(val, list):
                    # Format list as ["...", "..."]
                    arr_str = ', '.join([f'"{v}"' for v in val])
                    lines.append(f'      {lang}: [{arr_str}]{"," if lang != "en" else ""}')
                else:
                    # Format string
                    lines.append(f'      {lang}: "{val}"{"," if lang != "en" else ""}')
            lines.append(f'    }}{"," if key != "factsAdvanced" else ""}')
            
        lines.append(f'  }}{"," if i < len(pois) - 1 else ""}')
        
    lines.append('];')
    return '\n'.join(lines) + '\n'

# Economic
econ_pois = json.load(open('/mnt/c/Users/User/plizio-repo/economic_clean.json'))
with open('/mnt/c/Users/User/plizio-repo/lib/visualLab/data/poiExtraBelizeEconomicV2.ts', 'w') as f:
    f.write(to_ts(econ_pois, "poiExtraBelizeEconomicV2"))

# Nature
nat_pois = json.load(open('/mnt/c/Users/User/plizio-repo/nature_clean.json'))
with open('/mnt/c/Users/User/plizio-repo/lib/visualLab/data/poiExtraBelizeNatureV2.ts', 'w') as f:
    f.write(to_ts(nat_pois, "poiExtraBelizeNatureV2"))

# Relief
rel_pois = json.load(open('/mnt/c/Users/User/plizio-repo/relief_clean.json'))
with open('/mnt/c/Users/User/plizio-repo/lib/visualLab/data/poiExtraBelizeReliefV2.ts', 'w') as f:
    f.write(to_ts(rel_pois, "poiExtraBelizeReliefV2"))
