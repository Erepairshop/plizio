import re
import json

data = {
  "country-slovakia": {
    "desc": "Slovakia, a landlocked nation in Central Europe, is characterized by its mountainous terrain, largely dominated by the Carpathian Mountains. The country transitioned smoothly to independence following the dissolution of Czechoslovakia in 1993. Historically, its territory served as an important crossroads for trade and cultural exchange between Eastern and Western Europe. Today, Slovakia boasts a rapidly developing economy heavily focused on automotive manufacturing and engineering. The landscape features deep valleys, expansive forests, and numerous medieval castles, making it a focal point for studying European geographical features. Geography K7 — European countries and topography.",
    "facts": [
      "Slovakia has one of the highest numbers of castles and chateaus per capita in the world.",
      "The country adopted the Euro as its official currency on January 1, 2009.",
      "Over 40% of the country's total land area is covered by dense forests.",
      "Bratislava and Vienna are the two closest national capitals in Europe."
    ]
  },
  "city-bratislava": {
    "desc": "Bratislava, the dynamic capital of Slovakia, sits uniquely on the borders of both Austria and Hungary, occupying both banks of the Danube River. The city served as the coronation site for Hungarian kings for nearly three centuries when the Ottoman Empire occupied central Hungary. Its charming Old Town is defined by narrow pedestrian streets, colorful facades, and historical monuments like St. Martin's Cathedral. Following industrialization, Bratislava developed into the political, cultural, and economic hub of the nation. It provides an excellent model for exploring river-based urban development and border-town dynamics. Geography and History K8 — Urban expansion and river transport.",
    "facts": [
      "Bratislava is the only national capital in the world that borders two independent countries.",
      "The city was formerly known by its German name, Pressburg, and its Hungarian name, Pozsony.",
      "Between 1536 and 1830, eleven Hungarian kings and eight queens were crowned in St. Martin's Cathedral.",
      "The iconic SNP Bridge features a distinctive UFO-shaped observation deck perched above the river."
    ]
  },
  "city-kosice": {
    "desc": "Košice is the second-largest city in Slovakia, located in the eastern part of the country near the borders with Hungary and Ukraine. It grew historically as a significant mercantile center on the trade routes connecting the Balkans with the Baltic Sea. The city's focal point is the magnificent St. Elisabeth Cathedral, which represents the easternmost Gothic cathedral in Europe. In 2013, Košice was designated as the European Capital of Culture, leading to extensive revitalization of its historic and industrial spaces. It stands as a prime example of a transitioning post-industrial city. Geography and Culture K7 — European cultural centers and trade routes.",
    "facts": [
      "Košice was the first European settlement to be granted its own coat of arms in 1369.",
      "St. Elisabeth Cathedral is the largest church in Slovakia, with a capacity of over 5,000 people.",
      "The city hosts the oldest marathon in Europe, established in 1924.",
      "A massive industrial complex for steel production heavily influenced the city's modern growth."
    ]
  },
  "nature-slovak-paradise": {
    "desc": "Slovak Paradise National Park (Slovenský raj) is a spectacular karst landscape situated in the eastern part of the country. The region is famous for its deep, narrow ravines, striking waterfalls, and complex cave systems formed by centuries of river erosion. Visitors explore the challenging terrain using a network of wooden ladders, chain bridges, and metal steps attached to sheer rock walls. The diverse microclimates within the park support rare flora and provide habitats for animals like bears and lynxes. It represents a vital study area for geology and ecology. Biology and Geography K8 — Karst topography and forest ecosystems.",
    "facts": [
      "The park features roughly 300 kilometers of marked hiking trails, many involving ladders and chains.",
      "Dobšinská Ice Cave, located within the park, is one of the largest ice caves in Europe and a UNESCO site.",
      "The highest waterfall in the park, Závojový vodopád, drops an impressive 75 meters.",
      "The area was first recognized as a protected landscape in 1964."
    ]
  },
  "city-piestany": {
    "desc": "Piešťany is Slovakia's most renowned spa town, positioned in the fertile valley of the Váh River. The town gained international fame for its therapeutic geothermal water and unique sulfur mud, which are extensively used to treat musculoskeletal disorders. During the late 19th and early 20th centuries, it attracted European nobility, resulting in elegant Art Nouveau and functionalist architecture. Spa Island forms the core of the therapeutic facilities, surrounded by beautifully landscaped parks. The town perfectly illustrates the economic impact of natural health resources. Geography K6 — Geothermal activity and health tourism.",
    "facts": [
      "The symbol of the town is a bronze statue of a man breaking his crutch, representing healing.",
      "The thermal mineral springs in Piešťany emerge from a depth of over 2,000 meters at around 68°C.",
      "Specialized therapeutic mud matures in the bypass of the Váh River for at least one year before use.",
      "The town hosted an important international chess tournament in the early 20th century."
    ]
  },
  "city-poprad": {
    "desc": "Poprad functions as the primary gateway to the High Tatras, situated in a high-altitude basin beneath the towering peaks. Due to its strategic location and excellent transport infrastructure, including an international airport, it forms the logistical hub for mountain tourism in Slovakia. The historical district of Spišská Sobota features well-preserved Renaissance and Baroque burgher houses alongside an exquisite church interior. Poprad perfectly demonstrates how proximity to major natural landmarks influences urban development. Geography K7 — Mountain tourism and infrastructure.",
    "facts": [
      "Poprad-Tatry Airport is one of the highest commercial airports in Central Europe at 718 meters above sea level.",
      "The historic center of Spišská Sobota was incorporated into Poprad after World War II.",
      "The city is a central stop on the main railway line connecting Bratislava and Košice.",
      "Poprad frequently bids to host the Winter Olympic Games due to its proximity to the mountains."
    ]
  },
  "city-nitra": {
    "desc": "Nitra is one of the oldest cities in Slovakia, steeped in the earliest history of the Slavic people. Nestled at the foot of Zobor Mountain and bisected by the Nitra River, it was a pivotal center during the Great Moravian Empire in the 9th century. The imposing Nitra Castle complex dominates the skyline and houses the Cathedral of St. Emmeram, representing centuries of religious and political power. Today, it thrives as a vibrant university town and an agricultural exhibition center. History and Geography K7 — Early Slavic settlements and agricultural regions.",
    "facts": [
      "Nitra was the seat of the Principality of Nitra, the oldest known Slavic state in present-day Slovakia.",
      "The first known Christian church in Central Europe was consecrated here around the year 828.",
      "It is commonly referred to as the 'Mother of Slovak cities' due to its ancient origins.",
      "The city hosts the massive Agrokomplex exhibition, showcasing national agriculture."
    ]
  },
  "city-trnava": {
    "desc": "Trnava is often nicknamed the 'Slovak Rome' due to its impressive collection of historic churches and monumental architecture. Located on the Danubian Lowland, it was the first town in present-day Slovakia to receive royal privileges in 1238. For centuries, it served as the religious and cultural heart of the Kingdom of Hungary, especially after the archbishopric was moved here to escape the advancing Ottomans. The town is surrounded by exceptionally well-preserved medieval brick walls. History K8 — Medieval fortifications and the Renaissance church.",
    "facts": [
      "Trnava's medieval fortification walls are among the most extensive and best-preserved in Central Europe.",
      "The city became the seat of a prestigious university in 1635, drawing scholars from across the empire.",
      "The Cathedral of St. John the Baptist is the first purely Baroque building constructed in Slovakia.",
      "Trnava's modern economy is significantly boosted by a massive automobile manufacturing plant."
    ]
  },
  "city-presov": {
    "desc": "Prešov is the third-largest city in Slovakia, located in the historical Šariš region in the east. The city's long lens-shaped main square is lined with a remarkable mix of Gothic, Renaissance, and Baroque patrician houses. Prešov has a diverse cultural heritage, influenced by Slovak, Ruthenian, Hungarian, and German communities throughout the centuries. It is historically known for its salt mining industry in the nearby Solivar district and its strong tradition of education. Geography and Culture K7 — Multi-ethnic cities and historic resource extraction.",
    "facts": [
      "The Solivar district in Prešov contains historic salt mining facilities dating back to the 16th century.",
      "Prešov lies directly exactly on the 49th parallel north.",
      "The city was an important stronghold of the Protestant Reformation in eastern Hungary.",
      "It serves as the cultural center for the Ruthenian and Ukrainian minorities in Slovakia."
    ]
  },
  "city-martin": {
    "desc": "Martin is a culturally significant city located in the Turiec Basin, surrounded by the Malá Fatra and Veľká Fatra mountain ranges. In the 19th and early 20th centuries, it emerged as the epicenter of the Slovak national awakening, fostering crucial cultural and political institutions. The city is home to the Slovak National Library and the Matica slovenská, an institution dedicated to preserving the nation's heritage. The open-air Museum of the Slovak Village perfectly captures traditional rural architecture. History and Culture K8 — National awakenings and cultural preservation.",
    "facts": [
      "The Memorandum of the Slovak Nation, a key document for national rights, was declared here in 1861.",
      "Martin is recognized officially as the 'Center of National Culture of the Slovaks'.",
      "The city features the National Cemetery, the final resting place of many prominent Slovak figures.",
      "It serves as a major gateway for hiking trails leading into the Veľká Fatra mountains."
    ]
  },
  "city-ruzomberok": {
    "desc": "Ružomberok is situated in the scenic Liptov region at the confluence of the Váh and Revúca rivers. Historically, it evolved as a powerful industrial center focused heavily on paper milling and textile production. The city acts as a vital crossroad connecting the mountainous north with the rest of the country. Just above the city lies the Malinô Brdo ski resort, making it an excellent dual-purpose destination for both industrial studies and outdoor recreation. Geography K7 — Industrial placement and mountain geography.",
    "facts": [
      "The massive Mondi SCP paper mill in Ružomberok is one of the largest employers in the region.",
      "The nearby village of Vlkolínec, part of Ružomberok, is a UNESCO World Heritage site.",
      "The city is surrounded by three major mountain ranges: Choč Mountains, Greater Fatra, and Low Tatras.",
      "It hosts the Catholic University, a prominent educational institution established in 2000."
    ]
  },
  "city-levoca": {
    "desc": "Levoča is a perfectly preserved medieval jewel located in the Spiš region, encircled by largely intact 14th-century city walls. As an ancient royal free town, it grew wealthy through trade, evident in the stunning Renaissance burgher houses surrounding its central square. The city is world-famous for the Basilica of St. James, which houses an immense wooden altar carved by the legendary Master Paul of Levoča. Its authentic historical atmosphere provides a vivid look into late medieval urban life. History K7 — Medieval guilds and Renaissance artistry.",
    "facts": [
      "The wooden altar by Master Paul is the tallest of its kind in the world, standing 18.6 meters high.",
      "Levoča was a leading member of the association of Spiš Saxon towns.",
      "The famous 'Cage of Shame' from the 16th century still stands in the main square.",
      "The city and the nearby Spiš Castle are jointly listed as a UNESCO World Heritage site."
    ]
  },
  "city-michalovce": {
    "desc": "Michalovce serves as the economic and cultural heart of the Zemplín region in far eastern Slovakia. Positioned on the Laborec River, it lies adjacent to the expansive Zemplínska Šírava reservoir, which significantly boosts local tourism during the summer months. The city's history is linked to the influential Sztáray noble family, whose former manor house now serves as a regional museum. The surrounding flatlands contrast sharply with the nearby Vihorlat Mountains, showcasing diverse geographic features. Geography K6 — Reservoirs and regional centers.",
    "facts": [
      "The nearby Zemplínska Šírava is known locally as the 'Slovak Sea' due to its vast size.",
      "Michalovce's historic manor house hosts extensive exhibits on the history and nature of Zemplín.",
      "The city has a strong tradition in the clothing and food processing industries.",
      "It acts as a primary transport hub for routes heading toward the Ukrainian border."
    ]
  },
  "city-komarno": {
    "desc": "Komárno is a prominent border city located at the confluence of the Váh and Danube rivers, directly across from the Hungarian city of Komárom. It boasts a rich defensive history, anchored by a massive fortress system built to defend against Ottoman invasions, which remained unconquered. The city has a strong Hungarian cultural influence, reflecting its historical ties and current demographic makeup. The unique 'Europe Place' square features buildings representing the diverse architectural styles of European nations. History and Geography K8 — Border town dynamics and defensive structures.",
    "facts": [
      "The Komárno fortification system is the largest bastioned fortress complex in Central Europe.",
      "The city is home to a significant ethnic Hungarian majority, highlighting its cross-border culture.",
      "Europe Place was built relatively recently, in 2000, to celebrate European integration.",
      "The Danube River port here is a critical node for international river freight transport."
    ]
  },
  "city-senec": {
    "desc": "Senec is a popular resort town located in southwestern Slovakia, just a short drive from the capital, Bratislava. It is primarily famous for the 'Sunny Lakes' (Slnečné jazerá), a cluster of artificial lakes created by gravel mining that have been transformed into a major summer destination. The town enjoys one of the warmest and sunniest climates in the country, making it ideal for viticulture and outdoor recreation. The combination of easy accessibility and leisure infrastructure makes Senec a prime example of domestic tourism development. Geography K6 — Artificial lakes and domestic tourism.",
    "facts": [
      "The Sunny Lakes cover an area of over 100 hectares and feature extensive recreational facilities.",
      "Senec experiences an average of over 2,200 hours of sunshine annually.",
      "The town has a notable Turkish-Renaissance styled building known as the 'Turkish House'.",
      "It serves as an important logistical and warehouse center due to its proximity to the D1 highway."
    ]
  },
  "cult-bratislava-castle": {
    "desc": "Bratislava Castle is an iconic symbol of the Slovak capital, standing majestically on a rocky hill directly above the Danube River. The massive rectangular building with four distinctive corner towers has served as a Celtic settlement, a Roman border fort, and the seat of Hungarian kings. After being devastated by a massive fire in 1811, it remained a ruin for over 150 years before undergoing extensive reconstruction in the mid-20th century. Today, it houses the Slovak National Museum and provides sweeping panoramic views across three countries. History K7 — Fortifications and national reconstruction.",
    "facts": [
      "The hill has been continuously inhabited since the late Stone Age.",
      "During the reign of Maria Theresa, the castle became a prestigious royal residence.",
      "The castle's highest tower, the Crown Tower, once safeguarded the Hungarian coronation jewels.",
      "On a clear day, visitors can see across the borders into both Austria and Hungary."
    ]
  },
  "cult-vlkolinec": {
    "desc": "Vlkolínec is a remarkably intact historical village nestled high in the Great Fatra mountains near Ružomberok. This isolated settlement represents the most complete and untouched collection of traditional log houses in Central Europe, reflecting centuries of rural mountain lifestyle. Because modern development bypassed the village, its wooden architecture, narrow layouts, and farming outbuildings remain completely authentic. It serves as a living museum of traditional agricultural practices and sustainable timber architecture. History and Culture K6 — Traditional rural architecture and mountain living.",
    "facts": [
      "Vlkolínec was inscribed on the UNESCO World Heritage list in 1993.",
      "The village consists of exactly 45 traditional wooden houses painted in pastel colors.",
      "It remains a living village, with a small number of permanent residents still maintaining the properties.",
      "The village features a historic wooden bell tower constructed in 1770."
    ]
  },
  "hist-devin-castle": {
    "desc": "Devín Castle is a dramatic, sprawling ruin situated on a sheer cliff at the strategic confluence of the Danube and Morava rivers. As one of the oldest castles in Slovakia, its position controlled a vital trade route along the Amber Road since prehistoric times. It played a crucial defensive role during the Great Moravian Empire and later served as a heavily fortified frontier post for the Kingdom of Hungary. Destroyed by Napoleon's troops in 1809, its evocative ruins became a powerful symbol of the Slovak national revival in the 19th century. History K8 — Strategic trade routes and national symbolism.",
    "facts": [
      "The site features foundations of an ancient Roman military station and a Great Moravian church.",
      "The slender 'Maiden Tower' perches precariously on a solitary rock separated from the main cliff.",
      "During the Cold War, the rivers below the castle formed the heavily guarded Iron Curtain.",
      "Devín Castle is one of the most visited archaeological sites in the entire country."
    ]
  },
  "hist-orava-castle": {
    "desc": "Orava Castle is one of the most striking and picturesque fortresses in Slovakia, built upon a high, steep limestone rock overlooking the Orava River. Originally constructed in the 13th century after the Tatar invasions, it evolved from a modest wooden fort into a complex multi-level stone stronghold with Romanesque, Gothic, and Renaissance features. The castle effectively controlled the trade route leading to Poland and served as the administrative center for the entire Orava region. Its dramatic architecture and dramatic vertical layout make it a classic subject for studying medieval defense strategies. History K7 — Medieval border defenses and castle evolution.",
    "facts": [
      "The castle is divided into three distinct levels: the upper, middle, and lower castle.",
      "It famously served as the filming location for the classic 1922 vampire film 'Nosferatu'.",
      "A massive fire in 1800 severely damaged the structure, but it was meticulously restored.",
      "The castle houses extensive exhibitions featuring historical weapons, period furniture, and local ethnography."
    ]
  },
  "hist-bojnice-castle": {
    "desc": "Bojnice Castle is widely considered the most romantic and visually stunning castle in Slovakia, resembling a fairy-tale palace from the Loire Valley. Originally a wooden fort in the 12th century, it was completely rebuilt in the late 19th century by Count Ján František Pálffy into an elegant Neo-Gothic chateau. The castle is surrounded by an expansive English landscape garden and features intricately carved wooden ceilings, priceless antiques, and an underground travertine cave. The property illustrates the transition of defensive castles into luxurious noble residences. History and Art K6 — Neo-Gothic architecture and noble estates.",
    "facts": [
      "The castle hosts an annual International Festival of Ghosts and Spirits, drawing massive crowds.",
      "Count Pálffy designed many of the Neo-Gothic details himself based on French and Italian castles.",
      "An enormous 700-year-old linden tree, supposedly planted by a king, stands at the castle entrance.",
      "The castle's natural travertine cave is directly connected to the interior via a deep well."
    ]
  },
  "hist-beckov-castle": {
    "desc": "Beckov Castle is a visually commanding ruin perched on a steep, 60-meter-high limestone crag directly above the Váh River valley. Established in the 12th century to protect the Kingdom of Hungary's western borders, it became an impregnable fortress that successfully resisted Tatar and Ottoman sieges. The castle reached its peak in the 14th and 15th centuries when it was transformed into a lavish Renaissance residence by the powerful Stibor family. A devastating fire in 1729 left it in ruins, but recent conservation efforts have stabilized the massive stone walls. History K7 — Castle sieges and the Váh river defensive line.",
    "facts": [
      "According to legend, the castle was built by a nobleman for his favorite jester named Becko.",
      "The ruins offer commanding views of the vital D1 highway and the surrounding lowland.",
      "The castle fortifications were uniquely integrated into the natural shear of the cliff face.",
      "Summer weekends often feature historical fencing, falconry, and medieval craft demonstrations."
    ]
  },
  "hist-cachtice-castle": {
    "desc": "Čachtice Castle is an infamous ruin located on a hill in the Little Carpathians, offering expansive views of the surrounding countryside. Originally built as a frontier fortress to guard the western border of the Hungarian Kingdom, the castle gained dark global notoriety as the residence of Elizabeth Báthory, the 'Blood Countess'. She allegedly tortured and murdered hundreds of young women within its walls in the late 16th and early 17th centuries before being imprisoned here until her death. Today, the atmospheric ruins attract visitors fascinated by its macabre history and striking natural setting. History K8 — Renaissance nobility and regional folklore.",
    "facts": [
      "Elizabeth Báthory is listed in the Guinness Book of Records as the most prolific female murderer in history.",
      "The castle was deliberately destroyed during the anti-Habsburg rebellion of Francis II Rákóczi.",
      "It sits within a protected nature reserve known for rare forest-steppe vegetation.",
      "The sprawling underground tunnel system beneath the castle and the village is still largely unexplored."
    ]
  },
  "hist-krasna-horka-castle": {
    "desc": "Krásna Hôrka is a magnificent medieval fortress perched atop a perfectly conical hill in the Gemer region of eastern Slovakia. Built in the 14th century, it was owned by several prominent Hungarian noble families, most notably the Andrássy dynasty, who expanded it into a lavish Renaissance and Baroque estate. The castle exceptionally preserved its original antique furniture, weapons, and historical artifacts, functioning as an authentic museum of aristocratic life. Following a catastrophic fire in 2012 that destroyed its roof, the castle underwent an extensive, state-of-the-art restoration process. History K7 — Aristocratic estates and heritage restoration.",
    "facts": [
      "The castle houses the naturally mummified remains of Countess Žofia Serédy, which rest in the chapel.",
      "The 2012 fire was famously sparked by local youths accidentally igniting dry grass near the castle walls.",
      "The castle's armory contains one of the most valuable collections of historical weaponry in Slovakia.",
      "Just below the castle lies an elaborate Art Nouveau mausoleum built by the Andrássy family."
    ]
  },
  "hist-cherveny-kamen-castle": {
    "desc": "Červený Kameň (Red Stone Castle) is a massive, exceptionally well-preserved Renaissance fortress nestled in the Little Carpathians. Originally an ancient royal castle, it was completely rebuilt in the 16th century by the Fugger family—wealthy Augsburg merchants—into a formidable fortification with a massive underground storage system for copper and wine. The estate later passed to the Pálffy family, who enriched its interiors with exquisite Baroque and Rococo details. The castle's vast subterranean cellars are among the largest in Central Europe, reflecting its unique mercantile origins. History K8 — European trade networks and Renaissance fortifications.",
    "facts": [
      "The castle's enormous underground cellars feature vaulted ceilings up to nine meters high.",
      "The name 'Red Stone' refers to the distinct reddish color of the local rock upon which it is built.",
      "The castle houses the largest collection of historical furniture and antique ceramics in Slovakia.",
      "The extensive grounds frequently host falconry displays and historical festivals during the summer."
    ]
  },
  "hist-stara-lubovna-castle": {
    "desc": "Stará Ľubovňa Castle is a formidable hilltop fortress in northeastern Slovakia, historically significant due to its position near the Polish border. Built in the late 13th century, the castle hosted meetings between Hungarian and Polish kings and served to protect the vital trade route along the Poprad River. Notably, the castle safeguarded the Polish crown jewels during the Swedish invasion in the 17th century. Today, the partially restored ruins and accompanying open-air museum provide deep insights into medieval diplomacy and the cultural intersection of Slovaks, Poles, and Ruthenians. History and Geography K7 — Border fortresses and historical diplomacy.",
    "facts": [
      "The famous Polish adventurer and adventurer Maurice Benyovszky was once imprisoned in its tower.",
      "The castle complex includes a fully restored Renaissance palace with historical exhibitions.",
      "An extensive open-air museum (skanzen) detailing rural life lies directly at the foot of the castle hill.",
      "During the 15th century, the castle was temporarily pledged to Poland to settle royal debts."
    ]
  }
}

with open("lib/visualLab/data/slovakiaPoi.ts", "r", encoding="utf-8") as f:
    file_text = f.read()

for poi_id, content in data.items():
    # Find block safely without catastrophic backtracking
    start_idx = file_text.find(f'id: "{poi_id}"')
    if start_idx == -1:
        print(f"Skipping {poi_id}")
        continue
        
    end_idx = file_text.find("  },", start_idx)
    if end_idx == -1:
        end_idx = file_text.find("  }", start_idx) # try without comma
    if end_idx == -1:
        print(f"Cannot find end of {poi_id}")
        continue
    
    # Expand end_idx to ensure we cover factsAdvanced
    # Because there might be nested dicts before the end of the POI object
    # Let's find the next 'id: "' or end of file
    next_id_idx = file_text.find('id: "', start_idx + 10)
    if next_id_idx == -1:
        next_id_idx = len(file_text)
        
    block = file_text[start_idx:next_id_idx]
    
    # Replace en: "" in descriptionAdvanced
    desc_adv_start = block.find('descriptionAdvanced:')
    if desc_adv_start != -1:
        desc_adv_end = block.find('},', desc_adv_start)
        if desc_adv_end != -1:
            desc_block = block[desc_adv_start:desc_adv_end]
            new_desc_en = 'en: "' + content['desc'].replace('"', '\\"') + '"'
            new_desc_block = re.sub(r'en:\s*""|en:\s*\[\]|en:\s*".*?"', new_desc_en, desc_block)
            block = block.replace(desc_block, new_desc_block)
            
    # Replace en: [] in factsAdvanced
    facts_adv_start = block.find('factsAdvanced:')
    if facts_adv_start != -1:
        facts_adv_end = block.find('},', facts_adv_start)
        if facts_adv_end != -1:
            facts_block = block[facts_adv_start:facts_adv_end]
            facts_str = ", ".join(['"' + f.replace('"', '\\"') + '"' for f in content['facts']])
            new_facts_en = 'en: [' + facts_str + ']'
            new_facts_block = re.sub(r'en:\s*\[\]|en:\s*\[.*?\]', new_facts_en, facts_block, flags=re.DOTALL)
            block = block.replace(facts_block, new_facts_block)

    file_text = file_text[:start_idx] + block + file_text[next_id_idx:]

with open("lib/visualLab/data/slovakiaPoi.ts", "w", encoding="utf-8") as f:
    f.write(file_text)
    
print("Batch 1 applied successfully.")
