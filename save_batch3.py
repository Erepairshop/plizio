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
      "id": "acoyapa-cities-v2",
      "descriptionAdvanced": "Acoyapa, located in the southern part of the Chontales Department, is historically considered one of the oldest colonial settlements in the region. Founded in the 17th century, it served as an important Spanish administrative center before being eclipsed by Juigalpa. Today, Acoyapa is a tranquil, traditional ranching town surrounded by vast plains that slope downward towards the shores of Lake Nicaragua. The local economy is inextricably linked to dairy farming, cattle breeding, and the production of artisan cheese. The town's colonial legacy is still visible in its large, ornate Parish Church of Saint Sebastian, which stands as a centerpiece for the community's deeply rooted religious and cowboy traditions. History K6 \u2014 colonial settlements and ranching cultures.",
      "factsAdvanced": [
        "Founded by Spanish colonizers in the early 17th century.",
        "The Parish Church of San Sebastián is a historic colonial landmark.",
        "Located on the transition plains descending towards Lake Nicaragua.",
        "The name Acoyapa translates from Nahuatl to 'Place from above'.",
        "The local patron saint, Saint Sebastian, is celebrated every January.",
        "The economy is driven almost entirely by extensive cattle ranching and dairy."
      ]
    },
    {
      "id": "san-miguelito-cities-v2",
      "descriptionAdvanced": "San Miguelito is a picturesque, quiet municipality in the Río San Juan Department, stretched along the eastern shores of Lake Nicaragua. For centuries, it functioned as an isolated fishing village and a minor transit point for boats traveling to San Carlos. Today, it remains heavily dependent on artisanal lake fishing, particularly for species like guapote and mojarra, alongside small-scale agriculture. The town has recently seen improvements in infrastructure, connecting it more reliably to the national highway network. Surrounded by vast wetlands and the pristine waters of the lake, San Miguelito offers a tranquil, slow-paced lifestyle deeply connected to the natural rhythms of the massive inland sea. Geography K6 \u2014 lake communities and artisanal fishing.",
      "factsAdvanced": [
        "Located directly on the eastern shoreline of the massive Lake Nicaragua.",
        "Historically functioned as a minor port on the route to the San Juan River.",
        "Artisanal lake fishing for 'guapote' (wolf cichlid) is a primary economic activity.",
        "The town was officially granted municipal status in the year 1870.",
        "The local wetlands are crucial habitats for numerous migratory bird species.",
        "The patron saint festival honoring Saint Michael the Archangel is held in September."
      ]
    },
    {
      "id": "el-castillo-de-la-concepcion-cities-v2",
      "descriptionAdvanced": "El Castillo is a historically vital village situated along the banks of the San Juan River, deep in the dense rainforests of southern Nicaragua. The town is universally famous for the towering Fortress of the Immaculate Conception, built in 1675 by the Spanish to repel relentless pirate attacks navigating upstream from the Caribbean to plunder the wealthy cities of Lake Nicaragua. The fortress famously withstood a siege by Horatio Nelson in 1780. Today, El Castillo is a charming, vehicle-free settlement built entirely on stilts along the riverbank. It serves as a primary hub for eco-tourism, offering direct access to the incredibly biodiverse Indio Maíz Biological Reserve. History K8 \u2014 colonial fortifications and river piracy.",
      "factsAdvanced": [
        "Home to the Fortress of the Immaculate Conception, completed in 1675.",
        "The fortress was constructed specifically to stop British and Dutch pirate raids.",
        "British naval hero Horatio Nelson participated in the siege of the fort in 1780.",
        "The village is entirely pedestrian; there are no cars or paved roads.",
        "Serves as the main access point for the massive Indio Maíz Biological Reserve.",
        "Located at the 'Raudal del Diablo' rapids on the San Juan River."
      ]
    },
    {
      "id": "san-juan-del-norte-greytown-cities-v2",
      "descriptionAdvanced": "San Juan de Nicaragua, historically known as Greytown, is one of the most isolated and geopolitically significant settlements in the country, located exactly where the San Juan River empties into the Caribbean Sea. During the mid-19th century, Greytown was a booming, cosmopolitan transit hub controlled by the British, serving as the eastern terminus for Cornelius Vanderbilt's Accessory Transit Company during the California Gold Rush. Destroyed multiple times by wars, US naval bombardments, and shifting river deltas, the town was rebuilt slightly inland in the 1990s. Today, it is a quiet, highly isolated eco-tourism destination surrounded by untouched rainforests, accessible only by a long river journey or small aircraft. Geography K8 \u2014 historical transit routes and isolated ports.",
      "factsAdvanced": [
        "Historically known as Greytown during the period of British territorial claims.",
        "Served as the crucial eastern port for the transit route during the 1849 Gold Rush.",
        "The town was notoriously bombarded and destroyed by the US Navy in 1854.",
        "Located at the extreme southeastern tip of Nicaragua on the Caribbean Sea.",
        "The modern settlement was relocated and rebuilt due to shifting river mouths.",
        "Accessible almost exclusively via boats navigating down the San Juan River."
      ]
    },
    {
      "id": "pueblo-nuevo-esteli-cities-v2",
      "descriptionAdvanced": "Pueblo Nuevo is a predominantly agricultural municipality located in the mountainous northern region of the Estelí Department. Situated in a rugged valley, the town is deeply rooted in subsistence farming and the cultivation of drought-resistant crops like sorghum and beans, as it lies on the edge of the Central American Dry Corridor. The area is notable for its numerous paleontological and archaeological discoveries; significant fossils of prehistoric megafauna, including mastodons, have been unearthed in the surrounding hills, making it a point of interest for national geologists. The town maintains a quiet, rural lifestyle, characterized by traditional adobe houses and a cool mountain climate. History K7 \u2014 paleontology and mountain agriculture.",
      "factsAdvanced": [
        "Located in a mountainous valley roughly 60 kilometers north of Estelí.",
        "The area is famous for the discovery of significant prehistoric megafauna fossils.",
        "The local economy relies heavily on traditional agriculture, specifically beans and corn.",
        "The town features a significantly cooler climate due to its high elevation.",
        "Officially elevated to the status of a municipality in the mid-19th century.",
        "The nearby hills contain numerous unexplored pre-Columbian archaeological sites."
      ]
    },
    {
      "id": "la-trinidad-esteli-cities-v2",
      "descriptionAdvanced": "La Trinidad is a bustling, industrious town in the Estelí Department, strategically located along the Pan-American Highway. The town is known across the northern highlands as a center for commerce, artisan baking, and small-scale manufacturing. It is particularly famous for its traditional bakeries producing 'rosquillas' and sweet breads, which are sold to travelers along the highway. Geographically, La Trinidad sits in a steep valley surrounded by dramatic, rocky hills, creating a distinctive landscape. The town also holds historical significance as the site of intense battles during the 1979 Sandinista revolution, serving as a key defensive point blocking access to the city of Estelí from the south. Geography K6 \u2014 highway commerce and valley settlements.",
      "factsAdvanced": [
        "Located strategically along the Pan-American Highway in a steep valley.",
        "Nationally recognized for its numerous artisanal bakeries and sweet bread production.",
        "The town was officially granted municipal status in the year 1967.",
        "Site of significant military combat during the final offensive of the 1979 revolution.",
        "The local climate is relatively dry, surrounded by rocky, deforested hills.",
        "The patron saint, La Virgen de la Candelaria, is celebrated in early February."
      ]
    },
    {
      "id": "ciudad-dario-cities-v2",
      "descriptionAdvanced": "Ciudad Darío is an internationally celebrated municipality in the Matagalpa Department, honored as the birthplace of Félix Rubén García Sarmiento, universally known as Rubén Darío. He is considered the undisputed 'Father of Modernism' in Spanish-language literature. The modest adobe house where the poet was born in 1867 is now a meticulously preserved national museum, drawing literary scholars and tourists alike. Originally named 'Metapa', the town was renamed in his honor in 1920. Beyond its profound literary heritage, Ciudad Darío is a major agricultural and commercial center situated on the fertile plains near the Grande de Matagalpa River, producing significant amounts of rice and beans. Culture K8 \u2014 literary heritage and national identity.",
      "factsAdvanced": [
        "Birthplace of Rubén Darío, the greatest poet in Nicaraguan history, born in 1867.",
        "The town was originally named 'Metapa' before being renamed in 1920.",
        "The childhood home of the poet is preserved as a prominent National Museum.",
        "Located on the Pan-American Highway, facilitating significant regional commerce.",
        "The surrounding fertile plains are heavily utilized for rice and bean cultivation.",
        "The annual 'Jornada Dariana' festival celebrates the poet's legacy every January."
      ]
    },
    {
      "id": "esquipulas-matagalpa-cities-v2",
      "descriptionAdvanced": "Esquipulas is a vibrant agricultural town in the Matagalpa Department, renowned primarily as one of Nicaragua's most important religious pilgrimage destinations. The town is deeply devoted to the 'Black Christ of Esquipulas' (El Cristo Negro), a venerated dark-wood statue housed in the local parish. Every January, thousands of pilgrims from across the country travel here to pay homage, creating a massive influx of cultural and economic activity. Geographically, Esquipulas is situated in a highly fertile, mountainous transition zone, supporting a diverse agricultural economy based on coffee cultivation in the higher elevations and extensive cattle ranching in the lower valleys. Culture K7 \u2014 religious pilgrimages and transition agriculture.",
      "factsAdvanced": [
        "Home to the highly venerated statue of the Black Christ (El Cristo Negro).",
        "Hosts one of the largest religious pilgrimages in the country every January.",
        "Located in a mountainous transition zone in the southern Matagalpa Department.",
        "The local economy is a mix of high-altitude coffee farming and valley cattle ranching.",
        "The town was officially elevated to municipal status in the year 1944.",
        "The name 'Esquipulas' has indigenous origins, shared with the famous site in Guatemala."
      ]
    },
    {
      "id": "san-dionisio-matagalpa-cities-v2",
      "descriptionAdvanced": "San Dionisio is a small, traditional municipality nestled deep within the rugged mountains of the Matagalpa Department. Characterized by its steep, uneven topography and cool climate, the town is relatively isolated from the main national highways, preserving a quiet, deeply rural lifestyle. The local economy is dominated by small-scale, shade-grown coffee farming, which provides the primary source of income for most families. The region was heavily impacted by the armed conflicts of the 1980s but has since recovered, focusing on improving local agricultural techniques and infrastructure. The town center features colorful houses and a simple, historic church dedicated to Saint Denis. Geography K6 \u2014 mountain isolation and coffee economies.",
      "factsAdvanced": [
        "Located in a remote, steep mountainous region of the Matagalpa Department.",
        "The local economy relies almost entirely on the cultivation of shade-grown coffee.",
        "The town was officially established as a municipality in the year 1879.",
        "The patron saint festival honors Saint Denis (San Dionisio) every October.",
        "The area was significantly affected by the Contra War during the 1980s.",
        "Features a notably cool and misty climate due to its high elevation."
      ]
    },
    {
      "id": "la-dalia-matagalpa-cities-v2",
      "descriptionAdvanced": "La Dalia (officially part of El Tuma - La Dalia) is a bustling, rapidly growing agricultural hub located in the eastern mountains of the Matagalpa Department. Situated on the main highway leading towards the Caribbean coast, La Dalia serves as the commercial epicenter for the surrounding vast coffee plantations and cattle ranches. The town was largely established in the mid-20th century to support the booming coffee industry, acting as a collection and processing point for the harvest before it is transported to Matagalpa. It features a lively, frontier-town atmosphere, characterized by constant truck traffic, busy markets, and a diverse population of agricultural workers and merchants. Geography K7 \u2014 agricultural logistics and coffee processing.",
      "factsAdvanced": [
        "Serves as the primary urban center for the expansive El Tuma - La Dalia municipality.",
        "Located on the strategic highway connecting Matagalpa to the Caribbean regions.",
        "The local economy is heavily centered around large-scale coffee processing.",
        "The town features a bustling, commercial atmosphere driven by agricultural logistics.",
        "Officially recognized as a municipality relatively recently, in 1989.",
        "The surrounding mountains feature dense, humid cloud forests."
      ]
    },
    {
      "id": "rancho-grande-matagalpa-cities-v2",
      "descriptionAdvanced": "Rancho Grande is a deeply rural, frontier municipality located in the far eastern reaches of the Matagalpa Department, bordering the dense jungles of the Bosawás Biosphere Reserve. Originally established as a remote outpost for cattle ranchers, the town has grown as the agricultural frontier has pushed steadily eastward into the tropical broadleaf forests. Today, the economy is a mix of extensive cattle ranching, basic grain cultivation, and increasingly, high-altitude coffee farming. Rancho Grande gained national attention in recent years due to significant local opposition against proposed open-pit gold mining projects, with residents organizing massive protests to protect their local watersheds and agricultural lands. Economics K8 \u2014 environmental activism and agricultural frontiers.",
      "factsAdvanced": [
        "Located on the extreme eastern edge of the Matagalpa Department near Bosawás.",
        "The town was officially granted municipal status in the year 1989.",
        "The local economy is dominated by cattle ranching and newly established coffee farms.",
        "Gained national fame for successful grassroots protests against open-pit gold mining.",
        "The area is characterized by high rainfall and dense, tropical vegetation.",
        "Serves as a transition point between the central highlands and the Caribbean lowlands."
      ]
    },
    {
      "id": "el-tuma-la-dalia-cities-v2",
      "descriptionAdvanced": "El Tuma - La Dalia is a vast, dual-centered municipality in the Matagalpa Department, renowned as one of the most productive coffee-growing regions in Nicaragua. The municipality covers a massive area of steep, mist-covered mountains and deep river valleys, with the Tuma River serving as a vital water source for the local agriculture. While La Dalia acts as the commercial hub, the entire region is dotted with massive 'haciendas' (estates) that employ thousands of seasonal workers during the coffee harvest (la cosecha) from October to February. Besides coffee, the area is increasingly focusing on eco-tourism, leveraging its spectacular waterfalls and primary cloud forests. Geography K7 \u2014 plantation economies and seasonal labor.",
      "factsAdvanced": [
        "One of the largest and most productive coffee-growing municipalities in Nicaragua.",
        "The Tuma River is a major geographical feature providing essential water resources.",
        "The local economy relies heavily on the seasonal labor force during the coffee harvest.",
        "The municipality was officially created in 1989 by combining multiple rural sectors.",
        "Contains massive, historic coffee estates known as 'haciendas'.",
        "The region features significant potential for eco-tourism due to pristine cloud forests."
      ]
    },
    {
      "id": "matiguas-matagalpa-cities-v2",
      "descriptionAdvanced": "Matiguás is a highly dynamic, prosperous agricultural city located in the eastern Matagalpa Department, serving as a critical bridge between the mountainous coffee regions and the sprawling cattle plains of the Caribbean coast. The city has experienced explosive economic growth driven almost entirely by the dairy industry; it is home to several large-scale milk processing plants and cheese factories that export products internationally. The landscape around Matiguás is a patchwork of green pastures and rolling hills, characterized by intensive livestock farming. The town itself features a bustling, commercial atmosphere, reflecting the wealth generated by the surrounding ranches and the constant movement of cattle trucks. Economics K8 \u2014 dairy processing and regional economic growth.",
      "factsAdvanced": [
        "Nationally recognized as a powerhouse for dairy processing and artisan cheese export.",
        "Located in a transition zone between the central mountains and the eastern plains.",
        "The town was officially granted municipal status in the year 1920.",
        "Home to several large-scale industrial milk collection and processing facilities.",
        "The name 'Matiguás' derives from indigenous languages meaning 'River of Rats'.",
        "The patron saint festival honoring Saint Joseph is celebrated every March."
      ]
    },
    {
      "id": "muy-muy-matagalpa-cities-v2",
      "descriptionAdvanced": "Muy Muy is a historic and deeply traditional municipality in the Matagalpa Department, known for its strong equestrian culture and expansive cattle ranches. Situated in a broad, fertile valley, the town has long been a center for livestock breeding and dairy production. Its unique name, derived from the Nahuatl language, is believed to mean 'Place of Many Waters' due to the numerous small rivers and streams that cross the valley. Muy Muy maintains a quiet, colonial-style charm, with a beautiful central plaza and a highly anticipated patron saint festival featuring traditional bull-riding (barreras) and elaborate horse parades (hípicas) that draw ranchers from across the region. Culture K6 \u2014 equestrian traditions and valley ranching.",
      "factsAdvanced": [
        "The name 'Muy Muy' likely derives from Nahuatl, meaning 'Place of Many Waters'.",
        "The local economy is heavily dependent on traditional cattle ranching and dairy.",
        "The town was officially established as a municipality in the mid-19th century.",
        "Famous for its elaborate equestrian parades (hípicas) during local festivals.",
        "The patron saint, San Benito de Palermo, is celebrated with immense fervor in April.",
        "Located in a broad, highly fertile valley surrounded by rolling green hills."
      ]
    },
    {
      "id": "san-ramon-matagalpa-cities-v2",
      "descriptionAdvanced": "San Ramón is a picturesque, historic municipality located just a few kilometers east of the city of Matagalpa. Nestled deeply within lush, mist-covered mountains, San Ramón is widely celebrated as the cradle of Nicaraguan coffee; it was here in the late 19th century that German and British immigrants established some of the country's first commercial coffee plantations. Today, the town is a premier destination for rural and eco-tourism, offering visitors the chance to tour historic coffee estates, hike through dense cloud forests, and explore the indigenous community of El Chile, known for its traditional backstrap loom weaving. Geography K7 \u2014 historical plantations and rural tourism.",
      "factsAdvanced": [
        "Recognized as one of the earliest centers for commercial coffee farming in Nicaragua.",
        "Located just 12 kilometers from the departmental capital of Matagalpa.",
        "The nearby indigenous community of El Chile is famous for traditional textile weaving.",
        "The town was officially elevated to municipal status in the year 1904.",
        "Features numerous historic coffee estates originally founded by European immigrants.",
        "The patron saint festival honors Saint Raymond Nonnatus every August."
      ]
    },
    {
      "id": "terrabona-matagalpa-cities-v2",
      "descriptionAdvanced": "Terrabona is a small, relatively isolated agricultural town situated in the dry, rocky valleys of the southern Matagalpa Department. Unlike the lush coffee-growing regions to the north, Terrabona lies in a transitional dry zone, making its landscape more arid and challenging for farming. The local economy relies heavily on the cultivation of basic grains (corn and beans) and small-scale livestock farming. In recent years, the area has gained attention due to exploratory mining projects, as the rocky, volcanic terrain holds significant mineral potential. The town maintains a very quiet, deeply rural atmosphere, centered around its simple, traditional parish church. Geography K6 \u2014 dry transition zones and subsistence agriculture.",
      "factsAdvanced": [
        "Located in a dry, rocky valley in the southern sector of the Matagalpa Department.",
        "The local economy is primarily based on subsistence farming of corn and beans.",
        "The town was officially declared a municipality in the year 1830.",
        "Features a notably drier and hotter climate compared to the rest of Matagalpa.",
        "Recent geological explorations have indicated significant local mineral potential.",
        "The patron saint, Saint Joseph, is celebrated by the community every March."
      ]
    },
    {
      "id": "quilali-nueva-segovia-cities-v2",
      "descriptionAdvanced": "Quilalí is a remote, fiercely independent town nestled in the rugged mountains of the Nueva Segovia Department, deeply entrenched in the history of Nicaraguan conflict. During the late 1920s, it served as a major stronghold for General Sandino and was the site of intense battles against US Marines. Later, in the 1980s, it was heavily contested territory during the Contra War due to its strategic location near the Honduran border. Today, Quilalí is a peaceful but isolated agricultural center, relying entirely on the cultivation of high-altitude coffee and basic grains. The surrounding landscape is characterized by steep, pine-covered ridges and deep, winding river valleys. History K8 \u2014 guerrilla warfare and remote strongholds.",
      "factsAdvanced": [
        "Historically served as a major mountain stronghold for General Augusto C. Sandino.",
        "Site of intense military combat and sieges during both the 1920s and 1980s.",
        "Located in a highly rugged, isolated mountainous region near the Honduran border.",
        "The local economy is heavily dependent on the cultivation of shade-grown coffee.",
        "The town was officially granted municipal status in the year 1891.",
        "The patron saint festival honors Saint Joseph (San José) every March."
      ]
    },
    {
      "id": "san-fernando-nueva-segovia-cities-v2",
      "descriptionAdvanced": "San Fernando is a quiet, picturesque municipality in the Nueva Segovia Department, located along the scenic highway that leads to the Jalapa valley. The town is surrounded by expansive, fragrant pine forests (pinares), which define both its cool, refreshing climate and its primary economic activity: timber extraction and processing. Alongside forestry, the local population engages in high-altitude coffee farming and cattle ranching. San Fernando has a tranquil, rural atmosphere, with a small central plaza and a deeply traditional community. The region's dense pine forests make it a visually distinct area compared to the broadleaf jungles found elsewhere in Nicaragua. Geography K7 \u2014 pine forest ecosystems and timber economies.",
      "factsAdvanced": [
        "Located along the main highway connecting Ocotal to the fertile Jalapa valley.",
        "The municipality is famous for its dense, expansive forests of native pine trees.",
        "Timber extraction and resin collection are significant local economic activities.",
        "The town was officially established as a municipality in the year 1897.",
        "Features a notably cool, crisp mountain climate due to its elevation.",
        "The patron saint festival honoring Saint Fernando is celebrated late May."
      ]
    },
    {
      "id": "el-jicaro-nueva-segovia-cities-v2",
      "descriptionAdvanced": "El Jícaro is a historic, industrious town in the Nueva Segovia Department, situated in a valley surrounded by imposing, pine-covered mountains. The town is most famous historically as the place where General Augusto C. Sandino issued his first political manifesto in 1927, launching his rebellion. Economically, El Jícaro is a bustling center for artisanal gold mining, with numerous small-scale miners panning and extracting gold from the surrounding rivers and hills, a tradition that dates back to Spanish colonial times. Alongside mining, the town thrives on the cultivation of premium coffee and basic grains. The urban center is vibrant, driven by the wealth generated from the local gold trade. Economics K7 \u2014 artisanal mining and historical manifestos.",
      "factsAdvanced": [
        "The site where General Augusto C. Sandino issued his first revolutionary manifesto in 1927.",
        "A major national center for artisanal gold mining (güirisería) since colonial times.",
        "Located in a deep valley surrounded by the towering mountains of Nueva Segovia.",
        "The town was officially granted municipal status in the year 1874.",
        "The local economy relies on a mix of gold extraction, coffee, and grain farming.",
        "The patron saint, La Virgen de Candelaria, is celebrated every February."
      ]
    },
    {
      "id": "almicamba-cities-v2",
      "descriptionAdvanced": "Almicamba is a highly isolated, remote indigenous settlement located deep within the North Caribbean Coast Autonomous Region (RACCN), situated on the banks of the Prinzapolka River. Far removed from any paved roads or modern infrastructure, the community relies almost entirely on the river for transportation, communication, and sustenance. The population is predominantly composed of the indigenous Miskito people, who maintain a traditional lifestyle based on subsistence agriculture, hunting, and fishing. Almicamba occasionally serves as a minor logistical transit point for goods moving upriver towards the mining areas, but it remains one of the least developed and most culturally preserved areas in the country. Culture K8 \u2014 remote river settlements and indigenous preservation.",
      "factsAdvanced": [
        "An isolated indigenous settlement located on the banks of the Prinzapolka River.",
        "The population is predominantly composed of the indigenous Miskito people.",
        "Accessible almost exclusively by riverboats (pangas) navigating the dense jungle.",
        "The local economy is based strictly on subsistence farming, hunting, and fishing.",
        "Lacks significant modern infrastructure, maintaining a highly traditional lifestyle.",
        "Historically served as a minor transit point for the extraction of mahogany timber."
      ]
    },
    {
      "id": "desembocadura-de-rio-grande-cities-v2",
      "descriptionAdvanced": "Desembocadura de Río Grande is a remote, sprawling coastal municipality located exactly where the massive Río Grande de Matagalpa empties into the Caribbean Sea in the RACCS. The administrative center is the town of Karawala. This vast, roadless region is inhabited primarily by indigenous Miskito and Ulwa communities, alongside Afro-descendant populations. The entire area is defined by its complex network of estuaries, mangroves, and river deltas. The economy is inextricably tied to the water, relying completely on artisanal coastal fishing, specifically for lobster and scale fish, which are sold to passing collection ships. The region is highly vulnerable to Caribbean hurricanes and coastal erosion. Geography K8 \u2014 river deltas and coastal vulnerability.",
      "factsAdvanced": [
        "Located at the exact mouth of the massive Río Grande de Matagalpa on the Caribbean Sea.",
        "The administrative center of the municipality is the coastal settlement of Karawala.",
        "Inhabited predominantly by indigenous Miskito and Ulwa communities.",
        "There are no roads; all transportation is conducted via boats through the estuaries.",
        "The local economy is entirely dependent on artisanal fishing and lobster trapping.",
        "The municipality was officially created relatively recently, in the year 1996."
      ]
    },
    {
      "id": "corn-island-cities-v2",
      "descriptionAdvanced": "Corn Island (comprising Great Corn Island and Little Corn Island) is a spectacular, culturally distinct archipelago located roughly 70 kilometers off the Caribbean coast of Nicaragua. English and Creole English are widely spoken by the predominantly Afro-descendant population, reflecting the islands' history as a British protectorate and a haven for pirates in the 17th century. Today, the islands are Nicaragua's premier Caribbean tourism destination, famous for their pristine white-sand beaches, crystal-clear turquoise waters, and vibrant coral reefs. Beyond tourism, the local economy relies heavily on industrial and artisanal lobster fishing, which serves as the primary export and source of income for the islanders. Economics K7 \u2014 island tourism and lobster fisheries.",
      "factsAdvanced": [
        "An archipelago consisting of two main islands: Great Corn Island and Little Corn Island.",
        "Located approximately 70 kilometers off the Caribbean coast in the open sea.",
        "The local population predominantly speaks Caribbean Creole English.",
        "Industrial and artisanal lobster fishing is the economic backbone of the islands.",
        "Historically served as a haven for British, Dutch, and French pirates in the 17th century.",
        "The islands celebrate the emancipation of slaves annually with the 'Crab Soup' festival."
      ]
    },
    {
      "id": "la-cruz-de-rio-grande-cities-v2",
      "descriptionAdvanced": "La Cruz de Río Grande is an expansive, deeply isolated municipality located along the mid-section of the Río Grande de Matagalpa in the South Caribbean Coast Autonomous Region (RACCS). Far entirely from the national road network, the river acts as the sole highway for the mestizo and indigenous communities scattered throughout the dense tropical rainforest. The town itself serves as a crucial trading post where farmers and indigenous groups arrive by canoe to trade agricultural goods, timber, and cacao for basic manufactured supplies. The region has experienced significant tension due to the aggressive advancement of the agricultural frontier and illegal logging threatening indigenous lands. Geography K8 \u2014 river trading posts and forest conservation.",
      "factsAdvanced": [
        "Located deep in the rainforest along the mid-course of the Río Grande de Matagalpa.",
        "The river serves as the absolute only method of transportation and logistics.",
        "The town functions as a vital trading post for remote indigenous and mestizo communities.",
        "The local economy is based on basic agriculture, cacao farming, and timber.",
        "The municipality was officially established by the national government in 1982.",
        "The area faces severe ecological pressure from illegal logging and cattle ranching."
      ]
    },
    {
      "id": "el-tortuguero-cities-v2",
      "descriptionAdvanced": "El Tortuguero is a rapidly growing, remote municipality situated deep within the inland swamps and jungles of the South Caribbean Coast Autonomous Region (RACCS). Originally a small indigenous settlement on the Kurinwás River, it has transformed into a bustling, chaotic frontier town due to a massive influx of mestizo farmers migrating from the Pacific side in search of cheap land. This migration has fueled an explosive expansion of cattle ranching, making El Tortuguero a major, albeit highly informal, center for the regional beef trade. The town remains unconnected by paved roads, relying on grueling, muddy trails and riverboats for access, giving it a raw, pioneer atmosphere. Geography K8 \u2014 frontier migration and rapid deforestation.",
      "factsAdvanced": [
        "Located deep in the inland jungle along the banks of the Kurinwás River.",
        "Has experienced massive population growth due to mestizo migration from the west.",
        "The local economy is driven by the rapid, unregulated expansion of cattle ranching.",
        "The municipality was officially created by the national government in 1996.",
        "Lacks paved roads, relying on challenging river transport and muddy trails.",
        "The explosive agricultural growth has led to severe deforestation in the region."
      ]
    },
    {
      "id": "paiwas-cities-v2",
      "descriptionAdvanced": "Paiwas (officially Bocana de Paiwas) is a highly remote and rugged municipality located at the confluence of the Paiwas and Río Grande de Matagalpa rivers in the RACCS. Acting as a severe transition zone between the mountainous central highlands and the Caribbean lowlands, the town is a tough, frontier settlement dominated by cattle ranchers and subsistence farmers. The area is highly isolated, with extremely poor infrastructure, making the river the most reliable form of transport. Historically, it was a deeply conflicted and violent zone during the 1980s civil war. Today, it remains one of the least developed municipalities in Nicaragua, characterized by vast, recently cleared pastures. History K7 \u2014 post-conflict frontiers and river confluences.",
      "factsAdvanced": [
        "Located at the remote confluence of the Paiwas and Río Grande de Matagalpa rivers.",
        "The municipality was officially established in 1974.",
        "The local economy is completely dominated by extensive cattle ranching.",
        "Characterized by a highly rugged, frontier atmosphere with minimal infrastructure.",
        "The area suffered from extreme isolation and violence during the 1980s civil war.",
        "Serves as a transition zone between the central mountains and the eastern jungles."
      ]
    }
  ]
}

import os
os.makedirs('/mnt/c/Users/User/plizio_orch/seo_outputs', exist_ok=True)
with open('/mnt/c/Users/User/plizio_orch/seo_outputs/seo_nicaragua_en_batch3.json', 'w', encoding='utf-8') as f:
    json.dump(batch, f, indent=2)
print("Batch 3 saved.")
