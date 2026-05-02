import type { POI } from "./poi";

export const poiExtraMauritiusEconomicV2: POI[] = [
  {
    id: "port-louis-harbor-economic-v2",
    type: "port",
    parent: "MU-PL",
    coords: [57.496, -20.158],
    name: {
      de: "Hafen von Port Louis",
      hu: "Port Louis kikötője",
      ro: "Portul Port Louis",
      en: "Port Louis Harbor"
    },
    description: {
      de: "Der strategisch günstig gelegene Hafen ist das wichtigste Tor für den Außenhandel von Mauritius und ein bedeutendes maritimes Drehkreuz im Indischen Ozean.",
      hu: "A stratégiailag kedvező fekvésű kikötő Mauritius külkereskedelmének legfontosabb kapuja és az Indiai-óceán jelentős tengeri központja.",
      ro: "Situat strategic, acest port este principala poartă pentru comerțul exterior al Mauritius și un nod maritim major în Oceanul Indian.",
      en: "Strategically located, this port is the primary gateway for Mauritius' foreign trade and a major maritime hub in the Indian Ocean."
    },
    facts: {
      de: ["Umschlagplatz für über 90% des Außenhandels", "Tiefseehafen mit modernen Containerterminals"],
      hu: ["A külkereskedelem több mint 90%-ának rakodóhelye", "Mélyvízi kikötő modern konténerterminálokkal"],
      ro: ["Punct de transbordare pentru peste 90% din comerțul exterior", "Port de adâncime cu terminale de containere moderne"],
      en: ["Handles over 90% of the country's foreign trade", "Deep-sea port with modern container terminals"]
    }
  },
  {
    id: "mauritius-freeport-economic-v2",
    type: "port",
    parent: "MU-PL",
    coords: [57.487, -20.145],
    name: {
      de: "Mauritius Freeport",
      hu: "Mauritius-i Szabadkikötő",
      ro: "Zona Liberă Mauritius",
      en: "Mauritius Freeport"
    },
    description: {
      de: "Ein hochmodernes Logistikzentrum in Port Louis, das als steuerfreie Drehscheibe für die Lagerung und den Wiederexport von Waren nach Afrika und Asien dient.",
      hu: "Egy ultramodern logisztikai központ Port Louisban, amely adómentes csomópontként szolgál az áruk tárolására és Afrika, valamint Ázsia felé történő újraexportálására.",
      ro: "Un centru logistic de ultimă generație din Port Louis, care servește drept hub scutit de taxe pentru depozitarea și reexportul mărfurilor către Africa și Asia.",
      en: "A state-of-the-art logistics center in Port Louis, serving as a duty-free hub for the storage and re-export of goods to Africa and Asia."
    },
    facts: {
      de: ["Gegründet im Jahr 1992", "Bietet moderne Kühllager und Logistikdienste"],
      hu: ["1992-ben alapították", "Modern hűtőházakat és logisztikai szolgáltatásokat kínál"],
      ro: ["Fondată în anul 1992", "Oferă depozite frigorifice moderne și servicii logistice"],
      en: ["Established in 1992", "Provides modern cold storage and logistics services"]
    }
  },
  {
    id: "ebene-cybercity-economic-v2",
    type: "industry",
    parent: "MU-PW",
    coords: [57.493, -20.241],
    name: {
      de: "Ebène Cybercity",
      hu: "Ebène Cybercity",
      ro: "Ebène Cybercity",
      en: "Ebène Cybercity"
    },
    description: {
      de: "Dieses moderne Geschäftsviertel ist das Zentrum für Technologie und Finanzen auf Mauritius und beherbergt zahlreiche internationale Unternehmen.",
      hu: "Ez a modern üzleti negyed Mauritius technológiai és pénzügyi központja, amely számos nemzetközi vállalatnak ad otthont.",
      ro: "Acest district de afaceri modern este centrul tehnologiei și finanțelor din Mauritius, găzduind numeroase companii internaționale.",
      en: "This modern business district is the hub for technology and finance in Mauritius, hosting numerous international companies."
    },
    facts: {
      de: ["Symbol für den wirtschaftlichen Wandel", "Standort des bekannten Cyber Tower 1"],
      hu: ["A gazdasági átalakulás szimbóluma", "A híres Cyber Tower 1 helyszíne"],
      ro: ["Simbol al transformării economice", "Locația celebrului Cyber Tower 1"],
      en: ["Symbol of economic transformation", "Location of the famous Cyber Tower 1"]
    }
  },
  {
    id: "mer-rouge-industrial-zone-economic-v2",
    type: "industry",
    parent: "MU-PL",
    coords: [57.495, -20.141],
    name: {
      de: "Industriezone Mer Rouge",
      hu: "Mer Rouge ipari zóna",
      ro: "Zona Industrială Mer Rouge",
      en: "Mer Rouge Industrial Zone"
    },
    description: {
      de: "Ein bedeutendes Industriegebiet im Hafengebiet von Port Louis, das auf verarbeitende Industrie und Logistik spezialisiert ist.",
      hu: "Jelentős ipari terület Port Louis kikötői övezetében, amely a feldolgozóiparra és a logisztikára szakosodott.",
      ro: "O zonă industrială majoră în aria portuară din Port Louis, specializată în industria prelucrătoare și logistică.",
      en: "A major industrial area in the Port Louis harbor region, specialized in manufacturing and logistics."
    },
    facts: {
      de: ["Nähe zum Containerterminal", "Sitz vieler Textil- und Lebensmittelbetriebe"],
      hu: ["Közvetlen közel a konténerterminálhoz", "Számos textil- és élelmiszerüzem székhelye"],
      ro: ["Proximitate față de terminalul de containere", "Sediul multor întreprinderi textile și alimentare"],
      en: ["Close proximity to the container terminal", "Home to many textile and food processing plants"]
    }
  },
  {
    id: "coromandel-industrial-estate-economic-v2",
    type: "industry",
    parent: "MU-PL",
    coords: [57.472, -20.185],
    name: {
      de: "Gewerbegebiet Coromandel",
      hu: "Coromandel ipari terület",
      ro: "Zona Industrială Coromandel",
      en: "Coromandel Industrial Estate"
    },
    description: {
      de: "Eines der ältesten und größten Industriegebiete der Insel, das eine Vielzahl von Fertigungsbetrieben beherbergt.",
      hu: "A sziget egyik legrégebbi és legnagyobb ipari területe, amely számos gyártóüzemnek ad otthont.",
      ro: "Una dintre cele mai vechi și mari zone industriale de pe insulă, găzduind o varietate de unități de producție.",
      en: "One of the oldest and largest industrial estates on the island, housing a variety of manufacturing units."
    },
    facts: {
      de: ["Vielfalt von Klein- bis Großbetrieben", "Wichtiger Arbeitgeber in der Region"],
      hu: ["A kis- és nagyüzemek széles választéka", "A régió fontos munkáltatója"],
      ro: ["Varietate de la întreprinderi mici la mari", "Angajator important în regiune"],
      en: ["Diverse range of small to large enterprises", "Important employer in the region"]
    }
  },
  {
    id: "medine-sugar-mill-economic-v2",
    type: "industry",
    parent: "MU-BL",
    coords: [57.401, -20.275],
    name: {
      de: "Zuckerfabrik Médine",
      hu: "Médine cukorgyár",
      ro: "Fabrica de Zahăr Médine",
      en: "Médine Sugar Mill"
    },
    description: {
      de: "Ein historischer Pfeiler der mauritischen Zuckerindustrie an der Westküste, der sich heute zu einem diversifizierten Agrarkonzern entwickelt hat.",
      hu: "A mauritiusi cukoripar történelmi pillére a nyugati parton, amely mára diverzifikált mezőgazdasági csoporttá fejlődött.",
      ro: "Un pilon istoric al industriei zahărului din Mauritius de pe coasta de vest, evoluând astăzi într-un grup agricol diversificat.",
      en: "A historical pillar of the Mauritian sugar industry on the west coast, now evolved into a diversified agricultural group."
    },
    facts: {
      de: ["Produziert verschiedene Zuckersorten", "Teil eines großen Immobilien- und Freizeitprojekts"],
      hu: ["Különböző típusú cukrokat gyárt", "Egy nagyobb ingatlan- és szabadidős projekt része"],
      ro: ["Produce diverse tipuri de zahăr", "Parte a unui mare proiect imobiliar și de agrement"],
      en: ["Produces various types of sugar", "Part of a large real estate and leisure project"]
    }
  },
  {
    id: "omnicane-sugar-refinery-economic-v2",
    type: "industry",
    parent: "MU-GP",
    coords: [57.615, -20.465],
    name: {
      de: "Omnicane Zuckerraffinerie",
      hu: "Omnicane cukorfinomító",
      ro: "Rafinăria de Zahăr Omnicane",
      en: "Omnicane Sugar Refinery"
    },
    description: {
      de: "Diese moderne Anlage in La Baraque ist eine der effizientesten Zuckerraffinerien der Region und produziert auch Bioethanol.",
      hu: "Ez a La Baraque-ban található modern létesítmény a régió egyik leghatékonyabb cukorfinomítója, amely bioetanolt is gyárt.",
      ro: "Această unitate modernă din La Baraque este una dintre cele mai eficiente rafinării de zahăr din regiune, producând și bioetanol.",
      en: "This modern facility in La Baraque is one of the region's most efficient sugar refineries, also producing bioethanol."
    },
    facts: {
      de: ["Nutzt Bagasse zur Stromerzeugung", "Exportiert raffinierten Zucker weltweit"],
      hu: ["Bagasszét használ villamosenergia-termeléshez", "Finomított cukrot exportál világszerte"],
      ro: ["Utilizează bagasa pentru generarea de energie", "Exportă zahăr rafinat în întreaga lume"],
      en: ["Uses bagasse for electricity generation", "Exports refined sugar worldwide"]
    }
  },
  {
    id: "alteo-sugar-mill-economic-v2",
    type: "industry",
    parent: "MU-FL",
    coords: [57.725, -20.215],
    name: {
      de: "Alteo Zuckerfabrik",
      hu: "Alteo cukorgyár",
      ro: "Fabrica de Zahăr Alteo",
      en: "Alteo Sugar Mill"
    },
    description: {
      de: "Die größte Zuckerfabrik der Insel befindet sich im Osten und ist ein bedeutender Produzent von Spezialzuckern für den Export.",
      hu: "A sziget legnagyobb cukorgyára keleten található, és a különleges cukrok jelentős exportőre.",
      ro: "Cea mai mare fabrică de zahăr de pe insulă, situată în est, este un producător major de zaharuri speciale pentru export.",
      en: "The largest sugar mill on the island, located in the east, is a major producer of specialty sugars for export."
    },
    facts: {
      de: ["Größte Mahlkapazität auf Mauritius", "Führend in der Produktion von Spezialzucker"],
      hu: ["Mauritius legnagyobb őrlési kapacitása", "Vezető szerep a különleges cukrok gyártásában"],
      ro: ["Cea mai mare capacitate de măcinare din Mauritius", "Lider în producția de zahăr special"],
      en: ["Largest milling capacity in Mauritius", "Leader in the production of specialty sugar"]
    }
  },
  {
    id: "terra-mauricia-mill-economic-v2",
    type: "industry",
    parent: "MU-PA",
    coords: [57.585, -20.065],
    name: {
      de: "Terra Mauricia Zuckerfabrik",
      hu: "Terra Mauricia cukorgyár",
      ro: "Fabrica de Zahăr Terra Mauricia",
      en: "Terra Mauricia Sugar Mill"
    },
    description: {
      de: "Eine traditionsreiche Fabrik im Norden, die Belle Vue betreibt und maßgeblich zur industriellen Entwicklung der Region beigetragen hat.",
      hu: "Egy hagyományokban gazdag gyár északon, amely a Belle Vue-t üzemelteti, és jelentősen hozzájárult a régió ipari fejlődéséhez.",
      ro: "O fabrică bogată în tradiție din nord, care operează Belle Vue și a contribuit semnificativ la dezvoltarea industrială a regiunii.",
      en: "A tradition-rich mill in the north, operating Belle Vue and significantly contributing to the region's industrial development."
    },
    facts: {
      de: ["Bekannt für die Rum-Destillerie 'L'Aventure du Sucre'", "Integrierte Energieproduktion"],
      hu: ["Az 'L'Aventure du Sucre' rumlepárlóról ismert", "Integrált energiatermelés"],
      ro: ["Cunoscută pentru distileria de rom 'L'Aventure du Sucre'", "Producție de energie integrată"],
      en: ["Known for the 'L'Aventure du Sucre' rum distillery", "Integrated energy production"]
    }
  },
  {
    id: "port-mathurin-economic-v2",
    type: "port",
    parent: "MU-RO",
    coords: [63.421, -19.683],
    name: {
      de: "Hafen Port Mathurin",
      hu: "Port Mathurin kikötője",
      ro: "Portul Port Mathurin",
      en: "Port Mathurin Harbor"
    },
    description: {
      de: "Der Haupthafen der Insel Rodrigues stellt die lebenswichtige Verbindung für die Versorgung und den Handel der Insel dar.",
      hu: "Rodrigues szigetének fő kikötője, amely a sziget ellátásának és kereskedelmének létfontosságú összeköttetését biztosítja.",
      ro: "Principalul port al insulei Rodrigues reprezintă legătura vitală pentru aprovizionarea și comerțul insulei.",
      en: "The main port of Rodrigues Island represents the vital link for the island's supply and trade."
    },
    facts: {
      de: ["Einziger Handelshafen von Rodrigues", "Wichtig für den Export von Agrarprodukten"],
      hu: ["Rodrigues egyetlen kereskedelmi kikötője", "Fontos a mezőgazdasági termékek exportjához"],
      ro: ["Singurul port comercial din Rodrigues", "Important pentru exportul de produse agricole"],
      en: ["The only commercial port in Rodrigues", "Important for the export of agricultural products"]
    }
  },
  {
    id: "plaisance-industrial-estate-economic-v2",
    type: "industry",
    parent: "MU-GP",
    coords: [57.672, -20.435],
    name: {
      de: "Industriegebiet Plaisance",
      hu: "Plaisance ipari terület",
      ro: "Zona Industrială Plaisance",
      en: "Plaisance Industrial Estate"
    },
    description: {
      de: "In unmittelbarer Nähe zum internationalen Flughafen gelegen, beherbergt dieses Gebiet Unternehmen, die auf schnellen Export angewiesen sind.",
      hu: "A nemzetközi repülőtér közvetlen közelében található terület olyan vállalatoknak ad otthont, amelyek a gyors exportra támaszkodnak.",
      ro: "Situată în imediata apropiere a aeroportului internațional, această zonă găzduiește companii care depind de exportul rapid.",
      en: "Located in the immediate vicinity of the international airport, this area houses companies that rely on fast export."
    },
    facts: {
      de: ["Strategische Lage am Flughafen", "Schwerpunkt auf Luftfracht-Exporten"],
      hu: ["Stratégiai elhelyezkedés a repülőtérnél", "Fókuszban a légi áruszállítási export"],
      ro: ["Locație strategică lângă aeroport", "Accent pe exporturile prin transport aerian"],
      en: ["Strategic location by the airport", "Focus on air cargo exports"]
    }
  },
  {
    id: "riche-terre-industrial-zone-economic-v2",
    type: "industry",
    parent: "MU-PA",
    coords: [57.512, -20.125],
    name: {
      de: "Industriezone Riche Terre",
      hu: "Riche Terre ipari zóna",
      ro: "Zona Industrială Riche Terre",
      en: "Riche Terre Industrial Zone"
    },
    description: {
      de: "Ein weitläufiges Gewerbegebiet nördlich von Port Louis, das moderne Lagerflächen und Produktionsstätten bietet.",
      hu: "Egy kiterjedt ipari terület Port Louistól északra, amely modern raktárhelyiségeket és gyártóüzemeket kínál.",
      ro: "O zonă industrială vastă la nord de Port Louis, care oferă spații moderne de depozitare și unități de producție.",
      en: "A vast industrial area north of Port Louis, offering modern warehousing and manufacturing facilities."
    },
    facts: {
      de: ["Zentrum für Logistik und Distribution", "Beherbergt viele Import-Export-Firmen"],
      hu: ["Logisztikai és elosztó központ", "Számos import-export cégnek ad otthont"],
      ro: ["Centru de logistică și distribuție", "Găzduiește multe firme de import-export"],
      en: ["Hub for logistics and distribution", "Home to many import-export companies"]
    }
  },
  {
    id: "phoenix-beverages-factory-economic-v2",
    type: "industry",
    parent: "MU-PW",
    coords: [57.502, -20.285],
    name: {
      de: "Phoenix Beverages Fabrik",
      hu: "Phoenix Beverages gyár",
      ro: "Fabrica Phoenix Beverages",
      en: "Phoenix Beverages Factory"
    },
    description: {
      de: "Die größte Brauerei und Getränkefabrik des Landes, bekannt für die Produktion des berühmten Phoenix-Bieres.",
      hu: "Az ország legnagyobb sörfőzdéje és üdítőital-gyára, amely a híres Phoenix sör gyártásáról ismert.",
      ro: "Cea mai mare berărie și fabrică de băuturi din țară, cunoscută pentru producția celebrei beri Phoenix.",
      en: "The largest brewery and beverage factory in the country, known for producing the famous Phoenix beer."
    },
    facts: {
      de: ["Bedeutender Akteur im Konsumgütersektor", "Produziert auch Erfrischungsgetränke in Lizenz"],
      hu: ["A fogyasztási cikkek szektorának jelentős szereplője", "Licenc alapján üdítőitalokat is gyárt"],
      ro: ["Jucător major în sectorul bunurilor de larg consum", "Produce și băuturi răcoritoare sub licență"],
      en: ["Major player in the consumer goods sector", "Also produces soft drinks under license"]
    }
  },
  {
    id: "fort-william-oil-terminal-economic-v2",
    type: "port",
    parent: "MU-PL",
    coords: [57.482, -20.165],
    name: {
      de: "Ölterminal Fort William",
      hu: "Fort William olajterminál",
      ro: "Terminalul Petrolier Fort William",
      en: "Fort William Oil Terminal"
    },
    description: {
      de: "Das zentrale Terminal für die Lagerung und den Umschlag von Erdölprodukten, die für die Energieversorgung der Insel unerlässlich sind.",
      hu: "A kőolajtermékek tárolásának és rakodásának központi terminálja, amely elengedhetetlen a sziget energiaellátásához.",
      ro: "Terminalul central pentru depozitarea și transbordarea produselor petroliere, esențiale pentru aprovizionarea cu energie a insulei.",
      en: "The central terminal for the storage and handling of petroleum products, essential for the island's energy supply."
    },
    facts: {
      de: ["Verwaltet strategische Ölreserven", "Anlegestelle für Tankschiffe"],
      hu: ["Stratégiai olajtartalékokat kezel", "Tartályhajók kikötőhelye"],
      ro: ["Gestionează rezervele strategice de petrol", "Loc de acostare pentru navele tanc"],
      en: ["Manages strategic oil reserves", "Berthing point for oil tankers"]
    }
  },
  {
    id: "beau-plan-business-park-economic-v2",
    type: "industry",
    parent: "MU-PA",
    coords: [57.575, -20.085],
    name: {
      de: "Beau Plan Business Park",
      hu: "Beau Plan Business Park",
      ro: "Beau Plan Business Park",
      en: "Beau Plan Business Park"
    },
    description: {
      de: "Ein moderner Gewerbepark, der auf dem Gelände einer ehemaligen Zuckerfabrik entstanden ist und Dienstleistungen sowie Leichtindustrie vereint.",
      hu: "Egy modern üzleti park, amely egy korábbi cukorgyár területén jött létre, és szolgáltatásokat, valamint könnyűipart egyesít.",
      ro: "Un parc de afaceri modern, creat pe locul unei foste fabrici de zahăr, care îmbină serviciile și industria ușoară.",
      en: "A modern business park created on the site of a former sugar mill, combining services and light industry."
    },
    facts: {
      de: ["Beispiel für industrielle Umnutzung", "Beherbergt kreative und technologische Firmen"],
      hu: ["Példa az ipari újrahasznosításra", "Kreatív és technológiai cégeknek ad otthont"],
      ro: ["Exemplu de reutilizare industrială", "Găzduiește firme creative și tehnologice"],
      en: ["Example of industrial repurposing", "Houses creative and technological firms"]
    }
  },
  {
    id: "triolet-industrial-zone-economic-v2",
    type: "industry",
    parent: "MU-PA",
    coords: [57.545, -20.055],
    name: {
      de: "Industriezone Triolet",
      hu: "Triolet ipari zóna",
      ro: "Zona Industrială Triolet",
      en: "Triolet Industrial Zone"
    },
    description: {
      de: "Ein wachsendes Industriegebiet im Norden, das vor allem lokale Handwerks- und Fertigungsbetriebe unterstützt.",
      hu: "Egy növekvő ipari terület északon, amely elsősorban a helyi kézműves és gyártó üzemeket támogatja.",
      ro: "O zonă industrială în creștere în nord, care sprijină în special întreprinderile locale de meșteșuguri și producție.",
      en: "A growing industrial area in the north, primarily supporting local craft and manufacturing enterprises."
    },
    facts: {
      de: ["Fokus auf mittelständische Unternehmen", "Wichtiger regionaler Wirtschaftsfaktor"],
      hu: ["Fókuszban a középvállalkozások", "Fontos regionális gazdasági tényező"],
      ro: ["Accent pe întreprinderile mijlocii", "Factor economic regional important"],
      en: ["Focus on medium-sized enterprises", "Important regional economic factor"]
    }
  },
  {
    id: "baie-du-tombeau-industry-v2",
    type: "industry",
    parent: "MU-PA",
    coords: [57.505, -20.115],
    name: {
      de: "Gewerbegebiet Baie du Tombeau",
      hu: "Baie du Tombeau ipari terület",
      ro: "Zona Industrială Baie du Tombeau",
      en: "Baie du Tombeau Industrial Zone"
    },
    description: {
      de: "Ein Küstenindustriegebiet, das auf Fischverarbeitung und maritime Dienstleistungen spezialisiert ist.",
      hu: "Egy tengerparti ipari terület, amely halfeldolgozásra és tengeri szolgáltatásokra szakosodott.",
      ro: "O zonă industrială de coastă, specializată în prelucrarea peștelui și servicii maritime.",
      en: "A coastal industrial area specialized in fish processing and maritime services."
    },
    facts: {
      de: ["Zentrum der mauritischen Fischereiindustrie", "Modernste Verarbeitungsanlagen für Thunfisch"],
      hu: ["A mauritiusi halipar központja", "Legmodernebb tonhalfeldolgozó üzemek"],
      ro: ["Centrul industriei pescuitului din Mauritius", "Unități ultramoderne de prelucrare a tonului"],
      en: ["Center of the Mauritian fishing industry", "State-of-the-art tuna processing facilities"]
    }
  },
  {
    id: "constance-sugar-estate-economic-v2",
    type: "industry",
    parent: "MU-FL",
    coords: [57.732, -20.185],
    name: {
      de: "Constance Zuckerplantage",
      hu: "Constance cukornád-ültetvény",
      ro: "Domeniul de Zahăr Constance",
      en: "Constance Sugar Estate"
    },
    description: {
      de: "Einer der führenden Produzenten im Osten der Insel, der Landwirtschaft mit modernster industrieller Verarbeitung verbindet.",
      hu: "A sziget keleti részének egyik vezető termelője, amely a mezőgazdaságot a legkorszerűbb ipari feldolgozással ötvözi.",
      ro: "Unul dintre producătorii de top din estul insulei, care îmbină agricultura cu procesarea industrială de ultimă generație.",
      en: "One of the leading producers in the east of the island, combining agriculture with state-of-the-art industrial processing."
    },
    facts: {
      de: ["Bedeutender Exporteur von Rohzucker", "Diversifiziert in Tourismus und Finanzen"],
      hu: ["A nyerscukor jelentős exportőre", "Diverzifikált a turizmus és a pénzügyek területén"],
      ro: ["Exportator major de zahăr brut", "Diversificat în turism și finanțe"],
      en: ["Significant exporter of raw sugar", "Diversified into tourism and finance"]
    }
  },
  {
    id: "savannah-sugar-estate-economic-v2",
    type: "industry",
    parent: "MU-SA",
    coords: [57.612, -20.485],
    name: {
      de: "Savannah Zuckerfabrik",
      hu: "Savannah cukorgyár",
      ro: "Fabrica de Zahăr Savannah",
      en: "Savannah Sugar Estate"
    },
    description: {
      de: "Im Süden gelegen, ist diese Fabrik ein Schlüsselakteur in der regionalen Wirtschaft und in der nachhaltigen Energieerzeugung.",
      hu: "A délen található gyár a regionális gazdaság és a fenntartható energiatermelés kulcsszereplője.",
      ro: "Situată în sud, această fabrică este un jucător cheie în economia regională și în producția de energie durabilă.",
      en: "Located in the south, this factory is a key player in the regional economy and in sustainable energy production."
    },
    facts: {
      de: ["Teil des Omnicane-Clusters", "Nutzt erneuerbare Biomasse zur Energiegewinnung"],
      hu: ["Az Omnicane csoport része", "Megújuló biomasszát használ energiatermeléshez"],
      ro: ["Parte a clusterului Omnicane", "Utilizează biomasă regenerabilă pentru energie"],
      en: ["Part of the Omnicane cluster", "Uses renewable biomass for energy generation"]
    }
  },
  {
    id: "goodlands-industrial-estate-economic-v2",
    type: "industry",
    parent: "MU-RR",
    coords: [57.662, -20.035],
    name: {
      de: "Gewerbegebiet Goodlands",
      hu: "Goodlands ipari terület",
      ro: "Zona Industrială Goodlands",
      en: "Goodlands Industrial Estate"
    },
    description: {
      de: "Ein dynamisches Industriezentrum im Nordosten, das vor allem in der Textilherstellung und im lokalen Handel stark ist.",
      hu: "Egy dinamikus ipari központ az északkeleti részen, amely különösen erős a textilgyártásban és a helyi kereskedelemben.",
      ro: "Un centru industrial dinamic în nord-est, puternic în special în fabricarea textilelor și comerțul local.",
      en: "A dynamic industrial center in the northeast, particularly strong in textile manufacturing and local trade."
    },
    facts: {
      de: ["Zentrum für Konfektionswaren", "Wichtiger Beschäftigungsstandort im Norden"],
      hu: ["A készruha-gyártás központja", "Fontos foglalkoztatási központ északon"],
      ro: ["Centru pentru articole de îmbrăcăminte gata făcute", "Loc de angajare important în nord"],
      en: ["Hub for ready-made garments", "Important employment location in the north"]
    }
  }
];
