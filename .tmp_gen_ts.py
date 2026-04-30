import json

with open('.tmp_paraguay_out.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

pois = data["pois"]

out = []
out.append('import type { POI } from "./poi";')
out.append('')
out.append('export const poiExtraParaguayEconomicV2: POI[] = [')

for i, poi in enumerate(pois):
    out.append('  {')
    out.append(f'    id: "{poi["id"]}",')
    out.append(f'    type: "{poi["type"]}",')
    out.append(f'    parent: "{poi["parent"]}",')
    out.append(f'    coords: [{poi["coords"][0]}, {poi["coords"][1]}],')
    
    # name
    name = poi["name"]
    out.append('    name: {')
    out.append(f'      de: "{name["de"]}",')
    out.append(f'      hu: "{name["hu"]}",')
    out.append(f'      ro: "{name["ro"]}",')
    out.append(f'      en: "{name["en"]}"')
    out.append('    },')
    
    # description
    desc = poi["description"]
    out.append('    description: {')
    out.append(f'      de: "{desc["de"]}",')
    out.append(f'      hu: "{desc["hu"]}",')
    out.append(f'      ro: "{desc["ro"]}",')
    out.append(f'      en: "{desc["en"]}"')
    out.append('    },')
    
    # facts
    facts = poi["facts"]
    out.append('    facts: {')
    de_facts = ", ".join([f'"{f}"' for f in facts["de"]])
    hu_facts = ", ".join([f'"{f}"' for f in facts["hu"]])
    ro_facts = ", ".join([f'"{f}"' for f in facts["ro"]])
    en_facts = ", ".join([f'"{f}"' for f in facts["en"]])
    
    out.append(f'      de: [{de_facts}],')
    out.append(f'      hu: [{hu_facts}],')
    out.append(f'      ro: [{ro_facts}],')
    out.append(f'      en: [{en_facts}]')
    out.append('    }')
    
    if i < len(pois) - 1:
        out.append('  },')
    else:
        out.append('  }')

out.append('];')
out.append('')

with open('.tmp_paraguay_ts.txt', 'w', encoding='utf-8') as f:
    f.write('\n'.join(out))
