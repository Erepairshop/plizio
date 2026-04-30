
import re
import os

file_path = "lib/visualLab/data/poiExtraBelizeCitiesV2.ts"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

seo_data = {
    "hattieville-cities-v2": {
        "desc": "Hattieville is a significant and resilient community located just 16 miles west of Belize City along the George Price Highway. The village has a unique origin story, as it was established as a refugee camp for residents of Belize City who were displaced by the devastating Hurricane Hattie in 1961. Over the decades, Hattieville has evolved into a permanent and thriving settlement, serving as a vital residential hub for people working in the city and the nearby correctional facility. The community is known for its strong spirit of survival and its role as a crossroad for travelers heading to the western and southern parts of the country. Hattieville remains a testament to the endurance of the Belizean people and the historical impact of the 1961 hurricane.",
        "facts": [
            "Hattieville was founded as a temporary refugee camp in 1961.",
            "It is named after Hurricane Hattie, which necessitated its creation.",
            "The village is home to the Belize Central Prison.",
            "The population is approximately 5,000 residents.",
            "It is situated at the junction of the George Price Highway and the Burrell Boom Road.",
            "The area was originally dominated by tropical savanna and pine forests.",
            "It serves as a major commuter hub for Belize City."
        ]
    },
    "sand-hill-cities-v2": {
        "desc": "Sand Hill is a large and growing village located in the Belize District, situated at the important junction of the Phillip Goldson and Old Northern highways. Originally a small agricultural settlement, its strategic location has made it a bustling crossroads and a popular residential area for those commuting to Belize City. The village is characterized by its sandy soil, which gave it its name, and its mix of traditional rural life and modern development. Sand Hill serves as the gateway to the northern part of the country and the historic sites along the Old Northern Highway, including Altun Ha. The community is known for its friendly residents and its role as a vital node in the national transportation network, providing essential services to travelers and locals alike.",
        "facts": [
            "Sand Hill is located 19 miles north of Belize City.",
            "It is the starting point of the Old Northern Highway.",
            "The population is approximately 2,000 residents.",
            "The village is a major hub for public transportation heading north.",
            "It was originally a center for small-scale timber and livestock production.",
            "The area is home to several large residential developments.",
            "Sand Hill sits at a strategic junction connecting the city with the northern districts."
        ]
    },
    "burrell-boom-cities-v2": {
        "desc": "Burrell Boom is a picturesque and historically rich village located on the banks of the Belize River, known for its scenic beauty and its role in the colonial timber industry. The village takes its name from the 'booms'—heavy chains stretched across the river to catch mahogany logs floating downstream from the interior. Today, Burrell Boom is a peaceful and sought-after residential area, famous for its lush landscapes, abundant fruit trees, and colonial-era charm. The village is the site of the annual La Ruta Maya river challenge, where spectators gather to cheer on canoeists. With its quiet streets, friendly atmosphere, and proximity to both the city and the Community Baboon Sanctuary, Burrell Boom offers a perfect blend of history, nature, and tranquil rural life.",
        "facts": [
            "Burrell Boom was established in the 18th century as a logging camp.",
            "It is located about 20 miles west of Belize City.",
            "The population is approximately 1,500 residents.",
            "The village is famous for its artisanal fruit wines and preserves.",
            "It serves as a major checkpoint for the annual La Ruta Maya canoe race.",
            "The historic 'boom' chains can still be seen in parts of the river.",
            "The area is a favorite for birdwatchers and nature enthusiasts."
        ]
    },
    "lord-bank-cities-v2": {
        "desc": "Lord's Bank is a rapidly developing residential community located just a few miles from Ladyville and the international airport. Once a quiet rural area, it has become one of the most popular suburbs for families and professionals seeking a peaceful environment within commuting distance of Belize City. The community is characterized by its modern housing developments, quiet streets, and a growing range of local services. Lord's Bank offers a more suburban feel than many other villages in the district, with a focus on family life and community safety. Its proximity to the main highway and the urban amenities of Ladyville makes it a convenient and desirable place to live, reflecting the ongoing suburbanization and growth of the Belize District.",
        "facts": [
            "Lord's Bank is a major suburb in the Ladyville area.",
            "It is located approximately 10 miles from downtown Belize City.",
            "The population has seen significant growth, now exceeding 3,000 residents.",
            "The community is primarily residential with several new gated developments.",
            "It is situated just north of the Phillip Goldson International Airport.",
            "The area was originally part of a large estate owned by the Lord family.",
            "It features several community parks and primary schools."
        ]
    },
    "independence-village-cities-v2": {
        "desc": "Independence Village, along with its neighbor Mango Creek, forms a major economic and transportation hub in the Stann Creek District. Located near the coast, it serves as the primary land-based gateway to the Placencia Peninsula, with regular water taxi services connecting the two. Independence has grown significantly due to its proximity to the Big Creek Port, the country's main port for banana and oil exports. The village is a bustling center of commerce, home to a diverse population employed in the port, agricultural, and service sectors. With its busy bus terminal, numerous shops, and active community life, Independence is a vital node in southern Belize's infrastructure, facilitating trade and travel for the entire region.",
        "facts": [
            "Independence was renamed in 1981 to commemorate Belizean independence.",
            "It is the main hub for the Big Creek Port operations.",
            "The population of Independence and Mango Creek is over 4,000.",
            "It is located about 40 miles south of Dangriga Town.",
            "The village is the primary transit point for travelers heading to Placencia.",
            "It is a major center for the export of bananas, citrus, and crude oil.",
            "The Hokey Pokey water taxi connects the village to Placencia in 15 minutes."
        ]
    },
    "mango-creek-cities-v2": {
        "desc": "Mango Creek is a historically significant and hard-working community that forms a single urban unit with Independence Village. Originally established as a logging and fruit-exporting settlement, it takes its name from the abundance of mango trees and the nearby creek that provided access to the sea. Mango Creek is deeply tied to the industrial history of southern Belize, having served as a key point for the mahogany trade and later the banana industry. Today, it remains a vital part of the region's economy, supporting the operations of the Big Creek Port and the surrounding agricultural estates. The community is known for its resilient spirit and its role as a bustling crossroads for people and goods moving throughout the Stann Creek and Toledo districts.",
        "facts": [
            "Mango Creek was established as a logging camp in the early 20th century.",
            "It is situated on the banks of the Mango Creek, which flows into the Caribbean.",
            "The village is home to many workers from the Big Creek Port.",
            "It features several historic structures from the colonial timber era.",
            "The population is integrated with that of Independence Village.",
            "It is a major hub for the regional bus network in southern Belize.",
            "The area is surrounded by extensive banana and citrus plantations."
        ]
    },
    "bella-vista-cities-v2": {
        "desc": "Bella Vista is a rapidly growing and culturally diverse village located at the junction of the Stann Creek and Toledo districts. Originally settled by families working in the nearby banana plantations, it has evolved into a large and bustling community that serves as a major residential and commercial center for the agricultural workforce. Bella Vista is home to a significant population of immigrants from neighboring Central American countries, creating a vibrant and multi-cultural atmosphere. The village is a key node along the Southern Highway, providing essential services, shops, and transport for the thousands of people who live and work in the surrounding agricultural belt. Its growth reflects the dynamic and evolving nature of the rural economy in southern Belize.",
        "facts": [
            "Bella Vista is one of the fastest-growing villages in southern Belize.",
            "It is located near the boundary of the Stann Creek and Toledo districts.",
            "The population is estimated to have surpassed 5,000 residents.",
            "Most residents are employed in the banana and citrus industries.",
            "The village features a large and bustling weekly market.",
            "It is situated directly on the Southern Highway.",
            "The community is known for its diverse Central American influences and cuisine."
        ]
    },
    "silk-grass-cities-v2": {
        "desc": "Silk Grass is a thriving and scenic village located in the Stann Creek District, situated along the Southern Highway at the foothills of the Maya Mountains. The village is named after the native silk grass that was once abundant in the area, and it remains deeply connected to its agricultural roots. Silk Grass is a major producer of citrus, bananas, and ground foods, benefiting from the fertile alluvial soils of the region. The community is known for its friendly atmosphere and its beautiful natural setting, with clear mountain streams and lush tropical forest nearby. As a key settlement along the highway, Silk Grass serves as an important hub for the local agricultural economy and a peaceful home for families working in the southern districts.",
        "facts": [
            "Silk Grass is located about 10 miles south of Dangriga Town.",
            "The population is approximately 2,000 residents.",
            "The village is a major center for the regional citrus industry.",
            "It is situated near the entrance to the Mayflower Bocawina National Park.",
            "The community was established in the mid-20th century.",
            "It features several primary schools and a health center.",
            "The area is known for its productive small-scale family farms."
        ]
    },
    "seine-bight-cities-v2": {
        "desc": "Seine Bight is a culturally rich Garifuna village located on the Placencia Peninsula, offering an authentic and traditional contrast to the nearby resort areas. The village has a deep history, having been settled by Garifuna families who sought a peaceful coastal environment for fishing and farming. Seine Bight is a center for Garifuna music, dance, and spirituality, where the ancestral traditions remain a vital part of daily life. Visitors can experience the rhythmic sounds of the drums and savor traditional dishes like Hudut. While the peninsula has seen significant development, Seine Bight remains a proud and resilient community, dedicated to preserving its unique heritage while welcoming travelers who seek a genuine connection with Belize's diverse cultural landscape.",
        "facts": [
            "Seine Bight was founded in 1869 by Garifuna settlers.",
            "It is located midway along the 16-mile Placencia Peninsula.",
            "The population is approximately 1,500 residents.",
            "The village is famous for its traditional Garifuna drumming and Punta music.",
            "It is home to several traditional healing and spiritual centers.",
            "The name refers to a 'bight' or bay where fishing nets (seines) were used.",
            "It hosts a major celebration every November for Garifuna Settlement Day."
        ]
    },
    "buey-viejol-cities-v2": {
        "desc": "Buey Viejo, located in the Cayo District, is a small but historically interesting community situated near the Mopan River. The name, which means 'Old Ox' in Spanish, likely refers to the village's past as a resting point for ox-drawn carts used in the timber and agricultural trade. Today, the village is a quiet residential area where traditional farming practices still prevail. Its proximity to the river and the larger town of Benque Viejo makes it a peaceful retreat for those who appreciate a slower pace of life. The community is closely knit and maintains strong ties to the surrounding landscape, reflecting the enduring rural character and the historic transport routes that helped shape the western border regions of Belize.",
        "facts": [
            "Buey Viejo is located just a few miles from Benque Viejo del Carmen.",
            "The village is situated in a fertile valley near the Mopan River.",
            "It has a small population of approximately 300 residents.",
            "Agriculture, particularly corn and bean farming, is the main occupation.",
            "The area was historically a key stop on the old timber trails.",
            "The village features several traditional colonial-style houses.",
            "It is known for its peaceful, rural atmosphere and scenic river views."
        ]
    },
    "san-jose-cities-v2": {
        "desc": "San Jose is a large and culturally vibrant Maya village located in the Orange Walk District, known for its deep connection to the land and its traditional way of life. The community is primarily made up of Yucatec Maya descendants and is a major center for sugarcane and subsistence farming. San Jose has a lively community spirit, with a strong focus on family, faith, and the preservation of Maya traditions. The village is characterized by its organized layout and its bustling main street, which serves as a hub for local commerce. San Jose's success as an agricultural community reflects the hard work and dedication of its residents, who have turned the surrounding fertile plains into one of the most productive regions in northern Belize.",
        "facts": [
            "San Jose is one of the largest Maya villages in northern Belize.",
            "The population is approximately 3,500 residents.",
            "It is located about 8 miles north of Orange Walk Town.",
            "The village is a major contributor to the national sugarcane industry.",
            "It was established in the mid-20th century by Maya families.",
            "The community is known for its vibrant celebrations of patron saint days.",
            "It features several primary schools and active agricultural cooperatives."
        ]
    },
    "san-pablo-cities-v2": {
        "desc": "San Pablo is a thriving agricultural village in the Orange Walk District, forming a continuous settlement with the neighboring village of San Jose. Together, they represent a major center for the Mestizo and Maya populations of northern Belize. San Pablo is deeply rooted in the sugar industry, with the surrounding landscape dominated by vast fields of sugarcane. The village has a bustling and prosperous feel, with many small businesses and local services catering to its growing population. San Pablo is known for its friendly community and its commitment to agricultural excellence. Its location along the main northern highway ensures that it remains a vital node for trade and transport, reflecting the ongoing development and economic importance of the Orange Walk District.",
        "facts": [
            "San Pablo is located approximately 9 miles north of Orange Walk Town.",
            "The population is approximately 2,500 residents.",
            "The village is a key part of the northern Belize sugar belt.",
            "It features a well-developed infrastructure with schools and health centers.",
            "The community has a strong tradition of community-based sports and festivals.",
            "It is situated directly on the Phillip Goldson Highway.",
            "Most residents are involved in commercial agriculture or the service sector."
        ]
    },
    "valley-of-peace-cities-v2": {
        "desc": "Valley of Peace is a unique and inspirational community in the Cayo District, founded in 1982 as a refugee settlement for families fleeing civil wars in neighboring Central American countries. Established with the support of the United Nations and the Belizean government, the village was designed to provide a safe haven and a new beginning for displaced people. Today, Valley of Peace has evolved into a highly productive agricultural hub, known for its extensive vegetable farms that supply markets throughout Belize. The community is a successful model of integration and resilience, where people of diverse backgrounds have come together to build a peaceful and prosperous life. Its lush, fertile setting and hardworking spirit make it a standout example of human perseverance and community development.",
        "facts": [
            "Valley of Peace was founded in March 1982.",
            "It was originally established for refugees from El Salvador and Guatemala.",
            "The village is a major producer of cabbage, tomatoes, and other vegetables.",
            "The population is approximately 4,000 residents.",
            "It is located about 8 miles north of Belmopan city.",
            "The community manages its own extensive agricultural cooperatives.",
            "The name reflects the founding mission of providing a peaceful sanctuary."
        ]
    },
    "roaring-creek-cities-v2": {
        "desc": "Roaring Creek is a bustling and historic village located at the scenic junction of the George Price and Hummingbird highways, just west of the capital city, Belmopan. The village takes its name from the nearby Roaring Creek, which flows into the Belize River and was once a major waterway for the timber trade. Today, Roaring Creek is a vital crossroads for travelers heading to the western and southern parts of the country. The village is known for its lively atmosphere, its diverse population, and its role as a residential hub for the capital. With its busy markets, roadside eateries, and proximity to the Guanacaste National Park, Roaring Creek offers a perfect blend of transit hub energy and the natural beauty of the Belizean interior.",
        "facts": [
            "Roaring Creek is located about 2 miles west of Belmopan.",
            "The population is approximately 2,500 residents.",
            "It is situated at the historic junction of two major national highways.",
            "The village was an important river port during the colonial logging era.",
            "It is home to several historic churches and community centers.",
            "Guanacaste National Park is located on the outskirts of the village.",
            "The creek itself is a popular spot for local recreation and swimming."
        ]
    },
    "camalote-cities-v2": {
        "desc": "Camalote is a large and growing residential village in the Cayo District, situated along the George Price Highway just west of Roaring Creek. Originally a small agricultural settlement, it has become a popular 'bedroom community' for people working in the nearby capital, Belmopan. Camalote is characterized by its sprawling layout, quiet residential streets, and its mix of traditional farming and modern suburban life. The village is home to a diverse community that prides itself on its peaceful atmosphere and its strong focus on family and education. Its strategic location along the main western highway makes it a convenient and desirable place to live, reflecting the ongoing urban expansion and the growing importance of the central corridor in Belize's national development.",
        "facts": [
            "Camalote is located about 4 miles west of Belmopan city.",
            "The population is estimated to be over 3,000 residents.",
            "The village is named after a type of local water plant.",
            "It is one of the largest villages in the Cayo District.",
            "Most residents commute to Belmopan or San Ignacio for work.",
            "The community features several primary schools and a large community center.",
            "It is situated in a fertile region suitable for small-scale gardening."
        ]
    },
    "teakettle-village-cities-v2": {
        "desc": "Teakettle Village is a charming and historically significant community located in the Cayo District, situated along the George Price Highway. The village takes its unusual name from a local creek that was a popular stop for mahogany workers to boil their kettles for tea. Today, Teakettle is a bustling village known for its friendly residents and its role as the gateway to the world-famous Actun Tunichil Muknal (ATM) cave and the Tapir Mountain Nature Reserve. The community is a mix of traditional Creole and Mestizo cultures, with a strong focus on agriculture and tourism-related services. With its scenic location near the foothills and its welcoming atmosphere, Teakettle offers a genuine taste of rural Belizean life for travelers heading into the heart of the Maya world.",
        "facts": [
            "Teakettle is located approximately 6 miles west of Belmopan.",
            "The population is about 1,800 residents.",
            "It is the primary starting point for tours to the ATM cave.",
            "The village was an important watering hole on the old western trail.",
            "Agriculture, including corn and citrus, remains a major part of the local economy.",
            "It is home to several popular eco-lodges and guesthouses.",
            "The community is situated near the scenic Belize River."
        ]
    },
    "ontario-village-cities-v2": {
        "desc": "Ontario Village is a picturesque and peaceful community located in the Cayo District, nestled along the George Price Highway in the heart of the Belize River Valley. The village is known for its lush, green landscapes and its beautiful views of the surrounding hills and river. Ontario is primarily a residential and agricultural community, where residents are involved in small-scale farming, livestock, and the growing tourism sector. The village has a quiet and friendly atmosphere, making it a favorite for those seeking a more tranquil life away from the larger towns. Its proximity to the capital and the adventure hubs of western Belize makes it a convenient and scenic place to live, embodying the serene and fertile character of the Cayo District's rural heartland.",
        "facts": [
            "Ontario is located about 8 miles west of Belmopan city.",
            "The population is approximately 1,200 residents.",
            "The village is named after the Canadian province, reflecting its historical ties.",
            "It is a popular spot for birdwatching and nature hikes.",
            "The community is known for its well-maintained gardens and fruit trees.",
            "It sits on a ridge overlooking the fertile Belize River valley.",
            "Small-scale cattle ranching is a common occupation in the area."
        ]
    },
    "unitedville-cities-v2": {
        "desc": "Unitedville is a thriving and culturally diverse village in the Cayo District, situated along the George Price Highway between Belmopan and San Ignacio. The village takes its name from the 'uniting' of several different ethnic groups and families who settled there to farm the fertile land. Today, Unitedville is a bustling community known for its active agricultural sector, producing a variety of crops and livestock. The village has a strong sense of community pride and is home to several important schools and local businesses. Its central location makes it a vital part of the Cayo District's network of villages, reflecting the successful integration and cooperative spirit that define much of Belize's rural landscape. Unitedville remains a quintessential example of a hard-working, multi-ethnic Belizean village.",
        "facts": [
            "Unitedville is located approximately 10 miles west of Belmopan.",
            "The population is about 1,500 residents.",
            "The community was formed by the merging of several smaller settlements.",
            "It is a major center for the production of citrus and ground foods.",
            "The village is home to the national police training academy nearby.",
            "It features several large community churches and primary schools.",
            "The area is characterized by its rolling hills and fertile alluvial soil."
        ]
    },
    "georgeville-cities-v2": {
        "desc": "Georgeville is a historic and lively village in the Cayo District, located at the important junction of the George Price Highway and the road to the Mountain Pine Ridge Forest Reserve. Originally established as a logging settlement, it has grown into a vital transportation hub and a proud residential community. Georgeville is the main gateway for travelers heading into the southern mountains to explore waterfalls, caves, and pine forests. The village has a vibrant atmosphere, with a mix of Creole and Mestizo cultures and a strong focus on community life. Its strategic location and its role as a jumping-off point for inland adventure make it a well-known landmark for anyone traveling through western Belize. Georgeville remains a key node in the district's social and economic fabric.",
        "facts": [
            "Georgeville is located about 12 miles west of Belmopan.",
            "It is the primary turn-off for the Mountain Pine Ridge Forest Reserve.",
            "The population is approximately 1,000 residents.",
            "The village was named after one of its early prominent settlers.",
            "It was an important stop on the historic ox-cart trail to the mountains.",
            "The community features several popular roadside markets and eateries.",
            "It is situated at the base of the Maya Mountain foothills."
        ]
    },
    "blackman-eddy-cities-v2": {
        "desc": "Blackman Eddy is a small but historically and archaeologically significant village located on the banks of the Belize River in the Cayo District. The village takes its name from a large eddy in the river where logs would often accumulate during the timber era. Most notably, the village is home to the Blackman Eddy archaeological site, which has provided some of the earliest evidence of Maya ceremonial architecture in the region. Today, the village is a quiet residential community where farming and river-based activities remain important. Its location along the main highway and its proximity to the river make it a scenic and peaceful place, reflecting the deep layers of history that define the Belize River Valley, from ancient Maya beginnings to the colonial timber trade and modern rural life.",
        "facts": [
            "Blackman Eddy is located about 14 miles west of Belmopan.",
            "The archaeological site here dates back to the early Preclassic period (1200 BC).",
            "The population of the village is approximately 600 residents.",
            "The village name is derived from the colonial logging history.",
            "It is a popular spot for river fishing and local swimming.",
            "The site has revealed some of the earliest known Maya stucco masks.",
            "It is situated in a fertile agricultural belt known for its corn and bean production."
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
