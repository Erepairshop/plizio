
import re
import os

file_path = '/mnt/c/Users/User/plizio-repo/lib/visualLab/data/denmarkPoi.ts'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# This is a simplified approach. Since the file is huge and complex, 
# I will define the content for each POI and then use regex to insert it.

poi_data = {
    "city-copenhagen": {
        "facts": [
            "Copenhagen is consistently ranked as one of the world's most livable and happiest cities due to its focus on work-life balance.",
            "The city's metro system operates 24/7 and is fully automated, meaning the trains run without human drivers.",
            "Strøget, located in the heart of the city, is one of the longest pedestrian shopping streets in all of Europe.",
            "Over 60% of Copenhagen's residents commute to work or school by bicycle every single day.",
            "The Freetown Christiania district is a unique self-governing community known for its alternative lifestyle and distinct social rules."
        ]
    },
    "city-aarhus": {
        "desc": "Aarhus is Denmark's second-largest city and a vibrant cultural hub located on the east coast of the Jutland peninsula. The city successfully blends its ancient Viking roots with bold contemporary architecture and a high-energy university atmosphere. Its crowning jewel is the ARoS Art Museum, famous for the circular rainbow walkway on its roof that offers spectacular panoramas of the cityscape. The historic center features 'Den Gamle By', an open-air museum that masterfully recreates the atmosphere of a Danish town from centuries past. Aarhus also provides easy access to thick forests and beautiful beaches, making it a perfect destination for those seeking both urban culture and natural relaxation.",
        "facts": [
            "Aarhus was founded as a Viking settlement in the 8th century, making it one of the oldest cities in Scandinavia.",
            "The Aarhus Cathedral, dedicated to St. Clement, is both the tallest and the longest church in all of Denmark.",
            "The city held the title of European Capital of Culture in 2017, cementing its reputation as a major artistic center.",
            "Moesgaard Museum is internationally renowned for its archaeological exhibits, including the famous 2,000-year-old Grauballe Man.",
            "Aarhus is affectionately known as the 'City of Smiles,' a nickname reflecting the welcoming and friendly nature of its residents."
        ]
    },
    "city-odense": {
        "desc": "Odense, situated on the island of Funen, is known worldwide as the birthplace of the legendary fairytale writer Hans Christian Andersen. The city breathes storytelling at every corner, featuring numerous museums, statues, and parks dedicated to the life and work of the great author. Beyond its literary heritage, Odense is one of Denmark's oldest cities, offering a charming historic center with cobblestone streets and traditional timber-framed houses. Today, the city has transformed into a modern hub for technology and robotics while maintaining a relaxed and welcoming atmosphere. The Odense Zoo and numerous cultural festivals add a special charm to this fascinating destination that bridges the gap between past and future.",
        "facts": [
            "The name Odense is derived from Old Norse and means 'Odin's Sanctuary,' referring to the supreme god in Norse mythology.",
            "Odense is home to one of Europe's most important research and production centers in the field of robotics and automation.",
            "St. Canute's Cathedral in the city is an outstanding example of Gothic architecture and houses the remains of the canonized Danish king.",
            "The city features an exceptionally developed network of bicycle paths, making it one of the safest cities in the world for cyclists.",
            "The annual H.C. Andersen Festival in August transforms the entire city into a magical stage filled with performances and street art."
        ]
    },
    "reg-jutland": {
        "desc": "Jutland is the large peninsula that forms the mainland part of Denmark, offering an incredible diversity of landscapes and experiences. The west coast is defined by wild beaches, massive sand dunes, and the rugged breeze of the North Sea, serving as a true paradise for nature lovers. In contrast, the east coast is gentler, featuring quiet fjords, rolling green hills, and deep forests that invite exploration. The region is exceptionally rich in history, housing invaluable Viking monuments like the Jelling Stones, which are part of the UNESCO World Heritage list. As the agricultural and industrial heart of the country, Jutland maintains a strong sense of tradition and local hospitality that is felt in every small town and village.",
        "facts": [
            "Jutland is the only part of Denmark directly connected to the rest of mainland Europe via its border with Germany.",
            "The region is home to Denmark's highest natural point, Møllehøj, though it stands at a modest elevation of just 170 meters.",
            "Jutland is the birthplace of LEGO; the world-famous toy was invented in the town of Billund, where the first Legoland opened.",
            "The Jelling Stones, located in the heart of the peninsula, are often called 'Denmark's birth certificate' due to their runic inscriptions.",
            "The Wadden Sea National Park in southwestern Jutland is a unique tidal ecosystem protected as a UNESCO World Heritage site."
        ]
    },
    "reg-zealand": {
        "desc": "Zealand is the largest island in Denmark proper and serves as the nation's political, cultural, and economic heart, housing the capital city of Copenhagen. The island offers a fascinating mix of vibrant metropolises, picturesque historic towns, and natural landscapes of rare beauty. From the white chalk cliffs of Møns Klint to imposing royal castles like Frederiksborg, Zealand is a destination full of surprises for every traveler. Viking history is strongly present in the city of Roskilde, where its famous cathedral and the Viking Ship Museum attract thousands of history enthusiasts. Connected to Sweden by the impressive Øresund Bridge, the island represents a vital gateway between Central Europe and the rest of Scandinavia.",
        "facts": [
            "Zealand is the 13th largest island in Europe and the most populous island in Denmark, excluding the massive territory of Greenland.",
            "Kronborg Castle in Helsingør, located on the island's northern tip, is the real-life setting for Shakespeare's famous play Hamlet.",
            "Roskilde Cathedral on the island has been the traditional burial site for Danish kings and queens for over 500 years.",
            "Zealand is separated from the island of Funen by the Great Belt strait, which is crossed by one of the world's longest suspension bridges.",
            "The island's landscape was shaped by glaciers during the last ice age, resulting in its signature rolling hills and numerous lakes."
        ]
    },
    "city-aalborg": {
        "desc": "Aalborg is a major port city located in northern Jutland, known for its spectacular transformation from an industrial center into a modern cultural hub. Situated on the banks of the Limfjord, the city offers a revitalized waterfront where contemporary architecture, such as the House of Music, meets vibrant recreational spaces. The old town center preserves its historic charm through narrow streets and landmarks like Aalborghus Castle, providing a lively and inviting atmosphere. Aalborg is also famous for its animated nightlife, particularly on Jomfru Ane Gade, which is the longest street of bars in Denmark. With a prestigious university and numerous festivals, the city exudes a youthful and creative energy that attracts visitors of all ages.",
        "facts": [
            "The Aalborg Carnival, held annually in May, is the largest event of its kind in Northern Europe, attracting tens of thousands of participants.",
            "Aalborg Zoo is one of Denmark's most visited attractions and is actively involved in international wildlife conservation programs.",
            "The Aalborg Tower offers a 360-degree panoramic view of the city and the fjord from a height of over 100 meters above sea level.",
            "The Lindholm Høje Viking burial ground, located just outside the city, is one of the best-preserved sites from the Viking Age.",
            "The city is historically famous for its production of Akvavit, a traditional Scandinavian spirit flavored with caraway or dill."
        ]
    },
    "city-helsingor": {
        "desc": "Helsingør is a strategic historic city located at the narrowest point of the Øresund strait, offering spectacular views toward the Swedish coast. The city is world-famous for Kronborg Castle, a UNESCO World Heritage site and the setting for William Shakespeare's tragedy Hamlet. The city center is a maze of well-preserved medieval streets, featuring colorful houses and artisanal shops that recall its period of commercial glory. As a vital gateway to the rest of Scandinavia, Helsingør combines its maritime heritage with a modern cultural offering, including the innovative Maritime Museum of Denmark. The harbor atmosphere, the ferries constantly crossing the strait, and frequent cultural events make this city a fascinating destination for any traveler.",
        "facts": [
            "For over 400 years, Helsingør collected the 'Sound Dues' from every ship entering or leaving the Baltic Sea, enriching the Danish crown.",
            "The Maritime Museum of Denmark in Helsingør is built inside an old dry dock and has won numerous awards for its innovative architecture.",
            "The Øresund strait at this point is only 4 kilometers wide, making the Swedish city of Helsingborg clearly visible to the naked eye.",
            "Every summer, performances of Hamlet take place in the courtyard of Kronborg Castle, continuing a tradition that began in the 19th century.",
            "The 'Han' statue, a male counterpart to the Little Mermaid made of polished stainless steel, sits prominently in Helsingør's harbor."
        ]
    },
    "city-roskilde": {
        "desc": "Roskilde is one of Denmark's oldest and most important historic cities, serving as the country's former capital and a historic seat of royal power. The city is dominated by Roskilde Cathedral, a brick Gothic masterpiece where the majority of Danish monarchs are laid to rest. On the shores of the Roskilde Fjord lies the Viking Ship Museum, where visitors can admire five original ships recovered from the fjord's waters and meticulously reconstructed. Roskilde is also globally famous for its massive music festival, which is one of the largest and oldest in Europe. The city offers a unique blend of historical solemnity, maritime adventure, and contemporary energy, making it an essential stop for understanding the Danish spirit.",
        "facts": [
            "Roskilde Cathedral was the first Gothic cathedral in Northern Europe to be built entirely of brick, influencing religious architecture across the region.",
            "The Roskilde Festival is organized entirely by a non-profit foundation, with all proceeds donated to charitable causes every year.",
            "The Viking Ship Museum houses vessels that were intentionally sunk in the 11th century to block an invasion route to the city.",
            "Until 1443, Roskilde served as the capital of Denmark before the king decided to move the royal court to the growing city of Copenhagen.",
            "The city also hosts a prestigious technology park, serving as an important center for research and education in the Zealand region."
        ]
    },
    "city-esbjerg": {
        "desc": "Esbjerg is the principal port city on Denmark's west coast and serves as a vital center for the offshore energy industry in the North Sea. Although it is a relatively young city, founded in the 19th century, Esbjerg has grown rapidly from a small settlement into a modern and active metropolis. The city's emblem is the imposing 'Man Meets the Sea' monument, consisting of four giant white statues that gaze out toward the marine horizon. Visitors can explore the Fisheries and Maritime Museum to understand the city's deep connection with the ocean and the surrounding environment. Additionally, Esbjerg serves as the primary gateway to the Wadden Sea National Park and the picturesque island of Fanø, offering a perfect balance between industry and natural beauty.",
        "facts": [
            "Esbjerg is the youngest major city in Denmark, having been planned and built by the state starting in 1868 as a strategic export port.",
            "The monumental 'Mennesket ved Havet' statues stand 9 meters tall each and were unveiled in 1995 to mark the city's 100th anniversary.",
            "The Port of Esbjerg is the main base for the installation and maintenance of offshore wind turbines in the Danish sector of the North Sea.",
            "The local ice hockey and football teams are among the most beloved in the country, with sport playing a central role in the community culture.",
            "The city boasts the longest shopping street in Western Denmark, offering a wide variety of shops and urban experiences for visitors."
        ]
    },
    "city-viborg": {
        "desc": "Viborg, located in the heart of Jutland, is one of Denmark's most historic cities, having held major political and religious importance since the medieval period. The city is famous for its impressive cathedral, whose frescoes by Joakim Skovgaard are considered among the most beautiful and significant in the country. Its old, cobbled streets preserve a quiet and noble atmosphere, reflecting its historic status as the place where the kingdom's nobles and judges once gathered. Surrounded by shimmering lakes and dense forests, Viborg offers numerous trails for walking and outdoor recreation. Today, the city gracefully combines its rich heritage with a modern and active urban life, serving as a central point for administration and education in the region.",
        "facts": [
            "Viborg was the meeting place of the regional parliament (Landsting) and the site where Danish kings were traditionally acclaimed.",
            "Viborg Cathedral is the largest granite-built church in the world, serving as a testament to the skill of medieval builders.",
            "In the 12th century, Viborg was the starting point for Danish crusades to the Baltic lands, serving as a strategic religious center.",
            "The city's name comes from the Old Norse words 'Wibi' (holy place) and 'Berg' (hill), indicating its sacred roots from pre-Christian times.",
            "The Hærvejen trail, the ancient pilgrimage and trade route that spans Jutland from north to south, passes directly through central Viborg."
        ]
    },
    "city-randers": {
        "desc": "Randers is a vibrant city situated at the mouth of the Gudenå River as it flows into the Randers Fjord, making it Denmark's only river port city. The city is world-famous for 'Randers Regnskov', an impressive tropical botanical garden housed under three giant domes that recreate ecosystems from America, Africa, and Asia. The historic city center is full of character, featuring old timber-framed houses and cobbled streets that host modern shops and welcoming cafes. Randers has a long tradition in trade and industry, which is reflected in its diverse architecture and active port areas. Its strategic positioning between Aarhus and Aalborg makes it an important transport hub and an attractive destination for those wanting to explore eastern Jutland.",
        "facts": [
            "Randers is historically famous for its production of luxury gloves; 'Randers Gloves' have even been worn by the Queen of Denmark.",
            "The Memphis Mansion museum in Randers is a faithful replica of Elvis Presley's home and houses one of the largest collections dedicated to the artist.",
            "During the medieval period, Randers was an important fortress and the scene of decisive battles for Danish independence.",
            "The Gudenå River offers excellent opportunities for kayaking and fishing, serving as a central natural resource for the city's residents.",
            "Randers boasts the oldest provincial theater in Denmark, with an active cultural scene that dates back to the early 19th century."
        ]
    },
    "city-silkeborg": {
        "desc": "Silkeborg is the jewel of Denmark's lake district, situated in a natural setting of rare beauty surrounded by vast forests and shimmering waters. The city developed around the paper industry in the 19th century, but today it is primarily known as a top destination for active outdoor tourism. Visitors can sail on the Gudenå River with the world's oldest functioning paddle steamer, Hjejlen, or explore the numerous hiking and cycling trails. The Silkeborg Museum houses the Tollund Man, a naturally mummified body from the Iron Age, offering a fascinating connection to the distant past. The city's atmosphere is relaxed and healthy, emphasizing the balance between urban life and communion with the natural world.",
        "facts": [
            "Silkeborg is home to the world's oldest coal-fired paddle steamer still in operation, the Hjejlen, which was inaugurated in 1861.",
            "The Tollund Man, displayed at the local museum, is so well-preserved that his facial features and even stomach contents can still be studied.",
            "The area around the city is often called 'Danish Switzerland' due to its hills, which are unusually high for the country's flat terrain.",
            "The city is a national center for water sports, frequently hosting kayaking championships and open-water swimming events.",
            "Silkeborg also features the Museum Jorn, dedicated to the famous Danish artist Asger Jorn, one of the founders of the COBRA art movement."
        ]
    },
    "city-hilleroed": {
        "desc": "Hillerød is an elegant city located in northern Zealand, famous worldwide for Frederiksborg Castle, the largest Renaissance building in Scandinavia. The castle, spectacularly situated on three small islands in the middle of a lake, houses the National History Museum and is surrounded by a magnificent baroque garden. Hillerød's city center is welcoming and quiet, offering pleasant shopping streets and numerous green areas that invite relaxation. In addition to its royal atmosphere, the city is an important railway hub and an administrative center for the northern region. The proximity to royal forests and shimmering lakes makes Hillerød an ideal destination for a day trip from Copenhagen, offering a generous dose of history and nature.",
        "facts": [
            "Frederiksborg Castle was built as a royal residence for King Christian IV and served as the coronation site for many Danish kings.",
            "The castle's baroque garden is famous for the royal monogram cut into the hedges and for its complex system of cascades and fountains.",
            "Gribskov forest, one of the largest in Denmark, borders the city and is part of the UNESCO-listed par force hunting landscape.",
            "Hillerød houses a unique pharmacy museum located in a historic building, offering a rare perspective on medicine from past centuries.",
            "The city is directly connected to Copenhagen by the S-tog train, making it a highly sought-after residential destination for its quality of life."
        ]
    },
    "city-kolding": {
        "desc": "Kolding is a historic and modern city located in southeastern Jutland, at the head of the Kolding Fjord, having held a strategic role for centuries between Denmark and the German states. The central landmark is Koldinghus, Jutland's last royal castle, which was transformed from a burnt ruin into an award-winning art and history museum known for its innovative restoration. Today, the city is a vibrant hub of design and education, housing the Trapholt Museum, which is dedicated to modern art and Danish furniture design. Kolding offers a pleasant blend of pedestrian shopping streets, green parks, and a developing waterfront area. Its dynamic atmosphere and central location make it an excellent base for exploring both southern Jutland and the nearby island of Funen.",
        "facts": [
            "Koldinghus was destroyed by a devastating fire in 1808, caused by Spanish soldiers who made a fire too large while trying to stay warm.",
            "The Trapholt Museum is the only museum in Denmark where visitors can see a complete house designed by the famous architect Arne Jacobsen.",
            "The Geographical Garden in Kolding is a unique botanical garden where plants are arranged according to their geographic origin on the globe.",
            "In the 19th century, Kolding was a key border point and played an important role in the wars between Denmark and Prussia.",
            "The city is known for the 'Kolding Design School,' which promotes innovation and sustainability in the Danish design industry."
        ]
    },
    "city-frederikshavn": {
        "desc": "Frederikshavn is an essential port city located in northern Jutland, serving as the main maritime gateway to Sweden and Norway. The city has an authentic maritime atmosphere, heavily influenced by its harbor activities, fishing, and local naval military bases. One of its most unusual attractions is 'Palm Beach', the only one of its kind in Denmark, where imported palm trees create a tropical ambiance during the summer months. Frederikshavn is also known for its historic fortification, the Powder Tower (Krudttårnet), which recalls its past as a strategic defense town. Being a starting point for numerous ferries, the city is full of life and offers many shopping options, restaurants, and cultural activities for travelers passing through.",
        "facts": [
            "The city's name was changed in 1818 from Fladstrand to Frederikshavn in honor of King Frederik VI when it received its city status.",
            "The Krudttårnet (Powder Tower) was moved in its entirety 270 meters in 1974 to make room for the expansion of the shipyard.",
            "The city houses a major naval base of the Royal Danish Navy, serving as a strategic point for security in the Baltic and North Seas.",
            "Every year, Frederikshavn hosts the 'Tordenskiold' festival, which recreates historic 18th-century battles in the harbor.",
            "From Frederikshavn, one can quickly reach the island of Læsø by ferry, famous for its traditional salt production and houses with seaweed roofs."
        ]
    },
    "city-sonderborg": {
        "desc": "Sønderborg is a picturesque city located on the border with Germany, split between the Jutland peninsula and the island of Als by the shimmering Alssund strait. The city has a turbulent and fascinating history marked by border conflicts, with its central element being Sønderborg Castle, which houses a museum dedicated to the history of the Schleswig region. The city's waterfront is modern and animated, serving as an ideal spot for walks with views of the harbor and the drawbridges that connect the town. Nearby lies the historic Dybbøl Banke park, the site of a decisive 1864 battle that is now a national symbol of Danish resilience. Sønderborg is a destination where Danish and German cultures meet harmoniously, offering superb marine landscapes and a relaxed European atmosphere.",
        "facts": [
            "Sønderborg Castle served as a prison for King Christian II for 17 years after he was dethroned in the 16th century.",
            "The University of Southern Denmark has a modern campus in Sønderborg in a spectacular building called Alsion, which also houses a world-class concert hall.",
            "The city is a center of excellence for green technologies and energy efficiency, serving as the headquarters for global companies like Danfoss.",
            "The King Christian X Bridge, which links the two parts of the city, is an impressive drawbridge that opens frequently for passing ships.",
            "Sønderborg has held the title of Cultural Capital of Denmark within various regional initiatives, promoting art and cross-border dialogue."
        ]
    },
    "city-holstebro": {
        "desc": "Holstebro is a city in western Jutland recognized nationally as a vibrant center for art and culture despite its relatively small size. The city is famous for its massive investments in public art, with Alberto Giacometti's sculpture 'Woman on a Cart' being the most valuable and discussed piece in the urban space. Holstebro houses the renowned Odin Teatret experimental theater and numerous other cultural institutions that organize festivals and performances throughout the year. The Storå River flows through the city, offering picturesque green areas for relaxation and recreational activities like fishing or boating. With welcoming pedestrian shopping streets and a strong community atmosphere, Holstebro is the perfect destination for those seeking an authentic and creative Danish urban experience.",
        "facts": [
            "Giacometti's sculpture in the city center was bought in 1966 for a small sum, but today it is worth tens of millions of euros.",
            "Holstebro has been voted several times as Denmark's 'Shopping City of the Year' due to the variety and quality of its shops.",
            "The Jydske Dragonregiment military base located in the city is one of Denmark's most important training centers for tanks and cavalry.",
            "Every evening, Giacometti's sculpture is lowered into a special underground safe to protect it from potential vandalism or theft.",
            "The city hosts 'Holstebro Week,' a massive urban festival with music, art, and sporting events that attracts thousands of visitors."
        ]
    },
    "cult-legoland": {
        "desc": "Legoland Billund is the first and most famous amusement park in the Legoland network, opened in 1968 right next to where the iconic toy brand was born. The park is a magical universe built from over 60 million LEGO bricks, offering spectacular attractions for children and adults alike. The heart of the park is Miniland, where visitors can admire detailed replicas of famous cities and monuments at a small scale. In addition to themed zones like the Knights' Kingdom or Pirate Land, the park offers thrilling roller coasters, 4D cinemas, and interactive building experiences. Legoland Billund is not just an amusement park, but a tribute to the creativity, imagination, and Danish engineering that has conquered the entire world.",
        "facts": [
            "The park was inaugurated on June 7, 1968, and attracted over 600,000 visitors in its first year, far exceeding all expectations.",
            "The Mount Rushmore model in Miniland is built from over 1.5 million LEGO pieces and is one of the most photographed features.",
            "Park employees often wear special name tags made from LEGO and are encouraged to trade minifigures with young visitors.",
            "Legoland Billund houses the world's largest LEGO model of an X-Wing Starfighter from the Star Wars universe, made entirely of bricks.",
            "Inside the park, there is also an Atlantis by Sea Life aquarium where real marine creatures swim among underwater LEGO models."
        ]
    },
    "cult-tivoli": {
        "desc": "Tivoli Gardens, located right in the heart of Copenhagen, represents a unique mix of amusement park, botanical garden, and cultural center that has enchanted visitors since 1843. It is the world's second-oldest amusement park and served as a direct source of inspiration for Walt Disney himself when he created Disneyland. The atmosphere in Tivoli changes spectacularly as evening falls, when thousands of colored lanterns create a fairytale setting along the paths and the lake. The park offers everything from historic wooden roller coasters to modern adrenaline-pumping rides, alongside luxury restaurants and open-air concert stages. Regardless of the season, whether it's the famous Christmas decorations or the spring flowers, Tivoli remains the magical soul of the Danish capital.",
        "facts": [
            "Tivoli's 'Rutschebanen', built in 1914, is one of the world's oldest wooden roller coasters still operating with a brakeman on board.",
            "Hans Christian Andersen was a frequent visitor to the park and drew inspiration from its oriental atmosphere to write the fairytale 'The Nightingale'.",
            "The Tivoli Concert Hall hosts numerous classical music and ballet performances every year, boasting exceptional acoustics.",
            "The Tivoli Youth Guard (Tivoli-Garden) consists of young musicians who parade in traditional uniforms inspired by the Danish Royal Guard.",
            "The park uses electricity solely from wind power sources, demonstrating Denmark's deep commitment to sustainability."
        ]
    },
    "cult-nyhavn": {
        "desc": "Nyhavn is undoubtedly the most iconic and photographed location in Copenhagen, a 17th-century historic canal lined with brightly colored merchant houses. Originally built as a commercial port to connect the old city to the sea, Nyhavn was for centuries a place full of sailors, breweries, and commercial hustle. Today, the historic houses have been carefully restored and house numerous cafes, bars, and restaurants where locals and tourists enjoy 'hygge' by the water. The canal is filled with historic wooden ships, offering a window into the city's maritime past and a spectacular backdrop for evening walks. Nyhavn is not just a tourist spot, but a living symbol of the cosmopolitan and relaxed spirit that defines the Danish capital.",
        "facts": [
            "The oldest house in Nyhavn is number 9, which dates back to 1681 and has preserved its original architecture to this day.",
            "The great writer Hans Christian Andersen lived in three different houses in Nyhavn (numbers 18, 20, and 67) over more than 20 years.",
            "The Nyhavn canal was dug manually by Swedish prisoners of war during the reign of King Christian V in the 17th century.",
            "The memorial anchor at the end of the canal commemorates Danish sailors who lost their lives during World War II.",
            "Many of the colorful houses were built specifically with large windows to show off the wealth and social status of the merchants who owned them."
        ]
    },
    "cult-little-mermaid": {
        "desc": "The Little Mermaid statue is one of Denmark's most famous symbols and an essential attraction for anyone visiting Copenhagen. Situated on a rock at the edge of the Langelinie promenade, the small bronze sculpture is inspired by the melancholy character from Hans Christian Andersen's fairytale. The statue was gifted to the city by brewing magnate Carl Jacobsen in 1913 after he had been impressed by a ballet performance based on the mermaid's story. Although its size is surprisingly small, its fame is colossal, having become a symbol of longing, unrequited love, and fragile beauty. Gazing out toward Copenhagen harbor, the mermaid seems to be forever waiting for something, capturing the imagination of millions of visitors who come to photograph her every year.",
        "facts": [
            "Sculptor Edvard Eriksen used the face of ballerina Ellen Price for the statue's head and his own wife, Eline, as the model for the body.",
            "The statue has been a victim of vandalism several times throughout history, having been decapitated twice and painted various colors as a form of protest.",
            "In 2010, the statue left Copenhagen for the first time to be displayed in the Danish pavilion at the World Expo in Shanghai.",
            "Numerous replicas of the statue exist around the world, including in California, Japan, and Spain, demonstrating its global cultural impact.",
            "The Little Mermaid stands only 1.25 meters tall and weighs about 175 kilograms, being much smaller than most tourists expect."
        ]
    },
    "cult-kronborg": {
        "desc": "Kronborg Castle, strategically located in Helsingør at the narrowest point of the strait between Denmark and Sweden, is one of the most important Renaissance fortresses in Europe. Originally built as a toll collection point for ships entering the Baltic Sea, the castle became world-famous as the setting for William Shakespeare's play 'Hamlet'. Its imposing architecture, with high towers and massive bastions, reflects the wealth and power of Danish kings in the 16th and 17th centuries. Inside, visitors can explore lavish royal halls, decorated chapels, and the dark catacombs where the legendary hero Holger the Dane sleeps. Kronborg is not just a historic monument but a place charged with legends and theatrical atmosphere, being recognized as a UNESCO World Heritage site.",
        "facts": [
            "The castle was rebuilt by King Christian IV after a devastating fire in 1629 that destroyed much of the original interior.",
            "The Great Hall of the castle (Knight's Hall) was the largest of its kind in Northern Europe at the time of its completion.",
            "Legend has it that Holger the Dane (Holger Danske) will come to life and save Denmark if the country ever faces great danger.",
            "The Sound Dues collected at Kronborg represented at one point up to two-thirds of the total income of the Danish state.",
            "The castle is surrounded by a complex system of moats and star-shaped fortifications, making it nearly impossible to conquer in its heyday."
        ]
    },
    "land-round-tower": {
        "desc": "The Round Tower (Rundetårn) is an unmistakable landmark of Copenhagen, being the oldest functioning astronomical observatory in Europe, built in the 17th century by King Christian IV. What makes this tower truly unique is its internal spiral ramp, wide and paved with brick, which replaces traditional steps to allow carriages to reach the top. From the upper platform, visitors are rewarded with a spectacular 360-degree panorama over the red roofs and towers of the old city. The tower is part of a complex that originally included a university library and a church, being a monument dedicated to both science and faith. Today, it remains a fascinating attraction, offering an insight into the history of astronomy and a unique viewing angle over the Danish capital.",
        "facts": [
            "The spiral ramp is 209 meters long and winds seven and a half times around the hollow core of the tower.",
            "In 1716, Tsar Peter the Great of Russia rode up the tower's ramp on horseback, followed by his wife, Catherine, in a carriage.",
            "At the center of the tower is a glass niche where visitors can stand 25 meters above the ground, looking directly into the structure's core.",
            "The library halfway up the tower once housed the entire book collection of the University of Copenhagen, where H.C. Andersen also studied.",
            "Every brick used in the construction of the tower was brought from the Netherlands, as local bricks were not considered strong enough."
        ]
    },
    "land-copenhagen-opera-house": {
        "desc": "The Copenhagen Opera House is one of the most modern and spectacular performance venues in the world, serving as a symbol of contemporary Danish architecture. Located on the island of Holmen, directly across from the Amalienborg Royal Palace, the building impresses with its monumental flat roof that extends far over the waterfront. The interior is equally lavish, using noble materials such as Sicilian marble, 24-carat gold leaf, and maple wood to ensure impeccable acoustics. The opera was a gift given to the Danish state by the foundation of industrialist Mærsk Mc-Kinney Møller and immediately became a landmark on Europe's cultural map. In addition to world-class opera and ballet performances, the building itself is a work of art reflecting the ambition and refinement of current Nordic design.",
        "facts": [
            "The building cost over 500 million dollars to construct, making it one of the most expensive opera houses ever built in history.",
            "The ceiling of the main auditorium is covered with 24-carat gold leaf, spanning a total surface area of approximately 105 square meters.",
            "The opera house features six main and secondary stages that can be moved and configured to allow for extremely complex productions.",
            "The facade's windows offer a panoramic view of the harbor and are made of a special, extremely clear glass produced in Germany.",
            "The exterior and foyer lighting was designed by artist Olafur Eliasson, creating a fascinating play of lights during the night."
        ]
    },
    "land-louisiana-museum": {
        "desc": "The Louisiana Museum of Modern Art, located north of Copenhagen on the coast of the Øresund strait, is considered one of the most beautiful museums in the world due to its perfect interaction with nature. The museum building is a masterful example of Danish modernist architecture, with glass corridors that wind through parks and offer shimmering views of the sea. The permanent collection includes works of international importance by artists such as Picasso, Giacometti, and Yayoi Kusama, alongside numerous provocative temporary exhibitions. The sculpture park surrounding the museum allows visitors to admire art in the open air, among ancient trees and green slopes that lead down to the beach. Louisiana is not just a cultural destination, but a complete sensory experience that combines art, architecture, and the marine landscape in an unforgettable way.",
        "facts": [
            "The museum's name does not come from the American state, but from the three wives of the first owner of the estate, all named Louise.",
            "Louisiana houses one of the world's largest collections of sculptures by Alberto Giacometti, displayed in a special hall overlooking a small lake.",
            "The museum is open late during the week, offering a magical atmosphere when the sculptures and park are illuminated under the starry sky.",
            "The 'Gleaming Lights of the Souls' installation by Yayoi Kusama is one of the most popular permanent attractions, offering an infinite experience of mirrors and lights.",
            "Louisiana has its own publishing house and produces a renowned art magazine as well as a video platform featuring interviews with contemporary artists."
        ]
    },
    "land-aros-aarhus-art-museum": {
        "desc": "ARoS Art Museum in Aarhus is one of the largest and most visited art museums in Northern Europe, serving as a symbol of the city's creativity. The building itself is an architectural masterpiece, but the element that made it world-famous is 'Your Rainbow Panorama' by Olafur Eliasson – a circular glass walkway in all the colors of the spectrum situated on the roof. Walking through this suspended rainbow, visitors can see the entire city of Aarhus through every hue, living a unique visual experience. Inside, the museum houses impressive collections spanning from the 'Golden Age' of Danish painting to monumental contemporary installations like the giant 'Boy' sculpture by Ron Mueck. ARoS successfully transforms a museum visit into an interactive adventure, constantly challenging the public's perception and imagination.",
        "facts": [
            "The 'Boy' sculpture stands 4.5 meters tall and weighs 500 kilograms, made with stunning realism from fiberglass and silicone.",
            "The museum's architectural concept is inspired by Dante's 'Divine Comedy,' with the basement representing hell and the rooftop rainbow representing heaven.",
            "The rainbow walkway has a diameter of 52 meters and is supported by steel columns ingeniously hidden within the building's structure.",
            "ARoS features a department dedicated exclusively to digital art and immersive installations called 'The Nine Spaces,' located on the lower levels.",
            "The museum frequently organizes 'ARoS After Dark' evening events where art is combined with DJ music and cocktails in a relaxed atmosphere."
        ]
    },
    "land-blue-planet": {
        "desc": "The Blue Planet (Den Blå Planet) is the largest and most modern aquarium in Northern Europe, spectacularly located on the Copenhagen coast near Kastrup Airport. The building's architecture is inspired by the shape of a whirlpool, covered with aluminum panels that reflect the sky and sea, offering a futuristic and organic look. Inside, visitors are taken on a fascinating journey through various aquatic ecosystems, from tropical coral reefs to the cold waters of the Faroe Islands. The main attraction is the glass tunnel through which you pass under a massive tank with sharks and rays, offering the immersive feeling of being under the ocean. The Blue Planet places a special emphasis on education and conservation, making it an ideal destination for families and all those curious to discover the wonders of the underwater world.",
        "facts": [
            "The aquarium is home to over 20,000 animals from 450 different species, living in approximately 7 million liters of water.",
            "The building's whirlpool shape is clearly visible from airplanes taking off or landing at the nearby Copenhagen Airport.",
            "The aluminum panels covering the facade number over 33,000 and were individually mounted to create the complex curves.",
            "The Ocean Tank has a huge glass window, 16 centimeters thick, designed to withstand the immense pressure of the water.",
            "The Blue Planet uses a sophisticated system to filter seawater directly from the Øresund strait to reduce the consumption of fresh water."
        ]
    },
    "land-lego-house": {
        "desc": "LEGO House, also known as 'Home of the Brick,' is a unique interactive experience located in Billund, the birthplace of the famous LEGO brand. The building, designed by renowned architect Bjarke Ingels, looks like a gigantic structure made of 21 stacked LEGO blocks, featuring colorful play terraces on the roof. Inside, visitors can explore various colored 'Experience Zones,' each focused on a specific side of learning through play: creativity, logic, emotion, and social skills. Among the monumental attractions are the 'Tree of Creativity,' one of the largest LEGO structures ever built, and an impressive gallery featuring fan-made models. LEGO House is more than a museum; it is a center of innovation where fans of all ages are invited to build, experiment, and let their imaginations fly.",
        "facts": [
            "The Tree of Creativity at the center of the building is over 15 meters tall and was built from over 6.3 million standard LEGO bricks.",
            "In the basement of LEGO House is a historical collection showing almost every LEGO set ever produced, offering a huge dose of nostalgia.",
            "The on-site restaurant, Mini Chef, uses robots to serve food, and customers 'order' their meal by building a small model from bricks.",
            "Every visitor receives a unique combination of six red LEGO bricks and a plastic card showing one of 915 million assembly possibilities at the end of their visit.",
            "On the roof of the building, there is a gigantic LEGO brick called the 'Keystone,' which has the exact dimensions of a real piece but at a much larger scale."
        ]
    },
    "land-statens-museum-for-kunst": {
        "desc": "Statens Museum for Kunst (SMK) is the national gallery of Denmark and the largest art museum in the country, housing impressive collections spanning seven centuries. Located in a beautiful park in central Copenhagen, the museum combines a monumental historic building with a modern glass and steel extension, linked by an aerial walkway. The collection includes masterpieces of the European Renaissance, the art of the Danish 'Golden Age', and a vast section dedicated to modern and contemporary art. Visitors can admire works by Matisse, Picasso, and Rembrandt, alongside fundamental pieces by Danish artists like Hammershøi or Eckersberg. The museum is an open and dynamic space, offering creative workshops, concerts, and debates, serving as the nation's cultural heart where the past and present of art meet in a continuous dialogue.",
        "facts": [
            "The museum holds the largest collection of works by Henri Matisse outside of France, thanks to generous donations made in the last century.",
            "Pieces from the royal art collection, started by Danish kings in the 16th century, form the core of this museum's heritage.",
            "SMK has digitized a large part of its collection, offering free online access to high-resolution images of thousands of artworks.",
            "The museum's garden houses monumental sculptures and is a favorite spot for locals for picnics and relaxation during the summer.",
            "The old and new buildings are separated by a glass-covered 'Sculpture Street' that serves as an exhibition and transit space."
        ]
    },
    "land-viking-ship-museum": {
        "desc": "The Viking Ship Museum in Roskilde offers a fascinating insight into the world of legendary Norse seafarers, being built around five original ships discovered in the nearby fjord. These ships, known as the Skuldelev ships, were intentionally sunk in the 11th century to protect the city from maritime attacks, and were recovered and restored with amazing precision. The museum is not just an exhibition space, but also an active center for experimental archaeology where craftsmen rebuild Viking ships using traditional tools and techniques. Visitors can observe the construction process at the museum's shipyard and, during the summer, have the opportunity to sail on the fjord in faithful replicas of these vessels. It is a place where history comes to life, allowing us to understand the engineering genius and courage that enabled the Vikings to explore the world's oceans.",
        "facts": [
            "The five Skuldelev ships represent different types of vessels, from long warships to massive merchant ships.",
            "The longest ship in the museum, Skuldelev 2, was originally built in Dublin, demonstrating the vast links of the Viking empire.",
            "The museum built an exact replica of the Skuldelev 2 ship, called 'Sea Stallion from Glendalough', which successfully sailed from Denmark to Ireland.",
            "The architecture of the building that houses the original ships is a remarkable example of Danish brutalism, offering a panoramic view of the fjord.",
            "In the museum's workshops, visitors can learn old Viking crafts such as iron forging, rope making, or wood carving."
        ]
    },
    "port-copenhagen": {
        "desc": "The Port of Copenhagen is Denmark's historic maritime gateway and one of the most active and modern transport hubs in the Baltic Sea region. Over the centuries, the port has shaped the development of the capital, transforming from a medieval trading outpost into a world-class logistics and cruise hub. Today, the port areas are undergoing spectacular urban regeneration, with old docks being replaced by luxury residential neighborhoods, innovative offices, and cultural spaces such as the Opera or the Royal Library. The port is famous for the cleanliness of its waters, being one of the few large cities in the world where residents can swim directly in specially arranged harbor baths. This symbiosis between industrial activity, passenger transport, and urban quality of life makes the Port of Copenhagen a model of sustainable development for the cities of the future.",
        "facts": [
            "The Port of Copenhagen is managed jointly with the Swedish port of Malmö under the entity Copenhagen Malmö Port (CMP).",
            "Every year, the cruise terminals in Copenhagen receive hundreds of ships and nearly a million tourists from all over the world.",
            "Many of the artificial islands that form the port were created using soil excavated during the construction of the city's metro network.",
            "Water buses (havnebusserne) are an integral part of the public transport system, offering a fast and scenic route along the water.",
            "The port also includes the fortified Kastellet area, one of the best-preserved star-shaped fortresses in Northern Europe."
        ]
    },
    "port-aarhus": {
        "desc": "The Port of Aarhus is the largest container port in Denmark, playing a crucial role in the national economy as the main hub for international trade. Strategically located on the east coast of Jutland, the port handles over half of the country's container traffic, connecting Denmark to the rest of the world via major maritime routes. In addition to massive industrial areas, the Port of Aarhus is undergoing an ambitious urban transformation in the Aarhus Ø area, where old docks have become the site of some of the boldest architectural projects in Denmark, such as the 'Iceberg' building. This modern area combines traditional port activities with contemporary housing, restaurants, and vibrant public spaces. The port remains a growth engine for the city, demonstrating how the maritime industry can coexist harmoniously with a modern and dynamic urban life.",
        "facts": [
            "The Port of Aarhus is one of the few in Denmark that can receive the largest container ships in the world (Triple-E class).",
            "The Aarhus Ø area houses 'Isbjerget' (The Iceberg), an internationally award-winning residential building for its design mimicking floating ice blocks.",
            "The port features specialized terminals for oil, grain, coal, and roll-on/roll-off cargo, being an extremely versatile logistics center.",
            "Aarhus is also an important destination for cruise ships, with the terminal located very close to the historic city center.",
            "The port's expansion plans include creating new land areas by dredging the seabed to support the growth in cargo volume."
        ]
    },
    "port-esbjerg": {
        "desc": "The Port of Esbjerg is the central hub for offshore energy in Denmark and one of the world's most important ports for the marine wind industry. Originally founded in 1868 as an agricultural export gateway to Great Britain, the port has continuously adapted, becoming the primary base for oil and gas exploration, and now for the transition to green energy. Located at the edge of the Wadden Sea, the port manages complex logistics for the installation of giant wind farms in the North Sea. In addition to the energy component, Esbjerg maintains significant activity in roll-on/roll-off (Ro-Ro) transport and in the industrial fishing sector. It is a place where the scale of industrial activities is truly impressive, reflecting Denmark's leading position in maritime and ecological technologies.",
        "facts": [
            "Over 80% of the offshore wind capacity installed in Europe has been managed or has transited through the Port of Esbjerg at some point.",
            "The port is a vital point for the transport of vehicles and heavy goods to Great Britain and other markets in Northern Europe.",
            "The ferry terminal in the port provides a constant link to the island of Fanø, a short trip of just 12 minutes through the protected waters of the Wadden Sea.",
            "Esbjerg was the only port built by the Danish state from scratch, in response to the loss of the Altona port in the war with Prussia in 1864.",
            "The port area houses ship repair yards capable of modernizing oil platforms and large support vessels."
        ]
    },
    "port-frederikshavn": {
        "desc": "The Port of Frederikshavn is a strategic maritime hub located at the northern tip of Denmark, serving as the main ferry connection point with Sweden (Gothenburg) and Norway (Oslo). The port has a long history as a naval base and fishing center but has recently transformed into a modern and versatile port focused on maritime services and ship recycling. With a privileged geographic position at the entrance to the Baltic Sea, Frederikshavn offers shelter and services for thousands of ships transiting the region each year. The port is the economic heart of the city, supporting prestigious shipyards and a growing logistics industry. Its atmosphere is one of intense activity, where giant ferries, cargo ships, and pleasure yachts meet in a typical Nordic maritime landscape.",
        "facts": [
            "The Port of Frederikshavn recently completed a massive expansion, adding new deep berths and large areas for offshore and logistics activities.",
            "It is one of the few ports in the world that houses specialized facilities for the environmentally friendly dismantling and recycling of offshore platforms and large ships.",
            "The ferries departing from here are among the largest in the world, simultaneously carrying thousands of passengers, cars, and heavy trucks.",
            "The port has a direct rail connection to the national network, allowing for the rapid transfer of goods from sea to rail.",
            "The port area includes the Powder Tower (Krudttårnet), a relic of the fortifications that protected the port in the 17th century."
        ]
    },
    "ind-carlsberg-brewery": {
        "desc": "Carlsberg Brewery is perhaps Denmark's most famous export product, and the old brewery in Copenhagen's Valby district is a monument dedicated to industrial history and innovation. Founded by J.C. Jacobsen in 1847, the brewery not only produced quality beer but was also the place where fundamental scientific discoveries were made, such as the purification of brewer's yeast. Today, the Carlsberg district is undergoing a major urban transformation, with old red-brick buildings and imposing gates being integrated into new residential spaces, offices, and parks. Visitors can explore the 'Home of Carlsberg' experience center, which presents the history of the Jacobsen family, the brewing process, and an impressive collection of beer bottles from around the world. It is a place where industrial tradition intertwines with modern design, reflecting the entrepreneurial spirit that put Denmark on the world map.",
        "facts": [
            "The Carlsberg Laboratory, founded in 1875, is where the pH scale was invented, which is used worldwide in chemistry and biology today.",
            "The Elephant Gate at the entrance to the old factory is an iconic structure supported by four life-sized elephants carved in granite.",
            "J.C. Jacobsen was a great patron of the arts, using the brewery's profits to fund the reconstruction of Frederiksborg Castle and other monuments.",
            "The Carlsberg Foundation still owns the majority of the company's shares today, directing profits toward scientific research and culture.",
            "The brewery holds the world's largest collection of unopened beer bottles, numbering over 22,000 different specimens."
        ]
    },
    "ind-lego-factory-billund": {
        "desc": "The LEGO Factory in Billund is the heart of the world production of the world's most famous toy, where billions of plastic bricks are molded with incredible precision every year. Although access to the interior of the production facilities is extremely limited for the public, the Billund industrial zone reflects the phenomenal success of the company founded by Ole Kirk Christiansen. The manufacturing process is almost entirely automated, with sophisticated robots transporting boxes full of pieces through gigantic warehouses without human intervention. Quality is so strictly controlled that only a few pieces in every million are considered defective, ensuring perfect compatibility between today's sets and those from 50 years ago. The factory represents not just a production center, but a symbol of innovation, precision, and work culture that defines Denmark's global success.",
        "facts": [
            "The molds used in the LEGO factory are so precise that the accepted error is a maximum of 0.002 millimeters.",
            "The name LEGO comes from the Danish words 'Leg Godt,' which means 'play well,' a motto kept for over 90 years.",
            "The Billund factory features a fleet of autonomous vehicles that move through warehouses on their own using laser sensors.",
            "The energy required for production is offset by the LEGO Group's massive investments in offshore wind farms in the North Sea.",
            "Every second, approximately 1,300 individual pieces are produced in LEGO factories around the world."
        ]
    },
    "hist-jelling-monuments": {
        "desc": "The Jelling Monuments are considered 'Denmark's birth certificate' and are among the most important historical sites in Scandinavia, protected by UNESCO. The site comprises two huge burial mounds, a church, and two famous rune stones erected by Viking kings Gorm the Old and Harald Bluetooth in the 10th century. The inscriptions on Harald's large stone mark the moment the Danes converted to Christianity and the unification of the kingdom under a single crown. Recently, the foundations of a massive palisade and Viking longhouses that surrounded the entire complex were discovered, demonstrating the monumental scale of royal power at that time. Visitors can explore the modern 'Kongernes Jelling' center, which uses interactive technology to bring to life the Viking Age and the fascinating story of the first Danish kings.",
        "facts": [
            "The large stone at Jelling contains the oldest representation of Jesus Christ discovered so far in Scandinavia.",
            "King Harald Bluetooth, who erected the monument, is the one from whom the name of modern Bluetooth technology comes, symbolizing connectivity.",
            "The burial mounds are over 8 meters high and were built from successive layers of turf and soil, a huge logistical effort for that time.",
            "Recently, it was discovered that the entire site was designed with amazing geometric precision, forming a perfect isosceles triangle between key points.",
            "The rune stones are now protected by special climate-controlled glass cases to prevent their erosion by rain and frost."
        ]
    },
    "hist-roskilde-cathedral": {
        "desc": "Roskilde Cathedral is the royal pantheon of Denmark and an outstanding example of early brick Gothic architecture, included in the UNESCO World Heritage list. Built in the 12th and 13th centuries, the cathedral was the first of its kind in Northern Europe, serving as a model for numerous other religious buildings in the Baltic Sea region. The interior is vast and solemn, housing the tombs of 40 Danish kings and queens, with each royal chapel reflecting the architectural style of the era in which it was built. From simple medieval tombs to elaborate baroque monuments and modern mausoleums, the cathedral tells the story of the Danish monarchy over more than 800 years. Its atmosphere charged with history, colored stained glass, and monumental organ make this cathedral the spiritual and historical heart of Denmark.",
        "facts": [
            "The cathedral was the first major Christian building in Scandinavia built entirely of brick, a technology brought by monks from southern Europe.",
            "Among the famous tombs is that of Queen Margaret I, who united Denmark, Norway, and Sweden under the Kalmar Union.",
            "The 15th-century astronomical clock inside has moving figures, including a Saint George who slays the dragon at every hour.",
            "Over the centuries, the cathedral has undergone numerous expansions, resulting in a fascinating mix of styles from Romanesque to Gothic, Baroque, and Neoclassical.",
            "Every year, the cathedral hosts world-class organ concerts using the historic instrument originally built in the 16th century."
        ]
    },
    "hist-frederiksborg-castle": {
        "desc": "Frederiksborg Castle in Hillerød is a masterpiece of the Danish Renaissance, often called the 'Versailles of the North' because of its splendor and spectacular gardens. Built by King Christian IV at the beginning of the 17th century, the castle spectacularly occupies three small islands in the middle of Lake Slotsø, offering a landscape of unreal beauty. After a devastating fire in 1859, the castle was rebuilt and transformed into the National History Museum, housing a vast collection of portraits, historical paintings, and period furniture. The castle chapel, which survived the fire, is an explosion of gilded decorations and wood carvings, being the place where the absolute kings of Denmark were crowned for centuries. Visiting the castle and its baroque gardens is a fascinating journey into the glorious history and refined aesthetics of Danish royalty.",
        "facts": [
            "The National History Museum inside the castle was established at the initiative of J.C. Jacobsen, the founder of the Carlsberg brewery.",
            "The Compenius organ in the castle chapel dates back to 1610 and is one of the oldest and best-preserved wooden organs in the world.",
            "The Knight's Hall is decorated with huge tapestries depicting the victories of King Christian IV and has an extremely detailed carved ceiling.",
            "The baroque garden was completely restored in 1996, following the original 1725 plans, including the shimmering water cascades.",
            "The castle served as a residence for the Order of the Elephant and the Order of the Dannebrog, Denmark's highest honorary distinctions."
        ]
    },
    "hist-koldinghus": {
        "desc": "Koldinghus is the last royal fortress in Jutland and a monument of crucial historical importance, with an imposing presence above the city of Kolding. Founded in the 13th century to guard the border between the Danish kingdom and the Duchy of Schleswig, the castle has witnessed numerous major historical events. In 1808, a massive fire destroyed much of the structure, leaving it in ruin for decades until a brilliant modern restoration saved the monument. The architects chose to leave the old walls visible, adding modern wooden and steel structures to support the roof, creating a spectacular visual contrast between old and new. Today, Koldinghus is a vibrant museum that houses exhibitions of fine silver, decorative art, and military history, being a symbol of Denmark's ability to honor its past through innovation.",
        "facts": [
            "The restoration of Koldinghus Castle received the Europa Nostra award in 1993 for exemplary heritage conservation.",
            "The Giant Tower (Kæmpetårnet) offers the best panoramic view of Kolding Fjord and the entire surrounding region.",
            "During the 1808 fire, locals managed to save only a few pieces of furniture, the rest of the castle burning for three days.",
            "The castle served as headquarters for Spanish troops led by Marshal Bernadotte, who later became King of Sweden.",
            "Koldinghus houses one of the richest collections of jewelry and silver objects in Denmark, showcasing the evolution of local design."
        ]
    },
    "hist-christiansfeld": {
        "desc": "Christiansfeld is a unique historic town in southern Jutland, considered the best example in Europe of a planned settlement by the Moravian Church. Founded in 1773 at the request of King Christian VII, the town impresses with its architectural harmony, featuring parallel streets and yellow brick buildings with red tile roofs. Each building was constructed with a precise purpose for the religious community, emphasizing equality, discipline, and communal life. Christiansfeld was included in the UNESCO World Heritage list in 2015 due to its exceptional integrity and atmosphere of timeless tranquility. Visitors can feel the spirit of the place in the community's large assembly hall or by walking through the 'God's Garden' cemetery, where all the crosses are identical, reflecting the belief in the equality of all people before the divine.",
        "facts": [
            "The town is famous for its honey cakes (honningkager), a traditional recipe kept for over 200 years by local bakers.",
            "The Moravian Church in the town center has one of the largest prayer halls in Denmark without supporting columns.",
            "Christiansfeld was the first town in Denmark to have modern street lighting and sidewalks, long before the capital.",
            "The town's cemetery, Gudsageren, is unique in that men and women are buried in separate sections, facing east.",
            "All the original buildings in the town center are still inhabited or used today, preserving the functionality of the settlement from two centuries ago."
        ]
    },
    "hist-dybbol-banke": {
        "desc": "Dybbøl Banke is the most important battlefield in Denmark's modern history, where in 1864 Danish troops suffered a tragic defeat against the Prussian army. This battle led to the loss of over a third of the country's territory and profoundly marked the national psyche, transforming Denmark from a regional power into a small and neutral state. Today, the site is a solemn historical park where visitors can explore trench systems, reconstructed bastions, and the Dybbøl National Monument. The 'Dybbøl Banke' history center offers an immersive experience, using soldiers' accounts and live demonstrations to explain the context and dramatic consequences of the conflict. The Dybbøl Mill, located on the hill, has become a national symbol of resilience and hope, having been rebuilt several times after being destroyed during the fighting.",
        "facts": [
            "The Battle of Dybbøl was one of the first European conflicts where rifled-barrel artillery was used, causing massive casualties.",
            "Every year on April 18th, a commemoration ceremony takes place with representatives from both Denmark and Germany.",
            "The Dybbøl Mill is considered the most important national symbol of southern Jutland and Danish unity.",
            "Recent archaeological excavations on the battlefield have uncovered thousands of soldiers' personal items, from buttons to pipes and letters.",
            "The defeat at Dybbøl generated the movement 'what was lost outwardly must be gained inwardly,' leading to the development of internal agriculture and culture."
        ]
    },
    "hist-trelleborg-viking-fortress": {
        "desc": "Trelleborg is one of five Viking ring fortresses discovered in Denmark, providing clear evidence of the power and military organization of King Harald Bluetooth. Located in the west of Zealand, the fortress impresses with its stunning geometric precision: a perfect circle with four gates oriented exactly toward the cardinal points. Massive moats and the foundations of reconstructed wooden longhouses allow visitors to visualize the life of Viking soldiers and their families over a thousand years ago. The site includes a museum with valuable archaeological finds, from weapons to household tools, and a reconstituted Viking village where craft demonstrations take place during the summer. Trelleborg is an essential UNESCO monument for understanding how Viking kings unified Denmark and created a strong centralized state.",
        "facts": [
            "The fortress was built around 980 AD and was used for only a short period, approximately 10-15 years.",
            "The oldest and only complete Viking shield found in Denmark was discovered in the wet ditches at Trelleborg.",
            "The longhouses inside the fortress had curved walls, resembling the shape of an inverted Viking ship.",
            "Recent research suggests that the fortress was not just military, but also served as an administrative center and symbol of royal authority.",
            "Every year in July, Trelleborg hosts one of the largest Viking festivals in the world, with hundreds of participants in period costumes."
        ]
    },
    "hist-egeskov-castle": {
        "desc": "Egeskov Castle, located in southern Funen, is considered the best-preserved Renaissance water castle in Europe, being a true architectural gem. Built in 1554 in the middle of a lake on thousands of oak piles, the castle was originally designed as a defensive fortress during a period of civil unrest. Today, Egeskov is famous not only for its architecture with towers and battlements, but also for its superb, internationally award-winning gardens, which include hedge mazes and playgrounds. Within the estate, visitors can explore fascinating museums of vintage cars, motorcycles, and old toys, as well as the spectacular 'Titania's Palace' dollhouse. Egeskov is a complete destination where noble history, passion for technology, and the beauty of the landscape combine to create a memorable experience for all generations.",
        "facts": [
            "Legend has it that an entire oak forest was needed for the castle's foundation, from which the name 'Egeskov' (oak forest) originates.",
            "In the castle's attic lies a wooden figurine called 'The Wooden Boy'; it is said that if he is moved from his place, the castle will sink into the lake on Christmas night.",
            "The fuchsia garden at Egeskov is one of the largest in Europe, housing over 800 different varieties of this flower.",
            "The castle is still inhabited today by the noble Ahlefeldt-Laurvig-Bille family, but much of the building and grounds are open to the public.",
            "The beech maze at Egeskov, designed by artist Piet Hein, offers a fun challenge for visitors trying to find the center."
        ]
    },
    "nat-bornholm": {
        "desc": "Bornholm, nicknamed the 'Sunshine Island', is a unique destination in Denmark, located in the middle of the Baltic Sea, much closer to Sweden and Poland than to the rest of the country. The island is distinguished by its dramatic geography, being the only place in Denmark where granite comes to the surface, creating spectacular rocky coasts in the north and beaches with the finest white sand in the south. Bornholm is famous for its white medieval round churches, the imposing ruins of Hammershus fortress, and its picturesque small port towns with traditional fish smokehouses. The island's atmosphere is one of absolute calm, inviting hiking on coastal paths, cycling through dense forests, or exploring artisanal glass and pottery workshops. It is a gastronomic and natural paradise that offers a different and fascinating perspective on the Nordic spirit.",
        "facts": [
            "The sand on Dueodde beach in the south of the island is so fine that in the past it was used for hourglasses and to dry ink on documents.",
            "Hammershus, situated on a high cliff, is the largest medieval fortress ruin in Northern Europe.",
            "The island has a special microclimate, being the place in Denmark with the most sunshine hours per year and where figs and mulberries can grow outdoors.",
            "The fish smokehouses on Bornholm, recognized by their large white chimneys, produce the famous 'Sun over Gudhjem,' a dish made of smoked herring.",
            "Bornholm is the first place in the world to be declared a 'World Region of Crafts' due to the exceptional quality of local glass and ceramics."
        ]
    },
    "nat-rabjerg-mile": {
        "desc": "Råbjerg Mile is a spectacular natural phenomenon located in northern Jutland, being the largest migrating sand dune in Denmark and one of the largest in Europe. This huge mass of sand, covering about one square kilometer, moves slowly under the influence of strong westerly winds, traveling an average of 15 meters per year toward the northeast. The landscape is lunar and overwhelming, offering the sensation of an authentic desert at the gates of Scandinavia. From the top of the dune, visitors can admire an incredible panorama encompassing both the North Sea and the Baltic Sea on clear days. Protected as a natural monument, Råbjerg Mile is living proof of the forces of nature that continually shape the Danish coast, offering a unique hiking experience among waves of fine sand.",
        "facts": [
            "The dune contains approximately 3.5 million cubic meters of sand and reaches a height of over 40 meters above sea level.",
            "In its path, the dune swallows everything in its way, including vegetation and roads, leaving behind a thin, wet layer of sand on the former ground.",
            "It is estimated that in about 100-200 years the dune will reach the main road leading to the town of Skagen and then empty into the sea.",
            "Unlike other dunes in Denmark, Råbjerg Mile has not been planted with vegetation, precisely to allow it to migrate freely as a natural monument.",
            "The sand here is so pure and fine that it has been studied to understand the geological processes of dune formation on other planets."
        ]
    },
    "nat-skagen": {
        "desc": "Skagen is the northernmost point of Denmark, a magical place where the waters of the North Sea (Skagerrak) meet those of the Baltic Sea (Kattegat) at the famous Grenen sandbar. The town and its surroundings are renowned for their special, very bright light, which in the 19th century attracted a famous colony of artists known as the 'Skagen Painters'. The landscape is marked by endless beaches, wild dunes, and picturesque yellow houses with red tile roofs and white-edged gables. Visitors can experience the force of nature standing with one foot in each sea or exploring the sand-buried church (Den Tilsandede Kirke), of which only the tower remains. Skagen combines the elegance of a historic luxury resort with the harshness and pure beauty of Nordic nature, being one of the most beloved holiday destinations in Denmark.",
        "facts": [
            "At Grenen, the current is so strong at the meeting point of the two seas that swimming is strictly prohibited, though visitors can dip their feet in the water.",
            "Many of the famous paintings created here can be admired at the Skagens Museum, which preserves the bohemian atmosphere of the artist colony.",
            "St. Lawrence Church was abandoned in 1795 after wind-blown sand covered it almost completely, leaving only the white tower visible.",
            "Skagen is one of the most important places in Europe for observing migratory birds, especially birds of prey, during the spring.",
            "The Grey Lighthouse (Det Grå Fyr) in Skagen is the second tallest lighthouse in Denmark and offers a breathtaking view over the two seas."
        ]
    },
    "nat-mons-klint": {
        "desc": "Møns Klint represents one of the most dramatic and spectacular natural views in Denmark, consisting of snow-white chalk cliffs that rise vertically up to 128 meters above the shimmering Baltic Sea. Located on the island of Møn, these impressive cliffs were formed millions of years ago from the remains of microscopic sea creatures and were raised to the surface by the force of glaciers during the ice age. The contrast between the dazzling white of the cliffs, the raw green of the beech forest on the peaks, and the turquoise of the water creates an almost Mediterranean landscape in the middle of the north. Visitors can descend hundreds of steps to the beach below to look for fossils or hike along the cliff edge for unforgettable panoramas. Møns Klint is a UNESCO biosphere reserve and a place of exceptional geological and biological beauty.",
        "facts": [
            "On the beach at the base of the cliffs, fossils of belemnites (devil's fingers) and sea urchins that lived 70 million years ago can be frequently found.",
            "The Klinteskoven forest, which covers the upper part of the cliffs, houses over 20 species of rare wild orchids, protected by law.",
            "Møns Klint is the favorite nesting place for the peregrine falcon, the fastest bird in the world, which can be seen diving toward the sea.",
            "Geocenter Møns Klint is an interactive museum dug directly into the cliff, explaining Denmark's geological formation through cutting-edge technology.",
            "Due to natural erosion caused by rain and waves, large chunks of chalk occasionally collapse into the sea, continuously changing the cliff's appearance."
        ]
    },
    "nat-wadden-sea": {
        "desc": "The Wadden Sea (Vadehavet) is a unique tidal ecosystem in southwestern Denmark, part of the world's largest system of tidal mudflats and sands, included in the UNESCO World Heritage. This fascinating natural area changes radically twice a day, when high and low tides transform the landscape from shimmering waters into vast plains of mud and sand full of life. The Wadden Sea is a vital stopover for millions of migratory birds that feed here on their journey between Africa and Siberia, offering an unparalleled ornithological spectacle. Visitors can participate in seal safaris, walk on the seabed at low tide, or admire the 'Black Sun' phenomenon, when thousands of starlings create mesmerizing shapes in the twilight sky. It is a place of deep silence and endless horizons, where nature dictates the rhythm of daily life.",
        "facts": [
            "Low tide exposes the seabed for miles, allowing visitors to travel by special tractors or on foot to the island of Mandø.",
            "The Wadden Sea is home to Denmark's largest seal population, which can be seen resting on sandbars at low tide.",
            "The 'Sort Sol' (Black Sun) phenomenon involves up to a million starlings flying in tight formations, blocking the sunlight before sunset.",
            "The sand and mud here are extremely rich in nutrients, feeding a huge amount of clams, snails, and worms that form the base of the ecosystem.",
            "Wadden Sea National Park is the largest national park in Denmark, stretching from the German border to the city of Esbjerg."
        ]
    },
    "nat-mollehøj": {
        "desc": "Møllehøj is officially the highest natural point in Denmark, although with an altitude of only 170.86 meters, it may seem like a gentle hill rather than a mountain in the traditional sense. Located in the Ejer Bjerge region of Central Jutland, this place offers a clear perspective over the Danish relief dominated by glacial moraines and fertile agricultural lands. Although it was long in the shadow of the neighboring Ejer Bavnehøj hill, modern precision measurements confirmed its status as the country's peak in 2005. Visitors can reach the summit through an easy walk, being rewarded with a panoramic view over the Danish countryside, with its tidy farms and picturesque villages. Møllehøj is a symbolic place that reflects the modesty and quiet beauty of Danish geography, being an essential stop for those who want to say they have conquered the 'peak' of Denmark.",
        "facts": [
            "The height difference between Møllehøj and the former record holder, Ejer Bavnehøj, is only a few centimeters.",
            "The name of the point comes from a windmill (mølle) that stood on this hill from 1838 to 1917, when it was destroyed.",
            "The original millstone is still preserved at the summit as a monument marking the highest natural point of the kingdom.",
            "The Ejer Bjerge area, where Møllehøj is located, was formed by glacier movements during the last ice age, about 15,000 years ago.",
            "From the observation platform at Ejer Bavnehøj, located only 200 meters away, one can see as far as the Great Belt bridge on clear days."
        ]
    },
    "nat-himmelbjerget": {
        "desc": "Himmelbjerget, which translates as 'Sky Mountain', is one of the most iconic and beloved viewpoints in Denmark, rising 147 meters above the lakes surrounding the city of Silkeborg. Although it is not the highest point in the country, it is certainly the most spectacular due to its steep slope that descends directly toward Lake Julsø, offering the sensation of a much greater height. At the top of the hill is a 25-meter-high red brick tower, erected in the 19th century in honor of King Frederik VII and the Danish constitution. The site has major historical importance, being the scene of large popular gatherings that laid the foundations of Danish democracy and national movements. Today, Himmelbjerget is a popular destination for families, hikers, and tourists arriving by steamboats on the lake, being a symbol of the communion between nature and civic freedom.",
        "facts": [
            "Until 1847, Himmelbjerget was erroneously considered the highest point in Denmark due to its prominent visibility.",
            "The tower on the summit was built by public subscription, demonstrating the deep attachment of the Danish people to this place.",
            "The historic steamboat 'Hjejlen' regularly brings tourists from Silkeborg to the base of Himmelbjerget hill since 1861.",
            "There are several monuments on the hill dedicated to figures who fought for women's rights and universal suffrage in Denmark.",
            "The forests surrounding the hill are part of one of the largest continuous forest areas in the country, full of hiking trails."
        ]
    },
    "nat-arreso": {
        "desc": "Arresø is the largest lake in Denmark by area, located in the north of Zealand, offering a landscape of unique tranquility and beauty. With a surface of almost 40 square kilometers, the lake was originally a fjord connected to the sea, but was separated from it several thousand years ago due to soil uplift and sand deposits. Today, Arresø is a vital habitat for numerous bird species and a favorite destination for nature watchers and small-boat sailing enthusiasts. Its shores are dotted with extensive reed beds, forests, and historic sites, such as the medieval castle near the town of Frederiksværk. The lake provides an ideal setting for long walks on marked trails or for admiring the spectacular sunsets reflected in its vast and calm waters.",
        "facts": [
            "The canal connecting Arresø to the Roskilde Fjord was dug manually by soldiers and prisoners in the 18th century to control flooding.",
            "The lake is included in the Natura 2000 network, being an extremely important nesting and stopover site for eagles and other rare birds of prey.",
            "The average depth of Lake Arresø is surprisingly shallow, only 3 meters, although it is the country's largest lake.",
            "Maglehøj hill, located near the shore, offers the best panoramic view over the entire surface of the lake.",
            "Navigation on the lake is allowed only with ecological boats or sails, to protect the fragile ecosystem and the birds' peace."
        ]
    },
    "nat-fureso": {
        "desc": "Furesø is the deepest lake in Denmark and a top recreational destination located just a few kilometers from Copenhagen in northern Zealand. The lake is renowned for its unusually clear waters and its varied shores, which include sandy beaches, wooded areas, and steep cliffs. It is a favorite spot for locals for swimming, sailing, and rowing during the summer, offering several specially arranged swimming areas, such as the famous Furesøbad. A vast natural park stretches around the lake, with hiking and cycling trails that wind through ancient beech forests and offer shimmering views toward the water. Furesø represents an oasis of pure nature on the edge of the metropolis, being a perfect example of how Danes successfully integrate outdoor activities into daily life.",
        "facts": [
            "Furesø reaches a maximum depth of 37.7 meters, formed in a deep pit dug by glaciers during the ice age.",
            "The water quality is so good that the lake houses rare species of fish and underwater plants that have disappeared from other Danish lakes.",
            "During extremely frosty winters, the lake freezes completely, becoming a popular spot for skating and ice walks.",
            "The passenger boat 'Baadfarten' has operated on the lake for over 120 years, linking various towns on its shores through a scenic route.",
            "The lake area was a source of inspiration for many Danish romantic painters, who captured its unique light in famous paintings."
        ]
    },
    "nat-gudenaen": {
        "desc": "Gudenå is the longest river in Denmark, winding for approximately 160 kilometers through the heart of Jutland, from its headwaters in Tinnet Krat to its mouth in Randers Fjord. The river crosses the lake district in the center of the country, forming a spectacular natural corridor that links forests, plains, and historic cities like Silkeborg and Randers. Gudenå is a paradise for canoe and kayak enthusiasts, being the most popular recreational sailing route in Denmark, where travelers can float for days among virgin natural landscapes. Along its banks are numerous campsites, historic inns, and points of cultural interest, such as the old barge pullers' paths. The river is not just a major natural resource, but also a symbol of the spirit of adventure and the Danes' love for the outdoors.",
        "facts": [
            "Gudenå was for centuries a vital trade artery, with goods transported on large barges pulled by horses or humans along the banks.",
            "The river houses a significant population of salmon and trout, being one of the best sport fishing destinations in Scandinavia.",
            "At the river's headwaters is the only area in Denmark where two major rivers (Gudenå and Skjern Å) originate just a few hundred meters apart.",
            "In the 19th century, the river's energy was used to power numerous paper mills and factories, laying the foundations for the region's industrialization.",
            "There is an annual tradition called the 'Gudenå Regatta,' which is one of the world's longest and most difficult canoe marathon competitions."
        ]
    },
    "nat-skern-aa": {
        "desc": "Skjern Å is the river with the highest volume of water in Denmark and the scene of the most ambitious nature restoration project in Northern Europe. In the '60s, the river was artificially straightened to gain agricultural land, but this led to an ecological disaster, so in the early 2000s its natural course and meanders were completely restored. Today, the Skjern Å river valley is a massive and wild wetland, a paradise for birds, otters, and the famous Skjern salmon, which returns here to spawn. Visitors can explore the area using spectacular suspension bridges or cross the river with small hand-operated ferries, living an authentic experience in nature. Skjern Å is living proof that humans can repair the mistakes of the past and give nature the space it needs to flourish in all its splendor.",
        "facts": [
            "The restoration project of the Skjern Å river cost over 250 million Danish kroner and involved moving millions of cubic meters of earth.",
            "The Skjern salmon is a unique species, genetically different from other salmon, and can reach impressive sizes of over 20 kilograms.",
            "The river's delta at its mouth in the Ringkøbing Fjord is a crucial stopover for thousands of wild geese and other migratory birds during winter.",
            "Two ferries operated by pulling a rope allow tourists to cross the river for free, offering a novel adventure for children and adults alike.",
            "Observation towers scattered along the valley offer excellent viewpoints to admire the vast and varied landscape of the wetlands."
        ]
    },
    "nat-aero": {
        "desc": "Ærø is one of the most picturesque and authentic islands in Denmark, located in the South Funen archipelago, often described as an open-air museum of Danish rural life. The island is famous for its main town, Ærøskøbing, with cobbled streets and 18th-century houses, which has received numerous awards for its exemplary preservation. The island's landscape consists of rolling hills, traditional farms, and a varied coast with colorful beach huts that have become a symbol of seaside relaxation. Ærø has become a global leader in renewable energy, producing more green energy than it consumes, thanks to its own wind turbines and solar panels. Visiting Ærø island is a journey back in time, at a slow and quiet pace, where local hospitality and the beauty of the maritime landscape create an atmosphere of pure 'hygge'.",
        "facts": [
            "Ærøskøbing is nicknamed the 'fairytale town' of Denmark due to its perfectly preserved architecture for over 250 years.",
            "The island houses 'Ellen,' one of the world's most powerful fully electric ferries, connecting the island to the mainland without emissions.",
            "Ærø is an extremely popular international destination for weddings, with over 2,000 couples from around the world choosing to marry here annually.",
            "Skjoldnæs Lighthouse, located at the northern tip of the island, is built of granite and offers a spectacular view toward the coast of Germany.",
            "The island's name literally translates to 'Maple Island,' although today it is more known for its orchards and organic agriculture."
        ]
    },
    "nat-gribskov": {
        "desc": "Gribskov is one of the largest and oldest forests in Denmark, located in northern Zealand and forming part of the UNESCO-listed 'Par force hunting landscape'. The forest is a fascinating mosaic of centuries-old beeches and oaks, wetlands, hidden lakes, and open clearings, offering an ideal habitat for deer, eagles, and numerous rare plant species. For centuries, Gribskov was the favorite hunting ground of Danish kings, their footprint still visible today in the system of straight roads designed for hunting on horseback. For the residents of Copenhagen, the forest represents the perfect retreat into nature, offering hundreds of kilometers of trails for hiking, cycling, and horseback riding. The atmosphere in Gribskov is one of controlled wilderness, where the deep silence is interrupted only by the sounds of the forest, providing a deep connection with the natural environment in any season.",
        "facts": [
            "Gribskov houses one of the largest free-ranging populations of fallow deer in Denmark, which can be frequently seen in quiet areas.",
            "Lake Esrum, located at the edge of the forest, is the second-largest lake in Denmark and is famous for the purity of its water.",
            "The forest contains numerous prehistoric monuments, including dolmens and tumuli that attest to human presence for over 5,000 years.",
            "The 'par force' road system was specially designed so the king could follow the hunt from a central point where all paths intersected.",
            "In Gribskov is also 'Saint Helen's Spring,' a place about which legend says it has healing powers, being a place of pilgrimage in the past."
        ]
    }
}

for poi_id, data in poi_data.items():
    # Update factsAdvanced.en
    if "facts" in data:
        # Match factsAdvanced for this ID
        pattern = rf'(id:\s*"{poi_id}".*?factsAdvanced:\s*\{{.*?en:\s*\[)([^\]]*?)(\])'
        
        def replace_facts(match):
            indent = "      "
            new_facts = ",\n".join([f'{indent}"{f}"' for f in data["facts"]])
            return f'{match.group(1)}\n{new_facts}\n    {match.group(3)}'
            
        content = re.sub(pattern, replace_facts, content, flags=re.DOTALL)

    # Update descriptionAdvanced.en
    if "desc" in data:
        pattern = rf'(id:\s*"{poi_id}".*?descriptionAdvanced:\s*\{{.*?en:\s*")([^"]*)(")'
        
        def replace_desc(match):
            return f'{match.group(1)}{data["desc"]}{match.group(3)}'
            
        content = re.sub(pattern, replace_desc, content, flags=re.DOTALL)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print(f"Updated {len(poi_data)} POIs.")
