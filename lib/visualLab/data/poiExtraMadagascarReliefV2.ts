import type { POI } from "./poi";

export const poiExtraMadagascarReliefV2: POI[] = [
  {
    id: "tsaratanana-massif-relief-v2",
    type: "mountain",
    parent: "MG-M",
    coords: [48.8333, -14.0333],
    name: { de: "Tsaratanana-Massiv", hu: "Tsaratanana-hegység", ro: "Masivul Tsaratanana", en: "Tsaratanana Massif" },
    description: { de: "Das höchste Gebirgsmassiv Madagaskars im Norden.", hu: "Madagaszkár legmagasabb hegysége az északi részen.", ro: "Cel mai înalt masiv muntos din Madagascar, situat în nord.", en: "The highest mountain massif in Madagascar, located in the north." },
    facts: {
      de: ["Höchster Punkt ist der Maromokotro.", "Vulkanischen Ursprungs."],
      hu: ["A legmagasabb pontja a Maromokotro.", "Vulkáni eredetű."],
      ro: ["Cel mai înalt punct este Maromokotro.", "De origine vulcanică."],
      en: ["Highest point is Maromokotro.", "Of volcanic origin."]
    }
  },
  {
    id: "maromokotro-peak-relief-v2",
    type: "mountain",
    parent: "MG-M",
    coords: [48.9667, -14.0203],
    name: { de: "Maromokotro", hu: "Maromokotro", ro: "Maromokotro", en: "Maromokotro" },
    description: { de: "Der höchste Berg der Insel Madagaskar.", hu: "Madagaszkár szigetének legmagasabb hegycsúcsa.", ro: "Cel mai înalt vârf muntos din insula Madagascar.", en: "The highest mountain peak on the island of Madagascar." },
    facts: {
      de: ["Erhebt sich auf 2.876 Meter.", "Teil des Tsaratanana-Massivs."],
      hu: ["2876 méter magas.", "A Tsaratanana-hegység része."],
      ro: ["Are o înălțime de 2.876 metri.", "Parte a masivului Tsaratanana."],
      en: ["Stands at 2,876 meters.", "Part of the Tsaratanana Massif."]
    }
  },
  {
    id: "ankaratra-mountains-relief-v2",
    type: "mountain",
    parent: "MG-V",
    coords: [47.4167, -19.3333],
    name: { de: "Ankaratra-Gebirge", hu: "Ankaratra-hegység", ro: "Munții Ankaratra", en: "Ankaratra Mountains" },
    description: { de: "Ein bedeutendes vulkanisches Gebirge im zentralen Hochland.", hu: "Jelentős vulkáni hegység a központi felföldön.", ro: "Un lanț muntos vulcanic important în platoul central.", en: "A significant volcanic mountain range in the central highlands." },
    facts: {
      de: ["Zweithöchstes Gebirge der Insel.", "Wichtiges Wassereinzugsgebiet."],
      hu: ["A sziget második legmagasabb hegysége.", "Fontos vízgyűjtő terület."],
      ro: ["Al doilea cel mai înalt lanț muntos al insulei.", "Zona importantă de captare a apei."],
      en: ["Second highest range on the island.", "Important water catchment area."]
    }
  },
  {
    id: "tsiafajavona-peak-relief-v2",
    type: "mountain",
    parent: "MG-V",
    coords: [47.25, -19.35],
    name: { de: "Tsiafajavona", hu: "Tsiafajavona", ro: "Tsiafajavona", en: "Tsiafajavona" },
    description: { de: "Der höchste Gipfel des Ankaratra-Gebirges.", hu: "Az Ankaratra-hegység legmagasabb csúcsa.", ro: "Cel mai înalt vârf din munții Ankaratra.", en: "The highest peak of the Ankaratra Mountains." },
    facts: {
      de: ["Höhe beträgt 2.643 Meter.", "Ein erloschener Vulkan."],
      hu: ["Magassága 2643 méter.", "Egy kialudt vulkán."],
      ro: ["Altitudinea este de 2.643 metri.", "Un vulcan stins."],
      en: ["Elevation is 2,643 meters.", "An extinct volcano."]
    }
  },
  {
    id: "andringitra-massif-relief-v2",
    type: "mountain",
    parent: "MG-H",
    coords: [46.8833, -22.1333],
    name: { de: "Andringitra-Massiv", hu: "Andringitra-hegység", ro: "Masivul Andringitra", en: "Andringitra Massif" },
    description: { de: "Granitisches Massiv im südlichen zentralen Hochland.", hu: "Gránitmasszívum a déli központi felföldön.", ro: "Masiv granitic în platoul central sudic.", en: "Granitic massif in the southern central highlands." },
    facts: {
      de: ["Bekannt für schroffe Gipfel.", "Enthält den Pic Boby."],
      hu: ["Meredek csúcsairól ismert.", "Itt található a Pic Boby."],
      ro: ["Cunoscut pentru vârfurile abrupte.", "Include vârful Pic Boby."],
      en: ["Known for rugged peaks.", "Contains Pic Boby."]
    }
  },
  {
    id: "pic-boby-relief-v2",
    type: "mountain",
    parent: "MG-H",
    coords: [46.897, -22.128],
    name: { de: "Pic Boby", hu: "Pic Boby", ro: "Pic Boby", en: "Pic Boby" },
    description: { de: "Der zweithöchste Gipfel Madagaskars.", hu: "Madagaszkár második legmagasabb csúcsa.", ro: "Al doilea cel mai înalt vârf din Madagascar.", en: "The second-highest peak in Madagascar." },
    facts: {
      de: ["Höhe ca. 2.658 Meter.", "Beliebt bei Bergsteigern."],
      hu: ["Magassága kb. 2658 méter.", "Kedvelt a hegymászók körében."],
      ro: ["Altitudinea de aprox. 2.658 metri.", "Popular printre alpiniști."],
      en: ["Elevation approx. 2,658 meters.", "Popular with climbers."]
    }
  },
  {
    id: "bemaraha-plateau-relief-v2",
    type: "relief",
    parent: "MG-M",
    coords: [44.75, -18.75],
    name: { de: "Bemaraha-Plateau", hu: "Bemaraha-fennsík", ro: "Platoul Bemaraha", en: "Bemaraha Plateau" },
    description: { de: "Ein zerklüftetes Kalksteinplateau im Westen.", hu: "Tagolt mészkőfennsík nyugaton.", ro: "Un platou calcaros accidentat în vest.", en: "A rugged limestone plateau in the west." },
    facts: {
      de: ["Berühmt für seine 'Tsingy' (Karstformationen).", "UNESCO-Welterbe."],
      hu: ["Híres 'Tsingy' (karsztformák) képződményeiről.", "UNESCO világörökség."],
      ro: ["Faimos pentru formele sale carstice 'Tsingy'.", "Patrimoniul mondial UNESCO."],
      en: ["Famous for its 'Tsingy' (karst formations).", "UNESCO World Heritage Site."]
    }
  },
  {
    id: "central-highlands-relief-v2",
    type: "relief",
    parent: "MG-V",
    coords: [47.5, -19.5],
    name: { de: "Zentrales Hochland", hu: "Központi felföld", ro: "Platoul central", en: "Central Highlands" },
    description: { de: "Die zentrale Bergregion, die die Insel in zwei Hälften teilt.", hu: "A központi hegyvidék, amely két részre osztja a szigetet.", ro: "Regiunea muntoasă centrală care împarte insula în două.", en: "The central mountain region dividing the island." },
    facts: {
      de: ["Durchschnittliche Höhe um 1.000 Meter.", "Dicht besiedeltes Kernland."],
      hu: ["Átlagos magasság 1000 méter körül.", "Sűrűn lakott központi terület."],
      ro: ["Altitudinea medie în jur de 1.000 metri.", "Zona centrală dens populată."],
      en: ["Average elevation around 1,000 meters.", "Densely populated heartland."]
    }
  },
  {
    id: "isalo-plateau-relief-v2",
    type: "relief",
    parent: "MG-I",
    coords: [45.1, -22.6],
    name: { de: "Isalo-Plateau", hu: "Isalo-fennsík", ro: "Platoul Isalo", en: "Isalo Plateau" },
    description: { de: "Ein Sandsteinplateau im Südwesten.", hu: "Homokkőfennsík délnyugaton.", ro: "Un platou de gresie în sud-vest.", en: "A sandstone plateau in the southwest." },
    facts: {
      de: ["Bekannt für Canyons und Schluchten.", "Jurassische Sandsteinformationen."],
      hu: ["Kanyonjairól és szakadékairól híres.", "Jura kori homokkő formációk."],
      ro: ["Cunoscut pentru canioane și prăpăstii.", "Formațiuni de gresie din Jurasic."],
      en: ["Known for canyons and gorges.", "Jurassic sandstone formations."]
    }
  },
  {
    id: "analavelona-forest-relief-v2",
    type: "forest",
    parent: "MG-A",
    coords: [44.2, -22.7],
    name: { de: "Analavelona-Wald", hu: "Analavelona-erdő", ro: "Pădurea Analavelona", en: "Analavelona Forest" },
    description: { de: "Ein einzigartiges Waldgebiet im trockenen Südwesten.", hu: "Egyedülálló erdőség a száraz délnyugaton.", ro: "O zonă forestieră unică în sud-vestul arid.", en: "A unique forest area in the dry southwest." },
    facts: {
      de: ["Trockenwald-Refugium.", "Höhenlage um 1.000 Meter."],
      hu: ["Szárazerdő-menedék.", "1000 méter körüli magasság."],
      ro: ["Refugiu de pădure uscată.", "Altitudine în jur de 1.000 metri."],
      en: ["Dry forest refuge.", "Elevation around 1,000 meters."]
    }
  },
  {
    id: "sahafary-forest-relief-v2",
    type: "forest",
    parent: "MG-D",
    coords: [49.5, -13.0],
    name: { de: "Sahafary-Wald", hu: "Sahafary-erdő", ro: "Pădurea Sahafary", en: "Sahafary Forest" },
    description: { de: "Ein Waldgebiet im Norden Madagaskars.", hu: "Erdőterület Madagaszkár északi részén.", ro: "O zonă forestieră în nordul Madagascarului.", en: "A forest area in northern Madagascar." },
    facts: {
      de: ["Reich an Biodiversität.", "Teil des tropischen Regenwaldgürtels."],
      hu: ["Gazdag biodiverzitás.", "A trópusi esőerdő-öv része."],
      ro: ["Bogată în biodiversitate.", "Parte a centurii de păduri tropicale."],
      en: ["Rich in biodiversity.", "Part of the tropical rainforest belt."]
    }
  },
  {
    id: "montagne-dambre-relief-v2",
    type: "mountain",
    parent: "MG-D",
    coords: [49.1667, -12.5167],
    name: { de: "Montagne d'Ambre", hu: "Montagne d'Ambre", ro: "Montagne d'Ambre", en: "Montagne d'Ambre" },
    description: { de: "Ein vulkanisches Massiv im extremen Norden.", hu: "Vulkáni hegység az északi végvidéken.", ro: "Un masiv vulcanic în extremul nord.", en: "A volcanic massif in the extreme north." },
    facts: {
      de: ["Höhe bis zu 1.475 Meter.", "Nationalpark-Gebiet."],
      hu: ["Magassága 1475 méter.", "Nemzeti park terület."],
      ro: ["Înălțime de până la 1.475 metri.", "Zonă de parc național."],
      en: ["Elevation up to 1,475 meters.", "National park area."]
    }
  },
  {
    id: "makay-massif-relief-v2",
    type: "relief",
    parent: "MG-M",
    coords: [45.1667, -21.2],
    name: { de: "Makay-Massiv", hu: "Makay-hegység", ro: "Masivul Makay", en: "Makay Massif" },
    description: { de: "Ein extrem zerklüftetes Sandsteingebirge.", hu: "Rendkívül tagolt homokkőhegység.", ro: "Un lanț muntos de gresie extrem de accidentat.", en: "An extremely rugged sandstone mountain range." },
    facts: {
      de: ["Labyrinth aus Schluchten.", "Schwer zugänglich."],
      hu: ["Szakadékok labirintusa.", "Nehezen megközelíthető."],
      ro: ["Labirint de canioane.", "Greu accesibil."],
      en: ["Labyrinth of canyons.", "Difficult to access."]
    }
  },
  {
    id: "karambony-peak-relief-v2",
    type: "mountain",
    parent: "MG-H",
    coords: [46.85, -22.1],
    name: { de: "Karambony", hu: "Karambony", ro: "Karambony", en: "Karambony" },
    description: { de: "Ein bekannter Berg im Andringitra-Massiv.", hu: "Ismert hegy az Andringitra-hegységben.", ro: "Un munte cunoscut în masivul Andringitra.", en: "A known mountain in the Andringitra Massif." },
    facts: {
      de: ["Steile Granitwände.", "Herausforderung für Kletterer."],
      hu: ["Meredek gránitfalak.", "Kihívás a hegymászók számára."],
      ro: ["Pereți abrupți de granit.", "Provocare pentru alpiniști."],
      en: ["Steep granite walls.", "Challenge for climbers."]
    }
  },
  {
    id: "analamera-relief-v2",
    type: "relief",
    parent: "MG-D",
    coords: [49.4, -12.75],
    name: { de: "Analamera", hu: "Analamera", ro: "Analamera", en: "Analamera" },
    description: { de: "Ein Kalkstein-Massiv im Norden.", hu: "Mészkőhegység az északi részen.", ro: "Un masiv calcaros în nord.", en: "A limestone massif in the north." },
    facts: {
      de: ["Kleine Tsingy-Formationen.", "Schutzgebiet."],
      hu: ["Kisebb Tsingy-képződmények.", "Védett terület."],
      ro: ["Mici formațiuni Tsingy.", "Zonă protejată."],
      en: ["Small Tsingy formations.", "Protected area."]
    }
  },
  {
    id: "marojejy-massif-relief-v2",
    type: "mountain",
    parent: "MG-S",
    coords: [49.75, -14.4333],
    name: { de: "Marojejy-Massiv", hu: "Marojejy-hegység", ro: "Masivul Marojejy", en: "Marojejy Massif" },
    description: { de: "Ein beeindruckendes Gebirgsmassiv im Nordosten.", hu: "Lenyűgöző hegység az északkeleti részen.", ro: "Un masiv muntos impresionant în nord-est.", en: "An impressive mountain massif in the northeast." },
    facts: {
      de: ["Sehr steil und feucht.", "Reicher Regenwald."],
      hu: ["Nagyon meredek és párás.", "Gazdag esőerdő."],
      ro: ["Foarte abrupt și umed.", "Pădure tropicală bogată."],
      en: ["Very steep and humid.", "Rich rainforest."]
    }
  },
  {
    id: "boby-peak-foothills-relief-v2",
    type: "relief",
    parent: "MG-H",
    coords: [46.9, -22.15],
    name: { de: "Pic Boby Vorland", hu: "Pic Boby előhegység", ro: "Piemontul Pic Boby", en: "Pic Boby Foothills" },
    description: { de: "Die hügelige Region um das Andringitra-Massiv.", hu: "Az Andringitra-hegységet övező dombvidék.", ro: "Regiunea deluroasă din jurul masivului Andringitra.", en: "The hilly region surrounding the Andringitra Massif." },
    facts: {
      de: ["Übergang zum Hochland.", "Wandergebiet."],
      hu: ["Átmenet a felföld felé.", "Túrázóhely."],
      ro: ["Tranziție spre platou.", "Zonă de drumeții."],
      en: ["Transition to the highlands.", "Hiking area."]
    }
  },
  {
    id: "manongarivo-massif-relief-v2",
    type: "mountain",
    parent: "MG-M",
    coords: [48.45, -14.05],
    name: { de: "Manongarivo-Massiv", hu: "Manongarivo-hegység", ro: "Masivul Manongarivo", en: "Manongarivo Massif" },
    description: { de: "Ein vulkanisches Massiv im Nordwesten.", hu: "Vulkáni hegység északnyugaton.", ro: "Un masiv vulcanic în nord-vest.", en: "A volcanic massif in the northwest." },
    facts: {
      de: ["Wichtiges Naturschutzgebiet.", "Steile Hänge."],
      hu: ["Fontos természetvédelmi terület.", "Meredek lejtők."],
      ro: ["Zonă importantă de conservare.", "Pante abrupte."],
      en: ["Important nature reserve.", "Steep slopes."]
    }
  },
  {
    id: "tsaratanana-foothills-relief-v2",
    type: "relief",
    parent: "MG-M",
    coords: [48.8, -14.1],
    name: { de: "Tsaratanana Vorland", hu: "Tsaratanana előhegység", ro: "Piemontul Tsaratanana", en: "Tsaratanana Foothills" },
    description: { de: "Die sanfteren Hügel um das höchste Massiv.", hu: "A legmagasabb hegységet övező lankásabb dombok.", ro: "Dealurile mai blânde din jurul celui mai înalt masiv.", en: "The gentler hills surrounding the highest massif." },
    facts: {
      de: ["Gefälle zum Küstenland.", "Feuchttropisches Klima."],
      hu: ["Lejtők a partvidék felé.", "Nedves trópusi klíma."],
      ro: ["Pantă spre zona de coastă.", "Climat tropical umed."],
      en: ["Slope toward the coast.", "Humid tropical climate."]
    }
  },
  {
    id: "ankarana-karst-relief-v2",
    type: "relief",
    parent: "MG-D",
    coords: [49.1, -12.9],
    name: { de: "Ankarana-Karst", hu: "Ankarana-karszt", ro: "Carstul Ankarana", en: "Ankarana Karst" },
    description: { de: "Ein komplexes Kalksteinsystem im hohen Norden.", hu: "Komplex mészkőrendszer az északi részen.", ro: "Un sistem calcaros complex în extremul nord.", en: "A complex limestone system in the far north." },
    facts: {
      de: ["Große Höhlensysteme.", "Unterirdische Flüsse."],
      hu: ["Nagy barlangrendszerek.", "Föld alatti folyók."],
      ro: ["Sisteme mari de peșteri.", "Râuri subterane."],
      en: ["Large cave systems.", "Underground rivers."]
    }
  },
  {
    id: "vohimana-relief-v2",
    type: "forest",
    parent: "MG-A",
    coords: [48.5, -19.0],
    name: { de: "Vohimana", hu: "Vohimana", ro: "Vohimana", en: "Vohimana" },
    description: { de: "Ein Waldgebiet im östlichen Hochland-Rand.", hu: "Erdőterület a keleti felföld peremén.", ro: "O zonă forestieră la marginea platoului estic.", en: "A forest area at the edge of the eastern highlands." },
    facts: {
      de: ["Zwischen Hochland und Küste.", "Hohe Niederschläge."],
      hu: ["A felföld és a partvidék között.", "Magas csapadék."],
      ro: ["Între platou și coastă.", "Precipitații ridicate."],
      en: ["Between highlands and coast.", "High rainfall."]
    }
  },
  {
    id: "ranomafana-hills-relief-v2",
    type: "relief",
    parent: "MG-F",
    coords: [47.4, -21.2],
    name: { de: "Ranomafana-Hügel", hu: "Ranomafana-dombság", ro: "Dealurile Ranomafana", en: "Ranomafana Hills" },
    description: { de: "Hügelland in der Region um den Nationalpark.", hu: "Dombvidék a nemzeti park körül.", ro: "Ținut deluros în regiunea parcului național.", en: "Hilly land in the region around the national park." },
    facts: {
      de: ["Bewaldete Täler.", "Zerklüftetes Relief."],
      hu: ["Erdős völgyek.", "Tagolt felszín."],
      ro: ["Văi împădurite.", "Relief accidentat."],
      en: ["Forested valleys.", "Rugged relief."]
    }
  },
  {
    id: "andohahela-massif-relief-v2",
    type: "mountain",
    parent: "MG-T",
    coords: [46.75, -24.55],
    name: { de: "Andohahela-Massiv", hu: "Andohahela-hegység", ro: "Masivul Andohahela", en: "Andohahela Massif" },
    description: { de: "Ein Gebirgsmassiv im extremen Süden.", hu: "Hegység az extrém déli részen.", ro: "Un masiv muntos în extremul sud.", en: "A mountain massif in the extreme south." },
    facts: {
      de: ["Übergang von Regenwald zu Dornbusch.", "Einzigartige Ökologie."],
      hu: ["Átmenet az esőerdőtől a bozótosig.", "Egyedülálló ökológia."],
      ro: ["Tranziție de la pădure tropicală la tufișuri.", "Ecologie unică."],
      en: ["Transition from rainforest to thorn bush.", "Unique ecology."]
    }
  },
  {
    id: "tsitondroina-relief-v2",
    type: "mountain",
    parent: "MG-H",
    coords: [47.1, -21.6],
    name: { de: "Tsitondroina", hu: "Tsitondroina", ro: "Tsitondroina", en: "Tsitondroina" },
    description: { de: "Ein markanter Berg im zentralen Hochland.", hu: "Jellegzetes hegy a központi felföldön.", ro: "Un munte proeminent în platoul central.", en: "A prominent mountain in the central highlands." },
    facts: {
      de: ["Bekannter Aussichtspunkt.", "Teil der zentralen Kette."],
      hu: ["Ismert kilátópont.", "A központi lánc része."],
      ro: ["Punct de belvedere cunoscut.", "Parte a lanțului central."],
      en: ["Known viewpoint.", "Part of the central chain."]
    }
  },
  {
    id: "itasy-volcanic-field-relief-v2",
    type: "mountain",
    parent: "MG-IT",
    coords: [46.7, -19.1],
    name: { de: "Itasy-Vulkangebiet", hu: "Itasy-vulkáni terület", ro: "Zona vulcanică Itasy", en: "Itasy Volcanic Field" },
    description: { de: "Eine Region geprägt durch vulkanische Krater und Seen.", hu: "Vulkáni kráterek és tavak által formált régió.", ro: "O regiune marcată de cratere vulcanice și lacuri.", en: "A region shaped by volcanic craters and lakes." },
    facts: {
      de: ["Zahlreiche Kraterseen.", "Aktive geologische Vergangenheit."],
      hu: ["Számos krátertó.", "Aktív geológiai múlt."],
      ro: ["Numeroase lacuri crater.", "Trecut geologic activ."],
      en: ["Numerous crater lakes.", "Active geological past."]
    }
  }
];
