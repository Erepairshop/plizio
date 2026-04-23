import type { POI } from "./poi";

export const icelandCountry: POI = {
  id: "country-iceland",
  type: "country",
  parent: "europe",
  coords: [-19.0208, 64.9631],
  name: {
    de: "Island",
    hu: "Izland",
    ro: "Islanda",
    en: "Iceland"
  },
  description: {
    de: "Island ist ein Land der extremen Kontraste, bekannt als das 'Land von Feuer und Eis', mit Gletschern, Geysiren und Vulkanen.",
    hu: "Izland a szélsőséges kontrasztok országa, a 'tűz és jég földje', gleccserekkel, gejzírekkel és vulkánokkal.",
    ro: "Islanda este o țară a contrastelor extreme, cunoscută sub numele de „țara focului și a gheții”, cu ghețari, gheizere și vulcani.",
    en: "Iceland is a land of extreme contrasts, known as the 'Land of Fire and Ice', featuring glaciers, geysers, and volcanoes."
  },
  descriptionAdvanced: {
    de: "Island, eine Inselnation im Nordatlantik, ist berühmt für seine dramatische Landschaft mit Vulkanen, Geysiren, Thermalquellen und Lavafeldern. Massive Gletscher sind in den Nationalparks Vatnajökull und Snæfellsjökull geschützt. Die meisten Einwohner leben in der Hauptstadt Reykjavík, die mit Erdwärme betrieben wird und das National- und Saga-Museum beherbergt, die Islands Wikingergeschichte nachzeichnen.",
    hu: "Izland, az észak-atlanti szigetország, drámai tájairól híres, vulkánokkal, gejzírekkel, hőforrásokkal és lávamezőkkel. A hatalmas gleccsereket a Vatnajökull és a Snæfellsjökull Nemzeti Parkok védik. A lakosság többsége a fővárosban, Reykjavíkban él, amely geotermikus energiával működik, és itt található a Nemzeti és a Saga Múzeum is, amelyek Izland viking történelmét mutatják be.",
    ro: "Islanda, o națiune insulară din Atlanticul de Nord, este renumită pentru peisajul său dramatic cu vulcani, gheizere, izvoare termale și câmpuri de lavă. Ghețarii masivi sunt protejați în parcurile naționale Vatnajökull și Snæfellsjökull. Majoritatea populației trăiește în capitala Reykjavík, care funcționează cu energie geotermală și găzduiește muzeele Național și Saga, care retrăiesc istoria vikingă a Islandei.",
    en: "Iceland, a Nordic island nation, is defined by its dramatic landscape with volcanoes, geysers, hot springs and lava fields. Massive glaciers are protected in Vatnajökull and Snæfellsjökull national parks. Most of the population lives in the capital, Reykjavík, which runs on geothermal power and is home to the National and Saga museums, tracing Iceland’s Viking history."
  },
  facts: {
    de: [
      "Island hat keine Schienenwege (Züge).",
      "Es ist eines der wenigen Länder ohne Mücken.",
      "Mehr als 60% der Bevölkerung leben in Reykjavík.",
      "Island hat über 30 aktive Vulkansysteme.",
      "Das Land nutzt fast zu 100% erneuerbare Energien.",
      "Die Althingi (Islands Parlament) ist das älteste bestehende Parlament der Welt (gegründet 930).",
      "Es gibt mehr Schafe als Menschen in Island.",
      "Bier war in Island bis 1989 verboten.",
      "Island hat keinen Waldanteil; die meisten Bäume wurden von den Wikingern abgeholzt.",
      "Viele Isländer glauben noch heute an Elfen und Trolle."
    ],
    hu: [
      "Izlandon nincsenek vasútvonalak.",
      "Ez azon kevés országok egyike, ahol nincsenek szúnyogok.",
      "A lakosság több mint 60%-a Reykjavíkban él.",
      "Izlandon több mint 30 aktív vulkánrendszer található.",
      "Az ország szinte 100%-ban megújuló energiát használ.",
      "Az Althingi (az izlandi parlament) a világ legrégebbi létező parlamentje (930-ban alapították).",
      "Izlandon több juh él, mint ember.",
      "A sör 1989-ig be volt tiltva Izlandon.",
      "Izlandnak szinte nincs erdős területe; a legtöbb fát a vikingek vágták ki.",
      "Sok izlandi ma is hisz az elfekben és a trollokban."
    ],
    ro: [
      "Islanda nu are căi ferate (trenuri).",
      "Este una dintre puținele țări fără țânțari.",
      "Mai mult de 60% din populație trăiește în Reykjavík.",
      "Islanda are peste 30 de sisteme vulcanice active.",
      "Țara folosește aproape 100% energie regenerabilă.",
      "Althingi (parlamentul Islandei) este cel mai vechi parlament existent din lume (fondat în 930).",
      "Există mai multe oi decât oameni în Islanda.",
      "Berea a fost interzisă în Islanda până în 1989.",
      "Islanda nu are păduri; majoritatea copacilor au fost tăiați de vikingi.",
      "Mulți islandezi cred și astăzi în elfi și troli."
    ],
    en: [
      "Iceland has no public railways.",
      "It is one of the few countries in the world with no mosquitoes.",
      "More than 60% of the population lives in Reykjavík.",
      "Iceland has over 30 active volcanic systems.",
      "The country uses almost 100% renewable energy.",
      "The Althingi (Iceland's parliament) is the oldest surviving parliament in the world (founded in 930).",
      "There are more sheep than people in Iceland.",
      "Beer was banned in Iceland until 1989.",
      "Iceland has very few forests; most trees were cut down by Vikings.",
      "Many Icelanders still believe in elves and trolls."
    ]
  },
  image: "/geo-images/iceland/country-iceland.webp"
};

export const icelandRegions: POI[] = [
  {
    id: "IS-001",
    type: "region",
    parent: "country-iceland",
    coords: [-14.5, 65.0],
    name: { de: "Austurland", hu: "Austurland", ro: "Austurland", en: "Austurland" },
    description: {
      de: "Die Region der Ostfjorde, geprägt von tiefen Fjorden, steilen Bergen und abgelegenen Fischerdörfern.",
      hu: "A Keleti-fjordok régiója, mély fjordok, meredek hegyek és elszigetelt halászfalvak jellemzik.",
      ro: "Regiunea fiordurilor de est, caracterizată prin fiorduri adânci, munți abrupți și sate de pescari izolate.",
      en: "The East Fjords region, characterized by deep fjords, steep mountains, and remote fishing villages."
    }
  },
  {
    id: "IS-002",
    type: "region",
    parent: "country-iceland",
    coords: [-19.0, 64.0],
    name: { de: "Suðurland", hu: "Suðurland", ro: "Suðurland", en: "Suðurland" },
    description: {
      de: "Südisland beherbergt einige der berühmtesten Attraktionen des Landes, darunter den Golden Circle und riesige Wasserfälle.",
      hu: "Dél-Izland ad otthont az ország leghíresebb látnivalóinak, köztük az Arany körútnak és hatalmas vízeséseknek.",
      ro: "Islanda de Sud găzduiește unele dintre cele mai faimoase atracții ale țării, inclusiv Cercul de Aur și cascade uriașe.",
      en: "South Iceland is home to some of the country's most famous attractions, including the Golden Circle and massive waterfalls."
    }
  },
  {
    id: "IS-003",
    type: "region",
    parent: "country-iceland",
    coords: [-22.5, 63.9],
    name: { de: "Suðurnes", hu: "Suðurnes", ro: "Suðurnes", en: "Suðurnes" },
    description: {
      de: "Die Halbinsel Reykjanes, bekannt für ihre geothermische Aktivität und den internationalen Flughafen Keflavík.",
      hu: "A Reykjanes-félsziget, amely geotermikus aktivitásáról és a keflavíki nemzetközi repülőtérről ismert.",
      ro: "Peninsula Reykjanes, cunoscută pentru activitatea sa geotermală și aeroportul internațional Keflavík.",
      en: "The Reykjanes Peninsula, known for its geothermal activity and the Keflavík International Airport."
    }
  },
  {
    id: "IS-004",
    type: "region",
    parent: "country-iceland",
    coords: [-21.9, 64.1],
    name: { de: "Reykjavík", hu: "Reykjavík", ro: "Reykjavík", en: "Reykjavík" },
    description: {
      de: "Die Hauptstadtregion Reykjavík, das wirtschaftliche und kulturelle Zentrum Islands.",
      hu: "Reykjavík fővárosi régiója, Izland gazdasági és kulturális központja.",
      ro: "Regiunea capitalei Reykjavík, centrul economic și cultural al Islandei.",
      en: "The Reykjavík capital region, the economic and cultural hub of Iceland."
    }
  },
  {
    id: "IS-005",
    type: "region",
    parent: "country-iceland",
    coords: [-21.8, 64.1],
    name: { de: "Höfuðborgarsvæði", hu: "Höfuðborgarsvæði", ro: "Höfuðborgarsvæði", en: "Höfuðborgarsvæði" },
    description: {
      de: "Die Metropolregion um Reykjavík, in der der Großteil der isländischen Bevölkerung lebt.",
      hu: "A Reykjavík környéki agglomeráció, ahol az izlandi lakosság többsége él.",
      ro: "Regiunea metropolitană din jurul Reykjavík, unde trăiește majoritatea populației islandeze.",
      en: "The metropolitan area around Reykjavík, where the majority of the Icelandic population resides."
    }
  },
  {
    id: "IS-006",
    type: "region",
    parent: "country-iceland",
    coords: [-22.0, 64.8],
    name: { de: "Vesturland", hu: "Vesturland", ro: "Vesturland", en: "Vesturland" },
    description: {
      de: "Westisland, bekannt für die vielfältigen Landschaften der Halbinsel Snæfellsnes und historische Sagas.",
      hu: "Nyugat-Izland, amely a Snæfellsnes-félsziget változatos tájairól és történelmi szagáiról ismert.",
      ro: "Islanda de Vest, cunoscută pentru peisajele diverse ale peninsulei Snæfellsnes și saga istorice.",
      en: "West Iceland, known for the diverse landscapes of the Snæfellsnes Peninsula and historical sagas."
    }
  },
  {
    id: "IS-007",
    type: "region",
    parent: "country-iceland",
    coords: [-23.0, 65.8],
    name: { de: "Vestfirðir", hu: "Vestfirðir", ro: "Vestfirðir", en: "Vestfirðir" },
    description: {
      de: "Die Westfjorde, eine der am dünnsten besiedelten und wildesten Regionen Islands.",
      hu: "A Nyugati-fjordok, Izland egyik legritkábban lakott és legvadabb vidéke.",
      ro: "Fiordurile de Vest, una dintre cele mai puțin populate și mai sălbatice regiuni ale Islandei.",
      en: "The Westfjords, one of the most sparsely populated and wildest regions of Iceland."
    }
  },
  {
    id: "IS-008",
    type: "region",
    parent: "country-iceland",
    coords: [-20.0, 65.5],
    name: { de: "Norðurland vestra", hu: "Norðurland vestra", ro: "Norðurland vestra", en: "Norðurland vestra" },
    description: {
      de: "Der Nordwesten Islands, geprägt von Landwirtschaft, Pferdezucht und weiten Tälern.",
      hu: "Izland északnyugati része, mezőgazdaság, lótenyésztés és tágas völgyek jellemzik.",
      ro: "Islanda de Nord-Vest, caracterizată prin agricultură, creșterea cailor și văi largi.",
      en: "Northwest Iceland, characterized by agriculture, horse breeding, and wide valleys."
    }
  },
  {
    id: "IS-009",
    type: "region",
    parent: "country-iceland",
    coords: [-17.5, 65.5],
    name: { de: "Norðurland eystra", hu: "Norðurland eystra", ro: "Norðurland eystra", en: "Norðurland eystra" },
    description: {
      de: "Der Nordosten Islands mit der Stadt Akureyri und spektakulären vulkanischen Gebieten um Mývatn.",
      hu: "Izland északkeleti része Akureyri városával és a Mývatn körüli látványos vulkáni területekkel.",
      ro: "Islanda de Nord-Est, cu orașul Akureyri și zone vulcanice spectaculoase în jurul Mývatn.",
      en: "Northeast Iceland, featuring the town of Akureyri and spectacular volcanic areas around Mývatn."
    }
  }
];

export const icelandCities: POI[] = [
  {
    id: "city-reykjavik",
    type: "city",
    parent: "IS-004",
    coords: [-21.9426, 64.1466],
    name: { de: "Reykjavík", hu: "Reykjavík", ro: "Reykjavík", en: "Reykjavík" },
    description: {
      de: "Die nördlichste Hauptstadt der Welt, bekannt für ihre bunte Architektur und lebendige Kulturszene.",
      hu: "A világ legészakibb fővárosa, színes építészetéről és pezsgő kulturális életéről ismert.",
      ro: "Cea mai nordică capitală a lumii, cunoscută pentru arhitectura sa colorată și scena culturală vibrantă.",
      en: "The world's northernmost capital city, known for its colorful architecture and vibrant cultural scene."
    },
    facts: {
      de: ["Name bedeutet 'Rauchbucht'.", "Wird fast vollständig mit Geothermie beheizt.", "Heimat der markanten Hallgrímskirkja."],
      hu: ["A neve 'füstös öblöt' jelent.", "Szinte teljesen geotermikus energiával fűtik.", "Itt található a jellegzetes Hallgrímskirkja templom."],
      ro: ["Numele înseamnă „Golful fumului”.", "Este încălzit aproape în întregime prin geotermie.", "Găzduiește emblematica biserică Hallgrímskirkja."],
      en: ["The name means 'Smoky Bay'.", "Runs almost entirely on geothermal energy.", "Home to the striking Hallgrímskirkja church."]
    },
    image: "/geo-images/iceland/city-reykjavik.webp"
  },
  {
    id: "city-akureyri",
    type: "city",
    parent: "IS-009",
    coords: [-18.0878, 65.6835],
    name: { de: "Akureyri", hu: "Akureyri", ro: "Akureyri", en: "Akureyri" },
    description: {
      de: "Die 'Hauptstadt des Nordens', am Ende des Eyjafjörður-Fjords gelegen.",
      hu: "Az 'észak fővárosa', az Eyjafjörður-fjord végén található.",
      ro: "„Capitala Nordului”, situată la capătul fiordului Eyjafjörður.",
      en: "The 'Capital of the North', situated at the base of Eyjafjörður Fjord."
    },
    facts: {
      de: ["Zweitgrößtes Stadtgebiet Islands.", "Hat einen der nördlichsten botanischen Gärten der Welt.", "Wichtiger Fischereihafen."],
      hu: ["Izland második legnagyobb városi területe.", "Itt található a világ egyik legészakibb botanikus kertje.", "Fontos halászkikötő."],
      ro: ["A doua cea mai mare zonă urbană din Islanda.", "Are una dintre cele mai nordice grădini botanice din lume.", "Port pescăresc important."],
      en: ["Second largest urban area in Iceland.", "Has one of the northernmost botanical gardens in the world.", "Important fishing port."]
    }
  },
  {
    id: "city-keflavik",
    type: "city",
    parent: "IS-003",
    coords: [-22.5624, 64.0049],
    name: { de: "Keflavík", hu: "Keflavík", ro: "Keflavík", en: "Keflavík" },
    description: {
      de: "Bekannt als Standort des internationalen Flughafens und für seine Musikgeschichte.",
      hu: "A nemzetközi repülőtérről és zenei történelméről ismert város.",
      ro: "Cunoscut pentru aeroportul internațional și istoria sa muzicală.",
      en: "Known for hosting the international airport and its music history."
    },
    facts: {
      de: ["Früher ein wichtiger US-Militärstützpunkt.", "Wird oft als 'Stadt des Rock 'n' Roll' bezeichnet.", "Tor für die meisten Besucher Islands."],
      hu: ["Korábban fontos amerikai katonai bázis volt.", "Gyakran nevezik a 'rock 'n' roll városának'.", "A legtöbb látogató kapuja Izlandra."],
      ro: ["Fostă bază militară importantă a SUA.", "Deseori numit „Orașul Rock 'n' Roll-ului”.", "Poarta de intrare pentru majoritatea vizitatorilor Islandei."],
      en: ["Formerly a major US military base.", "Often called the 'Town of Rock 'n' Roll'.", "Gateway for most visitors to Iceland."]
    }
  },
  {
    id: "city-isafjordur",
    type: "city",
    parent: "IS-007",
    coords: [-23.1274, 66.0747],
    name: { de: "Ísafjörður", hu: "Ísafjörður", ro: "Ísafjörður", en: "Ísafjörður" },
    description: {
      de: "Die größte Stadt der Westfjorde, umgeben von steilen Bergen.",
      hu: "A Westfjords (Nyugati fjordok) legnagyobb városa, meredek hegyekkel körülvéve.",
      ro: "Cel mai mare oraș din Westfjords, înconjurat de munți abrupți.",
      en: "The largest town in the Westfjords, surrounded by towering mountains."
    },
    facts: {
      de: ["Zentrum für Handel und Fischerei in der Region.", "Bekannt für seine alten Holzhäuser.", "Austragungsort des 'Aldrei fór ég suður' Musikfestivals."],
      hu: ["A régió kereskedelmi és halászati központja.", "Régi faházairól ismert.", "Itt rendezik az 'Aldrei fór ég suður' zenei fesztivált."],
      ro: ["Centru pentru comerț și pescuit în regiune.", "Cunoscut pentru casele sale vechi din lemn.", "Găzduiește festivalul de muzică „Aldrei fór ég suður”."],
      en: ["Regional center for trade and fishing.", "Known for its old wooden houses.", "Hosts the 'Aldrei fór ég suður' music festival."]
    }
  },
  {
    id: "city-selfoss",
    type: "city",
    parent: "IS-002",
    coords: [-21.0011, 63.9331],
    name: { de: "Selfoss", hu: "Selfoss", ro: "Selfoss", en: "Selfoss" },
    description: {
      de: "Ein wichtiges Dienstleistungszentrum im Süden Islands am Fluss Ölfusá.",
      hu: "Fontos szolgáltató központ Dél-Izlandon, az Ölfusá-folyó partján.",
      ro: "Un centru important de servicii în sudul Islandei, pe râul Ölfusá.",
      en: "A major service center in South Iceland on the banks of the Ölfusá River."
    },
    facts: {
      de: ["Größte Stadt im Süden.", "Wichtiges Zentrum der Milchindustrie.", "Liegt an der Ringstraße (Hringvegur)."],
      hu: ["A legnagyobb város délen.", "A tejipar fontos központja.", "A gyűrűs úton (Hringvegur) található."],
      ro: ["Cel mai mare oraș din sud.", "Centru important al industriei lactatelor.", "Situat pe drumul principal (Ring Road)."],
      en: ["Largest town in the south.", "Major hub for the dairy industry.", "Located on the Ring Road."]
    }
  },
  {
    id: "city-seydisfjordur",
    type: "city",
    parent: "IS-001",
    coords: [-14.0101, 65.2598],
    name: { de: "Seyðisfjörður", hu: "Seyðisfjörður", ro: "Seyðisfjörður", en: "Seyðisfjörður" },
    description: {
      de: "Ein malerisches Fischerdorf in den Ostfjorden, bekannt für seine bunten Holzhäuser und seine Kunstszene.",
      hu: "Festői halászfalu a Keleti-fjordokban, színes faházairól és művészeti életéről ismert.",
      ro: "Un sat de pescari pitoresc din fiordurile de est, cunoscut pentru casele sale colorate din lemn și scena sa artistică.",
      en: "A picturesque fishing village in the East Fjords, known for its colorful wooden houses and art scene."
    },
    facts: {
      de: ["Ankunftsort der Fähre aus Dänemark und den Färöern.", "Bekannt für die blaue Kirche und den Regenbogenweg.", "Umgeben von steilen Bergen und Wasserfällen."],
      hu: ["A Dániából és Feröer-szigetekről érkező komp kikötőhelye.", "Híres a kék templomáról és a szivárványos útjáról.", "Meredek hegyek és vízesések veszik körül."],
      ro: ["Punctul de sosire a feribotului din Danemarca și Insulele Feroe.", "Cunoscut pentru biserica albastră și drumul curcubeului.", "Înconjurat de munți abrupți și cascade."],
      en: ["Arrival point for the ferry from Denmark and the Faroe Islands.", "Famous for its blue church and rainbow-painted street.", "Surrounded by steep mountains and waterfalls."]
    }
  }
];

export const icelandNature: POI[] = [
  {
    id: "nature-thingvellir",
    type: "landmark",
    parent: "IS-002",
    coords: [-21.1295, 64.2559],
    name: { de: "Þingvellir Nationalpark", hu: "Þingvellir Nemzeti Park", ro: "Parcul Național Þingvellir", en: "Þingvellir National Park" },
    description: {
      de: "UNESCO-Welterbe, wo die nordamerikanische und die eurasische Erdplatte auseinanderdriften.",
      hu: "UNESCO világörökség, ahol az észak-amerikai és az eurázsiai kőzetlemezek távolodnak egymástól.",
      ro: "Patrimoniu Mondial UNESCO, unde plăcile tectonice nord-americană și eurasiatică se despart.",
      en: "UNESCO World Heritage site where the North American and Eurasian tectonic plates drift apart."
    },
    facts: {
      de: ["Gründungsort des Althingi im Jahr 930.", "Beherbergt den größten natürlichen See Islands, Þingvallavatn.", "Drehort für viele Szenen in 'Game of Thrones'."],
      hu: ["Az Althingi alapítási helye 930-ban.", "Itt található Izland legnagyobb természetes tava, a Þingvallavatn.", "A 'Trónok harca' számos jelenetének forgatási helyszíne."],
      ro: ["Locul de fondare a Althingi în anul 930.", "Găzduiește cel mai mare lac natural din Islanda, Þingvallavatn.", "Loc de filmare pentru multe scene din „Game of Thrones”."],
      en: ["Site of the Althingi's founding in 930 AD.", "Home to Iceland's largest natural lake, Þingvallavatn.", "Filming location for many 'Game of Thrones' scenes."]
    }
  },
  {
    id: "nature-gullfoss",
    type: "landmark",
    parent: "IS-002",
    coords: [-20.1202, 64.3271],
    name: { de: "Gullfoss", hu: "Gullfoss", ro: "Gullfoss", en: "Gullfoss" },
    description: {
      de: "Der 'Goldene Wasserfall', einer der bekanntesten Wasserfälle Islands.",
      hu: "Az 'arany vízesés', Izland egyik legismertebb vízesése.",
      ro: "„Cascada de Aur”, una dintre cele mai cunoscute cascade din Islanda.",
      en: "The 'Golden Waterfall', one of Iceland's most famous waterfalls."
    },
    facts: {
      de: ["Teil des 'Golden Circle'.", "Das Wasser stürzt in zwei Stufen in eine tiefe Schlucht.", "Wurde beinahe für ein Wasserkraftwerk genutzt."],
      hu: ["Az 'Arany körút' (Golden Circle) része.", "A víz két lépcsőben zúdul egy mély szurdokba.", "Majdnem vízerőmű épült itt."],
      ro: ["Parte a „Cercului de Aur”.", "Apa cade în două trepte într-un canion adânc.", "A fost aproape de a fi folosită pentru o hidrocentrală."],
      en: ["Part of the 'Golden Circle' tourist route.", "Falls in two stages into a deep canyon.", "Was once saved from being dammed for a hydroelectric plant."]
    }
  },
  {
    id: "nature-geysir",
    type: "landmark",
    parent: "IS-002",
    coords: [-20.3023, 64.3104],
    name: { de: "Geysir-Heißquellengebiet", hu: "Gejzír-hőforrásvidék", ro: "Zona geotermală Geysir", en: "Geysir Hot Spring Area" },
    description: {
      de: "Das Gebiet, nach dem alle Geysire benannt sind.",
      hu: "A terület, amelyről az összes gejzírt elnevezték.",
      ro: "Zona după care sunt numite toate gheizerele.",
      en: "The area that gave its name to all geysers."
    },
    facts: {
      de: ["Der 'Große Geysir' bricht nur noch selten aus.", "Strokkur bricht alle 6-10 Minuten aus.", "Das Wasser ist fast 100°C heiß."],
      hu: ["A 'Nagy Gejzír' már ritkán tör ki.", "A Strokkur 6-10 percenként tör ki.", "A víz hőmérséklete majdnem 100°C."],
      ro: ["Marele Geysir erupe acum rar.", "Strokkur erupe la fiecare 6-10 minute.", "Apa are aproape 100°C."],
      en: ["The 'Great Geysir' erupts infrequently now.", "Strokkur erupts every 6-10 minutes.", "Water temperatures are near 100°C."]
    }
  },
  {
    id: "nature-vatnajokull",
    type: "landmark",
    parent: "IS-001",
    coords: [-17.2, 64.4],
    name: { de: "Vatnajökull", hu: "Vatnajökull", ro: "Vatnajökull", en: "Vatnajökull" },
    description: {
      de: "Der größte Gletscher Islands und Europas außerhalb des Polargebiets.",
      hu: "Izland és Európa legnagyobb gleccserje a sarkvidéken kívül.",
      ro: "Cel mai mare ghețar din Islanda și din Europa în afara regiunii polare.",
      en: "The largest glacier in Iceland and Europe outside the Arctic."
    },
    facts: {
      de: ["Bedeckt etwa 8% der Landesfläche.", "Unter dem Eis befinden sich mehrere aktive Vulkane.", "Teil des größten Nationalparks Europas."],
      hu: ["Az ország területének mintegy 8%-át borítja.", "A jég alatt több aktív vulkán található.", "Európa legnagyobb nemzeti parkjának része."],
      ro: ["Acoperă aproximativ 8% din suprafața țării.", "Sub gheață se află mai mulți vulcani activi.", "Parte a celui mai mare parc național din Europa."],
      en: ["Covers about 8% of Iceland's land area.", "Several active volcanoes lie beneath the ice.", "Part of Europe's largest national park."]
    }
  },
  {
    id: "nature-jokulsarlon",
    type: "landmark",
    parent: "IS-001",
    coords: [-16.1793, 64.0484],
    name: { de: "Jökulsárlón", hu: "Jökulsárlón", ro: "Jökulsárlón", en: "Jökulsárlón" },
    description: {
      de: "Eine Gletscherlagune mit schwimmenden Eisbergen.",
      hu: "Gleccserlagúna úszó jéghegyekkel.",
      ro: "O lagună glaciară cu iceberguri plutitoare.",
      en: "A glacier lagoon filled with floating icebergs."
    },
    facts: {
      de: ["Eisberge kalben vom Breiðamerkurjökull.", "Direkt daneben liegt der 'Diamond Beach'.", "Der tiefste See Islands."],
      hu: ["A jéghegyek a Breiðamerkurjökull-gleccserről szakadnak le.", "Közvetlenül mellette található a 'Gyémánt-part'.", "Izland legmélyebb tava."],
      ro: ["Icebergurile se desprind din ghețarul Breiðamerkurjökull.", "Chiar lângă se află „Diamond Beach”.", "Cel mai adânc lac din Islanda."],
      en: ["Icebergs calve from the Breiðamerkurjökull glacier.", "The 'Diamond Beach' is located right next to it.", "The deepest lake in Iceland."]
    }
  },
  {
    id: "nature-skogafoss",
    type: "landmark",
    parent: "IS-002",
    coords: [-19.5113, 63.532],
    name: { de: "Skógafoss", hu: "Skógafoss", ro: "Skógafoss", en: "Skógafoss" },
    description: {
      de: "Ein gewaltiger Wasserfall im Süden, bekannt für seine perfekte Rechtecksform.",
      hu: "Hatalmas vízesés délen, tökéletes téglalap alakjáról ismert.",
      ro: "O cascadă masivă în sud, cunoscută pentru forma sa dreptunghiulară perfectă.",
      en: "A massive waterfall in the south, famous for its perfect rectangular shape."
    },
    facts: {
      de: ["60 Meter hoch und 25 Meter breit.", "Oft sieht man einen doppelten Regenbogen im Sprühnebel.", "Legende besagt, dass ein Wikinger einen Schatz dahinter vergraben hat."],
      hu: ["60 méter magas és 25 méter széles.", "A vízpermetben gyakran látható kettős szivárvány.", "A legenda szerint egy viking kincset rejtett el mögötte."],
      ro: ["60 de metri înălțime și 25 de metri lățime.", "Deseori se vede un curcubeu dublu în amurg.", "Legenda spune că un viking a îngropat o comoară în spatele ei."],
      en: ["60 meters high and 25 meters wide.", "Double rainbows are frequently visible in the spray.", "Legend says a Viking buried treasure behind it."]
    }
  },
  {
    id: "nature-seljalandsfoss",
    type: "landmark",
    parent: "IS-002",
    coords: [-19.9885, 63.6156],
    name: { de: "Seljalandsfoss", hu: "Seljalandsfoss", ro: "Seljalandsfoss", en: "Seljalandsfoss" },
    description: {
      de: "Ein Wasserfall, hinter dem man entlanglaufen kann.",
      hu: "Vízesés, amely mögött el lehet sétálni.",
      ro: "O cascadă în spatele căreia poți merge.",
      en: "A waterfall that you can walk behind."
    },
    facts: {
      de: ["Stürzt über eine ehemalige Klippe.", "Besonders bei Sonnenuntergang spektakulär.", "In der Nähe liegt der versteckte Wasserfall Gljúfrabúi."],
      hu: ["Egy egykori tengerparti sziklafalról zúdul le.", "Naplementekor különösen látványos.", "Közelében található a rejtett Gljúfrabúi vízesés."],
      ro: ["Cade peste o fostă faleză.", "Spectaculoasă mai ales la apus.", "În apropiere se află cascada ascunsă Gljúfrabúi."],
      en: ["Drops over a former sea cliff.", "Especially spectacular at sunset.", "The hidden Gljúfrabúi waterfall is nearby."]
    }
  },
  {
    id: "nature-reynisdrangar",
    type: "landmark",
    parent: "IS-002",
    coords: [-19.032, 63.402],
    name: { de: "Reynisfjara & Reynisdrangar", hu: "Reynisfjara és Reynisdrangar", ro: "Reynisfjara și Reynisdrangar", en: "Reynisfjara & Reynisdrangar" },
    description: {
      de: "Schwarzer Sandstrand und markante Basaltsäulen im Meer.",
      hu: "Fekete homokos tengerpart és különleges bazaltoszlopok a tengerben.",
      ro: "Plajă cu nisip negru și coloane de bazalt distinctive în mare.",
      en: "Black sand beach and striking basalt sea stacks."
    },
    facts: {
      de: ["Bekannt für die gefährlichen 'Sneaker Waves'.", "Basaltsäulen bilden die Höhle Hálsanefshellir.", "Drehort für 'Game of Thrones' (Eastwatch-by-the-Sea)."],
      hu: ["Híres a veszélyes hullámairól.", "A bazaltoszlopok alkotják a Hálsanefshellir barlangot.", "A 'Trónok harca' forgatási helyszíne."],
      ro: ["Cunoscută pentru valurile periculoase.", "Coloanele de bazalt formează peștera Hálsanefshellir.", "Loc de filmare pentru „Game of Thrones”."],
      en: ["Famous for dangerous 'sneaker waves'.", "Basalt columns form the Hálsanefshellir cave.", "Filming location for 'Game of Thrones'."]
    }
  },
  {
    id: "nature-landmannalaugar",
    type: "landmark",
    parent: "IS-002",
    coords: [-19.0608, 63.9908],
    name: { de: "Landmannalaugar", hu: "Landmannalaugar", ro: "Landmannalaugar", en: "Landmannalaugar" },
    description: {
      de: "Bunte Rhyolithberge und heiße Quellen im Hochland.",
      hu: "Színes riolit-hegyek és meleg források a felföldön.",
      ro: "Munți de riolit colorați și izvoare termale în zonele muntoase.",
      en: "Colorful rhyolite mountains and hot springs in the Highlands."
    },
    facts: {
      de: ["Startpunkt des berühmten Laugavegur-Wanderwegs.", "Die Berge leuchten in Farben wie Gelb, Rot und Grün.", "Nur im Sommer mit 4x4-Fahrzeugen erreichbar."],
      hu: ["A híres Laugavegur túraútvonal kezdőpontja.", "A hegyek sárga, vörös és zöld színekben pompáznak.", "Csak nyáron, 4x4-es járművel érhető el."],
      ro: ["Punctul de plecare al celebrului traseu Laugavegur.", "Munții strălucesc în culori precum galben, roșu și verde.", "Accesibil doar vara cu vehicule 4x4."],
      en: ["Starting point of the famous Laugavegur trail.", "The mountains glow in shades of yellow, red, and green.", "Only accessible in summer by 4x4 vehicles."]
    }
  },
  {
    id: "nature-dettifoss",
    type: "landmark",
    parent: "IS-009",
    coords: [-16.3846, 65.8147],
    name: { de: "Dettifoss", hu: "Dettifoss", ro: "Dettifoss", en: "Dettifoss" },
    description: {
      de: "Der leistungsstärkste Wasserfall Europas.",
      hu: "Európa legnagyobb vízhozamú vízesése.",
      ro: "Cea mai puternică cascadă din Europa.",
      en: "The most powerful waterfall in Europe."
    },
    facts: {
      de: ["Liegt im Jökulsárgljúfur-Canyon.", "Wurde in der Eröffnungsszene des Films 'Prometheus' gezeigt.", "Das Wasser stammt vom Vatnajökull-Gletscher."],
      hu: ["A Jökulsárgljúfur-szurdokban található.", "A 'Prometheus' című film nyitójelenetében is szerepelt.", "Vize a Vatnajökull-gleccserből származik."],
      ro: ["Situată în canionul Jökulsárgljúfur.", "A apărut în scena de deschidere a filmului „Prometheus”.", "Apa provine din ghețarul Vatnajökull."],
      en: ["Located in the Jökulsárgljúfur canyon.", "Featured in the opening scene of the movie 'Prometheus'.", "The water comes from the Vatnajökull glacier."]
    }
  },
  {
    id: "nature-myvatn",
    type: "landmark",
    parent: "IS-009",
    coords: [-16.9961, 65.6039],
    name: { de: "Mývatn", hu: "Mývatn", ro: "Mývatn", en: "Mývatn" },
    description: {
      de: "Ein flacher See im Norden, umgeben von vulkanischen Phänomenen.",
      hu: "Sekély tó északon, vulkáni jelenségekkel körülvéve.",
      ro: "Un lac puțin adânc în nord, înconjurat de fenomene vulcanice.",
      en: "A shallow lake in the north, surrounded by volcanic features."
    },
    facts: {
      de: ["Name bedeutet 'Mückensee'.", "Heimat vieler Entenarten.", "In der Nähe liegen die Dimmuborgir-Lavafelder."],
      hu: ["A neve 'szúnyog-tavat' jelent.", "Számos kacsafaj otthona.", "A közelben találhatók a Dimmuborgir lávamezők."],
      ro: ["Numele înseamnă „Lacul musculițelor”.", "Găzduiește multe specii de rațe.", "În apropiere se află câmpurile de lavă Dimmuborgir."],
      en: ["The name means 'Midge Lake'.", "Home to many species of ducks.", "The Dimmuborgir lava fields are nearby."]
    }
  },
  {
    id: "nature-snaefellsjokull",
    type: "landmark",
    parent: "IS-006",
    coords: [-23.7766, 64.8081],
    name: { de: "Snæfellsjökull", hu: "Snæfellsjökull", ro: "Snæfellsjökull", en: "Snæfellsjökull" },
    description: {
      de: "Ein vergletscherter Vulkan an der Spitze der Halbinsel Snæfellsnes.",
      hu: "Gleccserrel fedett vulkán a Snæfellsnes-félsziget csúcsán.",
      ro: "Un vulcan acoperit de ghețari în vârful peninsulei Snæfellsnes.",
      en: "A glacier-capped volcano at the tip of the Snæfellsnes Peninsula."
    },
    facts: {
      de: ["Eingang zum Mittelpunkt der Erde in Jules Vernes Roman.", "Gilt als einer der Kraftorte der Welt.", "Sichtbar von Reykjavík an klaren Tagen."],
      hu: ["A Föld középpontja felé vezető út kezdete Jules Verne regényében.", "A világ egyik energetikai központjának tartják.", "Tiszta napokon Reykjavíkból is látható."],
      ro: ["Intrarea către centrul Pământului în romanul lui Jules Verne.", "Considerat unul dintre locurile cu energie ale lumii.", "Vizibil din Reykjavík în zilele senine."],
      en: ["Entry point for the 'Journey to the Center of the Earth' in Jules Verne's novel.", "Considered one of the world's energy centers.", "Visible from Reykjavík on clear days."]
    }
  },
  {
    id: "nature-kirkjufell",
    type: "landmark",
    parent: "IS-006",
    coords: [-23.3113, 64.9417],
    name: { de: "Kirkjufell", hu: "Kirkjufell", ro: "Kirkjufell", en: "Kirkjufell" },
    description: {
      de: "Ein markanter Berg, der oft als der meistfotografierte Berg Islands bezeichnet wird.",
      hu: "Jellegzetes hegy, amelyet gyakran Izland legtöbet fényképezett hegyének neveznek.",
      ro: "Un munte distinctiv, adesea numit cel mai fotografiat munte din Islanda.",
      en: "A distinctively shaped mountain, often called the most photographed mountain in Iceland."
    },
    facts: {
      de: ["Name bedeutet 'Kirchberg'.", "Bekannt als 'Arrowhead Mountain' in Game of Thrones.", "Liegt bei der Stadt Grundarfjörður."],
      hu: ["A neve 'templomhegyet' jelent.", "A 'Trónok harcában' 'nyílhegy-hegyként' ismert.", "Grundarfjörður városa mellett található."],
      ro: ["Numele înseamnă „Muntele Bisericii”.", "Cunoscut sub numele de „Muntele Vârf de Săgeată” în Game of Thrones.", "Situat lângă orașul Grundarfjörður."],
      en: ["The name means 'Church Mountain'.", "Known as the 'Arrowhead Mountain' in Game of Thrones.", "Located near the town of Grundarfjörður."]
    }
  },
  {
    id: "nature-godafoss",
    type: "landmark",
    parent: "IS-009",
    coords: [-17.5502, 65.6828],
    name: { de: "Goðafoss", hu: "Goðafoss", ro: "Goðafoss", en: "Goðafoss" },
    description: {
      de: "Der 'Wasserfall der Götter', einer der spektakulärsten Wasserfälle Islands.",
      hu: "Az 'istenek vízesése', Izland egyik leglátványosabb vízesése.",
      ro: "„Cascada Zeilor”, una dintre cele mai spectaculoase cascade din Islanda.",
      en: "The 'Waterfall of the Gods', one of Iceland's most spectacular waterfalls."
    },
    facts: {
      de: ["Name stammt von der Entsorgung heidnischer Götterstatuen nach der Christianisierung.", "Hufeisenförmig.", "Liegt im Norden an der Ringstraße."],
      hu: ["A neve a pogány istenek szobrainak a kereszténység felvétele utáni bedobásából ered.", "Patkó alakú.", "Északon, a gyűrűs út mentén található."],
      ro: ["Numele provine de la aruncarea statuilor zeilor păgâni după creștinare.", "Are formă de potcoavă.", "Situată în nord, pe drumul principal."],
      en: ["Name comes from the disposal of pagan idols after Christianization.", "Horshoe-shaped.", "Located in the north along the Ring Road."]
    }
  },
  {
    id: "nature-askja",
    type: "landmark",
    parent: "IS-009",
    coords: [-16.75, 65.0333],
    name: { de: "Askja-Vulkan", hu: "Askja-vulkán", ro: "Vulcanul Askja", en: "Askja Volcano" },
    description: {
      de: "Eine riesige Caldera im zentralen Hochland mit einem tiefen See.",
      hu: "Hatalmas kaldera a központi felföldön, mély tóval.",
      ro: "O calderă uriașă în zonele muntoase centrale, cu un lac adânc.",
      en: "A massive caldera in the central Highlands with a deep lake."
    },
    facts: {
      de: ["Beherbergt den Kratersee Víti, in dem man baden kann.", "Wurde für das Mondtraining der Apollo-Astronauten genutzt.", "Sehr abgelegen."],
      hu: ["Itt található a Víti-krátertó, amelyben fürödni is lehet.", "Az Apollo-program űrhajósai itt gyakorolták a holdra szállást.", "Nagyon távoli, elszigetelt hely."],
      ro: ["Găzduiește lacul de crater Víti, unde se poate înota.", "Folosit pentru antrenamentul pe Lună al astronauților Apollo.", "Foarte izolat."],
      en: ["Home to the Víti crater lake, where you can swim.", "Used for lunar training by Apollo astronauts.", "Very remote location."]
    }
  },
  {
    id: "nature-husavik",
    type: "landmark",
    parent: "IS-009",
    coords: [-17.3383, 66.0449],
    name: { de: "Húsavík", hu: "Húsavík", ro: "Húsavík", en: "Húsavík" },
    description: {
      de: "Die 'Walbeobachtungshauptstadt Europas' im Norden Islands.",
      hu: "Európa 'bálnaleső fővárosa' Izland északi részén.",
      ro: "„Capitala europeană a observării balenelor” în nordul Islandei.",
      en: "The 'Whale Watching Capital of Europe' in northern Iceland."
    },
    facts: {
      de: ["Bekannt durch den Film 'Eurovision Song Contest'.", "Hat ein ausgezeichnetes Walmuseum.", "Einer der ältesten Siedlungsplätze Islands."],
      hu: ["Az 'Eurovíziós Dalfesztivál' című film tette világhírűvé.", "Kiváló bálnamúzeuma van.", "Izland egyik legrégebbi települése."],
      ro: ["Cunoscut prin filmul „Eurovision Song Contest”.", "Are un muzeu al balenelor excelent.", "Unul dintre cele mai vechi locuri de așezare din Islanda."],
      en: ["Gained fame from the movie 'Eurovision Song Contest'.", "Has an excellent Whale Museum.", "One of the oldest settlement sites in Iceland."]
    }
  },
  {
    id: "nature-dyrholaey",
    type: "landmark",
    parent: "IS-002",
    coords: [-19.1272, 63.3995],
    name: { de: "Dyrhólaey", hu: "Dyrhólaey", ro: "Dyrhólaey", en: "Dyrhólaey" },
    description: {
      de: "Eine markante Landzunge mit einem riesigen natürlichen Felsentor.",
      hu: "Jellegzetes félsziget egy hatalmas, természetes sziklakapuval.",
      ro: "Un promontoriu distinctiv cu o arcadă de piatră naturală uriașă.",
      en: "A striking promontory featuring a massive natural stone arch."
    },
    facts: {
      de: ["Name bedeutet 'Türhügelfelsen'.", "Ein wichtiger Brutplatz für Papageitaucher.", "Bietet weite Ausblicke auf schwarze Sandstrände."],
      hu: ["A neve 'ajtó-domb-sziklát' jelent.", "A lunda madarak fontos fészkelőhelye.", "Pazar kilátást nyújt a fekete homokos partokra."],
      ro: ["Numele înseamnă „insula cu gaura în ușă”.", "Un loc important de cuibărit pentru pufini.", "Oferă vederi largi asupra plajelor cu nisip negru."],
      en: ["The name means 'door-hill-island'.", "A major nesting site for puffins.", "Offers panoramic views over black sand beaches."]
    }
  },
  {
    id: "nature-hverir",
    type: "landmark",
    parent: "IS-009",
    coords: [-16.8089, 65.6415],
    name: { de: "Hverir", hu: "Hverir", ro: "Hverir", en: "Hverir" },
    description: {
      de: "Ein geothermisches Gebiet mit blubbernden Schlammtöpfen und zischenden Fumarolen.",
      hu: "Geotermikus terület bugyogó iszapmedencékkel és sziszegő fumarolákkal.",
      ro: "O zonă geotermală cu bazine de noroi bolborosind și fumarole șuierătoare.",
      en: "A geothermal area with bubbling mud pools and hissing fumaroles."
    },
    facts: {
      de: ["Die Landschaft wirkt wie vom Mars.", "Es riecht stark nach Schwefel (faulen Eiern).", "Keine Vegetation wegen der extremen Hitze und Säure."],
      hu: ["A táj olyan, mintha a Marson járnánk.", "Erős kénszaga van (záptojás szag).", "A hőség és a savasság miatt nincs növényzet."],
      ro: ["Peisajul pare de pe Marte.", "Miroase puternic a sulf (ouă clocite).", "Fără vegetație din cauza căldurii și acidității extreme."],
      en: ["The landscape looks like another planet.", "Smells strongly of sulfur (rotten eggs).", "No vegetation due to extreme heat and acidity."]
    }
  },
  {
    id: "nature-latrabjarg",
    type: "landmark",
    parent: "IS-007",
    coords: [-24.53, 65.5],
    name: { de: "Látrabjarg", hu: "Látrabjarg", ro: "Látrabjarg", en: "Látrabjarg" },
    description: {
      de: "Die westlichste Klippe Europas und eine der größten Vogelklippen der Welt.",
      hu: "Európa legnyugatibb sziklafala, a világ egyik legnagyobb madárfészkelő helye.",
      ro: "Cea mai vestică faleză a Europei și una dintre cele mai mari stânci de păsări din lume.",
      en: "The westernmost point of Europe and one of the world's largest bird cliffs."
    },
    facts: {
      de: ["Heimat von Millionen von Vögeln, darunter Papageitaucher.", "14 Kilometer lang und bis zu 441 Meter hoch.", "Sicherster Ort, um Papageitaucher aus nächster Nähe zu sehen."],
      hu: ["Madarak millióinak otthona, köztük a lundáké is.", "14 kilométer hosszú és akár 441 méter magas.", "A legbiztonságosabb hely a lundák közelről való megfigyelésére."],
      ro: ["Găzduiește milioane de păsări, inclusiv pufini.", "Are 14 kilometri lungime și până la 441 de metri înălțime.", "Cel mai sigur loc pentru a vedea pufini de aproape."],
      en: ["Home to millions of birds, including puffins.", "14 km long and up to 441 meters high.", "Best place to see puffins at close range."]
    }
  },
  {
    id: "nature-fjaðrárgljúfur",
    type: "landmark",
    parent: "IS-002",
    coords: [-18.1717, 63.7712],
    name: { de: "Fjaðrárgljúfur", hu: "Fjaðrárgljúfur", ro: "Fjaðrárgljúfur", en: "Fjaðrárgljúfur" },
    description: {
      de: "Ein gewundener und tiefer Canyon im Südosten Islands.",
      hu: "Kanyargós és mély szurdok Izland délkeleti részén.",
      ro: "Un canion șerpuitor și adânc în sud-estul Islandei.",
      en: "A winding and deep canyon in Southeast Iceland."
    },
    facts: {
      de: ["Etwa 100 Meter tief und 2 Kilometer lang.", "Wurde durch die Erosion von Schmelzwasser nach der Eiszeit geformt.", "Wurde durch ein Justin-Bieber-Musikvideo berühmt."],
      hu: ["Körülbelül 100 méter mély és 2 kilométer hosszú.", "A jégkorszak utáni olvadékvíz eróziója alakította ki.", "Justin Bieber egyik videóklipje tette híressé."],
      ro: ["Aproximativ 100 de metri adâncime și 2 kilometri lungime.", "Format prin eroziunea apei rezultate din topirea ghețarilor după epoca de gheață.", "A devenit celebru datorită unui videoclip al lui Justin Bieber."],
      en: ["About 100 meters deep and 2 km long.", "Formed by erosion from glacial meltwater after the last Ice Age.", "Became world-famous after a Justin Bieber music video."]
    }
  },
  {
    id: "nature-viti",
    type: "landmark",
    parent: "IS-009",
    coords: [-16.757, 65.047],
    name: { de: "Víti-Krater", hu: "Víti-kráter", ro: "Craterul Víti", en: "Víti Crater" },
    description: {
      de: "Ein kleinerer Explosionskrater in der Askja-Caldera mit milchig-blauem, warmem Wasser.",
      hu: "Kisebb robbanásos kráter az Askja-kalderában, tejszerű kék, meleg vízzel.",
      ro: "Un crater de explozie mai mic în caldera Askja, cu apă caldă albastru-lăptoasă.",
      en: "A smaller explosion crater in the Askja caldera with milky-blue warm water."
    },
    facts: {
      de: ["Name bedeutet 'Hölle'.", "Die Wassertemperatur liegt oft bei angenehmen 25°C.", "Entstand bei einem gewaltigen Ausbruch im Jahr 1875."],
      hu: ["A neve 'poklot' jelent.", "A víz hőmérséklete gyakran kellemes 25°C körüli.", "Egy 1875-ös hatalmas kitörés során keletkezett."],
      ro: ["Numele înseamnă „Iad”.", "Temperatura apei este adesea în jur de 25°C.", "Format în timpul unei erupții masive în 1875."],
      en: ["The name means 'Hell'.", "The water temperature is often around 25°C.", "Formed during a massive eruption in 1875."]
    }
  },
  {
    id: "nature-hvitserkur",
    type: "landmark",
    parent: "IS-008",
    coords: [-20.6352, 65.6063],
    name: { de: "Hvítserkur", hu: "Hvítserkur", ro: "Hvítserkur", en: "Hvítserkur" },
    description: {
      de: "Ein 15 Meter hoher Basaltfelsen vor der Küste, der wie ein Drache oder ein Elefant aussieht.",
      hu: "15 méter magas bazaltszikla a part közelében, amely sárkányra vagy elefántra emlékeztet.",
      ro: "O stâncă de bazalt înaltă de 15 metri în largul coastei, care arată ca un dragon sau un elefant.",
      en: "A 15-meter high basalt rock offshore that resembles a dragon or an elephant."
    },
    facts: {
      de: ["Legende besagt, es sei ein versteinerter Troll.", "Wurde mit Beton verstärkt, um der Erosion zu trotzen.", "Ein Paradies für Fotografen."],
      hu: ["A legenda szerint egy megkövesedett troll.", "Betonnal erősítették meg az alapját az erózió ellen.", "A fotósok paradicsoma."],
      ro: ["Legenda spune că este un trol pietrificat.", "A fost întărită cu beton pentru a rezista eroziunii.", "Un paradis pentru fotografi."],
      en: ["Legend says it's a petrified troll.", "Its base was reinforced with concrete to prevent erosion.", "A photographer's paradise."]
    }
  },
  {
    id: "nature-perlan",
    type: "landmark",
    parent: "IS-005",
    coords: [-21.9189, 64.1294],
    name: { de: "Perlan", hu: "Perlan", ro: "Perlan", en: "Perlan" },
    description: {
      de: "Ein markantes Gebäude in Reykjavík mit einer Glaskuppel, das auf Warmwasserspeichern errichtet wurde.",
      hu: "Jellegzetes üvegkupolás épület Reykjavíkban, amely melegvíz-tározókra épült.",
      ro: "O clădire distinctivă din Reykjavík cu o cupolă de sticlă, construită pe rezervoare de apă caldă.",
      en: "A landmark building in Reykjavík with a glass dome, built on top of hot water storage tanks."
    },
    facts: {
      de: ["Beherbergt ein Naturkundemuseum und ein Planetarium.", "Bietet eine 360-Grad-Aussichtsplattform.", "Die Kuppel besteht aus über 1.000 Glasplatten."],
      hu: ["Természettudományi múzeumnak és planetáriumnak ad otthont.", "360 fokos kilátóterasszal rendelkezik.", "A kupola több mint 1000 üveglapból áll."],
      ro: ["Găzduiește un muzeu de istorie naturală și un planetariu.", "Oferă o platformă de observare la 360 de grade.", "Cupola este formată din peste 1.000 de panouri de sticlă."],
      en: ["Houses a natural history museum and a planetarium.", "Features a 360-degree observation deck.", "The dome consists of over 1,000 glass panes."]
    }
  }
];

export const icelandHistorical: POI[] = [
  {
    id: "hist-althingi",
    type: "historical",
    parent: "IS-002",
    coords: [-21.129, 64.256],
    name: { de: "Lögberg (Gesetzesberg)", hu: "Lögberg (Törvényszikla)", ro: "Lögberg", en: "Lögberg (Law Rock)" },
    description: {
      de: "Der historische Ort in Þingvellir, an dem das isländische Parlament (Althingi) zusammenkam.",
      hu: "A Þingvellirben található történelmi helyszín, ahol az izlandi parlament (Althingi) ülésezett.",
      ro: "Locul istoric din Þingvellir unde se aduna parlamentul islandez (Althingi).",
      en: "The historic site in Þingvellir where the Icelandic parliament (Althingi) met."
    },
    facts: {
      de: ["Gegründet im Jahr 930.", "Hier wurden Gesetze verkündet und Streitigkeiten geschlichtet.", "Ein Symbol für die frühe Demokratie."],
      hu: ["930-ban alapították.", "Itt hirdették ki a törvényeket és rendezték a vitákat.", "A korai demokrácia szimbóluma."],
      ro: ["Fondat în 930.", "Aici se proclamau legile și se rezolvau disputele.", "Un simbol al democrației timpurii."],
      en: ["Established in 930 AD.", "Laws were recited and disputes settled here.", "A symbol of early democracy."]
    }
  },
  {
    id: "hist-skalholt",
    type: "historical",
    parent: "IS-002",
    coords: [-20.5255, 64.1259],
    name: { de: "Skálholt", hu: "Skálholt", ro: "Skálholt", en: "Skálholt" },
    description: {
      de: "Über Jahrhunderte einer der wichtigsten geistigen und kulturellen Orte Islands.",
      hu: "Évszázadokon át Izland egyik legfontosabb szellemi és kulturális központja.",
      ro: "Unul dintre cele mai importante locuri spirituale și culturale din Islanda timp de secole.",
      en: "One of the most significant spiritual and cultural sites in Iceland for centuries."
    },
    facts: {
      de: ["Sitz des ersten Bischofs von Island.", "Ort der ersten Schule des Landes.", "Heute steht dort eine moderne Kathedrale."],
      hu: ["Izland első püspöki székhelye.", "Itt volt az ország első iskolája.", "Ma egy modern katedrális áll a helyén."],
      ro: ["Sediul primului episcop al Islandei.", "Locul primei școli din țară.", "Astăzi acolo se află o catedrală modernă."],
      en: ["Seat of the first bishop in Iceland.", "Site of the country's first school.", "Now features a modern cathedral."]
    }
  },
  {
    id: "hist-hofsstadir",
    type: "historical",
    parent: "IS-009",
    coords: [-17.15, 65.6],
    name: { de: "Hofstaðir", hu: "Hofstaðir", ro: "Hofstaðir", en: "Hofstaðir" },
    description: {
      de: "Bedeutende archäologische Ausgrabungsstätte eines Wikinger-Langhauses.",
      hu: "Fontos régészeti lelőhely egy viking hosszúház maradványaival.",
      ro: "Situl arheologic important al unei case lungi vikinge.",
      en: "A significant archaeological site of a Viking Age longhouse."
    },
    facts: {
      de: ["Eines der größten Langhäuser, die in Island gefunden wurden.", "Diente wahrscheinlich auch als religiöser Versammlungsort.", "In der Nähe des Mývatn-Sees gelegen."],
      hu: ["Az egyik legnagyobb Izlandon talált hosszúház.", "Valószínűleg vallási gyülekezőhelyként is szolgált.", "A Mývatn-tó közelében található."],
      ro: ["Una dintre cele mai mari case lungi găsite în Islanda.", "Probabil a servit și ca loc de adunare religioasă.", "Situat lângă lacul Mývatn."],
      en: ["One of the largest longhouses found in Iceland.", "Likely served as a religious meeting place.", "Located near Lake Mývatn."]
    }
  },
  {
    id: "hist-glaumbaer",
    type: "historical",
    parent: "IS-008",
    coords: [-19.505, 65.61],
    name: { de: "Glaumbær", hu: "Glaumbær", ro: "Glaumbær", en: "Glaumbær" },
    description: {
      de: "Ein gut erhaltenes Ensemble aus traditionellen isländischen Torfhäusern.",
      hu: "Jól megőrzött hagyományos izlandi tőzegmohás házak együttese.",
      ro: "Un ansamblu bine conservat de case tradiționale islandeze din turbă.",
      en: "A well-preserved ensemble of traditional Icelandic turf houses."
    },
    facts: {
      de: ["Zeigt das bäuerliche Leben im 18. und 19. Jahrhundert.", "Die Wände bestehen aus geschichteten Torfstücken.", "Gehört zum Isländischen Nationalmuseum."],
      hu: ["A 18. és 19. századi paraszti életet mutatja be.", "A falak rétegezett tőzegtéglákból állnak.", "Az Izlandi Nemzeti Múzeum része."],
      ro: ["Prezintă viața rurală din secolele al XVIII-lea și al XIX-lea.", "Pereții sunt făcuți din straturi de turbă.", "Aparține Muzeului Național al Islandei."],
      en: ["Showcases rural life in the 18th and 19th centuries.", "Walls are made of layered turf blocks.", "Part of the National Museum of Iceland."]
    }
  },
  {
    id: "hist-videy",
    type: "historical",
    parent: "IS-005",
    coords: [-21.85, 64.16],
    name: { de: "Insel Viðey", hu: "Viðey-sziget", ro: "Insula Viðey", en: "Viðey Island" },
    description: {
      de: "Eine historische Insel vor der Küste von Reykjavík, bekannt für Kunst und Geschichte.",
      hu: "Történelmi sziget Reykjavík partjainál, művészetéről és történelméről ismert.",
      ro: "O insulă istorică în largul coastei Reykjavík, cunoscută pentru artă și istorie.",
      en: "A historic island off the coast of Reykjavík, known for its art and history."
    },
    facts: {
      de: ["Standort des Imagine Peace Tower von Yoko Ono.", "Beherbergt eines der ältesten Steinhäuser Islands.", "Wichtiger Brutplatz für Vögel."],
      hu: ["Itt található Yoko Ono 'Imagine Peace' tornya.", "Itt áll Izland egyik legrégebbi kőháza.", "Fontos madárfészkelő hely."],
      ro: ["Locul turnului „Imagine Peace” al lui Yoko Ono.", "Găzduiește una dintre cele mai vechi case de piatră din Islanda.", "Loc important de cuibărit pentru păsări."],
      en: ["Site of Yoko Ono's Imagine Peace Tower.", "Home to one of the oldest stone houses in Iceland.", "Important nesting site for birds."]
    }
  }
];

export const icelandCulture: POI[] = [
  {
    id: "cult-hallgrimskirkja",
    type: "landmark",
    parent: "IS-004",
    coords: [-21.9266, 64.1417],
    name: { de: "Hallgrímskirkja", hu: "Hallgrímskirkja", ro: "Hallgrímskirkja", en: "Hallgrímskirkja" },
    description: {
      de: "Die markante Kirche in Reykjavík, deren Design an Basaltsäulen erinnert.",
      hu: "Reykjavík jellegzetes temploma, amelynek kialakítása bazaltoszlopokra emlékeztet.",
      ro: "Biserica distinctivă din Reykjavík, al cărei design amintește de coloanele de bazalt.",
      en: "Reykjavík's landmark church, designed to resemble basalt lava columns."
    },
    facts: {
      de: ["Größte Kirche Islands.", "74,5 Meter hoch.", "Benannt nach dem Dichter Hallgrímur Pétursson."],
      hu: ["Izland legnagyobb temploma.", "74,5 méter magas.", "Hallgrímur Pétursson költőről nevezték el."],
      ro: ["Cea mai mare biserică din Islanda.", "74,5 metri înălțime.", "Numită după poetul Hallgrímur Pétursson."],
      en: ["Largest church in Iceland.", "74.5 meters tall.", "Named after the poet Hallgrímur Pétursson."]
    }
  },
  {
    id: "cult-harpa",
    type: "landmark",
    parent: "IS-004",
    coords: [-21.9325, 64.1504],
    name: { de: "Harpa Konzerthaus", hu: "Harpa Koncertterem", ro: "Harpa", en: "Harpa Concert Hall" },
    description: {
      de: "Ein modernes Konzerthaus und Konferenzzentrum am Hafen von Reykjavík.",
      hu: "Modern koncertterem és konferenciaközpont Reykjavík kikötőjében.",
      ro: "O sală de concerte modernă și un centru de conferințe în portul Reykjavík.",
      en: "A modern concert hall and conference center at Reykjavík's old harbor."
    },
    facts: {
      de: ["Bekannt für seine Glasfassade, die an die isländische Landschaft erinnert.", "Heimat des Isländischen Sinfonieorchesters.", "Eröffnet im Jahr 2011."],
      hu: ["Az izlandi tájat idéző üveg homlokzatáról ismert.", "Az Izlandi Szimfonikus Zenekar otthona.", "2011-ben nyílt meg."],
      ro: ["Cunoscută pentru fațada sa de sticlă inspirată de peisajul islandez.", "Găzduiește Orchestra Simfonică a Islandei.", "Deschisă în 2011."],
      en: ["Known for its geometric glass facade inspired by basalt landscapes.", "Home to the Iceland Symphony Orchestra.", "Opened in 2011."]
    }
  },
  {
    id: "cult-blue-lagoon",
    type: "landmark",
    parent: "IS-003",
    coords: [-22.4497, 63.8804],
    name: { de: "Blaue Lagune", hu: "Kék Lagúna", ro: "Laguna Albastră", en: "Blue Lagoon" },
    description: {
      de: "Ein Geothermalbad auf der Halbinsel Reykjanes, bekannt für sein milchig-blaues Wasser.",
      hu: "Geotermikus gyógyfürdő a Reykjanes-félszigeten, tejszerű kék vizéről ismert.",
      ro: "Un spa geotermal pe peninsula Reykjanes, cunoscut pentru apa sa albastru-lăptos.",
      en: "A geothermal spa on the Reykjanes Peninsula, famous for its milky-blue water."
    },
    facts: {
      de: ["Das Wasser ist reich an Kieselsäure und Schwefel.", "Entsteht durch das Abwasser des nahegelegenen Kraftwerks Svartsengi.", "Eine der meistbesuchten Attraktionen Islands."],
      hu: ["A víz kovában és kénben gazdag.", "A közeli Svartsengi erőmű vizéből alakult ki.", "Izland egyik leglátogatottabb látványossága."],
      ro: ["Apa este bogată în silice și sulf.", "Formată din apa reziduală de la centrala Svartsengi.", "Una dintre cele mai vizitate atracții din Islanda."],
      en: ["The water is rich in silica and sulfur.", "Formed by runoff from the nearby Svartsengi power plant.", "One of the most visited attractions in Iceland."]
    }
  }
];

export const icelandPois: POI[] = [
  icelandCountry,
  ...icelandRegions,
  ...icelandCities,
  ...icelandNature,
  ...icelandHistorical,
  ...icelandCulture
];
