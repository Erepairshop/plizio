import os
import re

file_path = "lib/visualLab/data/poiExtraMexicoReliefV2.ts"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

updates = {
    "sierra-madre-occidental-relief-v2": {
        "desc": "The Sierra Madre Occidental is a colossal mountain system that dominates the western landscape of Mexico, stretching over 1,500 kilometers from the US border down to the Trans-Mexican Volcanic Belt. This rugged terrain is characterized by high plateaus and deep, dramatic canyons, the most famous being the Barrancas del Cobre (Copper Canyon), which is several times larger than the Grand Canyon. The range was formed primarily by volcanic activity millions of years ago, creating a complex geology of igneous rock. It serves as a vital biological corridor, housing vast forests of pine and oak that support diverse wildlife, including the endangered thick-billed parrot. The Sierra Madre Occidental is also the ancestral home of several indigenous groups, such as the Tarahumara, known for their incredible long-distance running abilities. Its remote and difficult topography has historically acted as both a barrier and a sanctuary throughout Mexico's history.",
        "facts": [
            "The range covers approximately 289,000 square kilometers, representing about one-sixth of Mexico's land area.",
            "Its highest peak is Cerro Mohinora, reaching an elevation of 3,300 meters above sea level.",
            "The Copper Canyon system is made up of six distinct canyons formed by six different rivers.",
            "The range is a major watershed, feeding many of the rivers that irrigate Mexico's western coastal plains.",
            "The Sierra Madre Occidental contains some of the most extensive and least disturbed old-growth forests in Mexico."
        ]
    },
    "sierra-madre-oriental-relief-v2": {
        "desc": "The Sierra Madre Oriental is a majestic mountain range that runs parallel to the Gulf of Mexico, forming the eastern edge of the vast Mexican Plateau. Unlike its western counterpart, this range is primarily composed of folded limestone and shale, creating a landscape of sharp ridges and deep valleys. The range is famous for its incredible biodiversity, particularly in its cloud forests and temperate woods, which are home to numerous endemic species of plants and animals. It acts as a significant climatic barrier, trapping moisture from the Gulf and creating lush, green slopes on its eastern side while leaving the interior plateau relatively arid. The Sierra Madre Oriental is also rich in mineral resources and features spectacular karst formations, including some of the world's deepest caves and sinkholes. Its beauty and ecological importance make it a key region for conservation and nature-based tourism in Mexico.",
        "facts": [
            "The range stretches for roughly 1,000 kilometers from Coahuila down to Puebla and Veracruz.",
            "Its highest point is Cerro San Rafael, which reaches an altitude of 3,700 meters.",
            "The Huasteca Potosina, famous for its turquoise waterfalls, is located within this mountain system.",
            "The range contains the Sotano de las Golondrinas, one of the largest open-pit caves in the world.",
            "The Sierra Madre Oriental is a critical habitat for the monarch butterfly during its migratory journey."
        ]
    },
    "volcan-tacan-relief-v2": {
        "desc": "Tacaná Volcano is a formidable and active stratovolcano that straddles the international border between the state of Chiapas in Mexico and the department of San Marcos in Guatemala. As the second-highest peak in Central America, it rises majestically to over 4,000 meters, dominating the regional skyline. The volcano is part of the Central America Volcanic Arc and is known for its steep slopes and a summit area characterized by multiple lava domes. Its name is derived from the Mam language and means 'House of Fire,' reflecting its long history of volcanic activity. The surrounding slopes are covered in rich volcanic soil, supporting lush cloud forests and coffee plantations that are vital to the local economy. Tacaná is also a sacred mountain for the local indigenous populations and a popular destination for mountaineers who seek to stand on the border between two nations.",
        "facts": [
            "The volcano reaches an official elevation of 4,060 meters (13,320 feet) above sea level.",
            "The last major eruption occurred in 1986, though it remains closely monitored for seismic activity.",
            "The volcano's summit features a small crater and several thermal springs on its slopes.",
            "It is the centerpiece of the Tacaná Volcano Biosphere Reserve, established to protect its unique biodiversity.",
            "The ascent to the summit is considered one of the most challenging and rewarding hikes in southern Mexico."
        ]
    },
    "sierra-volcanica-transversal-relief-v2": {
        "desc": "The Trans-Mexican Volcanic Belt, also known as the Sierra Volcánica Transversal, is a massive volcanic arc that spans across central-southern Mexico from the Pacific Ocean to the Gulf of Mexico. This geologically active region is home to some of the country's most iconic and highest peaks, including Popocatépetl, Iztaccíhuatl, and Pico de Orizaba. The belt was formed by the subduction of the Cocos and Rivera plates under the North American Plate, creating a line of massive stratovolcanos and thousands of smaller cinder cones. This range effectively separates North America from Central America geologically and influences the climate of the entire central plateau. The fertile volcanic soils have historically supported the densest human populations in Mexico, including the ancient civilizations of Teotihuacán and the Aztec Empire. Today, it remains a region of spectacular natural beauty, providing essential water resources and diverse habitats ranging from alpine tundras to temperate forests.",
        "facts": [
            "The belt stretches approximately 900 kilometers (560 miles) from west to east.",
            "It contains the highest point in Mexico, the Pico de Orizaba (Citlaltépetl), at 5,636 meters.",
            "The Parícutin volcano, which famously emerged from a cornfield in 1943, is located within this belt.",
            "The region is highly seismic and contains some of the most monitored volcanoes in the world.",
            "The belt's high altitude and varied terrain make it a hotspot for endemic species and bird migration."
        ]
    },
    "sierra-de-juarez-relief-v2": {
        "desc": "The Sierra de Juárez is a rugged mountain range located in the northern part of the Baja California Peninsula, forming part of the Peninsular Ranges that extend from Southern California. This arid and dramatic landscape is characterized by massive granite boulders, deep canyons, and high-altitude plateaus. Unlike the more lush ranges of central Mexico, the Sierra de Juárez features a Mediterranean-style climate with unique flora, including the endemic Parry pinyon pine and the spectacular giant cardon cactus. The range is a critical watershed for the Ensenada and Mexicali regions, providing essential water through its seasonal streams and underground aquifers. It is a popular destination for outdoor enthusiasts seeking solitude, offering opportunities for rock climbing, hiking, and camping under some of the clearest skies in North America. The National Park of Constitución de 1857 is located within the range, protecting the beautiful Hanson's Lagoon and its surrounding pine forests.",
        "facts": [
            "The range is named after Benito Juárez, one of Mexico's most revered presidents.",
            "Its highest peak, Cerro Blanco, reaches an elevation of approximately 1,980 meters.",
            "The Sierra de Juárez is home to one of the few remaining populations of the California condor in Mexico.",
            "Hanson's Lagoon (Laguna de Juárez) is a rare high-altitude wetland found within the range.",
            "The area is known for its extreme temperature fluctuations between day and night due to its desert environment."
        ]
    },
    "sierra-san-pedro-martir-relief-v2": {
        "desc": "The Sierra de San Pedro Mártir is the highest and most spectacular mountain range on the Baja California Peninsula, known for its pristine wilderness and jagged granite peaks. This remote range is home to Picacho del Diablo, the highest point in Baja California, which offers breathtaking views of both the Pacific Ocean and the Sea of Cortez. The high-altitude forests of pine, fir, and cypress stand in stark contrast to the surrounding desert, creating an 'ecological island' of temperate biodiversity. Due to its extreme isolation, minimal light pollution, and high atmospheric stability, the range hosts the National Astronomical Observatory, one of the most important observatories in the world. The Sierra de San Pedro Mártir National Park protects this unique environment, providing a sanctuary for diverse wildlife including bighorn sheep and the reintroduced California condor. It is a place of raw natural beauty, challenging even the most experienced adventurers with its rugged terrain and unpredictable weather.",
        "facts": [
            "Picacho del Diablo, also known as Cerro de la Encantada, stands at 3,096 meters (10,157 feet).",
            "The National Astronomical Observatory was built here in 1971 due to the exceptional clarity of the skies.",
            "The range features the southernmost extent of many North American coniferous forest species.",
            "Snow is common in the winter months, often lasting through the spring at higher elevations.",
            "The California condor reintroduction program has been highly successful in this remote sanctuary."
        ]
    },
    "llanura-costera-del-golfo-relief-v2": {
        "desc": "The Gulf Coastal Plain is a vast, low-lying region that stretches along Mexico's eastern coast from the US border down to the Yucatán Peninsula. This fertile expanse is characterized by its gentle topography, numerous rivers, and extensive wetlands and lagoons. Fed by the runoff from the Sierra Madre Oriental, the plain features some of the most productive agricultural land in Mexico, particularly for crops like sugarcane, citrus, and tropical fruits. The region is also the heart of Mexico's petroleum industry, with significant oil and gas reserves found both onshore and offshore. Historically, the Gulf Coastal Plain was the cradle of some of Mexico's earliest civilizations, including the Olmecs and the Huastecs, who thrived in its rich, well-watered environment. Today, it remains a vital economic hub, supporting major ports like Veracruz and Altamira, and providing a critical habitat for millions of migratory birds that follow the Atlantic Flyway.",
        "facts": [
            "The plain varies in width, being narrowest in Veracruz and widest in the state of Tamaulipas.",
            "The region contains the Laguna Madre, one of the world's few hypersaline lagoons.",
            "The Panuco and Papaloapan rivers are among the major waterways that cross this plain.",
            "Large areas of the plain are dedicated to cattle ranching, a major industry in the state of Veracruz.",
            "The region is prone to hurricanes and heavy seasonal flooding during the summer and autumn months."
        ]
    },
    "llanura-costera-del-pacifico-relief-v2": {
        "desc": "The Pacific Coastal Plain is a long, narrow strip of lowland that runs along Mexico's western coast, nestled between the Pacific Ocean and the rugged Sierra Madre Occidental. This region is characterized by a series of fertile valleys separated by rocky headlands and extensive coastal lagoons. Despite being narrower than the Gulf plain, it is a critical agricultural region, particularly in the states of Sonora and Sinaloa, where massive irrigation projects have transformed the desert into a major producer of grain and vegetables. The plain features a variety of climates, from the arid deserts of the north to the tropical savannas and deciduous forests of the south. It is a region of immense natural beauty, where the desert meets the sea, providing a rich habitat for marine and terrestrial life. The Pacific Coastal Plain is also a major corridor for transportation and trade, connecting the interior of Mexico with the busy ports of Mazatlán, Manzanillo, and Lázaro Cárdenas.",
        "facts": [
            "The plain extends for over 1,500 kilometers from the US border down to Nayarit.",
            "It is home to the Marismas Nacionales, one of the most important mangrove systems in Mexico.",
            "The Mayo and Yaqui rivers provide essential water for the massive irrigation districts in the north.",
            "The region is a major producer of seafood, particularly shrimp from its many lagoons and estuaries.",
            "The plain's narrowest points are found where the mountains of the Sierra Madre Occidental reach the coast."
        ]
    },
    "meseta-del-centro-relief-v2": {
        "desc": "The Central Plateau, or Meseta del Centro, is the vast interior heartland of Mexico, a high-altitude region bounded by the Sierra Madre Occidental to the west and the Sierra Madre Oriental to the east. This enormous plateau is characterized by wide basins separated by low mountain ranges and extinct volcanic cones. The climate is generally temperate to semi-arid, with most of the rainfall occurring during the summer months. Historically, the Central Plateau has been the most important region of Mexico, hosting its major cities and being the center of its political and economic life since pre-Hispanic times. The fertile basins, particularly the Bajío and the Valley of Mexico, have supported dense populations and advanced agricultural systems for millennia. The plateau is also rich in mineral wealth, particularly silver, which fueled the economy of colonial Mexico. Today, it remains the industrial and cultural core of the nation, blending modern metropolises with historic colonial towns and ancient ruins.",
        "facts": [
            "The plateau sits at an average elevation of 1,500 to 2,500 meters above sea level.",
            "It is divided into a northern, more arid section (Mesa del Norte) and a southern, more fertile section (Mesa Central).",
            "The Valley of Mexico, where the capital is located, is a massive endorheic basin within the plateau.",
            "The Bajío region is known as the 'breadbasket of Mexico' due to its intensive agriculture.",
            "The plateau contains the 'Silver Cities' like Guanajuato and Zacatecas, which were once the world's leading silver producers."
        ]
    },
    "depresion-del-balsas-relief-v2": {
        "desc": "The Balsas Depression is a large, low-lying basin located in southern Mexico, situated between the Trans-Mexican Volcanic Belt to the north and the Sierra Madre del Sur to the south. This hot and relatively arid region is drained by the Balsas River, one of Mexico's longest and most important waterways. The landscape is characterized by rolling hills, deep valleys, and extensive tropical dry forests, which are home to a high number of endemic species. Despite its rugged terrain and harsh climate, the depression has been a significant cultural and agricultural region for thousands of years. It is considered one of the primary centers for the domestication of maize (corn) and has hosted numerous indigenous groups. The Balsas River itself is a major source of hydroelectric power, with several large dams like the Infiernillo Dam creating vast reservoirs within the basin. The region's isolation has helped preserve its unique traditions and natural beauty, making it a fascinating area for biological and anthropological study.",
        "facts": [
            "The depression covers parts of the states of Michoacán, Guerrero, Puebla, and the State of Mexico.",
            "The Balsas River is approximately 770 kilometers long and empties into the Pacific Ocean.",
            "The region is known for its extreme heat, with temperatures often exceeding 40 degrees Celsius in the spring.",
            "It is a major producer of tropical fruits and minerals, including gold and copper.",
            "The Balsas Depression is one of the most important regions for the conservation of Mexico's tropical dry forests."
        ]
    },
    "sierra-madre-del-sur-relief-v2": {
        "desc": "The Sierra Madre del Sur is a complex and rugged mountain system that runs parallel to the Pacific coast of southern Mexico, primarily through the states of Michoacán, Guerrero, and Oaxaca. Unlike the more linear ranges of the north, this system is a jumble of ancient metamorphic and igneous rocks, creating a terrain of steep slopes, narrow valleys, and limited coastal plains. The range is incredibly biodiverse, hosting a vast array of ecosystems from tropical dry forests at lower elevations to lush cloud forests and temperate pine-oak woods in the highlands. It is home to many endemic species, particularly birds and amphibians, and is a critical area for conservation. The Sierra Madre del Sur is also the ancestral home of numerous indigenous groups, including the Mixtecs and Zapotecs, whose ancient cities like Monte Albán were built on its high ridges. Its ruggedness has helped preserve these vibrant cultures, but it also presents significant challenges for transportation and economic development in the region.",
        "facts": [
            "The range extends for about 1,000 kilometers from the Balsas River to the Isthmus of Tehuantepec.",
            "Its highest peak is Cerro Tiotepec in Guerrero, reaching an elevation of 3,550 meters.",
            "The range contains the spectacular Oaxacan coast, known for its rugged cliffs and pristine bays like Huatulco.",
            "It is a major source of timber and minerals, as well as a key coffee-growing region.",
            "The Sierra Madre del Sur is one of the most seismically active regions in Mexico due to its proximity to the Middle America Trench."
        ]
    },
    "istmo-de-tehuantepec-relief-v2": {
        "desc": "The Isthmus of Tehuantepec is the narrowest point of the Mexican territory, representing the shortest distance between the Gulf of Mexico and the Pacific Ocean. This geologically and culturally significant region separates North America from Central America and has long been a major corridor for trade and migration. The terrain is characterized by a low-lying gap in the mountain chains of the Sierra Madre, creating a relatively flat passage that has been the focus of numerous trans-isthmus canal and railway projects since the 19th century. The region is famous for its strong 'Tehuantepecer' winds, which blow from the north during the winter months, often reaching hurricane force. Culturally, the isthmus is a vibrant mosaic, particularly known for the Tehuana women and their iconic traditional dress, which inspired artists like Frida Kahlo. Today, the isthmus is a major hub for the petroleum industry and is home to some of the world's largest wind farms, harnessing the powerful gusts that sweep across the narrow strip of land.",
        "facts": [
            "The isthmus is approximately 200 kilometers wide at its narrowest point.",
            "It connects the states of Veracruz and Oaxaca, with the port cities of Coatzacoalcos and Salina Cruz at its ends.",
            "The region is home to the Chimalapas, one of the most important and biodiverse rainforests in Mexico.",
            "The Tehuantepec Railway, opened in 1907, was once a major rival to the Panama Canal.",
            "The powerful winds of the isthmus can cause significant upwelling in the Gulf of Tehuantepec, enriching its marine life."
        ]
    },
    "peninsula-de-yucatan-relief-v2": {
        "desc": "The Yucatán Peninsula is a massive limestone platform that projects into the Gulf of Mexico and the Caribbean Sea, forming a unique and geographically distinct region of Mexico. The peninsula is characterized by its flat, low-lying topography and the almost complete absence of surface rivers due to its highly porous karst geology. Instead, water flows through a vast network of underground rivers and caves, occasionally opening to the surface in natural sinkholes known as cenotes. These cenotes were sacred to the ancient Maya and were the primary water source for their great cities, such as Chichén Itzá and Uxmal. The northern part of the peninsula features a dry, scrubby landscape, while the south is covered in dense tropical forests. The eastern coast, known as the Riviera Maya, is famous for its powdery white sand beaches and the Mesoamerican Barrier Reef. The entire peninsula is a place of profound archaeological, geological, and biological importance, reflecting a history shaped by the impact of the Chicxulub asteroid and the brilliance of the Maya civilization.",
        "facts": [
            "The peninsula covers an area of approximately 181,000 square kilometers.",
            "It was the site of the Chicxulub asteroid impact 66 million years ago, which led to the extinction of the dinosaurs.",
            "There are estimated to be over 6,000 cenotes across the peninsula.",
            "The region contains the Sian Ka'an Biosphere Reserve, a UNESCO World Heritage site.",
            "The Yucatán Peninsula has its own unique climate and flora, distinct from the rest of mainland Mexico."
        ]
    },
    "sierra-de-chiapas-relief-v2": {
        "desc": "The Sierra Madre de Chiapas is a rugged and majestic mountain range that runs parallel to the Pacific coast in the southernmost part of Mexico, continuing into Guatemala. This range is characterized by its steep volcanic peaks, deep valleys, and incredibly lush cloud forests that are often shrouded in mist. It is one of the wettest and most biodiverse regions in Mexico, housing numerous rare species of plants and animals, including the resplendent quetzal and the pavon (horned guan). The range is a critical watershed, feeding the Grijalva and Usumacinta rivers, which together form the most voluminous river system in the country. Culturally, the Sierra de Chiapas is the heart of the Maya world, with indigenous communities maintaining their traditional languages and customs on its slopes. The high-altitude valleys provide ideal conditions for growing some of Mexico's finest coffee. Its remote and stunning landscapes make it a frontier for adventure and a vital region for environmental conservation.",
        "facts": [
            "The range includes the Tacaná Volcano, which at 4,060 meters is the highest point in the state of Chiapas.",
            "It contains the El Triunfo Biosphere Reserve, home to one of the last remaining primary cloud forests in North America.",
            "The range is composed of ancient granitic rocks as well as more recent volcanic formations.",
            "It forms a significant climatic barrier, trapping moisture from the Pacific and creating a rainy environment.",
            "The Sierra de Chiapas is a major producer of hydroelectric power for the entire nation of Mexico."
        ]
    },
    "golfo-de-mexico-relief-v2": {
        "desc": "The Gulf of Mexico is a massive, semi-enclosed ocean basin that borders Mexico's eastern coast, playing a fundamental role in the country's economy, climate, and ecology. This warm, relatively shallow sea is one of the most productive marine environments in the world, supporting vast fisheries and diverse ecosystems, including coral reefs, seagrass beds, and extensive mangroves. It is also the site of massive petroleum and natural gas reserves, which are a cornerstone of Mexico's national economy. The Gulf significantly influences the regional climate, being the source of much of the moisture that falls as rain over central and eastern Mexico. It also generates the powerful Loop Current, which eventually becomes the Gulf Stream, a major driver of global ocean circulation. Historically, the Gulf has been a vital gateway for trade and exploration, connecting Mexico with the Caribbean, Europe, and the United States. Its coastal lagoons and estuaries serve as critical nurseries for countless marine species and are essential stops for millions of migratory birds.",
        "facts": [
            "The Gulf of Mexico covers an area of approximately 1.5 million square kilometers.",
            "The deepest point is the Sigsbee Deep, reaching a depth of about 4,384 meters.",
            "It is the ninth-largest body of water in the world.",
            "The region is prone to powerful hurricanes, which typically occur between June and November.",
            "The Gulf's waters are home to the endangered Kemp's ridley sea turtle, which nests almost exclusively on its western shores."
        ]
    },
    "mar-caribe-relief-v2": {
        "desc": "The Caribbean Sea borders the eastern edge of the Yucatán Peninsula, offering a stunning contrast to the Gulf of Mexico with its deep blue, crystal-clear waters and vibrant coral reefs. This tropical sea is part of the Atlantic Ocean and is famous for its warm temperatures and exceptional underwater visibility. Along the Mexican coast, the Caribbean is home to the Mesoamerican Barrier Reef, the second-largest coral reef system in the world, which provides a habitat for thousands of marine species, including colorful fish, sea turtles, and manatees. The region's white sand beaches and turquoise lagoons have made it a premier global tourist destination, known as the Riviera Maya and Costa Maya. Beyond its beauty, the Caribbean Sea is a vital economic resource for Mexico, supporting tourism, fishing, and international shipping. It also holds deep historical significance as a crossroads of civilizations and a center for maritime trade since pre-Hispanic times. The conservation of its delicate reef ecosystems is a major priority for Mexico and the international community.",
        "facts": [
            "The Caribbean Sea is known for having some of the saltiest and clearest waters in the world's oceans.",
            "The Mesoamerican Barrier Reef stretches for over 1,000 kilometers from Isla Contoy down to Honduras.",
            "The region includes Cozumel, one of the world's top destinations for scuba diving.",
            "The Caribbean current is a major component of the North Atlantic gyre.",
            "The sea is home to the Banco Chinchorro, the largest coral atoll in Mexico and a graveyard for many historic shipwrecks."
        ]
    },
    "golfo-de-california-relief-v2": {
        "desc": "The Gulf of California, also known as the Sea of Cortez, is a spectacular and biologically rich body of water that separates the Baja California Peninsula from the Mexican mainland. Often described as the 'Aquarium of the World' by Jacques Cousteau, it is one of the most diverse and productive marine environments on Earth. Its unique geography and currents create a high level of endemism, hosting everything from giant blue whales and playful sea lions to the critically endangered vaquita porpoise. The Gulf is dotted with hundreds of rugged islands, many of which are protected as UNESCO World Heritage sites for their unique terrestrial and marine life. The surrounding desert landscape, where mountains plunge directly into the sea, creates a scene of raw, dramatic beauty. The Gulf is also a major economic asset for Mexico, supporting world-class fisheries, pearl cultivation, and a thriving eco-tourism industry. Protecting its fragile balance from overfishing and pollution is a critical challenge for the nation.",
        "facts": [
            "The Gulf of California is approximately 1,200 kilometers long and 90 to 240 kilometers wide.",
            "It was formed millions of years ago by the tectonic separation of the Baja California Peninsula from the mainland.",
            "The region contains over 900 islands and islets, many with unique endemic species.",
            "It is the only place in the world where the vaquita, the smallest porpoise, is found.",
            "The Gulf's northern end features a massive tidal range, among the highest in the world."
        ]
    },
    "oceano-pacifico-relief-v2": {
        "desc": "The Pacific Ocean borders Mexico's entire western coast, representing a vast and powerful maritime frontier that deeply influences the nation's climate, economy, and natural heritage. This immense body of water is characterized by its deep trenches, rugged coastlines, and a series of islands and archipelagos, such as the Revillagigedo Islands. The cold California Current in the north and the warm North Equatorial Current in the south create a dynamic marine environment that supports incredible biodiversity, from massive kelp forests to tropical coral reefs. The Pacific coast is a major hub for Mexico's international trade, with busy ports like Manzanillo and Lázaro Cárdenas connecting the country with Asia and the Americas. It is also a world-renowned destination for surfing, whale watching, and deep-sea fishing. Historically, the Pacific has been a vital link for the Manila Galleon trade and a center for maritime exploration. Its vastness and power continue to shape the life and identity of Mexico's western states.",
        "facts": [
            "Mexico's Pacific coastline is over 7,300 kilometers long, including the Gulf of California.",
            "The Revillagigedo Archipelago, located 400 km offshore, is a UNESCO World Heritage site known as 'Mexico's Little Galápagos'.",
            "The Pacific coast is subject to significant seismic activity due to the subduction of several tectonic plates.",
            "The region is a major pathway for humpback and gray whale migrations.",
            "Manzanillo is the busiest container port on Mexico's Pacific coast."
        ]
    },
    "peninsula-de-baja-california-relief-v2": {
        "desc": "The Baja California Peninsula is a long, narrow finger of land that extends over 1,200 kilometers from the US border into the Pacific Ocean, creating one of the most unique and dramatic landscapes in the world. Characterized by its stark desert beauty, rugged mountain ranges, and pristine coastlines, the peninsula is a place of extremes. It is divided by a central mountain spine, the Peninsular Ranges, which create a dramatic contrast between the arid deserts of the east and the slightly more temperate coasts of the west. The peninsula is world-famous for its incredible marine life, particularly the gray whales that calve in its lagoons and the diverse species of the Sea of Cortez. Its isolation has led to a high degree of endemism in its flora and fauna, such as the giant cardon cactus and the Baja California pronghorn. Historically a remote frontier, it has become a major destination for eco-tourism, off-road racing, and high-end resorts. The peninsula's raw, untouched wilderness continues to fascinate scientists and adventurers alike.",
        "facts": [
            "The peninsula is longer than the country of Italy.",
            "It is divided into two states: Baja California in the north and Baja California Sur in the south.",
            "The peninsula is slowly moving away from the mainland of Mexico at a rate of about 5 centimeters per year.",
            "It contains the El Vizcaíno Biosphere Reserve, the largest protected area in Mexico.",
            "The Baja 1000, one of the world's most prestigious off-road races, takes place across the peninsula every year."
        ]
    },
    "rio-bravo-relief-v2": {
        "desc": "The Río Bravo, known in the United States as the Rio Grande, is one of Mexico's longest and most significant rivers, forming a major part of the international border between Mexico and the US. Stretching over 3,000 kilometers from its headwaters in the Colorado Rockies to the Gulf of Mexico, it is a vital source of water for millions of people and vast areas of agricultural land in both countries. The river's flow has carved spectacular canyons, such as those in the Big Bend and Boquillas regions, and supports unique riparian ecosystems in an otherwise arid landscape. Historically, the Río Bravo has been a significant cultural and political boundary, witness to centuries of trade, conflict, and migration. Today, it is a highly managed waterway, with numerous dams and diversions for irrigation and municipal use, which has significantly reduced its flow in its lower reaches. The river remains a powerful symbol of the shared history and environmental challenges faced by the border communities of North America.",
        "facts": [
            "The Río Bravo is the fifth-longest river in North America.",
            "Approximately 2,000 kilometers of the river's length forms the Mexico-US border.",
            "The Falcon and Amistad dams are major international reservoirs on the river.",
            "The river's mouth at the Gulf of Mexico often dries up completely during periods of extreme drought.",
            "It is a critical corridor for migratory birds and provides a habitat for the endangered Rio Grande silvery minnow."
        ]
    },
    "rio-grijalva-relief-v2": {
        "desc": "The Grijalva River is one of Mexico's most powerful and voluminous waterways, flowing through the states of Chiapas and Tabasco in the country's humid southeast. Originating in the mountains of Guatemala, it carves a dramatic path through the Sierra Madre de Chiapas, including the spectacular Sumidero Canyon, where its walls rise up to 1,000 meters high. The river is a major source of hydroelectric power for Mexico, with four massive dams—Angostura, Chicoasén, Malpaso, and Peñitas—forming a series of large reservoirs. In its lower reaches, the Grijalva flows through the vast marshlands of Tabasco before joining the Usumacinta River and emptying into the Gulf of Mexico. The river has been a vital artery for transportation and trade for millennia, supporting ancient Maya cities and modern regional centers like Tuxtla Gutiérrez and Villahermosa. Its powerful current and the lush landscapes it sustains make it a central feature of southern Mexico's natural and economic life.",
        "facts": [
            "The Grijalva-Usumacinta system is the second-largest river system in North America by volume of discharge.",
            "The Chicoasén Dam features one of the highest dam walls in the world at 261 meters.",
            "The river was named after the Spanish explorer Juan de Grijalva, who visited the area in 1518.",
            "Sumidero Canyon, through which the river flows, is a national park and a major tourist attraction.",
            "The lower Grijalva is prone to severe seasonal flooding, particularly during the hurricane season."
        ]
    },
    "rio-usumacinta-relief-v2": {
        "desc": "The Usumacinta River is a legendary waterway that winds through the dense tropical rainforests of Chiapas and Tabasco, forming part of the border between Mexico and Guatemala. Known as the 'River of the Sacred Monkey,' it is the most voluminous river in Mexico and Central America and was a vital lifeblood for the ancient Maya civilization. Its banks are lined with some of the most spectacular archaeological sites in the Maya world, including Yaxchilán and Piedras Negras, which were once powerful city-states that controlled river trade. The Usumacinta flows through a landscape of incredible biodiversity, characterized by towering mahogany trees, limestone canyons, and the thunderous roar of howler monkeys. In its lower reaches, it meanders through the Pantanos de Centla, a massive wetland reserve, before joining the Grijalva River and emptying into the Gulf of Mexico. The Usumacinta remains one of Mexico's last wild rivers, largely free of major dams, and is a frontier for both biological research and adventure tourism.",
        "facts": [
            "The Usumacinta is approximately 1,000 kilometers long, including its headwaters in Guatemala.",
            "It is the only major river in Mexico that still flows mostly unimpeded by large dams.",
            "The river is home to the critically endangered Morelet's crocodile and the Central American river turtle.",
            "The Pantanos de Centla at the river's mouth is the largest wetland in North America.",
            "Historically, the river was the primary highway for the transport of precious woods and Maya luxury goods."
        ]
    },
    "rio-lerma-relief-v2": {
        "desc": "The Lerma River is Mexico's longest interior river, playing a critical but troubled role in the nation's heartland. Originating from the high-altitude springs of the Almoloya lagoons in the State of Mexico, it flows westward through the fertile Bajío region before emptying into Lake Chapala. The river is a vital source of water for agriculture and industry in central Mexico, supporting some of the country's most productive farmlands and major industrial cities like Toluca and Salamanca. However, decades of intensive use and untreated discharge have made the Lerma one of the most polluted rivers in Mexico, posing significant environmental and health challenges. Efforts are ongoing to restore its water quality and ecological health, as it is essential for the sustainability of the regional economy and the survival of Lake Chapala. The Lerma-Santiago system, which continues from the lake to the Pacific, represents a major hydrological axis for the entire country.",
        "facts": [
            "The Lerma River is approximately 750 kilometers long from its source to Lake Chapala.",
            "It is the primary water source for the Guadalajara metropolitan area via Lake Chapala.",
            "The river basin is home to over 10% of Mexico's total population.",
            "The Lerma has lost more than 90% of its original flow due to diversions for agriculture and city use.",
            "Historically, the river's headwaters were a sacred site for the Matlatzinca people."
        ]
    },
    "lago-de-chapala-relief-v2": {
        "desc": "Lake Chapala is Mexico's largest freshwater lake, nestled in a spectacular mountain-rimmed basin on the border between the states of Jalisco and Michoacán. This massive body of water is a critical ecological and economic resource, providing much of the water for the city of Guadalajara and supporting a vibrant local fishing industry. The lake's pleasant, temperate climate has made it a popular destination for retirees and tourists, particularly in towns like Ajijic and Chapala, which are known for their colorful streets and artistic communities. Lake Chapala is also a vital sanctuary for migratory birds, with thousands of American white pelicans and other species visiting its shores every winter. However, the lake faces significant threats from pollution, siltation, and the over-extraction of water from its primary feeder, the Lerma River. The preservation of Lake Chapala is essential for the regional climate and the well-being of the millions of people who depend on its waters.",
        "facts": [
            "Lake Chapala covers an area of approximately 1,100 square kilometers, though its size fluctuates with the seasons.",
            "The lake is very shallow, with an average depth of only about 4.5 to 7 meters.",
            "It is located at an elevation of 1,524 meters above sea level.",
            "The lake features several islands, including Isla de Mezcala, which has an important historic fortress.",
            "Lake Chapala was designated as a Ramsar Wetland of International Importance in 2009."
        ]
    },
    "pico-de-orizaba-relief-v2": {
        "desc": "Pico de Orizaba, also known as Citlaltépetl (Star Mountain), is the highest mountain in Mexico and the third-highest in North America. This dormant but potentially active stratovolcano rises majestically to 5,636 meters, its snow-capped peak visible from hundreds of kilometers away and even from the Gulf of Mexico on clear days. Located on the border between the states of Puebla and Veracruz, it marks the eastern end of the Trans-Mexican Volcanic Belt. The mountain features one of Mexico's few remaining glaciers, the Gran Glaciar Norte, which is a critical source of water for the surrounding regions. Pico de Orizaba is a premier destination for mountaineers, offering a challenging ascent through diverse ecological zones, from temperate forests to alpine tundras and permanent ice. The mountain is steep in mythology and history, having been a sacred landmark for pre-Hispanic cultures and a vital navigational aid for colonial sailors. Its immense scale and solitary beauty make it the undisputed king of the Mexican landscape.",
        "facts": [
            "Pico de Orizaba stands at 5,636 meters (18,491 feet) above sea level.",
            "The last significant eruption occurred in 1846.",
            "It is the second most prominent volcanic peak in the world after Africa's Mount Kilimanjaro.",
            "The Pico de Orizaba National Park was established in 1937 to protect its unique high-altitude environment.",
            "The mountain is home to a unique species of high-altitude pine tree, Pinus hartwegii, which grows at the tree line."
        ]
    }
}

blocks = re.split(r'\n  \},\n', content)

new_blocks = []
for i, block in enumerate(blocks):
    is_last = (i == len(blocks) - 1)
    id_match = re.search(r'id:\s*["\']([^"\']+)["\']', block)
    if id_match:
        poi_id = id_match.group(1)
        if poi_id in updates:
            data = updates[poi_id]
            desc_adv = f'    descriptionAdvanced: {{\n      de: "",\n      hu: "",\n      ro: "",\n      en: "{data["desc"]}"\n    }},\n'
            facts_str = ',\n        '.join([f'"{f}"' for f in data["facts"]])
            facts_adv = f'    factsAdvanced: {{\n      de: [],\n      hu: [],\n      ro: [],\n      en: [\n        {facts_str}\n      ]\n    }}'
            if is_last:
                block = re.sub(r'(\n  \})\n\];', r',\n' + desc_adv + facts_adv + r'\1\n];', block)
            else:
                block = block.rstrip() + ",\n" + desc_adv + facts_adv
    new_blocks.append(block)

new_content = "\n  },\n".join(new_blocks)
with open(file_path, "w", encoding="utf-8") as f:
    f.write(new_content)
print(f"Successfully updated {len(updates)} POIs")
