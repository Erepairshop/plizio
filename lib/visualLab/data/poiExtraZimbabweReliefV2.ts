import type { POI } from "./poi";

export const poiExtraZimbabweReliefV2: POI[] = [
  {
    id: "eastern-highlands-relief-v2",
    type: "mountain",
    parent: "ZW-MA",
    coords: [32.7, -19.0],
    name: { de: "Östliches Hochland", hu: "Keleti-felföld", ro: "Munții din Est", en: "Eastern Highlands" },
    description: {
      de: "Eine gebirgige Region an der Grenze zu Mosambik mit kühlem Klima.",
      hu: "Hegyvidéki régió a mozambiki határ közelében, hűvös éghajlattal.",
      ro: "O regiune muntoasă lângă granița cu Mozambic, cu un climat răcoros.",
      en: "A mountainous region near the Mozambique border with a cool climate."
    },
    facts: {
      de: ["Enthält Mount Inyangani", "Nebelwald-Zonen", "Viele Wasserfälle"],
      hu: ["Magában foglalja az Inyangani-hegyet", "Ködös erdőségek", "Sok vízesés"],
      ro: ["Include Muntele Inyangani", "Zone de pădure cețoasă", "Multe cascade"],
      en: ["Includes Mount Inyangani", "Mist forest zones", "Many waterfalls"]
    }
  },
  {
    id: "highveld-relief-v2",
    type: "relief",
    parent: "ZW-HA",
    coords: [30.5, -18.5],
    name: { de: "Highveld", hu: "Highveld", ro: "Highveld", en: "Highveld" },
    description: {
      de: "Das zentrale Hochplateau, das den Großteil Zimbabwes bildet.",
      hu: "A központi magasföld, amely Zimbabwe nagy részét alkotja.",
      ro: "Platoul înalt central care formează cea mai mare parte a Zimbabwe-ului.",
      en: "The central high plateau that forms the majority of Zimbabwe."
    },
    facts: {
      de: ["Durchschnittshöhe ca. 1200 Meter", "Hauptwasserscheide", "Agrarisches Kernland"],
      hu: ["Átlagos magasság kb. 1200 méter", "Fő vízválasztó", "Mezőgazdasági központ"],
      ro: ["Altitudine medie cca. 1200 metri", "Principalul bazin hidrografic", "Inima agricolă"],
      en: ["Average height approx. 1200 meters", "Main watershed", "Agricultural heartland"]
    }
  },
  {
    id: "lowveld-relief-v2",
    type: "relief",
    parent: "ZW-MV",
    coords: [31.5, -21.0],
    name: { de: "Lowveld", hu: "Lowveld", ro: "Lowveld", en: "Lowveld" },
    description: {
      de: "Die tiefer gelegenen Regionen im Südosten des Landes.",
      hu: "Az ország délkeleti részén található alacsonyabban fekvő régiók.",
      ro: "Regiunile mai joase din sud-estul țării.",
      en: "The lower-lying regions in the south-east of the country."
    },
    facts: {
      de: ["Heißes und trockenes Klima", "Gona-re-Zhou Nationalpark", "Zuckerrohranbau"],
      hu: ["Forró és száraz éghajlat", "Gona-re-Zhou Nemzeti Park", "Cukornádtermesztés"],
      ro: ["Climat cald și uscat", "Parcul Național Gona-re-Zhou", "Cultivarea trestiei de zahăr"],
      en: ["Hot and dry climate", "Gona-re-Zhou National Park", "Sugarcane farming"]
    }
  },
  {
    id: "zambezi-escarpment-relief-v2",
    type: "mountain",
    parent: "ZW-MA",
    coords: [29.5, -16.0],
    name: { de: "Sambesi-Steilstufe", hu: "Zambézi-lépcső", ro: "Escarpamentul Zambezi", en: "Zambezi Escarpment" },
    description: {
      de: "Eine markante Geländestufe nördlich des Hochplateaus.",
      hu: "Jellegzetes tereplépcső a magasföldtől északra.",
      ro: "O treaptă de relief distinctivă la nord de platou.",
      en: "A striking escarpment north of the high plateau."
    },
    facts: {
      de: ["Steile Hänge", "Wildes Gelände", "Grenze zum Sambesi-Tal"],
      hu: ["Meredek lejtők", "Vad terep", "Határ a Zambézi-völggyel"],
      ro: ["Pante abrupte", "Teren sălbatic", "Granița cu valea Zambezi"],
      en: ["Steep slopes", "Wild terrain", "Border with the Zambezi Valley"]
    }
  },
  {
    id: "chimanimani-mountains-relief-v2",
    type: "mountain",
    parent: "ZW-MA",
    coords: [32.9, -19.8],
    name: { de: "Chimanimani-Berge", hu: "Chimanimani-hegység", ro: "Munții Chimanimani", en: "Chimanimani Mountains" },
    description: {
      de: "Eine spektakuläre Bergkette mit quarzitischen Felsformationen.",
      hu: "Látványos hegylánc kvarcitos sziklaformációkkal.",
      ro: "Un lanț muntos spectaculos cu formațiuni stâncoase de cuarțit.",
      en: "A spectacular mountain range with quartzite rock formations."
    },
    facts: {
      de: ["Grenzgebirge", "Nationalpark", "Beliebt bei Bergsteigern"],
      hu: ["Határhegység", "Nemzeti park", "Népszerű hegymászók körében"],
      ro: ["Munți de frontieră", "Parc național", "Popular printre alpiniști"],
      en: ["Border mountains", "National park", "Popular with climbers"]
    }
  },
  {
    id: "nyanga-mountains-relief-v2",
    type: "mountain",
    parent: "ZW-MA",
    coords: [32.7, -18.2],
    name: { de: "Nyanga-Berge", hu: "Nyanga-hegység", ro: "Munții Nyanga", en: "Nyanga Mountains" },
    description: {
      de: "Eine zerklüftete Berglandschaft im Osten.",
      hu: "Tagolt hegyvidéki táj keleten.",
      ro: "Un peisaj muntos fragmentat în est.",
      en: "A rugged mountain landscape in the east."
    },
    facts: {
      de: ["Höchster Punkt des Landes", "Kühles Hochgebirgsklima", "Wasserreiche Gebiete"],
      hu: ["Az ország legmagasabb pontja", "Hűvös magashegyi klíma", "Vízben gazdag területek"],
      ro: ["Cel mai înalt punct al țării", "Climat montan răcoros", "Zone bogate în apă"],
      en: ["Highest point in the country", "Cool mountain climate", "Water-rich areas"]
    }
  },
  {
    id: "vumba-mountains-relief-v2",
    type: "mountain",
    parent: "ZW-MA",
    coords: [32.7, -19.1],
    name: { de: "Vumba-Berge", hu: "Vumba-hegység", ro: "Munții Vumba", en: "Vumba Mountains" },
    description: {
      de: "Bergregion bekannt für ihre üppige Vegetation und Nebelwälder.",
      hu: "Hegyvidéki régió, amely buja növényzetéről és köderdőiről ismert.",
      ro: "Regiune muntoasă cunoscută pentru vegetația sa luxuriantă și pădurile cețoase.",
      en: "Mountain region known for its lush vegetation and mist forests."
    },
    facts: {
      de: ["Botanische Artenvielfalt", "Kühles Klima", "Nebelreiche Region"],
      hu: ["Botanikai fajgazdagság", "Hűvös éghajlat", "Ködös régió"],
      ro: ["Biodiversitate botanică", "Climat răcoros", "Regiune cețoasă"],
      en: ["Botanical biodiversity", "Cool climate", "Misty region"]
    }
  },
  {
    id: "matobo-hills-relief-v2",
    type: "mountain",
    parent: "ZW-MN",
    coords: [28.5, -20.5],
    name: { de: "Matobo-Berge", hu: "Matobo-hegyek", ro: "Munții Matobo", en: "Matobo Hills" },
    description: {
      de: "Einzigartige Hügellandschaft geprägt von riesigen Granitblöcken.",
      hu: "Egyedi dombvidék, amelyet hatalmas gránittömbök jellemeznek.",
      ro: "Peisaj deluros unic, marcat de blocuri uriașe de granit.",
      en: "Unique hilly landscape characterized by huge granite blocks."
    },
    facts: {
      de: ["UNESCO-Welterbe", "Felsformationen", "Kulturhistorische Stätten"],
      hu: ["Világörökség", "Sziklaformációk", "Kulturális történelmi helyszínek"],
      ro: ["Patrimoniu Mondial UNESCO", "Formațiuni stâncoase", "Locuri cultural-istorice"],
      en: ["UNESCO World Heritage site", "Rock formations", "Cultural historical sites"]
    }
  },
  {
    id: "zambezi-valley-relief-v2",
    type: "relief",
    parent: "ZW-MA",
    coords: [29.5, -16.2],
    name: { de: "Sambesi-Tal", hu: "Zambézi-völgy", ro: "Valea Zambezi", en: "Zambezi Valley" },
    description: {
      de: "Das tiefe Tal entlang des Sambesi-Flusses im Norden.",
      hu: "A mély völgy a Zambézi-folyó mentén, északon.",
      ro: "Valea adâncă de-a lungul râului Zambezi în nord.",
      en: "The deep valley along the Zambezi River in the north."
    },
    facts: {
      de: ["Heißes Tiefland", "Manapools Nationalpark", "Wichtiges Habitat"],
      hu: ["Forró alföld", "Manapools Nemzeti Park", "Fontos élőhely"],
      ro: ["Câmpie fierbinte", "Parcul Național Manapools", "Habitat important"],
      en: ["Hot lowland", "Mana Pools National Park", "Important habitat"]
    }
  },
  {
    id: "lowveld-plains-relief-v2",
    type: "relief",
    parent: "ZW-MV",
    coords: [31.8, -21.5],
    name: { de: "Lowveld-Ebene", hu: "Lowveld-síkság", ro: "Câmpia Lowveld", en: "Lowveld Plains" },
    description: {
      de: "Die ausgedehnten Ebenen im südöstlichen Zimbabwe.",
      hu: "A kiterjedt síkságok Zimbabwe délkeleti részén.",
      ro: "Câmpiile întinse din sud-estul Zimbabwe-ului.",
      en: "The extensive plains in south-eastern Zimbabwe."
    },
    facts: {
      de: ["Trockenwald", "Große Wildreservate", "Niedriges Relief"],
      hu: ["Száraz erdő", "Nagy vadvédelmi területek", "Alacsony domborzat"],
      ro: ["Pădure uscată", "Rezervații mari de viață sălbatică", "Relief jos"],
      en: ["Dry forest", "Large wildlife reserves", "Low relief"]
    }
  },
  {
    id: "bulawayo-plateau-relief-v2",
    type: "relief",
    parent: "ZW-MN",
    coords: [28.6, -20.1],
    name: { de: "Bulawayo-Plateau", hu: "Bulawayo-fennsík", ro: "Platoul Bulawayo", en: "Bulawayo Plateau" },
    description: {
      de: "Eine erhöhte Region um Bulawayo im Westen.",
      hu: "Egy emelkedett régió Bulawayo körül, nyugaton.",
      ro: "O regiune ridicată în jurul orașului Bulawayo în vest.",
      en: "An elevated region around Bulawayo in the west."
    },
    facts: {
      de: ["Hügelig", "Teil des Highveld", "Wichtiges Zentrum"],
      hu: ["Dombvidék", "A Highveld része", "Fontos központ"],
      ro: ["Deluros", "Parte a Highveld-ului", "Centru important"],
      en: ["Hilly", "Part of the Highveld", "Important hub"]
    }
  },
  {
    id: "gwayi-valley-relief-v2",
    type: "relief",
    parent: "ZW-MN",
    coords: [27.2, -18.5],
    name: { de: "Gwayi-Tal", hu: "Gwayi-völgy", ro: "Valea Gwayi", en: "Gwayi Valley" },
    description: {
      de: "Eine Flussniederung im westlichen Zimbabwe.",
      hu: "Folyómenti alföld Zimbabwe nyugati részén.",
      ro: "O câmpie aluvionară în vestul Zimbabwe-ului.",
      en: "A river lowlands in western Zimbabwe."
    },
    facts: {
      de: ["Flachland", "Wichtig für Hwange", "Sedimentboden"],
      hu: ["Síkság", "Fontos Hwange számára", "Üledékes talaj"],
      ro: ["Câmpie", "Important pentru Hwange", "Sol sedimentar"],
      en: ["Flatlands", "Important for Hwange", "Sedimentary soil"]
    }
  },
  {
    id: "mazowe-valley-relief-v2",
    type: "relief",
    parent: "ZW-MC",
    coords: [31.5, -17.0],
    name: { de: "Mazowe-Tal", hu: "Mazowe-völgy", ro: "Valea Mazowe", en: "Mazowe Valley" },
    description: {
      de: "Ein fruchtbares Flusstal nördlich von Harare.",
      hu: "Termékeny folyóvölgy Hararetől északra.",
      ro: "O vale fertilă a râului la nord de Harare.",
      en: "A fertile river valley north of Harare."
    },
    facts: {
      de: ["Agrarregion", "Sanfte Hügel", "Wichtig für den Anbau"],
      hu: ["Mezőgazdasági régió", "Lankás dombok", "Fontos a termesztéshez"],
      ro: ["Regiune agricolă", "Dealuri line", "Important pentru cultivare"],
      en: ["Agricultural region", "Rolling hills", "Important for farming"]
    }
  },
  {
    id: "sanyati-valley-relief-v2",
    type: "relief",
    parent: "ZW-MN",
    coords: [29.0, -17.5],
    name: { de: "Sanyati-Tal", hu: "Sanyati-völgy", ro: "Valea Sanyati", en: "Sanyati Valley" },
    description: {
      de: "Ein Tal in Richtung Kariba-Stausee.",
      hu: "Völgy a Kariba-tó irányában.",
      ro: "O vale spre lacul de acumulare Kariba.",
      en: "A valley towards Lake Kariba."
    },
    facts: {
      de: ["Zerklüftetes Gelände", "Starke Erosion", "Flusssystem"],
      hu: ["Tagolt terep", "Erős erózió", "Folyórendszer"],
      ro: ["Teren fragmentat", "Eroziune puternică", "Sistem fluvial"],
      en: ["Rugged terrain", "Strong erosion", "River system"]
    }
  },
  {
    id: "save-plains-relief-v2",
    type: "relief",
    parent: "ZW-MA",
    coords: [32.4, -20.8],
    name: { de: "Save-Ebene", hu: "Save-síkság", ro: "Câmpia Save", en: "Save Plains" },
    description: {
      de: "Flache Landschaft entlang des Save-Flusses.",
      hu: "Síkság a Save-folyó mentén.",
      ro: "Peisaj plat de-a lungul râului Save.",
      en: "Flat landscape along the Save River."
    },
    facts: {
      de: ["Große landwirtschaftliche Flächen", "Flussniederung", "Trockengebiet"],
      hu: ["Nagy mezőgazdasági területek", "Folyómenti síkság", "Száraz terület"],
      ro: ["Suprafețe agricole mari", "Câmpie aluvionară", "Regiune aridă"],
      en: ["Large agricultural areas", "River lowlands", "Dry region"]
    }
  },
  {
    id: "manicaland-highlands-relief-v2",
    type: "mountain",
    parent: "ZW-MA",
    coords: [32.5, -19.0],
    name: { de: "Manicaland-Hochland", hu: "Manicaland-felföld", ro: "Platoul Manicaland", en: "Manicaland Highlands" },
    description: {
      de: "Bergige Provinz im Osten Zimbabwes.",
      hu: "Hegyvidéki tartomány Zimbabwe keleti részén.",
      ro: "Provincie muntoasă în estul Zimbabwe-ului.",
      en: "Mountainous province in the east of Zimbabwe."
    },
    facts: {
      de: ["Sehr grün", "Nebel", "Gebirgskette"],
      hu: ["Nagyon zöld", "Köd", "Hegylánc"],
      ro: ["Foarte verde", "Ceață", "Lanț muntos"],
      en: ["Very green", "Mist", "Mountain range"]
    }
  },
  {
    id: "midlands-plateau-relief-v2",
    type: "relief",
    parent: "ZW-MI",
    coords: [29.5, -19.0],
    name: { de: "Midlands-Plateau", hu: "Midlands-fennsík", ro: "Platoul Midlands", en: "Midlands Plateau" },
    description: {
      de: "Die zentral gelegene Hochebene zwischen Harare und Bulawayo.",
      hu: "A központi elhelyezkedésű fennsík Harare és Bulawayo között.",
      ro: "Platoul situat central între Harare și Bulawayo.",
      en: "The centrally located plateau between Harare and Bulawayo."
    },
    facts: {
      de: ["Mäßige Höhe", "Bergbau", "Agrarwirtschaft"],
      hu: ["Mérsékelt magasság", "Bányászat", "Mezőgazdaság"],
      ro: ["Altitudine moderată", "Minerit", "Agricultură"],
      en: ["Moderate height", "Mining", "Agriculture"]
    }
  },
  {
    id: "limpopo-basin-relief-v2",
    type: "relief",
    parent: "ZW-MN",
    coords: [30.0, -22.0],
    name: { de: "Limpopo-Becken", hu: "Limpopo-medence", ro: "Bazinul Limpopo", en: "Limpopo Basin" },
    description: {
      de: "Das Einzugsgebiet des Limpopo im äußersten Süden.",
      hu: "A Limpopo vízgyűjtő területe a legdélebbi részen.",
      ro: "Bazinul hidrografic al Limpopo-ului în extremul sud.",
      en: "The drainage basin of the Limpopo in the far south."
    },
    facts: {
      de: ["Tiefland", "Saisonaler Zufluss", "Sehr trocken"],
      hu: ["Alföld", "Szezonális mellékfolyó", "Nagyon száraz"],
      ro: ["Câmpie", "Afluent sezonier", "Foarte arid"],
      en: ["Lowland", "Seasonal tributary", "Very dry"]
    }
  },
  {
    id: "mashonaland-plateau-relief-v2",
    type: "relief",
    parent: "ZW-MC",
    coords: [31.5, -17.5],
    name: { de: "Mashonaland-Hochland", hu: "Mashonaland-felföld", ro: "Platoul Mashonaland", en: "Mashonaland Plateau" },
    description: {
      de: "Das nördliche Hochplateau um Harare.",
      hu: "Az északi magasföld Harare körül.",
      ro: "Platoul înalt nordic din jurul orașului Harare.",
      en: "The northern high plateau around Harare."
    },
    facts: {
      de: ["Fruchtbar", "Wichtige Agrarregion", "Hügelig"],
      hu: ["Termékeny", "Fontos agrárvidék", "Dombos"],
      ro: ["Fertil", "Regiune agricolă importantă", "Deluros"],
      en: ["Fertile", "Important agricultural region", "Hilly"]
    }
  },
  {
    id: "chizarira-hills-relief-v2",
    type: "mountain",
    parent: "ZW-MN",
    coords: [27.8, -17.8],
    name: { de: "Chizarira-Berge", hu: "Chizarira-hegyek", ro: "Munții Chizarira", en: "Chizarira Hills" },
    description: {
      de: "Eine zerklüftete Gebirgsregion im Nordwesten.",
      hu: "Tagolt hegyvidéki régió északnyugaton.",
      ro: "Regiune muntoasă fragmentată în nord-vest.",
      en: "A rugged mountain region in the north-west."
    },
    facts: {
      de: ["Steile Schluchten", "Abgelegen", "Waldreich"],
      hu: ["Meredek szakadékok", "Távoli", "Erdős"],
      ro: ["Defilee abrupte", "Izolat", "Bogată în păduri"],
      en: ["Steep gorges", "Remote", "Forested"]
    }
  },
  {
    id: "tuli-basin-relief-v2",
    type: "relief",
    parent: "ZW-MN",
    coords: [29.6, -21.9],
    name: { de: "Tuli-Becken", hu: "Tuli-medence", ro: "Bazinul Tuli", en: "Tuli Basin" },
    description: {
      de: "Ein trockenes Becken im Südwesten Zimbabwes.",
      hu: "Száraz medence Zimbabwe délnyugati részén.",
      ro: "Un bazin arid în sud-vestul Zimbabwe-ului.",
      en: "An arid basin in south-west Zimbabwe."
    },
    facts: {
      de: ["Trockenflussbetten", "Halbwüste", "Sandstein"],
      hu: ["Száraz folyómedrek", "Félsivatag", "Homokkő"],
      ro: ["Albii de râu uscate", "Semideșert", "Gresie"],
      en: ["Dry riverbeds", "Semi-desert", "Sandstone"]
    }
  },
  {
    id: "mzingwane-valley-relief-v2",
    type: "relief",
    parent: "ZW-MN",
    coords: [30.1, -21.8],
    name: { de: "Mzingwane-Tal", hu: "Mzingwane-völgy", ro: "Valea Mzingwane", en: "Mzingwane Valley" },
    description: {
      de: "Ein Flusstal im südlichen Matabeleland.",
      hu: "Folyóvölgy a déli Matabelelandban.",
      ro: "O vale a râului în Matabelelandul de sud.",
      en: "A river valley in southern Matabeleland."
    },
    facts: {
      de: ["Trockenregion", "Wichtig für die Landwirtschaft", "Saisonaler Fluss"],
      hu: ["Száraz régió", "Fontos a mezőgazdaságnak", "Szezonális folyó"],
      ro: ["Regiune aridă", "Important pentru agricultură", "Râu sezonier"],
      en: ["Dry region", "Important for agriculture", "Seasonal river"]
    }
  },
  {
    id: "nyanga-valley-relief-v2",
    type: "relief",
    parent: "ZW-MA",
    coords: [32.8, -18.2],
    name: { de: "Nyanga-Tal", hu: "Nyanga-völgy", ro: "Valea Nyanga", en: "Nyanga Valley" },
    description: {
      de: "Ein Tal in den östlichen Highlands.",
      hu: "Völgy a keleti felföldön.",
      ro: "O vale în munții din est.",
      en: "A valley in the eastern highlands."
    },
    facts: {
      de: ["Kühl", "Wiesen", "Flüsse"],
      hu: ["Hűvös", "Rétek", "Folyók"],
      ro: ["Răcoros", "Pajiști", "Râuri"],
      en: ["Cool", "Meadows", "Rivers"]
    }
  },
  {
    id: "buzi-basin-relief-v2",
    type: "relief",
    parent: "ZW-MA",
    coords: [33.0, -20.0],
    name: { de: "Buzi-Becken", hu: "Buzi-medence", ro: "Bazinul Buzi", en: "Buzi Basin" },
    description: {
      de: "Ein Becken im östlichen Grenzgebiet.",
      hu: "Medence a keleti határvidéken.",
      ro: "Un bazin în regiunea de frontieră din est.",
      en: "A basin in the eastern border region."
    },
    facts: {
      de: ["Bergig", "Bewaldet", "Grenzlage"],
      hu: ["Hegyvidéki", "Erdős", "Határ menti"],
      ro: ["Muntos", "Împădurit", "Poziție de frontieră"],
      en: ["Mountainous", "Forested", "Border location"]
    }
  },
  {
    id: "nuanetsi-basin-relief-v2",
    type: "relief",
    parent: "ZW-MV",
    coords: [31.5, -22.0],
    name: { de: "Nuanetsi-Becken", hu: "Nuanetsi-medence", ro: "Bazinul Nuanetsi", en: "Nuanetsi Basin" },
    description: {
      de: "Ein Becken im südlichen Teil Zimbabwes.",
      hu: "Medence Zimbabwe déli részén.",
      ro: "Un bazin în partea de sud a Zimbabwe-ului.",
      en: "A basin in the southern part of Zimbabwe."
    },
    facts: {
      de: ["Trocken", "Buschland", "Wichtig für Reservate"],
      hu: ["Száraz", "Bozótos", "Fontos rezervátumoknak"],
      ro: ["Arid", "Tufișuri", "Important pentru rezervații"],
      en: ["Dry", "Bushland", "Important for reserves"]
    }
  }
];
