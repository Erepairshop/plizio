
import re
import os

file_path = "lib/visualLab/data/poiExtraBelizeCitiesV2.ts"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

seo_data = {
    "corozal-town-cities-v2": {
        "desc": "Corozal Town is the northernmost urban center in Belize, offering a peaceful and laid-back atmosphere just miles from the Mexican border. Founded in 1848 by refugees from the Caste War of Yucatan, the town has a strong Mestizo influence that is reflected in its culture, cuisine, and language. Corozal is beautifully situated on the emerald-green waters of Corozal Bay, providing a scenic backdrop for the town's park and waterfront walk. The area is also rich in ancient history, with the Maya ruins of Santa Rita located right on the town's edge. Today, Corozal is a popular destination for retirees and travelers seeking a quiet, authentic Belizean experience away from the busier tourist hubs.",
        "facts": [
            "Corozal Town was founded in 1848 by Maya and Mestizo refugees.",
            "It is the administrative capital of the Corozal District.",
            "The town is located approximately 9 miles (14 kilometers) from the Mexican border.",
            "It sits on a shallow, turquoise bay that is part of the Caribbean Sea.",
            "The population of Corozal Town is approximately 13,000 residents.",
            "It features the Santa Rita Maya ruins, once a major trading center.",
            "The town serves as a gateway for trade and travel between Belize and Mexico."
        ]
    },
    "orange-walk-town-cities-v2": {
        "desc": "Orange Walk Town, affectionately known as 'Sugar City,' is the agricultural and industrial heart of northern Belize. Located on the banks of the New River, the town is the center of the country's sugarcane industry, which is evident in the sprawling fields and the historic sugar mill nearby. Orange Walk is a vibrant, multi-ethnic community where the scents of traditional Mestizo cooking and the sounds of bustling markets fill the air. It is the primary gateway to the spectacular Lamanai archaeological site, with scenic boat tours departing from the town's docks. Orange Walk offers visitors a unique blend of industrial heritage, colonial history, and a warm, welcoming community that prides itself on its hard-working spirit.",
        "facts": [
            "Orange Walk is the fourth-largest town in Belize.",
            "It is located 53 miles (85 kilometers) north of Belize City.",
            "The town is the headquarters of the Belize sugar industry.",
            "It sits on the New River, an ancient Maya trade route.",
            "The population is approximately 17,000 residents.",
            "Orange Walk is famous for its 'tacos,' a beloved local street food.",
            "It was the site of a major battle during the Caste War in 1872."
        ]
    },
    "belize-city-cities-v2": {
        "desc": "Belize City is the historic soul and largest urban center of the country, serving as the main gateway for international travelers. Located on a peninsula where the Belize River meets the Caribbean Sea, the city is a vibrant tapestry of colonial architecture, bustling markets, and diverse cultures. While no longer the capital, it remains the commercial and financial hub of the nation. Visitors can explore landmarks like the Baron Bliss Lighthouse, St. John's Cathedral—the oldest Anglican church in Central America—and the historic Swing Bridge. Belize City's deep-water port and busy water taxi terminals connect the mainland with the stunning cayes, making it a vital crossroads for trade, tourism, and the unique Belizean way of life.",
        "facts": [
            "Belize City was the national capital until 1970.",
            "It is the largest city in Belize with a population of over 60,000.",
            "The city was founded by British lumbermen in the mid-17th century.",
            "It is home to St. John's Cathedral, built in 1812.",
            "The historic Swing Bridge is the only manually operated bridge of its kind in the world.",
            "Belize City is the main hub for the country's water taxi services.",
            "It is located at the mouth of the Belize River."
        ]
    },
    "belmopan-cities-v2": {
        "desc": "Belmopan is the purpose-built capital of Belize, established in 1970 following the devastation of Belize City by Hurricane Hattie. Located in the geographical heart of the country, the city is known as the 'Garden City' due to its lush greenery, wide boulevards, and numerous parks. Belmopan is the administrative and political center of the nation, housing the National Assembly, government ministries, and many international embassies. Despite being one of the smallest capital cities in the world, it offers a peaceful and well-organized environment with a growing cultural scene. Its central location makes it an ideal base for exploring the inland natural wonders of the Cayo District, from caves and waterfalls to lush mountain reserves.",
        "facts": [
            "Belmopan became the capital of Belize in 1970.",
            "It is one of the smallest capital cities in the world by population.",
            "The name is a portmanteau of 'Belize' and 'Mopan' (a local river).",
            "The National Assembly building is designed to resemble an ancient Maya temple.",
            "The city is located at an elevation of 76 meters (250 feet) above sea level.",
            "The population is approximately 25,000 residents.",
            "It is situated about 50 miles inland from the Caribbean coast."
        ]
    },
    "san-ignacio-cities-v2": {
        "desc": "San Ignacio is the vibrant cultural and adventure hub of western Belize, nestled in the foothills of the Maya Mountains at the confluence of the Macal and Mopan rivers. Together with its sister town Santa Elena, it forms the largest urban area in the Cayo District. San Ignacio is a melting pot of Maya, Mestizo, and Mennonite cultures, reflected in its bustling Saturday market and diverse culinary scene. The town is the ultimate base for exploring the region's ancient Maya ruins, including Cahal Pech and Xunantunich, as well as numerous caves and nature reserves. With its friendly atmosphere, lively pedestrian streets, and proximity to untamed jungle, San Ignacio captures the adventurous spirit and rich heritage of inland Belize.",
        "facts": [
            "San Ignacio is the second-largest urban center in Belize.",
            "It is located 72 miles (116 kilometers) west of Belize City.",
            "The town is connected to Santa Elena by the historic Hawksworth Bridge.",
            "It serves as the main tourism hub for the Cayo District.",
            "The population of the San Ignacio/Santa Elena area is over 20,000.",
            "It is the gateway to the Mountain Pine Ridge Forest Reserve.",
            "The town's Saturday market is the largest and most famous in Belize."
        ]
    },
    "benque-viejo-del-carmen-cities-v2": {
        "desc": "Benque Viejo del Carmen is the westernmost town in Belize, situated just steps from the Guatemalan border on the banks of the Mopan River. This charming town is steeped in Mestizo culture and tradition, known for its well-preserved colonial-style houses and vibrant community festivals. Benque, as it is locally known, has a rich history tied to the chicle and mahogany industries that once dominated the region. Today, it is a center for arts and education, housing several cultural institutions and providing a peaceful alternative to the busier tourist towns. Its proximity to the Xunantunich ruins and the scenic river valley makes Benque a hidden gem for travelers seeking a quiet, culturally rich experience in the heart of the Cayo District.",
        "facts": [
            "Benque Viejo was founded in the mid-19th century.",
            "It is located only 1 mile (1.6 kilometers) from the border with Guatemala.",
            "The town is known for its elaborate Holy Week processions and sawdust carpets.",
            "The population is approximately 7,000 residents.",
            "It sits on the western bank of the Mopan River.",
            "The name means 'Old Bank of the Virgin' in Spanish.",
            "It was a major center for the chicle (gum) industry in the early 20th century."
        ]
    },
    "dangriga-cities-v2": {
        "desc": "Dangriga, formerly known as Stann Creek Town, is the cultural capital of the Garifuna people in Belize. Located on the central coast where the North Stann Creek River meets the sea, the town is a vibrant center for music, art, and traditional culture. Dangriga is the birthplace of Punta rock, and the rhythmic beating of Garifuna drums can often be heard echoing through its streets. The town is the main gateway to the southern cayes and the Cockscomb Basin Wildlife Sanctuary. Every November, Dangriga comes alive for Garifuna Settlement Day, a national holiday celebrating the arrival of the Garifuna people in 1832. With its authentic atmosphere and deep cultural roots, Dangriga offers a unique and soulful glimpse into Belize's diverse heritage.",
        "facts": [
            "Dangriga is the largest town in southern Belize.",
            "The name means 'standing waters' in the Garifuna language.",
            "It is the administrative capital of the Stann Creek District.",
            "The population is approximately 10,000 residents.",
            "It is the primary center for the production of citrus and bananas in Belize.",
            "The Gulisi Garifuna Museum in Dangriga showcases the history of the Garifuna people.",
            "It is located about 105 miles (170 kilometers) by road from Belize City."
        ]
    },
    "punta-gorda-cities-v2": {
        "desc": "Punta Gorda, often referred to as 'PG' by locals, is the southernmost town in Belize and the gateway to the untamed Toledo District. This remote and peaceful town is beautifully situated on the shores of the Caribbean Sea, offering views of the distant Guatemalan and Honduran coastlines. Punta Gorda is a fascinating cultural crossroads, home to Maya, Garifuna, East Indian, and Mestizo communities living in harmony. The town is known for its authentic, off-the-beaten-path feel, serving as a base for exploring remote Maya villages, ancient ruins like Lubaantun, and pristine rainforests. With its bustling fish markets, traditional drumming, and warm tropical breeze, Punta Gorda captures the essence of the 'Deep South' of Belize, where tradition and nature remain deeply intertwined.",
        "facts": [
            "Punta Gorda is the capital of the Toledo District.",
            "It is located approximately 210 miles (338 kilometers) from Belize City.",
            "The town has a population of about 6,000 residents.",
            "It is the main hub for trade and transport in the southernmost part of Belize.",
            "PG is famous for its annual Chocolate Festival held in May.",
            "Regular boat ferries connect Punta Gorda with Puerto Barrios in Guatemala.",
            "The town's name is Spanish for 'Fat Point,' referring to the coastal geography."
        ]
    },
    "san-pedro-town-cities-v2": {
        "desc": "San Pedro Town is the bustling heart of Ambergris Caye and Belize's premier tourism destination. Immortalized in song, this once-quiet fishing village has transformed into a world-class resort town known for its sandy streets, vibrant nightlife, and proximity to the Belize Barrier Reef. San Pedro offers a unique blend of Caribbean charm and modern amenities, with golf carts being the primary mode of transportation. The town is the main base for world-class snorkeling and diving at sites like Hol Chan and Shark Ray Alley. Despite its growth, San Pedro maintains a friendly, island vibe, where the turquoise sea is always just a few steps away. It is the perfect place for travelers seeking a mix of adventure, luxury, and the quintessential island lifestyle.",
        "facts": [
            "San Pedro is the second-largest town in the Belize District.",
            "It is located on the southern tip of Ambergris Caye.",
            "The town was the inspiration for Madonna's song 'La Isla Bonita'.",
            "The population has grown significantly, now exceeding 17,000 residents.",
            "Golf carts are the most common form of motorized transport in the town.",
            "It is the largest and most developed tourism hub in Belize.",
            "The town was founded in 1848 by refugees from the Caste War."
        ]
    },
    "caye-caulker-village-cities-v2": {
        "desc": "Caye Caulker is a charming and laid-back island village located just south of Ambergris Caye, famously known for its motto, 'Go Slow.' This small coral island offers a more bohemian and budget-friendly alternative to its busier neighbor, San Pedro. The village is characterized by its colorful wooden houses, sandy streets, and a lack of cars, with bicycles and walking being the preferred ways to get around. Caye Caulker is divided by a narrow channel known as 'The Split,' which has become a popular spot for swimming and socializing. The island is perfectly positioned for exploring the reef, offering excellent snorkeling and diving just minutes away. With its relaxed atmosphere, fresh seafood, and stunning sunsets, Caye Caulker is the ultimate destination for those seeking a tranquil and authentic island escape.",
        "facts": [
            "The island is approximately 5 miles (8 kilometers) long.",
            "Caye Caulker is located 21 miles (34 kilometers) northeast of Belize City.",
            "The population of the village is about 2,000 residents.",
            "Hurricane Hattie split the island into two parts in 1961.",
            "The island's economy shifted from lobster fishing to tourism in the 1970s.",
            "Mangrove forests cover large parts of the northern half of the island.",
            "It is a world-renowned destination for budget travelers and backpackers."
        ]
    },
    "placencia-village-cities-v2": {
        "desc": "Placencia Village is a picturesque and rapidly growing destination located at the southern tip of the 16-mile-long Placencia Peninsula. This former fishing village has become a favorite for travelers seeking beautiful sandy beaches, a relaxed vibe, and a variety of upscale resorts. Placencia is unique for its 'Sidewalk'—a narrow, mile-long pedestrian path that serves as the village's main thoroughfare, lined with colorful shops, bars, and restaurants. The village offers easy access to both the barrier reef for diving and snorkeling, and the mainland for jungle adventures. Known for its friendly community and some of the best beaches in mainland Belize, Placencia provides a perfect balance between Caribbean island charm and convenient mainland access, making it a premier spot for a tropical getaway.",
        "facts": [
            "Placencia is located approximately 160 miles (257 kilometers) south of Belize City.",
            "The village's 'Main Street' is a sidewalk that was once the world's narrowest.",
            "The population of the village is approximately 1,500 residents.",
            "Placencia is a major hub for whale shark watching tours in the spring.",
            "It was originally settled by English Puritans in the 17th century.",
            "The peninsula is flanked by the Caribbean Sea and a mangrove lagoon.",
            "The village hosts a famous annual Lobsterfest in June."
        ]
    },
    "hopkins-village-cities-v2": {
        "desc": "Hopkins is a vibrant and welcoming coastal village in the Stann Creek District, celebrated as the most authentic Garifuna community in Belize. Situated on a sweeping bay with beautiful sandy beaches, Hopkins offers a unique cultural experience where traditional music, dance, and food are a part of everyday life. The village has a relaxed, uncommercialized feel, making it a favorite for travelers seeking a deeper connection with local heritage. Hopkins is also a strategic base for exploring the nearby Maya Mountains and the barrier reef. Whether learning to drum with local masters, savoring traditional Hudut, or simply enjoying the sea breeze under a palm tree, visitors to Hopkins find a warm and soulful community that proudly preserves its rich ancestral traditions.",
        "facts": [
            "Hopkins was founded in 1942 to replace the village of Newtown.",
            "It is located about 15 miles south of Dangriga Town.",
            "The village has a population of approximately 2,500 residents.",
            "It is considered the cultural center of the Garifuna people in Belize.",
            "The village stretches for nearly 3 miles along the Caribbean coast.",
            "Hopkins was voted the 'Friendliest Village in Belize' by multiple travel magazines.",
            "It is the closest coastal village to the Cockscomb Basin Wildlife Sanctuary."
        ]
    },
    "spanish-lookout-cities-v2": {
        "desc": "Spanish Lookout is a thriving and unique Mennonite community located in the upper Belize River Valley of the Cayo District. Established in 1958 by Plautdietsch-speaking Mennonites from Mexico, it has become one of the most productive agricultural and industrial regions in the country. The settlement is characterized by its rolling hills, neatly organized farms, and modern infrastructure that stands in contrast to much of rural Belize. Spanish Lookout is a major provider of dairy, poultry, and grains for the nation, and it is also home to the country's first commercial oil field. Visitors are often surprised by the community's industrial success and its blend of traditional values with modern technology, offering a fascinating look at one of the many diverse cultures that contribute to Belize's economy.",
        "facts": [
            "Spanish Lookout was founded in 1958 by 75 Mennonite families.",
            "The community encompasses approximately 18,000 acres of land.",
            "It is the main producer of milk, cheese, and chicken in Belize.",
            "The residents speak Plautdietsch, a low-German dialect.",
            "It is the site of the Spanish Lookout Oil Field, discovered in 2005.",
            "The population is approximately 2,500 residents.",
            "The community manages its own road maintenance and utilities."
        ]
    },
    "shipyard-cities-v2": {
        "desc": "Shipyard is a traditional Old Colony Mennonite settlement located in the Orange Walk District, known for its commitment to a simple, agrarian way of life. Founded in 1958, the community is characterized by its use of horse-drawn buggies, traditional dress, and a focus on large-scale agriculture without the use of many modern conveniences. Shipyard is a major contributor to the northern economy, producing large quantities of furniture, poultry, and grains. The settlement is organized into several 'villages' or camps spread across a vast area of fertile land. For visitors, Shipyard offers a striking glimpse into a world that feels disconnected from the modern age, where faith and hard work remain the cornerstones of daily life in one of Belize's most productive rural communities.",
        "facts": [
            "Shipyard was founded in 1958 by Mennonite groups from Mexico and Canada.",
            "The community prohibits the use of electricity and rubber-tired vehicles for most tasks.",
            "It is a major center for the manufacturing of high-quality wooden furniture.",
            "The settlement is divided into about 40 distinct 'camps' or villages.",
            "The population is estimated to be over 3,500 residents.",
            "Agriculture is the primary occupation, focusing on rice, corn, and beans.",
            "It is located about 15 miles south of Orange Walk Town."
        ]
    },
    "blue-creek-cities-v2": {
        "desc": "Blue Creek is a prosperous and industrious Mennonite community located in the remote northwestern corner of the Orange Walk District, near the borders of Mexico and Guatemala. Known for its sophisticated agricultural operations and large-scale engineering projects, Blue Creek is a major producer of cattle, grains, and hydroelectric power. The community is more technologically advanced than some other Mennonite settlements, utilizing modern machinery and managing its own infrastructure. The area is characterized by its beautiful rolling hills and the scenic Blue Creek, which provides both a water source and opportunities for recreation. Blue Creek represents the success of modern Mennonite pioneers who have transformed a remote wilderness into one of the most productive and self-sufficient regions in Belize.",
        "facts": [
            "Blue Creek was established in 1958 by Mennonite settlers.",
            "It is home to the first private hydroelectric dam in Belize.",
            "The community is a major exporter of beef and poultry.",
            "It is located approximately 40 miles northwest of Orange Walk Town.",
            "The residents are known for their expertise in heavy construction and mechanics.",
            "The population is approximately 800 residents.",
            "The area is famous for the stunning Blue Creek Cave, a popular adventure site."
        ]
    },
    "santa-elena-cities-v2": {
        "desc": "Santa Elena is the twin town of San Ignacio and serves as the bustling eastern gateway to the Cayo District. Located on the eastern bank of the Macal River, it is connected to San Ignacio by the historic Hawksworth Bridge. While often overshadowed by its more tourist-focused twin, Santa Elena is a vital residential and commercial center, home to a large and diverse population. The town offers a more local and authentic atmosphere, with numerous small businesses, schools, and residential neighborhoods. Santa Elena is an essential part of the region's economy and culture, providing the workforce and infrastructure that support the booming tourism industry in western Belize. Its location along the main highway makes it a bustling crossroads for people traveling between the capital and the western border.",
        "facts": [
            "Santa Elena and San Ignacio together form the largest urban area in Cayo.",
            "The town is located about 68 miles (109 kilometers) west of Belize City.",
            "The Hawksworth Bridge, connecting it to San Ignacio, was built in 1949.",
            "The population of Santa Elena is approximately 10,000 residents.",
            "It is the administrative and commercial hub for many surrounding villages.",
            "The town features many traditional Belizean eateries and local markets.",
            "It sits at an average elevation of 60 meters (200 feet)."
        ]
    },
    "ladyville-cities-v2": {
        "desc": "Ladyville is a major and rapidly expanding community located just 8 miles north of Belize City, known primarily as the home of the Philip S.W. Goldson International Airport. As the main port of entry for most visitors to the country, Ladyville is a bustling transportation hub and a growing residential area for people working in the city. The community is also the site of the Price Barracks, the headquarters of the Belize Defence Force. Despite its busy highway-side location, Ladyville offers several quiet residential neighborhoods and is the site of the country's main brewery, producing the iconic Belikin beer. Its strategic location between the city and the northern and western highways makes it a vital and convenient node in Belize's national infrastructure.",
        "facts": [
            "Ladyville is the largest village in Belize by population.",
            "It is home to Belize's only international airport (BZE).",
            "The population is estimated to be over 6,000 residents.",
            "It is the site of the Belize Brewing Company, established in 1969.",
            "The headquarters of the Belize Defence Force (BDF) is located here.",
            "Ladyville is situated about 8 miles north of downtown Belize City.",
            "The community is a major hub for warehousing and light industry."
        ]
    },
    "trial-farm-cities-v2": {
        "desc": "Trial Farm is a large and thriving residential community located just north of Orange Walk Town. Originally established as an agricultural settlement, it has grown into a bustling suburb that is home to many families working in the nearby town and the local sugar industry. The community has a strong Mestizo character and is known for its friendly, close-knit atmosphere. Trial Farm offers a range of local services, schools, and small businesses that cater to its growing population. Its proximity to the main northern highway and Orange Walk Town makes it a convenient and desirable place to live, reflecting the ongoing urban expansion and development in northern Belize. The village remains deeply connected to the agricultural heritage of the district while embracing its role as a modern residential hub.",
        "facts": [
            "Trial Farm is one of the largest villages in the Orange Walk District.",
            "It is located only 1 mile north of Orange Walk Town center.",
            "The population is approximately 4,500 residents.",
            "The village was established in the mid-20th century.",
            "Most residents are employed in the sugar industry or the service sector in town.",
            "It is situated along the main Phillip Goldson Highway.",
            "Trial Farm features several primary schools and active community centers."
        ]
    },
    "guinea-grass-cities-v2": {
        "desc": "Guinea Grass is a large and culturally rich village located in the Orange Walk District, situated along the banks of the New River. The community is primarily made up of Mestizo families and is known for its deep roots in the agricultural history of the region. Guinea Grass has traditionally been a center for sugarcane and corn production, and the surrounding fertile lands remain some of the most productive in the district. The village has a lively and authentic atmosphere, with a strong focus on community life and traditional festivals. Its location near the New River offers opportunities for fishing and transport, while its proximity to Orange Walk Town ensures easy access to urban services. Guinea Grass remains a quintessential example of a hard-working and vibrant agricultural village in northern Belize.",
        "facts": [
            "Guinea Grass is located about 10 miles south of Orange Walk Town.",
            "The population is approximately 3,000 residents.",
            "The village is named after a type of tall grass used for cattle fodder.",
            "Sugarcane is the primary commercial crop grown by the villagers.",
            "It is situated on the eastern bank of the New River.",
            "The community is known for its traditional Mestizo music and dance.",
            "Most of the village's infrastructure was developed in the late 20th century."
        ]
    },
    "san-jose-palmar-cities-v2": {
        "desc": "San Jose Palmar is a unique and historically significant village located just south of Orange Walk Town. The community was founded in the 1930s by Maya refugees who were relocated from the village of San Jose Yalbac in the western forests. Today, San Jose Palmar is a thriving suburb that has successfully integrated into the northern economy while maintaining a strong sense of its unique identity and history. The village is known for its organized layout, well-maintained streets, and active community organizations. Residents are employed in various sectors, including agriculture, education, and the sugar industry. San Jose Palmar serves as a testament to the resilience of its founding families and remains one of the most progressive and well-developed villages in the Orange Walk District.",
        "facts": [
            "San Jose Palmar was founded in 1936 by relocated Maya villagers.",
            "The population is approximately 3,000 residents.",
            "It is located less than 2 miles south of Orange Walk Town center.",
            "The village is named after its patron saint, San Jose, and the palm trees in the area.",
            "It is the site of several important community development projects.",
            "The original settlers were descendants of the Icaiche Maya.",
            "The village is situated along the main highway to Belize City."
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
