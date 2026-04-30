
import re
import os

files_data = {
    "lib/visualLab/data/poiExtraBelizeNatureV2.ts": {
        "bz-rio-hondo-river-nature-v2": {
            "desc": "The Rio Hondo is a vital waterway that forms much of the northern border between Belize and Mexico. Flowing into Chetumal Bay, the river has been a crucial artery for trade, transport, and communication since the time of the ancient Maya. Its name, which means 'Deep River' in Spanish, reflects its importance as a navigable route for timber and agricultural products. The river's lush banks are home to diverse tropical flora and fauna, and it remains a key ecological corridor. For visitors, the Rio Hondo offers scenic beauty and a glimpse into the historic cross-border interactions that have shaped the culture and economy of northern Belize.",
            "facts": [
                "The Rio Hondo is approximately 150 kilometers (93 miles) long.",
                "It serves as a natural boundary between Belize and the Mexican state of Quintana Roo.",
                "The river was a major route for the colonial mahogany trade.",
                "It flows through fertile agricultural lands producing sugar and citrus.",
                "The river supports diverse aquatic life, including several species of snook and tarpon.",
                "It empties into the Caribbean Sea via the Chetumal Bay.",
                "The ancient Maya city of Santa Rita was located near its mouth."
            ]
        },
        "bz-new-river-nature-v2": {
            "desc": "The New River is one of Belize's most iconic and historically significant waterways, flowing through the heart of the Orange Walk District. Famous as the ancient Maya route to the spectacular city of Lamanai, the river offers a scenic journey through lush mangroves and tropical forest. Today, the New River remains a vital part of the regional economy, supporting the sugar industry and a growing eco-tourism sector. Visitors on boat tours can spot a variety of wildlife, including crocodiles, howler monkeys, and numerous tropical birds. The river's calm, dark waters and its rich archaeological connections make it a premier destination for those seeking to experience the natural and cultural heritage of northern Belize.",
            "facts": [
                "The New River flows for approximately 132 kilometers (82 miles).",
                "It is the longest river entirely within the borders of Belize.",
                "The river is the main access route to the Lamanai archaeological site.",
                "It was a key waterway for the colonial timber and chicle industries.",
                "The river is home to a significant population of Morelet's crocodiles.",
                "Orange Walk Town is the largest settlement along its banks.",
                "The river's lagoon system is a major habitat for migratory birds."
            ]
        },
        "bz-belize-river-nature-v2": {
            "desc": "The Belize River is the country's most important and historic waterway, once serving as the primary highway for the timber trade and the early settlement of the interior. Flowing from the Maya Mountains to the Caribbean Sea, the river winds through a fertile valley that remains the agricultural heartland of Belize. The river is steeped in colonial and Maya history, with numerous ancient sites and historic villages along its banks. Today, the Belize River is a popular spot for canoeing, fishing, and community-based eco-tourism. Its scenic beauty, its rich biodiversity, and its central role in the birth of the nation make it a vital and cherished part of the Belizean landscape.",
            "facts": [
                "The Belize River system is over 290 kilometers (180 miles) long.",
                "It drains more than one-quarter of the total land area of Belize.",
                "The river was the main artery for the colonial mahogany industry.",
                "It is the site of the annual La Ruta Maya canoe race.",
                "The river valley is home to many of Belize's most productive farms.",
                "It empties into the sea just north of Belize City.",
                "The river's headwaters are formed by the Macal and Mopan rivers."
            ]
        },
        "bz-sittee-river-nature-v2": {
            "desc": "The Sittee River is a beautiful and biodiverse waterway in the Stann Creek District, known for its lush riverine forest and its spectacular mangrove system near the coast. The river originates in the Maya Mountains and flows through a series of scenic valleys and agricultural lands before entering the Caribbean Sea. The Sittee River is famous for its large populations of howler monkeys and its rich avian life, making it a favorite for nature lovers and birdwatchers. The village of Sittee River offers a quiet and authentic base for exploring the river's upper reaches and the nearby barrier reef. With its clear waters and its untamed tropical setting, the Sittee River provides a tranquil and immersive eco-experience.",
            "facts": [
                "The Sittee River is approximately 60 kilometers (37 miles) long.",
                "It features some of the tallest mangrove trees in Belize near its mouth.",
                "The river is a major center for small-scale citrus and cacao farming.",
                "It is home to the Sittee River Wildlife Sanctuary.",
                "The village of Sittee River is one of the oldest settlements in the district.",
                "The river is a popular spot for kayaking and fly-fishing.",
                "It originates in the rugged eastern slopes of the Maya Mountains."
            ]
        },
        "bz-monkey-river-nature-v2": {
            "desc": "Monkey River is a legendary waterway in southern Belize, celebrated for its raw natural beauty and its eponymous population of howler monkeys. Flowing through the dense jungles of the Toledo District, the river offers one of the country's most authentic wildlife experiences. Visitors can take boat tours upstream from the coastal village of Monkey River, spotting crocodiles, iguanas, and a vast array of tropical birds along the lush banks. The river's mouth is a critical habitat for the endangered West Indian manatee. With its untamed tropical setting and its rich ecological diversity, Monkey River is a premier destination for eco-tourists seeking a true wilderness adventure in the heart of the southern rainforest.",
            "facts": [
                "The river is approximately 64 kilometers (40 miles) long.",
                "It is named after the loud and abundant Black Howler Monkeys.",
                "The coastal village at its mouth is a historic Creole fishing community.",
                "Monkey River is a key site for viewing West Indian Manatees.",
                "The river's upper reaches are part of the Bladen Nature Reserve system.",
                "It is famous for its 'jungle walks' where visitors can see monkeys up close.",
                "The river supports a diverse sport-fishing industry, including tarpon and snook."
            ]
        },
        "bz-sarstoon-river-nature-v2": {
            "desc": "The Sarstoon River is a remote and powerful waterway that forms the southernmost border between Belize and Guatemala. Flowing through one of the most pristine and biodiverse regions of the Maya Mountains, the river is the centerpiece of the Sarstoon-Temash National Park. The area is characterized by vast areas of untouched rainforest, extensive mangrove systems, and a wealth of rare wildlife. The Sarstoon River remains a vital ecological corridor and a sacred landscape for the local Q'eqchi' Maya communities. Due to its remote location and protected status, the river offers a rare glimpse into a truly wild and undisturbed tropical environment, where nature prevails and human influence is minimal.",
            "facts": [
                "The Sarstoon River serves as the entire southern border of Belize.",
                "It is a major feature of the 41,000-acre Sarstoon-Temash National Park.",
                "The river is a critical habitat for the endangered Central American river turtle.",
                "It is home to some of the largest tracts of comfrey palms in Belize.",
                "The area is exceptionally rich in tropical bird and orchid species.",
                "Access to the river is primarily via boat from Punta Gorda or Barranco.",
                "It is a vital water source for the remote Maya communities of the far south."
            ]
        },
        "bz-moho-river-nature-v2": {
            "desc": "The Moho River is a majestic and historically significant waterway in the Toledo District, winding through a rugged landscape of limestone hills and dense tropical forest. Known for its spectacular waterfalls and deep jungle scenery, the river was an important trade route for the ancient Maya, with sites like Pusilha located along its banks. Today, the Moho River is a premier destination for adventure seekers, offering world-class kayaking and canoeing through its many rapids and serene pools. The river is surrounded by fertile agricultural lands where traditional Maya farming still prevails. With its raw natural beauty and its deep cultural connections, the Moho River provides an unforgettable journey into the wild heart of southern Belize.",
            "facts": [
                "The Moho River is approximately 95 kilometers (59 miles) long.",
                "It originates in the highlands of Guatemala before entering Belize.",
                "The river is famous for the stunning Moho River Falls.",
                "It was a major artery for the ancient Maya cacao trade.",
                "The river supports diverse wildlife, including howler monkeys and river otters.",
                "It is a popular spot for extreme whitewater kayaking.",
                "The surrounding forest is home to many ancient Maya ceremonial sites."
            ]
        },
        "bz-deep-river-nature-v2": {
            "desc": "Deep River is a remote and scenic waterway located in the Toledo District, known for its pristine environment and its role as a vital ecological corridor. The river flows through a vast area of protected savanna and tropical forest before entering the Port Honduras Marine Reserve. Deep River is a haven for nature lovers and birdwatchers, offering a quiet and undisturbed setting where wildlife thrives. The river's lower reaches are particularly important for the endangered West Indian manatee and a variety of marine species. With its tranquil atmosphere and its commitment to conservation, Deep River provides an authentic and peaceful experience of southern Belize's untamed natural wonders, far removed from the more visited tourist areas.",
            "facts": [
                "Deep River is approximately 50 kilometers (31 miles) long.",
                "It is a key feature of the Deep River Forest Reserve.",
                "The river empties into the Caribbean Sea within a UNESCO-recognized marine reserve.",
                "It is a major habitat for the West Indian Manatee.",
                "The area is famous for its extensive and healthy mangrove forests.",
                "The river supports a diverse population of tropical birds and reptiles.",
                "Access to the river is primarily via boat from the coast."
            ]
        },
        "bz-temash-river-nature-v2": {
            "desc": "The Temash River is a remote and stunningly beautiful waterway located in the heart of the Sarstoon-Temash National Park in southern Belize. Flowing through some of the country's most isolated and biodiverse rainforests, the river is a sanctuary for rare and endangered species. The Temash is known for its dramatic limestone cliffs, its extensive mangrove systems, and its deep connection to the traditional Q'eqchi' Maya communities that live along its banks. The river remains a vital part of the local culture and economy, providing a source of water, food, and transport. For those who venture into this wild frontier, the Temash River offers a profound and authentic experience of Belize's untamed natural and cultural heritage.",
            "facts": [
                "The Temash River is approximately 55 kilometers (34 miles) long.",
                "It is a central feature of the Sarstoon-Temash National Park.",
                "The river features some of the deepest and most pristine mangroves in the region.",
                "It is home to the rare and elusive West Indian Manatee.",
                "The area is a critical habitat for the Morelet's crocodile.",
                "The river's headwaters are located deep in the Maya Mountains.",
                "Traditional river-based lifestyles are still maintained by local Maya villagers."
            ]
        },
        "bz-vaca-plateau-nature-v2": {
            "desc": "The Vaca Plateau is a rugged and dramatic limestone highland in the Cayo District, characterized by its spectacular karst topography, numerous caves, and deep river gorges. This 52,000-acre plateau is a vital part of Belize's central biological corridor, providing a critical habitat for wide-ranging species like the jaguar and scarlet macaw. The area is famous for its stunning natural landmarks, including the Vaca Falls and the massive Che Chem Ha Cave. Historically, the plateau was a significant region for the ancient Maya, who used its many caves for ceremonial purposes. Today, the Vaca Plateau is a premier destination for eco-tourism and adventure, offering a wild and challenging landscape that showcases the incredible geological and biological diversity of inland Belize.",
            "facts": [
                "The Vaca Plateau covers approximately 52,000 acres of protected land.",
                "It is part of the larger Maya Mountain massif.",
                "The area features elevations ranging from 100 to over 600 meters.",
                "It is home to the largest population of Scarlet Macaws in western Belize.",
                "The plateau is characterized by thousands of karst sinkholes and caves.",
                "It serves as a vital watershed for the Macal and Belize rivers.",
                "The Vaca Forest Reserve protects much of the plateau's unique biodiversity."
            ]
        },
        "bz-chiquibul-forest-nature-v2": {
            "desc": "The Chiquibul Forest is the largest and most ecologically significant tropical rainforest in Belize, covering nearly 8% of the country's land area. Located in the heart of the Maya Mountains, this vast wilderness is part of the Chiquibul National Park and the Chiquibul Forest Reserve. It is a world-class center for biodiversity, home to the largest populations of jaguars, harpy eagles, and tapirs in the region. The forest is also famous for its spectacular karst features, including the Chiquibul Cave System—the longest in Central America. Historically, the Chiquibul was the heartland of the ancient Maya city of Caracol. Today, it remains a critical frontier for conservation, research, and the protection of Belize's natural and cultural heritage.",
            "facts": [
                "The Chiquibul Forest encompasses over 400,000 acres of land.",
                "It contains the Chiquibul Cave System, with over 540 kilometers of explored passages.",
                "The forest is home to Belize's highest peak, Doyle's Delight.",
                "It is a critical habitat for the endangered Scarlet Macaw.",
                "The ancient Maya city of Caracol is located deep within the forest.",
                "The area is a major site for international archaeological and biological research.",
                "It serves as a vital watershed for the entire southern half of Belize."
            ]
        },
        "bz-mountain-pine-ridge-nature-v2": {
            "desc": "Mountain Pine Ridge is a unique and unexpected ecological island in the Cayo District, where tropical broadleaf forest gives way to vast stands of Honduran Pine. This 106,000-acre reserve is one of the oldest geological formations in Central America, featuring ancient granite bedrock, cool mountain streams, and spectacular waterfalls. The ridge offers a refreshing climate and a distinct landscape that stands in contrast to the rest of Belize. It is a haven for hikers, birdwatchers, and adventure seekers, with iconic sites like Rio On Pools and Thousand Foot Falls. Mountain Pine Ridge is a testament to the incredible environmental diversity of Belize, providing a critical refuge for rare species and a breathtaking destination for nature lovers.",
            "facts": [
                "Mountain Pine Ridge was established as a forest reserve in 1944.",
                "It is the oldest and largest protected pine forest in Central America.",
                "The reserve's geology dates back over 250 million years.",
                "It is home to the rare Orange-breasted Falcon.",
                "The area features the highest waterfall in Central America, Thousand Foot Falls.",
                "Elevations within the reserve reach up to 1,000 meters (3,280 feet).",
                "The dominant tree species is the fire-resistant Pinus caribaea."
            ]
        },
        "bz-columbia-river-forest-reserve-nature-v2": {
            "desc": "The Columbia River Forest Reserve is one of the most pristine and biodiverse protected areas in southern Belize, located in the Toledo District. This vast area of lush tropical rainforest is part of the larger Maya Mountain massif and serves as a critical link in the regional biological corridor. The reserve is characterized by its rugged karst topography, its numerous clear mountain streams, and its wealth of rare flora and fauna. Historically, the forest was a major center for the ancient Maya, and today it remains a vital landscape for the local Mopan and Q'eqchi' Maya communities. With its raw natural beauty and its immense ecological value, the Columbia River Forest Reserve is a sanctuary for wildlife and a vital frontier for conservation and research in the tropics.",
            "facts": [
                "The reserve encompasses over 100,000 acres of protected rainforest.",
                "It is home to the spectacular Little Quartz Ridge.",
                "The area is a critical habitat for the jaguar and the harpy eagle.",
                "It contains some of the highest tree species diversity in Belize.",
                "The reserve serves as the headwaters for the Columbia and Moho rivers.",
                "It features numerous unexcavated Maya archaeological sites.",
                "Access is strictly regulated to protect the sensitive environment."
            ]
        },
        "bz-rio-bravo-conservation-area-nature-v2": {
            "desc": "The Rio Bravo Conservation and Management Area is the largest private nature reserve in Belize, covering over 250,000 acres of tropical forest and savanna in the northwest. Managed by the Program for Belize, it is a global model for sustainable conservation and land management. The area is home to a staggering array of wildlife, including all five of Belize's wild cat species and over 400 species of birds. Rio Bravo is also rich in ancient history, with dozens of Maya archaeological sites, including the massive city of La Milpa. With its commitment to research, environmental education, and low-impact eco-tourism, Rio Bravo offers visitors an unparalleled opportunity to experience the wild beauty and ancient mysteries of Belize's northern forest.",
            "facts": [
                "Rio Bravo covers approximately 4% of Belize's total land area.",
                "It is home to more than 400 bird species and 200 tree species.",
                "The area contains over 60 ancient Maya archaeological sites.",
                "It is a world leader in sustainable forestry and carbon sequestration projects.",
                "The La Milpa Field Station is a major center for research and eco-tourism.",
                "The reserve protects critical habitat for the endangered Central American tapir.",
                "It was established in 1988 through an international conservation effort."
            ]
        },
        "bz-cockscomb-basin-nature-v2": {
            "desc": "Cockscomb Basin is a world-renowned nature reserve and the site of the world's first dedicated jaguar sanctuary. Located in the shadow of the Maya Mountains, this vast protected area encompasses over 128,000 acres of lush tropical rainforest, providing a critical habitat for Belize's wild cats and countless other species. The basin is a paradise for hikers and nature lovers, featuring an extensive network of trails that lead to stunning waterfalls, scenic overlooks, and clear jungle streams. With its rich biodiversity, its pioneering conservation history, and its raw natural beauty, Cockscomb Basin is a must-visit destination for anyone seeking to experience the wild heart of Belize and the success of its global conservation efforts.",
            "facts": [
                "Cockscomb Basin was established as a jaguar sanctuary in 1986.",
                "The reserve encompasses approximately 200 square miles of rainforest.",
                "It is home to an estimated population of 60 to 80 jaguars.",
                "Victoria Peak, the second-highest point in Belize, is located here.",
                "The area features over 12 miles of well-maintained hiking trails.",
                "It is a major center for birdwatching, with over 300 recorded species.",
                "The sanctuary is managed by the Belize Audubon Society."
            ]
        },
        "bz-moho-river-toledo-nature-v2": {
            "desc": "The Moho River is a majestic and historically significant waterway in the Toledo District, winding through a rugged landscape of limestone hills and dense tropical forest. Known for its spectacular waterfalls and deep jungle scenery, the river was an important trade route for the ancient Maya, with sites like Pusilha located along its banks. Today, the Moho River is a premier destination for adventure seekers, offering world-class kayaking and canoeing through its many rapids and serene pools. The river is surrounded by fertile agricultural lands where traditional Maya farming still prevails. With its raw natural beauty and its deep cultural connections, the Moho River provides an unforgettable journey into the wild heart of southern Belize.",
            "facts": [
                "The Moho River is approximately 95 kilometers (59 miles) long.",
                "It originates in the highlands of Guatemala before entering Belize.",
                "The river is famous for the stunning Moho River Falls.",
                "It was a major artery for the ancient Maya cacao trade.",
                "The river supports diverse wildlife, including howler monkeys and river otters.",
                "It is a popular spot for extreme whitewater kayaking.",
                "The surrounding forest is home to many ancient Maya ceremonial sites."
            ]
        }
    },
    "lib/visualLab/data/poiExtraBelizeReliefV2.ts": {
        "bz-maya-mountains-relief-v2": {
            "desc": "The Maya Mountains are the dominant geographical feature of southern and central Belize, rising from the coastal plains to form a rugged and spectacular highland landscape. This ancient mountain range is composed primarily of Paleozoic granite and sedimentary rocks, making it one of the oldest geological formations in Central America. The mountains are a vital watershed, giving rise to all of Belize's major rivers and supporting a vast area of pristine tropical rainforest. Home to some of the country's most iconic wildlife and highest peaks, the Maya Mountains are a sanctuary for biodiversity and a frontier for exploration and conservation. Their untamed beauty and deep cultural significance make them the enduring heart of Belize's natural heritage.",
            "facts": [
                "The Maya Mountains extend approximately 115 kilometers (71 miles) across Belize.",
                "They are part of the larger Sierra Madre de Chiapas system.",
                "The mountains feature elevations ranging from 300 to over 1,100 meters.",
                "They are home to Victoria Peak and Doyle's Delight, Belize's highest points.",
                "The range contains some of the oldest rocks in Central America.",
                "The mountains support the largest continuous tract of rainforest in the region.",
                "They were a major source of granite and slate for the ancient Maya."
            ]
        },
        "bz-doyles-delight-peak-relief-v2": {
            "desc": "Doyle's Delight is the highest point in Belize, a majestic peak located deep within the Maya Mountains on the border between the Cayo and Toledo districts. Rising to an elevation of 1,124 meters, it offers a challenging and rewarding destination for extreme hikers and explorers. The peak was named by Sharon Matola in 1989, inspired by a line from Arthur Conan Doyle's 'The Lost World.' Surrounded by pristine elfin forest and often shrouded in mist, Doyle's Delight is a sanctuary for rare and high-altitude species. Reaching the summit is a true expedition, requiring days of trekking through some of the most rugged and remote wilderness in Central America, offering a profound sense of isolation and natural wonder.",
            "facts": [
                "Doyle's Delight stands at an elevation of 1,124 meters (3,688 feet).",
                "It was officially confirmed as Belize's highest peak in 2004.",
                "The peak is located on the main divide of the Maya Mountains.",
                "It is surrounded by a unique and biodiverse high-altitude cloud forest.",
                "Reaching the summit typically takes 3 to 4 days of difficult trekking.",
                "The area is a critical habitat for many rare Central American birds.",
                "It was named in honor of the author of 'The Lost World'."
            ]
        },
        "bz-victoria-peak-relief-v2": {
            "desc": "Victoria Peak is Belize's second-highest and most iconic mountain, famously located within the Cockscomb Basin Wildlife Sanctuary. Known for its distinctive and dramatic silhouette, the peak rises 1,120 meters above the tropical forest, dominating the skyline of the Stann Creek District. Victoria Peak is a designated national monument, protected for its unique geology and the rare high-altitude ecosystems found on its slopes. The hike to the summit is considered one of the most challenging and prestigious adventures in Belize, involving a multi-day trek through dense jungle and steep mountain ridges. Reaching the top provides breathtaking panoramic views of the entire Maya Mountain range and the Caribbean coast, making it a dream destination for serious mountaineers.",
            "facts": [
                "Victoria Peak stands at an elevation of 1,120 meters (3,675 feet).",
                "It was designated a National Monument in 1998.",
                "The peak is located on a northern spur of the Maya Mountains divide.",
                "The trail to the summit is approximately 27 kilometers (17 miles) long.",
                "It is home to several endemic plant species found nowhere else in Belize.",
                "The first recorded ascent was by a British exploration party in 1888.",
                "The peak is accessible only during the dry season (February to May)."
            ]
        },
        "bz-mount-pine-ridge-relief-v2": {
            "desc": "The Mountain Pine Ridge is a spectacular geological highland in the Cayo District, characterized by its ancient granite bedrock and its unexpected landscape of pine forest. This 106,000-acre plateau is one of the oldest landforms in Central America, having remained above sea level for millions of years while much of the region was submerged. The area's unique geology has created a dramatic landscape of rolling hills, deep river gorges, and some of the most spectacular waterfalls in the Caribbean. Mountain Pine Ridge offers a refreshing climate and a distinct ecosystem that stands in sharp contrast to the surrounding tropical jungles. Its rugged beauty and its wealth of natural wonders make it a premier destination for those seeking to explore the high-altitude heart of Belize.",
            "facts": [
                "Mountain Pine Ridge features an average elevation of 600 meters (2,000 feet).",
                "It is composed primarily of Paleozoic granite over 250 million years old.",
                "The area is one of the largest continuous tracts of pine forest in the region.",
                "It contains the highest waterfall in Central America, Thousand Foot Falls.",
                "The ridge serves as a vital watershed for many of Belize's major rivers.",
                "It was established as a forest reserve in 1944.",
                "The area is known for its cool mountain temperatures and high rainfall."
            ]
        },
        "bz-vaca-plateau-relief-v2": {
            "desc": "The Vaca Plateau is a rugged and dramatic limestone highland in the Cayo District, characterized by its spectacular karst topography, numerous caves, and deep river gorges. This 52,000-acre plateau is a vital part of Belize's central biological corridor, providing a critical habitat for wide-ranging species like the jaguar and scarlet macaw. The area is famous for its stunning natural landmarks, including the Vaca Falls and the massive Che Chem Ha Cave. Historically, the plateau was a significant region for the ancient Maya, who used its many caves for ceremonial purposes. Today, the Vaca Plateau is a premier destination for eco-tourism and adventure, offering a wild and challenging landscape that showcases the incredible geological and biological diversity of inland Belize.",
            "facts": [
                "The Vaca Plateau covers approximately 52,000 acres of protected land.",
                "It is part of the larger Maya Mountain massif.",
                "The area features elevations ranging from 100 to over 600 meters.",
                "It is home to the largest population of Scarlet Macaws in western Belize.",
                "The plateau is characterized by thousands of karst sinkholes and caves.",
                "It serves as a vital watershed for the Macal and Belize rivers.",
                "The Vaca Forest Reserve protects much of the plateau's unique biodiversity."
            ]
        },
        "bz-chiquibul-plateau-relief-v2": {
            "desc": "The Chiquibul Plateau is a vast and ecologically critical limestone highland located in the heart of the Maya Mountains. This remote and rugged region is part of the largest continuous tract of tropical forest in Belize and serves as a vital center for biodiversity and watershed protection. The plateau is famous for its spectacular karst features, including some of the largest sinkholes and cave systems in the Western Hemisphere. Historically, it was the strategic heartland of the ancient Maya city of Caracol. Today, the Chiquibul Plateau remains a critical frontier for conservation, research, and the protection of Belize's natural and cultural heritage, offering a wild and challenging landscape that embodies the untamed spirit of the country's interior.",
            "facts": [
                "The Chiquibul Plateau encompasses over 200,000 acres of protected land.",
                "It is home to the world-famous Chiquibul Cave System.",
                "The plateau features a rugged landscape of limestone ridges and deep gorges.",
                "It is a critical habitat for the endangered Scarlet Macaw and jaguar.",
                "The area contains the largest concentration of Maya ruins in Belize.",
                "It serves as the primary watershed for the Belize and Macal rivers.",
                "Access is strictly regulated to protect the sensitive forest and archaeological sites."
            ]
        },
        "bz-coastal-plains-relief-v2": {
            "desc": "The Coastal Plains of Belize are a broad and fertile region that stretches along the entire Caribbean coastline, forming the country's primary agricultural and residential belt. Characterized by a mix of tropical savanna, wetlands, and alluvial plains, this region is the economic heart of Belize, supporting the citrus, banana, and sugar industries. The plains are crisscrossed by numerous rivers that flow from the Maya Mountains to the sea, creating a dynamic and biodiverse landscape. Home to the majority of Belize's population and its largest urban centers, the Coastal Plains offer a vibrant tapestry of cultures, colonial history, and natural beauty. Their strategic location and productive soils make them a vital part of the nation's social and economic fabric.",
            "facts": [
                "The Coastal Plains cover approximately one-third of Belize's total land area.",
                "They feature an average elevation of less than 30 meters above sea level.",
                "The region is home to the country's most productive agricultural estates.",
                "It is characterized by extensive systems of mangrove forests and lagoons.",
                "The plains are the primary location for Belize's growing citrus and banana industries.",
                "Most of the country's major towns and cities are located in this region.",
                "The area is a critical habitat for many species of migratory birds."
            ]
        },
        "bz-northern-plains-relief-v2": {
            "desc": "The Northern Plains of Belize are a vast and fertile low-lying region that dominates the Corozal and Orange Walk districts. Characterized by its flat topography and its rich, well-drained soils, the region is the epicenter of Belize's sugarcane industry. The plains are historically and culturally significant, having been a major center for Maya civilization and later a sanctuary for refugees from the Caste War of Yucatan. Today, the Northern Plains are a bustling hub of agricultural activity, with sprawling fields of cane, citrus, and corn. The region's peaceful atmosphere, its diverse multi-ethnic population, and its deep roots in the agricultural history of the country make it a vital and prosperous part of the Belizean landscape.",
            "facts": [
                "The Northern Plains cover approximately 25% of Belize's total land area.",
                "The region is the primary producer of sugar, Belize's leading agricultural export.",
                "It features a unique mix of Mestizo, Maya, and Mennonite cultural influences.",
                "The area is characterized by numerous large, shallow lagoons and river systems.",
                "The plains are home to some of the most productive large-scale farms in Central America.",
                "It was a major center for the ancient Maya trade in salt and cacao.",
                "The region serves as the main gateway for trade and travel between Belize and Mexico."
            ]
        },
        "bz-southern-coastal-plain-relief-v2": {
            "desc": "The Southern Coastal Plain is a picturesque and rapidly developing region in the Stann Creek and Toledo districts, nestled between the Maya Mountains and the Caribbean Sea. Known for its beautiful sandy beaches, its lush mangrove forests, and its fertile alluvial soils, the region is a major center for the banana and citrus industries. The Southern Coastal Plain is a fascinating cultural crossroads, home to Garifuna, Maya, Creole, and East Indian communities living in harmony. In recent years, the region has also become a premier destination for eco-tourism and luxury resorts, particularly on the Placencia and Sittee peninsulas. With its stunning natural beauty, its rich cultural heritage, and its growing economic importance, the Southern Coastal Plain is a vital and vibrant part of Belize's landscape.",
            "facts": [
                "The Southern Coastal Plain stretches for over 150 kilometers along the coast.",
                "It is the main producer of bananas and citrus for the national economy.",
                "The region features some of the best-preserved mangrove systems in the Caribbean.",
                "It is home to the world-famous Placencia Peninsula and its sandy beaches.",
                "The area is a critical habitat for the West Indian Manatee.",
                "It serves as the primary gateway to the southern cayes and the barrier reef.",
                "The region has seen the fastest growth in the tourism sector in recent years."
            ]
        },
        "bz-karst-topography-relief-v2": {
            "desc": "The Karst Topography of Belize is one of the country's most striking and unique geological features, characterizing much of the central and western districts. Formed over millions of years by the erosion of soluble limestone, this landscape is defined by its spectacular sinkholes, towering limestone cliffs, and massive cave systems. The karst regions are a vital part of Belize's natural and cultural heritage, providing a critical habitat for rare species and serving as sacred landscapes for the ancient Maya. Famous sites like Actun Tunichil Muknal and the Blue Hole cenote are iconic examples of Belize's karst wonders. Today, these regions are premier destinations for adventure and research, offering a wild and mysterious landscape that continues to reveal the country's deep geological and archaeological secrets.",
            "facts": [
                "Karst topography covers nearly half of Belize's total land area.",
                "Belize has one of the highest densities of caves in the world.",
                "The karst regions are home to the world-famous Great Blue Hole.",
                "They serve as critical watersheds and underground aquifers for the nation.",
                "The ancient Maya utilized karst caves for over 2,000 years for rituals.",
                "Karst hills in Belize can rise to heights of over 100 meters.",
                "The region is home to many rare and endemic cave-dwelling species."
            ]
        },
        "bz-cayes-and-atolls-relief-v2": {
            "desc": "The Cayes and Atolls of Belize are a world-renowned archipelago of hundreds of islands and three spectacular coral atolls located off the Caribbean coast. These islands, ranging from small mangrove clusters to large sandy cayes, are protected by the magnificent Belize Barrier Reef. The atolls—Lighthouse Reef, Turneffe Atoll, and Glovers Reef—are unique geological features, being three of only four atolls in the Western Hemisphere. These regions are centers of world-class biodiversity and are premier destinations for snorkeling, diving, and sailing. With their crystal-clear turquoise waters, vibrant coral reefs, and tranquil island atmosphere, the cayes and atolls are the crown jewels of Belize's natural beauty and a vital part of its global tourism identity.",
            "facts": [
                "Belize has over 200 offshore cayes and three major coral atolls.",
                "The islands are part of the Belize Barrier Reef Reserve System, a UNESCO site.",
                "The atolls are ring-shaped coral reefs enclosing a central lagoon.",
                "Ambergris Caye is the largest and most developed island in Belize.",
                "The cayes provide critical nesting grounds for endangered sea turtles.",
                "Turneffe Atoll is the largest and most biologically diverse atoll in the region.",
                "Most islands are composed of coral sand and mangrove peat."
            ]
        },
        "bz-barrier-reef-relief-v2": {
            "desc": "The Belize Barrier Reef is the largest and most spectacular coral reef system in the Northern Hemisphere, stretching for over 300 kilometers along the country's coast. This magnificent natural wonder is home to a staggering array of marine life, including hundreds of species of fish, corals, and invertebrates. A UNESCO World Heritage site, the reef is a vital part of Belize's national identity, economy, and environmental protection. It provides a crucial barrier against coastal erosion and serves as the foundation for the country's world-class diving and fishing industries. With its vibrant coral gardens, its crystal-clear waters, and its immense ecological value, the Belize Barrier Reef is a global treasure and a must-visit destination for anyone seeking to experience the wonders of the Caribbean Sea.",
            "facts": [
                "The Belize Barrier Reef is the second-largest reef system in the world.",
                "It was designated a UNESCO World Heritage site in 1996.",
                "The reef system includes seven protected marine reserves.",
                "It is home to over 500 species of fish and 100 species of coral.",
                "The reef system supports nearly 200,000 people through tourism and fishing.",
                "It is a critical habitat for the endangered West Indian Manatee.",
                "The reef stretches approximately 300 kilometers (190 miles) from north to south."
            ]
        }
    },
    "lib/visualLab/data/poiExtraBelizeEconomicV2.ts": {
        "bz-tower-hill-sugar-mill-economic-v2": {
            "desc": "The Tower Hill Sugar Mill is the industrial powerhouse of Belize's northern districts and the cornerstone of the nation's sugar industry. Operated by Belize Sugar Industries (BSI), this massive facility processes the vast majority of the sugarcane grown by thousands of farmers in Corozal and Orange Walk. The mill is a vital economic engine, producing raw sugar for export to global markets and molasses for industrial use. In recent years, it has also become a major producer of renewable energy, utilizing bagasse to generate electricity for the national grid. Tower Hill represents the vital link between Belize's agricultural heritage and its modern industrial economy, providing employment and prosperity for the entire northern region of the country.",
            "facts": [
                "Tower Hill processes over 1.2 million tons of sugarcane annually.",
                "The mill is the largest single-site employer in northern Belize.",
                "It produces approximately 150,000 tons of raw sugar each year.",
                "The facility generates up to 30 MW of renewable electricity from bagasse.",
                "BSI was founded in 1963 and acquired by ASR Group in 2012.",
                "The mill is a major hub for the regional transport and logistics industry.",
                "Sugar accounts for approximately 10% of Belize's total export earnings."
            ]
        },
        "bz-big-creek-port-economic-v2": {
            "desc": "Big Creek Port is the primary deep-water port in southern Belize and a vital gateway for the country's export economy. Located in the Stann Creek District, it is the main hub for the shipment of bananas, citrus, and crude oil. The port has seen significant investment and expansion in recent years, becoming one of the most efficient and modern facilities in the region. Big Creek is the center of a bustling industrial zone, providing essential services and logistics for the southern agricultural districts and the national oil industry. Its strategic location and its role as a vital node in Belize's trade network make it a cornerstone of the nation's economic development, facilitating the movement of goods to international markets and supporting thousands of local jobs.",
            "facts": [
                "Big Creek is the only port in Belize capable of handling Panamax vessels.",
                "It is the primary export point for 100% of Belize's banana production.",
                "The port facilitates the export of crude oil from the Spanish Lookout field.",
                "It features over 1,000 meters of berthing space.",
                "Big Creek Port is a major center for the regional citrus and shrimp industries.",
                "The port was established in the 1990s and has undergone continuous expansion.",
                "It is a vital employer for the communities of Independence and Mango Creek."
            ]
        },
        "bz-belize-city-port-economic-v2": {
            "desc": "The Port of Belize City is the country's largest and most historic maritime gateway, serving as the primary hub for containerized cargo and general trade. Located at the mouth of the Belize River, the port connects the nation with major international shipping lines and markets. It is the center of a vital commercial district, housing major warehouses, logistics companies, and the headquarters of the national customs and port authorities. While facing competition from newer deep-water facilities, the Belize City port remains an essential node in the country's trade network, facilitating the import of consumer goods, fuel, and industrial equipment. Its long history and its central role in the national economy make it a cornerstone of Belize's commercial and industrial infrastructure.",
            "facts": [
                "The Port of Belize City handles over 50% of the country's containerized cargo.",
                "It is the main entry point for imported fuel and petroleum products.",
                "The port serves as a major hub for the regional distribution of goods.",
                "It is the primary port for the national cruise ship industry nearby.",
                "The facility includes a major container terminal and bulk cargo docks.",
                "The port is a key center for the country's customs and excise operations.",
                "It is situated at the most strategic location for mainland trade in Belize."
            ]
        },
        "bz-spanish-lookout-oil-field-economic-v2": {
            "desc": "The Spanish Lookout Oil Field is the site of Belize's first commercial oil discovery, representing a significant milestone in the country's economic history. Discovered in 2005 by Belize Natural Energy (BNE), the field is located within the productive agricultural lands of the Spanish Lookout Mennonite community. Since its inception, the field has produced millions of barrels of high-quality light crude oil, providing a major source of revenue for the national government and the local community. The operation is a unique example of the integration of energy extraction with traditional agriculture. The Spanish Lookout field remains the country's primary source of domestic petroleum production, contributing to energy security and economic growth while serving as a center for industrial innovation in rural Belize.",
            "facts": [
                "The first commercial oil in Belize was struck here in June 2005.",
                "The field produces high-quality 'light sweet' crude oil.",
                "BNE has produced over 10 million barrels of oil from this field.",
                "The project is a world leader in community-based resource management.",
                "Oil revenue has contributed over $500 million BZ to the national government.",
                "The field is situated within one of Belize's most productive agricultural zones.",
                "It features several large-scale processing and storage facilities on site."
            ]
        },
        "bz-belikin-brewery-economic-v2": {
            "desc": "The Belize Brewing Company, famous for its iconic Belikin beer, is the nation's premier beverage manufacturer and a symbol of national pride. Located in Ladyville, just north of Belize City, the brewery has been producing high-quality beer and stout since 1969. Belikin is more than just a drink; it is a cultural staple, often referred to as 'the beer of Belize.' The company is a major employer and a significant contributor to the national economy, utilizing local ingredients and supporting a wide network of distributors and retailers. With its commitment to quality, its distinctive packaging, and its deep roots in the Belizean lifestyle, the brewery has built one of the most recognizable and successful brands in the region, embodying the spirit and the success of Belizean industry.",
            "facts": [
                "The Belize Brewing Company was founded in 1969.",
                "Belikin is the national beer of Belize and has a near-monopoly on the local market.",
                "The brewery is located in Ladyville, near the international airport.",
                "The name 'Belikin' comes from the Maya word for the Belize River.",
                "The iconic bottle features the Altun Ha Jade Head on its label.",
                "The company produces a variety of beers, stouts, and non-alcoholic beverages.",
                "It is one of the largest and most successful private businesses in Belize."
            ]
        },
        "bz-cpbl-citrus-factory-economic-v2": {
            "desc": "Citrus Products of Belize Ltd (CPBL) is the epicenter of the nation's citrus industry and its largest processing facility. Located in the fertile Pomona Valley of the Stann Creek District, the factory processes the majority of Belize's oranges and grapefruits into juice concentrates and oils for export. CPBL is a vital economic pillar, supporting thousands of small-scale farmers and provide employment for a large rural workforce. The facility is a major industrial hub, utilizing advanced technology to meet international quality standards. With its deep roots in the agricultural history of the region and its success in global markets, the CPBL factory remains a cornerstone of the Stann Creek District's economy and a symbol of Belize's success as an agricultural exporter.",
            "facts": [
                "CPBL is the largest citrus processing company in the Caribbean region.",
                "The company operates two major processing plants in the Stann Creek Valley.",
                "It processes over 4 million boxes of citrus fruit annually.",
                "Approximately 95% of the production is exported to international markets.",
                "The company is owned by a consortium of local citrus growers and investors.",
                "Citrus accounts for nearly 15% of Belize's total agricultural export value.",
                "The factory is a major center for industrial and agricultural research."
            ]
        },
        "bz-banana-estates-economic-v2": {
            "desc": "The Banana Estates of southern Belize are the country's leading agricultural export industry, dominating the landscape of the Stann Creek and Toledo districts. These vast, neatly organized plantations are managed by both local and international companies, utilizing the fertile alluvial soils and high rainfall of the southern plains. The banana industry is a vital economic engine, providing direct employment for thousands of workers and supporting a massive logistics and transport network. Belizean bananas are world-renowned for their quality and are a major export to European markets. The estates are a testament to the success of large-scale commercial agriculture in Belize and remain an essential part of the nation's social and economic fabric, driving growth and development in the southern regions.",
            "facts": [
                "Bananas are Belize's leading agricultural export by volume.",
                "The industry encompasses over 7,000 acres of planted land.",
                "Belize produces over 4.5 million boxes of bananas annually for export.",
                "The industry provides direct employment for over 3,000 workers.",
                "The majority of Belizean bananas are sold to the European Union under Fairtrade.",
                "The estates are primarily located in the Cowpen, Independence, and Trio areas.",
                "Bananas account for approximately 20% of Belize's total agricultural GDP."
            ]
        },
        "bz-prawn-farms-economic-v2": {
            "desc": "The Prawn and Shrimp Farms of Belize are a highly successful and expanding part of the country's aquaculture industry. Located primarily along the coastal plains of the Stann Creek and Belize districts, these farms utilize a combination of fertile land and pristine seawater to produce high-quality seafood for export. Belize has become a regional leader in sustainable aquaculture, with many farms receiving international certification for their environmental practices. The industry is a major source of foreign exchange and provides significant employment in rural coastal communities. With its focus on innovation and environmental stewardship, the prawn and shrimp industry represents a modern and successful addition to Belize's agricultural and industrial economy, showcasing the potential of the country's unique coastal environment.",
            "facts": [
                "Aquaculture is one of the fastest-growing sectors in the Belizean economy.",
                "Belize is a major exporter of premium shrimp to the US and European markets.",
                "The industry features over 10 large-scale commercial prawn farms.",
                "Most farms are ASC (Aquaculture Stewardship Council) certified.",
                "Shrimp farming contributes over $50 million BZ annually to export earnings.",
                "The industry provides significant employment for coastal village residents.",
                "Belize's farms are known for their low-impact, high-yield production methods."
            ]
        },
        "bz-free-zone-corozal-economic-v2": {
            "desc": "The Corozal Free Zone is a vital commercial and trading hub located on the border between Belize and Mexico. Established in 1994, the zone was designed to stimulate regional trade and economic growth by offering duty-free shopping and business incentives. Today, it is a bustling center of activity, home to hundreds of businesses ranging from retail and wholesale to warehousing and light industry. The Free Zone is a major employer for the Corozal District and a significant source of foreign exchange for the country. Its strategic location at the busiest border crossing in Belize makes it a vital node for trade between Central America and Mexico, attracting thousands of shoppers and traders every day. The zone remains a key part of Belize's national strategy for economic diversification and regional integration.",
            "facts": [
                "The Corozal Free Zone was established by the CFZ Act of 1994.",
                "It encompasses over 250 acres of land near the Mexican border.",
                "The zone is home to more than 300 active businesses.",
                "It provides direct employment for over 3,000 Belizean workers.",
                "The zone attracts over 1 million visitors annually, primarily from Mexico.",
                "It is a major center for the redistribution of consumer goods in the region.",
                "The Free Zone contributes significantly to the national government's revenue."
            ]
        },
        "bz-tourism-industry-economic-v2": {
            "desc": "Tourism is the single largest and most dynamic sector of the Belizean economy, accounting for a significant portion of the country's GDP and foreign exchange earnings. Known for its world-class natural and cultural attractions, from the barrier reef to ancient Maya cities, Belize attracts hundreds of thousands of international visitors every year. The industry is a major engine for growth, supporting a wide network of hotels, tour operators, restaurants, and transport services. Belize has become a global leader in eco-tourism and sustainable travel, prioritizing the protection of its natural heritage as the foundation of its tourism success. With its diverse offerings and its friendly, welcoming atmosphere, the tourism industry is a vital and vibrant part of Belize's national identity and its future economic prosperity.",
            "facts": [
                "Tourism accounts for approximately 40% of Belize's total GDP.",
                "The industry provides direct and indirect employment for 1 in 4 Belizeans.",
                "Belize receives over 1.5 million international visitors annually (including cruise).",
                "The country is a world leader in sustainable and community-based eco-tourism.",
                "Tourism is the primary source of foreign exchange for the nation.",
                "Major markets for Belizean tourism include the US, Canada, and Europe.",
                "The industry is centered around the barrier reef and the Maya archaeological sites."
            ]
        },
        "bz-commercial-fishing-economic-v2": {
            "desc": "Commercial Fishing is a historically significant and vital part of Belize's coastal economy and food security. The industry is primarily focused on the harvest of high-value marine products like spiny lobster and queen conch, which are major exports to global markets. Most of Belize's commercial fishing is done by artisanal fishermen using traditional methods, supported by a network of powerful fishing cooperatives. These cooperatives are a unique and successful model of community-based economic management, providing stability and fair prices for thousands of fishing families. The industry is strictly regulated to ensure the sustainability of the marine resources that are protected by the Belize Barrier Reef. Commercial fishing remains a cornerstone of the coastal culture and a vital part of the nation's agricultural sector.",
            "facts": [
                "Fishing contributes approximately 3% to Belize's national GDP.",
                "The industry is dominated by four major fishing cooperatives.",
                "Lobster and conch account for over 90% of marine product exports.",
                "Over 2,500 licensed artisanal fishermen operate in Belizean waters.",
                "Belize is a regional leader in sustainable marine resource management.",
                "The industry is a vital source of income for coastal villages like Sarteneja.",
                "Marine products are a major export to the US and Asian markets."
            ]
        },
        "bz-cacao-production-economic-v2": {
            "desc": "Cacao Production is a rapidly growing and culturally significant part of Belize's agricultural economy, particularly in the southern districts. Known as the 'food of the gods' by the ancient Maya, cacao has been cultivated in Belize for over 2,000 years. Today, the industry is experiencing a major resurgence, focused on the production of high-quality organic cacao for the global specialty chocolate market. Belizean cacao is world-renowned for its unique flavor profiles and is a major source of income for hundreds of Maya and East Indian farming families in Toledo and Stann Creek. The industry is a model for sustainable agroforestry, preserving the forest canopy while providing a profitable and culturally relevant crop. With its rich history and its success in international markets, cacao production is a vital and vibrant part of Belize's agricultural heritage.",
            "facts": [
                "Belize is a major producer of high-quality organic Trinitario cacao.",
                "The industry is centered in the Toledo and Stann Creek districts.",
                "Over 300 small-scale farming families are involved in cacao production.",
                "Belizean cacao has received numerous international awards for flavor.",
                "The industry is a major driver of the local 'bean-to-bar' chocolate market.",
                "Cacao production is a leading example of sustainable rainforest agriculture.",
                "The Maya Mountain Cacao company is a world leader in transparent cacao sourcing."
            ]
        },
        "bz-papaya-export-economic-v2": {
            "desc": "Papaya Export is a significant and technologically advanced part of Belize's agricultural sector, primarily located in the northern districts. Utilizing the fertile soils and favorable climate of the Northern Plains, the industry has become a major producer of high-quality fruit for international markets, particularly the United States. Papaya farming in Belize is characterized by large-scale commercial operations and the use of modern agricultural techniques and irrigation. The industry is a vital economic pillar for the Corozal and Orange Walk districts, providing significant employment and foreign exchange earnings. Despite facing challenges from pests and climate variability, the papaya sector remains a testament to the success of specialized export agriculture in Belize and a vital part of the nation's dynamic agricultural landscape.",
            "facts": [
                "Papaya was once Belize's third-largest agricultural export.",
                "The industry is centered in the Corozal and Orange Walk districts.",
                "Belizean papayas are primarily exported to the US market.",
                "The industry provides significant employment in the northern region.",
                "The farms utilize advanced irrigation and pest management systems.",
                "Papaya production is a major source of foreign exchange for the nation.",
                "The industry is a key part of Belize's strategy for agricultural diversification."
            ]
        }
    }
}

def apply_seo(file_path, data):
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()
    
    for poi_id, info in data.items():
        facts_pattern = r'(id:\s*"' + re.escape(poi_id) + r'".*?facts:\s*\{.*?\n\s*\}\s*,)'
        insert_text = f',\n    descriptionAdvanced: {{\n      de: "",\n      hu: "",\n      ro: "",\n      en: "{info["desc"]}"\n    }},\n    factsAdvanced: {{\n      de: [],\n      hu: [],\n      ro: [],\n      en: {info["facts"]}\n    }}'
        content = re.sub(facts_pattern, r'\1' + insert_text, content, flags=re.DOTALL)
    
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(content)

for path, poi_data in files_data.items():
    apply_seo(path, poi_data)
