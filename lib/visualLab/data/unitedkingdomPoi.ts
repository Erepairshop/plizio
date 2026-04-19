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
  },
  {
    id: "uk-bristol",
    type: "city",
    parent: "GB-ENG",
    coords: [-2.5879, 51.4545],
    name: { de: "Bristol", hu: "Bristol", ro: "Bristol", en: "Bristol" },
    image: "/geo-images/united-kingdom/bristol.webp",
    description: {
      de: "Eine lebhafte Stadt im Südwesten Englands. Historisch wichtig für Handel und Seefahrt.",
      hu: "Élénk város Délnyugat-Angliában. Történelmileg fontos kereskedelmi és tengerészeti központ.",
      ro: "Un oraș vibrant în sud-vestul Angliei. Important istoric pentru comerț și navigație.",
      en: "A vibrant city in South West England. Historically important for trade and seafaring."
    },
    facts: {
      de: ["Bekannt für die Clifton Suspension Bridge.", "Heimat des Street-Art-Künstlers Banksy.", "Historischer Hafen.", "Große Luftfahrtindustrie."],
      hu: ["A Clifton Függőhídról ismert.", "Banksy utcai művész hazája.", "Történelmi kikötő.", "Nagy repülőgépipar."],
      ro: ["Cunoscut pentru Podul Suspendat Clifton.", "Patria artistului stradal Banksy.", "Port istoric.", "Industrie aerospațială mare."],
      en: ["Known for the Clifton Suspension Bridge.", "Home of street artist Banksy.", "Historic harbor.", "Large aerospace industry."]
    }
  },
  {
    id: "uk-nottingham",
    type: "city",
    parent: "GB-ENG",
    coords: [-1.1581, 52.9548],
    name: { de: "Nottingham", hu: "Nottingham", ro: "Nottingham", en: "Nottingham" },
    image: "/geo-images/united-kingdom/nottingham.webp",
    description: {
      de: "Stadt in den East Midlands von England. Bekannt durch die Legende von Robin Hood.",
      hu: "Város az angliai East Midlands régióban. Robin Hood legendájáról ismert.",
      ro: "Oraș în East Midlands din Anglia. Cunoscut pentru legenda lui Robin Hood.",
      en: "City in the East Midlands of England. Known for the legend of Robin Hood."
    },
    facts: {
      de: ["Robin Hoods Sherwood Forest.", "Nottingham Castle.", "Zentrum der Spitzenherstellung.", "Ältester Pub Englands (angeblich)."],
      hu: ["Robin Hood Sherwoodi erdeje.", "Nottinghami vár.", "A csipkegyártás központja.", "Anglia (állítólag) legrégebbi pubja."],
      ro: ["Pădurea Sherwood a lui Robin Hood.", "Castelul Nottingham.", "Centrul producției de dantelă.", "Cel mai vechi pub din Anglia (se presupune)."],
      en: ["Robin Hood's Sherwood Forest.", "Nottingham Castle.", "Center of lace making.", "Oldest pub in England (allegedly)."]
    }
  },
  {
    id: "uk-sheffield",
    type: "city",
    parent: "GB-ENG",
    coords: [-1.4701, 53.3811],
    name: { de: "Sheffield", hu: "Sheffield", ro: "Sheffield", en: "Sheffield" },
    image: "/geo-images/united-kingdom/sheffield.webp",
    description: {
      de: "Eine Industriestadt in South Yorkshire. Berühmt für ihre Stahlproduktion.",
      hu: "Ipari város South Yorkshire-ben. Híres acélgyártásáról.",
      ro: "Un oraș industrial în South Yorkshire. Faimos pentru producția sa de oțel.",
      en: "An industrial city in South Yorkshire. Famous for its steel production."
    },
    facts: {
      de: ["Die 'Steel City'.", "Zwei große Universitäten.", "Viele Parks und Grünflächen.", "Liegt nahe am Peak District."],
      hu: ["Az 'Acélváros'.", "Két nagy egyetem.", "Sok park és zöldterület.", "A Peak District közelében fekszik."],
      ro: ["'Orașul Oțelului'.", "Două universități mari.", "Multe parcuri și spații verzi.", "Situat aproape de Peak District."],
      en: ["The 'Steel City'.", "Two large universities.", "Many parks and green spaces.", "Located close to the Peak District."]
    }
  },
  {
    id: "uk-newcastle",
    type: "city",
    parent: "GB-ENG",
    coords: [-1.6178, 54.9783],
    name: { de: "Newcastle upon Tyne", hu: "Newcastle upon Tyne", ro: "Newcastle upon Tyne", en: "Newcastle upon Tyne" },
    image: "/geo-images/united-kingdom/newcastle.webp",
    description: {
      de: "Eine große Stadt im Nordosten Englands. Bekannt für ihre Brücken und das Nachtleben.",
      hu: "Nagyváros Északkelet-Angliában. Hídjairól és éjszakai életéről ismert.",
      ro: "Un oraș mare în nord-estul Angliei. Cunoscut pentru podurile și viața sa de noapte.",
      en: "A major city in North East England. Known for its bridges and nightlife."
    },
    facts: {
      de: ["Die Tyne-Brücke.", "Einwohner heißen 'Geordies'.", "Historische Burg (New Castle).", "Erfolgreicher Fußballverein."],
      hu: ["A Tyne-híd.", "A lakosokat 'Geordie'-knak hívják.", "Történelmi vár (Új Vár).", "Sikeres futballklub."],
      ro: ["Podul Tyne.", "Locuitorii sunt numiți 'Geordies'.", "Castel istoric (Noul Castel).", "Club de fotbal de succes."],
      en: ["The Tyne Bridge.", "Residents are called 'Geordies'.", "Historic castle (New Castle).", "Successful football club."]
    }
  },
  {
    id: "uk-aberdeen",
    type: "city",
    parent: "GB-SCT",
    coords: [-2.0943, 57.1497],
    name: { de: "Aberdeen", hu: "Aberdeen", ro: "Aberdeen", en: "Aberdeen" },
    image: "/geo-images/united-kingdom/aberdeen.webp",
    description: {
      de: "Eine Hafenstadt im Nordosten Schottlands. Wird wegen ihrer Granitgebäude 'Granite City' genannt.",
      hu: "Kikötőváros Északkelet-Skóciában. Gránitépületei miatt 'Gránitvárosnak' is nevezik.",
      ro: "Un oraș portuar în nord-estul Scoției. Numit 'Orașul de Granit' datorită clădirilor sale din granit.",
      en: "A port city in northeast Scotland. Called the 'Granite City' due to its granite buildings."
    },
    facts: {
      de: ["Zentrum der Nordseeölindustrie.", "Die 'Granitstadt'.", "Zwei Universitäten.", "Hat einen langen Sandstrand."],
      hu: ["Az északi-tengeri olajipar központja.", "A 'Gránitváros'.", "Két egyetem.", "Hosszú homokos strandja van."],
      ro: ["Centrul industriei petroliere din Marea Nordului.", "'Orașul de Granit'.", "Două universități.", "Are o plajă lungă cu nisip."],
      en: ["Center of the North Sea oil industry.", "The 'Granite City'.", "Two universities.", "Has a long sandy beach."]
    }
  },
  {
    id: "uk-inverness",
    type: "city",
    parent: "GB-SCT",
    coords: [-4.2247, 57.4778],
    name: { de: "Inverness", hu: "Inverness", ro: "Inverness", en: "Inverness" },
    image: "/geo-images/united-kingdom/inverness.webp",
    description: {
      de: "Eine Stadt an der Nordostküste Schottlands. Gilt als die Hauptstadt der Highlands.",
      hu: "Város Skócia északkeleti partján. A Felföld fővárosának tartják.",
      ro: "Un oraș pe coasta de nord-est a Scoției. Considerat capitala zonei Highlands.",
      en: "A city on the northeast coast of Scotland. Considered the capital of the Highlands."
    },
    facts: {
      de: ["In der Nähe von Loch Ness.", "Inverness Castle.", "Liegt am River Ness.", "Tor zu den schottischen Highlands."],
      hu: ["A Loch Ness közelében.", "Invernessi vár.", "A Ness folyó partján fekszik.", "Kapu a skót Felföldhöz."],
      ro: ["Aproape de Loch Ness.", "Castelul Inverness.", "Situat pe râul Ness.", "Poarta către Highlands-ul scoțian."],
      en: ["Near Loch Ness.", "Inverness Castle.", "Located on the River Ness.", "Gateway to the Scottish Highlands."]
    }
  },
  {
    id: "uk-swansea",
    type: "city",
    parent: "GB-WLS",
    coords: [-3.9436, 51.6214],
    name: { de: "Swansea", hu: "Swansea", ro: "Swansea", en: "Swansea" },
    image: "/geo-images/united-kingdom/swansea.webp",
    description: {
      de: "Eine Küstenstadt und Grafschaft in Wales. Die zweitgrößte Stadt in Wales.",
      hu: "Tengerparti város és megye Walesben. Wales második legnagyobb városa.",
      ro: "Un oraș de coastă și comitat în Țara Galilor. Al doilea oraș ca mărime din Țara Galilor.",
      en: "A coastal city and county in Wales. The second largest city in Wales."
    },
    facts: {
      de: ["Heimatstadt von Dylan Thomas.", "Swansea Bay.", "Ehemaliges Kupferindustriezentrum.", "Die Halbinsel Gower ist in der Nähe."],
      hu: ["Dylan Thomas szülővárosa.", "Swansea-öböl.", "Egykori rézipari központ.", "A Gower-félsziget a közelben van."],
      ro: ["Orașul natal al lui Dylan Thomas.", "Golful Swansea.", "Fost centru al industriei cuprului.", "Peninsula Gower este în apropiere."],
      en: ["Hometown of Dylan Thomas.", "Swansea Bay.", "Former copper industry center.", "The Gower Peninsula is nearby."]
    }
  },
  {
    id: "uk-portsmouth",
    type: "city",
    parent: "GB-ENG",
    coords: [-1.0878, 50.8198],
    name: { de: "Portsmouth", hu: "Portsmouth", ro: "Portsmouth", en: "Portsmouth" },
    image: "/geo-images/united-kingdom/portsmouth.webp",
    description: {
      de: "Eine Hafenstadt an der Südküste Englands. Vor allem bekannt für ihre maritime Geschichte.",
      hu: "Kikötőváros Anglia déli partján. Főként tengerészeti történelméről ismert.",
      ro: "Un oraș portuar pe coasta de sud a Angliei. Cunoscut în principal pentru istoria sa maritimă.",
      en: "A port city on the south coast of England. Primarily known for its maritime history."
    },
    facts: {
      de: ["Wichtiger Marinestützpunkt.", "Heimat der HMS Victory.", "Geburtsort von Charles Dickens.", "Spinnaker Tower."],
      hu: ["Fontos haditengerészeti bázis.", "A HMS Victory otthona.", "Charles Dickens szülőhelye.", "Spinnaker-torony."],
      ro: ["Bază navală importantă.", "Casa navei HMS Victory.", "Locul de naștere al lui Charles Dickens.", "Turnul Spinnaker."],
      en: ["Important naval base.", "Home to HMS Victory.", "Birthplace of Charles Dickens.", "Spinnaker Tower."]
    }
  },
  {
    id: "uk-brighton",
    type: "city",
    parent: "GB-ENG",
    coords: [-0.1372, 50.8225],
    name: { de: "Brighton", hu: "Brighton", ro: "Brighton", en: "Brighton" },
    image: "/geo-images/united-kingdom/brighton.webp",
    description: {
      de: "Beliebtes Seebad mit berühmtem Pier und Pavilion. Sehr divers und kulturell aktiv.",
      hu: "Népszerű tengerparti üdülőhely híres mólóval és pavilonnal. Nagyon sokszínű és kulturálisan aktív.",
      ro: "Stațiune balneară populară cu un debarcader și un pavilion faimos. Foarte diversă și activă cultural.",
      en: "Popular seaside resort with famous pier and pavilion. Very diverse and culturally active."
    },
    facts: {
      de: ["Royal Pavilion.", "Brighton Palace Pier.", "Bekanntes LGBT-Zentrum.", "Kiesstrand."],
      hu: ["Királyi Pavilon.", "Brighton Palace Pier.", "Ismert LMBT-központ.", "Kavicsos strand."],
      ro: ["Pavilionul Regal.", "Brighton Palace Pier.", "Centru LGBT cunoscut.", "Plajă cu pietriș."],
      en: ["Royal Pavilion.", "Brighton Palace Pier.", "Well-known LGBT center.", "Pebble beach."]
    }
  },
  {
    id: "uk-derry",
    type: "city",
    parent: "GB-NIR",
    coords: [-7.3184, 54.9966],
    name: { de: "Derry/Londonderry", hu: "Derry/Londonderry", ro: "Derry/Londonderry", en: "Derry/Londonderry" },
    image: "/geo-images/united-kingdom/derry.webp",
    description: {
      de: "Die zweitgrößte Stadt in Nordirland. Berühmt für ihre unzerstörten Stadtmauern.",
      hu: "Észak-Írország második legnagyobb városa. Épen maradt városfalairól híres.",
      ro: "Al doilea oraș ca mărime din Irlanda de Nord. Faimos pentru zidurile sale intacte.",
      en: "The second largest city in Northern Ireland. Famous for its intact city walls."
    },
    facts: {
      de: ["Intakte Stadtmauer aus dem 17. Jh.", "Friedensbrücke über den Fluss Foyle.", "Reiche irische Geschichte.", "Derry Girls Serie."],
      hu: ["Érintetlen városfal a 17. századból.", "Béke híd a Foyle folyón.", "Gazdag ír történelem.", "Derry Girls sorozat."],
      ro: ["Ziduri intacte din secolul 17.", "Podul Păcii peste râul Foyle.", "Istorie irlandeză bogată.", "Serialul Derry Girls."],
      en: ["Intact 17th-century city walls.", "Peace Bridge over the River Foyle.", "Rich Irish history.", "Derry Girls TV series."]
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
  },
  {
    id: "uk-westminster-abbey",
    type: "historical",
    parent: "GB-ENG",
    coords: [-0.1276, 51.4994],
    name: { de: "Westminster Abbey", hu: "Westminsteri apátság", ro: "Abația Westminster", en: "Westminster Abbey" },
    image: "/geo-images/united-kingdom/westminster-abbey.webp",
    description: {
      de: "Eine der berühmtesten Kirchen Londons und traditioneller Krönungsort.",
      hu: "London egyik leghíresebb temploma és a hagyományos koronázási helyszín.",
      ro: "Una dintre cele mai faimoase biserici din Londra și locul tradițional de încoronare.",
      en: "One of London's most famous churches and the traditional place of coronation."
    },
    facts: {
      de: ["Gotische Architektur.", "Krönungskirche seit 1066.", "Ruhestätte vieler Monarchen.", "UNESCO-Welterbe."],
      hu: ["Gótikus építészet.", "Koronázótemplom 1066 óta.", "Sok uralkodó nyughelye.", "UNESCO Világörökség."],
      ro: ["Arhitectură gotică.", "Biserică de încoronare din 1066.", "Locul de odihnă al multor monarhi.", "Patrimoniul Mondial UNESCO."],
      en: ["Gothic architecture.", "Coronation church since 1066.", "Resting place of many monarchs.", "UNESCO World Heritage site."]
    }
  },
  {
    id: "uk-tower-bridge",
    type: "landmark",
    parent: "GB-ENG",
    coords: [-0.0754, 51.5055],
    name: { de: "Tower Bridge", hu: "Tower Bridge", ro: "Tower Bridge", en: "Tower Bridge" },
    image: "/geo-images/united-kingdom/tower-bridge.webp",
    description: {
      de: "Eine Klappbrücke in London über den Fluss Themse. Ein weltbekanntes Wahrzeichen.",
      hu: "Felnyitható híd Londonban a Temze folyó felett. Világhírű nevezetesség.",
      ro: "Un pod basculant în Londra peste râul Tamisa. Un punct de reper faimos la nivel mondial.",
      en: "A bascule bridge in London over the River Thames. A world-famous landmark."
    },
    facts: {
      de: ["Neben dem Tower of London.", "Eröffnet im Jahr 1894.", "Besteht aus zwei Türmen.", "Glasboden auf den oberen Stegen."],
      hu: ["A londoni Tower mellett található.", "1894-ben nyitották meg.", "Két toronyból áll.", "Üvegpadló a felső sétányokon."],
      ro: ["Lângă Turnul Londrei.", "Deschis în anul 1894.", "Este format din două turnuri.", "Podea de sticlă pe pasarelele superioare."],
      en: ["Next to the Tower of London.", "Opened in 1894.", "Consists of two towers.", "Glass floor on the upper walkways."]
    }
  },
  {
    id: "uk-hampton-court",
    type: "historical",
    parent: "GB-ENG",
    coords: [-0.3377, 51.4036],
    name: { de: "Hampton Court Palace", hu: "Hampton Court-palota", ro: "Palatul Hampton Court", en: "Hampton Court Palace" },
    image: "/geo-images/united-kingdom/hampton-court.webp",
    description: {
      de: "Ein ehemaliges königliches Schloss im Südwesten von London. Eng verbunden mit Heinrich VIII.",
      hu: "Egykori királyi kastély London délnyugati részén. Szorosan kötődik VIII. Henrikhez.",
      ro: "Un fost palat regal în sud-vestul Londrei. Strâns legat de Henric al VIII-lea.",
      en: "A former royal palace in south-west London. Closely associated with Henry VIII."
    },
    facts: {
      de: ["Lieblingsresidenz von Heinrich VIII.", "Berühmter Irrgarten.", "Mix aus Tudor- und Barockarchitektur.", "Schöne Gärten."],
      hu: ["VIII. Henrik kedvenc rezidenciája.", "Híres útvesztő.", "Tudor- és barokk építészet keveréke.", "Gyönyörű kertek."],
      ro: ["Reședința preferată a lui Henric al VIII-lea.", "Labirint faimos.", "Amestec de arhitectură Tudor și barocă.", "Grădini frumoase."],
      en: ["Favorite residence of Henry VIII.", "Famous maze.", "Mix of Tudor and Baroque architecture.", "Beautiful gardens."]
    }
  },
  {
    id: "uk-st-pauls",
    type: "landmark",
    parent: "GB-ENG",
    coords: [-0.0984, 51.5138],
    name: { de: "St. Paul's Cathedral", hu: "Szent Pál-székesegyház", ro: "Catedrala Sfântul Paul", en: "St. Paul's Cathedral" },
    image: "/geo-images/united-kingdom/st-pauls.webp",
    description: {
      de: "Eine anglikanische Kathedrale in London und Sitz des Bischofs von London.",
      hu: "Anglikán katedrális Londonban, a londoni püspök székhelye.",
      ro: "O catedrală anglicană din Londra și sediul episcopului de Londra.",
      en: "An Anglican cathedral in London and seat of the Bishop of London."
    },
    facts: {
      de: ["Von Sir Christopher Wren entworfen.", "Bekannte große Kuppel.", "Überstand den Blitzkrieg im Zweiten Weltkrieg.", "Whispering Gallery."],
      hu: ["Sir Christopher Wren tervezte.", "Ismert nagy kupola.", "Túlélte a második világháborús bombázásokat.", "Suttogó Galéria."],
      ro: ["Proiectată de Sir Christopher Wren.", "Cupolă mare faimoasă.", "A supraviețuit bombardamentelor din Al Doilea Război Mondial.", "Galeria Șoaptelor."],
      en: ["Designed by Sir Christopher Wren.", "Famous large dome.", "Survived the Blitz in WWII.", "Whispering Gallery."]
    }
  },
  {
    id: "uk-blenheim-palace",
    type: "historical",
    parent: "GB-ENG",
    coords: [-1.3618, 51.8417],
    name: { de: "Blenheim Palace", hu: "Blenheim kastély", ro: "Palatul Blenheim", en: "Blenheim Palace" },
    image: "/geo-images/united-kingdom/blenheim-palace.webp",
    description: {
      de: "Ein monumentales Landhaus in Woodstock, Oxfordshire. Geburtsort von Winston Churchill.",
      hu: "Monumentális vidéki kastély Woodstockban, Oxfordshire-ben. Winston Churchill szülőhelye.",
      ro: "Un conac monumental în Woodstock, Oxfordshire. Locul de naștere al lui Winston Churchill.",
      en: "A monumental country house in Woodstock, Oxfordshire. Birthplace of Winston Churchill."
    },
    facts: {
      de: ["UNESCO-Welterbe.", "Sitz der Dukes of Marlborough.", "Barocke Architektur.", "Große Parkanlage von Capability Brown."],
      hu: ["UNESCO Világörökség.", "Marlborough hercegeinek székhelye.", "Barokk építészet.", "Hatalmas park, Capability Brown tervezte."],
      ro: ["Patrimoniul Mondial UNESCO.", "Sediul Ducilor de Marlborough.", "Arhitectură barocă.", "Parc mare proiectat de Capability Brown."],
      en: ["UNESCO World Heritage site.", "Seat of the Dukes of Marlborough.", "Baroque architecture.", "Large park designed by Capability Brown."]
    }
  },
  {
    id: "uk-durham-cathedral",
    type: "historical",
    parent: "GB-ENG",
    coords: [-1.5762, 54.7733],
    name: { de: "Durham Cathedral", hu: "Durhami székesegyház", ro: "Catedrala din Durham", en: "Durham Cathedral" },
    image: "/geo-images/united-kingdom/durham-cathedral.webp",
    description: {
      de: "Eine der wichtigsten normannischen Kathedralen in Europa. Befindet sich in Nordengland.",
      hu: "Európa egyik legfontosabb normann katedrálisa. Észak-Angliában található.",
      ro: "Una dintre cele mai importante catedrale normande din Europa. Situată în nordul Angliei.",
      en: "One of the most important Norman cathedrals in Europe. Located in northern England."
    },
    facts: {
      de: ["Fertigstellung im 11. Jahrhundert.", "Enthält die Überreste des Heiligen Cuthbert.", "Teil des UNESCO-Welterbes.", "Wurde für Harry-Potter-Filme genutzt."],
      hu: ["11. században fejezték be.", "Itt nyugszik Szent Cuthbert.", "Az UNESCO Világörökség része.", "Használták Harry Potter filmek forgatásához."],
      ro: ["Finalizată în secolul 11.", "Conține rămășițele Sfântului Cuthbert.", "Parte a Patrimoniului Mondial UNESCO.", "A fost folosită pentru filmele Harry Potter."],
      en: ["Completed in the 11th century.", "Contains the remains of St Cuthbert.", "Part of a UNESCO World Heritage site.", "Used in Harry Potter films."]
    }
  },
  {
    id: "uk-york-minster",
    type: "historical",
    parent: "GB-ENG",
    coords: [-1.0817, 53.9620],
    name: { de: "York Minster", hu: "York Minster", ro: "York Minster", en: "York Minster" },
    image: "/geo-images/united-kingdom/york-minster.webp",
    description: {
      de: "Eine der größten gotischen Kathedralen in Nordeuropa.",
      hu: "Észak-Európa egyik legnagyobb gótikus katedrálisa.",
      ro: "Una dintre cele mai mari catedrale gotice din nordul Europei.",
      en: "One of the largest Gothic cathedrals in Northern Europe."
    },
    facts: {
      de: ["Große gotische Architektur.", "Sitz des Erzbischofs von York.", "Berühmte Buntglasfenster.", "Das Great East Window ist riesig."],
      hu: ["Hatalmas gótikus építészet.", "A yorki érsek székhelye.", "Híres ólomüveg ablakok.", "A Nagy Keleti Ablak hatalmas."],
      ro: ["Arhitectură gotică mare.", "Sediul Arhiepiscopului de York.", "Vitralii faimoase.", "Marea Fereastră de Est este uriașă."],
      en: ["Large Gothic architecture.", "Seat of the Archbishop of York.", "Famous stained glass windows.", "The Great East Window is massive."]
    }
  },
  {
    id: "uk-canterbury-cathedral",
    type: "historical",
    parent: "GB-ENG",
    coords: [1.0831, 51.2798],
    name: { de: "Canterbury Cathedral", hu: "Canterbury-i katedrális", ro: "Catedrala din Canterbury", en: "Canterbury Cathedral" },
    image: "/geo-images/united-kingdom/canterbury-cathedral.webp",
    description: {
      de: "Die Mutterkirche der weltweiten anglikanischen Gemeinschaft.",
      hu: "A világszintű anglikán közösség anyatemploma.",
      ro: "Biserica mamă a comuniunii anglicane din întreaga lume.",
      en: "The mother church of the worldwide Anglican Communion."
    },
    facts: {
      de: ["Gegründet im Jahr 597.", "Ort der Ermordung von Thomas Becket.", "UNESCO-Weltkulturerbe.", "Bedeutendes Pilgerziel."],
      hu: ["597-ben alapították.", "Thomas Becket meggyilkolásának helyszíne.", "UNESCO Világörökség része.", "Jelentős zarándokhely."],
      ro: ["Fondată în anul 597.", "Locul asasinării lui Thomas Becket.", "Patrimoniul Mondial UNESCO.", "Importantă destinație de pelerinaj."],
      en: ["Founded in 597.", "Site of the murder of Thomas Becket.", "UNESCO World Heritage site.", "Important pilgrimage destination."]
    }
  },
  {
    id: "uk-edinburgh-castle",
    type: "historical",
    parent: "GB-SCT",
    coords: [-3.2000, 55.9486],
    name: { de: "Edinburgh Castle", hu: "Edinburgh-i vár", ro: "Castelul Edinburgh", en: "Edinburgh Castle" },
    image: "/geo-images/united-kingdom/edinburgh-castle.webp",
    description: {
      de: "Eine historische Festung auf dem Castle Rock in der schottischen Hauptstadt.",
      hu: "Történelmi erőd a Castle Rockon, a skót fővárosban.",
      ro: "O fortăreață istorică pe Castle Rock în capitala scoțiană.",
      en: "A historic fortress on Castle Rock in the Scottish capital."
    },
    facts: {
      de: ["Beherbergt die schottischen Kronjuwelen.", "Die One O'Clock Gun schießt täglich.", "St Margaret's Chapel ist das älteste Gebäude.", "Blick auf die Stadt."],
      hu: ["Itt őrzik a skót koronaékszereket.", "Az egyórás ágyú (One O'Clock Gun) naponta lő.", "A Szent Margit-kápolna a legrégebbi épület.", "Kilátás a városra."],
      ro: ["Găzduiește bijuteriile coroanei scoțiene.", "Tunul de la ora unu trage zilnic.", "Capela Sf. Margareta este cea mai veche clădire.", "Vedere asupra orașului."],
      en: ["Houses the Scottish Crown Jewels.", "The One O'Clock Gun fires daily.", "St Margaret's Chapel is the oldest building.", "View over the city."]
    }
  },
  {
    id: "uk-stirling-castle",
    type: "historical",
    parent: "GB-SCT",
    coords: [-3.9472, 56.1236],
    name: { de: "Stirling Castle", hu: "Stirling vára", ro: "Castelul Stirling", en: "Stirling Castle" },
    image: "/geo-images/united-kingdom/stirling-castle.webp",
    description: {
      de: "Eines der größten und wichtigsten Schlösser in Schottland.",
      hu: "Skócia egyik legnagyobb és legfontosabb kastélya.",
      ro: "Unul dintre cele mai mari și mai importante castele din Scoția.",
      en: "One of the largest and most important castles in Scotland."
    },
    facts: {
      de: ["Schlüsselfestung in schottischer Geschichte.", "Krönungsort vieler schottischer Könige.", "Sitz von Maria Stuart als Kind.", "Renaissance-Architektur."],
      hu: ["Kulcsfontosságú erőd a skót történelemben.", "Sok skót király koronázási helyszíne.", "Stuart Mária gyermekkori lakhelye.", "Reneszánsz építészet."],
      ro: ["Fortăreață cheie în istoria scoțiană.", "Loc de încoronare a multor regi scoțieni.", "Reședința Mariei Stuart în copilărie.", "Arhitectură renascentistă."],
      en: ["Key fortress in Scottish history.", "Coronation site of many Scottish Kings.", "Childhood home of Mary Queen of Scots.", "Renaissance architecture."]
    }
  },
  {
    id: "uk-peak-district",
    type: "mountain",
    parent: "GB-ENG",
    coords: [-1.7943, 53.3543],
    name: { de: "Peak District", hu: "Peak District", ro: "Peak District", en: "Peak District" },
    image: "/geo-images/united-kingdom/peak-district.webp",
    description: {
      de: "Ein Nationalpark im Norden Englands mit Bergen und Mooren.",
      hu: "Nemzeti park Észak-Angliában hegyekkel és lápvidékekkel.",
      ro: "Un parc național din nordul Angliei cu munți și mlaștini.",
      en: "A national park in northern England with mountains and moorlands."
    },
    facts: {
      de: ["Der erste Nationalpark Großbritanniens.", "Geteilt in Dark Peak und White Peak.", "Beliebt für Wandern und Klettern.", "Viele Kalksteinhöhlen."],
      hu: ["Nagy-Britannia első nemzeti parkja.", "Két része: Dark Peak és White Peak.", "Népszerű túrázó- és mászóhely.", "Sok mészkőbarlang."],
      ro: ["Primul parc național din Marea Britanie.", "Împărțit în Dark Peak și White Peak.", "Popular pentru drumeții și alpinism.", "Multe peșteri de calcar."],
      en: ["The first national park in Britain.", "Divided into Dark Peak and White Peak.", "Popular for walking and climbing.", "Many limestone caves."]
    }
  },
  {
    id: "uk-dartmoor",
    type: "mountain",
    parent: "GB-ENG",
    coords: [-3.9000, 50.5500],
    name: { de: "Dartmoor", hu: "Dartmoor", ro: "Dartmoor", en: "Dartmoor" },
    image: "/geo-images/united-kingdom/dartmoor.webp",
    description: {
      de: "Ein weites, unberührtes Moorgebiet in Devon im Südwesten Englands.",
      hu: "Kiterjedt, érintetlen mocsárvidék Devonban, Délnyugat-Angliában.",
      ro: "O zonă mlăștinoasă vastă și sălbatică în Devon, sud-vestul Angliei.",
      en: "A vast, wild moorland area in Devon, south-west England."
    },
    facts: {
      de: ["Bekannt für Dartmoor-Ponys.", "Megalithanlagen.", "Inspiration für 'Der Hund von Baskerville'.", "Zahlreiche Granitfelsen (Tore)."],
      hu: ["A dartmoori pónikról ismert.", "Megalitikus emlékek.", "A 'Sátán kutyája' ihletője.", "Számos gránitszikla (tor)."],
      ro: ["Cunoscut pentru poneii Dartmoor.", "Așezăminte megalitice.", "Inspirație pentru 'Câinele din Baskerville'.", "Numeroase stânci de granit (tors)."],
      en: ["Known for Dartmoor ponies.", "Megalithic sites.", "Inspiration for 'The Hound of the Baskervilles'.", "Numerous granite tors."]
    }
  },
  {
    id: "uk-cairngorms",
    type: "mountain",
    parent: "GB-SCT",
    coords: [-3.6500, 57.1000],
    name: { de: "Cairngorms", hu: "Cairngorms", ro: "Cairngorms", en: "Cairngorms" },
    image: "/geo-images/united-kingdom/cairngorms.webp",
    description: {
      de: "Ein Gebirge und Nationalpark in den östlichen schottischen Highlands.",
      hu: "Hegység és nemzeti park a skót Felföld keleti részén.",
      ro: "Un lanț muntos și parc național în estul Highlands-ului scoțian.",
      en: "A mountain range and national park in the eastern Scottish Highlands."
    },
    facts: {
      de: ["Größter Nationalpark in UK.", "Heimat vieler seltener Tiere.", "Wintersportgebiet.", "Fünf der höchsten Berge Schottlands."],
      hu: ["Az Egyesült Királyság legnagyobb nemzeti parkja.", "Számos ritka állatfaj otthona.", "Téli sportközpont.", "Öt a legmagasabb skót hegyek közül."],
      ro: ["Cel mai mare parc național din Marea Britanie.", "Casa multor animale rare.", "Zonă de sporturi de iarnă.", "Cinci dintre cei mai înalți munți din Scoția."],
      en: ["Largest national park in the UK.", "Home to many rare animals.", "Winter sports area.", "Five of the highest mountains in Scotland."]
    }
  },
  {
    id: "uk-isle-of-skye",
    type: "island",
    parent: "GB-SCT",
    coords: [-6.3000, 57.3000],
    name: { de: "Isle of Skye", hu: "Skye-sziget", ro: "Insula Skye", en: "Isle of Skye" },
    image: "/geo-images/united-kingdom/isle-of-skye.webp",
    description: {
      de: "Die größte und nördlichste Insel der Inneren Hebriden Schottlands.",
      hu: "A Belső-Hebridák legnagyobb és legészakibb szigete Skóciában.",
      ro: "Cea mai mare și cea mai nordică insulă din Hebridele Interioare ale Scoției.",
      en: "The largest and northernmost of the major islands in the Inner Hebrides of Scotland."
    },
    facts: {
      de: ["Bekannt für raue Landschaften.", "Der Old Man of Storr.", "Cuillin-Berge.", "Viele Feenlegenden (Fairy Pools)."],
      hu: ["Zord tájairól ismert.", "Az Old Man of Storr.", "A Cuillin-hegység.", "Sok tündérlegenda (Fairy Pools)."],
      ro: ["Cunoscută pentru peisajele aspre.", "Old Man of Storr.", "Munții Cuillin.", "Multe legende cu zâne (Fairy Pools)."],
      en: ["Known for rugged landscapes.", "The Old Man of Storr.", "Cuillin mountain range.", "Many fairy legends (Fairy Pools)."]
    }
  },
  {
    id: "uk-scottish-highlands",
    type: "mountain",
    parent: "GB-SCT",
    coords: [-5.0000, 57.0000],
    name: { de: "Schottische Highlands", hu: "Skót Felföld", ro: "Highlands Scoțiene", en: "Scottish Highlands" },
    image: "/geo-images/united-kingdom/scottish-highlands.webp",
    description: {
      de: "Die bergige Region in Nord- und Westschottland.",
      hu: "A hegyvidéki régió Skócia északi és nyugati részén.",
      ro: "Regiunea muntoasă din nordul și vestul Scoției.",
      en: "The mountainous region of northern and western Scotland."
    },
    facts: {
      de: ["Dünn besiedelt.", "Ben Nevis ist der höchste Berg.", "Berühmt für Clans und Tartan.", "Spektakuläre Natur."],
      hu: ["Ritkán lakott.", "A Ben Nevis a legmagasabb hegye.", "A klánokról és a tartánról híres.", "Látványos természet."],
      ro: ["Slab populată.", "Ben Nevis este cel mai înalt munte.", "Faimoasă pentru clanuri și tartan.", "Natură spectaculoasă."],
      en: ["Sparsely populated.", "Ben Nevis is the highest mountain.", "Famous for clans and tartan.", "Spectacular nature."]
    }
  },
  {
    id: "uk-cliffs-of-moher",
    type: "landmark",
    parent: "GB-NIR",
    coords: [-9.4297, 52.9715],
    name: { de: "Cliffs of Moher", hu: "Moher-sziklák", ro: "Stâncile Moher", en: "Cliffs of Moher" },
    image: "/geo-images/united-kingdom/cliffs-of-moher.webp",
    description: {
      de: "Steilklippen an der Küste. (Anmerkung: Geografisch in der Republik Irland, hier als UK-Sichtpunkt geführt).",
      hu: "Meredek sziklák a tengerparton. (Megjegyzés: Földrajzilag az Ír Köztársaságban, itt brit látképként szerepel).",
      ro: "Stânci abrupte pe coastă. (Notă: Geografic în Republica Irlanda, aici prezentat ca perspectivă din UK).",
      en: "Steep sea cliffs. (Note: Geographically in the Republic of Ireland, listed here as a UK view point)."
    },
    facts: {
      de: ["Rund 214 Meter hoch.", "Erstrecken sich über 14 Kilometer.", "Beliebtes Touristenziel.", "Viele Seevögel."],
      hu: ["Körülbelül 214 méter magasak.", "14 kilométeren át húzódnak.", "Népszerű turistacélpont.", "Sok tengeri madár."],
      ro: ["Aproximativ 214 metri înălțime.", "Se întind pe 14 kilometri.", "Destinație turistică populară.", "Multe păsări marine."],
      en: ["About 214 meters high.", "Stretch for 14 kilometers.", "Popular tourist destination.", "Many seabirds."]
    }
  },
  {
    id: "uk-jurassic-coast",
    type: "landmark",
    parent: "GB-ENG",
    coords: [-2.7780, 50.6220],
    name: { de: "Jurassic Coast", hu: "Jurassic Coast", ro: "Coasta Jurasică", en: "Jurassic Coast" },
    image: "/geo-images/united-kingdom/jurassic-coast.webp",
    description: {
      de: "Ein Küstenabschnitt am Ärmelkanal in Südengland, berühmt für Fossilien.",
      hu: "A La Manche csatorna menti partszakasz Dél-Angliában, amely kövületeiről híres.",
      ro: "O secțiune de coastă la Canalul Mânecii în sudul Angliei, faimoasă pentru fosile.",
      en: "A stretch of coastline on the English Channel in southern England, famous for fossils."
    },
    facts: {
      de: ["UNESCO-Welterbe.", "Reich an Dinosaurierfossilien.", "Umfasst 185 Millionen Jahre Erdgeschichte.", "Durdle Door ist ein berühmter Felsbogen."],
      hu: ["UNESCO Világörökség.", "Gazdag dinoszaurusz-kövületekben.", "185 millió évnyi földtörténetet ölel fel.", "A Durdle Door egy híres sziklaív."],
      ro: ["Patrimoniul Mondial UNESCO.", "Bogată în fosile de dinozauri.", "Acoperă 185 milioane de ani de istorie a Pământului.", "Durdle Door este un arc de stâncă faimos."],
      en: ["UNESCO World Heritage site.", "Rich in dinosaur fossils.", "Spans 185 million years of Earth's history.", "Durdle Door is a famous rock arch."]
    }
  },
  {
    id: "uk-snowdonia-cader",
    type: "mountain",
    parent: "GB-WLS",
    coords: [-3.9064, 52.8675],
    name: { de: "Cader Idris", hu: "Cader Idris", ro: "Cader Idris", en: "Cader Idris" },
    image: "/geo-images/united-kingdom/snowdonia-cader.webp",
    description: {
      de: "Ein markanter Berg in Snowdonia, Wales.",
      hu: "Kiemelkedő hegy Snowdonia területén, Walesben.",
      ro: "Un munte proeminent în Snowdonia, Țara Galilor.",
      en: "A prominent mountain in Snowdonia, Wales."
    },
    facts: {
      de: ["Beliebt bei Bergsteigern.", "893 Meter hoch.", "Viele walisische Legenden.", "Gletschersee am Fuß."],
      hu: ["Népszerű a hegymászók körében.", "893 méter magas.", "Számos walesi legenda fűződik hozzá.", "Gleccsertó a lábánál."],
      ro: ["Popular printre alpiniști.", "893 metri înălțime.", "Multe legende galeze.", "Lac glaciar la poale."],
      en: ["Popular with mountaineers.", "893 meters high.", "Many Welsh legends.", "Glacial lake at the base."]
    }
  },
  {
    id: "uk-pembrokeshire",
    type: "landmark",
    parent: "GB-WLS",
    coords: [-5.0000, 51.8000],
    name: { de: "Pembrokeshire Coast", hu: "Pembrokeshire Coast", ro: "Coasta Pembrokeshire", en: "Pembrokeshire Coast" },
    image: "/geo-images/united-kingdom/pembrokeshire.webp",
    description: {
      de: "Ein Nationalpark in Wales, der für seine spektakuläre Küstenlandschaft bekannt ist.",
      hu: "Nemzeti park Walesben, amely látványos partvidékéről ismert.",
      ro: "Un parc național în Țara Galilor, cunoscut pentru peisajul său spectaculos de coastă.",
      en: "A national park in Wales, known for its spectacular coastal scenery."
    },
    facts: {
      de: ["Der einzige britische Nationalpark, der hauptsächlich Küste ist.", "Pembrokeshire Coast Path.", "Tolle Strände.", "Viel Tierwelt (Papageientaucher, Robben)."],
      hu: ["Az egyetlen brit nemzeti park, amely főleg partvidék.", "Pembrokeshire Coast Path (túraútvonal).", "Nagyszerű strandok.", "Gazdag vadvilág (lundák, fókák)."],
      ro: ["Singurul parc național britanic care este în principal coastă.", "Poteca de Coastă Pembrokeshire.", "Plaje grozave.", "Viață sălbatică bogată (pufini, foci)."],
      en: ["The only UK national park which is primarily coastal.", "Pembrokeshire Coast Path.", "Great beaches.", "Lots of wildlife (puffins, seals)."]
    }
  },
  {
    id: "uk-giants-causeway",
    type: "landmark",
    parent: "GB-NIR",
    coords: [-6.5117, 55.2408],
    name: { de: "Giant's Causeway", hu: "Óriások útja", ro: "Giant's Causeway", en: "Giant's Causeway" },
    image: "/geo-images/united-kingdom/giants-causeway.webp",
    description: {
      de: "Geologische Formation aus Basaltsäulen in Nordirland. Legendärer Weg nach Schottland.",
      hu: "Bazaltoszlopokból álló geológiai képződmény Észak-Írországban. Legendás út Skóciába.",
      ro: "Formațiune geologică din coloane de bazalt în Irlanda de Nord. Cale legendară către Scoția.",
      en: "Geological formation of basalt columns in Northern Ireland. Legendary path to Scotland."
    },
    facts: {
      de: ["Ungefähr 40.000 Säulen.", "Vor Millionen Jahren durch Vulkanismus entstanden.", "UNESCO-Welterbe.", "Mythen um Riesen (Finn MacCool)."],
      hu: ["Körülbelül 40 000 oszlop.", "Évmilliókkal ezelőtt vulkanizmus révén jött létre.", "UNESCO Világörökség része.", "Mítoszok az óriásokról (Finn MacCool)."],
      ro: ["Aproximativ 40.000 de coloane.", "Formată acum milioane de ani prin vulcanism.", "Patrimoniul Mondial UNESCO.", "Mituri despre uriași (Finn MacCool)."],
      en: ["Approximately 40,000 columns.", "Formed millions of years ago by volcanism.", "UNESCO World Heritage site.", "Myths of giants (Finn MacCool)."]
    }
  }
];

export const unitedkingdomAllPoi: POI[] = [
  unitedkingdomCountry,
  ...unitedkingdomRegions,
  ...unitedkingdomCities,
  ...unitedkingdomLandmarks
];
