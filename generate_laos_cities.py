import json
import os
import subprocess

pois = {
    "vientiane-cities-v2": {
        "en": [
            "Capital of Laos, situated along the curve of the Mekong River.",
            "Home to Pha That Luang, a gold-covered stupa and national symbol.",
            "Features Patuxai, a massive war monument resembling the Arc de Triomphe.",
            "Buddha Park contains over 200 Hindu and Buddhist concrete statues.",
            "The city served as the French administrative capital during the colonial era.",
            "Known for its laid-back atmosphere, tree-lined boulevards, and temples."
        ],
        "de": [
            "Hauptstadt von Laos, gelegen an einer Biegung des Mekong-Flusses.",
            "Heimat von Pha That Luang, einem goldbedeckten Stupa und Nationalsymbol.",
            "Das Kriegerdenkmal Patuxai ähnelt dem Arc de Triomphe in Paris.",
            "Der Buddha-Park enthält über 200 hinduistische und buddhistische Statuen.",
            "Während der Kolonialzeit war die Stadt das französische Verwaltungszentrum.",
            "Bekannt für ihre entspannte Atmosphäre und von Bäumen gesäumte Straßen."
        ],
        "hu": [
            "Laosz fővárosa, amely a Mekong folyó egyik kanyarulatában fekszik.",
            "Itt található a Pha That Luang, egy aranyozott sztúpa és nemzeti szimbólum.",
            "A Patuxai háborús emlékmű a párizsi Diadalívhez hasonlít.",
            "A Buddha Park több mint 200 hindu és buddhista betonszobrot rejt.",
            "A gyarmati korszakban a város francia közigazgatási központ volt.",
            "Híres nyugodt légköréről, fákkal szegélyezett sugárútjairól és templomairól."
        ],
        "ro": [
            "Capitala statului Laos, situată de-a lungul râului Mekong.",
            "Găzduiește Pha That Luang, o stupă aurită și un simbol național.",
            "Monumentul de război Patuxai seamănă cu Arcul de Triumf din Paris.",
            "Parcul Buddha conține peste 200 de statui hinduse și budiste din beton.",
            "Orașul a fost centrul administrativ francez în timpul epocii coloniale.",
            "Cunoscut pentru atmosfera relaxată și bulevardele străjuite de copaci."
        ]
    },
    "luang-prabang-cities-v2": {
        "en": [
            "Former royal capital located at the confluence of the Nam Khan and Mekong rivers.",
            "Designated a UNESCO World Heritage site in 1995 for its architectural preservation.",
            "Famous for Mount Phousi, a 100-meter high hill in the center with a hilltop temple.",
            "Kuang Si Falls, a three-tiered waterfall with turquoise pools, is located nearby.",
            "The morning alms giving ceremony involves hundreds of monks collecting food.",
            "Houses the Royal Palace Museum, built in 1904 during the French colonial era."
        ],
        "de": [
            "Ehemalige königliche Hauptstadt am Zusammenfluss von Nam Khan und Mekong.",
            "Wurde 1995 wegen ihrer architektonischen Erhaltung zum UNESCO-Weltkulturerbe erklärt.",
            "Berühmt für den Mount Phousi, einen 100 Meter hohen Hügel mit einem Tempel.",
            "Die Kuang Si Wasserfälle mit ihren türkisfarbenen Becken liegen in der Nähe.",
            "An der morgendlichen Almosengabe nehmen Hunderte von Mönchen teil.",
            "Beherbergt das Royal Palace Museum, das 1904 erbaut wurde."
        ],
        "hu": [
            "Egykori királyi főváros a Nam Khan és a Mekong folyók összefolyásánál.",
            "1995-ben építészeti öröksége miatt az UNESCO Világörökség része lett.",
            "Híres a Phousi-hegyről, egy 100 méter magas dombról a városközpontban.",
            "A Kuang Si-vízesés türkizkék medencéivel a közelben található.",
            "A reggeli alamizsnaosztáson szerzetesek százai gyűjtenek élelmet.",
            "Itt található az 1904-ben épült Királyi Palota Múzeum is."
        ],
        "ro": [
            "Fostă capitală regală situată la confluența râurilor Nam Khan și Mekong.",
            "Desemnată sit al Patrimoniului Mondial UNESCO în 1995 pentru arhitectura sa.",
            "Renumită pentru Muntele Phousi, un deal de 100 de metri cu un templu în vârf.",
            "Cascadele Kuang Si, cu bazinele lor turcoaz, se află în apropiere.",
            "Ceremonia matinală de pomană implică sute de călugări care colectează hrană.",
            "Găzduiește Muzeul Palatului Regal, construit în 1904 în epoca colonială."
        ]
    },
    "pakse-cities-v2": {
        "en": [
            "Founded by the French in 1905 as an administrative outpost on the Mekong.",
            "Serves as the primary gateway to the fertile Bolaven Plateau.",
            "The city is the capital of Champasak Province in southern Laos.",
            "Nearby is the ancient Khmer Hindu temple complex of Vat Phou, a UNESCO site.",
            "Features the massive Dao Heuang Market, one of the biggest in the country.",
            "The Pakse Bridge over the Mekong River was opened in 2000."
        ],
        "de": [
            "1905 von den Franzosen als Verwaltungsposten am Mekong gegründet.",
            "Dient als wichtigstes Tor zum fruchtbaren Bolaven-Plateau.",
            "Die Stadt ist die Hauptstadt der Provinz Champasak im Süden von Laos.",
            "In der Nähe befindet sich der alte Khmer-Tempelkomplex Vat Phou.",
            "Verfügt über den riesigen Dao Heuang Markt, einen der größten des Landes.",
            "Die Pakse-Brücke über den Mekong wurde im Jahr 2000 eröffnet."
        ],
        "hu": [
            "A franciák alapították 1905-ben közigazgatási központként a Mekong partján.",
            "A termékeny Bolaven-fennsík elsődleges kapujaként szolgál.",
            "A város a dél-laoszi Champasak tartomány fővárosa.",
            "A közelben található a Vat Phou ősi khmer templomkomplexum.",
            "Itt működik a hatalmas Dao Heuang piac, az ország egyik legnagyobbika.",
            "A Mekong folyón átívelő Pakse-hidat 2000-ben nyitották meg."
        ],
        "ro": [
            "Fondat de francezi în 1905 ca avanpost administrativ pe râul Mekong.",
            "Servește ca poartă principală de acces către fertilul Platou Bolaven.",
            "Orașul este capitala provinciei Champasak din sudul statului Laos.",
            "În apropiere se află complexul antic al templului hindus Khmer Vat Phou.",
            "Găzduiește masiva Piață Dao Heuang, una dintre cele mai mari din țară.",
            "Podul Pakse peste râul Mekong a fost deschis în anul 2000."
        ]
    },
    "savannakhet-cities-v2": {
        "en": [
            "Also known as Kaysone Phomvihane, it is the second-largest city in Laos.",
            "The city's historical name translates to 'City of Gold'.",
            "Features a well-preserved historic quarter with French colonial architecture.",
            "The Second Thai-Lao Friendship Bridge connects it directly to Thailand.",
            "That Inhang Stupa is an important sacred Buddhist site located nearby.",
            "The local Dinosaur Museum exhibits fossils discovered in the province."
        ],
        "de": [
            "Auch als Kaysone Phomvihane bekannt, ist es die zweitgrößte Stadt in Laos.",
            "Der historische Name der Stadt lässt sich mit 'Stadt des Goldes' übersetzen.",
            "Verfügt über ein gut erhaltenes historisches Viertel mit Kolonialarchitektur.",
            "Die Zweite Thailändisch-Laotische Freundschaftsbrücke verbindet sie mit Thailand.",
            "Der That Inhang Stupa ist eine wichtige heilige buddhistische Stätte.",
            "Das lokale Dinosauriermuseum stellt in der Provinz entdeckte Fossilien aus."
        ],
        "hu": [
            "Kaysone Phomvihane néven is ismert, Laosz második legnagyobb városa.",
            "A város történelmi nevének jelentése 'Az arany városa'.",
            "Jól megőrzött történelmi negyeddel és francia gyarmati építészettel büszkélkedhet.",
            "A Második Thai-Lao Barátság Hídja közvetlenül köti össze Thaifölddel.",
            "A That Inhang sztúpa egy fontos szent buddhista hely a közelben.",
            "A helyi Dinoszaurusz Múzeum a tartományban talált kövületeket mutatja be."
        ],
        "ro": [
            "Cunoscut și sub numele de Kaysone Phomvihane, este al doilea oraș ca mărime.",
            "Numele istoric al orașului se traduce prin 'Orașul de Aur'.",
            "Prezintă un cartier istoric bine conservat, cu arhitectură colonială franceză.",
            "Al Doilea Pod al Prieteniei Thai-Lao îl conectează direct la Thailanda.",
            "Stupa That Inhang este un important sit sacru budist din apropiere.",
            "Muzeul local al dinozaurilor expune fosile descoperite în provincie."
        ]
    },
    "thakhek-cities-v2": {
        "en": [
            "Located on the Mekong River, directly opposite the Thai town of Nakhon Phanom.",
            "Known for its restored French colonial-era shophouses around the old square.",
            "A popular starting point for the Thakhek Loop, a famous motorcycle route.",
            "Nearby Kong Lor Cave is a massive karst limestone cave navigable by boat.",
            "The surrounding area features dramatic karst rock formations and peaks.",
            "Founded as a colonial outpost, it served as a major regional trading hub."
        ],
        "de": [
            "Liegt am Mekong, direkt gegenüber der thailändischen Stadt Nakhon Phanom.",
            "Bekannt für seine restaurierten Kolonialhäuser rund um den alten Platz.",
            "Ein beliebter Ausgangspunkt für den Thakhek Loop, eine Motorradroute.",
            "Die nahegelegene Kong Lor Höhle ist eine riesige, mit dem Boot befahrbare Karsthöhle.",
            "Die Umgebung bietet dramatische Karstfelsformationen und Gipfel.",
            "Gegründet als kolonialer Außenposten, diente es als wichtiges Handelszentrum."
        ],
        "hu": [
            "A Mekong folyó partján fekszik, szemben a thai Nakhon Phanom városával.",
            "A régi tér körüli felújított francia gyarmati üzletházairól ismert.",
            "A híres Thakhek Loop motorkerékpáros útvonal népszerű kiindulópontja.",
            "A közeli Kong Lor egy hatalmas, csónakkal hajózható mészkőbarlang.",
            "A környéket drámai karszt sziklaalakzatok és hegycsúcsok jellemzik.",
            "Gyarmati előőrsként alapították, a régió egyik fő kereskedelmi központja volt."
        ],
        "ro": [
            "Situat pe râul Mekong, exact vizavi de orașul thailandez Nakhon Phanom.",
            "Cunoscut pentru clădirile comerciale din epoca colonială franceză.",
            "Un punct de plecare popular pentru Thakhek Loop, un traseu de motociclete.",
            "Peștera Kong Lor din apropiere este o cavernă de calcar navigabilă cu barca.",
            "Zona înconjurătoare prezintă formațiuni stâncoase și vârfuri carstice.",
            "Fondat ca avanpost colonial, a servit ca un important centru comercial regional."
        ]
    },
    "vang-vieng-cities-v2": {
        "en": [
            "Situated on the Nam Song River and surrounded by striking limestone karst mountains.",
            "Originally served as a staging post between Vientiane and Luang Prabang.",
            "Tham Phu Kham cave features a bronze reclining Buddha and a blue lagoon.",
            "Known for outdoor activities like kayaking, rock climbing, and hot air ballooning.",
            "Has transitioned from a backpacker party town to an eco-tourism destination.",
            "Several organic farms in the area produce mulberry tea and local wine."
        ],
        "de": [
            "Gelegen am Fluss Nam Song und umgeben von markanten Kalksteinkarstbergen.",
            "Diente ursprünglich als Zwischenstation zwischen Vientiane und Luang Prabang.",
            "Die Höhle Tham Phu Kham beherbergt einen liegenden Buddha und eine blaue Lagune.",
            "Bekannt für Outdoor-Aktivitäten wie Kajakfahren, Klettern und Ballonfahrten.",
            "Hat sich von einer Backpacker-Partystadt zu einem Ökotourismus-Ziel entwickelt.",
            "Mehrere Bio-Bauernhöfe in der Umgebung produzieren Maulbeertee und lokalen Wein."
        ],
        "hu": [
            "A Nam Song folyó partján fekszik, látványos mészkőkarszt hegyekkel övezve.",
            "Eredetileg Vientiane és Luang Prabang közötti pihenőállomásként szolgált.",
            "A Tham Phu Kham barlang egy fekvő Buddhát és egy kék lagúnát is rejt.",
            "Olyan szabadtéri tevékenységekről ismert, mint a kajakozás és a sziklamászás.",
            "Hátizsákos partivárosból fokozatosan ökoturisztikai célponttá alakult.",
            "A környéken számos biogazdaság termel eperfateát és helyi bort."
        ],
        "ro": [
            "Situat pe râul Nam Song și înconjurat de munți de calcar carstic impresionanți.",
            "A servit inițial ca popas între Vientiane și Luang Prabang.",
            "Peștera Tham Phu Kham prezintă un Buddha culcat din bronz și o lagună albastră.",
            "Cunoscut pentru activități în aer liber precum caiacul și alpinismul.",
            "A evoluat dintr-un oraș de petrecere pentru backpackeri într-o destinație ecoturistică.",
            "Mai multe ferme organice din zonă produc ceai de dud și vin local."
        ]
    },
    "phonsavan-cities-v2": {
        "en": [
            "Capital of Xiangkhouang Province, built in the late 1970s to replace the old capital.",
            "Serves as the main gateway to the Plain of Jars archaeological landscape.",
            "The region was heavily bombed during the Secret War, leaving unexploded ordnance.",
            "Known for its cooler climate due to its elevation on the Xiangkhouang Plateau.",
            "Locals creatively use scrap metal from war remnants to make everyday tools.",
            "Features a unique landscape of pine forests, which is uncommon in Laos."
        ],
        "de": [
            "Hauptstadt der Provinz Xiangkhouang, Ende der 1970er Jahre erbaut.",
            "Dient als wichtigstes Tor zur archäologischen Landschaft der Ebene der Tonkrüge.",
            "Die Region wurde während des Geheimen Krieges stark bombardiert.",
            "Bekannt für ihr kühleres Klima aufgrund der Lage auf dem Xiangkhouang-Plateau.",
            "Einheimische nutzen Altmetall von Kriegsüberresten für alltägliche Werkzeuge.",
            "Verfügt über eine einzigartige Landschaft mit Kiefernwäldern, die in Laos selten ist."
        ],
        "hu": [
            "Xiangkhouang tartomány fővárosa, melyet a régi központ helyett építettek az 1970-es években.",
            "Ez a fő kapu a Korsók Völgye elnevezésű régészeti tájhoz.",
            "A régiót súlyosan bombázták a titkos háború alatt, sok fel nem robbant lőszer maradt.",
            "A Xiangkhouang-fennsíkon fekszik, ezért az éghajlata hűvösebb a megszokottnál.",
            "A helyiek a háborús roncshulladékot mindennapi eszközök készítésére használják.",
            "Egyedülálló fenyőerdős tájjal rendelkezik, ami ritka Laoszban."
        ],
        "ro": [
            "Capitala provinciei Xiangkhouang, construită la sfârșitul anilor 1970.",
            "Servește ca poartă principală către peisajul arheologic Câmpia Urcioarelor.",
            "Regiunea a fost puternic bombardată, lăsând în urmă muniție neexplodată.",
            "Cunoscut pentru clima mai rece datorită altitudinii sale pe Platoul Xiangkhouang.",
            "Localnicii folosesc fierul vechi din resturile de război pentru a face unelte.",
            "Prezintă un peisaj unic de păduri de pini, care este neobișnuit în Laos."
        ]
    },
    "xam-neua-cities-v2": {
        "en": [
            "Capital of Houaphanh Province in northeastern Laos, located in a mountainous valley.",
            "Known for the nearby Viengxay caves, which served as the Pathet Lao headquarters.",
            "The city produces some of the finest traditional Lao silk and cotton textiles.",
            "Due to its high elevation, the climate is cooler and often covered in morning mist.",
            "Features a distinct communist-style monument and architecture from the post-war era.",
            "A key regional hub connecting trade routes between northern Laos and Vietnam."
        ],
        "de": [
            "Hauptstadt der Provinz Houaphanh im Nordosten von Laos, in einem Bergtal gelegen.",
            "Bekannt für die nahegelegenen Viengxay-Höhlen, das Hauptquartier der Pathet Lao.",
            "Die Stadt produziert einige der feinsten traditionellen laotischen Seidentextilien.",
            "Aufgrund der Höhenlage ist das Klima kühler und oft in Morgennebel gehüllt.",
            "Verfügt über ein Denkmal im kommunistischen Stil und Architektur der Nachkriegszeit.",
            "Ein wichtiger regionaler Knotenpunkt für Handelsrouten nach Vietnam."
        ],
        "hu": [
            "Houaphanh tartomány fővárosa Északkelet-Laoszban, egy hegyvidéki völgyben.",
            "Híres a közeli Viengxay-barlangokról, amelyek a Pathet Lao főhadiszállásaként szolgáltak.",
            "A város a legfinomabb hagyományos laoszi selyem- és pamuttextíliákat állítja elő.",
            "Nagy magasságának köszönhetően klímája hűvösebb, és gyakran borítja reggeli köd.",
            "Különleges, kommunista stílusú emlékművek és háború utáni építészet jellemzi.",
            "Fontos regionális csomópont, amely Észak-Laosz és Vietnám kereskedelmi útvonalait köti össze."
        ],
        "ro": [
            "Capitala provinciei Houaphanh din nord-estul Laosului, într-o vale muntoasă.",
            "Cunoscut pentru peșterile Viengxay, care au servit drept sediu Pathet Lao.",
            "Orașul produce unele dintre cele mai fine textile tradiționale din mătase.",
            "Datorită altitudinii sale mari, clima este mai rece și adesea acoperită de ceață.",
            "Prezintă un monument și o arhitectură în stil comunist din epoca postbelică.",
            "Un hub regional cheie care conectează rutele comerciale către Vietnam."
        ]
    },
    "luang-namtha-cities-v2": {
        "en": [
            "The largest settlement in northwestern Laos and capital of its namesake province.",
            "A major base for trekking into the Nam Ha National Protected Area.",
            "The local population includes numerous ethnic minority groups such as Akha and Hmong.",
            "The town was relocated to higher ground after floods destroyed the old settlement in 1973.",
            "Features the Luang Namtha Stupa and the Golden Stupa offering panoramic views.",
            "Known for its traditional herbal saunas and vibrant night market."
        ],
        "de": [
            "Die größte Siedlung im Nordwesten von Laos und Hauptstadt der gleichnamigen Provinz.",
            "Ein wichtiger Ausgangspunkt für Trekking-Touren in das Nam Ha Naturschutzgebiet.",
            "Die lokale Bevölkerung umfasst zahlreiche ethnische Minderheiten wie Akha und Hmong.",
            "Die Stadt wurde 1973 nach verheerenden Überschwemmungen auf höheres Gelände verlegt.",
            "Verfügt über den Luang Namtha Stupa und den Goldenen Stupa mit Panoramablick.",
            "Bekannt für ihre traditionellen Kräutersaunen und den lebhaften Nachtmarkt."
        ],
        "hu": [
            "Északnyugat-Laosz legnagyobb települése és az azonos nevű tartomány fővárosa.",
            "A Nam Ha Nemzeti Védett Területre induló túrák egyik legfőbb bázisa.",
            "A helyi lakosság számos kisebbségi etnikai csoportot, például akhákat és hmongokat foglal magába.",
            "A várost magasabb területre költöztették, miután 1973-ban az árvizek elpusztították a régit.",
            "Itt található a Luang Namtha sztúpa és az Arany sztúpa, ahonnan panorámás kilátás nyílik.",
            "Hagyományos gyógynövényes szaunáiról és élénk éjszakai piacáról ismert."
        ],
        "ro": [
            "Cea mai mare așezare din nord-vestul Laosului și capitala provinciei omonime.",
            "O bază majoră pentru drumeții în Aria Națională Protejată Nam Ha.",
            "Populația locală include numeroase grupuri minoritare, cum ar fi Akha și Hmong.",
            "Orașul a fost mutat pe un teren mai înalt după inundațiile din 1973.",
            "Prezintă Stupa Luang Namtha și Stupa de Aur, care oferă vederi panoramice.",
            "Cunoscut pentru saunele sale tradiționale cu plante și piața de noapte."
        ]
    },
    "huay-xai-cities-v2": {
        "en": [
            "Located on the Mekong River border with Thailand, opposite Chiang Khong.",
            "The traditional starting point for the slow boat journey to Luang Prabang.",
            "Features Fort Carnot, a well-preserved French colonial military fortification.",
            "Gateway to the Bokeo Nature Reserve, home to the Gibbon Experience canopy tours.",
            "Historically known for commercial jade and sapphire trading operations.",
            "The Fourth Thai-Lao Friendship Bridge opened here in 2013."
        ],
        "de": [
            "Liegt an der Mekong-Grenze zu Thailand, gegenüber von Chiang Khong.",
            "Der traditionelle Ausgangspunkt für die Bootsfahrt nach Luang Prabang.",
            "Verfügt über Fort Carnot, eine gut erhaltene französische Militärfestung.",
            "Tor zum Bokeo-Naturreservat, der Heimat der Gibbon Experience Canopy Touren.",
            "Historisch bekannt für den kommerziellen Handel mit Jade und Saphiren.",
            "Die vierte thailändisch-laotische Freundschaftsbrücke wurde hier 2013 eröffnet."
        ],
        "hu": [
            "A thaiföldi határt jelentő Mekong folyó partján fekszik, Chiang Khonggal szemben.",
            "A Luang Prabangba tartó hagyományos lassú hajóutak kiindulópontja.",
            "Itt található a Fort Carnot, egy jól megőrzött francia gyarmati katonai erőd.",
            "A Bokeo Természetvédelmi Terület kapuja, amely a Gibbon Experience túrák otthona.",
            "Történelmileg a kereskedelmi jade- és zafírkereskedelmi tevékenységéről ismert.",
            "A negyedik thai-laoszi barátság hídját 2013-ban nyitották meg itt."
        ],
        "ro": [
            "Situat la granița râului Mekong cu Thailanda, vizavi de Chiang Khong.",
            "Punctul tradițional de plecare pentru călătoria cu barca spre Luang Prabang.",
            "Găzduiește Fort Carnot, o fortificație militară colonială franceză.",
            "Poarta către Rezervația Bokeo, casa tururilor cu tiroliana Gibbon Experience.",
            "Cunoscut istoric pentru operațiunile comerciale de tranzacționare a jadului și safirelor.",
            "Al Patrulea Pod al Prieteniei Thai-Lao a fost deschis aici în 2013."
        ]
    },
    "muang-xay-cities-v2": {
        "en": [
            "Capital of Oudomxay Province and a major transport hub connecting China and Vietnam.",
            "Features the Phou That stupa, which overlooks the town from a central hill.",
            "Has a significant Chinese cultural and economic influence due to border trade.",
            "The surrounding mountains are home to numerous ethnic minority villages.",
            "Chom Ong Cave, one of the longest cave systems in Laos, is located nearby.",
            "The local market is a bustling center for agricultural and imported goods."
        ],
        "de": [
            "Hauptstadt der Provinz Oudomxay und ein wichtiger Verkehrsknotenpunkt.",
            "Verfügt über den Phou That Stupa, der auf einem Hügel über der Stadt thront.",
            "Hat aufgrund des Grenzhandels einen starken chinesischen wirtschaftlichen Einfluss.",
            "Die umliegenden Berge beheimaten zahlreiche ethnische Minderheitendörfer.",
            "Die Chom Ong Höhle, eines der längsten Höhlensysteme in Laos, liegt in der Nähe.",
            "Der lokale Markt ist ein geschäftiges Zentrum für landwirtschaftliche Produkte."
        ],
        "hu": [
            "Oudomxay tartomány fővárosa, egy fontos közlekedési csomópont Kína és Vietnám felé.",
            "Itt található a Phou That sztúpa, amely egy központi dombról tekint le a városra.",
            "A határ menti kereskedelem miatt jelentős a kínai kulturális és gazdasági befolyás.",
            "A környező hegyekben számos etnikai kisebbségi falu található.",
            "A Chom Ong-barlang, Laosz egyik leghosszabb barlangrendszere a közelben található.",
            "A helyi piac a mezőgazdasági és importált áruk nyüzsgő központja."
        ],
        "ro": [
            "Capitala provinciei Oudomxay și un nod major de transport către China.",
            "Prezintă stupa Phou That, care domină orașul de pe un deal central.",
            "Are o influență culturală și economică chineză semnificativă datorită comerțului.",
            "Munții din jur găzduiesc numeroase sate aparținând minorităților etnice.",
            "Peștera Chom Ong, unul dintre cele mai lungi sisteme de peșteri, se află în apropiere.",
            "Piața locală este un centru plin de viață pentru produse agricole."
        ]
    },
    "sainyabuli-cities-v2": {
        "en": [
            "Capital of Sainyabuli Province, located in the only Lao province completely west of the Mekong.",
            "The province is known for having the largest domestic elephant population in Laos.",
            "Surrounded by rugged mountain ranges and dense forests.",
            "Features the beautiful Wat Si Boun Huang temple with its ancient stupa.",
            "The local economy relies heavily on agriculture, logging, and elephant conservation.",
            "Hosts cultural festivals that celebrate the historical importance of working elephants."
        ],
        "de": [
            "Hauptstadt der Provinz Sainyabuli, die vollständig westlich des Mekong liegt.",
            "Die Provinz ist bekannt für die größte Population heimischer Elefanten in Laos.",
            "Umgeben von schroffen Gebirgszügen und dichten tropischen Wäldern.",
            "Verfügt über den wunderschönen Tempel Wat Si Boun Huang mit seinem alten Stupa.",
            "Die lokale Wirtschaft stützt sich stark auf Landwirtschaft und Elefantenschutz.",
            "Veranstaltet Kulturfestivals, die die historische Bedeutung von Arbeitselefanten feiern."
        ],
        "hu": [
            "Sainyabuli tartomány fővárosa, amely az egyetlen teljesen a Mekongtól nyugatra fekvő tartomány.",
            "A tartomány arról ismert, hogy itt él a legnagyobb hazai elefántpopuláció Laoszban.",
            "Zord hegyvonulatok és sűrű trópusi erdők veszik körül a várost.",
            "Itt található a gyönyörű Wat Si Boun Huang templom ősi sztúpájával.",
            "A helyi gazdaság nagymértékben támaszkodik a mezőgazdaságra és az elefántvédelemre.",
            "Kulturális fesztiváloknak ad otthont, amelyek a munkahordó elefántok történelmi jelentőségét ünneplik."
        ],
        "ro": [
            "Capitala provinciei Sainyabuli, situată complet la vest de râul Mekong.",
            "Provincia este cunoscută pentru cea mai mare populație de elefanți domestici din Laos.",
            "Înconjurat de lanțuri muntoase accidentate și păduri dense.",
            "Găzduiește frumosul templu Wat Si Boun Huang cu stupa sa antică.",
            "Economia locală se bazează pe agricultură, exploatare forestieră și conservarea elefanților.",
            "Găzduiește festivaluri care celebrează importanța istorică a elefanților."
        ]
    },
    "pakxan-cities-v2": {
        "en": [
            "Capital of Bolikhamxai Province, situated at the confluence of the Nam San and Mekong rivers.",
            "Gateway to the dense jungles of the Phou Khao Khouay National Protected Area.",
            "Features Wat Phabath, a temple famous for housing a large Buddha footprint.",
            "Surrounded by extensive wetland areas and agricultural plains.",
            "Historically served as a minor trading post between Vientiane and the southern provinces.",
            "The town's location makes it a crucial transport link along Route 13."
        ],
        "de": [
            "Hauptstadt der Provinz Bolikhamxai am Zusammenfluss von Nam San und Mekong.",
            "Tor zu den dichten Dschungeln des Phou Khao Khouay Naturschutzgebietes.",
            "Verfügt über Wat Phabath, einen Tempel, der für einen großen Buddha-Fußabdruck bekannt ist.",
            "Umgeben von ausgedehnten Feuchtgebieten und landwirtschaftlichen Ebenen.",
            "Diente historisch als kleinerer Handelsposten zwischen Vientiane und dem Süden.",
            "Die Lage der Stadt macht sie zu einer wichtigen Verkehrsverbindung an der Route 13."
        ],
        "hu": [
            "Bolikhamxai tartomány fővárosa, a Nam San és a Mekong folyók összefolyásánál fekszik.",
            "A Phou Khao Khouay Nemzeti Védett Terület sűrű dzsungeleinek kapuja.",
            "Itt található a Wat Phabath templom, amely egy nagy Buddha-lábnyomról híres.",
            "Kiterjedt vizes élőhelyek és kiterjedt mezőgazdasági síkságok veszik körül.",
            "Történelmileg egy kisebb kereskedelmi állomásként szolgált Vientiane és a déli tartományok között.",
            "A város elhelyezkedése miatt kulcsfontosságú közlekedési csomópont a 13-as út mentén."
        ],
        "ro": [
            "Capitala provinciei Bolikhamxai, situată la confluența râurilor Nam San și Mekong.",
            "Poarta către junglele dese ale Ariei Naționale Protejate Phou Khao Khouay.",
            "Prezintă Wat Phabath, un templu renumit pentru o amprentă uriașă a lui Buddha.",
            "Înconjurat de zone umede extinse și câmpii agricole fertile.",
            "Istoric, a servit ca un post comercial minor între Vientiane și provinciile din sud.",
            "Locația orașului îl face o legătură de transport crucială de-a lungul Rutei 13."
        ]
    },
    "attapeu-cities-v2": {
        "en": [
            "Capital of Attapeu Province in the southeast, situated in a rugged, remote valley.",
            "Heavily affected by the Ho Chi Minh trail network during the Vietnam War.",
            "Features a Russian-made SAM missile displayed as a war monument in the town center.",
            "Home to diverse ethnic minority populations with unique cultural traditions.",
            "Serves as the main gateway to the Dong Ampham National Protected Area.",
            "The local market offers unique forest products gathered from the surrounding jungles."
        ],
        "de": [
            "Hauptstadt der südöstlichen Provinz Attapeu, gelegen in einem abgelegenen Tal.",
            "Wurde während des Vietnamkriegs stark vom Ho-Chi-Minh-Pfad beeinflusst.",
            "Verfügt über eine russische SAM-Rakete, die als Kriegsdenkmal im Zentrum ausgestellt ist.",
            "Heimat diverser ethnischer Minderheiten mit einzigartigen kulturellen Traditionen.",
            "Dient als wichtigstes Tor zum Dong Ampham Naturschutzgebiet.",
            "Der lokale Markt bietet einzigartige Waldprodukte aus den umliegenden Dschungeln."
        ],
        "hu": [
            "Attapeu tartomány fővárosa délkeleten, amely egy zord és távoli völgyben helyezkedik el.",
            "A vietnámi háború idején a Ho Si Minh-ösvény hálózata erősen érintette a területet.",
            "A városközpontban háborús emlékműként egy orosz gyártmányú SAM rakéta van kiállítva.",
            "Különböző etnikai kisebbségi populációknak ad otthont egyedi kulturális hagyományokkal.",
            "Ez a Dong Ampham Nemzeti Védett Terület fő belépési pontja.",
            "A helyi piac a környező dzsungelekből gyűjtött egyedi erdei termékeket kínál."
        ],
        "ro": [
            "Capitala provinciei Attapeu din sud-est, situată într-o vale accidentată.",
            "Puternic afectată de rețeaua de trasee Ho Chi Minh în timpul Războiului din Vietnam.",
            "Prezintă o rachetă SAM fabricată în Rusia, expusă ca monument de război.",
            "Găzduiește diverse populații minoritare etnice cu tradiții culturale unice.",
            "Servește ca poartă principală de acces către Rezervația Dong Ampham.",
            "Piața locală oferă produse forestiere unice adunate din junglele din jur."
        ]
    },
    "salavan-cities-v2": {
        "en": [
            "Capital of Salavan Province, an area heavily damaged during the Indochina wars.",
            "The surrounding region is known for high-quality coffee and cardamom production.",
            "Situated near the fertile and climatically cool Bolaven Plateau.",
            "Home to diverse indigenous Mon-Khmer speaking ethnic groups.",
            "The nearby Tad Lo area is famous for its stunning cascading waterfalls.",
            "The town itself has a quiet, laid-back atmosphere with minimal tourist infrastructure."
        ],
        "de": [
            "Hauptstadt der Provinz Salavan, die während der Indochinakriege stark zerstört wurde.",
            "Die Region ist bekannt für den Anbau von hochwertigem Kaffee und Kardamom.",
            "Liegt in der Nähe des fruchtbaren und klimatisch kühlen Bolaven-Plateaus.",
            "Heimat verschiedener indigener Mon-Khmer sprechender ethnischer Gruppen.",
            "Das nahegelegene Tad Lo Gebiet ist berühmt für seine atemberaubenden Wasserfälle.",
            "Die Stadt selbst hat eine ruhige Atmosphäre mit minimaler touristischer Infrastruktur."
        ],
        "hu": [
            "Salavan tartomány fővárosa, mely terület súlyos károkat szenvedett az indokínai háborúk során.",
            "A környező régió a kiváló minőségű kávé és a kardamom termesztéséről ismert.",
            "A termékeny és hűvösebb éghajlatú Bolaven-fennsík közelében található.",
            "Különféle őslakos, mon-khmer nyelven beszélő etnikai csoportoknak ad otthont.",
            "A közeli Tad Lo terület lenyűgöző, lépcsőzetes vízeséseiről híres.",
            "Maga a város csendes, nyugodt légkörrel és minimális turisztikai infrastruktúrával rendelkezik."
        ],
        "ro": [
            "Capitala provinciei Salavan, o zonă grav avariată în timpul războaielor din Indochina.",
            "Regiunea înconjurătoare este cunoscută pentru producția de cafea și cardamom.",
            "Situat în apropierea Platoului Bolaven, o zonă fertilă cu o climă răcoroasă.",
            "Găzduiește diverse grupuri etnice indigene vorbitoare de limbi Mon-Khmer.",
            "Zona Tad Lo din apropiere este renumită pentru cascadele sale uimitoare.",
            "Orașul în sine are o atmosferă liniștită, cu o infrastructură turistică minimă."
        ]
    },
    "phongsaly-cities-v2": {
        "en": [
            "The northernmost provincial capital in Laos, situated at a high altitude of 1,400 meters.",
            "Features distinct Yunnanese wooden architecture due to its proximity to China.",
            "The cooler climate is ideal for cultivating high-mountain green tea.",
            "Famous for a 400-year-old tea pavilion and ancient tea trees in the surrounding hills.",
            "Historically and culturally more closely tied to neighboring Chinese regions.",
            "Surrounded by rugged mountain terrain that remains largely untouched by modernization."
        ],
        "de": [
            "Die nördlichste Provinzhauptstadt in Laos, auf einer Höhe von 1.400 Metern gelegen.",
            "Verfügt wegen der Nähe zu China über eine ausgeprägte Yunnan-Holzarchitektur.",
            "Das kühlere Klima ist ideal für den Anbau von Hochgebirgs-Grüntee.",
            "Berühmt für einen 400 Jahre alten Teepavillon und alte Teebäume in den Bergen.",
            "Historisch und kulturell enger mit den benachbarten chinesischen Regionen verbunden.",
            "Umgeben von schroffem Bergland, das von der Modernisierung weitgehend unberührt ist."
        ],
        "hu": [
            "Laosz legészakibb tartományi fővárosa, 1400 méteres tengerszint feletti magasságban fekszik.",
            "Kína közelsége miatt jellegzetes jünnani faépítészettel rendelkezik.",
            "A hűvösebb éghajlat ideális a magashegyi zöld tea termesztésére.",
            "Híres egy 400 éves teapavilonról és a környező hegyekben található ősi teafákról.",
            "Történelmileg és kulturálisan szorosabban kötődik a szomszédos kínai régiókhoz.",
            "Zord hegyvidéki terep veszi körül, amely nagyrészt érintetlen maradt a modernizációtól."
        ],
        "ro": [
            "Cea mai nordică capitală de provincie, situată la o altitudine de 1.400 de metri.",
            "Prezintă o arhitectură distinctă din lemn de tip Yunnan datorită proximității de China.",
            "Clima mai rece este ideală pentru cultivarea ceaiului verde de munte.",
            "Faimos pentru un pavilion de ceai vechi de 400 de ani și copacii antici de ceai.",
            "Istoric și cultural este mai strâns legat de regiunile chineze învecinate.",
            "Înconjurat de teren montan accidentat care rămâne în mare parte neatins de modernizare."
        ]
    },
    "sekong-cities-v2": {
        "en": [
            "The smallest provincial capital in Laos, situated along the banks of the Sekong River.",
            "The province was created in 1984 by carving out parts of Salavan and Attapeu.",
            "Extremely culturally diverse, home to over 14 distinct ethnic minority groups.",
            "Surrounded by dense tropical forests and remote mountainous landscapes.",
            "The town lacks typical French colonial architecture due to its recent establishment.",
            "Economy heavily relies on agriculture and small-scale river-based trade."
        ],
        "de": [
            "Die kleinste Provinzhauptstadt in Laos, gelegen an den Ufern des Flusses Sekong.",
            "Die Provinz wurde 1984 aus Teilen von Salavan und Attapeu gebildet.",
            "Kulturell äußerst vielfältig, Heimat von über 14 verschiedenen ethnischen Minderheiten.",
            "Umgeben von dichten tropischen Wäldern und abgelegenen Berglandschaften.",
            "Der Stadt fehlt die typische französische Kolonialarchitektur aufgrund ihrer späten Gründung.",
            "Die Wirtschaft basiert stark auf Landwirtschaft und kleinem Flusshandel."
        ],
        "hu": [
            "Laosz legkisebb tartományi fővárosa, amely a Sekong folyó partján fekszik.",
            "A tartományt 1984-ben hozták létre Salavan és Attapeu egyes részeinek leválasztásával.",
            "Kulturálisan rendkívül sokszínű, több mint 14 különböző kisebbségi etnikai csoportnak ad otthont.",
            "Sűrű trópusi erdők és távoli hegyvidéki tájak veszik körül.",
            "Késői alapítása miatt a városban nem található meg a tipikus francia gyarmati építészet.",
            "A gazdaság nagymértékben a mezőgazdaságra és a kisüzemi folyami kereskedelemre épül."
        ],
        "ro": [
            "Cea mai mică capitală de provincie din Laos, situată pe malurile râului Sekong.",
            "Provincia a fost creată în 1984 din părți ale provinciilor Salavan și Attapeu.",
            "Extrem de diversă cultural, găzduind peste 14 grupuri minoritare etnice distincte.",
            "Înconjurat de păduri tropicale dense și peisaje muntoase îndepărtate.",
            "Orașului îi lipsește arhitectura colonială tipică datorită înființării sale recente.",
            "Economia se bazează puternic pe agricultură și comerțul pe râu la scară mică."
        ]
    },
    "xaisomboun-cities-v2": {
        "en": [
            "Capital of Xaisomboun Province, a rugged and mountainous region in central Laos.",
            "Features Phou Bia, the highest mountain peak in Laos, located within the province.",
            "Historically a restricted military zone, it was only recently opened to wider tourism.",
            "The local economy is heavily driven by large-scale mining operations and agriculture.",
            "One of the most isolated and least visited provincial capitals in the country.",
            "Surrounded by pristine natural landscapes including caves and dense jungles."
        ],
        "de": [
            "Hauptstadt der Provinz Xaisomboun, einer bergigen Region in Zentral-Laos.",
            "In der Provinz befindet sich Phou Bia, der höchste Berg in Laos.",
            "Historisch eine militärische Sperrzone, wurde die Region erst kürzlich für den Tourismus geöffnet.",
            "Die lokale Wirtschaft wird stark vom Bergbau und der Landwirtschaft angetrieben.",
            "Eine der isoliertesten und am wenigsten besuchten Provinzhauptstädte des Landes.",
            "Umgeben von unberührten Naturlandschaften, darunter Höhlen und dichte Dschungel."
        ],
        "hu": [
            "A hegyvidéki Xaisomboun tartomány fővárosa Közép-Laoszban.",
            "A tartományban található a Phou Bia, Laosz legmagasabb hegycsúcsa.",
            "Történelmileg katonai zárt övezet volt, csak nemrég nyitották meg a szélesebb turizmus előtt.",
            "A helyi gazdaságot a nagyüzemi bányászat és a mezőgazdaság hajtja.",
            "Az ország egyik legelszigeteltebb és legkevésbé látogatott tartományi fővárosa.",
            "Érintetlen természeti tájak, köztük barlangok és sűrű dzsungelek veszik körül."
        ],
        "ro": [
            "Capitala provinciei Xaisomboun, o regiune muntoasă accidentată din centrul Laosului.",
            "Găzduiește Phou Bia, cel mai înalt vârf de munte din Laos, situat în provincie.",
            "Istoric o zonă militară restricționată, a fost deschisă abia recent turismului.",
            "Economia locală este condusă de operațiunile miniere la scară largă și agricultură.",
            "Una dintre cele mai izolate și mai puțin vizitate capitale de provincie din țară.",
            "Înconjurat de peisaje naturale curate, inclusiv peșteri și jungle dense."
        ]
    },
    "phonhong-cities-v2": {
        "en": [
            "Capital of Vientiane Province, located strategically along Route 13.",
            "Serves primarily as an administrative and transit hub connecting the north and south.",
            "Surrounded by extensive and fertile agricultural plains used for rice cultivation.",
            "The nearby Nam Ngum reservoir provides significant hydroelectric power to the region.",
            "Hosts bustling local markets that serve the surrounding rural farming villages.",
            "Lacks major tourist attractions but offers an authentic view of everyday Lao life."
        ],
        "de": [
            "Hauptstadt der Provinz Vientiane, strategisch günstig an der Route 13 gelegen.",
            "Dient in erster Linie als Verwaltungs- und Verkehrsknotenpunkt.",
            "Umgeben von ausgedehnten landwirtschaftlichen Ebenen, die für den Reisanbau genutzt werden.",
            "Der nahegelegene Nam Ngum Stausee liefert wichtige Wasserkraft für die Region.",
            "Beherbergt belebte lokale Märkte, die die umliegenden ländlichen Dörfer versorgen.",
            "Bietet keine großen Touristenattraktionen, aber einen authentischen Blick in den laotischen Alltag."
        ],
        "hu": [
            "Vientiane tartomány fővárosa, stratégiai helyen, a 13-as út mentén helyezkedik el.",
            "Elsősorban északot és délt összekötő közigazgatási és tranzitközpontként működik.",
            "Rizstermesztésre használt kiterjedt és termékeny mezőgazdasági síkságok veszik körül.",
            "A közeli Nam Ngum víztározó jelentős vízenergiát biztosít a régiónak.",
            "Nyüzsgő helyi piacoknak ad otthont, amelyek a környező mezőgazdasági falvakat szolgálják ki.",
            "Nagyobb turisztikai látványosságok nélküli, viszont hiteles képet ad a laoszi mindennapokról."
        ],
        "ro": [
            "Capitala provinciei Vientiane, situată strategic de-a lungul Rutei 13.",
            "Servește în primul rând ca hub administrativ și de tranzit care conectează nordul și sudul.",
            "Înconjurat de câmpii agricole extinse și fertile folosite pentru cultivarea orezului.",
            "Rezervorul Nam Ngum din apropiere oferă energie hidroelectrică semnificativă.",
            "Găzduiește piețe locale aglomerate care deservesc satele agricole din jur.",
            "Nu are atracții turistice majore, dar oferă o vedere autentică a vieții de zi cu zi."
        ]
    },
    "kasi-cities-v2": {
        "en": [
            "A small town in Vientiane Province, located on the road between Vang Vieng and Luang Prabang.",
            "Surrounded by dramatic, towering limestone mountains and deep valleys.",
            "Known regionally for several natural hot springs located just outside the town.",
            "Agriculture and transit trade dominate the local economy of this rural settlement.",
            "Features a picturesque rural landscape that is highly scenic for travelers.",
            "A common rest stop for buses and motorists navigating the winding mountain passes."
        ],
        "de": [
            "Eine kleine Stadt in der Provinz Vientiane an der Straße zwischen Vang Vieng und Luang Prabang.",
            "Umgeben von dramatischen, hoch aufragenden Kalksteinbergen und tiefen Tälern.",
            "Regional bekannt für mehrere natürliche heiße Quellen direkt vor den Toren der Stadt.",
            "Landwirtschaft und Transithandel dominieren die lokale Wirtschaft dieser Siedlung.",
            "Verfügt über eine malerische ländliche Landschaft, die für Reisende sehr reizvoll ist.",
            "Ein beliebter Rastplatz für Busse, die die kurvigen Gebirgspässe befahren."
        ],
        "hu": [
            "Egy kisváros Vientiane tartományban, a Vang Vieng és Luang Prabang közötti úton.",
            "Drámai, tornyosuló mészkőhegyek és mély völgyek veszik körül.",
            "Regionálisan ismert a város közvetlen közelében található természetes meleg forrásokról.",
            "E vidéki település helyi gazdaságát a mezőgazdaság és a tranzitkereskedelem uralja.",
            "Festői szépségű vidéki táj jellemzi, amely az utazók számára lenyűgöző látványt nyújt.",
            "Gyakori pihenőhely a kanyargós hegyi hágókon közlekedő buszok és autósok számára."
        ],
        "ro": [
            "Un mic oraș în provincia Vientiane, pe drumul dintre Vang Vieng și Luang Prabang.",
            "Înconjurat de munți de calcar dramatici și văi adânci.",
            "Cunoscut la nivel regional pentru mai multe izvoare termale naturale de la periferie.",
            "Agricultura și comerțul de tranzit domină economia locală a acestei așezări rurale.",
            "Prezintă un peisaj rural pitoresc, care este foarte pitoresc pentru călători.",
            "Un popas comun pentru autobuze și șoferi care navighează pe trecătorile montane șerpuite."
        ]
    },
    "champasak-cities-v2": {
        "en": [
            "Former seat of the historic Kingdom of Champasak, located on the Mekong's west bank.",
            "Famous for the Vat Phou temple ruins, a sprawling Khmer Hindu complex.",
            "Features charming colonial-era wooden houses lining its quiet streets.",
            "Maintains a peaceful, slow-paced atmosphere with very minimal vehicle traffic.",
            "Its immense historical importance contrasts sharply with its current small size.",
            "A scenic riverside promenade offers excellent views of the Mekong and surrounding mountains."
        ],
        "de": [
            "Ehemaliger Sitz des historischen Königreichs Champasak, am Westufer des Mekong gelegen.",
            "Berühmt für die Tempelruinen von Vat Phou, einem weitläufigen Khmer-Komplex.",
            "Verfügt über charmante Holzhäuser aus der Kolonialzeit an seinen ruhigen Straßen.",
            "Bewahrt eine friedliche, langsame Atmosphäre mit nur sehr wenig Autoverkehr.",
            "Seine enorme historische Bedeutung steht in scharfem Kontrast zu seiner heutigen geringen Größe.",
            "Eine malerische Uferpromenade bietet hervorragende Ausblicke auf den Mekong."
        ],
        "hu": [
            "A történelmi Champasak Királyság egykori székhelye a Mekong nyugati partján.",
            "Híres a Vat Phou templomromokról, amely egy kiterjedt hindu khmer komplexum.",
            "Csendes utcáit a gyarmati korszakból származó, bájos faházak szegélyezik.",
            "Békés, lassú tempójú légkört áraszt, minimális járműforgalommal.",
            "Hatalmas történelmi jelentősége éles ellentétben áll jelenlegi kis méretével.",
            "A festői folyóparti sétányról kiváló kilátás nyílik a Mekongra és a környező hegyekre."
        ],
        "ro": [
            "Fostul sediu al istoricului Regat Champasak, situat pe malul vestic al Mekongului.",
            "Faimos pentru ruinele templului Vat Phou, un complex hindus Khmer.",
            "Prezintă case fermecătoare din lemn din epoca colonială pe străzile sale liniștite.",
            "Păstrează o atmosferă pașnică, cu ritm lent și trafic auto minim.",
            "Importanța sa istorică imensă contrastează puternic cu dimensiunea sa actuală.",
            "O promenadă pitorească pe malul râului oferă vederi excelente asupra Mekongului."
        ]
    },
    "pak-lay-cities-v2": {
        "en": [
            "A picturesque river town in Sainyabuli Province, situated right along the Mekong River.",
            "Features numerous well-preserved French colonial administrative buildings.",
            "Historically known for hosting the annual Lao Elephant Festival before it was moved.",
            "Served as an important regional timber trading post during the 19th and 20th centuries.",
            "Located relatively close to the Thai border, influencing local trade.",
            "Surrounded by agricultural lands primarily focused on rice and maize cultivation."
        ],
        "de": [
            "Eine malerische Flussstadt in der Provinz Sainyabuli, direkt am Mekong gelegen.",
            "Verfügt über zahlreiche gut erhaltene französische Kolonialgebäude.",
            "Historisch bekannt für das laotische Elefantenfestival, bevor es verlegt wurde.",
            "Diente im 19. und 20. Jahrhundert als wichtiger regionaler Holzhandelsposten.",
            "Liegt relativ nah an der thailändischen Grenze, was den lokalen Handel beeinflusst.",
            "Umgeben von landwirtschaftlichen Flächen, die hauptsächlich für Reis und Mais genutzt werden."
        ],
        "hu": [
            "Festői folyami város Sainyabuli tartományban, közvetlenül a Mekong folyó mentén.",
            "Számos jól megőrzött francia gyarmati közigazgatási épülettel rendelkezik.",
            "Történelmileg itt rendezték meg a laoszi Elefánt Fesztivált, mielőtt áthelyezték volna.",
            "A 19. és 20. században fontos regionális fakereskedelmi központként szolgált.",
            "Viszonylag közel fekszik a thai határhoz, ami befolyásolja a helyi kereskedelmet.",
            "Elsősorban rizs- és kukoricatermesztésre összpontosító mezőgazdasági területek veszik körül."
        ],
        "ro": [
            "Un oraș pitoresc din provincia Sainyabuli, situat chiar de-a lungul râului Mekong.",
            "Prezintă numeroase clădiri administrative coloniale franceze bine conservate.",
            "Cunoscut istoric pentru găzduirea Festivalului Elefanților Lao, înainte de a fi mutat.",
            "A servit ca un important post regional de tranzacționare a lemnului în trecut.",
            "Situat relativ aproape de granița thailandeză, influențând comerțul local.",
            "Înconjurat de terenuri agricole axate în principal pe cultivarea orezului și porumbului."
        ]
    },
    "seno-cities-v2": {
        "en": [
            "Located in Savannakhet Province, it serves as a major transport and logistics hub.",
            "The name derives from 'Sud Est Nord Ouest', indicating its crossroads location.",
            "Developed significantly during the French colonial era as a military base.",
            "Features the remnants of a former French military airfield and infrastructure.",
            "Well known across Laos for its distinctive grilled chicken and local street food.",
            "Situated at the intersection of Routes 13 and 9, making it a critical junction."
        ],
        "de": [
            "Liegt in der Provinz Savannakhet und dient als wichtiger Verkehrs- und Logistikknotenpunkt.",
            "Der Name leitet sich von 'Sud Est Nord Ouest' ab und verweist auf die Straßenkreuzung.",
            "Entwickelte sich während der französischen Kolonialzeit als Militärstützpunkt.",
            "Verfügt über die Überreste eines ehemaligen französischen Militärflugplatzes.",
            "In ganz Laos bekannt für sein gegrilltes Hähnchen und lokales Street Food.",
            "Liegt an der Kreuzung der Routen 13 und 9, was es zu einem wichtigen Knotenpunkt macht."
        ],
        "hu": [
            "Savannakhet tartományban található, jelentős közlekedési és logisztikai csomópont.",
            "A neve a francia 'Sud Est Nord Ouest' szavakból ered, utalva útkereszteződés jellegére.",
            "A francia gyarmati időszakban katonai bázisként indult jelentős fejlődésnek.",
            "Egykori francia katonai repülőtér és korabeli infrastruktúra maradványaival rendelkezik.",
            "Országszerte jól ismert jellegzetes grillezett csirkéjéről és utcai ételeiről.",
            "A 13-as és a 9-es főutak találkozásánál fekszik, így kritikus csomópontot alkot."
        ],
        "ro": [
            "Situat în provincia Savannakhet, servește ca un nod major de transport și logistică.",
            "Numele derivă din 'Sud Est Nord Ouest', indicând locația sa la intersecție de drumuri.",
            "Dezvoltat semnificativ în timpul epocii coloniale franceze ca bază militară.",
            "Prezintă rămășițele unui fost aerodrom militar francez și a infrastructurii.",
            "Cunoscut în tot Laos pentru puiul său la grătar și mâncarea stradală locală.",
            "Situat la intersecția rutelor 13 și 9, fiind un nod de transport critic."
        ]
    },
    "muang-long-cities-v2": {
        "en": [
            "A remote town in Luang Namtha Province, situated close to the Myanmar border.",
            "Serves as a bustling market hub for the Akha and other surrounding ethnic groups.",
            "Located in a narrow river valley and enveloped by dense jungle vegetation.",
            "Surrounded by towering, inaccessible mountains that limit large-scale development.",
            "Acts as a starting base for off-the-beaten-path trekking into remote hill tribe villages.",
            "The local economy relies on subsistence farming and cross-border trade."
        ],
        "de": [
            "Eine abgelegene Stadt in der Provinz Luang Namtha, nahe der Grenze zu Myanmar.",
            "Dient als geschäftiger Markt für die Akha und andere umliegende ethnische Gruppen.",
            "Liegt in einem engen Flusstal und ist von dichter Dschungelvegetation umgeben.",
            "Umgeben von unzugänglichen Bergen, die eine weitreichende Entwicklung einschränken.",
            "Fungiert als Ausgangspunkt für abenteuerliche Trekkingtouren in abgelegene Dörfer.",
            "Die lokale Wirtschaft stützt sich auf Subsistenzwirtschaft und grenzüberschreitenden Handel."
        ],
        "hu": [
            "Távoli város Luang Namtha tartományban, a mianmari határ közelében.",
            "Nyüzsgő piacközpontként szolgál az akha és más környező etnikai csoportok számára.",
            "Egy szűk folyóvölgyben fekszik, és sűrű dzsungel növényzet veszi körül.",
            "Magas, megközelíthetetlen hegyek övezik, amelyek korlátozzák a nagyszabású fejlesztéseket.",
            "Kiindulópontként szolgál a távoli hegyi törzsek falvaiba vezető különleges túrákhoz.",
            "A helyi gazdaság önellátó mezőgazdaságra és határon átnyúló kereskedelemre támaszkodik."
        ],
        "ro": [
            "Un oraș îndepărtat din provincia Luang Namtha, situat aproape de granița cu Myanmar.",
            "Servește ca un hub de piață plin de viață pentru Akha și alte grupuri etnice.",
            "Situat într-o vale îngustă a râului și învăluit de vegetație densă de junglă.",
            "Înconjurat de munți înalți și inaccesibili care limitează dezvoltarea la scară largă.",
            "Acționează ca o bază de plecare pentru drumeții către sate tribale îndepărtate.",
            "Economia locală se bazează pe agricultura de subzistență și pe comerțul transfrontalier."
        ]
    },
    "boun-neua-cities-v2": {
        "en": [
            "Located in Phongsaly Province near the Chinese border, featuring strong Chinese influence.",
            "The town's economy and culture are heavily tied to neighboring Yunnan province.",
            "Situated at a high elevation, resulting in cool temperatures, especially during winter.",
            "Serves as a vital regional trading post for agricultural and consumer goods.",
            "Surrounded by extensive commercial tea and rubber plantations on the hillsides.",
            "Many signs and businesses in the town operate bilingually in Lao and Mandarin."
        ],
        "de": [
            "Liegt in der Provinz Phongsaly nahe der chinesischen Grenze mit starkem chinesischen Einfluss.",
            "Wirtschaft und Kultur der Stadt sind stark mit der benachbarten Provinz Yunnan verbunden.",
            "Gelegen auf großer Höhe, was besonders im Winter zu kühlen Temperaturen führt.",
            "Dient als wichtiger regionaler Handelsposten für Agrar- und Konsumgüter.",
            "Umgeben von weitläufigen kommerziellen Tee- und Kautschukplantagen an den Hängen.",
            "Viele Schilder und Geschäfte in der Stadt sind zweisprachig in Lao und Mandarin."
        ],
        "hu": [
            "Phongsaly tartományban, a kínai határ közelében található, erős kínai befolyással.",
            "A város gazdasága és kultúrája szorosan kötődik a szomszédos Jünnan tartományhoz.",
            "Nagy magasságban fekszik, ami hűvös hőmérsékletet eredményez, különösen télen.",
            "Létfontosságú regionális kereskedelmi állomásként szolgál a mezőgazdasági termékek számára.",
            "A domboldalakon kiterjedt kereskedelmi tea- és gumifaültetvények veszik körül.",
            "A városban sok felirat és üzlet kétnyelvűen, laosziul és mandarinul is működik."
        ],
        "ro": [
            "Situat în provincia Phongsaly, lângă granița cu China, cu o puternică influență chineză.",
            "Economia și cultura orașului sunt strâns legate de provincia vecină Yunnan.",
            "Situat la o altitudine mare, având temperaturi scăzute, mai ales în timpul iernii.",
            "Servește ca un post regional de comerț vital pentru bunuri agricole și de consum.",
            "Înconjurat de plantații comerciale extinse de ceai și cauciuc pe dealuri.",
            "Multe semne și afaceri din oraș funcționează bilingv în lao și mandarină."
        ]
    },
    "muang-khong-cities-v2": {
        "en": [
            "The largest settlement on the island of Don Khong in the Si Phan Don (4000 Islands) region.",
            "Located directly within the wide flow of the Mekong River in southern Laos.",
            "Known for a deeply peaceful atmosphere and traditional old wooden stilted houses.",
            "The local population relies heavily on freshwater fishing and riverside agriculture.",
            "Located a short distance from the massive, cascading Khone Phapheng Falls.",
            "Historically near a short French railway built to bypass the unnavigable river rapids."
        ],
        "de": [
            "Die größte Siedlung auf der Insel Don Khong in der Region Si Phan Don (4000 Inseln).",
            "Liegt direkt im breiten Strom des Mekong-Flusses im Süden von Laos.",
            "Bekannt für eine tief friedliche Atmosphäre und traditionelle alte Holzhäuser auf Stelzen.",
            "Die lokale Bevölkerung lebt hauptsächlich vom Süßwasserfischen und der Landwirtschaft.",
            "Befindet sich in kurzer Entfernung zu den massiven Khone Phapheng Wasserfällen.",
            "Historisch in der Nähe einer französischen Eisenbahn zur Umgehung von Stromschnellen."
        ],
        "hu": [
            "A Si Phan Don (4000 sziget) régió Don Khong szigetének legnagyobb települése.",
            "Közvetlenül a Mekong folyó széles áramlásában helyezkedik el Dél-Laoszban.",
            "Mélyen békés légköréről és hagyományos régi, cölöpökre épült faházairól ismert.",
            "A helyi lakosság nagymértékben az édesvízi halászatra és a folyóparti mezőgazdaságra támaszkodik.",
            "Rövid távolságra található a hatalmas, lépcsőzetes Khone Phapheng vízesésektől.",
            "Történelmileg egy rövid francia vasútvonal közelében van, amely a zuhatagokat kerülte meg."
        ],
        "ro": [
            "Cea mai mare așezare de pe insula Don Khong din regiunea Si Phan Don (4000 de insule).",
            "Situat direct în fluxul larg al râului Mekong din sudul statului Laos.",
            "Cunoscut pentru o atmosferă profund pașnică și case tradiționale vechi din lemn.",
            "Populația locală se bazează pe pescuitul în apă dulce și pe agricultura pe malul râului.",
            "Situat la mică distanță de cascadele masive Khone Phapheng.",
            "Istoric aproape de o scurtă cale ferată franceză construită pentru a ocoli pragurile."
        ]
    },
    "sepon-cities-v2": {
        "en": [
            "A key town in Savannakhet Province located relatively close to the Vietnamese border.",
            "Heavily bombed during the Vietnam War due to its location on the Ho Chi Minh Trail.",
            "The surrounding area was the focal point of the intense Battle of Lam Son 719.",
            "The region is still heavily impacted by extensive unexploded ordnance clearance operations.",
            "Hosts significant commercial gold and copper mining operations in the nearby hills.",
            "Historical war remnants, including bomb craters and military scrap, dot the landscape."
        ],
        "de": [
            "Eine wichtige Stadt in der Provinz Savannakhet, relativ nah an der vietnamesischen Grenze.",
            "Während des Vietnamkriegs wegen ihrer Lage am Ho-Chi-Minh-Pfad stark bombardiert.",
            "Das Umland war der Mittelpunkt der intensiven Schlacht von Lam Son 719.",
            "Die Region ist noch immer stark von Kampfmittelräumungen betroffen.",
            "Beherbergt bedeutende kommerzielle Gold- und Kupferbergwerke in den Hügeln.",
            "Historische Kriegsüberreste wie Bombenkrater und Militärschrott prägen die Landschaft."
        ],
        "hu": [
            "Kulcsfontosságú város Savannakhet tartományban, viszonylag közel a vietnámi határhoz.",
            "A vietnámi háború alatt a Ho Si Minh-ösvényen elfoglalt fekvése miatt sokat bombázták.",
            "A környező terület az intenzív Lam Son 719 csata fókuszpontja volt.",
            "A régiót még mindig erősen érintik a fel nem robbant robbanótestek mentesítési munkálatai.",
            "A közeli dombokon jelentős kereskedelmi arany- és rézbányászati tevékenység folyik.",
            "Történelmi háborús maradványok, köztük bombatölcsérek és katonai roncsok tarkítják a tájat."
        ],
        "ro": [
            "Un oraș cheie din provincia Savannakhet, situat relativ aproape de granița cu Vietnam.",
            "Puternic bombardat în timpul Războiului din Vietnam din cauza traseului Ho Chi Minh.",
            "Zona înconjurătoare a fost punctul central al bătăliei intense de la Lam Son 719.",
            "Regiunea este puternic afectată de operațiunile de curățare a muniției neexplodate.",
            "Găzduiește operațiuni comerciale semnificative de exploatare a aurului și cuprului.",
            "Resturile istorice de război, inclusiv craterele de bombe, punctează peisajul."
        ]
    },
    "muang-sing-cities-v2": {
        "en": [
            "Located in Luang Namtha Province near China, functioning as a cultural crossroads.",
            "Historically served as the capital of an independent Tai Lue principality.",
            "Known for its highly diverse and colorful ethnic minority morning market.",
            "Surrounded by high mountains and fertile plains used for agriculture.",
            "Features the That Xieng Tung stupa, an important local Buddhist pilgrimage site.",
            "Historically played a major role in the infamous Golden Triangle opium trade."
        ],
        "de": [
            "Liegt in der Provinz Luang Namtha nahe China und fungiert als kultureller Knotenpunkt.",
            "Diente historisch als Hauptstadt eines unabhängigen Tai-Lue-Fürstentums.",
            "Bekannt für seinen äußerst vielfältigen und farbenfrohen ethnischen Morgenmarkt.",
            "Umgeben von hohen Bergen und fruchtbaren Ebenen für die Landwirtschaft.",
            "Verfügt über den That Xieng Tung Stupa, einen wichtigen buddhistischen Pilgerort.",
            "Spielte historisch eine wichtige Rolle im Opiumhandel des Goldenen Dreiecks."
        ],
        "hu": [
            "Luang Namtha tartományban, Kína közelében található, egyfajta kulturális útkereszteződés.",
            "Történelmileg egy független Tai Lue fejedelemség fővárosaként szolgált.",
            "Rendkívül változatos és színes, több etnikumú reggeli piacáról ismert.",
            "Magas hegyek és mezőgazdaságra használt termékeny síkságok veszik körül.",
            "Itt található a That Xieng Tung sztúpa, egy fontos helyi buddhista zarándokhely.",
            "Történelmileg jelentős szerepet játszott a hírhedt Arany Háromszög ópiumkereskedelmében."
        ],
        "ro": [
            "Situat în provincia Luang Namtha, lângă China, funcționând ca o răscruce culturală.",
            "Istoric a servit ca o capitală a unui principat independent Tai Lue.",
            "Cunoscut pentru piața sa matinală a minorităților etnice, foarte diversă.",
            "Înconjurat de munți înalți și câmpii fertile folosite pentru agricultură.",
            "Prezintă stupa That Xieng Tung, un important loc de pelerinaj budist.",
            "A jucat un rol major în comerțul cu opiu din infamul Triunghi de Aur."
        ]
    },
    "nong-khiaw-cities-v2": {
        "en": [
            "Picturesque town situated on both banks of the Nam Ou River in northern Laos.",
            "Surrounded by incredibly steep and dramatic limestone karst rock formations.",
            "The high concrete Nong Khiaw bridge visually connects the two sides of the town.",
            "A highly popular destination for outdoor activities like rock climbing and trekking.",
            "Features several accessible caves, notably the Pha Tok cave used during wartime.",
            "Riverboat travel along the Nam Ou remains a major mode of regional transport."
        ],
        "de": [
            "Malerische Stadt an beiden Ufern des Nam Ou Flusses im Norden von Laos.",
            "Umgeben von unglaublich steilen und dramatischen Kalksteinfelsformationen.",
            "Die hohe Betonbrücke von Nong Khiaw verbindet visuell die beiden Stadtteile.",
            "Ein sehr beliebtes Ziel für Outdoor-Aktivitäten wie Klettern und Trekking.",
            "Verfügt über zugängliche Höhlen, insbesondere die im Krieg genutzte Pha Tok Höhle.",
            "Die Fahrt mit dem Flussboot bleibt ein wichtiges regionales Transportmittel."
        ],
        "hu": [
            "Festői szépségű város a Nam Ou folyó két partján, Laosz északi részén.",
            "Hihetetlenül meredek és drámai mészkőkarszt sziklaalakzatok veszik körül.",
            "A magas, betonból készült Nong Khiaw híd vizuálisan köti össze a város két oldalát.",
            "Kifejezetten népszerű úti cél szabadtéri tevékenységekhez, mint a sziklamászás és a túrázás.",
            "Számos látogatható barlangja van, köztük a háború idején használt Pha Tok-barlang.",
            "A Nam Ou folyón történő hajózás továbbra is a regionális közlekedés egyik fő módja."
        ],
        "ro": [
            "Oraș pitoresc situat pe ambele maluri ale râului Nam Ou din nordul statului Laos.",
            "Înconjurat de formațiuni de rocă calcaroasă uimitor de abrupte și dramatice.",
            "Podul înalt de beton Nong Khiaw conectează vizual cele două părți ale orașului.",
            "O destinație extrem de populară pentru activități în aer liber.",
            "Prezintă peșteri accesibile, în special peștera Pha Tok folosită în timpul războiului.",
            "Călătoria cu barca pe Nam Ou rămâne un mod major de transport regional."
        ]
    },
    "viengxay-cities-v2": {
        "en": [
            "Located in Houaphanh Province, commonly known as the 'Hidden City' during the war.",
            "Features an extensive network of natural caves used extensively by the Pathet Lao.",
            "The caves historically housed entire hospitals, schools, and military offices.",
            "Surrounded by dramatic karst formations that naturally protected the settlement.",
            "Relatively isolated near the Vietnamese border, requiring rugged overland travel.",
            "Remains a powerful symbol of Lao revolutionary history and resilience."
        ],
        "de": [
            "Gelegen in der Provinz Houaphanh, während des Krieges als 'Verborgene Stadt' bekannt.",
            "Verfügt über ein ausgedehntes Höhlennetzwerk, das von den Pathet Lao genutzt wurde.",
            "Die Höhlen beherbergten historisch ganze Krankenhäuser, Schulen und Militärbüros.",
            "Umgeben von dramatischen Karstformationen, die die Siedlung auf natürliche Weise schützten.",
            "Relativ isoliert nahe der vietnamesischen Grenze, nur über unwegsame Straßen erreichbar.",
            "Bleibt ein starkes Symbol der laotischen Revolutionsgeschichte und Widerstandsfähigkeit."
        ],
        "hu": [
            "Houaphanh tartományban található, a háború alatt 'Rejtett városként' volt ismert.",
            "Kiterjedt természetes barlangrendszerrel rendelkezik, melyet a Pathet Lao használt.",
            "A barlangokban történelmileg komplett kórházak, iskolák és katonai hivatalok működtek.",
            "Drámai karsztképződmények veszik körül, amelyek természetes védelmet nyújtottak a településnek.",
            "Viszonylag elszigetelt a vietnámi határ közelében, megközelítése rögös hegyi utakon lehetséges.",
            "A laoszi forradalmi történelem és ellenálló képesség erőteljes szimbóluma maradt."
        ],
        "ro": [
            "Situat în provincia Houaphanh, cunoscut sub numele de 'Orașul ascuns' în timpul războiului.",
            "Prezintă o rețea extinsă de peșteri naturale utilizate pe scară largă de Pathet Lao.",
            "Peșterile au găzduit în istorie spitale întregi, școli și birouri militare.",
            "Înconjurat de formațiuni carstice dramatice care au protejat natural așezarea.",
            "Relativ izolat lângă granița cu Vietnam, necesitând o călătorie accidentată pe uscat.",
            "Rămâne un simbol puternic al istoriei și rezistenței revoluționare laoțiene."
        ]
    }
}

items = []
for poi_id, content in pois.items():
    items.append({
        "id": poi_id,
        "factsAdvanced": content
    })

batch1 = items[0:10]
batch2 = items[10:20]
batch3 = items[20:30]

for idx, batch in enumerate([batch1, batch2, batch3]):
    json_data = {
        "lang": "multi4",
        "country": "laos",
        "files": ["lib/visualLab/data/poiExtraLaosCitiesV2.ts"],
        "items": batch
    }
    file_path = f"C:/Users/User/plizio-repo/lib/visualLab/.seo_tmp/seo-laos-cities-multi4-pro-batch{idx+1}.json"
    os.makedirs(os.path.dirname(file_path), exist_ok=True)
    with open(file_path, "w", encoding="utf-8") as f:
        json.dump(json_data, f, ensure_ascii=False, indent=2)

    print(f"Applying batch {idx+1}...")
    cmd = ["python", "C:/Users/User/plizio_orch/apply_seo_json.py", file_path]
    result = subprocess.run(cmd, capture_output=True, text=True)
    print(result.stdout)
    if result.stderr:
        print("ERROR:", result.stderr)

