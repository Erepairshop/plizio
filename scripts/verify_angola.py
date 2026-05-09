# -*- coding: utf-8 -*-
import re
F = r'C:\Users\User\plizio-repo\lib\visualLab\data\poiExtraAngolaCitiesV2.ts'
with open(F,'r',encoding='utf-8') as f:
    content = f.read()
ids = re.findall(r'id:\s*"([^"]+)"', content)
broken_hu=0; short={'de':0,'hu':0,'ro':0,'en':0}; missing=0
for poi_id in ids:
    idx=content.find('id: "'+poi_id+'"')
    da=content.find('descriptionAdvanced:',idx)
    if da==-1: continue
    bo=content.find('{',da); depth=0; i=bo
    while i<len(content):
        c=content[i]
        if c=='{': depth+=1
        elif c=='}':
            depth-=1
            if depth==0: bc=i; break
        i+=1
    block=content[bo+1:bc]
    for lang in ('de','hu','ro','en'):
        pat = re.compile(r'\b'+lang+r'\s*:\s*"((?:[^"\\]|\\.)*)"')
        m=pat.search(block)
        if not m:
            missing+=1
            print('MISSING',poi_id,lang); continue
        v=m.group(1)
        if lang=='hu' and '?' in v:
            broken_hu+=1
            print('BROKEN HU',poi_id,':',v[:80])
        if len(v)<50: short[lang]+=1
print('Total POIs:',len(ids))
print('Broken HU (?):',broken_hu)
print('Short(<50):',short)
print('Missing langs:',missing)
print('EN filler remaining:', content.count('is a remarkable feature of the geography'))
