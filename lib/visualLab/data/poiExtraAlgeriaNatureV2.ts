import type { POI } from "./poi";

export const poiExtraAlgeriaNatureV2: POI[] = [
  {
    id: "atlas-mountains-nature-v2",
    type: "mountain",
    parent: "DZ-01",
    coords: [1.0, 34.0],
    name: { de: "Atlasgebirge", hu: "Atlasz-hegység", ro: "Munții Atlas", en: "Atlas Mountains" },
    description: { de: "Ein bedeutendes Gebirgssystem in Nordafrika.", hu: "Jelentős hegyrendszer Észak-Afrikában.", ro: "Un sistem muntos important din Africa de Nord.", en: "A major mountain range in North Africa." },
    facts: {
      de: ["Erstreckt sich über drei Länder.", "Höchster Punkt ist der Toubkal."],
      hu: ["Három országon húzódik keresztül.", "Legmagasabb pontja a Toubkal."],
      ro: ["Se întinde peste trei țări.", "Cel mai înalt punct este Toubkal."],
      en: ["Spans across three countries.", "Highest point is Toubkal."]
    }
  },
  {
    id: "chott-melrhir-nature-v2",
    type: "lake",
    parent: "DZ-39",
    coords: [6.33, 34.25],
    name: { de: "Chott Melrhir", hu: "Chott Melrhir", ro: "Chott Melrhir", en: "Chott Melrhir" },
    description: { de: "Ein großer endorheischer Salzsee.", hu: "Nagy lefolyástalan sós tó.", ro: "Un lac sărat endoreic mare.", en: "A large endorheic salt lake." },
    facts: {
      de: ["Liegt unter dem Meeresspiegel.", "Saisonaler See."],
      hu: ["Tengerszint alatt fekszik.", "Időszakos tó."],
      ro: ["Situat sub nivelul mării.", "Lac sezonier."],
      en: ["Lies below sea level.", "Seasonal lake."]
    }
  },
  {
    id: "tassili-n-ajjer-nature-v2",
    type: "mountain",
    parent: "DZ-33",
    coords: [9.0, 25.0],
    name: { de: "Tassili n'Ajjer", hu: "Tassili n'Ajjer", ro: "Tassili n'Ajjer", en: "Tassili n'Ajjer" },
    description: { de: "Ein Wüstenplateau mit beeindruckenden Felsformationen.", hu: "Sivatagi fennsík lenyűgöző sziklaformációkkal.", ro: "Un platou deșertic cu formațiuni stâncoase impresionante.", en: "A desert plateau with impressive rock formations." },
    facts: {
      de: ["UNESCO-Welterbe.", "Bekannt für prähistorische Kunst."],
      hu: ["UNESCO Világörökség.", "Ismert őskori művészetéről."],
      ro: ["Patrimoniu Mondial UNESCO.", "Cunoscut pentru arta preistorică."],
      en: ["UNESCO World Heritage site.", "Known for prehistoric art."]
    }
  },
  {
    id: "ahaggar-mountains-nature-v2",
    type: "mountain",
    parent: "DZ-11",
    coords: [5.5, 23.25],
    name: { de: "Ahaggar-Gebirge", hu: "Ahaggar-hegység", ro: "Munții Ahaggar", en: "Ahaggar Mountains" },
    description: { de: "Ein zentrales Gebirge in der Sahara.", hu: "Központi hegység a Szaharában.", ro: "Un munte central din Sahara.", en: "A central mountain range in the Sahara." },
    facts: {
      de: ["Vulkanisches Gebirge.", "Harter Lebensraum."],
      hu: ["Vulkáni eredetű hegység.", "Kemény élőhely."],
      ro: ["Munți de origine vulcanică.", "Habitat aspru."],
      en: ["Volcanic mountain range.", "Harsh environment."]
    }
  },
  {
    id: "guelt-es-stel-nature-v2",
    type: "lake",
    parent: "DZ-17",
    coords: [3.3, 35.3],
    name: { de: "Guelt Es-Stel", hu: "Guelt Es-Stel", ro: "Guelt Es-Stel", en: "Guelt Es-Stel" },
    description: { de: "Eine Wasserstelle in der Steppe.", hu: "Vízelőfordulási hely a sztyeppén.", ro: "Un punct de apă în stepă.", en: "A water hole in the steppe." },
    facts: {
      de: ["Wichtiger Ort für Wildtiere.", "In der Nähe von Djelfa."],
      hu: ["Fontos hely a vadon élő állatok számára.", "Djelfa közelében."],
      ro: ["Loc important pentru animalele sălbatice.", "Aproape de Djelfa."],
      en: ["Important site for wildlife.", "Near Djelfa."]
    }
  },
  {
    id: "mediterranean-coast-nature-v2",
    type: "sea",
    parent: "DZ-16",
    coords: [3.0, 36.8],
    name: { de: "Mittelmeerküste Algeriens", hu: "Algéria mediterrán partvidéke", ro: "Coasta mediteraneană a Algeriei", en: "Mediterranean coast of Algeria" },
    description: { de: "Der nördliche Küstenabschnitt am Mittelmeer.", hu: "Északi partvidék a Földközi-tengernél.", ro: "Secțiunea nordică a coastei la Marea Mediterană.", en: "The northern coastal section on the Mediterranean." },
    facts: {
      de: ["Über 1600 km Länge.", "Wichtige Hafenregion."],
      hu: ["Több mint 1600 km hosszú.", "Fontos kikötői régió."],
      ro: ["Peste 1600 km lungime.", "Regiune portuară importantă."],
      en: ["Over 1600 km long.", "Important port region."]
    }
  },
  {
    id: "seybouse-river-nature-v2",
    type: "river",
    parent: "DZ-23",
    coords: [7.75, 36.8],
    name: { de: "Seybouse-Fluss", hu: "Seybouse folyó", ro: "Râul Seybouse", en: "Seybouse River" },
    description: { de: "Ein Fluss, der in das Mittelmeer mündet.", hu: "A Földközi-tengerbe ömlő folyó.", ro: "Un râu care se varsă în Marea Mediterană.", en: "A river flowing into the Mediterranean." },
    facts: {
      de: ["Entspringt im Atlasgebirge.", "Wichtig für die Landwirtschaft."],
      hu: ["Az Atlasz-hegységből ered.", "Fontos a mezőgazdaság számára."],
      ro: ["Izvorăște din Munții Atlas.", "Important pentru agricultură."],
      en: ["Originates in the Atlas Mountains.", "Important for agriculture."]
    }
  },
  {
    id: "chiffa-gorges-nature-v2",
    type: "river",
    parent: "DZ-09",
    coords: [2.7, 36.3],
    name: { de: "Chiffa-Schlucht", hu: "Chiffa-szurdok", ro: "Cheile Chiffa", en: "Chiffa Gorges" },
    description: { de: "Eine spektakuläre Schlucht mit einem Fluss.", hu: "Látványos szurdok folyóval.", ro: "O cheie spectaculoasă cu un râu.", en: "A spectacular gorge with a river." },
    facts: {
      de: ["Heimat der Berberaffen.", "Nahe Blida."],
      hu: ["A berber majmok otthona.", "Blida közelében."],
      ro: ["Acasă pentru macacii berberi.", "Aproape de Blida."],
      en: ["Home to Barbary macaques.", "Near Blida."]
    }
  },
  {
    id: "tahament-mountains-nature-v2",
    type: "mountain",
    parent: "DZ-11",
    coords: [5.5, 23.3],
    name: { de: "Tahament", hu: "Tahament", ro: "Tahament", en: "Tahament" },
    description: { de: "Ein Gipfel im Ahaggar-Massiv.", hu: "Csúcs az Ahaggar-hegységben.", ro: "Un vârf în masivul Ahaggar.", en: "A peak in the Ahaggar massif." },
    facts: {
      de: ["Teil des Vulkangebirges.", "Beeindruckende Aussicht."],
      hu: ["A vulkáni hegység része.", "Lenyűgöző kilátás."],
      ro: ["Parte a munților vulcanici.", "Priveliște impresionantă."],
      en: ["Part of the volcanic range.", "Impressive views."]
    }
  },
  {
    id: "chott-chergui-nature-v2",
    type: "lake",
    parent: "DZ-20",
    coords: [0.5, 34.5],
    name: { de: "Chott Chergui", hu: "Chott Chergui", ro: "Chott Chergui", en: "Chott Chergui" },
    description: { de: "Einer der größten Salzseen Algeriens.", hu: "Algéria egyik legnagyobb sós tava.", ro: "Unul dintre cele mai mari lacuri sărate din Algeria.", en: "One of the largest salt lakes in Algeria." },
    facts: {
      de: ["Flacher Salzsee.", "Wichtiges Feuchtgebiet."],
      hu: ["Sekély sós tó.", "Fontos vizes élőhely."],
      ro: ["Lac sărat puțin adânc.", "Zonă umedă importantă."],
      en: ["Shallow salt lake.", "Important wetland."]
    }
  },
  {
    id: "oued-cheliff-nature-v2",
    type: "river",
    parent: "DZ-02",
    coords: [1.3, 36.0],
    name: { de: "Cheliff-Fluss", hu: "Cheliff folyó", ro: "Râul Cheliff", en: "Cheliff River" },
    description: { de: "Der längste Fluss Algeriens.", hu: "Algéria leghosszabb folyója.", ro: "Cel mai lung râu din Algeria.", en: "The longest river in Algeria." },
    facts: {
      de: ["Fließt durch das Atlasgebirge.", "Wichtiges Bewässerungsgebiet."],
      hu: ["Átfolyik az Atlasz-hegységen.", "Fontos öntözési terület."],
      ro: ["Curge prin Munții Atlas.", "Zonă importantă de irigații."],
      en: ["Flows through the Atlas Mountains.", "Important irrigation area."]
    }
  },
  {
    id: "gourara-oasis-nature-v2",
    type: "lake",
    parent: "DZ-01",
    coords: [0.2, 29.5],
    name: { de: "Gourara", hu: "Gourara", ro: "Gourara", en: "Gourara" },
    description: { de: "Eine Region mit Oasen und kleinen Salzseen.", hu: "Oázisokkal és kis sós tavakkal rendelkező régió.", ro: "O regiune cu oaze și mici lacuri sărate.", en: "A region with oases and small salt lakes." },
    facts: {
      de: ["Traditionelle Bewässerung.", "Einzigartige Architektur."],
      hu: ["Hagyományos öntözés.", "Egyedi építészet."],
      ro: ["Irigare tradițională.", "Arhitectură unică."],
      en: ["Traditional irrigation.", "Unique architecture."]
    }
  },
  {
    id: "djanet-mountains-nature-v2",
    type: "mountain",
    parent: "DZ-33",
    coords: [9.5, 24.5],
    name: { de: "Gebirge bei Djanet", hu: "Djanet melletti hegyek", ro: "Munții de lângă Djanet", en: "Mountains near Djanet" },
    description: { de: "Felsige Umgebung in der Nähe der Oase Djanet.", hu: "Sziklás környék a Djanet oázis közelében.", ro: "Împrejurimi stâncoase în apropierea oazei Djanet.", en: "Rocky surroundings near the Djanet oasis." },
    facts: {
      de: ["Sandsteingebirge.", "Beeindruckende Wüstenlandschaft."],
      hu: ["Homokkő hegység.", "Lélegzetelállító sivatagi táj."],
      ro: ["Munți de gresie.", "Peisaj deșertic impresionant."],
      en: ["Sandstone mountains.", "Impressive desert landscape."]
    }
  },
  {
    id: "el-kantara-nature-v2",
    type: "river",
    parent: "DZ-05",
    coords: [5.7, 35.2],
    name: { de: "El-Kantara Schlucht", hu: "El-Kantara szurdok", ro: "Cheile El-Kantara", en: "El-Kantara Gorges" },
    description: { de: "Ein natürliches Tor zwischen dem Norden und dem Süden.", hu: "Természetes kapu észak és dél között.", ro: "O poartă naturală între nord și sud.", en: "A natural gateway between north and south." },
    facts: {
      de: ["Bekannt als Tor zur Sahara.", "Schöne Flusslandschaft."],
      hu: ["A Szahara kapujaként ismert.", "Szép folyami táj."],
      ro: ["Cunoscută ca poarta către Sahara.", "Peisaj fluvial frumos."],
      en: ["Known as the gateway to the Sahara.", "Beautiful river landscape."]
    }
  },
  {
    id: "djebel-chelia-nature-v2",
    type: "mountain",
    parent: "DZ-40",
    coords: [6.6, 35.3],
    name: { de: "Djebel Chelia", hu: "Djebel Chelia", ro: "Djebel Chelia", en: "Djebel Chelia" },
    description: { de: "Einer der höchsten Gipfel im Aurès-Gebirge.", hu: "Az Aurès-hegység egyik legmagasabb csúcsa.", ro: "Unul dintre cele mai înalte vârfuri din Munții Aurès.", en: "One of the highest peaks in the Aurès Mountains." },
    facts: {
      de: ["Liegt im Osten Algeriens.", "Kühle Bergwälder."],
      hu: ["Algéria keleti részén fekszik.", "Hűvös hegyi erdők."],
      ro: ["Situat în estul Algeriei.", "Păduri montane răcoroase."],
      en: ["Located in eastern Algeria.", "Cool mountain forests."]
    }
  },
  {
    id: "guergour-nature-v2",
    type: "mountain",
    parent: "DZ-19",
    coords: [5.4, 36.3],
    name: { de: "Guergour", hu: "Guergour", ro: "Guergour", en: "Guergour" },
    description: { de: "Gebirgsregion in der Provinz Sétif.", hu: "Hegyvidéki régió Sétif tartományban.", ro: "Regiune montană în provincia Sétif.", en: "Mountainous region in Sétif province." },
    facts: {
      de: ["Grüne Täler.", "Ideal zum Wandern."],
      hu: ["Zöld völgyek.", "Ideális túrázáshoz."],
      ro: ["Văi verzi.", "Ideal pentru drumeții."],
      en: ["Green valleys.", "Ideal for hiking."]
    }
  },
  {
    id: "chott-el-hodna-nature-v2",
    type: "lake",
    parent: "DZ-28",
    coords: [4.7, 35.4],
    name: { de: "Chott el Hodna", hu: "Chott el Hodna", ro: "Chott el Hodna", en: "Chott el Hodna" },
    description: { de: "Ein endorheischer Salzsee.", hu: "Lefolyástalan sós tó.", ro: "Un lac sărat endoreic.", en: "An endorheic salt lake." },
    facts: {
      de: ["Wichtiger Lebensraum für Vögel.", "Salzige Ebene."],
      hu: ["Fontos élőhely a madarak számára.", "Sós síkság."],
      ro: ["Habitat important pentru păsări.", "Câmpie sărată."],
      en: ["Important habitat for birds.", "Saline plain."]
    }
  },
  {
    id: "ouarsenis-mountains-nature-v2",
    type: "mountain",
    parent: "DZ-38",
    coords: [1.8, 35.9],
    name: { de: "Ouarsenis-Gebirge", hu: "Ouarsenis-hegység", ro: "Munții Ouarsenis", en: "Ouarsenis Mountains" },
    description: { de: "Ein Gebirgsmassiv im Atlas-System.", hu: "Hegymasszívum az Atlasz-rendszerben.", ro: "Un masiv muntos în sistemul Atlas.", en: "A mountain massif in the Atlas system." },
    facts: {
      de: ["Dichte Wälder.", "Wichtige Quelle für Flüsse."],
      hu: ["Sűrű erdők.", "Fontos folyóforrás."],
      ro: ["Păduri dese.", "Sursă importantă de râuri."],
      en: ["Dense forests.", "Important source for rivers."]
    }
  },
  {
    id: "djurdjura-mountains-nature-v2",
    type: "mountain",
    parent: "DZ-15",
    coords: [4.2, 36.4],
    name: { de: "Djurdjura", hu: "Djurdjura", ro: "Djurdjura", en: "Djurdjura" },
    description: { de: "Ein hochgelegenes Gebirge in Kabylien.", hu: "Magas hegyvonulat Kabiliában.", ro: "Un lanț muntos înalt în Cabilia.", en: "A high mountain range in Kabylie." },
    facts: {
      de: ["Schnee im Winter.", "Wanderparadies."],
      hu: ["Hó télen.", "Túrázóparadicsom."],
      ro: ["Zăpadă iarna.", "Paradis pentru drumeții."],
      en: ["Snow in winter.", "Hiking paradise."]
    }
  },
  {
    id: "tlemcen-mountains-nature-v2",
    type: "mountain",
    parent: "DZ-13",
    coords: [1.3, 34.8],
    name: { de: "Tlemcen-Gebirge", hu: "Tlemcen-hegység", ro: "Munții Tlemcen", en: "Tlemcen Mountains" },
    description: { de: "Ein Gebirge im Westen Algeriens.", hu: "Hegység Algéria nyugati részén.", ro: "Munți în vestul Algeriei.", en: "Mountains in western Algeria." },
    facts: {
      de: ["Kalksteinformationen.", "Grüne Umgebung."],
      hu: ["Mészkőképződmények.", "Zöld környezet."],
      ro: ["Formațiuni de calcar.", "Mediu verde."],
      en: ["Limestone formations.", "Green environment."]
    }
  },
  {
    id: "belezma-mountains-nature-v2",
    type: "mountain",
    parent: "DZ-05",
    coords: [6.0, 35.6],
    name: { de: "Belezma-Gebirge", hu: "Belezma-hegység", ro: "Munții Belezma", en: "Belezma Mountains" },
    description: { de: "Ein Nationalpark-Gebirge.", hu: "Nemzeti park hegysége.", ro: "Munții unui parc național.", en: "A national park mountain range." },
    facts: {
      de: ["Wichtige Flora.", "Schöne Berglandschaft."],
      hu: ["Fontos flóra.", "Szép hegyi táj."],
      ro: ["Floră importantă.", "Peisaj montan frumos."],
      en: ["Important flora.", "Beautiful mountain landscape."]
    }
  },
  {
    id: "mzaab-valley-nature-v2",
    type: "river",
    parent: "DZ-47",
    coords: [3.6, 32.5],
    name: { de: "M'zab-Tal", hu: "M'zab-völgy", ro: "Valea M'zab", en: "M'zab Valley" },
    description: { de: "Ein Wüstental mit einer Oase.", hu: "Sivatagi völgy oázissal.", ro: "O vale deșertică cu o oază.", en: "A desert valley with an oasis." },
    facts: {
      de: ["Einzigartige Wasserwirtschaft.", "Kulturelles Zentrum."],
      hu: ["Egyedi vízgazdálkodás.", "Kulturális központ."],
      ro: ["Gestionare unică a apei.", "Centru cultural."],
      en: ["Unique water management.", "Cultural center."]
    }
  },
  {
    id: "tadjmout-nature-v2",
    type: "mountain",
    parent: "DZ-03",
    coords: [2.5, 33.5],
    name: { de: "Tadjmout", hu: "Tadjmout", ro: "Tadjmout", en: "Tadjmout" },
    description: { de: "Eine Bergregion nahe Laghouat.", hu: "Hegyvidéki régió Laghouat közelében.", ro: "Regiune montană lângă Laghouat.", en: "Mountain region near Laghouat." },
    facts: {
      de: ["Trockene Umgebung.", "Wichtiger Aussichtspunkt."],
      hu: ["Száraz környezet.", "Fontos kilátópont."],
      ro: ["Mediu arid.", "Punct de observație important."],
      en: ["Dry environment.", "Important viewpoint."]
    }
  },
  {
    id: "chrea-mountains-nature-v2",
    type: "mountain",
    parent: "DZ-09",
    coords: [2.8, 36.4],
    name: { de: "Chréa-Gebirge", hu: "Chréa-hegység", ro: "Munții Chréa", en: "Chréa Mountains" },
    description: { de: "Ein beliebtes Erholungsgebiet.", hu: "Kedvelt üdülőövezet.", ro: "O zonă de recreere populară.", en: "A popular recreational area." },
    facts: {
      de: ["Skigebiet im Winter.", "Zederwälder."],
      hu: ["Síterep télen.", "Cédruserdők."],
      ro: ["Domeniu schiabil iarna.", "Păduri de cedru."],
      en: ["Ski area in winter.", "Cedar forests."]
    }
  },
  {
    id: "edough-mountains-nature-v2",
    type: "mountain",
    parent: "DZ-23",
    coords: [7.7, 36.8],
    name: { de: "Edough-Gebirge", hu: "Edough-hegység", ro: "Munții Edough", en: "Edough Mountains" },
    description: { de: "Ein bewaldetes Gebirge bei Annaba.", hu: "Erdős hegység Annaba közelében.", ro: "Munți împăduriți lângă Annaba.", en: "Forested mountains near Annaba." },
    facts: {
      de: ["Blick auf das Meer.", "Wichtige grüne Lunge."],
      hu: ["Kilátás a tengerre.", "Fontos zöld tüdő."],
      ro: ["Priveliște către mare.", "Plămân verde important."],
      en: ["View of the sea.", "Important green lung."]
    }
  },
  {
    id: "teniet-el-had-nature-v2",
    type: "forest",
    parent: "DZ-38",
    coords: [1.9, 35.8],
    name: { de: "Wald von Téniet El Had", hu: "Téniet El Had erdeje", ro: "Pădurea Téniet El Had", en: "Forest of Téniet El Had" },
    description: { de: "Ein bedeutender Zedernwald.", hu: "Jelentős cédruserdő.", ro: "O pădure importantă de cedri.", en: "An important cedar forest." },
    facts: {
      de: ["Nationalpark.", "Schützt seltene Bäume."],
      hu: ["Nemzeti park.", "Védi a ritka fákat."],
      ro: ["Parc național.", "Protejează copaci rari."],
      en: ["National park.", "Protects rare trees."]
    }
  },
  {
    id: "chott-merouane-nature-v2",
    type: "lake",
    parent: "DZ-39",
    coords: [6.4, 34.3],
    name: { de: "Chott Merouane", hu: "Chott Merouane", ro: "Chott Merouane", en: "Chott Merouane" },
    description: { de: "Ein Salzsee in der Region Oued Souf.", hu: "Sós tó az Oued Souf régióban.", ro: "Un lac sărat în regiunea Oued Souf.", en: "A salt lake in the Oued Souf region." },
    facts: {
      de: ["Wichtige Fauna.", "Sandige Umgebung."],
      hu: ["Fontos fauna.", "Homokos környezet."],
      ro: ["Faună importantă.", "Mediu nisipos."],
      en: ["Important fauna.", "Sandy environment."]
    }
  },
  {
    id: "djebel-babor-nature-v2",
    type: "mountain",
    parent: "DZ-19",
    coords: [5.4, 36.5],
    name: { de: "Djebel Babor", hu: "Djebel Babor", ro: "Djebel Babor", en: "Djebel Babor" },
    description: { de: "Ein Gipfel im Atlasgebirge.", hu: "Csúcs az Atlasz-hegységben.", ro: "Un vârf în Munții Atlas.", en: "A peak in the Atlas Mountains." },
    facts: {
      de: ["Seltene Tannenarten.", "Wandergebiet."],
      hu: ["Ritka fenyőfajok.", "Túrázóterület."],
      ro: ["Specii rare de brad.", "Zonă de drumeții."],
      en: ["Rare fir species.", "Hiking area."]
    }
  },
  {
    id: "tenes-coast-nature-v2",
    type: "sea",
    parent: "DZ-02",
    coords: [1.3, 36.5],
    name: { de: "Küste bei Ténès", hu: "Partvidék Ténès mellett", ro: "Coasta de lângă Ténès", en: "Coast near Ténès" },
    description: { de: "Ein felsiger Küstenstreifen am Mittelmeer.", hu: "Sziklás tengerpart a Földközi-tengernél.", ro: "O secțiune stâncoasă a coastei la Marea Mediterană.", en: "A rocky coastal strip on the Mediterranean." },
    facts: {
      de: ["Klares Wasser.", "Kleine Buchten."],
      hu: ["Tiszta víz.", "Kis öblök."],
      ro: ["Apă limpede.", "Golfuri mici."],
      en: ["Clear water.", "Small bays."]
    }
  },
  {
    id: "tassili-hoggar-nature-v2",
    type: "mountain",
    parent: "DZ-11",
    coords: [5.6, 23.4],
    name: { de: "Tassili n'Hoggar", hu: "Tassili n'Hoggar", ro: "Tassili n'Hoggar", en: "Tassili n'Hoggar" },
    description: { de: "Eine Wüstenlandschaft um das Ahaggar-Gebirge.", hu: "Sivatagi táj az Ahaggar-hegység körül.", ro: "Peisaj deșertic în jurul Munților Ahaggar.", en: "A desert landscape around the Ahaggar Mountains." },
    facts: {
      de: ["Wüstenplateaus.", "Extrem trocken."],
      hu: ["Sivatagi fennsíkok.", "Rendkívül száraz."],
      ro: ["Platouri deșertice.", "Extrem de uscat."],
      en: ["Desert plateaus.", "Extremely dry."]
    }
  }
];
