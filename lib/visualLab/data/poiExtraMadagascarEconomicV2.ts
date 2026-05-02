import type { POI } from "./poi";

export const poiExtraMadagascarEconomicV2: POI[] = [
  {
    id: "ambatovy-mine-economic-v2",
    type: "industry",
    parent: "MG-A",
    coords: [48.3300, -18.8400],
    name: { de: "Ambatovy-Nickelmine", hu: "Ambatovy nikkelbánya", ro: "Mina de nichel Ambatovy", en: "Ambatovy Nickel Mine" },
    description: {
      de: "Eines der größten Laterit-Nickel-Bergbauprojekte der Welt, das tief in den Wäldern im Osten Madagaskars angesiedelt ist.",
      hu: "A világ egyik legnagyobb laterites nikkelbányászati projektje, amely Madagaszkár keleti erdeinek mélyén található.",
      ro: "Unul dintre cele mai mari proiecte de exploatare a nichelului lateritic din lume, situat adânc în pădurile din estul Madagascarului.",
      en: "One of the world's largest lateritic nickel mining projects, located deep in the forests of eastern Madagascar."
    },
    facts: {
      de: ["Kosten von über 8 Milliarden Dollar", "Produziert auch Kobalt"],
      hu: ["Több mint 8 milliárd dolláros beruházás", "Kobaltot is termel"],
      ro: ["Costă peste 8 miliarde de dolari", "Produce și cobalt"],
      en: ["Cost over 8 billion dollars", "Also produces cobalt"]
    }
  },
  {
    id: "toamasina-port-economic-v2",
    type: "port",
    parent: "MG-A",
    coords: [49.4000, -18.1500],
    name: { de: "Hafen von Toamasina", hu: "Toamasina kikötője", ro: "Portul Toamasina", en: "Port of Toamasina" },
    description: {
      de: "Der wichtigste Seehafen des Landes wickelt den Großteil des internationalen Seehandels der Insel ab.",
      hu: "Az ország legfontosabb tengeri kikötője a sziget nemzetközi tengeri kereskedelmének nagy részét bonyolítja le.",
      ro: "Principalul port maritim al țării gestionează majoritatea comerțului maritim internațional al insulei.",
      en: "The country's most important seaport handles the vast majority of the island's international maritime trade."
    },
    facts: {
      de: ["Wichtigstes Tor für Importe", "Betrieben von SPAT"],
      hu: ["A legfőbb kapu az import számára", "Az SPAT üzemelteti"],
      ro: ["Principala poartă pentru importuri", "Operat de SPAT"],
      en: ["Main gateway for imports", "Operated by SPAT"]
    }
  },
  {
    id: "ehola-port-economic-v2",
    type: "port",
    parent: "MG-U",
    coords: [46.9944, -25.0444],
    name: { de: "Hafen Ehoala", hu: "Ehoala kikötő", ro: "Portul Ehoala", en: "Port Ehoala" },
    description: {
      de: "Dieser moderne Tiefseehafen in der Nähe von Tolagnaro wurde hauptsächlich für den Export von Ilmenit errichtet.",
      hu: "Ezt a modern mélyvízi kikötőt Tolagnaro közelében elsősorban ilmenit exportálására építették.",
      ro: "Acest port modern de mare adâncime din apropiere de Tolagnaro a fost construit în principal pentru exportul de ilmenit.",
      en: "This modern deep-water port near Tolagnaro was built primarily to facilitate the export of ilmenite."
    },
    facts: {
      de: ["Eröffnet im Jahr 2009", "Wird für den Bergbau genutzt"],
      hu: ["2009-ben nyílt meg", "Bányászati célokra használják"],
      ro: ["Deschis în 2009", "Folosit pentru minerit"],
      en: ["Opened in 2009", "Used for mining operations"]
    }
  },
  {
    id: "qmm-mine-economic-v2",
    type: "industry",
    parent: "MG-U",
    coords: [46.9667, -24.9833],
    name: { de: "QMM-Ilmenitmine", hu: "QMM ilmenitbánya", ro: "Mina de ilmenit QMM", en: "QMM Ilmenite Mine" },
    description: {
      de: "Ein umfangreiches Abbaugebiet im Südosten, in dem Ilmenit für die Titanoxidproduktion gewonnen wird.",
      hu: "Kiterjedt bányaterület délkeleten, ahol ilmenitet bányásznak titán-dioxid termeléshez.",
      ro: "O zonă vastă de extracție în sud-est unde se extrage ilmenit pentru producția de dioxid de titan.",
      en: "A vast extraction area in the southeast where ilmenite is mined for titanium dioxide production."
    },
    facts: {
      de: ["Betrieben von Rio Tinto", "Liegt in der Region Anosy"],
      hu: ["A Rio Tinto üzemelteti", "Az Anosy régióban található"],
      ro: ["Operat de Rio Tinto", "Situat în regiunea Anosy"],
      en: ["Operated by Rio Tinto", "Located in the Anosy region"]
    }
  },
  {
    id: "mahajanga-port-economic-v2",
    type: "port",
    parent: "MG-M",
    coords: [46.3023, -15.7231],
    name: { de: "Hafen von Mahajanga", hu: "Mahajanga kikötője", ro: "Portul Mahajanga", en: "Port of Mahajanga" },
    description: {
      de: "Ein historischer Hafen an der Westküste, der eine wichtige Rolle im regionalen Warenverkehr spielt.",
      hu: "Egy történelmi kikötő a nyugati parton, amely fontos szerepet játszik a regionális áruforgalomban.",
      ro: "Un port istoric pe coasta de vest, care joacă un rol important în traficul regional de mărfuri.",
      en: "A historic port on the west coast playing an important role in regional freight traffic."
    },
    facts: {
      de: ["Zweitgrößter Hafen der Insel", "Liegt am Betsiboka-Fluss"],
      hu: ["A sziget második legnagyobb kikötője", "A Betsiboka folyónál fekszik"],
      ro: ["Al doilea port ca mărime al insulei", "Situat pe râul Betsiboka"],
      en: ["Second largest port of the island", "Located on the Betsiboka river"]
    }
  },
  {
    id: "kraoma-mine-economic-v2",
    type: "industry",
    parent: "MG-M",
    coords: [46.7500, -16.4833],
    name: { de: "Kraoma-Chrommine", hu: "Kraoma krómbánya", ro: "Mina de crom Kraoma", en: "Kraoma Chrome Mine" },
    description: {
      de: "Diese Mine im zentralen Hochland war lange Zeit das Zentrum der madagassischen Chromerzförderung.",
      hu: "Ez a közép-felföldi bánya hosszú ideig a madagaszkári krómérc-kitermelés központja volt.",
      ro: "Această mină din zonele înalte centrale a fost mult timp centrul extracției minereului de crom malgaș.",
      en: "This mine in the central highlands was long the center of Malagasy chrome ore extraction."
    },
    facts: {
      de: ["Staatliches Bergbauunternehmen", "Produziert Chromkonzentrat"],
      hu: ["Állami bányászati vállalat", "Krómkoncentrátumot állít elő"],
      ro: ["Companie minieră de stat", "Produce concentrat de crom"],
      en: ["State-owned mining company", "Produces chrome concentrate"]
    }
  },
  {
    id: "antsiranana-port-economic-v2",
    type: "port",
    parent: "MG-D",
    coords: [49.2944, -12.2711],
    name: { de: "Hafen von Antsiranana", hu: "Antsiranana kikötője", ro: "Portul Antsiranana", en: "Port of Antsiranana" },
    description: {
      de: "Gelegen in einer großen Bucht im Norden, ist dieser Hafen ein wichtiger Knotenpunkt für den Marine- und Handelsverkehr.",
      hu: "Az északi nagy öbölben található kikötő a haditengerészeti és kereskedelmi forgalom fontos csomópontja.",
      ro: "Situat într-un golf mare din nord, acest port este un nod important pentru traficul naval și comercial.",
      en: "Located in a large bay in the north, this port is a major hub for naval and commercial traffic."
    },
    facts: {
      de: ["Früher als Diego Suarez bekannt", "Hat ein tiefes natürliches Becken"],
      hu: ["Korábban Diego Suarez néven ismerték", "Mély természetes medencével rendelkezik"],
      ro: ["Cunoscut anterior ca Diego Suarez", "Are un bazin natural adânc"],
      en: ["Formerly known as Diego Suarez", "Has a deep natural basin"]
    }
  },
  {
    id: "star-brewery-tana-economic-v2",
    type: "industry",
    parent: "MG-T",
    coords: [47.5300, -18.9100],
    name: { de: "STAR-Brauerei Antananarivo", hu: "STAR sörfőzde Antananarivo", ro: "Berăria STAR Antananarivo", en: "STAR Brewery Antananarivo" },
    description: {
      de: "Der Hauptsitz und die größte Produktionsstätte der bekannten madagassischen Getränkemarke in der Hauptstadt.",
      hu: "Az ismert madagaszkári italmárka központja és legnagyobb gyártóüzeme a fővárosban.",
      ro: "Sediul central și cea mai mare unitate de producție a renumitei mărci de băuturi din Madagascar în capitală.",
      en: "The headquarters and largest production facility of the famous Malagasy beverage brand in the capital."
    },
    facts: {
      de: ["Produziert THB-Bier", "Gründung 1953"],
      hu: ["THB sört gyárt", "1953-ban alapították"],
      ro: ["Produce berea THB", "Fondată în 1953"],
      en: ["Produces THB beer", "Founded in 1953"]
    }
  },
  {
    id: "star-brewery-antsirabe-economic-v2",
    type: "industry",
    parent: "MG-T",
    coords: [47.0300, -19.8600],
    name: { de: "STAR-Brauerei Antsirabe", hu: "STAR sörfőzde Antsirabe", ro: "Berăria STAR Antsirabe", en: "STAR Brewery Antsirabe" },
    description: {
      de: "Ein bedeutender Zweigbetrieb der STAR-Brauereien, der von den hervorragenden Wasserquellen der Region profitiert.",
      hu: "A STAR sörfőzdék jelentős fióktelepe, amely a régió kiváló vízforrásaiból profitál.",
      ro: "O ramură importantă a fabricilor de bere STAR, beneficiind de izvoarele excelente de apă din regiune.",
      en: "A major branch of the STAR breweries benefiting from the region's excellent water sources."
    },
    facts: {
      de: ["Bekannt für Mineralwasser", "Wichtiger Arbeitgeber"],
      hu: ["Ásványvizéről ismert", "Jelentős munkáltató"],
      ro: ["Cunoscut pentru apa minerală", "Angajator major"],
      en: ["Known for mineral water", "Major employer"]
    }
  },
  {
    id: "toliara-port-economic-v2",
    type: "port",
    parent: "MG-U",
    coords: [43.6667, -23.3500],
    name: { de: "Hafen von Toliara", hu: "Toliara kikötője", ro: "Portul Toliara", en: "Port of Toliara" },
    description: {
      de: "Dieser regionale Hafen im Südwesten fertigt landwirtschaftliche Produkte und Fischereierzeugnisse ab.",
      hu: "Ez a délnyugati regionális kikötő mezőgazdasági és halászati termékeket kezel.",
      ro: "Acest port regional din sud-vest gestionează produse agricole și pescărești.",
      en: "This regional port in the southwest handles agricultural and fishery products."
    },
    facts: {
      de: ["Dient dem Süden", "Wichtig für den Export"],
      hu: ["A déli részt szolgálja ki", "Fontos az export szempontjából"],
      ro: ["Deservește sudul", "Important pentru export"],
      en: ["Serves the south", "Important for export"]
    }
  },
  {
    id: "cotona-textile-economic-v2",
    type: "industry",
    parent: "MG-T",
    coords: [47.0333, -19.8667],
    name: { de: "COTONA Textilfabrik", hu: "COTONA textilgyár", ro: "Fabrica de textile COTONA", en: "COTONA Textile Factory" },
    description: {
      de: "Ein Traditionsunternehmen der Textilindustrie, das Baumwolle verarbeitet und Stoffe für den Binnen- und Exportmarkt herstellt.",
      hu: "A textilipar hagyományos vállalata, amely pamutot dolgoz fel és textíliákat gyárt a belföldi és exportpiacokra.",
      ro: "O companie tradițională din industria textilă care prelucrează bumbacul și produce țesături pentru piețele interne și de export.",
      en: "A traditional textile industry company that processes cotton and produces fabrics for domestic and export markets."
    },
    facts: {
      de: ["Liegt in Antsirabe", "Gegründet im 20. Jahrhundert"],
      hu: ["Antsirabében található", "A 20. században alapították"],
      ro: ["Situată în Antsirabe", "Fondată în secolul al XX-lea"],
      en: ["Located in Antsirabe", "Founded in the 20th century"]
    }
  },
  {
    id: "ambilobe-sugar-economic-v2",
    type: "industry",
    parent: "MG-D",
    coords: [48.8833, -13.2000],
    name: { de: "Zuckerfabrik Ambilobe", hu: "Ambilobe cukorgyár", ro: "Fabrica de zahăr Ambilobe", en: "Ambilobe Sugar Factory" },
    description: {
      de: "Eine der wichtigsten Anlagen zur Verarbeitung von Zuckerrohr im nördlichen Teil der Insel.",
      hu: "Az egyik legfontosabb cukornád-feldolgozó létesítmény a sziget északi részén.",
      ro: "Una dintre cele mai importante unități de prelucrare a trestiei de zahăr din partea de nord a insulei.",
      en: "One of the most important sugar cane processing facilities in the northern part of the island."
    },
    facts: {
      de: ["Liegt im Flusstal des Mahavavy", "Stärkt die lokale Landwirtschaft"],
      hu: ["A Mahavavy folyó völgyében fekszik", "Erősíti a helyi mezőgazdaságot"],
      ro: ["Situată în valea râului Mahavavy", "Sprijină agricultura locală"],
      en: ["Located in the Mahavavy river valley", "Boosts local agriculture"]
    }
  },
  {
    id: "holcim-cement-ibity-economic-v2",
    type: "industry",
    parent: "MG-T",
    coords: [47.0000, -20.0833],
    name: { de: "Holcim-Zementwerk Ibity", hu: "Holcim cementgyár Ibity", ro: "Fabrica de ciment Holcim Ibity", en: "Holcim Cement Plant Ibity" },
    description: {
      de: "Ein entscheidender Zulieferer für die Bauindustrie auf Madagaskar, der lokal abgebauten Kalkstein verwendet.",
      hu: "A madagaszkári építőipar kulcsfontosságú beszállítója, amely helyben bányászott mészkövet használ.",
      ro: "Un furnizor crucial pentru industria construcțiilor din Madagascar, utilizând calcar extras local.",
      en: "A crucial supplier to the Malagasy construction industry, utilizing locally mined limestone."
    },
    facts: {
      de: ["Wichtigstes Zementwerk", "Teil einer globalen Gruppe"],
      hu: ["Legfontosabb cementgyár", "Egy globális csoport része"],
      ro: ["Cea mai importantă fabrică de ciment", "Parte a unui grup global"],
      en: ["Main cement plant", "Part of a global group"]
    }
  },
  {
    id: "galana-refinery-economic-v2",
    type: "industry",
    parent: "MG-A",
    coords: [49.4000, -18.1333],
    name: { de: "Galana-Raffinerie", hu: "Galana kőolajfinomító", ro: "Rafinăria Galana", en: "Galana Refinery" },
    description: {
      de: "Die einzige Anlage dieser Art im Land, die für die Verarbeitung importierten Rohöls und die Versorgung mit Kraftstoffen zuständig ist.",
      hu: "Az ország egyetlen ilyen jellegű létesítménye, amely az importált nyersolaj feldolgozásáért és az üzemanyag-ellátásért felelős.",
      ro: "Singura instalație de acest gen din țară, responsabilă cu procesarea țițeiului importat și furnizarea de combustibili.",
      en: "The only facility of its kind in the country, responsible for processing imported crude oil and supplying fuels."
    },
    facts: {
      de: ["Befindet sich in Toamasina", "Strategische Infrastruktur"],
      hu: ["Toamasinában található", "Stratégiai infrastruktúra"],
      ro: ["Situată în Toamasina", "Infrastructură strategică"],
      en: ["Located in Toamasina", "Strategic infrastructure"]
    }
  },
  {
    id: "morondava-port-economic-v2",
    type: "port",
    parent: "MG-U",
    coords: [44.2833, -20.2833],
    name: { de: "Hafen von Morondava", hu: "Morondava kikötője", ro: "Portul Morondava", en: "Port of Morondava" },
    description: {
      de: "Ein kleiner, aber essentieller Küstenhafen, der den Menabe-Bezirk mit wichtigen Gütern versorgt.",
      hu: "Egy kis, de létfontosságú part menti kikötő, amely alapvető árukkal látja el a Menabe régiót.",
      ro: "Un port de coastă mic, dar esențial, care aprovizionează regiunea Menabe cu bunuri de bază.",
      en: "A small but essential coastal port supplying the Menabe region with essential goods."
    },
    facts: {
      de: ["Fischerei- und Handelszentrum", "Liegt am Kanal von Mosambik"],
      hu: ["Halászati és kereskedelmi központ", "A Mozambiki-csatornánál fekszik"],
      ro: ["Centru de pescuit și comerț", "Situat pe Canalul Mozambic"],
      en: ["Fishing and trade center", "Located on the Mozambique Channel"]
    }
  },
  {
    id: "dzamandzar-rum-economic-v2",
    type: "industry",
    parent: "MG-D",
    coords: [48.2833, -13.3167],
    name: { de: "Dzamandzar-Rumfabrik", hu: "Dzamandzar rumgyár", ro: "Fabrica de rom Dzamandzar", en: "Dzamandzar Rum Factory" },
    description: {
      de: "Eine historische Destillerie auf der Insel Nosy Be, berühmt für die Herstellung traditioneller Rumsorten aus lokalem Zuckerrohr.",
      hu: "Egy történelmi lepárlóüzem Nosy Be szigetén, amely a helyi cukornádból készült hagyományos rumokról híres.",
      ro: "O distilerie istorică pe insula Nosy Be, renumită pentru producția de romuri tradiționale din trestie de zahăr locală.",
      en: "A historic distillery on the island of Nosy Be, famous for producing traditional rums from local sugar cane."
    },
    facts: {
      de: ["Gegründet im 19. Jahrhundert", "Verarbeitet Ylang-Ylang-Essenzen"],
      hu: ["A 19. században alapították", "Ylang-ylang esszenciákat is feldolgoz"],
      ro: ["Fondată în secolul al XIX-lea", "Procesează esențe de ylang-ylang"],
      en: ["Founded in the 19th century", "Processes ylang-ylang essences"]
    }
  },
  {
    id: "tolanaro-port-economic-v2",
    type: "port",
    parent: "MG-U",
    coords: [46.9996, -25.0333],
    name: { de: "Hafen von Tolagnaro", hu: "Tolagnaro kikötője", ro: "Portul Tolagnaro", en: "Port of Tolagnaro" },
    description: {
      de: "Der alte Hafen der Stadt im tiefen Süden Madagaskars, der nach und nach durch modernere Anlagen ergänzt wurde.",
      hu: "A város régi kikötője Madagaszkár mély déli részén, amelyet fokozatosan kiegészítettek modernebb létesítményekkel.",
      ro: "Vechiul port al orașului din sudul profund al Madagascarului, completat treptat de facilități mai moderne.",
      en: "The old port of the town in the deep south of Madagascar, gradually complemented by more modern facilities."
    },
    facts: {
      de: ["Wichtig für lokalen Handel", "Alte Infrastruktur"],
      hu: ["Fontos a helyi kereskedelem számára", "Régi infrastruktúra"],
      ro: ["Important pentru comerțul local", "Infrastructură veche"],
      en: ["Important for local trade", "Old infrastructure"]
    }
  },
  {
    id: "toliara-sands-economic-v2",
    type: "industry",
    parent: "MG-U",
    coords: [43.6800, -23.3600],
    name: { de: "Toliara-Sands-Projekt", hu: "Toliara Sands projekt", ro: "Proiectul Toliara Sands", en: "Toliara Sands Project" },
    description: {
      de: "Ein großes Bergbauvorhaben zur Erschließung von Schwermineralsanden wie Zirkon und Rutil in der südwestlichen Küstenregion.",
      hu: "Egy nagy bányászati projekt a nehéz ásványi homok, például a cirkon és a rutil feltárására a délnyugati part menti régióban.",
      ro: "Un proiect minier major pentru exploatarea nisipurilor de minerale grele, cum ar fi zirconul și rutilul, în regiunea de coastă sud-vestică.",
      en: "A major mining project for the exploitation of heavy mineral sands like zircon and rutile in the southwestern coastal region."
    },
    facts: {
      de: ["Internationale Investitionen", "Kontroverse Umweltauswirkungen"],
      hu: ["Nemzetközi befektetések", "Vitatott környezeti hatások"],
      ro: ["Investiții internaționale", "Impacturi ecologice controversate"],
      en: ["International investments", "Controversial environmental impacts"]
    }
  },
  {
    id: "savonnerie-tropicale-economic-v2",
    type: "industry",
    parent: "MG-T",
    coords: [47.5333, -18.9167],
    name: { de: "Seifenfabrik Savonnerie Tropicale", hu: "Savonnerie Tropicale szappangyár", ro: "Fabrica de săpun Savonnerie Tropicale", en: "Savonnerie Tropicale Soap Factory" },
    description: {
      de: "Ein Traditionsbetrieb, der seit Jahrzehnten Reinigungsmittel und Körperpflegeprodukte für den madagassischen Markt herstellt.",
      hu: "Egy hagyományos vállalat, amely évtizedek óta gyárt tisztítószereket és testápoló termékeket a madagaszkári piacra.",
      ro: "O companie tradițională care produce de zeci de ani detergenți și produse de îngrijire personală pentru piața malgașă.",
      en: "A traditional company producing detergents and personal care products for the Malagasy market for decades."
    },
    facts: {
      de: ["Lokal verwurzelte Marke", "Großteil der Seifenproduktion"],
      hu: ["Helyi gyökerű márka", "A szappangyártás nagy része"],
      ro: ["Marcă cu rădăcini locale", "Majoritatea producției de săpun"],
      en: ["Locally rooted brand", "Majority of soap production"]
    }
  },
  {
    id: "jb-confectionery-economic-v2",
    type: "industry",
    parent: "MG-T",
    coords: [47.5200, -18.9000],
    name: { de: "JB-Süßwarenfabrik", hu: "JB édességgyár", ro: "Fabrica de dulciuri JB", en: "JB Confectionery Factory" },
    description: {
      de: "Einer der bekanntesten Hersteller von Keksen, Schokolade und anderen Süßigkeiten in Antananarivo.",
      hu: "A kekszek, csokoládék és egyéb édességek egyik legismertebb gyártója Antananarivóban.",
      ro: "Unul dintre cei mai renumiți producători de biscuiți, ciocolată și alte dulciuri din Antananarivo.",
      en: "One of the best-known manufacturers of biscuits, chocolate and other sweets in Antananarivo."
    },
    facts: {
      de: ["Beliebt bei Kindern", "Nationale Vertriebskanäle"],
      hu: ["Népszerű a gyerekek körében", "Országos értékesítési csatornák"],
      ro: ["Popular printre copii", "Canale naționale de distribuție"],
      en: ["Popular with children", "National distribution channels"]
    }
  },
  {
    id: "tsimiroro-oil-economic-v2",
    type: "industry",
    parent: "MG-M",
    coords: [44.9167, -18.4167],
    name: { de: "Tsimiroro-Ölfeld", hu: "Tsimiroro olajmező", ro: "Câmpul petrolier Tsimiroro", en: "Tsimiroro Oil Field" },
    description: {
      de: "Ein bedeutendes Onshore-Schwerölfeld, das mithilfe von Dampfinjektionsverfahren erschlossen wird.",
      hu: "Jelentős szárazföldi nehézolajmező, amelyet gőzbefecskendezéses technikával termelnek ki.",
      ro: "Un câmp petrolier onshore semnificativ, exploatat folosind tehnici de injecție cu abur.",
      en: "A significant onshore heavy oil field, developed using steam injection techniques."
    },
    facts: {
      de: ["Produziert Schweröl", "Wichtiges Energieprojekt"],
      hu: ["Nehézolajat termel", "Fontos energiaprojekt"],
      ro: ["Produce petrol greu", "Proiect energetic important"],
      en: ["Produces heavy oil", "Important energy project"]
    }
  },
  {
    id: "bemolanga-tar-sands-economic-v2",
    type: "industry",
    parent: "MG-M",
    coords: [45.1000, -18.5333],
    name: { de: "Bemolanga-Teersande", hu: "Bemolanga kátrányhomok", ro: "Nisipurile bituminoase Bemolanga", en: "Bemolanga Tar Sands" },
    description: {
      de: "Eine riesige Lagerstätte für bituminöse Sande, die als zukünftige Kohlenwasserstoffquelle für die Region angesehen wird.",
      hu: "Hatalmas bitumenes homoklelőhely, amelyet a régió jövőbeli szénhidrogén-forrásának tekintenek.",
      ro: "Un depozit masiv de nisipuri bituminoase văzut ca o viitoare sursă de hidrocarburi pentru regiune.",
      en: "A massive deposit of bituminous sands seen as a future source of hydrocarbons for the region."
    },
    facts: {
      de: ["Potenzial für große Ölreserven", "Lange Explorationsgeschichte"],
      hu: ["Nagy olajkészletek potenciálja", "Hosszú feltárási történelem"],
      ro: ["Potențial pentru rezerve mari de petrol", "Istorie lungă de explorare"],
      en: ["Potential for large oil reserves", "Long history of exploration"]
    }
  },
  {
    id: "sakoa-coal-economic-v2",
    type: "industry",
    parent: "MG-U",
    coords: [44.5833, -23.7500],
    name: { de: "Sakoa-Kohlemine", hu: "Sakoa szénbánya", ro: "Mina de cărbune Sakoa", en: "Sakoa Coal Mine" },
    description: {
      de: "Ein ausgedehntes Steinkohlebecken im Südwesten, das ein großes Potenzial für die Energieerzeugung und den Export bietet.",
      hu: "Kiterjedt feketeszén-medence délnyugaton, amely nagy potenciált kínál az energiatermelés és az export számára.",
      ro: "Un vast bazin de cărbune antracit în sud-vest, oferind un mare potențial pentru producerea de energie și export.",
      en: "An extensive bituminous coal basin in the southwest offering great potential for power generation and export."
    },
    facts: {
      de: ["Ressourcen im Millionen-Tonnen-Bereich", "Entwicklungsprojekt"],
      hu: ["Több millió tonnás erőforrás", "Fejlesztési projekt"],
      ro: ["Resurse de milioane de tone", "Proiect de dezvoltare"],
      en: ["Resources in the millions of tons", "Development project"]
    }
  },
  {
    id: "fanalamanga-forestry-economic-v2",
    type: "industry",
    parent: "MG-A",
    coords: [48.2000, -18.8167],
    name: { de: "Fanalamanga-Forstbetrieb", hu: "Fanalamanga erdészet", ro: "Compania forestieră Fanalamanga", en: "Fanalamanga Forestry Company" },
    description: {
      de: "Dieses riesige Aufforstungsgebiet verwaltet weite Kiefernwälder und liefert Nutzholz für die lokale Wirtschaft.",
      hu: "Ez a hatalmas erdőtelepítési terület fenyőerdőket kezel és fát biztosít a helyi gazdaság számára.",
      ro: "Această zonă vastă de reîmpădurire gestionează păduri extinse de pini și furnizează cherestea pentru economia locală.",
      en: "This vast reforestation area manages extensive pine forests and provides timber for the local economy."
    },
    facts: {
      de: ["Pflanzt Kiefern an", "Lieg in Moramanga"],
      hu: ["Fenyőket telepít", "Moramangában található"],
      ro: ["Plantează pini", "Situată în Moramanga"],
      en: ["Plants pine trees", "Located in Moramanga"]
    }
  },
  {
    id: "pecheries-nosy-be-economic-v2",
    type: "industry",
    parent: "MG-D",
    coords: [48.2500, -13.3167],
    name: { de: "Fischfabrik Nosy Be", hu: "Nosy Be halászati üzem", ro: "Fabrica de pește Nosy Be", en: "Nosy Be Fishery Plant" },
    description: {
      de: "Ein wichtiger Verarbeitungsbetrieb für Meeresfrüchte, insbesondere Garnelen, die von hier aus auf internationale Märkte verschifft werden.",
      hu: "Fontos tengeri élelmiszer-feldolgozó üzem, különösen garnélarákok esetében, amelyeket innen szállítanak a nemzetközi piacokra.",
      ro: "O importantă fabrică de procesare a fructelor de mare, în special a creveților, care sunt expediați de aici către piețele internaționale.",
      en: "An important seafood processing plant, especially for shrimp, which are shipped from here to international markets."
    },
    facts: {
      de: ["Garnelenexport", "Fördert die blaue Wirtschaft"],
      hu: ["Garnélarák-export", "Támogatja a kék gazdaságot"],
      ro: ["Export de creveți", "Sprijină economia albastră"],
      en: ["Shrimp export", "Supports the blue economy"]
    }
  },
  {
    id: "somacou-textile-economic-v2",
    type: "industry",
    parent: "MG-T",
    coords: [47.5100, -18.9200],
    name: { de: "SOMACOU Textilfabrik", hu: "SOMACOU textilgyár", ro: "Fabrica de textile SOMACOU", en: "SOMACOU Textile Factory" },
    description: {
      de: "Einer der führenden Textilhersteller Madagaskars, spezialisiert auf Decken, Handtücher und gewebte Baumwollprodukte.",
      hu: "Madagaszkár egyik vezető textilgyártója, amely takarókra, törölközőkre és szőtt pamuttermékekre specializálódott.",
      ro: "Unul dintre principalii producători de textile din Madagascar, specializat în pături, prosoape și produse din bumbac țesut.",
      en: "One of Madagascar's leading textile manufacturers, specializing in blankets, towels and woven cotton products."
    },
    facts: {
      de: ["Seit 1968 aktiv", "Große Produktionskapazität"],
      hu: ["1968 óta aktív", "Nagy termelési kapacitás"],
      ro: ["Activă din 1968", "Capacitate mare de producție"],
      en: ["Active since 1968", "Large production capacity"]
    }
  },
  {
    id: "antsingy-port-economic-v2",
    type: "port",
    parent: "MG-M",
    coords: [44.5000, -18.0000],
    name: { de: "Flusshafen Antsingy", hu: "Antsingy folyami kikötő", ro: "Portul fluvial Antsingy", en: "Antsingy River Port" },
    description: {
      de: "Eine kleine Anlegestelle im Landesinneren, die den Transport von landwirtschaftlichen Gütern über die Wasserwege ermöglicht.",
      hu: "Egy kis szárazföldi kikötőhely, amely lehetővé teszi a mezőgazdasági termékek vízi szállítását.",
      ro: "Un mic port interior care permite transportul de mărfuri agricole pe căile navigabile.",
      en: "A small inland landing stage that allows the transport of agricultural goods via the waterways."
    },
    facts: {
      de: ["Verbindet abgelegene Dörfer", "Genutzt für Pirogen"],
      hu: ["Távoli falvakat köt össze", "Pirogok használják"],
      ro: ["Conectează sate îndepărtate", "Folosit de pirogi"],
      en: ["Connects remote villages", "Used by pirogues"]
    }
  },
  {
    id: "maintirano-port-economic-v2",
    type: "port",
    parent: "MG-M",
    coords: [44.0167, -18.0667],
    name: { de: "Hafen von Maintirano", hu: "Maintirano kikötője", ro: "Portul Maintirano", en: "Port of Maintirano" },
    description: {
      de: "Dieser Küstenpunkt dient hauptsächlich kleinen Handelsschiffen und Fischern im Westen der Insel.",
      hu: "Ez a part menti pont elsősorban a sziget nyugati részén lévő kis kereskedelmi hajókat és halászokat szolgálja ki.",
      ro: "Acest punct de coastă deservește în principal mici nave comerciale și pescari din vestul insulei.",
      en: "This coastal point mainly serves small merchant ships and fishermen in the west of the island."
    },
    facts: {
      de: ["Fischerei-Hub", "Schwer auf dem Landweg erreichbar"],
      hu: ["Halászati csomópont", "Szárazföldön nehezen megközelíthető"],
      ro: ["Hub de pescuit", "Greu accesibil pe uscat"],
      en: ["Fishing hub", "Difficult to reach by land"]
    }
  },
  {
    id: "sainte-marie-port-economic-v2",
    type: "port",
    parent: "MG-A",
    coords: [49.8500, -17.0000],
    name: { de: "Hafen Ambodifotatra", hu: "Ambodifotatra kikötője", ro: "Portul Ambodifotatra", en: "Ambodifotatra Port" },
    description: {
      de: "Der Haupthafen der Insel Sainte-Marie, der eine wichtige Brücke für den Tourismus und den Gütertransport zum Festland bildet.",
      hu: "Sainte-Marie szigetének fő kikötője, amely fontos hidat képez a turizmus és a szárazföld felé irányuló áruszállítás számára.",
      ro: "Portul principal al insulei Sainte-Marie, formând o punte importantă pentru turism și transportul de mărfuri către continent.",
      en: "The main port of the island of Sainte-Marie, forming an important bridge for tourism and freight transport to the mainland."
    },
    facts: {
      de: ["Tor für Walbeobachter", "Fähren nach Soanierana Ivongo"],
      hu: ["Bálna-nézők kapuja", "Kompok Soanierana Ivongóba"],
      ro: ["Poarta pentru observarea balenelor", "Feriboturi către Soanierana Ivongo"],
      en: ["Gateway for whale watchers", "Ferries to Soanierana Ivongo"]
    }
  },
  {
    id: "soavoanio-coconut-economic-v2",
    type: "industry",
    parent: "MG-D",
    coords: [50.1667, -14.2833],
    name: { de: "Soavoanio Kokosnussfabrik", hu: "Soavoanio kókuszfeldolgozó", ro: "Fabrica de nucă de cocos Soavoanio", en: "Soavoanio Coconut Processing" },
    description: {
      de: "Ein staatliches Agrarunternehmen im Sambava-Distrikt, das aus riesigen Plantagen wertvolles Kokosöl gewinnt.",
      hu: "Egy állami mezőgazdasági vállalat a Sambava körzetben, amely hatalmas ültetvényekből értékes kókuszolajat von ki.",
      ro: "O companie agricolă de stat din districtul Sambava, care extrage ulei de cocos valoros din plantații uriașe.",
      en: "A state-owned agricultural company in the Sambava district extracting valuable coconut oil from vast plantations."
    },
    facts: {
      de: ["Tausende Hektar Plantagen", "Produziert Seife und Speiseöl"],
      hu: ["Több ezer hektár ültetvény", "Szappant és étolajat termel"],
      ro: ["Mii de hectare de plantații", "Produce săpun și ulei de gătit"],
      en: ["Thousands of hectares of plantations", "Produces soap and cooking oil"]
    }
  }
];
