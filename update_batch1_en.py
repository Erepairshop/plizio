import json
import re

data = {
  "HU": {
    "desc": "Baranya County, nestled in Hungary's sun-drenched far south, offers an enchanting blend of Mediterranean-like climate and deep historical roots. Dominated by the picturesque Mecsek Mountains to the north and the serene Drava River to the south, this region boasts some of the most fertile lands in the country. The vibrant city of Pécs serves as its cultural beating heart, captivating travelers with an architectural tapestry woven from Roman tombs, Ottoman mosques, and elegant Zsolnay porcelain details. Beyond the urban centers, Baranya is a true sanctuary for oenophiles, with the prestigious Villány wine district producing robust red wines that rival Europe's finest. The harmonious coexistence of Hungarian, German, and Croatian communities here has fostered a uniquely rich folklore and culinary tradition.",
    "facts": [
      "The Early Christian Necropolis of Pécs, dating back to the 4th century, was designated a UNESCO World Heritage site in 2000.",
      "Villány is often referred to as the 'Bordeaux of Hungary' due to its exceptional microclimate and world-class Cabernet Franc wines.",
      "The county is home to the stunning Siklós Castle, one of the best-preserved medieval fortresses in Hungary continuously inhabited since the 13th century.",
      "Baranya experiences the highest number of sunshine hours in Hungary, significantly contributing to its thriving viticulture and agriculture."
    ]
  },
  "bacs-kiskun": {
    "desc": "Spanning the vast expanse between the Danube and Tisza rivers, Bács-Kiskun is Hungary's largest county and the quintessential embodiment of the iconic Puszta landscape. This region captures the untamed spirit of the Great Hungarian Plain, where endless horizons meet traditional horse-breeding heritage and vibrant folk customs. The Kiskunság National Park forms the ecological heart of the county, mesmerizing nature lovers with its shifting sand dunes, alkaline lakes, and diverse birdlife. At its center lies Kecskemét, a city celebrated for its breathtaking Art Nouveau architecture, such as the vividly tiled Cifra Palace. Bács-Kiskun is also a culinary powerhouse, famous worldwide for producing the aromatic Barackpálinka (apricot brandy) and robust, sun-ripened paprika.",
    "facts": [
      "Covering 8,445 square kilometers, Bács-Kiskun accounts for nearly 9 percent of Hungary's total land area.",
      "Kiskunság National Park was established in 1975 and is recognized as a UNESCO biosphere reserve preserving the traditional pastoral life.",
      "The city of Kalocsa within the county is one of the most famous paprika-producing centers globally, boasting a dedicated Paprika Museum.",
      "Kecskemét is the birthplace of the renowned composer Zoltán Kodály, housing an internationally acclaimed music institute in his honor."
    ]
  },
  "bekes": {
    "desc": "Often hailed as the 'breadbasket of Hungary,' Békés County lies in the sunlit southeastern corner of the country, bordering Romania. This remarkably flat and fertile region is defined by its rich black soil, which has supported thriving agricultural communities for centuries. The administrative center, Békéscsaba, has gained international fame not only for its tranquil charm but also for its legendary culinary export: the spicy, paprika-infused Csaba sausage. History enthusiasts are drawn to Gyula, home to Central Europe's only intact Gothic brick castle and a renowned thermal spa complex. The cultural landscape of Békés is beautifully complex, shaped by the peaceful coexistence and shared traditions of Hungarian, Slovak, Romanian, and German inhabitants.",
    "facts": [
      "Gyula Castle, built in the early 15th century, is the only Gothic lowland brick fortress that survived the Ottoman wars intact.",
      "The annual Csabai Sausage Festival attracts over 100,000 visitors, making it one of the largest gastronomic events in Eastern Europe.",
      "Békés has the lowest average elevation in Hungary, creating perfect conditions for expansive wheat and sunflower cultivation.",
      "The region is renowned for its thermal waters, with the Gyula Castle Bath offering healing pools set within a historic botanical garden."
    ]
  },
  "borsod-abauj-zemplen": {
    "desc": "Borsod-Abaúj-Zemplén, situated in northeastern Hungary, is a region of breathtaking geographical contrasts and unparalleled historical depth. It stretches from the dramatic karst formations of the Aggtelek National Park to the legendary volcanic slopes of the Tokaj wine region, the world's first demarcated wine appellation. The county's capital, Miskolc, has brilliantly transformed its heavy industrial legacy into a dynamic cultural hub, highlighted by the extraordinary Cave Bath of Miskolctapolca. Scattered across the rugged landscapes of the Bükk and Zemplén mountains are romantic medieval ruins, such as Diósgyőr Castle, which whisper tales of royal queens and fierce battles. This county provides travelers with a captivating blend of primeval nature, aristocratic heritage, and the golden nectar of Aszú wine.",
    "facts": [
      "The Aggtelek Karst and its extensive 26-kilometer Baradla Cave system were declared a UNESCO World Heritage site in 1995.",
      "Tokaj's legendary sweet Aszú wine was famously described by King Louis XIV of France as the 'Wine of Kings, King of Wines.'",
      "The Cave Bath of Miskolctapolca is a unique thermal facility naturally carved by water into a limestone cave over thousands of years.",
      "The county features Hungary's highest waterfall, the 20-meter-high artificial cascade at Lillafüred, nestled next to the picturesque Palota Hotel."
    ]
  },
  "csongrad-csanad": {
    "desc": "Bathed in glorious sunshine, Csongrád-Csanád County lies in southern Hungary, gracefully divided by the winding Tisza River. This vibrant region is celebrated as the undisputed capital of Hungarian paprika, thriving thanks to the exceptionally high number of sunny days that grace its fertile soils. The magnificent city of Szeged serves as its cultural and academic core, distinguished by its grandiose Votive Church and elegant eclectic palaces built after the devastating 1879 flood. Beyond urban sophistication, the county preserves the roots of the nation at the Ópusztaszer National Heritage Park, where the monumental Feszty Panorama depicts the arrival of the Magyars. Combining rich intellectual life, world-class thermal baths, and fiery gastronomy, Csongrád-Csanád offers a deeply authentic Hungarian experience.",
    "facts": [
      "Szeged enjoys over 2,000 hours of sunshine annually, earning it the nickname the 'City of Sunshine'.",
      "The Votive Church of Szeged is the fourth largest church in Hungary, featuring a massive organ with over 9,000 pipes.",
      "The Feszty Panorama in Ópusztaszer is a colossal circular painting measuring 15 meters in height and 120 meters in length.",
      "The region is the birthplace of the world-renowned Pick Salami, which has been produced in Szeged since 1869."
    ]
  },
  "fejer": {
    "desc": "Fejér County, located in the heart of the Central Transdanubia region, is steeped in monumental historical significance and diverse natural beauty. Its majestic capital, Székesfehérvár, holds the prestigious title of the 'City of Kings,' having witnessed the coronation of 37 Hungarian monarchs and serving as the medieval center of the kingdom. The landscape gracefully transitions from the warm, tranquil waters of Lake Velence to the densely forested slopes of the Vértes and Bakony mountains. Today, Fejér seamlessly bridges its glorious past with modern dynamism, acting as a crucial industrial and economic engine for the country. Visitors are continually enchanted by its royal ruins, elegant aristocratic estates like the Brunszvik Palace, and serene lakeside resorts.",
    "facts": [
      "Székesfehérvár was founded in 972 by Prince Géza, making it one of the oldest cities in Hungary.",
      "Lake Velence is often called the 'Lake of Sunshine' and is one of the warmest lakes in Europe, with summer water temperatures reaching 26-28°C.",
      "The Ruin Garden in Székesfehérvár preserves the foundations of the grandiose Basilica of the Assumption, a royal coronation site.",
      "Bory Castle in Martonvásár is renowned for its stunning English park and its historical association with composer Ludwig van Beethoven."
    ]
  },
  "gyor-moson-sopron": {
    "desc": "Positioned strategically at the northwestern edge of Hungary bordering Austria and Slovakia, Győr-Moson-Sopron is historically revered as the 'Gateway to the West.' The county is a dynamic fusion of high-tech industry and meticulously preserved historical marvels. Győr, the 'City of Rivers,' enchants visitors with its splendid Baroque town center and the majestic Basilica, while Sopron boasts one of the most intact medieval cores in Central Europe. The region's natural crown jewel is the vast, reed-fringed expanse of Lake Fertő (Neusiedler See), a cross-border paradise for cyclists and birdwatchers. Crowned by the monumental Pannonhalma Archabbey, this county offers an exquisite journey through centuries of architectural brilliance and ecological wealth.",
    "facts": [
      "The Millenary Benedictine Abbey of Pannonhalma, founded in 996, was inscribed as a UNESCO World Heritage site in 1996.",
      "Lake Fertő (Neusiedler See) is the largest endorheic lake in Central Europe, famous for its shallow alkaline waters.",
      "Sopron is known as the 'Most Loyal City' (Civitas Fidelissima) after its citizens voted to remain part of Hungary in a 1921 referendum.",
      "Győr lies at the confluence of three rivers: the Danube, Rába, and Rábca, giving it a unique aquatic charm."
    ]
  },
  "hajdu-bihar": {
    "desc": "Hajdú-Bihar County, dominating eastern Hungary, is the quintessential heartland of the Great Hungarian Plain, where tradition and nature converge on a massive scale. The undeniable highlight of the region is the Hortobágy National Park, an endless expanse of grassy steppe that preserves the ancient pastoral lifestyle of horsemen and herdsmen. Its vibrant capital, Debrecen, is proudly known as the 'Calvinist Rome' due to its monumental Reformed Great Church and historically independent spirit. Hajdú-Bihar has also established itself as a premier destination for wellness tourism, anchored by the colossal thermal spa complex in Hajdúszoboszló. Here, the endless horizons of the Puszta are perfectly complemented by rich cultural festivals and healing subterranean waters.",
    "facts": [
      "Hortobágy National Park is the largest continuous natural grassland in Europe, covering an impressive 800 square kilometers.",
      "Debrecen's Great Reformed Church is the largest Protestant church in Hungary, capable of seating up to 3,000 people.",
      "The Nine-Holed Bridge in Hortobágy is the longest stone bridge in historic Hungary, spanning 167 meters across the river.",
      "Hajdúszoboszló boasts Europe's largest bathing complex, featuring diverse thermal pools, an aquapark, and medical facilities."
    ]
  },
  "heves": {
    "desc": "Heves County, rising gracefully in northern Hungary, is a region defined by dramatic mountain landscapes, legendary viticulture, and heroic historical tales. It encompasses the soaring peaks of the Mátra and Bükk mountains, offering pristine forests that draw hikers and winter sports enthusiasts alike. The soul of the county is Eger, a stunning Baroque city celebrated for its successful 1552 defense against the Ottoman Empire, a victory commemorated by its imposing castle. Heves is equally famous for its world-class 'Bull's Blood' (Egri Bikavér) red wine, matured in the ancient cellar labyrinths of the Valley of the Beautiful Women. With the astonishing natural limestone terraces of the Egerszalók thermal spring, Heves presents an irresistible mix of alpine beauty, history, and hedonism.",
    "facts": [
      "Heves County is home to Kékestető, the highest peak in Hungary, reaching an elevation of 1,014 meters.",
      "Eger's northernmost Ottoman minaret in Europe stands at 40 meters tall, surviving as a fascinating architectural relic.",
      "The Egerszalók Salt Hill is a rare geological formation created by thermal waters, resembling the famous terraces of Pamukkale in Turkey.",
      "Egri Bikavér (Bull's Blood) is Hungary's most famous red wine blend, traditionally made from at least three different grape varieties."
    ]
  },
  "jasz-nagykun-szolnok": {
    "desc": "Located firmly in the heart of the Great Hungarian Plain, Jász-Nagykun-Szolnok County is a land defined by its meandering rivers, vast agrarian plains, and resilient cultural heritage. The majestic Tisza River forms the vital artery of this region, shaping both its agricultural rhythms and its vibrant water tourism. The capital city of Szolnok is a historic transport hub celebrated for its beautiful riverside promenades, thermal baths, and an important aviation museum. The county takes profound pride in its unique ethnic ancestry, tracing roots back to the medieval Jász (Iazyges) and Kun (Cumans) settlers, whose folklore still colors local festivals. A visit here is a deep dive into authentic Hungarian rural life and serene riverside tranquility.",
    "facts": [
      "Lake Tisza, partially located in the county, is Hungary's second-largest lake and an artificially created paradise for eco-tourism.",
      "The Mayfly Bridge (Tiszavirág híd) in Szolnok is the longest pedestrian and bicycle bridge in Central Europe, spanning 444 meters.",
      "Szolnok's RepTár is one of the largest aviation museums in Eastern Europe, showcasing a vast collection of military aircraft.",
      "The region's unique Cuman and Iazygian heritage is celebrated annually through vibrant traditional festivals and crafts."
    ]
  },
  "komarom-esztergom": {
    "desc": "Despite being Hungary's smallest county by area, Komárom-Esztergom stands as an absolute titan of historical and economic significance. Hugging the romantic curves of the Danube Bend along the Slovakian border, the region is dominated by the monumental Esztergom Basilica, the spiritual heart of Hungarian Catholicism and the nation's tallest building. The county offers a striking juxtaposition, blending the deep forested valleys of the Gerecse and Pilis mountains with the industrious energy of its capital, Tatabánya. Visitors can explore extensive Roman ruins at Gorsium, medieval fortresses like Tata, and impressive cross-border fort systems in Komárom. It is a dense, captivating region where ancient empires, religious power, and breathtaking river panoramas seamlessly intertwine.",
    "facts": [
      "The Esztergom Basilica is the largest church in Hungary, with a dome reaching a dizzying height of 100 meters.",
      "The Turul Monument overlooking Tatabánya is one of Europe's largest bronze bird statues, boasting a wingspan of 15 meters.",
      "The Fortress of Komárom is part of a massive, unique fortification system spanning both sides of the Danube River.",
      "Esztergom served as the capital of Hungary from the 10th until the mid-13th century and was the birthplace of Saint Stephen, the first Hungarian king."
    ]
  },
  "nograd": {
    "desc": "Tucked away in the rugged hills of northern Hungary, Nógrád County is widely celebrated as the enchanting 'Land of Castles.' This wildly romantic region is characterized by dense, mystical forests, volcanic rock formations, and an exceptionally well-preserved rural folk culture. Its administrative center, Salgótarján, is uniquely nestled in a steep valley, shaped heavily by its 19th-century coal mining history. The true crown jewel of Nógrád is the village of Hollókő, a living museum and UNESCO World Heritage site where the indigenous Palóc people continue to wear traditional costumes and practice ancient crafts. From the spectacular ruins of Somoskő Castle to its pristine hiking trails, Nógrád offers a peaceful, untouched retreat into Hungary's medieval and rustic past.",
    "facts": [
      "Hollókő is the only village in Hungary designated as a UNESCO World Heritage site, beautifully preserving its 17th-century rural architecture.",
      "The Castle of Somoskő, perched on a basalt peak, famously features unique curved basalt columns resembling a stone waterfall.",
      "Nógrád is the least populated county in Hungary, offering vast expanses of undisturbed natural landscapes.",
      "The region is the heartland of the Palóc ethnic group, renowned for their distinct dialect, colorful embroidery, and rich folklore."
    ]
  },
  "pest": {
    "desc": "Pest County envelops the Hungarian capital of Budapest like a protective embrace, serving as the country's most dynamic and populous region outside the city limits. This remarkably diverse area transitions from the dramatic, forested peaks of the Pilis and Börzsöny mountains in the north to the expansive, sandy plains of the Alföld in the south. History is elegantly preserved in the Royal Palace of Gödöllő, a favored summer retreat of Empress Sissi, and the majestic medieval citadel of Visegrád, which commands breathtaking views over the Danube Bend. Acting as the ultimate recreational playground for Budapest's residents, Pest County boasts premier equestrian parks, vibrant riverside towns like Szentendre, and a thriving modern economy. It perfectly balances regal heritage with vibrant natural escapes.",
    "facts": [
      "The Royal Palace of Gödöllő is the largest Baroque palace in Hungary and was famously loved by Empress Elisabeth of Austria (Sissi).",
      "Visegrád Castle served as the site of a historic 1335 royal summit, which inspired the modern-day Visegrád Group political alliance.",
      "The town of Szentendre is renowned for its Mediterranean atmosphere, numerous art galleries, and the impressive Hungarian Open Air Museum (Skanzen).",
      "Pest County surrounds Budapest entirely but operates as a completely separate administrative entity."
    ]
  },
  "somogy": {
    "desc": "Stretching from the sun-drenched southern shores of Lake Balaton down to the lush Drava River on the Croatian border, Somogy County is a spectacular region of leisure and untamed nature. It is widely known for hosting some of Hungary's most popular summer resorts, offering vibrant beach life, sailing, and entertainment along the 'Hungarian Sea.' Inland, the county transforms into the densely forested Zselic hills, a pristine paradise renowned for its outstanding hunting grounds and clear, starry night skies. The administrative capital, Kaposvár, charms visitors with its pedestrian-friendly, Secession-style downtown and rich theatrical traditions. Somogy is a land of pure indulgence, blending fine South Balaton wines, rich culinary traditions, and tranquil rural beauty.",
    "facts": [
      "The Zselic Starry Sky Park was one of the first areas in Europe to be recognized for its incredibly low light pollution, perfect for stargazing.",
      "Lake Balaton's southern shore, located entirely in Somogy, is famous for its shallow, quickly warming waters ideal for families.",
      "The county features one of Hungary's largest continuous forest areas, making it a premier destination for big game hunting.",
      "Siófok, the largest city on the Balaton shore, is often referred to as the 'Summer Capital of Hungary' due to its vibrant nightlife."
    ]
  },
  "szabolcs-szatmar-bereg": {
    "desc": "Tucked into the far northeastern corner of Hungary, Szabolcs-Szatmár-Bereg is a captivating borderland where Hungarian, Ukrainian, Slovak, and Romanian influences elegantly converge. This deeply traditional region is defined by the winding, untamed waters of the Upper Tisza River and the endless, fragrant apple and plum orchards that fuel its famous pálinka production. The vibrant capital, Nyíregyháza, is celebrated for its spectacular, world-class zoo and the restorative thermal waters of the Sóstó forest resort. Dotted across the rural landscape are priceless architectural gems, including unique medieval wooden churches featuring intricate painted ceilings and standalone belfries. Untouched by mass tourism, this county offers a deeply authentic, hospitable, and spiritually rich Hungarian countryside experience.",
    "facts": [
      "Nyíregyháza Zoo is consistently ranked among the best in Europe, housing over 500 species in massive, naturalistic habitats.",
      "The region is famously known for its Szatmári Plum Pálinka and Szabolcsi Apple Pálinka, both holding protected geographical statuses.",
      "The county boasts the 'Route of Medieval Churches,' showcasing stunning, centuries-old wooden bell towers and brightly painted sanctuaries.",
      "It is the only Hungarian county that shares a border with three different sovereign nations: Slovakia, Ukraine, and Romania."
    ]
  },
  "tolna": {
    "desc": "Tolna County, resting gracefully on the western banks of the Danube, is a region of serene beauty, undulating hills, and fiercely guarded cultural heritage. Though relatively small, it punches above its weight in the world of Hungarian viticulture, with its capital, Szekszárd, being celebrated globally for its complex, spicy red wines like the Kadarka. The county's geography is famously dominated by the Gemenc Forest, a breathtaking, primeval floodplain that floods regularly, creating a vital sanctuary for red deer, black storks, and wild boars. The local identity is deeply influenced by the historical presence of the Danube Swabians, whose meticulous architectural style and culinary influence remain visible in the quaint villages. Tolna is a peaceful haven for wine connoisseurs, nature photographers, and those seeking quiet, authentic charm.",
    "facts": [
      "The Gemenc Forest is the largest continuous floodplain forest in Central Europe, best explored via its nostalgic narrow-gauge forest railway.",
      "Szekszárd is one of Hungary's oldest wine regions, famously praised by composer Franz Liszt who frequently enjoyed its Kadarka wine.",
      "The county is home to the Paks Nuclear Power Plant, which generates approximately half of Hungary's total electrical power output.",
      "The village of Decs features uniquely painted houses and serves as a center for the traditional, vibrant folklore of the Sárköz region."
    ]
  },
  "vas": {
    "desc": "Nestled in the far western reaches of Hungary against the Austrian and Slovenian borders, Vas County is a magnificent blend of alpine freshness, thermal opulence, and deep historical resonance. The landscape is defined by the lush, rolling foothills of the Alps, offering dense pine forests and crystal-clear streams that are perfect for hiking and cycling. Its capital, Szombathely, holds the proud title of Hungary's oldest city, boasting a rich Roman legacy as the ancient provincial capital of Savaria. Today, Vas is perhaps best known internationally as a premier wellness destination, anchored by the legendary, healing thermal waters of Bükfürdő and Sárvár. Visitors here experience an elegant harmony of magnificent aristocratic castles, pristine nature, and world-class spa relaxation.",
    "facts": [
      "Szombathely was founded by the Romans in 43 AD under Emperor Claudius, making it the oldest recorded city in Hungary.",
      "The thermal bath of Bükfürdő is one of the largest spa complexes in Europe, featuring water rich in alkali-hydrogen carbonates.",
      "Kőszeg, famously known as the 'Jewel Box of Hungary,' successfully delayed the massive Ottoman army's advance on Vienna in 1532.",
      "The Jeli Arboretum in Vas County is famous for its breathtaking rhododendron blooming in May, covering the forest in vibrant colors."
    ]
  },
  "veszprem": {
    "desc": "Veszprém County, positioned majestically in the heart of Transdanubia, is a region of sweeping geographical drama and profound historical elegance. It commands the breathtaking northern shore of Lake Balaton, where ancient volcanic cones like Badacsony slope dramatically down to the water, creating a world-class terroir for crisp white wines. The county's capital, Veszprém, famously known as the 'City of Queens,' is built gracefully atop five hills and boasts a beautifully preserved medieval castle district. Beyond the lake, the dense, romantic forests of the Bakony Mountains offer legendary hiking trails and a rich folklore history of 19th-century highwaymen. Balancing spiritual heritage, such as the Tihany Abbey, with vibrant sailing culture and gastronomy, Veszprém is a pinnacle of Hungarian tourism.",
    "facts": [
      "Veszprém served as the prestigious 2023 European Capital of Culture, highlighting its dynamic arts scene and historical significance.",
      "The Tihany Peninsula, extending deep into Lake Balaton, was designated as Hungary's very first protected landscape area in 1952.",
      "The Herend Porcelain Manufactory, located in the county, has been producing exquisite, hand-painted luxury porcelain favored by royalty since 1826.",
      "The volcanic basalt organ pipes of Badacsony Hill provide both a stunning geological sight and a unique microclimate for viticulture."
    ]
  },
  "zala": {
    "desc": "Tucked away in the extreme southwestern corner of Hungary, Zala County is an enchanting mosaic of rolling green hills, dense woodlands, and unparalleled thermal treasures. Bordering three countries, it has historically absorbed diverse cultural influences, creating a rich local tradition visible in its charming village museums and distinctive folk architecture. The capital, Zalaegerszeg, is a peaceful, leafy city that serves as an excellent base for exploring the region's natural wonders. Zala's absolute crown jewel is Hévíz, home to the largest biologically active, natural thermal lake in the world, drawing health-seekers year-round. Combined with the aristocratic splendor of the Festetics Palace in Keszthely on the shores of Lake Balaton, Zala is a sanctuary of elegance, healing, and tranquility.",
    "facts": [
      "Lake Hévíz covers 4.4 hectares and its geothermal water is so warm that visitors can comfortably swim outdoors even in the middle of winter.",
      "The Festetics Palace in Keszthely is Hungary's third-largest and most beautifully restored aristocratic mansion, featuring a stunning historical library.",
      "The Göcsej Village Museum in Zalaegerszeg was Hungary's first open-air museum, showcasing unique regional wooden architecture.",
      "Zala County was a major center for Hungary's early oil industry, a history extensively documented in local industrial museums."
    ]
  },
  "budapest-city": {
    "desc": "Budapest, the radiant capital of Hungary, stands as a mesmerizing architectural masterpiece gracefully bisected by the majestic Danube River. Born from the historic 1873 unification of the hilly, imperial Buda and the flat, bustling Pest, the city offers an unparalleled contrast of atmospheres. Visitors are captivated by its grandiose landmarks, from the imposing Neo-Gothic Parliament Building to the fairytale spires of the Fisherman's Bastion. Budapest is uniquely blessed with an abundance of natural hot springs, fueling a legendary spa culture showcased in the palatial Széchenyi and Gellért baths. With its vibrant ruin bars, elegant Art Nouveau boulevards, and deep-rooted café culture, this UNESCO World Heritage city is a thriving, unforgettable European metropolis.",
    "facts": [
      "Budapest is home to the largest geothermal cave system in the world, with over 200 caves hidden beneath the city.",
      "The Hungarian Parliament Building took 17 years to complete and features exactly 365 Gothic spires and 691 rooms.",
      "Budapest's Millennium Underground Railway, completed in 1896, is the second-oldest underground railway system in the world after London.",
      "The city boasts the largest synagogue in Europe, the Dohány Street Synagogue, which can accommodate up to 3,000 worshippers."
    ]
  },
  "budai-var": {
    "desc": "Perched majestically atop Castle Hill, the Buda Castle complex is a monumental emblem of Hungary's resilient and dramatic history. This grandiose palace has served as the residence of Hungarian kings since the 13th century, though it has been destroyed and rebuilt in various architectural styles, from Gothic to sweeping Neo-Baroque. Today, the palace houses world-class cultural institutions, including the Hungarian National Gallery and the Budapest History Museum. Strolling through the surrounding cobblestone streets of the Castle District feels like stepping back in time, framed by elegant pastel-colored townhouses and historic cafes. The castle terraces offer the most iconic, panoramic views over the winding Danube and the sprawling Pest skyline.",
    "facts": [
      "Buda Castle and its surrounding district were collectively designated as a UNESCO World Heritage site in 1987.",
      "Beneath the castle lies a fascinating six-mile-long labyrinth of natural caves used historically as wine cellars, bomb shelters, and prisons.",
      "The iconic Funicular Railway (Sikló) has been transporting visitors up the steep hill to the castle since 1870.",
      "During World War II, the palace was heavily damaged during the Siege of Budapest and underwent decades of meticulous restoration."
    ]
  },
  "orszaghaz": {
    "desc": "The Hungarian Parliament Building (Országház) is a dazzling masterpiece of Neo-Gothic architecture and the undisputed crown jewel of the Budapest riverfront. Designed by the visionary architect Imre Steindl, this colossal structure was inaugurated to celebrate the 1896 Hungarian Millennium, symbolizing the nation's independence and democratic aspirations. Its intricate, highly symmetrical facade stretches majestically along the Danube, adorned with 90 statues of Hungarian rulers and military commanders. Inside, the sheer opulence is staggering, featuring nearly 40 kilograms of 22-carat gold detailing and grand sweeping staircases. Housing the precious Holy Crown of Hungary, the building is not only a functional legislative seat but a revered national shrine.",
    "facts": [
      "The Parliament Building is the third-largest national assembly building in the world and the tallest building in Budapest, tied with St. Stephen's Basilica at 96 meters.",
      "It features an astonishing 20 kilometers of stairs, 691 rooms, and 242 sculptures adorning its intricate interior and exterior.",
      "The building's unique central dome utilizes a complex double-shell construction, supported by a 16-sided ribbed vault.",
      "The Holy Crown of Hungary, displayed in the central Dome Hall, has been continuously guarded by the Crown Guard since the year 2000."
    ]
  },
  "hosok-tere": {
    "desc": "Heroes' Square (Hősök tere) is the largest and most dramatically symbolic public square in Budapest, anchoring the end of the elegant Andrássy Avenue. Built to commemorate the 1,000th anniversary of the Magyar conquest of the Carpathian Basin, the square exudes a profound sense of national pride and history. Its focal point is the towering Millennium Monument, crowned by the Archangel Gabriel holding the Holy Crown, while the base features the fierce equestrian statues of the seven Magyar chieftains. The square is elegantly framed by two magnificent Neoclassical buildings: the Museum of Fine Arts and the Palace of Art. Today, it serves as an awe-inspiring gateway to the City Park and a popular venue for major national celebrations.",
    "facts": [
      "The construction of the Millennium Monument began in 1896 but was only fully completed and inaugurated in 1929.",
      "The semi-circular colonnades behind the main column feature 14 statues of prominent Hungarian kings, heroes, and statesmen.",
      "Beneath the towering central column lies the Tomb of the Unknown Soldier, a solemn tribute to Hungary's fallen heroes.",
      "Heroes' Square, along with Andrássy Avenue, was inscribed on the UNESCO World Heritage list in 2002."
    ]
  },
  "dunapart": {
    "desc": "The Danube Promenade in Budapest offers one of the most mesmerizing and architecturally spectacular urban waterfronts in the world. Stretching elegantly along the Pest side of the river between the Elizabeth and Chain bridges, it provides uninterrupted, panoramic views of the majestic Buda Castle and Gellért Hill. In the late 19th and early 20th centuries, this walkway was the epicenter of high society, lined with grandiose hotels, bustling cafes, and elegant casinos. Today, it remains a beloved pedestrian route where the magical glow of the illuminated bridges reflects off the water at night. It is also a place of profound reflection, home to the deeply moving 'Shoes on the Danube Bank' Holocaust memorial.",
    "facts": [
      "The entire central panorama of the Danube riverbanks in Budapest has been protected as a UNESCO World Heritage site since 1987.",
      "The 'Shoes on the Danube Bank' memorial consists of 60 pairs of iron cast shoes honoring the Jewish victims murdered there during WWII.",
      "The iconic Vigadó Concert Hall, located along the promenade, is a masterpiece of Hungarian Romantic architecture opened in 1865.",
      "Historically, the promenade was famous for its row of luxury hotels, including the original Ritz and Grand Hotel Hungaria, which were destroyed in WWII."
    ]
  },
  "margitsziget": {
    "desc": "Margaret Island is a lush, tranquil oasis floating in the middle of the Danube River, serving as Budapest's premier recreational retreat. Spanning just over 2.5 kilometers in length, this predominantly car-free island offers an idyllic escape from the bustling city noise. It boasts sweeping English-style landscape parks, centuries-old plane trees, and fascinating medieval ruins of a Franciscan church and a Dominican convent. Visitors flock to the island to enjoy its famous musical fountain, the expansive Palatinus thermal bath complex, and a scenic Japanese garden. Whether utilized for a peaceful afternoon stroll or an energetic run along its professional rubberized track, Margaret Island represents the green lungs of the Hungarian capital.",
    "facts": [
      "The island is named after Saint Margaret, the daughter of King Béla IV, who lived a secluded life in a convent here in the 13th century.",
      "The island's 5.3-kilometer-long rubberized running track is considered one of the best and most scenic urban jogging routes in Europe.",
      "The Musical Fountain on the southern end performs synchronized water shows set to classical and modern music, spectacularly illuminated at night.",
      "The octagonal Water Tower, built in 1911 in Art Nouveau style, is a protected UNESCO monument functioning today as a lookout tower and exhibition hall."
    ]
  },
  "varosliget": {
    "desc": "City Park (Városliget) is a historic, sprawling recreational haven located right behind Heroes' Square in the heart of Budapest. Originally a royal hunting ground, it was transformed into one of the world's first public parks in the early 19th century, seamlessly blending natural beauty with architectural grandeur. It is home to iconic attractions such as the fairytale-like Vajdahunyad Castle, showcasing different Hungarian architectural styles, and the opulent Széchenyi Thermal Bath. During winter, the park's picturesque boating lake freezes over to become Europe's largest open-air ice skating rink. Recently revitalized through the ambitious Liget Project, the park now also features cutting-edge cultural venues like the futuristic House of Hungarian Music.",
    "facts": [
      "Vajdahunyad Castle was originally built out of cardboard and wood for the 1896 Millennium Exhibition but was later rebuilt in stone due to its massive popularity.",
      "The Széchenyi Thermal Bath is the largest medicinal bath in Europe, featuring 15 indoor pools and 3 massive outdoor pools.",
      "The Budapest Zoo and Botanical Garden, located within the park, opened in 1866, making it one of the oldest zoos in the world.",
      "The park's artificial ice rink (Városligeti Műjégpálya) has been operating since 1870 and is set against a stunning Neo-Baroque backdrop."
    ]
  },
  "andrassy-ut": {
    "desc": "Andrássy Avenue is Budapest's most glamorous and prestigious boulevard, a grand architectural statement designed to rival the elegance of Paris. Stretching 2.4 kilometers from the vibrant city center directly to Heroes' Square, it was masterfully constructed during the booming late 19th-century Austro-Hungarian Empire. The avenue is flanked by magnificent Neo-Renaissance palaces, exclusive high-end boutiques, and diplomatic embassies, exuding an air of historic aristocratic wealth. It is also the cultural spine of the city, housing the magnificent Hungarian State Opera House and the haunting House of Terror museum. Walking down Andrássy Avenue is an immersive journey through the golden age of Hungarian architecture and urban planning.",
    "facts": [
      "Andrássy Avenue, along with its historic surroundings, was officially inscribed as a UNESCO World Heritage site in 2002.",
      "The Millennium Underground Railway (M1) running beneath the avenue is the oldest electrified subway line in continental Europe, opening in 1896.",
      "The Hungarian State Opera House, located on the avenue, features opulent interiors with over 3 kilograms of gold leaf decorating its auditorium.",
      "The avenue was briefly renamed several times during the 20th century, including 'Stalin Avenue' and 'Avenue of the Republic,' before regaining its original name in 1990."
    ]
  },
  "nyugati-palyaudvar": {
    "desc": "The Nyugati Railway Station (Western Railway Station) is a triumph of 19th-century engineering and one of the most striking architectural landmarks in Budapest. Designed by the Paris-based Eiffel Company—years before they built the famous Eiffel Tower—the station was opened in 1877 to great acclaim. Its monumental facade masterfully combines elegant ironwork with expansive glass, creating a grand, light-filled departure hall that revolutionized railway design in Hungary. Functioning as a vital transport hub connecting Budapest to the wider world, the station buzzes with daily commuter energy. Remarkably, one of its elegantly restored, high-ceilinged waiting rooms is now home to what is often called the most beautiful fast-food restaurant in the world.",
    "facts": [
      "The station was constructed directly over the top of a previous, smaller station so that train traffic could continue uninterrupted during building.",
      "Auguste de Serres, an architect working for Gustave Eiffel, was the primary designer of the station's iconic iron structure.",
      "The elegant McDonald's located in the station's southern wing opened in 1988 and features antique lamps, stucco ceilings, and leather seating.",
      "In 2021, the station underwent a massive restoration project to clean and repair its intricate glass and steel roof structure."
    ]
  },
  "lanchid": {
    "desc": "The Széchenyi Chain Bridge is the majestic, undisputed symbol of Budapest, elegantly connecting the hills of Buda with the plains of Pest across the Danube. Completed in 1849, it was the very first permanent stone bridge to span the river in Hungary, a monumental achievement that paved the way for the unification of the two cities. Initiated by the visionary Count István Széchenyi, the bridge's classicist design features massive stone towers and sweeping iron chains, guarded at both ends by iconic, silent stone lions. Walking across this historic structure offers an unforgettable, romantic experience with breathtaking views of the Parliament and Castle Hill. It stands not merely as a crossing, but as a monument to Hungarian progress and national pride.",
    "facts": [
      "At the time of its construction, the Chain Bridge was regarded as an engineering marvel and was one of the largest suspension bridges in the world.",
      "According to a popular urban legend, the sculptor of the guardian lions threw himself into the Danube when it was pointed out that the lions had no tongues.",
      "The bridge was completely blown up by retreating German troops at the end of World War II and was rebuilt and reopened exactly 100 years after its original inauguration.",
      "The bridge is beautifully illuminated at night, transforming the iron chains into a glowing necklace draped across the river."
    ]
  },
  "pecs": {
    "desc": "Nestled in the lush foothills of the Mecsek Mountains, Pécs is a captivating city where over two millennia of history seamlessly intertwine. Often characterized by its warm, Mediterranean-like climate, the city is a treasure trove of architectural diversity, founded originally by the Romans as the provincial capital of Sopianae. Its vibrant downtown area masterfully blends early Christian burial chambers, majestic Gothic cathedrals, and perfectly preserved 16th-century Ottoman mosques. Beyond its ancient stones, Pécs is internationally celebrated for its artistic soul, epitomized by the colorful, frost-resistant eosin ceramics produced at the legendary Zsolnay Porcelain Manufactory. Voted the European Capital of Culture in 2010, Pécs remains a thriving, youthful university town brimming with creative energy.",
    "facts": [
      "The Early Christian Necropolis of Pécs, featuring painted burial chambers from the 4th century, is a recognized UNESCO World Heritage site.",
      "The Mosque of Pasha Qasim is the largest Ottoman building remaining in Hungary, now functioning uniquely as a Catholic church.",
      "The Zsolnay Cultural Quarter, built in the revitalized porcelain factory grounds, is one of the largest cultural centers in Central Europe.",
      "Pécs is home to the first university founded in Hungary, established by King Louis the Great in 1367."
    ]
  },
  "siklos": {
    "desc": "Siklós is an incredibly charming town situated in Hungary's sun-kissed southern region, renowned for its pristine viticulture and formidable historical legacy. The town is proudly dominated by the magnificent Siklós Castle, one of the few medieval fortresses in the country that survived centuries of warfare in a remarkable state of preservation. Within its robust stone walls, visitors can explore a fascinating blend of Romanesque, Gothic, and Renaissance architecture, complete with an elegant 15th-century chapel. Just beyond the castle's shadow lies the celebrated thermal spa of Harkány and the prestigious Villány wine region. Siklós offers an idyllic retreat where travelers can immerse themselves in medieval history before relaxing with world-class local red wines.",
    "facts": [
      "Siklós Castle has been continuously inhabited since the 13th century, avoiding the destruction that ruined many other Hungarian forts.",
      "The castle features a beautiful enclosed balcony (oriel window) that is considered a masterpiece of Hungarian Renaissance architecture.",
      "The town is home to the beautifully restored 16th-century Malkoç Bey Mosque, a rare relic of the 150-year Ottoman occupation.",
      "Siklós serves as the western gateway to the Villány wine region, which is globally acclaimed for its premium Cabernet Franc."
    ]
  },
  "mohacs": {
    "desc": "Situated on the peaceful banks of the sweeping Danube River, Mohács is a town deeply ingrained in the historical consciousness of Hungary. It is the site of the tragic 1526 Battle of Mohács, a monumental clash against the Ottoman Empire that permanently altered the course of Hungarian history. Today, an evocative memorial park stands on the battlefield, serving as a solemn tribute to the fallen king and soldiers. Yet, Mohács is not only defined by its past; it bursts into vibrant life every winter during the UNESCO-recognized Busójárás festival. During this raucous carnival, locals don frightening carved wooden masks and sheepskin cloaks to scare away the winter, showcasing a unique and thrilling tradition.",
    "facts": [
      "The Busójárás festival was inscribed on the UNESCO Representative List of the Intangible Cultural Heritage of Humanity in 2009.",
      "The Mohács Historical Memorial Park features haunting, beautifully carved wooden statues representing the soldiers who perished in 1526.",
      "Mohács is one of Hungary's most important southern port towns on the Danube, facilitating significant international river trade.",
      "The town's grand Votive Church was built in the 20th century to commemorate the 400th anniversary of the historic battle."
    ]
  },
  "villany": {
    "desc": "Villány is an enchanting, sun-drenched town in southern Hungary that stands as the undisputed champion of the nation's red wine production. Blessed with a unique sub-Mediterranean microclimate and rich loess soil, the rolling hills surrounding the town offer the perfect terroir for full-bodied, robust red wines. The town itself is incredibly picturesque, famous for its historic row of traditional wine cellars that line the main street, inviting visitors for endless tastings and gastronomic delights. Villány has successfully modernized its wine industry while retaining its rustic charm, drawing oenophiles from across the globe to sample its legendary Cabernet Franc. It represents the absolute pinnacle of Hungarian viticultural hospitality and rural elegance.",
    "facts": [
      "Villány was the very first wine region in Hungary to establish a fully regulated, European-style wine route in 1994.",
      "The region's signature wine is the 'Villányi Franc' (Cabernet Franc), which international critics argue finds its ultimate expression here.",
      "The historic cellar row features multi-level, interconnected underground vaults carved directly into the hillside over centuries.",
      "Every October, the town hosts the massive Villány Red Wine Festival, celebrating the harvest with parades, concerts, and unlimited wine tasting."
    ]
  },
  "kecskemet": {
    "desc": "Rising from the golden sands of the Great Hungarian Plain, Kecskemét is an exceptionally vibrant city celebrated for its stunning architectural beauty and agricultural bounty. Often referred to as the 'Capital of the Puszta,' the city's downtown is a dazzling open-air museum of Hungarian Art Nouveau, characterized by colorful ceramics, floral motifs, and the whimsical, vividly tiled Cifra Palace. Kecskemét is equally famous as an international music hub, serving as the birthplace of composer Zoltán Kodály and home to the globally respected Kodály Institute. Surrounded by vast orchards, the city is synonymous with the production of Barackpálinka, an exquisite apricot brandy. It effortlessly combines rural hospitality, world-class music, and breathtaking historicist architecture.",
    "facts": [
      "The Cifra Palace (Cifrapalota), built in 1902, is covered in vibrant Zsolnay majolica tiles featuring traditional Hungarian folk motifs.",
      "Kecskemét's historic City Hall features a unique carillon of 37 bells that plays works by Mozart, Beethoven, and Kodály daily.",
      "The city is a major center for Hungarian animation and famously produced the beloved 'Hungarian Folk Tales' cartoon series.",
      "Kecskemét is economically crucial to modern Hungary, hosting a massive Mercedes-Benz manufacturing plant that drives the regional economy."
    ]
  },
  "kalocsa": {
    "desc": "Kalocsa is one of Hungary's oldest and most culturally vibrant towns, beautifully situated near the eastern banks of the Danube. With over a thousand years of history, it serves as one of the four Catholic archbishoprics in Hungary, boasting a monumental Baroque cathedral and a breathtaking Archbishop's Palace housing an incredibly rare library. However, Kalocsa's true global fame comes from its fiery agricultural treasure: Hungarian paprika. The town's vibrant identity is intricately tied to this red spice and the exquisite, colorful floral embroidery that local women have perfected over generations. A visit to Kalocsa offers a brilliant immersion into high ecclesiastical art and the fiery, colorful soul of Hungarian folklore.",
    "facts": [
      "Kalocsa's Archbishop's Library holds over 100,000 ancient volumes, including rare medieval codices and a Bible signed by Martin Luther.",
      "The Kalocsa Paprika Museum is the only museum in the world dedicated entirely to the history, cultivation, and processing of the spice.",
      "The town's famous floral embroidery, featuring bright red, pink, and green roses, is officially recognized as a Hungarikum.",
      "The Kalocsa Cathedral was rebuilt multiple times over the centuries; the current magnificent Baroque structure was completed in the 1750s."
    ]
  },
  "kiskunmajsa": {
    "desc": "Tucked into the sandy heartlands of the Great Hungarian Plain, Kiskunmajsa is a tranquil town that has become a beloved sanctuary for wellness and relaxation. The town's atmosphere is deeply rooted in the historical traditions of the Kiskunság region, offering an authentic glimpse into the peaceful, slower pace of rural Hungarian life. Its primary attraction is the expansive Jonathermál medicinal bath complex, which draws visitors year-round to its soothing, mineral-rich thermal waters. Surrounded by lush forests, fishing lakes, and extensive cycling paths, Kiskunmajsa provides a perfect escape from urban stress. It is a place where traditional Puszta hospitality and rejuvenating geothermal energy meet flawlessly.",
    "facts": [
      "The Jonathermál bath complex features a 38°C medicinal pool whose waters are scientifically proven to help treat rheumatic and joint diseases.",
      "The town is home to the '56 Museum, one of the few museums outside Budapest dedicated entirely to the 1956 Hungarian Revolution.",
      "Kiskunmajsa celebrates its agricultural roots with regular traditional farmers' markets and vibrant equestrian shows.",
      "The local thermal water was discovered purely by accident in the 1960s during exploratory drilling for crude oil."
    ]
  },
  "bekescsaba": {
    "desc": "Békéscsaba is a thriving, culturally rich city located in the heart of Hungary's fertile southeastern plains. Known affectionately as the capital of the 'Viharsarok' (Stormy Corner), it is celebrated internationally for its gastronomic heritage, most notably the spicy and highly prized Csabai sausage. The city's broad, tree-lined avenues and peaceful parks reflect the harmonious, centuries-old coexistence of its Hungarian and Slovak populations, which heavily influences local architecture and traditions. Visitors can explore the legacy of the famous Hungarian realist painter Mihály Munkácsy at the city's dedicated museum, or simply enjoy the relaxed, rural charm. Békéscsaba is a deeply authentic destination offering an unparalleled taste of the true Hungarian countryside.",
    "facts": [
      "The annual Csabai Sausage Festival, held in October, is one of Hungary's largest gastronomic events, drawing competitors from all over Europe.",
      "The Munkácsy Mihály Museum houses the world's largest collection of personal artifacts and paintings of the renowned 19th-century artist.",
      "Békéscsaba features the largest Slovak Evangelical Church in Central Europe, capable of holding thousands of worshippers.",
      "The city is a central hub for cycling tourism, with extensive flat bike paths connecting it easily to nearby historic towns like Gyula."
    ]
  },
  "gyula": {
    "desc": "Nestled elegantly near the Romanian border, Gyula is a historic spa town that epitomizes the perfect harmony of medieval heritage and modern wellness. The town's crowning glory is the Gyula Castle, the only fully intact Gothic lowland brick fortress remaining in Central Europe, which beautifully reflects in its surrounding boating lake. Right next door lies the spectacular Gyula Castle Bath, an expansive thermal complex naturally integrated into a lush, 200-year-old botanical park. The town's atmosphere is wonderfully relaxed, characterized by charming fountains, vibrant flower beds, and the famous 100-year-old sweet shop (Százéves Cukrászda). Gyula provides travelers with a romantic, restorative retreat deeply enriched by authentic history and legendary local gastronomy.",
    "facts": [
      "Gyula Castle was built in the 15th century and miraculously survived both the Ottoman occupation and the ravages of World War II.",
      "The Gyula Castle Bath offers over 70 different treatments using alkaline-hydrocarbonate thermal water that rises from 2,000 meters deep.",
      "The 'Hundred-Year-Old Confectionery' is Hungary's second oldest operational pastry shop, retaining its original Biedermeier furnishings from 1840.",
      "Gyula is the birthplace of Ferenc Erkel, one of Hungary's greatest composers and the creator of the Hungarian national anthem."
    ]
  },
  "szarvas": {
    "desc": "Situated on the serene backwaters of the Körös River, Szarvas is a picturesque town that offers an extraordinary blend of botanical beauty and complex history. Widely regarded as the geographical center of historical, pre-Trianon Hungary, the town holds deep emotional significance. It is most famous for the spectacular Szarvas Arboretum (Pepi Garden), a sprawling riverside botanical park that boasts an unparalleled collection of rare trees and exotic plants. Recently, the town has gained popularity for its intricate Mini Hungary park, which features incredibly detailed scale models of the country's most famous buildings. Szarvas is a peaceful, watery oasis perfect for nature lovers, kayakers, and those seeking quiet reflection.",
    "facts": [
      "The Szarvas Arboretum is Hungary's largest botanical garden, spanning 82 hectares and containing over 1,600 species of trees and shrubs.",
      "The Mini Hungary model park features interactive, moving models of trains and ships alongside detailed replicas of historic architecture.",
      "A unique monument shaped like a windmill marks the exact geographical center of the historic Kingdom of Hungary in Szarvas.",
      "The town features an incredible Water Theatre, built directly on the banks of the river, hosting spectacular outdoor performances all summer."
    ]
  },
  "miskolc": {
    "desc": "Miskolc, Hungary's fourth-largest city, is a fascinating destination that has masterfully reinvented itself from a heavy industrial powerhouse into a dynamic center for nature and culture. Nestled at the eastern foothills of the Bükk Mountains, the city offers unparalleled proximity to stunning alpine landscapes and pristine forests. Its most famous attraction is the Miskolctapolca Cave Bath, a spectacular thermal spa situated within naturally carved limestone caverns. History comes alive at the majestic ruins of Diósgyőr Castle, a favorite medieval retreat of Hungarian queens. From the romantic lakeside resort of Lillafüred to a thriving downtown cultural scene, Miskolc consistently surprises visitors with its diverse beauty and hidden treasures.",
    "facts": [
      "The Miskolctapolca Cave Bath is a unique geological phenomenon where visitors can swim in naturally heated water winding through subterranean rock tunnels.",
      "Diósgyőr Castle features one of the largest tournament jousting arenas in Central Europe, hosting spectacular medieval festivals annually.",
      "The Lillafüred Forest Train is one of the most romantic narrow-gauge railways in Hungary, winding through deep valleys and dark tunnels.",
      "The National Theatre of Miskolc, built in 1823, is the oldest stone-built theater in the territory of present-day Hungary."
    ]
  },
  "szerencs": {
    "desc": "Szerencs is a deeply historic town that proudly serves as the southern gateway to the legendary Tokaj wine region in northeastern Hungary. Rich in aristocratic heritage, the town's focal point is the impressive Rákóczi Castle, a beautifully restored Renaissance fortress that played a pivotal role in the early modern history of Transylvania and Hungary. For generations of Hungarians, the name Szerencs is intimately associated with sweetness, owing to its famous chocolate factory that produced iconic national candies for decades. Today, visitors can explore intriguing historical exhibitions within the castle walls, including a massive postcard collection, before venturing into the surrounding volcanic vineyards. It is a town where sweet nostalgia meets noble history.",
    "facts": [
      "Szerencs Castle hosted the 1605 parliament that elected István Bocskai as the Prince of Transylvania and Hungary.",
      "The Zemplén Museum inside the castle houses the world's third-largest collection of historical postcards, containing over one million items.",
      "The local chocolate factory, established in 1923, created the iconic Hungarian 'Boci' chocolate and classic retro bonbons.",
      "The town features a remarkably preserved, functioning 18th-century Calvinist church showcasing intricate, painted wooden ceilings."
    ]
  },
  "tokaj": {
    "desc": "Tokaj is an iconic, enchanting town situated at the picturesque confluence of the Tisza and Bodrog rivers, nestled beneath the imposing, volcanic Mount Tokaj. It is the heart and namesake of the Tokaj-Hegyalja wine region, a UNESCO World Heritage site and the birthplace of the world's oldest demarcated wine appellation. For centuries, the town's historic, mold-covered cellar labyrinths have produced the legendary Aszú, a luxuriously sweet wine favored by European royalty from Louis XIV to Peter the Great. The town features a beautifully preserved, historicist downtown dotted with charming wine bars, elegant merchant houses, and traditional fish restaurants. Tokaj is an absolute pilgrimage site for global wine connoisseurs and lovers of romantic river landscapes.",
    "facts": [
      "The Tokaj wine region was officially classified in 1730, making it the first legally demarcated wine region in the world, predating Bordeaux.",
      "Tokaj Aszú wine is uniquely produced using grapes affected by 'noble rot' (Botrytis cinerea), which concentrates their natural sugars.",
      "The historic Rákóczi Cellar in Tokaj is a vast underground labyrinth that spans over 1.5 kilometers and can store thousands of barrels.",
      "The town and its surrounding vineyards were declared a UNESCO World Heritage cultural landscape in 2002 for their historical viticulture."
    ]
  },
  "aggtelek": {
    "desc": "Aggtelek is a small, idyllic village in northern Hungary that serves as the gateway to one of the most awe-inspiring subterranean landscapes in Europe. It is the heart of the Aggtelek National Park, a protected karst region world-renowned for its vast, spectacular limestone cave systems. The undisputed star of the park is the colossal Baradla Cave, a mesmerizing underground world of giant stalactites, stalagmites, and cavernous halls that stretches across the border into Slovakia. Above ground, the park offers pristine, deeply forested hiking trails, diverse wildlife, and peaceful traditional villages. A journey to Aggtelek provides a breathtaking descent into the ancient, silent, and beautifully sculptured bowels of the earth.",
    "facts": [
      "The Caves of Aggtelek Karst and Slovak Karst were jointly inscribed as a UNESCO World Heritage site in 1995.",
      "The Baradla Cave system is over 26 kilometers long, making it the longest stalactite cave system in Hungary.",
      "The 'Concert Hall' inside the Baradla Cave boasts such incredible natural acoustics that classical music concerts are regularly held underground.",
      "The national park is highly dedicated to conservation, protecting rare species such as the hucul horse and the elusive European lynx."
    ]
  },
  "szeged": {
    "desc": "Szeged, proudly known as the 'City of Sunshine,' is an architectural jewel located in southern Hungary at the scenic confluence of the Tisza and Maros rivers. Following a catastrophic flood in 1879 that destroyed most of the city, Szeged was completely rebuilt with international help, resulting in a stunningly cohesive, elegant cityscape of wide boulevards and Art Nouveau palaces. The city's skyline is dominated by the awe-inspiring Votive Church, fronting a massive square that hosts Hungary's most famous open-air theater festival every summer. Szeged is also a thriving university town, buzzing with youthful energy, and is globally recognized as the ultimate home of spicy Hungarian paprika and the legendary Pick Salami.",
    "facts": [
      "The Votive Church (Szeged Cathedral) was built as a pledge by the city's survivors of the devastating 1879 Great Flood.",
      "The central Dóm Square is exactly the same size as St. Mark's Square in Venice and is surrounded by an impressive academic arcade.",
      "Szeged's New Synagogue, built in 1903, is considered one of the most beautiful Art Nouveau synagogues in the world.",
      "The city is a renowned gastronomic capital, famous for its fiery 'Halászlé' (Fisherman's Soup) traditionally cooked in cauldrons over open fires."
    ]
  },
  "hodmezovasarhely": {
    "desc": "Hódmezővásárhely is a spacious, historically wealthy agricultural city located in southern Hungary, deeply characterized by its strong civic pride and traditional roots. With a vast municipal area that includes expansive farmlands and picturesque farmsteads, the city has been shaped by generations of independent, fiercely proud farmers. The downtown area presents a beautifully serene architectural harmony, featuring elegant public buildings, leafy squares, and an eclectic mix of late 19th-century mansions. The city is highly respected for its thriving arts community, historically hosting the prominent 'Alföld School' of painters, and for its rich local pottery traditions. Hódmezővásárhely offers an unhurried, culturally sophisticated slice of authentic Great Plain lifestyle.",
    "facts": [
      "Hódmezővásárhely has a unique settlement structure, historically comprising a densely built downtown surrounded by hundreds of isolated, traditional farmsteads (tanyák).",
      "The city is famous for its distinctive local majolica pottery, known for its vibrant floral patterns and unique glazing techniques.",
      "The annual Autumn Exhibition in Hódmezővásárhely is one of Hungary's oldest and most prestigious contemporary fine arts showcases.",
      "The city features the impressive Emlékpont (Point of Remembrance) museum, dedicated to exploring the local impacts of 20th-century totalitarian regimes."
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
    print(f"Updated batch 1 in {ts_file}")

if __name__ == "__main__":
    update_ts_file('lib/visualLab/data/hungaryPoi.ts')
