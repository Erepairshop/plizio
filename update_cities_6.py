
import re
import os

file_path = "lib/visualLab/data/poiExtraBelizeCitiesV2.ts"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

seo_data = {
    "medina-bank-cities-v2": {
        "desc": "Medina Bank is a small and remote Q'eqchi' Maya village in the Toledo District, situated along the banks of the Deep River. The community is known for its peaceful way of life and its deep connection to the surrounding rainforest and wetlands. Residents of Medina Bank are primarily involved in subsistence farming, living in harmony with the diverse ecosystems of the region. The village is a center for community-based conservation, working to protect the fertile lands and the water resources that have supported Maya families for generations. For visitors, Medina Bank offers a rare and authentic glimpse into the resilient and sustainable traditions of the Q'eqchi' Maya in one of southern Belize's most wild frontiers.",
        "facts": [
            "Medina Bank is located about 30 miles northwest of Punta Gorda Town.",
            "The population is approximately 300 residents.",
            "The village is situated near the Deep River, a vital waterway.",
            "Agriculture is focused on corn, beans, and small-scale cacao.",
            "Traditional Maya crafts and weaving are still widely practiced here.",
            "The community is active in regional forest management projects.",
            "It is accessible via a rugged and scenic gravel road."
        ]
    },
    "tambran-cities-v2": {
        "desc": "Tambran is a small and quiet residential community located in the Toledo District, situated in a fertile agricultural region known for its productive soils. The village takes its name from the tamarind trees that are common in the area. Today, Tambran is a peaceful retreat, home to families who appreciate a slower pace of life and a strong connection to nature. The village is surrounded by tropical savanna and fertile farmland, providing a scenic and tranquil setting. Its proximity to the larger towns and the main highway ensures that residents have access to essential services while enjoying the privacy and community spirit of a traditional Belizean village. Tambran remains a quintessential example of the Toledo District's rural charm.",
        "facts": [
            "Tambran is located about 15 miles northwest of Punta Gorda Town.",
            "The population is approximately 150 residents.",
            "Small-scale farming and livestock are the main local occupations.",
            "It is situated in a picturesque area of the Toledo District savanna.",
            "The community is known for its friendly and welcoming atmosphere.",
            "The village was established as a farming settlement in the mid-20th century.",
            "Access to the village is via rural roads from the Southern Highway."
        ]
    },
    "trio-cities-v2": {
        "desc": "Trio is a rapidly growing and culturally diverse village located in the Toledo District, situated along the foothills of the Maya Mountains. Originally settled by families seeking land for agriculture, it has evolved into a bustling community that serves as a major center for corn and citrus production. Trio is home to a significant population of immigrants from neighboring Central American countries, creating a vibrant and multi-cultural atmosphere. The village is known for its industrious spirit and its scenic natural setting, with clear mountain streams nearby. As a key settlement in the agricultural belt, Trio plays an important role in the regional economy, providing essential produce and a lively home for its hardworking residents.",
        "facts": [
            "Trio is located about 35 miles northwest of Punta Gorda Town.",
            "The population has seen significant growth, now exceeding 1,200 residents.",
            "The village is a major producer of corn and beans for the district.",
            "It is situated near the Trio Branch of the Monkey River.",
            "The community was established in the late 20th century.",
            "It features several large community churches and a primary school.",
            "The area is characterized by its fertile valley and mountain views."
        ]
    },
    "bladen-cities-v2": {
        "desc": "Bladen is a small and scenic village in the Toledo District, located along the Southern Highway at the gateway to the spectacular Bladen Nature Reserve. The community is home to a mix of Maya and Mestizo families who live in a lush tropical setting surrounded by dense forest and mountain foothills. Bladen is famous for being the headquarters of the Bladen Nature Reserve, one of the most biodiverse and untouched protected areas in the world. The village serves as a vital base for research and conservation efforts in the region. With its quiet atmosphere and its commitment to environmental protection, Bladen offers visitors a profound look at the intersection of rural life and global conservation priorities in southern Belize.",
        "facts": [
            "Bladen is located about 30 miles northwest of Punta Gorda Town.",
            "The population is approximately 200 residents.",
            "It is the main administrative point for the Bladen Nature Reserve.",
            "The village is situated directly on the Southern Highway.",
            "The area is home to rare species like the harpy eagle and jaguar.",
            "Agriculture is focused on sustainable, low-impact family gardening.",
            "The community is a key participant in regional eco-tourism projects."
        ]
    },
    "swasey-cities-v2": {
        "desc": "Swasey is a peaceful and productive agricultural village in the Toledo District, situated along the banks of the Swasey River. The community is primarily involved in the banana and citrus industries, which are the main economic drivers of the region. Swasey is characterized by its lush, green landscapes and its beautiful views of the surrounding hills. The village has a quiet and friendly atmosphere, where the rhythms of agriculture dictate the pace of daily life. Its location near the river provides both a water source and opportunities for recreation, while its proximity to the main highway ensure easy access to markets. Swasey represents the success and tranquil character of the agricultural communities that define the Stann Creek and Toledo border region.",
        "facts": [
            "Swasey is located about 25 miles north of Punta Gorda Town.",
            "The population is approximately 300 residents.",
            "The village is a major center for workers in the nearby banana estates.",
            "It is situated on the eastern bank of the Swasey River.",
            "The community was established in the mid-20th century.",
            "It features several small local businesses and a primary school.",
            "The area is exceptionally fertile, supporting a wide range of tropical fruits."
        ]
    },
    "cowpen-cities-v2": {
        "desc": "Cowpen is a large and industrious village in the Stann Creek District, serving as a vital residential center for the region's massive banana industry. Originally established as a cattle ranching area, it has grown into a bustling community that is home to thousands of workers and their families. Cowpen is a melting pot of cultures, with a significant population of immigrants from throughout Central America. The village is a key node in the agricultural belt, providing essential services, shops, and housing for the workforce of the surrounding plantations. Its growth reflects the dynamic and expanding nature of Belize's export economy. Cowpen remains a hard-working and vibrant village, essential to the prosperity of the southern agricultural districts.",
        "facts": [
            "Cowpen is one of the largest villages in the Stann Creek District.",
            "The population is estimated to be over 4,000 residents.",
            "It is a major residential hub for the Fyffes and other banana estates.",
            "The village was named after the original cattle pens located there.",
            "It is situated near the junction of the Southern Highway and the road to Independence.",
            "The community is known for its diverse Central American influences.",
            "It features several large schools and health clinics for the workforce."
        ]
    },
    "san-juan-cities-v2": {
        "desc": "San Juan is a large and culturally vibrant village in the Stann Creek District, located in the heart of the banana-producing region. The community is primarily made up of families who have migrated to the area to work in the agricultural industry, creating a dynamic and multi-ethnic environment. San Juan is a bustling center of activity, with numerous small businesses, markets, and services catering to its growing population. The village is characterized by its organized layout and its strong sense of community. Its location along the main transport routes ensure that it remains a vital node for trade and travel in southern Belize. San Juan represents the successful integration of traditional rural values with modern agricultural industry, making it a prosperous and vital part of the district.",
        "facts": [
            "San Juan is located approximately 35 miles south of Dangriga Town.",
            "The population is estimated to be over 2,000 residents.",
            "The village is a major contributor to the national banana industry.",
            "It features a well-developed infrastructure with schools and community centers.",
            "The community has a strong tradition of community-based sports and festivals.",
            "It is situated directly on the road to Independence Village.",
            "Most residents are involved in commercial agriculture or the service sector."
        ]
    },
    "red-bank-cities-v2": {
        "desc": "Red Bank is a beautiful and culturally rich Maya village in the Stann Creek District, located at the foothills of the Maya Mountains. The village is most famous for being the premier destination for viewing the stunning Scarlet Macaws, which congregate in the area every year during the dry season to feed on local fruit. Red Bank is a proud Mopan Maya community that has embraced eco-tourism as a way to protect its natural heritage and support its development. The village offers guided birdwatching tours and a unique glimpse into traditional Maya life. With its spectacular mountain views, its lush tropical setting, and its vibrant avian visitors, Red Bank is a must-visit for nature lovers and those seeking an authentic cultural experience in Belize.",
        "facts": [
            "Red Bank is located about 12 miles west of Independence Village.",
            "The population is approximately 1,200 residents.",
            "It is home to the largest wintering population of Scarlet Macaws in Belize.",
            "The village was founded in the early 1980s by Maya families.",
            "It features several community-run eco-lodges and trails.",
            "Small-scale farming, particularly cacao and corn, is the main local occupation.",
            "The macaws are usually seen in the village between January and March."
        ]
    },
    "maya-mopan-cities-v2": {
        "desc": "Maya Mopan is a thriving and historically significant village in the Stann Creek District, established as a settlement for Mopan Maya families seeking to preserve their cultural identity and land. The community is known for its industrious spirit and its beautiful setting near the Sittee River and the Maya Mountains. Maya Mopan is a center for agricultural excellence, producing significant quantities of corn, beans, and cacao. The village has a lively and prosperous feel, with many well-maintained houses and active community organizations. Residents are proud of their heritage and work hard to balance modern development with the preservation of their ancestral traditions. Maya Mopan represents the success and vitality of the modern Maya communities in southern Belize.",
        "facts": [
            "Maya Mopan is located about 20 miles south of Dangriga Town.",
            "The population is approximately 800 residents.",
            "The village was established as a dedicated Maya settlement in the 1970s.",
            "It is a major participant in the regional cacao and spice trade.",
            "The community has a rich tradition of harp music and traditional dance.",
            "It features a local primary school and a community center.",
            "The area is known for its scenic views of the Maya Mountain range."
        ]
    },
    "georgetown-cities-v2": {
        "desc": "Georgetown is a large and culturally vibrant village in the Stann Creek District, known for its deep roots in the agricultural and timber history of the region. The community is primarily made up of Creole and Mestizo families and is a major center for citrus and banana production. Georgetown has a lively and prosperous atmosphere, with a strong focus on community life and traditional festivals. The village is characterized by its organized layout and its active community organizations. Its success as an agricultural hub reflects the hard work and dedication of its residents, who have transformed the surrounding fertile plains into one of the most productive regions in southern Belize. The village remains a vital and prosperous part of the Stann Creek District's network of agricultural communities.",
        "facts": [
            "Georgetown is located about 25 miles south of Dangriga Town.",
            "The population is approximately 1,500 residents.",
            "The village is a major contributor to the southern Belize citrus industry.",
            "It was established as a logging settlement in the mid-20th century.",
            "The community is known for its vibrant celebrations of local holidays.",
            "It features several primary schools and a large community center.",
            "Georgetown is situated near the main Southern Highway junction."
        ]
    },
    "santa-cruz-stann-creek-cities-v2": {
        "desc": "Santa Cruz is a large and rapidly growing village in the Stann Creek District, situated along the Southern Highway in the heart of the agricultural belt. The community is a major center for the banana and citrus industries, providing housing and services for thousands of workers. Santa Cruz has a bustling and prosperous feel, with many small businesses, markets, and services catering to its diverse population. The village is known for its friendly community and its commitment to agricultural excellence. Its strategic location along the main highway makes it a vital node for trade and transport, reflecting the ongoing development and economic importance of the Stann Creek District. Santa Cruz remains a quintessential and vibrant part of southern Belize's agricultural heartland.",
        "facts": [
            "Santa Cruz is located about 30 miles south of Dangriga Town.",
            "The population is estimated to be over 2,500 residents.",
            "The village is a key part of the regional banana and citrus industry.",
            "The community has a strong tradition of community-based sports and festivals.",
            "It features a well-developed infrastructure with schools and health posts.",
            "Most residents are involved in commercial agriculture or the service sector.",
            "Santa Cruz is situated at the junction of several major agricultural roads."
        ]
    },
    "riversdale-cities-v2": {
        "desc": "Riversdale is a picturesque and historic coastal community located at the northern end of the Placencia Peninsula. Originally established as a banana-shipping port and a center for the timber trade, it has evolved into a sought-after residential and resort area. Riversdale is known for its beautiful sandy beaches, its quiet and peaceful atmosphere, and its stunning views of the Caribbean Sea. The community has a rich history tied to the early development of southern Belize and remains a vital part of the peninsula's landscape. With its blend of historic charm and modern luxury, Riversdale offers a tranquil alternative to the busier southern parts of the peninsula, making it an ideal destination for those seeking a quiet coastal escape.",
        "facts": [
            "Riversdale is located at the northern tip of the Placencia Peninsula.",
            "The population is approximately 300 residents.",
            "The village was a major banana port in the early 20th century.",
            "It features several high-end residential and resort developments.",
            "The area is home to beautiful mangrove forests and turtle nesting sites.",
            "It is situated about 20 miles from the Southern Highway.",
            "Riversdale is a popular spot for sport fishing and sailing."
        ]
    },
    "maya-beach-cities-v2": {
        "desc": "Maya Beach is a charming and popular resort community located midway along the Placencia Peninsula. Known for its beautiful white sandy beaches, its clear turquoise waters, and its collection of boutique hotels and restaurants, it is a favorite for travelers seeking a relaxed and upscale Caribbean experience. Maya Beach has a bohemian and friendly vibe, with a focus on good food, community, and outdoor activities. The area is perfectly positioned for exploring both the barrier reef and the mainland jungles. With its stunning sunrises, its world-class amenities, and its tranquil atmosphere, Maya Beach offers a perfect balance of luxury and island charm, making it a premier destination in the heart of southern Belize's most famous peninsula.",
        "facts": [
            "Maya Beach is located 8 miles north of Placencia Village.",
            "The community is a major hub for high-quality dining on the peninsula.",
            "The population is approximately 500 residents.",
            "It is situated in a narrow part of the peninsula between the sea and the lagoon.",
            "The area was originally settled as a residential area in the 1960s.",
            "It is home to several popular beach clubs and art galleries.",
            "Maya Beach features a well-maintained community beach and park."
        ]
    },
    "mullins-river-cities-v2": {
        "desc": "Mullins River is a historic and historically significant village located on the coast of the Stann Creek District. Once a major commercial center and one of the largest settlements in the country, it served as the primary port for the export of fruit and timber from the interior. Although the village's population has decreased significantly since its colonial heyday, it remains a proud and resilient community with a deep connection to its past. Mullins River is known for its beautiful coastal setting, its historic ruins, and its friendly, close-knit population. The village offers a fascinating glimpse into the rise and fall of colonial commerce in Belize and remains a peaceful haven for those seeking a quiet, authentic coastal experience.",
        "facts": [
            "Mullins River was once the second-largest town in Belize.",
            "The village is located about 15 miles north of Dangriga Town.",
            "The population is now approximately 100 residents.",
            "It was a major center for the sugar and banana trades in the 19th century.",
            "The village is accessible via the scenic Coastal Road.",
            "It features several historic brick structures and a colonial-era cemetery.",
            "Mullins River remains a popular spot for local fishing and sea bathing."
        ]
    },
    "wales-viejol-cities-v2": {
        "desc": "Wales Viejo is a small and quiet residential community located in the Stann Creek District, situated in a fertile agricultural region known for its citrus production. The name likely refers to its origins as an older settlement or camp used by timber workers and early farmers. Today, Wales Viejo is a peaceful village where traditional farming practices still prevail. Its proximity to the larger towns of southern Belize makes it a quiet retreat for families who value a slower pace of life and a strong connection to the land. The community is closely knit and maintains strong ties to the surrounding agricultural landscape, reflecting the enduring rural character of the Stann Creek District's heartland.",
        "facts": [
            "Wales Viejo is located about 10 miles west of Dangriga Town.",
            "The population is approximately 150 residents.",
            "Small-scale citrus farming is the main local occupation.",
            "It is situated in a picturesque area near the Stann Creek River.",
            "The village has a rich history tied to the early timber trade.",
            "Access to the village is via rural roads from the Hummingbird Highway.",
            "The community is known for its friendly and peaceful atmosphere."
        ]
    },
    "valley-community-cities-v2": {
        "desc": "Valley Community is a thriving and culturally diverse village located along the scenic Hummingbird Highway in the Stann Creek District. Situated in the fertile Stann Creek Valley, the community is a major center for the citrus industry, with vast groves surrounding the village. Valley Community is known for its bustling atmosphere, its diverse population, and its role as a key node for trade and transport between the coast and the interior. The village is home to many families working in the citrus processing plants and the agricultural estates. With its lush mountain views, its productive landscapes, and its active community life, Valley Community represents the successful industrial-agricultural heart of central Belize.",
        "facts": [
            "Valley Community is located 12 miles west of Dangriga Town.",
            "The population is approximately 1,200 residents.",
            "It is a major hub for the CPBL (Citrus Products of Belize Ltd) operations.",
            "The village is situated directly on the Hummingbird Highway.",
            "The area is famous for its high-quality Valencia oranges and grapefruit.",
            "The community features several large primary schools and a health center.",
            "It sits in one of the most scenic and fertile valleys in Belize."
        ]
    },
    "hummingbird-community-cities-v2": {
        "desc": "Hummingbird Community is a picturesque and rapidly growing village located along the Hummingbird Highway in the Cayo District, near the border with Stann Creek. The community is named after the scenic highway and the abundance of hummingbirds found in the lush surrounding forest. Originally a small agricultural settlement, it has become a popular residential area for those seeking a quiet life close to nature and the adventure hubs of central Belize. Hummingbird Community is characterized by its rolling hills, clear mountain streams, and its mix of traditional farming and modern suburban life. The village is home to a diverse and friendly population that prides itself on its beautiful natural setting and its strong sense of community spirit.",
        "facts": [
            "Hummingbird Community is located 15 miles south of Belmopan city.",
            "The population is approximately 600 residents.",
            "The village is a major center for small-scale organic and spice farming.",
            "It is situated near the entrance to the St. Herman's Blue Hole National Park.",
            "The area is exceptionally rich in birdlife and tropical flora.",
            "It features several popular eco-lodges and guesthouses.",
            "The community is known for its cool mountain climate and scenic views."
        ]
    },
    "Middlesex-cities-v2": {
        "desc": "Middlesex is a historic and culturally significant village located at the highest point of the Hummingbird Highway in the Stann Creek District. Founded in the early 20th century as a center for the citrus and timber industries, it was once a major railway hub for the Stann Creek Valley. Today, Middlesex is a quiet and scenic village known for its lush landscapes and its deep roots in the agricultural history of the region. The village is surrounded by vast citrus groves and tropical forest, providing a tranquil and beautiful setting. With its historic character, its friendly residents, and its strategic location between the capital and the coast, Middlesex offers a charming glimpse into the colonial-industrial past and the modern rural life of Belize.",
        "facts": [
            "Middlesex is located 21 miles west of Dangriga Town.",
            "The population is approximately 400 residents.",
            "The village was the terminus of the historic Stann Creek Railway.",
            "It is a major center for the regional citrus and cacao production.",
            "The area is known for its cool temperatures and high rainfall.",
            "It features several historic wooden structures from the railway era.",
            "The village is situated near the spectacular Billy Barquedier National Park."
        ]
    },
    "stead-fast-cities-v2": {
        "desc": "Steadfast is a large and thriving village in the Stann Creek District, situated along the Hummingbird Highway in the heart of the citrus-producing region. The community is known for its industrious spirit and its resilient population, many of whom have worked in the citrus industry for generations. Steadfast is a major residential center, providing housing and services for families working in the nearby processing plants and estates. The village has a lively and active community life, with a strong focus on family, education, and social organizations. Its location along the main highway ensures that it remains a vital part of the district's social and economic fabric, reflecting the enduring hard work and community pride that define much of central Belize.",
        "facts": [
            "Steadfast is located 15 miles west of Dangriga Town.",
            "The population is approximately 1,500 residents.",
            "The village is a major hub for the local citrus and banana workforce.",
            "It was established in the mid-20th century.",
            "The community is known for its traditional Belizean music and dance.",
            "It features several large primary schools and community centers.",
            "The area is characterized by its fertile valley and lush mountain views."
        ]
    },
    "pomona-cities-v2": {
        "desc": "Pomona is a significant industrial and agricultural community in the Stann Creek District, famous as the home of the Citrus Products of Belize Ltd (CPBL) factory. Named after the Roman goddess of fruit, the village is the epicenter of the nation's citrus industry, where the majority of Belize's oranges and grapefruits are processed for export. Pomona is a bustling hub of activity, particularly during the harvest season when the scent of citrus fills the air and trucks converge on the factory. The community is a melting pot of cultures, home to workers and managers from across the country and beyond. With its mix of industrial heritage and lush agricultural setting, Pomona is a vital and prosperous part of the Stann Creek District's economy.",
        "facts": [
            "Pomona is the headquarters of the Belize citrus processing industry.",
            "The population is approximately 1,200 residents.",
            "It is located about 10 miles west of Dangriga Town.",
            "The CPBL factory here is one of the largest employers in southern Belize.",
            "The village was named after the ancient deity of orchards and fruit.",
            "It is situated in the fertile and scenic Stann Creek Valley.",
            "The community features a range of industrial and residential facilities."
        ]
    },
    "hope-creek-cities-v2": {
        "desc": "Hope Creek is a large and rapidly expanding village located just a few miles west of Dangriga Town in the Stann Creek District. Situated at the crossroads of the Hummingbird and Southern highways, it is a bustling transportation hub and a popular residential area for families working in the citrus industry and the nearby town. Hope Creek is characterized by its organized layout, its active local commerce, and its diverse population. The village has a lively community spirit, with a strong focus on development and modernization. Its strategic location and its role as a gateway to both the south and the west make it a vital and convenient node in Belize's national infrastructure, reflecting the steady growth and prosperity of the Stann Creek District.",
        "facts": [
            "Hope Creek is located 5 miles west of Dangriga Town.",
            "The population is estimated to be over 2,500 residents.",
            "It is situated at the historic junction of two major national highways.",
            "The village serves as a major residential suburb for Dangriga.",
            "It is a key center for the regional citrus and banana transportation.",
            "The community features several large primary schools and a health center.",
            "The area is home to numerous small businesses and roadside markets."
        ]
    },
    "sarawee-cities-v2": {
        "desc": "Sarawee is a quiet and scenic agricultural village in the Stann Creek District, situated just north of Hope Creek. The community is primarily involved in small-scale farming and the citrus industry, benefiting from the fertile alluvial soil of the region. Sarawee has a peaceful and friendly atmosphere, where residents enjoy a close connection to the land and the nearby mountains. The village is characterized by its lush greenery and its well-maintained family farms. Its proximity to the main highway and the larger towns of the district ensures that residents have access to essential services while enjoying the privacy and community spirit of a traditional Belizean settlement. Sarawee remains a quintessential example of the Stann Creek District's rural charm and its enduring agricultural heritage.",
        "facts": [
            "Sarawee is located about 4 miles west of Dangriga Town.",
            "The population is approximately 600 residents.",
            "Small-scale commercial farming is the primary local occupation.",
            "It is situated in a picturesque area near the foothills of the Maya Mountains.",
            "The community was established as a farming settlement in the mid-20th century.",
            "The village is known for its productive fruit orchards and ground foods.",
            "Access to the village is via the main Hummingbird Highway."
        ]
    },
    "may-day-cities-v2": {
        "desc": "May Day is a small and traditionally residential community located in the Stann Creek District, situated in a fertile agricultural region known for its citrus and banana production. The village takes its name from the historic May Day celebrations that were once a major part of the local social calendar. Today, May Day is a quiet village where families maintain a strong connection to the land and the agricultural history of the region. The community is closely knit and maintains strong ties to the surrounding agricultural landscape, reflecting the enduring rural character and the hard-working spirit of the people who inhabit the Stann Creek District's heartland.",
        "facts": [
            "May Day is located about 8 miles west of Dangriga Town.",
            "The population is approximately 200 residents.",
            "The village is primarily home to workers in the citrus industry.",
            "It was established in the mid-20th century.",
            "The community is known for its peaceful, rural atmosphere.",
            "Small-scale farming remains an important part of daily life.",
            "It features several historic wooden structures and family estates."
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
