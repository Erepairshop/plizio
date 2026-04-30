
import re
import os

file_path = "lib/visualLab/data/poiExtraBelizeHistoryV2.ts"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

seo_data = {
    "nohmul-ruins-history-v2": {
        "desc": "Nohmul, which translates to 'Great Mound' in Yucatec Maya, was once a thriving ceremonial and administrative center in northern Belize. This sprawling site was strategically positioned on a limestone ridge overlooking the Hondo River, facilitating trade between the coast and the interior. For centuries, Nohmul served as a major regional power, reaching its zenith during the Late Classic period. Tragic notoriety came to the site in 2013 when its largest pyramid, nearly 2,300 years old, was largely destroyed by road contractors for gravel. Despite this devastating loss, Nohmul remains an important archaeological area, with numerous other structures still offering valuable insights into the social hierarchy and architectural evolution of the northern Maya lowlands.",
        "facts": [
            "The site's main pyramid was approximately 30 meters (100 feet) tall before its destruction.",
            "Nohmul was occupied from the Middle Preclassic to the Postclassic period.",
            "It is located about 10 miles north of Orange Walk Town.",
            "The site consists of two major groups connected by a raised causeway or sacbe.",
            "Excavations have uncovered unique terminal Classic pottery styles.",
            "The destruction in 2013 led to worldwide condemnation and stricter heritage laws.",
            "It remains surrounded by privately owned sugarcane fields."
        ]
    },
    "tipu-ruins-history-v2": {
        "desc": "Tipu is a remarkably significant Postclassic Maya site located in the Cayo District, known for its fierce resistance against Spanish colonial rule. As a frontier settlement, Tipu became a haven for Maya people fleeing the Spanish administration in Yucatan and Peten. In the 16th and 17th centuries, the community successfully repelled several Spanish attempts at subjugation, even as they adopted elements of European culture. Archaeological excavations have revealed a 16th-century Spanish church at the site, which was eventually abandoned as the Maya returned to their traditional practices. Tipu's history provides a unique window into the complex dynamics of cultural contact, rebellion, and the resilience of Maya political structures during the early colonial era.",
        "facts": [
            "Tipu was the capital of the Dzuluinicob province in the 16th century.",
            "It was the site of a Maya rebellion against the Spanish in 1638.",
            "The Spanish church ruins include burials showing a mix of Maya and European customs.",
            "It is situated on a terrace overlooking the Macal River.",
            "Excavations have uncovered over 500 burials in and around the church.",
            "The site was a major center for the production of cacao and honey.",
            "It served as a strategic point on the trade route between the highlands and the coast."
        ]
    },
    "pusilha-ruins-history-v2": {
        "desc": "Pusilha is a major Classic period Maya city located in the remote Toledo District of southern Belize, near the border with Guatemala. Built at the confluence of the Moho and Poite rivers, the site is famous for its sophisticated engineering, including a massive stone causeway-bridge that once spanned the river. Pusilha was a powerful independent kingdom that maintained strong ties with the great city of Copan to the south. The site's numerous inscribed stelae provide a detailed history of its royal dynasties and their political maneuvers. Because of its isolated location in the deep jungle, Pusilha remains less visited than other sites, offering an atmosphere of mystery and discovery for those who make the journey to explore its plazas and monuments.",
        "facts": [
            "The site is known for its unique 'bridge' structure across the Moho River.",
            "It contains at least 20 inscribed stelae and several altars.",
            "Pusilha was occupied primarily during the Classic period (250–900 AD).",
            "The royal lineage of Pusilha claimed descent from the 'Sky-Lord' dynasty.",
            "It is located approximately 30 miles west of Punta Gorda Town.",
            "The site features multiple plazas and a ceremonial acropolis.",
            "Archaeological findings suggest it was a key hub for trade in obsidian and jade."
        ]
    },
    "colha-ruins-history-v2": {
        "desc": "Colha is an exceptional Maya archaeological site in northern Belize, recognized as the 'industrial heart' of the ancient civilization. Located near a high-quality chert deposit, the site specialized in the mass production of stone tools for over 2,000 years. Craftsmen at Colha created millions of 'eccentric flints,' axes, and projectile points that were traded throughout the Maya lowlands, reaching as far as Tikal and beyond. The sheer volume of stone debitage found at the site is staggering, reflecting a highly organized and specialized economy. In addition to its industrial importance, Colha provides evidence of a violent end to its Classic period occupation, with the discovery of a skull pit suggesting a dramatic and sudden social collapse before the site was briefly reoccupied in the Postclassic.",
        "facts": [
            "Colha was occupied from as early as 1000 BC to 1300 AD.",
            "The site features hundreds of 'lithic workshops' dedicated to tool production.",
            "Archaeologists estimate that millions of stone tools were manufactured here.",
            "A mass grave containing 28 decapitated skulls was discovered in Plaza 1.",
            "It is located approximately 30 miles north of Belize City.",
            "The site consists of several residential groups and a ceremonial center.",
            "Chert from Colha is distinctive for its high quality and chocolate-brown color."
        ]
    },
    "indian-creek-ruin-history-v2": {
        "desc": "Indian Creek is a smaller but well-preserved Maya ceremonial site located along the Southern Highway in the Toledo District. It serves as a classic example of a secondary administrative center that would have served the surrounding rural farming communities. The site is centered around a main plaza featuring a well-proportioned pyramid and several lower platforms that once supported residential or administrative buildings. Indian Creek is notable for its accessibility and the clear layout of its structures, providing visitors with an easy-to-understand glimpse into the organizational structure of ancient Maya society. Surrounded by modern agricultural lands, the ruins stand as a silent reminder of the long-standing human presence and agricultural success in southern Belize.",
        "facts": [
            "The site's main temple stands approximately 12 meters (40 feet) tall.",
            "It was occupied primarily during the Classic period (300–900 AD).",
            "The site is located just off the Southern Highway near Indian Creek Village.",
            "It features one large main plaza and several smaller courtyards.",
            "Archaeologists have found evidence of intensive terrace farming nearby.",
            "The ruins are situated on a low ridge providing natural drainage.",
            "It remains an important cultural landmark for the local Mopan and Q'eqchi' Maya."
        ]
    },
    "kaxil-uinic-ruins-history-v2": {
        "desc": "K'axob, often associated with the nearby Kaxil Uinic area, is a significant Preclassic Maya settlement located in the wetlands of northern Belize. This site is crucial for our understanding of the early development of Maya society, particularly their transition from simple farming villages to complex chiefdoms. Residents of K'axob were experts at wetland agriculture, utilizing raised fields to cultivate crops in the fertile but marshy landscape. The site is known for its sophisticated early pottery and the presence of high-status burials that indicate the emergence of social hierarchies long before the Classic period. K'axob remains a vital site for researchers studying the environmental adaptations and social transformations that laid the groundwork for the greatness of the Maya civilization.",
        "facts": [
            "K'axob was occupied for over 2,000 years, beginning around 800 BC.",
            "The site is located near the village of San Lazaro in the Orange Walk District.",
            "It is situated on a fossilized island within a vast wetland system.",
            "Evidence of intensive 'raised field' agriculture has been found around the site.",
            "The site features several low mounds that were once residential platforms.",
            "Archaeologists have uncovered elaborate shell ornaments and jade jewelry in early burials.",
            "Research at K'axob has provided key data on the domestication of plants in the lowlands."
        ]
    },
    "la-milpa-ruins-history-v2": {
        "desc": "La Milpa is the third-largest Maya site in Belize and one of the most imposing cities in the entire Maya world. Located deep within the Rio Bravo Conservation and Management Area, the site features a massive Great Plaza, which is one of the largest in the Maya lowlands, surrounded by towering pyramids and palace complexes. At its height during the Late Classic period, La Milpa was a major political and economic power, rivaling sites like Caracol and Tikal. The city's sophisticated water management system, including large reservoirs and canals, allowed it to support a dense population in the seasonal forest. Today, La Milpa is a premier destination for eco-tourists and researchers, offering an unparalleled look at ancient urbanism within a pristine rainforest setting.",
        "facts": [
            "The Great Plaza at La Milpa measures approximately 18,000 square meters.",
            "It contains over 20 plazas and at least 85 major structures.",
            "The largest pyramid, Structure 1, stands over 24 meters (80 feet) tall.",
            "At its peak, the city had an estimated population of over 46,000 people.",
            "The site was 'rediscovered' by archaeologists in the 1930s.",
            "It is located about 30 miles west of Orange Walk Town.",
            "La Milpa is part of the largest private nature reserve in Belize."
        ]
    },
    "chac-balam-ruins-history-v2": {
        "desc": "Chac Balam, which means 'Red Jaguar' in Maya, is a strategically important archaeological site located on the northern tip of Ambergris Caye. Situated near the Bacalar Chico channel that separates Belize from Mexico, the site served as a vital naval checkpoint and trading post for the Maya sea trade. From this location, the Maya could monitor and tax the passage of canoes traveling between the Caribbean Sea and the inland lagoons of Quintana Roo. The site consists of a ceremonial center with several platforms and residential areas, built upon a stabilized sand dune. Chac Balam's history is closely tied to the maritime economy of the Postclassic period, illustrating how the Maya successfully adapted their civilization to take full advantage of the coastal environment.",
        "facts": [
            "The site was primarily occupied during the Late Classic and Postclassic periods.",
            "It is located within the Bacalar Chico National Park and Marine Reserve.",
            "The site contains at least 15 identified structures.",
            "Archaeologists have found numerous artifacts from distant regions, including Mexico and Honduras.",
            "It is accessible only by boat from San Pedro or Sarteneja.",
            "The site provides a commanding view of the Caribbean Sea and the reef.",
            "Evidence of salt production and fish processing has been found on site."
        ]
    },
    "uxbenka-ruins-history-v2": {
        "desc": "Uxbenka is one of the oldest and most scenically located Maya sites in the Toledo District of southern Belize. The site is uniquely built along a series of natural ridges, with structures terraced into the hillsides to overlook the fertile valleys below. Uxbenka, meaning 'Ancient Place' in Mopan Maya, reached its peak during the Early Classic period, making it one of the earliest established kingdoms in the region. The site is famous for its collection of stelae, many of which are elegantly carved with hieroglyphic texts and royal portraits. Visitors to Uxbenka are rewarded with panoramic views of the Maya Mountains and the Caribbean coast, making it a perfect spot to appreciate the ancient Maya's skill at integrating their architecture with the natural landscape.",
        "facts": [
            "Uxbenka was occupied from as early as 150 AD.",
            "It features 7 major architectural groups and at least 20 stelae.",
            "The site is located near the village of Santa Cruz in the Toledo District.",
            "The 'Stela Plaza' contains some of the oldest monuments in southern Belize.",
            "Extensive agricultural terraces have been mapped around the residential areas.",
            "It was a major regional power before the rise of nearby Lubaantun.",
            "The site's name was given by local Mopan villagers in the 20th century."
        ]
    },
    "mayo-history-v2": {
        "desc": "The Maya Mountain Research Farm (MMRF) is a pioneering agroecological project located in the foothills of the Maya Mountains in southern Belize. Established in 1988 on degraded pasture land, the farm has been transformed into a lush, productive food forest that mimics the structure and diversity of the natural jungle. MMRF serves as a living laboratory for sustainable agriculture, focusing on permaculture, polyculture, and the preservation of traditional Maya farming techniques. The farm produces a wide variety of crops, including cacao, coffee, vanilla, and various tropical fruits, all grown without synthetic chemicals. As an educational center, it hosts students and researchers from around the world, promoting agricultural practices that sequester carbon, protect biodiversity, and ensure food security for local communities.",
        "facts": [
            "The farm was established in 1988 on 70 acres of former cattle pasture.",
            "It has planted over 15,000 trees to restore the forest canopy.",
            "The farm is completely off-grid, powered by solar energy.",
            "It is located upriver from the village of San Pedro Columbia in Toledo.",
            "MMRF hosts annual workshops on permaculture and tropical agroforestry.",
            "The project has documented over 100 species of edible and medicinal plants.",
            "It is a founding member of the Belize Permaculture Guild."
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
