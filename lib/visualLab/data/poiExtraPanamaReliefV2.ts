import type { POI } from "./poi";

export const poiExtraPanamaReliefV2: POI[] = [
  {
    id: "panama-canal-culebra-cut-relief-v2",
    type: "relief",
    parent: "PA-8",
    coords: [-79.72, 9.02],
    name: { de: "Culebra-Vágat", hu: "Culebra-vágat", ro: "Tăietura Culebra", en: "Culebra Cut" },
    description: {
      de: "Der berühmte Einschnitt des Panamakanals durch das kontinentale Rückgrat.",
      hu: "A Panama-csatorna híres bevágása a kontinentális gerincen.",
      ro: "Faimoasa tăietură a Canalului Panama prin coloana continentală.",
      en: "The famous cut of the Panama Canal through the continental spine."
    },
    facts: {
      de: ["Teil der Kanalschleife im Landesinneren", "Stark vom Aushub geprägt", "Wichtige Verkehrsachse", "Bekannt für steile Hänge"],
      hu: ["A csatorna szárazföldi szakaszának része", "Erősen a földkitermelés formálta", "Fontos közlekedési tengely", "Meredek lejtőiről ismert"],
      ro: ["Parte a traseului interior al canalului", "Modelată puternic prin excavare", "Axă de transport importantă", "Cunoscută pentru pantele abrupte"],
      en: ["Part of the inland canal route", "Strongly shaped by excavation", "Important transport corridor", "Known for steep slopes"]
    }
  },
  {
    id: "panama-chagres-basin-relief-v2",
    type: "relief",
    parent: "PA-8",
    coords: [-79.45, 9.18],
    name: { de: "Chagres-Becken", hu: "Chagres-medence", ro: "Bazinul Chagres", en: "Chagres Basin" },
    description: {
      de: "Ein wasserreiches Becken, das eng mit dem Panamakanal verbunden ist.",
      hu: "Vízben gazdag medence, amely szorosan kapcsolódik a Panama-csatornához.",
      ro: "Un bazin bogat în apă, strâns legat de Canalul Panama.",
      en: "A water-rich basin closely linked to the Panama Canal."
    },
    facts: {
      de: ["Einzugsgebiet des Chagres-Flusses", "Wichtige Wasserreserve", "Regenwaldumrahmt", "Versorgt die Kanalregion"],
      hu: ["A Chagres folyó vízgyűjtője", "Fontos víztartalék", "Esőerdő öleli körül", "Ellátja a csatorna térségét"],
      ro: ["Bazinul hidrografic al râului Chagres", "Rezervă importantă de apă", "Înconjurat de pădure tropicală", "Alimentează zona canalului"],
      en: ["Drainage basin of the Chagres River", "Important water reserve", "Surrounded by rainforest", "Supports the canal zone"]
    }
  },
  {
    id: "panama-panama-city-valley-relief-v2",
    type: "relief",
    parent: "PA-8",
    coords: [-79.55, 8.95],
    name: { de: "Tal von Panama-Stadt", hu: "Panamaváros völgye", ro: "Valea orașului Panama", en: "Panama City Valley" },
    description: {
      de: "Das gesenkte Relief, auf dem sich Panama-Stadt und ihre Vororte ausbreiten.",
      hu: "Az a besüllyedt domborzat, amelyen Panamaváros és elővárosai elterülnek.",
      ro: "Relieful de depresiune pe care se extinde Ciudad de Panama și suburbiile sale.",
      en: "The lowered relief on which Panama City and its suburbs spread."
    },
    facts: {
      de: ["Urbanes Becken am Pazifik", "Umgeben von Hügeln", "Stark verdichtet bebaut", "Zentral für die Metropolregion"],
      hu: ["Városi medence a Csendes-óceánnál", "Dombok veszik körül", "Erősen beépített", "A nagyvárosi térség központja"],
      ro: ["Bazin urban la Pacific", "Înconjurat de dealuri", "Puternic construit", "Centru al zonei metropolitane"],
      en: ["Urban basin on the Pacific coast", "Surrounded by hills", "Highly built-up area", "Core of the metro region"]
    }
  },
  {
    id: "panama-pacora-plain-relief-v2",
    type: "relief",
    parent: "PA-8",
    coords: [-79.32, 9.05],
    name: { de: "Pacora-Ebene", hu: "Pacora-síkság", ro: "Câmpia Pacora", en: "Pacora Plain" },
    description: {
      de: "Eine flache Ebene östlich von Panama-Stadt mit wachsender Siedlungsfläche.",
      hu: "Sík vidék Panamavárostól keletre, növekvő beépítéssel.",
      ro: "O câmpie la est de Ciudad de Panama, cu extindere rezidențială.",
      en: "A flat plain east of Panama City with expanding settlement."
    },
    facts: {
      de: ["Sanftes Relief", "Wichtige Entwicklungszone", "Nahe dem Pazifik", "Landwirtschaft und Wohnen"],
      hu: ["Lágy domborzat", "Fontos fejlesztési zóna", "Közel a Csendes-óceánhoz", "Mezőgazdaság és lakóövezet"],
      ro: ["Relief domol", "Zonă importantă de dezvoltare", "Aproape de Pacific", "Agricultură și locuire"],
      en: ["Gentle relief", "Important development zone", "Near the Pacific", "Agriculture and housing"]
    }
  },
  {
    id: "panama-bayano-basin-relief-v2",
    type: "relief",
    parent: "PA-8",
    coords: [-78.80, 9.12],
    name: { de: "Bayano-Becken", hu: "Bayano-medence", ro: "Bazinul Bayano", en: "Bayano Basin" },
    description: {
      de: "Ein ausgedehntes Becken im Osten der Provinz Panamá.",
      hu: "Kiterjedt medence Panamá tartomány keleti részén.",
      ro: "Un bazin extins în estul provinciei Panama.",
      en: "An extensive basin in eastern Panamá province."
    },
    facts: {
      de: ["Stark durch den Stausee geprägt", "Tiefland mit Wasserflächen", "Wichtige Natur- und Fischereizone", "Am Übergang zum Darién"],
      hu: ["Erősen a mesterséges tó formálja", "Alacsony fekvésű, vízfelületekkel", "Fontos természetvédelmi és halászati zóna", "Átmenet a Darién felé"],
      ro: ["Modelat puternic de lacul de acumulare", "Câmpie joasă cu ape", "Zonă importantă de natură și pescuit", "Tranziție spre Darién"],
      en: ["Strongly shaped by the reservoir", "Lowland with water surfaces", "Important nature and fishing zone", "Transition toward Darién"]
    }
  },
  {
    id: "panama-anton-caldera-relief-v2",
    type: "relief",
    parent: "PA-2",
    coords: [-80.13, 8.61],
    name: { de: "El Valle-Kaldera", hu: "El Valle-kaldera", ro: "Caldera El Valle", en: "El Valle Caldera" },
    description: {
      de: "Die große Vulkankaldera von El Valle de Antón.",
      hu: "Az El Valle de Antón nagy vulkáni kalderája.",
      ro: "Marea calderă vulcanică din El Valle de Antón.",
      en: "The large volcanic caldera of El Valle de Antón."
    },
    facts: {
      de: ["Bewohnter Krater", "Kühles Bergklima", "Fruchtbarer Boden", "Beliebtes Wochenendziel"],
      hu: ["Lakott kráter", "Hűvös hegyi klíma", "Termékeny talaj", "Népszerű hétvégi célpont"],
      ro: ["Crater locuit", "Climat montan răcoros", "Sol fertil", "Destinație populară de weekend"],
      en: ["Inhabited crater", "Cool mountain climate", "Fertile soil", "Popular weekend destination"]
    }
  },
  {
    id: "panama-anton-ridge-relief-v2",
    type: "relief",
    parent: "PA-2",
    coords: [-80.12, 8.64],
    name: { de: "La-India-Dormida-Kamm", hu: "La India Dormida-gerinc", ro: "Creasta La India Dormida", en: "Sleeping Indian Ridge" },
    description: {
      de: "Der markante Kamm oberhalb des Anton-Tals.",
      hu: "A völgy fölé magasodó jellegzetes gerinc.",
      ro: "Creasta distinctivă deasupra văii Anton.",
      en: "The distinctive ridge above the Anton Valley."
    },
    facts: {
      de: ["Bekanntes Wanderziel", "Silhouette einer liegenden Gestalt", "Bietet Talblicke", "Teil des Kraterrands"],
      hu: ["Ismert túracélpont", "Egy fekvő alak sziluettjére emlékeztet", "Kilátás a völgyre", "A kráterperem része"],
      ro: ["Destinație populară de drumeție", "Siluetă de figură culcată", "Oferă priveliști asupra văii", "Parte a marginii craterului"],
      en: ["Popular hiking target", "Resembles a reclining figure", "Offers valley views", "Part of the crater rim"]
    }
  },
  {
    id: "panama-anton-highlands-relief-v2",
    type: "relief",
    parent: "PA-2",
    coords: [-80.15, 8.66],
    name: { de: "Anton-Hochland", hu: "Anton-felföld", ro: "Înălțimile Anton", en: "Anton Highlands" },
    description: {
      de: "Das höher gelegene Gelände rund um das Tal von El Valle de Antón.",
      hu: "Az El Valle de Antón körüli magasabban fekvő terep.",
      ro: "Relieful mai înalt din jurul văii El Valle de Antón.",
      en: "The higher terrain around El Valle de Antón."
    },
    facts: {
      de: ["Kühler als die Küste", "Mischung aus Hügeln und Hängen", "Beliebte Naturzone", "Reiche Vegetation"],
      hu: ["Hűvösebb, mint a partvidék", "Dombok és lejtők keveréke", "Népszerű természeti zóna", "Gazdag növényzet"],
      ro: ["Mai răcoros decât coasta", "Amestec de dealuri și pante", "Zonă naturală populară", "Vegetație bogată"],
      en: ["Cooler than the coast", "Mix of hills and slopes", "Popular nature zone", "Rich vegetation"]
    }
  },
  {
    id: "panama-azuero-peninsula-relief-v2",
    type: "relief",
    parent: "PA-7",
    coords: [-80.45, 7.85],
    name: { de: "Azuero-Halbinsel", hu: "Azuero-félsziget", ro: "Peninsula Azuero", en: "Azuero Peninsula" },
    description: {
      de: "Die große Halbinsel im Süden Panamas mit trockenem, welligem Relief.",
      hu: "Panama déli nagy félszigete, száraz és hullámos domborzattal.",
      ro: "Marea peninsulă din sudul Panamei, cu relief uscat și ondulat.",
      en: "The large peninsula in southern Panama with dry, rolling relief."
    },
    facts: {
      de: ["Traditionelles Land von Festivals und Landwirtschaft", "Trockener als der Rest des Landes", "Viele sanfte Hügel", "Wichtige Kulturregion"],
      hu: ["Fesztiválok és mezőgazdaság hagyományos vidéke", "Szárazabb, mint az ország többi része", "Sok lágy domb", "Fontos kulturális régió"],
      ro: ["Ținut tradițional al festivalurilor și agriculturii", "Mai uscat decât restul țării", "Multe dealuri line", "Regiune culturală importantă"],
      en: ["Traditional land of festivals and agriculture", "Drier than most of the country", "Many gentle hills", "Important cultural region"]
    }
  },
  {
    id: "panama-azuero-hills-relief-v2",
    type: "relief",
    parent: "PA-7",
    coords: [-80.42, 7.92],
    name: { de: "Azuero-Hügelland", hu: "Azuero-dombság", ro: "Dealurile Azuero", en: "Azuero Hills" },
    description: {
      de: "Die wellige Hügellandschaft im Inneren der Azuero-Halbinsel.",
      hu: "Az Azuero-félsziget belső, hullámos dombvidéke.",
      ro: "Zona deluroasă ondulată din interiorul peninsulei Azuero.",
      en: "The rolling hill country in the interior of the Azuero Peninsula."
    },
    facts: {
      de: ["Sanfte Erhebungen", "Viel Viehzucht", "Trockene Böden", "Traditionelle Landnutzung"],
      hu: ["Szelíd emelkedők", "Sok szarvasmarha-tenyésztés", "Száraz talajok", "Hagyományos földhasználat"],
      ro: ["Ridicări domoale", "Multă creștere a vitelor", "Soluri uscate", "Utilizare tradițională a terenului"],
      en: ["Gentle rises", "Much cattle ranching", "Dry soils", "Traditional land use"]
    }
  },
  {
    id: "panama-sarigua-badlands-relief-v2",
    type: "relief",
    parent: "PA-7",
    coords: [-80.38, 7.90],
    name: { de: "Sarigua-Badlands", hu: "Sarigua-sivatagos dombvidék", ro: "Relieful arid Sarigua", en: "Sarigua Badlands" },
    description: {
      de: "Ein extrem trockenes, erodiertes Relief am Rand der Azuero-Halbinsel.",
      hu: "Erősen száraz, erodált domborzat az Azuero-félsziget szélén.",
      ro: "Relief extrem de arid și erodat la marginea peninsulei Azuero.",
      en: "An extremely dry, eroded relief at the edge of the Azuero Peninsula."
    },
    facts: {
      de: ["Fast wüstenhaft", "Stark erodierte Böden", "Sehr wenig Vegetation", "Einzigartiges Landschaftsbild"],
      hu: ["Majdnem sivatagos", "Erősen erodált talajok", "Nagyon kevés növényzet", "Egyedi tájkép"],
      ro: ["Aproape deșertic", "Soluri puternic erodate", "Foarte puțină vegetație", "Peisaj unic"],
      en: ["Almost desert-like", "Strongly eroded soils", "Very little vegetation", "Unique landscape"]
    }
  },
  {
    id: "panama-santa-maria-plain-relief-v2",
    type: "relief",
    parent: "PA-6",
    coords: [-80.40, 8.00],
    name: { de: "Santa-María-Ebene", hu: "Santa María-síkság", ro: "Câmpia Santa María", en: "Santa María Plain" },
    description: {
      de: "Eine fruchtbare Ebene in der zentralen Pazifikregion.",
      hu: "Termékeny síkság a középső csendes-óceáni térségben.",
      ro: "O câmpie fertilă în regiunea centrală de pe Pacific.",
      en: "A fertile plain in the central Pacific region."
    },
    facts: {
      de: ["Wichtig für die Landwirtschaft", "Flaches, offenes Gelände", "Nahe der Küste", "Traditionelle Nutzflächen"],
      hu: ["Fontos a mezőgazdaság számára", "Sík, nyílt terep", "Közel a parthoz", "Hagyományos művelt területek"],
      ro: ["Importantă pentru agricultură", "Teren plat și deschis", "Aproape de coastă", "Terenuri folosite tradițional"],
      en: ["Important for agriculture", "Flat, open terrain", "Near the coast", "Traditional farmland"]
    }
  },
  {
    id: "panama-parita-basin-relief-v2",
    type: "relief",
    parent: "PA-6",
    coords: [-80.45, 8.03],
    name: { de: "Parita-Becken", hu: "Parita-medence", ro: "Bazinul Parita", en: "Parita Basin" },
    description: {
      de: "Ein niedriges Becken nahe der Bucht von Parita.",
      hu: "Alacsony fekvésű medence a Parita-öböl közelében.",
      ro: "Un bazin jos în apropierea Golfului Parita.",
      en: "A low basin near Parita Bay."
    },
    facts: {
      de: ["Teil des Azuero-Landschafsraums", "Fruchtbare Niederung", "Wichtige Wasserläufe in der Nähe", "Landwirtschaftlich genutzt"],
      hu: ["Az Azuero táj része", "Termékeny mélyföld", "Fontos vízfolyások a közelben", "Mezőgazdasági használat"],
      ro: ["Parte a peisajului Azuero", "Depresiune fertilă", "Cursuri de apă importante în apropiere", "Folosit agricol"],
      en: ["Part of the Azuero landscape", "Fertile lowland", "Important waterways nearby", "Used for farming"]
    }
  },
  {
    id: "panama-veraguas-highlands-relief-v2",
    type: "relief",
    parent: "PA-9",
    coords: [-81.00, 8.40],
    name: { de: "Veraguas-Hochland", hu: "Veraguas-felföld", ro: "Înălțimile Veraguas", en: "Veraguas Highlands" },
    description: {
      de: "Das bergige Innere der Provinz Veraguas.",
      hu: "Veraguas tartomány hegyvidéki belső része.",
      ro: "Interiorul muntos al provinciei Veraguas.",
      en: "The mountainous interior of Veraguas province."
    },
    facts: {
      de: ["Welliges Hochland", "Übergang zwischen Küste und Bergen", "Reiche Feuchtgebiete", "Wichtig für Flussquellen"],
      hu: ["Hullámos felföld", "Átmenet a part és a hegyek között", "Gazdag vizes élőhelyek", "Fontos folyóforrások"],
      ro: ["Platou ondulat", "Tranziție între coastă și munți", "Zone umede bogate", "Important pentru izvoarele râurilor"],
      en: ["Rolling highland", "Transition between coast and mountains", "Rich wetlands", "Important for river headwaters"]
    }
  },
  {
    id: "panama-santa-fe-highlands-relief-v2",
    type: "relief",
    parent: "PA-9",
    coords: [-81.13, 8.50],
    name: { de: "Santa-Fé-Hochland", hu: "Santa Fé-felföld", ro: "Înălțimile Santa Fé", en: "Santa Fé Highlands" },
    description: {
      de: "Ein kühles, gebirgiges Hochland im Norden Veraguas.",
      hu: "Hűvös, hegyvidéki felföld Veraguas északi részén.",
      ro: "Un platou montan răcoros în nordul Veraguas.",
      en: "A cool mountainous highland in northern Veraguas."
    },
    facts: {
      de: ["Mosaik aus Hügeln und Tälern", "Nebelreiches Mikroklima", "Beliebt für Naturtourismus", "Wasserreiche Bergregion"],
      hu: ["Dombok és völgyek mozaikja", "Ködös mikroklíma", "Népszerű ökoturisztikai hely", "Vízben gazdag hegyvidék"],
      ro: ["Mozaic de dealuri și văi", "Microclimat cu ceață", "Popular pentru ecoturism", "Regiune montană bogată în apă"],
      en: ["Mosaic of hills and valleys", "Foggy microclimate", "Popular for nature tourism", "Water-rich mountain region"]
    }
  },
  {
    id: "panama-chiriqui-highlands-relief-v2",
    type: "relief",
    parent: "PA-4",
    coords: [-82.55, 8.80],
    name: { de: "Chiriquí-Hochland", hu: "Chiriquí-felföld", ro: "Înălțimile Chiriquí", en: "Chiriquí Highlands" },
    description: {
      de: "Das gebirgige Hochland westlich des Landes, bekannt für kühle Luft.",
      hu: "Az ország nyugati hegyvidéki felföldje, hűvös levegőjéről ismert.",
      ro: "Platoul muntos din vestul țării, cunoscut pentru aerul răcoros.",
      en: "The mountainous highland in the west, known for its cool air."
    },
    facts: {
      de: ["Wichtige Kaffeezone", "Kühles Klima", "Berg- und Hanglandschaften", "Tür zur La-Amistad-Region"],
      hu: ["Fontos kávétermesztő övezet", "Hűvös klíma", "Hegy- és lejtőtájak", "Kapcsolat a La Amistad térséggel"],
      ro: ["Zonă importantă de cafea", "Climat răcoros", "Peisaje montane și de pantă", "Poartă către regiunea La Amistad"],
      en: ["Important coffee zone", "Cool climate", "Mountain and slope landscapes", "Gateway to the La Amistad region"]
    }
  },
  {
    id: "panama-boquete-valley-relief-v2",
    type: "relief",
    parent: "PA-4",
    coords: [-82.45, 8.80],
    name: { de: "Boquete-Tal", hu: "Boquete-völgy", ro: "Valea Boquete", en: "Boquete Valley" },
    description: {
      de: "Das fruchtbare Bergtal bei Boquete.",
      hu: "A Boquete környéki termékeny hegyi völgy.",
      ro: "Valea montană fertilă de lângă Boquete.",
      en: "The fertile mountain valley near Boquete."
    },
    facts: {
      de: ["Von Bergen umschlossen", "Kühl und grün", "Bekannt für Kaffee", "Beliebtes Tourismusziel"],
      hu: ["Hegyek ölelik körül", "Hűvös és zöld", "Kávéjáról ismert", "Népszerű turisztikai célpont"],
      ro: ["Înconjurată de munți", "Răcoroasă și verde", "Cunoscută pentru cafea", "Destinație turistică populară"],
      en: ["Surrounded by mountains", "Cool and green", "Known for coffee", "Popular tourism spot"]
    }
  },
  {
    id: "panama-volcan-plateau-relief-v2",
    type: "relief",
    parent: "PA-4",
    coords: [-82.62, 8.77],
    name: { de: "Volcán-Plateau", hu: "Volcán-fennsík", ro: "Platoul Volcán", en: "Volcán Plateau" },
    description: {
      de: "Das erhöhte Gelände um Volcán in der Provinz Chiriquí.",
      hu: "A Volcán körüli magasabban fekvő terület Chiriquí tartományban.",
      ro: "Relieful înalt din jurul orașului Volcán, provincia Chiriquí.",
      en: "The elevated terrain around Volcán in Chiriquí province."
    },
    facts: {
      de: ["Fruchtbare vulkanische Böden", "Kühles Hochlandklima", "Starke landwirtschaftliche Nutzung", "Nahe den Hängen der Cordillera"],
      hu: ["Termékeny vulkáni talaj", "Hűvös hegyi klíma", "Erős mezőgazdasági használat", "A Cordillera lejtőihez közel"],
      ro: ["Soluri vulcanice fertile", "Climat răcoros de altitudine", "Utilizare agricolă intensă", "Aproape de pantele Cordillerei"],
      en: ["Fertile volcanic soils", "Cool highland climate", "Strong agricultural use", "Near the slopes of the Cordillera"]
    }
  },
  {
    id: "panama-talamanca-range-relief-v2",
    type: "relief",
    parent: "PA-4",
    coords: [-82.75, 8.95],
    name: { de: "Talamanca-Gebirgszug", hu: "Talamanca-hegylánc", ro: "Lanțul Talamanca", en: "Talamanca Range" },
    description: {
      de: "Der höchste und raueste Gebirgszug Panamas im Westen.",
      hu: "Panama legmagasabb és legzordabb hegylánca nyugaton.",
      ro: "Cel mai înalt și mai aspru lanț muntos din Panama, în vest.",
      en: "Panama's highest and roughest mountain range in the west."
    },
    facts: {
      de: ["Teil der Zentralamerikanischen Kordillere", "Wichtige Wasserscheide", "Kühles Hochgebirgsklima", "Reiche Wald- und Nebelzonen"],
      hu: ["A közép-amerikai kordillerák része", "Fontos vízválasztó", "Hűvös magashegységi klíma", "Gazdag erdő- és köderdők"],
      ro: ["Parte a Cordillerei din America Centrală", "Cumpăna apelor importantă", "Climat rece de munte înalt", "Zone bogate de pădure și ceață"],
      en: ["Part of the Central American Cordillera", "Important watershed", "Cool high mountain climate", "Rich forest and cloud forest zones"]
    }
  },
  {
    id: "panama-bocas-del-toro-highlands-relief-v2",
    type: "relief",
    parent: "PA-1",
    coords: [-82.20, 9.30],
    name: { de: "Bocas-del-Toro-Hochland", hu: "Bocas del Toro-felföld", ro: "Înălțimile Bocas del Toro", en: "Bocas del Toro Highlands" },
    description: {
      de: "Das hügelige und feuchte Hinterland von Bocas del Toro.",
      hu: "Bocas del Toro dombos és nedves hátországa.",
      ro: "Interiorul deluros și umed din Bocas del Toro.",
      en: "The hilly and humid hinterland of Bocas del Toro."
    },
    facts: {
      de: ["Karibische Reliefzone", "Sehr feucht", "Mischung aus Hügeln und Tälern", "Reich an Regenwald"],
      hu: ["Karibi domborzati zóna", "Nagyon csapadékos", "Dombok és völgyek keveréke", "Esőerdőkben gazdag"],
      ro: ["Zonă de relief caraibiană", "Foarte umedă", "Amestec de dealuri și văi", "Bogată în pădure tropicală"],
      en: ["Caribbean relief zone", "Very humid", "Mix of hills and valleys", "Rich in rainforest"]
    }
  },
  {
    id: "panama-chorro-valley-relief-v2",
    type: "relief",
    parent: "PA-1",
    coords: [-82.30, 9.20],
    name: { de: "Chorro-Tal", hu: "Chorro-völgy", ro: "Valea Chorro", en: "Chorro Valley" },
    description: {
      de: "Ein feuchtes Tal im karibischen Norden Panamas.",
      hu: "Nedves völgy Panama karibi északi részén.",
      ro: "O vale umedă în nordul caraibian al Panamei.",
      en: "A humid valley in Panama's Caribbean north."
    },
    facts: {
      de: ["Stark bewaldet", "Niederschlagsreich", "Teil der Karibikhänge", "Wichtiger Naturkorridor"],
      hu: ["Erősen erdős", "Csapadékban gazdag", "A karibi lejtők része", "Fontos természetes folyosó"],
      ro: ["Puternic forestieră", "Cu precipitații abundente", "Parte a versanților caraibieni", "Coridor natural important"],
      en: ["Heavily forested", "Rain-rich", "Part of the Caribbean slopes", "Important nature corridor"]
    }
  },
  {
    id: "panama-darien-lowlands-relief-v2",
    type: "relief",
    parent: "PA-5",
    coords: [-77.95, 8.30],
    name: { de: "Darién-Tiefland", hu: "Darién-alföld", ro: "Câmpia Darién", en: "Darién Lowlands" },
    description: {
      de: "Die niedrige, feuchte Landschaft an der Ostgrenze Panamas.",
      hu: "Panama keleti határának alacsony és nedves tája.",
      ro: "Peisajul joas și umed de la granița estică a Panamei.",
      en: "The low, humid landscape at Panama's eastern frontier."
    },
    facts: {
      de: ["Übergang zum Darién-Gebiet", "Tropisch und sehr feucht", "Schwer zugängliches Gelände", "Naturnah und dünn besiedelt"],
      hu: ["Átmenet a Darién térségébe", "Trópusi és nagyon nedves", "Nehéz terep", "Természetközeli és ritkán lakott"],
      ro: ["Tranziție spre zona Darién", "Tropical și foarte umed", "Teren greu accesibil", "Aproape de natură și puțin populat"],
      en: ["Transition into the Darién area", "Tropical and very humid", "Difficult terrain", "Nature-rich and sparsely populated"]
    }
  },
  {
    id: "panama-darien-ridge-relief-v2",
    type: "relief",
    parent: "PA-5",
    coords: [-77.70, 8.15],
    name: { de: "Darién-Kamm", hu: "Darién-gerinc", ro: "Creasta Darién", en: "Darién Ridge" },
    description: {
      de: "Ein hügeliger bis bergiger Rücken am Rand des Darién-Regenwaldes.",
      hu: "Dombos, helyenként hegyvidéki gerinc a Darién-esőerdő peremén.",
      ro: "O creastă deluroasă, uneori montană, la marginea pădurii tropicale Darién.",
      en: "A hilly, partly mountainous ridge at the edge of the Darién rainforest."
    },
    facts: {
      de: ["Zerklüftetes Grenzgebiet", "Dichter Tropenwald", "Wichtiger Naturraum", "Kaum erschlossen"],
      hu: ["Tagolt határvidék", "Sűrű trópusi erdő", "Fontos természeti tér", "Alig feltárt"],
      ro: ["Zonă de frontieră fragmentată", "Pădure tropicală densă", "Spațiu natural important", "Aproape neamenajată"],
      en: ["Rugged border area", "Dense tropical forest", "Important natural space", "Barely developed"]
    }
  },
  {
    id: "panama-burica-peninsula-relief-v2",
    type: "relief",
    parent: "PA-4",
    coords: [-82.88, 8.08],
    name: { de: "Burica-Halbinsel", hu: "Burica-félsziget", ro: "Peninsula Burica", en: "Burica Peninsula" },
    description: {
      de: "Die schmale Grenzhalbinsel zwischen Panama und Costa Rica.",
      hu: "A Panama és Costa Rica közötti keskeny határfélsziget.",
      ro: "Peninsulă îngustă de frontieră între Panama și Costa Rica.",
      en: "The narrow border peninsula between Panama and Costa Rica."
    },
    facts: {
      de: ["Randlage im Südwesten", "Küstennahe Hügel", "Grenzregion", "Stark vom Meer beeinflusst"],
      hu: ["Peremhelyzet délnyugaton", "Partközeli dombok", "Határvidék", "Erősen tenger által befolyásolt"],
      ro: ["Poziție marginală în sud-vest", "Dealuri aproape de coastă", "Regiune de frontieră", "Puternic influențată de mare"],
      en: ["Edge location in the southwest", "Coastal hills", "Border region", "Strongly influenced by the sea"]
    }
  },
  {
    id: "panama-la-amistad-highlands-relief-v2",
    type: "relief",
    parent: "PA-NB",
    coords: [-82.70, 9.00],
    name: { de: "La-Amistad-Hochland", hu: "La Amistad-felföld", ro: "Înălțimile La Amistad", en: "La Amistad Highlands" },
    description: {
      de: "Das hochgelegene Grenzland an der Costa-Rica-Grenze.",
      hu: "A Costa Rica-i határnál fekvő magasföld.",
      ro: "Ținutul înalt de frontieră de la granița cu Costa Rica.",
      en: "The high borderland along the Costa Rican frontier."
    },
    facts: {
      de: ["Teil eines Schutzgebiets", "Hohe Niederschläge", "Bergregenwald und Páramo", "Seltene Arten und kühle Luft"],
      hu: ["Védett terület része", "Magas csapadék", "Hegyi esőerdő és páramo", "Ritka fajok és hűvös levegő"],
      ro: ["Parte a unei arii protejate", "Precipitații ridicate", "Pădure montană și páramo", "Specii rare și aer rece"],
      en: ["Part of a protected area", "High rainfall", "Mountain rainforest and páramo", "Rare species and cool air"]
    }
  }
];
