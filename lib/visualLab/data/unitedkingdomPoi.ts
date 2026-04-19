import type { POI } from "./poi";

export const unitedkingdomCountry: POI = {
  id: "GB",
  type: "country",
  parent: "EUROPE",
  coords: [-2.0, 54.0],
  name: { de: "Vereinigtes Königreich", hu: "Egyesült Királyság", ro: "Regatul Unit", en: "United Kingdom" },
  image: "/geo-images/united-kingdom/united-kingdom.webp",
  description: {
    de: "Ein Inselstaat im Nordwesten Europas. Es besteht aus vier Landesteilen: England, Schottland, Wales und Nordirland.",
    hu: "Szigetország Északnyugat-Európában. Négy országrészből áll: Anglia, Skócia, Wales és Észak-Írország.",
    ro: "Un stat insular în nord-vestul Europei. Este format din patru țări: Anglia, Scoția, Țara Galilor și Irlanda de Nord.",
    en: "An island nation in northwestern Europe. It consists of four countries: England, Scotland, Wales, and Northern Ireland."
  },
  facts: {
    de: ["Hauptstadt ist London.", "Monarchie mit parlamentarischem System.", "Amtssprache ist Englisch.", "Die Währung ist das Britische Pfund."],
    hu: ["Fővárosa London.", "Parlamentáris monarchia.", "Hivatalos nyelve az angol.", "Pénzneme az angol font."],
    ro: ["Capitala este Londra.", "Monarhie cu sistem parlamentar.", "Limba oficială este engleza.", "Moneda este Lira sterlină."],
    en: ["Capital is London.", "Parliamentary monarchy.", "Official language is English.", "Currency is the British Pound."]
  }
};

export const unitedkingdomRegions: POI[] = [
  {
    id: "GB-ENG",
    type: "region",
    parent: "GB",
    coords: [-1.5, 52.5],
    name: { de: "England", hu: "Anglia", ro: "Anglia", en: "England" },
    image: "/geo-images/united-kingdom/england.webp",
    description: {
      de: "Der größte und bevölkerungsreichste Teil des Vereinigten Königreichs. Bekannt für seine Geschichte und Kultur.",
      hu: "Az Egyesült Királyság legnagyobb és legnépesebb része. Történelméről és kultúrájáról ismert.",
      ro: "Cea mai mare și mai populată parte a Regatului Unit. Cunoscută pentru istoria și cultura sa.",
      en: "The largest and most populous part of the United Kingdom. Known for its history and culture."
    },
    facts: {
      de: ["Größter Landesteil.", "London ist die Hauptstadt.", "Bekannt für Tee und Pubs.", "Heimat von Shakespeare."],
      hu: ["Legnagyobb országrész.", "London a fővárosa.", "A teáról és a pubokról ismert.", "Shakespeare hazája."],
      ro: ["Cea mai mare regiune.", "Londra este capitala.", "Cunoscută pentru ceai și pub-uri.", "Patria lui Shakespeare."],
      en: ["Largest country.", "London is the capital.", "Known for tea and pubs.", "Home of Shakespeare."]
    }
  },
  {
    id: "GB-SCT",
    type: "region",
    parent: "GB",
    coords: [-4.0, 56.5],
    name: { de: "Schottland", hu: "Skócia", ro: "Scoția", en: "Scotland" },
    image: "/geo-images/united-kingdom/scotland.webp",
    description: {
      de: "Liegt im Norden der Insel. Berühmt für seine Highlands, Lochs und Burgen.",
      hu: "A sziget északi részén fekszik. Híres a Felföldről, a tavairól (loch) és a kastélyairól.",
      ro: "Situată în nordul insulei. Faimoasă pentru Highlands, lacuri și castele.",
      en: "Located in the north of the island. Famous for its Highlands, lochs, and castles."
    },
    facts: {
      de: ["Hauptstadt ist Edinburgh.", "Bekannt für Dudelsäcke und Kilt.", "Zahlreiche Süßwasserseen.", "Unabhängiges Rechtssystem."],
      hu: ["Fővárosa Edinburgh.", "A dudáról és a kiltről ismert.", "Számos édesvizű tava van.", "Független jogrendszer."],
      ro: ["Capitala este Edinburgh.", "Cunoscută pentru cimpoi și kilt.", "Numeroase lacuri cu apă dulce.", "Sistem juridic independent."],
      en: ["Capital is Edinburgh.", "Known for bagpipes and kilts.", "Numerous freshwater lochs.", "Independent legal system."]
    }
  },
  {
    id: "GB-WLS",
    type: "region",
    parent: "GB",
    coords: [-3.5, 52.3],
    name: { de: "Wales", hu: "Wales", ro: "Țara Galilor", en: "Wales" },
    image: "/geo-images/united-kingdom/wales.webp",
    description: {
      de: "Liegt im Westen Großbritanniens. Ein Land mit rauer Küste und bergigen Nationalparks.",
      hu: "Nagy-Britannia nyugati részén fekszik. Zord tengerpartjairól és hegyvidéki nemzeti parkjairól ismert.",
      ro: "Situată în vestul Marii Britanii. O țară cu coastă accidentată și parcuri naționale muntoase.",
      en: "Located in the west of Great Britain. A country with rugged coastline and mountainous national parks."
    },
    facts: {
      de: ["Hauptstadt ist Cardiff.", "Hat eine eigene Sprache (Walisisch).", "Land der Burgen.", "Der rote Drache auf der Flagge."],
      hu: ["Fővárosa Cardiff.", "Saját nyelvvel rendelkezik (walesi).", "A kastélyok földje.", "A vörös sárkány a zászlón."],
      ro: ["Capitala este Cardiff.", "Are propria limbă (galeza).", "Țara castelelor.", "Dragonul roșu pe steag."],
      en: ["Capital is Cardiff.", "Has its own language (Welsh).", "Land of castles.", "The red dragon on the flag."]
    }
  },
  {
    id: "GB-NIR",
    type: "region",
    parent: "GB",
    coords: [-6.5, 54.6],
    name: { de: "Nordirland", hu: "Észak-Írország", ro: "Irlanda de Nord", en: "Northern Ireland" },
    image: "/geo-images/united-kingdom/northern-ireland.webp",
    description: {
      de: "Liegt auf der Insel Irland. Bekannt für seine Landschaften und komplexe Geschichte.",
      hu: "Az Ír-szigeten található. Tájairól és összetett történelméről ismert.",
      ro: "Situată pe insula Irlanda. Cunoscută pentru peisajele sale și istoria complexă.",
      en: "Located on the island of Ireland. Known for its landscapes and complex history."
    },
    facts: {
      de: ["Hauptstadt ist Belfast.", "Teilt sich eine Insel mit der Republik Irland.", "Giant's Causeway.", "Titanic wurde hier gebaut."],
      hu: ["Fővárosa Belfast.", "Közös szigeten osztozik az Ír Köztársasággal.", "Óriások útja (Giant's Causeway).", "Itt épült a Titanic."],
      ro: ["Capitala este Belfast.", "Împarte o insulă cu Republica Irlanda.", "Giant's Causeway.", "Titanic a fost construit aici."],
      en: ["Capital is Belfast.", "Shares an island with the Republic of Ireland.", "Giant's Causeway.", "Titanic was built here."]
    }
  }
];

export const unitedkingdomCities: POI[] = [
  {
    id: "city-london",
    type: "state-capital",
    parent: "GB-ENG",
    coords: [-0.1276, 51.5074],
    name: { de: "London", hu: "London", ro: "Londra", en: "London" },
    image: "/geo-images/united-kingdom/london.webp",
    description: {
      de: "Hauptstadt des Vereinigten Königreichs. Eine Weltmetropole an der Themse.",
      hu: "Az Egyesült Királyság fővárosa. Világváros a Temze partján.",
      ro: "Capitala Regatului Unit. O metropolă globală pe Tamisa.",
      en: "Capital of the United Kingdom. A global metropolis on the Thames."
    },
    facts: {
      de: ["Sitz der Regierung.", "Bekannt für den Big Ben.", "Über 8 Millionen Einwohner.", "Hat viele berühmte Museen."],
      hu: ["A kormány székhelye.", "A Big Benről ismert.", "Több mint 8 millió lakos.", "Számos híres múzeummal rendelkezik."],
      ro: ["Sediul guvernului.", "Cunoscută pentru Big Ben.", "Peste 8 milioane de locuitori.", "Are multe muzee faimoase."],
      en: ["Seat of the government.", "Known for Big Ben.", "Over 8 million inhabitants.", "Has many famous museums."]
    }
  },
  {
    id: "city-manchester",
    type: "city",
    parent: "GB-ENG",
    coords: [-2.2426, 53.4808],
    name: { de: "Manchester", hu: "Manchester", ro: "Manchester", en: "Manchester" },
    image: "/geo-images/united-kingdom/manchester.webp",
    description: {
      de: "Eine bedeutende Stadt im Nordwesten Englands. Historisches Zentrum der industriellen Revolution.",
      hu: "Jelentős város Északnyugat-Angliában. Az ipari forradalom történelmi központja.",
      ro: "Un oraș important din nord-vestul Angliei. Centru istoric al Revoluției Industriale.",
      en: "A major city in the northwest of England. Historical center of the Industrial Revolution."
    },
    facts: {
      de: ["Wiege der Industrie.", "Zwei berühmte Fußballclubs.", "Reiche Musikgeschichte.", "Wichtiger Verkehrsknotenpunkt."],
      hu: ["Az ipar bölcsője.", "Két híres futballklubja van.", "Gazdag zenetörténelem.", "Fontos közlekedési csomópont."],
      ro: ["Leagănul industriei.", "Două cluburi faimoase de fotbal.", "Istorie muzicală bogată.", "Nod de transport important."],
      en: ["Cradle of industry.", "Two famous football clubs.", "Rich musical history.", "Important transport hub."]
    }
  },
  {
    id: "city-birmingham",
    type: "city",
    parent: "GB-ENG",
    coords: [-1.8904, 52.4862],
    name: { de: "Birmingham", hu: "Birmingham", ro: "Birmingham", en: "Birmingham" },
    image: "/geo-images/united-kingdom/birmingham.webp",
    description: {
      de: "Die zweitgrößte Stadt in Großbritannien. Befindet sich in den West Midlands.",
      hu: "Nagy-Britannia második legnagyobb városa. A West Midlands régióban található.",
      ro: "Al doilea oraș ca mărime din Marea Britanie. Situat în West Midlands.",
      en: "The second largest city in Great Britain. Located in the West Midlands."
    },
    facts: {
      de: ["Historisches Industriezentrum.", "Viele Kanäle.", "Bekannt für Schmuckherstellung.", "Zentrum der Automobilindustrie."],
      hu: ["Történelmi ipari központ.", "Sok csatornája van.", "Ékszerkészítésről ismert.", "Autóipari központ."],
      ro: ["Centru industrial istoric.", "Multe canale.", "Cunoscut pentru fabricarea de bijuterii.", "Centrul industriei auto."],
      en: ["Historical industrial center.", "Many canals.", "Known for jewelry making.", "Center of the automotive industry."]
    }
  },
  {
    id: "city-liverpool",
    type: "city",
    parent: "GB-ENG",
    coords: [-2.9916, 53.4084],
    name: { de: "Liverpool", hu: "Liverpool", ro: "Liverpool", en: "Liverpool" },
    image: "/geo-images/united-kingdom/liverpool.webp",
    description: {
      de: "Eine Hafenstadt im Nordwesten Englands. Heimat der Beatles.",
      hu: "Kikötőváros Északnyugat-Angliában. A Beatles szülővárosa.",
      ro: "Un oraș portuar în nord-vestul Angliei. Orașul natal al trupei Beatles.",
      en: "A port city in northwest England. Home of the Beatles."
    },
    facts: {
      de: ["Heimat der Beatles.", "Berühmter Hafen.", "Erfolgreiche Fußballvereine.", "Kulturhauptstadt Europas 2008."],
      hu: ["A Beatles hazája.", "Híres kikötő.", "Sikeres futballklubok.", "Európa Kulturális Fővárosa 2008-ban."],
      ro: ["Patria Beatles.", "Port faimos.", "Cluburi de fotbal de succes.", "Capitala Europeană a Culturii 2008."],
      en: ["Home of the Beatles.", "Famous port.", "Successful football clubs.", "European Capital of Culture 2008."]
    }
  },
  {
    id: "city-edinburgh",
    type: "state-capital",
    parent: "GB-SCT",
    coords: [-3.1883, 55.9533],
    name: { de: "Edinburgh", hu: "Edinburgh", ro: "Edinburgh", en: "Edinburgh" },
    image: "/geo-images/united-kingdom/edinburgh.webp",
    description: {
      de: "Die hügelige Hauptstadt Schottlands. Bekannt für ihre historische Burg.",
      hu: "Skócia dombos fővárosa. Híres történelmi váráról.",
      ro: "Capitala deluroasă a Scoției. Cunoscută pentru castelul ei istoric.",
      en: "The hilly capital of Scotland. Known for its historical castle."
    },
    facts: {
      de: ["Edinburgh Castle.", "Historische Altstadt.", "Sitz des schottischen Parlaments.", "Bekanntes Kulturfestival."],
      hu: ["Edinburgh-i vár.", "Történelmi óváros.", "A skót parlament székhelye.", "Híres kulturális fesztivál."],
      ro: ["Castelul Edinburgh.", "Oraș vechi istoric.", "Sediul Parlamentului Scoțian.", "Festival cultural faimos."],
      en: ["Edinburgh Castle.", "Historic Old Town.", "Seat of the Scottish Parliament.", "Famous cultural festival."]
    }
  },
  {
    id: "city-glasgow",
    type: "city",
    parent: "GB-SCT",
    coords: [-4.2518, 55.8642],
    name: { de: "Glasgow", hu: "Glasgow", ro: "Glasgow", en: "Glasgow" },
    image: "/geo-images/united-kingdom/glasgow.webp",
    description: {
      de: "Die größte Stadt Schottlands. Bekannt für Architektur und Kultur.",
      hu: "Skócia legnagyobb városa. Építészetéről és kultúrájáról ismert.",
      ro: "Cel mai mare oraș din Scoția. Cunoscut pentru arhitectură și cultură.",
      en: "The largest city in Scotland. Known for architecture and culture."
    },
    facts: {
      de: ["Größte schottische Stadt.", "Liegt am Fluss Clyde.", "Ehemalige Industriemetropole.", "Viele kostenlose Museen."],
      hu: ["A legnagyobb skót város.", "A Clyde folyó partján fekszik.", "Egykori ipari metropolisz.", "Sok ingyenes múzeum."],
      ro: ["Cel mai mare oraș scoțian.", "Situat pe râul Clyde.", "Fostă metropolă industrială.", "Multe muzee gratuite."],
      en: ["Largest Scottish city.", "Located on the River Clyde.", "Former industrial metropolis.", "Many free museums."]
    }
  },
  {
    id: "city-cardiff",
    type: "state-capital",
    parent: "GB-WLS",
    coords: [-3.1791, 51.4816],
    name: { de: "Cardiff", hu: "Cardiff", ro: "Cardiff", en: "Cardiff" },
    image: "/geo-images/united-kingdom/cardiff.webp",
    description: {
      de: "Die Hauptstadt von Wales. Eine Hafenstadt im Süden.",
      hu: "Wales fővárosa. Kikötőváros a déli részen.",
      ro: "Capitala Țării Galilor. Un oraș portuar în sud.",
      en: "The capital of Wales. A port city in the south."
    },
    facts: {
      de: ["Cardiff Castle.", "Millennium Stadium.", "Wichtiger Exporthafen für Kohle früher.", "Zentrum walisischer Kultur."],
      hu: ["Cardiffi vár.", "Millennium Stadion.", "Régen fontos szénexportáló kikötő.", "A walesi kultúra központja."],
      ro: ["Castelul Cardiff.", "Stadionul Millennium.", "Fost port important de export de cărbune.", "Centrul culturii galeze."],
      en: ["Cardiff Castle.", "Millennium Stadium.", "Important coal export port in the past.", "Center of Welsh culture."]
    }
  },
  {
    id: "city-belfast",
    type: "state-capital",
    parent: "GB-NIR",
    coords: [-5.9301, 54.5973],
    name: { de: "Belfast", hu: "Belfast", ro: "Belfast", en: "Belfast" },
    image: "/geo-images/united-kingdom/belfast.webp",
    description: {
      de: "Die Hauptstadt Nordirlands. Geburtsort der Titanic.",
      hu: "Észak-Írország fővárosa. A Titanic szülőhelye.",
      ro: "Capitala Irlandei de Nord. Locul de naștere al Titanicului.",
      en: "The capital of Northern Ireland. Birthplace of the Titanic."
    },
    facts: {
      de: ["Titanic Quarter.", "Große Werftanlagen.", "Politische Wandgemälde.", "Rathaus mit Kupferkuppel."],
      hu: ["Titanic-negyed.", "Nagy hajógyárak.", "Politikai falfestmények.", "Városháza rézkupolával."],
      ro: ["Cartierul Titanic.", "Șantiere navale mari.", "Picturi murale politice.", "Primăria cu cupolă de cupru."],
      en: ["Titanic Quarter.", "Large shipyards.", "Political murals.", "City Hall with a copper dome."]
    }
  },
  {
    id: "city-oxford",
    type: "city",
    parent: "GB-ENG",
    coords: [-1.2577, 51.7520],
    name: { de: "Oxford", hu: "Oxford", ro: "Oxford", en: "Oxford" },
    image: "/geo-images/united-kingdom/oxford.webp",
    description: {
      de: "Bekannt für ihre renommierte Universität, die älteste im englischsprachigen Raum.",
      hu: "Híres tekintélyes egyeteméről, amely a legrégebbi az angol nyelvterületen.",
      ro: "Cunoscută pentru universitatea sa prestigioasă, cea mai veche din lumea anglofonă.",
      en: "Known for its prestigious university, the oldest in the English-speaking world."
    },
    facts: {
      de: ["Stadt der träumenden Türme.", "Die Oxford University.", "Bodleian Library.", "Viele berühmte Absolventen."],
      hu: ["Az álmodó tornyok városa.", "Oxfordi Egyetem.", "Bodleian Könyvtár.", "Számos híres öregdiák."],
      ro: ["Orașul turnurilor visătoare.", "Universitatea Oxford.", "Biblioteca Bodleiană.", "Mulți absolvenți celebri."],
      en: ["City of dreaming spires.", "Oxford University.", "Bodleian Library.", "Many famous alumni."]
    }
  },
  {
    id: "city-cambridge",
    type: "city",
    parent: "GB-ENG",
    coords: [0.1218, 52.2053],
    name: { de: "Cambridge", hu: "Cambridge", ro: "Cambridge", en: "Cambridge" },
    image: "/geo-images/united-kingdom/cambridge.webp",
    description: {
      de: "Heimat der berühmten University of Cambridge. Liegt am Fluss Cam.",
      hu: "A híres Cambridge-i Egyetem otthona. A Cam folyó mentén fekszik.",
      ro: "Sediul faimoasei Universități Cambridge. Situat pe râul Cam.",
      en: "Home of the famous University of Cambridge. Located on the River Cam."
    },
    facts: {
      de: ["Historische Colleges.", "Punting auf dem Fluss Cam.", "Wichtiges Technologiezentrum.", "King's College Chapel."],
      hu: ["Történelmi kollégiumok.", "Punting (csónakázás) a Cam folyón.", "Fontos technológiai központ.", "King's College kápolna."],
      ro: ["Colegii istorice.", "Plimbări cu barca pe râul Cam.", "Centru tehnologic important.", "Capela King's College."],
      en: ["Historic colleges.", "Punting on the River Cam.", "Important technology hub.", "King's College Chapel."]
    }
  },
  {
    id: "city-leeds",
    type: "city",
    parent: "GB-ENG",
    coords: [-1.5491, 53.7997],
    name: { de: "Leeds", hu: "Leeds", ro: "Leeds", en: "Leeds" },
    image: "/geo-images/united-kingdom/leeds.webp",
    description: {
      de: "Eine große Stadt in Yorkshire. Ein wichtiges Finanzzentrum.",
      hu: "Nagyváros Yorkshire-ben. Fontos pénzügyi központ.",
      ro: "Un oraș mare din Yorkshire. Un centru financiar important.",
      en: "A major city in Yorkshire. An important financial center."
    },
    facts: {
      de: ["In der Region Yorkshire.", "Starke Wirtschaft.", "Gute Einkaufsmöglichkeiten.", "Königliche Waffenkammer."],
      hu: ["A Yorkshire régióban.", "Erős gazdaság.", "Jó vásárlási lehetőségek.", "Királyi Fegyvertár."],
      ro: ["În regiunea Yorkshire.", "Economie puternică.", "Opțiuni bune de cumpărături.", "Armuraria Regală."],
      en: ["In the Yorkshire region.", "Strong economy.", "Great shopping facilities.", "Royal Armouries."]
    }
  },
  {
    id: "city-bath",
    type: "city",
    parent: "GB-ENG",
    coords: [-2.3590, 51.3758],
    name: { de: "Bath", hu: "Bath", ro: "Bath", en: "Bath" },
    image: "/geo-images/united-kingdom/bath.webp",
    description: {
      de: "Bekannt für seine römischen Bäder und georgianische Architektur.",
      hu: "Római kori fürdőiről és György-kori építészetéről ismert.",
      ro: "Cunoscută pentru băile sale romane și arhitectura georgiană.",
      en: "Known for its Roman baths and Georgian architecture."
    },
    facts: {
      de: ["UNESCO-Weltkulturerbe.", "Heiße Quellen.", "Jane Austen lebte hier.", "Royal Crescent."],
      hu: ["UNESCO Világörökség.", "Hőforrások.", "Itt élt Jane Austen.", "Royal Crescent."],
      ro: ["Patrimoniul Mondial UNESCO.", "Izvoare termale.", "Jane Austen a locuit aici.", "Royal Crescent."],
      en: ["UNESCO World Heritage site.", "Hot springs.", "Jane Austen lived here.", "Royal Crescent."]
    }
  },
  {
    id: "city-york",
    type: "city",
    parent: "GB-ENG",
    coords: [-1.0803, 53.9590],
    name: { de: "York", hu: "York", ro: "York", en: "York" },
    image: "/geo-images/united-kingdom/york.webp",
    description: {
      de: "Eine historische ummauerte Stadt in Nordengland, gegründet von den Römern.",
      hu: "Észak-Anglia történelmi fallal körülvett városa, amelyet a rómaiak alapítottak.",
      ro: "Un oraș istoric fortificat din nordul Angliei, fondat de romani.",
      en: "A historic walled city in northern England, founded by the Romans."
    },
    facts: {
      de: ["York Minster Kathedrale.", "Die Shambles (alte Straße).", "Wikingermuseum (Jorvik).", "Stadtmauer intakt."],
      hu: ["York Minster katedrális.", "A Shambles (régi utca).", "Viking Múzeum (Jorvik).", "Ép városfalak."],
      ro: ["Catedrala York Minster.", "The Shambles (stradă veche).", "Muzeul Vikingilor (Jorvik).", "Zidurile orașului intacte."],
      en: ["York Minster cathedral.", "The Shambles (old street).", "Viking Museum (Jorvik).", "Intact city walls."]
    }
  },
  {
    id: "city-canterbury",
    type: "city",
    parent: "GB-ENG",
    coords: [1.0789, 51.2802],
    name: { de: "Canterbury", hu: "Canterbury", ro: "Canterbury", en: "Canterbury" },
    image: "/geo-images/united-kingdom/canterbury.webp",
    description: {
      de: "Historische Kathedralenstadt in Kent und das Zentrum der Church of England.",
      hu: "Történelmi katedrálisváros Kentben, az anglikán egyház központja.",
      ro: "Oraș istoric cu catedrală în Kent și centrul Bisericii Angliei.",
      en: "Historic cathedral city in Kent and the center of the Church of England."
    },
    facts: {
      de: ["Sitz des Erzbischofs.", "Canterbury Cathedral.", "Canterbury Tales.", "Mittelalterliches Zentrum."],
      hu: ["Az érsek székhelye.", "Canterbury-i katedrális.", "Canterbury mesék.", "Középkori központ."],
      ro: ["Sediul Arhiepiscopului.", "Catedrala din Canterbury.", "Povestirile din Canterbury.", "Centru medieval."],
      en: ["Seat of the Archbishop.", "Canterbury Cathedral.", "Canterbury Tales.", "Medieval center."]
    }
  },
  {
    id: "city-stratford",
    type: "city",
    parent: "GB-ENG",
    coords: [-1.7073, 52.1920],
    name: { de: "Stratford-upon-Avon", hu: "Stratford-upon-Avon", ro: "Stratford-upon-Avon", en: "Stratford-upon-Avon" },
    image: "/geo-images/united-kingdom/stratford-upon-avon.webp",
    description: {
      de: "Geburtsort des berühmten englischen Dramatikers William Shakespeare.",
      hu: "A híres angol drámaíró, William Shakespeare szülőhelye.",
      ro: "Locul de naștere al faimosului dramaturg englez William Shakespeare.",
      en: "Birthplace of the famous English playwright William Shakespeare."
    },
    facts: {
      de: ["Shakespeares Geburtshaus.", "Royal Shakespeare Theatre.", "Liegt am Fluss Avon.", "Historische Fachwerkhäuser."],
      hu: ["Shakespeare szülőháza.", "Royal Shakespeare Theatre.", "Az Avon folyó partján fekszik.", "Történelmi favázas házak."],
      ro: ["Casa natală a lui Shakespeare.", "Royal Shakespeare Theatre.", "Situat pe râul Avon.", "Case istorice cu structură din lemn."],
      en: ["Shakespeare's birthplace.", "Royal Shakespeare Theatre.", "Located on the River Avon.", "Historic half-timbered houses."]
    }
  },
  {
    id: "city-brighton",
    type: "city",
    parent: "GB-ENG",
    coords: [-0.1372, 50.8225],
    name: { de: "Brighton", hu: "Brighton", ro: "Brighton", en: "Brighton" },
    image: "/geo-images/united-kingdom/brighton.webp",
    description: {
      de: "Bekanntes Seebad an der Südküste Englands.",
      hu: "Népszerű tengerparti üdülőhely Anglia déli partján.",
      ro: "O stațiune populară pe litoralul de sud al Angliei.",
      en: "Popular seaside resort on the south coast of England."
    },
    facts: {
      de: ["Kiesstrände.", "Brighton Pier.", "Royal Pavilion.", "Sehr offene und bunte Kultur."],
      hu: ["Kavicsos strandok.", "Brighton Pier.", "Királyi Pavilon.", "Nagyon nyitott és színes kultúra."],
      ro: ["Plaje cu pietriș.", "Brighton Pier.", "Pavilionul Regal.", "Cultură foarte deschisă și colorată."],
      en: ["Pebble beaches.", "Brighton Pier.", "Royal Pavilion.", "Very open and colorful culture."]
    }
  }
];

export const unitedkingdomLandmarks: POI[] = [
  {
    id: "lm-stonehenge",
    type: "landmark",
    parent: "GB-ENG",
    coords: [-1.8262, 51.1789],
    name: { de: "Stonehenge", hu: "Stonehenge", ro: "Stonehenge", en: "Stonehenge" },
    image: "/geo-images/united-kingdom/stonehenge.webp",
    description: {
      de: "Ein prähistorisches Monument, bestehend aus riesigen, im Kreis aufgestellten Steinen.",
      hu: "Őskori műemlék, amely hatalmas, körben felállított kövekből áll.",
      ro: "Un monument preistoric format din pietre uriașe aranjate în cerc.",
      en: "A prehistoric monument consisting of massive stones arranged in a circle."
    },
    facts: {
      de: ["In Wiltshire gelegen.", "Entstand in der Jungsteinzeit.", "Sinn und Zweck sind bis heute umstritten.", "Die Steine sind extrem schwer."],
      hu: ["Wiltshire megyében található.", "Az újkőkorban épült.", "Célja máig vitatott.", "A kövek rendkívül nehezek."],
      ro: ["Situat în Wiltshire.", "A apărut în perioada neolitică.", "Scopul său este încă dezbătut.", "Pietrele sunt extrem de grele."],
      en: ["Located in Wiltshire.", "Originated in the Neolithic period.", "Its purpose is still debated.", "The stones are extremely heavy."]
    }
  },
  {
    id: "lm-buckingham-palace",
    type: "landmark",
    parent: "city-london",
    coords: [-0.1419, 51.5014],
    name: { de: "Buckingham Palace", hu: "Buckingham-palota", ro: "Palatul Buckingham", en: "Buckingham Palace" },
    image: "/geo-images/united-kingdom/buckingham-palace.webp",
    description: {
      de: "Die offizielle Residenz des britischen Monarchen in London.",
      hu: "A brit uralkodó hivatalos rezidenciája Londonban.",
      ro: "Reședința oficială a monarhului britanic din Londra.",
      en: "The official residence of the British monarch in London."
    },
    facts: {
      de: ["Bekannt für die Wachablösung.", "Über 700 Zimmer.", "Zentral in London gelegen.", "Hauptwohnsitz des Königs."],
      hu: ["Híres az őrségváltásról.", "Több mint 700 szoba.", "London központjában található.", "A király fő lakhelye."],
      ro: ["Cunoscut pentru schimbarea gărzii.", "Peste 700 de camere.", "Situat central în Londra.", "Reședința principală a regelui."],
      en: ["Known for the changing of the guard.", "Over 700 rooms.", "Centrally located in London.", "Primary residence of the King."]
    }
  },
  {
    id: "lm-big-ben",
    type: "landmark",
    parent: "city-london",
    coords: [-0.1246, 51.5007],
    name: { de: "Big Ben", hu: "Big Ben", ro: "Big Ben", en: "Big Ben" },
    image: "/geo-images/united-kingdom/big-ben.webp",
    description: {
      de: "Der Spitzname der großen Glocke des Uhrenturms im Palace of Westminster.",
      hu: "A Westminster-palota óratornyában lévő nagy harang beceneve.",
      ro: "Porecla marelui clopot din turnul cu ceas de la Palatul Westminster.",
      en: "The nickname for the Great Bell of the clock at the Palace of Westminster."
    },
    facts: {
      de: ["Turm heißt Elizabeth Tower.", "Ein Symbol für London.", "Die Glocke wiegt über 13 Tonnen.", "Schlägt jede Stunde."],
      hu: ["A torony neve Elizabeth Tower.", "London egyik szimbóluma.", "A harang több mint 13 tonnát nyom.", "Minden órában üt."],
      ro: ["Turnul se numește Elizabeth Tower.", "Un simbol al Londrei.", "Clopotul cântărește peste 13 tone.", "Bate în fiecare oră."],
      en: ["The tower is named Elizabeth Tower.", "A symbol of London.", "The bell weighs over 13 tons.", "Chimes every hour."]
    }
  },
  {
    id: "lm-tower-of-london",
    type: "landmark",
    parent: "city-london",
    coords: [-0.0763, 51.5081],
    name: { de: "Tower of London", hu: "Londoni Tower", ro: "Turnul Londrei", en: "Tower of London" },
    image: "/geo-images/united-kingdom/tower-of-london.webp",
    description: {
      de: "Eine historische Burg an der Themse im Zentrum von London.",
      hu: "Történelmi vár a Temze partján, London központjában.",
      ro: "Un castel istoric pe Tamisa, în centrul Londrei.",
      en: "A historic castle on the Thames in central London."
    },
    facts: {
      de: ["Bewahrt die Kronjuwelen auf.", "Gilt als altes Gefängnis.", "Beheimatet Raben.", "Von Beefeatern bewacht."],
      hu: ["Itt őrzik a koronaékszereket.", "Régen börtönként is szolgált.", "Hollók élnek itt.", "A 'Beefeater' őrök vigyázzák."],
      ro: ["Păstrează bijuteriile coroanei.", "Considerat o veche închisoare.", "Găzduiește corbi.", "Păzit de Beefeaters."],
      en: ["Houses the Crown Jewels.", "Served as a historic prison.", "Home to ravens.", "Guarded by Beefeaters."]
    }
  },
  {
    id: "lm-windsor-castle",
    type: "landmark",
    parent: "GB-ENG",
    coords: [-0.6044, 51.4838],
    name: { de: "Windsor Castle", hu: "Windsori kastély", ro: "Castelul Windsor", en: "Windsor Castle" },
    image: "/geo-images/united-kingdom/windsor-castle.webp",
    description: {
      de: "Das älteste und größte durchgängig bewohnte Schloss der Welt.",
      hu: "A világ legrégebbi és legnagyobb folyamatosan lakott kastélya.",
      ro: "Cel mai vechi și cel mai mare castel locuit continuu din lume.",
      en: "The oldest and largest continuously inhabited castle in the world."
    },
    facts: {
      de: ["Wochenendresidenz der Royals.", "St.-Georgs-Kapelle.", "In der Grafschaft Berkshire.", "Wunderschöne Gärten."],
      hu: ["A királyi család hétvégi rezidenciája.", "Szent György-kápolna.", "Berkshire megyében található.", "Gyönyörű kertek."],
      ro: ["Reședința de weekend a familiei regale.", "Capela St. George.", "În comitatul Berkshire.", "Grădini frumoase."],
      en: ["Weekend residence of the royals.", "St. George's Chapel.", "In the county of Berkshire.", "Beautiful gardens."]
    }
  },
  {
    id: "lm-lake-district",
    type: "lake",
    parent: "GB-ENG",
    coords: [-3.0886, 54.4609],
    name: { de: "Lake District", hu: "Tóvidék", ro: "Lake District", en: "Lake District" },
    image: "/geo-images/united-kingdom/lake-district.webp",
    description: {
      de: "Ein Nationalpark im Nordwesten Englands, bekannt für seine Seen und Berge.",
      hu: "Nemzeti park Északnyugat-Angliában, tavairól és hegyeiről ismert.",
      ro: "Un parc național din nord-vestul Angliei, cunoscut pentru lacurile și munții săi.",
      en: "A national park in North West England, known for its lakes and mountains."
    },
    facts: {
      de: ["Englands höchster Berg: Scafell Pike.", "Viele tiefe Seen.", "UNESCO-Weltkulturerbe.", "Inspiration für viele Dichter."],
      hu: ["Anglia legmagasabb hegye: Scafell Pike.", "Sok mély tó.", "UNESCO Világörökség.", "Sok költőt megihletett."],
      ro: ["Cel mai înalt munte din Anglia: Scafell Pike.", "Multe lacuri adânci.", "Patrimoniul Mondial UNESCO.", "Inspirație pentru mulți poeți."],
      en: ["England's highest mountain: Scafell Pike.", "Many deep lakes.", "UNESCO World Heritage site.", "Inspiration for many poets."]
    }
  },
  {
    id: "lm-snowdonia",
    type: "mountain",
    parent: "GB-WLS",
    coords: [-3.9782, 53.0685],
    name: { de: "Snowdonia", hu: "Snowdonia", ro: "Snowdonia", en: "Snowdonia" },
    image: "/geo-images/united-kingdom/snowdonia.webp",
    description: {
      de: "Ein Nationalpark in Wales mit dem höchsten Berg in England und Wales, Mount Snowdon.",
      hu: "Nemzeti park Walesben, itt található Anglia és Wales legmagasabb hegye, a Snowdon.",
      ro: "Un parc național în Țara Galilor cu cel mai înalt munte din Anglia și Țara Galilor, Muntele Snowdon.",
      en: "A national park in Wales featuring the highest mountain in England and Wales, Mount Snowdon."
    },
    facts: {
      de: ["Beliebt bei Wanderern.", "Raue, bergige Landschaften.", "Mount Snowdon ist 1.085m hoch.", "Bergbahn führt zum Gipfel."],
      hu: ["Népszerű a túrázók körében.", "Zord, hegyvidéki tájak.", "A Snowdon hegy 1085 m magas.", "Hegyi vasút visz a csúcsra."],
      ro: ["Popular printre drumeți.", "Peisaje aspre, muntoase.", "Muntele Snowdon are 1.085m înălțime.", "Un tren montan duce spre vârf."],
      en: ["Popular with hikers.", "Rugged, mountainous landscapes.", "Mount Snowdon is 1,085m high.", "Mountain railway leads to the summit."]
    }
  },
  {
    id: "lm-loch-ness",
    type: "lake",
    parent: "GB-SCT",
    coords: [-4.4537, 57.3229],
    name: { de: "Loch Ness", hu: "Loch Ness", ro: "Loch Ness", en: "Loch Ness" },
    image: "/geo-images/united-kingdom/loch-ness.webp",
    description: {
      de: "Ein tiefer Süßwassersee in den schottischen Highlands, weltbekannt durch das angebliche Seeungeheuer.",
      hu: "Mély édesvizű tó a skót Felföldön, világhírű az állítólagos tavi szörnyről.",
      ro: "Un lac adânc cu apă dulce din Highlands-ul scoțian, faimos în toată lumea pentru presupusul monstru.",
      en: "A deep freshwater loch in the Scottish Highlands, world-famous for the alleged sea monster."
    },
    facts: {
      de: ["Das Monster wird 'Nessie' genannt.", "Zweittiefster See Schottlands.", "Sehr dunkles Wasser.", "Urquhart Castle am Ufer."],
      hu: ["A szörnyet 'Nessie'-nek hívják.", "Skócia második legmélyebb tava.", "Nagyon sötét a vize.", "Az Urquhart-kastély a partján áll."],
      ro: ["Monstrul este numit 'Nessie'.", "Al doilea cel mai adânc lac din Scoția.", "Apă foarte întunecată.", "Castelul Urquhart pe mal."],
      en: ["The monster is called 'Nessie'.", "Second deepest loch in Scotland.", "Very dark water.", "Urquhart Castle on the shore."]
    }
  },
  {
    id: "lm-giants-causeway",
    type: "landmark",
    parent: "GB-NIR",
    coords: [-6.5116, 55.2408],
    name: { de: "Giant's Causeway", hu: "Óriások útja", ro: "Giant's Causeway", en: "Giant's Causeway" },
    image: "/geo-images/united-kingdom/giant-s-causeway.webp",
    description: {
      de: "Ein Gebiet mit etwa 40.000 ineinandergreifenden Basaltsäulen in Nordirland.",
      hu: "Körülbelül 40 000 egymásba fonódó bazaltoszlopból álló terület Észak-Írországban.",
      ro: "O zonă cu aproximativ 40.000 de coloane de bazalt interconectate în Irlanda de Nord.",
      en: "An area of about 40,000 interlocking basalt columns in Northern Ireland."
    },
    facts: {
      de: ["Durch Vulkanausbrüche entstanden.", "Die meisten Säulen sind sechseckig.", "Gilt als UNESCO-Welterbe.", "Viele lokale Legenden von Riesen."],
      hu: ["Vulkánkitörések hozták létre.", "A legtöbb oszlop hatszögletű.", "UNESCO Világörökség része.", "Sok helyi monda szól óriásokról."],
      ro: ["Format prin erupții vulcanice.", "Majoritatea coloanelor sunt hexagonale.", "Considerat Patrimoniu Mondial UNESCO.", "Multe legende locale cu uriași."],
      en: ["Formed by volcanic eruptions.", "Most of the columns are hexagonal.", "A UNESCO World Heritage site.", "Many local legends of giants."]
    }
  },
  {
    id: "lm-white-cliffs",
    type: "landmark",
    parent: "GB-ENG",
    coords: [1.3411, 51.1351],
    name: { de: "Weiße Klippen von Dover", hu: "Doveri fehér sziklák", ro: "Stâncile Albe din Dover", en: "White Cliffs of Dover" },
    image: "/geo-images/united-kingdom/white-cliffs-of-dover.webp",
    description: {
      de: "Teil der britischen Küstenlinie gegenüber von Frankreich, bekannt für ihre weiße Kreide.",
      hu: "A brit partvidék Franciaországgal szembeni része, fehér krétaszikláiról ismert.",
      ro: "Parte a coastei britanice vis-a-vis de Franța, cunoscută pentru creta sa albă.",
      en: "Part of the British coastline facing France, known for their white chalk."
    },
    facts: {
      de: ["Aus Kreide bestehend.", "Symbol der britischen Verteidigung.", "Erreichen über 100m Höhe.", "Blick auf den Ärmelkanal."],
      hu: ["Krétából állnak.", "A brit védelem szimbóluma.", "Több mint 100 m magasak.", "Kilátás a La Manche csatornára."],
      ro: ["Compuse din cretă.", "Simbol al apărării britanice.", "Ating peste 100m înălțime.", "Vedere spre Canalul Mânecii."],
      en: ["Composed of chalk.", "Symbol of British defense.", "Reach over 100m in height.", "View over the English Channel."]
    }
  },
  {
    id: "lm-hadrians-wall",
    type: "historical",
    parent: "GB-ENG",
    coords: [-2.2858, 55.0118],
    name: { de: "Hadrianswall", hu: "Hadrianus fala", ro: "Zidul lui Hadrian", en: "Hadrian's Wall" },
    image: "/geo-images/united-kingdom/hadrian-s-wall.webp",
    description: {
      de: "Ehemalige römische Befestigungsanlage in Nordengland nahe der schottischen Grenze.",
      hu: "Egykori római erődítmény Észak-Angliában, a skót határ közelében.",
      ro: "Fostă fortificație romană în nordul Angliei, lângă granița scoțiană.",
      en: "Former Roman fortification in northern England near the Scottish border."
    },
    facts: {
      de: ["Vom Kaiser Hadrian erbaut.", "Markierte die Grenze des Römischen Reiches.", "War über 117 km lang.", "UNESCO-Weltkulturerbe."],
      hu: ["Hadrianus császár építtette.", "A Római Birodalom határát jelezte.", "Több mint 117 km hosszú volt.", "UNESCO Világörökség."],
      ro: ["Construit de împăratul Hadrian.", "Marca granița Imperiului Roman.", "Avea o lungime de peste 117 km.", "Patrimoniul Mondial UNESCO."],
      en: ["Built by Emperor Hadrian.", "Marked the boundary of the Roman Empire.", "Was over 117 km long.", "UNESCO World Heritage site."]
    }
  },
  {
    id: "lm-thames",
    type: "river",
    parent: "GB-ENG",
    coords: [-0.1000, 51.5000],
    name: { de: "Themse", hu: "Temze", ro: "Tamisa", en: "Thames" },
    image: "/geo-images/united-kingdom/thames.webp",
    description: {
      de: "Der längste Fluss, der vollständig in England liegt, und fließt durch London.",
      hu: "A leghosszabb folyó, amely teljes egészében Angliában található, és átszeli Londont.",
      ro: "Cel mai lung râu care curge în întregime în Anglia și traversează Londra.",
      en: "The longest river entirely in England, flowing through London."
    },
    facts: {
      de: ["Fließt in die Nordsee.", "Über 340 km lang.", "Tower Bridge überquert sie.", "Viele historische Ereignisse."],
      hu: ["Az Északi-tengerbe ömlik.", "Több mint 340 km hosszú.", "A Tower Bridge ível át rajta.", "Sok történelmi esemény fűződik hozzá."],
      ro: ["Se varsă în Marea Nordului.", "Peste 340 km lungime.", "Tower Bridge trece peste ea.", "Multe evenimente istorice."],
      en: ["Flows into the North Sea.", "Over 340 km long.", "Tower Bridge crosses it.", "Many historical events."]
    }
  },
  {
    id: "lm-british-museum",
    type: "landmark",
    parent: "city-london",
    coords: [-0.1269, 51.5194],
    name: { de: "British Museum", hu: "British Múzeum", ro: "British Museum", en: "British Museum" },
    image: "/geo-images/united-kingdom/british-museum.webp",
    description: {
      de: "Ein weltbekanntes Museum für menschliche Geschichte, Kunst und Kultur in London.",
      hu: "Világhírű múzeum, amely az emberiség történelmét, művészetét és kultúráját mutatja be Londonban.",
      ro: "Un muzeu faimos de istorie umană, artă și cultură situat în Londra.",
      en: "A world-renowned museum of human history, art, and culture in London."
    },
    facts: {
      de: ["Beheimatet den Rosetta-Stein.", "Parthenon-Skulpturen.", "Eintritt ist frei.", "Gegründet 1753."],
      hu: ["Itt található a rosette-i kő.", "Parthenón-szobrok.", "A belépés ingyenes.", "1753-ban alapították."],
      ro: ["Găzduiește Piatra din Rosetta.", "Sculpturile din Partenon.", "Intrarea este liberă.", "Fondat în 1753."],
      en: ["Houses the Rosetta Stone.", "Parthenon sculptures.", "Admission is free.", "Founded in 1753."]
    }
  }
];

export const unitedkingdomAllPoi: POI[] = [
  unitedkingdomCountry,
  ...unitedkingdomRegions,
  ...unitedkingdomCities,
  ...unitedkingdomLandmarks
];
