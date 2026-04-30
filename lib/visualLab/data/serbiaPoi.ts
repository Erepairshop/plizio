import type { POI } from "./poi";

// 1. Ország
export const serbiaCountry: POI = {
  id: "country-serbia",
  type: "country",
  coords: [21.0059, 44.0165],
  name: { de: "Serbien", hu: "Szerbia", ro: "Serbia", en: "Serbia" },
  description: {
    de: "Serbien liegt auf der Balkanhalbinsel. Es ist bekannt für seine reiche Geschichte, beeindruckende Festungen, orthodoxe Klöster und lebendige Städte.",
    hu: "Szerbia a Balkán-félszigeten fekszik. Gazdag történelméről, lenyűgöző erődítményeiről, ortodox kolostorairól és nyüzsgő városairól ismert.",
    ro: "Serbia este situată în Peninsula Balcanică. Este cunoscută pentru istoria sa bogată, cetățile impresionante, mănăstirile ortodoxe și orașele pline de viață.",
    en: "Serbia is located on the Balkan Peninsula. It is known for its rich history, impressive fortresses, orthodox monasteries, and vibrant cities."
  },
  descriptionAdvanced: {
    de: "",
    hu: "Szerbia földrajzi elhelyezkedése kulcsfontosságú a Balkán-félszigeten, hiszen történelmileg kelet és nyugat találkozási pontja volt. Az ország tájait a változatos domborzat jellemzi, a sík pannon síkságtól a magas hegységekig. Ez a sokszínűség nemcsak a természetet, hanem a kultúrát is meghatározza, amit a római, bizánci és oszmán hatások ötvöződése bizonyít. Földrajz K7 — hegységek és folyók.",
    ro: "",
    en: ""
  },
  facts: {
    de: ["Hauptstadt: Belgrad", "Liegt am Balkan", "Währung: Serbischer Dinar", "Amtssprache: Serbisch", "Nicht-EU-Mitglied"],
    hu: ["Főváros: Belgrád", "A Balkánon fekszik", "Pénznem: Szerb dinár", "Hivatalos nyelv: Szerb", "Nem EU-tag"],
    ro: ["Capitala: Belgrad", "Situată în Balcani", "Moneda: Dinar sârbesc", "Limba oficială: Sârbă", "Nu este membră UE"],
    en: ["Capital: Belgrade", "Located in the Balkans", "Currency: Serbian Dinar", "Official language: Serbian", "Non-EU member"]
  },
  factsAdvanced: {
    de: [],
    hu: ["Területe: kb. 88 361 km²", "Legmagasabb pont: Midžor (2169 m)", "Leghosszabb folyó: Duna", "Történelmileg számos birodalom része volt", "Az ország több mint egyharmadát erdők borítják"],
    ro: [],
    en: []
  }
};

// 2. Fő régiók / Tartományok
export const serbiaRegions: POI[] = [
  {
    id: "region-vojvodina",
    type: "region",
    parent: "country-serbia",
    coords: [19.8369, 45.2671],
    name: { de: "Vojvodina", hu: "Vajdaság", ro: "Voivodina", en: "Vojvodina" },
    description: {
      de: "Die Vojvodina ist eine autonome Provinz im Norden Serbiens, bekannt für ihre multikulturelle Bevölkerung und flache Agrarlandschaft.",
      hu: "A Vajdaság egy autonóm tartomány Szerbia északi részén, amely multikulturális lakosságáról és sík mezőgazdasági tájairól ismert.",
      ro: "Voivodina este o provincie autonomă în nordul Serbiei, cunoscută pentru populația sa multiculturală și peisajul agricol plat.",
      en: "Vojvodina is an autonomous province in northern Serbia, known for its multicultural population and flat agricultural landscape."
    },
    descriptionAdvanced: {
        de: "",
        hu: "A Vajdaság a Pannon-medence déli részén terül el, amelyet a termékeny földek jellemeznek. A területet a sokszínű etnikai összetétel mellett a történelmi magyar, szerb és német hatások együttes jelenléte teszi különlegessé. A Duna és a Tisza folyók alapvetően meghatározzák az itt élők gazdasági életét. Földrajz K7 — mezőgazdasági régiók.",
        ro: "",
        en: ""
    },
    facts: {
      de: ["Nordprovinz", "Multikulturell", "Fruchtbare Ebenen", "Hauptstadt: Novi Sad", "Starke Landwirtschaft"],
      hu: ["Északi tartomány", "Multikulturális", "Termékeny síkságok", "Székhelye: Újvidék", "Erős mezőgazdaság"],
      ro: ["Provincie nordică", "Multiculturală", "Câmpii fertile", "Capitala: Novi Sad", "Agricultură puternică"],
      en: ["Northern province", "Multicultural", "Fertile plains", "Capital: Novi Sad", "Strong agriculture"]
    },
    factsAdvanced: {
        de: [],
        hu: ["Területe: 21 506 km²", "Népsűrűsége magasabb az országos átlagnál", "Hivatalosan 6 nyelv használata engedélyezett", "Kiemelkedő gabonatermelő régió", "A Duna mentén számos természetvédelmi terület található"],
        ro: [],
        en: []
    }
  },
  {
    id: "region-sumadija",
    type: "region",
    parent: "country-serbia",
    coords: [20.9167, 44.0167],
    name: { de: "Šumadija", hu: "Šumadija", ro: "Šumadija", en: "Šumadija" },
    description: {
      de: "Šumadija liegt im Herzen Serbiens und ist für ihre hügeligen Wälder und historische Bedeutung bekannt.",
      hu: "A Šumadija Szerbia szívében található, dombos erdeiről és történelmi jelentőségéről ismert.",
      ro: "Šumadija este situată în inima Serbiei și este cunoscută pentru pădurile sale deluroase și importanța istorică.",
      en: "Šumadija is located in the heart of Serbia and is known for its hilly forests and historical significance."
    },
    descriptionAdvanced: {
        de: "",
        hu: "Šumadija a közép-szerb régiók magja, amely évszázadokon keresztül a szerb függetlenségi mozgalmak központja volt. Dombos tájai a korábbi sűrű erdőkről kapták a nevüket, mára azonban sokrétű gyümölcstermesztéséről vált ismertté. A régió kulturális öröksége szorosan összefonódik a 19. századi szerb államisággal. Történelem K8 — nemzeti mozgalmak.",
        ro: "",
        en: ""
    },
    facts: {
      de: ["Zentralserbien", "Hügelige Landschaft", "Historisches Kernland", "Obstbau", "Wälder"],
      hu: ["Közép-Szerbia", "Dombos táj", "Történelmi magterület", "Gyümölcstermesztés", "Erdők"],
      ro: ["Serbia Centrală", "Peisaj deluros", "Zona istorică centrală", "Pomicultură", "Păduri"],
      en: ["Central Serbia", "Hilly landscape", "Historical heartland", "Fruit growing", "Forests"]
    },
    factsAdvanced: {
        de: [],
        hu: ["Nevének jelentése: 'erdős vidék'", "Fontos szerepet játszott az első szerb felkelésben", "Híres a minőségi szilvapálinkájáról", "Kragujevac a régió központja", "Folyókban gazdag táj"],
        ro: [],
        en: []
    }
  }
];

// 3. Városok
export const serbiaCities: POI[] = [
  {
    id: "city-belgrade",
    type: "state-capital",
    parent: "country-serbia",
    coords: [20.4489, 44.7866],
    name: { de: "Belgrad", hu: "Belgrád", ro: "Belgrad", en: "Belgrade" },
    description: {
      de: "Belgrad ist die Hauptstadt Serbiens und liegt am Zusammenfluss von Save und Donau. Sie ist das politische, wirtschaftliche und kulturelle Zentrum.",
      hu: "Belgrád Szerbia fővárosa, a Száva és a Duna összefolyásánál fekszik. Az ország politikai, gazdasági és kulturális központja.",
      ro: "Belgrad este capitala Serbiei și este situată la confluența râurilor Sava și Dunărea. Este centrul politic, economic și cultural.",
      en: "Belgrade is the capital of Serbia and is located at the confluence of the Sava and Danube rivers. It is the political, economic, and cultural center."
    },
    descriptionAdvanced: {
        de: "",
        hu: "Belgrád több mint 7000 éves történelmével Európa egyik legrégebbi folyamatosan lakott városa. A Száva és a Duna találkozása stratégiai jelentőséget adott a településnek, amelyet számos birodalom ostromolt és épített újjá az évszázadok során. Ma a város a dinamikus modernitás és a történelmi örökség különleges elegye. Történelem K6 — ókori civilizációk.",
        ro: "",
        en: ""
    },
    facts: {
      de: ["Größte Stadt Serbiens", "Zusammenfluss von Save und Donau", "Festung Kalemegdan", "Kulturelles Zentrum", "Wichtiger Verkehrsknotenpunkt"],
      hu: ["Szerbia legnagyobb városa", "A Száva és Duna találkozása", "Kalemegdan erőd", "Kulturális központ", "Fontos közlekedési csomópont"],
      ro: ["Cel mai mare oraș din Serbia", "Confluența râurilor Sava și Dunărea", "Cetatea Kalemegdan", "Centru cultural", "Nod de transport important"],
      en: ["Largest city in Serbia", "Confluence of Sava and Danube", "Kalemegdan Fortress", "Cultural center", "Important transport hub"]
    },
    factsAdvanced: {
        de: [],
        hu: ["Lakossága közel 1,7 millió fő", "Több mint 100 ostromot élt át", "Az egyetlen európai főváros a Duna és a Száva összefolyásánál", "Városrész: Zemun (történelmi osztrák-magyar határ)", "Lüktető éjszakai élet"],
        ro: [],
        en: []
    }
  },
  {
    id: "city-novi-sad",
    type: "city",
    parent: "region-vojvodina",
    coords: [19.8369, 45.2671],
    name: { de: "Novi Sad", hu: "Újvidék (Novi Sad)", ro: "Novi Sad", en: "Novi Sad" },
    description: {
      de: "Novi Sad ist die zweitgrößte Stadt Serbiens und die Hauptstadt der Vojvodina, berühmt für das EXIT-Festival und die Festung Petrovaradin.",
      hu: "Újvidék Szerbia második legnagyobb városa és a Vajdaság székhelye, híres az EXIT fesztiválról és a péterváradi erődről.",
      ro: "Novi Sad este al doilea oraș ca mărime din Serbia și capitala Voivodinei, faimos pentru festivalul EXIT și Cetatea Petrovaradin.",
      en: "Novi Sad is the second largest city in Serbia and the capital of Vojvodina, famous for the EXIT festival and Petrovaradin Fortress."
    },
    descriptionAdvanced: {
        de: "",
        hu: "Újvidék a 18. században alapított város, amely gyorsan vált a szerb kultúra és oktatás egyik központjává, ezért sokszor 'Szerb Athénnak' is nevezik. A város a Duna bal partján helyezkedik el, Pétervárad pedig a jobb parton, amit a híres erőd dominál. Ma a város a zenei fesztiváljairól és fiatalos energiájáról ismert. Művészet K8 — fesztiválok.",
        ro: "",
        en: ""
    },
    facts: {
      de: ["Zweitgrößte Stadt", "Hauptstadt der Vojvodina", "EXIT Festival", "Festung Petrovaradin", "An der Donau"],
      hu: ["Második legnagyobb város", "Vajdaság fővárosa", "EXIT Fesztivál", "Péterváradi erőd", "A Duna mentén"],
      ro: ["Al doilea oraș ca mărime", "Capitala Voivodinei", "Festivalul EXIT", "Cetatea Petrovaradin", "Pe Dunăre"],
      en: ["Second largest city", "Capital of Vojvodina", "EXIT Festival", "Petrovaradin Fortress", "On the Danube"]
    },
    factsAdvanced: {
        de: [],
        hu: ["Lakossága több mint 300 000 fő", "2022-ben Európa Kulturális Fővárosa volt", "A Duna egyik legszebb szakasza itt található", "Péterváradi erőd óratornya: 'részeges óra'", "Gazdag múzeumi negyed"],
        ro: [],
        en: []
    }
  },
  {
    id: "city-nis",
    type: "city",
    parent: "country-serbia",
    coords: [21.8958, 43.3209],
    name: { de: "Niš", hu: "Niš", ro: "Niș", en: "Niš" },
    description: {
      de: "Niš ist die drittgrößte Stadt Serbiens und eine der ältesten Städte des Balkans. Sie ist der Geburtsort von Konstantin dem Großen.",
      hu: "Niš Szerbia harmadik legnagyobb városa és a Balkán egyik legrégebbi városa. Nagy Konstantin szülőhelye.",
      ro: "Niș este al treilea oraș ca mărime din Serbia și unul dintre cele mai vechi orașe din Balcani. Este locul de naștere al lui Constantin cel Mare.",
      en: "Niš is the third largest city in Serbia and one of the oldest cities in the Balkans. It is the birthplace of Constantine the Great."
    },
    descriptionAdvanced: {
        de: "",
        hu: "Niš stratégiai fontosságú város, mivel a Balkánon átvezető legfontosabb útvonalak kereszteződésében fekszik. Történelmileg számos birodalom birtokolta, a rómaiaktól az oszmánokig. A város szellemi örökségét a híres szülő, Nagy Konstantin császár neve fémjelzi, aki itt született a 3. században. Történelem K6 — ókori római kor.",
        ro: "",
        en: ""
    },
    facts: {
      de: ["Drittgrößte Stadt", "Geburtsort von Konstantin dem Großen", "Festung von Niš", "Südserbisches Zentrum", "Schädelturm in der Nähe"],
      hu: ["Harmadik legnagyobb város", "Nagy Konstantin szülőhelye", "Niši erőd", "Dél-szerbiai központ", "Koponyatorony a közelben"],
      ro: ["Al treilea oraș ca mărime", "Locul de naștere al lui Constantin cel Mare", "Cetatea Niș", "Centrul sudului Serbiei", "Turnul Craniilor în apropiere"],
      en: ["Third largest city", "Birthplace of Constantine the Great", "Niš Fortress", "Southern Serbian center", "Skull Tower nearby"]
    },
    factsAdvanced: {
        de: [],
        hu: ["Lakossága kb. 250 000 fő", "A Nišava folyó szeli át", "Gazdag oszmán kori emlékek", "Híres a balkáni konyhájáról", "Fontos egyetemi város"],
        ro: [],
        en: []
    }
  },
  {
    id: "city-kragujevac",
    type: "city",
    parent: "region-sumadija",
    coords: [20.9167, 44.0167],
    name: { de: "Kragujevac", hu: "Kragujevac", ro: "Kragujevac", en: "Kragujevac" },
    description: {
      de: "Kragujevac ist das historische Zentrum der Region Šumadija und bekannt für seine Automobilindustrie und Geschichte.",
      hu: "Kragujevac a Šumadija régió történelmi központja, és autóiparáról, valamint történelméről ismert.",
      ro: "Kragujevac este centrul istoric al regiunii Šumadija și este cunoscut pentru industria auto și istoria sa.",
      en: "Kragujevac is the historical center of the Šumadija region and is known for its automotive industry and history."
    },
    descriptionAdvanced: {
        de: "",
        hu: "Kragujevac a 19. század elején a modern szerb állam első fővárosa volt, ezért történelmi jelentősége kiemelkedő. A város a későbbi időszakban ipari központtá vált, különösen az autógyártásban szerzett hírnevet. A modern város a történelmi múzeumok és a 21. századi ipari létesítmények különleges kombinációját mutatja. Történelem K8 — modern államok kialakulása.",
        ro: "",
        en: ""
    },
    facts: {
      de: ["Viertgrößte Stadt", "Zentrum von Šumadija", "Automobilindustrie", "Erste Hauptstadt des modernen Serbien", "Universitätstadt"],
      hu: ["Negyedik legnagyobb város", "Šumadija központja", "Autóipar", "A modern Szerbia első fővárosa", "Egyetemváros"],
      ro: ["Al patrulea oraș ca mărime", "Centrul Šumadija", "Industria auto", "Prima capitală a Serbiei moderne", "Oraș universitar"],
      en: ["Fourth largest city", "Center of Šumadija", "Automotive industry", "First capital of modern Serbia", "University city"]
    },
    factsAdvanced: {
        de: [],
        hu: ["Lakossága kb. 180 000 fő", "A 'Zastava' autógyár székhelye", "Šumarice emlékpark: II. világháborús tragédia helyszíne", "Jelentős oktatási központ", "A Lepenica folyó mentén fekszik"],
        ro: [],
        en: []
    }
  },
  {
    id: "city-subotica",
    type: "city",
    parent: "region-vojvodina",
    coords: [19.6644, 46.1000],
    name: { de: "Subotica", hu: "Szabadka (Subotica)", ro: "Subotica", en: "Subotica" },
    description: {
      de: "Subotica ist eine city in der nördlichen Vojvodina, berühmt für ihre ungarische Minderheit und die reiche Jugendstilarchitektur.",
      hu: "Szabadka egy észak-vajdasági város, híres magyar kisebbségéről és gazdag szecessziós építészetéről.",
      ro: "Subotica este un oraș în nordul Voivodinei, faimos pentru minoritatea maghiară și arhitectura bogată Art Nouveau.",
      en: "Subotica is a city in northern Vojvodina, famous for its Hungarian minority and rich Art Nouveau architecture."
    },
    descriptionAdvanced: {
        de: "",
        hu: "Szabadka a multikulturalizmus mintavárosa, ahol a magyar, szerb és egyéb nemzetiségi építészeti hatások a szecesszió stílusában fonódtak össze a 19. és 20. század fordulóján. A város gazdag polgári hagyományokkal rendelkezik, ami a díszes városházán és a palotákon is megmutatkozik. Földrajzi közelsége Magyarországhoz meghatározó a város gazdasági és kulturális életében. Művészet K7 — építészeti stílusok.",
        ro: "",
        en: ""
    },
    facts: {
      de: ["Grenzstadt zu Ungarn", "Jugendstilarchitektur", "Multikulturell", "Palić-See in der Nähe", "Bedeutende ungarische Minderheit"],
      hu: ["Határváros Magyarországgal", "Szecessziós építészet", "Multikulturális", "Palić-tó a közelben", "Jelentős magyar kisebbség"],
      ro: ["Oraș de graniță cu Ungaria", "Arhitectura Art Nouveau", "Multicultural", "Lacul Palić în apropiere", "Minoritate maghiară semnificativă"],
      en: ["Border city with Hungary", "Art Nouveau architecture", "Multicultural", "Palić Lake nearby", "Significant Hungarian minority"]
    },
    factsAdvanced: {
        de: [],
        hu: ["Lakossága kb. 100 000 fő", "A városháza a magyar szecesszió egyik remekműve", "Közelsége a Palić-tóhoz", "Fontos határátkelőhely", "Sokszínű kulturális élet"],
        ro: [],
        en: []
    }
  },
  {
    id: "city-cacak",
    type: "city",
    parent: "region-sumadija",
    coords: [20.3497, 43.8914],
    name: { de: "Čačak", hu: "Čačak", ro: "Čačak", en: "Čačak" },
    description: {
      de: "Čačak ist das wirtschaftliche Zentrum der Region Moravica und bekannt für das nahe gelegene Ovčar-Kablar-Kloster-Tal.",
      hu: "Čačak a Moravica régió gazdasági központja, amely a közeli Ovčar-Kablar kolostor-völgyről ismert.",
      ro: "Čačak este centrul economic al regiunii Moravica și este cunoscut pentru valea mănăstirilor Ovčar-Kablar din apropiere.",
      en: "Čačak is the economic center of the Moravica region and is known for the nearby Ovčar-Kablar monastery valley."
    },
    descriptionAdvanced: {
        de: "",
        hu: "Čačak a Nyugati-Morava folyó völgyében fekvő, gazdag természeti és kulturális látnivalókkal rendelkező város. A régió híres az Ovčar-Kablar szorosról, ahol számos középkori kolostor rejtőzik a hegyek között. A város modern arculata jól illeszkedik a környező hegyvidéki tájhoz, így népszerű úti cél a túrázók és a kultúrakedvelők körében. Földrajz K8 — szorosok és folyóvölgyek.",
        ro: "",
        en: ""
    },
    facts: {
      de: ["Industriezentrum", "Nahe Ovčar-Kablar-Schlucht", "Westmorava", "Nationales Freiheitsdenkmal", "Traditionsreiche Stadt"],
      hu: ["Ipari központ", "Az Ovčar-Kablar-szoros közelében", "Nyugati-Morava", "Nemzeti Szabadság Emlékmű", "Nagy hagyományú város"],
      ro: ["Centru industrial", "Lângă Defileul Ovčar-Kablar", "Morava de Vest", "Monumentul Libertății Naționale", "Oraș plin de tradiții"],
      en: ["Industrial center", "Near Ovčar-Kablar Gorge", "West Morava", "National Freedom Monument", "City with deep traditions"]
    },
    factsAdvanced: {
        de: [],
        hu: ["Lakossága kb. 70 000 fő", "Gazdag ipari hagyományok", "A szorosban 10 kolostor található", "A városközpontban híres múzeum található", "Jelentős mezőgazdasági térség"],
        ro: [],
        en: []
    }
  },
  {
    id: "city-zrenjanin",
    type: "city",
    parent: "region-vojvodina",
    coords: [20.3906, 45.3836],
    name: { de: "Zrenjanin", hu: "Nagybecskerek (Zrenjanin)", ro: "Zrenjanin", en: "Zrenjanin" },
    description: {
      de: "Zrenjanin ist die größte Stadt im serbischen Banat und beeindruckt mit wunderschönen Brücken und Architektur im Stadtzentrum.",
      hu: "Nagybecskerek a szerbiai Bánát legnagyobb városa, és gyönyörű hídjaival, valamint belvárosi építészetével nyűgöz le.",
      ro: "Zrenjanin este cel mai mare oraș din Banatul sârbesc și impresionează prin podurile frumoase și arhitectura din centrul orașului.",
      en: "Zrenjanin is the largest city in the Serbian Banat and impresses with beautiful bridges and architecture in the city center."
    },
    descriptionAdvanced: {
        de: "",
        hu: "Nagybecskerek a Bánát szívében, a Béga folyó kanyarulatainál fekszik, ami meghatározza a város arculatát. A városközpont építészete a 19. és 20. századi polgári stílusokat tükrözi, amit a számos híd tesz még egyedibbé. A régió története szorosan összefonódik a mezőgazdasággal és a folyami kereskedelemmel. Földrajz K7 — városfejlődés folyók mentén.",
        ro: "",
        en: ""
    },
    facts: {
      de: ["Zentrum des Banats", "Fluss Begej", "Historische Brücken", "Rathaus-Architektur", "Ehemaliges Groß-Betschkerek"],
      hu: ["A Bánát központja", "Béga folyó", "Történelmi hidak", "Városháza építészete", "Egykori Nagybecskerek"],
      ro: ["Centrul Banatului", "Râul Bega", "Poduri istorice", "Arhitectura primăriei", "Fostul Veliki Bečkerek"],
      en: ["Center of the Banat", "Begej River", "Historical bridges", "City hall architecture", "Former Veliki Bečkerek"]
    },
    factsAdvanced: {
        de: [],
        hu: ["Lakossága kb. 75 000 fő", "A Béga folyó egykoron az élet fő ütőere volt", "Gazdag színházi hagyományok", "A város központjában található a híres városháza", "Fontos ipari központ"],
        ro: [],
        en: []
    }
  }
];

// 4. Kultúra és Történelem
export const serbiaCulture: POI[] = [
  {
    id: "castle-kalemegdan",
    type: "historical",
    parent: "city-belgrade",
    coords: [20.4500, 44.8236],
    name: { de: "Festung Kalemegdan", hu: "Kalemegdan erőd", ro: "Cetatea Kalemegdan", en: "Kalemegdan Fortress" },
    description: {
      de: "Die Festung Kalemegdan ist das historische Herz von Belgrad, malerisch gelegen am Zusammenfluss von Save und Donau.",
      hu: "A Kalemegdan erőd Belgrád történelmi szíve, festői környezetben, a Száva és a Duna találkozásánál.",
      ro: "Cetatea Kalemegdan este inima istorică a Belgradului, situată pitoresc la confluența râurilor Sava și Dunărea.",
      en: "Kalemegdan Fortress is the historic heart of Belgrade, picturesquely located at the confluence of the Sava and Danube rivers."
    },
    descriptionAdvanced: {
        de: "",
        hu: "A Kalemegdan a történelem rétegeinek lenyűgöző gyűjteménye, ahol római, bizánci, magyar, oszmán és osztrák erődítési technikák ötvöződnek. A vár Belgrád legfontosabb stratégiai pontja volt, amely felett számtalan hatalom uralkodott. Ma a vár a belgrádiak kedvenc pihenőhelye, ahonnan csodás kilátás nyílik a folyókra. Történelem K8 — várépítészet.",
        ro: "",
        en: ""
    },
    facts: {
      de: ["Wahrzeichen Belgrads", "Über dem Flusszusammenfluss", "Römische und osmanische Spuren", "Großer Park", "Historisches Monument"],
      hu: ["Belgrád jelképe", "A folyók találkozása felett", "Római és oszmán nyomok", "Nagy park", "Történelmi emlékmű"],
      ro: ["Simbolul Belgradului", "Deasupra confluenței râurilor", "Urme romane și otomane", "Parc mare", "Monument istoric"],
      en: ["Symbol of Belgrade", "Above the river confluence", "Roman and Ottoman traces", "Large park", "Historical monument"]
    },
    factsAdvanced: {
        de: [],
        hu: ["Az erőd területe több mint 50 hektár", "Több mint 2000 éves erődítmények találhatók itt", "A várban található a Hadtörténeti Múzeum", "A 'Pobednik' szobor a város jelképe", "Számos ókori és középkori rom található benne"],
        ro: [],
        en: []
    }
  },
  {
    id: "castle-petrovaradin",
    type: "historical",
    parent: "city-novi-sad",
    coords: [19.8631, 45.2522],
    name: { de: "Festung Petrovaradin", hu: "Péterváradi erőd", ro: "Cetatea Petrovaradin", en: "Petrovaradin Fortress" },
    description: {
      de: "Die Festung Petrovaradin in Novi Sad ist eine beeindruckende Anlage an der Donau, oft 'Gibraltar der Donau' genannt.",
      hu: "Az újvidéki péterváradi erőd a Duna mentén fekvő lenyűgöző erődítmény, amelyet gyakran a 'Duna Gibraltárjának' is neveznek.",
      ro: "Cetatea Petrovaradin din Novi Sad este un complex impresionant pe Dunăre, deseori numit 'Gibraltarul Dunării'.",
      en: "Petrovaradin Fortress in Novi Sad is an impressive complex on the Danube, often called the 'Gibraltar of the Danube'."
    },
    descriptionAdvanced: {
        de: "",
        hu: "Pétervárad erődje a 17. és 18. században épült, az osztrák hadi építészet egyik legjelentősebb alkotása. A komplexum hatalmas földalatti alagutakkal rendelkezik, amelyek a hadi stratégiák részét képezték. A vár óratornya a város jelképe, aminek a mutatói különlegesek, hogy a hajósok messziről is láthassák az időt. Történelem K8 — 18. századi erődítmények.",
        ro: "",
        en: ""
    },
    facts: {
      de: ["Gibraltar der Donau", "Ort des EXIT-Festivals", "Berühmter Uhrenturm", "Katakomben", "Überblickt Novi Sad"],
      hu: ["A Duna Gibraltárja", "Az EXIT fesztivál helyszíne", "Híres óratorony", "Katakombák", "Újvidékre néz"],
      ro: ["Gibraltarul Dunării", "Locul festivalului EXIT", "Turnul cu ceas faimos", "Catacombe", "Vedere spre Novi Sad"],
      en: ["Gibraltar of the Danube", "EXIT Festival venue", "Famous clock tower", "Catacombs", "Overlooks Novi Sad"]
    },
    factsAdvanced: {
        de: [],
        hu: ["A vár 1692 és 1780 között épült", "Az erődrendszer több mint 16 km hosszú alagútrendszerrel rendelkezik", "A híres 'EXIT' fesztivál helyszíne", "Az óratorony mutatói fordítottak (a kicsi mutatja a perceket)", "Jelentős stratégiai szerepe volt a török elleni harcokban"],
        ro: [],
        en: []
    }
  },
  {
    id: "church-studenica",
    type: "landmark",
    parent: "country-serbia",
    coords: [20.5317, 43.4864],
    name: { de: "Kloster Studenica", hu: "Studenica kolostor", ro: "Mănăstirea Studenica", en: "Studenica Monastery" },
    description: {
      de: "Das Kloster Studenica ist eines der größten und reichsten serbisch-orthodoxen Klöster und gehört zum UNESCO-Weltkulturerbe.",
      hu: "A Studenica kolostor az egyik legnagyobb és leggazdagabb szerb ortodox kolostor, az UNESCO világörökség része.",
      ro: "Mănăstirea Studenica este una dintre cele mai mari și mai bogate mănăstiri ortodoxe sârbești și face parte din Patrimoniul Mondial UNESCO.",
      en: "Studenica Monastery is one of the largest and richest Serbian Orthodox monasteries and is a UNESCO World Heritage Site."
    },
    descriptionAdvanced: {
        de: "",
        hu: "A Studenica kolostor a 12. század végén alapított, a Nemanjić-dinasztia sírhelyéül szolgáló épületegyüttes, ami a szerb középkori művészet csúcsát képviseli. A templomokban látható bizánci stílusú freskók és a márványfaragások egyedülállóak. A kolostor nemcsak vallási, hanem fontos történelmi és kulturális központ is. Művészet K7 — bizánci freskók.",
        ro: "",
        en: ""
    },
    facts: {
      de: ["UNESCO-Weltkulturerbe", "12. Jahrhundert", "Marmorarchitektur", "Bedeutende Fresken", "Serbisch-orthodox"],
      hu: ["UNESCO Világörökség", "12. század", "Márvány építészet", "Jelentős freskók", "Szerb ortodox"],
      ro: ["Patrimoniul Mondial UNESCO", "Secolul al XII-lea", "Arhitectură din marmură", "Fresce importante", "Ortodoxă sârbă"],
      en: ["UNESCO World Heritage Site", "12th century", "Marble architecture", "Important frescoes", "Serbian Orthodox"]
    },
    factsAdvanced: {
        de: [],
        hu: ["Stefan Nemanja alapította 1190-ben", "Jelentős bizánci stílusú freskók (13. század)", "A templomokat fehér márványból építették", "Szerbia egyik legszentebb helye", "A szerb államiság bölcsőjének tartják"],
        ro: [],
        en: []
    }
  },
  {
    id: "castle-golubac",
    type: "historical",
    parent: "country-serbia",
    coords: [21.6775, 44.6611],
    name: { de: "Festung Golubac", hu: "Galambóc vára", ro: "Cetatea Golubac", en: "Golubac Fortress" },
    description: {
      de: "Die Festung Golubac ist eine mittelalterliche Burgruine, die majestätisch am Eingang der Eisernen Tors-Schlucht an der Donau liegt.",
      hu: "Galambóc vára egy középkori várrom, amely fenségesen magasodik a Vaskapu-szorost bejáratánál, a Duna mentén.",
      ro: "Cetatea Golubac este o cetate medievală în ruină, așezată maiestuos la intrarea în defileul Porțile de Fier de pe Dunăre.",
      en: "Golubac Fortress is a medieval ruined castle sitting majestically at the entrance to the Iron Gates gorge on the Danube."
    },
    descriptionAdvanced: {
        de: "",
        hu: "Galambóc vára a Duna mentén fekvő egyik legimpozánsabb középkori erődítmény, amely a Vaskapu-szoros kapujaként szolgált. A 14. században épült vár tíz tornya stratégiai fontosságú volt a vízi közlekedés ellenőrzésében. Ma a felújított vár a turisták számára is látogatható, és a környék egyik legfontosabb nevezetessége. Történelem K8 — középkori erődítmények.",
        ro: "",
        en: ""
    },
    facts: {
      de: ["An der Donau", "Eingang zum Eisernen Tor", "Mittelalterliche Burg", "Zehn Türme", "Touristenattraktion"],
      hu: ["A Duna mentén", "A Vaskapu bejárata", "Középkori vár", "Tíz torony", "Turisztikai látványosság"],
      ro: ["Pe Dunăre", "Intrarea în Porțile de Fier", "Cetate medievală", "Zece turnuri", "Atracție turistică"],
      en: ["On the Danube", "Entrance to the Iron Gates", "Medieval castle", "Ten towers", "Tourist attraction"]
    },
    factsAdvanced: {
        de: [],
        hu: ["Az erőd 10 tornya közül a legnagyobb a 30 méter magas Donjon", "Stratégiai helyen fekszik a Duna szűkületénél", "Az erődöt magyar, szerb és török erők is birtokolták", "Ma modern múzeumként és látogatóközpontként működik", "A Duna legszebb szakaszán helyezkedik el"],
        ro: [],
        en: []
    }
  },
  {
    id: "archaeology-felix-romuliana",
    type: "landmark",
    parent: "country-serbia",
    coords: [22.1861, 43.8994],
    name: { de: "Felix Romuliana", hu: "Felix Romuliana", ro: "Felix Romuliana", en: "Felix Romuliana" },
    description: {
      de: "Felix Romuliana ist eine antike römische Residenz des Kaisers Galerius im Osten Serbiens, ein UNESCO-Weltkulturerbe.",
      hu: "A Felix Romuliana Galerius római császár ókori rezidenciája Kelet-Szerbiában, UNESCO világörökségi helyszín.",
      ro: "Felix Romuliana este o veche reședință romană a împăratului Galerius în estul Serbiei, parte a Patrimoniului Mondial UNESCO.",
      en: "Felix Romuliana is an ancient Roman residence of Emperor Galerius in eastern Serbia, a UNESCO World Heritage Site."
    },
    descriptionAdvanced: {
        de: "",
        hu: "A Felix Romuliana a késő római császári építészet egyik legkiválóbb példája, amelyet Galerius császár építtetett édesanyja tiszteletére a 3-4. században. A palotakomplexum díszes mozaikjai és masszív falai a római hatalom erejét tükrözik. Ez az egyik legépebb római kori emlék Szerbia keleti részén, amely betekintést nyújt a korabeli császári életmódba. Művészet K6 — római kori művészet.",
        ro: "",
        en: ""
    },
    facts: {
      de: ["UNESCO-Weltkulturerbe", "Römischer Kaiserpalast", "Mosaike", "Nahe Zaječar", "Antike Ruinen"],
      hu: ["UNESCO Világörökség", "Római császári palota", "Mozaikok", "Zaječar közelében", "Ókori romok"],
      ro: ["Patrimoniul Mondial UNESCO", "Palat imperial roman", "Mozaicuri", "Lângă Zaječar", "Ruine antice"],
      en: ["UNESCO World Heritage Site", "Roman imperial palace", "Mosaics", "Near Zaječar", "Ancient ruins"]
    },
    factsAdvanced: {
        de: [],
        hu: ["Az épületegyüttest 2007-ben vették fel az UNESCO világörökségi listájára", "Galerius császár a palotát Gamzigrad néven alapította", "A palota és a környező épületek díszes mozaikokkal voltak ellátva", "Kelet-Szerbia egyik legfontosabb turisztikai célpontja", "A palotát 20 torony védte"],
        ro: [],
        en: []
    }
  },
  {
    id: "monument-skull-tower",
    type: "landmark",
    parent: "city-nis",
    coords: [21.9231, 43.3117],
    name: { de: "Schädelturm", hu: "Koponyatorony", ro: "Turnul Craniilor", en: "Skull Tower" },
    description: {
      de: "Der Schädelturm (Ćele Kula) in Niš ist ein Monument, das aus den Schädeln serbischer Rebellen während des Ersten Serbischen Aufstands erbaut wurde.",
      hu: "A niši Koponyatorony (Ćele Kula) egy emlékmű, amelyet a szerb lázadók koponyáiból építettek az első szerb felkelés idején.",
      ro: "Turnul Craniilor (Ćele Kula) din Niș este un monument construit din craniile rebelilor sârbi în timpul Primei Răscoale Sârbești.",
      en: "The Skull Tower (Ćele Kula) in Niš is a monument built from the skulls of Serbian rebels during the First Serbian Uprising."
    },
    descriptionAdvanced: {
        de: "",
        hu: "A niši Koponyatorony az oszmán uralom brutalitásának emlékműve, amelyet az 1809-es čegari csata után állítottak fel elrettentésül. A szerb felkelők koponyáit építették be a toronyba, ami azóta a nemzeti ellenállás szimbólumává vált. Ma a torony egy kápolna belsejében található, hogy megóvják az utókor számára. Történelem K8 — szabadságharcok.",
        ro: "",
        en: ""
    },
    facts: {
      de: ["Einzigartiges Denkmal", "Schädel der Rebellen", "Erster Serbischer Aufstand", "Osmanische Herrschaft", "In Niš"],
      hu: ["Egyedülálló emlékmű", "Lázadók koponyái", "Első szerb felkelés", "Oszmán uralom", "Nišben"],
      ro: ["Monument unic", "Craniile rebelilor", "Prima Răscoală Sârbă", "Dominația otomană", "În Niș"],
      en: ["Unique monument", "Skulls of rebels", "First Serbian Uprising", "Ottoman rule", "In Niš"]
    },
    factsAdvanced: {
        de: [],
        hu: ["Az 1809-es čegari csata után építtette Hursid pasa", "Eredetileg 952 koponyát falaztak be", "Ma 58 koponya látható a toronyban", "Az oszmán elnyomás kegyetlenségének mementója", "Nemzeti kegyhely"],
        ro: [],
        en: []
    }
  },
  {
    id: "church-saint-sava",
    type: "landmark",
    parent: "city-belgrade",
    coords: [20.4686, 44.7981],
    name: { de: "Tempel des Heiligen Sava", hu: "Szent Száva-templom", ro: "Catedrala Sfântul Sava", en: "Temple of Saint Sava" },
    description: {
      de: "Der Tempel des Heiligen Sava in Belgrad ist eine der größten orthodoxen Kirchen der Welt und ein dominierendes Wahrzeichen der Stadt.",
      hu: "A belgrádi Szent Száva-templom a világ egyik legnagyobb ortodox temploma, és a város meghatározó jelképe.",
      ro: "Catedrala Sfântul Sava din Belgrad este una dintre cele mai mari biserici ortodoxe din lume și un simbol dominant al orașului.",
      en: "The Temple of Saint Sava in Belgrade is one of the largest Orthodox churches in the world and a dominating landmark of the city."
    },
    descriptionAdvanced: {
        de: "",
        hu: "A Szent Száva-templom a bizánci stílusú építészet egyik modern remekműve, amelynek kupolája messziről látható Belgrád felett. A templom építése évtizedekig húzódott, de ma a szerb ortodox kereszténység legfontosabb központja. A templom belseje lenyűgöző mozaikdíszítéssel rendelkezik, amely az ortodox vallási művészet egyik csúcsa. Művészet K8 — ortodox egyházi építészet.",
        ro: "",
        en: ""
    },
    facts: {
      de: ["Größte orthodoxe Kirche auf dem Balkan", "Dem Heiligen Sava gewidmet", "Dominante Kuppel", "Belgrader Wahrzeichen", "Mosaik-Ausstattung"],
      hu: ["A Balkán legnagyobb ortodox temploma", "Szent Szávának szentelve", "Domináns kupola", "Belgrádi jelkép", "Mozaik díszítés"],
      ro: ["Cea mai mare biserică ortodoxă din Balcani", "Dedicată Sfântului Sava", "Cupolă dominantă", "Simbol al Belgradului", "Decorațiuni cu mozaic"],
      en: ["Largest Orthodox church in the Balkans", "Dedicated to Saint Sava", "Dominating dome", "Belgrade landmark", "Mosaic interior"]
    },
    factsAdvanced: {
        de: [],
        hu: ["A templom befogadóképessége több mint 10 000 fő", "A kupola magassága 70 méter", "Szent Száva, a szerb egyház alapítójának tiszteletére épült", "Az építkezés 1935-ben kezdődött", "A belső teret több millió mozaikdarab díszíti"],
        ro: [],
        en: []
    }
  },
  {
    id: "castle-smederevo",
    type: "historical",
    parent: "country-serbia",
    coords: [20.9292, 44.6669],
    name: { de: "Festung Smederevo", hu: "Szendrői vár", ro: "Cetatea Smederevo", en: "Smederevo Fortress" },
    description: {
      de: "Die Festung Smederevo ist eine der größten mittelalterlichen Flachlandfestungen in Europa, gelegen an der Donau.",
      hu: "A Szendrői vár Európa egyik legnagyobb középkori síkvidéki erődítménye, a Duna mentén fekszik.",
      ro: "Cetatea Smederevo este una dintre cele mai mari fortărețe medievale de șes din Europa, situată pe Dunăre.",
      en: "Smederevo Fortress is one of the largest medieval flatland fortresses in Europe, located on the Danube."
    },
    descriptionAdvanced: {
        de: "",
        hu: "A Szendrői vár a 15. század elején épült, amikor a szerb despota fővárosává tette a települést. A vár a Duna menti síkságon áll, hatalmas falaival és tornyaival egyike a legtekintélyesebb középkori védműveknek. Bár a történelem viharaiban sokat szenvedett, máig lenyűgöző képet nyújt a középkori haditechnikáról és építészetről. Történelem K8 — középkori várak.",
        ro: "",
        en: ""
    },
    facts: {
      de: ["Größte Flachlandfestung Europas", "An der Donau", "15. Jahrhundert", "Ehemalige Hauptstadt", "Beeindruckende Mauern"],
      hu: ["Európa legnagyobb síkvidéki erődje", "A Duna mentén", "15. század", "Egykori főváros", "Lenyűgöző falak"],
      ro: ["Cea mai mare fortăreață de șes din Europa", "Pe Dunăre", "Secolul al XV-lea", "Fostă capitală", "Ziduri impresionante"],
      en: ["Largest flatland fortress in Europe", "On the Danube", "15th century", "Former capital", "Impressive walls"]
    },
    factsAdvanced: {
        de: [],
        hu: ["Az erődöt Brankovics György despota építtette 1430 körül", "A vár területe 11 hektár", "25 tornya a falak erősségét biztosította", "A Duna-parti erődöt egykoron a Duna vize védte", "Szendrő az utolsó középkori szerb főváros volt"],
        ro: [],
        en: []
    }
  },
  {
    id: "monument-oplenac",
    type: "landmark",
    parent: "region-sumadija",
    coords: [20.6833, 44.2500],
    name: { de: "Oplenac", hu: "Oplenac", ro: "Oplenac", en: "Oplenac" },
    description: {
      de: "Oplenac ist der Hügel in Topola, wo sich die prachtvolle St.-Georgs-Kirche und das Mausoleum der serbischen Königsfamilie Karadjordjevic befinden.",
      hu: "Oplenac a Topola közelében lévő domb, ahol a gyönyörű Szent György-templom és a Karađorđević szerb királyi család mauzóleuma található.",
      ro: "Oplenac este dealul din Topola, unde se află magnifica Biserică Sfântul Gheorghe și mausoleul familiei regale sârbe Karadjordjevic.",
      en: "Oplenac is the hill in Topola where the magnificent St. George's Church and the mausoleum of the Serbian Karadjordjevic royal family are located."
    },
    descriptionAdvanced: {
        de: "",
        hu: "Oplenac a szerb történelem egyik legfontosabb helyszíne, a Karađorđević királyi család sírhelye. A Szent György-templom belseje világszínvonalú mozaikokkal van díszítve, amelyek több millió színárnyalatból állnak össze. A helyszín nemcsak vallási központ, hanem a szerb nemzeti identitás és az uralkodóház iránti tisztelet egyik legfőbb színtere is egyben. Művészet K8 — mozaikművészet.",
        ro: "",
        en: ""
    },
    facts: {
      de: ["Königliches Mausoleum", "St.-Georgs-Kirche", "Atemberaubende Mosaike", "Topola", "Karadjordjevic Dynastie"],
      hu: ["Királyi mauzóleum", "Szent György-templom", "Lélegzetelállító mozaikok", "Topola", "Karađorđević dinasztia"],
      ro: ["Mausoleu regal", "Biserica Sfântul Gheorghe", "Mozaicuri uimitoare", "Topola", "Dinastia Karadjordjevic"],
      en: ["Royal mausoleum", "St. George's Church", "Stunning mosaics", "Topola", "Karadjordjevic dynasty"]
    },
    factsAdvanced: {
        de: [],
        hu: ["A templom mozaikjai 40 millió apró darabból állnak", "A Karađorđević dinasztia 28 tagját temették ide", "A templom 1910 és 1930 között épült", "Oplenac Topola városa mellett található", "A szerb királyi család emlékezete"],
        ro: [],
        en: []
    }
  },
  {
    id: "spa-vrnjacka-banja",
    type: "landmark",
    parent: "country-serbia",
    coords: [20.8953, 43.6267],
    name: { de: "Vrnjačka Banja", hu: "Vrnjačka Banja", ro: "Vrnjačka Banja", en: "Vrnjačka Banja" },
    description: {
      de: "Vrnjačka Banja ist der bekannteste und beliebteste Kurort in Serbien, bekannt für seine heilenden Mineralquellen.",
      hu: "Vrnjačka Banja Szerbia legismertebb és legnépszerűbb gyógyfürdője, amely gyógyító ásványvízforrásairól híres.",
      ro: "Vrnjačka Banja este cel mai faimos și popular centru balnear din Serbia, cunoscut pentru izvoarele sale minerale curative.",
      en: "Vrnjačka Banja is the most famous and popular spa town in Serbia, known for its healing mineral springs."
    },
    descriptionAdvanced: {
        de: "",
        hu: "Vrnjačka Banja évszázadok óta a gyógyulás és a pihenés fellegvára, ahol a természetes ásványvizek jótékony hatását már a rómaiak is ismerték. A fürdőváros ma is őrzi 19. századi hangulatát, gyönyörű parkjaival és sétányaival. A város egyik leghíresebb látnivalója a 'Szerelem hídja', amelyhez a helyi legendák szerint a szerelmesek lakatokat kötnek. Földrajz K7 — gyógyfürdők.",
        ro: "",
        en: ""
    },
    facts: {
      de: ["Bekanntester Kurort", "Mineralquellen", "Zentralserbien", "Liebesbrücke", "Lange Kurtradition"],
      hu: ["Legismertebb gyógyfürdő", "Ásványvízforrások", "Közép-Szerbia", "Szerelem hídja", "Nagy fürdőhagyomány"],
      ro: ["Cea mai cunoscută stațiune", "Izvoare minerale", "Serbia Centrală", "Podul iubirii", "Tradiție balneară îndelungată"],
      en: ["Most famous spa resort", "Mineral springs", "Central Serbia", "Bridge of Love", "Long spa tradition"]
    },
    factsAdvanced: {
        de: [],
        hu: ["Szerbia elsőszámú gyógyfürdője", "Több mint 7 különböző gyógyvízforrással rendelkezik", "A fürdőváros parkja Európa-szerte híres", "Hosszú gyógyturisztikai hagyományok", "A 'Szerelem hídja' a legnépszerűbb találkozóhely"],
        ro: [],
        en: []
    }
  },
  {
    id: "spa-sokobanja",
    type: "landmark",
    parent: "country-serbia",
    coords: [21.8744, 43.6450],
    name: { de: "Sokobanja", hu: "Sokobanja", ro: "Sokobanja", en: "Sokobanja" },
    description: {
      de: "Sokobanja ist ein historischer Kurort im Osten Serbiens, umgeben von Bergen und bekannt für sein heilendes Klima.",
      hu: "Sokobanja egy történelmi gyógyfürdő Kelet-Szerbiában, hegyekkel körülvéve, amely gyógyító klímájáról ismert.",
      ro: "Sokobanja este o stațiune istorică în estul Serbiei, înconjurată de munți și recunoscută pentru climatul său curativ.",
      en: "Sokobanja is a historic spa town in eastern Serbia, surrounded by mountains and known for its healing climate."
    },
    descriptionAdvanced: {
        de: "",
        hu: "Sokobanja a Kelet-Szerbia gyöngyszeme, amely különleges mikroklímájáról és tiszta hegyi levegőjéről híres. A város már a török időkben is kedvelt fürdőhely volt, történelmi hamamjai ma is láthatóak. A környező hegyek ideálisak a túrázók számára, akik a gyógyulás mellett a természet közelségét keresik. Földrajz K6 — klímatikus gyógyhelyek.",
        ro: "",
        en: ""
    },
    facts: {
      de: ["Luftkurort", "Ostserbien", "Historische Hammams", "Moravica-Fluss", "Hoher Ozongehalt"],
      hu: ["Klimatikus gyógyhely", "Kelet-Szerbia", "Történelmi hammamok", "Moravica-folyó", "Magas ózontartalom"],
      ro: ["Stațiune climatică", "Estul Serbiei", "Hamamuri istorice", "Râul Moravica", "Conținut ridicat de ozon"],
      en: ["Air spa", "Eastern Serbia", "Historical hammams", "Moravica River", "High ozone content"]
    },
    factsAdvanced: {
        de: [],
        hu: ["Az ózonban gazdag levegője gyógyító hatású", "Történelmi oszmán kori fürdőházak (hammamok)", "A Moravica folyó és a környező hegyek gyönyörű tájat biztosítanak", "Kelet-Szerbia kedvelt üdülőhelye", "Gazdag gyógyturisztikai múlt"],
        ro: [],
        en: []
    }
  }
];

// 5. Természet (Hegyek, Tavak, Nemzeti Parkok)
export const serbiaNature: POI[] = [
  {
    id: "nature-tara-national-park",
    type: "landmark",
    parent: "country-serbia",
    coords: [19.4500, 43.8500],
    name: { de: "Nationalpark Tara", hu: "Tara Nemzeti Park", ro: "Parcul Național Tara", en: "Tara National Park" },
    description: {
      de: "Der Nationalpark Tara im Westen Serbiens ist berühmt für seine tiefen Wälder, spektakulären Aussichtspunkte und die Drina-Schlucht.",
      hu: "A nyugat-szerbiai Tara Nemzeti Park mély erdeiről, látványos kilátóiról és a Drina-szurdokról híres.",
      ro: "Parcul Național Tara din vestul Serbiei este faimos pentru pădurile sale adânci, punctele de belvedere spectaculoase și defileul Drinei.",
      en: "Tara National Park in western Serbia is famous for its deep forests, spectacular viewpoints, and the Drina Gorge."
    },
    descriptionAdvanced: {
        de: "",
        hu: "A Tara Nemzeti Park a természetvédelmi területek egyik ékköve, ahol a Drina folyó vadregényes szurdokot vágott a hegyek közé. A park híres a ritka növényfajokról, mint például a Pančić-lucfenyőről, és a vadállatokról, például a barnamedvéről. A legszebb kilátás a 'Banjska Stena' kilátóról nyílik a folyó kanyarulataira. Földrajz K8 — nemzeti parkok és ökoszisztémák.",
        ro: "",
        en: ""
    },
    facts: {
      de: ["Westserbien", "Drina-Schlucht", "Aussichtspunkt Banjska Stena", "Bärenpopulation", "Dichte Wälder"],
      hu: ["Nyugat-Szerbia", "Drina-szurdok", "Banjska Stena kilátó", "Medvepopuláció", "Sűrű erdők"],
      ro: ["Vestul Serbiei", "Defileul Drinei", "Punctul de belvedere Banjska Stena", "Populație de urși", "Păduri dese"],
      en: ["Western Serbia", "Drina Gorge", "Banjska Stena viewpoint", "Bear population", "Dense forests"]
    },
    factsAdvanced: {
        de: [],
        hu: ["A park területe 19 000 hektár", "Itt él a Pančić-lucfenyő egyetlen természetes állománya", "Gazdag élővilág, beleértve a barnamedvéket és sasokat", "A Drina-szurdok a park egyik legszebb természeti alkotása", "Számos túraútvonal a természet szerelmeseinek"],
        ro: [],
        en: []
    }
  },
  {
    id: "nature-djerdap-national-park",
    type: "landmark",
    parent: "country-serbia",
    coords: [22.1500, 44.5833],
    name: { de: "Nationalpark Đerdap", hu: "Vaskapu Nemzeti Park", ro: "Parcul Național Đerdap", en: "Đerdap National Park" },
    description: {
      de: "Der Nationalpark Đerdap umfasst die beeindruckende Eiserne Tor-Schlucht, wo die Donau durch die Karpaten bricht.",
      hu: "A Vaskapu Nemzeti Park magában foglalja a lenyűgöző Vaskapu-szorost, ahol a Duna áttöri a Kárpátokat.",
      ro: "Parcul Național Đerdap include impresionantul defileu Porțile de Fier, unde Dunărea străpunge Carpații.",
      en: "Đerdap National Park encompasses the impressive Iron Gates gorge, where the Danube breaks through the Carpathian Mountains."
    },
    descriptionAdvanced: {
        de: "",
        hu: "A Vaskapu-szoros a Duna egyik leglátványosabb szakasza, ahol a folyó áttöri a Kárpátokat és a Balkán-hegységet. A Nemzeti Park területén található Lepenski Vir régészeti helyszín betekintést nyújt a Duna-völgy korai civilizációiba. A természet és a történelem itt szoros egységet alkot. Földrajz K7 — áttöréses völgyek.",
        ro: "",
        en: ""
    },
    facts: {
      de: ["Eisernes Tor", "Längste Schlucht Europas", "An der Donau", "Reiche Flora und Fauna", "Lepenski Vir in der Nähe"],
      hu: ["Vaskapu", "Európa leghosszabb szurdoka", "A Duna mentén", "Gazdag növény- és állatvilág", "Lepenski Vir a közelben"],
      ro: ["Porțile de Fier", "Cel mai lung defileu din Europa", "Pe Dunăre", "Floră și faună bogate", "Lepenski Vir în apropiere"],
      en: ["Iron Gates", "Europe's longest gorge", "On the Danube", "Rich flora and fauna", "Lepenski Vir nearby"]
    },
    factsAdvanced: {
        de: [],
        hu: ["Európa leghosszabb és legmélyebb szurdoka", "A parkban található Lepenski Vir ősi régészeti leletei", "Gazdag növény- és állatvilág, köztük számos ritka faj", "A Duna-völgy történelmileg fontos kereskedelmi útvonala", "Látványos sziklák és vízi utak"],
        ro: [],
        en: []
    }
  },
  {
    id: "mountain-kopaonik",
    type: "mountain",
    parent: "country-serbia",
    coords: [20.8000, 43.2833],
    name: { de: "Kopaonik", hu: "Kopaonik", ro: "Kopaonik", en: "Kopaonik" },
    description: {
      de: "Kopaonik ist das größte Gebirge in Serbien and das beliebteste Skigebiet des Landes.",
      hu: "A Kopaonik Szerbia legnagyobb hegysége és az ország legnépszerűbb síterepe.",
      ro: "Kopaonik este cel mai mare lanț muntos din Serbia și cea mai populară stațiune de schi din țară.",
      en: "Kopaonik is the largest mountain range in Serbia and the most popular ski resort in the country."
    },
    descriptionAdvanced: {
        de: "",
        hu: "A Kopaonik hegység, más néven a 'Napsütötte hegy', Szerbia legfontosabb téli sportközpontja. A hegy télen sípályáival, nyáron pedig túraútvonalaival és gyógyklímájával vonzza a látogatókat. A hegység Nemzeti Parkként is védett terület, ahol gazdag biológiai sokféleség figyelhető meg. Sport K7 — síelés és túrázás.",
        ro: "",
        en: ""
    },
    facts: {
      de: ["Größtes Skigebiet", "Nationalpark", "Gipfel Pančićev Vrh", "Sommer- und Wintertourismus", "Biodiversität"],
      hu: ["Legnagyobb síterep", "Nemzeti Park", "Pančićev Vrh csúcs", "Nyári és téli turizmus", "Biológiai sokféleség"],
      ro: ["Cea mai mare stațiune de schi", "Parc Național", "Vârful Pančićev Vrh", "Turism de vară și de iarnă", "Biodiversitate"],
      en: ["Largest ski resort", "National Park", "Pančićev Vrh peak", "Summer and winter tourism", "Biodiversity"]
    },
    factsAdvanced: {
        de: [],
        hu: ["Legmagasabb pontja a Pančićev Vrh (2017 m)", "Szerbia legnépszerűbb síközpontja", "Nyáron közkedvelt túrahelyszín", "Számos ritka növény- és állatfaj élőhelye", "Évente több mint 200 napsütéses nap"],
        ro: [],
        en: []
    }
  },
  {
    id: "mountain-fruska-gora",
    type: "mountain",
    parent: "region-vojvodina",
    coords: [19.8500, 45.1500],
    name: { de: "Fruška Gora", hu: "Tarcal-hegység (Fruška Gora)", ro: "Fruška Gora", en: "Fruška Gora" },
    description: {
      de: "Fruška Gora ist ein Mittelgebirge in der Vojvodina, bekannt für seine zahlreichen orthodoxen Klöster und Weinberge.",
      hu: "A Tarcal-hegység egy középhegység a Vajdaságban, számos ortodox kolostoráról és szőlőültetvényeiről ismert.",
      ro: "Fruška Gora este un munte în Voivodina, cunoscut pentru numeroasele sale mănăstiri ortodoxe și podgorii.",
      en: "Fruška Gora is a low mountain in Vojvodina, known for its numerous Orthodox monasteries and vineyards."
    },
    descriptionAdvanced: {
        de: "",
        hu: "A Tarcal-hegység (Fruška Gora) a Pannon-síkság közepén emelkedő szigethegység, amely híres középkori kolostorairól, amelyek a 'szerb Athosz' nevet is kiérdemelték. A hegyvidék kiváló adottságokkal rendelkezik a szőlőtermesztéshez, így a régió borászata is híres. A Nemzeti Park területén számos túraútvonal és természetvédelmi látnivaló várja a látogatókat. Földrajz K6 — szigethegységek.",
        ro: "",
        en: ""
    },
    facts: {
      de: ["Nationalpark", "Orthodoxe Klöster", "Weinbau", "Nahe Novi Sad", "Hügel in der Pannonischen Tiefebene"],
      hu: ["Nemzeti Park", "Ortodox kolostorok", "Borászat", "Újvidék közelében", "Dombvidék a Pannon-síkságon"],
      ro: ["Parc Național", "Mănăstiri ortodoxe", "Viticultură", "Lângă Novi Sad", "Deal în Câmpia Panonică"],
      en: ["National Park", "Orthodox monasteries", "Viticulture", "Near Novi Sad", "Hill in the Pannonian Plain"]
    },
    factsAdvanced: {
        de: [],
        hu: ["Nemzeti Parkként 1960 óta védett", "Híres az 'ortodox kolostorok' soráról", "Kiváló borvidék, különösen a desszertborairól ismert", "Újvidék közvetlen közelében fekszik", "Számos ritka növényfaj otthona"],
        ro: [],
        en: []
    }
  },
  {
    id: "nature-uvac",
    type: "landmark",
    parent: "country-serbia",
    coords: [19.9250, 43.3611],
    name: { de: "Uvac-Schlucht", hu: "Uvac-kanyon", ro: "Defileul Uvac", en: "Uvac Canyon" },
    description: {
      de: "Die Uvac-Schlucht ist berühmt für ihre spektakulären Mäander und als Lebensraum des seltenen Gänsegeiers.",
      hu: "Az Uvac-kanyon látványos kanyarulatairól és a ritka fakó keselyű élőhelyeként híres.",
      ro: "Defileul Uvac este faimos pentru meandrele sale spectaculoase și ca habitat al rarisimului vultur sur.",
      en: "The Uvac Canyon is famous for its spectacular meanders and as a habitat for the rare griffon vulture."
    },
    descriptionAdvanced: {
        de: "",
        hu: "Az Uvac-kanyon a természet erejének egyik leglátványosabb példája, ahol a folyó mély kanyarulatokat vájt a mészkőhegyekbe. A kanyon nemcsak látványa miatt híres, hanem a ritka fakó keselyűk (griffon vulture) egyik legfontosabb európai költőhelyeként is ismert. A terület az ökoturizmus egyik legkedveltebb szerbiai célpontja. Földrajz K7 — folyó kanyarulatok.",
        ro: "",
        en: ""
    },
    facts: {
      de: ["Flussmäander", "Gänsegeier", "Südwest-Serbien", "Aussichtspunkt Molitva", "Naturschutzgebiet"],
      hu: ["Folyókanyarulatok", "Fakó keselyű", "Délnyugat-Szerbia", "Molitva kilátó", "Természetvédelmi terület"],
      ro: ["Meandrele râului", "Vulturul sur", "Sud-vestul Serbiei", "Punctul de belvedere Molitva", "Rezervație naturală"],
      en: ["River meanders", "Griffon vulture", "Southwestern Serbia", "Molitva viewpoint", "Nature reserve"]
    },
    factsAdvanced: {
        de: [],
        hu: ["Az Uvac folyó kanyarulatai látványos meandereket alkotnak", "A ritka fakó keselyű (gyffon vulture) élőhelye", "A Molitva kilátóból a legszebb a panoráma", "Természetvédelmi terület a ritka fajok megőrzésére", "Kézzel fogható természeti csoda"],
        ro: [],
        en: []
    }
  },
  {
    id: "nature-zlatibor",
    type: "mountain",
    parent: "country-serbia",
    coords: [19.7000, 43.7333],
    name: { de: "Zlatibor", hu: "Zlatibor", ro: "Zlatibor", en: "Zlatibor" },
    description: {
      de: "Zlatibor ist eine beliebte Bergregion im Westen Serbiens, bekannt für gesunde Luft, Tourismus und traditionelle Architektur.",
      hu: "Zlatibor egy népszerű hegyvidéki régió Nyugat-Szerbiában, egészséges levegőjéről, turizmusáról és hagyományos építészetéről ismert.",
      ro: "Zlatibor este o regiune montană populară în vestul Serbiei, cunoscută pentru aerul sănătos, turism și arhitectura tradițională.",
      en: "Zlatibor is a popular mountainous region in western Serbia, known for healthy air, tourism, and traditional architecture."
    },
    descriptionAdvanced: {
        de: "",
        hu: "Zlatibor az egészségturizmus és a természetközeli kikapcsolódás központja Nyugat-Szerbiában. A hegyvidéki régió különleges klímájáról ismert, ami a fenyőerdőknek és a friss levegőnek köszönhető. A hagyományos fatemplomok és az autentikus építészet megőrzése mellett modern turistaközponttá alakult. Földrajz K7 — hegyvidéki klíma.",
        ro: "",
        en: ""
    },
    facts: {
      de: ["Bergresort", "Gesundheitstourismus", "Goldene Kiefer", "Westserbien", "Goldola-Seilbahn"],
      hu: ["Hegyi üdülőhely", "Egészségturizmus", "Aranyfenyő", "Nyugat-Szerbia", "Goldola felvonó"],
      ro: ["Stațiune montană", "Turism de sănătate", "Pinul auriu", "Vestul Serbiei", "Telecabina Goldola"],
      en: ["Mountain resort", "Health tourism", "Golden pine", "Western Serbia", "Goldola cable car"]
    },
    factsAdvanced: {
        de: [],
        hu: ["A hegyvidék átlagos magassága 1000 méter", "Az egészséges klímája miatt régóta kedvelt gyógyhely", "Híres a hagyományos 'aranyfenyő' fajtájáról", "A Goldola felvonó a legnépszerűbb turisztikai látványosság", "Autentikus faluépítészet"],
        ro: [],
        en: []
    }
  },
  {
    id: "nature-djavolja-varos",
    type: "landmark",
    parent: "country-serbia",
    coords: [21.4000, 42.9833],
    name: { de: "Đavolja Varoš", hu: "Ördögváros (Đavolja Varoš)", ro: "Đavolja Varoš", en: "Devil's Town (Đavolja Varoš)" },
    description: {
      de: "Đavolja Varoš (Teufelsstadt) ist eine einzigartige Felsformation im Süden Serbiens, die aus Hunderten von Erdpyramiden besteht.",
      hu: "Az Ördögváros (Đavolja Varoš) egy egyedülálló sziklaalakzat Dél-Szerbiában, amely több száz földpiramisból áll.",
      ro: "Đavolja Varoš (Orașul Diavolului) este o formațiune stâncoasă unică în sudul Serbiei, formată din sute de piramide de pământ.",
      en: "Devil's Town (Đavolja Varoš) is a unique rock formation in southern Serbia, consisting of hundreds of earth pyramids."
    },
    descriptionAdvanced: {
        de: "",
        hu: "Az Ördögváros egy elképesztő természeti képződmény, amely több száz, erózió által formált földpiramisból áll. A látvány a kőzetrétegek eltérő kopása miatt alakult ki, és ma a legkülönlegesebb szerbiai természeti látnivalók közé tartozik. A területen található források vize rendkívül savas, ami tovább fokozza a hely misztikus hangulatát. Földrajz K6 — eróziós formák.",
        ro: "",
        en: ""
    },
    facts: {
      de: ["Naturphänomen", "Erdpyramiden", "Südserbien", "Säuresquellen", "Mystische Legenden"],
      hu: ["Természeti jelenség", "Földpiramisok", "Dél-Szerbia", "Savas források", "Misztikus legendák"],
      ro: ["Fenomen natural", "Piramide de pământ", "Sudul Serbiei", "Izvoare acide", "Legende mistice"],
      en: ["Natural phenomenon", "Earth pyramids", "Southern Serbia", "Acid springs", "Mystical legends"]
    },
    factsAdvanced: {
        de: [],
        hu: ["Az erózió által kialakított több száz földpiramis", "Az Ördögváros környékén két forrás is extrém savas vizű", "A hely misztikus legendák forrása", "Szerbia egyik leglátványosabb természeti képződménye", "Védett természeti terület"],
        ro: [],
        en: []
    }
  },
  {
    id: "lake-palic",
    type: "lake",
    parent: "region-vojvodina",
    coords: [19.7611, 46.0667],
    name: { de: "Palić-See", hu: "Palicsi-tó", ro: "Lacul Palić", en: "Lake Palić" },
    description: {
      de: "Der Palić-See bei Subotica ist ein beliebtes Urlaubsziel mit Jugendstil-Gebäuden und einem großen Zoo.",
      hu: "A Szabadka melletti Palicsi-tó népszerű nyaralóhely szecessziós épületekkel és egy nagy állatkerttel.",
      ro: "Lacul Palić de lângă Subotica este o destinație populară de vacanță, cu clădiri Art Nouveau și o grădină zoologică mare.",
      en: "Lake Palić near Subotica is a popular holiday destination with Art Nouveau buildings and a large zoo."
    },
    descriptionAdvanced: {
        de: "",
        hu: "A Palicsi-tó Szabadka közvetlen közelében fekszik, és a 19. század óta a régió egyik kedvelt üdülőközpontja. A tó környéke a szecessziós építészet egyik központja, ahol díszes paloták és parkok várják a látogatókat. A tó vize gyógyhatású, ami tovább növeli a terület népszerűségét. Művészet K7 — tóparti üdülőhelyek.",
        ro: "",
        en: ""
    },
    facts: {
      de: ["Flachwassersee", "Nahe Subotica", "Tourismus-Zentrum", "Jugendstil", "Filmfestival"],
      hu: ["Sekélyvizű tó", "Szabadka közelében", "Turisztikai központ", "Szecesszió", "Filmfesztivál"],
      ro: ["Lac cu apă puțin adâncă", "Lângă Subotica", "Centru turistic", "Art Nouveau", "Festival de film"],
      en: ["Shallow lake", "Near Subotica", "Tourism center", "Art Nouveau", "Film festival"]
    },
    factsAdvanced: {
        de: [],
        hu: ["A tó vize sekély és gyógyhatású", "Szecessziós épületekkel övezett tópart", "Népszerű állatkert a közelben", "Híres nyári filmfesztivál helyszíne", "Az egyik legfontosabb vajdasági üdülőhely"],
        ro: [],
        en: []
    }
  }
];

export const serbiaRivers: POI[] = [
  {
    id: "river-danube-serbia",
    type: "river",
    parent: "country-serbia",
    coords: [20.4500, 44.8236], // Belgrade confluence point as generic loc
    name: { de: "Donau", hu: "Duna", ro: "Dunărea", en: "Danube" },
    description: {
      de: "Die Donau fließt durch den Norden und Osten Serbiens und bildet das imposante Eiserne Tor.",
      hu: "A Duna Szerbia északi és keleti részén folyik keresztül, kialakítva az impozáns Vaskaput.",
      ro: "Dunărea curge prin nordul și estul Serbiei și formează impunătoarele Porți de Fier.",
      en: "The Danube flows through northern and eastern Serbia, forming the imposing Iron Gates."
    },
    descriptionAdvanced: {
        de: "",
        hu: "A Duna Szerbia egyik legmeghatározóbb természeti eleme, amely északon és keleten szeli át az országot. A folyó mentén található városok és erődítmények – mint például Belgrád vagy Galambóc vára – történelmi jelentőséggel bírnak. A Vaskapu-szorosnál a folyó áttöri a Kárpátokat, ami Európa egyik leglátványosabb vízi szakasza. Földrajz K8 — Európa nagy folyói.",
        ro: "",
        en: ""
    },
    facts: {
      de: ["Wichtigster Fluss", "Fließt durch Belgrad", "Eisernes Tor", "Grenzfluss", "Schifffahrtsweg"],
      hu: ["Legfontosabb folyó", "Átfolyik Belgrádon", "Vaskapu", "Határfolyó", "Hajózási útvonal"],
      ro: ["Cel mai important râu", "Curge prin Belgrad", "Porțile de Fier", "Râu de frontieră", "Cale navigabilă"],
      en: ["Most important river", "Flows through Belgrade", "Iron Gates", "Border river", "Navigable waterway"]
    },
    factsAdvanced: {
        de: [],
        hu: ["A Duna szerbiai szakasza több mint 580 km hosszú", "Fontos nemzetközi kereskedelmi vízi út", "Belgrád és Újvidék is a folyó partján fekszik", "A Vaskapu-szorosnál található az egyik legfontosabb vízierőmű", "Számos természetvédelmi terület található a mentén"],
        ro: [],
        en: []
    }
  },
  {
    id: "river-sava",
    type: "river",
    parent: "country-serbia",
    coords: [19.6500, 44.8833],
    name: { de: "Save", hu: "Száva", ro: "Sava", en: "Sava" },
    description: {
      de: "Die Save ist ein großer Flussfluss, der in Belgrad in die Donau mündet.",
      hu: "A Száva egy nagy folyó, amely Belgrádban ömlik a Dunába.",
      ro: "Sava este un râu mare care se varsă în Dunăre la Belgrad.",
      en: "The Sava is a major river that flows into the Danube in Belgrade."
    },
    descriptionAdvanced: {
        de: "",
        hu: "A Száva Szerbia északi részének meghatározó folyója, amely Belgrádban ömlik a Dunába. A folyó mentén fontos városok épültek, amelyek történelmi és gazdasági központokká váltak. A Száva vízgyűjtő területe kiterjed a régió mezőgazdasági területeire, így alapvetően fontos az öntözés és a közlekedés számára is. Földrajz K7 — vízgyűjtő területek.",
        ro: "",
        en: ""
    },
    facts: {
      de: ["Mündet in die Donau", "Fließt durch Belgrad", "Wichtiger Wasserweg", "Trennt Zentralserbien von der Vojvodina", "Zahlreiche Brücken"],
      hu: ["A Dunába ömlik", "Átfolyik Belgrádon", "Fontos vízi út", "Elválasztja Közép-Szerbiát a Vajdaságtól", "Számos híd"],
      ro: ["Se varsă în Dunăre", "Curge prin Belgrad", "Cale navigabilă importantă", "Separă Serbia Centrală de Voivodina", "Multe poduri"],
      en: ["Flows into the Danube", "Flows through Belgrade", "Important waterway", "Separates Central Serbia from Vojvodina", "Numerous bridges"]
    },
    factsAdvanced: {
        de: [],
        hu: ["A Száva a Duna legnagyobb mellékfolyója", "Belgrádban egyesül a Dunával", "Számos híddal ívelték át a folyót az országban", "Fontos vízi közlekedési útvonal", "Jelentős szerepet játszik a Vajdaság vízellátásában"],
        ro: [],
        en: []
    }
  }
];

export const serbiaDistrictPoi: POI[] = [
  // RS-001 Severno-Backi
      // RS-002 Zapadno-Backi
  {
    id: "RS-002-sombor",
    type: "city",
    parent: "RS-002",
    coords: [19.1125, 45.7739],
    name: { de: "Sombor", hu: "Zombor", ro: "Sombor", en: "Sombor" },
    description: {
      de: "Eine grüne Stadt in der West-Batschka, berühmt für ihre Parks, Kutschen und das imposante Komitatsgebäude.",
      hu: "Zöldellő város Nyugat-Bácskában, híres parkjairól, fogatairól és az impozáns vármegyeházáról.",
      ro: "Un oraș verde în Bačka de Vest, faimos pentru parcurile sale, trăsurile și clădirea impresionantă a comitatului.",
      en: "A green city in West Bačka, famous for its parks, carriages, and the impressive county building."
    },
    descriptionAdvanced: {
        de: "",
        hu: "Zombor városa az északi síkságon fekszik, és arról híres, hogy Európa egyik legzöldebb települése az elültetett ezernyi fának köszönhetően. A városközpontot a régi polgári házak és a nagy múltú vármegyeház teszi különlegessé, ahol a híres Zentai csata óriásfestményét is őrzik. A város nyugodt légköre és parkjai kellemes kikapcsolódást nyújtanak. Földrajz K6 — városi parkok.",
        ro: "",
        en: ""
    },
    facts: {
      de: ["Stadt der Alleen", "Gemälde 'Schlacht von Zenta'", "Reiche Kulturgeschichte"],
      hu: ["A fasorok városa", "Zentai csata óriásfestmény", "Gazdag kultúrtörténet"],
      ro: ["Orașul aleilor", "Pictura 'Bătălia de la Zenta'", "Istorie culturală bogată"],
      en: ["City of avenues", "'Battle of Senta' painting", "Rich cultural history"]
    },
    factsAdvanced: {
        de: [],
        hu: ["Az egyik legzöldebb szerbiai város", "A vármegyeházban található a híres Zentai csata festmény", "Gazdag művészeti hagyományok", "Hangulatos belváros", "Fontos kulturális központ"],
        ro: [],
        en: []
    }
  },
  {
    id: "RS-002-apatin",
    type: "city",
    parent: "RS-002",
    coords: [18.9858, 45.6714],
    name: { de: "Apatin", hu: "Apatin", ro: "Apatin", en: "Apatin" },
    description: {
      de: "Eine Stadt am linken Donauufer, bekannt für ihre lange Brautradition und Fischereigeschichte.",
      hu: "Város a Duna bal partján, amely hosszú sörfőzési hagyományairól és halászati múltjáról ismert.",
      ro: "Un oraș pe malul stâng al Dunării, cunoscut pentru lunga sa tradiție în fabricarea berii și istoria pescuitului.",
      en: "A city on the left bank of the Danube, known for its long brewing tradition and fishing history."
    },
    descriptionAdvanced: {
        de: "",
        hu: "Apatin a Duna mentén fekvő város, amelynek iparát meghatározza a sörfőzés és a folyami hajózás. A város halászati hagyományai messze földön ismertek, amiről az évenkénti fesztiválok is tanúskodnak. A Duna partja ideális helyszín a pihenésre és a vízi sportok kedvelőinek. Gazdaság K8 — hagyományos iparágak.",
        ro: "",
        en: ""
    },
    facts: {
      de: ["Jelen-Brauerei", "Donauhafen", "Fischersymposium"],
      hu: ["Jelen sörgyár", "Dunai kikötő", "Halászati hagyományok"],
      ro: ["Fabrica de bere Jelen", "Port la Dunăre", "Tradiții pescărești"],
      en: ["Jelen Brewery", "Danube port", "Fishing traditions"]
    },
    factsAdvanced: {
        de: [],
        hu: ["Híres a Jelen sörgyárról", "Fontos dunai kikötőváros", "Gazdag halászati múlt", "Hangulatos Duna-part", "Fontos regionális központ"],
        ro: [],
        en: []
    }
  },
  // RS-003 Severno-Banatski
  {
    id: "RS-003-kikinda",
    type: "city",
    parent: "RS-003",
    coords: [20.4650, 45.8244],
    name: { de: "Kikinda", hu: "Nagykikinda", ro: "Chichinda", en: "Kikinda" },
    description: {
      de: "Eine Stadt im Nordbanat, berühmt für die archäologischen Mammutfunde und das jährliche Kürbisfestival.",
      hu: "Észak-bánsági város, amely híres a régészeti mammutleleteiről és az évenkénti tökfesztiválról.",
      ro: "Un oraș în Banatul de Nord, faimos pentru descoperirile arheologice de mamuți și festivalul anual al dovleacului.",
      en: "A city in North Banat, famous for archaeological mammoth finds and the annual pumpkin festival."
    },
    descriptionAdvanced: {
        de: "",
        hu: "Nagykikinda az északi Bánát központja, amely a mamutleletei és a híres tökfesztiválja révén vált országosan ismertté. A város gazdag történelmi épületekben, amik a korabeli polgári életet tükrözik. A természetbarátokat a környező erdők és mezők várják, amelyek a vándormadarak, például a fülesbaglyok telelőhelyeiként is szolgálnak. Földrajz K7 — különleges természeti értékek.",
        ro: "",
        en: ""
    },
    facts: {
      de: ["Kika das Mammut", "Kürbistage", "Waldohreulen-Winterquartier"],
      hu: ["Kika a mammut", "Témanapok (tökfesztivál)", "Réti fülesbaglyok telelőhelye"],
      ro: ["Mamutul Kika", "Zilele dovleacului", "Iernarea bufnițelor cu urechi lungi"],
      en: ["Kika the mammoth", "Pumpkin Days", "Long-eared owl wintering site"]
    },
    factsAdvanced: {
        de: [],
        hu: ["Az itt talált mamut (Kika) egyedülálló régészeti lelet", "A város híres a tökfesztiváljáról (Témanapok)", "A fülesbaglyok legnagyobb telelőhelye a világon", "Gazdag ipari és mezőgazdasági múlt", "Hangulatos városi központ"],
        ro: [],
        en: []
    }
  },
  {
    id: "RS-003-senta",
    type: "city",
    parent: "RS-003",
    coords: [20.0817, 45.9289],
    name: { de: "Senta", hu: "Zenta", ro: "Senta", en: "Senta" },
    description: {
      de: "Eine historische Stadt an der Theiß, berühmt für die Schlacht bei Zenta im Jahr 1697.",
      hu: "Történelmi város a Tisza partján, amely az 1697-es zentai csatáról híres.",
      ro: "Un oraș istoric pe Tisa, faimos pentru bătălia de la Senta din 1697.",
      en: "A historical city on the Tisa river, famous for the Battle of Senta in 1697."
    },
    descriptionAdvanced: {
        de: "",
        hu: "Zenta városa a Tisza-part egyik legrégebbi és legfontosabb települése, amely történelmét az 1697-es nagy csata határozta meg. A városközpontot a városháza és a folyóparti sétányok teszik különlegessé, ami a város nyugodt hangulatát biztosítja. A Tisza itt fontos szerepet játszik a város életében, mind kereskedelmileg, mind pedig kulturálisan. Történelem K8 — hadtörténelem.",
        ro: "",
        en: ""
    },
    facts: {
      de: ["Theiß-Ufer", "Schlachtdenkmal", "Prächtiges Rathaus"],
      hu: ["Tisza-part", "Csata emlékműve", "Pompás városháza"],
      ro: ["Malul Tisei", "Monumentul bătăliei", "Primărie splendidă"],
      en: ["Tisa riverbank", "Battle monument", "Splendid city hall"]
    },
    factsAdvanced: {
        de: [],
        hu: ["Híres az 1697-es csatáról", "Tisza-parti város", "Pompás városháza", "Gazdag történelmi emlékek", "Fontos regionális központ"],
        ro: [],
        en: []
    }
  },
  // RS-004 Pcinjski
  {
    id: "RS-004-vranje",
    type: "city",
    parent: "RS-004",
    coords: [21.8958, 42.5544],
    name: { de: "Vranje", hu: "Vranje", ro: "Vranje", en: "Vranje" },
    description: {
      de: "Ein kulturelles Zentrum in Südserbien mit orientalischer Architektur und reicher Musiktradition.",
      hu: "Dél-szerbiai kulturális központ, amely keleti építészetéről és gazdag zenei hagyományairól ismert.",
      ro: "Un centru cultural în sudul Serbiei, cu arhitectură orientală și o bogată tradiție muzicală.",
      en: "A cultural center in southern Serbia with oriental architecture and rich music tradition."
    },
    descriptionAdvanced: {
        de: "",
        hu: "Vranje a déli határvidék kulturális központja, ahol az orientális hatások a helyi népi kultúrában is megmutatkoznak. A híres 'vranjei zene' és az író, Bora Stanković művei egyedi arculatot adnak a városnak. A város történelmi épületei, mint a 'Fehér híd', a régi kereskedelmi korok emlékét idézik fel. Kultúra K8 — irodalom és népzene.",
        ro: "",
        en: ""
    },
    facts: {
      de: ["Beli Most (Weiße Brücke)", "Pašin Konak", "Geburtsort von Bora Stanković"],
      hu: ["Beli Most (Fehér híd)", "Pašin Konak", "Bora Stanković szülőhelye"],
      ro: ["Beli Most (Podul Alb)", "Pašin Konak", "Locul de naștere al lui Bora Stanković"],
      en: ["Beli Most (White Bridge)", "Pasha's Residence", "Birthplace of Bora Stanković"]
    },
    factsAdvanced: {
        de: [],
        hu: ["Bora Stanković híres író szülőhelye", "Gazdag orientális építészet", "Híres népzenei hagyományok", "A 'Fehér híd' a város egyik szimbóluma", "Fontos kulturális központ Dél-Szerbiában"],
        ro: [],
        en: []
    }
  },
  {
    id: "RS-004-prohor-pcinjski",
    type: "historical",
    parent: "RS-004",
    coords: [21.8950, 42.3294],
    name: { de: "Kloster Prohor Pčinjski", hu: "Prohor Pčinjski kolostor", ro: "Mănăstirea Prohor Pčinjski", en: "Prohor Pčinjski Monastery" },
    description: {
      de: "Ein serbisch-orthodoxes Kloster aus dem 11. Jahrhundert in der Nähe der Grenze zu Nordmazedonien.",
      hu: "11. századi szerb ortodox kolostor az észak-macedón határ közelében.",
      ro: "O mănăstire ortodoxă sârbă din secolul al XI-lea, situată lângă granița cu Macedonia de Nord.",
      en: "An 11th-century Serbian Orthodox monastery located near the border with North Macedonia."
    },
    descriptionAdvanced: {
        de: "",
        hu: "A Prohor Pčinjski kolostor a szerb ortodox egyház egyik legrégebbi és legfontosabb szellemi központja. Az 11. században alapított kolostor az északi macedón határ közelében, érintetlen természeti környezetben található. Történelmileg is fontos szerepet töltött be a szerb kultúra megőrzésében és a vallási életben. Művészet K7 — szakrális építészet.",
        ro: "",
        en: ""
    },
    facts: {
      de: ["Gegründet von Kaiser Romanos IV.", "Geistiges Zentrum", "Inmitten unberührter Natur"],
      hu: ["IV. Rómanosz császár alapította", "Szellemi központ", "Érintetlen természetben"],
      ro: ["Fondată de împăratul Romanos al IV-lea", "Centru spiritual", "În mijlocul naturii virgine"],
      en: ["Founded by Emperor Romanos IV", "Spiritual center", "In untouched nature"]
    },
    factsAdvanced: {
        de: [],
        hu: ["A 11. században alapították", "Szent Prohor tiszteletére", "Fontos szellemi központ a déli régióban", "Az észak-macedón határ közelében", "Különleges természeti környezet"],
        ro: [],
        en: []
    }
  },
  // RS-005 Borski
  {
    id: "RS-005-bor",
    type: "city",
    parent: "RS-005",
    coords: [22.1000, 44.0667],
    name: { de: "Bor", hu: "Bor", ro: "Bor", en: "Bor" },
    description: {
      de: "Ein wichtiges Bergbau- und Industriezentrum im Osten Serbiens, bekannt für seine Kupferminen.",
      hu: "Fontos bányászati és ipari központ Kelet-Szerbiában, rézbányáiról ismert.",
      ro: "Un important centru minier și industrial în estul Serbiei, cunoscut pentru minele sale de cupru.",
      en: "An important mining and industrial center in eastern Serbia, known for its copper mines."
    },
    descriptionAdvanced: {
        de: "",
        hu: "Bor városa a szerb ipar egyik központja, amely a rézbányászat köré épült a 20. században. A bányászatnak köszönhetően a város gyorsan fejlődött, és ma is az ipari örökség meghatározó példája az országban. A környező hegyek és a Bori-tó kiváló kikapcsolódást nyújtanak az ott élőknek és az idelátogatóknak. Gazdaság K8 — ipari központok.",
        ro: "",
        en: ""
    },
    facts: {
      de: ["Kupfertagebau", "Industrieerbe", "Nahegelegener Bor-See"],
      hu: ["Külszíni rézbánya", "Ipari örökség", "Közeli Bori-tó"],
      ro: ["Exploatare de cupru în carieră", "Moștenire industrială", "Lacul Bor din apropiere"],
      en: ["Copper open-pit mine", "Industrial heritage", "Nearby Lake Bor"]
    },
    factsAdvanced: {
        de: [],
        hu: ["Szerbia egyik legfontosabb rézbányászati központja", "Ipari örökség", "A Bori-tó népszerű turisztikai célpont", "Jelentős ipari fejlődés", "Kelet-Szerbia fontos városa"],
        ro: [],
        en: []
    }
  },
  {
    id: "RS-005-negotin",
    type: "city",
    parent: "RS-005",
    coords: [22.5300, 44.2264],
    name: { de: "Negotin", hu: "Negotin", ro: "Negotin", en: "Negotin" },
    description: {
      de: "Eine Stadt im Dreiländereck Serbien-Bulgarien-Rumänien, berühmt für ihre Weinbautradition.",
      hu: "Város a szerb-bolgár-román hármashatárnál, híres bortermelési hagyományairól.",
      ro: "Un oraș situat la granița dintre Serbia, Bulgaria și România, faimos pentru tradiția viticolă.",
      en: "A city near the triple border of Serbia, Bulgaria, and Romania, famous for its wine-making tradition."
    },
    descriptionAdvanced: {
        de: "",
        hu: "Negotin a Duna mentén fekvő régió egyik központja, amely három ország találkozásánál helyezkedik el. A város híres a bortermelési hagyományairól, amit a régi pincék és a minőségi szőlőültetvények is bizonyítanak. A régió zenei öröksége is kiemelkedő, többek között Stevan Mokranjac zeneszerző szülőhelyeként is ismert. Művészet K8 — borászat és zene.",
        ro: "",
        en: ""
    },
    facts: {
      de: ["Negotiner Weinkeller", "Heimat von Stevan Mokranjac", "Nahe dem Eisernen Tor"],
      hu: ["Negotini borpincék", "Stevan Mokranjac hazája", "A Vaskapu közelében"],
      ro: ["Cramele din Negotin", "Casa lui Stevan Mokranjac", "Lângă Porțile de Fier"],
      en: ["Negotin wine cellars", "Home of Stevan Mokranjac", "Near the Iron Gates"]
    },
    factsAdvanced: {
        de: [],
        hu: ["Gazdag bortermelési hagyományok", "Stevan Mokranjac híres zeneszerző szülőhelye", "Fontos háromhatár-közeli régió", "A Vaskapu szoros közelsége", "Jelentős történelmi borpincék"],
        ro: [],
        en: []
    }
  },
  // RS-006 Zajecarski
  {
    id: "RS-006-zajecar",
    type: "city",
    parent: "RS-006",
    coords: [22.2800, 43.9000],
    name: { de: "Zaječar", hu: "Zaječar", ro: "Zaječar", en: "Zaječar" },
    description: {
      de: "Das administrative Zentrum des Bezirks Zaječar, bekannt für seine kulturellen Veranstaltungen und Geschichte.",
      hu: "A Zaječar körzet közigazgatási központja, amely kulturális eseményeiről és történelméről ismert.",
      ro: "Centrul administrativ al districtului Zaječar, cunoscut pentru evenimentele sale culturale și istorie.",
      en: "The administrative center of the Zaječar district, known for its cultural events and history."
    },
    descriptionAdvanced: {
        de: "",
        hu: "Zaječar Kelet-Szerbia egyik legfontosabb adminisztratív központja, amely a kultúra és a zenei fesztiválok terén is kiemelkedik. A város a régió kapujaként szolgál, ahonnan könnyen megközelíthetőek az ókori romok és a természetvédelmi területek. A 'Gitarijada' rockfesztivál minden évben turisták ezreit vonzza a városba. Kultúra K8 — zenei fesztiválok.",
        ro: "",
        en: ""
    },
    facts: {
      de: ["Gitarijada Rockfestival", "Nationalmuseum", "Tor nach Ostserbien"],
      hu: ["Gitarijada rockfesztivál", "Nemzeti Múzeum", "Kelet-Szerbia kapuja"],
      ro: ["Festivalul de rock Gitarijada", "Muzeul Național", "Poarta către estul Serbiei"],
      en: ["Gitarijada rock festival", "National Museum", "Gateway to eastern Serbia"]
    },
    factsAdvanced: {
        de: [],
        hu: ["Híres a Gitarijada rockfesztiválról", "Fontos regionális központ", "Gazdag múzeumi anyag", "Kelet-Szerbia egyik fő csomópontja", "Különleges kulturális élet"],
        ro: [],
        en: []
    }
  },
    // RS-007 Pirotski
  {
    id: "RS-007-pirot",
    type: "city",
    parent: "RS-007",
    coords: [22.5861, 43.1556],
    name: { de: "Pirot", hu: "Pirot", ro: "Pirot", en: "Pirot" },
    description: {
      de: "Eine Stadt im Südosten Serbiens, berühmt für ihre handgewebten Teppiche (Kilims) und Käsespezialitäten.",
      hu: "Délkelet-szerbiai város, amely kézzel szőtt szőnyegeiről (kilim) és sajtkülönlegességeiről híres.",
      ro: "Un oraș în sud-estul Serbiei, faimos pentru covoarele sale țesute manual (kilim) și specialitățile de brânză.",
      en: "A city in southeastern Serbia, famous for its hand-woven carpets (kilims) and cheese specialties."
    },
    descriptionAdvanced: {
        de: "",
        hu: "Pirot az ország délkeleti részén fekvő város, amely a kézzel szőtt 'piroti kilim' szőnyegeiről világszerte ismert. A helyi kézműves hagyományok mellett a város a sajtkülönlegességeiről is nevezetes, ami a környék gasztronómiájának fontos része. A közeli Stara Planina-hegység ideális helyszín a természetjárók számára. Kultúra K8 — kézműves hagyományok.",
        ro: "",
        en: ""
    },
    facts: {
      de: ["Piroter Kilim", "Festung Momčilov Grad", "Käse von Pirot"],
      hu: ["Piroti kilim (szőnyeg)", "Momčilov Grad erőd", "Piroti sajt"],
      ro: ["Kilim de Pirot", "Cetatea Momčilov Grad", "Brânză de Pirot"],
      en: ["Pirot kilim", "Momčilov Grad Fortress", "Pirot cheese"]
    },
    factsAdvanced: {
        de: [],
        hu: ["Híres a Piroti kilim (szőnyeg) készítéséről", "Momčilov Grad erőd", "Helyi sajtkülönlegességek", "Dél-szerbiai központ", "Gazdag kézműves hagyományok"],
        ro: [],
        en: []
    }
  },
  {
    id: "RS-007-stara-planina",
    type: "mountain",
    parent: "RS-007",
    coords: [22.6000, 43.3700],
    name: { de: "Stara Planina", hu: "Balkán-hegység (Stara Planina)", ro: "Munții Stara Planina", en: "Stara Planina" },
    description: {
      de: "Ein majestätisches Gebirge an der Grenze zu Bulgarien, bekannt für unberührte Natur und Wasserfälle.",
      hu: "Fenséges hegység a bolgár határon, érintetlen természetéről és vízeséseiről ismert.",
      ro: "Un munte majestuos la granița cu Bulgaria, cunoscut pentru natura sa virgină și cascadele sale.",
      en: "A majestic mountain range on the border with Bulgaria, known for untouched nature and waterfalls."
    },
    descriptionAdvanced: {
        de: "",
        hu: "A Stara Planina (Balkán-hegység) az ország egyik leglenyűgözőbb hegysége, amely a bolgár határon húzódik. A hegycsúcsok, mint a Midžor, csodálatos panorámát nyújtanak, a rejtett vízesések és az érintetlen erdők pedig a túrázók paradicsoma. A hegység élővilága rendkívül változatos, ami miatt a természetbarátok kedvelt célpontja. Földrajz K8 — hegységek.",
        ro: "",
        en: ""
    },
    facts: {
      de: ["Höchster Gipfel: Midžor", "Wintersportzentrum", "Zahlreiche Wasserfälle"],
      hu: ["Legmagasabb csúcs: Midžor", "Téli sportközpont", "Számos vízesés"],
      ro: ["Cel mai înalt vârf: Midžor", "Centru de sporturi de iarnă", "Numeroase cascade"],
      en: ["Highest peak: Midžor", "Winter sports center", "Numerous waterfalls"]
    },
    factsAdvanced: {
        de: [],
        hu: ["Legmagasabb csúcsa a Midžor (2169 m)", "Téli sportközpont", "Rengeteg vízesés", "Érintetlen természet", "Gazdag élővilág"],
        ro: [],
        en: []
    }
  },
  // RS-008 Jablanicki
  {
    id: "RS-008-leskovac",
    type: "city",
    parent: "RS-008",
    coords: [21.9461, 42.9981],
    name: { de: "Leskovac", hu: "Leskovac", ro: "Leskovac", en: "Leskovac" },
    description: {
      de: "Ein Zentrum in Südserbien, weltbekannt für seine Grillspezialitäten und das jährliche Grillfest 'Roštiljijada'.",
      hu: "Dél-szerbiai központ, világszerte ismert grillételeiről és az évenkénti 'Roštiljijada' grillfesztiválról.",
      ro: "Un centru din sudul Serbiei, cunoscut în întreaga lume pentru specialitățile sale la grătar și festivalul anual 'Roštiljijada'.",
      en: "A center in southern Serbia, world-famous for its grill specialties and the annual 'Roštiljijada' grill festival."
    },
    descriptionAdvanced: {
        de: "",
        hu: "Leskovac a déli régió 'grillfővárosa', ahol a gasztronómia a város szerves része. A minden évben megrendezett 'Roštiljijada' fesztivál a legnagyobb ilyen jellegű esemény a régióban, ami turisták tömegeit vonzza. A város története a textiliparra is épült, ami a gazdasági fejlődés meghatározó eleme volt. Kultúra K8 — gasztronómia.",
        ro: "",
        en: ""
    },
    facts: {
      de: ["Grill-Hauptstadt", "Roštiljijada Festival", "Historische Textilindustrie"],
      hu: ["A grill fővárosa", "Roštiljijada fesztivál", "Történelmi textilipar"],
      ro: ["Capitala grătarului", "Festivalul Roštiljijada", "Industrie textilă istorică"],
      en: ["Grill capital", "Roštiljijada festival", "Historical textile industry"]
    },
    factsAdvanced: {
        de: [],
        hu: ["Szerbia grillfővárosa", "Roštiljijada fesztivál minden évben", "Gazdag textilipari múlt", "Dél-Szerbia fontos városa", "Helyi gasztronómiai hagyományok"],
        ro: [],
        en: []
    }
  },
  {
    id: "RS-008-caricin-grad",
    type: "historical",
    parent: "RS-008",
    coords: [21.6700, 42.9500],
    name: { de: "Caričin Grad", hu: "Caričin Grad (Justiniana Prima)", ro: "Caričin Grad", en: "Caričin Grad" },
    description: {
      de: "Die Ruinen der byzantinischen Stadt Justiniana Prima, erbaut von Kaiser Justinian I. im 6. Jahrhundert.",
      hu: "Justiniana Prima bizánci város romjai, amelyet I. Justinianus császár építtetett a 6. században.",
      ro: "Ruinele orașului bizantin Justiniana Prima, construit de împăratul Iustinian I în secolul al VI-lea.",
      en: "The ruins of the Byzantine city Justiniana Prima, built by Emperor Justinian I in the 6th century."
    },
    descriptionAdvanced: {
        de: "",
        hu: "Caričin Grad (Justiniana Prima) egy bizánci császári város maradványa, amelyet Justinianus császár építtetett a 6. században a birodalom távoli pontján. A város egy igazi építészeti csoda volt, templomokkal, vízvezetékkel és középületekkel, amelyek a korabeli bizánci kultúra magaslatát mutatják. Ma régészeti parkként látogatható. Történelem K6 — Bizánci Birodalom.",
        ro: "",
        en: ""
    },
    facts: {
      de: ["Bedeutende archäologische Stätte", "Frühchristliche Basiliken", "Geplante Stadt"],
      hu: ["Jelentős régészeti lelőhely", "Korakeresztény bazilikák", "Tervezett város"],
      ro: ["Sit arheologic important", "Bazilici creștine timpurii", "Oraș planificat"],
      en: ["Important archaeological site", "Early Christian basilicas", "Planned city"]
    },
    factsAdvanced: {
        de: [],
        hu: ["A 6. századi bizánci császár, Justinianus alapította", "Jelentős korai keresztény emlékek", "Tervezett ókori városrész", "Régészeti park", "Bizánci építészeti emlék"],
        ro: [],
        en: []
    }
  },
  // RS-009 Raški
  {
    id: "RS-009-kraljevo",
    type: "city",
    parent: "RS-009",
    coords: [20.6894, 43.7258],
    name: { de: "Kraljevo", hu: "Kraljevo", ro: "Kraljevo", en: "Kraljevo" },
    description: {
      de: "Eine Stadt an der Mündung des Ibar in die Westmorava, historisch eng mit der Krönung serbischer Könige verbunden.",
      hu: "Az Ibar és a Nyugati-Morava összefolyásánál fekvő város, történelmileg a szerb királyok koronázásához kötődik.",
      ro: "Un oraș la confluența râului Ibar cu Morava de Vest, legat istoric de încoronarea regilor sârbi.",
      en: "A city at the confluence of the Ibar and West Morava rivers, historically linked to the coronation of Serbian kings."
    },
    descriptionAdvanced: {
        de: "",
        hu: "Kraljevo, azaz a 'Királyok városa' az Ibar és a Nyugati-Morava folyók összefolyásánál épült. Történelmi jelentőségét a közeli Žiča kolostor adja, ahol a régi szerb uralkodókat koronázták meg. A város gazdag történelmi épületekben és hangulatos parkokban, amelyek a régi királyi idők hangulatát idézik. Történelem K7 — szerb királyok.",
        ro: "",
        en: ""
    },
    facts: {
      de: ["Stadt der Könige", "Zusammenfluss von Ibar und Morava", "Nahe Kloster Žiča"],
      hu: ["Királyok városa", "Az Ibar és Morava találkozása", "A Žiča kolostor közelében"],
      ro: ["Orașul regilor", "Confluența Ibarului cu Morava", "Lângă mănăstirea Žiča"],
      en: ["City of Kings", "Confluence of Ibar and Morava", "Near Žiča Monastery"]
    },
    factsAdvanced: {
        de: [],
        hu: ["A közeli Žiča kolostor a királykoronázások helyszíne volt", "Az Ibar és a Nyugati-Morava találkozása", "Királyok városa", "Gazdag történelmi emlékek", "Fontos város a királyi útvonalon"],
        ro: [],
        en: []
    }
  },
  {
    id: "RS-009-zica",
    type: "historical",
    parent: "RS-009",
    coords: [20.6450, 43.6961],
    name: { de: "Kloster Žiča", hu: "Žiča kolostor", ro: "Mănăstirea Žiča", en: "Žiča Monastery" },
    description: {
      de: "Ein leuchtend rotes Kloster aus dem 13. Jahrhundert, in dem die ersten serbischen Könige gekrönt wurden.",
      hu: "Élénkvörös, 13. századi kolostor, ahol az első szerb királyokat koronázták.",
      ro: "O mănăstire de culoare roșu aprins din secolul al XIII-lea, unde au fost încoronați primii regi sârbi.",
      en: "A bright red 13th-century monastery where the first Serbian kings were crowned."
    },
    descriptionAdvanced: {
        de: "",
        hu: "A Žiča kolostor a 13. századi szerb államiság egyik legfontosabb szimbóluma, ahová az első szerb királyokat koronázásra vezették. Az épület egyedi vörös színe a királyi hatalmat jelképezi. A kolostor az évszázadok során fontos vallási és kulturális központtá vált, amit ma is hűen tükröz. Történelem K8 — királyi koronázások.",
        ro: "",
        en: ""
    },
    facts: {
      de: ["Krönungskirche", "Sitz des ersten Erzbischofs", "Einzigartige rote Farbe"],
      hu: ["Koronázótemplom", "Az első érsek székhelye", "Egyedülálló vörös szín"],
      ro: ["Biserica de încoronare", "Sediul primului arhiepiscop", "Culoare roșie unică"],
      en: ["Coronation church", "Seat of the first archbishop", "Unique red color"]
    },
    factsAdvanced: {
        de: [],
        hu: ["A királykoronázások helyszíne", "Az első szerb érseki székhely", "Az egyedi vörös szín a hatalmat jelképezi", "Fontos vallási és kulturális emlék", "A szerb államiság jelképe"],
        ro: [],
        en: []
    }
  },
  // RS-010 Pomoravski
  {
    id: "RS-010-jagodina",
    type: "city",
    parent: "RS-010",
    coords: [21.2614, 43.9758],
    name: { de: "Jagodina", hu: "Jagodina", ro: "Jagodina", en: "Jagodina" },
    description: {
      de: "Eine Stadt im Herzen Zentralserbiens, bekannt für ihren großen Zoo und Wasserpark.",
      hu: "Közép-Szerbia szívében fekvő város, híres nagy állatkertjéről és aquaparkjáról.",
      ro: "Un oraș în inima Serbiei Centrale, cunoscut pentru grădina sa zoologică mare și parcul acvatic.",
      en: "A city in the heart of Central Serbia, known for its large zoo and water park."
    },
    descriptionAdvanced: {
        de: "",
        hu: "Jagodina a modern kikapcsolódás egyik központja Szerbiában. Az állatkert és az aquapark mellett a város panoptikuma is vonzza a turistákat, ami betekintést ad a szerb történelem nagyjainak életébe. A város ma már elsősorban a családi kikapcsolódásáról és a turisztikai fejlesztéseiről ismert az országban. Kultúra K8 — turisztikai fejlesztések.",
        ro: "",
        en: ""
    },
    facts: {
      de: ["Wachsfigurenkabinett", "Großer Wasserpark", "Pomoravlje-Zentrum"],
      hu: ["Panoptikum", "Nagy aquapark", "Pomoravlje központja"],
      ro: ["Muzeul figurilor de ceară", "Parc acvatic mare", "Centrul Pomoravlje"],
      en: ["Wax museum", "Large water park", "Pomoravlje center"]
    },
    factsAdvanced: {
        de: [],
        hu: ["Híres állatkert és aquapark", "Panoptikum (viaszmúzeum)", "Pomoravlje régió központja", "Népszerű családi kikapcsolódás", "Modern turisztikai fejlesztések"],
        ro: [],
        en: []
    }
  },
  {
    id: "RS-010-manasija",
    type: "historical",
    parent: "RS-010",
    coords: [21.4689, 44.1011],
    name: { de: "Kloster Manasija", hu: "Manasija kolostor", ro: "Mănăstirea Manasija", en: "Manasija Monastery" },
    description: {
      de: "Eines der bedeutendsten Denkmäler der serbischen mittelalterlichen Kultur, umgeben von massiven Festungsmauern.",
      hu: "A szerb középkori kultúra egyik legjelentősebb emléke, hatalmas várfalakkal körülvéve.",
      ro: "Unul dintre cele mai importante monumente ale culturii medievale sârbe, înconjurat de ziduri masive de cetate.",
      en: "One of the most significant monuments of Serbian medieval culture, surrounded by massive fortress walls."
    },
    descriptionAdvanced: {
        de: "",
        hu: "A Manasija kolostor a középkori szerb építészet és kultúra egyik ékköve, amely a Resava-iskola központja volt. A masszív várfalak és a tornyok egy igazi erődöt képeznek, amely a templomot és a szellemi értékeket védte. A kolostor belsejében található freskók a szerb középkori művészet egyik csúcspontját képviselik. Művészet K7 — középkori építészet.",
        ro: "",
        en: ""
    },
    facts: {
      de: ["Gegründet von Stefan Lazarević", "Elf Verteidigungstürme", "Resava-Schule für Literatur"],
      hu: ["Stefan Lazarević alapította", "Tizenegy védőtorony", "Resava irodalmi iskola"],
      ro: ["Fondată de Stefan Lazarević", "Unsprezece turnuri de apărare", "Școala literară Resava"],
      en: ["Founded by Stefan Lazarević", "Eleven defense towers", "Resava school of literature"]
    },
    factsAdvanced: {
        de: [],
        hu: ["Stefan Lazarević despota alapította 1407 körül", "Erődített kolostor 11 toronnyal", "A Resava irodalmi iskola székhelye", "Művészeti és kulturális központ", "Jelentős középkori emlék"],
        ro: [],
        en: []
    }
  },
  // RS-011 Toplicki
  {
    id: "RS-011-prokuplje",
    type: "city",
    parent: "RS-011",
    coords: [21.5889, 43.2339],
    name: { de: "Prokuplje", hu: "Prokuplje", ro: "Prokuplje", en: "Prokuplje" },
    description: {
      de: "Das administrative Zentrum des Bezirks Toplica, benannt nach dem Heiligen Procopius.",
      hu: "A Toplica körzet közigazgatási központja, Szent Procopiusról nevezték el.",
      ro: "Centrul administrativ al districtului Toplica, numit după Sfântul Procopie.",
      en: "The administrative center of the Toplica district, named after Saint Procopius."
    },
    descriptionAdvanced: {
        de: "",
        hu: "Prokuplje a déli régió adminisztratív központja, amelynek története egészen az ókorig nyúlik vissza. A várost a Szent Procopius templom és a közeli Hisar-hegyen álló ókori maradványok teszik történelmileg fontossá. A város és a környező vidék gazdag bortermelő régió, amely fontos szerepet játszik a helyi gazdaságban. Történelem K8 — római örökség.",
        ro: "",
        en: ""
    },
    facts: {
      de: ["Hisar-Hügel", "Römische Thermen", "Weinregion"],
      hu: ["Hisar-domb", "Római fürdők", "Borvidék"],
      ro: ["Dealul Hisar", "Terme romane", "Regiune viticolă"],
      en: ["Hisar Hill", "Roman baths", "Wine region"]
    },
    factsAdvanced: {
        de: [],
        hu: ["Adminisztratív központ", "Hisar-hegyi emlékek", "Ókori római fürdőmaradványok", "Fontos szőlőtermelő régió", "Regionális központ"],
        ro: [],
        en: []
    }
  },
  {
    id: "RS-011-djavolja-varos-site",
    type: "landmark",
    parent: "RS-011",
    coords: [21.4000, 42.9833],
    name: { de: "Đavolja Varoš", hu: "Ördögváros", ro: "Đavolja Varoš", en: "Devil's Town" },
    description: {
      de: "Ein seltenes Naturphänomen mit Hunderten von Erdpyramiden und zwei Quellen mit extrem saurem Wasser.",
      hu: "Ritka természeti jelenség több száz földpiramissal és két extrém savas vizű forrással.",
      ro: "Un fenomen natural rar cu sute de piramide de pământ și două izvoare cu apă extrem de acidă.",
      en: "A rare natural phenomenon with hundreds of earth pyramids and two springs of extremely acidic water."
    },
    descriptionAdvanced: {
        de: "",
        hu: "Az Ördögváros a természet eróziós alkotásainak egyik csodája, amely több száz földpiramissal teszi különlegessé a tájat. A misztikus képződményeket két savas vizű forrás egészíti ki, ami egyedülálló ökológiai környezetet teremt. A látogatók a tanösvényeken keresztül ismerhetik meg ezt a különleges természeti csodát. Földrajz K7 — erózió és tájformálódás.",
        ro: "",
        en: ""
    },
    facts: {
      de: ["Erdpyramiden", "Säurequellen", "Mystische Formationen"],
      hu: ["Földpiramisok", "Savas források", "Misztikus képződmények"],
      ro: ["Piramide de pământ", "Izvoare acide", "Formațiuni mistice"],
      en: ["Earth pyramids", "Acid springs", "Mystical formations"]
    },
    factsAdvanced: {
        de: [],
        hu: ["Erózió alakította földpiramisok", "Két rendkívül savas vizű forrás", "Különleges tájformák", "Misztikus helyszín", "Fontos természeti érték"],
        ro: [],
        en: []
    }
  },
  // RS-012 Zlatiborski
  {
    id: "RS-012-uzice",
    type: "city",
    parent: "RS-012",
    coords: [19.8425, 43.8586],
    name: { de: "Užice", hu: "Uzice", ro: "Užice", en: "Užice" },
    description: {
      de: "Eine historische Stadt im Westen Serbiens, berühmt für die Partisanenrepublik Užice im Zweiten Weltkrieg.",
      hu: "Történelmi város Nyugat-Szerbiában, híres a második világháborús Uzicei Partizánköztársaságról.",
      ro: "Un oraș istoric în vestul Serbiei, faimos pentru Republica Partizană Užice din al Doilea Război Mondial.",
      en: "A historical city in western Serbia, famous for the Užice Partisan Republic in WWII."
    },
    descriptionAdvanced: {
        de: "",
        hu: "Užice a Nyugati-Szerbia egyik történelmi központja, amely a második világháború eseményei miatt vált világszerte ismertté, különösen a Partizánköztársaság miatt. A város a régió ipari központja is, emellett híres a középkori váráról és a Tesla-elv alapján épült első szerbiai vízerőműről. A környező Zlatibor-hegység a turizmus fellegvára. Történelem K8 — II. világháború.",
        ro: "",
        en: ""
    },
    facts: {
      de: ["Alte Burg Užice", "Erstes Wasserkraftwerk (Tesla-Prinzip)", "Tor zu Zlatibor"],
      hu: ["Régi uzicei vár", "Első vízerőmű (Tesla-elv)", "Zlatibor kapuja"],
      ro: ["Cetatea veche Užice", "Prima hidrocentrală (principiul Tesla)", "Poarta către Zlatibor"],
      en: ["Old Užice Fortress", "First hydroelectric plant (Tesla principle)", "Gateway to Zlatibor"]
    },
    factsAdvanced: {
        de: [],
        hu: ["Az 1941-es Uzicei Partizánköztársaság székhelye", "Az első vízerőmű Tesla-elv alapján", "Régi középkori vár maradványai", "Zlatibor kapuja", "Gazdag ipartörténelem"],
        ro: [],
        en: []
    }
  },
    // RS-013 Sremski
  {
    id: "RS-013-sremska-mitrovica",
    type: "city",
    parent: "RS-013",
    coords: [19.6122, 44.9764],
    name: { de: "Sremska Mitrovica", hu: "Szávaszentdemeter", ro: "Sremska Mitrovica", en: "Sremska Mitrovica" },
    description: {
      de: "Eine der ältesten Städte Serbiens, die auf den Ruinen der antiken römischen Hauptstadt Sirmium erbaut wurde.",
      hu: "Szerbia egyik legrégebbi városa, amely az ókori római főváros, Sirmium romjaira épült.",
      ro: "Unul dintre cele mai vechi orașe din Serbia, construit pe ruinele fostei capitale romane Sirmium.",
      en: "One of the oldest cities in Serbia, built on the ruins of the ancient Roman capital Sirmium."
    },
    descriptionAdvanced: {
        de: "",
        hu: "Szávaszentdemeter a hajdani Sirmium, az ókori Római Birodalom egyik legfontosabb városa, ahol több római császár is született. Ma a városközpont alatt számos ókori emlék rejtőzik, amelyeket részben már feltártak. A Száva folyó közelsége a várost mindig is fontos kereskedelmi és stratégiai ponttá tette a régióban. Történelem K6 — Római Birodalom.",
        ro: "",
        en: ""
    },
    facts: {
      de: ["Antikes Sirmium", "Kaiserpalast", "An der Save"],
      hu: ["Ókori Sirmium", "Császári palota", "A Száva partján"],
      ro: ["Vechiul Sirmium", "Palatul Imperial", "Pe râul Sava"],
      en: ["Ancient Sirmium", "Imperial Palace", "On the Sava river"]
    },
    factsAdvanced: {
        de: [],
        hu: ["Ókori római város (Sirmium)", "Császári palota maradványok", "Szerbia egyik legrégebbi városa", "A Száva menti történelmi központ", "Fontos történelmi emlékek"],
        ro: [],
        en: []
    }
  },
  {
    id: "RS-013-krusedol",
    type: "historical",
    parent: "RS-013",
    coords: [19.9400, 45.1200],
    name: { de: "Kloster Krušedol", hu: "Krušedol kolostor", ro: "Mănăstirea Krušedol", en: "Krušedol Monastery" },
    description: {
      de: "Eines der bedeutendsten Klöster der Fruška Gora, gegründet im 16. Jahrhundert.",
      hu: "A Tarcal-hegység egyik legjelentősebb kolostora, amelyet a 16. században alapítottak.",
      ro: "Una dintre cele mai importante mănăstiri din Fruška Gora, fondată în secolul al XVI-lea.",
      en: "One of the most significant monasteries of Fruška Gora, founded in the 16th century."
    },
    descriptionAdvanced: {
        de: "",
        hu: "A Krušedol kolostor a Fruška Gora egyik szellemi és kulturális központja, amely a szerb ortodox egyház történetének fontos helyszíne. A kolostorban több szerb uralkodó sírhelye található, így jelentős nemzeti zarándokhely. A barokk építészet stílusjegyei jól keverednek a régi szakrális elemekkel. Művészet K7 — szerb ortodox kolostorok.",
        ro: "",
        en: ""
    },
    facts: {
      de: ["Mausoleum serbischer Könige", "Barockarchitektur", "Fruška Gora Region"],
      hu: ["Szerb királyok mauzóleuma", "Barokk építészet", "Tarcal-hegység vidéke"],
      ro: ["Mausoleul regilor sârbi", "Arhitectură barocă", "Regiunea Fruška Gora"],
      en: ["Mausoleum of Serbian kings", "Baroque architecture", "Fruška Gora region"]
    },
    factsAdvanced: {
        de: [],
        hu: ["Szerb uralkodók sírhelye", "Barokk építészeti stílus", "A Fruška Gora egyik legfontosabb kolostora", "Nemzeti zarándokhely", "Jelentős vallási központ"],
        ro: [],
        en: []
    }
  },
  // RS-014 Macvanski
  {
    id: "RS-014-sabac",
    type: "city",
    parent: "RS-014",
    coords: [19.6900, 44.7500],
    name: { de: "Šabac", hu: "Szabács", ro: "Šabac", en: "Šabac" },
    description: {
      de: "Eine Stadt an der Save, bekannt für ihre Marktkultur, Geschichte und das Šabac-Festival.",
      hu: "Város a Száva partján, amely vásári kultúrájáról, történelméről és a Szabácsi fesztiválról ismert.",
      ro: "Un oraș pe râul Sava, cunoscut pentru cultura piețelor sale, istorie și festivalul Šabac.",
      en: "A city on the Sava river, known for its market culture, history, and the Šabac festival."
    },
    descriptionAdvanced: {
        de: "",
        hu: "Šabac a Száva folyó mentén fekvő, kereskedelmi és történelmi központ. A város vásári kultúrája messze földön híres, akárcsak a Szabácsi fesztiválok, amelyek a régió kulturális életének fontos részét alkotják. A város a török uralom elleni küzdelemben is fontos szerepet játszott. Gazdaság K8 — vásárok és kereskedelem.",
        ro: "",
        en: ""
    },
    facts: {
      de: ["Festung Šabac", "Handelszentrum", "An der Save"],
      hu: ["Szabácsi vár", "Kereskedelmi központ", "A Száva partján"],
      ro: ["Cetatea Šabac", "Centru comercial", "Pe râul Sava"],
      en: ["Šabac Fortress", "Trade center", "On the Sava river"]
    },
    factsAdvanced: {
        de: [],
        hu: ["Híres vásári hagyományok", "Fontos Száva-menti kereskedelmi központ", "Szabácsi vár romjai", "Gazdag történelmi múlt", "Fontos regionális kereskedelmi pont"],
        ro: [],
        en: []
    }
  },
  {
    id: "RS-014-tronosa",
    type: "historical",
    parent: "RS-014",
    coords: [19.2800, 44.4600],
    name: { de: "Kloster Tronoša", hu: "Tronoša kolostor", ro: "Mănăstirea Tronoša", en: "Tronoša Monastery" },
    description: {
      de: "Ein historisches Kloster in der Nähe von Loznica, eng verbunden mit der Erhaltung der serbischen Literatur.",
      hu: "Történelmi kolostor Loznica közelében, szorosan kötődik a szerb irodalom megőrzéséhez.",
      ro: "O mănăstire istorică lângă Loznica, strâns legată de conservarea literaturii sârbe.",
      en: "A historical monastery near Loznica, closely linked to the preservation of Serbian literature."
    },
    descriptionAdvanced: {
        de: "",
        hu: "A Tronoša kolostor egyedülálló helyet foglal el a szerb kulturális történelemben, hiszen itt nevelkedett Vuk Karadžić, a szerb nyelvújító. A kolostor évszázadokon át a szerb írásbeliség és kultúra bástyája volt a török uralom idején. Ma múzeumként és kolostorként is látogatható. Művészet K8 — nyelvújítás és irodalom.",
        ro: "",
        en: ""
    },
    facts: {
      de: ["Zentrum der Alphabetisierung", "Vuk Karadžić Schule", "Orthodoxe Tradition"],
      hu: ["Az írástudás központja", "Vuk Karadžić iskolája", "Ortodox hagyomány"],
      ro: ["Centru de alfabetizare", "Școala lui Vuk Karadžić", "Tradiție ortodoxă"],
      en: ["Center of literacy", "Vuk Karadžić's school", "Orthodox tradition"]
    },
    factsAdvanced: {
        de: [],
        hu: ["Vuk Karadžić itt tanult", "A szerb írásbeliség bölcsője", "Történelmi kolostor", "Kulturális emlékhely", "Fontos vallási központ"],
        ro: [],
        en: []
    }
  },
  // RS-015 Južno-Backi
      // RS-016 Srednje-Banatski
    {
    id: "RS-016-carska-bara",
    type: "landmark",
    parent: "RS-016",
    coords: [20.3800, 45.2500],
    name: { de: "Carska Bara", hu: "Császár-tó", ro: "Carska Bara", en: "Carska Bara" },
    description: {
      de: "Ein bedeutendes Vogelschutzgebiet und Naturschutzgebiet im Banat.",
      hu: "Jelentős madárrezervátum és természetvédelmi terület a Bánátban.",
      ro: "O importantă rezervație de păsări și arie naturală protejată din Banat.",
      en: "A significant bird sanctuary and nature reserve in the Banat region."
    },
    descriptionAdvanced: {
        de: "",
        hu: "A Császár-tó (Carska Bara) a Bánát egyedülálló természeti területe, amely a vándormadarak egyik legfontosabb megállóhelye a régióban. A mocsaras táj és a vizes élőhelyek gazdag élővilágnak biztosítanak otthont, ami a természetfotósok és a kutatók számára is kiemelkedő célpont. A terület védelme érdekében fokozottan ellenőrzött természetvédelmi zóna. Földrajz K8 — vizes élőhelyek.",
        ro: "",
        en: ""
    },
    facts: {
      de: ["Sumpflandschaft", "Seltene Vögel", "Naturschutzgebiet"],
      hu: ["Mocsaras vidék", "Ritka madarak", "Természetvédelmi terület"],
      ro: ["Peisaj mlăștinos", "Păsări rare", "Rezervație naturală"],
      en: ["Marshland", "Rare birds", "Nature reserve"]
    },
    factsAdvanced: {
        de: [],
        hu: ["Fontos madárrezervátum", "Mocsaras, vizes élőhely", "Ritka vándormadarak", "Természetvédelmi övezet", "Egyedi ökoszisztéma"],
        ro: [],
        en: []
    }
  },
  // RS-017 Južno-Banatski
  {
    id: "RS-017-pancevo",
    type: "city",
    parent: "RS-017",
    coords: [20.6400, 44.8708],
    name: { de: "Pančevo", hu: "Pancsova", ro: "Panciova", en: "Pančevo" },
    description: {
      de: "Eine Industriestadt am Zusammenfluss von Temesch und Donau, nahe bei Belgrad.",
      hu: "Ipari város a Temes és a Duna összefolyásánál, Belgrád közelében.",
      ro: "Un oraș industrial la confluența râului Timiș cu Dunărea, aproape de Belgrad.",
      en: "An industrial city at the confluence of the Tamiš and Danube rivers, near Belgrade."
    },
    descriptionAdvanced: {
        de: "",
        hu: "Pancsova fontos ipari központ a Duna és a Temes találkozásánál, amely történelmi világítótornyaival is kitűnik. A város a belgrádi agglomeráció részeként dinamikusan fejlődik, miközben őrzi a folyó menti ipari hagyományait. A városközpont és a kikötő környéke a folyami hajózás emlékét idézi. Gazdaság K7 — ipari központok.",
        ro: "",
        en: ""
    },
    facts: {
      de: ["Historische Leuchttürme", "Bedeutende Industrie", "Temesch-Ufer"],
      hu: ["Történelmi világítótornyok", "Jelentős ipar", "Temes-part"],
      ro: ["Faruri istorice", "Industrie importantă", "Malul râului Timiș"],
      en: ["Historical lighthouses", "Significant industry", "Tamiš riverbank"]
    },
    factsAdvanced: {
        de: [],
        hu: ["Történelmi világítótornyok a Duna-parton", "Jelentős ipari központ", "A Temes folyó mentén", "Közelség Belgrádhoz", "Ipari hagyományok"],
        ro: [],
        en: []
    }
  },
  {
    id: "RS-017-vrsac",
    type: "city",
    parent: "RS-017",
    coords: [21.3036, 45.1167],
    name: { de: "Vršac", hu: "Versec", ro: "Vârșeț", en: "Vršac" },
    description: {
      de: "Eine charmante Stadt am Fuße der Vršac-Berge, berühmt für ihren Weinbau.",
      hu: "Bájos város a Verseci-hegység lábánál, híres borászatáról.",
      ro: "Un oraș fermecător la poalele munților Vârșeț, faimos pentru viticultură.",
      en: "A charming city at the foot of the Vršac Mountains, famous for its viticulture."
    },
    descriptionAdvanced: {
        de: "",
        hu: "Versec a Verseci-hegység lábánál fekvő, kiváló borairól ismert város. A történelmi városközpontot a régi püspöki palota és a várrom uralja, amelyről remek kilátás nyílik a környező vidékre. A szőlőültetvények és a borászat a város gazdasági életének és kultúránk is meghatározó része. Művészet K8 — borászat.",
        ro: "",
        en: ""
    },
    facts: {
      de: ["Vršac-Turm", "Bischofspalast", "Große Weingüter"],
      hu: ["Verseci torony", "Püspöki palota", "Hatalmas borászatok"],
      ro: ["Turnul Vârșeț", "Palatul Episcopal", "Podgorii mari"],
      en: ["Vršac Tower", "Bishop's Palace", "Large wineries"]
    },
    factsAdvanced: {
        de: [],
        hu: ["A híres Verseci torony", "Püspöki palota", "Hatalmas borászatok és szőlőültetvények", "Kiváló borvidék", "Jelentős regionális központ"],
        ro: [],
        en: []
    }
  },
  // RS-018 Branicevski
  {
    id: "RS-018-pozarevac",
    type: "city",
    parent: "RS-018",
    coords: [21.1858, 44.6214],
    name: { de: "Požarevac", hu: "Pozsarevác", ro: "Požarevac", en: "Požarevac" },
    description: {
      de: "Eine Stadt mit reicher Geschichte, bekannt als Ort wichtiger Friedensverträge.",
      hu: "Gazdag történelmű város, fontos békeszerződések helyszíneként ismert.",
      ro: "Un oraș cu o istorie bogată, cunoscut ca locul unor importante tratate de pace.",
      en: "A city with a rich history, known as the site of important peace treaties."
    },
    descriptionAdvanced: {
        de: "",
        hu: "Pozsarevác történelmi jelentőségű város, ahol az 1718-as békeszerződést is aláírták. A város a kultúra és a lovas hagyományok terén is jeleskedik, amiről a Ljubičevo-lovasi játékok is tanúskodnak. Az etnopark bemutatja a vidék hagyományos életmódját és történelmi értékeit. Kultúra K8 — lovas hagyományok.",
        ro: "",
        en: ""
    },
    facts: {
      de: ["Friede von Passarowitz", "Ljubičevo-Pferdespiele", "Etno-Park Tulba"],
      hu: ["Pozsareváci béke", "Ljubičevói lovasjátékok", "Tulba etnopark"],
      ro: ["Pacea de la Passarowitz", "Jocurile de cai Ljubičevo", "Etno-parcul Tulba"],
      en: ["Peace of Passarowitz", "Ljubičevo Horse Games", "Tulba ethno-park"]
    },
    factsAdvanced: {
        de: [],
        hu: ["Az 1718-as passarowitzi béke helyszíne", "Híres Ljubičevói lovasjátékok", "Tulba etnopark", "Történelmi város", "Kulturális központ"],
        ro: [],
        en: []
    }
  },
  {
    id: "RS-018-viminacium",
    type: "historical",
    parent: "RS-018",
    coords: [21.1700, 44.7300],
    name: { de: "Viminacium", hu: "Viminacium", ro: "Viminacium", en: "Viminacium" },
    description: {
      de: "Eine bedeutende römische Stadt und Militärlager, die Hauptstadt der Provinz Moesia Superior.",
      hu: "Jelentős római város és katonai tábor, Moesia Superior tartomány fővárosa.",
      ro: "Un oraș roman important și tabără militară, capitala provinciei Moesia Superior.",
      en: "An important Roman city and military camp, the capital of the province Moesia Superior."
    },
    descriptionAdvanced: {
        de: "",
        hu: "Viminacium a római kori Moesia Superior tartomány fővárosa volt, amely jelentős katonai és közigazgatási központként szolgált. A régészeti feltárások során római sírok és monumentális épületek maradványait találták meg, sőt még mamutcsontvázak is előkerültek a területen. A régészeti park betekintést ad a késő ókori életmódba. Történelem K6 — ókori római kor.",
        ro: "",
        en: ""
    },
    facts: {
      de: ["Archäologischer Park", "Römische Gräber", "Mammut-Skelette gefunden"],
      hu: ["Régészeti park", "Római sírok", "Mammutcsontvázak lelethelye"],
      ro: ["Parc arheologic", "Morminte romane", "Schelete de mamut găsite"],
      en: ["Archaeological park", "Roman tombs", "Mammoth skeletons found"]
    },
    factsAdvanced: {
        de: [],
        hu: ["Fontos ókori római katonai központ", "Régészeti park és emlékek", "Ókori sírok", "Mammutcsontvázak lelethelye", "Római kori emlékek"],
        ro: [],
        en: []
    }
  },
  // RS-019 Grad Beograd
      // RS-020 Podunavski
  {
    id: "RS-020-smederevo-city",
    type: "city",
    parent: "RS-020",
    coords: [20.9300, 44.6628],
    name: { de: "Smederevo", hu: "Szendrő", ro: "Smederevo", en: "Smederevo" },
    description: {
      de: "Eine historische Stadt an der Donau, ehemalige Hauptstadt Serbiens im Mittelalter.",
      hu: "Történelmi város a Duna mentén, Szerbia egykori fővárosa a középkorban.",
      ro: "Un oraș istoric pe Dunăre, fostă capitală a Serbiei în Evul Mediu.",
      en: "A historical city on the Danube, former capital of Serbia in the Middle Ages."
    },
    descriptionAdvanced: {
        de: "",
        hu: "Szendrő a középkori Szerbia egyik legfontosabb városa volt, amely a Duna mentén fekszik. A város történelmi múltját a híres erőd határozza meg, amely a középkori védelmi rendszerek csúcsát képviseli. A környék emellett jelentős gyümölcstermesztő vidék, amely meghatározza a helyi gazdaságot. Történelem K8 — középkori fővárosok.",
        ro: "",
        en: ""
    },
    facts: {
      de: ["An der Donau", "Obstbaugebiet", "Großer Industriestandort"],
      hu: ["A Duna mentén", "Gyümölcstermesztő vidék", "Jelentős ipari központ"],
      ro: ["Pe malul Dunării", "Zonă pomicolă", "Centru industrial major"],
      en: ["On the Danube", "Fruit growing area", "Major industrial site"]
    },
    factsAdvanced: {
        de: [],
        hu: ["A Duna partján fekszik", "Fontos gyümölcstermesztő régió", "Jelentős ipari központ", "Középkori főváros", "Gazdag történelem"],
        ro: [],
        en: []
    }
  },
    // RS-021 Nišavski
      // RS-022 Pomoravski (Rasinski/South area) -> Kruševac
  {
    id: "RS-022-krusevac",
    type: "city",
    parent: "RS-022",
    coords: [21.3339, 43.5800],
    name: { de: "Kruševac", hu: "Kruševac", ro: "Kruševac", en: "Kruševac" },
    description: {
      de: "Die mittelalterliche Hauptstadt Serbiens zur Zeit des Fürsten Lazar.",
      hu: "Szerbia középkori fővárosa Lázár fejedelem idején.",
      ro: "Capitala medievală a Serbiei în timpul prințului Lazar.",
      en: "The medieval capital of Serbia during the time of Prince Lazar."
    },
    descriptionAdvanced: {
        de: "",
        hu: "Kruševac történelmi szerepe kiemelkedő, hiszen a 14. században Lázár fejedelem uralkodása alatt a középkori szerb állam fővárosa volt. A városban található Lazarica-templom és a vár maradványai a korszak dicsőségét hirdetik. A város ma a régió fontos gazdasági és kulturális központja. Történelem K8 — középkori fővárosok.",
        ro: "",
        en: ""
    },
    facts: {
      de: ["Lazar-Stadt (Lazarevac)", "Lazarica-Kirche", "Kosovo-Epos Verbindung"],
      hu: ["Lázár városa (Lazarevac)", "Lazarica-templom", "Kapcsolat a rigómezei éposszal"],
      ro: ["Orașul lui Lazar", "Biserica Lazarica", "Legătura cu epopeea Kosovo"],
      en: ["Lazar's City", "Lazarica Church", "Link to the Kosovo epic"]
    },
    factsAdvanced: {
        de: [],
        hu: ["Lázár fejedelem székhelye", "Történelmi Lazarica-templom", "A középkori szerb állam fővárosa", "Kulturális emlékek", "Fontos történelmi város"],
        ro: [],
        en: []
    }
  },
  {
    id: "RS-022-ljubostinja",
    type: "historical",
    parent: "RS-022",
    coords: [21.0333, 43.6500],
    name: { de: "Kloster Ljubostinja", hu: "Ljubostinja kolostor", ro: "Mănăstirea Ljubostinja", en: "Ljubostinja Monastery" },
    description: {
      de: "Ein serbisch-orthodoxes Frauenkloster, ein Meisterwerk der Morava-Schule.",
      hu: "Szerb ortodox női kolostor, a Morava-stílusú építészet remekműve.",
      ro: "O mănăstire ortodoxă sârbă de maici, o capodoperă a școlii de arhitectură Morava.",
      en: "A Serbian Orthodox nunnery, a masterpiece of the Morava school of architecture."
    },
    descriptionAdvanced: {
        de: "",
        hu: "A Ljubostinja kolostor a Morava-iskola legszebb építészeti alkotásai közé tartozik, amelyet Milica fejedelemasszony alapított a 14. század végén. A kolostor gazdag díszítése és festői környezete egyedülálló élményt nyújt. Ma is fontos vallási és kulturális központ, a művészettörténeti kutatók számára pedig felbecsülhetetlen értékű. Művészet K7 — építészeti stílusok.",
        ro: "",
        en: ""
    },
    facts: {
      de: ["Gegründet von Fürstin Milica", "Reich verzierte Fenster", "Malerische Lage"],
      hu: ["Milica fejedelemasszony alapította", "Gazdagon díszített ablakok", "Festői környezet"],
      ro: ["Fondată de prințesa Milica", "Ferestre bogat decorate", "Locație pitorească"],
      en: ["Founded by Princess Milica", "Richly decorated windows", "Picturesque setting"]
    },
    factsAdvanced: {
        de: [],
        hu: ["Milica fejedelemasszony alapította", "Gazdagon díszített ablakok és homlokzat", "A Morava-iskola remekműve", "Fontos vallási központ", "Festői természeti környezet"],
        ro: [],
        en: []
    }
  },
  // RS-023 Šumadijski
      // RS-024 Moravicki
    {
    id: "RS-024-ovcar-kablar",
    type: "landmark",
    parent: "RS-024",
    coords: [20.1800, 43.9000],
    name: { de: "Ovčar-Kablar-Schlucht", hu: "Ovčar-Kablar-szurdok", ro: "Defileul Ovčar-Kablar", en: "Ovčar-Kablar Gorge" },
    description: {
      de: "Eine malerische Schlucht der Westmorava, auch 'Serbisches Heiliges Bergland' genannt.",
      hu: "A Nyugati-Morava festői szurdoka, amelyet 'szerb szent hegyvidéknek' is neveznek.",
      ro: "Un defileu pitoresc al Moravei de Vest, numit și 'Muntele Sfânt Sârbesc'.",
      en: "A picturesque gorge of the West Morava river, also called 'Serbian Holy Mountain'."
    },
    descriptionAdvanced: {
        de: "",
        hu: "Az Ovčar-Kablar szurdokot a 'Szerb Szent Hegyvidéknek' is nevezik, mivel a völgyben több középkori kolostor rejtőzik a hegyek ölelésében. A szurdok a természet és a spirituális élet harmonikus egységét mutatja be. A környék túraútvonalai kiválóak a kikapcsolódáshoz és a környék megismeréséhez. Kultúra K8 — kolostorok.",
        ro: "",
        en: ""
    },
    facts: {
      de: ["Zahlreiche Klöster", "Wellness-Zentrum", "Wanderwege"],
      hu: ["Számos kolostor", "Gyógyfürdő központ", "Túraútvonalak"],
      ro: ["Numeroase mănăstiri", "Centru de wellness", "Trasee de drumeție"],
      en: ["Numerous monasteries", "Wellness center", "Hiking trails"]
    },
    factsAdvanced: {
        de: [],
        hu: ["Számos középkori kolostor", "Gyógyfürdő központ a közelben", "Kiváló túraútvonalak", "A szerb 'szent hegyvidék'", "Festői természeti látnivaló"],
        ro: [],
        en: []
    }
  },
  // RS-025 Kolubarski
  {
    id: "RS-025-valjevo",
    type: "city",
    parent: "RS-025",
    coords: [19.8900, 44.2700],
    name: { de: "Valjevo", hu: "Valjevo", ro: "Valjevo", en: "Valjevo" },
    description: {
      de: "Eine Stadt im Westen Serbiens, reich an Geschichte und kulturellem Erbe.",
      hu: "Nyugat-szerbiai város, gazdag történelemmel és kulturális örökséggel.",
      ro: "Un oraș în vestul Serbiei, bogat în istorie și moștenire culturală.",
      en: "A city in western Serbia, rich in history and cultural heritage."
    },
    descriptionAdvanced: {
        de: "",
        hu: "Valjevo a Nyugati-Szerbia egyik történelmi városa, amely a Kolubara folyó mentén épült. A híres Tešnjar óvárosi negyed egy igazi időutazás, ahol a korabeli kereskedőházak között sétálhatunk. A város kultúrája a helyi hagyományokon alapul, amit a múzeumok és a közösségi események is megőriznek. Kultúra K8 — hagyományos negyedek.",
        ro: "",
        en: ""
    },
    facts: {
      de: ["Altstadt Tešnjar", "Nationalmuseum", "Kolubara-Fluss"],
      hu: ["Tešnjar óváros", "Nemzeti Múzeum", "Kolubara-folyó"],
      ro: ["Centrul vechi Tešnjar", "Muzeul Național", "Râul Kolubara"],
      en: ["Tešnjar old quarter", "National Museum", "Kolubara River"]
    },
    factsAdvanced: {
        de: [],
        hu: ["Tešnjar hangulatos óvárosi negyede", "Nemzeti Múzeum", "A Kolubara folyó mentén", "Gazdag történelmi emlékek", "Kulturális központ"],
        ro: [],
        en: []
    }
  },
  {
    id: "RS-025-lelic",
    type: "historical",
    parent: "RS-025",
    coords: [19.8400, 44.2100],
    name: { de: "Kloster Lelić", hu: "Lelić kolostor", ro: "Mănăstirea Lelić", en: "Lelić Monastery" },
    description: {
      de: "Ein modernes, aber bedeutendes Kloster, dem Heiligen Nikolai Velimirović gewidmet.",
      hu: "Modern, de jelentős kolostor, amelyet Szent Nikolai Velimirovićnak szenteltek.",
      ro: "O mănăstire modernă, dar importantă, dedicată Sfântului Nikolai Velimirović.",
      en: "A modern but significant monastery dedicated to Saint Nikolai Velimirović."
    },
    descriptionAdvanced: {
        de: "",
        hu: "A Lelić kolostor a kortárs szerb vallási élet egyik jelentős zarándokhelye, amely Szent Nikolai Velimirović emlékét őrzi. Az épület modern építészeti stílusa és a csendes, elvonult környezet segíti a lelki elmélyülést. A kolostor az ország legfiatalabb, mégis leglátogatottabb vallási helyszínei közé tartozik. Kultúra K8 — vallási élet.",
        ro: "",
        en: ""
    },
    facts: {
      de: ["Reliquien des Hl. Nikolai", "Einzigartige Architektur", "Pilgerstätte"],
      hu: ["Szent Nikolai ereklyéi", "Egyedi építészet", "Zarándokhely"],
      ro: ["Moaștele Sf. Nikolai", "Arhitectură unică", "Loc de pelerinaj"],
      en: ["Relics of St. Nikolai", "Unique architecture", "Pilgrimage site"]
    },
    factsAdvanced: {
        de: [],
        hu: ["Szent Nikolai Velimirović sírhelye", "Modern, egyedi építészeti megoldások", "Fontos zarándokhely", "Vallási és kulturális emlék", "A békés elmélyülés helye"],
        ro: [],
        en: []
    }
  }
];

export const serbiaAllPoi: POI[] = [
  serbiaCountry,
  ...serbiaRegions,
  ...serbiaCities,
  ...serbiaCulture,
  ...serbiaNature,
  ...serbiaRivers,
  ...serbiaDistrictPoi
];
