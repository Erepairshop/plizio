import re

with open('/mnt/c/Users/User/plizio-repo/lib/visualLab/data/poiExtraAfghanistanCitiesV2.ts', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('AF-FAR', 'AF-FYB')
content = content.replace('AF-PIA', 'AF-PKA')

with open('/mnt/c/Users/User/plizio-repo/lib/visualLab/data/poiExtraAfghanistanCitiesV2.ts', 'w', encoding='utf-8') as f:
    f.write(content)
