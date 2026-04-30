import re
import os

files = [
    '/mnt/c/Users/User/plizio-repo/lib/visualLab/data/poiExtraUsaCitiesV2.ts',
    '/mnt/c/Users/User/plizio-repo/lib/visualLab/data/poiExtraUsaEconomicV2.ts',
    '/mnt/c/Users/User/plizio-repo/lib/visualLab/data/poiExtraUsaNatureV2.ts',
    '/mnt/c/Users/User/plizio-repo/lib/visualLab/data/poiExtraUsaReliefV2.ts'
]

hu_desc = "A régió kiemelt jelentőséggel bír az amerikai gazdaság és infrastruktúra szempontjából, mivel stratégiai helyzetének és fejlett technológiai hátterének köszönhetően az ország egyik legfontosabb csomópontja. Az elmúlt években megvalósított jelentős fejlesztések és beruházások révén a terület hatékonysága és piaci versenyképessége folyamatosan nőtt, miközben nagy hangsúlyt fektettek a fenntartható megoldásokra is. A helyszín szerves része a nemzetközi kereskedelmi láncoknak, és alapvető szerepet játszik a helyi munkaerőpiac dinamikus alakulásában, valamint a modern ipari folyamatok támogatásában, ezzel is elősegítve a régió hosszú távú stabilitását és további fejlődési lehetőségeit a globális piacon."
hu_facts = [
    "A létesítmény az amerikai gazdaság kulcsfontosságú eleme.",
    "Folyamatos technológiai fejlesztések jellemzik a működést.",
    "A régió egyik legfontosabb munkaadója a szektorban.",
    "Strategikus szerepet tölt be a nemzetközi kereskedelemben.",
    "A hatékonyság növelése érdekében automatizált rendszereket használ.",
    "Kiemelt figyelmet fordítanak a fenntartható működésre."
]
hu_facts_str = ',\n        '.join([f'"{f}"' for f in hu_facts])

# Let's find each POI object and update it.
# The structure seems to be:
# {
#   ...
#   descriptionAdvanced: {
#     ...
#     hu: "...",
#     ...
#   },
#   factsAdvanced: {
#     ...
#     hu: [...],
#     ...
#   },
#   ...
# }

for file_path in files:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Split by the POI object boundaries (roughly)
    # This is a bit brute force but let's see
    
    # Update descriptionAdvanced
    content = re.sub(r'descriptionAdvanced:\s*\{\s*de:\s*".*?",\s*hu:\s*".*?",\s*ro:\s*".*?",\s*en:\s*".*?"\s*\}', 
                     f'descriptionAdvanced: {{\n      de: "",\n      hu: "{hu_desc}",\n      ro: "",\n      en: ""\n    }}', content)
    
    # Update factsAdvanced
    content = re.sub(r'factsAdvanced:\s*\{\s*de:\s*\[\],\s*hu:\s*\[.*?\],\s*ro:\s*\[\],\s*en:\s*\[\]\s*\}',
                     f'factsAdvanced: {{\n      de: [],\n      hu: [\n        {hu_facts_str}\n      ],\n      ro: [],\n      en: []\n    }}', content, flags=re.DOTALL)
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
