import type { POI } from "./poi";

export const poiExtraIsraelNatureV2: POI[] = [
  {
    id: "il-dead-sea-nature-v2",
    type: "lake",
    parent: "IL-D",
    coords: [35.45, 31.5],
    name: { de: "Totes Meer", hu: "Holt-tenger", ro: "Marea Moartă", en: "Dead Sea" },
    description: {
      de: "Das Tote Meer ist ein abflussloser Salzsee, der an der tiefsten Landstelle der Erde liegt und für seinen extrem hohen Salzgehalt berühmt ist.",
      hu: "A Holt-tenger egy lefolyástalan sós tó a Föld legmélyebb szárazföldi pontján, amely extrém magas sótartalmáról híres.",
      ro: "Marea Moartă este un lac sărat fără scurgere, situat în cel mai jos punct terestru de pe Pământ, faimos pentru salinitatea sa extremă.",
      en: "The Dead Sea is an endorheic salt lake located at the lowest land elevation on Earth, famous for its extremely high salinity."
    },
    facts: {
      de: ["Tiefster Punkt der Erde", "Salzgehalt über 30 Prozent", "Kein Fischbestand", "Berühmt für Heilmittel"],
      hu: ["A Föld legmélyebb pontja", "Több mint 30 százalékos sótartalom", "Nincs benne hal", "Híres a gyógyhatású iszapjáról"],
      ro: ["Cel mai jos punct de pe Pământ", "Salinitate de peste 30 la sută", "Nu există pești", "Faimoasă pentru nămolul curativ"],
      en: ["Lowest point on Earth", "Salinity over 30 percent", "No fish population", "Famous for its healing mud"]
    }, image: "/poi-images/il-dead-sea-nature-v2.webp"},
  {
    id: "il-sea-of-galilee-nature-v2",
    type: "lake",
    parent: "IL-Z",
    coords: [35.58, 32.83],
    name: { de: "See Genezareth", hu: "Galileai-tenger", ro: "Marea Galileei", en: "Sea of Galilee" },
    description: {
      de: "Der See Genezareth ist der tiefstgelegene Süßwassersee der Erde und hat eine große historische und religiöse Bedeutung im Christentum.",
      hu: "A Galileai-tenger a Föld legalacsonyabban fekvő édesvizű tava, amely hatalmas történelmi és vallási jelentőséggel bír a kereszténységben.",
      ro: "Marea Galileei este cel mai jos lac cu apă dulce de pe Pământ și are o mare importanță istorică și religioasă în creștinism.",
      en: "The Sea of Galilee is the lowest freshwater lake on Earth and holds great historical and religious significance in Christianity."
    },
    facts: {
      de: ["Tiefster Süßwassersee", "Wichtiger Ort im Neuen Testament", "Israels größtes Trinkwasserreservoir", "Umgrenzt von Bergen"],
      hu: ["A legmélyebben fekvő édesvizű tó", "Fontos helyszín az Újszövetségben", "Izrael legnagyobb ivóvíztározója", "Hegyek veszik körül"],
      ro: ["Cel mai jos lac de apă dulce", "Loc important în Noul Testament", "Cel mai mare rezervor de apă potabilă", "Înconjurat de munți"],
      en: ["Lowest freshwater lake", "Important site in the New Testament", "Israel's largest drinking water reservoir", "Surrounded by mountains"]
    }, image: "/poi-images/il-sea-of-galilee-nature-v2.webp"},
  {
    id: "il-mount-hermon-nature-v2",
    type: "mountain",
    parent: "IL-Z",
    coords: [35.78, 33.3],
    name: { de: "Berg Hermon", hu: "Hermon-hegy", ro: "Muntele Hermon", en: "Mount Hermon" },
    description: {
      de: "Der Berg Hermon ist das höchste Gebirge in Israel und bietet im Winter das einzige Skigebiet des Landes.",
      hu: "A Hermon-hegy Izrael legmagasabb hegysége, amely télen az ország egyetlen síterepének ad otthont.",
      ro: "Muntele Hermon este cel mai înalt lanț muntos din Israel și oferă singura stațiune de schi a țării pe timp de iarnă.",
      en: "Mount Hermon is the highest mountain range in Israel and features the country's only ski resort during the winter."
    },
    facts: {
      de: ["Höchster Berg Israels", "Beherbergt ein Skigebiet", "Wichtige Wasserquelle", "Grenzgebiet zu Syrien"],
      hu: ["Izrael legmagasabb hegye", "Síközponttal rendelkezik", "Fontos vízforrás", "Szíria határvidékén fekszik"],
      ro: ["Cel mai înalt munte din Israel", "Găzduiește o stațiune de schi", "Sursă importantă de apă", "La granița cu Siria"],
      en: ["Highest mountain in Israel", "Home to a ski resort", "Important water source", "On the border with Syria"]
    }, image: "/poi-images/il-mount-hermon-nature-v2.webp"},
  {
    id: "il-jordan-river-nature-v2",
    type: "river",
    parent: "IL-Z",
    coords: [35.56, 32.0],
    name: { de: "Jordan", hu: "Jordán folyó", ro: "Râul Iordan", en: "Jordan River" },
    description: {
      de: "Der Jordan ist ein historisch und religiös bedeutender Fluss, der durch das Jordantal fließt und in das Tote Meer mündet.",
      hu: "A Jordán folyó történelmi és vallási szempontból is jelentős folyó, amely a Jordán-völgyön keresztül folyik és a Holt-tengerbe ömlik.",
      ro: "Iordanul este un râu cu o semnificație istorică și religioasă profundă, care curge prin Valea Iordanului și se varsă în Marea Moartă.",
      en: "The Jordan River is a historically and religiously significant river that flows through the Jordan Valley and empties into the Dead Sea."
    },
    facts: {
      de: ["Mündet in das Tote Meer", "Natürliche Grenze", "Länge von über 250 km", "Ort der Taufe Jesu"],
      hu: ["A Holt-tengerbe ömlik", "Természetes határvonal", "Több mint 250 km hosszú", "Jézus megkeresztelkedésének helye"],
      ro: ["Se varsă în Marea Moartă", "Graniță naturală", "Lungime de peste 250 km", "Locul botezului lui Iisus"],
      en: ["Empties into the Dead Sea", "Natural border", "Over 250 km long", "Site of the baptism of Jesus"]
    }, image: "/poi-images/il-jordan-river-nature-v2.webp"},
  {
    id: "il-ein-gedi-nature-v2",
    type: "national-park",
    parent: "IL-D",
    coords: [35.39, 31.46],
    name: { de: "Nationalpark En Gedi", hu: "Én-Gedi Nemzeti Park", ro: "Parcul Național Ein Gedi", en: "Ein Gedi Nature Reserve" },
    description: {
      de: "En Gedi ist eine grüne Oase in der Judäischen Wüste mit Wasserfällen, Quellen und einer reichen Tierwelt nahe dem Toten Meer.",
      hu: "Én-Gedi egy zöldellő oázis a Júdeai-sivatagban, amely vízeséseivel, forrásaival és gazdag vadvilágával a Holt-tenger közelében található.",
      ro: "Ein Gedi este o oază verde în deșertul Iudeei, cu cascade, izvoare și o faună bogată în apropierea Mării Moarte.",
      en: "Ein Gedi is a verdant oasis in the Judean Desert, featuring waterfalls, springs, and abundant wildlife near the Dead Sea."
    },
    facts: {
      de: ["Wüstenoase", "Beliebt für Wanderungen", "Heimat von Steinböcken", "Biblischer Zufluchtsort"],
      hu: ["Sivatagi oázis", "Népszerű túrahelyszín", "Kőszáli kecskék otthona", "Bibliai menedékhely"],
      ro: ["Oază în deșert", "Populară pentru drumeții", "Casa ibecșilor", "Refugiu biblic"],
      en: ["Desert oasis", "Popular for hiking", "Home to ibexes", "Biblical refuge"]
    }, image: "/poi-images/il-ein-gedi-nature-v2.webp"},
  {
    id: "il-mount-carmel-nature-v2",
    type: "mountain",
    parent: "IL-HA",
    coords: [35.03, 32.73],
    name: { de: "Karmelgebirge", hu: "Kármel-hegy", ro: "Muntele Carmel", en: "Mount Carmel" },
    description: {
      de: "Das Karmelgebirge ist ein grüner Küstengebirgszug im Nordwesten Israels, der für seine dichten Wälder und reiche Flora bekannt ist.",
      hu: "A Kármel-hegy egy zöldellő tengerparti hegység Izrael északnyugati részén, amely sűrű erdeiről és gazdag növényvilágáról ismert.",
      ro: "Muntele Carmel este un lanț muntos de coastă verde din nord-vestul Israelului, cunoscut pentru pădurile sale dense și flora bogată.",
      en: "Mount Carmel is a lush coastal mountain range in northwestern Israel, known for its dense forests and rich flora."
    },
    facts: {
      de: ["Immergrüne Vegetation", "UNESCO-Biosphärenreservat", "Bedeutend im Alten Testament", "Reicht bis ans Meer"],
      hu: ["Örökzöld növényzet", "UNESCO bioszféra-rezervátum", "Jelentős az Ószövetségben", "Egészen a tengerig ér"],
      ro: ["Vegetație veșnic verde", "Rezervație a biosferei UNESCO", "Semnificativ în Vechiul Testament", "Ajunge până la mare"],
      en: ["Evergreen vegetation", "UNESCO Biosphere Reserve", "Significant in the Old Testament", "Reaches the sea"]
    }, image: "/poi-images/il-mount-carmel-nature-v2.webp"},
  {
    id: "il-yehudiya-forest-nature-v2",
    type: "forest",
    parent: "IL-Z",
    coords: [35.68, 32.92],
    name: { de: "Naturschutzgebiet Jehudija", hu: "Jehudija Erdőrezervátum", ro: "Rezervația Yehudiya", en: "Yehudiya Forest Reserve" },
    description: {
      de: "Dieses Reservat in den Golanhöhen umfasst tiefe Schluchten, Eichenwälder und den berühmten Hexagon-Pool mit seinen Basaltsäulen.",
      hu: "Ez a Golán-fennsíkon található rezervátum mély szurdokokat, tölgyerdőket és a híres, bazaltoszlopokkal övezett Hatszögletű-medencét foglalja magában.",
      ro: "Această rezervație din Înălțimile Golan include defilee adânci, păduri de stejari și faimoasa piscină hexagonală cu coloane de bazalt.",
      en: "This reserve in the Golan Heights encompasses deep canyons, oak forests, and the famous Hexagon Pool with its basalt columns."
    },
    facts: {
      de: ["Spektakuläre Basaltsäulen", "Zahlreiche Wasserfälle", "Tiefe Schluchten", "Natürliche Schwimmbecken"],
      hu: ["Látványos bazaltoszlopok", "Számos vízesés", "Mély szurdokok", "Természetes medencék"],
      ro: ["Coloane spectaculoase de bazalt", "Numeroase cascade", "Defilee adânci", "Piscine naturale"],
      en: ["Spectacular basalt columns", "Numerous waterfalls", "Deep canyons", "Natural pools"]
    }, image: "/poi-images/il-yehudiya-forest-nature-v2.webp"},
  {
    id: "il-banias-nature-v2",
    type: "national-park",
    parent: "IL-Z",
    coords: [35.69, 33.24],
    name: { de: "Banias-Naturschutzgebiet", hu: "Baniasz Nemzeti Park", ro: "Parcul Național Banias", en: "Banias Nature Reserve" },
    description: {
      de: "Banias ist bekannt für seine sprudelnden Quellen, antiken Ruinen und einen beeindruckenden Wasserfall an den Hängen des Hermon.",
      hu: "Baniasz a Hermon-hegy lejtőin fakadó bővizű forrásairól, ókori romjairól és lenyűgöző vízeséséről híres.",
      ro: "Banias este renumit pentru izvoarele sale abundente, ruinele antice și o cascadă impresionantă pe versanții Muntelui Hermon.",
      en: "Banias is known for its abundant springs, ancient ruins, and a stunning waterfall on the slopes of Mount Hermon."
    },
    facts: {
      de: ["Größter Wasserfall Israels", "Antike Tempelruinen", "Quelle des Jordan", "Üppige Vegetation"],
      hu: ["Izrael legnagyobb vízesése", "Ókori templomromok", "A Jordán folyó egyik forrása", "Buja növényzet"],
      ro: ["Cea mai mare cascadă din Israel", "Ruine ale unor temple antice", "Sursa râului Iordan", "Vegetație luxuriantă"],
      en: ["Largest waterfall in Israel", "Ancient temple ruins", "Source of the Jordan River", "Lush vegetation"]
    }, image: "/poi-images/il-banias-nature-v2.webp"},
  {
    id: "il-yarkon-river-nature-v2",
    type: "river",
    parent: "IL-TA",
    coords: [34.77, 32.1],
    name: { de: "Jarkon-Fluss", hu: "Jarkon folyó", ro: "Râul Yarkon", en: "Yarkon River" },
    description: {
      de: "Der Jarkon ist ein Küstenfluss, der durch das Zentrum von Tel Aviv fließt und von einem weitläufigen Stadtpark gesäumt wird.",
      hu: "A Jarkon egy tengerparti folyó, amely Tel-Aviv központján folyik keresztül, partjait egy hatalmas városi park szegélyezi.",
      ro: "Yarkon este un râu de coastă care curge prin centrul orașului Tel Aviv, înconjurat de un parc urban extins.",
      en: "The Yarkon is a coastal river that flows through the center of Tel Aviv, bordered by a vast urban park."
    },
    facts: {
      de: ["Fließt durch Tel Aviv", "Beliebtes Naherholungsgebiet", "Mündet ins Mittelmeer", "Historische Mühlen entlang des Flusses"],
      hu: ["Tel-Avivon folyik keresztül", "Népszerű pihenőövezet", "A Földközi-tengerbe ömlik", "Történelmi malmok a part mentén"],
      ro: ["Curge prin Tel Aviv", "Zonă populară de recreere", "Se varsă în Marea Mediterană", "Mori istorice de-a lungul râului"],
      en: ["Flows through Tel Aviv", "Popular recreation area", "Empties into the Mediterranean Sea", "Historical mills along the river"]
    }, image: "/poi-images/il-yarkon-river-nature-v2.webp"},
  {
    id: "il-mount-meron-nature-v2",
    type: "mountain",
    parent: "IL-Z",
    coords: [35.41, 32.99],
    name: { de: "Berg Meron", hu: "Meron-hegy", ro: "Muntele Meron", en: "Mount Meron" },
    description: {
      de: "Der Berg Meron in Galiläa ist der höchste Berg, der vollständig innerhalb der international anerkannten Grenzen Israels liegt.",
      hu: "A galileai Meron-hegy a legmagasabb olyan csúcs, amely teljes egészében Izrael nemzetközileg elismert határain belül fekszik.",
      ro: "Muntele Meron din Galileea este cel mai înalt munte aflat în întregime în granițele recunoscute internațional ale Israelului.",
      en: "Mount Meron in Galilee is the highest mountain located entirely within the internationally recognized borders of Israel."
    },
    facts: {
      de: ["Über 1200 Meter hoch", "Wichtiges Naturschutzgebiet", "Beliebt für Pilgerreisen", "Dichte Eichenwälder"],
      hu: ["Több mint 1200 méter magas", "Fontos természetvédelmi terület", "Zarándoklatok kedvelt helyszíne", "Sűrű tölgyerdők borítják"],
      ro: ["Peste 1200 de metri înălțime", "Importantă rezervație naturală", "Popular pentru pelerinaje", "Păduri dense de stejari"],
      en: ["Over 1200 meters high", "Important nature reserve", "Popular for pilgrimages", "Dense oak forests"]
    }, image: "/poi-images/il-mount-meron-nature-v2.webp"},
  {
    id: "il-hula-valley-nature-v2",
    type: "national-park",
    parent: "IL-Z",
    coords: [35.61, 33.1],
    name: { de: "Hula-Naturschutzgebiet", hu: "Hula-völgy Nemzeti Park", ro: "Rezervația Hula", en: "Hula Nature Reserve" },
    description: {
      de: "Das Hula-Tal ist ein Feuchtgebiet von globaler Bedeutung, das Millionen von Zugvögeln auf ihrer Reise zwischen Europa und Afrika als Rastplatz dient.",
      hu: "A Hula-völgy egy globális jelentőségű vizenyős terület, amely vándormadarak millióinak szolgál pihenőhelyül az Európa és Afrika közötti útjukon.",
      ro: "Valea Hula este o zonă umedă de importanță globală, care servește drept loc de popas pentru milioane de păsări migratoare.",
      en: "The Hula Valley is a globally significant wetland that serves as a resting spot for millions of migratory birds traveling between Europe and Africa."
    },
    facts: {
      de: ["Paradies für Vogelbeobachter", "Bedeutende Feuchtgebiete", "Heimat seltener Tierarten", "Erfolgreich renaturiert"],
      hu: ["A madármegfigyelők paradicsoma", "Jelentős vizes élőhelyek", "Ritka állatfajok otthona", "Sikeresen helyreállított terület"],
      ro: ["Paradis pentru ornitologi", "Zone umede importante", "Găzduiește specii rare", "Zonă renaturată cu succes"],
      en: ["Birdwatcher's paradise", "Significant wetlands", "Home to rare animal species", "Successfully restored area"]
    }, image: "/poi-images/il-hula-valley-nature-v2.webp"},
  {
    id: "il-carmel-forest-nature-v2",
    type: "forest",
    parent: "IL-HA",
    coords: [35.01, 32.71],
    name: { de: "Karmel-Wald", hu: "Kármel-erdő", ro: "Pădurea Carmel", en: "Carmel Forest" },
    description: {
      de: "Der Karmel-Wald ist das größte Waldgebiet Israels, das sich über das Karmelgebirge erstreckt und für seine Pinien- und Eichenbestände bekannt ist.",
      hu: "A Kármel-erdő Izrael legnagyobb összefüggő erdősége, amely a Kármel-hegységen húzódik végig, és fenyő- valamint tölgyfáiról ismert.",
      ro: "Pădurea Carmel este cea mai mare zonă împădurită din Israel, extinzându-se pe Muntele Carmel și fiind cunoscută pentru pinii și stejarii săi.",
      en: "Carmel Forest is the largest forested area in Israel, stretching across Mount Carmel and known for its pine and oak trees."
    },
    facts: {
      de: ["Größter Wald in Israel", "Beliebt für Picknicks", "Umfangreiches Wegenetz", "Heimat von Wildschweinen"],
      hu: ["Izrael legnagyobb erdeje", "Népszerű piknikezőhely", "Kiterjedt túraútvonal-hálózat", "Vaddisznók élőhelye"],
      ro: ["Cea mai mare pădure din Israel", "Populară pentru picnicuri", "Rețea extinsă de trasee", "Habitat pentru mistreți"],
      en: ["Largest forest in Israel", "Popular for picnics", "Extensive trail network", "Habitat for wild boars"]
    }, image: "/poi-images/il-carmel-forest-nature-v2.webp"},
  {
    id: "il-dan-river-nature-v2",
    type: "river",
    parent: "IL-Z",
    coords: [35.65, 33.24],
    name: { de: "Dan", hu: "Dán folyó", ro: "Râul Dan", en: "Dan River" },
    description: {
      de: "Der Dan ist der größte Quellfluss des Jordan, der aus starken, eiskalten Quellen im Norden des Landes entspringt.",
      hu: "A Dán a Jordán legnagyobb forrásfolyója, amely az ország északi részén található bővizű, jéghideg forrásokból ered.",
      ro: "Râul Dan este cel mai mare afluent al Iordanului, izvorând din izvoare puternice și reci din nordul țării.",
      en: "The Dan River is the largest tributary of the Jordan River, originating from strong, ice-cold springs in the north of the country."
    },
    facts: {
      de: ["Größter Quellfluss des Jordan", "Sehr sauberes Wasser", "Dicht bewachsenes Ufer", "Wichtige Trinkwasserquelle"],
      hu: ["A Jordán legbővizűbb ága", "Nagyon tiszta vizű", "Sűrű növényzet a parton", "Fontos ivóvízforrás"],
      ro: ["Cel mai mare afluent al Iordanului", "Apă foarte curată", "Maluri dens împădurite", "Sursă importantă de apă potabilă"],
      en: ["Largest source of the Jordan River", "Very clean water", "Densely vegetated banks", "Important source of drinking water"]
    }, image: "/poi-images/il-dan-river-nature-v2.webp"},
  {
    id: "il-mount-arbel-nature-v2",
    type: "mountain",
    parent: "IL-Z",
    coords: [35.49, 32.82],
    name: { de: "Berg Arbel", hu: "Arbel-hegy", ro: "Muntele Arbel", en: "Mount Arbel" },
    description: {
      de: "Der Berg Arbel erhebt sich mit steilen Klippen über dem See Genezareth und bietet eine spektakuläre Aussicht auf die gesamte Region Galiläa.",
      hu: "Az Arbel-hegy meredek szikláival magasodik a Galileai-tenger fölé, lenyűgöző kilátást nyújtva egész Galileára.",
      ro: "Muntele Arbel se înalță cu stânci abrupte deasupra Mării Galileei, oferind o vedere spectaculoasă asupra întregii regiuni Galileea.",
      en: "Mount Arbel rises with steep cliffs over the Sea of Galilee, offering a spectacular view of the entire Galilee region."
    },
    facts: {
      de: ["Beeindruckende Klippen", "Blick auf den See Genezareth", "Historische Höhlenfestungen", "Beliebtes Wanderziel"],
      hu: ["Látványos sziklafalak", "Kilátás a Galileai-tengerre", "Történelmi barlangerődök", "Népszerű túracélpont"],
      ro: ["Stânci impresionante", "Vedere spre Marea Galileei", "Cetăți rupestre istorice", "Destinație populară pentru drumeții"],
      en: ["Impressive cliffs", "View of the Sea of Galilee", "Historical cave fortresses", "Popular hiking destination"]
    }, image: "/poi-images/il-mount-arbel-nature-v2.webp"},
  {
    id: "il-yatir-forest-nature-v2",
    type: "forest",
    parent: "IL-D",
    coords: [35.06, 31.34],
    name: { de: "Jatir-Wald", hu: "Jatir-erdő", ro: "Pădurea Yatir", en: "Yatir Forest" },
    description: {
      de: "Der Jatir-Wald ist der größte künstlich angelegte Wald in Israel und liegt am Rande der Negev-Wüste.",
      hu: "A Jatir-erdő Izrael legnagyobb mesterségesen telepített erdeje, amely a Negev-sivatag peremén fekszik.",
      ro: "Pădurea Yatir este cea mai mare pădure plantată artificial din Israel, situată la marginea deșertului Negev.",
      en: "Yatir Forest is the largest planted forest in Israel, located on the edge of the Negev Desert."
    },
    facts: {
      de: ["Größter gepflanzter Wald", "Bollwerk gegen die Wüste", "Millionen von Bäumen", "Beherbergt ein Weingut"],
      hu: ["A legnagyobb telepített erdő", "Védvonal a sivatag ellen", "Fák milliói alkotják", "Egy borászat is található itt"],
      ro: ["Cea mai mare pădure plantată", "Barieră împotriva deșertului", "Milioane de copaci", "Găzduiește o cramă"],
      en: ["Largest planted forest", "Bulwark against the desert", "Millions of trees", "Home to a winery"]
    }, image: "/poi-images/il-yatir-forest-nature-v2.webp"},
  {
    id: "il-snir-stream-nature-v2",
    type: "national-park",
    parent: "IL-Z",
    coords: [35.62, 33.22],
    name: { de: "Snir-Naturschutzgebiet", hu: "Snir Nemzeti Park", ro: "Rezervația Snir", en: "Snir Stream Nature Reserve" },
    description: {
      de: "Der Snir-Bach (Hasbani) bietet das ganze Jahr über fließendes Wasser und ist von dichten, dschungelartigen Wäldern umgeben.",
      hu: "A Snir-patak (Hasbani) egész évben bővizű, és sűrű, dzsungelszerű erdők veszik körül az északi országrészben.",
      ro: "Pârâul Snir (Hasbani) are apă curgătoare pe tot parcursul anului și este înconjurat de păduri dense, asemănătoare unei jungle.",
      en: "The Snir Stream (Hasbani) features flowing water year-round and is surrounded by dense, jungle-like forests."
    },
    facts: {
      de: ["Längster Quellfluss des Jordan", "Dichte Ufervegetation", "Ganzjährig fließendes Wasser", "Wanderwege durchs Wasser"],
      hu: ["A Jordán leghosszabb forrásága", "Sűrű parti növényzet", "Egész évben folyó víz", "A vízben haladó túraútvonalak"],
      ro: ["Cel mai lung afluent al Iordanului", "Vegetație riverană densă", "Apă curgătoare tot anul", "Trasee de drumeție prin apă"],
      en: ["Longest source of the Jordan River", "Dense riparian vegetation", "Year-round flowing water", "Hiking trails through the water"]
    }, image: "/poi-images/il-snir-stream-nature-v2.webp"},
  {
    id: "il-lake-ram-nature-v2",
    type: "lake",
    parent: "IL-Z",
    coords: [35.76, 33.23],
    name: { de: "Ram-See", hu: "Ram-tó", ro: "Lacul Ram", en: "Lake Ram" },
    description: {
      de: "Der Ram-See ist ein malerischer Kratersee vulkanischen Ursprungs in den nördlichen Golanhöhen, umgeben von Obstgärten.",
      hu: "A Ram-tó egy festői vulkáni krátertó a Golán-fennsík északi részén, amelyet gyümölcsöskertek öveznek.",
      ro: "Lacul Ram este un lac de crater pitoresc, de origine vulcanică, în nordul Înălțimilor Golan, înconjurat de livezi.",
      en: "Lake Ram is a picturesque volcanic crater lake in the northern Golan Heights, surrounded by orchards."
    },
    facts: {
      de: ["Vulkanischer Kratersee", "Liegt in den Golanhöhen", "Von Apfelplantagen umgeben", "Kein natürlicher Abfluss"],
      hu: ["Vulkáni krátertó", "A Golán-fennsíkon fekszik", "Almaültetvények veszik körül", "Nincs természetes lefolyása"],
      ro: ["Lac de crater vulcanic", "Situat în Înălțimile Golan", "Înconjurat de livezi de meri", "Fără scurgere naturală"],
      en: ["Volcanic crater lake", "Located in the Golan Heights", "Surrounded by apple orchards", "No natural outlet"]
    }, image: "/poi-images/il-lake-ram-nature-v2.webp"},
  {
    id: "il-mount-gilboa-nature-v2",
    type: "mountain",
    parent: "IL-Z",
    coords: [35.41, 32.53],
    name: { de: "Gilboa-Gebirge", hu: "Gilboa-hegy", ro: "Muntele Gilboa", en: "Mount Gilboa" },
    description: {
      de: "Das Gilboa-Gebirge ist ein Höhenzug, der das Jesreeletal überblickt und im Frühling für seine prächtige Schwertlilienblüte bekannt ist.",
      hu: "A Gilboa-hegység a Jezréel-völgy fölé magasodik, és tavasszal a látványos nősziromvirágzásáról nevezetes.",
      ro: "Muntele Gilboa este o creastă care domină Valea Izreel și este cunoscut primăvara pentru înflorirea magnifică a irișilor.",
      en: "Mount Gilboa is a ridge overlooking the Jezreel Valley, famous in the spring for its magnificent iris blossoms."
    },
    facts: {
      de: ["Berühmte Irisblüte im Frühling", "Schauplatz biblischer Schlachten", "Blick auf das Jesreeletal", "Beliebte Panoramastraße"],
      hu: ["Híres tavaszi nősziromvirágzás", "Bibliai csaták helyszíne", "Kilátás a Jezréel-völgyre", "Népszerű panorámaút"],
      ro: ["Înflorirea faimoasă a irișilor", "Locul unor bătălii biblice", "Vedere spre Valea Izreel", "Drum panoramic popular"],
      en: ["Famous iris blossom in spring", "Site of biblical battles", "Overlooks the Jezreel Valley", "Popular scenic route"]
    }, image: "/poi-images/il-mount-gilboa-nature-v2.webp"},
  {
    id: "il-ben-shemen-forest-nature-v2",
    type: "forest",
    parent: "IL-M",
    coords: [34.95, 31.95],
    name: { de: "Ben-Schemen-Wald", hu: "Ben Semen-erdő", ro: "Pădurea Ben Shemen", en: "Ben Shemen Forest" },
    description: {
      de: "Der Ben-Schemen-Wald ist einer der größten Wälder Zentralisraels und bietet eine grüne Lunge mit zahlreichen archäologischen Stätten.",
      hu: "A Ben Semen-erdő Közép-Izrael egyik legnagyobb erdeje, amely zöld tüdőként szolgál és számos régészeti lelőhelyet rejt.",
      ro: "Pădurea Ben Shemen este una dintre cele mai mari păduri din centrul Israelului, oferind un plămân verde cu numeroase situri arheologice.",
      en: "Ben Shemen Forest is one of the largest forests in central Israel, providing a green lung with numerous archaeological sites."
    },
    facts: {
      de: ["Grüne Lunge Zentralisraels", "Zahlreiche Radwege", "Beherbergt antike Gräber", "Sehr beliebt an Wochenenden"],
      hu: ["Közép-Izrael zöld tüdeje", "Számos kerékpárút", "Ókori sírokat rejt", "Hétvégén nagyon népszerű"],
      ro: ["Plămânul verde al centrului Israelului", "Numeroase piste de biciclete", "Găzduiește morminte antice", "Foarte populară la sfârșit de săptămână"],
      en: ["Green lung of central Israel", "Numerous cycling trails", "Houses ancient tombs", "Very popular on weekends"]
    }, image: "/poi-images/il-ben-shemen-forest-nature-v2.webp"},
  {
    id: "il-alexander-river-nature-v2",
    type: "river",
    parent: "IL-M",
    coords: [34.87, 32.39],
    name: { de: "Alexander-Fluss", hu: "Alexander folyó", ro: "Râul Alexander", en: "Alexander River" },
    description: {
      de: "Der Alexander-Fluss fließt in die Mittelmeerküste und ist besonders bekannt für seine Population von afrikanischen Weichschildkröten.",
      hu: "Az Alexander folyó a Földközi-tengerbe torkollik, és különösen az itt élő afrikai lágyhéjú teknősök populációjáról ismert.",
      ro: "Râul Alexander se varsă în coasta mediteraneană și este cunoscut în special pentru populația sa de broaște țestoase africane cu carapace moale.",
      en: "The Alexander River flows into the Mediterranean coast and is especially known for its population of African softshell turtles."
    },
    facts: {
      de: ["Heimat von Weichschildkröten", "Mündet ins Mittelmeer", "Erfolgreich gereinigt", "Schöne Uferparks"],
      hu: ["Lágyhéjú teknősök otthona", "A Földközi-tengerbe ömlik", "Sikeresen megtisztított folyó", "Szép parti parkok"],
      ro: ["Casa broaștelor țestoase cu carapace moale", "Se varsă în Marea Mediterană", "Râu curățat cu succes", "Parcuri riverane frumoase"],
      en: ["Home to softshell turtles", "Empties into the Mediterranean Sea", "Successfully cleaned river", "Beautiful riverside parks"]
    }
  }
];
