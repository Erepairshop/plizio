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
    type: "landmark",
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
    type: "landmark",
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
    type: "landmark",
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
    type: "landmark",
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
    type: "landmark",
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
    type: "landmark",
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
    type: "landmark",
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
    type: "landmark",
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
    type: "landmark",
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
    type: "landmark",
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

export const andorraRegions: POI[] = [
  {
    id: "AD-001",
    type: "region",
    parent: "country-andorra",
    coords: [1.5332, 42.5562],
    name: { de: "Ordino", hu: "Ordino", ro: "Ordino", en: "Ordino" },
    description: {
      de: "Eine malerische Gemeinde im Norden, bekannt für ihre gut erhaltenen Steinhäuser und Natur.",
      hu: "Festői közösség északon, amely jól megőrzött kőházairól és természeti szépségeiről ismert.",
      ro: "O parohie pitorească în nord, cunoscută pentru casele de piatră bine conservate și natură.",
      en: "A picturesque parish in the north, known for its well-preserved stone houses and nature."
    }
  },
  {
    id: "AD-002",
    type: "region",
    parent: "country-andorra",
    coords: [1.5976, 42.5671],
    name: { de: "Canillo", hu: "Canillo", ro: "Canillo", en: "Canillo" },
    description: {
      de: "Die flächenmäßig größte Gemeinde Andorras und ein wichtiges religiöses Zentrum.",
      hu: "Andorra legnagyobb területű közössége és fontos vallási központja.",
      ro: "Cea mai mare parohie din punct de vedere al suprafeței și un important centru religios.",
      en: "The largest parish in Andorra by area and an important religious center."
    }
  },
  {
    id: "AD-003",
    type: "region",
    parent: "country-andorra",
    coords: [1.5801, 42.5360],
    name: { de: "Encamp", hu: "Encamp", ro: "Encamp", en: "Encamp" },
    description: {
      de: "Eine zentrale Gemeinde mit einer Mischung aus Tradition und modernem Skitourismus.",
      hu: "Központi fekvésű közösség, ahol keveredik a hagyomány és a modern síturizmus.",
      ro: "O parohie centrală cu un amestec de tradiție și turism de schi modern.",
      en: "A central parish with a mix of tradition and modern ski tourism."
    }
  },
  {
    id: "AD-004",
    type: "region",
    parent: "country-andorra",
    coords: [1.5149, 42.5449],
    name: { de: "La Massana", hu: "La Massana", ro: "La Massana", en: "La Massana" },
    description: {
      de: "Heimat des höchsten Berges des Landes und beliebtes Ziel für Outdoor-Sportarten.",
      hu: "Az ország legmagasabb hegyének otthona és a szabadtéri sportok kedvelt célpontja.",
      ro: "Găzduiește cel mai înalt munte din țară și este o destinație populară pentru sporturi în aer liber.",
      en: "Home to the country's highest mountain and a popular destination for outdoor sports."
    }
  },
  {
    id: "AD-005",
    type: "region",
    parent: "country-andorra",
    coords: [1.4913, 42.4637],
    name: { de: "Sant Julià de Lòria", hu: "Sant Julià de Lòria", ro: "Sant Julià de Lòria", en: "Sant Julià de Lòria" },
    description: {
      de: "Die südlichste Gemeinde, bekannt für ihr mildes Klima und die Tabaktradition.",
      hu: "A legdélibb közösség, amely enyhe éghajlatáról és dohánytermesztési hagyományairól ismert.",
      ro: "Cea mai sudică parohie, cunoscută pentru climatul blând și tradiția tutunului.",
      en: "The southernmost parish, known for its mild climate and tobacco tradition."
    }
  },
  {
    id: "AD-006",
    type: "region",
    parent: "country-andorra",
    coords: [1.5341, 42.5083],
    name: { de: "Escaldes-Engordany", hu: "Escaldes-Engordany", ro: "Escaldes-Engordany", en: "Escaldes-Engordany" },
    description: {
      de: "Berühmt für seine Thermalquellen und als modernes Handelszentrum.",
      hu: "Hőforrásairól és modern kereskedelmi központjáról híres.",
      ro: "Faimoasă pentru izvoarele sale termale și ca centru comercial modern.",
      en: "Famous for its thermal springs and as a modern commercial center."
    }
  },
  {
    id: "AD-007",
    type: "region",
    parent: "country-andorra",
    coords: [1.5218, 42.5063],
    name: { de: "Andorra la Vella", hu: "Andorra la Vella", ro: "Andorra la Vella", en: "Andorra la Vella" },
    description: {
      de: "Die Hauptstadt und das pulsierende Herz des Fürstentums.",
      hu: "A főváros és a hercegség lüktető szíve.",
      ro: "Capitala și inima vibrantă a principatului.",
      en: "The capital and the vibrant heart of the principality."
    }
  }
];

export const andorraRegionPois: POI[] = [
  {
    id: "landmark-ad-001-postal-museum",
    type: "landmark",
    parent: "AD-001",
    coords: [1.5331, 42.5564],
    name: { de: "Postmuseum von Andorra", hu: "Andorrai Postamúzeum", ro: "Muzeul Poștei din Andorra", en: "Postal Museum of Andorra" },
    description: {
      de: "Ein Museum, das die Geschichte des Postwesens in Andorra dokumentiert.",
      hu: "Andorra postatörténetét bemutató múzeum.",
      ro: "Un muzeu care documentează istoria serviciilor poștale din Andorra.",
      en: "A museum documenting the history of the postal service in Andorra."
    },
    facts: {
      de: ["Befindet sich in der Borda del Ransol.", "Zeigt Briefmarkensammlungen seit 1928.", "Erklärt den Transport von Post über die Pyrenäen."],
      hu: ["A Borda del Ransol épületében található.", "Bélyeggyűjteményeket mutat be 1928-tól.", "Bemutatja a hegyi postaszállítást a Pireneusokon keresztül."],
      ro: ["Situat în clădirea Borda del Ransol.", "Expune colecții de timbre din 1928.", "Explică transportul poștei peste Pirinei."],
      en: ["Located in the Borda del Ransol building.", "Displays stamp collections from 1928 onwards.", "Explains postal transportation across the Pyrenees."]
    }
  },
  {
    id: "nature-ad-001-iron-route",
    type: "landmark",
    parent: "AD-001",
    coords: [1.5288, 42.5938],
    name: { de: "Eisenroute", hu: "Vas útja", ro: "Ruta Fierului", en: "Iron Route" },
    description: {
      de: "Ein Kulturweg, der an die Bergbauvergangenheit von Ordino erinnert.",
      hu: "Kulturális útvonal, amely Ordino bányászati múltjának állít emléket.",
      ro: "Un traseu cultural care amintește de trecutul minier al parohiei Ordino.",
      en: "A cultural route commemorating the mining past of Ordino."
    },
    facts: {
      de: ["Lehrpfad über die Eisenindustrie.", "Verfügt über zeitgenössische Skulpturen.", "Führt durch die Llorts-Mine."],
      hu: ["Tanösvény a vasiparról.", "Kortárs szobrok találhatók az út mentén.", "Áthalad a Llorts-bányán."],
      ro: ["Traseu educațional despre industria fierului.", "Prezintă sculpturi contemporane.", "Trece prin mina Llorts."],
      en: ["Educational trail about the iron industry.", "Features contemporary sculptures.", "Passes through the Llorts mine."]
    }
  },
  {
    id: "landmark-ad-002-motorcycle-museum",
    type: "landmark",
    parent: "AD-002",
    coords: [1.5947, 42.5658],
    name: { de: "Motorradmuseum", hu: "Motorkerékpár-múzeum", ro: "Muzeul de Motociclete", en: "Motorcycle Museum" },
    description: {
      de: "Eine beeindruckende Sammlung historischer Motorräder.",
      hu: "Történelmi motorkerékpárok lenyűgöző gyűjteménye.",
      ro: "O colecție impresionantă de motociclete istorice.",
      en: "An impressive collection of historical motorcycles."
    },
    facts: {
      de: ["Beherbergt über 100 seltene Motorräder.", "Das älteste Modell stammt aus dem Jahr 1896.", "Befindet sich im Palau de Gel Komplex."],
      hu: ["Több mint 100 ritka motorkerékpárnak ad otthont.", "A legrégebbi modell 1896-ból származik.", "A Palau de Gel komplexumban található."],
      ro: ["Găzduiește peste 100 de motociclete rare.", "Cel mai vechi model datează din 1896.", "Situat în complexul Palau de Gel."],
      en: ["Houses over 100 rare motorcycles.", "The oldest model dates back to 1896.", "Located in the Palau de Gel complex."]
    }
  },
  {
    id: "landmark-ad-002-tibetan-bridge",
    type: "landmark",
    parent: "AD-002",
    coords: [1.5898, 42.5714],
    name: { de: "Tibetische Brücke", hu: "Tibeti híd", ro: "Podul Tibetan", en: "Tibetan Bridge" },
    description: {
      de: "Eine der längsten Fußgänger-Hängebrücken der Welt.",
      hu: "A világ egyik leghosszabb gyalogos függőhídja.",
      ro: "Unul dintre cele mai lungi poduri suspendate pentru pietoni din lume.",
      en: "One of the longest pedestrian suspension bridges in the world."
    },
    facts: {
      de: ["Ist 603 Meter lang.", "Hängt 158 Meter über dem Boden.", "Bietet Panoramablick auf das Mereig-Tal."],
      hu: ["603 méter hosszú.", "158 méterrel a föld felett függ.", "Panorámás kilátást nyújt a Mereig-völgyre."],
      ro: ["Are o lungime de 603 metri.", "Suspendat la 158 de metri deasupra solului.", "Oferă vederi panoramice asupra văii Mereig."],
      en: ["It is 603 meters long.", "Hangs 158 meters above the ground.", "Offers panoramic views of the Mereig valley."]
    }
  },
  {
    id: "landmark-ad-003-electricity-museum",
    type: "landmark",
    parent: "AD-003",
    coords: [1.5492, 42.5186],
    name: { de: "Elektrizitätsmuseum", hu: "Elektromossági Múzeum", ro: "Muzeul Electricității", en: "Electricity Museum" },
    description: {
      de: "Ein Museum zur Geschichte der Elektrifizierung Andorras.",
      hu: "Andorra villamosításának történetét bemutató múzeum.",
      ro: "Un muzeu dedicat istoriei electrificării Andorrei.",
      en: "A museum dedicated to the history of the electrification of Andorra."
    },
    facts: {
      de: ["Befindet sich im FEDA-Wasserkraftwerk.", "Erklärt die Energieerzeugung des Landes.", "Bietet interaktive Experimente."],
      hu: ["A FEDA vízerőműben található.", "Elmagyarázza az ország energiatermelését.", "Interaktív kísérleteket kínál."],
      ro: ["Situat în hidrocentrala FEDA.", "Explică producția de energie a țării.", "Oferă experimente interactive."],
      en: ["Located in the FEDA hydroelectric plant.", "Explains the country's energy production.", "Offers interactive experiments."]
    }
  },
  {
    id: "nature-ad-003-pessons-lakes",
    type: "landmark",
    parent: "AD-003",
    coords: [1.6888, 42.5258],
    name: { de: "Pessons-Seen", hu: "Pessons-tavak", ro: "Lacurile Pessons", en: "Pessons Lakes" },
    description: {
      de: "Ein wunderschöner Kreis aus Gletscherseen.",
      hu: "Gleccsereredetű tavak gyönyörű köre.",
      ro: "Un cerc superb de lacuri glaciare.",
      en: "A beautiful circle of glacial lakes."
    },
    facts: {
      de: ["Größter Granit-Gletscherkessel in Andorra.", "Beliebt für Wanderungen und Angeln.", "Vom Skigebiet Grau Roig aus erreichbar."],
      hu: ["Andorra legnagyobb gránit gleccserkatlana.", "Kedvelt hely túrázásra és horgászatra.", "A Grau Roig síterületről érhető el."],
      ro: ["Cel mai mare circ glaciar de granit din Andorra.", "Popular pentru drumeții și pescuit.", "Accesibil din zona de schi Grau Roig."],
      en: ["The largest granite glacial cirque in Andorra.", "Popular for hiking and fishing.", "Accessible from the Grau Roig ski area."]
    }
  },
  {
    id: "landmark-ad-004-comic-museum",
    type: "landmark",
    parent: "AD-004",
    coords: [1.5147, 42.5461],
    name: { de: "Comic-Museum", hu: "Képregénymúzeum", ro: "Muzeul Benzilor Desenate", en: "Comic Museum" },
    description: {
      de: "Ein Raum, der der Welt der Grafikromane und Illustrationen gewidmet ist.",
      hu: "A grafikus regények és illusztrációk világának szentelt hely.",
      ro: "Un spațiu dedicat lumii romanelor grafice și ilustrațiilor.",
      en: "A space dedicated to the world of graphic novels and illustrations."
    },
    facts: {
      de: ["Veranstaltet Workshops und Wechselausstellungen.", "Befindet sich an der Plaça de les Fontetes.", "Besitzt eine umfangreiche Sammlung von Comics."],
      hu: ["Workshopokat és időszaki kiállításokat tart.", "A Plaça de les Fontetes téren található.", "Hatalmas képregénygyűjteménnyel rendelkezik."],
      ro: ["Găzduiește ateliere și expoziții temporare.", "Situat în Plaça de les Fontetes.", "Deține o colecție vastă de benzi desenate."],
      en: ["Hosts workshops and temporary exhibitions.", "Located in Plaça de les Fontetes.", "Possesses an extensive collection of comics."]
    }
  },
  {
    id: "landmark-ad-004-farga-rossell",
    type: "landmark",
    parent: "AD-004",
    coords: [1.5195, 42.5428],
    name: { de: "Farga Rossell Schmiede", hu: "Farga Rossell kovácsműhely", ro: "Forja Farga Rossell", en: "Farga Rossell Forge" },
    description: {
      de: "Ein Interpretationszentrum in einer ehemaligen Eisenschmiede.",
      hu: "Egy korábbi vaskovácsműhelyben kialakított bemutatóközpont.",
      ro: "Un centru de interpretare situat într-o fostă forjă de fier.",
      en: "An interpretation center located in a former iron forge."
    },
    facts: {
      de: ["Zeigt die Funktionsweise eines Wasserhammers.", "Repräsentiert die industrielle Vergangenheit Andorras.", "Erbaut im 19. Jahrhundert."],
      hu: ["Bemutatja a vízi kalapács működését.", "Andorra ipari múltját reprezentálja.", "A 19. században épült."],
      ro: ["Arată funcționarea unui ciocan hidraulic.", "Reprezintă trecutul industrial al Andorrei.", "Construită în secolul al XIX-lea."],
      en: ["Demonstrates the operation of a water hammer.", "Represents Andorra's industrial past.", "Built in the 19th century."]
    }
  },
  {
    id: "landmark-ad-005-tobacco-museum",
    type: "landmark",
    parent: "AD-005",
    coords: [1.4925, 42.4658],
    name: { de: "Tabakmuseum", hu: "Dohánymúzeum", ro: "Muzeul Tutunului", en: "Tobacco Museum" },
    description: {
      de: "Museum in einer alten Fabrik über die Tabakindustrie.",
      hu: "Múzeum egy régi gyárban a dohányiparról.",
      ro: "Muzeu într-o fostă fabrică despre industria tutunului.",
      en: "Museum in a former factory about the tobacco industry."
    },
    facts: {
      de: ["In der ehemaligen Reig-Fabrik untergebracht.", "Erklärt den Prozess der Zigarrenherstellung.", "Zeigt die Bedeutung des Tabaks für die Wirtschaft."],
      hu: ["Az egykori Reig-gyárban kapott helyet.", "Elmagyarázza a szivarkészítés folyamatát.", "Bemutatja a dohány fontosságát a gazdaságban."],
      ro: ["Găzduit în fosta fabrică Reig.", "Explică procesul de fabricare a țigărilor de foi.", "Arată importanța tutunului pentru economie."],
      en: ["Housed in the former Reig factory.", "Explains the cigar-making process.", "Shows the importance of tobacco for the economy."]
    }
  },
  {
    id: "landmark-ad-005-nagol-church",
    type: "landmark",
    parent: "AD-005",
    coords: [1.4983, 42.4692],
    name: { de: "Kirche Sant Serni de Nagol", hu: "Sant Serni de Nagol-templom", ro: "Biserica Sant Serni de Nagol", en: "Church of Sant Serni de Nagol" },
    description: {
      de: "Eine kleine romanische Kirche mit spektakulärer Aussicht.",
      hu: "Kicsi román stílusú templom látványos kilátással.",
      ro: "O mică biserică romanică cu vederi spectaculoase.",
      en: "A small Romanesque church with spectacular views."
    },
    facts: {
      de: ["Erbaut im Jahr 1054.", "Steht auf einer Klippe über dem Tal.", "Enthält originale Wandmalereien aus dem 11. Jahrhundert."],
      hu: ["1054-ben épült.", "Egy sziklán áll a völgy felett.", "11. századi eredeti falfestményeket tartalmaz."],
      ro: ["Construită în anul 1054.", "Situată pe o stâncă deasupra văii.", "Conține picturi murale originale din secolul al XI-lea."],
      en: ["Built in the year 1054.", "Perched on a cliff overlooking the valley.", "Contains original 11th-century mural paintings."]
    }
  },
  {
    id: "landmark-ad-006-thyssen-museum",
    type: "landmark",
    parent: "AD-006",
    coords: [1.5378, 42.5089],
    name: { de: "Carmen Thyssen Museum", hu: "Carmen Thyssen Múzeum", ro: "Muzeul Carmen Thyssen", en: "Carmen Thyssen Museum" },
    description: {
      de: "Eine bedeutende Kunstgalerie mit Werken der Thyssen-Bornemisza-Sammlung.",
      hu: "Jelentős művészeti galéria a Thyssen-Bornemisza gyűjtemény műveivel.",
      ro: "O galerie de artă importantă cu lucrări din colecția Thyssen-Bornemisza.",
      en: "A major art gallery featuring works from the Thyssen-Bornemisza collection."
    },
    facts: {
      de: ["Befindet sich im ehemaligen Hotel Valira.", "Konzentriert sich auf Malerei des 19. und 20. Jahrhunderts.", "Bietet jährlich wechselnde Ausstellungen."],
      hu: ["Az egykori Valira Hotelben található.", "A 19. és 20. századi festészetre összpontosít.", "Évente változó kiállításokat kínál."],
      ro: ["Situat în fostul Hotel Valira.", "Se concentrează pe pictura din secolele XIX și XX.", "Oferă expoziții anuale temporare."],
      en: ["Located in the former Valira Hotel.", "Focuses on 19th and 20th-century painting.", "Offers annually changing exhibitions."]
    }
  },
  {
    id: "landmark-ad-006-perfume-museum",
    type: "landmark",
    parent: "AD-006",
    coords: [1.5367, 42.5097],
    name: { de: "Parfümmuseum", hu: "Parfümmúzeum", ro: "Muzeul Parfumului", en: "Perfume Museum" },
    description: {
      de: "Ein interaktives Museum, das der Welt der Düfte gewidmet ist.",
      hu: "Az illatok világának szentelt interaktív múzeum.",
      ro: "Un muzeu interactiv dedicat lumii mirosurilor.",
      en: "An interactive museum dedicated to the world of scents."
    },
    facts: {
      de: ["Besitzt eine große Sammlung von Parfümflakons.", "Bietet ein sensorisches Erlebnis für Besucher.", "Erklärt die Geschichte der Parfümherstellung."],
      hu: ["Hatalmas parfümösüveg-gyűjteménnyel rendelkezik.", "Szenzoros élményt nyújt a látogatóknak.", "Elmagyarázza a parfümkészítés történetét."],
      ro: ["Deține o colecție mare de flacoane de parfum.", "Oferă o experiență senzorială vizitatorilor.", "Explică istoria fabricării parfumurilor."],
      en: ["Possesses a large collection of perfume bottles.", "Offers a sensory experience for visitors.", "Explains the history of perfume making."]
    }
  },
  {
    id: "landmark-ad-007-dali-sculpture",
    type: "landmark",
    parent: "AD-007",
    coords: [1.5303, 42.5072],
    name: { de: "Noblesse der Zeit", hu: "Az idő nemessége", ro: "Noblețea timpului", en: "The Nobility of Time" },
    description: {
      de: "Eine monumentale Bronzeskulptur von Salvador Dalí.",
      hu: "Salvador Dalí monumentális bronzszobra.",
      ro: "O sculptură monumentală din bronz de Salvador Dalí.",
      en: "A monumental bronze sculpture by Salvador Dalí."
    },
    facts: {
      de: ["Stellt eine schmelzende Uhr an einem Baumstamm dar.", "Symbolisiert das Vergehen der Zeit.", "Befindet sich an der Rotonda-Brücke."],
      hu: ["Egy fatörzsön olvadó órát ábrázol.", "Az idő múlását jelképezi.", "A Rotonda-hídnál található."],
      ro: ["Reprezintă un ceas care se topește pe un trunchi de copac.", "Simbolizează trecerea timpului.", "Situată lângă podul Rotonda."],
      en: ["Depicts a melting clock on a tree trunk.", "Symbolizes the passage of time.", "Located by the Rotonda bridge."]
    }
  },
  {
    id: "landmark-ad-007-sant-esteve",
    type: "landmark",
    parent: "AD-007",
    coords: [1.5222, 42.5068],
    name: { de: "Kirche Sant Esteve", hu: "Sant Esteve-templom", ro: "Biserica Sant Esteve", en: "Church of Sant Esteve" },
    description: {
      de: "Eine Kirche im historischen Zentrum von Andorra la Vella.",
      hu: "Templom Andorra la Vella történelmi központjában.",
      ro: "O biserică în centrul istoric din Andorra la Vella.",
      en: "A church in the historic center of Andorra la Vella."
    },
    facts: {
      de: ["Besitzt eine romanische Apsis aus dem 12. Jahrhundert.", "Wurde vom Architekten Josep Puig i Cadafalch renoviert.", "Enthält barocke Altarbilder."],
      hu: ["12. századi román stílusú apszissal rendelkezik.", "Josep Puig i Cadafalch építész újította fel.", "Barokk oltárképeket tartalmaz."],
      ro: ["Are o absidă romanică din secolul al XII-lea.", "A fost renovată de arhitectul Josep Puig i Cadafalch.", "Conține retabluri baroce."],
      en: ["Features a Romanesque apse from the 12th century.", "Was renovated by architect Josep Puig i Cadafalch.", "Contains Baroque altarpieces."]
    }
  }
];

export const andorraAllPoi: POI[] = [
  andorraCountry,
  ...andorraRegions,
  ...andorraCities,
  ...andorraLandmarks,
  ...andorraNature,
  ...andorraRegionPois
];
