import type { POI } from "./poi";

export const poiExtraTaiwanCitiesV2: POI[] = [
  {
    id: "taipei-cities-v2",
    type: "state-capital",
    parent: "TW-TPE",
    coords: [121.5654, 25.0329],
    name: { de: "Taipeh", hu: "Tajpej", ro: "Taipei", en: "Taipei" },
    description: { de: "Die pulsierende Hauptstadt Taiwans, bekannt für den 508 Meter hohen Taipei 101 und lebhafte Nachtmärkte.", hu: "Tajvan nyüzsgő fővárosa, mely az 508 méter magas Taipei 101 felhőkarcolóról és az éjszakai piacokról ismert.", ro: "Capitala vibrantă a Taiwanului, faimoasă pentru zgârie-norul Taipei 101 înalt de 508 metri și piețele de noapte.", en: "The bustling capital of Taiwan, known for the 508-meter-tall Taipei 101 skyscraper and lively night markets." },
    facts: {
      de: ["508 m hoher Taipei 101", "2.6 Millionen Einwohner", "Gegründet im Jahr 1884", "Shilin-Nachtmarkt"],
      hu: ["508 m magas Taipei 101", "2.6 millió lakos", "Alapítva 1884-ben", "Shilin éjszakai piac"],
      ro: ["Taipei 101 de 508 m", "2.6 milioane locuitori", "Fondat în 1884", "Piața de noapte Shilin"],
      en: ["508m tall Taipei 101", "2.6 million residents", "Founded in 1884", "Shilin Night Market"]
    }
  },
  {
    id: "new-taipei-cities-v2",
    type: "city",
    parent: "TW-NWT",
    coords: [121.464, 25.011],
    name: { de: "Neu-Taipeh", hu: "Új-Tajpej", ro: "Noul Taipei", en: "New Taipei City" },
    description: { de: "Die bevölkerungsreichste Stadt in Taiwan, die das gesamte Gebiet um Taipeh umschließt.", hu: "Tajvan legnépesebb városa, amely teljesen körülveszi a fővárost, Tajpejt.", ro: "Cel mai populat oraș din Taiwan, care înconjoară complet capitala Taipei.", en: "The most populous city in Taiwan, completely enclosing the capital Taipei." },
    facts: {
      de: ["Bevölkerungsreichste Stadt", "Über 4 Millionen Einwohner", "Jiufen-Dorf ist bekannt", "Wurde 1979 zum Landkreis"],
      hu: ["Tajvan legnépesebb városa", "Több mint 4 millió lakos", "Jiufen faluról híres", "1979-ben megyévé vált"],
      ro: ["Cel mai populat oraș", "Peste 4 milioane locuitori", "Renumit pentru satul Jiufen", "A devenit județ în 1979"],
      en: ["Most populous city", "Over 4 million residents", "Famous for Jiufen village", "Became a county in 1979"]
    }
  },
  {
    id: "taoyuan-cities-v2",
    type: "city",
    parent: "TW-TAO",
    coords: [121.301, 24.993],
    name: { de: "Taoyuan", hu: "Taojüan", ro: "Taoyuan", en: "Taoyuan" },
    description: { de: "Eine wichtige Industriestadt im Nordwesten, die den internationalen Hauptflughafen Taiwans beherbergt.", hu: "Jelentős iparváros északnyugaton, itt található Tajvan legfőbb nemzetközi repülőtere.", ro: "Un important oraș industrial în nord-vest, găzduind principalul aeroport internațional din Taiwan.", en: "A major industrial city in the northwest, home to Taiwan's main international airport." },
    facts: {
      de: ["Der größte Flughafen", "Zentrum der Elektronik", "2.3 Millionen Einwohner", "Wurde 2014 eigenständig"],
      hu: ["A legnagyobb repülőtér", "Elektronikai központ", "2.3 millió lakos", "2014-ben lett külön város"],
      ro: ["Cel mai mare aeroport", "Centru de electronice", "2.3 milioane de locuitori", "Devenit oraș în 2014"],
      en: ["Largest airport", "Electronics hub", "2.3 million residents", "Became a city in 2014"]
    }
  },
  {
    id: "taichung-cities-v2",
    type: "city",
    parent: "TW-TXG",
    coords: [120.673, 24.147],
    name: { de: "Taichung", hu: "Tajcsung", ro: "Taichung", en: "Taichung" },
    description: { de: "Die zweitgrößte Stadt Taiwans, berühmt für angenehmes Klima und kulturelle Museen.", hu: "Tajvan második legnagyobb városa, amely kellemes klímájáról és kulturális múzeumairól híres.", ro: "Al doilea oraș ca mărime din Taiwan, faimos pentru clima plăcută și muzeele culturale.", en: "Taiwan's second largest city, famous for its pleasant climate and cultural museums." },
    facts: {
      de: ["2.8 Millionen Einwohner", "Heimat des Bubble Teas", "Naturkundemuseum", "Industriezentrum"],
      hu: ["2.8 millió lakos", "A buboréktea hazája", "Természettudományi múzeum", "Ipari és kulturális központ"],
      ro: ["2.8 milioane de locuitori", "Patria Bubble Tea", "Muzeul de științe naturale", "Centru industrial"],
      en: ["2.8 million residents", "Home of Bubble Tea", "Natural science museum", "Industrial center"]
    }
  },
  {
    id: "tainan-cities-v2",
    type: "city",
    parent: "TW-TNN",
    coords: [120.227, 22.999],
    name: { de: "Tainan", hu: "Tajnan", ro: "Tainan", en: "Tainan" },
    description: { de: "Die älteste Stadt auf der Insel, reich an historischen Tempeln und traditioneller Esskultur.", hu: "A sziget legrégebbi városa, amely gazdag történelmi templomokban és hagyományos ételekben.", ro: "Cel mai vechi oraș de pe insulă, bogat în temple istorice și mâncare tradițională.", en: "The oldest city on the island, rich in historic temples and traditional food culture." },
    facts: {
      de: ["Älteste Stadt Taiwans", "Gegründet im Jahr 1624", "Ehemalige Qing-Hauptstadt", "Berühmt für alte Tempel"],
      hu: ["Tajvan legrégebbi városa", "1624-ben alapították", "Volt Qing-kori főváros", "Híres az ősi templomairól"],
      ro: ["Cel mai vechi oraș", "Fondat în 1624", "Fosta capitală Qing", "Faimos pentru temple antice"],
      en: ["Oldest city in Taiwan", "Founded in 1624", "Former Qing capital", "Famous for ancient temples"]
    }
  },
  {
    id: "kaohsiung-cities-v2",
    type: "city",
    parent: "TW-KHH",
    coords: [120.301, 22.627],
    name: { de: "Kaohsiung", hu: "Kaohsziung", ro: "Kaohsiung", en: "Kaohsiung" },
    description: { de: "Eine bedeutende Hafenstadt im Süden, bekannt für den Liebesfluss und das Pier-2 Art Center.", hu: "Jelentős déli kikötőváros, amely a Szerelem-folyóról és a Pier-2 Művészeti Központról ismert.", ro: "Un important oraș portuar în sud, cunoscut pentru Râul Iubirii și Centrul de Artă Pier-2.", en: "A major port city in the south, known for the Love River and the Pier-2 Art Center." },
    facts: {
      de: ["Größter Hafen Taiwans", "2.7 Millionen Einwohner", "347m hoher 85 Sky Tower", "Der Liebesfluss"],
      hu: ["Tajvan legnagyobb kikötője", "2.7 millió lakos", "347 méteres 85 Sky Tower", "Szerelem-folyó"],
      ro: ["Cel mai mare port", "2.7 milioane de locuitori", "Turnul 85 Sky de 347m", "Râul Iubirii"],
      en: ["Largest port in Taiwan", "2.7 million residents", "347m tall 85 Sky Tower", "Love River"]
    }
  },
  {
    id: "keelung-cities-v2",
    type: "city",
    parent: "TW-KEE",
    coords: [121.739, 25.127],
    name: { de: "Keelung", hu: "Csilung", ro: "Keelung", en: "Keelung" },
    description: { de: "Eine geschäftige Hafenstadt im Nordosten, berühmt für ihren Nachtmarkt und regnerisches Wetter.", hu: "Forgalmas északkeleti kikötőváros, amely az éjszakai piacáról és esős időjárásáról híres.", ro: "Un oraș portuar aglomerat în nord-est, faimos pentru piața sa de noapte și vremea ploioasă.", en: "A bustling port city in the northeast, famous for its night market and rainy weather." },
    facts: {
      de: ["Die regenreichste Stadt", "Zweitgrößter Hafen", "Miaokou-Nachtmarkt", "Früher Jilong genannt"],
      hu: ["A legcsapadékosabb város", "Második legnagyobb kikötő", "Miaokou éjszakai piac", "Eredeti neve Jilong volt"],
      ro: ["Cel mai ploios oraș", "Al doilea port ca mărime", "Piața de noapte Miaokou", "Numit anterior Jilong"],
      en: ["The rainiest city", "Second largest port", "Miaokou Night Market", "Formerly named Jilong"]
    }
  },
  {
    id: "hsinchu-cities-v2",
    type: "city",
    parent: "TW-HSZ",
    coords: [120.967, 24.813],
    name: { de: "Hsinchu", hu: "Hszincsu", ro: "Hsinchu", en: "Hsinchu" },
    description: { de: "Das Zentrum der taiwanesischen Halbleiterindustrie, oft als Silicon Valley von Taiwan bezeichnet.", hu: "A tajvani félvezetőipar központja, amelyet gyakran Tajvan Szilícium-völgyének neveznek.", ro: "Centrul industriei de semiconductori din Taiwan, adesea numit Silicon Valley-ul Taiwanului.", en: "The hub of Taiwan's semiconductor industry, often referred to as the Silicon Valley of Taiwan." },
    facts: {
      de: ["Hsinchu Science Park", "Silicon Valley Taiwans", "Als windige Stadt bekannt", "450 Tausend Einwohner"],
      hu: ["Hsinchu Tudományos Park", "A tajvani Szilícium-völgy", "Szeles város néven ismert", "450 ezer lakos"],
      ro: ["Parcul Științific Hsinchu", "Silicon Valley-ul Taiwanului", "Cunoscut ca orașul vântului", "450 mii de locuitori"],
      en: ["Hsinchu Science Park", "Silicon Valley of Taiwan", "Known as the windy city", "450 thousand residents"]
    }
  },
  {
    id: "chiayi-cities-v2",
    type: "city",
    parent: "TW-CYI",
    coords: [120.449, 23.480],
    name: { de: "Chiayi", hu: "Csiaji", ro: "Chiayi", en: "Chiayi" },
    description: { de: "Eine historische Stadt im Zentrum Taiwans, die als Tor zur malerischen Alishan-Gebirgsregion dient.", hu: "Történelmi város Tajvan középső részén, amely kapuként szolgál a festői Alishan-hegységhez.", ro: "Un oraș istoric în centrul Taiwanului, servind drept poartă către pitoreasca regiune montană Alishan.", en: "A historic city in central Taiwan, serving as the gateway to the scenic Alishan mountain region." },
    facts: {
      de: ["Start der Alishan-Bahn", "Berühmt für Truthahn-Reis", "Tropisches Klima", "Ehemaliges Holzzentrum"],
      hu: ["Az Alishan vasút kiindulója", "Híres a pulykás rizsről", "Trópusi éghajlat", "Fakorvágó központ volt"],
      ro: ["Punctul de pornire Alishan", "Faimos pentru orez cu curcan", "Climat tropical", "Fost centru forestier"],
      en: ["Start of Alishan railway", "Famous for turkey rice", "Tropical climate", "Former timber center"]
    }
  },
  {
    id: "changhua-cities-v2",
    type: "city",
    parent: "TW-CHA",
    coords: [120.538, 24.081],
    name: { de: "Changhua", hu: "Csanghua", ro: "Changhua", en: "Changhua" },
    description: { de: "Eine der ältesten Städte im Westen Taiwans, bekannt für den riesigen Buddha auf dem Bagua-Berg.", hu: "Nyugat-Tajvan egyik legrégebbi városa, amely a Bagua-hegyen álló hatalmas Buddha-szobráról ismert.", ro: "Unul dintre cele mai vechi orașe din vestul Taiwanului, cunoscut pentru uriașul Buddha de pe Muntele Bagua.", en: "One of the oldest cities in western Taiwan, known for the giant Buddha statue on Bagua Mountain." },
    facts: {
      de: ["26m hoher Großer Buddha", "Gegründet im Jahr 1723", "Eisenbahnknotenpunkt", "Am Fuße des Bagua-Berges"],
      hu: ["26 méter magas Nagy Buddha", "1723-ban alapították", "Vasúti és közlekedési csomópont", "Bagua-hegység lábánál"],
      ro: ["Marele Buddha de 26m", "Fondat în anul 1723", "Nod feroviar important", "La poalele muntelui Bagua"],
      en: ["26m tall Great Buddha", "Founded in 1723", "Railway junction", "At the foot of Bagua Mount"]
    }
  },
  {
    id: "pingtung-cities-v2",
    type: "city",
    parent: "TW-PIF",
    coords: [120.487, 22.671],
    name: { de: "Pingtung", hu: "Pingtung", ro: "Pingtung", en: "Pingtung" },
    description: { de: "Eine tropische Stadt im Süden, die von reicher landwirtschaftlicher Kultur geprägt ist.", hu: "Trópusi város délen, amelyet gazdag mezőgazdasági kultúra jellemez.", ro: "Un oraș tropical din sud, caracterizat de o bogată cultură agricolă.", en: "A tropical city in the south, characterized by a rich agricultural culture." },
    facts: {
      de: ["Landwirtschaftliches Zentrum", "Hauptstadt seit 1933", "Ganzjährig warmes Wetter", "Hakka- und Ureinwohnerkultur"],
      hu: ["Trópusi mezőgazdasági központ", "1933-ban lett megyeszékhely", "Egész évben meleg", "Hakka és őslakos kultúra"],
      ro: ["Centru agricol tropical", "Capitală de județ din 1933", "Cald tot anul", "Cultură Hakka și aborigenă"],
      en: ["Tropical agriculture center", "County capital since 1933", "Warm all year round", "Hakka and aboriginal culture"]
    }
  },
  {
    id: "zhubei-cities-v2",
    type: "city",
    parent: "TW-HSQ",
    coords: [121.012, 24.829],
    name: { de: "Zhubei", hu: "Csupej", ro: "Zhubei", en: "Zhubei" },
    description: { de: "Eine schnell wachsende Stadt im Bezirk Hsinchu, die durch High-Tech-Industrie und Zuzug boomt.", hu: "Gyorsan növekvő város Hszincsu megyében, amely a csúcstechnológiás ipar miatt virágzik.", ro: "Un oraș cu o creștere rapidă în județul Hsinchu, care înflorește datorită industriei high-tech.", en: "A rapidly growing city in Hsinchu County, booming due to the high-tech industry." },
    facts: {
      de: ["Sitz von Hsinchu County", "Wachsende Bevölkerung", "Biomedizinischer Park", "Neu gegründet 1988"],
      hu: ["Hsinchu megye székhelye", "Gyorsan növekvő lakosság", "Orvosbiológiai park", "1988-ban alapították újra"],
      ro: ["Reședința județului Hsinchu", "Populație în creștere", "Parc biomedical", "Reînființat în 1988"],
      en: ["Seat of Hsinchu County", "Fast-growing population", "Biomedical park", "Re-established in 1988"]
    }
  },
  {
    id: "yuanlin-cities-v2",
    type: "city",
    parent: "TW-CHA",
    coords: [120.574, 23.958],
    name: { de: "Yuanlin", hu: "Jüanlin", ro: "Yuanlin", en: "Yuanlin" },
    description: { de: "Eine wohlhabende Kleinstadt, die traditionelle Obstgärten mit moderner Entwicklung verbindet.", hu: "Egy jómódú kisváros, amely a hagyományos gyümölcsösöket a modern fejlődéssel ötvözi.", ro: "Un mic oraș prosper care combină livezile tradiționale cu dezvoltarea modernă.", en: "A prosperous small city that combines traditional orchards with modern development." },
    facts: {
      de: ["Stadtstatus seit 2015", "Eine sehr reiche Stadt", "Kandierte Früchte", "Über 120 Tausend Einwohner"],
      hu: ["2015-ben városi rangot kapott", "A leggazdagabb kisváros", "Kandírozott gyümölcsök", "Több mint 120 ezer lakos"],
      ro: ["Statut de oraș din 2015", "Cel mai bogat orășel", "Fructe confiate", "Peste 120 mii de locuitori"],
      en: ["City status since 2015", "Very wealthy small city", "Candied fruits", "Over 120 thousand residents"]
    }
  },
  {
    id: "douliu-cities-v2",
    type: "city",
    parent: "TW-YUN",
    coords: [120.543, 23.709],
    name: { de: "Douliu", hu: "Touliu", ro: "Douliu", en: "Douliu" },
    description: { de: "Die Verwaltungshauptstadt des Landkreises Yunlin, berühmt für Pomelos und historische Straßen.", hu: "Yunlin megye közigazgatási központja, amely pomelóiról és történelmi utcáiról híres.", ro: "Capitala administrativă a județului Yunlin, renumită pentru pomelo și străzile istorice.", en: "The administrative capital of Yunlin County, famous for pomelos and historic streets." },
    facts: {
      de: ["Hauptstadt von Yunlin", "Taiping Alte Straße", "Pomelo-Anbaugebiet", "Gebäude im Barockstil"],
      hu: ["Yunlin megye közigazgatási központja", "Taiping óvárosi utca", "Pomeló termesztés", "Barokk stílusú épületek"],
      ro: ["Capitala administrativă Yunlin", "Strada veche Taiping", "Cultivarea de pomelo", "Clădiri în stil baroc"],
      en: ["Capital of Yunlin County", "Taiping Old Street", "Pomelo cultivation", "Baroque style buildings"]
    }
  },
  {
    id: "taitung-cities-v2",
    type: "city",
    parent: "TW-TTT",
    coords: [121.150, 22.756],
    name: { de: "Taitung", hu: "Tajtung", ro: "Taitung", en: "Taitung" },
    description: { de: "Eine entspannte Küstenstadt im Osten Taiwans, stark geprägt von indigenen Kulturen.", hu: "Nyugodt tengerparti város Tajvan keleti részén, amelyet erősen formálnak az őslakos kultúrák.", ro: "Un oraș de coastă relaxat din estul Taiwanului, puternic influențat de culturile indigene.", en: "A relaxed coastal city in eastern Taiwan, strongly influenced by indigenous cultures." },
    facts: {
      de: ["Zentrum Ost-Taiwans", "Heimat vieler Ureinwohner", "Heißluftballon-Festival", "Entspannter Lebensstil"],
      hu: ["Kelet-Tajvan központja", "Őslakos törzsek otthona", "Éves hőlégballon-fesztivál", "Lassú tempójú életmód"],
      ro: ["Centrul Taiwanului de Est", "Cămin al aborigenilor", "Festivalul de baloane", "Stil de viață relaxat"],
      en: ["Center of Eastern Taiwan", "Home to aboriginal tribes", "Hot air balloon festival", "Relaxed pace of life"]
    }
  },
  {
    id: "hualien-cities-v2",
    type: "city",
    parent: "TW-HUA",
    coords: [121.604, 23.977],
    name: { de: "Hualien", hu: "Hualien", ro: "Hualien", en: "Hualien" },
    description: { de: "Das Tor zum spektakulären Taroko-Nationalpark, bekannt für seine Marmorindustrie und Strände.", hu: "A látványos Taroko Nemzeti Park kapuja, amely márványiparáról és strandjairól ismert.", ro: "Poarta către spectaculosul Parc Național Taroko, cunoscut pentru industria marmurei și plaje.", en: "The gateway to the spectacular Taroko National Park, known for its marble industry and beaches." },
    facts: {
      de: ["Tor zum Taroko-Park", "Marmorabbau-Industrie", "Häufige Erdbeben", "Bekannt für Mochi-Süßigkeiten"],
      hu: ["Taroko Nemzeti Park kapuja", "Márványbányászat", "Gyakori földrengések", "Mochi édességek"],
      ro: ["Poarta Parcului Taroko", "Mineritul de marmură", "Cutremure frecvente", "Dulciuri mochi"],
      en: ["Gateway to Taroko Park", "Marble mining industry", "Frequent earthquakes", "Famous for mochi sweets"]
    }
  },
  {
    id: "toufen-cities-v2",
    type: "city",
    parent: "TW-MIA",
    coords: [120.896, 24.688],
    name: { de: "Toufen", hu: "Toufen", ro: "Toufen", en: "Toufen" },
    description: { de: "Eine nordwestliche Stadt im Landkreis Miaoli mit einer starken Präsenz der Hakka-Kultur.", hu: "Északnyugati város Miaoli megyében, ahol a Hakka kultúra erős jelenléttel bír.", ro: "Un oraș din nord-vestul județului Miaoli cu o prezență puternică a culturii Hakka.", en: "A northwestern city in Miaoli County with a strong presence of Hakka culture." },
    facts: {
      de: ["Größte Stadt in Miaoli", "Starke Hakka-Bevölkerung", "Petrochemische Basis", "Am Fluss Zhonggang"],
      hu: ["Miaoli megye legnagyobb városa", "Jelentős hakka lakosság", "Ipari és petrokémiai bázis", "Zhonggang-folyó partján"],
      ro: ["Cel mai mare oraș în Miaoli", "Populație Hakka puternică", "Bază petrochimică", "Lângă râul Zhonggang"],
      en: ["Largest city in Miaoli", "Strong Hakka population", "Petrochemical base", "By the Zhonggang River"]
    }
  },
  {
    id: "nantou-cities-v2",
    type: "city",
    parent: "TW-NAN",
    coords: [120.686, 23.903],
    name: { de: "Nantou", hu: "Nantou", ro: "Nantou", en: "Nantou" },
    description: { de: "Die einzige Hauptstadt eines Binnenlandkreises in Taiwan, umgeben von sanften Hügeln.", hu: "Az egyetlen tengerparttal nem rendelkező megye fővárosa Tajvanon, szelíd dombokkal övezve.", ro: "Singura capitală a unui județ fără ieșire la mare din Taiwan, înconjurată de dealuri domoale.", en: "The only capital of a landlocked county in Taiwan, surrounded by rolling hills." },
    facts: {
      de: ["Einzige Binnenhauptstadt", "Oolong-Tee-Produktion", "Zentrum des 1999 Erdbebens", "Bergiges Klima"],
      hu: ["Az egyetlen szárazföldi főváros", "Oolong tea termesztés", "1999-es földrengés epicentruma", "Hegyvidéki klíma"],
      ro: ["Singura capitală interioară", "Producția de ceai Oolong", "Epicentrul cutremurului 1999", "Climat montan"],
      en: ["Only landlocked capital", "Oolong tea production", "1999 earthquake epicenter", "Mountainous climate"]
    }
  },
  {
    id: "yilan-cities-v2",
    type: "city",
    parent: "TW-ILA",
    coords: [121.753, 24.757],
    name: { de: "Yilan", hu: "Jilan", ro: "Yilan", en: "Yilan" },
    description: { de: "Eine malerische Stadt in der Lanyang-Ebene, berühmt für heiße Quellen und unberührte Natur.", hu: "Festői város a Lanyang-síkságon, amely hőforrásairól és érintetlen természetéről híres.", ro: "Un oraș pitoresc din Câmpia Lanyang, faimos pentru izvoarele termale și natura neatinsă.", en: "A picturesque city in the Lanyang Plain, famous for hot springs and untouched nature." },
    facts: {
      de: ["Geothermische Quellen", "Kavalan-Whisky-Destillerie", "Häufige Taifune", "In der Lanyang-Ebene"],
      hu: ["Geotermikus források", "Kavalan whisky lepárló", "Gyakori tájfunok", "Lanyang-síkságon fekszik"],
      ro: ["Izvoare geotermale", "Distileria de whisky Kavalan", "Taifunuri frecvente", "Situat în Câmpia Lanyang"],
      en: ["Geothermal springs", "Kavalan whisky distillery", "Frequent typhoons", "Located in Lanyang Plain"]
    }
  },
  {
    id: "miaoli-cities-v2",
    type: "city",
    parent: "TW-MIA",
    coords: [120.820, 24.564],
    name: { de: "Miaoli", hu: "Miaoli", ro: "Miaoli", en: "Miaoli" },
    description: { de: "Eine hügelige Bergstadt, die tief mit der traditionellen Hakka-Holzschnitzerei verwurzelt ist.", hu: "Hegyes-dombos város, amely mélyen gyökerezik a hagyományos hakka fafaragásban.", ro: "Un oraș montan deluros, adânc înrădăcinat în sculptura tradițională în lemn Hakka.", en: "A hilly mountain city deeply rooted in traditional Hakka woodcarving." },
    facts: {
      de: ["Traditionelle Holzschnitzerei", "Zentrum der Erdölförderung", "Hügelige Landschaft", "Hakka-Kulturzentrum"],
      hu: ["Hagyományos fafaragás", "A kőolaj-kitermelés központja", "Dombvidéki elhelyezkedés", "Hakka kulturális központ"],
      ro: ["Sculptură tradițională în lemn", "Centrul extracției de petrol", "Peisaj deluros", "Centrul cultural Hakka"],
      en: ["Traditional woodcarving", "Center of oil extraction", "Hilly landscape", "Hakka cultural center"]
    }
  },
  {
    id: "magong-cities-v2",
    type: "city",
    parent: "TW-PEN",
    coords: [119.566, 23.565],
    name: { de: "Magong", hu: "Makung", ro: "Magong", en: "Magong" },
    description: { de: "Die größte Stadt auf den Penghu-Inseln, berühmt für ihre alten Tempel und Meeresfrüchte.", hu: "A Penghu-szigetek legnagyobb városa, amely ősi templomairól és tengeri ételeiről híres.", ro: "Cel mai mare oraș din insulele Penghu, faimos pentru templele sale antice și fructele de mare.", en: "The largest city on the Penghu Islands, famous for its ancient temples and seafood." },
    facts: {
      de: ["Hauptstadt von Penghu", "Mazu-Tempel von 1592", "Ältester Tempel Taiwans", "Wichtiges Fischereizentrum"],
      hu: ["A Penghu-szigetek fővárosa", "1592-es Mazu-templom", "Legrégebbi templom Tajvanon", "Halászati központ"],
      ro: ["Capitala insulelor Penghu", "Templul Mazu din 1592", "Cel mai vechi templu", "Centru de pescuit"],
      en: ["Capital of Penghu", "1592 Mazu Temple", "Oldest temple in Taiwan", "Fishing center"]
    }
  },
  {
    id: "taibao-cities-v2",
    type: "city",
    parent: "TW-CYQ",
    coords: [120.332, 23.459],
    name: { de: "Taibao", hu: "Tajpao", ro: "Taibao", en: "Taibao" },
    description: { de: "Eine ruhige Kreisstadt im Landkreis Chiayi, in der sich die Südfiliale des Nationalen Palastmuseums befindet.", hu: "Csendes járási székhely Chiayi megyében, ahol a Nemzeti Palotamúzeum déli fiókintézménye található.", ro: "Un oraș liniștit din județul Chiayi, unde se află filiala de sud a Muzeului Național al Palatului.", en: "A quiet county seat in Chiayi County, home to the Southern Branch of the National Palace Museum." },
    facts: {
      de: ["Sitz der Kreisverwaltung", "Südliches Palastmuseum", "HSR-Bahnhof von Chiayi", "Landwirtschaftliche Stadt"],
      hu: ["Chiayi megyeszékhely", "Nemzeti Palotamúzeum déli ága", "Nagysebességű vasútállomás", "Agrárváros 38 ezer lakossal"],
      ro: ["Sediul județului Chiayi", "Muzeul Național al Palatului", "Gara de mare viteză", "Oraș agricol"],
      en: ["Chiayi county seat", "Southern Palace Museum", "High-speed rail station", "Agricultural city"]
    }
  },
  {
    id: "puzi-cities-v2",
    type: "city",
    parent: "TW-CYQ",
    coords: [120.247, 23.464],
    name: { de: "Puzi", hu: "Pucu", ro: "Puzi", en: "Puzi" },
    description: { de: "Eine traditionelle Küstengemeinde in Chiayi, bekannt für ihren alten Peitian-Mazu-Tempel.", hu: "Hagyományos tengerparti település Chiayiban, amely az ősi Peitian Mazu templomról ismert.", ro: "O comunitate de coastă tradițională din Chiayi, cunoscută pentru vechiul templu Peitian Mazu.", en: "A traditional coastal township in Chiayi, known for its ancient Peitian Mazu Temple." },
    facts: {
      de: ["Peitian-Tempel von 1682", "Traditionelle Stickereien", "Kulturzentrum an der Küste", "Am Fluss Putzu"],
      hu: ["1682-es Peitian-templom", "Hagyományos hímzések", "Parti kulturális központ", "A Putzu-folyó mellett"],
      ro: ["Templul Peitian din 1682", "Broderii tradiționale", "Centru cultural de coastă", "Lângă râul Putzu"],
      en: ["1682 Peitian Temple", "Traditional embroidery", "Coastal cultural center", "By the Putzu River"]
    }
  },
  {
    id: "zhudong-cities-v2",
    type: "city",
    parent: "TW-HSQ",
    coords: [121.087, 24.735],
    name: { de: "Zhudong", hu: "Csutung", ro: "Zhudong", en: "Zhudong" },
    description: { de: "Eine historische Stadt im Landkreis Hsinchu, die einst durch den Holz- und Kohleabbau florierte.", hu: "Történelmi város Hszincsu megyében, amely egykor a fa- és szénbányászatnak köszönhetően virágzott.", ro: "Un oraș istoric din județul Hsinchu, care a înflorit cândva datorită mineritului de lemn și cărbune.", en: "A historic city in Hsinchu County that once flourished due to timber and coal mining." },
    facts: {
      de: ["Frühere Holz- und Kohlenindustrie", "Großer Hakka-Markt", "Zweitgrößte Stadt in Hsinchu", "Gebirgsübergang"],
      hu: ["Korábbi fa- és szénipar", "Jelentős hakka piac", "Hsinchu megye második legnagyobb városa", "Hegyvidéki átkelőhely"],
      ro: ["Fostă industrie a lemnului", "Piață Hakka importantă", "Al doilea oraș din Hsinchu", "Trecătoare montană"],
      en: ["Former timber and coal industry", "Major Hakka market", "Second largest city in Hsinchu", "Mountain crossing point"]
    }
  },
  {
    id: "chaozhou-cities-v2",
    type: "city",
    parent: "TW-PIF",
    coords: [120.538, 22.551],
    name: { de: "Chaozhou", hu: "Csaucsou", ro: "Chaozhou", en: "Chaozhou" },
    description: { de: "Eine lebendige Gemeinde im Süden Taiwans, berühmt für kaltes Rasiereis und gebratene Frühlingsrollen.", hu: "Élénk település Tajvan déli részén, amely hideg reszelt jeges desszertjéről és sült tavaszi tekercséről híres.", ro: "O comunitate vibrantă din sudul Taiwanului, faimoasă pentru gheața rasă rece și pachețelele de primăvară prăjite.", en: "A vibrant township in southern Taiwan, famous for cold shaved ice and fried spring rolls." },
    facts: {
      de: ["Südlicher Verkehrsknotenpunkt", "Traditionelles Schattentheater", "Kaltes Rasiereis", "Landwirtschaftliches Zentrum"],
      hu: ["Dél-Tajvan közlekedési csomópontja", "Hagyományos árnyszínház", "Reszelt jeges desszertek", "Mezőgazdasági elosztóközpont"],
      ro: ["Nod de transport în sud", "Teatru tradițional de umbre", "Deserturi cu gheață rasă", "Centru de distribuție agricolă"],
      en: ["Southern transport hub", "Traditional shadow theater", "Shaved ice desserts", "Agricultural distribution center"]
    }
  },
  {
    id: "caotun-cities-v2",
    type: "city",
    parent: "TW-NAN",
    coords: [120.680, 23.974],
    name: { de: "Caotun", hu: "Caotun", ro: "Caotun", en: "Caotun" },
    description: { de: "Die größte Gemeinde im Landkreis Nantou, die als landwirtschaftliches und kommerzielles Zentrum dient.", hu: "Nantou megye legnagyobb települése, amely mezőgazdasági és kereskedelmi központként szolgál.", ro: "Cea mai mare comunitate din județul Nantou, servind drept centru agricol și comercial.", en: "The largest township in Nantou County, serving as an agricultural and commercial center." },
    facts: {
      de: ["Handelszentrum von Nantou", "Traditionelle Strohschuhe", "Handwerksforschungsinstitut", "Reisanbaugebiet"],
      hu: ["Nantou megye kereskedelmi központja", "Hagyományos szalmacipők", "Kézműves kutatóintézet", "Rizstermesztési vidék"],
      ro: ["Centrul comercial Nantou", "Pantofi tradiționali de paie", "Institutul de artizanat", "Zonă de cultivare a orezului"],
      en: ["Commercial center of Nantou", "Traditional straw shoes", "Craft research institute", "Rice growing area"]
    }
  },
  {
    id: "luodong-cities-v2",
    type: "city",
    parent: "TW-ILA",
    coords: [121.768, 24.676],
    name: { de: "Luodong", hu: "Luotung", ro: "Luodong", en: "Luodong" },
    description: { de: "Die kleinste städtische Gemeinde Taiwans, die jedoch das geschäftlichste Zentrum im Landkreis Yilan ist.", hu: "Tajvan legkisebb városi települése, amely azonban Yilan megye legforgalmasabb üzleti központja.", ro: "Cea mai mică comunitate urbană din Taiwan, care este totuși cel mai aglomerat centru de afaceri din județul Yilan.", en: "Taiwan's smallest urban township, which is nevertheless the busiest business center in Yilan County." },
    facts: {
      de: ["Kleinste städtische Gemeinde", "Geschäftszentrum von Yilan", "Früheres Holzzentrum", "Berühmter Nachtmarkt"],
      hu: ["Tajvan legkisebb városi községe", "Yilan kereskedelmi központja", "Erdészeti faelosztó volt", "Híres éjszakai piac"],
      ro: ["Cea mai mică comună urbană", "Centrul de afaceri Yilan", "Fost centru forestier", "Faimoasa piață de noapte"],
      en: ["Smallest urban township", "Commercial center of Yilan", "Former forestry center", "Famous night market"]
    }
  },
  {
    id: "donggang-cities-v2",
    type: "city",
    parent: "TW-PIF",
    coords: [120.453, 22.467],
    name: { de: "Donggang", hu: "Tungkang", ro: "Donggang", en: "Donggang" },
    description: { de: "Ein bedeutender Fischereihafen im Landkreis Pingtung, berühmt für Blauflossen-Thunfisch und Tempelfeste.", hu: "Jelentős halászkikötő Pingtung megyében, amely a kékúszójú tonhalról és a templomi fesztiválokról híres.", ro: "Un important port pescăresc din județul Pingtung, faimos pentru tonul cu înotătoare albastre și festivalurile de la temple.", en: "A major fishing port in Pingtung County, famous for bluefin tuna and temple festivals." },
    facts: {
      de: ["Blauflossen-Thunfisch-Fest", "Traditionelle Bootsverbrennung", "Hafen nach Xiaoliuqiu", "Zentrum daoistischer Tempel"],
      hu: ["Kékúszójú tonhal fesztivál", "Hagyományos hajóégetés", "Kikötő Xiaoliuqiu felé", "Taoista templomok központja"],
      ro: ["Festivalul tonului", "Arderea tradițională a bărcilor", "Port către Xiaoliuqiu", "Centrul templelor taoiste"],
      en: ["Bluefin tuna festival", "Traditional boat burning", "Port to Xiaoliuqiu", "Center of Taoist temples"]
    }
  },
  {
    id: "hengchun-cities-v2",
    type: "city",
    parent: "TW-PIF",
    coords: [120.744, 22.004],
    name: { de: "Hengchun", hu: "Hengcsun", ro: "Hengchun", en: "Hengchun" },
    description: { de: "Die südlichste Gemeinde Taiwans, die historische Stadtmauern und den Kenting-Nationalpark beheimatet.", hu: "Tajvan legdélibb települése, amely történelmi városfalaknak és a Kenting Nemzeti Parknak ad otthont.", ro: "Cea mai sudică comunitate din Taiwan, care găzduiește ziduri istorice ale orașului și Parcul Național Kenting.", en: "Taiwan's southernmost township, home to historic city walls and Kenting National Park." },
    facts: {
      de: ["Kenting-Nationalpark", "Stadtmauer von 1879", "Südlichste Stadt Taiwans", "Tropisches Surfparadies"],
      hu: ["Kenting Nemzeti Park otthona", "1879-ben épült városfal", "Legdélibb tajvani város", "Trópusi szörfparadicsom"],
      ro: ["Parcul Național Kenting", "Zidul orașului din 1879", "Cel mai sudic oraș", "Paradis tropical de surf"],
      en: ["Kenting National Park", "1879 built city wall", "Southernmost city", "Tropical surfing paradise"]
    }
  },
  {
    id: "huwei-cities-v2",
    type: "city",
    parent: "TW-YUN",
    coords: [120.434, 23.709],
    name: { de: "Huwei", hu: "Huvej", ro: "Huwei", en: "Huwei" },
    description: { de: "Eine kulturell reiche Stadt in Yunlin, bekannt für das traditionelle Handpuppen-Theater.", hu: "Kulturálisan gazdag város Yunlinban, amely a hagyományos kesztyűs bábjátékról ismert.", ro: "Un oraș bogat cultural din Yunlin, cunoscut pentru teatrul tradițional de păpuși de mână.", en: "A culturally rich city in Yunlin, known for traditional glove puppetry." },
    facts: {
      de: ["Heimat des Puppentheaters", "Zuckerfabrik von 1907", "HSR-Bahnhof", "Historische japanische Gebäude"],
      hu: ["A tajvani bábszínház otthona", "1907-es cukorgyár", "Nagysebességű vasútállomás", "Történelmi japán építészet"],
      ro: ["Patria teatrului de păpuși", "Fabrica de zahăr din 1907", "Gara de mare viteză", "Arhitectură japoneză istorică"],
      en: ["Home of Taiwanese puppetry", "1907 sugar factory", "High-speed rail station", "Historic Japanese architecture"]
    }
  }
];
