import type { POI } from "./poi";

export const poiExtraSouthsudanEconomicV2: POI[] = [
  {
    id: "paloch-oil-field-economic-v2",
    type: "industry",
    parent: "SS-NU",
    coords: [32.55, 10.43],
    name: {
      de: "Paloch-Ölfeld",
      hu: "Paloch olajmező",
      ro: "Câmpul petrolifer Paloch",
      en: "Paloch Oil Field"
    },
    description: {
      de: "Das Paloch-Ölfeld ist eines der größten und produktivsten Erdölfördergebiete im Südsudan, gelegen im Bundesstaat Upper Nile.",
      hu: "A Paloch olajmező Dél-Szudán egyik legnagyobb és legtermelékenyebb kőolaj-kitermelő területe Felső-Nílus államban.",
      ro: "Câmpul petrolifer Paloch este una dintre cele mai mari și mai productive zone de extracție a petrolului din Sudanul de Sud, situată în statul Nilul Superior.",
      en: "The Paloch Oil Field is one of the largest and most productive petroleum extraction areas in South Sudan, located in Upper Nile State."
    },
    facts: {
      de: ["Hauptfördergebiet im Norden", "Verbindung zur Petrodar-Pipeline", "Strategische Energieinfrastruktur", "Zentrum der Ölförderung"],
      hu: ["Északi fő kitermelőhely", "Kapcsolat a Petrodar vezetékhez", "Stratégiai energetikai infrastruktúra", "Olajbányászat központja"],
      ro: ["Principala zonă de extracție din nord", "Conexiune la conducta Petrodar", "Infrastructură energetică strategică", "Centrul extracției de petrol"],
      en: ["Main extraction area in the north", "Connected to the Petrodar pipeline", "Strategic energy infrastructure", "Center of oil production"]
    }
  },
  {
    id: "thar-jath-oil-field-economic-v2",
    type: "industry",
    parent: "SS-UY",
    coords: [30.13, 8.93],
    name: {
      de: "Thar Jath-Ölfeld",
      hu: "Thar Jath olajmező",
      ro: "Câmpul petrolifer Thar Jath",
      en: "Thar Jath Oil Field"
    },
    description: {
      de: "Ein bedeutendes Ölförderzentrum im Bundesstaat Unity, das wesentlich zum Exportvolumen des Landes beiträgt.",
      hu: "Jelentős olajkitermelő központ Unity államban, amely jelentősen hozzájárul az ország exportvolumenéhez.",
      ro: "Un centru important de extracție a petrolului în statul Unity, care contribuie semnificativ la volumul exporturilor țării.",
      en: "A significant oil extraction center in Unity State, contributing substantially to the country's export volume."
    },
    facts: {
      de: ["Gelegen im Block 5A", "Infrastruktur für Rohölverarbeitung", "Wirtschaftsmotor der Region Unity", "Anschluss an Exportpipelines"],
      hu: ["Az 5A blokkban található", "Nyersolaj-feldolgozó infrastruktúra", "Unity régió gazdasági motorja", "Csatlakozás az exportvezetékekhez"],
      ro: ["Situat în Blocul 5A", "Infrastructură pentru procesarea țițeiului", "Motor economic al regiunii Unity", "Conexiune la conductele de export"],
      en: ["Located in Block 5A", "Crude oil processing infrastructure", "Economic engine of the Unity region", "Connected to export pipelines"]
    }
  },
  {
    id: "unity-oil-field-economic-v2",
    type: "industry",
    parent: "SS-UY",
    coords: [29.87, 9.47],
    name: {
      de: "Unity-Ölfeld",
      hu: "Unity olajmező",
      ro: "Câmpul petrolifer Unity",
      en: "Unity Oil Field"
    },
    description: {
      de: "Das Unity-Ölfeld war eines der ersten erschlossenen Felder im Südsudan und bleibt ein Pfeiler der nationalen Wirtschaft.",
      hu: "A Unity olajmező az egyik elsőként feltárt mező volt Dél-Szudánban, és továbbra is a nemzeti gazdaság pillére.",
      ro: "Câmpul petrolifer Unity a fost unul dintre primele câmpuri explorate în Sudanul de Sud și rămâne un pilon al economiei naționale.",
      en: "The Unity Oil Field was one of the first fields explored in South Sudan and remains a pillar of the national economy."
    },
    facts: {
      de: ["Historisches Zentrum der Förderung", "Nahe der Stadt Bentiu", "Umfangreiche Verarbeitungsanlagen", "Wichtig für das BIP"],
      hu: ["Történelmi kitermelési központ", "Bentiu városa közelében", "Kiterjedt feldolgozó létesítmények", "Fontos a GDP szempontjából"],
      ro: ["Centru istoric de extracție", "Lângă orașul Bentiu", "Instalații extinse de procesare", "Important pentru PIB"],
      en: ["Historical center of extraction", "Near the city of Bentiu", "Extensive processing facilities", "Important for national GDP"]
    }
  },
  {
    id: "juba-river-port-economic-v2",
    type: "port",
    parent: "SS-EC",
    coords: [31.62, 4.85],
    name: {
      de: "Juba-Flusshafen",
      hu: "Juba folyami kikötő",
      ro: "Portul fluvial Juba",
      en: "Juba River Port"
    },
    description: {
      de: "Der Haupthafen in der Hauptstadt Juba ist das logistische Tor für Güter, die über den Weißen Nil transportiert werden.",
      hu: "A főváros, Juba fő kikötője a Fehér-Níluson szállított áruk logisztikai kapuja.",
      ro: "Principalul port din capitala Juba este poarta logistică pentru mărfurile transportate pe Nilul Alb.",
      en: "The main port in the capital city Juba is the logistical gateway for goods transported via the White Nile."
    },
    facts: {
      de: ["Südlichster Nilhafen", "Umschlagplatz für Hilfsgüter", "Verbindung nach Uganda", "Wichtiger Binnenhandelsknoten"],
      hu: ["A legdélebbi nílusi kikötő", "Segélyszállítmányok elosztóhelye", "Kapcsolat Uganda felé", "Fontos belkereskedelmi csomópont"],
      ro: ["Cel mai sudic port de pe Nil", "Punct de transbordare pentru ajutoare", "Conexiune către Uganda", "Important nod comercial intern"],
      en: ["Southernmost Nile port", "Transshipment point for aid", "Connection to Uganda", "Important inland trade hub"]
    }
  },
  {
    id: "bor-river-port-economic-v2",
    type: "port",
    parent: "SS-JG",
    coords: [31.55, 6.20],
    name: {
      de: "Bor-Flusshafen",
      hu: "Bor folyami kikötő",
      ro: "Portul fluvial Bor",
      en: "Bor River Port"
    },
    description: {
      de: "Ein strategischer Hafen im Bundesstaat Jonglei, der als wichtiges Verteilungszentrum für die Sudd-Region fungiert.",
      hu: "Stratégiai kikötő Jonglei államban, amely a Sudd-régió fontos elosztóközpontjaként szolgál.",
      ro: "Un port strategic în statul Jonglei, care funcționează ca un centru important de distribuție pentru regiunea Sudd.",
      en: "A strategic port in Jonglei State, serving as an important distribution center for the Sudd region."
    },
    facts: {
      de: ["Tor zu den Sudd-Sümpfen", "Handelszentrum für Vieh und Fisch", "Strategischer Versorgungspunkt", "Wichtige Anlegestelle"],
      hu: ["Kapu a Sudd-mocsarakhoz", "Állat- és halkereskedelmi központ", "Stratégiai ellátási pont", "Fontos kikötőhely"],
      ro: ["Poarta către mlaștinile Sudd", "Centru comercial pentru vite și pește", "Punct de aprovizionare strategic", "Doc important"],
      en: ["Gateway to the Sudd swamps", "Trade hub for livestock and fish", "Strategic supply point", "Major docking facility"]
    }
  },
  {
    id: "malakal-river-port-economic-v2",
    type: "port",
    parent: "SS-NU",
    coords: [31.65, 9.55],
    name: {
      de: "Malakal-Flusshafen",
      hu: "Malakal folyami kikötő",
      ro: "Portul fluvial Malakal",
      en: "Malakal River Port"
    },
    description: {
      de: "Dieser Hafen am Weißen Nil ist entscheidend für die Versorgung des Nordens und den Export lokaler Produkte.",
      hu: "Ez a Fehér-Nílus menti kikötő kulcsfontosságú az északi területek ellátása és a helyi termékek exportja szempontjából.",
      ro: "Acest port de pe Nilul Alb este crucial pentru aprovizionarea nordului și exportul produselor locale.",
      en: "This port on the White Nile is crucial for supplying the north and exporting local products."
    },
    facts: {
      de: ["Wichtiger Transitknoten", "Zentrum für Getreidetransport", "Verbindung zum Sudan", "Bedeutende Lagerkapazitäten"],
      hu: ["Fontos tranzitcsomópont", "Gabonaszállítási központ", "Kapcsolat Szudán felé", "Jelentős tárolókapacitások"],
      ro: ["Nod de tranzit important", "Centru pentru transportul cerealelor", "Conexiune către Sudan", "Capacități de depozitare semnificative"],
      en: ["Major transit hub", "Center for grain transport", "Connection to Sudan", "Significant storage capacities"]
    }
  },
  {
    id: "mangalla-sugar-factory-economic-v2",
    type: "industry",
    parent: "SS-EC",
    coords: [31.75, 5.20],
    name: {
      de: "Zuckerfabrik Mangalla",
      hu: "Mangallai cukorgyár",
      ro: "Fabrica de zahăr Mangalla",
      en: "Mangalla Sugar Factory"
    },
    description: {
      de: "Ein bedeutender Industriekomplex zur Verarbeitung von Zuckerrohr, das in den umliegenden Plantagen angebaut wird.",
      hu: "Jelentős ipari komplexum a környező ültetvényeken termesztett cukornád feldolgozására.",
      ro: "Un complex industrial important pentru procesarea trestiei de zahăr cultivate în plantațiile înconjurătoare.",
      en: "A major industrial complex for processing sugarcane grown in the surrounding plantations."
    },
    facts: {
      de: ["Erster großer Agrarindustriebetrieb", "In der Nähe des Nils gelegen", "Fördert die lokale Beschäftigung", "Versorgung des Inlandsmarktes"],
      hu: ["Első nagy agrár-ipari üzem", "A Nílus közelében található", "Támogatja a helyi foglalkoztatást", "Belföldi piac ellátása"],
      ro: ["Prima mare unitate agro-industrială", "Situată lângă Nil", "Promovează ocuparea forței de muncă locale", "Aprovizionarea pieței interne"],
      en: ["First major agro-industrial plant", "Located near the Nile", "Boosts local employment", "Supply for the domestic market"]
    }
  },
  {
    id: "nzara-cotton-ginnery-economic-v2",
    type: "industry",
    parent: "SS-EW",
    coords: [28.25, 4.65],
    name: {
      de: "Baumwollentkörnungsanlage Nzara",
      hu: "Nzarai pamutcsévélő üzem",
      ro: "Fabrica de bumbac Nzara",
      en: "Nzara Cotton Ginnery"
    },
    description: {
      de: "Ein historisches Industriezentrum im Südwesten, das für die Entkörnung und Verarbeitung von Baumwolle bekannt ist.",
      hu: "Történelmi ipari központ a délnyugati részen, amely a pamut tisztításáról és feldolgozásáról ismert.",
      ro: "Un centru industrial istoric în sud-vest, cunoscut pentru curățarea și procesarea bumbacului.",
      en: "A historical industrial center in the southwest, known for cotton ginning and processing."
    },
    facts: {
      de: ["Teil des Zande-Projekts", "Industrielles Erbe", "Zentrum der Textilrohstoffe", "Wichtig für Western Equatoria"],
      hu: ["A Zande-projekt része", "Ipari örökség", "Textil alapanyagok központja", "Fontos Nyugat-Equatoria számára"],
      ro: ["Parte a proiectului Zande", "Moștenire industrială", "Centrul materiilor prime textile", "Important pentru Equatoria de Vest"],
      en: ["Part of the Zande Project", "Industrial heritage", "Center for textile raw materials", "Key for Western Equatoria"]
    }
  },
  {
    id: "renk-river-port-economic-v2",
    type: "port",
    parent: "SS-NU",
    coords: [32.78, 11.75],
    name: {
      de: "Renk-Flusshafen",
      hu: "Renk folyami kikötő",
      ro: "Portul fluvial Renk",
      en: "Renk River Port"
    },
    description: {
      de: "Der nördlichste Hafen des Südsudans am Weißen Nil, spezialisiert auf den Export von Getreide und Handelsgütern.",
      hu: "Dél-Szudán legészakibb kikötője a Fehér-Níluson, amely gabona és kereskedelmi áruk exportjára szakosodott.",
      ro: "Cel mai nordic port al Sudanului de Sud de pe Nilul Alb, specializat în exportul de cereale și mărfuri comerciale.",
      en: "The northernmost port of South Sudan on the White Nile, specialized in exporting grain and trade goods."
    },
    facts: {
      de: ["Tor zum Sudan", "Exportzentrum für Sorghum", "Strategische Grenzlage", "Logistikknoten für Getreide"],
      hu: ["Kapu Szudán felé", "Cirok exportközpont", "Stratégiai határmenti fekvés", "Gabona logisztikai csomópont"],
      ro: ["Poarta către Sudan", "Centru de export pentru sorg", "Locație strategică la graniță", "Nod logistic pentru cereale"],
      en: ["Gateway to Sudan", "Export hub for sorghum", "Strategic border location", "Logistics node for grain"]
    }
  },
  {
    id: "kapoeta-gold-mines-economic-v2",
    type: "industry",
    parent: "SS-EE",
    coords: [33.58, 4.77],
    name: {
      de: "Goldminen von Kapoeta",
      hu: "Kapoetai aranybányák",
      ro: "Minele de aur din Kapoeta",
      en: "Kapoeta Gold Mines"
    },
    description: {
      de: "Zentrum des artisanalen und industriellen Goldabbaus im Bundesstaat Eastern Equatoria.",
      hu: "A kisüzemi és ipari aranybányászat központja Kelet-Equatoria államban.",
      ro: "Centrul mineritului de aur artizanal și industrial în statul Equatoria de Est.",
      en: "Center of artisanal and industrial gold mining in Eastern Equatoria State."
    },
    facts: {
      de: ["Reiche Mineralvorkommen", "Bedeutende Goldexporte", "Arbeitsplatz für Tausende", "Wachsender Bergbausektor"],
      hu: ["Gazdag ásványkincsek", "Jelentős aranyexport", "Több ezer munkahely", "Növekvő bányászati szektor"],
      ro: ["Zăcăminte minerale bogate", "Exporturi semnificative de aur", "Locuri de muncă pentru mii de oameni", "Sector minier în creștere"],
      en: ["Rich mineral deposits", "Significant gold exports", "Jobs for thousands", "Growing mining sector"]
    }
  },
  {
    id: "bentiu-oil-refinery-economic-v2",
    type: "industry",
    parent: "SS-UY",
    coords: [29.82, 9.25],
    name: {
      de: "Bentiu-Ölraffinerie",
      hu: "Bentiui olajfinomító",
      ro: "Rafinăria de petrol Bentiu",
      en: "Bentiu Oil Refinery"
    },
    description: {
      de: "Eine Raffinerieanlage nahe Bentiu zur Deckung des inländischen Bedarfs an raffinierten Ölprodukten.",
      hu: "Olajfinomító Bentiu közelében a finomított olajtermékek iránti belföldi igények kielégítésére.",
      ro: "O rafinărie lângă Bentiu pentru a satisface cererea internă de produse petroliere rafinate.",
      en: "A refinery facility near Bentiu to meet the domestic demand for refined oil products."
    },
    facts: {
      de: ["Verarbeitung vor Ort", "Reduzierung von Kraftstoffimporten", "Technologisches Zentrum", "Wichtig für die Treibstoffversorgung"],
      hu: ["Helyi feldolgozás", "Üzemanyag-import csökkentése", "Technológiai központ", "Fontos az üzemanyag-ellátáshoz"],
      ro: ["Procesare la fața locului", "Reducerea importurilor de combustibil", "Centru tehnologic", "Important pentru aprovizionarea cu combustibil"],
      en: ["Local processing", "Reduction of fuel imports", "Technological hub", "Crucial for fuel supply"]
    }
  },
  {
    id: "shambe-river-port-economic-v2",
    type: "port",
    parent: "SS-LK",
    coords: [30.78, 7.11],
    name: {
      de: "Shambe-Flusshafen",
      hu: "Shambe folyami kikötő",
      ro: "Portul fluvial Shambe",
      en: "Shambe River Port"
    },
    description: {
      de: "Ein wichtiger Binnenhafen im Bundesstaat Lakes, der als Handelsverbindung für Fischerei und Landwirtschaft dient.",
      hu: "Fontos belvízi kikötő Lakes államban, amely a halászat és a mezőgazdaság kereskedelmi kapcsolataként szolgál.",
      ro: "Un port interior important în statul Lakes, care servește drept legătură comercială pentru pescuit și agricultură.",
      en: "An important inland port in Lakes State, serving as a trade link for fishing and agriculture."
    },
    facts: {
      de: ["Zentrum des Fischhandels", "Gelegen am Shambe-See", "Versorgung der Binnenregionen", "Wichtiger Nil-Umschlagplatz"],
      hu: ["Halkereskedelem központja", "A Shambe-tó partján található", "Belső régiók ellátása", "Fontos nílusi rakodóhely"],
      ro: ["Centrul comerțului cu pește", "Situat pe lacul Shambe", "Aprovizionarea regiunilor interioare", "Punct important de transbordare pe Nil"],
      en: ["Center for fish trade", "Located on Lake Shambe", "Supplying inland regions", "Important Nile transshipment point"]
    }
  },
  {
    id: "aweil-rice-mill-economic-v2",
    type: "industry",
    parent: "SS-BN",
    coords: [24.88, 8.77],
    name: {
      de: "Reismühle von Aweil",
      hu: "Aweili rizsmalom",
      ro: "Moara de orez Aweil",
      en: "Aweil Rice Mill"
    },
    description: {
      de: "Die industrielle Mühle verarbeitet den Reis, der im großangelegten Aweil-Reisprojekt produziert wird.",
      hu: "Az ipari malom az Aweil rizsprojekt keretében termelt rizst dolgozza fel.",
      ro: "Moara industrială procesează orezul produs în cadrul marelui proiect de orez Aweil.",
      en: "The industrial mill processes rice produced in the large-scale Aweil Rice Project."
    },
    facts: {
      de: ["Größte Reismühle des Landes", "Zentrum der Agrarverarbeitung", "Sicherung der Ernährung", "Modernisierte Anlage"],
      hu: ["Az ország legnagyobb rizsmalma", "Agrárfeldolgozás központja", "Élelmezésbiztonság", "Modernizált létesítmény"],
      ro: ["Cea mai mare moară de orez din țară", "Centrul procesării agricole", "Securitate alimentară", "Instalație modernizată"],
      en: ["Largest rice mill in the country", "Center for agro-processing", "Food security focus", "Modernized facility"]
    }
  },
  {
    id: "fula-rapids-hydro-economic-v2",
    type: "industry",
    parent: "SS-EE",
    coords: [31.95, 3.65],
    name: {
      de: "Fula-Wasserkraftprojekt",
      hu: "Fula vízerőmű projekt",
      ro: "Proiectul hidroelectric Fula",
      en: "Fula Rapids Hydro Project"
    },
    description: {
      de: "Ein wichtiges Infrastrukturprojekt zur Stromerzeugung aus der Wasserkraft der Nimule-Stromschnellen.",
      hu: "Fontos infrastruktúrális projekt a Nimule-zúgók vízi energiájából történő áramtermelésre.",
      ro: "Un proiect important de infrastructură pentru generarea de electricitate din energia hidroelectrică a cascadelor Nimule.",
      en: "An important infrastructure project for generating electricity from the hydroelectric power of the Nimule rapids."
    },
    facts: {
      de: ["Energie für den Süden", "Nutzung der Nilkraft", "Strategisches Kraftwerk", "Reduzierung von Stromimporten"],
      hu: ["Energia a déli résznek", "A Nílus erejének hasznosítása", "Stratégiai erőmű", "Áramimport csökkentése"],
      ro: ["Energie pentru sud", "Utilizarea forței Nilului", "Centrală electrică strategică", "Reducerea importurilor de energie"],
      en: ["Energy for the south", "Utilizing the Nile's power", "Strategic power plant", "Reducing electricity imports"]
    }
  },
  {
    id: "yirol-sesame-plant-economic-v2",
    type: "industry",
    parent: "SS-LK",
    coords: [30.50, 6.55],
    name: {
      de: "Sesammühle von Yirol",
      hu: "Yiroli szezámfeldolgozó",
      ro: "Fabrica de procesare a susanului Yirol",
      en: "Yirol Sesame Processing Plant"
    },
    description: {
      de: "Eine Verarbeitungsanlage für Sesam, die die reiche landwirtschaftliche Produktion der Lakes-Region nutzt.",
      hu: "Szezámfeldolgozó üzem, amely a Lakes-régió gazdag mezőgazdasági termelését hasznosítja.",
      ro: "O instalație de procesare a susanului care utilizează producția agricolă bogată din regiunea Lakes.",
      en: "A processing plant for sesame, utilizing the rich agricultural production of the Lakes region."
    },
    facts: {
      de: ["Zentrum der Ölsaaten", "Wichtiger Agrarexport", "Förderung lokaler Bauern", "Regionale Industrieperle"],
      hu: ["Olajos magvak központja", "Fontos agrárexport", "Helyi gazdák támogatása", "Regionális ipari ékkő"],
      ro: ["Centrul semințelor oleaginoase", "Export agricol important", "Sprijinirea fermierilor locali", "Perlă industrială regională"],
      en: ["Center for oilseeds", "Major agricultural export", "Supporting local farmers", "Regional industrial gem"]
    }
  },
  {
    id: "kuajok-meat-plant-economic-v2",
    type: "industry",
    parent: "SS-WR",
    coords: [27.98, 8.30],
    name: {
      de: "Fleischverarbeitungsbetrieb Kuajok",
      hu: "Kuajoki húsfeldolgozó",
      ro: "Fabrica de procesare a cărnii Kuajok",
      en: "Kuajok Meat Processing Plant"
    },
    description: {
      de: "Ein moderner Verarbeitungsbetrieb für Fleischprodukte im Herzen der Viehzuchtregion Warrap.",
      hu: "Modern húsfeldolgozó üzem a Warrap állattartó régió szívében.",
      ro: "O unitate modernă de procesare a produselor din carne în inima regiunii de creștere a animalelor Warrap.",
      en: "A modern processing plant for meat products in the heart of the Warrap livestock region."
    },
    facts: {
      de: ["Nutzt riesige Viehbestände", "Verbesserung der Kühlkette", "Versorgung städtischer Zentren", "Industrieller Viehsektor"],
      hu: ["Hatalmas állatállományt hasznosít", "Hűtési lánc fejlesztése", "Városi központok ellátása", "Ipari állattartási szektor"],
      ro: ["Utilizează efective mari de animale", "Îmbunătățirea lanțului frigorific", "Aprovizionarea centrelor urbane", "Sector industrial zootehnic"],
      en: ["Utilizes vast livestock herds", "Cold chain improvement", "Supplying urban centers", "Industrial livestock sector"]
    }
  },
  {
    id: "terekeka-fish-center-economic-v2",
    type: "industry",
    parent: "SS-EC",
    coords: [31.75, 5.44],
    name: {
      de: "Fischverarbeitungszentrum Terekeka",
      hu: "Terekekai halfeldolgozó",
      ro: "Centrul de procesare a peștelui Terekeka",
      en: "Terekeka Fish Processing Center"
    },
    description: {
      de: "Ein industrielles Zentrum für die Lagerung und Verarbeitung von Fisch aus dem Weißen Nil.",
      hu: "Ipari központ a Fehér-Nílusból származó halak tárolására és feldolgozására.",
      ro: "Un centru industrial pentru depozitarea și procesarea peștelui din Nilul Alb.",
      en: "An industrial center for the storage and processing of fish from the White Nile."
    },
    facts: {
      de: ["Hauptquelle für Nilbarsch", "Moderne Kälteanlagen", "Versorgung des Marktes in Juba", "Wichtig für die Fischergemeinschaft"],
      hu: ["Nílusi sügér fő forrása", "Modern hűtőberendezések", "Jubai piac ellátása", "Fontos a halászközösség számára"],
      ro: ["Sursă principală de biban de Nil", "Instalații frigorifice moderne", "Aprovizionarea pieței din Juba", "Important pentru comunitatea de pescari"],
      en: ["Primary source for Nile perch", "Modern refrigeration units", "Supplying the Juba market", "Key for the fishing community"]
    }
  },
  {
    id: "adar-yale-oil-field-economic-v2",
    type: "industry",
    parent: "SS-NU",
    coords: [32.73, 10.05],
    name: {
      de: "Adar Yale-Ölfeld",
      hu: "Adar Yale olajmező",
      ro: "Câmpul petrolifer Adar Yale",
      en: "Adar Yale Oil Field"
    },
    description: {
      de: "Eines der produktivsten Ölfelder im Melut-Becken, das Rohöl für den Weltmarkt liefert.",
      hu: "A Melut-medence egyik legtermelékenyebb olajmezője, amely nyersolajat szolgáltat a világpiacra.",
      ro: "Unul dintre cele mai productive câmpuri petroliere din bazinul Melut, care furnizează țiței pentru piața mondială.",
      en: "One of the most productive oil fields in the Melut Basin, supplying crude oil to the world market."
    },
    facts: {
      de: ["Große Kohlereserven", "Teil des Melut-Beckens", "Infrastruktur für Export", "Bedeutende Förderrate"],
      hu: ["Hatalmas tartalékok", "A Melut-medence része", "Export infrastruktúra", "Jelentős kitermelési arány"],
      ro: ["Rezerve mari", "Parte a bazinului Melut", "Infrastructură de export", "Rată de extracție semnificativă"],
      en: ["Vast reserves", "Part of the Melut Basin", "Export infrastructure", "Significant extraction rate"]
    }
  },
  {
    id: "melut-basin-oil-complex-economic-v2",
    type: "industry",
    parent: "SS-NU",
    coords: [32.20, 10.45],
    name: {
      de: "Melut-Ölkomplex",
      hu: "Melut-medence olajkomplexum",
      ro: "Complexul petrolier din bazinul Melut",
      en: "Melut Basin Oil Complex"
    },
    description: {
      de: "Ein weitläufiger Komplex von Anlagen zur Koordination der Ölförderung im gesamten Melut-Becken.",
      hu: "A Melut-medence teljes olajkitermelésének koordinálására szolgáló létesítmények kiterjedt komplexuma.",
      ro: " un complex extins de instalații pentru coordonarea extracției de petrol în întregul bazin Melut.",
      en: "An extensive complex of facilities for coordinating oil extraction throughout the Melut Basin."
    },
    facts: {
      de: ["Zentraler Logistikknoten", "Pipeline-Startpunkt", "Wohnanlagen für Arbeiter", "Höchste Sicherheitsstufe"],
      hu: ["Központi logisztikai csomópont", "Csővezeték kiindulópontja", "Munkásszállások", "Legmagasabb biztonsági fokozat"],
      ro: ["Nod logistic central", "Punct de plecare al conductei", "Locuințe pentru muncitori", "Cel mai înalt nivel de securitate"],
      en: ["Central logistics hub", "Pipeline starting point", "Worker housing units", "Highest security level"]
    }
  },
  {
    id: "mala-oil-field-economic-v2",
    type: "industry",
    parent: "SS-UY",
    coords: [30.05, 9.35],
    name: {
      de: "Mala-Ölfeld",
      hu: "Mala olajmező",
      ro: "Câmpul petrolifer Mala",
      en: "Mala Oil Field"
    },
    description: {
      de: "Ein wichtiges Feld im Unity-Block, das für seine stabilen Fördermengen bekannt ist.",
      hu: "Fontos mező az Unity blokkban, amely stabil kitermelési mennyiségéről ismert.",
      ro: "Un câmp important în blocul Unity, cunoscut pentru volumele sale stabile de extracție.",
      en: "An important field in the Unity block, known for its stable extraction volumes."
    },
    facts: {
      de: ["Konstante Produktion", "Nahe Bentiu gelegen", "Integrierte Pumpstationen", "Schlüsselstelle der Ölwirtschaft"],
      hu: ["Folyamatos termelés", "Bentiu közelében található", "Integrált szivattyúállomások", "Az olajgazdaság kulcsfontosságú helyszíne"],
      ro: ["Producție constantă", "Situat lângă Bentiu", "Stații de pompare integrate", "Punct cheie al economiei petroliere"],
      en: ["Constant production", "Located near Bentiu", "Integrated pumping stations", "Key site for the oil economy"]
    }
  }
];
