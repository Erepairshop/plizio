import type { POI } from "./poi";

export const poiExtraNamibiaLifeV2: POI[] = [
  {
    id: "namibia-etosha-animal-habitat-life-v2",
    type: "animal-habitat",
    parent: "NA-OH",
    coords: [15.90, -18.80],
    name: { de: "Etosha Nationalpark", hu: "Etosha Nemzeti Park", ro: "Parcul Național Etosha", en: "Etosha National Park" },
    description: { de: "Eines der bedeutendsten Schutzgebiete für Wildtiere in Namibia.", hu: "Namíbia egyik legjelentősebb vadvédelmi területe.", ro: "Una dintre cele mai importante zone protejate pentru animale sălbatice din Namibia.", en: "One of the most significant wildlife sanctuaries in Namibia." },
    facts: {
      de: ["Bekannt für seine Salzpfanne", "Beheimatet Elefanten und Löwen", "Beste Beobachtung an Wasserlöchern", "Große Artenvielfalt"],
      hu: ["A sóstaváról ismert", "Elefántok és oroszlánok otthona", "Legjobb megfigyelés a vízlelőhelyeken", "Gazdag fajdiverzitás"],
      ro: ["Cunoscut pentru lacul său sărat", "Găzduiește elefanți și lei", "Cea mai bună observare la găurile de apă", "Biodiversitate bogată"],
      en: ["Known for its salt pan", "Home to elephants and lions", "Best viewing at waterholes", "Rich biodiversity"]
    }
  },
  {
    id: "namibia-namib-animal-habitat-life-v2",
    type: "animal-habitat",
    parent: "NA-ER",
    coords: [15.00, -24.00],
    name: { de: "Namib-Naukluft Park", hu: "Namib-Naukluft Park", ro: "Parcul Namib-Naukluft", en: "Namib-Naukluft Park" },
    description: { de: "Ein riesiges Schutzgebiet in der ältesten Wüste der Welt.", hu: "Hatalmas védett terület a világ legrégebbi sivatagában.", ro: "O vastă zonă protejată în cel mai vechi deșert din lume.", en: "A vast protected area in the world's oldest desert." },
    facts: {
      de: ["Älteste Wüste der Erde", "Bekannt für Sossusvlei", "Heimat für angepasste Oryxantilopen", "Spektakuläre Sanddünen"],
      hu: ["A Föld legidősebb sivataga", "A Sossusvlei-ről ismert", "Alkalmazkodott oryxantilopok otthona", "Látványos homokdűnék"],
      ro: ["Cel mai vechi deșert de pe Pământ", "Cunoscut pentru Sossusvlei", "Casă pentru antilope oryx adaptate", "Dune de nisip spectaculoase"],
      en: ["World's oldest desert", "Known for Sossusvlei", "Home to adapted oryx", "Spectacular sand dunes"]
    }
  },
  {
    id: "namibia-waterberg-animal-habitat-life-v2",
    type: "animal-habitat",
    parent: "NA-OH",
    coords: [17.25, -20.50],
    name: { de: "Waterberg Plateau Park", hu: "Waterberg-fennsík Park", ro: "Parcul Podișului Waterberg", en: "Waterberg Plateau Park" },
    description: { de: "Ein isoliertes Plateau mit reicher Flora und gefährdeten Tierarten.", hu: "Egy elszigetelt fennsík gazdag növényvilággal és veszélyeztetett fajokkal.", ro: "Un platou izolat cu floră bogată și specii de animale pe cale de dispariție.", en: "An isolated plateau with rich flora and endangered animal species." },
    facts: {
      de: ["Schutz für Breitmaulnashörner", "Schutz für Geparden", "Historische Felsformationen", "Vielfältige Vogelwelt"],
      hu: ["Szélesszájú orrszarvú menedéke", "Gepárdok védelme", "Történelmi sziklaformációk", "Változatos madárvilág"],
      ro: ["Protecție pentru rinocerii albi", "Protecție pentru ghepazi", "Formațiuni stâncoase istorice", "Avifaună diversă"],
      en: ["Sanctuary for white rhinos", "Cheetah conservation", "Historical rock formations", "Diverse birdlife"]
    }
  },
  {
    id: "namibia-cape-cross-animal-habitat-life-v2",
    type: "animal-habitat",
    parent: "NA-ER",
    coords: [14.45, -21.75],
    name: { de: "Cape Cross Robbenreservat", hu: "Cape Cross Fókarezervátum", ro: "Rezervația de foci Cape Cross", en: "Cape Cross Seal Reserve" },
    description: { de: "Eine der weltweit größten Kolonien von Seebären.", hu: "A világ egyik legnagyobb medvefóka-kolóniája.", ro: "Una dintre cele mai mari colonii de foci cu blană din lume.", en: "One of the world's largest colonies of fur seals." },
    facts: {
      de: ["Zehntausende Seebären", "Historisches Kreuz-Denkmal", "An der Skelettküste", "Herausforderndes Klima"],
      hu: ["Tízezernyi medvefóka", "Történelmi kereszt-emlékmű", "A Csontvázparton", "Kihívást jelentő klíma"],
      ro: ["Zeci de mii de foci cu blană", "Monument istoric în formă de cruce", "Pe Coasta Scheletelor", "Climat dificil"],
      en: ["Tens of thousands of seals", "Historical cross monument", "On the Skeleton Coast", "Challenging climate"]
    }
  },
  {
    id: "namibia-hardap-agriculture-life-v2",
    type: "agriculture",
    parent: "NA-HA",
    coords: [17.85, -24.48],
    name: { de: "Hardap Staudamm Region", hu: "Hardap-gát Régió", ro: "Regiunea Barajului Hardap", en: "Hardap Dam Region" },
    description: { de: "Ein wichtiges landwirtschaftliches Bewässerungsgebiet in Zentralnamibia.", hu: "Fontos mezőgazdasági öntözési terület Közép-Namíbiában.", ro: "O zonă importantă de irigații agricole din Namibia centrală.", en: "An important agricultural irrigation area in central Namibia." },
    facts: {
      de: ["Größter Staudamm Namibias", "Gemüseanbau in der Wüste", "Fischzucht", "Erholung am Wasser"],
      hu: ["Namíbia legnagyobb gátja", "Zöldségtermesztés a sivatagban", "Halászat", "Pihenés a víznél"],
      ro: ["Cel mai mare baraj din Namibia", "Cultivarea legumelor în deșert", "Piscicultură", "Recreere pe malul apei"],
      en: ["Largest dam in Namibia", "Vegetable farming in the desert", "Fish farming", "Water recreation"]
    }
  },
  {
    id: "namibia-tsumeb-agriculture-life-v2",
    type: "agriculture",
    parent: "NA-OS",
    coords: [17.72, -19.23],
    name: { de: "Tsumeb Farmregion", hu: "Tsumeb Mezőgazdasági Régió", ro: "Regiunea Agricolă Tsumeb", en: "Tsumeb Farm Region" },
    description: { de: "Fruchtbare Region für Viehzucht und Ackerbau.", hu: "Termékeny régió állattenyésztéshez és szántóföldi gazdálkodáshoz.", ro: "Regiune fertilă pentru creșterea animalelor și agricultură.", en: "Fertile region for livestock farming and agriculture." },
    facts: {
      de: ["Bekannt für Viehbetriebe", "Getreideanbau", "Relativ hohe Niederschläge", "Grüne Landschaft"],
      hu: ["Ismert állattartó gazdaságairól", "Gabonatermesztés", "Viszonylag magas csapadék", "Zöld táj"],
      ro: ["Cunoscută pentru fermele de animale", "Cultivarea cerealelor", "Precipitații relativ ridicate", "Peisaj verde"],
      en: ["Known for livestock farms", "Grain farming", "Relatively high rainfall", "Green landscape"]
    }
  },
  {
    id: "namibia-gobabis-agriculture-life-v2",
    type: "agriculture",
    parent: "NA-OH",
    coords: [19.00, -22.45],
    name: { de: "Gobabis Rinderregion", hu: "Gobabis Marhatenyésztő Régió", ro: "Regiunea creșterii bovinelor Gobabis", en: "Gobabis Cattle Region" },
    description: { de: "Das Zentrum der namibischen Rinderzucht.", hu: "A namíbiai marhatenyésztés központja.", ro: "Centrul creșterii bovinelor din Namibia.", en: "The center of Namibian cattle farming." },
    facts: {
      de: ["Hauptort der Rinderwirtschaft", "Große Weideflächen", "Export von Rindfleisch", "Sandige Böden"],
      hu: ["A marhatenyésztés központja", "Hatalmas legelők", "Marhahús-export", "Homokos talajok"],
      ro: ["Centrul creșterii bovinelor", "Pășuni vaste", "Export de carne de vită", "Soluri nisipoase"],
      en: ["Hub of cattle industry", "Vast grazing lands", "Beef export", "Sandy soils"]
    }
  },
  {
    id: "namibia-windhoek-kid-landmark-life-v2",
    type: "kid-landmark",
    parent: "NA-KH",
    coords: [17.08, -22.56],
    name: { de: "Windhoek Kinderpark", hu: "Windhoek Gyermekpark", ro: "Parcul pentru copii Windhoek", en: "Windhoek Children's Park" },
    description: { de: "Ein beliebter Ort für Familien und Kinder in der Hauptstadt.", hu: "Népszerű hely családoknak és gyerekeknek a fővárosban.", ro: "Un loc popular pentru familii și copii în capitală.", en: "A popular place for families and children in the capital." },
    facts: {
      de: ["Spielplätze", "Picknickbereiche", "Sicherer Freizeitraum", "Zentral gelegen"],
      hu: ["Játszóterek", "Piknikhelyek", "Biztonságos szabadidős tér", "Központi elhelyezkedés"],
      ro: ["Locuri de joacă", "Zone de picnic", "Spațiu de recreere sigur", "Amplasare centrală"],
      en: ["Playgrounds", "Picnic areas", "Safe recreational space", "Centrally located"]
    }
  },
  {
    id: "namibia-swakopmund-kid-landmark-life-v2",
    type: "kid-landmark",
    parent: "NA-ER",
    coords: [14.53, -22.68],
    name: { de: "Swakopmund Aquarium", hu: "Swakopmund Akvárium", ro: "Acvariul din Swakopmund", en: "Swakopmund Aquarium" },
    description: { de: "Ein spannendes Erlebnis für Kinder zur Entdeckung der Meereswelt.", hu: "Izgalmas élmény gyerekeknek a tengeri élővilág felfedezésére.", ro: "O experiență captivantă pentru copii de a descoperi lumea marină.", en: "An exciting experience for kids to discover marine life." },
    facts: {
      de: ["Beobachtungstunnel", "Lokale Fischarten", "Bildungsprogramme", "Am Atlantik gelegen"],
      hu: ["Megfigyelő alagút", "Helyi halfajok", "Oktatási programok", "Az Atlanti-óceán partján"],
      ro: ["Tunel de observare", "Specii de pești locali", "Programe educaționale", "Situat la Atlantic"],
      en: ["Observation tunnel", "Local fish species", "Educational programs", "Located by the Atlantic"]
    }
  },
  {
    id: "namibia-okahandja-kid-landmark-life-v2",
    type: "kid-landmark",
    parent: "NA-OH",
    coords: [16.92, -21.98],
    name: { de: "Okahandja Holzmarkt", hu: "Okahandja Fafaragó Piac", ro: "Piața de sculpturi în lemn Okahandja", en: "Okahandja Woodcarving Market" },
    description: { de: "Ein interessanter Ort, an dem Kinder traditionelles Handwerk bestaunen können.", hu: "Érdekes hely, ahol a gyerekek hagyományos kézművességet csodálhatnak meg.", ro: "Un loc interesant unde copiii pot admira artizanatul tradițional.", en: "An interesting place where children can admire traditional craftsmanship." },
    facts: {
      de: ["Traditionelle Schnitzereien", "Souvenirs", "Einblick in Kunst", "Kulturelles Zentrum"],
      hu: ["Hagyományos fafaragások", "Ajándéktárgyak", "Betekintés a művészetbe", "Kulturális központ"],
      ro: ["Sculpturi tradiționale", "Suveniruri", "O privire în artă", "Centru cultural"],
      en: ["Traditional carvings", "Souvenirs", "Insight into art", "Cultural hub"]
    }
  },
  {
    id: "namibia-bwabwata-animal-habitat-life-v2",
    type: "animal-habitat",
    parent: "NA-ZK",
    coords: [22.00, -18.00],
    name: { de: "Bwabwata Nationalpark", hu: "Bwabwata Nemzeti Park", ro: "Parcul Național Bwabwata", en: "Bwabwata National Park" },
    description: { de: "Ein einzigartiges Gebiet mit Wildwechsel in der Sambesi-Region.", hu: "Egyedülálló terület vadvándorlással a Zambézi régióban.", ro: "O zonă unică cu migrația animalelor în regiunea Zambezi.", en: "A unique area with wildlife migration in the Zambezi region." },
    facts: {
      de: ["Teil des KAZA-Parks", "Elefantenkorridor", "Reiche Vegetation", "Flusslandschaften"],
      hu: ["A KAZA-park része", "Elefántfolyosó", "Gazdag növényzet", "Folyóparti tájak"],
      ro: ["Parte a parcului KAZA", "Coridor pentru elefanți", "Vegetație bogată", "Peisaje fluviale"],
      en: ["Part of KAZA park", "Elephant corridor", "Rich vegetation", "Riverine landscapes"]
    }
  },
  {
    id: "namibia-mudumu-animal-habitat-life-v2",
    type: "animal-habitat",
    parent: "NA-ZK",
    coords: [23.40, -18.15],
    name: { de: "Mudumu Nationalpark", hu: "Mudumu Nemzeti Park", ro: "Parcul Național Mudumu", en: "Mudumu National Park" },
    description: { de: "Ein Sumpf- und Waldgebiet reich an Großwild.", hu: "Nagyvadban gazdag mocsaras és erdős terület.", ro: "O zonă mlăștinoasă și împădurită bogată în vânat mare.", en: "A swamp and forest area rich in big game." },
    facts: {
      de: ["Am Kwando-Fluss", "Elefanten und Büffel", "Seltene Antilopen", "Ökotourismus"],
      hu: ["A Kwando folyónál", "Elefántok és bivalyok", "Ritka antilopok", "Ökoturizmus"],
      ro: ["La râul Kwando", "Elefanți și bivoli", "Antilope rare", "Ecoturism"],
      en: ["On the Kwando river", "Elephants and buffalo", "Rare antelopes", "Ecotourism"]
    }
  },
  {
    id: "namibia-dorob-animal-habitat-life-v2",
    type: "animal-habitat",
    parent: "NA-ER",
    coords: [14.60, -22.75],
    name: { de: "Dorob Nationalpark", hu: "Dorob Nemzeti Park", ro: "Parcul Național Dorob", en: "Dorob National Park" },
    description: { de: "Ein Küstenpark, bekannt für seine Wüstenökologie.", hu: "Parti park, ismert a sivatagi ökológiájáról.", ro: "Un parc de coastă, cunoscut pentru ecologia sa deșertică.", en: "A coastal park, known for its desert ecology." },
    facts: {
      de: ["Küsten-Dünenlandschaft", "Zugvögel", "Wüstenpflanzen", "Sportfischen"],
      hu: ["Parti dűnetáj", "Vándormadarak", "Sivatagi növények", "Sporthorgászat"],
      ro: ["Peisaj de dune de coastă", "Păsări migratoare", "Plante de deșert", "Pescuit sportiv"],
      en: ["Coastal dune landscape", "Migratory birds", "Desert plants", "Sport fishing"]
    }
  },
  {
    id: "namibia-kavango-agriculture-life-v2",
    type: "agriculture",
    parent: "NA-KV",
    coords: [19.70, -18.00],
    name: { de: "Kavango Farmregion", hu: "Kavango Mezőgazdasági Régió", ro: "Regiunea Agricolă Kavango", en: "Kavango Farm Region" },
    description: { de: "Landwirtschaftliche Siedlungen entlang des Kavango-Flusses.", hu: "Mezőgazdasági települések a Kavango folyó mentén.", ro: "Așezări agricole de-a lungul râului Kavango.", en: "Agricultural settlements along the Kavango river." },
    facts: {
      de: ["Subsistenzwirtschaft", "Mais- und Hirseanbau", "Fischfang", "Flussnahes Leben"],
      hu: ["Önellátó gazdálkodás", "Kukorica- és kölestermesztés", "Halászat", "Folyómenti élet"],
      ro: ["Agricultură de subzistență", "Cultivarea porumbului și a meiului", "Pescuit", "Viață pe malul râului"],
      en: ["Subsistence farming", "Maize and millet farming", "Fishing", "Life by the river"]
    }
  },
  {
    id: "namibia-otjiwarongo-agriculture-life-v2",
    type: "agriculture",
    parent: "NA-OS",
    coords: [16.65, -20.46],
    name: { de: "Otjiwarongo Viehregion", hu: "Otjiwarongo Állattartó Régió", ro: "Regiunea creșterii animalelor Otjiwarongo", en: "Otjiwarongo Cattle Region" },
    description: { de: "Zentrum für Viehzucht und landwirtschaftliche Forschung.", hu: "Központ az állattenyésztéshez és mezőgazdasági kutatáshoz.", ro: "Centru pentru creșterea animalelor și cercetare agricolă.", en: "Center for cattle farming and agricultural research." },
    facts: {
      de: ["Geparden-Schutz", "Großviehhaltung", "Wirtschaftliches Zentrum", "Gute Infrastruktur"],
      hu: ["Gepárdvédelem", "Nagyállattartás", "Gazdasági központ", "Jó infrastruktúra"],
      ro: ["Protecția ghepazilor", "Creșterea animalelor mari", "Centru economic", "Infrastructură bună"],
      en: ["Cheetah conservation", "Large cattle farming", "Economic hub", "Good infrastructure"]
    }
  },
  {
    id: "namibia-kalahari-animal-habitat-life-v2",
    type: "animal-habitat",
    parent: "NA-HA",
    coords: [19.50, -24.00],
    name: { de: "Kalahari Wüstenreservat", hu: "Kalahári Sivatagi Rezervátum", ro: "Rezervația deșertului Kalahari", en: "Kalahari Desert Reserve" },
    description: { de: "Ein Teil des Kalahari-Beckens mit spezialisierten Tierarten.", hu: "A Kalahári-medence része specializálódott állatfajokkal.", ro: "O parte a bazinului Kalahari cu specii de animale specializate.", en: "A part of the Kalahari basin with specialized animal species." },
    facts: {
      de: ["Rote Sanddünen", "Springböcke", "Löwen und Erdmännchen", "Trockene Savanne"],
      hu: ["Vörös homokdűnék", "Springbok antilopok", "Oroszlánok és szurikáták", "Száraz szavanna"],
      ro: ["Dune de nisip roșu", "Antilope springbok", "Lei și suricate", "Savana uscată"],
      en: ["Red sand dunes", "Springbok antelopes", "Lions and meerkats", "Dry savanna"]
    }
  },
  {
    id: "namibia-fish-river-animal-habitat-life-v2",
    type: "animal-habitat",
    parent: "NA-KA",
    coords: [17.50, -27.50],
    name: { de: "Fish River Canyon Park", hu: "Fish River Kanyon Park", ro: "Parcul Fish River Canyon", en: "Fish River Canyon Park" },
    description: { de: "Ein gigantischer Canyon mit einzigartiger Tierwelt.", hu: "Gigantikus kanyon egyedülálló vadvilággal.", ro: "Un canion gigantic cu o faună unică.", en: "A gigantic canyon with unique wildlife." },
    facts: {
      de: ["Zweitgrößter Canyon", "Wüstensteinböcke", "Raubvögel", "Spektakuläre Geologie"],
      hu: ["Második legnagyobb kanyon", "Sivatagi sziklakecskék", "Ragadozó madarak", "Látványos geológia"],
      ro: ["Al doilea mare canion", "Antilope de stâncă", "Păsări răpitoare", "Geologie spectaculoasă"],
      en: ["Second largest canyon", "Desert klipspringers", "Birds of prey", "Spectacular geology"]
    }
  },
  {
    id: "namibia-mariental-agriculture-life-v2",
    type: "agriculture",
    parent: "NA-HA",
    coords: [17.96, -24.63],
    name: { de: "Mariental Agrarzentrum", hu: "Mariental Agrárközpont", ro: "Centrul Agricol Mariental", en: "Mariental Agricultural Hub" },
    description: { de: "Zentrum für Bewässerungsfeldbau und Viehwirtschaft.", hu: "Központ az öntözéses földműveléshez és állattenyésztéshez.", ro: "Centru pentru agricultura irigată și creșterea animalelor.", en: "Center for irrigation farming and livestock industry." },
    facts: {
      de: ["Weinbauprojekte", "Schafzucht", "Heißes Wüstenklima", "Bewässerungssysteme"],
      hu: ["Szőlőtermesztési projektek", "Juhtenyésztés", "Forró sivatagi klíma", "Öntözőrendszerek"],
      ro: ["Proiecte viticole", "Creșterea oilor", "Climat deșertic fierbinte", "Sisteme de irigații"],
      en: ["Viticulture projects", "Sheep farming", "Hot desert climate", "Irrigation systems"]
    }
  },
  {
    id: "namibia-outjo-agriculture-life-v2",
    type: "agriculture",
    parent: "NA-OS",
    coords: [16.15, -20.12],
    name: { de: "Outjo Landwirtschaftsgebiet", hu: "Outjo Mezőgazdasági Terület", ro: "Zona Agricolă Outjo", en: "Outjo Farming Area" },
    description: { de: "Wichtige Region für Viehhandel und Landwirtschaft.", hu: "Fontos régió állatkereskedelemhez és mezőgazdasághoz.", ro: "Regiune importantă pentru comerțul cu animale și agricultură.", en: "Important region for livestock trade and farming." },
    facts: {
      de: ["Viehmärkte", "Gemüse- und Obstbau", "Zugang zum Etosha-Park", "Landwirtschaftliche Messen"],
      hu: ["Állatvásárok", "Zöldség- és gyümölcstermesztés", "Hozzáférés az Etosha-parkhoz", "Mezőgazdasági vásárok"],
      ro: ["Piețe de animale", "Legumicultură și pomicultură", "Acces la parcul Etosha", "Târguri agricole"],
      en: ["Livestock markets", "Vegetable and fruit farming", "Access to Etosha park", "Agricultural shows"]
    }
  },
  {
    id: "namibia-rundu-agriculture-life-v2",
    type: "agriculture",
    parent: "NA-KV",
    coords: [19.76, -17.92],
    name: { de: "Rundu Agrarregion", hu: "Rundu Agrárrégió", ro: "Regiunea Agricolă Rundu", en: "Rundu Agricultural Region" },
    description: { de: "Landwirtschaftliche Nutzung am Kavango-Fluss.", hu: "Mezőgazdasági hasznosítás a Kavango folyó mentén.", ro: "Utilizare agricolă pe râul Kavango.", en: "Agricultural use along the Kavango river." },
    facts: {
      de: ["Gemüseanbau an Flussauen", "Fischereikooperativen", "Markthandel", "Tropisches Flair"],
      hu: ["Zöldségtermesztés az ártéren", "Halászati szövetkezetek", "Piacok", "Trópusi hangulat"],
      ro: ["Legumicultură în luncă", "Cooperative de pescuit", "Comerț în piețe", "Atmosferă tropicală"],
      en: ["Vegetable growing in floodplains", "Fishing cooperatives", "Market trading", "Tropical vibe"]
    }
  },
  {
    id: "namibia-sesriem-kid-landmark-life-v2",
    type: "kid-landmark",
    parent: "NA-HA",
    coords: [15.79, -24.49],
    name: { de: "Sesriem Canyon Erlebnis", hu: "Sesriem Kanyon Élmény", ro: "Experiența Canionului Sesriem", en: "Sesriem Canyon Adventure" },
    description: { de: "Ein kindgerechter Ort zur Erkundung von Gesteinsschichten.", hu: "Gyermekbarát hely kőzetrétegek felfedezésére.", ro: "Un loc prietenos pentru copii pentru explorarea straturilor de rocă.", en: "A kid-friendly place to explore rock layers." },
    facts: {
      de: ["Wanderungen im Canyon", "Geologische Entdeckungen", "Kühlender Schatten", "Abenteuerpfade"],
      hu: ["Túrák a kanyonban", "Geológiai felfedezések", "Hűsítő árnyék", "Kalandösvények"],
      ro: ["Drumeții în canion", "Descoperiri geologice", "Umbră răcoritoare", "Trasee de aventură"],
      en: ["Hikes in the canyon", "Geological discoveries", "Cooling shade", "Adventure paths"]
    }
  },
  {
    id: "namibia-walvis-bay-kid-landmark-life-v2",
    type: "kid-landmark",
    parent: "NA-ER",
    coords: [14.50, -22.95],
    name: { de: "Walvis Bay Flamingopark", hu: "Walvis Bay Flamingópark", ro: "Parcul Flamingilor Walvis Bay", en: "Walvis Bay Flamingo Park" },
    description: { de: "Ein Lagunengebiet, berühmt für seine Flamingos.", hu: "Lagunaterület, híres a flamingóiról.", ro: "O zonă de lagună, faimoasă pentru flamingo.", en: "A lagoon area, famous for its flamingos." },
    facts: {
      de: ["Tausende Flamingos", "Beobachtungsplattformen", "Vogelwelt", "Lagunen-Ökosystem"],
      hu: ["Több ezer flamingó", "Megfigyelő platformok", "Madárvilág", "Lagúna-ökoszisztéma"],
      ro: ["Mii de flamingo", "Platforme de observare", "Avifaună", "Ecosistem de lagună"],
      en: ["Thousands of flamingos", "Observation platforms", "Birdlife", "Lagoon ecosystem"]
    }
  },
  {
    id: "namibia-tsumkwe-kid-landmark-life-v2",
    type: "kid-landmark",
    parent: "NA-OT",
    coords: [20.50, -19.60],
    name: { de: "Tsumkwe San-Kulturzentrum", hu: "Tsumkwe San Kulturális Központ", ro: "Centrul Cultural San Tsumkwe", en: "Tsumkwe San Cultural Center" },
    description: { de: "Ein Ort zum Kennenlernen der Traditionen der San.", hu: "Hely a szan hagyományok megismerésére.", ro: "Un loc pentru a cunoaște tradițiile San.", en: "A place to learn about San traditions." },
    facts: {
      de: ["Kultureller Austausch", "Traditionelle Spiele", "Spurensuche-Lernen", "Bildung"],
      hu: ["Kulturális csere", "Hagyományos játékok", "Nyomkeresés-tanulás", "Oktatás"],
      ro: ["Schimb cultural", "Jocuri tradiționale", "Învățarea urmăririi urmelor", "Educație"],
      en: ["Cultural exchange", "Traditional games", "Tracking learning", "Education"]
    }
  },
  {
    id: "namibia-luderitz-kid-landmark-life-v2",
    type: "kid-landmark",
    parent: "NA-KA",
    coords: [15.15, -26.65],
    name: { de: "Lüderitz Koloniale Geschichte", hu: "Lüderitz Gyarmati Történelem", ro: "Istorie Colonială Lüderitz", en: "Lüderitz Colonial History" },
    description: { de: "Eine Hafenstadt mit faszinierender Architektur für Kinder.", hu: "Kikötőváros lenyűgöző építészettel gyerekeknek.", ro: "Oraș portuar cu arhitectură fascinantă pentru copii.", en: "A port town with fascinating architecture for kids." },
    facts: {
      de: ["Historische Gebäude", "Hafenbesichtigung", "Küstenspaziergänge", "Wüstenstadt"],
      hu: ["Történelmi épületek", "Kikötői séta", "Parti séták", "Sivatagi város"],
      ro: ["Clădiri istorice", "Turul portului", "Plimbări pe coastă", "Oraș deșertic"],
      en: ["Historical buildings", "Harbor tour", "Coastal walks", "Desert town"]
    }
  },
  {
    id: "namibia-caprivi-animal-habitat-life-v2",
    type: "animal-habitat",
    parent: "NA-ZK",
    coords: [24.00, -17.50],
    name: { de: "Caprivi Wildtiergebiet", hu: "Caprivi Vadvédelmi Terület", ro: "Zona de faună sălbatică Caprivi", en: "Caprivi Wildlife Area" },
    description: { de: "Ein feuchtes Wildgebiet im Norden Namibias.", hu: "Nedves vadterület Namíbia északon.", ro: "O zonă umedă de faună în nordul Namibiei.", en: "A wet wildlife area in northern Namibia." },
    facts: {
      de: ["Flusslandschaften", "Großwild", "Reiche Flora", "Ökologische Vielfalt"],
      hu: ["Folyóparti tájak", "Nagyvad", "Gazdag növényzet", "Ökológiai változatosság"],
      ro: ["Peisaje fluviale", "Vânat mare", "Floră bogată", "Diversitate ecologică"],
      en: ["River landscapes", "Big game", "Rich flora", "Ecological diversity"]
    }
  },
  {
    id: "namibia-damaraland-animal-habitat-life-v2",
    type: "animal-habitat",
    parent: "NA-ER",
    coords: [14.50, -20.50],
    name: { de: "Damaraland Wüsten-Elefanten", hu: "Damaraland Sivatagi Elefántok", ro: "Elefanții de deșert din Damaraland", en: "Damaraland Desert Elephants" },
    description: { de: "Heimat der seltenen, an die Wüste angepassten Elefanten.", hu: "A ritka, sivataghoz alkalmazkodott elefántok otthona.", ro: "Casa rariilor elefanți adaptați la deșert.", en: "Home to the rare, desert-adapted elephants." },
    facts: {
      de: ["Wüstenangepasste Elefanten", "Felszeichnungen", "Spektakuläre Berglandschaften", "Seltene Tierarten"],
      hu: ["Sivataghoz alkalmazkodott elefántok", "Sziklarajzok", "Látványos hegyi tájak", "Ritka állatfajok"],
      ro: ["Elefanți adaptați la deșert", "Picturi rupestre", "Peisaje montane spectaculoase", "Specii rare de animale"],
      en: ["Desert-adapted elephants", "Rock engravings", "Spectacular mountain landscapes", "Rare animal species"]
    }
  },
  {
    id: "namibia-spitzkoppe-kid-landmark-life-v2",
    type: "kid-landmark",
    parent: "NA-ER",
    coords: [15.17, -21.83],
    name: { de: "Spitzkoppe Abenteuerfels", hu: "Spitzkoppe Kaland-szikla", ro: "Stânca de aventură Spitzkoppe", en: "Spitzkoppe Adventure Rock" },
    description: { de: "Ein Kletterparadies für Kinder und Familien.", hu: "Mászóparadicsom gyerekeknek és családoknak.", ro: "Un paradis al cățărării pentru copii și familii.", en: "A climbing paradise for kids and families." },
    facts: {
      de: ["Natürliche Felsbögen", "Einfache Kletterstellen", "Campingmöglichkeiten", "Wüstenfotografie"],
      hu: ["Természetes sziklaívek", "Könnyű mászóhelyek", "Kempingezési lehetőségek", "Sivatagi fotózás"],
      ro: ["Arcuri de stâncă naturale", "Puncte de cățărare ușoare", "Opțiuni de camping", "Fotografie de deșert"],
      en: ["Natural rock arches", "Easy climbing spots", "Camping options", "Desert photography"]
    }
  },
  {
    id: "namibia-okavango-agriculture-life-v2",
    type: "agriculture",
    parent: "NA-KV",
    coords: [20.00, -17.80],
    name: { de: "Okavango Delta-Nähe Region", hu: "Okavango-delta közeli Régió", ro: "Regiunea din apropierea Deltei Okavango", en: "Okavango Delta Proximity Region" },
    description: { de: "Landwirtschaft an den Ausläufern des Okavango-Flusssystems.", hu: "Mezőgazdaság az Okavango-folyórendszer végződéseinél.", ro: "Agricultură la poalele sistemului fluvial Okavango.", en: "Farming at the foothills of the Okavango river system." },
    facts: {
      de: ["Traditioneller Ackerbau", "Bewässerung durch den Fluss", "Gemüsegärten", "Ländliche Entwicklung"],
      hu: ["Hagyományos szántóföldi gazdálkodás", "Öntözés a folyó által", "Zöldségeskertek", "Vidéki fejlesztés"],
      ro: ["Agricultură tradițională", "Irigare prin râu", "Grădini de legume", "Dezvoltare rurală"],
      en: ["Traditional farming", "Irrigation by the river", "Vegetable gardens", "Rural development"]
    }
  },
  {
    id: "namibia-aus-animal-habitat-life-v2",
    type: "animal-habitat",
    parent: "NA-KA",
    coords: [16.25, -26.66],
    name: { de: "Aus Wüstenpferde-Gebiet", hu: "Aus Sivatagi Lovak Területe", ro: "Zona cailor sălbatici din Aus", en: "Aus Desert Horses Area" },
    description: { de: "Heimat der berühmten wilden Wüstenpferde Namibias.", hu: "Namíbia híres vad sivatagi lovainak otthona.", ro: "Casa celebrelor cai sălbatici de deșert din Namibia.", en: "Home to Namibia's famous wild desert horses." },
    facts: {
      de: ["Wilde Wüstenpferde", "Einsame Wüstenregion", "Beobachtungspunkte", "Spannende Geschichte"],
      hu: ["Vad sivatagi lovak", "Magányos sivatagi régió", "Megfigyelési pontok", "Izgalmas történelem"],
      ro: ["Cai sălbatici de deșert", "Regiune deșertică izolată", "Puncte de observare", "Istorie fascinantă"],
      en: ["Wild desert horses", "Lonely desert region", "Observation points", "Fascinating history"]
    }
  }
];
