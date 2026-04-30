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
    },
    descriptionAdvanced: {
      de: "",
      hu: "Andorra la Vella nem csupán egy adminisztratív központ, hanem a hercegség nyüzsgő, kozmopolita szíve, 1023 méteres magasságban. A város a Valira folyó völgyében terül el, meredek hegyek ölelésében. A modernitás és a történelem különleges egyvelegét kínálja: a vámmentes üzletekkel teli, csillogó Meritxell sugárút pár perces sétára van a Barri Antictól, az óváros macskaköves utcáitól és kőházaitól. Itt található a Casa de la Vall, az egykori parlament, és a Sant Esteve-templom. A város kiváló kiindulópont a környező síterepek és túraútvonalak felfedezéséhez, miközben gazdag gasztronómiai és kulturális kínálattal várja a látogatókat a nap végén.",
      ro: "",
      en: "Andorra la Vella, the capital of the Principality of Andorra, is a bustling hub nestled high in the Pyrenees mountains. At an altitude of 1,023 meters, it holds the distinction of being Europe's highest capital city. The city is a major draw for tourists, not just for its stunning mountain scenery but also for its extensive duty-free shopping along Avinguda Meritxell. The historic quarter, or 'Barri Antic', offers a glimpse into the past with its stone-paved streets and the historic Casa de la Vall parliament building. It's a city where modernity and tradition converge, offering both vibrant urban life and easy access to nature. Geography K7 - Capital cities and their functions."
    },
    factsAdvanced: {
      de: [],
      hu: [
        "1023 méteres tengerszint feletti magasságával Európa legmagasabban fekvő fővárosa.",
        "Nevének jelentése 'az öreg Andorra'.",
        "A városon keresztülfolyik a Gran Valira folyó.",
        "Népessége körülbelül 22 000 fő, ami az ország lakosságának majdnem egyharmada.",
        "Salvador Dalí 'Az idő nemessége' című híres szobra a város egyik modern jelképe.",
        "A város minden év augusztusában tartja nagy ünnepét, a Festa Majort.",
        "A történelmi központ, a Barri Antic, a 21. században is megőrizte középkori hangulatát.",
        "Az adómentes vásárlás a város egyik fő vonzereje a turisták számára."
      ],
      ro: [],
      en: [
        "The name 'Vella' does not mean 'old' but comes from the word 'vila', meaning 'town'.",
        "The city's population is around 23,000, but it swells significantly with tourists and shoppers daily.",
        "The Gran Valira river flows through the city.",
        "Salvador Dalí's sculpture 'The Nobility of Time' is a prominent public artwork in the city center.",
        "The city hosted stages of the Tour de France and Vuelta a España cycling races.",
        "Andorra la Vella is a parliamentary co-principality.",
        "The main industry is tourism, accounting for an estimated 80% of the GDP.",
        "It is one of the few capitals in the world not to have its own airport; visitors must arrive via Spain or France."
      ]
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
    },
    descriptionAdvanced: {
      de: "",
      hu: "Escaldes-Engordany a víz és a wellness városa, amely szorosan egybeépült a fővárossal. Nevét a területén feltörő, kénben és ásványi anyagokban gazdag forró vizekről kapta. Ezt a természeti kincset hasznosítja a Caldea, Európa legnagyobb hegyi termálfürdő-komplexuma, melynek futurisztikus üvegpiramisa a város modern szimbólumává vált. A wellness mellett a város fontos kereskedelmi központ is, az Avinguda Carlemany sétálóutca a fővárosi Meritxell sugárút folytatása. A kultúra iránt érdeklődők a Carmen Thyssen Múzeumot és a Parfüm Múzeumot is itt találják. Escaldes ad otthont a Madriu-Perafita-Claror völgy egy részének is, amely az UNESCO Világörökség része.",
      ro: "",
      en: "Escaldes-Engordany is a parish renowned for its natural thermal waters, which are harnessed in the futuristic Caldea-INÚU spa complex, the largest of its kind in southern Europe. The name 'Escaldes' itself refers to the presence of these hot springs. The parish is a major commercial and tourist center, seamlessly connected to the capital, Andorra la Vella. Its main artery, Avinguda Carlemany, is a bustling pedestrianized shopping street. Beyond the commerce and wellness, the parish also holds a portion of the Madriu-Perafita-Claror Valley, a UNESCO World Heritage site, offering pristine landscapes for hiking. Urban Geography K8 - Urban development and functional zones."
    },
    factsAdvanced: {
      de: [],
      hu: [
        "A város neve a latin 'calidae' (forró vizek) szóból ered.",
        "Andorra legfiatalabb közössége, 1978-ban vált külön Andorra la Vellától.",
        "A Caldea komplexum termálvize 68°C-os hőmérsékleten tör a felszínre.",
        "Itt egyesül a Valira d'Orient és a Valira del Nord, létrehozva a Gran Valira folyót.",
        "A városban található a történelmi Pont d'Engordany híd.",
        "Az Art Központ (CAEE) a román kori művészetnek és a Föld modellezésének szentelt kiállításoknak ad otthont.",
        "A város évente jazz fesztivált rendez.",
        "Az Engordany történelmi városrész megőrizte hagyományos pireneusi építészetét."
      ],
      ro: [],
      en: [
        "It is the second most populated parish in Andorra.",
        "The parish was formed relatively recently, in 1978, by separating from Andorra la Vella.",
        "The water from its hot springs can reach temperatures of up to 70°C (158°F).",
        "It is home to the Carmen Thyssen Museum, displaying a significant art collection.",
        "The historic center of Engordany preserves traditional stone architecture.",
        "The confluence of the two main rivers, Valira d'Orient and Valira del Nord, occurs here.",
        "An annual international jazz festival is a major cultural event.",
        "The Pont d'Engordany is a medieval bridge that is a testament to the area's history."
      ]
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
    },
    descriptionAdvanced: {
      de: "",
      hu: "Encamp Andorra szívében fekszik, egy dinamikus város, amely tökéletesen ötvözi a hagyományokat a modern turizmussal. Legfőbb vonzereje a Funicamp, egy 6 kilométer hosszú, modern kabinos felvonó, amely 15 perc alatt repíti fel az utasokat a Grandvalira síparadicsom szívébe, 2500 méteres magasságba. A város azonban nem csak a síelésről szól; itt található a Nemzeti Autómúzeum, amely egy lenyűgöző gyűjteményt mutat be a járműipar történetéből. A történelem iránt érdeklődők a Les Bons történelmi komplexumot kereshetik fel, ahol egy középkori őrtorony és egy román stílusú templom is található. Encamp a kontrasztok városa, ahol a modern felvonók árnyékában megbújnak az ősi kőházak.",
      ro: "",
      en: "Encamp is a parish of contrasts, situated in the geographical heart of Andorra. It comprises two distinct main towns: Encamp, a lively urban center near the capital, and Pas de la Casa, a high-altitude ski resort on the French border known for its vibrant nightlife and shopping. The Funicamp, a 6-kilometer-long cable car, provides a direct link from Encamp town to the Grandvalira ski area's slopes. Culturally, Encamp offers the National Automobile Museum and the Electricity Museum. The historical complex of Les Bons provides a window into the region's medieval past. Technology and History K8 - Infrastructure's impact on mountain communities."
    },
    factsAdvanced: {
      de: [],
      hu: [
        "A Funicamp az egyik leghosszabb felvonó Európában.",
        "A közösséghez tartozik Pas de la Casa is, amely a francia határon fekszik.",
        "A Santa Eulàlia plébániatemplom harangtornya a legmagasabb román kori torony Andorrában (23 méter).",
        "Az Elektromossági Múzeum az ország energiaellátásának történetét mutatja be.",
        "Az UNESCO által elismert 'falles' (fáklyás) ünnepség a nyári napfordulókor hagyomány.",
        "Encamp ad otthont a Radio Andorra egykori adóállomásának is.",
        "Az Engolasters-tó és a körülötte lévő túraútvonalak is a közösséghez tartoznak.",
        "Népessége alapján Andorra harmadik legnagyobb közössége."
      ],
      ro: [],
      en: [
        "Pas de la Casa is the only border crossing between Andorra and France.",
        "The Port d'Envalira, at 2,408 meters, is the highest paved pass in the Pyrenees.",
        "The parish church, Santa Eulàlia, boasts the tallest Romanesque bell tower in Andorra, standing at 23 meters.",
        "The town celebrates the summer solstice with traditional 'Fallas', a torch-bearing festival recognized by UNESCO.",
        "It is the third most populated parish in the country.",
        "Radio Andorra, a historic and powerful radio station, was based in Encamp.",
        "The Pessons Lakes, a circle of glacial lakes, are located in the Grau Roig sector of Encamp.",
        "The Engolasters Lake and its hydroelectric power station are crucial for the country's energy supply."
      ]
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
    },
    descriptionAdvanced: {
      de: "",
      hu: "La Massana az aktív pihenés és a szabadtéri sportok paradicsoma Andorrában. A város a Valira del Nord völgyében fekszik, és innen indul a kabinos felvonó a Pal-Arinsal síterepre, amely télen a síelők és snowboardosok, nyáron pedig a világhírű Vallnord Bike Park otthona. A közösség területén emelkedik Andorra legmagasabb csúcsa, a 2942 méteres Coma Pedrosa, amely népszerű célpont a hegymászók körében. La Massana azonban nemcsak a sportról szól; a városközpontban pezsgő az élet, tele éttermekkel és bárokkal. A kultúrát a Farga Rossell vaskohó-múzeum és a Képregény Múzeum képviseli. La Massana tökéletes választás azoknak, akik a természeti szépséget és az aktív kikapcsolódást keresik.",
      ro: "",
      en: "La Massana is celebrated as Andorra's 'most active' parish, a true paradise for outdoor sports enthusiasts. It is home to the country's highest peak, Coma Pedrosa (2,942 m), which is located within a protected nature park. In winter, the Pal-Arinsal ski resort (part of the larger Vallnord area) offers slopes for all abilities. In summer, the same mountains transform into the Vallnord Bike Park, one of Europe's most prestigious mountain biking destinations and a regular host for UCI World Cup events. A cable car from the town center provides easy access to the mountain activities. Economics K8 - Economic models based on sports tourism."
    },
    factsAdvanced: {
      de: [],
      hu: [
        "A közösség ad otthont Andorra legmagasabb hegycsúcsának, a Coma Pedrosának.",
        "A Vallnord Bike Park rendszeresen ad otthont mountain bike világkupa-versenyeknek.",
        "A Sant Climent de Pal templom ikerablakos harangtornya egyedülálló az országban.",
        "A 'Vas útja' (Ruta del Ferro) egy része áthalad a közösség területén.",
        "A Farga Rossell múzeum a 19. századi vasipar emlékeit őrzi.",
        "A városközpontból induló felvonó közvetlen összeköttetést biztosít Pal sípályáival.",
        "A közösség több 'via ferrata' (vasalt út) útvonallal is rendelkezik.",
        "A Pal falu az egyik legjobb állapotban megőrzött példája a hagyományos pireneusi építészetnek."
      ],
      ro: [],
      en: [
        "The parish is home to the villages of Pal and Arinsal, both major tourist centers.",
        "The village of Pal is a well-preserved example of traditional Pyrenean architecture.",
        "The Vallnord Bike Park has over 40 km of trails.",
        "The Iron Route (Ruta del Ferro), which explores Andorra's industrial past, passes through the parish.",
        "La Massana hosts a popular weekly market every Thursday.",
        "The parish has several 'via ferrata' routes for climbing enthusiasts.",
        "The Comic Museum in the town center is a unique cultural attraction.",
        "The Farga Rossell Interpretation Centre showcases the region's history of iron production."
      ]
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
    },
    descriptionAdvanced: {
      de: "",
      hu: "Ordino Andorra leginkább érintetlen és kulturálisan leggazdagabb faluja, amely egy festői völgyben fekszik az ország északi részén. A teljes közösség területe UNESCO bioszféra-rezervátum, ami tanúskodik a természet megőrzése iránti elkötelezettségéről. A falu központja megőrizte hagyományos pireneusi karakterét a kőből épült házakkal, palatetőivel és kovácsoltvas erkélyeivel. Ordino ad otthont a Casa d'Areny-Plandolit múzeumnak, amely egykor egy befolyásos andorrai család otthona volt, valamint a Postamúzeumnak. A faluból könnyen elérhető a Sorteny-völgy Nemzeti Park és az Ordino-Arcalís síterep, amely a freeride síelés fellegvára. Ordino a nyugalom és a kultúra szigete a nyüzsgő Andorra szívében.",
      ro: "",
      en: "Ordino is considered the cultural heart of Andorra. Located in the northwest, it is a parish renowned for its stunning natural landscapes and well-preserved traditional architecture. The entire parish has been designated a UNESCO Biosphere Reserve, highlighting its commitment to balancing human activity and nature conservation. The landscape is dominated by high peaks, including Pic de Tristaina. The villages of Ordino, La Cortinada, and Ansalonga have retained their historic charm with stone houses and slate roofs. Key cultural sites include the Areny-Plandolit Museum and the Postal Museum. Geography K8 - Biosphere reserves and sustainable development."
    },
    factsAdvanced: {
      de: [],
      hu: [
        "Az egész közösséget az UNESCO 2020-ban bioszféra-rezervátummá nyilvánította.",
        "Ordino rendelkezik a legalacsonyabb népsűrűséggel Andorrában.",
        "Itt található a Miniatűr Múzeum, Nicolai Siadristy mikro-alkotásaival.",
        "A 'Vas útja' (Ruta del Ferro) a közösség ipari múltját mutatja be.",
        "Az Ordino-Arcalís síterep híres a kiváló porhó minőségéről.",
        "A Casa d'Areny-Plandolit az egyetlen teljes egészében megmaradt nemesi ház Andorrában.",
        "A falu ad otthont Andorra Nemzeti Auditóriumának, a komolyzenei élet központjának.",
        "A helyi gasztronómia híres a gombás ételeiről és a 'trinxat'-ról."
      ],
      ro: [],
      en: [
        "Ordino has the lowest population density in Andorra.",
        "The Ordino-Arcalís ski area is famous for its off-piste and freeride terrain.",
        "The National Auditorium of Andorra is located in Ordino.",
        "The Iron Route (Ruta del Ferro) also passes through this parish, detailing its industrial history.",
        "The Sorteny Valley Nature Park is known for its botanical diversity, with over 700 species of flowers.",
        "The Miniature Museum displays the incredible micro-miniature art of Nicolai Siadristy.",
        "Its gastronomy is famous for traditional mountain dishes like 'trinxat' (cabbage and potato cake).",
        "The parish was the last in Andorra to get a paved road."
      ]
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
    },
    descriptionAdvanced: {
      de: "",
      hu: "Canillo a vallási és kalandturizmus központja Andorrában. A falu ad otthont a Meritxell-szentélynek, az ország védőszentjének otthonának, amely egyben Andorra legfontosabb zarándokhelye. A modern építészet iránt érdeklődők számára a Ricardo Bofill által tervezett új bazilika lenyűgöző látványt nyújt. Canillo a Grandvalira sírégió része, a Soldeu és El Tarter pályái innen könnyen elérhetők. A kalandvágyók számára a Roc del Quer kilátó és a völgy felett átívelő, lélegzetelállító Tibeti függőhíd kínál felejthetetlen élményeket. A falu központjában található a Palau de Gel (Jégpalota), ahol korcsolyázni, úszni és gokartozni is lehet.",
      ro: "",
      en: "Canillo is the largest parish by area in Andorra and serves as a major religious and adventure tourism hub. It is home to the Sanctuary of Meritxell, the patron saint of Andorra, whose modern basilica was designed by renowned architect Ricardo Bofill. The parish is a key gateway to the vast Grandvalira ski area, with major access points in Soldeu and El Tarter. Modern attractions include the Roc del Quer viewpoint, with its skywalk platform, and the Tibetan Bridge, one of the longest pedestrian suspension bridges in the world. The parish skillfully blends these modern attractions with its Romanesque heritage, such as the church of Sant Joan de Caselles. Architecture K8 - Tradition and innovation in mountain architecture."
    },
    factsAdvanced: {
      de: [],
      hu: [
        "Területét tekintve Canillo Andorra legnagyobb közössége.",
        "Itt található a Meritxell-szentély, Andorra nemzeti szentélye.",
        "A 603 méter hosszú Tibeti híd a világ egyik leghosszabb gyalogos függőhídja.",
        "A Roc del Quer kilátóról panorámás kilátás nyílik a völgyre.",
        "A Sant Joan de Caselles templom a román kori építészet egyik legszebb példája az országban.",
        "A Palau de Gel egész évben nyitva tartó sport- és szabadidőközpont.",
        "A Motorkerékpár Múzeum több mint 150 ritka járművet mutat be.",
        "A Val d'Incles völgy népszerű túrahelyszín nyáron."
      ],
      ro: [],
      en: [
        "The village of Soldeu is a regular host of the FIS Alpine Ski World Cup.",
        "The Tibetan Bridge is 603 meters long and is suspended 158 meters above the valley floor.",
        "Canillo is the highest parish in the country.",
        "The Palau de Gel (Ice Palace) in Canillo offers year-round activities like ice skating and karting.",
        "Andorra's national day, September 8th, is celebrated in honor of Our Lady of Meritxell.",
        "The Val d'Incles is a picturesque U-shaped valley, popular for hiking in the summer.",
        "The Motorcycle Museum in Canillo displays an impressive private collection.",
        "The parish is made up of numerous small villages and hamlets."
      ]
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
    },
    descriptionAdvanced: {
      de: "",
      hu: "Sant Julià de Lòria Andorra déli kapuja, a legenyhébb klímájú közösség, amely a spanyol határ mentén fekszik. Ez a földrajzi közelség mindig is meghatározta a város kereskedelmi és kulturális jellegét. Történelmileg a dohánytermesztés központja volt, amiről a Dohánymúzeum tanúskodik. Ma a város fő vonzereje a Naturlandia kalandpark, amely a La Rabassa erdőben található. Itt működik a Tobotronc, a világ leghosszabb alpesi szánkópályája, valamint egy állatpark, ahol a Pireneusok őshonos állatai láthatók. Sant Julià egyben egyetemi város is, az Andorrai Egyetem campusa élénk, fiatalos hangulatot kölcsönöz neki.",
      ro: "",
      en: "Sant Julià de Lòria is the southernmost parish, acting as the main gateway to Andorra from Spain. Being the lowest-lying parish, it enjoys a milder, more Mediterranean climate than the rest of the country. Historically, the area was a center for tobacco cultivation, a past that is now elegantly showcased in the Tobacco Museum, housed in the former Reig factory. Today, its main draw is Naturlandia, a large adventure park set in the La Rabassa forest, famous for its animal park and the Tobotronc, the world's longest alpine coaster. The parish is also home to a university campus, lending it a vibrant, youthful atmosphere. Economic Geography K7 - Regional transformation from agriculture to services."
    },
    factsAdvanced: {
      de: [],
      hu: [
        "Ez Andorra legalacsonyabban fekvő közössége (kb. 900 méter).",
        "A Tobotronc szánkópálya 5,3 km hosszú.",
        "A Dohánymúzeum egy egykori dohánygyárban kapott helyet.",
        "A Pont de la Margineda középkori híd a közösség fontos műemléke.",
        "A Sant Serni de Nagol templom a 11. században épült egy sziklaszirtre.",
        "A közösségben újjáéledt a bortermelés, több magaslati borászat is működik.",
        "A Juberri kortárs szoborkert egy meglepő és érdekes látnivaló.",
        "Itt található Andorra egyetlen állandó határátkelője Spanyolország felé."
      ],
      ro: [],
      en: [
        "The parish directly borders the Spanish region of Catalonia.",
        "The Tobotronc alpine coaster is 5.3 km long and has a vertical drop of 400 meters.",
        "The 11th-century church of Sant Serni de Nagol is perched dramatically on a cliff.",
        "A number of high-altitude wineries are reviving viticulture in the parish.",
        "The border crossing with Spain is open 24 hours a day.",
        "Naturlandia's animal park features species native to the Pyrenees, such as brown bears and wolves.",
        "The parish's Festa Major (main festival) is one of the largest and most popular in Andorra.",
        "The Juberri Gardens, a contemporary sculpture park, is a surprising and delightful attraction."
      ]
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
    },
    descriptionAdvanced: {
      de: "",
      hu: "Pas de la Casa, a 'Ház a hágón', Andorra legmagasabban fekvő és legkeletibb települése, közvetlenül a francia határon. A 2100 méter feletti magasság garantálja a hosszú és hóbiztos síszezont, így nem meglepő, hogy a Grandvalira sírégió egyik legélénkebb és legnépszerűbb központjává vált. A település elsősorban a síelésről és a pezsgő éjszakai életről szól, tele bárokkal, éttermekkel és vámmentes üzletekkel. Pas de la Casa a legfiatalabb korosztály kedvelt célpontja. A Port d'Envalira hágó, amely összeköti a települést a többi andorrai várossal, a Pireneusok legmagasabb aszfaltozott hágója, amely télen is nyitva tart.",
      ro: "",
      en: "Pas de la Casa is a high-altitude town and ski resort located in the parish of Encamp, right on the border with France. At an elevation of 2,100 meters, it is one of the highest resorts in the Pyrenees. It's a key part of the Grandvalira ski area, offering extensive slopes and a vibrant, youthful atmosphere. The town is famous for its lively après-ski scene and a wide array of duty-free shops, attracting many visitors from across the border. Its name translates to 'the pass of the house,' referring to a single shepherd's hut that existed there in the early 20th century. It serves as Andorra's only border crossing with France, via the Envalira Pass or tunnel. Tourism Geography K7 - Border towns and cross-border tourism."
    },
    factsAdvanced: {
      de: [],
      hu: [
        "A település több mint 2100 méteres magasságban fekszik.",
        "Ez Andorra egyetlen határátkelője Franciaország felé.",
        "A név ('Ház a hágón') egyetlen, a 20. század elején itt álló pásztorkunyhóra utal.",
        "A Grandvalira síterep több mint 210 km-nyi sípályával rendelkezik.",
        "A település csak az 1950-es években kezdett el kiépülni a sífelvonók megjelenésével.",
        "Nyáron a terület népszerű a túrázók és a hegyi kerékpárosok körében.",
        "A Port d'Envalira hágó 2408 méter magas.",
        "Pezsgő éjszakai élete miatt a bulizni vágyó fiatalok kedvelt helye."
      ],
      ro: [],
      en: [
        "It is the highest town in Andorra and one of the highest in Europe.",
        "The town's growth is directly linked to the development of the ski resort, which opened in 1957.",
        "It has a reputation for being one of the most snow-sure resorts in the Pyrenees.",
        "The town is connected to the rest of Grandvalira's sectors by a comprehensive lift system.",
        "Beyond skiing, shopping is a primary activity for visitors.",
        "The population is highly seasonal, increasing dramatically during the winter months.",
        "The Envalira Tunnel provides an alternative to the high mountain pass, especially in winter.",
        "The nightlife in Pas de la Casa is considered among the liveliest in the Pyrenees."
      ]
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
    },
    descriptionAdvanced: {
      de: "",
      hu: "Soldeu egy festői hegyi falu a Canillo közösségben, amely mára a Grandvalira sírégió egyik legfontosabb és legmodernebb központjává nőtte ki magát. A falu 1800 méteres magasságban fekszik, és egy modern kabinos felvonó köti össze a sípályákkal. Soldeu világhírnevét azzal alapozta meg, hogy rendszeresen ad otthont az Alpesi Sí Világkupa futamainak, köztük a híres Avet lesiklópályán. A falu a minőségi szolgáltatásokra és a családbarát légkörre összpontosít, számos magas színvonalú szállodával, étteremmel és síiskolával. Nyáron a sípályák zöld legelőkké változnak, és a falu a túrázók és a golf szerelmeseinek paradicsomává válik, köszönhetően Európa legmagasabban fekvő golfpályájának.",
      ro: "",
      en: "Soldeu is a village in the parish of Canillo, internationally renowned as a world-class ski destination. It is a central hub within the Grandvalira ski area, the largest in the Pyrenees. Soldeu is particularly famous for hosting major international ski competitions, including several FIS Alpine Ski World Cup events, on its iconic Avet slope. The village has a sophisticated yet relaxed atmosphere, with a wide range of high-quality hotels, restaurants, and spa facilities. In summer, the ski slopes transform into a lush golf course, the highest in Europe, and numerous hiking and mountain biking trails open up, making it a year-round mountain destination. Sports Science K8 - The impact of altitude on athletic performance and event hosting."
    },
    factsAdvanced: {
      de: [],
      hu: [
        "Soldeu rendszeresen ad otthont FIS Alpesi Sí Világkupa futamoknak.",
        "Az Avet lesiklópálya a világ egyik legmeredekebb és legtechnikásabb pályája.",
        "A falu a Valira d'Orient folyó völgyében fekszik.",
        "Itt található Európa legmagasabban fekvő 9 lyukú golfpályája, 2250 méteren.",
        "A falu neve a latin 'sol' (nap) szóból eredhet, utalva a napos fekvésére.",
        "Számos luxus- és wellness-szálloda található a településen.",
        "A szomszédos El Tarter faluval egy modern felvonórendszer köti össze.",
        "Nyáron a felvonók a túrázókat és a hegyi kerékpárosokat szállítják."
      ],
      ro: [],
      en: [
        "The Avet slope in Soldeu is a challenging black run used for World Cup slalom and giant slalom races.",
        "The Soldeu Golf Course is a 9-hole, par-33 course situated at an altitude of 2,250 meters.",
        "The village is situated at an elevation of 1,800 meters.",
        "It has a significant British and Irish influence, with many English-speaking seasonal workers and tourists.",
        "The main gondola provides swift access to the heart of the ski area.",
        "It is connected by lift and piste to the neighbouring villages of El Tarter and Canillo.",
        "Many of the hotels feature luxurious wellness centers and spas.",
        "The village offers a high-end experience compared to the more budget-focused Pas de la Casa."
      ]
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
    },
    descriptionAdvanced: {
      de: "",
      hu: "Arinsal egy bájos hegyi falu La Massana közösségben, amely a Pal-Arinsal síterep egyik kapuja. A falu megőrizte barátságos, családias hangulatát, miközben modern turisztikai infrastruktúrával rendelkezik. A településről egy modern kabinos felvonó visz fel a sípályákhoz, amelyeket egy nagy kapacitású drótkötélpálya köt össze a szomszédos Pal szektorral. Arinsal különösen kedvelt a kezdő és középhaladó síelők, valamint a családok körében. Nyáron a falu a túrázók paradicsoma, innen indulnak a legnépszerűbb útvonalak a Coma Pedrosa csúcsára és a közeli tavakhoz. Élénk, angolszász pubokkal tarkított éjszakai élete miatt a fiatalabb korosztály körében is népszerű.",
      ro: "",
      en: "Arinsal is a village located in a narrow valley in the parish of La Massana in northwest Andorra. It is primarily known as a friendly, family-oriented ski resort that is part of the Vallnord-Pal-Arinsal ski area. The village sits at an altitude of around 1,550 meters and is linked by a cable car to the Pal sector, forming a combined ski area of over 60 km. Arinsal is particularly popular with beginners and intermediate skiers and snowboarders. During the summer, it's a base for hiking, especially for those looking to conquer Coma Pedrosa, Andorra's highest peak, which lies within the parish. The village has a relaxed, informal atmosphere with numerous pubs and restaurants catering to a diverse international crowd. Sociology K7 - Tourism's effect on small mountain communities."
    },
    factsAdvanced: {
      de: [],
      hu: [
        "A falu 1550 és 1950 méter közötti magasságban fekszik.",
        "A Pal-Arinsal síterep összesen 63 km-nyi pályával rendelkezik.",
        "Nyáron a falu a Coma Pedrosa Nemzeti Park fő bejárata.",
        "A 'Teleféric de Arinsal-Pal' egy 50 fős kabin, amely összeköti a két síterepet.",
        "Arinsal népszerű a brit és ír turisták körében, számos pub és étterem szolgálja ki őket.",
        "A falu temploma, a Sant Andreu d'Arinsal, a 17. században épült.",
        "A nyári hónapokban a falu ad otthont a Comapedrosa Skyrace hegyi futóversenynek.",
        "A falu felett található egy via ferrata útvonal is."
      ],
      ro: [],
      en: [
        "Arinsal is connected to the Pal ski area by a 50-person cable car.",
        "The village is situated in the Valira del Nord valley.",
        "It's particularly popular with British, Irish, and Spanish tourists.",
        "The Coma Pedrosa Communal Park is located just above the village.",
        "The village retains a few traditional stone buildings, but is mostly modern tourist infrastructure.",
        "The Arinsal river flows through the center of the village.",
        "In summer, the area becomes part of the Vallnord Bike Park.",
        "It has a reputation for a lively but family-friendly après-ski scene."
      ]
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
    },
    descriptionAdvanced: {
      de: "",
      hu: "A Casa de la Vall, azaz 'A Völgy Háza', Andorra egyik legfontosabb történelmi és szimbolikus épülete. Az Andorra la Vella óvárosában álló, robusztus kőépület 1580-ban épült egy nemesi család számára, majd 1702-ben a Consell de la Terra (a mai andorrai parlament, a Consell General elődje) megvásárolta. Több mint három évszázadon át itt ülésezett a törvényhozás, és itt működött a bíróság is. Az épület ma múzeumként működik, bemutatva Andorra egyedülálló politikai történelmét. Látogathatók a régi üléstermek, a konyha és a bírósági terem. A ház melletti téren áll a 'Hét Kulcs Ládája', amely az ország hét közösségének egységét szimbolizálja.",
      ro: "",
      en: "The Casa de la Vall is one of the most emblematic buildings in Andorra la Vella. Constructed in 1580 as a manor and defensive tower for the Busquets family, it was purchased in 1702 to serve as the headquarters of the Consell de la Terra, Andorra's historic parliament. It functioned as the seat of government and justice for over three centuries until the new parliament building was inaugurated in 2011. The building is a magnificent example of traditional Andorran architecture, with thick stone walls and a slate roof. Inside, visitors can explore the old courtroom, the kitchen, and the main chamber where the council met, which features original 16th-century murals and the historic 'Closet of the Seven Keys' where the state's most important documents were kept. History K8 - Systems of Government and Parliament."
    },
    factsAdvanced: {
      de: [],
      hu: [
        "Az épület eredetileg a Busquets család erődített nemesi kúriája volt.",
        "A parlament 2011-ben költözött át az új, modern épületbe a Casa de la Vall mellé.",
        "A 'Hét Kulcs Ládájában' őrizték az ország legfontosabb dokumentumait, és csak a hét közösség képviselőjének együttes jelenlétében lehetett kinyitni.",
        "Az épület alagsorában egykor börtön is működött.",
        "A bejárat felett Andorra címere látható, alatta az ország mottója: 'Virtus Unita Fortior' (Egységben erősebb az erény).",
        "A régi ülésterem falait 16. századi freskók díszítik.",
        "Az épületet csak vezetett túrák keretében lehet látogatni.",
        "A ház kertjéből gyönyörű kilátás nyílik a völgyre."
      ],
      ro: [],
      en: [
        "The name translates to 'House of the Valley'.",
        "The Closet of the Seven Keys required a key from each of the seven parishes to be opened.",
        "The building served as a courthouse, parliament, and even a prison.",
        "It is located in the heart of the Barri Antic, the old town of the capital.",
        "The main floor holds the Council Chamber with its original 16th-century furnishings.",
        "Guided tours are available, offering insight into Andorra's unique political history.",
        "The building is a declared Asset of Cultural Interest.",
        "The gardens of the Casa de la Vall offer beautiful views over the city."
      ]
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
    },
    descriptionAdvanced: {
      de: "",
      hu: "A Canillo határában, a Valira d'Orient folyó partján álló Sant Joan de Caselles templom az andorrai román kori építészet egyik legszebb és legjobb állapotban megőrzött példája. A 11-12. században épült templom a lombard stílus jellegzetességeit viseli magán: magas, különálló harangtorony, félköríves apszis és egyszerű, téglalap alaprajz. Belül egy lenyűgöző, 16. századi gótikus-reneszánsz oltárkép található, amely Szent János életének jeleneteit ábrázolja. Az apszisban 12. századi román kori freskók maradványai is láthatók, melyek a 'Maiestas Domini'-t (Krisztus dicsőségben) ábrázolják. A templom tökéletes harmóniában áll a környező alpesi tájjal.",
      ro: "",
      en: "Sant Joan de Caselles is a prime example of Andorran Romanesque architecture, located just outside the town of Canillo. Dating back to the 11th-12th centuries, the church has a distinctive rectangular nave, a semi-circular apse, and a striking bell tower in the Lombard Romanesque style. Inside, it houses a magnificent stucco sculpture of Christ in Majesty surrounded by murals, and a well-preserved 16th-century altarpiece of exceptional quality, depicting scenes from the life of St. John the Evangelist. The church's setting, by a river and surrounded by mountains, adds to its charm. It is one of the best-preserved Romanesque churches in the Pyrenees. Art History K7 - Romanesque Art and Architecture."
    },
    factsAdvanced: {
      de: [],
      hu: [
        "A harangtorony különlegessége, hogy az utolsó szintjén kettős, boltíves ablakok (ikerablakok) vannak.",
        "A templom belsejében egy 12. századi, stukkóból készült 'Kálvária' szoborcsoport is található.",
        "A gótikus oltárképet Miquel de la Coromina és Guillem de la Borda mestereknek tulajdonítják.",
        "A templom körüli temetőben régi sírkövek láthatók.",
        "Az épületet egy motorkerékpár múzeum mellett találjuk, érdekes kontrasztot alkotva.",
        "Az apszis külső falát jellegzetes lombard vakívek és lizénák (falsávok) díszítik.",
        "A templom ingyenesen látogatható a nyári hónapokban.",
        "A templom szerepel Andorra kulturális örökségének listáján."
      ],
      ro: [],
      en: [
        "The bell tower is three stories high with mullioned windows.",
        "The church has two porticoes, added in the 16th and 18th centuries.",
        "The altarpiece is attributed to the workshop of Miquel Ramells and Guy de Borgonyó.",
        "It retains some of the original Romanesque frescoes in the apse.",
        "The church is a designated Asset of Cultural Interest in Andorra.",
        "The key to visit the interior can be obtained from the tourist office in Canillo.",
        "Its structure has remained largely unchanged for nearly a thousand years.",
        "The stucco Christ in Majesty is a unique piece in Andorra."
      ]
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
    },
    descriptionAdvanced: {
      de: "",
      hu: "A Santa Coloma d'Andorra templom az ország egyik legrégebbi és legkülönlegesebb egyházi épülete. A preromán (a román kor előtti) időszakban, a 8-9. században épült templomot a 12. században egy egyedülálló, kör alaprajzú, négyemeletes lombard harangtoronnyal egészítették ki, amely ma az épület legjellegzetesebb része. Az apszist díszítő híres, 12. századi román kori freskókat az 1930-as években eladták és csak nemrég kerültek vissza Andorrába. Ma ezek a festmények egy innovatív, 'video mapping' technikával létrehozott virtuális kiállításon, az Espai Columban tekinthetők meg a templom mellett, ahol az eredeti freskókat vetítik vissza az apszis falára.",
      ro: "",
      en: "The church of Santa Coloma is one of the oldest and most unusual pre-Romanesque buildings in Andorra, located in the village of Santa Coloma just south of the capital. Originating in the 8th-9th century, its most distinctive feature is the circular four-story bell tower, a rare shape in the Pyrenees, which was added in the 12th century. The church once housed a magnificent collection of 12th-century Romanesque frescoes, including the famous 'Agnus Dei'. While the originals were removed, an innovative video mapping projection now allows visitors to experience the frescoes in their original location. The church stands as a testament to Andorra's earliest Christian history. World History K6 - Early Medieval Europe."
    },
    factsAdvanced: {
      de: [],
      hu: [
        "A kör alaprajzú harangtorony egyedülálló Andorrában.",
        "A templom eredeti, preromán apszisa négyszögletes volt.",
        "A híres freskókat a 'Santa Coloma-i Mester' néven ismert művész alkotta.",
        "A freskók 2007-ben kerültek vissza Andorrába, miután a kormány visszavásárolta őket.",
        "Az Espai Columba egy modern múzeumi tér, amely a freskók bemutatására jött létre.",
        "A templom belsejében egy 18. századi barokk oltár is található.",
        "A templom az andorrai román kori útvonal (Ruta del Romànic) része.",
        "Santa Coloma falu Andorra la Vella közösséghez tartozik."
      ],
      ro: [],
      en: [
        "It is the only church in Andorra with a circular Lombard-style bell tower.",
        "The main nave of the church is pre-Romanesque.",
        "The original frescoes were sold in the 1930s but have since been mostly recovered by the Andorran government.",
        "The video mapping projection is called the 'Espai Columba'.",
        "The church is dedicated to Saint Columba of Sens, a 3rd-century martyr.",
        "The bell tower is 17.5 meters high.",
        "The site has been excavated, revealing Visigothic and Roman era remains.",
        "It is part of the Andorran Romanesque route."
      ]
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
    },
    descriptionAdvanced: {
      de: "",
      hu: "A Sant Climent de Pal templom a La Massana közösséghez tartozó Pal festői falujában található, és az andorrai román kori építészet egyik legérdekesebb példája. A 11-12. században épült templom legfeltűnőbb jellegzetessége a háromszintes lombard harangtorony, amelyet a felső két szinten ikerablakok díszítenek – ez a megoldás egyedülálló Andorrában. A templom belseje egyszerű, de figyelemre méltó a 18. századi barokk oltárkép és egy 12. századi, a 'Pali Szűzanya' néven ismert román kori faszobor. A templomot egy fal veszi körül, amely egykor a temetőt zárta körbe. Az épület tökéletesen illeszkedik a hagyományos kőházakból és palatetőkből álló falu képébe.",
      ro: "",
      en: "Located in the picturesque village of Pal within the parish of La Massana, Sant Climent de Pal is a quintessential example of Andorran rural Romanesque architecture. The church dates from the late 11th or early 12th century. Its most notable feature is its three-story bell tower, adorned with twin-mullioned windows, a characteristic of the Lombard Romanesque style. This style of bell tower is unique in Andorra, as the windows are not paired. The church also preserves two 18th-century Baroque altarpieces and a 12th-century wooden statue of Our Lady of the Remedies. The village of Pal itself is one of the best-preserved traditional villages in the country, making a visit to the church a trip back in time. Architecture K7 - Romanesque Period."
    },
    factsAdvanced: {
      de: [],
      hu: [
        "A templom harangtornya az egyetlen Andorrában, amely ikerablakokkal rendelkezik.",
        "Az ablakok nemcsak díszítő, hanem akusztikai funkciót is elláttak, segítve a harangszó terjedését.",
        "A templom egyhajós, félköríves apszissal.",
        "A bejáratot egy előtető (tornác) védi.",
        "Pal falu maga is védett műemlékegyüttes, a hagyományos pireneusi építészet egyik legjobb példája.",
        "A templom kulcsa a falu egyik házánál kérhető el.",
        "A templomban található Szűz Mária szobor a román kori faszobrászat szép példája.",
        "A templom szerepel az andorrai kulturális örökség listáján."
      ],
      ro: [],
      en: [
        "The church's bell tower is one of the most photographed in Andorra.",
        "It is dedicated to Saint Clement of Rome.",
        "The village of Pal is a protected site, ensuring the preservation of its traditional architecture.",
        "The church is still in active use by the local community.",
        "The original Romanesque frescoes from the interior are now kept in Barcelona.",
        "Guided tours can be arranged through the La Massana tourist office.",
        "The church is built from local granite stone.",
        "The windows in the bell tower are progressively larger on each level, creating a sense of height."
      ]
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
    },
    descriptionAdvanced: {
      de: "",
      hu: "A La Cortinada faluban található Sant Martí-templom egy igazi művészettörténeti kincs, amely az andorrai román kor ékességeit őrzi. Az eredetileg a 12. században épült templomot a 17. és 18. században jelentősen kibővítették, így a román kori és barokk stílusjegyek keverednek benne. A templom igazi különlegessége a 12. század végi, kiváló állapotban megmaradt falfestmény-együttes, amelyet a 'Cortinadai Mester' alkotott. A freskók Szent Márton életét, valamint fantasztikus állatfigurákat és a hónapokat ábrázolják. A templomhoz tartozik egy 17-18. századi kovácsoltvas rács, egy galambdúc és egy régi vízimalom is.",
      ro: "",
      en: "The church of Sant Martí de la Cortinada, located in the parish of Ordino, is a Romanesque gem that was extended in the 17th and 18th centuries. The original 12th-century church preserves a significant set of Romanesque mural paintings attributed to the 'Master of La Cortinada'. These frescoes depict fantastical animals, a bishop, and figures from the lives of saints. Later additions to the church include beautiful wrought-iron railings, typical of Andorran craftsmanship, and several Baroque altarpieces. The church is part of a larger historical site that includes a traditional water-powered sawmill and a manor house, offering a comprehensive look at life in rural Andorra through the centuries. Art History K7 - Narrative in Medieval Art."
    },
    factsAdvanced: {
      de: [],
      hu: [
        "A templom eredetileg egyhajós volt, de a bővítések során oldalkápolnákkal egészítették ki.",
        "A freskókat a 20. században fedezték fel a barokk oltár mögött.",
        "A fantasztikus állatokat ábrázoló bestiárium egyedülálló a pireneusi régióban.",
        "A templomban több, különböző korokból származó barokk oltárkép is található.",
        "A kovácsoltvas rácsok a 17-18. századi andorrai vasművesség remekei.",
        "A templom melletti régi malom ma is működőképes.",
        "Az épület az andorrai román kori útvonal egyik legfontosabb állomása.",
        "A templom ingyenesen látogatható, audioguide is rendelkezésre áll."
      ],
      ro: [],
      en: [
        "The Romanesque frescoes were rediscovered during a restoration in 1968.",
        "The church has a separate bell tower that was part of the original structure.",
        "The side chapels, sacristy, and nave were enlarged in the Baroque period.",
        "The wrought-iron railings date from the 17th-18th centuries and were made in local forges.",
        "The church is dedicated to Saint Martin of Tours.",
        "A small cemetery surrounds the church.",
        "The village of La Cortinada is on the Iron Route tourist trail.",
        "The combination of Romanesque and Baroque elements is a key feature of the church."
      ]
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
    },
    descriptionAdvanced: {
      de: "",
      hu: "A Meritxell-szentély Andorra spirituális központja és nemzeti szentélye, a Meritxelli Szűzanya, az ország védőszentjének otthona. Az eredeti, 17. századi román kori templom 1972-ben egy tűzvészben szinte teljesen elpusztult. A romok mellett épült fel a híres katalán építész, Ricardo Bofill által tervezett új, modern bazilika, amelyet 1976-ban szenteltek fel. Az épület a román kori elemeket (mint a harangtorony) ötvözi a modern építészet formanyelvével, szimbolizálva a hit folytonosságát. A szentélyben őrzik a Meritxelli Szűzanya 12. századi, román kori faszobrának másolatát (az eredeti a tűzben megsemmisült). A szentély a hit, a kultúra és a természet találkozási pontja.",
      ro: "",
      en: "The Sanctuary of Meritxell is the spiritual heart of Andorra and home to its patron saint, Our Lady of Meritxell. The original Romanesque chapel, dating from the 12th century, tragically burned down in a fire in 1972, destroying the original statue of the Virgin. A new, grand sanctuary was designed by the renowned Spanish architect Ricardo Bofill and inaugurated in 1976. Bofill's design is a bold and eclectic reinterpretation of Romanesque style, blending elements of architecture, sculpture, and landscape. The complex, which includes the remains of the old church and the new basilica, was declared a Minor Basilica by Pope Francis in 2014. It is part of the Marian Route, linking several major shrines. Architecture K8 - Modernism and Postmodernism."
    },

    factsAdvanced: {
      de: [],
      hu: [
        "A legenda szerint a Szűzanya szobrát egy virágzó vadrózsabokor mellett találták meg januárban, hóval borított tájon.",
        "Szeptember 8-a, a Meritxelli Szűzanya napja, Andorra nemzeti ünnepe.",
        "Az új bazilika a 'Máriás Út' (Ruta Mariana) része, amely több spanyol és francia szentélyt köt össze.",
        "A komplexumhoz tartozik egy állandó kiállítás is, 'Meritxell, a memória' címmel.",
        "A régi templom romjai megmaradtak mementóként az új bazilika mellett.",
        "A bazilika elnyerte a 'Basilica minor' címet Ferenc pápától.",
        "Ricardo Bofill terveiben a négy természeti elem - föld, víz, levegő, tűz - is megjelenik.",
        "A szentély Canillo közösségben található, és Andorra egyik leglátogatottabb helye."
      ],
      ro: [],
      en: [
        "The original statue was a Romanesque wood carving of a seated Virgin and Child.",
        "A faithful replica of the original statue is now housed in the new sanctuary.",
        "Andorra's National Day on September 8th is the feast day of Our Lady of Meritxell.",
        "The new sanctuary features a large open cloister and a soaring bell tower.",
        "The design uses materials like stone, slate, and copper to blend with the mountain environment.",
        "The fire in 1972 occurred on the night of the national holiday.",
        "The 'Meritxell Memory' exhibition inside explains the history of the site.",
        "It is the most important religious site in the Principality of Andorra."
      ]
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
    },
    descriptionAdvanced: {
      de: "",
      hu: "A Sant Miquel d'Engolasters egy 12. századi román kori templom, amely egy teraszon helyezkedik el, festői kilátással Andorra la Vella völgyére, közel az Engolasters-tóhoz. Az épület legjellegzetesebb része a 17 méter magas, arányos lombard stílusú harangtorony. A templom belsejében a híres román kori freskók másolatai láthatók (az eredetieket a barcelonai Katalán Nemzeti Múzeumban őrzik), amelyek a Maiestas Dominit és az arkangyalokat ábrázolják. A templom egyszerűsége és a környező táj szépsége tökéletes harmóniát alkot. A legenda szerint a közeli tó vizének mágikus ereje van, és az építkezéshez is felhasználták.",
      ro: "",
      en: "Sant Miquel d'Engolasters is a Romanesque church from the 12th century, perched on a scenic terrace overlooking the Andorra la Vella valley. It is renowned for its elegant, slightly leaning Lombard-style bell tower and the fine Romanesque frescoes that once adorned its apse. The original paintings, attributed to the Master of Santa Coloma, are now displayed in the National Art Museum of Catalonia in Barcelona, but high-quality copies can be seen inside the church. The church has a simple rectangular nave and a semi-circular apse. Its location near Engolasters Lake makes it a popular stop for hikers and those seeking panoramic views. Its distinctive, slightly disproportionate bell tower is one of its most famous features. Art History K7 - Romanesque Fresco Painting."
    },
    factsAdvanced: {
      de: [],
      hu: [
        "A harangtorony arányai rendkívül harmonikusak, és a lombard stílus egyik legszebb példája Andorrában.",
        "Az eredeti falfestményeket 1925-ben távolították el és adták el.",
        "A templom egyhajós, félköríves apszissal.",
        "A templomot csak a nyári hónapokban lehet belülről megtekinteni, vezetett túrák keretében.",
        "A templom mellett egy kálvária is található.",
        "Az Engolasters-tó egy népszerű kirándulóhely, amely gyalogosan is elérhető a templomtól.",
        "A templom az andorrai román kori útvonal fontos állomása.",
        "A legenda szerint a torony építéséhez az Engolasters-tó vizét használták habarcsként."
      ],
      ro: [],
      en: [
        "The bell tower is almost as tall as the nave is long, giving it a unique proportion.",
        "The frescoes depict the Adoration of the Magi and the Archangel Michael fighting a dragon.",
        "The church was built with local pumice stone, which is unusually light.",
        "The church is believed to have been built on the site of an earlier temple.",
        "A legend says the bell tower leans because the ground beneath it is filled with treasure.",
        "It is easily accessible via the road leading to Engolasters Lake.",
        "The porch was added at a later date.",
        "The church offers a perfect viewpoint over the capital city and Escaldes-Engordany."
      ]
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
    },
    descriptionAdvanced: {
      de: "",
      hu: "A Pont de la Margineda Andorra legnagyobb és legimpozánsabb középkori hídja, amely a Sant Julià de Lòria és Andorra la Vella közötti régi úton ível át a Gran Valira folyón. A 12-13. században épült, egyetlen, 33 méter fesztávolságú, elegáns ívvel rendelkező kőhíd a román kori mérnöki tudás lenyűgöző példája. A híd legmagasabb pontján egy kis fülke található, amely egykor egy szent szobrát őrizhette. A híd mellett egy modern szobor áll, amelyet a japán művész, Michio Fukazawa készített, emléket állítva az Első Andorrai Nemzetközi Földművészeti Biennálénak. A híd ma is használatban van a gyalogosok számára, és Andorra kulturális örökségének védett műemléke.",
      ro: "",
      en: "The Pont de la Margineda is the largest and most slender medieval bridge in Andorra, located in the parish of Sant Julià de Lòria. Spanning the Gran Valira river, this Romanesque bridge dates back to the 12th-13th centuries and was part of the old royal road connecting Sant Julià to the capital. The bridge is notable for its large 33-meter single arch and its construction from local stone bound with lime mortar. A modern sculpture by the Valencian artist Andreu Alfaro stands near the bridge, creating a dialogue between the medieval and the contemporary. The bridge is a testament to the engineering skills of the period and remains a vital piece of Andorra's historical heritage. Engineering History K6 - Bridge Construction."
    },
    factsAdvanced: {
      de: [],
      hu: [
        "A híd 33 méter hosszú és 9,2 méter magas.",
        "A híd építéséhez a környéken bányászott gránitot és habarcsot használtak.",
        "Az útburkolat macskaköves, és a híd két végén alacsony kőkorlát található.",
        "A híd stratégiai fontosságú volt, mivel az egyetlen összeköttetést biztosította a völgy két oldala között.",
        "A hidat a 20. században többször is megerősítették és restaurálták.",
        "A híd népszerű fotótéma és a helyi esküvői fotózások kedvelt helyszíne.",
        "A híd szerepel Andorra postabélyegein is.",
        "A híd környéke kellemes sétákat kínál a folyóparton."
      ],
      ro: [],
      en: [
        "The main arch has a span of 33 meters and a height of 9.2 meters.",
        "The bridge is built with stone and features a lighter, upper section made of pumice stone to reduce weight.",
        "It is located on the old 'Camí Ral' or royal road.",
        "The bridge has been declared an Asset of Cultural Interest.",
        "It has survived numerous floods over the centuries.",
        "The pavement is cobbled, as it was in medieval times.",
        "The contemporary sculpture nearby is called 'Arc, Punt, Trobada' (Arch, Point, Meeting).",
        "It is a popular spot for photographers and history enthusiasts."
      ]
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
    },
    descriptionAdvanced: {
      de: "",
      hu: "Az encampi Nemzeti Autómúzeum egy lenyűgöző időutazásra invitálja a látogatókat a négykerekűek világába. A gyűjtemény Európa egyik legjelentősebbje, több mint 80 autót, 60 motorkerékpárt és száz kerékpárt mutat be, az 1886-os gőzgépektől az 1970-es évek sportautóiig. A kiállítás tökéletesen szemlélteti a járművek technikai és esztétikai fejlődését. A látogatók megcsodálhatnak olyan legendás márkákat, mint a Rolls-Royce, a Hispano-Suiza vagy a Bugatti, és bepillantást nyerhetnek abba, hogyan változtatta meg az automobil a 20. század társadalmát. A múzeum nemcsak az autórajongók számára kötelező, hanem mindenkinek, aki érdeklődik a technikatörténet iránt.",
      ro: "",
      en: "The National Automobile Museum in Encamp offers a fascinating journey through the history of the automobile, from the earliest steam engines to modern classics. The museum showcases an extraordinary collection of over eighty cars, sixty motorcycles, and a hundred bicycles. The vehicles are arranged chronologically, allowing visitors to trace the evolution of mechanical engineering, design, and social customs. Highlights of the collection include a Pinette steam engine from 1886 and rare models from brands like Hispano-Suiza and Rolls-Royce. It is considered one of the most important automobile collections in Southern Europe. Technology History K8 - The Evolution of Personal Transportation."
    },
    factsAdvanced: {
      de: [],
      hu: [
        "A gyűjtemény több magángyűjtemény összevonásából jött létre.",
        "A legrégebbi kiállított darab egy 1886-os gőzgép.",
        "A múzeum bemutatja az autózás hatását a divatra és a turizmusra is.",
        "Külön részleg foglalkozik a kerékpárok történetével, a velocipédtől a modern versenykerékpárig.",
        "A kiállított járművek mindegyike működőképes.",
        "A múzeum Encamp központjában, egy modern épületben található.",
        "A gyűjteményben számos ritka és egyedi darab is található.",
        "Az autók mellett korabeli plakátok és kiegészítők is láthatók."
      ],
      ro: [],
      en: [
        "The collection is the result of private acquisitions over many years.",
        "The museum covers the period from 1886 to the 1970s.",
        "It provides a look at how vehicles have transformed from luxury items to everyday objects.",
        "The exhibits are complemented by maps, posters, and miniature models.",
        "The museum is located in a modern building in the center of Encamp.",
        "It is a popular attraction for families and classic car enthusiasts.",
        "The collection illustrates the rapid technological advancements of the 20th century.",
        "Special exhibitions are sometimes held to focus on a particular brand or era."
      ]
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
    },
    descriptionAdvanced: {
      de: "",
      hu: "A Casa Rull Múzeum Sispony festői falujában, La Massana közösségben található, és egyedülálló bepillantást nyújt a 19. századi Andorra vidéki életébe. Az épület egykor a gazdag földbirtokos Perich család otthona volt, és a múzeum hűen rekonstruálja az egykori életmódot. A látogatók bejárhatják a ház különböző részeit, a konyhától és az éléskamrától kezdve a hálószobákon át egészen a gazdasági épületekig, ahol az állatokat tartották és a terményeket tárolták. A korhű bútorok, szerszámok és használati tárgyak segítségével megelevenedik a múlt, és képet kapunk arról, hogyan élt egy önellátó, hegyi gazdaságban élő andorrai család a turizmus kora előtt.",
      ro: "",
      en: "The Casa Rull Museum, located in the village of Sispony in La Massana, is a perfectly preserved example of a traditional 17th-century Andorran house belonging to a wealthy land-owning family. The house was inhabited until the 20th century, and it provides an authentic glimpse into the Pyrenean way of life, where a single building served as a home, barn, and workshop. Visitors can explore the kitchen with its large hearth, the bedrooms, the pantry where food was preserved, and the attic where grain was stored. The house demonstrates the self-sufficient lifestyle of Andorran families, whose wealth was based on agriculture and livestock. Social History K7 - Family and Society in Pre-Industrial Europe."
    },
    factsAdvanced: {
      de: [],
      hu: [
        "A Casa Rull a 17. században épült, de a 19. században jelentősen átalakították.",
        "A ház az andorrai 'borda' típusú építészet jellegzetes példája.",
        "A Perich család Andorra egyik legbefolyásosabb családja volt, amely mezőgazdasággal és állattenyésztéssel foglalkozott.",
        "A múzeum bemutatja azokat a tevékenységeket, amelyek a család éves ciklusát meghatározták, a vetéstől a disznóvágásig.",
        "A házban még a szellemeknek és a mitológiai lényeknek is volt helyük a hiedelmek szerint.",
        "A múzeumot csak vezetett túrák keretében lehet látogatni.",
        "A Casa Rull az 'Andorrai Múzeumok Útvonalának' része.",
        "A házhoz egy kis kert és veteményes is tartozik."
      ],
      ro: [],
      en: [
        "The house belonged to the Perich family, prominent local landowners.",
        "The current structure dates mainly from the 17th and 18th centuries.",
        "The ground floor was for livestock and the upper floors for the family.",
        "The museum shows how every space and object had a specific function.",
        "It illustrates the importance of the pig in the traditional diet, with tools for making sausages.",
        "The house was turned into a museum and opened to the public in 2000.",
        "Guided tours explain the social hierarchy and daily routines of the time.",
        "Casa Rull is part of Andorra's network of rural habitat museums."
      ]
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
    },
    descriptionAdvanced: {
      de: "",
      hu: "A Coma Pedrosa 2942 méteres magasságával Andorra legmagasabb csúcsa, amely a hercegség északnyugati részén, a spanyol és francia határ közelében emelkedik. A csúcs és a körülötte elterülő völgy a Coma Pedrosa Völgyeinek Természeti Parkjához tartozik, amely gazdag alpesi flórával és faunával rendelkezik. A hegy megmászása népszerű kihívás a tapasztalt túrázók körében; a csúcsra Arinsal faluból indul a leggyakoribb útvonal. A túra során a látogatók gleccsertavakat, például az Estanys de Baiau tavait is megcsodálhatják. A csúcsról tiszta időben lenyűgöző, 360 fokos panoráma nyílik a Pireneusok andorrai, spanyol és francia vonulataira. A hegy lábánál található a Coma Pedrosa menedékház, amely szállást és étkezést biztosít a túrázóknak.",
      ro: "",
      en: "Coma Pedrosa is the highest summit in the Principality of Andorra, standing at an impressive 2,942 meters (9,652 ft) above sea level. Located in the parish of La Massana in the northwestern part of the country, the mountain is the centerpiece of the Coma Pedrosa Valleys National Park. The ascent is a challenging but popular hike, typically taking about 4-5 hours from the village of Arinsal. The route passes through diverse landscapes, including pine forests, high mountain meadows, and glacial lakes like the Estanys de Tristaina. From the summit, hikers are rewarded with breathtaking panoramic views across the Pyrenees of Andorra, France, and Spain. Geology K7 - Mountain Formation and Glacial Landscapes."
    },
    factsAdvanced: {
      de: [],
      hu: [
        "A csúcs a La Massana közösség területén található.",
        "A hegy megmászása kb. 4-5 órát vesz igénybe Arinsalból.",
        "A Coma Pedrosa gránitból és palából épül fel.",
        "A csúcson egy kis fémkereszt és egy csúcskönyv található.",
        "A hegy a nevét a 'köves völgy' (coma pedregosa) kifejezésről kapta.",
        "A Comapedrosa Skyrace egy népszerű hegyi futóverseny, amely a csúcsot is érinti.",
        "A természeti park területe 15,4 km².",
        "A parkban zerge, mormota és számos ragadozómadár-faj is él."
      ],
      ro: [],
      en: [
        "The mountain is part of the Pyrenees mountain range.",
        "The name 'Coma Pedrosa' means 'stony cirque' in Catalan.",
        "The Coma Pedrosa Valleys National Park covers an area of 15.43 square kilometers.",
        "A mountain hut, the 'Refugi de Coma Pedrosa', is located at 2,265m for overnight stays.",
        "The final part of the ascent is a steep scramble over rocky terrain.",
        "The area is home to wildlife such as chamois, marmots, and the bearded vulture.",
        "In winter, the mountain is a destination for experienced ski mountaineers.",
        "The summit is marked with a small cairn and an Andorran flag."
      ]
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
    },
    descriptionAdvanced: {
      de: "",
      hu: "Az Estanys de Tristaina egy három, lépcsőzetesen elhelyezkedő, kristálytiszta vizű gleccsertóból álló együttes az Ordino közösségben, az Ordino-Arcalís síterep felett. A tavak egy látványos, jégkorszaki cirkuszvölgyben fekszenek, amelyet magas hegycsúcsok, köztük a Tristaina-csúcs (2878 m) ölelnek körül. A legalsó tó, az Estany Primer, a legkönnyebben megközelíthető, mindössze egy rövid sétára a sífelvonó végétől. Egy jól jelzett turistaútvonal köti össze a három tavat (Estany Primer, Estany del Mig, Estany de Més Amunt), és egy kellemes, kb. másfél órás körtúrával bejárható. A tavak és környékük nyáron a túrázók, télen pedig a sítúrázók és hótalpasok kedvelt célpontja.",
      ro: "",
      en: "The Tristaina Lakes (Estanys de Tristaina) are a set of three beautiful glacial lakes located high in the parish of Ordino. Situated in a stunning mountain cirque near the Ordino-Arcalís ski resort, they are a popular destination for hikers in the summer. The lakes are located at different altitudes: Estany Primer (First Lake), Estany del Mig (Middle Lake), and Estany de Més Amunt (Furthest Lake). The trail connecting the lakes is a relatively easy and well-marked loop, making it accessible to families. The crystal-clear waters of the lakes reflect the surrounding peaks, including the impressive Tristaina Peak. Geography K7 - Glacial landforms and high-altitude lakes."
    },
    factsAdvanced: {
      de: [],
      hu: [
        "A legmagasabban fekvő tó, az Estany de Més Amunt, 2300 méter felett található.",
        "A tavak vize nyáron is rendkívül hideg.",
        "A legfelső tónál található egy modern napóra-szobor, a 'Solar Viewpoint'.",
        "A tavakban pisztrángok élnek, így a horgászok körében is népszerű.",
        "Nyáron a sífelvonó megkönnyíti a tavakhoz való feljutást.",
        "A tavakat körülvevő hegyoldalakon rododendronok virágoznak a kora nyári időszakban.",
        "A körtúra szintkülönbsége körülbelül 200 méter.",
        "A tavak vize a Valira del Nord folyót táplálja."
      ],
      ro: [],
      en: [
        "The lakes are of glacial origin, formed by ancient ice sheets.",
        "The highest lake, Estany de Més Amunt, sits at an altitude of 2,320 meters.",
        "The loop trail to see all three lakes is about 4.4 km long.",
        "The area is known for its rich alpine flora, including Pyrenean lilies.",
        "In winter, the lakes are frozen and covered in snow, accessible to ski tourers.",
        "The Ordino-Arcalís gondola lift operates in summer, providing easy access to the start of the trail.",
        "The Tristaina Solar Viewpoint, a large sundial sculpture, is located near the viewpoint for the lakes.",
        "Fishing for trout is permitted in the lakes with a license."
      ]
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
    },
    descriptionAdvanced: {
      de: "",
      hu: "A Madriu-Perafita-Claror völgy Andorra egyetlen UNESCO Világörökségi helyszíne, amely az ország területének közel 10%-át foglalja el. Ez a hatalmas, jégkorszaki gleccserek által formált völgyrendszer egyedülálló példája annak, hogyan élt az ember évezredeken át harmóniában a hegyi környezettel. A völgyben nincsenek állandó utak, így természeti és kulturális értékei érintetlenül maradtak meg. Magashegyi legelők, sűrű erdők, kristálytiszta tavak és meredek sziklafalak váltakoznak. A tájban megbújnak régi pásztorkunyhók (bordes), teraszos földművelés nyomai és a vasolvasztás emlékei, amelyek mind az ember és a természet szoros kapcsolatáról tanúskodnak. A völgyet csak gyalogosan, túraútvonalakon lehet felfedezni.",
      ro: "",
      en: "The Madriu-Perafita-Claror Valley is a vast glacial valley and Andorra's only UNESCO World Heritage site, recognized for its cultural landscape. Covering about 9% of Andorra's total territory, the valley is a microcosm of the Pyrenees, showcasing how humans have lived in this mountainous environment for millennia. It features dramatic glacial landscapes, with steep pastures, rugged crags, and high-altitude lakes. The valley also contains evidence of its human history, including shepherds' huts ('bordes'), stone walls, and the remains of iron forges. It is a pristine, undeveloped area with no roads, accessible only by hiking trails, offering a unique sense of tranquility and a connection to the past. Human Geography K8 - Cultural Landscapes and Heritage."
    },
    factsAdvanced: {
      de: [],
      hu: [
        "A völgyet 2004-ben vették fel az UNESCO Világörökség listájára 'kultúrtáj' kategóriában.",
        "A terület négy andorrai közösség (Encamp, Andorra la Vella, Sant Julià de Lòria, Escaldes-Engordany) határain húzódik.",
        "A völgy legmagasabb pontja a Pic de la Portelleta (2905 m).",
        "A GR7, GR11 és GRP nemzetközi túraútvonalak is áthaladnak a völgyön.",
        "Több hegyi menedékház (refugi) is található a völgyben, ahol a túrázók megszállhatnak.",
        "A völgy neve a 'Madre del Río' (a folyó anyja) kifejezésből eredhet.",
        "A terület rendkívül gazdag biodiverzitásban, számos ritka növény- és állatfaj otthona.",
        "A völgy a mai napig helyet ad a tradicionális legeltető állattartásnak."
      ],
      ro: [],
      en: [
        "The valley was awarded UNESCO World Heritage status in 2004.",
        "It covers an area of 4,247 hectares.",
        "The main access point for hiking is from the Engolasters road.",
        "The valley is home to several mountain huts for long-distance hikers.",
        "It spans across parts of four Andorran parishes: Encamp, Escaldes-Engordany, Andorra la Vella, and Sant Julià de Lòria.",
        "The landscape shows a long history of pastoralism and resource management.",
        "The name 'Madriu' comes from the Latin for 'mother river'.",
        "The valley's protected status ensures it remains a haven for native flora and fauna."
      ]
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
    },
    descriptionAdvanced: {
      de: "",
      hu: "Az Engolasters-tó egy mesterséges víztározó Encamp közösségben, 1616 méteres magasságban. Bár a tavat az 1930-as években hozták létre az escaldesi vízerőmű ellátására, mára tökéletesen beilleszkedett a tájba, és Andorra egyik legnépszerűbb családi kirándulóhelyévé vált. A tavat fenyőerdő veszi körül, és egy könnyen járható, sík sétaút vezet körbe rajta, amely babakocsival és kerekesszékkel is megtehető. A környéken több piknikezőhely, játszótér és egy kalandpark is található. A tó partjáról indulnak túraútvonalak a környező hegyekbe. A tó közelében áll a Sant Miquel d'Engolasters 12. századi román kori templom.",
      ro: "",
      en: "Engolasters Lake is an artificial lake located at an altitude of 1,616 meters in the parish of Escaldes-Engordany. The lake was formed by a dam built in 1934 to create a reservoir for the country's first hydroelectric power plant. It is now a popular and easily accessible recreational area, surrounded by forests and offering flat walking trails around its perimeter. The lake is a favorite spot for families, picnics, and fishing. Nearby is the Romanesque church of Sant Miquel d'Engolasters. A local legend tells of a village that was once here, submerged by the lake's waters as a divine punishment for the villagers' lack of piety. Environmental Science K7 - Water Resources and Hydroelectric Power."
    },
    factsAdvanced: {
      de: [],
      hu: [
        "A tó vizét egy föld alatti csatornarendszer vezeti le az escaldesi vízerőműbe.",
        "A tóban tilos a fürdés, de a horgászat engedélyezett.",
        "A tó körüli sétaút kb. 2 km hosszú.",
        "A tó partján több étterem is található.",
        "A tó körül számos legenda kering, többek között boszorkányokról és a tó mélyén rejtőző kincsekről.",
        "Télen a tó befagy, csodálatos látványt nyújtva.",
        "A tóhoz autóval és busszal is könnyen el lehet jutni.",
        "A 'Camí de les Pardines' egy botanikai tanösvény, amely a tótól indul."
      ],
      ro: [],
      en: [
        "The lake is approximately 7 hectares in size.",
        "The water from the lake is channeled through underground pipes to the hydroelectric plant below.",
        "It is one of the most easily accessible lakes in Andorra.",
        "The path around the lake is about 2 km long.",
        "There are several restaurants and picnic areas near the lake.",
        "An adventure park with zip lines is located in the forest nearby.",
        "The lake can be reached by a scenic, winding road from the capital.",
        "Despite being artificial, it has become a significant naturalized habitat."
      ]
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
    },
    descriptionAdvanced: {
      de: "",
      hu: "A Naturlandia egy hatalmas, egész évben nyitva tartó kaland- és állatpark Sant Julià de Lòria közösségben, a La Rabassa erdőben. A park két fő részből áll: egy 1600 méteres magasságban lévő családi zónából és egy 2000 méteres magasságban található extrém sport zónából. A park leghíresebb attrakciója a Tobotronc, amely 5,3 kilométeres hosszával a világ leghosszabb alpesi 'hullámvasútja'. Ezen kívül számos más kaland is várja a látogatókat, például drótkötélpályák, íjászat, quadozás és egy állatpark, ahol a Pireneusok őshonos állatait, mint a barna medvét, a farkast és a hiúzt lehet megfigyelni természetes környezetükben. A Naturlandia tökéletes program az egész család számára.",
      ro: "",
      en: "Naturlandia is a large adventure and nature park located in the La Rabassa forest, in the parish of Sant Julià de Lòria. The park is split into two sections at different altitudes (1,600m and 2,000m), connected by a scenic road. Its most famous attraction is the Tobotronc, which at 5.3 kilometers is the longest alpine coaster in the world. The park also features an animal park where visitors can see species native to the Pyrenees, such as brown bears, wolves, and chamois, in semi-wild enclosures. Other activities include zip-lining, archery, buggy tours, and cross-country skiing in winter. It's a year-round destination focused on outdoor activities and environmental education. Tourism K8 - Management of Theme Parks and Natural Attractions."
    },
    factsAdvanced: {
      de: [],
      hu: [
        "A Tobotronc 5,3 km hosszú és 400 méter szintkülönbséget küzd le az erdőn keresztül.",
        "A park két zónája között ingyenes buszjárat közlekedik.",
        "Az állatpark több mint 15 hektáron terül el.",
        "Télen a park a sífutás és a hótalpas túrázás központjává válik.",
        "A parkban található Andorra egyetlen állandó jégpályája.",
        "Különböző nehézségű erdei drótkötélpályák (Airtrekk) is kipróbálhatók.",
        "A legkisebbeket pónilovaglás és játszóterek várják.",
        "A parkban éttermek és piknikezőhelyek is rendelkezésre állnak."
      ],
      ro: [],
      en: [
        "The Tobotronc ride takes about 10 minutes to descend.",
        "The park covers a vast area of the La Rabassa forest.",
        "The animal park at the higher altitude (2,000m) is a key feature.",
        "In winter, La Rabassa is Andorra's only dedicated cross-country ski resort.",
        "The park offers educational workshops for school groups.",
        "The lower section at 1,600m is focused on adventure activities.",
        "The ride on the Tobotronc offers spectacular views of the surrounding forest.",
        "It is a popular destination for families visiting Andorra."
      ]
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
    },
    descriptionAdvanced: {
      de: "",
      hu: "A Vallnord (ma már hivatalosan Pal Arinsal és Ordino Arcalís) Andorra nyugati részén elterülő sírégió, amely két különálló, de egy síbérlettel használható síterepből áll. A La Massana közösségben található Pal-Arinsal egy családbarát síterep, amely több mint 60 km-nyi, főként kezdő és középhaladó pályával rendelkezik. A két szektort (Pal és Arinsal) egy nagy kabinos felvonó köti össze. Az Ordino közösségben fekvő Ordino Arcalís a freeride és a mélyhó síelés paradicsoma, híres a kiváló hóminőségéről és az érintetlen, vad tájairól. Nyáron Pal-Arinsal Európa egyik legjobb hegyikerékpár-parkjává, a Vallnord Bike Parkká alakul át, míg Arcalís a túrázók kedvelt célpontja.",
      ro: "",
      en: "Vallnord is a major ski and mountain destination located in the western valleys of Andorra, primarily in the parish of La Massana. It comprises two main sectors: Pal-Arinsal and Ordino-Arcalís. The Pal-Arinsal sector is a large, linked area known for its family-friendly slopes and excellent ski schools, connected by a cable car. In summer, it transforms into the renowned Vallnord Bike Park, a mecca for mountain bikers. The Ordino-Arcalís sector, though smaller and not directly linked, is famous for its exceptional snow quality and is considered one of the best freeride and off-piste destinations in the Pyrenees. Together, they offer a diverse range of mountain experiences year-round. Business Studies K8 - Branding and Marketing in the Tourism Industry."
    },
    factsAdvanced: {
      de: [],
      hu: [
        "A Pal-Arinsal síterep 63 km-nyi pályarendszerrel rendelkezik.",
        "Az Ordino Arcalís 30 km-nyi pályát és hatalmas freeride területeket kínál.",
        "Nyáron a Vallnord Bike Park mountain bike világkupa futamoknak ad otthont.",
        "Az Ordino Arcalís síterepén forgatták a James Bond: A holnap markában című film egyes jeleneteit.",
        "A két síterep között nincs közvetlen sí-összeköttetés, de a síbusz ingyenesen használható a bérlettel.",
        "Mindkét síterepen található sí- és snowboardiskola, valamint felszerelés-kölcsönző.",
        "A Pal-Arinsal pályái nagyrészt fenyőerdők között vezetnek.",
        "Az Ordino Arcalís a legészakibb fekvésű síterep Andorrában, ami garantálja a jó hóviszonyokat."
      ],
      ro: [],
      en: [
        "Until 2018, 'Vallnord' was the brand name for all three resorts; now Ordino-Arcalís is part of Grandvalira Resorts.",
        "The Vallnord Bike Park has hosted multiple UCI Mountain Bike World Cup events.",
        "The Pal-Arinsal sector has over 63 km of pistes.",
        "Ordino-Arcalís is often the last resort to close for the season due to its excellent snow preservation.",
        "The resorts offer 'ski-touring' and 'snowshoeing' circuits.",
        "The highest point in the ski area is Pic de Port Negre at 2,570m in Arinsal.",
        "The Freestyle ski school in Arinsal is highly regarded.",
        "The 'La Coma' restaurant in Arcalís is accessible only by ski or caterpillar track vehicle in winter."
      ]
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
    },
    descriptionAdvanced: {
      de: "",
      hu: "A Grandvalira a Pireneusok és Dél-Európa legnagyobb síterepe, amely Andorra keleti részén terül el. A hatalmas, összefüggő sírégió több mint 210 kilométernyi pályarendszerrel rendelkezik, amely hat különböző szektoron (Encamp, Canillo, El Tarter, Soldeu, Grau Roig, Pas de la Casa) keresztül érhető el. A modern és gyors felvonórendszernek köszönhetően az egész terület könnyedén bejárható. A Grandvalira minden tudásszintű síelő és snowboardos számára tökéletes választás: a kezdők számára kijelölt tanulópályáktól a fekete, világkupa-futamoknak is otthont adó lejtőkig minden megtalálható itt. Emellett számos snowpark, freeride zóna, és egyéb szórakozási lehetőség, mint a kutyaszánozás vagy a hótalpas túrázás, teszi teljessé a téli élményt.",
      ro: "",
      en: "Grandvalira is the largest ski resort in the Pyrenees and one of the largest in Europe. It stretches across the eastern part of Andorra, linking the parishes of Encamp and Canillo. The resort is a vast, interconnected domain formed by the union of several smaller resorts, including Pas de la Casa, Grau Roig, Soldeu, El Tarter, Canillo, and Encamp. It offers over 210 kilometers of pistes, catering to all levels of skiers and snowboarders. The resort is known for its modern and efficient lift system, high-quality snowmaking, and a wide variety of services, including top-tier ski schools, freestyle parks, and gourmet mountain restaurants. It regularly hosts major international sporting events, such as the Alpine Ski World Cup. Economics K8 - Mergers and Economies of Scale."
    },
    factsAdvanced: {
      de: [],
      hu: [
        "A síterep 210 km-nyi sípályával és 74 felvonóval rendelkezik.",
        "A legmagasabb pontja 2640 méter (Tossal de la Llosada).",
        "A soldeui Avet pálya rendszeresen ad otthont Alpesi Sí Világkupa futamoknak.",
        "A Funicamp felvonó Encampból 15 perc alatt a síterep szívébe szállítja a síelőket.",
        "A síterepen több mint 40 étterem és bár található a hegyen.",
        "Három snowpark (El Tarter, Grau Roig, Peretol) várja a freestyle síelőket és snowboardosokat.",
        "A Peretol snowpark éjszakai világítással is rendelkezik.",
        "A síterep Igló Hotelt is üzemeltet, ahol a vendégek jégből készült szobákban alhatnak."
      ],
      ro: [],
      en: [
        "The resort was created in 2003 by the merger of the Pas de la Casa-Grau Roig and Soldeu-El Tarter ski areas.",
        "It has a capacity to transport over 100,000 skiers per hour.",
        "The highest skiable point is Tossal de la Llosada at 2,560 meters.",
        "Grandvalira offers three snowparks and a dedicated freeride area.",
        "The resort includes several adventure circuits for children.",
        "The Funicamp gondola in Encamp provides access to the slopes in just 15 minutes.",
        "In summer, a part of the resort becomes the highest golf course in Europe.",
        "The resort now also includes the Ordino-Arcalís sector under its 'Grandvalira Resorts' umbrella brand."
      ]
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
    },
    descriptionAdvanced: {
      de: "",
      hu: "A Pic de Casamanya egy 2740 méter magas, jellegzetes, piramis alakú hegy Andorra földrajzi középpontjában. Bár nem a legmagasabb csúcs, központi elhelyezkedése miatt az egyik legnépszerűbb és leglátványosabb túracélpont az országban. A hegy az Ordino és Canillo közösségeket elválasztó gerincen fekszik. A csúcsra az Ordino felőli Coll d'Ordino hágóból indul a leggyakoribb útvonal, amely nem igényel technikai hegymászótudást, de jó állóképességet igen. A csúcsról tiszta időben lélegzetelállító, 360 fokos panoráma nyílik szinte egész Andorrára, a völgyekre és a környező hegycsúcsokra. A hegy különlegessége, hogy három, egymáshoz közeli csúcsa van: a déli, a középső és az északi.",
      ro: "",
      en: "Pic de Casamanya is one of the most iconic and centrally located mountains in Andorra. Standing at 2,740 meters, it's a prominent peak that separates the parishes of Ordino and Canillo. The mountain is particularly noted for its relatively straightforward ascent from the Coll d'Ordino, making it one of the most popular hikes in the country. Its central location means that the summit offers an extraordinary 360-degree panoramic view of almost the entire country, allowing hikers to identify many of Andorra's other major peaks and valleys. The mountain has three distinct summits: the south (2,740m), the middle (2,725m), and the north (2,752m). It's a botanical hotspot in summer, known for its fields of alpine flowers. Physical Geography K7 - Topography and Cartography."
    },
    factsAdvanced: {
      de: [],
      hu: [
        "A hegy három csúcsa a Casamanya Sud (2740 m), a Casamanya Mig (2725 m) és a Casamanya Nord (2695 m).",
        "A túra a Coll d'Ordino hágóról (1980 m) indul, a szintkülönbség kb. 760 méter.",
        "A hegy gerince természetes határt képez Ordino és Canillo között.",
        "A hegy oldalában nyáron legelésző lovakkal és tehenekkel lehet találkozni.",
        "A 'Casamanya' név valószínűleg a 'casa magna' (nagy ház) kifejezésből ered.",
        "A hegycsúcs a Szentivánéji (Sant Joan) tűzgyújtás egyik hagyományos helyszíne.",
        "A hegy geológiailag főként mészkőből és palából épül fel, ami gazdag növényvilágot eredményez.",
        "A csúcsról jól látható az egész Grandvalira és Vallnord sírégió is."
      ],
      ro: [],
      en: [
        "The name 'Casamanya' is thought to mean 'great mountain' in a pre-Roman language.",
        "The standard hike from Coll d'Ordino involves a vertical gain of about 750 meters.",
        "From the top, you can see the three main valleys that form Andorra.",
        "The ridge walk connecting the three peaks is a popular extension to the hike.",
        "The mountain is known for its large population of Pyrenean chamois.",
        "The slopes are covered with alpine pine and rhododendron at lower altitudes.",
        "It is considered the geographical center of Andorra.",
        "The hike is not technical but requires a good level of fitness due to the sustained ascent."
      ]
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
    },
    descriptionAdvanced: {
      de: "",
      hu: "A Sorteny-völgy Természeti Park egy 1080 hektáros védett terület Ordino közösségben, amely Andorra és a Pireneusok botanikai kincsesbányája. A parkban több mint 700 féle virágos növényfaj él, amelyek közül több mint 50 a Pireneusokban endemikus (csak itt található meg). A park bejáratánál egy botanikus kert és egy tanösvény segít a látogatóknak megismerni a helyi flórát. A völgyön keresztül folyik a Sorteny folyó, és több túraútvonal is behálózza, amelyek elvezetnek a Sorteny menedékházhoz, valamint a közeli Estany de l'Estanyó tóhoz és a Pic de l'Estanyó csúcsához (2915 m). A park nemcsak a növények, hanem az állatok, például a zerge, a mormota és a szakállas saskeselyű otthona is.",
      ro: "",
      en: "The Sorteny Valley Nature Park, located in the parish of Ordino, is a protected natural area renowned for its exceptional biodiversity, particularly its plant life. Often called the 'botanical garden of Andorra', the park is home to over 700 species of flowers and plants, many of which are native to the Pyrenees. The park covers over 1,000 hectares and is a haven for hikers, nature lovers, and scientists. There are several well-marked themed trails, a botanical garden with an information center, and a mountain hut ('Refugi Borda de Sorteny'). The park is also home to fauna such as the Pyrenean chamois, marmots, and the rare Pyrenean brook salamander. It's part of the Ordino UNESCO Biosphere Reserve. Biology K8 - Ecosystems and Biodiversity."
    },
    factsAdvanced: {
      de: [],
      hu: [
        "A parkot 1999-ben hozták létre Andorra első természeti parkjaként.",
        "A park az Ordinoi Bioszféra Rezervátum része.",
        "A 'Sorteny' név a 'surt' vagy 'sort' szóból ered, ami 'forrást' jelent.",
        "A parkban a lepkefajok száma is kiemelkedően magas.",
        "A Sorteny menedékház egész évben nyitva tart, és szállást biztosít a túrázóknak.",
        "A park bejáratánál található egy kis múzeum is, amely a völgy természeti és kulturális értékeit mutatja be.",
        "Nyáron vezetett botanikai és geológiai túrákat is szerveznek.",
        "Télen a park a sítúrázók és a hótalpasok kedvelt célpontja."
      ],
      ro: [],
      en: [
        "The park was created in 1999.",
        "It is crossed by the Sorteny river, a tributary of the Valira del Nord.",
        "The 'Refugi Borda de Sorteny' is a guarded hut offering meals and accommodation.",
        "The botanical garden showcases plants from different Pyrenean alpine habitats.",
        "Guided tours focusing on botany and geology are available in summer.",
        "The park contains old shepherds' huts, demonstrating its history of pastoral use.",
        "The highest peak within the park is the Pic de l'Estanyó (2,915 m).",
        "The park's logo features the 'Grandalla', Andorra's national flower."
      ]
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
      hu: "Kilátó lélegzetelállító panorámával.",
      ro: "Platformă de vizionare cu priveliști uluitoare.",
      en: "Observation deck with breathtaking views."
    },
    descriptionAdvanced: {
      de: "",
      hu: "A Roc del Quer kilátó egy lenyűgöző mérnöki alkotás és turisztikai látványosság Canillo közösségben, a Coll d'Ordino hágóra vezető úton. A kilátó egy 20 méter hosszú palló, amely 12 méter hosszan kinyúlik a hegyoldalból, több száz méteres mélység felett lebegve. A palló végén áll 'A gondolkodó' szobra, egy emberalak, aki a lába alatt elterülő völgyet és a hegyeket szemléli. A kilátóról páratlan, 180 fokos panoráma nyílik Canillo és Encamp völgyeire, valamint a környező hegycsúcsokra. A palló egy része üvegből készült, ami tovább fokozza az adrenalin-élményt. A Roc del Quer a közeli Tibeti híddal együtt Andorra egyik legnépszerűbb modern kori attrakciójává vált.",
      ro: "",
      en: "The Roc del Quer viewpoint is a spectacular observation deck located in the parish of Canillo, offering breathtaking panoramic views over the valleys of Montaup and Valira d'Orient. The viewpoint features a 20-meter-long walkway, 12 meters of which are suspended over thin air, creating a thrilling and immersive experience. The end of the walkway has a glass floor, allowing visitors to see the valley floor hundreds of meters below. At the very tip of the platform sits a striking sculpture of a pensive man, 'The Ponderer', by artist Miguel Ángel González. The viewpoint is easily accessible by car or by a tourist bus from Canillo and has become one of Andorra's most photographed modern attractions. Engineering & Design K7 - Structural Design and Materials."
    },
    factsAdvanced: {
      de: [],
      hu: [
        "A kilátó 1920 méteres tengerszint feletti magasságban található.",
        "A palló végén ülő szobor Miguel Ángel Gónzalez alkotása.",
        "A kilátó ingyenesen látogatható.",
        "A kilátó mellett egy geológiai tanösvény is található.",
        "A kilátót 2016-ban adták át.",
        "A 'Quer' szó sziklát vagy sziklaszirtet jelent.",
        "A kilátóhoz vezető út télen havas vagy jeges lehet, ezért óvatosság szükséges.",
        "A hely naplementekor különösen látványos."
      ],
      ro: [],
      en: [
        "The viewpoint is located on the Coll d'Ordino mountain road at an altitude of 1,913 meters.",
        "The walkway juts out from the rock face, providing an unobstructed 180-degree view.",
        "The sculpture 'The Ponderer' by Miguel Ángel González sits calmly at the end of the suspended platform.",
        "The structure is designed to withstand heavy snow and strong winds.",
        "It was inaugurated in 2016.",
        "There is a small entrance fee to access the walkway.",
        "The viewpoint is part of a scenic route that also includes the nearby Tibetan Bridge.",
        "It is a popular spot for watching sunsets."
      ]
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
    },
    descriptionAdvanced: {
      de: "Ordino ist die nordwestlichste Gemeinde Andorras und gilt als deren kulturelles Zentrum. Die gesamte Gemeinde wurde von der UNESCO zum Biosphärenreservat erklärt, was ihr Engagement für die Erhaltung des Gleichgewichts zwischen Mensch und Natur unterstreicht. Die Landschaft ist geprägt von hohen Gipfeln, darunter der Pic de Tristaina und der Pic de l'Estanyó. Das Skigebiet Ordino-Arcalís ist ein Paradies für Freerider. Die Dörfer wie Ordino, La Cortinada oder Ansalonga haben ihren traditionellen Charme mit Steinhäusern und Schieferdächern bewahrt. Kulturelle Highlights sind das Museum Casa d'Areny-Plandolit und die Eisenroute.",
      hu: "Ordino, Andorra északnyugati, leginkább érintetlen közössége, melynek teljes területe UNESCO bioszféra-rezervátum. Ez a cím is jelzi a régió elkötelezettségét a természet és az emberi tevékenység harmonikus egyensúlyának megőrzése mellett. A tájat magas csúcsok uralják, mint a Pic de Tristaina és a Pic de l'Estanyó. A falvak, mint Ordino, La Cortinada vagy Ansalonga, megőrizték hagyományos pireneusi építészetüket kőházaikkal és palatetőikkel. A kulturális örökség és a természeti szépségek egyedülálló ötvözete ez, ahol a Vasút (Ruta del Ferro) az ipari múltat, a Sorteny-völgy pedig a botanikai gazdagságot tárja fel. Földrajz K8 - Bioszféra-rezervátumok és fenntartható fejlődés.",
      ro: "",
      en: "Ordino, located in the northwest, is Andorra's most preserved parish and its entire territory is a designated UNESCO Biosphere Reserve. This status highlights the region's commitment to maintaining a harmonious balance between nature and human activity. The landscape is dominated by high peaks like Pic de Tristaina and Pic de l'Estanyó. Villages such as Ordino, La Cortinada, and Ansalonga have retained their traditional Pyrenean architecture with stone houses and slate roofs. It is a unique blend of cultural heritage and natural beauty, where the Iron Route (Ruta del Ferro) explores industrial history and the Sorteny Valley reveals botanical richness. Geography K8 - Biosphere Reserves and Sustainable Development."
    },
    factsAdvanced: {
      de: [
        "Ordino hat die geringste Bevölkerungsdichte in Andorra.",
        "Der Naturpark Sorteny ist für seinen botanischen Reichtum bekannt.",
        "Das Nationale Auditorium von Andorra befindet sich in Ordino.",
        "Die Eisenroute (Ruta del Ferro) folgt den Spuren der alten Eisenindustrie.",
        "Das Dorf Ordino war der letzte Ort in Andorra, der eine asphaltierte Straße erhielt.",
        "Die Gastronomie ist für ihre traditionellen Gerichte wie 'trinxat' oder Reis mit Pilzen bekannt."
      ],
      hu: [
        "Ordino rendelkezik a legalacsonyabb népsűrűséggel Andorrában.",
        "Itt található az ország Nemzeti Auditóriuma, a komolyzenei élet központja.",
        "A Postamúzeum bemutatja az andorrai postaszolgálat egyedülálló, spanyol-francia kettős rendszerét.",
        "Az Ordino-Arcalís síterep a freeride síelés nemzetközileg elismert paradicsoma.",
        "A helyi gasztronómia híres fogása a 'trinxat', egy káposztás-burgonyás étel.",
        "A Miniatűr Múzeum Nicolai Siadristy lélegzetelállító mikroszkopikus alkotásait őrzi.",
        "A közösség címerében a hegyek és a víz motívumai is megjelennek.",
        "A régióban a dohánytermesztés helyett a turizmus vált a fő bevételi forrássá."
      ],
      ro: [],
      en: [
        "Ordino has the lowest population density in Andorra.",
        "It is home to the country's National Auditorium, the center of classical music life.",
        "The Postal Museum explains Andorra's unique dual Spanish-French postal system.",
        "The Ordino-Arcalís ski resort is an internationally acclaimed paradise for freeride skiing.",
        "A famous local gastronomic dish is 'trinxat', made from cabbage and potatoes.",
        "The Miniature Museum houses the breathtaking microscopic creations of Nicolai Siadristy.",
        "The parish's coat of arms features motifs of mountains and water.",
        "In this region, tourism has replaced tobacco cultivation as the main source of income."
      ]
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
    },
    descriptionAdvanced: {
      de: "Canillo ist die flächenmäßig größte der sieben Gemeinden Andorras und ein wichtiges touristisches und religiöses Zentrum. Hier befindet sich das Heiligtum von Meritxell, die Heimat der Schutzpatronin des Landes. Die Gemeinde ist ein Hauptzugangspunkt zum Skigebiet Grandvalira, mit Sektoren in Canillo, Soldeu und El Tarter. Zu den modernen Attraktionen gehören der Aussichtspunkt Roc del Quer und die Tibetische Brücke von Canillo. Trotz seiner Modernität bewahrt Canillo auch Schätze der romanischen Kunst, wie die Kirche Sant Joan de Caselles. Der Palau de Gel (Eispalast) in Canillo bietet das ganze Jahr über Freizeitaktivitäten.",
      hu: "Canillo, Andorra legnagyobb területű közössége, a vallási és kalandturizmus központja. Itt emelkedik a Meritxell-szentély, az ország védőszentjének otthona, melynek modern bazilikáját Ricardo Bofill tervezte. A közösség a Grandvalira sírégió kulcsfontosságú része, a Soldeu-El Tarter és Canillo szektorokkal. A modern kor vonzerejét a Roc del Quer kilátó lebegő pallója és a világ egyik leghosszabb gyalogos függőhídja, a Tibeti híd képviseli. Canillo sikeresen ötvözi a modern fejlesztéseket a történelmi örökség megőrzésével, amire a Sant Joan de Caselles román kori templom a legjobb példa. Építészet K8 - Tradíció és innováció a hegyvidéki építészetben.",
      ro: "",
      en: "Canillo, Andorra's largest parish by area, is a hub for religious and adventure tourism. It is home to the Sanctuary of Meritxell, dedicated to the country's patron saint, with a modern basilica designed by Ricardo Bofill. The parish is a key part of the Grandvalira ski region, with the Soldeu-El Tarter and Canillo sectors. Modern attractions include the floating walkway of the Roc del Quer viewpoint and the Tibetan Bridge, one of the world's longest pedestrian suspension bridges. Canillo successfully combines modern development with the preservation of historical heritage, best exemplified by the Romanesque church of Sant Joan de Caselles. Architecture K8 - Tradition and Innovation in Mountain Architecture."
    },
    factsAdvanced: {
      de: [
        "Soldeu, ein Dorf in Canillo, ist regelmäßiger Austragungsort von alpinen Ski-Weltcup-Rennen.",
        "Die Tibetische Brücke von Canillo ist 603 Meter lang.",
        "Canillo ist die höchstgelegene Gemeinde des Landes.",
        "Das Motorradmuseum in Canillo zeigt eine bedeutende Sammlung historischer Zweiräder.",
        "Der Nationalfeiertag Andorras am 8. September wird zu Ehren der Muttergottes von Meritxell gefeiert.",
        "Die Gemeinde besteht aus zahlreichen kleinen Dörfern und Weilern wie Incles, Prats oder Ransol."
      ],
      hu: [
        "Soldeu településen rendszeresen rendeznek alpesi sí világkupa-futamokat.",
        "A Tibeti híd 603 méter hosszú és 158 méter magasan ível át a völgy felett.",
        "Canillo az ország legmagasabban fekvő közössége.",
        "A Motorkerékpár-múzeum Európa egyik legjelentősebb magángyűjteményét mutatja be.",
        "Szeptember 8-a, a Meritxelli Szűzanya napja, Andorra nemzeti ünnepe.",
        "A Palau de Gel (Jégpalota) egész évben nyitva álló sportkomplexum.",
        "A Val d'Incles egy L-alakú gleccservölgy, amely nyáron népszerű túrahelyszín.",
        "A közösség több mint tíz kisebb faluból és településrészből áll."
      ],
      ro: [],
      en: [
        "The village of Soldeu regularly hosts Alpine Ski World Cup races.",
        "The Tibetan Bridge is 603 meters long and spans the valley at a height of 158 meters.",
        "Canillo is the highest parish in the country.",
        "The Motorcycle Museum displays one of Europe's most significant private collections.",
        "September 8th, the day of Our Lady of Meritxell, is Andorra's national holiday.",
        "The Palau de Gel (Ice Palace) is a sports complex open year-round.",
        "The Val d'Incles is a U-shaped glacial valley and a popular hiking spot in summer.",
        "The parish consists of more than ten small villages and hamlets."
      ]
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
    },
    descriptionAdvanced: {
      de: "Encamp liegt im Herzen von Andorra und ist eine Gemeinde der Kontraste. Sie besteht aus zwei sehr unterschiedlichen Hauptorten: Encamp, einem städtischen Zentrum nahe der Hauptstadt, und Pas de la Casa, einem hochgelegenen Skiort an der französischen Grenze. Der Funicamp, eine 6 km lange Seilbahn, verbindet Encamp direkt mit dem Herzen des Skigebiets Grandvalira. Kulturell bietet Encamp das Nationale Automobilmuseum und das Elektrizitätsmuseum. Das historische Ensemble von Les Bons, mit seiner romanischen Kirche und dem Verteidigungsturm, zeugt von der mittelalterlichen Vergangenheit der Region.",
      hu: "Encamp, Andorra földrajzi középpontjában, a kontrasztok közössége. Magában foglalja a főváros közeli, nyüzsgő Encamp várost és a francia határon fekvő, magashegyi síparadicsomot, Pas de la Casát. A két településrészt a Pireneusok legmagasabb közúti hágója, a Port d'Envalira is összeköti. A Funicamp, egy 6 km hosszú kabinos felvonó, közvetlen összeköttetést biztosít Encampból a Grandvalira síterep szívébe. A technikai érdekességek iránt fogékonyak számára az Autómúzeum és az Elektromossági Múzeum kínál egyedülálló élményt, míg a Les Bons történelmi komplexum a középkori Andorra világába kalauzol. Technika és történelem K8 - Az infrastruktúra hatása a hegyvidéki közösségekre.",
      ro: "",
      en: "Encamp, in the geographical center of Andorra, is a parish of contrasts. It includes the bustling town of Encamp near the capital and the high-altitude ski paradise of Pas de la Casa on the French border. The two settlements are also connected by the Port d'Envalira, the highest road pass in the Pyrenees. The Funicamp, a 6 km long cable car, provides a direct link from Encamp to the heart of the Grandvalira ski area. For those interested in technology, the Automobile Museum and the Electricity Museum offer unique experiences, while the Les Bons historical complex transports visitors to medieval Andorra. Technology and History K8 - The Impact of Infrastructure on Mountain Communities."
    },
    factsAdvanced: {
      de: [
        "Pas de la Casa ist der einzige Grenzübergang nach Frankreich.",
        "Der Port d'Envalira ist der höchste Straßenpass der Pyrenäen.",
        "Die Pfarrkirche Santa Eulàlia in Encamp hat den höchsten romanischen Glockenturm in Andorra.",
        "Das Fest von Sant Joan wird im Juni mit traditionellen Fallas (Fackeln) gefeiert.",
        "Der Gletschersee-Kreis von Pessons befindet sich im Sektor Grau Roig.",
        "Encamp ist die drittbevölkerungsreichste Gemeinde des Landes."
      ],
      hu: [
        "Pas de la Casa az egyetlen közúti határátkelő Andorra és Franciaország között.",
        "A Port d'Envalira hágó 2408 méter magas.",
        "A Santa Eulàlia templom román stílusú harangtornya a legmagasabb az országban.",
        "A 'falles' nevű nyári napfordulós fáklyás felvonulás az UNESCO szellemi kulturális örökség része.",
        "A Pessons-tavak gleccsertó-együttese a Grau Roig szektorban található, amely a közösséghez tartozik.",
        "Encamp Andorra harmadik legnépesebb közössége.",
        "A rádiózás iránt érdeklődők számára a Radio Andorra egykori adóállomása is látogatható.",
        "Az Engolasters-tó vízerőműve látja el az ország jelentős részét energiával."
      ],
      ro: [],
      en: [
        "Pas de la Casa is the only road border crossing between Andorra and France.",
        "The Port d'Envalira pass is 2,408 meters high.",
        "The Romanesque bell tower of the Santa Eulàlia church is the tallest in the country.",
        "The 'falles', a summer solstice torchlight procession, is part of UNESCO's intangible cultural heritage.",
        "The Pessons glacial lake complex is located in the Grau Roig sector, which belongs to the parish.",
        "Encamp is the third most populous parish in Andorra.",
        "For radio enthusiasts, the former transmitter station of Radio Andorra can be visited.",
        "The Engolasters Lake hydroelectric power station supplies a significant part of the country with energy."
      ]
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
    },
    descriptionAdvanced: {
      de: "La Massana ist als die 'aktivste' Gemeinde Andorras bekannt und ein Paradies für Outdoor-Enthusiasten. Hier befindet sich der höchste Berg des Landes, der Coma Pedrosa (2.942 m), dessen Umgebung als Naturpark geschützt ist. Das Skigebiet Pal-Arinsal (Teil von Vallnord) bietet im Winter Pisten für alle Niveaus. Im Sommer wird es zum Vallnord Bike Park, einem der renommiertesten Mountainbike-Ziele Europas, das regelmäßig Weltcup-Veranstaltungen ausrichtet. Neben dem Sport bietet La Massana auch Kultur, wie das Comic-Museum und das Interpretationszentrum Farga Rossell, das die Bedeutung der Eisenindustrie zeigt.",
      hu: "La Massana, az 'aktív' közösség, a szabadtéri sportok andorrai fellegvára. Itt emelkedik az ország legmagasabb pontja, a 2942 méteres Coma Pedrosa, amely egyben egy védett természeti park központja is. Télen a Pal-Arinsal síterep, nyáron pedig a világhírű Vallnord Bike Park vonzza a sportok szerelmeseit. A közösség központjából induló kabinos felvonó gyors és kényelmes hozzáférést biztosít a hegyekhez. La Massana azonban nemcsak a sportról szól; a Farga Rossell vaskohó-múzeum az ipari örökséget, a Képregénymúzeum pedig a modern művészeteket képviseli, bemutatva a közösség sokszínűségét. Földrajz és gazdaság K8 - A sportturizmusra épülő gazdasági modellek.",
      ro: "",
      en: "La Massana, the 'active' parish, is Andorra's stronghold for outdoor sports. It is home to the country's highest point, the 2,942-meter Coma Pedrosa, which is also the center of a protected nature park. In winter, the Pal-Arinsal ski resort attracts sports lovers, while in summer, it's the world-famous Vallnord Bike Park. A cable car from the parish center provides quick and convenient access to the mountains. However, La Massana is not just about sports; the Farga Rossell ironworks museum represents industrial heritage, and the Comic Museum showcases modern arts, demonstrating the parish's diversity. Geography and Economics K8 - Economic Models Based on Sports Tourism."
    },
    factsAdvanced: {
      de: [
        "Die Dörfer Pal und Arinsal sind wichtige Touristenzentren innerhalb der Gemeinde.",
        "Die Seilbahn von La Massana bietet direkten Zugang zum Sektor Pal.",
        "Das Dorf Pal ist ein gut erhaltenes Beispiel für traditionelle Pyrenäen-Architektur.",
        "La Massana ist bekannt für seine lebhafte Atmosphäre mit vielen Restaurants und Bars.",
        "Der Wochenmarkt findet jeden Donnerstagmorgen statt.",
        "Die Kirche Sant Climent de Pal ist ein herausragendes Beispiel der romanischen Kunst."
      ],
      hu: [
        "A Pal és Arinsal falvak a közösség két legfontosabb turisztikai központja.",
        "A Vallnord Bike Park rendszeresen ad otthont mountain bike világkupa-futamoknak.",
        "A Pal falu az egyik legjobb állapotban megőrzött példája a hagyományos pireneusi építészetnek.",
        "A közösség híres a nyüzsgő, barátságos hangulatáról, számos étteremmel és bárral.",
        "A Sant Climent de Pal templom ikerablakos harangtornya egyedülálló Andorrában.",
        "A 'Ruta del Ferro' (Vas út) egy része áthalad a közösség területén.",
        "Nyáron a sífelvonókat a túrázók és a hegyi kerékpárosok szállítására használják.",
        "A közösségben több via ferrata (vasalt út) is található a sziklamászás kedvelőinek."
      ],
      ro: [],
      en: [
        "The villages of Pal and Arinsal are the two most important tourist centers in the parish.",
        "The Vallnord Bike Park regularly hosts mountain bike World Cup races.",
        "The village of Pal is one of the best-preserved examples of traditional Pyrenean architecture.",
        "The parish is famous for its lively, friendly atmosphere with numerous restaurants and bars.",
        "The twin-windowed bell tower of the Sant Climent de Pal church is unique in Andorra.",
        "Part of the 'Ruta del Ferro' (Iron Route) passes through the parish.",
        "In summer, ski lifts are used to transport hikers and mountain bikers.",
        "There are several via ferrata routes in the parish for climbing enthusiasts."
      ]
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
    },
    descriptionAdvanced: {
      de: "Sant Julià de Lòria ist das Tor zu Andorra von Spanien aus. Als südlichste und tiefstgelegene Gemeinde genießt sie ein milderes, mediterraneres Klima als der Rest des Landes. Historisch war die Region ein Zentrum des Tabakanbaus, wie das Tabakmuseum in der ehemaligen Reig-Fabrik eindrucksvoll dokumentiert. Die Hauptattraktion heute ist Naturlandia, ein riesiger Abenteuerpark in den Wäldern von La Rabassa, bekannt für seine Tiergehege und die alpine Rodelbahn Tobotronc. Die Gemeinde beherbergt auch einen Teil des Universitätscampus und hat ein lebendiges kulturelles Leben. Die Pont de la Margineda, eine mittelalterliche Brücke, ist ein wichtiges historisches Wahrzeichen.",
      hu: "Sant Julià de Lòria, Andorra déli kapuja, ahol az ország a szomszédos Spanyolországgal találkozik. Legalacsonyabb fekvésének köszönhetően klímája enyhébb, ami történelmileg a dohánytermesztés központjává tette. Ezt a múltat a Dohánymúzeum őrzi. Ma a közösség fő vonzereje a Naturlandia kalandpark, amely a La Rabassa erdőben helyezkedik el, és olyan egyedülálló attrakciókkal büszkélkedhet, mint a Tobotronc, a világ leghosszabb természetes szánkópályája. Sant Julià de Lòria emellett egyetemi város is, az Andorrai Egyetem campusa élénk, fiatalos hangulatot kölcsönöz neki. A középkori Pont de la Margineda híd a történelmi örökség fontos tanúja. Gazdaságföldrajz K7 - Mezőgazdaságtól a szolgáltatásokig: egy régió átalakulása.",
      ro: "",
      en: "Sant Julià de Lòria, Andorra's southern gateway, is where the country meets neighboring Spain. Due to its lower altitude, its climate is milder, which historically made it the center of tobacco cultivation. This past is preserved in the Tobacco Museum. Today, the parish's main attraction is the Naturlandia adventure park, located in the La Rabassa forest, boasting unique attractions like the Tobotronc, the world's longest natural toboggan run. Sant Julià de Lòria is also a university town, with the University of Andorra campus giving it a lively, youthful atmosphere. The medieval Pont de la Margineda bridge is an important witness to its historical heritage. Economic Geography K7 - From Agriculture to Services: The Transformation of a Region."
    },
    factsAdvanced: {
      de: [
        "Die Gemeinde grenzt an die spanische Region Katalonien.",
        "Der Tobotronc ist mit 5,3 km die längste alpine Rodelbahn der Welt.",
        "Die Kirche Sant Serni de Nagol aus dem 11. Jahrhundert ist ein Juwel der Romanik.",
        "In Sant Julià de Lòria gibt es zahlreiche Weingüter, die die Weinbautradition wiederbeleben.",
        "Die Festa Major von Sant Julià ist eine der größten in Andorra.",
        "Der Grenzübergang ist rund um die Uhr geöffnet."
      ],
      hu: [
        "A közösség közvetlenül határos a spanyolországi Katalóniával.",
        "A Tobotronc 5,3 km hosszú és 400 méter szintkülönbséget küzd le.",
        "A 11. századi Sant Serni de Nagol templom egy sziklaszirtre épült.",
        "A közösségben újjáéled a bortermelés, több magaslati borászat is működik itt.",
        "Itt található Andorra egyetlen állandó határátkelője Spanyolország felé.",
        "A Naturlandia állatparkjában a Pireneusok őshonos állatai láthatók természetes környezetükben.",
        "A közösség Festa Major ünnepe az egyik legnagyobb és legnépszerűbb az országban.",
        "A Juberri kortárs szoborkert egy meglepő és érdekes látnivaló."
      ],
      ro: [],
      en: [
        "The parish directly borders the Spanish region of Catalonia.",
        "The Tobotronc is 5.3 km long and descends 400 meters in altitude.",
        "The 11th-century church of Sant Serni de Nagol is built on a cliff.",
        "Wine production is being revived in the parish, with several high-altitude wineries operating here.",
        "Andorra's only permanent border crossing with Spain is located here.",
        "Native Pyrenean animals can be seen in their natural environment at the Naturlandia animal park.",
        "The parish's Festa Major celebration is one of the largest and most popular in the country.",
        "The Juberri contemporary sculpture garden is a surprising and interesting sight."
      ]
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
    },
    descriptionAdvanced: {
      de: "Escaldes-Engordany ist die jüngste Gemeinde Andorras, die 1978 durch die Abspaltung von Andorra la Vella entstand. Sie ist bekannt für ihr reichlich vorhandenes Thermalwasser, das im spektakulären Thermalzentrum Caldea-INÚU genutzt wird. Die Gemeinde ist ein wichtiges Handels- und Geschäftszentrum, dessen Hauptschlagader, die Avinguda Carlemany, eine Fußgängerzone ist, die zum Einkaufen einlädt. Ein Teil des UNESCO-Weltkulturerbes Madriu-Perafita-Claror-Tal liegt auf dem Gebiet der Gemeinde. Kulturell ist Escaldes-Engordany mit dem Carmen Thyssen Museum, dem Museum für Parfüm und dem Zentrum für Kunst (CAEE) sehr gut aufgestellt.",
      hu: "Escaldes-Engordany, Andorra legfiatalabb, 1978-ban alapított közössége, amely a termálvíz és a modern kereskedelem köré épült. Itt található a Caldea-INÚU, Európa legnagyobb hegyi termálfürdő-komplexuma, amelynek futurisztikus üvegépülete a város szimbólumává vált. A közösség gyakorlatilag egybeépült a fővárossal, a gyalogosított Avinguda Carlemany sugárút Andorra egyik legfontosabb bevásárlóutcája. A kereskedelem mellett a kultúra is fontos szerepet játszik: a Carmen Thyssen Múzeum, a Parfümmúzeum és a Művészeti Központ (CAEE) is itt kapott helyet. A közösség területére nyúlik be a Madriu-Perafita-Claror völgy, amely az UNESCO világörökség része. Városföldrajz K8 - Városfejlődés, funkcionális zónák.",
      ro: "",
      en: "Escaldes-Engordany, Andorra's youngest parish founded in 1978, is built around thermal water and modern commerce. It is home to Caldea-INÚU, Europe's largest mountain thermal spa complex, whose futuristic glass building has become a symbol of the town. The parish is practically merged with the capital, and the pedestrianized Avinguda Carlemany is one of Andorra's most important shopping streets. Besides commerce, culture also plays a significant role: the Carmen Thyssen Museum, the Perfume Museum, and the Art Center (CAEE) are all located here. The parish also includes a part of the Madriu-Perafita-Claror Valley, a UNESCO World Heritage site. Urban Geography K8 - Urban Development, Functional Zones."
    },
    factsAdvanced: {
      de: [
        "Die Gemeinde hat die zweithöchste Bevölkerungszahl nach Andorra la Vella.",
        "Der Name 'Escaldes' leitet sich vom Verb 'escaldar' (brühen/erhitzen) ab, was auf das heiße Wasser hinweist.",
        "Das Caldea Spa wurde 1994 eröffnet.",
        "Das jährliche Jazzfestival ist eine wichtige kulturelle Veranstaltung.",
        "Der historische Kern von Engordany hat seine traditionelle Architektur bewahrt.",
        "Die Kirche Sant Pere Màrtir ist ein Beispiel für die Neo-Romanik."
      ],
      hu: [
        "Escaldes-Engordany Andorra második legnépesebb közössége.",
        "A 'caldes' szó forró vizet jelent, utalva a termálforrásokra.",
        "A Caldea fürdőt a híres francia építész, Jean-Michel Ruols tervezte.",
        "A minden évben megrendezett jazzfesztivál fontos kulturális esemény.",
        "Engordany történelmi magja megőrizte hagyományos pireneusi építészetét.",
        "A Sant Pere Màrtir templom a neoromán stílus egy példája.",
        "A közösség ad otthont Andorra központi kórházának is.",
        "A Valira d'Orient és a Valira del Nord folyók itt egyesülnek, létrehozva a Gran Valira folyót."
      ],
      ro: [],
      en: [
        "Escaldes-Engordany is the second most populous parish in Andorra.",
        "The word 'caldes' means hot water, referring to the thermal springs.",
        "The Caldea spa was designed by the famous French architect Jean-Michel Ruols.",
        "The annual jazz festival is an important cultural event.",
        "The historic core of Engordany has preserved its traditional Pyrenean architecture.",
        "The church of Sant Pere Màrtir is an example of neo-Romanesque style.",
        "The parish is also home to Andorra's central hospital.",
        "The Valira d'Orient and Valira del Nord rivers merge here, creating the Gran Valira river."
      ]
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
    },
    descriptionAdvanced: {
      de: "Andorra la Vella ist die Hauptstadt und das politische, wirtschaftliche und kulturelle Zentrum des Fürstentums. Sie ist die höchstgelegene Hauptstadt Europas und ein Einkaufsparadies mit zollfreien Geschäften entlang der Avinguda Meritxell und der Avinguda Príncep Benlloch. Neben dem modernen Treiben bietet das historische Viertel 'Barri Antic' mit seinen Kopfsteinpflasterstraßen und der Casa de la Vall, dem ehemaligen Parlamentssitz, einen Einblick in die Vergangenheit. Die Skulptur 'Die Noblesse der Zeit' von Salvador Dalí ist zu einem modernen Wahrzeichen der Stadt geworden.",
      hu: "Andorra la Vella, a hercegség fővárosa és lüktető szíve, Európa legmagasabban fekvő fővárosa. A város a politikai, gazdasági és kulturális élet központja. A bevásárlóturizmus fellegvára, melynek fő artériái a Meritxell és a Príncep Benlloch sugárutak, tele vámmentes üzletekkel. A modern forgatag mellett a 'Barri Antic' (Óváros) macskaköves utcái történelmi hangulatot árasztanak, itt áll a Casa de la Vall, a régi parlament épülete. A modern építészetet a parlament új épülete és a kormányzati negyed képviseli. Salvador Dalí 'Az idő nemessége' című szobra a város egyik legnépszerűbb fotópontja. Andorra la Vella egy kozmopolita város, ahol a hegyvidéki táj és a modern városi élet találkozik. Társadalomföldrajz K8 - Fővárosok szerepe egy ország életében.",
      ro: "",
      en: "Andorra la Vella, the capital and vibrant heart of the principality, is Europe's highest capital city. The city is the center of political, economic, and cultural life. It's a haven for shopping tourism, with its main arteries, Avinguda Meritxell and Avinguda Príncep Benlloch, filled with duty-free shops. Besides the modern hustle and bustle, the 'Barri Antic' (Old Town) with its cobblestone streets exudes a historical atmosphere, home to the Casa de la Vall, the old parliament building. Modern architecture is represented by the new parliament building and the government quarter. Salvador Dalí's sculpture 'The Nobility of Time' is one of the city's most popular photo spots. Andorra la Vella is a cosmopolitan city where mountain scenery meets modern urban life. Social Geography K8 - The Role of Capital Cities in a Country's Life."
    },
    factsAdvanced: {
      de: [
        "Andorra la Vella ist die bevölkerungsreichste Gemeinde des Landes.",
        "Die Gemeinde umfasst auch die Stadt Santa Coloma.",
        "Die Kirche Sant Esteve hat eine romanische Apsis aus dem 12. Jahrhundert.",
        "Der Parc Central ist die grüne Lunge der Stadt und ein beliebter Erholungsort.",
        "Die Festa Major, das größte Fest der Stadt, findet jährlich Anfang August statt.",
        "Von Westen her bietet die Stadt Zugang zum UNESCO-Welterbetal Madriu-Perafita-Claror."
      ],
      hu: [
        "Andorra la Vella a legnépesebb közösség az országban.",
        "A közösséghez tartozik a főváros és Santa Coloma település is.",
        "A Sant Esteve templom 12. századi román kori apszissal rendelkezik.",
        "A Parc Central a város zöld tüdeje, népszerű pihenőhely.",
        "A város nagy ünnepe, a Festa Major, minden év augusztus elején zajlik.",
        "Nyugatról innen lehet belépni a Madriu-Perafita-Claror UNESCO világörökségi völgybe.",
        "A város 1023 méteres tengerszint feletti magasságban fekszik.",
        "A város címere egy zöld fát ábrázol kék háttér előtt, utalva a völgyre és a folyóra."
      ],
      ro: [],
      en: [
        "Andorra la Vella is the most populous parish in the country.",
        "The parish also includes the town of Santa Coloma.",
        "The Church of Sant Esteve has a 12th-century Romanesque apse.",
        "Parc Central is the city's green lung and a popular recreational spot.",
        "The city's major festival, the Festa Major, takes place annually in early August.",
        "From the west, the city provides access to the Madriu-Perafita-Claror UNESCO World Heritage Valley.",
        "The city is located at an altitude of 1,023 meters above sea level.",
        "The city's coat of arms depicts a green tree on a blue background, referring to the valley and the river."
      ]
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
    },
    descriptionAdvanced: {
      de: "",
      hu: "Az Ordinóban, egy régi gabonatárolóban (borda) berendezett Postamúzeum lenyűgöző bepillantást nyújt Andorra egyedülálló kommunikációs történelmébe. A kiállítás bemutatja, hogyan működött az ország kettős, spanyol és francia postarendszere, és hogyan juttatták el a leveleket gyalog, a hegyeken keresztül a motorizáció elterjedése előtt. A múzeum büszkesége a teljes andorrai bélyeggyűjtemény, az 1928-as első kiadástól napjainkig. Interaktív elemek és audiovizuális bemutatók segítségével a látogatók megismerhetik a bélyegkészítés folyamatát és a postások kalandos munkáját. Ez a múzeum nemcsak a filatélia iránt érdeklődőknek, hanem a történelem és a technika fejlődése iránt fogékonyaknak is izgalmas élményt nyújt. Technikatörténet K7 - Kommunikációs eszközök fejlődése.",
      ro: "",
      en: "Housed in a former barn (borda) in Ordino, the Postal Museum offers a fascinating insight into Andorra's unique communication history. The exhibition shows how the country's dual Spanish and French postal system worked and how mail was delivered on foot over the mountains before motorization. The museum's pride is the complete Andorran stamp collection, from the first issue in 1928 to the present day. Interactive elements and audiovisual displays allow visitors to learn about the stamp-making process and the adventurous work of postmen. This museum is an exciting experience not only for philatelists but also for those interested in the history and development of technology. History of Technology K7 - Development of Communication Devices."
    },
    factsAdvanced: {
      de: [],
      hu: [
        "Andorra ma is két postaszolgálatot működtet: a spanyol Correos-t és a francia La Poste-ot.",
        "A múzeum egy gyönyörűen felújított, hagyományos andorrai kőépületben található.",
        "A kiállítás bemutatja a postások régi egyenruháit és felszereléseit.",
        "Egy korhű postahivatal enteriőrje is megtekinthető.",
        "A múzeum az ordinói 'Vas útja' és 'Habitat útvonal' része.",
        "A bélyegek nemcsak postai díjak lerovására szolgáltak, hanem az ország imázsának formálására is.",
        "A múzeumban külön foglalkoznak a légi posta bevezetésének történetével.",
        "Különleges kiállítási darab egy régi posta-motorkerékpár."
      ],
      ro: [],
      en: [
        "Andorra still operates two postal services: the Spanish Correos and the French La Poste.",
        "The museum is housed in a beautifully restored traditional Andorran stone building.",
        "The exhibition displays old postmen's uniforms and equipment.",
        "A period-correct post office interior can also be viewed.",
        "The museum is part of Ordino's 'Iron Route' and 'Habitat Route'.",
        "Stamps were used not only to pay postal fees but also to shape the country's image.",
        "A special section in the museum deals with the history of the introduction of airmail.",
        "A special exhibit is an old postal motorcycle."
      ]
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
    },
    descriptionAdvanced: {
      de: "",
      hu: "Az ordinói Vasút (Ruta del Ferro) egy könnyen bejárható kulturális túraútvonal, amely Andorra 17. és 19. század közötti vaskohászati múltjának állít emléket. Az ösvény a llortsi bányától, ahol egykor a vasércet fejtették, egészen a La Massanában található Farga Rossell kovácsműhelyig vezet. Útközben információs táblák és kortárs művészek (pl. Rachid Khimoune, Jordi Casamajor) által készített, a témához kapcsolódó szobrok teszik még érdekesebbé a sétát. A túra a Valira del Nord folyó mentén halad, összekapcsolva a természetet, az ipari örökséget és a modern művészetet. Különösen ajánlott családoknak és azoknak, akik szeretnék megérteni, hogyan formálta a vas az andorrai tájat és társadalmat. Ipartörténet K8 - A természeti erőforrások hasznosítása.",
      ro: "",
      en: "The Iron Route (Ruta del Ferro) in Ordino is an easy-to-follow cultural hiking trail that commemorates Andorra's iron and steel past between the 17th and 19th centuries. The path leads from the Llorts mine, where iron ore was once extracted, to the Farga Rossell forge in La Massana. Along the way, information boards and topic-related sculptures by contemporary artists (e.g., Rachid Khimoune, Jordi Casamajor) make the walk even more interesting. The tour runs along the Valira del Nord river, combining nature, industrial heritage, and modern art. It is especially recommended for families and for those who want to understand how iron shaped the Andorran landscape and society. Industrial History K8 - The Utilization of Natural Resources."
    },
    factsAdvanced: {
      de: [],
      hu: [
        "A teljes útvonal körülbelül 4 kilométer hosszú.",
        "Nyáron vezetett túrák indulnak a llortsi bányába, ahol a látogatók sisakot kapnak.",
        "A szobrok a 'Művészet és Természet' elnevezésű projekt keretében kerültek ide.",
        "Az útvonal része egy határokon átnyúló projektnek, amely a Pireneusok vaskohászati örökségét mutatja be.",
        "A Farga Rossell ma egy interaktív múzeum, ahol bemutatják a vízi kalapács működését.",
        "Az ösvény mentén több pihenőhely és forrás is található.",
        "A llortsi bányából származó vasérc rendkívül jó minőségű volt.",
        "Az út mentén láthatók a szénégetéshez használt egykori boksák maradványai is."
      ],
      ro: [],
      en: [
        "The entire route is about 4 kilometers long.",
        "In summer, guided tours are available to the Llorts mine, where visitors are given helmets.",
        "The sculptures were placed here as part of a project called 'Art and Nature'.",
        "The route is part of a cross-border project showcasing the iron heritage of the Pyrenees.",
        "Farga Rossell is now an interactive museum demonstrating the operation of the water-powered hammer.",
        "There are several rest areas and springs along the trail.",
        "The iron ore from the Llorts mine was of extremely high quality.",
        "Remains of former charcoal burning clamps can also be seen along the route."
      ]
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
    },
    descriptionAdvanced: {
      de: "",
      hu: "A canillói Motorkerékpár-múzeum a kétkerekűek szerelmeseinek paradicsoma. A Palau de Gel (Jégpalota) épületében található tárlat Pere Augé magángyűjteményét mutatja be, amely több mint 150 egyedi és ritka darabból áll, illusztrálva a motorkerékpározás történetét a kezdetektől napjainkig. A kronologikusan rendezett kiállítás lehetővé teszi a technológiai és dizájnbeli fejlődés nyomon követését. Legendás márkák, mint a Harley-Davidson, a BMW és a Ducati mellett igazi ritkaságok is megcsodálhatók. A múzeum nemcsak a gépekről szól, hanem azokról a társadalmi változásokról is, amelyeket a motorok elterjedése hozott, a szabadság és a lázadás szimbólumaként. Technikatörténet K8 - A belső égésű motorok fejlődése.",
      ro: "",
      en: "The Motorcycle Museum in Canillo is a paradise for lovers of two-wheelers. Located in the Palau de Gel (Ice Palace) building, the exhibition showcases Pere Augé's private collection of more than 150 unique and rare pieces, illustrating the history of motorcycling from its beginnings to the present day. The chronologically arranged exhibition allows for tracking the development of technology and design. Alongside legendary brands like Harley-Davidson, BMW, and Ducati, true rarities can also be admired. The museum is not just about the machines, but also about the social changes that the spread of motorcycles brought, as a symbol of freedom and rebellion. History of Technology K8 - The Development of Internal Combustion Engines."
    },
    factsAdvanced: {
      de: [],
      hu: [
        "A gyűjteményt Európa egyik legfontosabb magángyűjteményeként tartják számon.",
        "A legrégebbi kiállított modell egy 1896-os Hildebrand & Wolfmüller.",
        "A múzeum interaktív elemekkel és audiovizuális bemutatókkal teszi élvezetesebbé a látogatást.",
        "A gyűjtemény folyamatosan bővül újabb és újabb darabokkal.",
        "Időszakos kiállításokat is rendeznek egy-egy téma vagy márka köré.",
        "A múzeum bemutatja a motorkerékpárok szerepét a háborúkban és a filmekben is.",
        "Külön részleg foglalkozik az oldalkocsis motorkerékpárokkal.",
        "A belépőjegy megvásárolható kombinálva a Jégpalota szolgáltatásaival."
      ],
      ro: [],
      en: [
        "The collection is considered one of the most important private collections in Europe.",
        "The oldest model on display is an 1896 Hildebrand & Wolfmüller.",
        "The museum makes the visit more enjoyable with interactive elements and audiovisual displays.",
        "The collection is constantly expanding with new pieces.",
        "Temporary exhibitions are also organized around a particular theme or brand.",
        "The museum also shows the role of motorcycles in wars and films.",
        "A separate section deals with sidecar motorcycles.",
        "Admission tickets can be purchased in combination with the services of the Ice Palace."
      ]
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
    },
    descriptionAdvanced: {
      de: "",
      hu: "A 2022-ben átadott canillói Tibeti híd egy lenyűgöző modern mérnöki alkotás és turisztikai attrakció. A 603 méteres hosszával a világ egyik leghosszabb gyalogos függőhídja, amely a Vall del Riu völgy felett ível át, helyenként 158 méteres magasságban. A hídon való átsétálás garantáltan adrenalinnal teli élmény, miközben páratlan, 360 fokos panoráma nyílik a környező hegyekre. Az egy méter széles hídra egyszerre maximum 600 ember léphet. Megközelítése csak gyalogosan, egy kijelölt turistaúton, vagy a Canillo faluból induló hivatalos buszjárattal lehetséges, ami segít megőrizni a környék természeti nyugalmát. A híd a közeli Roc del Quer kilátóval együtt teszi Canillót a hegyi kalandturizmus egyik legvonzóbb célpontjává. Fizika és építészet K8 - Hídszerkezetek, terhelés és egyensúly.",
      ro: "",
      en: "The Canillo Tibetan Bridge, opened in 2022, is a stunning modern engineering feat and tourist attraction. At 603 meters long, it is one of the longest pedestrian suspension bridges in the world, spanning the Vall del Riu valley at a height of 158 meters in places. Walking across the bridge is a guaranteed adrenaline-fueled experience, offering unparalleled 360-degree panoramic views of the surrounding mountains. A maximum of 600 people can be on the one-meter-wide bridge at any one time. It can only be reached on foot via a designated tourist path or by the official bus service from the village of Canillo, which helps to preserve the natural tranquility of the area. Together with the nearby Roc del Quer viewpoint, the bridge makes Canillo one of the most attractive destinations for mountain adventure tourism. Physics and Architecture K8 - Bridge Structures, Load and Balance."
    },
    factsAdvanced: {
      de: [],
      hu: [
        "A híd mindössze egy méter széles, ami fokozza a magasságérzetet.",
        "A belépés díjköteles, és a jegyeket érdemes előre lefoglalni online.",
        "A szerkezetet úgy tervezték, hogy minimális hatást gyakoroljon a környezetre.",
        "A 'tibeti' elnevezés a Himalájában található hasonló építésű hidakra utal.",
        "Az építkezés körülbelül 18 hónapig tartott, nehéz hegyi körülmények között.",
        "A híd átadása óta Andorra egyik legnépszerűbb látványossága lett.",
        "A hídhoz vezető buszút is látványos, meredek szerpentineken vezet felfelé.",
        "A híd a téli szezonban és rossz időjárási körülmények között zárva tart."
      ],
      ro: [],
      en: [
        "The bridge is only one meter wide, which enhances the feeling of height.",
        "Admission is charged, and it is advisable to book tickets online in advance.",
        "The structure is designed to have a minimal impact on the environment.",
        "The name 'Tibetan' refers to similarly constructed bridges in the Himalayas.",
        "Construction took about 18 months under difficult mountain conditions.",
        "Since its opening, the bridge has become one of Andorra's most popular attractions.",
        "The bus ride to the bridge is also spectacular, with steep serpentines leading up.",
        "The bridge is closed during the winter season and in bad weather conditions."
      ]
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
    },
    descriptionAdvanced: {
      de: "",
      hu: "Az encampi Elektromossági Múzeum (MW Museu de l'Electricitat) az andorrai vízerőmű épületében kapott helyet, és egyedülálló utazást kínál az ország villamosításának történetébe. A látogatók megismerhetik, hogyan alakítják át a víz erejét elektromos árammá 1934 óta, és betekintést nyerhetnek a működő erőmű gépházába. A kiállítás rendkívül informatív és interaktív, számos kísérlettel, amelyek szemléletesen magyarázzák el az elektromosság alapelveit. A múzeum nemcsak a technikai részletekre, hanem azokra a mélyreható társadalmi és gazdasági változásokra is rávilágít, amelyeket az elektromosság elterjedése hozott a pireneusi törpeállam életébe. Technikatörténet és fizika K8 - Energiaátalakítás, megújuló energiaforrások.",
      ro: "",
      en: "The Electricity Museum (MW Museu de l'Electricitat) in Encamp is located in the Andorran hydroelectric power station and offers a unique journey into the history of the country's electrification. Visitors can learn how the power of water has been converted into electricity since 1934 and get a glimpse into the engine room of the working power station. The exhibition is extremely informative and interactive, with numerous experiments that visually explain the basic principles of electricity. The museum focuses not only on the technical details but also on the profound social and economic changes that the spread of electricity brought to the life of the Pyrenean microstate. History of Technology and Physics K8 - Energy Conversion, Renewable Energy Sources."
    },
    factsAdvanced: {
      de: [],
      hu: [
        "Az erőművet a Forces Hidroelèctriques d'Andorra (FHASA) vállalat építette.",
        "A múzeumot 2000-ben nyitották meg, hogy bemutassák az ipari örökséget.",
        "Vezetett túrák során a látogatók végigkövethetik a teljes áramtermelési folyamatot.",
        "A múzeum tagja az Európai Ipari Örökség Útvonalának (ERIH).",
        "Külön terem foglalkozik a megújuló energiákkal és a fenntarthatósággal.",
        "Oktatási programokat és workshopokat kínálnak iskolás csoportok számára.",
        "A múzeum bemutatja, hogyan változott meg a háztartások élete az elektromosság megjelenésével.",
        "Az Engolasters-tó vize egy föld alatti csatornarendszeren keresztül jut el az erőmű turbináihoz."
      ],
      ro: [],
      en: [
        "The power plant was built by the Forces Hidroelèctriques d'Andorra (FHASA) company.",
        "The museum was opened in 2000 to showcase the industrial heritage.",
        "During guided tours, visitors can follow the entire electricity generation process.",
        "The museum is a member of the European Route of Industrial Heritage (ERIH).",
        "A separate room is dedicated to renewable energies and sustainability.",
        "They offer educational programs and workshops for school groups.",
        "The museum shows how the lives of households changed with the arrival of electricity.",
        "The water from Engolasters Lake reaches the power plant's turbines through a system of underground channels."
      ]
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
    },
    descriptionAdvanced: {
      de: "",
      hu: "A Pessons-tavak gleccserkatlana (Circ de Pessons) Andorra legnagyobb és leglátványosabb tórendszere. Az Encamp közösséghez tartozó Grau Roig síterületről megközelíthető, több mint 15 tóból álló láncolat egy hatalmas, gránitsziklák által körülvett cirkuszvölgyben helyezkedik el. A GR7-es túraútvonal végigvezet a tavak mentén, lehetővé téve a túrázóknak, hogy felfedezzék ezt a lenyűgöző tájat. Az első és legkönnyebben elérhető tónál (Estany Primer) egy hegyi étterem is található, de a magasabban fekvő tavak felé haladva a táj egyre vadabbá és érintetlenebbé válik. A terület a horgászok és a természetfotósok paradicsoma, és a Pireneusok alpesi élővilágának gazdag tárháza. Földrajz K7 - A jég felszínformáló munkája, gleccsertavak.",
      ro: "",
      en: "The Pessons glacial cirque (Circ de Pessons) is Andorra's largest and most spectacular lake system. Accessible from the Grau Roig ski area in the parish of Encamp, the chain of more than 15 lakes is located in a huge cirque valley surrounded by granite cliffs. The GR7 hiking trail runs along the lakes, allowing hikers to discover this stunning landscape. The first and most easily accessible lake (Estany Primer) has a mountain restaurant, but as you move towards the higher lakes, the landscape becomes wilder and more untouched. The area is a paradise for anglers and nature photographers, and a rich repository of Pyrenean alpine wildlife. Geography K7 - The Surface-forming Work of Ice, Glacial Lakes."
    },
    factsAdvanced: {
      de: [],
      hu: [
        "A 'Circ de Pessons' a Pireneusok legnagyobb gránit gleccserkatlana.",
        "A legmagasabban fekvő tó több mint 2600 méteres magasságban található.",
        "A teljes tórendszert bejáró túra több órát is igénybe vehet és jó állóképességet igényel.",
        "A terület gazdag alpesi flórában, nyáron virágszőnyeg borítja a tájat.",
        "Télen a terület a Grandvalira sírégió része, és a freeride síelők kedvelt célpontja.",
        "A 'pessons' szó a 'pinsó' (pinty) madár nevéből eredhet.",
        "A tavakban és környékükön alpesi gőte és más kétéltűek is élnek.",
        "A Grau Roig-i parkolóból nyáron egy terepjáró busz is felviszi a látogatókat az első tóhoz."
      ],
      ro: [],
      en: [
        "The 'Circ de Pessons' is the largest granite glacial cirque in the Pyrenees.",
        "The highest lake is located at an altitude of more than 2,600 meters.",
        "The tour covering the entire lake system can take several hours and requires good stamina.",
        "The area is rich in alpine flora, with a carpet of flowers covering the landscape in summer.",
        "In winter, the area is part of the Grandvalira ski region and a popular destination for freeride skiers.",
        "The word 'pessons' may derive from the name of the 'pinsó' (finch) bird.",
        "Alpine newts and other amphibians live in and around the lakes.",
        "In summer, an all-terrain bus takes visitors from the Grau Roig car park to the first lake."
      ]
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
    },
    descriptionAdvanced: {
      de: "",
      hu: "A La Massana központjában, a Plaça de les Fontetes téren található Képregénymúzeum egyedülálló kulturális intézmény Andorrában, amely a 'kilencedik művészetnek' szenteli figyelmét. A múzeum nem állandó gyűjteménnyel rendelkezik, hanem időszakos kiállítások keretében mutat be különböző szerzőket, karaktereket vagy témákat a képregény világából. A tárlatok gyakran interaktívak és minden korosztály számára élvezetesek, a fanatikus rajongóktól a laikus érdeklődőkig. A múzeum rendszeresen szervez workshopokat, előadásokat és közönségtalálkozókat neves alkotókkal, így élénk központja az andorrai képregény-kultúrának. A minden évben megrendezett 'La Massana Còmic' fesztivál a múzeum legfontosabb eseménye. Vizuális kultúra K8 - A képregény mint művészeti forma.",
      ro: "",
      en: "Located in the center of La Massana, in Plaça de les Fontetes, the Comic Museum is a unique cultural institution in Andorra dedicated to the 'ninth art'. The museum does not have a permanent collection but presents various authors, characters, or themes from the world of comics through temporary exhibitions. The exhibitions are often interactive and enjoyable for all ages, from avid fans to casual observers. The museum regularly organizes workshops, lectures, and meet-and-greets with renowned creators, making it a vibrant center of Andorran comic culture. The annual 'La Massana Còmic' festival is the museum's most important event. Visual Culture K8 - The Comic as an Art Form."
    },
    factsAdvanced: {
      de: [],
      hu: [
        "A múzeumot 2001-ben alapították.",
        "A kiállítások általában néhány havonta cserélődnek.",
        "A belépés a legtöbb kiállításra ingyenes.",
        "A múzeum már bemutatott olyan ikonikus karaktereket, mint Tintin vagy Corto Maltese.",
        "Az intézmény fontos szerepet játszik a helyi és a spanyol/francia képregény-alkotók népszerűsítésében.",
        "A múzeum épülete egy modern, üvegfalú komplexum része.",
        "A kiállítások gyakran eredeti rajzokat és vázlatokat is bemutatnak.",
        "A múzeumnak saját könyvtára és olvasósarka is van."
      ],
      ro: [],
      en: [
        "The museum was founded in 2001.",
        "Exhibitions usually change every few months.",
        "Admission to most exhibitions is free.",
        "The museum has already featured iconic characters like Tintin and Corto Maltese.",
        "The institution plays an important role in promoting local and Spanish/French comic creators.",
        "The museum building is part of a modern, glass-walled complex.",
        "Exhibitions often feature original drawings and sketches.",
        "The museum has its own library and reading corner."
      ]
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
    },
    descriptionAdvanced: {
      de: "",
      hu: "A La Massanában található Farga Rossell kovácsműhely-múzeum a Pireneusok egyik legjobb állapotban megőrzött ipari műemléke. Az 1842 és 1876 között működő vaskohó ma interaktív bemutatóközpontként működik, ahol a látogatók megismerhetik a vasérc átalakításának teljes folyamatát. A vezetett túrák csúcspontja a hatalmas, vízzel hajtott kalapács (martinell) beindítása, amelynek dübörgése az egész épületet megremegteti. Egy audiovizuális bemutató segítségével a látogatók beleélhetik magukat a kovácsok kemény, zajos és forró világába. A Farga Rossell az andorrai 'Vas út' (Ruta del Ferro) központi eleme, és élő tanúbizonysága az ország turizmus előtti, ipari korszakának. Ipartörténet és technika K7 - A fémfeldolgozás története.",
      ro: "",
      en: "The Farga Rossell forge-museum in La Massana is one of the best-preserved industrial monuments in the Pyrenees. Operating from 1842 to 1876, the ironworks now functions as an interactive visitor center where visitors can learn about the entire process of transforming iron ore. The highlight of the guided tours is the start-up of the huge, water-powered hammer (martinell), the roar of which shakes the whole building. An audiovisual presentation allows visitors to immerse themselves in the hard, noisy, and hot world of the blacksmiths. Farga Rossell is a central element of the Andorran 'Iron Route' (Ruta del Ferro) and a living testament to the country's pre-tourism, industrial era. History of Industry and Technology K7 - The History of Metalworking."
    },
    factsAdvanced: {
      de: [],
      hu: [
        "A műhely a katalán típusú kovácsműhelyek jellegzetességeit mutatja.",
        "A működéshez szükséges vizet a Valira del Nord folyóból nyerték.",
        "A vas olvasztásához hatalmas mennyiségű faszénre volt szükség, ami jelentős erdőirtáshoz vezetett.",
        "A múzeum bemutatja azokat a szerszámokat és eszközöket, amelyeket a kovácsok használtak.",
        "A Farga Rossellt az ordinói Rossell család üzemeltette, az egyik legbefolyásosabb família volt.",
        "A múzeum különleges programokat kínál családok és iskolai csoportok számára.",
        "Az itt előállított vasrudakat főként a katalán piacra szállították.",
        "A kovácsok nehéz és veszélyes munkája ellenére megbecsült tagjai voltak a közösségnek."
      ],
      ro: [],
      en: [
        "The workshop exhibits the characteristics of Catalan-style forges.",
        "The water needed for operation was drawn from the Valira del Nord river.",
        "A huge amount of charcoal was needed to smelt the iron, which led to significant deforestation.",
        "The museum displays the tools and equipment used by the blacksmiths.",
        "Farga Rossell was run by the Rossell family of Ordino, one of the most influential families.",
        "The museum offers special programs for families and school groups.",
        "The iron bars produced here were mainly supplied to the Catalan market.",
        "Despite their hard and dangerous work, blacksmiths were respected members of the community."
      ]
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
    },
    descriptionAdvanced: {
      de: "",
      hu: "A Sant Julià de Lòriában, az egykori Reig dohánygyár épületében található Dohánymúzeum egyedülálló bepillantást enged Andorra 20. századi gazdasági és társadalmi életébe. A kiállítás végigvezeti a látogatót a dohány útján a magtól a késztermékig: a termesztéstől a betakarításon és szárításon át a cigaretták és szivarok kézi és gépi előállításáig. Eredeti gépek, szerszámok és egy multimédiás bemutató segítségével a múzeum megidézi a gyár egykori hangulatát, és rávilágít arra, hogy a dohányipar milyen meghatározó szerepet játszott az ország modernizációjában a turizmus megjelenése előtt. A múzeum a csempészet kalandos történetét is bemutatja, ami elválaszthatatlan volt a dohánykereskedelemtől. Gazdaságtörténet K8 - Ipari ágazatok felemelkedése és hanyatlása.",
      ro: "",
      en: "The Tobacco Museum, located in Sant Julià de Lòria in the former Reig tobacco factory building, offers a unique insight into the economic and social life of 20th-century Andorra. The exhibition takes the visitor on a journey of tobacco from seed to finished product: from cultivation, harvesting, and drying to the manual and machine production of cigarettes and cigars. With original machinery, tools, and a multimedia presentation, the museum evokes the former atmosphere of the factory and highlights the decisive role the tobacco industry played in the country's modernization before the advent of tourism. The museum also presents the adventurous history of smuggling, which was inseparable from the tobacco trade. Economic History K8 - The Rise and Fall of Industrial Sectors."
    },
    factsAdvanced: {
      de: [],
      hu: [
        "A Reig gyár 1909 és 1957 között működött.",
        "A múzeumot audioguide segítségével lehet bejárni, amely a munkások történeteit is elmeséli.",
        "A kiállítás bemutatja a különböző dohányfajtákat és aromákat.",
        "Külön részleg foglalkozik a dohányreklámok és csomagolások változásával.",
        "A Reig család Andorra egyik legbefolyásosabb családja volt, politikai szerepet is vállaltak.",
        "Az épület maga is az ipari építészet szép példája.",
        "A múzeum rávilágít a női munkaerő fontos szerepére a dohánygyárakban.",
        "A tárlat objektíven mutatja be a dohányzás egészségügyi hatásait is."
      ],
      ro: [],
      en: [
        "The Reig factory operated from 1909 to 1957.",
        "The museum can be explored with an audio guide that also tells the stories of the workers.",
        "The exhibition presents different types of tobacco and aromas.",
        "A separate section deals with the evolution of tobacco advertising and packaging.",
        "The Reig family was one of the most influential families in Andorra and also took on a political role.",
        "The building itself is a fine example of industrial architecture.",
        "The museum highlights the important role of female labor in the tobacco factories.",
        "The exhibition also objectively presents the health effects of smoking."
      ]
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
    },
    descriptionAdvanced: {
      de: "",
      hu: "A Sant Serni de Nagol templom egy apró román kori ékszerdoboz, amely drámai módon egy sziklaszirtre épült, kilátással Sant Julià de Lòria völgyére. Egy felirat tanúsága szerint 1054-ben szentelték fel, ami az egyik legkorábbi datált templommá teszi Andorrában. Az egyszerű, négyszögletes alaprajzú és félköríves apszisú épület belsejében a 11. századi, eredeti román kori falfestmények másolatai láthatók (az eredetiek Barcelonában vannak). Ezek az apokaliptikus jeleneteket és a Háromkirályok imádását ábrázoljó freskók az andorrai román festészet legkorábbi emlékei közé tartoznak. A templom elhelyezkedése és történelmi jelentősége miatt az ország egyik legfontosabb műemléke. Művészettörténet K7 - A román kori festészet kezdetei.",
      ro: "",
      en: "The church of Sant Serni de Nagol is a tiny Romanesque jewel box dramatically built on a cliff overlooking the valley of Sant Julià de Lòria. An inscription testifies that it was consecrated in 1054, making it one of the earliest dated churches in Andorra. Inside the simple, rectangular building with a semi-circular apse are copies of the original 11th-century Romanesque wall paintings (the originals are in Barcelona). These frescoes, depicting apocalyptic scenes and the Adoration of the Magi, are among the earliest examples of Andorran Romanesque painting. Due to its location and historical significance, the church is one of the country's most important monuments. Art History K7 - The Beginnings of Romanesque Painting."
    },
    factsAdvanced: {
      de: [],
      hu: [
        "A templom az egyik kevés andorrai egyházi épület, amelynek pontos felszentelési dátuma ismert.",
        "A freskókat a 'Nagoli Mester' néven ismert, ismeretlen művésznek tulajdonítják.",
        "A templomhoz egy rövid, de meredek gyalogösvény vezet fel.",
        "A harangtorony egyszerű, kétszintes, lőrésszerű ablakokkal.",
        "Az épület a korai lombard román stílus jegyeit viseli magán.",
        "A freskók stílusa erős bizánci hatást mutat.",
        "A templom kulcsát a falu turisztikai irodájában lehet elkérni a látogatáshoz.",
        "A szikla, amelyre épült, természetes védelmet nyújtott a templomnak."
      ],
      ro: [],
      en: [
        "The church is one of the few ecclesiastical buildings in Andorra with a precisely known consecration date.",
        "The frescoes are attributed to an unknown artist known as the 'Master of Nagol'.",
        "A short but steep footpath leads up to the church.",
        "The bell tower is simple, two-storey, with slit-like windows.",
        "The building bears the marks of the early Lombard Romanesque style.",
        "The style of the frescoes shows a strong Byzantine influence.",
        "The key to the church can be requested from the village tourist office for a visit.",
        "The rock on which it was built provided natural protection for the church."
      ]
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
    },
    descriptionAdvanced: {
      de: "",
      hu: "Az Escaldes-Engordanyban, a történelmi Hostal Valira földszintjén található Carmen Thyssen Múzeum a híres Thyssen-Bornemisza gyűjtemény első nemzetközi fiókintézménye. A múzeum a 19. és 20. századi festészetre specializálódott, évente változó tematikus kiállításokon mutatva be a gyűjtemény remekműveit. A látogatók olyan mesterek alkotásaiban gyönyörködhetnek, mint Monet, Gauguin, Matisse és számos spanyol festő. A viszonylag kis, intim tér lehetővé teszi a műalkotások közeli tanulmányozását. A múzeum a legmodernebb technológiát alkalmazza, interaktív képernyők segítségével a látogatók elmélyedhetnek a festmények részleteiben, megismerve azok történetét és a művészek technikáját. Modern művészet K8 - Impresszionizmus, posztimpresszionizmus és a 20. század irányzatai.",
      ro: "",
      en: "Located in Escaldes-Engordany, on the ground floor of the historic Hostal Valira, the Carmen Thyssen Museum is the first international branch of the famous Thyssen-Bornemisza collection. The museum specializes in 19th and 20th-century painting, showcasing masterpieces from the collection in annually changing thematic exhibitions. Visitors can admire works by masters such as Monet, Gauguin, Matisse, and numerous Spanish painters. The relatively small, intimate space allows for close study of the artworks. The museum employs the latest technology, with interactive screens that allow visitors to delve into the details of the paintings, learning their history and the artists' techniques. Modern Art K8 - Impressionism, Post-Impressionism, and 20th-century movements."
    },
    factsAdvanced: {
      de: [],
      hu: [
        "A múzeumot 2017-ben nyitották meg.",
        "A kiállított művek Carmen Thyssen-Bornemisza bárónő magángyűjteményéből származnak.",
        "A gránitból épült Hostal Valira épülete maga is műemlékvédelem alatt áll.",
        "A kiállítások témái változatosak, például 'Női ábrázolás', 'Tájak' vagy 'Portrék'.",
        "A múzeum rendszeresen szervez tárlatvezetéseket, workshopokat és családi programokat.",
        "A technológia segítségével a látássérültek számára is élvezhetővé teszik a kiállítást.",
        "A múzeum Andorra kulturális életének fontos központjává vált.",
        "A kiállított képek között gyakran szerepelnek a spanyol festészet aranykorának alkotásai is."
      ],
      ro: [],
      en: [
        "The museum was opened in 2017.",
        "The exhibited works come from the private collection of Baroness Carmen Thyssen-Bornemisza.",
        "The Hostal Valira building, built of granite, is itself a protected monument.",
        "The exhibition themes are varied, such as 'Female Representation', 'Landscapes', or 'Portraits'.",
        "The museum regularly organizes guided tours, workshops, and family programs.",
        "Technology makes the exhibition enjoyable for the visually impaired as well.",
        "The museum has become an important center of Andorra's cultural life.",
        "The exhibited paintings often include works from the golden age of Spanish painting."
      ]
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
    },
    descriptionAdvanced: {
      de: "",
      hu: "Az escaldes-engordanyi Parfümmúzeum egy illatos utazásra invitálja a látogatókat a parfümkészítés történetébe és művészetébe. A Centre Júlia parfüméria első emeletén található interaktív kiállítás bemutatja a parfümök történetét az ókortól napjainkig. A látogatók megismerkedhetnek a különböző illatcsaládokkal, a parfümkészítés folyamatával és a híres 'orrok', azaz a parfümőrök munkájával. A kiállítás leglátványosabb része a több ezer darabból álló parfümösüveg-gyűjtemény, amely a dizájn fejlődését is illusztrálja. A túra végén a látogatóknak lehetőségük van egy kvíz segítségével meghatározni saját illat-preferenciájukat, sőt, akár saját parfümöt is készíthetnek. Kémia és dizájn K8 - Illatanyagok, desztilláció, formatervezés.",
      ro: "",
      en: "The Perfume Museum in Escaldes-Engordany invites visitors on a fragrant journey into the history and art of perfume making. Located on the first floor of the Centre Júlia perfumery, the interactive exhibition presents the history of perfumes from antiquity to the present day. Visitors can learn about the different fragrance families, the process of perfume making, and the work of famous 'noses' or perfumers. The most spectacular part of the exhibition is the collection of several thousand perfume bottles, which also illustrates the evolution of design. At the end of the tour, visitors have the opportunity to determine their own fragrance preferences with the help of a quiz, and can even create their own perfume. Chemistry and Design K8 - Fragrances, Distillation, Product Design."
    },
    factsAdvanced: {
      de: [],
      hu: [
        "A múzeum bemutatja a parfümgyártás alapanyagait, a virágoktól az állati eredetű pézsmáig.",
        "A gyűjteményben olyan híres márkák üvegei is megtalálhatók, mint a Guerlain, a Dior vagy a Lalique.",
        "A 'szagló orgona' segítségével a látogatók tesztelhetik szaglásukat.",
        "A múzeum része az 'Andorrai Kézműves Útvonalnak'.",
        "Külön workshopokat szerveznek, ahol a résztvevők megtanulhatják a parfümkészítés alapjait.",
        "A kiállítás a parfümök és a divat kapcsolatát is bemutatja.",
        "A múzeum elmagyarázza a természetes és szintetikus illatanyagok közötti különbséget.",
        "A Centre Júlia, ahol a múzeum található, Andorra egyik legrégebbi és leghíresebb parfümériája."
      ],
      ro: [],
      en: [
        "The museum presents the raw materials of perfume production, from flowers to animal-derived musk.",
        "The collection includes bottles from famous brands such as Guerlain, Dior, and Lalique.",
        "Visitors can test their sense of smell with the help of a 'scent organ'.",
        "The museum is part of the 'Andorran Craft Route'.",
        "Special workshops are organized where participants can learn the basics of perfume making.",
        "The exhibition also presents the relationship between perfumes and fashion.",
        "The museum explains the difference between natural and synthetic fragrances.",
        "The Centre Júlia, where the museum is located, is one of Andorra's oldest and most famous perfumeries."
      ]
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
    },
    descriptionAdvanced: {
      de: "",
      hu: "'Az idő nemessége' (Noblesse du Temps) Salvador Dalí szürrealista mester egyik legismertebb szobrának monumentális bronz változata, amely Andorra la Vella szívében, a Plaça de la Rotonda téren áll. A közel öt méter magas alkotás a művész egyik visszatérő motívumát, egy fatörzsön elfolyó, lágy órát ábrázol, melyet egy angyal koronáz meg. A szobor az idő múlását, annak az emberiség feletti hatalmát és a dolgok mulandóságát szimbolizálja. Az alkotást Enric Sabater, Dalí egykori ügynöke és bizalmasa adta kölcsön a városnak. Gyorsan a főváros egyik leggyakrabban fotózott látványosságává és modern jelképévé vált, egy csipetnyi szürrealizmust csempészve a nyüzsgő bevásárlóutcák világába. Művészettörténet K8 - A szürrealizmus és Salvador Dalí művészete.",
      ro: "",
      en: "'The Nobility of Time' (Noblesse du Temps) is a monumental bronze version of one of surrealist master Salvador Dalí's most famous sculptures, located in the heart of Andorra la Vella, in the Plaça de la Rotonda. The nearly five-meter-high work depicts one of the artist's recurring motifs, a soft, melting clock on a tree trunk, crowned by an angel. The sculpture symbolizes the passage of time, its power over humanity, and the transience of things. The work was loaned to the city by Enric Sabater, Dalí's former agent and confidant. It quickly became one of the capital's most photographed sights and a modern symbol, adding a touch of surrealism to the world of bustling shopping streets. Art History K8 - Surrealism and the Art of Salvador Dalí."
    },
    factsAdvanced: {
      de: [],
      hu: [
        "A szobor súlya 1400 kilogramm.",
        "1999-ben állították fel Andorra la Vellában, de a végleges helyét 2010-ben kapta meg.",
        "Ez a mű a 'Lágy órák' sorozat egyik darabja, amely 'Az emlékezet állandósága' című festményen alapul.",
        "Dalí az eredeti tervet 1977-ben készítette.",
        "A szobor a Valira folyó partján, a Pont de la Rotonda híd mellett található.",
        "A világon több nagyvárosban is található hasonló Dalí-szobor ebből a sorozatból.",
        "A szobor tökéletes kontrasztot alkot a háttérben magasodó hegyekkel.",
        "Az alkotás a város elkötelezettségét szimbolizálja a köztéri művészet iránt."
      ],
      ro: [],
      en: [
        "The sculpture weighs 1,400 kilograms.",
        "It was erected in Andorra la Vella in 1999, but its final location was established in 2010.",
        "This work is part of the 'Soft Clocks' series, based on the painting 'The Persistence of Memory'.",
        "Dalí created the original design in 1977.",
        "The sculpture is located on the banks of the Valira river, next to the Pont de la Rotonda bridge.",
        "Several other major cities in the world have similar Dalí sculptures from this series.",
        "The sculpture forms a perfect contrast with the mountains towering in the background.",
        "The work symbolizes the city's commitment to public art."
      ]
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
    },
    descriptionAdvanced: {
      de: "",
      hu: "A Sant Esteve templom Andorra la Vella plébániatemploma, amely a történelmi óváros (Barri Antic) szélén, a Plaça Príncep Benlloch téren áll. Bár az évszázadok során többször átépítették, legértékesebb része a 12. századból származó, félköríves, lombard díszítésű román kori apszis (szentély). A templom belsejében egykor a 'Santa Coloma-i Mester' híres oltárképe állt, ma azonban barokk oltárok díszítik. A 20. században a híres modernista építész, Josep Puig i Cadafalch tervei alapján újították fel, ekkor kapta mai bejáratát és harangtornyát. A Sant Esteve templom egy olyan épület, amelyben több építészeti stílus rétegződik egymásra, tanúskodva a város folyamatos fejlődéséről. Építészettörténet K7 - Stílusok keveredése egy épületen.",
      ro: "",
      en: "The Church of Sant Esteve is the parish church of Andorra la Vella, located on the edge of the historic old town (Barri Antic), in Plaça Príncep Benlloch. Although it has been rebuilt several times over the centuries, its most valuable part is the 12th-century semi-circular Romanesque apse with Lombard decoration. The interior of the church once housed the famous altarpiece by the 'Master of Santa Coloma', but is now decorated with Baroque altars. In the 20th century, it was renovated according to the plans of the famous modernist architect Josep Puig i Cadafalch, at which time it received its current entrance and bell tower. The Church of Sant Esteve is a building in which several architectural styles are layered on top of each other, testifying to the continuous development of the city. History of Architecture K7 - The Mixing of Styles in a Building."
    },
    factsAdvanced: {
      de: [],
      hu: [
        "A templomot Szent István vértanúnak szentelték.",
        "Az apszis az egyetlen, szinte teljes egészében megmaradt része az eredeti román kori épületnek.",
        "A templomban található barokk oltárképek a 17. és 18. századból származnak.",
        "Az üvegablakok modernek, a 20. században készültek.",
        "A templom közvetlenül a Casa de la Vall, a régi parlament épülete mellett található.",
        "Ma is a főváros legfontosabb katolikus temploma, ahol rendszeres istentiszteleteket tartanak.",
        "Az apszis külső falán látható kőfaragások tipikus román kori motívumokat ábrázolnak.",
        "A templom előtti tér népszerű találkozóhely és a városi ünnepségek egyik helyszíne."
      ],
      ro: [],
      en: [
        "The church is dedicated to Saint Stephen the Martyr.",
        "The apse is the only almost completely preserved part of the original Romanesque building.",
        "The Baroque altarpieces in the church date from the 17th and 18th centuries.",
        "The stained glass windows are modern, made in the 20th century.",
        "The church is located right next to the Casa de la Vall, the old parliament building.",
        "It is still the most important Catholic church in the capital, where regular services are held.",
        "The stone carvings on the outer wall of the apse depict typical Romanesque motifs.",
        "The square in front of the church is a popular meeting place and a venue for city festivities."
      ]
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
