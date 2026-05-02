import type { POI } from "./poi";

export const poiExtraEthiopiaNatureV2: POI[] = [
  {
    id: "blue-nile-falls-nature-v2",
    type: "river",
    parent: "ET-AM",
    coords: [37.5898, 11.4883],
    name: { de: "Blauer Nilfall", hu: "Kék-Nílus-vízesés", ro: "Cascada Nilului Albastru", en: "Blue Nile Falls" },
    description: { de: "Ein gewaltiger Wasserfall am Blauen Nil.", hu: "Hatalmas vízesés a Kék-Níluson.", ro: "O cascadă masivă pe Nilul Albastru.", en: "A massive waterfall on the Blue Nile." },
    facts: {
      de: ["Lokaler Name: Tis Issat.", "Bedeutet 'Rauch des Feuers'."],
      hu: ["Helyi név: Tis Issat.", "Jelentése: 'A tűz füstje'."],
      ro: ["Nume local: Tis Issat.", "Înseamnă 'Fumul focului'."],
      en: ["Local name: Tis Issat.", "Meaning 'Smoke of Fire'."]
    }
  },
  {
    id: "lake-tana-nature-v2",
    type: "lake",
    parent: "ET-AM",
    coords: [37.3667, 12.0000],
    name: { de: "Tanasee", hu: "Tana-tó", ro: "Lacul Tana", en: "Lake Tana" },
    description: { de: "Der größte See Äthiopiens und Quelle des Blauen Nils.", hu: "Etiópia legnagyobb tava, a Kék-Nílus forrása.", ro: "Cel mai mare lac din Etiopia și sursa Nilului Albastru.", en: "Ethiopia's largest lake and source of the Blue Nile." },
    facts: {
      de: ["Fläche: ca. 3.000 km².", "Heimat vieler Klöster."],
      hu: ["Terület: kb. 3000 km².", "Számos kolostornak ad otthont."],
      ro: ["Suprafață: aprox. 3000 km².", "Găzduiește multe mănăstiri."],
      en: ["Area: approx. 3,000 km².", "Home to many monasteries."]
    }
  },
  {
    id: "simien-mountains-nature-v2",
    type: "mountain",
    parent: "ET-AM",
    coords: [38.2500, 13.2500],
    name: { de: "Simien-Gebirge", hu: "Simien-hegység", ro: "Munții Simien", en: "Simien Mountains" },
    description: { de: "Ein spektakuläres Gebirge mit hohen Gipfeln.", hu: "Látványos hegység magas csúcsokkal.", ro: "Un lanț muntos spectaculos cu vârfuri înalte.", en: "A spectacular mountain range with high peaks." },
    facts: {
      de: ["Höchster Gipfel: Ras Dashen.", "UNESCO-Welterbe."],
      hu: ["Legmagasabb csúcs: Ras Dashen.", "UNESCO világörökség."],
      ro: ["Cel mai înalt vârf: Ras Dashen.", "Patrimoniul mondial UNESCO."],
      en: ["Highest peak: Ras Dashen.", "UNESCO World Heritage site."]
    }
  },
  {
    id: "awash-river-nature-v2",
    type: "river",
    parent: "ET-AF",
    coords: [40.0000, 9.0000],
    name: { de: "Awash", hu: "Awash folyó", ro: "Râul Awash", en: "Awash River" },
    description: { de: "Ein bedeutender Fluss im östlichen Äthiopien.", hu: "Jelentős folyó Kelet-Etiópiában.", ro: "Un râu important în estul Etiopiei.", en: "An important river in eastern Ethiopia." },
    facts: {
      de: ["Länge: ca. 1.200 km.", "Endet im Afar-Dreieck."],
      hu: ["Hossz: kb. 1200 km.", "Az Afar-háromszögben végződik."],
      ro: ["Lungime: aprox. 1200 km.", "Se termină în Triunghiul Afar."],
      en: ["Length: approx. 1,200 km.", "Ends in the Afar Triangle."]
    }
  },
  {
    id: "lake-abijatta-nature-v2",
    type: "lake",
    parent: "ET-OR",
    coords: [38.6500, 7.6167],
    name: { de: "Abijatta-See", hu: "Abijatta-tó", ro: "Lacul Abijatta", en: "Lake Abijatta" },
    description: { de: "Ein Sodasee im Großen Grabenbruch.", hu: "Szódás tó a Nagy-hasadékvölgyben.", ro: "Un lac cu sodă în Marele Rift.", en: "A soda lake in the Great Rift Valley." },
    facts: {
      de: ["Bedeutendes Vogelschutzgebiet.", "Flaches Wasser."],
      hu: ["Fontos madárvédelmi terület.", "Sekély víz."],
      ro: ["Importantă rezervație aviatică.", "Apă puțin adâncă."],
      en: ["Important bird sanctuary.", "Shallow water."]
    }
  },
  {
    id: "lake-shala-nature-v2",
    type: "lake",
    parent: "ET-OR",
    coords: [38.5333, 7.4667],
    name: { de: "Shala-See", hu: "Shala-tó", ro: "Lacul Shala", en: "Lake Shala" },
    description: { de: "Ein sehr tiefer Kratersee.", hu: "Nagyon mély krátertó.", ro: "Un lac crater foarte adânc.", en: "A very deep crater lake." },
    facts: {
      de: ["Tiefe: über 250 m.", "Liegt nahe dem Abijatta-See."],
      hu: ["Mélység: több mint 250 m.", "Az Abijatta-tó közelében fekszik."],
      ro: ["Adâncime: peste 250 m.", "Situat lângă lacul Abijatta."],
      en: ["Depth: over 250 m.", "Located near Lake Abijatta."]
    }
  },
  {
    id: "lake-chamo-nature-v2",
    type: "lake",
    parent: "ET-SN",
    coords: [37.5333, 5.8333],
    name: { de: "Chamo-See", hu: "Chamo-tó", ro: "Lacul Chamo", en: "Lake Chamo" },
    description: { de: "Bekannt für seine große Krokodilpopulation.", hu: "Híres a nagyszámú krokodilpopulációjáról.", ro: "Cunoscut pentru populația sa mare de crocodili.", en: "Known for its large crocodile population." },
    facts: {
      de: ["Teil des Nechisar-Nationalparks.", "Reich an Fisch."],
      hu: ["A Nechisar Nemzeti Park része.", "Gazdag halakban."],
      ro: ["Parte a Parcului Național Nechisar.", "Bogată în pește."],
      en: ["Part of Nechisar National Park.", "Rich in fish."]
    }
  },
  {
    id: "lake-abaya-nature-v2",
    type: "lake",
    parent: "ET-SN",
    coords: [37.8833, 6.2500],
    name: { de: "Abaya-See", hu: "Abaya-tó", ro: "Lacul Abaya", en: "Lake Abaya" },
    description: { de: "Ein großer See nördlich des Chamo-Sees.", hu: "Nagy tó a Chamo-tótól északra.", ro: "Un lac mare la nord de lacul Chamo.", en: "A large lake north of Lake Chamo." },
    facts: {
      de: ["Rotbraune Farbe durch Sedimente.", "Zweitgrößter See Äthiopiens."],
      hu: ["Vörösesbarna szín az üledékek miatt.", "Etiópia második legnagyobb tava."],
      ro: ["Culoare roșiatică din cauza sedimentelor.", "Al doilea lac ca mărime din Etiopia."],
      en: ["Reddish-brown color due to sediments.", "Second largest lake in Ethiopia."]
    }
  },
  {
    id: "lake-langano-nature-v2",
    type: "lake",
    parent: "ET-OR",
    coords: [38.7000, 7.6000],
    name: { de: "Langano-See", hu: "Langano-tó", ro: "Lacul Langano", en: "Lake Langano" },
    description: { de: "Ein beliebter See zum Schwimmen.", hu: "Népszerű tó úszáshoz.", ro: "Un lac popular pentru înot.", en: "A popular lake for swimming." },
    facts: {
      de: ["Frei von Bilharziose.", "Beliebtes Touristenziel."],
      hu: ["Bilharziózis-mentes.", "Népszerű turisztikai célpont."],
      ro: ["Liber de bilharzioză.", "Destinație turistică populară."],
      en: ["Free from bilharzia.", "Popular tourist destination."]
    }
  },
  {
    id: "bale-mountains-nature-v2",
    type: "mountain",
    parent: "ET-OR",
    coords: [39.7500, 6.7500],
    name: { de: "Bale-Gebirge", hu: "Bale-hegység", ro: "Munții Bale", en: "Bale Mountains" },
    description: { de: "Ein Gebirge mit einzigartiger Flora und Fauna.", hu: "Hegység egyedi növény- és állatvilággal.", ro: "Un lanț muntos cu floră și faună unică.", en: "A mountain range with unique flora and fauna." },
    facts: {
      de: ["Heimat des Äthiopischen Wolfs.", "Hohe Plateaus."],
      hu: ["Az etióp farkas otthona.", "Magas fennsíkok."],
      ro: ["Casa lupului etiopian.", "Platouri înalte."],
      en: ["Home to the Ethiopian wolf.", "High plateaus."]
    }
  },
  {
    id: "lake-ziway-nature-v2",
    type: "lake",
    parent: "ET-OR",
    coords: [38.7333, 8.0000],
    name: { de: "Ziway-See", hu: "Ziway-tó", ro: "Lacul Ziway", en: "Lake Ziway" },
    description: { de: "Ein Süßwassersee im Rift Valley.", hu: "Édesvízi tó a hasadékvölgyben.", ro: "Un lac cu apă dulce în Valea Riftului.", en: "A freshwater lake in the Rift Valley." },
    facts: {
      de: ["Bekannt für Flusspferde.", "Viele Inseln."],
      hu: ["Híres a vízilovakról.", "Sok sziget."],
      ro: ["Cunoscut pentru hipopotami.", "Multe insule."],
      en: ["Known for hippos.", "Many islands."]
    }
  },
  {
    id: "genale-river-nature-v2",
    type: "river",
    parent: "ET-OR",
    coords: [42.0000, 4.0000],
    name: { de: "Genale", hu: "Genale folyó", ro: "Râul Genale", en: "Genale River" },
    description: { de: "Ein bedeutender Fluss im Süden Äthiopiens.", hu: "Jelentős folyó Dél-Etiópiában.", ro: "Un râu important în sudul Etiopiei.", en: "An important river in southern Ethiopia." },
    facts: {
      de: ["Fließt nach Somalia.", "Hydrologisch wichtig."],
      hu: ["Szomáliába folyik.", "Hidrológiailag fontos."],
      ro: ["Curge în Somalia.", "Important din punct de vedere hidrologic."],
      en: ["Flows into Somalia.", "Hydrologically important."]
    }
  },
  {
    id: "tekese-river-nature-v2",
    type: "river",
    parent: "ET-TI",
    coords: [37.5000, 14.0000],
    name: { de: "Tekeze", hu: "Tekeze folyó", ro: "Râul Tekeze", en: "Tekeze River" },
    description: { de: "Ein tiefer Fluss in Nordäthiopien.", hu: "Mély folyó Észak-Etiópiában.", ro: "Un râu adânc în nordul Etiopiei.", en: "A deep river in northern Ethiopia." },
    facts: {
      de: ["Bildet tiefe Schluchten.", "Zufluss des Atbara."],
      hu: ["Mély kanyonokat képez.", "Az Atbara mellékfolyója."],
      ro: ["Formează canioane adânci.", "Afluent al Atbarei."],
      en: ["Forms deep canyons.", "Tributary of the Atbara."]
    }
  },
  {
    id: "baro-river-nature-v2",
    type: "river",
    parent: "ET-GA",
    coords: [33.5000, 8.0000],
    name: { de: "Baro", hu: "Baro folyó", ro: "Râul Baro", en: "Baro River" },
    description: { de: "Ein Fluss im Westen Äthiopiens.", hu: "Folyó Nyugat-Etiópiában.", ro: "Un râu în vestul Etiopiei.", en: "A river in western Ethiopia." },
    facts: {
      de: ["Grenzfluss zum Sudan.", "Reich an Biodiversität."],
      hu: ["Határfolyó Szudánnal.", "Gazdag biodiverzitás."],
      ro: ["Râu de frontieră cu Sudanul.", "Bogată în biodiversitate."],
      en: ["Border river with Sudan.", "Rich in biodiversity."]
    }
  },
  {
    id: "gibe-river-nature-v2",
    type: "river",
    parent: "ET-OR",
    coords: [37.0000, 8.0000],
    name: { de: "Gibe", hu: "Gibe folyó", ro: "Râul Gibe", en: "Gibe River" },
    description: { de: "Ein bedeutender Nebenfluss des Omo.", hu: "Az Omo fontos mellékfolyója.", ro: "Un afluent important al Omo.", en: "A major tributary of the Omo." },
    facts: {
      de: ["Wichtig für Wasserkraft.", "Fließt durch Schluchten."],
      hu: ["Fontos a vízerőművek számára.", "Szurdokokon keresztül folyik."],
      ro: ["Important pentru hidroenergie.", "Curge prin defileuri."],
      en: ["Important for hydropower.", "Flows through gorges."]
    }
  },
  {
    id: "omo-river-nature-v2",
    type: "river",
    parent: "ET-SN",
    coords: [36.0000, 5.0000],
    name: { de: "Omo", hu: "Omo folyó", ro: "Râul Omo", en: "Omo River" },
    description: { de: "Ein berühmter Fluss im Südwesten.", hu: "Híres folyó Délnyugaton.", ro: "Un râu celebru în sud-vest.", en: "A famous river in the southwest." },
    facts: {
      de: ["UNESCO-Welterbe-Tal.", "Hydrologisch isoliert."],
      hu: ["UNESCO világörökség völgye.", "Hidrológiailag izolált."],
      ro: ["Valea patrimoniului mondial UNESCO.", "Izolat hidrologic."],
      en: ["UNESCO World Heritage valley.", "Hydrologically isolated."]
    }
  },
  {
    id: "lake-koka-nature-v2",
    type: "lake",
    parent: "ET-OR",
    coords: [39.0000, 8.5000],
    name: { de: "Koka-Stausee", hu: "Koka-víztározó", ro: "Lacul de acumulare Koka", en: "Koka Reservoir" },
    description: { de: "Ein wichtiger Stausee für Energie.", hu: "Fontos víztározó az energiaellátáshoz.", ro: "Un lac de acumulare important pentru energie.", en: "An important reservoir for energy." },
    facts: {
      de: ["Entstand durch Talsperre.", "Wichtig für Bewässerung."],
      hu: ["Gáttal jött létre.", "Fontos az öntözéshez."],
      ro: ["Creat prin baraj.", "Important pentru irigații."],
      en: ["Created by dam.", "Important for irrigation."]
    }
  },
  {
    id: "lake-hayq-nature-v2",
    type: "lake",
    parent: "ET-AM",
    coords: [39.7500, 11.3333],
    name: { de: "Hayq-See", hu: "Hayq-tó", ro: "Lacul Hayq", en: "Lake Hayq" },
    description: { de: "Ein schöner Bergsee.", hu: "Szép hegyi tó.", ro: "Un lac montan frumos.", en: "A beautiful mountain lake." },
    facts: {
      de: ["Süßwassersee.", "Nahe der Stadt Hayq."],
      hu: ["Édesvízi tó.", "Hayq város közelében."],
      ro: ["Lac cu apă dulce.", "Lângă orașul Hayq."],
      en: ["Freshwater lake.", "Near the town of Hayq."]
    }
  },
  {
    id: "mount-ebro-nature-v2",
    type: "mountain",
    parent: "ET-AF",
    coords: [41.7000, 11.8333],
    name: { de: "Mount Ebro", hu: "Ebro-hegy", ro: "Muntele Ebro", en: "Mount Ebro" },
    description: { de: "Ein markanter Berg in der Danakil-Senke.", hu: "Kiemelkedő hegy a Danakil-mélyföldön.", ro: "Un munte proeminent în depresiunea Danakil.", en: "A prominent mountain in the Danakil Depression." },
    facts: {
      de: ["Höchster Punkt der Danakil-Alpen.", "Vulkanisch."],
      hu: ["A Danakil-Alpok legmagasabb pontja.", "Vulkáni."],
      ro: ["Cel mai înalt punct din Alpii Danakil.", "Vulcanic."],
      en: ["Highest point in the Danakil Alps.", "Volcanic."]
    }
  },
  {
    id: "mount-tut-nature-v2",
    type: "mountain",
    parent: "ET-OR",
    coords: [38.5000, 9.5000],
    name: { de: "Mount Tut", hu: "Tut-hegy", ro: "Muntele Tut", en: "Mount Tut" },
    description: { de: "Ein Berg im zentralen Hochland.", hu: "Hegy a központi felföldön.", ro: "Un munte în zonele înalte centrale.", en: "A mountain in the central highlands." },
    facts: {
      de: ["Teil des Hochlandes.", "Schöne Aussicht."],
      hu: ["A felföld része.", "Szép kilátás."],
      ro: ["Parte a zonei înalte.", "Vedere frumoasă."],
      en: ["Part of the highlands.", "Beautiful view."]
    }
  },
  {
    id: "mount-culu-nature-v2",
    type: "mountain",
    parent: "ET-SN",
    coords: [37.0000, 6.0000],
    name: { de: "Mount Culu", hu: "Culu-hegy", ro: "Muntele Culu", en: "Mount Culu" },
    description: { de: "Ein Gebirgszug im Süden.", hu: "Hegylánc délen.", ro: "Un lanț muntos în sud.", en: "A mountain range in the south." },
    facts: {
      de: ["Wenig erforscht.", "Raues Gelände."],
      hu: ["Kevéssé feltárt.", "Zord terep."],
      ro: ["Puțin explorat.", "Teren accidentat."],
      en: ["Little explored.", "Rough terrain."]
    }
  },
  {
    id: "mount-gugu-nature-v2",
    type: "mountain",
    parent: "ET-OR",
    coords: [39.0000, 8.0000],
    name: { de: "Mount Gugu", hu: "Gugu-hegy", ro: "Muntele Gugu", en: "Mount Gugu" },
    description: { de: "Ein markanter Gipfel.", hu: "Kiemelkedő csúcs.", ro: "Un vârf proeminent.", en: "A prominent peak." },
    facts: {
      de: ["Hochland-Region.", "Wichtiges Ökosystem."],
      hu: ["Felföldi régió.", "Fontos ökoszisztéma."],
      ro: ["Regiunea zonei înalte.", "Ecosistem important."],
      en: ["Highland region.", "Important ecosystem."]
    }
  },
  {
    id: "akaki-river-nature-v2",
    type: "river",
    parent: "ET-AA",
    coords: [38.7500, 8.9000],
    name: { de: "Akaki", hu: "Akaki folyó", ro: "Râul Akaki", en: "Akaki River" },
    description: { de: "Ein kleiner Fluss bei Addis Abeba.", hu: "Kis folyó Addis Abeba közelében.", ro: "Un mic râu lângă Addis Abeba.", en: "A small river near Addis Ababa." },
    facts: {
      de: ["Wichtig für die Region.", "Speist lokale Stauseen."],
      hu: ["Fontos a régió számára.", "Helyi víztározókat táplál."],
      ro: ["Important pentru regiune.", "Alimentează lacurile locale."],
      en: ["Important for the region.", "Feeds local reservoirs."]
    }
  },
  {
    id: "wabi-shebelle-nature-v2",
    type: "river",
    parent: "ET-SO",
    coords: [43.0000, 5.0000],
    name: { de: "Wabi-Shebelle", hu: "Wabi-Shebelle folyó", ro: "Râul Wabi-Shebelle", en: "Wabi-Shebelle River" },
    description: { de: "Ein langer Fluss im Osten.", hu: "Hosszú folyó keleten.", ro: "Un râu lung în est.", en: "A long river in the east." },
    facts: {
      de: ["Durchfließt Somaliland.", "Saisonaler Fluss."],
      hu: ["Átfolyik Szomálián.", "Szezonális folyó."],
      ro: ["Curge prin Somalia.", "Râu sezonier."],
      en: ["Flows through Somalia.", "Seasonal river."]
    }
  },
  {
    id: "dawa-river-nature-v2",
    type: "river",
    parent: "ET-SO",
    coords: [42.0000, 4.0000],
    name: { de: "Dawa", hu: "Dawa folyó", ro: "Râul Dawa", en: "Dawa River" },
    description: { de: "Ein Grenzfluss in Südost-Äthiopien.", hu: "Határfolyó Délkelet-Etiópiában.", ro: "Un râu de frontieră în sud-estul Etiopiei.", en: "A border river in southeast Ethiopia." },
    facts: {
      de: ["Grenze zu Kenia.", "Trockene Region."],
      hu: ["Határ Kenyával.", "Száraz régió."],
      ro: ["Granița cu Kenya.", "Regiune aridă."],
      en: ["Border with Kenya.", "Arid region."]
    }
  },
  {
    id: "lake-beseka-nature-v2",
    type: "lake",
    parent: "ET-OR",
    coords: [39.8667, 8.8333],
    name: { de: "Beseka-See", hu: "Beseka-tó", ro: "Lacul Beseka", en: "Lake Beseka" },
    description: { de: "Ein wachsender Sodasee.", hu: "Növekvő szódás tó.", ro: "Un lac cu sodă în creștere.", en: "A growing soda lake." },
    facts: {
      de: ["Flächenvergrößerung.", "Ökologisch instabil."],
      hu: ["Területnövekedés.", "Ökológiailag instabil."],
      ro: ["Creșterea suprafeței.", "Ecologic instabil."],
      en: ["Surface area increase.", "Ecologically unstable."]
    }
  },
  {
    id: "mount-fentale-nature-v2",
    type: "mountain",
    parent: "ET-OR",
    coords: [39.9333, 8.9833],
    name: { de: "Mount Fentale", hu: "Fentale-hegy", ro: "Muntele Fentale", en: "Mount Fentale" },
    description: { de: "Ein aktiver Vulkan.", hu: "Aktív vulkán.", ro: "Un vulcan activ.", en: "An active volcano." },
    facts: {
      de: ["Letzter Ausbruch im 19. Jhd.", "Schwarzes Lavagestein."],
      hu: ["Utolsó kitörés a 19. sz-ban.", "Fekete lávakőzet."],
      ro: ["Ultima erupție în sec. XIX.", "Rocă vulcanică neagră."],
      en: ["Last eruption in 19th c.", "Black lava rock."]
    }
  },
  {
    id: "gibe-sheleko-nature-v2",
    type: "river",
    parent: "ET-OR",
    coords: [37.5000, 7.8000],
    name: { de: "Gibe Sheleko", hu: "Gibe Sheleko folyó", ro: "Râul Gibe Sheleko", en: "Gibe Sheleko River" },
    description: { de: "Ein Nebenfluss im Südwesten.", hu: "Mellékfolyó délnyugaton.", ro: "Un afluent în sud-vest.", en: "A tributary in the southwest." },
    facts: {
      de: ["Teil des Gibe-Systems.", "Wichtig für das lokale Klima."],
      hu: ["A Gibe-rendszer része.", "Fontos a helyi klímához."],
      ro: ["Parte a sistemului Gibe.", "Important pentru clima locală."],
      en: ["Part of the Gibe system.", "Important for local climate."]
    }
  },
  {
    id: "mount-kono-nature-v2",
    type: "mountain",
    parent: "ET-AM",
    coords: [38.0000, 12.0000],
    name: { de: "Mount Kono", hu: "Kono-hegy", ro: "Muntele Kono", en: "Mount Kono" },
    description: { de: "Ein Gipfel in der Amhara-Region.", hu: "Csúcs az Amhara régióban.", ro: "Un vârf în regiunea Amhara.", en: "A peak in the Amhara region." },
    facts: {
      de: ["Hochland.", "Bedeutende Wanderregion."],
      hu: ["Felföld.", "Fontos túrarégió."],
      ro: ["Zona înaltă.", "Regiune importantă pentru drumeții."],
      en: ["Highlands.", "Important hiking region."]
    }
  },
  {
    id: "lake-haromaya-nature-v2",
    type: "lake",
    parent: "ET-OR",
    coords: [42.0000, 9.4000],
    name: { de: "Haromaya-See", hu: "Haromaya-tó", ro: "Lacul Haromaya", en: "Lake Haromaya" },
    description: { de: "Ein See im Osten.", hu: "Tó keleten.", ro: "Un lac în est.", en: "A lake in the east." },
    facts: {
      de: ["Wichtig für Landwirtschaft.", "Wasserstand schwankend."],
      hu: ["Fontos a mezőgazdaságnak.", "Ingadozó vízszint."],
      ro: ["Important pentru agricultură.", "Nivelul apei oscilant."],
      en: ["Important for agriculture.", "Fluctuating water level."]
    }
  }
];
