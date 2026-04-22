import type { POI } from "./poi";

export const andorraCountry: POI = {
  id: "country-andorra",
  type: "country",
  parent: "europe",
  coords: [1.5218, 42.5063],
  name: {
    de: "Andorra",
    hu: "Andorra",
    ro: "Andorra",
    en: "Andorra"
  },
  description: {
    de: "Andorra ist ein kleiner, malerischer Zwergstaat in den Pyrenäen zwischen Spanien und Frankreich, bekannt für seine Berge und Steuervorteile.",
    hu: "Andorra egy kis, festői törpeállam a Pireneusokban Spanyolország és Franciaország között, amely hegyeiről és adókedvezményeiről ismert.",
    ro: "Andorra este un mic și pitoresc microstat din Pirinei, între Spania și Franța, cunoscut pentru munții săi și facilitățile fiscale.",
    en: "Andorra is a small, picturesque microstate in the Pyrenees between Spain and France, known for its mountains and tax advantages."
  },
  descriptionAdvanced: {
    de: "Das Fürstentum Andorra liegt hoch in den Pyrenäen und lockt mit erstklassigen Skigebieten wie Grandvalira und Vallnord sowie einer atemberaubenden Bergwelt. Neben dem Tourismus ist das Land für seinen Status als Steuerparadies und seine zahlreichen Einkaufsmöglichkeiten bekannt. Politisch ist es ein Co-Fürstentum, regiert vom Bischof von Urgell und dem französischen Staatspräsidenten.",
    hu: "Az Andorrai Hercegség magasan a Pireneusokban fekszik, kiváló síterepekkel (Grandvalira, Vallnord) és lélegzetelállító hegyvidékkel csábítja a látogatókat. A turizmus mellett az ország adóparadicsomi státuszáról és bevásárlási lehetőségeiről is ismert. Politikailag egy társhercegség, melynek államfői az urgelli püspök és a francia köztársasági elnök.",
    ro: "Principatul Andorra este situat la mare altitudine în Pirinei și atrage turiști prin stațiunile sale de schi de primă clasă, precum Grandvalira și Vallnord, și peisajul montan uluitor. Pe lângă turism, țara este cunoscută pentru statutul său de paradis fiscal și numeroasele opțiuni de cumpărături. Politic, este un coprincipat condus de Episcopul de Urgell și de Președintele Franței.",
    en: "The Principality of Andorra is located high in the Pyrenees and attracts visitors with world-class ski resorts like Grandvalira and Vallnord, along with breathtaking mountain scenery. Besides tourism, the country is known for its status as a tax haven and its numerous shopping opportunities. Politically, it is a co-principality governed by the Bishop of Urgell and the French President."
  },
  facts: {
    de: [
      "Andorra hat keine eigene Armee.",
      "Die Amtssprache ist Katalanisch.",
      "Andorra gehört nicht zur EU, verwendet aber den Euro.",
      "Die Lebenserwartung in Andorra ist eine der höchsten der Welt.",
      "Andorra ist das sechstkleinste Land Europas."
    ],
    hu: [
      "Andorrának nincs saját hadserege.",
      "A hivatalos nyelv a katalán.",
      "Andorra nem tagja az EU-nak, de az eurót használja.",
      "A várható élettartam Andorrában az egyik legmagasabb a világon.",
      "Andorra Európa hatodik legkisebb országa."
    ],
    ro: [
      "Andorra nu are armată proprie.",
      "Limba oficială este catalana.",
      "Andorra nu este membră a UE, dar folosește moneda Euro.",
      "Speranța de viață în Andorra este una dintre cele mai mari din lume.",
      "Andorra este a șasea cea mai mică țară din Europa."
    ],
    en: [
      "Andorra does not have its own army.",
      "The official language is Catalan.",
      "Andorra is not in the EU but uses the Euro.",
      "Life expectancy in Andorra is one of the highest in the world.",
      "Andorra is the sixth smallest country in Europe."
    ]
  },
  image: "/geo-images/andorra/country-andorra.webp"
};

export const andorraCities: POI[] = [
  {
    id: "city-andorra-la-vella",
    type: "city",
    parent: "country-andorra",
    coords: [1.5218, 42.5063],
    name: { de: "Andorra la Vella", hu: "Andorra la Vella", ro: "Andorra la Vella", en: "Andorra la Vella" },
    description: {
      de: "Die höchstgelegene Hauptstadt Europas.",
      hu: "Európa legmagasabban fekvő fővárosa.",
      ro: "Capitala situată la cea mai mare altitudine din Europa.",
      en: "The highest capital city in Europe."
    }
  },
  {
    id: "city-escaldes-engordany",
    type: "city",
    parent: "country-andorra",
    coords: [1.5341, 42.5083],
    name: { de: "Escaldes-Engordany", hu: "Escaldes-Engordany", ro: "Escaldes-Engordany", en: "Escaldes-Engordany" },
    description: {
      de: "Bekannt für heiße Quellen und das Caldea Spa.",
      hu: "Hőforrásairól és a Caldea fürdőről ismert.",
      ro: "Cunoscută pentru izvoarele termale și complexul Caldea.",
      en: "Known for hot springs and the Caldea Spa."
    }
  },
  {
    id: "city-encamp",
    type: "city",
    parent: "country-andorra",
    coords: [1.5801, 42.5360],
    name: { de: "Encamp", hu: "Encamp", ro: "Encamp", en: "Encamp" },
    description: {
      de: "Tor zum Skigebiet Grandvalira per Funicamp.",
      hu: "Kapu a Grandvalira síterephez a Funicamp révén.",
      ro: "Poartă către zona de schi Grandvalira prin Funicamp.",
      en: "Gateway to the Grandvalira ski resort via Funicamp."
    }
  },
  {
    id: "city-la-massana",
    type: "city",
    parent: "country-andorra",
    coords: [1.5149, 42.5449],
    name: { de: "La Massana", hu: "La Massana", ro: "La Massana", en: "La Massana" },
    description: {
      de: "Basis für das Vallnord Skigebiet.",
      hu: "A Vallnord síterep bázisa.",
      ro: "Baza pentru stațiunea de schi Vallnord.",
      en: "Base for the Vallnord ski resort."
    }
  },
  {
    id: "city-ordino",
    type: "city",
    parent: "country-andorra",
    coords: [1.5332, 42.5562],
    name: { de: "Ordino", hu: "Ordino", ro: "Ordino", en: "Ordino" },
    description: {
      de: "Historisches Dorf im Norden Andorras.",
      hu: "Történelmi falu Észak-Andorrában.",
      ro: "Sat istoric din nordul Andorrei.",
      en: "Historic village in northern Andorra."
    }
  },
  {
    id: "city-canillo",
    type: "city",
    parent: "country-andorra",
    coords: [1.5976, 42.5671],
    name: { de: "Canillo", hu: "Canillo", ro: "Canillo", en: "Canillo" },
    description: {
      de: "Die größte Gemeinde Andorras.",
      hu: "Andorra legnagyobb kiterjedésű közössége.",
      ro: "Cea mai mare parohie din Andorra.",
      en: "The largest parish in Andorra."
    }
  },
  {
    id: "city-sant-julia",
    type: "city",
    parent: "country-andorra",
    coords: [1.4913, 42.4637],
    name: { de: "Sant Julià de Lòria", hu: "Sant Julià de Lòria", ro: "Sant Julià de Lòria", en: "Sant Julià de Lòria" },
    description: {
      de: "Die südlichste und am tiefsten gelegene Stadt.",
      hu: "A legdélibb és legalacsonyabban fekvő város.",
      ro: "Cel mai sudic și cel mai jos oraș.",
      en: "The southernmost and lowest city."
    }
  },
  {
    id: "city-pas-de-la-casa",
    type: "city",
    parent: "country-andorra",
    coords: [1.7336, 42.5428],
    name: { de: "Pas de la Casa", hu: "Pas de la Casa", ro: "Pas de la Casa", en: "Pas de la Casa" },
    description: {
      de: "Beliebter Wintersportort an der französischen Grenze.",
      hu: "Népszerű téli üdülőhely a francia határon.",
      ro: "Stațiune populară de iarnă la granița cu Franța.",
      en: "Popular winter resort on the French border."
    }
  },
  {
    id: "city-soldeu",
    type: "city",
    parent: "country-andorra",
    coords: [1.6669, 42.5768],
    name: { de: "Soldeu", hu: "Soldeu", ro: "Soldeu", en: "Soldeu" },
    description: {
      de: "Austragungsort von Ski-Weltcup-Rennen.",
      hu: "Sí Világkupa-versenyek helyszíne.",
      ro: "Gazdă a curselor de la Cupa Mondială de schi.",
      en: "Host of Ski World Cup races."
    }
  },
  {
    id: "city-arinsal",
    type: "city",
    parent: "country-andorra",
    coords: [1.4845, 42.5721],
    name: { de: "Arinsal", hu: "Arinsal", ro: "Arinsal", en: "Arinsal" },
    description: {
      de: "Dorf im Valira del Nord Tal, bekannt fürs Skifahren.",
      hu: "Falu a Valira del Nord völgyben, népszerű síhely.",
      ro: "Sat în valea Valira del Nord, popular pentru schi.",
      en: "Village in the Valira del Nord valley, known for skiing."
    }
  }
];

export const andorraLandmarks: POI[] = [
  {
    id: "landmark-casa-de-la-vall",
    type: "landmark",
    parent: "country-andorra",
    coords: [1.5206, 42.5065],
    name: { de: "Casa de la Vall", hu: "Casa de la Vall", ro: "Casa de la Vall", en: "Casa de la Vall" },
    description: {
      de: "Historisches Parlamentsgebäude aus dem 16. Jahrhundert.",
      hu: "Történelmi parlamenti épület a 16. századból.",
      ro: "Clădire istorică a parlamentului din secolul al XVI-lea.",
      en: "Historical parliament building from the 16th century."
    }
  },
  {
    id: "landmark-sant-joan-caselles",
    type: "landmark",
    parent: "country-andorra",
    coords: [1.6080, 42.5714],
    name: { de: "Sant Joan de Caselles", hu: "Sant Joan de Caselles", ro: "Sant Joan de Caselles", en: "Sant Joan de Caselles" },
    description: {
      de: "Eine romanische Kirche in Canillo.",
      hu: "Egy román stílusú templom Canillóban.",
      ro: "O biserică romanică în Canillo.",
      en: "A Romanesque church in Canillo."
    }
  },
  {
    id: "landmark-santa-coloma",
    type: "landmark",
    parent: "country-andorra",
    coords: [1.4975, 42.4944],
    name: { de: "Església de Santa Coloma", hu: "Església de Santa Coloma", ro: "Església de Santa Coloma", en: "Església de Santa Coloma" },
    description: {
      de: "Eine der ältesten Kirchen des Landes.",
      hu: "Az ország egyik legrégebbi temploma.",
      ro: "Una dintre cele mai vechi biserici din țară.",
      en: "One of the oldest churches in the country."
    }
  },
  {
    id: "landmark-sant-climent",
    type: "landmark",
    parent: "country-andorra",
    coords: [1.4795, 42.5441],
    name: { de: "Sant Climent de Pal", hu: "Sant Climent de Pal", ro: "Sant Climent de Pal", en: "Sant Climent de Pal" },
    description: {
      de: "Romanische Kirche in La Massana.",
      hu: "Román stílusú templom La Massanában.",
      ro: "Biserică romanică în La Massana.",
      en: "Romanesque church in La Massana."
    }
  },
  {
    id: "landmark-sant-marti",
    type: "landmark",
    parent: "country-andorra",
    coords: [1.5186, 42.5766],
    name: { de: "Sant Martí de la Cortinada", hu: "Sant Martí de la Cortinada", ro: "Sant Martí de la Cortinada", en: "Sant Martí de la Cortinada" },
    description: {
      de: "Romanische Kirche mit Wandmalereien.",
      hu: "Román stílusú templom falfestményekkel.",
      ro: "Biserică romanică cu picturi murale.",
      en: "Romanesque church with wall paintings."
    }
  },
  {
    id: "landmark-meritxell",
    type: "landmark",
    parent: "country-andorra",
    coords: [1.5830, 42.5540],
    name: { de: "Santuari de Meritxell", hu: "Santuari de Meritxell", ro: "Santuari de Meritxell", en: "Santuari de Meritxell" },
    description: {
      de: "Basilika und wichtigster Wallfahrtsort Andorras.",
      hu: "Bazilika és Andorra legfontosabb zarándokhelye.",
      ro: "Bazilică și principalul loc de pelerinaj din Andorra.",
      en: "Basilica and most important pilgrimage site in Andorra."
    }
  },
  {
    id: "landmark-engolasters-church",
    type: "landmark",
    parent: "country-andorra",
    coords: [1.5583, 42.5113],
    name: { de: "Sant Miquel d'Engolasters", hu: "Sant Miquel d'Engolasters", ro: "Sant Miquel d'Engolasters", en: "Sant Miquel d'Engolasters" },
    description: {
      de: "Kirche mit einem markanten Glockenturm.",
      hu: "Templom jellegzetes harangtoronnyal.",
      ro: "Biserică cu un turn clopotniță distinctiv.",
      en: "Church with a distinctive bell tower."
    }
  },
  {
    id: "landmark-pont-margineda",
    type: "landmark",
    parent: "country-andorra",
    coords: [1.4920, 42.4830],
    name: { de: "Pont de la Margineda", hu: "Pont de la Margineda", ro: "Pont de la Margineda", en: "Pont de la Margineda" },
    description: {
      de: "Die größte erhaltene mittelalterliche Brücke.",
      hu: "A legnagyobb épen maradt középkori híd.",
      ro: "Cel mai mare pod medieval păstrat.",
      en: "The largest preserved medieval bridge."
    }
  },
  {
    id: "landmark-auto-museum",
    type: "landmark",
    parent: "country-andorra",
    coords: [1.5772, 42.5331],
    name: { de: "Museu Nacional de l'Automòbil", hu: "Museu Nacional de l'Automòbil", ro: "Muzeul Național al Automobilului", en: "National Automobile Museum" },
    description: {
      de: "Museum zur Geschichte des Automobils in Encamp.",
      hu: "Autótörténeti múzeum Encamp-ban.",
      ro: "Muzeu dedicat istoriei automobilului în Encamp.",
      en: "Museum dedicated to automobile history in Encamp."
    }
  },
  {
    id: "landmark-casa-rull",
    type: "landmark",
    parent: "country-andorra",
    coords: [1.5152, 42.5342],
    name: { de: "Museu Casa Rull", hu: "Museu Casa Rull", ro: "Muzeul Casa Rull", en: "Casa Rull Museum" },
    description: {
      de: "Einblicke in das traditionelle andorranische Landleben.",
      hu: "Bepillantás a hagyományos andorrai vidéki életbe.",
      ro: "Informații despre viața rurală tradițională andorrană.",
      en: "Insights into traditional Andorran rural life."
    }
  }
];

export const andorraNature: POI[] = [
  {
    id: "nature-coma-pedrosa",
    type: "nature",
    parent: "country-andorra",
    coords: [1.4428, 42.5908],
    name: { de: "Coma Pedrosa", hu: "Coma Pedrosa", ro: "Coma Pedrosa", en: "Coma Pedrosa" },
    description: {
      de: "Der höchste Berg in Andorra (2.942 m).",
      hu: "Andorra legmagasabb hegye (2942 m).",
      ro: "Cel mai înalt munte din Andorra (2.942 m).",
      en: "The highest mountain in Andorra (2,942 m)."
    }
  },
  {
    id: "nature-tristaina",
    type: "nature",
    parent: "country-andorra",
    coords: [1.4883, 42.6373],
    name: { de: "Estanys de Tristaina", hu: "Estanys de Tristaina", ro: "Lacurile Tristaina", en: "Tristaina Lakes" },
    description: {
      de: "Drei malerische Hochgebirgsseen.",
      hu: "Három festői magashegyi tó.",
      ro: "Trei lacuri glaciare pitorești.",
      en: "Three picturesque high mountain lakes."
    }
  },
  {
    id: "nature-madriu",
    type: "nature",
    parent: "country-andorra",
    coords: [1.5833, 42.4833],
    name: { de: "Madriu-Perafita-Claror Tal", hu: "Madriu-Perafita-Claror völgy", ro: "Valea Madriu-Perafita-Claror", en: "Madriu-Perafita-Claror Valley" },
    description: {
      de: "Spektakuläres Tal und UNESCO-Weltkulturerbe.",
      hu: "Látványos völgy és UNESCO világörökségi helyszín.",
      ro: "Vale spectaculoasă și sit al Patrimoniului Mondial UNESCO.",
      en: "Spectacular valley and UNESCO World Heritage site."
    }
  },
  {
    id: "nature-engolasters-lake",
    type: "nature",
    parent: "country-andorra",
    coords: [1.5711, 42.5204],
    name: { de: "Llac d'Engolasters", hu: "Llac d'Engolasters", ro: "Lacul Engolasters", en: "Engolasters Lake" },
    description: {
      de: "Ein leicht zugänglicher See nahe Andorra la Vella.",
      hu: "Könnyen megközelíthető tó Andorra la Vella közelében.",
      ro: "Un lac ușor accesibil lângă Andorra la Vella.",
      en: "An easily accessible lake near Andorra la Vella."
    }
  },
  {
    id: "nature-naturlandia",
    type: "nature",
    parent: "country-andorra",
    coords: [1.5034, 42.4418],
    name: { de: "Naturlandia", hu: "Naturlandia", ro: "Naturlandia", en: "Naturlandia" },
    description: {
      de: "Abenteuerpark mit der längsten alpinen Achterbahn.",
      hu: "Kalandpark a leghosszabb alpesi hullámvasúttal.",
      ro: "Parc de aventură cu cel mai lung tobogan alpin.",
      en: "Adventure park with the longest alpine coaster."
    }
  },
  {
    id: "nature-vallnord",
    type: "nature",
    parent: "country-andorra",
    coords: [1.4812, 42.5562],
    name: { de: "Vallnord", hu: "Vallnord", ro: "Vallnord", en: "Vallnord" },
    description: {
      de: "Bekanntes Skigebiet im Westen Andorras.",
      hu: "Ismert síterep Andorra nyugati részén.",
      ro: "Renumită stațiune de schi în vestul Andorrei.",
      en: "Well-known ski resort in western Andorra."
    }
  },
  {
    id: "nature-grandvalira",
    type: "nature",
    parent: "country-andorra",
    coords: [1.6705, 42.5623],
    name: { de: "Grandvalira", hu: "Grandvalira", ro: "Grandvalira", en: "Grandvalira" },
    description: {
      de: "Das größte Skigebiet in den Pyrenäen.",
      hu: "A Pireneusok legnagyobb síterepe.",
      ro: "Cea mai mare stațiune de schi din Pirinei.",
      en: "The largest ski resort in the Pyrenees."
    }
  },
  {
    id: "nature-casamanya",
    type: "nature",
    parent: "country-andorra",
    coords: [1.5647, 42.5852],
    name: { de: "Pic de Casamanya", hu: "Pic de Casamanya", ro: "Pic de Casamanya", en: "Pic de Casamanya" },
    description: {
      de: "Markanter Berg im Zentrum von Andorra.",
      hu: "Jellegzetes hegy Andorra közepén.",
      ro: "Munte proeminent în centrul Andorrei.",
      en: "Prominent mountain in the center of Andorra."
    }
  },
  {
    id: "nature-sorteny",
    type: "nature",
    parent: "country-andorra",
    coords: [1.5630, 42.6251],
    name: { de: "Parc Natural de Sorteny", hu: "Sorteny Nemzeti Park", ro: "Parcul Natural Sorteny", en: "Sorteny Nature Park" },
    description: {
      de: "Botanisches Paradies mit über 700 Pflanzenarten.",
      hu: "Botanikai paradicsom több mint 700 növényfajjal.",
      ro: "Paradis botanic cu peste 700 de specii de plante.",
      en: "Botanical paradise with over 700 plant species."
    }
  },
  {
    id: "nature-roc-del-quer",
    type: "nature",
    parent: "country-andorra",
    coords: [1.6000, 42.5600],
    name: { de: "Mirador Roc del Quer", hu: "Mirador Roc del Quer", ro: "Mirador Roc del Quer", en: "Roc del Quer viewpoint" },
    description: {
      de: "Aussichtsplattform mit atemberaubendem Blick.",
      hu: "Kiltátó lélegzetelállító panorámával.",
      ro: "Platformă de vizionare cu priveliști uluitoare.",
      en: "Observation deck with breathtaking views."
    }
  }
];

export const andorraAllPoi: POI[] = [
  andorraCountry,
  ...andorraCities,
  ...andorraLandmarks,
  ...andorraNature
];
