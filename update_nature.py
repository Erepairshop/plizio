import re
import os

file_path = "/mnt/c/Users/User/plizio-repo/lib/visualLab/data/poiExtraPeruNatureV2.ts"

content_updates = {
    "pe-anc-huascaran-nature-v2": {
        "desc": "Huascarán is the majestic sovereign of the Peruvian Andes and the highest tropical mountain in the world, reaching a staggering 6,768 meters. Its twin peaks, covered in permanent glaciers, dominate the Cordillera Blanca and provide a dramatic backdrop to the Callejón de Huaylas valley. The mountain is the heart of the Huascarán National Park, a UNESCO World Heritage site that protects an extraordinary range of high-altitude ecosystems. For mountaineers, it represents the ultimate challenge in Peru, offering breathtaking climbs and unparalleled views of the Andean landscape. It is also a sacred 'Apu' for local communities, believed to protect the life and water of the region. Despite the challenges of climate change and glacial retreat, it remains a powerful symbol of Peru's natural grandeur.",
        "facts": [
            "The highest point in Peru and the fourth highest in all of South America.",
            "Located in the Cordillera Blanca, the world's highest tropical mountain range.",
            "Named after Huáscar, a 16th-century Inca emperor.",
            "First successfully climbed in 1908 by an expedition led by Annie Smith Peck.",
            "Its glaciers are a critical source of water for the region's agriculture and power."
        ]
    },
    "pe-pun-lake-titicaca-nature-v2": {
        "desc": "Lake Titicaca, shared between Peru and Bolivia, is the highest navigable lake in the world and a place of profound spiritual and historical importance. Situated at 3,812 meters above sea level, its deep blue waters are said to be the birthplace of the Inca civilization. The lake is famous for its unique inhabitants, including the Uros people who live on artificial islands made entirely of floating totora reeds. Beyond the floating islands, larger land islands like Taquile and Amantaní preserve ancient traditions of weaving and communal living. The vast expanse of the lake, surrounded by the snow-capped peaks of the Cordillera Real, creates a landscape of mystical beauty. It is a vital ecosystem that supports a wide variety of endemic wildlife, including the rare Titicaca grebe. Today, it remains a center of vibrant Andean culture and one of South America's most iconic natural wonders.",
        "facts": [
            "Covers an area of 8,372 square kilometers (3,232 square miles).",
            "Maximum depth is approximately 281 meters (922 feet).",
            "Home to over 500 species of aquatic life, many of which are endemic.",
            "According to legend, the first Inca, Manco Cápac, emerged from its waters.",
            "Includes more than 40 islands, both natural and man-made."
        ]
    },
    "pe-lor-amazon-river-nature-v2": {
        "desc": "The Amazon River is the lifeblood of the South American continent and the largest river in the world by volume, with its most distant source located high in the Peruvian Andes. As it flows through the vast Peruvian lowlands, it creates a labyrinth of winding channels, floodplains, and dense tropical rainforest that is home to more species of life than anywhere else on Earth. The river is a vital transport corridor for jungle communities, where the rhythm of life is dictated by the rising and falling of its waters. Visitors can witness the incredible sight of pink river dolphins, giant lily pads, and a dizzying array of colorful birds along its banks. The Peruvian Amazon offers a raw and immersive experience of nature at its most powerful and diverse. It remains a critical ecosystem for global climate regulation and a source of wonder for all who travel its length.",
        "facts": [
            "Carries more water than the next seven largest rivers combined.",
            "Originated at Nevado Mismi in the southern Peruvian Andes.",
            "Iquitos is the largest city in the world that can only be reached by river or air.",
            "Home to the unique pink river dolphin (Inia geoffrensis).",
            "During the rainy season, the river can expand to over 48 kilometers (30 miles) in width."
        ]
    },
    "pe-cus-ausangate-nature-v2": {
        "desc": "Ausangate is the most significant and sacred mountain in the Cusco region, standing as a massive sentinel at 6,384 meters. In Andean mythology, it is considered a powerful 'Apu' or protector deity that controls the fertility of the land and the health of the livestock. The trek around Ausangate is one of the most spectacular in the Andes, taking travelers through high mountain passes, turquoise glacial lakes, and vibrant red valleys. The region is also the heartland of traditional alpaca herding, where local Quechua communities maintain a way of life that has changed little since the time of the Incas. Every year, thousands of pilgrims travel to the nearby Sinakara valley for the Quyllurit'i festival to honor the mountain's spirit. Its jagged, snow-capped peaks and the surrounding colorful mineral landscapes make it a photographer's dream. It remains a place of profound spiritual energy and rugged natural beauty.",
        "facts": [
            "The highest peak in the Cordillera Vilcanota.",
            "Considered the 'Apu' of the entire southern Peruvian region.",
            "Surrounded by the famous Rainbow Mountain (Vinicunca) and Red Valley.",
            "The annual Quyllurit'i festival is one of the largest indigenous gatherings in the Andes.",
            "Features some of the highest-altitude permanent human settlements in the world."
        ]
    },
    "pe-cus-vinicunca-nature-v2": {
        "desc": "Vinicunca, popularly known as the Rainbow Mountain, is a breathtaking geological wonder that has recently become one of Peru's most famous destinations. Located high in the Andes near Ausangate, its striking colors are the result of diverse mineral layers that have been exposed by natural erosion and the melting of glaciers. The mountain features vibrant stripes of turquoise, lavender, gold, and maroon, creating a surreal landscape that looks like a giant watercolor painting. Reaching the viewpoint requires a challenging hike to an altitude of over 5,000 meters, but the reward is a panoramic view that is truly unique on the planet. The surrounding valleys are filled with grazing alpacas and traditional Quechua-speaking communities. It is a place of incredible natural art and a testament to the diverse geological history of the Andes.",
        "facts": [
            "Its distinctive colors are caused by minerals like iron oxide (red), goethite (yellow), and chlorite (green).",
            "The summit viewpoint is located at an elevation of 5,200 meters (17,060 feet).",
            "Only became widely known to international tourists around 2015 as glaciers receded.",
            "Known as 'Vinicunca' in Quechua, which means 'neck of colors'.",
            "A popular day trip for travelers staying in the city of Cusco."
        ]
    },
    "pe-ica-ballestas-nature-v2": {
        "desc": "The Ballestas Islands, located off the coast of Paracas, are a vibrant wildlife sanctuary often referred to as the 'Poor Man's Galápagos.' These rugged rock formations are home to an incredible density of marine life, including thousands of sea lions, Humboldt penguins, and blue-footed boobies. The cold, nutrient-rich Humboldt Current provides a bountiful food source, supporting massive colonies of guano birds such as cormorants and pelicans. Visitors can explore the islands' arches and caves by boat, witnessing a non-stop spectacle of barking sea lions and diving birds. On the journey to the islands, one can also see the mysterious 'Candelabra' geoglyph etched into the desert hillside. The islands are a vital part of Peru's coastal ecosystem and offer one of the most accessible wildlife viewing experiences in the country. It is a place where the raw power and abundance of the Pacific Ocean are on full display.",
        "facts": [
            "Part of the Paracas National Reserve and a protected marine area.",
            "Home to a significant population of the endangered Humboldt penguin.",
            "Historically one of Peru's most important sources of guano (bird droppings) for fertilizer.",
            "Inhabited by two species of sea lions: the South American sea lion and the fur seal.",
            "Boats are not allowed to land on the islands to protect the fragile wildlife habitats."
        ]
    },
    "pe-mdd-manu-nature-v2": {
        "desc": "Manu National Park is one of the most biodiverse places on Earth, protecting a massive area that ranges from the high Andean cloud forest to the lowland Amazon basin. A UNESCO World Heritage site, it remains largely untouched by modern development, serving as a sanctuary for thousands of species of plants and animals. Within its borders, one can find jaguars, giant river otters, thirteen species of primates, and over 1,000 species of birds. The park is also home to several indigenous groups living in voluntary isolation, preserving their ancestral way of life. Access to the most remote parts of Manu is strictly regulated to protect both the wildlife and the human inhabitants. A journey into Manu is a true expedition into the heart of the world's most pristine wilderness. It stands as a global flagship for conservation and biological research.",
        "facts": [
            "Covers an area of 1.7 million hectares (over 4 million acres).",
            "Contains more than 10% of the world's known bird species.",
            "Recognized by UNESCO as a World Heritage site and a Biosphere Reserve.",
            "Home to the legendary Andean cock-of-the-rock, Peru's national bird.",
            "One of the few places where jaguars are regularly spotted in the wild."
        ]
    },
    "pe-mdd-tambopata-nature-v2": {
        "desc": "The Tambopata National Reserve is a world-renowned biodiversity hotspot in the southeastern Peruvian Amazon, famous for its incredible density of wildlife. It is particularly known for its massive clay licks (collpas), where hundreds of vibrant macaws and parrots gather daily to feed on mineral-rich clay. The reserve's lush primary rainforest is home to jaguars, capybaras, and the elusive giant river otter, which can often be seen in its beautiful oxbow lakes. Because of its proximity to the town of Puerto Maldonado, it is one of the most accessible high-quality jungle experiences in Peru. Tambopata offers a wide range of lodges and activities, from canopy walks to night-time river excursions. It remains a vital area for ecological research and a prime destination for nature lovers seeking an authentic Amazonian experience. The reserve plays a crucial role in protecting the fragile headwaters of the Madre de Dios region.",
        "facts": [
            "Covers an area of 274,690 hectares.",
            "Home to the 'Collpa Colorado,' one of the largest macaw clay licks in the world.",
            "Contains Lake Sandoval, one of the most beautiful and biodiverse oxbow lakes in the Amazon.",
            "Holds world records for the highest number of butterfly and bird species in certain areas.",
            "Essential for the protection of the critically endangered giant river otter."
        ]
    },
    "pe-lor-maranon-nature-v2": {
        "desc": "The Marañón River is one of the two main headwaters of the Amazon and is often called the 'Grand Canyon of the Amazon' due to the spectacular gorges it has carved through the Andes. Flowing north and then east across Peru, it provides a vital water source for diverse ecosystems, from high-altitude montane forests to tropical lowlands. The river is famous among adventure seekers for its world-class white-water rafting, which takes travelers through some of the most remote and beautiful scenery in the country. Along its course, it passes through the territory of several indigenous groups and supports a vast array of fish and bird life. The Marañón's confluence with the Ucayali River marks the official beginning of the Amazon River. It remains a powerful and relatively untamed river that is central to the geological and biological history of Peru. Its conservation is currently a major focus due to its role in Amazonian connectivity.",
        "facts": [
            "Longer than the Ucayali, but considered the second most important headwater by volume.",
            "Features the Pongos (narrow canyons), such as the Pongo de Manseriche.",
            "Essential for the migration of many species of Amazonian catfish.",
            "One of the best rivers in the world for multi-day rafting expeditions.",
            "Meanders through 10 of Peru's 24 departments."
        ]
    },
    "pe-lor-ucayali-nature-v2": {
        "desc": "The Ucayali River is the longest headwater of the Amazon and a massive fluvial artery that meanders through the vast lowlands of eastern Peru. Formed by the confluence of the Tambo and Urubamba rivers, it carries enormous amounts of sediment and nutrients that sustain the world's largest rainforest. The river's path is constantly changing, creating numerous oxbow lakes and fertile floodplains that are essential for local agriculture and fishing. Major cities like Pucallpa rely on the Ucayali for transport and trade, connecting remote jungle outposts with the rest of the country. It is home to a wealth of aquatic life, including the massive paiche fish and river dolphins. The Ucayali's broad and powerful flow is a testament to the sheer scale of the Amazonian watershed. It remains one of the most important and dynamic natural features of the Peruvian jungle.",
        "facts": [
            "Considered the main source of the Amazon River due to its length.",
            "Flows for approximately 1,460 kilometers (907 miles) before joining the Marañón.",
            "The river is navigable for large vessels for most of its length.",
            "Home to the Shipibo-Konibo people, who live in many communities along its banks.",
            "Crucial for the transport of timber and agricultural products from the Amazon to the coast."
        ]
    },
    "pe-lor-pacaya-nature-v2": {
        "desc": "The Pacaya-Samiria National Reserve is the largest protected area in Peru and is famously known as the 'Mirror of the Jungle' because of the perfect reflections in its dark, calm waters. Located in the heart of the Amazon basin, this massive wetland encompasses two major rivers, the Pacaya and the Samiria, and countless lagoons and swamps. It is one of the best places in the Amazon to see wildlife, including pink and gray river dolphins, giant river otters, and manatees. The reserve's lush vegetation and flooded forests provide a vital breeding ground for hundreds of species of fish and birds. Visitors can explore the reserve on luxury cruises or more adventurous expeditions, witnessing a landscape that feels truly primeval. Pacaya-Samiria is also a model for community-based conservation, where local people manage the harvest of resources like the paiche fish. It is a place of serene beauty and immense biological importance.",
        "facts": [
            "Covers an area of 2,080,000 hectares (over 5 million acres).",
            "Protects the largest area of flooded forest (varzea) in the Peruvian Amazon.",
            "Home to over 1,000 species of animals and 965 species of wild plants.",
            "One of the best places in the world to observe the Amazon River Dolphin.",
            "Established in 1982 to conserve the biodiversity and the scenic beauty of the region."
        ]
    },
    "pe-mdd-sandoval-nature-v2": {
        "desc": "Lake Sandoval is widely considered the most beautiful oxbow lake in the Peruvian Amazon, located within the Tambopata National Reserve. Surrounded by massive aguaje palm trees and dense primary forest, its clear and tranquil waters are a magnet for wildlife. Visitors reach the lake via a scenic walk through the jungle, followed by a quiet canoe trip that allows for close-up views of the resident fauna. It is one of the best places in the region to spot the endangered giant river otter, as well as several species of monkeys, macaws, and the prehistoric-looking hoatzin bird. In the evening, the lake becomes a mirror for the setting sun, creating a magical atmosphere. At night, caimans can often be seen along the shoreline. It remains a highlight for anyone visiting the Madre de Dios region, offering a serene and incredibly biodiverse environment.",
        "facts": [
            "A crescent-shaped lake formed when a meander of the Madre de Dios River was cut off.",
            "Home to a resident family of giant river otters that are regularly spotted.",
            "Surrounded by an extensive 'aguajal,' a swamp forest of the Mauritia flexuosa palm.",
            "A top spot for seeing the black caiman, the largest predator in the Amazon.",
            "Located just a short boat ride and hike from Puerto Maldonado."
        ]
    },
    "pe-anc-alpamayo-nature-v2": {
        "desc": "Alpamayo is often hailed as the 'Most Beautiful Mountain in the World,' a title it earned in an international poll for its near-perfect ice pyramid shape. Located in the remote northern part of the Cordillera Blanca, its steep, fluted face of ice and snow is a dream for mountaineers and photographers alike. The mountain stands at 5,947 meters and is known for its challenging climbing routes, especially the famous Ferrari route on its southwest face. Unlike the higher but more massive Huascarán, Alpamayo's beauty lies in its elegant symmetry and the sharp brilliance of its glacial ridges. The trek to its base takes travelers through some of the most spectacular and isolated valleys of the Ancash region. It remains an enduring icon of Andean beauty and a testament to the majestic power of the Peruvian mountains.",
        "facts": [
            "Voted the most beautiful mountain in the world at the 1966 Munich Photo Exhibition.",
            "Part of the Huascarán National Park, a UNESCO World Heritage site.",
            "Known for its distinctive flutings (caracteristic grooves) in the ice.",
            "Named after the Alpamayo River, which means 'earth river' in Quechua.",
            "The ascent is considered one of the most technical and rewarding in the Andes."
        ]
    },
    "pe-huc-yerupaja-nature-v2": {
        "desc": "Yerupajá is the second highest mountain in Peru and the highest point in the spectacular Cordillera Huayhuash, standing at 6,635 meters. Known as 'El Carnicero' (The Butcher) by climbers because of its extreme difficulty and sharp, dangerous ridges, it is one of the most formidable challenges in the Andes. The mountain's massive eastern face is a vertical wall of rock and ice that has seen only a few successful ascents in history. Its summit is often shrouded in clouds, adding to its mysterious and intimidating reputation. Yerupajá dominates the surrounding landscape, overlooking pristine glacial lakes and some of the world's best trekking routes. It is a mountain of raw, untamed power that commands respect from all who gaze upon it. Its majestic presence is a highlight for those brave enough to trek the Huayhuash circuit.",
        "facts": [
            "The highest peak in the Amazon River watershed.",
            "Renowned as one of the hardest 6,000-meter peaks to climb in the world.",
            "Its name means 'White Sunrise' or 'White Dawn' in the local language.",
            "The mountain features two distinct peaks, Yerupajá Grande and Yerupajá Chico.",
            "Visible from great distances due to its massive size and sharp profile."
        ]
    },
    "pe-ica-huacachina-nature-v2": {
        "desc": "The Huacachina Oasis is a surreal and beautiful natural lake tucked amidst the massive, rolling sand dunes of the Ica desert. Known as the 'Oasis of America,' this palm-fringed lagoon is surrounded by a charming village and is one of the few natural oases in South America. According to local legend, the lagoon was formed by the tears of a beautiful princess whose voice can still be heard in the wind. Today, it is a major destination for adventure seekers who come to ride sandbuggies over the towering dunes and go sandboarding down their steep slopes. The contrast between the emerald green water and the golden desert sands creates a landscape that looks like it belongs in the Sahara. At sunset, the dunes offer a breathtaking panoramic view of the oasis and the distant Andes. It remains a unique and magical spot that captures the imagination of every traveler.",
        "facts": [
            "One of the only natural desert oases in South America.",
            "The sand dunes here are some of the highest in the world, reaching up to 2,000 meters.",
            "Depicted on the 50 soles banknote of Peru.",
            "The water was historically believed to have healing medicinal properties.",
            "Located just 5 kilometers from the city of Ica."
        ]
    },
    "pe-cus-salcantay-nature-v2": {
        "desc": "Salcantay is a towering and majestic peak in the Cordillera Vilcabamba, reaching 6,271 meters and serving as one of the most important 'Apus' for the Inca people. Its name, meaning 'Savage Mountain,' reflects its steep, ice-covered faces and its reputation for unpredictable weather. The trek around Salcantay has become a world-famous alternative to the classic Inca Trail, offering a more rugged and high-altitude path to Machu Picchu. The trail takes hikers from high glacial passes down into lush cloud forests, providing a stunning overview of Peru's diverse Andean ecosystems. The mountain's prominent position and sharp, pyramidal summit make it a constant companion on the journey. It is a place of profound natural power and spiritual significance, where the scale of the Andes is truly humbling. Seeing the sunrise over Salcantay's glaciers is an unforgettable experience for any trekker.",
        "facts": [
            "The 12th highest mountain in Peru.",
            "The highest peak in the Cordillera Vilcabamba mountain range.",
            "The Salcantay Pass, the highest point of the trek, is at 4,600 meters.",
            "Considered the 'Lord' or 'Protector' of the Cusco region's agriculture.",
            "Visible from the Sun Gate at Machu Picchu on clear days."
        ]
    },
    "pe-cus-urubamba-nature-v2": {
        "desc": "The Urubamba River is the sacred waterway that carved the legendary Sacred Valley of the Incas, flowing from the high Andes near Cusco toward the Amazon. To the Incas, the river was a reflection of the Milky Way on Earth, and they built their most important temples and agricultural terraces along its fertile banks. As it winds through the valley, the river passes through traditional towns like Pisac and Ollantaytambo, and eventually flows past the base of Machu Picchu. The river is known for its dramatic changes in character, from gentle flows in the valley to powerful white-water rapids in the canyons below. It provides vital irrigation for the region's famous giant white corn and other crops. Today, it is a popular destination for white-water rafting and offers some of the most scenic train rides in the world along its course. The Urubamba remains a vital and spiritual link between the past and present in the heart of Peru.",
        "facts": [
            "Also known as the Vilcanota River in its upper reaches.",
            "Forms the spectacular Urubamba Canyon, which surrounds Machu Picchu.",
            "A major tributary of the Ucayali River and ultimately the Amazon.",
            "The river's water is essential for the hydroelectric power of the Cusco region.",
            "The valley it created was the agricultural breadbasket of the Inca Empire."
        ]
    },
    "pe-ama-gocta-nature-v2": {
        "desc": "Gocta Waterfall is one of the world's highest and most spectacular falls, hidden deep in the cloud forests of northern Peru's Amazonas region. Although well-known to local villagers for generations, it only gained international fame in 2005 when a German explorer measured its staggering height of 771 meters. The waterfall drops in two massive tiers down a sheer cliff covered in lush tropical vegetation. The hike to the base of the falls takes visitors through a mystical forest filled with orchids, ferns, and the rare yellow-tailed woolly monkey. Local legends tell of a beautiful mermaid who guards a treasure within the pool at the foot of the falls. Gocta has quickly become a symbol of the untapped tourist potential of northern Peru, offering a much quieter and wilder experience than the sites around Cusco. The sight of the massive plume of water emerging from the clouds is truly awe-inspiring.",
        "facts": [
            "Consistently ranked among the top 20 highest waterfalls in the world.",
            "Located near the village of Cocachimba in the Chachapoyas region.",
            "The total height is 771 meters (2,530 feet).",
            "Remained 'undiscovered' by the outside world for so long due to local superstitions.",
            "A major highlight of the 'Northern Peru' circuit, alongside the fortress of Kuélap."
        ]
    },
    "pe-anc-llanganuco-nature-v2": {
        "desc": "The Llanganuco Lakes are two mesmerizing turquoise glacial lagoons, Orconcocha and Chinancocha, nestled in a high-altitude valley between the towering peaks of Huascarán and Huandoy. Located within the Huascarán National Park, their striking color is the result of 'rock flour'—fine mineral particles suspended in the glacial meltwater. The lakes are surrounded by a unique forest of polylepis trees, known for their papery, reddish bark and their ability to thrive at extreme elevations. The road leading to the lakes is one of the most spectacular in the Andes, offering dizzying views of vertical granite walls and shimmering ice. Visitors can take boat rides on the crystal-clear waters or hike along the shoreline to enjoy the pure mountain air. These lakes are a quintessential image of the Cordillera Blanca's stunning beauty and a must-visit for any nature lover in the Ancash region. They remain a peaceful sanctuary in the shadow of Peru's highest mountains.",
        "facts": [
            "Located at an altitude of approximately 3,850 meters (12,630 feet).",
            "The name 'Llanganuco' means 'blue valley' or 'place of the turquoise' in Quechua.",
            "Chinancocha is the larger and more popular 'female' lake.",
            "The area is home to the Andean goose and various species of ducks.",
            "The site of a tragic landslide in 1970 that followed a massive earthquake."
        ]
    },
    "pe-pun-taquile-nature-v2": {
        "desc": "Taquile Island, located in the middle of Lake Titicaca, is a world-renowned center for traditional textiles and a place where ancient Andean customs are still strictly followed. The island is famous for its 'knitting men,' who produce some of the finest high-quality textiles in Peru, a tradition that has been recognized by UNESCO as Masterpieces of the Oral and Intangible Heritage of Humanity. Life on Taquile is governed by the Inca moral code: 'Amua sua, ama llulla, ama quella' (do not steal, do not lie, do not be lazy). There are no cars or hotels on the island, and visitors stay in modest homestays, providing a deeply authentic cultural experience. The island's stone-paved paths and terraced hillsides offer spectacular views of the vast lake and the distant snow-capped mountains of Bolivia. A visit to Taquile is a journey into a peaceful, communal way of life that has endured for centuries. It remains a powerful symbol of indigenous pride and resilience.",
        "facts": [
            "Inhabitants are known as Taquileños and speak Quechua.",
            "Textiles are entirely hand-knitted or woven on pre-Hispanic looms.",
            "The island is approximately 5.5 kilometers long and 1.6 kilometers wide.",
            "UNESCO recognized the island's textile art in 2005.",
            "Features several pre-Inca ruins and extensive agricultural terraces."
        ]
    },
    "pe-pun-amantani-nature-v2": {
        "desc": "Amantaní is a serene and beautiful island on Lake Titicaca, known for its warm hospitality and its two sacred peaks, Pachatata and Pachamama. Larger and more remote than Taquile, it offers an even more immersive homestay experience, where visitors share meals and stories with local families. The island is divided into ten communities that take turns hosting guests, ensuring a fair distribution of the benefits of tourism. Life here is simple and deeply connected to the land, with hillsides covered in ancient terraces where quinoa, potatoes, and beans are still grown. Hiking to the temples at the top of the two peaks at sunset provides a breathtaking 360-degree view of the lake and a sense of profound spiritual connection. The island's lack of modern infrastructure and its peaceful, starry nights make it a perfect place for reflection. Amantaní remains a bastion of traditional Aymara and Quechua culture.",
        "facts": [
            "Home to approximately 4,000 people living in ten traditional communities.",
            "The two main peaks, Pachatata (Father Earth) and Pachamama (Mother Earth), feature ancient stone temples.",
            "Known as the 'Island of the Kantuta,' the national flower of Peru.",
            "There are no hotels; visitors stay in family homes in a communal rotation system.",
            "Famous for its traditional dance festivals where visitors are often invited to participate."
        ]
    },
    "pe-pun-suasi-nature-v2": {
        "desc": "Suasi Island is a secluded private sanctuary in the most remote part of Lake Titicaca, offering a luxurious and eco-friendly escape from the modern world. Unlike the more populated islands, Suasi is an ecological reserve dedicated to the restoration of native flora and fauna, including vicuñas and various Andean birds. The island's only accommodation is a beautiful solar-powered lodge built from local stone and wood, designed to blend perfectly with the landscape. Visitors can enjoy quiet activities like kayaking on the crystal-clear waters, birdwatching, or simply relaxing in the gardens while taking in the immense silence of the lake. The high altitude and lack of light pollution make it one of the best places in the world for stargazing. Suasi provides a unique perspective on the lake's beauty, far from the main tourist routes. It is a place of profound peace where the horizon seems endless and the connection to nature is absolute.",
        "facts": [
            "The only private island in Lake Titicaca, covering about 43 hectares.",
            "The island's power is generated entirely by solar panels.",
            "Features a 'cultural cabin' with a museum and information about the lake's history.",
            "Home to a small herd of rescued vicuñas.",
            "Located in the northeastern part of the lake, near the Bolivian border."
        ]
    },
    "pe-lma-siula-nature-v2": {
        "desc": "Siula Grande is a formidable and legendary peak in the Cordillera Huayhuash, famous worldwide as the setting for the incredible survival story 'Touching the Void.' Standing at 6,344 meters, its sheer West Face is one of the most difficult and dangerous climbs in the Andes, characterized by unstable ice and vertical rock. The harrowing ordeal of British climbers Joe Simpson and Simon Yates on this mountain in 1985 has made Siula Grande a place of pilgrimage for mountaineers and fans of the book and film. Beyond its fame, the mountain is a spectacular natural monument, part of a compact and jagged range that many consider the most beautiful in the world. The trek around the Huayhuash provides stunning views of Siula's dramatic ridges and the turquoise lagoons at its base. It remains a symbol of the extreme challenges and the indomitable human spirit associated with Andean mountaineering. Its jagged profile is a constant reminder of the raw power of nature.",
        "facts": [
            "The story of the first ascent of its West Face is chronicled in 'Touching the Void'.",
            "Located in the Cordillera Huayhuash, between the Lima, Ancash, and Huánuco regions.",
            "One of the many peaks in the range that exceed 6,000 meters.",
            "The mountain features a smaller companion peak called Siula Chico.",
            "Known for its frequent avalanches and extremely technical climbing routes."
        ]
    },
    "pe-anc-chopicalqui-nature-v2": {
        "desc": "Chopicalqui is a magnificent 6,354-meter peak in the Cordillera Blanca, often called the 'Third Peak of Huascarán' due to its proximity and shared ridge with the country's highest mountain. It is one of the most popular 6,000-meter climbs in Peru, known for its elegant snow ridges and a spectacular summit that offers a 360-degree view of the entire range. While considered less technical than its neighbor Alpamayo, it still requires significant mountaineering skill to navigate its crevasses and steep final slopes. The climb takes adventurers through the stunning Llanganuco Valley, providing an immersive experience of the high-altitude glacial world. For many climbers, reaching the summit of 'Chopi' is a career highlight and a perfect introduction to the challenges of the great Andean peaks. The mountain's massive ice-covered bulk is a dominant feature of the horizon north of Huaraz. It remains a classic destination for the global mountaineering community.",
        "facts": [
            "Sometimes referred to as the 'Andean Matterhorn' for its striking profile from certain angles.",
            "First successfully climbed in 1932 by a German-Austrian expedition.",
            "The most common climbing route is the Southwest Ridge.",
            "Offers some of the best views of Huascarán, Huandoy, and Contrahierbas peaks.",
            "Requires a high level of physical fitness and acclimatization."
        ]
    },
    "pe-lor-putumayo-nature-v2": {
        "desc": "The Putumayo River is a massive and remote waterway that forms a large part of the international border between Peru and Colombia, flowing through the heart of the northern Amazon. This deep and powerful river is a vital artery for transport and trade in one of the most isolated regions of the continent. Its banks are lined with dense, primary rainforest that is home to diverse indigenous communities and an incredible array of wildlife, including jaguars, tapirs, and giant otters. Historically, the Putumayo was the site of the tragic rubber boom in the early 20th century, a past that still resonates in the region today. Now, it is a focus for international conservation efforts aimed at protecting the trans-boundary Amazonian ecosystems. The river's vast and untamed course is a testament to the sheer scale of the Amazon basin. It remains a frontier region of immense biological and cultural significance.",
        "facts": [
            "Forms approximately 1,500 kilometers of the Peru-Colombia border.",
            "A major tributary of the Amazon River, which it joins in Brazil (as the Içá River).",
            "Navigable by riverboats for most of its length.",
            "Home to several indigenous groups, including the Bora and Huitoto.",
            "A critical corridor for the movement of large Amazonian mammals and fish."
        ]
    },
    "pe-lor-napo-nature-v2": {
        "desc": "The Napo River is a broad and majestic tributary of the Amazon that originates in the volcanic highlands of Ecuador and flows southeast through the Peruvian rainforest. As one of the largest and most important rivers in the region, it has historically served as a major exploration route into the heart of the Amazon basin. The Napo is famous for its incredible biodiversity, with its floodplains and surrounding forests hosting thousands of species of birds, monkeys, and exotic plants. Many world-class jungle lodges are located along its banks, offering visitors the chance to explore the canopy and witness the vibrant life of the rainforest. The river is also a primary transport route for indigenous Kichwa and Secoya communities. Its wide, sediment-rich waters are a vital source of life and connectivity for the northern Peruvian Amazon. It remains a key focus for both tourism and ecological conservation.",
        "facts": [
            "The river is approximately 1,130 kilometers (700 miles) long.",
            "Was the route taken by Francisco de Orellana during the first European exploration of the Amazon in 1541.",
            "Joins the Amazon River near the city of Iquitos.",
            "Home to the Yasuní-Napo moist forest, one of the most biodiverse areas on the planet.",
            "A major source of fish for the markets of Iquitos and regional communities."
        ]
    },
    "pe-pun-bahuaja-nature-v2": {
        "desc": "Bahuaja-Sonene National Park is a massive and unique protected area in southeastern Peru, preserving the only tropical humid savanna in the country, known as the 'Pampas del Heath.' This extraordinary landscape is a mosaic of grasslands, palm swamps, and dense Amazonian rainforest, creating a habitat for a highly specialized range of wildlife. The park is home to several rare species that are found nowhere else in Peru, such as the maned wolf and the marsh deer. It also protects a significant portion of the Madre de Dios and Puno regions' biodiversity, including jaguars, giant otters, and hundreds of bird species. The park is extremely remote and difficult to access, which has helped keep its ecosystems in a pristine state. It represents a vital link in the massive 'Vilcabamba-Amboró' conservation corridor that stretches into Bolivia. Bahuaja-Sonene is a true frontier of biological discovery and a critical bastion for the preservation of Peru's natural heritage.",
        "facts": [
            "Covers more than 1 million hectares (2.6 million acres).",
            "Protects the only tropical savanna ecosystem in Peru.",
            "Home to over 600 species of birds and 180 species of mammals.",
            "The name is a combination of the Esse'eja names for the Tambopata (Bahuaja) and Heath (Sonene) rivers.",
            "Recognized as one of the most biodiverse national parks in the world."
        ]
    },
    "pe-cal-palomino-nature-v2": {
        "desc": "The Palomino Islands, located just off the coast of Callao near Lima, offer one of the most unique and thrilling wildlife experiences in Peru: the chance to swim with a massive colony of sea lions in their natural habitat. These rugged, rocky islands are home to thousands of South American sea lions who bask on the cliffs and play in the surrounding waters. Visitors can take boat tours from Callao to the islands, where they can jump into the cool Pacific waters and interact with these curious and friendly 'sea wolves.' The islands also host a variety of seabirds, including Humboldt penguins and Peruvian boobies. The contrast between the wild, barking colony and the distant skyline of the capital is truly striking. It is a fantastic and accessible way to experience the incredible marine life of the Humboldt Current. The experience is both an adventure and a beautiful encounter with nature just minutes from the city.",
        "facts": [
            "Located approximately 6 miles off the coast of Callao.",
            "Home to an estimated 8,000 sea lions.",
            "The islands are part of the 'Guaneras, Guano and National Reserve' system.",
            "Boats provide thermal suits (wetsuits) for those wishing to swim with the sea lions.",
            "Guano birds like the Guanay cormorant are also found here in large numbers."
        ]
    },
    "pe-apu-apurimac-nature-v2": {
        "desc": "The Apurímac River is a powerful and legendary waterway that is considered the most distant source of the Amazon River. Carving its way through the deep and rugged canyons of the southern Peruvian Andes, it is one of the most formidable rivers in the world for white-water rafting. Its name, meaning 'The Speaker of the Gods' in Quechua, reflects the roaring sound of its rapids as they echo through the vertical rock walls. The river passes through some of the most remote and spectacular scenery in Peru, including the territory of the Inca Bridge of Q’eswachaka. Over millions of years, it has created a landscape of immense scale and geological beauty. Its cold, fast-moving waters are a testament to the raw power of the Andean mountains. For adventurers, the Apurímac is a ultimate test of skill and a journey into one of the deepest canyons in the world. It remains a vital and awe-inspiring part of the Amazon's vast story.",
        "facts": [
            "Forms one of the deepest canyons in the world, reaching depths of over 3,000 meters.",
            "Its source at Nevado Mismi was definitively identified as the Amazon's origin in 2000.",
            "Known as one of the best 'Class IV-V' white-water rafting rivers on the planet.",
            "The river later joins the Mantaro to become the Ene River.",
            "Home to several species of high-altitude fish and river-dwelling birds."
        ]
    },
    "pe-are-cotahuasi-nature-v2": {
        "desc": "The Cotahuasi River is the architect of the Cotahuasi Canyon, which is widely recognized as the deepest canyon in the world—reaching a staggering depth of 3,535 meters. Located in a remote part of the Arequipa department, the river flows through a landscape of incredible dramatic beauty, including massive waterfalls like Sipia and diverse ecological zones. The surrounding valley is home to traditional Andean villages, ancient pre-Inca ruins, and vast forests of cacti and Puyas. Because of its isolation, the Cotahuasi region has preserved much of its traditional culture and untouched natural beauty, offering a much quieter alternative to the more famous Colca Canyon. The river itself is a challenging destination for extreme kayaking and rafting. A journey to Cotahuasi is an adventure into one of the most rugged and awe-inspiring corners of the Andes. It stands as a monumental testament to the power of water to shape the earth.",
        "facts": [
            "Approximately 3,535 meters (11,597 feet) deep, nearly twice as deep as the Grand Canyon.",
            "Home to the spectacular Sipia Waterfall, which drops 150 meters.",
            "The surrounding area was designated a National Landscape Reserve in 2005.",
            "Features several unique stone forests and ancient agricultural terraces still in use.",
            "Requires a long and challenging journey from Arequipa to reach."
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
