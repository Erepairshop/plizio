
import re
import os

file_path = "lib/visualLab/data/poiExtraBelizeHistoryV2.ts"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

seo_data = {
    "forest-home-village-history-v2": {
        "desc": "Forest Home is a village in the Toledo District with a unique and complex history linked to the aftermath of the American Civil War. In the 1860s, a group of Confederate refugees from the southern United States settled here, attempting to establish a new plantation economy based on sugarcane and cotton. While most of the original American settlers eventually left or integrated into the local population, the legacy of their presence remains in the village's name and its agricultural traditions. Today, Forest Home is a diverse community where Creole, East Indian, and Maya cultures intersect. The village serves as a reminder of Belize's long history as a sanctuary for displaced groups and the varied influences that have shaped its southern landscape.",
        "facts": [
            "The village was settled by ex-Confederates around 1867.",
            "It is located about 4 miles west of Punta Gorda Town.",
            "The settlers introduced advanced sugarcane processing techniques to the region.",
            "Forest Home remains a center for small-scale sugar and citrus production.",
            "The community is known for its vibrant East Indian cultural heritage.",
            "It is situated along the main road leading to the Guatemalan border.",
            "The population is approximately 500 residents."
        ]
    },
    "bake-pot-ruin-history-v2": {
        "desc": "Baking Pot is a major Maya archaeological site located in the heart of the Belize River Valley. For over a millennium, it served as a vital regional capital, controlling trade and agriculture along the river's fertile banks. The site is characterized by its grand ceremonial architecture, including two massive acropolis complexes and numerous plazas. Baking Pot is particularly significant for its evidence of continuous occupation into the Terminal Classic and early Postclassic periods, suggesting it was one of the last great centers to maintain its political structure during the general Maya collapse. Today, the site is a hub for archaeological research, providing deep insights into the resilience and adaptation of Maya communities in the face of environmental and social change.",
        "facts": [
            "Baking Pot was occupied from approximately 600 BC to 1200 AD.",
            "The site features two large ceremonial groups connected by a 300-meter sacbe.",
            "It is located near the Central Farm agricultural station in Cayo.",
            "The main pyramid in Group A stands over 15 meters (50 feet) tall.",
            "Archaeologists have discovered elaborate elite residences and burials on site.",
            "It was a major center for the production and distribution of Belize Valley pottery.",
            "The site is currently the focus of the Belize Valley Archaeological Reconnaissance Project."
        ]
    },
    "pacbitun-ruins-history-v2": {
        "desc": "Pacbitun, which means 'Stones Set in the Sky' in Maya, is a medium-sized ceremonial center located in the foothills of the Maya Mountains. This site is renowned for its impressive number of monuments, including stelae and altars, which is unusual for a center of its size. Pacbitun served as a strategic link between the mountain resources, like granite and slate, and the lowland agricultural communities. The site features a well-defined ceremonial core with several pyramids, a ball court, and elite residential compounds. Archaeological research at Pacbitun has also revealed a significant musical heritage, with the discovery of numerous clay flutes and figurines. Its location at the edge of the Pine Ridge forest gives the site a unique ecological setting, blending mountain and tropical rainforest environments.",
        "facts": [
            "Pacbitun reached its peak during the Late Classic period (600–900 AD).",
            "It contains at least 20 stelae and 8 altars.",
            "The site is located near the village of San Antonio in the Cayo District.",
            "It features two main plazas and several smaller courtyards.",
            "Evidence of large-scale slate tool production has been found on site.",
            "The highest pyramid stands approximately 10 meters (33 feet) tall.",
            "Pacbitun is known for its well-preserved ancient musical instruments."
        ]
    },
    "negroman-ruin-history-v2": {
        "desc": "Tipan Chen Uitz, popularly known as Negroman, is a large and largely unexcavated Maya site hidden within the rugged Vaca Plateau. Its ancient name translates to 'Fortress at the Well in the Mountain,' reflecting its defensive position and its proximity to a vital water source. During the Classic period, Tipan Chen Uitz was a powerful regional center that likely controlled the surrounding forest resources and trade routes through the mountains. The site features a massive ceremonial core with towering pyramids and elaborate palace complexes that rival those of much better-known sites. Because it is difficult to access and still mostly covered by jungle, Negroman offers a true sense of adventure and a rare opportunity to see an ancient Maya city in its natural, undisturbed state.",
        "facts": [
            "Tipan Chen Uitz is one of the largest sites in the Cayo District.",
            "It features at least 10 major plazas and over 100 identified structures.",
            "The main acropolis rises nearly 30 meters (100 feet) above the forest floor.",
            "The site was first scientifically mapped in the late 1990s.",
            "It is located deep within the Vaca Forest Reserve.",
            "Archaeologists have found evidence of strong ties to the city of Caracol.",
            "Access usually requires a 4x4 vehicle and a local guide."
        ]
    },
    "spanish-church-lamanai-history-v2": {
        "desc": "The Spanish Church ruins at Lamanai represent a poignant chapter in the history of cultural conflict and resistance in colonial Belize. In the 16th century, Spanish missionaries built two churches on the site of the ancient Maya city, attempting to convert the local population to Christianity and consolidate Spanish control. However, the Maya of Lamanai fiercely resisted these efforts, eventually burning the churches and forcing the Spanish to retreat. Today, the skeletal remains of the brick and stone structures stand in stark contrast to the surrounding Maya temples, serving as a powerful monument to the failure of the Spanish mission and the enduring strength of Maya identity. The ruins provide invaluable archaeological evidence of the transition between the ancient Maya world and the beginning of the colonial era in the Caribbean.",
        "facts": [
            "The first church was built around 1544, and the second in the early 1600s.",
            "They are located within the Lamanai Archaeological Reserve.",
            "The churches were built using stones from nearby Maya structures.",
            "Archaeologists found a 'Maya idol' buried beneath the altar of one church.",
            "The site is accessible via a boat trip on the New River.",
            "Lamanai was one of the few sites where the Maya successfully expelled the Spanish.",
            "The ruins include a unique open-air chapel design."
        ]
    },
    "actun-balam-history-v2": {
        "desc": "Actun Balam, or 'Jaguar Paw Cave,' is an archaeologically significant site located in the karst landscape of the Cayo District. For the ancient Maya, caves were sacred portals to Xibalba, the underworld, and Actun Balam was used extensively for religious ceremonies and offerings. The cave is famous for its intricate rock formations and the discovery of numerous Maya artifacts, including pottery vessels and ritual items. One of its most striking features is a set of ancient handprints and what appear to be jaguar paw prints preserved in the flowstone. Exploring Actun Balam provides a deep connection to the spiritual world of the Maya, illustrating their profound reverence for the natural subterranean features of their environment. The cave remains a place of mystery and cultural importance, protected for its historical and archaeological value.",
        "facts": [
            "The cave is part of the larger Caves Branch river system.",
            "It contains evidence of ritual use dating back to the Classic period.",
            "The name comes from ancient markings found deep within the cave.",
            "It features impressive stalactites, stalagmites, and crystal formations.",
            "Access is strictly regulated to protect the sensitive environment and artifacts.",
            "The cave was used for 'bloodletting' and other elite Maya rituals.",
            "It is located within a private nature reserve near the Hummingbird Highway."
        ]
    },
    "che-chem-ha-cave-history-v2": {
        "desc": "Che Chem Ha Cave is a remarkable Maya ceremonial site discovered by a local farmer in the 1980s. Unlike many caves that were looted, Che Chem Ha remained virtually untouched for centuries, preserving a staggering collection of intact Maya pottery. The cave's interior is filled with hundreds of vessels, from small bowls to massive grain storage jars, many still resting in their original positions on high ledges and in hidden niches. These artifacts suggest that the cave was used primarily as a ritual storehouse, perhaps associated with agricultural ceremonies and the honoring of rain deities. Today, the cave is managed by the family that discovered it, offering visitors a rare and authentic opportunity to see ancient Maya history exactly as it was found, within a stunning natural setting of limestone chambers.",
        "facts": [
            "The cave was discovered in 1989 by William Morales while hunting.",
            "It contains over 200 intact pieces of Maya pottery.",
            "Radiocarbon dating indicates ritual use between 300 and 900 AD.",
            "The main entrance is located on a steep hillside in the Vaca Plateau.",
            "Guided tours are led by members of the Morales family.",
            "The cave features several narrow passages and large, high-ceilinged chambers.",
            "It is located about 16 miles south of San Ignacio Town."
        ]
    },
    "actun-loch-tunich-history-v2": {
        "desc": "Actun Loch Tunich, popularly known as the 'Black Hole Drop,' is a massive karst sinkhole located in the heart of the Belizean jungle. While it is a premier destination for extreme adventure seekers, the site also holds significant historical and archaeological interest. For the ancient Maya, this giant sinkhole was a formidable and sacred feature of the landscape, and evidence of their presence has been found in the caves at its base. The sinkhole drops over 300 feet through the forest canopy to a hidden world of ancient trees and limestone formations. For the Maya, such locations were often associated with the gods of the underworld and were sites of profound spiritual significance. Today, descending into Actun Loch Tunich offers a breathtaking journey through both the natural beauty and the ancient cultural history of Belize's rugged interior.",
        "facts": [
            "The sinkhole is approximately 300 feet (92 meters) deep.",
            "It is located within the Actun Box Ch'iik system in the Cayo District.",
            "The descent requires a professional rappelling setup and guide.",
            "Maya artifacts, including pottery shards, have been found in the base caves.",
            "The surrounding forest is home to howler monkeys and diverse birdlife.",
            "It is considered one of the most challenging adventure tours in Belize.",
            "The name 'Actun Loch Tunich' means 'The Stone Hole' in Maya."
        ]
    },
    "minanha-ruins-history-v2": {
        "desc": "Minanha is a major, though relatively recently explored, Maya city situated on a high ridge in the North Vaca Plateau. During the Late Classic period, it emerged as a significant regional power, likely serving as a buffer state between the great rival cities of Caracol and Naranjo. The site features a sophisticated architectural layout, including an elite residential acropolis, numerous plazas, and a ceremonial ball court. Minanha is particularly notable for its rapid growth and subsequent sudden abandonment, providing archaeologists with a clear case study of the political volatility that characterized the Maya lowlands during the 8th and 9th centuries. Because of its remote location, the ruins remain largely covered by lush jungle, offering a serene and evocative glimpse into the rise and fall of ancient Maya dynasties.",
        "facts": [
            "Minanha reached its peak between 675 and 800 AD.",
            "The site features a large royal palace complex known as the 'North Acropolis'.",
            "It is located about 15 miles south of San Ignacio in the Cayo District.",
            "The site was largely unknown to the scientific community until the 1990s.",
            "Evidence suggests the city was abandoned suddenly around 825 AD.",
            "Archaeologists have mapped over 100 structures within the site core.",
            "It is situated on one of the highest points in the Vaca Plateau."
        ]
    },
    "ix-chel-shrine-history-v2": {
        "desc": "The Ix Chel Shrine at Chaa Creek is a modern tribute to one of the most important deities in the Maya pantheon. Ix Chel was the goddess of the moon, fertility, medicine, and weaving, and she was revered by Maya women throughout the region. The shrine is located along a medicinal plant trail, connecting the ancient knowledge of healing with the natural environment of the Macal River valley. While the shrine itself is a contemporary installation, it is built in a style that honors ancient traditions and provides a space for visitors to reflect on the enduring spiritual legacy of the Maya. Surrounded by lush tropical gardens and the sounds of the jungle, the shrine serves as an educational and meditative focal point, celebrating the vital role of the feminine in Maya culture and the deep connection between health and nature.",
        "facts": [
            "The shrine is dedicated to the Maya Moon Goddess, Ix Chel.",
            "It is located on the 400-acre Chaa Creek nature reserve in Cayo.",
            "The site is a key part of the Rainforest Medicine Trail.",
            "Ix Chel is traditionally associated with water and the rainbow.",
            "The shrine features symbolic representations of Maya weaving and healing.",
            "It serves as an educational site for students learning about Maya mythology.",
            "Visitors can learn about over 50 types of traditional medicinal plants nearby."
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
