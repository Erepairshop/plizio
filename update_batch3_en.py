import json
import re

data = {
  "szigetvar": {
    "desc": "Szigetvár is a historically monumental town located in southern Hungary, forever etched into the national consciousness as a symbol of ultimate sacrifice and bravery. Its undisputed centerpiece is the Szigetvár Castle, the site of the legendary 1566 siege where the Croatian-Hungarian nobleman Miklós Zrínyi and his vastly outnumbered garrison fought to the death against the massive Ottoman army led by Suleiman the Magnificent. The battle was so fierce that Suleiman himself died of old age in his tent before the castle fell. Today, the town beautifully commemorates both Hungarian and Turkish history, featuring the Park of Hungarian-Turkish Friendship where statues of both opposing leaders stand side-by-side. With its restorative thermal baths and poignant historical sites, Szigetvár offers a deeply moving journey into the 16th century.",
    "facts": [
      "The 1566 Siege of Szigetvár was so historically significant that French Cardinal Richelieu later referred to it as the 'battle that saved civilization'.",
      "The Ali Pasha Mosque, built during the Ottoman occupation, still stands in the town center and now functions as a Catholic church.",
      "The Hungarian-Turkish Friendship Park was opened in 1994 to foster reconciliation and features a massive bronze monument of Zrínyi and Suleiman.",
      "Szigetvár is also home to a highly rated thermal spa, utilizing 62°C iodine-rich waters drawn from deep beneath the historic town."
    ]
  },
  "baja": {
    "desc": "Baja is a charming, wonderfully atmospheric city gracefully positioned on the banks of the Sugovica River, a tranquil tributary of the Danube in southern Hungary. The city boasts a highly elegant, Mediterranean-style downtown, featuring expansive cobblestone squares lined with grand Neoclassical buildings and bustling riverside promenades. Baja's cultural identity is inextricably linked to the river and, more specifically, to its legendary, paprika-rich Fisherman's Soup (Halászlé). The city's profound connection to this dish culminates annually in an enormous, world-famous gastronomic festival that takes over the entire town. Beyond its culinary fame, Baja is an important educational hub for Hungary's ethnic German and Croatian minorities, creating a culturally diverse, exceptionally welcoming urban oasis.",
    "facts": [
      "During the annual Baja Fish Soup Festival, over 2,000 cauldrons of fish soup are cooked simultaneously on open fires in the city's main square.",
      "Baja's historic Petőfi Island is a massive recreational area surrounded by the Sugovica River, featuring beaches, sports facilities, and lush parks.",
      "The city is home to the Eötvös József College, a significant center for the higher education of Hungary's national minorities.",
      "A unique, beautifully restored historicist synagogue from the 19th century serves today as the city's public library."
    ]
  },
  "kiskunfelegyhaza": {
    "desc": "Kiskunfélegyháza is a stately, deeply traditional city located in the heart of the sunlit Great Hungarian Plain, heavily characterized by its broad avenues and immense civic pride. Often referred to simply as 'Félegyháza', the city is renowned across the country for possessing one of the most breathtakingly beautiful Art Nouveau (Secessionist) City Halls in Hungary, a masterpiece adorned with vibrant Zsolnay ceramics. The town also holds immense literary significance as the childhood home of Sándor Petőfi, Hungary's greatest national poet, and Ferenc Móra, a beloved author. Surrounded by vast agricultural lands, Kiskunfélegyháza maintains a calm, dignified rural elegance while serving as a crucial cultural and economic center for the Kiskunság region.",
    "facts": [
      "The Kiskunfélegyháza City Hall, built in 1911, features intricate Hungarian folk motifs and a stunning, colorful majolica tile roof.",
      "Sándor Petőfi, the heroic poet of the 1848 Hungarian Revolution, spent much of his childhood here and frequently referenced the town in his work.",
      "The town features a beautiful, sprawling promenade completely lined with massive, century-old plane trees.",
      "The local Kiskun Museum houses extensive collections of traditional pastoral artifacts, windmills, and historical regional costumes."
    ]
  },
  "bugac": {
    "desc": "Bugac is an iconic, deeply evocative village and natural preserve that represents the absolute, untamed essence of the Hungarian Puszta. Forming a vital, highly protected part of the Kiskunság National Park, the Bugac landscape is a mesmerizing expanse of sweeping sand dunes, juniper forests, and endless alkaline grasslands. It is the ultimate destination to witness the legendary equestrian skills of the Hungarian 'Csikós' (horse herdsmen), who perform breathtaking stunts like the 'Puszta Five' while cracking their traditional long whips. The area is a living sanctuary for ancient Hungarian domestic animals, including the magnificent Grey Cattle, Mangalica sheep, and Nonius horses. A visit to Bugac is an immersive, thrilling leap into the deeply romanticized, ancient nomadic roots of the Magyar people.",
    "facts": [
      "Bugac is the site of the famous 'Kurultáj', a massive, biennial tribal assembly celebrating the equestrian and nomadic heritage of Hunno-Turkic nations.",
      "The traditional Hungarian Grey Cattle herds grazing in Bugac are kept outdoors year-round, continuing a millennium-old pastoral tradition.",
      "The local Pastoral Museum is uniquely designed in the shape of a traditional shepherd's hat and showcases authentic Puszta lifestyle artifacts.",
      "Bugac puszta was historically a formidable, lawless landscape famously used as a hideout by 19th-century Hungarian outlaws (betyárs)."
    ]
  },
  "oroshaza": {
    "desc": "Orosháza is a rapidly modernizing, dynamic city located in the vast agricultural plains of southeastern Hungary, often celebrated as the 'Capital of the Békés Ridge.' While the city has a strong industrial foundation—particularly famous for its extensive glass manufacturing—its true national fame stems from the spectacular Gyopárosfürdő resort district. This expansive, deeply relaxing thermal and adventure bath complex is situated on the shores of three natural lakes, drawing visitors from across Europe seeking relief in its highly therapeutic, silky alkaline waters. The city itself features spacious, clean squares and a highly welcoming, relaxed civic atmosphere. Orosháza is a brilliant example of a hard-working Hungarian city that successfully transformed itself into a premier wellness oasis.",
    "facts": [
      "Gyopárosfürdő is often called the 'Pearl of the Great Plain,' utilizing thermal water that emerges from a depth of 800 meters at 47°C.",
      "The city is a European powerhouse in glass manufacturing, producing everything from high-end architectural glass to intricate scientific instruments.",
      "The historic, towering Lutheran Church in the city center was constructed by the town's original founders, Slovak settlers who arrived in 1744.",
      "Orosháza features a unique Well Museum, showcasing the historical evolution of water extraction in the arid Great Plain."
    ]
  },
  "mezohegyes": {
    "desc": "Mezőhegyes is a unique, architecturally fascinating town in southeastern Hungary, completely and utterly defined by its legendary imperial horse-breeding heritage. The town's entire layout and existence were dictated by the establishment of the State Stud Farm in 1784 by Emperor Joseph II, designed specifically to supply the vast cavalry of the Austro-Hungarian Empire. The town center is an extraordinary, highly uniform collection of grand, Neoclassical military architecture, colossal brick stables, and immense, tree-lined riding avenues. Mezőhegyes is globally famous in equestrian circles as the birthplace of three distinct, internationally recognized horse breeds: the Nonius, the Furioso-North Star, and the Gidran. It is an absolute pilgrimage site for horse lovers and a perfectly preserved monument to imperial agricultural engineering.",
    "facts": [
      "The Mezőhegyes State Stud is one of the oldest continuously operating state-owned horse breeding facilities in Europe.",
      "The Nonius breed, developed here, is recognized as a Hungarikum and was heavily utilized as a heavy draft and artillery horse.",
      "The town features massive, triumphal-arch-style entry gates originally built to manage the movement of thousands of horses.",
      "Much of the town's historical agricultural and equestrian complex is currently under consideration for UNESCO World Heritage status."
    ]
  },
  "sarospatak": {
    "desc": "Sárospatak, elegantly situated on the tranquil banks of the Bodrog River in northeastern Hungary, is a deeply historic, intellectually vibrant town often called the 'Athens of the Bodrog.' Its cultural prestige is anchored by the renowned Reformed College, established in 1531, which attracted the greatest minds of Europe, including the legendary educational reformer Comenius. However, the absolute crown jewel of the town is the Rákóczi Castle, one of the most stunning and complete late-Renaissance fortresses in the country. This majestic, multi-towered castle features the famous Red Tower and a spectacular, perfectly preserved Renaissance loggia. Seamlessly blending profound academic history, breathtaking aristocratic architecture, and proximity to the Tokaj wine region, Sárospatak is a sophisticated cultural masterpiece.",
    "facts": [
      "The Sárospatak Reformed College possesses a historic Grand Library containing over 400,000 volumes, heavily focused on theology and philosophy.",
      "The Rákóczi Castle is famously featured on the back of the Hungarian 500 Forint banknote.",
      "The legendary Czech theologian and philosopher John Amos Comenius taught at the local college between 1650 and 1654, revolutionizing its curriculum.",
      "Sárospatak was a favored stronghold and political center for the immensely wealthy and powerful Rákóczi noble family in the 17th century."
    ]
  },
  "lillafured": {
    "desc": "Lillafüred is arguably the most romantic, fairytale-like resort destination in all of Hungary, deeply hidden within the lush, dramatic valleys of the Bükk Mountains near Miskolc. The visual centerpiece of this magical retreat is the spectacular Palota Hotel (Palace Hotel), an enormous, Neo-Renaissance castle built directly into the steep mountainside overlooking the serene Lake Hámori. The resort is surrounded by terraced hanging gardens, intricate limestone caves, and the roar of the Szinva Waterfall, which is the highest natural waterfall in the country. Visitors can explore the stalactites of the St. Stephen Cave, ride the nostalgic narrow-gauge forest railway, or simply row a boat on the glassy lake. Lillafüred is an exquisite, luxurious immersion into untouched alpine beauty.",
    "facts": [
      "The Palota Hotel was built between 1927 and 1930 specifically to boost luxury tourism in Hungary following the devastation of WWI.",
      "The Szinva Waterfall at Lillafüred drops an impressive 20 meters, though its flow is heavily supplemented by an artificial pumping system.",
      "The nearby Anna Cave is a highly unique calcareous tufa cave, one of only six such accessible formations in the entire world.",
      "The romantic, scenic Lillafüred Forest Train originally operated solely to transport timber from the deep mountains to the city of Miskolc."
    ]
  },
  "opusztaszer": {
    "desc": "Ópusztaszer is an immensely significant, deeply patriotic National Historical Memorial Park located in the southern Great Plain, considered the spiritual birthplace of the Hungarian nation. According to historical tradition, it was exactly here in the year 896 AD that High Prince Árpád and the leaders of the seven Magyar tribes held their first national assembly to divide the newly conquered lands. The absolute highlight of the park is the breathtaking Feszty Panorama, a colossal, 120-meter-long circular painting that vividly and dramatically depicts the Arrival of the Hungarians. The expansive park also features a massive open-air museum (Skanzen) preserving authentic peasant architecture and a beautifully reconstructed nomadic yurt camp. Ópusztaszer is a monumental, awe-inspiring pilgrimage site celebrating Hungarian origins.",
    "facts": [
      "The Feszty Panorama, completed in 1894 by Árpád Feszty, is one of the largest panoramic paintings in the world, covering 1,800 square meters of canvas.",
      "The park features the 'Árpád Monument', a massive obelisk erected in 1896 for the Hungarian Millennium, marking the supposed site of the first assembly.",
      "The open-air museum (Skanzen) at Ópusztaszer meticulously recreates a 19th-century Great Plain market town, complete with a functioning bakery and post office.",
      "The memorial park includes a fascinating, life-sized recreation of an ancient Cuman (Kun) equestrian nomadic camp."
    ]
  },
  "csongrad-city": {
    "desc": "Csongrád is an incredibly charming, deeply historic city uniquely situated at the very point where the fast-flowing Körös River merges into the majestic Tisza. It is profoundly famous for its 'Belsőváros' (Inner City), a meticulously preserved, living monument of 18th-century peasant architecture featuring dozens of stunning, white-washed, thatched-roof houses. This historic district is not a museum, but a fully functional residential area that transports visitors centuries back in time. Csongrád is equally celebrated as a premier summer destination due to the Körös-torok, a magnificent, sweeping sandy beach that forms a massive peninsula at the river junction, often likened to a marine coastline. It beautifully combines pristine riverside leisure with unparalleled architectural heritage.",
    "facts": [
      "The Belsőváros district consists of 37 fully protected, traditional thatched-roof peasant houses that survived the devastating Tisza floods.",
      "The Körös-torok sandy beach is one of the longest and most popular natural river beaches in Hungary, drawing thousands of campers every summer.",
      "Csongrád has a long, proud history of woodworking and boat-building, traditionally crafting the distinct wooden boats used on the Tisza River.",
      "The city's name derives from a Slavic word meaning 'Black Castle', referring to an ancient earthwork fortress that once stood there."
    ]
  },
  "mor": {
    "desc": "Mór is a vibrant, deeply historic town nestled gracefully in the picturesque valley between the Vértes and Bakony mountain ranges in central Transdanubia. It is proudly recognized as the center of the Mór Wine Region, one of the smallest but most prestigious historical wine appellations in Hungary. The town's absolute signature is the 'Ezerjó' grape variety, which produces an incredibly crisp, highly acidic, and deeply flavorful white wine unique to this specific terroir. The town's architecture heavily reflects the influence of the Danube Swabians (ethnic Germans) who settled here in the 18th century, bringing with them advanced viticulture techniques. Mór is a deeply hospitable, highly refined destination offering superb wine tastings and pristine access to the forested Vértes hiking trails.",
    "facts": [
      "The Mór Wine Region is almost exclusively dedicated to white wine production, with the indigenous Ezerjó grape being its flagship variety.",
      "Every October, the town hosts the massive 'Mór Wine Days' festival, featuring grand parades in traditional Swabian and Hungarian folk costumes.",
      "The town features the stunning Lamberg Castle, a classicist palace built in the 18th century by the aristocratic family that dominated the region.",
      "Mór was the site of a significant and tragic cavalry battle during the 1848 Hungarian Revolution against the Austrian Imperial army."
    ]
  },
  "martonvasar": {
    "desc": "Martonvásár is an exceptionally elegant, romantically charged town situated just southwest of Budapest, universally celebrated for its profound connections to classical music and aristocratic splendor. The town is entirely dominated by the breathtaking Brunszvik Castle, a dazzling, snow-white Neo-Gothic masterpiece surrounded by a spectacularly lush, 70-hectare English landscape garden. The castle's greatest historical claim to fame is its intimate connection to the legendary composer Ludwig van Beethoven, who was a close friend of the Brunszvik family and composed some of his greatest works while visiting the estate. Today, the castle houses a deeply moving Beethoven Memorial Museum. Martonvásár offers a refined, deeply cultural excursion into the highest echelons of 19th-century Hungarian nobility.",
    "facts": [
      "Beethoven famously dedicated his 'Appassionata' Sonata and several other major works directly to members of the Brunszvik family.",
      "Every summer, world-class symphony orchestras perform Beethoven's works on a magical outdoor stage situated on an island in the castle's lake.",
      "The Brunszvik Castle currently houses the Agricultural Research Institute of the Hungarian Academy of Sciences.",
      "The castle's massive English garden features a spectacular collection of rare, massive trees, including an enormous, centuries-old swamp cypress."
    ]
  },
  "mosonmagyarovar": {
    "desc": "Mosonmagyaróvár is a dynamic, historically significant city uniquely positioned in the extreme northwest corner of Hungary, mere kilometers from both the Austrian and Slovakian borders. Formed in 1939 by the merger of two distinct historic towns—Moson and Magyaróvár—the city boasts a charming, pedestrian-friendly downtown characterized by winding alleys and the impressive, irregularly shaped Óvár Castle. Today, however, the city's international fame rests heavily on its world-class thermal baths, which draw thousands of wellness tourists seeking its highly therapeutic, mineral-rich waters. It is also an important academic center, hosting a prestigious university faculty of agriculture. Mosonmagyaróvár is a bustling, borderless European hub offering exceptional geothermal healing and rich cross-roads history.",
    "facts": [
      "The Mosonmagyaróvár thermal water is officially ranked among the five most effective, highest-quality medicinal waters in all of Europe.",
      "The historic Óvár Castle has been continuously serving as a functioning institution for agricultural higher education since 1818.",
      "The city's thermal water contains high levels of iodine, fluorine, and silicic acid, surfacing at a blistering 74°C from a depth of 2000 meters.",
      "Due to its extreme proximity to the border, the city has become a massive regional hub for dental tourism, primarily serving Austrian and German clients."
    ]
  },
  "fertod": {
    "desc": "Fertőd is a small, quiet town in western Hungary that boasts an architectural monument of such staggering scale and opulence that it is universally referred to as the 'Hungarian Versailles.' The town is completely synonymous with the magnificent Esterházy Palace, the largest and most spectacular Rococo edifice in the country. Built by Prince Nikolaus 'the Magnificent' Esterházy in the late 18th century, the palace was a dazzling center of European high culture, famously employing the legendary composer Joseph Haydn as its resident court musician for nearly thirty years. With its 126 gold-adorned rooms, massive French gardens, and intricate wrought-iron gates, Fertőd is an absolute masterpiece of aristocratic extravagance and musical history.",
    "facts": [
      "Joseph Haydn lived and composed in the Esterházy Palace from 1766 to 1790, premiering many of his most famous symphonies there.",
      "The palace features a spectacular, perfectly symmetrical French formal garden that covers over 200 hectares.",
      "Empress Maria Theresa of Austria famously stated, 'If I want to hear good opera, I go to Eszterháza,' highlighting the palace's immense cultural prestige.",
      "The palace miraculously survived WWII but was severely neglected during the socialist era before undergoing massive, ongoing modern restorations."
    ]
  },
  "hajduboszormeny": {
    "desc": "Hajdúböszörmény is an incredibly fascinating, deeply historic city serving as the largest and most prominent of the traditional 'Hajdú' towns in eastern Hungary. The city is globally recognized by urban planners for its highly unique, almost perfectly circular settlement structure. Originating as a defensive, fortified camp in the 17th century for the fierce, fiercely independent Hajdú mercenary soldiers, the town features a central fortress-church surrounded by concentric, ring-shaped streets. Today, it is a peaceful, culturally proud agricultural center that beautifully preserves its fiercely independent, Calvinist roots in the impressive Hajdúság Museum. It offers a rare, highly visible glimpse into the unique military-agrarian history of the Great Hungarian Plain.",
    "facts": [
      "The city's unique circular layout is so distinct that it is often compared to the famous defensive structure of the city of Nördlingen in Germany.",
      "The Hajdú soldiers were originally cattle drovers and mercenaries who were granted land and nobility by Prince István Bocskai in 1605.",
      "The Hajdúság Museum is housed in the former headquarters of the Hajdú District, a magnificent, fortress-like building constructed in 1762.",
      "The city boasts a highly renowned thermal bath, the Bocskai Spa, utilizing mineral waters that surface at 61°C."
    ]
  },
  "berettyoujfalu": {
    "desc": "Berettyóújfalu is a bustling, rapidly developing city located on the eastern edges of the Great Hungarian Plain, serving as the proud administrative and cultural center of the historical Bihar region. The city's identity is deeply connected to the Berettyó River, which weaves through the surrounding flatlands, creating excellent agricultural conditions and peaceful recreational areas. The absolute centerpiece of the city's heritage is the haunting, majestic Herpály Stump Tower (Csonkatorony), the massive, solitary brick ruin of a 12th-century Romanesque monastery that dominates the surrounding fields. Berettyóújfalu is a quiet, authentic hub of eastern Hungarian hospitality, offering deep historical roots, expanding thermal spa facilities, and a strong sense of local Bihar identity.",
    "facts": [
      "The Herpály Stump Tower is the only surviving remnant of a massive, multi-towered monastery built by the powerful Herpály noble family.",
      "The city's modern Bihar Termálliget bath complex utilizes high-quality thermal waters that were discovered during oil exploration in the 20th century.",
      "Berettyóújfalu was significantly elevated in status after the 1920 Treaty of Trianon, serving temporarily as the capital of the truncated Bihar County.",
      "The local Nadányi Zoltán Cultural Center is a hub for preserving the unique folk traditions and crafts of the cross-border Bihar region."
    ]
  },
  "parad": {
    "desc": "Parád is a deeply historic, highly atmospheric resort village nestled deep within the lush, dramatic valleys of the northern Mátra Mountains. For over two centuries, it has been revered as one of Hungary's most prestigious health resorts, historically favored by high nobility and aristocratic families like the Károlyis. The village is incredibly famous for its distinct, pungent sulfurous and highly carbonated mineral waters (Parádi víz), which have been bottled and used for medicinal purposes since the 18th century. Beyond its healing springs, Parád boasts the spectacular Cifra Stables, a magnificent, red-marble equestrian complex that now houses a fascinating carriage museum. It is an exquisitely peaceful, aristocratic alpine retreat.",
    "facts": [
      "Parád mineral water (Parádi víz) is naturally highly carbonated and rich in sulfur, traditionally used to treat severe digestive and stomach issues.",
      "The Cifra Stables (Cifra Istálló) were designed by renowned architect Miklós Ybl in the 19th century and feature incredibly ornate woodwork and marble interiors.",
      "The village is closely associated with the historic Károlyi family, who built extensive bathhouses, luxury hotels, and hospitals in the 19th century.",
      "Parád is a premier starting point for deep forest hikes into the Ilona Valley, which features the breathtaking Ilona Valley Waterfall."
    ]
  },
  "belapatfalva": {
    "desc": "Bélapátfalva is a serene, dramatically situated town nestled at the western foot of the towering Bél-kő mountain in the Bükk range. The town is universally celebrated for harboring one of the most magnificent and perfectly preserved Romanesque monuments in all of Hungary: the Cistercian Abbey of Bélapátfalva. Founded in 1232, this stunning, fortress-like brick church sits in absolute, isolated tranquility deep within a forested valley, possessing a deeply spiritual and hauntingly beautiful atmosphere. Above the town, the massive, sheer white limestone cliffs of the Bél-kő mountain—partially scarred by historic cement mining—provide a staggering, theatrical backdrop. Bélapátfalva is an absolute must-visit for lovers of medieval ecclesiastical architecture and raw alpine scenery.",
    "facts": [
      "The Cistercian Abbey of Bélapátfalva is the only fully intact medieval Cistercian abbey church remaining in Hungary.",
      "The church's facade features an exceptionally rare, beautiful alternating pattern of red and gray bricks, characteristic of 13th-century Italian-French influence.",
      "The imposing Bél-kő mountain was heavily mined for limestone until 2000, leaving a striking, stepped white cliff face that is now a protected geological site.",
      "The town features a picturesque fishing lake right at the foot of the mountain, offering spectacular reflections of the white cliffs."
    ]
  },
  "mezotur": {
    "desc": "Mezőtúr is a proud, deeply traditional city situated in the heart of the Great Hungarian Plain, gracefully hugging the banks of the Hortobágy-Berettyó river. The city's identity and national fame are overwhelmingly tied to its centuries-old tradition of master pottery. For generations, the highly distinct Mezőtúr ceramics—characterized by their brilliant green, yellow, and brown glazes and intricate floral motifs—have been highly sought after across the country. The city boasts a fascinating Pottery Museum and still supports numerous active master craftsmen working in traditional studios. Beyond its artistic heritage, Mezőtúr offers a remarkably pristine, peaceful natural environment, famous among anglers and nature lovers for its untouched river backwaters.",
    "facts": [
      "Mezőtúr was historically one of the largest centers for ceramics in the Kingdom of Hungary, with dozens of active pottery workshops operating by the 19th century.",
      "The distinct, vibrant green glaze of Mezőtúr pottery is a highly protected local technique, created using specific copper oxide mixtures.",
      "The city features one of the most beautiful and expansive Reformed (Calvinist) churches in the region, capable of seating thousands.",
      "The town's surrounding oxbow lakes and backwaters are part of a highly protected nature reserve, renowned for exceptional catfish and carp fishing."
    ]
  },
  "tiszafured": {
    "desc": "Tiszafüred is a vibrant, bustling town located on the eastern banks of Lake Tisza, proudly claiming the title of the 'Capital of Lake Tisza.' Following the artificial creation of the massive lake in the 1970s, the town successfully transformed itself into the ultimate Hungarian hub for eco-tourism, fishing, and water sports. Tiszafüred is the absolute premier starting point for exploring the lake's mesmerizing, labyrinthine bird reserves and dense reed beds by canoe or motorboat. The town successfully balances a lively, modern beach resort atmosphere with a deep respect for the highly protected, UNESCO-recognized natural wetland ecosystems that surround it. It is a true paradise for birdwatchers, cyclists, and families seeking dynamic aquatic adventures.",
    "facts": [
      "Lake Tisza (Tisza-tó) is the second-largest lake in Hungary, though it is technically an artificial reservoir created by damming the Tisza River.",
      "The northern part of the lake near Tiszafüred is a highly protected bird sanctuary, home to over 200 species, and part of the Hortobágy National Park UNESCO site.",
      "Tiszafüred features a massive, extensive network of modern cycling paths that completely circumnavigate the entire lake.",
      "The Kiss Pál Museum in the town offers excellent exhibitions on the traditional fishing techniques, saddle-making, and unique folklore of the Tisza region."
    ]
  },
  "komarom": {
    "desc": "Komárom is a city of immense historical and military significance, dramatically situated on the southern banks of the Danube River, directly facing its sister city, Komárno, in Slovakia. The city is globally recognized for the Monostor Fortress, the crown jewel of an incredibly massive, interconnected fortification system built during the 19th-century Austro-Hungarian Empire. This colossal, subterranean military complex is the largest modern-era fortress in Central Europe, designed to be completely impregnable. Today, visitors can explore kilometers of perfectly preserved, chillingly silent underground tunnels, artillery emplacements, and massive stone walls. Komárom is also celebrated for its highly restorative thermal baths, making it a fascinating dual destination for intense military history and deep relaxation.",
    "facts": [
      "The Komárom fortification system was built to accommodate an astonishing garrison of up to 200,000 soldiers during wartime.",
      "The Monostor Fortress is heavily integrated into the landscape, covered by thick layers of earth to make it nearly invisible from a distance.",
      "The fortress served for decades as a top-secret, highly guarded ammunition depot for the Soviet Red Army during the Cold War.",
      "The city is connected to Slovakia by the historic Elisabeth Bridge, allowing for a seamless, walking cross-border experience."
    ]
  },
  "babolna": {
    "desc": "Bábolna is a small, impeccably neat town in northern Hungary that holds a legendary, world-class status in the realm of international horse breeding. Founded in 1789 by Emperor Joseph II, the Bábolna National Stud Farm was established with the explicit goal of breeding the ultimate, most resilient Arabian horses for the imperial cavalry. Today, the town is completely synonymous with the majestic 'Shagya Arabian' breed, a spectacular, robust horse highly prized globally for endurance riding and dressage. The stud farm complex itself is a stunning, beautifully maintained architectural ensemble featuring manicured courtyards, historic riding halls, and a fascinating carriage museum. Bábolna is a sophisticated, deeply traditional sanctuary dedicated to equestrian excellence.",
    "facts": [
      "The Shagya Arabian breed was meticulously developed in Bábolna in the 19th century by crossing purebred desert Arabians with local Hungarian mares.",
      "The town features an incredible, deeply moving horse cemetery where the most famous and successful stallions of the stud are buried under marble tombstones.",
      "The historic Bábolna Stud complex includes an arboretum with a massive, centuries-old acacia tree, under which military strategies were supposedly planned.",
      "Bábolna is also a massive powerhouse in modern agriculture, historically serving as the center for Hungary's highly advanced poultry and corn production industries."
    ]
  },
  "szecseny": {
    "desc": "Szécsény is a profoundly historic, exceptionally picturesque town situated near the Slovakian border in northern Hungary, serving as a vital cultural center for the Palóc people. The town's historical prestige is massive, famously hosting the crucial 1705 national parliament (Diet of Szécsény) where Prince Ferenc Rákóczi II was elected the ruling prince of Hungary during the war of independence against the Habsburgs. The town is dominated by the spectacular Forgách Castle, a sprawling, magnificent Baroque palace built atop the ruins of a medieval fortress, which now houses the fascinating Kubinyi Ferenc Museum. Szécsény beautifully combines grand, aristocratic architecture with a deeply authentic, rural highland charm.",
    "facts": [
      "The Forgách Castle was constructed in the mid-18th century and features a striking, deeply symmetrical Baroque facade.",
      "The local museum houses spectacular, perfectly preserved artifacts from the Rákóczi War of Independence, including weaponry and diplomatic correspondence.",
      "Szécsény features a stunning, isolated medieval fire tower that noticeably leans to one side, functioning today as a unique lookout point.",
      "The town is a premier gateway to exploring the traditional, UNESCO-recognized Palóc villages of the surrounding Cserhát mountains."
    ]
  },
  "tar": {
    "desc": "Tar is a quiet, unassuming village nestled beautifully at the western foothills of the Mátra Mountains, hiding a deeply surprising and spiritually profound secret. It is the site of the Kőrösi Csoma Sándor Peace Stupa, a breathtakingly authentic, brilliant white Buddhist monument inaugurated in 1992 by the 14th Dalai Lama himself. The stupa is dedicated to the legendary 19th-century Hungarian explorer and philologist Sándor Kőrösi Csoma, who authored the very first Tibetan-English dictionary and is revered as a bodhisattva in Japan. Surrounded by dense alpine forests, the memorial park includes a beautiful meditation pavilion and a traditional tea house. Tar is an incredibly unique, deeply serene spiritual bridge between the Hungarian mountains and the Himalayas.",
    "facts": [
      "Sándor Kőrösi Csoma, whom the stupa honors, spent years living in freezing, isolated Tibetan monasteries studying their language and religion in the 1820s.",
      "The Tar Peace Stupa contains authentic Buddhist relics and copies of Kőrösi Csoma's groundbreaking linguistic works.",
      "The Dalai Lama personally consecrated the stupa in 1992, drawing tens of thousands of people to the tiny Hungarian village.",
      "Beyond the stupa, the village features the beautiful, highly atmospheric ruins of a 15th-century fortified manor house."
    ]
  },
  "erd": {
    "desc": "Érd is a massive, sprawling city located just southwest of Budapest, functioning as one of the most populous and fastest-growing centers in the capital's agglomeration. While much of the city is characterized by modern residential developments, it harbors a spectacular, incredibly rare piece of medieval history: a fully intact, 16th-century Ottoman minaret. This towering, solitary spire is one of only three surviving minarets in Hungary and stands as a fascinating testament to the era when the Ottoman Empire controlled the region. Located near the ancient banks of the Danube, the old town of Érd also features deep, winding wine cellars carved into the loess hills. It is a city where rapid modern suburban expansion surrounds striking historical anomalies.",
    "facts": [
      "The Érd Minaret stands 23 meters tall and features 53 steep, incredibly narrow steps leading up to its circular balcony.",
      "Unlike the minaret in Eger, the Érd minaret was built using a unique, reddish-brown limestone that gives it a highly distinct color.",
      "The mosque that originally stood beneath the minaret was completely destroyed, leaving the tower as a fascinating, solitary monolith.",
      "Érd sits on an ancient Roman military road, and fascinating archaeological remnants of Roman watchtowers have been discovered nearby."
    ]
  },
  "cegled": {
    "desc": "Cegléd is a deeply traditional, fiercely patriotic city situated in the agricultural heartland of the Great Hungarian Plain. It holds a sacred place in Hungarian history due to its profound connection to Lajos Kossuth, the iconic leader of the 1848 Revolution. Kossuth delivered one of his most legendary, fiery recruiting speeches here, galvanizing the locals into a fierce revolutionary fervor. Today, this legacy is honored in the fascinating Kossuth Museum, which houses the statesman's death mask and personal artifacts. Beyond history, Cegléd has successfully reinvented itself as a major wellness destination, boasting a massive, highly modern thermal bath and aquapark complex. It seamlessly blends fierce national pride with highly relaxing, geothermal hospitality.",
    "facts": [
      "Cegléd is home to the largest Reformed (Calvinist) church in Central Europe, an awe-inspiring classicist structure dominating the city center.",
      "The Kossuth Museum in Cegléd possesses the largest collection of Lajos Kossuth memorabilia in the entire country.",
      "The city is heavily associated with drum-making, serving as the historical home to the world-renowned Dubán drum manufacturing workshop.",
      "The Cegléd Thermal Bath features water that surfaces at 54°C, highly recommended for treating severe rheumatic and neurological conditions."
    ]
  },
  "balatonlelle": {
    "desc": "Balatonlelle is a bustling, incredibly vibrant resort town situated on the sun-drenched southern shore of Lake Balaton, serving as one of the most beloved family destinations in Hungary. The town is overwhelmingly famous for its spectacular 'Napfény Strand' (Sunshine Beach), a massive, artificially created sandy beach that perfectly mimics a shallow, tropical marine coastline. Behind the beachfront, the town features a highly energetic, Mediterranean-style promenade packed with outdoor cafes, amusement park rides, and a massive Ferris wheel. Balatonlelle is also deeply tied to the South Balaton wine region, hosting a spectacular, multi-week wine festival every August. It is the ultimate embodiment of lively, joyful, and highly accessible Hungarian summer leisure.",
    "facts": [
      "The Napfény Strand features an incredibly shallow shoreline where the sandy bottom allows visitors to wade hundreds of meters into the lake.",
      "Balatonlelle boasts a highly prestigious, modern marina capable of hosting hundreds of luxury sailboats and hosting major regattas.",
      "The town features a famous, highly unique open-air stage (Kertmozi) that hosts massive concerts and theater performances throughout the summer.",
      "Just south of the town lies the Kishegy (Little Hill), offering a spectacular panoramic viewing platform and an enchanting Baroque chapel surrounded by vineyards."
    ]
  },
  "fonyod": {
    "desc": "Fonyód is a highly picturesque, geographically unique resort town positioned gracefully on the southern shore of Lake Balaton. Unlike the mostly flat southern coastline, Fonyód is defined by two striking, steep volcanic hills that rise dramatically directly from the water's edge. This incredible elevation provides Fonyód with the most breathtaking, expansive panoramic views of the entire lake, famously looking straight across at the volcanic basalt organs of the Badacsony mountain on the northern shore. The town features Hungary's longest pier and a wonderfully nostalgic, highly manicured lakeside promenade. With its romantic hilltop villas, historic lookout towers, and expansive beaches, Fonyód is a visually spectacular, deeply tranquil Balaton sanctuary.",
    "facts": [
      "The Fonyód Pier, extending 464 meters into the water, is the longest breakwater and pier structure on Lake Balaton.",
      "The town features the 'Crypt Villa', an incredibly poignant, tragic monument built in the 1940s by an architect to eternally honor his deceased fiancé.",
      "Fonyód possesses multiple towering lookout points (such as the Sipos-hegy lookout), which are considered the absolute best locations to photograph the Balaton sunset.",
      "The town is a massive hub for regional water transport, operating the busiest ferry crossing line directly over to Badacsony."
    ]
  },
  "kisvarda": {
    "desc": "Kisvárda is a dynamically evolving, deeply historic city located in the extreme northeast of Hungary, serving as an important commercial and cultural gateway to neighboring Ukraine. The city's identity is fiercely anchored by the evocative ruins of the Kisvárda Castle, a formidable 15th-century brick fortress that successfully repelled numerous Ottoman sieges. Today, the heavily restored castle grounds function as a highly popular open-air theater during the summer months. In recent years, Kisvárda has experienced a massive modernization boom, resulting in a state-of-the-art sports stadium and a wildly popular, sprawling thermal bath and water cinema complex (Aquacinema). It is a city uniquely balancing its rugged medieval roots with highly ambitious modern entertainment.",
    "facts": [
      "The Kisvárda Castle was built using millions of locally fired clay bricks, making it a rare example of a pure brick fortress in Hungary.",
      "The Aquacinema bath complex features a massive slide park and an innovative system where guests can watch movies directly from the thermal pools.",
      "The city is a major powerhouse in Hungarian sports, particularly in top-tier professional football and women's handball.",
      "Kisvárda hosts the prestigious annual Festival of Hungarian Theatres, drawing top-tier theatrical companies from across the Carpathian Basin."
    ]
  },
  "tiszadada": {
    "desc": "Tiszadada is an exceptionally peaceful, deeply romantic village elegantly positioned on the winding banks of the Tisza River in northeastern Hungary. The village is incredibly famous as the ancestral home of the immensely powerful and wealthy Andrássy noble family. The absolute highlight of the village is the stunning, fairytale-like Andrássy Castle, a Neo-Gothic masterpiece heavily inspired by the castles of the French Loire Valley. Surrounded by a spectacular, incredibly dense English landscape garden featuring ancient, towering trees, the castle presents one of the most beautiful aristocratic ensembles in the country. Tiszadada is a tranquil, visually breathtaking sanctuary perfect for lovers of 19th-century romantic architecture and pristine river landscapes.",
    "facts": [
      "The Andrássy Castle in Tiszadada was famously designed by the brilliant architect Ignác Alpár, who also designed the Hungarian State Opera House.",
      "Count Gyula Andrássy, who served as Prime Minister of Hungary and a key architect of the Austro-Hungarian Compromise of 1867, frequently resided here.",
      "The castle's sprawling English garden borders directly onto the wild backwaters of the Tisza River, offering incredible serenity and biodiversity.",
      "The castle's interior features stunning, perfectly preserved original woodwork, grand marble fireplaces, and a highly elaborate central staircase."
    ]
  },
  "dombovar": {
    "desc": "Dombóvár is a vibrant, industrially and agriculturally significant city located gracefully in the rolling hills of the Tolna region in Southern Transdanubia. It is a city defined by its excellent strategic location, serving as a major railway hub connecting the capital to the southern borders. However, Dombóvár is most famous internationally for the spectacular Gunaras Resort and Spa, located just outside the city limits. This highly prestigious thermal bath utilizes incredible medicinal waters to treat severe locomotor and respiratory issues, drawing thousands of wellness tourists annually. The city also features fascinating historical artifacts, such as the ruins of the medieval Gólyavár castle. Dombóvár elegantly balances bustling transit commerce with elite, deeply relaxing spa culture.",
    "facts": [
      "The thermal water at Gunaras surfaces at 55°C and is officially classified as highly medicinal due to its immense fluoride and alkaline content.",
      "The medieval Gólyavár (Stork Castle) ruins consist of a massive, solitary brick tower that once formed part of a highly fortified defensive network.",
      "The city features a highly unique Museum of Fekete István, honoring one of Hungary's most beloved and prolific authors of youth and nature literature.",
      "Dombóvár possesses an incredibly massive, meticulously maintained arboretum (Szigeterdő) located on a natural island surrounded by wetlands."
    ]
  },
  "dunafoldvar": {
    "desc": "Dunaföldvár is an incredibly charming, historically strategic city dramatically positioned on steep, high loess bluffs directly overlooking the sweeping bends of the Danube River in central Hungary. The city has historically served as a critical crossing point and defensive stronghold, a legacy proudly represented by the Csonkatorony (Stump Tower), a massive, perfectly preserved 16th-century fortress tower that dominates the riverbank. The city's elegant, monumental steel bridge (the József Beszédes Bridge) is an engineering marvel and a vital national transport link. Renowned for its beautiful, terraced riverside promenades, historic wine cellars carved deep into the loess bluffs, and highly restorative thermal baths, Dunaföldvár offers a deeply picturesque, panoramic Danube experience.",
    "facts": [
      "The Csonkatorony (Stump Tower) now houses a fascinating local history museum and offers breathtaking, 360-degree panoramic views of the Danube from its roof.",
      "The József Beszédes Bridge in Dunaföldvár was originally constructed in 1930 and is one of the most critical road crossings over the Hungarian Danube.",
      "The city's deep loess soil is highly prone to dramatic landslides, leading to strict, highly engineered stabilization efforts along the riverbanks.",
      "Dunaföldvár features a deeply traditional, rustic pottery culture, historically supplying the surrounding regions with durable, glazed terracotta vessels."
    ]
  },
  "buk": {
    "desc": "Bük is a small, pristine village in western Hungary that has astonishingly transformed itself into one of the absolute titans of European health and wellness tourism. Its incredible rise to global fame is entirely due to the Bükfürdő Thermal & Spa, an unimaginably massive, 14-hectare bathing complex that ranks among the largest and most medically advanced in Europe. The highly potent, incredibly mineral-rich thermal water was discovered purely by accident in 1957 during exploratory drilling for oil. Today, the village is an elite, hyper-developed oasis featuring world-class luxury hotels, an internationally renowned championship golf course, and impeccably maintained green parks. Bük is the ultimate, uncompromising destination for premium physical regeneration and luxury leisure.",
    "facts": [
      "The Bükfürdő complex features 34 distinct pools and utilizes thermal water surfacing from a depth of 1,282 meters at a scorching 58°C.",
      "The water in Bük has an exceptionally high concentration of alkali-hydrogen carbonates, making it incredibly effective for treating severe osteoporosis and joint degradation.",
      "The village hosts the massive, 18-hole Greenfield Golf Course, the first championship-level international golf resort established in Hungary.",
      "Despite its massive tourism infrastructure, the permanent resident population of Bük remains under 4,000, creating a highly manicured, tranquil atmosphere."
    ]
  },
  "oriszentpeter": {
    "desc": "Őriszentpéter is an incredibly beautiful, deeply atmospheric village serving as the undisputed capital of the Őrség (Guard) region in extreme western Hungary. The region is famous for its utterly unique, highly protected 'szer' settlement structure, where groups of historic houses are scattered widely across forested hills rather than built along traditional streets. The village is completely enveloped by the pristine, deeply ancient forests of the Őrség National Park, creating an incredibly tranquil, mystical atmosphere. Őriszentpéter flawlessly preserves its ancient folk architecture, including centuries-old, wooden-skirted belfries and traditional thatched peasant farms. It is a profoundly spiritual, untouched sanctuary for eco-tourists, hikers, and those seeking the absolute purest form of Hungarian rural heritage.",
    "facts": [
      "The Őrség region was originally settled in the 11th century by border guards specifically commissioned by Hungarian kings to defend the western frontier.",
      "The village features a stunning, perfectly preserved 13th-century Romanesque fortress-church built solidly from local red brick.",
      "The Őrség National Park is highly famous for its incredible biodiversity, particularly its massive variety of wild mushrooms and rare butterflies.",
      "The region is renowned for its culinary specialty, pumpkin seed oil (tökmagolaj), which is pressed locally and used extensively in traditional dishes."
    ]
  },
  "papa": {
    "desc": "Pápa is a highly elegant, deeply dignified historic city located gracefully in the tapestries of the Bakony hills in western Hungary. It is often referred to as the 'Athens of Transdanubia' due to its immense historical significance as a major center for the Hungarian Reformed (Calvinist) Church and its prestigious, centuries-old theological college. The city's downtown is an absolute masterpiece of Baroque architecture, featuring expansive, impeccably clean squares and dominated by the monumental Esterházy Palace. Pápa has also aggressively expanded its modern tourism appeal with the spectacular Várkertfürdő (Castle Garden Bath), a highly advanced thermal and adventure spa complex. It is a city of high intellect, majestic aristocratic architecture, and deep geothermal relaxation.",
    "facts": [
      "The Esterházy Palace in Pápa features an incredibly stunning, perfectly restored Baroque interior, including grand ceremonial halls and a massive historic library.",
      "The city's monumental, twin-towered Great Church located on the main square was designed by the legendary architect Jakab Fellner.",
      "The historic Pápa Reformed College educated some of the greatest figures in Hungarian history, including the revolutionary poet Sándor Petőfi and author Mór Jókai.",
      "The Várkertfürdő thermal bath complex is uniquely integrated directly into the ancient, massive English landscape gardens of the Esterházy estate."
    ]
  },
  "badacsony": {
    "desc": "Badacsony is the most dramatic, visually iconic volcanic mountain situated squarely on the northern shores of Lake Balaton. Rising steeply from the water like a massive, truncated cone, the mountain is internationally famous for its spectacular geological formations, most notably the colossal, vertical basalt columns known as 'basalt organs.' Badacsony is not just a geological wonder; it is the spiritual and historical epicenter of one of Hungary's finest white wine regions. The steep, sun-drenched volcanic slopes provide an unparalleled terroir for crisp, highly mineral wines, particularly the indigenous Kéknyelű grape. Hiking up the steep vineyards to the panoramic viewpoints, followed by a tasting in an ancient thatched-roof cellar, is the ultimate Balaton experience.",
    "facts": [
      "The Badacsony mountain is actually the highly eroded core of an extinct, ancient volcano that erupted millions of years ago.",
      "The Kéknyelű grape is an incredibly rare, ancient Hungarian variety that is grown almost exclusively on the slopes of Badacsony.",
      "The mountain features the stunning Róza Szegedy House, a beautiful 18th-century Baroque wine press house that now functions as a literary museum.",
      "The Kisfaludy Lookout Tower, located at the very peak of the mountain at 438 meters, offers an incredible, sweeping 360-degree panorama of the entire lake."
    ]
  },
  "heviz": {
    "desc": "Hévíz is an exceptionally elegant, world-renowned spa town in western Hungary, whose entire identity is defined by the possession of an absolute global geological miracle: Lake Hévíz. Covering over 4.4 hectares, it is the largest biologically active, natural thermal lake in the world in which visitors can safely swim. The lake is fed by a massive underwater cave system that pushes tens of thousands of liters of hot, sulfurous water to the surface every minute, ensuring the lake completely replenishes itself every three days. Surrounded by lush, protected forests, the lake is blanketed with beautiful pink water lilies, creating an impossibly romantic, steaming oasis even in the dead of winter. Hévíz is the undisputed pinnacle of luxury, natural medical tourism in Central Europe.",
    "facts": [
      "The temperature of Lake Hévíz ranges from a balmy 33-38°C in the summer and impressively never drops below 23°C even during freezing winters.",
      "The thick layer of medicinal mud covering the lakebed is highly radioactive and sulfur-rich, utilized globally for treating severe locomotor diseases.",
      "The striking, highly iconic wooden bathhouses built on stilts directly over the center of the lake were originally constructed in the early 20th century.",
      "Roman coins and altar stones discovered deep within the lake prove that its immense healing properties have been utilized for nearly 2,000 years."
    ]
  },
  "zalakaros": {
    "desc": "Zalakaros is a beautifully manicured, extraordinarily peaceful town in southwestern Hungary that has blossomed into one of the country's most beloved and family-friendly spa destinations. Its fame is anchored by its spectacular thermal water, which was serendipitously discovered in 1962 during deep drilling operations. Today, the town boasts a massive, continuously expanding, state-of-the-art thermal and adventure bath complex surrounded by impeccably landscaped, floral parks. The uniquely high fluorine and sulfur content of the water makes it highly effective for treating chronic joint and gynecological issues. Surrounded by the gentle, vineyard-covered hills of the Zala region and offering extensive cycling routes, Zalakaros is an impeccably clean, highly rejuvenating sanctuary for all generations.",
    "facts": [
      "The Zalakaros thermal water surfaces from an incredible depth of 2,000 meters at a blistering temperature of 96°C, requiring significant cooling before use.",
      "The town features an incredible, massive eco-park built around a newly created thermal lake, complete with meditation pavilions and a barefoot reflexology path.",
      "Despite its massive resort infrastructure, Zalakaros maintains an intimate, village-like atmosphere, totally banning high-rise hotels in the town center.",
      "The nearby Kis-Balaton (Little Balaton) wetland reserve is highly accessible from the town and serves as one of Europe's most vital protected bird habitats."
    ]
  },
  "balaton-to": {
    "desc": "Lake Balaton is a spectacular, massive freshwater lake in western Hungary, universally and affectionately known as the 'Hungarian Sea.' Spanning nearly 80 kilometers in length, it is the largest lake in Central Europe and forms the absolute epicenter of Hungary's tourism and summer recreation industry. The lake offers an incredible dichotomy of experiences: the shallow, quickly warming southern shores are a paradise of bustling, family-friendly resort towns and vibrant nightlife, while the dramatic, volcanic northern shores are defined by deep historic heritage, aristocratic elegance, and world-class viticulture. Whether sailing its vast, shimmering turquoise waters, exploring the medieval abbey of Tihany, or tasting crisp wines on the slopes of Badacsony, Lake Balaton is an endlessly captivating, deeply romantic destination.",
    "facts": [
      "Lake Balaton has an extremely shallow average depth of only 3.2 meters, allowing the water temperature to rapidly reach a highly pleasant 26-28°C in summer.",
      "Every summer, the lake hosts the 'Kékszalag' (Blue Ribbon) regatta, which is Europe's oldest and longest round-the-lake sailing competition.",
      "The lake freezes over during extremely harsh winters, historically allowing for immense ice-skating, ice-sailing, and traditional ice-fishing activities.",
      "The entire Balaton Uplands region on the northern shore is heavily protected as a National Park due to its unique volcanic geology and rare biodiversity."
    ]
  },
  "tisza-folyo": {
    "desc": "The Tisza River is deeply embedded in the soul, poetry, and history of the Hungarian people, often romantically referred to as the 'most Hungarian river.' It meanders beautifully through the vast, expansive landscapes of the Great Hungarian Plain, creating an incredibly rich, diverse ecosystem of oxbow lakes, dense floodplain forests, and sandy river beaches. Unlike the highly industrialized Danube, the Tisza retains a wilder, highly authentic, and untamed character, making it the ultimate destination for eco-tourism, multi-day canoe expeditions, and serene angling. The river's dramatic history of devastating floods has forced the construction of massive protective dikes, which today serve as hundreds of kilometers of pristine, uninterrupted bicycle paths through untouched nature.",
    "facts": [
      "The Tisza is incredibly famous for the 'Tisza blooming' (Tiszavirágzás), a spectacular natural phenomenon where millions of massive mayflies emerge for a single day in June.",
      "Following a massive 19th-century river regulation project led by István Széchenyi, the length of the highly winding river was shortened by over 400 kilometers.",
      "The artificial damming of the river in the 1970s created Lake Tisza, which has since evolved into a highly protected UNESCO bird sanctuary and eco-tourism hub.",
      "The river was notoriously unpredictable and dangerous before regulation, causing the catastrophic 1879 flood that completely wiped the city of Szeged off the map."
    ]
  },
  "duna-folyo": {
    "desc": "The Danube River is an awe-inspiring, majestic waterway that serves as the vital, pulsing artery of Central Europe and essentially bisects the nation of Hungary. Its journey through the country is incredibly diverse and visually spectacular, highlighted by the breathtaking, mountainous u-turn of the Danube Bend (Dunakanyar), where it carves through the Börzsöny and Visegrád mountains. As it flows southward, it flawlessly divides the capital city of Budapest into the hilly, historic Buda and the flat, bustling Pest, creating one of the most stunning, UNESCO-recognized urban panoramas in the world. Further south, the river spreads into the vast, wild floodplain forests of Gemenc. The Danube is a monumental force of nature, history, and international commerce.",
    "facts": [
      "The Danube is the second-longest river in Europe, flowing through an incredible ten different countries from the Black Forest in Germany to the Black Sea.",
      "The spectacular Danube Bend is considered one of the most scenic and historically dense river sections in the world, guarded by the mighty Visegrád Castle.",
      "The massive Gemenc Forest, located along the southern Hungarian Danube, is the largest continuous floodplain forest in Central Europe.",
      "Budapest's majestic Chain Bridge, completed in 1849, was the first permanent structure to ever successfully cross the Danube in the entire country."
    ]
  },
  "kekes-teto": {
    "desc": "Kékestető stands proudly as the absolute highest point in Hungary, a majestic peak reaching 1,014 meters above sea level in the heart of the heavily forested Mátra Mountains. Identifiable from miles away by its iconic, towering television transmission tower, the peak is the ultimate pilgrimage site for Hungarian hikers, cyclists, and nature enthusiasts. The mountain is heavily celebrated for its highly distinct, sub-alpine microclimate, characterized by crisp, exceptionally clean air that has made it a renowned climatic health resort for respiratory recovery. During the winter months, Kékestető transforms into the country's highest and most reliable ski resort. It offers awe-inspiring, deeply serene panoramic views across the sweeping northern mountain ranges.",
    "facts": [
      "A highly photographed, tricolor-painted stone monument officially marks the exact summit of 1,014 meters at Kékestető.",
      "The Kékes TV Tower stands 176 meters tall and features an enclosed observation deck and a restaurant, offering views as far as the Tatra Mountains in Slovakia.",
      "The peak boasts Hungary's longest ski run, stretching 1.8 kilometers down the southern slope of the mountain.",
      "Due to its elevation, Kékestető frequently experiences a unique meteorological inversion in winter, where the peak is bathed in sunshine while the valleys below are smothered in fog."
    ]
  },
  "szalajka-volgy-poi": {
    "desc": "The Szalajka Valley is an incredibly enchanting, deeply romantic alpine gorge located at the edge of the village of Szilvásvárad, deep within the spectacular Bükk Mountains. It is widely considered one of the most beautiful and easily accessible nature reserves in Hungary. The valley is a lush, vibrant paradise of ancient beech forests, crystal-clear karst springs, and moss-covered rocks. Its absolute crown jewel is the Fátyol (Veil) Waterfall, where the pristine water cascades brilliantly over a stunning, 17-meter-long naturally terraced limestone formation. Visitors can explore the valley by riding a highly nostalgic, open-air narrow-gauge forest train or by walking the serene, shaded trails. The valley is an exquisite, highly protected sanctuary of pure, untouched natural wonder.",
    "facts": [
      "The unique, terraced structure of the Fátyol Waterfall is created by calcium carbonate continually precipitating out of the fast-flowing karst water.",
      "The valley is home to a highly famous trout breeding farm, and eating freshly smoked or fried local trout is an absolute must-do culinary tradition here.",
      "The Istállós-kő Cave, located high up the valley wall, is a massive prehistoric cavern where 30,000-year-old Neanderthal tools and cave bear bones were discovered.",
      "The Szilvásvárad Forest Train, originally built to transport heavy timber, is now one of the most popular and steepest narrow-gauge railways in the country."
    ]
  },
  "gemenci-erdo-poi": {
    "desc": "The Gemenc Forest is an incredibly vast, fiercely untamed wilderness located in southern Hungary along the lower stretches of the Danube River. It holds the prestigious title of being the largest continuous floodplain forest in Central Europe, representing a highly dynamic, ever-changing ecosystem dictated entirely by the powerful floods of the river. The incredibly dense, jungle-like vegetation of ancient willows, poplars, and deep backwaters creates a spectacular, highly protected sanctuary for wildlife. It is globally famous among hunters and conservationists for hosting the most magnificent, genetically superior population of red deer in the world, alongside wild boars, black storks, and white-tailed eagles. Gemenc is an awe-inspiring, raw immersion into one of Europe's last great river jungles.",
    "facts": [
      "The red deer stags of Gemenc regularly produce world-record-breaking antlers, making the forest internationally legendary in hunting circles.",
      "The forest is best explored via the Gemenc State Forest Railway, a highly nostalgic narrow-gauge train that winds for 30 kilometers through the dense wilderness.",
      "During massive Danube floods, up to 90% of the entire Gemenc Forest can be completely submerged under meters of water.",
      "The forest is a critical, highly protected nesting ground for the extremely rare and highly elusive black stork."
    ]
  },
  "nemzeti-muzeum-poi": {
    "desc": "The Hungarian National Museum is a monument of staggering historical and architectural importance, functioning as the ultimate guardian of the nation's memory and artifacts. Housed in an incredibly majestic, imposing Neoclassical palace in the heart of Budapest, the museum was founded in 1802 by Count Ferenc Széchényi. The building itself is deeply sacred to Hungarians, as its grand front steps served as the legendary stage where the fiery poet Sándor Petőfi allegedly recited the 'National Song', sparking the historic 1848 Revolution against the Habsburg Empire. Inside, its vast, opulent halls guide visitors through an awe-inspiring, comprehensive timeline of the Carpathian Basin, from prehistoric Celtic gold to the coronation mantle of Hungarian kings. It is the absolute, indispensable starting point for understanding Hungarian history.",
    "facts": [
      "The museum was built between 1837 and 1847, designed by the brilliant architect Mihály Pollack, and is considered a masterpiece of Hungarian Neoclassicism.",
      "For decades, the museum famously housed and protected the Holy Crown of Hungary after its return from the United States in 1978.",
      "The spectacular, incredibly intricate Roman mosaic floors discovered in Pannonia have been flawlessly reconstructed and embedded into the museum's exhibition halls.",
      "The museum's expansive, beautifully landscaped gardens (Múzeumkert) have served for nearly two centuries as a central, highly symbolic gathering place for national political demonstrations."
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
    print(f"Updated batch 3 in {ts_file}")

if __name__ == "__main__":
    update_ts_file('lib/visualLab/data/hungaryPoi.ts')
