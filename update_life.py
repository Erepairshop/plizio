import re
import os

file_path = "/mnt/c/Users/User/plizio-repo/lib/visualLab/data/poiExtraPeruLifeV2.ts"

content_updates = {
    "parque-de-las-leyendas-life-v2": {
        "desc": "The Parque de las Leyendas is Lima's premier zoo and botanical garden, offering a fascinating journey through Peru's three distinct natural regions: the coast, the mountains, and the jungle. Located in the San Miguel district, it is built upon a significant archaeological complex belonging to the ancient Lima culture. This unique blend allows visitors to admire native wildlife like condors, jaguars, and sea lions while exploring ancient 'huacas' or adobe pyramids. The park is a favorite for local families, providing a green escape and an educational experience about Peru's rich biodiversity and history. It remains a cornerstone of the city's cultural and recreational life, showcasing the harmony between nature and the past.",
        "facts": [
            "Home to over 200 species of animals from all three of Peru's geographical regions.",
            "Contains 54 archaeological sites (huacas) within its grounds.",
            "Features an impressive botanical garden with thousands of native plant species.",
            "Founded in 1964 by the philanthropist Felipe Benavides Barreda.",
            "Includes a popular international zone with animals from around the world."
        ]
    },
    "paracas-national-reserve-life-v2": {
        "desc": "The Paracas National Reserve is a breathtaking coastal desert sanctuary where the arid sand dunes of Ica meet the cold, nutrient-rich waters of the Pacific Ocean. Established to protect the region's incredible marine biodiversity and its fragile desert ecosystem, it is home to one of the largest colonies of sea lions and Humboldt penguins in the world. The reserve's striking red sand beaches and dramatic sea cliffs create a landscape of otherworldly beauty. It also preserves the memory of the ancient Paracas culture, known for its exquisite textiles and skull deformation practices. Visitors can explore the reserve by land or boat, witnessing a vibrant world of flamingos, dolphins, and countless seabirds. It remains one of Peru's most vital and spectacular natural monuments.",
        "facts": [
            "The oldest marine reserve in Peru, established in 1975.",
            "Home to the famous 'Candelabra' geoglyph carved into a hillside.",
            "Covers an area of 335,000 hectares, including the Paracas Peninsula.",
            "Important stopover for millions of migratory birds each year.",
            "Site of the former 'Cathedral' rock formation, partially destroyed in a 2007 earthquake."
        ]
    },
    "salinas-aguada-blanca-life-v2": {
        "desc": "The Salinas and Aguada Blanca National Reserve is a sprawling high-altitude sanctuary that protects the vital watersheds and wildlife of the Arequipa region. Situated at an average elevation of over 4,000 meters, this vast landscape is dominated by snow-capped volcanoes and shimmering salt lagoons. It was created primarily to protect the habitats of the vicuña, a graceful Andean camelid prized for its incredibly soft wool. The reserve also provides a home to Andean flamingos, which can often be seen wading in the shallow, mineral-rich waters. The harsh but beautiful environment is essential for the water supply of the city of Arequipa and surrounding agriculture. It is a place of profound silence, where the grandeur of the Andes is on full display.",
        "facts": [
            "Located between the departments of Arequipa and Moquegua.",
            "Essential for the conservation of the endangered vicuña.",
            "Features the Salinas salt flat, which is actively harvested by local communities.",
            "Includes the majestic Misti, Chachani, and Pichu Pichu volcanoes.",
            "A popular stop for travelers on the way to the Colca Canyon."
        ]
    },
    "parque-de-la-papa-life-v2": {
        "desc": "The Potato Park (Parque de la Papa) is a unique indigenous-led conservation area in the Sacred Valley near Pisac, dedicated to preserving Peru's incredible genetic diversity of native potatoes. Managed by six Quechua communities, the park protects over 1,300 varieties of potatoes, many of which are found nowhere else on Earth. This 'biocultural heritage territory' is a living laboratory where ancient agricultural techniques are practiced alongside modern conservation efforts. Visitors can learn about the spiritual and cultural importance of the potato to Andean people while enjoying the stunning mountain scenery. The park also promotes sustainable tourism, traditional medicine, and local crafts. It stands as a global model for indigenous sovereignty and the protection of food security in the face of climate change.",
        "facts": [
            "Governed by approximately 6,000 members of local Quechua communities.",
            "Protects one of the world's largest collections of potato varieties in their natural habitat.",
            "Recognized globally for its innovative approach to biocultural conservation.",
            "Includes various microclimates ranging from 3,200 to 5,000 meters in altitude.",
            "Features a community-run restaurant that serves traditional potato-based dishes."
        ]
    },
    "chanchamayo-coffee-farms-life-v2": {
        "desc": "Chanchamayo is the heart of Peru's central jungle and the primary region for the country's world-class coffee production. The lush, misty mountains of the Selva Central provide the perfect climate for growing high-quality Arabica beans under the shade of native forest trees. Visitors to the farms can follow the entire coffee journey, from the bright red cherries on the trees to the fragrant roasting process. The region is known for its commitment to organic and fair-trade practices, supporting thousands of small-scale farmers. Beyond coffee, Chanchamayo is a land of spectacular waterfalls and incredible biodiversity, where the Andean foothills meet the Amazon. A visit to these farms offers a deep appreciation for the hard work and natural beauty behind every cup of Peruvian coffee.",
        "facts": [
            "Peru is one of the world's leading exporters of organic coffee.",
            "The region's coffee is grown at altitudes between 1,000 and 1,800 meters.",
            "Includes the city of La Merced, known as the 'Coffee Capital' of Peru.",
            "Farms often produce other tropical goods like honey, citrus, and ginger.",
            "Home to several award-winning coffee brands recognized at international competitions."
        ]
    },
    "manglares-de-tumbes-life-v2": {
        "desc": "The Tumbes Mangroves National Sanctuary is a unique coastal ecosystem in northernmost Peru, where the freshwater of the Tumbes River meets the Pacific Ocean. This dense labyrinth of mangrove roots and tidal channels is the only place in Peru where these saltwater-tolerant trees flourish. It provides a vital habitat for a wide range of wildlife, including the rare American crocodile and numerous species of crustaceans and birds. The sanctuary is also economically essential for local communities who sustainably harvest black ark clams and mangrove crabs. Exploring the mangroves by boat offers a serene and primeval experience, far removed from the desert landscapes of the south. It remains a critical bastion of biodiversity on the border between Peru and Ecuador.",
        "facts": [
            "The only mangrove forest in Peru.",
            "Protects the endangered American crocodile (Crocodylus acutus).",
            "Covers an area of 2,972 hectares.",
            "Famous for its delicious black ark clams (conchas negras).",
            "Designated as a Ramsar site for its international importance as a wetland."
        ]
    },
    "allpahuayo-mishana-life-v2": {
        "desc": "The Allpahuayo Mishana National Reserve, located near Iquitos, is a legendary site among biologists for its extraordinary levels of biodiversity. It is famous for protecting the largest concentration of white-sand forests (varillales) in the Peruvian Amazon, which host many rare and endemic species found nowhere else. Despite its relatively small size, it holds world records for the number of tree and bird species found in a single area. The reserve is a vital laboratory for studying Amazonian ecosystems and the impacts of soil types on plant evolution. Visitors can explore a network of trails that lead through different types of jungle, offering a high chance of spotting unique primates and exotic birds. It is a true 'hidden gem' of the Amazon, essential for the preservation of the rainforest's most specialized life forms.",
        "facts": [
            "Holds the world record for the highest number of tree species in one hectare.",
            "Home to the Ancient Antwren, a bird species discovered only in the late 1990s.",
            "Located just 26 kilometers from the city of Iquitos.",
            "Protects the unique and fragile white-sand forest ecosystems.",
            "A primary destination for serious birdwatchers and nature photographers."
        ]
    },
    "huascaran-flora-fauna-life-v2": {
        "desc": "Beyond its famous glaciers, the Huascarán National Park is a vital sanctuary for high-altitude Andean flora and fauna. The park is home to the spectacular Puya Raimondii, a giant bromeliad that can grow up to 12 meters tall and lives for nearly a century before blooming once and dying. The rugged mountain valleys provide a haven for the elusive spectacled bear, the only bear species native to South America, and the majestic Andean condor. Many high-altitude lakes are frequented by Andean geese and giant coots, creating vibrant splashes of life against the gray rock and white ice. The park's diverse ecosystems, ranging from sub-tropical forests to alpine tundras, are essential for the survival of these specialized species. It remains one of the most important centers for biodiversity conservation in the Andes.",
        "facts": [
            "The Puya Raimondii is the world's largest bromeliad and can produce millions of seeds.",
            "Home to the North Andean huemul, a rare mountain deer.",
            "Contains over 700 species of high-altitude plants.",
            "Protects the headwaters of several major Peruvian rivers.",
            "Designated as a UNESCO Biosphere Reserve and World Heritage site."
        ]
    },
    "megantoni-sanctuary-life-v2": {
        "desc": "The Megantoni National Sanctuary is a remote and pristine wilderness that protects the sacred Pongo de Mainique, a dramatic canyon where the Urubamba River cuts through the final ridge of the Andes to enter the Amazon basin. This transition zone is one of the most biodiverse regions on Earth, acting as a vital corridor for species moving between the highlands and the lowlands. The sanctuary is characterized by steep, mist-shrouded mountains, hundreds of waterfalls, and dense cloud forests teeming with life. It is home to several isolated indigenous groups and provides a critical refuge for jaguars, tapirs, and rare monkeys. Access to Megantoni is difficult and requires a journey by boat through the powerful rapids of the Pongo, making it one of Peru's most untouched natural treasures. It stands as a symbol of the raw, untamed power of the Peruvian wilderness.",
        "facts": [
            "Protects the Pongo de Mainique, considered a sacred site by the Matsigenka people.",
            "Covers an area of over 215,000 hectares of primary rainforest.",
            "Home to a high number of endemic orchid and butterfly species.",
            "Acts as a natural barrier and buffer for the Camisea gas project area.",
            "Features spectacular waterfalls that drop directly into the Urubamba River."
        ]
    },
    "hacienda-san-jose-agriculture-life-v2": {
        "desc": "Hacienda San José, located in the fertile Chincha Valley, is a historic agricultural estate that provides a window into the colonial and Afro-Peruvian history of the coast. Originally established in the 17th century by Jesuit priests, it grew into one of the most important sugar and cotton plantations in Peru. The estate is famous for its beautiful colonial mansion and its network of underground tunnels that were used to secretly transport enslaved people to avoid taxes. Today, it is a cultural monument and a popular hotel that celebrates its heritage through traditional music, dance, and gastronomy. The surrounding fields continue to be productive, reflecting the region's long agricultural tradition. A visit to San José is an evocative journey into the complex social and economic layers of Peru's coastal history.",
        "facts": [
            "The colonial mansion is famous for its beautiful chapel and grand courtyards.",
            "The underground tunnels are estimated to be over 35 kilometers long.",
            "A major center for the development of Afro-Peruvian culture and rhythms.",
            "Declared a National Historical Monument in 1970.",
            "Located in the district of El Carmen, known for its vibrant folk festivals."
        ]
    },
    "zooloogico-huachipa-life-v2": {
        "desc": "The Huachipa Zoo, located on the eastern outskirts of Lima, is a popular destination for families and a key player in wildlife conservation and education in Peru. Set along the banks of the Rímac River, the park is known for its beautiful landscaping and its focus on providing naturalistic habitats for its animals. It houses a large collection of both native Peruvian species and exotic animals from around the world, including a notable population of white tigers. The zoo participates in various breeding programs for endangered species and offers interactive exhibits that teach children about the importance of protecting the environment. Its bird sanctuary and aquarium are particularly well-regarded, offering a close-up look at the diverse life of the coast and the jungle. It remains a cherished green space and a vital educational resource for the capital.",
        "facts": [
            "Recognized as a world-class center for the care and breeding of endangered species.",
            "Features a unique 'Forest of Birds' walk-through aviary.",
            "Home to the first white tigers ever born in Peru.",
            "Actively involved in the rescue and rehabilitation of illegally trafficked wildlife.",
            "A member of the World Association of Zoos and Aquariums (WAZA)."
        ]
    },
    "quillabamba-cacao-farms-life-v2": {
        "desc": "Quillabamba, known as the 'City of Eternal Summer,' is the gateway to the tropical valleys of Cusco and the center of Peru's premium cacao production. The warm, humid climate of these valleys is ideal for growing 'Cacao Chuncho,' one of the world's most aromatic and highly-prized varieties of fine-flavor cacao. Visitors can tour the lush plantations where cacao grows alongside coffee, coca, and exotic fruits like mangosteen and chirimoya. These farms are often family-run, passing down generations of knowledge about the delicate process of fermenting and drying the beans. The resulting chocolate is famous for its complex floral and fruity notes, making Quillabamba a pilgrimage site for chocolate lovers. The region's commitment to preserving ancient cacao varieties is essential for the global gourmet chocolate industry.",
        "facts": [
            "Cacao Chuncho is considered one of the purest and oldest cacao varieties in existence.",
            "The region is a major exporter of fine-flavor cacao to Europe and North America.",
            "Quillabamba is the capital of the La Convención province.",
            "The harvest season for cacao typically runs from April to August.",
            "Farms here are increasingly focused on agroforestry to protect local biodiversity."
        ]
    },
    "cruz-del-condor-life-v2": {
        "desc": "The Cruz del Cóndor is a world-famous viewpoint perched on the edge of the Colca Canyon, offering one of the most spectacular wildlife experiences in South America. Every morning, visitors gather here to witness the majestic Andean condors rising from the depths of the canyon on thermal updrafts. These enormous birds, with wingspans of up to three meters, often fly incredibly close to the cliffs, providing an unforgettable sight against the backdrop of the 1,200-meter-deep gorge. The viewpoint is also a perfect spot to appreciate the sheer scale of the Colca Canyon and the snow-capped volcanoes in the distance. It is a place of natural wonder that highlights the spiritual connection between the Andean people and this sacred bird of the sun. The experience of seeing a condor in flight here is a highlight of any journey to southern Peru.",
        "facts": [
            "The best time to see condors is between 8:00 AM and 10:00 AM.",
            "The Colca Canyon is twice as deep as the Grand Canyon in the United States.",
            "Condors are one of the world's largest flying birds and can live for over 70 years.",
            "The site features multiple stone platforms for safe and panoramic viewing.",
            "Located approximately 42 kilometers from the town of Chivay."
        ]
    },
    "circuito-magico-del-agua-life-v2": {
        "desc": "The Magic Water Circuit in Lima is a spectacular park featuring thirteen interactive and illuminated fountains that have become a modern symbol of the capital. Located in the historic Park of the Reserve, it holds the Guinness World Record for the largest fountain complex in a public park. Each fountain has a unique design, ranging from the towering 'Magic Fountain' to the playful 'Tunnel of Surprises' where visitors can walk through arches of water. At night, the park comes alive with a mesmerizing show of lasers, music, and light projections against the water screens. It is a joyous and vibrant place that attracts thousands of locals and tourists every evening. The circuit is not only a technological marvel but also a beautiful example of urban renewal that has revitalized one of Lima's most elegant public spaces.",
        "facts": [
            "Inaugurated in 2007 in the historic 'Parque de la Reserva'.",
            "Hold the Guinness World Record for the largest fountain complex in a public park.",
            "The 'Magic Fountain' shoots water to a height of over 80 meters.",
            "The centerpiece is a 120-meter long fountain that features a laser and music show.",
            "A popular venue for photography, especially for weddings and quinceañeras."
        ]
    },
    "matses-national-reserve-life-v2": {
        "desc": "The Matsés National Reserve is one of the most remote and well-preserved areas of the Peruvian Amazon, located on the border with Brazil. It was created to protect the traditional territory and culture of the Matsés people, also known as the 'cat people' for their traditional facial decorations. This vast wilderness consists of primary lowland rainforest teeming with rare wildlife, including jaguars, giant river otters, and numerous species of primates. Because of its extreme isolation, the reserve has remained largely untouched by the outside world, serving as a critical stronghold for Amazonian biodiversity. Access is very difficult and usually requires multiple days of travel by plane and boat. For those who reach it, the reserve offers a glimpse into one of the most pristine and culturally significant ecosystems on the planet.",
        "facts": [
            "Covers an area of 420,000 hectares of primary Amazonian rainforest.",
            "Protects the ancestral lands of the Matsés indigenous group.",
            "Home to the largest population of Uakari monkeys in Peru.",
            "The reserve is part of a massive transnational conservation corridor.",
            "Crucial for the protection of uncontacted indigenous groups in voluntary isolation."
        ]
    },
    "granja-porcon-life-v2": {
        "desc": "Granja Porcón is a remarkable community-led agricultural and reforestation project located in the high Andes near Cajamarca. Managed by a local evangelical cooperative, the project has successfully transformed thousands of hectares of barren high-altitude grassland into a lush forest of pine trees. This man-made ecosystem now supports a thriving timber industry, dairy farming, and a unique zoo that houses both native and exotic animals. Visitors can participate in farm life, enjoy fresh dairy products, and hike through the beautiful forest trails. The project is a shining example of how sustainable land management and community cooperation can improve livelihoods and restore the environment. It offers a peaceful and productive atmosphere that is quite unique in the Peruvian highlands. It remains a popular destination for eco-tourism and agricultural education.",
        "facts": [
            "Over 12,000 hectares have been reforested with more than 10 million pine trees.",
            "The cooperative produces high-quality cheeses, yogurts, and butter.",
            "The zoo features animals such as lions, bears, and various Andean species.",
            "Located at an altitude of approximately 3,100 to 3,800 meters.",
            "The project has significantly improved the local microclimate and water retention."
        ]
    },
    "tacama-vineyard-life-v2": {
        "desc": "Tacama is South America's oldest vineyard, established in the 1540s in the fertile oasis of Ica. This historic estate has been producing wine and pisco—Peru's national grape brandy—for nearly five centuries, blending traditional Spanish techniques with modern technology. The vineyard's iconic pink colonial buildings and lush green fields stand in stark contrast to the surrounding coastal desert. Visitors can take guided tours of the state-of-the-art winery and ancient cellars, followed by tastings of their award-winning products. Tacama is particularly famous for its high-quality pisco and its pioneering work in producing fine Peruvian wines. The estate also offers a beautiful setting for dining, with a restaurant that serves traditional regional cuisine. It remains a cornerstone of Peru's vibrant wine and spirits culture, representing a legacy of elegance and quality.",
        "facts": [
            "The first vineyard in South America, founded by Francisco de Carabantes.",
            "Famous for its 'Pisco Demonio de los Andes,' named after a Spanish conquistador.",
            "Uses irrigation water from the ancient Inca canal 'La Achirana'.",
            "Has collaborated with French winemakers for over 50 years to improve wine quality.",
            "Located in the Ica Valley, the heart of Peruvian wine and pisco production."
        ]
    },
    "tingo-maria-banana-farms-life-v2": {
        "desc": "Tingo María, nestled in the 'high jungle' of central Peru, is a lush and humid region perfect for the large-scale cultivation of bananas and plantains. These tropical fruits are a staple of the local diet and a major economic driver for the Huánuco region. The farms often feature a variety of species, from the common Cavendish banana to the large plantains used in traditional dishes like 'tacacho.' The landscape here is dominated by the dramatic 'Sleeping Beauty' mountain range, which provides a stunning backdrop to the endless green plantations. Tingo María's agricultural wealth also includes coffee, cacao, and exotic fruits like starfruit and camu camu. Exploring the farms gives visitors a sense of the incredible fertility of the Peruvian jungle-fringe. The region's vibrant markets are always filled with the colors and scents of this tropical bounty.",
        "facts": [
            "Tingo María is often called the 'Gateway to the Amazon'.",
            "Plantains are an essential ingredient in the Amazonian breakfast dish 'Tacacho con Cecina'.",
            "The region benefits from high rainfall and consistently warm temperatures.",
            "A major supplier of fresh fruit to the markets of the Peruvian highlands and Lima.",
            "Farms here often participate in programs to replace illicit crops with sustainable fruit production."
        ]
    },
    "santuario-de-amancay-life-v2": {
        "desc": "The Amancay Sanctuary is a fragile and beautiful ecological oasis located in the desert hills of Pachacámac, south of Lima. It was created to protect the endangered Amancay flower, a stunning yellow lily that blooms for only a few days each year during the humid winter season. This brief blooming period transforms the barren gray hills into a vibrant sea of yellow, a phenomenon that has been celebrated in Lima's folklore and traditions for centuries. The sanctuary provides a vital habitat for local wildlife, including various species of birds and foxes that thrive in the temporary green 'lomas' ecosystem. It is a place of great cultural significance, formerly the site of the famous 'Fiesta de Amancaes.' Today, it is a precious escape for urban dwellers looking to reconnect with the capital's unique natural heritage. The site reminds us of the hidden life that persists even in the world's driest environments.",
        "facts": [
            "The Amancay flower (Ismene amancaes) is a symbol of the city of Lima.",
            "The blooming season occurs during the peak of the coastal fog season (June to August).",
            "The sanctuary is managed by local community members focused on eco-tourism.",
            "Part of the unique 'Lomas' ecosystem that exists only on the desert coasts of Peru and Chile.",
            "Provides a rare green space for hiking and nature observation near the capital."
        ]
    },
    "lomas-de-lachay-life-v2": {
        "desc": "The Lomas de Lachay National Reserve is a unique 'fog oasis' located in the coastal desert north of Lima. During the winter months, from June to October, the heavy mist from the Pacific Ocean is trapped by the hills, turning the barren desert into a lush, green landscape teeming with life. This seasonal ecosystem is home to a surprising variety of flora and fauna, including wild tobacco, Andean foxes, and many species of endemic birds. The reserve features well-maintained hiking trails that allow visitors to explore the unique rock formations and dense vegetation of the hills. It is a critical refuge for biodiversity in the midst of an otherwise arid region. Lachay offers a fascinating look at how life adapts to extreme environments, relying entirely on the moisture provided by the clouds. It remains one of the most popular day-trip destinations for nature lovers from Lima.",
        "facts": [
            "Established as a National Reserve in 1977.",
            "Covers an area of 5,070 hectares.",
            "Home to the endemic 'Burrowing Owl' and the 'Coastal Miner' bird.",
            "The moisture captured from the fog can reach levels comparable to some rainforests.",
            "Features ancient petroglyphs, suggesting long-term human presence in the area."
        ]
    },
    "bosque-de-pomac-life-v2": {
        "desc": "The Bosque de Pómac Historical Sanctuary is a remarkable site in northern Peru that combines incredible natural beauty with profound archaeological significance. This dense forest of carob trees is the largest of its kind in the world, providing a sanctuary for numerous endemic bird species and diverse wildlife. Within the heart of the forest lie dozens of ancient pyramids belonging to the Sicán culture, which flourished here between 750 and 1100 AD. The sanctuary is famous for being the discovery site of the iconic Tumi, a ceremonial golden knife that has become a symbol of Peru. Visitors can explore the forest on horseback or by bicycle, visiting the ancient tombs and the legendary 'Millenary Tree.' It is a place where nature and history are inextricably linked, offering a unique and mystical atmosphere. The sanctuary's preservation is vital for both the region's biodiversity and its cultural heritage.",
        "facts": [
            "Protects approximately 5,800 hectares of dry carob forest (Bosque de Algarrrobos).",
            "Home to the Peruvian Plantcutter, one of the world's rarest birds.",
            "Contains 36 pyramids (huacas) of the Sicán or Lambayeque culture.",
            "Site of the discovery of the Lord of Sicán, one of Peru's most important burials.",
            "The 'Árbol Milenario' is a carob tree estimated to be over 500 years old."
        ]
    },
    "el-angolo-hunting-reserve-life-v2": {
        "desc": "The El Angolo Hunting Reserve is a unique protected area in northwestern Peru, primarily dedicated to the sustainable management of the equatorial dry forest ecosystem. It is the only area in the country where regulated hunting is allowed, specifically focused on the white-tailed deer to maintain a healthy population balance. The reserve consists of rugged hills and dense forests of carob and hualtaco trees, providing a critical habitat for many endemic species of the Tumbesian region. Beyond its hunting focus, the reserve is a major destination for birdwatchers and researchers interested in this rare and threatened ecosystem. Its management model seeks to balance conservation with economic benefits for local communities through tourism and sustainable resource use. El Angolo represents a successful example of how diverse conservation strategies can work to protect Peru's unique natural landscapes.",
        "facts": [
            "The only regulated hunting reserve in Peru, established in 1975.",
            "A key part of the Noroeste Amotapes-Manglares Biosphere Reserve.",
            "Home to over 150 species of birds, many of which are endemic to the dry forest.",
            "Protects the habitat of the Tumbes puma and the white-winged guan.",
            "Located in the department of Piura, near the border with Ecuador."
        ]
    },
    "taricaya-rescue-center-life-v2": {
        "desc": "The Taricaya Rescue Center is a dedicated wildlife rehabilitation facility located on the banks of the Madre de Dios River in the heart of the Peruvian Amazon. Founded to combat the illegal wildlife trade, the center takes in animals that have been injured or kept as illegal pets, providing them with medical care and a path toward release back into the wild. It is world-renowned for its successful programs with spider monkeys, jaguars, and the taricaya turtles for which it is named. Volunteers from around the world come to Taricaya to help with animal care, reforestation, and research projects. The center also features a high-canopy walkway that allows visitors and researchers to observe the rainforest from a unique perspective. It is a place of hope and hard work, playing a critical role in the preservation of Amazonian fauna. A visit here offers a moving look at the frontline of conservation efforts in the jungle.",
        "facts": [
            "Located within a private ecological reserve of over 500 hectares.",
            "Successfully releases hundreds of taricaya turtles into the river every year.",
            "Features the first and longest canopy walkway in the Madre de Dios region.",
            "A pioneer in the rehabilitation and release of the black-faced spider monkey.",
            "Works closely with the Peruvian government to enforce wildlife protection laws."
        ]
    },
    "cueva-de-las-lechuzas-life-v2": {
        "desc": "The Cave of the Owls (Cueva de las Lechuzas) is a spectacular karst cave located in the Tingo María National Park, known for its massive entrance and its unique inhabitants. Despite its name, the cave is not home to owls, but rather to a large colony of oilbirds, or 'guácharos,' which are the only nocturnal fruit-eating birds in the world. These birds spend their days in the dark recesses of the cave, creating a constant chatter that echoes through the massive limestone chambers. The cave also hosts diverse populations of bats, insects, and unusual spiders, forming a complex and fascinating subterranean ecosystem. Visitors can explore the first few chambers along a wooden boardwalk, marveling at the impressive stalactites and stalagmites. The cave is part of the 'Sleeping Beauty' mountain range and is one of the most popular natural attractions in the high jungle. It offers a mysterious and unforgettable encounter with the hidden life of the Andes.",
        "facts": [
            "The oilbirds (guácharos) use echolocation to navigate in the dark, similar to bats.",
            "The cave is part of a larger complex of limestone formations in Tingo María.",
            "The name 'Lechuzas' was given by locals who mistook the oilbirds for owls.",
            "Located at the foot of the 'Bella Durmiente' (Sleeping Beauty) mountain.",
            "Rich in strange cave-dwelling fauna, including the 'giant cave cricket'."
        ]
    },
    "mala-valley-orchards-life-v2": {
        "desc": "The Mala Valley, located south of Lima, is a fertile agricultural oasis famous for its delicious fruits and traditional coastal cuisine. The valley's unique microclimate and rich soil make it the premier region for growing apples, especially the local 'Delicia' variety, as well as grapes and various citrus fruits. For many Limeños, a trip to Mala is a classic weekend getaway to enjoy the fresh country air and sample the town's legendary tamales and chicharrones. The valley is also known for its production of shrimp (camarones), which are harvested from the Mala River and featured in many local dishes. Surrounded by arid hills, the lush green orchards of the valley are a testament to the life-giving power of the region's rivers. It remains a cherished part of Peru's coastal agricultural heritage and a favorite culinary destination.",
        "facts": [
            "Mala is known as the 'Apple Capital' of Peru.",
            "The valley is a major producer of the 'Delicia' apple, prized for its sweetness.",
            "Famous for its 'Tamales de Mala,' traditionally wrapped in banana leaves.",
            "The Mala River is a popular spot for freshwater shrimp fishing during the season.",
            "Located approximately 85 kilometers south of Lima on the Pan-American Highway."
        ]
    },
    "trujillo-botanical-garden-life-v2": {
        "desc": "The Trujillo Botanical Garden is a serene and beautiful green space located in the heart of the 'City of Everlasting Spring.' This urban oasis was created to preserve and showcase the diverse plant life of northern Peru, featuring an impressive collection of native flowers, trees, and cacti. It provides a tranquil escape from the city's hustle and bustle, with winding paths, shaded benches, and colorful flower beds that attract butterflies and hummingbirds. The garden also serves as a small sanctuary for animals, including peacocks and turtles, making it a favorite spot for families and nature lovers. It is an important center for environmental education, teaching visitors about the importance of plant conservation in an increasingly urban world. The garden's lush beauty reflects Trujillo's pleasant climate and its long tradition of horticultural excellence. It is a perfect place for a quiet stroll and to appreciate the botanical richness of the coastal region.",
        "facts": [
            "A peaceful retreat located just a few blocks from Trujillo's city center.",
            "Features a wide variety of roses and native orchids.",
            "Home to several free-roaming peacocks that are a favorite with children.",
            "Serves as an important 'green lung' for the city of Trujillo.",
            "Provides educational workshops on gardening and environmental care."
        ]
    },
    "viru-asparagus-farms-life-v2": {
        "desc": "The Virú Valley, located on the northern coast of Peru, is the heart of the country's world-leading asparagus industry. This once-arid desert has been transformed into a lush agricultural powerhouse through massive irrigation projects, making Peru one of the largest exporters of asparagus in the world. The state-of-the-art farms here utilize advanced technology and sustainable water management to produce high-quality green and white asparagus year-round. This industry has brought significant economic growth and employment to the La Libertad region, supporting thousands of families. Beyond asparagus, the valley also produces blueberries, avocados, and artichokes for international markets. A visit to the region reveals the incredible scale and efficiency of modern Peruvian agribusiness. It is a shining example of how innovation and investment can turn the desert into a blooming garden.",
        "facts": [
            "Peru is the world's leading exporter of fresh asparagus.",
            "The Chavimochic irrigation project is the primary water source for these farms.",
            "The valley produces both green and white (buried) asparagus.",
            "A major source of non-traditional agricultural exports for Peru.",
            "The industry is a primary employer for thousands of people in the Virú and Trujillo areas."
        ]
    },
    "puno-quinoa-fields-life-v2": {
        "desc": "The high-altitude plateaus of Puno, surrounding Lake Titicaca, are the ancestral home and primary production region of quinoa, the 'Golden Grain of the Andes.' For thousands of years, indigenous Quechua and Aymara farmers have cultivated this nutritious superfood in the harsh conditions of the Altiplano, at altitudes over 3,800 meters. The fields of quinoa, which can range in color from bright red and purple to golden yellow, create a stunning landscape against the deep blue Andean sky. Quinoa is not only an essential staple for local communities but has also become a global health phenomenon, prized for its high protein content and versatility. The traditional farming methods used here, including the use of hand tools and natural fertilizers, preserve the genetic diversity and purity of the grain. A visit to these fields offers a deep connection to the ancient agricultural wisdom of the Andes.",
        "facts": [
            "Quinoa was considered sacred by the Incas and called 'Chisaya Mama' (Mother of all Grains).",
            "Puno is the largest quinoa-producing region in the world.",
            "Quinoa can thrive in extreme conditions, including frost and high soil salinity.",
            "There are over 3,000 varieties of quinoa found in the Andes.",
            "The UN declared 2013 as the 'International Year of Quinoa' in recognition of its importance."
        ]
    },
    "machupicchu-butterfly-house-life-v2": {
        "desc": "The Machu Picchu Butterfly House (Mariposario de Machupicchu) is a delightful and educational sanctuary located just a short walk from the town of Aguas Calientes. This dedicated conservation project aims to protect and showcase the incredible diversity of butterflies found in the Machu Picchu Historical Sanctuary and the surrounding cloud forests. Visitors can walk through a lush tropical garden filled with hundreds of colorful butterflies and observe the different stages of their life cycle, from egg and caterpillar to chrysalis and adult. The center is also a research facility that works to document and preserve rare and endangered local species. It is a wonderful place for families and nature lovers to learn about the delicate balance of the Amazonian-Andean ecosystem. The sight of a bright blue Morpho butterfly fluttering through the garden is a truly magical experience. It serves as a beautiful reminder of the small but vital wonders of the Peruvian jungle.",
        "facts": [
            "Home to over 300 different species of butterflies found in the region.",
            "Focuses on the conservation of native species such as the Blue Morpho and Owl Butterfly.",
            "Offers guided tours that explain the fascinating biology of butterflies.",
            "Located along the walking path from Aguas Calientes to the Machu Picchu ruins.",
            "Participates in reforestation projects to restore butterfly habitats in the area."
        ]
    },
    "ausangate-alpaca-farms-life-v2": {
        "desc": "The high pastures surrounding the sacred Ausangate mountain are the traditional heartland of alpaca herding in Peru. Here, at altitudes exceeding 4,000 meters, Quechua-speaking communities continue a way of life that has remained largely unchanged for centuries. Alpacas are prized for their incredibly soft, warm, and durable fleece, which is a vital source of income and cultural identity for the people of the Andes. Visitors to the region can see vast herds of these gentle animals grazing against a backdrop of glaciers and turquoise lakes. The process of shearing the alpacas and hand-spinning the wool into beautiful textiles is a central part of local life. These 'alpaca farms' are not just businesses, but a spiritual and practical connection to the mountain gods (Apus). The resulting high-quality garments are world-renowned for their luxury and cultural significance.",
        "facts": [
            "Alpacas have been domesticated in the Andes for over 6,000 years.",
            "There are two main breeds: Huacaya (fluffy) and Suri (long, silky locks).",
            "Alpaca wool is naturally hypoallergenic and comes in over 20 natural colors.",
            "The Ausangate region produces some of the finest 'baby alpaca' fleece in the world.",
            "Herding is conducted according to ancient communal land-use traditions."
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
