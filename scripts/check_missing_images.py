import os
import re

data_dir = '/home/borota25/Desktop/plizio/lib/visualLab/data'
public_dir = '/home/borota25/Desktop/plizio/public'

missing_pois = []

for filename in os.listdir(data_dir):
    if filename.endswith('Poi.ts'):
        filepath = os.path.join(data_dir, filename)
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
            # Keressük a POI blokkokat. Durva közelítés: { id: ..., name: ..., image: ... }
            # A korábbi read_file alapján a struktúra: image: "/geo-images/..."
            matches = re.finditer(r'\{[^{]*?id:\s*["\']([^"\']+)["\'][^{]*?name:\s*\{[^}]*?en:\s*["\']([^"\']+)["\'][^{]*?image:\s*["\']([^"\']+)["\']', content, re.DOTALL)
            
            for match in matches:
                poi_id = match.group(1)
                poi_name_en = match.group(2)
                image_path = match.group(3)
                
                if not image_path:
                    continue
                
                full_image_path = os.path.join(public_dir, image_path.lstrip('/'))
                if not os.path.exists(full_image_path):
                    missing_pois.append({
                        'file': filename,
                        'id': poi_id,
                        'name': poi_name_en,
                        'image_path': image_path,
                        'full_path': full_image_path
                    })

print(f"Összes hiányzó kép: {len(missing_pois)}")
# Országonkénti bontás
by_file = {}
for poi in missing_pois:
    by_file[poi['file']] = by_file.get(poi['file'], 0) + 1

for file, count in sorted(by_file.items(), key=lambda x: x[1], reverse=True):
    print(f"{file}: {count}")

# Minta a hiányzókból
if missing_pois:
    print("\nPéldák a hiányzókra:")
    for poi in missing_pois[:10]:
        print(f"- {poi['name']} ({poi['image_path']})")
