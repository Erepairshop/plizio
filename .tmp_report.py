import json
import re
import os

filepath = 'lib/visualLab/data/poiExtraArgentinaEconomicV2.ts'
size = os.path.getsize(filepath)

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

ports = len(re.findall(r'type:\s*"port"', content))
industries = len(re.findall(r'type:\s*"industry"', content))

print(f"File size: {size} bytes")
print(f"Ports: {ports}")
print(f"Industries: {industries}")
print(f"Total POIs: {ports + industries}")
