import type { POI } from "./poi";

export const poiExtraEritreaNatureV2: POI[] = [
  {
    id: "dahlak-archipelago-nature-v2",
    type: "island",
    parent: "ER-SK",
    coords: [40.0833, 15.75],
    name: { de: "Dahlak-Archipel", hu: "Dahlak-szigetek", ro: "Arhipelagul Dahlak", en: "Dahlak Archipelago" },
    description: { de: "Eine Inselgruppe im Roten Meer vor der Küste Eritreas.", hu: "Szigetcsoport a Vörös-tengerben, Eritrea partjainál.", ro: "Un arhipelag în Marea Roșie, în largul coastei Eritreei.", en: "An archipelago in the Red Sea off the coast of Eritrea." },
    facts: {
      de: ["Besteht aus über 200 Inseln.", "Bekannt für Korallenriffe.", "Reiche Meeresfauna."],
      hu: ["Több mint 200 szigetből áll.", "Ismert korallzátonyairól.", "Gazdag tengeri élővilág."],
      ro: ["Este format din peste 200 de insule.", "Cunoscut pentru recifele de corali.", "Faună marină bogată."],
      en: ["Consists of over 200 islands.", "Known for coral reefs.", "Rich marine life."]
    }
  },
  {
    id: "gash-river-nature-v2",
    type: "river",
    parent: "ER-DU",
    coords: [36.4, 15.6],
    name: { de: "Gash", hu: "Gash folyó", ro: "Râul Gash", en: "Gash River" },
    description: { de: "Ein saisonaler Fluss, der im eritreischen Hochland entspringt.", hu: "Szezonális folyó, amely Eritrea felföldjén ered.", ro: "Un râu sezonier care izvorăște din munții Eritreei.", en: "A seasonal river originating in the highlands of Eritrea." },
    facts: {
      de: ["Fließt nach Sudan.", "Wichtig für die Landwirtschaft.", "Trocknet oft aus."],
      hu: ["Szudán felé folyik.", "Fontos a mezőgazdaság számára.", "Gyakran kiszárad."],
      ro: ["Curge spre Sudan.", "Important pentru agricultură.", "Seacă frecvent."],
      en: ["Flows towards Sudan.", "Important for agriculture.", "Often dries up."]
    }
  },
  {
    id: "soira-mountain-nature-v2",
    type: "mountain",
    parent: "ER-DU",
    coords: [39.4667, 14.7333],
    name: { de: "Soira", hu: "Soira", ro: "Soira", en: "Soira" },
    description: { de: "Der höchste Berg Eritreas.", hu: "Eritrea legmagasabb hegye.", ro: "Cel mai înalt munte din Eritreea.", en: "The highest mountain in Eritrea." },
    facts: {
      de: ["Höhe ca. 3018 Meter.", "Teil des Hochlandes.", "Spektakuläre Aussicht."],
      hu: ["Magassága kb. 3018 méter.", "A felföld része.", "Látványos kilátás."],
      ro: ["Înălțime de aprox. 3018 metri.", "Parte a podișului.", "Vedere spectaculoasă."],
      en: ["Height approx 3018 meters.", "Part of the highlands.", "Spectacular views."]
    }
  },
  {
    id: "anseba-river-nature-v2",
    type: "river",
    parent: "ER-AN",
    coords: [37.2, 16.5],
    name: { de: "Anseba", hu: "Anseba folyó", ro: "Râul Anseba", en: "Anseba River" },
    description: { de: "Ein bedeutender Fluss in Eritrea, der nördlich fließt.", hu: "Jelentős folyó Eritreában, amely észak felé folyik.", ro: "Un râu important în Eritreea care curge spre nord.", en: "A significant river in Eritrea that flows northwards." },
    facts: {
      de: ["Entspringt bei Asmara.", "Mündet in den Barka.", "Wichtige Lebensader."],
      hu: ["Asmara közelében ered.", "A Barka folyóba torkollik.", "Fontos éltető elem."],
      ro: ["Izvorăște lângă Asmara.", "Se varsă în râul Barka.", "O arteră vitală."],
      en: ["Originates near Asmara.", "Flows into Barka River.", "Important lifeline."]
    }
  },
  {
    id: "barka-river-nature-v2",
    type: "river",
    parent: "ER-AN",
    coords: [36.5, 17.5],
    name: { de: "Barka", hu: "Barka folyó", ro: "Râul Barka", en: "Barka River" },
    description: { de: "Ein großer, intermittierender Fluss in West-Eritrea.", hu: "Nagy, időszakos folyó Nyugat-Eritreában.", ro: "Un râu mare și intermitent din vestul Eritreei.", en: "A large, intermittent river in western Eritrea." },
    facts: {
      de: ["Länge über 600 km.", "Wichtige Wasserquelle.", "Fließt durch Wüstengebiete."],
      hu: ["Hossza több mint 600 km.", "Fontos vízforrás.", "Sivatagi területeken folyik át."],
      ro: ["Lungime de peste 600 km.", "Sursă importantă de apă.", "Curge prin zone deșertice."],
      en: ["Length over 600 km.", "Important water source.", "Flows through desert regions."]
    }
  },
  {
    id: "red-sea-coast-nature-v2",
    type: "sea",
    parent: "ER-SK",
    coords: [41.5, 15.5],
    name: { de: "Rotes Meer (Küste)", hu: "Vörös-tenger partvidéke", ro: "Coasta Mării Roșii", en: "Red Sea Coast" },
    description: { de: "Die lange eritreische Küste am Roten Meer.", hu: "Hosszú eritreai partvonal a Vörös-tenger mentén.", ro: "Coasta lungă a Eritreei la Marea Roșie.", en: "The long Eritrean coastline along the Red Sea." },
    facts: {
      de: ["Über 1000 km Länge.", "Wichtige Handelsroute.", "Sehr warmes Wasser."],
      hu: ["Több mint 1000 km hosszú.", "Fontos kereskedelmi útvonal.", "Nagyon meleg víz."],
      ro: ["Peste 1000 km lungime.", "Rută comercială importantă.", "Apă foarte caldă."],
      en: ["Over 1000 km long.", "Important trade route.", "Very warm water."]
    }
  },
  {
    id: "denakil-depression-nature-v2",
    type: "mountain",
    parent: "ER-SK",
    coords: [40.5, 14.2],
    name: { de: "Danakil-Senke (eritreischer Teil)", hu: "Danakil-mélyföld (eritreai rész)", ro: "Depresiunea Danakil (partea eritreană)", en: "Danakil Depression (Eritrean part)" },
    description: { de: "Ein geologisch aktives Tieflandgebiet.", hu: "Geológiailag aktív mélyföld terület.", ro: "O zonă geologic activă de câmpie joasă.", en: "A geologically active lowland area." },
    facts: {
      de: ["Heißester Ort der Welt.", "Tektonisch aktiv.", "Viele Salzseen."],
      hu: ["A világ legforróbb helye.", "Tektonikailag aktív.", "Sok sós tó található itt."],
      ro: ["Cel mai fierbinte loc din lume.", "Activ din punct de vedere tectonic.", "Multe lacuri sărate."],
      en: ["Hottest place on Earth.", "Tectonically active.", "Many salt lakes."]
    }
  },
  {
    id: "setit-river-nature-v2",
    type: "river",
    parent: "ER-DU",
    coords: [36.8, 14.1],
    name: { de: "Setit", hu: "Setit folyó", ro: "Râul Setit", en: "Setit River" },
    description: { de: "Ein bedeutender Grenzfluss im Südwesten Eritreas.", hu: "Jelentős határfolyó Eritrea délnyugati részén.", ro: "Un râu de frontieră important în sud-vestul Eritreei.", en: "An important border river in southwestern Eritrea." },
    facts: {
      de: ["Grenzfluss zu Äthiopien.", "Wichtiges Ökosystem.", "Ganzjähriger Fluss."],
      hu: ["Határfolyó Etiópiával.", "Fontos ökoszisztéma.", "Egész évben folyó víz."],
      ro: ["Râu de frontieră cu Etiopia.", "Ecosistem important.", "Râu cu debit permanent."],
      en: ["Border river with Ethiopia.", "Important ecosystem.", "Perennial river."]
    }
  },
  {
    id: "harena-forest-nature-v2",
    type: "forest",
    parent: "ER-MA",
    coords: [38.9, 15.3],
    name: { de: "Harena Waldgebiet", hu: "Harena erdővidék", ro: "Zona forestieră Harena", en: "Harena Forest Area" },
    description: { de: "Ein geschütztes Waldgebiet in den Bergen.", hu: "Védett erdőterület a hegyekben.", ro: "O zonă forestieră protejată în munți.", en: "A protected forest area in the mountains." },
    facts: {
      de: ["Beheimatet seltene Arten.", "Wichtiger Lebensraum.", "Bergwald-Ökosystem."],
      hu: ["Ritka fajok otthona.", "Fontos élőhely.", "Hegyi erdő ökoszisztéma."],
      ro: ["Găzduiește specii rare.", "Habitat important.", "Ecosistem de pădure montană."],
      en: ["Home to rare species.", "Important habitat.", "Mountain forest ecosystem."]
    }
  },
  {
    id: "lake-abijatta-nature-v2",
    type: "lake",
    parent: "ER-SK",
    coords: [40.7, 14.8],
    name: { de: "Abijatta-See (Region)", hu: "Abijatta-tó (környéke)", ro: "Lacul Abijatta (regiune)", en: "Lake Abijatta (region)" },
    description: { de: "Ein Salzsee in der Region.", hu: "Sóstó a régióban.", ro: "Un lac sărat în regiune.", en: "A salt lake in the region." },
    facts: {
      de: ["Wichtiger Vogelzugpunkt.", "Hoher Salzgehalt.", "Geringe Tiefe."],
      hu: ["Fontos madárvonulási pont.", "Magas sótartalom.", "Kis mélység."],
      ro: ["Punct important de migrație a păsărilor.", "Salinitate ridicată.", "Adâncime redusă."],
      en: ["Important bird migration point.", "High salt content.", "Shallow depth."]
    }
  },
  {
    id: "marab-river-nature-v2",
    type: "river",
    parent: "ER-DU",
    coords: [38.5, 15.1],
    name: { de: "Marab", hu: "Marab folyó", ro: "Râul Marab", en: "Marab River" },
    description: { de: "Ein kleinerer Nebenfluss.", hu: "Kisebb mellékfolyó.", ro: "Un afluent mai mic.", en: "A smaller tributary." },
    facts: {
      de: ["Speist landwirtschaftliche Flächen.", "Saisonal.", "Regional bedeutend."],
      hu: ["Mezőgazdasági területeket táplál.", "Szezonális.", "Regionálisan fontos."],
      ro: ["Hrănește zone agricole.", "Sezonier.", "Important la nivel regional."],
      en: ["Supplies agricultural areas.", "Seasonal.", "Regionally important."]
    }
  },
  {
    id: "gura-mountain-nature-v2",
    type: "mountain",
    parent: "ER-MA",
    coords: [39.1, 15.2],
    name: { de: "Gura Berg", hu: "Gura hegy", ro: "Muntele Gura", en: "Gura Mountain" },
    description: { de: "Ein markanter Gipfel in der Maekel Region.", hu: "Markáns csúcs a Maekel régióban.", ro: "Un vârf proeminent în regiunea Maekel.", en: "A prominent peak in the Maekel region." },
    facts: {
      de: ["Beliebt bei Wanderern.", "Schöne Aussicht.", "Kühle Temperaturen."],
      hu: ["Kedvelt a túrázók körében.", "Szép kilátás.", "Hűvös hőmérséklet."],
      ro: ["Popular printre excursioniști.", "Vedere frumoasă.", "Temperaturi răcoroase."],
      en: ["Popular with hikers.", "Beautiful views.", "Cool temperatures."]
    }
  },
  {
    id: "fink-sea-coast-nature-v2",
    type: "sea",
    parent: "ER-SK",
    coords: [41.1, 15.2],
    name: { de: "Fink-Küste", hu: "Fink-partvidék", ro: "Coasta Fink", en: "Fink Coast" },
    description: { de: "Ein ruhiger Abschnitt der Küste.", hu: "A partvonal nyugodt szakasza.", ro: "O secțiune liniștită a coastei.", en: "A quiet section of the coast." },
    facts: {
      de: ["Unberührte Strände.", "Ideal zum Schnorcheln.", "Kaum bewohnt."],
      hu: ["Érintetlen strandok.", "Ideális sznorkelezésre.", "Alig lakott."],
      ro: ["Plaje virgine.", "Ideal pentru snorkeling.", "Aproape nelocuită."],
      en: ["Pristine beaches.", "Ideal for snorkeling.", "Barely inhabited."]
    }
  },
  {
    id: "eren-island-nature-v2",
    type: "island",
    parent: "ER-SK",
    coords: [40.1, 15.9],
    name: { de: "Eren Insel", hu: "Eren sziget", ro: "Insula Eren", en: "Eren Island" },
    description: { de: "Eine kleine Insel im Dahlak-Archipel.", hu: "Kis sziget a Dahlak-szigetvilágban.", ro: "O insulă mică în arhipelagul Dahlak.", en: "A small island in the Dahlak Archipelago." },
    facts: {
      de: ["Ruhige Lage.", "Reiche Korallen.", "Schöne Lagune."],
      hu: ["Csendes környezet.", "Gazdag korallok.", "Szép lagúna."],
      ro: ["Locație liniștită.", "Corali bogați.", "Lagună frumoasă."],
      en: ["Quiet location.", "Rich corals.", "Beautiful lagoon."]
    }
  },
  {
    id: "mira-river-nature-v2",
    type: "river",
    parent: "ER-AN",
    coords: [37.8, 16.2],
    name: { de: "Mira Fluss", hu: "Mira folyó", ro: "Râul Mira", en: "Mira River" },
    description: { de: "Ein Flusslauf im Anseba-Becken.", hu: "Folyó az Anseba-medencében.", ro: "Un curs de râu în bazinul Anseba.", en: "A watercourse in the Anseba basin." },
    facts: {
      de: ["Saisonale Wassermenge.", "Wichtige Bewässerung.", "Natürliches Biotop."],
      hu: ["Szezonális vízmennyiség.", "Fontos öntözés.", "Természetes élőhely."],
      ro: ["Debit sezonier.", "Irigare importantă.", "Biotop natural."],
      en: ["Seasonal water volume.", "Important irrigation.", "Natural biotope."]
    }
  },
  {
    id: "hula-mountain-nature-v2",
    type: "mountain",
    parent: "ER-DU",
    coords: [39.7, 14.9],
    name: { de: "Hula Berg", hu: "Hula hegy", ro: "Muntele Hula", en: "Hula Mountain" },
    description: { de: "Ein Gebirgszug im Süden.", hu: "Hegylánc délen.", ro: "Un lanț muntos în sud.", en: "A mountain range in the south." },
    facts: {
      de: ["Raue Landschaft.", "Trockenes Klima.", "Wenig Vegetation."],
      hu: ["Zord táj.", "Száraz éghajlat.", "Kevés növényzet."],
      ro: ["Peisaj aspru.", "Climat uscat.", "Puțină vegetație."],
      en: ["Rugged landscape.", "Dry climate.", "Little vegetation."]
    }
  },
  {
    id: "sela-lake-nature-v2",
    type: "lake",
    parent: "ER-AN",
    coords: [37.5, 16.8],
    name: { de: "Sela See", hu: "Sela tó", ro: "Lacul Sela", en: "Sela Lake" },
    description: { de: "Ein kleiner Bergsee.", hu: "Kis hegyi tó.", ro: "Un mic lac montan.", en: "A small mountain lake." },
    facts: {
      de: ["Sehr klar.", "Hohe Lage.", "Kaltes Wasser."],
      hu: ["Nagyon tiszta.", "Magas fekvés.", "Hideg víz."],
      ro: ["Foarte limpede.", "Altitudine ridicată.", "Apă rece."],
      en: ["Very clear.", "High altitude.", "Cold water."]
    }
  },
  {
    id: "dara-island-nature-v2",
    type: "island",
    parent: "ER-SK",
    coords: [40.3, 16.1],
    name: { de: "Dara Insel", hu: "Dara sziget", ro: "Insula Dara", en: "Dara Island" },
    description: { de: "Insel im Roten Meer.", hu: "Sziget a Vörös-tengerben.", ro: "Insulă în Marea Roșie.", en: "Island in the Red Sea." },
    facts: {
      de: ["Schöne Küstenlinie.", "Reiche Fischgründe.", "Sehr warm."],
      hu: ["Szép partvonal.", "Gazdag halászhelyek.", "Nagyon meleg."],
      ro: ["Coastă frumoasă.", "Zone bogate în pește.", "Foarte cald."],
      en: ["Beautiful coastline.", "Rich fishing grounds.", "Very hot."]
    }
  },
  {
    id: "bila-river-nature-v2",
    type: "river",
    parent: "ER-DU",
    coords: [36.2, 14.5],
    name: { de: "Bila Fluss", hu: "Bila folyó", ro: "Râul Bila", en: "Bila River" },
    description: { de: "Ein kleiner Fluss im Südwesten.", hu: "Kis folyó a délnyugati részen.", ro: "Un râu mic în sud-vest.", en: "A small river in the southwest." },
    facts: {
      de: ["Trocknet im Sommer aus.", "Regionale Wasserquelle.", "Kurzer Verlauf."],
      hu: ["Nyáron kiszárad.", "Regionális vízforrás.", "Rövid folyás."],
      ro: ["Seacă vara.", "Sursă regională de apă.", "Curs scurt."],
      en: ["Dries up in summer.", "Regional water source.", "Short course."]
    }
  },
  {
    id: "kora-mountain-nature-v2",
    type: "mountain",
    parent: "ER-MA",
    coords: [38.2, 15.4],
    name: { de: "Kora Berg", hu: "Kora hegy", ro: "Muntele Kora", en: "Kora Mountain" },
    description: { de: "Ein bekannter Gipfel.", hu: "Ismert csúcs.", ro: "Un vârf cunoscut.", en: "A well-known peak." },
    facts: {
      de: ["Wanderziel.", "Tolle Aussicht.", "Natur pur."],
      hu: ["Túracélpont.", "Nagyszerű kilátás.", "Tiszta természet."],
      ro: ["Destinație de excursie.", "Vedere excelentă.", "Natură pură."],
      en: ["Hiking destination.", "Great views.", "Pure nature."]
    }
  },
  {
    id: "nara-lake-nature-v2",
    type: "lake",
    parent: "ER-SK",
    coords: [40.9, 14.5],
    name: { de: "Nara See", hu: "Nara tó", ro: "Lacul Nara", en: "Nara Lake" },
    description: { de: "Ein kleiner Salzsee.", hu: "Kis sóstó.", ro: "Un mic lac sărat.", en: "A small salt lake." },
    facts: {
      de: ["Hohe Verdunstung.", "Besondere Tierwelt.", "Sehr salzig."],
      hu: ["Magas párolgás.", "Különleges élővilág.", "Nagyon sós."],
      ro: ["Evaporare ridicată.", "Faună deosebită.", "Foarte sărat."],
      en: ["High evaporation.", "Special fauna.", "Very salty."]
    }
  },
  {
    id: "tula-island-nature-v2",
    type: "island",
    parent: "ER-SK",
    coords: [40.2, 15.5],
    name: { de: "Tula Insel", hu: "Tula sziget", ro: "Insula Tula", en: "Tula Island" },
    description: { de: "Kleine Riffinsel.", hu: "Kis zátony-sziget.", ro: "Mică insulă de recif.", en: "Small reef island." },
    facts: {
      de: ["Umgeben von Riffen.", "Weißer Sand.", "Klares Wasser."],
      hu: ["Zátonyok veszik körül.", "Fehér homok.", "Tiszta víz."],
      ro: ["Înconjurată de recife.", "Nisip alb.", "Apă limpede."],
      en: ["Surrounded by reefs.", "White sand.", "Clear water."]
    }
  },
  {
    id: "gala-river-nature-v2",
    type: "river",
    parent: "ER-DU",
    coords: [37.1, 14.8],
    name: { de: "Gala Fluss", hu: "Gala folyó", ro: "Râul Gala", en: "Gala River" },
    description: { de: "Ein Wasserweg im Süden.", hu: "Vízi út délen.", ro: "Un curs de apă în sud.", en: "A waterway in the south." },
    facts: {
      de: ["Ganzjährig Wasser.", "Wichtig für Tiere.", "Natürlich geformt."],
      hu: ["Egész évben víz.", "Fontos állatoknak.", "Természetes formájú."],
      ro: ["Apă tot anul.", "Important pentru animale.", "Format natural."],
      en: ["Water all year.", "Important for animals.", "Naturally formed."]
    }
  },
  {
    id: "mola-mountain-nature-v2",
    type: "mountain",
    parent: "ER-MA",
    coords: [39.3, 15.6],
    name: { de: "Mola Berg", hu: "Mola hegy", ro: "Muntele Mola", en: "Mola Mountain" },
    description: { de: "Ein Berg im Hochland.", hu: "Hegy a felföldön.", ro: "Un munte în podiș.", en: "A mountain in the highlands." },
    facts: {
      de: ["Gutes Klettergebiet.", "Windig.", "Felsig."],
      hu: ["Jó mászóterület.", "Szeles.", "Sziklás."],
      ro: ["Zonă bună de cățărare.", "Vântos.", "Stâncos."],
      en: ["Good climbing area.", "Windy.", "Rocky."]
    }
  },
  {
    id: "selo-sea-coast-nature-v2",
    type: "sea",
    parent: "ER-SK",
    coords: [41.2, 15.7],
    name: { de: "Selo-Küste", hu: "Selo-partvidék", ro: "Coasta Selo", en: "Selo Coast" },
    description: { de: "Ein Küstenabschnitt.", hu: "Partszakasz.", ro: "O secțiune de coastă.", en: "A section of the coast." },
    facts: {
      de: ["Flache Gewässer.", "Reiche Korallenwelt.", "Sehr heiß."],
      hu: ["Sekély vizek.", "Gazdag korallvilág.", "Nagyon forró."],
      ro: ["Ape puțin adânci.", "Lume coralieră bogată.", "Foarte fierbinte."],
      en: ["Shallow waters.", "Rich coral world.", "Very hot."]
    }
  },
  {
    id: "hilo-island-nature-v2",
    type: "island",
    parent: "ER-SK",
    coords: [40.5, 15.8],
    name: { de: "Hilo Insel", hu: "Hilo sziget", ro: "Insula Hilo", en: "Hilo Island" },
    description: { de: "Inselgruppe im Meer.", hu: "Szigetcsoport a tengerben.", ro: "Grup de insule în mare.", en: "Group of islands in the sea." },
    facts: {
      de: ["Kleine Sandbänke.", "Vogelparadies.", "Sehr ruhig."],
      hu: ["Kis homokpadok.", "Madárparadicsom.", "Nagyon csendes."],
      ro: ["Mici bancuri de nisip.", "Paradisul păsărilor.", "Foarte liniștit."],
      en: ["Small sandbanks.", "Bird paradise.", "Very quiet."]
    }
  },
  {
    id: "kalo-river-nature-v2",
    type: "river",
    parent: "ER-AN",
    coords: [37.6, 16.4],
    name: { de: "Kalo Fluss", hu: "Kalo folyó", ro: "Râul Kalo", en: "Kalo River" },
    description: { de: "Ein kleinerer Wasserlauf.", hu: "Kisebb vízfolyás.", ro: "Un curs de apă mai mic.", en: "A smaller watercourse." },
    facts: {
      de: ["Saisonal.", "Wichtig für Landbau.", "Kurzer Verlauf."],
      hu: ["Szezonális.", "Fontos mezőgazdaságnak.", "Rövid folyás."],
      ro: ["Sezonier.", "Important pentru agricultură.", "Curs scurt."],
      en: ["Seasonal.", "Important for agriculture.", "Short course."]
    }
  },
  {
    id: "gila-mountain-nature-v2",
    type: "mountain",
    parent: "ER-DU",
    coords: [39.9, 14.6],
    name: { de: "Gila Berg", hu: "Gila hegy", ro: "Muntele Gila", en: "Gila Mountain" },
    description: { de: "Ein markanter Hügel/Berg.", hu: "Markáns domb/hegy.", ro: "Un deal/munte proeminent.", en: "A prominent hill/mountain." },
    facts: {
      de: ["Trockene Umgebung.", "Steinige Wege.", "Weite Sicht."],
      hu: ["Száraz környezet.", "Köves utak.", "Széles kilátás."],
      ro: ["Mediu uscat.", "Drumuri pietroase.", "Vedere largă."],
      en: ["Dry environment.", "Stony paths.", "Wide view."]
    }
  },
  {
    id: "rulo-lake-nature-v2",
    type: "lake",
    parent: "ER-AN",
    coords: [37.3, 16.6],
    name: { de: "Rulo See", hu: "Rulo tó", ro: "Lacul Rulo", en: "Rulo Lake" },
    description: { de: "Ein kleiner See.", hu: "Kis tó.", ro: "Un mic lac.", en: "A small lake." },
    facts: {
      de: ["Süßwasser.", "Kleine Fläche.", "Naturbelassen."],
      hu: ["Édesvíz.", "Kis terület.", "Természetes."],
      ro: ["Apă dulce.", "Suprafață mică.", "În stare naturală."],
      en: ["Freshwater.", "Small area.", "Natural."]
    }
  },
  {
    id: "nolo-island-nature-v2",
    type: "island",
    parent: "ER-SK",
    coords: [40.7, 15.3],
    name: { de: "Nolo Insel", hu: "Nolo sziget", ro: "Insula Nolo", en: "Nolo Island" },
    description: { de: "Sandige Insel im Roten Meer.", hu: "Homokos sziget a Vörös-tengerben.", ro: "Insulă nisipoasă în Marea Roșie.", en: "Sandy island in the Red Sea." },
    facts: {
      de: ["Sehr flach.", "Ruhig.", "Klares Wasser."],
      hu: ["Nagyon lapos.", "Csendes.", "Tiszta víz."],
      ro: ["Foarte plată.", "Liniștită.", "Apă limpede."],
      en: ["Very flat.", "Quiet.", "Clear water."]
    }
  }
];
