import json
import re

data = {
  "mako": {
    "desc": "Situated proudly in the southeastern plains near the Romanian border, Makó is an elegant agricultural city globally recognized as the undeniable 'Capital of Onions.' This unique heritage is deeply woven into the fabric of the city, significantly shaping its economy and culinary fame for centuries. However, Makó is also celebrated for its spectacular organic architecture, spearheaded by the visionary Hungarian architect Imre Makovecz. His masterpieces, including the breathtaking Hagymatikum thermal bath complex, blend nature and structure in an unforgettable, almost fairy-tale-like way. The town offers a serene, sun-drenched retreat characterized by its peaceful riverside promenades along the Maros River, restorative thermal waters, and the pungent, sweet aroma of its famous red onions.",
    "facts": [
      "Makó onions are officially recognized as a Hungarikum and have earned a protected geographical indication status within the EU.",
      "The Hagymatikum bath, designed by Imre Makovecz, features towering wooden domes that resemble the layers of an onion.",
      "The city boasts Hungary's longest tree canopy walkway, the 'Lombkorona Sétány', which winds above the Maros River floodplains.",
      "Every September, the city hosts the vibrant Makó Onion Festival, celebrating the harvest with gastronomy, music, and agricultural competitions."
    ]
  },
  "szekesfehervar": {
    "desc": "Székesfehérvár, proudly bearing the title of the 'City of Kings,' is one of Hungary's most ancient and historically revered settlements. For centuries, it served as the royal center of the Kingdom of Hungary, witnessing the coronation of 37 kings and the burial of 15 monarchs within its monumental, now-ruined Basilica of the Assumption. Today, the city is a dynamic industrial hub that beautifully preserves its regal past in a beautifully restored Baroque downtown. Visitors are mesmerized by the National Memorial Place (Ruin Garden) and the enchanting, eccentric Bory Castle, a 20th-century architectural love letter built almost entirely by one man. Székesfehérvár offers an extraordinary journey through time, from medieval royalty to modern Hungarian innovation.",
    "facts": [
      "The city was the undisputed capital of the medieval Kingdom of Hungary from the 10th to the 16th century.",
      "Bory Castle was constructed over 40 years by sculptor Jenő Bory as a massive, romantic tribute to his wife and his art.",
      "Székesfehérvár's historic Flower Clock is a beautiful botanical timepiece in the city center, replanted with fresh flowers every spring.",
      "The city was historically surrounded by massive swamps, which served as a natural defensive barrier against invading armies."
    ]
  },
  "dunaujvaros": {
    "desc": "Perched on the high banks of the Danube River, Dunaújváros is a remarkable testament to 20th-century urban planning and industrial ambition. Built entirely from scratch in the 1950s under the name Sztálinváros, it was designed as the ultimate model socialist city to support a massive, newly constructed iron and steel works. Today, the city offers a fascinating, open-air museum experience of classic Socialist Realist (Socio-Rel) architecture, featuring broad avenues, monumental public art, and grand, uniform residential blocks. Beyond its industrial legacy, Dunaújváros has evolved into a green, vibrant university town with excellent riverside recreational areas and a strong sporting culture. It is a unique destination for those interested in modern history, brutalist architecture, and urban evolution.",
    "facts": [
      "The city was renamed Dunaújváros (New City on the Danube) in 1961, shedding its original name honoring Joseph Stalin.",
      "The Dunaújváros Sculpture Park features an impressive collection of contemporary metal artworks created from materials from the local steelworks.",
      "The local Dunaferr steel plant remains one of the largest and most significant heavy industry complexes in Hungary.",
      "The city is a national powerhouse in water sports, particularly excelling in women's water polo and competitive swimming."
    ]
  },
  "gardony": {
    "desc": "Gárdony is a vibrant and beloved holiday town gracefully hugging the southern shores of Lake Velence, often referred to as the 'Lake of Sunshine.' Because the lake is exceptionally shallow, its waters warm up rapidly, making Gárdony a premier summer destination for families, windsurfers, and sailing enthusiasts. The town is deeply rooted in Hungarian literary history as the birthplace of Géza Gárdonyi, author of the national classic 'Eclipse of the Crescent Moon.' Visitors can explore his meticulously preserved memorial house before unwinding in the expansive Agárd Thermal Bath. Combining excellent aquatic recreation, rich literary heritage, and fantastic local wines from the nearby Velence Hills, Gárdony is an idyllic Hungarian escape.",
    "facts": [
      "Lake Velence is one of the warmest lakes in Europe, with summer water temperatures frequently reaching 26-28°C.",
      "The town of Gárdony actually comprises three distinct settlements: Gárdony proper, Agárd, and Dinnyés.",
      "Géza Gárdonyi's birthplace, a humble thatched-roof cottage, operates today as a deeply touching biographical museum.",
      "The nearby Dinnyés marshland is a strictly protected nature reserve and a paradise for birdwatchers observing migratory species."
    ]
  },
  "gyor": {
    "desc": "Strategically positioned halfway between Budapest and Vienna, Győr is a dynamic, prosperous city famously known as the 'City of Rivers.' Situated at the picturesque confluence of the Danube, Rába, and Rábca rivers, the city boasts a spectacular, fully restored Baroque downtown that rivals the finest in Central Europe. Its spiritual and historical core is Káptalan Hill, crowned by the magnificent Basilica of the Assumption and the imposing Bishop's Castle. Győr masterfully balances its profound historical elegance with sheer economic might, hosting one of the largest automotive engine manufacturing plants in the world. It is a city that vibrates with youthful university energy, refined culinary scenes, and breathtaking riverfront panoramas.",
    "facts": [
      "The Győr Basilica houses the weeping icon of the Virgin Mary, brought from Ireland, and the reliquary of King Saint Ladislaus.",
      "The city is home to Audi Hungaria, which produces millions of engines annually and represents a massive pillar of the Hungarian economy.",
      "Győr won the prestigious Europa Nostra award for the meticulous and stunning restoration of its Baroque historic center.",
      "The unique Iron Rooster (Vaskakas) statue is a symbol of the city's heroic recapture from Ottoman forces in 1598."
    ]
  },
  "sopron": {
    "desc": "Tucked tightly against the Austrian border in Hungary's extreme west, Sopron is a captivating city that offers an almost perfectly intact slice of medieval and Baroque history. Proudly bearing the title of the 'Most Loyal City' (Civitas Fidelissima) after voting to remain part of Hungary in a post-WWI referendum, its deep patriotism is palpable. The skyline is famously dominated by the iconic Fire Tower, which watches over winding cobblestone streets, Gothic merchant houses, and ancient Roman ruins. Sopron is equally celebrated as a premier wine region, producing the robust, spicy Kékfrankos red wine from vineyards that seamlessly blend into the Alpine foothills. It is a deeply romantic, historic jewel box bridging the East and the West.",
    "facts": [
      "Sopron is one of the few Hungarian cities that was not destroyed during the Ottoman wars, allowing its medieval core to survive intact.",
      "The Pan-European Picnic occurred near Sopron in 1989, a historic border opening that precipitated the fall of the Iron Curtain.",
      "Sopron's famous Kékfrankos wine is historically tied to a legend where French soldiers in the 19th century paid for local wine using blue Francs.",
      "The Storno House, located on the main square, is a stunning Renaissance palace that once hosted both King Matthias and composer Franz Liszt."
    ]
  },
  "pannonhalma": {
    "desc": "Perched majestically atop Saint Martin's Hill, Pannonhalma is a small town defined entirely by the monumental presence of the Millenary Benedictine Archabbey. This awe-inspiring religious complex is not only a UNESCO World Heritage site but also one of the oldest and most significant historical monuments in Hungary, founded in the year 996. The Archabbey has served as a beacon of education, faith, and culture for over a thousand years, surviving invasions, wars, and political upheavals. Visitors are astounded by its stunning classical library, which houses hundreds of thousands of rare volumes, and its beautifully maintained botanical gardens. Pannonhalma remains a living, working monastery where monks cultivate exceptional wines and craft exquisite herbal remedies.",
    "facts": [
      "The Pannonhalma Archabbey Library contains over 400,000 volumes, making it one of the largest monastic libraries in the world.",
      "The monastery is home to the first known document containing written Hungarian words, the founding charter of the Tihany Abbey from 1055.",
      "The Archabbey was inscribed as a UNESCO World Heritage site in 1996, precisely 1,000 years after its foundation.",
      "The monks of Pannonhalma cultivate extensive lavender fields and vineyards, continuing centuries-old agricultural traditions."
    ]
  },
  "debrecen": {
    "desc": "Debrecen is the vibrant, sprawling capital of the Great Hungarian Plain, proudly standing as Hungary's second-largest city and its most important eastern cultural hub. Often heralded as the 'Calvinist Rome,' the city was the fierce epicenter of the Hungarian Protestant Reformation, a legacy symbolized by the colossal, twin-towered Great Reformed Church that dominates its expansive main square. Historically, Debrecen has served twice as the temporary capital of Hungary during times of immense national crisis. Today, it is a bustling university city offering a phenomenal quality of life, highlighted by the lush Nagyerdő (Great Forest) park, world-class thermal baths, and prestigious art museums. Debrecen is an elegant blend of unyielding national pride, modern innovation, and deep-rooted civic traditions.",
    "facts": [
      "The Great Reformed Church is the largest Protestant church in Hungary and famously hosted the declaration of Hungarian independence in 1849.",
      "Debrecen's annual Flower Carnival, held every August 20th, features spectacular floral floats requiring millions of fresh flowers.",
      "The Déri Museum houses two of Mihály Munkácsy's colossal, world-famous 'Christ Trilogy' paintings.",
      "The University of Debrecen is one of the oldest continuously operating institutions of higher education in Hungary, established in 1538."
    ]
  },
  "hortobagy": {
    "desc": "Hortobágy is an iconic, sparsely populated village that serves as the gateway to the vast, breathtaking Hortobágy National Park, the spiritual heart of the Hungarian Puszta. This immense expanse of flat, alkaline grasslands and wetlands is a deeply cherished UNESCO World Heritage site, preserving ancient pastoral traditions that date back thousands of years. Here, visitors can witness the legendary 'Csikós' (Hungarian horsemen) performing incredible equestrian feats, and encounter rare indigenous breeds like the majestic Grey Cattle and the twisted-horned Racka sheep. The landscape is famously interrupted only by traditional draw wells and the historic Nine-Holed Bridge. Hortobágy offers a deeply moving, almost cinematic experience of raw nature, endless horizons, and enduring folklore.",
    "facts": [
      "Hortobágy National Park is the largest continuous natural grassland in Europe, covering approximately 80,000 hectares.",
      "The historic Nine-Holed Bridge, built in 1833, is the longest stone bridge in historic Hungary, spanning the Hortobágy river.",
      "The region is a critical global bird sanctuary, hosting hundreds of thousands of migrating cranes and wild geese every autumn.",
      "The traditional Hungarian Grey Cattle, bred here for centuries, are renowned for their massive, lyre-shaped horns and robust resilience."
    ]
  },
  "hajduszoboszlo": {
    "desc": "Hajdúszoboszló is a bustling, globally renowned spa town located on the edge of the Great Hungarian Plain, fondly referred to as the 'Mecca of Rheumatics.' Its rise to fame began in 1925 when a spectacular geyser of boiling, brownish thermal water erupted during a deep geological drilling project. Today, the town is home to the largest bath complex in Europe, featuring a colossal outdoor water park, an indoor medicinal spa, and an expansive wellness palace. The unique, iodine- and bromine-rich waters are scientifically proven to alleviate joint pain and sports injuries. With its vibrant summer promenades, extensive green parks, and an endless array of hotels, Hajdúszoboszló is the ultimate Hungarian destination for aquatic healing and family entertainment.",
    "facts": [
      "The Hungarospa complex in Hajdúszoboszló spans over 30 hectares, making it the largest continuous bathing resort in Europe.",
      "The town's thermal water emerges from a depth of 1,090 meters at a scorching temperature of 73°C.",
      "The unique, dark brown color of the thermal water is colloquially referred to by locals as 'liquid gold.'",
      "In addition to its baths, the town hosts a unique Bell House featuring an impressive collection of donated, ornate aluminum bells."
    ]
  },
  "eger": {
    "desc": "Eger is a stunning, deeply romantic city in northern Hungary, beautifully nestled in a valley between the Bükk and Mátra mountains. It is a place of profound national pride, immortalized by the heroic 1552 defense of the Eger Castle, where a small garrison of Hungarians miraculously repelled a massive Ottoman army. The city's downtown is a meticulously preserved showcase of grand Baroque and Zopf architecture, highlighted by the monumental Eger Basilica and the grand Lyceum. Eger is equally celebrated worldwide for its viticulture, particularly the robust 'Bull's Blood' (Egri Bikavér) red wine, traditionally tasted in the atmospheric, labyrinthine cellars of the Valley of the Beautiful Women. It seamlessly combines bloody history, ecclesiastical grandeur, and hedonistic wine culture.",
    "facts": [
      "The Eger Minaret, standing at 40 meters, is the northernmost Ottoman architectural relic in Europe and features 97 narrow spiral steps.",
      "Egri Bikavér (Bull's Blood) is Hungary's most famous red wine blend, legally requiring a mixture of at least three grape varieties.",
      "The Magic Tower in the Eger Lyceum houses a fascinating 18th-century camera obscura that projects a live image of the city.",
      "The Eger Basilica, designed by József Hild, is the second-largest religious building in Hungary, featuring a spectacular Corinthian portico."
    ]
  },
  "gyongyos": {
    "desc": "Gyöngyös is a picturesque, historic town elegantly situated at the southern foothills of the Mátra Mountains, earning the fitting title of the 'Gateway to the Mátra.' It is a vibrant agricultural and cultural center, deeply renowned for its excellent white wines cultivated on the volcanic slopes surrounding the town. The town's vibrant main square, beautifully restored, is dominated by the twin towers of the grand Saint Bartholomew's Church. Gyöngyös also hosts the fascinating Mátra Museum, housed in the opulent Orczy Castle, which features one of the most complete mammoth skeletons found in the country. Serving as the primary starting point for hikes up to Kékestető, Hungary's highest peak, Gyöngyös flawlessly bridges urban charm with alpine adventure.",
    "facts": [
      "The Mátra Museum in Gyöngyös houses a nearly complete, incredibly rare mammoth skeleton discovered nearby in 1949.",
      "The town is the terminus of the Mátra Narrow-Gauge Railway, which offers nostalgic, scenic train rides deep into the mountain forests.",
      "Gyöngyös is the commercial and administrative center of the Mátra wine region, which is the second-largest wine-producing area in Hungary.",
      "The massive Franciscan library in the town survived the centuries intact and contains thousands of rare, medieval incunabula."
    ]
  },
  "matra": {
    "desc": "The Mátra Mountains form a majestic, densely forested volcanic range in northern Hungary, offering the country's most dramatic alpine landscapes and its highest elevations. It is a premier, year-round playground for outdoor enthusiasts, offering extensive hiking networks, thrilling mountain biking trails, and the nation's most popular ski resorts during the winter. The absolute pinnacle of the range is Kékestető, standing at 1,014 meters, where visitors can enjoy breathtaking panoramic views from the iconic TV tower. The lower, sun-drenched southern slopes are draped in historic vineyards producing crisp, highly respected white wines. Characterized by crystal-clear air, deep ravines, and romantic, hidden villages, the Mátra is Hungary's ultimate nature escape.",
    "facts": [
      "Kékestető is the highest natural point in Hungary, sitting precisely 1,014 meters above sea level.",
      "The region is officially recognized as a climatic health resort, boasting exceptionally clean air proven to aid respiratory illnesses.",
      "The Mátra features the longest ski slope in Hungary at the Mátraszentistván Ski Park, attracting thousands of winter sports fans.",
      "The towering Kékestető TV Tower is 176 meters high and features an open-air observation deck and a scenic cafe."
    ]
  },
  "szolnok": {
    "desc": "Szolnok is a dynamic, rapidly modernizing city located in the heart of the Great Hungarian Plain, where the meandering Zagyva River gracefully flows into the majestic Tisza. It has historically served as a critical transport and economic hub, linking the capital to the expansive eastern territories. Today, Szolnok is celebrated for its stunningly redeveloped riverfront promenades and the spectacular Mayfly Bridge (Tiszavirág híd), an architectural masterpiece connecting the city center to lush recreational islands. The city is deeply proud of its aviation heritage, beautifully showcased at the massive RepTár aviation museum. Szolnok perfectly balances its bustling commercial spirit with serene riverside parks, popular thermal baths, and a deeply rooted artistic community.",
    "facts": [
      "The Mayfly Bridge in Szolnok, spanning 444 meters, is the longest pedestrian and bicycle bridge in Central Europe.",
      "RepTár is an interactive aviation museum displaying dozens of restored military aircraft, helicopters, and anti-aircraft missiles.",
      "The city is home to the prestigious Szolnok Artists' Colony, which has been a center for Hungarian landscape painting for over a century.",
      "Szolnok's historic railway station was once a major stop on the legendary Orient Express route connecting Paris to Istanbul."
    ]
  },
  "jaszbereny": {
    "desc": "Jászberény is a charming, deeply traditional town situated on the banks of the Zagyva River, proudly serving as the historical and cultural capital of the Jászság region. The town is the epicenter of the unique heritage of the Jász (Iazyges) people, an ancient nomadic tribe that settled in Hungary in the 13th century. This fierce, independent history is palpable throughout the city, most notably embodied by the legendary Horn of Lehel, an ancient ivory relic housed in the fascinating Jász Museum. Jászberény is also celebrated for its exceptional zoo, which is widely regarded as one of the best and most beautifully landscaped regional zoos in the country. It is a town where ancient ethnic pride, elegant rural architecture, and pristine nature gracefully intersect.",
    "facts": [
      "The Horn of Lehel is a beautifully carved, 9th-century Byzantine ivory horn that serves as the ultimate symbol of the Jász people.",
      "Jászberény Zoo is famous for its highly successful breeding programs for endangered species, including Siberian tigers and red pandas.",
      "The town hosts the vibrant Csángó Festival every August, an international celebration of folk music, dance, and traditional crafts.",
      "A stunning, monumental Turkish-era stone bridge still arches gracefully over the Zagyva River in the city center."
    ]
  },
  "kisujszallas": {
    "desc": "Kisújszállás is a tranquil, quintessentially Hungarian town nestled deeply within the vast, sunlit expanses of the Nagykunság (Greater Cumania) region. Its wide, peaceful streets and expansive agricultural surroundings vividly reflect its heritage as a traditional agrarian powerhouse of the Great Plain. The town's cultural identity is deeply intertwined with the legacy of the Cumans (Kunok), an eastern nomadic people whose fierce independence and unique folklore are still fiercely protected by the locals today. Visitors to Kisújszállás are charmed by its rustic local history museum, beautifully restored civic buildings, and the rejuvenating Kumánia thermal bath complex. It offers an incredibly authentic, slow-paced retreat into the heart of traditional Hungarian rural life.",
    "facts": [
      "The Kumánia Thermal Bath and Spa utilizes medicinal waters that surface at 60°C, highly effective for treating joint and muscular ailments.",
      "The town's grand Reformed Church, built in the late 18th century, is a stunning example of late-Baroque ecclesiastical architecture.",
      "Kisújszállás is the proud birthplace of István Csukás, one of Hungary's most beloved and prolific authors of children's literature.",
      "The local Morgó tavern and surrounding folklore are deeply connected to the legendary 19th-century outlaws (betyárs) of the Great Plain."
    ]
  },
  "tatabanya": {
    "desc": "Tatabánya is a city of remarkable transformation, positioned strikingly in a valley between the Gerecse and Vértes mountain ranges. Originating as a collection of small mining villages, the city grew into a colossal industrial powerhouse during the 20th century, primarily driven by extensive coal mining. Today, Tatabánya has successfully reinvented itself into a modern, green economic center, shedding its smoky past while respectfully preserving its industrial heritage. The city's skyline is utterly dominated by the monumental Turul Bird statue, a breathtaking bronze monument perched on a steep limestone cliff overlooking the valley. Surrounded by lush forests, extensive hiking trails, and prehistoric caves, Tatabánya offers a fascinating mix of industrial history and spectacular alpine nature.",
    "facts": [
      "The Turul Monument, boasting a wingspan of nearly 15 meters, is one of the largest bird statues in the entire world.",
      "Right next to the Turul monument is the Szelim Cave, a massive prehistoric cavern where Neanderthal remains have been discovered.",
      "The Tatabánya Museum features a spectacular, authentic underground mining exhibition recreating the harsh realities of 20th-century coal extraction.",
      "The city is a major national hub for bouldering and rock climbing, heavily utilizing the dramatic limestone cliffs of the Gerecse mountains."
    ]
  },
  "esztergom": {
    "desc": "Esztergom, majestically poised on a dramatic bend of the Danube River, is a city of overwhelming historical and spiritual magnitude. As the very first capital of the Kingdom of Hungary and the birthplace of Saint Stephen, the nation's first king, its roots are synonymous with the birth of the Hungarian state. The city's skyline is commanded by the colossal Esztergom Basilica, the largest church in the country, whose massive dome can be seen for miles across the surrounding river valleys. Below the basilica lie the fascinating, multi-layered ruins of the medieval Royal Palace, offering profound insights into early Hungarian royalty. Connected to Slovakia by the elegant Maria Valeria Bridge, Esztergom is a breathtakingly scenic, deeply revered monumental city.",
    "facts": [
      "The Esztergom Basilica is the tallest building in Hungary and the third-largest church in Europe, with an interior area covering 5,600 square meters.",
      "The basilica houses the largest single-canvas painting in the world, an awe-inspiring altarpiece depicting the Assumption of Mary.",
      "Esztergom has served continuously as the seat of the Primate of Hungary, the highest-ranking official in the Hungarian Catholic Church.",
      "The majestic Maria Valeria Bridge was destroyed during WWII and remained a severed ruin for decades until its symbolic reconstruction in 2001."
    ]
  },
  "tata": {
    "desc": "Tata is an incredibly romantic, exceptionally picturesque town nestled at the foot of the Gerecse Mountains, affectionately celebrated across Hungary as the 'City of Waters.' Its defining feature is the stunning Old Lake (Öreg-tó), a sprawling artificial reservoir originally created in the Middle Ages, bordered by dense forests and elegant promenades. At the water's edge stands the magnificent Tata Castle, a heavily fortified yet beautiful Renaissance water fortress that served as a favored summer retreat for Hungarian kings and Holy Roman Emperors. The town is incredibly lush, dotted with numerous smaller lakes, bubbling karst springs, and meticulously maintained English landscape gardens. Tata is a peaceful, aristocratic oasis perfect for history buffs and nature lovers alike.",
    "facts": [
      "The Tata Castle was a beloved hunting lodge for King Matthias Corvinus in the 15th century, heavily expanded during his reign.",
      "Every autumn, the Old Lake becomes the site of the Wild Goose Festival, as tens of thousands of migrating geese land on the water.",
      "The town features the spectacular English Park (Angolpark), which was the very first English-style landscape garden established in Hungary.",
      "Tata's numerous ancient watermills, some dating back hundreds of years, are preserved as fascinating monuments to the town's aquatic heritage."
    ]
  },
  "salgotarjan": {
    "desc": "Salgótarján is a uniquely situated, visually dramatic city in northern Hungary, tightly compressed into a narrow, winding valley surrounded by the steep, volcanic peaks of the Karancs and Medves mountains. The city experienced explosive growth in the 19th and 20th centuries as a major center for coal mining and heavy industry, a legacy that still shapes its distinctively modernist and brutalist downtown architecture. Today, Salgótarján is passionately redefining itself as a premier destination for hiking and nature tourism. It serves as the ultimate basecamp for exploring the spectacular, ruined medieval fortresses of Salgó and Somoskő, which crown the surrounding basalt peaks. It is a city where raw industrial history collides with some of Hungary's wildest alpine landscapes.",
    "facts": [
      "Salgótarján is home to Hungary's first underground mining museum, opened in 1965 to showcase the grueling life of local coal miners.",
      "The nearby Castle of Somoskő is internationally famous for its spectacular 'basalt waterfall', a massive formation of curved volcanic columns.",
      "Due to its extreme valley location, Salgótarján is one of the most densely populated yet physically narrow cities in Hungary.",
      "The towering ruins of Salgó Castle offer a breathtaking, 360-degree panoramic view stretching as far as the High Tatras in Slovakia on clear days."
    ]
  },
  "balassagyarmat": {
    "desc": "Balassagyarmat is an elegant, historically rich border town situated gracefully on the banks of the Ipoly River, directly facing Slovakia. It is profoundly respected across the nation as the 'Bravest City' (Civitas Fortissima), a prestigious title earned in 1919 when its citizens and local soldiers heroically successfully repelled an invading Czechoslovak army, ensuring the town remained within Hungary. The town boasts a beautifully preserved, classical downtown featuring grand county halls and shaded promenades. Culturally, it serves as the vibrant capital of the Palóc people, actively preserving their unique dialect, colorful folklore, and intricate embroidery. Balassagyarmat offers an inspiring mix of fierce national pride, profound historical resilience, and deep-rooted rural traditions.",
    "facts": [
      "The Hungarian National Assembly officially awarded Balassagyarmat the title 'Civitas Fortissima' in 2005 to honor its 1919 heroism.",
      "The town is home to the Palóc Museum, which features one of Hungary's finest and most extensive collections of traditional peasant artifacts.",
      "Balassagyarmat features a unique, historic bicycle museum showcasing an incredibly rare collection of antique velocipedes and early bicycles.",
      "The beautiful, historic Ipoly River bridge seamlessly connects the town directly to its Slovakian sister settlement, Slovenské Ďarmoty."
    ]
  },
  "holloko": {
    "desc": "Hollókő is an enchanting, flawlessly preserved village hidden deep within the forested hills of the Cserhát Mountains, representing the absolute pinnacle of traditional Hungarian rural heritage. Recognized globally as a UNESCO World Heritage site, it is not an abandoned museum, but a living, breathing community where the indigenous Palóc people fiercely maintain their ancestral customs. The village consists of beautifully whitewashed, half-timbered houses lining a single cobblestone street, culminating in a charming, wooden-towered church. Above the village loom the dramatic, recently restored ruins of Hollókő Castle, offering sweeping views of the surrounding protected landscape. Visiting Hollókő is a magical, immersive journey back in time, especially during its famous, vibrant Easter celebrations.",
    "facts": [
      "Hollókő was the very first village in the world to be designated as a UNESCO World Heritage site, inscribed in 1987.",
      "The village's strict preservation rules mean that no modern architectural changes are allowed on the 67 protected historic peasant houses.",
      "During Easter, locals practice the ancient tradition of 'Vízbevető', where young men playfully drench the village women in buckets of cold spring water.",
      "According to local legend, the name Hollókő (Raven's Stone) comes from magical ravens that built the local castle stone by stone."
    ]
  },
  "szentendre": {
    "desc": "Szentendre is an exceptionally picturesque, wonderfully bohemian town situated on the banks of the Danube, just a short journey north of Budapest. Escaping the Ottoman advance in the 17th century, thousands of Serbian, Dalmatian, and Greek refugees settled here, shaping the town's incredibly unique, Mediterranean-style architecture and its winding, cobblestoned alleys. Today, Szentendre is celebrated as Hungary's ultimate artist colony, brimming with vibrant contemporary art galleries, quirky museums, and bustling artisan boutiques. Visitors are enchanted by its numerous pastel-colored Orthodox churches, the fascinating Marzipan Museum, and the town's famously relaxed, riverside cafe culture. Szentendre provides a perfect, deeply romantic, and artistically inspiring escape from the bustling capital.",
    "facts": [
      "The town is home to the spectacular Hungarian Open Air Museum (Skanzen), the largest of its kind in the country, showcasing regional rural architecture.",
      "Szentendre's Blagovestenska Orthodox Church features a stunning, masterfully carved Rococo iconostasis created in the 18th century.",
      "The Margit Kovács Ceramic Museum is one of the town's most popular attractions, dedicated to the whimsical, highly emotional works of the famous sculptor.",
      "Despite its small size, Szentendre historically housed seven different active ethnic churches, reflecting its diverse immigrant foundations."
    ]
  },
  "godollo": {
    "desc": "Gödöllő is a highly elegant, historically significant city located in the lush, rolling hills of Pest County, just a short drive east of Budapest. The city's identity is inextricably linked to the magnificent Royal Palace of Gödöllő, one of the largest and most beautifully restored Baroque palaces in Europe. This sweeping, aristocratic estate served as the favored summer residence of Emperor Franz Joseph and his beloved wife, Empress Elisabeth (Sissi), who famously preferred the relaxed Hungarian countryside over the rigid Austrian court. Beyond the palace, Gödöllő is a vibrant, thoroughly modern university town, highly regarded for its agricultural sciences. It is a city where refined royal grandeur gracefully meets youthful academic energy.",
    "facts": [
      "The Royal Palace of Gödöllő is the largest Baroque palace in Hungary and underwent a massive, multi-decade restoration following severe Soviet-era damage.",
      "Empress Sissi was famously fluent in Hungarian and spent months at a time in Gödöllő riding horses and escaping the Viennese court.",
      "The city successfully hosted the prestigious rotating Presidency of the Council of the European Union in the palace in 2011.",
      "Gödöllő features an incredibly rare, fully restored Baroque theater within the palace wings, one of the oldest surviving stone theaters in Europe."
    ]
  },
  "vac": {
    "desc": "Vác is a deeply historic, remarkably serene episcopal city beautifully situated on the eastern bank of the spectacular Danube Bend. With a history stretching back a millennium, it has long served as a crucial religious and cultural center, boasting a superbly cohesive Baroque downtown. The city's skyline is dominated by the monumental Vác Cathedral, a stunning Neoclassical masterpiece built in the late 18th century. Visitors are charmed by the city's elegant, flower-lined riverside promenade, its unique triumphal arch (the only one in Hungary), and the fascinating, slightly macabre Memento Mori crypt exhibition. Vác offers an unhurried, culturally sophisticated experience, blending grand ecclesiastical architecture with breathtaking river panoramas.",
    "facts": [
      "The Vác Cathedral was designed by the French architect Isidore Canevale and is one of the most important Neoclassical buildings in Hungary.",
      "Hungary's only Triumphal Arch was hastily constructed in Vác in 1764 to welcome the visiting Empress Maria Theresa.",
      "The 'Memento Mori' exhibition displays naturally mummified remains and beautifully painted coffins discovered completely intact in a forgotten church crypt in 1994.",
      "Vác is officially the endpoint of Hungary's very first railway line, which connected the city to Budapest and opened in 1846."
    ]
  },
  "visegrad": {
    "desc": "Visegrád is a small, romantic town that possesses a historical significance vastly disproportionate to its size, dramatically situated at the narrowest and most spectacular point of the Danube Bend. In the 14th century, it was the bustling, glamorous capital of the Hungarian Kingdom, hosting kings, emperors, and legendary royal summits. Today, the town is utterly dominated by the breathtaking High Castle (Fellegvár), a formidable medieval citadel perched on a steep precipice offering the most photographed, panoramic views in Hungary. Down by the river lies the partially reconstructed Royal Palace, famous for its red marble fountains and Renaissance gardens. Visegrád is a magical destination where sheer natural beauty and the zenith of medieval Hungarian power seamlessly merge.",
    "facts": [
      "The legendary 1335 Congress of Visegrád, a meeting of Central European kings, directly inspired the modern political alliance known as the Visegrád Group (V4).",
      "The High Castle historically safeguarded the Holy Crown of Hungary, keeping it secure from thieves and invading armies for centuries.",
      "Visegrád's Solomon Tower is a massive, hexagonal defensive keep that, according to local legend, briefly served as a prison for Vlad the Impaler (Dracula).",
      "During the Renaissance under King Matthias Corvinus, the Royal Palace was famously described by a papal legate as an 'earthly paradise'."
    ]
  },
  "kaposvar": {
    "desc": "Kaposvár, affectionately known as the 'City of Flowers and Painters,' is a wonderfully vibrant, elegantly designed cultural hub located in the rolling hills of southwestern Hungary. As the capital of Somogy County, the city is widely celebrated for its impeccably preserved, pedestrian-friendly downtown, showcasing a stunning array of pastel-colored Eclectic and Art Nouveau buildings. The city's soul is deeply artistic, having birthed the world-renowned post-impressionist painter József Rippl-Rónai, whose former hilltop villa is now an enchanting museum. Beyond the canvas, Kaposvár is a powerhouse of Hungarian theater, home to the prestigious Csiky Gergely Theatre. It is a city that exudes a refined, unhurried civic pride, perfectly balancing high art with lush, flower-filled squares.",
    "facts": [
      "The Csiky Gergely Theatre in Kaposvár is one of the largest and most architecturally stunning Secessionist theaters in Hungary, recently undergoing a massive renovation.",
      "The city center features a unique, historic pharmacy (Arany Oroszlán) that has retained its original, highly ornate 19th-century wooden furnishings.",
      "Kaposvár is a major university town, heavily specializing in agricultural and veterinary sciences, driving the region's economy.",
      "The Rippl-Rónai Villa is surrounded by a sprawling, beautiful park where the painter famously hosted the greatest Hungarian artists and writers of his era."
    ]
  },
  "siofok": {
    "desc": "Siófok is an energetic, pulsating resort city situated on the southern shore of Lake Balaton, universally recognized as the 'Summer Capital of Hungary.' Boasting an incredible 17 kilometers of contiguous coastline and shallow, quickly warming waters, it is the absolute premier destination for beachgoers and families. However, Siófok is most famous internationally for its explosive summer nightlife, centered around the bustling Petőfi Promenade, which is packed with mega-clubs, open-air bars, and live concerts. Beyond the party scene, the city features elegant, tree-lined parks, beautiful 19th-century villas, and its iconic Water Tower, which offers sweeping panoramic views over the 'Hungarian Sea.' Siófok is the undisputed epicenter of Hungarian summer hedonism and aquatic fun.",
    "facts": [
      "The Siófok Water Tower, built in 1912, features a modern, rotating cafe at the top, offering a 360-degree view of Lake Balaton.",
      "Siófok was the birthplace of Emmerich Kálmán, the world-famous composer of highly successful operettas like 'The Csárdás Princess'.",
      "The city's harbor is the busiest on Lake Balaton, serving as the central hub for the lake's extensive ferry and steamboat network.",
      "Siófok's 'Aranypart' (Golden Shore) and 'Ezüstpart' (Silver Shore) are the longest continuous, manicured public beaches in Hungary."
    ]
  },
  "balatonfoldvar": {
    "desc": "Balatonföldvár is an exceptionally elegant, deeply aristocratic resort town gracefully positioned on the southern shore of Lake Balaton. Developed in the late 19th century by the noble Széchényi family specifically as a luxury retreat for the Hungarian elite, the town retains a distinct, refined, and peaceful atmosphere. It is characterized by magnificent, historicist summer villas, expansive, meticulously manicured parks, and wide, tree-lined promenades that stretch along the waterfront. The town's crowning jewel is its spectacular harbor, the largest and most beautiful marina on the lake, flanked by a unique, modern ship history museum and lookout tower. Balatonföldvár is the perfect destination for travelers seeking a sophisticated, tranquil, and deeply romantic lakeside experience.",
    "facts": [
      "The town features a breathtaking, 1-kilometer-long plane tree promenade (Kvassay Promenade) right along the water's edge.",
      "Balatonföldvár's harbor, built in 1905, is uniquely constructed from massive basalt blocks transported across the frozen lake in winter.",
      "The modern Visitor Center of Shipping History features a 25-meter-high lookout tower shaped like a massive ship's mast.",
      "Unlike the flat eastern shores, Balatonföldvár features steep, high loess bluffs that provide spectacular panoramic views across the lake to the Tihany peninsula."
    ]
  },
  "nyiregyhaza": {
    "desc": "Nyíregyháza is a dynamic, rapidly expanding city serving as the economic and cultural powerhouse of northeastern Hungary. Despite its size, the city has maintained a remarkably green, welcoming atmosphere, characterized by wide, leafy boulevards and highly eclectic, late 19th-century architecture. The absolute pride of Nyíregyháza is its spectacular Sóstó (Salt Lake) district, a vast oak-forest recreational oasis. Here, visitors flock to the world-renowned Nyíregyháza Animal Park, the immersive Sóstó Museum Village showcasing regional rural history, and expansive, luxurious thermal bath complexes. Nyíregyháza offers a brilliant, family-friendly combination of urban sophistication, exceptional wildlife conservation, and restorative geothermal healing.",
    "facts": [
      "The Nyíregyháza Animal Park (Sóstó Zoo) is routinely voted as the best zoo in Europe in its category, housing over 500 species.",
      "The Sóstó Museum Village is the largest regional open-air museum in Hungary, featuring entirely authentic, relocated peasant houses and workshops.",
      "The city's downtown is beautifully anchored by the massive, twin-towered Roman Catholic Co-Cathedral, built in a stunning neo-Romanesque style.",
      "Nyíregyháza boasts a vibrant, historic tram network that was completely discontinued in 1969 but remains a beloved nostalgic symbol of the city."
    ]
  },
  "mateszalka": {
    "desc": "Mátészalka is an industrious, historically significant town located in the far eastern reaches of Hungary, serving as the commercial heart of the deeply traditional Szatmár region. The town holds a highly unique and prestigious place in Hungarian history as the 'City of Light,' being the very first settlement in the country to install public electric street lighting in 1888. This pioneering spirit is celebrated today in the town's fascinating Szatmári Museum, which boasts extensive exhibitions on regional history, the history of electrification, and a massive collection of antique carriages. Surrounded by the famous apple and plum orchards of the region, Mátészalka offers a quiet, deeply authentic glimpse into eastern Hungarian heritage and innovation.",
    "facts": [
      "Mátészalka introduced public electric street lighting even before the capital city of Budapest did, a massive technological achievement at the time.",
      "The Szatmári Museum features one of the largest and most spectacular collections of horse-drawn carriages and sleighs in Central Europe.",
      "The town is a crucial center for the production of the world-famous Szatmári Plum Pálinka, a highly potent, protected Hungarian fruit brandy.",
      "Mátészalka's eclectic downtown features beautifully restored 19th-century merchant houses and an impressive, historicist synagogue."
    ]
  },
  "vasarosnameny": {
    "desc": "Vásárosnamény is a picturesque, highly welcoming town beautifully situated at the serene confluence of the Tisza, Szamos, and Kraszna rivers in northeastern Hungary. Proudly known as the 'Heart of Bereg,' it serves as the perfect logistical and cultural gateway to the enchanting, deeply traditional Bereg region. The town is deeply tied to its rivers, offering excellent sandy riverbanks for summer bathing, extensive water-sports facilities, and excellent regional fish gastronomy. Culturally, the town is anchored by the fascinating Bereg Museum, which meticulously preserves the unique, incredibly intricate textile embroidery and woodwork of the local villages. Vásárosnamény is an idyllic, peaceful sanctuary for nature lovers, paddlers, and folklore enthusiasts.",
    "facts": [
      "The town's Gergelyiugornya district features one of the most popular and beautiful sandy river beaches along the entire length of the Tisza River.",
      "The Bereg Museum is internationally recognized for its massive collection of Bereg cross-stitch embroidery and traditional, painted wooden grave markers.",
      "Vásárosnamény features the impressive Atlantika Water Amusement Park, offering significant modern recreational facilities in the rural east.",
      "The town is a crucial starting point for multi-day, cross-border canoe and kayak tours winding down the pristine Upper Tisza river."
    ]
  },
  "szekszard": {
    "desc": "Szekszárd is a charming, beautifully serene city that holds the title of Hungary's smallest county capital, nestled in the rolling, vine-covered hills of the Tolna region. The city's identity, economy, and rhythm of life are overwhelmingly defined by its millennia-old viticulture. It is globally revered as one of Hungary's premier red wine producing regions, famous for its elegant, spicy Kadarka and rich Bikavér (Bull's Blood) blends. The city center is a peaceful, impeccably clean display of grand Neoclassical county halls and leafy squares. Szekszárd offers an unpretentious, incredibly welcoming atmosphere where visitors can seamlessly walk from the historic downtown straight into incredibly atmospheric, deeply carved hillside wine cellars.",
    "facts": [
      "Szekszárd is one of only two wine regions in Hungary legally permitted to produce 'Bikavér' (Bull's Blood), the other being Eger.",
      "The legendary Hungarian poet and author Mihály Babits was born here, and his charming childhood home is now a dedicated literary museum.",
      "The town features the spectacular Garay Square, anchored by an impressive statue of the poet János Garay, who famously wrote about the local wines.",
      "Szekszárd's unique terroir is heavily characterized by deep loess soil, which perfectly retains heat and produces exceptionally smooth, complex red wines."
    ]
  },
  "paks": {
    "desc": "Paks is a highly significant, rapidly modernizing city located directly on the western banks of the Danube River in central Hungary. The city's name is universally synonymous with energy, as it is home to the Paks Nuclear Power Plant, Hungary's only nuclear facility, which reliably provides roughly half of the entire nation's electricity. Despite its massive industrial profile, Paks retains a highly attractive, historic core featuring narrow, winding streets, grand 19th-century mansions, and a surprisingly beautiful, tree-lined riverfront promenade. The city is also deeply proud of its rich culinary tradition, famously serving up some of the best, most authentic, paprika-heavy Fisherman's Soup (Halászlé) in the country. It is a city where cutting-edge technology and deep-rooted Danube traditions coexist.",
    "facts": [
      "The Paks Nuclear Power Plant features a fascinating, highly interactive Visitor Center and a unique Museum of Nuclear Energy.",
      "Paks boasts one of the most uniquely designed Catholic churches in Hungary, the strikingly modernist Holy Spirit Church designed by Imre Makovecz.",
      "The city is a national powerhouse in judo and basketball, supported by massive, state-of-the-art sports complexes funded by the energy sector.",
      "The historic Lussonium Roman fort ruins are located just outside the city, marking the ancient border (limes) of the Roman Empire."
    ]
  },
  "bonyhad": {
    "desc": "Bonyhád is a deeply historic, incredibly charming town situated in the picturesque, rolling valleys of the Tolna region, serving as the proud center of the 'Völgység' (Valley Country). The town is a fascinating, living tapestry of distinct cultural histories, having been a major center for both the Danube Swabians (ethnic Germans) and a highly influential, traditional Jewish community prior to WWII. This diverse heritage is still visible in the town's varied, elegant architecture, its beautiful dual-steepled Catholic church, and its meticulously maintained cemeteries. Bonyhád is also industrially famous across Hungary for its historic enamel factory, which has produced iconic, highly durable kitchenware for generations. It is a quiet, contemplative town rich in complex Central European history.",
    "facts": [
      "Bonyhád is home to the Völgység Museum, which extensively documents the complex, often tragic history of the region's displaced Danube Swabian population.",
      "The local Bonyhád Enamel Factory, founded in the 19th century, produced the legendary red-and-white dotted pots found in almost every Hungarian kitchen.",
      "The town features two beautiful, historic synagogues, one of which has been masterfully restored as a cultural center and library.",
      "Bonyhád is the educational heart of the local German minority, hosting a prestigious bilingual high school (Petőfi Sándor Gimnázium)."
    ]
  },
  "szombathely": {
    "desc": "Szombathely is a magnificent, deeply historic city in western Hungary, proudly holding the title of the country's oldest continuously inhabited settlement. Founded by the Romans in 43 AD as the provincial capital 'Savaria', the city is an absolute treasure trove of classical antiquity, boasting a spectacularly excavated Isis Temple (Iseum) and expansive ruin gardens. Beyond the Romans, Szombathely is globally revered in the Christian world as the birthplace of Saint Martin of Tours, an event celebrated with grand, city-wide festivals. Today, the city is a prosperous, highly elegant cultural center, featuring a stunning Baroque cathedral, vibrant civic squares, and incredibly lush arboretums. It seamlessly weaves its imperial Roman legacy with majestic Austro-Hungarian architecture.",
    "facts": [
      "Szombathely was the capital of the Roman province of Pannonia Superior, visited by multiple Roman Emperors including Trajan and Septimius Severus.",
      "The city hosts the spectacular Savaria Historical Carnival every August, where thousands parade in authentic Roman, medieval, and Renaissance costumes.",
      "The Szombathely Cathedral is the third-largest church in Hungary, though it was heavily bombed in WWII and meticulously rebuilt.",
      "The Kámon Arboretum, located on the city's edge, features over 3,000 species of trees and is famous for its stunning, massive rhododendron displays."
    ]
  },
  "koszeg": {
    "desc": "Kőszeg, often affectionately called the 'Jewel Box of Hungary', is an incredibly preserved, fairytale-like medieval town nestled directly against the Austrian border at the foot of the Alps. The town's historical identity is forever cemented by the heroic Siege of Kőszeg in 1532, where a tiny garrison miraculously stalled a massive Ottoman army marching on Vienna. The town center is an absolute masterpiece of Gothic, Renaissance, and Baroque architecture, featuring two completely distinct, highly atmospheric main squares. Dominating the town is the formidable Jurisics Castle, whose imposing walls now house fascinating historical exhibits. With its crystal-clear alpine air, winding cobblestone alleys, and pristine surrounding forests, Kőszeg is arguably Hungary's most romantic historic town.",
    "facts": [
      "In Kőszeg, the church bells famously ring every day at 11:00 AM, rather than noon, to commemorate the exact hour the Ottoman army finally retreated in 1532.",
      "The town features the incredibly unique 'Heroes' Gate', a massive medieval tower that serves as the imposing entrance to the inner old town.",
      "Kőszeg's Jurisics Square is widely considered one of the most beautiful and architecturally cohesive medieval squares in Central Europe.",
      "The nearby Írott-kő peak, the highest point in Transdanubia, is split exactly in half by the Hungarian-Austrian border, marked by a shared lookout tower."
    ]
  },
  "sarvar": {
    "desc": "Sárvár is an elegant, historically aristocratic town in western Hungary that has brilliantly transformed itself into one of Europe's premier, world-class spa destinations. The historical heart of the town is the stunning, pentagonal Nádasdy Castle, a flawlessly preserved Renaissance fortress that once served as a major cultural and literary hub of the Hungarian kingdom. Today, however, Sárvár is most famous for its vast, state-of-the-art thermal bath complex, which utilizes two distinctly different types of healing thermal waters to treat a variety of ailments. Surrounded by ancient, sprawling arboretums, serene boating lakes, and luxurious hotels, Sárvár offers an exquisite, relaxing blend of majestic Renaissance history and elite modern wellness.",
    "facts": [
      "The Nádasdy Castle in Sárvár was the site where the very first book printed in the Hungarian language was published in 1541.",
      "Sárvár's thermal baths utilize a highly unique 83°C thermal water rich in salt, which is famously evaporated to produce 'Sárvár Thermal Crystal' bath salts.",
      "The castle's breathtaking Great Hall features incredibly intricate, original 17th-century ceiling frescoes depicting major battles against the Ottomans.",
      "The Sárvár Arboretum, located directly adjacent to the castle, protects massive, 300-year-old oak trees and rare exotic plants."
    ]
  },
  "veszprem-city": {
    "desc": "Veszprém is a profoundly historic, geographically dramatic city elegantly built across five steep hills just north of Lake Balaton. Widely revered as the 'City of Queens,' it holds the prestigious, centuries-old tradition of being the exclusive coronation site and favored residence of Hungarian queens. The city's absolute masterpiece is the spectacular, walled Castle District, an impossibly narrow, cobblestoned ridge packed with majestic Baroque palaces, ancient chapels, and the towering St. Michael's Cathedral. Recently celebrated as the 2023 European Capital of Culture, Veszprém pulsates with high-end art exhibitions, a world-renowned international street music festival, and a sophisticated culinary scene. It is a city of sweeping, dramatic panoramas and impeccably preserved aristocratic elegance.",
    "facts": [
      "The Veszprém Castle District is essentially one single, winding street perched on a rocky ridge, culminating at a breathtaking cliffside lookout.",
      "St. Michael's Cathedral in Veszprém is the oldest episcopal seat in Hungary, originally founded in the 10th century by Queen Gisela.",
      "The city is famous for its towering Viaduct (Völgyhíd), a spectacular arched bridge spanning a deep valley right near the city center.",
      "Veszprém boasts a massive, highly successful handball culture, with its local men's team regularly competing in the finals of the European Champions League."
    ]
  },
  "balatonfured": {
    "desc": "Balatonfüred is the incredibly elegant, undisputed cultural capital of the northern shore of Lake Balaton, deeply saturated in 19th-century aristocratic grandeur. It is the oldest and most prestigious resort town on the lake, historically drawing artists, politicians, and nobility who flocked to its highly therapeutic, naturally carbonated mineral springs. The town's atmosphere is defined by its spectacular, tree-lined Tagore Promenade, bordered by opulent, flawlessly restored historicist villas and a massive, bustling marina filled with gleaming sailboats. Balatonfüred is also deeply respected as the heart of the Balaton wine region and hosts the prestigious, highly exclusive Anna Ball every summer. It represents the absolute pinnacle of classical, refined Hungarian riviera elegance.",
    "facts": [
      "The town's famous Tagore Promenade is named after the Nobel Prize-winning Indian poet Rabindranath Tagore, who planted a tree here after being cured at the local sanatorium.",
      "Balatonfüred is home to the Hungarian State Heart Hospital, one of the largest and most prestigious cardiac rehabilitation centers in Central Europe.",
      "The town features the stunning Jókai Memorial House, the preserved summer villa of Hungary's greatest 19th-century romantic novelist.",
      "The internationally famous Anna Ball has been held in Balatonfüred every July since 1825, serving as the highlight of the Hungarian social calendar."
    ]
  },
  "tihany": {
    "desc": "The Tihany Peninsula is a spectacularly beautiful, volcanic promontory that juts dramatically into Lake Balaton, offering the most iconic, breathtaking panoramas in all of Hungary. The spiritual and visual anchor of the peninsula is the twin-towered Benedictine Tihany Abbey, established in 1055, which perches majestically on the cliff edge. Beyond its deep religious significance, Tihany is celebrated for its incredibly preserved, thatched-roofed traditional peasant houses that line winding, cobblestone streets. The peninsula possesses a unique, almost Mediterranean microclimate, making it famously ideal for the extensive cultivation of vibrant, fragrant lavender fields that bloom every summer. Tihany is a deeply romantic, pristine sanctuary combining ancient faith, volcanic geology, and rustic elegance.",
    "facts": [
      "The crypt of the Tihany Abbey contains the intact tomb of King Andrew I, the only Hungarian medieval king whose burial site survived in its original location.",
      "Tihany is incredibly unique geographically, featuring two completely separate, elevated crater lakes (Inner Lake and Outer Lake) independent from Lake Balaton.",
      "The foundation charter of the Tihany Abbey, written in Latin, contains the oldest surviving written words of the Hungarian language.",
      "The peninsula's famous 'Tihany Echo' was an acoustic phenomenon where shouts bounced off the abbey walls, though it has faded over time due to modern tree growth."
    ]
  },
  "zalaegerszeg": {
    "desc": "Zalaegerszeg is a highly attractive, refreshingly green city nestled deeply within the rolling, forested hills of western Hungary's Zala region. The city's identity is a fascinating mix of deeply rooted local folklore and the explosive, 20th-century modernization brought by the discovery of significant local oil reserves. Zalaegerszeg is most famous nationally for its pioneering Göcsej Village Museum, a spectacularly curated open-air museum that saves and displays the unique, ancient timber-framed architecture of the region. The city offers a highly relaxed, high-quality lifestyle, featuring expansive floral parks, the massive Aquacity water park, and the serene, forested shores of Lake Gébárti. It is a wonderful, highly livable city that brilliantly showcases the rustic charm of the Göcsej region.",
    "facts": [
      "The Göcsej Village Museum in Zalaegerszeg was the very first open-air museum (Skanzen) established in Hungary, opening in 1968.",
      "The city is home to the highly unique Hungarian Oil and Gas Industry Museum, featuring massive, open-air displays of historic drilling rigs and machinery.",
      "Zalaegerszeg features one of the most stunning, modern Catholic churches in the country, the Church of the Immaculate Heart of Mary, designed by Imre Makovecz.",
      "The city has recently become a major European hub for automotive technology, hosting the massive, state-of-the-art ZalaZONE autonomous vehicle test track."
    ]
  },
  "nagykanizsa": {
    "desc": "Nagykanizsa is a bustling, economically dynamic city located in the extreme southwest of Hungary, serving as a critical historical and modern crossroads between the Adriatic coast and Central Europe. The city boasts a highly elegant, beautifully planned late 19th-century downtown, characterized by grand, tree-lined squares, wealthy merchant palaces, and a distinctly bourgeois, Austro-Hungarian atmosphere. Historically, Nagykanizsa was a formidable, highly contested fortress city during the Ottoman wars, though its true golden age arrived with its booming brewing and milling industries in the 1800s. Today, it is deeply celebrated for its pristine, expansive green spaces, particularly the serene boating lake (Csónakázó-tó), offering extensive hiking and cycling in the surrounding dense forests.",
    "facts": [
      "The Erzsébet Square in Nagykanizsa is considered one of the largest, most architecturally cohesive, and beautifully landscaped civic squares in Hungary.",
      "The city's spectacular Csónakázó-tó (Boating Lake) is surrounded by a massive, forested recreation area featuring a 48-meter-high, futuristic steel lookout tower.",
      "Nagykanizsa was historically the center of Hungary's beer production, home to the legendary Kanizsa Brewery founded in 1892.",
      "The Thury György Museum, housed in a beautiful 18th-century Baroque mansion, features excellent exhibits on the city's turbulent Ottoman frontier history."
    ]
  },
  "keszthely": {
    "desc": "Keszthely is the largest, most culturally sophisticated city on Lake Balaton, elegantly positioned at the lake's westernmost tip. Unlike the bustling, party-centric resort towns of the southern shore, Keszthely has retained the dignified, deeply intellectual atmosphere of a historic university and aristocratic center. The city is universally defined by the breathtaking Festetics Palace, an incredibly opulent, perfectly preserved Baroque masterpiece surrounded by sprawling English landscape gardens. Keszthely also features a charming, pedestrian-only historic downtown packed with quirky, specialized museums and elegant cafes. With its beautifully manicured lakeside promenade and grand, historic pavilion extending into the water, Keszthely offers a deeply refined, aristocratic Balaton experience.",
    "facts": [
      "The Festetics Palace is the third-largest castle in Hungary and miraculously survived World War II completely unlooted.",
      "The palace's Helikon Library is the largest intact aristocratic library in Europe, holding over 80,000 priceless antique volumes.",
      "Keszthely is home to the Georgikon, Europe's very first independent institution of higher agricultural education, founded by Count György Festetics in 1797.",
      "The city's historic Island Bath (Szigetfürdő) is a stunning, beautifully restored 19th-century wooden bathing pavilion built directly over the waters of Lake Balaton."
    ]
  },
  "harkany": {
    "desc": "Harkány is a deeply historic, globally revered spa town located in Hungary's sun-drenched deep south, near the Croatian border. The town's absolute fame and entire existence revolve around its miraculous thermal waters, which uniquely contain high levels of dissolved carbonyl sulfide, a potent compound incredibly rare on a global scale. Discovered purely by accident by draining swamp workers in 1823, the waters have since drawn millions seeking relief from severe rheumatic, joint, and dermatological conditions, particularly psoriasis. Harkány features a massive, beautifully shaded, century-old thermal bath park that buzzes with life year-round. It is a town purely dedicated to profound physical healing, offering a deeply nostalgic, classic Central European spa experience.",
    "facts": [
      "Harkány's thermal water is one of only two places in the entire world (the other being in Mexico) where sulfur exists in the form of gas dissolved in the water.",
      "The thermal water naturally surfaces at a highly effective 62°C from a depth of roughly 50-70 meters.",
      "The Harkány Spa is exceptionally famous across Europe for its highly successful, medically proven treatments for the skin condition psoriasis.",
      "The town is located just minutes away from the legendary Villány wine region, allowing visitors to perfectly combine medical healing with world-class wine tasting."
    ]
  }
}

import sys

def update_ts_file(ts_file):
    with open(ts_file, 'r', encoding='utf-8') as f:
        content = f.read()

    for poi_id, item in data.items():
        ro_desc = item['desc'].replace('"', '\\"')
        ro_facts = item['facts']
        
        poi_pattern = r'(\{\s*id:\s*"' + re.escape(poi_id) + r'"[\s\S]*?\n\s*\})'
        match = re.search(poi_pattern, content)
        if not match:
            print(f"POI {poi_id} not found")
            continue
            
        poi_block = match.group(1)
        new_poi_block = poi_block
        
        desc_pattern = r'(descriptionAdvanced:\s*\{[\s\S]*?en:\s*)(["\'`][\s\S]*?["\'`])'
        desc_match = re.search(desc_pattern, new_poi_block)
        if desc_match:
            new_poi_block = re.sub(desc_pattern, r'\1"' + ro_desc + r'"', new_poi_block)

        facts_pattern = r'(factsAdvanced:\s*\{[\s\S]*?en:\s*)(\[[\s\S]*?\])'
        facts_match = re.search(facts_pattern, new_poi_block)
        if facts_match:
            facts_json = json.dumps(ro_facts, ensure_ascii=False, indent=8)
            facts_json = facts_json.replace('\n', '\n      ')
            new_poi_block = re.sub(facts_pattern, r'\1' + facts_json, new_poi_block)

        content = content.replace(poi_block, new_poi_block)

    with open(ts_file, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Updated batch 2 in {ts_file}")

if __name__ == "__main__":
    update_ts_file('lib/visualLab/data/hungaryPoi.ts')
