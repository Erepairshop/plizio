
import re
import os

file_path = "lib/visualLab/data/poiExtraBelizeCitiesV2.ts"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

seo_data = {
    "chan-pine-ridge-cities-v2": {
        "desc": "Chan Pine Ridge is a vibrant and culturally rich village located in the Orange Walk District, situated in a fertile region known for its extensive agricultural production. The community is primarily made up of Mestizo and Maya families and is a major center for sugarcane, corn, and livestock farming. Chan Pine Ridge has a lively and prosperous atmosphere, with a strong focus on community life and traditional festivals. The village is characterized by its organized layout and its active community organizations. Its success as an agricultural hub reflects the hard work and dedication of its residents, who have transformed the surrounding plains into one of the most productive regions in northern Belize. The village remains a vital and prosperous part of the Orange Walk District's network of agricultural communities.",
        "facts": [
            "Chan Pine Ridge is located about 5 miles south of Orange Walk Town.",
            "The population is approximately 1,000 residents.",
            "The village is a major contributor to the northern Belize sugar belt.",
            "It was established as an agricultural settlement in the mid-20th century.",
            "The community is known for its vibrant celebrations of patron saint days.",
            "It features several large primary schools and community centers.",
            "The area is characterized by its rolling hills and fertile soils."
        ]
    },
    "tower-hill-cities-v2": {
        "desc": "Tower Hill is a significant industrial and historical site located just south of Orange Walk Town, famous for being the location of Belize's main sugar mill. The area is named after a prominent landmark that served as a lookout during the colonial era. Today, Tower Hill is a bustling hub of activity, particularly during the sugar harvest season when thousands of trucks deliver cane to the mill. The site is a testament to the industrial revolution's impact on Belize and remains the economic heart of the northern districts. In addition to its industrial importance, the area is rich in ancient history, with several Maya mounds located nearby. Tower Hill represents the vital link between Belize's agricultural heritage and its modern industrial economy.",
        "facts": [
            "Tower Hill is the site of the Belize Sugar Industries (BSI) factory.",
            "It is located about 2 miles south of Orange Walk Town.",
            "The sugar mill is the largest industrial facility in Belize.",
            "The area was historically a key strategic point along the New River.",
            "Thousands of farmers from the north deliver their sugarcane here annually.",
            "The facility produces raw sugar, molasses, and renewable electricity.",
            "It is situated near several important archaeological sites."
        ]
    },
    "carmelita-cities-v2": {
        "desc": "Carmelita is a large and growing residential village in the Orange Walk District, situated along the main Phillip Goldson Highway just south of Tower Hill. Originally established as an agricultural settlement, it has become a popular 'bedroom community' for people working in the nearby sugar industry and Orange Walk Town. Carmelita is characterized by its sprawling layout, quiet residential streets, and its mix of traditional farming and modern suburban life. The village is home to a diverse community that prides itself on its peaceful atmosphere and its strong focus on family and education. Its strategic location along the main northern highway makes it a convenient and desirable place to live, reflecting the ongoing urban expansion and development in northern Belize.",
        "facts": [
            "Carmelita is located about 5 miles south of Orange Walk Town.",
            "The population is estimated to be over 2,500 residents.",
            "The village serves as a major residential suburb for the sugar industry workers.",
            "It is situated at a key point along the highway to Belize City.",
            "The community was established in the mid-20th century.",
            "It features several primary schools and a large community center.",
            "The area is known for its productive small-scale gardening and fruit trees."
        ]
    },
    "crooked-tree-cities-v2": {
        "desc": "Crooked Tree is a charming and historically rich village located within the Crooked Tree Wildlife Sanctuary in the Belize District. Founded in the 18th century as a logging camp, it is one of the oldest Creole settlements in the country. The village is uniquely situated on an island in the middle of a vast lagoon system, connected to the mainland by a long causeway. Crooked Tree is a world-renowned destination for birdwatching, particularly during the dry season when thousands of Jabiru storks and other waterfowl congregate in the lagoons. The community is also famous for its annual Cashew Festival, celebrating the abundance of cashew trees in the area. With its quiet, sandy streets and deep cultural roots, Crooked Tree offers a peaceful and authentic experience in the heart of Belize's wetlands.",
        "facts": [
            "Crooked Tree was established in the early 1700s.",
            "The village is located 33 miles (53 kilometers) north of Belize City.",
            "The population is approximately 1,000 residents.",
            "It is situated within a 16,400-acre wildlife sanctuary.",
            "The village is famous for its cashew production and annual Cashew Festival.",
            "It is home to the rare and massive Jabiru stork.",
            "The village name refers to the twisted cashew trees found in the area."
        ]
    },
    "bis-cities-v2": {
        "desc": "Biscayne is a small and quiet residential village located in the Belize District, situated along the main Phillip Goldson Highway. The community has a rich history tied to the early agricultural and logging development of the region. Today, Biscayne is a peaceful retreat, home to families who appreciate a slower pace of life and a strong connection to nature. The village is surrounded by tropical savanna and fertile farmland, providing a scenic and tranquil setting. Its proximity to the larger towns and the national airport ensures that residents have access to essential services while enjoying the privacy and community spirit of a traditional Belizean village. Biscayne remains a quintessential example of the district's rural charm and its enduring connection to the land.",
        "facts": [
            "Biscayne is located about 25 miles north of Belize City.",
            "The population of the village is approximately 400 residents.",
            "Small-scale farming and livestock are the main local activities.",
            "It is situated in a picturesque area of the Belize District savanna.",
            "The community is known for its friendly and welcoming atmosphere.",
            "The village was established as a farming settlement in the mid-20th century.",
            "Access to the village is via the main highway connecting the north and south."
        ]
    },
    "bermudian-landing-cities-v2": {
        "desc": "Bermudian Landing is a historic and culturally vibrant village located on the banks of the Belize River, celebrated as the heart of the Community Baboon Sanctuary. Founded in the 17th century by British settlers and their enslaved laborers, it is one of the oldest riverine communities in the country. Today, the village is a major center for eco-tourism and community-based conservation, dedicated to protecting the Black Howler Monkey. Visitors can enjoy guided tours through the lush forest, where the monkeys' roars provide a dramatic backdrop. The community is proud of its Creole heritage, reflected in its traditional architecture, music, and food. Bermudian Landing offers a unique blend of colonial history, natural wonder, and a warm, soulful community that continues to champion sustainable development.",
        "facts": [
            "Bermudian Landing was established as a river port in the 1600s.",
            "It is located about 30 miles west of Belize City.",
            "The population is approximately 600 residents.",
            "The village is the headquarters of the Community Baboon Sanctuary.",
            "It was named after settlers who arrived from Bermuda.",
            "The village features a historic museum on the local Creole culture.",
            "The Belize River here is a popular spot for canoeing and birdwatching."
        ]
    },
    "rancho-dolores-cities-v2": {
        "desc": "Rancho Dolores is a peaceful and scenic village located in the Belize District, situated along the banks of the Spanish Creek. The community has a long history tied to the logging and cattle industries and is known for its deep roots in the rural life of central Belize. Today, Rancho Dolores is a center for community-based conservation and eco-tourism, with the Spanish Creek Wildlife Sanctuary located on its doorstep. The village is a haven for nature lovers, offering opportunities for river tours, birdwatching, and exploring the diverse flora and fauna of the region. With its quiet atmosphere, its friendly residents, and its commitment to preserving its natural environment, Rancho Dolores provides an authentic and tranquil experience of Belize's riverine interior.",
        "facts": [
            "Rancho Dolores is located about 35 miles west of Belize City.",
            "The population is approximately 300 residents.",
            "The village is the gateway to the Spanish Creek Wildlife Sanctuary.",
            "It has a rich history as a cattle ranching and logging center.",
            "The community is known for its efforts in sustainable land management.",
            "It is situated on the scenic Spanish Creek, a tributary of the Belize River.",
            "The village features several traditional colonial-style wooden houses."
        ]
    },
    "lemonal-cities-v2": {
        "desc": "Lemonal is a small and remote village in the Belize District, nestled along the banks of the Spanish Creek. The community is known for its traditional way of life and its deep connection to the surrounding tropical forest and wetlands. Residents of Lemonal have traditionally been involved in subsistence farming, fishing, and the collection of forest products. The village has a quiet and friendly atmosphere, where the rhythms of nature still dictate the pace of daily life. Its location in a biodiverse region makes it a fascinating place for those interested in the natural history of Belize, offering a rare look at a community that has successfully maintained its rural traditions in a changing world. Lemonal remains a hidden gem for travelers seeking a genuine connection with the country's wild interior.",
        "facts": [
            "Lemonal is located approximately 40 miles west of Belize City.",
            "The population is about 200 residents.",
            "The village is accessible via a rugged and scenic gravel road.",
            "It is situated in a region rich in tropical bird and orchid species.",
            "Traditional Creole customs and cooking are highly preserved here.",
            "The local economy is based on small-scale agriculture and river fishing.",
            "The area is home to diverse wildlife, including howler monkeys and crocodiles."
        ]
    },
    "flowers-bank-cities-v2": {
        "desc": "Flowers Bank is a historically significant and proud village located on the banks of the Belize River. The community is famous for the 'Flowers Bank 14'—a group of free black settlers who, in 1797, cast the deciding votes to stay and defend the settlement against the Spanish fleet, leading to the victory at the Battle of St. George's Caye. Today, the village is a quiet residential area known for its productive fruit orchards and its commitment to preserving its historic legacy. Visitors can explore the historical markers and enjoy the scenic riverfront, while learning about the pivotal role the villagers played in the birth of Belize. Flowers Bank remains a symbol of national pride and a testament to the courage and resilience of the country's early settlers.",
        "facts": [
            "Flowers Bank was founded by former enslaved laborers in the late 18th century.",
            "It is located about 30 miles northwest of Belize City.",
            "The population is approximately 200 residents.",
            "The village is named after the Flowers family, early prominent settlers.",
            "It is a major producer of exotic fruits like custard apple and star fruit.",
            "A monument in the village honors the 'Flowers Bank 14'.",
            "The community hosts an annual commemoration of the 1797 meeting."
        ]
    },
    "scotland-half-moon-cities-v2": {
        "desc": "Scotland Half Moon is a picturesque and historically interesting village located in the Belize River Valley. The community takes its unusual name from its founding by Scottish settlers and the half-moon-shaped bend in the river where it was established. Historically a logging and agricultural camp, it has evolved into a peaceful residential village known for its lush landscapes and its friendly, welcoming people. The village is a part of the network of communities that make up the Belize River Valley, where traditional Creole culture remains a vital part of daily life. With its scenic river views, its abundant birdlife, and its quiet atmosphere, Scotland Half Moon offers a charming and authentic glimpse into the rural history and natural beauty of central Belize.",
        "facts": [
            "Scotland Half Moon is located about 25 miles west of Belize City.",
            "The population is approximately 300 residents.",
            "The village is situated along a scenic bend of the Belize River.",
            "It was originally settled as a mahogany and cattle outpost.",
            "The area is a popular spot for birdwatching and river canoeing.",
            "The community has a rich tradition of oral history and folklore.",
            "It features several historic wooden structures from the colonial era."
        ]
    },
    "double-head-cabbage-cities-v2": {
        "desc": "Double Head Cabbage is a vibrant and culturally rich village in the Belize River Valley, known for its deep roots in the Creole heritage of the region. The village takes its name from a local tree species with a double-headed growth habit. Historically a center for logging and agriculture, it is now a key community within the Community Baboon Sanctuary. Double Head Cabbage is famous for its lively community spirit, traditional music, and its warm hospitality. The village is a major center for local commerce and education, serving as a hub for the surrounding riverine settlements. With its lush tropical setting and its commitment to community-based conservation, Double Head Cabbage offers visitors a genuine and soulful look at the traditions and natural wonders that define rural Belize.",
        "facts": [
            "Double Head Cabbage is located about 28 miles west of Belize City.",
            "The population is approximately 500 residents.",
            "The village is a founding member of the Community Baboon Sanctuary.",
            "It features a large and active primary school and community clinic.",
            "The community is known for its traditional Creole cuisine and festivals.",
            "It is situated in a fertile agricultural belt along the Belize River.",
            "The area is exceptionally rich in howler monkey populations."
        ]
    },
    "willows-bank-cities-v2": {
        "desc": "Willows Bank is a small and peaceful village located in the Belize River Valley, situated along the banks of the historic Belize River. The community has a long history tied to the early timber and agricultural development of the region and is known for its quiet, rural atmosphere. Today, Willows Bank is a residential community where families enjoy a close connection to the land and the river. The village is surrounded by lush forest and fertile farmland, providing a scenic and tranquil setting. Its proximity to the larger villages of the river valley ensures that residents have access to essential services while enjoying the privacy and community spirit of a traditional Belizean settlement. Willows Bank remains a quintessential example of the region's rural charm and its enduring riverine history.",
        "facts": [
            "Willows Bank is located about 30 miles west of Belize City.",
            "The population of the village is approximately 200 residents.",
            "The village is a participant in the Community Baboon Sanctuary program.",
            "Small-scale farming and livestock are the main local activities.",
            "It is situated in a picturesque area known for its abundant mahogany and cedar trees.",
            "The community is known for its friendly and close-knit atmosphere.",
            "Access to the village is via scenic rural roads from the main highway."
        ]
    },
    "st-pauls-bank-cities-v2": {
        "desc": "St. Paul's Bank is a historically significant and culturally rich village located in the Belize River Valley. The community has deep roots in the Creole history of Belize, having been established by early settlers who utilized the river for trade and transport. St. Paul's Bank is known for its peaceful atmosphere, its beautiful riverfront scenery, and its commitment to preserving its traditional way of life. The village is primarily a residential and agricultural community, with families involved in small-scale farming and the local tourism sector. Its location along the river offers stunning views and a fertile environment that has supported generations of families. St. Paul's Bank remains a vital and charming part of the Cayo District's network of historic riverine villages.",
        "facts": [
            "St. Paul's Bank is located approximately 32 miles west of Belize City.",
            "The population is about 250 residents.",
            "The village is a key part of the Belize River Valley conservation network.",
            "It is famous for its productive fruit orchards, especially citrus and mango.",
            "The community is known for its traditional river-based celebrations.",
            "It features several well-preserved colonial-style wooden houses.",
            "The village sits on a high bank providing natural protection from river flooding."
        ]
    },
    "big-falls-cities-v2": {
        "desc": "Big Falls is a thriving and culturally diverse village in the Toledo District, situated along the Southern Highway on the banks of the Rio Grande. The village is a fascinating cultural crossroads, home to East Indian, Maya, and Creole communities living in harmony. Big Falls is known for its beautiful natural setting, featuring a series of gentle rapids and pools in the river that gave the village its name. The community is a major center for agriculture and eco-tourism, offering a variety of lodges and cultural experiences, including traditional spice farming and chocolate making. With its warm tropical climate, its rich multi-ethnic heritage, and its stunning riverfront, Big Falls captures the vibrant and welcoming spirit of southern Belize.",
        "facts": [
            "Big Falls is located about 18 miles northwest of Punta Gorda Town.",
            "The population is approximately 1,200 residents.",
            "The village is a major center for East Indian culture in Toledo.",
            "It is the site of several popular eco-lodges and riverfront resorts.",
            "The Rio Grande here is famous for its scenic 'falls' and swimming areas.",
            "The local economy is based on agriculture, particularly cacao and citrus.",
            "The village features a large and bustling weekly market."
        ]
    },
    "dump-cities-v2": {
        "desc": "Dump, despite its unusual name, is a vital transportation and agricultural hub in the Toledo District, located at the important junction of the Southern Highway and the road to the western Maya villages. The name is believed to have originated from a colonial-era storage or 'dumping' site for mahogany logs. Today, Dump is a bustling crossroads where travelers and local farmers converge to trade and access transport services. The community is a melting pot of Maya, East Indian, and Mestizo cultures, reflecting the diverse social fabric of southern Belize. As the primary gateway to the interior of the district, Dump is a key node in the regional economy, providing essential services and a lively atmosphere for anyone traveling through the 'Deep South'.",
        "facts": [
            "Dump is located about 15 miles northwest of Punta Gorda Town.",
            "It is situated at the junction of two major regional highways.",
            "The population is approximately 500 residents.",
            "The village is a major hub for public transportation in Toledo.",
            "It is a center for small-scale commerce and roadside markets.",
            "The area was historically a key stop on the timber and chicle trails.",
            "Dump is surrounded by productive agricultural lands and rice fields."
        ]
    },
    "silver-creek-cities-v2": {
        "desc": "Silver Creek is a peaceful and productive agricultural village in the Toledo District, situated along the banks of the scenic Silver Creek. The community is primarily home to Mopan Maya families and is known for its deep roots in the traditional farming practices of the region. Silver Creek is a major producer of cacao, corn, and ground foods, benefiting from the fertile alluvial soil of the creek valley. The village has a quiet, rural atmosphere where community life and family values remain the cornerstones of daily life. Its location near the creek offers natural beauty and opportunities for recreation, while its proximity to the Southern Highway ensures easy access to markets. Silver Creek represents the enduring success and tranquil character of the Maya communities in southern Belize.",
        "facts": [
            "Silver Creek is located about 20 miles northwest of Punta Gorda Town.",
            "The population is approximately 600 residents.",
            "The village is a major participant in the regional cacao trade.",
            "It was established as a farming settlement in the mid-20th century.",
            "The creek is named for its clear and sparkling water.",
            "The community is known for its traditional Maya music and festivals.",
            "It features a local primary school and a community center."
        ]
    },
    "san-miguel-cities-v2": {
        "desc": "San Miguel is a large and culturally vibrant Mopan Maya village in the Toledo District, located near the banks of the Rio Grande. The community has a long history and is known for its deep roots in the agricultural and spiritual traditions of southern Belize. San Miguel is a thriving center for commercial farming, particularly the production of cacao and citrus. The village is characterized by its lively community spirit, active social organizations, and its commitment to education and development. Its proximity to several important archaeological sites, including Lubaantun, makes it a fascinating place to explore the region's ancient and modern history. San Miguel represents the successful integration of traditional Maya values with modern agricultural industry, making it a prosperous part of the district.",
        "facts": [
            "San Miguel is located approximately 18 miles northwest of Punta Gorda.",
            "The population is estimated to be over 1,000 residents.",
            "The village is a major contributor to the national cacao industry.",
            "It was founded in the early 20th century by Maya families.",
            "The community is known for its vibrant celebrations of patron saint days.",
            "It features several large primary schools and community centers.",
            "The area is home to the significant San Miguel archaeological mound."
        ]
    },
    "san-pedro-columbia-v2": {
        "desc": "San Pedro Columbia is a large and historically significant Mopan Maya village in the Toledo District, situated on the banks of the scenic Columbia River. The community is one of the oldest Maya settlements in southern Belize and remains a proud center for traditional culture and agriculture. San Pedro Columbia is famous for its vibrant festivals, traditional music, and its deep connection to the nearby Lubaantun archaeological site. The village is a major producer of cacao and citrus, utilizing the fertile soils of the river valley. With its beautiful riverfront, its lush tropical setting, and its warm, welcoming community, San Pedro Columbia offers visitors an authentic and immersive experience into the heart of the Mopan Maya world and the agricultural traditions of the south.",
        "facts": [
            "San Pedro Columbia is the largest Mopan Maya village in Belize.",
            "The population is approximately 2,500 residents.",
            "It is located about 18 miles northwest of Punta Gorda Town.",
            "The village is situated only 2 miles from the Lubaantun ruins.",
            "It is a major center for organic cacao production and processing.",
            "The community has a rich tradition of harp music and traditional dance.",
            "The Columbia River here is a popular spot for local swimming and fishing."
        ]
    },
    "indian-creek-cities-v2": {
        "desc": "Indian Creek is a large and growing Q'eqchi' Maya village in the Toledo District, situated along the Southern Highway. The community was established by families seeking new agricultural land and has become a vital center for small-scale commercial farming. Indian Creek is characterized by its industrious community, its well-organized layout, and its strong sense of independence. The village is a major producer of corn, beans, and ground foods, supplying markets throughout southern Belize. In recent years, Indian Creek has also become a center for community-based tourism, with several eco-lodges and craft workshops catering to visitors. Its strategic location along the highway makes it a convenient and thriving hub for trade and transport, reflecting the dynamic nature of modern Maya life.",
        "facts": [
            "Indian Creek is located about 22 miles northwest of Punta Gorda Town.",
            "The population is approximately 1,500 residents.",
            "The village is a major participant in the regional agricultural market.",
            "It features several large community churches and primary schools.",
            "The community is known for its beautiful traditional weaving and crafts.",
            "It is situated directly on the Southern Highway.",
            "The area is a key habitat for the yellow-headed parrot."
        ]
    },
    "golden-stream-cities-v2": {
        "desc": "Golden Stream is a small but scenic village in the Toledo District, named after the beautiful river that flows through the community. The village is home to a mix of Mopan and Q'eqchi' Maya families who maintain a traditional lifestyle centered on the land and the forest. Golden Stream is famous for its namesake river, which features crystal-clear waters and a spectacular waterfall nearby. The community is deeply involved in conservation efforts, with the Golden Stream Corridor Preserve located on its doorstep. For travelers, Golden Stream offers a peaceful and authentic look at rural Maya life, providing opportunities for hiking, swimming, and learning about the diverse ecosystems of southern Belize. The village remains a vital part of the district's social and environmental landscape.",
        "facts": [
            "Golden Stream is located about 25 miles northwest of Punta Gorda Town.",
            "The population is approximately 400 residents.",
            "The village is the gateway to the Golden Stream Corridor Preserve.",
            "The Golden Stream river is famous for its clarity and fish diversity.",
            "The community is known for its expertise in traditional spice farming.",
            "It features several small eco-tourism projects and guesthouses.",
            "The area is a critical corridor for jaguar and tapir migration."
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
