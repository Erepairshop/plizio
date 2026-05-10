import type { POI } from "./poi";

export const poiExtraMyanmarNatureV2: POI[] = [
  {
    id: "inle-lake-nature-v2",
    type: "lake",
    parent: "MM-17",
    coords: [96.9333, 20.5500],
    name: { de: "Inle-See", hu: "Inle-tó", ro: "Lacul Inle", en: "Inle Lake" },
    description: {
      de: "Ein berühmter Süßwassersee im Shan-Staat, bekannt für seine schwimmenden Dörfer und Einbeinruderer.",
      hu: "Híres édesvizű tó a Shan államban, amely úszó falvairól és az egy lábbal evező halászairól ismert.",
      ro: "Un celebru lac de apă dulce din statul Shan, recunoscut pentru satele sale plutitoare și vâslașii cu un singur picior.",
      en: "A famous freshwater lake in Shan State, known for its floating villages and one-legged rowers."
    },
    facts: {
      de: ["Fläche von etwa 116 km².", "Heimat endemischer Fischarten.", "Wichtiges Zentrum für Seiden- und Lotusweberei."],
      hu: ["Területe körülbelül 116 km².", "Endemikus halfajok otthona.", "A selyem- és lótuszszövés fontos központja."],
      ro: ["Suprafață de aproximativ 116 km².", "Găzduiește specii endemice de pești.", "Centru important pentru țesutul mătăsii și lotusului."],
      en: ["Area of about 116 sq km.", "Home to endemic fish species.", "Important center for silk and lotus weaving."]
    }, image: "/poi-images/inle-lake-nature-v2.webp"},
  {
    id: "irrawaddy-river-nature-v2",
    type: "river",
    parent: "MM-04",
    coords: [95.9500, 21.0000],
    name: { de: "Irrawaddy-Fluss", hu: "Iravádi-folyó", ro: "Râul Irrawaddy", en: "Irrawaddy River" },
    description: {
      de: "Der wichtigste und längste Fluss Myanmars, der als kommerzielle Wasserstraße und Lebensader des Landes dient.",
      hu: "Mianmar legfontosabb és leghosszabb folyója, amely kereskedelmi vízi útként és az ország ütőereként szolgál.",
      ro: "Cel mai important și lung râu din Myanmar, servind ca o cale navigabilă comercială și colac de salvare al țării.",
      en: "Myanmar's most important and longest river, serving as a commercial waterway and lifeline of the country."
    },
    facts: {
      de: ["Längster Fluss Myanmars (2210 km).", "Wichtige Wasserstraße.", "Fließt in die Andamanensee."],
      hu: ["Mianmar leghosszabb folyója (2210 km).", "Fontos vízi út.", "Az Andamán-tengerbe ömlik."],
      ro: ["Cel mai lung râu din Myanmar (2210 km).", "Cale navigabilă importantă.", "Se varsă în Marea Andaman."],
      en: ["Longest river in Myanmar (2210 km).", "Important waterway.", "Flows into the Andaman Sea."]
    }, image: "/poi-images/irrawaddy-river-nature-v2.webp"},
  {
    id: "chindwin-river-nature-v2",
    type: "river",
    parent: "MM-01",
    coords: [94.6600, 23.0000],
    name: { de: "Chindwin-Fluss", hu: "Chindwin-folyó", ro: "Râul Chindwin", en: "Chindwin River" },
    description: {
      de: "Der größte Nebenfluss des Irrawaddy, der durch malerische Täler und dichte Dschungel im Westen fließt.",
      hu: "Az Iravádi legnagyobb mellékfolyója, amely festői völgyeken és sűrű dzsungeleken folyik keresztül nyugaton.",
      ro: "Cel mai mare afluent al râului Irrawaddy, care curge prin văi pitorești și jungle dense în vest.",
      en: "The largest tributary of the Irrawaddy, flowing through picturesque valleys and dense jungles in the west."
    },
    facts: {
      de: ["Größter Nebenfluss des Irrawaddy.", "Entspringt im Kachin-Staat.", "Etwa 1207 km lang."],
      hu: ["Az Iravádi legnagyobb mellékfolyója.", "A Kachin államban ered.", "Körülbelül 1207 km hosszú."],
      ro: ["Cel mai mare afluent al râului Irrawaddy.", "Izvorăște în statul Kachin.", "Lung de aproximativ 1207 km."],
      en: ["Largest tributary of the Irrawaddy.", "Originates in Kachin State.", "About 1207 km long."]
    }, image: "/poi-images/chindwin-river-nature-v2.webp"},
  {
    id: "hkakabo-razi-nature-v2",
    type: "mountain",
    parent: "MM-11",
    coords: [97.7000, 28.3000],
    name: { de: "Hkakabo Razi", hu: "Hkakabo Razi", ro: "Hkakabo Razi", en: "Hkakabo Razi" },
    description: {
      de: "Höchster Berg in Myanmar und ganz Südostasien, gelegen im nördlichen Kachin-Staat an der Grenze zu China.",
      hu: "Mianmar és egész Délkelet-Ázsia legmagasabb hegye, az északi Kachin államban, a kínai határon.",
      ro: "Cel mai înalt munte din Myanmar și din întreaga Asia de Sud-Est, situat în nordul statului Kachin.",
      en: "Highest mountain in Myanmar and all of Southeast Asia, located in northern Kachin State near the Chinese border."
    },
    facts: {
      de: ["5881 Meter hoch.", "Teil des Himalaya-Gebirges.", "1996 erstmals bestiegen."],
      hu: ["5881 méter magas.", "A Himalája-hegység része.", "1996-ban mászták meg először."],
      ro: ["5881 metri înălțime.", "Face parte din munții Himalaya.", "Escaladat pentru prima dată în 1996."],
      en: ["5881 meters high.", "Part of the Himalayas.", "First ascended in 1996."]
    }, image: "/poi-images/hkakabo-razi-nature-v2.webp"},
  {
    id: "salween-river-nature-v2",
    type: "river",
    parent: "MM-17",
    coords: [97.6000, 20.0000],
    name: { de: "Saluen-Fluss", hu: "Szalven-folyó", ro: "Râul Salween", en: "Salween River" },
    description: {
      de: "Einer der längsten unregulierten Flüsse Asiens, der durch tiefe Schluchten im Osten Myanmars fließt.",
      hu: "Ázsia egyik leghosszabb szabályozatlan folyója, amely mély szurdokokon folyik keresztül Kelet-Mianmarban.",
      ro: "Unul dintre cele mai lungi râuri neregularizate din Asia, care curge prin chei adânci în estul Myanmarului.",
      en: "One of Asia's longest free-flowing rivers, cutting through deep gorges in eastern Myanmar."
    },
    facts: {
      de: ["2815 km lang.", "Entspringt in Tibet.", "Mündet in die Andamanensee."],
      hu: ["2815 km hosszú.", "Tibetben ered.", "Az Andamán-tengerbe ömlik."],
      ro: ["2815 km lungime.", "Izvorăște în Tibet.", "Se varsă în Marea Andaman."],
      en: ["2815 km long.", "Originates in Tibet.", "Flows into the Andaman Sea."]
    }, image: "/poi-images/salween-river-nature-v2.webp"},
  {
    id: "mount-popa-nature-v2",
    type: "mountain",
    parent: "MM-04",
    coords: [95.2700, 20.9200],
    name: { de: "Mount Popa", hu: "Popa-hegy", ro: "Muntele Popa", en: "Mount Popa" },
    description: {
      de: "Ein erloschener Vulkan in Zentral-Myanmar, bekannt als heiliger Ort für die Verehrung der Nat-Geister.",
      hu: "Kialudt vulkán Közép-Mianmarban, amely a Nat-szellemek tiszteletének szent helyeként ismert.",
      ro: "Un vulcan stins din centrul Myanmarului, cunoscut ca un loc sacru pentru venerarea spiritelor Nat.",
      en: "An extinct volcano in central Myanmar, known as a sacred site for the veneration of Nat spirits."
    },
    facts: {
      de: ["1518 Meter hoch.", "Oft als der Olymp von Myanmar bezeichnet.", "Heimat vieler Makaken."],
      hu: ["1518 méter magas.", "Gyakran Mianmar Olümposzaként emlegetik.", "Sok makákó majom otthona."],
      ro: ["1518 metri înălțime.", "Adesea numit Olimpul Myanmarului.", "Găzduiește mulți macaci."],
      en: ["1518 meters high.", "Often referred to as the Olympus of Myanmar.", "Home to many macaque monkeys."]
    }, image: "/poi-images/mount-popa-nature-v2.webp"},
  {
    id: "nat-ma-taung-nature-v2",
    type: "mountain",
    parent: "MM-14",
    coords: [93.9000, 21.2300],
    name: { de: "Nat Ma Taung", hu: "Nat Ma Taung", ro: "Nat Ma Taung", en: "Nat Ma Taung" },
    description: {
      de: "Auch als Mount Victoria bekannt, ist er der höchste Berg im Chin-Staat und berühmt für seine endemische Flora.",
      hu: "A Victoria-hegyként is ismert csúcs a Chin állam legmagasabb hegye, híres endemikus növényvilágáról.",
      ro: "Cunoscut și sub numele de Muntele Victoria, este cel mai înalt munte din statul Chin, faimos pentru flora sa endemică.",
      en: "Also known as Mount Victoria, it is the highest mountain in Chin State, famous for its endemic flora."
    },
    facts: {
      de: ["3053 Meter hoch.", "Teil des Arakan-Joma-Gebirges.", "Heimat einzigartiger Orchideenarten."],
      hu: ["3053 méter magas.", "Az Arakan Yoma-hegység része.", "Egyedülálló orchideafajok otthona."],
      ro: ["3053 metri înălțime.", "Face parte din lanțul muntos Arakan Yoma.", "Găzduiește specii unice de orhidee."],
      en: ["3053 meters high.", "Part of the Arakan Yoma mountain range.", "Home to unique orchid species."]
    }, image: "/poi-images/nat-ma-taung-nature-v2.webp"},
  {
    id: "alaungdaw-kathapa-national-park-nature-v2",
    type: "national-park",
    parent: "MM-01",
    coords: [94.4600, 22.3100],
    name: { de: "Alaungdaw-Kathapa-Nationalpark", hu: "Alaungdaw Kathapa Nemzeti Park", ro: "Parcul Național Alaungdaw Kathapa", en: "Alaungdaw Kathapa National Park" },
    description: {
      de: "Der größte und älteste Nationalpark Myanmars, der für seine dichten Wälder und Wildtiere bekannt ist.",
      hu: "Mianmar legnagyobb és legrégebbi nemzeti parkja, amely sűrű erdeiről és vadvilágáról ismert.",
      ro: "Cel mai mare și mai vechi parc național din Myanmar, cunoscut pentru pădurile sale dense și fauna sălbatică.",
      en: "The largest and oldest national park in Myanmar, known for its dense forests and wildlife."
    },
    facts: {
      de: ["1984 gegründet.", "Umfasst 1605 km².", "Wichtiger Lebensraum für Asiatische Elefanten."],
      hu: ["1984-ben alapították.", "1605 km² területű.", "Fontos élőhely az ázsiai elefántok számára."],
      ro: ["Fondat în 1984.", "Acoperă 1605 km².", "Habitat important pentru elefanții asiatici."],
      en: ["Established in 1984.", "Covers 1605 sq km.", "Important habitat for Asian elephants."]
    }, image: "/poi-images/alaungdaw-kathapa-national-park-nature-v2.webp"},
  {
    id: "lampi-island-marine-national-park-nature-v2",
    type: "national-park",
    parent: "MM-05",
    coords: [98.2300, 10.8300],
    name: { de: "Lampi-Marine-Nationalpark", hu: "Lampi-sziget Tengeri Nemzeti Park", ro: "Parcul Național Marin Lampi", en: "Lampi Island Marine National Park" },
    description: {
      de: "Myanmars erster mariner Nationalpark, gelegen im Mergui-Archipel, schützt reiche Korallenriffe und Mangroven.",
      hu: "Mianmar első tengeri nemzeti parkja, amely a Mergui-szigetvilágban található, gazdag korallzátonyokat és mangroveerdőket véd.",
      ro: "Primul parc național marin din Myanmar, situat în arhipelagul Mergui, protejând recife de corali și mangrove.",
      en: "Myanmar's first marine national park, located in the Mergui Archipelago, protecting rich coral reefs and mangroves."
    },
    facts: {
      de: ["1996 gegründet.", "Teil des ASEAN-Erbe-Netzwerks.", "Heimat der Moken-See-Nomaden."],
      hu: ["1996-ban alapították.", "Az ASEAN-örökség hálózat része.", "A moken tengeri nomádok otthona."],
      ro: ["Fondat în 1996.", "Face parte din rețeaua de patrimoniu ASEAN.", "Găzduiește nomazii mării Moken."],
      en: ["Established in 1996.", "Part of the ASEAN Heritage Park network.", "Home to Moken sea nomads."]
    }, image: "/poi-images/lampi-island-marine-national-park-nature-v2.webp"},
  {
    id: "hlawga-national-park-nature-v2",
    type: "national-park",
    parent: "MM-06",
    coords: [96.1100, 17.0400],
    name: { de: "Hlawga-Nationalpark", hu: "Hlawga Nemzeti Park", ro: "Parcul Național Hlawga", en: "Hlawga National Park" },
    description: {
      de: "Ein Naturschutzgebiet in der Nähe von Yangon, das als Erholungszentrum und Wildpark dient.",
      hu: "Jangon közelében fekvő természetvédelmi terület, amely rekreációs központként és vadasparkként szolgál.",
      ro: "O zonă protejată lângă Yangon, care servește drept centru de recreere și parc natural.",
      en: "A protected area near Yangon, serving as a recreation center and wildlife park."
    },
    facts: {
      de: ["1982 eröffnet.", "Schützt das Einzugsgebiet des Zamami-Sees.", "Viele Hirscharten leben hier."],
      hu: ["1982-ben nyílt meg.", "A Zamami-tó vízgyűjtőjét védi.", "Számos szarvasfaj él itt."],
      ro: ["Deschis în 1982.", "Protejează bazinul hidrografic al lacului Zamami.", "Multe specii de cerbi trăiesc aici."],
      en: ["Opened in 1982.", "Protects the catchment area of Lake Zamami.", "Many deer species live here."]
    }, image: "/poi-images/hlawga-national-park-nature-v2.webp"},
  {
    id: "popa-mountain-national-park-nature-v2",
    type: "national-park",
    parent: "MM-04",
    coords: [95.2900, 20.9300],
    name: { de: "Popa-Mountain-Nationalpark", hu: "Popa-hegy Nemzeti Park", ro: "Parcul Național Muntele Popa", en: "Popa Mountain National Park" },
    description: {
      de: "Ein geschütztes Gebiet rund um den Mount Popa, das seltene Pflanzen und Tiere der Trockenzone bewahrt.",
      hu: "A Popa-hegy körüli védett terület, amely a száraz zóna ritka növényeit és állatait őrzi.",
      ro: "O zonă protejată în jurul Muntelui Popa, care conservă plante și animale rare din zona uscată.",
      en: "A protected area around Mount Popa, preserving rare plants and animals of the dry zone."
    },
    facts: {
      de: ["1989 gegründet.", "Schützt eine grüne Oase in Myanmars trockener Region.", "Beheimatet endemische Vogelarten."],
      hu: ["1989-ben alapították.", "Egy zöld oázist véd Mianmar száraz régiójában.", "Endemikus madárfajoknak ad otthont."],
      ro: ["Fondat în 1989.", "Protejează o oază verde în regiunea uscată a Myanmarului.", "Găzduiește specii de păsări endemice."],
      en: ["Established in 1989.", "Protects a green oasis in Myanmar's dry zone.", "Home to endemic bird species."]
    }, image: "/poi-images/popa-mountain-national-park-nature-v2.webp"},
  {
    id: "khakaborazi-national-park-nature-v2",
    type: "national-park",
    parent: "MM-11",
    coords: [97.6000, 27.9000],
    name: { de: "Khakaborazi-Nationalpark", hu: "Khakaborazi Nemzeti Park", ro: "Parcul Național Khakaborazi", en: "Khakaborazi National Park" },
    description: {
      de: "Ein Nationalpark in den Bergen von Kachin, der die unberührte alpine Flora und Fauna schützt.",
      hu: "Nemzeti park a Kachin hegyekben, amely az érintetlen alpesi növény- és állatvilágot védi.",
      ro: "Un parc național în munții din Kachin, care protejează flora și fauna alpină neatinsă.",
      en: "A national park in the mountains of Kachin, protecting untouched alpine flora and fauna."
    },
    facts: {
      de: ["3812 km² groß.", "Lebensraum des seltenen Schwarzen Muntjaks.", "Umfasst schneebedeckte Gipfel."],
      hu: ["3812 km² területű.", "A ritka fekete muntják élőhelye.", "Hófödte csúcsokat foglal magába."],
      ro: ["Suprafață de 3812 km².", "Habitatul muntiacului negru rar.", "Include vârfuri acoperite de zăpadă."],
      en: ["3812 sq km in size.", "Habitat of the rare black muntjac.", "Includes snow-capped peaks."]
    }, image: "/poi-images/khakaborazi-national-park-nature-v2.webp"},
  {
    id: "indawgyi-lake-nature-v2",
    type: "lake",
    parent: "MM-11",
    coords: [96.3400, 25.1200],
    name: { de: "Indawgyi-See", hu: "Indawgyi-tó", ro: "Lacul Indawgyi", en: "Indawgyi Lake" },
    description: {
      de: "Der größte Binnensee Myanmars und ein wichtiges Biosphärenreservat für Wasservögel.",
      hu: "Mianmar legnagyobb belvízi tava és fontos bioszféra-rezervátum vízimadarak számára.",
      ro: "Cel mai mare lac interior din Myanmar și o importantă rezervație a biosferei pentru păsările de apă.",
      en: "The largest inland lake in Myanmar and an important biosphere reserve for waterbirds."
    },
    facts: {
      de: ["UNESCO-Biosphärenreservat seit 2017.", "Etwa 24 km lang.", "Heimat von Zugvögeln aus Sibirien."],
      hu: ["UNESCO bioszféra-rezervátum 2017 óta.", "Körülbelül 24 km hosszú.", "Szibériai költöző madarak otthona."],
      ro: ["Rezervație a biosferei UNESCO din 2017.", "Aproximativ 24 km lungime.", "Găzduiește păsări migratoare din Siberia."],
      en: ["UNESCO Biosphere Reserve since 2017.", "About 24 km long.", "Home to migratory birds from Siberia."]
    }, image: "/poi-images/indawgyi-lake-nature-v2.webp"},
  {
    id: "sittaung-river-nature-v2",
    type: "river",
    parent: "MM-02",
    coords: [96.7000, 17.5000],
    name: { de: "Sittaung-Fluss", hu: "Sittaung-folyó", ro: "Râul Sittaung", en: "Sittaung River" },
    description: {
      de: "Ein wichtiger Fluss in Zentral-Myanmar, bekannt für seine starke Gezeitenwelle nahe der Mündung.",
      hu: "Fontos folyó Közép-Mianmarban, amely a torkolatánál lévő erős árapály-hullámáról ismert.",
      ro: "Un râu important din centrul Myanmarului, cunoscut pentru valul său puternic de maree din apropierea gurii de vărsare.",
      en: "An important river in central Myanmar, known for its strong tidal bore near the mouth."
    },
    facts: {
      de: ["420 km lang.", "Fließt in den Golf von Martaban.", "Wichtig für den Holztransport."],
      hu: ["420 km hosszú.", "A Martaban-öbölbe ömlik.", "Fontos a faanyagszállításban."],
      ro: ["420 km lungime.", "Se varsă în Golful Martaban.", "Important pentru transportul lemnului."],
      en: ["420 km long.", "Flows into the Gulf of Martaban.", "Important for timber transport."]
    }, image: "/poi-images/sittaung-river-nature-v2.webp"},
  {
    id: "moeyungyi-wetland-nature-v2",
    type: "national-park",
    parent: "MM-02",
    coords: [96.5300, 17.5500],
    name: { de: "Moeyungyi-Feuchtgebiet", hu: "Moeyungyi Vizesélőhely Menedék", ro: "Sanctuarul Moeyungyi", en: "Moeyungyi Wetland Wildlife Sanctuary" },
    description: {
      de: "Ein künstlich angelegtes Feuchtgebiet in der Bago-Region, das zu einem wichtigen Rastplatz für Zugvögel wurde.",
      hu: "Mesterségesen létrehozott vizesélőhely a Bago régióban, amely a költöző madarak fontos pihenőhelyévé vált.",
      ro: "O zonă umedă artificială în regiunea Bago, care a devenit un important loc de popas pentru păsările migratoare.",
      en: "A man-made wetland in the Bago Region that has become an important stopover for migratory birds."
    },
    facts: {
      de: ["1988 als Schutzgebiet ausgewiesen.", "RAMSAR-Gebiet seit 2004.", "Zählt Tausende von Wasservögeln."],
      hu: ["1988-ban nyilvánították védetté.", "2004 óta RAMSAR-terület.", "Több ezer vízimadarat számlál."],
      ro: ["Desemnat arie protejată în 1988.", "Sit RAMSAR din 2004.", "Numără mii de păsări de apă."],
      en: ["Designated as a sanctuary in 1988.", "RAMSAR site since 2004.", "Counts thousands of waterbirds."]
    }, image: "/poi-images/moeyungyi-wetland-nature-v2.webp"},
  {
    id: "lenya-national-park-nature-v2",
    type: "national-park",
    parent: "MM-05",
    coords: [99.1000, 11.1000],
    name: { de: "Lenya-Nationalpark", hu: "Lenya Nemzeti Park", ro: "Parcul Național Lenya", en: "Lenya National Park" },
    description: {
      de: "Ein geplanter Nationalpark im Süden Myanmars, der die tieflandigen tropischen Regenwälder der Tanintharyi-Region bewahrt.",
      hu: "Tervezett nemzeti park Dél-Mianmarban, amely a Tanintharyi régió alföldi trópusi esőerdeit őrzi.",
      ro: "Un parc național propus în sudul Myanmarului, care conservă pădurile tropicale de câmpie din regiunea Tanintharyi.",
      en: "A proposed national park in southern Myanmar, preserving the lowland tropical rainforests of the Tanintharyi region."
    },
    facts: {
      de: ["Reicht bis an die thailändische Grenze.", "Heimat der seltenen Gurney-Pitta.", "Stark von Entwaldung bedroht."],
      hu: ["A thai határig nyúlik.", "A ritka Gurney-pitta madár otthona.", "Az erdőirtás erősen fenyegeti."],
      ro: ["Se întinde până la granița cu Thailanda.", "Găzduiește rara pasăre Pitta a lui Gurney.", "Grav amenințat de defrișări."],
      en: ["Extends to the Thai border.", "Home to the rare Gurney's Pitta.", "Highly threatened by deforestation."]
    }, image: "/poi-images/lenya-national-park-nature-v2.webp"},
  {
    id: "tanintharyi-nature-reserve-nature-v2",
    type: "forest",
    parent: "MM-05",
    coords: [98.0000, 14.1000],
    name: { de: "Tanintharyi-Naturreservat", hu: "Tanintharyi Természetvédelmi Terület", ro: "Rezervația Naturală Tanintharyi", en: "Tanintharyi Nature Reserve" },
    description: {
      de: "Ein großes Schutzgebiet, das wichtige Biodiversitätskorridore zwischen Myanmar und Thailand schützt.",
      hu: "Nagy védett terület, amely fontos biodiverzitási folyosókat véd Mianmar és Thaiföld között.",
      ro: "O arie protejată mare, care protejează coridoare importante de biodiversitate între Myanmar și Thailanda.",
      en: "A large protected area safeguarding important biodiversity corridors between Myanmar and Thailand."
    },
    facts: {
      de: ["1700 km² groß.", "Finanziert teilweise durch Einnahmen aus Gaspipelines.", "Beheimatet Tiger und Tapire."],
      hu: ["1700 km² területű.", "Részben gázvezeték-bevételekből finanszírozzák.", "Tigrisek és tapírok lakják."],
      ro: ["1700 km² suprafață.", "Finanțat parțial din veniturile conductelor de gaz.", "Găzduiește tigri și tapiri."],
      en: ["1700 sq km in size.", "Partially funded by gas pipeline revenues.", "Home to tigers and tapirs."]
    }, image: "/poi-images/tanintharyi-nature-reserve-nature-v2.webp"},
  {
    id: "bago-yoma-nature-v2",
    type: "mountain",
    parent: "MM-02",
    coords: [96.2000, 18.5000],
    name: { de: "Bago-Joma", hu: "Bago Yoma", ro: "Bago Yoma", en: "Bago Yoma" },
    description: {
      de: "Eine Bergkette, die die Becken der Flüsse Irrawaddy und Sittaung trennt, bekannt für ihre Teakholz-Wälder.",
      hu: "Hegylánc, amely elválasztja az Iravádi és a Sittaung folyók medencéit, teakfa-erdeiről ismert.",
      ro: "Un lanț muntos care separă bazinele râurilor Irrawaddy și Sittaung, cunoscut pentru pădurile sale de lemn de tec.",
      en: "A mountain range separating the Irrawaddy and Sittaung river basins, known for its teak forests."
    },
    facts: {
      de: ["Reicht bis auf 820 Meter Höhe.", "Wichtige Quelle für hochwertiges Teakholz.", "Beheimatet viele Elefantenherden."],
      hu: ["Magassága eléri a 820 métert.", "A kiváló minőségű teakfa fontos forrása.", "Számos elefántcsorda otthona."],
      ro: ["Atinge altitudini de până la 820 metri.", "Sursă importantă de lemn de tec de înaltă calitate.", "Găzduiește multe turme de elefanți."],
      en: ["Reaches up to 820 meters in height.", "Important source of high-quality teak wood.", "Home to many elephant herds."]
    }, image: "/poi-images/bago-yoma-nature-v2.webp"},
  {
    id: "hukaung-valley-nature-v2",
    type: "national-park",
    parent: "MM-11",
    coords: [96.5000, 26.5000],
    name: { de: "Hukaung-Tal-Wildreservat", hu: "Hukaung-völgy Vadvédelmi Terület", ro: "Sanctuarul Văii Hukaung", en: "Hukaung Valley Wildlife Sanctuary" },
    description: {
      de: "Das größte Tigerreservat der Welt im abgelegenen Norden Myanmars, geprägt von dichten Dschungeln.",
      hu: "A világ legnagyobb tigrisrezervátuma Mianmar elszigetelt északi részén, amelyet sűrű dzsungelek jellemeznek.",
      ro: "Cea mai mare rezervație de tigri din lume, situată în nordul îndepărtat al Myanmarului, dominată de jungle dense.",
      en: "The world's largest tiger reserve in the remote north of Myanmar, characterized by dense jungles."
    },
    facts: {
      de: ["17373 km² groß.", "2001 als Schutzgebiet gegründet.", "Lebensraum für asiatische Bären und Leoparden."],
      hu: ["17373 km² területű.", "2001-ben alapították védett területként.", "Ázsiai medvék és leopárdok élőhelye."],
      ro: ["17373 km² suprafață.", "Fondată ca arie protejată în 2001.", "Habitat pentru urșii și leoparzii asiatici."],
      en: ["17373 sq km in size.", "Established as a sanctuary in 2001.", "Habitat for Asian bears and leopards."]
    }, image: "/poi-images/hukaung-valley-nature-v2.webp"},
  {
    id: "inya-lake-nature-v2",
    type: "lake",
    parent: "MM-06",
    coords: [96.1500, 16.8300],
    name: { de: "Inya-See", hu: "Inya-tó", ro: "Lacul Inya", en: "Inya Lake" },
    description: {
      de: "Der größte künstliche See in Yangon, ein beliebtes Erholungsgebiet umgeben von Parks und Villen.",
      hu: "Jangon legnagyobb mesterséges tava, népszerű pihenőhely, amelyet parkok és villák vesznek körül.",
      ro: "Cel mai mare lac artificial din Yangon, o zonă de recreere populară înconjurată de parcuri și vile.",
      en: "The largest artificial lake in Yangon, a popular recreation area surrounded by parks and villas."
    },
    facts: {
      de: ["1883 von den Briten angelegt.", "Wichtige Wasserversorgung für Yangon.", "Beliebter Ort für Segelsport."],
      hu: ["1883-ban a britek hozták létre.", "Jangon fontos vízellátója.", "Népszerű hely a vitorlázáshoz."],
      ro: ["Creat de britanici în 1883.", "Sursă importantă de apă pentru Yangon.", "Loc popular pentru navigație."],
      en: ["Created by the British in 1883.", "Important water supply for Yangon.", "Popular spot for sailing."]
    }
  }
];
