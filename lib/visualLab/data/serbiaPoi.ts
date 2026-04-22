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
      de: "Subotica ist eine Stadt in der nördlichen Vojvodina, berühmt für ihre ungarische Minderheit und die reiche Jugendstilarchitektur.",
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
      hu: "Galambóc vára egy középkori várrom, amely fenségesen magasodik a Vaskapu-szoros bejáratánál, a Duna mentén.",
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
      de: "Kopaonik ist das größte Gebirge in Serbien und das beliebteste Skigebiet des Landes.",
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

export const serbiaAllPoi: POI[] = [
  serbiaCountry,
  ...serbiaRegions,
  ...serbiaCities,
  ...serbiaCulture,
  ...serbiaNature,
  ...serbiaRivers
];
