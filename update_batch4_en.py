import json
import re

data = {
  "aquaworld-budapest": {
    "desc": "Aquaworld Budapest is an awe-inspiring, monumental indoor water theme park, ranking as one of the absolute largest and most spectacular aquatic resorts in all of Europe. Designed under a massive, breathtaking 72-meter-wide glass dome that strikingly mimics the ancient Cambodian temple of Angkor Wat, the complex offers a unique, year-round tropical oasis regardless of the weather outside. Visitors can experience adrenaline-pumping thrills on 11 immense water slides, surf on an artificial wave pool, or relax in the extensive, multi-level Saunaworld. Beyond its massive water attractions, Aquaworld is seamlessly connected to a four-star luxury resort, making it the ultimate destination for family entertainment and premium wellness right on the northern edge of the Hungarian capital.",
    "facts": [
      "The massive glass dome spanning the main pool area is entirely self-supporting, creating a vast, pillar-less interior space.",
      "The complex features a total of 17 indoor and outdoor pools, including a massive wave pool and a 25-meter swimming pool.",
      "Aquaworld boasts one of the most extensive sauna worlds in Hungary, featuring Russian saunas, log saunas, and an ice cave.",
      "The total length of the 11 combined water slides in the complex exceeds one full kilometer."
    ]
  },
  "fovarosi-allatkert": {
    "desc": "The Budapest Zoo and Botanical Garden is an incredibly enchanting, deeply historic institution located right in the heart of the City Park (Városliget). Opening its gates in 1866, it is not only the oldest zoo in Hungary but one of the oldest and most prestigious zoological gardens in the entire world. The zoo is universally celebrated not just for its incredible biodiversity—housing over 1,000 species—but for its stunning, meticulously preserved Art Nouveau animal houses, such as the famous Elephant House built to resemble a lavish mosque. The zoo prioritizes naturalistic, immersive habitats and extensive conservation programs. Walking through its shaded, historic pathways is a magical, educational journey blending exotic wildlife with world-class early 20th-century architecture.",
    "facts": [
      "The stunning Art Nouveau Elephant House was designed by Kornél Neuschloss and features exquisite Zsolnay ceramic tile decorations.",
      "The zoo is home to the 'Magic Mountain' (Varázshegy), an interactive exhibition built directly inside the park's massive artificial rock formation.",
      "It is one of the few zoos in Europe that successfully breeds the highly endangered Southern White Rhinoceros.",
      "The Budapest Zoo is officially recognized as a protected national nature reserve due to its incredibly diverse botanical gardens."
    ]
  },
  "vajdahunyad-vara-poi": {
    "desc": "Vajdahunyad Castle, romantically situated on an island in the City Park's boating lake, is an absolute architectural masterpiece and a whimsical tribute to Hungarian history. It was originally constructed out of cardboard and wood as a temporary exhibition for the 1896 Millennium celebrations to showcase the architectural evolution of the Hungarian Kingdom. It proved so incredibly popular that it was later rebuilt entirely in permanent stone and brick. The castle masterfully blends Romanesque, Gothic, Renaissance, and Baroque architectural elements into a single, cohesive, fairytale-like complex. Today, it houses the fascinating Museum of Hungarian Agriculture. Strolling through its diverse courtyards feels like embarking on an epic, time-traveling journey through a thousand years of Hungarian architecture.",
    "facts": [
      "The castle's name comes from the fact that its most prominent Gothic section is an exact replica of the Corvin Castle in Hunedoara (Vajdahunyad in Hungarian), Transylvania.",
      "The haunting statue of 'Anonymous', the unknown chronicler of early Hungarian history, sits in the castle's courtyard; touching his pen is said to bring good luck.",
      "The Museum of Hungarian Agriculture inside the castle is the largest agricultural museum in Europe.",
      "The castle's moat completely freezes over in the winter, forming part of the massive City Park Ice Rink."
    ]
  },
  "matyas-templom-poi": {
    "desc": "Matthias Church is a monument of staggering beauty and immense historical prestige, dominating the Holy Trinity Square in the heart of the Buda Castle District. Formally known as the Church of Our Lady, it earned its popular name from King Matthias Corvinus, who held both of his royal weddings here in the 15th century. The church features an incredibly striking, vibrant roof covered in multicolored Zsolnay ceramic tiles, paired with a delicate, lace-like Gothic spire. Inside, the church is a breathtaking explosion of color, with nearly every inch of its walls painted in warm, romantic frescoes with Oriental and Hungarian folk motifs. It is the absolute spiritual crown jewel of the Castle District and the site of Hungary's last royal coronations.",
    "facts": [
      "During the 150-year Ottoman occupation of Buda, Matthias Church was converted into the city's main mosque, and its frescoes were whitewashed.",
      "The last two kings of Hungary, Franz Joseph I (1867) and Charles IV (1916), were famously crowned within this magnificent church.",
      "The church's intricate Zsolnay tile roof features nearly 150,000 individual, frost-resistant ceramic tiles.",
      "Beneath the church lies a fascinating crypt that houses an extensive ecclesiastical art museum and the replica of the Hungarian Holy Crown."
    ]
  },
  "baradla-barlang": {
    "desc": "The Baradla Cave is an awe-inspiring, absolutely colossal subterranean wonder located within the pristine Aggtelek National Park in northern Hungary. As the centerpiece of the UNESCO World Heritage-listed Aggtelek Karst system, it is the longest and most spectacular stalactite cave in the country, with its explored passages extending for an astonishing 26 kilometers across the border into Slovakia. The cave is a silent, ancient world filled with towering, intricately formed stalagmites, massive stone columns, and sweeping limestone curtains formed over millions of years by dripping water. The sheer scale of the caverns is humbling, particularly the massive 'Concert Hall', an underground chamber with such flawless acoustics that symphonic concerts are regularly held deep within the earth.",
    "facts": [
      "The Baradla Cave system was officially inscribed as a UNESCO World Heritage site in 1995.",
      "One of the cave's most famous stalagmite formations is the 'Observatory', an incredibly massive, towering calcite column.",
      "The cave maintains a constant, chilly temperature of around 10°C year-round, regardless of the scorching summer heat above ground.",
      "Archaeological excavations in the cave entrance have uncovered extensive evidence of human habitation dating back to the Neolithic period."
    ]
  },
  "hortobagyi-nemzeti-park": {
    "desc": "The Hortobágy National Park is the absolute soul of the Great Hungarian Plain and the largest, most significant protected natural area in the country. Designated as a UNESCO World Heritage site, it is a seemingly endless, mesmerizing expanse of flat, grassy steppe, alkaline lakes, and sweeping marshlands. This landscape is a vital, living museum of traditional Hungarian pastoral life, where the iconic 'Csikós' horsemen still ride, and ancient herds of long-horned Grey Cattle, spiral-horned Racka sheep, and Mangalica pigs roam freely. The sheer scale of the horizon, unbroken by hills or forests, creates an overwhelmingly powerful sense of freedom. Hortobágy is not just a nature reserve; it is the ultimate, enduring symbol of the romanticized Hungarian Puszta.",
    "facts": [
      "Established in 1973, Hortobágy is Hungary's very first national park and remains its largest, covering over 800 square kilometers.",
      "The park is one of the most critical bird sanctuaries in Europe, hosting the spectacular migration of over 100,000 Common Cranes every autumn.",
      "The park features the legendary Nine-Holed Bridge, an iconic 167-meter-long stone bridge built in the 1830s to facilitate the movement of massive animal herds.",
      "Hortobágy is famous for the phenomenon of the 'Fata Morgana' (délibáb), a dramatic optical illusion caused by heat that makes the horizon appear like a shimmering lake."
    ]
  },
  "bukki-nemzeti-park": {
    "desc": "The Bükk National Park encompasses one of the most rugged, densely forested, and geologically fascinating mountain ranges in Hungary. Located in the northeast, it is defined by its massive, deeply carved limestone plateau, which is riddled with over a thousand natural caves, dramatic sinkholes, and steep, rocky ravines. The park's incredibly lush, ancient beech forests provide a vital, secluded sanctuary for diverse wildlife, including elusive lynx, wolves, and rare bird species. Visitors are drawn to the park's spectacular natural highlights, such as the romantic Szalajka Valley with its cascading waterfalls, and the prehistoric Istállós-kő cave. The Bükk Mountains offer an absolute paradise for serious hikers, spelunkers, and anyone seeking pure, untamed alpine wilderness.",
    "facts": [
      "The Bükk Mountains hold the record for having the highest average elevation of any mountain range in Hungary.",
      "The István-lápa cave within the park is the deepest known cave in Hungary, descending a staggering 254 meters into the earth.",
      "The park is home to a highly successful Lipizzaner horse stud farm located in the picturesque village of Szilvásvárad.",
      "In 2017, the Bükk National Park was officially designated as an International Dark Sky Park due to its incredibly low light pollution."
    ]
  },
  "ferto-to": {
    "desc": "Lake Fertő (known as Neusiedler See in Austria) is an incredibly unique, transboundary natural wonder and the westernmost steppe lake in all of Europe. Shared between Hungary and Austria, this vast, overwhelmingly shallow lake is almost entirely fringed by massive, dense reed beds that provide a highly protected, critical sanctuary for hundreds of species of migratory birds. The region's unique, remarkably warm microclimate not only supports this explosive biodiversity but also creates an absolute world-class terroir for viticulture along the lake's shores. Recognized jointly as a UNESCO World Heritage site, the Lake Fertő region is a highly prestigious, peaceful destination, offering hundreds of kilometers of pristine cycling paths, excellent birdwatching, and deep cultural heritage.",
    "facts": [
      "The lake is incredibly shallow, with an average depth of just 1 meter, allowing it to warm up rapidly during the summer months.",
      "The entire Lake Fertő cultural landscape was inscribed as a joint Hungarian-Austrian UNESCO World Heritage site in 2001.",
      "The massive reed beds surrounding the lake cover over half of its total surface area and are carefully harvested in winter for traditional roofing.",
      "The lake's water is uniquely alkaline and slightly salty, fed primarily by underground springs and rainfall rather than major rivers."
    ]
  },
  "velencei-to": {
    "desc": "Lake Velence is a spectacular, vibrant holiday destination located centrally between Budapest and Lake Balaton, widely celebrated across Hungary as the 'Lake of Sunshine.' Thanks to its relatively small size and extremely shallow depth, the lake's waters heat up incredibly quickly, making it one of the warmest freshwater lakes in all of Europe and an absolute paradise for summer bathers. The lake effectively offers two distinct experiences: the bustling, family-friendly sandy beaches and wakeboarding tracks of the southern shore, and the incredibly dense, highly protected reed beds and bird sanctuaries of the northern shore. Lake Velence is a highly accessible, deeply enjoyable aquatic playground that perfectly balances thrilling water sports with pristine nature conservation.",
    "facts": [
      "During the peak of summer, the water temperature of Lake Velence frequently and comfortably reaches 26-28°C.",
      "The lake is considered the absolute cradle of Hungarian waterskiing and wakeboarding, hosting a massive, highly popular cable track in Venice (Velence).",
      "The western end of the lake features the Dinnyés marshland, a strictly protected bird reserve that is part of the Natura 2000 network.",
      "Lake Velence has an average depth of only 1.5 meters, meaning a tall adult could theoretically walk across significant portions of it."
    ]
  },
  "borzsony": {
    "desc": "The Börzsöny is an awe-inspiring, intensely wild volcanic mountain range that rises dramatically from the northern banks of the Danube Bend, offering some of the most rugged, pristine wilderness in Hungary. Part of the expansive Danube-Ipoly National Park, the Börzsöny is characterized by deeply carved, steep valleys, crystal-clear alpine streams, and incredibly dense, ancient oak and beech forests that seem completely untouched by modern civilization. It is the ultimate retreat for serious hikers and nature lovers seeking profound silence and challenging trails away from the crowds. The highest peak, Csóványos, rewards climbers with an absolutely staggering, 360-degree panoramic view stretching from the winding Danube to the High Tatras on clear days.",
    "facts": [
      "The Börzsöny mountains are the remnants of a massive, ancient stratovolcano that erupted roughly 15 million years ago.",
      "The Csóványos peak is the highest point in the range at 938 meters, topped with a spectacular, highly modern steel and wood lookout tower.",
      "The range is home to one of the steepest and most romantic narrow-gauge forest railways in Hungary, the Kemence Forest Train.",
      "The dense, unpopulated forests of Börzsöny serve as a highly protected habitat for large predators, including a small population of Eurasian lynx."
    ]
  },
  "villanyi-borvidek": {
    "desc": "The Villány Wine Region is the absolute, undisputed champion of premium red wine production in Hungary, located in the sun-drenched, rolling hills of the country's deep south. Blessed with an incredible sub-Mediterranean microclimate and highly fertile loess soils, the region produces exceptionally full-bodied, spicy, and world-class red wines, most notably the legendary Villányi Franc (Cabernet Franc). The region is as beautiful as it is delicious, characterized by impeccably manicured vineyards and highly charming, historic cellar rows in villages like Villány and Palkonya. The local winemakers have brilliantly merged deeply traditional family heritage with cutting-edge, ultra-modern winery architecture, creating an incredibly sophisticated, welcoming destination that rivals the absolute best wine regions of Western Europe.",
    "facts": [
      "Villány was the very first wine region in Hungary to establish a fully European-style, organized 'Wine Route' in 1994.",
      "The 'Villányi Franc' is considered by many international wine experts to be the ultimate, purest expression of the Cabernet Franc grape globally.",
      "The historic, multi-level cellar row in the village of Villánykovesd is a protected architectural monument featuring 74 colorful, uniform press houses.",
      "The region experiences the absolute highest number of annual sunshine hours in Hungary, crucial for ripening its robust red grapes."
    ]
  },
  "egri-var": {
    "desc": "The Castle of Eger is an incredibly formidable, monumental fortress that stands as the ultimate symbol of Hungarian heroism and national resilience. Overlooking the beautiful Baroque city of Eger, the castle is globally famous for the legendary Siege of 1552. Under the command of Captain István Dobó, a tiny garrison of roughly 2,000 men, including local women who fought fiercely on the walls, miraculously repelled an invading Ottoman army of nearly 80,000 soldiers. Today, the heavily fortified walls house fascinating, immersive exhibitions detailing this legendary battle, alongside deep subterranean casemates and ancient Gothic cathedral ruins. Walking the ramparts of Eger Castle is a deeply moving experience, offering breathtaking views and a profound connection to Hungary's turbulent, heroic past.",
    "facts": [
      "The legendary 1552 siege was immortalized in Géza Gárdonyi's epic novel 'Eclipse of the Crescent Moon', which is mandatory reading in Hungarian schools.",
      "The castle's deep, winding underground casemate system was an absolute marvel of 16th-century military engineering, allowing safe troop movement during bombardments.",
      "Captain István Dobó's beautifully carved red marble tomb is located directly within the castle's Hall of Heroes.",
      "The local 'Bull's Blood' (Egri Bikavér) wine got its name from an Ottoman legend claiming the fierce Hungarian defenders drank wine mixed with bull's blood."
    ]
  },
  "visegradi-fellegvar": {
    "desc": "The Visegrád Citadel (Fellegvár) is an absolutely breathtaking, formidable medieval fortress that crowns a steep, dramatic crag directly above the narrowest, most spectacular curve of the Danube Bend. Constructed in the 13th century by King Béla IV after the devastating Mongol invasion, the citadel served as the highly secure, heavily guarded repository for the Holy Crown of Hungary for centuries. From its massive, thick stone ramparts, visitors are treated to an unparalleled, staggering panoramic view of the river winding fiercely through the forested mountains below. Today, the citadel hosts excellent historical exhibitions, including a fascinating wax museum recreating the legendary 1335 Royal Summit. It is the ultimate, majestic symbol of medieval Hungarian royal power.",
    "facts": [
      "The Holy Crown of Hungary was successfully stolen from the heavily guarded Visegrád Citadel in 1440 by a daring lady-in-waiting.",
      "The citadel is connected to the Lower Castle and the river by an incredibly massive, heavily fortified wall that stretches down the steep mountainside.",
      "In 1335, the citadel hosted the Congress of Visegrád, a crucial summit of Central European kings that directly inspired the modern Visegrád Group (V4).",
      "During the reign of King Matthias in the Renaissance, the citadel and the surrounding palaces were considered among the most luxurious in Europe."
    ]
  },
  "szigetvari-var": {
    "desc": "The Castle of Szigetvár is a monumental, deeply hallowed historic fortress located in southern Hungary, universally respected as the site of one of the most heroic last stands in European military history. In 1566, the castle's tiny garrison, led by the legendary Croatian-Hungarian nobleman Miklós Zrínyi, defended the fortress against an overwhelming Ottoman army of 100,000 men led by Sultan Suleiman the Magnificent. Recognizing defeat was inevitable, Zrínyi and his remaining men famously burst from the burning castle in a suicidal, glorious final charge rather than surrender. Today, the castle's massive, imposing brick walls encompass a beautiful, melancholic memorial park, a restored Ottoman mosque, and excellent exhibitions detailing the siege that halted the Ottoman advance into Europe.",
    "facts": [
      "Sultan Suleiman the Magnificent, the longest-reigning Sultan of the Ottoman Empire, died of natural causes in his tent during the siege of Szigetvár.",
      "French statesman Cardinal Richelieu famously described the Siege of Szigetvár as 'the battle that saved civilization' due to its strategic impact.",
      "The castle features the beautifully restored Sultan Suleiman Mosque, which is one of the few remaining Ottoman religious buildings in Hungary.",
      "Every September, the town hosts a massive, highly authentic historical reenactment festival called the Zrínyi Days to commemorate the legendary siege."
    ]
  },
  "sarvari-var": {
    "desc": "The Nádasdy Castle in Sárvár is an incredibly stunning, perfectly preserved masterpiece of Renaissance architecture, proudly serving as the historical and cultural anchor of western Hungary. Completely surrounded by a massive, deep moat and entered via an elegant brick bridge, the striking pentagonal fortress was the seat of the immensely powerful Nádasdy noble family. It was within these heavily fortified walls that the very first book printed in the Hungarian language was published in 1541. The castle's absolute showstopper is its breathtaking Great Hall, adorned with incredibly intricate, 17th-century ceiling frescoes depicting heroic battles against the Ottoman Empire. Blending formidable military defenses with extreme aristocratic elegance, Sárvár Castle is a jewel of Hungarian Renaissance heritage.",
    "facts": [
      "The Nádasdy Castle is one of the very few medieval castles in Hungary that survived the centuries entirely intact and was never destroyed.",
      "The castle famously belonged to Ferenc Nádasdy, known as the 'Black Bey' for his extreme cruelty towards Ottoman soldiers.",
      "His wife, Elizabeth Báthory, known as the 'Blood Countess,' famously lived in this castle before her notorious, highly contested murder trials.",
      "The castle currently houses the impressive Ferenc Nádasdy Museum, featuring spectacular collections of historical weaponry, maps, and exquisite glasswork."
    ]
  },
  "diosgyori-var": {
    "desc": "The Castle of Diósgyőr is a spectacular, imposing medieval fortress located on the western outskirts of Miskolc, gracefully sitting at the foothills of the Bükk Mountains. Historically revered as the 'Queens' Castle,' it served for centuries as an exclusive, luxurious engagement gift and beloved retreat for the queens of Hungary. After falling into severe ruin during the Ottoman era, the castle has recently undergone a breathtaking, massive reconstruction, returning its four massive corner towers and elegant Gothic courtyards to their former, towering glory. Today, the fortress is a vibrantly alive cultural hub, hosting massive, highly authentic medieval jousting tournaments and immersive Renaissance festivals. It offers a dramatic, highly interactive journey into the elegant world of Hungarian royalty.",
    "facts": [
      "Diósgyőr was famously the favorite summer residence of King Louis the Great in the 14th century, who extensively expanded its fortifications.",
      "The castle features one of the largest and most authentic outdoor medieval jousting arenas in Central Europe, built directly into the original moat.",
      "During its golden age, the castle's grand Knights' Hall was the largest vaulted hall in the entire Kingdom of Hungary.",
      "Recent massive renovations have fully enclosed the courtyard and recreated the opulent, Gothic living quarters of the medieval queens."
    ]
  },
  "esztergomi-bazilika": {
    "desc": "The Esztergom Basilica is a colossal, overwhelmingly majestic architectural triumph that completely dominates the skyline of the Danube Bend, proudly standing as the spiritual mother church of Hungary. Officially the Primatial Basilica of the Blessed Virgin Mary Assumed Into Heaven and St Adalbert, it is the largest church and the tallest building in the entire country. Its massive, awe-inspiring dome, supported by colossal Corinthian columns, can be seen from miles away. The interior is equally staggering, featuring a jaw-dropping main altarpiece that is the largest single-canvas painting in the world. As the seat of the Catholic Church in Hungary and the birthplace of the nation's first king, Saint Stephen, the Basilica is the absolute pinnacle of Hungarian religious grandeur.",
    "facts": [
      "The Esztergom Basilica reaches a staggering height of 100 meters, making it tied with the Parliament as the tallest structure in Hungary.",
      "The massive altarpiece painting, depicting the Assumption of Mary, was created by Girolamo Michelangelo Grigoletti and measures an incredible 13.5 by 6.6 meters.",
      "The Basilica's incredible Bakócz Chapel, a masterpiece of red marble Renaissance architecture, was miraculously preserved from an older church and incorporated into the new building.",
      "The treasury of the Basilica houses the richest, most valuable collection of ecclesiastical and royal artifacts in Hungary, including the spectacular Calvary of King Matthias."
    ]
  },
  "szentendrei-skanzen": {
    "desc": "The Szentendre Skanzen is an absolutely sprawling, deeply immersive open-air museum that serves as the ultimate guardian of traditional Hungarian rural architecture and folk heritage. Located just outside the vibrant artist town of Szentendre, it is the largest museum of its kind in Hungary, covering over 60 hectares of beautiful, rolling landscape. The museum is brilliantly organized into distinct regional units, featuring over 300 authentic, meticulously relocated peasant houses, wooden churches, operational windmills, and traditional farmsteads from all corners of the country. Visitors can experience a vividly alive rural past, complete with functioning historic bakeries, active blacksmith workshops, and costumed guides. It is a profoundly educational, highly nostalgic journey into the agrarian soul of the Carpathian Basin.",
    "facts": [
      "The Skanzen features a fully operational, highly nostalgic standard-gauge heritage railway that transports visitors across the massive museum grounds.",
      "Every single building in the museum is completely authentic; they were carefully dismantled piece-by-piece from their original villages and rebuilt here.",
      "The museum regularly hosts vibrant, deeply traditional festivals, including spectacular Easter water-throwing (Húsvéti Locsolkodás) and St. Martin's Day celebrations.",
      "The Skanzen's newest massive exhibition area specifically details the distinct, often tragic history of the ethnic Hungarian communities living in Transylvania."
    ]
  },
  "tihanyi-apatsag": {
    "desc": "The Tihany Abbey is an incredibly iconic, deeply sacred Benedictine monastery that commands the absolute most spectacular, breathtaking position on the Tihany Peninsula, towering high above the shimmering waters of Lake Balaton. Founded in 1055 by King Andrew I, it serves as a profound monument to early Hungarian Christianity and statehood. While the current, beautifully elegant twin-towered church is a masterpiece of 18th-century Baroque architecture, the original, remarkably preserved 11th-century Romanesque crypt survives directly beneath it. The Abbey is not only a spiritual sanctuary but a crucial cultural landmark, offering sweeping, panoramic views of the entire Balaton region. Its serene, monk-tended grounds and deep historical resonance make it the absolute crown jewel of the Hungarian sea.",
    "facts": [
      "The original 1055 foundation charter of the Tihany Abbey contains the very first recorded written words of the Hungarian language.",
      "The remarkably intact, massive stone crypt beneath the abbey holds the grave of King Andrew I, the only Hungarian king remaining in his original burial place.",
      "The abbey was heavily fortified and successfully served as an impregnable border fortress during the 150-year Ottoman occupation of Hungary.",
      "The resident Benedictine monks are highly active today, famously cultivating the surrounding lavender fields and producing highly sought-after herbal liqueurs and cosmetics."
    ]
  },
  "pannonhalmi-foapatsag": {
    "desc": "The Pannonhalma Archabbey is a monumental, deeply awe-inspiring spiritual fortress perched high atop Saint Martin's Hill in western Hungary, serving continuously as the absolute center of the Hungarian Benedictine order for over a thousand years. Founded in 996 AD, this massive, imposing complex was officially inscribed as a UNESCO World Heritage site, recognizing its profound impact on Central European culture, education, and viticulture. The architectural ensemble is staggeringly beautiful, blending a towering Gothic basilica with an exquisitely ornate, 19th-century classical library that houses hundreds of thousands of priceless ancient volumes. Surrounded by lush, monk-tended vineyards, extensive botanical gardens, and lavender fields, the Archabbey is a breathtaking, deeply serene testament to a millennium of unbroken faith and intellect.",
    "facts": [
      "The Archabbey's monumental, breathtaking classical library houses over 400,000 volumes, making it one of the largest and most significant monastic libraries on Earth.",
      "The Archabbey was founded before the establishment of the Hungarian State itself, initiated by Prince Géza and completed by King Saint Stephen.",
      "The complex features a stunning, perfectly preserved late-Gothic cloister surrounding a beautiful, meditative inner courtyard (garth).",
      "The monks of Pannonhalma run a highly prestigious, active winery that produces some of Hungary's finest and most globally recognized white wines."
    ]
  },
  "holloko-ofalu": {
    "desc": "Hollókő Old Village is an incredibly enchanting, flawlessly preserved rural settlement tucked deeply into the lush, rolling Cserhát mountains, holding the profound distinction of being the first village in the world designated as a UNESCO World Heritage site. Unlike an open-air museum, Hollókő is a vibrantly alive, breathing community where the indigenous Palóc people passionately maintain their ancestral traditions, dialect, and highly colorful folk costumes. The village is an architectural masterpiece of 17th-century rural design, featuring a single, winding cobblestone street lined with exactly 67 beautifully whitewashed, half-timbered houses, all converging on a deeply charming wooden-towered church. Visiting Hollókő offers an absolute, unadulterated immersion into the purest, most deeply romanticized form of traditional Hungarian highland life.",
    "facts": [
      "Hollókő was designated a UNESCO World Heritage site in 1987, successfully protecting its traditional architecture from any modern alterations.",
      "The village was intentionally rebuilt using traditional mud and wood after a devastating fire in 1909, strictly adhering to its original medieval layout.",
      "The village is globally famous for its vibrant Easter festival, where young men wearing traditional costumes playfully drench women with buckets of cold well water.",
      "Overlooking the village are the spectacular, heavily restored ruins of the 13th-century Hollókő Castle, offering breathtaking panoramic views of the protected landscape."
    ]
  },
  "szepmuveszeti-muzeum": {
    "desc": "The Museum of Fine Arts (Szépművészeti Múzeum) is an absolutely colossal, magnificent temple of international art that majestically anchors the northern side of Heroes' Square in Budapest. Housed in a breathtaking, monumental Neoclassical palace designed to resemble a grandiose ancient Greek temple, the museum boasts one of the most significant, expansive collections of European art in Central Europe. Its incredibly rich galleries offer a sweeping journey through the history of human creativity, featuring a world-renowned Egyptian collection, stunning classical antiquities, and an incredibly prestigious gallery of Old Master paintings including works by Raphael, El Greco, Velázquez, and Goya. Freshly restored to its original, opulent glory, the museum is an absolute must-visit beacon of high culture in the Hungarian capital.",
    "facts": [
      "The museum's spectacular 'Romanesque Hall', originally heavily damaged in WWII, was finally reopened in 2018 after a massive, meticulous 70-year restoration.",
      "The museum holds the absolute largest and most significant collection of Spanish Old Master paintings outside of the Prado Museum in Madrid.",
      "Its Egyptian collection is the second largest in Central Europe, featuring beautifully preserved mummies, sarcophagi, and ancient statues.",
      "The monumental building was opened in 1906, completely designed and executed by the brilliant Hungarian architectural duo Albert Schickedanz and Fülöp Herzog."
    ]
  },
  "gellert-hegy": {
    "desc": "Gellért Hill is a spectacular, towering dolomite rock mass that rises dramatically and steeply from the Buda banks of the Danube, offering unequivocally the most breathtaking, sweeping panoramic views of the entire city of Budapest. The hill is a massively iconic geographic and historical landmark, crowned by the imposing Habsburg-era Citadel fortress and the towering Liberty Statue, a majestic female figure holding a palm frond visible from almost anywhere in the city. The slopes of the hill are heavily forested and crisscrossed with deeply romantic walking paths, hiding fascinating sites such as the spectacular Cave Church carved directly into the rock. Gellért Hill is the absolute, undisputed premier viewpoint and a monumental green lung in the center of the Hungarian capital.",
    "facts": [
      "The hill is named after Saint Gerard (Gellért), an 11th-century bishop who was allegedly placed in a barrel of nails by pagans and rolled to his death from the hilltop.",
      "The massive Citadel was built by the Austrian Habsburgs in 1854 specifically to intimidate and control the rebellious citizens of Budapest following the 1848 revolution.",
      "The towering Liberty Statue was originally erected in 1947 to commemorate the Soviet liberation of Budapest, though its meaning was redefined after the fall of communism.",
      "Deep within the base of the hill lies a massive, complex network of natural thermal springs that directly supply the world-famous Gellért and Rudas Baths."
    ]
  },
  "normafa": {
    "desc": "Normafa is a deeply beloved, highly popular alpine excursion destination perched high atop the lush, rolling Buda Hills, serving as the ultimate, quick nature escape for the residents of Budapest. Offering stunning, sweeping panoramic views over the sprawling capital and the curving Danube, it is a magnificent expanse of ancient oak and beech forests, sweeping meadows, and perfectly maintained hiking trails. The area is absolutely famous for its deeply nostalgic atmosphere, where visitors traditionally enjoy classic Hungarian street food like hot strudels (rétes) and lángos from historic hillside kiosks. In winter, its gentle slopes transform into a bustling, joyful wonderland for sledding and cross-country skiing. Normafa flawlessly combines accessible, pristine wilderness with deep-rooted Budapest civic tradition.",
    "facts": [
      "The area is named after a legendary, massive ancient beech tree ('Norma tree') under which a famous Hungarian opera singer performed an aria from Bellini's 'Norma' in 1840.",
      "Normafa is directly accessible via the highly unique Budapest Children's Railway, a narrow-gauge forest train entirely operated by school-aged children.",
      "The nearby János-hegy features the spectacular Elizabeth Lookout Tower, the absolute highest point in Budapest, offering views up to 80 kilometers away on clear days.",
      "A highly nostalgic, historic chairlift (Libegő) uniquely transports visitors from the lower valleys directly up the steep mountainside to the Normafa ridge."
    ]
  },
  "magyar-allami-operahaz": {
    "desc": "The Hungarian State Opera House is an absolute masterpiece of Neo-Renaissance architecture and the undisputed, glittering crown jewel of Budapest's elegant Andrássy Avenue. Designed by the visionary architect Miklós Ybl and opened in 1884, it was explicitly built to rival the grandeur of Vienna and Paris, resulting in one of the most opulent, perfectly proportioned opera houses in the world. The interior is a jaw-dropping symphony of luxury, featuring sweeping marble staircases, walls dripping with over three kilograms of pure gold leaf, and breathtaking ceiling frescoes by Károly Lotz. Renowned globally for its absolutely flawless, world-class acoustics, attending a performance in this majestic, deeply historic auditorium is an unforgettable pinnacle of European high culture.",
    "facts": [
      "The legendary composer Gustav Mahler served as the director of the Hungarian State Opera from 1888 to 1891, heavily elevating its international prestige.",
      "The Opera House's breathtaking auditorium is famous for possessing the third-best acoustics of any opera house in Europe, trailing only Milan and Paris.",
      "The massive, incredibly intricate bronze chandelier in the main hall weighs over 3,000 kilograms and requires a complex winch system to lower for cleaning.",
      "Emperor Franz Joseph funded the construction on the strict condition that it could not be built larger than the Vienna State Opera, though locals boast it is much more beautiful."
    ]
  },
  "csodak-palotaja": {
    "desc": "The Center of Scientific Wonders (Csodák Palotája, or CSOPA) is a massively expansive, highly vibrant interactive science museum in Budapest that brilliantly transforms complex physics and mechanics into pure, unadulterated fun. As the very first interactive science center in Central and Eastern Europe, it boasts over 250 massive, hands-on exhibits designed specifically to ignite curiosity and wonder in visitors of all ages. Rather than reading dry plaques, guests are actively encouraged to lie on a bed of nails, navigate giant magnetic fields, create massive vortexes, or experience the mind-bending illusions of the mirror labyrinth. CSOPA is an absolutely premier, dynamic educational destination that proves learning about the natural laws of the universe can be a wildly entertaining, deeply memorable adventure.",
    "facts": [
      "CSOPA was entirely founded by the legendary Hungarian physicist and inventor of the Rubik's Cube, Ernő Rubik, alongside other prominent scientists.",
      "The center features an incredible, highly popular 'Newton's Apple' exhibition that specifically explores the fascinating mechanics of gravity and motion.",
      "CSOPA hosts daily, highly explosive and visually spectacular live science shows in the Öveges Auditorium, demonstrating extreme chemical reactions.",
      "The facility includes highly immersive, state-of-the-art 5D and 9D ride cinemas that physically simulate the intense sensations of the scientific films shown."
    ]
  },
  "boldogko-var-b2": {
    "desc": "Boldogkő Castle is a spectacularly dramatic, highly photogenic medieval fortress perched audaciously atop a steep, bare tuff rock formation in the rugged Zemplén Mountains. Known affectionately as the 'Lion's Rock' of Hungary, its absolute most iconic feature is a narrow, heavily fortified stone walkway that extends far out along a sharp, spine-like rocky ridge, offering visitors an unparalleled, vertigo-inducing panoramic view of the surrounding forested valleys and apricot orchards. Constructed in the 13th century following the Mongol invasions, the castle has been beautifully restored, featuring fascinating historical exhibitions, an extensive lead soldier diorama, and a deeply atmospheric medieval tavern. Boldogkő is a wildly romantic, visually stunning masterpiece of medieval highland defense.",
    "facts": [
      "The castle's name translates to 'Happy Stone,' supposedly named by the ancient fairies who, according to local legend, built the fortress.",
      "The iconic, extremely narrow stone observation walkway extending along the rocky spine was originally built as a highly defensible watchtower post.",
      "The castle houses one of the largest and most intricate lead soldier exhibitions in Central Europe, meticulously depicting the famous Battle of Muhi.",
      "Underneath the massive rock, the castle features a deep, labyrinthine wine cellar historically used to store the famous fruit brandies of the Gönc region."
    ]
  },
  "fuzer-var-b2": {
    "desc": "Füzér Castle is an absolute architectural and geographical marvel, an incredibly steep, brilliantly restored medieval fortress crowning a sharp, perfectly conical volcanic peak in the extreme northeast of Hungary. It is widely considered one of the most spectacularly situated and beautiful castles in the entire country, completely dominating the skyline of the pristine Zemplén landscape. Originating in the 13th century, the castle holds immense national prestige, as it was famously the secret, highly secure hiding place for the Holy Crown of Hungary in 1526 following the disastrous Battle of Mohács. Having undergone a breathtaking, multi-billion forint historical reconstruction, the upper castle now gleams with white stone walls and highly authentic Gothic interiors, offering an unforgettable, deeply romantic alpine ascent.",
    "facts": [
      "Füzér Castle is officially recognized as one of the 'Seven Natural Wonders of Hungary' due to its incredibly striking position on a steep volcanic plug.",
      "The Holy Crown of Hungary was hidden here by Péter Perényi, the Crown Guard, who brought it to his secure fortress to protect it from the advancing Ottomans.",
      "Recent massive reconstructions have flawlessly rebuilt the spectacular Gothic chapel and the opulent palace wings using strictly traditional medieval building techniques.",
      "The extremely steep, winding hike up to the castle from the village below is part of the legendary 'National Blue Trail' hiking network."
    ]
  },
  "sirok-var": {
    "desc": "Sirok Castle is an incredibly fascinating, exceptionally rugged medieval fortress deeply integrated into the sheer volcanic rock of the eastern Mátra Mountains. Unlike traditional masonry castles, large sections of Sirok Castle were actually carved directly into the massive rhyolite tuff peak by its ancient defenders, creating a unique, labyrinthine network of subterranean tunnels, cavernous rooms, and deep defensive casemates. Standing on the precipice of these ruins offers a staggering, sweeping panoramic view over the densely forested Tarna valley and the distant Bükk Mountains. The castle has a deeply wild, untamed atmosphere, representing the absolute ultimate combination of aggressive medieval military architecture and brutal, towering volcanic geology. It is a wildly adventurous, highly evocative ruin.",
    "facts": [
      "The lower and upper levels of the castle are uniquely connected by a steep, twisting pedestrian tunnel carved completely through the solid volcanic rock.",
      "During the Ottoman era, the castle functioned as an incredibly crucial, heavily fortified border post (végvár) for the Turkish empire.",
      "Just a short hike from the castle ruins lie the 'Barát and Apáca' (Monk and Nun), two massive, naturally eroded volcanic rock towers wrapped in local legends.",
      "Sirok Castle was notoriously known as an impregnable 'robber knight' fortress in the Middle Ages, controlling and taxing the vital trade routes below."
    ]
  },
  "sumeg-var-b2": {
    "desc": "Sümeg Castle is an absolutely colossal, incredibly imposing medieval fortress that aggressively dominates the skyline from its perch atop a steep, solitary limestone hill in the Balaton Uplands. It is overwhelmingly recognized as one of the largest, most formidable, and most beautifully preserved fortresses in all of Hungary. Built originally by the powerful Bishops of Veszprém in the 13th century to protect against Mongol invasions, the castle's massive, multi-layered defensive walls never fell to a direct Ottoman siege. Today, Sümeg Castle is famously alive, hosting spectacular, highly authentic equestrian tournaments, medieval feasts, and grand historic festivals. It is a visually staggering, highly immersive destination that perfectly captures the raw power of Hungarian medieval militarism.",
    "facts": [
      "The incredibly steep path up to the castle is heavily fortified and forces visitors to pass through multiple, highly defensible massive gatehouses.",
      "The castle's Old Tower is the oldest surviving section, offering sweeping, 360-degree panoramic views of the surrounding Bakony forests and dormant volcanoes.",
      "Sümeg hosts arguably the most famous, massive, and highly choreographed medieval jousting tournaments in Hungary, drawing crowds from across Europe.",
      "The fortress was strategically designed as a highly self-sufficient complex, featuring a massive central cistern that could hold enough rainwater to survive months of siege."
    ]
  },
  "somlo-var": {
    "desc": "Somló Castle is a hauntingly beautiful, deeply romantic medieval ruin spectacularly perched on the dense, forested northern slopes of the Somló volcanic mountain in western Hungary. Accessible only via a steep, winding hike through ancient basalt formations and highly prestigious, historic vineyards, the castle offers an incredibly secluded, mystical atmosphere. Built following the devastating Mongol invasion in the 13th century, its massive, dark basalt walls seamlessly blend into the rugged volcanic terrain. Once a formidable aristocratic stronghold, it now stands as an incredibly evocative ruin, rewarding adventurous hikers with sweeping, uninterrupted panoramic views of the vast Transdanubian landscape. Somló Castle is an absolute hidden gem, merging raw medieval history with world-class volcanic viticulture.",
    "facts": [
      "The castle is entirely constructed from the extremely hard, dark basalt rock quarried directly from the Somló mountain itself.",
      "Somló mountain is famously Hungary's smallest but one of its most unique wine regions, producing highly mineral, smoky white wines historically favored by the Habsburgs.",
      "The incredibly steep, irregular layout of the castle's ruins perfectly follows the jagged, uneven volcanic rock formations it was built upon.",
      "Local legend claims that drinking Somló wine, particularly from the vineyards below the castle, guarantees the birth of a male heir, making it a historic favorite of European royalty."
    ]
  },
  "nagyvazsony-kinizsi-var": {
    "desc": "Kinizsi Castle, located in the quaint village of Nagyvázsony near Lake Balaton, is a brilliantly preserved, deeply historic medieval fortress most famous for its association with Pál Kinizsi, the legendary, undefeated general of King Matthias Corvinus. The castle is utterly dominated by its spectacular, massive, perfectly intact six-story residential keep (donjon), which stands as one of the finest surviving examples of Late Gothic residential military architecture in Central Europe. The fortress seamlessly combines robust, heavy military defenses with elegant, aristocratic Renaissance modifications. Today, the castle is highly active, offering fascinating historical exhibitions, authentic Renaissance games, and the incredible opportunity to climb to the very top of the massive keep for a sweeping view of the Balaton Uplands.",
    "facts": [
      "Pál Kinizsi, the castle's famous owner, was a historically massive, incredibly strong man who allegedly fought in battles wielding two heavy broadswords simultaneously.",
      "The towering, six-story keep remains completely intact, featuring original Gothic fireplaces, vaulted ceilings, and a beautifully restored Renaissance ceremonial hall.",
      "The castle grounds include a highly unique, functioning historic post office museum and an authentic, 18th-century watermill.",
      "Kinizsi famously defeated a massive Ottoman army at the Battle of Breadfield in 1479, earning this castle as a grand reward from the King."
    ]
  },
  "szerencs-var": {
    "desc": "Szerencs Castle is an exceptionally elegant, historically pivotal late-Renaissance fortress gracefully located in the town of Szerencs, proudly serving as the southern gateway to the legendary Tokaj wine region. Originally a medieval monastery, it was transformed into a formidable, moated aristocratic stronghold by the immensely powerful Rákóczi family in the 16th century. The castle played a massive, defining role in Hungarian history, serving as the site of the 1605 National Diet where István Bocskai was elected Prince of Transylvania and Hungary. Today, the beautifully restored, whitewashed palace houses the fascinating Zemplén Museum. Surrounded by a massive, tranquil boating lake and lush parks, Szerencs Castle is a sophisticated, highly historically charged architectural treasure.",
    "facts": [
      "The Zemplén Museum inside the castle houses the absolute largest collection of historical postcards in Hungary, containing over one million unique items.",
      "The castle's impressive, multi-story Renaissance defensive tower was specifically designed to command sweeping views of the vital trade routes leading into Tokaj.",
      "During its golden age, the castle was a massive, highly secure financial center, storing the immense fortunes and wine revenues of the Rákóczi dynasty.",
      "The town of Szerencs is deeply famous nationwide for its historic chocolate factory, and the castle regularly hosts a massive, highly popular annual chocolate festival."
    ]
  },
  "koszeg-jurisics-var": {
    "desc": "Jurisics Castle is a monumental, incredibly historic fortress located in the enchanting alpine town of Kőszeg, standing as the ultimate symbol of miraculous military resilience against overwhelming odds. The castle's absolute claim to global fame is the legendary Siege of 1532, where a tiny, ragtag garrison of roughly 700 soldiers and peasants, commanded by Captain Miklós Jurisics, successfully delayed an immense Ottoman army of over 100,000 men marching on Vienna. Today, the heavily restored, multi-courtyard fortress is an incredibly immersive historical complex, featuring a beautiful late-Gothic inner castle and extensive exhibitions detailing the heroic siege. Surrounded by a deep moat and the picturesque old town, Jurisics Castle is a deeply atmospheric, highly patriotic medieval masterpiece.",
    "facts": [
      "To honor the 1532 victory, the church bells in Kőszeg famously ring every day at exactly 11:00 AM, the exact hour the frustrated Ottoman army finally retreated.",
      "The castle's striking, diamond-shaped courtyard features stunning Renaissance arcades and beautifully preserved Gothic window frames.",
      "Sultan Suleiman the Magnificent watched the frustrating, month-long siege of the castle from a nearby hill, which is still known today as 'Sultan's Hill'.",
      "The modern castle complex features a fascinating 'Marzipan Museum' and highly interactive, family-friendly archery and medieval weapons ranges."
    ]
  },
  "simontornya-var": {
    "desc": "Simontornya Castle is a spectacular, architecturally unique late-Gothic and Renaissance fortress elegantly situated on the flat, marshy plains of the Tolna region in central Hungary. Unlike typical hilltop castles, Simontornya is a highly formidable 'water castle,' originally built in the 13th century and protected by deep, swampy moats fed by the Sió channel. The castle's absolute zenith occurred in the early 16th century when it was transformed into a stunningly luxurious Italian-style Renaissance palace, featuring incredibly ornate carved windows, elegant loggias, and vaulted ceremonial halls. Following extensive, highly meticulous 20th-century restorations, the castle now stands as an incredibly beautiful, highly cohesive museum, offering a brilliant, intimate look into the opulent lifestyle of the Hungarian Renaissance nobility.",
    "facts": [
      "The name Simontornya translates precisely to 'Simon's Tower', named after the original 13th-century nobleman who constructed the massive, central keep.",
      "The castle features incredibly beautiful, highly authentic 16th-century Renaissance stone carvings, widely considered some of the finest surviving examples in Hungary.",
      "Following the Ottoman conquest in 1545, the castle was heavily modified to serve as a high-security border fortress, and significant Turkish architectural elements remain.",
      "The completely restored, massive Knights' Hall frequently hosts highly atmospheric classical music concerts and authentic medieval banquets."
    ]
  },
  "varpalota-thury-var": {
    "desc": "Thury Castle is an immensely powerful, visually striking, box-shaped medieval fortress that aggressively dominates the very center of the bustling town of Várpalota. This highly robust, formidable, four-towered stronghold is famously named after its most legendary commander, György Thury, who fiercely and repeatedly repelled massive Ottoman attacks during the 16th century. The castle's architecture is a fascinating, complex blend of heavy, brutal Gothic military defense and delicate, later Renaissance residential elegance. Having miraculously survived centuries of intense warfare and industrial urban development around it, the castle now houses excellent exhibitions on military history, local mining, and historical costumes. It is an incredibly imposing, highly accessible testament to the fierce Hungarian border defense system.",
    "facts": [
      "György Thury was so fiercely feared by the Ottomans that he was legendary across the empire for engaging in and winning hundreds of individual, one-on-one duels with Turkish champions.",
      "The castle's highly unusual, perfectly square, symmetrical layout is a hallmark of the 14th-century Italian-influenced 'castello' design style.",
      "During extensive modern restorations, incredibly rare, beautifully intact 14th-century Gothic frescoes were discovered hidden beneath layers of plaster in the castle chapel.",
      "The fortress was heavily damaged during the Rákóczi War of Independence and later brutally repurposed as a massive coal mining headquarters in the 20th century."
    ]
  },
  "szelce-volgy": {
    "desc": "The Szelce Valley is an incredibly pristine, deeply isolated natural sanctuary located in the extreme northern karst landscapes of the Aggtelek National Park. It is a wildly romantic, heavily forested valley characterized by dense, ancient oak and hornbeam woods, crystal-clear alpine streams, and dramatically steep, rocky ravines. The valley is totally devoid of modern settlements, offering an absolute, pure immersion into untouched, silent wilderness. It is highly famous among serious hikers, equestrians, and nature photographers for its incredible biodiversity, serving as a critical, undisturbed habitat for rare large mammals, including red deer, wolves, and the elusive Eurasian lynx. Szelce Valley is the ultimate Hungarian destination for those seeking profound solitude and rugged, untamed natural beauty.",
    "facts": [
      "The Szelcepuszta area within the valley features a highly historic, beautifully restored hunting lodge originally built by the aristocratic Károlyi family.",
      "The valley is a deeply critical, highly protected part of the massive, transboundary Aggtelek-Slovak Karst UNESCO World Heritage site.",
      "The pristine, deeply forested slopes are famous for their explosive, spectacular autumn colors, making it a premier destination for fall hiking.",
      "The remote, unpolluted skies over the valley make it an absolutely ideal location for deep-space stargazing and astrophotography."
    ]
  },
  "palvolgyi-barlang": {
    "desc": "The Pálvölgyi Cave is a spectacularly massive, incredibly complex subterranean labyrinth located deep beneath the affluent residential neighborhoods of the Buda Hills. Stretching for an astonishing 32 kilometers, it is officially the longest cave system in all of Hungary. The cave is absolutely renowned for its breathtaking, highly varied geological formations, featuring towering, dripstone stalactites, incredibly intricate, sparking calcite crystals, and narrow, thrilling, multi-level rocky fissures. Discovered purely by accident in 1904 when the ground collapsed beneath a grazing sheep, the cave now offers highly exciting, well-lit guided tours through its most dramatic chambers. It is an awe-inspiring, adventurous geological masterpiece hidden directly beneath the bustling Hungarian capital.",
    "facts": [
      "The cave system maintains a constant, chilly temperature of exactly 11°C year-round, requiring visitors to dress warmly even in the height of summer.",
      "In 2011, cave explorers successfully proved a massive connection between the Pálvölgyi Cave and the neighboring Mátyáshegyi Cave, creating the massive 32-km continuous system.",
      "The cave features incredibly high, steep vertical drops, requiring visitors on the public tour to navigate the famous, towering 'Ladder of Witches'.",
      "The cave's unique, highly intricate spherical niches and thermal water-carved channels prove it was originally formed by deep geothermal springs."
    ]
  },
  "mecsek-hegyseg": {
    "desc": "The Mecsek Mountains are an incredibly beautiful, highly diverse, and heavily forested mountain range dominating the landscape of southern Hungary, rising dramatically directly above the historic city of Pécs. Because of its southern location, the Mecsek boasts a highly unique, remarkably warm sub-Mediterranean microclimate, allowing for explosive, vibrant biodiversity including rare orchids, fig trees, and sweet chestnut groves. The range is a spectacular playground for outdoor enthusiasts, featuring deep, hidden karst caves (like Abaliget), romantic, cascading waterfalls, and dozens of panoramic, modern lookout towers. Characterized by deep, winding valleys, historic coal-mining villages, and a wildly vibrant autumn foliage display, the Mecsek Mountains offer the absolute most romantic, climatically pleasant alpine experience in Hungary.",
    "facts": [
      "The highest peak in the Mecsek range is the Zengő, standing at 682 meters, topped with a massive, highly iconic television and observation tower.",
      "The Abaliget Cave, located in the Mecsek, is the longest stream-carved cave in southern Hungary and is highly famous for its medical, respiratory-healing climate.",
      "The mountains are deeply famous for the 'Wild Garlic' (Medvehagyma) bloom in early spring, heavily harvested by locals for traditional gastronomy.",
      "The Mecsek region was historically a massive, highly strategic center for both high-quality coal and intense uranium mining during the 20th century."
    ]
  },
  "balatonfelvideki-np": {
    "desc": "The Balaton Uplands National Park is a spectacularly diverse, incredibly picturesque protected region stretching magnificently along the entire northern shoreline of Lake Balaton. It is an absolute masterpiece of sweeping geographical contrasts, encompassing highly dramatic, extinct volcanic cones (like Badacsony), deeply serene, reed-fringed lake basins, and the massive, echoing karst plateaus of the Bakony hills. The region is internationally celebrated for its deeply romantic, almost Tuscan-like atmosphere, featuring vast, fragrant lavender fields, incredibly historic, whitewashed wine cellars, and world-class, volcanic white wine viticulture. The National Park successfully and brilliantly protects this fragile, ancient landscape while offering unparalleled hiking, geological exploration, and deep cultural immersion into the traditional Hungarian riviera.",
    "facts": [
      "The Tapolca Basin within the park is famous for its stunning, perfectly conical 'witness mountains', which are the highly eroded, hard basalt cores of ancient volcanoes.",
      "The park includes the deeply mysterious Tapolca Lake Cave, an incredibly unique subterranean lake where visitors can actually row boats through illuminated, water-filled caverns.",
      "The Tihany Peninsula, a heavily protected core area of the park, features incredibly unique, post-volcanic geyser cones and expansive lavender plantations.",
      "The park is a highly critical sanctuary for incredibly rare flora, including the wildly blooming 'Spring Adonis' and numerous species of wild European orchids."
    ]
  },
  "koros-maros-np": {
    "desc": "The Körös-Maros National Park is a massive, incredibly serene, and deeply traditional protected sanctuary located in the extreme southeastern plains of Hungary. It was specifically established to furiously protect the absolute last, pristine remnants of the original, ancient Puszta landscape, highly complex river floodplains, and unique, alkaline marshlands. The park is a deeply critical, world-class sanctuary for avian biodiversity, drawing intense international attention for its massive flocks of migrating bustards, storks, and the incredibly rare, highly protected Great Bustard (the heaviest flying bird in Europe). With its endlessly sweeping, flat horizons, traditional sweeping well-sweeps, and massive herds of ancient Hungarian Grey Cattle, it offers a profoundly authentic, peaceful immersion into the deepest soul of the Great Plain.",
    "facts": [
      "The park is globally renowned for hosting the largest viable, breeding population of the highly endangered Great Bustard in Central Europe.",
      "The park protects the deeply historic 'Fáspuszta', a massive, ancient oak forest that is considered a completely miraculous, surviving remnant of the original lowland forests.",
      "The massive, incredibly dense floodplain forests along the Körös rivers are considered the absolute premier, untouched kayaking and canoeing destinations in eastern Hungary.",
      "The local Dévaványa visitor center features highly extensive exhibitions on the deeply traditional, highly skilled pastoral lifestyle of the southern Puszta."
    ]
  },
  "oreg-bakony": {
    "desc": "The Old Bakony (Öreg-Bakony) is the absolute, wildly romantic, and deeply forested heart of the massive Bakony mountain range in western Transdanubia. It is a region defined by its incredibly dense, ancient, and seemingly endless beech and oak forests, deeply carved, spectacular limestone ravines, and highly dramatic, hidden karst caves. Historically, these incredibly dense, impenetrable woods were famously the ultimate, highly secure hideout for the legendary Hungarian 'Betyárs' (highwaymen and outlaws) in the 19th century, adding a deeply thrilling, romantic folklore to the region. Today, it is an absolute paradise for extreme hikers, featuring the awe-inspiring, towering rock walls of the Cuha Valley and the spectacular, massive ruins of Csesznek Castle crowning a high, rocky peak.",
    "facts": [
      "The spectacular Cuha Valley gorge is famously traversed by a highly romantic, deeply historic railway line that crosses numerous viaducts and tunnels directly through the rock.",
      "The massive, imposing ruins of Csesznek Castle, dominating the Old Bakony skyline, are highly famous for featuring Hungary's very first 'Via Ferrata' climbing routes.",
      "The region is highly celebrated in Hungarian folklore as the home of Savanyú Jóska, a legendary, Robin Hood-esque outlaw who hid from imperial authorities in these deep woods.",
      "The Old Bakony contains the highly protected 'Kőris-hegy', the absolute highest peak in the Bakony range at 709 meters, topped with a massive, white spherical radar tower."
    ]
  },
  "zempleni-hegyseg-b2": {
    "desc": "The Zemplén Mountains form an incredibly wild, deeply romantic, and highly rugged volcanic mountain range completely dominating the extreme northeastern corner of Hungary. It is unequivocally one of the most untouched, sparsely populated, and pristine forested regions in the entire country, offering an absolute haven for deep-forest trekking and profound solitude. The region is internationally famous as the 'Land of Castles', boasting a staggering concentration of spectacular, dramatically ruined medieval fortresses aggressively perched on steep, volcanic peaks, such as Füzér, Boldogkő, and Regéc. The mountains plunge sharply in the south into the legendary Tokaj wine region. Zemplén is the ultimate, wildly beautiful frontier of Hungary, seamlessly blending harsh volcanic geology with deep, aristocratic history.",
    "facts": [
      "The Zemplén range is highly unique because it is entirely of volcanic origin, primarily composed of extremely hard, deeply colored andesite and rhyolite rock.",
      "The region is a highly critical, incredibly secure habitat for large, extremely rare predators, boasting Hungary's only verified, stable populations of grey wolves and Eurasian lynx.",
      "The mountains are heavily dotted with highly unique, deeply carved, centuries-old wine cellars that perfectly maintain the temperature needed for Tokaj wine production.",
      "The legendary 'National Blue Trail', Hungary's absolute premier, longest continuous hiking route, spectacularly terminates at the highest peak of the Zemplén Mountains (Nagy-Milic)."
    ]
  },
  "pilis-hegyseg": {
    "desc": "The Pilis Mountains form an incredibly majestic, deeply dramatic, and highly accessible limestone mountain range rising sharply just north of Budapest, hugging the spectacular, sweeping curve of the Danube Bend. Due to its extreme proximity to the capital, it is the absolute most popular, heavily utilized hiking and outdoor recreation paradise in Hungary. The landscape is visually staggering, characterized by brilliant, towering white limestone cliffs, incredibly deep, winding gorges (such as the famous Rám Ravine), and hundreds of complex karst caves. The Pilis is also deeply saturated in ancient spirituality and national mysticism, highly revered as the sacred, historic hunting grounds of medieval Hungarian kings and the deeply spiritual center of the ancient Pauline Order.",
    "facts": [
      "The Rám Ravine (Rám-szakadék) is an incredibly thrilling, steep volcanic gorge where hikers must navigate waterfalls using installed steel ladders and handrails.",
      "Dobogókő, a highly popular peak in the Pilis, is widely claimed by Hungarian esoteric traditions to be the absolute 'heart chakra' and energetic center of the Earth.",
      "The Pilis range contains the deeply historic ruins of the massive, central monastery of the Pauline Order, the only monastic order ever founded by Hungarians.",
      "The highest peak, Pilis-tető (756 meters), is topped with the massive, spectacularly designed Boldog Özséb lookout tower, offering sweeping, 360-degree views."
    ]
  },
  "vertes-hegyseg": {
    "desc": "The Vértes Mountains form a highly distinctive, spectacularly scenic, and deeply historic low mountain range situated perfectly between the Bakony and Gerecse ranges in central Transdanubia. It is an absolute geological masterpiece, characterized by stark, blindingly white dolomite cliffs, deeply carved, highly arid valleys, and incredibly dense, ancient oak forests that transform into a vibrant, fiery explosion of colors in the autumn. The Vértes is deeply, profoundly historic, named—according to legend—after the abandoned, heavy armor (vért) left behind by a fleeing, defeated Holy Roman Emperor in 1051. The mountains are heavily guarded by deeply romantic, highly evocative castle ruins like Gesztes and Vitány, offering a perfect, tranquil blend of stark Mediterranean-like karst geology and medieval lore.",
    "facts": [
      "The Vértes is highly famous for its incredible, Mediterranean-like microclimates on its southern slopes, supporting incredibly rare, drought-resistant flora and diverse reptile species.",
      "The spectacular, brilliantly restored Csókakő Castle, perched on a steep dolomite cliff, was a massively critical border fortress during the intense Ottoman wars.",
      "The mountains contain a massive, highly unique bauxite geological park in Gánt, featuring surreal, deeply red, Mars-like landscapes created by historic open-pit mining.",
      "The Vértes is a highly critical, intensely protected sanctuary for the extremely rare Imperial Eagle and the highly elusive Saker Falcon."
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
    print(f"Updated batch 4 in {ts_file}")

if __name__ == "__main__":
    update_ts_file('lib/visualLab/data/hungaryPoi.ts')
