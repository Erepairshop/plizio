
import re
import os

file_path = "lib/visualLab/data/poiExtraBelizeCitiesV2.ts"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

seo_data = {
    "esperanza-cities-v2": {
        "desc": "Esperanza is a large and thriving village in the Cayo District, located just a few miles east of the sister towns of San Ignacio and Santa Elena. The village's name, which means 'Hope' in Spanish, reflects the optimistic spirit of the diverse community that has made it their home. Esperanza is a major residential hub, providing housing for many families working in the tourism and service sectors of western Belize. The village is known for its lively main street, active churches, and strong focus on community development. Its proximity to the George Price Highway and the urban amenities of San Ignacio makes it a convenient and desirable place to live, embodying the steady growth and vibrant social fabric of the Cayo District.",
        "facts": [
            "Esperanza is located approximately 3 miles east of San Ignacio.",
            "The population is estimated to be over 3,000 residents.",
            "The village has a diverse ethnic makeup, including Mestizo and Creole families.",
            "It is situated along the main George Price Highway.",
            "Esperanza is home to several large primary schools and community centers.",
            "The village serves as a major residential suburb for San Ignacio.",
            "It features many small businesses catering to the local and transit population."
        ]
    },
    "duck-run-1-cities-v2": {
        "desc": "Duck Run 1 is a peaceful and productive agricultural village located in the Cayo District, situated along the banks of the Belize River. The community is part of a cluster of villages that have strong ties to the Mennonite settlements and the local farming industry. Duck Run 1 is known for its fertile alluvial soil, producing a variety of crops including corn, beans, and vegetables. The village has a quiet, rural atmosphere where traditional farming values remain a cornerstone of daily life. Its location near the river provides natural beauty and opportunities for recreation, while its connection to the regional transport network ensures that its produce reaches markets throughout western Belize. Duck Run 1 represents the enduring success of small-scale commercial farming in the heart of the district.",
        "facts": [
            "Duck Run 1 is located about 5 miles north of Spanish Lookout.",
            "The population is approximately 1,200 residents.",
            "The village is a major center for small-scale commercial agriculture.",
            "It is situated in a fertile region within the Belize River Valley.",
            "The community was established in the mid-20th century.",
            "It features a mix of Mestizo and Mennonite cultural influences.",
            "The area is known for its well-maintained family farms and livestock."
        ]
    },
    "duck-run-2-cities-v2": {
        "desc": "Duck Run 2 is a vibrant and growing community that forms the second half of the Duck Run settlement area in the Cayo District. Like its neighbor, it is a center for agricultural production, with a strong focus on livestock and grain farming. The village is characterized by its sprawling layout and its close-knit community of hardworking residents. Duck Run 2 has seen significant growth in recent years, as more families are drawn to the area's fertile land and peaceful rural lifestyle. The village maintains a strong connection to the nearby Spanish Lookout community, often collaborating on agricultural projects and infrastructure. With its rolling hills and productive landscapes, Duck Run 2 is a vital part of the Cayo District's agricultural heartland, contributing to the nation's food security.",
        "facts": [
            "Duck Run 2 is located adjacent to Duck Run 1 in the Cayo District.",
            "The population is approximately 1,000 residents.",
            "Agriculture is the primary occupation, with a focus on cattle and corn.",
            "The community has a diverse ethnic makeup, including many recent settlers.",
            "It is accessible via a network of all-weather gravel roads.",
            "The village features several small churches and a local primary school.",
            "The area is known for its scenic views of the Maya Mountain foothills."
        ]
    },
    "billy-white-cities-v2": {
        "desc": "Billy White is a small and quiet residential village located in the Cayo District, situated near the banks of the Belize River. The community has a rich history tied to the early agricultural development of the region and is named after one of its founding residents. Today, Billy White is a peaceful retreat, home to families who appreciate a slower pace of life and a strong connection to nature. The village is surrounded by fertile farmland and lush tropical vegetation, providing a scenic and tranquil setting. Its proximity to the larger towns of Spanish Lookout and San Ignacio ensures that residents have access to essential services while enjoying the privacy and community spirit of a traditional Belizean village. Billy White remains a quintessential example of the district's rural charm.",
        "facts": [
            "Billy White is located about 6 miles northwest of San Ignacio.",
            "The village has a population of approximately 500 residents.",
            "Small-scale farming and gardening are the main local activities.",
            "It is situated in a picturesque area near the Belize River.",
            "The community is known for its friendly and welcoming atmosphere.",
            "The village was established as a farming settlement in the mid-20th century.",
            "Access to the village is via scenic rural roads from the main highway."
        ]
    },
    "santa-familia-cities-v2": {
        "desc": "Santa Familia is a large and culturally rich village in the Cayo District, beautifully situated on the northern bank of the Belize River. The community has a strong Mestizo heritage and is known for its deep roots in the agricultural and timber history of western Belize. Santa Familia is a thriving center for commercial farming, particularly the production of corn, beans, and livestock. The village is characterized by its lively community spirit, active Catholic parish, and well-organized social events. Its location near the river offers stunning views and a fertile environment that has supported generations of families. With its blend of traditional rural values and modern development, Santa Familia is a vital and prosperous part of the Cayo District's vibrant network of riverine villages.",
        "facts": [
            "Santa Familia is located approximately 6 miles northwest of San Ignacio.",
            "The population is estimated to be over 2,000 residents.",
            "The village was founded in the early 20th century.",
            "It is a major center for small and medium-scale commercial agriculture.",
            "The village is situated on a terrace overlooking the Belize River.",
            "It features several large community parks and primary schools.",
            "The area is famous for its traditional Mestizo cuisine and festivals."
        ]
    },
    "bullet-tree-falls-cities-v2": {
        "desc": "Bullet Tree Falls is a picturesque and popular village located on the banks of the Mopan River, just a few miles west of San Ignacio. The village takes its name from the 'bullet tree' (Bucida buceras) that was once abundant in the area and prized for its hard wood. Today, Bullet Tree is a favored destination for both locals and travelers, offering beautiful riverfront scenery, gentle rapids, and several charming eco-lodges. The community is a vibrant mix of Maya and Mestizo cultures, known for its friendly atmosphere and its role as a gateway to the nearby El Pilar ruins. Whether enjoying a swim in the cool river waters or exploring the lush surrounding forest, visitors to Bullet Tree Falls find a peaceful and authentic slice of western Belizean life.",
        "facts": [
            "Bullet Tree Falls is located 3 miles west of San Ignacio Town.",
            "The population is approximately 2,500 residents.",
            "The village is situated at a scenic point on the Mopan River.",
            "It is the primary gateway for tours to the El Pilar archaeological site.",
            "The community has a rich history tied to the chicle and timber trades.",
            "The Mopan River here is a popular spot for tubing and swimming.",
            "The village features several traditional thatched-roof restaurants and bars."
        ]
    },
    "san-antonio-cayo-cities-v2": {
        "desc": "San Antonio is a large and historic Maya village located in the foothills of the Maya Mountains in the Cayo District. It is one of the most culturally significant communities in western Belize, primarily home to Yucatec Maya descendants who have proudly preserved their ancestral traditions. San Antonio is a center for traditional agriculture, particularly the cultivation of peanuts, corn, and beans. The village is also famous for its vibrant arts and crafts scene, including the world-renowned San Antonio Women's Cooperative, which teaches traditional pottery and weaving. With its stunning views of the surrounding mountains, its deep cultural roots, and its commitment to sustainable community development, San Antonio offers visitors a profound and authentic look at the enduring spirit of the Maya people.",
        "facts": [
            "San Antonio is the largest Yucatec Maya village in Belize.",
            "The population is approximately 3,500 residents.",
            "It is located about 9 miles south of San Ignacio Town.",
            "The village is a major producer of peanuts and citrus in the district.",
            "It is home to the famous San Antonio Women's Cooperative.",
            "The community was founded in the late 19th century.",
            "It sits at the gateway to the Mountain Pine Ridge Forest Reserve."
        ]
    },
    "cristo-rey-cities-v2": {
        "desc": "Cristo Rey is a beautiful and growing village in the Cayo District, nestled along the banks of the Macal River at the foot of the Maya Mountains. The village is known for its lush tropical setting, its clear river waters, and its proximity to several popular nature reserves and adventure sites. Cristo Rey is primarily a residential and agricultural community, with many families involved in small-scale farming and the local tourism sector. The village has a peaceful and welcoming atmosphere, making it a favorite for those seeking a more tranquil life close to nature. Its location along the main road to the mountains makes it a convenient stop for travelers heading to the pine forests and waterfalls of the interior, reflecting the scenic and adventurous spirit of western Belize.",
        "facts": [
            "Cristo Rey is located 3 miles south of Santa Elena Town.",
            "The population is approximately 1,500 residents.",
            "The village is situated in a picturesque valley along the Macal River.",
            "It is home to several popular eco-lodges and riverfront resorts.",
            "The community has a diverse mix of Mestizo and Maya cultural influences.",
            "Small-scale agriculture, including cocoa and fruit, is common in the area.",
            "The village is a major hub for river tubing and canoeing tours."
        ]
    },
    "seven-miles-cities-v2": {
        "desc": "Seven Miles, also known as El Progresso, is a remote and resilient agricultural village located deep within the Cayo District, along the road to the Mountain Pine Ridge Forest Reserve. The community was established by hardworking families seeking new land for farming and has grown into a vital center for small-scale commercial agriculture. Seven Miles is characterized by its rugged terrain, its stunning mountain views, and its strong spirit of independence. The village is a major producer of vegetables and grains, supplying local markets despite the challenges of its remote location. For visitors, Seven Miles offers a raw and authentic look at the pioneering spirit of rural Belize, where life is deeply connected to the cycles of the seasons and the untamed beauty of the highlands.",
        "facts": [
            "Seven Miles is located about 15 miles south of Georgeville.",
            "The population is approximately 1,200 residents.",
            "The village is a major producer of beans and corn in the southern Cayo District.",
            "It is situated at a high elevation with panoramic views of the Maya Mountains.",
            "The community is known for its hardworking and self-sufficient residents.",
            "The area was originally settled as a farming frontier in the late 20th century.",
            "It features several small churches and a local primary school."
        ]
    },
    "san-pedro-columbia-cities-v2": {
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
    "san-antonio-toledo-cities-v2": {
        "desc": "San Antonio is the cultural and administrative heart of the Mopan Maya people in the Toledo District. Perched on a hillside with stunning views of the surrounding valleys and the Maya Mountains, the village is one of the largest and most prosperous Maya communities in Belize. San Antonio has a rich history, having been founded by refugees from San Luis, Guatemala, in the 1880s. The village is a major center for traditional and commercial agriculture, particularly the production of corn, beans, and cacao. The community is known for its beautiful stone church, its active social organizations, and its strong commitment to preserving Maya language and culture. San Antonio offers a fascinating and authentic look at the modern Maya way of life in southern Belize.",
        "facts": [
            "San Antonio was founded in 1883 by Mopan Maya refugees.",
            "The population is approximately 3,500 residents.",
            "It is located 21 miles west of Punta Gorda Town.",
            "The village is built on a series of natural hills and ridges.",
            "The San Luis Rey Church in the village is built from limestone and ancient ruins.",
            "It is a major hub for the regional Maya community in Toledo.",
            "The village is famous for its colorful celebrations of the San Luis feast day."
        ]
    },
    "blue-creek-toledo-cities-v2": {
        "desc": "Blue Creek is a stunningly beautiful and remote village in the Toledo District, famous for its namesake creek and the spectacular Hokeb Ha Cave. The village is home to a mix of Mopan and Q'eqchi' Maya families who live in a lush tropical setting surrounded by dense rainforest and limestone cliffs. Blue Creek is a premier destination for eco-tourists and adventure seekers, offering crystal-clear swimming holes, jungle hiking, and the opportunity to explore one of Belize's most impressive cave systems. The community is deeply committed to conservation and sustainable tourism, managing its own nature reserve and eco-lodges. With its raw natural beauty and its tranquil atmosphere, Blue Creek provides an unforgettable experience for those seeking to connect with the wild heart of southern Belize.",
        "facts": [
            "Blue Creek is located about 25 miles northwest of Punta Gorda Town.",
            "The population is approximately 400 residents.",
            "It is the site of the Blue Creek Nature Reserve and Hokeb Ha Cave.",
            "The creek is famous for its sapphire-blue, crystal-clear water.",
            "The village was established as a farming community in the 1960s.",
            "It is a major center for cacao and subsistence farming in the area.",
            "The community is completely off-grid, relying on solar and natural resources."
        ]
    },
    "aguacate-cities-v2": {
        "desc": "Aguacate is a remote and traditional Q'eqchi' Maya village located deep within the Toledo District, nestled in a fertile valley surrounded by lush tropical forest. The village takes its name from the avocado trees that are abundant in the area and is a quintessential example of the resilient and self-sufficient Maya communities of the south. Aguacate is known for its beautiful natural setting, its simple and sustainable way of life, and its commitment to preserving the Q'eqchi' language and customs. The community is primarily involved in subsistence farming, producing corn, beans, and rice. For the few travelers who make the journey, Aguacate offers a rare and authentic glimpse into a world where life is still deeply attuned to the rhythms of nature and ancestral traditions.",
        "facts": [
            "Aguacate is located about 30 miles northwest of Punta Gorda Town.",
            "The population is approximately 500 residents.",
            "The village is accessible via a rugged and scenic 4x4 road.",
            "It is situated near the Aguacate Lagoon and numerous small caves.",
            "Traditional thatched-roof houses are common throughout the village.",
            "The community is known for its expertise in sustainable rainforest farming.",
            "The village features a small community-run eco-lodge for visitors."
        ]
    },
    "san-benito-poite-cities-v2": {
        "desc": "San Benito Poite is a remote and traditional Maya village located in the southwestern corner of the Toledo District, near the Moho River and the Guatemalan border. This isolated community is primarily home to Q'eqchi' Maya families who maintain a deeply traditional way of life centered on the forest and the land. San Benito Poite is known for its raw natural beauty, its vast areas of untouched rainforest, and its strong sense of community. The village is primarily involved in subsistence agriculture, with residents farming corn, beans, and cacao. Due to its remote location, the village remains one of the most culturally intact Maya communities in Belize, offering a profound look at the enduring traditions and the resilient spirit of the people who inhabit the country's most isolated regions.",
        "facts": [
            "San Benito Poite is located about 40 miles west of Punta Gorda Town.",
            "The population is approximately 600 residents.",
            "The village is one of the most remote settlements in Belize.",
            "It is situated near the confluence of the Poite and Moho rivers.",
            "Access to the village is often difficult, especially during the rainy season.",
            "Traditional Maya crafts and weaving are still widely practiced here.",
            "The village is a key site for researchers studying remote Maya linguistics and culture."
        ]
    },
    "san-jose-toledo-cities-v2": {
        "desc": "San Jose is a large and thriving Mopan Maya village located in the Toledo District, known for its industrious community and its beautiful setting in the foothills of the Maya Mountains. The village is a center for agricultural excellence, producing significant quantities of cacao, corn, and ground foods that are sold in markets throughout southern Belize. San Jose has a lively and prosperous feel, with many well-maintained houses and active community organizations. The residents are proud of their heritage and work hard to balance modern development with the preservation of their ancestral traditions. With its scenic mountain views, its lush tropical landscape, and its friendly, welcoming people, San Jose represents the success and vitality of the modern Mopan Maya communities in the Toledo District.",
        "facts": [
            "San Jose is one of the largest Mopan Maya villages in Toledo.",
            "The population is approximately 1,200 residents.",
            "It is located about 25 miles northwest of Punta Gorda Town.",
            "The village is a major participant in the regional cacao trade.",
            "It was established in the mid-20th century by expanding Maya families.",
            "The community features a large and active primary school and health post.",
            "The area is known for its high-quality agricultural terraces."
        ]
    },
    "santa-cruz-toledo-cities-v2": {
        "desc": "Santa Cruz is a picturesque and historically significant Maya village in the Toledo District, famously situated on the doorstep of the Uxbenka archaeological site. The village is home to a community of Mopan Maya who have built their lives among the ancient ruins and the rolling hills of the southern highlands. Santa Cruz is known for its stunning panoramic views, its clean and organized layout, and its commitment to community-based tourism. Residents are primarily involved in small-scale farming, particularly cacao and citrus, and many serve as guides for the nearby ruins. With its blend of ancient history, natural beauty, and a warm, vibrant culture, Santa Cruz offers visitors a unique and educational experience in the heart of one of Belize's most scenic Maya landscapes.",
        "facts": [
            "Santa Cruz is located approximately 23 miles west of Punta Gorda Town.",
            "The population is about 600 residents.",
            "The village is the main gateway to the Uxbenka Maya ruins.",
            "It features some of the best mountain views in southern Belize.",
            "The community manages its own eco-tourism projects and guesthouses.",
            "Cacao production is a major part of the local economy.",
            "The village was named 'Santa Cruz' (Holy Cross) in the early 20th century."
        ]
    },
    "conejo-cities-v2": {
        "desc": "Conejo is a small and remote Q'eqchi' Maya village located in the Toledo District, situated in a fertile region near the Sarstoon-Temash National Park. The community is known for its peaceful and traditional way of life, where residents are deeply connected to the surrounding tropical forest and the Temash River. Conejo is primarily an agricultural village, with families farming cacao, rice, and subsistence crops. The community has gained national recognition for its strong commitment to land rights and environmental conservation, working to protect its traditional territories from encroachment. With its raw natural beauty, its rich biodiversity, and its resilient spirit, Conejo offers a glimpse into the life of a modern Maya community dedicated to preserving both its heritage and the natural world.",
        "facts": [
            "Conejo is located about 30 miles southwest of Punta Gorda Town.",
            "The population is approximately 300 residents.",
            "The village is situated near the Temash River, a major waterway for trade.",
            "It is a key community in the Sarstoon-Temash Institute for Indigenous Management.",
            "The area is home to rare species like the white-lipped peccary.",
            "Agriculture is focused on sustainable, low-impact rainforest farming.",
            "The village is accessible via river or rugged backcountry roads."
        ]
    },
    "sunday-wood-cities-v2": {
        "desc": "Sunday Wood is a remote and traditional Q'eqchi' Maya village located in the southernmost part of the Toledo District, situated near the Sarstoon River and the border with Guatemala. The community is known for its isolation, its raw natural beauty, and its deeply traditional way of life. Residents of Sunday Wood are primarily involved in subsistence farming, living in harmony with the vast areas of untouched rainforest that surround the village. The community is a fascinating cultural enclave where the Q'eqchi' language and customs remain the primary influence on daily life. For the few who visit, Sunday Wood offers a profound and authentic experience in one of the last true wilderness frontiers of Belize, where the modern world feels very far away and the ancient spirit of the forest prevails.",
        "facts": [
            "Sunday Wood is located about 35 miles southwest of Punta Gorda Town.",
            "The population is approximately 400 residents.",
            "It is one of the southernmost accessible villages in Belize.",
            "The village is situated near the banks of the Sarstoon River.",
            "Access is via river or very challenging land routes from PG.",
            "The community maintains a strong traditional social and political structure.",
            "The area is exceptionally rich in tropical bird and orchid species."
        ]
    },
    "corazon-cities-v2": {
        "desc": "Corazon is a remote and historically significant Maya village in the Toledo District, situated near the border with Guatemala. The community was founded by Mopan Maya families who sought a peaceful and fertile environment for their traditional way of life. Corazon is known for its rugged terrain, its stunning views of the surrounding hills, and its resilient and self-sufficient population. The village is primarily involved in agricultural production, with a focus on cacao, corn, and ground foods. Due to its isolated location, Corazon has remained a stronghold of Maya culture and tradition, offering a rare look at the enduring spirit and the hard-working nature of the people who inhabit the most remote regions of southern Belize. The village remains a vital and culturally rich part of the Toledo District's Maya heartland.",
        "facts": [
            "Corazon is located about 32 miles northwest of Punta Gorda Town.",
            "The population is approximately 500 residents.",
            "The village is named 'Corazon' (Heart) in Spanish, reflecting its central forest location.",
            "It is situated on a high ridge overlooking the Temash River valley.",
            "Cacao is a major commercial crop for the village's farmers.",
            "Traditional Maya architecture and thatched roofs are common.",
            "The village is accessible via a rugged and scenic mountain road."
        ]
    },
    "otoxha-cities-v2": {
        "desc": "Otoxha is one of the most remote and traditional Q'eqchi' Maya villages in the Toledo District, located in the far southwestern corner of Belize. The community is nestled in a lush valley near the Temash River and is surrounded by some of the most pristine and biodiverse rainforests in the country. Residents of Otoxha maintain a deeply traditional lifestyle centered on subsistence farming and the gathering of forest resources. The village is known for its strong community bonds, its beautiful traditional crafts, and its commitment to preserving the Q'eqchi' way of life. For the adventurous traveler, Otoxha offers an unparalleled opportunity to experience an authentic and undisturbed Maya culture in a setting of immense natural beauty and spiritual significance, far removed from the modern world.",
        "facts": [
            "Otoxha is located approximately 45 miles west of Punta Gorda Town.",
            "The population is about 450 residents.",
            "It is one of the most isolated communities in all of Belize.",
            "The village name means 'Place of Many Trees' in Q'eqchi'.",
            "Access to the village is via a challenging trek or boat journey.",
            "The community is known for its beautiful handmade hammocks and bags.",
            "The area is a critical habitat for many endangered Central American species."
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
