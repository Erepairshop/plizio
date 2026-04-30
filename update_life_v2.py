import os

file_path = "lib/visualLab/data/poiExtraMexicoLifeV2.ts"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Define the new content for each POI
# I will use a dictionary mapping POI ID to its new advanced fields
updates = {
    "chapultepec-zoo-life-v2": {
        "desc": "The Chapultepec Zoo, nestled within the sprawling Bosque de Chapultepec in Mexico City, is one of the most visited and beloved zoological institutions in Latin America. Founded in 1923 by biologist Alfonso L. Herrera, it was designed to showcase native Mexican species alongside exotic animals from around the globe. The zoo is famously known for its successful giant panda breeding program, being the first institution outside of China to achieve this feat. Beyond being a popular family destination, it serves as a critical center for scientific research and the conservation of endangered species like the Mexican wolf and the volcano rabbit. Visitors can explore various biomes, from tropical forests to arid deserts, all within the heart of the metropolis. This institution plays a vital role in environmental education, connecting urban residents with the wonders of the natural world.",
        "facts": [
            "The zoo was inaugurated on July 6, 1923, inspired by the Jardin des Plantes in Paris.",
            "It is home to over 1,200 animals representing more than 220 different species.",
            "Chapultepec Zoo is one of the few places in the world that houses giant pandas not owned by China.",
            "The facility covers approximately 17 hectares of land within the first section of Chapultepec Park.",
            "It successfully reintroduced the Mexican wolf into its natural habitat after decades of captive breeding."
        ]
    },
    "san-juan-de-aragon-zoo-life-v2": {
        "desc": "The San Juan de Aragón Zoo, located in the northeastern part of Mexico City, is the city's second-largest zoo and a vital green lung for the surrounding neighborhoods. Opened in 1964, it was designed with a focus on providing spacious, open-air enclosures that mimic the natural habitats of the animals more closely than traditional zoos. The park underwent a major renovation in the early 2000s to modernize its facilities and enhance its role as an educational center for environmental conservation. It is particularly noted for its work with species native to the Valley of Mexico and its impressive collection of birds and large mammals. The zoo's layout encourages long walks through shaded paths, making it a peaceful alternative to the more crowded Chapultepec Zoo. It remains a key site for community engagement, offering workshops and guided tours that emphasize the importance of biodiversity.",
        "facts": [
            "The zoo spans an area of approximately 31 hectares near the San Juan de Aragón Forest.",
            "It features a specialized hospital for wild animals and a research center for species preservation.",
            "The 'Xochimilco' area of the zoo replicates the ancient lake system of the Valley of Mexico.",
            "It houses a significant population of Mexican gray wolves, a species that was once extinct in the wild.",
            "The zoo's lake is a seasonal stop for various migratory bird species traveling across North America."
        ]
    },
    "guadalajara-zoo-life-v2": {
        "desc": "The Guadalajara Zoo is widely considered one of the finest and most innovative zoological parks in Mexico, offering a diverse range of experiences that go beyond simple animal viewing. Situated on the edge of the breathtaking Huentitán Canyon, the zoo uses its dramatic topography to create unique exhibits like the 'Monkeyland' and a cable car system that provides stunning aerial views of the animals and the gorge. It features a world-class aquarium, a specialized safari area where visitors can see African wildlife from a secure vehicle, and an Antarctic exhibit with penguins. The zoo is a leader in animal welfare and conservation education in western Mexico, attracting millions of visitors annually. Its commitment to creating immersive environments allows guests to feel as though they have traveled to different continents without leaving the city. The integration of technology and nature makes it a standout destination for both locals and international tourists.",
        "facts": [
            "The zoo was inaugurated on March 25, 1988, by the President of Mexico.",
            "Its 'SkyZoo' cable car travels at a height of 15 meters, spanning 3.5 kilometers over the exhibits.",
            "The zoo's aquarium holds over 1.2 million liters of water and features a shark tunnel.",
            "It covers 50 hectares of land and houses more than 3,800 animals of 390 different species.",
            "The Safari Masai Mara offers an immersive 20-minute journey through an 8-hectare African savanna exhibit."
        ]
    },
    "acuario-inbursa-life-v2": {
        "desc": "Acuario Inbursa is a modern subterranean marvel located in the upscale Polanco district of Mexico City, right across from the Soumaya Museum. Designed by architect Gerardo García, the aquarium spans four underground levels, taking visitors on a journey from the ocean floor to the coastal mangroves. It is the largest aquarium in Mexico, housing thousands of marine creatures from over 300 different species, including sharks, rays, and exotic jellyfish. The facility is not just a tourist attraction but also a center for marine conservation and education, supported by the Blau Life Foundation. Its state-of-the-art life support systems and immersive exhibits, such as the sunken shipwreck and the penguinarium, provide a captivating look into the mysteries of the deep. This urban oasis serves as a crucial platform for raising awareness about the threats facing our oceans and the importance of marine protection.",
        "facts": [
            "The aquarium was opened in 2014 and required an investment of over 250 million pesos.",
            "It contains over 1.6 million liters of seawater, which is transported from the Gulf of Mexico.",
            "The facility is located 26 meters below ground level to preserve the aesthetic of the surrounding plaza.",
            "It is home to the first gentoo and chinstrap penguins born in a controlled environment in Mexico.",
            "The 'Sunken Ship' exhibit features several species of large sharks and giant manta rays."
        ]
    },
    "xcaret-park-life-v2": {
        "desc": "Xcaret Park is a world-renowned eco-archaeological destination located on the Riviera Maya, blending natural beauty, Mexican culture, and history into a single immersive experience. Built on the site of a former Maya trading port, the park features authentic archaeological ruins alongside underground rivers, lagoons, and a pristine coastline. Visitors can swim through crystal-clear freshwater caves, visit a massive coral reef aquarium, and walk through one of the world's largest butterfly pavilions. The park's highlight is the spectacular 'Xcaret México Espectacular' evening show, which tells the history of Mexico through music, dance, and ancient ball games. Xcaret is also a major player in conservation, notably for its sea turtle nesting program and the reproduction of scarlet macaws. It is a place where the vibrant traditions of Mexico are celebrated daily, making it a must-visit for anyone seeking to understand the country's diverse heritage.",
        "facts": [
            "Xcaret opened in 1990 and has since become one of the most famous tourist attractions in Mexico.",
            "The park is home to a traditional Maya village where ancient rituals and crafts are demonstrated.",
            "Its Coral Reef Aquarium is one of the few in the world where visitors can see reef ecosystems in a semi-natural state.",
            "The evening show features over 300 artists and covers 3,000 years of Mexican history.",
            "Xcaret holds a Guinness World Record for its scarlet macaw conservation and breeding efforts."
        ]
    },
    "africam-safari-life-v2": {
        "desc": "Africam Safari, located just outside the city of Puebla, offers a unique opportunity to witness wild animals in expansive, open-range habitats that closely resemble their native environments. Unlike a traditional zoo, visitors drive through various 'continents' in their own vehicles or on park buses, allowing for close but safe encounters with giraffes, rhinos, lions, and elephants. Founded in 1972 by Captain Carlos Camacho Espíritu, the park was a pioneer in the 'safari' concept in Mexico and remains a leader in wildlife conservation. The park is famous for its successful breeding programs for endangered species, including the northern white rhino and the Mexican gray wolf. In addition to the drive-through safari, the park features a walking area with bird aviaries, insectariums, and nocturnal animal exhibits. Africam Safari provides a thrilling and educational experience that emphasizes the majesty of nature and the urgent need to protect it.",
        "facts": [
            "The park covers more than 200 hectares and is divided into several thematic zones.",
            "It is the only park in Mexico to successfully breed the endangered African elephant.",
            "The facility was named 'Africam' by combining 'Africa' with the founder's surname, 'Camacho'.",
            "Visitors can participate in 'Night Safaris' during certain times of the year for a different perspective on wildlife.",
            "The park's conservation foundation actively works on projects across Mexico and even in Africa."
        ]
    },
    "bioparque-estrella-life-v2": {
        "desc": "Bioparque Estrella, situated in the State of Mexico near Jilotepec, is a massive theme park and wildlife preserve that combines safari adventures with interactive attractions. It is best known for the 'Serengeti Safari,' where guests board specialized trucks to feed giraffes, zebras, and antelopes in a vast open field. The park also features the 'Subterranium,' an underground mining tour, and various water-based activities like 'Rio Loco.' With a strong focus on family fun and outdoor education, Bioparque Estrella provides a full day of entertainment while fostering a respect for animals and the environment. Its Jurassic-themed area, featuring life-sized animatronic dinosaurs, is a major draw for younger children. The park's wide-open spaces and diverse collection of animals make it one of the most popular weekend getaways for residents of the Mexico City metropolitan area.",
        "facts": [
            "The park spans over 300 hectares, making it one of the largest of its kind in the country.",
            "It features a unique 'Lion's Kingdom' where visitors can observe large predators from secure bridges.",
            "The 'Paraíso de Jirafas' (Giraffe Paradise) is one of the largest giraffe enclosures in Mexico.",
            "Bioparque Estrella is home to over 500 animals representing 50 different species.",
            "The park includes an environmental education center called 'Earth' aimed at school groups."
        ]
    },
    "monarch-butterfly-reserve-life-v2": {
        "desc": "The Monarch Butterfly Biosphere Reserve is a breathtaking natural sanctuary located in the rugged mountains of Michoacán and the State of Mexico. Every year, millions of monarch butterflies travel over 4,000 kilometers from Canada and the United States to spend the winter in these high-altitude oyamel fir forests. The sight of thousands of butterflies clustering on tree branches, often bending them with their collective weight, is one of nature's most spectacular phenomena. Designated as a UNESCO World Heritage site, the reserve is critical for the survival of the monarch's unique migratory cycle. Visitors can hike or ride horses up the steep mountain trails to reach the colonies, where the air hums with the sound of millions of wings. The reserve also plays a vital role in protecting the regional watershed and providing a habitat for numerous other mountain species. Conservation efforts here are a collaboration between local communities, international organizations, and the Mexican government.",
        "facts": [
            "The reserve was designated a UNESCO World Heritage site in 2008.",
            "The butterflies arrive in November and stay until March before beginning their journey back north.",
            "The forests are located at an elevation of 2,400 to 3,600 meters above sea level.",
            "Only a few specific areas of the total 56,000-hectare reserve are open to public tourism.",
            "The monarch migration is considered an 'endangered phenomenon' due to habitat loss and climate change."
        ]
    },
    "sian-kaan-life-v2": {
        "desc": "Sian Ka'an, which means 'Gate of Heaven' or 'Where the Sky is Born' in the Maya language, is a massive biosphere reserve on the Caribbean coast of Quintana Roo. This UNESCO World Heritage site encompasses tropical forests, mangroves, marshes, and a large section of the Mesoamerican Barrier Reef. It is one of the most ecologically diverse places in Mexico, providing a home to hundreds of species of birds, monkeys, jaguars, and sea turtles. The reserve is also rich in cultural history, containing over 20 archaeological sites, including the ancient Maya trading center of Muyil. Visitors can explore the reserve through eco-tours that involve floating down crystal-clear freshwater canals built by the Maya or kayaking through the labyrinthine mangroves. Sian Ka'an serves as a global model for sustainable development, where conservation and the needs of local communities are carefully balanced. Its pristine beauty remains largely untouched by the massive tourism developments found further north.",
        "facts": [
            "Sian Ka'an was established as a biosphere reserve in 1986 and became a UNESCO site in 1987.",
            "It covers approximately 1.3 million acres, representing about 10% of the state of Quintana Roo.",
            "The reserve's coastal waters are home to the second-largest coral reef system in the world.",
            "More than 300 species of birds have been recorded within the reserve's boundaries.",
            "The freshwater canals were used by the ancient Maya for over 1,000 years for trade and navigation."
        ]
    },
    "calakmul-reserve-life-v2": {
        "desc": "The Calakmul Biosphere Reserve is a vast expanse of tropical forest in the heart of the Yucatán Peninsula, standing as one of the largest protected areas in Mexico. It is famous for housing the ancient Maya city of Calakmul, once a powerful rival to Tikal, whose massive pyramids rise high above the jungle canopy. The reserve is a critical corridor for large felines, including the jaguar and puma, and is home to two species of monkeys and over 350 species of birds. The dense vegetation hides countless undiscovered ruins and provides a glimpse into the wild landscape that once dominated the Maya world. Conservation in Calakmul is vital for maintaining the region's biodiversity and protecting the endemic flora and fauna of the southern Yucatán. Due to its remote location, it remains one of the most tranquil and authentic destinations for eco-tourism in Mexico. The integration of high-density archaeological remains within a primary forest makes it a unique 'mixed' UNESCO World Heritage site.",
        "facts": [
            "Calakmul is the largest tropical forest reserve in Mexico, covering over 7,200 square kilometers.",
            "The Great Pyramid of Calakmul is one of the tallest Maya structures, reaching 45 meters in height.",
            "It was designated as a UNESCO World Heritage site for both its natural and cultural significance in 2014.",
            "The reserve is part of the Selva Maya, the largest tropical rainforest in the Americas after the Amazon.",
            "It is one of the few places in Mexico where all five species of native cats can still be found."
        ]
    },
    "lacandon-jungle-life-v2": {
        "desc": "The Lacandon Jungle, or Selva Lacandona, is a dense and mysterious rainforest located in the eastern part of Chiapas, along the border with Guatemala. It is the ancestral home of the Lacandon Maya, a group that maintained their traditional way of life deep within the forest for centuries. This incredibly biodiverse region is characterized by soaring mahogany and cedar trees, hidden waterfalls, and the ruins of ancient cities like Bonampak and Yaxchilán. The jungle is a haven for rare wildlife, including the harpy eagle, the scarlet macaw, and the elusive jaguar. Exploring the Lacandon Jungle often involves guided treks led by local community members, who share their deep knowledge of medicinal plants and forest lore. Despite its beauty, the region faces significant threats from deforestation and agricultural expansion, making sustainable tourism and conservation efforts more critical than ever. It remains one of the last true wilderness areas in North America.",
        "facts": [
            "The jungle is named after the Lacandon people, who call themselves 'Hach Winik' (the true people).",
            "It is estimated to contain up to 20% of all the biological species found in Mexico.",
            "The Montes Azules Biosphere Reserve is the most strictly protected core area within the jungle.",
            "The Lacandon Jungle is the northernmost tropical rainforest in the Western Hemisphere.",
            "The ruins of Bonampak, hidden within the jungle, are famous for their incredibly preserved Maya murals."
        ]
    },
    "el-vizcaino-life-v2": {
        "desc": "The El Vizcaíno Biosphere Reserve is a vast and varied protected area located in the central part of the Baja California Peninsula. Spanning from the Pacific Ocean to the Sea of Cortez, it encompasses sandy deserts, rugged mountains, and pristine coastal lagoons. The reserve is most famous for the Ojo de Liebre and San Ignacio lagoons, which serve as the primary calving grounds for the eastern North Pacific gray whale. Every winter, these gentle giants migrate thousands of miles to these shallow, protected waters to give birth and nurse their young. Beyond its marine significance, the reserve is home to the endangered Peninsular pronghorn and features remarkable ancient rock paintings in the Sierra de San Francisco. The stark, arid beauty of the landscape and its unique endemic flora, such as the giant cardon cactus, make it a place of profound scientific and aesthetic value. It is one of the largest and most ecologically significant reserves in all of Latin America.",
        "facts": [
            "At over 2.5 million hectares, it is the largest protected area in Mexico.",
            "The reserve was designated a UNESCO World Heritage site in 1993, specifically for its whale sanctuaries.",
            "The Sierra de San Francisco within the reserve contains some of the most important prehistoric rock art in the world.",
            "The Peninsular pronghorn found here is one of the fastest land animals in the Western Hemisphere.",
            "The reserve's lagoons are also a critical wintering site for thousands of migratory waterfowl and shorebirds."
        ]
    },
    "celestun-flamingo-reserve-life-v2": {
        "desc": "The Ría Celestún Biosphere Reserve, located on the western coast of the Yucatán Peninsula, is a stunning wetland ecosystem famous for its vibrant pink inhabitants. The mix of freshwater from underground springs and saltwater from the Gulf of Mexico creates an ideal habitat for the American flamingo, which gathers here in the thousands. Visitors typically explore the reserve by small boat, navigating through narrow mangrove tunnels to reach the open lagoons where the flamingos feed. The reserve is also a paradise for birdwatchers, with over 300 species recorded, including pelicans, egrets, and kingfishers. The surrounding town of Celestún offers a glimpse into traditional coastal life, known for its fresh seafood and tranquil beaches. The protection of these wetlands is essential for maintaining the regional water quality and providing a nursery for many marine species. The ethereal beauty of the pink flamingos against the emerald green of the mangroves is one of Yucatán's most iconic sights.",
        "facts": [
            "The reserve covers approximately 60,000 hectares and was established in 1979.",
            "The intense pink color of the flamingos comes from the carotenoids in the shrimp and algae they eat.",
            "Celestún is home to several 'petenes,' which are circular islands of jungle growing around freshwater springs.",
            "It is one of the few places in the world where flamingos can be seen in their natural habitat year-round.",
            "The reserve also protects important nesting sites for the hawksbill and green sea turtles."
        ]
    },
    "la-ventanilla-turtle-reserve-life-v2": {
        "desc": "La Ventanilla is a unique community-led ecotourism project and nature reserve located on the Pacific coast of Oaxaca, near Puerto Escondido. Named after a natural rock arch that looks like a small window, the area features a lush mangrove lagoon that was restored by local families after being devastated by hurricanes. Today, the lagoon is a thriving habitat for crocodiles, iguanas, and a vast array of bird species. The community operates a turtle sanctuary on the beach, where they protect the nests of olive ridley and leatherback turtles from poachers and predators. Visitors can take guided canoe tours through the mangroves, learning about the complex ecosystem and the community's reforestation efforts. This project is a shining example of how local empowerment and conservation can go hand-in-hand to protect natural resources and provide a sustainable livelihood. The lack of large-scale development ensures that La Ventanilla remains a peaceful and authentic natural escape.",
        "facts": [
            "The project is entirely run by a local cooperative of about 20 families who dedicated themselves to conservation.",
            "The lagoon is home to more than 300 crocodiles that are protected and monitored by the community.",
            "During the nesting season, volunteers and community members patrol the beach every night to rescue turtle eggs.",
            "The mangroves at La Ventanilla help protect the coastline from erosion and storm surges.",
            "The area was officially designated as a protected community-managed zone to prevent industrial tourism."
        ]
    },
    "los-tuxtlas-reserve-life-v2": {
        "desc": "The Los Tuxtlas Biosphere Reserve in southern Veracruz is a remarkable 'ecological island' where the northernmost tropical rainforest in the Americas meets ancient volcanic peaks. This unique landscape, characterized by dramatic elevation changes, ranges from the shores of the Gulf of Mexico to the summits of the San Martín and Santa Martha volcanoes. The reserve is a hotspot for biodiversity, housing over 500 species of birds and more than 100 species of mammals, including the mantled howler monkey. It is also famous for its connection to the Olmec civilization, with numerous archaeological finds having been discovered in its fertile soils. The region's heavy rainfall feeds countless rivers and spectacular waterfalls, such as Eyipantla Falls. Despite historical pressure from cattle ranching, Los Tuxtlas remains a critical area for biological research and a bastion of wild nature in the state of Veracruz. Its cloud forests and lowland jungles offer a glimpse into the incredible natural wealth of Mexico's humid tropics.",
        "facts": [
            "Los Tuxtlas was the site of Mexico's first biological research station, Catemaco, established in 1967.",
            "The reserve is home to the 'giant Olmec heads,' the largest of which was found in the nearby Tres Zapotes.",
            "It contains the San Martín Tuxtla volcano, which last erupted in 1793.",
            "Approximately 40% of all the bird species found in Mexico can be observed in this reserve.",
            "The region is one of the few places in the world where you can see rainforest growing right up to the edge of the sea."
        ]
    },
    "sierra-gorda-reserve-life-v2": {
        "desc": "The Sierra Gorda Biosphere Reserve, located in the northern part of Querétaro, is one of Mexico's most diverse and spectacular protected areas. Often described as a 'green jewel' in the heart of the country, it encompasses a stunning range of ecosystems, from semi-arid deserts to lush cloud forests and rugged mountain peaks. The reserve is a haven for hikers and nature lovers, featuring deep canyons, hidden caves, and the spectacular Sotano del Barro, one of the world's deepest natural pits. Beyond its natural wonders, the Sierra Gorda is famous for the five 18th-century Franciscan missions, a UNESCO World Heritage site, which showcase a unique blend of European and indigenous artistic styles. The reserve is managed with a strong focus on community participation and sustainable agriculture, aiming to protect the landscape while improving local livelihoods. Its complex topography creates numerous microclimates, making it home to rare species like the jaguar and the military macaw. It is a place of profound beauty and cultural richness, representing the best of Mexico's natural diversity.",
        "facts": [
            "The reserve covers 383,567 hectares, which is about one-third of the entire state of Querétaro.",
            "The Sotano del Barro is a massive collapse sinkhole with a vertical drop of 410 meters.",
            "It was designated a UNESCO Biosphere Reserve in 1997 due to its high level of endemism.",
            "The five Franciscan missions were founded by Junípero Serra between 1750 and 1760.",
            "The reserve is home to the second-largest population of military macaws in Mexico."
        ]
    },
    "isla-holbox-life-v2": {
        "desc": "Isla Holbox is a serene, car-free paradise located just off the northern coast of the Yucatán Peninsula, where the Gulf of Mexico meets the Caribbean Sea. Part of the Yum Balam Biosphere Reserve, the island is famous for its shallow, turquoise waters, vibrant street art, and powdery white sand beaches. Holbox remains a sanctuary for wildlife, particularly the thousands of flamingos that feed in its lagoons and the whale sharks that visit its waters every summer. The town itself has a relaxed, bohemian vibe, with sandy streets and colorful wooden houses that emphasize the island's connection to nature. Visitors can explore the island by golf cart, bicycle, or on foot, discovering hidden sandbars and watching spectacular sunsets over the sea. The island's culinary scene is also a draw, particularly the famous lobster pizza. Holbox offers a tranquil alternative to the bustling tourist hubs of the Riviera Maya, inviting travelers to slow down and enjoy the simple pleasures of island life.",
        "facts": [
            "The name 'Holbox' comes from the Maya language and means 'black hole,' referring to the dark waters of the lagoon.",
            "The island is approximately 42 kilometers long and only about 1.5 kilometers wide.",
            "From June to September, Holbox becomes one of the world's best places to swim with whale sharks.",
            "There are no paved roads on the island, and the main mode of transportation is by electric golf cart.",
            "The island is separated from the mainland by the Yalahau Lagoon, which is home to many dolphins and flamingos."
        ]
    },
    "isla-mujeres-life-v2": {
        "desc": "Isla Mujeres, or the 'Island of Women,' is a charming Caribbean gem located just a short ferry ride from the bustling shores of Cancún. Despite its proximity to the mainland, the island maintains a distinctly laid-back and authentic atmosphere. It is world-renowned for Playa Norte, often cited as one of the most beautiful beaches in the world, with its calm, waist-deep crystal waters and swaying palms. At the island's southern tip, Punta Sur, visitors can find the ruins of a temple dedicated to the Maya goddess Ixchel and a spectacular sculpture park overlooking the sea. The surrounding coral reefs, including the Manchones Reef, are a paradise for snorkelers and divers, featuring a portion of the famous MUSA (Underwater Museum of Art). Whether you're cruising around in a golf cart, exploring the colorful town center, or simply relaxing by the sea, Isla Mujeres offers a perfect blend of natural beauty and Mexican charm.",
        "facts": [
            "The island was named by Spanish conquistadors who found many statues of the Maya goddess Ixchel there.",
            "Isla Mujeres is only about 7 kilometers long and 650 meters wide at its widest point.",
            "The eastern side of the island is rugged and rocky, while the western side features calm, sandy beaches.",
            "Punta Sur is the easternmost point of Mexico, where the first rays of the sun hit the country each morning.",
            "The MUSA underwater museum near the island features over 500 life-sized sculptures designed to promote reef growth."
        ]
    },
    "janitzio-island-life-v2": {
        "desc": "Janitzio is the most iconic of the five islands in Lake Pátzcuaro, in the state of Michoacán, and is a central symbol of Purépecha culture. The island is famous for its unique butterfly net fishermen, who perform a traditional dance with their large, wing-like nets that have become a national symbol of Mexico. Rising high above the island's red-tiled roofs is a massive 40-meter statue of José María Morelos, a hero of Mexican Independence; visitors can climb inside the statue to see murals depicting his life and enjoy panoramic views of the lake. Janitzio is especially vibrant during the Day of the Dead (Noche de Muertos), when thousands of candles illuminate the cemetery and the lake, reflecting a deep spiritual connection to the ancestors. The island's steep, narrow streets are lined with shops selling local crafts and delicious regional food, such as 'charales' (dried fish). A visit to Janitzio is an immersion into the living traditions and resilient spirit of the Purépecha people.",
        "facts": [
            "The island can only be reached by boat from the docks in the town of Pátzcuaro.",
            "The statue of Morelos on the island's summit is taller than the Christ the Redeemer in Rio de Janeiro.",
            "Lake Pátzcuaro is located at an elevation of over 2,100 meters above sea level.",
            "The butterfly nets (mariposas) were traditionally used to catch a specific type of small white fish native to the lake.",
            "The name 'Janitzio' means 'where it rains' or 'silk hair' in the Purépecha language."
        ]
    },
    "isla-espiritu-santo-life-v2": {
        "desc": "Isla Espíritu Santo is a breathtaking, uninhabited island located in the Sea of Cortez, just off the coast of La Paz in Baja California Sur. Often called the 'Galápagos of Mexico,' it is a place of stark, desert beauty, with red volcanic cliffs, turquoise bays, and white sand beaches. The island and its surrounding waters are a UNESCO-protected biosphere reserve, housing an incredible diversity of marine life, including dolphins, whales, and rays. The highlight for many visitors is the sea lion colony at Los Islotes, where it is possible to snorkel and swim with playful young pups in their natural habitat. The island's numerous coves, such as Ensenada Grande, offer perfect conditions for kayaking, paddleboarding, and camping under the stars. With no permanent human residents, the island remains a pristine wilderness where the silence is only broken by the sound of the waves and the calls of seabirds. It is a must-visit destination for those seeking an authentic encounter with the wild beauty of the Gulf of California.",
        "facts": [
            "The island was declared a part of a UNESCO Biosphere Reserve in 1995.",
            "It is separated from the smaller Isla Partida by a narrow, shallow channel that can sometimes be crossed on foot at low tide.",
            "Espíritu Santo is home to several endemic species, including the black jackrabbit.",
            "The island was once a site for pearl oyster cultivation in the late 19th and early 20th centuries.",
            "Jacques Cousteau famously referred to the Sea of Cortez around the island as the 'World's Aquarium'."
        ]
    },
    "isla-tiburon-life-v2": {
        "desc": "Isla Tiburón, or 'Shark Island,' is the largest island in Mexico and is located in the Gulf of California, separated from the state of Sonora by a narrow channel. This rugged and arid island is the ancestral territory of the Seri (Comca'ac) people, who consider it a sacred place and still manage it today as a communal ecological reserve. The island's landscape is dominated by two mountain ranges and features unique desert flora, including the giant cardon cactus and numerous endemic plant species. It is a critical habitat for desert bighorn sheep and mule deer, which were reintroduced to the island to ensure their survival. Access to Isla Tiburón is strictly controlled by the Seri people, and visitors must obtain permission and often hire a local guide to explore its pristine shores and interior. The island remains one of the most untouched and culturally significant wilderness areas in Mexico, reflecting the deep connection between the Seri people and their natural environment.",
        "facts": [
            "At 1,200 square kilometers, it is slightly larger than the island of Martinique.",
            "The island was decreed a nature reserve in 1963 and later became part of the 'Islands of the Gulf of California' UNESCO site.",
            "There are no permanent settlements on the island, as the Seri people maintain it as a wild preserve.",
            "The channel separating the island from the mainland is called the Canal del Infiernillo (Little Hell Channel) due to its strong currents.",
            "The desert bighorn sheep population on the island is one of the healthiest and most genetically pure in North America."
        ]
    },
    "marietas-islands-life-v2": {
        "desc": "The Marietas Islands are a group of small, uninhabited volcanic islands located a few miles off the coast of Punta de Mita in Nayarit. They are famous worldwide for the 'Playa del Amor,' also known as the Hidden Beach, which is a stunning sandy cavern with a massive open-air roof created by volcanic activity and erosion. The islands are a protected national park and a UNESCO Biosphere Reserve, serving as an important nesting site for over 90 species of birds, including the rare blue-footed booby. The surrounding waters are part of a thriving marine reserve, offering exceptional snorkeling and diving opportunities where visitors can see giant mantas, sea turtles, and a variety of colorful tropical fish. During the winter months, the area around the islands is a prime spot for whale watching, as humpback whales congregate in the Bay of Banderas to mate and give birth. To protect the delicate ecosystem, the number of visitors is strictly limited, and access to the Hidden Beach requires swimming through a short tunnel at low tide.",
        "facts": [
            "In the early 20th century, the islands were used as a military testing ground, which contributed to some of their unique rock formations.",
            "Jacques Cousteau led a campaign in the 1960s to protect the islands from further military and industrial use.",
            "The islands are home to one of the few colonies of blue-footed boobies outside of the Galápagos Islands.",
            "Access to the 'Hidden Beach' is limited to a specific number of people per day to prevent environmental degradation.",
            "The islands are part of the 'Islas del Golfo de California' UNESCO World Heritage site."
        ]
    },
    "contoy-island-life-v2": {
        "desc": "Isla Contoy is a tiny, pristine island located north of Isla Mujeres, where the Caribbean Sea meets the Gulf of Mexico. Known as the 'Island of Birds,' it was declared a national park in 1998 and is the most important nesting site for seabirds in the Mexican Caribbean. The island is strictly protected, with only a limited number of visitors allowed each day, and no permanent residents other than a few scientists and park rangers. Its shallow, crystal-clear bays are perfect for spotting rays and sea turtles, while the inland lagoons are filled with thousands of frigates, pelicans, and cormorants. The island also features a small museum and an observation tower that provides panoramic views of the surrounding turquoise waters and the Ixcaché reef, which marks the beginning of the Great Mesoamerican Reef. Isla Contoy remains one of the last true virgin paradises in the region, offering a glimpse into what the Caribbean looked like before the era of mass tourism.",
        "facts": [
            "The island is only 8.5 kilometers long and covers an area of about 317 hectares.",
            "More than 150 different species of birds have been recorded on the island during various seasons.",
            "It is a major nesting site for three species of sea turtles: the hawksbill, green, and loggerhead.",
            "The number of visitors is strictly capped at 200 per day to preserve the island's fragile ecosystem.",
            "Isla Contoy is located at the point where the Caribbean current begins its journey northward as the Gulf Stream."
        ]
    },
    "tequila-agave-fields-life-v2": {
        "desc": "The Agave Landscape of Tequila, located in the state of Jalisco, is a stunning UNESCO World Heritage site that celebrates the cultural and agricultural heritage of Mexico's most famous spirit. The region is characterized by vast, undulating fields of blue agave (Agave tequilana), whose distinctive blue-green leaves create a striking contrast against the red volcanic soil. These fields have been cultivated for centuries, and the traditional methods of harvesting, performed by skilled laborers known as 'jimadores,' remain largely unchanged. The landscape also includes the town of Tequila itself, with its historic distilleries and haciendas that date back to the 18th century. Visitors can tour the fields to learn about the long growth cycle of the agave plant, which takes 7 to 10 years to reach maturity. The entire region is a testament to the fusion of indigenous traditions and European distillation techniques, which together created a drink that is now a global symbol of Mexican identity.",
        "facts": [
            "The Agave Landscape and Ancient Industrial Facilities of Tequila were inscribed as a UNESCO site in 2006.",
            "The red volcanic soil of the region is particularly rich in iron and minerals, which gives Tequila its unique flavor profile.",
            "A single agave plant can weigh between 40 and 100 kilograms when it is ready for harvest.",
            "The 'piña,' or heart of the agave, is the part used to produce the spirit after the leaves are trimmed away.",
            "Tequila is a protected 'Designation of Origin,' meaning it can only be legally produced in certain regions of Mexico."
        ]
    },
    "valle-de-guadalupe-vineyards-life-v2": {
        "desc": "Valle de Guadalupe, located in the northern part of Baja California near Ensenada, is the premier wine-producing region of Mexico, often referred to as the 'Napa Valley of Mexico.' This Mediterranean-style valley produces nearly 90% of the country's wine, benefitting from a unique microclimate of warm days and cool, misty nights from the Pacific Ocean. The region is home to over 150 wineries, ranging from large, established producers to small, experimental boutique vineyards. Beyond the wine, Valle de Guadalupe has become a major culinary destination, famous for its 'Baja-Med' cuisine that emphasizes fresh, locally sourced ingredients. The landscape is dotted with stylish tasting rooms, eco-lofts, and outdoor restaurants that offer stunning views of the vine-covered hills. The annual 'Fiestas de la Vendimia' in August celebrate the harvest with concerts, tastings, and gala dinners, attracting wine enthusiasts from around the world. It is a place where modern sophistication and rustic charm blend seamlessly in a spectacular natural setting.",
        "facts": [
            "The first vineyards in the valley were established by Jesuit missionaries in the 18th century.",
            "The region is known for its incredible variety of grapes, including Nebbiolo, Tempranillo, Cabernet Sauvignon, and Chenin Blanc.",
            "Valle de Guadalupe is located about 30 kilometers inland from the Pacific port city of Ensenada.",
            "The valley produces approximately 2 million cases of wine per year.",
            "The 'Wine Route' (Ruta del Vino) through the valley is one of the most popular tourist drives in Baja California."
        ]
    },
    "veracruz-coffee-farms-life-v2": {
        "desc": "The coffee-growing regions of Veracruz, particularly around towns like Coatepec and Xalapa, are famous for producing some of the smoothest and most aromatic beans in Mexico. The high altitude, volcanic soil, and frequent cloud cover of the Sierra Madre Oriental provide the perfect conditions for 'coffee under shade,' a traditional method that preserves the local biodiversity. Veracruz was the first place in Mexico where coffee was planted in the late 18th century, and the region has maintained a deep-rooted coffee culture ever since. Visitors can explore historic 'fincas' (estates) to see the entire process from flowering and cherry picking to roasting and tasting. The architecture of the region, with its colonial houses and lush gardens, reflects the wealth and history brought by the coffee trade. A cup of Veracruz coffee is typically characterized by a balanced body with notes of chocolate and fruit, making it a favorite both domestically and abroad. The commitment of local farmers to quality and tradition ensures that Veracruz remains at the heart of Mexico's coffee identity.",
        "facts": [
            "Coatepec, known as the 'Coffee Capital of Mexico,' was designated a 'Pueblo Mágico' for its beauty and tradition.",
            "Veracruz is the second-largest producer of coffee in Mexico, after Chiapas.",
            "The first coffee seeds were brought to Veracruz from Cuba in 1790.",
            "Much of the coffee in Veracruz is grown at elevations between 800 and 1,500 meters above sea level.",
            "The region is known for its high-quality Arabica beans, which are often exported to gourmet markets worldwide."
        ]
    },
    "chiapas-coffee-fincas-life-v2": {
        "desc": "Chiapas is the powerhouse of Mexican coffee production, with its rugged southern highlands providing an ideal environment for high-quality Arabica beans. The region is famous for its 'Strictly High Grown' (SHG) coffee, which matures slowly at elevations above 1,200 meters, resulting in a complex flavor profile with bright acidity and floral notes. Much of the coffee in Chiapas is produced by smallholder farmers and indigenous cooperatives, many of which have become global leaders in organic and fair-trade certification. The historic fincas of the Soconusco region, near the Guatemalan border, offer a glimpse into the late 19th-century coffee boom, with some estates still operating as both farms and boutique hotels. The humid tropical climate and volcanic soil of the Sierra Madre de Chiapas contribute to the region's exceptional biodiversity, where coffee is often grown under a canopy of native trees. Drinking Chiapas coffee is not just a sensory experience but also a way to support the sustainable livelihoods of thousands of mountain communities.",
        "facts": [
            "Chiapas produces more than 40% of all the coffee grown in Mexico.",
            "The state is a world leader in the production of organic coffee, with thousands of certified small producers.",
            "The Soconusco region has a unique history of German and Italian immigrants who established the first large coffee estates.",
            "The coffee harvest in Chiapas typically runs from November to March.",
            "Coffee from the El Triunfo Biosphere Reserve in Chiapas is highly prized by specialty roasters for its environmental and flavor credentials."
        ]
    },
    "oaxaca-mezcal-agave-life-v2": {
        "desc": "Oaxaca is the undisputed heart of mezcal production, a spirit that has become a powerful symbol of the state's cultural and biological diversity. Unlike tequila, which is made only from blue agave, mezcal can be produced from dozens of different agave species, many of which grow wild in the rugged Oaxacan landscape. The landscape is dotted with small, family-run distilleries known as 'palenques,' where traditional methods like pit-roasting the agave hearts and crushing them with a horse-drawn stone wheel (tahona) are still practiced. The valley of Tlacolula and the town of Santiago Matatlán are particularly famous for their dense concentration of mezcal producers. The process is deeply artisanal and reflects the unique 'terroir' of each village, with flavors ranging from smoky and earthy to floral and sweet. Mezcal is more than just a drink in Oaxaca; it is a vital part of social life, used in celebrations, rituals, and as a gesture of hospitality. The recent global surge in mezcal's popularity has brought new attention and economic opportunities to these rural agave-growing communities.",
        "facts": [
            "Santiago Matatlán is often called the 'World Capital of Mezcal' due to its hundreds of small distilleries.",
            "While tequila must be at least 51% blue agave, authentic mezcal is usually 100% agave.",
            "The 'espadín' agave is the most commonly cultivated species for mezcal due to its high sugar content and yield.",
            "The smoky flavor of mezcal comes from roasting the agave hearts in underground stone-lined pits for several days.",
            "Oaxaca accounts for over 90% of all mezcal production in Mexico."
        ]
    },
    "michoacan-avocado-orchards-life-v2": {
        "desc": "Michoacán is the 'avocado capital of the world,' a fertile region where the rich volcanic soil and temperate climate of the highlands create the perfect conditions for the 'green gold' to thrive. The state accounts for the vast majority of Mexico's avocado production, with hundreds of thousands of hectares of orchards stretching across its undulating landscape. The avocado industry is a massive economic driver for the state, supporting the livelihoods of thousands of farmers, harvesters, and exporters. The Hass variety, known for its creamy texture and rich flavor, is the dominant crop and is exported in massive quantities, particularly to the United States. Driving through the 'Meseta Purépecha,' visitors can see endless rows of dark green trees climbing the hillsides, often interspersed with pine forests. Despite the economic success, the industry faces challenges related to water use and forest conservation, prompting a move toward more sustainable farming practices. The avocado remains a source of immense pride and a staple of the local culinary tradition, essential for everything from daily meals to world-famous guacamole.",
        "facts": [
            "Michoacán is the only place in the world where avocado trees can bloom four times a year, allowing for year-round harvest.",
            "Mexico provides approximately 45% of the world's avocado exports, with Michoacán leading the way.",
            "The town of Uruapan is considered the center of the avocado trade and hosts a massive avocado festival.",
            "Avocados have been cultivated in Mexico for nearly 10,000 years, according to archaeological evidence.",
            "The industry generates billions of dollars in revenue for the Mexican economy each year."
        ]
    },
    "sinaloa-mango-orchards-life-v2": {
        "desc": "The coastal plains of Sinaloa are one of Mexico's most productive agricultural regions, particularly famous for their vast and sun-drenched mango orchards. The state's warm, tropical climate and extensive irrigation systems make it a leading producer and exporter of several mango varieties, including the popular Kent, Keitt, and the sweet, buttery Ataulfo. During the harvest season, which peaks in the summer months, the region is a hive of activity as thousands of tons of fruit are carefully picked, packed, and shipped to markets across North America. The orchards form a verdant canopy over the landscape, particularly around the southern part of the state near towns like Rosario and Escuinapa. Beyond their economic value, mangoes are a beloved part of the local culture, celebrated in festivals and enjoyed in countless fresh and spicy preparations. The Sinaloa mango industry is known for its high safety and quality standards, ensuring that its delicious fruit reaches international consumers at the peak of ripeness. It remains a vital pillar of the state's robust agricultural economy.",
        "facts": [
            "Sinaloa is one of the top mango-producing states in Mexico, along with Guerrero and Nayarit.",
            "The Ataulfo mango, also known as the 'honey' or 'champagne' mango, is a native Mexican variety with a non-fibrous texture.",
            "Mango trees can grow up to 35-40 meters tall and live for over 100 years.",
            "The state of Sinaloa has a rigorous 'fruit fly-free' certification program to facilitate international exports.",
            "Mexico is the world's leading exporter of fresh mangoes, with a significant portion coming from Sinaloa's orchards."
        ]
    }
}

import re

for poi_id, data in updates.items():
    # Find the POI block by ID
    # Look for { id: "poi_id", ... } and capture until the closing }
    # This is tricky because of the nested objects
    pattern = rf'({{\s*id:\s*"{poi_id}"[\s\S]*?}})(?=\s*(?:,|\]))'
    
    match = re.search(pattern, content)
    if match:
        old_poi_block = match.group(1)
        
        # Build the new advanced fields
        desc_adv = f'descriptionAdvanced: {{\n      de: "",\n      hu: "",\n      ro: "",\n      en: "{data["desc"]}"\n    }}'
        facts_str = ',\n        '.join([f'"{f}"' for f in data["facts"]])
        facts_adv = f'factsAdvanced: {{\n      de: [],\n      hu: [],\n      ro: [],\n      en: [\n        {facts_str}\n      ]\n    }}'
        
        # Insert before the last }
        # Check if facts ends with a comma
        if 'facts: {' in old_poi_block:
            # Find the closing } of facts
            # We look for the facts block and its end
            facts_pattern = r'(facts:\s*\{[\s\S]*?\})'
            f_match = re.search(facts_pattern, old_poi_block)
            if f_match:
                new_poi_block = old_poi_block.replace(f_match.group(1), f_match.group(1) + ",\n    " + desc_adv + ",\n    " + facts_adv)
                content = content.replace(old_poi_block, new_poi_block)
        else:
            # Fallback if facts is not there for some reason
            new_poi_block = old_poi_block[:-1] + ",\n    " + desc_adv + ",\n    " + facts_adv + "\n  }"
            content = content.replace(old_poi_block, new_poi_block)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print(f"Updated {len(updates)} POIs in {file_path}")
