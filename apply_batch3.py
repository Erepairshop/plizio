
import re

file_path = '/mnt/c/Users/User/plizio-repo/lib/visualLab/data/switzerlandPoi.ts'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

facts_updates = {
    "lake-lugano": [
        "Lake Lugano is a glacial lake located on the border between Switzerland and Italy.",
        "It has a highly irregular shape with numerous arms creating a very long shoreline.",
        "The lake reaches a maximum depth of 288 meters near the village of Gandria.",
        "The 'Melide Causeway' crosses the lake, carrying road and rail traffic."
    ],
    "lake-constance": [
        "Lake Constance is the third-largest freshwater lake in Central Europe by surface area.",
        "It is a 'condominium,' with no formal borders defined between CH, DE, and AT.",
        "The Rhine River flows into the lake at the Swiss-Austrian border.",
        "The lake provides drinking water for over 4 million people in the region."
    ],
    "river-rhine": [
        "The Rhine is one of the longest rivers in Europe, originating in the Swiss Alps.",
        "The Rhine Falls near Schaffhausen is the most powerful waterfall in Europe.",
        "At Basel, the river becomes navigable for large cargo ships to the North Sea.",
        "The river forms the natural border between Switzerland and several neighbors."
    ],
    "forest-sihlwald": [
        "The Sihlwald is the largest contiguous mixed forest in the Swiss Plateau.",
        "In 2009, it was recognized as Switzerland's first national 'Wilderness Park.'",
        "No trees have been harvested in the core zone for over 20 years.",
        "It is home to diverse wildlife, including roe deer and many rare bird species."
    ],
    "island-st-peters-island": [
        "St. Peter's Island was a true island until the 19th-century water level corrections.",
        "It is a car-free nature reserve preserving a tranquil atmosphere.",
        "Philosopher Jean-Jacques Rousseau spent several weeks here in 1765.",
        "The island features a former priory converted into a hotel and restaurant."
    ],
    "landmark-kunsthaus-zurich": [
        "The Kunsthaus Zurich holds one of the most important art collections in Switzerland.",
        "It houses the largest collection of works by Alberto Giacometti in the world.",
        "A new extension designed by David Chipperfield doubled its space in 2021.",
        "It features major Impressionist works by artists like Monet and Van Gogh."
    ],
    "landmark-swiss-national-museum": [
        "The museum building was designed in 1898 in the style of a historicist castle.",
        "It houses the largest collection of Swiss cultural history and handicrafts.",
        "A modern wing completed in 2016 provides a striking architectural contrast.",
        "The 'Simply Zurich' exhibition offers an interactive overview of the city's history."
    ],
    "landmark-federal-palace": [
        "The Federal Palace features a 64-meter-high dome with cantonal coats of arms.",
        "It was completed in 1902 using materials sourced from all parts of Switzerland.",
        "The entrance hall features statues of the 'Three Confederates' of the Rütli oath.",
        "The Bundesplatz in front features 26 fountains, one for each Swiss canton."
    ],
    "landmark-olympic-museum": [
        "The Olympic Museum holds more than 10,000 artifacts, the largest such archive.",
        "It is located in a park on Lake Geneva featuring many sports-related sculptures.",
        "The entrance has 12 pillars inscribed with names of Olympic host cities.",
        "The museum uses state-of-the-art interactive tech to tell the story of the games."
    ],
    "landmark-rolex-learning-center": [
        "The building was designed by SANAA and is famous for its undulating floors.",
        "It serves as a library and social hub for the EPFL in Lausanne.",
        "The structure has no traditional walls, creating an open learning environment.",
        "It features numerous patios and hills for unique perspectives and study areas."
    ],
    "landmark-fifa-museum": [
        "The FIFA Museum features over 1,000 exclusive exhibits from football history.",
        "The original FIFA World Cup Trophy is its centerpiece exhibit.",
        "The museum includes a giant football pinball machine for visitors.",
        "It features a library with over 7,000 documents dedicated to the sport."
    ],
    "landmark-fondation-beyeler": [
        "The museum was founded by collectors Ernst and Hildy Beyeler.",
        "The building was designed by Renzo Piano and is integrated into a park.",
        "Its collection includes masterpieces by Picasso, Matisse, and Rothko.",
        "It is consistently the most visited art museum in Switzerland."
    ],
    "landmark-cern-science-gateway": [
        "The Science Gateway was designed by Renzo Piano and opened in 2023.",
        "It features tubes and pavilions representing CERN's advanced technology.",
        "Visitors can conduct their own physics experiments in hands-on workshops.",
        "The carbon-neutral building is powered by 4,000 square meters of solar panels."
    ],
    "port-basel": [
        "The Port of Basel handles about 10% of all Swiss imports.",
        "It is the country's most important hub for inland shipping on the Rhine.",
        "The port connects Switzerland to the major North Sea ports.",
        "It features a unique monument at the 'Dreiländereck' (Three-Country Corner)."
    ],
    "port-birsfelden": [
        "The Port of Birsfelden is a major terminal for oil and petroleum products.",
        "It handles a large portion of Switzerland's fuel and grain supply.",
        "The port is a key link in the international supply chain for bulk goods.",
        "Its strategic location allows efficient transfer between water, rail, and road."
    ]
}

desc_updates = {
    "lake-lugano": "Lake Lugano is a mesmerizing glacial lake that straddles the border between Switzerland and Italy. Its deep blue waters are framed by steep, lush mountains that give the region a distinct Mediterranean feel. The lake's irregular shape results in numerous picturesque bays and charming fishing villages like Gandria. It is a center for boat excursions, swimming, and enjoying the relaxed Ticino lifestyle.",
    "lake-constance": "Lake Constance, known locally as Bodensee, is a vast freshwater lake shared by Switzerland, Germany, and Austria. Its open horizon and gentle shores offer a stark contrast to the craggy Alpine landscapes found further south. The lake is a vital resource for the region, supporting agriculture, transport, and a thriving tourism industry. Its waters are perfect for sailing, cycling along the shore, and exploring vibrant waterfront towns like Kreuzlingen.",
    "river-rhine": "The Rhine is one of Europe's most significant rivers, beginning its long journey in the Swiss Alps of Graubünden. It flows through diverse landscapes, from narrow mountain gorges to the broad, navigable stretches near Basel. The river has historically served as a crucial trade route and remains a symbol of European connectivity. Its banks in Switzerland are dotted with historic towns, industrial hubs, and popular recreational areas.",
    "forest-sihlwald": "The Sihlwald is a unique wilderness park located just outside the bustling city of Zurich. It is the largest contiguous mixed forest on the Swiss Plateau and has been left to return to its natural state for decades. Massive old-growth trees, fallen logs, and a rich diversity of wildlife characterize this protected ecosystem. It serves as an essential green lung for the region and a peaceful retreat for nature lovers.",
    "island-st-peters-island": "St. Peter's Island is a tranquil peninsula in Lake Biel that offers a perfect blend of natural beauty and historical significance. Originally a true island, it was connected to the shore following major water level corrections in the 19th century. The site gained fame as a refuge for the philosopher Jean-Jacques Rousseau, who celebrated its isolation and serenity. Today, it is a car-free paradise of vineyards, meadows, and ancient woodlands.",
    "landmark-kunsthaus-zurich": "The Kunsthaus Zurich is one of the world's leading art museums, housing an incredible collection that spans from the 13th century to the present day. It is particularly famous for its extensive holdings of Modernist works and the largest collection of sculptures by Alberto Giacometti. The museum's recently expanded campus features striking architecture that reflects its status as a premier cultural institution. It is a must-visit destination for anyone looking to explore the height of European artistic achievement.",
    "landmark-swiss-national-museum": "The Swiss National Museum is the primary keeper of Switzerland's cultural and historical heritage. Housed in a castle-like building in the heart of Zurich, it provides a comprehensive look at the evolution of Swiss identity. The exhibitions cover everything from prehistoric artifacts to contemporary political and social developments. Its unique architecture blends a historicist 19th-century structure with a bold, modern extension.",
    "landmark-federal-palace": "The Federal Palace, or Bundeshaus, is the monumental seat of the Swiss government and parliament in Bern. Its towering green dome and Renaissance-style facade make it one of the most recognizable landmarks in the country. The interior is richly decorated with symbolic art that represents the unity and diversity of the Swiss cantons. Visitors can explore the halls of democracy and enjoy the vibrant atmosphere of the Bundesplatz in front.",
    "landmark-olympic-museum": "The Olympic Museum in Lausanne celebrates the spirit and history of the world's greatest sporting event. Located in a scenic park overlooking Lake Geneva, it features three floors of interactive exhibits and historic artifacts. The museum explores the origins of the games, the achievements of legendary athletes, and the evolution of Olympic technology. It serves as a powerful tribute to human excellence and the ideals of international cooperation.",
    "landmark-rolex-learning-center": "The Rolex Learning Center is an architectural marvel on the campus of the EPFL in Lausanne. Its revolutionary undulating floor and ceiling create a fluid, wall-less space that encourages interaction and creative study. The building's white, minimalist aesthetic and numerous circular patios make it one of the most striking contemporary structures in Switzerland. It serves as a social and academic hub where students and researchers meet in a truly unique environment.",
    "landmark-fifa-museum": "The FIFA Museum in Zurich is a vibrant destination dedicated to the global phenomenon of football. It houses a massive collection of memorabilia, including the original FIFA World Cup Trophy and jerseys from every national team. Interactive stations allow visitors to experience the thrill of the game and learn about its social and cultural impact. The museum is a celebration of the passion and history that make football the world's most popular sport.",
    "landmark-fondation-beyeler": "The Fondation Beyeler is a world-class art museum located in a serene park in Riehen, near Basel. Designed by Renzo Piano, the building is celebrated for its elegant use of light and its seamless integration with the surrounding nature. The collection features masterpieces by legendary artists such as Monet, Picasso, and Rothko, focused on Modern and contemporary art. It offers a calm and intimate setting for experiencing some of the most important works of the 20th century.",
    "landmark-cern-science-gateway": "The CERN Science Gateway is a state-of-the-art education and outreach center dedicated to the mysteries of the universe. Located next to the world's largest particle physics laboratory, it uses immersive exhibits to explain the work of CERN's scientists. The architecture, featuring glass-walled tubes and pavilions, reflects the high-tech nature of the research conducted underground. It is a place where visitors of all ages can engage with the fundamental questions of physics and innovation.",
    "port-basel": "The Port of Basel is Switzerland's gateway to the world's oceans, serving as a critical hub for inland shipping on the Rhine. It is the only place in the country where goods are transferred from maritime routes to the national rail and road networks. The industrial landscape of the port reflects Basel's long history as a center for trade and logistics. It handles millions of tons of cargo annually, from raw materials to high-tech machinery.",
    "port-birsfelden": "The Port of Birsfelden is a vital part of the Basel port system, specializing in the handling of bulk goods and energy resources. Its massive silos and specialized terminals ensure a steady supply of essential materials for the Swiss economy. The port's strategic location at the head of the navigable Rhine makes it a key link in the international supply chain. It illustrates the high level of efficiency and infrastructure that supports Switzerland's industrial sector."
}

def apply_updates(content, facts_updates, desc_updates):
    for poi_id in facts_updates.keys():
        pattern_str = r'(id:\s+"' + poi_id + r'".*?)(\n    facts:)'
        if poi_id in desc_updates:
            if 'descriptionAdvanced:' not in content[content.find(poi_id):content.find(poi_id)+1200]:
                desc_adv_str = '\n    descriptionAdvanced: {\n      de: "",\n      hu: "",\n      ro: "",\n      en: "' + desc_updates[poi_id] + '"\n    },'
                content = re.sub(pattern_str, r'\1' + desc_adv_str + r'\2', content, flags=re.DOTALL)
        pattern_facts = re.compile(r'(id:\s+"' + poi_id + r'".*?facts:\s*\{.*?\n    \},)', re.DOTALL)
        facts = facts_updates[poi_id]
        facts_adv_str = '\n    factsAdvanced: {\n      de: [],\n      hu: [],\n      ro: [],\n      en: [\n'
        for f in facts:
            facts_adv_str += f'        "{f}",\n'
        facts_adv_str = facts_adv_str.rstrip(',\n') + '\n      ]\n    },'
        content = pattern_facts.sub(r'\1' + facts_adv_str, content)
    return content

new_content = apply_updates(content, facts_updates, desc_updates)
with open(file_path, 'w', encoding='utf-8') as f:
    f.write(new_content)
print("Updated POIs 31-45")
