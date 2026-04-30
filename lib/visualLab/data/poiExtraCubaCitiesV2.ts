import type { POI } from "./poi";

export const poiExtraCubaCitiesV2: POI[] = [
  // Provincia de Pinar del Río
  {
    id: "pinar-del-rio-cities-v2",
    type: "state-capital",
    parent: "CU-01",
    coords: [-83.695, 22.4175],
    name: { de: "Pinar del Río", hu: "Pinar del Río", ro: "Pinar del Río", en: "Pinar del Río" },
    description: {
      de: "Die Hauptstadt der gleichnamigen Provinz, bekannt als das Zentrum der kubanischen Tabakindustrie.",
      hu: "Az azonos nevű tartomány fővárosa, a kubai dohányipar központjaként ismert.",
      ro: "Capitala provinciei cu același nume, cunoscută drept centrul industriei de tutun din Cuba.",
      en: "The capital of the province of the same name, known as the center of the Cuban tobacco industry."
    },
    facts: {
      de: ["Herz des Tabakanbaus", "UNESCO-Biosphärenreservat in der Nähe", "Gegründet 1669"],
      hu: ["A dohánytermesztés szíve", "Közeli UNESCO bioszféra-rezervátum", "1669-ben alapították"],
      ro: ["Inima cultivării tutunului", "Rezervație a biosferei UNESCO în apropiere", "Fondat în 1669"],
      en: ["Heart of tobacco cultivation", "Nearby UNESCO Biosphere Reserve", "Founded in 1669"]
    }
  },
  {
    id: "consolacion-del-sur-cities-v2",
    type: "city",
    parent: "CU-01",
    coords: [-83.5136, 22.5036],
    name: { de: "Consolación del Sur", hu: "Consolación del Sur", ro: "Consolación del Sur", en: "Consolación del Sur" },
    description: {
      de: "Eine Gemeinde und Stadt in der Provinz Pinar del Río, ein wichtiges landwirtschaftliches Zentrum.",
      hu: "Község és város Pinar del Río tartományban, fontos mezőgazdasági központ.",
      ro: "O municipalitate și un oraș din provincia Pinar del Río, un centru agricol important.",
      en: "A municipality and city in the Pinar del Río province, an important agricultural center."
    },
    facts: {
      de: ["Anbau von Reis und Gemüse", "Zweitgrößte Stadt der Provinz"],
      hu: ["Rizs- és zöldségtermesztés", "A tartomány második legnagyobb városa"],
      ro: ["Cultivarea orezului și legumelor", "Al doilea cel mai mare oraș din provincie"],
      en: ["Cultivation of rice and vegetables", "Second largest city in the province"]
    }
  },
  // Provincia de Artemisa
  {
    id: "artemisa-cities-v2",
    type: "state-capital",
    parent: "CU-15",
    coords: [-82.763, 22.813],
    name: { de: "Artemisa", hu: "Artemisa", ro: "Artemisa", en: "Artemisa" },
    description: {
      de: "Hauptstadt der 2011 gegründeten Provinz Artemisa, umgeben von fruchtbarem Ackerland.",
      hu: "A 2011-ben létrehozott Artemisa tartomány fővárosa, termékeny szántóföldekkel körülvéve.",
      ro: "Capitala provinciei Artemisa, înființată în 2011, înconjurată de terenuri agricole fertile.",
      en: "Capital of the Artemisa province, established in 2011, surrounded by fertile farmland."
    },
    facts: {
      de: ["Bekannt als 'Garten Kubas'", "Wichtiger Produzent von Zuckerrohr und Bananen"],
      hu: ["'Kuba kertjeként' ismert", "Fontos cukornád- és banántermelő"],
      ro: ["Cunoscută ca 'Grădina Cubei'", "Producător important de trestie de zahăr și banane"],
      en: ["Known as the 'Garden of Cuba'", "Important producer of sugarcane and bananas"]
    }
  },
  {
    id: "san-antonio-de-los-banos-cities-v2",
    type: "city",
    parent: "CU-15",
    coords: [-82.498, 22.888],
    name: { de: "San Antonio de los Baños", hu: "San Antonio de los Baños", ro: "San Antonio de los Baños", en: "San Antonio de los Baños" },
    description: {
      de: "Eine Stadt, die für ihr Internationales Filmfestival und die Humor-Biennale bekannt ist.",
      hu: "A Nemzetközi Filmfesztiváljáról és a Humor Biennáléjáról ismert város.",
      ro: "Un oraș renumit pentru Festivalul Internațional de Film și Bienala Umorului.",
      en: "A city renowned for its International Film Festival and Humor Biennial."
    },
    facts: {
      de: ["Sitz der Internationalen Schule für Film und Fernsehen", "Fluss Ariguanabo fließt durch die Stadt"],
      hu: ["A Nemzetközi Film- és Televízióiskola székhelye", "Az Ariguanabo folyó folyik át a városon"],
      ro: ["Sediul Școlii Internaționale de Film și Televiziune", "Râul Ariguanabo traversează orașul"],
      en: ["Home to the International School of Film and Television", "Ariguanabo River flows through the city"]
    }
  },
  {
    id: "guira-de-melena-cities-v2",
    type: "city",
    parent: "CU-15",
    coords: [-82.505, 22.802],
    name: { de: "Güira de Melena", hu: "Güira de Melena", ro: "Güira de Melena", en: "Güira de Melena" },
    description: {
      de: "Wichtige landwirtschaftliche Gemeinde an der Südküste der Provinz Artemisa.",
      hu: "Fontos mezőgazdasági község Artemisa tartomány déli partján.",
      ro: "O municipalitate agricolă importantă pe coasta de sud a provinciei Artemisa.",
      en: "An important agricultural municipality on the southern coast of Artemisa province."
    },
    facts: {
      de: ["Anbau von Kartoffeln und Tabak", "Nahe der Batabanó-Bucht"],
      hu: ["Burgonya- és dohánytermesztés", "A Batabanó-öböl közelében"],
      ro: ["Cultivarea cartofilor și a tutunului", "Aproape de Golful Batabanó"],
      en: ["Cultivation of potatoes and tobacco", "Near the Gulf of Batabanó"]
    }
  },
  // Provincia de Mayabeque
  {
    id: "san-jose-de-las-lajas-cities-v2",
    type: "state-capital",
    parent: "CU-16",
    coords: [-82.15, 22.968],
    name: { de: "San José de las Lajas", hu: "San José de las Lajas", ro: "San José de las Lajas", en: "San José de las Lajas" },
    description: {
      de: "Hauptstadt der Provinz Mayabeque und Sitz wichtiger wissenschaftlicher Einrichtungen.",
      hu: "Mayabeque tartomány fővárosa és fontos tudományos intézmények székhelye.",
      ro: "Capitala provinciei Mayabeque și sediul unor importante instituții științifice.",
      en: "The capital of Mayabeque province and home to important scientific institutions."
    },
    facts: {
      de: ["Landwirtschaftliche Universität von Havanna", "Produktion von Rum und Baumaterialien"],
      hu: ["Havannai Agrártudományi Egyetem", "Rum- és építőanyaggyártás"],
      ro: ["Universitatea Agrară din Havana", "Producție de rom și materiale de construcții"],
      en: ["Agrarian University of Havana", "Production of rum and construction materials"]
    }
  },
  {
    id: "guines-cities-v2",
    type: "city",
    parent: "CU-16",
    coords: [-82.029, 22.848],
    name: { de: "Güines", hu: "Güines", ro: "Güines", en: "Güines" },
    description: {
      de: "Eine historisch bedeutende Stadt in der Provinz Mayabeque, ehemals ein wichtiger Eisenbahnknotenpunkt.",
      hu: "Történelmileg jelentős város Mayabeque tartományban, egykor fontos vasúti csomópont.",
      ro: "Un oraș important din punct de vedere istoric în provincia Mayabeque, fost un nod feroviar important.",
      en: "A historically important city in Mayabeque province, formerly a major railway hub."
    },
    facts: {
      de: ["Erste Eisenbahnlinie Kubas verband Havanna mit Güines", "Fruchtbares Tal des Flusses Mayabeque"],
      hu: ["Kuba első vasútvonala Havannát Güinesszel kötötte össze", "A Mayabeque folyó termékeny völgye"],
      ro: ["Prima linie de cale ferată din Cuba a legat Havana de Güines", "Valea fertilă a râului Mayabeque"],
      en: ["Cuba's first railway line connected Havana to Güines", "Fertile valley of the Mayabeque River"]
    }
  },
  // Provincia de Matanzas
  {
    id: "jovellanos-cities-v2",
    type: "city",
    parent: "CU-04",
    coords: [-81.191, 22.809],
    name: { de: "Jovellanos", hu: "Jovellanos", ro: "Jovellanos", en: "Jovellanos" },
    description: {
      de: "Eine Stadt und Gemeinde in der Provinz Matanzas, ein Zentrum der Zuckerindustrie.",
      hu: "Város és község Matanzas tartományban, a cukoripar központja.",
      ro: "Un oraș și o municipalitate din provincia Matanzas, un centru al industriei zahărului.",
      en: "A city and municipality in Matanzas province, a center of the sugar industry."
    },
    facts: {
      de: ["Benannt nach dem spanischen Schriftsteller Gaspar Melchor de Jovellanos", "Wichtiger Verkehrsknotenpunkt"],
      hu: ["Gaspar Melchor de Jovellanos spanyol íróról nevezték el", "Fontos közlekedési csomópont"],
      ro: ["Numit după scriitorul spaniol Gaspar Melchor de Jovellanos", "Nod de transport important"],
      en: ["Named after the Spanish writer Gaspar Melchor de Jovellanos", "Important transportation hub"]
    }
  },
  {
    id: "colon-cities-v2",
    type: "city",
    parent: "CU-04",
    coords: [-80.905, 22.721],
    name: { de: "Colón", hu: "Colón", ro: "Colón", en: "Colón" },
    description: {
      de: "Eine Stadt im Zentrum der Provinz Matanzas, umgeben von Zuckerrohrfeldern.",
      hu: "Város Matanzas tartomány központjában, cukornádültetvényekkel körülvéve.",
      ro: "Un oraș în centrul provinciei Matanzas, înconjurat de câmpuri de trestie de zahăr.",
      en: "A city in the center of Matanzas province, surrounded by sugarcane fields."
    },
    facts: {
      de: ["Gegründet 1836", "Wirtschaft geprägt von Landwirtschaft"],
      hu: ["1836-ban alapították", "Gazdaságát a mezőgazdaság jellemzi"],
      ro: ["Fondat în 1836", "Economie dominată de agricultură"],
      en: ["Founded in 1836", "Economy dominated by agriculture"]
    }
  },
  // Provincia de Villa Clara
  {
    id: "santa-clara-cities-v2",
    type: "state-capital",
    parent: "CU-05",
    coords: [-79.965, 22.405],
    name: { de: "Santa Clara", hu: "Santa Clara", ro: "Santa Clara", en: "Santa Clara" },
    description: {
      de: "Hauptstadt der Provinz Villa Clara, bekannt für ihre Verbindung zu Che Guevara.",
      hu: "Villa Clara tartomány fővárosa, Che Guevarához fűződő kapcsolatáról ismert.",
      ro: "Capitala provinciei Villa Clara, cunoscută pentru legătura sa cu Che Guevara.",
      en: "The capital of Villa Clara province, known for its connection to Che Guevara."
    },
    facts: {
      de: ["Che Guevara Mausoleum und Museum", "Wichtige Universitätsstadt", "Ort der entscheidenden Schlacht der Kubanischen Revolution"],
      hu: ["Che Guevara Mauzóleum és Múzeum", "Fontos egyetemi város", "A kubai forradalom döntő csatájának helyszíne"],
      ro: ["Mausoleul și Muzeul Che Guevara", "Oraș universitar important", "Locul bătăliei decisive a Revoluției Cubaneze"],
      en: ["Che Guevara Mausoleum and Museum", "Important university city", "Site of the decisive battle of the Cuban Revolution"]
    }
  },
  {
    id: "sagua-la-grande-cities-v2",
    type: "city",
    parent: "CU-05",
    coords: [-80.075, 22.809],
    name: { de: "Sagua La Grande", hu: "Sagua La Grande", ro: "Sagua La Grande", en: "Sagua La Grande" },
    description: {
      de: "Eine historisch reiche Stadt an der Nordküste mit beeindruckender neoklassizistischer Architektur.",
      hu: "Történelmileg gazdag város az északi parton, lenyűgöző neoklasszikus építészettel.",
      ro: "Un oraș bogat din punct de vedere istoric pe coasta de nord, cu o arhitectură neoclasică impresionantă.",
      en: "A historically rich city on the north coast with impressive neoclassical architecture."
    },
    facts: {
      de: ["Nationaldenkmal seit 2011", "Geburtsort des Malers Wifredo Lam"],
      hu: ["Nemzeti műemlék 2011 óta", "Wifredo Lam festő szülőhelye"],
      ro: ["Monument național din 2011", "Locul nașterii pictorului Wifredo Lam"],
      en: ["National Monument since 2011", "Birthplace of painter Wifredo Lam"]
    }
  },
  {
    id: "caibarien-cities-v2",
    type: "city",
    parent: "CU-05",
    coords: [-79.471, 22.516],
    name: { de: "Caibarién", hu: "Caibarién", ro: "Caibarién", en: "Caibarién" },
    description: {
      de: "Eine Küstenstadt, bekannt als 'La Villa Blanca', die das Tor zu den nördlichen Cayos ist.",
      hu: "Egy tengerparti város, 'La Villa Blanca'-ként ismert, amely a kapu az északi szigetekhez.",
      ro: "Un oraș de coastă, cunoscut ca 'La Villa Blanca', poarta de acces către insulele (cayos) din nord.",
      en: "A coastal city known as 'La Villa Blanca', which is the gateway to the northern cays."
    },
    facts: {
      de: ["Berühmt für seine 'Parrandas' (Karnevals)", "Wichtiger Fischereihafen"],
      hu: ["Híres 'Parrandas'-airól (karneválok)", "Fontos halászkikötő"],
      ro: ["Renumit pentru 'Parrandas' (carnavaluri)", "Port de pescuit important"],
      en: ["Famous for its 'Parrandas' (carnivals)", "Important fishing port"]
    }
  },
  {
    id: "remedios-cities-v2",
    type: "city",
    parent: "CU-05",
    coords: [-79.544, 22.493],
    name: { de: "Remedios", hu: "Remedios", ro: "Remedios", en: "Remedios" },
    description: {
      de: "Eine der ältesten Städte Kubas mit gut erhaltener Kolonialarchitektur.",
      hu: "Kuba egyik legrégebbi városa, jól megőrzött gyarmati építészettel.",
      ro: "Unul dintre cele mai vechi orașe din Cuba, cu arhitectură colonială bine conservată.",
      en: "One of the oldest cities in Cuba, with well-preserved colonial architecture."
    },
    facts: {
      de: ["Bekannt für die 'Parrandas de Remedios' zu Weihnachten", "Kirche San Juan Bautista mit 13 Goldaltären"],
      hu: ["Híres a karácsonyi 'Parrandas de Remedios'-ról", "A San Juan Bautista templom 13 aranyoltárral"],
      ro: ["Renumit pentru 'Parrandas de Remedios' de Crăciun", "Biserica San Juan Bautista cu 13 altare de aur"],
      en: ["Known for the 'Parrandas de Remedios' at Christmas", "Church of San Juan Bautista with 13 gold altars"]
    }
  },
  // Provincia de Sancti Spíritus
  {
    id: "sancti-spiritus-cities-v2",
    type: "state-capital",
    parent: "CU-07",
    coords: [-79.443, 21.932],
    name: { de: "Sancti Spíritus", hu: "Sancti Spíritus", ro: "Sancti Spíritus", en: "Sancti Spíritus" },
    description: {
      de: "Hauptstadt der gleichnamigen Provinz und eine der ursprünglich sieben von den Spaniern gegründeten Städte.",
      hu: "Az azonos nevű tartomány fővárosa, egyike a spanyolok által alapított eredeti hét városnak.",
      ro: "Capitala provinciei cu același nume și unul dintre cele șapte orașe fondate inițial de spanioli.",
      en: "The capital of the province of the same name and one of the original seven cities founded by the Spanish."
    },
    facts: {
      de: ["Yayabo-Brücke, ein Nationaldenkmal", "Gut erhaltenes historisches Zentrum", "Gegründet 1514"],
      hu: ["Yayabo-híd, nemzeti műemlék", "Jól megőrzött történelmi központ", "1514-ben alapították"],
      ro: ["Podul Yayabo, un monument național", "Centru istoric bine conservat", "Fondat în 1514"],
      en: ["Yayabo Bridge, a National Monument", "Well-preserved historic center", "Founded in 1514"]
    }
  },
  {
    id: "jatibonico-cities-v2",
    type: "city",
    parent: "CU-07",
    coords: [-79.17, 21.942],
    name: { de: "Jatibonico", hu: "Jatibonico", ro: "Jatibonico", en: "Jatibonico" },
    description: {
      de: "Eine Stadt in der Provinz Sancti Spíritus, deren Wirtschaft von der Zuckerproduktion geprägt ist.",
      hu: "Város Sancti Spíritus tartományban, gazdaságát a cukortermelés határozza meg.",
      ro: "Un oraș din provincia Sancti Spíritus, a cărui economie este dominată de producția de zahăr.",
      en: "A city in Sancti Spíritus province whose economy is dominated by sugar production."
    },
    facts: {
      de: ["Große Zuckermühle", "Wichtiger Eisenbahnknotenpunkt"],
      hu: ["Nagy cukorgyár", "Fontos vasúti csomópont"],
      ro: ["Mare fabrică de zahăr", "Nod feroviar important"],
      en: ["Large sugar mill", "Important railway junction"]
    }
  },
  // Provincia de Ciego de Ávila
  {
    id: "ciego-de-avila-cities-v2",
    type: "state-capital",
    parent: "CU-08",
    coords: [-78.76, 21.848],
    name: { de: "Ciego de Ávila", hu: "Ciego de Ávila", ro: "Ciego de Ávila", en: "Ciego de Ávila" },
    description: {
      de: "Hauptstadt der gleichnamigen Provinz, bekannt als 'Stadt der Portale' aufgrund ihrer Architektur.",
      hu: "Az azonos nevű tartomány fővárosa, építészete miatt a 'Portálok Városaként' ismert.",
      ro: "Capitala provinciei cu același nume, cunoscută ca 'Orașul Portalurilor' datorită arhitecturii sale.",
      en: "The capital of the province of the same name, known as the 'City of Portals' due to its architecture."
    },
    facts: {
      de: ["Zentrale Lage in Kuba", "Landwirtschaftliches Zentrum für Ananas und Zitrusfrüchte"],
      hu: ["Központi elhelyezkedés Kubában", "Ananász és citrusfélék mezőgazdasági központja"],
      ro: ["Locație centrală în Cuba", "Centru agricol pentru ananas și citrice"],
      en: ["Central location in Cuba", "Agricultural center for pineapple and citrus fruits"]
    }
  },
  {
    id: "moron-cities-v2",
    type: "city",
    parent: "CU-08",
    coords: [-78.627, 22.109],
    name: { de: "Morón", hu: "Morón", ro: "Morón", en: "Morón" },
    description: {
      de: "Eine Stadt in der Nähe der Nordküste, das Tor zu den Ferienorten Cayo Coco und Cayo Guillermo.",
      hu: "Város az északi part közelében, a Cayo Coco és Cayo Guillermo üdülőhelyek kapuja.",
      ro: "Un oraș lângă coasta de nord, poarta de acces către stațiunile Cayo Coco și Cayo Guillermo.",
      en: "A city near the north coast, the gateway to the resorts of Cayo Coco and Cayo Guillermo."
    },
    facts: {
      de: ["Bekannt für das Hahn-Denkmal 'Gallo de Morón'", "Wichtiger Eisenbahnknotenpunkt"],
      hu: ["Híres a 'Gallo de Morón' kakas-emlékműről", "Fontos vasúti csomópont"],
      ro: ["Renumit pentru monumentul cocoșului 'Gallo de Morón'", "Nod feroviar important"],
      en: ["Known for the 'Gallo de Morón' rooster monument", "Important railway junction"]
    }
  },
  // Provincia de Las Tunas
  {
    id: "victoria-de-las-tunas-cities-v2",
    type: "state-capital",
    parent: "CU-10",
    coords: [-76.951, 20.96],
    name: { de: "Victoria de Las Tunas", hu: "Victoria de Las Tunas", ro: "Victoria de Las Tunas", en: "Victoria de Las Tunas" },
    description: {
      de: "Hauptstadt der Provinz Las Tunas, bekannt als 'Balkon des Ostens' und 'Hauptstadt der kubanischen Skulptur'.",
      hu: "Las Tunas tartomány fővárosa, a 'Kelet erkélye' és a 'Kubai szobrászat fővárosa' néven ismert.",
      ro: "Capitala provinciei Las Tunas, cunoscută ca 'Balconul Orientului' și 'Capitala Sculpturii Cubaneze'.",
      en: "The capital of Las Tunas province, known as the 'Balcony of the East' and the 'Capital of Cuban Sculpture'."
    },
    facts: {
      de: ["Über 100 Skulpturen im Freien ausgestellt", "Wichtige kulturelle Veranstaltungen wie das Cucalambeana-Festival"],
      hu: ["Több mint 100 szabadtéri szobor", "Fontos kulturális események, mint a Cucalambeana Fesztivál"],
      ro: ["Peste 100 de sculpturi expuse în aer liber", "Evenimente culturale importante precum Festivalul Cucalambeana"],
      en: ["Over 100 outdoor sculptures on display", "Important cultural events like the Cucalambeana Festival"]
    }
  },
  {
    id: "puerto-padre-cities-v2",
    type: "city",
    parent: "CU-10",
    coords: [-76.602, 21.195],
    name: { de: "Puerto Padre", hu: "Puerto Padre", ro: "Puerto Padre", en: "Puerto Padre" },
    description: {
      de: "Eine Hafenstadt an der Nordküste der Provinz Las Tunas mit einer großen Zuckermühle.",
      hu: "Kikötőváros Las Tunas tartomány északi partján, egy nagy cukorgyárral.",
      ro: "Un oraș portuar pe coasta de nord a provinciei Las Tunas, cu o mare fabrică de zahăr.",
      en: "A port city on the north coast of Las Tunas province with a large sugar mill."
    },
    facts: {
      de: ["'Die blaue Stadt der Mühlen'", "Wichtiger Exporthafen für Zucker"],
      hu: ["'A malmok kék városa'", "Fontos cukorexport-kikötő"],
      ro: ["'Orașul albastru al morilor'", "Port important pentru exportul de zahăr"],
      en: ["'The Blue City of Mills'", "Important export port for sugar"]
    }
  },
  // Provincia de Granma
  {
    id: "bayamo-cities-v2",
    type: "state-capital",
    parent: "CU-12",
    coords: [-76.642, 20.38],
    name: { de: "Bayamo", hu: "Bayamo", ro: "Bayamo", en: "Bayamo" },
    description: {
      de: "Hauptstadt der Provinz Granma, eine der ersten von den Spaniern gegründeten Städte und Wiege der kubanischen Nationalhymne.",
      hu: "Granma tartomány fővárosa, az egyik első, spanyolok által alapított város és a kubai nemzeti himnusz bölcsője.",
      ro: "Capitala provinciei Granma, unul dintre primele orașe fondate de spanioli și leagănul imnului național cubanez.",
      en: "The capital of Granma province, one of the first cities founded by the Spanish and the cradle of the Cuban national anthem."
    },
    facts: {
      de: ["Gegründet 1513", "Nationaldenkmal", "Carlos Manuel de Céspedes' Geburtsort"],
      hu: ["1513-ban alapították", "Nemzeti műemlék", "Carlos Manuel de Céspedes szülőhelye"],
      ro: ["Fondat în 1513", "Monument național", "Locul nașterii lui Carlos Manuel de Céspedes"],
      en: ["Founded in 1513", "National Monument", "Birthplace of Carlos Manuel de Céspedes"]
    }
  },
  {
    id: "manzanillo-cities-v2",
    type: "city",
    parent: "CU-12",
    coords: [-77.108, 20.343],
    name: { de: "Manzanillo", hu: "Manzanillo", ro: "Manzanillo", en: "Manzanillo" },
    description: {
      de: "Eine Hafenstadt am Golf von Guacanayabo, bekannt für ihre maurische Architektur und ihre Seepromenade.",
      hu: "Kikötőváros a Guacanayabo-öbölben, mór építészetéről és tengerparti sétányáról ismert.",
      ro: "Un oraș portuar în Golful Guacanayabo, cunoscut pentru arhitectura sa maură și faleza sa.",
      en: "A port city on the Gulf of Guacanayabo, known for its Moorish architecture and seaside promenade."
    },
    facts: {
      de: ["Wichtiger Hafen für Fischerei und Zucker-Export", "Einzigartiger achteckiger Stadtplatz"],
      hu: ["Fontos halászati és cukorexport-kikötő", "Egyedülálló nyolcszögletű főtér"],
      ro: ["Port important pentru pescuit și export de zahăr", "Piață urbană octogonală unică"],
      en: ["Important port for fishing and sugar export", "Unique octagonal town square"]
    }
  },
  // Isla de la Juventud
  {
    id: "nueva-gerona-cities-v2",
    type: "state-capital",
    parent: "CU-99",
    coords: [-82.8, 21.887],
    name: { de: "Nueva Gerona", hu: "Nueva Gerona", ro: "Nueva Gerona", en: "Nueva Gerona" },
    description: {
      de: "Hauptstadt der Sondergemeinde Isla de la Juventud, gelegen am Ufer des Flusses Las Casas.",
      hu: "Az Isla de la Juventud különleges község fővárosa, a Las Casas folyó partján fekszik.",
      ro: "Capitala municipalității speciale Isla de la Juventud, situată pe malurile râului Las Casas.",
      en: "The capital of the special municipality of Isla de la Juventud, located on the banks of the Las Casas River."
    },
    facts: {
      de: ["Gegründet von amerikanischen Siedlern 1830", "Fährverbindung zum Festland", "Zentrum für Marmorabbau und Keramik"],
      hu: ["Amerikai telepesek alapították 1830-ban", "Kompkapcsolat a szárazfölddel", "Márványbányászat és kerámia központja"],
      ro: ["Fondat de coloniști americani în 1830", "Legătură cu feribotul către continent", "Centru pentru extracția de marmură și ceramică"],
      en: ["Founded by American settlers in 1830", "Ferry connection to the mainland", "Center for marble quarrying and ceramics"]
    }
  },
  // More cities to reach 80
  {
    id: "santiago-de-las-vegas-cities-v2",
    type: "city",
    parent: "CU-03",
    coords: [-82.35, 22.95],
    name: { de: "Santiago de las Vegas", hu: "Santiago de las Vegas", ro: "Santiago de las Vegas", en: "Santiago de las Vegas" },
    description: {
      de: "Eine Stadt in der Provinz Havanna, Sitz des kubanischen Meteorologischen Instituts.",
      hu: "Város Havanna tartományban, a kubai Meteorológiai Intézet székhelye.",
      ro: "Un oraș în provincia Havana, sediul Institutului Meteorologic Cubanez.",
      en: "A city in the Havana province, home to the Cuban Meteorological Institute."
    },
    facts: {
      de: ["Historisches Zentrum", "Landwirtschaftliche Umgebung"],
      hu: ["Történelmi központ", "Mezőgazdasági környezet"],
      ro: ["Centru istoric", "Mediu agricol"],
      en: ["Historic center", "Agricultural surroundings"]
    }
  },
  {
    id: "palma-soriano-cities-v2",
    type: "city",
    parent: "CU-13",
    coords: [-75.992, 20.212],
    name: { de: "Palma Soriano", hu: "Palma Soriano", ro: "Palma Soriano", en: "Palma Soriano" },
    description: {
      de: "Die zweitgrößte Stadt der Provinz Santiago de Cuba, ein wichtiges Handelszentrum am Fluss Cauto.",
      hu: "Santiago de Cuba tartomány második legnagyobb városa, fontos kereskedelmi központ a Cauto folyó mentén.",
      ro: "Al doilea cel mai mare oraș din provincia Santiago de Cuba, un important centru comercial pe râul Cauto.",
      en: "The second-largest city in Santiago de Cuba province, an important commercial center on the Cauto River."
    },
    facts: {
      de: ["Kaffee- und Zuckerrohranbau", "Verkehrsknotenpunkt für Ostkuba"],
      hu: ["Kávé- és cukornádtermesztés", "Kelet-Kuba közlekedési csomópontja"],
      ro: ["Cultivarea cafelei și a trestiei de zahăr", "Nod de transport pentru estul Cubei"],
      en: ["Coffee and sugarcane cultivation", "Transportation hub for eastern Cuba"]
    }
  },
  {
    id: "contramaestre-cities-v2",
    type: "city",
    parent: "CU-13",
    coords: [-76.248, 20.3],
    name: { de: "Contramaestre", hu: "Contramaestre", ro: "Contramaestre", en: "Contramaestre" },
    description: {
      de: "Eine Stadt in der Provinz Santiago de Cuba, die für ihre Zitrusproduktion bekannt ist.",
      hu: "Város Santiago de Cuba tartományban, citrusfélék termeléséről ismert.",
      ro: "Un oraș în provincia Santiago de Cuba, cunoscut pentru producția sa de citrice.",
      en: "A city in Santiago de Cuba province known for its citrus production."
    },
    facts: {
      de: ["Landwirtschaftliches Zentrum", "Gegründet 1912"],
      hu: ["Mezőgazdasági központ", "1912-ben alapították"],
      ro: ["Centru agricol", "Fondat în 1912"],
      en: ["Agricultural center", "Founded in 1912"]
    }
  },
  {
    id: "guantanamo-city-cities-v2",
    type: "state-capital",
    parent: "CU-14",
    coords: [-75.209, 20.144],
    name: { de: "Guantánamo (Stadt)", hu: "Guantánamo (város)", ro: "Guantánamo (oraș)", en: "Guantánamo (city)" },
    description: {
      de: "Hauptstadt der Provinz Guantánamo, nahe der umstrittenen US-Marinebasis.",
      hu: "Guantánamo tartomány fővárosa, a vitatott amerikai haditengerészeti támaszpont közelében.",
      ro: "Capitala provinciei Guantánamo, aproape de controversata bază navală americană.",
      en: "The capital of Guantánamo province, near the controversial U.S. naval base."
    },
    facts: {
      de: ["Kulturelles Zentrum der Region", "Produktion von Zuckerrohr und Kaffee", "Changüí-Musikstil stammt von hier"],
      hu: ["A régió kulturális központja", "Cukornád- és kávétermelés", "Innen származik a Changüí zenei stílus"],
      ro: ["Centrul cultural al regiunii", "Producția de trestie de zahăr și cafea", "Stilul muzical Changüí provine de aici"],
      en: ["Cultural center of the region", "Production of sugarcane and coffee", "Changüí music style originates from here"]
    }
  },
  {
    id: "baracoa-city-cities-v2",
    type: "city",
    parent: "CU-14",
    coords: [-74.496, 20.35],
    name: { de: "Baracoa", hu: "Baracoa", ro: "Baracoa", en: "Baracoa" },
    description: {
      de: "Die älteste Stadt Kubas, gegründet von Diego Velázquez im Jahr 1511. Bekannt für ihre isolierte Schönheit und Kakaoproduktion.",
      hu: "Kuba legrégebbi városa, melyet Diego Velázquez alapított 1511-ben. Elszigetelt szépségéről és kakaótermeléséről ismert.",
      ro: "Cel mai vechi oraș din Cuba, fondat de Diego Velázquez în 1511. Cunoscut pentru frumusețea sa izolată și producția de cacao.",
      en: "The oldest city in Cuba, founded by Diego Velázquez in 1511. Known for its isolated beauty and cocoa production."
    },
    facts: {
      de: ["Erste Hauptstadt Kubas", "Umgeben von Regenwald und Bergen", "Einziger Ort, wo der flache Berg El Yunque sichtbar ist"],
      hu: ["Kuba első fővárosa", "Esőerdő és hegyek veszik körül", "Az egyetlen hely, ahonnan az El Yunque lapos hegy látható"],
      ro: ["Prima capitală a Cubei", "Înconjurat de pădure tropicală și munți", "Singurul loc de unde se vede muntele plat El Yunque"],
      en: ["First capital of Cuba", "Surrounded by rainforest and mountains", "The only place where the flat-topped mountain El Yunque is visible"]
    }
  },
  // Adding more cities to get closer to 80
  {
    id: "florida-cities-v2",
    type: "city",
    parent: "CU-09",
    coords: [-78.223, 21.528],
    name: { de: "Florida", hu: "Florida", ro: "Florida", en: "Florida" },
    description: {
      de: "Eine Gemeinde und Stadt in der Provinz Camagüey, ein wichtiges landwirtschaftliches Zentrum.",
      hu: "Község és város Camagüey tartományban, fontos mezőgazdasági központ.",
      ro: "O municipalitate și un oraș din provincia Camagüey, un centru agricol important.",
      en: "A municipality and city in the Camagüey province, an important agricultural center."
    },
    facts: {
      de: ["Zucker- und Milchwirtschaft", "Gegründet Anfang des 20. Jahrhunderts"],
      hu: ["Cukor- és tejipar", "A 20. század elején alapították"],
      ro: ["Industria zahărului și a produselor lactate", "Fondat la începutul secolului al XX-lea"],
      en: ["Sugar and dairy industry", "Founded in the early 20th century"]
    }
  },
  {
    id: "nuevitas-city-cities-v2",
    type: "city",
    parent: "CU-09",
    coords: [-77.265, 21.543],
    name: { de: "Nuevitas", hu: "Nuevitas", ro: "Nuevitas", en: "Nuevitas" },
    description: {
      de: "Eine Hafenstadt an einer großen Bucht an der Nordküste der Provinz Camagüey.",
      hu: "Kikötőváros egy nagy öbölben Camagüey tartomány északi partján.",
      ro: "Un oraș portuar într-un golf mare pe coasta de nord a provinciei Camagüey.",
      en: "A port city on a large bay on the north coast of Camagüey province."
    },
    facts: {
      de: ["Wichtiger Industriehafen", "Zement- und Düngemittelproduktion"],
      hu: ["Fontos ipari kikötő", "Cement- és műtrágyagyártás"],
      ro: ["Port industrial important", "Producție de ciment și îngrășăminte"],
      en: ["Important industrial port", "Cement and fertilizer production"]
    }
  },
  {
    id: "jibara-cities-v2",
    type: "city",
    parent: "CU-11",
    coords: [-76.113, 21.109],
    name: { de: "Gibara", hu: "Gibara", ro: "Gibara", en: "Gibara" },
    description: {
      de: "Eine malerische Fischerstadt in der Provinz Holguín, bekannt für das Internationale Festival des armen Kinos.",
      hu: "Festői halászváros Holguín tartományban, a Nemzetközi Szegény Filmek Fesztiváljáról ismert.",
      ro: "Un oraș pescăresc pitoresc în provincia Holguín, cunoscut pentru Festivalul Internațional de Film Sărac.",
      en: "A picturesque fishing town in Holguín province, known for the International Festival of Poor Cinema."
    },
    facts: {
      de: ["Auch als 'Die Weiße Stadt' bekannt", "Historische Befestigungsanlagen"],
      hu: ["'A Fehér Város' néven is ismert", "Történelmi erődítmények"],
      ro: ["Cunoscut și ca 'Orașul Alb'", "Fortificații istorice"],
      en: ["Also known as 'The White Town'", "Historic fortifications"]
    }
  },
  {
    id: "banes-cities-v2",
    type: "city",
    parent: "CU-11",
    coords: [-75.72, 20.97],
    name: { de: "Banes", hu: "Banes", ro: "Banes", en: "Banes" },
    description: {
      de: "Bekannt als die archäologische Hauptstadt Kubas, da hier viele präkolumbianische Artefakte gefunden wurden.",
      hu: "Kuba régészeti fővárosaként ismert, mivel itt számos prekolumbiánus leletet találtak.",
      ro: "Cunoscută drept capitala arheologică a Cubei, deoarece aici au fost găsite multe artefacte precolumbiene.",
      en: "Known as the archaeological capital of Cuba, as many pre-Columbian artifacts have been found here."
    },
    facts: {
      de: ["Indocubanisches Museum Bani", "Geburtsort von Fulgencio Batista"],
      hu: ["Bani Indokubai Múzeum", "Fulgencio Batista szülőhelye"],
      ro: ["Muzeul Indocubanez Bani", "Locul nașterii lui Fulgencio Batista"],
      en: ["Bani Indocuban Museum", "Birthplace of Fulgencio Batista"]
    }
  },
  {
    id: "moa-cities-v2",
    type: "city",
    parent: "CU-11",
    coords: [-74.95, 20.65],
    name: { de: "Moa", hu: "Moa", ro: "Moa", en: "Moa" },
    description: {
      de: "Ein wichtiges Zentrum für den Nickel- und Kobaltabbau im Osten Kubas.",
      hu: "A nikkel- és kobaltbányászat fontos központja Kelet-Kubában.",
      ro: "Un centru important pentru extracția de nichel și cobalt în estul Cubei.",
      en: "An important center for nickel and cobalt mining in eastern Cuba."
    },
    facts: {
      de: ["Große Tagebaue", "Wichtiger Beitrag zur kubanischen Wirtschaft"],
      hu: ["Nagy külszíni fejtések", "Fontos hozzájárulás a kubai gazdasághoz"],
      ro: ["Mari mine deschise", "Contribuție importantă la economia cubaneză"],
      en: ["Large open-pit mines", "Important contribution to the Cuban economy"]
    }
  },
  {
    id: "mayari-cities-v2",
    type: "city",
    parent: "CU-11",
    coords: [-75.68, 20.65],
    name: { de: "Mayarí", hu: "Mayarí", ro: "Mayarí", en: "Mayarí" },
    description: {
      de: "Eine Stadt und Gemeinde in der Provinz Holguín, nahe dem Nationalpark Sierra Cristal.",
      hu: "Város és község Holguín tartományban, a Sierra Cristal Nemzeti Park közelében.",
      ro: "Un oraș și o municipalitate din provincia Holguín, aproape de Parcul Național Sierra Cristal.",
      en: "A city and municipality in Holguín province, near the Sierra Cristal National Park."
    },
    facts: {
      de: ["Landwirtschaft und Bergbau", "Der Song 'Chan Chan' erwähnt Mayarí"],
      hu: ["Mezőgazdaság és bányászat", "A 'Chan Chan' dal említi Mayarít"],
      ro: ["Agricultură și minerit", "Cântecul 'Chan Chan' menționează Mayarí"],
      en: ["Agriculture and mining", "The song 'Chan Chan' mentions Mayarí"]
    }
  },
  {
    id: "san-luis-cities-v2",
    type: "city",
    parent: "CU-13",
    coords: [-75.85, 20.18],
    name: { de: "San Luis", hu: "San Luis", ro: "San Luis", en: "San Luis" },
    description: {
      de: "Eine Stadt in der Provinz Santiago de Cuba, ein wichtiger Eisenbahnknotenpunkt und landwirtschaftliches Zentrum.",
      hu: "Város Santiago de Cuba tartományban, fontos vasúti csomópont és mezőgazdasági központ.",
      ro: "Un oraș în provincia Santiago de Cuba, un nod feroviar important și un centru agricol.",
      en: "A city in Santiago de Cuba province, an important railway junction and agricultural center."
    },
    facts: {
      de: ["Zuckerrohr- und Kaffeeanbau", "Religiöse Bedeutung durch die Wallfahrtskirche El Cobre in der Nähe"],
      hu: ["Cukornád- és kávétermesztés", "Vallási jelentőség a közeli El Cobre zarándokhely miatt"],
      ro: ["Cultivarea trestiei de zahăr și a cafelei", "Importanță religioasă datorită sanctuarului El Cobre din apropiere"],
      en: ["Sugarcane and coffee cultivation", "Religious significance due to the nearby El Cobre sanctuary"]
    }
  },
  {
    id: "cardenas-city-cities-v2",
    type: "city",
    parent: "CU-04",
    coords: [-81.20, 23.03],
    name: { de: "Cárdenas", hu: "Cárdenas", ro: "Cárdenas", en: "Cárdenas" },
    description: {
      de: "Eine Hafenstadt in der Provinz Matanzas, bekannt als 'Stadt der Krebse' und 'Flaggenstadt', da hier 1850 erstmals die kubanische Flagge gehisst wurde.",
      hu: "Kikötőváros Matanzas tartományban, 'Rákok városa' és 'Zászlós város' néven ismert, mivel itt vonták fel először a kubai zászlót 1850-ben.",
      ro: "Un oraș portuar din provincia Matanzas, cunoscut ca 'Orașul Crabilor' și 'Orașul Drapelului', deoarece aici a fost arborat pentru prima dată drapelul cubanez în 1850.",
      en: "A port city in Matanzas province, known as the 'City of Crabs' and the 'Flag City' because the Cuban flag was first raised here in 1850."
    },
    facts: {
      de: ["Schachbrettartiger Straßenplan", "Fahrrad-Taxis (Bicitaxis) sind verbreitet", "Zucker- und Rumindustrie"],
      hu: ["Sakktáblaszerű utcaszerkezet", "Elterjedtek a biciklis taxik (Bicitaxis)", "Cukor- és rumipar"],
      ro: ["Plan stradal în carouri", "Taxiurile-bicicletă (Bicitaxis) sunt comune", "Industria zahărului și a romului"],
      en: ["Grid-like street plan", "Bicycle taxis (Bicitaxis) are common", "Sugar and rum industry"]
    }
  },
  {
    id: "placetas-cities-v2",
    type: "city",
    parent: "CU-05",
    coords: [-79.65, 22.31],
    name: { de: "Placetas", hu: "Placetas", ro: "Placetas", en: "Placetas" },
    description: {
      de: "Eine Stadt in der Provinz Villa Clara, die als wichtiges Handels- und Verkehrszentrum in der Region gilt.",
      hu: "Város Villa Clara tartományban, a régió fontos kereskedelmi és közlekedési központjának számít.",
      ro: "Un oraș din provincia Villa Clara, considerat un important centru comercial și de transport în regiune.",
      en: "A city in Villa Clara province, considered an important commercial and transportation hub in the region."
    },
    facts: {
      de: ["Gegründet 1861", "Tabakindustrie"],
      hu: ["1861-ben alapították", "Dohányipar"],
      ro: ["Fondat în 1861", "Industria tutunului"],
      en: ["Founded in 1861", "Tobacco industry"]
    }
  },
  {
    id: "santo-domingo-cities-v2",
    type: "city",
    parent: "CU-05",
    coords: [-80.24, 22.58],
    name: { de: "Santo Domingo", hu: "Santo Domingo", ro: "Santo Domingo", en: "Santo Domingo" },
    description: {
      de: "Eine Stadt in Villa Clara, deren Wirtschaft hauptsächlich von der Landwirtschaft, insbesondere dem Zuckerrohranbau, abhängt.",
      hu: "Város Villa Clarában, amelynek gazdasága főként a mezőgazdaságtól, különösen a cukornádtermesztéstől függ.",
      ro: "Un oraș în Villa Clara, a cărui economie depinde în principal de agricultură, în special de cultivarea trestiei de zahăr.",
      en: "A city in Villa Clara whose economy depends mainly on agriculture, especially sugarcane cultivation."
    },
    facts: {
      de: ["Mehrere Zuckermühlen in der Umgebung", "Ländlicher Charakter"],
      hu: ["Több cukorgyár a környéken", "Vidéki jelleg"],
      ro: ["Mai multe fabrici de zahăr în zonă", "Caracter rural"],
      en: ["Several sugar mills in the area", "Rural character"]
    }
  },
  {
    id: "manicaragua-cities-v2",
    type: "city",
    parent: "CU-05",
    coords: [-79.97, 22.15],
    name: { de: "Manicaragua", hu: "Manicaragua", ro: "Manicaragua", en: "Manicaragua" },
    description: {
      de: "Eine Gemeinde in den Escambray-Bergen, bekannt für den Anbau von hochwertigem Kaffee.",
      hu: "Község az Escambray-hegységben, a magas minőségű kávé termesztéséről ismert.",
      ro: "O municipalitate în Munții Escambray, cunoscută pentru cultivarea cafelei de înaltă calitate.",
      en: "A municipality in the Escambray Mountains known for the cultivation of high-quality coffee."
    },
    facts: {
      de: ["Zentrum des kubanischen Kaffeeanbaus", "Bergige Landschaft"],
      hu: ["A kubai kávétermesztés központja", "Hegyvidéki táj"],
      ro: ["Centrul cultivării cafelei cubaneze", "Peisaj montan"],
      en: ["Center of Cuban coffee cultivation", "Mountainous landscape"]
    }
  },
  {
    id: "cabaiguan-cities-v2",
    type: "city",
    parent: "CU-07",
    coords: [-79.49, 22.08],
    name: { de: "Cabaiguán", hu: "Cabaiguán", ro: "Cabaiguán", en: "Cabaiguán" },
    description: {
      de: "Eine Stadt in der Provinz Sancti Spíritus, bekannt für ihre Tabakproduktion und eine große kanarische Gemeinschaft.",
      hu: "Város Sancti Spíritus tartományban, dohánytermeléséről és nagy kanári-szigeteki közösségéről ismert.",
      ro: "Un oraș din provincia Sancti Spíritus, cunoscut pentru producția sa de tutun și o comunitate canariană mare.",
      en: "A city in Sancti Spíritus province, known for its tobacco production and a large Canary Islander community."
    },
    facts: {
      de: ["Gegründet von Einwanderern von den Kanarischen Inseln", "Zentrum der Zigarrenherstellung"],
      hu: ["Kanári-szigeteki bevándorlók alapították", "A szivargyártás központja"],
      ro: ["Fondat de imigranți din Insulele Canare", "Centru de fabricare a trabucurilor"],
      en: ["Founded by immigrants from the Canary Islands", "Center of cigar manufacturing"]
    }
  },
  {
    id: "yaguajay-cities-v2",
    type: "city",
    parent: "CU-07",
    coords: [-79.23, 22.32],
    name: { de: "Yaguajay", hu: "Yaguajay", ro: "Yaguajay", en: "Yaguajay" },
    description: {
      de: "Eine Stadt, die für eine entscheidende Schlacht der kubanischen Revolution unter der Führung von Camilo Cienfuegos bekannt ist.",
      hu: "A kubai forradalom egyik döntő csatájáról ismert város, melyet Camilo Cienfuegos vezetett.",
      ro: "Un oraș cunoscut pentru o bătălie decisivă a Revoluției Cubaneze condusă de Camilo Cienfuegos.",
      en: "A city known for a decisive battle of the Cuban Revolution led by Camilo Cienfuegos."
    },
    facts: {
      de: ["Camilo Cienfuegos Denkmal und Museum", "Landwirtschaftliche Region"],
      hu: ["Camilo Cienfuegos Emlékmű és Múzeum", "Mezőgazdasági régió"],
      ro: ["Monumentul și Muzeul Camilo Cienfuegos", "Regiune agricolă"],
      en: ["Camilo Cienfuegos Monument and Museum", "Agricultural region"]
    }
  },
  {
    id: "amancio-cities-v2",
    type: "city",
    parent: "CU-10",
    coords: [-77.58, 20.82],
    name: { de: "Amancio", hu: "Amancio", ro: "Amancio", en: "Amancio" },
    description: {
      de: "Eine Gemeinde im Süden der Provinz Las Tunas, deren Hauptwirtschaftszweig die Zuckerproduktion ist.",
      hu: "Község Las Tunas tartomány déli részén, fő gazdasági ága a cukortermelés.",
      ro: "O municipalitate în sudul provinciei Las Tunas, a cărei principală industrie este producția de zahăr.",
      en: "A municipality in the south of Las Tunas province, whose main industry is sugar production."
    },
    facts: {
      de: ["Eine der größten Zuckermühlen des Landes", "Ländliche Gemeinde"],
      hu: ["Az ország egyik legnagyobb cukorgyára", "Vidéki község"],
      ro: ["Una dintre cele mai mari fabrici de zahăr din țară", "Comunitate rurală"],
      en: ["One of the largest sugar mills in the country", "Rural community"]
    }
  },
  {
    id: "colombia-cities-v2",
    type: "city",
    parent: "CU-10",
    coords: [-77.42, 20.98],
    name: { de: "Colombia", hu: "Colombia", ro: "Colombia", en: "Colombia" },
    description: {
      de: "Eine Stadt und Gemeinde in der Provinz Las Tunas.",
      hu: "Város és község Las Tunas tartományban.",
      ro: "Un oraș și o municipalitate în provincia Las Tunas.",
      en: "A city and municipality in the province of Las Tunas."
    },
    facts: {
      de: ["Landwirtschaft, insbesondere Viehzucht", "Ländliche Umgebung"],
      hu: ["Mezőgazdaság, különösen állattenyésztés", "Vidéki környezet"],
      ro: ["Agricultură, în special creșterea vitelor", "Mediu rural"],
      en: ["Agriculture, especially cattle ranching", "Rural surroundings"]
    }
  },
  {
    id: "jiguani-cities-v2",
    type: "city",
    parent: "CU-12",
    coords: [-76.42, 20.37],
    name: { de: "Jiguaní", hu: "Jiguaní", ro: "Jiguaní", en: "Jiguaní" },
    description: {
      de: "Eine der ältesten Siedlungen in der Provinz Granma mit reicher Geschichte im Zusammenhang mit den Unabhängigkeitskriegen.",
      hu: "Granma tartomány egyik legrégebbi települése, gazdag történelemmel, amely a függetlenségi háborúkhoz kapcsolódik.",
      ro: "Una dintre cele mai vechi așezări din provincia Granma, cu o istorie bogată legată de războaiele de independență.",
      en: "One of the oldest settlements in Granma province, with a rich history related to the wars of independence."
    },
    facts: {
      de: ["Gegründet 1701", "Historische Bedeutung"],
      hu: ["1701-ben alapították", "Történelmi jelentőség"],
      ro: ["Fondat în 1701", "Semnificație istorică"],
      en: ["Founded in 1701", "Historical significance"]
    }
  },
  {
    id: "niquero-cities-v2",
    type: "city",
    parent: "CU-12",
    coords: [-77.58, 20.04],
    name: { de: "Niquero", hu: "Niquero", ro: "Niquero", en: "Niquero" },
    description: {
      de: "Eine Küstenstadt in Granma, bekannt als der Ort, an dem Fidel Castro und seine Revolutionäre 1956 mit der Yacht Granma landeten.",
      hu: "Tengerparti város Granmában, arról ismert, hogy Fidel Castro és forradalmárai 1956-ban a Granma jachttal itt szálltak partra.",
      ro: "Un oraș de coastă în Granma, cunoscut ca locul unde Fidel Castro și revoluționarii săi au debarcat cu iahtul Granma în 1956.",
      en: "A coastal town in Granma, known as the place where Fidel Castro and his revolutionaries landed with the yacht Granma in 1956."
    },
    facts: {
      de: ["Desembarco del Granma Nationalpark in der Nähe", "Zuckerindustrie"],
      hu: ["Közelben a Desembarco del Granma Nemzeti Park", "Cukoripar"],
      ro: ["Parcul Național Desembarco del Granma în apropiere", "Industria zahărului"],
      en: ["Desembarco del Granma National Park nearby", "Sugar industry"]
    }
  },
  {
    id: "campechuela-cities-v2",
    type: "city",
    parent: "CU-12",
    coords: [-77.28, 20.23],
    name: { de: "Campechuela", hu: "Campechuela", ro: "Campechuela", en: "Campechuela" },
    description: {
      de: "Eine Gemeinde und Stadt an der Küste der Provinz Granma.",
      hu: "Község és város Granma tartomány partján.",
      ro: "O municipalitate și un oraș pe coasta provinciei Granma.",
      en: "A municipality and city on the coast of Granma province."
    },
    facts: {
      de: ["Fischerei und Landwirtschaft", "Historische Ruinen von Zuckermühlen"],
      hu: ["Halászat és mezőgazdaság", "Cukormalmok történelmi romjai"],
      ro: ["Pescuit și agricultură", "Ruine istorice ale fabricilor de zahăr"],
      en: ["Fishing and agriculture", "Historic ruins of sugar mills"]
    }
  },
  {
    id: "media-luna-cities-v2",
    type: "city",
    parent: "CU-12",
    coords: [-77.43, 20.14],
    name: { de: "Media Luna", hu: "Media Luna", ro: "Media Luna", en: "Media Luna" },
    description: {
      de: "Eine Küstenstadt in Granma, Geburtsort von Celia Sánchez, einer Heldin der kubanischen Revolution.",
      hu: "Tengerparti város Granmában, Celia Sánchez, a kubai forradalom hősnőjének szülőhelye.",
      ro: "Un oraș de coastă în Granma, locul de naștere al Celiei Sánchez, o eroină a Revoluției Cubaneze.",
      en: "A coastal town in Granma, birthplace of Celia Sánchez, a heroine of the Cuban Revolution."
    },
    facts: {
      de: ["Celia Sánchez Geburtsort und Museum", "Zuckerproduktion"],
      hu: ["Celia Sánchez szülőháza és múzeuma", "Cukortermelés"],
      ro: ["Casa memorială și muzeul Celia Sánchez", "Producția de zahăr"],
      en: ["Celia Sánchez birthplace and museum", "Sugar production"]
    }
  },
  {
    id: "sagua-de-tanamo-cities-v2",
    type: "city",
    parent: "CU-11",
    coords: [-75.24, 20.58],
    name: { de: "Sagua de Tánamo", hu: "Sagua de Tánamo", ro: "Sagua de Tánamo", en: "Sagua de Tánamo" },
    description: {
      de: "Eine Stadt in der bergigen Region der Provinz Holguín, umgeben von üppiger Natur.",
      hu: "Város Holguín tartomány hegyvidéki régiójában, buja természettel körülvéve.",
      ro: "Un oraș în regiunea muntoasă a provinciei Holguín, înconjurat de natură luxuriantă.",
      en: "A city in the mountainous region of Holguín province, surrounded by lush nature."
    },
    facts: {
      de: ["Kaffeeanbau und Forstwirtschaft", "Nahe dem Alexander-von-Humboldt-Nationalpark"],
      hu: ["Kávétermesztés és erdészet", "Az Alexander von Humboldt Nemzeti Park közelében"],
      ro: ["Cultivarea cafelei și silvicultură", "Aproape de Parcul Național Alexander von Humboldt"],
      en: ["Coffee cultivation and forestry", "Near Alexander von Humboldt National Park"]
    }
  },
  {
    id: "urbano-noris-cities-v2",
    type: "city",
    parent: "CU-11",
    coords: [-76.13, 20.6],
    name: { de: "Urbano Noris", hu: "Urbano Noris", ro: "Urbano Noris", en: "Urbano Noris" },
    description: {
      de: "Eine Gemeinde in Holguín, deren Wirtschaft stark von der Zuckerindustrie geprägt ist.",
      hu: "Község Holguínban, amelynek gazdaságát erősen a cukoripar határozza meg.",
      ro: "O municipalitate în Holguín, a cărei economie este puternic influențată de industria zahărului.",
      en: "A municipality in Holguín whose economy is heavily influenced by the sugar industry."
    },
    facts: {
      de: ["Große Zuckermühle 'Urbano Noris'", "Landwirtschaftliche Region"],
      hu: ["'Urbano Noris' nagy cukorgyár", "Mezőgazdasági régió"],
      ro: ["Marea fabrică de zahăr 'Urbano Noris'", "Regiune agricolă"],
      en: ["Large sugar mill 'Urbano Noris'", "Agricultural region"]
    }
  },
  {
    id: "caimanera-cities-v2",
    type: "city",
    parent: "CU-14",
    coords: [-75.15, 20.0],
    name: { de: "Caimanera", hu: "Caimanera", ro: "Caimanera", en: "Caimanera" },
    description: {
      de: "Ein Fischerdorf an der Guantánamo-Bucht, direkt an der Grenze zur US-Marinebasis.",
      hu: "Halászfalu a Guantánamói-öbölben, közvetlenül az amerikai haditengerészeti támaszpont határán.",
      ro: "Un sat pescăresc în Golful Guantánamo, chiar la granița cu baza navală americană.",
      en: "A fishing village on Guantánamo Bay, right on the border with the US naval base."
    },
    facts: {
      de: ["Nächste kubanische Stadt zur US-Basis", "Besonderer Zugang erforderlich", "Salzgewinnung"],
      hu: ["A legközelebbi kubai város az amerikai támaszponthoz", "Különleges belépés szükséges", "Sókitermelés"],
      ro: ["Cel mai apropiat oraș cubanez de baza americană", "Necesită acces special", "Producția de sare"],
      en: ["Closest Cuban town to the US base", "Special access required", "Salt production"]
    }
  },
  {
    id: "manuel-tames-cities-v2",
    type: "city",
    parent: "CU-14",
    coords: [-75.05, 20.18],
    name: { de: "Manuel Tames", hu: "Manuel Tames", ro: "Manuel Tames", en: "Manuel Tames" },
    description: {
      de: "Eine Gemeinde in der Provinz Guantánamo, deren Wirtschaft auf Landwirtschaft und Kaffeeanbau basiert.",
      hu: "Község Guantánamo tartományban, gazdasága a mezőgazdaságra és a kávétermesztésre épül.",
      ro: "O municipalitate din provincia Guantánamo, a cărei economie se bazează pe agricultură și cultivarea cafelei.",
      en: "A municipality in Guantánamo province whose economy is based on agriculture and coffee cultivation."
    },
    facts: {
      de: ["Bergige Region", "Kakao- und Kokosnussanbau"],
      hu: ["Hegyvidéki régió", "Kakaó- és kókuszdió-termesztés"],
      ro: ["Regiune muntoasă", "Cultivarea cacauei și a nucilor de cocos"],
      en: ["Mountainous region", "Cocoa and coconut cultivation"]
    }
  },
  {
    id: "el-salvador-cities-v2",
    type: "city",
    parent: "CU-14",
    coords: [-75.22, 20.21],
    name: { de: "El Salvador", hu: "El Salvador", ro: "El Salvador", en: "El Salvador" },
    description: {
      de: "Eine Gemeinde in Guantánamo, die sich der Kaffee- und Kakaoproduktion widmet.",
      hu: "Község Guantánamóban, amely a kávé- és kakaótermelésnek szenteli magát.",
      ro: "O municipalitate din Guantánamo dedicată producției de cafea și cacao.",
      en: "A municipality in Guantánamo dedicated to the production of coffee and cocoa."
    },
    facts: {
      de: ["Ländliche und bergige Gemeinde", "Wichtiger Lieferant für die Schokoladenindustrie"],
      hu: ["Vidéki és hegyvidéki község", "Fontos beszállító a csokoládéipar számára"],
      ro: ["Comunitate rurală și montană", "Furnizor important pentru industria ciocolatei"],
      en: ["Rural and mountainous community", "Important supplier for the chocolate industry"]
    }
  },
  {
    id: "santa-cruz-del-sur-cities-v2",
    type: "city",
    parent: "CU-09",
    coords: [-77.98, 20.71],
    name: { de: "Santa Cruz del Sur", hu: "Santa Cruz del Sur", ro: "Santa Cruz del Sur", en: "Santa Cruz del Sur" },
    description: {
      de: "Eine Küstenstadt in der Provinz Camagüey, die 1932 von einem verheerenden Hurrikan schwer getroffen wurde.",
      hu: "Tengerparti város Camagüey tartományban, amelyet 1932-ben egy pusztító hurrikán súlyosan érintett.",
      ro: "Un oraș de coastă în provincia Camagüey, grav lovit de un uragan devastator în 1932.",
      en: "A coastal city in Camagüey province, severely hit by a devastating hurricane in 1932."
    },
    facts: {
      de: ["Wichtiger Fischereihafen", "Wiederaufgebaut nach der Naturkatastrophe"],
      hu: ["Fontos halászkikötő", "A természeti katasztrófa után újjáépítették"],
      ro: ["Port de pescuit important", "Reconstruit după dezastrul natural"],
      en: ["Important fishing port", "Rebuilt after the natural disaster"]
    }
  },
  {
    id: "guaimaro-cities-v2",
    type: "city",
    parent: "CU-09",
    coords: [-77.35, 21.05],
    name: { de: "Guáimaro", hu: "Guáimaro", ro: "Guáimaro", en: "Guáimaro" },
    description: {
      de: "Eine Stadt von großer historischer Bedeutung, da hier 1869 die erste Verfassung der Republik in Waffen verabschiedet wurde.",
      hu: "Nagy történelmi jelentőségű város, mivel itt fogadták el 1869-ben a fegyverben álló köztársaság első alkotmányát.",
      ro: "Un oraș de mare importanță istorică, deoarece aici a fost adoptată prima Constituție a Republicii în Arme în 1869.",
      en: "A city of great historical importance, as the first Constitution of the Republic in Arms was adopted here in 1869."
    },
    facts: {
      de: ["Historisches Denkmal", "Viehzucht ist ein wichtiger Wirtschaftszweig"],
      hu: ["Történelmi emlékmű", "Az állattenyésztés fontos gazdasági ág"],
      ro: ["Monument istoric", "Creșterea vitelor este o ramură economică importantă"],
      en: ["Historic monument", "Cattle ranching is an important economic sector"]
    }
  },
  {
    id: "los-palacios-cities-v2",
    type: "city",
    parent: "CU-01",
    coords: [-83.24, 22.58],
    name: { de: "Los Palacios", hu: "Los Palacios", ro: "Los Palacios", en: "Los Palacios" },
    description: {
      de: "Eine Gemeinde in Pinar del Río, deren Wirtschaft auf dem Reisanbau basiert.",
      hu: "Község Pinar del Ríóban, gazdasága a rizstermesztésre épül.",
      ro: "O municipalitate din Pinar del Río, a cărei economie se bazează pe cultivarea orezului.",
      en: "A municipality in Pinar del Río whose economy is based on rice cultivation."
    },
    facts: {
      de: ["Große Reisfelder", "Ländliche Atmosphäre"],
      hu: ["Nagy rizsültetvények", "Vidéki hangulat"],
      ro: ["Mari câmpuri de orez", "Atmosferă rurală"],
      en: ["Large rice fields", "Rural atmosphere"]
    }
  },
  {
    id: "san-cristobal-cities-v2",
    type: "city",
    parent: "CU-15",
    coords: [-83.05, 22.71],
    name: { de: "San Cristóbal", hu: "San Cristóbal", ro: "San Cristóbal", en: "San Cristóbal" },
    description: {
      de: "Eine Stadt in der Provinz Artemisa, am Fuße der Sierra del Rosario.",
      hu: "Város Artemisa tartományban, a Sierra del Rosario lábánál.",
      ro: "Un oraș în provincia Artemisa, la poalele Sierra del Rosario.",
      en: "A city in the province of Artemisa, at the foot of the Sierra del Rosario."
    },
    facts: {
      de: ["Nähe zum Biosphärenreservat Sierra del Rosario", "Landwirtschaft"],
      hu: ["A Sierra del Rosario bioszféra-rezervátum közelsége", "Mezőgazdaság"],
      ro: ["Apropierea de Rezervația Biosferei Sierra del Rosario", "Agricultură"],
      en: ["Proximity to the Sierra del Rosario Biosphere Reserve", "Agriculture"]
    }
  },
  {
    id: "bauta-cities-v2",
    type: "city",
    parent: "CU-15",
    coords: [-82.54, 22.98],
    name: { de: "Bauta", hu: "Bauta", ro: "Bauta", en: "Bauta" },
    description: {
      de: "Eine Stadt in der Nähe von Havanna, die als Schlafstadt für Pendler in die Hauptstadt dient.",
      hu: "Havanna közelében fekvő város, amely a fővárosba ingázók alvóvárosaként szolgál.",
      ro: "Un oraș de lângă Havana, care servește ca oraș-dormitor pentru navetiștii din capitală.",
      en: "A city near Havana that serves as a dormitory town for commuters to the capital."
    },
    facts: {
      de: ["Gute Verkehrsanbindung nach Havanna", "Industrie- und Wohngebiete"],
      hu: ["Jó közlekedési kapcsolatok Havannával", "Ipari és lakóövezetek"],
      ro: ["Conexiuni bune de transport cu Havana", "Zone industriale și rezidențiale"],
      en: ["Good transport links to Havana", "Industrial and residential areas"]
    }
  },
  {
    id: "jaguey-grande-cities-v2",
    type: "city",
    parent: "CU-04",
    coords: [-81.13, 22.52],
    name: { de: "Jagüey Grande", hu: "Jagüey Grande", ro: "Jagüey Grande", en: "Jagüey Grande" },
    description: {
      de: "Eine Stadt in Matanzas, Tor zur Zapata-Halbinsel und bekannt für den Zitrusanbau.",
      hu: "Város Matanzasban, a Zapata-félsziget kapuja és a citrustermesztésről ismert.",
      ro: "Un oraș din Matanzas, poarta de acces către Peninsula Zapata și cunoscut pentru cultivarea citricelor.",
      en: "A city in Matanzas, the gateway to the Zapata Peninsula and known for citrus cultivation."
    },
    facts: {
      de: ["Größtes Zitrusanbaugebiet Kubas", "Nähe zur Schweinebucht"],
      hu: ["Kuba legnagyobb citrustermesztő területe", "A Disznó-öböl közelsége"],
      ro: ["Cea mai mare zonă de cultivare a citricelor din Cuba", "Apropierea de Golful Porcilor"],
      en: ["Cuba's largest citrus growing area", "Proximity to the Bay of Pigs"]
    }
  },
  {
    id: "aguada-de-pasajeros-cities-v2",
    type: "city",
    parent: "CU-06",
    coords: [-80.84, 22.38],
    name: { de: "Aguada de Pasajeros", hu: "Aguada de Pasajeros", ro: "Aguada de Pasajeros", en: "Aguada de Pasajeros" },
    description: {
      de: "Eine Gemeinde in der Provinz Cienfuegos, deren Wirtschaft von Landwirtschaft und Viehzucht geprägt ist.",
      hu: "Község Cienfuegos tartományban, gazdaságát a mezőgazdaság és az állattenyésztés jellemzi.",
      ro: "O municipalitate din provincia Cienfuegos, a cărei economie este dominată de agricultură și creșterea vitelor.",
      en: "A municipality in the province of Cienfuegos, whose economy is dominated by agriculture and cattle ranching."
    },
    facts: {
      de: ["Zuckerrohranbau", "Ländliche Gemeinde"],
      hu: ["Cukornádtermesztés", "Vidéki község"],
      ro: ["Cultivarea trestiei de zahăr", "Comunitate rurală"],
      en: ["Sugarcane cultivation", "Rural community"]
    }
  },
  {
    id: "cruces-cities-v2",
    type: "city",
    parent: "CU-06",
    coords: [-80.27, 22.34],
    name: { de: "Cruces", hu: "Cruces", ro: "Cruces", en: "Cruces" },
    description: {
      de: "Eine Stadt in der Provinz Cienfuegos, bekannt für ihre Verbindung zur Zuckerindustrie und ihre jährlichen Feste.",
      hu: "Város Cienfuegos tartományban, a cukoriparhoz fűződő kapcsolatáról és éves ünnepségeiről ismert.",
      ro: "Un oraș din provincia Cienfuegos, cunoscut pentru legătura sa cu industria zahărului și festivalurile sale anuale.",
      en: "A city in the province of Cienfuegos, known for its connection to the sugar industry and its annual festivals."
    },
    facts: {
      de: ["'Die Stadt der Mühlen'", "Geburtsort des Komponisten Benny Moré in der Nähe"],
      hu: ["'A malmok városa'", "Benny Moré zeneszerző szülőhelye a közelben"],
      ro: ["'Orașul Morilor'", "Locul de naștere al compozitorului Benny Moré în apropiere"],
      en: ["'The City of Mills'", "Birthplace of composer Benny Moré nearby"]
    }
  },
  {
    id: "cumanayagua-cities-v2",
    type: "city",
    parent: "CU-06",
    coords: [-80.2, 22.15],
    name: { de: "Cumanayagua", hu: "Cumanayagua", ro: "Cumanayagua", en: "Cumanayagua" },
    description: {
      de: "Eine Gemeinde in der Provinz Cienfuegos, die sich von der Küste bis in die Escambray-Berge erstreckt.",
      hu: "Község Cienfuegos tartományban, amely a parttól az Escambray-hegységig terjed.",
      ro: "O municipalitate din provincia Cienfuegos, care se întinde de la coastă până la Munții Escambray.",
      en: "A municipality in Cienfuegos province that extends from the coast to the Escambray Mountains."
    },
    facts: {
      de: ["Anbau von Kaffee und Zitrusfrüchten", "Teil des Nationalparks Topes de Collantes liegt in der Gemeinde"],
      hu: ["Kávé- és citrustermesztés", "A Topes de Collantes Nemzeti Park egy része a községben található"],
      ro: ["Cultivarea cafelei și a citricelor", "O parte a Parcului Național Topes de Collantes se află în municipalitate"],
      en: ["Coffee and citrus cultivation", "Part of the Topes de Collantes National Park is in the municipality"]
    }
  },
  {
    id: "taguasco-cities-v2",
    type: "city",
    parent: "CU-07",
    coords: [-79.36, 22.0],
    name: { de: "Taguasco", hu: "Taguasco", ro: "Taguasco", en: "Taguasco" },
    description: {
      de: "Eine Stadt und Gemeinde in Sancti Spíritus, die von der Landwirtschaft, insbesondere Reis und Zuckerrohr, lebt.",
      hu: "Város és község Sancti Spíritusban, amely a mezőgazdaságból, különösen a rizs- és cukornádtermesztésből él.",
      ro: "Un oraș și o municipalitate din Sancti Spíritus care trăiește din agricultură, în special din orez și trestie de zahăr.",
      en: "A city and municipality in Sancti Spíritus that lives off agriculture, especially rice and sugarcane."
    },
    facts: {
      de: ["Reis- und Zuckerproduktion", "Ländliche Gemeinde"],
      hu: ["Rizs- és cukortermelés", "Vidéki község"],
      ro: ["Producția de orez și zahăr", "Comunitate rurală"],
      en: ["Rice and sugar production", "Rural community"]
    }
  },
  {
    id: "chambas-cities-v2",
    type: "city",
    parent: "CU-08",
    coords: [-78.91, 22.19],
    name: { de: "Chambas", hu: "Chambas", ro: "Chambas", en: "Chambas" },
    description: {
      de: "Eine Gemeinde in der Provinz Ciego de Ávila mit einer Wirtschaft, die sich auf Zuckerrohr und Viehzucht stützt.",
      hu: "Község Ciego de Ávila tartományban, gazdasága a cukornádra és az állattenyésztésre támaszkodik.",
      ro: "O municipalitate din provincia Ciego de Ávila cu o economie bazată pe trestie de zahăr și creșterea vitelor.",
      en: "A municipality in the province of Ciego de Ávila with an economy based on sugarcane and cattle ranching."
    },
    facts: {
      de: ["Landwirtschaftliche Prägung", "Nähe zur Nordküste"],
      hu: ["Mezőgazdasági jelleg", "Az északi part közelsége"],
      ro: ["Caracter agricol", "Apropierea de coasta de nord"],
      en: ["Agricultural character", "Proximity to the north coast"]
    }
  },
  {
    id: "baragua-cities-v2",
    type: "city",
    parent: "CU-08",
    coords: [-78.62, 21.68],
    name: { de: "Baraguá", hu: "Baraguá", ro: "Baraguá", en: "Baraguá" },
    description: {
      de: "Eine Gemeinde in Ciego de Ávila, bekannt für die 'Bio-Fabrik', eine wichtige biotechnologische Einrichtung.",
      hu: "Község Ciego de Ávilában, a 'Bio-gyárról' ismert, egy fontos biotechnológiai létesítményről.",
      ro: "O municipalitate din Ciego de Ávila, cunoscută pentru 'Bio-fabrica', o importantă unitate biotehnologică.",
      en: "A municipality in Ciego de Ávila, known for the 'Bio-factory', an important biotechnological facility."
    },
    facts: {
      de: ["Biotechnologie in der Landwirtschaft", "Zuckerrohranbau"],
      hu: ["Biotechnológia a mezőgazdaságban", "Cukornádtermesztés"],
      ro: ["Biotehnologie în agricultură", "Cultivarea trestiei de zahăr"],
      en: ["Biotechnology in agriculture", "Sugarcane cultivation"]
    }
  },
  {
    id: "primero-de-enero-cities-v2",
    type: "city",
    parent: "CU-08",
    coords: [-78.42, 21.94],
    name: { de: "Primero de Enero", hu: "Primero de Enero", ro: "Primero de Enero", en: "Primero de Enero" },
    description: {
      de: "Eine Gemeinde in Ciego de Ávila, die nach dem Datum des Sieges der kubanischen Revolution benannt ist.",
      hu: "Község Ciego de Ávilában, amelyet a kubai forradalom győzelmének dátumáról neveztek el.",
      ro: "O municipalitate din Ciego de Ávila, numită după data victoriei Revoluției Cubaneze.",
      en: "A municipality in Ciego de Ávila named after the date of the victory of the Cuban Revolution."
    },
    facts: {
      de: ["Landwirtschaftliches Gebiet", "Zucker- und Viehwirtschaft"],
      hu: ["Mezőgazdasági terület", "Cukor- és állattenyésztés"],
      ro: ["Zonă agricolă", "Industria zahărului și a vitelor"],
      en: ["Agricultural area", "Sugar and cattle industry"]
    }
  },
  {
    id: "jobabo-cities-v2",
    type: "city",
    parent: "CU-10",
    coords: [-77.28, 20.9],
    name: { de: "Jobabo", hu: "Jobabo", ro: "Jobabo", en: "Jobabo" },
    description: {
      de: "Eine Stadt und Gemeinde in der Provinz Las Tunas, die ein wichtiges Zentrum für die Zuckerproduktion ist.",
      hu: "Város és község Las Tunas tartományban, amely a cukortermelés fontos központja.",
      ro: "Un oraș și o municipalitate din provincia Las Tunas, care este un centru important pentru producția de zahăr.",
      en: "A city and municipality in the province of Las Tunas, which is an important center for sugar production."
    },
    facts: {
      de: ["Große Zuckermühle", "Landwirtschaftliche Gemeinde"],
      hu: ["Nagy cukorgyár", "Mezőgazdasági község"],
      ro: ["Mare fabrică de zahăr", "Comunitate agricolă"],
      en: ["Large sugar mill", "Agricultural community"]
    }
  },
  {
    id: "yara-cities-v2",
    type: "city",
    parent: "CU-12",
    coords: [-76.95, 20.27],
    name: { de: "Yara", hu: "Yara", ro: "Yara", en: "Yara" },
    description: {
      de: "Eine Stadt mit großer historischer Bedeutung, da hier Carlos Manuel de Céspedes den 'Grito de Yara' ausrief und damit den Zehnjährigen Krieg begann.",
      hu: "Nagy történelmi jelentőségű város, mivel itt kiáltotta ki Carlos Manuel de Céspedes a 'Grito de Yara'-t, amellyel megkezdődött a tízéves háború.",
      ro: "Un oraș de mare importanță istorică, deoarece aici Carlos Manuel de Céspedes a lansat 'Grito de Yara', începând astfel Războiul de Zece Ani.",
      en: "A city of great historical importance, as it was here that Carlos Manuel de Céspedes launched the 'Grito de Yara', thus beginning the Ten Years' War."
    },
    facts: {
      de: ["Beginn der kubanischen Unabhängigkeitskriege", "Reisanbau"],
      hu: ["A kubai függetlenségi háborúk kezdete", "Rizstermesztés"],
      ro: ["Începutul războaielor de independență cubaneze", "Cultivarea orezului"],
      en: ["Beginning of the Cuban Wars of Independence", "Rice cultivation"]
    }
  },
  {
    id: "rio-cauto-city-cities-v2",
    type: "city",
    parent: "CU-12",
    coords: [-77.02, 20.56],
    name: { de: "Río Cauto (Stadt)", hu: "Río Cauto (város)", ro: "Río Cauto (oraș)", en: "Río Cauto (city)" },
    description: {
      de: "Eine Gemeinde, die nach dem längsten Fluss Kubas benannt ist, der durch ihr Gebiet fließt.",
      hu: "Egy község, amelyet Kuba leghosszabb folyójáról neveztek el, amely áthalad a területén.",
      ro: "O municipalitate numită după cel mai lung râu din Cuba, care traversează teritoriul său.",
      en: "A municipality named after the longest river in Cuba, which flows through its territory."
    },
    facts: {
      de: ["Wichtig für den Reisanbau", "Fluss Cauto ist eine wichtige Wasserquelle"],
      hu: ["Fontos a rizstermesztés szempontjából", "A Cauto folyó fontos vízforrás"],
      ro: ["Important pentru cultivarea orezului", "Râul Cauto este o sursă importantă de apă"],
      en: ["Important for rice cultivation", "The Cauto River is an important water source"]
    }
  },
  {
    id: "cacocum-cities-v2",
    type: "city",
    parent: "CU-11",
    coords: [-76.24, 20.73],
    name: { de: "Cacocum", hu: "Cacocum", ro: "Cacocum", en: "Cacocum" },
    description: {
      de: "Eine Gemeinde in der Provinz Holguín, die ein wichtiger Verkehrsknotenpunkt und landwirtschaftliches Zentrum ist.",
      hu: "Község Holguín tartományban, fontos közlekedési csomópont és mezőgazdasági központ.",
      ro: "O municipalitate din provincia Holguín, care este un nod important de transport și un centru agricol.",
      en: "A municipality in the province of Holguín, which is an important transportation hub and agricultural center."
    },
    facts: {
      de: ["Eisenbahnkreuzung", "Zuckerrohranbau"],
      hu: ["Vasúti kereszteződés", "Cukornádtermesztés"],
      ro: ["Intersecție feroviară", "Cultivarea trestiei de zahăr"],
      en: ["Railway junction", "Sugarcane cultivation"]
    }
  },
  {
    id: "imias-cities-v2",
    type: "city",
    parent: "CU-14",
    coords: [-74.65, 20.07],
    name: { de: "Imías", hu: "Imías", ro: "Imías", en: "Imías" },
    description: {
      de: "Eine Küstengemeinde im äußersten Osten Kubas, bekannt für ihre terrassierten Küstenformationen.",
      hu: "Part menti község Kuba legkeletibb részén, teraszos partformációiról ismert.",
      ro: "O municipalitate de coastă în extremitatea estică a Cubei, cunoscută pentru formațiunile sale de coastă în terase.",
      en: "A coastal municipality in the far east of Cuba, known for its terraced coastal formations."
    },
    facts: {
      de: ["Geologische Besonderheiten", "Kaffee- und Kakaoproduktion"],
      hu: ["Földtani különlegességek", "Kávé- és kakaótermelés"],
      ro: ["Caracteristici geologice speciale", "Producția de cafea și cacao"],
      en: ["Geological special features", "Coffee and cocoa production"]
    }
  },
  {
    id: "san-antonio-del-sur-cities-v2",
    type: "city",
    parent: "CU-14",
    coords: [-74.8, 20.05],
    name: { de: "San Antonio del Sur", hu: "San Antonio del Sur", ro: "San Antonio del Sur", en: "San Antonio del Sur" },
    description: {
      de: "Eine Gemeinde in Guantánamo, die in einer der trockensten Regionen Kubas liegt.",
      hu: "Község Guantánamóban, Kuba egyik legszárazabb régiójában található.",
      ro: "O municipalitate din Guantánamo, situată într-una dintre cele mai aride regiuni ale Cubei.",
      en: "A municipality in Guantánamo, located in one of the driest regions of Cuba."
    },
    facts: {
      de: ["Halbwüstenklima", "Kaffeeanbau in den Bergen"],
      hu: ["Félsivatagi éghajlat", "Kávétermesztés a hegyekben"],
      ro: ["Climă semideșertică", "Cultivarea cafelei în munți"],
      en: ["Semi-desert climate", "Coffee cultivation in the mountains"]
    }
  },
  {
    id: "guanajay-cities-v2",
    type: "city",
    parent: "CU-15",
    coords: [-82.68, 22.92],
    name: { de: "Guanajay", hu: "Guanajay", ro: "Guanajay", en: "Guanajay" },
    description: {
      de: "Eine historische Stadt in der Provinz Artemisa, die einst ein beliebtes Ziel für wohlhabende Havanner war.",
      hu: "Történelmi város Artemisa tartományban, amely egykor a gazdag havannaiak kedvelt célpontja volt.",
      ro: "Un oraș istoric din provincia Artemisa, care a fost odată o destinație populară pentru havanezii bogați.",
      en: "A historic city in the province of Artemisa, which was once a popular destination for wealthy Havanians."
    },
    facts: {
      de: ["Historisches Theater", "Ehemals wichtiger Verkehrsknotenpunkt"],
      hu: ["Történelmi színház", "Egykor fontos közlekedési csomópont"],
      ro: ["Teatru istoric", "Fost nod de transport important"],
      en: ["Historic theater", "Formerly an important transportation hub"]
    }
  },
  {
    id: "mariel-cities-v2",
    type: "city",
    parent: "CU-15",
    coords: [-82.75, 22.99],
    name: { de: "Mariel", hu: "Mariel", ro: "Mariel", en: "Mariel" },
    description: {
      de: "Eine Hafenstadt westlich von Havanna, bekannt für die Mariel-Bootskrise von 1980 und die neue Sonderwirtschaftszone.",
      hu: "Havannától nyugatra fekvő kikötőváros, amely az 1980-as Mariel-hajóválságról és az új különleges gazdasági övezetről ismert.",
      ro: "Un oraș portuar la vest de Havana, cunoscut pentru criza ambarcațiunilor Mariel din 1980 și noua zonă economică specială.",
      en: "A port city west of Havana, known for the 1980 Mariel boatlift and the new special economic zone."
    },
    facts: {
      de: ["Wichtigster Containerhafen Kubas", "Zement- und Energiewirtschaft"],
      hu: ["Kuba legfontosabb konténerkikötője", "Cement- és energiaipar"],
      ro: ["Cel mai important port de containere din Cuba", "Industria cimentului și a energiei"],
      en: ["Cuba's most important container port", "Cement and energy industry"]
    }
  },
  {
    id: "batabano-cities-v2",
    type: "city",
    parent: "CU-16",
    coords: [-82.28, 22.71],
    name: { de: "Batabanó", hu: "Batabanó", ro: "Batabanó", en: "Batabanó" },
    description: {
      de: "Ein wichtiger Hafen an der Südküste Kubas und der Hauptabfahrtspunkt für Fähren zur Isla de la Juventud.",
      hu: "Fontos kikötő Kuba déli partján és a fő indulási pont az Isla de la Juventud felé tartó kompok számára.",
      ro: "Un port important pe coasta de sud a Cubei și principalul punct de plecare pentru feriboturile către Isla de la Juventud.",
      en: "An important port on the south coast of Cuba and the main departure point for ferries to the Isla de la Juventud."
    },
    facts: {
      de: ["Schwammfischerei", "Hafen für die Fischerei- und Transportindustrie"],
      hu: ["Szivacshalászat", "A halászati és közlekedési ipar kikötője"],
      ro: ["Pescuitul de bureți", "Port pentru industria pescuitului și a transporturilor"],
      en: ["Sponge fishing", "Port for the fishing and transport industry"]
    }
  },
  {
    id: "melena-del-sur-cities-v2",
    type: "city",
    parent: "CU-16",
    coords: [-82.14, 22.78],
    name: { de: "Melena del Sur", hu: "Melena del Sur", ro: "Melena del Sur", en: "Melena del Sur" },
    description: {
      de: "Eine Gemeinde in der Provinz Mayabeque an der Südküste, deren Wirtschaft von der Landwirtschaft geprägt ist.",
      hu: "Község Mayabeque tartományban a déli parton, gazdaságát a mezőgazdaság jellemzi.",
      ro: "O municipalitate din provincia Mayabeque pe coasta de sud, a cărei economie este dominată de agricultură.",
      en: "A municipality in the province of Mayabeque on the south coast, whose economy is dominated by agriculture."
    },
    facts: {
      de: ["Anbau von Kartoffeln und Gemüse", "Fischerei"],
      hu: ["Burgonya- és zöldségtermesztés", "Halászat"],
      ro: ["Cultivarea cartofilor și a legumelor", "Pescuit"],
      en: ["Cultivation of potatoes and vegetables", "Fishing"]
    }
  },
  {
    id: "perico-cities-v2",
    type: "city",
    parent: "CU-04",
    coords: [-81.01, 22.76],
    name: { de: "Perico", hu: "Perico", ro: "Perico", en: "Perico" },
    description: {
      de: "Eine Gemeinde in Matanzas, die historisch mit der Zuckerindustrie verbunden ist.",
      hu: "Község Matanzasban, amely történelmileg a cukoriparhoz kapcsolódik.",
      ro: "O municipalitate din Matanzas, legată istoric de industria zahărului.",
      en: "A municipality in Matanzas, historically linked to the sugar industry."
    },
    facts: {
      de: ["Landwirtschaftliche Gemeinde", "Zuckerrohranbau"],
      hu: ["Mezőgazdasági község", "Cukornádtermesztés"],
      ro: ["Comunitate agricolă", "Cultivarea trestiei de zahăr"],
      en: ["Agricultural community", "Sugarcane cultivation"]
    }
  },
  {
    id: "corralillo-cities-v2",
    type: "city",
    parent: "CU-05",
    coords: [-80.58, 22.98],
    name: { de: "Corralillo", hu: "Corralillo", ro: "Corralillo", en: "Corralillo" },
    description: {
      de: "Die nördlichste Gemeinde der Provinz Villa Clara an der Küste.",
      hu: "Villa Clara tartomány legészakibb tengerparti községe.",
      ro: "Cea mai nordică municipalitate a provinciei Villa Clara, pe coastă.",
      en: "The northernmost municipality of the province of Villa Clara, on the coast."
    },
    facts: {
      de: ["Viehzucht und Fischerei", "Ländliche Atmosphäre"],
      hu: ["Állattenyésztés és halászat", "Vidéki hangulat"],
      ro: ["Creșterea vitelor și pescuit", "Atmosferă rurală"],
      en: ["Cattle ranching and fishing", "Rural atmosphere"]
    }
  },
  {
    id: "quemado-de-guines-cities-v2",
    type: "city",
    parent: "CU-05",
    coords: [-80.25, 22.78],
    name: { de: "Quemado de Güines", hu: "Quemado de Güines", ro: "Quemado de Güines", en: "Quemado de Güines" },
    description: {
      de: "Eine Stadt und Gemeinde in Villa Clara, die von der Landwirtschaft lebt.",
      hu: "Város és község Villa Clarában, amely a mezőgazdaságból él.",
      ro: "Un oraș și o municipalitate din Villa Clara, care trăiește din agricultură.",
      en: "A city and municipality in Villa Clara that lives off agriculture."
    },
    facts: {
      de: ["Zuckerrohr- und Tabakanbau", "Geburtsort des Baseballspielers 'El Duque' Hernández"],
      hu: ["Cukornád- és dohánytermesztés", "'El Duque' Hernández baseball-játékos szülőhelye"],
      ro: ["Cultivarea trestiei de zahăr și a tutunului", "Locul de naștere al jucătorului de baseball 'El Duque' Hernández"],
      en: ["Sugarcane and tobacco cultivation", "Birthplace of baseball player 'El Duque' Hernández"]
    }
  },
  {
    id: "la-sierpe-cities-v2",
    type: "city",
    parent: "CU-07",
    coords: [-79.24, 21.75],
    name: { de: "La Sierpe", hu: "La Sierpe", ro: "La Sierpe", en: "La Sierpe" },
    description: {
      de: "Eine Gemeinde in Sancti Spíritus, die ein wichtiges Zentrum für den Reisanbau in Kuba ist.",
      hu: "Község Sancti Spíritusban, amely Kuba rizstermesztésének fontos központja.",
      ro: "O municipalitate din Sancti Spíritus, care este un centru important pentru cultivarea orezului în Cuba.",
      en: "A municipality in Sancti Spíritus, which is an important center for rice cultivation in Cuba."
    },
    facts: {
      de: ["Große Reisfelder", "Fluss Zaza fließt durch das Gebiet"],
      hu: ["Nagy rizsültetvények", "A Zaza folyó folyik át a területen"],
      ro: ["Mari câmpuri de orez", "Râul Zaza traversează zona"],
      en: ["Large rice fields", "The Zaza River flows through the area"]
    }
  },
  {
    id: "majagua-cities-v2",
    type: "city",
    parent: "CU-08",
    coords: [-78.99, 21.91],
    name: { de: "Majagua", hu: "Majagua", ro: "Majagua", en: "Majagua" },
    description: {
      de: "Eine Gemeinde in Ciego de Ávila, bekannt für ihre traditionellen Feste und ihre landwirtschaftliche Produktion.",
      hu: "Község Ciego de Ávilában, hagyományos ünnepeiről és mezőgazdasági termeléséről ismert.",
      ro: "O municipalitate din Ciego de Ávila, cunoscută pentru festivalurile sale tradiționale și producția agricolă.",
      en: "A municipality in Ciego de Ávila, known for its traditional festivals and agricultural production."
    },
    facts: {
      de: ["'Rote und Blaue' Feste", "Landwirtschaft"],
      hu: ["'Vörös és Kék' ünnepek", "Mezőgazdaság"],
      ro: ["Festivalurile 'Roșu și Albastru'", "Agricultură"],
      en: ["'Red and Blue' festivals", "Agriculture"]
    }
  },
  {
    id: "venezuela-cities-v2",
    type: "city",
    parent: "CU-08",
    coords: [-78.79, 21.74],
    name: { de: "Venezuela", hu: "Venezuela", ro: "Venezuela", en: "Venezuela" },
    description: {
      de: "Eine Gemeinde in Ciego de Ávila, deren Wirtschaft von der Zuckerindustrie dominiert wird.",
      hu: "Község Ciego de Ávilában, gazdaságát a cukoripar uralja.",
      ro: "O municipalitate din Ciego de Ávila, a cărei economie este dominată de industria zahărului.",
      en: "A municipality in Ciego de Ávila whose economy is dominated by the sugar industry."
    },
    facts: {
      de: ["Zuckermühle 'Enrique Varona'", "Landwirtschaftliche Gemeinde"],
      hu: ["'Enrique Varona' cukorgyár", "Mezőgazdasági község"],
      ro: ["Fabrica de zahăr 'Enrique Varona'", "Comunitate agricolă"],
      en: ["'Enrique Varona' sugar mill", "Agricultural community"]
    }
  },
  {
    id: "calixto-garcia-cities-v2",
    type: "city",
    parent: "CU-11",
    coords: [-76.7, 20.85],
    name: { de: "Calixto García", hu: "Calixto García", ro: "Calixto García", en: "Calixto García" },
    description: {
      de: "Eine Gemeinde in der Provinz Holguín, benannt nach dem General des Unabhängigkeitskrieges Calixto García.",
      hu: "Község Holguín tartományban, a függetlenségi háború tábornokáról, Calixto Garcíáról elnevezve.",
      ro: "O municipalitate din provincia Holguín, numită după generalul războiului de independență Calixto García.",
      en: "A municipality in the province of Holguín, named after the general of the war of independence Calixto García."
    },
    facts: {
      de: ["Viehzucht und Landwirtschaft", "Ländliche Region"],
      hu: ["Állattenyésztés és mezőgazdaság", "Vidéki régió"],
      ro: ["Creșterea vitelor și agricultură", "Regiune rurală"],
      en: ["Cattle ranching and agriculture", "Rural region"]
    }
  },
  {
    id: "maisi-cities-v2",
    type: "city",
    parent: "CU-14",
    coords: [-74.15, 20.24],
    name: { de: "Maisí", hu: "Maisí", ro: "Maisí", en: "Maisí" },
    description: {
      de: "Die östlichste Gemeinde Kubas, bekannt für ihren Leuchtturm und die einzigartige Terrassenlandschaft.",
      hu: "Kuba legkeletibb községe, világítótornyáról és egyedülálló teraszos tájáról ismert.",
      ro: "Cea mai estică municipalitate a Cubei, cunoscută pentru farul său și peisajul său unic în terase.",
      en: "The easternmost municipality of Cuba, known for its lighthouse and unique terraced landscape."
    },
    facts: {
      de: ["Punta de Maisí Leuchtturm", "Anbau von Kaffee und Kokosnüssen"],
      hu: ["Punta de Maisí világítótorony", "Kávé- és kókuszdió-termesztés"],
      ro: ["Farul Punta de Maisí", "Cultivarea cafelei și a nucilor de cocos"],
      en: ["Punta de Maisí Lighthouse", "Cultivation of coffee and coconuts"]
    }
  },
  {
    id: "yateras-cities-v2",
    type: "city",
    parent: "CU-14",
    coords: [-74.92, 20.35],
    name: { de: "Yateras", hu: "Yateras", ro: "Yateras", en: "Yateras" },
    description: {
      de: "Eine bergige Gemeinde in Guantánamo, bekannt für ihre reiche Biodiversität und Kaffeeproduktion.",
      hu: "Hegyvidéki község Guantánamóban, gazdag biodiverzitásáról és kávétermeléséről ismert.",
      ro: "O municipalitate muntoasă din Guantánamo, cunoscută pentru biodiversitatea sa bogată și producția de cafea.",
      en: "A mountainous municipality in Guantánamo, known for its rich biodiversity and coffee production."
    },
    facts: {
      de: ["Teil des Alexander-von-Humboldt-Nationalparks", "Einzigartiger 'Changüí' Musikstil"],
      hu: ["Az Alexander von Humboldt Nemzeti Park része", "Egyedülálló 'Changüí' zenei stílus"],
      ro: ["Parte a Parcului Național Alexander von Humboldt", "Stil muzical unic 'Changüí'"],
      en: ["Part of the Alexander von Humboldt National Park", "Unique 'Changüí' music style"]
    }
  }
];
