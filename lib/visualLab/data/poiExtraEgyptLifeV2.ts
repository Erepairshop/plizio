import type { POI } from "./poi";

export const poiExtraEgyptLifeV2: POI[] = [
  {
    id: "gabalba-national-park-life-v2",
    type: "animal-habitat",
    parent: "EG-RS",
    coords: [36.30, 22.20],
    name: { de: "Gebel Elba Nationalpark", hu: "Gebel Elba Nemzeti Park", ro: "Parcul Național Gebel Elba", en: "Gebel Elba National Park" },
    description: { de: "Ein bedeutendes Schutzgebiet mit einzigartiger Flora und Fauna.", hu: "Jelentős védett terület egyedülálló növény- és állatvilággal.", ro: "O arie protejată semnificativă cu o floră și faună unică.", en: "A significant protected area with unique flora and fauna." },
    facts: {
      de: ["Berühmte Wildtierbeobachtung", "Nebeloasen"],
      hu: ["Híres vadvilág-megfigyelés", "Ködoázisok"],
      ro: ["Observarea faunei sălbatice", "Oaze de ceață"],
      en: ["Famous wildlife viewing", "Mist oases"]
    }
  },
  {
    id: "wadial-rayan-life-v2",
    type: "animal-habitat",
    parent: "EG-FYM",
    coords: [30.40, 29.10],
    name: { de: "Wadi El Rayan Schutzgebiet", hu: "Wadi El Rayan Természetvédelmi Terület", ro: "Rezervația Wadi El Rayan", en: "Wadi El Rayan Protected Area" },
    description: { de: "Lebensraum für die gefährdete Dünengazelle.", hu: "Élőhely a veszélyeztetett dorkás gazella számára.", ro: "Habitat pentru gazela dorcas pe cale de dispariție.", en: "Habitat for the endangered dorcas gazelle." },
    facts: {
      de: ["Dünengazellen", "Wichtige Vogelrastplätze"],
      hu: ["Dorkás gazellák", "Fontos pihenőhelyek a madaraknak"],
      ro: ["Gazele dorcas", "Locuri importante de odihnă pentru păsări"],
      en: ["Dorcas gazelles", "Important bird staging areas"]
    }
  },
  {
    id: "aswan-botanical-life-v2",
    type: "kid-landmark",
    parent: "EG-ASN",
    coords: [32.88, 24.08],
    name: { de: "Kitchener-Insel Botanischer Garten", hu: "Kitchener-sziget Botanikus Kert", ro: "Grădina Botanică de pe Insula Kitchener", en: "Kitchener's Island Botanical Garden" },
    description: { de: "Ein üppiger Garten auf einer Nilinsel in Assuan.", hu: "Dús kert egy nílusi szigeten, Asszuanban.", ro: "O grădină luxuriantă pe o insulă de pe Nil în Assuan.", en: "A lush garden on a Nile island in Aswan." },
    facts: {
      de: ["Exotische Pflanzen", "Perfekt für Kinder"],
      hu: ["Egzotikus növények", "Tökéletes gyermekeknek"],
      ro: ["Plante exotice", "Perfect pentru copii"],
      en: ["Exotic plants", "Perfect for children"]
    }
  },
  {
    id: "nile-delta-agriculture-life-v2",
    type: "agriculture",
    parent: "EG-C",
    coords: [31.00, 30.50],
    name: { de: "Nildelta Landwirtschaftsregion", hu: "Nílus-delta mezőgazdasági régió", ro: "Regiunea agricolă a Deltei Nilului", en: "Nile Delta Agricultural Region" },
    description: { de: "Das Herz der ägyptischen Landwirtschaft.", hu: "Az egyiptomi mezőgazdaság szíve.", ro: "Inima agriculturii egiptene.", en: "The heart of Egyptian agriculture." },
    facts: {
      de: ["Baumwollanbau", "Reis- und Weizenfelder"],
      hu: ["Gyapottermesztés", "Rizs- és búzamezők"],
      ro: ["Cultivarea bumbacului", "Câmpuri de orez și grâu"],
      en: ["Cotton cultivation", "Rice and wheat fields"]
    }
  },
  {
    id: "siwa-palm-agriculture-life-v2",
    type: "agriculture",
    parent: "EG-MT",
    coords: [25.50, 29.20],
    name: { de: "Siwa Dattelplantagen", hu: "Siwa datolyaplantázsok", ro: "Plantațiile de curmali Siwa", en: "Siwa Date Plantations" },
    description: { de: "Berühmte Oasen-Gärten für Datteln und Oliven.", hu: "Híres oáziskertek datolyához és olajbogyóhoz.", ro: "Celebre grădini de oază pentru curmale și măsline.", en: "Famous oasis gardens for dates and olives." },
    facts: {
      de: ["Beste Dattelqualität", "Alte Bewässerungsmethoden"],
      hu: ["A legjobb datolyaminőség", "Régi öntözési módszerek"],
      ro: ["Cea mai bună calitate a curmalelor", "Metode vechi de irigare"],
      en: ["Best date quality", "Ancient irrigation methods"]
    }
  },
  {
    id: "giza-zoo-life-v2",
    type: "kid-landmark",
    parent: "EG-GZ",
    coords: [31.20, 30.01],
    name: { de: "Giza Zoo", hu: "Gízai Állatkert", ro: "Grădina Zoologică Giza", en: "Giza Zoo" },
    description: { de: "Einer der ältesten und größten Zoos in Afrika.", hu: "Afrika egyik legrégebbi és legnagyobb állatkertje.", ro: "Una dintre cele mai vechi și mari grădini zoologice din Africa.", en: "One of the oldest and largest zoos in Africa." },
    facts: {
      de: ["Historische Anlage", "Beliebt bei Familien"],
      hu: ["Történelmi létesítmény", "Népszerű a családok körében"],
      ro: ["Facilitate istorică", "Populară pentru familii"],
      en: ["Historic facility", "Popular with families"]
    }
  },
  {
    id: "faiyum-agriculture-life-v2",
    type: "agriculture",
    parent: "EG-FYM",
    coords: [30.80, 29.40],
    name: { de: "Faiyum Oasen-Agrar", hu: "Faiyum oázis mezőgazdaság", ro: "Agricultura Oazei Faiyum", en: "Faiyum Oasis Agriculture" },
    description: { de: "Fruchtbare Region mit umfangreichem Gemüseanbau.", hu: "Termékeny régió kiterjedt zöldségtermesztéssel.", ro: "Regiune fertilă cu cultivare extinsă de legume.", en: "Fertile region with extensive vegetable cultivation." },
    facts: {
      de: ["Ganzjähriger Anbau", "Wassernähe durch Kanäle"],
      hu: ["Egész éves termesztés", "Víz közelsége a csatornákon keresztül"],
      ro: ["Cultivare pe tot parcursul anului", "Apropierea de apă prin canale"],
      en: ["Year-round cultivation", "Proximity to water via canals"]
    }
  },
  {
    id: "alqanater-kid-life-v2",
    type: "kid-landmark",
    parent: "EG-C",
    coords: [31.14, 30.18],
    name: { de: "Al Qanater El Khairia Parks", hu: "Al Qanater El Khairia parkok", ro: "Parcurile Al Qanater El Khairia", en: "Al Qanater El Khairia Parks" },
    description: { de: "Ein weitläufiges Parkgebiet am Nil, ideal für Familien.", hu: "Kiterjedt parkterület a Nílus mentén, ideális családoknak.", ro: "O zonă extinsă de parcuri pe malul Nilului, ideală pentru familii.", en: "A sprawling park area on the Nile, ideal for families." },
    facts: {
      de: ["Picknickplätze", "Bootsfahrten für Kinder"],
      hu: ["Piknikhelyek", "Csónakázás gyermekeknek"],
      ro: ["Locuri de picnic", "Plimbări cu barca pentru copii"],
      en: ["Picnic areas", "Boat trips for children"]
    }
  },
  {
    id: "luxor-botanical-life-v2",
    type: "kid-landmark",
    parent: "EG-LX",
    coords: [32.65, 25.70],
    name: { de: "Luxor Botanischer Garten", hu: "Luxor Botanikus Kert", ro: "Grădina Botanică Luxor", en: "Luxor Botanical Garden" },
    description: { de: "Grüne Oase im Zentrum von Luxor.", hu: "Zöld oázis Luxor központjában.", ro: "Oază verde în centrul orașului Luxor.", en: "Green oasis in the center of Luxor." },
    facts: {
      de: ["Schattenreiche Bäume", "Sehr entspannend"],
      hu: ["Árnyékos fák", "Nagyon pihentető"],
      ro: ["Copaci umbroși", "Foarte relaxant"],
      en: ["Shady trees", "Very relaxing"]
    }
  },
  {
    id: "marsa-alam-habitat-life-v2",
    type: "animal-habitat",
    parent: "EG-RS",
    coords: [34.80, 25.00],
    name: { de: "Marsa Alam Dugong-Habitat", hu: "Marsa Alam Dugong-élőhely", ro: "Habitat de dugong Marsa Alam", en: "Marsa Alam Dugong Habitat" },
    description: { de: "Ein geschütztes Gebiet für Seekühe im Roten Meer.", hu: "Védett terület a tengeri tehenek számára a Vörös-tengerben.", ro: "O zonă protejată pentru dugongi în Marea Roșie.", en: "A protected area for dugongs in the Red Sea." },
    facts: {
      de: ["Sehr seltenes Tier", "Riff-Schutz"],
      hu: ["Nagyon ritka állat", "Zátonyvédelem"],
      ro: ["Animal foarte rar", "Protecția recifelor"],
      en: ["Very rare animal", "Reef protection"]
    }
  },
  {
    id: "alexandria-zoo-life-v2",
    type: "kid-landmark",
    parent: "EG-ALX",
    coords: [29.90, 31.20],
    name: { de: "Alexandria Zoo", hu: "Alexandriai Állatkert", ro: "Grădina Zoologică Alexandria", en: "Alexandria Zoo" },
    description: { de: "Beliebter Zoo an der Mittelmeerküste.", hu: "Népszerű állatkert a Földközi-tenger partján.", ro: "Grădină zoologică populară pe coasta Mediteranei.", en: "Popular zoo on the Mediterranean coast." },
    facts: {
      de: ["Familienattraktion", "Viele Tierarten"],
      hu: ["Családi attrakció", "Sok állatfaj"],
      ro: ["Atracție de familie", "Multe specii de animale"],
      en: ["Family attraction", "Many species of animals"]
    }
  },
  {
    id: "delta-bird-habitat-life-v2",
    type: "animal-habitat",
    parent: "EG-KFS",
    coords: [30.90, 31.50],
    name: { de: "Nildelta Vogelschutzgebiet", hu: "Nílus-delta madárvédelmi terület", ro: "Rezervația de păsări din Delta Nilului", en: "Nile Delta Bird Sanctuary" },
    description: { de: "Ein wichtiges Ziel für Zugvögel.", hu: "A vándormadarak fontos célpontja.", ro: "O destinație importantă pentru păsările migratoare.", en: "An important destination for migratory birds." },
    facts: {
      de: ["Beobachtungstürme", "Hunderttausende Vögel"],
      hu: ["Megfigyelőtornyok", "Százezernyi madár"],
      ro: ["Turnuri de observație", "Sute de mii de păsări"],
      en: ["Observation towers", "Hundreds of thousands of birds"]
    }
  },
  {
    id: "giza-farm-agriculture-life-v2",
    type: "agriculture",
    parent: "EG-GZ",
    coords: [31.10, 29.90],
    name: { de: "Giza Bio-Farmen", hu: "Gízai biofarmok", ro: "Bio-ferme Giza", en: "Giza Organic Farms" },
    description: { de: "Moderne Landwirtschaft am Rande der Wüste.", hu: "Modern mezőgazdaság a sivatag peremén.", ro: "Agricultură modernă la marginea deșertului.", en: "Modern farming at the edge of the desert." },
    facts: {
      de: ["Bio-Gemüseanbau", "Nachhaltige Methoden"],
      hu: ["Bio-zöldségtermesztés", "Fenntartható módszerek"],
      ro: ["Cultivarea legumelor organice", "Metode durabile"],
      en: ["Organic vegetable farming", "Sustainable methods"]
    }
  },
  {
    id: "aswan-island-kid-life-v2",
    type: "kid-landmark",
    parent: "EG-ASN",
    coords: [32.89, 24.09],
    name: { de: "Elephantine Insel Park", hu: "Elephantine-sziget park", ro: "Insula Elephantine Parc", en: "Elephantine Island Park" },
    description: { de: "Ein ruhiger Park auf einer historischen Nilinsel.", hu: "Csendes park egy történelmi nílusi szigeten.", ro: "Un parc liniștit pe o insulă istorică pe Nil.", en: "A peaceful park on a historic Nile island." },
    facts: {
      de: ["Ideal zum Spazierengehen", "Tolle Aussicht"],
      hu: ["Ideális sétákhoz", "Nagyszerű kilátás"],
      ro: ["Ideal pentru plimbări", "Priveliște minunată"],
      en: ["Ideal for walking", "Great views"]
    }
  },
  {
    id: "sina-camel-habitat-life-v2",
    type: "animal-habitat",
    parent: "EG-SIN",
    coords: [33.80, 28.50],
    name: { de: "Sinai Kamel-Weiden", hu: "Sínai tevelegelő", ro: "Pășunile de cămile Sinai", en: "Sinai Camel Pastures" },
    description: { de: "Traditionelle Weidegebiete der Beduinen.", hu: "A beduinok hagyományos legelőterületei.", ro: "Zone de pășunat tradiționale ale beduinilor.", en: "Traditional grazing areas of the Bedouin." },
    facts: {
      de: ["Kulturlandschaft", "Kamele beobachten"],
      hu: ["Kulturális táj", "Tevemegfigyelés"],
      ro: ["Peisaj cultural", "Observarea cămilelor"],
      en: ["Cultural landscape", "Camel watching"]
    }
  },
  {
    id: "nabq-protected-life-v2",
    type: "animal-habitat",
    parent: "EG-SIN",
    coords: [34.40, 28.10],
    name: { de: "Nabq Naturschutzgebiet", hu: "Nabq Természetvédelmi Terület", ro: "Rezervația Nabq", en: "Nabq Protected Area" },
    description: { de: "Schutzgebiet mit Mangrovenwäldern am Roten Meer.", hu: "Védett terület mangroveerdőkkel a Vörös-tengeren.", ro: "Zonă protejată cu păduri de mangrove la Marea Roșie.", en: "Protected area with mangrove forests on the Red Sea." },
    facts: {
      de: ["Mangroven", "Unterwasserwelt"],
      hu: ["Mangrovék", "Víz alatti világ"],
      ro: ["Mangrove", "Lumea subacvatică"],
      en: ["Mangroves", "Underwater world"]
    }
  },
  {
    id: "azhar-park-kid-life-v2",
    type: "kid-landmark",
    parent: "EG-C",
    coords: [31.26, 30.04],
    name: { de: "Al-Azhar Park", hu: "Al-Azhar park", ro: "Parcul Al-Azhar", en: "Al-Azhar Park" },
    description: { de: "Eine grüne Lunge in der Kairoer Altstadt.", hu: "Zöld oázis a kairói óvárosban.", ro: "Oază verde în orașul vechi din Cairo.", en: "A green oasis in Cairo's old city." },
    facts: {
      de: ["Spielplätze", "Familien-Freizeit"],
      hu: ["Játszóterek", "Családi kikapcsolódás"],
      ro: ["Locuri de joacă", "Relaxare în familie"],
      en: ["Playgrounds", "Family recreation"]
    }
  },
  {
    id: "rosseta-fruit-agriculture-life-v2",
    type: "agriculture",
    parent: "EG-BH",
    coords: [30.40, 31.40],
    name: { de: "Rosetta Obstgärten", hu: "Rosetta gyümölcsöskertek", ro: "Livezile Rosetta", en: "Rosetta Orchards" },
    description: { de: "Bekannt für den Anbau von Zitrusfrüchten.", hu: "Ismert a citrusfélék termesztéséről.", ro: "Cunoscută pentru cultivarea citricelor.", en: "Known for growing citrus fruits." },
    facts: {
      de: ["Orangen und Zitronen", "Traditionell"],
      hu: ["Narancs és citrom", "Hagyományos"],
      ro: ["Portocale și lămâi", "Tradițional"],
      en: ["Oranges and lemons", "Traditional"]
    }
  },
  {
    id: "taba-habitat-life-v2",
    type: "animal-habitat",
    parent: "EG-SIN",
    coords: [34.70, 29.50],
    name: { de: "Taba Schutzgebiet", hu: "Taba Természetvédelmi Terület", ro: "Rezervația Taba", en: "Taba Protected Area" },
    description: { de: "Bergschutzgebiet mit seltener Wüstenflora.", hu: "Hegyi védett terület ritka sivatagi növényzettel.", ro: "Zonă montană protejată cu vegetație deșertică rară.", en: "Mountainous protected area with rare desert flora." },
    facts: {
      de: ["Steinböcke", "Wüstenpflanzen"],
      hu: ["Kőszáli kecskék", "Sivatagi növények"],
      ro: ["Capre negre", "Plante de deșert"],
      en: ["Ibex", "Desert plants"]
    }
  },
  {
    id: "minya-crops-agriculture-life-v2",
    type: "agriculture",
    parent: "EG-MN",
    coords: [30.70, 28.10],
    name: { de: "Minya Anbaugebiete", hu: "Minya művelési területek", ro: "Zone agricole Minya", en: "Minya Agricultural Lands" },
    description: { de: "Wichtige Anbauregion im mittleren Ägypten.", hu: "Fontos termesztési régió Közép-Egyiptomban.", ro: "Regiune agricolă importantă în Egiptul Central.", en: "Important agricultural region in central Egypt." },
    facts: {
      de: ["Zuckerrohr", "Maisanbau"],
      hu: ["Cukornád", "Kukoricatermesztés"],
      ro: ["Trestie de zahăr", "Cultivarea porumbului"],
      en: ["Sugar cane", "Corn farming"]
    }
  },
  {
    id: "sohag-fields-agriculture-life-v2",
    type: "agriculture",
    parent: "EG-SHG",
    coords: [31.70, 26.50],
    name: { de: "Sohag Agrarland", hu: "Sohag mezőgazdasági földek", ro: "Terenuri agricole Sohag", en: "Sohag Agricultural Lands" },
    description: { de: "Traditionelle Landwirtschaft entlang des Nils.", hu: "Hagyományos mezőgazdaság a Nílus mentén.", ro: "Agricultură tradițională de-a lungul Nilului.", en: "Traditional farming along the Nile." },
    facts: {
      de: ["Bewässerungsfelder", "Lokale Produkte"],
      hu: ["Öntözött földek", "Helyi termékek"],
      ro: ["Câmpuri irigate", "Produse locale"],
      en: ["Irrigated fields", "Local products"]
    }
  },
  {
    id: "qena-farming-agriculture-life-v2",
    type: "agriculture",
    parent: "EG-QEN",
    coords: [32.70, 26.10],
    name: { de: "Qena Obst- und Gemüsefelder", hu: "Qena gyümölcs- és zöldségföldek", ro: "Câmpuri de fructe și legume Qena", en: "Qena Fruit and Vegetable Fields" },
    description: { de: "Produktionsstätte für regionale Agrarerzeugnisse.", hu: "Termelőhely regionális mezőgazdasági termékek számára.", ro: "Loc de producție pentru produse agricole regionale.", en: "Production site for regional agricultural products." },
    facts: {
      de: ["Frische Produkte", "Sonniges Klima"],
      hu: ["Friss termékek", "Napos éghajlat"],
      ro: ["Produse proaspete", "Climat însorit"],
      en: ["Fresh products", "Sunny climate"]
    }
  },
  {
    id: "hurghada-marine-habitat-life-v2",
    type: "animal-habitat",
    parent: "EG-RS",
    coords: [33.80, 27.20],
    name: { de: "Hurghada Korallen-Habitat", hu: "Hurghada Korall-élőhely", ro: "Habitat de corali Hurghada", en: "Hurghada Coral Habitat" },
    description: { de: "Geschützte Korallenriffe vor der Küste.", hu: "Védett korallzátonyok a part mentén.", ro: "Recife de corali protejate lângă coastă.", en: "Protected coral reefs off the coast." },
    facts: {
      de: ["Rifftauchen", "Bunte Meereswelt"],
      hu: ["Zátonymerülés", "Színes élővilág"],
      ro: ["Scufundări la recif", "Viață marină colorată"],
      en: ["Reef diving", "Colorful marine life"]
    }
  },
  {
    id: "heliopolis-park-kid-life-v2",
    type: "kid-landmark",
    parent: "EG-C",
    coords: [31.33, 30.08],
    name: { de: "Heliopolis Park", hu: "Heliopolisz park", ro: "Parcul Heliopolis", en: "Heliopolis Park" },
    description: { de: "Großer Stadtpark mit Freizeitmöglichkeiten.", hu: "Nagy városi park szabadidős lehetőségekkel.", ro: "Parc urban mare cu facilități de recreere.", en: "Large city park with recreational opportunities." },
    facts: {
      de: ["Grünanlagen", "Familienaktivitäten"],
      hu: ["Zöldterületek", "Családi tevékenységek"],
      ro: ["Spații verzi", "Activități de familie"],
      en: ["Green areas", "Family activities"]
    }
  },
  {
    id: "cairo-delta-animal-life-v2",
    type: "animal-habitat",
    parent: "EG-C",
    coords: [31.10, 30.20],
    name: { de: "Delta Naturreservat", hu: "Delta természetvédelmi terület", ro: "Rezervația naturală Delta", en: "Delta Nature Reserve" },
    description: { de: "Reservat für einheimische Tierarten im Nildelta.", hu: "Rezervátum őshonos állatfajok számára a Nílus-deltában.", ro: "Rezervație pentru specii native în Delta Nilului.", en: "Reserve for native species in the Nile Delta." },
    facts: {
      de: ["Kleine Säugetiere", "Einheimische Vögel"],
      hu: ["Kis emlősök", "Őshonos madarak"],
      ro: ["Mamifere mici", "Păsări native"],
      en: ["Small mammals", "Native birds"]
    }
  },
  {
    id: "benisuef-farms-agriculture-life-v2",
    type: "agriculture",
    parent: "EG-BNS",
    coords: [31.00, 29.00],
    name: { de: "Beni Suef Farmen", hu: "Beni Suef farmok", ro: "Ferme Beni Suef", en: "Beni Suef Farms" },
    description: { de: "Landwirtschaftliche Zone am Nil.", hu: "Mezőgazdasági övezet a Nílus mentén.", ro: "Zonă agricolă pe malul Nilului.", en: "Agricultural zone along the Nile." },
    facts: {
      de: ["Gemüseanbau", "Wichtig für die Region"],
      hu: ["Zöldségtermesztés", "Fontos a régió számára"],
      ro: ["Cultivarea legumelor", "Importantă pentru regiune"],
      en: ["Vegetable farming", "Important for the region"]
    }
  },
  {
    id: "giza-green-kid-life-v2",
    type: "kid-landmark",
    parent: "EG-GZ",
    coords: [31.15, 29.95],
    name: { de: "Giza Stadtpark", hu: "Gízai városi park", ro: "Parc urban Giza", en: "Giza City Park" },
    description: { de: "Großer Erholungspark für Familien.", hu: "Nagy pihenőpark családoknak.", ro: "Parc de recreere mare pentru familii.", en: "Large recreation park for families." },
    facts: {
      de: ["Spielplätze", "Schattenplätze"],
      hu: ["Játszóterek", "Árnyékos helyek"],
      ro: ["Locuri de joacă", "Zone umbrite"],
      en: ["Playgrounds", "Shaded spots"]
    }
  },
  {
    id: "suez-canal-agri-agriculture-life-v2",
    type: "agriculture",
    parent: "EG-SUZ",
    coords: [32.30, 30.50],
    name: { de: "Suez Agrarzone", hu: "Szuezi agrárzóna", ro: "Zonă agricolă Suez", en: "Suez Agricultural Zone" },
    description: { de: "Anbaubereiche in der Nähe des Kanals.", hu: "Termesztési területek a csatorna közelében.", ro: "Zone de cultivare lângă canal.", en: "Farming areas near the canal." },
    facts: {
      de: ["Neue Bewässerung", "Lokale Ernten"],
      hu: ["Új öntözés", "Helyi betakarítás"],
      ro: ["Irigare nouă", "Recoltă locală"],
      en: ["New irrigation", "Local harvests"]
    }
  },
  {
    id: "damanhur-fields-agriculture-life-v2",
    type: "agriculture",
    parent: "EG-BH",
    coords: [30.40, 31.00],
    name: { de: "Damanhur Agrarflächen", hu: "Damanhur mezőgazdasági területek", ro: "Terenuri agricole Damanhur", en: "Damanhur Agricultural Lands" },
    description: { de: "Fruchtbares Agrarland im Delta.", hu: "Termékeny mezőgazdasági földek a Deltában.", ro: "Teren agricol fertil în Deltă.", en: "Fertile agricultural land in the Delta." },
    facts: {
      de: ["Reis-Produktion", "Sehr ertragreich"],
      hu: ["Rizstermelés", "Nagyon hozamgazdag"],
      ro: ["Producția de orez", "Foarte productiv"],
      en: ["Rice production", "Very productive"]
    }
  },
  {
    id: "elminya-habitat-life-v2",
    type: "animal-habitat",
    parent: "EG-MN",
    coords: [30.70, 28.00],
    name: { de: "Minya Wildtier-Zuflucht", hu: "Minya vadvilág-menedék", ro: "Refugiul faunei sălbatice Minya", en: "Minya Wildlife Refuge" },
    description: { de: "Schutzgebiet für bedrohte Wüstentiere.", hu: "Védett terület veszélyeztetett sivatagi állatok számára.", ro: "Zonă protejată pentru animalele deșertice amenințate.", en: "Protected area for threatened desert animals." },
    facts: {
      de: ["Wüstenfüchse", "Kleine Eidechsen"],
      hu: ["Sivatagi rókák", "Kis gyíkok"],
      ro: ["Vulpi de deșert", "Șopârle mici"],
      en: ["Desert foxes", "Small lizards"]
    }
  }
];
