import type { POI } from "./poi";

export const poiExtraNicaraguaNatureV2: POI[] = [
  {
    id: "rio-coco-nature-v2",
    type: "river",
    parent: "NI-NS",
    coords: [-82.9833, 14.9958],
    name: { de: "Río Coco", hu: "Coco-folyó", ro: "Râul Coco", en: "Coco River" },
    description: { de: "Der längste Fluss Mittelamerikas, der vollständig in der Region liegt.", hu: "Közép-Amerika leghosszabb folyója, amely teljes egészében a régión belül található.", ro: "Cel mai lung râu din America Centrală care se află în întregime în regiune.", en: "The longest river in Central America that lies entirely within the region." },
    facts: {
      de: ["Fließt an der Grenze zu Honduras", "Länge: ca. 750 km", "Mündet in die Karibik", "Wichtige Verkehrsader für Miskito-Völker"],
      hu: ["A hondurasi határ mentén folyik", "Hossza: kb. 750 km", "A Karib-tengerbe ömlik", "Fontos közlekedési útvonal a miskito népek számára"],
      ro: ["Curge de-a lungul graniței cu Honduras", "Lungime: aprox. 750 km", "Se varsă în Marea Caraibelor", "Arteră de transport importantă pentru poporul Miskito"],
      en: ["Flows along the border with Honduras", "Length: approx. 750 km", "Empties into the Caribbean Sea", "Important transportation artery for Miskito peoples"]
    }
  },
  {
    id: "lago-de-nicaragua-nature-v2",
    type: "lake",
    parent: "NI",
    coords: [-85.35, 11.55],
    name: { de: "Nicaraguasee", hu: "Nicaragua-tó", ro: "Lacul Nicaragua", en: "Lake Nicaragua" },
    description: { de: "Der größte Süßwassersee Mittelamerikas, bekannt für seine Süßwasserhaie.", hu: "Közép-Amerika legnagyobb édesvizű tava, édesvízi cápáiról ismert.", ro: "Cel mai mare lac de apă dulce din America Centrală, cunoscut pentru rechinii săi de apă dulce.", en: "The largest freshwater lake in Central America, known for its freshwater sharks." },
    facts: {
      de: ["Beherbergt die Insel Ometepe", "Einziger Ort mit Süßwasserhaien", "Fläche: 8.264 km²", "Verbindung zur Karibik durch Río San Juan"],
      hu: ["Itt található az Ometepe-sziget", "Az egyetlen hely édesvízi cápákkal", "Területe: 8.264 km²", "A San Juan folyó köti össze a Karib-tengerrel"],
      ro: ["Găzduiește Insula Ometepe", "Singurul loc cu rechini de apă dulce", "Suprafață: 8.264 km²", "Legătură cu Caraibe prin Río San Juan"],
      en: ["Contains Ometepe Island", "The only place with freshwater sharks", "Area: 8,264 km²", "Connects to the Caribbean via the San Juan River"]
    }
  },
  {
    id: "lago-de-managua-nature-v2",
    type: "lake",
    parent: "NI-MN",
    coords: [-86.4167, 12.3333],
    name: { de: "Managuasee (Xolotlán)", hu: "Managua-tó (Xolotlán)", ro: "Lacul Managua (Xolotlán)", en: "Lake Managua (Xolotlán)" },
    description: { de: "Ein großer See im Westen Nicaraguas, an dessen Ufer die Hauptstadt liegt.", hu: "Nagy tó Nicaragua nyugati részén, partján a fővárossal.", ro: "Un lac mare în vestul Nicaraguei, pe malul căruia se află capitala.", en: "A large lake in western Nicaragua on whose shores the capital city is located." },
    facts: {
      de: ["Auch als Xolotlán-See bekannt", "Verbindung zum Nicaraguasee durch den Fluss Tipitapa", "Stark verschmutzt, aber mit Erholungsbemühungen", "Vulkan Momotombo am Ufer"],
      hu: ["Xolotlán-tóként is ismert", "A Tipitapa folyó köti össze a Nicaragua-tóval", "Erősen szennyezett, de helyreállítási erőfeszítések folynak", "Partján a Momotombo vulkán"],
      ro: ["Cunoscut și ca Lacul Xolotlán", "Legat de Lacul Nicaragua prin râul Tipitapa", "Foarte poluat, dar cu eforturi de recuperare", "Vulcanul Momotombo pe mal"],
      en: ["Also known as Lake Xolotlán", "Connected to Lake Nicaragua by the Tipitapa River", "Highly polluted but with recovery efforts", "Momotombo volcano on its shore"]
    }
  },
  {
    id: "solentiname-archipelago-nature-v2",
    type: "island",
    parent: "NI-SJ",
    coords: [-85.0333, 11.1667],
    name: { de: "Solentiname-Archipel", hu: "Solentiname-szigetcsoport", ro: "Arhipelagul Solentiname", en: "Solentiname Archipelago" },
    description: { de: "Eine Gruppe von 36 Inseln im Nicaraguasee, bekannt für ihre Künstlergemeinschaft.", hu: "36 szigetből álló csoport a Nicaragua-tóban, művészközösségéről ismert.", ro: "Un grup de 36 de insule în Lacul Nicaragua, cunoscut pentru comunitatea sa de artiști.", en: "A group of 36 islands in Lake Nicaragua, known for its community of artists." },
    facts: {
      de: ["Bekannt für primitive Malerei", "Heimat des Dichters Ernesto Cardenal", "Reiche Vogelwelt", "Geschütztes Nationaldenkmal"],
      hu: ["Primitív festészetéről ismert", "Ernesto Cardenal költő otthona", "Gazdag madárvilág", "Védett nemzeti emlékmű"],
      ro: ["Cunoscut pentru pictura primitivistă", "Casa poetului Ernesto Cardenal", "Faună aviară bogată", "Monument național protejat"],
      en: ["Known for primitivist painting", "Home of poet Ernesto Cardenal", "Rich birdlife", "Protected national monument"]
    }
  },
  {
    id: "pearl-cays-nature-v2",
    type: "island",
    parent: "NI-AS",
    coords: [-83.3833, 12.4833],
    name: { de: "Pearl Cays", hu: "Pearl Cays", ro: "Pearl Cays", en: "Pearl Cays" },
    description: { de: "Eine Gruppe von 18 kleinen, unbewohnten Karibikinseln.", hu: "18 kis, lakatlan karibi szigetből álló csoport.", ro: "Un grup de 18 insule mici, nelocuite, din Caraibe.", en: "A group of 18 small, uninhabited Caribbean islands." },
    facts: {
      de: ["Weiße Sandstrände", "Türkisfarbenes Wasser", "Nistplätze für Meeresschildkröten", "Ideal zum Schnorcheln"],
      hu: ["Fehér homokos strandok", "Türkizkék víz", "Tengeri teknősök fészkelőhelye", "Ideális búvárkodáshoz"],
      ro: ["Plaje cu nisip alb", "Apă turcoaz", "Locuri de cuibărit pentru țestoasele marine", "Ideal pentru snorkeling"],
      en: ["White sandy beaches", "Turquoise waters", "Nesting sites for sea turtles", "Ideal for snorkeling"]
    }
  },
  {
    id: "rio-escondido-nature-v2",
    type: "river",
    parent: "NI-AS",
    coords: [-83.75, 12.0833],
    name: { de: "Río Escondido", hu: "Escondido-folyó", ro: "Râul Escondido", en: "Escondido River" },
    description: { de: "Ein wichtiger Fluss, der die Stadt Bluefields mit dem Landesinneren verbindet.", hu: "Fontos folyó, amely Bluefields városát köti össze az ország belsejével.", ro: "Un râu important care leagă orașul Bluefields de interiorul țării.", en: "An important river connecting the city of Bluefields with the country's interior." },
    facts: {
      de: ["Wichtige Wasserstraße zur Karibik", "Hauptzugang nach Bluefields", "Bedeutend für den Handel", "Umschlossen von Regenwald"],
      hu: ["Fontos vízi út a Karib-tenger felé", "Fő bejárat Bluefieldsbe", "Kereskedelmi szempontból jelentős", "Esőerdő veszi körül"],
      ro: ["Cale navigabilă importantă către Caraibe", "Acces principal spre Bluefields", "Important pentru comerț", "Înconjurat de pădure tropicală"],
      en: ["Important waterway to the Caribbean", "Main access to Bluefields", "Significant for trade", "Surrounded by rainforest"]
    }
  },
  {
    id: "indio-maiz-reserve-nature-v2",
    type: "forest",
    parent: "NI-SJ",
    coords: [-84.0, 11.0],
    name: { de: "Biologisches Reservat Indio Maíz", hu: "Indio Maíz Biológiai Rezervátum", ro: "Rezervația Biologică Indio Maíz", en: "Indio Maíz Biological Reserve" },
    description: { de: "Eines der am besten erhaltenen Naturreservate in Nicaragua.", hu: "Nicaragua egyik legjobb állapotban megőrzött természetvédelmi területe.", ro: "Una dintre cele mai bine conservate rezervații naturale din Nicaragua.", en: "One of the best-preserved nature reserves in Nicaragua." },
    facts: {
      de: ["Umfasst riesige Regenwaldgebiete", "Extrem hohe Biodiversität", "Heimat von Jaguaren und Tapiren", "Teil des Mesoamerikanischen Biologischen Korridors"],
      hu: ["Hatalmas esőerdő területeket foglal magában", "Rendkívül magas biodiverzitás", "Jaguárok és tapírok otthona", "A Mezoamerikai Biológiai Folyosó része"],
      ro: ["Cuprinde zone vaste de pădure tropicală", "Biodiversitate extrem de ridicată", "Habitat pentru jaguari și tapiri", "Parte a Coridorului Biologic Mesoamerican"],
      en: ["Contains vast areas of rainforest", "Extremely high biodiversity", "Home to jaguars and tapirs", "Part of the Mesoamerican Biological Corridor"]
    }
  },
  {
    id: "peninsula-de-chiltepe-nature-v2",
    type: "mountain",
    parent: "NI-MA",
    coords: [-86.3333, 12.2167],
    name: { de: "Chiltepe-Halbinsel", hu: "Chiltepe-félsziget", ro: "Peninsula Chiltepe", en: "Chiltepe Peninsula" },
    description: { de: "Eine vulkanische Halbinsel im Managuasee mit zwei Lagunen.", hu: "Vulkáni félsziget a Managua-tóban, két lagúnával.", ro: "O peninsulă vulcanică în Lacul Managua cu două lagune.", en: "A volcanic peninsula in Lake Managua with two lagoons." },
    facts: {
      de: ["Umfasst die Lagunen Apoyeque und Xiloá", "Vulkanischen Ursprungs", "Beliebtes Naherholungsgebiet für Managua", "Bietet tolle Aussichten"],
      hu: ["Magában foglalja az Apoyeque és Xiloá lagúnákat", "Vulkáni eredetű", "Népszerű üdülőhely Managua számára", "Nagyszerű kilátást nyújt"],
      ro: ["Include lagunele Apoyeque și Xiloá", "Origine vulcanică", "Zonă de recreere populară pentru Managua", "Oferă vederi minunate"],
      en: ["Includes the Apoyeque and Xiloá lagoons", "Of volcanic origin", "Popular recreational area for Managua", "Offers great views"]
    }
  },
  {
    id: "la-flor-wildlife-refuge-nature-v2",
    type: "sea",
    parent: "NI-RI",
    coords: [-85.7869, 11.1342],
    name: { de: "Wildschutzgebiet La Flor", hu: "La Flor Vadvédelmi Terület", ro: "Refugiul de viață sălbatică La Flor", en: "La Flor Wildlife Refuge" },
    description: { de: "Ein wichtiger Niststrand für Oliv-Bastardschildkröten an der Pazifikküste.", hu: "Fontos fészkelőpart az olajzöld fattyúteknősök számára a Csendes-óceán partján.", ro: "O plajă importantă de cuibărit pentru țestoasele Olive Ridley pe coasta Pacificului.", en: "An important nesting beach for Olive Ridley sea turtles on the Pacific coast." },
    facts: {
      de: ["Massenankunft von Schildkröten ('Arribada')", "Geschützter Pazifikstrand", "Wichtig für den Artenschutz", "Saisonales Naturereignis"],
      hu: ["Teknősök tömeges érkezése ('Arribada')", "Védett csendes-óceáni part", "Fontos a fajvédelem szempontjából", "Szezonális természeti esemény"],
      ro: ["Sosirea în masă a țestoaselor ('Arribada')", "Plajă protejată la Pacific", "Important pentru conservarea speciilor", "Eveniment natural sezonier"],
      en: ["Mass nesting of turtles ('Arribada')", "Protected Pacific beach", "Important for species conservation", "Seasonal natural event"]
    }
  },
  {
    id: "gulf-of-fonseca-nicaragua-nature-v2",
    type: "sea",
    parent: "NI-CH",
    coords: [-87.6667, 13.0],
    name: { de: "Golf von Fonseca (Nicaragua)", hu: "Fonseca-öböl (Nicaragua)", ro: "Golful Fonseca (Nicaragua)", en: "Gulf of Fonseca (Nicaragua)" },
    description: { de: "Der nicaraguanische Teil eines großen Pazifikgolfs, der mit Honduras und El Salvador geteilt wird.", hu: "Egy nagy csendes-óceáni öböl nicaraguai része, amelyet Hondurasszal és El Salvadorral is megoszt.", ro: "Partea nicaraguană a unui mare golf la Pacific, împărțit cu Honduras și El Salvador.", en: "The Nicaraguan part of a large Pacific gulf shared with Honduras and El Salvador." },
    facts: {
      de: ["Umfasst den Vulkan Cosigüina", "Wichtige Mangrovenwälder", "Reiche Meeresfauna", "Strategische maritime Lage"],
      hu: ["Magában foglalja a Cosigüina vulkánt", "Fontos mangroveerdők", "Gazdag tengeri élővilág", "Stratégiai tengeri fekvés"],
      ro: ["Include vulcanul Cosigüina", "Păduri importante de mangrove", "Faună marină bogată", "Poziție maritimă strategică"],
      en: ["Includes the Cosigüina volcano", "Important mangrove forests", "Rich marine fauna", "Strategic maritime location"]
    }
  },
  {
    id: "rio-tuma-nature-v2",
    type: "river",
    parent: "NI-MT",
    coords: [-85.0, 13.0],
    name: { de: "Río Tuma", hu: "Tuma-folyó", ro: "Râul Tuma", en: "Tuma River" },
    description: { de: "Ein bedeutender Fluss, der den Apanás-See speist.", hu: "Jelentős folyó, amely az Apanás-tavat táplálja.", ro: "Un râu important care alimentează Lacul Apanás.", en: "A significant river that feeds Lake Apanás." },
    facts: {
      de: ["Aufgestaut zum Apanás-See", "Wichtig für Wasserkraft", "Fließt durch die zentralen Hochländer", "Landwirtschaftliche Nutzung"],
      hu: ["Az Apanás-tóvá duzzasztották", "Fontos a vízenergia szempontjából", "A központi felföldön folyik keresztül", "Mezőgazdasági hasznosítás"],
      ro: ["Barat pentru a forma Lacul Apanás", "Important pentru hidroenergie", "Curge prin zonele muntoase centrale", "Utilizare agricolă"],
      en: ["Dammed to form Lake Apanás", "Important for hydropower", "Flows through the central highlands", "Agricultural use"]
    }
  },
  {
    id: "tisey-estanzuela-reserve-nature-v2",
    type: "forest",
    parent: "NI-ES",
    coords: [-86.3833, 13.0],
    name: { de: "Naturreservat Tisey-Estanzuela", hu: "Tisey-Estanzuela Természetvédelmi Terület", ro: "Rezervația Naturală Tisey-Estanzuela", en: "Tisey-Estanzuela Nature Reserve" },
    description: { de: "Ein geschütztes Gebiet mit Kiefern- und Nebelwäldern in der Nähe von Estelí.", hu: "Védett terület fenyő- és köderdőkkel Estelí közelében.", ro: "O zonă protejată cu păduri de pini și de ceață lângă Estelí.", en: "A protected area with pine and cloud forests near Estelí." },
    facts: {
      de: ["Bekannt für den Wasserfall Salto de la Estanzuela", "Kühles Klima", "Wanderwege und Aussichtspunkte", "Vielfältige Flora"],
      hu: ["A Salto de la Estanzuela vízesésről ismert", "Hűvös éghajlat", "Túraútvonalak és kilátópontok", "Változatos növényvilág"],
      ro: ["Cunoscut pentru cascada Salto de la Estanzuela", "Climat răcoros", "Trasee de drumeție și puncte de belvedere", "Floră diversă"],
      en: ["Known for the Salto de la Estanzuela waterfall", "Cool climate", "Hiking trails and viewpoints", "Diverse flora"]
    }
  },
  {
    id: "rio-prinza-nature-v2",
    type: "river",
    parent: "NI-AN",
    coords: [-83.5667, 13.4],
    name: { de: "Río Prinzapolka", hu: "Prinzapolka-folyó", ro: "Râul Prinzapolka", en: "Prinzapolka River" },
    description: { de: "Ein langer Fluss, der die Bergbauregion mit der Karibikküste verbindet.", hu: "Hosszú folyó, amely a bányászati régiót köti össze a karibi partvidékkel.", ro: "Un râu lung care leagă regiunea minieră de coasta Caraibilor.", en: "A long river connecting the mining region to the Caribbean coast." },
    facts: {
      de: ["Wichtiger Transportweg für abgelegene Gemeinden", "Mündet bei Prinzapolka in die Karibik", "Durchquert dichten Regenwald", "Historisch für den Bananentransport genutzt"],
      hu: ["Fontos közlekedési útvonal a távoli közösségek számára", "Prinzapolkánál ömlik a Karib-tengerbe", "Sűrű esőerdőn halad át", "Történelmileg banánszállításra használták"],
      ro: ["Cale de transport importantă pentru comunitățile izolate", "Se varsă în Caraibe la Prinzapolka", "Traversează păduri tropicale dense", "Utilizat istoric pentru transportul bananelor"],
      en: ["Important transport route for remote communities", "Empties into the Caribbean at Prinzapolka", "Crosses dense rainforest", "Historically used for banana transport"]
    }
  },
  {
    id: "miskito-cays-nature-v2",
    type: "island",
    parent: "NI-AN",
    coords: [-82.9667, 14.3833],
    name: { de: "Miskito Cays", hu: "Miskito Cays", ro: "Miskito Cays", en: "Miskito Cays" },
    description: { de: "Eine abgelegene Gruppe von Inseln, Mangroven und Riffen vor der Nordostküste.", hu: "Szigetek, mangroveerdők és zátonyok távoli csoportja az északkeleti partoknál.", ro: "Un grup izolat de insule, mangrove și recife în largul coastei de nord-est.", en: "A remote group of islands, mangroves, and reefs off the northeast coast." },
    facts: {
      de: ["Biologisches Meeresschutzgebiet", "Wichtig für die Miskito-Fischer", "Hohe marine Biodiversität", "Schwer zugänglich"],
      hu: ["Tengeri biológiai védett terület", "Fontos a miskito halászok számára", "Magas tengeri biodiverzitás", "Nehezen megközelíthető"],
      ro: ["Rezervație marină biologică", "Important pentru pescarii Miskito", "Biodiversitate marină ridicată", "Greu accesibil"],
      en: ["Marine biological reserve", "Important for Miskito fishermen", "High marine biodiversity", "Difficult to access"]
    }
  },
  {
    id: "rio-grande-de-matagalpa-nature-v2",
    type: "river",
    parent: "NI-MT",
    coords: [-83.5333, 12.8667],
    name: { de: "Río Grande de Matagalpa", hu: "Río Grande de Matagalpa", ro: "Râul Grande de Matagalpa", en: "Grande de Matagalpa River" },
    description: { de: "Einer der längsten und wichtigsten Flüsse, der das Land von West nach Ost durchquert.", hu: "Az egyik leghosszabb és legfontosabb folyó, amely nyugatról keletre szeli át az országot.", ro: "Unul dintre cele mai lungi și importante râuri care traversează țara de la vest la est.", en: "One of the longest and most important rivers crossing the country from west to east." },
    facts: {
      de: ["Entspringt in der Nähe von Matagalpa", "Mündet in der Karibik", "Potenzial für Wasserkraft", "Durchfließt vielfältige Landschaften"],
      hu: ["Matagalpa közelében ered", "A Karib-tengerbe ömlik", "Vízenergia-potenciál", "Változatos tájakon folyik keresztül"],
      ro: ["Izvorăște lângă Matagalpa", "Se varsă în Caraibe", "Potențial hidroenergetic", "Traversează peisaje diverse"],
      en: ["Originates near Matagalpa", "Empties into the Caribbean", "Potential for hydropower", "Flows through diverse landscapes"]
    }
  },
  {
    id: "zapatera-island-nature-v2",
    type: "island",
    parent: "NI-GR",
    coords: [-85.8167, 11.7333],
    name: { de: "Insel Zapatera", hu: "Zapatera-sziget", ro: "Insula Zapatera", en: "Zapatera Island" },
    description: { de: "Eine vulkanische Insel im Nicaraguasee, die als Nationalpark geschützt ist.", hu: "Vulkáni sziget a Nicaragua-tóban, nemzeti parkként védett.", ro: "O insulă vulcanică în Lacul Nicaragua, protejată ca parc național.", en: "A volcanic island in Lake Nicaragua, protected as a national park." },
    facts: {
      de: ["Wichtige archäologische Stätte", "Zahlreiche Petroglyphen und Statuen", "Schildvulkan", "Reiche Tierwelt"],
      hu: ["Fontos régészeti lelőhely", "Számos petroglifa és szobor", "Pajzsvulkán", "Gazdag állatvilág"],
      ro: ["Situl arheologic important", "Numeroase petroglife și statui", "Vulcan scut", "Faună bogată"],
      en: ["Important archaeological site", "Numerous petroglyphs and statues", "Shield volcano", "Rich wildlife"]
    }
  },
  {
    id: "laguna-de-perlas-nature-v2",
    type: "lake",
    parent: "NI-AS",
    coords: [-83.6667, 12.35],
    name: { de: "Laguna de Perlas (Gewässer)", hu: "Gyöngy-lagúna (vízfelület)", ro: "Laguna Perlelor (corp de apă)", en: "Pearl Lagoon (body of water)" },
    description: { de: "Die größte Küstenlagune Nicaraguas an der Karibikküste.", hu: "Nicaragua legnagyobb tengerparti lagúnája a karibi parton.", ro: "Cea mai mare lagună de coastă din Nicaragua, pe coasta Caraibilor.", en: "The largest coastal lagoon in Nicaragua on the Caribbean coast." },
    facts: {
      de: ["Brackwasser-Ökosystem", "Verbindung zum Karibischen Meer", "Wichtig für die lokale Fischerei", "Umfasst Mangrovenwälder"],
      hu: ["Brakkvízi ökoszisztéma", "Kapcsolat a Karib-tengerrel", "Fontos a helyi halászat számára", "Mangroveerdőket foglal magában"],
      ro: ["Ecosistem de apă salmastră", "Legătură cu Marea Caraibilor", "Important pentru pescuitul local", "Include păduri de mangrove"],
      en: ["Brackish water ecosystem", "Connection to the Caribbean Sea", "Important for local fishing", "Includes mangrove forests"]
    }
  },
  {
    id: "telica-volcano-nature-v2",
    type: "mountain",
    parent: "NI-LE",
    coords: [-86.845, 12.6028],
    name: { de: "Vulkan Telica", hu: "Telica vulkán", ro: "Vulcanul Telica", en: "Telica Volcano" },
    description: { de: "Einer der aktivsten Vulkane Nicaraguas, beliebt für Nachtwanderungen.", hu: "Nicaragua egyik legaktívabb vulkánja, népszerű éjszakai túrák célpontja.", ro: "Unul dintre cei mai activi vulcani din Nicaragua, popular pentru drumeții nocturne.", en: "One of Nicaragua's most active volcanoes, popular for night hikes." },
    facts: {
      de: ["Häufige kleinere Eruptionen", "Sichtbare Lava im Krater bei Nacht", "Teil der Maribios-Vulkankette", "Höhe: 1.061 m"],
      hu: ["Gyakori kisebb kitörések", "Éjjel látható láva a kráterben", "A Maribios vulkánlánc része", "Magasság: 1,061 m"],
      ro: ["Erupții minore frecvente", "Lavă vizibilă în crater noaptea", "Parte a lanțului vulcanic Maribios", "Altitudine: 1.061 m"],
      en: ["Frequent minor eruptions", "Visible lava in the crater at night", "Part of the Maribios volcanic chain", "Elevation: 1,061 m"]
    }
  },
  {
    id: "san-lorenzo-cloud-forest-nature-v2",
    type: "forest",
    parent: "NI-BO",
    coords: [-85.6, 12.3333],
    name: { de: "Nebelwald von San Lorenzo", hu: "San Lorenzo-i köderdő", ro: "Pădurea de ceață San Lorenzo", en: "San Lorenzo Cloud Forest" },
    description: { de: "Ein kleiner, aber wichtiger Nebelwald im Departement Boaco.", hu: "Kicsi, de fontos köderdő Boaco megyében.", ro: "O pădure de ceață mică, dar importantă, în departamentul Boaco.", en: "A small but important cloud forest in the department of Boaco." },
    facts: {
      de: ["Isoliertes Ökosystem", "Reich an Epiphyten wie Orchideen", "Wichtige Wasserquelle für die Region", "Schutzgebiet"],
      hu: ["Elszigetelt ökoszisztéma", "Epifitonokban, például orchideákban gazdag", "Fontos vízforrás a régió számára", "Védett terület"],
      ro: ["Ecosistem izolat", "Bogat în epifite precum orhideele", "Sursă importantă de apă pentru regiune", "Zonă protejată"],
      en: ["Isolated ecosystem", "Rich in epiphytes like orchids", "Important water source for the region", "Protected area"]
    }
  },
  {
    id: "little-corn-island-nature-v2",
    type: "island",
    parent: "NI-AS",
    coords: [-82.9833, 12.2833],
    name: { de: "Little Corn Island", hu: "Little Corn Island", ro: "Little Corn Island", en: "Little Corn Island" },
    description: { de: "Eine kleine, autofreie Karibikinsel, perfekt für einen ruhigen Urlaub.", hu: "Kicsi, autómentes karibi sziget, tökéletes egy csendes nyaraláshoz.", ro: "O mică insulă caraibiană fără mașini, perfectă pentru o vacanță liniștită.", en: "A small, car-free Caribbean island perfect for a quiet getaway." },
    facts: {
      de: ["Keine motorisierten Fahrzeuge", "Umgeben von Korallenriffen", "Beliebt zum Tauchen und Schnorcheln", "Entspannte Atmosphäre"],
      hu: ["Nincsenek motoros járművek", "Korallzátonyok veszik körül", "Népszerű búvár- és sznorkelezési hely", "Nyugodt légkör"],
      ro: ["Fără vehicule motorizate", "Înconjurat de recife de corali", "Popular pentru scufundări și snorkeling", "Atmosferă relaxată"],
      en: ["No motorized vehicles", "Surrounded by coral reefs", "Popular for diving and snorkeling", "Relaxed atmosphere"]
    }
  },
  {
    id: "cosiguina-lagoon-nature-v2",
    type: "lake",
    parent: "NI-CH",
    coords: [-87.575, 12.986],
    name: { de: "Cosigüina-Lagune", hu: "Cosigüina-lagúna", ro: "Laguna Cosigüina", en: "Cosigüina Lagoon" },
    description: { de: "Der Kratersee im Gipfel des Vulkans Cosigüina.", hu: "A krátertó a Cosigüina vulkán csúcsán.", ro: "Lacul de crater din vârful vulcanului Cosigüina.", en: "The crater lake at the summit of the Cosigüina volcano." },
    facts: {
      de: ["Entstanden nach der Eruption von 1835", "Tiefgrünes Wasser", "Abgeschiedene Lage", "Teil eines Naturreservats"],
      hu: ["Az 1835-ös kitörés után keletkezett", "Mélyzöld víz", "Elzárt fekvés", "Egy természetvédelmi terület része"],
      ro: ["Format după erupția din 1835", "Apă de un verde profund", "Locație izolată", "Parte a unei rezervații naturale"],
      en: ["Formed after the 1835 eruption", "Deep green water", "Secluded location", "Part of a nature reserve"]
    }
  },
  {
    id: "estero-real-nature-v2",
    type: "sea",
    parent: "NI-CH",
    coords: [-87.25, 12.75],
    name: { de: "Estero Real", hu: "Estero Real", ro: "Estero Real", en: "Estero Real" },
    description: { de: "Eines der größten Mangroven-Ästuare Mittelamerikas.", hu: "Közép-Amerika egyik legnagyobb mangrove torkolatvidéke.", ro: "Unul dintre cele mai mari estuare cu mangrove din America Centrală.", en: "One of the largest mangrove estuaries in Central America." },
    facts: {
      de: ["Wichtiges Brutgebiet für Vögel und Fische", "Garnelenzucht", "Mündet in den Golf von Fonseca", "Schutzgebiet von internationaler Bedeutung (Ramsar)"],
      hu: ["Fontos költőhely madarak és halak számára", "Garnélarák-tenyésztés", "A Fonseca-öbölbe ömlik", "Nemzetközi jelentőségű védett terület (Ramsar)"],
      ro: ["Zonă importantă de reproducere pentru păsări și pești", "Creșterea creveților", "Se varsă în Golful Fonseca", "Zonă protejată de importanță internațională (Ramsar)"],
      en: ["Important breeding ground for birds and fish", "Shrimp farming", "Empties into the Gulf of Fonseca", "Protected area of international importance (Ramsar)"]
    }
  },
  {
    id: "rio-bocay-nature-v2",
    type: "river",
    parent: "NI-JI",
    coords: [-85.1, 13.55],
    name: { de: "Río Bocay", hu: "Bocay-folyó", ro: "Râul Bocay", en: "Bocay River" },
    description: { de: "Ein Nebenfluss des Río Coco, der durch das Bosawás-Reservat fließt.", hu: "A Coco-folyó mellékfolyója, amely a Bosawás-rezervátumon folyik keresztül.", ro: "Un afluent al râului Coco care curge prin rezervația Bosawás.", en: "A tributary of the Coco River that flows through the Bosawás Reserve." },
    facts: {
      de: ["Fließt durch unberührten Regenwald", "Wichtiger Korridor für die Tierwelt", "Heimat indigener Gemeinschaften", "Hohe Wasserqualität"],
      hu: ["Érintetlen esőerdőn folyik keresztül", "Fontos folyosó a vadvilág számára", "Őslakos közösségek otthona", "Magas vízminőség"],
      ro: ["Curge prin păduri tropicale virgine", "Coridor important pentru fauna sălbatică", "Habitat pentru comunități indigene", "Calitate ridicată a apei"],
      en: ["Flows through pristine rainforest", "Important corridor for wildlife", "Home to indigenous communities", "High water quality"]
    }
  },
  {
    id: "cerro-el-arenal-nature-v2",
    type: "mountain",
    parent: "NI-MT",
    coords: [-85.83, 12.98],
    name: { de: "Cerro El Arenal", hu: "El Arenal-hegy", ro: "Cerro El Arenal", en: "El Arenal Hill" },
    description: { de: "Ein Naturschutzgebiet und Berg in der Nähe von Matagalpa.", hu: "Természetvédelmi terület és hegy Matagalpa közelében.", ro: "O rezervație naturală și un munte lângă Matagalpa.", en: "A nature reserve and mountain near Matagalpa." },
    facts: {
      de: ["Nebelwald-Ökosystem", "Wichtige Wasserquelle für Matagalpa", "Kaffeeanbau an den Hängen", "Wanderwege"],
      hu: ["Köderdő-ökoszisztéma", "Fontos vízforrás Matagalpa számára", "Kávétermesztés a lejtőkön", "Túraútvonalak"],
      ro: ["Ecosistem de pădure de ceață", "Sursă importantă de apă pentru Matagalpa", "Cultivarea cafelei pe versanți", "Trasee de drumeție"],
      en: ["Cloud forest ecosystem", "Important water source for Matagalpa", "Coffee cultivation on its slopes", "Hiking trails"]
    }
  },
  {
    id: "saslaya-national-park-nature-v2",
    type: "forest",
    parent: "NI-AN",
    coords: [-85.0167, 13.75],
    name: { de: "Nationalpark Saslaya", hu: "Saslaya Nemzeti Park", ro: "Parcul Național Saslaya", en: "Saslaya National Park" },
    description: { de: "Der erste Nationalpark Nicaraguas, schützt einen wichtigen Berg und Nebelwald.", hu: "Nicaragua első nemzeti parkja, egy fontos hegyet és köderdőt véd.", ro: "Primul parc național din Nicaragua, protejând un munte important și o pădure de ceață.", en: "Nicaragua's first national park, protecting an important mountain and cloud forest." },
    facts: {
      de: ["Umfasst den höchsten Berg im Zentrum des Landes (Cerro Saslaya)", "Kernzone des Bosawás-Reservats", "Heimat des Quetzals", "Extrem unzugänglich"],
      hu: ["Magában foglalja az ország központi részének legmagasabb hegyét (Cerro Saslaya)", "A Bosawás-rezervátum központi zónája", "A quetzal otthona", "Rendkívül nehezen megközelíthető"],
      ro: ["Include cel mai înalt munte din centrul țării (Cerro Saslaya)", "Zona centrală a rezervației Bosawás", "Habitat pentru quetzal", "Extrem de inaccesibil"],
      en: ["Includes the highest mountain in the country's center (Cerro Saslaya)", "Core zone of the Bosawás Reserve", "Home of the Quetzal", "Extremely inaccessible"]
    }
  },
  {
    id: "caribbean-sea-nicaragua-nature-v2",
    type: "sea",
    parent: "NI",
    coords: [-83.0, 13.0],
    name: { de: "Karibisches Meer (Nicaragua)", hu: "Karib-tenger (Nicaragua)", ro: "Marea Caraibelor (Nicaragua)", en: "Caribbean Sea (Nicaragua)" },
    description: { de: "Die östliche Meeresgrenze Nicaraguas mit Korallenriffen und Inseln.", hu: "Nicaragua keleti tengeri határa korallzátonyokkal és szigetekkel.", ro: "Granița maritimă estică a Nicaraguei, cu recife de corali și insule.", en: "Nicaragua's eastern maritime border, with coral reefs and islands." },
    facts: {
      de: ["Umfasst die Corn Islands und Pearl Cays", "Wichtige Fischgründe", "Teil des Mesoamerikanischen Riffs", "Tropisches Klima und Wasser"],
      hu: ["Magában foglalja a Corn-szigeteket és a Pearl Cays-t", "Fontos halászati területek", "A Mezoamerikai-zátony része", "Trópusi éghajlat és víz"],
      ro: ["Include Insulele Corn și Pearl Cays", "Zone de pescuit importante", "Parte a Recifului Mesoamerican", "Climat și apă tropicale"],
      en: ["Includes the Corn Islands and Pearl Cays", "Important fishing grounds", "Part of the Mesoamerican Reef system", "Tropical climate and waters"]
    }
  },
  {
    id: "pacific-ocean-nicaragua-nature-v2",
    type: "sea",
    parent: "NI",
    coords: [-87.0, 12.0],
    name: { de: "Pazifischer Ozean (Nicaragua)", hu: "Csendes-óceán (Nicaragua)", ro: "Oceanul Pacific (Nicaragua)", en: "Pacific Ocean (Nicaragua)" },
    description: { de: "Die westliche Meeresgrenze Nicaraguas mit Surfstränden und vulkanischer Küste.", hu: "Nicaragua nyugati tengeri határa szörfstrandokkal és vulkanikus partvonallal.", ro: "Granița maritimă vestică a Nicaraguei, cu plaje pentru surf și o coastă vulcanică.", en: "Nicaragua's western maritime border with surf beaches and a volcanic coastline." },
    facts: {
      de: ["Bekannt für hohe Wellen zum Surfen", "Vulkanische Sandstrände", "Wichtige Fischerei", "Nistplätze für Meeresschildkröten"],
      hu: ["Magas hullámairól ismert, amelyek ideálisak a szörfözéshez", "Vulkanikus homokos strandok", "Jelentős halászat", "Tengeri teknősök fészkelőhelyei"],
      ro: ["Cunoscut pentru valurile înalte pentru surf", "Plaje cu nisip vulcanic", "Pescuit important", "Locuri de cuibărit pentru țestoasele marine"],
      en: ["Known for high waves for surfing", "Volcanic sand beaches", "Important fisheries", "Nesting sites for sea turtles"]
    }
  },
  {
    id: "cerro-negro-forest-nature-v2",
    type: "forest",
    parent: "NI-LE",
    coords: [-86.7, 12.51],
    name: { de: "Trockenwald um Cerro Negro", hu: "Száraz erdő a Cerro Negro körül", ro: "Pădurea uscată din jurul Cerro Negro", en: "Dry Forest around Cerro Negro" },
    description: { de: "Das einzigartige Trockenwald-Ökosystem, das den jungen Vulkan umgibt.", hu: "Az egyedülálló száraz erdő ökoszisztéma, amely a fiatal vulkánt veszi körül.", ro: "Ecosistemul unic de pădure uscată care înconjoară tânărul vulcan.", en: "The unique dry forest ecosystem surrounding the young volcano." },
    facts: {
      de: ["Angepasst an vulkanische Asche", "Beherbergt spezialisierte Flora und Fauna", "Teil eines größeren Schutzgebietskomplexes", "Starke saisonale Veränderungen"],
      hu: ["Alkalmazkodott a vulkáni hamuhoz", "Speciális növény- és állatvilágnak ad otthont", "Egy nagyobb védett terület komplexum része", "Erős szezonális változások"],
      ro: ["Adaptat la cenușa vulcanică", "Găzduiește floră și faună specializată", "Parte a unui complex mai mare de arii protejate", "Schimbări sezoniere puternice"],
      en: ["Adapted to volcanic ash", "Hosts specialized flora and fauna", "Part of a larger protected area complex", "Strong seasonal changes"]
    }
  },
  {
    id: "laguna-nejapa-nature-v2",
    type: "lake",
    parent: "NI-MA",
    coords: [-86.3167, 12.1167],
    name: { de: "Laguna de Nejapa", hu: "Nejapa-lagúna", ro: "Laguna Nejapa", en: "Nejapa Lagoon" },
    description: { de: "Ein Kratersee am westlichen Stadtrand von Managua.", hu: "Krátertó Managua nyugati szélén.", ro: "Un lac de crater la periferia vestică a Managuei.", en: "A crater lake on the western outskirts of Managua." },
    facts: {
      de: ["Teil einer Kette von Kraterseen", "Leicht zugänglich von Managua", "Beliebter Aussichtspunkt", "Geologisch interessant"],
      hu: ["Egy krátertó-lánc része", "Könnyen megközelíthető Managuából", "Népszerű kilátópont", "Geológiailag érdekes"],
      ro: ["Parte a unui lanț de lacuri de crater", "Ușor accesibil din Managua", "Punct de belvedere popular", "Interesant din punct de vedere geologic"],
      en: ["Part of a chain of crater lakes", "Easily accessible from Managua", "Popular viewpoint", "Geologically interesting"]
    }
  },
  {
    id: "rio-wawa-nature-v2",
    type: "river",
    parent: "NI-AN",
    coords: [-83.45, 14.25],
    name: { de: "Río Wawa", hu: "Wawa-folyó", ro: "Râul Wawa", en: "Wawa River" },
    description: { de: "Ein Fluss an der Karibikküste, wichtig für die lokalen Gemeinschaften.", hu: "Folyó a karibi parton, fontos a helyi közösségek számára.", ro: "Un râu pe coasta Caraibilor, important pentru comunitățile locale.", en: "A river on the Caribbean coast, important for local communities." },
    facts: {
      de: ["Verbindet das Landesinnere mit der Küste", "Wichtige Transportroute", "Mündet in der Nähe von Puerto Cabezas", "Reich an Fischen"],
      hu: ["Összeköti az ország belsejét a parttal", "Fontos közlekedési útvonal", "Puerto Cabezas közelében ömlik a tengerbe", "Halban gazdag"],
      ro: ["Leagă interiorul țării de coastă", "Ruta de transport importantă", "Se varsă lângă Puerto Cabezas", "Bogat în pește"],
      en: ["Connects the interior to the coast", "Important transportation route", "Empties near Puerto Cabezas", "Rich in fish"]
    }
  }
];
