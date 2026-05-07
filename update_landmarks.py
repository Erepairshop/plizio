import re
import os

file_path = "/mnt/c/Users/User/plizio-repo/lib/visualLab/data/poiExtraPeruLandmarksV2.ts"

content_updates = {
    "machu-picchu-landmarks-v2": {
        "desc": "Machu Picchu is the crown jewel of the Inca Empire and one of the most iconic archaeological sites on the planet. Built in the 15th century and abandoned shortly after the Spanish conquest, it remained hidden from the outside world until its rediscovery in 1911. Perched high on a mountain ridge above the Urubamba Valley, the site showcases the Incas' incredible mastery of stone masonry and astronomical alignment. Its dramatic setting between two peaks, Machu Picchu and Huayna Picchu, creates an ethereal atmosphere that captivates every visitor. Today, it stands as a UNESCO World Heritage site and one of the New Seven Wonders of the World.",
        "facts": [
            "Built around 1450 AD during the height of the Inca Empire.",
            "Rediscovered by American historian Hiram Bingham in 1911.",
            "Constructed using the 'ashlar' technique—stones cut to fit together without mortar.",
            "Located at an elevation of 2,430 meters (7,970 feet).",
            "Voted as one of the New Seven Wonders of the World in 2007."
        ]
    },
    "sacsayhuaman-landmarks-v2": {
        "desc": "Sacsayhuamán is a monumental Inca fortress and ceremonial center located on a steep hill overlooking the city of Cusco. It is world-renowned for its massive walls built from gigantic limestone blocks, some weighing over 100 tons, fitted together with baffling precision. The site's zigzagging terraces are said to represent the teeth of a puma, reflecting the puma-shaped layout of ancient Cusco. Beyond its military significance, it was a vital spiritual center for the Inca elite. Today, it remains a site of immense cultural pride and is the main stage for the annual Inti Raymi (Festival of the Sun) celebrations. Its sheer scale and engineering remain one of the greatest mysteries of pre-Columbian architecture.",
        "facts": [
            "Features stones weighing up to 125 tons that fit together without mortar.",
            "Was the site of a bloody battle between the Inca and Spanish in 1536.",
            "Originally served as a royal house of the Sun and a military stronghold.",
            "Constructed over a period of 70 to 80 years starting in the 15th century.",
            "Offers one of the best panoramic views of the city of Cusco."
        ]
    },
    "coricancha-landmarks-v2": {
        "desc": "Coricancha, or the 'Golden Enclosure,' was the most important temple in the entire Inca Empire, dedicated primarily to Inti, the Sun God. Located in the heart of Cusco, its walls were once famously covered in solid gold plates, and its courtyards were filled with life-sized golden statues of llamas and corn. After the Spanish conquest, much of the temple was demolished, and the Convent of Santo Domingo was built directly on its masterful foundations. Today, visitors can see the striking contrast between the perfectly polished Inca stonework and the Spanish colonial architecture. This site represents the collision of two worlds and remains a powerful symbol of Cusco's dual heritage.",
        "facts": [
            "Originally housed the 'Punchao,' a massive golden disc representing the sun.",
            "Inca stonework here is considered some of the finest ever created.",
            "Survived multiple major earthquakes that destroyed the colonial buildings above it.",
            "Was the center of the 'Ceques' system, a network of sacred paths throughout the empire.",
            "Its gardens once featured gold and silver replicas of the entire Inca world."
        ]
    },
    "ollantaytambo-landmarks-v2": {
        "desc": "Ollantaytambo is a living Inca town nestled in the Sacred Valley, serving as both a formidable fortress and a highly sophisticated agricultural center. It is one of the few places where people still reside in buildings that retain their original Inca layout and stonework. The massive stone terraces climbing the hillside were the site of a rare Inca victory over the Spanish conquistadors. At the top of the fortress lies the unfinished Temple of the Sun, featuring six enormous monoliths of pink rhyolite. The town's narrow cobblestone streets and ancient water channels create a unique atmosphere of stepping back in time. It remains the primary gateway for travelers heading toward Machu Picchu by train.",
        "facts": [
            "One of the best-preserved examples of Inca urban planning.",
            "Site of the Battle of Ollantaytambo in 1537, a major Inca victory.",
            "The Temple of the Sun's monoliths weigh over 50 tons each.",
            "Features the 'Princess's Bath' (Baño de la Ñusta), an intricate ritual fountain.",
            "The mountain across the valley features the face of 'Viracocha' carved by nature and time."
        ]
    },
    "chan-chan-landmarks-v2": {
        "desc": "Chan Chan is the largest adobe city in the world and was once the flourishing capital of the Chimú Empire before its conquest by the Incas. Located on the northern coast near Trujillo, this sprawling desert metropolis covers over 20 square kilometers and is composed of ten walled citadels. The walls are intricately decorated with bas-relief carvings of sea birds, fish, and geometric patterns, reflecting the Chimú people's deep connection to the ocean. At its peak, it housed thousands of artisans, priests, and nobility in a complex network of plazas, temples, and reservoirs. Today, as a UNESCO World Heritage site, it offers a hauntingly beautiful glimpse into the grandeur of a lost coastal civilization. Its fragile mud-brick structures continue to be protected as a vital part of Peru's pre-Columbian history.",
        "facts": [
            "The largest pre-Columbian city in South America.",
            "Constructed entirely of sun-dried mud bricks (adobe).",
            "The Nik An citadel is the most well-preserved and visited part of the complex.",
            "Designated a UNESCO World Heritage site in 1986.",
            "Fell to the Inca Empire around 1470 AD."
        ]
    },
    "kuelap-landmarks-v2": {
        "desc": "Kuélap is a massive walled city of the Chachapoya culture, often referred to as the 'Warriors of the Clouds.' Perched on a limestone ridge high above the Utcubamba Valley in northern Peru, it is frequently compared to Machu Picchu for its spectacular setting and historical importance. The site is surrounded by colossal walls reaching up to 20 meters in height, protecting over 400 circular stone dwellings decorated with zig-zag and rhomboid patterns. Its location in the cloud forest gives it a mysterious, overgrown atmosphere that is quite different from the Inca sites of the south. Recent improvements in access, including a modern cable car system, have made this once-isolated fortress much easier for modern explorers to reach. Kuélap remains a powerful testament to the independent spirit and engineering skill of the Chachapoya people.",
        "facts": [
            "Built between the 6th and 16th centuries AD.",
            "The massive outer walls contain more stone than the Great Pyramid of Giza.",
            "Circular houses are a unique characteristic of Chachapoya architecture.",
            "Located at an altitude of 3,000 meters in the Amazonian Andes.",
            "Accessed by Peru's first and most modern cable car system."
        ]
    },
    "huaca-rajada-landmarks-v2": {
        "desc": "Huaca Rajada is an archaeological site near Chiclayo that achieved world fame in 1987 with the discovery of the Lord of Sipán's tomb. This site was a major ceremonial center of the Moche culture and consists of several adobe pyramids. The discovery was revolutionary because the main tomb was found completely intact, filled with extraordinary treasures of gold, silver, and turquoise. It provided unprecedented insights into the Moche's complex social hierarchy and their unparalleled skill in metallurgy. Today, visitors can explore the excavated platforms and see replicas of the tombs as they were found. The site is a cornerstone of northern Peru's 'Moche Route' and continues to be a focus for archaeological research.",
        "facts": [
            "Site of the richest tomb discovery in the Americas.",
            "The Lord of Sipán was found buried with eight other people and a dog.",
            "Dates back to approximately 300 AD.",
            "Helped establish the Royal Tombs of Sipán Museum in nearby Lambayeque.",
            "The pyramids were constructed using millions of handmade adobe bricks."
        ]
    },
    "huacas-moche-landmarks-v2": {
        "desc": "The Huaca del Sol and Huaca de la Luna are two massive adobe pyramids that served as the religious and political heart of the Moche civilization near Trujillo. Huaca del Sol was once the largest man-made structure in the Americas, although much of it was destroyed during the colonial period by treasure hunters. Huaca de la Luna, however, has yielded incredible discoveries, including exceptionally well-preserved polychrome murals depicting Moche deities and sacrificial rituals. The site offers a fascinating look into the spiritual world of the Moche, where vibrant colors and complex iconography tell stories of life, death, and the supernatural. Walking through the excavated plazas of Huaca de la Luna feels like entering a lost world of ancient Peruvian mythology.",
        "facts": [
            "Huaca del Sol was built with over 130 million adobe bricks.",
            "Huaca de la Luna features five levels of spectacular, original colored murals.",
            "The site served as the Moche capital between 100 and 700 AD.",
            "Located at the foot of the sacred Cerro Blanco mountain.",
            "Displays the 'Ai Apaec' or Decapitator God in many of its reliefs."
        ]
    },
    "nazca-linien-landmarks-v2": {
        "desc": "The Nazca Lines are one of the world's greatest archaeological mysteries, consisting of hundreds of enormous geoglyphs etched into the arid desert floor of southern Peru. These ancient figures, which include a monkey, a spider, a hummingbird, and various geometric shapes, are so large they can only be fully appreciated from the air. Created by the Nazca culture between 500 BC and 500 AD, they were made by removing the dark surface pebbles to reveal the lighter sand beneath. Their purpose remains a subject of intense debate, with theories ranging from astronomical calendars to water-related rituals. The extreme dryness and lack of wind in the Nazca Desert have preserved these fragile lines for nearly two millennia. Today, flying over these enigmatic symbols is a bucket-list experience for travelers from around the globe.",
        "facts": [
            "Some of the largest figures are over 300 meters long.",
            "Designated as a UNESCO World Heritage site in 1994.",
            "First brought to international attention in the 1920s by early pilots.",
            "Studied for decades by the famous German mathematician Maria Reiche.",
            "Covers an area of nearly 450 square kilometers."
        ]
    },
    "plaza-mayor-lima-landmarks-v2": {
        "desc": "The Plaza Mayor, also known as the Plaza de Armas, is the historic heart and birthplace of the city of Lima. Founded by Francisco Pizarro in 1535, it is surrounded by the city's most significant institutional buildings, including the Government Palace, the Cathedral of Lima, and the Archbishop's Palace. The square's center is marked by a beautiful 17th-century bronze fountain, a symbol of the city's colonial grandeur. It has been the site of countless historical events, from the proclamation of Peru's independence to modern state ceremonies. The yellow-hued buildings with their characteristic carved wooden balconies give the plaza a distinct and elegant character. As a UNESCO World Heritage site, it remains a vibrant gathering place for both locals and tourists exploring the capital's rich history.",
        "facts": [
            "The exact spot where Francisco Pizarro founded Lima on January 18, 1535.",
            "Surrounded by some of the finest examples of colonial and neo-colonial architecture.",
            "The bronze fountain in the center dates back to 1650.",
            "Site of the proclamation of Peruvian Independence by San Martín in 1821.",
            "Considered the center of the 'City of Kings'."
        ]
    },
    "kloster-san-francisco-landmarks-v2": {
        "desc": "The Monastery of San Francisco is a stunning example of Spanish Baroque architecture and one of Lima's most important religious complexes. Famous for its bright yellow facade and beautifully carved wooden portals, the church and monastery house a world-class library of ancient scrolls and a collection of religious art. However, it is perhaps most famous for its vast underground catacombs, which served as the city's first cemetery until the early 19th century. Visitors can walk through the eerie but fascinating tunnels where the bones of thousands of early Limeños are arranged in geometric patterns. The monastery's serene cloisters, decorated with 17th-century Sevillian tiles, provide a peaceful escape from the city's bustle. It is a must-visit for anyone interested in the spiritual and historical layers of Lima.",
        "facts": [
            "The catacombs are estimated to contain the remains of over 25,000 people.",
            "The library houses approximately 25,000 ancient and rare volumes.",
            "Survived the catastrophic earthquake of 1746 with minimal damage.",
            "Famous for its 'Last Supper' painting featuring local Peruvian elements like guinea pig (cuy).",
            "Part of the UNESCO World Heritage site of the Historic Center of Lima."
        ]
    },
    "fortaleza-real-felipe-landmarks-v2": {
        "desc": "The Real Felipe Fortress is a massive 18th-century military fortification located in the port city of Callao, designed to protect Lima from pirate attacks and foreign corsairs. Shaped as an irregular pentagon with five bastions, it is one of the most important colonial defensive structures in South America. The fortress played a crucial role during the Spanish American wars of independence, being the last stronghold of the Spanish Empire in South America to surrender. Today, it serves as the Peruvian Army Museum, showcasing historical weapons, uniforms, and military history. Visitors can explore its thick stone walls, dark dungeons, and high towers that once scanned the horizon for enemy sails. It stands as a powerful reminder of Peru's strategic importance during the colonial era.",
        "facts": [
            "Construction began in 1747 following the devastating earthquake and tsunami of 1746.",
            "Named in honor of King Philip V of Spain.",
            "Covers an area of 70,000 square meters.",
            "The site of the famous 'Combat of the 2nd of May' in 1866 against the Spanish fleet.",
            "The 'King's Tower' and 'Queen's Tower' are its two most prominent watchtowers."
        ]
    },
    "kloster-santa-catalina-landmarks-v2": {
        "desc": "The Santa Catalina Monastery in Arequipa is often described as a 'city within a city,' a walled complex of winding streets, colorful houses, and secret plazas. Founded in 1579, this Dominican convent was for centuries a strictly cloistered community where the daughters of wealthy Spanish families lived in relative luxury. The monastery is famous for its vibrant sillar stone walls painted in deep blues and terracotta oranges, creating some of the most photogenic scenes in all of Peru. Visitors can explore the former living quarters, kitchens, and laundry areas that provide a vivid look at colonial life. It is a place of profound silence and beauty, where every corner reveals a piece of spiritual history. Today, a small community of nuns still resides in a private wing of the complex.",
        "facts": [
            "Opened its doors to the public for the first time in 1970.",
            "Covers an area of over 20,000 square meters.",
            "Most of the structure is built from white and pink volcanic sillar stone.",
            "The 'Zocodover' plaza is its main central square.",
            "Located in the heart of Arequipa's UNESCO-listed historic center."
        ]
    },
    "kathedrale-arequipa-landmarks-v2": {
        "desc": "The Basilica Cathedral of Arequipa is the most important religious building in the 'White City,' dominating the northern side of the Plaza de Armas. Built entirely of white volcanic sillar stone, its neo-Renaissance facade with imposing twin towers is a masterpiece of colonial architecture. The cathedral is unique in Peru for its immense width and for being one of the few cathedrals in the world that displays the Vatican flag, a privilege granted by its status as a Basilica. Inside, visitors can admire a magnificent Belgian organ, a finely carved wooden pulpit from France, and a vast collection of religious art. Despite suffering damage from multiple earthquakes over the centuries, it has been meticulously restored each time, remaining a symbol of the city's resilience. Its illuminated facade at night is one of the most beautiful sights in the country.",
        "facts": [
            "The current structure largely dates back to the mid-19th century after a fire and earthquakes.",
            "The pipe organ is the largest in South America and was brought from Belgium in 1870.",
            "It is the only cathedral in Peru that stretches across the entire side of a plaza.",
            "The pulpit was carved by the famous French artist Buisine-Rigot.",
            "Its twin towers were completely rebuilt after a major earthquake in 2001."
        ]
    },
    "chavin-huantar-landmarks-v2": {
        "desc": "Chavín de Huántar is an ancient archaeological site located in the Ancash region, serving as the ceremonial and religious center of the Chavín culture from roughly 1200 to 400 BC. This UNESCO World Heritage site is famous for its massive stone platforms and a complex network of underground galleries and tunnels. One of its most mysterious features is the 'Lanzón,' a five-meter-tall granite monolith carved with complex feline and serpentine motifs, located deep within the oldest part of the temple. The site's sophisticated acoustic engineering allowed the sound of water and shells to echo through the tunnels, likely creating a terrifyingly divine experience for ancient pilgrims. As the birthplace of many Andean religious concepts, it is considered one of the most important formative sites in South American history. Its stone carvings, such as the famous tenoned heads, showcase an incredibly advanced artistic style.",
        "facts": [
            "Predates the Inca Empire by more than 2,000 years.",
            "The site is located at the confluence of the Mosna and Huachecsa rivers.",
            "Features the 'Lanzón Monolith,' the most important cult image of the Chavín.",
            "Designated a UNESCO World Heritage site in 1985.",
            "The 'Gallery of the Labyrinths' is one of many sophisticated underground passages."
        ]
    },
    "caral-landmarks-v2": {
        "desc": "The Sacred City of Caral is widely recognized as the oldest city in the Americas, dating back more than 5,000 years. Located in the arid Supe Valley north of Lima, it was the capital of the Caral-Supe civilization, which flourished at the same time as ancient Mesopotamia and Egypt. The site features monumental architecture, including six massive stone pyramids, circular sunken plazas, and residential areas. Perhaps most impressively, Caral was a peaceful society that lacked defensive walls and showed no evidence of warfare, focusing instead on trade and religious ceremonies. The discovery of 'quipus' (knotted strings) at the site suggests that complex record-keeping systems were in use millennia earlier than previously thought. Today, this UNESCO World Heritage site offers a profound look at the very dawn of civilization in the Western Hemisphere.",
        "facts": [
            "Dating back to 3000 BC, it is roughly contemporary with the Great Pyramid of Giza.",
            "The 'Great Pyramid' of Caral is 18 meters high and covers an area the size of four football fields.",
            "Evidence shows the city traded with distant regions in the Amazon and the Andes.",
            "Located approximately 200 kilometers north of Lima.",
            "Discovered and brought to prominence by Peruvian archaeologist Ruth Shady."
        ]
    },
    "huaca-pucllana-landmarks-v2": {
        "desc": "Huaca Pucllana is a massive adobe and clay pyramid located in the heart of Lima's modern Miraflores district, serving as a striking contrast between ancient history and urban development. Built by the Lima culture between 200 and 700 AD, it was an important ceremonial and administrative center. The pyramid was constructed using a unique 'book-style' technique, with small adobe bricks placed vertically to provide greater resistance to earthquakes. Today, the site includes a museum, a lush park with native plants and animals, and a world-class restaurant that overlooks the illuminated ruins at night. It is one of the most accessible and well-preserved archaeological sites in the capital. Walking along its high platforms provides a unique perspective of Lima's long and continuous history.",
        "facts": [
            "Built using millions of small, handmade 'book-shelf' adobe bricks.",
            "The main pyramid is 25 meters high.",
            "Originally served as a ritual center for a culture that worshiped the sea.",
            "Excavations have revealed several high-status tombs from the Wari culture.",
            "One of the few archaeological sites in the world with a high-end restaurant on its grounds."
        ]
    },
    "moray-landmarks-v2": {
        "desc": "Moray is one of the most unusual and visually stunning Inca archaeological sites, consisting of several deep, circular terraces that look like a giant natural amphitheater. Located on a high plateau in the Sacred Valley, these concentric rings were likely used as a sophisticated agricultural laboratory. Each level of the terraces has its own microclimate, with temperature differences of up to 15 degrees Celsius from the top to the bottom. It is believed that the Incas used Moray to experiment with different crops and acclimatize plants from the Amazon and the coast to the harsh Andean environment. The engineering of the site is equally impressive, with a drainage system that prevents the circular depressions from flooding during the rainy season. Today, it remains a powerful symbol of Inca scientific ingenuity.",
        "facts": [
            "The largest circular depression is approximately 30 meters deep.",
            "The temperature difference between the highest and lowest terraces can be as much as 15°C (27°F).",
            "Located at an altitude of about 3,500 meters.",
            "The terraces are built with supporting walls and fertile soil brought from other regions.",
            "Its precise purpose is still debated, but the agricultural laboratory theory is the most widely accepted."
        ]
    },
    "pisac-ruinen-landmarks-v2": {
        "desc": "The ruins of Pisac are perched majestically on a mountain ridge overlooking the village of the same name and the fertile Sacred Valley. This expansive Inca site is famous for its breathtaking agricultural terraces, which curve around the contours of the mountain like giant green waves. The complex includes military, religious, and residential sections, featuring some of the finest Inca stonework outside of Machu Picchu. One of its most significant features is the 'Intihuatana,' a ritual stone used by Inca priests to track the movements of the sun. The site also houses a massive ancient cemetery where thousands of tombs were once carved into the steep cliffside. Hiking through the various sectors of Pisac offers some of the most spectacular views in the entire Cusco region. It is a perfect example of how the Incas harmonized their architecture with the natural landscape.",
        "facts": [
            "The name 'Pisac' is derived from the Quechua word for 'partridge' (p'isaqa).",
            "Features the largest known Inca cemetery in the Americas.",
            "Located at an altitude of approximately 3,350 meters.",
            "The Intihuatana stone was used for astronomical observations and religious rites.",
            "The agricultural terraces are still in use by local farmers today."
        ]
    },
    "choquequirao-landmarks-v2": {
        "desc": "Choquequirao, often called the 'Sister of Machu Picchu,' is a remote and spectacular Inca citadel hidden deep in the Vilcabamba mountain range. Because it is only accessible via a grueling multi-day trek, it receives only a fraction of the visitors that Machu Picchu does, offering a much more peaceful and adventurous experience. The site is spread across a high ridge and features impressive terraces, plazas, and temples, some of which are decorated with unique 'Llama Flame' stone mosaics. It served as one of the last strongholds of the Inca resistance against the Spanish conquest. Much of the city is still covered by dense cloud forest, and excavations are ongoing to reveal its full extent. For many travelers, the journey to Choquequirao is one of the most rewarding and challenging experiences in the Andes. Its isolation has preserved its mystical atmosphere and archaeological integrity.",
        "facts": [
            "Located at an elevation of 3,050 meters, overlooking the Apurímac River canyon.",
            "Only about 30% to 40% of the site has been fully excavated.",
            "Famous for its 'Llamas del Sol' (Llamas of the Sun) mosaics on the agricultural terraces.",
            "The hike to the ruins involves descending and ascending over 1,500 meters of elevation.",
            "Likely served as a strategic link between the Amazon and the city of Cusco."
        ]
    },
    "pachacamac-landmarks-v2": {
        "desc": "Pachacamac was the most important religious center on the Peruvian coast for over a thousand years, predating the Incas and later being incorporated into their empire. Located just south of Lima, this sprawling archaeological complex was dedicated to the powerful creator deity, Pachacámac, who was believed to control earthquakes. The site features several massive adobe pyramids, temples, and plazas, including the impressive Temple of the Sun and the Acllahuasi (House of the Chosen Women). For centuries, pilgrims from all over the Andes traveled here to consult the famous Pachacámac oracle. Its strategic location at the mouth of the Lurín Valley made it a vital center of power and trade. Today, a modern on-site museum displays many of the artifacts found during excavations, including the original carved wooden idol of the deity.",
        "facts": [
            "Served as a major pilgrimage site for the Lima, Wari, Ychma, and Inca cultures.",
            "The Temple of the Sun was built by the Incas using millions of red-painted adobe bricks.",
            "Located just 31 kilometers south of Lima's city center.",
            "The site's name means 'Earth Maker' or 'World Creator' in Quechua.",
            "One of the largest and most important archaeological complexes in the coastal region."
        ]
    },
    "cristo-blanco-landmarks-v2": {
        "desc": "The Cristo Blanco is a majestic white statue of Jesus Christ that stands on Pukamoqo Hill, watching over the city of Cusco with outstretched arms. Gifted to the city by a group of Palestinian Christian refugees in 1945, the statue has become one of Cusco's most beloved modern landmarks. At night, it is brightly illuminated and can be seen from almost anywhere in the historic center. The site is located just a short walk from the fortress of Sacsayhuamán, making it an easy addition to any tour of the city's upper heights. From the base of the statue, visitors can enjoy one of the most stunning panoramic views of Cusco's red-tiled roofs and the surrounding Andean peaks. It is a popular spot for both quiet reflection and for photographers looking to capture the beauty of the imperial city.",
        "facts": [
            "The statue stands approximately 8 meters (26 feet) tall.",
            "Located on Pukamoqo Hill, which was considered a sacred site by the Incas.",
            "Designed by the local artist Francisco Olazo Olivera.",
            "A gift from the Palestinian community in Cusco as a token of gratitude for their welcome.",
            "Made of cedar wood and covered in plaster and white marble dust."
        ]
    },
    "estadio-nacional-peru-landmarks-v2": {
        "desc": "The Estadio Nacional, located in the heart of Lima, is the spiritual home of Peruvian football and the country's most important multi-purpose stadium. Known as the 'Coloso de José Díaz,' it has been the stage for countless historic matches, including many of the national team's most memorable victories. The stadium underwent a massive modernization in 2011, which added a striking metallic facade that can be illuminated in different colors and increased its capacity to over 40,000 spectators. Beyond sports, it is a major venue for international concerts and national celebrations. Its central location and modern facilities make it a symbol of Peru's passion for the 'beautiful game.' For many Peruvians, a match at the Nacional is a rite of passage filled with intense emotion and national pride.",
        "facts": [
            "The original stadium on this site was a gift from the British community in 1921.",
            "Completely rebuilt and inaugurated in its current modern form in July 2011.",
            "Features the 'La Torre del Estadio,' a prominent tower on one of its sides.",
            "Home to the 'Lecrín' or Walk of Fame, honoring great Peruvian athletes.",
            "The traditional venue for the home matches of the Peruvian national football team."
        ]
    },
    "puente-de-los-suspiros-landmarks-v2": {
        "desc": "The Bridge of Sighs (Puente de los Suspiros) is a romantic and picturesque wooden bridge in the heart of Lima's bohemian Barranco district. Built in the late 19th century, it spans a steep walkway known as the Bajada de Baños, which leads down to the Pacific Ocean. Local legend says that those who cross the bridge for the first time without breathing will have a wish granted. The bridge has inspired countless artists, musicians, and poets, most famously the singer Chabuca Granda, who dedicated a beautiful waltz to it. Surrounded by colorful colonial houses, flowering trees, and vibrant street art, it is one of the most charming spots in the city. At night, the bridge is softly lit, making it a favorite destination for couples and strolls through the neighborhood's artistic heart.",
        "facts": [
            "Originally built in 1876 but had to be rebuilt after the War of the Pacific.",
            "Spans 44 meters across a narrow ravine.",
            "The subject of a world-famous song by the Peruvian composer Chabuca Granda.",
            "The walkway beneath it, Bajada de Baños, was originally used by local fishermen to reach the sea.",
            "A focal point of the Barranco district, known for its vibrant nightlife and art galleries."
        ]
    },
    "kathedrale-cusco-landmarks-v2": {
        "desc": "The Cathedral of Cusco is the grand centerpiece of the Plaza de Armas and a magnificent symbol of the Spanish conquest and colonial power. Built between 1560 and 1654 on the site of the palace of the Inca Viracocha, it was constructed using stones taken from the nearby fortress of Sacsayhuamán. The cathedral's interior is a treasure trove of colonial art, featuring an incredible collection of 'Cusco School' paintings that blend European styles with indigenous symbolism. One of its most famous artworks is the 'Last Supper,' which depicts the disciples eating a roasted guinea pig (cuy). The cathedral also houses the 'Lord of the Earthquakes' (Taytacha Temblores), a revered image of Christ that is believed to protect the city. Its massive silver altar and beautifully carved choir stalls make it one of the most impressive religious buildings in the Americas.",
        "facts": [
            "Designated a UNESCO World Heritage site as part of the city of Cusco.",
            "It took nearly 100 years to complete its construction.",
            "The Maria Angola bell, cast in 1659, is one of the largest and most famous in South America.",
            "Features a unique fusion of Gothic, Renaissance, and Baroque styles.",
            "Houses more than 400 paintings from the famous Cusco School of art."
        ]
    },
    "museo-larco-landmarks-v2": {
        "desc": "The Larco Museum in Lima is widely considered one of the best museums in South America, offering a comprehensive and beautifully curated journey through 5,000 years of pre-Columbian history. Housed in an 18th-century vice-royal mansion built over a 7th-century pyramid, the museum is famous for its world-class collection of gold and silver jewelry, intricate textiles, and its unique gallery of erotic pottery. Unlike many traditional museums, its storerooms are open to the public, allowing visitors to see thousands of additional archaeological pieces. The museum is surrounded by lush, flowering gardens that provide a tranquil setting for its excellent cafe and terrace. It is a must-visit for anyone wanting to understand the complex civilizations that flourished in Peru long before the Incas. The quality and presentation of its artifacts are truly world-class.",
        "facts": [
            "Founded in 1926 by Rafael Larco Hoyle.",
            "Located in a former mansion that was built on top of a pre-Columbian pyramid.",
            "Famous for its 'Erotic Gallery,' a rare collection of pre-Columbian sexual representations.",
            "One of the few museums in the world that allows public access to its entire storage collection.",
            "Consistently ranked as one of the top museums in the world by TripAdvisor travelers."
        ]
    },
    "sillustani-landmarks-v2": {
        "desc": "Sillustani is a hauntingly beautiful pre-Inca cemetery located on a peninsula overlooking Lake Umayo, near the city of Puno. It is famous for its 'chullpas,' massive cylindrical stone towers that served as tombs for the elite of the Colla and later the Inca cultures. These towers, some reaching up to 12 meters in height, are feats of ancient engineering, with perfectly fitted stones that have survived centuries of exposure. The site's location on a windswept plateau surrounded by the deep blue waters of the lake creates a profound sense of peace and mystery. Many of the towers were damaged by tomb robbers over the centuries, but their scale and the precision of their construction are still awe-inspiring. Visitors often visit at sunset when the light casts long shadows across the ancient stones. It remains one of the most important and evocative archaeological sites in the Peruvian Altiplano.",
        "facts": [
            "The tallest chullpas reach a height of approximately 12 meters (39 feet).",
            "The Colla people built these tombs before they were conquered by the Incas in the 15th century.",
            "Some of the stones feature carvings of lizards, which were considered symbols of life.",
            "Lake Umayo, surrounding the site, is home to various species of high-altitude birds.",
            "Located at an altitude of nearly 3,900 meters above sea level."
        ]
    },
    "tambomachay-landmarks-v2": {
        "desc": "Tambomachay, often called the 'Bath of the Inca,' is a beautiful archaeological site near Cusco that showcases the Incas' sophisticated understanding of hydraulic engineering. The site consists of a series of finely carved stone aqueducts, canals, and waterfalls that run through the terraces of a hillside. It is believed to have served as a military outpost or a sacred spa for the Inca elite, where water was used for both physical and spiritual purification. The water still flows perfectly through the ancient channels today, its source remaining hidden deep within the mountain. Its serene atmosphere and the constant sound of running water make it one of the most tranquil stops on the circuit of ruins around Cusco. The site is a perfect example of the Incas' deep reverence for water as a sacred element of life.",
        "facts": [
            "Features a series of platforms and niches carved with incredible precision.",
            "The water source is an underground spring that has never run dry.",
            "Located at an altitude of 3,700 meters, just 7 km from Cusco.",
            "Commonly used as part of a four-ruin circuit including Sacsayhuamán, Q'enqo, and Puka Pukara.",
            "Probably served as a center for the cult of water."
        ]
    },
    "qenqo-landmarks-v2": {
        "desc": "Q'enqo is one of the most enigmatic Inca sanctuaries, consisting of a massive limestone rock that has been intricately carved with channels, steps, and altars. Its name, which means 'zigzag' or 'labyrinth' in Quechua, likely refers to the winding channels carved into its surface, possibly used for ritual libations of chicha or blood. The most fascinating part of the site is its semi-enclosed underground chamber, which contains a large stone altar where mummification or other sacred ceremonies may have taken place. Unlike the massive built structures of other Inca sites, Q'enqo is an example of 'carved rock' architecture, where the natural form of the stone was modified for spiritual purposes. Surrounded by a forest of eucalyptus trees, it has a quiet and mystical feel that stands in contrast to the nearby fortress of Sacsayhuamán. It remains a key site for understanding Inca religious practices and their connection to the earth.",
        "facts": [
            "The main rock is a massive natural limestone monolith.",
            "Features a 'sacrificial room' located inside a natural cave within the rock.",
            "The zigzagging channels on top may have been used to predict the future based on how liquids flowed.",
            "Located just a few minutes' drive or a short hike from the city of Cusco.",
            "Part of the UNESCO World Heritage listed archaeological area of Cusco."
        ]
    },
    "cumbemayo-landmarks-v2": {
        "desc": "Cumbemayo is a spectacular archaeological site near Cajamarca, famous for its pre-Inca aqueduct that is considered one of the greatest engineering feats of ancient South America. Carved into solid volcanic rock over 3,000 years ago, the canal runs for several kilometers with incredible precision, including sharp 90-degree turns designed to slow the water's flow. The site is also known for 'Los Frailones,' a collection of towering, jagged rock formations that resemble a group of hooded monks. It was likely a sacred site where water was worshiped as a life-giving force, and ancient petroglyphs can still be seen on some of the rock faces. Its location at high altitude provides stunning views of the Cajamarca valley and a sense of profound isolation. Cumbemayo remains a testament to the sophisticated hydraulic knowledge of pre-Columbian cultures in northern Peru.",
        "facts": [
            "The aqueduct is approximately 9 kilometers long.",
            "Dates back to the Cajamarca or Chavín cultures, around 1500 BC.",
            "The name is derived from 'Kumbe Mayo,' meaning 'well-made river'.",
            "Located at an altitude of about 3,500 meters.",
            "The 'Los Frailones' rocks can reach heights of up to 18 meters."
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
