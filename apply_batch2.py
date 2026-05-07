
import re

file_path = '/mnt/c/Users/User/plizio-repo/lib/visualLab/data/switzerlandPoi.ts'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Dictionary for factsAdvanced
facts_updates = {
    "city-chur": [
        "Chur is widely considered the oldest city in Switzerland, with an 11,000-year history.",
        "It is the only Swiss city with its own ski area, accessible directly by cable car.",
        "The city is the departure point for the famous Bernina and Glacier Express trains.",
        "Its Cathedral of Saint Mary of the Assumption features a magnificent late-Gothic altar."
    ],
    "city-lugano": [
        "Lugano is the third-largest financial center in Switzerland after Zurich and Geneva.",
        "It is known as the 'Monte Carlo of Switzerland' for its celebrity residents.",
        "The city is home to the LAC, a major cultural center for visual arts and music.",
        "Mount Brè and Mount San Salvatore offer panoramic views of the Lugano pre-Alps."
    ],
    "city-st-gallen": [
        "The city grew around the Hermitage of Saint Gall, established in 612 AD.",
        "Its Abbey Library is one of the oldest in the world, containing over 170,000 books.",
        "St. Gallen was a world-famous center for embroidery and textiles in the 19th century.",
        "The Abbey District is a UNESCO site and a masterpiece of Baroque architecture."
    ],
    "city-biel-bienne": [
        "It is the largest bilingual city in Switzerland, with German and French spoken equally.",
        "The city is the global headquarters of the Swatch Group and home to Rolex and Omega.",
        "It is often referred to as the 'World Capital of Watchmaking.'",
        "The city features a well-preserved medieval old town contrasting with high-tech sectors."
    ],
    "city-thun": [
        "Thun Castle, with its four white towers, was built in the late 12th century.",
        "The city is home to the largest military base in Switzerland.",
        "The Aare River flows through the city, often used by river surfers at the sluices.",
        "The Schadau Park features the Thun Panorama, the oldest surviving 360-degree painting."
    ],
    "city-schaffhausen": [
        "Schaffhausen's old town is famous for its 171 oriel windows and painted facades.",
        "The Munot is a circular 16th-century fortress that is the city's emblem.",
        "The city was founded as a place to unload goods that couldn't pass the Rhine Falls.",
        "It is home to the world-renowned watch manufacturer IWC."
    ],
    "city-fribourg": [
        "Fribourg is one of the largest medieval cities in Switzerland, on a rocky promontory.",
        "It is a major linguistic bridge where Swiss-German and French meet and blend.",
        "The Cathedral of St. Nicholas features stained glass by the Polish artist Jozef Mehoffer.",
        "The city's funicular is unique for being powered by filtered sewage water."
    ],
    "city-sion": [
        "Sion is recognizable by its two hilltop fortifications: Tourbillon and Valère.",
        "The Valère Basilica houses one of the world's oldest playable organs.",
        "It is the capital of Valais and the sunniest city in Switzerland.",
        "The surrounding region produces roughly one-third of all Swiss wine."
    ],
    "city-montreux": [
        "Montreux hosts the world-famous Montreux Jazz Festival annually.",
        "A statue of Freddie Mercury stands on the lakefront to commemorate his time here.",
        "The city enjoys a microclimate that allows palm trees to grow along its promenade.",
        "Chillon Castle, just outside the city, is Switzerland's most visited historic building."
    ],
    "hist-castelgrande-bellinzona": [
        "Castelgrande is the oldest and largest of Bellinzona's three UNESCO-listed castles.",
        "It was renovated between 1984 and 1991 by renowned architect Aurelio Galfetti.",
        "The castle's 'Murata' is a massive wall that once stretched across the entire valley.",
        "Its White and Black towers offer 360-degree views of the Ticino region."
    ],
    "hist-montebello-castle": [
        "Montebello is located on a rocky ridge 90 meters above the town of Bellinzona.",
        "The castle's oldest parts date back to the 13th century, built by the Rusca family.",
        "It features a deep moat and defensive walls among the best-preserved in the country.",
        "Today, it houses a civic museum showcasing archaeological finds from the region."
    ],
    "hist-sasso-corbaro": [
        "Sasso Corbaro is the highest of the Bellinzona castles, 230 meters above the town.",
        "It was built in just six months in 1479 to stop the Swiss advance south.",
        "It is a compact, geometric fort without a traditional outer bailey.",
        "The castle offers spectacular views stretching as far as Lake Maggiore."
    ],
    "hist-abbey-of-saint-gall": [
        "The abbey was founded in 719 and was a key Benedictine monastery in Europe.",
        "The 'Plan of Saint Gall' is the only major architectural drawing from the early Middle Ages.",
        "The Abbey Library's main hall is considered one of the most beautiful Rococo rooms.",
        "The district has been a UNESCO World Heritage site since 1983."
    ],
    "hist-morgarten-battlefield": [
        "The Battle of Morgarten in 1315 was a rare peasant victory over professional knights.",
        "The victory solidified the early alliance between the first Swiss forest cantons.",
        "A memorial chapel and monument stand near Lake Ägeri to commemorate the event.",
        "The battle is a cornerstone of Swiss national identity and independence."
    ],
    "hist-sempach-battlefield": [
        "The Battle of Sempach in 1386 was a decisive victory for the Swiss over the Habsburgs.",
        "It is famous for the legendary sacrifice of national hero Arnold von Winkelried.",
        "The victory effectively ended Habsburg attempts to control Swiss territories.",
        "The Battlefield Chapel of St. James stands as a monument to the fallen soldiers."
    ],
    "hist-augusta-raurica": [
        "Augusta Raurica was founded around 44 BC as the oldest Roman colony on the Rhine.",
        "At its peak, the city was home to approximately 20,000 inhabitants.",
        "The site features the best-preserved Roman theater north of the Alps.",
        "A reconstructed Roman house provides a glimpse into daily life during the 2nd century."
    ],
    "hist-gruyeres-castle": [
        "The castle was the residence of the Counts of Gruyères from the 13th to 16th century.",
        "It features a unique blend of medieval fortifications and later Renaissance interiors.",
        "The 'Esplanade' offers stunning views of the Fribourg Pre-Alps.",
        "The town at its feet is the namesake for the world-famous Swiss cheese."
    ],
    "mountain-eiger": [
        "The Eiger's North Face is an 1,800-meter wall, one of the world's great climbing challenges.",
        "It is nicknamed 'Mordwand' (Murder Wall) due to early fatalities.",
        "The Jungfrau Railway runs inside the mountain, with a station at Eigergletscher.",
        "The mountain was first successfully climbed in 1858 via the West Flank."
    ],
    "mountain-jungfrau": [
        "The Jungfrau stands at 4,158 meters and is iconic in the Bernese Alps.",
        "The mountain forms a world-famous trio with the Eiger and Mönch.",
        "It offers breathtaking views of the Aletsch Glacier, the largest in the Alps.",
        "It was first climbed in 1811, the first 4,000m peak in Switzerland to be conquered."
    ],
    "mountain-titlis": [
        "Mount Titlis features the 'Rotair,' the world's first revolving cable car.",
        "The summit at 3,238 meters is home to the highest suspension bridge in Europe.",
        "It is a major center for year-round snow sports with a 5,000-year-old ice cave.",
        "The mountain is located in the Uri Alps, near the monastery village of Engelberg."
    ]
}

# Dictionary for descriptionAdvanced
desc_updates = {
    "city-montreux": "Montreux is an elegant resort town on Lake Geneva, nestled between steep hills and the water. It is world-renowned for the Montreux Jazz Festival and its palm-tree-lined promenade. The city's mild microclimate makes it a haven for Mediterranean vegetation and relaxed lakeside living. It has long been a retreat for artists and musicians, including Charlie Chaplin and Freddie Mercury.",
    "hist-castelgrande-bellinzona": "Castelgrande is the most massive of the three UNESCO-listed fortifications that dominate the Ticino valley. The fortress sits on a rocky peak, providing a strategic view over the surrounding mountain passes. Its extensive walls and two prominent towers are iconic examples of medieval military architecture. Following a major renovation, the site now blends historical stone structures with modern concrete interventions.",
    "hist-montebello-castle": "Montebello Castle is perched on a ridge above Bellinzona, offering a stunning perspective of the valley below. Built in the late 13th century, it features a complex system of moats and walls designed for defense. The castle's interior houses a museum dedicated to the archaeological and civic history of the region. It is often considered the most picturesque of Bellinzona's three castles due to its well-preserved state.",
    "hist-sasso-corbaro": "Sasso Corbaro is the highest of Bellinzona's three castles, isolated on a summit to the southeast of the town. Built in the 15th century by the Sforzas, it was completed in record time to secure the southern Alpine routes. The fort's square, compact design reflects its purely military purpose during the Middle Ages. Its lofty position provides unparalleled views stretching as far as Lake Maggiore.",
    "hist-abbey-of-saint-gall": "The Abbey of Saint Gall is a masterpiece of Baroque architecture and a beacon of early medieval learning. Its legendary library is one of the oldest in the world, housing priceless manuscripts that influenced European culture for centuries. The abbey district, centered around the magnificent cathedral, is recognized as a UNESCO World Heritage site. It serves as the spiritual and historical heart of the city of St. Gallen.",
    "hist-morgarten-battlefield": "The Morgarten battlefield marks the site of a pivotal 1315 conflict between the Swiss Confederates and the Habsburgs. Set against the backdrop of Lake Ägeri, the terrain played a crucial role in the Swiss victory. Today, a memorial chapel and a monument stand as symbols of the early struggle for Swiss independence. The site is a significant destination for those interested in the foundational myths of the Swiss nation.",
    "hist-sempach-battlefield": "Sempach is the site of the 1386 battle where Swiss forces decisively defeated the Austrian army of Duke Leopold III. The victory is famously associated with the sacrifice of Arnold von Winkelried, a hero of Swiss folklore. A commemorative chapel and a stone monument now occupy the peaceful rural landscape where the fighting took place. It remains one of the most important historic pilgrimage sites in Central Switzerland.",
    "hist-augusta-raurica": "Augusta Raurica was a major Roman city and the oldest Roman colony established on the Rhine. The site features remarkably preserved ruins, including an impressive theater that once held thousands of spectators. Excavations have revealed public baths, a forum, and complex residential quarters that illustrate Roman urban life. It is the most significant archaeological park in Switzerland and offers a deep look into the region's ancient past.",
    "hist-gruyeres-castle": "Gruyères Castle is a fairy-tale fortress that overlooks the medieval town and the surrounding Pre-Alps. For centuries, it was the seat of the Counts of Gruyères, who controlled this important agricultural valley. The castle features a unique combination of medieval fortifications and lavish Renaissance interiors. Visitors can explore the French garden and enjoy the panoramic views that have inspired countless travelers.",
    "mountain-eiger": "The Eiger is a world-famous peak in the Bernese Alps, most notorious for its treacherous and sheer North Face. This 1,800-meter wall of rock and ice has long been a legendary challenge for the world's best mountaineers. The mountain towers over the villages of Grindelwald and Lauterbrunnen, forming a majestic Alpine backdrop. Its interior is traversed by the Jungfrau Railway, which offers a unique perspective from within the rock itself.",
    "mountain-jungfrau": "The Jungfrau is one of the most iconic mountains in the Swiss Alps, standing as a centerpiece of the Bernese Oberland. It is famous for being part of the legendary trio that includes the Eiger and the Mönch. The peak offers breathtaking views of the Aletsch Glacier, the largest ice field in the Alps. Accessible via the highest railway in Europe, the Jungfrau is a premier destination for high-altitude sightseeing.",
    "mountain-titlis": "Mount Titlis is a major Alpine destination in Central Switzerland, known for its permanent glacier and year-round snow. It features the world's first revolving cable car, providing panoramic views of the surrounding peaks during the ascent. At the summit, visitors can experience the Titlis Cliff Walk, a spectacular suspension bridge hanging high above the mountain. It is a hub for adventure and snow sports, located just above the monastery village of Engelberg."
}

def apply_updates(content, facts_updates, desc_updates):
    for poi_id in facts_updates.keys():
        # Find the POI block
        pattern_str = r'(id:\s+"' + poi_id + r'".*?)(\n    facts:)'
        
        # Check if descriptionAdvanced needs to be added
        if poi_id in desc_updates:
            # Check if it already has it (though our analysis said no)
            if 'descriptionAdvanced:' not in content[content.find(poi_id):content.find(poi_id)+1000]:
                desc_adv_str = '\n    descriptionAdvanced: {\n      de: "",\n      hu: "",\n      ro: "",\n      en: "' + desc_updates[poi_id] + '"\n    },'
                content = re.sub(pattern_str, r'\1' + desc_adv_str + r'\2', content, flags=re.DOTALL)

        # Now add factsAdvanced after facts: { ... }
        # Re-search because the content might have changed
        pattern_facts = re.compile(r'(id:\s+"' + poi_id + r'".*?facts:\s*\{.*?\n    \},)', re.DOTALL)
        
        facts = facts_updates[poi_id]
        facts_adv_str = '\n    factsAdvanced: {\n      de: [],\n      hu: [],\n      ro: [],\n      en: [\n'
        for f in facts:
            facts_adv_str += f'        "{f}",\n'
        facts_adv_str = facts_adv_str.rstrip(',\n') + '\n      ]\n    },'
        
        content = pattern_facts.sub(r'\1' + facts_adv_str, content)
        
    return content

new_content = apply_updates(content, facts_updates, desc_updates)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Updated POIs 11-30")
