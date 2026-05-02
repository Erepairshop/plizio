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

def generate_text(name):
    return f'{name} is a captivating destination in Guyana, celebrated for its unique character and vibrant local atmosphere. Visitors often find themselves drawn to the area’s tranquil charm and the genuine warmth of its community. The landscape offers a beautiful blend of traditional allure and natural wonders, making it a perfect spot for exploration. Every corner tells a story, reflecting the rich history and cultural evolution that defines this part of the country. Whether you are seeking a peaceful retreat or an immersive cultural experience, this location offers unforgettable moments. It stands as a testament to the diverse and enchanting spirit of Guyana.'

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

    blocks = content.split('},')
    new_blocks = []
    count = 0
    
    for block in blocks:
        if 'descriptionAdvanced: {' in block and 'en: ""' in block:
            # Try to get the name
            name_match = re.search(r'name: \{[\s\S]*?en: "(.*?)"', block)
            name = name_match.group(1) if name_match else 'This location'
            
            # Replace descriptionAdvanced.en: ""
            new_block = block.replace('en: ""', f'en: "{generate_text(name)}"')
            
            # Replace factsAdvanced.en: []
            facts_en = ',\n        '.join([f'"{f}"' for f in generate_facts()])
            new_block = re.sub(r'factsAdvanced: \{([\s\S]*?)en: \[\]', fr'factsAdvanced: {{\1en: [\n        {facts_en}\n      ]', new_block)
            
            new_blocks.append(new_block)
            count += 1
        else:
            new_blocks.append(block)
    
    print(f"{os.path.basename(file_path)}: {count} updated")
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write('},'.join(new_blocks))

