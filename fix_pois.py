import os
import re

files = [
"lib/visualLab/data/poiExtraBotswanaNatureV2.ts",
"lib/visualLab/data/poiExtraBotswanaReliefV2.ts",
"lib/visualLab/data/poiExtraBurkinafasoLifeV2.ts",
"lib/visualLab/data/poiExtraCameroonLifeV2.ts",
"lib/visualLab/data/poiExtraCameroonNatureV2.ts",
"lib/visualLab/data/poiExtraColombiaCitiesV2.ts",
"lib/visualLab/data/poiExtraColombiaEconomicV2.ts",
"lib/visualLab/data/poiExtraColombiaHistoryV2.ts",
"lib/visualLab/data/poiExtraColombiaLandmarksV2.ts",
"lib/visualLab/data/poiExtraColombiaLifeV2.ts",
"lib/visualLab/data/poiExtraColombiaNatureV2.ts",
"lib/visualLab/data/poiExtraColombiaReliefV2.ts",
"lib/visualLab/data/poiExtraDrcongoReliefV2.ts",
"lib/visualLab/data/poiExtraFrenchguianaHistoryV2.ts",
"lib/visualLab/data/poiExtraFrenchguianaLandmarksV2.ts",
"lib/visualLab/data/poiExtraFrenchguianaLifeV2.ts",
"lib/visualLab/data/poiExtraFrenchguianaNatureV2.ts",
"lib/visualLab/data/poiExtraFrenchguianaReliefV2.ts",
"lib/visualLab/data/poiExtraGuyanaHistoryV2.ts",
"lib/visualLab/data/poiExtraGuyanaLandmarksV2.ts",
"lib/visualLab/data/poiExtraGuyanaNatureV2.ts",
"lib/visualLab/data/poiExtraIvorycoastNatureV2.ts",
"lib/visualLab/data/poiExtraIvorycoastReliefV2.ts",
"lib/visualLab/data/poiExtraLibyaLifeV2.ts",
"lib/visualLab/data/poiExtraLibyaReliefV2.ts",
"lib/visualLab/data/poiExtraMoroccoCitiesV2.ts",
"lib/visualLab/data/poiExtraMoroccoLifeV2.ts",
"lib/visualLab/data/poiExtraMozambiqueNatureV2.ts",
"lib/visualLab/data/poiExtraNigeriaReliefV2.ts",
"lib/visualLab/data/poiExtraParaguayEconomicV2.ts",
"lib/visualLab/data/poiExtraParaguayLifeV2.ts",
"lib/visualLab/data/poiExtraRwandaNatureV2.ts",
"lib/visualLab/data/poiExtraSenegalLifeV2.ts",
"lib/visualLab/data/poiExtraSomaliaCitiesV2.ts",
"lib/visualLab/data/poiExtraSomaliaNatureV2.ts",
"lib/visualLab/data/poiExtraSouthafricaReliefV2.ts",
"lib/visualLab/data/poiExtraTanzaniaLifeV2.ts",
"lib/visualLab/data/poiExtraTanzaniaNatureV2.ts",
"lib/visualLab/data/poiExtraTanzaniaReliefV2.ts",
"lib/visualLab/data/poiExtraUgandaNatureV2.ts",
"lib/visualLab/data/poiExtraUruguayCitiesV2.ts",
"lib/visualLab/data/poiExtraUruguayEconomicV2.ts",
"lib/visualLab/data/poiExtraUruguayHistoryV2.ts",
"lib/visualLab/data/poiExtraUruguayLandmarksV2.ts",
"lib/visualLab/data/poiExtraUruguayLifeV2.ts",
"lib/visualLab/data/poiExtraUruguayNatureV2.ts",
"lib/visualLab/data/poiExtraUruguayReliefV2.ts",
"lib/visualLab/data/poiExtraZambiaNatureV2.ts",
"lib/visualLab/data/poiExtraZimbabweLifeV2.ts"
]

def fix_file(path):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Fix escaped newlines (replace literal \n with actual newlines)
    content = content.replace('\\n', '\n')
    
    # Remove tool markers
    content = re.sub(r'file_path:\s*".*?",?', '', content)
    content = re.sub(r'ergonomic_write_file=true,?', '', content)

    # The most common bug: `coords: [x, y]\n    },\n    name:` -> `coords: [x, y],\n    name:`
    # We replace any `},` that appears right before `name: {` or similar fields
    content = re.sub(r'coords:\s*(\[.*?\])\s*\},', r'coords: \1,', content)
    
    # Sometimes it's just `}\n name: {`
    content = re.sub(r'coords:\s*(\[.*?\])\s*\}\s*name:', r'coords: \1,\n    name:', content)
    
    # Missing comma between POI objects: `}\n  {` -> `},\n  {`
    content = re.sub(r'\}\s*\{\s*id:', r'},\n  {\n    id:', content)

    # Missing commas in facts arrays or description objects
    content = re.sub(r'"\s*de:', r'", de:', content)
    content = re.sub(r'"\s*hu:', r'", hu:', content)
    content = re.sub(r'"\s*ro:', r'", ro:', content)
    content = re.sub(r'"\s*en:', r'", en:', content)

    # Replace bad ends
    # We want exactly `];` at the end
    # Let's truncate everything after the last `];`
    last_idx = content.rfind('];')
    if last_idx != -1:
        content = content[:last_idx+2] + '\n'

    # And if the file doesn't end with `];` but has `]`, fix it
    if '];' not in content:
        # maybe it ends with }
        content = content.strip()
        if content.endswith('}'):
            content += '\n];\n'
        elif content.endswith(']'):
            content += ';\n'

    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

for f in files:
    try:
        fix_file(f)
    except Exception as e:
        print(f"Error processing {f}: {e}")

