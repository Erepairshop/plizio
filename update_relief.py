import re
import os

file_path = "/mnt/c/Users/User/plizio-repo/lib/visualLab/data/poiExtraPeruReliefV2.ts"

content_updates = {
    "misti-volcano-relief-v2": {
        "desc": "The Misti Volcano is a magnificent, near-perfectly conical stratovolcano that serves as the iconic symbol of Arequipa, the 'White City.' Rising to 5,822 meters, its snow-capped peak dominates the skyline and has played a central role in the city's history and identity. Misti is considered an 'Apu' or sacred protector by the local people, and its volcanic sillar stone provided the building material for Arequipa's stunning colonial architecture. Although it is an active volcano, it has not had a major eruption in centuries, making it a popular but challenging destination for hikers and climbers. The view from the summit offers a breathtaking panorama of the Andes and the city below. It remains one of the most beautiful and culturally significant mountains in southern Peru.",
        "facts": [
            "Located just 17 kilometers (11 miles) from the center of Arequipa.",
            "Features a 450-meter-wide crater that still emits volcanic gases.",
            "The summit is at an altitude of 5,822 meters (19,101 feet).",
            "Inca mummies and artifacts have been discovered near its summit.",
            "Visible from almost every point in the city of Arequipa."
        ]
    },
    "ubinas-volcano-relief-v2": {
        "desc": "The Ubinas Volcano is recognized as the most active volcano in Peru, known for its frequent and dramatic ash eruptions that impact the surrounding Moquegua region. This impressive stratovolcano has a distinct truncated cone shape and a large, deep crater that is constantly monitored by geologists. Its activity is a regular part of life for nearby communities, who have occasionally been evacuated due to significant ash fall. Despite its volatile nature, the volcano is a fascinating subject for scientific study and a powerful reminder of the geological forces at work in the Andes. The surrounding landscape is a rugged high-altitude desert, typical of the southern Peruvian volcanic belt. Ubinas remains a dominant and formidable natural feature of the southern highlands.",
        "facts": [
            "The most active volcano in Peru, with more than 25 eruptions since the 16th century.",
            "Located in the Moquegua department at 5,672 meters above sea level.",
            "The summit crater is 1.4 kilometers (0.87 miles) wide.",
            "Part of the Central Volcanic Zone of the Andes.",
            "Its eruptions often produce massive plumes of ash that can reach miles into the atmosphere."
        ]
    },
    "huaynaputina-volcano-relief-v2": {
        "desc": "Huaynaputina is a volcano in southern Peru that is famous for producing the largest volcanic eruption in South American history in the year 1600. Unlike typical conical volcanoes, it lacks a distinct profile, appearing more as a series of large craters on a high plateau. The catastrophic explosion in 1600 devastated the surrounding region, burying entire villages and having a significant impact on the global climate for years. Today, the site is a place of profound geological interest, where researchers study the remains of the eruption and its long-term environmental effects. The area remains sparsely populated, a silent witness to one of nature's most powerful events. It stands as a stark reminder of the massive volcanic potential of the Peruvian Andes.",
        "facts": [
            "The 1600 eruption is estimated to have been a VEI 6, similar to Krakatoa.",
            "Ash from the eruption was reported as far away as 1,000 kilometers in Greenland's ice.",
            "Located in the Moquegua region at an altitude of 4,850 meters.",
            "Caused a 'volcanic winter' that led to famine as far away as Russia.",
            "The name means 'Young Volcano' in Quechua."
        ]
    },
    "sabancaya-volcano-relief-v2": {
        "desc": "Sabancaya is an extremely active stratovolcano located in the Arequipa region, part of a volcanic complex that also includes the Ampato and Hualca Hualca mountains. Its name, meaning 'Tongue of Fire' in Quechua, is a fitting description for a volcano that is frequently in a state of eruption, emitting constant plumes of ash and steam. The volcano is heavily glaciated, and its activity often causes small lahars or mudflows as ice melts. It is one of the most closely monitored volcanoes in Peru due to its proximity to the fertile Colca Valley and its numerous inhabitants. For visitors to the Colca Canyon, the sight of Sabancaya's ash clouds on the horizon is a common and awe-inspiring experience. It remains a powerful and dynamic force in the southern Peruvian landscape.",
        "facts": [
            "One of the most active volcanoes in South America in recent years.",
            "The summit reaches an elevation of 5,976 meters (19,606 feet).",
            "Began a new eruptive phase in 2016 that continues today.",
            "Its name in Quechua perfectly reflects its fiery activity.",
            "Located approximately 70 kilometers northwest of Arequipa."
        ]
    },
    "ampato-mountain-relief-v2": {
        "desc": "Mount Ampato is a majestic dormant volcano in southern Peru that achieved worldwide fame in 1995 with the discovery of the 'Ice Maiden,' an exceptionally well-preserved Inca mummy named Juanita. This massive, ice-capped peak rises to 6,288 meters and is part of the same volcanic chain as Sabancaya. The discovery of Juanita, who was likely an Inca sacrifice to the mountain gods, provided incredible insights into the spiritual practices of the Inca Empire. Today, the mountain remains a significant site for high-altitude archaeology and a challenging destination for mountaineers. Its glaciated slopes and high-altitude terrain offer a raw and powerful encounter with the Andean environment. Ampato stands as a sacred guardian of history and a symbol of the deep connection between the Inca and their mountain peaks.",
        "facts": [
            "The site where the famous 'Mummy Juanita' was discovered by Johan Reinhard.",
            "Part of the Cordillera Ampato in the Arequipa department.",
            "The summit is at an elevation of 6,288 meters (20,630 feet).",
            "A dormant stratovolcano that hasn't erupted in historical times.",
            "Provides essential meltwater for the irrigation of the Colca Valley."
        ]
    },
    "coropuna-mountain-relief-v2": {
        "desc": "Coropuna is the highest volcano in Peru and the third highest mountain in the country, crowned by a massive and shimmering ice cap that covers over 50 square kilometers. This enormous volcanic complex has several peaks, with the highest reaching 6,425 meters. In Inca times, it was considered one of the most sacred 'Apus' in the entire empire, a site of great religious importance and frequent pilgrimages. The mountain's name, meaning 'Shrine on the Plateau,' reflects its spiritual status. Today, it is a critical source of water for the arid regions of southern Peru, although its glaciers are rapidly shrinking due to climate change. Its vast size and remote location make it a formidable and awe-inspiring presence on the horizon. It remains a pinnacle of Andean natural and cultural heritage.",
        "facts": [
            "The highest volcano in Peru at 6,425 meters (21,079 feet).",
            "Features the largest ice cap in the tropics.",
            "Was a major pilgrimage site for the Inca, with evidence of ancient roads and structures.",
            "Located in the department of Arequipa, about 150 km from the city.",
            "Its meltwater is vital for the Majes and Colca agricultural projects."
        ]
    },
    "chachani-mountain-relief-v2": {
        "desc": "Chachani is a massive volcanic complex that stands as a silent sentinel over the city of Arequipa, often considered one of the easiest 6,000-meter peaks to climb in the world. Its name means 'brave' or 'skirt' in the local language, likely referring to its broad and imposing profile. Despite its height of 6,057 meters, the lack of significant glaciers and its proximity to the city make it highly accessible for well-acclimatized hikers. The ascent provides incredible views of the city below and the neighboring Misti and Pichu Pichu volcanoes. The mountain's sillar stone, like that of Misti, was a key building material for Arequipa's historic buildings. Chachani remains a popular and iconic part of the southern Peruvian landscape, loved by both locals and visiting adventurers.",
        "facts": [
            "The highest mountain in the immediate vicinity of Arequipa.",
            "The summit reaches 6,057 meters (19,872 feet).",
            "Often climbed without the need for technical mountaineering gear like crampons.",
            "Actually a complex of several volcanic domes rather than a single cone.",
            "Visible from the Plaza de Armas of Arequipa."
        ]
    },
    "cordillera-blanca-relief-v2": {
        "desc": "The Cordillera Blanca is the highest tropical mountain range in the world, a spectacular 180-kilometer-long chain of snow-capped peaks and turquoise glacial lakes in northern Peru. Home to Huascarán, the country's highest mountain, it is a world-class destination for mountaineers, trekkers, and nature lovers. The range is part of the Huascarán National Park, a UNESCO World Heritage site that protects its unique flora, such as the giant Puya Raimondii, and rare fauna like the Andean condor. Its jagged granite walls and brilliant white glaciers create some of the most beautiful high-mountain scenery on Earth. The 'White Range' is also the source of vital water for Peru's coastal agriculture and hydroelectric power. It remains a place of immense natural beauty and a spiritual heartland for the people of the Ancash region.",
        "facts": [
            "Contains 16 peaks over 6,000 meters and more than 50 over 5,700 meters.",
            "Home to over 700 individual glaciers.",
            "Features approximately 300 spectacular turquoise-colored glacial lakes.",
            "Designated a UNESCO World Heritage site in 1985.",
            "The most popular base for exploring the range is the city of Huaraz."
        ]
    },
    "cordillera-huayhuash-relief-v2": {
        "desc": "The Cordillera Huayhuash is a compact and incredibly jagged mountain range in the Peruvian Andes, widely considered one of the world's premier trekking destinations. Although smaller than the neighboring Cordillera Blanca, it is known for its even steeper rock faces, sharper peaks, and dramatic turquoise lagoons. The range is home to the legendary Yerupajá and Siula Grande, mountains that are famous for their extreme difficulty and beauty. The Huayhuash Circuit is a challenging trek that takes travelers over high mountain passes and through remote Andean villages, offering an intimate and raw experience of the mountains. Its isolation has helped preserve its pristine environment and traditional way of life. For many, a journey through the Huayhuash is the ultimate Andean adventure, a place where the scale and power of nature are truly overwhelming.",
        "facts": [
            "Contains seven peaks over 6,000 meters in a range only 30 kilometers long.",
            "Setting for the famous survival story 'Touching the Void' on Siula Grande.",
            "The trekking circuit typically takes 10 to 12 days to complete.",
            "Home to the beautiful and iconic Carhuacocha and Jahuacocha lakes.",
            "Located at the junction of the Ancash, Lima, and Huánuco regions."
        ]
    },
    "pampa-de-la-joya-relief-v2": {
        "desc": "The Pampa de La Joya is an extremely arid and desolate desert plain in southern Peru, located between the city of Arequipa and the Pacific coast. This landscape is famous among scientists for its Mars-like conditions, featuring red soils, high levels of ultraviolet radiation, and a complete lack of liquid water. Because of its extreme environment, it has become a key site for astrobiology research and the testing of equipment for future missions to the Red Planet. The pampa is also known for its 'medanos'—massive, crescent-shaped sand dunes that migrate across the plain driven by the wind. Despite its harshness, it has a haunting beauty and serves as a vital corridor for transport and energy projects in southern Peru. It is a place that feels truly otherworldly, right here on Earth.",
        "facts": [
            "One of the driest places on Earth, with almost no recorded rainfall.",
            "Used by NASA and other space agencies for Mars-simulation studies.",
            "Features the famous migrating sand dunes (medanos) of La Joya.",
            "Located at an altitude of approximately 1,200 meters.",
            "Crossed by the Pan-American Highway and major power transmission lines."
        ]
    },
    "colca-canyon-relief-v2": {
        "desc": "The Colca Canyon is one of the deepest and most spectacular canyons in the world, carved by the Colca River through the heart of the southern Peruvian Andes. Reaching depths of over 3,000 meters, it is twice as deep as the Grand Canyon and offers a landscape of incredible scale and beauty. The canyon is world-famous as one of the best places to observe the majestic Andean condor, which can be seen soaring on thermal updrafts from viewpoints like Cruz del Cóndor. The surrounding valley is home to vibrant traditional communities with ancient agricultural terraces that are still in use today. Visitors can also enjoy natural hot springs and explore picturesque colonial-era villages. Colca is not just a geological wonder, but a living cultural landscape that has been inhabited for thousands of years. It remains a highlight of any trip to southern Peru.",
        "facts": [
            "Maximum depth is approximately 3,400 meters (11,155 feet).",
            "Home to the Cabana and Collagua people, who maintain distinct traditional dress and customs.",
            "Features the pre-Inca terraces of the 'Valley of the Wonders'.",
            "One of the most visited tourist destinations in the Arequipa region.",
            "Site of several active volcanoes on its horizon, including Sabancaya."
        ]
    },
    "canon-del-pato-relief-v2": {
        "desc": "The Duck Canyon (Cañón del Pato) is a narrow and spectacular rock gorge in the Ancash region where the Cordillera Blanca and Cordillera Negra nearly meet. Carved by the Santa River, the canyon is famous for its dramatic road that features dozens of tunnels carved directly into the sheer rock walls. This route is considered one of the most exciting and scenic drives in Peru, offering dizzying views of the churning river hundreds of meters below. The canyon also plays a vital role in Peru's energy sector, housing a major hydroelectric plant that utilizes the river's powerful flow. Its name, meaning 'Duck Canyon,' refers to the wild ducks that were once commonly found in its waters. The contrast between the dark, jagged rock and the power of the river makes it a truly awe-inspiring place. It remains a testament to both natural force and human engineering.",
        "facts": [
            "Features 35 tunnels carved into the rock along its famous narrow road.",
            "The gorge is so narrow in some places that it measures only 6 meters across.",
            "Home to the Cañón del Pato Hydroelectric Plant, a major power source for Peru.",
            "Located at the northern end of the Callejón de Huaylas valley.",
            "The canyon walls rise up to 1,000 meters above the river bed."
        ]
    },
    "meseta-del-collao-relief-v2": {
        "desc": "The Collao Plateau, also known as the Altiplano, is a vast and high-altitude Andean plateau shared by Peru and Bolivia. Situated at an average elevation of nearly 4,000 meters, it is a landscape of immense scale, characterized by sweeping grasslands, salt flats, and the deep blue waters of Lake Titicaca. The plateau has a harsh, cold climate and has been the homeland of the Aymara and Quechua people for millennia. It was the center of several great pre-Columbian civilizations, including the Tiwanaku and later the Inca. Today, it is an important agricultural and mining region, known for its production of quinoa, potatoes, and alpaca wool. The vast, open horizon and the clarity of the air create a sense of profound space and light. It remains one of the most culturally and geographically distinct regions of the South American continent.",
        "facts": [
            "The second largest high-altitude plateau in the world after the Tibetan Plateau.",
            "Contains Lake Titicaca, the world's highest navigable lake.",
            "The primary livestock are camelids like alpacas, llamas, and vicuñas.",
            "Home to the historic city of Puno and the ancient ruins of Sillustani.",
            "Characterized by 'Puna' vegetation, consisting primarily of hardy ichu grass."
        ]
    },
    "paracas-peninsula-relief-v2": {
        "desc": "The Paracas Peninsula is a striking desert landform on Peru's southern coast, where wind-sculpted sand dunes meet the turquoise waters of the Pacific Ocean. As the center of the Paracas National Reserve, it is a place of stark and haunting beauty, famous for its red-sand beaches and dramatic sea cliffs. The peninsula's unique geography is shaped by the powerful 'Paracas' winds and the nutrient-rich Humboldt Current, which supports an abundance of marine life. It was also the home of the ancient Paracas culture, known for their incredible textiles and sophisticated understanding of the environment. Visitors can explore the peninsula's coastal trails, witnessing huge colonies of sea lions and diverse birdlife. At its base, the mysterious 'Candelabra' geoglyph stands as a silent sentinel. It remains one of the most spectacular examples of Peru's coastal desert landscape.",
        "facts": [
            "Features the famous 'Playa Roja' (Red Beach), colored by volcanic rock erosion.",
            "The site of the ancient Paracas Necropolis, discovered by Julio C. Tello.",
            "The name 'Paracas' means 'sand rain' in the local language.",
            "One of the windiest places on the Peruvian coast.",
            "Protects some of the most productive marine ecosystems in the world."
        ]
    },
    "illescas-peninsula-relief-v2": {
        "desc": "The Illescas Peninsula is a remote and pristine natural monument located on the northern coast of Peru in the Piura region. It is a rare place where the Sechura Desert meets the ocean, creating a rugged landscape of cliffs, beaches, and isolated hills. Because of its remoteness, the peninsula has remained a vital sanctuary for wildlife, including the Andean condor—which uniquely nests here at sea level—and large colonies of sea lions and Humboldt penguins. The area was recently designated a National Reserve to protect its fragile desert-coastal ecosystem. It is a place of profound silence and raw natural beauty, far from the main tourist circuits. For those who reach it, Illescas offers an experience of the untamed Peruvian coast as it has existed for millennia. It stands as a critical bastion for the conservation of northern Peru's unique biodiversity.",
        "facts": [
            "The only place in the world where Andean condors are known to nest on coastal cliffs.",
            "Recently established as a National Reserve in 2021.",
            "Home to a diverse range of desert-adapted fauna, including the Sechuran fox.",
            "Features some of the most isolated and beautiful beaches in northern Peru.",
            "Essential for the protection of the endemic and endangered Peruvian Plantcutter bird."
        ]
    },
    "yanachaga-chemillen-relief-v2": {
        "desc": "The Yanachaga-Chemillén National Park is a lush and rugged protected area in the Pasco region, preserving a spectacular range of mountain cloud forests and high Amazonian jungle. The park's terrain is extremely steep and broken, characterized by deep canyons and mist-shrouded peaks that have remained largely untouched by human development. This isolation has made it a sanctuary for an extraordinary diversity of life, including the spectacled bear, the jaguar, and hundreds of species of orchids and birds. The park is a vital 'water tower' for the surrounding valleys, with its dense forests capturing moisture from the clouds to feed the rivers below. It is also home to several indigenous communities and the descendants of 19th-century German and Austrian settlers. Yanachaga-Chemillén is a place of wild, primeval beauty and immense biological importance. It remains one of the most pristine examples of the Andean-Amazonian transition zone.",
        "facts": [
            "Covers an area of 122,000 hectares of primary forest.",
            "Features an incredible altitude range from 460 to over 3,600 meters.",
            "Home to the legendary Andean cock-of-the-rock, Peru's national bird.",
            "Protect the Yanachaga mountain range, which is geologically distinct from the main Andes.",
            "Known for its high number of endemic species, particularly among amphibians and birds."
        ]
    },
    "alto-purus-relief-v2": {
        "desc": "Alto Purús National Park is the largest national park in Peru and one of the most remote and untouched wilderness areas in the entire Amazon basin. Located on the border with Brazil in the Ucayali region, it protects a massive expanse of primary tropical rainforest and complex river systems. The park is of immense cultural significance, as it serves as the ancestral territory for several indigenous groups living in voluntary isolation. Its vast and roadless landscape is a critical refuge for large Amazonian mammals such as jaguars, giant river otters, and tapirs, as well as thousands of species of birds and trees. Because of its extreme isolation and the presence of uncontacted tribes, access to the park is strictly limited and carefully managed. Alto Purús is a global flagship for the protection of both biodiversity and indigenous rights. It represents the last great frontier of the Peruvian Amazon.",
        "facts": [
            "Covers an area of 2.5 million hectares (over 6 million acres).",
            "The largest protected area in the Peruvian National System of Protected Areas (SINANPE).",
            "Home to one of the highest concentrations of mahogany and cedar trees in the world.",
            "Crucial for the survival of the Mashco-Piro, one of the world's most isolated tribes.",
            "The park is accessible only by small plane or multi-day river journeys."
        ]
    },
    "otishi-national-park-relief-v2": {
        "desc": "Otishi National Park is a rugged and spectacular protected area located in the Cordillera Vilcabamba, in the central Peruvian Andes. Characterized by its dramatic relief, it features deep canyons, steep mountain forests, and dozens of hidden waterfalls, including the massive Catarata de las Tres Hermanas. The park's primary mission is to protect the fragile ecosystems of the high jungle and the headwaters of several major rivers. Its isolation and difficult terrain have made it a haven for rare and endemic species, many of which are still being discovered by scientists. Otishi is also culturally vital, serving as a buffer zone for the ancestral lands of the Asháninka and Machiguenga people. The park offers a landscape of raw, untamed beauty that remains one of the least explored regions of Peru. It stands as a powerful symbol of the country's commitment to preserving its wild and diverse mountain heritage.",
        "facts": [
            "Protects the Pavirontsi Natural Bridge, one of the largest natural stone bridges in the world.",
            "Located in the 'VRAEM' region between the departments of Junín and Cusco.",
            "The park is virtually roadless and accessible only by long foot treks or river journeys.",
            "Home to the spectacular 914-meter-high Three Sisters Waterfall.",
            "Essential for the protection of the cloud forest and high-altitude grassland (puna) ecosystems."
        ]
    },
    "cordillera-azul-relief-v2": {
        "desc": "The Cordillera Azul National Park is a massive and rugged rainforest-covered mountain range located between the Andes and the Amazon basin in central Peru. Known as the 'Blue Range' because of the characteristic haze that surrounds its peaks, it protects a vast area of primary forest and unique mountain ecosystems. The park is a biodiversity powerhouse, home to jaguars, harpy eagles, and numerous species of rare primates and birds. It is also famous for its diverse geology, including striking rock formations and waterfalls that emerge from the dense jungle. Cordillera Azul serves as a critical watershed for the surrounding Huallaga and Ucayali river basins, supporting thousands of people in the lowlands. Its preservation is a major success story for public-private conservation partnerships in Peru. It remains a place of immense natural beauty and mystery, where the jungle meets the sky.",
        "facts": [
            "The third largest national park in Peru, covering 1.35 million hectares.",
            "Home to the unique 'cumbres' or mountain-top plateau ecosystems.",
            "Protects over 1,600 species of plants and more than 500 species of birds.",
            "Designated as an 'Important Bird Area' (IBA) of international significance.",
            "Managed through an innovative long-term conservation contract with a non-profit organization."
        ]
    },
    "rio-abiseo-relief-v2": {
        "desc": "Río Abiseo National Park is a unique UNESCO World Heritage site that protects both an incredible diversity of cloud forest life and significant archaeological remains of the Chachapoya culture. Located in the San Martín region, the park's steep and misty terrain is home to the rare yellow-tailed woolly monkey, once thought to be extinct. The most famous archaeological site within the park is Gran Pajatén, a complex of circular stone buildings decorated with intricate reliefs that remain hidden in the dense vegetation. Because of its extreme fragility and importance, the park is closed to the general public, and only authorized scientific researchers are allowed entry. This high level of protection has kept its ecosystems and ruins in a remarkably pristine state. Río Abiseo is a profound testament to the harmonious relationship between ancient people and the lush, challenging environment of the Amazonian Andes.",
        "facts": [
            "The only site in Peru recognized by UNESCO as a World Heritage site for both Nature and Culture.",
            "The yellow-tailed woolly monkey was rediscovered here in the 1970s.",
            "Contains 36 identified archaeological sites at various altitudes.",
            "The park's high rainfall and humidity make it one of the wettest places in the Andes.",
            "Essential for the protection of the headwaters of the Abiseo River."
        ]
    },
    "allpahuayo-mishana-relief-v2": {
        "desc": "The Allpahuayo Mishana National Reserve is a world-renowned biodiversity hotspot located near the city of Iquitos in the Peruvian Amazon. It is famous among scientists for protecting a unique type of ecosystem known as 'varillales,' or white-sand forests, which are extremely rare in the Amazon. These nutrient-poor soils have led to the evolution of a highly specialized and diverse range of plants and animals that are found nowhere else on Earth. Despite its relatively small size, the reserve holds world records for the number of tree and bird species in a single area. It is a vital laboratory for understanding evolution and ecological specialization in the rainforest. Visitors can explore its network of trails to see rare monkeys, exotic birds, and the unique, thin-trunked trees of the white-sand forest. It remains one of the most scientifically significant and fascinating natural areas in the Amazon basin.",
        "facts": [
            "Holds the world record for the highest number of tree species in a single hectare (nearly 300).",
            "Protects several bird species discovered only in the last few decades, like the Ancient Antwren.",
            "Located just a short drive from Iquitos along the road to Nauta.",
            "A major destination for researchers studying the Amazon's diverse soil types.",
            "Critical for the conservation of the endangered black-headed uakari monkey."
        ]
    },
    "pastoruri-glacier-relief-v2": {
        "desc": "The Pastoruri Glacier is one of the most famous and easily accessible glaciers in the Cordillera Blanca, located within the Huascarán National Park. Once a popular destination for skiing, it has become a powerful and moving symbol of the impacts of climate change, as its ice has receded dramatically in recent decades. The park now offers a 'Climate Change Route,' where visitors can witness the shrinking ice and learn about the global environmental challenges facing the Andes. Despite its retreat, the glacier remains a stunning natural monument, surrounded by turquoise lagoons and the giant Puya Raimondii plants that grow nearby. Reaching an altitude of over 5,000 meters, it offers a raw and powerful experience of the high mountain environment. A visit to Pastoruri is both an opportunity to admire the beauty of the ice and a call to action for the preservation of the planet's fragile glacial resources.",
        "facts": [
            "Located at an altitude of approximately 5,200 meters (17,060 feet).",
            "Has lost more than 40% of its ice mass over the last 30 years.",
            "One of the few places in the world where you can stand on a glacier after a short walk from a car.",
            "The area around it is home to the spectacular Puya Raimondii, which can live for 100 years.",
            "Essential for providing water to the Santa River valley during the dry season."
        ]
    },
    "nevado-mismi-relief-v2": {
        "desc": "Nevado Mismi is a glaciated mountain peak in the Andes of southern Peru that gained international fame as the officially recognized source of the Amazon River. Located in the Arequipa department, its meltwater begins a staggering 6,400-kilometer journey across the continent to the Atlantic Ocean. The peak rises to 5,597 meters and is part of a rugged mountain range overlooking the Colca Canyon. The identification of Mismi as the Amazon's source was confirmed by several international expeditions using advanced GPS technology. Today, it is a place of pilgrimage for geographers and adventure seekers who want to stand at the very beginning of the world's largest river. The landscape is a harsh, high-altitude desert of rock and ice, reflecting the raw and humble beginnings of the mighty Amazon. It remains a powerful symbol of the interconnectedness of South America's vast natural systems.",
        "facts": [
            "Confirmed as the most distant source of the Amazon by a National Geographic expedition in 2000.",
            "The source is a small glacial stream that flows into the Carhuasanta River.",
            "The summit is at an elevation of 5,597 meters (18,363 feet).",
            "Located in the Chila mountain range, part of the Peruvian Andes.",
            "A popular destination for serious hikers looking to explore the origins of the world's largest river."
        ]
    },
    "huandoy-relief-v2": {
        "desc": "Huandoy is a spectacular mountain in the Cordillera Blanca, featuring four distinct peaks that rise majestically right next to its higher neighbor, Huascarán. Its highest summit reaches 6,395 meters, making it one of the most prominent and beautiful mountains in the range. The mountain's massive, ice-covered faces are a challenge for even the most experienced mountaineers, known for their technical difficulty and unstable seracs. Huandoy overlooks the stunning Llanganuco Lakes, providing a breathtaking backdrop to their turquoise waters. Its jagged profile and the sheer scale of its glacial walls are a testament to the powerful forces of the Andes. To the local people, it is a significant 'Apu' that complements the presence of Huascarán. It remains an enduring icon of the Ancash region and a dream for the global climbing community. Its presence defines the heart of the Huascarán National Park.",
        "facts": [
            "Features four peaks: Huandoy Norte (6,395m), Oeste (6,356m), Sur (6,160m), and Este (6,000m).",
            "Separated from Huascarán by the deep Llanganuco Valley.",
            "The first ascent of the highest peak was achieved in 1932 by a German-Austrian team.",
            "Part of the UNESCO World Heritage site of Huascarán National Park.",
            "The mountain is visible from almost everywhere in the Callejón de Huaylas."
        ]
    },
    "artesonraju-relief-v2": {
        "desc": "Artesonraju is one of the most iconic and visually perfect mountains in the Peruvian Andes, famous for its near-perfect pyramidal shape and its brilliant white ice faces. Standing at 6,025 meters in the Cordillera Blanca, it is widely believed to have been the inspiration for the famous Paramount Pictures logo. The mountain is a favorite for experienced climbers, particularly for its challenging and elegant 'Paron' and 'Santa Cruz' faces. Its position between the Parón and Santa Cruz valleys offers some of the most spectacular views in the entire range. The climb is technical and demanding, requiring perfect crampon work on steep ice. For many, Artesonraju represents the quintessential Andean peak—beautiful, imposing, and perfectly symmetrical. It remains a pinnacle of high-altitude mountaineering in Peru and a global symbol of mountain majesty.",
        "facts": [
            "One of the few peaks in the Andes that maintains a nearly perfect pyramid shape from multiple angles.",
            "The summit is at an elevation of 6,025 meters (19,767 feet).",
            "Commonly believed to be the model for the 'Paramount' mountain logo.",
            "Located near the stunning turquoise Lake Parón.",
            "First successfully climbed in 1932 by Erwin Hein and Erwin Schneider."
        ]
    }
}

with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_lines = []
current_poi_id = None

i = 0
while i < len(lines):
    line = lines[i]
    
    id_match = re.search(r'id: "([^"]+)"', line)
    if id_match:
        current_poi_id = id_match.group(1)
    
    if "descriptionAdvanced: {" in line and current_poi_id in content_updates:
        is_filled = False
        j = i
        brace_count = 0
        while j < len(lines):
            if "{" in lines[j]: brace_count += 1
            if "}" in lines[j]: brace_count -= 1
            if 'en: "' in lines[j] and not re.search(r'en: ""', lines[j]):
                is_filled = True
            if brace_count == 0: break
            j += 1
        
        if not is_filled:
            update = content_updates[current_poi_id]
            new_lines.append('    descriptionAdvanced: {\n')
            new_lines.append('      de: "",\n')
            new_lines.append('      hu: "",\n')
            new_lines.append('      ro: "",\n')
            new_lines.append(f'      en: "{update["desc"]}"\n')
            new_lines.append('    },\n')
            while i < len(lines) and "}," not in lines[i]:
                i += 1
            i += 1
            continue

    if "factsAdvanced: {" in line and current_poi_id in content_updates:
        is_filled = False
        j = i
        brace_count = 0
        while j < len(lines):
            if "{" in lines[j]: brace_count += 1
            if "}" in lines[j]: brace_count -= 1
            if 'en: [' in lines[j] and '[]' not in lines[j]:
                is_filled = True
            if brace_count == 0: break
            j += 1
        
        if not is_filled:
            update = content_updates[current_poi_id]
            new_lines.append('    factsAdvanced: {\n')
            new_lines.append('      de: [],\n')
            new_lines.append('      hu: [],\n')
            new_lines.append('      ro: [],\n')
            new_lines.append('      en: [\n')
            for k, fact in enumerate(update["facts"]):
                comma = "," if k < len(update["facts"]) - 1 else ""
                new_lines.append(f'        "{fact}"{comma}\n')
            new_lines.append('      ]\n')
            new_lines.append('    }\n')
            while i < len(lines) and "}" not in lines[i]:
                i += 1
            i += 1
            continue

    new_lines.append(line)
    i += 1

with open(file_path, 'w', encoding='utf-8') as f:
    f.writelines(new_lines)
