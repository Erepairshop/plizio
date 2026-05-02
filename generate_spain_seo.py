import json

pois = [
    {
        "id": "es-camp-nou",
        "descriptionAdvanced": "Camp Nou is the legendary home stadium of FC Barcelona, situated in the Les Corts district of Barcelona. Inaugurated in 1957, this monumental sporting venue serves as a temple of football and a symbol of Catalan culture and pride. Visitors can immerse themselves in the rich heritage of the club by exploring the expansive museum, walking through the players' tunnel, and stepping onto the iconic pitch. The stadium's immense scale and electrifying atmosphere on match days make it a pilgrimage site for sports enthusiasts worldwide. Beyond football, it has hosted major concerts and significant historical events over the decades.",
        "factsAdvanced": [
            "Camp Nou officially opened on September 24, 1957.",
            "With a seating capacity of 99,354, it is the largest stadium in Europe.",
            "It hosted the 1989 and 1999 European Cup/Champions League finals.",
            "The FC Barcelona Museum attracts over 1.5 million visitors annually."
        ]
    },
    {
        "id": "es-ibiza",
        "descriptionAdvanced": "Ibiza is an iconic island in the Mediterranean Sea, forming part of the Balearic archipelago off the eastern coast of Spain. While globally renowned for its vibrant nightlife and electronic dance music club scene, the island also harbors a deeply traditional and tranquil side. Its rugged coastline features pristine coves, pine-clad hills, and hidden sandy beaches washed by crystal-clear waters. The historic core of Ibiza Town, known as Dalt Vila, is a beautifully preserved Renaissance fortress that offers a glimpse into the island's ancient past. Ibiza balances its reputation as a party capital with its status as a haven for yoga retreats and bohemian culture.",
        "factsAdvanced": [
            "Ibiza was inscribed as a UNESCO World Heritage site in 1999 for its biodiversity and culture.",
            "The island covers an area of approximately 572 square kilometers.",
            "Phoenician settlers founded the port in 654 BC, originally naming it Ibossim.",
            "Es Vedrà, a rocky limestone island off the west coast, stands 413 meters high."
        ]
    },
    {
        "id": "es-mallorca",
        "descriptionAdvanced": "Mallorca is the largest of Spain's Balearic Islands, offering a diverse landscape that ranges from dramatic mountain peaks to idyllic coastal shores. The island is dominated by the Serra de Tramuntana, a rugged mountain range that stretches along the northwest coast and provides spectacular hiking routes. Palma, the vibrant capital city, features the awe-inspiring Santa María cathedral and a charming historic center filled with narrow alleys and traditional courtyards. Mallorca has long been a favored retreat for artists, writers, and royalty, drawn by its mild Mediterranean climate and picturesque scenery. Visitors can explore ancient Roman ruins, Moorish bathhouses, and serene olive groves scattered across the island.",
        "factsAdvanced": [
            "The Serra de Tramuntana was declared a UNESCO World Heritage Site in 2011.",
            "Palma Cathedral, known as La Seu, features a nave that is 44 meters tall.",
            "Mallorca spans an area of 3,640 square kilometers.",
            "Composer Frédéric Chopin and writer George Sand famously wintered in Valldemossa in 1838."
        ]
    },
    {
        "id": "es-tenerife",
        "descriptionAdvanced": "Tenerife is the largest and most populated island of the Canary Islands, situated in the Atlantic Ocean off the coast of North Africa. The island's dramatic topography is defined by Mount Teide, a colossal dormant volcano that stands as the highest peak in Spain. Tenerife boasts an incredible variety of microclimates and landscapes, from the lush, ancient laurel forests of the Anaga mountains to the sun-drenched beaches of the southern coast. The island's annual Carnival of Santa Cruz de Tenerife is one of the largest and most vibrant in the world, showcasing a rich cultural blend. Its unique geography makes it a premier destination for hiking, stargazing, and watersports.",
        "factsAdvanced": [
            "Mount Teide has an elevation of 3,715 meters above sea level.",
            "Teide National Park was named a UNESCO World Heritage Site in 2007.",
            "Tenerife is home to the Pyramids of Güímar, six step pyramids of debated origin.",
            "The island's Carnival of Santa Cruz is widely considered the second most popular in the world."
        ]
    },
    {
        "id": "es-gran-canaria",
        "descriptionAdvanced": "Gran Canaria is often described as a 'miniature continent' due to the extraordinary variety of its landscapes and microclimates. Located in the heart of the Canary Islands archipelago, it features towering central mountains, deep ravines, and expansive coastal dunes. The mesmerizing Maspalomas Dunes in the south offer a striking contrast to the verdant pine forests and traditional villages found in the island's elevated interior. The capital, Las Palmas de Gran Canaria, is a cosmopolitan city with a rich colonial history, highlighted by the historic Vegueta district. Gran Canaria provides a perfect blend of beach resort relaxation, cultural exploration, and adventurous outdoor activities.",
        "factsAdvanced": [
            "The Maspalomas Dunes have been protected as a nature reserve since 1987.",
            "Roque Nublo, an iconic volcanic rock formation, stands 80 meters tall at an elevation of 1,813 meters.",
            "Christopher Columbus anchored in Las Palmas in 1492 before his first transatlantic voyage.",
            "Nearly half of the island's territory is designated as a UNESCO Biosphere Reserve."
        ]
    },
    {
        "id": "es-pyrenees",
        "descriptionAdvanced": "The Pyrenees form a formidable and majestic natural border between Spain and France, stretching from the Bay of Biscay to the Mediterranean Sea. This rugged mountain range is characterized by jagged peaks, deep verdant valleys, and crystal-clear alpine lakes known as ibones. The Spanish side features several extraordinary national parks, including Ordesa y Monte Perdido, renowned for its dramatic limestone canyons and cascading waterfalls. The region is steeped in history, dotted with isolated Romanesque churches and traditional mountain villages that have preserved their distinct cultural identities. Throughout the year, the Pyrenees offer exceptional outdoor pursuits, from world-class skiing in winter to spectacular trekking in summer.",
        "factsAdvanced": [
            "The mountain range extends for approximately 491 kilometers.",
            "Aneto is the highest peak in the Pyrenees, reaching an elevation of 3,404 meters.",
            "Ordesa y Monte Perdido National Park was established in 1918.",
            "The Pyrenees host some of the southernmost glaciers in Europe, though they are rapidly retreating."
        ]
    },
    {
        "id": "es-sierra-nevada",
        "descriptionAdvanced": "Sierra Nevada is a dramatic mountain range in the region of Andalusia, featuring the highest peaks in continental Spain. Despite its southern latitude and proximity to the sunny Mediterranean coast, it remains snow-capped for much of the year and hosts Europe's southernmost ski resort. The mountains are a haven of biodiversity, sheltering numerous endemic plant and animal species within the boundaries of a protected national park. The rugged terrain transitions beautifully into the Alpujarras, a series of historic valleys dotted with picturesque white villages of Moorish origin. Sierra Nevada provides a striking geographical contrast to the nearby historical wonders of Granada and the Alhambra.",
        "factsAdvanced": [
            "Mulhacén is the highest peak in the Sierra Nevada and the Iberian Peninsula at 3,479 meters.",
            "The Sierra Nevada National Park was established in 1999 and covers 85,883 hectares.",
            "It was designated a UNESCO Biosphere Reserve in 1986.",
            "The ski resort of Pradollano hosted the 1996 World Alpine Ski Championships."
        ]
    },
    {
        "id": "es-picos-europa",
        "descriptionAdvanced": "The Picos de Europa is a stunning mountain range located in northern Spain, spanning across the regions of Asturias, Cantabria, and Castile and León. Characterized by dramatic limestone massifs, deep gorges, and lush green valleys, it presents some of the most striking alpine scenery on the Iberian Peninsula. The iconic Naranjo de Bulnes peak challenges mountaineers from around the world, while the Cares Gorge offers one of the country's most spectacular hiking trails. The area is deeply rooted in Spanish history and legend, housing the Sanctuary of Covadonga, a site significant to the Christian reconquest. Traditional pastoral life continues in the remote high-altitude meadows, producing renowned artisanal cheeses.",
        "factsAdvanced": [
            "Picos de Europa was Spain's first national park, originally established in 1918 as Montaña de Covadonga.",
            "Torre de Cerredo is the highest peak in the range at 2,650 meters.",
            "The Cares Gorge trail is approximately 12 kilometers long, carved into the cliff faces.",
            "The region is one of the last strongholds of the Cantabrian brown bear and the Iberian wolf."
        ]
    },
    {
        "id": "es-costa-brava",
        "descriptionAdvanced": "The Costa Brava, translating to 'Rugged Coast', is a stunning stretch of shoreline in northeastern Catalonia running from Blanes up to the French border. This enchanting region is defined by its dramatic rocky cliffs plunging into the Mediterranean Sea, interspersed with hidden, pine-fringed coves and pristine beaches. Beyond its natural beauty, the Costa Brava is celebrated for its deep artistic connections, most notably as the home and inspiration of surrealist master Salvador Dalí. Charming medieval towns like Pals and Tossa de Mar offer historical intrigue alongside traditional Catalan gastronomy. The coastline perfectly balances lively seaside resorts with tranquil, unspoiled natural parks like Cap de Creus.",
        "factsAdvanced": [
            "The term 'Costa Brava' was first popularized by journalist Ferran Agulló in 1908.",
            "The Dalí Theatre-Museum is located in the town of Figueres.",
            "Cap de Creus Natural Park covers over 13,000 hectares of land and sea.",
            "The region features a renowned coastal footpath known as the Camí de Ronda."
        ]
    },
    {
        "id": "es-costa-del-sol",
        "descriptionAdvanced": "The Costa del Sol is Spain's famously sun-drenched coastal region in Andalusia, stretching along the Mediterranean Sea in the province of Málaga. Renowned for its seemingly endless stretches of sandy beaches and reliable year-round sunshine, it has developed into one of Europe's premier holiday destinations. The area effortlessly blends luxury resorts and bustling marinas, like the glamorous Puerto Banús, with the traditional charm of whitewashed Andalusian inland villages (pueblos blancos). It is also highly celebrated as the 'Costa del Golf' due to its exceptional concentration of world-class golf courses. From the cosmopolitan energy of Málaga city to the tranquil hillside retreats, the Costa del Sol offers a diverse Mediterranean experience.",
        "factsAdvanced": [
            "The Costa del Sol boasts over 150 kilometers of coastline.",
            "It enjoys an average of 320 days of sunshine per year.",
            "There are more than 70 golf courses located in the region.",
            "Pablo Picasso was born in the coastal city of Málaga in 1881."
        ]
    },
    {
        "id": "ES-AL",
        "descriptionAdvanced": "Almería is a captivating province in southeastern Andalusia, renowned for its dramatic landscapes and unique climatic extremes. It is home to the Tabernas Desert, the only true semi-desert in mainland Europe, which famously served as the cinematic backdrop for numerous 'Spaghetti Western' films in the 1960s and 70s. The provincial capital features the imposing Alcazaba, a magnificent Moorish fortress that dominates the city's skyline and speaks to its significant Islamic heritage. Along the coast lies the Cabo de Gata-Níjar Natural Park, a pristine expanse of volcanic rock formations, hidden coves, and unspoiled Mediterranean beaches. Almería is also an agricultural powerhouse, widely recognized for its vast expanse of greenhouses visible from space.",
        "factsAdvanced": [
            "The Alcazaba of Almería was built in the 10th century by Abd al-Rahman III.",
            "Tabernas Desert receives less than 250 millimeters of rainfall annually.",
            "Cabo de Gata-Níjar Natural Park covers 460 square kilometers of terrestrial and marine area.",
            "Almería's greenhouse agriculture covers approximately 30,000 hectares, often called the 'Sea of Plastic'."
        ]
    },
    {
        "id": "ES-CA",
        "descriptionAdvanced": "Cádiz is an ancient and vibrant port city situated on a narrow slice of land surrounded by the sea in southwestern Andalusia. Generally considered one of the oldest continuously inhabited cities in Western Europe, it was founded by the Phoenicians and has a rich maritime history as a base for Spanish exploration and trade. The city's charming old town is characterized by its narrow, winding alleys, sun-dappled plazas, and historic watchtowers. Cádiz is deeply beloved for its annual Carnival, renowned globally for its satirical music and boisterous street parties. Visitors can enjoy excellent seafood, relax on pristine urban beaches, and admire the golden dome of its majestic seafront cathedral.",
        "factsAdvanced": [
            "Cádiz was founded by the Phoenicians around 1104 BC as 'Gadir'.",
            "The city was the launching point for two of Christopher Columbus's voyages.",
            "The Spanish Constitution of 1812 was signed in Cádiz.",
            "Cádiz Cathedral, built between 1722 and 1838, mixes Baroque, Rococo, and Neoclassical styles."
        ]
    },
    {
        "id": "ES-CO",
        "descriptionAdvanced": "Córdoba is a deeply historic city in Andalusia that once stood as the dazzling intellectual and cultural capital of the Islamic caliphate in the Middle Ages. Its crown jewel is the magnificent Mezquita-Catedral, an architectural masterpiece that seamlessly blends a sprawling Moorish mosque characterized by iconic red-and-white striped arches with a soaring Renaissance cathedral built into its center. The city's enchanting historic center features a labyrinth of narrow streets, traditional whitewashed houses, and stunning, flower-filled patios that bloom vigorously in spring. The Roman bridge spanning the Guadalquivir River highlights Córdoba's ancient origins before its Islamic golden age. The city beautifully embodies the confluence of Roman, Moorish, Jewish, and Christian influences.",
        "factsAdvanced": [
            "The Mosque-Cathedral of Córdoba was designated a UNESCO World Heritage Site in 1984.",
            "In the 10th century, Córdoba was one of the largest and most advanced cities in the world.",
            "The annual Patio Festival of Córdoba was recognized by UNESCO as Intangible Cultural Heritage in 2012.",
            "The Roman bridge of Córdoba was built in the early 1st century BC across the Guadalquivir river."
        ]
    },
    {
        "id": "ES-GR",
        "descriptionAdvanced": "Granada is a mesmerizing city in the foothills of the Sierra Nevada mountains, profoundly shaped by its long history under Moorish rule. It is universally famous for the Alhambra, an awe-inspiring palace and fortress complex that represents the pinnacle of Nasrid art and architecture, featuring intricate stucco work, stunning tile mosaics, and the serene Generalife gardens. The Albaicín neighborhood, with its steep, winding streets and whitewashed houses, preserves the layout of the medieval Moorish city and offers spectacular views of the Alhambra. Granada was the last stronghold of the Islamic empire in Spain, surrendering to the Catholic Monarchs in 1492. Today, it boasts a vibrant university culture and is renowned for its enduring tradition of free tapas.",
        "factsAdvanced": [
            "The Alhambra and Generalife were inscribed as UNESCO World Heritage Sites in 1984.",
            "Granada fell to the Catholic Monarchs on January 2, 1492.",
            "The Albaicín neighborhood retains its original 11th-century Moorish street plan.",
            "The University of Granada, founded in 1531, is one of the oldest in Spain."
        ]
    },
    {
        "id": "ES-H",
        "descriptionAdvanced": "Huelva is a province in southwestern Andalusia bordering Portugal, offering a landscape that transitions from golden sandy beaches to heavily forested inland hills. It holds monumental historical significance as the departure point for Christopher Columbus's first voyage to the Americas, a legacy celebrated at the La Rábida Monastery and the Wharf of the Caravels. The province is also home to the spectacular Doñana National Park, a critical wetland reserve boasting extraordinary biodiversity and sheltering the endangered Iberian lynx. The local culture is deeply intertwined with its environment, featuring renowned gastronomy centered around exceptional Iberian ham from Jabugo and fresh Atlantic seafood. The annual El Rocío pilgrimage draws hundreds of thousands of devotees to a small village in the region.",
        "factsAdvanced": [
            "Christopher Columbus departed from the port of Palos de la Frontera in Huelva in 1492.",
            "Doñana National Park was declared a UNESCO World Heritage Site in 1994.",
            "The El Rocío pilgrimage takes place annually on Pentecost weekend.",
            "The Riotinto mines in Huelva have been exploited for copper and silver for over 5,000 years."
        ]
    },
    {
        "id": "ES-J",
        "descriptionAdvanced": "Jaén is an Andalusian province that is universally recognized as the 'World Capital of Olive Oil,' characterized by its seemingly infinite rolling hills blanketed with olive groves. The provincial capital features a monumental Renaissance cathedral and the imposing Castle of Santa Catalina, which commands stunning views over the dramatic landscape. Jaén is deeply historical, home to the magnificent Renaissance cities of Úbeda and Baeza, whose impeccably preserved architectural treasures echo the wealth and power of the 16th century. The region also offers rugged natural beauty through the Sierras de Cazorla, Segura y Las Villas Natural Park, the largest protected area in Spain. The combination of its supreme olive oil gastronomy and rich architectural heritage makes it a profound cultural destination.",
        "factsAdvanced": [
            "Jaén produces roughly 20% of the world's olive oil supply.",
            "The Renaissance monumental ensembles of Úbeda and Baeza became UNESCO World Heritage Sites in 2003.",
            "Sierras de Cazorla, Segura y Las Villas Natural Park covers over 214,000 hectares.",
            "The Cathedral of Jaén was designed by the acclaimed Renaissance architect Andrés de Vandelvira."
        ]
    },
    {
        "id": "ES-MA",
        "descriptionAdvanced": "Málaga is a dynamic port city on the Costa del Sol, combining a rich, multi-layered history with a remarkably vibrant contemporary cultural scene. Originally founded by the Phoenicians, its skyline is dominated by the Alcazaba, an 11th-century Moorish palace-fortress, and the ruins of a Roman amphitheater nestled at its base. As the birthplace of Pablo Picasso, the city has reinvented itself as a premier destination for art lovers, hosting the acclaimed Picasso Museum, the Centre Pompidou, and a flourishing street art district. The historic center features a majestic Renaissance cathedral, elegant pedestrian streets like Calle Larios, and lively tapas bars. Beyond the city limits, the province offers beautiful Mediterranean beaches, rugged mountains, and the famous Caminito del Rey gorge walk.",
        "factsAdvanced": [
            "Málaga was founded by the Phoenicians as 'Malaka' around 770 BC.",
            "Pablo Picasso was born in Málaga on October 25, 1881.",
            "The Málaga Cathedral is affectionately called 'La Manquita' (The One-Armed Lady) because its south tower was never finished.",
            "The Alcazaba of Málaga is considered one of the best-preserved Moorish fortresses in Spain."
        ]
    },
    {
        "id": "ES-SE",
        "descriptionAdvanced": "Sevilla is the capital of Andalusia, a city that embodies the quintessential spirit of southern Spain with its flamenco rhythms, vibrant festivals, and striking mudéjar architecture. The city's monumental heart features the immense Gothic Cathedral, resting place of Christopher Columbus, and the iconic Giralda bell tower, originally a Moorish minaret. Adjacent lies the Real Alcázar, a stunning royal palace complex renowned for its exquisite tile work, intricate archways, and lush gardens that reflect centuries of Christian and Islamic influence. Sevilla's winding medieval streets in the Barrio Santa Cruz are filled with orange trees and lively tapas bars. The city's cultural calendar is highlighted by the solemn processions of Semana Santa and the joyous celebration of the Feria de Abril.",
        "factsAdvanced": [
            "Sevilla Cathedral is the largest Gothic cathedral in the world.",
            "The Alcázar, Cathedral, and Archivo de Indias were collectively named a UNESCO World Heritage Site in 1987.",
            "The Giralda tower reaches a height of 104 meters.",
            "Ferdinand Magellan's expedition to circumnavigate the globe departed from Sevilla in 1519."
        ]
    },
    {
        "id": "ES-HU",
        "descriptionAdvanced": "Huesca is a captivating province in the Aragon region of northeastern Spain, serving as a prominent gateway to the central Pyrenees. The geography is extraordinarily diverse, transitioning from the arid, steppe-like plains of the south to the dramatic, snow-capped peaks and deep canyons of Ordesa y Monte Perdido National Park in the north. The province is rich in medieval history, dotted with spectacular Romanesque churches and formidable fortresses such as the Loarre Castle, which overlooks the plains. It is an unparalleled destination for outdoor adventure, offering world-class hiking, canyoning in the Sierra de Guara, and premier skiing in the winter. The historic capital city blends its ancient Iberian origins with charming Gothic architecture and a relaxed atmosphere.",
        "factsAdvanced": [
            "Loarre Castle, built in the 11th century, is one of the oldest Romanesque castles in Spain.",
            "Ordesa y Monte Perdido National Park was designated a UNESCO World Heritage site in 1997.",
            "The province's highest peak, Aneto, reaches 3,404 meters in elevation.",
            "The pre-Pyrenees area of Sierra de Guara is widely considered the birthplace of modern canyoning."
        ]
    },
    {
        "id": "ES-TE",
        "descriptionAdvanced": "Teruel is a remarkable province in the autonomous community of Aragon, celebrated for its rugged landscapes, remote charm, and extraordinary Mudéjar architecture. The provincial capital features stunning towers and the Cathedral of Santa María, adorned with intricate brickwork and brilliant ceramic tiles that showcase the exquisite blend of Islamic and Christian artistic traditions. Teruel is famously associated with the tragic medieval legend of the Lovers of Teruel, whose mausoleum attracts romantics and historians alike. The sparsely populated province is characterized by dramatic mountainous terrain and picturesque medieval villages like Albarracín, often cited as one of the most beautiful in Spain. Furthermore, the region has gained prominence for its significant dinosaur fossil discoveries at the Dinópolis center.",
        "factsAdvanced": [
            "The Mudéjar Architecture of Aragon, prominently featured in Teruel, is a UNESCO World Heritage Site.",
            "Teruel is the least populated provincial capital in Spain.",
            "The legend of the Lovers of Teruel dates back to the 13th century.",
            "Dinópolis is one of the largest paleontology parks in Europe, highlighting local fossil finds."
        ]
    },
    {
        "id": "ES-Z",
        "descriptionAdvanced": "Zaragoza is the vibrant capital of the Aragon region, strategically located along the banks of the Ebro River midway between Madrid and Barcelona. The city boasts a profound historical legacy left by the Romans, Moors, Jews, and Christians, visibly spanning over two millennia. Its crowning architectural jewel is the Basilica of Nuestra Señora del Pilar, a magnificent Baroque edifice with towering cupolas that stands majestically by the river. Another significant landmark is the Aljafería Palace, an exquisite 11th-century Islamic fortress that highlights the city's important Moorish past. Zaragoza seamlessly blends its rich monumental heritage with a lively modern atmosphere, renowned for its bustling tapas scene and welcoming culture.",
        "factsAdvanced": [
            "Zaragoza was founded as the Roman colony Caesaraugusta in 14 BC.",
            "The Aljafería Palace serves today as the seat of the regional parliament of Aragon.",
            "The Basilica of Our Lady of the Pillar is considered the first church dedicated to Mary in history.",
            "The city hosted the Expo 2008 international exhibition focused on water and sustainable development."
        ]
    },
    {
        "id": "ES-GC",
        "descriptionAdvanced": "Las Palmas is a Spanish province encompassing the eastern half of the Canary Islands, primarily including Gran Canaria, Fuerteventura, and Lanzarote. This province exhibits an astonishing geological diversity, ranging from the lush, mountainous interior of Gran Canaria to the vast, windswept dunes of Fuerteventura and the striking, lunar-like volcanic landscapes of Lanzarote. The capital city, Las Palmas de Gran Canaria, serves as a bustling, cosmopolitan hub with a significant historical quarter and a world-renowned urban beach, Las Canteras. The region's unique geography and consistent Atlantic climate make it a global hotspot for watersports, particularly surfing and windsurfing. Furthermore, the visionary architecture of César Manrique on Lanzarote perfectly harmonizes art with the stark volcanic environment.",
        "factsAdvanced": [
            "Timanfaya National Park in Lanzarote features a landscape shaped by volcanic eruptions between 1730 and 1736.",
            "Fuerteventura is the second largest of the Canary Islands and the closest to the African coast.",
            "Las Palmas de Gran Canaria was founded in 1478 by Juan Rejón.",
            "Lanzarote was entirely declared a UNESCO Biosphere Reserve in 1993."
        ]
    },
    {
        "id": "ES-TF",
        "descriptionAdvanced": "Santa Cruz de Tenerife is a Spanish province encompassing the western islands of the Canary Islands archipelago, namely Tenerife, La Palma, La Gomera, and El Hierro. The province is characterized by spectacular volcanic topography, profound ecological diversity, and ancient laurel forests that serve as relics of the Tertiary period. The focal point is Tenerife's Mount Teide, Spain's highest peak, but the other islands offer equally compelling natural wonders, such as the Caldera de Taburiente on La Palma and the rugged ravines of La Gomera. The capital city, Santa Cruz, is a vibrant port town famous for its spectacular modern auditorium and one of the world's most exuberant Carnival celebrations. These islands are globally recognized for their pristine night skies, hosting world-class astronomical observatories.",
        "factsAdvanced": [
            "The province includes four distinct national parks across its islands.",
            "Garajonay National Park in La Gomera is a UNESCO World Heritage site known for its ancient laurisilva forest.",
            "El Hierro is recognized as a pioneer in renewable energy, aiming for complete self-sufficiency.",
            "The Roque de los Muchachos Observatory on La Palma sits at an altitude of 2,396 meters."
        ]
    },
    {
        "id": "ES-AB",
        "descriptionAdvanced": "Albacete is a province situated in the autonomous community of Castile-La Mancha, characterized by its vast plains and dramatic mountainous peripheries. Historically known for the production of finely crafted knives and cutlery, the capital city houses a dedicated museum that celebrates this centuries-old industrial heritage. The provincial landscape dramatically shifts from the flat expanses of La Mancha to the spectacular gorges and lush river valleys of the Calares del Mundo y de la Sima Natural Park. Albacete is famous for its vibrant Feria, an annual September festival held in a unique horseshoe-shaped fairground that draws millions of visitors. The rural areas preserve traditional Manchego culture, featuring ancient castles, vineyards, and agricultural traditions.",
        "factsAdvanced": [
            "The Albacete Cutlery Museum is located in the historic Casa de Hortelano.",
            "The Feria de Albacete has been declared a Festival of International Tourist Interest.",
            "The source of the Mundo River features a spectacular waterfall plunging from a cave.",
            "Albacete is the largest and most populous city in the region of Castile-La Mancha."
        ]
    },
    {
        "id": "ES-CR",
        "descriptionAdvanced": "Ciudad Real is a province located in the heart of the Iberian Peninsula within the Castile-La Mancha region, profoundly intertwined with the literary legacy of Don Quixote. The expansive, sun-baked plains are dotted with historic windmills, particularly in towns like Campo de Criptana, perfectly evoking Miguel de Cervantes's famous novel. The province boasts exceptional ecological significance, home to the Tablas de Daimiel National Park, a vital wetland sanctuary for migrating waterfowl. It is also an area with significant volcanic history, evident in the crater lakes and distinct geological formations scattered across the Campo de Calatrava. Culturally, Ciudad Real features charming historic towns like Almagro, famous for its impeccably preserved 17th-century open-air theater.",
        "factsAdvanced": [
            "The Corral de Comedias in Almagro is the only fully preserved 17th-century theater in Spain still in use.",
            "Tablas de Daimiel was declared a National Park in 1973 to protect its unique wetland ecosystem.",
            "The windmills of Campo de Criptana inspired the iconic 'tilting at windmills' scene in Don Quixote.",
            "Ciudad Real was founded by King Alfonso X the Wise in 1255."
        ]
    },
    {
        "id": "ES-CU",
        "descriptionAdvanced": "Cuenca is an extraordinary province in Castile-La Mancha, widely celebrated for its rugged natural beauty and remarkable historical architecture. The provincial capital, majestically perched atop a steep limestone spur between the Júcar and Huécar rivers, is globally famous for its gravity-defying 'Hanging Houses' (Casas Colgadas) built into the cliff faces. The ancient walled city is a well-preserved medieval fortress town featuring winding cobblestone streets, a magnificent Gothic cathedral, and a thriving modern art scene. Beyond the city, the province features the Enchanted City (Ciudad Encantada), an enchanting natural landscape filled with bizarre and towering karst rock formations sculpted by water and wind. The deep pine forests and dramatic gorges offer spectacular opportunities for rural tourism and outdoor adventure.",
        "factsAdvanced": [
            "The Historic Walled Town of Cuenca was declared a UNESCO World Heritage Site in 1996.",
            "The Casas Colgadas house the Spanish Museum of Abstract Art.",
            "Cuenca Cathedral was one of the earliest examples of Gothic architecture in Spain, begun in 1196.",
            "The Ciudad Encantada was declared a Natural Site of National Interest in 1929."
        ]
    },
    {
        "id": "ES-GU",
        "descriptionAdvanced": "Guadalajara is a province in the northern part of Castile-La Mancha, serving as a tranquil and picturesque transition between the vast central plateau and the rugged Iberian System. The region is notable for its 'Black Architecture' villages, where traditional houses are constructed entirely from dark slate, blending seamlessly into the mountain landscape. The historic town of Sigüenza is a major cultural highlight, featuring an imposing medieval castle that now serves as a parador, and a striking cathedral. The province's literary significance was famously cemented by Camilo José Cela's travelogue, 'Journey to the Alcarria', which highlights the rustic charm and serene beauty of the countryside. Guadalajara perfectly balances rich medieval heritage with vast, unspoiled natural spaces ideal for hiking.",
        "factsAdvanced": [
            "The Infantado Palace in Guadalajara city is a masterpiece of late Gothic and Renaissance architecture.",
            "Sigüenza Cathedral dates back to the 12th century and originally served a defensive function.",
            "The Hayedo de Tejera Negra is one of the southernmost beech forests in Europe.",
            "The province's Alcarria region is renowned for its high-quality, denomination-protected honey."
        ]
    },
    {
        "id": "ES-TO",
        "descriptionAdvanced": "Toledo is a prominent province in central Spain, historically serving as the geographical and spiritual heart of the Iberian Peninsula. The magnificent capital city, dramatically encircled by the Tagus River, is often referred to as the 'City of Three Cultures' due to its rich heritage of Christian, Jewish, and Muslim communities living together. Its incredibly dense historic center is a labyrinth of narrow streets, housing monumental landmarks like the commanding Alcázar, the intricate Synagogue of Santa María la Blanca, and the spectacular Gothic Cathedral. Toledo's legacy is further enriched by its association with the renowned painter El Greco and its centuries-old tradition of exquisite sword-making and damascene metalwork. The wider province encompasses the classic landscapes of La Mancha, featuring historic castles and sweeping plains.",
        "factsAdvanced": [
            "The Historic City of Toledo was declared a UNESCO World Heritage site in 1986.",
            "Toledo Cathedral is considered the magnum opus of the Gothic style in Spain.",
            "The city was the capital of the Visigothic Kingdom from the 6th to the 8th century.",
            "El Greco lived in Toledo from 1577 until his death in 1614, painting many of his masterpieces there."
        ]
    },
    {
        "id": "ES-AV",
        "descriptionAdvanced": "Ávila is a profoundly historic province in the autonomous community of Castile and León, characterized by its high altitude and dramatic mountainous terrain. The capital city is instantly recognizable by its spectacularly preserved 11th-century Romanesque walls, which completely encircle the medieval old town and feature over 80 robust semicircular towers. Ávila is deeply associated with Saint Teresa of Ávila, a prominent 16th-century mystic and reformer whose legacy permeates the city's numerous convents and churches. Beyond the capital, the province is dominated by the rugged Sierra de Gredos, a majestic mountain range offering exceptional hiking trails and sheltering diverse wildlife, including the majestic Spanish ibex. The region perfectly embodies the austere beauty and profound spirituality of traditional Castile.",
        "factsAdvanced": [
            "The Walls of Ávila extend for approximately 2.5 kilometers and include 88 watchtowers.",
            "The Old Town of Ávila, with its Extra-Muros Churches, is a UNESCO World Heritage Site.",
            "Ávila is the highest provincial capital in Spain, situated at 1,132 meters above sea level.",
            "Pico Almanzor in the Sierra de Gredos is the highest point in central Spain at 2,592 meters."
        ]
    },
    {
        "id": "ES-BU",
        "descriptionAdvanced": "Burgos is a distinguished province in northern Spain within the Castile and León region, historically significant as the ancient capital of the Kingdom of Castile. The jewel of the province is the city of Burgos, home to an awe-inspiring French Gothic cathedral that serves as a masterpiece of medieval architecture and the resting place of the legendary military leader El Cid. The region is a critical crossroads for the Camino de Santiago pilgrimage route, dotted with historic monasteries such as Las Huelgas and the Charterhouse of Miraflores. Furthermore, the province holds immense global archaeological importance due to the Atapuerca Mountains, where some of the oldest hominin fossils in Europe have been discovered. The landscape blends sweeping plateaus with picturesque vineyards belonging to the prestigious Ribera del Duero wine region.",
        "factsAdvanced": [
            "Burgos Cathedral was inscribed as a UNESCO World Heritage site in 1984.",
            "The archaeological site of Atapuerca yielded human remains dating back over a million years.",
            "Rodrigo Díaz de Vivar, known as El Cid, was born in a village near Burgos in 1048.",
            "The province's Ribera del Duero region is world-renowned for its high-quality red wines produced from Tempranillo grapes."
        ]
    },
    {
        "id": "ES-LE",
        "descriptionAdvanced": "León is an expansive province in the northwest of Spain, boasting a majestic legacy as one of the fundamental historic kingdoms that forged the Spanish nation. The capital city is celebrated for its stunning Gothic cathedral, famous for its magnificent stained-glass windows that bathe the interior in kaleidoscopic light. The province is deeply intertwined with the Camino de Santiago, featuring extraordinary landmarks like the Renaissance-style San Marcos convent and the Episcopal Palace of Astorga designed by Antoni Gaudí. The natural landscape is equally spectacular, highlighted by the striking Roman gold-mining landscape of Las Médulas and the dramatic limestone peaks of the Picos de Europa in the north. León harmoniously combines grand medieval monuments with profound natural beauty and rugged traditions.",
        "factsAdvanced": [
            "Las Médulas was the largest open-pit gold mine in the entire Roman Empire.",
            "León Cathedral features over 1,800 square meters of original medieval stained glass.",
            "The Kingdom of León was a major independent kingdom in the Iberian Peninsula from 910 to 1230.",
            "The Casa Botines in León is one of only three buildings constructed by Gaudí outside Catalonia."
        ]
    },
    {
        "id": "ES-P",
        "descriptionAdvanced": "Palencia is a historically rich province in the autonomous community of Castile and León, nestled between the sweeping plains of the Tierra de Campos and the rugged Cantabrian Mountains. Often referred to as a hidden treasure of Romanesque architecture, the province is dotted with an extraordinary number of exquisitely preserved medieval churches and monasteries along the Camino de Santiago. The capital city, though tranquil, boasts a magnificent Gothic cathedral affectionately known as the 'Unknown Beauty' due to its vast scale and relatively low profile among tourists. The northern mountainous region features pristine natural parks with stunning reservoirs and excellent hiking trails. Palencia offers an authentic, off-the-beaten-path experience highlighting the deep historical roots of rural Spain.",
        "factsAdvanced": [
            "The Cathedral of San Antolín in Palencia is the third largest cathedral in Spain.",
            "Palencia was the site of the first university founded in Spain, established around 1212.",
            "The province boasts one of the highest concentrations of Romanesque monuments in all of Europe.",
            "The Canal de Castilla, a major 18th-century engineering feat, runs extensively through the province."
        ]
    },
    {
        "id": "ES-SA",
        "descriptionAdvanced": "Salamanca is an illustrious province in western Spain, renowned globally for its monumental capital city that gleams with golden Villamayor sandstone architecture. The city centers around the magnificent Plaza Mayor, widely considered one of the most beautiful and harmonious squares in the country. Salamanca's profound prestige stems from its historic university, which has been a beacon of learning and intellectual thought since the early 13th century. Visitors are captivated by the intricate Plateresque facades, the remarkable juxtaposition of the Old and New Cathedrals, and the vibrant, youthful atmosphere driven by its massive student population. The wider province features robust agricultural plains, the rugged Arribes del Duero natural park bordering Portugal, and a rich tradition of cured Iberian meats.",
        "factsAdvanced": [
            "The University of Salamanca, founded in 1218, is the oldest existing university in Spain.",
            "The Old City of Salamanca was designated a UNESCO World Heritage Site in 1988.",
            "Salamanca is home to two cathedrals joined together; the Old Cathedral (12th century) and New Cathedral (16th century).",
            "The Plaza Mayor was constructed in the 18th century in traditional Spanish Baroque style."
        ]
    },
    {
        "id": "ES-SG",
        "descriptionAdvanced": "Segovia is a captivating province located just north of Madrid, offering a majestic journey into Spain's rich architectural and royal history. The capital city is dominated by three spectacular monuments: the flawlessly preserved Roman Aqueduct that cuts through the town, the soaring late-Gothic Cathedral, and the fairy-tale Alcázar castle perched dramatically on a rocky promontory. Beyond the capital, the province is home to magnificent royal retreats such as the Royal Palace of La Granja de San Ildefonso, featuring extravagant Baroque gardens and monumental fountains that rival Versailles. The landscape is defined by the pine-covered slopes of the Sierra de Guadarrama, providing stunning natural contrast to the historic stone towns and Romanesque churches. Segovia is also famous for its traditional gastronomy, particularly its celebrated roast suckling pig.",
        "factsAdvanced": [
            "The Roman Aqueduct of Segovia features over 160 arches and was built without mortar.",
            "The Old Town of Segovia and its Aqueduct became a UNESCO World Heritage Site in 1985.",
            "The Alcázar of Segovia is rumored to have inspired Walt Disney's Cinderella Castle.",
            "The Royal Palace of La Granja was built in the early 18th century by King Philip V."
        ]
    },
    {
        "id": "ES-SO",
        "descriptionAdvanced": "Soria is a tranquil and deeply historic province in the eastern part of Castile and León, characterized by its sparse population and vast, unspoiled landscapes. It holds significant cultural importance in Spain as the setting for the epic heroism of Numantia, an ancient Celtiberian settlement that famously resisted Roman conquest. The province features austere but beautiful medieval architecture, with a wealth of Romanesque arcades, rural chapels, and castles scattered across the high plains. The natural environment is exceptionally poetic, highlighted by the mysterious Black Lagoon (Laguna Negra) and the sweeping canyon of the Río Lobos. Soria's rustic charm, serene environment, and evocative medieval ruins have famously inspired acclaimed Spanish poets like Antonio Machado.",
        "factsAdvanced": [
            "Soria is the least populated province in Spain, with an average density of less than 9 inhabitants per square kilometer.",
            "The ancient settlement of Numantia fell to the Roman Republic in 133 BC after a legendary siege.",
            "The Río Lobos Canyon is a protected natural park known for its large colony of griffon vultures.",
            "The hermitage of San Baudelio de Berlanga features unique Mozarabic architecture and 11th-century frescoes."
        ]
    }
]

with open('spain_seo_batch_1.json', 'w', encoding='utf-8') as f:
    json.dump(pois, f, indent=2)

print("Created spain_seo_batch_1.json")
