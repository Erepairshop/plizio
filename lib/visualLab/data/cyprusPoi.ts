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
    parent: "country-cyprus",
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
    parent: "country-cyprus",
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
    parent: "country-cyprus",
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
    parent: "country-cyprus",
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
    parent: "country-cyprus",
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
    parent: "country-cyprus",
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
    type: "history",
    parent: "country-cyprus",
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
    type: "history",
    parent: "country-cyprus",
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
    type: "history",
    parent: "country-cyprus",
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
    type: "history",
    parent: "country-cyprus",
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
    type: "history",
    parent: "country-cyprus",
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
    type: "history",
    parent: "country-cyprus",
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
    type: "history",
    parent: "country-cyprus",
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
    type: "history",
    parent: "country-cyprus",
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
    type: "nature",
    parent: "country-cyprus",
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
    type: "nature",
    parent: "country-cyprus",
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
    type: "nature",
    parent: "country-cyprus",
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
    type: "nature",
    parent: "country-cyprus",
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
    type: "nature",
    parent: "country-cyprus",
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
    type: "nature",
    parent: "country-cyprus",
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
    type: "nature",
    parent: "country-cyprus",
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
    type: "culture",
    parent: "country-cyprus",
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
    type: "culture",
    parent: "country-cyprus",
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
    type: "culture",
    parent: "country-cyprus",
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
    type: "culture",
    parent: "country-cyprus",
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
    type: "history",
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
    type: "history",
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
    type: "history",
    parent: "country-cyprus",
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
    type: "nature",
    parent: "country-cyprus",
    coords: [32.3250, 35.0667],
    name: { de: "Blaue Lagune", hu: "Kék Lagúna", ro: "Laguna Albastră", en: "Blue Lagoon" },
    description: {
      de: "Ein beliebtes Badeziel mit kristallklarem Wasser auf der Akamas-Halbinsel.",
      hu: "Népszerű fürdőzőhely kristálytiszta vízzel az Akamasz-félszigeten.",
      ro: "O destinație populară pentru înot, cu apă cristalină, pe Peninsula Akamas.",
      en: "A popular swimming spot with crystal-clear water on the Akamas Peninsula."
    }
  }
];

export const cyprusAllPoi: POI[] = [
  cyprusCountry,
  ...cyprusRegions
];
