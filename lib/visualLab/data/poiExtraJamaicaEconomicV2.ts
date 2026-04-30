import type { POI } from "./poi";

export const poiExtraJamaicaEconomicV2: POI[] = [
  {
    id: "jm-kingston-harbour-economic-v2",
    type: "port",
    parent: "JM-13",
    coords: [-76.78, 17.95],
    name: { de: "Kingston Harbour", hu: "Kingstoni kikötő", ro: "Portul Kingston", en: "Kingston Harbour" },
    description: {
      de: "Einer der größten natürlichen Häfen der Welt, zentral für den jamaikanischen Außenhandel.",
      hu: "A világ egyik legnagyobb természetes kikötője, központi szereppel a jamaicai külkereskedelemben.",
      ro: "Unul dintre cele mai mari porturi naturale din lume, esențial pentru comerțul exterior al Jamaicăi.",
      en: "One of the world's largest natural harbors, central to Jamaican international trade."
    },
    facts: {
      de: ["Siebtgrößter Naturhafen", "Hauptumschlagplatz", "Tiefwasserhafen", "Containerterminal"],
      hu: ["Hetedik legnagyobb természetes kikötő", "Fő áruforgalmi központ", "Mélyvízi kikötő", "Konténerterminál"],
      ro: ["Al șaptelea port natural ca mărime", "Centru principal de mărfuri", "Port de mare adâncime", "Terminal de containere"],
      en: ["Seventh-largest natural harbor", "Primary trade hub", "Deep-water facility", "Major container terminal"]
    }
  },
  {
    id: "jm-montego-freeport-economic-v2",
    type: "port",
    parent: "JM-09",
    coords: [-77.93, 18.46],
    name: { de: "Montego Bay Freeport", hu: "Montego Bay-i szabadkikötő", ro: "Portul Liber Montego Bay", en: "Montego Bay Freeport" },
    description: {
      de: "Wichtige Industrie- und Kreuzfahrtzone im Westen der Insel.",
      hu: "Fontos ipari és tengerjáró övezet a sziget nyugati részén.",
      ro: "Zonă industrială și de croazieră importantă în vestul insulei.",
      en: "Vital industrial and cruise zone in the west of the island."
    },
    facts: {
      de: ["Freihandelszone", "Kreuzfahrtterminal", "Industriezentrum", "Exporthafen"],
      hu: ["Szabadkereskedelmi övezet", "Tengerjáró terminál", "Ipari központ", "Exportkikötő"],
      ro: ["Zonă de liber schimb", "Terminal de croazieră", "Centru industrial", "Port de export"],
      en: ["Free trade zone", "Cruise ship terminal", "Industrial hub", "Export facility"]
    }
  },
  {
    id: "jm-bauxite-kaiser-economic-v2",
    type: "industry",
    parent: "JM-08",
    coords: [-77.30, 18.45],
    name: { de: "Kaiser Bauxit Mine", hu: "Kaiser Bauxitbánya", ro: "Mina de bauxită Kaiser", en: "Kaiser Bauxite Mine" },
    description: {
      de: "Eine der größten Bauxitminen Jamaikas, entscheidend für die Aluminiumindustrie.",
      hu: "Jamaica egyik legnagyobb bauxitbányája, elengedhetetlen az alumíniumipar számára.",
      ro: "Una dintre cele mai mari mine de bauxită din Jamaica, crucială pentru industria aluminiului.",
      en: "One of Jamaica's largest bauxite mines, vital to the aluminum industry."
    },
    facts: {
      de: ["Bauxitabbau", "Exportrohstoff", "Großtagebau", "Wirtschaftsmotor"],
      hu: ["Bauxitkitermelés", "Exportnyersanyag", "Külszíni fejtés", "Gazdasági motor"],
      ro: ["Extracția bauxitei", "Materie primă de export", "Exploatare de suprafață", "Motor economic"],
      en: ["Bauxite extraction", "Export commodity", "Open-pit mining", "Key economic driver"]
    }
  },
  {
    id: "jm-sugar-factory-economic-v2",
    type: "industry",
    parent: "JM-05",
    coords: [-77.60, 18.25],
    name: { de: "Worthy Park Zuckerfabrik", hu: "Worthy Park cukorgyár", ro: "Fabrica de zahăr Worthy Park", en: "Worthy Park Sugar Factory" },
    description: {
      de: "Eine der historischen Zuckerproduktionsstätten Jamaikas.",
      hu: "Jamaica egyik történelmi cukortermelő létesítménye.",
      ro: "Una dintre unitățile istorice de producție a zahărului din Jamaica.",
      en: "One of Jamaica's historic sugar production facilities."
    },
    facts: {
      de: ["Zuckerrohrverarbeitung", "Traditionelle Industrie", "Exportgut", "Agrarverarbeitung"],
      hu: ["Cukornád-feldolgozás", "Hagyományos ipar", "Exporttermék", "Mezőgazdasági feldolgozás"],
      ro: ["Procesarea trestiei de zahăr", "Industrie tradițională", "Produs de export", "Procesare agricolă"],
      en: ["Sugarcane processing", "Traditional industry", "Export product", "Agro-processing"]
    }
  },
  {
    id: "jm-port-esquivel-economic-v2",
    type: "port",
    parent: "JM-12",
    coords: [-77.10, 17.88],
    name: { de: "Port Esquivel", hu: "Port Esquivel", ro: "Port Esquivel", en: "Port Esquivel" },
    description: {
      de: "Industriehafen für den Export von Tonerde und Aluminiumerzeugnissen.",
      hu: "Ipari kikötő timföld és alumíniumtermékek exportjára.",
      ro: "Port industrial pentru exportul de alumină și produse din aluminiu.",
      en: "Industrial port facility for the export of alumina and aluminum products."
    },
    facts: {
      de: ["Tonerde-Export", "Schüttguthafen", "Industrieinfrastruktur", "Tiefwasseranlage"],
      hu: ["Timföld-export", "Ömlesztett árukikötő", "Ipari infrastruktúra", "Mélyvízi létesítmény"],
      ro: ["Export de alumină", "Port de mărfuri vrac", "Infrastructură industrială", "Instalație de mare adâncime"],
      en: ["Alumina export", "Bulk cargo port", "Industrial infrastructure", "Deep-water facility"]
    }
  },
  {
    id: "jm-falcmouth-port-economic-v2",
    type: "port",
    parent: "JM-08",
    coords: [-77.65, 18.45],
    name: { de: "Falmouth Cruise Port", hu: "Falmouth tengerjáró kikötő", ro: "Portul de croazieră Falmouth", en: "Falmouth Cruise Port" },
    description: {
      de: "Moderner Kreuzfahrthafen mit direkter Anbindung an historische Stätten.",
      hu: "Modern tengerjáró kikötő közvetlen összeköttetéssel történelmi helyszínekhez.",
      ro: "Port modern de croazieră cu acces direct la situri istorice.",
      en: "Modern cruise port with direct access to historical sites."
    },
    facts: {
      de: ["Tourismus-Hub", "Kreuzfahrtschiff-Anleger", "Wirtschaftsbelebung", "Hafeninfrastruktur"],
      hu: ["Turisztikai központ", "Tengerjáró kikötőhely", "Gazdasági fellendülés", "Kikötői infrastruktúra"],
      ro: ["Hub turistic", "Doc pentru nave de croazieră", "Revitalizare economică", "Infrastructură portuară"],
      en: ["Tourism hub", "Cruise ship berth", "Economic revitalization", "Port infrastructure"]
    }
  },
  {
    id: "jm-energy-power-economic-v2",
    type: "industry",
    parent: "JM-13",
    coords: [-76.80, 17.98],
    name: { de: "Rockfort Kraftwerk", hu: "Rockforti erőmű", ro: "Centrala Rockfort", en: "Rockfort Power Station" },
    description: {
      de: "Ein zentrales Kraftwerk für die Energieversorgung der Hauptstadtregion.",
      hu: "Központi erőmű a fővárosi régió energiaellátásához.",
      ro: "Centrală electrică centrală pentru alimentarea regiunii capitalei.",
      en: "A central power station for the energy supply of the capital region."
    },
    facts: {
      de: ["Energieerzeugung", "Stromnetz-Support", "Infrastruktur", "Öffentliche Versorgung"],
      hu: ["Energiatermelés", "Villamoshálózat-támogatás", "Infrastruktúra", "Közüzemi ellátás"],
      ro: ["Producția de energie", "Suport pentru rețeaua electrică", "Infrastructură", "Utilități publice"],
      en: ["Energy generation", "Grid support", "Infrastructure", "Public utility"]
    }
  },
  {
    id: "jm-rum-distillery-economic-v2",
    type: "industry",
    parent: "JM-06",
    coords: [-77.45, 18.35],
    name: { de: "Appleton Estate Destillerie", hu: "Appleton Estate lepárló", ro: "Distileria Appleton Estate", en: "Appleton Estate Distillery" },
    description: {
      de: "Zentrum der jamaikanischen Rumproduktion.",
      hu: "A jamaicai rumtermelés központja.",
      ro: "Centrul producției de rom jamaican.",
      en: "The center of Jamaican rum production."
    },
    facts: {
      de: ["Rum-Destillation", "Exportprodukt", "Traditionelle Handwerkskunst", "Agrotourismus"],
      hu: ["Rumlepárlás", "Exporttermék", "Hagyományos kézművesség", "Agroturizmus"],
      ro: ["Distilarea romului", "Produs de export", "Artizanat tradițional", "Agroturism"],
      en: ["Rum distillation", "Export product", "Traditional craft", "Agritourism"]
    }
  },
  {
    id: "jm-coffee-processor-economic-v2",
    type: "industry",
    parent: "JM-11",
    coords: [-76.65, 18.10],
    name: { de: "Blue Mountain Kaffeeverarbeitung", hu: "Blue Mountain kávéfeldolgozó", ro: "Procesarea cafelei Blue Mountain", en: "Blue Mountain Coffee Processor" },
    description: {
      de: "Spezialisierte Anlage zur Aufbereitung von exklusivem Blue Mountain Kaffee.",
      hu: "Speciális üzem az exkluzív Blue Mountain kávé feldolgozására.",
      ro: "Unitate specializată pentru prelucrarea cafelei exclusive Blue Mountain.",
      en: "Specialized facility for processing exclusive Blue Mountain coffee."
    },
    facts: {
      de: ["Kaffeeverarbeitung", "Premium-Produkt", "Exportqualität", "Landwirtschaft"],
      hu: ["Kávéfeldolgozás", "Prémium termék", "Exportminőség", "Mezőgazdaság"],
      ro: ["Prelucrarea cafelei", "Produs premium", "Calitate de export", "Agricultură"],
      en: ["Coffee processing", "Premium product", "Export quality", "Agriculture"]
    }
  },
  {
    id: "jm-port-royal-terminal-economic-v2",
    type: "port",
    parent: "JM-13",
    coords: [-76.84, 17.93],
    name: { de: "Port Royal Kreuzfahrtterminal", hu: "Port Royal tengerjáró terminál", ro: "Terminalul de croazieră Port Royal", en: "Port Royal Cruise Terminal" },
    description: {
      de: "Neu entwickelter Kreuzfahrthafen mit historischem Ambiente.",
      hu: "Újonnan fejlesztett tengerjáró kikötő történelmi környezetben.",
      ro: "Port de croazieră nou dezvoltat cu ambianță istorică.",
      en: "Newly developed cruise port with a historic ambiance."
    },
    facts: {
      de: ["Tourismus-Infrastruktur", "Hafenanlage", "Wirtschaftliches Potenzial", "Kreuzfahrten"],
      hu: ["Turisztikai infrastruktúra", "Kikötői létesítmény", "Gazdasági potenciál", "Tengerjárók"],
      ro: ["Infrastructură turistică", "Facilitate portuară", "Potențial economic", "Croaziere"],
      en: ["Tourism infrastructure", "Port facility", "Economic potential", "Cruise ships"]
    }
  },
  {
    id: "jm-alpart-plant-economic-v2",
    type: "industry",
    parent: "JM-12",
    coords: [-77.55, 17.98],
    name: { de: "Alpart Raffinerie", hu: "Alpart finomító", ro: "Rafinăria Alpart", en: "Alpart Alumina Refinery" },
    description: {
      de: "Große Industrieanlage zur Verarbeitung von Bauxit zu Tonerde.",
      hu: "Nagy ipari létesítmény a bauxit timfölddé történő feldolgozására.",
      ro: "Mare unitate industrială pentru procesarea bauxitei în alumină.",
      en: "Large industrial facility for processing bauxite into alumina."
    },
    facts: {
      de: ["Tonerdeproduktion", "Industrielle Kapazität", "Wirtschaftsfaktor", "Rohstoffverarbeitung"],
      hu: ["Timföldgyártás", "Ipari kapacitás", "Gazdasági tényező", "Nyersanyagfeldolgozás"],
      ro: ["Producția de alumină", "Capacitate industrială", "Factor economic", "Procesarea materiilor prime"],
      en: ["Alumina production", "Industrial capacity", "Economic factor", "Raw material processing"]
    }
  },
  {
    id: "jm-sand-export-economic-v2",
    type: "industry",
    parent: "JM-09",
    coords: [-77.95, 18.45],
    name: { de: "Sandexport Anlage", hu: "Homokexportáló létesítmény", ro: "Facilitate pentru exportul de nisip", en: "Sand Export Facility" },
    description: {
      de: "Anlage für die industrielle Aufbereitung und den Export von Bausand.",
      hu: "Létesítmény építőhomok ipari előkészítésére és exportjára.",
      ro: "Facilitate pentru pregătirea industrială și exportul nisipului de construcție.",
      en: "Facility for industrial preparation and export of construction sand."
    },
    facts: {
      de: ["Sand-Aufbereitung", "Bauindustrie", "Exportlogistik", "Industrielle Nutzung"],
      hu: ["Homokelőkészítés", "Építőipar", "Exportlogisztika", "Ipari felhasználás"],
      ro: ["Pregătirea nisipului", "Industria construcțiilor", "Logistica exportului", "Utilizare industrială"],
      en: ["Sand processing", "Construction industry", "Export logistics", "Industrial use"]
    }
  },
  {
    id: "jm-port-kaiser-economic-v2",
    type: "port",
    parent: "JM-08",
    coords: [-77.30, 18.46],
    name: { de: "Port Kaiser", hu: "Port Kaiser", ro: "Port Kaiser", en: "Port Kaiser" },
    description: {
      de: "Hafenanlage spezialisiert auf den Transport von Bauxit.",
      hu: "Bauxitszállításra szakosodott kikötői létesítmény.",
      ro: "Facilitate portuară specializată în transportul bauxitei.",
      en: "Port facility specialized in bauxite transport."
    },
    facts: {
      de: ["Bauxitverladung", "Industriehafen", "Bulk-Terminal", "Exportinfrastruktur"],
      hu: ["Bauxitrakodás", "Ipari kikötő", "Ömlesztett terminál", "Exportinfrastruktúra"],
      ro: ["Încărcarea bauxitei", "Port industrial", "Terminal de vrac", "Infrastructură de export"],
      en: ["Bauxite loading", "Industrial port", "Bulk terminal", "Export infrastructure"]
    }
  },
  {
    id: "jm-fisheries-economic-v2",
    type: "industry",
    parent: "JM-07",
    coords: [-77.20, 17.85],
    name: { de: "Fischereizentrum Old Harbour Bay", hu: "Old Harbour Bay halászati központ", ro: "Centrul de pescuit Old Harbour Bay", en: "Old Harbour Bay Fishing Center" },
    description: {
      de: "Ein Hauptzentrum für die kommerzielle Fischerei der Insel.",
      hu: "A sziget kereskedelmi halászatának egyik központja.",
      ro: "Un centru principal pentru pescuitul comercial al insulei.",
      en: "A main center for the island's commercial fishing."
    },
    facts: {
      de: ["Kommerzielle Fischerei", "Fischmarkt", "Küstenwirtschaft", "Lebensmittelindustrie"],
      hu: ["Kereskedelmi halászat", "Halpiac", "Parti gazdaság", "Élelmiszeripar"],
      ro: ["Pescuit comercial", "Piață de pește", "Economie de coastă", "Industria alimentară"],
      en: ["Commercial fishing", "Fish market", "Coastal economy", "Food industry"]
    }
  },
  {
    id: "jm-cement-plant-economic-v2",
    type: "industry",
    parent: "JM-13",
    coords: [-76.75, 17.97],
    name: { de: "Carib Cement Werk", hu: "Carib cementgyár", ro: "Fabrica de ciment Carib", en: "Carib Cement Plant" },
    description: {
      de: "Zementwerk zur Versorgung der lokalen Bauindustrie.",
      hu: "Cementgyár a helyi építőipar ellátására.",
      ro: "Fabrica de ciment pentru aprovizionarea industriei locale de construcții.",
      en: "Cement plant supplying the local construction industry."
    },
    facts: {
      de: ["Zementproduktion", "Baurohstoffe", "Lokale Industrie", "Infrastrukturbau"],
      hu: ["Cementgyártás", "Építőanyagok", "Helyi ipar", "Infrastruktúra-építés"],
      ro: ["Producția de ciment", "Materiale de construcții", "Industrie locală", "Construcții de infrastructură"],
      en: ["Cement production", "Construction materials", "Local industry", "Infrastructure building"]
    }
  },
  {
    id: "jm-lumber-mill-economic-v2",
    type: "industry",
    parent: "JM-05",
    coords: [-77.50, 18.20],
    name: { de: "Holzverarbeitungswerk", hu: "Faipari feldolgozó", ro: "Unitate de prelucrare a lemnului", en: "Lumber Mill" },
    description: {
      de: "Industrielle Holzverarbeitung für den lokalen und Exportmarkt.",
      hu: "Ipari fafeldolgozó a helyi és exportpiacra.",
      ro: "Prelucrare industrială a lemnului pentru piața locală și de export.",
      en: "Industrial lumber processing for local and export markets."
    },
    facts: {
      de: ["Holzverarbeitung", "Bauholz", "Forstwirtschaft", "Exportwaren"],
      hu: ["Fafeldolgozás", "Épületfa", "Erdőgazdálkodás", "Exportcikkek"],
      ro: ["Prelucrarea lemnului", "Cherestea", "Silvicultură", "Bunuri de export"],
      en: ["Lumber processing", "Construction timber", "Forestry", "Export goods"]
    }
  },
  {
    id: "jm-poultry-processing-economic-v2",
    type: "industry",
    parent: "JM-10",
    coords: [-77.10, 18.05],
    name: { de: "Geflügelverarbeitungswerk", hu: "Baromfifeldolgozó üzem", ro: "Unitate de procesare a păsărilor", en: "Poultry Processing Plant" },
    description: {
      de: "Industrielle Geflügelverarbeitung für den Lebensmittelmarkt.",
      hu: "Ipari baromfifeldolgozó az élelmiszerpiac számára.",
      ro: "Procesare industrială a păsărilor pentru piața alimentară.",
      en: "Industrial poultry processing for the food market."
    },
    facts: {
      de: ["Geflügelfleisch", "Lebensmittelverarbeitung", "Agrarindustrie", "Lokale Versorgung"],
      hu: ["Baromfihús", "Élelmiszer-feldolgozás", "Agráripar", "Helyi ellátás"],
      ro: ["Carne de pasăre", "Procesarea alimentelor", "Agroindustrie", "Aprovizionare locală"],
      en: ["Poultry meat", "Food processing", "Agro-industry", "Local supply"]
    }
  },
  {
    id: "jm-bottling-plant-economic-v2",
    type: "industry",
    parent: "JM-13",
    coords: [-76.82, 18.00],
    name: { de: "Getränkeabfüllanlage", hu: "Italpalackozó üzem", ro: "Facilitate de îmbuteliere a băuturilor", en: "Beverage Bottling Plant" },
    description: {
      de: "Große industrielle Abfüllanlage für Softdrinks und lokale Getränke.",
      hu: "Nagy ipari palackozóüzem üdítőitalok és helyi italok számára.",
      ro: "Mare unitate industrială de îmbuteliere pentru băuturi răcoritoare și băuturi locale.",
      en: "Large industrial bottling plant for soft drinks and local beverages."
    },
    facts: {
      de: ["Abfüllbetrieb", "Lebensmittelindustrie", "Industrieproduktion", "Distribution"],
      hu: ["Palackozóüzem", "Élelmiszeripar", "Ipari termelés", "Disztribúció"],
      ro: ["Operațiuni de îmbuteliere", "Industria alimentară", "Producție industrială", "Distribuție"],
      en: ["Bottling operations", "Food industry", "Industrial production", "Distribution"]
    }
  },
  {
    id: "jm-telecom-hub-economic-v2",
    type: "industry",
    parent: "JM-13",
    coords: [-76.77, 18.00],
    name: { de: "Telekommunikations-Hub", hu: "Telekommunikációs központ", ro: "Hub de telecomunicații", en: "Telecommunications Hub" },
    description: {
      de: "Zentrale Knotenpunkt für digitale Infrastruktur und Kommunikation.",
      hu: "Digitális infrastruktúra és kommunikáció központi csomópontja.",
      ro: "Nod central pentru infrastructură digitală și comunicații.",
      en: "Central hub for digital infrastructure and communication."
    },
    facts: {
      de: ["Digitale Infrastruktur", "Telekommunikation", "Datenübertragung", "Technologie"],
      hu: ["Digitális infrastruktúra", "Telekommunikáció", "Adatátvitel", "Technológia"],
      ro: ["Infrastructură digitală", "Telecomunicații", "Transmisia datelor", "Tehnologie"],
      en: ["Digital infrastructure", "Telecommunications", "Data transmission", "Technology"]
    }
  },
  {
    id: "jm-solar-farm-economic-v2",
    type: "industry",
    parent: "JM-09",
    coords: [-77.80, 18.30],
    name: { de: "Solarpark", hu: "Naperőmű", ro: "Parc solar", en: "Solar Farm" },
    description: {
      de: "Große Anlage zur Erzeugung von erneuerbarer Energie.",
      hu: "Nagy létesítmény megújuló energia termelésére.",
      ro: "Mare unitate pentru producția de energie regenerabilă.",
      en: "Large facility for renewable energy generation."
    },
    facts: {
      de: ["Erneuerbare Energien", "Solarstrom", "Stromnetz", "Nachhaltigkeit"],
      hu: ["Megújuló energiák", "Napenergia", "Villamoshálózat", "Fenntarthatóság"],
      ro: ["Energie regenerabilă", "Energie solară", "Rețea electrică", "Sustenabilitate"],
      en: ["Renewable energies", "Solar power", "Electrical grid", "Sustainability"]
    }
  },
  {
    id: "jm-airport-cargo-economic-v2",
    type: "port",
    parent: "JM-09",
    coords: [-77.90, 18.50],
    name: { de: "Sangster Frachtterminal", hu: "Sangster áruterminál", ro: "Terminalul de marfă Sangster", en: "Sangster Cargo Terminal" },
    description: {
      de: "Wichtiger Logistikstandort für Luftfracht.",
      hu: "Fontos logisztikai helyszín légi áruszállítás számára.",
      ro: "Locație logistică importantă pentru transportul aerian de marfă.",
      en: "Important logistics location for air freight."
    },
    facts: {
      de: ["Luftfracht", "Logistik", "Export/Import", "Transportwesen"],
      hu: ["Légi áruszállítás", "Logisztika", "Export/Import", "Szállítás"],
      ro: ["Transport aerian de marfă", "Logistică", "Export/Import", "Transport"],
      en: ["Air freight", "Logistics", "Export/Import", "Transportation"]
    }
  },
  {
    id: "jm-mineral-terminal-economic-v2",
    type: "port",
    parent: "JM-08",
    coords: [-77.40, 18.47],
    name: { de: "Mineralien-Umschlagterminal", hu: "Ásványi anyag átrakodó terminál", ro: "Terminal de transbordare a mineralelor", en: "Mineral Transshipment Terminal" },
    description: {
      de: "Spezialisierte Anlage für den Umschlag von Mineralien.",
      hu: "Speciális létesítmény ásványi anyagok átrakodására.",
      ro: "Unitate specializată pentru transbordarea mineralelor.",
      en: "Specialized facility for transshipment of minerals."
    },
    facts: {
      de: ["Umschlagplatz", "Mineralien", "Logistik-Terminal", "Großhandel"],
      hu: ["Átrakodóhely", "Ásványi anyagok", "Logisztikai terminál", "Nagykereskedelem"],
      ro: ["Loc de transbordare", "Minerale", "Terminal logistic", "Comerț cu ridicata"],
      en: ["Transshipment point", "Minerals", "Logistics terminal", "Wholesale"]
    }
  },
  {
    id: "jm-agri-processing-economic-v2",
    type: "industry",
    parent: "JM-05",
    coords: [-77.35, 18.25],
    name: { de: "Agrar-Verarbeitungszentrum", hu: "Mezőgazdasági feldolgozó központ", ro: "Centru de procesare agricolă", en: "Agricultural Processing Center" },
    description: {
      de: "Zentrum für die Verarbeitung lokaler landwirtschaftlicher Erzeugnisse.",
      hu: "Központ helyi mezőgazdasági termékek feldolgozására.",
      ro: "Centru pentru procesarea produselor agricole locale.",
      en: "Center for the processing of local agricultural products."
    },
    facts: {
      de: ["Landwirtschaft", "Produktverarbeitung", "Agrarwirtschaft", "Lebensmittel"],
      hu: ["Mezőgazdaság", "Termékfeldolgozás", "Agrárgazdaság", "Élelmiszerek"],
      ro: ["Agricultură", "Procesarea produselor", "Economie agrară", "Alimente"],
      en: ["Agriculture", "Product processing", "Agro-economy", "Foodstuffs"]
    }
  },
  {
    id: "jm-water-works-economic-v2",
    type: "industry",
    parent: "JM-13",
    coords: [-76.78, 17.96],
    name: { de: "Wasserwerk Kingston", hu: "Kingstoni vízmű", ro: "Uzina de apă Kingston", en: "Kingston Water Works" },
    description: {
      de: "Zentrale Wasseraufbereitungsanlage für die Hauptstadtregion.",
      hu: "Központi víztisztító telep a fővárosi régió számára.",
      ro: "Uzina centrală de tratare a apei pentru regiunea capitalei.",
      en: "Central water treatment facility for the capital region."
    },
    facts: {
      de: ["Wasseraufbereitung", "Infrastruktur", "Öffentliche Dienste", "Ressourcenmanagement"],
      hu: ["Víztisztítás", "Infrastruktúra", "Közszolgáltatások", "Erőforrás-gazdálkodás"],
      ro: ["Tratarea apei", "Infrastructură", "Servicii publice", "Managementul resurselor"],
      en: ["Water treatment", "Infrastructure", "Public services", "Resource management"]
    }
  },
  {
    id: "jm-fruit-packhouse-economic-v2",
    type: "industry",
    parent: "JM-08",
    coords: [-77.60, 18.40],
    name: { de: "Frucht-Packhaus", hu: "Gyümölcs-csomagolóüzem", ro: "Unitate de ambalare a fructelor", en: "Fruit Packhouse" },
    description: {
      de: "Spezialisierte Anlage zur Verpackung und Vorbereitung von Früchten für den Export.",
      hu: "Speciális üzem gyümölcsök exportra történő csomagolására és előkészítésére.",
      ro: "Unitate specializată pentru ambalarea și pregătirea fructelor pentru export.",
      en: "Specialized facility for packing and preparing fruits for export."
    },
    facts: {
      de: ["Export-Verpackung", "Fruchtwirtschaft", "Lebensmittellogistik", "Agrar-Industrie"],
      hu: ["Exportcsomagolás", "Gyümölcsgazdaság", "Élelmiszer-logisztika", "Agráripar"],
      ro: ["Ambalare pentru export", "Economia fructelor", "Logistica alimentară", "Agroindustrie"],
      en: ["Export packaging", "Fruit economy", "Food logistics", "Agro-industry"]
    }
  },
  {
    id: "jm-shipyard-economic-v2",
    type: "industry",
    parent: "JM-13",
    coords: [-76.79, 17.95],
    name: { de: "Schiffswerft Kingston", hu: "Kingstoni hajógyár", ro: "Șantier naval Kingston", en: "Kingston Shipyard" },
    description: {
      de: "Anlage für die Wartung und Reparatur von Schiffen.",
      hu: "Hajók karbantartására és javítására szolgáló létesítmény.",
      ro: "Facilitate pentru întreținerea și repararea navelor.",
      en: "Facility for maintenance and repair of vessels."
    },
    facts: {
      de: ["Schiffsreparatur", "Maritime Dienstleistungen", "Industrielle Wartung", "Hafeninfrastruktur"],
      hu: ["Hajójavítás", "Tengeri szolgáltatások", "Ipari karbantartás", "Kikötői infrastruktúra"],
      ro: ["Reparații navale", "Servicii maritime", "Întreținere industrială", "Infrastructură portuară"],
      en: ["Ship repair", "Maritime services", "Industrial maintenance", "Port infrastructure"]
    }
  },
  {
    id: "jm-bio-fuel-plant-economic-v2",
    type: "industry",
    parent: "JM-05",
    coords: [-77.55, 18.28],
    name: { de: "Biokraftstoffanlage", hu: "Bioüzemanyag-üzem", ro: "Unitate de biocombustibil", en: "Bio-Fuel Plant" },
    description: {
      de: "Anlage zur Herstellung von Biokraftstoffen aus Agrarabfällen.",
      hu: "Létesítmény bioüzemanyagok előállítására mezőgazdasági hulladékból.",
      ro: "Unitate pentru producția de biocombustibili din deșeuri agricole.",
      en: "Facility for the production of bio-fuels from agricultural waste."
    },
    facts: {
      de: ["Bioenergie", "Erneuerbare Stoffe", "Nachhaltigkeit", "Industrielle Verarbeitung"],
      hu: ["Bioenergia", "Megújuló anyagok", "Fenntarthatóság", "Ipari feldolgozás"],
      ro: ["Bioenergie", "Materiale regenerabile", "Sustenabilitate", "Procesare industrială"],
      en: ["Bio-energy", "Renewable materials", "Sustainability", "Industrial processing"]
    }
  },
  {
    id: "jm-meat-packing-economic-v2",
    type: "industry",
    parent: "JM-10",
    coords: [-77.05, 18.02],
    name: { de: "Fleischverarbeitungswerk", hu: "Húsfeldolgozó üzem", ro: "Unitate de procesare a cărnii", en: "Meat Packing Plant" },
    description: {
      de: "Großer Betrieb zur Verarbeitung von Fleischprodukten für den Inlandsmarkt.",
      hu: "Nagy üzem hústermékek feldolgozására a belföldi piac számára.",
      ro: "Unitate mare pentru procesarea produselor din carne pentru piața internă.",
      en: "Large operation for processing meat products for the domestic market."
    },
    facts: {
      de: ["Fleischprodukte", "Lebensmittelindustrie", "Lokale Wirtschaft", "Agrarverarbeitung"],
      hu: ["Hústermékek", "Élelmiszeripar", "Helyi gazdaság", "Mezőgazdasági feldolgozás"],
      ro: ["Produse din carne", "Industria alimentară", "Economie locală", "Procesare agricolă"],
      en: ["Meat products", "Food industry", "Local economy", "Agro-processing"]
    }
  },
  {
    id: "jm-cold-storage-economic-v2",
    type: "industry",
    parent: "JM-13",
    coords: [-76.80, 17.96],
    name: { de: "Kühlhaus-Logistik", hu: "Hűtőházi logisztika", ro: "Logistică de depozitare la rece", en: "Cold Storage Logistics" },
    description: {
      de: "Große industrielle Kühlanlage für verderbliche Waren.",
      hu: "Nagy ipari hűtőberendezés romlandó áruk számára.",
      ro: "Mare unitate industrială de răcire pentru mărfuri perisabile.",
      en: "Large industrial refrigeration facility for perishable goods."
    },
    facts: {
      de: ["Kühllogistik", "Lebensmittelsicherheit", "Export-Vorbereitung", "Versorgungskette"],
      hu: ["Hűtési logisztika", "Élelmiszerbiztonság", "Export-előkészítés", "Ellátási lánc"],
      ro: ["Logistică frigorifică", "Siguranța alimentară", "Pregătirea pentru export", "Lanțul de aprovizionare"],
      en: ["Cold logistics", "Food safety", "Export preparation", "Supply chain"]
    }
  },
  {
    id: "jm-textile-factory-economic-v2",
    type: "industry",
    parent: "JM-13",
    coords: [-76.78, 17.99],
    name: { de: "Textilfabrik Kingston", hu: "Kingstoni textilgyár", ro: "Fabrica de textile Kingston", en: "Kingston Textile Factory" },
    description: {
      de: "Industrielle Fertigung von Textilien für lokale und Exportzwecke.",
      hu: "Ipari textilgyártás helyi és exportcélokra.",
      ro: "Producție industrială de textile pentru scopuri locale și de export.",
      en: "Industrial manufacturing of textiles for local and export purposes."
    },
    facts: {
      de: ["Textilproduktion", "Herstellung", "Export", "Industrie"],
      hu: ["Textilgyártás", "Gyártás", "Export", "Ipar"],
      ro: ["Producție textilă", "Fabricație", "Export", "Industrie"],
      en: ["Textile production", "Manufacturing", "Export", "Industry"]
    }
  }
];
