
import re
import os

file_path = "lib/visualLab/data/poiExtraBelizeLandmarksV2.ts"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

seo_data = {
    "actun-tunichil-muknal-cave-landmarks-v2": {
        "desc": "Actun Tunichil Muknal (ATM) is a world-renowned archaeological cave located in the heart of the Tapir Mountain Nature Reserve. For the ancient Maya, this cave was a sacred 'Cave of the Crystal Sepulchre,' used for ritual sacrifices to appease the rain god, Chaac. The cave is famous for its remarkably well-preserved artifacts, including pottery and skeletal remains that have become fused with the cave's limestone floor over centuries. The most iconic resident is the 'Crystal Maiden,' the skeleton of a young sacrifice whose bones have taken on a sparkling, crystalline appearance. A journey into ATM is a rigorous adventure, involving hiking, swimming, and climbing, providing an unparalleled and visceral connection to the mystical spiritual world of the ancient Maya.",
        "facts": [
            "The cave system is approximately 3 miles (5 kilometers) long.",
            "It was used by the Maya between 250 and 900 AD.",
            "The 'Crystal Maiden' skeleton is believed to be over 1,000 years old.",
            "Archaeologists have cataloged over 1,400 artifacts within the cave.",
            "Only a limited number of licensed guides are allowed to lead tours.",
            "Cameras have been banned since 2012 to protect the artifacts from damage.",
            "The main ceremonial chamber is located about 1 mile inside the cave."
        ]
    },
    "cahal-pech-ruins-landmarks-v2": {
        "desc": "Cahal Pech, perched on a high ridge overlooking the twin towns of San Ignacio and Santa Elena, is one of the oldest Maya sites in the Belize River Valley. Its name, which means 'Place of Ticks' in modern Maya, belies the grandeur of this ancient royal acropolis. The site served as the palatial residence for an elite Maya family during the Classic period, featuring a dense complex of 34 structures, including seven plazas, temples, and two ball courts. Cahal Pech is celebrated for its intimate and complex architectural layout, with narrow passages and interconnected courtyards that provide a sense of the private lives of Maya royalty. The site's elevated position offers breathtaking views of the surrounding valley, making it a favorite for visitors seeking both history and natural beauty.",
        "facts": [
            "Cahal Pech was settled as early as 1200 BC and occupied until 900 AD.",
            "The site's tallest temple rises approximately 25 meters (77 feet).",
            "It consists of 34 major structures located within a small, core area.",
            "Archaeologists discovered a royal burial containing jade and shell ornaments.",
            "The site is located just a short, steep walk from downtown San Ignacio.",
            "It is surrounded by a lush forest reserve that is home to many bird species.",
            "Research suggests it was a major administrative and ceremonial center."
        ]
    },
    "xunantunich-ruins-landmarks-v2": {
        "desc": "Xunantunich, or 'Stone Woman,' is a majestic Maya archaeological site located near the village of San Jose Succotz, just a few miles from the Guatemalan border. The site is dominated by the towering pyramid known as 'El Castillo,' which serves as one of the tallest structures in Belize and provides panoramic views of the entire Mopan River valley. Xunantunich was a major ceremonial center during the Late and Terminal Classic periods, flourishing even as other Maya cities began to decline. The site is famous for its elaborate stucco friezes on El Castillo, depicting Maya deities and celestial events. To reach the ruins, visitors must cross the Mopan River on a charming, hand-cranked ferry, adding a touch of traditional adventure to the historical experience.",
        "facts": [
            "El Castillo stands approximately 40 meters (130 feet) tall.",
            "The site reached its peak population between 600 and 800 AD.",
            "The stucco frieze on El Castillo represents the Sun God and cosmic symbols.",
            "The name Xunantunich refers to a ghost of a woman seen at the site since 1892.",
            "It consists of six plazas and more than 25 temples and palaces.",
            "The site was the first in Belize to be opened for modern archaeological tourism.",
            "It is located about 70 miles west of Belize City."
        ]
    },
    "caracol-ruins-landmarks-v2": {
        "desc": "Caracol is the largest and arguably the most powerful ancient Maya city in Belize, hidden deep within the Chiquibul Forest Reserve. At its peak, Caracol covered an area larger than modern-day Belize City and supported a population of over 140,000 people. The site is dominated by the massive 'Caana' (Sky Palace) pyramid, which remains the tallest man-made structure in Belize. Caracol was a dominant military power, famously defeating the great city of Tikal in 562 AD. The site's history is meticulously recorded on numerous altars and stelae, detailing its victories and royal successions. Exploring Caracol is a true expedition, taking visitors through pristine rainforest to discover a vast network of plazas, causeways, and towering temples that once ruled the Maya world.",
        "facts": [
            "The Caana pyramid rises 43 meters (141 feet) above the plaza floor.",
            "The site core covers about 15 square miles (38 square kilometers).",
            "Archaeologists have identified over 30,000 structures at Caracol.",
            "It features more than 20 miles (32 kilometers) of ancient stone causeways.",
            "The site was 'rediscovered' in 1937 by a mahogany logger named Rosa Mai.",
            "It contains over 100 known tombs, including those of elite rulers.",
            "Caracol is located approximately 50 miles south of San Ignacio."
        ]
    },
    "great-blue-hole-landmarks-v2": {
        "desc": "The Great Blue Hole is one of the world's most iconic natural wonders, a massive submarine sinkhole located near the center of Lighthouse Reef off the coast of Belize. This perfectly circular patch of deep blue water is over 300 meters across and 124 meters deep, surrounded by the shallow, turquoise waters of the reef. Formed during several episodes of quaternary glaciation when sea levels were much lower, the hole was originally a dry cave system. As the ocean rose, the caves flooded and the roof collapsed, creating this spectacular geological feature. Famous explorer Jacques Cousteau brought global attention to the site in 1971, declaring it one of the top five diving spots on Earth. Today, it is a UNESCO World Heritage site and a dream destination for divers and aerial tourists alike.",
        "facts": [
            "The hole is approximately 318 meters (1,043 feet) in diameter.",
            "It has a depth of approximately 124 meters (407 feet).",
            "Divers can find massive stalactites up to 12 meters (40 feet) long at deeper levels.",
            "It is part of the Belize Barrier Reef Reserve System, a UNESCO site.",
            "The site is located about 70 kilometers (43 miles) from the mainland.",
            "Crystal-clear visibility often exceeds 30 meters (100 feet).",
            "It is home to several species of sharks, including Caribbean reef sharks."
        ]
    },
    "cockscomb-basin-wildlife-sanctuary-landmarks-v2": {
        "desc": "Cockscomb Basin Wildlife Sanctuary is a pioneer in global conservation, recognized as the world's first dedicated jaguar preserve. Located in the shadow of the Maya Mountains, this vast protected area encompasses over 128,000 acres of lush tropical rainforest, providing a critical habitat for Belize's five wild cat species. While the elusive jaguar is the star of the sanctuary, the area is also a paradise for birdwatchers and nature lovers, with over 300 bird species and a diverse array of flora and fauna. The sanctuary features an extensive network of hiking trails that lead to stunning waterfalls, scenic overlooks, and clear jungle streams. Cockscomb Basin is not only a refuge for wildlife but also a vital center for research and education, highlighting Belize's commitment to preserving its natural heritage.",
        "facts": [
            "The sanctuary covers approximately 200 square miles (518 square kilometers).",
            "It was officially established as a wildlife sanctuary in 1986.",
            "It is home to an estimated population of 60 to 80 jaguars.",
            "Victoria Peak, Belize's second-highest mountain, is located within the park.",
            "The area receives over 100 inches of rainfall annually.",
            "There are over 12 miles of well-maintained hiking and nature trails.",
            "It is located about 20 miles south of Dangriga Town."
        ]
    },
    "laughing-bird-caye-landmarks-v2": {
        "desc": "Laughing Bird Caye is a stunningly beautiful national park and UNESCO World Heritage site located on the western side of the Victoria Channel, off the coast of Placencia. This long, narrow island is a 'faro'—a shelf atoll with a central lagoon—making it a unique geological feature within the Belize Barrier Reef. The caye is named after the laughing gull, which once nested in large numbers on its sandy shores. Today, the park is protected for its exceptional marine biodiversity and pristine coral reef ecosystems, offering some of the best snorkeling and diving experiences in Belize. The crystal-clear, calm waters around the island are teeming with colorful fish, rays, and sea turtles, making it an idyllic destination for eco-tourists and underwater enthusiasts seeking a tranquil Caribbean escape.",
        "facts": [
            "The national park was established in 1991 and covers 10,119 acres.",
            "It was designated as part of the UNESCO World Heritage site in 1996.",
            "The island itself is only about 1.4 acres in size.",
            "It is located approximately 11 miles (18 kilometers) off the coast of Placencia.",
            "The central lagoon reaches depths of up to 40 meters (130 feet).",
            "It is a critical habitat for the endangered hawksbill sea turtle.",
            "Rangers are stationed on the island year-round to ensure protection."
        ]
    },
    "altun-ha-ruins-landmarks-v2": {
        "desc": "Altun Ha, whose name means 'Rockstone Pond' in Maya, is a significant archaeological site located just 30 miles north of Belize City. During its peak in the Classic period, it served as a major trading hub and ceremonial center, connecting the Caribbean coast with the interior Maya cities. Altun Ha is most famous for the 1968 discovery of the 'Jade Head'—the largest carved jade object ever found in the Maya world—representing the Sun God, Kinich Ahau. The site consists of two main plazas and thirteen structures, including the impressive Temple of the Masonry Altars. Its accessibility from the coast and the well-preserved nature of its central plazas make it one of the most visited and photographed Maya sites in Belize, offering a compelling look at the wealth and artistry of the ancient Maya.",
        "facts": [
            "The site covers an area of approximately 25 square miles.",
            "The Temple of the Masonry Altars stands 16 meters (54 feet) tall.",
            "The 'Jade Head' weighs 4.42 kilograms (9.75 pounds).",
            "Altun Ha was occupied from about 200 BC until 900 AD.",
            "It is the source of the logo for Belize's national beer, Belikin.",
            "The site features a large ancient water reservoir or 'aguada'.",
            "More than 300,000 visitors tour the site annually."
        ]
    },
    "lamanai-ruins-landmarks-v2": {
        "desc": "Lamanai, which translates to 'Submerged Crocodile' in Yucatec Maya, is one of the most spectacular and longest-occupied archaeological sites in Belize. Located on the banks of the New River Lagoon, the city was inhabited for over 3,000 years, from the Preclassic period until well into the colonial era. The journey to the site is an adventure in itself, involving a scenic boat ride through lush mangroves and tropical forest teeming with wildlife. Lamanai is renowned for its monumental architecture, including the High Temple, the Mask Temple—decorated with two massive stone faces—and the Jaguar Temple. The site's unique position on the lagoon allowed it to flourish as a major trade center, and today it offers an immersive experience where ancient history and vibrant jungle life coexist in perfect harmony.",
        "facts": [
            "The site's occupation lasted from roughly 1500 BC to 1700 AD.",
            "The High Temple rises 33 meters (108 feet) above the jungle floor.",
            "The Mask Temple features 4-meter tall limestone masks of Maya rulers.",
            "The site contains over 700 identified structures in its core area.",
            "Lamanai was a major center for the production of copper artifacts.",
            "It is located approximately 35 miles (56 kilometers) south of Orange Walk Town.",
            "Spanish colonial church ruins are also found within the archaeological reserve."
        ]
    },
    "st-hermans-blue-hole-national-park-landmarks-v2": {
        "desc": "St. Herman's Blue Hole National Park is a versatile nature reserve located along the Hummingbird Highway, offering a perfect blend of cave exploration and refreshing natural beauty. The park's main attractions are the St. Herman's Cave and the Blue Hole cenote—not to be confused with the marine Great Blue Hole. St. Herman's Cave is a massive limestone cavern used by the ancient Maya for ceremonial purposes, featuring impressive stalactites and a clear stream flowing through its depths. A short hike through the jungle leads to the Blue Hole, a sapphire-blue karst sinkhole fed by an underground river, providing a cool and inviting spot for swimming. The park is also a haven for biodiversity, with over 200 species of birds and a variety of tropical mammals making it a must-visit for eco-tourists exploring the Cayo District.",
        "facts": [
            "The park encompasses over 575 acres of protected rainforest.",
            "The Blue Hole cenote has a depth of about 8 meters (25 feet).",
            "St. Herman's Cave extends for approximately 1.5 miles (2.4 kilometers).",
            "The park is located 12 miles south of Belmopan city.",
            "It is home to rare species like the jaguaroundi and the tapir.",
            "There are over 3 miles of well-marked nature trails within the park.",
            "The cave remains a significant site for archaeological research."
        ]
    },
    "community-baboon-sanctuary-landmarks-v2": {
        "desc": "The Community Baboon Sanctuary (CBS) is a globally recognized model for community-based conservation, located in the Belize River Valley. Despite its name, the sanctuary is dedicated to the protection of the Black Howler Monkey, locally known as the 'baboon.' Established in 1985 by a group of local farmers and scientists, the sanctuary encompasses seven villages where residents have voluntarily pledged to preserve the monkeys' forest habitat on their private lands. This grassroots effort has resulted in a thriving population of over 4,000 howler monkeys, one of the densest in Central America. Visitors can enjoy guided tours through the riverine forest, where the thunderous roars of the monkeys provide a soundtrack to an authentic eco-experience that directly supports the local economy and sustainable land management.",
        "facts": [
            "The sanctuary covers approximately 20 square miles of private and communal land.",
            "It was the first community-managed wildlife reserve in the world.",
            "The black howler monkey is one of the largest monkeys in the Americas.",
            "The sanctuary is located about 30 miles (48 kilometers) from Belize City.",
            "Over 200 families participate in the conservation program.",
            "The area is home to over 200 bird species and many tropical plants.",
            "The visitor center provides detailed exhibits on howler monkey biology."
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
