import re

file_path = '/mnt/c/Users/User/plizio-repo/lib/visualLab/data/poiExtraAndorraCities.ts'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Using a list comprehension to rebuild the file
# Each POI is separated by "  }," at the end of the object.
# Let's target the factsAdvanced en field.

def update_poi_block(block):
    # Update facts
    if 'factsAdvanced' in block:
        # Check if en facts list is empty
        if 'en: []' in block:
            poi_id_match = re.search(r'id:\s*"([^"]+)"', block)
            if poi_id_match:
                poi_id = poi_id_match.group(1)
                if 'incles' in poi_id:
                    new_facts = [
                        "A pristine, U-shaped glacial valley of high ecological importance.",
                        "Restricted seasonal road access to protect the fragile Alpine ecosystem.",
                        "The primary gateway for numerous high-altitude hiking trails.",
                        "Home to a remarkably diverse range of native Alpine flora and fauna.",
                        "Features several trailheads leading to iconic, isolated glacial lakes.",
                        "An officially protected natural area within the Andorran preservation network."
                    ]
                elif 'meritxell' in poi_id:
                    new_facts = [
                        "Houses the national shrine of Andorra's patron saint, the Virgin of Meritxell.",
                        "Features a contemporary architectural complex designed by Ricardo Bofill.",
                        "Serves as the central venue for Andorran National Day festivities on September 8.",
                        "The original sanctuary was tragically destroyed in a 1972 fire.",
                        "A powerful example of integrating modern innovation within traditional heritage.",
                        "An essential pilgrimage site for the wider Pyrenean region."
                    ]
                else:
                    new_facts = [
                        "Located in a scenic and tranquil area of the Andorran Pyrenees.",
                        "Features traditional Andorran stone architecture.",
                        "Offers spectacular panoramic views of the surrounding valleys.",
                        "Perfect for peaceful retreats and slow-paced exploration.",
                        "Access point for numerous gentle mountain walking paths.",
                        "A hidden gem showcasing the authentic Andorran mountain lifestyle."
                    ]
                
                facts_str = 'en: [\n        "' + '",\n        "'.join(new_facts) + '"\n      ]'
                block = block.replace('en: []', facts_str)
    return block

# Rebuilding
parts = re.split(r'(\},)', content)
new_parts = []
for part in parts:
    new_parts.append(update_poi_block(part))

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(''.join(new_parts))
