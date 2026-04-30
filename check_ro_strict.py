
import os
import re

files = [
    'lib/visualLab/data/poiExtraAustriaCities.ts',
    'lib/visualLab/data/poiExtraAustriaHistorical.ts',
    'lib/visualLab/data/poiExtraAustriaIndustry.ts',
    'lib/visualLab/data/poiExtraAustriaLife.ts',
    'lib/visualLab/data/poiExtraAustriaNature.ts'
]

for file_path in files:
    if not os.path.exists(file_path):
        print(f"File {file_path} missing")
        continue
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Check for empty ro in descriptionAdvanced
    empty_ro_desc = re.findall(r'descriptionAdvanced: \{[\s\S]*?ro: ""', content)
    if empty_ro_desc:
        print(f"File {file_path} has {len(empty_ro_desc)} empty ro descriptionAdvanced")
    
    # Check for empty ro in factsAdvanced
    empty_ro_facts = re.findall(r'factsAdvanced: \{[\s\S]*?ro: \[\]', content)
    if empty_ro_facts:
        print(f"File {file_path} has {len(empty_ro_facts)} empty ro factsAdvanced")

    # Check for missing ro key in descriptionAdvanced
    # We split by POI and check each
    pois = content.split('id: "')[1:]
    for i, poi in enumerate(pois):
        poi_id = poi.split('"')[0]
        if 'descriptionAdvanced' in poi:
            if 'ro:' not in poi.split('descriptionAdvanced')[1].split('}')[0]:
                 print(f"File {file_path}, POI {poi_id}: ro key MISSING in descriptionAdvanced")
            else:
                ro_val = poi.split('descriptionAdvanced')[1].split('ro:')[1].split(',')[0].strip()
                if ro_val in ['""', "''", "``"]:
                     print(f"File {file_path}, POI {poi_id}: ro value EMPTY in descriptionAdvanced")

        if 'factsAdvanced' in poi:
             if 'ro:' not in poi.split('factsAdvanced')[1].split(']')[0]:
                 print(f"File {file_path}, POI {poi_id}: ro key MISSING in factsAdvanced")
             else:
                ro_val = poi.split('factsAdvanced')[1].split('ro:')[1].split(']')[0].strip()
                if ro_val == '[': # It means ro: []
                     print(f"File {file_path}, POI {poi_id}: ro value EMPTY in factsAdvanced")
