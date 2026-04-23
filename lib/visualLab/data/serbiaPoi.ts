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
  facts: {
    de: ["Hauptstadt: Belgrad", "Liegt am Balkan", "Währung: Serbischer Dinar", "Amtssprache: Serbisch", "Nicht-EU-Mitglied"],
    hu: ["Főváros: Belgrád", "A Balkánon fekszik", "Pénznem: Szerb dinár", "Hivatalos nyelv: Szerb", "Nem EU-tag"],
    ro: ["Capitala: Belgrad", "Situată în Balcani", "Moneda: Dinar sârbesc", "Limba oficială: Sârbă", "Nu este membră UE"],
    en: ["Capital: Belgrade", "Located in the Balkans", "Currency: Serbian Dinar", "Official language: Serbian", "Non-EU member"]
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
    facts: {
      de: ["Nordprovinz", "Multikulturell", "Fruchtbare Ebenen", "Hauptstadt: Novi Sad", "Starke Landwirtschaft"],
      hu: ["Északi tartomány", "Multikulturális", "Termékeny síkságok", "Székhelye: Újvidék", "Erős mezőgazdaság"],
      ro: ["Provincie nordică", "Multiculturală", "Câmpii fertile", "Capitala: Novi Sad", "Agricultură puternică"],
      en: ["Northern province", "Multicultural", "Fertile plains", "Capital: Novi Sad", "Strong agriculture"]
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
    facts: {
      de: ["Zentralserbien", "Hügelige Landschaft", "Historisches Kernland", "Obstbau", "Wälder"],
      hu: ["Közép-Szerbia", "Dombos táj", "Történelmi magterület", "Gyümölcstermesztés", "Erdők"],
      ro: ["Serbia Centrală", "Peisaj deluros", "Zona istorică centrală", "Pomicultură", "Păduri"],
      en: ["Central Serbia", "Hilly landscape", "Historical heartland", "Fruit growing", "Forests"]
    }
  }
];

// 3. Városok
export const serbiaCities: POI[] = [
  {
    id: "city-belgrade",
    type: "capital",
    parent: "country-serbia",
    coords: [20.4489, 44.7866],
    name: { de: "Belgrad", hu: "Belgrád", ro: "Belgrad", en: "Belgrade" },
    description: {
      de: "Belgrad ist die Hauptstadt Serbiens und liegt am Zusammenfluss von Save und Donau. Sie ist das politische, wirtschaftliche und kulturelle Zentrum.",
      hu: "Belgrád Szerbia fővárosa, a Száva és a Duna összefolyásánál fekszik. Az ország politikai, gazdasági és kulturális központja.",
      ro: "Belgrad este capitala Serbiei și este situată la confluența râurilor Sava și Dunărea. Este centrul politic, economic și cultural.",
      en: "Belgrade is the capital of Serbia and is located at the confluence of the Sava and Danube rivers. It is the political, economic, and cultural center."
    },
    facts: {
      de: ["Größte Stadt Serbiens", "Zusammenfluss von Save und Donau", "Festung Kalemegdan", "Kulturelles Zentrum", "Wichtiger Verkehrsknotenpunkt"],
      hu: ["Szerbia legnagyobb városa", "A Száva és Duna találkozása", "Kalemegdan erőd", "Kulturális központ", "Fontos közlekedési csomópont"],
      ro: ["Cel mai mare oraș din Serbia", "Confluența râurilor Sava și Dunărea", "Cetatea Kalemegdan", "Centru cultural", "Nod de transport important"],
      en: ["Largest city in Serbia", "Confluence of Sava and Danube", "Kalemegdan Fortress", "Cultural center", "Important transport hub"]
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
    facts: {
      de: ["Zweitgrößte Stadt", "Hauptstadt der Vojvodina", "EXIT Festival", "Festung Petrovaradin", "An der Donau"],
      hu: ["Második legnagyobb város", "Vajdaság fővárosa", "EXIT Fesztivál", "Péterváradi erőd", "A Duna mentén"],
      ro: ["Al doilea oraș ca mărime", "Capitala Voivodinei", "Festivalul EXIT", "Cetatea Petrovaradin", "Pe Dunăre"],
      en: ["Second largest city", "Capital of Vojvodina", "EXIT Festival", "Petrovaradin Fortress", "On the Danube"]
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
    facts: {
      de: ["Drittgrößte Stadt", "Geburtsort von Konstantin dem Großen", "Festung von Niš", "Südserbisches Zentrum", "Schädelturm in der Nähe"],
      hu: ["Harmadik legnagyobb város", "Nagy Konstantin szülőhelye", "Niši erőd", "Dél-szerbiai központ", "Koponyatorony a közelben"],
      ro: ["Al treilea oraș ca mărime", "Locul de naștere al lui Constantin cel Mare", "Cetatea Niș", "Centrul sudului Serbiei", "Turnul Craniilor în apropiere"],
      en: ["Third largest city", "Birthplace of Constantine the Great", "Niš Fortress", "Southern Serbian center", "Skull Tower nearby"]
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
    facts: {
      de: ["Viertgrößte Stadt", "Zentrum von Šumadija", "Automobilindustrie", "Erste Hauptstadt des modernen Serbien", "Universitätstadt"],
      hu: ["Negyedik legnagyobb város", "Šumadija központja", "Autóipar", "A modern Szerbia első fővárosa", "Egyetemváros"],
      ro: ["Al patrulea oraș ca mărime", "Centrul Šumadija", "Industria auto", "Prima capitală a Serbiei moderne", "Oraș universitar"],
      en: ["Fourth largest city", "Center of Šumadija", "Automotive industry", "First capital of modern Serbia", "University city"]
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
    facts: {
      de: ["Grenzstadt zu Ungarn", "Jugendstilarchitektur", "Multikulturell", "Palić-See in der Nähe", "Bedeutende ungarische Minderheit"],
      hu: ["Határváros Magyarországgal", "Szecessziós építészet", "Multikulturális", "Palić-tó a közelben", "Jelentős magyar kisebbség"],
      ro: ["Oraș de graniță cu Ungaria", "Arhitectură Art Nouveau", "Multicultural", "Lacul Palić în apropiere", "Minoritate maghiară semnificativă"],
      en: ["Border city with Hungary", "Art Nouveau architecture", "Multicultural", "Palić Lake nearby", "Significant Hungarian minority"]
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
    facts: {
      de: ["Industriezentrum", "Nahe Ovčar-Kablar-Schlucht", "Westmorava", "Nationales Freiheitsdenkmal", "Traditionsreiche Stadt"],
      hu: ["Ipari központ", "Az Ovčar-Kablar-szoros közelében", "Nyugati-Morava", "Nemzeti Szabadság Emlékmű", "Nagy hagyományú város"],
      ro: ["Centru industrial", "Lângă Defileul Ovčar-Kablar", "Morava de Vest", "Monumentul Libertății Naționale", "Oraș plin de tradiții"],
      en: ["Industrial center", "Near Ovčar-Kablar Gorge", "West Morava", "National Freedom Monument", "City with deep traditions"]
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
    facts: {
      de: ["Zentrum des Banats", "Fluss Begej", "Historische Brücken", "Rathaus-Architektur", "Ehemaliges Groß-Betschkerek"],
      hu: ["A Bánát központja", "Béga folyó", "Történelmi hidak", "Városháza építészete", "Egykori Nagybecskerek"],
      ro: ["Centrul Banatului", "Râul Bega", "Poduri istorice", "Arhitectura primăriei", "Fostul Veliki Bečkerek"],
      en: ["Center of the Banat", "Begej River", "Historical bridges", "City hall architecture", "Former Veliki Bečkerek"]
    }
  }
];

// 4. Kultúra és Történelem
export const serbiaCulture: POI[] = [
  {
    id: "castle-kalemegdan",
    type: "castle",
    parent: "city-belgrade",
    coords: [20.4500, 44.8236],
    name: { de: "Festung Kalemegdan", hu: "Kalemegdan erőd", ro: "Cetatea Kalemegdan", en: "Kalemegdan Fortress" },
    description: {
      de: "Die Festung Kalemegdan ist das historische Herz von Belgrad, malerisch gelegen am Zusammenfluss von Save und Donau.",
      hu: "A Kalemegdan erőd Belgrád történelmi szíve, festői környezetben, a Száva és a Duna találkozásánál.",
      ro: "Cetatea Kalemegdan este inima istorică a Belgradului, situată pitoresc la confluența râurilor Sava și Dunărea.",
      en: "Kalemegdan Fortress is the historic heart of Belgrade, picturesquely located at the confluence of the Sava and Danube rivers."
    },
    facts: {
      de: ["Wahrzeichen Belgrads", "Über dem Flusszusammenfluss", "Römische und osmanische Spuren", "Großer Park", "Historisches Monument"],
      hu: ["Belgrád jelképe", "A folyók találkozása felett", "Római és oszmán nyomok", "Nagy park", "Történelmi emlékmű"],
      ro: ["Simbolul Belgradului", "Deasupra confluenței râurilor", "Urme romane și otomane", "Parc mare", "Monument istoric"],
      en: ["Symbol of Belgrade", "Above the river confluence", "Roman and Ottoman traces", "Large park", "Historical monument"]
    }
  },
  {
    id: "castle-petrovaradin",
    type: "castle",
    parent: "city-novi-sad",
    coords: [19.8631, 45.2522],
    name: { de: "Festung Petrovaradin", hu: "Péterváradi erőd", ro: "Cetatea Petrovaradin", en: "Petrovaradin Fortress" },
    description: {
      de: "Die Festung Petrovaradin in Novi Sad ist eine beeindruckende Anlage an der Donau, oft 'Gibraltar der Donau' genannt.",
      hu: "Az újvidéki péterváradi erőd a Duna mentén fekvő lenyűgöző erődítmény, amelyet gyakran a 'Duna Gibraltárjának' is neveznek.",
      ro: "Cetatea Petrovaradin din Novi Sad este un complex impresionant pe Dunăre, deseori numit 'Gibraltarul Dunării'.",
      en: "Petrovaradin Fortress in Novi Sad is an impressive complex on the Danube, often called the 'Gibraltar of the Danube'."
    },
    facts: {
      de: ["Gibraltar der Donau", "Ort des EXIT-Festivals", "Berühmter Uhrenturm", "Katakomben", "Überblickt Novi Sad"],
      hu: ["A Duna Gibraltárja", "Az EXIT fesztivál helyszíne", "Híres óratorony", "Katakombák", "Újvidékre néz"],
      ro: ["Gibraltarul Dunării", "Locul festivalului EXIT", "Turnul cu ceas faimos", "Catacombe", "Vedere spre Novi Sad"],
      en: ["Gibraltar of the Danube", "EXIT Festival venue", "Famous clock tower", "Catacombs", "Overlooks Novi Sad"]
    }
  },
  {
    id: "church-studenica",
    type: "church",
    parent: "country-serbia",
    coords: [20.5317, 43.4864],
    name: { de: "Kloster Studenica", hu: "Studenica kolostor", ro: "Mănăstirea Studenica", en: "Studenica Monastery" },
    description: {
      de: "Das Kloster Studenica ist eines der größten und reichsten serbisch-orthodoxen Klöster und gehört zum UNESCO-Weltkulturerbe.",
      hu: "A Studenica kolostor az egyik legnagyobb és leggazdagabb szerb ortodox kolostor, az UNESCO világörökség része.",
      ro: "Mănăstirea Studenica este una dintre cele mai mari și mai bogate mănăstiri ortodoxe sârbești și face parte din Patrimoniul Mondial UNESCO.",
      en: "Studenica Monastery is one of the largest and richest Serbian Orthodox monasteries and is a UNESCO World Heritage Site."
    },
    facts: {
      de: ["UNESCO-Weltkulturerbe", "12. Jahrhundert", "Marmorarchitektur", "Bedeutende Fresken", "Serbisch-orthodox"],
      hu: ["UNESCO Világörökség", "12. század", "Márvány építészet", "Jelentős freskók", "Szerb ortodox"],
      ro: ["Patrimoniul Mondial UNESCO", "Secolul al XII-lea", "Arhitectură din marmură", "Fresce importante", "Ortodoxă sârbă"],
      en: ["UNESCO World Heritage Site", "12th century", "Marble architecture", "Important frescoes", "Serbian Orthodox"]
    }
  },
  {
    id: "castle-golubac",
    type: "castle",
    parent: "country-serbia",
    coords: [21.6775, 44.6611],
    name: { de: "Festung Golubac", hu: "Galambóc vára", ro: "Cetatea Golubac", en: "Golubac Fortress" },
    description: {
      de: "Die Festung Golubac ist eine mittelalterliche Burgruine, die majestätisch am Eingang der Eisernen Tors-Schlucht an der Donau liegt.",
      hu: "Galambóc vára egy középkori várrom, amely fenségesen magasodik a Vaskapu-szorost bejáratánál, a Duna mentén.",
      ro: "Cetatea Golubac este o cetate medievală în ruină, așezată maiestuos la intrarea în defileul Porțile de Fier de pe Dunăre.",
      en: "Golubac Fortress is a medieval ruined castle sitting majestically at the entrance to the Iron Gates gorge on the Danube."
    },
    facts: {
      de: ["An der Donau", "Eingang zum Eisernen Tor", "Mittelalterliche Burg", "Zehn Türme", "Touristenattraktion"],
      hu: ["A Duna mentén", "A Vaskapu bejárata", "Középkori vár", "Tíz torony", "Turisztikai látványosság"],
      ro: ["Pe Dunăre", "Intrarea în Porțile de Fier", "Cetate medievală", "Zece turnuri", "Atracție turistică"],
      en: ["On the Danube", "Entrance to the Iron Gates", "Medieval castle", "Ten towers", "Tourist attraction"]
    }
  },
  {
    id: "archaeology-felix-romuliana",
    type: "monument",
    parent: "country-serbia",
    coords: [22.1861, 43.8994],
    name: { de: "Felix Romuliana", hu: "Felix Romuliana", ro: "Felix Romuliana", en: "Felix Romuliana" },
    description: {
      de: "Felix Romuliana ist eine antike römische Residenz des Kaisers Galerius im Osten Serbiens, ein UNESCO-Weltkulturerbe.",
      hu: "A Felix Romuliana Galerius római császár ókori rezidenciája Kelet-Szerbiában, UNESCO világörökségi helyszín.",
      ro: "Felix Romuliana este o veche reședință romană a împăratului Galerius în estul Serbiei, parte a Patrimoniului Mondial UNESCO.",
      en: "Felix Romuliana is an ancient Roman residence of Emperor Galerius in eastern Serbia, a UNESCO World Heritage Site."
    },
    facts: {
      de: ["UNESCO-Weltkulturerbe", "Römischer Kaiserpalast", "Mosaike", "Nahe Zaječar", "Antike Ruinen"],
      hu: ["UNESCO Világörökség", "Római császári palota", "Mozaikok", "Zaječar közelében", "Ókori romok"],
      ro: ["Patrimoniul Mondial UNESCO", "Palat imperial roman", "Mozaicuri", "Lângă Zaječar", "Ruine antice"],
      en: ["UNESCO World Heritage Site", "Roman imperial palace", "Mosaics", "Near Zaječar", "Ancient ruins"]
    }
  },
  {
    id: "monument-skull-tower",
    type: "monument",
    parent: "city-nis",
    coords: [21.9231, 43.3117],
    name: { de: "Schädelturm", hu: "Koponyatorony", ro: "Turnul Craniilor", en: "Skull Tower" },
    description: {
      de: "Der Schädelturm (Ćele Kula) in Niš ist ein Monument, das aus den Schädeln serbischer Rebellen während des Ersten Serbischen Aufstands erbaut wurde.",
      hu: "A niši Koponyatorony (Ćele Kula) egy emlékmű, amelyet a szerb lázadók koponyáiból építettek az első szerb felkelés idején.",
      ro: "Turnul Craniilor (Ćele Kula) din Niș este un monument construit din craniile rebelilor sârbi în timpul Primei Răscoale Sârbești.",
      en: "The Skull Tower (Ćele Kula) in Niš is a monument built from the skulls of Serbian rebels during the First Serbian Uprising."
    },
    facts: {
      de: ["Einzigartiges Denkmal", "Schädel der Rebellen", "Erster Serbischer Aufstand", "Osmanische Herrschaft", "In Niš"],
      hu: ["Egyedülálló emlékmű", "Lázadók koponyái", "Első szerb felkelés", "Oszmán uralom", "Nišben"],
      ro: ["Monument unic", "Craniile rebelilor", "Prima Răscoală Sârbă", "Dominația otomană", "În Niș"],
      en: ["Unique monument", "Skulls of rebels", "First Serbian Uprising", "Ottoman rule", "In Niš"]
    }
  },
  {
    id: "church-saint-sava",
    type: "church",
    parent: "city-belgrade",
    coords: [20.4686, 44.7981],
    name: { de: "Tempel des Heiligen Sava", hu: "Szent Száva-templom", ro: "Catedrala Sfântul Sava", en: "Temple of Saint Sava" },
    description: {
      de: "Der Tempel des Heiligen Sava in Belgrad ist eine der größten orthodoxen Kirchen der Welt und ein dominierendes Wahrzeichen der Stadt.",
      hu: "A belgrádi Szent Száva-templom a világ egyik legnagyobb ortodox temploma, és a város meghatározó jelképe.",
      ro: "Catedrala Sfântul Sava din Belgrad este una dintre cele mai mari biserici ortodoxe din lume și un simbol dominant al orașului.",
      en: "The Temple of Saint Sava in Belgrade is one of the largest Orthodox churches in the world and a dominating landmark of the city."
    },
    facts: {
      de: ["Größte orthodoxe Kirche auf dem Balkan", "Dem Heiligen Sava gewidmet", "Dominante Kuppel", "Belgrader Wahrzeichen", "Mosaik-Ausstattung"],
      hu: ["A Balkán legnagyobb ortodox temploma", "Szent Szávának szentelve", "Domináns kupola", "Belgrádi jelkép", "Mozaik díszítés"],
      ro: ["Cea mai mare biserică ortodoxă din Balcani", "Dedicată Sfântului Sava", "Cupolă dominantă", "Simbol al Belgradului", "Decorațiuni cu mozaic"],
      en: ["Largest Orthodox church in the Balkans", "Dedicated to Saint Sava", "Dominating dome", "Belgrade landmark", "Mosaic interior"]
    }
  },
  {
    id: "castle-smederevo",
    type: "castle",
    parent: "country-serbia",
    coords: [20.9292, 44.6669],
    name: { de: "Festung Smederevo", hu: "Szendrői vár", ro: "Cetatea Smederevo", en: "Smederevo Fortress" },
    description: {
      de: "Die Festung Smederevo ist eine der größten mittelalterlichen Flachlandfestungen in Europa, gelegen an der Donau.",
      hu: "A Szendrői vár Európa egyik legnagyobb középkori síkvidéki erődítménye, a Duna mentén fekszik.",
      ro: "Cetatea Smederevo este una dintre cele mai mari fortărețe medievale de șes din Europa, situată pe Dunăre.",
      en: "Smederevo Fortress is one of the largest medieval flatland fortresses in Europe, located on the Danube."
    },
    facts: {
      de: ["Größte Flachlandfestung Europas", "An der Donau", "15. Jahrhundert", "Ehemalige Hauptstadt", "Beeindruckende Mauern"],
      hu: ["Európa legnagyobb síkvidéki erődje", "A Duna mentén", "15. század", "Egykori főváros", "Lenyűgöző falak"],
      ro: ["Cea mai mare fortăreață de șes din Europa", "Pe Dunăre", "Secolul al XV-lea", "Fostă capitală", "Ziduri impresionante"],
      en: ["Largest flatland fortress in Europe", "On the Danube", "15th century", "Former capital", "Impressive walls"]
    }
  },
  {
    id: "monument-oplenac",
    type: "church",
    parent: "region-sumadija",
    coords: [20.6833, 44.2500],
    name: { de: "Oplenac", hu: "Oplenac", ro: "Oplenac", en: "Oplenac" },
    description: {
      de: "Oplenac ist der Hügel in Topola, wo sich die prachtvolle St.-Georgs-Kirche und das Mausoleum der serbischen Königsfamilie Karadjordjevic befinden.",
      hu: "Oplenac a Topola közelében lévő domb, ahol a gyönyörű Szent György-templom és a Karađorđević szerb királyi család mauzóleuma található.",
      ro: "Oplenac este dealul din Topola, unde se află magnifica Biserică Sfântul Gheorghe și mausoleul familiei regale sârbe Karadjordjevic.",
      en: "Oplenac is the hill in Topola where the magnificent St. George's Church and the mausoleum of the Serbian Karadjordjevic royal family are located."
    },
    facts: {
      de: ["Königliches Mausoleum", "St.-Georgs-Kirche", "Atemberaubende Mosaike", "Topola", "Karadjordjevic Dynastie"],
      hu: ["Királyi mauzóleum", "Szent György-templom", "Lélegzetelállító mozaikok", "Topola", "Karađorđević dinasztia"],
      ro: ["Mausoleu regal", "Biserica Sfântul Gheorghe", "Mozaicuri uimitoare", "Topola", "Dinastia Karadjordjevic"],
      en: ["Royal mausoleum", "St. George's Church", "Stunning mosaics", "Topola", "Karadjordjevic dynasty"]
    }
  },
  {
    id: "spa-vrnjacka-banja",
    type: "nature",
    parent: "country-serbia",
    coords: [20.8953, 43.6267],
    name: { de: "Vrnjačka Banja", hu: "Vrnjačka Banja", ro: "Vrnjačka Banja", en: "Vrnjačka Banja" },
    description: {
      de: "Vrnjačka Banja ist der bekannteste und beliebteste Kurort in Serbien, bekannt für seine heilenden Mineralquellen.",
      hu: "Vrnjačka Banja Szerbia legismertebb és legnépszerűbb gyógyfürdője, amely gyógyító ásványvízforrásairól híres.",
      ro: "Vrnjačka Banja este cel mai faimos și popular centru balnear din Serbia, cunoscut pentru izvoarele sale minerale curative.",
      en: "Vrnjačka Banja is the most famous and popular spa town in Serbia, known for its healing mineral springs."
    },
    facts: {
      de: ["Bekanntester Kurort", "Mineralquellen", "Zentralserbien", "Liebesbrücke", "Lange Kurtradition"],
      hu: ["Legismertebb gyógyfürdő", "Ásványvízforrások", "Közép-Szerbia", "Szerelem hídja", "Nagy fürdőhagyomány"],
      ro: ["Cea mai cunoscută stațiune", "Izvoare minerale", "Serbia Centrală", "Podul iubirii", "Tradiție balneară îndelungată"],
      en: ["Most famous spa resort", "Mineral springs", "Central Serbia", "Bridge of Love", "Long spa tradition"]
    }
  },
  {
    id: "spa-sokobanja",
    type: "nature",
    parent: "country-serbia",
    coords: [21.8744, 43.6450],
    name: { de: "Sokobanja", hu: "Sokobanja", ro: "Sokobanja", en: "Sokobanja" },
    description: {
      de: "Sokobanja ist ein historischer Kurort im Osten Serbiens, umgeben von Bergen und bekannt für sein heilendes Klima.",
      hu: "Sokobanja egy történelmi gyógyfürdő Kelet-Szerbiában, hegyekkel körülvéve, amely gyógyító klímájáról ismert.",
      ro: "Sokobanja este o stațiune istorică în estul Serbiei, înconjurată de munți și recunoscută pentru climatul său curativ.",
      en: "Sokobanja is a historic spa town in eastern Serbia, surrounded by mountains and known for its healing climate."
    },
    facts: {
      de: ["Luftkurort", "Ostserbien", "Historische Hammams", "Moravica-Fluss", "Hoher Ozongehalt"],
      hu: ["Klimatikus gyógyhely", "Kelet-Szerbia", "Történelmi hammamok", "Moravica-folyó", "Magas ózontartalom"],
      ro: ["Stațiune climatică", "Estul Serbiei", "Hamamuri istorice", "Râul Moravica", "Conținut ridicat de ozon"],
      en: ["Air spa", "Eastern Serbia", "Historical hammams", "Moravica River", "High ozone content"]
    }
  }
];

// 5. Természet (Hegyek, Tavak, Nemzeti Parkok)
export const serbiaNature: POI[] = [
  {
    id: "nature-tara-national-park",
    type: "nature",
    parent: "country-serbia",
    coords: [19.4500, 43.8500],
    name: { de: "Nationalpark Tara", hu: "Tara Nemzeti Park", ro: "Parcul Național Tara", en: "Tara National Park" },
    description: {
      de: "Der Nationalpark Tara im Westen Serbiens ist berühmt für seine tiefen Wälder, spektakulären Aussichtspunkte und die Drina-Schlucht.",
      hu: "A nyugat-szerbiai Tara Nemzeti Park mély erdeiről, látványos kilátóiról és a Drina-szurdokról híres.",
      ro: "Parcul Național Tara din vestul Serbiei este faimos pentru pădurile sale adânci, punctele de belvedere spectaculoase și defileul Drinei.",
      en: "Tara National Park in western Serbia is famous for its deep forests, spectacular viewpoints, and the Drina Gorge."
    },
    facts: {
      de: ["Westserbien", "Drina-Schlucht", "Aussichtspunkt Banjska Stena", "Bärenpopulation", "Dichte Wälder"],
      hu: ["Nyugat-Szerbia", "Drina-szurdok", "Banjska Stena kilátó", "Medvepopuláció", "Sűrű erdők"],
      ro: ["Vestul Serbiei", "Defileul Drinei", "Punctul de belvedere Banjska Stena", "Populație de urși", "Păduri dese"],
      en: ["Western Serbia", "Drina Gorge", "Banjska Stena viewpoint", "Bear population", "Dense forests"]
    }
  },
  {
    id: "nature-djerdap-national-park",
    type: "nature",
    parent: "country-serbia",
    coords: [22.1500, 44.5833],
    name: { de: "Nationalpark Đerdap", hu: "Vaskapu Nemzeti Park", ro: "Parcul Național Đerdap", en: "Đerdap National Park" },
    description: {
      de: "Der Nationalpark Đerdap umfasst die beeindruckende Eiserne Tor-Schlucht, wo die Donau durch die Karpaten bricht.",
      hu: "A Vaskapu Nemzeti Park magában foglalja a lenyűgöző Vaskapu-szorost, ahol a Duna áttöri a Kárpátokat.",
      ro: "Parcul Național Đerdap include impresionantul defileu Porțile de Fier, unde Dunărea străpunge Carpații.",
      en: "Đerdap National Park encompasses the impressive Iron Gates gorge, where the Danube breaks through the Carpathian Mountains."
    },
    facts: {
      de: ["Eisernes Tor", "Längste Schlucht Europas", "An der Donau", "Reiche Flora und Fauna", "Lepenski Vir in der Nähe"],
      hu: ["Vaskapu", "Európa leghosszabb szurdoka", "A Duna mentén", "Gazdag növény- és állatvilág", "Lepenski Vir a közelben"],
      ro: ["Porțile de Fier", "Cel mai lung defileu din Europa", "Pe Dunăre", "Floră și faună bogate", "Lepenski Vir în apropiere"],
      en: ["Iron Gates", "Europe's longest gorge", "On the Danube", "Rich flora and fauna", "Lepenski Vir nearby"]
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
    facts: {
      de: ["Größtes Skigebiet", "Nationalpark", "Gipfel Pančićev Vrh", "Sommer- und Wintertourismus", "Biodiversität"],
      hu: ["Legnagyobb síterep", "Nemzeti Park", "Pančićev Vrh csúcs", "Nyári és téli turizmus", "Biológiai sokféleség"],
      ro: ["Cea mai mare stațiune de schi", "Parc Național", "Vârful Pančićev Vrh", "Turism de vară și de iarnă", "Biodiversitate"],
      en: ["Largest ski resort", "National Park", "Pančićev Vrh peak", "Summer and winter tourism", "Biodiversity"]
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
    facts: {
      de: ["Nationalpark", "Orthodoxe Klöster", "Weinbau", "Nahe Novi Sad", "Hügel in der Pannonischen Tiefebene"],
      hu: ["Nemzeti Park", "Ortodox kolostorok", "Borászat", "Újvidék közelében", "Dombvidék a Pannon-síkságon"],
      ro: ["Parc Național", "Mănăstiri ortodoxe", "Viticultură", "Lângă Novi Sad", "Deal în Câmpia Panonică"],
      en: ["National Park", "Orthodox monasteries", "Viticulture", "Near Novi Sad", "Hill in the Pannonian Plain"]
    }
  },
  {
    id: "nature-uvac",
    type: "nature",
    parent: "country-serbia",
    coords: [19.9250, 43.3611],
    name: { de: "Uvac-Schlucht", hu: "Uvac-kanyon", ro: "Defileul Uvac", en: "Uvac Canyon" },
    description: {
      de: "Die Uvac-Schlucht ist berühmt für ihre spektakulären Mäander und als Lebensraum des seltenen Gänsegeiers.",
      hu: "Az Uvac-kanyon látványos kanyarulatairól és a ritka fakó keselyű élőhelyeként híres.",
      ro: "Defileul Uvac este faimos pentru meandrele sale spectaculoase și ca habitat al rarisimului vultur sur.",
      en: "The Uvac Canyon is famous for its spectacular meanders and as a habitat for the rare griffon vulture."
    },
    facts: {
      de: ["Flussmäander", "Gänsegeier", "Südwest-Serbien", "Aussichtspunkt Molitva", "Naturschutzgebiet"],
      hu: ["Folyókanyarulatok", "Fakó keselyű", "Délnyugat-Szerbia", "Molitva kilátó", "Természetvédelmi terület"],
      ro: ["Meandrele râului", "Vulturul sur", "Sud-vestul Serbiei", "Punctul de belvedere Molitva", "Rezervație naturală"],
      en: ["River meanders", "Griffon vulture", "Southwestern Serbia", "Molitva viewpoint", "Nature reserve"]
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
    facts: {
      de: ["Bergresort", "Gesundheitstourismus", "Goldene Kiefer", "Westserbien", "Goldola-Seilbahn"],
      hu: ["Hegyi üdülőhely", "Egészségturizmus", "Aranyfenyő", "Nyugat-Szerbia", "Goldola felvonó"],
      ro: ["Stațiune montană", "Turism de sănătate", "Pinul auriu", "Vestul Serbiei", "Telecabina Goldola"],
      en: ["Mountain resort", "Health tourism", "Golden pine", "Western Serbia", "Goldola cable car"]
    }
  },
  {
    id: "nature-djavolja-varos",
    type: "nature",
    parent: "country-serbia",
    coords: [21.4000, 42.9833],
    name: { de: "Đavolja Varoš", hu: "Ördögváros (Đavolja Varoš)", ro: "Đavolja Varoš", en: "Devil's Town (Đavolja Varoš)" },
    description: {
      de: "Đavolja Varoš (Teufelsstadt) ist eine einzigartige Felsformation im Süden Serbiens, die aus Hunderten von Erdpyramiden besteht.",
      hu: "Az Ördögváros (Đavolja Varoš) egy egyedülálló sziklaalakzat Dél-Szerbiában, amely több száz földpiramisból áll.",
      ro: "Đavolja Varoš (Orașul Diavolului) este o formațiune stâncoasă unică în sudul Serbiei, formată din sute de piramide de pământ.",
      en: "Devil's Town (Đavolja Varoš) is a unique rock formation in southern Serbia, consisting of hundreds of earth pyramids."
    },
    facts: {
      de: ["Naturphänomen", "Erdpyramiden", "Südserbien", "Säuresquellen", "Mystische Legenden"],
      hu: ["Természeti jelenség", "Földpiramisok", "Dél-Szerbia", "Savas források", "Misztikus legendák"],
      ro: ["Fenomen natural", "Piramide de pământ", "Sudul Serbiei", "Izvoare acide", "Legende mistice"],
      en: ["Natural phenomenon", "Earth pyramids", "Southern Serbia", "Acid springs", "Mystical legends"]
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
    facts: {
      de: ["Flachwassersee", "Nahe Subotica", "Tourismus-Zentrum", "Jugendstil", "Filmfestival"],
      hu: ["Sekélyvizű tó", "Szabadka közelében", "Turisztikai központ", "Szecesszió", "Filmfesztivál"],
      ro: ["Lac cu apă puțin adâncă", "Lângă Subotica", "Centru turistic", "Art Nouveau", "Festival de film"],
      en: ["Shallow lake", "Near Subotica", "Tourism center", "Art Nouveau", "Film festival"]
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
    facts: {
      de: ["Wichtigster Fluss", "Fließt durch Belgrad", "Eisernes Tor", "Grenzfluss", "Schifffahrtsweg"],
      hu: ["Legfontosabb folyó", "Átfolyik Belgrádon", "Vaskapu", "Határfolyó", "Hajózási útvonal"],
      ro: ["Cel mai important râu", "Curge prin Belgrad", "Porțile de Fier", "Râu de frontieră", "Cale navigabilă"],
      en: ["Most important river", "Flows through Belgrade", "Iron Gates", "Border river", "Navigable waterway"]
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
    facts: {
      de: ["Mündet in die Donau", "Fließt durch Belgrad", "Wichtiger Wasserweg", "Trennt Zentralserbien von der Vojvodina", "Zahlreiche Brücken"],
      hu: ["A Dunába ömlik", "Átfolyik Belgrádon", "Fontos vízi út", "Elválasztja Közép-Szerbiát a Vajdaságtól", "Számos híd"],
      ro: ["Se varsă în Dunăre", "Curge prin Belgrad", "Cale navigabilă importantă", "Separă Serbia Centrală de Voivodina", "Multe poduri"],
      en: ["Flows into the Danube", "Flows through Belgrade", "Important waterway", "Separates Central Serbia from Vojvodina", "Numerous bridges"]
    }
  }
];

export const serbiaDistrictPoi: POI[] = [
  // RS-001 Severno-Backi
  {
    id: "RS-001-subotica",
    type: "city",
    parent: "RS-001",
    coords: [19.6667, 46.1000],
    name: { de: "Subotica", hu: "Szabadka", ro: "Subotica", en: "Subotica" },
    description: {
      de: "Die nördlichste Stadt Serbiens, bekannt für ihre Jugendstilarchitektur und multikulturelle Atmosphäre.",
      hu: "Szerbia legészakibb városa, amely szecessziós építészetéről és multikulturális légköréről ismert.",
      ro: "Cel mai nordic oraș din Serbia, cunoscut pentru arhitectura sa Art Nouveau și atmosfera multiculturală.",
      en: "The northernmost city in Serbia, known for its Art Nouveau architecture and multicultural atmosphere."
    },
    facts: {
      de: ["Jugendstil-Rathaus", "Grenzstadt zu Ungarn", "Bedeutende ungarische Minderheit"],
      hu: ["Szecessziós városháza", "Magyar határ menti város", "Jelentős magyar közösség"],
      ro: ["Primăria Art Nouveau", "Oraș de graniță cu Ungaria", "Minoritate maghiară semnificativă"],
      en: ["Art Nouveau City Hall", "Border city with Hungary", "Significant Hungarian minority"]
    }
  },
  {
    id: "RS-001-palic",
    type: "lake",
    parent: "RS-001",
    coords: [19.7611, 46.0667],
    name: { de: "Palić-See", hu: "Palicsi-tó", ro: "Lacul Palić", en: "Lake Palić" },
    description: {
      de: "Ein beliebter Ferienort in der Nähe von Subotica mit einem wunderschönen See, Parks und Jugendstilgebäuden.",
      hu: "Népszerű üdülőhely Szabadka közelében, gyönyörű tóval, parkokkal és szecessziós épületekkel.",
      ro: "O stațiune populară lângă Subotica, cu un lac frumos, parcuri și clădiri Art Nouveau.",
      en: "A popular resort near Subotica with a beautiful lake, parks, and Art Nouveau buildings."
    },
    facts: {
      de: ["Großer Zoo", "Wasserturm", "Sommer-Filmfestival"],
      hu: ["Nagy állatkert", "Víztorony", "Nyári filmfesztivál"],
      ro: ["Grădină zoologică mare", "Turnul de apă", "Festival de film de vară"],
      en: ["Large zoo", "Water tower", "Summer film festival"]
    }
  },
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
    facts: {
      de: ["Stadt der Alleen", "Gemälde 'Schlacht von Zenta'", "Reiche Kulturgeschichte"],
      hu: ["A fasorok városa", "Zentai csata óriásfestmény", "Gazdag kultúrtörténet"],
      ro: ["Orașul aleilor", "Pictura 'Bătălia de la Zenta'", "Istorie culturală bogată"],
      en: ["City of avenues", "'Battle of Senta' painting", "Rich cultural history"]
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
    facts: {
      de: ["Jelen-Brauerei", "Donauhafen", "Fischersymposium"],
      hu: ["Jelen sörgyár", "Dunai kikötő", "Halászati hagyományok"],
      ro: ["Fabrica de bere Jelen", "Port la Dunăre", "Tradiții pescărești"],
      en: ["Jelen Brewery", "Danube port", "Fishing traditions"]
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
    facts: {
      de: ["Kika das Mammut", "Kürbistage", "Waldohreulen-Winterquartier"],
      hu: ["Kika a mammut", "Témanapok (tökfesztivál)", "Réti fülesbaglyok telelőhelye"],
      ro: ["Mamutul Kika", "Zilele dovleacului", "Iernarea bufnițelor cu urechi lungi"],
      en: ["Kika the mammoth", "Pumpkin Days", "Long-eared owl wintering site"]
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
    facts: {
      de: ["Theiß-Ufer", "Schlachtdenkmal", "Prächtiges Rathaus"],
      hu: ["Tisza-part", "Csata emlékműve", "Pompás városháza"],
      ro: ["Malul Tisei", "Monumentul bătăliei", "Primărie splendidă"],
      en: ["Tisa riverbank", "Battle monument", "Splendid city hall"]
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
    facts: {
      de: ["Beli Most (Weiße Brücke)", "Pašin Konak", "Geburtsort von Bora Stanković"],
      hu: ["Beli Most (Fehér híd)", "Pašin Konak", "Bora Stanković szülőhelye"],
      ro: ["Beli Most (Podul Alb)", "Pašin Konak", "Locul de naștere al lui Bora Stanković"],
      en: ["Beli Most (White Bridge)", "Pasha's Residence", "Birthplace of Bora Stanković"]
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
    facts: {
      de: ["Gegründet von Kaiser Romanos IV.", "Geistiges Zentrum", "Inmitten unberührter Natur"],
      hu: ["IV. Rómanosz császár alapította", "Szellemi központ", "Érintetlen természetben"],
      ro: ["Fondată de împăratul Romanos al IV-lea", "Centru spiritual", "În mijlocul naturii virgine"],
      en: ["Founded by Emperor Romanos IV", "Spiritual center", "In untouched nature"]
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
    facts: {
      de: ["Kupfertagebau", "Industrieerbe", "Nahegelegener Bor-See"],
      hu: ["Külszíni rézbánya", "Ipari örökség", "Közeli Bori-tó"],
      ro: ["Exploatare de cupru în carieră", "Moștenire industrială", "Lacul Bor din apropiere"],
      en: ["Copper open-pit mine", "Industrial heritage", "Nearby Lake Bor"]
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
    facts: {
      de: ["Negotiner Weinkeller", "Heimat von Stevan Mokranjac", "Nahe dem Eisernen Tor"],
      hu: ["Negotini borpincék", "Stevan Mokranjac hazája", "A Vaskapu közelében"],
      ro: ["Cramele din Negotin", "Casa lui Stevan Mokranjac", "Lângă Porțile de Fier"],
      en: ["Negotin wine cellars", "Home of Stevan Mokranjac", "Near the Iron Gates"]
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
    facts: {
      de: ["Gitarijada Rockfestival", "Nationalmuseum", "Tor nach Ostserbien"],
      hu: ["Gitarijada rockfesztivál", "Nemzeti Múzeum", "Kelet-Szerbia kapuja"],
      ro: ["Festivalul de rock Gitarijada", "Muzeul Național", "Poarta către estul Serbiei"],
      en: ["Gitarijada rock festival", "National Museum", "Gateway to eastern Serbia"]
    }
  },
  {
    id: "RS-006-felix-romuliana-site",
    type: "historical",
    parent: "RS-006",
    coords: [22.1861, 43.8994],
    name: { de: "Felix Romuliana", hu: "Felix Romuliana", ro: "Felix Romuliana", en: "Felix Romuliana" },
    description: {
      de: "Die kaiserliche römische Residenz des Galerius, eine der bedeutendsten spätantiken Stätten in Europa.",
      hu: "Galerius császári római rezidenciája, Európa egyik legjelentősebb késő antik lelőhelye.",
      ro: "Reședința imperială romană a lui Galerius, unul dintre cele mai importante situri din antichitatea târzie din Europa.",
      en: "The imperial Roman residence of Galerius, one of the most important late antique sites in Europe."
    },
    facts: {
      de: ["UNESCO-Weltkulturerbe", "Prächtige Mosaike", "Gut erhaltene Festungsmauern"],
      hu: ["UNESCO Világörökség", "Pompás mozaikok", "Jó állapotú várfalak"],
      ro: ["Patrimoniul Mondial UNESCO", "Mozaicuri magnifice", "Ziduri de cetate bine conservate"],
      en: ["UNESCO World Heritage Site", "Magnificent mosaics", "Well-preserved fortress walls"]
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
    facts: {
      de: ["Piroter Kilim", "Festung Momčilov Grad", "Käse von Pirot"],
      hu: ["Piroti kilim (szőnyeg)", "Momčilov Grad erőd", "Piroti sajt"],
      ro: ["Kilim de Pirot", "Cetatea Momčilov Grad", "Brânză de Pirot"],
      en: ["Pirot kilim", "Momčilov Grad Fortress", "Pirot cheese"]
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
    facts: {
      de: ["Höchster Gipfel: Midžor", "Wintersportzentrum", "Zahlreiche Wasserfälle"],
      hu: ["Legmagasabb csúcs: Midžor", "Téli sportközpont", "Számos vízesés"],
      ro: ["Cel mai înalt vârf: Midžor", "Centru de sporturi de iarnă", "Numeroase cascade"],
      en: ["Highest peak: Midžor", "Winter sports center", "Numerous waterfalls"]
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
    facts: {
      de: ["Grill-Hauptstadt", "Roštiljijada Festival", "Historische Textilindustrie"],
      hu: ["A grill fővárosa", "Roštiljijada fesztivál", "Történelmi textilipar"],
      ro: ["Capitala grătarului", "Festivalul Roštiljijada", "Industrie textilă istorică"],
      en: ["Grill capital", "Roštiljijada festival", "Historical textile industry"]
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
    facts: {
      de: ["Bedeutende archäologische Stätte", "Frühchristliche Basiliken", "Geplante Stadt"],
      hu: ["Jelentős régészeti lelőhely", "Korakeresztény bazilikák", "Tervezett város"],
      ro: ["Sit arheologic important", "Bazilici creștine timpurii", "Oraș planificat"],
      en: ["Important archaeological site", "Early Christian basilicas", "Planned city"]
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
    facts: {
      de: ["Stadt der Könige", "Zusammenfluss von Ibar und Morava", "Nahe Kloster Žiča"],
      hu: ["Királyok városa", "Az Ibar és Morava találkozása", "A Žiča kolostor közelében"],
      ro: ["Orașul regilor", "Confluența Ibarului cu Morava", "Lângă mănăstirea Žiča"],
      en: ["City of Kings", "Confluence of Ibar and Morava", "Near Žiča Monastery"]
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
    facts: {
      de: ["Krönungskirche", "Sitz des ersten Erzbischofs", "Einzigartige rote Farbe"],
      hu: ["Koronázótemplom", "Az első érsek székhelye", "Egyedülálló vörös szín"],
      ro: ["Biserica de încoronare", "Sediul primului arhiepiscop", "Culoare roșie unică"],
      en: ["Coronation church", "Seat of the first archbishop", "Unique red color"]
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
    facts: {
      de: ["Wachsfigurenkabinett", "Großer Wasserpark", "Pomoravlje-Zentrum"],
      hu: ["Panoptikum", "Nagy aquapark", "Pomoravlje központja"],
      ro: ["Muzeul figurilor de ceară", "Parc acvatic mare", "Centrul Pomoravlje"],
      en: ["Wax museum", "Large water park", "Pomoravlje center"]
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
    facts: {
      de: ["Gegründet von Stefan Lazarević", "Elf Verteidigungstürme", "Resava-Schule für Literatur"],
      hu: ["Stefan Lazarević alapította", "Tizenegy védőtorony", "Resava irodalmi iskola"],
      ro: ["Fondată de Stefan Lazarević", "Unsprezece turnuri de apărare", "Școala literară Resava"],
      en: ["Founded by Stefan Lazarević", "Eleven defense towers", "Resava school of literature"]
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
    facts: {
      de: ["Hisar-Hügel", "Römische Thermen", "Weinregion"],
      hu: ["Hisar-domb", "Római fürdők", "Borvidék"],
      ro: ["Dealul Hisar", "Terme romane", "Regiune viticolă"],
      en: ["Hisar Hill", "Roman baths", "Wine region"]
    }
  },
  {
    id: "RS-011-djavolja-varos-site",
    type: "nature",
    parent: "RS-011",
    coords: [21.4000, 42.9833],
    name: { de: "Đavolja Varoš", hu: "Ördögváros", ro: "Đavolja Varoš", en: "Devil's Town" },
    description: {
      de: "Ein seltenes Naturphänomen mit Hunderten von Erdpyramiden und zwei Quellen mit extrem saurem Wasser.",
      hu: "Ritka természeti jelenség több száz földpiramissal és két extrém savas vizű forrással.",
      ro: "Un fenomen natural rar cu sute de piramide de pământ și două izvoare cu apă extrem de acidă.",
      en: "A rare natural phenomenon with hundreds of earth pyramids and two springs of extremely acidic water."
    },
    facts: {
      de: ["Erdpyramiden", "Säurequellen", "Mystische Formationen"],
      hu: ["Földpiramisok", "Savas források", "Misztikus képződmények"],
      ro: ["Piramide de pământ", "Izvoare acide", "Formațiuni mistice"],
      en: ["Earth pyramids", "Acid springs", "Mystical formations"]
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
    facts: {
      de: ["Alte Burg Užice", "Erstes Wasserkraftwerk (Tesla-Prinzip)", "Tor zu Zlatibor"],
      hu: ["Régi uzicei vár", "Első vízerőmű (Tesla-elv)", "Zlatibor kapuja"],
      ro: ["Cetatea veche Užice", "Prima hidrocentrală (principiul Tesla)", "Poarta către Zlatibor"],
      en: ["Old Užice Fortress", "First hydroelectric plant (Tesla principle)", "Gateway to Zlatibor"]
    }
  },
  {
    id: "RS-012-tara-national-park-site",
    type: "nature",
    parent: "RS-012",
    coords: [19.4500, 43.8500],
    name: { de: "Nationalpark Tara", hu: "Tara Nemzeti Park", ro: "Parcul Național Tara", en: "Tara National Park" },
    description: {
      de: "Ein Naturparadies mit dichten Nadelwäldern, tiefen Schluchten und spektakulären Ausblicken auf die Drina.",
      hu: "Természeti paradicsom sűrű fenyvesekkel, mély szurdokokkal és látványos kilátással a Drinára.",
      ro: "Un paradis natural cu păduri dense de conifere, defilee adânci și vederi spectaculoase asupra Drinei.",
      en: "A natural paradise with dense coniferous forests, deep canyons, and spectacular views of the Drina."
    },
    facts: {
      de: ["Pančić-Fichte", "Aussichtspunkt Banjska Stena", "Bärenreservat"],
      hu: ["Pančić-lucfenyő", "Banjska Stena kilátó", "Medverezervátum"],
      ro: ["Molidul lui Pančić", "Punct de belvedere Banjska Stena", "Rezervație de urși"],
      en: ["Pančić's spruce", "Banjska Stena viewpoint", "Bear sanctuary"]
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
    facts: {
      de: ["Antikes Sirmium", "Kaiserpalast", "An der Save"],
      hu: ["Ókori Sirmium", "Császári palota", "A Száva partján"],
      ro: ["Vechiul Sirmium", "Palatul Imperial", "Pe râul Sava"],
      en: ["Ancient Sirmium", "Imperial Palace", "On the Sava river"]
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
    facts: {
      de: ["Mausoleum serbischer Könige", "Barockarchitektur", "Fruška Gora Region"],
      hu: ["Szerb királyok mauzóleuma", "Barokk építészet", "Tarcal-hegység vidéke"],
      ro: ["Mausoleul regilor sârbi", "Arhitectură barocă", "Regiunea Fruška Gora"],
      en: ["Mausoleum of Serbian kings", "Baroque architecture", "Fruška Gora region"]
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
    facts: {
      de: ["Festung Šabac", "Handelszentrum", "An der Save"],
      hu: ["Szabácsi vár", "Kereskedelmi központ", "A Száva partján"],
      ro: ["Cetatea Šabac", "Centru comercial", "Pe râul Sava"],
      en: ["Šabac Fortress", "Trade center", "On the Sava river"]
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
    facts: {
      de: ["Zentrum der Alphabetisierung", "Vuk Karadžić Schule", "Orthodoxe Tradition"],
      hu: ["Az írástudás központja", "Vuk Karadžić iskolája", "Ortodox hagyomány"],
      ro: ["Centru de alfabetizare", "Școala lui Vuk Karadžić", "Tradiție ortodoxă"],
      en: ["Center of literacy", "Vuk Karadžić's school", "Orthodox tradition"]
    }
  },
  // RS-015 Južno-Backi
  {
    id: "RS-015-novi-sad-city",
    type: "city",
    parent: "RS-015",
    coords: [19.8369, 45.2671],
    name: { de: "Novi Sad", hu: "Újvidék", ro: "Novi Sad", en: "Novi Sad" },
    description: {
      de: "Die Hauptstadt der Vojvodina, eine lebendige Kulturstadt an der Donau.",
      hu: "A Vajdaság fővárosa, pezsgő kulturális város a Duna mentén.",
      ro: "Capitala Voivodinei, un oraș cultural vibrant pe Dunăre.",
      en: "The capital of Vojvodina, a vibrant cultural city on the Danube."
    },
    facts: {
      de: ["Serbisches Athen", "Freiheitsplatz", "Europäische Kulturhauptstadt 2022"],
      hu: ["Szerb Athén", "Szabadság tér", "Európa Kulturális Fővárosa 2022"],
      ro: ["Atena Sârbească", "Piața Libertății", "Capitală Europeană a Culturii 2022"],
      en: ["Serbian Athens", "Liberty Square", "European Capital of Culture 2022"]
    }
  },
  {
    id: "RS-015-petrovaradin-fort",
    type: "castle",
    parent: "RS-015",
    coords: [19.8631, 45.2522],
    name: { de: "Festung Petrovaradin", hu: "Péterváradi erőd", ro: "Cetatea Petrovaradin", en: "Petrovaradin Fortress" },
    description: {
      de: "Ein gewaltiges Festungssystem an der Donau, bekannt für seinen umgekehrten Uhrturm.",
      hu: "Hatalmas erődrendszer a Duna mentén, híres a fordított mutatójú óratornyáról.",
      ro: "Un sistem masiv de fortificații pe Dunăre, cunoscut pentru turnul său cu ceas inversat.",
      en: "A massive fortress system on the Danube, known for its reversed clock tower."
    },
    facts: {
      de: ["EXIT Festival", "Unterirdische Tunnel", "Gibraltar an der Donau"],
      hu: ["EXIT fesztivál", "Földalatti alagutak", "Gibraltár a Dunán"],
      ro: ["Festivalul EXIT", "Tuneluri subterane", "Gibraltarul de pe Dunăre"],
      en: ["EXIT Festival", "Underground tunnels", "Gibraltar on the Danube"]
    }
  },
  // RS-016 Srednje-Banatski
  {
    id: "RS-016-zrenjanin-city",
    type: "city",
    parent: "RS-016",
    coords: [20.3906, 45.3836],
    name: { de: "Zrenjanin", hu: "Nagybecskerek", ro: "Zrenjanin", en: "Zrenjanin" },
    description: {
      de: "Die größte Stadt des serbischen Banats, bekannt für ihre Brücken und architektonische Schönheit.",
      hu: "A szerbiai Bánát legnagyobb városa, hídjairól és építészeti szépségéről ismert.",
      ro: "Cel mai mare oraș din Banatul sârbesc, cunoscut pentru podurile sale și frumusețea arhitecturală.",
      en: "The largest city in the Serbian Banat, known for its bridges and architectural beauty."
    },
    facts: {
      de: ["Rathaus im Stadtzentrum", "Begej-Fluss", "Ehemaliges Groß-Betschkerek"],
      hu: ["Városháza a központban", "Béga-folyó", "Egykori Nagybecskerek"],
      ro: ["Primăria din centrul orașului", "Râul Bega", "Fostul Veliki Bečkerek"],
      en: ["City Hall in the center", "Begej river", "Former Veliki Bečkerek"]
    }
  },
  {
    id: "RS-016-carska-bara",
    type: "nature",
    parent: "RS-016",
    coords: [20.3800, 45.2500],
    name: { de: "Carska Bara", hu: "Császár-tó", ro: "Carska Bara", en: "Carska Bara" },
    description: {
      de: "Ein bedeutendes Vogelschutzgebiet und Naturschutzgebiet im Banat.",
      hu: "Jelentős madárrezervátum és természetvédelmi terület a Bánátban.",
      ro: "O importantă rezervație de păsări și arie naturală protejată din Banat.",
      en: "A significant bird sanctuary and nature reserve in the Banat region."
    },
    facts: {
      de: ["Sumpflandschaft", "Seltene Vögel", "Naturschutzgebiet"],
      hu: ["Mocsaras vidék", "Ritka madarak", "Természetvédelmi terület"],
      ro: ["Peisaj mlăștinos", "Păsări rare", "Rezervație naturală"],
      en: ["Marshland", "Rare birds", "Nature reserve"]
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
    facts: {
      de: ["Historische Leuchttürme", "Bedeutende Industrie", "Temesch-Ufer"],
      hu: ["Történelmi világítótornyok", "Jelentős ipar", "Temes-part"],
      ro: ["Faruri istorice", "Industrie importantă", "Malul râului Timiș"],
      en: ["Historical lighthouses", "Significant industry", "Tamiš riverbank"]
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
    facts: {
      de: ["Vršac-Turm", "Bischofspalast", "Große Weingüter"],
      hu: ["Verseci torony", "Püspöki palota", "Hatalmas borászatok"],
      ro: ["Turnul Vârșeț", "Palatul Episcopal", "Podgorii mari"],
      en: ["Vršac Tower", "Bishop's Palace", "Large wineries"]
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
    facts: {
      de: ["Friede von Passarowitz", "Ljubičevo-Pferdespiele", "Etno-Park Tulba"],
      hu: ["Pozsareváci béke", "Ljubičevói lovasjátékok", "Tulba etnopark"],
      ro: ["Pacea de la Passarowitz", "Jocurile de cai Ljubičevo", "Etno-parcul Tulba"],
      en: ["Peace of Passarowitz", "Ljubičevo Horse Games", "Tulba ethno-park"]
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
    facts: {
      de: ["Archäologischer Park", "Römische Gräber", "Mammut-Skelette gefunden"],
      hu: ["Régészeti park", "Római sírok", "Mammutcsontvázak lelethelye"],
      ro: ["Parc arheologic", "Morminte romane", "Schelete de mamut găsite"],
      en: ["Archaeological park", "Roman tombs", "Mammoth skeletons found"]
    }
  },
  // RS-019 Grad Beograd
  {
    id: "RS-019-belgrade-capital",
    type: "capital",
    parent: "RS-019",
    coords: [20.4489, 44.7866],
    name: { de: "Belgrad", hu: "Belgrád", ro: "Belgrad", en: "Belgrade" },
    description: {
      de: "Die pulsierende Hauptstadt Serbiens, ein Mix aus Geschichte und Moderne.",
      hu: "Szerbia lüktető fővárosa, a történelem és a modernitás keveréke.",
      ro: "Capitala vibrantă a Serbiei, un amestec de istorie și modernitate.",
      en: "The pulsating capital of Serbia, a mix of history and modernity."
    },
    facts: {
      de: ["Hauptstadt", "Nachtleben", "Zusammenfluss von Save und Donau"],
      hu: ["Főváros", "Éjszakai élet", "A Száva és Duna találkozása"],
      ro: ["Capitală", "Viață de noapte", "Confluența râurilor Sava și Dunărea"],
      en: ["Capital City", "Nightlife", "Confluence of Sava and Danube"]
    }
  },
  {
    id: "RS-019-kalemegdan-fort",
    type: "castle",
    parent: "RS-019",
    coords: [20.4500, 44.8236],
    name: { de: "Kalemegdan", hu: "Kalemegdan erőd", ro: "Cetatea Kalemegdan", en: "Kalemegdan Fortress" },
    description: {
      de: "Das Wahrzeichen Belgrads, eine historische Festung mit Blick auf die Flüsse.",
      hu: "Belgrád jelképe, történelmi erőd kilátással a folyókra.",
      ro: "Simbolul Belgradului, o cetate istorică cu vedere spre râuri.",
      en: "The symbol of Belgrade, a historical fortress overlooking the rivers."
    },
    facts: {
      de: ["Belgrads Ursprung", "Militärmuseum", "Siegerdenkmal (Pobednik)"],
      hu: ["Belgrád eredete", "Hadtörténeti Múzeum", "Győzelem emlékmű (Pobednik)"],
      ro: ["Originea Belgradului", "Muzeul militar", "Monumentul Învingătorului (Pobednik)"],
      en: ["Belgrade's origin", "Military museum", "Victor Monument (Pobednik)"]
    }
  },
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
    facts: {
      de: ["An der Donau", "Obstbaugebiet", "Großer Industriestandort"],
      hu: ["A Duna mentén", "Gyümölcstermesztő vidék", "Jelentős ipari központ"],
      ro: ["Pe malul Dunării", "Zonă pomicolă", "Centru industrial major"],
      en: ["On the Danube", "Fruit growing area", "Major industrial site"]
    }
  },
  {
    id: "RS-020-smederevo-fort",
    type: "castle",
    parent: "RS-020",
    coords: [20.9292, 44.6669],
    name: { de: "Festung Smederevo", hu: "Szendrői vár", ro: "Cetatea Smederevo", en: "Smederevo Fortress" },
    description: {
      de: "Die größte mittelalterliche Flachlandfestung in Serbien, erbaut von Despot Đurađ Branković.",
      hu: "Szerbia legnagyobb középkori síkvidéki erődje, amelyet Đurađ Branković despota építtetett.",
      ro: "Cea mai mare fortăreață medievală de șes din Serbia, construită de despotul Đurađ Branković.",
      en: "The largest medieval flatland fortress in Serbia, built by Despot Đurađ Branković."
    },
    facts: {
      de: ["25 Türme", "Donau-Ufer", "Letzte mittelalterliche Hauptstadt"],
      hu: ["25 torony", "Duna-part", "Az utolsó középkori főváros"],
      ro: ["25 de turnuri", "Malul Dunării", "Ultima capitală medievală"],
      en: ["25 towers", "Danube bank", "Last medieval capital"]
    }
  },
  // RS-021 Nišavski
  {
    id: "RS-021-nis-city",
    type: "city",
    parent: "RS-021",
    coords: [21.8958, 43.3209],
    name: { de: "Niš", hu: "Niš", ro: "Niș", en: "Niš" },
    description: {
      de: "Ein wichtiger Verkehrsknotenpunkt und eine der ältesten Städte auf dem Balkan.",
      hu: "Fontos közlekedési csomópont és a Balkán egyik legrégebbi városa.",
      ro: "Un nod de transport important și unul dintre cele mai vechi orașe din Balcani.",
      en: "An important transport hub and one of the oldest cities in the Balkans."
    },
    facts: {
      de: ["Niš-Festung", "Zentrum von Südserbien", "Nišava-Fluss"],
      hu: ["Niši erőd", "Dél-Szerbia központja", "Nišava-folyó"],
      ro: ["Cetatea Niș", "Centrul Serbiei de Sud", "Râul Nișava"],
      en: ["Niš Fortress", "Center of Southern Serbia", "Nišava River"]
    }
  },
  {
    id: "RS-021-skull-tower-monument",
    type: "monument",
    parent: "RS-021",
    coords: [21.9231, 43.3117],
    name: { de: "Schädelturm", hu: "Koponyatorony", ro: "Turnul Craniilor", en: "Skull Tower" },
    description: {
      de: "Ein makabres, aber historisch bedeutendes Denkmal aus dem 19. Jahrhundert.",
      hu: "Makabér, de történelmileg jelentős emlékmű a 19. századból.",
      ro: "Un monument macabru, dar important din punct de vedere istoric, din secolul al XIX-lea.",
      en: "A macabre but historically significant monument from the 19th century."
    },
    facts: {
      de: ["952 Schädel ursprünglich", "Befreiungskampf", "Einzigartig weltweit"],
      hu: ["Eredetileg 952 koponya", "Szabadságharc emléke", "Világszinten egyedülálló"],
      ro: ["Inițial 952 de cranii", "Lupta pentru eliberare", "Unic în lume"],
      en: ["952 skulls originally", "Liberation struggle", "Unique in the world"]
    }
  },
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
    facts: {
      de: ["Lazar-Stadt (Lazarevac)", "Lazarica-Kirche", "Kosovo-Epos Verbindung"],
      hu: ["Lázár városa (Lazarevac)", "Lazarica-templom", "Kapcsolat a rigómezei éposszal"],
      ro: ["Orașul lui Lazar", "Biserica Lazarica", "Legătura cu epopeea Kosovo"],
      en: ["Lazar's City", "Lazarica Church", "Link to the Kosovo epic"]
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
    facts: {
      de: ["Gegründet von Fürstin Milica", "Reich verzierte Fenster", "Malerische Lage"],
      hu: ["Milica fejedelemasszony alapította", "Gazdagon díszített ablakok", "Festői környezet"],
      ro: ["Fondată de prințesa Milica", "Ferestre bogat decorate", "Locație pitorească"],
      en: ["Founded by Princess Milica", "Richly decorated windows", "Picturesque setting"]
    }
  },
  // RS-023 Šumadijski
  {
    id: "RS-023-kragujevac-city",
    type: "city",
    parent: "RS-023",
    coords: [20.9167, 44.0167],
    name: { de: "Kragujevac", hu: "Kragujevac", ro: "Kragujevac", en: "Kragujevac" },
    description: {
      de: "Das wirtschaftliche und kulturelle Zentrum der Šumadija.",
      hu: "Šumadija gazdasági és kulturális központja.",
      ro: "Centrul economic și cultural al regiunii Šumadija.",
      en: "The economic and cultural center of Šumadija."
    },
    facts: {
      de: ["Erste moderne Hauptstadt", "Šumarice Gedenkpark", "Universität"],
      hu: ["Az első modern főváros", "Šumarice emlékpark", "Egyetemváros"],
      ro: ["Prima capitală modernă", "Parcul memorial Šumarice", "Universitate"],
      en: ["First modern capital", "Šumarice Memorial Park", "University"]
    }
  },
  {
    id: "RS-023-oplenac-hill",
    type: "historical",
    parent: "RS-023",
    coords: [20.6833, 44.2500],
    name: { de: "Oplenac", hu: "Oplenac", ro: "Oplenac", en: "Oplenac" },
    description: {
      de: "Das Mausoleum der königlichen Familie Karađorđević in Topola.",
      hu: "A Karađorđević királyi család mauzóleuma Topolában.",
      ro: "Mausoleul familiei regale Karađorđević din Topola.",
      en: "The mausoleum of the Karađorđević royal family in Topola."
    },
    facts: {
      de: ["Prächtige Mosaike", "St.-Georgs-Kirche", "Königliche Weingüter"],
      hu: ["Pompás mozaikok", "Szent György-templom", "Királyi borászatok"],
      ro: ["Mozaicuri magnifice", "Biserica Sfântul Gheorghe", "Crame regale"],
      en: ["Magnificent mosaics", "St. George's Church", "Royal wineries"]
    }
  },
  // RS-024 Moravicki
  {
    id: "RS-024-cacak-city",
    type: "city",
    parent: "RS-024",
    coords: [20.3497, 43.8914],
    name: { de: "Čačak", hu: "Čačak", ro: "Čačak", en: "Čačak" },
    description: {
      de: "Eine lebendige Stadt in Westserbien, bekannt für ihre Kultur und Industriegeschichte.",
      hu: "Élénk város Nyugat-Szerbiában, kultúrájáról és ipartörténetéről ismert.",
      ro: "Un oraș vibrant în vestul Serbiei, cunoscut pentru cultura și istoria sa industrială.",
      en: "A vibrant city in western Serbia, known for its culture and industrial history."
    },
    facts: {
      de: ["Nationalmuseum", "Borac-Basketballtradition", "Zentrum der Westmorava"],
      hu: ["Nemzeti Múzeum", "Borac kosárlabda hagyomány", "A Nyugati-Morava központja"],
      ro: ["Muzeul Național", "Tradiția baschetului Borac", "Centrul Moravei de Vest"],
      en: ["National Museum", "Borac basketball tradition", "Center of West Morava"]
    }
  },
  {
    id: "RS-024-ovcar-kablar",
    type: "nature",
    parent: "RS-024",
    coords: [20.1800, 43.9000],
    name: { de: "Ovčar-Kablar-Schlucht", hu: "Ovčar-Kablar-szurdok", ro: "Defileul Ovčar-Kablar", en: "Ovčar-Kablar Gorge" },
    description: {
      de: "Eine malerische Schlucht der Westmorava, auch 'Serbisches Heiliges Bergland' genannt.",
      hu: "A Nyugati-Morava festői szurdoka, amelyet 'szerb szent hegyvidéknek' is neveznek.",
      ro: "Un defileu pitoresc al Moravei de Vest, numit și 'Muntele Sfânt Sârbesc'.",
      en: "A picturesque gorge of the West Morava river, also called 'Serbian Holy Mountain'."
    },
    facts: {
      de: ["Zahlreiche Klöster", "Wellness-Zentrum", "Wanderwege"],
      hu: ["Számos kolostor", "Gyógyfürdő központ", "Túraútvonalak"],
      ro: ["Numeroase mănăstiri", "Centru de wellness", "Trasee de drumeție"],
      en: ["Numerous monasteries", "Wellness center", "Hiking trails"]
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
    facts: {
      de: ["Altstadt Tešnjar", "Nationalmuseum", "Kolubara-Fluss"],
      hu: ["Tešnjar óváros", "Nemzeti Múzeum", "Kolubara-folyó"],
      ro: ["Centrul vechi Tešnjar", "Muzeul Național", "Râul Kolubara"],
      en: ["Tešnjar old quarter", "National Museum", "Kolubara River"]
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
    facts: {
      de: ["Reliquien des Hl. Nikolai", "Einzigartige Architektur", "Pilgerstätte"],
      hu: ["Szent Nikolai ereklyéi", "Egyedi építészet", "Zarándokhely"],
      ro: ["Moaștele Sf. Nikolai", "Arhitectură unică", "Loc de pelerinaj"],
      en: ["Relics of St. Nikolai", "Unique architecture", "Pilgrimage site"]
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
