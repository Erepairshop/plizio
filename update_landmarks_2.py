
import re
import os

file_path = "lib/visualLab/data/poiExtraBelizeLandmarksV2.ts"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

seo_data = {
    "half-moon-caye-landmarks-v2": {
        "desc": "Half Moon Caye is a pristine island gem and a designated national monument located at the southeast corner of Lighthouse Reef Atoll. This stunning crescent-shaped island was Belize's first protected area, primarily established to safeguard the nesting colony of the rare Red-footed Booby bird. The island's white sandy beaches and turquoise waters offer world-class snorkeling and diving, with the 'Half Moon Caye Wall' providing some of the most dramatic underwater scenery in the Caribbean. Half Moon Caye is a sanctuary not only for birds but also for endangered sea turtles that nest on its shores. Its remote location and untouched beauty make it an essential destination for serious eco-tourists and birding enthusiasts exploring the outer reefs.",
        "facts": [
            "The island became Belize's first protected area in 1928.",
            "It is home to approximately 4,000 Red-footed Boobies.",
            "The caye covers about 44 acres of land.",
            "It is part of the Lighthouse Reef Atoll, one of only four atolls in the Western Hemisphere.",
            "Lesser Frigatebirds also nest in large numbers on the island.",
            "The island is located 55 miles (88 kilometers) east of Belize City.",
            "An observation tower provides a canopy-level view of the nesting colonies."
        ]
    },
    "mountain-pine-ridge-forest-reserve-landmarks-v2": {
        "desc": "Mountain Pine Ridge Forest Reserve is a dramatic and unexpected landscape in the Cayo District, where the tropical jungle gives way to vast forests of Honduran pine. Established in 1944, this 106,000-acre reserve is characterized by its unique geology, featuring granite outcroppings, cool mountain streams, and some of the most spectacular waterfalls in Central America. The reserve offers a refreshing escape from the coastal heat, with altitudes reaching up to 3,000 feet. Visitors can explore a variety of natural wonders, from the cascading Rio On Pools to the massive Rio Frio Cave and the towering Thousand Foot Falls. Mountain Pine Ridge is a haven for hikers, birdwatchers, and adventure seekers, showcasing the incredible ecological diversity that makes Belize so unique.",
        "facts": [
            "The reserve was established in 1944 and covers over 106,000 acres.",
            "It is the oldest and largest protected forest area in Belize.",
            "The dominant tree species is the Pinus caribaea (Honduran Pine).",
            "It is home to the rare and endangered Orange-breasted Falcon.",
            "The area's geology dates back to the Paleozoic era (over 250 million years ago).",
            "Elevations within the reserve range from 400 to 1,000 meters.",
            "It is located approximately 2 hours' drive south of San Ignacio."
        ]
    },
    "rio-on-pools-landmarks-v2": {
        "desc": "Rio On Pools is a natural aquatic playground located within the Mountain Pine Ridge Forest Reserve, where the Rio On river cascades over a series of smooth granite rocks into crystal-clear pools. This stunning geological feature provides a collection of natural swimming holes and gentle waterslides, making it one of the most popular spots for relaxation and recreation in the Cayo District. The surrounding landscape of pine forest and open granite plains offers a stark and beautiful contrast to the lush jungles found elsewhere in Belize. Rio On Pools is a perfect destination for families and hikers looking for a refreshing dip in cool mountain water after exploring the reserve's many trails, all while enjoying panoramic views of the scenic valley.",
        "facts": [
            "The pools are formed by the erosion of ancient granite bedrock.",
            "Water temperatures are typically cooler than coastal waters, averaging 20-22°C.",
            "The site is accessible via a short hike from the reserve's main road.",
            "It is located about 15 miles inside the Mountain Pine Ridge Forest Reserve.",
            "The pools vary in depth from shallow wading areas to several meters deep.",
            "Natural 'waterslides' are created by the smooth, water-worn granite.",
            "It is a popular spot for picnics and birdwatching."
        ]
    },
    "big-rock-falls-landmarks-v2": {
        "desc": "Big Rock Falls is one of the most magnificent and powerful waterfalls in the Mountain Pine Ridge Forest Reserve. Hidden deep within a lush valley, the waterfall plunges 150 feet over a massive granite cliff into a deep, emerald-green pool below. The journey to the falls involves a steep but rewarding hike through the pine forest, leading to a site of raw, natural beauty. The sheer scale of the falls and the thunderous sound of the water create a truly awe-inspiring atmosphere. Visitors can enjoy swimming in the large pool at the base or sunbathing on the surrounding granite boulders. Big Rock Falls is a must-visit for adventure seekers and nature lovers looking for a more secluded and dramatic experience in Belize's mountain interior.",
        "facts": [
            "The waterfall has a height of approximately 150 feet (45 meters).",
            "It is located on the Privassion River within the forest reserve.",
            "The hike to the falls involves a descent of about 15-20 minutes.",
            "The pool at the base is deep enough for safe swimming and diving.",
            "It is situated approximately 8 miles from the reserve entrance.",
            "The falls are most spectacular during the rainy season (June to November).",
            "It is considered one of the top five most scenic waterfalls in Belize."
        ]
    },
    "rio-frio-cave-landmarks-v2": {
        "desc": "Rio Frio Cave is one of the most accessible and visually stunning caves in Belize, located in the Mountain Pine Ridge Forest Reserve. This massive limestone cavern features a towering 65-foot-high entrance, making it one of the largest cave openings in the country. A clear mountain stream, the Rio Frio, flows directly through the cave, creating a serene and mystical environment. Inside, visitors can marvel at enormous stalactites, freshwater pools, and sandy beaches, all easily explored without the need for specialized equipment. For the ancient Maya, the cave was a sacred site, and its cathedral-like proportions continue to inspire awe in modern visitors. Rio Frio Cave is a perfect introduction to Belize's subterranean wonders, offering natural beauty and archaeological intrigue in a spectacular forest setting.",
        "facts": [
            "The cave entrance stands approximately 65 feet (20 meters) tall.",
            "It is about 1/4 mile (400 meters) long from entrance to exit.",
            "The cave is well-lit by natural light from its massive openings.",
            "It is located near the Augustine settlement in Mountain Pine Ridge.",
            "Large boulders and stalactites inside can exceed 10 meters in height.",
            "The site is easily accessible via a short, flat trail from the parking area.",
            "Maya artifacts and pottery have been found within the cave's chambers."
        ]
    },
    "thousand-foot-falls-landmarks-v2": {
        "desc": "Thousand Foot Falls is a breathtaking natural landmark and the highest waterfall in Central America, plunging from the height of the Maya Mountains into a lush jungle gorge. Despite its name, the waterfall actually drops approximately 1,600 feet, making it a truly monumental sight. Located within its own national park near the Mountain Pine Ridge Forest Reserve, the falls are best viewed from a scenic overlook across the valley, where the silver ribbon of water can be seen cascading against the backdrop of vibrant green forest. The area around the falls is a haven for rare birds, including the Orange-breasted Falcon. While the falls themselves are inaccessible to most, the viewing area provides a profound sense of the scale and untamed beauty of the Belizean highlands.",
        "facts": [
            "The actual height of the waterfall is approximately 1,600 feet (488 meters).",
            "It is the highest waterfall in Central America and the Caribbean.",
            "The site was designated a National Monument in 2004.",
            "The falls are fed by a stream originating in the Mountain Pine Ridge.",
            "It is located within a 1,290-acre national park.",
            "The viewing area is approximately 30 miles from San Ignacio.",
            "The waterfall is often shrouded in mist, especially during the rainy season."
        ]
    },
    "nohoch-cheen-caves-branch-archaeological-reserve-landmarks-v2": {
        "desc": "Nohoch Che'en, also known as the Caves Branch Archaeological Reserve, is a premier destination for one of Belize's most unique adventures: cave tubing. This extensive cave system was formed by the Caves Branch River carving through the limestone hills of the Cayo District over millions of years. For the ancient Maya, these caves were sacred gateways to the underworld, and the reserve protects both the natural environment and significant archaeological sites. Visitors float on inner tubes through massive, cathedral-like caverns filled with stunning stalactites and stalagmites, emerging periodically into the lush tropical rainforest. This blend of relaxation, natural wonder, and historical intrigue makes Nohoch Che'en one of the most popular and unforgettable eco-tours in Belize, suitable for visitors of all ages.",
        "facts": [
            "The reserve covers approximately 30 acres of river and cave systems.",
            "It is located off the George Price Highway, about 37 miles from Belize City.",
            "The river flows through a series of 9 different cave chambers.",
            "Maya artifacts, including pottery and altars, are preserved within the caves.",
            "The cave tubing tour typically takes 1.5 to 2 hours to complete.",
            "Water levels are carefully monitored for visitor safety.",
            "It is home to diverse cave-dwelling species, including fruit bats."
        ]
    },
    "belize-zoo-landmarks-v2": {
        "desc": "The Belize Zoo and Tropical Education Center is a world-class wildlife facility dedicated exclusively to the native animals of Belize. Founded in 1983 as a sanctuary for animals used in a documentary film, it has grown into a premier institution for conservation and environmental education. Unlike traditional zoos, all the animals here were either rescued, orphaned, born at the zoo, or received as gifts from other institutions—none were taken from the wild. The zoo's naturalistic enclosures mimic the animals' native habitats, from the dense jungle to the savannas. Visitors can get up close with iconic species like the jaguar, tapir (the national animal), harpy eagle, and scarlet macaw. The zoo is a heart-warming and educational experience, embodying Belize's deep respect for its natural heritage.",
        "facts": [
            "The zoo was founded in 1983 by Sharon Matola.",
            "It spans 29 acres of tropical savanna and forest.",
            "The zoo houses over 175 animals representing about 45 native species.",
            "It is located at Mile 29 on the George Price Highway.",
            "The Belize Zoo is completely wheel-chair and stroller accessible.",
            "It is famous for its 'Junior Buddy' jaguar and other ambassador animals.",
            "The zoo receives over 60,000 visitors annually, half of whom are local students."
        ]
    },
    "hol-chan-marine-reserve-landmarks-v2": {
        "desc": "Hol Chan Marine Reserve is Belize's oldest and most famous marine protected area, located just off the coast of Ambergris Caye. Its name means 'Little Channel' in Maya, referring to a natural break in the barrier reef that allows a rich exchange of marine life. The reserve is divided into four zones, protecting everything from coral reefs to seagrass beds and mangrove forests. Hol Chan is a paradise for snorkelers and divers, offering crystal-clear waters teeming with vibrant coral formations and an incredible density of marine life. Visitors can swim alongside schools of snappers, groupers, and colorful parrotfish. The reserve is a cornerstone of Belize's marine conservation efforts, ensuring that the beauty and biodiversity of the reef are preserved for future generations while providing world-class eco-tourism experiences.",
        "facts": [
            "The reserve was established in 1987 and covers about 18 square kilometers.",
            "It is part of the Belize Barrier Reef, a UNESCO World Heritage site.",
            "Zone A (the reef) is the most popular area for snorkeling and diving.",
            "Visibility in the water can often exceed 30 meters (100 feet).",
            "It is located only 4 miles (6.4 kilometers) south of San Pedro Town.",
            "Over 160 species of fish have been recorded within the reserve.",
            "Access is strictly regulated to prevent damage to the delicate coral."
        ]
    },
    "shark-ray-alley-landmarks-v2": {
        "desc": "Shark Ray Alley is a thrilling and world-famous snorkeling destination within the Hol Chan Marine Reserve. Historically, fisherman used this area to clean their catches, attracting large numbers of nurse sharks and southern stingrays. Today, this tradition has evolved into one of Belize's most exciting eco-tourism experiences. Visitors can jump into the waist-deep, turquoise water and find themselves surrounded by dozens of gentle nurse sharks and graceful stingrays that are accustomed to human presence. Despite their intimidating appearance, these sharks are harmless to humans, providing a unique opportunity to interact with these magnificent creatures in their natural habitat. Shark Ray Alley is an unforgettable highlight of any trip to San Pedro, offering a rare blend of adrenaline and natural wonder in the heart of the Caribbean.",
        "facts": [
            "Nurse sharks in the alley can grow up to 3 meters (10 feet) in length.",
            "Southern stingrays can have a wingspan of over 1.5 meters (5 feet).",
            "The water depth in the alley is typically only 2 to 3 meters (6-10 feet).",
            "It is located within Zone D of the Hol Chan Marine Reserve.",
            "It was named by 'Skin Diver Magazine' as one of the best dive sites in the world.",
            "Tours usually depart from San Pedro or Caye Caulker.",
            "Feeding of the animals by tourists is strictly prohibited to maintain natural behaviors."
        ]
    },
}

def apply_seo(content, data):
    for poi_id, info in data.items():
        facts_pattern = r'(id:\s*"' + re.escape(poi_id) + r'".*?facts:\s*\{.*?\n\s*\}\s*,)'
        insert_text = f',\n    descriptionAdvanced: {{\n      de: "",\n      hu: "",\n      ro: "",\n      en: "{info["desc"]}"\n    }},\n    factsAdvanced: {{\n      de: [],\n      hu: [],\n      ro: [],\n      en: {info["facts"]}\n    }}'
        content = re.sub(facts_pattern, r'\1' + insert_text, content, flags=re.DOTALL)
    return content

new_content = apply_seo(content, seo_data)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(new_content)
