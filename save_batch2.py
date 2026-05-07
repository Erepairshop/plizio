import json

batch = {
  "lang": "en",
  "country": "nicaragua",
  "files": [
    "lib/visualLab/data/poiExtraNicaraguaCitiesV2.ts",
    "lib/visualLab/data/poiExtraNicaraguaEconomicV2.ts",
    "lib/visualLab/data/poiExtraNicaraguaHistoryV2.ts",
    "lib/visualLab/data/poiExtraNicaraguaLandmarksV2.ts",
    "lib/visualLab/data/poiExtraNicaraguaLifeV2.ts",
    "lib/visualLab/data/poiExtraNicaraguaNatureV2.ts",
    "lib/visualLab/data/poiExtraNicaraguaReliefV2.ts"
  ],
  "items": [
    {
      "id": "posoltega-cities-v2",
      "descriptionAdvanced": "Posoltega is a resilient municipality in the Chinandega Department, forever marked in national memory by the tragic events of October 1998. During Hurricane Mitch, unprecedented rainfall caused a massive mudslide from the Casita volcano that completely buried the villages of El Porvenir and Rolando Rodriguez, resulting in thousands of casualties. Today, the town has rebuilt itself and constructed a moving memorial near the disaster site. The local economy is largely based on agriculture, specifically peanuts, sugarcane, and sesame seeds, thriving in the fertile volcanic plains. Despite the past trauma, Posoltega stands as a symbol of community resilience and disaster recovery in Central America. Geography K8 \u2014 natural disasters and volcanic hazards.",
      "factsAdvanced": [
        "Tragically struck by a catastrophic mudslide during Hurricane Mitch in October 1998.",
        "An estimated 2,000 to 3,000 residents perished during the Casita volcano landslide.",
        "The town was originally established as an indigenous settlement before the Spanish arrival.",
        "Located in a highly fertile agricultural zone known for peanut and sugarcane farming.",
        "A memorial park was constructed at the site of the former village of El Porvenir.",
        "The municipality sits near the base of the Casita and San Cristóbal volcanic complex."
      ]
    },
    {
      "id": "san-rafael-del-sur-cities-v2",
      "descriptionAdvanced": "San Rafael del Sur is a vibrant municipality located in the Managua Department, best known for its long, beautiful stretch of Pacific coastline. It is home to the famous Montelimar beach and the massive Barceló Montelimar resort, built on a former estate owned by the Somoza family. Historically, the area was pivotal for its large-scale sugarcane processing at the Julio Buitrago mill. The local economy is a unique blend of robust international coastal tourism, artisanal fishing in the nearby village of Masachapa, and intensive agriculture. The town is situated on a coastal plain roughly 45 kilometers from the capital, serving as a primary weekend getaway. Economics K7 \u2014 coastal tourism and resort development.",
      "factsAdvanced": [
        "Home to Montelimar Beach, one of Nicaragua's most famous coastal resort areas.",
        "The Barceló Montelimar resort is built on a former estate of the Somoza dynasty.",
        "Contains the Julio Buitrago sugarcane mill, a significant employer in the region.",
        "The nearby coastal village of Masachapa is a major hub for artisanal fishing.",
        "Elevated to the status of a city in the year 1956.",
        "The local topography transitions from rolling hills to flat Pacific coastal plains."
      ]
    },
    {
      "id": "masatepe-cities-v2",
      "descriptionAdvanced": "Masatepe is a bustling, industrious city located on the Carazo plateau in the Masaya Department. It is nationally renowned for its artisanal woodworking and robust furniture industry, particularly the creation of intricate rocking chairs and wicker-woven furniture that line the town's main streets. Agriculturally, the city is surrounded by citrus groves and coffee farms that benefit from the cool plateau breezes. Masatepe also boasts a rich culinary heritage, famous for the traditional 'Mondongo' soup, a thick tripe stew served generously in local eateries. The town's colonial-style parish church, dedicated to St. John the Baptist, is a striking focal point in the central square. Culture K6 \u2014 artisanal crafts and local gastronomy.",
      "factsAdvanced": [
        "Recognized nationwide as a premier center for artisanal wooden and wicker furniture.",
        "The traditional 'Sopa de Mondongo' (tripe soup) is the town's signature culinary dish.",
        "Located on the elevated Carazo plateau, offering a cooler climate than Managua.",
        "The local San Juan Bautista Parish church is a prominent architectural landmark.",
        "Elevated to the official status of a city in the year 1995.",
        "The patron saint festival is celebrated in late June with traditional parades."
      ]
    },
    {
      "id": "niquinohomo-cities-v2",
      "descriptionAdvanced": "Niquinohomo is deeply enshrined in Nicaraguan history as the birthplace of General Augusto C. Sandino, the iconic revolutionary leader who fought against the US Marine occupation in the 1920s and 30s. Declared a 'National Historic Heritage' site in 2002, the town preserves his childhood home as a public museum and library. Located in the Masaya Department, the town features charming colonial architecture and a beautifully restored central park honoring its famous son. The imposing 17th-century Parroquia Santa Ana dominates the skyline. The local economy is characterized by small-scale farming, artisanal crafts, and growing historical tourism. History K8 \u2014 national heroes and anti-imperialist resistance.",
      "factsAdvanced": [
        "Birthplace of Augusto C. Sandino, the iconic national revolutionary hero, born in 1895.",
        "The town was officially declared a 'National Historic Heritage' site in 2002.",
        "The Parroquia Santa Ana church is one of the oldest in the country, built in 1668.",
        "The name 'Niquinohomo' translates from Chorotega to 'Valley of Warriors'.",
        "Sandino's childhood home now serves as a museum and public library.",
        "Elevated to the official status of a city by the government in 1870."
      ]
    },
    {
      "id": "la-concepcion-masaya-cities-v2",
      "descriptionAdvanced": "La Concepción, affectionately known by locals as 'La Concha', is a highly elevated town in the Masaya Department, situated on the upper slopes near the Santiago volcano. Due to its altitude and fertile volcanic soils, it serves as the 'citrus capital' of the region, producing massive quantities of oranges, mandarins, and pitahayas (dragon fruit). The town is deeply devoted to the Catholic faith, most visibly during the annual 'Tope de los Santos' in February, a vibrant festival where patron saints from neighboring municipalities 'meet' to celebrate the Virgin of Montserrat. The cool, breezy climate makes it a distinct agricultural enclave compared to the surrounding hot plains. Geography K6 \u2014 volcanic microclimates and fruit orchards.",
      "factsAdvanced": [
        "Nationally renowned as a major producer of citrus fruits, especially oranges.",
        "Located at an elevation of over 500 meters, offering a distinct, cool microclimate.",
        "The patron saint, the Virgin of Montserrat, is celebrated every February.",
        "The traditional 'Tope de los Santos' festival involves a ceremonial meeting of statues.",
        "The name 'La Concha' is widely used by Nicaraguans to refer to the town.",
        "The region's rich, porous volcanic soil is ideal for cultivating pitahayas (dragon fruit)."
      ]
    },
    {
      "id": "telica-cities-v2",
      "descriptionAdvanced": "Telica is a rugged agricultural town in the León Department, sitting directly in the shadow of the highly active Telica volcano. The towering, smoking crater is a constant presence in the daily lives of the residents, dictating both the fertile nature of their soils and the ever-present threat of ash falls. The local economy is based heavily on sesame, sorghum, and peanut farming, utilizing the flat, dry plains that surround the volcanic chain. The town itself serves as the primary logistical base point for international hikers and geologists attempting to summit the volcano. Telica has a dusty, historic atmosphere typical of the northwestern plains. Geography K7 \u2014 active volcanoes and dryland farming.",
      "factsAdvanced": [
        "Located at the base of the Telica volcano, one of the most active in Nicaragua.",
        "The local San Francisco de Asís church is a central community hub.",
        "The municipality frequently experiences ash falls from the nearby volcanic vent.",
        "Agriculture relies heavily on drought-resistant crops like sesame and sorghum.",
        "A primary starting point for eco-tourism excursions to the volcanic crater.",
        "The town was historically a major settlement for the indigenous Maribios people."
      ]
    },
    {
      "id": "san-juan-de-limay-cities-v2",
      "descriptionAdvanced": "San Juan de Limay is an isolated, culturally rich town nestled deep in a valley within the Estelí Department. It is famously celebrated throughout Nicaragua as the capital of 'Marmolina' (soapstone) carving. Entire families of artisans dedicate their lives to sculpting incredibly detailed statues, figures, and decorative items from this soft, white and pink stone extracted from local quarries. Due to its remote location, accessible primarily via a winding dirt road, Limay has preserved a highly traditional, rural lifestyle. The surrounding mountainous landscape is arid and challenging, making artisanal stone carving a vital economic lifeline alongside subsistence farming and small-scale cattle ranching. Culture K7 \u2014 rural artisanship and local materials.",
      "factsAdvanced": [
        "Nationally recognized as the center for intricate 'Marmolina' (soapstone) sculptures.",
        "Dozens of artisanal workshops operate within the small town center.",
        "Located in a remote, mountainous valley approximately 45 kilometers from Estelí.",
        "The local soapstone is mined directly from quarries in the surrounding hills.",
        "The town's patron saint is Saint John the Baptist, celebrated in late June.",
        "The area experiences a harsh dry season, typical of the northern dry corridor."
      ]
    },
    {
      "id": "tola-cities-v2",
      "descriptionAdvanced": "Tola is a fast-developing municipality in the Rivas Department that has transformed over the last two decades from a quiet ranching community into Nicaragua's premier international surfing and luxury tourism destination. The 'Emerald Coast' (Costa Esmeralda) of Tola features spectacular Pacific beaches like Playa Colorado, Popoyo, and Guasacate, known globally for their consistent, world-class waves. This coastal strip now hosts massive luxury resorts, high-end residential communities, and a new international airport (Costa Esmeralda Airport). Despite the coastal boom, the inland town of Tola remains deeply rooted in traditional agriculture, cattle farming, and its historical colonial charm. Economics K8 \u2014 coastal gentrification and surf tourism.",
      "factsAdvanced": [
        "Home to the 'Emerald Coast', featuring world-class surfing beaches like Popoyo.",
        "Hosts massive luxury developments including the Guacalito de la Isla resort.",
        "The Costa Esmeralda International Airport was opened in 2015 to serve tourists.",
        "Inland Tola remains a traditional center for cattle ranching and agriculture.",
        "The beaches of Tola host annual international surfing competitions.",
        "The municipality covers a large coastal area with over 50 kilometers of beaches."
      ]
    },
    {
      "id": "moyogalpa-cities-v2",
      "descriptionAdvanced": "Moyogalpa is the bustling primary port town on the dual-volcano island of Ometepe, situated on the slopes of the active Concepción volcano. As the main arrival point for ferries and boats crossing Lake Nicaragua from the mainland port of San Jorge, it serves as the commercial and logistical heart of the island. Moyogalpa's streets are lined with hostels, tour operators, and restaurants catering to a constant stream of international backpackers and eco-tourists. Beyond tourism, the surrounding fertile volcanic soils support significant plantain and sesame cultivation. The town offers spectacular, intimidating views of the perfect conical peak of Concepción towering directly above it. Geography K6 \u2014 island ports and volcano tourism.",
      "factsAdvanced": [
        "Serves as the primary ferry port connecting Ometepe Island to the mainland.",
        "Located directly on the western slopes of the highly active Concepción volcano.",
        "The name 'Moyogalpa' translates from Nahuatl to 'Place of Mosquitoes'.",
        "The local economy is heavily dependent on international eco-tourism and backpackers.",
        "The town features a small regional airstrip, the Ometepe Airport, opened in 2014.",
        "Surrounded by highly fertile soils used extensively for plantain farming."
      ]
    },
    {
      "id": "altagracia-cities-v2",
      "descriptionAdvanced": "Altagracia is the second major municipality on the island of Ometepe, located on the eastern side between the Concepción and Maderas volcanoes. In contrast to the bustling port of Moyogalpa, Altagracia has a quieter, more traditional indigenous atmosphere. The town's central park is famous for housing a collection of large pre-Columbian basalt statues, demonstrating the island's deep historical significance as an indigenous sanctuary. The local economy is predominantly agricultural, with extensive coffee and banana plantations thriving on the volcanic slopes. The town also serves as a gateway to the Santo Domingo beach and the misty, cloud-forest covered peak of the Maderas volcano. History K7 \u2014 indigenous sanctuaries and island agriculture.",
      "factsAdvanced": [
        "The second-largest town on Ometepe Island, located on the eastern side.",
        "The central park displays significant pre-Columbian basalt indigenous statues.",
        "Situated geographically between the active Concepción and dormant Maderas volcanoes.",
        "The local economy is heavily tied to agriculture, specifically plantains and coffee.",
        "The San Diego parish church is the spiritual center, celebrating its patron saint in November.",
        "Features a more traditional and quiet atmosphere compared to Moyogalpa."
      ]
    },
    {
      "id": "wien-cities-v2",
      "descriptionAdvanced": "Wiwilí de Nueva Segovia (often just Wiwilí) is a remote, frontier town located deep in the northern mountains along the banks of the massive Coco River. It sits exactly on the border between the departments of Nueva Segovia and Jinotega, with the river physically dividing the settlement. Historically, the area was heavily militarized and served as a base for Sandino's forces in the 1930s, and later saw intense combat during the Contra War in the 1980s. Today, it is a bustling hub for river transport, connecting isolated indigenous communities downstream in the Bosawás Reserve to the national road network. The economy relies heavily on coffee, timber, and river trade. Geography K8 \u2014 river networks and historical conflict zones.",
      "factsAdvanced": [
        "Physically divided by the Coco River, creating two separate municipal jurisdictions.",
        "Serves as a critical river transport hub connecting the Bosawás Biosphere Reserve.",
        "The area was a major stronghold for General Sandino in the early 20th century.",
        "Heavily impacted by intense combat operations during the 1980s Contra War.",
        "The local economy is driven by remote coffee farming, cattle, and timber extraction.",
        "Located over 240 kilometers from Managua in a deeply mountainous region."
      ]
    },
    {
      "id": "waspam-cities-v2",
      "descriptionAdvanced": "Waspam is the sprawling, remote capital of the indigenous Miskito territory, located on the banks of the Coco River (Wangki) forming the border with Honduras in the North Caribbean Coast Autonomous Region (RACCN). It is the cultural and administrative heart for dozens of indigenous communities that live along the river. Accessible primarily via a grueling unpaved road from Puerto Cabezas or by small aircraft, Waspam feels entirely disconnected from the Pacific half of Nicaragua, with Miskito being the primary language spoken. The region relies on subsistence agriculture, fishing, and timber. Historically, it was the epicenter of a massive refugee crisis during the 1980s civil war. Culture K8 \u2014 indigenous territories and remote river communities.",
      "factsAdvanced": [
        "The cultural and administrative center of the indigenous Miskito people.",
        "Located on the banks of the Coco River, serving as the border with Honduras.",
        "Miskito is the primary language spoken, significantly more common than Spanish.",
        "Accessible mainly via a highly challenging dirt road from Puerto Cabezas.",
        "The region was the epicenter of the Miskito refugee crisis during the 1980s war.",
        "The local economy relies heavily on subsistence farming, fishing, and forestry."
      ]
    },
    {
      "id": "rio-blanco-cities-v2",
      "descriptionAdvanced": "Río Blanco is a rapidly growing, rugged commercial hub located in the eastern Matagalpa Department, positioned precisely on the edge of the agricultural frontier. Serving as the 'gateway' to the autonomous Caribbean regions, the city sits on the crucial highway connecting the central highlands to the mining triangle. Over the past decades, Río Blanco has transformed from a dense jungle settlement into a major center for cattle ranching, dairy processing, and logistics. The aggressive expansion of pastures into the surrounding forests characterizes the local economy. The town has a frontier, pioneer atmosphere, heavily trafficked by cargo trucks and cattle traders. Geography K8 \u2014 agricultural frontiers and logistics gateways.",
      "factsAdvanced": [
        "Serves as the critical transport gateway connecting central Nicaragua to the Caribbean coast.",
        "The local economy is massively dominated by cattle ranching and dairy production.",
        "Located at the edge of the agricultural frontier, historically surrounded by dense jungle.",
        "Upgraded to the official status of a municipality in the year 1974.",
        "Positioned on the main highway leading to the remote 'Mining Triangle' (Las Minas).",
        "Features a rapidly expanding urban population driven by internal migration."
      ]
    },
    {
      "id": "siuna-cities-v2",
      "descriptionAdvanced": "Siuna is the largest and most populous city in the famous 'Mining Triangle' (El Triángulo Minero) located deep within the North Caribbean Coast Autonomous Region (RACCN). Established in the late 19th century following the discovery of massive gold deposits, the city was developed heavily by foreign mining companies, leaving a legacy of deep open-pit mines and environmental degradation. While large-scale commercial mining has slowed, artisanal gold mining (güirisería) remains a critical, albeit dangerous, livelihood for thousands. Today, Siuna has also transitioned into a major regional commercial and agricultural center, serving as a hub for the surrounding indigenous and mestizo farming communities. Economics K8 \u2014 extractive industries and frontier urbanization.",
      "factsAdvanced": [
        "The most populous city in the historic 'Mining Triangle' of the RACCN.",
        "Historically dominated by foreign-owned gold mining companies starting in the late 1800s.",
        "Artisanal gold mining, known as 'güirisería', employs thousands of local residents.",
        "Located approximately 318 kilometers northeast of the capital, Managua.",
        "The city features a small airport providing vital air links to the Pacific coast.",
        "Severe environmental impacts remain from decades of unregulated open-pit mining."
      ]
    },
    {
      "id": "rosita-cities-v2",
      "descriptionAdvanced": "Rosita is the central hub of the 'Mining Triangle' in the RACCN, originally built around the extraction of copper, gold, and silver. Unlike Siuna and Bonanza, Rosita's boom in the mid-20th century was driven primarily by a massive copper mine operated by the Rosario Mining Company. When the international companies departed in the 1970s, the town faced severe economic decline. Today, the local economy relies heavily on artisanal mining, timber extraction, and the rapid expansion of cattle ranching into the surrounding tropical broadleaf forests. The town retains a rugged, isolated character, featuring a diverse population of Mestizo settlers and indigenous Mayangna and Miskito communities. Economics K7 \u2014 boom-and-bust cycles and copper mining.",
      "factsAdvanced": [
        "A core municipality of the historic 'Mining Triangle' in the northern Caribbean region.",
        "Originally developed around a massive copper mine rather than exclusively gold.",
        "The Rosario Mining Company operated extensively here during the mid-20th century.",
        "The population is a diverse mix of Mestizo, Mayangna, and Miskito peoples.",
        "Local agriculture and cattle ranching have expanded massively since the mines closed.",
        "Located deep in the tropical rainforest, roughly 360 kilometers from Managua."
      ]
    },
    {
      "id": "bonanza-cities-v2",
      "descriptionAdvanced": "Bonanza is the northernmost and most geographically isolated city of the 'Mining Triangle' in the RACCN, surrounded by the dense, pristine jungles of the Bosawás Biosphere Reserve. True to its name, the town was founded on rich veins of gold and remains the only one of the three mining cities where large-scale, industrial underground gold mining is still the primary economic engine. The city is carved into steep, uneven hillsides, giving it a chaotic, multi-level layout. Artisanal miners operate alongside massive corporate processing plants. Due to its proximity to Bosawás, Bonanza is a critical zone for conservation efforts balancing economic survival with rainforest protection. Geography K8 \u2014 underground mining and rainforest conservation.",
      "factsAdvanced": [
        "The only city in the 'Mining Triangle' where industrial underground gold mining remains dominant.",
        "The urban area is built on steep, uneven hillsides, creating a chaotic layout.",
        "Bordered immediately by the massive Bosawás Biosphere Reserve, Central America's largest forest.",
        "Artisanal miners (güiriseros) sell raw ore directly to large corporate processing plants.",
        "Heavy rainfall is common year-round, contributing to difficult transport conditions.",
        "The Mayangna indigenous people inhabit several surrounding communal territories."
      ]
    },
    {
      "id": "puerto-morazan-cities-v2",
      "descriptionAdvanced": "Puerto Morazán is a quiet, remote municipality located in the extreme northwest of the Chinandega Department, perched on the edge of the vast Estero Real estuary system leading into the Gulf of Fonseca. Historically known as 'Tonalá', it once served as an important port and railway terminus for exporting goods to El Salvador and Honduras. Today, its economy is almost entirely dependent on the surrounding mangrove ecosystems, serving as a massive center for industrial shrimp farming (camaroneras) and artisanal crabbing. The town lies in a hot, isolated environment where the preservation of mangroves clashes frequently with the expansion of aquaculture pools. Geography K7 \u2014 estuary ecosystems and aquaculture.",
      "factsAdvanced": [
        "Located on the edge of the Estero Real, a massive mangrove estuary system.",
        "Historically served as the terminus for the western branch of the national railway.",
        "Industrial shrimp farming is the absolute core of the modern local economy.",
        "The municipality borders the Gulf of Fonseca, sharing waters with Honduras.",
        "Originally known as the town of 'Tonalá' before being renamed.",
        "The local mangrove forests are crucial for coastal protection and fish breeding."
      ]
    },
    {
      "id": "el-jicaral-cities-v2",
      "descriptionAdvanced": "El Jicaral is a small, traditional municipality in the León Department, situated in the hot, dry plains at the foothills of the northwestern volcanic chain. Far removed from major highways, it maintains a quiet, rural lifestyle deeply rooted in subsistence agriculture and cattle ranching. Recently, the town gained national attention due to the discovery and exploitation of commercial gold deposits, bringing a sudden influx of mining activity to an area historically known only for sesame and sorghum farming. The landscape is characterized by dry tropical scrubland and expansive pastures that turn brown during the severe dry season. Geography K6 \u2014 rural isolation and emerging mining.",
      "factsAdvanced": [
        "A small, rural municipality heavily reliant on traditional cattle ranching.",
        "Located in the dry plains northeast of the city of León.",
        "Commercial gold mining operations have recently been established in the area.",
        "The local climate is exceptionally hot, being part of the Central American Dry Corridor.",
        "Sesame seeds and sorghum are the primary agricultural cash crops.",
        "The town features a colonial-era church in its quiet central plaza."
      ]
    },
    {
      "id": "mateare-cities-v2",
      "descriptionAdvanced": "Mateare is an ancient indigenous settlement and current municipality located just west of Managua, hugging the southern shoreline of Lake Managua (Lake Xolotlán). Geographically, it is dominated by the Apoyeque peninsula and its stunning, water-filled volcanic caldera. Historically, it was a significant Chorotega indigenous center before the Spanish conquest. Today, Mateare functions largely as an industrial and residential suburb of the capital, hosting numerous factories and free-trade zones along the new highway. Despite its industrial growth, it maintains a strong fishing culture on the lake and faces severe challenges regarding deforestation and water pollution in the lake basin. History K6 \u2014 indigenous settlements and suburban industrialization.",
      "factsAdvanced": [
        "One of the oldest documented indigenous settlements in Nicaragua.",
        "Located on the shores of Lake Managua, just northwest of the capital.",
        "Home to the Apoyeque volcanic caldera, featuring a pristine crater lake.",
        "The municipality hosts several large industrial factories and free-trade zones.",
        "The local economy retains a sector dedicated to artisanal fishing on Lake Managua.",
        "Sits near the active Chiltepe volcanic complex, posing a long-term geological risk."
      ]
    },
    {
      "id": "waslala-cities-v2",
      "descriptionAdvanced": "Waslala is an isolated, deeply mountainous municipality located on the border between the Matagalpa Department and the RACCN. Accessible only via difficult, unpaved mountain roads, it serves as a remote commercial hub for dozens of small, scattered farming communities nestled in the rainforest. During the 1980s, Waslala was notoriously known as one of the most violent and heavily contested epicenters of the Contra War, suffering immense casualties and destruction. Today, it has transitioned into a peaceful region known for producing some of the highest-quality organic cacao and coffee in the country, though it remains severely underdeveloped in terms of basic infrastructure. History K8 \u2014 post-conflict recovery and organic agriculture.",
      "factsAdvanced": [
        "Located deep in the mountainous border region between Matagalpa and the Caribbean coast.",
        "A major epicenter of intense combat and violence during the 1980s Contra War.",
        "Nationally recognized for the production of high-quality organic cacao.",
        "Accessible primarily via challenging, unpaved roads prone to mudslides.",
        "The town serves as a commercial center for highly isolated, off-grid farming communities.",
        "Officially declared a municipality relatively recently in the year 1989."
      ]
    },
    {
      "id": "san-isidro-matagalpa-cities-v2",
      "descriptionAdvanced": "San Isidro is a critical transport and agricultural hub in the Matagalpa Department, located exactly where the Pan-American Highway intersects with the primary road leading east to the city of Matagalpa. Situated in the flat, heavily irrigated Sébaco valley, the town is an agricultural powerhouse, producing massive quantities of rice under intensive cultivation. The landscape is characterized by flooded rice paddies reflecting the bright sun and large industrial silos dominating the skyline. Due to its strategic crossroads location, San Isidro is a bustling center for commerce, mechanics, and logistics, serving travelers and truck drivers traversing the northern half of the country. Geography K7 \u2014 highway intersections and rice cultivation.",
      "factsAdvanced": [
        "Located at a crucial intersection of the Pan-American Highway and the road to Matagalpa.",
        "The surrounding plains are heavily irrigated and utilized for intensive rice farming.",
        "The town features massive agricultural silos for storing national grain reserves.",
        "Elevated to the status of a city by the national government in 1862.",
        "The patron saint festival honors San Isidro Labrador, the patron of farmers, in May.",
        "Serves as a major logistical stop for heavy cargo trucks traversing Central America."
      ]
    },
    {
      "id": "tecolostote-cities-v2",
      "descriptionAdvanced": "Tecolostote is a significant urban center and commercial crossroads located within the San Lorenzo municipality in the Boaco Department. Geographically situated on the plains that lead down toward Lake Nicaragua, it sits directly on the main highway connecting Managua with the central and Caribbean departments (Chontales, RACCS). This strategic position makes Tecolostote a bustling, noisy transit town filled with roadside diners, mechanics, and merchants. The surrounding economy is dominated by expansive cattle ranches and dairy farms, taking advantage of the vast savanna-like pastures of the region. The town is known for its intense heat and cowboy (vaquero) culture. Geography K6 \u2014 transit towns and savanna pastures.",
      "factsAdvanced": [
        "Functions as the primary urban center for the San Lorenzo municipality.",
        "Located directly on the critical highway connecting Managua to El Rama and Chontales.",
        "The local economy revolves heavily around transit commerce, diners, and logistics.",
        "Surrounded by vast, savanna-like plains dedicated to extensive cattle ranching.",
        "The name derives from indigenous Nahuatl origins, translating roughly to 'Place of Owls'.",
        "Features a highly traditional 'vaquero' (cowboy) culture typical of the central region."
      ]
    },
    {
      "id": "san-lorenzo-boaco-cities-v2",
      "descriptionAdvanced": "San Lorenzo is the administrative center of the municipality that bears its name in the Boaco Department, though it is smaller and less commercially active than its neighboring town of Tecolostote. Nestled in the hilly transition zone between the central highlands and the plains of Lake Nicaragua, the town maintains a quiet, highly traditional rural rhythm. The local economy is almost exclusively agrarian, relying heavily on dairy farming, cheese production, and cattle raising. The town's central plaza features a beautiful, historic church dedicated to Saint Lawrence (San Lorenzo), whose patron saint festival is celebrated with traditional equestrian parades and bull-riding. Culture K6 \u2014 rural administrative centers and dairy traditions.",
      "factsAdvanced": [
        "The administrative seat of the municipality, though less populated than Tecolostote.",
        "The local economy is deeply tied to the production of artisan cheese and dairy.",
        "Founded officially as a municipality in the mid-19th century.",
        "The patron saint, Saint Lawrence (San Lorenzo), is celebrated in August.",
        "Located in a hilly transition zone descending toward the plains of Lake Nicaragua.",
        "Traditional bull-riding (barreras) is a major cultural event during local festivals."
      ]
    },
    {
      "id": "santo-tomas-chontales-cities-v2",
      "descriptionAdvanced": "Santo Tomás is a prosperous and rapidly growing city located in the heart of the Chontales Department, situated along the main highway to the Caribbean coast. Often considered the secondary economic capital of Chontales after Juigalpa, Santo Tomás is famously known across Nicaragua for its exceptional dairy products, specifically its high-quality export-grade cheese and quesillo. The city is surrounded by incredibly fertile, green hills utilized exclusively for intensive cattle ranching. It features a bustling commercial center, strong infrastructure, and a deeply entrenched cowboy culture. In recent years, it has seen significant urban development driven by the wealth of the local dairy industry. Economics K7 \u2014 dairy processing and regional wealth.",
      "factsAdvanced": [
        "Famously known nationwide for producing exceptional, high-quality artisanal cheese.",
        "Serves as the secondary economic powerhouse of the Chontales Department.",
        "Located directly on the highway connecting the central region to El Rama.",
        "The surrounding lush, green hills are dedicated almost entirely to cattle ranching.",
        "The patron saint festival honors Saint Thomas Aquinas every December.",
        "The city has experienced significant urban and commercial growth in the 21st century."
      ]
    },
    {
      "id": "villa-sandino-cities-v2",
      "descriptionAdvanced": "Villa Sandino is a historic municipality in the Chontales Department, located along the highway between Santo Tomás and El Rama. Originally known as 'San Francisco del Carnicero', it was renamed in honor of General Augusto C. Sandino after the 1979 revolution. The area is most famous for the spectacular archaeological site of 'Piedras Pintadas', a massive collection of ancient pre-Columbian petroglyphs carved into volcanic rocks by indigenous tribes centuries ago. The local economy, like the rest of Chontales, is based strictly on cattle ranching and dairy. The town maintains a quiet, rural atmosphere despite its location on a major transport corridor. History K7 \u2014 pre-Columbian petroglyphs and renaming of cities.",
      "factsAdvanced": [
        "Originally named 'San Francisco del Carnicero' before being renamed after the 1979 revolution.",
        "Home to 'Piedras Pintadas', one of the largest concentrations of pre-Columbian petroglyphs in Nicaragua.",
        "Located strategically on the highway connecting Chontales to the Caribbean port of El Rama.",
        "The local economy is driven primarily by extensive cattle ranching and milk production.",
        "Elevated to the status of a municipality in the year 1942.",
        "The area features a transitionary climate between the central highlands and the tropical east."
      ]
    }
  ]
}

import os
os.makedirs('/mnt/c/Users/User/plizio_orch/seo_outputs', exist_ok=True)
with open('/mnt/c/Users/User/plizio_orch/seo_outputs/seo_nicaragua_en_batch2.json', 'w', encoding='utf-8') as f:
    json.dump(batch, f, indent=2)
print("Batch 2 saved.")
