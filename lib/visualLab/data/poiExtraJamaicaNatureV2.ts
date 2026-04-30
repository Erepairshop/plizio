import type { POI } from "./poi";

export const poiExtraJamaicaNatureV2: POI[] = [
  {
    id: "great-river-bay-nature-v2",
    type: "sea",
    parent: "JM-08",
    coords: [-78.05, 18.47],
    name: { de: "Great River Bucht", hu: "Great River-öböl", ro: "Golful Great River", en: "Great River Bay" },
    description: { de: "Eine malerische Bucht, in die der Great River mündet.", hu: "Festői öböl, ahol a Great River a tengerbe ömlik.", ro: "Un golf pitoresc unde se varsă râul Great.", en: "A picturesque bay where the Great River meets the sea." },
    facts: {
      de: ["Mündung des Great River", "Grenze zwischen St. James und Hanover", "Beliebt für Wassersport", "Schöne Küstenlandschaft"],
      hu: ["A Great River torkolata", "St. James és Hanover határa", "Népszerű vízisport-helyszín", "Gyönyörű partvidék"],
      ro: ["Vărsarea râului Great", "Granița dintre St. James și Hanover", "Popular pentru sporturi nautice", "Peisaj de coastă frumos"],
      en: ["Mouth of the Great River", "Border of St. James and Hanover", "Popular for water sports", "Beautiful coastal scenery"]
    }
  },
  {
    id: "wag-water-river-nature-v2",
    type: "river",
    parent: "JM-05",
    coords: [-76.76, 18.27],
    name: { de: "Wag Water River", hu: "Wag Water-folyó", ro: "Râul Wag Water", en: "Wag Water River" },
    description: { de: "Ein bedeutender Fluss, der durch St. Mary fließt und bei Annotto Bay ins Meer mündet.", hu: "Jelentős folyó, amely St. Mary-n folyik keresztül és Annotto Bay-nél ömlik a tengerbe.", ro: "Un râu important care traversează St. Mary și se varsă în mare la Annotto Bay.", en: "A major river flowing through St. Mary and emptying into the sea at Annotto Bay." },
    facts: {
      de: ["Fließt durch die Blue Mountains", "Wichtige Wasserquelle für die Region", "Beliebt für Rafting", "Mündet in die Karibik"],
      hu: ["A Blue Mountains-en keresztül folyik", "Fontos vízforrás a régió számára", "Népszerű rafting hely", "A Karib-tengerbe ömlik"],
      ro: ["Curge prin Munții Albaștri", "Sursă importantă de apă pentru regiune", "Popular pentru rafting", "Se varsă în Marea Caraibelor"],
      en: ["Flows from the Blue Mountains", "Important water source for the region", "Popular for rafting", "Empties into the Caribbean Sea"]
    }
  },
  {
    id: "yallahs-ponds-nature-v2",
    type: "lake",
    parent: "JM-01",
    coords: [-76.58, 17.86],
    name: { de: "Yallahs Teiche", hu: "Yallahs-tavak", ro: "Iazurile Yallahs", en: "Yallahs Ponds" },
    description: { de: "Eine Reihe von Salzseen an der Südküste, die ein wichtiges Feuchtgebiet bilden.", hu: "Sós tavak sorozata a déli parton, amelyek fontos vizes élőhelyet alkotnak.", ro: "O serie de lacuri sărate pe coasta de sud, formând o zonă umedă importantă.", en: "A series of salt ponds on the south coast, forming an important wetland." },
    facts: {
      de: ["Wichtiges Vogelbeobachtungsgebiet", "Salzgewinnung in der Vergangenheit", "Einzigartiges Ökosystem", "Durch eine Sandbank vom Meer getrennt"],
      hu: ["Fontos madármegfigyelő hely", "A múltban sókitermelés folyt itt", "Egyedülálló ökoszisztéma", "Homokpad választja el a tengertől"],
      ro: ["Zonă importantă pentru observarea păsărilor", "Extracția sării în trecut", "Ecosistem unic", "Separat de mare printr-un banc de nisip"],
      en: ["Important birdwatching area", "Salt extraction in the past", "Unique ecosystem", "Separated from the sea by a sandbar"]
    }
  },
  {
    id: "bull-head-mountain-nature-v2",
    type: "mountain",
    parent: "JM-09",
    coords: [-77.38, 18.17],
    name: { de: "Bull Head Mountain", hu: "Bull Head-hegy", ro: "Muntele Bull Head", en: "Bull Head Mountain" },
    description: { de: "Der geografische Mittelpunkt Jamaikas, ein Berg in Clarendon.", hu: "Jamaica földrajzi középpontja, egy hegy Clarendonban.", ro: "Centrul geografic al Jamaicăi, un munte în Clarendon.", en: "The geographical center of Jamaica, a mountain in Clarendon." },
    facts: {
      de: ["Geografischer Mittelpunkt der Insel", "Höhe von ca. 853 Metern", "Waldreservat", "Wanderwege vorhanden"],
      hu: ["A sziget földrajzi középpontja", "Kb. 853 méter magas", "Erdőrezervátum", "Túrautak állnak rendelkezésre"],
      ro: ["Centrul geografic al insulei", "Altitudine de aprox. 853 de metri", "Rezervație forestieră", "Trasee de drumeție disponibile"],
      en: ["Geographical center of the island", "Elevation of approx. 853 meters", "Forest reserve", "Hiking trails available"]
    }
  },
  {
    id: "great-morass-nature-v2",
    type: "forest",
    parent: "JM-03",
    coords: [-78.28, 18.25],
    name: { de: "Great Morass", hu: "Great Morass", ro: "Marea Mlaștină", en: "Great Morass" },
    description: { de: "Ein großes Feuchtgebiet und Sumpfland in Westmoreland, nahe Negril.", hu: "Nagy kiterjedésű vizes élőhely és mocsárvidék Westmorelandben, Negril közelében.", ro: "O mare zonă umedă și mlaștină în Westmoreland, lângă Negril.", en: "A large wetland and swamp area in Westmoreland, near Negril." },
    facts: {
      de: ["Größtes Feuchtgebiet Jamaikas", "Wichtiger Lebensraum für Vögel", "Filtert Wasser für die Küstenregion", "Torfanbau"],
      hu: ["Jamaica legnagyobb vizes élőhelye", "Fontos madár-élőhely", "Szűri a vizet a part menti régió számára", "Tőzegtermesztés"],
      ro: ["Cea mai mare zonă umedă din Jamaica", "Habitat important pentru păsări", "Filtrează apa pentru regiunea de coastă", "Cultivarea turbei"],
      en: ["Jamaica's largest wetland", "Important habitat for birds", "Filters water for the coastal region", "Peat farming"]
    }
  },
  {
    id: "rio-cobre-river-nature-v2",
    type: "river",
    parent: "JM-13",
    coords: [-76.98, 18.10],
    name: { de: "Rio Cobre", hu: "Rio Cobre-folyó", ro: "Râul Rio Cobre", en: "Rio Cobre River" },
    description: { de: "Ein Fluss, der durch die berühmte Bog Walk-Schlucht fließt.", hu: "Egy folyó, amely a híres Bog Walk-szurdokon folyik keresztül.", ro: "Un râu care curge prin faimosul defileu Bog Walk.", en: "A river that flows through the famous Bog Walk Gorge." },
    facts: {
      de: ["Fließt durch die Bog Walk Gorge", "Wichtige Wasserquelle für Spanish Town", "Beliebt zum Kajakfahren", "Kann bei starkem Regen gefährlich werden"],
      hu: ["A Bog Walk-szurdokon keresztül folyik", "Fontos vízforrás Spanish Town számára", "Népszerű kajakozó hely", "Erős esőzés esetén veszélyessé válhat"],
      ro: ["Curge prin defileul Bog Walk", "Sursă importantă de apă pentru Spanish Town", "Popular pentru caiac", "Poate deveni periculos în caz de ploi abundente"],
      en: ["Flows through the Bog Walk Gorge", "Important water source for Spanish Town", "Popular for kayaking", "Can be dangerous during heavy rains"]
    }
  },
  {
    id: "long-bay-nature-v2",
    type: "sea",
    parent: "JM-04",
    coords: [-76.35, 18.15],
    name: { de: "Long Bay", hu: "Long Bay", ro: "Golful Long", en: "Long Bay" },
    description: { de: "Ein langer, malerischer Strand in Portland, bekannt für seine entspannte Atmosphäre.", hu: "Hosszú, festői strand Portlandben, nyugodt légköréről ismert.", ro: "O plajă lungă și pitorească în Portland, cunoscută pentru atmosfera sa relaxată.", en: "A long, picturesque beach in Portland, known for its relaxed atmosphere." },
    facts: {
      de: ["Einer der längsten Strände Jamaikas", "Rosafarbener Sand an einigen Stellen", "Beliebt bei Rucksacktouristen", "Starke Wellen zum Surfen"],
      hu: ["Jamaica egyik leghosszabb strandja", "Néhány helyen rózsaszín homok", "Népszerű a hátizsákos turisták körében", "Erős hullámok szörfözéshez"],
      ro: ["Una dintre cele mai lungi plaje din Jamaica", "Nisip rozaliu în unele locuri", "Popular printre backpackeri", "Valuri puternice pentru surfing"],
      en: ["One of Jamaica's longest beaches", "Pink-hued sand in some areas", "Popular with backpackers", "Strong waves for surfing"]
    }
  },
  {
    id: "milk-river-nature-v2",
    type: "river",
    parent: "JM-09",
    coords: [-77.38, 17.83],
    name: { de: "Milk River", hu: "Milk River", ro: "Râul Milk", en: "Milk River" },
    description: { de: "Ein Fluss, der für sein radioaktives Mineralbad bekannt ist.", hu: "Egy folyó, amely radioaktív ásványfürdőjéről ismert.", ro: "Un râu cunoscut pentru băile sale minerale radioactive.", en: "A river known for its radioactive mineral bath." },
    facts: {
      de: ["Heilende Mineralquellen", "Eines der radioaktivsten Bäder der Welt", "Staatlich geführtes Kurbad", "Fließt ins Karibische Meer"],
      hu: ["Gyógyító ásványforrások", "A világ egyik legradioaktívabb fürdője", "Állami gyógyfürdő", "A Karib-tengerbe ömlik"],
      ro: ["Izvoare minerale curative", "Una dintre cele mai radioactive băi din lume", "Stațiune balneară administrată de stat", "Se varsă în Marea Caraibelor"],
      en: ["Healing mineral springs", "One of the most radioactive baths in the world", "Government-run spa", "Flows into the Caribbean Sea"]
    }
  },
  {
    id: "dolphin-head-mountains-nature-v2",
    type: "mountain",
    parent: "JM-08",
    coords: [-78.15, 18.35],
    name: { de: "Dolphin Head Mountains", hu: "Dolphin Head-hegység", ro: "Munții Dolphin Head", en: "Dolphin Head Mountains" },
    description: { de: "Eine markante Bergkette in Hanover mit einer unverwechselbaren Form.", hu: "Jellegzetes hegylánc Hanoverben, összetéveszthetetlen formával.", ro: "Un lanț muntos distinctiv în Hanover, cu o formă inconfundabilă.", en: "A distinctive mountain range in Hanover with a unique shape." },
    facts: {
      de: ["Sieht aus wie ein Delfinkopf", "Wichtiger Orientierungspunkt für Seeleute", "Geschütztes Waldreservat", "Endemische Pflanzenarten"],
      hu: ["Úgy néz ki, mint egy delfinfej", "Fontos tájékozódási pont a tengerészek számára", "Védett erdőrezervátum", "Endemikus növényfajok"],
      ro: ["Arată ca un cap de delfin", "Reper important pentru marinari", "Rezervație forestieră protejată", "Specii de plante endemice"],
      en: ["Resembles a dolphin's head", "Important landmark for sailors", "Protected forest reserve", "Endemic plant species"]
    }
  },
  {
    id: "black-river-lower-morass-nature-v2",
    type: "forest",
    parent: "JM-02",
    coords: [-77.8, 18.05],
    name: { de: "Black River Lower Morass", hu: "Black River alsó mocsárvidék", ro: "Mlaștina inferioară a râului Black", en: "Black River Lower Morass" },
    description: { de: "Ein riesiges Feuchtgebiet, das den Unterlauf des Black River umgibt.", hu: "Hatalmas vizes élőhely, amely a Black River alsó folyását övezi.", ro: "O zonă umedă vastă care înconjoară cursul inferior al râului Black.", en: "A vast wetland area surrounding the lower reaches of the Black River." },
    facts: {
      de: ["Größtes Sumpfgebiet der Karibik", "Ramsar-Schutzgebiet", "Heimat des Amerikanischen Krokodils", "Reiche Vogelwelt"],
      hu: ["A Karib-térség legnagyobb mocsárvidéke", "Ramsari terület", "Az amerikai krokodil otthona", "Gazdag madárvilág"],
      ro: ["Cea mai mare mlaștină din Caraibe", "Situl Ramsar", "Habitatul crocodilului american", "Avifaună bogată"],
      en: ["Largest swamp in the Caribbean", "Ramsar protected site", "Home to the American Crocodile", "Rich birdlife"]
    }
  },
    {
    id: "navy-island-nature-v2",
    type: "island",
    parent: "JM-04",
    coords: [-76.45, 18.18],
    name: { de: "Navy Island", hu: "Navy-sziget", ro: "Insula Navy", en: "Navy Island" },
    description: { de: "Eine kleine Insel vor der Küste von Port Antonio, einst im Besitz von Errol Flynn.", hu: "Kis sziget Port Antonio partjainál, egykor Errol Flynn tulajdonában volt.", ro: "O mică insulă în largul coastei Port Antonio, deținută odinioară de Errol Flynn.", en: "A small island off the coast of Port Antonio, once owned by Errol Flynn." },
    facts: {
      de: ["Ehemaliger Besitz von Errol Flynn", "Blick auf Port Antonio", "Ruhige Strände", "Tropische Vegetation"],
      hu: ["Errol Flynn egykori tulajdona", "Kilátás Port Antonióra", "Csendes strandok", "Trópusi növényzet"],
      ro: ["Fosta proprietate a lui Errol Flynn", "Vedere spre Port Antonio", "Plaje liniștite", "Vegetație tropicală"],
      en: ["Formerly owned by Errol Flynn", "Views of Port Antonio", "Quiet beaches", "Tropical vegetation"]
    }
  },
  {
    id: "rio-minho-river-nature-v2",
    type: "river",
    parent: "JM-09",
    coords: [-77.25, 17.83],
    name: { de: "Rio Minho", hu: "Rio Minho-folyó", ro: "Râul Rio Minho", en: "Rio Minho River" },
    description: { de: "Der längste Fluss Jamaikas, der durch Clarendon fließt.", hu: "Jamaica leghosszabb folyója, amely Clarendonon keresztül folyik.", ro: "Cel mai lung râu din Jamaica, care curge prin Clarendon.", en: "The longest river in Jamaica, flowing through Clarendon." },
    facts: {
      de: ["Längster Fluss der Insel", "Wichtige Quelle für die Bewässerung", "Fließt durch May Pen", "Mündet bei Carlisle Bay ins Meer"],
      hu: ["A sziget leghosszabb folyója", "Fontos öntözési forrás", "May Penen keresztül folyik", "A Carlisle-öbölben ömlik a tengerbe"],
      ro: ["Cel mai lung râu de pe insulă", "Sursă importantă pentru irigații", "Curge prin May Pen", "Se varsă în mare la Golful Carlisle"],
      en: ["Longest river on the island", "Important source for irrigation", "Flows through May Pen", "Empties into the sea at Carlisle Bay"]
    }
  },
  {
    id: "portland-bight-nature-v2",
    type: "sea",
    parent: "JM-09",
    coords: [-77.15, 17.80],
    name: { de: "Portland Bight", hu: "Portland-öböl", ro: "Golful Portland", en: "Portland Bight" },
    description: { de: "Eine große Bucht an der Südküste, die ein geschütztes Feuchtgebiet umfasst.", hu: "Nagy öböl a déli parton, amely egy védett vizes élőhelyet foglal magában.", ro: "Un golf mare pe coasta de sud, care include o zonă umedă protejată.", en: "A large bay on the south coast that includes a protected wetland area." },
    facts: {
      de: ["Größte Bucht Jamaikas", "Ramsar-Schutzgebiet", "Wichtiger Lebensraum für Seekühe", "Umfasst mehrere kleine Inseln"],
      hu: ["Jamaica legnagyobb öble", "Ramsari terület", "Fontos élőhely a lamantinok számára", "Több kis szigetet is magában foglal"],
      ro: ["Cel mai mare golf din Jamaica", "Situl Ramsar", "Habitat important pentru lamantini", "Include mai multe insule mici"],
      en: ["Largest bay in Jamaica", "Ramsar protected site", "Important manatee habitat", "Includes several small islands"]
    }
  },
  {
    id: "santa-cruz-mountains-nature-v2",
    type: "mountain",
    parent: "JM-02",
    coords: [-77.75, 17.95],
    name: { de: "Santa Cruz Mountains", hu: "Santa Cruz-hegység", ro: "Munții Santa Cruz", en: "Santa Cruz Mountains" },
    description: { de: "Eine Bergkette in St. Elizabeth, bekannt für ihre roten Böden und Landwirtschaft.", hu: "Hegylánc St. Elizabeth-ben, vörös talajáról és mezőgazdaságáról ismert.", ro: "Un lanț muntos în St. Elizabeth, cunoscut pentru solurile sale roșii și agricultură.", en: "A mountain range in St. Elizabeth, known for its red soils and agriculture." },
    facts: {
      de: ["Bauxitreiche Böden", "Wichtige landwirtschaftliche Region", "Kühleres Klima als die Küste", "Lovers' Leap Klippe ist Teil davon"],
      hu: ["Bauxitban gazdag talaj", "Fontos mezőgazdasági régió", "Hűvösebb éghajlat, mint a partvidéken", "A Lovers' Leap szikla része"],
      ro: ["Soluri bogate în bauxită", "Regiune agricolă importantă", "Climat mai răcoros decât coasta", "Stânca Lovers' Leap face parte din el"],
      en: ["Bauxite-rich soils", "Important agricultural region", "Cooler climate than the coast", "Lovers' Leap cliff is part of it"]
    }
  },
  {
    id: "fern-gully-nature-v2",
    type: "forest",
    parent: "JM-06",
    coords: [-77.10, 18.38],
    name: { de: "Fern Gully", hu: "Fern Gully (Páfrány-szurdok)", ro: "Defileul cu ferigi", en: "Fern Gully" },
    description: { de: "Eine drei Meilen lange Schlucht in der Nähe von Ocho Rios, gesäumt von Hunderten von Farnarten.", hu: "Három mérföld hosszú szurdok Ocho Rios közelében, amelyet páfrányfajok százai szegélyeznek.", ro: "Un defileu de trei mile lungime lângă Ocho Rios, mărginit de sute de specii de ferigi.", en: "A three-mile-long canyon near Ocho Rios, lined with hundreds of species of ferns." },
    facts: {
      de: ["Über 500 Farnarten", "Ehemaliges Flussbett", "Geschützte Naturattraktion", "Dichtes Blätterdach"],
      hu: ["Több mint 500 páfrányfaj", "Egykori folyómeder", "Védett természeti látványosság", "Sűrű lombkorona"],
      ro: ["Peste 500 de specii de ferigi", "Fost albie de râu", "Atracție naturală protejată", "Baldachin dens de frunze"],
      en: ["Over 500 species of ferns", "Former riverbed", "Protected natural attraction", "Dense canopy overhead"]
    }
  },
  {
    id: "swift-river-nature-v2",
    type: "river",
    parent: "JM-04",
    coords: [-76.57, 18.20],
    name: { de: "Swift River", hu: "Swift-folyó", ro: "Râul Swift", en: "Swift River" },
    description: { de: "Ein Fluss in Portland, der bei Hope Bay ins Meer mündet.", hu: "Folyó Portlandben, amely Hope Bay-nél ömlik a tengerbe.", ro: "Un râu în Portland care se varsă în mare la Hope Bay.", en: "A river in Portland that empties into the sea at Hope Bay." },
    facts: {
      de: ["Fließt aus den Blue Mountains", "Klares, kühles Wasser", "Beliebt bei Einheimischen zum Baden", "Malerische Flusslandschaft"],
      hu: ["A Blue Mountains-ből ered", "Tiszta, hűvös víz", "A helyiek kedvelt fürdőhelye", "Festői folyóparti táj"],
      ro: ["Izvorăște din Munții Albaștri", "Apă limpede și rece", "Popular printre localnici pentru scăldat", "Peisaj fluvial pitoresc"],
      en: ["Flows from the Blue Mountains", "Clear, cool water", "Popular with locals for bathing", "Picturesque river scenery"]
    }
  },
  {
    id: "boston-bay-nature-v2",
    type: "sea",
    parent: "JM-04",
    coords: [-76.35, 18.18],
    name: { de: "Boston Bay", hu: "Boston-öböl", ro: "Golful Boston", en: "Boston Bay" },
    description: { de: "Eine Bucht in Portland, die als Geburtsort des Jerk-Kochstils gilt.", hu: "Egy öböl Portlandben, amelyet a 'jerk' főzési stílus szülőhelyének tartanak.", ro: "Un golf în Portland considerat locul de naștere al stilului de gătit jerk.", en: "A bay in Portland considered the birthplace of jerk-style cooking." },
    facts: {
      de: ["Heimat des authentischen Jerk Food", "Beliebter Surfspot", "Weißer Sandstrand", "Kleine, halbmondförmige Bucht"],
      hu: ["Az autentikus jerk ételek otthona", "Népszerű szörfhely", "Fehér homokos strand", "Kis, félhold alakú öböl"],
      ro: ["Patria mâncărurilor autentice jerk", "Loc popular pentru surfing", "Plajă cu nisip alb", "Golf mic în formă de semilună"],
      en: ["Home of authentic jerk food", "Popular surfing spot", "White sand beach", "Small, crescent-shaped bay"]
    }
  },
  {
    id: "cabarita-river-nature-v2",
    type: "river",
    parent: "JM-03",
    coords: [-78.14, 18.25],
    name: { de: "Cabarita River", hu: "Cabarita-folyó", ro: "Râul Cabarita", en: "Cabarita River" },
    description: { de: "Ein Fluss in Westmoreland, der durch Savanna-la-Mar fließt.", hu: "Folyó Westmorelandben, amely Savanna-la-Maron keresztül folyik.", ro: "Un râu în Westmoreland care curge prin Savanna-la-Mar.", en: "A river in Westmoreland that flows through Savanna-la-Mar." },
    facts: {
      de: ["Fließt durch das Great Morass", "Wichtig für die lokale Landwirtschaft", "Mündet in die Karibik", "Lebensraum für Vögel und Fische"],
      hu: ["A Great Morass-on keresztül folyik", "Fontos a helyi mezőgazdaság számára", "A Karib-tengerbe ömlik", "Madarak és halak élőhelye"],
      ro: ["Curge prin Marea Mlaștină", "Important pentru agricultura locală", "Se varsă în Marea Caraibelor", "Habitat pentru păsări și pești"],
      en: ["Flows through the Great Morass", "Important for local agriculture", "Empties into the Caribbean Sea", "Habitat for birds and fish"]
    }
  },
  {
    id: "montpelier-mountains-nature-v2",
    type: "mountain",
    parent: "JM-08",
    coords: [-77.95, 18.35],
    name: { de: "Montpelier Berge", hu: "Montpelier-hegység", ro: "Munții Montpelier", en: "Montpelier Mountains" },
    description: { de: "Eine hügelige Region in St. James, südöstlich von Montego Bay.", hu: "Dombsági régió St. James-ben, Montego Bay-től délkeletre.", ro: "O regiune deluroasă în St. James, la sud-est de Montego Bay.", en: "A hilly region in St. James, southeast of Montego Bay." },
    facts: {
      de: ["Historisches Plantagengebiet", "Sanfte Hügel", "Landwirtschaftlich genutzt", "Schöne ländliche Landschaft"],
      hu: ["Történelmi ültetvényterület", "Lankás dombok", "Mezőgazdasági művelés", "Szép vidéki táj"],
      ro: ["Zonă istorică a plantațiilor", "Dealuri domoale", "Utilizată agricol", "Peisaj rural frumos"],
      en: ["Historic plantation area", "Rolling hills", "Used for agriculture", "Beautiful rural scenery"]
    }
  },
  {
    id: "mason-river-game-sanctuary-nature-v2",
    type: "forest",
    parent: "JM-09",
    coords: [-77.37, 18.19],
    name: { de: "Mason River Wildreservat", hu: "Mason River Vadvédelmi Terület", ro: "Sanctuarul de vânătoare Mason River", en: "Mason River Game Sanctuary" },
    description: { de: "Ein geschütztes Feuchtgebiet und Waldreservat in Clarendon.", hu: "Védett vizes élőhely és erdőrezervátum Clarendonban.", ro: "O zonă umedă protejată și rezervație forestieră în Clarendon.", en: "A protected wetland and forest reserve in Clarendon." },
    facts: {
      de: ["Jamaikas einziges Binnen-Feuchtgebiet", "Reservat für Vögel und Wildtiere", "Einzigartige Flora", "Wichtig für den Naturschutz"],
      hu: ["Jamaica egyetlen szárazföldi vizes élőhelye", "Madár- és vadvédelmi rezervátum", "Egyedülálló növényvilág", "Fontos a természetvédelem szempontjából"],
      ro: ["Singura zonă umedă interioară din Jamaica", "Rezervație pentru păsări și animale sălbatice", "Floră unică", "Important pentru conservarea naturii"],
      en: ["Jamaica's only inland wetland", "Reserve for birds and wildlife", "Unique flora", "Important for conservation"]
    }
  },
  {
    id: "salt-river-nature-v2",
    type: "river",
    parent: "JM-09",
    coords: [-77.17, 17.85],
    name: { de: "Salt River", hu: "Salt River", ro: "Râul Salt", en: "Salt River" },
    description: { de: "Ein Fluss in Clarendon, der in die Portland Bight mündet.", hu: "Egy folyó Clarendonban, amely a Portland-öbölbe ömlik.", ro: "Un râu în Clarendon care se varsă în Golful Portland.", en: "A river in Clarendon that flows into Portland Bight." },
    facts: {
      de: ["Mündet in ein großes Feuchtgebiet", "Wichtiger Lebensraum für Vögel", "Mangrovenwälder entlang des Ufers", "Beliebt für Bootsfahrten"],
      hu: ["Nagy kiterjedésű vizes élőhelybe ömlik", "Fontos madár-élőhely", "Mangroveerdők a part mentén", "Népszerű csónakázó hely"],
      ro: ["Se varsă într-o zonă umedă mare", "Habitat important pentru păsări", "Păduri de mangrove de-a lungul malurilor", "Popular pentru plimbări cu barca"],
      en: ["Flows into a large wetland", "Important habitat for birds", "Mangrove forests along the banks", "Popular for boat trips"]
    }
  },
  {
    id: "alligator-hole-river-nature-v2",
    type: "river",
    parent: "JM-12",
    coords: [-77.53, 17.88],
    name: { de: "Alligator Hole River", hu: "Alligator Hole-folyó", ro: "Râul Alligator Hole", en: "Alligator Hole River" },
    description: { de: "Ein Fluss in Manchester, der für seine Manati-Population bekannt ist.", hu: "Egy folyó Manchesterben, amely a lamantin populációjáról ismert.", ro: "Un râu în Manchester, cunoscut pentru populația sa de lamantini.", en: "A river in Manchester known for its manatee population." },
    facts: {
      de: ["Lebensraum für Manatis (Seekühe)", "Klares Quellwasser", "Mündet in die Long Bay", "Naturschutzgebiet"],
      hu: ["Lamantinok (tengeri tehenek) élőhelye", "Tiszta forrásvíz", "A Long Bay-be ömlik", "Természetvédelmi terület"],
      ro: ["Habitat pentru lamantini (vacile de mare)", "Apă de izvor limpede", "Se varsă în Golful Long", "Rezervație naturală"],
      en: ["Habitat for manatees (sea cows)", "Clear spring water", "Flows into Long Bay", "Nature conservation area"]
    }
  },
  {
    id: "long-mountain-nature-v2",
    type: "mountain",
    parent: "JM-14",
    coords: [-76.75, 18.00],
    name: { de: "Long Mountain", hu: "Long Mountain", ro: "Muntele Long", en: "Long Mountain" },
    description: { de: "Ein Bergrücken, der den östlichen Rand von Kingston bildet.", hu: "Egy hegygerinc, amely Kingston keleti szélét képezi.", ro: "O creastă muntoasă care formează marginea de est a Kingstonului.", en: "A mountain ridge that forms the eastern border of Kingston." },
    facts: {
      de: ["Trennt Kingston vom Landesinneren", "Trockenwald-Vegetation", "Wohngebiete an den Hängen", "Bietet Blick auf die Stadt"],
      hu: ["Elválasztja Kingstont a szárazföld belsejétől", "Száraz erdő növényzet", "Lakóövezetek a lejtőkön", "Kilátást nyújt a városra"],
      ro: ["Separă Kingston de interiorul țării", "Vegetație de pădure uscată", "Zone rezidențiale pe versanți", "Oferă vedere spre oraș"],
      en: ["Separates Kingston from the interior", "Dry forest vegetation", "Residential areas on the slopes", "Offers views of the city"]
    }
  },
  {
    id: "hope-river-nature-v2",
    type: "river",
    parent: "JM-14",
    coords: [-76.72, 17.98],
    name: { de: "Hope River", hu: "Hope-folyó", ro: "Râul Hope", en: "Hope River" },
    description: { de: "Ein Fluss, der durch die östlichen Vororte von Kingston fließt.", hu: "Egy folyó, amely Kingston keleti külvárosain folyik keresztül.", ro: "Un râu care curge prin suburbiile estice ale Kingstonului.", en: "A river that flows through the eastern suburbs of Kingston." },
    facts: {
      de: ["Wichtige Wasserquelle für Kingston", "Staut sich zum Hope River Dam", "Fließt durch Gordon Town", "Beliebt für Freizeitaktivitäten"],
      hu: ["Fontos vízforrás Kingston számára", "A Hope River-gátnál duzzasztják fel", "Gordon Townon keresztül folyik", "Népszerű szabadidős tevékenységekhez"],
      ro: ["Sursă importantă de apă pentru Kingston", "Se acumulează în barajul Hope River", "Curge prin Gordon Town", "Popular pentru activități recreative"],
      en: ["Important water source for Kingston", "Is dammed to form the Hope River Dam", "Flows through Gordon Town", "Popular for recreational activities"]
    }
  },
    {
    id: "canoe-valley-wetlands-nature-v2",
    type: "forest",
    parent: "JM-12",
    coords: [-77.45, 17.85],
    name: { de: "Canoe Valley Feuchtgebiete", hu: "Canoe Valley vizes élőhelyek", ro: "Zonele umede din Valea Canoe", en: "Canoe Valley Wetlands" },
    description: { de: "Ein geschütztes Feuchtgebiet in Clarendon und Manchester.", hu: "Védett vizes élőhely Clarendonban és Manchesterben.", ro: "O zonă umedă protejată în Clarendon și Manchester.", en: "A protected wetland area in Clarendon and Manchester." },
    facts: {
      de: ["Ramsar-Schutzgebiet", "Lebensraum für Krokodile und Vögel", "Mangroven und Sumpfwälder", "Wichtig für die Fischerei"],
      hu: ["Ramsari terület", "Krokodilok és madarak élőhelye", "Mangrove- és mocsárerdők", "Fontos a halászat szempontjából"],
      ro: ["Situl Ramsar", "Habitat pentru crocodili și păsări", "Păduri de mangrove și mlaștini", "Important pentru pescuit"],
      en: ["Ramsar protected site", "Habitat for crocodiles and birds", "Mangrove and swamp forests", "Important for fisheries"]
    }
  },
  {
    id: "pedro-bluff-nature-v2",
    type: "sea",
    parent: "JM-02",
    coords: [-77.75, 17.85],
    name: { de: "Pedro Bluff", hu: "Pedro-szikla", ro: "Faleza Pedro", en: "Pedro Bluff" },
    description: { de: "Eine Reihe von Klippen an der Südküste von St. Elizabeth.", hu: "Sziklasorozat St. Elizabeth déli partján.", ro: "O serie de stânci pe coasta de sud a St. Elizabeth.", en: "A series of cliffs on the south coast of St. Elizabeth." },
    facts: {
      de: ["Dramatische Küstenklippen", "Trockene, savannenähnliche Landschaft", "Blick auf das Karibische Meer", "In der Nähe von Treasure Beach"],
      hu: ["Drámai tengerparti sziklák", "Száraz, szavannaszerű táj", "Kilátás a Karib-tengerre", "Treasure Beach közelében"],
      ro: ["Stânci de coastă dramatice", "Peisaj uscat, asemănător savanei", "Vedere la Marea Caraibelor", "Aproape de Treasure Beach"],
      en: ["Dramatic coastal cliffs", "Dry, savannah-like landscape", "Views of the Caribbean Sea", "Near Treasure Beach"]
    }
  },
  {
    id: "glistening-waters-nature-v2",
    type: "lake",
    parent: "JM-07",
    coords: [-77.63, 18.48],
    name: { de: "Glistening Waters", hu: "Glistening Waters (Világító lagúna)", ro: "Apele Scânteietoare", en: "Glistening Waters" },
    description: { de: "Eine Lagune in der Nähe von Falmouth, die nachts durch Biolumineszenz leuchtet.", hu: "Egy lagúna Falmouth közelében, amely éjjel a biolumineszcencia miatt világít.", ro: "O lagună lângă Falmouth care strălucește noaptea datorită bioluminiscenței.", en: "A lagoon near Falmouth that glows at night due to bioluminescence." },
    facts: {
      de: ["Biolumineszente Mikroorganismen", "Nachttouren sind beliebt", "Einer von wenigen Orten weltweit", "Wo Süß- und Salzwasser aufeinandertreffen"],
      hu: ["Biolumineszcens mikroorganizmusok", "Népszerűek az éjszakai túrák", "A világ kevés ilyen helyének egyike", "Ahol az édes- és a sósvíz találkozik"],
      ro: ["Microorganisme bioluminiscente", "Tururile de noapte sunt populare", "Unul dintre puținele locuri din lume", "Unde apa dulce se întâlnește cu apa sărată"],
      en: ["Bioluminescent microorganisms", "Night tours are popular", "One of only a few places in the world", "Where fresh and salt water meet"]
    }
  },
  {
    id: "alligator-pond-river-nature-v2",
    type: "river",
    parent: "JM-02",
    coords: [-77.58, 17.86],
    name: { de: "Alligator Pond River", hu: "Alligator Pond-folyó", ro: "Râul Alligator Pond", en: "Alligator Pond River" },
    description: { de: "Ein Fluss, der in das Fischerdorf Alligator Pond an der Grenze zwischen Manchester und St. Elizabeth mündet.", hu: "Egy folyó, amely az Alligator Pond halászfaluba ömlik Manchester és St. Elizabeth határán.", ro: "Un râu care se varsă în satul pescăresc Alligator Pond, la granița dintre Manchester și St. Elizabeth.", en: "A river that empties into the fishing village of Alligator Pond on the border of Manchester and St. Elizabeth." },
    facts: {
      de: ["Wichtige Wasserquelle für die Region", "Unterstützt ein großes Fischerdorf", "Mündet in die Long Bay", "Grenze zwischen zwei Parishes"],
      hu: ["Fontos vízforrás a régió számára", "Egy nagy halászfalut lát el", "A Long Bay-be ömlik", "Két plébánia határa"],
      ro: ["Sursă importantă de apă pentru regiune", "Susține un mare sat pescăresc", "Se varsă în Golful Long", "Granița dintre două parohii"],
      en: ["Important water source for the region", "Supports a large fishing village", "Empties into Long Bay", "Border between two parishes"]
    }
  },
  {
    id: "somerset-falls-nature-v2",
    type: "river",
    parent: "JM-04",
    coords: [-76.48, 18.20],
    name: { de: "Somerset Falls", hu: "Somerset-vízesés", ro: "Cascadele Somerset", en: "Somerset Falls" },
    description: { de: "Eine Reihe von Wasserfällen am Daniels River, versteckt in einem Regenwald in Portland.", hu: "Vízesések sorozata a Daniels folyón, egy portlandi esőerdőben elrejtve.", ro: "O serie de cascade pe râul Daniels, ascunse într-o pădure tropicală din Portland.", en: "A series of waterfalls on the Daniels River, hidden in a rainforest in Portland." },
    facts: {
      de: ["Versteckte Wasserfälle", "Bootsfahrt zum Hauptfall", "Üppige tropische Gärten", "Ruhige und malerische Umgebung"],
      hu: ["Rejtett vízesések", "Csónakázás a fő vízeséshez", "Buja trópusi kertek", "Csendes és festői környezet"],
      ro: ["Cascade ascunse", "Plimbare cu barca până la cascada principală", "Grădini tropicale luxuriante", "Mediu liniștit și pitoresc"],
      en: ["Hidden waterfalls", "Boat ride to the main falls", "Lush tropical gardens", "Tranquil and scenic environment"]
    }
  },
  {
    id: "roaring-river-nature-v2",
    type: "river",
    parent: "JM-03",
    coords: [-78.10, 18.28],
    name: { de: "Roaring River", hu: "Roaring River", ro: "Râul Roaring", en: "Roaring River" },
    description: { de: "Ein Fluss in Westmoreland, bekannt für seine Höhlen und den Park.", hu: "Folyó Westmorelandben, amely barlangjairól és parkjáról ismert.", ro: "Un râu în Westmoreland, cunoscut pentru peșterile și parcul său.", en: "A river in Westmoreland known for its caves and park." },
    facts: {
      de: ["Fließt teilweise unterirdisch", "Roaring River Park mit botanischem Garten", "Kalksteinhöhlen zum Erkunden", "Klares, kühles Wasser"],
      hu: ["Részben a föld alatt folyik", "Roaring River Park botanikus kerttel", "Felfedezhető mészkőbarlangok", "Tiszta, hűvös víz"],
      ro: ["Curge parțial subteran", "Parcul Roaring River cu grădină botanică", "Peșteri de calcar de explorat", "Apă limpede și rece"],
      en: ["Flows partly underground", "Roaring River Park with botanical garden", "Limestone caves to explore", "Clear, cool water"]
    }
  }
];
