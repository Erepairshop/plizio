
import re
import os

file_path = '/mnt/c/Users/User/plizio-repo/lib/visualLab/data/switzerlandPoi.ts'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Improved array item extraction
def extract_array_items(array_str):
    # Match strings inside the array
    return re.findall(r'"(.*?)"|\'(.*?)\'', array_str)

def get_items_list(array_str):
    matches = extract_array_items(array_str)
    return [m[0] if m[0] else m[1] for m in matches]

# Content to fill if empty
fill_content = {
    "cult-rhaetian-railway": {
        "descriptionAdvanced": "The Rhaetian Railway in the Albula/Bernina landscapes is a marvel of railway engineering and a UNESCO World Heritage site. It connects Switzerland with Italy through some of the most dramatic scenery in the Alps, featuring soaring stone viaducts and spiral tunnels. The Bernina Express is particularly famous for its panoramic windows that offer uninterrupted views of glaciers and mountain peaks. This narrow-gauge railway operates without a cog-and-pinion system, despite the steep gradients it overcomes. It stands as a testament to the early 20th century's technical achievements and harmonious integration with the high-mountain landscape.",
        "factsAdvanced": [
            "The railway was designated a UNESCO World Heritage site in 2008 for its technical and architectural excellence.",
            "It features the famous Landwasser Viaduct, which stands 65 meters high and leads directly into a tunnel.",
            "The Bernina line is the highest transalpine railway in Europe, reaching an altitude of 2,253 meters.",
            "It utilizes spiral tunnels and circular viaducts to gain elevation without using a rack-and-pinion system."
        ]
    },
    "cult-chillon": {
        "descriptionAdvanced": 'Chillon Castle is a majestic medieval fortress situated on a rocky islet on the shores of Lake Geneva near Montreux. It was for centuries the residence of the powerful Counts of Savoy and served as a strategic military outpost. The castle gained worldwide fame in the 19th century through Lord Byron\'s poem, "The Prisoner of Chillon." Its architecture consists of 25 buildings and three courtyards, all protected by two circular walls. Today, it is Switzerland\'s most visited historic monument, offering a glimpse into the life of the Middle Ages. Visitors can explore grand banquet halls, frescoed chapels, and the atmospheric dungeons carved directly into the rock.',
        "factsAdvanced": [
            "Chillon Castle is the most visited historic building in Switzerland, welcoming over 400,000 people annually.",
            "The castle's current form is a result of centuries of construction and renovations, primarily from the 12th to 14th centuries.",
            "Lord Byron famously carved his name into one of the pillars in the dungeon during a visit in 1816.",
            "The fortress is built on an island of rock that provides natural defense against land-based attacks."
        ]
    },
    "cult-pilatus": {
        "descriptionAdvanced": 'Mount Pilatus towers over the city of Lucerne, serving as one of the most iconic and legendary peaks in Central Switzerland. The mountain is accessible via the world\'s steepest cogwheel railway, which climbs at a staggering 48% gradient. According to local folklore, the mountain was once inhabited by dragons with healing powers and is said to be the final resting place of Pontius Pilate. From its summit at 2,132 meters, visitors are treated to a 360-degree panorama of the Swiss Alps and the shimmering Lake Lucerne. The "Golden Round Trip" allows tourists to experience the mountain through a combination of boat, cogwheel train, and aerial cableways. It is a premier destination for both adventure seekers and those looking for peaceful Alpine views.',
        "factsAdvanced": [
            "The Pilatus Railway is the steepest cogwheel railway in the world, featuring a unique transverse rack system.",
            "Local legends about dragons and ghosts have surrounded the mountain since the Middle Ages.",
            "The summit offers spectacular views of 73 Alpine peaks and several Central Swiss lakes.",
            "The \"Dragon Ride\" is a modern aerial cableway that gives passengers the sensation of flying."
        ]
    },
    "cult-cern": {
        "descriptionAdvanced": 'CERN, the European Organization for Nuclear Research, is located on the border between Switzerland and France near Geneva. It is the world\'s largest particle physics laboratory and home to the monumental Large Hadron Collider. Thousands of scientists from around the globe work here to uncover the fundamental laws of the universe and the origin of matter. Beyond high-energy physics, CERN is also the birthplace of the World Wide Web, invented by Tim Berners-Lee in 1989. The facility offers fascinating exhibitions like "Microcosm" and the Globe of Science and Innovation to educate the public. It stands as a beacon of international cooperation and human curiosity at the frontiers of science.',
        "factsAdvanced": [
            "The Large Hadron Collider is the world's most powerful and complex particle accelerator, spanning 27 kilometers in circumference.",
            "CERN was established in 1954 and currently has 23 member states working together in peaceful scientific research.",
            "The first web server in history was a NeXT computer used by Tim Berners-Lee at CERN.",
            "Research at CERN has led to major breakthroughs, including the discovery of the Higgs boson in 2012."
        ]
    },
    "nat-lucerne": {
        "descriptionAdvanced": "Lake Lucerne, known locally as the Vierwaldstättersee, is widely regarded as the most picturesque and geographically diverse lake in Switzerland. Its unique shape features multiple arms that wind between steep mountain slopes, creating a dramatic and ever-changing landscape. The lake is deeply tied to Swiss national identity, as its shores were the birthplace of the Swiss Confederation in 1291. Historical paddle-steamers still navigate its waters, offering nostalgic and scenic cruises between the city of Lucerne and various Alpine villages. Mountains like Rigi and Pilatus rise directly from the water's edge, providing breathtaking backdrops. Whether exploring by boat or on foot, the lake offers a perfect blend of natural beauty and historical significance.",
        "factsAdvanced": [
            "Lake Lucerne is the fourth largest lake in Switzerland and is famous for its highly irregular, fjord-like shape.",
            "The Rütli meadow on the lake's shore is the legendary site where the Swiss Confederation was founded.",
            "A fleet of five historic paddle-wheel steamboats still operates on the lake, the largest of its kind in Europe.",
            "The lake is surrounded by four cantons: Lucerne, Uri, Schwyz, and Unterwalden, giving it its German name."
        ]
    },
    "nat-lauterbrunnen": {
        "descriptionAdvanced": 'The Lauterbrunnen Valley is one of the most spectacular glacial valleys in the world, characterized by its sheer cliff walls and numerous cascading waterfalls. Located in the heart of the Bernese Oberland, the valley features 72 waterfalls, including the iconic Staubbach Falls. This dramatic landscape was a direct inspiration for J.R.R. Tolkien\'s Rivendell in "The Lord of the Rings." The valley floor is home to the charming village of Lauterbrunnen, while car-free villages like Wengen and Mürren perch on the surrounding cliffs. Visitors can also explore the Trümmelbach Falls, a series of ten glacial waterfalls hidden inside the mountain. It is a world-renowned destination for hikers, base jumpers, and nature lovers seeking Alpine majesty.',
        "factsAdvanced": [
            "Lauterbrunnen means \"many fountains,\" referring to the 72 waterfalls that drop into the valley.",
            "The Staubbach Falls is one of the highest free-falling waterfalls in Europe, plunging nearly 300 meters.",
            "The valley's U-shape is a classic example of massive glacial erosion from the last ice age.",
            "The Trümmelbach Falls carry the meltwater from the Eiger, Mönch, and Jungfrau glaciers through the rock."
        ]
    },
    "nat-interlaken": {
        "descriptionAdvanced": 'Interlaken is situated on a narrow strip of land between Lake Thun and Lake Brienz, serving as the ultimate gateway to the Bernese Alps. Overlooked by the majestic Eiger, Mönch, and Jungfrau peaks, it is known as the "Adventure Capital of Switzerland." The town is a world-class hub for outdoor activities, including paragliding, skydiving, and canyoning. The Höhematte, a vast green meadow in the center of town, offers iconic views of the Jungfrau massif and serves as a landing spot for paragliders. Historic grand hotels and modern boutiques line the streets, reflecting its long history as a premier tourist destination since the 19th century. Interlaken provides the perfect base for exploring the surrounding lakes and high Alpine regions by train or boat.',
        "factsAdvanced": [
            "The name Interlaken is derived from Latin and literally means \"between the lakes.\"",
            "It is located on the \"Bödeli,\" an alluvial plain formed by the Lütschine and Aare rivers.",
            "Interlaken has been a world-renowned tourist destination since the early 1800s, attracting artists and royalty.",
            "The town serves as the primary starting point for train journeys to the Jungfraujoch, the \"Top of Europe.\""
        ]
    }
}

def merge_field(field_name, poi_id, obj_content):
    field_re = re.compile(f'{field_name}:\\s*{{', re.MULTILINE)
    matches = list(field_re.finditer(obj_content))
    if not matches:
        return None, obj_content
    
    merged_data = {"ro": "", "en": ""}
    if field_name == "factsAdvanced":
        merged_data = {"ro": [], "en": []}

    to_remove = []
    
    for match in matches:
        start = match.start()
        brace_count = 0
        end = -1
        for i in range(match.end() - 1, len(obj_content)):
            if obj_content[i] == '{':
                brace_count += 1
            elif obj_content[i] == '}':
                brace_count -= 1
                if brace_count == 0:
                    end = i + 1
                    break
        
        if end != -1:
            block = obj_content[start:end]
            to_remove.append((start, end))
            
            if field_name == "descriptionAdvanced":
                en_match = re.search(r'en:\s*"(.*?)"', block, re.DOTALL)
                ro_match = re.search(r'ro:\s*"(.*?)"', block, re.DOTALL)
                if en_match and en_match.group(1).strip():
                    if len(en_match.group(1).strip()) > len(merged_data["en"]):
                        merged_data["en"] = en_match.group(1).strip()
                if ro_match and ro_match.group(1).strip():
                    if len(ro_match.group(1).strip()) > len(merged_data["ro"]):
                        merged_data["ro"] = ro_match.group(1).strip()
            else: # factsAdvanced
                en_match = re.search(r'en:\s*\[(.*?)\]', block, re.DOTALL)
                ro_match = re.search(r'ro:\s*\[(.*?)\]', block, re.DOTALL)
                if en_match:
                    items = get_items_list(en_match.group(1))
                    if len(items) > len(merged_data["en"]):
                        merged_data["en"] = items
                if ro_match:
                    items = get_items_list(ro_match.group(1))
                    if len(items) > len(merged_data["ro"]):
                        merged_data["ro"] = items

    if not merged_data["en"] and poi_id in fill_content:
        merged_data["en"] = fill_content[poi_id][field_name]
    
    new_obj_content = obj_content
    for start, end in reversed(to_remove):
        after = new_obj_content[end:end+2]
        if after.startswith(','):
            end += 1
        new_obj_content = new_obj_content[:start] + new_obj_content[end:]
    
    def escape_quotes(s):
        return s.replace('"', '\\"')

    if field_name == "descriptionAdvanced":
        ro_val = escape_quotes(merged_data["ro"])
        en_val = escape_quotes(merged_data["en"])
        formatted = f'descriptionAdvanced: {{\n      de: "",\n      hu: "",\n      ro: "{ro_val}",\n      en: "{en_val}"\n    }}'
    else:
        en_facts = "[\n        " + ",\n        ".join([f'"{escape_quotes(f)}"' for f in merged_data["en"]]) + "\n      ]" if merged_data["en"] else "[]"
        ro_facts = "[\n        " + ",\n        ".join([f'"{escape_quotes(f)}"' for f in merged_data["ro"]]) + "\n      ]" if merged_data["ro"] else "[]"
        formatted = f'factsAdvanced: {{\n      de: [],\n      hu: [],\n      ro: {ro_facts},\n      en: {en_facts}\n    }}'
    
    return formatted, new_obj_content

poi_pattern = re.compile(r'(\s+id:\s*"(.*?)",[\s\S]*?image:\s*".*?"\s*})', re.MULTILINE)

final_output = ""
last_pos = 0
for match in poi_pattern.finditer(content):
    final_output += content[last_pos:match.start()]
    poi_id = match.group(2)
    processed = match.group(1)
    
    # Surgical merge
    desc_adv, processed = merge_field("descriptionAdvanced", poi_id, processed)
    facts_adv, processed = merge_field("factsAdvanced", poi_id, processed)
    
    image_match = re.search(r'image:\s*', processed)
    if image_match:
        pos = image_match.start()
        insertion = ""
        if desc_adv: insertion += "    " + desc_adv + ",\n"
        if facts_adv: insertion += "    " + facts_adv + ",\n"
        processed = processed[:pos] + insertion + processed[pos:]
    
    processed = re.sub(r',\s*,', ',', processed)
    final_output += processed
    last_pos = match.end()

final_output += content[last_pos:]

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(final_output)

print("Cleanup complete with proper escaping.")
