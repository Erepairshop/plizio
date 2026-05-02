import type { POI } from "./poi";

export const poiExtraKenyaNatureV2: POI[] = [
  {
    id: "lake-turkana-nature-v2",
    type: "lake",
    parent: "KE-30",
    coords: [36.0333, 3.5333],
    name: { de: "Turkana-See", hu: "Turkana-tó", ro: "Lacul Turkana", en: "Lake Turkana" },
    description: { de: "Der größte permanente Wüstensee der Welt.", hu: "A világ legnagyobb állandó sivatagi tava.", ro: "Cel mai mare lac deșertic permanent din lume.", en: "The world's largest permanent desert lake." },
    facts: {
      de: ["UNESCO-Welterbe", "Alkalihaltiges Wasser"],
      hu: ["UNESCO világörökség", "Lúgos víz"],
      ro: ["Patrimoniul Mondial UNESCO", "Apă alcalină"],
      en: ["UNESCO World Heritage site", "Alkaline water"]
    }
  },
  {
    id: "mount-kenya-nature-v2",
    type: "mountain",
    parent: "KE-20",
    coords: [37.3083, -0.1522],
    name: { de: "Mount Kenya", hu: "Kenya-hegy", ro: "Muntele Kenya", en: "Mount Kenya" },
    description: { de: "Der zweithöchste Berg Afrikas.", hu: "Afrika második legmagasabb hegye.", ro: "Al doilea cel mai înalt munte din Africa.", en: "The second highest mountain in Africa." },
    facts: {
      de: ["Ehemaliger Vulkan", "Gletscherschwund"],
      hu: ["Volt vulkán", "Gleccserolvadás"],
      ro: ["Fost vulcan", "Retragerea ghețarilor"],
      en: ["Former volcano", "Glacial retreat"]
    }
  },
  {
    id: "lake-victoria-nature-v2",
    type: "lake",
    parent: "KE-43",
    coords: [33.0, -1.0],
    name: { de: "Viktoriasee", hu: "Viktória-tó", ro: "Lacul Victoria", en: "Lake Victoria" },
    description: { de: "Der größte See Afrikas.", hu: "Afrika legnagyobb tava.", ro: "Cel mai mare lac din Africa.", en: "The largest lake in Africa." },
    facts: {
      de: ["Nil-Quelle", "Größter tropischer See"],
      hu: ["Nílus forrása", "Legnagyobb trópusi tó"],
      ro: ["Sursa Nilului", "Cel mai mare lac tropical"],
      en: ["Source of the Nile", "Largest tropical lake"]
    }
  },
  {
    id: "tsavo-forest-nature-v2",
    type: "forest",
    parent: "KE-31",
    coords: [38.5, -3.0],
    name: { de: "Tsavo-Waldgebiet", hu: "Tsavo-erdő", ro: "Pădurea Tsavo", en: "Tsavo Forest" },
    description: { de: "Ein bedeutendes Wald- und Savannengebiet.", hu: "Jelentős erdő- és szavannaterület.", ro: "O zonă forestieră și de savană importantă.", en: "An important forest and savanna area." },
    facts: {
      de: ["Großes Wildtierreservat", "Rote Erde"],
      hu: ["Nagy vadvédelmi terület", "Vörös talaj"],
      ro: ["Rezervație naturală mare", "Sol roșu"],
      en: ["Large wildlife reserve", "Red soil"]
    }
  },
  {
    id: "athiriver-nature-v2",
    type: "river",
    parent: "KE-30",
    coords: [39.5, -2.5],
    name: { de: "Athi-Fluss", hu: "Athi-folyó", ro: "Râul Athi", en: "Athi River" },
    description: { de: "Ein bedeutender Fluss in Kenia.", hu: "Kenya jelentős folyója.", ro: "Un râu important în Kenya.", en: "A major river in Kenya." },
    facts: {
      de: ["Mündet in den Indischen Ozean", "Wichtig für die Landwirtschaft"],
      hu: ["Az Indiai-óceánba ömlik", "Fontos a mezőgazdaságnak"],
      ro: ["Se varsă în Oceanul Indian", "Important pentru agricultură"],
      en: ["Flows into the Indian Ocean", "Vital for agriculture"]
    }
  },
  {
    id: "tana-river-nature-v2",
    type: "river",
    parent: "KE-26",
    coords: [40.5, -2.5],
    name: { de: "Tana-Fluss", hu: "Tana-folyó", ro: "Râul Tana", en: "Tana River" },
    description: { de: "Der längste Fluss Kenias.", hu: "Kenya leghosszabb folyója.", ro: "Cel mai lung râu din Kenya.", en: "The longest river in Kenya." },
    facts: {
      de: ["Wichtig für Wasserkraft", "Erstreckt sich über 800 km"],
      hu: ["Fontos a vízerőműveknek", "Több mint 800 km hosszú"],
      ro: ["Important pentru hidroenergie", "Se întinde pe 800 km"],
      en: ["Key for hydropower", "Spans over 800 km"]
    }
  },
  {
    id: "lake-nakuru-nature-v2",
    type: "lake",
    parent: "KE-26",
    coords: [36.0833, -0.3667],
    name: { de: "Nakuru-See", hu: "Nakuru-tó", ro: "Lacul Nakuru", en: "Lake Nakuru" },
    description: { de: "Ein sodahaltiger See, bekannt für Flamingos.", hu: "Szódás tó, híres a flamingókról.", ro: "Un lac alcalin, cunoscut pentru flamingo.", en: "A soda lake famous for flamingos." },
    facts: {
      de: ["UNESCO-Welterbe", "Alkalische Lebensumwelt"],
      hu: ["UNESCO világörökség", "Lúgos élőhely"],
      ro: ["Patrimoniul Mondial UNESCO", "Habitat alcalin"],
      en: ["UNESCO World Heritage site", "Alkaline habitat"]
    }
  },
  {
    id: "lake-bogoria-nature-v2",
    type: "lake",
    parent: "KE-30",
    coords: [36.1, 0.2333],
    name: { de: "Bogoria-See", hu: "Bogoria-tó", ro: "Lacul Bogoria", en: "Lake Bogoria" },
    description: { de: "Ein vulkanisch aktiver Sodasee.", hu: "Vulkánilag aktív szódás tó.", ro: "Un lac alcalin activ vulcanic.", en: "A volcanically active soda lake." },
    facts: {
      de: ["Geysire", "Heiße Quellen"],
      hu: ["Gejzírek", "Hévízforrások"],
      ro: ["Gheizere", "Izvoare termale"],
      en: ["Geysers", "Hot springs"]
    }
  },
  {
    id: "cherangani-hills-nature-v2",
    type: "mountain",
    parent: "KE-26",
    coords: [35.45, 1.25],
    name: { de: "Cherangani-Hügel", hu: "Cherangani-dombság", ro: "Dealurile Cherangani", en: "Cherangani Hills" },
    description: { de: "Eine Bergkette im westlichen Kenia.", hu: "Hegyvonulat Nyugat-Kenyában.", ro: "Un lanț muntos în vestul Keniei.", en: "A mountain range in western Kenya." },
    facts: {
      de: ["Einzugsgebiet für Flüsse", "Hochland"],
      hu: ["Folyók vízgyűjtője", "Felföld"],
      ro: ["Bazin hidrografic", "Podiș"],
      en: ["Catchment area for rivers", "Highland"]
    }
  },
  {
    id: "laikipia-plateau-nature-v2",
    type: "forest",
    parent: "KE-20",
    coords: [37.0, 0.25],
    name: { de: "Laikipia-Plateau", hu: "Laikipia-felföld", ro: "Platoul Laikipia", en: "Laikipia Plateau" },
    description: { de: "Ein bedeutendes Hochlandgebiet.", hu: "Fontos felföldi terület.", ro: "O zonă de podiș importantă.", en: "A significant highland area." },
    facts: {
      de: ["Wildtierkorridor", "Savannenlandschaft"],
      hu: ["Vadvilági folyosó", "Szavannatáj"],
      ro: ["Coridor pentru viața sălbatică", "Peisaj de savană"],
      en: ["Wildlife corridor", "Savanna landscape"]
    }
  },
  {
    id: "lake-naivasha-nature-v2",
    type: "lake",
    parent: "KE-26",
    coords: [36.3667, -0.7833],
    name: { de: "Naivasha-See", hu: "Naivasha-tó", ro: "Lacul Naivasha", en: "Lake Naivasha" },
    description: { de: "Ein Süßwassersee im Rift Valley.", hu: "Édesvízi tó a Rift-völgyben.", ro: "Un lac cu apă dulce în Rift Valley.", en: "A freshwater lake in the Rift Valley." },
    facts: {
      de: ["Vogelparadies", "Hoch gelegen"],
      hu: ["Madárparadicsom", "Magasan fekszik"],
      ro: ["Paradisul păsărilor", "Situat la mare altitudine"],
      en: ["Bird paradise", "High altitude"]
    }
  },
  {
    id: "aberdare-range-nature-v2",
    type: "mountain",
    parent: "KE-20",
    coords: [36.7, -0.4],
    name: { de: "Aberdare-Gebirge", hu: "Aberdare-hegység", ro: "Munții Aberdare", en: "Aberdare Range" },
    description: { de: "Eine vulkanische Gebirgskette.", hu: "Vulkanikus hegylánc.", ro: "Un lanț muntos vulcanic.", en: "A volcanic mountain range." },
    facts: {
      de: ["Dichter Regenwald", "Kühles Klima"],
      hu: ["Sűrű esőerdő", "Hűvös klíma"],
      ro: ["Pădure tropicală densă", "Climă răcoroasă"],
      en: ["Dense rainforest", "Cool climate"]
    }
  },
  {
    id: "lake-magadi-nature-v2",
    type: "lake",
    parent: "KE-30",
    coords: [36.2667, -1.8833],
    name: { de: "Magadi-See", hu: "Magadi-tó", ro: "Lacul Magadi", en: "Lake Magadi" },
    description: { de: "Ein extremer Sodasee.", hu: "Extrém szódás tó.", ro: "Un lac alcalin extrem.", en: "An extreme soda lake." },
    facts: {
      de: ["Trona-Vorkommen", "Sehr salzhaltig"],
      hu: ["Trona-lelőhely", "Nagyon sós"],
      ro: ["Zăcăminte de trona", "Foarte sărat"],
      en: ["Trona deposits", "Very saline"]
    }
  },
  {
    id: "mara-river-nature-v2",
    type: "river",
    parent: "KE-33",
    coords: [34.0, -1.5],
    name: { de: "Mara-Fluss", hu: "Mara-folyó", ro: "Râul Mara", en: "Mara River" },
    description: { de: "Berühmt für die Tierwanderung.", hu: "Híres az állatok vándorlásáról.", ro: "Faimos pentru migrația animalelor.", en: "Famous for the animal migration." },
    facts: {
      de: ["Überquert durch Zebras", "Lebensader der Serengeti"],
      hu: ["Zebrák keresztezik", "A Serengeti éltető ere"],
      ro: ["Traversat de zebre", "Sursa de viață a Serengetei"],
      en: ["Crossed by zebras", "Lifeblood of the Serengeti"]
    }
  },
  {
    id: "lake-elementaita-nature-v2",
    type: "lake",
    parent: "KE-26",
    coords: [36.25, -0.2833],
    name: { de: "Elementaita-See", hu: "Elementaita-tó", ro: "Lacul Elementaita", en: "Lake Elementaita" },
    description: { de: "Ein sodahaltiger Kratersee.", hu: "Szódás krátertó.", ro: "Un lac crater alcalin.", en: "A soda crater lake." },
    facts: {
      de: ["UNESCO-Welterbe", "Flamingo-Lebensraum"],
      hu: ["UNESCO világörökség", "Flamingók élőhelye"],
      ro: ["Patrimoniul Mondial UNESCO", "Habitat de flamingo"],
      en: ["UNESCO World Heritage site", "Flamingo habitat"]
    }
  },
  {
    id: "elgon-mountain-nature-v2",
    type: "mountain",
    parent: "KE-26",
    coords: [34.55, 1.1],
    name: { de: "Mount Elgon", hu: "Elgon-hegy", ro: "Muntele Elgon", en: "Mount Elgon" },
    description: { de: "Ein riesiger erloschener Schildvulkan.", hu: "Hatalmas kialudt pajzsvulkán.", ro: "Un vulcan scut uriaș stins.", en: "A huge extinct shield volcano." },
    facts: {
      de: ["Größte Caldera der Welt", "Grenzberg zu Uganda"],
      hu: ["A világ legnagyobb kalderája", "Határhegy Ugandával"],
      ro: ["Cea mai mare calderă din lume", "Munte de frontieră cu Uganda"],
      en: ["World's largest caldera", "Border mountain with Uganda"]
    }
  },
  {
    id: "yala-river-nature-v2",
    type: "river",
    parent: "KE-43",
    coords: [34.0, 0.0],
    name: { de: "Yala-Fluss", hu: "Yala-folyó", ro: "Râul Yala", en: "Yala River" },
    description: { de: "Mündet in den Viktoriasee.", hu: "A Viktória-tóba ömlik.", ro: "Se varsă în Lacul Victoria.", en: "Flows into Lake Victoria." },
    facts: {
      de: ["Wichtiges Feuchtgebiet", "Westliches Hochland"],
      hu: ["Fontos vizes élőhely", "Nyugati felföld"],
      ro: ["Zonă umedă importantă", "Podișul de vest"],
      en: ["Important wetland", "Western highlands"]
    }
  },
  {
    id: "lake-ol-bolossat-nature-v2",
    type: "lake",
    parent: "KE-20",
    coords: [36.4, -0.2],
    name: { de: "Ol-Bolossat-See", hu: "Ol-Bolossat-tó", ro: "Lacul Ol-Bolossat", en: "Lake Ol Bolossat" },
    description: { de: "Der einzige See in der Zentralprovinz.", hu: "Az egyetlen tó a központi tartományban.", ro: "Singurul lac din provincia centrală.", en: "The only lake in the Central Province." },
    facts: {
      de: ["Wichtig für Vögel", "Süßwasser"],
      hu: ["Fontos a madaraknak", "Édesvíz"],
      ro: ["Important pentru păsări", "Apă dulce"],
      en: ["Important for birds", "Freshwater"]
    }
  },
  {
    id: "nzoia-river-nature-v2",
    type: "river",
    parent: "KE-26",
    coords: [34.0, 0.2],
    name: { de: "Nzoia-Fluss", hu: "Nzoia-folyó", ro: "Râul Nzoia", en: "Nzoia River" },
    description: { de: "Ein bedeutender Fluss im Westen.", hu: "Jelentős folyó nyugaton.", ro: "Un râu important în vest.", en: "A major river in the west." },
    facts: {
      de: ["Landwirtschaftliche Nutzung", "Quellen im Cherangani-Gebirge"],
      hu: ["Mezőgazdasági felhasználás", "Források a Cherangani-hegységben"],
      ro: ["Utilizare agricolă", "Izvoare în Munții Cherangani"],
      en: ["Agricultural use", "Sources in Cherangani Hills"]
    }
  },
  {
    id: "lake-baringo-nature-v2",
    type: "lake",
    parent: "KE-30",
    coords: [36.0, 0.6],
    name: { de: "Baringo-See", hu: "Baringo-tó", ro: "Lacul Baringo", en: "Lake Baringo" },
    description: { de: "Ein Süßwassersee im Rift Valley.", hu: "Édesvízi tó a Rift-völgyben.", ro: "Un lac cu apă dulce în Rift Valley.", en: "A freshwater lake in the Rift Valley." },
    facts: {
      de: ["Vogelartenvielfalt", "Wichtiges Schutzgebiet"],
      hu: ["Madárfajok sokfélesége", "Fontos védett terület"],
      ro: ["Diversitatea speciilor de păsări", "Zonă protejată importantă"],
      en: ["Diverse bird species", "Important protected area"]
    }
  },
  {
    id: "mt-kulal-nature-v2",
    type: "mountain",
    parent: "KE-25",
    coords: [36.9, 2.7],
    name: { de: "Mount Kulal", hu: "Kulal-hegy", ro: "Muntele Kulal", en: "Mount Kulal" },
    description: { de: "Ein Biosphärenreservat im Norden.", hu: "Bioszféra-rezervátum északon.", ro: "Rezervație a biosferei în nord.", en: "A biosphere reserve in the north." },
    facts: {
      de: ["Ehemaliger Vulkan", "Wüstenklima"],
      hu: ["Volt vulkán", "Sivatagi klíma"],
      ro: ["Fost vulcan", "Climă deșertică"],
      en: ["Former volcano", "Desert climate"]
    }
  },
  {
    id: "lake-kamnarok-nature-v2",
    type: "lake",
    parent: "KE-30",
    coords: [35.8, 0.6],
    name: { de: "Kamnarok-See", hu: "Kamnarok-tó", ro: "Lacul Kamnarok", en: "Lake Kamnarok" },
    description: { de: "Ein See im Kerio-Tal.", hu: "Tó a Kerio-völgyben.", ro: "Un lac în Valea Kerio.", en: "A lake in the Kerio Valley." },
    facts: {
      de: ["Krokodilhabitat", "Saisonaler Wasserstand"],
      hu: ["Krokodil-élőhely", "Szezonális vízszint"],
      ro: ["Habitat de crocodili", "Nivel sezonier al apei"],
      en: ["Crocodile habitat", "Seasonal water level"]
    }
  },
  {
    id: "mt-longonot-nature-v2",
    type: "mountain",
    parent: "KE-26",
    coords: [36.45, -0.9],
    name: { de: "Mount Longonot", hu: "Longonot-hegy", ro: "Muntele Longonot", en: "Mount Longonot" },
    description: { de: "Ein Stratovulkan.", hu: "Rétegvulkán.", ro: "Un stratovulcan.", en: "A stratovolcano." },
    facts: {
      de: ["Kraterwanderung", "Tolle Aussicht"],
      hu: ["Krátertúra", "Remek kilátás"],
      ro: ["Drumeție în crater", "Priveliște grozavă"],
      en: ["Crater hike", "Great view"]
    }
  },
  {
    id: "galana-river-nature-v2",
    type: "river",
    parent: "KE-31",
    coords: [40.0, -3.0],
    name: { de: "Galana-Fluss", hu: "Galana-folyó", ro: "Râul Galana", en: "Galana River" },
    description: { de: "Ein bedeutender Fluss an der Küste.", hu: "Fontos folyó a parton.", ro: "Un râu important pe coastă.", en: "A major river on the coast." },
    facts: {
      de: ["Unterlauf des Athi", "Durchquert Tsavo-Nationalpark"],
      hu: ["Az Athi alsó folyása", "Keresztezi a Tsavo Nemzeti Parkot"],
      ro: ["Cursul inferior al Athi", "Traversează Parcul Național Tsavo"],
      en: ["Lower course of Athi", "Crosses Tsavo National Park"]
    }
  },
  {
    id: "lake-ol-oropil-nature-v2",
    type: "lake",
    parent: "KE-30",
    coords: [36.0, 0.4],
    name: { de: "Ol Oropil-See", hu: "Ol Oropil-tó", ro: "Lacul Ol Oropil", en: "Lake Ol Oropil" },
    description: { de: "Kleiner See im Rift Valley.", hu: "Kisebb tó a Rift-völgyben.", ro: "Lac mic în Rift Valley.", en: "Small lake in the Rift Valley." },
    facts: {
      de: ["Sehr abgelegen", "Rift-Region"],
      hu: ["Nagyon távoli", "Rift-régió"],
      ro: ["Foarte izolat", "Regiunea Rift"],
      en: ["Very remote", "Rift region"]
    }
  },
  {
    id: "mt-nyiru-nature-v2",
    type: "mountain",
    parent: "KE-25",
    coords: [36.8, 2.1],
    name: { de: "Mount Nyiru", hu: "Nyiru-hegy", ro: "Muntele Nyiru", en: "Mount Nyiru" },
    description: { de: "Berg in der nördlichen Wüste.", hu: "Hegy az északi sivatagban.", ro: "Munte în deșertul nordic.", en: "Mountain in the northern desert." },
    facts: {
      de: ["Wüsteninsel", "Hohe Biodiversität"],
      hu: ["Sivatagi sziget", "Magas biodiverzitás"],
      ro: ["Insulă deșertică", "Biodiversitate ridicată"],
      en: ["Desert island", "High biodiversity"]
    }
  },
  {
    id: "turkwel-river-nature-v2",
    type: "river",
    parent: "KE-30",
    coords: [35.5, 3.5],
    name: { de: "Turkwel-Fluss", hu: "Turkwel-folyó", ro: "Râul Turkwel", en: "Turkwel River" },
    description: { de: "Fließt in den Turkana-See.", hu: "A Turkana-tóba ömlik.", ro: "Se varsă în Lacul Turkana.", en: "Flows into Lake Turkana." },
    facts: {
      de: ["Dammbau", "Wichtig für Bewässerung"],
      hu: ["Gátépítés", "Fontos az öntözéshez"],
      ro: ["Construcția de baraje", "Important pentru irigații"],
      en: ["Dam construction", "Vital for irrigation"]
    }
  },
  {
    id: "lake-ole-nado-nature-v2",
    type: "lake",
    parent: "KE-30",
    coords: [36.0, 0.5],
    name: { de: "Ole Nado-See", hu: "Ole Nado-tó", ro: "Lacul Ole Nado", en: "Lake Ole Nado" },
    description: { de: "Kleiner Sodasee.", hu: "Kicsi szódás tó.", ro: "Lac alcalin mic.", en: "Small soda lake." },
    facts: {
      de: ["Rift-Valley-Region", "Saisonal"],
      hu: ["Rift-völgy régió", "Szezonális"],
      ro: ["Regiunea Rift Valley", "Sezonier"],
      en: ["Rift Valley region", "Seasonal"]
    }
  },
  {
    id: "kerio-river-nature-v2",
    type: "river",
    parent: "KE-30",
    coords: [35.8, 1.5],
    name: { de: "Kerio-Fluss", hu: "Kerio-folyó", ro: "Râul Kerio", en: "Kerio River" },
    description: { de: "Fließt durch das Kerio-Tal.", hu: "Átfolyik a Kerio-völgyön.", ro: "Curge prin Valea Kerio.", en: "Flows through Kerio Valley." },
    facts: {
      de: ["Steile Schluchten", "Wüstenregion"],
      hu: ["Meredek szurdokok", "Sivatagi régió"],
      ro: ["Chei abrupte", "Regiune deșertică"],
      en: ["Steep gorges", "Desert region"]
    }
  },
  {
    id: "mt-satima-nature-v2",
    type: "mountain",
    parent: "KE-20",
    coords: [36.6, -0.4],
    name: { de: "Mount Satima", hu: "Satima-hegy", ro: "Muntele Satima", en: "Mount Satima" },
    description: { de: "Höchster Punkt der Aberdare-Range.", hu: "Az Aberdare-hegység legmagasabb pontja.", ro: "Cel mai înalt punct din Aberdare Range.", en: "Highest point of the Aberdare Range." },
    facts: {
      de: ["Wanderziel", "Alpine Flora"],
      hu: ["Túracél", "Alpesi flóra"],
      ro: ["Destinație de drumeție", "Floră alpină"],
      en: ["Hiking destination", "Alpine flora"]
    }
  }
];
