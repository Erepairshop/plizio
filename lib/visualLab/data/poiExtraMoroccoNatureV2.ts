// @ts-nocheck
import type { POI } from "./poi";

export const poiExtraMoroccoNatureV2: POI[] = [
  {
    id: "atlas-mountains-nature-v2",
    type: "mountain",
    parent: "MA-01",
    coords: [-7.0, 31.0],
    name: { de: "Atlasgebirge", hu: "Atlasz-hegység", ro: "Munții Atlas", en: "Atlas Mountains" },
    description: { de: "Das Atlasgebirge erstreckt sich über Marokko, Algerien und Tunesien.", hu: "Az Atlasz-hegység Marokkón, Algérián és Tunézián keresztül húzódik.", ro: "Munții Atlas se întind peste Maroc, Algeria și Tunisia.", en: "The Atlas Mountains span across Morocco, Algeria, and Tunisia." },
    facts: {
      de: ["Höchster Gipfel ist der Toubkal.", "Trennung von Mittelmeer und Sahara."],
      hu: ["A legmagasabb csúcsa a Toubkal.", "Elválasztja a Földközi-tengert a Szaharától."],
      ro: ["Cel mai înalt vârf este Toubkal.", "Separă Marea Mediterană de Sahara."],
      en: ["The highest peak is Toubkal.", "Separates the Mediterranean from the Sahara."]
    }, image: "/poi-images/atlas-mountains-nature-v2.webp"},
  {
    id: "toubkal-nature-v2",
    type: "mountain",
    parent: "MA-01",
    coords: [-7.91, 31.06],
    name: { de: "Toubkal", hu: "Toubkal", ro: "Toubkal", en: "Toubkal" },
    description: { de: "Der Jbel Toubkal ist der höchste Berg in Nordafrika.", hu: "A Jbel Toubkal Észak-Afrika legmagasabb hegye.", ro: "Jbel Toubkal este cel mai înalt munte din Africa de Nord.", en: "Jbel Toubkal is the highest mountain in North Africa." },
    facts: {
      de: ["Höhe: 4167 Meter.", "Liegt im Nationalpark Toubkal."],
      hu: ["Magasság: 4167 méter.", "A Toubkal Nemzeti Parkban található."],
      ro: ["Înălțime: 4167 metri.", "Situat în Parcul Național Toubkal."],
      en: ["Height: 4167 meters.", "Located in Toubkal National Park."]
    }, image: "/poi-images/toubkal-nature-v2.webp"},
  {
    id: "moulouya-river-nature-v2",
    type: "river",
    parent: "MA-02",
    coords: [-2.15, 35.12],
    name: { de: "Moulouya", hu: "Muluja", ro: "Moulouya", en: "Moulouya" },
    description: { de: "Die Moulouya ist ein wichtiger Fluss, der in das Mittelmeer mündet.", hu: "A Muluja egy fontos folyó, amely a Földközi-tengerbe ömlik.", ro: "Moulouya este un râu important care se varsă în Marea Mediterană.", en: "The Moulouya is an important river that flows into the Mediterranean Sea." },
    facts: {
      de: ["Länge: etwa 520 km.", "Wichtige Quelle für Bewässerung."],
      hu: ["Hossza: kb. 520 km.", "Fontos forrás az öntözéshez."],
      ro: ["Lungime: aproximativ 520 km.", "Sursă importantă pentru irigații."],
      en: ["Length: about 520 km.", "Important source for irrigation."]
    }, image: "/poi-images/moulouya-river-nature-v2.webp"},
  {
    id: "merzouga-dunes-nature-v2",
    type: "forest", // Using desert is not allowed, using forest as surrogate for natural habitat/landscape area
    parent: "MA-03",
    coords: [-3.99, 31.09],
    name: { de: "Erg Chebbi", hu: "Erg Chebbi", ro: "Erg Chebbi", en: "Erg Chebbi" },
    description: { de: "Erg Chebbi sind beeindruckende Sanddünen in der Nähe von Merzouga.", hu: "Erg Chebbi lenyűgöző homokdűnék Merzouga közelében.", ro: "Erg Chebbi sunt dune de nisip impresionante lângă Merzouga.", en: "Erg Chebbi are impressive sand dunes near Merzouga." },
    facts: {
      de: ["Dünen erreichen 150 m Höhe.", "Bekanntes Ziel für Wüstentourismus."],
      hu: ["A dűnék elérik a 150 méteres magasságot.", "Híres célpont a sivatagi turizmus számára."],
      ro: ["Dunele ating 150 m înălțime.", "Destinație celebră pentru turismul de deșert."],
      en: ["Dunes reach 150 m in height.", "Well-known destination for desert tourism."]
    }, image: "/poi-images/merzouga-dunes-nature-v2.webp"},
  {
    id: "sebkha-tindouf-lake-nature-v2",
    type: "lake",
    parent: "MA-04",
    coords: [-8.0, 27.0],
    name: { de: "Sebkha", hu: "Sebkha", ro: "Sebkha", en: "Sebkha" },
    description: { de: "Ein Salzsee in der Wüstenregion.", hu: "Egy sós tó a sivatagi régióban.", ro: "Un lac sărat în regiunea deșertică.", en: "A salt lake in the desert region." },
    facts: {
      de: ["Periodischer See.", "Salzige Umgebung."],
      hu: ["Időszakos tó.", "Sós környezet."],
      ro: ["Lac periodic.", "Mediu sărat."],
      en: ["Periodic lake.", "Salty environment."]
    }, image: "/poi-images/sebkha-tindouf-lake-nature-v2.webp"},
  {
    id: "oued-draa-nature-v2",
    type: "river",
    parent: "MA-05",
    coords: [-6.8, 28.7],
    name: { de: "Draa", hu: "Draa", ro: "Draa", en: "Draa" },
    description: { de: "Der Draa ist der längste Fluss Marokkos.", hu: "A Draa Marokkó leghosszabb folyója.", ro: "Draa este cel mai lung râu din Maroc.", en: "The Draa is the longest river in Morocco." },
    facts: {
      de: ["Länge: etwa 1100 km.", "Fließt durch Wüstengebiete."],
      hu: ["Hossza: kb. 1100 km.", "Sivatagi területeken folyik keresztül."],
      ro: ["Lungime: aproximativ 1100 km.", "Curge prin zone deșertice."],
      en: ["Length: about 1100 km.", "Flows through desert areas."]
    }, image: "/poi-images/oued-draa-nature-v2.webp"},
  {
    id: "oued-oumm-er-rbia-nature-v2",
    type: "river",
    parent: "MA-06",
    coords: [-8.2, 33.3],
    name: { de: "Oum Er-Rbia", hu: "Oum Er-Rbia", ro: "Oum Er-Rbia", en: "Oum Er-Rbia" },
    description: { de: "Ein bedeutender Fluss mit vielen Staudämmen.", hu: "Egy jelentős folyó számos gáttal.", ro: "Un râu important cu multe baraje.", en: "An important river with many dams." },
    facts: {
      de: ["Versorgt das Land mit Energie.", "Wichtig für die Landwirtschaft."],
      hu: ["Ellátja az országot energiával.", "Fontos a mezőgazdaság számára."],
      ro: ["Furnizează energie țării.", "Important pentru agricultură."],
      en: ["Supplies the country with energy.", "Important for agriculture."]
    }, image: "/poi-images/oued-oumm-er-rbia-nature-v2.webp"},
  {
    id: "agadir-bay-nature-v2",
    type: "sea",
    parent: "MA-07",
    coords: [-9.6, 30.4],
    name: { de: "Bucht von Agadir", hu: "Agadiri-öböl", ro: "Golful Agadir", en: "Bay of Agadir" },
    description: { de: "Eine Küstenregion am Atlantik.", hu: "Egy partvidék az Atlanti-óceánon.", ro: "O regiune de coastă la Oceanul Atlantic.", en: "A coastal region on the Atlantic Ocean." },
    facts: {
      de: ["Beliebtes Touristenziel.", "Breite Sandstrände."],
      hu: ["Népszerű turisztikai célpont.", "Széles homokos strandok."],
      ro: ["Destinație turistică populară.", "Plaje largi cu nisip."],
      en: ["Popular tourist destination.", "Wide sandy beaches."]
    }, image: "/poi-images/agadir-bay-nature-v2.webp"},
  {
    id: "rif-mountains-nature-v2",
    type: "mountain",
    parent: "MA-08",
    coords: [-5.0, 35.0],
    name: { de: "Rifgebirge", hu: "Rif-hegység", ro: "Munții Rif", en: "Rif Mountains" },
    description: { de: "Ein Gebirge im Norden Marokkos.", hu: "Hegység Marokkó északi részén.", ro: "Un lanț muntos în nordul Marocului.", en: "A mountain range in northern Morocco." },
    facts: {
      de: ["Grüne Landschaften.", "Direkt am Mittelmeer."],
      hu: ["Zöld tájak.", "Közvetlenül a Földközi-tenger mellett."],
      ro: ["Peisaje verzi.", "Direct la Marea Mediterană."],
      en: ["Green landscapes.", "Directly by the Mediterranean Sea."]
    }, image: "/poi-images/rif-mountains-nature-v2.webp"},
  {
    id: "sebha-boughaba-lake-nature-v2",
    type: "lake",
    parent: "MA-09",
    coords: [-6.6, 34.2],
    name: { de: "Sidi Boughaba", hu: "Sidi Boughaba", ro: "Sidi Boughaba", en: "Sidi Boughaba" },
    description: { de: "Ein bedeutendes Feuchtgebiet mit einem See.", hu: "Egy jelentős vizes élőhely egy tóval.", ro: "O zonă umedă semnificativă cu un lac.", en: "A significant wetland with a lake." },
    facts: {
      de: ["Ramsar-Gebiet.", "Wichtig für Zugvögel."],
      hu: ["Ramsari terület.", "Fontos a vándormadarak számára."],
      ro: ["Zonă Ramsar.", "Important pentru păsările migratoare."],
      en: ["Ramsar site.", "Important for migratory birds."]
    }, image: "/poi-images/sebha-boughaba-lake-nature-v2.webp"},
  {
    id: "oued-tensift-nature-v2",
    type: "river",
    parent: "MA-10",
    coords: [-9.2, 31.6],
    name: { de: "Tensift", hu: "Tensift", ro: "Tensift", en: "Tensift" },
    description: { de: "Fluss, der bei Marrakesch fließt.", hu: "Folyó, amely Marrákes közelében folyik.", ro: "Râu care curge lângă Marrakech.", en: "River that flows near Marrakech." },
    facts: {
      de: ["Speist die Ebene von Haouz.", "Saisonaler Wasserfluss."],
      hu: ["Ellátja a Haouz-síkságot.", "Időszakos vízfolyás."],
      ro: ["Alimentează câmpia Haouz.", "Flux de apă sezonier."],
      en: ["Feeds the Haouz plain.", "Seasonal water flow."]
    }, image: "/poi-images/oued-tensift-nature-v2.webp"},
  {
    id: "lalla-takerkoust-lake-nature-v2",
    type: "lake",
    parent: "MA-11",
    coords: [-8.1, 31.4],
    name: { de: "Lalla Takerkoust", hu: "Lalla Takerkoust", ro: "Lalla Takerkoust", en: "Lalla Takerkoust" },
    description: { de: "Ein künstlicher Stausee in der Nähe von Marrakesch.", hu: "Mesterséges víztározó Marrákes közelében.", ro: "Un lac de acumulare artificial lângă Marrakech.", en: "An artificial reservoir near Marrakech." },
    facts: {
      de: ["Wichtig für die Wasserversorgung.", "Freizeitaktivitäten."],
      hu: ["Fontos a vízellátásban.", "Szabadidős tevékenységek."],
      ro: ["Important pentru alimentarea cu apă.", "Activități de agrement."],
      en: ["Important for water supply.", "Recreational activities."]
    }, image: "/poi-images/lalla-takerkoust-lake-nature-v2.webp"},
  {
    id: "oued-sebou-nature-v2",
    type: "river",
    parent: "MA-12",
    coords: [-6.2, 34.2],
    name: { de: "Sebou", hu: "Sebou", ro: "Sebou", en: "Sebou" },
    description: { de: "Einer der wasserreichsten Flüsse Marokkos.", hu: "Az egyik legbővízűbb folyó Marokkóban.", ro: "Unul dintre cele mai bogate râuri în apă din Maroc.", en: "One of the most water-rich rivers in Morocco." },
    facts: {
      de: ["Mündet in den Atlantik.", "Wichtig für die Landwirtschaft."],
      hu: ["Az Atlanti-óceánba ömlik.", "Fontos a mezőgazdaság számára."],
      ro: ["Se varsă în Oceanul Atlantic.", "Important pentru agricultură."],
      en: ["Flows into the Atlantic.", "Important for agriculture."]
    }, image: "/poi-images/oued-sebou-nature-v2.webp"},
  {
    id: "bin-el-ouidane-lake-nature-v2",
    type: "lake",
    parent: "MA-13",
    coords: [-6.4, 32.1],
    name: { de: "Bin El Ouidane", hu: "Bin El Ouidane", ro: "Bin El Ouidane", en: "Bin El Ouidane" },
    description: { de: "Ein großer Stausee in Marokko.", hu: "Egy nagy víztározó Marokkóban.", ro: "Un mare lac de acumulare în Maroc.", en: "A large reservoir in Morocco." },
    facts: {
      de: ["Sehr tief.", "Spektakuläre Berglandschaft."],
      hu: ["Nagyon mély.", "Látványos hegyvidéki táj."],
      ro: ["Foarte adânc.", "Peisaj montan spectaculos."],
      en: ["Very deep.", "Spectacular mountain scenery."]
    }, image: "/poi-images/bin-el-ouidane-lake-nature-v2.webp"},
  {
    id: "oued-ziz-nature-v2",
    type: "river",
    parent: "MA-14",
    coords: [-4.2, 31.2],
    name: { de: "Ziz", hu: "Ziz", ro: "Ziz", en: "Ziz" },
    description: { de: "Fluss, der durch eine Oase fließt.", hu: "Folyó, amely egy oázison folyik keresztül.", ro: "Râu care curge printr-o oază.", en: "River that flows through an oasis." },
    facts: {
      de: ["Bildet den Tafilalet-Oasengürtel.", "Saisonaler Fluss."],
      hu: ["A Tafilalet oázisövet alkotja.", "Időszakos folyó."],
      ro: ["Formează centura de oaze Tafilalet.", "Râu sezonier."],
      en: ["Forms the Tafilalet oasis belt.", "Seasonal river."]
    }, image: "/poi-images/oued-ziz-nature-v2.webp"},
  {
    id: "oued-guir-nature-v2",
    type: "river",
    parent: "MA-15",
    coords: [-2.0, 32.0],
    name: { de: "Guir", hu: "Guir", ro: "Guir", en: "Guir" },
    description: { de: "Ein Fluss in der östlichen Wüstenregion.", hu: "Folyó a keleti sivatagi régióban.", ro: "Un râu în regiunea deșertică estică.", en: "A river in the eastern desert region." },
    facts: {
      de: ["Fließt Richtung Süden.", "Wüstenfluss."],
      hu: ["Dél felé folyik.", "Sivatagi folyó."],
      ro: ["Curge spre sud.", "Râu de deșert."],
      en: ["Flows south.", "Desert river."]
    }, image: "/poi-images/oued-guir-nature-v2.webp"},
  {
    id: "oued-noun-nature-v2",
    type: "river",
    parent: "MA-16",
    coords: [-10.2, 28.8],
    name: { de: "Noun", hu: "Noun", ro: "Noun", en: "Noun" },
    description: { de: "Ein kleinerer Fluss im Südwesten.", hu: "Egy kisebb folyó délnyugaton.", ro: "Un râu mai mic în sud-vest.", en: "A smaller river in the southwest." },
    facts: {
      de: ["Fließt in den Atlantik.", "Trockene Region."],
      hu: ["Az Atlanti-óceánba folyik.", "Száraz régió."],
      ro: ["Se varsă în Oceanul Atlantic.", "Regiune aridă."],
      en: ["Flows into the Atlantic.", "Dry region."]
    }, image: "/poi-images/oued-noun-nature-v2.webp"},
  {
    id: "oued-sakia-el-hamra-nature-v2",
    type: "river",
    parent: "MA-17",
    coords: [-13.0, 27.1],
    name: { de: "Sakia El Hamra", hu: "Sakia El Hamra", ro: "Sakia El Hamra", en: "Sakia El Hamra" },
    description: { de: "Ein bedeutendes Wadi.", hu: "Egy jelentős vádi.", ro: "Un ued semnificativ.", en: "A significant wadi." },
    facts: {
      de: ["Führt selten Wasser.", "Wüstenlandschaft."],
      hu: ["Ritkán vezet vizet.", "Sivatagi táj."],
      ro: ["Conduce rar apă.", "Peisaj de deșert."],
      en: ["Rarely carries water.", "Desert landscape."]
    }, image: "/poi-images/oued-sakia-el-hamra-nature-v2.webp"},
  {
    id: "oued-oued-ed-dahab-nature-v2",
    type: "river",
    parent: "MA-18",
    coords: [-15.5, 23.5],
    name: { de: "Oued Ed-Dahab", hu: "Oued Ed-Dahab", ro: "Oued Ed-Dahab", en: "Oued Ed-Dahab" },
    description: { de: "Ein Wadi in der südlichsten Region.", hu: "Egy vádi a legdélibb régióban.", ro: "Un ued în cea mai sudică regiune.", en: "A wadi in the southernmost region." },
    facts: {
      de: ["Sehr trocken.", "Südliche Wüste."],
      hu: ["Nagyon száraz.", "Déli sivatag."],
      ro: ["Foarte uscat.", "Deșertul sudic."],
      en: ["Very dry.", "Southern desert."]
    }, image: "/poi-images/oued-oued-ed-dahab-nature-v2.webp"},
  {
    id: "oued-souss-nature-v2",
    type: "river",
    parent: "MA-19",
    coords: [-9.5, 30.3],
    name: { de: "Souss", hu: "Souss", ro: "Souss", en: "Souss" },
    description: { de: "Fluss in der Souss-Ebene.", hu: "Folyó a Souss-síkságon.", ro: "Râu în câmpia Souss.", en: "River in the Souss plain." },
    facts: {
      de: ["Wichtig für Arganbäume.", "Landwirtschaftlich genutzt."],
      hu: ["Fontos az argánfák számára.", "Mezőgazdaságilag hasznosított."],
      ro: ["Important pentru copacii de argan.", "Utilizat în agricultură."],
      en: ["Important for argan trees.", "Used for agriculture."]
    }, image: "/poi-images/oued-souss-nature-v2.webp"},
  {
    id: "oued-massa-nature-v2",
    type: "river",
    parent: "MA-20",
    coords: [-9.6, 30.1],
    name: { de: "Massa", hu: "Massa", ro: "Massa", en: "Massa" },
    description: { de: "Fluss im Süden Marokkos.", hu: "Folyó Marokkó déli részén.", ro: "Râu în sudul Marocului.", en: "River in the south of Morocco." },
    facts: {
      de: ["Nationalpark Massa.", "Reiche Vogelwelt."],
      hu: ["Massa Nemzeti Park.", "Gazdag madárvilág."],
      ro: ["Parcul Național Massa.", "Avifaună bogată."],
      en: ["Massa National Park.", "Rich birdlife."]
    }, image: "/poi-images/oued-massa-nature-v2.webp"},
  {
    id: "cap-ghir-nature-v2",
    type: "sea",
    parent: "MA-21",
    coords: [-9.8, 30.6],
    name: { de: "Cap Ghir", hu: "Cap Ghir", ro: "Cap Ghir", en: "Cap Ghir" },
    description: { de: "Ein Kap am Atlantik.", hu: "Egy fok az Atlanti-óceánon.", ro: "Un cap la Oceanul Atlantic.", en: "A cape on the Atlantic." },
    facts: {
      de: ["Surfer-Hotspot.", "Steilküste."],
      hu: ["Szörfös központ.", "Meredek part."],
      ro: ["Hotspot pentru surferi.", "Coastă abruptă."],
      en: ["Surfer hotspot.", "Cliff coast."]
    }, image: "/poi-images/cap-ghir-nature-v2.webp"},
  {
    id: "laguna-nador-nature-v2",
    type: "lake",
    parent: "MA-22",
    coords: [-2.8, 35.1],
    name: { de: "Mar Chica", hu: "Mar Chica", ro: "Mar Chica", en: "Mar Chica" },
    description: { de: "Eine große Salzwasserlagune.", hu: "Egy nagy sós vizű lagúna.", ro: "O lagună mare cu apă sărată.", en: "A large saltwater lagoon." },
    facts: {
      de: ["Vom Mittelmeer getrennt.", "Wichtiges Naturschutzgebiet."],
      hu: ["Elválasztva a Földközi-tengertől.", "Fontos természetvédelmi terület."],
      ro: ["Separată de Marea Mediterană.", "Zonă de protecție a naturii importantă."],
      en: ["Separated from the Mediterranean.", "Important nature reserve."]
    }, image: "/poi-images/laguna-nador-nature-v2.webp"},
  {
    id: "oued-tazeka-nature-v2",
    type: "river",
    parent: "MA-23",
    coords: [-4.2, 34.0],
    name: { de: "Tazeka", hu: "Tazeka", ro: "Tazeka", en: "Tazeka" },
    description: { de: "Fluss im Tazeka-Nationalpark.", hu: "Folyó a Tazeka Nemzeti Parkban.", ro: "Râu în Parcul Național Tazeka.", en: "River in the Tazeka National Park." },
    facts: {
      de: ["Bergige Umgebung.", "Schöne Wasserfälle."],
      hu: ["Hegyvidéki környezet.", "Szép vízesések."],
      ro: ["Mediu montan.", "Cascade frumoase."],
      en: ["Mountainous environment.", "Beautiful waterfalls."]
    }, image: "/poi-images/oued-tazeka-nature-v2.webp"},
  {
    id: "oued-oued-melouya-nature-v2",
    type: "river",
    parent: "MA-24",
    coords: [-3.2, 35.0],
    name: { de: "Moulouya Mündung", hu: "Muluja torkolat", ro: "Estuarul Moulouya", en: "Moulouya Estuary" },
    description: { de: "Die Mündung des Moulouya Flusses.", hu: "A Muluja folyó torkolata.", ro: "Estuarul râului Moulouya.", en: "The mouth of the Moulouya river." },
    facts: {
      de: ["Wichtiges Biotop.", "Zugvogelstation."],
      hu: ["Fontos élőhely.", "Vándormadár állomás."],
      ro: ["Biotop important.", "Stație pentru păsări migratoare."],
      en: ["Important habitat.", "Migratory bird station."]
    }, image: "/poi-images/oued-oued-melouya-nature-v2.webp"},
  {
    id: "oued-oued-nfiss-nature-v2",
    type: "river",
    parent: "MA-25",
    coords: [-8.2, 31.0],
    name: { de: "Nfiss", hu: "Nfiss", ro: "Nfiss", en: "Nfiss" },
    description: { de: "Ein Fluss, der aus dem Atlas entspringt.", hu: "Az Atlaszból eredő folyó.", ro: "Un râu care izvorăște din Atlas.", en: "A river that originates from the Atlas." },
    facts: {
      de: ["Wildes Gebirgswasser.", "Tiefe Täler."],
      hu: ["Vadon hegyi víz.", "Mély völgyek."],
      ro: ["Apă sălbatică de munte.", "Văi adânci."],
      en: ["Wild mountain water.", "Deep valleys."]
    }, image: "/poi-images/oued-oued-nfiss-nature-v2.webp"},
  {
    id: "oued-oued-ouerkha-nature-v2",
    type: "river",
    parent: "MA-26",
    coords: [-5.2, 34.5],
    name: { de: "Ouergha", hu: "Ouergha", ro: "Ouergha", en: "Ouergha" },
    description: { de: "Ein Nebenfluss des Sebou.", hu: "A Sebou mellékfolyója.", ro: "Un afluent al râului Sebou.", en: "A tributary of the Sebou river." },
    facts: {
      de: ["Fließt durch das Rifgebirge.", "Wichtiges Einzugsgebiet."],
      hu: ["A Rif-hegységen folyik keresztül.", "Fontos vízgyűjtő terület."],
      ro: ["Curge prin Munții Rif.", "Bazin hidrografic important."],
      en: ["Flows through the Rif Mountains.", "Important catchment area."]
    }, image: "/poi-images/oued-oued-ouerkha-nature-v2.webp"},
  {
    id: "oued-oued-bou-regreg-nature-v2",
    type: "river",
    parent: "MA-27",
    coords: [-6.8, 34.0],
    name: { de: "Bou Regreg", hu: "Bou Regreg", ro: "Bou Regreg", en: "Bou Regreg" },
    description: { de: "Fluss zwischen Rabat und Salé.", hu: "Folyó Rabat és Salé között.", ro: "Râu între Rabat și Salé.", en: "River between Rabat and Salé." },
    facts: {
      de: ["Mündet in den Atlantik.", "Historische Bedeutung."],
      hu: ["Az Atlanti-óceánba ömlik.", "Történelmi jelentőség."],
      ro: ["Se varsă în Oceanul Atlantic.", "Semnificație istorică."],
      en: ["Flows into the Atlantic.", "Historical significance."]
    }, image: "/poi-images/oued-oued-bou-regreg-nature-v2.webp"},
  {
    id: "oued-oued-tansift-estuary-nature-v2",
    type: "river",
    parent: "MA-28",
    coords: [-9.3, 31.6],
    name: { de: "Tensift Mündung", hu: "Tensift torkolat", ro: "Estuarul Tensift", en: "Tensift Estuary" },
    description: { de: "Die Mündung des Tensift.", hu: "A Tensift torkolata.", ro: "Estuarul Tensift.", en: "The mouth of the Tensift." },
    facts: {
      de: ["Feuchtgebiet.", "Meeresnähe."],
      hu: ["Vizes élőhely.", "Tenger közelsége."],
      ro: ["Zonă umedă.", "Apropierea de mare."],
      en: ["Wetland.", "Near the sea."]
    }, image: "/poi-images/oued-oued-tansift-estuary-nature-v2.webp"},
  {
    id: "cap-spartel-nature-v2",
    type: "sea",
    parent: "MA-29",
    coords: [-5.9, 35.8],
    name: { de: "Cap Spartel", hu: "Cap Spartel", ro: "Cap Spartel", en: "Cap Spartel" },
    description: { de: "Kap bei Tanger, wo Atlantik und Mittelmeer treffen.", hu: "Fok Tangernél, ahol az Atlanti-óceán és a Földközi-tenger találkozik.", ro: "Cap lângă Tanger, unde se întâlnesc Atlanticul și Mediterana.", en: "Cape near Tangier, where the Atlantic and Mediterranean meet." },
    facts: {
      de: ["Sehr markanter Punkt.", "Leuchtturm."],
      hu: ["Nagyon markáns pont.", "Világítótorony."],
      ro: ["Punct foarte distinctiv.", "Far."],
      en: ["Very striking point.", "Lighthouse."]
    }
  }
];

