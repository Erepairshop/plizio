
import re
import os

file_path = "lib/visualLab/data/poiExtraBelizeCitiesV2.ts"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

seo_data = {
    "dolores-cities-v2": {
        "desc": "Dolores is a remote and traditional Q'eqchi' Maya village located in the southernmost reaches of the Toledo District, near the border with Guatemala. The community is situated in a pristine tropical landscape, where residents maintain a deeply ancestral way of life centered on the forest and subsistence agriculture. Dolores is known for its isolation, its raw natural beauty, and its strong sense of cultural identity. Families here farm corn, beans, and rice, living in harmony with the rich biodiversity of the surrounding jungle. For those seeking to understand the most authentic and undisturbed Maya traditions in Belize, Dolores offers a profound glimpse into a world that remains largely unchanged by modern influences.",
        "facts": [
            "Dolores is one of the southernmost villages in Belize.",
            "The population is approximately 350 residents.",
            "It is accessible primarily by rugged trails or river transport.",
            "The village is situated near the Sarstoon River system.",
            "Traditional Q'eqchi' Maya language and customs are dominant here.",
            "The community relies almost entirely on subsistence agriculture.",
            "The surrounding area is home to rare Central American wildlife like the tapir."
        ]
    },
    "machakilha-cities-v2": {
        "desc": "Machakilha is a very remote and traditional Maya village located in the Toledo District, deep within the southern rainforests of Belize. The community is known for its extreme isolation and its commitment to a simple, sustainable lifestyle that has endured for generations. Residents of Machakilha are primarily involved in subsistence farming and the gathering of forest products, living in close-knit family groups. The village is situated in a region of immense natural beauty, with clear streams and dense tropical vegetation. Due to its difficult access, Machakilha remains one of the most culturally intact Maya settlements, providing a unique look at the resilience and the independent spirit of the indigenous people of southern Belize.",
        "facts": [
            "Machakilha is located about 35 miles west of Punta Gorda Town.",
            "The population is approximately 250 residents.",
            "It is one of the most difficult villages to reach in Belize.",
            "The community is primarily Q'eqchi' Maya.",
            "Most houses are built using traditional materials from the surrounding forest.",
            "The village serves as a vital guardian of the southern forest reserves.",
            "It is a key site for studying traditional Maya forest management."
        ]
    },
    "graham-creek-cities-v2": {
        "desc": "Graham Creek is a remote and historically significant Maya village located in the Toledo District, situated near the headwaters of the Temash River. The community is known for its pioneering spirit, having been settled by families seeking new agricultural land in the deep southern forest. Graham Creek is a center for traditional Maya farming, producing corn, beans, and cacao in a lush tropical environment. The village is characterized by its peaceful atmosphere and its strong connection to the surrounding landscape. Despite its remote location, the community is active and resilient, maintaining its ancestral traditions while participating in regional conservation efforts. Graham Creek offers a raw and authentic experience of rural life in one of Belize's most wild frontiers.",
        "facts": [
            "Graham Creek is located about 30 miles northwest of Punta Gorda.",
            "The population is approximately 300 residents.",
            "The village is named after the scenic Graham Creek.",
            "It is a major producer of organic cacao for the local market.",
            "The area is exceptionally rich in biodiversity and tropical flora.",
            "Access to the village is often limited to foot or horse during the rainy season.",
            "It is situated within the Sarstoon-Temash National Park buffer zone."
        ]
    },
    "crieg-viejol-cities-v2": {
        "desc": "Crieg Viejo is a small and quiet residential community located in the Orange Walk District, situated in a fertile region known for its agricultural history. The name likely refers to its origins as an older settlement or camp used by timber workers and early farmers. Today, Crieg Viejo is a peaceful village where traditional farming practices still prevail. Its proximity to the larger towns of northern Belize makes it a quiet retreat for families who value a slower pace of life and a strong connection to the land. The community is closely knit and maintains strong ties to the surrounding agricultural landscape, reflecting the enduring rural character of the Orange Walk District's heartland.",
        "facts": [
            "Crieg Viejo is located about 12 miles south of Orange Walk Town.",
            "The population is approximately 200 residents.",
            "Small-scale farming, particularly corn and beans, is the main local activity.",
            "It is situated in a scenic area with many surrounding fruit orchards.",
            "The village has a rich history tied to the early settlement of northern Belize.",
            "Access to the village is via rural roads from the main highway.",
            "The community is known for its friendly and peaceful atmosphere."
        ]
    },
    "patchakan-cities-v2": {
        "desc": "Patchakan is a large and culturally vibrant village in the Corozal District, located just north of Corozal Town. The community is primarily made up of Mestizo families and is known for its deep roots in the agricultural history of northern Belize. Patchakan is a major center for sugarcane production, and the surrounding fertile plains are filled with vast fields that have supported the local economy for generations. The village has a lively and authentic atmosphere, with a strong focus on community life and traditional festivals. Its proximity to the Mexican border and the sea ensures a diverse and dynamic environment. Patchakan remains a quintessential example of a hard-working and vibrant agricultural village in the northernmost part of Belize.",
        "facts": [
            "Patchakan is located about 5 miles north of Corozal Town.",
            "The population is approximately 1,500 residents.",
            "Sugarcane is the primary commercial crop grown by the villagers.",
            "The village was established in the mid-19th century.",
            "The community is known for its traditional Mestizo music and dance.",
            "It features several primary schools and a large community center.",
            "Patchakan is situated near the scenic Corozal Bay."
        ]
    },
    "xibe-cities-v2": {
        "desc": "Xibe is a thriving and culturally rich village in the Corozal District, known for its industrious community and its deep connection to the agricultural history of the region. The village is a center for agricultural excellence, producing significant quantities of sugarcane, corn, and ground foods. Xibe has a lively and prosperous feel, with many well-maintained houses and active community organizations. The residents are proud of their heritage and work hard to balance modern development with the preservation of their ancestral traditions. With its scenic location in the northern plains and its friendly, welcoming people, Xibe represents the success and vitality of the modern agricultural communities in the Corozal District.",
        "facts": [
            "Xibe is located about 8 miles northwest of Corozal Town.",
            "The population is approximately 1,200 residents.",
            "The village is a major contributor to the northern Belize sugar industry.",
            "The community has a strong tradition of community-based sports and festivals.",
            "It features a well-developed infrastructure with schools and health posts.",
            "Most residents are involved in commercial agriculture or the service sector.",
            "The village name has Maya origins, reflecting the area's ancient history."
        ]
    },
    "calcutta-cities-v2": {
        "desc": "Calcutta is a unique and historically significant village in the Corozal District, named after the ancestral home of its founding East Indian community. In the late 19th century, East Indian laborers who had completed their indentured contracts in the Caribbean settled here, establishing a new and vibrant community. Today, Calcutta remains a proud center for East Indian culture in Belize, where traditional customs, food, and family values are deeply cherished. The village is primarily involved in agricultural production, particularly sugarcane and fruit. Calcutta's history serves as a testament to the diverse waves of migration that have shaped Belize, and its welcoming atmosphere makes it a fascinating place to explore the country's multi-ethnic heritage.",
        "facts": [
            "Calcutta was settled by East Indian laborers in the 1870s.",
            "The population is approximately 800 residents.",
            "It is located about 3 miles south of Corozal Town.",
            "The village is a major producer of citrus and sugarcane.",
            "Calcutta is known for its traditional East Indian cuisine and festivals.",
            "The community maintains strong ties to its historical roots.",
            "It is situated along the main Phillip Goldson Highway."
        ]
    },
    "libertad-cities-v2": {
        "desc": "Libertad is a large and historically significant village in the Corozal District, known for its deep connection to the sugar industry and its resilient community. The village was home to one of Belize's major sugar mills for many years, which served as the economic engine for the entire region. Although the mill is no longer in operation, Libertad remains a vital and active community, with many residents involved in agriculture and the service sector. The village has a diverse population and a lively atmosphere, reflecting its long history as an industrial and agricultural hub. Libertad's name, meaning 'Liberty,' symbolizes the independent spirit and the hard-working nature of the people who have built their lives in this northern Belizean heartland.",
        "facts": [
            "Libertad is located about 10 miles south of Corozal Town.",
            "The population is approximately 1,600 residents.",
            "The village was the site of the Libertad Sugar Mill for over 40 years.",
            "It is situated along the banks of the New River.",
            "The community has a diverse mix of Mestizo, East Indian, and Creole cultures.",
            "Sugarcane and corn farming remain important local activities.",
            "Libertad is home to several historic industrial and residential structures."
        ]
    },
    "sarteneja-cities-v2": {
        "desc": "Sarteneja is the largest and arguably the most beautiful fishing village in Belize, located on the northern tip of the Corozal District. Perched on the shores of Corozal Bay, the village is famous for its artisanal boat-building traditions and its stunning sunset views. Sarteneja is a proud and independent community, where fishing remains the primary way of life, though eco-tourism is becoming increasingly important. The village is the gateway to the Shipstern Nature Reserve and is surrounded by a wealth of biodiversity. With its white sandy beaches, turquoise waters, and friendly Mestizo culture, Sarteneja offers a peaceful and authentic coastal experience that feels like a journey back in time to an older, simpler Belize.",
        "facts": [
            "Sarteneja is the largest village in the Corozal District.",
            "The population is approximately 2,500 residents.",
            "The name means 'water hole in the rock' in Maya.",
            "The village is famous for its traditional wooden sailing dories.",
            "It is located 40 miles by boat from Corozal Town.",
            "Sarteneja is home to the most sunset views on mainland Belize.",
            "The local economy is based on lobster and conch fishing."
        ]
    },
    "san-estevan-cities-v2": {
        "desc": "San Estevan is a large and thriving agricultural village in the Orange Walk District, situated along the banks of the New River. The community has a long history, dating back to the colonial era, and is known for its deep roots in the sugarcane and timber industries. San Estevan is a major center for commercial farming, with the surrounding fertile plains producing vast quantities of sugar for the national economy. The village has a lively and prosperous feel, with many well-maintained houses and active community organizations. Its location near the New River offers beautiful scenery and transport links, while its proximity to Orange Walk Town ensures easy access to urban services. San Estevan remains a quintessential and vibrant part of northern Belize's agricultural heartland.",
        "facts": [
            "San Estevan is located about 6 miles east of Orange Walk Town.",
            "The population is approximately 1,800 residents.",
            "The village was established in the mid-19th century.",
            "It is a major center for sugarcane and citrus production.",
            "San Estevan is situated on the eastern bank of the New River.",
            "The community is known for its traditional Mestizo and Maya cultural influences.",
            "It features several primary schools and a large community park."
        ]
    },
    "august-pine-ridge-cities-v2": {
        "desc": "August Pine Ridge is a large and culturally rich village located in the Orange Walk District, situated in a fertile region known for its extensive agricultural production. The community is primarily made up of Mestizo and Maya families and is a major center for sugarcane, corn, and livestock farming. August Pine Ridge has a lively and prosperous atmosphere, with a strong focus on community life and traditional festivals. The village is characterized by its organized layout and its active community organizations. Its success as an agricultural hub reflects the hard work and dedication of its residents, who have transformed the surrounding plains into one of the most productive regions in northern Belize. The village remains a vital and prosperous part of the Orange Walk District's network of agricultural communities.",
        "facts": [
            "August Pine Ridge is located about 15 miles southwest of Orange Walk Town.",
            "The population is approximately 2,200 residents.",
            "The village is a major contributor to the northern Belize sugar belt.",
            "It was established as an agricultural settlement in the mid-20th century.",
            "The community is known for its vibrant celebrations of patron saint days.",
            "It features several large primary schools and community centers.",
            "The area is characterized by its rolling hills and fertile soils."
        ]
    },
    "san-felipe-cities-v2": {
        "desc": "San Felipe is a thriving and industrious village in the Orange Walk District, known for its commitment to agriculture and its resilient community spirit. The village is a center for agricultural excellence, producing significant quantities of sugarcane, corn, and ground foods. San Felipe has a lively and prosperous feel, with many well-maintained houses and active community organizations. The residents are proud of their heritage and work hard to balance modern development with the preservation of their ancestral traditions. With its scenic location in the northern plains and its friendly, welcoming people, San Felipe represents the success and vitality of the modern agricultural communities in the Orange Walk District. The village remains a vital part of the district's social and economic fabric.",
        "facts": [
            "San Felipe is located about 20 miles southwest of Orange Walk Town.",
            "The population is approximately 1,500 residents.",
            "The village is a key part of the regional sugarcane industry.",
            "The community has a strong tradition of community-based sports and festivals.",
            "It features a well-developed infrastructure with schools and health posts.",
            "Most residents are involved in commercial agriculture or the service sector.",
            "San Felipe was founded in the mid-20th century."
        ]
    },
    "san-lazaro-cities-v2": {
        "desc": "San Lazaro is a large and culturally vibrant village in the Orange Walk District, known for its deep connection to the land and its traditional way of life. The community is primarily made up of Mestizo and Maya families and is a major center for sugarcane and subsistence farming. San Lazaro has a lively community spirit, with a strong focus on family, faith, and the preservation of its ancestral traditions. The village is characterized by its organized layout and its bustling main street, which serves as a hub for local commerce. San Lazaro's success as an agricultural community reflects the hard work and dedication of its residents, who have turned the surrounding fertile plains into one of the most productive regions in northern Belize. The village remains a vital and culturally rich part of the Orange Walk District.",
        "facts": [
            "San Lazaro is located approximately 12 miles southwest of Orange Walk Town.",
            "The population is about 1,000 residents.",
            "The village is a major producer of sugarcane and corn.",
            "It was established in the mid-20th century.",
            "The community is known for its vibrant celebrations of patron saint days.",
            "It features several primary schools and active community organizations.",
            "The area is home to the significant K'axob archaeological site."
        ]
    },
    "yo-creek-cities-v2": {
        "desc": "Yo Creek is a large and thriving village in the Orange Walk District, located just a few miles west of Orange Walk Town. The community has a strong Mestizo and Maya heritage and is known for its deep roots in the agricultural history of northern Belize. Yo Creek is a major center for commercial farming, particularly the production of sugarcane, corn, and beans. The village is characterized by its lively community spirit, active social organizations, and its commitment to education and development. Its proximity to the main northern highway and Orange Walk Town ensures that it remains a vital node for trade and transport. Yo Creek represents the successful integration of traditional rural values with modern agricultural industry, making it a prosperous and vital part of the district.",
        "facts": [
            "Yo Creek is located 5 miles west of Orange Walk Town.",
            "The population is approximately 1,400 residents.",
            "The village is a major contributor to the national sugar industry.",
            "It was established in the mid-20th century.",
            "Yo Creek is home to several important schools and community centers.",
            "The name is of Maya origin, likely referring to the nearby creek.",
            "The area is known for its productive and well-managed family farms."
        ]
    },
    "trinidad-cities-v2": {
        "desc": "Trinidad is a thriving and culturally rich village in the Orange Walk District, known for its industrious community and its deep connection to the agricultural history of the region. The village is a center for agricultural excellence, producing significant quantities of sugarcane, corn, and ground foods. Trinidad has a lively and prosperous feel, with many well-maintained houses and active community organizations. The residents are proud of their heritage and work hard to balance modern development with the preservation of their ancestral traditions. With its scenic location in the northern plains and its friendly, welcoming people, Trinidad represents the success and vitality of the modern agricultural communities in the Orange Walk District. The village remains a vital part of the district's social and economic fabric.",
        "facts": [
            "Trinidad is located about 10 miles northwest of Orange Walk Town.",
            "The population is approximately 600 residents.",
            "The village is a major contributor to the northern Belize sugar belt.",
            "The community has a strong tradition of community-based sports and festivals.",
            "It features a well-developed infrastructure with schools and health posts.",
            "Most residents are involved in commercial agriculture or the service sector.",
            "Trinidad was founded as an agricultural settlement in the mid-20th century."
        ]
    },
    "san-roman-cities-v2": {
        "desc": "San Roman is a large and culturally vibrant village in the Orange Walk District, known for its deep connection to the land and its traditional way of life. The community is primarily made up of Mestizo and Maya families and is a major center for sugarcane and subsistence farming. San Roman has a lively community spirit, with a strong focus on family, faith, and the preservation of its ancestral traditions. The village is characterized by its organized layout and its bustling main street, which serves as a hub for local commerce. San Roman's success as an agricultural community reflects the hard work and dedication of its residents, who have turned the surrounding fertile plains into one of the most productive regions in northern Belize. The village remains a vital and culturally rich part of the Orange Walk District.",
        "facts": [
            "San Roman is located approximately 15 miles northwest of Orange Walk Town.",
            "The population is about 800 residents.",
            "The village is a major producer of sugarcane and corn.",
            "It was established in the mid-20th century.",
            "The community is known for its vibrant celebrations of patron saint days.",
            "It features several primary schools and active community organizations.",
            "San Roman is situated near the scenic New River."
        ]
    },
    "san-antonio-orange-walk-cities-v2": {
        "desc": "San Antonio is a thriving agricultural village in the Orange Walk District, situated along the banks of the Rio Hondo. The community is deeply rooted in the sugar industry, with the surrounding landscape dominated by vast fields of sugarcane. San Antonio has a bustling and prosperous feel, with many small businesses and local services catering to its growing population. The village is known for its friendly community and its commitment to agricultural excellence. Its location along the river and the main northern highway ensure that it remains a vital node for trade and transport, reflecting the ongoing development and economic importance of the Orange Walk District. San Antonio remains a quintessential and vibrant part of northern Belize's agricultural heartland.",
        "facts": [
            "San Antonio is located 12 miles northwest of Orange Walk Town.",
            "The population is approximately 1,200 residents.",
            "The village is a major contributor to the national sugar industry.",
            "It is situated on the eastern bank of the Rio Hondo, bordering Mexico.",
            "The community was established in the mid-20th century.",
            "It features several primary schools and a large community center.",
            "San Antonio is a major hub for small-scale cross-border trade."
        ]
    },
    "san-narciso-cities-v2": {
        "desc": "San Narciso is a large and culturally rich village located in the Corozal District, known for its deep roots in the agricultural and timber history of northern Belize. The community is primarily made up of Mestizo families and is a major center for sugarcane, corn, and livestock farming. San Narciso has a lively and prosperous atmosphere, with a strong focus on community life and traditional festivals. The village is characterized by its organized layout and its active community organizations. Its success as an agricultural hub reflects the hard work and dedication of its residents, who have transformed the surrounding plains into one of the most productive regions in northern Belize. The village remains a vital and prosperous part of the Corozal District's network of agricultural communities.",
        "facts": [
            "San Narciso is located about 10 miles southwest of Corozal Town.",
            "The population is approximately 2,500 residents.",
            "The village is a major contributor to the northern Belize sugar belt.",
            "It was established as an agricultural settlement in the mid-20th century.",
            "The community is known for its vibrant celebrations of patron saint days.",
            "It features several large primary schools and community centers.",
            "San Narciso is situated near the main highway to Orange Walk Town."
        ]
    },
    "san-victor-cities-v2": {
        "desc": "San Victor is a thriving and industrious village in the Corozal District, known for its commitment to agriculture and its resilient community spirit. The village is a center for agricultural excellence, producing significant quantities of sugarcane, corn, and ground foods. San Victor has a lively and prosperous feel, with many well-maintained houses and active community organizations. The residents are proud of their heritage and work hard to balance modern development with the preservation of their ancestral traditions. With its scenic location in the northern plains and its friendly, welcoming people, San Victor represents the success and vitality of the modern agricultural communities in the Corozal District. The village remains a vital part of the district's social and economic fabric.",
        "facts": [
            "San Victor is located about 12 miles northwest of Corozal Town.",
            "The population is approximately 1,200 residents.",
            "The village is a major contributor to the northern Belize sugar industry.",
            "The community has a strong tradition of community-based sports and festivals.",
            "It features a well-developed infrastructure with schools and health posts.",
            "Most residents are involved in commercial agriculture or the service sector.",
            "San Victor was founded as an agricultural settlement in the mid-20th century."
        ]
    },
    "douglas-cities-v2": {
        "desc": "Douglas is a historically significant and culturally rich village in the Orange Walk District, situated along the banks of the Rio Hondo. The community is primarily made up of Mestizo families and has a deep history tied to the early settlement and agricultural development of northern Belize. Douglas is a center for traditional farming, producing significant quantities of sugarcane, corn, and beans. The village is known for its peaceful and friendly atmosphere and its strong sense of community. Its location near the river and the Mexican border makes it a fascinating place to explore the country's diverse heritage and its long history of cross-border interaction. Douglas remains a quintessential example of a resilient and hard-working agricultural village in northern Belize.",
        "facts": [
            "Douglas is located about 15 miles northwest of Orange Walk Town.",
            "The population is approximately 600 residents.",
            "The village was established in the mid-19th century.",
            "It is situated on the eastern bank of the Rio Hondo, overlooking Mexico.",
            "Small-scale commercial farming is the primary occupation of the residents.",
            "The village is home to several historic wooden houses and structures.",
            "The community is known for its traditional river-based lifestyle."
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
