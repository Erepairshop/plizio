
import re
import os

file_path = "lib/visualLab/data/poiExtraBelizeHistoryV2.ts"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Dictionary to store the new SEO content
seo_data = {
    "battle-of-st-georges-caye-history-v2": {
        "desc": "St. George's Caye holds a legendary place in Belizean history as the site of the pivotal naval battle in September 1798. This engagement between British Baymen and the Spanish fleet from Mexico determined the future of the territory, ending centuries of Spanish claims and solidifying British influence. Today, the island remains a peaceful retreat, but the legacy of the battle is celebrated annually as a symbol of national resilience. Visitors can explore the historical markers and enjoy the pristine Caribbean waters that once witnessed this decisive moment. The victory at St. George's Caye is considered the birth of Belize as a distinct political entity in Central America.",
        "facts": [
            "The battle occurred between September 3 and 10, 1798.",
            "September 10th is a public holiday in Belize known as St. George's Caye Day.",
            "The Spanish fleet consisted of 32 vessels and 2,000 troops.",
            "British defenders used small sloops and flat-bottomed gunboats called 'rafts'.",
            "Not a single life was lost on the British side during the final engagement.",
            "The island served as the first capital of the British settlement until the 1800s.",
            "It is located approximately 8 miles northeast of Belize City."
        ]
    },
    "santa-rita-corozal-history-v2": {
        "desc": "Santa Rita is an ancient Maya archaeological site located on the outskirts of Corozal Town, offering a glimpse into the late Postclassic period. Founded around 1200 BC, it grew into a major trading hub known as Chetumal, controlling the lucrative trade of salt, cacao, and honey between the highlands and the coast. The site is uniquely positioned where two major rivers meet the sea, making it a strategic commercial center. Archaeology at Santa Rita has revealed elaborate burials and mural paintings that show strong links to the Mixtec-Puebla style of Mexico. It is one of the few Maya sites that was still occupied when the Spanish arrived in the 16th century, representing a bridge between the ancient and colonial eras.",
        "facts": [
            "The site dates back to at least 2000 BC in its earliest phases.",
            "It was the capital of the ancient Maya province of Chetumal.",
            "Evidence suggests it was a major center for the production of honey and salt.",
            "Elaborate polychrome murals were discovered in Structure 1 in the late 19th century.",
            "Archaeologists have found over 100 burials within the site's complex.",
            "The main pyramid is the only structure currently fully restored for visitors.",
            "It is situated just 1.5 miles from the Mexican border."
        ]
    },
    "el-pilar-ruins-history-v2": {
        "desc": "El Pilar is a massive ancient Maya city spanning the border of Belize and Guatemala, renowned for its 'living museum' approach to archaeology. Unlike most restored sites, El Pilar emphasizes 'archaeology under the canopy,' preserving the structures within their natural forest environment to showcase how the Maya integrated urbanism with sustainable agriculture. The site features over 25 plazas and hundreds of residential and ceremonial structures, many of which remain intentionally unexcavated to protect their integrity. El Pilar was a major regional center during the Classic period, supported by a sophisticated network of forest gardens that provided food, medicine, and materials. Today, it serves as a model for binational conservation and cultural heritage management in the Maya Forest.",
        "facts": [
            "The site covers approximately 5,000 acres of protected forest.",
            "It contains 15 court buildings and at least one ball court.",
            "El Pilar was occupied from 800 BC until approximately 1000 AD.",
            "The highest temple stands about 60 feet above the forest floor.",
            "It was designated a Cultural Monument in both Belize and Guatemala in 1998.",
            "Over 12 miles of nature trails connect the various architectural groups.",
            "Research suggests the city supported a population of up to 20,000 people."
        ]
    },
    "poustinia-land-art-park-history-v2": {
        "desc": "The Poustinia Land Art Park is a unique outdoor gallery located in the Cayo District, where contemporary art meets the untamed beauty of the Belizean jungle. Spanning 60 acres of reclaimed pasture and forest, the park features site-specific installations created by international artists using natural and recycled materials. The name 'Poustinia' is derived from a Russian word meaning 'desert' or 'quiet place,' reflecting the park's mission as a space for spiritual reflection and artistic exploration. The artworks are designed to evolve with the environment, eventually being reclaimed by the tropical vegetation. This integration of human creativity and ecological cycles makes Poustinia a pioneering example of environmental art in Central America, offering visitors a profound meditative experience.",
        "facts": [
            "The park was established in 2006 by local art enthusiasts.",
            "It encompasses 60 acres of varied tropical terrain.",
            "Installations are created by artists from over 15 different countries.",
            "One of its most famous pieces is a giant wooden hand reaching from the earth.",
            "The park promotes the concept of 'ephemeral art' that returns to nature.",
            "It is located near the village of Benque Viejo del Carmen.",
            "Visitors typically spend 2 to 3 hours hiking the trails to see all pieces."
        ]
    },
    "marco-gonzalez-site-history-v2": {
        "desc": "Marco Gonzalez is a fascinating Maya archaeological site located on the southern tip of Ambergris Caye, providing crucial insights into coastal trade and maritime life. Occupied for over 1,200 years, this site served as a vital link in the Maya sea trade network, connecting the interior of the Yucatan Peninsula with distant Caribbean ports. The residents of Marco Gonzalez specialized in salt production and the processing of marine resources, trading these essentials for inland goods like jade and obsidian. The site is unique because it is built upon hundreds of years of accumulated shells and debris, creating a raised platform in the otherwise marshy coastal environment. Despite the challenges of its mangrove surroundings, the site features nearly 50 structures, including platforms and residential complexes.",
        "facts": [
            "The site was officially recorded by archaeologists in 1984.",
            "It contains at least 49 structures, mostly low platforms.",
            "Occupancy dates from approximately 100 BC to 1300 AD.",
            "Large amounts of salt-processing pottery have been found on site.",
            "The site is accessible via a wooden boardwalk through the mangroves.",
            "It is the only Maya site on Ambergris Caye officially open to the public.",
            "Evidence of over 20 different trade items from distant regions has been found."
        ]
    },
    "old-belize-city-prison-history-v2": {
        "desc": "The Museum of Belize is housed within the formidable walls of the former Her Majesty's Prison, a structure that reflects the colonial history and justice system of British Honduras. Built in 1857 using bricks brought as ship ballast from England, the prison served as the country's primary correctional facility for over 130 years. In 1993, the prison was closed, and the building was later meticulously renovated and reopened in 2002 as the National Museum. Today, the museum preserves the building's historical character, with some original cells still intact, while showcasing Belize's diverse cultural heritage. Exhibits range from ancient Maya artifacts and colonial history to displays on the national symbols and the mahogany industry, making it a cornerstone of Belize City's cultural landscape.",
        "facts": [
            "The original prison structure was completed in 1857.",
            "It was built using recycled bricks from English ships.",
            "The facility was designed to house up to 120 inmates.",
            "The Museum of Belize was officially opened on February 5, 2002.",
            "It features the world's largest collection of Maya jade artifacts.",
            "A preserved cell block provides a stark look at 19th-century prison life.",
            "The museum is located in the historic Gabourel Lane area of Belize City."
        ]
    },
    "serpon-sugar-mill-history-v2": {
        "desc": "Serpon Sugar Mill is a testament to the industrial revolution's impact on 19th-century Belize. Located in the Sann Creek District, these ruins represent the country's first steam-powered sugar mill, established in 1862. During its peak, the mill was a hub of technological innovation, utilizing advanced machinery to process sugarcane harvested from the surrounding fertile plains. The success of Serpon helped establish sugar as a dominant export for the colony, though the mill eventually fell into disuse by the early 20th century as the industry shifted northward. Today, the site is a designated archaeological reserve where visitors can walk through the jungle to see the remarkably well-preserved steam engines, boilers, and crushing equipment that once powered the local economy.",
        "facts": [
            "The mill was founded by William Bowman in 1862.",
            "It was the first facility in Belize to use steam power for sugar production.",
            "At its height, it produced over 1,000 pounds of sugar per day.",
            "The site was declared an Archaeological Reserve in 2009.",
            "Machinery on site was manufactured in Scotland and the United States.",
            "The mill is located about 1 mile from the Southern Highway.",
            "It played a crucial role in the settlement and development of Stann Creek."
        ]
    },
    "yarborough-cemetery-history-v2": {
        "desc": "Yarborough Cemetery is the oldest European burial ground in Belize, serving as a silent witness to the early colonial history of Belize City. Established in the late 18th century, it was named after James Yarborough, a prominent magistrate and landowner who donated the land. The cemetery contains the remains of early British settlers, officials, and soldiers who helped shape the colony of British Honduras. Many of the weathered tombstones and elaborate brick vaults were imported directly from England, reflecting the social status and ties of the deceased to the mother country. The site provides invaluable genealogical data and historical context for the settlement's early years. Though many graves have succumbed to the elements, the cemetery remains a protected historical landmark and a place of quiet reflection in the heart of the city.",
        "facts": [
            "The cemetery was officially established in 1781.",
            "It is named after James Yarborough, who died in 1792.",
            "The site contains the graves of many participants in the Battle of St. George's Caye.",
            "It was the primary burial site for the settlement until the mid-19th century.",
            "Several tombstones feature intricate 18th-century masonry.",
            "The cemetery is located in the Yarborough area of southern Belize City.",
            "It underwent a major restoration project in 2009."
        ]
    },
    "cuello-ruins-history-v2": {
        "desc": "Cuello is one of the most archaeologically significant Maya sites in Belize, known for providing some of the earliest evidence of Maya civilization. Located on the property of the Cuello family's rum distillery, the site features a history of continuous occupation dating back to approximately 2600 BC. Excavations at Cuello have transformed our understanding of the Preclassic Maya, revealing early village life, sophisticated pottery, and religious practices that predated the rise of the great city-states. The site includes several small pyramids, plazas, and a ceremonial center that was remodeled over centuries. Because it is on private land, Cuello remains largely untouched by large-scale tourism, offering a raw and authentic look at the foundations of Maya culture. Visitors usually require prior permission to explore the ruins and the surrounding distillery area.",
        "facts": [
            "Radiocarbon dating indicates occupation as early as 2600 BC.",
            "The site is located just 4 miles west of Orange Walk Town.",
            "Excavations in the 1970s revealed a mass burial from the Preclassic era.",
            "The tallest structure at Cuello stands approximately 30 feet high.",
            "It is home to the earliest known lime-plastered floors in the Maya world.",
            "The site consists of two main plazas and several smaller courtyards.",
            "It is famous for its association with the award-winning Cuello's Rum."
        ]
    },
    "buena-vista-cayo-ruin-history-v2": {
        "desc": "Buena Vista del Cayo is a medium-sized Maya ceremonial center situated in the fertile Mopan River valley. During the Classic period, it served as a significant regional hub and was likely the seat of a secondary noble lineage connected to larger nearby cities like Cahal Pech or Xunantunich. The site's strategic location allowed it to control riverine trade and manage the agricultural output of the surrounding alluvial plains. Buena Vista is particularly noted for its high-quality polychrome pottery, including the famous 'Jauncy Vase,' which suggests the presence of elite artisans. Archaeological research here has focused on the relationship between elite centers and the rural farming communities that supported them. Today, the ruins offer a peaceful and educational experience, highlighting the complex political landscape of the ancient Maya.",
        "facts": [
            "The site reached its peak during the Late Classic period (600–900 AD).",
            "It is located approximately 3 miles west of San Ignacio.",
            "The central plaza is surrounded by temples and palace complexes.",
            "The 'Jauncy Vase' found here is one of the finest Maya ceramics ever discovered.",
            "It was a major producer of 'Holmul Style' pottery.",
            "The site encompasses several residential groups and a ball court.",
            "It is situated on a terrace overlooking the Mopan River."
        ]
    },
}

def apply_seo(content, data):
    for poi_id, info in data.items():
        # Find the POI block
        poi_pattern = r'id:\s*"' + re.escape(poi_id) + r'".*?\n\s*}\s*,'
        
        # Check if descriptionAdvanced already exists
        if "descriptionAdvanced:" in content:
             # This is more complex, but based on grep it's not there.
             pass
        
        # Insert after facts
        insert_text = f',\n    descriptionAdvanced: {{\n      de: "",\n      hu: "",\n      ro: "",\n      en: "{info["desc"]}"\n    }},\n    factsAdvanced: {{\n      de: [],\n      hu: [],\n      ro: [],\n      en: {info["facts"]}\n    }}'
        
        # Find the facts block end
        facts_pattern = r'(id:\s*"' + re.escape(poi_id) + r'".*?facts:\s*\{.*?\n\s*\}\s*,)'
        content = re.sub(facts_pattern, r'\1' + insert_text, content, flags=re.DOTALL)
    return content

new_content = apply_seo(content, seo_data)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(new_content)
