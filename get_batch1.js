const fs = require('fs');

const data = {
  "lang": "en",
  "country": "usa",
  "files": [
    "lib/visualLab/data/poiExtraUsaCitiesV2.ts",
    "lib/visualLab/data/poiExtraUsaEconomicV2.ts",
    "lib/visualLab/data/poiExtraUsaHistoryV2.ts",
    "lib/visualLab/data/poiExtraUsaLandmarksV2.ts",
    "lib/visualLab/data/poiExtraUsaLifeV2.ts",
    "lib/visualLab/data/poiExtraUsaNatureV2.ts",
    "lib/visualLab/data/poiExtraUsaReliefV2.ts"
  ],
  "items": [
    {
      "id": "new-york-city-cities-v2",
      "descriptionAdvanced": "New York City, affectionately known as the Big Apple, is the most populous city in the United States, serving as a global hub for finance, culture, and media. Situated at the mouth of the Hudson River, it is divided into five distinct boroughs: Manhattan, Brooklyn, Queens, The Bronx, and Staten Island. The city's skyline is defined by iconic skyscrapers such as the Empire State Building and One World Trade Center, reflecting its historical prominence in architectural innovation. With over 800 languages spoken, it is considered the most linguistically diverse city in the world. Its dense transit system, anchored by the New York City Subway, operates 24/7, keeping the metropolis constantly in motion. This topic connects with Geography K7, focusing on urban development and population density.",
      "factsAdvanced": [
        "New York City was originally named New Amsterdam by Dutch settlers in 1624.",
        "The New York City Subway system has 472 stations, making it the largest in the world by number of stations.",
        "Central Park spans 843 acres, making it larger than the principality of Monaco.",
        "Over 800 languages are estimated to be spoken in the city, the highest linguistic diversity globally.",
        "The Empire State Building stands at 1,454 feet tall, including its antenna.",
        "The Federal Reserve Bank of New York holds the largest known gold reserve in the world."
      ]
    },
    {
      "id": "los-angeles-cities-v2",
      "descriptionAdvanced": "Los Angeles is the cultural and entertainment capital of the West Coast, sprawling across a diverse basin surrounded by the San Gabriel Mountains and the Pacific Ocean. Famous for being the heart of the global film and television industry, Hollywood attracts aspiring artists from around the world. The city's geography is unique, featuring extensive fault lines and a Mediterranean climate that fosters year-round sunshine. Its urban layout is deeply car-centric, characterized by a vast network of freeways connecting distinct neighborhoods from Santa Monica to Downtown LA. As a major economic powerhouse, the Port of Los Angeles is the busiest container port in the Americas. This topic is tied to Geography K8, studying economic hubs and Mediterranean climates.",
      "factsAdvanced": [
        "Los Angeles was founded on September 4, 1781, by Spanish governor Felipe de Neve.",
        "The Hollywood Sign originally read 'Hollywoodland' when it was erected in 1923.",
        "The city covers a land area of roughly 469 square miles.",
        "The Port of Los Angeles handles over 9 million twenty-foot equivalent units (TEUs) annually.",
        "Griffith Observatory opened in 1935 and remains a free public facility for astronomy.",
        "Los Angeles hosted the Summer Olympic Games in 1932 and 1984."
      ]
    },
    {
      "id": "chicago-cities-v2",
      "descriptionAdvanced": "Chicago, known as the Windy City, is an architectural powerhouse nestled on the southwestern shores of Lake Michigan. It historically served as a critical transportation and telecommunications hub connecting the eastern and western United States. Following the Great Chicago Fire of 1871, the city rebuilt itself into a modern metropolis, pioneering the construction of the world's first skyscrapers. Today, it boasts a thriving economy driven by finance, manufacturing, and technology, symbolized by the towering Willis Tower. The city is also renowned for its deep-dish pizza, jazz music heritage, and the expansive Millennium Park. This topic connects to History K7, exploring industrialization and urban reconstruction.",
      "factsAdvanced": [
        "The Home Insurance Building, built in Chicago in 1885, is considered the world's first skyscraper.",
        "The Great Chicago Fire of 1871 destroyed over 17,000 buildings but spurred massive architectural innovation.",
        "Route 66 originally started in Chicago and ended in Santa Monica, California.",
        "The Willis Tower, formerly Sears Tower, held the title of the tallest building in the world from 1974 to 1998.",
        "Chicago's O'Hare International Airport was the busiest airport in the world for several decades.",
        "The city is home to the Lincoln Park Zoo, one of the oldest zoos in North America, founded in 1868."
      ]
    },
    {
      "id": "houston-cities-v2",
      "descriptionAdvanced": "Houston is a sprawling metropolis in Southeast Texas, deeply intertwined with the global energy sector and aerospace exploration. As the fourth most populous city in the U.S., it operates without traditional zoning laws, resulting in a highly decentralized and diverse urban landscape. The city gained international fame as the home of NASA's Johnson Space Center, where Mission Control guided the historic Apollo 11 moon landing. Beyond space and oil, Houston is a medical powerhouse, housing the Texas Medical Center, the largest medical complex in the world. Its proximity to the Gulf of Mexico makes it a critical port city and a center for international trade. This aligns with Geography K8, exploring resource-based economies.",
      "factsAdvanced": [
        "Houston was founded on August 30, 1836, near the banks of Buffalo Bayou.",
        "The phrase 'Houston, we have a problem' became famous during the Apollo 13 mission in 1970.",
        "The Texas Medical Center contains 54 medicine-related institutions, covering over 1,000 acres.",
        "The Port of Houston is the largest Gulf Coast port and ranks first in U.S. waterborne tonnage.",
        "Houston has no formal zoning laws, making its urban development unique among major U.S. cities.",
        "The city spans roughly 665 square miles, making it large enough to fit several other major cities within its borders."
      ]
    },
    {
      "id": "phoenix-cities-v2",
      "descriptionAdvanced": "Phoenix, situated in the heart of the Sonoran Desert, is a rapidly expanding sunbelt city defined by its arid climate and rugged mountain backdrops. Known as the Valley of the Sun, it enjoys more than 300 days of sunshine per year, making it a major destination for tourism and retirement. The city's history is rooted in agriculture, particularly citrus and cotton, sustained by complex irrigation systems developed from ancient Hohokam canals. Today, it has transitioned into a booming technology and manufacturing hub. Despite extreme summer temperatures that frequently exceed 100 degrees Fahrenheit, innovative water management keeps the urban oasis thriving. This relates to Geography K7, studying desert climates and human adaptation.",
      "factsAdvanced": [
        "Phoenix was officially recognized as a city in 1881.",
        "The city is located within the Sonoran Desert, one of the wettest and greenest deserts in North America.",
        "Ancient Hohokam Native Americans built over 135 miles of irrigation canals in the region.",
        "Phoenix experiences an average of 330 sunny days each year.",
        "South Mountain Park and Preserve is one of the largest municipal parks in the U.S., covering over 16,000 acres.",
        "The state capitol building in Phoenix features a copper dome, representing Arizona's mining history."
      ]
    },
    {
      "id": "philadelphia-cities-v2",
      "descriptionAdvanced": "Philadelphia is the historical cornerstone of the United States, nestled between the Delaware and Schuylkill rivers in Pennsylvania. It served as the nation's first capital and was the site where both the Declaration of Independence and the U.S. Constitution were fiercely debated and signed. The city's rich colonial architecture, cobblestone streets, and iconic symbols like the Liberty Bell attract millions of history enthusiasts annually. Beyond its historical pedigree, modern Philadelphia is a major educational and economic center, home to prestigious institutions like the University of Pennsylvania. Its vibrant cultural scene is heavily influenced by a diverse population and a deep-rooted working-class identity. This fits perfectly with History K7, focusing on the American Revolution.",
      "factsAdvanced": [
        "Philadelphia served as the temporary capital of the United States from 1790 to 1800.",
        "The Declaration of Independence was adopted at Independence Hall on July 4, 1776.",
        "The Liberty Bell cracked significantly in 1846 and has not been rung since.",
        "Benjamin Franklin founded the University of Pennsylvania in 1740.",
        "Philadelphia is home to Fairmount Park, one of the largest contiguous urban park systems in the U.S.",
        "The Philadelphia Mint, opened in 1792, was the first mint facility in the United States."
      ]
    },
    {
      "id": "san-antonio-cities-v2",
      "descriptionAdvanced": "San Antonio is a culturally vibrant city in south-central Texas, renowned for its deep Spanish colonial heritage and strong military presence. The city is globally recognized for the Alamo, an 18th-century Spanish mission that became a legendary battleground during the Texas Revolution in 1836. Snaking through the downtown area is the River Walk, a heavily landscaped network of walkways along the San Antonio River, flanked by shops and restaurants. As a major hub for the U.S. Armed Forces, it houses multiple massive military installations, earning it the nickname 'Military City, USA'. Its economy relies heavily on healthcare, tourism, and military contracting. This connects with History K8, studying colonial expansion and regional conflicts.",
      "factsAdvanced": [
        "San Antonio was founded in 1718 as a Spanish mission and colonial outpost.",
        "The Battle of the Alamo took place over 13 days in 1836, resulting in a Mexican victory.",
        "The San Antonio River Walk spans over 15 miles, integrating the river into the urban core.",
        "Joint Base San Antonio is one of the largest and most complex military installations in the U.S.",
        "The Tower of the Americas, standing 750 feet tall, was built for the 1968 World's Fair.",
        "San Antonio's five Spanish colonial missions were designated as a UNESCO World Heritage Site in 2015."
      ]
    },
    {
      "id": "san-diego-cities-v2",
      "descriptionAdvanced": "San Diego, located on the Pacific coast of Southern California adjacent to the Mexican border, is famed for its idyllic climate, deep-water harbor, and extensive beaches. The city is an integral part of the U.S. defense infrastructure, hosting the largest naval fleet in the world, including several aircraft carriers at Naval Base San Diego. Its economy is heavily diversified, blending defense, biotechnology, and international trade through the busy San Ysidro Port of Entry. Balboa Park, a massive cultural reserve, houses numerous museums and the world-renowned San Diego Zoo. The city's proximity to Tijuana creates a dynamic transnational metropolitan region. This relates to Geography K8, examining coastal economies and international borders.",
      "factsAdvanced": [
        "San Diego is often referred to as the 'Birthplace of California', being the first site visited by Europeans on the West Coast.",
        "Naval Base San Diego is the principal homeport of the Pacific Fleet, consisting of over 50 ships.",
        "The San Diego Zoo, located in Balboa Park, pioneered the concept of open-air, cageless exhibits.",
        "The Coronado Bridge, opened in 1969, connects the city to Coronado Island over San Diego Bay.",
        "The San Ysidro Port of Entry is one of the busiest land border crossings in the Western Hemisphere.",
        "San Diego produces more avocados than any other region in the United States."
      ]
    },
    {
      "id": "dallas-cities-v2",
      "descriptionAdvanced": "Dallas is a major commercial and cultural hub in North Texas, forming the core of the largest metropolitan area in the American South. The city historically grew as a critical center for the oil and cotton industries, heavily supported by its strategic position along expanding railroad networks. Today, Dallas boasts a highly diversified economy characterized by telecommunications, banking, and technology, hosting numerous Fortune 500 company headquarters. The downtown skyline is marked by striking modernist architecture, including the distinctive Reunion Tower. It is also deeply ingrained in American political history as the site of President John F. Kennedy's assassination in 1963. This topic aligns with History K8, studying industrial growth and 20th-century American history.",
      "factsAdvanced": [
        "Dallas was formally incorporated as a city in 1856.",
        "The Dallas/Fort Worth International Airport is larger than the island of Manhattan, spanning over 17,000 acres.",
        "President John F. Kennedy was assassinated in Dealey Plaza on November 22, 1963.",
        "The Texas State Fair, held annually in Dallas, is one of the largest and oldest state fairs in the U.S., dating back to 1886.",
        "The Dallas Arts District is the largest contiguous urban arts district in the United States.",
        "The integrated circuit, a precursor to the microchip, was invented in Dallas by Jack Kilby in 1958."
      ]
    },
    {
      "id": "louisville-cities-v2",
      "descriptionAdvanced": "Louisville, situated along the Ohio River, is the largest city in Kentucky and a prominent historical gateway to the American South. The city is globally synonymous with the Kentucky Derby, a prestigious horse race held annually at Churchill Downs since 1875. In addition to equestrian sports, Louisville is the historical epicenter of bourbon production and the birthplace of the iconic Louisville Slugger baseball bat. Its strategic riverfront location originally made it a vital port for steamboats navigating past the Falls of the Ohio. Today, it remains a major logistics hub, primarily housing the global air-freight center for UPS. This relates to Geography K7, focusing on river transportation and regional economies.",
      "factsAdvanced": [
        "Louisville was founded in 1778 by George Rogers Clark and named in honor of King Louis XVI of France.",
        "The Kentucky Derby, held on the first Saturday in May, is the oldest continuously held sporting event in the U.S.",
        "The Louisville Slugger Museum features a 120-foot-tall replica of Babe Ruth's baseball bat.",
        "UPS Worldport, located in Louisville, processes over 2 million packages a day.",
        "95 percent of the world's bourbon is produced in Kentucky, with Louisville serving as its main commercial hub.",
        "The city is the birthplace of boxing legend Muhammad Ali."
      ]
    },
    {
      "id": "baltimore-cities-v2",
      "descriptionAdvanced": "Baltimore, the largest city in Maryland, is a historic seaport located along the tidal portion of the Patapsco River near the Chesapeake Bay. It played a pivotal role in the War of 1812, where the defense of Fort McHenry inspired Francis Scott Key to write 'The Star-Spangled Banner'. The city's Inner Harbor, once a bustling industrial dockland, has been transformed into a major cultural and tourist destination featuring the National Aquarium. Economically, Baltimore has shifted from heavy manufacturing and shipping to a service-based economy heavily reliant on medicine and higher education, led by Johns Hopkins University. Its distinct neighborhoods are characterized by iconic brick rowhouses. This aligns with History K7, studying the War of 1812 and early industrialization.",
      "factsAdvanced": [
        "Baltimore was established in 1729 and named after Lord Baltimore of the Irish House of Lords.",
        "Francis Scott Key wrote the U.S. national anthem during the bombardment of Fort McHenry in 1814.",
        "The Baltimore and Ohio (B&O) Railroad, chartered in 1827, was the first commercial railroad in the U.S.",
        "Johns Hopkins Hospital is consistently ranked among the world's best medical institutions.",
        "The National Aquarium in Baltimore houses over 20,000 animals.",
        "The city is closely associated with author Edgar Allan Poe, who is buried at Westminster Hall."
      ]
    },
    {
      "id": "milwaukee-cities-v2",
      "descriptionAdvanced": "Milwaukee is the largest city in Wisconsin, situated on the western shore of Lake Michigan. Historically recognized as the brewing capital of the world, it was home to industrial giants like Pabst, Schlitz, and Miller, heavily influenced by a massive influx of German immigrants in the 19th century. The city's industrial legacy also extends to manufacturing, prominently serving as the global headquarters for Harley-Davidson motorcycles. Today, Milwaukee balances its blue-collar heritage with a revitalized downtown, highlighted by the striking modern architecture of the Milwaukee Art Museum. The city hosts Summerfest, one of the world's largest outdoor music festivals. This connects to History K8, focusing on industrialization and European immigration.",
      "factsAdvanced": [
        "Milwaukee's name is derived from Algonquin words meaning 'good land' or 'gathering place by the water'.",
        "In the 1880s, Milwaukee had the highest percentage of foreign-born residents of any U.S. city, largely German.",
        "Harley-Davidson was founded in Milwaukee in 1903 by William S. Harley and Arthur Davidson.",
        "Summerfest, an annual 11-day music festival, attracts around 800,000 attendees.",
        "The Milwaukee Art Museum's Quadracci Pavilion features a massive movable brise soleil structure with a 217-foot wingspan.",
        "At its peak in the mid-20th century, Milwaukee was the world's leading producer of beer."
      ]
    },
    {
      "id": "albuquerque-cities-v2",
      "descriptionAdvanced": "Albuquerque, the largest city in New Mexico, is nestled in the high desert of the Chihuahuan region, flanked by the Sandia Mountains and the Rio Grande. The city is a vibrant confluence of Native American, Hispanic, and Anglo cultures, reflected in its historic Old Town and distinctive adobe architecture. It has gained international acclaim for hosting the Albuquerque International Balloon Fiesta, the largest hot air balloon festival in the world, taking advantage of the region's unique wind patterns. Economically, the city is a major research center, driven by institutions like Sandia National Laboratories and Kirtland Air Force Base. Route 66 runs straight through the city, preserving a vintage Americana aesthetic. This relates to Geography K7, studying desert topography and cultural integration.",
      "factsAdvanced": [
        "Albuquerque was founded in 1706 as a Spanish colonial outpost.",
        "The city sits at an elevation of 5,312 feet, making it one of the highest major cities in the U.S.",
        "The Albuquerque International Balloon Fiesta attracts over 500 hot air balloons every October.",
        "Sandia National Laboratories, established in 1949, is a primary research facility for the U.S. nuclear arsenal.",
        "The Sandia Peak Tramway is one of the longest aerial tramways in the Americas.",
        "Historic Route 66 spans through the city along Central Avenue, spanning 18 miles."
      ]
    },
    {
      "id": "tucson-cities-v2",
      "descriptionAdvanced": "Tucson is a vibrant desert city located in southern Arizona, surrounded by five minor mountain ranges within the Sonoran Desert. It is renowned for its striking natural landscapes, notably the Saguaro National Park, which protects the massive, iconic saguaro cacti that dominate the region. The city heavily revolves around the University of Arizona, a leading institution in astronomy and space science, supported by numerous observatories in the nearby mountains. Tucson also holds the distinction of being the first city in the U.S. to be designated a UNESCO City of Gastronomy, reflecting its rich Mexican and Native American culinary heritage. The local economy is driven by optics, defense, and high-tech manufacturing. This topic fits with Geography K7, exploring desert biomes and cultural heritage.",
      "factsAdvanced": [
        "Tucson was officially incorporated as a city in 1877.",
        "The saguaro cactus, native only to the Sonoran Desert, can live for over 150 years and grow up to 50 feet tall.",
        "Kitt Peak National Observatory, located near Tucson, houses one of the largest collections of optical telescopes in the world.",
        "Tucson receives over 300 days of sunshine annually, ideal for astronomical research.",
        "Davis-Monthan Air Force Base in Tucson is home to the 'Boneyard', the largest aircraft storage facility in the world.",
        "The city was designated a UNESCO City of Gastronomy in 2015, the first in the United States."
      ]
    },
    {
      "id": "fresno-cities-v2",
      "descriptionAdvanced": "Fresno is an agricultural powerhouse situated squarely in the center of California's expansive San Joaquin Valley. It serves as the economic hub of Fresno County, the most productive agricultural county in the United States, cultivating crops like almonds, grapes, and tomatoes. The city's landscape is characterized by vast tracts of farmland, heavily reliant on complex irrigation networks drawing from the Sierra Nevada snowpack. Fresno also acts as a primary gateway to three major national parks: Yosemite, Sequoia, and Kings Canyon, making it a crucial stop for regional tourism. The city's rapid growth has been driven by both domestic migration and large immigrant populations seeking agricultural opportunities. This relates to Geography K8, studying intensive agriculture and water management.",
      "factsAdvanced": [
        "Fresno was founded in 1872 by the Central Pacific Railroad Company.",
        "The name 'Fresno' means 'ash tree' in Spanish, referring to the abundant trees along the San Joaquin River.",
        "Fresno County consistently ranks first in the nation for agricultural production, generating billions annually.",
        "The Forestiere Underground Gardens, hand-carved in the early 1900s, feature ancient Roman-style catacombs and courtyards.",
        "Sun-Maid, one of the world's largest producers of raisins, is headquartered in the Fresno area.",
        "The city serves as the nearest major metropolitan center to Yosemite National Park, located about 60 miles away."
      ]
    },
    {
      "id": "sacramento-cities-v2",
      "descriptionAdvanced": "Sacramento, located at the confluence of the Sacramento and American rivers, is the political epicenter of California, serving as the state capital. The city's history is deeply rooted in the California Gold Rush of 1849, where it rapidly transformed from a small settlement into a bustling commercial hub for miners. Old Sacramento preserves this pioneer heritage with cobblestone streets and historic railroad museums. Today, the local economy is anchored by the state government, agriculture, and a burgeoning healthcare sector. Known as the 'Farm-to-Fork Capital', Sacramento leverages its position in the fertile Central Valley to foster a thriving agricultural and culinary industry. This connects with History K8, exploring the Gold Rush and state governance.",
      "factsAdvanced": [
        "Sacramento became the capital of California in 1854.",
        "The city was the western terminus of the First Transcontinental Railroad and the Pony Express.",
        "John Sutter built Sutter's Fort in 1839, which laid the foundation for the modern city.",
        "The California State Capitol building features a distinct neoclassical design and a gold-plated copper ball on its dome.",
        "Sacramento is officially branded as America's 'Farm-to-Fork Capital' due to its massive agricultural output.",
        "The city's 'City of Trees' moniker is supported by having one of the highest urban tree canopies in the world."
      ]
    },
    {
      "id": "kansas-city-mo-cities-v2",
      "descriptionAdvanced": "Kansas City, Missouri, sits at the confluence of the Missouri and Kansas rivers, physically straddling the state line with Kansas. It is culturally renowned for its distinct style of slow-smoked barbecue and its profound historical contributions to jazz music during the 1920s and 30s. The city is also famously known as the 'City of Fountains', claiming to have more working fountains than any city in the world outside of Rome. Geographically central, it serves as a massive logistical and transportation hub for the United States, featuring extensive rail and highway networks. The historic Country Club Plaza, built in 1922, was the first shopping center in the world designed specifically to accommodate automobiles. This fits with Geography K7, focusing on transportation hubs and cultural development.",
      "factsAdvanced": [
        "Kansas City was officially incorporated in 1850.",
        "The city boasts over 200 registered fountains, earning its 'City of Fountains' nickname.",
        "The Kansas City style of barbecue is known for its thick, sweet, and tangy tomato-based sauce.",
        "The National WWI Museum and Memorial, located in Kansas City, is the premier institution dedicated to the Great War.",
        "Charlie Parker, a pioneer of bebop jazz, developed much of his early style in Kansas City.",
        "Country Club Plaza is recognized as the first regional shopping center built for the automobile age."
      ]
    },
    {
      "id": "long-beach-cities-v2",
      "descriptionAdvanced": "Long Beach is a prominent coastal city in Southern California, serving as a critical node in global maritime trade. It is home to the Port of Long Beach, which, alongside the neighboring Port of Los Angeles, forms one of the largest and busiest seaport complexes in the world. The city has a deep history in the aerospace and oil industries, though it has heavily diversified into technology and tourism in recent decades. The waterfront is dominated by the RMS Queen Mary, a retired British ocean liner securely moored as a floating hotel and museum. Long Beach also hosts the Grand Prix of Long Beach, a major street racing event that navigates the downtown area. This relates to Geography K8, studying global trade routes and coastal infrastructure.",
      "factsAdvanced": [
        "Long Beach was incorporated as a city in 1897.",
        "The Port of Long Beach handles over 8 million shipping containers annually, making it a vital U.S. trade gateway.",
        "The RMS Queen Mary arrived in Long Beach in 1967 after completing 1,001 transatlantic crossings.",
        "The city was the site of the first successful flight of the Spruce Goose, built by Howard Hughes in 1947.",
        "Long Beach is uniquely situated over the Wilmington Oil Field, one of the largest oil fields in the United States.",
        "The Grand Prix of Long Beach is the longest-running major street race in North America, starting in 1975."
      ]
    },
    {
      "id": "mesa-cities-v2",
      "descriptionAdvanced": "Mesa is a rapidly expanding suburban city situated in the East Valley section of the Phoenix metropolitan area. Historically founded by Mormon pioneers in the late 19th century, it has grown into the most populous suburban city in the United States. The city sits on a vast plateau in the Sonoran Desert, offering spectacular views of the Superstition Mountains. Mesa's economy is highly diversified, with significant sectors in aerospace, defense, and healthcare, prominently featuring facilities for Boeing and Banner Health. The region is heavily reliant on a complex network of ancient canals, originally dug by the Hohokam people, which still form the basis of the modern irrigation system. This topic aligns with Geography K7, focusing on suburban sprawl and desert water management.",
      "factsAdvanced": [
        "Mesa was founded by Mormon pioneers in 1878.",
        "With over 500,000 residents, Mesa is more populous than major cities like Miami or Atlanta.",
        "The city's name 'Mesa' is Spanish for 'table', reflecting its elevated, flat geographic location.",
        "Boeing's facility in Mesa produces the famous AH-64 Apache attack helicopters.",
        "The Mesa Arts Center is the largest comprehensive arts campus in Arizona.",
        "The modern canal system in Mesa utilizes paths originally carved by the Hohokam people over 1,000 years ago."
      ]
    },
    {
      "id": "atlanta-cities-v2",
      "descriptionAdvanced": "Atlanta, the capital of Georgia, is the economic and cultural powerhouse of the American Southeast, nestled in the foothills of the Appalachian Mountains. Historically, it was a pivotal railway hub that was famously burned to the ground by Union forces during the Civil War in 1864, only to rise from the ashes as a symbol of the 'New South'. The city played a central role in the Civil Rights Movement, serving as the home base for Dr. Martin Luther King Jr. Today, Atlanta boasts a highly diversified economy, hosting the headquarters of global corporations like Coca-Cola, Delta Air Lines, and CNN. Its Hartsfield-Jackson Airport consistently ranks as the busiest airport in the world by passenger traffic. This relates to History K8, studying the Civil War and the Civil Rights Movement.",
      "factsAdvanced": [
        "Atlanta was originally named 'Terminus' in 1837 because it marked the end of the Western and Atlantic railroad line.",
        "General William T. Sherman burned much of Atlanta during his March to the Sea in 1864.",
        "Dr. Martin Luther King Jr. was born in Atlanta in 1929; his childhood home is now a national historic site.",
        "Hartsfield-Jackson Atlanta International Airport has handled over 100 million passengers in a single year.",
        "Coca-Cola was invented in Atlanta by pharmacist John Pemberton in 1886.",
        "Atlanta hosted the Centennial Summer Olympic Games in 1996."
      ]
    },
    {
      "id": "colorado-springs-cities-v2",
      "descriptionAdvanced": "Colorado Springs is a high-altitude city located at the eastern edge of the Rocky Mountains, sitting in the shadow of the massive Pikes Peak. The city's geography and rugged terrain have made it a premier destination for outdoor recreation, featuring the stunning red rock formations of the Garden of the Gods. It has a profound military and aerospace presence, hosting the United States Air Force Academy, NORAD operations inside Cheyenne Mountain, and multiple Space Force bases. Economically, the city is driven by defense contracting, high-tech manufacturing, and tourism. The thin air and high elevation also make it a primary training hub for elite athletes, housing the U.S. Olympic and Paralympic Training Center. This connects with Geography K7, studying mountain topography and defense infrastructure.",
      "factsAdvanced": [
        "Colorado Springs was founded in 1871 by General William Jackson Palmer as a resort town.",
        "Pikes Peak, towering at 14,115 feet, inspired the writing of the song 'America the Beautiful' in 1893.",
        "The United States Air Force Academy was established near the city in 1954.",
        "Garden of the Gods is a registered National Natural Landmark known for its towering sandstone rock formations.",
        "The Cheyenne Mountain Complex is a deep underground bunker that historically housed NORAD command operations.",
        "Colorado Springs sits at an elevation of 6,035 feet above sea level."
      ]
    },
    {
      "id": "virginia-beach-cities-v2",
      "descriptionAdvanced": "Virginia Beach is a prominent coastal city located at the mouth of the Chesapeake Bay, where it meets the Atlantic Ocean. It is widely known for having the longest pleasure beach in the world, stretching for miles along the Atlantic coast, making tourism a critical pillar of its economy. The city is heavily intertwined with the U.S. military, housing Naval Air Station Oceana, a master jet base for the Navy, and the Joint Expeditionary Base Little Creek-Fort Story. Beyond the bustling oceanfront resorts, the city features significant natural reserves, including First Landing State Park, which marks the site where English colonists first arrived in 1607 before settling Jamestown. This relates to Geography K8, exploring coastal tourism and military geography.",
      "factsAdvanced": [
        "Virginia Beach holds the Guinness World Record for the longest pleasure beach, spanning 28 miles.",
        "English colonists first landed at Cape Henry in modern-day Virginia Beach in 1607 before moving to Jamestown.",
        "Naval Air Station Oceana, located in the city, is one of the largest and most advanced air bases in the world.",
        "The Chesapeake Bay Bridge-Tunnel connects Virginia Beach to the Delmarva Peninsula, stretching 17.6 miles.",
        "First Landing State Park is the most visited state park in Virginia, featuring diverse maritime forest habitats.",
        "The Cape Henry Lighthouse, built in 1792, was the first lighthouse funded by the United States government."
      ]
    },
    {
      "id": "raleigh-cities-v2",
      "descriptionAdvanced": "Raleigh, the capital of North Carolina, is a rapidly growing urban center famous for its expansive oak tree canopy, earning it the nickname the 'City of Oaks'. It forms one point of the renowned Research Triangle, alongside Durham and Chapel Hill, which houses a massive concentration of high-tech and biotech research facilities. Established in 1792 specifically to serve as the state capital, it features a planned grid layout centered around the Greek Revival-style State Capitol building. The city's economy is heavily anchored by the presence of North Carolina State University and numerous technology firms drawn to the region's educated workforce. Its geographic position provides a balance between the Appalachian Mountains to the west and the Atlantic coast to the east. This connects with Geography K8, studying technology hubs and planned cities.",
      "factsAdvanced": [
        "Raleigh was founded in 1792 as a planned city to serve specifically as the capital of North Carolina.",
        "The city is named after Sir Walter Raleigh, the English explorer who sponsored the lost Roanoke Colony.",
        "The Research Triangle Park, located near Raleigh, is the largest research park in the United States, established in 1959.",
        "North Carolina State University, founded in 1887, is the largest university in the Carolinas.",
        "The North Carolina State Capitol building, completed in 1840, was constructed using locally quarried granite.",
        "Raleigh is consistently ranked among the fastest-growing major cities in the United States."
      ]
    },
    {
      "id": "omaha-cities-v2",
      "descriptionAdvanced": "Omaha is the largest city in Nebraska, situated along the western banks of the Missouri River in the heart of the American Midwest. Historically, it served as a crucial jumping-off point for pioneers heading west and later became a massive hub for the meatpacking industry and transcontinental railroads. Today, Omaha is a major financial and telecommunications center, most notably home to Berkshire Hathaway, the multinational conglomerate led by billionaire investor Warren Buffett. The city is culturally anchored by the world-renowned Henry Doorly Zoo and Aquarium, which features one of the largest indoor rainforests and indoor deserts in the world. It also hosts the annual College World Series, a premier baseball tournament. This fits with Geography K7, studying the Midwest economy and transportation logistics.",
      "factsAdvanced": [
        "Omaha was founded in 1854 and was nicknamed the 'Gateway to the West' for its role in westward expansion.",
        "The city was the eastern terminus of the First Transcontinental Railroad, completed in 1869.",
        "Warren Buffett, one of the world's most successful investors, was born in Omaha and built his empire there.",
        "The Henry Doorly Zoo's 'Desert Dome' is the world's largest indoor desert under a geodesic dome.",
        "The College World Series has been held in Omaha every year since 1950.",
        "During the Cold War, Omaha was home to the Strategic Air Command headquarters at Offutt Air Force Base."
      ]
    },
    {
      "id": "miami-cities-v2",
      "descriptionAdvanced": "Miami is a vibrant, tropical metropolis located on the southeastern tip of the Florida peninsula, heavily influenced by its proximity to Latin America and the Caribbean. Known as the 'Capital of Latin America', the city boasts a deeply diverse population and serves as the financial and cultural gateway between the U.S. and the global south. Its economy is strongly driven by international banking, tourism, and maritime trade, with the PortMiami operating as the undisputed cruise capital of the world. The city's geography is highly vulnerable to rising sea levels, situated on porous limestone and bordered by the vast wetlands of the Everglades. The iconic Art Deco Historic District in South Beach showcases pastel-colored architecture from the 1920s and 30s. This aligns with Geography K8, exploring tropical climates and international gateways.",
      "factsAdvanced": [
        "Miami is the only major U.S. city founded by a woman, Julia Tuttle, in 1896.",
        "The city features the largest collection of Art Deco architecture in the world, with over 800 preserved buildings.",
        "PortMiami handles over 5 million cruise passengers annually, earning it the title 'Cruise Capital of the World'.",
        "Miami is surrounded by two distinct national parks: Everglades National Park and Biscayne National Park.",
        "The city has the third tallest skyline in the U.S., featuring over 300 high-rises.",
        "More than 70 percent of Miami's population speaks a language other than English at home, primarily Spanish."
      ]
    }
  ]
};

// Create the directory if it does not exist
const dir = '/mnt/c/Users/User/plizio_orch/seo_outputs';
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

fs.writeFileSync(`${dir}/seo_usa_en_batch1.json`, JSON.stringify(data, null, 2));
