import re

file_path = 'lib/visualLab/data/switzerlandPoi.ts'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Define the new content for the target POIs
new_content = {
    "industry-swissmill-tower": {
        "desc": "The Swissmill Tower in Zurich is a landmark of industrial efficiency and urban food production. Standing at 118 meters, it is the tallest grain silo in the world and a dominant feature of the city's skyline along the Limmat. The tower represents Zurich's long-standing tradition of combining industry with urban life. It processes huge amounts of grain daily, ensuring a steady supply of flour for the entire region.",
        "facts": [
            "At 118 meters, it is the world's tallest functional grain silo.",
            "The tower can store up to 40,000 tons of grain at once.",
            "Its minimalist concrete design was completed in 2016 by Harder Haas Partner.",
            "It is located in the Zurich West district, a hub for industrial transformation."
        ]
    },
    "industry-novartis-campus": {
        "desc": "The Novartis Campus in Basel is a global center for pharmaceutical research and innovation, designed as a city within a city. The campus features buildings by some of the world's most renowned architects, including Frank Gehry and David Chipperfield. It is a strictly controlled site where thousands of scientists work on the next generation of life-saving medicines. The project reflects Basel's status as a world leader in the life sciences sector.",
        "facts": [
            "The campus master plan was designed by Italian architect Vittorio Magnago Lampugnani.",
            "It includes buildings by Pritzker Prize winners like Gehry, Herzog & de Meuron, and Maki.",
            "The site was originally an industrial production area before being converted into a research hub.",
            "It is one of the most concentrated centers of pharmaceutical expertise in the world."
        ]
    },
    "agriculture-lavaux-vineyards": {
        "desc": "The Lavaux Vineyards, stretching along the northern shores of Lake Geneva, are a stunning example of human ingenuity and natural beauty. These terraced vineyards date back to the 11th century when Benedictine and Cistercian monks first began cultivating the steep slopes. Today, they are a UNESCO World Heritage site, famous for producing high-quality Chasselas wines. The reflection of the sun on the lake and the stone walls creates a unique microclimate that is perfect for viticulture.",
        "facts": [
            "Lavaux is Switzerland's largest contiguous vineyard area, covering 800 hectares.",
            "The terraces are supported by over 400 kilometers of stone walls.",
            "It was designated a UNESCO World Heritage site in 2007.",
            "The region is known for its 'three suns': the direct sun, the reflection from the lake, and the heat stored in the walls."
        ]
    },
    "agriculture-emmental-dairy": {
        "desc": "The Emmental is the heart of Swiss dairy tradition, a landscape of rolling green hills and large, traditional farmhouses. This region is the birthplace of the world-famous Emmentaler AOP, the original Swiss cheese with holes. The lush pastures and high-quality milk are the foundation of a craft that has been perfected over centuries. Visiting the Emmental offers a deep dive into the rural soul of Switzerland, where agriculture is still the primary way of life.",
        "facts": [
            "The Emmental region is located in the catchment area of the Emme river in Canton Bern.",
            "Emmentaler AOP is produced in massive wheels weighing between 75 and 120 kilograms.",
            "Traditional Emmental farmhouses are known for their massive overhanging roofs.",
            "The cheese's iconic holes are caused by carbon dioxide bubbles during the aging process."
        ]
    },
    "cult-bern-altstadt": {
        "desc": "The Old Town of Bern is a masterfully preserved medieval city center and a UNESCO World Heritage site since 1983. Built on a narrow hill surrounded on three sides by the Aare river, its layout has remained largely unchanged since the 12th century. The city is famous for its six kilometers of arcades, known as 'Lauben,' which provide one of the longest covered shopping promenades in Europe. Key landmarks include the Zytglogge clock tower and the late-Gothic Bern Minster with its record-breaking spire.",
        "facts": [
            "The Old Town was rebuilt in sandstone after a devastating fire in 1405.",
            "Bern's arcades offer 6 kilometers of sheltered walkways for pedestrians.",
            "The Zytglogge features an astronomical clock and a mechanical figure play from 1530.",
            "The Bern Minster has the tallest church tower in Switzerland, reaching 100 meters."
        ]
    },
    "cult-rhaetian-railway": {
        "desc": "The Rhaetian Railway in the Albula and Bernina landscapes is a marvel of railway engineering and a UNESCO World Heritage site. It crosses the high Alps via spectacular viaducts, winding tunnels, and steep galleries, all without the use of a rack-and-pinion system. The Bernina Express route reaches an altitude of 2,253 meters at the Ospizio Bernina, making it the highest railway crossing in Europe. This railway provides a seamless link between the glaciers of the north and the palm trees of the south.",
        "facts": [
            "The Bernina line is one of the steepest narrow-gauge railways in the world.",
            "The Landwasser Viaduct is the most famous structure on the Albula line.",
            "It was added to the UNESCO World Heritage list in 2008 for its engineering and landscape.",
            "The railway operates year-round, even through heavy Alpine winters."
        ]
    },
    "cult-chillon": {
        "desc": "Chillon Castle is an architectural jewel set on a rocky island on the edge of Lake Geneva. For centuries, it served as a strategic fortress and residence for the Counts of Savoy, controlling the passage between northern and southern Europe. The castle's romantic silhouette against the lake and mountains has inspired countless artists and writers, most notably Lord Byron. Today, it is Switzerland's most visited historic monument, offering a journey through medieval halls, courtyards, and chilling dungeons.",
        "facts": [
            "The oldest parts of the castle date back to at least the 12th century.",
            "Lord Byron's poem 'The Prisoner of Chillon' made the site a major tourist destination in the 19th century.",
            "The castle is actually a complex of 25 buildings and three courtyards.",
            "It is located just outside the town of Montreux, accessible by boat or shore path."
        ]
    },
    "cult-pilatus": {
        "desc": "Mount Pilatus, towering over the city of Lucerne, is one of the most legendary peaks in Central Switzerland. According to local lore, it was once the home of dragons and the resting place of Pontius Pilate. Today, it is accessible by the world's steepest cogwheel railway, which climbs slopes with a gradient of up to 48 percent. From the summit, visitors can enjoy a 360-degree panorama of the Swiss Alps and the numerous branches of Lake Lucerne.",
        "facts": [
            "The Pilatus Railway, opened in 1889, remains the steepest cogwheel train in the world.",
            "The mountain has two peaks, Tomlishorn and Esel, both offering stunning views.",
            "It is a popular year-round destination for hiking, sledding, and paragliding.",
            "The 'Golden Round Trip' combines a boat ride, cogwheel train, and aerial cableway."
        ]
    },
    "cult-cern": {
        "desc": "CERN, the European Organization for Nuclear Research, is the world's largest particle physics laboratory and a symbol of international scientific cooperation. Located on the border between Switzerland and France, it is home to the Large Hadron Collider, a 27-kilometer ring of superconducting magnets. Here, scientists from across the globe collide particles at near-light speeds to study the fundamental laws of the universe. CERN's work has led to groundbreaking discoveries, including the Higgs boson and the birth of the World Wide Web.",
        "facts": [
            "The Large Hadron Collider (LHC) is the most powerful particle accelerator ever built.",
            "CERN was established in 1954 and currently has 23 member states.",
            "The World Wide Web was invented here in 1989 by Sir Tim Berners-Lee.",
            "The facility spans the border, with research sites in both Switzerland and France."
        ]
    },
    "nat-lucerne": {
        "desc": "Lake Lucerne, or the 'Lake of the Four Forest Cantons,' is the historic heart of Switzerland. Its complex, fjord-like shape is surrounded by some of the country's most famous mountains, including Rigi and Pilatus. The lake is the site of the legendary Rütli meadow, where the Swiss Confederation was founded in 1291. Its crystal-clear waters are plied by a fleet of historic paddle steamers, providing one of the most scenic travel experiences in the Alpine region.",
        "facts": [
            "Lake Lucerne is the fourth largest lake in Switzerland.",
            "The lake is famous for its historic fleet of five active paddle steamers.",
            "Its maximum depth reaches 214 meters in the Gersau basin.",
            "The lake's irregular shape gives it a shoreline of over 143 kilometers."
        ]
    },
    "nat-lauterbrunnen": {
        "desc": "The Lauterbrunnen Valley is a breathtaking glacial valley known as the 'Valley of 72 Waterfalls.' Hemmed in by vertical limestone cliffs reaching up to 400 meters, it is one of the most impressive U-shaped valleys in the Alps. The village of Lauterbrunnen serves as the gateway to the Jungfrau Region and the car-free mountain villages of Wengen and Mürren. The valley's sheer scale and the roar of the Staubbach Falls have captivated travelers and poets for centuries.",
        "facts": [
            "The Staubbach Falls drop nearly 300 meters, making them one of Europe's highest free-falling waterfalls.",
            "The valley is home to the Trümmelbach Falls, a series of ten glacier-fed waterfalls inside the mountain.",
            "It served as a major inspiration for J.R.R. Tolkien's Rivendell in 'The Lord of the Rings'.",
            "The valley bottom is relatively flat, contrasting sharply with the vertical cliffs."
        ]
    },
    "nat-interlaken": {
        "desc": "Interlaken is a world-renowned resort town perfectly situated on an alluvial plain between Lake Thun and Lake Brienz. Overlooked by the 'Big Three' peaks—Eiger, Mönch, and Jungfrau—it is the adventure capital of Switzerland. From paragliding over the town's central meadow to setting off for the high Alps, Interlaken offers something for every traveler. The town's grand Victorian hotels and the clear blue waters of the surrounding lakes create a classic Swiss holiday atmosphere.",
        "facts": [
            "The name 'Interlaken' literally means 'between the lakes'.",
            "The town's central park, the Höheweg, provides an unobstructed view of the Jungfrau.",
            "It is one of the oldest and most popular tourist resorts in Switzerland.",
            "Interlaken is a major hub for the Bernese Oberland railway network."
        ]
    }
}

def clean_array(arr, target_lang):
    # Separate English and Romanian items
    ro_items = []
    en_items = []
    for item in arr:
        # Simple heuristic: if it has common English words, it's English
        if re.search(r'\b(the|is|and|of|in|with|to|for|at|on|by)\b', item, re.IGNORECASE):
            en_items.append(item)
        else:
            ro_items.append(item)
    return en_items if target_lang == 'en' else ro_items

# Split the content into POI blocks
pois = re.split(r'(\s+\{\s+id:\s+"[^"]+",)', content)

new_pois = [pois[0]]
for i in range(1, len(pois), 2):
    header = pois[i]
    body = pois[i+1]
    
    # Extract ID
    match = re.search(r'id:\s+"([^"]+)"', header)
    poi_id = match.group(1) if match else None
    
    # Fix descriptionAdvanced
    desc_adv_match = re.search(r'descriptionAdvanced:\s*\{[^}]+\}', body)
    if desc_adv_match:
        block = desc_adv_match.group(0)
        ro_match = re.search(r'ro:\s*"([^"]+)"', block)
        en_match = re.search(r'en:\s*"([^"]+)"', block)
        
        ro_val = ro_match.group(1) if ro_match else ""
        en_val = en_match.group(1) if en_match else ""
        
        # Cleanup language contamination in descriptionAdvanced
        if re.search(r'\b(the|is|and|of)\b', ro_val, re.IGNORECASE) and not re.search(r'\b(este|și|din|cu)\b', ro_val, re.IGNORECASE):
             if not en_val: en_val = ro_val
             ro_val = ""
        
        if poi_id in new_content:
            en_val = new_content[poi_id]["desc"]
            
        new_block = f'descriptionAdvanced: {{\n      de: "",\n      hu: "",\n      ro: "{ro_val}",\n      en: "{en_val}"\n    }}'
        body = body.replace(block, new_block)

    # Fix factsAdvanced
    facts_adv_match = re.search(r'factsAdvanced:\s*\{[^}]+\}', body)
    if facts_adv_match:
        block = facts_adv_match.group(0)
        ro_match = re.search(r'ro:\s*\[(.*?)\]', block, re.DOTALL)
        en_match = re.search(r'en:\s*\[(.*?)\]', block, re.DOTALL)
        
        ro_facts = re.findall(r'"([^"]+)"', ro_match.group(1)) if ro_match else []
        en_facts = re.findall(r'"([^"]+)"', en_match.group(1)) if en_match else []
        
        # Merge all into one list and re-separate
        all_facts = ro_facts + en_facts
        clean_ro = clean_array(all_facts, 'ro')
        clean_en = clean_array(all_facts, 'en')
        
        if poi_id in new_content:
            clean_en = new_content[poi_id]["facts"]
            
        ro_str = '",\n        "'.join(clean_ro)
        en_str = '",\n        "'.join(clean_en)
        
        new_block = f'factsAdvanced: {{\n      de: [],\n      hu: [],\n      ro: [\n        "{ro_str}"\n      ],\n      en: [\n        "{en_str}"\n      ]\n    }}'
        body = body.replace(block, new_block)

    new_pois.append(header)
    new_pois.append(body)

final_content = "".join(new_pois)
with open(file_path, 'w', encoding='utf-8') as f:
    f.write(final_content)
