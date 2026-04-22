import os
import re

data_dir = '/home/borota25/Desktop/plizio/lib/visualLab/data'
public_dir = '/home/borota25/Desktop/plizio/public'

missing_pois = []
no_image_field = []

for filename in os.listdir(data_dir):
    if filename.endswith('Poi.ts') or filename == 'poi.ts':
        filepath = os.path.join(data_dir, filename)
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
            # Keressük a POI blokkokat { id: ... }
            # Megpróbáljuk elkapni a teljes objektumot a következő id-ig vagy a tömb végéig
            blocks = re.split(r'\n\s*\{', content)
            
            for block in blocks:
                if 'id:' not in block:
                    continue
                
                id_match = re.search(r'id:\s*["\']([^"\']+)["\']', block)
                name_match = re.search(r'name:\s*\{[^}]*?en:\s*["\']([^"\']+)["\']', block)
                image_match = re.search(r'image:\s*["\']([^"\']*)["\']', block)
                
                if not id_match or not name_match:
                    continue
                
                poi_id = id_match.group(1)
                poi_name = name_match.group(1)
                
                if not image_match:
                    no_image_field.append({'file': filename, 'id': poi_id, 'name': poi_name})
                else:
                    image_path = image_match.group(1)
                    if not image_path:
                        no_image_field.append({'file': filename, 'id': poi_id, 'name': poi_name})
                    else:
                        full_image_path = os.path.join(public_dir, image_path.lstrip('/'))
                        if not os.path.exists(full_image_path):
                            missing_pois.append({
                                'file': filename,
                                'id': poi_id,
                                'name': poi_name,
                                'image_path': image_path
                            })

print(f"Kép mezővel rendelkező, de hiányzó fájlok: {len(missing_pois)}")
print(f"Kép mező nélküli vagy üres POI-k: {len(no_image_field)}")
print(f"Összesen: {len(missing_pois) + len(no_image_field)}")

# Fájlonkénti bontás
by_file = {}
for poi in missing_pois + no_image_field:
    by_file[poi['file']] = by_file.get(poi['file'], 0) + 1

print("\nFájlonkénti hiányzó/üres képek:")
for file, count in sorted(by_file.items(), key=lambda x: x[1], reverse=True):
    print(f"{file}: {count}")
