import type { POI } from "./poi";

export const poiExtraTunisiaReliefV2: POI[] = [
  {
    id: "atlas-gebirge-relief-v2",
    type: "relief",
    parent: "TN-12",
    coords: [8.5, 35.5],
    name: { de: "Atlas-Gebirge", hu: "Atlasz-hegység", ro: "Munții Atlas", en: "Atlas Mountains" },
    description: { de: "Ein ausgedehntes Gebirgssystem in Nordafrika, das sich durch Tunesien erstreckt.", hu: "Észak-afrikai hegységrendszer, amely Tunézián is keresztülhúzódik.", ro: "Un sistem muntos extins în Africa de Nord care se întinde prin Tunisia.", en: "An extensive mountain system in North Africa that extends through Tunisia." },
    facts: {
      de: ["Höchster Punkt in Tunesien ist der Djebel Chambi.", "Bildet eine natürliche Barriere gegen die Sahara.", "Wichtige Wasserscheide für das Land.", "Erstreckt sich über 2400 Kilometer."],
      hu: ["Tunézia legmagasabb pontja a Djebel Chambi.", "Természetes gátat képez a Szahara felé.", "Fontos vízválasztó az országban.", "Több mint 2400 kilométer hosszan nyúlik el."],
      ro: ["Cel mai înalt punct din Tunisia este Djebel Chambi.", "Formează o barieră naturală împotriva Saharei.", "Este un bazin hidrografic important pentru țară.", "Se întinde pe 2400 de kilometri."],
      en: ["Highest point in Tunisia is Djebel Chambi.", "Forms a natural barrier against the Sahara.", "Important watershed for the country.", "Extends over 2400 kilometers."]
    }
  },
  {
    id: "djebel-chambi-relief-v2",
    type: "mountain",
    parent: "TN-12",
    coords: [8.68, 35.15],
    name: { de: "Djebel Chambi", hu: "Djebel Chambi", ro: "Djebel Chambi", en: "Djebel Chambi" },
    description: { de: "Der höchste Berg Tunesiens.", hu: "Tunézia legmagasabb hegye.", ro: "Cel mai înalt munte din Tunisia.", en: "The highest mountain in Tunisia." },
    facts: {
      de: ["Erreicht eine Höhe von 1544 Metern.", "Liegt im Nationalpark Djebel Chambi.", "Bedeckt mit Pinienwäldern.", "Ein markantes Wahrzeichen der Region."],
      hu: ["1544 méter magas.", "A Djebel Chambi Nemzeti Parkban található.", "Fenyőerdők borítják.", "A régió kiemelkedő látnivalója."],
      ro: ["Atinge o înălțime de 1544 de metri.", "Situat în Parcul Național Djebel Chambi.", "Acoperit cu păduri de pini.", "Un punct de reper marcant al regiunii."],
      en: ["Reaches a height of 1544 meters.", "Located in the Djebel Chambi National Park.", "Covered with pine forests.", "A prominent landmark of the region."]
    }
  },
  {
    id: "chott-el-jerid-relief-v2",
    type: "relief",
    parent: "TN-07",
    coords: [8.4, 33.7],
    name: { de: "Chott el Djerid", hu: "Chott el Djerid", ro: "Chott el Djerid", en: "Chott el Djerid" },
    description: { de: "Der größte Salzsee Tunesiens, ein ausgedehntes Becken.", hu: "Tunézia legnagyobb sós tava, hatalmas medence.", ro: "Cel mai mare lac sărat din Tunisia, un bazin extins.", en: "The largest salt lake in Tunisia, an extensive basin." },
    facts: {
      de: ["Fläche von etwa 5000 Quadratkilometern.", "Liegt unter dem Meeresspiegel.", "Im Sommer fast völlig ausgetrocknet.", "Farbenprächtige Kristallablagerungen."],
      hu: ["Területe körülbelül 5000 négyzetkilométer.", "A tengerszint alatt fekszik.", "Nyáron majdnem teljesen kiszárad.", "Színes kristálylerakódások jellemzik."],
      ro: ["Suprafață de aproximativ 5000 de kilometri pătrați.", "Situat sub nivelul mării.", "Aproape complet secat vara.", "Depuneri de cristale pline de culoare."],
      en: ["Area of about 5000 square kilometers.", "Located below sea level.", "Almost completely dried up in summer.", "Colorful crystal deposits."]
    }
  },
  {
    id: "tunis-ebene-relief-v2",
    type: "relief",
    parent: "TN-11",
    coords: [10.15, 36.8],
    name: { de: "Ebene von Tunis", hu: "Tuniszi-síkság", ro: "Câmpia Tunis", en: "Plains of Tunis" },
    description: { de: "Fruchtbares Tiefland rund um die Hauptstadt Tunis.", hu: "Termékeny síkság a főváros, Tunisz környékén.", ro: "Câmpie fertilă în jurul capitalei Tunis.", en: "Fertile lowland area surrounding the capital, Tunis." },
    facts: {
      de: ["Historisch bedeutsames landwirtschaftliches Zentrum.", "Gut bewässert durch lokale Flüsse.", "Dichte Besiedlung.", "Sanfte Hügellandschaft."],
      hu: ["Történelmileg jelentős mezőgazdasági központ.", "Helyi folyók által jól öntözött.", "Sűrűn lakott.", "Lankás dombvidék."],
      ro: ["Centru agricol semnificativ istoric.", "Bine irigat de râurile locale.", "Populație densă.", "Peisaj colinar blând."],
      en: ["Historically significant agricultural center.", "Well-irrigated by local rivers.", "Densely populated.", "Gentle hilly landscape."]
    }
  },
  {
    id: "djebel-zaghouan-relief-v2",
    type: "mountain",
    parent: "TN-15",
    coords: [10.1, 36.35],
    name: { de: "Djebel Zaghouan", hu: "Djebel Zaghouan", ro: "Djebel Zaghouan", en: "Djebel Zaghouan" },
    description: { de: "Ein markanter Kalksteinberg südlich von Tunis.", hu: "Jellegzetes mészkőhegy Tunisztól délre.", ro: "Un munte de calcar distinctiv la sud de Tunis.", en: "A prominent limestone mountain south of Tunis." },
    facts: {
      de: ["Höhe von knapp 1300 Metern.", "Wichtige Quelle für antike Aquädukte.", "Naturschutzgebiet.", "Beliebt bei Wanderern."],
      hu: ["Magassága közel 1300 méter.", "Az ókori vízvezetékek fontos forrása.", "Természetvédelmi terület.", "Kedvelt a túrázók körében."],
      ro: ["Înălțime de aproape 1300 de metri.", "Sursă importantă pentru apeductele antice.", "Rezervație naturală.", "Popular printre drumeți."],
      en: ["Height of nearly 1300 meters.", "Important source for ancient aqueducts.", "Nature reserve.", "Popular with hikers."]
    }
  },
  {
    id: "dahar-plateau-relief-v2",
    type: "relief",
    parent: "TN-08",
    coords: [10.3, 33.2],
    name: { de: "Dahar-Plateau", hu: "Dahar-fennsík", ro: "Podișul Dahar", en: "Dahar Plateau" },
    description: { de: "Eine steinige Hochfläche im Südosten Tunesiens.", hu: "Köves fennsík Tunézia délkeleti részén.", ro: "Un platou pietros în sud-estul Tunisiei.", en: "A stony plateau in southeastern Tunisia." },
    facts: {
      de: ["Bekannt für seine Berber-Architektur.", "Viele Höhlensiedlungen.", "Trockenes Wüstenklima.", "Geologisch vielfältige Gesteinsschichten."],
      hu: ["Berber építészetéről ismert.", "Számos barlangtelepülés.", "Száraz sivatagi éghajlat.", "Geológiailag változatos kőzetrétegek."],
      ro: ["Cunoscut pentru arhitectura sa berberă.", "Multe așezări în peșteri.", "Climat deșertic arid.", "Straturi geologice diverse."],
      en: ["Known for its Berber architecture.", "Many cave settlements.", "Dry desert climate.", "Geologically diverse rock layers."]
    }
  },
  {
    id: "cap-bon-halbinsel-relief-v2",
    type: "relief",
    parent: "TN-11",
    coords: [10.9, 36.8],
    name: { de: "Halbinsel Cap Bon", hu: "Cap Bon-félsziget", ro: "Peninsula Cap Bon", en: "Cap Bon Peninsula" },
    description: { de: "Eine fruchtbare Landzunge im Nordosten Tunesiens.", hu: "Termékeny földnyelv Tunézia északkeleti részén.", ro: "Un promontoriu fertil în nord-estul Tunisiei.", en: "A fertile promontory in northeastern Tunisia." },
    facts: {
      de: ["Bekannt für Weinbau und Zitrusfrüchte.", "Küstenlinie mit zahlreichen Buchten.", "Strategisch günstig gelegen.", "Mildes mediterranes Klima."],
      hu: ["Borászatáról és citrusféléiről ismert.", "Partvidéke számos öböllel.", "Stratégiailag kedvező fekvés.", "Enyhe mediterrán éghajlat."],
      ro: ["Cunoscut pentru viticultură și citrice.", "Linia de coastă cu numeroase golfuri.", "Poziție strategică.", "Climat mediteranean blând."],
      en: ["Known for viticulture and citrus fruits.", "Coastline with numerous bays.", "Strategically located.", "Mild Mediterranean climate."]
    }
  },
  {
    id: "djebel-serj-relief-v2",
    type: "mountain",
    parent: "TN-15",
    coords: [9.58, 36.05],
    name: { de: "Djebel Serj", hu: "Djebel Serj", ro: "Djebel Serj", en: "Djebel Serj" },
    description: { de: "Ein imposanter Gebirgszug im Zentrum Tunesiens.", hu: "Impozáns hegyvonulat Tunézia központjában.", ro: "Un lanț muntos impunător în centrul Tunisiei.", en: "An imposing mountain range in central Tunisia." },
    facts: {
      de: ["Bekannt für die 'Aïn Dhab'-Höhle.", "Kalkstein-Massiv.", "Lebensraum seltener Pflanzen.", "Herausforderndes Gelände für Bergsteiger."],
      hu: ["Az 'Aïn Dhab' barlangjáról ismert.", "Mészkő-masszívum.", "Ritka növények élőhelye.", "Kihívást jelentő terep hegymászóknak."],
      ro: ["Cunoscut pentru peștera 'Aïn Dhab'.", "Masiv de calcar.", "Habitat pentru plante rare.", "Teren provocator pentru alpiniști."],
      en: ["Known for the 'Aïn Dhab' cave.", "Limestone massif.", "Habitat for rare plants.", "Challenging terrain for mountaineers."]
    }
  },
  {
    id: "gulf-von-gabes-relief-v2",
    type: "relief",
    parent: "TN-07",
    coords: [10.5, 34.0],
    name: { de: "Golf von Gabès", hu: "Gabèsi-öböl", ro: "Golful Gabès", en: "Gulf of Gabes" },
    description: { de: "Ein großer flacher Golf an der tunesischen Küste.", hu: "Nagy, sekély öböl a tunéziai partvidéken.", ro: "Un golf mare și puțin adânc pe coasta tunisiană.", en: "A large, shallow gulf on the Tunisian coast." },
    facts: {
      de: ["Besonders große Gezeitenunterschiede.", "Wichtige Fischereiregion.", "Umfasst die Insel Djerba.", "Sandige Küstenabschnitte."],
      hu: ["Különösen nagy árapály-különbségek.", "Fontos halászati régió.", "Magában foglalja Djerba szigetét.", "Homokos partvidék."],
      ro: ["Diferențe de maree deosebit de mari.", "Regiune pescărească importantă.", "Include insula Djerba.", "Porțiuni de coastă nisipoasă."],
      en: ["Particularly large tidal differences.", "Important fishing region.", "Includes the island of Djerba.", "Sandy coastal sections."]
    }
  },
  {
    id: "djebel-orbata-relief-v2",
    type: "mountain",
    parent: "TN-05",
    coords: [8.8, 34.4],
    name: { de: "Djebel Orbata", hu: "Djebel Orbata", ro: "Djebel Orbata", en: "Djebel Orbata" },
    description: { de: "Ein Gebirgsmassiv in der Region Gafsa.", hu: "Hegyvonulat Gafsa régióban.", ro: "Un masiv muntos în regiunea Gafsa.", en: "A mountain massif in the Gafsa region." },
    facts: {
      de: ["Geologisch geprägt von Phosphatvorkommen.", "Trockene Berglandschaft.", "Teil der östlichen Atlasausläufer.", "Wichtiger ökologischer Korridor."],
      hu: ["Geológiailag foszfátlelőhelyek jellemzik.", "Száraz hegyvidéki táj.", "A keleti Atlasz-hegység része.", "Fontos ökológiai folyosó."],
      ro: ["Geologic marcat de zăcăminte de fosfați.", "Peisaj montan arid.", "Parte a ramificațiilor estice ale Atlasului.", "Coridor ecologic important."],
      en: ["Geologically characterized by phosphate deposits.", "Dry mountain landscape.", "Part of the eastern Atlas foothills.", "Important ecological corridor."]
    }
  },
  {
    id: "kroumirie-gebirge-relief-v2",
    type: "forest",
    parent: "TN-14",
    coords: [8.8, 36.8],
    name: { de: "Kroumirie-Gebirge", hu: "Kroumirie-hegység", ro: "Munții Kroumirie", en: "Kroumirie Mountains" },
    description: { de: "Ein bewaldetes Bergland im Nordwesten Tunesiens.", hu: "Erdős hegyvidék Tunézia északnyugati részén.", ro: "Un ținut muntos împădurit în nord-vestul Tunisiei.", en: "A forested mountain region in northwestern Tunisia." },
    facts: {
      de: ["Höchste Niederschläge in Tunesien.", "Dichte Korkeichenwälder.", "Kühleres Klima als im Rest des Landes.", "Hohe Biodiversität."],
      hu: ["Itt a legmagasabb a csapadék Tunéziában.", "Sűrű paratölgy-erdők.", "Hűvösebb éghajlat, mint az ország többi részén.", "Magas biodiverzitás."],
      ro: ["Cele mai ridicate precipitații din Tunisia.", "Păduri dese de stejar de plută.", "Climat mai răcoros decât în restul țării.", "Biodiversitate ridicată."],
      en: ["Highest rainfall in Tunisia.", "Dense cork oak forests.", "Cooler climate than in the rest of the country.", "High biodiversity."]
    }
  },
  {
    id: "djebel-bou-kornine-relief-v2",
    type: "mountain",
    parent: "TN-11",
    coords: [10.33, 36.68],
    name: { de: "Djebel Bou Kornine", hu: "Djebel Bou Kornine", ro: "Djebel Bou Kornine", en: "Djebel Bou Kornine" },
    description: { de: "Ein markanter Berg nahe der Bucht von Tunis.", hu: "Jellegzetes hegy a Tuniszi-öböl közelében.", ro: "Un munte distinctiv lângă Golful Tunis.", en: "A prominent mountain near the Bay of Tunis." },
    facts: {
      de: ["Höhe von knapp 600 Metern.", "Nationalpark-Status.", "Beliebtes Ausflugsziel.", "Bietet einen Panoramablick auf Tunis."],
      hu: ["Magassága közel 600 méter.", "Nemzeti park státusz.", "Kedvelt kirándulóhely.", "Panorámás kilátás nyílik Tuniszra."],
      ro: ["Înălțime de aproape 600 de metri.", "Statut de parc național.", "Destinație populară pentru excursii.", "Oferă o vedere panoramică asupra Tunisului."],
      en: ["Height of nearly 600 meters.", "National park status.", "Popular destination for excursions.", "Offers a panoramic view of Tunis."]
    }
  },
  {
    id: "djebel-biada-relief-v2",
    type: "mountain",
    parent: "TN-06",
    coords: [9.1, 36.3],
    name: { de: "Djebel Biada", hu: "Djebel Biada", ro: "Djebel Biada", en: "Djebel Biada" },
    description: { de: "Ein Gebirgszug in der Region Jendouba.", hu: "Hegyvonulat Jendouba régióban.", ro: "Un lanț muntos în regiunea Jendouba.", en: "A mountain range in the Jendouba region." },
    facts: {
      de: ["Teil des nördlichen Atlas.", "Bedeckt von Eichen- und Pinienwäldern.", "Relativ unberührte Natur.", "Ideal zum Wandern."],
      hu: ["Az északi Atlasz-hegység része.", "Tölgy- és fenyőerdők borítják.", "Relatíve érintetlen természet.", "Ideális túrázáshoz."],
      ro: ["Parte a Atlasului de nord.", "Acoperit de păduri de stejar și pin.", "Natură relativ neatinsă.", "Ideal pentru drumeții."],
      en: ["Part of the northern Atlas.", "Covered by oak and pine forests.", "Relatively untouched nature.", "Ideal for hiking."]
    }
  },
  {
    id: "djebel-mghila-relief-v2",
    type: "mountain",
    parent: "TN-04",
    coords: [9.25, 35.3],
    name: { de: "Djebel Mghila", hu: "Djebel Mghila", ro: "Djebel Mghila", en: "Djebel Mghila" },
    description: { de: "Ein Bergmassiv in Zentraltunesien.", hu: "Hegymasszívum Közép-Tunéziában.", ro: "Un masiv muntos în Tunisia centrală.", en: "A mountain massif in central Tunisia." },
    facts: {
      de: ["Schutzgebiet für Berg-Gazellen.", "Typische semiaride Flora.", "Zerklüftete Landschaft.", "Wichtiger Lebensraum."],
      hu: ["Hegyi gazellák természetvédelmi területe.", "Tipikus félszáraz flóra.", "Tagolt táj.", "Fontos élőhely."],
      ro: ["Arie protejată pentru gazelele de munte.", "Floră tipică semiaridă.", "Peisaj accidentat.", "Habitat important."],
      en: ["Protected area for mountain gazelles.", "Typical semi-arid flora.", "Rugged landscape.", "Important habitat."]
    }
  },
  {
    id: "djebel-selloum-relief-v2",
    type: "mountain",
    parent: "TN-12",
    coords: [8.8, 35.1],
    name: { de: "Djebel Selloum", hu: "Djebel Selloum", ro: "Djebel Selloum", en: "Djebel Selloum" },
    description: { de: "Ein Bergzug südlich von Kasserine.", hu: "Hegyvonulat Kasserine-től délre.", ro: "Un lanț muntos la sud de Kasserine.", en: "A mountain range south of Kasserine." },
    facts: {
      de: ["Karge, trockene Umgebung.", "Hohe geologische Aktivität in der Erdgeschichte.", "Wichtig für die regionale Hydrologie.", "Grenzgebirge zwischen Ebenen."],
      hu: ["Kopár, száraz környezet.", "Magas geológiai aktivitás a földtörténet során.", "Fontos a regionális hidrológia szempontjából.", "Határhegység a síkságok között."],
      ro: ["Mediu arid și steril.", "Activitate geologică ridicată în istoria pământului.", "Important pentru hidrologia regională.", "Munte de graniță între câmpii."],
      en: ["Barren, dry environment.", "High geological activity in earth history.", "Important for regional hydrology.", "Border mountain between plains."]
    }
  },
  {
    id: "djebel-fkirine-relief-v2",
    type: "mountain",
    parent: "TN-11",
    coords: [10.0, 36.5],
    name: { de: "Djebel Fkirine", hu: "Djebel Fkirine", ro: "Djebel Fkirine", en: "Djebel Fkirine" },
    description: { de: "Ein markantes Bergmassiv nahe Zaghouan.", hu: "Jellegzetes hegymasszívum Zaghouan közelében.", ro: "Un masiv muntos distinctiv lângă Zaghouan.", en: "A prominent mountain massif near Zaghouan." },
    facts: {
      de: ["Kalkgestein dominiert das Bild.", "Sehr trockenes Gelände.", "Bedeutend für lokale Quellen.", "Historisch als Landmarke genutzt."],
      hu: ["Mészkő uralja a tájat.", "Nagyon száraz terep.", "Fontos a helyi források szempontjából.", "Történelmileg tereptárgyként használták."],
      ro: ["Calcarul domină peisajul.", "Teren foarte uscat.", "Semnificativ pentru izvoarele locale.", "Folosit istoric ca punct de reper."],
      en: ["Limestone dominates the scenery.", "Very dry terrain.", "Significant for local springs.", "Historically used as a landmark."]
    }
  },
  {
    id: "djebel-hamra-relief-v2",
    type: "mountain",
    parent: "TN-14",
    coords: [8.9, 36.9],
    name: { de: "Djebel Hamra", hu: "Djebel Hamra", ro: "Djebel Hamra", en: "Djebel Hamra" },
    description: { de: "Ein Hügelzug in der Kroumirie-Region.", hu: "Hegyvonulat a Kroumirie-régióban.", ro: "Un lanț de dealuri în regiunea Kroumirie.", en: "A range of hills in the Kroumirie region." },
    facts: {
      de: ["Teil des nördlichen Atlas.", "Üppige Vegetation im Winter.", "Wichtige Weideflächen.", "Sehr malerische Aussichten."],
      hu: ["Az északi Atlasz-hegység része.", "Dús növényzet télen.", "Fontos legelők.", "Nagyon festői kilátások."],
      ro: ["Parte a Atlasului de nord.", "Vegetație luxuriantă în timpul iernii.", "Pășuni importante.", "Vederi foarte pitorești."],
      en: ["Part of the northern Atlas.", "Lush vegetation in winter.", "Important pasture areas.", "Very picturesque views."]
    }
  },
  {
    id: "djebel-es-sif-relief-v2",
    type: "mountain",
    parent: "TN-02",
    coords: [9.3, 36.1],
    name: { de: "Djebel es Sif", hu: "Djebel es Sif", ro: "Djebel es Sif", en: "Djebel es Sif" },
    description: { de: "Ein Berg in Zentraltunesien.", hu: "Hegy Közép-Tunéziában.", ro: "Un munte în Tunisia centrală.", en: "A mountain in central Tunisia." },
    facts: {
      de: ["Geologisch eng mit dem Atlas verwandt.", "Bedeutende tektonische Strukturen.", "Sehr abgelegenes Gebiet.", "Raues Klima."],
      hu: ["Geológiailag szorosan kapcsolódik az Atlasz-hegységhez.", "Jelentős tektonikai struktúrák.", "Nagyon távoli vidék.", "Zord éghajlat."],
      ro: ["Geologic înrudit strâns cu Atlasul.", "Structuri tectonice semnificative.", "Zonă foarte izolată.", "Climat dur."],
      en: ["Geologically closely related to the Atlas.", "Significant tectonic structures.", "Very remote area.", "Harsh climate."]
    }
  },
  {
    id: "djebel-el-gharrah-relief-v2",
    type: "mountain",
    parent: "TN-12",
    coords: [8.9, 35.2],
    name: { de: "Djebel el Gharrah", hu: "Djebel el Gharrah", ro: "Djebel el Gharrah", en: "Djebel el Gharrah" },
    description: { de: "Ein Bergzug in der Kasserine-Region.", hu: "Hegyvonulat Kasserine régióban.", ro: "Un lanț muntos în regiunea Kasserine.", en: "A mountain range in the Kasserine region." },
    facts: {
      de: ["Typisch für den hohen Atlas.", "Extrem trockene Bedingungen.", "Geologisch interessant.", "Dünn besiedeltes Umland."],
      hu: ["Tipikus a magas Atlasz számára.", "Rendkívül száraz viszonyok.", "Geológiailag érdekes.", "Gyéren lakott környezet."],
      ro: ["Tipic pentru Atlasul înalt.", "Condiții extrem de aride.", "Interesant geologic.", "Zonă înconjurătoare slab populată."],
      en: ["Typical for the high Atlas.", "Extremely dry conditions.", "Geologically interesting.", "Sparsely populated surrounding area."]
    }
  },
  {
    id: "djebel-bel-khodra-relief-v2",
    type: "mountain",
    parent: "TN-15",
    coords: [9.6, 36.1],
    name: { de: "Djebel Bel Khodra", hu: "Djebel Bel Khodra", ro: "Djebel Bel Khodra", en: "Djebel Bel Khodra" },
    description: { de: "Ein Bergmassiv in der Nähe von Siliana.", hu: "Hegymasszívum Siliana közelében.", ro: "Un masiv muntos lângă Siliana.", en: "A mountain massif near Siliana." },
    facts: {
      de: ["Kalksteingebirge.", "Bietet Schutz für Wildtiere.", "Wichtig für die Landwirtschaft am Fuß.", "Landschaftlich reizvoll."],
      hu: ["Mészkőhegység.", "Védelmet nyújt a vadon élő állatoknak.", "Fontos a lábánál fekvő mezőgazdaság számára.", "Festői táj."],
      ro: ["Munți de calcar.", "Oferă adăpost animalelor sălbatice.", "Important pentru agricultura de la poale.", "Peisaj pitoresc."],
      en: ["Limestone mountains.", "Offers shelter to wildlife.", "Important for agriculture at the foot.", "Scenically charming."]
    }
  },
  {
    id: "chott-el-gharsa-relief-v2",
    type: "relief",
    parent: "TN-07",
    coords: [7.9, 34.0],
    name: { de: "Chott el Gharsa", hu: "Chott el Gharsa", ro: "Chott el Gharsa", en: "Chott el Gharsa" },
    description: { de: "Ein Salzsee westlich des Chott el Djerid.", hu: "Sós tó a Chott el Djeridtől nyugatra.", ro: "Un lac sărat la vest de Chott el Djerid.", en: "A salt lake west of Chott el Djerid." },
    facts: {
      de: ["Einer der tiefsten Punkte Tunesiens.", "Sehr salzige Umgebung.", "Geologisch ein Becken.", "Umgeben von Wüstendünen."],
      hu: ["Tunézia egyik legmélyebb pontja.", "Nagyon sós környezet.", "Geológiailag egy medence.", "Sivatagi dűnék veszik körül."],
      ro: ["Unul dintre cele mai joase puncte ale Tunisiei.", "Mediu foarte sărat.", "Geologic un bazin.", "Înconjurat de dune de deșert."],
      en: ["One of the lowest points in Tunisia.", "Very salty environment.", "Geologically a basin.", "Surrounded by desert dunes."]
    }
  },
  {
    id: "djebel-ben-youne-relief-v2",
    type: "mountain",
    parent: "TN-05",
    coords: [8.6, 34.5],
    name: { de: "Djebel Ben Youne", hu: "Djebel Ben Youne", ro: "Djebel Ben Youne", en: "Djebel Ben Youne" },
    description: { de: "Ein Berg in der Gafsa-Region.", hu: "Hegy a Gafsa régióban.", ro: "Un munte în regiunea Gafsa.", en: "A mountain in the Gafsa region." },
    facts: {
      de: ["Phosphatbergbau in der Nähe.", "Trockenes Klima.", "Teil der östlichen Gebirgszüge.", "Schroffe Felshänge."],
      hu: ["Foszfátbányászat a közelben.", "Száraz éghajlat.", "A keleti hegyvonulatok része.", "Zord sziklás lejtők."],
      ro: ["Minerit de fosfați în apropiere.", "Climat arid.", "Parte a lanțurilor muntoase estice.", "Pante stâncoase abrupte."],
      en: ["Phosphate mining nearby.", "Dry climate.", "Part of the eastern mountain ranges.", "Rugged rocky slopes."]
    }
  },
  {
    id: "djebel-abderrahmane-relief-v2",
    type: "mountain",
    parent: "TN-11",
    coords: [10.7, 36.75],
    name: { de: "Djebel Abderrahmane", hu: "Djebel Abderrahmane", ro: "Djebel Abderrahmane", en: "Djebel Abderrahmane" },
    description: { de: "Ein Hügelzug auf der Halbinsel Cap Bon.", hu: "Hegyvonulat a Cap Bon-félszigeten.", ro: "Un lanț de dealuri pe peninsula Cap Bon.", en: "A range of hills on the Cap Bon peninsula." },
    facts: {
      de: ["Dominanter Rücken auf der Halbinsel.", "Wichtige Wetterbarriere.", "Mit mediterraner Macchia bedeckt.", "Blick auf das Mittelmeer."],
      hu: ["Domináns hegygerinc a félszigeten.", "Fontos időjárási gát.", "Mediterrán macchiával borított.", "Kilátás a Földközi-tengerre."],
      ro: ["Creastă dominantă pe peninsulă.", "Barieră meteorologică importantă.", "Acoperit cu maquis mediteranean.", "Vedere spre Marea Mediterană."],
      en: ["Dominant ridge on the peninsula.", "Important weather barrier.", "Covered with Mediterranean maquis.", "View of the Mediterranean Sea."]
    }
  },
  {
    id: "djebel-om-el-adame-relief-v2",
    type: "mountain",
    parent: "TN-12",
    coords: [8.5, 34.8],
    name: { de: "Djebel Om el Adame", hu: "Djebel Om el Adame", ro: "Djebel Om el Adame", en: "Djebel Om el Adame" },
    description: { de: "Ein Berg in der Region Kasserine.", hu: "Hegy Kasserine régióban.", ro: "Un munte în regiunea Kasserine.", en: "A mountain in the Kasserine region." },
    facts: {
      de: ["Teil des zentralen Atlas.", "Trockene, steinige Landschaft.", "Wichtige Landmarke.", "Dünn besiedelt."],
      hu: ["A középső Atlasz része.", "Száraz, köves táj.", "Fontos tájékozódási pont.", "Gyéren lakott."],
      ro: ["Parte a Atlasului central.", "Peisaj arid și pietros.", "Punct de reper important.", "Zonă slab populată."],
      en: ["Part of the central Atlas.", "Dry, stony landscape.", "Important landmark.", "Sparsely populated."]
    }
  },
  {
    id: "djebel-bou-hedma-relief-v2",
    type: "mountain",
    parent: "TN-07",
    coords: [9.5, 34.5],
    name: { de: "Djebel Bou Hedma", hu: "Djebel Bou Hedma", ro: "Djebel Bou Hedma", en: "Djebel Bou Hedma" },
    description: { de: "Ein Bergmassiv und Nationalpark.", hu: "Hegymasszívum és nemzeti park.", ro: "Un masiv muntos și parc național.", en: "A mountain massif and national park." },
    facts: {
      de: ["Heimat seltener Gazellenarten.", "Kombination aus Steppe und Gebirge.", "Hohe Biodiversität.", "Einzigartige Ökologie."],
      hu: ["Ritka gazellafajok otthona.", "A sztyeppe és a hegység kombinációja.", "Magas biodiverzitás.", "Egyedülálló ökológia."],
      ro: ["Casă pentru specii rare de gazele.", "Combinație de stepă și munți.", "Biodiversitate ridicată.", "Ecologie unică."],
      en: ["Home to rare gazelle species.", "Combination of steppe and mountains.", "High biodiversity.", "Unique ecology."]
    }
  }
];
