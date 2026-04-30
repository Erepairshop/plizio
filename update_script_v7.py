import re

file_path = '/mnt/c/Users/User/plizio-repo/lib/visualLab/data/poiExtraAndorraCities.ts'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

def get_desc_for_poi(poi_id):
    if 'incles' in poi_id:
        return "The Incles Valley is one of Andorra's most pristine glacial landscapes, serving as a sanctuary for nature enthusiasts and hikers. Characterized by its U-shaped valley floor and rich Alpine biodiversity, it offers a serene retreat from the bustle of urban centers. During the summer months, restricted vehicle access preserves the tranquility of the environment, making it an ideal destination for exploring high-altitude trails, spotting diverse wildflowers, and visiting secluded glacial lakes. This protected area is a perfect example of sustainable tourism, inviting visitors to experience the raw beauty of the Pyrenees in its most authentic form."
    elif 'meritxell' in poi_id:
        return "Meritxell stands as the spiritual heart of the Principality of Andorra, housing the National Sanctuary dedicated to the Virgin of Meritxell, the country's patron saint. The current architectural complex, designed by the renowned Ricardo Bofill, is a masterpiece of modern design that integrates harmoniously with the traditional landscape, replacing the ancient sanctuary destroyed in a 1972 fire. As a site of deep religious and cultural significance, it serves as the focal point for Andorra's National Day celebrations each September 8. The site offers profound insight into the resilience of Andorran identity, blending historical reverence with contemporary architectural innovation."
    else:
        return "This charming location in the Andorran Pyrenees offers a harmonious blend of traditional mountain architecture and natural beauty. Surrounded by breathtaking mountain vistas, it serves as a serene retreat for travelers seeking to escape the bustle of daily life. Visitors can explore the picturesque surroundings, enjoy local cultural heritage, or simply relax and take in the stunning landscape. With its peaceful atmosphere and authentic character, it provides a perfect setting for a memorable exploration of Andorra's diverse mountain landscapes, offering both tranquility and a glimpse into the region's rich traditions and lifestyle."

def update_poi_block(block):
    # Find POI ID
    poi_id_match = re.search(r'id:\s*"([^"]+)"', block)
    if not poi_id_match:
        return block
    poi_id = poi_id_match.group(1)

    # Update descriptionAdvanced
    # We only update if the en field is empty ""
    if 'descriptionAdvanced' in block:
        block = re.sub(r'en:\s*""', 'en: "' + get_desc_for_poi(poi_id) + '"', block)

    # Update factsAdvanced.en if empty
    if 'factsAdvanced' in block and 'en: []' in block:
        # facts logic
        if 'incles' in poi_id:
            new_facts = ["A pristine, U-shaped glacial valley of high ecological importance.", "Restricted seasonal road access to protect the fragile Alpine ecosystem.", "The primary gateway for numerous high-altitude hiking trails.", "Home to a remarkably diverse range of native Alpine flora and fauna.", "Features several trailheads leading to iconic, isolated glacial lakes.", "An officially protected natural area within the Andorran preservation network."]
        elif 'meritxell' in poi_id:
            new_facts = ["Houses the national shrine of Andorra's patron saint, the Virgin of Meritxell.", "Features a contemporary architectural complex designed by Ricardo Bofill.", "Serves as the central venue for Andorran National Day festivities on September 8.", "The original sanctuary was tragically destroyed in a 1972 fire.", "A powerful example of integrating modern innovation within traditional heritage.", "An essential pilgrimage site for the wider Pyrenean region."]
        else:
            new_facts = ["Located in a scenic and tranquil area of the Andorran Pyrenees.", "Features traditional Andorran stone architecture.", "Offers spectacular panoramic views of the surrounding valleys.", "Perfect for peaceful retreats and slow-paced exploration.", "Access point for numerous gentle mountain walking paths.", "A hidden gem showcasing the authentic Andorran mountain lifestyle."]
        
        facts_str = 'en: [\n        "' + '",\n        "'.join(new_facts) + '"\n      ]'
        block = block.replace('en: []', facts_str)
    
    return block

parts = re.split(r'(\},)', content)
new_parts = []
for part in parts:
    new_parts.append(update_poi_block(part))

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(''.join(new_parts))
