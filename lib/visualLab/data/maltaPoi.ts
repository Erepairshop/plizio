import { POI } from "./poi";

export const maltaPoi: POI[] = [
  // Ország
  {
    id: "country-malta",
    name: { de: "Malta", hu: "Málta", ro: "Malta", en: "Malta" },
    type: "country",
    coords: [35.9375, 14.3754],
    parent: null,
    shortDesc: {
      de: "Malta ist ein kleiner, dicht besiedelter Inselstaat im Mittelmeer mit einer reichen Geschichte.",
      hu: "Málta egy kis, sűrűn lakott szigetország a Földközi-tengeren, gazdag történelemmel.",
      ro: "Malta este o mică țară insulară dens populată din Marea Mediterană, cu o istorie bogată.",
      en: "Malta is a small, densely populated island country in the Mediterranean Sea with a rich history."
    }
  },

  // Főváros
  {
    id: "poi-mt-valletta",
    name: { de: "Valletta", hu: "Valletta", ro: "Valletta", en: "Valletta" },
    type: "capital",
    coords: [35.8989, 14.5146],
    parent: "MT",
    shortDesc: {
      de: "Die Hauptstadt von Malta, berühmt für ihre Festungen, Museen und barocke Architektur.",
      hu: "Málta fővárosa, híres az erődítményeiről, múzeumairól és barokk építészetéről.",
      ro: "Capitala Maltei, faimoasă pentru fortificațiile, muzeele și arhitectura sa barocă.",
      en: "The capital of Malta, famous for its fortifications, museums, and baroque architecture."
    }
  },
  
  // Nagyvárosok
  {
    id: "poi-mt-birkirkara",
    name: { de: "Birkirkara", hu: "Birkirkara", ro: "Birkirkara", en: "Birkirkara" },
    type: "city",
    coords: [35.8972, 14.4611],
    parent: "MT",
    shortDesc: {
      de: "Eine der größten Städte auf Malta, bekannt für die St. Helen's Basilika.",
      hu: "Málta egyik legnagyobb városa, amely a Szent Ilona-bazilikáról ismert.",
      ro: "Una dintre cele mai mari orașe din Malta, cunoscută pentru Bazilica Sf. Elena.",
      en: "One of the largest cities in Malta, known for the St. Helen's Basilica."
    }
  },
  {
    id: "poi-mt-mosta",
    name: { de: "Mosta", hu: "Mosta", ro: "Mosta", en: "Mosta" },
    type: "city",
    coords: [35.9092, 14.4256],
    parent: "MT",
    shortDesc: {
      de: "Eine Stadt im Zentrum Maltas, berühmt für den Mosta-Dom mit seiner riesigen Kuppel.",
      hu: "Város Málta közepén, híres a Mosta-dómról és annak hatalmas kupolájáról.",
      ro: "Un oraș în centrul Maltei, faimos pentru Domul din Mosta cu cupola sa masivă.",
      en: "A town in central Malta, famous for the Mosta Dome with its massive unsupported dome."
    }
  },
  {
    id: "poi-mt-sliema",
    name: { de: "Sliema", hu: "Sliema", ro: "Sliema", en: "Sliema" },
    type: "city",
    coords: [35.9122, 14.5042],
    parent: "MT",
    shortDesc: {
      de: "Ein wichtiges touristisches Zentrum auf Malta mit vielen Geschäften und Restaurants.",
      hu: "Fontos turisztikai központ Máltán, sok üzlettel és étteremmel.",
      ro: "Un centru turistic major din Malta, cu multe magazine și restaurante.",
      en: "A major tourist hub in Malta featuring many shops, restaurants, and cafes."
    }
  },
  {
    id: "poi-mt-mdina",
    name: { de: "Mdina", hu: "Mdina", ro: "Mdina", en: "Mdina" },
    type: "city",
    coords: [35.8858, 14.4031],
    parent: "MT",
    shortDesc: {
      de: "Die ehemalige Hauptstadt Maltas, auch 'Die stille Stadt' genannt, mit engen Gassen.",
      hu: "Málta egykori fővárosa, a 'Csendes Város', szűk utcáival és középkori hangulatával.",
      ro: "Fosta capitală a Maltei, numită și 'Orașul Tăcut', cu străzi înguste medievale.",
      en: "The former capital of Malta, also known as 'The Silent City', featuring medieval streets."
    }
  },
  {
    id: "poi-mt-victoria",
    name: { de: "Victoria (Rabat)", hu: "Victoria (Rabat)", ro: "Victoria (Rabat)", en: "Victoria (Rabat)" },
    type: "city",
    coords: [36.0442, 14.2397],
    parent: "MT",
    shortDesc: {
      de: "Die Hauptstadt der Insel Gozo, dominiert von der Zitadelle.",
      hu: "Gozo szigetének fővárosa, amelyet egy lenyűgöző fellegvár ural.",
      ro: "Capitala insulei Gozo, dominată de Citadela sa istorică.",
      en: "The capital city of the island of Gozo, dominated by its historic Citadel."
    }
  },
  {
    id: "poi-mt-stjulians",
    name: { de: "St. Julian's", hu: "St. Julian's", ro: "St. Julian's", en: "St. Julian's" },
    type: "city",
    coords: [35.9186, 14.4883],
    parent: "MT",
    shortDesc: {
      de: "Eine Küstenstadt, bekannt für ihr Nachtleben in Paceville.",
      hu: "Tengerparti város, amely a Paceville-i éjszakai életéről ismert.",
      ro: "Un oraș de coastă, faimos pentru viața de noapte din Paceville.",
      en: "A coastal town known for its vibrant nightlife in the Paceville district."
    }
  },
  {
    id: "poi-mt-qormi",
    name: { de: "Qormi", hu: "Qormi", ro: "Qormi", en: "Qormi" },
    type: "city",
    coords: [35.8794, 14.4683],
    parent: "MT",
    shortDesc: {
      de: "Eine historische Stadt auf Malta, berühmt für ihr traditionelles maltesisches Brot.",
      hu: "Történelmi város Máltán, híres a hagyományos máltai kenyérsütésről.",
      ro: "Un oraș istoric din Malta, faimos pentru pâinea tradițională malteză.",
      en: "A historic city in Malta, famous for baking traditional Maltese bread."
    }
  },
  {
    id: "poi-mt-bugibba",
    name: { de: "Buġibba", hu: "Buġibba", ro: "Buġibba", en: "Buġibba" },
    type: "city",
    coords: [35.9525, 14.4114],
    parent: "MT",
    shortDesc: {
      de: "Ein beliebtes Touristenziel an der St. Paul's Bay.",
      hu: "Népszerű turisztikai célpont a Szent Pál-öböl közelében.",
      ro: "O destinație turistică populară situată în Golful Sf. Paul.",
      en: "A popular tourist destination located within St. Paul's Bay."
    }
  },
  
  // Történelmi / Látnivaló
  {
    id: "poi-mt-hagarqim",
    name: { de: "Ħaġar Qim", hu: "Ħaġar Qim", ro: "Ħaġar Qim", en: "Ħaġar Qim" },
    type: "historical",
    coords: [35.8275, 14.4464],
    parent: "MT",
    shortDesc: {
      de: "Ein megalithischer Tempelkomplex, der zu den ältesten freistehenden Bauwerken der Welt gehört.",
      hu: "Megalitikus templomkomplexum, a világ egyik legrégebbi szabadon álló építménye.",
      ro: "Un complex de temple megalitice, printre cele mai vechi structuri din lume.",
      en: "A megalithic temple complex, one of the oldest free-standing structures in the world."
    }
  },
  {
    id: "poi-mt-tarxien",
    name: { de: "Tarxien-Tempel", hu: "Tarxien templomok", ro: "Templele Tarxien", en: "Tarxien Temples" },
    type: "historical",
    coords: [35.8697, 14.5117],
    parent: "MT",
    shortDesc: {
      de: "Eine archäologische Stätte aus der Jungsteinzeit mit kunstvollen Steinmetzarbeiten.",
      hu: "Újkőkorszaki régészeti lelőhely, amely kidolgozott kőfaragásairól híres.",
      ro: "Un sit arheologic neolitic, cunoscut pentru sculpturile sale detaliate în piatră.",
      en: "A Neolithic archaeological site renowned for its detailed stone carvings."
    }
  },
  {
    id: "poi-mt-hypogeum",
    name: { de: "Ħal-Saflieni-Hypogäum", hu: "Ħal Saflieni-i hipogeum", ro: "Hipogeul Ħal-Saflieni", en: "Ħal Saflieni Hypogeum" },
    type: "historical",
    coords: [35.8694, 14.5069],
    parent: "MT",
    shortDesc: {
      de: "Eine faszinierende unterirdische Tempelanlage und Nekropole aus der Jungsteinzeit.",
      hu: "Lenyűgöző földalatti templomrendszer és nekropolisz az újkőkorszakból.",
      ro: "O structură subterană fascinantă și o necropolă din neolitic.",
      en: "A fascinating subterranean prehistoric temple and necropolis from the Neolithic era."
    }
  },
  {
    id: "poi-mt-stjohn",
    name: { de: "St. John's Co-Cathedral", hu: "Szent János-társkatedrális", ro: "Co-Catedrala Sf. Ioan", en: "St. John's Co-Cathedral" },
    type: "historical",
    coords: [35.8975, 14.5125],
    parent: "MT",
    shortDesc: {
      de: "Eine prächtige Barockkirche in Valletta, die Gemälde von Caravaggio beherbergt.",
      hu: "Pompás barokk katedrális Vallettában, amely Caravaggio festményeit őrzi.",
      ro: "O superbă catedrală barocă în Valletta, găzduind picturi de Caravaggio.",
      en: "A magnificent baroque church in Valletta, home to masterpieces by Caravaggio."
    }
  },
  {
    id: "poi-mt-fortstelmo",
    name: { de: "Fort St. Elmo", hu: "Szent Elmo-erőd", ro: "Fortul Sf. Elmo", en: "Fort St. Elmo" },
    type: "historical",
    coords: [35.9019, 14.5186],
    parent: "MT",
    shortDesc: {
      de: "Eine sternförmige Festung in Valletta, die bei der Großen Belagerung 1565 wichtig war.",
      hu: "Csillag alakú erőd Vallettában, amely kulcsszerepet játszott az 1565-ös nagy ostromban.",
      ro: "Un fort în formă de stea în Valletta, crucial în Marele Asediu din 1565.",
      en: "A star fort in Valletta, famous for its role in the Great Siege of Malta in 1565."
    }
  },
  {
    id: "poi-mt-ggantija",
    name: { de: "Ġgantija", hu: "Ġgantija", ro: "Ġgantija", en: "Ġgantija" },
    type: "historical",
    coords: [36.0475, 14.2692],
    parent: "MT",
    shortDesc: {
      de: "Ein megalithischer Tempelkomplex auf Gozo, älter als die Pyramiden von Čgypten.",
      hu: "Megalitikus templomkomplexum Gozón, régebbi, mint az egyiptomi piramisok.",
      ro: "Complex de temple megalitice pe Gozo, mai vechi decât piramidele din Egipt.",
      en: "A megalithic temple complex on Gozo, older than the pyramids of Egypt."
    }
  },
  {
    id: "poi-mt-citadel",
    name: { de: "Zitadelle (Victoria)", hu: "Gozo Citadella", ro: "Citadela (Victoria)", en: "The Citadel" },
    type: "historical",
    coords: [36.0469, 14.2394],
    parent: "MT",
    shortDesc: {
      de: "Eine historische befestigte Stadt im Herzen von Victoria auf Gozo.",
      hu: "Történelmi erődített város Gozo fővárosának, Victoriának a szívében.",
      ro: "Un oraș fortificat istoric situat în inima Victoriei pe insula Gozo.",
      en: "A historic fortified city situated in the heart of Victoria on Gozo."
    }
  },
  {
    id: "poi-mt-fortstangelo",
    name: { de: "Fort St. Angelo", hu: "Szent Angelo-erőd", ro: "Fortul Sf. Angelo", en: "Fort St. Angelo" },
    type: "historical",
    coords: [35.8922, 14.5181],
    parent: "MT",
    shortDesc: {
      de: "Eine große Festung in Birgu an der Grand Harbour.",
      hu: "Nagy erőd Birgu városában a Grand Harbour partján.",
      ro: "O mare fortăreață în Birgu pe malul Marelui Port.",
      en: "A large bastioned fort in Birgu on the shore of the Grand Harbour."
    }
  },
  {
    id: "poi-mt-halmillieri",
    name: { de: "Ta' Ħaġrat Temples", hu: "Ta' Ħaġrat templomok", ro: "Templele Ta' Ħaġrat", en: "Ta' Ħaġrat Temples" },
    type: "historical",
    coords: [35.9189, 14.3686],
    parent: "MT",
    shortDesc: {
      de: "Megalithische Tempelruinen in Mġarr auf Malta.",
      hu: "Megalitikus templomromok Mġarr közelében.",
      ro: "Ruinele templelor megalitice din Mġarr, Malta.",
      en: "Megalithic temple ruins located in Mġarr, Malta."
    }
  },
  
  // Természeti
  {
    id: "poi-mt-bluegrotto",
    name: { de: "Blaue Grotte", hu: "Kék Barlang", ro: "Grota Albastră", en: "Blue Grotto" },
    type: "nature",
    coords: [35.8197, 14.4564],
    parent: "MT",
    shortDesc: {
      de: "Eine Reihe von Meereshöhlen an der Südküste Maltas, bekannt für das leuchtend blaue Wasser.",
      hu: "Tengeri barlangok sora Málta déli partján, amelyek ragyogó kék vizükről híresek.",
      ro: "O serie de peșteri marine pe coasta de sud a Maltei, cunoscute pentru apa albastră strălucitoare.",
      en: "A series of sea caves on the south coast of Malta, known for their luminous blue waters."
    }
  },
  {
    id: "poi-mt-bluelagoon",
    name: { de: "Blaue Lagune", hu: "Kék Lagúna", ro: "Laguna Albastră", en: "Blue Lagoon" },
    type: "nature",
    coords: [36.0125, 14.3211],
    parent: "MT",
    shortDesc: {
      de: "Eine atemberaubende Bucht mit kristallklarem, türkisfarbenem Wasser auf Comino.",
      hu: "Lélegzetelállító öböl kristálytiszta türkizkék vízzel Comino szigetén.",
      ro: "Un golf uimitor cu apă cristalină turcoaz pe insula Comino.",
      en: "A stunning bay with crystal-clear turquoise waters located on the island of Comino."
    }
  },
  {
    id: "poi-mt-dinglicliffs",
    name: { de: "Dingli-Klippen", hu: "Dingli-sziklák", ro: "Stâncile Dingli", en: "Dingli Cliffs" },
    type: "nature",
    coords: [35.8525, 14.3789],
    parent: "MT",
    shortDesc: {
      de: "Die höchsten Klippen Maltas, die spektakuläre Ausblicke auf das Mittelmeer bieten.",
      hu: "Málta legmagasabb sziklái, lenyűgöző kilátással a Földközi-tengerre.",
      ro: "Cele mai înalte stânci din Malta, oferind o vedere spectaculoasă la Marea Mediterană.",
      en: "The highest cliffs in Malta, offering spectacular views of the Mediterranean Sea."
    }
  },
  {
    id: "poi-mt-goldenbay",
    name: { de: "Golden Bay", hu: "Golden Bay", ro: "Golden Bay", en: "Golden Bay" },
    type: "nature",
    coords: [35.9344, 14.3444],
    parent: "MT",
    shortDesc: {
      de: "Einer der beliebtesten Sandstrände Maltas, eingebettet in die raue Nordwestküste.",
      hu: "Málta egyik legnépszerűbb homokos strandja a zord északnyugati parton.",
      ro: "Una dintre cele mai populare plaje de nisip din Malta, pe coasta de nord-vest.",
      en: "One of Malta's most popular sandy beaches, nestled into the rugged northwest coast."
    }
  },
  {
    id: "poi-mt-ramlabay",
    name: { de: "Ramla Bay", hu: "Ramla-öböl", ro: "Golful Ramla", en: "Ramla Bay" },
    type: "nature",
    coords: [36.0617, 14.2831],
    parent: "MT",
    shortDesc: {
      de: "Der größte und bekannteste Sandstrand auf Gozo mit rötlich-goldenem Sand.",
      hu: "Gozo legnagyobb és legismertebb homokos strandja vöröses-arany homokkal.",
      ro: "Cea mai mare și cunoscută plajă cu nisip de pe Gozo, cu nisip roșcat.",
      en: "The largest and most renowned sandy beach on Gozo, known for its reddish-golden sand."
    }
  },
  {
    id: "poi-mt-mellieha",
    name: { de: "Mellieħa Bay", hu: "Mellieħa-öböl", ro: "Golful Mellieħa", en: "Mellieħa Bay" },
    type: "nature",
    coords: [35.9733, 14.3533],
    parent: "MT",
    shortDesc: {
      de: "Der längste Sandstrand Maltas, ideal für Familien und Wassersport.",
      hu: "Málta leghosszabb homokos strandja, ideális családok és vízi sportok számára.",
      ro: "Cea mai lungă plajă de nisip din Malta, ideală pentru familii și sporturi acvatice.",
      en: "Malta's longest sandy beach, ideal for families and water sports."
    }
  },
  {
    id: "poi-mt-stpeter",
    name: { de: "St. Peter's Pool", hu: "Szent Péter Medencéje", ro: "St. Peter's Pool", en: "St. Peter's Pool" },
    type: "nature",
    coords: [35.8306, 14.5606],
    parent: "MT",
    shortDesc: {
      de: "Ein natürliches Felsbecken im Südosten Maltas, perfekt zum Schwimmen und Klippenspringen.",
      hu: "Természetes sziklamedence Málta délkeleti részén, kiváló fürdőzésre és ugrálásra.",
      ro: "O piscină naturală din piatră în sud-estul Maltei, ideală pentru înot și scufundări de pe stânci.",
      en: "A natural rock pool in southeast Malta, perfect for swimming and cliff jumping."
    }
  },
  {
    id: "poi-mt-fungusrock",
    name: { de: "Fungus Rock", hu: "Gomba-szikla", ro: "Fungus Rock", en: "Fungus Rock" },
    type: "nature",
    coords: [36.0469, 14.1883],
    parent: "MT",
    shortDesc: {
      de: "Ein markanter Kalksteinfelsen an der Küste von Gozo, früher berühmt für eine seltene Pflanze.",
      hu: "Különleges mészkőszikla Gozo partjainál, amely korábban egy ritka növényről volt híres.",
      ro: "O stâncă de calcar impresionantă pe coasta insulei Gozo.",
      en: "A striking limestone rock on the coast of Gozo, historically known for a rare plant."
    }
  },
  {
    id: "poi-mt-inlandsea",
    name: { de: "Inland Sea", hu: "Beltenger", ro: "Marea Interioară", en: "Inland Sea" },
    type: "nature",
    coords: [36.0531, 14.1925],
    parent: "MT",
    shortDesc: {
      de: "Eine Lagune mit Meerwasser auf Gozo, die durch einen schmalen Tunnel mit dem offenen Meer verbunden ist.",
      hu: "Sós vizű lagúna Gozón, amelyet egy szűk alagút köt össze a nyílt tengerrel.",
      ro: "O lagună cu apă de mare pe Gozo, conectată la mare deschisă printr-un tunel îngust.",
      en: "A lagoon of seawater on Gozo linked to the Mediterranean Sea through a narrow natural arch."
    }
  },
  
  // Kulturális
  {
    id: "poi-mt-popeye",
    name: { de: "Popeye Village", hu: "Popeye Falu", ro: "Satul Popeye", en: "Popeye Village" },
    type: "cultural",
    coords: [35.9606, 14.3411],
    parent: "MT",
    shortDesc: {
      de: "Ein farbenfrohes Filmdorf aus dem Popeye-Film von 1980, heute ein Freizeitpark.",
      hu: "A színes díszletfalu az 1980-as Popeye-filmből, amely ma vidámparkként működik.",
      ro: "Fostul platou de filmare pentru filmul Popeye din 1980, acum un parc de distracții.",
      en: "A colorful purpose-built film set village for the 1980 Popeye musical, now a theme park."
    }
  },
  {
    id: "poi-mt-aquarium",
    name: { de: "Malta National Aquarium", hu: "Máltai Nemzeti Akvárium", ro: "Acvariul Național Malta", en: "Malta National Aquarium" },
    type: "cultural",
    coords: [35.9558, 14.4217],
    parent: "MT",
    shortDesc: {
      de: "Ein großes Aquarium in Qawra, das das Meeresleben des Mittelmeers zeigt.",
      hu: "Nagy akvárium Qawrában, amely a Földközi-tenger tengeri élővilágát mutatja be.",
      ro: "Un mare acvariu în Qawra, care prezintă viața marină din Mediterană.",
      en: "A large public aquarium in Qawra displaying Mediterranean marine life."
    }
  },
  {
    id: "poi-mt-manoel",
    name: { de: "Manoel Theatre", hu: "Manoel Színház", ro: "Teatrul Manoel", en: "Manoel Theatre" },
    type: "cultural",
    coords: [35.8997, 14.5125],
    parent: "MT",
    shortDesc: {
      de: "Eines der ältesten noch bespielten Theater der Welt, in Valletta.",
      hu: "A világ egyik legrégebbi máig működő színháza Vallettában.",
      ro: "Unul dintre cele mai vechi teatre din lume aflate încă în funcțiune, situat în Valletta.",
      en: "One of the oldest working theatres in the world, located in Valletta."
    }
  },
  {
    id: "poi-mt-taqali",
    name: { de: "Ta' Qali Crafts Village", hu: "Ta' Qali kézműves falu", ro: "Satul de meserii Ta' Qali", en: "Ta' Qali Crafts Village" },
    type: "cultural",
    coords: [35.8942, 14.4161],
    parent: "MT",
    shortDesc: {
      de: "Ein ehemaliger Flugplatz, der heute als Handwerkerdorf mit maltesischer Glasbläserei dient.",
      hu: "Egykori repülőtér, amely ma kézműves faluként, többek között üvegfújással működik.",
      ro: "Fost aerodrom devenit un sat de meșteșuguri locale, faimos pentru sticla malteză.",
      en: "A former airfield now serving as a crafts village featuring traditional Maltese glass blowing."
    }
  },
  {
    id: "poi-mt-classiccar",
    name: { de: "Malta Classic Car Museum", hu: "Máltai Klasszikus Autó Múzeum", ro: "Muzeul de Mașini Clasice Malta", en: "Malta Classic Car Museum" },
    type: "cultural",
    coords: [35.9528, 14.4194],
    parent: "MT",
    shortDesc: {
      de: "Ein faszinierendes Museum in Qawra, das eine umfangreiche Sammlung von Oldtimern zeigt.",
      hu: "Fascináló múzeum Qawrában, amely oldtimerek és klasszikus autók gyűjteményét mutatja be.",
      ro: "Un muzeu fascinant în Qawra, care afișează o colecție de mașini clasice.",
      en: "A fascinating museum in Qawra displaying a large collection of vintage and classic cars."
    }
  },
  {
    id: "poi-mt-playmobil",
    name: { de: "Playmobil FunPark", hu: "Playmobil Vidámpark", ro: "Playmobil FunPark", en: "Playmobil FunPark" },
    type: "cultural",
    coords: [35.8153, 14.5056],
    parent: "MT",
    shortDesc: {
      de: "Ein Unterhaltungspark in der Nähe der Playmobil-Fabrik, ideal für Familien.",
      hu: "Szórakoztató park a máltai Playmobil gyár mellett, ideális családoknak.",
      ro: "Un parc de distracții lângă fabrica Playmobil, ideal pentru familii.",
      en: "An entertainment park near the Playmobil factory, great for families with children."
    }
  }
];
