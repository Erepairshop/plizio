import type { POI } from "./poi";

export const cyprusCountry: POI = {
  id: "country-cyprus",
  type: "country",
  parent: "europe",
  coords: [33.4299, 35.1264],
  name: {
    de: "Zypern",
    hu: "Ciprus",
    ro: "Cipru",
    en: "Cyprus"
  },
  description: {
    de: "Zypern ist eine sonnenverwöhnte Insel im östlichen Mittelmeer, bekannt für ihre reiche Geschichte, antike Ruinen und traumhafte Strände.",
    hu: "Ciprus egy napsütötte sziget a Földközi-tenger keleti részén, amely gazdag történelméről, ókori romjairól és gyönyörű strandjairól ismert.",
    ro: "Cipru este o insulă însorită din estul Mării Mediterane, cunoscută pentru istoria sa bogată, ruinele antice și plajele de vis.",
    en: "Cyprus is a sun-drenched island in the eastern Mediterranean, known for its rich history, ancient ruins, and stunning beaches."
  },
  descriptionAdvanced: {
    de: "Zypern ist die drittgrößte Insel im Mittelmeer und liegt an der Kreuzung dreier Kontinente. Sie blickt auf eine über 10.000-jährige Geschichte zurück.",
    hu: "Ciprus a Földközi-tenger harmadik legnagyobb szigete, három kontinens kereszteződésében. Több mint 10 000 éves múlttal rendelkezik.",
    ro: "Cipru este a treia insulă ca mărime din Marea Mediterană, situată la intersecția a trei continente. Are o istorie de peste 10.000 de ani.",
    en: "Cyprus is the third largest island in the Mediterranean, located at the crossroads of three continents. It boasts over 10,000 years of history."
  },
  facts: {
    de: ["Zypern ist als die Insel der Aphrodite bekannt."],
    hu: ["Ciprust Aphrodité szigeteként is ismerik."],
    ro: ["Cipru este cunoscută ca insula Afroditei."],
    en: ["Cyprus is known as the island of Aphrodite."]
  }
};

export const cyprusRegions: POI[] = [
  {
    id: "cy-nicosia",
    type: "city",
    parent: "CY-003",
    coords: [33.3666, 35.1666],
    name: { de: "Nikosia", hu: "Nicosia", ro: "Nicosia", en: "Nicosia" },
    description: {
      de: "Die Hauptstadt von Zypern, bekannt für ihre geteilte Altstadt und venezianischen Mauern.",
      hu: "Ciprus fővárosa, mely kettéosztott óvárosáról és velencei falairól ismert.",
      ro: "Capitala Ciprului, cunoscută pentru orașul său vechi divizat și zidurile venețiene.",
      en: "The capital of Cyprus, known for its divided old town and Venetian walls."
    }
  },
  {
    id: "cy-limassol",
    type: "city",
    parent: "CY-004",
    coords: [33.0443, 34.6750],
    name: { de: "Limassol", hu: "Limassol", ro: "Limassol", en: "Limassol" },
    description: {
      de: "Zweitgrößte Stadt Zyperns und ein bedeutendes Handels- und Tourismuszentrum.",
      hu: "Ciprus második legnagyobb városa, jelentős kereskedelmi és turisztikai központ.",
      ro: "Al doilea oraș ca mărime din Cipru și un important centru comercial și turistic.",
      en: "The second largest city in Cyprus and a major commercial and tourist hub."
    }
  },
  {
    id: "cy-larnaca",
    type: "city",
    parent: "CY-001",
    coords: [33.6333, 34.9000],
    name: { de: "Larnaca", hu: "Lárnaka", ro: "Larnaca", en: "Larnaca" },
    description: {
      de: "Küstenstadt mit einer palmengesäumten Promenade und dem internationalen Flughafen.",
      hu: "Tengerparti város pálmafás sétánnyal és a nemzetközi repülőtérrel.",
      ro: "Oraș de coastă cu o promenadă mărginită de palmieri și aeroportul internațional.",
      en: "A coastal city with a palm-lined promenade and the international airport."
    }
  },
  {
    id: "cy-paphos",
    type: "city",
    parent: "CY-005",
    coords: [32.4245, 34.7768],
    name: { de: "Paphos", hu: "Páfosz", ro: "Paphos", en: "Paphos" },
    description: {
      de: "Berühmt für seine antiken Ruinen und als mythischer Geburtsort der Aphrodite.",
      hu: "Híres ókori romjairól és mint Aphrodité mitikus szülőhelye.",
      ro: "Faimos pentru ruinele sale antice și ca locul mitic de naștere al Afroditei.",
      en: "Famous for its ancient ruins and as the mythical birthplace of Aphrodite."
    }
  },
  {
    id: "cy-famagusta",
    type: "city",
    parent: "CY-002",
    coords: [33.9422, 35.1250],
    name: { de: "Famagusta", hu: "Famagusta", ro: "Famagusta", en: "Famagusta" },
    description: {
      de: "Historische Hafenstadt an der Ostküste mit beeindruckenden mittelalterlichen Ruinen.",
      hu: "Történelmi kikötőváros a keleti parton, lenyűgöző középkori romokkal.",
      ro: "Oraș-port istoric pe coasta de est, cu ruine medievale impresionante.",
      en: "A historical port city on the east coast with impressive medieval ruins."
    }
  },
  {
    id: "cy-kyrenia",
    type: "city",
    parent: "country-cyprus",
    coords: [33.3167, 35.3333],
    name: { de: "Kyrenia", hu: "Kerínia", ro: "Kyrenia", en: "Kyrenia" },
    description: {
      de: "Malerische Stadt an der Nordküste mit einem hufeisenförmigen Hafen und einer Festung.",
      hu: "Festői város az északi parton, patkó alakú kikötővel és várral.",
      ro: "Oraș pitoresc pe coasta de nord, cu un port în formă de potcoavă și o fortăreață.",
      en: "A picturesque city on the north coast with a horseshoe-shaped harbor and a castle."
    }
  },
  {
    id: "cy-ayianapa",
    type: "city",
    parent: "CY-002",
    coords: [34.0000, 34.9833],
    name: { de: "Ayia Napa", hu: "Ayia Napa", ro: "Ayia Napa", en: "Ayia Napa" },
    description: {
      de: "Bekannt für seine Sandstrände, das mittelalterliche Kloster und ein lebhaftes Nachtleben.",
      hu: "Homokos tengerpartjairól, középkori kolostoráról és pezsgő éjszakai életéről ismert.",
      ro: "Cunoscută pentru plajele sale de nisip, mănăstirea medievală și viața de noapte vibrantă.",
      en: "Known for its sandy beaches, medieval monastery, and vibrant nightlife."
    }
  },
  {
    id: "cy-kourion",
    type: "historical",
    parent: "CY-004",
    coords: [32.8872, 34.6653],
    name: { de: "Kourion", hu: "Kourion", ro: "Kourion", en: "Kourion" },
    description: {
      de: "Eine der beeindruckendsten archäologischen Stätten Zyperns mit einem römischen Theater.",
      hu: "Ciprus egyik leglenyűgözőbb régészeti lelőhelye római kori színházzal.",
      ro: "Unul dintre cele mai impresionante situri arheologice din Cipru, cu un teatru roman.",
      en: "One of the most impressive archaeological sites in Cyprus, featuring a Roman theatre."
    }
  },
  {
    id: "cy-tombs-kings",
    type: "historical",
    parent: "CY-005",
    coords: [32.4053, 34.7675],
    name: { de: "Königsgräber", hu: "Királysírok", ro: "Mormintele Regilor", en: "Tombs of the Kings" },
    description: {
      de: "Große Nekropole aus hellenistischer und römischer Zeit in der Nähe von Paphos.",
      hu: "Nagy kiterjedésű, hellenisztikus és római kori nekropolisz Páfosz közelében.",
      ro: "O mare necropolă din perioada elenistică și romană în apropiere de Paphos.",
      en: "A large necropolis from the Hellenistic and Roman periods near Paphos."
    }
  },
  {
    id: "cy-kolossi",
    type: "historical",
    parent: "CY-004",
    coords: [32.9344, 34.6653],
    name: { de: "Burg Kolossi", hu: "Kolossi vár", ro: "Castelul Kolossi", en: "Kolossi Castle" },
    description: {
      de: "Ehemalige Kreuzritterburg in der Nähe von Limassol.",
      hu: "Egykori keresztes lovagvár Limassol közelében.",
      ro: "O fostă fortăreață a cruciaților în apropiere de Limassol.",
      en: "A former Crusader stronghold located near Limassol."
    }
  },
  {
    id: "cy-hala-sultan",
    type: "historical",
    parent: "CY-001",
    coords: [33.6083, 34.8856],
    name: { de: "Hala Sultan Tekke", hu: "Hala Szultan Tekke", ro: "Hala Sultan Tekke", en: "Hala Sultan Tekke" },
    description: {
      de: "Bedeutende islamische Pilgerstätte am Salzsee von Larnaca.",
      hu: "Jelentős iszlám zarándokhely a lárnakai Sós-tó partján.",
      ro: "Un important loc de pelerinaj islamic pe malul Lacului Sărat din Larnaca.",
      en: "A prominent Islamic pilgrimage site located on the Larnaca Salt Lake."
    }
  },
  {
    id: "cy-kykkos",
    type: "historical",
    parent: "CY-003",
    coords: [32.7400, 34.9800],
    name: { de: "Kykkos-Kloster", hu: "Kykkos-kolostor", ro: "Mănăstirea Kykkos", en: "Kykkos Monastery" },
    description: {
      de: "Das reichste und bekannteste Kloster Zyperns im Troodos-Gebirge.",
      hu: "Ciprus leggazdagabb és legismertebb kolostora a Troodos-hegységben.",
      ro: "Cea mai bogată și cunoscută mănăstire din Cipru, situată în munții Troodos.",
      en: "The wealthiest and best-known monastery in Cyprus, located in the Troodos Mountains."
    }
  },
  {
    id: "cy-salamis",
    type: "historical",
    parent: "CY-002",
    coords: [33.9011, 35.1836],
    name: { de: "Salamis", hu: "Szalamisz", ro: "Salamis", en: "Salamis" },
    description: {
      de: "Umfangreiche antike Ruinenstadt an der Ostküste Zyperns.",
      hu: "Kiterjedt ókori romváros Ciprus keleti partján.",
      ro: "Un oraș antic extins pe coasta de est a Ciprului.",
      en: "An extensive ancient ruined city on the east coast of Cyprus."
    }
  },
  {
    id: "cy-choirokoitia",
    type: "historical",
    parent: "CY-001",
    coords: [33.3444, 34.7961],
    name: { de: "Choirokoitia", hu: "Khirokitia", ro: "Choirokoitia", en: "Choirokoitia" },
    description: {
      de: "Eine der wichtigsten prähistorischen Stätten im östlichen Mittelmeerraum (UNESCO).",
      hu: "A Földközi-tenger keleti medencéjének egyik legfontosabb történelem előtti lelőhelye (UNESCO).",
      ro: "Unul dintre cele mai importante situri preistorice din estul Mării Mediterane (UNESCO).",
      en: "One of the most important prehistoric sites in the eastern Mediterranean (UNESCO)."
    }
  },
  {
    id: "cy-st-lazarus",
    type: "historical",
    parent: "CY-001",
    coords: [33.6367, 34.9114],
    name: { de: "Lazarus-Kirche", hu: "Szent Lázár-templom", ro: "Biserica Sfântul Lazăr", en: "Church of Saint Lazarus" },
    description: {
      de: "Historische byzantinische Kirche im Zentrum von Larnaca.",
      hu: "Történelmi bizánci templom Lárnaka központjában.",
      ro: "O biserică istorică bizantină în centrul orașului Larnaca.",
      en: "A historical Byzantine church in the center of Larnaca."
    }
  },
  {
    id: "cy-mount-olympus",
    type: "landmark",
    parent: "CY-004",
    coords: [32.8633, 34.9367],
    name: { de: "Olympos", hu: "Olymposz (Troodos)", ro: "Muntele Olimp", en: "Mount Olympus" },
    description: {
      de: "Der höchste Punkt Zyperns im Troodos-Gebirge (1.952 m).",
      hu: "Ciprus legmagasabb pontja a Troodos-hegységben (1952 m).",
      ro: "Cel mai înalt punct din Cipru, situat în munții Troodos (1.952 m).",
      en: "The highest point in Cyprus, located in the Troodos Mountains (1,952 m)."
    }
  },
  {
    id: "cy-cape-greco",
    type: "landmark",
    parent: "CY-002",
    coords: [34.0767, 34.9619],
    name: { de: "Kap Greco", hu: "Greco-fok", ro: "Capul Greco", en: "Cape Greco" },
    description: {
      de: "Ein atemberaubender Nationalpark mit Meereshöhlen und klarem blauen Wasser.",
      hu: "Lélegzetelállító nemzeti park tengeri barlangokkal és kristálytiszta vízzel.",
      ro: "Un parc național uimitor, cu peșteri marine și ape de un albastru limpede.",
      en: "A stunning national park featuring sea caves and clear blue waters."
    }
  },
  {
    id: "cy-akamas",
    type: "landmark",
    parent: "CY-005",
    coords: [32.3167, 35.0333],
    name: { de: "Akamas-Halbinsel", hu: "Akamasz-félsziget", ro: "Peninsula Akamas", en: "Akamas Peninsula" },
    description: {
      de: "Ein Naturschutzgebiet im Westen mit unberührter Landschaft und großer Artenvielfalt.",
      hu: "Természetvédelmi terület a nyugati parton, érintetlen tájjal és gazdag élővilággal.",
      ro: "O rezervație naturală în vest, cu un peisaj neatins și o mare diversitate de specii.",
      en: "A nature reserve in the west with untouched landscapes and rich biodiversity."
    }
  },
  {
    id: "cy-salt-lake",
    type: "landmark",
    parent: "CY-001",
    coords: [33.6000, 34.8900],
    name: { de: "Salzsee von Larnaca", hu: "Lárnakai Sós-tó", ro: "Lacul Sărat din Larnaca", en: "Larnaca Salt Lake" },
    description: {
      de: "Ein komplexes Netzwerk von Salzseen, bekannt als Überwinterungsplatz für Flamingos.",
      hu: "Sós tavak hálózata, amely a flamingók téli menedékhelyeként ismert.",
      ro: "O rețea complexă de lacuri sărate, cunoscută ca loc de iernat pentru flamingi.",
      en: "A complex network of salt lakes, known as a wintering ground for flamingos."
    }
  },
  {
    id: "cy-aphrodite-rock",
    type: "landmark",
    parent: "CY-005",
    coords: [32.6269, 34.6642],
    name: { de: "Felsen der Aphrodite", hu: "Aphrodité sziklája", ro: "Stânca Afroditei", en: "Aphrodite's Rock (Petra tou Romiou)" },
    description: {
      de: "Eine markante Felsformation im Meer, der legendäre Geburtsort der Göttin Aphrodite.",
      hu: "Különleges sziklaalakzat a tengerben, Aphrodité istennő legendás szülőhelye.",
      ro: "O formațiune stâncoasă impresionantă în mare, locul legendar de naștere al zeiței Afrodita.",
      en: "A striking sea stack, the legendary birthplace of the goddess Aphrodite."
    }
  },
  {
    id: "cy-avakas-gorge",
    type: "landmark",
    parent: "CY-005",
    coords: [32.3333, 34.9250],
    name: { de: "Avakas-Schlucht", hu: "Avakas-szurdok", ro: "Cheile Avakas", en: "Avakas Gorge" },
    description: {
      de: "Eine tiefe, steile Schlucht auf der Akamas-Halbinsel, beliebt bei Wanderern.",
      hu: "Egy mély, meredek szurdok az Akamasz-félszigeten, kedvelt túrázóhely.",
      ro: "Un defileu adânc și abrupt pe Peninsula Akamas, popular printre drumeți.",
      en: "A deep, steep gorge on the Akamas Peninsula, popular with hikers."
    }
  },
  {
    id: "cy-nissi-beach",
    type: "landmark",
    parent: "CY-002",
    coords: [33.9686, 34.9881],
    name: { de: "Nissi Strand", hu: "Nissi Beach", ro: "Plaja Nissi", en: "Nissi Beach" },
    description: {
      de: "Einer der berühmtesten weißen Sandstrände in Ayia Napa.",
      hu: "Ayia Napa egyik leghíresebb fehér homokos strandja.",
      ro: "Una dintre cele mai faimoase plaje cu nisip alb din Ayia Napa.",
      en: "One of the most famous white sand beaches in Ayia Napa."
    }
  },
  {
    id: "cy-limassol-carnival",
    type: "landmark",
    parent: "CY-004",
    coords: [33.0450, 34.6760],
    name: { de: "Karneval in Limassol", hu: "Limassoli karnevál", ro: "Carnavalul din Limassol", en: "Limassol Carnival" },
    description: {
      de: "Ein jährliches zehntägiges Festival, das älteste und beliebteste in Zypern.",
      hu: "Évente megrendezett, tíz napos fesztivál, Ciprus legrégebbi és legnépszerűbb karneválja.",
      ro: "Un festival anual de zece zile, cel mai vechi și mai popular din Cipru.",
      en: "An annual ten-day festival, the oldest and most popular in Cyprus."
    }
  },
  {
    id: "cy-paphos-aphrodite",
    type: "landmark",
    parent: "CY-005",
    coords: [32.4240, 34.7770],
    name: { de: "Paphos Aphrodite Festival", hu: "Páfoszi Aphrodité Fesztivál", ro: "Festivalul Afrodita din Paphos", en: "Paphos Aphrodite Festival" },
    description: {
      de: "Ein internationales Opernfestival, das jeden Sommer in Paphos stattfindet.",
      hu: "Nemzetközi operafesztivál, melyet minden nyáron megrendeznek Páfoszban.",
      ro: "Un festival internațional de operă care are loc în fiecare vară în Paphos.",
      en: "An international opera festival held every summer in Paphos."
    }
  },
  {
    id: "cy-kataklysmos",
    type: "landmark",
    parent: "CY-001",
    coords: [33.6335, 34.9010],
    name: { de: "Kataklysmos", hu: "Kataklysmos", ro: "Kataklysmos", en: "Kataklysmos" },
    description: {
      de: "Das Fest der Sintflut, besonders groß in Larnaca mit Aktivitäten am Wasser gefeiert.",
      hu: "Az özönvíz ünnepe, melyet Lárnakában különösen látványos vízparti programokkal ünnepelnek.",
      ro: "Sărbătoarea Potopului, celebrată în special în Larnaca cu activități pe apă.",
      en: "The Festival of the Flood, celebrated grandly in Larnaca with waterfront activities."
    }
  },
  {
    id: "cy-wine-festival",
    type: "landmark",
    parent: "CY-004",
    coords: [33.0500, 34.6800],
    name: { de: "Weinfestival", hu: "Bor Fesztivál", ro: "Festivalul Vinului", en: "Limassol Wine Festival" },
    description: {
      de: "Ein beliebtes Festival in Limassol zur Feier der zypriotischen Weintradition.",
      hu: "Népszerű fesztivál Limassolban a ciprusi borászati hagyományok ünneplésére.",
      ro: "Un festival popular în Limassol pentru celebrarea tradiției vinului cipriot.",
      en: "A popular festival in Limassol celebrating the Cypriot winemaking tradition."
    }
  },
  {
    id: "cy-st-hilarion",
    type: "historical",
    parent: "country-cyprus",
    coords: [33.2408, 35.3117],
    name: { de: "Burg St. Hilarion", hu: "Szent Hilarion vár", ro: "Castelul Sfântul Ilarion", en: "St. Hilarion Castle" },
    description: {
      de: "Eine Burgruine im Kyrenia-Gebirge, die angeblich Walt Disney inspirierte.",
      hu: "Várrom a Kerínia-hegységben, amely a legenda szerint Walt Disneyt is megihlette.",
      ro: "O ruină a unui castel din munții Kyrenia, care se presupune că l-ar fi inspirat pe Walt Disney.",
      en: "A castle ruin in the Kyrenia Mountains, said to have inspired Walt Disney."
    }
  },
  {
    id: "cy-bellapais",
    type: "historical",
    parent: "country-cyprus",
    coords: [33.3556, 35.3061],
    name: { de: "Abtei Bellapais", hu: "Bellapais apátság", ro: "Abația Bellapais", en: "Bellapais Abbey" },
    description: {
      de: "Die Ruine eines Klosters aus dem 13. Jahrhundert in der Nähe von Kyrenia.",
      hu: "Egy 13. századi kolostor lenyűgöző romjai Kerínia közelében.",
      ro: "Ruinele unei mănăstiri din secolul al XIII-lea lângă Kyrenia.",
      en: "The ruin of a 13th-century monastery near Kyrenia."
    }
  },
  {
    id: "cy-othello-castle",
    type: "historical",
    parent: "CY-002",
    coords: [33.9422, 35.1264],
    name: { de: "Othello-Turm", hu: "Othello-torony", ro: "Turnul Othello", en: "Othello Castle" },
    description: {
      de: "Eine Burg in Famagusta, die nach Shakespeares berühmtem Stück benannt wurde.",
      hu: "Vár Famagustában, amelyet Shakespeare híres drámája után neveztek el.",
      ro: "Un castel din Famagusta, numit după faimoasa piesă a lui Shakespeare.",
      en: "A castle in Famagusta, named after Shakespeare's famous play."
    }
  },
  {
    id: "cy-blue-lagoon",
    type: "landmark",
    parent: "CY-005",
    coords: [32.3250, 35.0667],
    name: { de: "Blaue Lagune", hu: "Kék Lagúna", ro: "Laguna Albastră", en: "Blue Lagoon" },
    description: {
      de: "Ein beliebtes Badeziel mit kristallklarem Wasser auf der Akamas-Halbinsel.",
      hu: "Népszerű fürdőzőhely kristálytiszta vízzel az Akamasz-félszigeten.",
      ro: "O destinație populară pentru înot, cu apă cristalină, pe Peninsula Akamas.",
      en: "A popular swimming spot with crystal-clear water on the Akamas Peninsula."
    }
  },
  {
    id: "CY-001-zenobia",
    type: "landmark",
    parent: "CY-001",
    coords: [33.6558, 34.8986],
    name: { de: "Zenobia Wrack", hu: "Zenobia roncs", ro: "Epava Zenobia", en: "Zenobia Wreck" },
    description: {
      de: "Einer der besten Tauchplätze der Welt, ein gesunkenes Fährschiff vor der Küste von Larnaca.",
      hu: "A világ egyik legjobb merülőhelye, egy elsüllyedt komp Larnaca partjainál.",
      ro: "Unul dintre cele mai bune locuri de scufundări din lume, un feribot scufundat în largul coastei Larnaca.",
      en: "One of the world's top diving sites, a sunken ferry located off the coast of Larnaca."
    },
    facts: {
      de: ["Die Zenobia sank 1980 auf ihrer Jungfernfahrt.", "Das Wrack liegt in einer Tiefe von 16 bis 42 Metern.", "Es wird oft als die 'Titanic des Mittelmeers' bezeichnet."],
      hu: ["A Zenobia 1980-ban süllyedt el első útján.", "A roncs 16 és 42 méter közötti mélységben fekszik.", "Gyakran a 'Földközi-tenger Titanicjaként' emlegetik."],
      ro: ["Zenobia s-a scufundat în 1980 în timpul călătoriei sale inaugurale.", "Epava se află la o adâncime cuprinsă între 16 și 42 de metri.", "Este adesea numită 'Titanicul Mediteranei'."],
      en: ["The Zenobia sank in 1980 on her maiden voyage.", "The wreck lies at a depth of 16 to 42 meters.", "It is often referred to as the 'Titanic of the Mediterranean'."]
    }
  },
  {
    id: "CY-001-larnaca-fort",
    type: "landmark",
    parent: "CY-001",
    coords: [33.6375, 34.9103],
    name: { de: "Festung von Larnaca", hu: "Larnaca erőd", ro: "Cetatea din Larnaca", en: "Larnaca Castle" },
    description: {
      de: "Eine mittelalterliche Festung am südlichen Ende der Finikoudes-Promenade.",
      hu: "Középkori erőd a Finikoudes sétány déli végén.",
      ro: "O cetate medievală la capătul sudic al promenadei Finikoudes.",
      en: "A medieval castle located at the southern end of the Finikoudes promenade."
    },
    facts: {
      de: ["Ursprünglich im 14. Jahrhundert erbaut.", "Diente während der britischen Herrschaft als Gefängnis.", "Beherbergt heute ein kleines mittelalterliches Museum."],
      hu: ["Eredetileg a 14. században épült.", "A brit uralom idején börtönként szolgált.", "Ma egy kis középkori múzeumnak ad otthont."],
      ro: ["Construită inițial în secolul al XIV-lea.", "A servit ca închisoare în timpul stăpânirii britanice.", "Astăzi găzduiește un mic muzeu medieval."],
      en: ["Originally built in the 14th century.", "Served as a prison during British rule.", "Now houses a small medieval museum."]
    }
  },
  {
    id: "CY-002-varosha",
    type: "landmark",
    parent: "CY-002",
    coords: [33.9553, 35.1097],
    name: { de: "Varosha (Geisterstadt)", hu: "Varoszi (Szellemváros)", ro: "Varosha (Orașul Fantomă)", en: "Varosha (Ghost Town)" },
    description: {
      de: "Ein einst blühendes Tourismusviertel von Famagusta, das seit 1974 verlassen ist.",
      hu: "Famagusta egykor virágzó turisztikai negyede, amely 1974 óta elhagyatott.",
      ro: "Un cartier turistic odinioară înfloritor din Famagusta, abandonat din 1974.",
      en: "A once-thriving tourist district of Famagusta, abandoned since 1974."
    },
    facts: {
      de: ["Vor 1974 war es eines der beliebtesten Urlaubsziele der Welt.", "Es blieb jahrzehntelang für die Öffentlichkeit gesperrt.", "Seit 2020 sind Teile der Stadt wieder für Besucher zugänglich."],
      hu: ["1974 előtt a világ egyik legnépszerűbb üdülőhelye volt.", "Évtizedekig zárva volt a nyilvánosság előtt.", "2020 óta a város egyes részei újra látogathatók."],
      ro: ["Înainte de 1974, a fost una dintre cele mai populare destinații de vacanță din lume.", "A rămas închis publicului timp de decenii.", "Din 2020, părți ale orașului au fost redeschise vizitatorilor."],
      en: ["Before 1974, it was one of the most popular holiday destinations in the world.", "It remained closed to the public for decades.", "Since 2020, parts of the city have been reopened to visitors."]
    }
  },
  {
    id: "CY-002-fig-tree-bay",
    type: "landmark",
    parent: "CY-002",
    coords: [34.0583, 35.0125],
    name: { de: "Feigenbaumbucht", hu: "Fügefa-öböl", ro: "Fig Tree Bay", en: "Fig Tree Bay" },
    description: {
      de: "Ein beliebter Sandstrand in Protaras, bekannt für sein kristallklares Wasser.",
      hu: "Népszerű homokos strand Protarasban, kristálytiszta vizéről ismert.",
      ro: "O plajă populară cu nisip în Protaras, cunoscută pentru apele sale cristaline.",
      en: "A popular sandy beach in Protaras, known for its crystal-clear waters."
    },
    facts: {
      de: ["Benannt nach einem einzelnen Feigenbaum, der dort seit dem 17. Jahrhundert stehen soll.", "Wird oft als einer der besten Strände Europas gewählt.", "Verfügt über eine kleine Insel, die man schwimmend erreichen kann."],
      hu: ["Egyetlen fügefáról kapta a nevét, amely a 17. század óta áll ott.", "Gyakran választják Európa egyik legjobb strandjának.", "Van egy kis szigete, amely úszva is elérhető."],
      ro: ["Numită după un singur smochin care ar fi stat acolo încă din secolul al XVII-lea.", "Este adesea votată printre cele mai bune plaje din Europa.", "Are o mică insulă care poate fi accesată prin înot."],
      en: ["Named after a single fig tree that has supposedly stood there since the 17th century.", "Often voted among the best beaches in Europe.", "Features a small islet that can be reached by swimming."]
    }
  },
  {
    id: "CY-003-cyprus-museum",
    type: "landmark",
    parent: "CY-003",
    coords: [33.3553, 35.1717],
    name: { de: "Zypern-Museum", hu: "Ciprusi Múzeum", ro: "Muzeul Ciprului", en: "Cyprus Museum" },
    description: {
      de: "Das älteste und größte archäologische Museum Zyperns in Nicosia.",
      hu: "Ciprus legrégebbi és legnagyobb régészeti múzeuma Nicosiában.",
      ro: "Muzeul Ciprului",
      en: "Cyprus Museum"
    },
    facts: {
      de: ["Beherbergt Funde von der Jungsteinzeit bis zur byzantinischen Zeit.", "Gegründet wurde es im Jahr 1882.", "Die berühmte Statue der Aphrodite von Soli ist hier ausgestellt."],
      hu: ["A neolitikumtól a bizánci korig őriz leleteket.", "1882-ben alapították.", "Itt látható a híres szoli Aphrodité-szobor."],
      ro: ["Găzduiește descoperiri din epoca neolitică până în perioada bizantină.", "A fost fondat în 1882.", "Celebra statuie a Afroditei din Soli este expusă aici."],
      en: ["It houses finds from the Neolithic age to the Byzantine period.", "It was founded in 1882.", "The famous statue of Aphrodite of Soli is exhibited here."]
    }
  },
  {
    id: "CY-003-ledra-street",
    type: "landmark",
    parent: "CY-003",
    coords: [33.3614, 35.1744],
    name: { de: "Ledrastraße", hu: "Ledra utca", ro: "Strada Ledra", en: "Ledra Street" },
    description: {
      de: "Die Haupteinkaufsstraße in der Altstadt von Nicosia.",
      hu: "Nicosia óvárosának fő bevásárlóutcája.",
      ro: "Principala stradă comercială din orașul vechi al Nicosiei.",
      en: "The main shopping street in the old town of Nicosia."
    },
    facts: {
      de: ["Bekannt für den Grenzübergang zwischen dem griechischen und türkischen Teil.", "Benannt nach dem antiken Stadtkönigreich Ledra.", "Fußgängerzone mit vielen Cafés und Geschäften."],
      hu: ["A görög és török részek közötti határátkelőről ismert.", "Az ókori Ledra városkirályságról kapta a nevét.", "Gyalogos övezet számos kávézóval és üzlettel."],
      ro: ["Cunoscută pentru punctul de trecere a frontierei între partea greacă și cea turcă.", "Numită după regatul antic Ledra.", "Zonă pietonală cu multe cafenele și magazine."],
      en: ["Known for the border crossing between the Greek and Turkish sides.", "Named after the ancient city-kingdom of Ledra.", "Pedestrian zone with many cafes and shops."]
    }
  },
  {
    id: "CY-004-amathus",
    type: "landmark",
    parent: "CY-004",
    coords: [33.1417, 34.7125],
    name: { de: "Amathous", hu: "Amathousz", ro: "Amathous", en: "Amathus" },
    description: {
      de: "Eine der bedeutendsten antiken Stadtkönigreiche Zyperns an der Küste von Limassol.",
      hu: "Ciprus egyik legjelentősebb ókori városkirálysága Limassol partjainál.",
      ro: "Unul dintre cele mai importante regate antice din Cipru, pe coasta Limassolului.",
      en: "One of the most important ancient city-kingdoms of Cyprus, located on the coast of Limassol."
    },
    facts: {
      de: ["Es war ein Zentrum der Verehrung der Göttin Aphrodite.", "Die Ausgrabungsstätte umfasst eine Akropolis und eine Basilika.", "Hier wurde der größte jemals gefundene Steinkrug entdeckt."],
      hu: ["Aphrodité istennő tiszteletének egyik központja volt.", "A régészeti területen akropolisz és bazilika is található.", "Itt fedezték fel a valaha talált legnagyobb kőkancsót."],
      ro: ["A fost un centru de cult al zeiței Afrodita.", "Situl arheologic include o acropolă și o basilică.", "Aici a fost descoperit cel mai mare vas de piatră găsit vreodată."],
      en: ["It was a center for the worship of the goddess Aphrodite.", "The archaeological site includes an acropolis and a basilica.", "The largest stone jar ever found was discovered here."]
    }
  },
  {
    id: "CY-004-sanctuary-apollo",
    type: "landmark",
    parent: "CY-004",
    coords: [32.8639, 34.6736],
    name: { de: "Heiligtum des Apollon Hylates", hu: "Apollón Hülátész szentélye", ro: "Sanctuarul lui Apollo Hylates", en: "Sanctuary of Apollo Hylates" },
    description: {
      de: "Ein bedeutendes antikes Heiligtum, das Apollon als Gott der Wälder gewidmet war.",
      hu: "Apollónnak, az erdők istenének szentelt jelentős ókori szentély.",
      ro: "Un important sanctuar antic dedicat lui Apollo ca zeu al pădurilor.",
      en: "A major ancient sanctuary dedicated to Apollo as god of the woodlands."
    },
    facts: {
      de: ["Liegt westlich der antiken Stadt Kourion.", "War eines der wichtigsten religiösen Zentren Zyperns.", "Die Anlage umfasst einen Tempel, eine Palästra und Bäder."],
      hu: ["Kourion ókori városától nyugatra fekszik.", "Ciprus egyik legfontosabb vallási központja volt.", "A területen templom, palatestra és fürdők is találhatók."],
      ro: ["Situat la vest de orașul antic Kourion.", "A fost unul dintre cele mai importante centre religioase din Cipru.", "Complexul include un templu, o palestră și băi."],
      en: ["Located west of the ancient city of Kourion.", "Was one of the most important religious centers of Cyprus.", "The site includes a temple, a palaestra, and baths."]
    }
  },
  {
    id: "CY-005-paphos-castle",
    type: "landmark",
    parent: "CY-005",
    coords: [32.4069, 34.7536],
    name: { de: "Burg Paphos", hu: "Páfoszi vár", ro: "Castelul din Paphos", en: "Paphos Castle" },
    description: {
      de: "Eine am Hafen von Paphos gelegene mittelalterliche Festung.",
      hu: "Páfosz kikötőjében található középkori erődítmény.",
      ro: "O fortăreață medievală situată în portul Paphos.",
      en: "A medieval fortress located at the edge of Paphos harbor."
    },
    facts: {
      de: ["Ursprünglich als byzantinische Festung zum Schutz des Hafens erbaut.", "Es wurde von den Lusignans und später von den Osmanen umgebaut.", "Heute dient es als Kulisse für das jährliche Paphos Aphrodite Festival."],
      hu: ["Eredetileg bizánci erődként épült a kikötő védelmére.", "A Lusignanok, majd később az oszmánok építették újjá.", "Ma az évenkénti Páfoszi Aphrodité Fesztivál díszleteként szolgál."],
      ro: ["Construit inițial ca o fortăreață bizantină pentru a proteja portul.", "A fost reconstruit de familia Lusignan și ulterior de otomani.", "Astăzi servește ca decor pentru festivalul anual de operă din Paphos."],
      en: ["Originally built as a Byzantine fort to protect the harbor.", "It was rebuilt by the Lusignans and later by the Ottomans.", "Today it serves as the backdrop for the annual Paphos Aphrodite Festival."]
    }
  },
  {
    id: "CY-005-adonis-baths",
    type: "landmark",
    parent: "CY-005",
    coords: [32.4436, 34.8697],
    name: { de: "Adonis-Bäder", hu: "Adonisz-fürdő", ro: "Băile lui Adonis", en: "Adonis Baths" },
    description: {
      de: "Ein malerischer Wasserfall und natürliches Schwimmbecken in der Nähe von Paphos.",
      hu: "Festői vízesés és természetes medence Páfosz közelében.",
      ro: "O cascadă pitorească și o piscină naturală lângă Paphos.",
      en: "A picturesque waterfall and natural swimming pool located near Paphos."
    },
    facts: {
      de: ["Der Legende nach trafen sich hier Adonis und Aphrodite.", "Unter dem Wasserfall befindet sich eine tiefe Lagune.", "Ein beliebter Ort für Naturliebhaber und Schwimmer."],
      hu: ["A legenda szerint Adonisz és Aphrodité itt találkoztak.", "A vízesés alatt egy mély lagúna található.", "A természetkedvelők és úszók kedvelt helye."],
      ro: ["Conform legendei, Adonis și Afrodita s-au întâlnit aici.", "Sub cascadă se află o lagună adâncă.", "Un loc popular pentru iubitorii de natură și înotători."],
      en: ["According to legend, Adonis and Aphrodite used to meet here.", "There is a deep lagoon underneath the waterfall.", "A popular spot for nature lovers and swimmers."]
    }
  }
];

export const cyprusAllPoi: POI[] = [
  cyprusCountry,
  ...cyprusRegions
];
