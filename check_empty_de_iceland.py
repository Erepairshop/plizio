import re
import sys

def check_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    pois = re.findall(r'id:\s*"(.*?)"', content)
    print(f"File {filepath} has {len(pois)} POIs.")

    desc_adv_empty_de = len(re.findall(r'descriptionAdvanced:\s*\{[^}]*de:\s*""', content))
    facts_adv_empty_de = len(re.findall(r'factsAdvanced:\s*\{[^}]*de:\s*\[\]', content))
    
    print(f"Empty descriptionAdvanced.de: {desc_adv_empty_de}")
    print(f"Empty factsAdvanced.de: {facts_adv_empty_de}")

check_file('lib/visualLab/data/icelandPoi.ts')
check_file('lib/visualLab/data/poiExtraIcelandCities.ts')
