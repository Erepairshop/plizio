import type { POI } from "./poi";

export const poiExtraMoroccoReliefV2: POI[] = [
  {
    id: "atlas-mountains-relief-v2",
    type: "mountain",
    parent: "MA-01",
    coords: [-7.9, 31.0],
    name: { de: "Hoher Atlas", hu: "Magas-Atlasz", ro: "Atlasul Înalt", en: "High Atlas" },
    description: { de: "Das höchste Gebirge Nordafrikas.", hu: "Észak-Afrika legmagasabb hegysége.", ro: "Cel mai înalt lanț muntos din Africa de Nord.", en: "The highest mountain range in North Africa." },
    facts: {
      de: ["Höchster Gipfel ist der Toubkal.", "Trennung von Sahara und Küste."],
      hu: ["Legmagasabb csúcsa a Toubkal.", "Elválasztja a Szaharát a partvidéktől."],
      ro: ["Cel mai înalt vârf este Toubkal.", "Separă Sahara de coastă."],
      en: ["Highest peak is Toubkal.", "Separates the Sahara from the coast."]
    }
  },
  {
    id: "mount-toubkal-relief-v2",
    type: "mountain",
    parent: "MA-01",
    coords: [-7.91, 31.06],
    name: { de: "Jbel Toubkal", hu: "Dzsebel Tubkal", ro: "Jbel Toubkal", en: "Jbel Toubkal" },
    description: { de: "Der höchste Berg Marokkos und Nordafrikas.", hu: "Marokkó és Észak-Afrika legmagasabb hegye.", ro: "Cel mai înalt munte din Maroc și Africa de Nord.", en: "The highest mountain in Morocco and North Africa." },
    facts: {
      de: ["Höhe 4167 Meter.", "Beliebtes Ziel für Wanderer."],
      hu: ["Magassága 4167 méter.", "Népszerű célpont túrázóknak."],
      ro: ["Înălțime 4167 metri.", "Destinație populară pentru drumeți."],
      en: ["Height 4167 meters.", "Popular destination for hikers."]
    }
  },
  {
    id: "anti-atlas-relief-v2",
    type: "mountain",
    parent: "MA-05",
    coords: [-8.5, 29.5],
    name: { de: "Anti-Atlas", hu: "Anti-Atlasz", ro: "Anti-Atlas", en: "Anti-Atlas" },
    description: { de: "Ein Gebirgszug im Süden Marokkos.", hu: "Hegységrendszer Marokkó déli részén.", ro: "Un lanț muntos în sudul Marocului.", en: "A mountain range in the south of Morocco." },
    facts: {
      de: ["Dehnt sich bis zum Atlantik aus.", "Trockene klimatische Bedingungen."],
      hu: ["Az Atlanti-óceánig nyúlik.", "Száraz éghajlati viszonyok."],
      ro: ["Se întinde până la Oceanul Atlantic.", "Condiții climatice aride."],
      en: ["Stretches to the Atlantic Ocean.", "Arid climatic conditions."]
    }
  },
  {
    id: "middle-atlas-relief-v2",
    type: "mountain",
    parent: "MA-06",
    coords: [-5.0, 33.5],
    name: { de: "Mittlerer Atlas", hu: "Középső-Atlasz", ro: "Atlasul Mijlociu", en: "Middle Atlas" },
    description: { de: "Gebirgsregion bekannt für Zedernwälder.", hu: "Cédruserdőiről ismert hegyvidéki régió.", ro: "Regiune muntoasă cunoscută pentru pădurile de cedru.", en: "Mountain region known for cedar forests." },
    facts: {
      de: ["Zahlreiche Seen und Bäche.", "Wichtig für die Wasserversorgung."],
      hu: ["Számos tó és patak.", "Fontos a vízellátás szempontjából."],
      ro: ["Numeroase lacuri și pâraie.", "Important pentru aprovizionarea cu apă."],
      en: ["Numerous lakes and streams.", "Important for water supply."]
    }
  },
  {
    id: "rif-mountains-relief-v2",
    type: "mountain",
    parent: "MA-07",
    coords: [-4.5, 35.0],
    name: { de: "Rif-Gebirge", hu: "Rif-hegység", ro: "Munții Rif", en: "Rif Mountains" },
    description: { de: "Gebirgskette im Norden Marokkos.", hu: "Hegységrendszer Marokkó északi részén.", ro: "Lanț muntos în nordul Marocului.", en: "Mountain range in northern Morocco." },
    facts: {
      de: ["Nahe dem Mittelmeer.", "Steile Hänge und Schluchten."],
      hu: ["Közel a Földközi-tengerhez.", "Meredek lejtők és kanyonok."],
      ro: ["Aproape de Marea Mediterană.", "Versanți abrupți și canioane."],
      en: ["Near the Mediterranean Sea.", "Steep slopes and canyons."]
    }
  },
  {
    id: "draa-valley-relief-v2",
    type: "relief",
    parent: "MA-08",
    coords: [-6.0, 30.5],
    name: { de: "Drâa-Tal", hu: "Draa-völgy", ro: "Valea Drâa", en: "Drâa Valley" },
    description: { de: "Langes Flusstal am Rande der Sahara.", hu: "Hosszú folyóvölgy a Szahara szélén.", ro: "Valea lungă a râului la marginea Saharei.", en: "Long river valley at the edge of the Sahara." },
    facts: {
      de: ["Bekannt für seine Palmenhaine.", "Oasenreiche Region."],
      hu: ["Ismert pálmaligeteiről.", "Oázisokban gazdag régió."],
      ro: ["Cunoscută pentru plantațiile de palmieri.", "Regiune bogată în oaze."],
      en: ["Known for its palm groves.", "Oasis-rich region."]
    }
  },
  {
    id: "dadès-valley-relief-v2",
    type: "relief",
    parent: "MA-09",
    coords: [-5.9, 31.4],
    name: { de: "Dadès-Tal", hu: "Dadès-völgy", ro: "Valea Dadès", en: "Dadès Valley" },
    description: { de: "Spektakuläre Schlucht im Hohen Atlas.", hu: "Látványos kanyon a Magas-Atlaszban.", ro: "Canion spectaculos în Atlasul Înalt.", en: "Spectacular gorge in the High Atlas." },
    facts: {
      de: ["Bekannt als 'Tal der tausend Kasbahs'.", "Beeindruckende Felsformationen."],
      hu: ["'Ezer Kasbah völgyeként' ismert.", "Lenyűgöző sziklaalakzatok."],
      ro: ["Cunoscută ca 'Valea celor o mie de Kasbahs'.", "Formațiuni stâncoase impresionante."],
      en: ["Known as the 'Valley of a thousand Kasbahs'.", "Impressive rock formations."]
    }
  },
  {
    id: "todra-gorge-relief-v2",
    type: "relief",
    parent: "MA-09",
    coords: [-5.6, 31.5],
    name: { de: "Todra-Schlucht", hu: "Todra-kanyon", ro: "Cheile Todra", en: "Todra Gorge" },
    description: { de: "Eine tiefe Schlucht im östlichen Hohen Atlas.", hu: "Mély kanyon a keleti Magas-Atlaszban.", ro: "Un canion adânc în Atlasul Înalt estic.", en: "A deep gorge in the eastern High Atlas." },
    facts: {
      de: ["Hohe Kalksteinwände.", "Beliebt bei Kletterern."],
      hu: ["Magas mészkőfalak.", "Népszerű a sziklamászók körében."],
      ro: ["Pereți înalți de calcar.", "Populară printre alpiniști."],
      en: ["High limestone walls.", "Popular with climbers."]
    }
  },
  {
    id: "sahara-desert-relief-v2",
    type: "relief",
    parent: "MA-10",
    coords: [-4.0, 30.0],
    name: { de: "Sahara", hu: "Szahara", ro: "Sahara", en: "Sahara" },
    description: { de: "Die größte Trockenwüste der Erde.", hu: "A Föld legnagyobb száraz sivataga.", ro: "Cel mai mare deșert arid de pe Pământ.", en: "The largest hot desert in the world." },
    facts: {
      de: ["Sanddünen in Merzouga.", "Extrem arides Klima."],
      hu: ["Homokdűnék Merzougában.", "Extrém száraz éghajlat."],
      ro: ["Dune de nisip în Merzouga.", "Climat extrem de arid."],
      en: ["Sand dunes in Merzouga.", "Extremely arid climate."]
    }
  },
  {
    id: "merzouga-dunes-relief-v2",
    type: "relief",
    parent: "MA-10",
    coords: [-4.0, 31.1],
    name: { de: "Dünen von Merzouga", hu: "Merzouga-dűnék", ro: "Dunele din Merzouga", en: "Merzouga Dunes" },
    description: { de: "Bekanntes Dünengebiet Erg Chebbi.", hu: "Híres dűnevidék, Erg Chebbi.", ro: "Zonă dunară faimoasă, Erg Chebbi.", en: "Famous dune area Erg Chebbi." },
    facts: {
      de: ["Hohe goldene Sanddünen.", "Wichtiges Tourismusziel."],
      hu: ["Magas aranyszínű homokdűnék.", "Fontos turisztikai célpont."],
      ro: ["Dune înalte de nisip auriu.", "Destinație turistică importantă."],
      en: ["High golden sand dunes.", "Important tourist destination."]
    }
  },
  {
    id: "moulouya-river-valley-relief-v2",
    type: "relief",
    parent: "MA-11",
    coords: [-2.5, 34.8],
    name: { de: "Moulouya-Tal", hu: "Moulouya-völgy", ro: "Valea Moulouya", en: "Moulouya Valley" },
    description: { de: "Flusstal im Nordosten Marokkos.", hu: "Folyóvölgy Marokkó északkeleti részén.", ro: "Valea râului în nord-estul Marocului.", en: "River valley in northeastern Morocco." },
    facts: {
      de: ["Mündet in das Mittelmeer.", "Wichtige landwirtschaftliche Region."],
      hu: ["A Földközi-tengerbe torkollik.", "Fontos mezőgazdasági régió."],
      ro: ["Se varsă în Marea Mediterană.", "Regiune agricolă importantă."],
      en: ["Flows into the Mediterranean Sea.", "Important agricultural region."]
    }
  },
  {
    id: "zaer-plateau-relief-v2",
    type: "relief",
    parent: "MA-12",
    coords: [-6.5, 33.6],
    name: { de: "Zaer-Plateau", hu: "Zaer-fennsík", ro: "Podișul Zaer", en: "Zaer Plateau" },
    description: { de: "Eine hügelige Hochebene.", hu: "Dombos fennsík.", ro: "Un podiș deluros.", en: "A hilly plateau." },
    facts: {
      de: ["Landwirtschaftlich genutzt.", "Sanfte Hügellandschaft."],
      hu: ["Mezőgazdasági művelés alatt.", "Szelíd dombvidék."],
      ro: ["Folosit agricol.", "Peisaj deluros blând."],
      en: ["Used for agriculture.", "Gentle hilly landscape."]
    }
  },
  {
    id: "sous-valley-relief-v2",
    type: "relief",
    parent: "MA-01",
    coords: [-9.0, 30.5],
    name: { de: "Sous-Tal", hu: "Sous-völgy", ro: "Valea Sous", en: "Sous Valley" },
    description: { de: "Fruchtbares Tal zwischen Atlas und Anti-Atlas.", hu: "Termékeny völgy az Atlasz és az Anti-Atlasz között.", ro: "Vale fertilă între Atlas și Anti-Atlas.", en: "Fertile valley between the Atlas and Anti-Atlas." },
    facts: {
      de: ["Bekannt für Arganbäume.", "Wichtiges Anbaugebiet für Zitrusfrüchte."],
      hu: ["Ismert az argánfákról.", "Fontos citrusfélék termesztési területe."],
      ro: ["Cunoscută pentru argan.", "Regiune importantă de cultivare a citricelor."],
      en: ["Known for argan trees.", "Important citrus growing area."]
    }
  },
  {
    id: "nador-lagoon-relief-v2",
    type: "relief",
    parent: "MA-02",
    coords: [-2.8, 35.1],
    name: { de: "Lagune von Nador", hu: "Nadori-lagúna", ro: "Laguna din Nador", en: "Nador Lagoon" },
    description: { de: "Große Lagune an der Mittelmeerküste.", hu: "Nagy lagúna a Földközi-tenger partján.", ro: "Lagună mare la coasta Mării Mediterane.", en: "Large lagoon on the Mediterranean coast." },
    facts: {
      de: ["Wichtiges Feuchtgebiet.", "Lebensraum für Zugvögel."],
      hu: ["Fontos vizes élőhely.", "Élőhely a költöző madarak számára."],
      ro: ["Zonă umedă importantă.", "Habitat pentru păsările migratoare."],
      en: ["Important wetland.", "Habitat for migratory birds."]
    }
  },
  {
    id: "guelmim-plains-relief-v2",
    type: "relief",
    parent: "MA-05",
    coords: [-10.0, 29.0],
    name: { de: "Ebenen von Guelmim", hu: "Guelmimi-síkság", ro: "Câmpiile din Guelmim", en: "Guelmim Plains" },
    description: { de: "Trockene Ebenen im Südwesten.", hu: "Száraz síkságok délnyugaton.", ro: "Câmpii aride în sud-vest.", en: "Dry plains in the southwest." },
    facts: {
      de: ["Übergang zur Wüste.", "Nomadenkultur."],
      hu: ["Átmenet a sivatag felé.", "Nomád kultúra."],
      ro: ["Tranziție spre deșert.", "Cultură nomadă."],
      en: ["Transition towards the desert.", "Nomadic culture."]
    }
  },
  {
    id: "oued-noun-valley-relief-v2",
    type: "relief",
    parent: "MA-05",
    coords: [-10.5, 29.2],
    name: { de: "Oued Noun", hu: "Oued Noun", ro: "Oued Noun", en: "Oued Noun" },
    description: { de: "Ein bedeutendes Wadi im Südwesten.", hu: "Fontos vádi délnyugaton.", ro: "Un wadi important în sud-vest.", en: "An important wadi in the southwest." },
    facts: {
      de: ["Trockenflussbett.", "Historische Handelsroute."],
      hu: ["Száraz folyómeder.", "Történelmi kereskedelmi útvonal."],
      ro: ["Albie de râu uscată.", "Rută comercială istorică."],
      en: ["Dry riverbed.", "Historical trade route."]
    }
  },
  {
    id: "figuig-oasis-relief-v2",
    type: "relief",
    parent: "MA-06",
    coords: [-1.2, 32.1],
    name: { de: "Oase Figuig", hu: "Figuig oázis", ro: "Oaza Figuig", en: "Figuig Oasis" },
    description: { de: "Eine isolierte Oase im Osten.", hu: "Izolált oázis keleten.", ro: "Oază izolată în est.", en: "An isolated oasis in the east." },
    facts: {
      de: ["Palmenhaine.", "Wüstengrenze."],
      hu: ["Pálmaligetek.", "Sivatagi határ."],
      ro: ["Plantații de palmieri.", "Granița deșertului."],
      en: ["Palm groves.", "Desert border."]
    }
  },
  {
    id: "moulay-idriss-hills-relief-v2",
    type: "relief",
    parent: "MA-04",
    coords: [-5.5, 34.0],
    name: { de: "Hügel bei Moulay Idriss", hu: "Moulay Idriss környéki dombok", ro: "Dealurile de lângă Moulay Idriss", en: "Hills near Moulay Idriss" },
    description: { de: "Hügelige Landschaft um die heilige Stadt.", hu: "Dombos táj a szent város körül.", ro: "Peisaj deluros în jurul orașului sfânt.", en: "Hilly landscape around the holy town." },
    facts: {
      de: ["Grüne Hügel.", "Umgebung für Wanderungen."],
      hu: ["Zöld dombok.", "Környék túrázásra."],
      ro: ["Dealuri verzi.", "Împrejurimi pentru drumeții."],
      en: ["Green hills.", "Environment for hikes."]
    }
  },
  {
    id: "oued-sebou-valley-relief-v2",
    type: "relief",
    parent: "MA-07",
    coords: [-6.0, 34.3],
    name: { de: "Sebou-Tal", hu: "Sebou-völgy", ro: "Valea Sebou", en: "Sebou Valley" },
    description: { de: "Großes Tal im Norden Marokkos.", hu: "Nagy völgy Marokkó északi részén.", ro: "Vale mare în nordul Marocului.", en: "Large valley in northern Morocco." },
    facts: {
      de: ["Fruchtbares Ackerland.", "Wichtigster Fluss im Norden."],
      hu: ["Termékeny termőföld.", "Az északi rész legfontosabb folyója."],
      ro: ["Teren agricol fertil.", "Cel mai important râu din nord."],
      en: ["Fertile farmland.", "Most important river in the north."]
    }
  },
  {
    id: "rif-cliffs-relief-v2",
    type: "relief",
    parent: "MA-07",
    coords: [-5.0, 35.5],
    name: { de: "Klippen des Rif", hu: "Rif-sziklák", ro: "Stâncile Rif", en: "Rif Cliffs" },
    description: { de: "Steile Küstenklippen am Mittelmeer.", hu: "Meredek tengerparti sziklák a Földközi-tenger mellett.", ro: "Stânci de coastă abrupte la Marea Mediterană.", en: "Steep coastal cliffs on the Mediterranean." },
    facts: {
      de: ["Spektakuläre Aussicht.", "Schroffe Küstenlinie."],
      hu: ["Látványos kilátás.", "Zord partszakasz."],
      ro: ["Vedere spectaculoasă.", "Linie de coastă aspră."],
      en: ["Spectacular view.", "Rugged coastline."]
    }
  },
  {
    id: "atlas-foothills-relief-v2",
    type: "relief",
    parent: "MA-08",
    coords: [-7.0, 31.5],
    name: { de: "Atlas-Vorgebirge", hu: "Atlasz-előhegység", ro: "Piemontul Atlasului", en: "Atlas Foothills" },
    description: { de: "Sanfte Hügel am Fuß des Hohen Atlas.", hu: "Szelíd dombok a Magas-Atlasz lábánál.", ro: "Dealuri blânde la poalele Atlasului Înalt.", en: "Gentle hills at the foot of the High Atlas." },
    facts: {
      de: ["Übergangszone.", "Traditionelle Dörfer."],
      hu: ["Átmeneti zóna.", "Hagyományos falvak."],
      ro: ["Zonă de tranziție.", "Sate tradiționale."],
      en: ["Transition zone.", "Traditional villages."]
    }
  },
  {
    id: "tiznit-plain-relief-v2",
    type: "relief",
    parent: "MA-05",
    coords: [-9.7, 29.7],
    name: { de: "Ebene von Tiznit", hu: "Tiznit-síkság", ro: "Câmpia Tiznit", en: "Tiznit Plain" },
    description: { de: "Flache Ebene nahe der Atlantikküste.", hu: "Lapos síkság az Atlanti-óceán közelében.", ro: "Câmpie plană lângă coasta Atlanticului.", en: "Flat plain near the Atlantic coast." },
    facts: {
      de: ["Günstiges Klima.", "Landwirtschaftliche Nutzung."],
      hu: ["Kedvező éghajlat.", "Mezőgazdasági művelés."],
      ro: ["Climat favorabil.", "Utilizare agricolă."],
      en: ["Favorable climate.", "Agricultural use."]
    }
  },
  {
    id: "oued-tensift-valley-relief-v2",
    type: "relief",
    parent: "MA-01",
    coords: [-9.0, 31.6],
    name: { de: "Tensift-Tal", hu: "Tensift-völgy", ro: "Valea Tensift", en: "Tensift Valley" },
    description: { de: "Flusstal bei Marrakesch.", hu: "Folyóvölgy Marrákes közelében.", ro: "Valea râului lângă Marrakech.", en: "River valley near Marrakech." },
    facts: {
      de: ["Wasserquelle für die Region.", "Wadi-System."],
      hu: ["Vízforrás a régió számára.", "Vádi-rendszer."],
      ro: ["Sursă de apă pentru regiune.", "Sistem de wadi."],
      en: ["Water source for the region.", "Wadi system."]
    }
  },
  {
    id: "high-plateaus-relief-v2",
    type: "relief",
    parent: "MA-11",
    coords: [-3.0, 33.0],
    name: { de: "Hohe Plateaus", hu: "Magas-fennsíkok", ro: "Podișurile Înalte", en: "High Plateaus" },
    description: { de: "Trockene Hochebenen im Osten.", hu: "Száraz fennsíkok keleten.", ro: "Podișuri aride în est.", en: "Dry plateaus in the east." },
    facts: {
      de: ["Halbwüstenklima.", "Große Flächen."],
      hu: ["Félsivatagi éghajlat.", "Nagy területek."],
      ro: ["Climat de semideșert.", "Zone extinse."],
      en: ["Semi-desert climate.", "Large areas."]
    }
  },
  {
    id: "oued-ziz-valley-relief-v2",
    type: "relief",
    parent: "MA-06",
    coords: [-4.2, 31.8],
    name: { de: "Ziz-Tal", hu: "Ziz-völgy", ro: "Valea Ziz", en: "Ziz Valley" },
    description: { de: "Langes Flusstal mit Oasen.", hu: "Hosszú folyóvölgy oázisokkal.", ro: "Valea lungă a râului cu oaze.", en: "Long river valley with oases." },
    facts: {
      de: ["Spektakuläre Aussicht.", "Wichtige Lebensader."],
      hu: ["Látványos kilátás.", "Fontos éltető elem."],
      ro: ["Vedere spectaculoasă.", "Linie vitală importantă."],
      en: ["Spectacular view.", "Important lifeline."]
    }
  }
];
