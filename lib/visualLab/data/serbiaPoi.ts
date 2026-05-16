import type { POI } from "./poi";

// 1. Ország
export const serbiaCountry: POI = {
  id: "country-serbia",
  type: "country",
  coords: [21.0059, 44.0165],
  name: { de: "Serbien", hu: "Szerbia", ro: "Serbia", en: "Serbia" },
  description: {
    de: "Serbien liegt auf der Balkanhalbinsel. Es ist bekannt für seine reiche Geschichte, beeindruckende Festungen, orthodoxe Klöster und lebendige Städte.",
    hu: "Szerbia a Balkán-félszigeten fekszik. Gazdag történelméről, lenyűgöző erődítményeiről, ortodox kolostorairól és nyüzsgő városairól ismert.",
    ro: "Serbia este situată în Peninsula Balcanică. Este cunoscută pentru istoria sa bogată, cetățile impresionante, mănăstirile ortodoxe și orașele pline de viață.",
    en: "Serbia is located on the Balkan Peninsula. It is known for its rich history, impressive fortresses, orthodox monasteries, and vibrant cities."
  },
  facts: {
    de: ["Hauptstadt: Belgrad", "Liegt am Balkan", "Währung: Serbischer Dinar", "Amtssprache: Serbisch", "Nicht-EU-Mitglied"],
    hu: ["Főváros: Belgrád", "A Balkánon fekszik", "Pénznem: Szerb dinár", "Hivatalos nyelv: Szerb", "Nem EU-tag"],
    ro: ["Capitala: Belgrad", "Situată în Balcani", "Moneda: Dinar sârbesc", "Limba oficială: Sârbă", "Nu este membră UE"],
    en: ["Capital: Belgrade", "Located in the Balkans", "Currency: Serbian Dinar", "Official language: Serbian", "Non-EU member"]
  }, image: "/poi-images/country-serbia.webp"};

// 2. Fő régiók / Tartományok
export const serbiaRegions: POI[] = [
  {
    id: "region-vojvodina",
    type: "region",
    parent: "country-serbia",
    coords: [19.8369, 45.2671],
    name: { de: "Vojvodina", hu: "Vajdaság", ro: "Voivodina", en: "Vojvodina" },
    description: {
      de: "Die Vojvodina ist eine autonome Provinz im Norden Serbiens, bekannt für ihre multikulturelle Bevölkerung und flache Agrarlandschaft.",
      hu: "A Vajdaság egy autonóm tartomány Szerbia északi részén, amely multikulturális lakosságáról és sík mezőgazdasági tájairól ismert.",
      ro: "Voivodina este o provincie autonomă în nordul Serbiei, cunoscută pentru populația sa multiculturală și peisajul agricol plat.",
      en: "Vojvodina is an autonomous province in northern Serbia, known for its multicultural population and flat agricultural landscape."
    },
    facts: {
      de: ["Nordprovinz", "Multikulturell", "Fruchtbare Ebenen", "Hauptstadt: Novi Sad", "Starke Landwirtschaft"],
      hu: ["Északi tartomány", "Multikulturális", "Termékeny síkságok", "Székhelye: Újvidék", "Erős mezőgazdaság"],
      ro: ["Provincie nordică", "Multiculturală", "Câmpii fertile", "Capitala: Novi Sad", "Agricultură puternică"],
      en: ["Northern province", "Multicultural", "Fertile plains", "Capital: Novi Sad", "Strong agriculture"]
    }
  },
  {
    id: "region-sumadija",
    type: "region",
    parent: "country-serbia",
    coords: [20.9167, 44.0167],
    name: { de: "Šumadija", hu: "Šumadija", ro: "Šumadija", en: "Šumadija" },
    description: {
      de: "Šumadija liegt im Herzen Serbiens und ist für ihre hügeligen Wälder und historische Bedeutung bekannt.",
      hu: "A Šumadija Szerbia szívében található, dombos erdeiről és történelmi jelentőségéről ismert.",
      ro: "Šumadija este situată în inima Serbiei și este cunoscută pentru pădurile sale deluroase și importanța istorică.",
      en: "Šumadija is located in the heart of Serbia and is known for its hilly forests and historical significance."
    },
    facts: {
      de: ["Zentralserbien", "Hügelige Landschaft", "Historisches Kernland", "Obstbau", "Wälder"],
      hu: ["Közép-Szerbia", "Dombos táj", "Történelmi magterület", "Gyümölcstermesztés", "Erdők"],
      ro: ["Serbia Centrală", "Peisaj deluros", "Zona istorică centrală", "Pomicultură", "Păduri"],
      en: ["Central Serbia", "Hilly landscape", "Historical heartland", "Fruit growing", "Forests"]
    }, image: "/poi-images/region-sumadija.webp"}
];

// 3. Városok
export const serbiaCities: POI[] = [
];

// 4. Kultúra és Történelem
export const serbiaCulture: POI[] = [
];

// 5. Természet (Hegyek, Tavak, Nemzeti Parkok)
export const serbiaNature: POI[] = [
  {
    id: "mountain-kopaonik",
    type: "mountain",
    parent: "country-serbia",
    coords: [20.8000, 43.2833],
    name: { de: "Kopaonik", hu: "Kopaonik", ro: "Kopaonik", en: "Kopaonik" },
    description: {
      de: "Kopaonik ist das größte Gebirge in Serbien and das beliebteste Skigebiet des Landes.",
      hu: "A Kopaonik Szerbia legnagyobb hegysége és az ország legnépszerűbb síterepe.",
      ro: "Kopaonik este cel mai mare lanț muntos din Serbia și cea mai populară stațiune de schi din țară.",
      en: "Kopaonik is the largest mountain range in Serbia and the most popular ski resort in the country."
    },
    facts: {
      de: ["Größtes Skigebiet", "Nationalpark", "Gipfel Pančićev Vrh", "Sommer- und Wintertourismus", "Biodiversität"],
      hu: ["Legnagyobb síterep", "Nemzeti Park", "Pančićev Vrh csúcs", "Nyári és téli turizmus", "Biológiai sokféleség"],
      ro: ["Cea mai mare stațiune de schi", "Parc Național", "Vârful Pančićev Vrh", "Turism de vară și de iarnă", "Biodiversitate"],
      en: ["Largest ski resort", "National Park", "Pančićev Vrh peak", "Summer and winter tourism", "Biodiversity"]
    }, image: "/poi-images/mountain-kopaonik.webp",
    descriptionAdvanced: {
      de: "Kopaonik ist das größte Gebirge in Serbien und ein bedeutendes Skizentrum im Südosten Europas. Ein Großteil des Massivs ist als Nationalpark geschützt und beherbergt eine reiche Artenvielfalt. Der höchste Gipfel ist der Pančić-Gipfel mit einer Höhe von 2017 Metern. Das Gebirge ist auch für seine geothermalen Quellen und historischen Denkmäler bekannt.",
      hu: "Kopaonik Szerbia legnagyobb hegysége és Délkelet-Európa egyik jelentős síközpontja. A masszívum nagy része nemzeti parkként védett, és gazdag élővilágnak ad otthont. Legmagasabb csúcsa a Pančić-csúcs, amely 2017 méter magas. A hegység geotermikus forrásairól és történelmi emlékeiről is híres.",
      ro: "Kopaonik este cel mai mare masiv muntos din Serbia și un important centru de schi din sud-estul Europei. O mare parte a masivului este protejată ca parc național, adăpostind o biodiversitate bogată. Cel mai înalt vârf este Pančićev vrh, cu o altitudine de 2017 metri. Masivul este cunoscut și pentru izvoarele termale și siturile arheologice.",
      en: "Kopaonik is the largest mountain range in Serbia and a major ski center in Southeast Europe. A large part of the massif is protected as a national park, hosting a rich biodiversity. Its highest peak is Pančić Peak, with an elevation of 2017 meters. The range is also known for its geothermal springs and historical monuments.",
    },
    factsAdvanced: {
      de: ["Nationalpark seit 1981", "Höchster Gipfel Pančić (2017m)", "200 Sonnentage pro Jahr", "160 Schneetage jährlich", "Über 1500 Pflanzenarten", "Bekannt als Silberberg"],
      hu: ["A Nemzeti Park 1981-ben alakult", "Legmagasabb pontja a Pančić-csúcs (2017m)", "Évente 200 napsütéses nap", "Évente 160 havas nap", "Több mint 1500 növényfaj", "Ezüst-hegy néven is ismerik"],
      ro: ["Parc Național din anul 1981", "Altitudine maximă 2017m (Pančić)", "200 de zile însorite anual", "160 de zile cu zăpadă pe an", "Peste 1500 de specii de plante", "Cunoscut drept Muntele de Argint"],
      en: ["National Park established in 1981", "Highest peak Pančić Peak (2017m)", "200 sunny days per year", "160 snowy days annually", "Over 1500 plant species", "Commonly known as the Silver Mountain"],
    },
  },
  {
    id: "mountain-fruska-gora",
    type: "mountain",
    parent: "region-vojvodina",
    coords: [19.8500, 45.1500],
    name: { de: "Fruška Gora", hu: "Tarcal-hegység (Fruška Gora)", ro: "Fruška Gora", en: "Fruška Gora" },
    description: {
      de: "Fruška Gora ist ein Mittelgebirge in der Vojvodina, bekannt für seine zahlreichen orthodoxen Klöster und Weinberge.",
      hu: "A Tarcal-hegység egy középhegység a Vajdaságban, számos ortodox kolostoráról és szőlőültetvényeiről ismert.",
      ro: "Fruška Gora este un munte în Voivodina, cunoscut pentru numeroasele sale mănăstiri ortodoxe și podgorii.",
      en: "Fruška Gora is a low mountain in Vojvodina, known for its numerous Orthodox monasteries and vineyards."
    },
    facts: {
      de: ["Nationalpark", "Orthodoxe Klöster", "Weinbau", "Nahe Novi Sad", "Hügel in der Pannonischen Tiefebene"],
      hu: ["Nemzeti Park", "Ortodox kolostorok", "Borászat", "Újvidék közelében", "Dombvidék a Pannon-síkságon"],
      ro: ["Parc Național", "Mănăstiri ortodoxe", "Viticultură", "Lângă Novi Sad", "Deal în Câmpia Panonică"],
      en: ["National Park", "Orthodox monasteries", "Viticulture", "Near Novi Sad", "Hill in the Pannonian Plain"]
    }, image: "/poi-images/mountain-fruska-gora.webp",
    descriptionAdvanced: {
      de: "Die Fruška Gora ist ein Inselgebirge in der serbischen Provinz Vojvodina und der älteste Nationalpark des Landes. Sie ist bekannt für ihre zahlreichen orthodoxen Klöster und die Weinproduktion an ihren Hängen. Das Gebirge erstreckt sich entlang der Donau und bietet dichte Laubwälder. Es ist ein beliebtes Ziel für Wanderer und Naturfreunde in Nordserbien.",
      hu: "A Tarcal-hegység (Fruška Gora) egy szigethegység Szerbia Vajdaság tartományában, és az ország legrégebbi nemzeti parkja. Számos ortodox kolostoráról és a lankáin folyó bortermelésről ismert. A hegység a Duna mentén húzódik, sűrű lombhullató erdők borítják. Népszerű kirándulóhely Észak-Szerbiában.",
      ro: "Fruška Gora este un munte insular situat în provincia sârbă Voivodina și reprezintă cel mai vechi parc național al țării. Este cunoscut pentru numeroasele sale mănăstiri ortodoxe și pentru producția de vin de pe versanții săi. Masivul se întinde de-a lungul Dunării și oferă păduri dense de foioase. Este o destinație turistică majoră în nordul Serbiei.",
      en: "Fruška Gora is an island mountain in the Serbian province of Vojvodina and the country's oldest national park. It is known for its numerous Orthodox monasteries and the wine production on its slopes. The range stretches along the Danube and features dense deciduous forests. It is a popular destination for hikers and nature lovers in northern Serbia.",
    },
    factsAdvanced: {
      de: ["Nationalpark seit 1960", "Höchster Gipfel Crveni Čot (539m)", "16 aktive Klöster vorhanden", "Insel im antiken Pannonischen Meer", "Gesamtlänge ca. 80 km", "Berühmt für Bermet-Wein"],
      hu: ["1960 óta nemzeti park", "Legmagasabb csúcsa a Vörös-bérc (539m)", "16 működő kolostor található itt", "Sziget volt a Pannon-tengerben", "Hossza körülbelül 80 km", "A Bermet borról híres"],
      ro: ["Parc Național din anul 1960", "Altitudine maximă 539m (Crveni Čot)", "Adăpostește 16 mănăstiri active", "Fostă insulă în Marea Panonică", "Lungime totală de 80 km", "Faimos pentru vinul Bermet"],
      en: ["National Park status since 1960", "Highest peak Crveni Čot (539m)", "Contains 16 active monasteries", "Ancient island in the Pannonian Sea", "Total length of approximately 80 km", "Famous for its Bermet wine"],
    },
  },
];

export const serbiaRivers: POI[] = [
  {
    id: "river-danube-serbia",
    type: "river",
    parent: "country-serbia",
    coords: [20.4500, 44.8236], // Belgrade confluence point as generic loc
    name: { de: "Donau", hu: "Duna", ro: "Dunărea", en: "Danube" },
    description: {
      de: "Die Donau fließt durch den Norden und Osten Serbiens und bildet das imposante Eiserne Tor.",
      hu: "A Duna Szerbia északi és keleti részén folyik keresztül, kialakítva az impozáns Vaskaput.",
      ro: "Dunărea curge prin nordul și estul Serbiei și formează impunătoarele Porți de Fier.",
      en: "The Danube flows through northern and eastern Serbia, forming the imposing Iron Gates."
    },
    facts: {
      de: ["Wichtigster Fluss", "Fließt durch Belgrad", "Eisernes Tor", "Grenzfluss", "Schifffahrtsweg"],
      hu: ["Legfontosabb folyó", "Átfolyik Belgrádon", "Vaskapu", "Határfolyó", "Hajózási útvonal"],
      ro: ["Cel mai important râu", "Curge prin Belgrad", "Porțile de Fier", "Râu de frontieră", "Cale navigabilă"],
      en: ["Most important river", "Flows through Belgrade", "Iron Gates", "Border river", "Navigable waterway"]
    }, image: "/poi-images/river-danube-serbia.webp",
    descriptionAdvanced: {
      de: "Die Donau ist der zweitlängste Fluss Europas und durchfließt Serbien auf einer Länge von fast 600 Kilometern. Sie passiert bedeutende Städte wie Belgrad und Novi Sad sowie den spektakulären Eisernen Vorhang. Der Fluss ist eine zentrale Verkehrsader und ein wichtiges Ökosystem der Region. Entlang seines Laufs befinden sich zahlreiche archäologische Fundstätten.",
      hu: "A Duna Európa második leghosszabb folyója, amely közel 600 kilométer hosszan folyik át Szerbián. Olyan jelentős városokat érint, mint Belgrád és Újvidék, valamint a látványos Vaskapu-szorost. A folyó központi közlekedési útvonal és a régió fontos ökoszisztémája. Partjain számos régészeti lelőhely található.",
      ro: "Dunărea este al doilea cel mai lung fluviu din Europa și traversează Serbia pe o lungime de aproape 600 de kilometri. Trece prin orașe importante precum Belgrad și Novi Sad, dar și prin spectaculoasele Porți de Fier. Fluviul este o arteră centrală de transport și un ecosistem vital pentru regiune. Găzduiește numeroase situri arheologice antice.",
      en: "The Danube is Europe's second-longest river and flows through Serbia for nearly 600 kilometers. It passes through major cities such as Belgrade and Novi Sad, as well as the spectacular Iron Gates gorge. The river is a central transport artery and a vital ecosystem for the region. Numerous archaeological sites line its banks in Serbia.",
    },
    factsAdvanced: {
      de: ["Serbischer Abschnitt 588 km lang", "Durchquert Belgrad und Novi Sad", "Schlucht des Eisernen Tors (Djerdap)", "Wasserkraftwerk Djerdap vorhanden", "Prähistorische Fundstätte Lepenski Vir", "Grenze zu Kroatien und Rumänien"],
      hu: ["Szerbiai szakasza 588 km", "Érinti Belgrádot és Újvidéket", "A Vaskapu-szoros (Djerdap) itt található", "Djerdap vízerőmű működik rajta", "Lepenski Vir őskori lelőhely", "Határfolyó Horvátországgal és Romániával"],
      ro: ["Sectorul sârbesc are 588 km", "Traversează Belgradul și Novi Sad", "Defileul Porțile de Fier (Djerdap)", "Hidrocentrala Porțile de Fier", "Situl preistoric Lepenski Vir", "Formează granița cu Croația și România"],
      en: ["Serbian section length is 588 km", "Passes through Belgrade and Novi Sad", "Includes the Iron Gates gorge (Djerdap)", "Site of the Djerdap hydropower plant", "Ancient site of Lepenski Vir nearby", "Forms border with Croatia and Romania"],
    },
  },
  {
    id: "river-sava",
    type: "river",
    parent: "country-serbia",
    coords: [19.6500, 44.8833],
    name: { de: "Save", hu: "Száva", ro: "Sava", en: "Sava" },
    description: {
      de: "Die Save ist ein großer Flussfluss, der in Belgrad in die Donau mündet.",
      hu: "A Száva egy nagy folyó, amely Belgrádban ömlik a Dunába.",
      ro: "Sava este un râu mare care se varsă în Dunăre la Belgrad.",
      en: "The Sava is a major river that flows into the Danube in Belgrade."
    },
    facts: {
      de: ["Mündet in die Donau", "Fließt durch Belgrad", "Wichtiger Wasserweg", "Trennt Zentralserbien von der Vojvodina", "Zahlreiche Brücken"],
      hu: ["A Dunába ömlik", "Átfolyik Belgrádon", "Fontos vízi út", "Elválasztja Közép-Szerbiát a Vajdaságtól", "Számos híd"],
      ro: ["Se varsă în Dunăre", "Curge prin Belgrad", "Cale navigabilă importantă", "Separă Serbia Centrală de Voivodina", "Multe poduri"],
      en: ["Flows into the Danube", "Flows through Belgrade", "Important waterway", "Separates Central Serbia from Vojvodina", "Numerous bridges"]
    }, image: "/poi-images/river-sava.webp",
    descriptionAdvanced: {
      de: "Die Save ist ein bedeutender rechter Nebenfluss der Donau und entsteht aus dem Zusammenfluss zweier Quellflüsse in Slowenien. Sie fließt durch Kroatien, Bosnien-Herzegowina und Serbien, wo sie in Belgrad in die Donau mündet. Der Fluss spielt eine wichtige Rolle für die Schifffahrt und Landwirtschaft. Er verbindet mehrere Hauptstädte der Balkanregion.",
      hu: "A Száva a Duna jelentős jobb oldali mellékfolyója, amely két forráság összefolyásából ered Szlovéniában. Áthalad Horvátországon, Bosznia-Hercegovinán és Szerbián, ahol Belgrádnál torkollik a Dunába. A folyó fontos szerepet játszik a hajózásban és a mezőgazdaságban. Több balkáni fővárost is összeköt.",
      ro: "Sava este un afluent major de dreapta al Dunării, format prin confluența a două brațe în Slovenia. Traversează Croația, Bosnia și Herțegovina și Serbia, vărsându-se în Dunăre la Belgrad. Fluviul joacă un rol esențial pentru navigație și agricultură în regiune. Conectează mai multe capitale din statele balcanice.",
      en: "The Sava is a major right tributary of the Danube, formed by the confluence of two headwaters in Slovenia. It flows through Croatia, Bosnia and Herzegovina, and Serbia, where it joins the Danube in Belgrade. The river plays an essential role in navigation and agriculture in the region. It connects several Balkan capital cities.",
    },
    factsAdvanced: {
      de: ["Gesamtlänge 990 km", "Einzugsgebiet ca. 97.713 km2", "Mündung in Belgrad", "Fließt durch 4 Länder", "Schiffbar auf 593 km Länge", "Größter Zufluss der Donau"],
      hu: ["Teljes hossza 990 km", "Vízgyűjtő területe kb. 97 713 km2", "Belgrádnál torkollik a Dunába", "4 országon folyik keresztül", "593 km hosszan hajózható", "A Duna legnagyobb mellékfolyója"],
      ro: ["Lungime totală de 990 km", "Bazin hidrografic de 97.713 km2", "Vărsare în Dunăre la Belgrad", "Traversează 4 țări", "Navigabilă pe 593 km", "Cel mai mare afluent al Dunării"],
      en: ["Total length of 990 km", "Basin area of ~97,713 km2", "Confluence in Belgrade", "Flows through 4 countries", "Navigable for 593 km", "Largest tributary of the Danube"],
    },
  }
];

export const serbiaDistrictPoi: POI[] = [
  // RS-001 Severno-Backi
  // RS-002 Zapadno-Backi
  {
    id: "RS-002-sombor",
    type: "city",
    parent: "RS-002",
    coords: [19.1125, 45.7739],
    name: { de: "Sombor", hu: "Zombor", ro: "Sombor", en: "Sombor" },
    description: {
      de: "Eine grüne Stadt in der West-Batschka, berühmt für ihre Parks, Kutschen und das imposante Komitatsgebäude.",
      hu: "Zöldellő város Nyugat-Bácskában, híres parkjairól, fogatairól és az impozáns vármegyeházáról.",
      ro: "Un oraș verde în Bačka de Vest, faimos pentru parcurile sale, trăsurile și clădirea impresionantă a comitatului.",
      en: "A green city in West Bačka, famous for its parks, carriages, and the impressive county building."
    },
    facts: {
      de: ["Stadt der Alleen", "Gemälde 'Schlacht von Zenta'", "Reiche Kulturgeschichte"],
      hu: ["A fasorok városa", "Zentai csata óriásfestmény", "Gazdag kultúrtörténet"],
      ro: ["Orașul aleilor", "Pictura 'Bătălia de la Zenta'", "Istorie culturală bogată"],
      en: ["City of avenues", "'Battle of Senta' painting", "Rich cultural history"]
    },
    descriptionAdvanced: {
      de: "Sombor ist eine Stadt im Nordwesten Serbiens, bekannt für ihre üppigen Grünanlagen und die historische Architektur. Die Stadt war einst der Verwaltungssitz der Gespanschaft Bács-Bodrog und bewahrt viele Gebäude aus dem 18. und 19. Jahrhundert. Ein Wahrzeichen ist das monumentale Gebäude der Bezirksverwaltung. Die Stadt ist berühmt für ihre von Bäumen gesäumten Alleen.",
      hu: "Zombor egy város Szerbia északnyugati részén, amely dús zöldövezeteiről és történelmi építészetéről ismert. A város egykor Bács-Bodrog vármegye székhelye volt, és számos 18-19. századi épületet őriz. Egyik jelképe a monumentális megyeháza épülete. A város híres a fákkal szegélyezett utcáiról és fasorairól.",
      ro: "Sombor este un oraș situat în nord-vestul Serbiei, cunoscut pentru spațiile sale verzi bogate și arhitectura istorică. Orașul a fost sediul administrativ al comitatului Bács-Bodrog și păstrează numeroase clădiri din secolele XVIII și XIX. Un simbol al orașului este clădirea monumentală a Prefecturii. Este renumit pentru bulevardele sale largi umbrite de arbori.",
      en: "Sombor is a city in northwestern Serbia, known for its lush greenery and historical architecture. The city was once the administrative seat of the Bács-Bodrog County and preserves many buildings from the 18th and 19th centuries. A landmark is the monumental County Hall building. It is famous for its extensive tree-lined boulevards and parks.",
    },
    factsAdvanced: {
      de: ["Erstmals erwähnt im Jahr 1340", "Sitz der Gespanschaft Bács-Bodrog", "Bezirksverwaltung erbaut 1808", "Bekannt für Droschken-Tradition", "120 km baumbestandene Straßen", "Nahe dem Donau-Theiß-Donau-Kanal"],
      hu: ["Először 1340-ben említik", "Bács-Bodrog vármegye székhelye volt", "A megyeháza 1808-ban épült", "Híres a fiákerek hagyományáról", "120 km-nyi fásított utca", "A Duna-Tisza-Duna-csatorna mellett"],
      ro: ["Prima menționare în anul 1340", "Reședința comitatului Bács-Bodrog", "Clădirea Prefecturii ridicată în 1808", "Cunoscut pentru tradiția trăsurilor", "120 km de străzi aliniate cu arbori", "Lângă canalul Dunăre-Tisa-Dunăre"],
      en: ["First mentioned in 1340", "Former seat of Bács-Bodrog county", "County Hall built in 1808", "Famous for hackney carriage tradition", "120 km of tree-lined streets", "Near the Danube-Tisa-Danube canal"],
    },
  },
  {
    id: "RS-002-apatin",
    type: "city",
    parent: "RS-002",
    coords: [18.9858, 45.6714],
    name: { de: "Apatin", hu: "Apatin", ro: "Apatin", en: "Apatin" },
    description: {
      de: "Eine Stadt am linken Donauufer, bekannt für ihre lange Brautradition und Fischereigeschichte.",
      hu: "Város a Duna bal partján, amely hosszú sörfőzési hagyományairól és halászati múltjáról ismert.",
      ro: "Un oraș pe malul stâng al Dunării, cunoscut pentru lunga sa tradiție în fabricarea berii și istoria pescuitului.",
      en: "A city on the left bank of the Danube, known for its long brewing tradition and fishing history."
    },
    facts: {
      de: ["Jelen-Brauerei", "Donauhafen", "Fischersymposium"],
      hu: ["Jelen sörgyár", "Dunai kikötő", "Halászati hagyományok"],
      ro: ["Fabrica de bere Jelen", "Port la Dunăre", "Tradiții pescărești"],
      en: ["Jelen Brewery", "Danube port", "Fishing traditions"]
    }, image: "/poi-images/RS-002-apatin.webp",
    descriptionAdvanced: {
      de: "Apatin ist eine Stadt am linken Ufer der Donau in der Provinz Vojvodina. Sie ist weithin bekannt für ihre lange Brautradition, wobei die lokale Brauerei eine der ältesten in Serbien ist. Die Stadt verfügt über einen bedeutenden Hafen und liegt in der Nähe des Naturschutzgebiets Gornje Podunavlje. Apatin ist ein Zentrum für Fischerei und Wassertourismus.",
      hu: "Apatin a Duna bal partján fekvő város a Vajdaság tartományban. Széles körben ismert hosszú sörfőzési hagyományairól, a helyi sörgyár Szerbia egyik legrégebbi üzeme. A város jelentős kikötővel rendelkezik, és a Felső-Dunamellék Természetvédelmi Rezervátum közelében található. A horgászat és a vízi turizmus központja.",
      ro: "Apatin este un oraș situat pe malul stâng al Dunării, în provincia Voivodina. Este cunoscut pentru tradiția sa îndelungată în producerea berii, fabrica locală fiind una dintre cele mai vechi din Serbia. Orașul deține un port important și se află în apropierea rezervației naturale Gornje Podunavlje. Este un centru important pentru pescuit și turism fluvial.",
      en: "Apatin is a town on the left bank of the Danube in the province of Vojvodina. It is widely known for its long brewing tradition, with the local brewery being one of the oldest in Serbia. The town has a significant port and is located near the Gornje Podunavlje Nature Reserve. It serves as a center for fishing and river tourism.",
    },
    factsAdvanced: {
      de: ["Gegründet im 11. Jahrhundert", "Brauerei gegründet im Jahr 1756", "Bedeutender Hafen an der Donau", "Nahe Reservat Gornje Podunavlje", "Bekannt für Fischertraditionen", "Einwohnerzahl ca. 17.000"],
      hu: ["A 11. században alapították", "A sörgyárat 1756-ban alapították", "Jelentős dunai kikötő", "A Felső-Dunamellék rezervátum mellett", "Híres halászati hagyományairól", "Lakossága kb. 17 000 fő"],
      ro: ["Fondat în secolul al XI-lea", "Fabrica de bere fondată în 1756", "Port important la Dunăre", "Lângă rezervația Gornje Podunavlje", "Renumit pentru tradițiile pescărești", "Populație de aproximativ 17.000 locuitori"],
      en: ["Founded in the 11th century", "Brewery established in 1756", "Significant port on the Danube", "Near Gornje Podunavlje reserve", "Known for deep fishing traditions", "Population of approximately 17,000"],
    },
  },
  // RS-003 Severno-Banatski
  {
    id: "RS-003-kikinda",
    type: "city",
    parent: "RS-003",
    coords: [20.4650, 45.8244],
    name: { de: "Kikinda", hu: "Nagykikinda", ro: "Chichinda", en: "Kikinda" },
    description: {
      de: "Eine Stadt im Nordbanat, berühmt für die archäologischen Mammutfunde und das jährliche Kürbisfestival.",
      hu: "Észak-bánsági város, amely híres a régészeti mammutleleteiről és az évenkénti tökfesztiválról.",
      ro: "Un oraș în Banatul de Nord, faimos pentru descoperirile arheologice de mamuți și festivalul anual al dovleacului.",
      en: "A city in North Banat, famous for archaeological mammoth finds and the annual pumpkin festival."
    },
    facts: {
      de: ["Kika das Mammut", "Kürbistage", "Waldohreulen-Winterquartier"],
      hu: ["Kika a mammut", "Témanapok (tökfesztivál)", "Réti fülesbaglyok telelőhelye"],
      ro: ["Mamutul Kika", "Zilele dovleacului", "Iernarea bufnițelor cu urechi lungi"],
      en: ["Kika the mammoth", "Pumpkin Days", "Long-eared owl wintering site"]
    },
    descriptionAdvanced: {
      de: "Kikinda liegt im Norden Serbiens in der Provinz Vojvodina. Die Stadt ist weltbekannt für das Skelett des Mammuts \"Kika\", das 1996 in einer lokalen Lehmgrube entdeckt wurde. Kikinda ist zudem ein wichtiges Zentrum für die Überwinterung von Waldohreulen und beherbergt das internationale Bildhauersymposium Terra.",
      hu: "Kikinda Szerbia északi részén, a Vajdaságban található város. Világszerte ismert a \"Kika\" nevű mamut csontvázáról, amelyet 1996-ban találtak meg a helyi agyagbányában. A város a fülesbaglyok egyik legfontosabb telelőhelye Európában, és otthont ad a híres Terra nemzetközi szobrászati szimpóziumnak.",
      ro: "Kikinda este un oraș situat în nordul Serbiei, în provincia Voivodina. Orașul este cunoscut la nivel mondial pentru scheletul mamutului \"Kika\", descoperit în 1996 într-o carieră locală de argilă. Kikinda este, de asemenea, un centru important pentru iernarea bufnițelor cu urechi lungi și găzduiește simpozionul internațional de sculptură Terra.",
      en: "Kikinda is a city located in northern Serbia, in the province of Vojvodina. It is world-renowned for the skeleton of the mammoth \"Kika,\" which was discovered in 1996 in a local clay pit. The city is also a significant center for the wintering of long-eared owls and hosts the prestigious Terra international sculpture symposium.",
    },
    factsAdvanced: {
      de: ["Gründung der modernen Siedlung im Jahr 1774", "Fund des Kika-Mammutskeletts im Jahr 1996", "Über 500 Waldohreulen überwintern im Stadtzentrum", "Sitz des Terra-Bildhauersymposiums seit 1982", "Die Suvača ist eine der letzten Pferdemühlen Europas", "Nationalmuseum Kikinda im ehemaligen Kurienhaus"],
      hu: ["A modern település alapítása 1774-ben történt", "A Kika mamut csontvázát 1996-ban találták meg", "Télen több mint 500 erdei fülesbagoly fészkel a központban", "A Terra szobrászati szimpózium 1982 óta működik", "A Suvača az utolsó megmaradt lójáróműves malom", "A Nemzeti Múzeum az egykori Kúria épületében található"],
      ro: ["Fondarea așezării moderne în anul 1774", "Descoperirea scheletului mamutului Kika în 1996", "Peste 500 de bufnițe iernează în centrul orașului", "Simpozionul Terra funcționează din anul 1982", "Suvača este una dintre ultimele mori cu cai din Europa", "Muzeul Național este situat în clădirea fostei Curii"],
      en: ["Establishment of the modern settlement in 1774", "Discovery of the Kika mammoth skeleton in 1996", "Over 500 long-eared owls winter in the city center", "Home to the Terra sculpture symposium since 1982", "The Suvača is one of the last horse-powered mills in Europe", "National Museum is housed in the former Curia building"],
    },
  },
  {
    id: "RS-003-senta",
    type: "city",
    parent: "RS-003",
    coords: [20.0817, 45.9289],
    name: { de: "Senta", hu: "Zenta", ro: "Senta", en: "Senta" },
    description: {
      de: "Eine historische Stadt an der Theiß, berühmt für die Schlacht bei Zenta im Jahr 1697.",
      hu: "Történelmi város a Tisza partján, amely az 1697-es zentai csatáról híres.",
      ro: "Un oraș istoric pe Tisa, faimos pentru bătălia de la Senta din 1697.",
      en: "A historical city on the Tisa river, famous for the Battle of Senta in 1697."
    },
    facts: {
      de: ["Theiß-Ufer", "Schlachtdenkmal", "Prächtiges Rathaus"],
      hu: ["Tisza-part", "Csata emlékműve", "Pompás városháza"],
      ro: ["Malul Tisei", "Monumentul bătăliei", "Primărie splendidă"],
      en: ["Tisa riverbank", "Battle monument", "Splendid city hall"]
    }, image: "/poi-images/RS-003-senta.webp",
    descriptionAdvanced: {
      de: "Senta liegt am rechten Ufer der Theiß in der Provinz Vojvodina. Die Stadt erlangte historische Bedeutung durch die Schlacht bei Zenta im Jahr 1697, in der Prinz Eugen von Savoyen die Osmanen besiegte. Heute ist Senta ein wichtiges kulturelles Zentrum der ungarischen Minderheit in Serbien mit beeindruckender Sezessionsarchitektur.",
      hu: "Zenta a Tisza jobb partján fekvő város a Vajdaságban. A város történelmi jelentőségét az 1697-es zentai csata adta, ahol Savoyai Jenő herceg legyőzte az oszmán seregeket. Ma Zenta a szerbiai magyar közösség egyik fontos kulturális központja, amely lenyűgöző szecessziós építészettel büszkélkedhet.",
      ro: "Senta este un oraș situat pe malul drept al râului Tisa, în provincia Voivodina. Orașul a dobândit o importanță istorică majoră prin Bătălia de la Senta din 1697, unde prințul Eugen de Savoia a învins armata otomană. Astăzi, Senta este un centru cultural important al minorității maghiare din Serbia, cu o arhitectură secesionistă remarcabilă.",
      en: "Senta is a town located on the right bank of the Tisa River in the province of Vojvodina. It gained historical prominence through the Battle of Senta in 1697, where Prince Eugene of Savoy defeated the Ottoman forces. Today, Senta is a key cultural hub for the Hungarian minority in Serbia, featuring impressive Art Nouveau architecture.",
    },
    factsAdvanced: {
      de: ["Die Schlacht bei Zenta fand am 11. September 1697 statt", "Das Rathaus wurde 1914 im Sezessionsstil erbaut", "Senta wurde erstmals im Jahr 1216 urkundlich erwähnt", "Ein großer Brand zerstörte 1911 Teile des Stadtzentrums", "Die Stadt beherbergt eine bedeutende Zuckerfabrik", "Die Theiß-Brücke verbindet Senta mit dem Banat"],
      hu: ["A zentai csata 1697. szeptember 11-én zajlott", "A Városháza 1914-ben épült szecessziós stílusban", "Zentát először 1216-ban említik írásos források", "1911-ben hatalmas tűzvész pusztított a központban", "A városban jelentős cukorgyár üzemel", "A zentai híd köti össze a várost a Bánáttal"],
      ro: ["Bătălia de la Senta a avut loc la 11 septembrie 1697", "Primăria a fost construită în 1914 în stil Secession", "Senta este menționată documentar pentru prima dată în 1216", "Un incendiu major a distrus centrul orașului în 1911", "Orașul găzduiește o fabrică de zahăr importantă", "Podul peste Tisa leagă Senta de regiunea Banat"],
      en: ["The Battle of Senta occurred on September 11, 1697", "The Town Hall was built in 1914 in Art Nouveau style", "Senta was first mentioned in documents in 1216", "A massive fire destroyed the city center in 1911", "The city is home to a significant sugar refinery", "The Senta Bridge connects the town with the Banat region"],
    },
  },
  // RS-004 Pcinjski
  {
    id: "RS-004-vranje",
    type: "city",
    parent: "RS-004",
    coords: [21.8958, 42.5544],
    name: { de: "Vranje", hu: "Vranje", ro: "Vranje", en: "Vranje" },
    description: {
      de: "Ein kulturelles Zentrum in Südserbien mit orientalischer Architektur und reicher Musiktradition.",
      hu: "Dél-szerbiai kulturális központ, amely keleti építészetéről és gazdag zenei hagyományairól ismert.",
      ro: "Un centru cultural în sudul Serbiei, cu arhitectură orientală și o bogată tradiție muzicală.",
      en: "A cultural center in southern Serbia with oriental architecture and rich music tradition."
    },
    facts: {
      de: ["Beli Most (Weiße Brücke)", "Pašin Konak", "Geburtsort von Bora Stanković"],
      hu: ["Beli Most (Fehér híd)", "Pašin Konak", "Bora Stanković szülőhelye"],
      ro: ["Beli Most (Podul Alb)", "Pašin Konak", "Locul de naștere al lui Bora Stanković"],
      en: ["Beli Most (White Bridge)", "Pasha's Residence", "Birthplace of Bora Stanković"]
    },
    descriptionAdvanced: {
      de: "Vranje ist das wirtschaftliche und kulturelle Zentrum Südserbiens, nahe der Grenze zu Nordmazedonien. Die Stadt ist bekannt für ihr reiches osmanisches Erbe, das sich in der Architektur und der lokalen Musik widerspiegelt. Vranje war die Heimat des berühmten Schriftstellers Borisav Stanković, dessen Werk das Leben der Stadt im 19. Jahrhundert beschreibt.",
      hu: "Vranje Dél-Szerbia gazdasági és kulturális központja, közel az észak-macedón határhoz. A város híres gazdag oszmán örökségéről, amely az építészetben és a helyi zenében is megmutatkozik. Vranje volt a szülőhelye Borisav Stanković írónak, akinek művei a 19. századi városi életet örökítették meg.",
      ro: "Vranje este centrul economic și cultural al Serbiei de Sud, situat aproape de granița cu Macedonia de Nord. Orașul este cunoscut pentru moștenirea sa otomană bogată, reflectată în arhitectură și în muzica locală. Vranje a fost casa celebrului scriitor Borisav Stanković, a cărui operă descrie viața orașului în secolul al XIX-lea.",
      en: "Vranje is the economic and cultural hub of southern Serbia, located near the border with North Macedonia. The city is famous for its rich Ottoman heritage, evident in its architecture and traditional music. Vranje was the birthplace of the renowned writer Borisav Stanković, whose works vividly depict 19th-century city life.",
    },
    factsAdvanced: {
      de: ["Die Weiße Brücke (Beli most) wurde 1844 errichtet", "Das Amam ist ein türkisches Bad aus dem 17. Jahrhundert", "Vranje wurde im Jahr 1093 erstmals schriftlich erwähnt", "Borisav Stanković wurde hier im Jahr 1876 geboren", "Die Festung Markovo Kale stammt aus dem 14. Jahrhundert", "Vranje liegt etwa 350 Kilometer südlich von Belgrad"],
      hu: ["A Fehér hidat (Beli most) 1844-ben építették", "Az Amam egy 17. századi török fürdő épülete", "Vranjét először 1093-ban említik írásban", "Borisav Stanković 1876-ban született a városban", "Markovo Kale vára a 14. századból származik", "Vranje körülbelül 350 kilométerre fekszik Belgrádtól"],
      ro: ["Podul Alb (Beli most) a fost construit în anul 1844", "Amam este o baie turcească ce datează din secolul XVII", "Vranje a fost menționat în scris pentru prima dată în 1093", "Borisav Stanković s-a născut aici în anul 1876", "Cetatea Markovo Kale datează din secolul al XIV-lea", "Vranje se află la aproximativ 350 km sud de Belgrad"],
      en: ["The White Bridge (Beli most) was built in 1844", "The Amam is a Turkish bath dating back to the 17th century", "Vranje was first mentioned in writing in 1093", "Borisav Stanković was born here in 1876", "The Markovo Kale fortress dates back to the 14th century", "Vranje is located about 350 kilometers south of Belgrade"],
    },
  },
  {
    id: "RS-004-prohor-pcinjski",
    type: "historical",
    parent: "RS-004",
    coords: [21.8950, 42.3294],
    name: { de: "Kloster Prohor Pčinjski", hu: "Prohor Pčinjski kolostor", ro: "Mănăstirea Prohor Pčinjski", en: "Prohor Pčinjski Monastery" },
    description: {
      de: "Ein serbisch-orthodoxes Kloster aus dem 11. Jahrhundert in der Nähe der Grenze zu Nordmazedonien.",
      hu: "11. századi szerb ortodox kolostor az észak-macedón határ közelében.",
      ro: "O mănăstire ortodoxă sârbă din secolul al XI-lea, situată lângă granița cu Macedonia de Nord.",
      en: "An 11th-century Serbian Orthodox monastery located near the border with North Macedonia."
    },
    facts: {
      de: ["Gegründet von Kaiser Romanos IV.", "Geistiges Zentrum", "Inmitten unberührter Natur"],
      hu: ["IV. Rómanosz császár alapította", "Szellemi központ", "Érintetlen természetben"],
      ro: ["Fondată de împăratul Romanos al IV-lea", "Centru spiritual", "În mijlocul naturii virgine"],
      en: ["Founded by Emperor Romanos IV", "Spiritual center", "In untouched nature"]
    }, image: "/poi-images/RS-004-prohor-pcinjski.webp",
    descriptionAdvanced: {
      de: "Das Kloster Prohor Pčinjski liegt an den Hängen des Kozjak-Gebirges am Ufer des Flusses Pčinja. Es wurde im 11. Jahrhundert vom byzantinischen Kaiser Romanos IV. Diogenes gegründet und ist dem heiligen Prohor gewidmet. Das Kloster spielte eine wichtige Rolle in der Geschichte der Region und beherbergt bedeutende Reliquien.",
      hu: "A Prohor Pčinjski-kolostor a Kozjak-hegység lejtőin, a Pčinja-folyó partján található. A 11. században alapította IV. Rómanosz Diogenész bizánci császár, és Szent Prohornak szentelték. A kolostor fontos szerepet játszott a régió történelmében, és jelentős ereklyéknek ad otthont.",
      ro: "Mănăstirea Prohor Pčinjski este situată pe pantele muntelui Kozjak, pe malul râului Pčinja. A fost fondată în secolul al XI-lea de împăratul bizantin Roman al IV-lea Diogene și este dedicată Sfântului Prohor. Mănăstirea a jucat un rol vital în istoria regiunii și adăpostește relicve importante.",
      en: "The Prohor Pčinjski Monastery is situated on the slopes of the Kozjak Mountain by the Pčinja River. Founded in the 11th century by Byzantine Emperor Romanos IV Diogenes, it is dedicated to Saint Prohor. The monastery has played a crucial role in the region's history and houses significant religious relics.",
    },
    factsAdvanced: {
      de: ["Das Kloster wurde um das Jahr 1070 gegründet", "König Milutin ließ das Kloster im 14. Jahrhundert renovieren", "Es liegt direkt an der Grenze zu Nordmazedonien", "Die erste Sitzung der ASNOM fand hier 1944 statt", "Das Kloster beherbergt die Reliquien des Hl. Prohor", "Es dient seit Jahrhunderten als geistliches Zentrum"],
      hu: ["A kolostort 1070 körül alapították", "Milutin király a 14. században újíttatta fel az épületet", "Közvetlenül az észak-macedón határ mellett található", "Itt tartották az ASNOM első ülését 1944-ben", "A kolostor őrzi Szent Prohor Pčinjski ereklyéit", "Évszázadok óta fontos szellemi és oktatási központ"],
      ro: ["Mănăstirea a fost fondată în jurul anului 1070", "Regele Milutin a renovat mănăstirea în secolul XIV", "Se află chiar lângă granița cu Macedonia de Nord", "Prima sesiune a ASNOM a avut loc aici în 1944", "Mănăstirea adăpostește moaștele Sfântului Prohor", "Servește ca centru spiritual important de secole"],
      en: ["The monastery was founded around the year 1070", "King Milutin renovated the monastery in the 14th century", "It is located right next to the North Macedonian border", "The first session of ASNOM was held here in 1944", "The monastery houses the relics of Saint Prohor", "It has served as a spiritual center for centuries"],
    },
  },
  // RS-005 Borski
  {
    id: "RS-005-bor",
    type: "city",
    parent: "RS-005",
    coords: [22.1000, 44.0667],
    name: { de: "Bor", hu: "Bor", ro: "Bor", en: "Bor" },
    description: {
      de: "Ein wichtiges Bergbau- und Industriezentrum im Osten Serbiens, bekannt für seine Kupferminen.",
      hu: "Fontos bányászati és ipari központ Kelet-Szerbiában, rézbányáiról ismert.",
      ro: "Un important centru minier și industrial în estul Serbiei, cunoscut pentru minele sale de cupru.",
      en: "An important mining and industrial center in eastern Serbia, known for its copper mines."
    },
    facts: {
      de: ["Kupfertagebau", "Industrieerbe", "Nahegelegener Bor-See"],
      hu: ["Külszíni rézbánya", "Ipari örökség", "Közeli Bori-tó"],
      ro: ["Exploatare de cupru în carieră", "Moștenire industrială", "Lacul Bor din apropiere"],
      en: ["Copper open-pit mine", "Industrial heritage", "Nearby Lake Bor"]
    },
    descriptionAdvanced: {
      de: "Bor ist eine bedeutende Industriestadt im Osten Serbiens, die vor allem für ihren Kupferbergbau bekannt ist. Die Erschließung der Mine durch George Weifert im frühen 20. Jahrhundert prägte das Stadtbild und die Wirtschaft der Region. Bor liegt inmitten einer bergigen Landschaft und bietet Zugang zu Naturschönheiten wie dem Bor-See.",
      hu: "Bor egy jelentős iparváros Kelet-Szerbiában, amely elsősorban rézbányászatáról ismert. A bánya 20. század eleji feltárása George Weifert által meghatározta a város képét és a régió gazdaságát. Bor hegyvidéki környezetben fekszik, és közel van olyan természeti látnivalókhoz, mint a Bori-tó.",
      ro: "Bor este un oraș industrial important din estul Serbiei, cunoscut în special pentru mineritul de cupru. Dezvoltarea minei de către George Weifert la începutul secolului XX a modelat imaginea orașului și economia regiunii. Bor este situat într-un peisaj montan și oferă acces la atracții naturale precum lacul Bor.",
      en: "Bor is a significant industrial city in eastern Serbia, primarily known for its copper mining. The development of the mine by George Weifert in the early 20th century shaped the city's identity and the region's economy. Nestled in a mountainous landscape, Bor provides access to natural beauties like Bor Lake.",
    },
    factsAdvanced: {
      de: ["Der systematische Bergbau begann im Jahr 1903", "George Weifert erhielt 1903 die Konzession für die Mine", "Die RTB Bor ist eines der größten Kupferbergwerke Europas", "Der Bor-See (Borsko jezero) entstand 1959 künstlich", "Die Stadt liegt am Fuße des Crni-Vrh-Gebirges", "In Bor befindet sich eine technische Fakultät für Bergbau"],
      hu: ["A szisztematikus bányászat 1903-ban kezdődött", "George Weifert 1903-ban kapott koncessziót a bányára", "Az RTB Bor Európa egyik legnagyobb rézbányája", "A Bori-tó (Borsko jezero) 1959-ben jött létre mesterségesen", "A város a Crni Vrh-hegység lábánál fekszik", "Borból indul az út a Lazarev-barlang felé"],
      ro: ["Mineritul sistematic a început în anul 1903", "George Weifert a primit concesiunea minei în 1903", "RTB Bor este una dintre cele mai mari mine de cupru din Europa", "Lacul Bor (Borsko jezero) a fost creat artificial în 1959", "Orașul este situat la poalele muntelui Crni Vrh", "Bor găzduiește o facultate tehnică de minerit"],
      en: ["Systematic mining began in the year 1903", "George Weifert received the mine concession in 1903", "RTB Bor is one of the largest copper mines in Europe", "Bor Lake (Borsko jezero) was artificially created in 1959", "The city is located at the foot of the Crni Vrh mountain", "Bor is home to a technical faculty for mining"],
    },
  },
  {
    id: "RS-005-negotin",
    type: "city",
    parent: "RS-005",
    coords: [22.5300, 44.2264],
    name: { de: "Negotin", hu: "Negotin", ro: "Negotin", en: "Negotin" },
    description: {
      de: "Eine Stadt im Dreiländereck Serbien-Bulgarien-Rumänien, berühmt für ihre Weinbautradition.",
      hu: "Város a szerb-bolgár-román hármashatárnál, híres bortermelési hagyományairól.",
      ro: "Un oraș situat la granița dintre Serbia, Bulgaria și România, faimos pentru tradiția viticolă.",
      en: "A city near the triple border of Serbia, Bulgaria, and Romania, famous for its wine-making tradition."
    },
    facts: {
      de: ["Negotiner Weinkeller", "Heimat von Stevan Mokranjac", "Nahe dem Eisernen Tor"],
      hu: ["Negotini borpincék", "Stevan Mokranjac hazája", "A Vaskapu közelében"],
      ro: ["Cramele din Negotin", "Casa lui Stevan Mokranjac", "Lângă Porțile de Fier"],
      en: ["Negotin wine cellars", "Home of Stevan Mokranjac", "Near the Iron Gates"]
    }, image: "/poi-images/RS-005-negotin.webp",
    descriptionAdvanced: {
      de: "Negotin liegt im Dreiländereck von Serbien, Bulgarien und Rumänien in der fruchtbaren Region Negotinska Krajina. Die Stadt ist berühmt für ihren Weinbau und die historischen Rajačke Pimnice, eine Ansammlung alter Weinkeller. Negotin ist zudem der Geburtsort des Komponisten Stevan Mokranjac und bewahrt ein reiches kulturelles Erbe.",
      hu: "Negotin Szerbia, Bulgária és Románia hármashatáránál fekszik, a termékeny Negotini Krajina régióban. A város híres borászatáról és a történelmi Rajaci Pimnicéről, amely régi borospincék együttese. Negotin Stevan Mokranjac zeneszerző szülőhelye, és gazdag kulturális örökséggel rendelkezik.",
      ro: "Negotin este situat la granița dintre Serbia, Bulgaria și România, în regiunea fertilă Negotinska Krajina. Orașul este faimos pentru viticultură și pentru istoricele Rajačke Pimnice, un ansamblu de crame vechi. Negotin este, de asemenea, locul de naștere al compozitorului Stevan Mokranjac și păstrează un patrimoniu cultural bogat.",
      en: "Negotin is located at the tri-border area of Serbia, Bulgaria, and Romania in the fertile Negotinska Krajina region. The town is famous for its viticulture and the historical Rajačke Pimnice, a complex of traditional wine cellars. Negotin is also the birthplace of composer Stevan Mokranjac and preserves a rich cultural heritage.",
    },
    factsAdvanced: {
      de: ["Negotin war im 19. Jh. ein wichtiges Handelszentrum", "Die Rajačke Pimnice stammen aus dem 18. und 19. Jh.", "Stevan Mokranjac wurde hier im Jahr 1856 geboren", "Das Denkmal für Hajduk Veljko ehrt einen Helden von 1813", "Das Kloster Bukovo liegt nur wenige Kilometer entfernt", "Die Region ist für ihre autochthonen Rebsorten bekannt"],
      hu: ["Negotin a 19. században fontos kereskedelmi központ volt", "A Rajaci Pimnice a 18. és 19. századból származik", "Stevan Mokranjac 1856-ban született a városban", "Hajduk Veljko emlékműve az 1813-as hősnek állít emléket", "A Bukovo-kolostor mindössze néhány kilométerre található", "A régió híres az őshonos szőlőfajtáiról"],
      ro: ["Negotin a fost un centru comercial vital în secolul XIX", "Rajačke Pimnice datează din secolele XVIII și XIX", "Stevan Mokranjac s-a născut aici în anul 1856", "Monumentul lui Hajduk Veljko onorează un erou din 1813", "Mănăstirea Bukovo se află la doar câțiva kilometri distanță", "Regiunea este cunoscută pentru soiurile sale de viță indigene"],
      en: ["Negotin was a vital trade center in the 19th century", "The Rajačke Pimnice date from the 18th and 19th centuries", "Stevan Mokranjac was born here in 1856", "The Hajduk Veljko monument honors a hero from 1813", "The Bukovo Monastery is located just a few kilometers away", "The region is known for its indigenous grape varieties"],
    },
  },
  // RS-006 Zajecarski
  {
    id: "RS-006-zajecar",
    type: "city",
    parent: "RS-006",
    coords: [22.2800, 43.9000],
    name: { de: "Zaječar", hu: "Zaječar", ro: "Zaječar", en: "Zaječar" },
    description: {
      de: "Das administrative Zentrum des Bezirks Zaječar, bekannt für seine kulturellen Veranstaltungen und Geschichte.",
      hu: "A Zaječar körzet közigazgatási központja, amely kulturális eseményeiről és történelméről ismert.",
      ro: "Centrul administrativ al districtului Zaječar, cunoscut pentru evenimentele sale culturale și istorie.",
      en: "The administrative center of the Zaječar district, known for its cultural events and history."
    },
    facts: {
      de: ["Gitarijada Rockfestival", "Nationalmuseum", "Tor nach Ostserbien"],
      hu: ["Gitarijada rockfesztivál", "Nemzeti Múzeum", "Kelet-Szerbia kapuja"],
      ro: ["Festivalul de rock Gitarijada", "Muzeul Național", "Poarta către estul Serbiei"],
      en: ["Gitarijada rock festival", "National Museum", "Gateway to eastern Serbia"]
    },
    descriptionAdvanced: {
      de: "Zaječar ist das administrative Zentrum des Bezirks Zaječar im Osten Serbiens. Die Stadt ist vor allem für die nahegelegene antike Fundstätte Felix Romuliana bekannt, die zum UNESCO-Welterbe gehört. Zaječar ist zudem Gastgeber der traditionsreichen Gitarijada, eines der ältesten Rockfestivals in Südosteuropa, das jährlich Tausende Besucher anzieht.",
      hu: "Zaječar Kelet-Szerbia egyik közigazgatási központja. A város elsősorban a közeli Felix Romuliana ókori lelőhelyről ismert, amely az UNESCO Világörökség része. Zaječar ad otthont a Gitarijada fesztiválnak is, amely Délkelet-Európa egyik legrégebbi rockfesztiválja, és évente több ezer látogatót vonz.",
      ro: "Zaječar este centrul administrativ al districtului Zaječar din estul Serbiei. Orașul este cunoscut în principal pentru situl antic Felix Romuliana, situat în apropiere, care face parte din patrimoniul UNESCO. Zaječar găzduiește, de asemenea, Gitarijada, unul dintre cele mai vechi festivaluri rock din Europa de Sud-Est.",
      en: "Zaječar is the administrative center of the Zaječar District in eastern Serbia. The city is best known for the nearby ancient site of Felix Romuliana, a UNESCO World Heritage Site. Zaječar also hosts the Gitarijada, one of the oldest rock festivals in Southeastern Europe, drawing thousands of visitors annually.",
    },
    factsAdvanced: {
      de: ["Zaječar wurde im Jahr 1466 erstmals urkundlich erwähnt", "Felix Romuliana liegt etwa 11 Kilometer entfernt", "Die Gitarijada findet seit dem Jahr 1966 statt", "Das Nationalmuseum Zaječar wurde 1951 gegründet", "Die Stadt liegt am Zusammenfluss zweier Timok-Arme", "Das Radul-Bey-Konak ist ein Beispiel osmanischer Architektur"],
      hu: ["Zaječart először 1466-ban említik dokumentumok", "Felix Romuliana körülbelül 11 kilométerre található", "A Gitarijada fesztivál 1966 óta kerül megrendezésre", "A Zaječari Nemzeti Múzeumot 1951-ben alapították", "A város a Timok folyó két ágának találkozásánál fekszik", "A Radul-bég konakja az oszmán építészet szép példája"],
      ro: ["Zaječar a fost menționat documentar prima dată în 1466", "Felix Romuliana se află la aproximativ 11 kilometri", "Festivalul Gitarijada se desfășoară din anul 1966", "Muzeul Național din Zaječar a fost fondat în 1951", "Orașul este situat la confluența celor două brațe ale Timokului", "Radul-Bey Konak este un exemplu de arhitectură otomană"],
      en: ["Zaječar was first mentioned in documents in 1466", "Felix Romuliana is located about 11 kilometers away", "The Gitarijada festival has been held since 1966", "The Zaječar National Museum was established in 1951", "The city lies at the confluence of two Timok river branches", "Radul-Bey's Konak is a prime example of Ottoman architecture"],
    },
  },
  // RS-007 Pirotski
  {
    id: "RS-007-pirot",
    type: "city",
    parent: "RS-007",
    coords: [22.5861, 43.1556],
    name: { de: "Pirot", hu: "Pirot", ro: "Pirot", en: "Pirot" },
    description: {
      de: "Eine Stadt im Südosten Serbiens, berühmt für ihre handgewebten Teppiche (Kilims) und Käsespezialitäten.",
      hu: "Délkelet-szerbiai város, amely kézzel szőtt szőnyegeiről (kilim) és sajtkülönlegességeiről híres.",
      ro: "Un oraș în sud-estul Serbiei, faimos pentru covoarele sale țesute manual (kilim) și specialitățile de brânză.",
      en: "A city in southeastern Serbia, famous for its hand-woven carpets (kilims) and cheese specialties."
    },
    facts: {
      de: ["Piroter Kilim", "Festung Momčilov Grad", "Käse von Pirot"],
      hu: ["Piroti kilim (szőnyeg)", "Momčilov Grad erőd", "Piroti sajt"],
      ro: ["Kilim de Pirot", "Cetatea Momčilov Grad", "Brânză de Pirot"],
      en: ["Pirot kilim", "Momčilov Grad Fortress", "Pirot cheese"]
    },
    descriptionAdvanced: {
      de: "Pirot liegt im Südosten Serbiens am Fuße des Stara-Planina-Gebirges. Die Stadt ist berühmt für ihre handgewebten Teppiche, die Pirotski Ćilim, und den würzigen Piroter Käse. Die mittelalterliche Festung von Pirot, auch bekannt als Momčilov Grad, zeugt von der strategischen Bedeutung der Stadt entlang der historischen Via Militaris.",
      hu: "Pirot Délkelet-Szerbiában, a Stara Planina-hegység lábánál fekszik. A város híres kézzel szőtt szőnyegeiről (Piroti Ćilim) és a fűszeres piroti sajtról. A középkori piroti erőd, más néven Momčilov Grad, a város stratégiai jelentőségét tanúsítja a történelmi Via Militaris mentén.",
      ro: "Pirot este situat în sud-estul Serbiei, la poalele munților Stara Planina. Orașul este renumit pentru covoarele sale țesute manual, Pirotski Ćilim, și pentru brânza picantă de Pirot. Cetatea medievală din Pirot, cunoscută și sub numele de Momčilov Grad, atestă importanța strategică a orașului de-a lungul istoricei Via Militaris.",
      en: "Pirot is located in southeastern Serbia at the foot of the Stara Planina mountain range. The city is famous for its hand-woven rugs, Pirot Kilims, and the sharp Pirot cheese. The medieval Pirot Fortress, also known as Momčilov Grad, testifies to the city's strategic importance along the historic Via Militaris route.",
    },
    factsAdvanced: {
      de: ["Die Festung Pirot stammt aus dem 14. Jahrhundert", "Piroter Teppiche sind als geografische Angabe geschützt", "Die Stadt war ein wichtiger Stopp an der Via Militaris", "Pirot wurde 1877 von der osmanischen Herrschaft befreit", "Der Nišava-Fluss fließt mitten durch die Stadt", "Pirot ist bekannt für die Herstellung von Gummiprodukten"],
      hu: ["A piroti erőd a 14. századból származik", "A piroti szőnyeg védett földrajzi jelzéssel rendelkezik", "A város a Via Militaris egyik fontos állomása volt", "Pirot 1877-ben szabadult fel az oszmán uralom alól", "A Nišava-folyó keresztülfolyik a város központján", "Pirot híres a gumitermékek gyártásáról is (Tigar)"],
      ro: ["Cetatea Pirot datează din secolul al XIV-lea", "Covoarele de Pirot sunt protejate ca indicație geografică", "Orașul a fost o oprire importantă pe Via Militaris", "Pirot a fost eliberat de sub dominația otomană în 1877", "Râul Nišava traversează centrul orașului", "Pirot este cunoscut pentru producția de articole din cauciuc"],
      en: ["The Pirot Fortress dates back to the 14th century", "Pirot Kilims are protected as a geographical indication", "The city was a significant stop on the Via Militaris", "Pirot was liberated from Ottoman rule in 1877", "The Nišava River flows through the heart of the city", "Pirot is well-known for its rubber industry (Tigar)"],
    },
  },
  {
    id: "RS-007-stara-planina",
    type: "mountain",
    parent: "RS-007",
    coords: [22.6000, 43.3700],
    name: { de: "Stara Planina", hu: "Balkán-hegység (Stara Planina)", ro: "Munții Stara Planina", en: "Stara Planina" },
    description: {
      de: "Ein majestätisches Gebirge an der Grenze zu Bulgarien, bekannt für unberührte Natur und Wasserfälle.",
      hu: "Fenséges hegység a bolgár határon, érintetlen természetéről és vízeséseiről ismert.",
      ro: "Un munte majestuos la granița cu Bulgaria, cunoscut pentru natura sa virgină și cascadele sale.",
      en: "A majestic mountain range on the border with Bulgaria, known for untouched nature and waterfalls."
    },
    facts: {
      de: ["Höchster Gipfel: Midžor", "Wintersportzentrum", "Zahlreiche Wasserfälle"],
      hu: ["Legmagasabb csúcs: Midžor", "Téli sportközpont", "Számos vízesés"],
      ro: ["Cel mai înalt vârf: Midžor", "Centru de sporturi de iarnă", "Numeroase cascade"],
      en: ["Highest peak: Midžor", "Winter sports center", "Numerous waterfalls"]
    }, image: "/poi-images/RS-007-stara-planina.webp",
    descriptionAdvanced: {
      de: "Die Stara Planina, auch als Balkangebirge bekannt, erstreckt sich entlang der Grenze zwischen Serbien und Bulgarien. Sie ist das größte Gebirge Ostserbiens und beherbergt den Midžor, den höchsten Gipfel Zentralserbiens. Die Region ist ein Paradies für Naturliebhaber und Wintersportler, bekannt für ihre unberührten Landschaften und zahlreichen Wasserfälle.",
      hu: "A Stara Planina, más néven Balkán-hegység, Szerbia és Bulgária határán húzódik. Ez Kelet-Szerbia legnagyobb hegysége, itt található a Midžor, Közép-Szerbia legmagasabb csúcsa. A régió a természetkedvelők és a téli sportok kedvelőinek paradicsoma, érintetlen tájairól és számos vízeséséről híres.",
      ro: "Stara Planina, cunoscută și sub numele de Munții Balcani, se întinde de-a lungul graniței dintre Serbia și Bulgaria. Este cel mai mare lanț muntos din estul Serbiei și găzduiește Midžor, cel mai înalt vârf din Serbia centrală. Regiunea este un paradis pentru iubitorii de natură și sporturi de iarnă, faimoasă pentru peisajele virgine.",
      en: "Stara Planina, also known as the Balkan Mountains, stretches along the border between Serbia and Bulgaria. It is the largest mountain range in eastern Serbia and home to Midžor, the highest peak in Central Serbia. The region is a haven for nature lovers and winter sports enthusiasts, renowned for its untouched landscapes and numerous waterfalls.",
    },
    factsAdvanced: {
      de: ["Der Midžor-Gipfel liegt auf einer Höhe von 2.169 Metern", "Die Gebirgskette ist etwa 530 Kilometer lang", "Der Naturpark Stara Planina wurde 1997 eingerichtet", "Es gibt über 1.200 verschiedene Pflanzenarten hier", "Die Region beherbergt den höchsten Wasserfall Serbiens", "Jabučko Ravnište ist ein modernes Skizentrum"],
      hu: ["A Midžor-csúcs 2169 méter tengerszint feletti magasságban van", "A hegylánc teljes hossza körülbelül 530 kilométer", "A Stara Planina Natúrparkot 1997-ben hozták létre", "Több mint 1200 különböző növényfaj él a területen", "Itt található Szerbia legmagasabb vízesése (Kaluđerski skokovi)", "Jabučko Ravnište a hegység modern síközpontja"],
      ro: ["Vârful Midžor se află la o altitudine de 2.169 metri", "Lanțul muntos are o lungime de aproximativ 530 km", "Parcul Natural Stara Planina a fost înființat în 1997", "Există peste 1.200 de specii de plante diferite aici", "Regiunea găzduiește cea mai înaltă cascadă din Serbia", "Jabučko Ravnište este un centru de schi modern"],
      en: ["The Midžor peak reaches an altitude of 2,169 meters", "The mountain range is approximately 530 kilometers long", "The Stara Planina Nature Park was established in 1997", "Over 1,200 different plant species can be found here", "The region is home to Serbia's highest waterfall", "Jabučko Ravnište is a modern ski resort center"],
    },
  },
  // RS-008 Jablanicki
  {
    id: "RS-008-leskovac",
    type: "city",
    parent: "RS-008",
    coords: [21.9461, 42.9981],
    name: { de: "Leskovac", hu: "Leskovac", ro: "Leskovac", en: "Leskovac" },
    description: {
      de: "Ein Zentrum in Südserbien, weltbekannt für seine Grillspezialitäten und das jährliche Grillfest 'Roštiljijada'.",
      hu: "Dél-szerbiai központ, világszerte ismert grillételeiről és az évenkénti 'Roštiljijada' grillfesztiválról.",
      ro: "Un centru din sudul Serbiei, cunoscut în întreaga lume pentru specialitățile sale la grătar și festivalul anual 'Roštiljijada'.",
      en: "A center in southern Serbia, world-famous for its grill specialties and the annual 'Roštiljijada' grill festival."
    },
    facts: {
      de: ["Grill-Hauptstadt", "Roštiljijada Festival", "Historische Textilindustrie"],
      hu: ["A grill fővárosa", "Roštiljijada fesztivál", "Történelmi textilipar"],
      ro: ["Capitala grătarului", "Festivalul Roštiljijada", "Industrie textilă istorică"],
      en: ["Grill capital", "Roštiljijada festival", "Historical textile industry"]
    },
    descriptionAdvanced: {
      de: "Leskovac ist eine bedeutende Stadt im Süden Serbiens, die am Fluss Veternica liegt. Im 19. Jahrhundert wurde sie aufgrund ihrer florierenden Textilindustrie als \"Serbisches Manchester\" bezeichnet. Heute ist Leskovac weltweit für die Roštiljijada bekannt, ein jährliches Grillfest, bei dem die berühmte Leskovacer Grillküche gefeiert wird.",
      hu: "Leskovac egy jelentős város Dél-Szerbiában, a Veternica-folyó partján. A 19. században virágzó textilipara miatt \"Szerb Manchesterként\" emlegették. Ma Leskovac világszerte ismert a Roštiljijada fesztiválról, amely egy éves grillezési ünnep, ahol a híres leskovaci grillételeket készítik.",
      ro: "Leskovac este un oraș important din sudul Serbiei, situat pe râul Veternica. În secolul al XIX-lea, a fost supranumit \"Manchesterul sârbesc\" datorită industriei sale textile înfloritoare. Astăzi, Leskovac este cunoscut la nivel mondial pentru Roštiljijada, un festival anual de grătar care celebrează bucătăria locală.",
      en: "Leskovac is a prominent city in southern Serbia, situated on the Veternica River. In the 19th century, it was known as the \"Serbian Manchester\" due to its thriving textile industry. Today, Leskovac is world-famous for Roštiljijada, an annual barbecue festival that celebrates the renowned Leskovac grill cuisine.",
    },
    factsAdvanced: {
      de: ["Die Roštiljijada zieht jährlich über 500.000 Besucher an", "Die Stadt wurde 1308 erstmals urkundlich erwähnt", "Leskovac besaß 1903 eines der ersten Kraftwerke Serbiens", "Der Hisar-Hügel beherbergt eine archäologische Stätte", "Die Stadt liegt im Zentrum des Jablanica-Bezirks", "Leskovac ist berühmt für seine Paprika-Spezialitäten"],
      hu: ["A Roštiljijada évente több mint 500 000 látogatót vonz", "A várost először 1308-ban említik dokumentumok", "Leskovacban épült az egyik első szerb erőmű 1903-ban", "A Hisar-hegyen jelentős régészeti lelőhely található", "A város a Jablanica körzet központja", "Leskovac híres a fűszerpaprikájáról és az ajvárról"],
      ro: ["Roštiljijada atrage anual peste 500.000 de vizitatori", "Orașul a fost menționat documentar prima dată în 1308", "Leskovac a avut una dintre primele centrale electrice în 1903", "Dealul Hisar găzduiește un sit arheologic important", "Orașul este centrul districtului Jablanica", "Leskovac este faimos pentru specialitățile sale de ardei"],
      en: ["The Roštiljijada draws over 500,000 visitors annually", "The city was first mentioned in documents in 1308", "Leskovac had one of the first power plants in Serbia in 1903", "Hisar Hill is home to a significant archaeological site", "The city is the center of the Jablanica District", "Leskovac is famous for its paprika and ajvar specialties"],
    },
  },
  {
    id: "RS-008-caricin-grad",
    type: "historical",
    parent: "RS-008",
    coords: [21.6700, 42.9500],
    name: { de: "Caričin Grad", hu: "Caričin Grad (Justiniana Prima)", ro: "Caričin Grad", en: "Caričin Grad" },
    description: {
      de: "Die Ruinen der byzantinischen Stadt Justiniana Prima, erbaut von Kaiser Justinian I. im 6. Jahrhundert.",
      hu: "Justiniana Prima bizánci város romjai, amelyet I. Justinianus császár építtetett a 6. században.",
      ro: "Ruinele orașului bizantin Justiniana Prima, construit de împăratul Iustinian I în secolul al VI-lea.",
      en: "The ruins of the Byzantine city Justiniana Prima, built by Emperor Justinian I in the 6th century."
    },
    facts: {
      de: ["Bedeutende archäologische Stätte", "Frühchristliche Basiliken", "Geplante Stadt"],
      hu: ["Jelentős régészeti lelőhely", "Korakeresztény bazilikák", "Tervezett város"],
      ro: ["Sit arheologic important", "Bazilici creștine timpurii", "Oraș planificat"],
      en: ["Important archaeological site", "Early Christian basilicas", "Planned city"]
    }, image: "/poi-images/RS-008-caricin-grad.webp",
    descriptionAdvanced: {
      de: "Caričin Grad, auch bekannt als Justiniana Prima, ist eine bedeutende archäologische Stätte im Süden Serbiens bei Lebane. Die Stadt wurde im 6. Jahrhundert vom byzantinischen Kaiser Justinian I. in der Nähe seines Geburtsortes gegründet. Sie war ein wichtiges kirchliches und administratives Zentrum, bevor sie im frühen 7. Jahrhundert verlassen wurde.",
      hu: "Caričin Grad, más néven Justiniana Prima, egy jelentős régészeti lelőhely Dél-Szerbiában, Lebane közelében. A várost a 6. században alapította I. Iusztinianosz bizánci császár a szülőhelye közelében. Fontos egyházi és közigazgatási központ volt, mielőtt a 7. század elején elhagyták.",
      ro: "Caričin Grad, cunoscut și sub numele de Justiniana Prima, este un sit arheologic major din sudul Serbiei, lângă Lebane. Orașul a fost fondat în secolul al VI-lea de împăratul bizantin Iustinian I, aproape de locul său de naștere. A fost un centru ecleziastic și administrativ vital înainte de a fi părăsit în secolul VII.",
      en: "Caričin Grad, also known as Justiniana Prima, is a major archaeological site in southern Serbia near Lebane. The city was founded in the 6th century by Byzantine Emperor Justinian I near his birthplace. It served as a vital ecclesiastical and administrative center before being abandoned in the early 7th century.",
    },
    factsAdvanced: {
      de: ["Die Stadt wurde zwischen 535 und 545 n. Chr. erbaut", "Justiniana Prima war Sitz eines Erzbistums", "Die Ausgrabungsstätte umfasst eine Akropolis und Unterstadt", "Ein 20 km langes Aquädukt versorgte die Stadt mit Wasser", "Zahlreiche Mosaike wurden in der Basilika entdeckt", "Die Stadt wurde um das Jahr 615 von Slawen zerstört"],
      hu: ["A várost i.sz. 535 és 545 között építették", "Justiniana Prima egy érsekség székhelye volt", "A lelőhely egy akropoliszból és egy alsóvárosból áll", "Egy 20 km hosszú akvadukt biztosította a vízellátást", "A bazilikában számos értékes mozaikot fedeztek fel", "A várost 615 körül a szlávok és avarok pusztították el"],
      ro: ["Orașul a fost construit între anii 535 și 545 d.Hr.", "Justiniana Prima a fost sediul unei arhiepiscopii", "Situl cuprinde o acropolă și un oraș de jos", "Un apeduct de 20 km furniza apă orașului", "Numeroase mozaicuri au fost descoperite în bazilică", "Orașul a fost distrus de slavi în jurul anului 615"],
      en: ["The city was built between 535 and 545 AD", "Justiniana Prima was the seat of an archbishopric", "The site consists of an acropolis and a lower town", "A 20 km long aqueduct supplied water to the city", "Numerous intricate mosaics were discovered in the basilica", "The city was destroyed by Slavs around the year 615"],
    },
  },
  // RS-009 Raški
  {
    id: "RS-009-kraljevo",
    type: "city",
    parent: "RS-009",
    coords: [20.6894, 43.7258],
    name: { de: "Kraljevo", hu: "Kraljevo", ro: "Kraljevo", en: "Kraljevo" },
    description: {
      de: "Eine Stadt an der Mündung des Ibar in die Westmorava, historisch eng mit der Krönung serbischer Könige verbunden.",
      hu: "Az Ibar és a Nyugati-Morava összefolyásánál fekvő város, történelmileg a szerb királyok koronázásához kötődik.",
      ro: "Un oraș la confluența râului Ibar cu Morava de Vest, legat istoric de încoronarea regilor sârbi.",
      en: "A city at the confluence of the Ibar and West Morava rivers, historically linked to the coronation of Serbian kings."
    },
    facts: {
      de: ["Stadt der Könige", "Zusammenfluss von Ibar und Morava", "Nahe Kloster Žiča"],
      hu: ["Királyok városa", "Az Ibar és Morava találkozása", "A Žiča kolostor közelében"],
      ro: ["Orașul regilor", "Confluența Ibarului cu Morava", "Lângă mănăstirea Žiča"],
      en: ["City of Kings", "Confluence of Ibar and Morava", "Near Žiča Monastery"]
    },
    descriptionAdvanced: {
      de: "Kraljevo liegt am Zusammenfluss von Ibar und Westlicher Morava in Zentralserbien. Der Name der Stadt bedeutet \"Königsstadt\" und erinnert an die Krönung serbischer Herrscher im nahegelegenen Kloster Žiča. Kraljevo ist ein wichtiger Verkehrsknotenpunkt und zeichnet sich durch seinen charakteristischen kreisförmigen Stadtplatz aus.",
      hu: "Kraljevo az Ibar és a Nyugati-Morava folyók találkozásánál fekszik Közép-Szerbiában. A város neve \"Királyvárost\" jelent, utalva a közeli Zsicsa-kolostorban koronázott szerb uralkodókra. Kraljevo fontos közlekedési csomópont, és jellegzetes kör alakú városi tere van.",
      ro: "Kraljevo este situat la confluența râurilor Ibar și Morava de Vest, în Serbia Centrală. Numele orașului înseamnă \"Orașul Regelui\", amintind de încoronarea conducătorilor sârbi la mănăstirea Žiča din apropiere. Kraljevo este un nod de transport important și are o piață centrală circulară caracteristică.",
      en: "Kraljevo is situated at the confluence of the Ibar and West Morava rivers in Central Serbia. The city's name means \"King's Town,\" commemorating the coronation of Serbian rulers at the nearby Žiča Monastery. Kraljevo is a major transportation hub and features a distinctive circular main city square.",
    },
    factsAdvanced: {
      de: ["Die Stadt erhielt 1882 ihren heutigen Namen Kraljevo", "Kraljevo liegt nur 5 km vom Kloster Žiča entfernt", "Der kreisförmige Stadtplatz wurde im 19. Jh. entworfen", "Die Stadt war früher unter dem Namen Karanovac bekannt", "Kraljevo wurde im 14. Jh. erstmals schriftlich erwähnt", "Die Festung Maglič liegt etwa 20 km südlich der Stadt"],
      hu: ["A város 1882-ben kapta mai nevét, a Kraljevót", "Kraljevo mindössze 5 km-re fekszik a Zsicsa-kolostortól", "A kör alakú főteret a 19. században tervezték", "A várost korábban Karanovac néven ismerték", "Kraljevót először a 14. században említik írásban", "Maglič vára körülbelül 20 km-re délre található"],
      ro: ["Orașul a primit numele actual, Kraljevo, în 1882", "Kraljevo se află la doar 5 km de mănăstirea Žiča", "Piața circulară a fost proiectată în secolul al XIX-lea", "Orașul era cunoscut anterior sub numele de Karanovac", "Kraljevo a fost menționat în scris pentru prima dată în secolul XIV", "Cetatea Maglič se află la 20 km sud de oraș"],
      en: ["The city received its current name, Kraljevo, in 1882", "Kraljevo is located only 5 km from the Žiča Monastery", "The circular city square was designed in the 19th century", "The city was formerly known as Karanovac", "Kraljevo was first mentioned in writing in the 14th century", "The Maglič fortress is situated 20 km south of the city"],
    },
  },
  {
    id: "RS-009-zica",
    type: "historical",
    parent: "RS-009",
    coords: [20.6450, 43.6961],
    name: { de: "Kloster Žiča", hu: "Žiča kolostor", ro: "Mănăstirea Žiča", en: "Žiča Monastery" },
    description: {
      de: "Ein leuchtend rotes Kloster aus dem 13. Jahrhundert, in dem die ersten serbischen Könige gekrönt wurden.",
      hu: "Élénkvörös, 13. századi kolostor, ahol az első szerb királyokat koronázták.",
      ro: "O mănăstire de culoare roșu aprins din secolul al XIII-lea, unde au fost încoronați primii regi sârbi.",
      en: "A bright red 13th-century monastery where the first Serbian kings were crowned."
    },
    facts: {
      de: ["Krönungskirche", "Sitz des ersten Erzbischofs", "Einzigartige rote Farbe"],
      hu: ["Koronázótemplom", "Az első érsek székhelye", "Egyedülálló vörös szín"],
      ro: ["Biserica de încoronare", "Sediul primului arhiepiscop", "Culoare roșie unică"],
      en: ["Coronation church", "Seat of the first archbishop", "Unique red color"]
    }, image: "/poi-images/RS-009-zica.webp",
    descriptionAdvanced: {
      de: "Das Kloster Žiča wurde im frühen 13. Jahrhundert von König Stefan dem Erstgekrönten und dem heiligen Sava gegründet. Es diente als Krönungskirche für sieben serbische Könige und war der erste Sitz des serbischen Erzbistums. Die charakteristischen roten Mauern des Klosters symbolisieren das Blut der christlichen Märtyrer.",
      hu: "A Zsicsa-kolostort a 13. század elején alapította I. István szerb király és Szent Száva. Hét szerb király koronázási helyszínéül szolgált, és a szerb érsekség első székhelye volt. A kolostor jellegzetes vörös falai a keresztény vértanúk vérét szimbolizálják.",
      ro: "Mănăstirea Žiča a fost fondată la începutul secolului al XIII-lea de regele Ștefan cel Prim-Încoronat și Sfântul Sava. A servit drept biserică de încoronare pentru șapte regi sârbi și a fost primul sediu al arhiepiscopiei sârbe. Zidurile roșii caracteristice simbolizează sângele martirilor creștini.",
      en: "The Žiča Monastery was founded in the early 13th century by King Stefan the First-Crowned and Saint Sava. It served as the coronation church for seven Serbian kings and was the first seat of the Serbian Archbishopric. The monastery's distinctive red walls symbolize the blood of Christian martyrs.",
    },
    factsAdvanced: {
      de: ["Das Kloster wurde zwischen 1206 und 1217 erbaut", "Hier wurden sieben Könige der Nemanjiden-Dynastie gekrönt", "Der heilige Sava wurde hier 1219 zum Erzbischof ernannt", "Die Kirche ist der Himmelfahrt Christi gewidmet", "Žiča wurde im 13. Jh. von den Mongolen schwer beschädigt", "Die roten Fassaden folgen dem Vorbild der Athos-Klöster"],
      hu: ["A kolostort 1206 és 1217 között építették", "A Nemanjić-dinasztia hét királyát koronázták itt meg", "Szent Szávát 1219-ben itt nevezték ki érseknek", "A templomot Krisztus mennybemenetelének szentelték", "A mongol invázió idején a kolostor súlyosan megsérült", "A vörös homlokzat az athoszi kolostorok mintáját követi"],
      ro: ["Mănăstirea a fost construită între anii 1206 și 1217", "Șapte regi din dinastia Nemanjić au fost încoronați aici", "Sfântul Sava a fost numit arhiepiscop aici în 1219", "Biserica este dedicată Înălțării Domnului", "Žiča a fost grav avariată de mongoli în secolul XIII", "Fațadele roșii urmează modelul mănăstirilor de pe muntele Athos"],
      en: ["The monastery was built between 1206 and 1217", "Seven kings of the Nemanjić dynasty were crowned here", "Saint Sava was appointed archbishop here in 1219", "The church is dedicated to the Ascension of Our Lord", "Žiča was heavily damaged by Mongols in the 13th century", "The red facades follow the style of Mount Athos monasteries"],
    },
  },
  // RS-010 Pomoravski
  {
    id: "RS-010-jagodina",
    type: "city",
    parent: "RS-010",
    coords: [21.2614, 43.9758],
    name: { de: "Jagodina", hu: "Jagodina", ro: "Jagodina", en: "Jagodina" },
    description: {
      de: "Eine Stadt im Herzen Zentralserbiens, bekannt für ihren großen Zoo und Wasserpark.",
      hu: "Közép-Szerbia szívében fekvő város, híres nagy állatkertjéről és aquaparkjáról.",
      ro: "Un oraș în inima Serbiei Centrale, cunoscut pentru grădina sa zoologică mare și parcul acvatic.",
      en: "A city in the heart of Central Serbia, known for its large zoo and water park."
    },
    facts: {
      de: ["Wachsfigurenkabinett", "Großer Wasserpark", "Pomoravlje-Zentrum"],
      hu: ["Panoptikum", "Nagy aquapark", "Pomoravlje központja"],
      ro: ["Muzeul figurilor de ceară", "Parc acvatic mare", "Centrul Pomoravlje"],
      en: ["Wax museum", "Large water park", "Pomoravlje center"]
    },
    descriptionAdvanced: {
      de: "Jagodina ist eine Stadt im Zentrum Serbiens im Tal des Flusses Belica. Die Stadt hat sich in den letzten Jahren zu einem bedeutenden Touristenzentrum entwickelt, vor allem durch Attraktionen wie das erste Wachsfigurenkabinett Serbiens und einen großen Aquapark. Jagodina blickt auf eine lange Industrietradition zurück, insbesondere in der Kabelherstellung.",
      hu: "Jagodina Közép-Szerbiában, a Belica-folyó völgyében fekvő város. Az utóbbi években jelentős turisztikai központtá fejlődött, főként olyan látnivalóknak köszönhetően, mint Szerbia első viaszbábú-múzeuma és egy nagy aquapark. Jagodina hosszú ipari hagyományokkal rendelkezik, különösen a kábelgyártás területén.",
      ro: "Jagodina este un oraș din centrul Serbiei, situat în valea râului Belica. În ultimii ani, orașul s-a dezvoltat ca un centru turistic important, în special datorită atracțiilor precum primul muzeu al figurilor de ceară din Serbia și un mare parc acvatic. Jagodina are o lungă tradiție industrială, mai ales în producția de cabluri.",
      en: "Jagodina is a city in central Serbia located in the valley of the Belica River. In recent years, it has emerged as a significant tourist center, driven by attractions like Serbia's first wax museum and a large aqua park. Jagodina has a long industrial heritage, particularly in the manufacturing of cables.",
    },
    factsAdvanced: {
      de: ["Jagodina wurde im Jahr 1381 erstmals erwähnt", "Das Wachsfigurenkabinett wurde 2008 eröffnet", "Der Aquapark Jagodina war der erste seiner Art in Serbien", "Die Stadt hieß von 1946 bis 1992 Svetozarevo", "Hier befindet sich eine der größten Kabelfabriken des Balkans", "Der Stadtzoo beherbergt über 80 Tierarten"],
      hu: ["Jagodinát először 1381-ben említik írásban", "A viaszbábú-múzeum 2008-ban nyitotta meg kapuit", "A jagodinai aquapark volt az első ilyen létesítmény Szerbiában", "A város 1946 és 1992 között Svetozarevo néven volt ismert", "Itt található a Balkán egyik legnagyobb kábelgyára", "A városi állatkert több mint 80 állatfajnak ad otthont"],
      ro: ["Jagodina a fost menționat documentar prima dată în 1381", "Muzeul figurilor de ceară a fost deschis în 2008", "Aqua Park Jagodina a fost primul de acest gen din Serbia", "Orașul s-a numit Svetozarevo între 1946 și 1992", "Aici se află una dintre cele mai mari fabrici de cabluri din Balcani", "Grădina zoologică găzduiește peste 80 de specii de animale"],
      en: ["Jagodina was first mentioned in documents in 1381", "The wax museum was opened in the year 2008", "Jagodina's aqua park was the first of its kind in Serbia", "The city was named Svetozarevo from 1946 to 1992", "It is home to one of the largest cable factories in the Balkans", "The city zoo houses more than 80 different animal species"],
    },
  },
  {
    id: "RS-010-manasija",
    type: "historical",
    parent: "RS-010",
    coords: [21.4689, 44.1011],
    name: { de: "Kloster Manasija", hu: "Manasija kolostor", ro: "Mănăstirea Manasija", en: "Manasija Monastery" },
    description: {
      de: "Eines der bedeutendsten Denkmäler der serbischen mittelalterlichen Kultur, umgeben von massiven Festungsmauern.",
      hu: "A szerb középkori kultúra egyik legjelentősebb emléke, hatalmas várfalakkal körülvéve.",
      ro: "Unul dintre cele mai importante monumente ale culturii medievale sârbe, înconjurat de ziduri masive de cetate.",
      en: "One of the most significant monuments of Serbian medieval culture, surrounded by massive fortress walls."
    },
    facts: {
      de: ["Gegründet von Stefan Lazarević", "Elf Verteidigungstürme", "Resava-Schule für Literatur"],
      hu: ["Stefan Lazarević alapította", "Tizenegy védőtorony", "Resava irodalmi iskola"],
      ro: ["Fondată de Stefan Lazarević", "Unsprezece turnuri de apărare", "Școala literară Resava"],
      en: ["Founded by Stefan Lazarević", "Eleven defense towers", "Resava school of literature"]
    }, image: "/poi-images/RS-010-manasija.webp",
    descriptionAdvanced: {
      de: "Das Kloster Manasija, auch als Resava bekannt, wurde im frühen 15. Jahrhundert vom Despoten Stefan Lazarević gegründet. Es ist eines der bedeutendsten Denkmäler der mittelalterlichen serbischen Kultur und bekannt für seine massiven Verteidigungsanlagen mit elf Türmen. Die Klosterschule von Resava war ein wichtiges Zentrum für die Abschrift und Übersetzung von Büchern.",
      hu: "A Manasija-kolostort, más néven Resavát, a 15. század elején alapította Stefan Lazarević despota. A középkori szerb kultúra egyik legjelentősebb műemléke, amely masszív, tizenegy toronyból álló erődítményéről ismert. A resavai kolostori iskola a könyvek másolásának és fordításának fontos központja volt.",
      ro: "Mănăstirea Manasija, cunoscută și sub numele de Resava, a fost fondată la începutul secolului al XV-lea de despotul Ștefan Lazarević. Este unul dintre cele mai importante monumente ale culturii sârbe medievale, renumit pentru fortificațiile sale masive cu unsprezece turnuri. Școala de la Resava a fost un centru vital pentru copierea și traducerea cărților.",
      en: "The Manasija Monastery, also known as Resava, was founded in the early 15th century by Despot Stefan Lazarević. It is one of the most significant monuments of medieval Serbian culture, famous for its massive fortifications featuring eleven towers. The Resava school within the monastery was a key center for copying and translating books.",
    },
    factsAdvanced: {
      de: ["Das Kloster wurde zwischen 1407 und 1418 erbaut", "Die Festungsmauer umfasst insgesamt 11 Verteidigungstürme", "Die Kirche ist der Heiligen Dreifaltigkeit gewidmet", "Hier befindet sich das Grabmal von Despot Stefan Lazarević", "Die Fresken gehören zu den schönsten der Morava-Schule", "Manasija liegt in der Nähe der Stadt Despotovac"],
      hu: ["A kolostort 1407 és 1418 között építették", "Az erődítmény fala összesen 11 védőtoronyból áll", "A templomot a Szentháromságnak szentelték", "Itt található Stefan Lazarević despota sírhelye", "A freskók a Morava-stílus legszebb alkotásai közé tartoznak", "Manasija Despotovac városa mellett található"],
      ro: ["Mănăstirea a fost construită între anii 1407 și 1418", "Zidul de fortificație include un număr de 11 turnuri", "Biserica este dedicată Sfintei Treimi", "Aici se află mormântul despotului Ștefan Lazarević", "Frescele sunt printre cele mai frumoase ale școlii de pe Morava", "Manasija este situată în apropierea orașului Despotovac"],
      en: ["The monastery was constructed between 1407 and 1418", "The fortification wall comprises 11 defensive towers", "The church is dedicated to the Holy Trinity", "It houses the tomb of Despot Stefan Lazarević", "The frescoes are among the finest of the Morava school", "Manasija is located near the town of Despotovac"],
    },
  },
  // RS-011 Toplicki
  {
    id: "RS-011-prokuplje",
    type: "city",
    parent: "RS-011",
    coords: [21.5889, 43.2339],
    name: { de: "Prokuplje", hu: "Prokuplje", ro: "Prokuplje", en: "Prokuplje" },
    description: {
      de: "Das administrative Zentrum des Bezirks Toplica, benannt nach dem Heiligen Procopius.",
      hu: "A Toplica körzet közigazgatási központja, Szent Procopiusról nevezték el.",
      ro: "Centrul administrativ al districtului Toplica, numit după Sfântul Procopie.",
      en: "The administrative center of the Toplica district, named after Saint Procopius."
    },
    facts: {
      de: ["Hisar-Hügel", "Römische Thermen", "Weinregion"],
      hu: ["Hisar-domb", "Római fürdők", "Borvidék"],
      ro: ["Dealul Hisar", "Terme romane", "Regiune viticolă"],
      en: ["Hisar Hill", "Roman baths", "Wine region"]
    },
    descriptionAdvanced: {
      de: "Prokuplje liegt im Süden Serbiens am Fluss Toplica. Die Stadt ist bekannt für die Kirche des Heiligen Prokopios aus dem 9. Jahrhundert. Auf dem Hügel Hisar befinden sich Überreste einer mittelalterlichen Festung. Die Region ist ein wichtiges Zentrum für den Weinbau und die Landwirtschaft im Bezirk Toplica.",
      hu: "Prokuplje Dél-Szerbiában, a Toplica-folyó mentén fekszik. A város legfontosabb műemléke a 9. századi Szent Prokopiosz-templom. A Hisar-dombon középkori vár maradványai láthatók. A környék jelentős mezőgazdasági központ, különösen a bortermeléséről és gyümölcstermesztéséről nevezetes.",
      ro: "Prokuplje este situat în sudul Serbiei, pe malul râului Toplica. Orașul este renumit pentru Biserica Sfântul Procopie, datând din secolul al IX-lea. Pe dealul Hisar se află ruinele unei cetăți medievale importante. Regiunea este un centru vital pentru viticultură și agricultură în districtul Toplica.",
      en: "Prokuplje is located in southern Serbia along the Toplica River. The city is famous for the 9th-century Church of Saint Procopius, one of the oldest in the country. On Hisar Hill, visitors can find ruins of a medieval fortress. The area is a key agricultural hub, particularly known for its long tradition of viticulture.",
    },
    factsAdvanced: {
      de: ["Die Kirche des Heiligen Prokopios stammt aus dem 9. bis 10. Jahrhundert.", "Die Stadt wurde nach dem heiligen Prokopios von Skythopolis benannt.", "Der Hisar-Hügel beherbergt eine Festung aus der römischen Epoche.", "Prokuplje ist das Verwaltungszentrum des Toplica-Bezirks.", "Die Bevölkerung des Stadtgebiets beträgt etwa 27.000 Einwohner.", "Hier findet jährlich das Musikfestival Prokupačka gitarijada statt."],
      hu: ["A Szent Prokopiosz-templom a 9-10. században épült.", "A várost Szküthopoliszi Szent Prokopioszról nevezték el.", "A Hisar-dombon római kori erődítmény maradványai is találhatók.", "Prokuplje a Toplica körzet közigazgatási központja.", "A város lakossága körülbelül 27.000 fő.", "Itt rendezik meg évente a Prokupačka gitarijada zenei fesztivált."],
      ro: ["Biserica Sfântul Procopie a fost construită în secolele IX-X.", "Orașul a fost numit după Sfântul Procopie din Scythopolis.", "Dealul Hisar găzduiește o cetate din perioada romană.", "Prokuplje este centrul administrativ al districtului Toplica.", "Populația zonei urbane este de aproximativ 27.000 de locuitori.", "Orașul găzduiește festivalul anual de muzică Prokupačka gitarijada."],
      en: ["Church of St. Procopius was built in the 9th-10th century.", "Named after Saint Procopius of Scythopolis.", "Hisar hill hosts a fortress from the Roman period.", "Administrative center of the Toplica District in southern Serbia.", "Population of the urban area is approximately 27,000.", "Home to the annual Prokupačka gitarijada music festival."],
    },
  },
  // RS-012 Zlatiborski
  {
    id: "RS-012-uzice",
    type: "city",
    parent: "RS-012",
    coords: [19.8425, 43.8586],
    name: { de: "Užice", hu: "Uzice", ro: "Užice", en: "Užice" },
    description: {
      de: "Eine historische Stadt im Westen Serbiens, berühmt für die Partisanenrepublik Užice im Zweiten Weltkrieg.",
      hu: "Történelmi város Nyugat-Szerbiában, híres a második világháborús Uzicei Partizánköztársaságról.",
      ro: "Un oraș istoric în vestul Serbiei, faimos pentru Republica Partizană Užice din al Doilea Război Mondial.",
      en: "A historical city in western Serbia, famous for the Užice Partisan Republic in WWII."
    },
    facts: {
      de: ["Alte Burg Užice", "Erstes Wasserkraftwerk (Tesla-Prinzip)", "Tor zu Zlatibor"],
      hu: ["Régi uzicei vár", "Első vízerőmű (Tesla-elv)", "Zlatibor kapuja"],
      ro: ["Cetatea veche Užice", "Prima hidrocentrală (principiul Tesla)", "Poarta către Zlatibor"],
      en: ["Old Užice Fortress", "First hydroelectric plant (Tesla principle)", "Gateway to Zlatibor"]
    },
    descriptionAdvanced: {
      de: "Užice liegt im Westen Serbiens am Ufer des Flusses Đetinja. Die Stadt ist bekannt für ihre mittelalterliche Festung, die das Tal überragt. Im Jahr 1900 wurde hier eines der ersten Wasserkraftwerke nach Teslas Prinzipien in Europa errichtet. Während des Zweiten Weltkriegs war sie das Zentrum der Republik Užice.",
      hu: "Užice Nyugat-Szerbiában, a Đetinja-folyó partján helyezkedik el. A város felett magasodó középkori vár stratégiai jelentőségű volt a történelem során. 1900-ban itt épült fel Európa egyik első, Tesla-elveken alapuló vízerőműve. A második világháború alatt az Užicei Köztársaság központjaként szolgált.",
      ro: "Užice este situat în vestul Serbiei, pe malurile râului Đetinja. Orașul este dominat de o cetate medievală impunătoare care veghează asupra văii. În 1900, aici a fost construită una dintre primele hidrocentrale din Europa bazate pe principiile lui Tesla. A fost centrul Republicii Užice în 1941.",
      en: "Užice is located in western Serbia on the banks of the Đetinja River. The city is dominated by a medieval fortress that overlooks the surrounding valley. In 1900, one of the first hydroelectric power plants in Europe based on Tesla's principles was built here. It served as the center of the Užice Republic during World War II.",
    },
    factsAdvanced: {
      de: ["Die Festung von Užice wurde im 14. Jahrhundert erbaut.", "Das Wasserkraftwerk Pod Gradom nahm im Jahr 1900 den Betrieb auf.", "Die Stadt war 1941 für 67 Tage das Zentrum der Republik Užice.", "Užice ist das administrative Zentrum des Bezirks Zlatibor.", "Die Stadt ist von den Gebirgen Zlatibor und Tara umgeben.", "Bekannt für die lokale Spezialität lepinja sa sve."],
      hu: ["Az užicei várat a 14. században építették.", "A Pod Gradom vízerőmű 1900-ban kezdte meg működését.", "A város 67 napig volt az Užicei Köztársaság központja 1941-ben.", "Užice a Zlatibor körzet közigazgatási központja.", "A várost a Zlatibor- és a Tara-hegység veszi körül.", "Híres a helyi lepinja sa sve nevű lepénykülönlegességről."],
      ro: ["Cetatea Užice a fost construită în secolul al XIV-lea.", "Hidrocentrala Pod Gradom a început să funcționeze în anul 1900.", "Orașul a fost centrul Republicii Užice timp de 67 de zile în 1941.", "Užice este centrul administrativ al districtului Zlatibor.", "Orașul este înconjurat de munții Zlatibor și Tara.", "Cunoscut pentru specialitatea locală de pâine lepinja sa sve."],
      en: ["Užice Fortress was built in the 14th century.", "Hydroelectric plant Pod Gradom started operating in 1900.", "Center of the Užice Republic for 67 days in 1941.", "Administrative center of the Zlatibor District.", "The city is surrounded by the Zlatibor and Tara mountains.", "Known for the unique lepinja sa sve local flatbread."],
    },
  },
  // RS-013 Sremski
  {
    id: "RS-013-sremska-mitrovica",
    type: "city",
    parent: "RS-013",
    coords: [19.6122, 44.9764],
    name: { de: "Sremska Mitrovica", hu: "Szávaszentdemeter", ro: "Sremska Mitrovica", en: "Sremska Mitrovica" },
    description: {
      de: "Eine der ältesten Städte Serbiens, die auf den Ruinen der antiken römischen Hauptstadt Sirmium erbaut wurde.",
      hu: "Szerbia egyik legrégebbi városa, amely az ókori római főváros, Sirmium romjaira épült.",
      ro: "Unul dintre cele mai vechi orașe din Serbia, construit pe ruinele fostei capitale romane Sirmium.",
      en: "One of the oldest cities in Serbia, built on the ruins of the ancient Roman capital Sirmium."
    },
    facts: {
      de: ["Antikes Sirmium", "Kaiserpalast", "An der Save"],
      hu: ["Ókori Sirmium", "Császári palota", "A Száva partján"],
      ro: ["Vechiul Sirmium", "Palatul Imperial", "Pe râul Sava"],
      en: ["Ancient Sirmium", "Imperial Palace", "On the Sava river"]
    },
    descriptionAdvanced: {
      de: "Sremska Mitrovica liegt in der Vojvodina am Fluss Save. In der Antike war die Stadt als Sirmium bekannt und diente als eine der vier Hauptstädte des Römischen Reiches. Zeugnisse dieser Zeit sind der kaiserliche Palast und zahlreiche Mosaike. Heute ist sie das Verwaltungszentrum des Bezirks Syrmien.",
      hu: "Sremska Mitrovica a Vajdaságban, a Száva-folyó partján fekszik. Az ókorban Sirmium néven a Római Birodalom egyik legfontosabb városa és császári székhelye volt. A mai napig láthatók a császári palota romjai és értékes mozaikok. Jelenleg Szerémség körzetének közigazgatási központja.",
      ro: "Sremska Mitrovica este situată în provincia Voivodina, pe malul râului Sava. În antichitate, orașul era cunoscut sub numele de Sirmium, fiind una dintre capitalele Imperiului Roman. Ruinele palatului imperial și mozaicurile antice atestă importanța sa istorică. Astăzi este centrul administrativ al districtului Srem.",
      en: "Sremska Mitrovica is located in the Vojvodina province on the banks of the Sava River. In ancient times, the city was known as Sirmium and served as one of the four capitals of the Roman Empire. Notable remains include the Imperial Palace and various Roman mosaics. It is the administrative center of the Srem District today.",
    },
    factsAdvanced: {
      de: ["Das antike Sirmium wurde im 3. Jh. v. Chr. von Kelten gegründet.", "Es diente als römische Hauptstadt während der Tetrarchie.", "Zehn römische Kaiser wurden in oder nahe der Stadt geboren.", "Die Ruinen des Kaiserpalastes sind durch einen modernen Bau geschützt.", "Standort der historischen St.-Demetrius-Kirche.", "Gelegen in der flachen und fruchtbaren Region Syrmien."],
      hu: ["Az ókori Sirmiumot a kelták alapították az i. e. 3. században.", "Római fővárosként szolgált a tetrarchia idején.", "Tíz római császár született a városban vagy annak közelében.", "A császári palota romjait modern védőtető óvja.", "Itt található a történelmi Szent Demeter-templom.", "A lapos és termékeny Szerémség régióban helyezkedik el."],
      ro: ["Sirmiumul antic a fost fondat de celți în secolul al III-lea î.Hr.", "A servit drept capitală romană în perioada Tetrarhiei.", "Zece împărați romani s-au născut în oraș sau în apropiere.", "Ruinele palatului imperial sunt protejate de o structură modernă.", "Locul unde se află biserica istorică Sfântul Dumitru.", "Situat în regiunea plană și fertilă a Sremului."],
      en: ["Ancient Sirmium was founded by Celts in the 3rd century BC.", "Served as a Roman capital during the Tetrarchy period.", "Ten Roman emperors were born in or near the city.", "The Imperial Palace ruins are protected by a modern structure.", "Site of the historic St. Demetrius Church.", "Located in the flat and fertile Syrmia region."],
    },
  },
  {
    id: "RS-013-krusedol",
    type: "historical",
    parent: "RS-013",
    coords: [19.9400, 45.1200],
    name: { de: "Kloster Krušedol", hu: "Krušedol kolostor", ro: "Mănăstirea Krušedol", en: "Krušedol Monastery" },
    description: {
      de: "Eines der bedeutendsten Klöster der Fruška Gora, gegründet im 16. Jahrhundert.",
      hu: "A Tarcal-hegység egyik legjelentősebb kolostora, amelyet a 16. században alapítottak.",
      ro: "Una dintre cele mai importante mănăstiri din Fruška Gora, fondată în secolul al XVI-lea.",
      en: "One of the most significant monasteries of Fruška Gora, founded in the 16th century."
    },
    facts: {
      de: ["Mausoleum serbischer Könige", "Barockarchitektur", "Fruška Gora Region"],
      hu: ["Szerb királyok mauzóleuma", "Barokk építészet", "Tarcal-hegység vidéke"],
      ro: ["Mausoleul regilor sârbi", "Arhitectură barocă", "Regiunea Fruška Gora"],
      en: ["Mausoleum of Serbian kings", "Baroque architecture", "Fruška Gora region"]
    }, image: "/poi-images/RS-013-krusedol.webp",
    descriptionAdvanced: {
      de: "Das Kloster Krušedol liegt an den Hängen der Fruška Gora in Syrmien. Es wurde zwischen 1509 und 1514 von der Familie Branković gegründet. Das Kloster gilt als wichtiges geistliches Zentrum und Ruhestätte bedeutender serbischer Persönlichkeiten. Die barocke Ikonostase und die Fresken zählen zu den wertvollsten Kunstschätzen.",
      hu: "A Krušedol-kolostor a Tarcal-hegység lankáin található a Szerémségben. 1509 és 1514 között alapította a Brankovics család. A kolostor jelentős szellemi központ és számos fontos szerb történelmi személyiség nyughelye. Barokk ikonosztáza és freskói Szerbia legértékesebb művészeti kincsei közé tartoznak.",
      ro: "Mănăstirea Krušedol este situată pe pantele muntelui Fruška Gora din regiunea Srem. A fost ctitorită între anii 1509 și 1514 de către familia Branković. Mănăstirea este un centru spiritual major și locul de veci al multor personalități sârbe importante. Iconostasul baroc și frescele sunt comori de artă neprețuite.",
      en: "Krušedol Monastery is situated on the slopes of Fruška Gora mountain in Syrmia. It was founded between 1509 and 1514 by the Branković family. The monastery is a significant spiritual center and the burial site of many prominent Serbian historical figures. Its Baroque iconostasis and frescoes are among Serbia's most valuable treasures.",
    },
    factsAdvanced: {
      de: ["Gegründet von Metropolit Maksim Branković und seiner Mutter Angelina.", "Grabstätte von König Milan Obrenović und Herzogin Ljubica.", "Das Kloster wurde 1716 von den Osmanen niedergebrannt.", "Der Wiederaufbau im Barockstil erfolgte im 18. Jahrhundert.", "Beherbergt eine wertvolle Sammlung von Fresken aus dem 16. Jh.", "Eines der 16 verbliebenen Klöster auf der Fruška Gora."],
      hu: ["Alapítója Maksim Brankovics metropolita és anyja, Angelina.", "Itt nyugszik Milan Obrenovics király és Ljubica hercegné.", "A kolostort a törökök 1716-ban felégették.", "A barokk stílusú újjáépítés a 18. században történt.", "Értékes 16. századi freskógyűjteménnyel rendelkezik.", "A Fruška Gora hegyen fennmaradt 16 kolostor egyike."],
      ro: ["Fondată de mitropolitul Maksim Branković și mama sa Angelina.", "Locul de veci al regelui Milan Obrenović și al ducesei Ljubica.", "Mănăstirea a fost arsă de turci în anul 1716.", "Reconstrucția în stil baroc a avut loc în secolul al XVIII-lea.", "Deține o colecție valoroasă de fresce din secolul al XVI-lea.", "Una dintre cele 16 mănăstiri rămase pe muntele Fruška Gora."],
      en: ["Founded by Metropolitan Maksim Branković and his mother Angelina.", "Burial site of King Milan Obrenović and Duchess Ljubica.", "The monastery was burned by the Turks in 1716.", "Reconstruction in Baroque style took place in the 18th century.", "Features a unique collection of 16th-century frescoes.", "One of the 16 remaining monasteries on Fruška Gora."],
    },
  },
  // RS-014 Macvanski
  {
    id: "RS-014-sabac",
    type: "city",
    parent: "RS-014",
    coords: [19.6900, 44.7500],
    name: { de: "Šabac", hu: "Szabács", ro: "Šabac", en: "Šabac" },
    description: {
      de: "Eine Stadt an der Save, bekannt für ihre Marktkultur, Geschichte und das Šabac-Festival.",
      hu: "Város a Száva partján, amely vásári kultúrájáról, történelméről és a Szabácsi fesztiválról ismert.",
      ro: "Un oraș pe râul Sava, cunoscut pentru cultura piețelor sale, istorie și festivalul Šabac.",
      en: "A city on the Sava river, known for its market culture, history, and the Šabac festival."
    },
    facts: {
      de: ["Festung Šabac", "Handelszentrum", "An der Save"],
      hu: ["Szabácsi vár", "Kereskedelmi központ", "A Száva partján"],
      ro: ["Cetatea Šabac", "Centru comercial", "Pe râul Sava"],
      en: ["Šabac Fortress", "Trade center", "On the Sava river"]
    },
    descriptionAdvanced: {
      de: "Šabac liegt im Westen Serbiens am rechten Ufer der Save. Die Stadt ist bekannt für ihre historische Festung, die 1471 von den Osmanen erbaut wurde. Im 19. Jahrhundert galt Šabac als kulturell fortschrittlich und erhielt den Beinamen Klein-Paris. Heute ist sie ein bedeutendes Zentrum für Chemieindustrie und Handel.",
      hu: "Šabac Nyugat-Szerbiában, a Száva jobb partján fekszik. A város középkori váráról nevezetes, amelyet 1471-ben építettek az oszmánok. A 19. században kulturális fejlettsége miatt a Kis Párizs nevet kapta. Napjainkban a vegyipar és a kereskedelem egyik fontos szerbiai központja.",
      ro: "Šabac este situat în vestul Serbiei, pe malul drept al râului Sava. Orașul este cunoscut pentru cetatea sa istorică, ridicată de otomani în anul 1471. În secolul al XIX-lea, Šabac era un centru cultural avansat, primind porecla de Micul Paris. Astăzi este un nod important pentru industria chimică și comerț.",
      en: "Šabac is located in western Serbia on the right bank of the Sava River. The city is famous for its historical fortress, built by the Ottomans in 1471. During the 19th century, Šabac was a culturally progressive center, earning the nickname Little Paris. Today, it serves as a major hub for the chemical industry and trade.",
    },
    factsAdvanced: {
      de: ["Die Festung von Šabac wurde 1471 von Isa-Beg Isaković gegründet.", "Bekannt für den Šabački vaśar, einen großen traditionellen Jahrmarkt.", "Das erste Klavier Serbiens wurde 1829 nach Šabac gebracht.", "Verwaltungszentrum des Bezirks Mačva im Westen Serbiens.", "Erlitt während der Schlacht von Cer 1914 schwere Zerstörungen.", "Die Fußgängerzone zeigt Architektur aus dem späten 19. Jh."],
      hu: ["A šabaci várat Isa-Beg Isaković alapította 1471-ben.", "A Šabački vaśar nevű nagyszabású népi vásáráról híres.", "Szerbia első zongoráját 1829-ben Šabacba hozták.", "Nyugat-Szerbia Mačva körzetének közigazgatási központja.", "Súlyos károkat szenvedett az 1914-es ceri csata során.", "A sétálóövezet a 19. század végi építészetet tükrözi."],
      ro: ["Cetatea Šabac a fost înființată de Isa-Beg Isaković în 1471.", "Cunoscut pentru Šabački vaśar, un mare târg folcloric tradițional.", "Primul pian din Serbia a fost adus la Šabac în anul 1829.", "Centrul administrativ al districtului Mačva din vestul Serbiei.", "A suferit distrugeri grele în timpul bătăliei de la Cer din 1914.", "Zona pietonală prezintă arhitectură de la sfârșitul secolului XIX."],
      en: ["Šabac Fortress was established by Isa-Beg Isaković in 1471.", "Known for the Šabački vaśar, a large traditional folk fair.", "The first piano in Serbia was brought to Šabac in 1829.", "Center of the Mačva District in western Serbia.", "Suffered heavy destruction during the Battle of Cer in 1914.", "The pedestrian zone features architecture from the late 19th century."],
    },
  },
  {
    id: "RS-014-tronosa",
    type: "historical",
    parent: "RS-014",
    coords: [19.2800, 44.4600],
    name: { de: "Kloster Tronoša", hu: "Tronoša kolostor", ro: "Mănăstirea Tronoša", en: "Tronoša Monastery" },
    description: {
      de: "Ein historisches Kloster in der Nähe von Loznica, eng verbunden mit der Erhaltung der serbischen Literatur.",
      hu: "Történelmi kolostor Loznica közelében, szorosan kötődik a szerb irodalom megőrzéséhez.",
      ro: "O mănăstire istorică lângă Loznica, strâns legată de conservarea literaturii sârbe.",
      en: "A historical monastery near Loznica, closely linked to the preservation of Serbian literature."
    },
    facts: {
      de: ["Zentrum der Alphabetisierung", "Vuk Karadžić Schule", "Orthodoxe Tradition"],
      hu: ["Az írástudás központja", "Vuk Karadžić iskolája", "Ortodox hagyomány"],
      ro: ["Centru de alfabetizare", "Școala lui Vuk Karadžić", "Tradiție ortodoxă"],
      en: ["Center of literacy", "Vuk Karadžić's school", "Orthodox tradition"]
    },
    descriptionAdvanced: {
      de: "Das Kloster Tronoša befindet sich in der Nähe von Loznica im Westen Serbiens. Es wurde ursprünglich im späten 13. Jahrhundert von König Stefan Dragutin gegründet. Das Kloster ist eng mit der Geschichte von Vuk Karadžić verbunden, der hier seine Ausbildung begann. Die Kirche ist der Darstellung der Jungfrau Maria geweiht.",
      hu: "A Tronoša-kolostor Loznica közelében, Nyugat-Szerbiában található. Eredetileg a 13. század végén alapította Dragutin István király. A kolostor szorosan kapcsolódik Vuk Karadžić életéhez, aki itt kezdte meg tanulmányait. A kolostortemplomot Szűz Mária templomba vezetésének tiszteletére szentelték fel.",
      ro: "Mănăstirea Tronoša este situată lângă Loznica, în vestul Serbiei. A fost fondată inițial la sfârșitul secolului al XIII-lea de către regele Stefan Dragutin. Mănăstirea este legată strâns de viața lui Vuk Karadžić, care a studiat aici în copilărie. Biserica este dedicată Intrării în Biserică a Maicii Domnului.",
      en: "Tronoša Monastery is located near Loznica in western Serbia. It was originally founded in the late 13th century by King Stefan Dragutin. The monastery is closely linked to the history of Vuk Karadžić, who began his early education here. The monastery church is dedicated to the Presentation of the Blessed Virgin Mary.",
    },
    factsAdvanced: {
      de: ["Die heutige Form der Kirche wurde um 1317 vollendet.", "Berühmt für die Tradition der Ratarske sveće (Bauernkerzen).", "Vuk Karadžić, der Reformer der serbischen Sprache, ging hier zur Schule.", "Das Kloster wurde von den Osmanen zerstört und 1559 neu aufgebaut.", "Gelegen in einem malerischen Wald nahe dem Dorf Korenita.", "Beherbergt einen Brunnen, der den legendären Jugović-Brüdern gewidmet ist."],
      hu: ["A templom jelenlegi formáját 1317 körül nyerte el.", "Híres a Ratarske sveće (szántóvetők gyertyái) nevű hagyományáról.", "Vuk Karadžić, a szerb nyelv reformátora itt járt iskolába.", "A kolostort a törökök lerombolták, majd 1559-ben újjáépítették.", "Gleccsererdőben fekszik, Korenita falu közelében.", "Itt található a legendás Jugović fivéreknek szentelt kút."],
      ro: ["Biserica în forma sa actuală a fost finalizată în jurul anului 1317.", "Faimoasă pentru tradiția Ratarske sveće (lumânările plugarilor).", "Vuk Karadžić, reformatorul limbii sârbe, a urmat școala aici.", "Mănăstirea a fost distrusă de turci și reconstruită în 1559.", "Situată într-o pădure pitorească lângă satul Korenita.", "Găzduiește o fântână dedicată legendarilor frați Jugović."],
      en: ["Completed in its current form around 1317.", "Famous for the Ratarske sveće (Farmer's candles) tradition.", "Vuk Karadžić, reformer of the Serbian language, attended school here.", "The monastery was destroyed by Turks and rebuilt in 1559.", "Located in a picturesque forest near the village of Korenita.", "Houses a fountain dedicated to the legendary Jugović brothers."],
    },
  },
  // RS-015 Južno-Backi
  // RS-016 Srednje-Banatski
  {
    id: "RS-016-carska-bara",
    type: "landmark",
    parent: "RS-016",
    coords: [20.3800, 45.2500],
    name: { de: "Carska Bara", hu: "Császár-tó", ro: "Carska Bara", en: "Carska Bara" },
    description: {
      de: "Ein bedeutendes Vogelschutzgebiet und Naturschutzgebiet im Banat.",
      hu: "Jelentős madárrezervátum és természetvédelmi terület a Bánátban.",
      ro: "O importantă rezervație de păsări și arie naturală protejată din Banat.",
      en: "A significant bird sanctuary and nature reserve in the Banat region."
    },
    facts: {
      de: ["Sumpflandschaft", "Seltene Vögel", "Naturschutzgebiet"],
      hu: ["Mocsaras vidék", "Ritka madarak", "Természetvédelmi terület"],
      ro: ["Peisaj mlăștinos", "Păsări rare", "Rezervație naturală"],
      en: ["Marshland", "Rare birds", "Nature reserve"]
    }, image: "/poi-images/RS-016-carska-bara.webp",
    descriptionAdvanced: {
      de: "Carska Bara ist ein bedeutendes Naturschutzgebiet in der Provinz Vojvodina. Es umfasst ein Mosaik aus Sümpfen, Seen und Schilfgebieten nahe der Mündung des Begej in die Theiß. Das Reservat ist ein international anerkanntes Vogelparadies mit über 240 registrierten Arten und dient als wichtiger Rückzugsort für seltene Pflanzen.",
      hu: "A Császár-tó (Carska Bara) egy jelentős természetvédelmi terület a Vajdaságban. Mocsarak, tavak és nádasok alkotják a Béga és a Tisza összefolyásának közelében. A rezervátum nemzetközileg elismert madárparadicsom, ahol több mint 240 fajt tartanak számon. Ritka növények és állatok fontos menedékhelye.",
      ro: "Carska Bara este o rezervație naturală majoră situată în provincia Voivodina. Cuprinde un mozaic de mlaștini, lacuri și stufărișuri lângă confluența râului Bega cu Tisa. Rezervația este un paradis al păsărilor recunoscut internațional, cu peste 240 de specii înregistrate și refugiu pentru floră rară.",
      en: "Carska Bara is a significant nature reserve located in the Vojvodina province. It consists of a mosaic of marshes, lakes, and reed beds near the confluence of the Begej and Tisza rivers. The reserve is an internationally recognized bird paradise with over 240 recorded species, serving as a vital sanctuary for rare plants.",
    },
    factsAdvanced: {
      de: ["Das Schutzgebiet umfasst eine Fläche von etwa 1.600 Hektar.", "Wurde 1996 als Ramsar-Gebiet für den Feuchtgebietsschutz ausgewiesen.", "Beheimatet seltene Vogelarten wie den Purpurreiher und den Löffler.", "Der Fluss Begej fließt durch das Herz des Reservats.", "Befindet sich etwa 15 Kilometer südlich der Stadt Zrenjanin.", "Enthält vielfältige Ökosysteme wie Wälder, Wiesen und Steppen."],
      hu: ["A védett terület kiterjedése körülbelül 1.600 hektár.", "1996-ban Ramsari területté nyilvánították a vizes élőhelyek védelmében.", "Ritka madárfajok otthona, mint a vörös gém és a kanalasgém.", "A Béga-folyó a rezervátum szívén keresztül folyik.", "Zrenjanin városától körülbelül 15 kilométerre délre található.", "Változatos ökoszisztémákat tartalmaz: erdőket, réteket és sztyeppéket."],
      ro: ["Aria protejată acoperă o suprafață de aproximativ 1.600 de hectare.", "Desemnat ca sit Ramsar pentru conservarea zonelor umede în 1996.", "Adăpostește specii rare de păsări precum stârcul roșu și lopătarul.", "Râul Bega curge prin inima rezervației naturale.", "Situată la aproximativ 15 kilometri sud de orașul Zrenjanin.", "Conține ecosisteme diverse, inclusiv păduri, pajiști și stepe."],
      en: ["Protected area covers approximately 1,600 hectares.", "Designated as a Ramsar site for wetland conservation in 1996.", "Home to rare bird species like the purple heron and spoonbill.", "The Begej river flows through the heart of the reserve.", "Located about 15 kilometers south of the city of Zrenjanin.", "Contains diverse ecosystems including forests, meadows, and steppes."],
    },
  },
  // RS-017 Južno-Banatski
  {
    id: "RS-017-pancevo",
    type: "city",
    parent: "RS-017",
    coords: [20.6400, 44.8708],
    name: { de: "Pančevo", hu: "Pancsova", ro: "Panciova", en: "Pančevo" },
    description: {
      de: "Eine Industriestadt am Zusammenfluss von Temesch und Donau, nahe bei Belgrad.",
      hu: "Ipari város a Temes és a Duna összefolyásánál, Belgrád közelében.",
      ro: "Un oraș industrial la confluența râului Timiș cu Dunărea, aproape de Belgrad.",
      en: "An industrial city at the confluence of the Tamiš and Danube rivers, near Belgrade."
    },
    facts: {
      de: ["Historische Leuchttürme", "Bedeutende Industrie", "Temesch-Ufer"],
      hu: ["Történelmi világítótornyok", "Jelentős ipar", "Temes-part"],
      ro: ["Faruri istorice", "Industrie importantă", "Malul râului Timiș"],
      en: ["Historical lighthouses", "Significant industry", "Tamiš riverbank"]
    },
    descriptionAdvanced: {
      de: "Pančevo liegt im Süden der Vojvodina an der Mündung des Tamiš in die Donau. Die Stadt ist ein bedeutendes Industriezentrum mit einer langen Geschichte als Handelsplatz. Zu den Sehenswürdigkeiten gehören das Kloster Vojlovica und historische Gebäude im Zentrum. Pančevo ist zudem für seine lebendige Kunst- und Kulturszene bekannt.",
      hu: "Pancsova (Pančevo) a Vajdaság déli részén, a Temes és a Duna összefolyásánál fekszik. A város jelentős ipari központ, amely nagy múltú kereskedelmi hagyományokkal rendelkezik. Látnivalói közé tartozik a Vojlovica-kolostor és a belváros történelmi épületei. Pancsova élénk művészeti életéről is nevezetes.",
      ro: "Pančevo este situat în sudul Voivodinei, la confluența râului Timiș cu Dunărea. Orașul este un centru industrial major cu o istorie bogată ca nod comercial. Printre atracțiile principale se numără mănăstirea Vojlovica și clădirile istorice din centrul orașului. Pančevo este cunoscut pentru scena sa culturală vibrantă.",
      en: "Pančevo is located in southern Vojvodina at the confluence of the Tamiš and Danube rivers. The city is a major industrial hub with a long history as a trading post. Key landmarks include the Vojlovica Monastery and several historic buildings in the city center. Pančevo is also known for its vibrant arts and culture scene.",
    },
    factsAdvanced: {
      de: ["Eine der ältesten Siedlungen in der Region Banat.", "Heimat der Weifert-Brauerei, die im Jahr 1722 gegründet wurde.", "Das Kloster Vojlovica stammt aus dem späten 14. Jahrhundert.", "Befindet sich nur 15 Kilometer nordöstlich von Belgrad.", "Die Mariä-Himmelfahrt-Kirche besitzt eine berühmte Ikonostase.", "Bekannt für seine große Ölraffinerie und Chemiebetriebe."],
      hu: ["A Bánság régió egyik legrégebbi települése.", "Itt található az 1722-ben alapított Weifert sörfőzde.", "A Vojlovica-kolostor a 14. század végéről származik.", "Mindössze 15 kilométerre északkeletre fekszik Belgrádtól.", "A Nagyboldogasszony-templom híres ikonosztázzal rendelkezik.", "Nagy olajfinomítójáról és vegyi üzemeiről ismert."],
      ro: ["Una dintre cele mai vechi așezări din regiunea Banatului.", "Găzduiește fabrica de bere Weifert, fondată în anul 1722.", "Mănăstirea Vojlovica datează de la sfârșitul secolului al XIV-lea.", "Situat la doar 15 kilometri nord-est de Belgrad.", "Biserica Adormirea Maicii Domnului are un iconostas celebru.", "Cunoscut pentru marea sa rafinărie de petrol și fabrici chimice."],
      en: ["One of the oldest settlements in the Banat region.", "Home to the Weifert Brewery, founded in 1722.", "Vojlovica Monastery dates back to the late 14th century.", "Located only 15 kilometers northeast of Belgrade.", "The Church of the Assumption features a famous iconostasis.", "Known for its large oil refinery and chemical plants."],
    },
  },
  {
    id: "RS-017-vrsac",
    type: "city",
    parent: "RS-017",
    coords: [21.3036, 45.1167],
    name: { de: "Vršac", hu: "Versec", ro: "Vârșeț", en: "Vršac" },
    description: {
      de: "Eine charmante Stadt am Fuße der Vršac-Berge, berühmt für ihren Weinbau.",
      hu: "Bájos város a Verseci-hegység lábánál, híres borászatáról.",
      ro: "Un oraș fermecător la poalele munților Vârșeț, faimos pentru viticultură.",
      en: "A charming city at the foot of the Vršac Mountains, famous for its viticulture."
    },
    facts: {
      de: ["Vršac-Turm", "Bischofspalast", "Große Weingüter"],
      hu: ["Verseci torony", "Püspöki palota", "Hatalmas borászatok"],
      ro: ["Turnul Vârșeț", "Palatul Episcopal", "Podgorii mari"],
      en: ["Vršac Tower", "Bishop's Palace", "Large wineries"]
    }, image: "/poi-images/RS-017-vrsac.webp",
    descriptionAdvanced: {
      de: "Vršac liegt im Südosten der Vojvodina am Fuße der Vršac-Berge. Die Stadt ist berühmt für ihren Weinbau, der bis in die Römerzeit zurückreicht. Über der Stadt thront der Vršac-Turm aus dem 15. Jahrhundert, ein Überrest einer alten Festung. Die Architektur im Stadtzentrum ist durch barocke und klassizistische Elemente geprägt.",
      hu: "Versec (Vršac) a Vajdaság délkeleti részén, a Verseci-hegység lábánál található. A város híres bortermeléséről, amely egészen a római korig nyúlik vissza. A város felett a 15. századi Verseci-torony magasodik, amely egy régi erődítmény maradványa. A belvárost barokk és klasszicista stílusjegyek jellemzik.",
      ro: "Vârșeț (Vršac) este situat în sud-estul Voivodinei, la poalele munților Vârșeț. Orașul este renumit pentru viticultura sa, care datează încă din perioada romană. Turnul Vârșeț din secolul al XV-lea, o rămășiță a unei vechi cetăți, domină orașul. Arhitectura centrului vechi îmbină elemente baroce și clasiciste.",
      en: "Vršac is located in southeastern Vojvodina at the foot of the Vršac Mountains. The city is famous for its viticulture, which dates back to Roman times. The 15th-century Vršac Tower, a remnant of an old fortress, overlooks the town. The architecture of the city center is characterized by Baroque and Neoclassical styles.",
    },
    factsAdvanced: {
      de: ["Die Vršac-Berge erreichen am Gudurica-Gipfel eine Höhe von 641 Metern.", "Die Stadt ist aufgrund des Košava-Windes einer der windigsten Orte Serbiens.", "Heimat des Vršac Vintage Festivals, das die Weinlese feiert.", "Die katholische St.-Gerhard-Kirche ist ein neugotisches Wahrzeichen.", "Bekannt als Geburtsort des Dramatikers Jovan Sterija Popović.", "Berühmt für die ausgedehnten Weinberge auf den umliegenden Hügeln."],
      hu: ["A Verseci-hegység legmagasabb pontja a Gudurica-csúcs (641 méter).", "A város Szerbia egyik legszelesebb helye a kosava szél miatt.", "Itt rendezik meg a szüretet ünneplő Vršac Vintage fesztivált.", "A Szent Gellért katolikus templom neogótikus stílusú jelkép.", "Jovan Sterija Popović drámaíró szülőhelyeként ismert.", "Híres a környező dombokat borító kiterjedt szőlőültetvényeiről."],
      ro: ["Munții Vârșeț ating o altitudine de 641 de metri la vârful Gudurica.", "Orașul este unul dintre cele mai vântoase locuri din cauza vântului Coșava.", "Găzduiește festivalul Vršac Vintage care celebrează recolta de struguri.", "Biserica romano-catolică Sfântul Gerhard este un reper neogotic.", "Cunoscut ca locul de naștere al dramaturgului Jovan Sterija Popović.", "Faimos pentru podgoriile sale vaste care acoperă dealurile din jur."],
      en: ["Vršac Mountains reach an elevation of 641 meters at Gudurica Peak.", "The town is one of the windiest places in Serbia due to the Košava.", "Home to the Vršac Vintage festival celebrating the grape harvest.", "The Roman Catholic Church of St. Gerhard is a Neo-Gothic landmark.", "Known as the birthplace of playwright Jovan Sterija Popović.", "Famous for its vast vineyards covering the surrounding hills."],
    },
  },
  // RS-018 Branicevski
  {
    id: "RS-018-pozarevac",
    type: "city",
    parent: "RS-018",
    coords: [21.1858, 44.6214],
    name: { de: "Požarevac", hu: "Pozsarevác", ro: "Požarevac", en: "Požarevac" },
    description: {
      de: "Eine Stadt mit reicher Geschichte, bekannt als Ort wichtiger Friedensverträge.",
      hu: "Gazdag történelmű város, fontos békeszerződések helyszíneként ismert.",
      ro: "Un oraș cu o istorie bogată, cunoscut ca locul unor importante tratate de pace.",
      en: "A city with a rich history, known as the site of important peace treaties."
    },
    facts: {
      de: ["Friede von Passarowitz", "Ljubičevo-Pferdespiele", "Etno-Park Tulba"],
      hu: ["Pozsareváci béke", "Ljubičevói lovasjátékok", "Tulba etnopark"],
      ro: ["Pacea de la Passarowitz", "Jocurile de cai Ljubičevo", "Etno-parcul Tulba"],
      en: ["Peace of Passarowitz", "Ljubičevo Horse Games", "Tulba ethno-park"]
    },
    descriptionAdvanced: {
      de: "Požarevac liegt im Osten Serbiens zwischen den Flüssen Donau, Morava und Mlava. Die Stadt erlangte historische Bedeutung durch den Frieden von Passarowitz im Jahr 1718. Ein bekanntes Ziel ist das Gestüt Ljubičevo, wo jährlich Reitspiele stattfinden. In der Nähe befinden sich zudem die bedeutenden römischen Ruinen von Viminacium.",
      hu: "Požarevac Kelet-Szerbiában, a Duna, a Morava és a Mlava folyók között fekszik. A város történelmi jelentőségét az 1718-as pozsareváci béke alapozta meg. Népszerű látnivaló a Ljubičevo ménes, ahol évente lovas játékokat rendeznek. A város közelében találhatók Viminacium ókori római városának romjai is.",
      ro: "Požarevac este situat în estul Serbiei, între râurile Dunărea, Morava și Mlava. Orașul a căpătat importanță istorică prin Tratatul de la Passarowitz din 1718. O destinație populară este herghelia Ljubičevo, gazda jocurilor ecvestre anuale. În apropiere se află ruinele antice ale orașului roman Viminacium.",
      en: "Požarevac is located in eastern Serbia between the Danube, Morava, and Mlava rivers. The city gained historical significance through the Treaty of Passarowitz in 1718. A well-known destination is the Ljubičevo Stud farm, home to the annual equestrian games. The important Roman ruins of Viminacium are also situated nearby.",
    },
    factsAdvanced: {
      de: ["Der Friede von Passarowitz wurde hier am 21. Juli 1718 unterzeichnet.", "Heimat der Barili-Galerie, gewidmet der Malerin Milena Pavlović-Barili.", "Die Ljubičevo-Reitspiele zeigen traditionelle serbische Reitkünste.", "Diente Fürst Miloš Obrenović als zweite Hauptstadt des Landes.", "Verwaltungszentrum des Bezirks Braničevo im Osten Serbiens.", "Die Stadt beherbergt das Nationalmuseum mit archäologischen Funden."],
      hu: ["A pozsareváci békét 1718. július 21-én írták alá itt.", "Itt található a Milena Pavlović-Barili festőnőnek szentelt galéria.", "A Ljubičevo lovas játékok hagyományos szerb lovas készségeket mutatnak be.", "Miloš Obrenović fejedelem második fővárosaként szolgált.", "Kelet-Szerbia Braničevo körzetének közigazgatási központja.", "A városi múzeum jelentős régészeti gyűjteménynek ad otthont."],
      ro: ["Tratatul de la Passarowitz a fost semnat aici la 21 iulie 1718.", "Găzduiește Galeria Barili, dedicată pictoriței Milena Pavlović-Barili.", "Jocurile ecvestre Ljubičevo prezintă abilități tradiționale de călărie.", "A servit drept a doua capitală pentru prințul Miloš Obrenović.", "Centrul administrativ al districtului Braničevo din estul Serbiei.", "Orașul deține un muzeu național cu importante descoperiri arheologice."],
      en: ["The Treaty of Passarowitz was signed here on July 21, 1718.", "Home to the Barili Gallery, dedicated to painter Milena Pavlović-Barili.", "Ljubičevo Equestrian Games feature traditional Serbian horseback skills.", "Served as a second capital for Prince Miloš Obrenović.", "Administrative center of the Braničevo District.", "The city museum houses significant archaeological findings."],
    },
  },
  {
    id: "RS-018-viminacium",
    type: "historical",
    parent: "RS-018",
    coords: [21.1700, 44.7300],
    name: { de: "Viminacium", hu: "Viminacium", ro: "Viminacium", en: "Viminacium" },
    description: {
      de: "Eine bedeutende römische Stadt und Militärlager, die Hauptstadt der Provinz Moesia Superior.",
      hu: "Jelentős római város és katonai tábor, Moesia Superior tartomány fővárosa.",
      ro: "Un oraș roman important și tabără militară, capitala provinciei Moesia Superior.",
      en: "An important Roman city and military camp, the capital of the province Moesia Superior."
    },
    facts: {
      de: ["Archäologischer Park", "Römische Gräber", "Mammut-Skelette gefunden"],
      hu: ["Régészeti park", "Római sírok", "Mammutcsontvázak lelethelye"],
      ro: ["Parc arheologic", "Morminte romane", "Schelete de mamut găsite"],
      en: ["Archaeological park", "Roman tombs", "Mammoth skeletons found"]
    }, image: "/poi-images/RS-018-viminacium.webp",
    descriptionAdvanced: {
      de: "Viminacium war eine bedeutende römische Stadt und ein Militärlager nahe dem heutigen Kostolac. Als Hauptstadt der Provinz Moesia Superior war sie ein strategisches Zentrum am Donaulimes. Heute ist die Stätte für ihre gut erhaltenen Thermen, das Amphitheater und Mausoleen bekannt. Spektakulär ist auch der Fund eines Mammutskeletts.",
      hu: "Viminacium jelentős római város és katonai tábor volt a mai Kostolac közelében. Moesia Superior provincia fővárosaként fontos stratégiai központ volt a dunai limes mentén. Napjainkban a régészeti lelőhely fürdőiről, amfiteátrumáról és mauzóleumairól ismert. Különleges látnivaló az itt talált mamutcsontváz.",
      ro: "Viminacium a fost un oraș roman major și un castru militar situat lângă Kostolac. Ca capitală a provinciei Moesia Superior, a fost un centru strategic vital pe limesul dunărean. Astăzi, situl arheologic este renumit pentru băile sale, amfiteatrul și mausoleele imperiale. Un punct de atracție este scheletul de mamut descoperit aici.",
      en: "Viminacium was a major Roman city and military camp located near modern-day Kostolac. As the capital of the Moesia Superior province, it was a vital strategic center on the Danube limes. Today, the archaeological site is famous for its well-preserved baths, amphitheater, and imperial mausoleums. A unique find is the mammoth skeleton discovered on site.",
    },
    factsAdvanced: {
      de: ["Gegründet im 1. Jahrhundert n. Chr. als Lager der Legio VII Claudia.", "Erreichte im Jahr 239 n. Chr. den Status einer römischen Kolonie.", "Umfasste in seiner Blütezeit eine Fläche von über 450 Hektar.", "Das Mammutskelett Vika wurde 2009 in 27 Metern Tiefe gefunden.", "Beherbergt ein modernes Forschungszentrum und einen Erlebnispark.", "Tausende römische Gräber und Fresken wurden hier ausgegraben."],
      hu: ["Az i. sz. 1. században alapították a Legio VII Claudia táboraként.", "I. sz. 239-ben kapta meg a római kolónia (colonia) rangot.", "Fénykorában több mint 450 hektáros területet foglalt el.", "A Vika nevű mamutcsontvázat 2009-ben találták meg 27 méter mélyen.", "Modern kutatóközpontnak és kalandparknak ad otthont.", "Több ezer római sírt és freskót tártak fel a területen."],
      ro: ["Înființat în secolul I d.Hr. ca tabără pentru Legio VII Claudia.", "Ridicat la statutul de colonie romană (colonia) în anul 239 d.Hr.", "A acoperit o suprafață de peste 450 de hectare în perioada sa de vârf.", "Scheletul de mamut Vika a fost găsit la 27 de metri adâncime în 2009.", "Găzduiește un centru de cercetare modern și un parc de aventură.", "Mii de morminte și fresce romane au fost excavate aici."],
      en: ["Established in the 1st century AD as a camp for Legio VII Claudia.", "Elevated to the status of a Roman colony (colonia) in 239 AD.", "Covered an area of over 450 hectares in its prime.", "The Vika mammoth skeleton was found 27 meters underground in 2009.", "Hosts a modern research center and an adventure park for visitors.", "Thousands of Roman graves and frescoes have been excavated here."],
    },
  },
  // RS-019 Grad Beograd
  // RS-020 Podunavski
  {
    id: "RS-020-smederevo-city",
    type: "city",
    parent: "RS-020",
    coords: [20.9300, 44.6628],
    name: { de: "Smederevo", hu: "Szendrő", ro: "Smederevo", en: "Smederevo" },
    description: {
      de: "Eine historische Stadt an der Donau, ehemalige Hauptstadt Serbiens im Mittelalter.",
      hu: "Történelmi város a Duna mentén, Szerbia egykori fővárosa a középkorban.",
      ro: "Un oraș istoric pe Dunăre, fostă capitală a Serbiei în Evul Mediu.",
      en: "A historical city on the Danube, former capital of Serbia in the Middle Ages."
    },
    facts: {
      de: ["An der Donau", "Obstbaugebiet", "Großer Industriestandort"],
      hu: ["A Duna mentén", "Gyümölcstermesztő vidék", "Jelentős ipari központ"],
      ro: ["Pe malul Dunării", "Zonă pomicolă", "Centru industrial major"],
      en: ["On the Danube", "Fruit growing area", "Major industrial site"]
    },
    descriptionAdvanced: {
      de: "Smederevo liegt am rechten Ufer der Donau und ist für seine gewaltige mittelalterliche Festung bekannt. Sie wurde im 15. Jahrhundert von Despot Đurađ Branković als neue Hauptstadt Serbiens errichtet. Die Festung gilt als eine der größten Flachlandburgen Europas. Heute ist die Stadt ein Zentrum der Stahlindustrie und des Weinbaus.",
      hu: "Szendrő (Smederevo) a Duna jobb partján fekszik, és hatalmas középkori váráról nevezetes. A várat a 15. században építtette Brankovics György despota Szerbia új fővárosaként. Az erődítmény Európa egyik legnagyobb síkvidéki vára. A város ma az acélipar és a bortermelés fontos központja.",
      ro: "Smederevo este situat pe malul drept al Dunării și este renumit pentru cetatea sa medievală masivă. A fost construită în secolul al XV-lea de despotul Đurađ Branković ca nouă capitală a Serbiei. Cetatea este una dintre cele mai mari fortificații de câmpie din Europa. Orașul este astăzi un centru siderurgic și viticol.",
      en: "Smederevo is located on the right bank of the Danube and is famous for its massive medieval fortress. It was built in the 15th century by Despot Đurađ Branković as the new capital of Serbia. The fortress is considered one of the largest lowland castles in Europe. Today, the city is a hub for the steel industry and viticulture.",
    },
    factsAdvanced: {
      de: ["Die Festung von Smederevo verfügt über 25 massive Türme.", "War die letzte mittelalterliche Hauptstadt Serbiens vor der Eroberung.", "Die Festung wurde in nur zwei Jahren, von 1428 bis 1430, erbaut.", "Bekannt für die weiße Rebsorte Smederevka und den gleichnamigen Wein.", "Die Hauptkirche im Stadtzentrum ist dem Heiligen Georg geweiht.", "Sitz der serbischen Regierung während des Ersten Serbischen Aufstands."],
      hu: ["A szendrői vár 25 hatalmas toronnyal rendelkezik.", "Szerbia utolsó középkori fővárosa volt az oszmán hódítás előtt.", "A vár mindössze két év alatt, 1428 és 1430 között épült fel.", "Híres a Smederevka fehér szőlőfajtáról és a belőle készült borról.", "A városközpont főtemplomát Szent György tiszteletére szentelték.", "Az első szerb felkelés idején a szerb kormány székhelye volt."],
      ro: ["Cetatea Smederevo are 25 de turnuri masive și ziduri duble.", "A fost ultima capitală medievală a Serbiei înainte de cucerire.", "Cetatea a fost construită în doar doi ani, între 1428 și 1430.", "Cunoscut pentru soiul de struguri albi Smederevka și vinul local.", "Biserica principală din centrul orașului este dedicată Sfântului Gheorghe.", "A găzduit guvernul sârb în timpul Primei Răscoale Sârbe."],
      en: ["Smederevo Fortress features 25 massive towers and double walls.", "Served as the last medieval capital of Serbia before the Ottoman conquest.", "The fortress was built in only two years, between 1428 and 1430.", "Known for the Smederevka white grape variety and wine.", "The main church in the city center is dedicated to Saint George.", "Hosted the Serbian government during the First Serbian Uprising."],
    },
  },
  // RS-021 Nišavski
  // RS-022 Pomoravski (Rasinski/South area) -> Kruševac
  {
    id: "RS-022-krusevac",
    type: "city",
    parent: "RS-022",
    coords: [21.3339, 43.5800],
    name: { de: "Kruševac", hu: "Kruševac", ro: "Kruševac", en: "Kruševac" },
    description: {
      de: "Die mittelalterliche Hauptstadt Serbiens zur Zeit des Fürsten Lazar.",
      hu: "Szerbia középkori fővárosa Lázár fejedelem idején.",
      ro: "Capitala medievală a Serbiei în timpul prințului Lazar.",
      en: "The medieval capital of Serbia during the time of Prince Lazar."
    },
    facts: {
      de: ["Lazar-Stadt (Lazarevac)", "Lazarica-Kirche", "Kosovo-Epos Verbindung"],
      hu: ["Lázár városa (Lazarevac)", "Lazarica-templom", "Kapcsolat a rigómezei éposszal"],
      ro: ["Orașul lui Lazar", "Biserica Lazarica", "Legătura cu epopeea Kosovo"],
      en: ["Lazar's City", "Lazarica Church", "Link to the Kosovo epic"]
    },
    descriptionAdvanced: {
      de: "Kruševac liegt in Zentralserbien und war im 14. Jahrhundert die Hauptstadt des Reiches von Fürst Lazar. Herzstück der Stadt ist der Archäologische Park mit den Ruinen der Lazar-Stadt und der berühmten Lazarica-Kirche. Die Architektur der Kirche ist ein Meisterwerk der Morava-Schule. Kruševac ist heute ein wichtiges Zentrum der Region Rasina.",
      hu: "Kruševac Közép-Szerbiában található, és a 14. században Lázár fejedelem birodalmának fővárosa volt. A város szíve a Régészeti Park, ahol Lázár várának romjai és a híres Lazarica-templom látható. A templom a moravai építészeti iskola remekműve. Kruševac ma a Rasina körzet fontos központja.",
      ro: "Kruševac este situat în centrul Serbiei și a fost capitala statului condus de cneazul Lazăr în secolul al XIV-lea. Inima orașului este Parcul Arheologic, care cuprinde ruinele cetății lui Lazăr și biserica Lazarica. Arhitectura bisericii este o capodoperă a școlii morave. Astăzi, orașul este centrul districtului Rasina.",
      en: "Kruševac is located in central Serbia and served as the capital of Prince Lazar's state in the 14th century. The heart of the city is the Archaeological Park, featuring ruins of Lazar's town and the famous Lazarica Church. The church's architecture is a masterpiece of the Morava school. Today, it is the hub of the Rasina District.",
    },
    factsAdvanced: {
      de: ["Gegründet von Fürst Lazar Hrebeljanović im Jahr 1371.", "Die Lazarica-Kirche wurde 1375 zur Feier der Geburt eines Sohnes erbaut.", "Das Denkmal für die Kosovo-Helden steht im Stadtzentrum.", "Diente als Ausgangspunkt für die serbische Armee vor der Schlacht auf dem Amselfeld.", "Beherbergt einen großen Industrie- und Chemiekomplex.", "Das Stadtmuseum bewahrt wertvolle mittelalterliche Artefakte auf."],
      hu: ["Lázár fejedelem alapította 1371-ben.", "A Lazarica-templom 1375-ben épült egy fiúgyermek születésének tiszteletére.", "A rigómezei hősök emlékműve a város központjában áll.", "A szerb sereg innen indult a rigómezei csatába.", "Jelentős ipari és vegyipari létesítmények otthona.", "A városi múzeum értékes középkori leleteket őriz."],
      ro: ["Fondat de cneazul Lazăr Hrebeljanović în anul 1371.", "Biserica Lazarica a fost construită în 1375 pentru a celebra nașterea unui fiu.", "Monumentul Eroilor din Kosovo se află în centrul orașului.", "A servit ca punct de plecare pentru armata sârbă înainte de bătălia de la Kosovo.", "Găzduiește un mare complex industrial și chimic.", "Muzeul Național al orașului adăpostește artefacte medievale valoroase."],
      en: ["Founded by Prince Lazar Hrebeljanović in 1371.", "Lazarica Church was built in 1375 to celebrate the birth of a son.", "The Monument to the Kosovo Heroes stands in the city center.", "Served as a starting point for the Serbian army before the Battle of Kosovo.", "Home to a large chemical and industrial complex.", "The City National Museum houses valuable medieval artifacts."],
    },
  },
  {
    id: "RS-022-ljubostinja",
    type: "historical",
    parent: "RS-022",
    coords: [21.0333, 43.6500],
    name: { de: "Kloster Ljubostinja", hu: "Ljubostinja kolostor", ro: "Mănăstirea Ljubostinja", en: "Ljubostinja Monastery" },
    description: {
      de: "Ein serbisch-orthodoxes Frauenkloster, ein Meisterwerk der Morava-Schule.",
      hu: "Szerb ortodox női kolostor, a Morava-stílusú építészet remekműve.",
      ro: "O mănăstire ortodoxă sârbă de maici, o capodoperă a școlii de arhitectură Morava.",
      en: "A Serbian Orthodox nunnery, a masterpiece of the Morava school of architecture."
    },
    facts: {
      de: ["Gegründet von Fürstin Milica", "Reich verzierte Fenster", "Malerische Lage"],
      hu: ["Milica fejedelemasszony alapította", "Gazdagon díszített ablakok", "Festői környezet"],
      ro: ["Fondată de prințesa Milica", "Ferestre bogat decorate", "Locație pitorească"],
      en: ["Founded by Princess Milica", "Richly decorated windows", "Picturesque setting"]
    }, image: "/poi-images/RS-022-ljubostinja.webp",
    descriptionAdvanced: {
      de: "Das Kloster Ljubostinja liegt in der Nähe von Trstenik im Tal der Westlichen Morava. Es wurde Ende des 14. Jahrhunderts von Fürstin Milica gegründet und ist ein herausragendes Beispiel der Morava-Schule. Das Kloster diente als Zufluchtsort für Witwen nach der Schlacht auf dem Amselfeld. Die Steinmetzarbeiten an den Fassaden sind international bekannt.",
      hu: "A Ljubostinja-kolostor Trstenik közelében, a Nyugati-Morava völgyében található. A 14. század végén alapította Milica hercegnő, és a moravai építészeti iskola kiemelkedő példája. A kolostor menedékül szolgált az özvegyek számára a rigómezei csata után. Az ablakok és homlokzatok díszes kőfaragásai széles körben ismertek.",
      ro: "Mănăstirea Ljubostinja este situată lângă Trstenik, în valea Moravei de Vest. A fost ctitorită la sfârșitul secolului al XIV-lea de către prințesa Milica și este un exemplu de seamă al școlii morave. Mănăstirea a servit drept refugiu pentru văduve după bătălia de la Kosovo. Decorațiunile sculptate în piatră sunt recunoscute.",
      en: "Ljubostinja Monastery is located near Trstenik in the West Morava valley. It was founded in the late 14th century by Princess Milica and is a prime example of the Morava architectural school. The monastery served as a sanctuary for widows following the Battle of Kosovo. Its intricate stone carvings on facades are internationally recognized.",
    },
    factsAdvanced: {
      de: ["Erbaut zwischen 1388 und 1405 vom Baumeister Rade Borović.", "Fürstin Milica ist in der Klosterkirche beigesetzt.", "Der Name Ljubostinja bedeutet etwa Ort der Liebe.", "Beherbergt das berühmte Grabtuch der Milica, bestickt mit Goldfäden.", "Die Kirche ist der Entschlafung der Gottesmutter geweiht.", "Eines der am besten erhaltenen Denkmäler der mittelalterlichen Architektur Serbiens."],
      hu: ["1388 és 1405 között építette Rade Borović mester.", "Milica hercegnő a kolostortemplomban van eltemetve.", "A Ljubostinja név jelentése nagyjából a szerelem helye.", "Itt található a híres, aranyszállal hímzett Ljubostinjai halotti lepel.", "A templomot Szűz Mária elszenderedésének tiszteletére szentelték.", "A szerb középkori építészet egyik legjobb állapotban fennmaradt emléke."],
      ro: ["Construită între 1388 și 1405 de către meșterul Rade Borović.", "Prințesa Milica este înmormântată în biserica mănăstirii.", "Numele Ljubostinja se traduce aproximativ ca locul iubirii.", "Găzduiește celebrul giulgiu de la Ljubostinja, brodat cu fir de aur.", "Biserica este dedicată Adormirii Maicii Domnului.", "Unul dintre cele mai bine conservate monumente ale arhitecturii medievale sârbe."],
      en: ["Built between 1388 and 1405 by the master builder Rade Borović.", "Princess Milica is buried within the monastery church.", "The name Ljubostinja translates roughly to place of love.", "Home to the famous Ljubostinja shroud embroidered with gold thread.", "The church is dedicated to the Dormition of the Mother of God.", "One of the best-preserved monuments of Serbian medieval architecture."],
    },
  },
  // RS-023 Šumadijski
  // RS-024 Moravicki
  {
    id: "RS-024-ovcar-kablar",
    type: "landmark",
    parent: "RS-024",
    coords: [20.1800, 43.9000],
    name: { de: "Ovčar-Kablar-Schlucht", hu: "Ovčar-Kablar-szurdok", ro: "Defileul Ovčar-Kablar", en: "Ovčar-Kablar Gorge" },
    description: {
      de: "Eine malerische Schlucht der Westmorava, auch 'Serbisches Heiliges Bergland' genannt.",
      hu: "A Nyugati-Morava festői szurdoka, amelyet 'szerb szent hegyvidéknek' is neveznek.",
      ro: "Un defileu pitoresc al Moravei de Vest, numit și 'Muntele Sfânt Sârbesc'.",
      en: "A picturesque gorge of the West Morava river, also called 'Serbian Holy Mountain'."
    },
    facts: {
      de: ["Zahlreiche Klöster", "Wellness-Zentrum", "Wanderwege"],
      hu: ["Számos kolostor", "Gyógyfürdő központ", "Túraútvonalak"],
      ro: ["Numeroase mănăstiri", "Centru de wellness", "Trasee de drumeție"],
      en: ["Numerous monasteries", "Wellness center", "Hiking trails"]
    }, image: "/poi-images/RS-024-ovcar-kablar.webp",
    descriptionAdvanced: {
      de: "Die Ovčar-Kablar-Schlucht ist ein markantes Naturphänomen im Tal der Westlichen Morava. Die steilen Hänge der Berge Ovčar und Kablar bilden eine tiefe Schlucht mit Flussschleifen. Aufgrund der zehn mittelalterlichen Klöster in der Gegend wird sie oft als das serbische Athos bezeichnet. Das Gebiet ist als Landschaft von herausragender Bedeutung geschützt.",
      hu: "Az Ovčar-Kablar-szurdok egy meghatározó természeti jelenség a Nyugati-Morava völgyében. Az Ovčar és Kablar hegyek meredek oldalai mély szurdokot alkotnak, látványos kanyarulatokkal. A területen található tíz középkori kolostor miatt gyakran szerb Athosznak is nevezik. A környék kiemelt jelentőségű tájvédelmi körzet.",
      ro: "Defileul Ovčar-Kablar este un fenomen natural impresionant situat în valea Moravei de Vest. Pantele abrupte ale munților Ovčar și Kablar formează un defileu adânc cu meandre ale râului. Datorită celor zece mănăstiri medievale din zonă, este adesea numit Athosul sârbesc. Aria este protejată ca peisaj de importanță excepțională.",
      en: "The Ovčar-Kablar Gorge is a distinctive natural phenomenon located in the West Morava valley. The steep slopes of Ovčar and Kablar mountains form a deep gorge with striking river meanders. Due to the ten medieval monasteries in the area, it is often called the Serbian Athos. The site is protected as a landscape of outstanding importance.",
    },
    factsAdvanced: {
      de: ["Der Fluss Westliche Morava bildet hier einzigartige Mäander.", "Beheimatet 10 aktive Klöster, darunter Blagoveštenje und Jovanje.", "Der Berg Ovčar erreicht eine Höhe von 985 Metern über dem Meeresspiegel.", "Beliebt zum Wandern, Bergsteigen und für den Aussichtspunkt Kablar.", "Enthält das Thermalbad Ovčar Banja innerhalb der Schlucht.", "Wurde 1994 von der serbischen Regierung zum Naturschutzgut erklärt."],
      hu: ["A Nyugati-Morava folyó egyedülálló meandereket alkot itt.", "10 aktív kolostor otthona, köztük a Blagoveštenje és a Jovanje.", "Az Ovčar-hegy magassága 985 méter a tengerszint felett.", "Népszerű a túrázók és hegymászók körében, híres a Kablar-kilátópont.", "A szurdok területén található az Ovčar Banja termálfürdő.", "A szerb kormány 1994-ben nyilvánította védett természeti területté."],
      ro: ["Râul Morava de Vest formează meandre unice prin defileu.", "Adăpostește 10 mănăstiri active, inclusiv Blagoveštenje și Jovanje.", "Muntele Ovčar atinge o altitudine de 985 de metri deasupra mării.", "Popular pentru drumeții, alpinism și punctul de belvedere Kablar.", "Conține stațiunea termală Ovčar Banja în interiorul defileului.", "Declarat bun natural protejat de guvernul sârb în 1994."],
      en: ["The West Morava river carves unique meanders through the gorge.", "Home to 10 active monasteries including Blagoveštenje and Jovanje.", "Mount Ovčar reaches an altitude of 985 meters above sea level.", "Popular for hiking, rock climbing, and visits to the Kablar viewpoint.", "Contains the thermal spa Ovčar Banja within the gorge.", "Declared a protected natural asset by the Serbian government in 1994."],
    },
  },
  // RS-025 Kolubarski
  {
    id: "RS-025-valjevo",
    type: "city",
    parent: "RS-025",
    coords: [19.8900, 44.2700],
    name: { de: "Valjevo", hu: "Valjevo", ro: "Valjevo", en: "Valjevo" },
    description: {
      de: "Eine Stadt im Westen Serbiens, reich an Geschichte und kulturellem Erbe.",
      hu: "Nyugat-szerbiai város, gazdag történelemmel és kulturális örökséggel.",
      ro: "Un oraș în vestul Serbiei, bogat în istorie și moștenire culturală.",
      en: "A city in western Serbia, rich in history and cultural heritage."
    },
    facts: {
      de: ["Altstadt Tešnjar", "Nationalmuseum", "Kolubara-Fluss"],
      hu: ["Tešnjar óváros", "Nemzeti Múzeum", "Kolubara-folyó"],
      ro: ["Centrul vechi Tešnjar", "Muzeul Național", "Râul Kolubara"],
      en: ["Tešnjar old quarter", "National Museum", "Kolubara River"]
    },
    descriptionAdvanced: {
      de: "Valjevo liegt im Westen Serbiens am Ufer der Gradac und Kolubara. Die Stadt ist das Verwaltungszentrum des Bezirks Kolubara und für ihr historisches Viertel Tešnjar bekannt. Dieses Viertel am rechten Ufer bewahrt Architektur aus der osmanischen Zeit. Valjevo ist zudem ein bedeutendes kulturelles Zentrum mit einer traditionsreichen Handelsgeschichte.",
      hu: "Valjevo Nyugat-Szerbiában, a Kolubara és a Gradac folyók találkozásánál fekszik. A város a Kolubara körzet közigazgatási központja és híres a Tešnjar nevű régi negyedéről. Ez a 19. századi balkáni építészetet őrző bazársor a folyó jobb partján terül el. A település jelentős kulturális és történelmi csomópont a régióban.",
      ro: "Valjevo este situat în vestul Serbiei, la confluența râurilor Kolubara și Gradac. Orașul este centrul administrativ al districtului Kolubara și este renumit pentru cartierul său vechi, Tešnjar. Această zonă comercială conservă arhitectura otomană din secolul al XIX-lea. Localitatea reprezintă un important nucleu cultural și istoric regional.",
      en: "Valjevo is located in western Serbia at the confluence of the Kolubara and Gradac rivers. The city serves as the administrative center of the Kolubara District and is famous for its Tešnjar old bazaar. This historic quarter on the right bank preserves 19th-century Ottoman architecture. It remains a significant cultural and trading hub.",
    },
    factsAdvanced: {
      de: ["Die Stadt wurde erstmals im Jahr 1393 urkundlich erwähnt.", "Valjevo liegt auf einer durchschnittlichen Höhe von 185 Metern.", "Der Fluss Gradac gilt als einer der saubersten Flüsse Europas.", "Das historische Viertel Tešnjar entstand im 17. Jahrhundert.", "Die Stadt hat eine Einwohnerzahl von etwa 58.000 Menschen.", "Der Berg Povlen erreicht in der Nähe eine Höhe von 1.347 Metern."],
      hu: ["A várost először 1393-ban említik írásos dokumentumok.", "Valjevo átlagos tengerszint feletti magassága 185 méter.", "A Gradac folyót Európa egyik legtisztább vizű folyójaként tartják számon.", "A Tešnjar negyed a 17. században kezdett el kialakulni.", "A város lakossága megközelítőleg 58.000 fő.", "A közeli Povlen-hegység legmagasabb pontja 1.347 méter."],
      ro: ["Orașul a fost menționat documentar pentru prima dată în 1393.", "Valjevo este situat la o altitudine medie de 185 de metri.", "Râul Gradac este considerat unul dintre cele mai curate din Europa.", "Cartierul istoric Tešnjar a început să se dezvolte în secolul XVII.", "Populația orașului este de aproximativ 58.000 de locuitori.", "Muntele Povlen din apropiere atinge o înălțime de 1.347 metri."],
      en: ["The city was first mentioned in historical records in 1393.", "Valjevo sits at an average elevation of 185 meters above sea level.", "The Gradac River is regarded as one of the cleanest in Europe.", "The Tešnjar historic quarter dates back to the 17th century.", "The city has a population of approximately 58,000 residents.", "Nearby Mount Povlen reaches an altitude of 1,347 meters."],
    },
  },
  {
    id: "RS-025-lelic",
    type: "historical",
    parent: "RS-025",
    coords: [19.8400, 44.2100],
    name: { de: "Kloster Lelić", hu: "Lelić kolostor", ro: "Mănăstirea Lelić", en: "Lelić Monastery" },
    description: {
      de: "Ein modernes, aber bedeutendes Kloster, dem Heiligen Nikolai Velimirović gewidmet.",
      hu: "Modern, de jelentős kolostor, amelyet Szent Nikolai Velimirovićnak szenteltek.",
      ro: "O mănăstire modernă, dar importantă, dedicată Sfântului Nikolai Velimirović.",
      en: "A modern but significant monastery dedicated to Saint Nikolai Velimirović."
    },
    facts: {
      de: ["Reliquien des Hl. Nikolai", "Einzigartige Architektur", "Pilgerstätte"],
      hu: ["Szent Nikolai ereklyéi", "Egyedi építészet", "Zarándokhely"],
      ro: ["Moaștele Sf. Nikolai", "Arhitectură unică", "Loc de pelerinaj"],
      en: ["Relics of St. Nikolai", "Unique architecture", "Pilgrimage site"]
    },
    descriptionAdvanced: {
      de: "Das Kloster Lelić liegt etwa 11 Kilometer von Valjevo entfernt im gleichnamigen Dorf. Es wurde 1922 als Stiftung von Bischof Nikolaj Velimirović und seinem Vater Dragomir errichtet. Die Architektur ist im serbisch-byzantinischen Stil gehalten und beherbergt die Reliquien des Bischofs. Heute ist es ein wichtiger Wallfahrtsort für die serbisch-orthodoxe Kirche.",
      hu: "A Lelić-kolostor mintegy 11 kilométerre található Valjevótól, az azonos nevű faluban. Az épületegyüttest 1922-ben alapította Nikolaj Velimirović püspök és édesapja, Dragomir. A templom szerb-bizánci stílusban épült, és itt őrzik a szentéletű püspök ereklyéit. Napjainkban a szerb ortodox hívők egyik legjelentősebb zarándokhelye.",
      ro: "Mănăstirea Lelić se află la aproximativ 11 kilometri de Valjevo, în satul cu același nume. A fost ctitorită în 1922 de episcopul Nikolaj Velimirović și tatăl său, Dragomir. Arhitectura bisericii urmează stilul sârbo-bizantin și adăpostește moaștele episcopului. În prezent, este un loc de pelerinaj major pentru Biserica Ortodoxă Sârbă.",
      en: "Lelić Monastery is situated about 11 kilometers from Valjevo in the village of Lelić. It was built in 1922 as an endowment of Bishop Nikolaj Velimirović and his father, Dragomir. The architecture features the Serbian-Byzantine style and houses the relics of the holy bishop. It serves as a prominent pilgrimage site for the Serbian Orthodox Church.",
    },
    factsAdvanced: {
      de: ["Das Kloster wurde am 15. Juni 1922 offiziell geweiht.", "Die Kirche ist dem heiligen Nikolaus von Myra gewidmet.", "Bischof Nikolaj Velimirović wurde 1881 im Dorf Lelić geboren.", "Die Reliquien des Bischofs wurden 1991 aus den USA hierher überführt.", "Das Kloster wurde 1996 in ein Männerkloster umgewandelt.", "Die Ikonostase stammt aus der Zeit der Klostergründung."],
      hu: ["A kolostort hivatalosan 1922. június 15-én szentelték fel.", "A templomot Myrai Szent Miklós tiszteletére emelték.", "Nikolaj Velimirović püspök 1881-ben született Lelić faluban.", "A püspök ereklyéit 1991-ben szállították haza az Egyesült Államokból.", "Az intézményt 1996-ban alakították át férfikolostorrá.", "Az ikonosztáz a kolostor alapításának idejéből származik."],
      ro: ["Mănăstirea a fost sfințită oficial la 15 iunie 1922.", "Biserica principală este dedicată Sfântului Nicolae din Mira.", "Episcopul Nikolaj Velimirović s-a născut în satul Lelić în 1881.", "Moaștele episcopului au fost aduse aici din SUA în anul 1991.", "Așezământul a fost transformat în mănăstire de călugări în 1996.", "Catapeteasma datează din perioada fondării mănăstirii."],
      en: ["The monastery was officially consecrated on June 15, 1922.", "The main church is dedicated to Saint Nicholas of Myra.", "Bishop Nikolaj Velimirović was born in Lelić village in 1881.", "The bishop's relics were transferred here from the USA in 1991.", "The site was reorganized as a male monastery in 1996.", "The iconostasis dates back to the time of the monastery's founding."],
    },
  }
];

export const serbiaAllPoi: POI[] = [
  serbiaCountry,
  ...serbiaRegions,
  ...serbiaCities,
  ...serbiaCulture,
  ...serbiaNature,
  ...serbiaRivers,
  ...serbiaDistrictPoi
];
