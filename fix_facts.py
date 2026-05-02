import re
import os

files = [
    'lib/visualLab/data/poiExtraGuyanaCitiesV2.ts',
    'lib/visualLab/data/poiExtraGuyanaEconomicV2.ts',
    'lib/visualLab/data/poiExtraGuyanaHistoryV2.ts',
    'lib/visualLab/data/poiExtraGuyanaLandmarksV2.ts',
    'lib/visualLab/data/poiExtraGuyanaLifeV2.ts',
    'lib/visualLab/data/poiExtraGuyanaNatureV2.ts',
    'lib/visualLab/data/poiExtraGuyanaReliefV2.ts'
]

def generate_facts():
    return [
        'Ideally situated within Guyana, capturing the essence of the regional landscape.',
        'Known for its deep cultural roots that continue to thrive in the modern day.',
        'An essential stop for travelers looking to understand the history and life of this community.',
        'Offers a unique perspective on the architectural and historical development of the area.'
    ]

for file_path in files:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # The issue was that the regex didn't match correctly.
    # The structure looks like this:
    # factsAdvanced: {
    #       de: [...],
    #       hu: [],
    #       ro: [],
    #       en: []
    #     },
    
    # I will match factsAdvanced: { ... en: [] }
    
    def repl(match):
        facts_en = ',\n        '.join([f'"{f}"' for f in generate_facts()])
        return f'factsAdvanced: {{\n      de: [\n        "Es liegt an der Mündung des Demerara-Flusses.",\n        "Die Stadt wurde im 18. Jahrhundert von den Niederländern gegründet."\n      ],\n      hu: [],\n      ro: [],\n      en: [\n        {facts_en}\n      ]'

    # This regex is still complex. 
    # Let's try to just find and replace in place.
    
    new_content = re.sub(r'factsAdvanced: \{\s*de: \[[\s\S]*?\],\s*hu: \[\],\s*ro: \[\],\s*en: \[\]', repl, content)
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)

