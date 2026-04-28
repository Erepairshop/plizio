
import { POI } from './poi';

export const sanmarinoLandscapes: POI[] = [
  {
    id: 'sm-landscape-monte-titano-park-extra',
    type: 'forest',
    parent: 'sm',
    coords: [12.4508, 43.9350],
    name: {
      de: 'Naturpark Monte Titano',
      en: 'Monte Titano Nature Park',
      hu: 'Monte Titano Natúrpark',
      ro: 'Parcul Natural Monte Titano',
    },
    description: {
      de: 'Ein geschütztes Gebiet, das den größten Teil des Monte Titano umfasst und eine reiche Flora und Fauna sowie Wanderwege bietet.',
      en: 'A protected area covering most of Monte Titano, offering rich flora and fauna, and hiking trails.',
      hu: 'A Monte Titano nagy részét lefedő védett terület, amely gazdag növény- és állatvilágot, valamint túraútvonalakat kínál.',
      ro: 'O zonă protejată care acoperă cea mai mare parte a Muntelui Titano, oferind o floră și faună bogată și trasee de drumeții.',
    },
    facts: {
      de: ['Teil des UNESCO-Weltkulturerbes', 'Beherbergt viele Vogelarten', 'Bietet atemberaubende Ausblicke'],
      en: ['Part of the UNESCO World Heritage site', 'Home to many species of birds', 'Offers breathtaking views'],
      hu: ['Az UNESCO Világörökség része', 'Számos madárfaj otthona', 'Lélegzetelállító kilátást nyújt'],
      ro: ['Parte a sitului Patrimoniului Mondial UNESCO', 'Adăpostește numeroase specii de păsări', 'Oferă vederi uluitoare'],
    },
    faq: {
      de: {
        'Ist der Eintritt frei?': 'Ja, der Park ist für die Öffentlichkeit frei zugänglich.',
        'Gibt es geführte Touren?': 'Ja, es werden saisonal geführte Naturwanderungen angeboten.',
      },
      en: {
        'Is there an entrance fee?': 'No, the park is freely accessible to the public.',
        'Are there guided tours?': 'Yes, guided nature walks are available seasonally.',
      },
      hu: {
        'Van belépődíj?': 'Nem, a park a nyilvánosság számára szabadon látogatható.',
        'Vannak vezetett túrák?': 'Igen, szezonálisan szerveznek vezetett természetjáró túrákat.',
      },
      ro: {
        'Există taxă de intrare?': 'Nu, parcul este accesibil gratuit publicului.',
        'Există tururi ghidate?': 'Da, plimbări ghidate în natură sunt disponibile sezonier.',
      },
    },
  },
  {
    id: 'sm-landscape-falesia-seconda-torre-extra',
    type: 'landmark',
    parent: 'sm',
    coords: [12.4475, 43.9333],
    name: {
      de: 'Felsen des Zweiten Turms (Cesta)',
      en: 'Cliffs of the Second Tower (Cesta)',
      hu: 'A Második Torony (Cesta) sziklái',
      ro: 'Stâncile celui de-al Doilea Turn (Cesta)',
    },
    description: {
      de: 'Die dramatischen Kalksteinfelsen unterhalb des Cesta-Turms, ein beliebter Ort für Fotografen und Kletterer.',
      en: 'The dramatic limestone cliffs below the Cesta Tower, a popular spot for photographers and climbers.',
      hu: 'A drámai mészkősziklák a Cesta-torony alatt, a fotósok és hegymászók kedvelt helye.',
      ro: 'Stâncile dramatice de calcar de sub Turnul Cesta, un loc popular pentru fotografi și alpiniști.',
    },
    facts: {
      de: ['Bietet eine einzigartige Perspektive auf die Festung', 'Teil der Monte Titano-Formation', 'Im Frühling und Herbst ideal zum Klettern'],
      en: ['Provides a unique perspective of the fortress', 'Part of the Monte Titano formation', 'Ideal for climbing in spring and autumn'],
      hu: ['Egyedülálló perspektívát nyújt az erődítményre', 'A Monte Titano formáció része', 'Tavasszal és ősszel ideális a hegymászáshoz'],
      ro: ['Oferă o perspectivă unică asupra cetății', 'Parte a formațiunii Monte Titano', 'Ideal pentru alpinism primăvara și toamna'],
    },
    faq: {
      de: {},
      en: {},
      hu: {},
      ro: {},
    },
  },
  {
    id: 'sm-landscape-parco-laiala-extra',
    type: 'landmark',
    parent: 'sm',
    coords: [12.4842, 43.9692],
    name: {
      de: 'Laiala Park',
      en: 'Laiala Park',
      hu: 'Laiala park',
      ro: 'Parcul Laiala',
    },
    description: {
      de: 'Ein großer öffentlicher Park in Serravalle mit Grünflächen, einem See und Sportanlagen.',
      en: 'A large public park in Serravalle with green spaces, a lake, and sports facilities.',
      hu: 'Egy nagy közpark Serravalle-ban, zöld területekkel, tóval és sportlétesítményekkel.',
      ro: 'Un parc public mare în Serravalle, cu spații verzi, un lac și facilități sportive.',
    },
    facts: {
      de: ['Beliebt bei Einheimischen zum Entspannen', 'Veranstaltungsort für lokale Feste', 'Verfügt über einen Spielplatz für Kinder'],
      en: ['Popular with locals for relaxation', 'Host to local festivals', 'Includes a children's playground'],
      hu: ['A helyiek körében népszerű pihenőhely', 'Helyi fesztiválok helyszíne', 'Játszótérrel is rendelkezik'],
      ro: ['Popular printre localnici pentru relaxare', 'Găzduiește festivaluri locale', 'Include un loc de joacă pentru copii'],
    },
    faq: {
      de: {},
      en: {},
      hu: {},
      ro: {},
    },
  },
];

export const sanmarinoKidLandmarks: POI[] = [
  {
    id: 'sm-kid-landmark-san-marino-adventures-extra',
    type: 'kid-landmark',
    parent: 'sm',
    coords: [12.4986, 43.9317],
    name: {
      de: 'San Marino Adventures',
      en: 'San Marino Adventures',
      hu: 'San Marino Kalandpark',
      ro: 'San Marino Adventures',
    },
    description: {
      de: 'Ein großer Abenteuerpark mit Hochseilgärten, Seilrutschen und Aktivitäten für alle Altersgruppen.',
      en: 'A large adventure park with treetop courses, zip lines, and activities for all ages.',
      hu: 'Egy nagy kalandpark magaslati kötélpályákkal, drótkötélpályákkal és minden korosztály számára kínált programokkal.',
      ro: 'Un parc mare de aventură cu trasee în copaci, tiroliene și activități pentru toate vârstele.',
    },
    facts: {
      de: ['Größter Abenteuerpark in der Region', 'Über 30 verschiedene Parcours', 'Bietet auch Bogenschießen und Ponyreiten an'],
      en: ['Largest adventure park in the area', 'Over 30 different courses', 'Also offers archery and pony riding'],
      hu: ['A környék legnagyobb kalandparkja', 'Több mint 30 különböző pálya', 'Íjászatot és pónilovaglást is kínál'],
      ro: ['Cel mai mare parc de aventură din zonă', 'Peste 30 de trasee diferite', 'Oferă și tir cu arcul și plimbări cu ponei'],
    },
    faq: {
      de: {},
      en: {},
      hu: {},
      ro: {},
    },
  },
  {
    id: 'sm-kid-landmark-museo-delle-curiosita-extra',
    type: 'kid-landmark',
    parent: 'sm',
    coords: [12.4468, 43.9363],
    name: {
      de: 'Museum der Kuriositäten',
      en: 'Museum of Curiosities',
      hu: 'Furcsaságok Múzeuma',
      ro: 'Muzeul Curiozităților',
    },
    description: {
      de: 'Ein unterhaltsames Museum voller seltsamer und wundervoller Exponate aus aller Welt, von den längsten Fingernägeln bis zu absurden Erfindungen.',
      en: 'A fun museum filled with strange and wonderful exhibits from around the world, from the longest fingernails to absurd inventions.',
      hu: 'Egy szórakoztató múzeum, tele furcsa és csodálatos kiállítási tárgyakkal a világ minden tájáról, a leghosszabb körmöktől az abszurd találmányokig.',
      ro: 'Un muzeu distractiv plin de exponate ciudate și minunate din întreaga lume, de la cele mai lungi unghii la invenții absurde.',
    },
    facts: {
      de: ['Über 100 einzigartige Exponate', 'Interaktive und lustige Ausstellungen', 'Ein Hit bei Kindern und Erwachsenen'],
      en: ['Over 100 unique exhibits', 'Interactive and fun displays', 'A hit with both kids and adults'],
      hu: ['Több mint 100 egyedi kiállítási tárgy', 'Interaktív és szórakoztató bemutatók', 'Gyerekek és felnőttek körében is népszerű'],
      ro: ['Peste 100 de exponate unice', 'Expoziții interactive și distractive', 'Un succes atât pentru copii, cât și pentru adulți'],
    },
    faq: {
      de: {},
      en: {},
      hu: {},
      ro: {},
    },
  },
  {
    id: 'sm-kid-landmark-piscina-di-san-marino-extra',
    type: 'kid-landmark',
    parent: 'sm',
    coords: [12.4697, 43.9430],
    name: {
      de: 'Schwimmbad von San Marino',
      en: 'Swimming Pool of San Marino',
      hu: 'San Marino Uszoda',
      ro: 'Piscina din San Marino',
    },
    description: {
      de: 'Ein öffentlicher Schwimmbadkomplex mit Innen- und Außenbecken, ideal für Familien an heißen Tagen.',
      en: 'A public swimming pool complex with indoor and outdoor pools, great for families on hot days.',
      hu: 'Egy nyilvános uszodakomplexum beltéri és kültéri medencékkel, ideális családok számára a forró napokon.',
      ro: 'Un complex public de piscine cu bazine interioare și exterioare, excelent pentru familii în zilele caniculare.',
    },
    facts: {
      de: ['Olympisches Becken verfügbar', 'Bietet Schwimmkurse an', 'Verfügt über eine große Liegewiese'],
      en: ['Olympic-size pool available', 'Offers swimming lessons', 'Has a large sunbathing area'],
      hu: ['Olimpiai méretű medence is rendelkezésre áll', 'Úszótanfolyamokat is kínál', 'Nagy napozóterülettel rendelkezik'],
      ro: ['Disponibilă piscină de dimensiuni olimpice', 'Oferă cursuri de înot', 'Are o zonă mare pentru plajă'],
    },
    faq: {
      de: {},
      en: {},
      hu: {},
      ro: {},
    },
  },
];

export const sanmarinoAgriculture: POI[] = [
  {
    id: 'sm-agriculture-consorzio-vini-tipici-extra',
    type: 'agriculture',
    parent: 'sm',
    coords: [12.4663, 43.9304],
    name: {
      de: 'Konsortium für typische Weine von San Marino',
      en: 'Consortium of Typical Wines of San Marino',
      hu: 'San Marino-i Tipikus Borok Konzorciuma',
      ro: 'Consorțiul Vinurilor Tipice din San Marino',
    },
    description: {
      de: 'Die Hauptorganisation, die die Weinproduktion in San Marino fördert und schützt. Bietet Weinproben und Führungen an.',
      en: 'The main organization promoting and protecting wine production in San Marino. Offers wine tasting and tours.',
      hu: 'A San Marino-i bortermelést támogató és védő főszervezet. Bórkóstolókat és túrákat is kínálnak.',
      ro: 'Principala organizație care promovează și protejează producția de vin în San Marino. Oferă degustări de vinuri și tururi.',
    },
    facts: {
      de: ['1976 gegründet', 'Vertritt die meisten Weingüter des Landes', 'Fördert lokale Rebsorten wie Brugneto und Tessano'],
      en: ['Founded in 1976', 'Represents most of the country's wineries', 'Promotes local grape varieties like Brugneto and Tessano'],
      hu: ['1976-ban alapították', 'Az ország legtöbb borászatát képviseli', 'Támogatja a helyi szőlőfajtákat, mint a Brugneto és a Tessano'],
      ro: ['Fondat în 1976', 'Reprezintă majoritatea cramelor din țară', 'Promovează soiuri locale de struguri precum Brugneto și Tessano'],
    },
    faq: {
      de: {},
      en: {},
      hu: {},
      ro: {},
    },
  },
  {
    id: 'sm-agriculture-terra-di-san-marino-extra',
    type: 'agriculture',
    parent: 'sm',
    coords: [12.4668, 43.9300],
    name: {
      de: 'Terra di San Marino',
      en: 'Land of San Marino',
      hu: 'Terra di San Marino (A Föld)',
      ro: 'Terra di San Marino (Pământul)',
    },
    description: {
      de: 'Eine Genossenschaft, die sich auf die Produktion und den Verkauf von Bio-Produkten konzentriert, darunter Olivenöl, Honig, Käse und Getreide.',
      en: 'A cooperative focused on the production and sale of organic products, including olive oil, honey, cheese, and grains.',
      hu: 'Egy szövetkezet, amely bio termékek, többek között olívaolaj, méz, sajt és gabonafélék termelésére és értékesítésére összpontosít.',
      ro: 'O cooperativă axată pe producția și vânzarea de produse ecologice, inclusiv ulei de măsline, miere, brânză și cereale.',
    },
    facts: {
      de: ['Fördert nachhaltige Landwirtschaft', 'Hat einen eigenen Laden in Borgo Maggiore', 'Zertifizierte Bio-Produkte'],
      en: ['Promotes sustainable agriculture', 'Has its own shop in Borgo Maggiore', 'Certified organic products'],
      hu: ['Támogatja a fenntartható mezőgazdaságot', 'Saját üzlettel rendelkezik Borgo Maggiore-ban', 'Minősített biotermékek'],
      ro: ['Promovează agricultura durabilă', 'Are propriul magazin în Borgo Maggiore', 'Produse ecologice certificate'],
    },
    faq: {
      de: {},
      en: {},
      hu: {},
      ro: {},
    },
  },
  {
    id: 'sm-agriculture-oliveto-storico-extra',
    type: 'agriculture',
    parent: 'sm',
    coords: [12.4552, 43.9225],
    name: {
      de: 'Historischer Olivenhain',
      en: 'Historic Olive Grove',
      hu: 'Történelmi Olajfaliget',
      ro: 'Plantația istorică de măslini',
    },
    description: {
      de: 'Ein geschützter Olivenhain mit jahrhundertealten Bäumen, der die lange Tradition der Olivenölproduktion in der Region zeigt.',
      en: 'A protected olive grove with centuries-old trees, showcasing the long tradition of olive oil production in the region.',
      hu: 'Védett olajfaliget évszázados fákkal, amely a régió olívaolaj-termelésének hosszú hagyományát mutatja be.',
      ro: 'O livadă de măslini protejată, cu arbori seculari, care prezintă lunga tradiție a producției de ulei de măsline în regiune.',
    },
    facts: {
      de: ['Einige Bäume sind über 500 Jahre alt', 'Wird zur Herstellung eines speziellen Olivenöls verwendet', 'Ein ruhiger Ort für einen Spaziergang'],
      en: ['Some trees are over 500 years old', 'Used to produce a special olive oil', 'A peaceful place for a walk'],
      hu: ['Néhány fa több mint 500 éves', 'Különleges olívaolaj készítéséhez használják', 'Békés hely egy sétához'],
      ro: ['Unii copaci au peste 500 de ani', 'Folosit pentru a produce un ulei de măsline special', 'Un loc liniștit pentru o plimbare'],
    },
    faq: {
      de: {},
      en: {},
      hu: {},
      ro: {},
    },
  },
];

export const sanmarinoIndustry: POI[] = [
  {
    id: 'sm-industry-aasfn-extra',
    type: 'industry',
    parent: 'sm',
    coords: [12.4469, 43.9354],
    name: {
      de: 'Staatliches Amt für Philatelie und Numismatik',
      en: 'State Philatelic and Numismatic Office',
      hu: 'Állami Filatéliai és Numizmatikai Hivatal',
      ro: 'Oficiul Filatelic și Numismatic de Stat',
    },
    description: {
      de: 'Die Einrichtung, die für die Gestaltung und Ausgabe der berühmten Briefmarken und Münzen von San Marino verantwortlich ist, eine wichtige Einnahmequelle.',
      en: 'The entity responsible for designing and issuing San Marino's famous postage stamps and coins, a key source of revenue.',
      hu: 'A San Marino híres postabélyegeinek és érméinek tervezéséért és kibocsátásáért felelős intézmény, amely fontos bevételi forrás.',
      ro: 'Entitatea responsabilă pentru proiectarea și emiterea faimoaselor timbre poștale și monede din San Marino, o sursă cheie de venituri.',
    },
    facts: {
      de: ['Briefmarken sind bei Sammlern weltweit begehrt', 'Gibt Euro-Münzen mit eigenem nationalen Design aus', 'Das Büro befindet sich im historischen Zentrum'],
      en: ['Stamps are sought after by collectors worldwide', 'Issues Euro coins with its own national design', 'The office is located in the historic center'],
      hu: ['A bélyegeket a gyűjtők világszerte keresik', 'Saját nemzeti mintázatú euróérméket bocsát ki', 'A hivatal a történelmi központban található'],
      ro: ['Timbrele sunt căutate de colecționari din întreaga lume', 'Emite monede euro cu propriul design național', 'Biroul este situat în centrul istoric'],
    },
    faq: {
      de: {},
      en: {},
      hu: {},
      ro: {},
    },
  },
  {
    id: 'sm-industry-gualdicciolo-zone-extra',
    type: 'industry',
    parent: 'sm',
    coords: [12.4140, 43.9400],
    name: {
      de: 'Industriegebiet Gualdicciolo',
      en: 'Gualdicciolo Industrial Zone',
      hu: 'Gualdicciolo Ipari Zóna',
      ro: 'Zona Industrială Gualdicciolo',
    },
    description: {
      de: 'Das größte Industriegebiet in San Marino, in dem viele produzierende Unternehmen, Logistik- und Dienstleistungsbetriebe angesiedelt sind.',
      en: 'The largest industrial area in San Marino, home to many manufacturing, logistics, and service companies.',
      hu: 'San Marino legnagyobb ipari területe, ahol számos gyártó, logisztikai és szolgáltató vállalat található.',
      ro: 'Cea mai mare zonă industrială din San Marino, care găzduiește numeroase companii de producție, logistică și servicii.',
    },
    facts: {
      de: ['In der Nähe der italienischen Grenze gelegen', 'Wichtiger Motor der Wirtschaft des Landes', 'Breites Spektrum an Branchen'],
      en: ['Located near the Italian border', 'A major driver of the country's economy', 'Wide range of industries present'],
      hu: ['Az olasz határ közelében található', 'Az ország gazdaságának egyik fő motorja', 'Az iparágak széles skálája megtalálható itt'],
      ro: ['Situat lângă granița cu Italia', 'Un motor important al economiei țării', 'Gamă largă de industrii prezente'],
    },
    faq: {
      de: {},
      en: {},
      hu: {},
      ro: {},
    },
  },
  {
    id: 'sm-industry-birrificio-sammarinese-extra',
    type: 'industry',
    parent: 'sm',
    coords: [12.4939, 43.9536],
    name: {
      de: 'Handwerksbrauerei Sammarinese',
      en: 'Sammarinese Craft Brewery',
      hu: 'San Marino-i Kézműves Sörfőzde',
      ro: 'Berăria Artizanală Sammarinese',
    },
    description: {
      de: 'Die erste und einzige Handwerksbrauerei in San Marino, die eine Reihe von Bieren mit lokalen Zutaten und Namen herstellt.',
      en: 'The first and only craft brewery in San Marino, producing a range of beers with local ingredients and names.',
      hu: 'Az első és egyetlen kézműves sörfőzde San Marinóban, amely helyi alapanyagokból és helyi neveken készít söröket.',
      ro: 'Prima și singura fabrică de bere artizanală din San Marino, care produce o gamă de beri cu ingrediente și nume locale.',
    },
    facts: {
      de: ['Gegründet im Jahr 2009', 'Ihre Biere sind nach den Türmen von San Marino benannt', 'Verwendet Wasser vom Monte Titano'],
      en: ['Founded in 2009', 'Their beers are named after the towers of San Marino', 'Uses water from Monte Titano'],
      hu: ['2009-ben alapították', 'Söreiket San Marino tornyairól nevezték el', 'A Monte Titano vizét használják'],
      ro: ['Fondată în 2009', 'Berile lor sunt numite după turnurile din San Marino', 'Folosește apă din Monte Titano'],
    },
    faq: {
      de: {},
      en: {},
      hu: {},
      ro: {},
    },
  },
];

export const sanmarinoPorts: POI[] = [
  {
    id: 'sm-port-funivia-borgo-maggiore-extra',
    type: 'port',
    parent: 'sm',
    coords: [12.4455, 43.9388],
    name: {
      de: 'Seilbahnstation Borgo Maggiore',
      en: 'Borgo Maggiore Cable Car Station',
      hu: 'Borgo Maggiore-i Libegőállomás',
      ro: 'Stația de Telecabină Borgo Maggiore',
    },
    description: {
      de: 'Die untere Station der Seilbahn, die Borgo Maggiore mit dem historischen Zentrum von San Marino Stadt verbindet.',
      en: 'The lower station of the cable car that connects Borgo Maggiore to the historic center of San Marino City.',
      hu: 'A libegő alsó állomása, amely összeköti Borgo Maggiore-t San Marino város történelmi központjával.',
      ro: 'Stația inferioară a telecabinei care leagă Borgo Maggiore de centrul istoric al orașului San Marino.',
    },
    facts: {
      de: ['Bietet eine schnelle und malerische Fahrt', 'In der Nähe eines großen Parkplatzes', 'Fahrt dauert ca. 2 Minuten'],
      en: ['Provides a quick and scenic journey', 'Located near a large parking area', 'The ride takes about 2 minutes'],
      hu: ['Gyors és festői utazást biztosít', 'Egy nagy parkoló közelében található', 'Az út körülbelül 2 percig tart'],
      ro: ['Oferă o călătorie rapidă și pitorească', 'Situată lângă o parcare mare', 'Călătoria durează aproximativ 2 minute'],
    },
    faq: {
      de: {},
      en: {},
      hu: {},
      ro: {},
    },
  },
  {
    id: 'sm-port-piazzale-stazione-bus-extra',
    type: 'port',
    parent: 'sm',
    coords: [12.4485, 43.9385],
    name: {
      de: 'Busbahnhof Piazzale Stazione',
      en: 'Piazzale Stazione Bus Terminal',
      hu: 'Piazzale Stazione buszpályaudvar',
      ro: 'Terminalul de Autobuze Piazzale Stazione',
    },
    description: {
      de: 'Der Hauptbusbahnhof in San Marino, von dem aus Busse nach Rimini und zu anderen Zielen verkehren. Ein wichtiger Verkehrsknotenpunkt.',
      en: 'The main bus terminal in San Marino, serving routes to Rimini and other destinations. A key transportation hub.',
      hu: 'San Marino fő buszpályaudvara, ahonnan buszok indulnak Riminibe és más úti célokra. Fontos közlekedési csomópont.',
      ro: 'Principalul terminal de autobuze din San Marino, care deservește rute către Rimini și alte destinații. Un nod cheie de transport.',
    },
    facts: {
      de: ['Tägliche Verbindungen nach Rimini, Italien', 'Endstation der ehemaligen Eisenbahnlinie', 'Zentral gelegen'],
      en: ['Daily connections to Rimini, Italy', 'The terminus of the former railway line', 'Centrally located'],
      hu: ['Napi összeköttetés az olaszországi Riminivel', 'Az egykori vasútvonal végállomása', 'Központi elhelyezkedésű'],
      ro: ['Conexiuni zilnice cu Rimini, Italia', 'Terminalul fostei linii de cale ferată', 'Situat central'],
    },
    faq: {
      de: {},
      en: {},
      hu: {},
      ro: {},
    },
  },
  {
    id: 'sm-port-eliporto-borgo-maggiore-extra',
    type: 'port',
    parent: 'sm',
    coords: [12.4635, 43.9431],
    name: {
      de: 'Heliport von Borgo Maggiore',
      en: 'Heliport of Borgo Maggiore',
      hu: 'Borgo Maggiore-i Heliport',
      ro: 'Heliportul din Borgo Maggiore',
    },
    description: {
      de: 'Der wichtigste Heliport in San Marino, der für Notfalldienste, Regierungs- und private Flüge genutzt wird.',
      en: 'The main heliport in San Marino, used for emergency services, government, and private flights.',
      hu: 'San Marino fő helikopter-leszállóhelye, amelyet sürgősségi szolgálatok, kormányzati és magánrepülések számára használnak.',
      ro: 'Principalul heliport din San Marino, utilizat pentru servicii de urgență, zboruri guvernamentale și private.',
    },
    facts: {
      de: ['Entscheidend für medizinische Notfälle', 'Bietet bei besonderen Anlässen Rundflüge an', 'Wird von der Zivilluftfahrtbehörde verwaltet'],
      en: ['Crucial for medical emergencies', 'Offers scenic tours on special occasions', 'Managed by the Civil Aviation Authority'],
      hu: ['Kulcsfontosságú az orvosi vészhelyzetekben', 'Különleges alkalmakkor festői körutakat kínál', 'A Polgári Légiközlekedési Hatóság kezeli'],
      ro: ['Crucial pentru urgențe medicale', 'Oferă tururi pitorești la ocazii speciale', 'Gestionat de Autoritatea Aeronautică Civilă'],
    },
    faq: {
      de: {},
      en: {},
      hu: {},
      ro: {},
    },
  },
];

export const sanmarinoAnimalHabitats: POI[] = [
  {
    id: 'sm-animal-habitat-centro-naturalistico-extra',
    type: 'animal-habitat',
    parent: 'sm',
    coords: [12.4485, 43.9298],
    name: {
      de: 'Naturkundliches Zentrum von San Marino',
      en: 'Sammarinese Naturalistic Center',
      hu: 'San Marino-i Természettudományi Központ',
      ro: 'Centrul Naturalist Sammarinese',
    },
    description: {
      de: 'Ein Zentrum zur Erforschung und zum Schutz der lokalen Fauna und Flora. Es umfasst ein kleines Museum und Aktivitäten zur Umwelterziehung.',
      en: 'A center dedicated to the study and protection of local fauna and flora. It includes a small museum and environmental education activities.',
      hu: 'A helyi fauna és flóra kutatásának és védelmének szentelt központ. Egy kis múzeumot és környezeti nevelési tevékenységeket is magában foglal.',
      ro: 'Un centru dedicat studiului și protecției faunei și florei locale. Include un mic muzeu și activități de educație ecologică.',
    },
    facts: {
      de: ['Konzentriert sich auf die Arten des Apennins', 'Führt Forschung zur lokalen Biodiversität durch', 'Wichtige Bildungsressource für Schulen'],
      en: ['Focuses on Apennine species', 'Conducts research on local biodiversity', 'Important educational resource for schools'],
      hu: ['Az Appenninek fajaira összpontosít', 'Kutatásokat végez a helyi biodiverzitásról', 'Fontos oktatási forrás az iskolák számára'],
      ro: ['Se concentrează pe speciile apenine', 'Desfășoară cercetări privind biodiversitatea locală', 'Resursă educațională importantă pentru școli'],
    },
    faq: {
      de: {},
      en: {},
      hu: {},
      ro: {},
    },
  },
  {
    id: 'sm-animal-habitat-parco-ausa-extra',
    type: 'animal-habitat',
    parent: 'sm',
    coords: [12.4861, 43.9634],
    name: {
      de: 'Ausa Park',
      en: 'Ausa Park',
      hu: 'Ausa Park',
      ro: 'Parcul Ausa',
    },
    description: {
      de: 'Ein Stadtpark entlang des Flusses Ausa, der Lebensraum für verschiedene Vogelarten, Insekten und Kleintiere bietet.',
      en: 'An urban park along the Ausa river, providing a habitat for various bird species, insects, and small animals.',
      hu: 'Városi park az Ausa folyó mentén, amely élőhelyet biztosít különböző madárfajoknak, rovaroknak és kisállatoknak.',
      ro: 'Un parc urban de-a lungul râului Ausa, care oferă un habitat pentru diverse specii de păsări, insecte și animale mici.',
    },
    facts: {
      de: ['Beliebter Ort zur Vogelbeobachtung', 'Der Ausa-Fluss ist eine wichtige Wasserquelle', 'Grüne Lunge für die Umgebung'],
      en: ['Popular spot for birdwatching', 'The Ausa river is a key water source', 'A green lung for the surrounding area'],
      hu: ['Népszerű madármegfigyelő hely', 'Az Ausa folyó fontos vízforrás', 'Zöld tüdő a környező terület számára'],
      ro: ['Loc popular pentru observarea păsărilor', 'Râul Ausa este o sursă cheie de apă', 'Un plămân verde pentru zona înconjurătoare'],
    },
    faq: {
      de: {},
      en: {},
      hu: {},
      ro: {},
    },
  },
    {
    id: 'sm-animal-habitat-bosco-montegiardino-extra',
    type: 'animal-habitat',
    parent: 'sm',
    coords: [12.4833, 43.9111],
    name: {
      de: 'Wald von Montegiardino',
      en: 'Forest of Montegiardino',
      hu: 'Montegiardino-i erdő',
      ro: 'Pădurea din Montegiardino',
    },
    description: {
      de: 'Ein kleines Waldgebiet, das einen ruhigen Lebensraum für die lokale Tierwelt wie Füchse, Dachse und verschiedene Vogelarten bietet.',
      en: 'A small wooded area that provides a quiet habitat for local wildlife such as foxes, badgers, and various bird species.',
      hu: 'Egy kis erdős terület, amely csendes élőhelyet biztosít a helyi vadvilágnak, például rókáknak, borzoknak és különféle madárfajoknak.',
      ro: 'O mică zonă împădurită care oferă un habitat liniștit pentru fauna locală, cum ar fi vulpi, bursuci și diverse specii de păsări.',
    },
    facts: {
      de: ['Eines der wenigen verbliebenen Waldgebiete', 'Wichtig für die Erhaltung der lokalen Biodiversität', 'Wanderwege durchziehen den Wald'],
      en: ['One of the few remaining woodland areas', 'Important for preserving local biodiversity', 'Hiking trails cross the forest'],
      hu: ['Az egyik kevés megmaradt erdős terület', 'Fontos a helyi biodiverzitás megőrzésében', 'Túraútvonalak szelik át az erdőt'],
      ro: ['Una dintre puținele zone împădurite rămase', 'Important pentru conservarea biodiversității locale', 'Trasee de drumeții traversează pădurea'],
    },
    faq: {
      de: {},
      en: {},
      hu: {},
      ro: {},
    },
  },
];


export const poiExtraSanmarinoOther: POI[] = [
    ...sanmarinoLandscapes,
    ...sanmarinoKidLandmarks,
    ...sanmarinoAgriculture,
    ...sanmarinoIndustry,
    ...sanmarinoPorts,
    ...sanmarinoAnimalHabitats
];
