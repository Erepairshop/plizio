import type { POI } from "./poi";

export const poiExtraBeninCitiesV2: POI[] = [
  {
    id: "cotonou-cities-v2",
    type: "state-capital",
    parent: "BJ-LI",
    coords: [2.4333, 6.3667],
    name: { de: "Cotonou", hu: "Cotonou", ro: "Cotonou", en: "Cotonou" },
    description: {
      de: "Cotonou ist die größte Stadt und das wirtschaftliche Zentrum Benins, bekannt für seinen großen Hafen und lebhafte Märkte.",
      hu: "Cotonou Benin legnagyobb városa és gazdasági központja, amely hatalmas kikötőjéről és pezsgő piacairól ismert.",
      ro: "Cotonou este cel mai mare oraș și centrul economic al Beninului, cunoscut pentru portul său mare și piețele pline de viață.",
      en: "Cotonou is the largest city and economic hub of Benin, known for its massive port and vibrant markets."
    },
    facts: {
      de: ["Größte Stadt des Landes.", "Sitz vieler Regierungsstellen.", "Heimat des Dantokpa-Marktes."],
      hu: ["Az ország legnagyobb városa.", "Számos kormányzati szerv székhelye.", "Itt található a Dantokpa piac."],
      ro: ["Cel mai mare oraș din țară.", "Sediul multor instituții guvernamentale.", "Găzduiește piața Dantokpa."],
      en: ["Largest city in the country.", "Seat of many government offices.", "Home to the Dantokpa Market."]
    }
  },
  {
    id: "porto-novo-cities-v2",
    type: "state-capital",
    parent: "BJ-OU",
    coords: [2.605, 6.4972],
    name: { de: "Porto-Novo", hu: "Porto-Novo", ro: "Porto-Novo", en: "Porto-Novo" },
    description: {
      de: "Die offizielle Hauptstadt von Benin, Porto-Novo, besticht durch ihre koloniale Architektur und Museen.",
      hu: "Benin hivatalos fővárosa, Porto-Novo, gyarmati építészetével és múzeumaival nyűgözi le a látogatókat.",
      ro: "Capitala oficială a Beninului, Porto-Novo, impresionează prin arhitectura sa colonială și muzee.",
      en: "The official capital of Benin, Porto-Novo, is known for its colonial architecture and museums."
    },
    facts: {
      de: ["Offizielle Landeshauptstadt.", "Bedeutendes Kulturzentrum.", "Bekannt für den Großen Markt."],
      hu: ["Hivatalos állami főváros.", "Jelentős kulturális központ.", "A Nagy Piacáról ismert."],
      ro: ["Capitala oficială a țării.", "Centru cultural important.", "Cunoscut pentru Marea Piață."],
      en: ["Official state capital.", "Important cultural center.", "Known for the Grand Marché."]
    }
  },
  {
    id: "parakou-cities-v2",
    type: "city",
    parent: "BJ-BO",
    coords: [2.6333, 9.3333],
    name: { de: "Parakou", hu: "Parakou", ro: "Parakou", en: "Parakou" },
    description: {
      de: "Parakou ist die größte Stadt im Norden Benins und ein wichtiger Knotenpunkt für Handel und Transport.",
      hu: "Parakou Észak-Benin legnagyobb városa, a kereskedelem és a szállítás fontos csomópontja.",
      ro: "Parakou este cel mai mare oraș din nordul Beninului și un nod important pentru comerț și transport.",
      en: "Parakou is the largest city in northern Benin and a key hub for trade and transport."
    },
    facts: {
      de: ["Größte Stadt im Norden.", "Wichtiger Eisenbahnendpunkt.", "Zentrum der Baumwollverarbeitung."],
      hu: ["Észak legnagyobb városa.", "Fontos vasúti végállomás.", "A gyapotfeldolgozás központja."],
      ro: ["Cel mai mare oraș din nord.", "Capăt de linie feroviară important.", "Centrul prelucrării bumbacului."],
      en: ["Largest city in the north.", "Important railway terminus.", "Center of cotton processing."]
    }
  },
  {
    id: "djougou-cities-v2",
    type: "city",
    parent: "BJ-DO",
    coords: [1.6667, 9.7],
    name: { de: "Djougou", hu: "Djougou", ro: "Djougou", en: "Djougou" },
    description: {
      de: "Djougou ist ein bedeutendes Handelszentrum im Nordwesten Benins und Hauptstadt des Departements Donga.",
      hu: "Djougou fontos kereskedelmi központ Benin északnyugati részén, Donga megye székhelye.",
      ro: "Djougou este un centru comercial important în nord-vestul Beninului și capitala departamentului Donga.",
      en: "Djougou is a major commercial center in northwestern Benin and the capital of Donga Department."
    },
    facts: {
      de: ["Wichtiger Handelsplatz.", "Multikulturelle Bevölkerung.", "Tor zum Nordwesten."],
      hu: ["Fontos kereskedelmi helyszín.", "Multikulturális lakosság.", "Kapu az északnyugati rész felé."],
      ro: ["Piață comercială importantă.", "Populație multiculturală.", "Poartă către nord-vest."],
      en: ["Important trading post.", "Multicultural population.", "Gateway to the northwest."]
    }
  },
  {
    id: "bohicon-cities-v2",
    type: "city",
    parent: "BJ-ZO",
    coords: [2.0667, 7.1783],
    name: { de: "Bohicon", hu: "Bohicon", ro: "Bohicon", en: "Bohicon" },
    description: {
      de: "Bohicon ist ein dynamischer Verkehrsknotenpunkt im Zentrum Benins, unweit der historischen Stadt Abomey.",
      hu: "Bohicon egy dinamikus közlekedési csomópont Közép-Beninben, nem messze a történelmi Abomey várostól.",
      ro: "Bohicon este un nod de transport dinamic în centrul Beninului, nu departe de orașul istoric Abomey.",
      en: "Bohicon is a dynamic transportation hub in central Benin, located near the historic city of Abomey."
    },
    facts: {
      de: ["Wichtiger Bahnknotenpunkt.", "Zentrum des regionalen Handels.", "Schnell wachsende Stadt."],
      hu: ["Fontos vasúti csomópont.", "A regionális kereskedelem központja.", "Gyorsan növekvő város."],
      ro: ["Nod feroviar important.", "Centru al comerțului regional.", "Oraș cu creștere rapidă."],
      en: ["Major railway junction.", "Center of regional trade.", "Fast-growing city."]
    }
  },
  {
    id: "abomey-calavi-cities-v2",
    type: "city",
    parent: "BJ-AT",
    coords: [2.355, 6.4486],
    name: { de: "Abomey-Calavi", hu: "Abomey-Calavi", ro: "Abomey-Calavi", en: "Abomey-Calavi" },
    description: {
      de: "Abomey-Calavi ist eine rasant wachsende Vorstadt von Cotonou und Sitz der wichtigsten Universität des Landes.",
      hu: "Abomey-Calavi Cotonou gyorsan növekvő elővárosa, és az ország legfontosabb egyetemének székhelye.",
      ro: "Abomey-Calavi este o suburbie a orașului Cotonou cu o creștere rapidă și sediul principalei universități a țării.",
      en: "Abomey-Calavi is a rapidly growing suburb of Cotonou and home to the country's main university."
    },
    facts: {
      de: ["Standort der Universität von Abomey-Calavi.", "Große Wohngemeinde.", "Wirtschaftlich eng mit Cotonou verbunden."],
      hu: ["Az Abomey-Calavi Egyetem helyszíne.", "Nagy lakóövezet.", "Gazdaságilag szorosan kötődik Cotonouhoz."],
      ro: ["Locația Universității din Abomey-Calavi.", "Mare comunitate rezidențială.", "Legat economic strâns de Cotonou."],
      en: ["Site of the University of Abomey-Calavi.", "Large residential community.", "Economically closely linked to Cotonou."]
    }
  },
  {
    id: "natitingou-cities-v2",
    type: "city",
    parent: "BJ-AK",
    coords: [1.3833, 10.3],
    name: { de: "Natitingou", hu: "Natitingou", ro: "Natitingou", en: "Natitingou" },
    description: {
      de: "Natitingou liegt am Fuße des Atakora-Gebirges und dient als Tor zum Pendjari-Nationalpark.",
      hu: "Natitingou az Atakora-hegység lábánál fekszik, és a Pendjari Nemzeti Park kapujaként szolgál.",
      ro: "Natitingou se află la poalele munților Atakora și servește drept poartă către Parcul Național Pendjari.",
      en: "Natitingou is located at the foot of the Atakora Mountains and serves as a gateway to Pendjari National Park."
    },
    facts: {
      de: ["Zentrum der Somba-Kultur.", "Bedeutend für den Tourismus.", "Hauptstadt des Departements Atakora."],
      hu: ["A somba kultúra központja.", "Jelentős a turizmus szempontjából.", "Atakora megye székhelye."],
      ro: ["Centrul culturii Somba.", "Important pentru turism.", "Capitala departamentului Atakora."],
      en: ["Center of Somba culture.", "Important for tourism.", "Capital of Atakora Department."]
    }
  },
  {
    id: "kandi-cities-v2",
    type: "city",
    parent: "BJ-AL",
    coords: [2.9383, 11.1283],
    name: { de: "Kandi", hu: "Kandi", ro: "Kandi", en: "Kandi" },
    description: {
      de: "Kandi ist die Hauptstadt des Departements Alibori und ein wichtiges landwirtschaftliches Zentrum im Norden.",
      hu: "Kandi Alibori megye székhelye és egy fontos mezőgazdasági központ északon.",
      ro: "Kandi este capitala departamentului Alibori și un centru agricol important în nord.",
      en: "Kandi is the capital of Alibori Department and an important agricultural center in the north."
    },
    facts: {
      de: ["Zentrum der Baumwollproduktion.", "Heimat des Volkes der Bariba.", "Wichtiger Marktort."],
      hu: ["A gyapottermelés központja.", "A bariba nép hazája.", "Fontos piaci helyszín."],
      ro: ["Centrul producției de bumbac.", "Patria poporului Bariba.", "Punct de piață important."],
      en: ["Center of cotton production.", "Home of the Bariba people.", "Important market town."]
    }
  },
  {
    id: "lokossa-cities-v2",
    type: "city",
    parent: "BJ-MO",
    coords: [1.7167, 6.6333],
    name: { de: "Lokossa", hu: "Lokossa", ro: "Lokossa", en: "Lokossa" },
    description: {
      de: "Lokossa ist die Hauptstadt des Departements Mono und bekannt für seine Textilindustrie.",
      hu: "Lokossa Mono megye székhelye, és textiliparáról ismert.",
      ro: "Lokossa este capitala departamentului Mono și este cunoscut pentru industria sa textilă.",
      en: "Lokossa is the capital of Mono Department and is known for its textile industry."
    },
    facts: {
      de: ["Bedeutendes Industriezentrum.", "An der Grenze zu Togo gelegen.", "Bekannt für seine Märkte."],
      hu: ["Jelentős ipari központ.", "Togo határán fekszik.", "Piacairól ismert."],
      ro: ["Centru industrial important.", "Situat la granița cu Togo.", "Cunoscut pentru piețele sale."],
      en: ["Important industrial center.", "Located near the border with Togo.", "Known for its markets."]
    }
  },
  {
    id: "ouidah-cities-v2",
    type: "city",
    parent: "BJ-AT",
    coords: [2.0833, 6.3667],
    name: { de: "Ouidah", hu: "Ouidah", ro: "Ouidah", en: "Ouidah" },
    description: {
      de: "Ouidah ist ein historisches Zentrum des Voodoo-Glaubens und war einst ein bedeutender Hafen für den Sklavenhandel.",
      hu: "Ouidah a vudu hiedelem történelmi központja, és egykor a rabszolga-kereskedelem jelentős kikötője volt.",
      ro: "Ouidah este un centru istoric al credinței Voodoo și a fost odată un port semnificativ pentru comerțul cu sclavi.",
      en: "Ouidah is a historic center of the Voodoo faith and was once a significant port for the slave trade."
    },
    facts: {
      de: ["Heimat des Tempels der Pythons.", "Ort des jährlichen Voodoo-Festivals.", "Denkmal 'Pforte ohne Wiederkehr'."],
      hu: ["A Pitonok Templomának otthona.", "Az éves Vudu Fesztivál helyszíne.", "A 'Visszatérés Nélküli Kapu' emlékmű helye."],
      ro: ["Găzduiește Templul Pitonilor.", "Locul festivalului anual Voodoo.", "Monumentul 'Poarta fără întoarcere'."],
      en: ["Home to the Temple of Pythons.", "Site of the annual Voodoo festival.", "Site of the 'Point of No Return' monument."]
    }
  },
  {
    id: "abomey-cities-v2",
    type: "city",
    parent: "BJ-ZO",
    coords: [1.9833, 7.1833],
    name: { de: "Abomey", hu: "Abomey", ro: "Abomey", en: "Abomey" },
    description: {
      de: "Abomey war die historische Hauptstadt des Königreichs Dahomey und beherbergt die zum UNESCO-Welterbe gehörenden Königspaläste.",
      hu: "Abomey a Dahomey Királyság történelmi fővárosa volt, és itt találhatók az UNESCO világörökség részét képező királyi paloták.",
      ro: "Abomey a fost capitala istorică a Regatului Dahomey și găzduiește palatele regale incluse în patrimoniul mondial UNESCO.",
      en: "Abomey was the historic capital of the Kingdom of Dahomey and is home to the UNESCO World Heritage Royal Palaces."
    },
    facts: {
      de: ["Ehemalige königliche Residenz.", "Reiches historisches Erbe.", "Berühmt für traditionelles Handwerk."],
      hu: ["Egykori királyi rezidencia.", "Gazdag történelmi örökség.", "Híres a hagyományos kézművességről."],
      ro: ["Fosta reședință regală.", "Bogată moștenire istorică.", "Faimos pentru meșteșugurile tradiționale."],
      en: ["Former royal residence.", "Rich historical heritage.", "Famous for traditional crafts."]
    }
  },
  {
    id: "malanville-cities-v2",
    type: "city",
    parent: "BJ-AL",
    coords: [3.3833, 11.8667],
    name: { de: "Malanville", hu: "Malanville", ro: "Malanville", en: "Malanville" },
    description: {
      de: "Malanville ist eine wichtige Grenzstadt zu Niger und ein bedeutender Handelsplatz am Fluss Niger.",
      hu: "Malanville fontos határváros Niger felé, és jelentős kereskedelmi központ a Niger folyó partján.",
      ro: "Malanville este un oraș de frontieră important cu Nigerul și un punct comercial semnificativ pe fluviul Niger.",
      en: "Malanville is a key border town with Niger and a major trading post on the Niger River."
    },
    facts: {
      de: ["Größter Markt im Norden.", "Tor zum Binnenland Niger.", "Bedeutender Flusshafen."],
      hu: ["Észak legnagyobb piaca.", "Kapu a szárazföldi Niger felé.", "Jelentős folyami kikötő."],
      ro: ["Cea mai mare piață din nord.", "Poartă către Nigerul interior.", "Port fluvial important."],
      en: ["Largest market in the north.", "Gateway to landlocked Niger.", "Significant river port."]
    }
  },
  {
    id: "nikki-cities-v2",
    type: "city",
    parent: "BJ-BO",
    coords: [3.2167, 9.9333],
    name: { de: "Nikki", hu: "Nikki", ro: "Nikki", en: "Nikki" },
    description: {
      de: "Nikki ist die traditionelle Hauptstadt des Bariba-Volkes und ein wichtiges kulturelles Zentrum im Osten Benins.",
      hu: "Nikki a bariba nép hagyományos fővárosa és fontos kulturális központ Kelet-Beninben.",
      ro: "Nikki este capitala tradițională a poporului Bariba și un centru cultural important în estul Beninului.",
      en: "Nikki is the traditional capital of the Bariba people and an important cultural center in eastern Benin."
    },
    facts: {
      de: ["Sitz des Sinaboko (Königs).", "Berühmt für das Gani-Festival.", "Zentrum der Bariba-Tradition."],
      hu: ["A Sinaboko (király) székhelye.", "A Gani fesztiválról híres.", "A bariba hagyományok központja."],
      ro: ["Sediul lui Sinaboko (regele).", "Faimos pentru festivalul Gani.", "Centrul tradiției Bariba."],
      en: ["Seat of the Sinaboko (King).", "Famous for the Gani festival.", "Center of Bariba tradition."]
    }
  },
  {
    id: "dogbo-tota-cities-v2",
    type: "city",
    parent: "BJ-KO",
    coords: [1.7833, 6.8],
    name: { de: "Dogbo-Tota", hu: "Dogbo-Tota", ro: "Dogbo-Tota", en: "Dogbo-Tota" },
    description: {
      de: "Dogbo-Tota ist ein bedeutendes Handelszentrum im Departement Kouffo, bekannt für seine landwirtschaftlichen Märkte.",
      hu: "Dogbo-Tota jelentős kereskedelmi központ Kouffo megyében, mezőgazdasági piacairól ismert.",
      ro: "Dogbo-Tota este un centru comercial semnificativ în departamentul Kouffo, cunoscut pentru piețele sale agricole.",
      en: "Dogbo-Tota is a significant commercial center in Kouffo Department, known for its agricultural markets."
    },
    facts: {
      de: ["Wichtiger Markt für Agrarprodukte.", "Verkehrsknotenpunkt im Südwesten.", "Zentrum der lokalen Verwaltung."],
      hu: ["Fontos piac a mezőgazdasági termékek számára.", "Közlekedési csomópont délnyugaton.", "A helyi közigazgatás központja."],
      ro: ["Piață importantă pentru produse agricole.", "Nod de transport în sud-vest.", "Centru al administrației locale."],
      en: ["Major market for agricultural products.", "Transport hub in the southwest.", "Center of local administration."]
    }
  },
  {
    id: "savalou-cities-v2",
    type: "city",
    parent: "BJ-CO",
    coords: [1.9667, 7.9167],
    name: { de: "Savalou", hu: "Savalou", ro: "Savalou", en: "Savalou" },
    description: {
      de: "Savalou ist eine Stadt im Departement Collines, bekannt für ihre reiche Kultur und das jährliche Jams-Festival.",
      hu: "Savalou egy város Collines megyében, gazdag kultúrájáról és az éves Jamgyökér Fesztiválról ismert.",
      ro: "Savalou este un oraș din departamentul Collines, cunoscut pentru cultura sa bogată și festivalul anual al iamelor.",
      en: "Savalou is a town in Collines Department, known for its rich culture and the annual Yam Festival."
    },
    facts: {
      de: ["Bekannt für das Jams-Festival.", "Hügelige Landschaft.", "Bedeutendes Voodoo-Zentrum."],
      hu: ["A Jamgyökér Fesztiválról ismert.", "Dombos táj.", "Jelentős vudu központ."],
      ro: ["Cunoscut pentru festivalul iamelor.", "Peisaj deluros.", "Centru Voodoo important."],
      en: ["Known for the Yam Festival.", "Hilly landscape.", "Significant Voodoo center."]
    }
  },
  {
    id: "come-cities-v2",
    type: "city",
    parent: "BJ-MO",
    coords: [1.8833, 6.4],
    name: { de: "Comè", hu: "Comè", ro: "Comè", en: "Comè" },
    description: {
      de: "Comè ist eine Küstenstadt im Departement Mono, die ein wichtiger Handelsplatz zwischen Cotonou und der Grenze zu Togo ist.",
      hu: "Comè egy tengerparti város Mono megyében, amely fontos kereskedelmi helyszín Cotonou és a togói határ között.",
      ro: "Comè este un oraș de coastă din departamentul Mono, fiind un punct comercial important între Cotonou și granița cu Togo.",
      en: "Comè is a coastal town in Mono Department, serving as an important trading spot between Cotonou and the Togo border."
    },
    facts: {
      de: ["Zentrum des Fischhandels.", "Wichtiger Zwischenstopp an der Küstenstraße.", "Bekannt für seine Märkte."],
      hu: ["A halkereskedelem központja.", "Fontos megálló a tengerparti úton.", "Piacairól ismert."],
      ro: ["Centrul comerțului cu pește.", "Popas important pe drumul de coastă.", "Cunoscut pentru piețele sale."],
      en: ["Center of the fish trade.", "Important stop on the coastal road.", "Known for its markets."]
    }
  },
  {
    id: "save-cities-v2",
    type: "city",
    parent: "BJ-CO",
    coords: [2.4833, 8.0333],
    name: { de: "Savè", hu: "Savè", ro: "Savè", en: "Savè" },
    description: {
      de: "Savè ist bekannt für seine markanten Felsformationen, die 'Mamelles de Savè', und liegt an der Hauptstraße nach Norden.",
      hu: "Savè jellegzetes sziklaképződményeiről, a 'Savè melleiről' ismert, és az északra vezető főút mentén fekszik.",
      ro: "Savè este cunoscut pentru formațiunile sale stâncoase distinctive, 'Mamelles de Savè', și se află pe drumul principal spre nord.",
      en: "Savè is known for its distinctive rock formations, the 'Mamelles de Savè', and is located on the main road to the north."
    },
    facts: {
      de: ["Berühmt für seine Granitfelsen.", "Wichtiger Haltepunkt an der Eisenbahn.", "Zentrum der Region."],
      hu: ["Híres gránitszikláiról.", "Fontos vasúti megállóhely.", "A régió központja."],
      ro: ["Faimos pentru stâncile sale de granit.", "Punct de oprire feroviar important.", "Centrul regiunii."],
      en: ["Famous for its granite hills.", "Important railway stop.", "Center of the region."]
    }
  },
  {
    id: "tchaourou-cities-v2",
    type: "city",
    parent: "BJ-BO",
    coords: [2.6, 8.8833],
    name: { de: "Tchaourou", hu: "Tchaourou", ro: "Tchaourou", en: "Tchaourou" },
    description: {
      de: "Tchaourou ist eine Stadt im Departement Borgou und bekannt als Geburtsort des ehemaligen Präsidenten Yayi Boni.",
      hu: "Tchaourou egy város Borgou megyében, és a korábbi elnök, Yayi Boni szülőhelyeként ismert.",
      ro: "Tchaourou este un oraș din departamentul Borgou și este cunoscut ca locul de naștere al fostului președinte Yayi Boni.",
      en: "Tchaourou is a town in Borgou Department and is known as the birthplace of former President Yayi Boni."
    },
    facts: {
      de: ["Flächenmäßig größte Kommune Benins.", "Wichtiger landwirtschaftlicher Markt.", "Zentrum der Cashew-Produktion."],
      hu: ["Területileg Benin legnagyobb községe.", "Fontos mezőgazdasági piac.", "A kesudió-termelés központja."],
      ro: ["Cea mai mare comună din Benin ca suprafață.", "Piață agricolă importantă.", "Centrul producției de caju."],
      en: ["Largest commune in Benin by area.", "Important agricultural market.", "Center of cashew production."]
    }
  },
  {
    id: "bassila-cities-v2",
    type: "city",
    parent: "BJ-DO",
    coords: [1.6653, 9.0083],
    name: { de: "Bassila", hu: "Bassila", ro: "Bassila", en: "Bassila" },
    description: {
      de: "Bassila liegt im Nordwesten Benins und ist bekannt für seine Holzindustrie und die umliegenden Waldreservate.",
      hu: "Bassila Benin északnyugati részén fekszik, és faiparáról, valamint a környező erdőrezervátumokról ismert.",
      ro: "Bassila se află în nord-vestul Beninului și este cunoscut pentru industria lemnului și rezervațiile forestiere din jur.",
      en: "Bassila is located in northwestern Benin and is known for its timber industry and surrounding forest reserves."
    },
    facts: {
      de: ["Zentrum der Holzwirtschaft.", "Vielfältige ethnische Gruppen.", "An der Grenze zu Togo."],
      hu: ["A fagazdaság központja.", "Változatos etnikai csoportok.", "Togo határán."],
      ro: ["Centrul economiei forestiere.", "Grupuri etnice diverse.", "La granița cu Togo."],
      en: ["Center of the timber economy.", "Diverse ethnic groups.", "Near the border with Togo."]
    }
  },
  {
    id: "tanguieta-cities-v2",
    type: "city",
    parent: "BJ-AK",
    coords: [1.2667, 10.6167],
    name: { de: "Tanguiéta", hu: "Tanguiéta", ro: "Tanguiéta", en: "Tanguiéta" },
    description: {
      de: "Tanguiéta ist eine malerische Stadt am Fuße der Atakora-Berge und ein wichtiger Stützpunkt für den Tourismus im Norden.",
      hu: "Tanguiéta egy festői város az Atakora-hegység lábánál, és fontos támaszpont az északi turizmus számára.",
      ro: "Tanguiéta este un oraș pitoresc la poalele munților Atakora și o bază importantă pentru turismul din nord.",
      en: "Tanguiéta is a scenic town at the foot of the Atakora Mountains and a major base for northern tourism."
    },
    facts: {
      de: ["Berühmt für sein Krankenhaus.", "In der Nähe der Tanougou-Wasserfälle.", "Marktplatz für die Region."],
      hu: ["Híres a kórházáról.", "A Tanougou-vízesések közelében.", "Piachely a régió számára."],
      ro: ["Faimos pentru spitalul său.", "Lângă cascadele Tanougou.", "Loc de piață pentru regiune."],
      en: ["Famous for its hospital.", "Near the Tanougou waterfalls.", "Marketplace for the region."]
    }
  },
  {
    id: "banikoara-cities-v2",
    type: "city",
    parent: "BJ-AL",
    coords: [2.4389, 11.2944],
    name: { de: "Banikoara", hu: "Banikoara", ro: "Banikoara", en: "Banikoara" },
    description: {
      de: "Banikoara ist das Herz der beninischen Baumwollproduktion und liegt im Norden des Landes.",
      hu: "Banikoara a benini gyapottermelés szíve, az ország északi részén található.",
      ro: "Banikoara este inima producției de bumbac din Benin și se află în nordul țării.",
      en: "Banikoara is the heart of Beninese cotton production, located in the north of the country."
    },
    facts: {
      de: ["Baumwoll-Hauptstadt Benins.", "Wirtschaftlich sehr bedeutend.", "Heimat des Banikoara-Marktes."],
      hu: ["Benin gyapotfővárosa.", "Gazdaságilag kiemelkedő jelentőségű.", "Itt található a Banikoara piac."],
      ro: ["Capitala bumbacului din Benin.", "Foarte important economic.", "Găzduiește piața Banikoara."],
      en: ["Cotton capital of Benin.", "Highly significant economically.", "Home to the Banikoara market."]
    }
  },
  {
    id: "bembereke-cities-v2",
    type: "city",
    parent: "BJ-BO",
    coords: [2.6667, 10.2167],
    name: { de: "Bembèrèkè", hu: "Bembèrèkè", ro: "Bembèrèkè", en: "Bembèrèkè" },
    description: {
      de: "Bembèrèkè ist ein bedeutendes Bildungs- und Handelszentrum im Departement Borgou.",
      hu: "Bembèrèkè fontos oktatási és kereskedelmi központ Borgou megyében.",
      ro: "Bembèrèkè este un centru important de educație și comerț din departamentul Borgou.",
      en: "Bembèrèkè is an important educational and commercial center in Borgou Department."
    },
    facts: {
      de: ["Bekannt für seine Schulen.", "Wichtiger Marktort an der Nordroute.", "Zentrum der Bariba-Kultur."],
      hu: ["Iskoláiról ismert.", "Fontos piaci helyszín az északi útvonalon.", "A bariba kultúra központja."],
      ro: ["Cunoscut pentru școlile sale.", "Loc de piață important pe ruta de nord.", "Centrul culturii Bariba."],
      en: ["Known for its schools.", "Important market town on the north route.", "Center of Bariba culture."]
    }
  },
  {
    id: "grand-popo-cities-v2",
    type: "city",
    parent: "BJ-MO",
    coords: [1.8333, 6.2667],
    name: { de: "Grand-Popo", hu: "Grand-Popo", ro: "Grand-Popo", en: "Grand-Popo" },
    description: {
      de: "Grand-Popo ist ein bekannter Badeort an der Küste Benins, gelegen zwischen dem Meer und dem Mono-Fluss.",
      hu: "Grand-Popo egy ismert üdülőhely Benin tengerpartján, a tenger és a Mono-folyó között.",
      ro: "Grand-Popo este o stațiune balneară cunoscută de pe coasta Beninului, situată între mare și râul Mono.",
      en: "Grand-Popo is a well-known seaside resort on the coast of Benin, nestled between the sea and the Mono River."
    },
    facts: {
      de: ["Beliebtes Touristenziel.", "Berühmt für seine Strände.", "Einst ein wichtiger Sklavenhafen."],
      hu: ["Népszerű turisztikai célpont.", "Híres a strandjairól.", "Egykor fontos rabszolgakikötő volt."],
      ro: ["Destinație turistică populară.", "Faimos pentru plajele sale.", "Odată un port de sclavi important."],
      en: ["Popular tourist destination.", "Famous for its beaches.", "Once an important slave port."]
    }
  },
  {
    id: "pobe-cities-v2",
    type: "city",
    parent: "BJ-PL",
    coords: [2.665, 6.98],
    name: { de: "Pobè", hu: "Pobè", ro: "Pobè", en: "Pobè" },
    description: {
      de: "Pobè ist die Hauptstadt des Departements Plateau und ein wichtiges Zentrum für die Palmölproduktion.",
      hu: "Pobè Plateau megye székhelye és a pálmaolaj-termelés fontos központja.",
      ro: "Pobè este capitala departamentului Plateau și un centru important pentru producția de ulei de palmier.",
      en: "Pobè is the capital of Plateau Department and a key center for palm oil production."
    },
    facts: {
      de: ["Zentrum der Ölpalm-Plantagen.", "An der Grenze zu Nigeria gelegen.", "Wachsendes Handelszentrum."],
      hu: ["Az olajpálma-ültetvények központja.", "Nigéria határán fekszik.", "Növekvő kereskedelmi központ."],
      ro: ["Centrul plantațiilor de palmieri de ulei.", "Situat la granița cu Nigeria.", "Centru comercial în creștere."],
      en: ["Center of oil palm plantations.", "Located near the Nigeria border.", "Growing commercial hub."]
    }
  },
  {
    id: "sakete-cities-v2",
    type: "city",
    parent: "BJ-PL",
    coords: [2.6583, 6.7361],
    name: { de: "Sakété", hu: "Sakété", ro: "Sakété", en: "Sakété" },
    description: {
      de: "Sakété ist eine Stadt im Departement Plateau, bekannt für seine Landwirtschaft und den Handel mit Nigeria.",
      hu: "Sakété egy város Plateau megyében, mezőgazdaságáról és a Nigériával folytatott kereskedelméről ismert.",
      ro: "Sakété este un oraș din departamentul Plateau, cunoscut pentru agricultură și comerțul cu Nigeria.",
      en: "Sakété is a town in Plateau Department, known for its agriculture and trade with Nigeria."
    },
    facts: {
      de: ["Bedeutender Marktort.", "Starke Yoruba-Einflüsse.", "Zentrum des regionalen Handels."],
      hu: ["Jelentős piaci helyszín.", "Erős joruba hatások.", "A regionális kereskedelem központja."],
      ro: ["Loc de piață important.", "Influențe Yoruba puternice.", "Centrul comerțului regional."],
      en: ["Significant market town.", "Strong Yoruba influences.", "Center of regional trade."]
    }
  },
  {
    id: "ketou-cities-v2",
    type: "city",
    parent: "BJ-PL",
    coords: [2.5997, 7.3631],
    name: { de: "Ketou", hu: "Ketou", ro: "Ketou", en: "Ketou" },
    description: {
      de: "Ketou ist eine der ältesten Städte Benins und ein historisches Zentrum der Yoruba-Kultur.",
      hu: "Ketou Benin egyik legrégebbi városa és a joruba kultúra történelmi központja.",
      ro: "Ketou este unul dintre cele mai vechi orașe din Benin și un centru istoric al culturii Yoruba.",
      en: "Ketou is one of the oldest cities in Benin and a historic center of Yoruba culture."
    },
    facts: {
      de: ["Bekannt für die 'Akaba Idenan' (Magische Pforte).", "Sitz eines traditionellen Königreichs.", "Bedeutendes kulturelles Erbe."],
      hu: ["Az 'Akaba Idenan' (mágikus kapu) néven ismert.", "Egy hagyományos királyság székhelye.", "Jelentős kulturális örökség."],
      ro: ["Cunoscut pentru 'Akaba Idenan' (Poarta Magică).", "Sediul unui regat tradițional.", "Importantă moștenire culturală."],
      en: ["Known for the 'Akaba Idenan' (Magic Gate).", "Seat of a traditional kingdom.", "Significant cultural heritage."]
    }
  },
  {
    id: "allada-cities-v2",
    type: "city",
    parent: "BJ-AT",
    coords: [2.1514, 6.6625],
    name: { de: "Allada", hu: "Allada", ro: "Allada", en: "Allada" },
    description: {
      de: "Allada ist das historische Zentrum des gleichnamigen Königreichs und heute die Hauptstadt des Departements Atlantique.",
      hu: "Allada az azonos nevű királyság történelmi központja, ma pedig Atlantique megye székhelye.",
      ro: "Allada este centrul istoric al regatului cu același nume și astăzi capitala departamentului Atlantique.",
      en: "Allada is the historic center of the kingdom of the same name and today the capital of Atlantique Department."
    },
    facts: {
      de: ["Geburtsort von Toussaint Louverture.", "Historische Bedeutung für Dahomey.", "Bedeutendes Zentrum für Ananas."],
      hu: ["Toussaint Louverture szülőhelye.", "Történelmi jelentőség Dahomey számára.", "Jelentős ananász-központ."],
      ro: ["Locul de naștere al lui Toussaint Louverture.", "Semnificație istorică pentru Dahomey.", "Centru important pentru ananas."],
      en: ["Birthplace of Toussaint Louverture.", "Historical importance for Dahomey.", "Major center for pineapple production."]
    }
  },
  {
    id: "aplahoue-cities-v2",
    type: "city",
    parent: "BJ-KO",
    coords: [1.6833, 6.9333],
    name: { de: "Aplahoué", hu: "Aplahoué", ro: "Aplahoué", en: "Aplahoué" },
    description: {
      de: "Aplahoué ist das Verwaltungszentrum des Departements Kouffo und ein wichtiger Marktort im Südwesten.",
      hu: "Aplahoué Kouffo megye közigazgatási központja és egy fontos piaci helyszín délnyugaton.",
      ro: "Aplahoué este centrul administrativ al departamentului Kouffo și un loc de piață important în sud-vest.",
      en: "Aplahoué is the administrative center of Kouffo Department and a key market town in the southwest."
    },
    facts: {
      de: ["Regionales Verwaltungszentrum.", "Bekannt für seine landwirtschaftlichen Produkte.", "Grenzverkehr mit Togo."],
      hu: ["Regionális közigazgatási központ.", "Mezőgazdasági termékeiről ismert.", "Határforgalom Togóval."],
      ro: ["Centru administrativ regional.", "Cunoscut pentru produsele sale agricole.", "Trafic de frontieră cu Togo."],
      en: ["Regional administrative center.", "Known for its agricultural products.", "Border trade with Togo."]
    }
  },
  {
    id: "kouande-cities-v2",
    type: "city",
    parent: "BJ-AK",
    coords: [1.6833, 10.3333],
    name: { de: "Kouandé", hu: "Kouandé", ro: "Kouandé", en: "Kouandé" },
    description: {
      de: "Kouandé ist eine historische Stadt im Departement Atakora, bekannt für ihre traditionelle Architektur und Geschichte.",
      hu: "Kouandé egy történelmi város Atakora megyében, hagyományos építészetéről és történelméről ismert.",
      ro: "Kouandé este un oraș istoric din departamentul Atakora, cunoscut pentru arhitectura și istoria sa tradițională.",
      en: "Kouandé is a historic town in Atakora Department, known for its traditional architecture and history."
    },
    facts: {
      de: ["Sitz eines alten Königreichs.", "Hügelige Umgebung.", "Zentrum der lokalen Traditionen."],
      hu: ["Egy régi királyság székhelye.", "Dombos környezet.", "A helyi hagyományok központja."],
      ro: ["Sediul unui vechi regat.", "Împrejurimi deluroase.", "Centrul tradițiilor locale."],
      en: ["Seat of an ancient kingdom.", "Hilly surroundings.", "Center of local traditions."]
    }
  },
  {
    id: "copargo-cities-v2",
    type: "city",
    parent: "BJ-DO",
    coords: [1.55, 9.8333],
    name: { de: "Copargo", hu: "Copargo", ro: "Copargo", en: "Copargo" },
    description: {
      de: "Copargo ist eine Stadt im Departement Donga, die für ihre lebhaften Märkte und landwirtschaftliche Produktion bekannt ist.",
      hu: "Copargo egy város Donga megyében, amely élénk piacairól és mezőgazdasági termeléséről ismert.",
      ro: "Copargo este un oraș din departamentul Donga, cunoscut pentru piețele sale vibrante și producția agricolă.",
      en: "Copargo is a town in Donga Department, known for its lively markets and agricultural production."
    },
    facts: {
      de: ["Wichtiger Marktort.", "Zentrum des regionalen Handels.", "Vielfältige ethnische Bevölkerung."],
      hu: ["Fontos piaci helyszín.", "A regionális kereskedelem központja.", "Változatos etnikai lakosság."],
      ro: ["Loc de piață important.", "Centrul comerțului regional.", "Populație etnică diversă."],
      en: ["Major market town.", "Center of regional trade.", "Diverse ethnic population."]
    }
  },
  {
    id: "karimama-cities-v2",
    type: "city",
    parent: "BJ-AL",
    coords: [3.1833, 12.0667],
    name: { de: "Karimama", hu: "Karimama", ro: "Karimama", en: "Karimama" },
    description: {
      de: "Karimama ist die nördlichste Stadt Benins, direkt am Fluss Niger an der Grenze zu Niger gelegen.",
      hu: "Karimama Benin legészakibb városa, közvetlenül a Niger folyó partján, a nigeri határnál.",
      ro: "Karimama este cel mai nordic oraș al Beninului, situat direct pe fluviul Niger, la granița cu Niger.",
      en: "Karimama is the northernmost town in Benin, situated directly on the Niger River at the border with Niger."
    },
    facts: {
      de: ["Nördlichster Punkt des Landes.", "Bedeutend für den Flusshandel.", "Nähe zum W-Nationalpark."],
      hu: ["Az ország legészakibb pontja.", "Jelentős a folyami kereskedelemben.", "A W Nemzeti Park közelében."],
      ro: ["Cel mai nordic punct al țării.", "Semnificativ pentru comerțul fluvial.", "Aproape de Parcul Național W."],
      en: ["Northernmost point of the country.", "Significant for river trade.", "Near the W National Park."]
    }
  },
  {
    id: "cobly-cities-v2",
    type: "city",
    parent: "BJ-AK",
    coords: [1.1167, 10.75],
    name: { de: "Cobly", hu: "Cobly", ro: "Cobly", en: "Cobly" },
    description: {
      de: "Cobly ist ein ländliches Zentrum im Departement Atakora, nahe der Grenze zu Togo.",
      hu: "Cobly egy vidéki központ Atakora megyében, a togói határ közelében.",
      ro: "Cobly este un centru rural din departamentul Atakora, lângă granița cu Togo.",
      en: "Cobly is a rural center in Atakora Department, located near the Togo border."
    },
    facts: {
      de: ["Bedeutend für den Grenzhandel.", "Landwirtschaftlich geprägt.", "Zentrum der lokalen Gemeinschaft."],
      hu: ["Jelentős a határmenti kereskedelemben.", "Mezőgazdasági jellegű.", "A helyi közösség központja."],
      ro: ["Important pentru comerțul de frontieră.", "Caracter agricol.", "Centrul comunității locale."],
      en: ["Significant for border trade.", "Agricultural character.", "Center of the local community."]
    }
  },
  {
    id: "gogounou-cities-v2",
    type: "city",
    parent: "BJ-AL",
    coords: [2.8333, 10.8333],
    name: { de: "Gogounou", hu: "Gogounou", ro: "Gogounou", en: "Gogounou" },
    description: {
      de: "Gogounou ist eine landwirtschaftlich geprägte Stadt im Departement Alibori, bekannt für Viehzucht und Ackerbau.",
      hu: "Gogounou egy mezőgazdasági jellegű város Alibori megyében, állattenyésztéséről és növénytermesztéséről ismert.",
      ro: "Gogounou este un oraș cu caracter agricol din departamentul Alibori, cunoscut pentru creșterea animalelor și agricultură.",
      en: "Gogounou is an agricultural town in Alibori Department, known for livestock and farming."
    },
    facts: {
      de: ["Zentrum des Viehhandels.", "Wichtiger Markt an der Nordachse.", "Vielfältige Kulturen."],
      hu: ["Az állatkereskedelem központja.", "Fontos piac az északi tengelyen.", "Változatos kultúrák."],
      ro: ["Centrul comerțului cu animale.", "Piață importantă pe axa de nord.", "Culturi diverse."],
      en: ["Center of livestock trade.", "Important market on the north axis.", "Diverse cultures."]
    }
  },
  {
    id: "segbana-cities-v2",
    type: "city",
    parent: "BJ-AL",
    coords: [3.7, 10.9333],
    name: { de: "Ségbana", hu: "Ségbana", ro: "Ségbana", en: "Ségbana" },
    description: {
      de: "Ségbana ist eine Grenzstadt im Nordosten Benins, die eine wichtige Rolle im Handel mit Nigeria spielt.",
      hu: "Ségbana egy határváros Benin északkeleti részén, amely fontos szerepet játszik a Nigériával folytatott kereskedelemben.",
      ro: "Ségbana este un oraș de frontieră în nord-estul Beninului, care joacă un rol important în comerțul cu Nigeria.",
      en: "Ségbana is a border town in northeastern Benin that plays a key role in trade with Nigeria."
    },
    facts: {
      de: ["Grenzposten zu Nigeria.", "Wichtiger Handelsplatz.", "Abgelegene, aber strategische Lage."],
      hu: ["Határállomás Nigéria felé.", "Fontos kereskedelmi helyszín.", "Távoli, de stratégiai elhelyezkedés."],
      ro: ["Punct de frontieră cu Nigeria.", "Loc de piață important.", "Locație izolată, dar strategică."],
      en: ["Border post with Nigeria.", "Important trading post.", "Remote but strategic location."]
    }
  },
  {
    id: "kalale-cities-v2",
    type: "city",
    parent: "BJ-BO",
    coords: [3.3833, 10.3333],
    name: { de: "Kalalé", hu: "Kalalé", ro: "Kalalé", en: "Kalalé" },
    description: {
      de: "Kalalé ist ein ländliches Zentrum im Departement Borgou, bekannt für seine weiten landwirtschaftlichen Flächen.",
      hu: "Kalalé egy vidéki központ Borgou megyében, kiterjedt mezőgazdasági területeiről ismert.",
      ro: "Kalalé este un centru rural din departamentul Borgou, cunoscut pentru zonele sale agricole vaste.",
      en: "Kalalé is a rural center in Borgou Department, known for its vast agricultural lands."
    },
    facts: {
      de: ["Bedeutend für den Getreideanbau.", "Zentrum der lokalen Bauernschaft.", "An der Grenze zu Nigeria."],
      hu: ["Jelentős a gabonatermesztésben.", "A helyi parasztság központja.", "Nigéria határán."],
      ro: ["Important pentru cultivarea cerealelor.", "Centrul agricultorilor locali.", "La granița cu Nigeria."],
      en: ["Significant for cereal cultivation.", "Center of local farming.", "Near the border with Nigeria."]
    }
  },
  {
    id: "sinende-cities-v2",
    type: "city",
    parent: "BJ-BO",
    coords: [2.3833, 10.35],
    name: { de: "Sinendé", hu: "Sinendé", ro: "Sinendé", en: "Sinendé" },
    description: {
      de: "Sinendé ist eine Stadt im Departement Borgou, die für ihre Baumwoll- und Getreideproduktion bekannt ist.",
      hu: "Sinendé egy város Borgou megyében, amely gyapot- és gabonatermeléséről ismert.",
      ro: "Sinendé este un oraș din departamentul Borgou, cunoscut pentru producția sa de bumbac și cereale.",
      en: "Sinendé is a town in Borgou Department, known for its cotton and cereal production."
    },
    facts: {
      de: ["Landwirtschaftliches Zentrum.", "Wichtiger Marktort.", "Heimat verschiedener Volksgruppen."],
      hu: ["Mezőgazdasági központ.", "Fontos piaci helyszín.", "Különböző népcsoportok hazája."],
      ro: ["Centru agricol.", "Loc de piață important.", "Patria diferitelor grupuri etnice."],
      en: ["Agricultural center.", "Important market town.", "Home to various ethnic groups."]
    }
  },
  {
    id: "ndali-cities-v2",
    type: "city",
    parent: "BJ-BO",
    coords: [2.7167, 9.8667],
    name: { de: "N'Dali", hu: "N'Dali", ro: "N'Dali", en: "N'Dali" },
    description: {
      de: "N'Dali ist ein strategischer Knotenpunkt im Departement Borgou, wo sich wichtige Straßen kreuzen.",
      hu: "N'Dali egy stratégiai csomópont Borgou megyében, ahol fontos utak keresztezik egymást.",
      ro: "N'Dali este un nod strategic în departamentul Borgou, unde se intersectează drumuri importante.",
      en: "N'Dali is a strategic crossroads in Borgou Department, where major roads intersect."
    },
    facts: {
      de: ["Wichtiger Verkehrsknotenpunkt.", "Zentrum des lokalen Handels.", "Tor zum Norden."],
      hu: ["Fontos közlekedési csomópont.", "A helyi kereskedelem központja.", "Kapu az észak felé."],
      ro: ["Nod de transport important.", "Centrul comerțului local.", "Poartă către nord."],
      en: ["Key transport junction.", "Center of local trade.", "Gateway to the north."]
    }
  },
  {
    id: "pehunco-cities-v2",
    type: "city",
    parent: "BJ-AK",
    coords: [2.1, 10.2333],
    name: { de: "Péhunco", hu: "Péhunco", ro: "Péhunco", en: "Péhunco" },
    description: {
      de: "Péhunco ist eine Stadt im Departement Atakora, die vor allem für ihren Baumwollanbau bekannt ist.",
      hu: "Péhunco egy város Atakora megyében, amely elsősorban gyapottermesztéséről ismert.",
      ro: "Péhunco este un oraș din departamentul Atakora, cunoscut în special pentru cultivarea bumbacului.",
      en: "Péhunco is a town in Atakora Department, primarily known for its cotton cultivation."
    },
    facts: {
      de: ["Wichtiges Baumwollzentrum.", "Landwirtschaftlich geprägt.", "Regionaler Marktort."],
      hu: ["Fontos gyapotközpont.", "Mezőgazdasági jellegű.", "Regionális piaci helyszín."],
      ro: ["Centru important al bumbacului.", "Caracter agricol.", "Loc de piață regional."],
      en: ["Important cotton center.", "Agricultural character.", "Regional market town."]
    }
  },
  {
    id: "toucountouna-cities-v2",
    type: "city",
    parent: "BJ-AK",
    coords: [1.3167, 10.5167],
    name: { de: "Toucountouna", hu: "Toucountouna", ro: "Toucountouna", en: "Toucountouna" },
    description: {
      de: "Toucountouna ist eine ländliche Stadt im Departement Atakora, umgeben von einer hügeligen Landschaft.",
      hu: "Toucountouna egy vidéki város Atakora megyében, dombos tájjal körülvéve.",
      ro: "Toucountouna este un oraș rural din departamentul Atakora, înconjurat de un peisaj deluros.",
      en: "Toucountouna is a rural town in Atakora Department, surrounded by a hilly landscape."
    },
    facts: {
      de: ["Malerische Umgebung.", "Traditionelle Lebensweise.", "Zentrum der lokalen Landwirtschaft."],
      hu: ["Festői környezet.", "Hagyományos életmód.", "A helyi mezőgazdaság központja."],
      ro: ["Împrejurimi pitorești.", "Mod de viață tradițional.", "Centrul agriculturii locale."],
      en: ["Scenic surroundings.", "Traditional way of life.", "Center of local agriculture."]
    }
  },
  {
    id: "ouake-cities-v2",
    type: "city",
    parent: "BJ-DO",
    coords: [1.3833, 9.6667],
    name: { de: "Ouaké", hu: "Ouake", ro: "Ouake", en: "Ouake" },
    description: {
      de: "Ouaké liegt im Departement Donga, direkt an der Grenze zu Togo, und ist ein wichtiger Grenzposten.",
      hu: "Ouaké Donga megyében fekszik, közvetlenül a togói határnál, és fontos határállomás.",
      ro: "Ouaké se află în departamentul Donga, direct la granița cu Togo, și este un punct de frontieră important.",
      en: "Ouaké is located in Donga Department, right on the Togo border, serving as an important border post."
    },
    facts: {
      de: ["Grenzstadt zu Togo.", "Bedeutend für den Transithandel.", "Multikulturelle Gemeinschaft."],
      hu: ["Határváros Togo felé.", "Jelentős a tranzitkereskedelemben.", "Multikulturális közösség."],
      ro: ["Oraș de frontieră cu Togo.", "Important pentru comerțul de tranzit.", "Comunitate multiculturală."],
      en: ["Border town with Togo.", "Significant for transit trade.", "Multicultural community."]
    }
  },
  {
    id: "djidja-cities-v2",
    type: "city",
    parent: "BJ-ZO",
    coords: [1.9333, 7.35],
    name: { de: "Djidja", hu: "Djidja", ro: "Djidja", en: "Djidja" },
    description: {
      de: "Djidja ist eine landwirtschaftlich geprägte Stadt im Departement Zou, bekannt für die Produktion von Erdnüssen.",
      hu: "Djidja egy mezőgazdasági jellegű város Zou megyében, mogyorótermeléséről ismert.",
      ro: "Djidja este un oraș cu caracter agricol din departamentul Zou, cunoscut pentru producția de arahide.",
      en: "Djidja is an agricultural town in Zou Department, known for peanut production."
    },
    facts: {
      de: ["Zentrum des Erdnussanbaus.", "Große landwirtschaftliche Fläche.", "Marktplatz für die Region."],
      hu: ["A mogyorótermesztés központja.", "Nagy mezőgazdasági terület.", "Piachely a régió számára."],
      ro: ["Centrul cultivării arahidelor.", "Zonă agricolă mare.", "Loc de piață pentru regiune."],
      en: ["Center of peanut cultivation.", "Large agricultural area.", "Marketplace for the region."]
    }
  },
  {
    id: "agbangnizoun-cities-v2",
    type: "city",
    parent: "BJ-ZO",
    coords: [1.9667, 7.0833],
    name: { de: "Agbangnizoun", hu: "Agbangnizoun", ro: "Agbangnizoun", en: "Agbangnizoun" },
    description: {
      de: "Agbangnizoun liegt in der Nähe der historischen Stadt Abomey und teilt deren reiche kulturelle Tradition.",
      hu: "Agbangnizoun a történelmi Abomey város közelében fekszik, és osztozik annak gazdag kulturális hagyományaiban.",
      ro: "Agbangnizoun se află lângă orașul istoric Abomey și împărtășește bogata sa tradiție culturală.",
      en: "Agbangnizoun is located near the historic city of Abomey and shares its rich cultural tradition."
    },
    facts: {
      de: ["Kulturelle Verbindung zu Abomey.", "Bekannt für traditionelle Tänze.", "Landwirtschaftliches Hinterland."],
      hu: ["Kulturális kapcsolat Abomey-vel.", "Hagyományos táncairól ismert.", "Mezőgazdasági hátország."],
      ro: ["Legătură culturală cu Abomey.", "Cunoscut pentru dansurile tradiționale.", "Hinterland agricol."],
      en: ["Cultural connection to Abomey.", "Known for traditional dances.", "Agricultural hinterland."]
    }
  },
  {
    id: "za-kpota-cities-v2",
    type: "city",
    parent: "BJ-ZO",
    coords: [2.2167, 7.2333],
    name: { de: "Za-Kpota", hu: "Za-Kpota", ro: "Za-Kpota", en: "Za-Kpota" },
    description: {
      de: "Za-Kpota ist eine wachsende Stadt im Departement Zou, die ein wichtiges Zentrum für den lokalen Handel ist.",
      hu: "Za-Kpota egy növekvő város Zou megyében, amely a helyi kereskedelem fontos központja.",
      ro: "Za-Kpota este un oraș în creștere din departamentul Zou, fiind un centru important pentru comerțul local.",
      en: "Za-Kpota is a growing town in Zou Department, serving as an important hub for local trade."
    },
    facts: {
      de: ["Zentrum des regionalen Marktes.", "Landwirtschaftlicher Umschlagplatz.", "Wachsende Bevölkerung."],
      hu: ["Regionális piaci központ.", "Mezőgazdasági átrakóhely.", "Növekvő lakosság."],
      ro: ["Centru al pieței regionale.", "Punct de transbordare agricol.", "Populație în creștere."],
      en: ["Center of the regional market.", "Agricultural transshipment point.", "Growing population."]
    }
  },
  {
    id: "zogbodomey-cities-v2",
    type: "city",
    parent: "BJ-ZO",
    coords: [2.1, 7.0833],
    name: { de: "Zogbodomey", hu: "Zogbodomey", ro: "Zogbodomey", en: "Zogbodomey" },
    description: {
      de: "Zogbodomey ist eine Handelsstadt im Departement Zou, gelegen an der Hauptverbindung zwischen Cotonou und dem Norden.",
      hu: "Zogbodomey egy kereskedőváros Zou megyében, a Cotonou és észak közötti főútvonal mentén.",
      ro: "Zogbodomey este un oraș comercial din departamentul Zou, situat pe legătura principală dintre Cotonou și nord.",
      en: "Zogbodomey is a trading town in Zou Department, located on the main link between Cotonou and the north."
    },
    facts: {
      de: ["Wichtiger Transitort.", "Bekannt für seine Märkte.", "Zentrum der lokalen Verwaltung."],
      hu: ["Fontos tranzithelyszín.", "Piacairól ismert.", "A helyi közigazgatás központja."],
      ro: ["Punct de tranzit important.", "Cunoscut pentru piețele sale.", "Centrul administrației locale."],
      en: ["Key transit point.", "Known for its markets.", "Center of local administration."]
    }
  },
  {
    id: "cove-cities-v2",
    type: "city",
    parent: "BJ-ZO",
    coords: [2.3333, 7.2167],
    name: { de: "Covè", hu: "Covè", ro: "Covè", en: "Covè" },
    description: {
      de: "Covè ist eine Stadt im Departement Zou, bekannt für ihre fruchtbaren Böden und landwirtschaftliche Vielfalt.",
      hu: "Covè egy város Zou megyében, termékeny talajáról és mezőgazdasági sokszínűségéről ismert.",
      ro: "Covè este un oraș din departamentul Zou, cunoscut pentru solurile sale fertile și diversitatea agricolă.",
      en: "Covè is a town in Zou Department, known for its fertile soils and agricultural diversity."
    },
    facts: {
      de: ["Zentrum der Reisproduktion.", "Wichtiger regionaler Markt.", "Gelegen am Fluss Zou."],
      hu: ["A rizstermelés központja.", "Fontos regionális piac.", "A Zou-folyó partján."],
      ro: ["Centrul producției de orez.", "Piață regională importantă.", "Situat pe râul Zou."],
      en: ["Center of rice production.", "Important regional market.", "Located on the Zou River."]
    }
  },
  {
    id: "dassa-zoume-cities-v2",
    type: "city",
    parent: "BJ-CO",
    coords: [2.1833, 7.75],
    name: { de: "Dassa-Zoumé", hu: "Dassa-Zoumé", ro: "Dassa-Zoumé", en: "Dassa-Zoumé" },
    description: {
      de: "Dassa-Zoumé ist bekannt als Stadt der 41 Hügel und ein bedeutender Wallfahrtsort für Katholiken.",
      hu: "Dassa-Zoumé a 41 domb városaként ismert, és a katolikusok jelentős zarándokhelye.",
      ro: "Dassa-Zoumé este cunoscut drept orașul celor 41 de dealuri și este un loc de pelerinaj important pentru catolici.",
      en: "Dassa-Zoumé is known as the city of 41 hills and is a major pilgrimage site for Catholics."
    },
    facts: {
      de: ["Berühmt für die Grotte 'Notre-Dame d'Arigbo'.", "Umgeben von markanten Hügeln.", "Wichtiger Verkehrsknotenpunkt."],
      hu: ["A 'Notre-Dame d'Arigbo' barlangról híres.", "Jellegzetes dombok veszik körül.", "Fontos közlekedési csomópont."],
      ro: ["Faimos pentru grota 'Notre-Dame d'Arigbo'.", "Înconjurat de dealuri distinctive.", "Nod de transport important."],
      en: ["Famous for the 'Notre-Dame d'Arigbo' grotto.", "Surrounded by distinctive hills.", "Key transportation hub."]
    }
  },
  {
    id: "glazoue-cities-v2",
    type: "city",
    parent: "BJ-CO",
    coords: [2.24, 7.973],
    name: { de: "Glazoué", hu: "Glazoué", ro: "Glazoué", en: "Glazoué" },
    description: {
      de: "Glazoué ist ein bedeutender Marktort im Departement Collines, besonders bekannt für den Handel mit Getreide.",
      hu: "Glazoué jelentős piaci helyszín Collines megyében, különösen a gabonakereskedelemről ismert.",
      ro: "Glazoué este un loc de piață semnificativ în departamentul Collines, cunoscut în special pentru comerțul cu cereale.",
      en: "Glazoué is a significant market town in Collines Department, especially known for trade in cereals."
    },
    facts: {
      de: ["Einer der größten Getreidemärkte Benins.", "Wichtiger Haltepunkt an der Nordroute.", "Zentrum der landwirtschaftlichen Vermarktung."],
      hu: ["Benin egyik legnagyobb gabonapiaca.", "Fontos megálló az északi útvonalon.", "A mezőgazdasági értékesítés központja."],
      ro: ["Una dintre cele mai mari piețe de cereale din Benin.", "Punct de oprire important pe ruta de nord.", "Centrul marketingului agricol."],
      en: ["One of the largest grain markets in Benin.", "Major stop on the north route.", "Center of agricultural marketing."]
    }
  },
  {
    id: "bante-cities-v2",
    type: "city",
    parent: "BJ-CO",
    coords: [1.8833, 8.4167],
    name: { de: "Bantè", hu: "Bantè", ro: "Bantè", en: "Bantè" },
    description: {
      de: "Bantè ist ein ländliches Zentrum im Departement Collines, bekannt für seine kulturellen Traditionen und Landwirtschaft.",
      hu: "Bantè egy vidéki központ Collines megyében, kulturális hagyományairól és mezőgazdaságáról ismert.",
      ro: "Bantè este un centru rural din departamentul Collines, cunoscut pentru tradițiile sale culturale și agricultură.",
      en: "Bantè is a rural center in Collines Department, known for its cultural traditions and agriculture."
    },
    facts: {
      de: ["Zentrum der regionalen Bauernschaft.", "Bekannt für traditionelle Feste.", "Ruhige, ländliche Atmosphäre."],
      hu: ["A regionális parasztság központja.", "Hagyományos fesztiváljairól ismert.", "Nyugodt, vidéki légkör."],
      ro: ["Centrul agricultorilor regionali.", "Cunoscut pentru festivalurile tradiționale.", "Atmosferă rurală liniștită."],
      en: ["Center of regional farming.", "Known for traditional festivals.", "Peaceful rural atmosphere."]
    }
  },
  {
    id: "ouesse-cities-v2",
    type: "city",
    parent: "BJ-CO",
    coords: [2.4333, 8.4833],
    name: { de: "Ouèssè", hu: "Ouèssè", ro: "Ouèssè", en: "Ouèssè" },
    description: {
      de: "Ouèssè ist eine landwirtschaftlich geprägte Stadt im Norden des Departements Collines.",
      hu: "Ouèssè egy mezőgazdasági jellegű város Collines megye északi részén.",
      ro: "Ouèssè este un oraș cu caracter agricol din nordul departamentului Collines.",
      en: "Ouèssè is an agricultural town in the north of Collines Department."
    },
    facts: {
      de: ["Bedeutend für den Anbau von Jams.", "Wichtiger Marktort.", "Gute Anbindung an die Nordroute."],
      hu: ["Jelentős a jamgyökér termesztésében.", "Fontos piaci helyszín.", "Jó összeköttetés az északi útvonallal."],
      ro: ["Important pentru cultivarea iamelor.", "Loc de piață important.", "Bună conexiune la ruta de nord."],
      en: ["Significant for yam cultivation.", "Important market town.", "Good connection to the north route."]
    }
  },
  {
    id: "klouekanme-cities-v2",
    type: "city",
    parent: "BJ-KO",
    coords: [1.85, 6.9833],
    name: { de: "Klouékanmè", hu: "Klouékanmè", ro: "Klouékanmè", en: "Klouékanmè" },
    description: {
      de: "Klouékanmè ist ein ländliches Handelszentrum im Departement Kouffo, bekannt für seine lokalen Märkte.",
      hu: "Klouékanmè egy vidéki kereskedelmi központ Kouffo megyében, helyi piacairól ismert.",
      ro: "Klouékanmè este un centru comercial rural din departamentul Kouffo, cunoscut pentru piețele sale locale.",
      en: "Klouékanmè is a rural trading center in Kouffo Department, known for its local markets."
    },
    facts: {
      de: ["Zentrum des lokalen Handels.", "Landwirtschaftlich orientiert.", "Regionale Bedeutung."],
      hu: ["A helyi kereskedelem központja.", "Mezőgazdasági orientáció.", "Regionális jelentőség."],
      ro: ["Centrul comerțului local.", "Orientat spre agricultură.", "Semnificație regională."],
      en: ["Center of local trade.", "Agricultural focus.", "Regional importance."]
    }
  }
];
