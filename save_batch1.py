import json

batch1 = {
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
      "id": "jinotega-cities-v2",
      "descriptionAdvanced": "Jinotega is the 'City of Mists' (Ciudad de las Brumas) nestled in a high mountain valley in northern Nicaragua, surrounded by dense cloud forests and some of the country's most productive coffee plantations. Due to its elevation of over 1,000 meters, it enjoys a cool, misty climate that provides optimal conditions for cultivating premium Arabica coffee, which accounts for a vast portion of the nation's total output. Beyond agriculture, Jinotega played a significant strategic role during the conflicts of the 20th century and has a history deeply intertwined with indigenous communities. Today, it serves as a central hub for eco-tourism, drawing visitors to the nearby Reserva Natural Datanlí-El Diablo and Lake Apanás. Geography K7 \u2014 mountain climates and agricultural economies.",
      "factsAdvanced": [
        "Located at an elevation of approximately 1,004 meters above sea level.",
        "Produces over 60% of Nicaragua's national coffee export.",
        "Founded formally as a city in the year 1891.",
        "Lake Apanás, an artificial reservoir nearby, was created in 1964.",
        "Known nationally as the 'Ciudad de las Brumas' or City of Mists.",
        "Home to the Peña de la Cruz, an 800-meter high viewpoint."
      ]
    },
    {
      "id": "rivas-cities-v2",
      "descriptionAdvanced": "Rivas is a historic departmental capital in southwestern Nicaragua, strategically positioned on the narrow isthmus between Lake Nicaragua and the Pacific Ocean. This unique geographical location has made it a crucial transit corridor since pre-Columbian times when it was inhabited by the Nicarao people. During the 19th century, it was the site of the critical Battle of Rivas in 1856, where Nicaraguan forces repelled the filibuster William Walker. Today, Rivas is a vital agricultural center, famous for its sprawling sugarcane plantations and vast plantain fields. It also acts as the primary gateway for international tourists heading to the dual-volcano island of Ometepe or the surfing beaches of San Juan del Sur. History K8 \u2014 national sovereignty and transit corridors.",
      "factsAdvanced": [
        "Site of the famous Battle of Rivas fought on April 11, 1856.",
        "The city was originally founded in the 18th century as the Villa de la Purísima Concepción de Rivas.",
        "Located just 3 kilometers from the shores of Lake Nicaragua.",
        "The region is one of the largest producers of plantains in the country.",
        "Emmanuel Mongalo y Rubio famously burned Walker's headquarters here during the 1855 battle.",
        "The local San Pedro Parish church dates back to the early 19th century."
      ]
    },
    {
      "id": "juigalpa-cities-v2",
      "descriptionAdvanced": "Juigalpa serves as the commercial and cultural capital of the Chontales Department in the heart of Nicaragua. Situated in a broad valley surrounded by the rugged Amerrique Mountains, the city is the undisputed epicenter of the country's massive cattle ranching and dairy industry. Its economy revolves almost entirely around livestock, a fact celebrated annually during its famous patron saint festivals in August, featuring traditional bull-riding (barreras). The city is also a gateway to discovering the enigmatic pre-Columbian history of central Nicaragua, housing the Gregorio Aguilar Barea Archaeological Museum, which displays mysterious basalt statues carved by indigenous tribes centuries before Spanish contact. Geography K6 \u2014 livestock economies and savanna landscapes.",
      "factsAdvanced": [
        "Juigalpa was officially elevated to the status of a city in 1879.",
        "The local economy is driven by the production of cheese, milk, and beef.",
        "The Amerrique Mountains surrounding the city reach elevations of up to 1,000 meters.",
        "The Gregorio Aguilar Barea Museum houses over 130 pre-Columbian indigenous statues.",
        "Patron saint festivities dedicated to the Assumption of Mary occur every August.",
        "The city lies approximately 140 kilometers east of the capital, Managua."
      ]
    },
    {
      "id": "boaco-cities-v2",
      "descriptionAdvanced": "Boaco, known affectionately as the 'Ciudad de Dos Pisos' (City of Two Floors), is built on a steep, uneven terrain that divides the town into a distinct upper and lower section connected by winding staircases. Located in the central mountainous region of Nicaragua, it functions as the capital of the Boaco Department. Like its neighbor Chontales, Boaco's economy is heavily anchored in cattle ranching and dairy production, contributing significantly to the national milk supply. The city boasts a rich blend of colonial architecture and indigenous roots, with its name deriving from the Nahuatl words meaning 'Place of the Enchanters'. Its surrounding landscape is characterized by rugged hills, natural springs, and extensive pastures. Geography K7 \u2014 topographic adaptations and dairy farming.",
      "factsAdvanced": [
        "Elevated to city status by the national government in 1895.",
        "The name 'Boaco' comes from Nahuatl, translating to 'Place of the Enchanters'.",
        "Often referred to as the 'City of Two Floors' due to its steep topography.",
        "The local dairy industry is a major supplier of milk to Managua.",
        "The historic Parish Church of Santiago was constructed in the mid-19th century.",
        "Located roughly 88 kilometers northeast of the national capital."
      ]
    },
    {
      "id": "somoto-cities-v2",
      "descriptionAdvanced": "Somoto is a quiet, picturesque city located in the northern highlands of Nicaragua near the Honduran border, serving as the capital of the Madriz Department. It is widely recognized across the nation as the 'Capital of the Rosquilla', a traditional crispy corn and cheese biscuit that is a staple of Nicaraguan cuisine. However, its greatest fame stems from the spectacular Somoto Canyon, a dramatic geological formation carved over millions of years by the Coco River, discovered relatively recently in 2004. The city features a cool, dry climate and has a tranquil atmosphere, with adobe houses and a beautiful colonial church dating back to the 17th century. Geography K8 \u2014 canyon formations and border economies.",
      "factsAdvanced": [
        "Located just 20 kilometers from the El Espino border crossing with Honduras.",
        "Home to the Somoto Canyon, which features rock walls over 100 meters high.",
        "The local Parroquia Santiago Apóstol was built in the year 1661.",
        "The city is famous nationwide for the production of traditional 'rosquillas'.",
        "Somoto was founded in 1538, making it one of the older settlements in the north.",
        "The Coco River, the longest river in Central America, begins near the city."
      ]
    },
    {
      "id": "ocotal-cities-v2",
      "descriptionAdvanced": "Ocotal is the northernmost departmental capital of Nicaragua, serving the Nueva Segovia Department near the border with Honduras. Surrounded by pine-covered mountains and steep ridges, the city has a rich and turbulent history, having been a stronghold for General Augusto C. Sandino during his rebellion against US Marine occupation in the late 1920s. In 1927, Ocotal was the site of one of the first recorded dive-bombing attacks in aviation history, carried out by American forces. Today, it is a bustling center for the timber industry and the cultivation of high-altitude, premium shade-grown coffee. The city's main square, Parque Central, is considered one of the most beautiful and well-maintained in the country. History K8 \u2014 anti-imperialist resistance and mountain cities.",
      "factsAdvanced": [
        "Founded by Spanish colonialists in the year 1543.",
        "Site of the Battle of Ocotal on July 16, 1927, during the Sandino rebellion.",
        "The city is located at an altitude of 606 meters above sea level.",
        "Surrounded by vast pine forests, driving the local timber industry.",
        "The nearby mountains produce some of the highest-rated coffee beans in Nicaragua.",
        "The San de la Asunción Parish church is a central architectural landmark."
      ]
    },
    {
      "id": "san-carlos-cities-v2",
      "descriptionAdvanced": "San Carlos is a strategic port city and the capital of the Río San Juan Department, situated precisely where Lake Nicaragua empties into the San Juan River. Founded in the 16th century, it was heavily fortified by the Spanish to protect the wealthy colonial cities around the lake from British and Dutch pirates navigating up the river from the Caribbean. The remains of the historic Fortress of San Carlos still overlook the waters today. Currently, the city serves as the primary transportation and commercial hub for the remote southern region, offering access to the Solentiname Islands, the Indio Maíz Biological Reserve, and the Los Guatuzos Wildlife Refuge. Geography K7 \u2014 river mouths and historical fortresses.",
      "factsAdvanced": [
        "Founded in 1526 as a strategic outpost along the trans-isthmian trade route.",
        "The Fortress of San Carlos was constructed in 1666 to repel pirate attacks.",
        "Located at the exact point where Lake Nicaragua flows into the San Juan River.",
        "Serves as the primary transport hub for the remote Solentiname archipelago.",
        "The city's waterfront 'malecón' was completely renovated in the 2010s.",
        "During the 1849 California Gold Rush, it was a transit point for Vanderbilt's steamboats."
      ]
    },
    {
      "id": "tipitapa-cities-v2",
      "descriptionAdvanced": "Tipitapa is an industrial and commercial city located on the strategic corridor connecting Managua with the central and northern departments. Geographically, it sits on the shores of Lake Managua and is traversed by the Tipitapa River, the only waterway connecting Lake Managua to Lake Nicaragua. Historically, it is renowned as the site where the 1927 Espino Negro Pact was signed, a treaty that ended the Constitutionalist War but triggered Sandino's guerrilla campaign. Today, Tipitapa is a rapidly growing urban center characterized by its numerous free-trade zones (maquilas), hot springs (aguas termales), and extensive rice plantations along the lake's plains. Geography K8 \u2014 industrial zones and lake connections.",
      "factsAdvanced": [
        "The Tipitapa River is the only natural channel linking Lake Managua to Lake Nicaragua.",
        "The historic Espino Negro Pact was signed here on May 4, 1927.",
        "Home to several large free-trade zones (zonas francas) employing thousands.",
        "The local hot springs are famous nationwide for their therapeutic properties.",
        "The Battle of San Jacinto (1856) took place just north of the city limits.",
        "The region around Tipitapa is one of the largest rice-producing areas in the country."
      ]
    },
    {
      "id": "el-viejo-cities-v2",
      "descriptionAdvanced": "El Viejo, located just north of Chinandega, is one of the oldest cities in Nicaragua and a profound center of Catholic devotion. It is most famous as the home of the Basilica of the Immaculate Conception, which houses the venerated silver statue of the Virgin Mary, supposedly brought by Pedro de Ahumada in 1562. This makes El Viejo the spiritual epicenter of the 'La Gritería' festival celebrated nationwide every December. Geographically, the city sits on a fertile volcanic plain near the Cosigüina volcano, driving a robust agricultural economy based on sugarcane, peanuts, and shrimp farming along the nearby coastal estuaries of Padre Ramos. Geography K7 \u2014 religious centers and volcanic plains.",
      "factsAdvanced": [
        "One of the oldest cities in Nicaragua, established before 1539.",
        "The Basilica of the Immaculate Conception was elevated to its status in 1995.",
        "The patron saint statue of the Virgin Mary arrived in the city in 1562.",
        "The nearby Cosigüina volcano famously erupted with immense force in 1835.",
        "A major national center for peanut farming and sugarcane processing.",
        "The Estero Real Nature Reserve, vital for shrimp farming, is located in this municipality."
      ]
    },
    {
      "id": "chichigalpa-cities-v2",
      "descriptionAdvanced": "Chichigalpa is known throughout Nicaragua as the undeniable capital of rum and sugar. Located in the fertile plains of the Chinandega Department, the city's identity and economy are almost entirely defined by the massive Ingenio San Antonio, the largest sugar mill in the country, and the Flor de Caña rum distillery. Founded in the late 19th century, this agro-industrial complex processes millions of tons of sugarcane annually. The landscape is dominated by endless green seas of cane fields, with the imposing San Cristóbal volcano looming in the background. While the industry provides significant wealth, the city has also been a focal point for studying occupational health challenges among cane cutters. Economics K8 \u2014 agro-industry and monoculture economies.",
      "factsAdvanced": [
        "Home to the Flor de Caña distillery, which produces internationally awarded rum.",
        "The San Antonio sugar mill was established in 1890 by the Pellas family.",
        "Chichigalpa was officially declared a city in the year 1894.",
        "Surrounded by thousands of hectares of monoculture sugarcane fields.",
        "The San Cristóbal volcano, Nicaragua's tallest, is visible just to the north.",
        "The local economy relies on the sugar harvest, locally known as the 'zafra'."
      ]
    },
    {
      "id": "diriamba-cities-v2",
      "descriptionAdvanced": "Diriamba, situated in the cool, elevated Carazo plateau, is celebrated as the cradle of Nicaraguan folklore and comedy. It is the birthplace of the 'El Güegüense', a satirical street drama combining indigenous and Spanish elements that UNESCO recognized as a Masterpiece of the Oral and Intangible Heritage of Humanity. The city's cool climate made it a historic center for coffee cultivation during the late 19th and early 20th centuries, reflected in its elegant, European-influenced colonial and neoclassical architecture, notably the stunning Basilica of San Sebastián. Diriamba also boasts a passionate football culture, hosting one of the country's most historic and successful clubs. Culture K7 \u2014 intangible heritage and colonial architecture.",
      "factsAdvanced": [
        "Elevated to the rank of a city in the year 1894.",
        "The Basilica of San Sebastián was constructed in 1891 with imported European materials.",
        "Birthplace of 'El Güegüense', declared a UNESCO Intangible Cultural Heritage in 2005.",
        "The patron saint festivities in January feature elaborate traditional dances like 'El Toro Huaco'.",
        "Diriamba's football team, Diriangén FC, was founded in 1917.",
        "Historically known for its prosperous coffee estates, known as 'fincas'."
      ]
    },
    {
      "id": "jinotepe-cities-v2",
      "descriptionAdvanced": "Jinotepe is the bustling capital of the Carazo Department, located just a few kilometers from Diriamba on the same cool, elevated plateau south of Managua. It functions as the primary commercial, administrative, and educational hub for the region, hosting several university campuses. Like its neighbor, Jinotepe grew wealthy during the coffee boom of the late 19th century, which financed the construction of its beautiful Parish Church of Santiago, renowned for its intricate altars and bells imported from Europe. The city maintains a traditional, relaxed rhythm and is surrounded by a mosaic of coffee farms, citrus orchards, and lush vegetation that benefits from the constant Pacific breezes. Geography K6 \u2014 plateau cities and regional commerce.",
      "factsAdvanced": [
        "Officially became the capital of the Carazo Department in 1891.",
        "The Parish Church of Santiago Apóstol was completed in 1860.",
        "Lies at an altitude of approximately 569 meters above sea level.",
        "The patron saint festival honoring Santiago takes place every July.",
        "Features a massive local market that serves as a hub for regional agricultural produce.",
        "The city's climate is notably cooler than the nearby capital of Managua."
      ]
    },
    {
      "id": "el-rama-cities-v2",
      "descriptionAdvanced": "El Rama is a highly strategic port city located in the South Caribbean Coast Autonomous Region (RACCS) of Nicaragua. Situated deep inland at the confluence of three rivers (the Siquia, Mico, and Rama) that form the mighty Escondido River, it serves as the most important transition point between the Pacific-central landmass and the Caribbean coast. Cargo from Managua arrives here by truck via the only paved highway to the east, before being loaded onto barges and ships bound for Bluefields, the Corn Islands, and international markets. The city has a rough, frontier atmosphere, heavily influenced by logistics, river trade, and agriculture, acting as a crucial economic artery. Geography K8 \u2014 river ports and multimodal transport logistics.",
      "factsAdvanced": [
        "Located where the Siquia, Mico, and Rama rivers join to form the Escondido River.",
        "Serves as the primary inland port connecting western Nicaragua to the Caribbean.",
        "El Rama was officially designated as a municipality in December 1889.",
        "The road from Managua to El Rama was historically the only paved route to the east.",
        "The local economy is dominated by cargo logistics, cattle ranching, and palm oil.",
        "Situated approximately 292 kilometers east of the capital, Managua."
      ]
    },
    {
      "id": "nueva-guinea-cities-v2",
      "descriptionAdvanced": "Nueva Guinea is a relatively young and rapidly expanding city located in the South Caribbean Coast Autonomous Region (RACCS). Founded in the mid-1960s as part of an ambitious agrarian reform project to resettle landless farmers from the Pacific, the city was carved directly out of the dense tropical rainforest. Over the decades, it has transformed into a massive agricultural powerhouse, becoming one of Nicaragua's leading producers of root crops (like cassava and taro), corn, and dairy products. However, this explosive growth has come at a severe ecological cost, driving some of the highest rates of deforestation in the country as the agricultural frontier pushes ever eastward. Geography K8 \u2014 agricultural frontiers and deforestation.",
      "factsAdvanced": [
        "Officially founded by colonists on March 5, 1965.",
        "Elevated to the status of a municipality relatively recently, in 1981.",
        "One of the largest national producers of cassava, malanga, and other tubers.",
        "The region experiences heavy rainfall, averaging over 2,500 mm annually.",
        "The rapid expansion of cattle ranching here has driven massive forest clearing.",
        "Located roughly 280 kilometers from Managua in a highly humid tropical zone."
      ]
    },
    {
      "id": "somotillo-cities-v2",
      "descriptionAdvanced": "Somotillo is an active border town located in the northern sector of the Chinandega Department. Geographically situated on a dry, hot plain adjacent to the Guasaule River, the town is dominated by the Guasaule international border crossing into Honduras. As a result, its economy is heavily structured around international trade, customs logistics, transportation services, and cross-border commerce. The surrounding rural areas are predominantly dedicated to extensive cattle ranching, sesame seed cultivation, and subsistence farming, often struggling with prolonged dry seasons characteristic of the 'Dry Corridor' of Central America. Geography K7 \u2014 border crossings and dry corridor agriculture.",
      "factsAdvanced": [
        "Home to the Guasaule border crossing, one of the busiest in Central America.",
        "Located at an elevation of only 41 meters above sea level.",
        "The region is highly vulnerable to droughts, being part of the Central American Dry Corridor.",
        "Separated from Honduras by the Guasaule River, which occasionally floods.",
        "A major transit point for heavy cargo trucks traveling between North and South America.",
        "The local patron saint is Saint Lawrence (San Lorenzo), celebrated in August."
      ]
    },
    {
      "id": "la-paz-centro-cities-v2",
      "descriptionAdvanced": "La Paz Centro is a historic town in the León Department, famous across Nicaragua for two distinct cultural pillars: its traditional terracotta pottery and the culinary specialty 'quesillo' (a baked corn tortilla with cheese, onions, and cream). Situated on a dusty plain shadowed by the towering Momotombo volcano, the town's clay-rich soil has supported a thriving artisanal ceramics industry for centuries, producing everything from roofing tiles to intricate decorative pots. Additionally, La Paz Centro is historically significant as a transit point on the colonial railway line and sits near the ruins of León Viejo, the original Spanish capital destroyed by volcanic activity in 1610. Geography K6 \u2014 artisanal industries and volcanic soils.",
      "factsAdvanced": [
        "Located just a few kilometers from the UNESCO World Heritage site of León Viejo.",
        "Nationally renowned for producing high-quality terracotta tiles and pottery.",
        "Claims to be the true birthplace of the traditional Nicaraguan 'quesillo'.",
        "Over 50 active brick and tile kilns (tejeras) operate in the municipality.",
        "Sits near the shores of Lake Managua and the base of the Momotombo volcano.",
        "The town was officially founded in the year 1625."
      ]
    },
    {
      "id": "nagarote-cities-v2",
      "descriptionAdvanced": "Nagarote, situated along the highway between Managua and León, proudly calls itself the 'Quesillo Capital' of Nicaragua, rivaling nearby La Paz Centro for the title. The town is recognized for its exceptional cleanliness, often winning national awards as the most unpolluted municipality in the country. Nagarote has a deep indigenous history, centered around an ancient, colossal Genízaro tree located in the town square, estimated to be nearly 1,000 years old, under which indigenous chiefs and Spanish conquerors reportedly held meetings. The local economy is sustained by livestock, peanut farming, and its thriving roadside food stalls catering to travelers. History K6 \u2014 indigenous heritage and culinary traditions.",
      "factsAdvanced": [
        "Home to a legendary Genízaro tree estimated to be over 900 years old.",
        "The town frequently wins the national 'Blue Flag' award for municipal cleanliness.",
        "Known nationwide as the self-proclaimed capital of the 'quesillo' dish.",
        "Located on the strategic transport corridor between Managua and León.",
        "The name derives from the Chorotega language, meaning 'path of the Nagrandanos'.",
        "Sits near the western shores of Lake Managua, primarily an agricultural zone."
      ]
    },
    {
      "id": "san-marcos-cities-v2",
      "descriptionAdvanced": "San Marcos is a serene and picturesque town located on the Carazo plateau, completing the triangle of historic coffee cities alongside Diriamba and Jinotepe. Blessed with a refreshing, cool climate, the town became a favorite retreat and agricultural center for coffee barons in the 20th century. Today, San Marcos is most notable as an educational hub, serving as the main campus for Keiser University (formerly Ave Maria College), drawing students from across Central America and North America. The town is characterized by its tranquil atmosphere, colorful colonial-style houses, and the highly anticipated patron saint festival of Saint Mark, celebrated with traditional folklore in April. Culture K7 \u2014 university towns and traditional festivals.",
      "factsAdvanced": [
        "The town was officially declared a city in the year 1905.",
        "Hosts the only US-accredited university campus in Nicaragua (Keiser University).",
        "Located at an elevation of roughly 535 meters on the Carazo plateau.",
        "Historically part of the 'Golden Triangle' of Nicaraguan coffee production.",
        "Patron saint festivals in April feature a ceremonial 'meeting' of saints from neighboring towns.",
        "Features a significantly cooler microclimate than the coastal plains."
      ]
    },
    {
      "id": "ciudad-sandinocities-v2",
      "descriptionAdvanced": "Ciudad Sandino is a massive, densely populated urban municipality located on the immediate western outskirts of Managua. It originated in 1969 as an emergency resettlement camp (then called OPEN 3) for thousands of families displaced by severe flooding around Lake Managua, and later grew exponentially following the devastating 1972 earthquake. Evolving from a precarious shantytown into an independent municipality in 2000, it is now one of the most populated areas in the country. The city serves primarily as a sprawling working-class residential suburb, with its economy driven by informal commerce, local markets, and workers commuting daily to factories and businesses in the capital. Geography K8 \u2014 urban expansion and disaster resettlement.",
      "factsAdvanced": [
        "Originally formed in 1969 as the emergency settlement OPEN 3 due to flooding.",
        "Renamed 'Ciudad Sandino' after the 1979 Sandinista revolution.",
        "Officially separated from Managua and declared an independent municipality in 2000.",
        "One of the most densely populated urban centers in Nicaragua.",
        "Grew massively after the 1972 Managua earthquake displaced hundreds of thousands.",
        "Functions primarily as a vast commuter suburb for the capital city."
      ]
    },
    {
      "id": "condega-cities-v2",
      "descriptionAdvanced": "Condega is a vibrant town in the Estelí Department, situated in the mountainous northern highlands along the Pan-American Highway. Known historically as the 'Land of the Potters', the area has a rich pre-Columbian heritage, yielding numerous archaeological artifacts now displayed in the local museum. In recent decades, Condega has transformed into a critical hub for the booming Nicaraguan cigar industry, with fertile valleys producing high-quality tobacco leaves and several factories processing cigars for international export. The town's strategic location in the Estelí River valley also makes it an important center for regional commerce, agriculture, and livestock. Economics K8 \u2014 tobacco industries and archaeological heritage.",
      "factsAdvanced": [
        "Located roughly 35 kilometers north of the city of Estelí.",
        "The name 'Condega' translates from indigenous languages to 'Land of Potters'.",
        "The local archaeological museum houses hundreds of pre-Columbian ceramics.",
        "A major processing and farming center for the internationally recognized cigar industry.",
        "Situated on the Pan-American Highway, serving as a key transit point.",
        "The town was the site of significant combat during the 1979 revolution."
      ]
    },
    {
      "id": "sebaco-cities-v2",
      "descriptionAdvanced": "Sébaco is a critical agricultural and logistical crossroads located in the Matagalpa Department, positioned precisely where the Pan-American Highway splits towards the northern highlands. The city lies in the exceptionally fertile Sébaco Valley, which is heavily irrigated and often referred to as the 'Vegetable Garden of Nicaragua'. Here, massive quantities of rice, onions, tomatoes, carrots, and beans are cultivated to supply the national markets. The landscape is dominated by expansive fields and large silos for grain storage. Historically, the area was a major indigenous settlement, and its name translates to 'Serpent Woman' in the Nahuatl language, reflecting its deep pre-colonial roots. Geography K7 \u2014 irrigated agriculture and transport nodes.",
      "factsAdvanced": [
        "The Sébaco Valley is one of the largest vegetable producing regions in the country.",
        "Located at a major intersection of the Pan-American Highway connecting the north.",
        "The name originates from Nahuatl 'Cihuacoatl', meaning 'Serpent Woman'.",
        "The town features massive grain silos and agro-industrial processing facilities.",
        "Lies along the banks of the Grande de Matagalpa River, crucial for irrigation.",
        "The area was an important indigenous trading center long before Spanish arrival."
      ]
    },
    {
      "id": "nandaime-cities-v2",
      "descriptionAdvanced": "Nandaime is a culturally rich and agriculturally significant city in the Granada Department, located on the plains south of the Mombacho volcano. The city is celebrated as the birthplace of General José Dolores Estrada, the revered national hero who led Nicaraguan forces to victory at the Battle of San Jacinto in 1856. Nandaime's economy is deeply rooted in the surrounding fertile volcanic soils, supporting extensive sugarcane plantations, cattle ranches, and rice fields. The city is also famous for its vibrant patron saint festival in July dedicated to Santa Ana, which features traditional horseback riding and the colorful 'Diablitos' folk dances. History K7 \u2014 national heroes and agricultural plains.",
      "factsAdvanced": [
        "Birthplace of General José Dolores Estrada, born here in 1792.",
        "The Santa Ana Parish church is a massive colonial-style structure built in the 19th century.",
        "The patron saint festivities for Santa Ana in July draw thousands of visitors.",
        "The local economy relies heavily on sugarcane, rice, and livestock.",
        "Declared a city in the year 1890 by the national government.",
        "The name derives from the Chorotega language, meaning 'Place of Abundant Streams'."
      ]
    },
    {
      "id": "jalapa-cities-v2",
      "descriptionAdvanced": "Jalapa is a vital agricultural city situated in the extreme northern tip of the Nueva Segovia Department, nestled in a lush valley near the Honduran border. Renowned as the 'Granary of Nicaragua,' the Jalapa Valley's high altitude, fertile soil, and abundant rainfall create perfect conditions for cultivating massive quantities of corn and beans, ensuring the country's food security. During the 1980s Contra War, the city's strategic and symbolic importance made it a highly contested zone, enduring multiple sieges. Today, it is a peaceful, hard-working farming community surrounded by pine forests, playing an indispensable role in national staple crop production. Geography K8 \u2014 food security valleys and border conflicts.",
      "factsAdvanced": [
        "Known nationally as the 'Granary of Nicaragua' for its high grain production.",
        "Located just a few kilometers from the remote border with Honduras.",
        "The Jalapa Valley produces a massive percentage of the nation's corn and beans.",
        "The city was a major conflict zone and heavily fortified during the 1980s Contra War.",
        "Sits at an elevation of roughly 680 meters, surrounded by dense pine mountains.",
        "Hosts an annual National Corn Fair (Feria Nacional del Maíz) every September."
      ]
    },
    {
      "id": "el-sauce-cities-v2",
      "descriptionAdvanced": "El Sauce is a traditional, historic town located in the northern sector of the León Department, tucked away in the foothills of the Maribios volcanic chain. It is most famous as the destination of one of Nicaragua's most massive religious pilgrimages; every January, thousands of devotees travel on foot or in oxcarts to venerate the Black Christ (Señor de los Milagros) at the local sanctuary. Beyond its religious significance, the town's economy is based on livestock, apiculture (beekeeping), and sesame seed farming. Historically, it was an important stop on the narrow-gauge railway line that once connected the northwestern towns. Culture K7 \u2014 religious pilgrimages and dry zone agriculture.",
      "factsAdvanced": [
        "Home to the revered statue of the Black Christ, brought from Guatemala in 1723.",
        "The National Sanctuary of Our Lord of Miracles was elevated by the Pope.",
        "Known for large-scale beekeeping and the production of high-quality honey.",
        "The town was officially declared a city in the year 1905.",
        "Historically served by the now-defunct Pacific Railway of Nicaragua.",
        "The January pilgrimage draws tens of thousands of believers in traditional oxcarts."
      ]
    },
    {
      "id": "larreynaga-malpaisillo-cities-v2",
      "descriptionAdvanced": "Malpaisillo, the administrative seat of the Larreynaga municipality, is located in the dusty, volcanic plains of the León Department. The town lives in the shadows of the impressive Cerro Negro and Telica volcanoes, making its surrounding terrain rocky and highly geothermal. Despite the harsh, dry environment, the local economy relies heavily on agriculture, including sorghum, sesame, and peanut cultivation, alongside livestock farming. In recent years, the area has gained national importance as a center for renewable energy, with several large geothermal power plants tapping into the volcanic heat below to generate electricity for the national grid. Geography K8 \u2014 geothermal energy and volcanic soils.",
      "factsAdvanced": [
        "The municipality is officially named Larreynaga, but the urban center is Malpaisillo.",
        "Located very close to the highly active Telica and Cerro Negro volcanoes.",
        "Home to significant geothermal power plants, such as the San Jacinto-Tizate facility.",
        "Founded as a municipality in the year 1944.",
        "The region's dry, volcanic soil is heavily used for peanut and sesame farming.",
        "'Malpaís' translates to 'badlands', referring to the rough, rocky volcanic terrain."
      ]
    }
  ]
}

import os
os.makedirs('/mnt/c/Users/User/plizio_orch/seo_outputs', exist_ok=True)
with open('/mnt/c/Users/User/plizio_orch/seo_outputs/seo_nicaragua_en_batch1.json', 'w', encoding='utf-8') as f:
    json.dump(batch1, f, indent=2)
print("Batch 1 saved.")
