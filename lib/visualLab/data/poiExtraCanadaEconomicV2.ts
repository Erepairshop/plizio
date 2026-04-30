import type { POI } from "./poi";

export const poiExtraCanadaEconomicV2: POI[] = [
{
    id: "syncrude-oilsands-economic-v2",
    type: "industry",
    parent: "CA-AB",
    coords: [-111.45, 57.0],
    name: { de: "Syncrude Ölsande", hu: "Syncrude olajhomok", ro: "Nisipurile petrolifere Syncrude", en: "Syncrude Oil Sands" },
    description: { de: "Großflächiges Ölsand-Extraktionsprojekt in Alberta.", hu: "Nagyszabású olajhomok-kitermelő projekt Albertában.", ro: "Proiect major de extracție a nisipurilor bituminoase în Alberta.", en: "Large-scale oil sands extraction project in Alberta." },
    facts: {
      de: ["Ölsand-Produktion", "Wichtiger Wirtschaftsfaktor"],
      hu: ["Olajhomok-kitermelés", "Fontos gazdasági tényező"],
      ro: ["Extracția nisipurilor bituminoase", "Factor economic major"],
      en: ["Oil sands production", "Key economic driver"]
    }
  },
  {
    id: "suncor-fort-mcmurray-economic-v2",
    type: "industry",
    parent: "CA-AB",
    coords: [-111.38, 56.73],
    name: { de: "Suncor Fort McMurray", hu: "Suncor Fort McMurray", ro: "Suncor Fort McMurray", en: "Suncor Fort McMurray" },
    description: { de: "Industrielle Anlage zur Verarbeitung von Ölsanden.", hu: "Ipari létesítmény olajhomok feldolgozására.", ro: "Facilitate industrială pentru procesarea nisipurilor bituminoase.", en: "Industrial facility for processing oil sands." },
    facts: {
      de: ["Produktion von Bitumen", "Industrielle Verarbeitung"],
      hu: ["Bitumen termelés", "Ipari feldolgozás"],
      ro: ["Producția de bitum", "Procesare industrială"],
      en: ["Bitumen production", "Industrial processing"]
    }
  },
  {
    id: "sudbury-nickel-mines-economic-v2",
    type: "industry",
    parent: "CA-ON",
    coords: [-81.0, 46.5],
    name: { de: "Sudbury Nickelminen", hu: "Sudbury nikkelbányák", ro: "Minele de nichel Sudbury", en: "Sudbury Nickel Mines" },
    description: { de: "Weltweit bedeutendes Zentrum der Nickelproduktion.", hu: "Világszinten jelentős központ a nikkeltermelésben.", ro: "Centru important la nivel mondial pentru producția de nichel.", en: "Globally significant hub for nickel production." },
    facts: {
      de: ["Nickel- und Kupferabbau", "Geologische Formation"],
      hu: ["Nikkel- és rézbányászat", "Geológiai képződmény"],
      ro: ["Mineritul de nichel și cupru", "Formațiune geologică"],
      en: ["Nickel and copper mining", "Geological formation"]
    }
  },
  {
    id: "potash-corp-saskatchewan-economic-v2",
    type: "industry",
    parent: "CA-SK",
    coords: [-106.66, 52.13],
    name: { de: "Kali-Bergbau Saskatchewan", hu: "Saskatchewani káliműtrágya-bányászat", ro: "Mineritul de potasă Saskatchewan", en: "Saskatchewan Potash Mining" },
    description: { de: "Einer der weltgrößten Produzenten von Kalisalzen.", hu: "A világ egyik legnagyobb kálisó-termelője.", ro: "Unul dintre cei mai mari producători de săruri de potasiu din lume.", en: "One of the world's largest producers of potash." },
    facts: {
      de: ["Kalisalz-Abbau", "Dünger-Export"],
      hu: ["Kálisó-bányászat", "Műtrágya export"],
      ro: ["Mineritul de săruri de potasiu", "Export de îngrășăminte"],
      en: ["Potash mining", "Fertilizer export"]
    }
  },
  {
    id: "gander-international-port-economic-v2",
    type: "port",
    parent: "CA-NL",
    coords: [-54.57, 48.95],
    name: { de: "Gander Logistikzentrum", hu: "Gander logisztikai központ", ro: "Centrul logistic Gander", en: "Gander Logistics Center" },
    description: { de: "Strategischer Knotenpunkt für Frachtverkehr.", hu: "Stratégiai csomópont a teherszállításban.", ro: "Nod strategic pentru transportul de marfă.", en: "Strategic hub for freight transport." },
    facts: {
      de: ["Frachtknotenpunkt", "Logistikzentrum"],
      hu: ["Teherszállítási csomópont", "Logisztikai központ"],
      ro: ["Nod de transport de marfă", "Centru logistic"],
      en: ["Freight hub", "Logistics center"]
    }
  },
  {
    id: "quebec-aluminum-smelter-economic-v2",
    type: "industry",
    parent: "CA-QC",
    coords: [-71.0, 48.4],
    name: { de: "Quebec Aluminiumhütte", hu: "Québeci alumíniumkohó", ro: "Topitoria de aluminiu Quebec", en: "Quebec Aluminum Smelter" },
    description: { de: "Große industrielle Einrichtung zur Aluminiumschmelze.", hu: "Nagy ipari létesítmény alumíniumolvasztáshoz.", ro: "Facilitate industrială mare pentru topirea aluminiului.", en: "Large industrial facility for aluminum smelting." },
    facts: {
      de: ["Aluminiumproduktion", "Energieintensive Industrie"],
      hu: ["Alumíniumgyártás", "Energiaigényes ipar"],
      ro: ["Producția de aluminiu", "Industrie energofagă"],
      en: ["Aluminum production", "Energy-intensive industry"]
    }
  },
  {
    id: "saint-john-port-economic-v2",
    type: "port",
    parent: "CA-NB",
    coords: [-66.05, 45.26],
    name: { de: "Hafen Saint John", hu: "Saint John-i kikötő", ro: "Portul Saint John", en: "Port of Saint John" },
    description: { de: "Wichtiger Industriehafen in New Brunswick.", hu: "Fontos ipari kikötő New Brunswickben.", ro: "Port industrial important în New Brunswick.", en: "Important industrial port in New Brunswick." },
    facts: {
      de: ["Industriehafen", "Wichtiger Handelsknoten"],
      hu: ["Ipari kikötő", "Fontos kereskedelmi csomópont"],
      ro: ["Port industrial", "Nod comercial important"],
      en: ["Industrial port", "Key trade hub"]
    }
  },
  {
    id: "thunder-bay-port-economic-v2",
    type: "port",
    parent: "CA-ON",
    coords: [-89.23, 48.43],
    name: { de: "Hafen Thunder Bay", hu: "Thunder Bay-i kikötő", ro: "Portul Thunder Bay", en: "Port of Thunder Bay" },
    description: { de: "Hauptumschlagplatz für Getreide am Oberen See.", hu: "Fő gabonaátrakodó állomás a Felső-tavon.", ro: "Principalul centru de transbordare a cerealelor pe Lacul Superior.", en: "Major grain transshipment hub on Lake Superior." },
    facts: {
      de: ["Getreideumschlag", "Großer Seehafen"],
      hu: ["Gabona-átrakodás", "Nagy tavi kikötő"],
      ro: ["Transbordarea cerealelor", "Port lacustru mare"],
      en: ["Grain transshipment", "Major lake port"]
    }
  },
  {
    id: "delta-port-economic-v2",
    type: "port",
    parent: "CA-BC",
    coords: [-123.15, 49.0],
    name: { de: "Deltaport Containerterminal", hu: "Deltaport konténerterminál", ro: "Terminalul de containere Deltaport", en: "Deltaport Container Terminal" },
    description: { de: "Einer der modernsten Containerterminals Kanadas.", hu: "Kanada egyik legmodernebb konténerterminálja.", ro: "Unul dintre cele mai moderne terminale de containere din Canada.", en: "One of Canada's most modern container terminals." },
    facts: {
      de: ["Containerumschlag", "Automatisierter Terminal"],
      hu: ["Konténer-átrakodás", "Automatizált terminál"],
      ro: ["Transbordarea containerelor", "Terminal automatizat"],
      en: ["Container handling", "Automated terminal"]
    }
  },
  {
    id: "sept-iles-port-economic-v2",
    type: "port",
    parent: "CA-QC",
    coords: [-66.38, 50.2],
    name: { de: "Hafen Sept-Îles", hu: "Sept-Îles-i kikötő", ro: "Portul Sept-Îles", en: "Port of Sept-Îles" },
    description: { de: "Wichtiger Hafen für den Export von Eisenerz.", hu: "Fontos kikötő vasérc exportjára.", ro: "Port important pentru exportul de minereu de fier.", en: "Major port for the export of iron ore." },
    facts: {
      de: ["Eisenerz-Export", "Tiefwasserhafen"],
      hu: ["Vasérc-export", "Mélyvízi kikötő"],
      ro: ["Export de minereu de fier", "Port de apă adâncă"],
      en: ["Iron ore export", "Deep-water port"]
    }
  },
  {
    id: "kitimat-lng-economic-v2",
    type: "industry",
    parent: "CA-BC",
    coords: [-128.67, 54.05],
    name: { de: "Kitimat LNG Anlage", hu: "Kitimat LNG üzem", ro: "Facilitatea Kitimat LNG", en: "Kitimat LNG Facility" },
    description: { de: "Großprojekt zur Verflüssigung von Erdgas für den Export.", hu: "Nagyszabású projekt földgáz cseppfolyósítására exportcélból.", ro: "Proiect major pentru lichefierea gazelor naturale în vederea exportului.", en: "Major project for liquefying natural gas for export." },
    facts: {
      de: ["Erdgas-Verflüssigung", "Export-Infrastruktur"],
      hu: ["Földgáz-cseppfolyósítás", "Export-infrastruktúra"],
      ro: ["Lichefierea gazelor naturale", "Infrastructură de export"],
      en: ["Natural gas liquefaction", "Export infrastructure"]
    }
  },
  {
    id: "windsor-assembly-plant-economic-v2",
    type: "industry",
    parent: "CA-ON",
    coords: [-83.0, 42.3],
    name: { de: "Windsor Fahrzeugwerk", hu: "Windsori autógyár", ro: "Uzina auto Windsor", en: "Windsor Assembly Plant" },
    description: { de: "Großes Montagewerk für Automobile in Ontario.", hu: "Nagy autó összeszerelő üzem Ontarióban.", ro: "Uzina mare de asamblare auto în Ontario.", en: "Major automobile assembly plant in Ontario." },
    facts: {
      de: ["Automobilproduktion", "Exportorientiert"],
      hu: ["Autógyártás", "Exportorientált"],
      ro: ["Producția de automobile", "Orientată spre export"],
      en: ["Automobile production", "Export-oriented"]
    }
  },
  {
    id: "saskatoon-uranium-mining-economic-v2",
    type: "industry",
    parent: "CA-SK",
    coords: [-106.6, 52.1],
    name: { de: "Uran-Bergbau Saskatchewan", hu: "Saskatchewani uránbányászat", ro: "Mineritul de uraniu Saskatchewan", en: "Saskatchewan Uranium Mining" },
    description: { de: "Region mit bedeutenden Uranvorkommen und Abbau.", hu: "Régió jelentős uránkészletekkel és bányászattal.", ro: "Regiune cu zăcăminte semnificative de uraniu și exploatare.", en: "Region with significant uranium deposits and mining." },
    facts: {
      de: ["Uranabbau", "Weltweit führend"],
      hu: ["Uránbányászat", "Világelső"],
      ro: ["Mineritul de uraniu", "Lider mondial"],
      en: ["Uranium mining", "World leader"]
    }
  },
  {
    id: "winnipeg-logistics-hub-economic-v2",
    type: "industry",
    parent: "CA-MB",
    coords: [-97.1, 49.9],
    name: { de: "Winnipeg Logistikdrehkreuz", hu: "Winnipegi logisztikai csomópont", ro: "Nodul logistic Winnipeg", en: "Winnipeg Logistics Hub" },
    description: { de: "Zentraler Knotenpunkt für den Güterverkehr in Kanada.", hu: "Központi csomópont a kanadai teherszállításban.", ro: "Nod central pentru transportul de marfă în Canada.", en: "Central hub for freight traffic in Canada." },
    facts: {
      de: ["Eisenbahn- und Logistikzentrum", "Zentraler Standort"],
      hu: ["Vasúti és logisztikai központ", "Központi telephely"],
      ro: ["Centru feroviar și logistic", "Locație centrală"],
      en: ["Rail and logistics center", "Central location"]
    }
  },
  {
    id: "burnaby-oil-refinery-economic-v2",
    type: "industry",
    parent: "CA-BC",
    coords: [-122.9, 49.2],
    name: { de: "Burnaby Ölraffinerie", hu: "Burnaby olajfinomító", ro: "Rafinăria de petrol Burnaby", en: "Burnaby Oil Refinery" },
    description: { de: "Wichtige Raffinerie in British Columbia.", hu: "Fontos olajfinomító British Columbiában.", ro: "Rafinărie importantă în Columbia Britanică.", en: "Major refinery in British Columbia." },
    facts: {
      de: ["Treibstoffproduktion", "Industrielle Veredelung"],
      hu: ["Üzemanyag-termelés", "Ipari finomítás"],
      ro: ["Producția de combustibil", "Rafinare industrială"],
      en: ["Fuel production", "Industrial refining"]
    }
  },
  {
    id: "nanticoke-steel-plant-economic-v2",
    type: "industry",
    parent: "CA-ON",
    coords: [-80.1, 42.8],
    name: { de: "Nanticoke Stahlwerk", hu: "Nanticoke acélmű", ro: "Oțelăria Nanticoke", en: "Nanticoke Steel Plant" },
    description: { de: "Großes Stahlwerk an den Großen Seen.", hu: "Nagy acélmű a Nagy-tavaknál.", ro: "Oțelărie mare la Marile Lacuri.", en: "Large steel plant on the Great Lakes." },
    facts: {
      de: ["Stahlproduktion", "Schwerindustrie"],
      hu: ["Acélgyártás", "Nehézipar"],
      ro: ["Producția de oțel", "Industrie grea"],
      en: ["Steel production", "Heavy industry"]
    }
  },
  {
    id: "columbia-river-hydro-economic-v2",
    type: "industry",
    parent: "CA-BC",
    coords: [-117.5, 49.3],
    name: { de: "Wasserkraft Columbia River", hu: "Columbia-folyó vízerőmű", ro: "Hidrocentrala Columbia River", en: "Columbia River Hydroelectric" },
    description: { de: "Große Wasserkraftanlage zur Stromerzeugung.", hu: "Nagy vízerőmű áramtermelésre.", ro: "Hidrocentrală mare pentru producerea de energie electrică.", en: "Large hydroelectric facility for power generation." },
    facts: {
      de: ["Stromerzeugung", "Erneuerbare Energie"],
      hu: ["Áramtermelés", "Megújuló energia"],
      ro: ["Producția de energie electrică", "Energie regenerabilă"],
      en: ["Power generation", "Renewable energy"]
    }
  },
  {
    id: "hamilton-port-economic-v2",
    type: "port",
    parent: "CA-ON",
    coords: [-79.8, 43.3],
    name: { de: "Hafen Hamilton", hu: "Hamiltoni kikötő", ro: "Portul Hamilton", en: "Port of Hamilton" },
    description: { de: "Wichtiger Binnenhafen an den Großen Seen.", hu: "Fontos belvízi kikötő a Nagy-tavaknál.", ro: "Port interior important la Marile Lacuri.", en: "Important inland port on the Great Lakes." },
    facts: {
      de: ["Industriehafen", "Handelsknotenpunkt"],
      hu: ["Ipari kikötő", "Kereskedelmi csomópont"],
      ro: ["Port industrial", "Nod comercial"],
      en: ["Industrial port", "Trade hub"]
    }
  },
  {
    id: "sarnia-petrochemical-economic-v2",
    type: "industry",
    parent: "CA-ON",
    coords: [-82.4, 43.0],
    name: { de: "Sarnia Chemiepark", hu: "Sarnia vegyipari park", ro: "Parcul chimic Sarnia", en: "Sarnia Chemical Park" },
    description: { de: "Großer Standort der petrochemischen Industrie.", hu: "A petrolkémiai ipar nagy központja.", ro: "Centru major al industriei petrochimice.", en: "Major hub of the petrochemical industry." },
    facts: {
      de: ["Petrochemie", "Kunststoffherstellung"],
      hu: ["Petrolkémia", "Műanyaggyártás"],
      ro: ["Petrochimie", "Producția de mase plastice"],
      en: ["Petrochemicals", "Plastic production"]
    }
  },
  {
    id: "vancouver-grain-terminals-economic-v2",
    type: "port",
    parent: "CA-BC",
    coords: [-123.1, 49.3],
    name: { de: "Vancouver Getreideterminals", hu: "Vancouveri gabonaterminálok", ro: "Terminalele de cereale Vancouver", en: "Vancouver Grain Terminals" },
    description: { de: "Spezialisierte Terminals für Getreideexporte nach Asien.", hu: "Speciális terminálok gabonaexportra Ázsiába.", ro: "Terminaluri specializate pentru exportul de cereale către Asia.", en: "Specialized terminals for grain exports to Asia." },
    facts: {
      de: ["Getreideexport", "Hochleistungsumschlag"],
      hu: ["Gabonaexport", "Nagy teljesítményű átrakodás"],
      ro: ["Export de cereale", "Transbordare de înaltă performanță"],
      en: ["Grain export", "High-capacity transshipment"]
    }
  },
  {
    id: "charlottetown-port-economic-v2",
    type: "port",
    parent: "CA-PE",
    coords: [-63.1, 46.2],
    name: { de: "Hafen Charlottetown", hu: "Charlottetowni kikötő", ro: "Portul Charlottetown", en: "Port of Charlottetown" },
    description: { de: "Wichtiger regionaler Hafen auf Prince Edward Island.", hu: "Fontos regionális kikötő Prince Edward Islanden.", ro: "Port regional important în Prince Edward Island.", en: "Important regional port on Prince Edward Island." },
    facts: {
      de: ["Regionaler Umschlag", "Fischereihafen"],
      hu: ["Regionális átrakodás", "Halászkikötő"],
      ro: ["Transbordare regională", "Port pescăresc"],
      en: ["Regional transshipment", "Fishing port"]
    }
  },
  {
    id: "oilsands-pipe-infrastructure-economic-v2",
    type: "industry",
    parent: "CA-AB",
    coords: [-112.0, 54.0],
    name: { de: "Ölsand Pipeline-Infrastruktur", hu: "Olajhomok csővezeték-hálózat", ro: "Infrastructura de conducte pentru nisipuri bituminoase", en: "Oil Sands Pipeline Infrastructure" },
    description: { de: "Großes Netzwerk für den Transport von Bitumen.", hu: "Nagy hálózat bitumen szállítására.", ro: "Rețea majoră pentru transportul bitumului.", en: "Large network for transporting bitumen." },
    facts: {
      de: ["Pipelines", "Transportlogistik"],
      hu: ["Csővezetékek", "Szállítási logisztika"],
      ro: ["Conducte", "Logistica transportului"],
      en: ["Pipelines", "Transport logistics"]
    }
  },
  {
    id: "st-johns-port-economic-v2",
    type: "port",
    parent: "CA-NL",
    coords: [-52.7, 47.5],
    name: { de: "Hafen St. John's", hu: "St. John's-i kikötő", ro: "Portul St. John's", en: "Port of St. John's" },
    description: { de: "Wichtiger Hafen an der Ostküste von Neufundland.", hu: "Fontos kikötő Új-Fundland keleti partján.", ro: "Port important pe coasta de est a Newfoundland.", en: "Important port on the east coast of Newfoundland." },
    facts: {
      de: ["Versorgungshafen", "Atlantische Basis"],
      hu: ["Ellátó kikötő", "Atlanti bázis"],
      ro: ["Port de aprovizionare", "Bază atlantică"],
      en: ["Supply port", "Atlantic base"]
    }
  },
  {
    id: "guelph-manufacturing-hub-economic-v2",
    type: "industry",
    parent: "CA-ON",
    coords: [-80.2, 43.5],
    name: { de: "Guelph Industriestandort", hu: "Guelphi ipari központ", ro: "Centru industrial Guelph", en: "Guelph Industrial Hub" },
    description: { de: "Diversifiziertes Industriezentrum in Ontario.", hu: "Diverzifikált ipari központ Ontarióban.", ro: "Centru industrial diversificat în Ontario.", en: "Diversified industrial hub in Ontario." },
    facts: {
      de: ["Fertigungsindustrie", "Technologiezentrum"],
      hu: ["Gyáripar", "Technológiai központ"],
      ro: ["Industrie prelucrătoare", "Centru tehnologic"],
      en: ["Manufacturing", "Technology hub"]
    }
  },
  {
    id: "baffin-mining-project-economic-v2",
    type: "industry",
    parent: "CA-NU",
    coords: [-75.0, 71.0],
    name: { de: "Baffin Bergbauprojekt", hu: "Baffin-szigeti bányászati projekt", ro: "Proiect minier Baffin", en: "Baffin Mining Project" },
    description: { de: "Eisenerz-Abbau in der Arktis.", hu: "Vasérc-bányászat az Északi-sarkvidéken.", ro: "Mineritul minereului de fier în regiunea arctică.", en: "Iron ore mining in the Arctic." },
    facts: {
      de: ["Arktischer Bergbau", "Spezialisierte Logistik"],
      hu: ["Sarkvidéki bányászat", "Speciális logisztika"],
      ro: ["Minerit arctic", "Logistică specializată"],
      en: ["Arctic mining", "Specialized logistics"]
    }
  },
  {
    id: "fraser-valley-agriculture-logistics-economic-v2",
    type: "industry",
    parent: "CA-BC",
    coords: [-122.0, 49.1],
    name: { de: "Fraser Valley Agrar-Logistik", hu: "Fraser-völgyi agrár-logisztika", ro: "Logistică agricolă Fraser Valley", en: "Fraser Valley Agriculture Logistics" },
    description: { de: "Logistikknotenpunkt für Agrarprodukte in British Columbia.", hu: "Logisztikai csomópont agrártermékeknek British Columbiában.", ro: "Nod logistic pentru produse agricole în Columbia Britanică.", en: "Logistics hub for agricultural products in British Columbia." },
    facts: {
      de: ["Agrar-Export", "Kühlhaus-Logistik"],
      hu: ["Agrárexport", "Hűtőház-logisztika"],
      ro: ["Export agricol", "Logistică de depozitare frigorifică"],
      en: ["Agricultural export", "Cold chain logistics"]
    }
  }
]
