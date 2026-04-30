import type { POI } from "./poi";

export const poiExtraHaitiNatureV2: POI[] = [
  {
    id: "ht-riviere-grise-nature-v2",
    type: "river",
    parent: "HT-OU",
    coords: [-72.316, 18.579],
    name: { de: "Rivière Grise", hu: "Rivière Grise", ro: "Râul Grise", en: "Grise River" },
    description: {
      de: "Ein Fluss, der durch die Ebene von Cul-de-Sac fließt und in die Bucht von Port-au-Prince mündet.",
      hu: "A Cul-de-Sac síkságon átfolyó folyó, amely a Port-au-Prince-i öbölbe torkollik.",
      ro: "Un râu care traversează Câmpia Cul-de-Sac și se varsă în Golful Port-au-Prince.",
      en: "A river that flows through the Cul-de-Sac plain and empties into the Bay of Port-au-Prince."
    },
    facts: {
      de: ["Wichtige Wasserquelle für die Hauptstadtregion", "Neigt zu Überschwemmungen während der Regenzeit"],
      hu: ["Fontos vízforrás a fővárosi régió számára", "Hajlamos az áradásokra az esős évszakban"],
      ro: ["Sursă importantă de apă pentru regiunea capitalei", "Predispus la inundații în sezonul ploios"],
      en: ["Important water source for the capital region", "Prone to flooding during the rainy season"]
    }
  },
  {
    id: "ht-lac-de-peligre-nature-v2",
    type: "lake",
    parent: "HT-CE",
    coords: [-71.95, 18.9667],
    name: { de: "Péligre-See", hu: "Péligre-tó", ro: "Lacul Péligre", en: "Lake Péligre" },
    description: {
      de: "Ein künstlicher See, der durch den Péligre-Staudamm am Artibonite-Fluss entstanden ist.",
      hu: "Mesterséges tó, amelyet a Péligre-gát hozott létre az Artibonite folyón.",
      ro: "Un lac artificial creat de barajul Péligre pe râul Artibonite.",
      en: "An artificial lake created by the Péligre Dam on the Artibonite River."
    },
    facts: {
      de: ["Zweitgrößter See Haitis", "Wichtig für die Wasserkraft", "Entscheidend für die Bewässerung im Artibonite-Tal"],
      hu: ["Haiti második legnagyobb tava", "Fontos a vízenergia szempontjából", "Döntő fontosságú az Artibonite-völgy öntözésében"],
      ro: ["Al doilea cel mai mare lac din Haiti", "Important pentru hidroenergie", "Crucial pentru irigațiile din Valea Artibonite"],
      en: ["Second largest lake in Haiti", "Vital for hydroelectric power", "Crucial for irrigation in the Artibonite Valley"]
    }
  },
  {
    id: "ht-chaine-de-la-selle-nature-v2",
    type: "mountain",
    parent: "HT-SE",
    coords: [-72.0, 18.35],
    name: { de: "Chaîne de la Selle", hu: "Chaîne de la Selle-hegység", ro: "Lanțul muntos La Selle", en: "La Selle Range" },
    description: {
      de: "Eine Gebirgskette im Südosten Haitis, die den höchsten Gipfel des Landes, den Morne la Selle, beherbergt.",
      hu: "Hegylánc Haiti délkeleti részén, itt található az ország legmagasabb csúcsa, a Morne la Selle.",
      ro: "Un lanț muntos în sud-estul Haitiului, care include cel mai înalt vârf al țării, Morne la Selle.",
      en: "A mountain range in southeastern Haiti that includes the country's highest peak, Morne la Selle."
    },
    facts: {
      de: ["Höchste Gebirgskette Haitis", "Wichtige Biodiversitätszone", "Beinhaltet den Nationalpark La Visite"],
      hu: ["Haiti legmagasabb hegylánca", "Fontos biodiverzitási zóna", "Magában foglalja a La Visite Nemzeti Parkot"],
      ro: ["Cel mai înalt lanț muntos din Haiti", "Zonă importantă de biodiversitate", "Include Parcul Național La Visite"],
      en: ["Highest mountain range in Haiti", "Important biodiversity zone", "Includes La Visite National Park"]
    }
  },
  {
    id: "ht-massif-de-la-hotte-nature-v2",
    type: "mountain",
    parent: "HT-GA",
    coords: [-74.0, 18.4],
    name: { de: "Massif de la Hotte", hu: "Massif de la Hotte", ro: "Masivul de la Hotte", en: "Massif de la Hotte" },
    description: {
      de: "Eine Gebirgskette auf der Tiburon-Halbinsel, bekannt für ihre extreme Biodiversität und endemischen Arten.",
      hu: "Hegylánc a Tiburon-félszigeten, amely rendkívüli biodiverzitásáról és endemikus fajairól ismert.",
      ro: "Un lanț muntos în peninsula Tiburon, cunoscut pentru biodiversitatea sa extremă și speciile endemice.",
      en: "A mountain range on the Tiburon Peninsula, known for its extreme biodiversity and endemic species."
    },
    facts: {
      de: ["UNESCO-Biosphärenreservat", "Heimat des Pic Macaya", "Hohe Konzentration an endemischen Amphibien"],
      hu: ["UNESCO Bioszféra-rezervátum", "A Pic Macaya otthona", "Magas az endemikus kétéltűek koncentrációja"],
      ro: ["Rezervație a biosferei UNESCO", "Adăpostește Pic Macaya", "Concentrație mare de amfibieni endemici"],
      en: ["UNESCO Biosphere Reserve", "Home to Pic Macaya", "High concentration of endemic amphibians"]
    }
  },
  {
    id: "ht-ile-de-la-gonave-nature-v2",
    type: "island",
    parent: "HT-OU",
    coords: [-73.0, 18.8333],
    name: { de: "Île de la Gonâve", hu: "Gonâve-sziget", ro: "Insula Gonâve", en: "Gonâve Island" },
    description: {
      de: "Die größte der Satelliteninseln Haitis, gelegen im Golf von Gonâve westlich von Port-au-Prince.",
      hu: "Haiti legnagyobb szatellit-szigete, a Gonâve-öbölben, Port-au-Prince-től nyugatra.",
      ro: "Cea mai mare dintre insulele satelit ale Haitiului, situată în Golful Gonâve, la vest de Port-au-Prince.",
      en: "The largest of Haiti's satellite islands, located in the Gulf of Gonâve to the west of Port-au-Prince."
    },
    facts: {
      de: ["Größte Nebeninsel Haitis", "Trockenes und hügeliges Terrain", "Etwa 80.000 Einwohner"],
      hu: ["Haiti legnagyobb mellékszigete", "Száraz és dombos terep", "Körülbelül 80 000 lakos"],
      ro: ["Cea mai mare insulă secundară din Haiti", "Teren uscat și deluros", "Aproximativ 80.000 de locuitori"],
      en: ["Largest satellite island of Haiti", "Arid and hilly terrain", "Population of around 80,000"]
    }
  },
  {
    id: "ht-baie-de-port-au-prince-nature-v2",
    type: "sea",
    parent: "HT-OU",
    coords: [-72.4, 18.6],
    name: { de: "Bucht von Port-au-Prince", hu: "Port-au-Prince-i öböl", ro: "Golful Port-au-Prince", en: "Bay of Port-au-Prince" },
    description: {
      de: "Eine große Bucht am Golf von Gonâve, die der haitianischen Hauptstadt als natürlicher Hafen dient.",
      hu: "Nagy öböl a Gonâve-öbölben, amely természetes kikötőként szolgál a haiti főváros számára.",
      ro: "Un golf mare în Golful Gonâve, care servește drept port natural pentru capitala haitiană.",
      en: "A large bay on the Gulf of Gonâve, serving as a natural harbor for the Haitian capital."
    },
    facts: {
      de: ["Natürlicher Hafen der Hauptstadt", "Teil des Golfs von Gonâve", "Wichtig für den Seehandel"],
      hu: ["A főváros természetes kikötője", "A Gonâve-öböl része", "Fontos a tengeri kereskedelem szempontjából"],
      ro: ["Portul natural al capitalei", "Parte a Golfului Gonâve", "Important pentru comerțul maritim"],
      en: ["Natural harbor for the capital", "Part of the Gulf of Gonâve", "Vital for maritime trade"]
    }
  },
  {
    id: "ht-parc-national-la-visite-nature-v2",
    type: "forest",
    parent: "HT-SE",
    coords: [-72.3, 18.33],
    name: { de: "Nationalpark La Visite", hu: "La Visite Nemzeti Park", ro: "Parcul Național La Visite", en: "La Visite National Park" },
    description: {
      de: "Ein Nationalpark in der Chaîne de la Selle, bekannt für seine Kiefernwälder und Karstlandschaft.",
      hu: "Nemzeti park a Chaîne de la Selle hegységben, amely fenyőerdeiről és karsztvidékéről ismert.",
      ro: "Un parc național în lanțul muntos La Selle, cunoscut pentru pădurile sale de pini și peisajul carstic.",
      en: "A national park in the Chaîne de la Selle range, known for its pine forests and karst landscape."
    },
    facts: {
      de: ["Schützt wichtige Kiefernwälder", "Teil des Massif de la Selle", "Wichtiger Lebensraum für Vögel"],
      hu: ["Fontos fenyőerdőket véd", "A Massif de la Selle része", "Fontos madárélőhely"],
      ro: ["Protejează păduri importante de pini", "Parte a Masivului de la Selle", "Habitat important pentru păsări"],
      en: ["Protects important pine forests", "Part of the Massif de la Selle", "Important bird habitat"]
    }
  },
  {
    id: "ht-parc-national-pic-macaya-nature-v2",
    type: "forest",
    parent: "HT-GA",
    coords: [-74.02, 18.38],
    name: { de: "Nationalpark Pic Macaya", hu: "Pic Macaya Nemzeti Park", ro: "Parcul Național Pic Macaya", en: "Pic Macaya National Park" },
    description: {
      de: "Einer der artenreichsten Orte der Welt, der den zweithöchsten Berg Haitis umgibt.",
      hu: "A világ egyik leginkább fajgazdag helye, amely Haiti második legmagasabb hegyét veszi körül.",
      ro: "Unul dintre cele mai bogate locuri în biodiversitate din lume, care înconjoară al doilea cel mai înalt munte din Haiti.",
      en: "One of the most biodiverse places in the world, surrounding Haiti's second-highest mountain."
    },
    facts: {
      de: ["Extrem hohe Biodiversität", "Letzte Nebelwälder Haitis", "Schutz für Dutzende endemischer Froscharten"],
      hu: ["Rendkívül magas biodiverzitás", "Haiti utolsó köderdei", "Több tucat endemikus békafaj védelme"],
      ro: ["Biodiversitate extrem de ridicată", "Ultimele păduri de ceață din Haiti", "Protecție pentru zeci de specii de broaște endemice"],
      en: ["Extremely high biodiversity", "Haiti's last remaining cloud forests", "Protects dozens of endemic frog species"]
    }
  },
  {
    id: "ht-riviere-de-nippes-nature-v2",
    type: "river",
    parent: "HT-NI",
    coords: [-73.1, 18.45],
    name: { de: "Rivière de Nippes", hu: "Nippes folyó", ro: "Râul Nippes", en: "Nippes River" },
    description: {
      de: "Ein Fluss, der durch das Departement Nippes fließt und für die lokale Landwirtschaft wichtig ist.",
      hu: "A Nippes megyén átfolyó folyó, amely fontos a helyi mezőgazdaság számára.",
      ro: "Un râu care traversează departamentul Nippes și este important pentru agricultura locală.",
      en: "A river flowing through the Nippes department, important for local agriculture."
    },
    facts: {
      de: ["Hauptfluss des Departements Nippes", "Mündet in den Golf von Gonâve"],
      hu: ["A Nippes megye fő folyója", "A Gonâve-öbölbe torkollik"],
      ro: ["Râul principal al departamentului Nippes", "Se varsă în Golful Gonâve"],
      en: ["Main river of the Nippes department", "Empties into the Gulf of Gonâve"]
    }
  },
  {
    id: "ht-foret-des-pins-reserve-nature-v2",
    type: "forest",
    parent: "HT-SE",
    coords: [-71.98, 18.35],
    name: { de: "Forêt des Pins Reservat", hu: "Forêt des Pins Rezervátum", ro: "Rezervația Forêt des Pins", en: "Forêt des Pins Reserve" },
    description: {
      de: "Ein wichtiges Kiefernwaldreservat in der Chaîne de la Selle, entscheidend für die Wasserversorgung und Biodiversität.",
      hu: "Fontos fenyőerdő-rezervátum a Chaîne de la Selle hegységben, amely létfontosságú a vízellátás és a biodiverzitás szempontjából.",
      ro: "O rezervație importantă de păduri de pini în lanțul muntos La Selle, crucială pentru alimentarea cu apă și biodiversitate.",
      en: "An important pine forest reserve in the Chaîne de la Selle, crucial for water supply and biodiversity."
    },
    facts: {
      de: ["Einer der letzten großen Kiefernwälder", "Kühles Hochlandklima", "Lebensraum für endemische Vögel"],
      hu: ["Az egyik utolsó nagy fenyőerdő", "Hűvös hegyvidéki éghajlat", "Élőhely az endemikus madarak számára"],
      ro: ["Una dintre ultimele păduri mari de pini", "Climat montan răcoros", "Habitat pentru păsări endemice"],
      en: ["One of the last large pine forests", "Cool highland climate", "Habitat for endemic birds"]
    }
  },
  {
    id: "ht-les-cayemites-nature-v2",
    type: "island",
    parent: "HT-GA",
    coords: [-73.75, 18.6],
    name: { de: "Les Cayemites", hu: "Les Cayemites-szigetek", ro: "Insulele Cayemites", en: "Cayemites Islands" },
    description: {
      de: "Eine Gruppe von zwei Inseln im Golf von Gonâve vor der Küste von Pestel.",
      hu: "Két szigetből álló csoport a Gonâve-öbölben, Pestel partjainál.",
      ro: "Un grup de două insule în Golful Gonâve, în largul coastei Pestel.",
      en: "A pair of islands in the Gulf of Gonâve off the coast of Pestel."
    },
    facts: {
      de: ["Bestehen aus Grande Cayemite und Petite Cayemite", "Bekannt für Fischerei", "Ländliche, isolierte Gemeinschaften"],
      hu: ["Grande Cayemite és Petite Cayemite szigetekből áll", "Híres a halászatról", "Vidéki, elszigetelt közösségek"],
      ro: ["Constau din Grande Cayemite și Petite Cayemite", "Cunoscute pentru pescuit", "Comunități rurale, izolate"],
      en: ["Comprised of Grande Cayemite and Petite Cayemite", "Known for fishing", "Rural, isolated communities"]
    }
  },
  {
    id: "ht-trou-caiman-nature-v2",
    type: "lake",
    parent: "HT-OU",
    coords: [-72.155, 18.66],
    name: { de: "Trou Caïman", hu: "Trou Caïman", ro: "Trou Caïman", en: "Trou Caïman" },
    description: {
      de: "Ein Süßwassersee in der Plaine du Cul-de-Sac, ein wichtiges Feuchtgebiet.",
      hu: "Édesvízi tó a Plaine du Cul-de-Sac síkságon, fontos vizes élőhely.",
      ro: "Un lac cu apă dulce în Câmpia Cul-de-Sac, o zonă umedă importantă.",
      en: "A freshwater lake in the Plaine du Cul-de-Sac, an important wetland."
    },
    facts: {
      de: ["Wichtiges Vogelschutzgebiet", "Süßwasser-Ökosystem", "In der Nähe des Étang Saumâtre gelegen"],
      hu: ["Fontos madárvédelmi terület", "Édesvízi ökoszisztéma", "Az Étang Saumâtre közelében található"],
      ro: ["Sanctuar important pentru păsări", "Ecosistem de apă dulce", "Situat lângă Étang Saumâtre"],
      en: ["Important bird sanctuary", "Freshwater ecosystem", "Located near Étang Saumâtre"]
    }
  },
  {
    id: "ht-canal-de-saint-marc-nature-v2",
    type: "sea",
    parent: "HT-AR",
    coords: [-72.8, 19.0],
    name: { de: "Canal de Saint-Marc", hu: "Saint-Marc-csatorna", ro: "Canalul Saint-Marc", en: "Canal de Saint-Marc" },
    description: {
      de: "Eine Meerenge, die die Insel Gonâve vom haitianischen Festland trennt.",
      hu: "Tengerszoros, amely elválasztja a Gonâve-szigetet Haiti szárazföldjétől.",
      ro: "O strâmtoare care separă Insula Gonâve de continentul haitian.",
      en: "A strait that separates the island of Gonâve from the Haitian mainland."
    },
    facts: {
      de: ["Wichtige Schifffahrtsroute", "Verbindet die Bucht von Port-au-Prince mit dem offenen Meer"],
      hu: ["Fontos hajózási útvonal", "Összeköti a Port-au-Prince-i öblöt a nyílt tengerrel"],
      ro: ["Ruta de navigație importantă", "Leagă Golful Port-au-Prince de largul mării"],
      en: ["Important shipping lane", "Connects the Bay of Port-au-Prince to the open sea"]
    }
  },
  {
    id: "ht-canal-du-sud-nature-v2",
    type: "sea",
    parent: "HT-SD",
    coords: [-73.5, 18.3],
    name: { de: "Canal du Sud (Haiti)", hu: "Déli-csatorna (Haiti)", ro: "Canalul de Sud (Haiti)", en: "South Canal (Haiti)" },
    description: {
      de: "Die Meerespassage, die die Tiburon-Halbinsel von der Insel Gonâve trennt.",
      hu: "A tengeri átjáró, amely elválasztja a Tiburon-félszigetet a Gonâve-szigettől.",
      ro: "Pasajul maritim care separă Peninsula Tiburon de Insula Gonâve.",
      en: "The sea passage separating the Tiburon Peninsula from Gonâve Island."
    },
    facts: {
      de: ["Wichtige Wasserstraße im Golf von Gonâve", "Führt zu den Häfen der Südküste"],
      hu: ["Fontos vízi út a Gonâve-öbölben", "A déli part kikötőihez vezet"],
      ro: ["Cale navigabilă importantă în Golful Gonâve", "Duce la porturile de pe coasta de sud"],
      en: ["Major waterway in the Gulf of Gonâve", "Leads to south coast ports"]
    }
  },
  {
    id: "ht-montagnes-noires-nature-v2",
    type: "mountain",
    parent: "HT-AR",
    coords: [-72.3, 19.3],
    name: { de: "Montagnes Noires", hu: "Fekete-hegység", ro: "Munții Negri", en: "Black Mountains" },
    description: {
      de: "Eine Gebirgskette im Zentrum Haitis, nördlich des Artibonite-Flusstals.",
      hu: "Hegylánc Haiti középső részén, az Artibonite folyó völgyétől északra.",
      ro: "Un lanț muntos în centrul Haitiului, la nord de valea râului Artibonite.",
      en: "A mountain range in central Haiti, north of the Artibonite River valley."
    },
    facts: {
      de: ["Parallele zur Chaîne des Matheux", "Wichtige Wasserscheide", "Landwirtschaft an den Hängen"],
      hu: ["Párhuzamos a Chaîne des Matheux hegységgel", "Fontos vízválasztó", "Mezőgazdaság a lejtőkön"],
      ro: ["Paralel cu Chaîne des Matheux", "Bazin hidrografic important", "Agricultură pe versanți"],
      en: ["Runs parallel to the Chaîne des Matheux", "Important watershed", "Farming on its slopes"]
    }
  },
  {
    id: "ht-riviere-momance-nature-v2",
    type: "river",
    parent: "HT-OU",
    coords: [-72.58, 18.52],
    name: { de: "Rivière Momance", hu: "Momance folyó", ro: "Râul Momance", en: "Momance River" },
    description: {
      de: "Ein Fluss in der Nähe von Léogâne, dessen Überschwemmungen eine Gefahr darstellen.",
      hu: "Folyó Léogâne közelében, amelynek áradásai veszélyt jelentenek.",
      ro: "Un râu lângă Léogâne, ale cărui inundații reprezintă o amenințare.",
      en: "A river near Léogâne, whose floods pose a threat."
    },
    facts: {
      de: ["Entspringt im Massif de la Selle", "Bekannt für zerstörerische Sturzfluten", "Mündet in die Bucht von Port-au-Prince"],
      hu: ["A Massif de la Selle hegységben ered", "Híres a pusztító villámárvizeiről", "A Port-au-Prince-i öbölbe torkollik"],
      ro: ["Izvorăște din Masivul de la Selle", "Cunoscut pentru viituri devastatoare", "Se varsă în Golful Port-au-Prince"],
      en: ["Originates in the Massif de la Selle", "Known for destructive flash floods", "Empties into the Bay of Port-au-Prince"]
    }
  },
  {
    id: "ht-riviere-des-trois-rivieres-nature-v2",
    type: "river",
    parent: "HT-ND",
    coords: [-72.82, 19.92],
    name: { de: "Trois Rivières", hu: "Trois Rivières folyó", ro: "Râul Trois Rivières", en: "Trois Rivières River" },
    description: {
      de: "Der drittlängste Fluss Haitis, der bei Port-de-Paix ins Meer mündet.",
      hu: "Haiti harmadik leghosszabb folyója, amely Port-de-Paix-nál ömlik a tengerbe.",
      ro: "Al treilea cel mai lung râu din Haiti, care se varsă în mare la Port-de-Paix.",
      en: "The third longest river in Haiti, emptying into the sea at Port-de-Paix."
    },
    facts: {
      de: ["Länge ca. 150 km", "Wichtiger Fluss im Nordwesten", "Wasserquelle für die Region"],
      hu: ["Hossza kb. 150 km", "Fontos folyó északnyugaton", "Vízforrás a régió számára"],
      ro: ["Lungime aprox. 150 km", "Râu important în nord-vest", "Sursă de apă pentru regiune"],
      en: ["Length approx. 150 km", "Major river in the northwest", "Source of water for the region"]
    }
  },
  {
    id: "ht-grande-cayemite-island-nature-v2",
    type: "island",
    parent: "HT-GA",
    coords: [-73.75, 18.63],
    name: { de: "Grande Cayemite", hu: "Grande Cayemite", ro: "Grande Cayemite", en: "Grande Cayemite" },
    description: {
      de: "Die größere der beiden Cayemites-Inseln vor der Nordküste der Tiburon-Halbinsel.",
      hu: "A két Cayemites-sziget közül a nagyobbik, a Tiburon-félsziget északi partjainál.",
      ro: "Cea mai mare dintre cele două insule Cayemites, în largul coastei de nord a peninsulei Tiburon.",
      en: "The larger of the two Cayemites islands, off the northern coast of the Tiburon Peninsula."
    },
    facts: {
      de: ["Hauptinsel der Cayemites-Gruppe", "Wird von Fischern bewohnt", "Hügeliges und trockenes Gelände"],
      hu: ["A Cayemites-szigetcsoport fő szigete", "Halászok lakják", "Dombos és száraz terep"],
      ro: ["Insula principală a grupului Cayemites", "Locuită de pescari", "Teren deluros și arid"],
      en: ["Main island of the Cayemites group", "Inhabited by fishing communities", "Hilly and arid terrain"]
    }
  },
  {
    id: "ht-cap-du-mole-saint-nicolas-nature-v2",
    type: "sea",
    parent: "HT-ND",
    coords: [-73.42, 19.82],
    name: { de: "Kap Môle Saint-Nicolas", hu: "Môle Saint-Nicolas-fok", ro: "Capul Môle Saint-Nicolas", en: "Cape Môle Saint-Nicolas" },
    description: {
      de: "Das Kap an der nordwestlichen Spitze Haitis, das die Windward-Passage überblickt.",
      hu: "A fok Haiti északnyugati csücskén, amely a Windward-átjáróra néz.",
      ro: "Capul de la extremitatea de nord-vest a Haitiului, cu vedere la Pasajul Windward.",
      en: "The cape at the northwestern tip of Haiti, overlooking the Windward Passage."
    },
    facts: {
      de: ["Strategischer Punkt an der Windward-Passage", "Historische Bedeutung", "Leuchtturmstandort"],
      hu: ["Stratégiai pont a Windward-átjárónál", "Történelmi jelentőségű", "Világítótorony helyszíne"],
      ro: ["Punct strategic pe Pasajul Windward", "Importanță istorică", "Locație de far"],
      en: ["Strategic point on the Windward Passage", "Historical significance", "Lighthouse location"]
    }
  },
  {
    id: "ht-parc-national-des-trois-baies-nature-v2",
    type: "sea",
    parent: "HT-NE",
    coords: [-71.9, 19.7],
    name: { de: "Nationalpark Trois Baies", hu: "Trois Baies Nemzeti Park", ro: "Parcul Național Trois Baies", en: "Trois Baies National Park" },
    description: {
      de: "Ein Meeresschutzgebiet an der Nordostküste, das Mangroven, Korallenriffe und Seegraswiesen umfasst.",
      hu: "Tengeri védett terület az északkeleti parton, amely magában foglalja a mangroveerdőket, korallzátonyokat és tengerifű-mezonket.",
      ro: "O arie marină protejată pe coasta de nord-est, care cuprinde mangrove, recife de corali și pajiști de iarbă de mare.",
      en: "A marine protected area on the northeast coast, comprising mangroves, coral reefs, and seagrass beds."
    },
    facts: {
      de: ["Größtes Meeresschutzgebiet Haitis", "Wichtiger Lebensraum für Meerestiere", "Schutz für Korallenriffe"],
      hu: ["Haiti legnagyobb tengeri védett területe", "Fontos tengeri élőhely", "Korallzátonyok védelme"],
      ro: ["Cea mai mare arie marină protejată din Haiti", "Habitat important pentru viața marină", "Protecția recifelor de corali"],
      en: ["Largest marine protected area in Haiti", "Vital habitat for marine life", "Protects coral reefs"]
    }
  },
  {
    id: "ht-gros-morne-mountain-nature-v2",
    type: "mountain",
    parent: "HT-AR",
    coords: [-72.67, 19.67],
    name: { de: "Gros-Morne (Berg)", hu: "Gros-Morne (hegy)", ro: "Muntele Gros-Morne", en: "Gros-Morne Mountain" },
    description: {
      de: "Ein Bergmassiv in der Nähe der Stadt Gros-Morne, wichtig für die lokale Landwirtschaft.",
      hu: "Hegymasszívum Gros-Morne városa közelében, fontos a helyi mezőgazdaság számára.",
      ro: "Un masiv muntos lângă orașul Gros-Morne, important pentru agricultura locală.",
      en: "A mountain massif near the city of Gros-Morne, important for local agriculture."
    },
    facts: {
      de: ["Quelle für mehrere kleine Flüsse", "Kaffeeanbau an den Hängen", "Wichtige Wasserscheide"],
      hu: ["Több kis folyó forrása", "Kávétermesztés a lejtőkön", "Fontos vízválasztó"],
      ro: ["Izvor pentru mai multe râuri mici", "Cultivarea cafelei pe versanți", "Bazin hidrografic important"],
      en: ["Source of several small rivers", "Coffee grown on its slopes", "Important watershed"]
    }
  },
  {
    id: "ht-baie-de-lacul-nature-v2",
    type: "sea",
    parent: "HT-NE",
    coords: [-72.0, 19.75],
    name: { de: "Bucht von Caracol", hu: "Caracol-öböl", ro: "Golful Caracol", en: "Caracol Bay" },
    description: {
      de: "Eine geschützte Bucht an der Nordostküste, Teil des Nationalparks Trois Baies.",
      hu: "Védett öböl az északkeleti parton, a Trois Baies Nemzeti Park része.",
      ro: "Un golf protejat pe coasta de nord-est, parte a Parcului Național Trois Baies.",
      en: "A sheltered bay on the northeast coast, part of the Trois Baies National Park."
    },
    facts: {
      de: ["Wichtige Mangrovenwälder", "Ruhiges Wasser, ideal für Fischerei", "Hohe marine Biodiversität"],
      hu: ["Fontos mangroveerdők", "Nyugodt vizek, ideális halászathoz", "Magas tengeri biodiverzitás"],
      ro: ["Păduri importante de mangrove", "Ape calme, ideale pentru pescuit", "Biodiversitate marină ridicată"],
      en: ["Important mangrove forests", "Calm waters ideal for fishing", "High marine biodiversity"]
    }
  },
  {
    id: "ht-foret-de-bouche-seche-nature-v2",
    type: "forest",
    parent: "HT-GA",
    coords: [-74.2, 18.4],
    name: { de: "Forêt de Bouche Sèche", hu: "Bouche Sèche erdő", ro: "Pădurea Bouche Sèche", en: "Bouche Sèche Forest" },
    description: {
      de: "Ein Überrest des Trockenwaldes im Massif de la Hotte.",
      hu: "A Massif de la Hotte száraz erdőjének maradványa.",
      ro: "O rămășiță a pădurii uscate din Masivul de la Hotte.",
      en: "A remnant of dry forest in the Massif de la Hotte."
    },
    facts: {
      de: ["Seltener Trockenwald-Typ", "Teil eines Biodiversitäts-Hotspots", "Bedroht durch Abholzung"],
      hu: ["Ritka száraz erdő típus", "Egy biodiverzitási hotspot része", "Az erdőirtás veszélyezteti"],
      ro: ["Tip rar de pădure uscată", "Parte a unui hotspot de biodiversitate", "Amenințată de despăduriri"],
      en: ["Rare dry forest type", "Part of a biodiversity hotspot", "Threatened by deforestation"]
    }
  },
  {
    id: "ht-morne-cabaio-nature-v2",
    type: "mountain",
    parent: "HT-OU",
    coords: [-72.7, 18.4],
    name: { de: "Morne Cabaïo", hu: "Morne Cabaïo", ro: "Muntele Cabaïo", en: "Morne Cabaïo" },
    description: {
      de: "Ein Berg in der Nähe von Léogâne, der das umliegende Tal überragt.",
      hu: "Hegy Léogâne közelében, amely a környező völgy fölé emelkedik.",
      ro: "Un munte lângă Léogâne, care domină valea înconjurătoare.",
      en: "A mountain near Léogâne that overlooks the surrounding valley."
    },
    facts: {
      de: ["Bietet Panoramablick auf die Léogâne-Ebene", "Wanderziel", "Wichtige lokale Wasserscheide"],
      hu: ["Panorámás kilátást nyújt a Léogâne-síkságra", "Túrázási célpont", "Fontos helyi vízválasztó"],
      ro: ["Oferă vederi panoramice asupra Câmpiei Léogâne", "Destinație pentru drumeții", "Bazin hidrografic local important"],
      en: ["Offers panoramic views of the Léogâne plain", "Hiking destination", "Important local watershed"]
    }
  },
  {
    id: "ht-riviere-de-bainet-nature-v2",
    type: "river",
    parent: "HT-SE",
    coords: [-72.76, 18.2],
    name: { de: "Rivière de Bainet", hu: "Bainet folyó", ro: "Râul Bainet", en: "Bainet River" },
    description: {
      de: "Ein Fluss an der Südküste, der bei der Stadt Bainet ins Karibische Meer mündet.",
      hu: "Folyó a déli parton, amely Bainet városánál ömlik a Karib-tengerbe.",
      ro: "Un râu pe coasta de sud, care se varsă în Marea Caraibelor lângă orașul Bainet.",
      en: "A river on the south coast that empties into the Caribbean Sea near the town of Bainet."
    },
    facts: {
      de: ["Wichtig für die lokale Wasserversorgung", "Schafft eine fruchtbare Ebene in Küstennähe"],
      hu: ["Fontos a helyi vízellátás szempontjából", "Termékeny síkságot hoz létre a part közelében"],
      ro: ["Important pentru alimentarea locală cu apă", "Creează o câmpie fertilă lângă coastă"],
      en: ["Important for the local water supply", "Creates a fertile plain near the coast"]
    }
  },
  {
    id: "ht-pointe-de-l-abacou-nature-v2",
    type: "sea",
    parent: "HT-GA",
    coords: [-74.45, 18.6],
    name: { de: "Pointe de l'Abacou", hu: "Abacou-fok", ro: "Punctul Abacou", en: "Abacou Point" },
    description: {
      de: "Ein markantes Kap an der äußersten Westspitze der Tiburon-Halbinsel.",
      hu: "Jellegzetes fok a Tiburon-félsziget legnyugatibb csücskén.",
      ro: "Un cap proeminent la extremitatea de vest a Peninsulei Tiburon.",
      en: "A prominent cape on the extreme western tip of the Tiburon Peninsula."
    },
    facts: {
      de: ["Westlichster Punkt des haitianischen Festlandes", "Wichtiger Navigationspunkt für Schiffe", "Unberührte Küstenlandschaft"],
      hu: ["Haiti szárazföldi részének legnyugatibb pontja", "Fontos navigációs pont a hajók számára", "Érintetlen partvidék"],
      ro: ["Cel mai vestic punct al continentului haitian", "Punct de navigație important pentru nave", "Peisaj de coastă neatins"],
      en: ["Westernmost point of mainland Haiti", "Important navigational point for ships", "Pristine coastal scenery"]
    }
  },
  {
    id: "ht-riviere-de-la-cosse-nature-v2",
    type: "river",
    parent: "HT-SE",
    coords: [-72.53, 18.25],
    name: { de: "Rivière de la Cosse", hu: "La Cosse folyó", ro: "Râul de la Cosse", en: "Cosse River" },
    description: {
      de: "Der Fluss, der durch das Jacmel-Tal fließt und für seine Wasserfälle bekannt ist.",
      hu: "A Jacmel-völgyön átfolyó folyó, amely vízeséseiről ismert.",
      ro: "Râul care traversează Valea Jacmel și este cunoscut pentru cascadele sale.",
      en: "The river that flows through the Jacmel Valley, known for its waterfalls."
    },
    facts: {
      de: ["Speist die Becken von Bassin-Bleu", "Mündet bei Jacmel ins Meer", "Wichtig für den lokalen Tourismus"],
      hu: ["A Bassin-Bleu medencéit táplálja", "Jacmelnél ömlik a tengerbe", "Fontos a helyi turizmus számára"],
      ro: ["Alimentează bazinele de la Bassin-Bleu", "Se varsă în mare lângă Jacmel", "Important pentru turismul local"],
      en: ["Feeds the basins of Bassin-Bleu", "Empties into the sea at Jacmel", "Important for local tourism"]
    }
  },
  {
    id: "ht-morne-a-cabrit-nature-v2",
    type: "mountain",
    parent: "HT-OU",
    coords: [-72.2, 18.65],
    name: { de: "Morne à Cabrit", hu: "Morne à Cabrit", ro: "Muntele Cabrit", en: "Morne à Cabrit" },
    description: {
      de: "Ein Berg nordöstlich von Port-au-Prince, der die Plaine du Cul-de-Sac überblickt.",
      hu: "Hegy Port-au-Prince-től északkeletre, amely a Plaine du Cul-de-Sac síkságra néz.",
      ro: "Un munte la nord-est de Port-au-Prince, cu vedere la Câmpia Cul-de-Sac.",
      en: "A mountain northeast of Port-au-Prince overlooking the Plaine du Cul-de-Sac."
    },
    facts: {
      de: ["Strategische Lage nahe der Hauptstadt", "Wichtiger Standort für Telekommunikationsantennen"],
      hu: ["Stratégiai elhelyezkedés a főváros közelében", "Fontos telekommunikációs antennák helyszíne"],
      ro: ["Poziție strategică lângă capitală", "Locație importantă pentru antene de telecomunicații"],
      en: ["Strategic location near the capital", "Important site for telecommunication antennas"]
    }
  },
  {
    id: "ht-riviere-du-limbe-nature-v2",
    type: "river",
    parent: "HT-NO",
    coords: [-72.37, 19.78],
    name: { de: "Rivière du Limbé", hu: "Limbé folyó", ro: "Râul Limbé", en: "Limbé River" },
    description: {
      de: "Ein wichtiger Fluss im Norden Haitis, der bei Bas-Limbé ins Meer mündet.",
      hu: "Fontos folyó Haiti északi részén, amely Bas-Limbé-nél ömlik a tengerbe.",
      ro: "Un râu important în nordul Haitiului, care se varsă în mare la Bas-Limbé.",
      en: "An important river in northern Haiti that flows into the sea at Bas-Limbé."
    },
    facts: {
      de: ["Wichtig für die Landwirtschaft in der Limbé-Ebene", "Neigt zu Überschwemmungen"],
      hu: ["Fontos a mezőgazdaság számára a Limbé-síkságon", "Hajlamos az áradásokra"],
      ro: ["Important pentru agricultură în Câmpia Limbé", "Predispus la inundații"],
      en: ["Important for agriculture in the Limbé Plain", "Prone to flooding"]
    }
  },
  {
    id: "ht-riviere-cavaillon-nature-v2",
    type: "river",
    parent: "HT-SD",
    coords: [-73.66, 18.26],
    name: { de: "Rivière de Cavaillon", hu: "Cavaillon folyó", ro: "Râul Cavaillon", en: "Cavaillon River" },
    description: {
        de: "Ein Fluss im Süden Haitis, bekannt für den Wasserfall Saut-Mathurine.",
        hu: "Folyó Haiti déli részén, amely a Saut-Mathurine vízesésről ismert.",
        ro: "Un râu în sudul Haitiului, cunoscut pentru cascada Saut-Mathurine.",
        en: "A river in the south of Haiti, known for the Saut-Mathurine waterfall."
    },
    facts: {
        de: ["Beherbergt den größten Wasserfall Haitis", "Wichtige Wasserquelle für die Region Les Cayes"],
        hu: ["Itt található Haiti legnagyobb vízesése", "Fontos vízforrás Les Cayes régió számára"],
        ro: ["Găzduiește cea mai mare cascadă din Haiti", "Sursă importantă de apă pentru regiunea Les Cayes"],
        en: ["Hosts the largest waterfall in Haiti", "Important water source for the Les Cayes region"]
    }
  }
];
