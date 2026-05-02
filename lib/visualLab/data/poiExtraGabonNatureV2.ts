import type { POI } from "./poi";

export const poiExtraGabonNatureV2: POI[] = [
  {
    id: "ogooue-river-nature-v2",
    type: "river",
    parent: "GA-3",
    coords: [10.2333, -0.7000],
    name: { de: "Ogooué-Fluss", hu: "Ogooué folyó", ro: "Râul Ogooué", en: "Ogooué River" },
    description: { de: "Der längste Fluss Gabuns, der fast das gesamte Land durchquert und in den Atlantik mündet.", hu: "Gabon leghosszabb folyója, amely szinte az egész országon keresztülfolyik, és az Atlanti-óceánba torkollik.", ro: "Cel mai lung râu din Gabon, care traversează aproape întreaga țară și se varsă în Oceanul Atlantic.", en: "The longest river in Gabon, traversing almost the entire country before emptying into the Atlantic Ocean." },
    facts: {
      de: ["Hauptwasserstraße Gabuns", "Über 1.200 km lang"],
      hu: ["Gabon legfőbb vízi útja", "Több mint 1200 km hosszú"],
      ro: ["Principala cale navigabilă a Gabonului", "Peste 1.200 km lungime"],
      en: ["Main waterway of Gabon", "Over 1,200 km long"]
    }
  },
  {
    id: "ivindo-river-nature-v2",
    type: "river",
    parent: "GA-6",
    coords: [12.8667, 0.5667],
    name: { de: "Ivindo-Fluss", hu: "Ivindo folyó", ro: "Râul Ivindo", en: "Ivindo River" },
    description: { de: "Ein bedeutender Nebenfluss des Ogooué, bekannt für seine spektakulären Wasserfälle.", hu: "Az Ogooué jelentős mellékfolyója, amely látványos vízeséseiről ismert.", ro: "Un afluent major al Ogooué, cunoscut pentru cascadele sale spectaculoase.", en: "A major tributary of the Ogooué, famous for its spectacular waterfalls." },
    facts: {
      de: ["Fließt durch dichte Regenwälder", "Heimat der Kongou-Fälle"],
      hu: ["Sűrű esőerdőkön folyik keresztül", "Itt találhatók a Kongou-vízesések"],
      ro: ["Curge prin păduri tropicale dese", "Găzduiește Cascadele Kongou"],
      en: ["Flows through dense rainforests", "Home to the Kongou Falls"]
    }
  },
  {
    id: "ngounie-river-nature-v2",
    type: "river",
    parent: "GA-4",
    coords: [11.0500, -1.8667],
    name: { de: "Ngounié-Fluss", hu: "Ngounié folyó", ro: "Râul Ngounié", en: "Ngounié River" },
    description: { de: "Ein wichtiger Fluss im Südwesten Gabuns, der fruchtbare Täler durchfließt.", hu: "Fontos folyó Gabon délnyugati részén, amely termékeny völgyeken halad keresztül.", ro: "Un râu important în sud-vestul Gabonului, care curge prin văi fertile.", en: "An important river in southwestern Gabon, flowing through fertile valleys." },
    facts: {
      de: ["Nebenfluss des Ogooué", "Wichtig für die Landwirtschaft"],
      hu: ["Az Ogooué mellékfolyója", "Fontos a mezőgazdaság számára"],
      ro: ["Afluent al Ogooué", "Important pentru agricultură"],
      en: ["Tributary of the Ogooué", "Important for agriculture"]
    }
  },
  {
    id: "nyanga-river-nature-v2",
    type: "river",
    parent: "GA-5",
    coords: [11.0333, -3.0000],
    name: { de: "Nyanga-Fluss", hu: "Nyanga folyó", ro: "Râul Nyanga", en: "Nyanga River" },
    description: { de: "Der südlichste Fluss Gabuns, der durch die Provinz Nyanga zum Meer fließt.", hu: "Gabon legdélibb folyója, amely Nyanga tartományon keresztül éri el a tengert.", ro: "Cel mai sudic râu din Gabon, care curge prin provincia Nyanga spre mare.", en: "The southernmost river in Gabon, flowing through the Nyanga province to the sea." },
    facts: {
      de: ["Zweitwichtigster Fluss", "Südliche Grenze der Savanne"],
      hu: ["A második legfontosabb folyó", "A szavanna déli határa"],
      ro: ["Al doilea râu ca importanță", "Limita sudică a savanei"],
      en: ["Second most important river", "Southern limit of the savannah"]
    }
  },
  {
    id: "mount-iboundji-nature-v2",
    type: "mountain",
    parent: "GA-7",
    coords: [11.8333, -1.3333],
    name: { de: "Berg Iboundji", hu: "Iboundji-hegy", ro: "Muntele Iboundji", en: "Mount Iboundji" },
    description: { de: "Einer der höchsten Gipfel in Gabun, gelegen in der Provinz Ogooué-Lolo.", hu: "Gabon egyik legmagasabb csúcsa, amely Ogooué-Lolo tartományban található.", ro: "Unul dintre cele mai înalte vârfuri din Gabon, situat în provincia Ogooué-Lolo.", en: "One of the highest peaks in Gabon, located in the Ogooué-Lolo province." },
    facts: {
      de: ["Über 1.500 m hoch", "Teil des Chaillu-Massivs"],
      hu: ["Több mint 1500 m magas", "A Chaillu-masszívum része"],
      ro: ["Peste 1.500 m înălțime", "Parte a Masivului Chaillu"],
      en: ["Over 1,500 m high", "Part of the Chaillu Massif"]
    }
  },
  {
    id: "mount-milondo-nature-v2",
    type: "mountain",
    parent: "GA-4",
    coords: [11.4000, -1.7000],
    name: { de: "Berg Milondo", hu: "Milondo-hegy", ro: "Muntele Milondo", en: "Mount Milondo" },
    description: { de: "Ein markanter Berg in der Ngounié-Region, umgeben von dichtem Wald.", hu: "Jellegzetes hegy a Ngounié régióban, sűrű erdővel körülvéve.", ro: "Un munte proeminent în regiunea Ngounié, înconjurat de pădure deasă.", en: "A prominent mountain in the Ngounié region, surrounded by dense forest." },
    facts: {
      de: ["Beeindruckende Höhe", "Wichtiger Lebensraum"],
      hu: ["Lenyűgöző magasság", "Fontos élőhely"],
      ro: ["Înălțime impresionantă", "Habitat important"],
      en: ["Impressive height", "Important habitat"]
    }
  },
  {
    id: "pointe-denis-nature-v2",
    type: "sea",
    parent: "GA-1",
    coords: [9.3600, 0.3100],
    name: { de: "Pointe-Denis-Strand", hu: "Pointe-Denis tengerpart", ro: "Plaja Pointe-Denis", en: "Pointe-Denis Beach" },
    description: { de: "Ein wunderschöner Küstenstreifen gegenüber von Libreville, bekannt für seine Ruhe.", hu: "Gyönyörű tengerparti szakasz Libreville-lel szemben, amely nyugalmáról ismert.", ro: "O porțiune frumoasă de coastă vizavi de Libreville, cunoscută pentru liniștea sa.", en: "A beautiful stretch of coastline across from Libreville, known for its tranquility." },
    facts: {
      de: ["Beliebtes Ausflugsziel", "Schildkröten-Nistplatz"],
      hu: ["Népszerű kirándulóhely", "Teknősök fészkelőhelye"],
      ro: ["Destinație populară", "Loc de cuibărit pentru țestoase"],
      en: ["Popular excursion destination", "Turtle nesting site"]
    }
  },
  {
    id: "cap-lopez-nature-v2",
    type: "sea",
    parent: "GA-8",
    coords: [8.7100, -0.6300],
    name: { de: "Kap Lopez", hu: "Lopez-fok", ro: "Capul Lopez", en: "Cap Lopez" },
    description: { de: "Der westlichste Punkt Gabuns, der die Mündung des Ogooué vom Atlantik trennt.", hu: "Gabon legnyugatibb pontja, amely elválasztja az Ogooué torkolatát az Atlanti-óceántól.", ro: "Cel mai vestic punct al Gabonului, care separă gura de vărsare a Ogooué de Atlantic.", en: "The westernmost point of Gabon, separating the mouth of the Ogooué from the Atlantic." },
    facts: {
      de: ["Westlichster Punkt", "Historischer Leuchtturm"],
      hu: ["Legnyugatibb pont", "Történelmi világítótorony"],
      ro: ["Cel mai vestic punct", "Far istoric"],
      en: ["Westernmost point", "Historic lighthouse"]
    }
  },
  {
    id: "lake-onangue-nature-v2",
    type: "lake",
    parent: "GA-3",
    coords: [10.0000, -1.0000],
    name: { de: "Onangué-See", hu: "Onangué-tó", ro: "Lacul Onangué", en: "Lake Onangué" },
    description: { de: "Ein großer Süßwassersee im Ogooué-Delta, reich an Fisch und Vögeln.", hu: "Nagy édesvízi tó az Ogooué-deltában, halakban és madarakban gazdag.", ro: "Un lac mare de apă dulce în delta Ogooué, bogat în pești și păsări.", en: "A large freshwater lake in the Ogooué delta, rich in fish and birds." },
    facts: {
      de: ["Teil eines Feuchtgebiets", "Wichtig für lokale Fischer"],
      hu: ["Vizes élőhely része", "Fontos a helyi halászoknak"],
      ro: ["Parte a unei zone umede", "Important pentru pescarii locali"],
      en: ["Part of a wetland", "Important for local fishermen"]
    }
  },
  {
    id: "lake-azingo-nature-v2",
    type: "lake",
    parent: "GA-3",
    coords: [10.2000, -0.5000],
    name: { de: "Azingo-See", hu: "Azingo-tó", ro: "Lacul Azingo", en: "Lake Azingo" },
    description: { de: "Ein malerischer See nördlich von Lambaréné, umgeben von tropischem Regenwald.", hu: "Festői tó Lambarénétől északra, trópusi esőerdővel körülvéve.", ro: "Un lac pitoresc la nord de Lambaréné, înconjurat de pădure tropicală.", en: "A picturesque lake north of Lambaréné, surrounded by tropical rainforest." },
    facts: {
      de: ["Artenreiche Fauna", "Ruhiges Gewässer"],
      hu: ["Fajgazdag fauna", "Nyugodt vízfelület"],
      ro: ["Faună biodiversă", "Apă liniștită"],
      en: ["Biodiverse fauna", "Calm waters"]
    }
  },
  {
    id: "lake-mandje-nature-v2",
    type: "lake",
    parent: "GA-3",
    coords: [10.3000, -0.9000],
    name: { de: "Mandjé-See", hu: "Mandjé-tó", ro: "Lacul Mandjé", en: "Lake Mandjé" },
    description: { de: "Ein kleinerer See in der Nähe des Ogooué-Flusses mit einer einzigartigen Flora.", hu: "Kisebb tó az Ogooué folyó közelében, egyedülálló növényvilággal.", ro: "Un lac mai mic lângă râul Ogooué, cu o floră unică.", en: "A smaller lake near the Ogooué River with unique flora." },
    facts: {
      de: ["Abgelegene Lage", "Naturbelassen"],
      hu: ["Elszigetelt fekvés", "Természetközeli"],
      ro: ["Locație izolată", "Natural"],
      en: ["Remote location", "Natural state"]
    }
  },
  {
    id: "minkebe-forest-nature-v2",
    type: "forest",
    parent: "GA-9",
    coords: [13.0000, 1.5000],
    name: { de: "Minkébé-Regenwald", hu: "Minkébé esőerdő", ro: "Pădurea Minkébé", en: "Minkébé Rainforest" },
    description: { de: "Eines der größten zusammenhängenden Regenwaldgebiete Zentralafrikas.", hu: "Közép-Afrika egyik legnagyobb összefüggő esőerdőterülete.", ro: "Una dintre cele mai mari zone de pădure tropicală continuă din Africa Centrală.", en: "One of the largest contiguous rainforest areas in Central Africa." },
    facts: {
      de: ["Riesige Artenvielfalt", "Wichtiger Kohlenstoffspeicher"],
      hu: ["Hatalmas biológiai sokféleség", "Fontos szén-dioxid tároló"],
      ro: ["Biodiversitate uriașă", "Important stoc de carbon"],
      en: ["Huge biodiversity", "Important carbon sink"]
    }
  },
  {
    id: "lope-forest-nature-v2",
    type: "forest",
    parent: "GA-6",
    coords: [11.6000, -0.5000],
    name: { de: "Lopé-Wald", hu: "Lopé erdőség", ro: "Pădurea Lopé", en: "Lopé Forest" },
    description: { de: "Ein Mosaik aus Wald und Savanne, das eine reiche Tierwelt beherbergt.", hu: "Erdő és szavanna mozaikja, amely gazdag állatvilágnak ad otthont.", ro: "Un mozaic de pădure și savană care adăpostește o faună bogată.", en: "A mosaic of forest and savannah that harbors a rich wildlife." },
    facts: {
      de: ["UNESCO-Welterbe", "Heimat von Mandrills"],
      hu: ["UNESCO Világörökség", "Mandrillok élőhelye"],
      ro: ["Patrimoniu UNESCO", "Casa mandrililor"],
      en: ["UNESCO World Heritage", "Home to mandrills"]
    }
  },
  {
    id: "crystal-mountains-nature-v2",
    type: "mountain",
    parent: "GA-1",
    coords: [10.5000, 0.5000],
    name: { de: "Kristallberge", hu: "Kristály-hegység", ro: "Munții de Cristal", en: "Crystal Mountains" },
    description: { de: "Ein Gebirgszug im Nordwesten Gabuns, bekannt für seine hohe Biodiversität.", hu: "Hegylánc Gabon északnyugati részén, amely magas biológiai sokféleségéről ismert.", ro: "Un lanț muntos în nord-vestul Gabonului, cunoscut pentru biodiversitatea sa ridicată.", en: "A mountain range in northwestern Gabon, known for its high biodiversity." },
    facts: {
      de: ["Wolkige Gipfel", "Viele endemische Pflanzen"],
      hu: ["Felhőkbe burkolózó csúcsok", "Számos endemikus növény"],
      ro: ["Vârfuri înnorate", "Multe plante endemice"],
      en: ["Cloudy peaks", "Many endemic plants"]
    }
  },
  {
    id: "chaillu-massif-nature-v2",
    type: "mountain",
    parent: "GA-4",
    coords: [12.0000, -1.5000],
    name: { de: "Chaillu-Massiv", hu: "Chaillu-masszívum", ro: "Masivul Chaillu", en: "Chaillu Massif" },
    description: { de: "Ein großes Gebirgsmassiv im Zentrum Gabuns, benannt nach einem Entdecker.", hu: "Hatalmas hegység Gabon központi részén, amelyet egy felfedezőről neveztek el.", ro: "Un masiv muntos mare în centrul Gabonului, numit după un explorator.", en: "A large mountain massif in central Gabon, named after an explorer." },
    facts: {
      de: ["Quellgebiet vieler Flüsse", "Granitformationen"],
      hu: ["Számos folyó forrásvidéke", "Gránitképződmények"],
      ro: ["Zona de izvor a multor râuri", "Formațiuni de granit"],
      en: ["Source of many rivers", "Granite formations"]
    }
  },
  {
    id: "mayumba-coast-nature-v2",
    type: "sea",
    parent: "GA-5",
    coords: [10.6000, -3.4000],
    name: { de: "Mayumba-Küste", hu: "Mayumba-partvidék", ro: "Coasta Mayumba", en: "Mayumba Coast" },
    description: { de: "Ein unberührter Küstenabschnitt im Süden, berühmt für die Lederschildkröten.", hu: "Érintetlen tengerparti szakasz délen, amely a kérgesteknőseiről híres.", ro: "O porțiune de coastă curată în sud, renumită pentru țestoasele luth.", en: "A pristine stretch of coastline in the south, famous for leatherback turtles." },
    facts: {
      de: ["Wilder Atlantik", "Wichtiger Naturschutz"],
      hu: ["Vad Atlanti-óceán", "Fontos természetvédelem"],
      ro: ["Atlanticul sălbatic", "Protecție importantă a naturii"],
      en: ["Wild Atlantic", "Important nature protection"]
    }
  },
  {
    id: "komo-river-nature-v2",
    type: "river",
    parent: "GA-1",
    coords: [10.1167, 0.1667],
    name: { de: "Komo-Fluss", hu: "Komo folyó", ro: "Râul Komo", en: "Komo River" },
    description: { de: "Ein bedeutender Fluss, der in das Ästuar von Gabun bei Libreville mündet.", hu: "Jelentős folyó, amely a Gabon-esztuárba torkollik Libreville közelében.", ro: "Un râu important care se varsă în estuarul Gabonului lângă Libreville.", en: "A significant river that flows into the Gabon Estuary near Libreville." },
    facts: {
      de: ["Mündet ins Ästuar", "Wichtiger Verkehrsweg"],
      hu: ["Az esztuárba torkollik", "Fontos közlekedési útvonal"],
      ro: ["Se varsă în estuar", "Cale de transport importantă"],
      en: ["Empties into the estuary", "Important transport route"]
    }
  },
  {
    id: "muni-river-nature-v2",
    type: "river",
    parent: "GA-1",
    coords: [9.8000, 1.0000],
    name: { de: "Muni-Fluss", hu: "Muni folyó", ro: "Râul Muni", en: "Muni River" },
    description: { de: "Ein Fluss an der Grenze zu Äquatorialguinea, der ein breites Ästuar bildet.", hu: "Folyó az egyenlítői-gíneai határon, amely széles esztuárt alkot.", ro: "Un râu la granița cu Guineea Ecuatorială, care formează un estuar larg.", en: "A river on the border with Equatorial Guinea, forming a wide estuary." },
    facts: {
      de: ["Grenzfluss", "Mangrovenwälder"],
      hu: ["Határfolyó", "Mangroveerdők"],
      ro: ["Râu de frontieră", "Păduri de mangrove"],
      en: ["Border river", "Mangrove forests"]
    }
  },
  {
    id: "kongou-falls-nature-v2",
    type: "river",
    parent: "GA-6",
    coords: [12.8500, 0.3000],
    name: { de: "Kongou-Fälle", hu: "Kongou-vízesés", ro: "Cascadele Kongou", en: "Kongou Falls" },
    description: { de: "Eindrucksvolle Wasserfälle am Ivindo-Fluss, umgeben von dichtem Regenwald.", hu: "Lenyűgöző vízesések az Ivindo folyón, sűrű esőerdővel körülvéve.", ro: "Cascade impresionante pe râul Ivindo, înconjurate de pădure tropicală deasă.", en: "Impressive waterfalls on the Ivindo River, surrounded by dense rainforest." },
    facts: {
      de: ["Über 50 m hoch", "Massive Wassermassen"],
      hu: ["Több mint 50 m magas", "Hatalmas víztömeg"],
      ro: ["Peste 50 m înălțime", "Mase masive de apă"],
      en: ["Over 50 m high", "Massive water volumes"]
    }
  },
  {
    id: "waka-forest-nature-v2",
    type: "forest",
    parent: "GA-4",
    coords: [11.1000, -1.2000],
    name: { de: "Waka-Wald", hu: "Waka erdőség", ro: "Pădurea Waka", en: "Waka Forest" },
    description: { de: "Ein abgelegenes Waldgebiet im Chaillu-Massiv mit einer tiefen Schlucht.", hu: "Elszigetelt erdőterület a Chaillu-masszívumban, mély szakadékkal.", ro: "O zonă forestieră izolată în masivul Chaillu, cu un defileu adânc.", en: "A remote forest area in the Chaillu Massif with a deep gorge." },
    facts: {
      de: ["Tiefe Täler", "Vielzahl an Primaten"],
      hu: ["Mély völgyek", "Számos főemlős"],
      ro: ["Văi adânci", "Varietate de primate"],
      en: ["Deep valleys", "Variety of primates"]
    }
  },
  {
    id: "birougou-forest-nature-v2",
    type: "forest",
    parent: "GA-4",
    coords: [12.3000, -1.8000],
    name: { de: "Birougou-Wald", hu: "Birougou erdőség", ro: "Pădurea Birougou", en: "Birougou Forest" },
    description: { de: "Ein bedeutendes Bergwaldgebiet, das den Chaillu-Gebirgszug schützt.", hu: "Jelentős hegyi erdőterület, amely a Chaillu-hegyláncot védi.", ro: "O zonă importantă de pădure montană care protejează lanțul muntos Chaillu.", en: "A significant montane forest area protecting the Chaillu mountain range." },
    facts: {
      de: ["Bergregenwald", "Wichtiger Wasserspeicher"],
      hu: ["Hegyi esőerdő", "Fontos víztároló"],
      ro: ["Pădure tropicală montană", "Important rezervor de apă"],
      en: ["Montane rainforest", "Important water catchment"]
    }
  },
  {
    id: "fernan-vaz-lagoon-nature-v2",
    type: "lake",
    parent: "GA-8",
    coords: [9.2000, -1.5000],
    name: { de: "Fernan-Vaz-Lagune", hu: "Fernan-Vaz lagúna", ro: "Laguna Fernan Vaz", en: "Fernan Vaz lagoon" },
    description: { de: "Eine weitläufige Lagune an der Küste Gabuns, umgeben von Mangroven und Wäldern.", hu: "Kiterjedt lagúna Gabon tengerpartján, mangroveerdőkkel és erdőkkel körülvéve.", ro: "O lagună vastă pe coasta Gabonului, înconjurată de mangrove și păduri.", en: "A vast lagoon on the coast of Gabon, surrounded by mangroves and forests." },
    facts: {
      de: ["Reich an Vogelarten", "Malerische Aussichten"],
      hu: ["Madárfajokban gazdag", "Festői kilátás"],
      ro: ["Bogată în specii de păsări", "Priveliști pitorești"],
      en: ["Rich in bird species", "Scenic views"]
    }
  },
  {
    id: "ekwata-island-nature-v2",
    type: "island",
    parent: "GA-8",
    coords: [9.0000, -1.3000],
    name: { de: "Ekwata-Insel", hu: "Ekwata-sziget", ro: "Insula Ekwata", en: "Ekwata Island" },
    description: { de: "Eine kleine Insel vor der Küste Gabuns, bekannt für ihre unberührte Natur.", hu: "Kis sziget Gabon partjainál, érintetlen természetéről ismert.", ro: "O mică insulă în largul coastei Gabonului, cunoscută pentru natura sa curată.", en: "A small island off the coast of Gabon, known for its pristine nature." },
    facts: {
      de: ["Vogelparadies", "Vom Tourismus unberührt"],
      hu: ["Madárparadicsom", "Turizmustól érintetlen"],
      ro: ["Paradis al păsărilor", "Neatinsă de turism"],
      en: ["Bird paradise", "Untouched by tourism"]
    }
  },
  {
    id: "ozouri-island-nature-v2",
    type: "island",
    parent: "GA-8",
    coords: [9.1000, -1.1000],
    name: { de: "Ozouri-Insel", hu: "Ozouri-sziget", ro: "Insula Ozouri", en: "Ozouri Island" },
    description: { de: "Eine flache Insel in einer Lagune, ein Rückzugsort für Wasservögel.", hu: "Lapos sziget egy lagúnában, a vízimadarak menedékhelye.", ro: "O insulă plată într-o lagună, un refugiu pentru păsările de apă.", en: "A flat island in a lagoon, a refuge for waterfowl." },
    facts: {
      de: ["Inmitten der Lagune", "Natürliches Ökosystem"],
      hu: ["A lagúna közepén", "Természetes ökoszisztéma"],
      ro: ["În mijlocul lagunei", "Ecosistem natural"],
      en: ["In the middle of the lagoon", "Natural ecosystem"]
    }
  },
  {
    id: "belinga-mountains-nature-v2",
    type: "mountain",
    parent: "GA-6",
    coords: [13.2000, 1.1000],
    name: { de: "Belinga-Berge", hu: "Belinga-hegység", ro: "Munții Belinga", en: "Belinga Mountains" },
    description: { de: "Berge im Nordosten, bekannt für ihre riesigen Eisenerzvorkommen und Wälder.", hu: "Hegyek az északkeleti részen, hatalmas vasérclelőhelyeikről és erdőikről ismertek.", ro: "Munți în nord-est, cunoscuți pentru vastele lor zăcăminte de fier și păduri.", en: "Mountains in the northeast, known for their vast iron ore deposits and forests." },
    facts: {
      de: ["Reich an Bodenschätzen", "Dichte Waldvegetation"],
      hu: ["Ásványkincsekben gazdag", "Sűrű erdei növényzet"],
      ro: ["Bogați în resurse minerale", "Vegetație forestieră deasă"],
      en: ["Rich in mineral resources", "Dense forest vegetation"]
    }
  }
];
