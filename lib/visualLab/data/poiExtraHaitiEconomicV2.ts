import type { POI } from "./poi";

export const poiExtraHaitiEconomicV2: POI[] = [
  {
    id: "port-au-prince-port-economic-v2",
    type: "port",
    parent: "HT-OU",
    coords: [-72.335, 18.539],
    name: { de: "Seehafen Port-au-Prince", hu: "Port-au-Prince-i kikötő", ro: "Portul Port-au-Prince", en: "Port of Port-au-Prince" },
    description: { de: "Hauptumschlagplatz für Haitis Importe und Exporte.", hu: "Haiti legfontosabb import- és exportkikötője.", ro: "Principalul port de import și export al Haitului.", en: "The main import and export terminal for Haiti." },
    facts: {
      de: ["Größter Hafen des Landes", "Zentrum für Containerumschlag"],
      hu: ["Az ország legnagyobb kikötője", "Konténeres áruforgalom központja"],
      ro: ["Cel mai mare port al țării", "Centru de manipulare a containerelor"],
      en: ["Largest port in the country", "Center for container cargo handling"]
    }
  },
  {
    id: "cap-haitien-port-economic-v2",
    type: "port",
    parent: "HT-NO",
    coords: [-72.204, 19.761],
    name: { de: "Seehafen Cap-Haïtien", hu: "Cap-Haïtien-i kikötő", ro: "Portul Cap-Haïtien", en: "Port of Cap-Haïtien" },
    description: { de: "Wichtiger Hafen im Norden für den regionalen Handel.", hu: "Fontos északi kikötő a regionális kereskedelem számára.", ro: "Port important în nord pentru comerțul regional.", en: "Key northern port serving regional trade." },
    facts: {
      de: ["Versorgt den Norden", "Wichtiger Umschlagplatz"],
      hu: ["Ellátja az északi régiót", "Fontos áruátrakó hely"],
      ro: ["Deservește regiunea de nord", "Loc important de transbordare"],
      en: ["Serves the northern region", "Key transshipment point"]
    }
  },
  {
    id: "caracol-industrial-park-economic-v2",
    type: "industry",
    parent: "HT-NE",
    coords: [-72.000, 19.680],
    name: { de: "Caracol Industriepark", hu: "Caracol Ipari Park", ro: "Parcul Industrial Caracol", en: "Caracol Industrial Park" },
    description: { de: "Großes Industrieareal für Textilherstellung.", hu: "Nagy ipari terület textilgyártáshoz.", ro: "Mare zonă industrială pentru producția textilă.", en: "Major industrial park focused on garment manufacturing." },
    facts: {
      de: ["Beschäftigt tausende Arbeiter", "Exportorientierte Zone"],
      hu: ["Több ezer embert foglalkoztat", "Exportorientált zóna"],
      ro: ["Angajează mii de muncitori", "Zonă orientată spre export"],
      en: ["Employs thousands of workers", "Export-oriented zone"]
    }
  },
  {
    id: "miragoane-port-economic-v2",
    type: "port",
    parent: "HT-NI",
    coords: [-73.088, 18.448],
    name: { de: "Hafen Miragoâne", hu: "Miragoâne-i kikötő", ro: "Portul Miragoâne", en: "Port of Miragoâne" },
    description: { de: "Hafen für den Export von Bodenschätzen.", hu: "Kikötő az ásványkincsek exportjához.", ro: "Port pentru exportul resurselor minerale.", en: "Port facility used for mineral exports." },
    facts: {
      de: ["Bauxit-Verschiffung", "Wichtig für die Region"],
      hu: ["Bauxitszállítás", "Fontos a régió számára"],
      ro: ["Transport de bauxită", "Important pentru regiune"],
      en: ["Bauxite shipping", "Important for the region"]
    }
  },
  {
    id: "saint-marc-port-economic-v2",
    type: "port",
    parent: "HT-AR",
    coords: [-72.680, 19.112],
    name: { de: "Hafen Saint-Marc", hu: "Saint-Marc-i kikötő", ro: "Portul Saint-Marc", en: "Port of Saint-Marc" },
    description: { de: "Regionaler Hafen für den Küstenhandel.", hu: "Regionális kikötő a partmenti kereskedelemhez.", ro: "Port regional pentru comerțul de coastă.", en: "Regional port supporting coastal trade." },
    facts: {
      de: ["Hauptsächlich landwirtschaftliche Güter", "Regionaler Umschlag"],
      hu: ["Főleg mezőgazdasági termékek", "Regionális forgalom"],
      ro: ["În principal produse agricole", "Tranzit regional"],
      en: ["Mainly agricultural products", "Regional transit"]
    }
  },
  {
    id: "jeremie-port-economic-v2",
    type: "port",
    parent: "HT-GA",
    coords: [-74.116, 18.641],
    name: { de: "Hafen Jérémie", hu: "Jérémie-i kikötő", ro: "Portul Jérémie", en: "Port of Jérémie" },
    description: { de: "Wichtiger Verbindungspunkt für die Grand'Anse Region.", hu: "Fontos összekötő pont Grand'Anse régió számára.", ro: "Punct important de legătură pentru regiunea Grand'Anse.", en: "Critical link for the Grand'Anse region." },
    facts: {
      de: ["Wichtig für isolierte Gebiete", "Lokaler Handel"],
      hu: ["Fontos az elszigetelt területeknek", "Helyi kereskedelem"],
      ro: ["Important pentru zone izolate", "Comerț local"],
      en: ["Vital for isolated areas", "Local trade"]
    }
  },
  {
    id: "port-de-paix-port-economic-v2",
    type: "port",
    parent: "HT-NO",
    coords: [-72.828, 19.949],
    name: { de: "Hafen Port-de-Paix", hu: "Port-de-Paix-i kikötő", ro: "Portul Port-de-Paix", en: "Port of Port-de-Paix" },
    description: { de: "Hafen an der Nordküste.", hu: "Északi partvidéki kikötő.", ro: "Port pe coasta de nord.", en: "Port on the northern coast." },
    facts: {
      de: ["Handel mit Tortuga", "Regionale Versorgung"],
      hu: ["Kereskedelem Tortugával", "Regionális ellátás"],
      ro: ["Comerț cu Tortuga", "Aprovizionare regională"],
      en: ["Trade with Tortuga", "Regional supply"]
    }
  },
  {
    id: "aux-cayes-port-economic-v2",
    type: "port",
    parent: "HT-SU",
    coords: [-73.748, 18.204],
    name: { de: "Hafen Les Cayes", hu: "Les Cayes-i kikötő", ro: "Portul Les Cayes", en: "Port of Les Cayes" },
    description: { de: "Südlicher Haupthafen.", hu: "Déli fő kikötő.", ro: "Principalul port din sud.", en: "Main port in the south." },
    facts: {
      de: ["Wichtig für Agrarexporte", "Versorgung des Südens"],
      hu: ["Fontos mezőgazdasági export", "Déli régió ellátása"],
      ro: ["Important pentru exporturi agricole", "Aprovizionarea sudului"],
      en: ["Important for agricultural exports", "Supplying the south"]
    }
  },
  {
    id: "fort-liberte-port-economic-v2",
    type: "port",
    parent: "HT-NE",
    coords: [-71.838, 19.664],
    name: { de: "Hafen Fort-Liberté", hu: "Fort-Liberté-i kikötő", ro: "Portul Fort-Liberté", en: "Port of Fort-Liberté" },
    description: { de: "Historischer Hafen im Nordosten.", hu: "Történelmi kikötő északkeleten.", ro: "Port istoric în nord-est.", en: "Historic port in the northeast." },
    facts: {
      de: ["Natürlicher Tiefwasserhafen", "Wachsender Handel"],
      hu: ["Természetes mélyvízi kikötő", "Növekvő kereskedelem"],
      ro: ["Port natural de mare adâncime", "Comerț în creștere"],
      en: ["Natural deep-water port", "Growing trade"]
    }
  },
  {
    id: "la-gonave-port-economic-v2",
    type: "port",
    parent: "HT-OU",
    coords: [-73.051, 18.847],
    name: { de: "Hafen La Gonâve", hu: "La Gonâve-i kikötő", ro: "Portul La Gonâve", en: "Port of La Gonâve" },
    description: { de: "Verbindungshafen zur Insel La Gonâve.", hu: "Összekötő kikötő La Gonâve szigetéhez.", ro: "Port de legătură către insula La Gonâve.", en: "Connecting port to the island of La Gonâve." },
    facts: {
      de: ["Versorgung der Inselbewohner", "Lokaler Fischereihafen"],
      hu: ["Szigetlakók ellátása", "Helyi halászkikötő"],
      ro: ["Aprovizionarea insularilor", "Port pescăresc local"],
      en: ["Supplying island residents", "Local fishing port"]
    }
  },
  {
    id: "cite-soleil-manufacturing-economic-v2",
    type: "industry",
    parent: "HT-OU",
    coords: [-72.316, 18.571],
    name: { de: "Cité Soleil Industriegebiet", hu: "Cité Soleil ipari övezet", ro: "Zona industrială Cité Soleil", en: "Cité Soleil Industrial Zone" },
    description: { de: "Industriegebiet am Rande der Hauptstadt.", hu: "Ipari terület a főváros szélén.", ro: "Zonă industrială la marginea capitalei.", en: "Industrial area on the outskirts of the capital." },
    facts: {
      de: ["Leichtindustrie", "Produktion für lokale Märkte"],
      hu: ["Könnyűipar", "Termelés a helyi piacokra"],
      ro: ["Industrie ușoară", "Producție pentru piețele locale"],
      en: ["Light manufacturing", "Production for local markets"]
    }
  },
  {
    id: "gonaives-industry-economic-v2",
    type: "industry",
    parent: "HT-AR",
    coords: [-72.686, 19.450],
    name: { de: "Gonaïves Industrie", hu: "Gonaïves ipar", ro: "Industria Gonaïves", en: "Gonaïves Industry" },
    description: { de: "Zentrum für Salzgewinnung und Verarbeitung.", hu: "Sóbányászat és feldolgozás központja.", ro: "Centru pentru extracția și procesarea sării.", en: "Center for salt extraction and processing." },
    facts: {
      de: ["Große Salzsalinen", "Regionale industrielle Basis"],
      hu: ["Nagy sólepárlók", "Regionális ipari bázis"],
      ro: ["Saline mari", "Bază industrială regională"],
      en: ["Large salt pans", "Regional industrial base"]
    }
  },
  {
    id: "thomazeau-agri-industry-economic-v2",
    type: "industry",
    parent: "HT-OU",
    coords: [-72.100, 18.650],
    name: { de: "Thomazeau Agrarindustrie", hu: "Thomazeau agráripar", ro: "Agroindustrie Thomazeau", en: "Thomazeau Agro-industry" },
    description: { de: "Verarbeitungszentrum für landwirtschaftliche Produkte.", hu: "Mezőgazdasági termékek feldolgozó központja.", ro: "Centru de procesare pentru produse agricole.", en: "Processing hub for agricultural products." },
    facts: {
      de: ["Verarbeitung von Früchten", "Lokale Beschäftigung"],
      hu: ["Gyümölcsfeldolgozás", "Helyi foglalkoztatás"],
      ro: ["Procesarea fructelor", "Angajare locală"],
      en: ["Fruit processing", "Local employment"]
    }
  },
  {
    id: "milot-industry-economic-v2",
    type: "industry",
    parent: "HT-NO",
    coords: [-72.210, 19.600],
    name: { de: "Milot Bauindustrie", hu: "Milot építőipar", ro: "Industria construcțiilor Milot", en: "Milot Construction Industry" },
    description: { de: "Zentrum für die Restaurierung und Baustoffe.", hu: "Restaurálási és építőanyag központ.", ro: "Centru pentru restaurare și materiale de construcție.", en: "Restoration and construction materials center." },
    facts: {
      de: ["Handwerkliche Fertigung", "Wichtig für historische Stätten"],
      hu: ["Kézműves gyártás", "Fontos történelmi helyszíneknek"],
      ro: ["Producție artizanală", "Important pentru situri istorice"],
      en: ["Artisan manufacturing", "Important for historic sites"]
    }
  },
  {
    id: "mirebalais-energy-economic-v2",
    type: "industry",
    parent: "HT-CE",
    coords: [-72.106, 18.823],
    name: { de: "Mirebalais Energiezentrum", hu: "Mirebalais energiaközpont", ro: "Centru energetic Mirebalais", en: "Mirebalais Energy Center" },
    description: { de: "Wichtiger Standort für Energieinfrastruktur.", hu: "Fontos energia-infrastruktúra helyszín.", ro: "Locație importantă pentru infrastructura energetică.", en: "Important site for energy infrastructure." },
    facts: {
      de: ["Netzknotenpunkt", "Versorgung des Artibonite-Tals"],
      hu: ["Hálózati csomópont", "Artibonite-völgy ellátása"],
      ro: ["Nod de rețea", "Aprovizionarea văii Artibonite"],
      en: ["Network hub", "Supplying the Artibonite valley"]
    }
  },
  {
    id: "les-cayes-manufacturing-economic-v2",
    type: "industry",
    parent: "HT-SU",
    coords: [-73.750, 18.200],
    name: { de: "Les Cayes Industrie", hu: "Les Cayes ipar", ro: "Industria Les Cayes", en: "Les Cayes Industry" },
    description: { de: "Fertigungszentrum für Konsumgüter.", hu: "Fogyasztási cikkek gyártó központja.", ro: "Centru de producție pentru bunuri de larg consum.", en: "Manufacturing hub for consumer goods." },
    facts: {
      de: ["Verarbeitung lokaler Rohstoffe", "Regionales Handelszentrum"],
      hu: ["Helyi nyersanyagok feldolgozása", "Regionális kereskedelmi központ"],
      ro: ["Procesarea materiilor prime locale", "Centru comercial regional"],
      en: ["Processing local raw materials", "Regional trade hub"]
    }
  },
  {
    id: "cabaret-cement-economic-v2",
    type: "industry",
    parent: "HT-OU",
    coords: [-72.410, 18.730],
    name: { de: "Cabaret Zementwerk", hu: "Cabaret cementgyár", ro: "Fabrica de ciment Cabaret", en: "Cabaret Cement Plant" },
    description: { de: "Großes Zementwerk für den Bausektor.", hu: "Nagy cementgyár az építőipar számára.", ro: "Fabrica mare de ciment pentru sectorul construcțiilor.", en: "Large cement plant serving the construction sector." },
    facts: {
      de: ["Baustoffproduktion", "Versorgung der Hauptstadt"],
      hu: ["Építőanyag-gyártás", "A főváros ellátása"],
      ro: ["Producția de materiale de construcție", "Aprovizionarea capitalei"],
      en: ["Building material production", "Supplying the capital"]
    }
  },
  {
    id: "petion-ville-commerce-economic-v2",
    type: "industry",
    parent: "HT-OU",
    coords: [-72.285, 18.511],
    name: { de: "Pétion-Ville Handelszentrum", hu: "Pétion-Ville kereskedelmi központ", ro: "Centru comercial Pétion-Ville", en: "Pétion-Ville Commercial Hub" },
    description: { de: "Zentrum für Dienstleistungen und modernen Handel.", hu: "Szolgáltatások és modern kereskedelem központja.", ro: "Centru pentru servicii și comerț modern.", en: "Center for services and modern trade." },
    facts: {
      de: ["Finanzdienstleistungen", "Einzelhandel"],
      hu: ["Pénzügyi szolgáltatások", "Kiskereskedelem"],
      ro: ["Servicii financiare", "Comerț cu amănuntul"],
      en: ["Financial services", "Retail trade"]
    }
  },
  {
    id: "saint-michel-agri-economic-v2",
    type: "industry",
    parent: "HT-AR",
    coords: [-72.300, 19.350],
    name: { de: "Saint-Michel Agrar", hu: "Saint-Michel agrár", ro: "Agro Saint-Michel", en: "Saint-Michel Agro" },
    description: { de: "Zentrum für Zuckerrohrverarbeitung.", hu: "Cukornád-feldolgozó központ.", ro: "Centru de procesare a trestiei de zahăr.", en: "Center for sugarcane processing." },
    facts: {
      de: ["Zuckerproduktion", "Lokale Genossenschaften"],
      hu: ["Cukortermelés", "Helyi szövetkezetek"],
      ro: ["Producția de zahăr", "Cooperative locale"],
      en: ["Sugar production", "Local cooperatives"]
    }
  },
  {
    id: "limonade-tech-economic-v2",
    type: "industry",
    parent: "HT-NO",
    coords: [-72.130, 19.650],
    name: { de: "Limonade Bildungs- und Industriepark", hu: "Limonade Oktatási és Ipari Park", ro: "Parcul educațional și industrial Limonade", en: "Limonade Educational and Industrial Park" },
    description: { de: "Campus für Agrartechnologie und Ausbildung.", hu: "Agrártechnológiai és képzési campus.", ro: "Campus pentru tehnologie agricolă și formare.", en: "Campus for agricultural technology and training." },
    facts: {
      de: ["Moderne Landwirtschaft", "Forschungszentrum"],
      hu: ["Modern mezőgazdaság", "Kutatóközpont"],
      ro: ["Agricultură modernă", "Centru de cercetare"],
      en: ["Modern agriculture", "Research center"]
    }
  },
  {
    id: "jacmel-port-economic-v2",
    type: "port",
    parent: "HT-SE",
    coords: [-72.533, 18.232],
    name: { de: "Hafen Jacmel", hu: "Jacmel-i kikötő", ro: "Portul Jacmel", en: "Port of Jacmel" },
    description: { de: "Kultur- und Hafenstadt.", hu: "Kulturális és kikötőváros.", ro: "Oraș cultural și portuar.", en: "Cultural and port city." },
    facts: {
      de: ["Tourismus-Infrastruktur", "Kleiner Küstenhandel"],
      hu: ["Turisztikai infrastruktúra", "Kis partmenti kereskedelem"],
      ro: ["Infrastructură turistică", "Comerț de coastă mic"],
      en: ["Tourism infrastructure", "Small coastal trade"]
    }
  },
  {
    id: "anse-a-galets-port-economic-v2",
    type: "port",
    parent: "HT-OU",
    coords: [-73.125, 18.835],
    name: { de: "Hafen Anse-à-Galets", hu: "Anse-à-Galets-i kikötő", ro: "Portul Anse-à-Galets", en: "Port of Anse-à-Galets" },
    description: { de: "Hauptzugangspunkt zur Insel Gonâve.", hu: "Fő belépési pont Gonâve szigetére.", ro: "Principalul punct de acces pe insula Gonâve.", en: "Main entry point to the island of Gonâve." },
    facts: {
      de: ["Versorgungsschnittstelle", "Regionaler Umschlag"],
      hu: ["Ellátási csomópont", "Regionális forgalom"],
      ro: ["Interfață de aprovizionare", "Tranzit regional"],
      en: ["Supply interface", "Regional transit"]
    }
  },
  {
    id: "port-margot-fishing-economic-v2",
    type: "industry",
    parent: "HT-NO",
    coords: [-72.400, 19.780],
    name: { de: "Port-Margot Fischerei", hu: "Port-Margot halászat", ro: "Pescuit Port-Margot", en: "Port-Margot Fishing Industry" },
    description: { de: "Zentrum der lokalen Fischereiindustrie.", hu: "A helyi halászipar központja.", ro: "Centrul industriei locale de pescuit.", en: "Center of the local fishing industry." },
    facts: {
      de: ["Fischverarbeitung", "Versorgung der Nordküste"],
      hu: ["Halfeldolgozás", "Az északi partvidék ellátása"],
      ro: ["Procesarea peștelui", "Aprovizionarea coastei de nord"],
      en: ["Fish processing", "Supplying the north coast"]
    }
  },
  {
    id: "miragoane-industrial-zone-economic-v2",
    type: "industry",
    parent: "HT-NI",
    coords: [-73.080, 18.450],
    name: { de: "Miragoâne Industrie", hu: "Miragoâne ipar", ro: "Industria Miragoâne", en: "Miragoâne Industry" },
    description: { de: "Industriegebiet zur Verarbeitung lokaler Ressourcen.", hu: "Ipari terület helyi nyersanyagok feldolgozására.", ro: "Zonă industrială pentru procesarea resurselor locale.", en: "Industrial area for processing local resources." },
    facts: {
      de: ["Baustoffverarbeitung", "Logistik"],
      hu: ["Építőanyag-feldolgozás", "Logisztika"],
      ro: ["Procesarea materialelor de construcție", "Logistică"],
      en: ["Building material processing", "Logistics"]
    }
  },
  {
    id: "carrefour-commerce-economic-v2",
    type: "industry",
    parent: "HT-OU",
    coords: [-72.380, 18.530],
    name: { de: "Carrefour Handelszone", hu: "Carrefour kereskedelmi zóna", ro: "Zonă comercială Carrefour", en: "Carrefour Commercial Zone" },
    description: { de: "Großes Handels- und Dienstleistungsgebiet.", hu: "Nagy kereskedelmi és szolgáltatási terület.", ro: "Mare zonă comercială și de servicii.", en: "Large commercial and service area." },
    facts: {
      de: ["Wichtiger Dienstleistungsknoten", "Regionale Beschäftigung"],
      hu: ["Fontos szolgáltatási csomópont", "Regionális foglalkoztatás"],
      ro: ["Nod important de servicii", "Angajare regională"],
      en: ["Important service hub", "Regional employment"]
    }
  },
  {
    id: "petit-goave-port-economic-v2",
    type: "port",
    parent: "HT-OU",
    coords: [-72.855, 18.435],
    name: { de: "Hafen Petit-Goâve", hu: "Petit-Goâve-i kikötő", ro: "Portul Petit-Goâve", en: "Port of Petit-Goâve" },
    description: { de: "Regionaler Hafen an der Südküste.", hu: "Regionális kikötő a déli parton.", ro: "Port regional pe coasta de sud.", en: "Regional port on the south coast." },
    facts: {
      de: ["Agrarhandel", "Versorgung der lokalen Gemeinden"],
      hu: ["Mezőgazdasági kereskedelem", "Helyi közösségek ellátása"],
      ro: ["Comerț agricol", "Aprovizionarea comunităților locale"],
      en: ["Agricultural trade", "Supplying local communities"]
    }
  },
  {
    id: "saint-louis-du-sud-port-economic-v2",
    type: "port",
    parent: "HT-SU",
    coords: [-73.550, 18.270],
    name: { de: "Hafen Saint-Louis-du-Sud", hu: "Saint-Louis-du-Sud-i kikötő", ro: "Portul Saint-Louis-du-Sud", en: "Port of Saint-Louis-du-Sud" },
    description: { de: "Kleiner Hafen für den regionalen Handel.", hu: "Kis kikötő a regionális kereskedelemhez.", ro: "Port mic pentru comerțul regional.", en: "Small port for regional trade." },
    facts: {
      de: ["Fischereistützpunkt", "Lokaler Güterumschlag"],
      hu: ["Halászbázis", "Helyi áruforgalom"],
      ro: ["Bază pescărească", "Tranzit local de mărfuri"],
      en: ["Fishing base", "Local goods transit"]
    }
  },
  {
    id: "bainet-fishing-economic-v2",
    type: "industry",
    parent: "HT-SE",
    coords: [-72.750, 18.150],
    name: { de: "Bainet Fischerei", hu: "Bainet halászat", ro: "Pescuit Bainet", en: "Bainet Fishing Industry" },
    description: { de: "Lokaler Knotenpunkt der Fischereiwirtschaft.", hu: "A halászat helyi csomópontja.", ro: "Nod local al industriei pescuitului.", en: "Local hub for the fishing industry." },
    facts: {
      de: ["Fang und Verarbeitung", "Lokaler Markt"],
      hu: ["Fogás és feldolgozás", "Helyi piac"],
      ro: ["Captură și procesare", "Piață locală"],
      en: ["Catching and processing", "Local market"]
    }
  },
  {
    id: "les-anglais-fishing-economic-v2",
    type: "industry",
    parent: "HT-SU",
    coords: [-74.150, 18.150],
    name: { de: "Les Anglais Fischerei", hu: "Les Anglais halászat", ro: "Pescuit Les Anglais", en: "Les Anglais Fishing Industry" },
    description: { de: "Kleiner Fischereihafen an der Westküste.", hu: "Kis halászkikötő a nyugati parton.", ro: "Port pescăresc mic pe coasta de vest.", en: "Small fishing port on the west coast." },
    facts: {
      de: ["Traditioneller Fischfang", "Regionale Versorgung"],
      hu: ["Hagyományos halászat", "Regionális ellátás"],
      ro: ["Pescuit tradițional", "Aprovizionare regională"],
      en: ["Traditional fishing", "Regional supply"]
    }
  },
  {
    id: "port-au-prince-airport-cargo-economic-v2",
    type: "industry",
    parent: "HT-OU",
    coords: [-72.293, 18.577],
    name: { de: "Flughafen Port-au-Prince Frachtterminal", hu: "Port-au-Prince-i repülőtér áruforgalmi terminál", ro: "Terminal cargo aeroport Port-au-Prince", en: "Port-au-Prince Airport Cargo Terminal" },
    description: { de: "Wichtigster Luftfrachtumschlagplatz Haitis.", hu: "Haiti legfontosabb légi áruforgalmi központja.", ro: "Principalul centru de transport aerian de marfă al Haitului.", en: "Haiti's most important air cargo hub." },
    facts: {
      de: ["Wichtige Importe", "Schneller Umschlag"],
      hu: ["Fontos importok", "Gyors forgalom"],
      ro: ["Importuri importante", "Tranzit rapid"],
      en: ["Vital imports", "Fast turnover"]
    }
  }
];
