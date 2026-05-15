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
  }, image: "/poi-images/country-serbia.webp"};

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
    }, image: "/poi-images/region-sumadija.webp"}
];

// 3. Városok
export const serbiaCities: POI[] = [
];

// 4. Kultúra és Történelem
export const serbiaCulture: POI[] = [
];

// 5. Természet (Hegyek, Tavak, Nemzeti Parkok)
export const serbiaNature: POI[] = [
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
    }, image: "/poi-images/mountain-kopaonik.webp"},
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
    }, image: "/poi-images/mountain-fruska-gora.webp"},
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
    }, image: "/poi-images/river-danube-serbia.webp"},
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
    }, image: "/poi-images/river-sava.webp"}
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
    }, image: "/poi-images/RS-002-apatin.webp"},
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
    }, image: "/poi-images/RS-003-senta.webp"},
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
    }, image: "/poi-images/RS-004-prohor-pcinjski.webp"},
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
    }, image: "/poi-images/RS-005-negotin.webp"},
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
    }, image: "/poi-images/RS-007-stara-planina.webp"},
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
    }, image: "/poi-images/RS-008-caricin-grad.webp"},
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
    }, image: "/poi-images/RS-009-zica.webp"},
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
    }, image: "/poi-images/RS-010-manasija.webp"},
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
    }, image: "/poi-images/RS-013-krusedol.webp"},
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
    facts: {
      de: ["Sumpflandschaft", "Seltene Vögel", "Naturschutzgebiet"],
      hu: ["Mocsaras vidék", "Ritka madarak", "Természetvédelmi terület"],
      ro: ["Peisaj mlăștinos", "Păsări rare", "Rezervație naturală"],
      en: ["Marshland", "Rare birds", "Nature reserve"]
    }, image: "/poi-images/RS-016-carska-bara.webp"},
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
    }, image: "/poi-images/RS-017-vrsac.webp"},
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
    }, image: "/poi-images/RS-018-viminacium.webp"},
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
    facts: {
      de: ["An der Donau", "Obstbaugebiet", "Großer Industriestandort"],
      hu: ["A Duna mentén", "Gyümölcstermesztő vidék", "Jelentős ipari központ"],
      ro: ["Pe malul Dunării", "Zonă pomicolă", "Centru industrial major"],
      en: ["On the Danube", "Fruit growing area", "Major industrial site"]
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
    }, image: "/poi-images/RS-022-ljubostinja.webp"},
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
    facts: {
      de: ["Zahlreiche Klöster", "Wellness-Zentrum", "Wanderwege"],
      hu: ["Számos kolostor", "Gyógyfürdő központ", "Túraútvonalak"],
      ro: ["Numeroase mănăstiri", "Centru de wellness", "Trasee de drumeție"],
      en: ["Numerous monasteries", "Wellness center", "Hiking trails"]
    }, image: "/poi-images/RS-024-ovcar-kablar.webp"},
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
