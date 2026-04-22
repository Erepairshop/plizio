import type { POI } from "./poi";

export const albaniaCountry: POI = {
  id: "country-albania",
  name: {
    de: "Albanien",
    hu: "Albánia",
    ro: "Albania",
    en: "Albania"
  },
  shortDesc: {
    de: "Albanien ist ein Land auf der Balkanhalbinsel in Südosteuropa.",
    hu: "Albánia a Balkán-félszigeten, Délkelet-Európában található.",
    ro: "Albania este o țară din Peninsula Balcanică, în Europa de Sud-Est.",
    en: "Albania is a country on the Balkan Peninsula in Southeastern Europe."
  },
  longDesc: {
    de: "Albanien ist reich an Geschichte und Naturschönheiten, mit malerischen Stränden, schroffen Bergen und einer einzigartigen Kultur.",
    hu: "Albánia gazdag történelemmel és természeti csodákkal rendelkezik, festői tengerpartokkal és lenyűgöző hegyekkel.",
    ro: "Albania este bogată în istorie și frumuseți naturale, având plaje pitorești, munți accidentați și o cultură unică.",
    en: "Albania is rich in history and natural beauty, featuring picturesque beaches, rugged mountains, and a unique culture."
  },
  type: "country",
  coords: [41.1533, 20.1683],
  parent: "europe",
  facts: [
    "Tirana is the capital.",
    "Known for its thousands of bunkers.",
    "Mother Teresa is of Albanian descent."
  ],
  image: "/geo-images/albania/country-albania.webp"
};

export const albaniaCities: POI[] = [
  {
    id: "city-tirana",
    name: { de: "Tirana", hu: "Tirana", ro: "Tirana", en: "Tirana" },
    shortDesc: { de: "Die Hauptstadt", hu: "A főváros", ro: "Capitala", en: "The capital" },
    longDesc: { de: "Die pulsierende Hauptstadt Albaniens.", hu: "Albánia lüktető fővárosa.", ro: "Capitala vibrantă a Albaniei.", en: "The vibrant capital of Albania." },
    type: "city",
    coords: [41.3275, 19.8187],
    parent: "country-albania"
  },
  {
    id: "city-durres",
    name: { de: "Durrës", hu: "Durrës", ro: "Durrës", en: "Durrës" },
    shortDesc: { de: "Historische Hafenstadt", hu: "Történelmi kikötőváros", ro: "Oraș port istoric", en: "Historic port city" },
    longDesc: { de: "Wichtige Hafenstadt mit römischem Amphitheater.", hu: "Fontos kikötőváros római amfiteátrummal.", ro: "Port important cu amfiteatru roman.", en: "Important port city with a Roman amphitheater." },
    type: "city",
    coords: [41.3246, 19.4558],
    parent: "country-albania"
  },
  {
    id: "city-vlore",
    name: { de: "Vlora", hu: "Vlora", ro: "Vlora", en: "Vlorë" },
    shortDesc: { de: "Stadt der Unabhängigkeit", hu: "A függetlenség városa", ro: "Orașul independenței", en: "City of Independence" },
    longDesc: { de: "Küstenstadt, in der die albanische Unabhängigkeit erklärt wurde.", hu: "Tengerparti város, ahol kikiáltották az albán függetlenséget.", ro: "Oraș de coastă unde a fost declarată independența.", en: "Coastal city where independence was declared." },
    type: "city",
    coords: [41.4653, 19.4927],
    parent: "country-albania"
  },
  {
    id: "city-shkoder",
    name: { de: "Shkodra", hu: "Shkodra", ro: "Shkodër", en: "Shkodër" },
    shortDesc: { de: "Kulturzentrum im Norden", hu: "Észak kulturális központja", ro: "Centru cultural în nord", en: "Cultural center in the north" },
    longDesc: { de: "Alte Stadt am Skutarisee mit der Festung Rozafa.", hu: "Ősi város a Shkodrai-tó partján a Rozafa várával.", ro: "Oraș vechi pe lacul Skadar, cu castelul Rozafa.", en: "Ancient city on Lake Skadar with Rozafa Castle." },
    type: "city",
    coords: [42.0683, 19.5126],
    parent: "country-albania"
  },
  {
    id: "city-berat",
    name: { de: "Berat", hu: "Berat", ro: "Berat", en: "Berat" },
    shortDesc: { de: "Stadt der 1000 Fenster", hu: "Az 1000 ablak városa", ro: "Orașul celor 1000 de ferestre", en: "City of 1000 windows" },
    longDesc: { de: "UNESCO-Weltkulturerbe mit osmanischer Architektur.", hu: "UNESCO Világörökség oszmán építészettel.", ro: "Patrimoniu UNESCO cu arhitectură otomană.", en: "UNESCO World Heritage site with Ottoman architecture." },
    type: "city",
    coords: [40.7049, 19.9497],
    parent: "country-albania"
  },
  {
    id: "city-gjirokaster",
    name: { de: "Gjirokastra", hu: "Gjirokastra", ro: "Gjirokastër", en: "Gjirokastër" },
    shortDesc: { de: "Stadt aus Stein", hu: "A kőből épült város", ro: "Orașul de piatră", en: "City of stone" },
    longDesc: { de: "Historische Stadt mit steilen Kopfsteinpflasterstraßen.", hu: "Történelmi város meredek macskaköves utcákkal.", ro: "Oraș istoric cu străzi abrupte pietruite.", en: "Historical city with steep cobblestone streets." },
    type: "city",
    coords: [40.0758, 20.1388],
    parent: "country-albania"
  },
  {
    id: "city-korce",
    name: { de: "Korça", hu: "Korça", ro: "Korcea", en: "Korçë" },
    shortDesc: { de: "Paris von Albanien", hu: "Albánia Párizsa", ro: "Parisul Albaniei", en: "Paris of Albania" },
    longDesc: { de: "Bekannt für Kultur, das erste albanische Schulhaus und Bier.", hu: "Híres kultúrájáról, az első iskoláról és a sörről.", ro: "Cunoscut pentru cultură, prima școală și bere.", en: "Known for culture, the first school, and beer." },
    type: "city",
    coords: [40.6141, 20.7778],
    parent: "country-albania"
  },
  {
    id: "city-elbasan",
    name: { de: "Elbasan", hu: "Elbasan", ro: "Elbasan", en: "Elbasan" },
    shortDesc: { de: "Stadt im Zentrum", hu: "Központi város", ro: "Oraș central", en: "Central city" },
    longDesc: { de: "Eine der größten Städte Albaniens, bekannt für ihre Burgmauer.", hu: "Albánia egyik legnagyobb városa, várfaláról ismert.", ro: "Unul dintre cele mai mari orașe, cunoscut pentru zidurile cetății.", en: "One of the largest cities, known for its castle walls." },
    type: "city",
    coords: [41.1125, 20.0822],
    parent: "country-albania"
  },
  {
    id: "city-fier",
    name: { de: "Fier", hu: "Fier", ro: "Fier", en: "Fier" },
    shortDesc: { de: "Industriestadt", hu: "Ipari város", ro: "Oraș industrial", en: "Industrial city" },
    longDesc: { de: "Wichtige Stadt für die Ölindustrie in der Nähe der Ruinen von Apollonia.", hu: "Fontos olajipari város Apollonia romjai közelében.", ro: "Oraș important pentru industria petrolieră, aproape de Apollonia.", en: "Important city for the oil industry near Apollonia." },
    type: "city",
    coords: [40.7239, 19.5561],
    parent: "country-albania"
  },
  {
    id: "city-sarande",
    name: { de: "Saranda", hu: "Saranda", ro: "Sarandë", en: "Sarandë" },
    shortDesc: { de: "Perle der Riviera", hu: "A Riviéra gyöngye", ro: "Perla Rivierei", en: "Pearl of the Riviera" },
    longDesc: { de: "Beliebter Badeort im Süden gegenüber von Korfu.", hu: "Népszerű déli üdülőhely Korfuval szemben.", ro: "Stațiune populară în sud, vizavi de Corfu.", en: "Popular southern resort town opposite Corfu." },
    type: "city",
    coords: [39.8730, 20.0053],
    parent: "country-albania"
  }
];

export const albaniaHistorical: POI[] = [
  {
    id: "hist-butrint",
    name: { de: "Butrint", hu: "Butrint", ro: "Butrint", en: "Butrint" },
    shortDesc: { de: "Antike Ruinen", hu: "Ősi romok", ro: "Ruine antice", en: "Ancient ruins" },
    longDesc: { de: "UNESCO-geschützte antike griechische und römische Stadt.", hu: "UNESCO által védett ősi görög és római város.", ro: "Oraș antic protejat de UNESCO.", en: "UNESCO-protected ancient Greek and Roman city." },
    type: "historical",
    coords: [39.7431, 20.0195],
    parent: "country-albania"
  },
  {
    id: "hist-apollonia",
    name: { de: "Apollonia", hu: "Apollonia", ro: "Apollonia", en: "Apollonia" },
    shortDesc: { de: "Griechische Kolonie", hu: "Görög kolónia", ro: "Colonie grecească", en: "Greek colony" },
    longDesc: { de: "Beeindruckende Ruinen einer alten Stadt nahe Fier.", hu: "Egy ősi város lenyűgöző romjai Fier közelében.", ro: "Ruine impresionante ale unui oraș antic.", en: "Impressive ruins of an ancient city near Fier." },
    type: "historical",
    coords: [40.7226, 19.4678],
    parent: "country-albania"
  },
  {
    id: "hist-rozafa",
    name: { de: "Burg Rozafa", hu: "Rozafa vára", ro: "Castelul Rozafa", en: "Rozafa Castle" },
    shortDesc: { de: "Festung von Shkodra", hu: "Shkodra erődje", ro: "Cetatea Shkodër", en: "Fortress of Shkodër" },
    longDesc: { de: "Burg mit Panoramablick und faszinierender Legende.", hu: "Panorámás kilátást nyújtó vár lenyűgöző legendával.", ro: "Castel cu vedere panoramică și legendă fascinantă.", en: "Castle with panoramic views and a fascinating legend." },
    type: "historical",
    coords: [42.0463, 19.4939],
    parent: "country-albania"
  },
  {
    id: "hist-kruje",
    name: { de: "Burg Kruja", hu: "Kruja vára", ro: "Castelul Krujë", en: "Krujë Castle" },
    shortDesc: { de: "Skanderbegs Festung", hu: "Szkanderbég erődje", ro: "Cetatea lui Skanderbeg", en: "Skanderbeg's Fortress" },
    longDesc: { de: "Historische Festung, die der osmanischen Belagerung widerstand.", hu: "Történelmi erőd, amely ellenállt az oszmán ostromnak.", ro: "Cetate istorică ce a rezistat asediului otoman.", en: "Historical fortress that withstood Ottoman siege." },
    type: "historical",
    coords: [41.5100, 19.7925],
    parent: "country-albania"
  },
  {
    id: "hist-gjirokaster-castle",
    name: { de: "Burg Gjirokastra", hu: "Gjirokastra vára", ro: "Castelul Gjirokastër", en: "Gjirokastër Castle" },
    shortDesc: { de: "Mächtige Zitadelle", hu: "Hatalmas fellegvár", ro: "Citadelă impunătoare", en: "Mighty citadel" },
    longDesc: { de: "Große Festung, die die Stadt überragt und ein Waffenmuseum beherbergt.", hu: "A város fölé magasodó nagy erőd, benne egy fegyvermúzeummal.", ro: "Fortăreață mare care domină orașul.", en: "Large fortress dominating the city, housing a weapons museum." },
    type: "historical",
    coords: [40.0736, 20.1352],
    parent: "country-albania"
  },
  {
    id: "hist-berat-castle",
    name: { de: "Burg Berat", hu: "Berat vára", ro: "Castelul Berat", en: "Berat Castle" },
    shortDesc: { de: "Bewohnte Burg", hu: "Lakott vár", ro: "Castel locuit", en: "Inhabited castle" },
    longDesc: { de: "Einzigartige Festung mit noch heute bewohnten Häusern und alten Kirchen.", hu: "Egyedülálló erőd a mai napig lakott házakkal és régi templomokkal.", ro: "Fortăreață unică cu case încă locuite.", en: "Unique fortress with still-inhabited houses and old churches." },
    type: "historical",
    coords: [40.7081, 19.9452],
    parent: "country-albania"
  },
  {
    id: "hist-ali-pasha-castle",
    name: { de: "Ali Pascha Burg", hu: "Ali Pasa vára", ro: "Castelul lui Ali Pașa", en: "Ali Pasha Castle" },
    shortDesc: { de: "Festung am Meer", hu: "Tengerparti erőd", ro: "Cetate la mare", en: "Fortress by the sea" },
    longDesc: { de: "Eindrucksvolle Festung auf einer kleinen Insel bei Butrint.", hu: "Lenyűgöző erőd egy kis szigeten Butrint közelében.", ro: "Fortăreață impresionantă pe o mică insulă lângă Butrint.", en: "Impressive fortress on a small island near Butrint." },
    type: "historical",
    coords: [39.7430, 19.9926],
    parent: "country-albania"
  },
  {
    id: "hist-skanderbeg-square",
    name: { de: "Skanderbeg-Platz", hu: "Szkanderbég tér", ro: "Piața Skanderbeg", en: "Skanderbeg Square" },
    shortDesc: { de: "Zentraler Platz", hu: "Központi tér", ro: "Piața centrală", en: "Central square" },
    longDesc: { de: "Der Hauptplatz von Tirana, benannt nach dem Nationalhelden.", hu: "Tirana főtere, a nemzeti hősről elnevezve.", ro: "Piața principală din Tirana.", en: "The main plaza of Tirana, named after the national hero." },
    type: "historical",
    coords: [41.3278, 19.8183],
    parent: "country-albania"
  },
  {
    id: "hist-ethem-bey",
    name: { de: "Et'hem-Bey-Moschee", hu: "Ethem Bey mecset", ro: "Moscheea Et'hem Bey", en: "Et'hem Bey Mosque" },
    shortDesc: { de: "Historische Moschee", hu: "Történelmi mecset", ro: "Moschee istorică", en: "Historic mosque" },
    longDesc: { de: "Eine der ältesten und schönsten Moscheen in Tirana.", hu: "Tirana egyik legrégebbi és legszebb mecsete.", ro: "Una dintre cele mai vechi și frumoase moschei din Tirana.", en: "One of the oldest and most beautiful mosques in Tirana." },
    type: "historical",
    coords: [41.3277, 19.8194],
    parent: "country-albania"
  }
];

export const albaniaNature: POI[] = [
  {
    id: "nat-blue-eye",
    name: { de: "Blaues Auge", hu: "Kék Szem", ro: "Ochiul Albastru", en: "Blue Eye" },
    shortDesc: { de: "Tiefe Wasserquelle", hu: "Mély vízforrás", ro: "Izvor adânc", en: "Deep water spring" },
    longDesc: { de: "Naturphänomen mit faszinierendem blauen Wasser.", hu: "Természeti jelenség lenyűgöző kék vízzel.", ro: "Fenomen natural cu apă albastră fascinantă.", en: "Natural phenomenon with fascinating blue water." },
    type: "nature",
    coords: [39.9234, 20.1923],
    parent: "country-albania"
  },
  {
    id: "nat-lake-ohrid",
    name: { de: "Ohridsee", hu: "Ohridi-tó", ro: "Lacul Ohrid", en: "Lake Ohrid" },
    shortDesc: { de: "Tiefster See des Balkans", hu: "A Balkán legmélyebb tava", ro: "Cel mai adânc lac din Balcani", en: "Deepest lake in the Balkans" },
    longDesc: { de: "Wunderschöner See, der Albanien und Nordmazedonien trennt.", hu: "Gyönyörű tó, amely elválasztja Albániát és Észak-Macedóniát.", ro: "Lac superb care separă Albania și Macedonia de Nord.", en: "Beautiful lake separating Albania and North Macedonia." },
    type: "nature",
    coords: [41.0366, 20.7161],
    parent: "country-albania"
  },
  {
    id: "nat-valbone",
    name: { de: "Valbonatal", hu: "Valbona-völgy", ro: "Valea Valbonei", en: "Valbonë Valley" },
    shortDesc: { de: "Albanische Alpen", hu: "Albán-Alpok", ro: "Alpii Albanezi", en: "Albanian Alps" },
    longDesc: { de: "Atemberaubender Nationalpark mit spektakulären Berglandschaften.", hu: "Lélegzetelállító nemzeti park látványos hegyvidéki tájakkal.", ro: "Parc național uimitor cu peisaje montane spectaculoase.", en: "Stunning national park with spectacular mountain scenery." },
    type: "nature",
    coords: [42.4410, 19.8920],
    parent: "country-albania"
  },
  {
    id: "nat-theth",
    name: { de: "Theth-Nationalpark", hu: "Theth Nemzeti Park", ro: "Parcul Național Theth", en: "Theth National Park" },
    shortDesc: { de: "Bergparadies", hu: "Hegyvidéki paradicsom", ro: "Paradis montan", en: "Mountain paradise" },
    longDesc: { de: "Abgelegenes Tal in den Alpen mit Wasserfällen und Wanderwegen.", hu: "Elszigetelt völgy az Alpokban vízesésekkel és túraútvonalakkal.", ro: "Vale izolată în Alpi cu cascade și trasee montane.", en: "Remote valley in the Alps with waterfalls and hiking trails." },
    type: "nature",
    coords: [42.3986, 19.7822],
    parent: "country-albania"
  },
  {
    id: "nat-lake-skadar",
    name: { de: "Skutarisee", hu: "Shkodrai-tó", ro: "Lacul Skadar", en: "Lake Skadar" },
    shortDesc: { de: "Größter See im Balkan", hu: "A Balkán legnagyobb tava", ro: "Cel mai mare lac din Balcani", en: "Largest lake in the Balkans" },
    longDesc: { de: "Wichtiger See für Zugvögel und die lokale Fischerei.", hu: "Fontos tó a vándormadarak és a helyi halászat számára.", ro: "Lac important pentru păsările migratoare și pescuitul local.", en: "Important lake for migratory birds and local fishing." },
    type: "nature",
    coords: [42.1794, 19.2974],
    parent: "country-albania"
  },
  {
    id: "nat-llogara",
    name: { de: "Llogara-Pass", hu: "Llogara-hágó", ro: "Pasul Llogara", en: "Llogara Pass" },
    shortDesc: { de: "Aussichtspunkt an der Küste", hu: "Tengerparti kilátópont", ro: "Punct de belvedere pe coastă", en: "Coastal viewpoint" },
    longDesc: { de: "Hoher Gebirgspass mit spektakulärem Blick auf das Ionische Meer.", hu: "Magas hegyi hágó látványos kilátással a Jón-tengerre.", ro: "Trecătoare înaltă cu o vedere spectaculoasă la Marea Ionică.", en: "High mountain pass with spectacular views of the Ionian Sea." },
    type: "nature",
    coords: [40.1983, 19.5854],
    parent: "country-albania"
  },
  {
    id: "nat-karavasta",
    name: { de: "Lagune von Karavasta", hu: "Karavasta-lagúna", ro: "Laguna Karavasta", en: "Karavasta Lagoon" },
    shortDesc: { de: "Größte Lagune", hu: "A legnagyobb lagúna", ro: "Cea mai mare lagună", en: "Largest lagoon" },
    longDesc: { de: "Die größte Lagune in Albanien, bekannt für Pelikane.", hu: "Albánia legnagyobb lagúnája, a pelikánokról ismert.", ro: "Cea mai mare lagună din Albania, cunoscută pentru pelicani.", en: "The largest lagoon in Albania, known for pelicans." },
    type: "nature",
    coords: [40.9231, 19.4975],
    parent: "country-albania"
  },
  {
    id: "nat-koman",
    name: { de: "Koman-Stausee", hu: "Koman-tó", ro: "Lacul Koman", en: "Lake Koman" },
    shortDesc: { de: "Malerischer Stausee", hu: "Festői víztározó", ro: "Lac de acumulare pitoresc", en: "Scenic reservoir" },
    longDesc: { de: "Stausee im Drin-Flusstal, oft mit norwegischen Fjorden verglichen.", hu: "A Drin folyó völgyében fekvő víztározó, gyakran a norvég fjordokhoz hasonlítják.", ro: "Lac de acumulare în valea râului Drin, adesea comparat cu fiordurile norvegiene.", en: "Reservoir in the Drin river valley, often compared to Norwegian fjords." },
    type: "nature",
    coords: [42.1075, 19.8272],
    parent: "country-albania"
  },
  {
    id: "nat-dajti",
    name: { de: "Berg Dajti", hu: "Dajti-hegy", ro: "Muntele Dajti", en: "Mount Dajti" },
    shortDesc: { de: "Hausberg von Tirana", hu: "Tirana házi hegye", ro: "Muntele din Tirana", en: "House mountain of Tirana" },
    longDesc: { de: "Beliebtes Ausflugsziel, erreichbar mit der längsten Seilbahn des Balkans.", hu: "Népszerű kirándulóhely, amely a Balkán leghosszabb felvonójával érhető el.", ro: "Destinație populară, accesibilă cu cea mai lungă telecabină din Balcani.", en: "Popular destination accessible by the longest cable car in the Balkans." },
    type: "nature",
    coords: [41.3653, 19.9294],
    parent: "country-albania"
  },
  {
    id: "nat-korab",
    name: { de: "Berg Korab", hu: "Korab-hegy", ro: "Muntele Korab", en: "Mount Korab" },
    shortDesc: { de: "Höchster Berg", hu: "Legmagasabb hegy", ro: "Cel mai înalt munte", en: "Highest mountain" },
    longDesc: { de: "Der höchste Gipfel Albaniens und Nordmazedoniens.", hu: "Albánia és Észak-Macedónia legmagasabb csúcsa.", ro: "Cel mai înalt vârf din Albania și Macedonia de Nord.", en: "The highest peak in Albania and North Macedonia." },
    type: "nature",
    coords: [41.7903, 20.5469],
    parent: "country-albania"
  },
  {
    id: "nat-osumi",
    name: { de: "Osum-Schlucht", hu: "Osum-kanyon", ro: "Canionul Osum", en: "Osum Canyon" },
    shortDesc: { de: "Spektakuläre Schlucht", hu: "Látványos kanyon", ro: "Canion spectaculos", en: "Spectacular canyon" },
    longDesc: { de: "Atemberaubende Flussschlucht mit steilen Felswänden, ideal für Rafting.", hu: "Lélegzetelállító folyami kanyon meredek sziklafalakkal, ideális raftinghoz.", ro: "Canion uimitor cu pereți abrupți de stâncă, ideal pentru rafting.", en: "Stunning river canyon with steep rock walls, ideal for rafting." },
    type: "nature",
    coords: [40.4851, 20.2520],
    parent: "country-albania"
  },
  {
    id: "nat-tomorr",
    name: { de: "Berg Tomorr", hu: "Tomorr-hegy", ro: "Muntele Tomorr", en: "Mount Tomorr" },
    shortDesc: { de: "Heiliger Berg", hu: "Szent hegy", ro: "Munte sacru", en: "Sacred mountain" },
    longDesc: { de: "Nationalpark und heiliger Berg für die Bektaschi.", hu: "Nemzeti park és szent hegy a bektasi rend számára.", ro: "Parc național și munte sacru pentru Bektashi.", en: "National park and sacred mountain for the Bektashi." },
    type: "nature",
    coords: [40.6319, 20.1558],
    parent: "country-albania"
  }
];

export const albaniaAllPoi: POI[] = [
  albaniaCountry,
  ...albaniaCities,
  ...albaniaHistorical,
  ...albaniaNature
];
