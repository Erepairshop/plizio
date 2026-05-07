import re
import os

file_path = "/mnt/c/Users/User/plizio-repo/lib/visualLab/data/poiExtraPeruEconomicV2.ts"

content_updates = {
    "port-callao-economic-v2": {
        "desc": "The Port of Callao stands as the maritime gateway to Peru and its bustling capital, Lima. As the largest and most important port in the country, it handles a vast majority of Peru's international trade, connecting the nation to global markets. The port's history dates back to the colonial era, but today it is a state-of-the-art facility equipped with modern container terminals. Its strategic location on the Pacific coast makes it a vital hub for South American commerce. Visitors can witness the non-stop activity of massive cargo ships and the essential flow of goods that drive the Peruvian economy.",
        "facts": [
            "Largest port in Peru by cargo volume.",
            "Founded in 1537 by Spanish colonists.",
            "Crucial hub for the export of Peruvian minerals and agricultural products.",
            "Located just west of Lima's historic city center.",
            "Underwent major modernization to accommodate large Panamax vessels."
        ]
    },
    "port-matarani-economic-v2": {
        "desc": "The Port of Matarani is a cornerstone of the economy in southern Peru, serving as the primary outlet for the region's massive mining output. Located in the Arequipa department, this deep-water port is essential for the export of copper, molybdenum, and other precious minerals. It has become one of the most efficient ports on the South American Pacific coast, thanks to significant private investment and modernization. The port's activity supports thousands of jobs and facilitates trade for the entire southern Andean region. Its strategic importance continues to grow as new mining projects come online in the surrounding mountains.",
        "facts": [
            "Principal export point for the Cerro Verde and Las Bambas mines.",
            "Operated by Tisur, a leader in Peruvian port logistics.",
            "Features a specialized terminal for mineral concentrates.",
            "Handles millions of tons of cargo annually.",
            "Essential link in the South Andean railroad network."
        ]
    },
    "port-salaverry-economic-v2": {
        "desc": "Located near the historic city of Trujillo, the Port of Salaverry is the vital heart of trade for the La Libertad region. This multi-purpose port specializes in the export of agricultural products, such as sugar and asparagus, alongside mineral concentrates. It has recently seen substantial upgrades to improve its depth and capacity, allowing for larger vessels to dock. The port plays a dual role by also welcoming international cruise ships, bringing tourists to explore the nearby ruins of Chan Chan. Its efficiency is a key driver for the agro-industrial boom that has transformed the northern Peruvian coast.",
        "facts": [
            "Strategically located near the Pan-American Highway.",
            "Key exit point for the Chavimochic irrigation project's produce.",
            "Modernized in 2018 with significant infrastructure investments.",
            "Handles both solid bulk cargo and liquid fuels.",
            "Gateway for tourists visiting the archaeological sites of northern Peru."
        ]
    },
    "port-marcona-economic-v2": {
        "desc": "The Port of San Juan de Marcona is a specialized maritime facility in the Ica region, primarily dedicated to the massive iron ore industry. It serves as the main exit point for the Marcona mine, which is the only major iron ore operation in Peru. The port's deep-water natural harbor provides an ideal setting for large bulk carriers to transport minerals to international markets, especially in Asia. Beyond its industrial focus, the surrounding area is known for its unique coastal biodiversity and wind energy projects. Marcona's role is fundamental to Peru's mining sector and its long-term industrial development.",
        "facts": [
            "Peru's primary port for iron ore exports.",
            "Located in a region with some of the highest wind speeds in the country.",
            "Crucial for the operations of the Shougang Hierro Peru mining company.",
            "Features a deep natural bay capable of hosting large vessels.",
            "Surrounded by some of the most diverse marine reserves in Peru."
        ]
    },
    "port-bayovar-economic-v2": {
        "desc": "The Bayóvar Port Terminal is a key industrial landmark in the Piura region of northern Peru, specializing in the export of phosphates. This dedicated facility handles the output from the nearby Bayóvar mine, which is one of the largest phosphate deposits in South America. The minerals exported from here are essential for the global production of fertilizers, making the port a significant player in international agriculture. Its location in the Sechura Desert highlights the incredible engineering required to facilitate trade in such an arid environment. The port remains a vital asset for regional development and national export revenue.",
        "facts": [
            "Specialized in the handling of phosphate rock and concentrates.",
            "Managed by the company Miski Mayo.",
            "Located in the heart of the Sechura Desert.",
            "Provides essential raw materials for the global fertilizer industry.",
            "One of the northernmost major port terminals in Peru."
        ]
    },
    "port-chancay-economic-v2": {
        "desc": "The Chancay Megaport is one of the most ambitious infrastructure projects in modern Peruvian history, aimed at transforming the country into a premier South American logistics hub. Located just north of Lima, this deep-water port is designed to handle the largest container ships in the world, facilitating direct trade with Asia. Once fully operational, it is expected to significantly reduce shipping times and costs for Peruvian exporters. The project represents a massive international investment and is poised to reshape the economic landscape of the entire Pacific coast. Its scale and advanced technology will set a new standard for maritime operations in the region.",
        "facts": [
            "A multi-billion dollar project led by COSCO Shipping.",
            "Designed to be the first 'megaport' in South America with direct Asian routes.",
            "Estimated to handle over 1 million TEUs (containers) per year in its first phase.",
            "Includes a dedicated tunnel to connect the port directly to the Pan-American Highway.",
            "Aims to compete with other major regional ports like Valparaíso and San Antonio."
        ]
    },
    "port-iquitos-economic-v2": {
        "desc": "The Port of Iquitos is the lifeline of the Peruvian Amazon, serving as the main entry and exit point for goods in this roadless jungle metropolis. Located on the banks of the mighty Amazon River, it is remarkably accessible to ocean-going vessels coming from the Atlantic Ocean, thousands of miles away. The port facilitates the transport of everything from fuel and food to construction materials for the city's inhabitants. It also serves as a hub for regional trade, connecting smaller jungle communities with the wider world. The constant movement of boats and ferries makes it a vibrant and essential part of Iquitos' unique identity.",
        "facts": [
            "World's most distant inland port from the sea for ocean-going vessels.",
            "Primary logistics hub for the Loreto region.",
            "Essential for the supply of goods to Iquitos, which is inaccessible by road.",
            "Facilitates the export of timber, petroleum, and exotic fruits.",
            "Located over 3,000 kilometers from the Atlantic Ocean."
        ]
    },
    "port-pucallpa-economic-v2": {
        "desc": "The Port of Pucallpa is a vital river terminal on the Ucayali River, acting as a crucial link between the Amazon rainforest and the rest of Peru. Unlike Iquitos, Pucallpa is connected to Lima by road, making this port a strategic point for transshipping goods from the jungle to the capital. It handles a significant portion of the region's timber, agricultural products, and livestock, which are then transported by truck over the Andes. The port's activity fluctuates with the river levels, reflecting the rhythmic nature of life in the Amazon. It remains a bustling center of commerce and a symbol of Pucallpa's growing economic importance.",
        "facts": [
            "Strategic connection point between the Ucayali River and the Federico Basadre Highway.",
            "Major hub for the Peruvian timber and palm oil industries.",
            "Facilitates the transport of goods to the roadless Loreto region via river.",
            "Located in one of the fastest-growing cities in the Peruvian Amazon.",
            "Key terminal for the 'Interoceanic Highway' fluvial network."
        ]
    },
    "port-yurimaguas-economic-v2": {
        "desc": "The Port of Yurimaguas is an essential river hub located on the Huallaga River, serving as a gateway between the northern Peruvian highlands and the Amazon lowlands. As part of a major multi-modal transport corridor, it connects the Pacific coast with the Atlantic via the Amazon River system. The port has recently undergone modernization to improve its capacity and efficiency in handling diverse cargo. It plays a critical role in the development of the San Martín and Loreto regions by facilitating the movement of agricultural goods and supplies. Yurimaguas' position makes it a cornerstone of Peru's efforts to integrate its remote jungle territories with the national economy.",
        "facts": [
            "Part of the IIRSA North multi-modal axis connecting Peru and Brazil.",
            "Modernized with the new 'Puerto Nueva Reforma' terminal.",
            "Primary link for cargo traveling from the coast to Iquitos.",
            "Handles significant volumes of rice, corn, and fuel.",
            "Essential for the economic development of the northern Peruvian jungle."
        ]
    },
    "ind-antamina-economic-v2": {
        "desc": "Antamina is one of the world's most productive copper and zinc mines, situated high in the Peruvian Andes of the Ancash region. This massive open-pit operation is a marvel of modern engineering, operating at altitudes exceeding 4,000 meters above sea level. It represents one of the largest mining investments in Peru's history and is a major contributor to the national GDP. The mine utilizes a sophisticated slurry pipeline to transport mineral concentrates hundreds of kilometers to the coast for export. Antamina is also recognized for its significant social and environmental programs in the surrounding mountain communities. Its vast scale and efficiency make it a flagship of the global mining industry.",
        "facts": [
            "One of the top 10 largest copper mines in the world.",
            "Uses a 302 km long pipeline to transport minerals to the port of Huarmey.",
            "Located at an average altitude of 4,300 meters.",
            "Produces copper, zinc, molybdenum, silver, and lead.",
            "Jointly owned by global mining giants BHP, Glencore, Teck, and Mitsubishi."
        ]
    },
    "ind-cerroverde-economic-v2": {
        "desc": "The Cerro Verde Mine is a colossal open-pit copper and molybdenum operation located just outside the city of Arequipa. It is one of Peru's most significant mining assets, contributing a substantial portion of the country's total copper production. The mine is notable for its massive scale and its integration with the local community, including the funding of a major wastewater treatment plant for the city of Arequipa. This facility not only improves local sanitation but also provides recycled water for the mine's operations. Cerro Verde's continued expansion highlights Arequipa's role as a primary mining hub in southern Peru. It remains a critical driver of regional economic growth and technological innovation.",
        "facts": [
            "One of the largest copper producers in the world.",
            "Features some of the largest concentrator plants in the mining industry.",
            "Funded Arequipa's La Enlozada wastewater treatment plant.",
            "Operational since the 1970s with several major expansions.",
            "Majority-owned by Freeport-McMoRan."
        ]
    },
    "ind-lasbambas-economic-v2": {
        "desc": "Las Bambas is a world-class copper mine located in the Apurímac region, high in the southern Peruvian Andes. It is one of the largest copper mines globally in terms of production capacity and represents a cornerstone of Peru's mining sector. The operation involves the extraction of ore from several pits and its processing into high-quality concentrates. Despite its remote location and logistical challenges, Las Bambas has become a major contributor to the national economy and regional development. The mine is also a focal point for social dialogue and community engagement in the highlands. Its long-term reserves ensure that it will remain a key player in the global copper market for decades to come.",
        "facts": [
            "Produces over 2% of the world's copper.",
            "Located at an altitude of approximately 4,000 meters.",
            "Acquired by a Chinese consortium led by MMG Limited in 2014.",
            "Transports minerals via a 'mining corridor' to the Matarani port.",
            "A major source of tax revenue for the Apurímac region."
        ]
    },
    "ind-cuajone-economic-v2": {
        "desc": "The Cuajone Mine is a significant open-pit copper mine located in the Moquegua region of southern Peru. Operated by Southern Copper Corporation, it forms part of a massive mining complex that has been a pillar of the Peruvian economy for half a century. The mine is famous for its massive spiral pit and the incredible logistics involved in transporting ore to the coastal smelter in Ilo. Cuajone's high-grade copper deposits have made it one of the most profitable mines in the country. The operation also includes an extensive railway system that is a feat of Andean engineering. It continues to be a major employer and a source of regional prosperity in the south.",
        "facts": [
            "Operational since 1976.",
            "The open pit is over 800 meters deep.",
            "Connected by a private railway to the Ilo smelter and refinery.",
            "One of the most efficient copper operations in South America.",
            "Part of Southern Copper's vertically integrated production system."
        ]
    },
    "ind-toquepala-economic-v2": {
        "desc": "Toquepala is a legendary copper mine in the Tacna region, known for its massive open pit that has been in operation for over 60 years. It was one of the first major modern mining projects in Peru and remains a vital contributor to the country's mineral exports. The mine has undergone numerous expansions, incorporating the latest technology to maintain its productivity and efficiency. Toquepala is also notable for the discovery of ancient rock paintings nearby, showing the long history of human presence in the area. The mine's dedicated infrastructure, including its own town and railway, demonstrates the scale of industrial development in the Peruvian desert. It stands as a testament to the enduring importance of mining in Peru's national identity.",
        "facts": [
            "One of the oldest large-scale open-pit mines in Peru.",
            "Features a recently expanded concentrator plant with state-of-the-art tech.",
            "Home to the Toquepala Caves, which contain 9,000-year-old rock art.",
            "Operated by Southern Copper Corporation.",
            "Uses a dedicated railway to transport concentrates to the coast."
        ]
    },
    "ind-yanacocha-economic-v2": {
        "desc": "Yanacocha was for many years the largest and most productive gold mine in South America, located in the Cajamarca region of northern Peru. This sprawling open-pit operation transformed the regional economy and made Peru one of the world's top gold producers. The mine utilizes advanced heap-leaching technology to extract precious metals from the Andean soil. While production has decreased from its peak, Yanacocha remains a major industrial site and is currently transitioning towards more complex copper and gold projects. The mine has been a center for both significant economic benefit and complex social and environmental discussions in the region. Its legacy is deeply intertwined with the development of modern Cajamarca.",
        "facts": [
            "Located at altitudes between 3,500 and 4,100 meters.",
            "A joint venture between Newmont and Buenaventura.",
            "Once produced over 3 million ounces of gold per year.",
            "The largest gold mine in the world during the late 1990s.",
            "Currently developing the Yanacocha Sulfides project to extend its life."
        ]
    },
    "ind-toromocho-economic-v2": {
        "desc": "Toromocho is a major open-pit copper and molybdenum mine located at a staggering altitude in the Junín region, in the central Andes of Peru. The mine is situated on a mountain of the same name and involves the processing of a massive mineral deposit. One of the most unique aspects of the project was the complete relocation of the town of Morococha to a new, modern site to allow for the mine's expansion. Toromocho utilizes some of the largest mining equipment in the world and is a significant source of export revenue for Peru. Its high-altitude operations are a testament to the country's expertise in mountain mining. The project represents a massive long-term investment in Peru's industrial future.",
        "facts": [
            "Located at an altitude of over 4,500 meters.",
            "Developed by Chinalco (Aluminum Corporation of China).",
            "Involved the construction of the new town of Nueva Morococha.",
            "Has one of the largest copper reserves in Peru.",
            "Uses massive 400-ton capacity haul trucks."
        ]
    },
    "ind-quellaveco-economic-v2": {
        "desc": "Quellaveco is one of the world's most modern and technologically advanced copper mines, located in the Moquegua region of southern Peru. This mega-project, which recently began operations, is designed as a 'smart mine,' utilizing autonomous trucks and advanced data analytics to maximize efficiency. It represents one of the largest recent foreign investments in Peru and is expected to significantly boost the country's total copper output. Quellaveco was built with a strong focus on sustainable water management, utilizing a dedicated dam to avoid impacting local agriculture. The mine's startup is a major milestone for the Peruvian economy, reinforcing its position as a global mining leader. Its success is seen as a model for future large-scale mining developments.",
        "facts": [
            "Developed by Anglo American in partnership with Mitsubishi.",
            "The first mine in Peru to feature a 100% autonomous haulage fleet.",
            "Expected to produce an average of 300,000 tons of copper per year.",
            "Includes the Vizcachas dam to provide water for both the mine and local farmers.",
            "One of the largest copper deposits discovered in the last 20 years."
        ]
    },
    "ind-constancia-economic-v2": {
        "desc": "The Constancia Mine is a prominent open-pit copper operation located in the Chumbivilcas province of Cusco. This mine produces both copper and molybdenum concentrates and is a key contributor to the economic development of the southern Andean highlands. Constancia is known for its commitment to high environmental standards and its proactive engagement with the local indigenous communities. The operation has successfully navigated the challenges of its remote location, implementing efficient logistics to transport its products to the coast. As part of Peru's vibrant mining sector, Constancia helps sustain the country's status as a top global copper producer. The mine's ongoing operations provide vital jobs and investment in a traditionally underserved region.",
        "facts": [
            "Operated by Hudbay Minerals.",
            "Started commercial production in 2015.",
            "Located at an altitude of approximately 4,100 meters.",
            "Focused on the Pampacancha high-grade satellite deposit for future growth.",
            "A major employer in the Cusco region."
        ]
    },
    "ind-lagunasnorte-economic-v2": {
        "desc": "Lagunas Norte is a significant gold mine located in the La Libertad region, high in the northern Andes of Peru. For years, it was one of the country's most productive gold assets, utilizing open-pit mining and heap leaching to extract precious metals. The mine has played a crucial role in the economic prosperity of the surrounding provinces, providing significant tax revenue and social investment. Although it has entered a more mature phase of its lifecycle, the project continues to seek ways to optimize its remaining resources. Lagunas Norte is a testament to the gold mining potential of the Peruvian cordillera. Its operations remain a key component of the regional industrial landscape.",
        "facts": [
            "Located at an elevation of over 4,000 meters.",
            "Formerly operated by Barrick Gold, now owned by Boroo Pte Ltd.",
            "Has produced millions of ounces of gold since its inception.",
            "Key driver of the economy in the Santiago de Chuco province.",
            "Undergoing studies to process refractory gold ores to extend mine life."
        ]
    },
    "ind-laarena-economic-v2": {
        "desc": "The La Arena Mine is a versatile mining operation in the La Libertad region of northern Peru, producing both gold and copper. This project is characterized by its efficient open-pit operations and its ability to consistently meet production targets. La Arena is an important contributor to the local economy, particularly in the Huamachuco area, where it supports various community development initiatives. The mine's success highlights the mineral richness of northern Peru beyond its famous gold deposits. With plans for future expansions into deeper copper-gold porphyry deposits, La Arena is poised to remain a productive asset for many years. It represents the steady and reliable side of the Peruvian mining industry.",
        "facts": [
            "Owned and operated by Pan American Silver.",
            "Features a gold oxide heap leach operation and a copper-gold sulfide project.",
            "Strategically located in a well-known mining district.",
            "Consistently recognized for its safety and environmental performance.",
            "A significant contributor to regional employment and local supply chains."
        ]
    },
    "ind-marcona-economic-v2": {
        "desc": "The Marcona Mine is Peru's only major producer of iron ore, located on the arid coastal plains of the Ica region. This massive open-pit operation has been a cornerstone of the country's industrial sector for decades, supplying the raw materials needed for steel production. The mine's proximity to the coast allows for efficient export via its own dedicated port facilities in San Juan de Marcona. It is operated by Shougang Hierro Peru, which has invested heavily in modernizing the facilities and expanding production capacity. The Marcona mine is not only economically vital but also geographically unique, as most major Peruvian mines are located high in the Andes. It remains a key link in the global iron ore supply chain.",
        "facts": [
            "Peru's primary source of iron ore since 1953.",
            "Operated by the Chinese company Shougang Group.",
            "Features a massive industrial complex including a pelletizing plant.",
            "Located in the Nazca province, known for its desert climate.",
            "Essential for the domestic steel industry and export to Asian markets."
        ]
    },
    "ind-bayovarmine-economic-v2": {
        "desc": "The Bayóvar Phosphate Mine is a world-class mineral deposit located in the Sechura Desert of northern Peru. It is one of the largest and highest-quality phosphate sources in the world, making it a critical asset for the global agricultural industry. The phosphate rock mined here is processed and exported primarily for use in fertilizers, helping to support food production across the planet. The mine's location in a vast, arid coastal plain allows for large-scale open-pit operations and relatively straightforward logistics compared to mountain mines. Bayóvar represents a key diversification of Peru's mineral exports, moving beyond traditional metals into industrial minerals. Its development has brought significant investment and infrastructure to the Piura region.",
        "facts": [
            "Owned by the Miski Mayo joint venture (Vale, Mitsui, and Mosaic).",
            "One of the largest phosphate deposits in the Southern Hemisphere.",
            "Produces millions of tons of phosphate rock annually.",
            "Key supplier to the agricultural markets of the Americas and Asia.",
            "Located in a unique desert ecosystem near the Pacific coast."
        ]
    },
    "ind-camisea-economic-v2": {
        "desc": "The Camisea Gas Project is the most important energy project in Peru's history, located deep in the Amazon rainforest of the Cusco region. It involves the extraction of vast natural gas and condensate reserves from beneath the jungle floor. This project has fundamentally transformed Peru's energy matrix, providing a clean and affordable source of power for the country's growing economy. The gas is transported via a massive pipeline over the Andes to the coast, where it is used for electricity generation, industrial fuel, and export as LNG. Camisea is also a major source of royalties and taxes for the Peruvian government. Its operations are conducted with a high level of environmental sensitivity due to its location in a biodiverse and indigenous territory.",
        "facts": [
            "The largest natural gas reserve in Peru and one of the largest in South America.",
            "Contributes to over 40% of Peru's electricity generation.",
            "Involves a pipeline that crosses the Andes at over 4,800 meters.",
            "Includes the Pampa Melchorita LNG plant, the first in South America.",
            "Operated by a consortium led by Pluspetrol."
        ]
    },
    "ind-talara-economic-v2": {
        "desc": "The Talara Refinery is a major industrial landmark on Peru's northern coast and the cornerstone of the country's oil processing industry. It has recently undergone a massive, multi-billion dollar modernization project to become one of the most advanced refineries in the region. The new facility is designed to produce cleaner, high-quality fuels that meet international environmental standards. Located in the historic oil-producing city of Talara, the refinery is a major employer and a symbol of national industrial pride. This upgrade allows Peru to reduce its reliance on fuel imports and improve its energy security. The refinery's prominent position on the Pacific coast makes it a vital hub for petroleum logistics.",
        "facts": [
            "Owned by the state company Petroperú.",
            "Founded in 1917, making it one of the oldest refineries in the country.",
            "The New Talara Refinery project is the largest energy investment in Peru.",
            "Features advanced deep conversion technology (Flexicoking).",
            "Can process up to 95,000 barrels of crude oil per day."
        ]
    },
    "ind-lapampilla-economic-v2": {
        "desc": "La Pampilla is Peru's largest and most sophisticated oil refinery, located in the Callao region near Lima. It plays a critical role in the country's fuel supply, producing a wide range of petroleum products including gasoline, diesel, and aviation fuel. The refinery has undergone continuous modernization to produce low-sulfur fuels, aligning with global environmental trends. As a major industrial facility on the coast, it is equipped with advanced maritime terminals for receiving crude oil and distributing finished products. La Pampilla's strategic location ensures that the capital and the central region of Peru have a steady and reliable energy supply. It remains a key asset for the national economy and the transport sector.",
        "facts": [
            "Operated by the Spanish energy company Repsol.",
            "Accounts for approximately half of Peru's refining capacity.",
            "Features modern hydro-desulfurization units for cleaner fuels.",
            "Includes a sophisticated sea terminal with multiple berths.",
            "Crucial for the supply of jet fuel to Lima's Jorge Chávez International Airport."
        ]
    },
    "ind-siderperu-economic-v2": {
        "desc": "Siderperu is the pioneer of the Peruvian steel industry, located in the coastal city of Chimbote. For decades, it has been the country's primary producer of long and flat steel products, supporting the construction, mining, and manufacturing sectors. The plant's location in Chimbote was chosen for its excellent port facilities and its role as an industrial growth pole. Siderperu has evolved from a state-owned enterprise to a modern, private operation that incorporates advanced technology and sustainable practices. Its steel is used in everything from major infrastructure projects to everyday consumer goods. The company remains a major player in the national industrial landscape and a key employer in the Ancash region.",
        "facts": [
            "The first steel plant in Peru, established in 1956.",
            "Owned by the Brazilian steel giant Gerdau.",
            "Features an industrial complex with blast furnaces and rolling mills.",
            "Major supplier for the Peruvian construction industry.",
            "Located in Chimbote, the 'Fishery and Steel Capital' of Peru."
        ]
    },
    "ind-ilosmelter-economic-v2": {
        "desc": "The Ilo Copper Smelter is a critical industrial facility in southern Peru, serving as the final processing point for copper ore from the Cuajone and Toquepala mines. Located on the coast of the Moquegua region, this massive plant converts mineral concentrates into high-purity copper anodes. The facility also includes a modern refinery and a sulfuric acid plant, which captures emissions to produce a valuable industrial byproduct. The smelter's operations are essential for the vertical integration of Peru's copper industry, allowing for the export of value-added products. Its presence has made the city of Ilo a major industrial and maritime center. It remains one of the largest and most efficient copper processing plants in South America.",
        "facts": [
            "Operated by Southern Copper Corporation.",
            "Modernized with Isasmelt technology for higher efficiency and lower emissions.",
            "Connected to the mines by an extensive private industrial railway.",
            "The sulfuric acid produced is used in leaching processes at the mines.",
            "One of the few major copper smelters on the Pacific coast of South America."
        ]
    },
    "ind-cajamarquilla-economic-v2": {
        "desc": "Cajamarquilla is one of the world's largest and most efficient zinc refineries, located on the outskirts of Lima. The facility processes zinc concentrates from various mines across the Peruvian Andes into high-purity refined zinc and alloys. Refined zinc from Cajamarquilla is exported globally for use in galvanizing steel and manufacturing various industrial products. The refinery is known for its advanced hydrometallurgical processes and its focus on operational excellence. Its location near the capital provides excellent access to labor, logistics, and the country's main port in Callao. Cajamarquilla is a key component of Peru's mineral processing sector, adding significant value to the country's natural resources. It continues to be a major contributor to national export earnings.",
        "facts": [
            "Owned by Nexa Resources (formerly Votorantim Metais).",
            "One of the top 5 largest zinc refineries in the world.",
            "Produces special high-grade zinc and sulfuric acid.",
            "Began operations in 1981 and has seen several expansions.",
            "Strategically located to process minerals from the central Andean region."
        ]
    },
    "ind-orcopampa-economic-v2": {
        "desc": "Orcopampa is a high-altitude underground mine in the Arequipa region, renowned for its production of gold and silver. This operation is a classic example of the challenges and rewards of Andean mining, with tunnels reaching deep into the mountains at elevations over 3,800 meters. The mine has a long history and has consistently been one of Peru's most important precious metal producers. Orcopampa is also notable for its efforts in sustainable mining and its close collaboration with the local highland communities. The mine's concentrates are processed on-site to produce doré bars for export. Its endurance and productivity make it a pillar of the regional economy in the southern Andes. It continues to explore new veins to extend its rich mining legacy.",
        "facts": [
            "Owned and operated by Cía. de Minas Buenaventura.",
            "One of the oldest and most traditional gold mines in Peru.",
            "Focused on high-grade gold and silver mineralization.",
            "Operates at an altitude of approximately 3,800 to 4,500 meters.",
            "A major source of high-quality silver for international markets."
        ]
    },
    "ind-tintaya-economic-v2": {
        "desc": "Tintaya is a historically significant copper mine located in the Espinar province of Cusco, which has played a major role in the development of the southern Peruvian mining belt. Originally an open-pit operation, it has transitioned over time and paved the way for the development of the nearby Antapaccay project. The site includes extensive processing facilities and has been a center for technological innovation in mineral extraction. Tintaya is also well-known for being one of the first mines in Peru to establish a comprehensive social agreement with local communities, setting a precedent for the industry. Its location in the high Andean plateau highlights the rugged beauty and mineral wealth of the Cusco region. The mine remains a key reference point for the history and future of copper mining in Peru.",
        "facts": [
            "Currently integrated into the Antapaccay mining complex operated by Glencore.",
            "Located at an altitude of 4,100 meters in the Cusco region.",
            "One of the first major state-owned mines to be privatized in the 1990s.",
            "Was a pioneer in the use of solvent extraction and electrowinning (SX-EW) technology in Peru.",
            "Central to the economy and social development of the Espinar province."
        ]
    }
}

with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_lines = []
skip_until = None
current_poi_id = None

i = 0
while i < len(lines):
    line = lines[i]
    
    id_match = re.search(r'id: "([^"]+)"', line)
    if id_match:
        current_poi_id = id_match.group(1)
    
    if "descriptionAdvanced: {" in line and current_poi_id in content_updates:
        # Check if it's already filled
        is_filled = False
        j = i
        while j < len(lines) and "}" not in lines[j]:
            if 'en: "' in lines[j] and not re.search(r'en: ""', lines[j]):
                is_filled = True
                break
            j += 1
        
        if not is_filled:
            update = content_updates[current_poi_id]
            new_lines.append('    descriptionAdvanced: {\n')
            new_lines.append('      de: "",\n')
            new_lines.append('      hu: "",\n')
            new_lines.append('      ro: "",\n')
            new_lines.append(f'      en: "{update["desc"]}"\n')
            new_lines.append('    },\n')
            # Skip until the end of the old descriptionAdvanced
            while i < len(lines) and "}," not in lines[i]:
                i += 1
            i += 1
            continue

    if "factsAdvanced: {" in line and current_poi_id in content_updates:
        # Check if it's already filled
        is_filled = False
        j = i
        while j < len(lines) and "}" not in lines[j]:
            if 'en: [' in lines[j] and '[]' not in lines[j]:
                is_filled = True
                break
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
            # Skip until the end of the old factsAdvanced
            while i < len(lines) and "}" not in lines[i]:
                i += 1
            i += 1
            continue

    new_lines.append(line)
    i += 1

with open(file_path, 'w', encoding='utf-8') as f:
    f.writelines(new_lines)
