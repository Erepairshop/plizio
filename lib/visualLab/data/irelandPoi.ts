import type { POI } from "./poi";

export const irelandCountry: POI = {
  id: "ireland",
  type: "country",
  parent: "EU",
  coords: [-7.5023, 53.4129],
  name: { de: "Irland", hu: "Írország", ro: "Irlanda", en: "Ireland" },
  description: {
    en: "Ireland, also known as the Emerald Isle, is an island in the North Atlantic known for its lush green landscapes, rich folklore, and friendly people. It has a long and complex history, from ancient Celtic roots to its modern status as a vibrant European nation. The country is famous for its stunning coastal scenery, historic castles, and vibrant cultural traditions, including music, dance, and literature. Ireland's capital, Dublin, is a bustling city with a rich literary heritage and a lively social scene.",
    de: "Irland, auch bekannt als die Grüne Insel, ist eine Insel im Nordatlantik, die für ihre üppigen grünen Landschaften, ihre reiche Folklore und ihre freundlichen Menschen bekannt ist. Es hat eine lange und komplexe Geschichte, von den antiken keltischen Wurzeln bis zu seinem heutigen Status als pulsierende europäische Nation. Das Land ist berühmt für seine atemberaubende Küstenlandschaft, seine historischen Schlösser und seine lebendigen kulturellen Traditionen, einschließlich Musik, Tanz und Literatur. Irlands Hauptstadt Dublin ist eine geschäftige Stadt mit einem reichen literarischen Erbe und einer lebendigen sozialen Szene.",
    hu: "Írország, más néven a Smaragd-sziget, egy sziget az Atlanti-óceán északi részén, amely buja zöld tájairól, gazdag folklórjáról és barátságos embereiről ismert. Hosszú és összetett történelemmel rendelkezik, az ősi kelta gyökerektől a modern, vibráló európai nemzetig. Az ország híres lenyűgöző tengerparti tájairól, történelmi kastélyairól és élénk kulturális hagyományairól, beleértve a zenét, a táncot és az irodalmat. Írország fővárosa, Dublin, egy nyüzsgő város gazdag irodalmi örökséggel és élénk társasági élettel.",
    ro: "Irlanda, cunoscută și sub numele de Insula de Smarald, este o insulă din Atlanticul de Nord, cunoscută pentru peisajele sale verzi luxuriante, folclorul bogat și oamenii prietenoși. Are o istorie lungă și complexă, de la rădăcinile celtice antice până la statutul său modern de națiune europeană vibrantă. Țara este faimoasă pentru peisajele sale de coastă uimitoare, castelele istorice și tradițiile culturale vibrante, inclusiv muzica, dansul și literatura. Capitala Irlandei, Dublin, este un oraș plin de viață, cu o bogată moștenire literară și o scenă socială vibrantă."
  },
  facts: {
    en: [
      "Ireland is known as the 'Emerald Isle' because of its lush green landscape.",
      "St. Patrick is the patron saint of Ireland, celebrated annually on March 17th.",
      "The harp is the national symbol of Ireland.",
      "Ireland has won the Eurovision Song Contest a record seven times.",
      "Halloween has its origins in the ancient Celtic festival of Samhain celebrated in Ireland.",
      "The longest place name in Ireland is Muckanaghederdauhaulia."
    ],
    de: [
      "Irland ist wegen seiner üppigen grünen Landschaft als 'Grüne Insel' bekannt.",
      "St. Patrick ist der Schutzpatron Irlands und wird jährlich am 17. März gefeiert.",
      "Die Harfe ist das Nationalsymbol Irlands.",
      "Irland hat den Eurovision Song Contest rekordverdächtige sieben Mal gewonnen.",
      "Halloween hat seinen Ursprung im antiken keltischen Samhain-Fest, das in Irland gefeiert wurde.",
      "Der längste Ortsname in Irland ist Muckanaghederdauhaulia."
    ],
    hu: [
      "Írországot buja zöld tájai miatt 'Smaragd-szigetnek' is nevezik.",
      "Szent Patrik Írország védőszentje, akit minden évben március 17-én ünnepelnek.",
      "A hárfa Írország nemzeti jelképe.",
      "Írország rekordnak számító hét alkalommal nyerte meg az Eurovíziós Dalfesztivált.",
      "A Halloween az ősi kelta Samhain fesztiválból ered, amelyet Írországban ünnepeltek.",
      "Írország leghosszabb helyneve Muckanaghederdauhaulia."
    ],
    ro: [
      "Irlanda este cunoscută sub numele de 'Insula de Smarald' datorită peisajului său verde luxuriant.",
      "Sfântul Patrick este patronul Irlandei, sărbătorit anual pe 17 martie.",
      "Harpa este simbolul național al Irlandei.",
      "Irlanda a câștigat Eurovision Song Contest de șapte ori, un record.",
      "Halloween-ul își are originile în vechiul festival celtic Samhain, sărbătorit în Irlanda.",
      "Cel mai lung nume de loc din Irlanda este Muckanaghederdauhaulia."
    ]
  },
  image: "/geo-images/ireland/ireland-main.webp",
};

export const irelandRegions: POI[] = [
  {
    id: "city-dublin",
    type: "city",
    parent: "ireland",
    coords: [-6.2603, 53.3498],
    name: { de: "Dublin", hu: "Dublin", ro: "Dublin", en: "Dublin" },
    description: {
      en: "Dublin is the capital and largest city of Ireland, situated at the mouth of the River Liffey. It is a city steeped in history, from its Viking origins to its Georgian architecture. Dublin is world-renowned for its literary heritage, being the home of famous writers like James Joyce and Oscar Wilde. The city offers a mix of historic landmarks, vibrant pubs, and beautiful parks like St. Stephen's Green.",
      de: "Dublin ist die Hauptstadt und größte Stadt Irlands und liegt an der Mündung des Flusses Liffey. Es ist eine geschichtsträchtige Stadt, von ihren Wikinger-Ursprüngen bis zu ihrer georgianischen Architektur. Dublin ist weltberühmt für sein literarisches Erbe und die Heimat berühmter Schriftsteller wie James Joyce und Oscar Wilde. Die Stadt bietet eine Mischung aus historischen Wahrzeichen, lebhaften Pubs und wunderschönen Parks wie St. Stephen's Green.",
      hu: "Dublin Írország fővárosa és legnagyobb városa, a Liffey-folyó torkolatánál fekszik. Történelemben gazdag város, a viking eredettől a georgiánus építészetig. Dublin világhírű irodalmi örökségéről, olyan híres írók otthona, mint James Joyce és Oscar Wilde. A város történelmi nevezetességek, vibráló pubok és gyönyörű parkok, például a St. Stephen's Green keverékét kínálja.",
      ro: "Dublin este capitala și cel mai mare oraș al Irlandei, situat la gura de vărsare a râului Liffey. Este un oraș plin de istorie, de la originile sale vikinge până la arhitectura sa georgiană. Dublin este renumit în întreaga lume pentru moștenirea sa literară, fiind casa unor scriitori celebri precum James Joyce și Oscar Wilde. Orașul oferă un amestec de monumente istorice, pub-uri vibrante și parcuri frumoase, cum ar fi St. Stephen's Green."
    },
    facts: {
      en: ["Dublin was founded by Vikings in the 9th century.","Trinity College Dublin is home to the famous Book of Kells.","The city has more than 600 pubs.","Dublin is a UNESCO City of Literature."],
      de: ["Dublin wurde im 9. Jahrhundert von Wikingern gegründet.","Das Trinity College Dublin beherbergt das berühmte Book of Kells.","Die Stadt hat mehr als 600 Pubs.","Dublin ist eine UNESCO-Literaturstadt."],
      hu: ["Dublint a vikingek alapították a 9. században.","A dublini Trinity College ad otthont a híres Book of Kells-nek.","A városban több mint 600 pub található.","Dublin az UNESCO irodalmi városa."],
      ro: ["Dublin a fost fondat de vikingi în secolul al IX-lea.","Trinity College Dublin găzduiește faimoasa Book of Kells.","Orașul are peste 600 de pub-uri.","Dublin este un oraș al literaturii UNESCO."]
    },
    image: "/geo-images/ireland/dublin.webp",
  },
  {
    id: "city-cork",
    type: "city",
    parent: "ireland",
    coords: [-8.4756, 51.8985],
    name: { de: "Cork", hu: "Cork", ro: "Cork", en: "Cork" },
    description: {
      en: "Cork is Ireland's second-largest city, located in the southwest of the country. Known for its maritime history and vibrant food scene, it is often called the 'real capital' by its residents. The city is built on islands in the River Lee and features charming streets, historic churches, and the famous English Market. Cork is a gateway to the beautiful scenery of West Cork and the Wild Atlantic Way.",
      de: "Cork ist Irlands zweitgrößte Stadt und liegt im Südwesten des Landes. Bekannt für seine maritime Geschichte und seine lebendige Food-Szene, wird es von seinen Bewohnern oft als 'wahre Hauptstadt' bezeichnet. Die Stadt ist auf Inseln im Fluss Lee erbaut und bietet charmante Straßen, historische Kirchen und den berühmten English Market. Cork ist ein Tor zur wunderschönen Landschaft von West Cork und dem Wild Atlantic Way.",
      hu: "Cork Írország második legnagyobb városa, az ország délnyugati részén található. Tengerészeti múltjáról és élénk gasztronómiájáról ismert, lakói gyakran az 'igazi fővárosnak' nevezik. A város a Lee-folyó szigeteire épült, bájos utcákkal, történelmi templomokkal és a híres English Markettel rendelkezik. Cork kapu Nyugat-Cork gyönyörű tájaihoz és a Wild Atlantic Way-hez.",
      ro: "Cork este al doilea oraș ca mărime din Irlanda, situat în sud-vestul țării. Cunoscut pentru istoria sa maritimă și scena culinară vibrantă, este adesea numit 'adevărata capitală' de către rezidenții săi. Orașul este construit pe insule în râul Lee și are străzi fermecătoare, biserici istorice și faimoasa English Market. Cork este o poartă către peisajele frumoase din West Cork și Wild Atlantic Way."
    },
    facts: {
      en: ["Cork Harbour is one of the largest natural harbours in the world.","The city is famous for the Shandon Bells.","Blarney Castle, home to the Blarney Stone, is located nearby.","Cork was a major port for Irish emigration to America."],
      de: ["Der Hafen von Cork ist einer der größten Naturhäfen der Welt.","Die Stadt ist berühmt für die Shandon Bells.","Blarney Castle mit dem Blarney Stone befindet sich in der Nähe.","Cork war ein wichtiger Hafen für die irische Auswanderung nach Amerika."],
      hu: ["Cork kikötője a világ egyik legnagyobb természetes kikötője.","A város híres a Shandon-harangokról.","A közelben található a Blarney-kastély, a Blarney-kő otthona.","Cork az Amerikába irányuló ír kivándorlás egyik fő kikötője volt."],
      ro: ["Portul Cork este unul dintre cele mai mari porturi naturale din lume.","Orașul este faimos pentru clopotele Shandon.","Castelul Blarney, unde se află Piatra Blarney, este situat în apropiere.","Cork a fost un port major pentru emigrarea irlandeză în America."]
    },
    image: "/geo-images/ireland/cork.webp",
  }
];

export const irelandCities: POI[] = [
  {
    id: "city-galway",
    type: "city",
    parent: "ireland",
    coords: [-9.0568, 53.2707],
    name: { de: "Galway", hu: "Galway", ro: "Galway", en: "Galway" },
    description: {
      en: "Galway is a western Irish city with a lively arts scene and a strong link to Gaelic culture.",
      de: "Galway ist eine westirische Stadt mit lebendiger Kunstszene und enger Verbindung zur gälischen Kultur.",
      hu: "Galway nyugat-írországi város, élénk művészeti élettel és erős gael kulturális kapcsolattal.",
      ro: "Galway este un oraș din vestul Irlandei, cu o scenă artistică vie și o legătură puternică cu cultura gaelică."
    },
    facts: {
      en: ["It is a gateway to Connemara.", "It has a strong festival culture.", "Irish language is highly visible here.", "The city sits on the Atlantic coast."],
      de: ["Es ist ein Tor nach Connemara.", "Es hat eine starke Festivalkultur.", "Die irische Sprache ist hier sehr präsent.", "Die Stadt liegt an der Atlantikküste."],
      hu: ["Connemara kapuja.", "Erős fesztiválkultúrája van.", "Az ír nyelv nagyon jelen van itt.", "A város az Atlanti-óceán partján fekszik."],
      ro: ["Este o poartă către Connemara.", "Are o cultură puternică a festivalurilor.", "Limba irlandeză este foarte vizibilă aici.", "Orașul se află pe coasta Atlanticului."]
    },
    image: "/geo-images/ireland/city-galway.webp",
  },
  {
    id: "city-limerick",
    type: "city",
    parent: "ireland",
    coords: [-8.6305, 52.6638],
    name: { de: "Limerick", hu: "Limerick", ro: "Limerick", en: "Limerick" },
    description: {
      en: "Limerick sits on the River Shannon and is known for King John's Castle and a strong sporting identity.",
      de: "Limerick liegt am Fluss Shannon und ist für King John's Castle und eine starke Sportkultur bekannt.",
      hu: "Limerick a Shannon folyó partján fekszik, és a King John's Castle-ről, valamint erős sportéletéről ismert.",
      ro: "Limerick se află pe râul Shannon și este cunoscut pentru King John's Castle și o identitate sportivă puternică."
    },
    facts: {
      en: ["King John's Castle is a major landmark.", "The River Shannon runs through the city.", "It has a strong rugby tradition.", "It is one of Ireland's oldest cities."],
      de: ["King John's Castle ist ein wichtiges Wahrzeichen.", "Der Fluss Shannon fließt durch die Stadt.", "Die Stadt hat eine starke Rugby-Tradition.", "Sie ist eine der ältesten Städte Irlands."],
      hu: ["A King John's Castle fontos nevezetesség.", "A Shannon folyó áthalad a városon.", "Erős rögbihagyományai vannak.", "Írország egyik legrégebbi városa."],
      ro: ["King John's Castle este un reper major.", "Râul Shannon trece prin oraș.", "Are o puternică tradiție în rugby.", "Este unul dintre cele mai vechi orașe din Irlanda."]
    },
    image: "/geo-images/ireland/city-limerick.webp",
  },
  {
    id: "city-belfast",
    type: "city",
    parent: "ireland",
    coords: [-5.9301, 54.5973],
    name: { de: "Belfast", hu: "Belfast", ro: "Belfast", en: "Belfast" },
    description: {
      en: "Belfast is the capital of Northern Ireland and is closely linked to shipbuilding and the Titanic Quarter.",
      de: "Belfast ist die Hauptstadt Nordirlands und eng mit dem Schiffbau sowie dem Titanic Quarter verbunden.",
      hu: "Belfast Észak-Írország fővárosa, és szorosan kötődik a hajóépítéshez és a Titanic Quarterhöz.",
      ro: "Belfast este capitala Irlandei de Nord și este strâns legat de construcțiile navale și Titanic Quarter."
    },
    facts: {
      en: ["It is the capital of Northern Ireland.", "The Titanic was built here.", "The Titanic Quarter is a major redevelopment area.", "It has a strong industrial heritage."],
      de: ["Es ist die Hauptstadt Nordirlands.", "Die Titanic wurde hier gebaut.", "Das Titanic Quarter ist ein großes Entwicklungsgebiet.", "Es hat ein starkes industrielles Erbe."],
      hu: ["Észak-Írország fővárosa.", "A Titanic itt épült.", "A Titanic Quarter jelentős fejlesztési terület.", "Erős ipari örökséggel rendelkezik."],
      ro: ["Este capitala Irlandei de Nord.", "Titanic a fost construit aici.", "Titanic Quarter este o zonă majoră de regenerare.", "Are o moștenire industrială puternică."]
    },
    image: "/geo-images/ireland/city-belfast.webp",
  }
  ,
  {
    id: "city-sligo",
    type: "city",
    parent: "ireland",
    coords: [-8.4706, 54.2697],
    name: { de: "Sligo", hu: "Sligo", ro: "Sligo", en: "Sligo" },
    description: {
      en: "Sligo is a lively northwest Irish town known for Yeats, surfing, and easy access to the Atlantic coast. It sits near the Garavogue River and works as a compact base for exploring Donegal Bay and Benbulben. The town blends literary tourism with a strong outdoor lifestyle and a visible food scene. Sligo is also a practical gateway for road trips across the Wild Atlantic Way.",
      de: "Sligo ist eine lebendige Stadt im Nordwesten Irlands, bekannt für Yeats, Surfen und die Nähe zur Atlantikküste. Sie liegt am Garavogue River und dient als kompakter Ausgangspunkt für Ausflüge zur Donegal Bay und zum Benbulben. Die Stadt verbindet Literaturtourismus mit einem aktiven Outdoor-Leben und einer sichtbaren Foodszene. Sligo ist zudem ein praktisches Tor für Roadtrips entlang des Wild Atlantic Way.",
      hu: "Sligo egy pezsgő északnyugat-írországi város, amely Yeatsről, a szörfözésről és az Atlanti-óceán közelségéről ismert. A Garavogue folyó mellett fekszik, és kényelmes bázist ad a Donegal-öböl vagy a Benbulben felfedezéséhez. A város az irodalmi turizmust aktív szabadtéri életmóddal és erős gasztronómiai kínálattal ötvözi. Sligo a Wild Atlantic Way útvonal egyik hasznos kapuja is.",
      ro: "Sligo este un oraș animat din nord-vestul Irlandei, cunoscut pentru Yeats, surf și accesul rapid la coasta Atlanticului. Se află lângă râul Garavogue și este o bază compactă pentru explorarea golfului Donegal și a muntelui Benbulben. Orașul combină turismul literar cu un stil de viață outdoor și o scenă culinară vizibilă. Sligo este și o poartă practică pentru drumurile de pe Wild Atlantic Way."
    },
    facts: {
      en: ["Sligo is associated with poet W. B. Yeats.", "The town lies near Benbulben, one of Ireland's best-known mountains.", "Its coastline is popular for surfing.", "The Garavogue River flows through the town.", "Sligo serves as a gateway to Donegal Bay."],
      de: ["Sligo ist eng mit dem Dichter W. B. Yeats verbunden.", "Die Stadt liegt in der Nähe des Benbulben, eines der bekanntesten Berge Irlands.", "Die Küste ist bei Surfern beliebt.", "Der Garavogue River fließt durch die Stadt.", "Sligo ist ein Tor zur Donegal Bay."],
      hu: ["Sligo szorosan kötődik W. B. Yeats költőhöz.", "A város a Benbulben közelében fekszik, Írország egyik legismertebb hegye mellett.", "Partjai népszerűek a szörfösök körében.", "A Garavogue folyó átszeli a várost.", "Sligo kapu a Donegal-öböl felé."],
      ro: ["Sligo este asociat cu poetul W. B. Yeats.", "Orașul se află lângă Benbulben, unul dintre cei mai cunoscuți munți ai Irlandei.", "Coasta este populară pentru surfing.", "Râul Garavogue traversează orașul.", "Sligo este o poartă către Donegal Bay."]
    },
    image: "/geo-images/ireland/city-sligo.webp",
  },
  {
    id: "city-waterford",
    type: "city",
    parent: "ireland",
    coords: [-7.1101, 52.2593],
    name: { de: "Waterford", hu: "Waterford", ro: "Waterford", en: "Waterford" },
    description: {
      en: "Waterford is Ireland's oldest city and a major south-east gateway with a strong maritime identity. Founded by the Vikings, it became an important port and commercial center on the River Suir. Today the city combines historic streets, crystal heritage, and a growing reputation for food and festivals. Waterford is a smart stop for visitors heading through the Waterford Greenway and Ireland's Ancient East.",
      de: "Waterford ist die älteste Stadt Irlands und ein wichtiger Zugangspunkt im Südosten mit starker maritimer Identität. Von den Wikingern gegründet, wurde sie zu einem bedeutenden Hafen und Handelszentrum am Fluss Suir. Heute verbindet die Stadt historische Straßen, Kristalltradition und einen wachsenden Ruf für Essen und Festivals. Waterford ist ein guter Zwischenstopp für Reisende auf dem Waterford Greenway und durch Irlands Ancient East.",
      hu: "Waterford Írország legrégebbi városa és a délkeleti régió fontos kapuja erős tengeri identitással. A vikingek alapították, később pedig a Suir folyó mentén jelentős kikötővé és kereskedelmi központtá vált. Ma a város a történelmi utcákat, az üvegkristály-hagyományt és az egyre erősebb gasztronómiai-fesztiválkínálatot egyesíti. Waterford ideális megálló a Waterford Greenway és az Ancient East útvonalán.",
      ro: "Waterford este cel mai vechi oraș al Irlandei și o poartă importantă în sud-est, cu o identitate maritimă puternică. Fondat de vikingi, a devenit un port și centru comercial major pe râul Suir. Astăzi, orașul combină străzile istorice, tradiția cristalului și o reputație tot mai bună pentru gastronomie și festivaluri. Waterford este o oprire bună pentru cei care parcurg Waterford Greenway și Ireland's Ancient East."
    },
    facts: {
      en: ["Waterford was founded by Vikings in 914.", "The city gave its name to Waterford Crystal.", "It stands on the River Suir.", "The Viking Triangle is a major heritage district.", "Waterford is a key city in Ireland's Ancient East."],
      de: ["Waterford wurde 914 von Wikingern gegründet.", "Die Stadt gab Waterford Crystal ihren Namen.", "Sie liegt am Fluss Suir.", "Das Viking Triangle ist ein wichtiges historisches Viertel.", "Waterford ist eine wichtige Stadt in Ireland's Ancient East."],
      hu: ["Waterfordot a vikingek alapították 914-ben.", "A város adta a nevét a Waterford Crystalnak.", "A Suir folyó partján fekszik.", "A Viking Triangle jelentős örökségi negyed.", "Waterford kulcsfontosságú város az Ireland's Ancient East útvonalon."],
      ro: ["Waterford a fost fondat de vikingi în anul 914.", "Orașul a dat numele brandului Waterford Crystal.", "Se află pe râul Suir.", "Viking Triangle este un cartier patrimonial important.", "Waterford este un oraș-cheie în Ireland's Ancient East."]
    },
    image: "/geo-images/ireland/city-waterford.webp",
  },
  {
    id: "city-kilkenny",
    type: "city",
    parent: "ireland",
    coords: [-7.2449, 52.6485],
    name: { de: "Kilkenny", hu: "Kilkenny", ro: "Kilkenny", en: "Kilkenny" },
    description: {
      en: "Kilkenny is a compact medieval city known for its castle, cathedral, and vibrant arts calendar. Its historic core makes it one of the most walkable destinations in Ireland. The city is strongly associated with craft, design, and traditional sporting culture. Kilkenny also works as a tourism base for exploring the south-east and the River Nore valley.",
      de: "Kilkenny ist eine kompakte mittelalterliche Stadt, bekannt für ihre Burg, Kathedrale und den lebendigen Kulturkalender. Ihr historischer Kern macht sie zu einem der am besten zu Fuß erkundbaren Ziele in Irland. Die Stadt ist stark mit Handwerk, Design und traditioneller Sportkultur verbunden. Kilkenny dient außerdem als Ausgangspunkt, um den Südosten und das Nore-Tal zu erkunden.",
      hu: "Kilkenny egy kompakt középkori város, amely kastélyáról, katedrálisáról és élénk művészeti programjairól ismert. Történelmi magja miatt Írország egyik legjobban gyalog bejárható úti célja. A város erősen kötődik a kézművességhez, a dizájnhoz és a hagyományos sportkultúrához. Kilkenny jó kiindulópont a délkeleti térség és a Nore-völgy felfedezéséhez.",
      ro: "Kilkenny este un oraș medieval compact, cunoscut pentru castel, catedrală și calendarul său artistic foarte activ. Nucleul său istoric îl face una dintre cele mai ușor de explorat pe jos destinații din Irlanda. Orașul este strâns asociat cu meșteșugurile, designul și cultura sportivă tradițională. Kilkenny este și o bază bună pentru a descoperi sud-estul și valea râului Nore."
    },
    facts: {
      en: ["Kilkenny Castle dominates the city center.", "The city is known for Irish design and craft.", "The River Nore runs through the area.", "It hosts a popular arts festival each year.", "Kilkenny is one of Ireland's best-preserved medieval towns."],
      de: ["Kilkenny Castle prägt das Stadtzentrum.", "Die Stadt ist für irisches Design und Handwerk bekannt.", "Der Fluss Nore fließt durch das Gebiet.", "Jedes Jahr findet dort ein beliebtes Kunstfestival statt.", "Kilkenny ist eine der am besten erhaltenen mittelalterlichen Städte Irlands."],
      hu: ["A Kilkenny Castle uralja a belvárost.", "A város ismert az ír dizájnról és kézművességről.", "A Nore folyó keresztülhalad a környéken.", "Évente népszerű művészeti fesztiválnak ad otthont.", "Kilkenny Írország egyik legjobb állapotban megmaradt középkori városa."],
      ro: ["Kilkenny Castle domină centrul orașului.", "Orașul este cunoscut pentru design și meșteșuguri irlandeze.", "Râul Nore trece prin zonă.", "Găzduiește anual un festival de artă popular.", "Kilkenny este unul dintre cele mai bine păstrate orașe medievale din Irlanda."]
    },
    image: "/geo-images/ireland/city-kilkenny.webp",
  },
  {
    id: "city-athlone",
    type: "city",
    parent: "ireland",
    coords: [-7.9408, 53.4239],
    name: { de: "Athlone", hu: "Athlone", ro: "Athlone", en: "Athlone" },
    description: {
      en: "Athlone sits close to the center of Ireland on the River Shannon and is known for its strategic bridge crossing. The town has a long history as a defensive point and later as a modern regional hub. Athlone mixes riverfront scenery, shopping, and a relaxed inland pace that appeals to road-trippers. Its location makes it a practical stop between Dublin, Galway, and the west coast.",
      de: "Athlone liegt nahe dem Zentrum Irlands am Fluss Shannon und ist für seine strategische Brückenquerung bekannt. Die Stadt hat eine lange Geschichte als Verteidigungspunkt und später als moderner regionaler Knotenpunkt. Athlone verbindet Flussuferlandschaft, Einkaufsmöglichkeiten und ein entspanntes Binnenland-Tempo, das Roadtripper anspricht. Ihre Lage macht sie zu einem praktischen Stopp zwischen Dublin, Galway und der Westküste.",
      hu: "Athlone Írország közepéhez közel, a Shannon folyónál fekszik, és stratégiai hídjáról ismert. A város hosszú ideig védelmi pontként, később pedig modern regionális központként működött. Athlone a folyóparti látványt, a vásárlási lehetőségeket és a nyugodt belső-írországi ritmust ötvözi. Fekvése miatt praktikus megálló Dublin, Galway és a nyugati part között.",
      ro: "Athlone se află aproape de centrul Irlandei, pe râul Shannon, și este cunoscut pentru podul său strategic. Orașul are o istorie lungă ca punct defensiv și, mai târziu, ca nod regional modern. Athlone combină peisajul de mal de râu, cumpărăturile și ritmul relaxat al zonei centrale. Poziția sa îl face o oprire practică între Dublin, Galway și coasta de vest."
    },
    facts: {
      en: ["Athlone is often described as the geographic heart of Ireland.", "The River Shannon passes through the town.", "Athlone Castle is a key historic attraction.", "It is an important transport hub on the Dublin-Galway axis.", "The town has a strong boating and waterside identity."],
      de: ["Athlone wird oft als geografisches Herz Irlands bezeichnet.", "Der Fluss Shannon fließt durch die Stadt.", "Athlone Castle ist eine wichtige historische Attraktion.", "Es ist ein wichtiger Verkehrsknotenpunkt auf der Achse Dublin-Galway.", "Die Stadt hat eine starke Boots- und Uferidentität."],
      hu: ["Athlone-t gyakran Írország földrajzi szívének nevezik.", "A Shannon folyó áthalad a városon.", "Az Athlone Castle fontos történelmi látványosság.", "Fontos közlekedési csomópont Dublin és Galway között.", "A város erős hajós és vízparti identitással rendelkezik."],
      ro: ["Athlone este adesea descris ca inima geografică a Irlandei.", "Râul Shannon trece prin oraș.", "Athlone Castle este o atracție istorică importantă.", "Este un nod de transport esențial pe axa Dublin-Galway.", "Orașul are o identitate puternică legată de apă și navigație."]
    },
    image: "/geo-images/ireland/city-athlone.webp",
  },
  {
    id: "city-tralee",
    type: "city",
    parent: "ireland",
    coords: [-9.7056, 52.2704],
    name: { de: "Tralee", hu: "Tralee", ro: "Tralee", en: "Tralee" },
    description: {
      en: "Tralee is the county town of Kerry and a lively base for the Ring of Kerry and nearby beaches. It combines a compact urban core with access to some of Ireland's best-known coastal scenery. The town has a strong festival profile and a visible sporting culture. Tralee works well as a practical stop for travelers looking for both town life and Atlantic landscapes.",
      de: "Tralee ist die County-Stadt von Kerry und ein lebendiger Ausgangspunkt für den Ring of Kerry und nahe Strände. Sie verbindet einen kompakten Stadtkern mit Zugang zu einigen der bekanntesten Küstenlandschaften Irlands. Die Stadt hat ein starkes Festivalprofil und eine sichtbare Sportkultur. Tralee eignet sich gut als praktischer Stopp für Reisende, die Stadtleben und Atlantiklandschaften verbinden wollen.",
      hu: "Tralee Kerry megye központja, és élénk kiindulópont a Ring of Kerry vagy a közeli strandok felé. Kompakt városi magja mellett Írország egyik legismertebb tengerparti tájához biztosít hozzáférést. A város erős fesztiválkínálattal és jól látható sportkultúrával rendelkezik. Tralee jó választás azoknak, akik a városi életet atlanti tájakkal szeretnék összekötni.",
      ro: "Tralee este orașul de județ din Kerry și o bază animată pentru Ring of Kerry și plajele din apropiere. Îmbină un nucleu urban compact cu acces la unele dintre cele mai cunoscute peisaje de coastă ale Irlandei. Orașul are un profil puternic de festivaluri și o cultură sportivă vizibilă. Tralee este o oprire practică pentru cei care caută atât viață urbană, cât și peisaje atlantice."
    },
    facts: {
      en: ["Tralee is the county town of Kerry.", "It is close to the Ring of Kerry route.", "The town has a strong festival calendar.", "Tralee Bay is an important local feature.", "It is a good base for exploring the Dingle Peninsula."],
      de: ["Tralee ist die County-Stadt von Kerry.", "Es liegt nahe der Ring-of-Kerry-Route.", "Die Stadt hat einen starken Festivalkalender.", "Die Tralee Bay ist ein wichtiges lokales Merkmal.", "Es ist ein guter Ausgangspunkt für die Dingle-Halbinsel."],
      hu: ["Tralee Kerry megye központja.", "Közel van a Ring of Kerry útvonalhoz.", "Erős fesztiválnaptárral rendelkezik.", "A Tralee-öböl fontos helyi adottság.", "Jó bázis a Dingle-félsziget felfedezéséhez."],
      ro: ["Tralee este orașul de județ al comitatului Kerry.", "Este aproape de ruta Ring of Kerry.", "Orașul are un calendar puternic de festivaluri.", "Tralee Bay este o caracteristică locală importantă.", "Este o bază bună pentru explorarea peninsulei Dingle."]
    },
    image: "/geo-images/ireland/city-tralee.webp",
  },
  {
    id: "city-dundalk",
    type: "city",
    parent: "ireland",
    coords: [-6.4049, 54.0000],
    name: { de: "Dundalk", hu: "Dundalk", ro: "Dundalk", en: "Dundalk" },
    description: {
      en: "Dundalk is a border town in County Louth with a strong commercial and transport role. It sits between Dublin and Belfast, which gives it a strategic position for business and travel. The town is known for sporting tradition, coastal access, and a compact urban center. Dundalk also works as a gateway to the Cooley Peninsula and northern Ireland's east coast.",
      de: "Dundalk ist eine Grenzstadt in County Louth mit starker Handels- und Verkehrsrolle. Sie liegt zwischen Dublin und Belfast, was ihr eine strategische Position für Geschäft und Reisen verleiht. Die Stadt ist für ihre Sporttradition, den Küstenzugang und ihren kompakten Stadtkern bekannt. Dundalk dient außerdem als Tor zur Cooley-Halbinsel und zur Ostküste Nordirlands.",
      hu: "Dundalk egy határmenti város Louth megyében, erős kereskedelmi és közlekedési szereppel. Dublin és Belfast között fekszik, ami stratégiai pozíciót ad neki az üzleti életben és az utazásban. A város sporthagyományáról, tengerparti kapcsolatairól és kompakt belvárosáról ismert. Dundalk kapu a Cooley-félsziget és az északi keleti part felé.",
      ro: "Dundalk este un oraș de graniță din comitatul Louth, cu un rol comercial și de transport important. Se află între Dublin și Belfast, ceea ce îi oferă o poziție strategică pentru afaceri și călătorii. Orașul este cunoscut pentru tradiția sportivă, accesul la coastă și centrul urban compact. Dundalk este și o poartă către peninsula Cooley și coasta de est din nord."
    },
    facts: {
      en: ["Dundalk lies near the border with Northern Ireland.", "It is positioned between Dublin and Belfast.", "The town has a strong racing and sporting culture.", "The Cooley Peninsula is nearby.", "Dundalk is an important stop on the east coast corridor."],
      de: ["Dundalk liegt nahe der Grenze zu Nordirland.", "Es liegt zwischen Dublin und Belfast.", "Die Stadt hat eine starke Renn- und Sportkultur.", "Die Cooley-Halbinsel liegt in der Nähe.", "Dundalk ist ein wichtiger Stopp am Ostkorridor."],
      hu: ["Dundalk közel van az északír határhoz.", "Dublin és Belfast között helyezkedik el.", "Erős verseny- és sportkultúrával rendelkezik.", "Közel van a Cooley-félsziget.", "Fontos megálló az keleti part menti útvonalon."],
      ro: ["Dundalk se află aproape de granița cu Irlanda de Nord.", "Este poziționat între Dublin și Belfast.", "Orașul are o cultură puternică de curse și sport.", "Peninsula Cooley este în apropiere.", "Dundalk este o oprire importantă pe coridorul de est."]
    },
    image: "/geo-images/ireland/city-dundalk.webp",
  },
  {
    id: "city-ennis",
    type: "city",
    parent: "ireland",
    coords: [-8.9774, 52.8438],
    name: { de: "Ennis", hu: "Ennis", ro: "Ennis", en: "Ennis" },
    description: {
      en: "Ennis is the county town of Clare and a well-known base for exploring the west of Ireland. It is a compact market town with a strong music tradition and an easygoing streetscape. The town sits close to Shannon Airport and the Cliffs of Moher corridor, which makes it attractive for visitors. Ennis combines local character, heritage shopping, and practical access to major Clare sights.",
      de: "Ennis ist die County-Stadt von Clare und ein bekannter Ausgangspunkt zur Erkundung des Westens von Irland. Es ist eine kompakte Marktstadt mit starker Musiktradition und entspannter Straßenatmosphäre. Die Stadt liegt nahe dem Shannon Airport und dem Korridor zu den Cliffs of Moher, was sie für Besucher attraktiv macht. Ennis verbindet lokalen Charakter, Einkaufsmöglichkeiten und praktischen Zugang zu den wichtigsten Sehenswürdigkeiten in Clare.",
      hu: "Ennis Clare megye központja és jól ismert bázis Írország nyugati részének felfedezéséhez. Kompakt vásárváros, erős zenei hagyományokkal és barátságos utcaképpel. Közel van a Shannon repülőtérhez és a Cliffs of Moher felé vezető útvonalhoz, ezért népszerű a látogatók körében. Ennis helyi karaktert, hangulatos vásárlási lehetőségeket és kényelmes hozzáférést kínál Clare fő látványosságaihoz.",
      ro: "Ennis este orașul de județ al comitatului Clare și o bază bine cunoscută pentru explorarea vestului Irlandei. Este un oraș de târg compact, cu o tradiție muzicală puternică și o atmosferă relaxată pe străzi. Orașul se află aproape de aeroportul Shannon și de coridorul către Cliffs of Moher, ceea ce îl face atractiv pentru vizitatori. Ennis îmbină caracterul local, cumpărăturile și accesul practic la principalele obiective din Clare."
    },
    facts: {
      en: ["Ennis is the county town of Clare.", "It has a strong reputation for Irish traditional music.", "The town is close to Shannon Airport.", "It is a common base for visiting the Cliffs of Moher.", "Ennis retains the feel of a classic market town."],
      de: ["Ennis ist die County-Stadt von Clare.", "Sie hat einen starken Ruf für irische traditionelle Musik.", "Die Stadt liegt nahe dem Shannon Airport.", "Sie ist ein häufiger Ausgangspunkt für die Cliffs of Moher.", "Ennis bewahrt das Gefühl einer klassischen Marktstadt."],
      hu: ["Ennis Clare megye központja.", "Erős hírneve van az ír hagyományos zene terén.", "Közel található a Shannon repülőtérhez.", "Gyakori bázis a Cliffs of Moher meglátogatásához.", "Megőrizte a klasszikus vásárváros hangulatát."],
      ro: ["Ennis este orașul de județ al comitatului Clare.", "Are o reputație puternică pentru muzica tradițională irlandeză.", "Orașul este aproape de aeroportul Shannon.", "Este o bază frecventă pentru vizitarea Cliffs of Moher.", "Ennis păstrează atmosfera unui târg clasic."]
    },
    image: "/geo-images/ireland/city-ennis.webp",
  },
  {
    id: "city-carlow",
    type: "city",
    parent: "ireland",
    coords: [-6.9312, 52.8365],
    name: { de: "Carlow", hu: "Carlow", ro: "Carlow", en: "Carlow" },
    description: {
      en: "Carlow is a south-east Irish town with a strong agricultural hinterland and a compact urban center. It sits on the River Barrow and offers easy access to the wider Leinster region. The town is known for a friendly scale, local food, and historic connections to river trade. Carlow is a practical stop for travelers moving between Kilkenny, Kildare, and Waterford.",
      de: "Carlow ist eine Stadt im Südosten Irlands mit starkem landwirtschaftlichem Umland und einem kompakten Stadtkern. Sie liegt am Fluss Barrow und bietet leichten Zugang zur weiteren Region Leinster. Die Stadt ist für ihre überschaubare Größe, lokale Lebensmittel und historischen Verbindungen zum Flusshandel bekannt. Carlow ist ein praktischer Stopp für Reisende zwischen Kilkenny, Kildare und Waterford.",
      hu: "Carlow délkelet-ír város, erős mezőgazdasági háttérrel és kompakt belvárossal. A Barrow folyó partján fekszik, és könnyű hozzáférést biztosít Leinster tágabb térségéhez. A város barátságos méretéről, helyi élelmiszereiről és a folyami kereskedelemhez kötődő múltjáról ismert. Carlow praktikus megálló Kilkenny, Kildare és Waterford között.",
      ro: "Carlow este un oraș din sud-estul Irlandei, cu un hinterland agricol puternic și un centru urban compact. Se află pe râul Barrow și oferă acces ușor la regiunea extinsă Leinster. Orașul este cunoscut pentru dimensiunea prietenoasă, produsele locale și legăturile istorice cu comerțul pe apă. Carlow este o oprire practică între Kilkenny, Kildare și Waterford."
    },
    facts: {
      en: ["Carlow stands on the River Barrow.", "The town is linked to a strong farming region.", "It has a compact and walkable center.", "Carlow is well placed for south-east road trips.", "Local food and markets are part of its appeal."],
      de: ["Carlow liegt am Fluss Barrow.", "Die Stadt ist mit einer starken Agrarregion verbunden.", "Sie hat ein kompaktes und gut zu Fuß erkundbares Zentrum.", "Carlow ist gut für Roadtrips im Südosten gelegen.", "Lokale Lebensmittel und Märkte gehören zu ihrem Charme."],
      hu: ["Carlow a Barrow folyó partján fekszik.", "Erős mezőgazdasági térséghez kapcsolódik.", "Kompakt, gyalogosan jól bejárható központja van.", "Jól elhelyezkedik délkeleti körutazásokhoz.", "A helyi élelmiszerek és piacok vonzerejét adják."],
      ro: ["Carlow se află pe râul Barrow.", "Orașul este legat de o regiune agricolă puternică.", "Are un centru compact și ușor de parcurs pe jos.", "Este bine poziționat pentru excursii rutiere în sud-est.", "Mâncarea locală și piețele fac parte din farmecul său."]
    },
    image: "/geo-images/ireland/city-carlow.webp",
  },
  {
    id: "city-wexford",
    type: "city",
    parent: "ireland",
    coords: [-6.4689, 52.3369],
    name: { de: "Wexford", hu: "Wexford", ro: "Wexford", en: "Wexford" },
    description: {
      en: "Wexford is a coastal town in the south-east with strong Viking roots and a lively summer atmosphere. It is known for its festivals, harbor, and access to long beaches and bird-rich wetlands. The town gives travelers a mix of history, seaside leisure, and a pleasant compact center. Wexford is also closely associated with the wider heritage of Ireland's Ancient East.",
      de: "Wexford ist eine Küstenstadt im Südosten mit starken Wikingern-Wurzeln und lebendiger Sommeratmosphäre. Sie ist bekannt für ihre Festivals, ihren Hafen und den Zugang zu langen Stränden und vogelreichen Feuchtgebieten. Die Stadt bietet eine Mischung aus Geschichte, Badeort-Flair und einem angenehmen kompakten Zentrum. Wexford ist auch eng mit dem Erbe von Ireland's Ancient East verbunden.",
      hu: "Wexford délkeleti tengerparti város, erős viking gyökerekkel és pezsgő nyári hangulattal. Fesztiváljairól, kikötőjéről, valamint hosszú strandjaihoz és madárban gazdag vizes élőhelyeihez való hozzáféréséről ismert. A város a történelmet, a tengerparti kikapcsolódást és a kellemesen kompakt belvárost ötvözi. Wexford szorosan kapcsolódik Ireland's Ancient East örökségéhez is.",
      ro: "Wexford este un oraș de coastă din sud-est, cu rădăcini vikinge puternice și o atmosferă de vară foarte animată. Este cunoscut pentru festivaluri, port și accesul la plaje lungi și zone umede bogate în păsări. Orașul oferă un amestec de istorie, relaxare la mare și un centru compact plăcut. Wexford este strâns asociat și cu patrimoniul mai larg al Ireland's Ancient East."
    },
    facts: {
      en: ["Wexford has strong Viking-era roots.", "The town is a well-known festival destination.", "It offers access to beaches and estuaries.", "Wexford Harbour shaped its historical role.", "It is part of Ireland's Ancient East tourism story."],
      de: ["Wexford hat starke Wurzeln aus der Wikingerzeit.", "Die Stadt ist ein bekanntes Festivalziel.", "Sie bietet Zugang zu Stränden und Mündungsgebieten.", "Der Hafen von Wexford prägte seine historische Rolle.", "Sie ist Teil der Tourismusgeschichte von Ireland's Ancient East."],
      hu: ["Wexford erős vikingkori gyökerekkel rendelkezik.", "A város ismert fesztiválcélpont.", "Strandokhoz és torkolatvidékekhez biztosít hozzáférést.", "Wexford Harbour történelmi szerepet adott neki.", "Az Ireland's Ancient East turisztikai történetének része."],
      ro: ["Wexford are rădăcini vikinge puternice.", "Orașul este o destinație bine cunoscută pentru festivaluri.", "Oferă acces la plaje și estuare.", "Wexford Harbour i-a modelat rolul istoric.", "Face parte din povestea turistică Ireland's Ancient East."]
    },
    image: "/geo-images/ireland/city-wexford.webp",
  },
  {
    id: "city-navan",
    type: "city",
    parent: "ireland",
    coords: [-6.6889, 53.6515],
    name: { de: "Navan", hu: "Navan", ro: "Navan", en: "Navan" },
    description: {
      en: "Navan is a fast-growing town in County Meath with strong links to the Boyne Valley. It combines commuter convenience with direct access to some of Ireland's best-known historical landscapes. The town has a practical retail and services role while also acting as a base for heritage tourism. Navan is useful for travelers exploring Trim, Tara, and the wider north Leinster corridor.",
      de: "Navan ist eine schnell wachsende Stadt in County Meath mit starken Verbindungen zum Boyne Valley. Sie verbindet Pendlerfreundlichkeit mit direktem Zugang zu einigen der bekanntesten historischen Landschaften Irlands. Die Stadt hat eine praktische Rolle im Handel und Dienstleistungsbereich und dient zugleich als Basis für Kulturtourismus. Navan ist nützlich für Reisende, die Trim, Tara und den breiteren Nord-Leinster-Korridor erkunden.",
      hu: "Navan egy gyorsan növekvő város Meath megyében, erős kötődéssel a Boyne-völgyhöz. Összeköti az ingázóbarát mindennapokat Írország leghíresebb történelmi tájaihoz való közvetlen hozzáféréssel. A város kereskedelmi és szolgáltatási központként is működik, miközben örökségturisztikai bázis. Navan hasznos kiindulópont Trim, Tara és a tágabb észak-leinsteri térség felfedezéséhez.",
      ro: "Navan este un oraș în creștere rapidă din comitatul Meath, cu legături puternice cu valea Boyne. Combină avantajul pentru navetiști cu acces direct la unele dintre cele mai cunoscute peisaje istorice ale Irlandei. Orașul are un rol practic în comerț și servicii, dar și ca bază pentru turismul de patrimoniu. Navan este util pentru cei care explorează Trim, Tara și coridorul nordic din Leinster."
    },
    facts: {
      en: ["Navan is a major town in County Meath.", "It is closely linked to the Boyne Valley.", "The town supports both commuters and heritage tourism.", "Trim and Tara are nearby historic anchors.", "Navan sits within the wider Dublin commuter belt."],
      de: ["Navan ist eine wichtige Stadt in County Meath.", "Sie ist eng mit dem Boyne Valley verbunden.", "Die Stadt unterstützt sowohl Pendler als auch Kulturtourismus.", "Trim und Tara liegen als historische Zentren in der Nähe.", "Navan liegt im weiteren Pendlergürtel von Dublin."],
      hu: ["Navan Meath megye fontos városa.", "Szorosan kötődik a Boyne-völgyhöz.", "Az ingázókat és az örökségturizmust is kiszolgálja.", "Trim és Tara közeli történelmi központok.", "Navan a dublini ingázóövezet tágabb része."],
      ro: ["Navan este un oraș important din comitatul Meath.", "Este strâns legat de valea Boyne.", "Susține atât navetiștii, cât și turismul de patrimoniu.", "Trim și Tara sunt repere istorice din apropiere.", "Navan se află în zona extinsă de navetă a Dublinului."]
    },
    image: "/geo-images/ireland/city-navan.webp",
  }
];

export const irelandNature: POI[] = [
  {
    id: "nat-cliffs-of-moher",
    type: "landmark",
    parent: "ireland",
    coords: [-9.4725, 52.9719],
    name: { de: "Cliffs of Moher", hu: "Moher-sziklák", ro: "Stâncile Moher", en: "Cliffs of Moher" },
    description: {
      en: "The Cliffs of Moher are one of Ireland's most iconic natural landmarks, stretching for 14 kilometers along the Atlantic coast of County Clare. Rising up to 214 meters above the ocean, they offer breathtaking views of the Aran Islands and the vast Atlantic. The cliffs are home to thousands of seabirds, including puffins, and are a UNESCO Global Geopark. They represent the raw beauty and power of the Irish coastline.",
      de: "Die Cliffs of Moher sind eines der bekanntesten Naturdenkmäler Irlands und erstrecken sich über 14 Kilometer entlang der Atlantikküste der Grafschaft Clare. Sie ragen bis zu 214 Meter über den Ozean empor und bieten atemberaubende Ausblicke auf die Aran-Inseln und den weiten Atlantik. Die Klippen sind die Heimat von Tausenden von Seevögeln, darunter Papageitaucher, und sind ein UNESCO Global Geopark. Sie repräsentieren die rohe Schönheit und Kraft der irischen Küste.",
      hu: "A Moher-sziklák Írország egyik legikonikusabb természeti látványossága, amely 14 kilométer hosszan húzódik az Atlanti-óceán partján, Clare megyében. Akár 214 méterrel az óceán fölé magasodva lélegzetelállító kilátást nyújtanak az Aran-szigetekre és a hatalmas Atlanti-óceánra. A sziklák több ezer tengeri madárnak, köztük lunda-féléknek adnak otthont, és az UNESCO Globális Geopark részét képezik. Az ír tengerpart nyers szépségét és erejét jelképezik.",
      ro: "Stâncile Moher sunt unul dintre cele mai emblematice repere naturale ale Irlandei, întinzându-se pe 14 kilometri de-a lungul coastei atlantice a comitatului Clare. Ridicându-se până la 214 metri deasupra oceanului, acestea oferă vederi uluitoare ale insulelor Aran și ale vastului Atlantic. Stâncile găzduiesc mii de păsări marine, inclusiv pufini, și sunt un Geoparc Global UNESCO. Ele reprezintă frumusețea brută și puterea coastei irlandeze."
    },
    facts: {
      en: ["The cliffs are featured in movies like 'Harry Potter and the Half-Blood Prince'.","O'Brien's Tower marks the highest point of the cliffs.","They are made of Namurian shale and sandstone.","Over 1.5 million people visit the cliffs every year."],
      de: ["Die Klippen sind in Filmen wie 'Harry Potter und der Halbblutprinz' zu sehen.","O'Brien's Tower markiert den höchsten Punkt der Klippen.","Sie bestehen aus namurischem Schiefer und Sandstein.","Über 1,5 Millionen Menschen besuchen die Klippen jedes Jahr."],
      hu: ["A sziklák olyan filmekben szerepelnek, mint a 'Harry Potter és a Félvér Herceg'.","Az O'Brien-torony jelzi a sziklák legmagasabb pontját.","Namuri palából és homokkőből állnak.","Évente több mint 1,5 millió ember látogatja meg a sziklákat."],
      ro: ["Stâncile apar în filme precum 'Harry Potter și Prințul Semipur'.","Turnul lui O'Brien marchează cel mai înalt punct al stâncilor.","Sunt formate din ardezie și gresie namuriană.","Peste 1,5 milioane de oameni vizitează stâncile în fiecare an."]
    },
    image: "/geo-images/ireland/cliffs-of-moher.webp",
  },
  {
    id: "nat-giants-causeway",
    type: "landmark",
    parent: "ireland",
    coords: [-6.5116, 55.2408],
    name: { de: "Giant's Causeway", hu: "Óriások útja", ro: "Giant's Causeway", en: "Giant's Causeway" },
    description: {
      en: "The Giant's Causeway is an area of about 40,000 interlocking basalt columns, the result of an ancient volcanic fissure eruption. Located on the north coast of Ireland, it is a UNESCO World Heritage site and a place of great geological interest and mythical legend. According to folklore, the columns were built by the giant Finn MacCool as a causeway to Scotland. It is one of the most popular tourist attractions on the island.",
      de: "Der Giant's Causeway ist ein Gebiet mit etwa 40.000 ineinandergreifenden Basaltsäulen, das Ergebnis eines antiken vulkanischen Spaltenausbruchs. Er liegt an der Nordküste Irlands, ist ein UNESCO-Weltkulturerbe und ein Ort von großem geologischem Interesse und mythischer Legende. Der Folklore nach wurden die Säulen vom Riesen Finn MacCool als Damm nach Schottland gebaut. Er ist eine der beliebtesten Touristenattraktionen auf der Insel.",
      hu: "Az Óriások útja körülbelül 40 000 egymásba kapcsolódó bazaltoszlopból álló terület, amely egy ősi vulkáni repedéskitörés eredménye. Írország északi partján található, az UNESCO Világörökség része, és nagy geológiai érdeklődésre számot tartó, mitikus legendákkal övezett hely. A folklór szerint az oszlopokat az óriás Finn MacCool építette útként Skóciába. A sziget egyik legnépszerűbb turisztikai látványossága.",
      ro: "Giant's Causeway este o zonă cu aproximativ 40.000 de coloane de bazalt interconectate, rezultatul unei vechi erupții vulcanice. Situat pe coasta de nord a Irlandei, este un sit al Patrimoniului Mondial UNESCO și un loc de mare interes geologic și legendă mitică. Conform folclorului, coloanele au fost construite de gigantul Finn MacCool ca un drum către Scoția. Este una dintre cele mai populare atracții turistice de pe insulă."
    },
    facts: {
      en: ["Most of the columns are hexagonal in shape.","The tallest columns are about 12 meters high.","It was formed approximately 50 to 60 million years ago.","The site is managed by the National Trust."],
      de: ["Die meisten Säulen haben eine sechseckige Form.","Die höchsten Säulen sind etwa 12 Meter hoch.","Es entstand vor etwa 50 bis 60 Millionen Jahren.","Die Stätte wird vom National Trust verwaltet."],
      hu: ["Az oszlopok többsége hatszögletű.","A legmagasabb oszlopok körülbelül 12 méter magasak.","Körülbelül 50-60 millió évvel ezelőtt keletkezett.","A helyszínt a National Trust kezeli."],
      ro: ["Majoritatea coloanelor au formă hexagonală.","Cele mai înalte coloane au aproximativ 12 metri înălțime.","S-a format acum aproximativ 50 până la 60 de milioane de ani.","Situl este administrat de National Trust."]
    },
    image: "/geo-images/ireland/giants-causeway.webp",
  },
  {
    id: "nat-cliffs-moher",
    type: "landmark",
    parent: "ireland",
    coords: [-9.4309, 52.9711],
    name: { de: "Cliffs of Moher", hu: "Cliffs of Moher", ro: "Cliffs of Moher", en: "Cliffs of Moher" },
    description: {
      en: "The Cliffs of Moher are a spectacular Atlantic coastline in County Clare, rising steeply above the sea.",
      de: "Die Cliffs of Moher sind eine spektakuläre Atlantikküste in County Clare, die steil über dem Meer aufragt.",
      hu: "A Cliffs of Moher Clare megyében található látványos atlanti partszakasz, amely meredeken emelkedik a tenger fölé.",
      ro: "Cliffs of Moher sunt o coastă atlantică spectaculoasă din comitatul Clare, ridicându-se abrupt deasupra mării."
    },
    facts: {
      en: ["They rise to 214 meters above sea level.", "They stretch for about 8 kilometers.", "They are a UNESCO Global Geopark site.", "They are home to many seabirds."],
      de: ["Sie ragen bis zu 214 Meter über den Meeresspiegel auf.", "Sie erstrecken sich über etwa 8 Kilometer.", "Sie sind ein UNESCO-Global-Geopark.", "Sie sind die Heimat vieler Seevögel."],
      hu: ["Akár 214 méterre magasodnak a tengerszint fölé.", "Körülbelül 8 kilométer hosszan húzódnak.", "UNESCO Global Geopark helyszín.", "Sok tengeri madár él itt."],
      ro: ["Se ridică până la 214 metri deasupra nivelului mării.", "Se întind pe aproximativ 8 kilometri.", "Sunt un sit UNESCO Global Geopark.", "Adăpostesc multe păsări marine."]
    },
    image: "/geo-images/ireland/cliffs-moher.webp",
  },
  {
    id: "nat-ring-kerry",
    type: "landmark",
    parent: "ireland",
    coords: [-9.8, 51.9],
    name: { de: "Ring of Kerry", hu: "Ring of Kerry", ro: "Ring of Kerry", en: "Ring of Kerry" },
    description: {
      en: "The Ring of Kerry is a scenic coastal circuit around the Iveragh Peninsula in southwest Ireland.",
      de: "Der Ring of Kerry ist eine landschaftlich reizvolle Küstenroute rund um die Iveragh-Halbinsel im Südwesten Irlands.",
      hu: "A Ring of Kerry egy festői part menti körút az Iveragh-félsziget körül Írország délnyugati részén.",
      ro: "Ring of Kerry este un traseu scenic de coastă în jurul Peninsulei Iveragh, în sud-vestul Irlandei."
    },
    facts: {
      en: ["It is about 179 kilometers long.", "It passes Killarney National Park.", "It is one of Ireland's classic drives.", "It combines sea, mountains, and lakes."],
      de: ["Er ist etwa 179 Kilometer lang.", "Er führt am Killarney National Park vorbei.", "Er ist eine klassische Irland-Rundfahrt.", "Er verbindet Meer, Berge und Seen."],
      hu: ["Körülbelül 179 kilométer hosszú.", "Érinti a Killarney Nemzeti Parkot.", "Írország klasszikus körútjai közé tartozik.", "A tenger, a hegyek és a tavak keveréke."],
      ro: ["Are aproximativ 179 de kilometri.", "Trece pe lângă Parcul Național Killarney.", "Este unul dintre drumurile clasice ale Irlandei.", "Combină marea, munții și lacurile."]
    },
    image: "/geo-images/ireland/ring-of-kerry.webp",
  },
  {
    id: "nat-connemara",
    type: "landmark",
    parent: "ireland",
    coords: [-9.7, 53.5],
    name: { de: "Connemara", hu: "Connemara", ro: "Connemara", en: "Connemara" },
    description: {
      en: "Connemara is a wild western region known for moorland, mountains, and a strong Gaelic identity.",
      de: "Connemara ist eine wilde westliche Region, bekannt für Moorlandschaften, Berge und eine starke gälische Identität.",
      hu: "Connemara egy vad nyugati régió, amely mocsárvidékeiről, hegyeiről és erős gael identitásáról ismert.",
      ro: "Connemara este o regiune sălbatică din vest, cunoscută pentru mlaștini, munți și o identitate gaelică puternică."
    },
    facts: {
      en: ["It is strongly associated with the Irish language.", "The landscape is rugged and remote.", "The Twelve Bens are a key mountain group.", "It is a major hiking area."],
      de: ["Sie ist stark mit der irischen Sprache verbunden.", "Die Landschaft ist rau und abgelegen.", "Die Twelve Bens sind eine wichtige Berggruppe.", "Sie ist ein wichtiges Wandergebiet."],
      hu: ["Erősen kötődik az ír nyelvhez.", "A táj vad és félreeső.", "A Twelve Bens fontos hegység.", "Népszerű túrahely."],
      ro: ["Este puternic asociată cu limba irlandeză.", "Peisajul este aspru și izolat.", "Twelve Bens este un grup muntos important.", "Este o zonă majoră pentru drumeții."]
    },
    image: "/geo-images/ireland/connemara.webp",
  },
  {
    id: "nat-burren",
    type: "landmark",
    parent: "ireland",
    coords: [-9.2, 53.0],
    name: { de: "The Burren", hu: "The Burren", ro: "The Burren", en: "The Burren" },
    description: {
      en: "The Burren is a limestone karst landscape in County Clare known for its rocks, flowers, and archaeological remains.",
      de: "The Burren ist eine Kalkstein-Karstlandschaft in County Clare, bekannt für ihre Felsen, Blumen und archäologischen Überreste.",
      hu: "The Burren egy mészkőből álló karsztvidék Clare megyében, amely szikláiról, virágairól és régészeti maradványairól ismert.",
      ro: "The Burren este un peisaj carstic calcaros din comitatul Clare, cunoscut pentru stânci, flori și vestigii arheologice."
    },
    facts: {
      en: ["It has rare Arctic-Alpine plants.", "It is a karst landscape.", "Ancient tombs are found there.", "It lies near the Cliffs of Moher."],
      de: ["Dort wachsen seltene arktisch-alpine Pflanzen.", "Es ist eine Karstlandschaft.", "Dort gibt es alte Gräber.", "Es liegt in der Nähe der Cliffs of Moher."],
      hu: ["Ritka sarkvidéki-alpesi növények élnek itt.", "Karsztvidék.", "Ősi sírok találhatók ott.", "A Cliffs of Moher közelében fekszik."],
      ro: ["Acolo cresc plante rare arctic-alpine.", "Este un peisaj carstic.", "Acolo se găsesc morminte antice.", "Se află lângă Cliffs of Moher."]
    },
    image: "/geo-images/ireland/burren.webp",
  }
  ,
  {
    id: "nat-carrauntoohil",
    type: "mountain",
    parent: "ireland",
    coords: [-9.7428, 52.0055],
    name: { de: "Carrauntoohil", hu: "Carrauntoohil", ro: "Carrauntoohil", en: "Carrauntoohil" },
    description: {
      en: "Carrauntoohil is Ireland's highest mountain and the flagship peak of the MacGillycuddy's Reeks. It rises sharply above Kerry and draws hikers who want a serious but rewarding summit route. The mountain is a strong SEO keyword for Irish adventure travel because it combines altitude, scenery, and challenge. From the top, visitors get wide views over lakes, ridges, and the southwest coast.",
      de: "Carrauntoohil ist Irlands höchster Berg und der markante Gipfel der MacGillycuddy's Reeks. Er ragt steil über Kerry auf und zieht Wanderer an, die eine anspruchsvolle, aber lohnende Gipfeltour suchen. Der Berg ist ein starkes SEO-Thema für Irlands Abenteuertourismus, weil er Höhe, Landschaft und Herausforderung verbindet. Vom Gipfel aus reicht der Blick weit über Seen, Grate und die Südwestküste.",
      hu: "A Carrauntoohil Írország legmagasabb hegye és a MacGillycuddy's Reeks zászlóshajó csúcsa. Meredeken emelkedik Kerry fölé, és azokat a túrázókat vonzza, akik komoly, de jutalmazó csúcstúrát keresnek. Az ír aktív turizmus egyik erős SEO-kulcsszava, mert magasságot, tájat és kihívást egyesít. A csúcsról széles kilátás nyílik tavakra, gerincekre és a délnyugati partra.",
      ro: "Carrauntoohil este cel mai înalt munte din Irlanda și vârful emblematic al masivului MacGillycuddy's Reeks. Se ridică abrupt deasupra comitatului Kerry și atrage drumeți care caută un traseu de vârf serios, dar răsplătitor. Muntele este un cuvânt-cheie puternic pentru turismul de aventură din Irlanda, deoarece combină altitudinea, peisajul și provocarea. De pe vârf, vizitatorii au priveliști largi asupra lacurilor, crestelor și coastei de sud-vest."
    },
    facts: {
      en: ["Carrauntoohil is the highest peak in Ireland.", "It stands in County Kerry.", "The mountain is part of the MacGillycuddy's Reeks.", "Popular routes include the Devil's Ladder.", "Summit views reach across much of southwest Ireland."],
      de: ["Carrauntoohil ist der höchste Gipfel Irlands.", "Er liegt in County Kerry.", "Der Berg gehört zu den MacGillycuddy's Reeks.", "Beliebte Routen führen über die Devil's Ladder.", "Vom Gipfel sieht man weite Teile des Südwestens."],
      hu: ["A Carrauntoohil Írország legmagasabb csúcsa.", "County Kerryben található.", "A MacGillycuddy's Reeks hegység része.", "Népszerű útvonal a Devil's Ladder.", "A csúcsról a délnyugat jelentős része belátható."],
      ro: ["Carrauntoohil este cel mai înalt vârf din Irlanda.", "Se află în comitatul Kerry.", "Face parte din MacGillycuddy's Reeks.", "Un traseu popular este Devil's Ladder.", "De pe vârf se vede mare parte din sud-vestul Irlandei."]
    },
    image: "/geo-images/ireland/carrauntoohil.webp",
  },
  {
    id: "nat-croagh-patrick",
    type: "mountain",
    parent: "ireland",
    coords: [-9.6587, 53.7595],
    name: { de: "Croagh Patrick", hu: "Croagh Patrick", ro: "Croagh Patrick", en: "Croagh Patrick" },
    description: {
      en: "Croagh Patrick is a famous pilgrimage mountain in County Mayo overlooking Clew Bay. Its conical shape and religious significance make it one of the most recognizable natural landmarks in western Ireland. The annual climb attracts walkers, pilgrims, and travel content focused on Irish heritage and scenery. Croagh Patrick delivers a strong mix of outdoor challenge, faith history, and coastal panoramas.",
      de: "Croagh Patrick ist ein berühmter Pilgerberg in County Mayo mit Blick auf Clew Bay. Seine kegelförmige Gestalt und seine religiöse Bedeutung machen ihn zu einem der bekanntesten Naturdenkmäler im Westen Irlands. Der jährliche Aufstieg zieht Wanderer, Pilger und Reisefans an, die sich für irisches Erbe und Landschaft interessieren. Croagh Patrick verbindet Outdoor-Herausforderung, Religionsgeschichte und Küstenpanorama.",
      hu: "A Croagh Patrick egy híres zarándokhegy Mayo megyében, kilátással a Clew-öbölre. Kúpos alakja és vallási jelentősége miatt Nyugat-Írország egyik legismertebb természeti jelképe. Az évenkénti megmászása túrázókat, zarándokokat és örökségturizmusra épülő tartalmakat vonz. A Croagh Patrick a szabadtéri kihívást, a hit történetét és a tengerparti panorámát ötvözi.",
      ro: "Croagh Patrick este un munte de pelerinaj celebru din comitatul Mayo, cu vedere spre Clew Bay. Forma sa conică și semnificația religioasă îl fac unul dintre cele mai recognoscibile repere naturale din vestul Irlandei. Urcarea anuală atrage drumeți, pelerini și conținut de turism axat pe patrimoniul și peisajele irlandeze. Croagh Patrick oferă o combinație puternică de provocare outdoor, istorie religioasă și panorame de coastă."
    },
    facts: {
      en: ["Croagh Patrick is linked to Saint Patrick.", "It overlooks Clew Bay in County Mayo.", "The summit climb is a major pilgrimage tradition.", "Its shape is visible from far across the coast.", "It is one of Ireland's best-known hiking peaks."],
      de: ["Croagh Patrick ist mit dem heiligen Patrick verbunden.", "Er überblickt die Clew Bay in County Mayo.", "Der Aufstieg ist eine wichtige Pilgertradition.", "Seine Form ist weit entlang der Küste sichtbar.", "Er gehört zu Irlands bekanntesten Wanderbergen."],
      hu: ["A Croagh Patrick Szent Patrikhoz kapcsolódik.", "A County Mayo-beli Clew-öböl fölé magasodik.", "A csúcsra vezető út fontos zarándokhagyomány.", "Formája messziről látható a part mentén.", "Írország egyik legismertebb túrahegye."],
      ro: ["Croagh Patrick este legat de Sfântul Patrick.", "Domină Clew Bay din comitatul Mayo.", "Urcarea pe vârf este o tradiție majoră de pelerinaj.", "Forma sa se vede de departe de-a lungul coastei.", "Este unul dintre cei mai cunoscuți munți de drumeție din Irlanda."]
    },
    image: "/geo-images/ireland/croagh-patrick.webp",
  },
  {
    id: "nat-lough-corrib",
    type: "lake",
    parent: "ireland",
    coords: [-9.3000, 53.4250],
    name: { de: "Lough Corrib", hu: "Lough Corrib", ro: "Lough Corrib", en: "Lough Corrib" },
    description: {
      en: "Lough Corrib is one of Ireland's largest lakes and a major freshwater tourism destination in the west. It stretches north of Galway and is known for angling, islands, and peaceful scenic boating. The lake is a strong fit for SEO content about Irish nature, water travel, and outdoor breaks. Its shoreline links rural landscapes with access to Galway city and Connemara.",
      de: "Lough Corrib ist einer der größten Seen Irlands und ein bedeutendes Süßwasserreiseziel im Westen. Er erstreckt sich nördlich von Galway und ist für Angeln, Inseln und ruhige Bootstouren bekannt. Der See eignet sich stark für SEO-Inhalte über irische Natur, Wasserreisen und Outdoor-Aufenthalte. Seine Ufer verbinden ländliche Landschaften mit dem Zugang zur Stadt Galway und nach Connemara.",
      hu: "A Lough Corrib Írország egyik legnagyobb tava és a nyugati régió kiemelt édesvízi turisztikai célpontja. Galwaytől északra húzódik, és horgászatról, szigetekről, valamint nyugodt hajózásról ismert. A tó jól illik az ír természetről, vízi utazásról és aktív pihenésről szóló SEO tartalmakba. Partvidéke a vidéki tájat Galway városával és Connemarával köti össze.",
      ro: "Lough Corrib este unul dintre cele mai mari lacuri din Irlanda și o destinație majoră de turism pe apă dulce în vest. Se întinde la nord de Galway și este cunoscut pentru pescuit, insule și plimbări liniștite cu barca. Lacul se potrivește foarte bine pentru conținut SEO despre natura irlandeză, călătorii pe apă și escapade outdoor. Țărmurile sale leagă peisajele rurale de orașul Galway și de Connemara."
    },
    facts: {
      en: ["Lough Corrib is one of the largest lakes in Ireland.", "It lies north of Galway city.", "The lake is popular for angling.", "It contains numerous islands.", "Lough Corrib is connected with scenic boat travel."],
      de: ["Lough Corrib ist einer der größten Seen Irlands.", "Er liegt nördlich der Stadt Galway.", "Der See ist bei Anglern beliebt.", "Er enthält zahlreiche Inseln.", "Lough Corrib ist mit malerischen Bootstouren verbunden."],
      hu: ["A Lough Corrib Írország egyik legnagyobb tava.", "Galway városától északra fekszik.", "Népszerű horgászhely.", "Számos szigetet tartalmaz.", "A Lough Corrib festői hajókirándulásokkal is összekapcsolt."],
      ro: ["Lough Corrib este unul dintre cele mai mari lacuri din Irlanda.", "Se află la nord de orașul Galway.", "Lacul este popular pentru pescuit.", "Conține numeroase insule.", "Lough Corrib este asociat cu plimbări pitorești cu barca."]
    },
    image: "/geo-images/ireland/lough-corrib.webp",
  },
  {
    id: "nat-lough-derg",
    type: "lake",
    parent: "ireland",
    coords: [-8.28, 52.93],
    name: { de: "Lough Derg", hu: "Lough Derg", ro: "Lough Derg", en: "Lough Derg" },
    description: {
      en: "Lough Derg is a large Shannon lake that shapes the borders of several counties in western Ireland. It is valued for boating, lakeside villages, and its role in the river system of the Shannon. The lake supports calm travel content, holiday search intent, and strong scenic keyword coverage for Irish water destinations. Around its shores, visitors find a mix of quiet nature, heritage stops, and waterside leisure.",
      de: "Lough Derg ist ein großer Shannon-See, der die Grenzen mehrerer westirischer Counties prägt. Er ist für Bootsfahrten, Seeuferdörfer und seine Rolle im Shannon-Flusssystem geschätzt. Der See eignet sich gut für Inhalte über ruhiges Reisen, Urlaubsabsichten und starke SEO-Keywords zu irischen Wasserzielen. An seinen Ufern finden Besucher eine Mischung aus stiller Natur, Kulturobjekten und Freizeit am Wasser.",
      hu: "A Lough Derg egy nagy Shannon-tó, amely több nyugat-írországi megye határát is formálja. Hajózásról, tóparti falvakról és a Shannon folyórendszerében betöltött szerepéről ismert. A tó jól használható a nyugodt utazásról, pihenésről és az ír vízi célpontok SEO-kulcsszavairól szóló tartalmakban. Partjain csendes természet, örökségi megállók és vízparti kikapcsolódás várja a látogatót.",
      ro: "Lough Derg este un lac mare de pe Shannon, care modelează granițele mai multor comitate din vestul Irlandei. Este apreciat pentru plimbări cu barca, sate de pe mal și rolul său în sistemul fluvial Shannon. Lacul susține conținut despre călătorii liniștite, intenție de vacanță și cuvinte-cheie puternice pentru destinațiile acvatice din Irlanda. Pe țărmurile sale, vizitatorii găsesc un amestec de natură calmă, opriri de patrimoniu și relaxare la apă."
    },
    facts: {
      en: ["Lough Derg is part of the River Shannon system.", "It borders several counties.", "Boating is a major activity on the lake.", "The area includes quiet lakeside villages.", "It is a strong keyword for inland Irish travel."],
      de: ["Lough Derg gehört zum Flusssystem des Shannon.", "Es grenzt an mehrere Counties.", "Bootfahren ist eine Hauptaktivität auf dem See.", "Die Gegend umfasst ruhige Seeuferdörfer.", "Es ist ein starkes Keyword für Reisen ins Binnenland."],
      hu: ["A Lough Derg a Shannon folyórendszer része.", "Több megyével határos.", "A hajózás fontos tevékenység a tavon.", "A térségben csendes tóparti falvak találhatók.", "Erős kulcsszó az ír belföldi utazásokhoz."],
      ro: ["Lough Derg face parte din sistemul râului Shannon.", "Se învecinează cu mai multe comitate.", "Plimbările cu barca sunt o activitate importantă pe lac.", "Zona include sate liniștite pe malul apei.", "Este un cuvânt-cheie puternic pentru turismul inland din Irlanda."]
    },
    image: "/geo-images/ireland/lough-derg.webp",
  },
  {
    id: "nat-river-shannon",
    type: "river",
    parent: "ireland",
    coords: [-8.628, 52.664],
    name: { de: "River Shannon", hu: "Shannon folyó", ro: "Râul Shannon", en: "River Shannon" },
    description: {
      en: "The River Shannon is the longest river in Ireland and one of the country's defining waterways. It flows through lakes, towns, and broad inland landscapes, making it central to Irish travel and geography. Shannon-focused content performs well because the river connects nature, boating, heritage, and regional identity. From source to estuary, it shapes the story of central and western Ireland.",
      de: "Der River Shannon ist der längste Fluss Irlands und eine der prägenden Wasserstraßen des Landes. Er fließt durch Seen, Städte und weite Binnenlandschaften und ist damit zentral für Reisen und Geografie in Irland. Shannon-Inhalte funktionieren stark, weil der Fluss Natur, Bootstouren, Geschichte und regionale Identität verbindet. Von der Quelle bis zur Mündung prägt er die Geschichte Zentral- und Westirlands.",
      hu: "A Shannon folyó Írország leghosszabb folyója és az ország egyik legmeghatározóbb vízi útja. Tavakon, városokon és széles belső tájakon át folyik, ezért központi szerepet játszik az ír utazási és földrajzi tartalmakban. A Shannonra épülő SEO témák erősek, mert a folyó a természetet, hajózást, örökséget és regionális identitást összekapcsolja. A forrástól a torkolatig alakítja Közép- és Nyugat-Írország történetét.",
      ro: "Râul Shannon este cel mai lung râu din Irlanda și una dintre căile navigabile definitorii ale țării. Curge prin lacuri, orașe și peisaje largi din interior, ceea ce îl face central pentru călătorii și geografia Irlandei. Conținutul despre Shannon performează bine deoarece râul unește natura, navigația, patrimoniul și identitatea regională. De la izvor până la estuar, el modelează povestea Irlandei centrale și de vest."
    },
    facts: {
      en: ["The Shannon is Ireland's longest river.", "It flows through a chain of lakes.", "The river is central to inland boating.", "It connects many counties in the west and midlands.", "Shannon heritage is a major travel keyword."],
      de: ["Der Shannon ist Irlands längster Fluss.", "Er fließt durch eine Kette von Seen.", "Der Fluss ist zentral für Binnenbootsfahrten.", "Er verbindet viele Counties im Westen und in den Midlands.", "Shannon-Erbe ist ein wichtiges Reisethema."],
      hu: ["A Shannon Írország leghosszabb folyója.", "Tavak láncolatán keresztül halad.", "Központi szerepe van a belföldi hajózásban.", "Sok nyugati és közép-írországi megyét köt össze.", "A Shannon örökség fontos utazási kulcsszó."],
      ro: ["Shannon este cel mai lung râu din Irlanda.", "Curge printr-un șir de lacuri.", "Râul este central pentru navigația interioară.", "Leagă multe comitate din vest și Midlands.", "Patrimoniul Shannon este un cuvânt-cheie important de călătorie."]
    },
    image: "/geo-images/ireland/river-shannon.webp",
  },
  {
    id: "nat-river-boyne",
    type: "river",
    parent: "ireland",
    coords: [-6.6426, 53.6994],
    name: { de: "River Boyne", hu: "Boyne folyó", ro: "Râul Boyne", en: "River Boyne" },
    description: {
      en: "The River Boyne is one of Ireland's most historically loaded rivers and a key corridor through County Meath and beyond. It is closely associated with ancient monuments, royal sites, and one of Ireland's most famous battles. The river also supports strong tourism storytelling around the Boyne Valley and Ireland's east. Its landscape combines archaeology, farmland, and river scenery in a compact and searchable package.",
      de: "Der River Boyne ist einer der historisch aufgeladensten Flüsse Irlands und ein wichtiger Korridor durch County Meath und darüber hinaus. Er ist eng mit antiken Monumenten, königlichen Stätten und einer der berühmtesten Schlachten Irlands verbunden. Der Fluss unterstützt außerdem starke Tourismusgeschichten rund um das Boyne Valley und den Osten Irlands. Seine Landschaft verbindet Archäologie, Farmland und Flusslandschaft in einem kompakten, gut suchbaren Paket.",
      hu: "A Boyne folyó Írország egyik történelmileg legterheltebb folyója, és fontos folyosó Meath megyén át és azon túl. Szorosan kapcsolódik az ősi emlékhelyekhez, királyi helyszínekhez és Írország egyik leghíresebb csatájához. A folyó a Boyne-völgy és Kelet-Írország turisztikai történeteit is erősíti. Tája régészetet, mezőgazdaságot és folyóparti látványt egyesít egy tömör, jól kereshető csomagban.",
      ro: "Râul Boyne este unul dintre cele mai încărcate istoric râuri din Irlanda și un coridor important prin comitatul Meath și dincolo de el. Este strâns asociat cu monumente antice, situri regale și una dintre cele mai celebre bătălii ale Irlandei. Râul susține și povești turistice puternice despre Boyne Valley și estul Irlandei. Peisajul său combină arheologie, terenuri agricole și decor de râu într-un pachet compact și ușor de găsit online."
    },
    facts: {
      en: ["The Boyne is associated with the Battle of the Boyne.", "It flows through the Boyne Valley.", "The river is important to Irish archaeology.", "It is linked with historic royal landscapes.", "Boyne Valley tourism is a major search theme."],
      de: ["Der Boyne ist mit der Schlacht am Boyne verbunden.", "Er fließt durch das Boyne Valley.", "Der Fluss ist wichtig für die irische Archäologie.", "Er ist mit historischen königlichen Landschaften verbunden.", "Der Tourismus im Boyne Valley ist ein großes Suchthema."],
      hu: ["A Boyne a Boyne-i csatához kapcsolódik.", "A Boyne-völgyön keresztül folyik.", "Fontos az ír régészet szempontjából.", "Történelmi királyi tájakhoz kötődik.", "A Boyne-völgyi turizmus fontos keresési téma."],
      ro: ["Boyne este asociat cu Bătălia de la Boyne.", "Curge prin Boyne Valley.", "Râul este important pentru arheologia irlandeză.", "Este legat de peisaje regale istorice.", "Turismul Boyne Valley este un subiect major de căutare."]
    },
    image: "/geo-images/ireland/river-boyne.webp",
  },
  {
    id: "nat-achill-island",
    type: "island",
    parent: "ireland",
    coords: [-9.98, 53.96],
    name: { de: "Achill Island", hu: "Achill-sziget", ro: "Insula Achill", en: "Achill Island" },
    description: {
      en: "Achill Island is Ireland's largest offshore island and a headline destination on the Wild Atlantic Way. It offers cliffs, beaches, bogs, and a strong sense of remote western Ireland. The island is ideal for SEO-rich travel pages because it combines dramatic nature with simple access by bridge. Achill is a classic search term for coastal adventure, Gaelic culture, and scenic island breaks.",
      de: "Achill Island ist die größte vorgelagerte Insel Irlands und ein Hauptziel am Wild Atlantic Way. Sie bietet Klippen, Strände, Moore und ein starkes Gefühl des abgelegenen Westirlands. Die Insel eignet sich ideal für SEO-starke Reiseseiten, weil sie dramatische Natur mit einfacher Brückenanbindung verbindet. Achill ist ein klassischer Suchbegriff für Küstenabenteuer, gälische Kultur und landschaftliche Inselauszeiten.",
      hu: "Achill-sziget Írország legnagyobb part menti szigete és a Wild Atlantic Way egyik kiemelt úti célja. Sziklákat, strandokat, lápokat és az elszigetelt nyugat-ír hangulat erős érzetét kínálja. A sziget kiváló SEO-téma, mert drámai természetet és könnyű híddal megközelíthetőséget ötvöz. Achill klasszikus keresőkifejezés a tengerparti kalandhoz, a gael kultúrához és a festői szigetes pihenéshez.",
      ro: "Insula Achill este cea mai mare insulă offshore din Irlanda și o destinație importantă pe Wild Atlantic Way. Oferă stânci, plaje, mlaștini și o puternică senzație de vest îndepărtat al Irlandei. Insula este ideală pentru pagini de turism SEO deoarece combină natura spectaculoasă cu acces ușor peste pod. Achill este un termen clasic pentru aventură de coastă, cultură gaelică și escapade pitorești pe insulă."
    },
    facts: {
      en: ["Achill is Ireland's largest offshore island.", "A bridge connects it to the mainland.", "It is part of the Wild Atlantic Way.", "The island is known for beaches and cliffs.", "Achill has a strong remote-west identity."],
      de: ["Achill ist Irlands größte vorgelagerte Insel.", "Eine Brücke verbindet sie mit dem Festland.", "Sie ist Teil des Wild Atlantic Way.", "Die Insel ist für Strände und Klippen bekannt.", "Achill hat eine starke Identität des abgelegenen Westens."],
      hu: ["Achill Írország legnagyobb part menti szigete.", "Híd köti össze a szárazfölddel.", "A Wild Atlantic Way része.", "Strandjairól és szikláiról ismert.", "Erős a távoli nyugati identitása."],
      ro: ["Achill este cea mai mare insulă offshore din Irlanda.", "Este conectată de continent printr-un pod.", "Face parte din Wild Atlantic Way.", "Insula este cunoscută pentru plaje și stânci.", "Achill are o identitate puternică de vest îndepărtat."]
    },
    image: "/geo-images/ireland/achill-island.webp",
  },
  {
    id: "nat-avondale-forest",
    type: "forest",
    parent: "ireland",
    coords: [-6.2535, 52.9070],
    name: { de: "Avondale Forest", hu: "Avondale-erdő", ro: "Pădurea Avondale", en: "Avondale Forest" },
    description: {
      en: "Avondale Forest is a Wicklow woodland destination known for walking trails, tree cover, and the legacy of Charles Stewart Parnell. It offers a classic Irish forest search term that blends nature, family outings, and heritage tourism. The area is popular with visitors who want fresh air, easy routes, and a scenic stop in east Ireland. Avondale adds strong keyword value for forest stays and outdoor itineraries.",
      de: "Avondale Forest ist ein Waldziel in Wicklow, bekannt für Wanderwege, Baumbestand und das Erbe von Charles Stewart Parnell. Es bietet einen klassischen irischen Wald-Suchbegriff, der Natur, Familienausflüge und Kulturtourismus verbindet. Das Gebiet ist bei Besuchern beliebt, die frische Luft, einfache Wege und einen malerischen Zwischenstopp im Osten Irlands suchen. Avondale bringt starken Keyword-Wert für Waldaufenthalte und Outdoor-Routen.",
      hu: "Az Avondale-erdő Wicklow megyében található, és túraútvonalairól, lombos fáiról, valamint Charles Stewart Parnell örökségéről ismert. Klasszikus ír erdős keresőkifejezés, amely a természetet, családi kirándulásokat és az örökségturizmust ötvözi. A terület népszerű azok körében, akik friss levegőt, könnyű útvonalakat és festői megállót keresnek Kelet-Írországban. Az Avondale erős kulcsszóértéket ad az erdei pihenésekhez és a szabadtéri útitervhez.",
      ro: "Pădurea Avondale este o destinație forestieră din Wicklow, cunoscută pentru trasee de plimbare, coronamentul de arbori și moștenirea lui Charles Stewart Parnell. Oferă un termen clasic de căutare pentru păduri irlandeze care îmbină natura, ieșirile în familie și turismul de patrimoniu. Zona este populară printre vizitatorii care vor aer curat, trasee ușoare și o oprire scenică în estul Irlandei. Avondale adaugă valoare SEO puternică pentru sejururi în pădure și itinerarii outdoor."
    },
    facts: {
      en: ["Avondale is located in County Wicklow.", "It is known for forest walks.", "The site is linked to Charles Stewart Parnell.", "It appeals to family and outdoor visitors.", "Avondale is a strong east-Ireland woodland keyword."],
      de: ["Avondale liegt in County Wicklow.", "Es ist für Waldwanderungen bekannt.", "Der Ort ist mit Charles Stewart Parnell verbunden.", "Er spricht Familien- und Outdoor-Besucher an.", "Avondale ist ein starkes Wald-Keyword für Ostirland."],
      hu: ["Az Avondale County Wicklowban található.", "Erdőjárásairól ismert.", "A hely Charles Stewart Parnellhez kötődik.", "Családok és szabadtéri látogatók számára vonzó.", "Erős erdős kulcsszó Kelet-Írországban."],
      ro: ["Avondale se află în comitatul Wicklow.", "Este cunoscut pentru plimbările prin pădure.", "Locul este legat de Charles Stewart Parnell.", "Atrage vizitatori de familie și outdoor.", "Avondale este un cuvânt-cheie puternic pentru păduri din estul Irlandei."]
    },
    image: "/geo-images/ireland/avondale-forest.webp",
  }
];

export const irelandCulture: POI[] = [
  {
    id: "cult-blarney-castle",
    type: "landmark",
    parent: "city-cork",
    coords: [-8.5704, 51.9291],
    name: { de: "Blarney Castle", hu: "Blarney vár", ro: "Castelul Blarney", en: "Blarney Castle" },
    description: {
      en: "Blarney Castle is a medieval stronghold in Blarney, near Cork, famous for the Blarney Stone. Built by the MacCarthy of Muskerry dynasty, the castle dates back to 1446. Visitors from all over the world come to kiss the Blarney Stone, which is said to bestow the 'gift of the gab' or great eloquence. The castle is surrounded by beautiful gardens, including a poisonous plant garden and the Rock Close.",
      de: "Blarney Castle ist eine mittelalterliche Festung in Blarney, in der Nähe von Cork, die für den Blarney Stone bekannt ist. Die Burg wurde von der Dynastie der MacCarthy of Muskerry erbaut und stammt aus dem Jahr 1446. Besucher aus aller Welt kommen, um den Blarney Stone zu küssen, von dem es heißt, er verleihe die 'Gabe des Redens' oder große Beredsamkeit. Die Burg ist von wunderschönen Gärten umgeben, darunter ein Giftpflanzengarten und der Rock Close.",
      hu: "A Blarney vár egy középkori erődítmény Blarney-ben, Cork közelében, amely a Blarney-kőről híres. A MacCarthy of Muskerry dinasztia építette, a vár 1446-ból származik. A világ minden tájáról érkeznek látogatók, hogy megcsókolják a Blarney-követ, amelyről azt mondják, hogy megadja a 'beszéd ajándékát' vagy a nagy ékesszólást. A várat gyönyörű kertek veszik körül, köztük egy mérgező növénykert és a Rock Close.",
      ro: "Castelul Blarney este o fortăreață medievală din Blarney, lângă Cork, faimoasă pentru Piatra Blarney. Construit de dinastia MacCarthy din Muskerry, castelul datează din 1446. Vizitatori din întreaga lume vin să sărute Piatra Blarney, despre care se spune că oferă 'darul vorbirii' sau o mare elocvență. Castelul este înconjurat de grădini frumoase, inclusiv o grădină de plante otrăvitoare și Rock Close."
    },
    facts: {
      en: ["To kiss the stone, you must lean backwards over a drop from the battlements.","The current castle is the third to be built on the site.","The gardens feature many mystical rock formations.","The Blarney Stone is a block of Carboniferous limestone."],
      de: ["Um den Stein zu küssen, muss man sich rückwärts über einen Abgrund von den Zinnen lehnen.","Die heutige Burg ist die dritte, die an dieser Stelle errichtet wurde.","Die Gärten weisen viele mystische Felsformationen auf.","Der Blarney Stone ist ein Block aus karbonischem Kalkstein."],
      hu: ["A kő megcsókolásához hátra kell dőlni a várfalról egy mélyedés fölé.","A jelenlegi vár a harmadik, amely ezen a helyen épült.","A kertekben számos misztikus sziklaformáció található.","A Blarney-kő egy karbon időszaki mészkőtömb."],
      ro: ["Pentru a săruta piatra, trebuie să te apleci pe spate peste o prăpastie de pe creneluri.","Castelul actual este al treilea construit pe acest sit.","Grădinile prezintă multe formațiuni stâncoase mistice.","Piatra Blarney este un bloc de calcar carbonifer."]
    },
    image: "/geo-images/ireland/blarney-castle.webp",
  },
  {
    id: "cult-trinity",
    type: "landmark",
    parent: "city-dublin",
    coords: [-6.2575, 53.3438],
    name: { de: "Trinity College", hu: "Trinity College", ro: "Trinity College", en: "Trinity College" },
    description: {
      en: "Trinity College Dublin is Ireland's best-known university and home of the Book of Kells.",
      de: "Das Trinity College Dublin ist Irlands bekannteste Universität und Heimat des Book of Kells.",
      hu: "A dublini Trinity College Írország legismertebb egyeteme és a Book of Kells otthona.",
      ro: "Trinity College Dublin este cea mai cunoscută universitate din Irlanda și găzduiește Book of Kells."
    },
    facts: {
      en: ["Founded in 1592.", "The Old Library contains the Book of Kells.", "The Long Room is world-famous.", "It is a major Dublin landmark."],
      de: ["1592 gegründet.", "Die Old Library beherbergt das Book of Kells.", "Der Long Room ist weltberühmt.", "Es ist ein wichtiges Wahrzeichen Dublins."],
      hu: ["1592-ben alapították.", "Az Old Library őrzi a Book of Kells-t.", "A Long Room világhírű.", "Dublin egyik fő nevezetessége."],
      ro: ["Fondat în 1592.", "Old Library găzduiește Book of Kells.", "Long Room este faimoasă în lume.", "Este un reper major din Dublin."]
    },
    image: "/geo-images/ireland/trinity-college.webp",
  },
  {
    id: "cult-rock-cashel",
    type: "landmark",
    parent: "city-cork",
    coords: [-7.8906, 52.5199],
    name: { de: "Rock of Cashel", hu: "Rock of Cashel", ro: "Rock of Cashel", en: "Rock of Cashel" },
    description: {
      en: "The Rock of Cashel is a dramatic medieval site on a limestone hill in Tipperary.",
      de: "Der Rock of Cashel ist eine dramatische mittelalterliche Stätte auf einem Kalksteinhügel in Tipperary.",
      hu: "A Rock of Cashel egy drámai középkori helyszín Tipperary mészkődombján.",
      ro: "Rock of Cashel este un sit medieval dramatic pe un deal de calcar din Tipperary."
    },
    facts: {
      en: ["It was the seat of the kings of Munster.", "It includes a round tower and cathedral.", "It is one of Ireland's iconic ruins.", "It overlooks the surrounding plains."],
      de: ["Es war der Sitz der Könige von Munster.", "Es umfasst einen Rundturm und eine Kathedrale.", "Es ist eine der ikonischen Ruinen Irlands.", "Es überblickt die umliegenden Ebenen."],
      hu: ["Munster királyainak székhelye volt.", "Kerek tornyot és katedrálist is magában foglal.", "Írország egyik ikonikus romja.", "A környező síkságra néz."],
      ro: ["A fost sediul regilor din Munster.", "Include un turn rotund și o catedrală.", "Este una dintre ruinele emblematice ale Irlandei.", "Oferă vedere asupra câmpiilor din jur."]
    },
    image: "/geo-images/ireland/rock-of-cashel.webp",
  },
  {
    id: "cult-newgrange",
    type: "landmark",
    parent: "ireland",
    coords: [-6.4756, 53.6947],
    name: { de: "Newgrange", hu: "Newgrange", ro: "Newgrange", en: "Newgrange" },
    description: {
      en: "Newgrange is a prehistoric passage tomb older than Stonehenge and the Egyptian pyramids.",
      de: "Newgrange ist ein prähistorisches Ganggrab, älter als Stonehenge und die ägyptischen Pyramiden.",
      hu: "A Newgrange egy őskori átjárósír, amely idősebb Stonehenge-nél és az egyiptomi piramisoknál.",
      ro: "Newgrange este un mormânt preistoric de tip pasaj, mai vechi decât Stonehenge și piramidele egiptene."
    },
    facts: {
      en: ["Built around 3200 BC.", "It aligns with the winter solstice sunrise.", "It is a UNESCO World Heritage Site.", "It is one of Europe's oldest monuments."],
      de: ["Um 3200 v. Chr. erbaut.", "Es ist auf den Sonnenaufgang der Wintersonnenwende ausgerichtet.", "Es ist UNESCO-Weltkulturerbe.", "Es ist eines der ältesten Monumente Europas."],
      hu: ["Kr. e. 3200 körül épült.", "A téli napforduló napkeltéjére igazodik.", "UNESCO Világörökségi helyszín.", "Európa egyik legrégebbi emlékműve."],
      ro: ["Construit în jurul anului 3200 î.Hr.", "Este aliniat cu răsăritul de la solstițiul de iarnă.", "Este sit UNESCO.", "Este unul dintre cele mai vechi monumente din Europa."]
    },
    image: "/geo-images/ireland/newgrange.webp",
  },
  {
    id: "cult-blarney",
    type: "landmark",
    parent: "city-cork",
    coords: [-8.5706, 51.9297],
    name: { de: "Blarney Castle", hu: "Blarney Castle", ro: "Blarney Castle", en: "Blarney Castle" },
    description: {
      en: "Blarney Castle is a medieval fortress near Cork, famous for the Blarney Stone and its gardens.",
      de: "Blarney Castle ist eine mittelalterliche Festung nahe Cork, berühmt für den Blarney Stone und seine Gärten.",
      hu: "A Blarney Castle egy középkori erőd Cork közelében, híres a Blarney-kőről és kertjeiről.",
      ro: "Blarney Castle este o fortăreață medievală lângă Cork, faimoasă pentru Piatra Blarney și grădinile sale."
    },
    facts: {
      en: ["The Blarney Stone is said to grant eloquence.", "The current castle dates from the 15th century.", "Visitors kiss the stone by leaning backward.", "The gardens are a major attraction."],
      de: ["Dem Blarney Stone wird Beredsamkeit nachgesagt.", "Die heutige Burg stammt aus dem 15. Jahrhundert.", "Besucher küssen den Stein, indem sie sich zurücklehnen.", "Die Gärten sind eine Hauptattraktion."],
      hu: ["A Blarney-kőnek ékesszólást tulajdonítanak.", "A jelenlegi vár a 15. századból származik.", "A követ hátradőlve csókolják meg.", "A kertek fő látványosságok."],
      ro: ["Piatra Blarney este considerată aducătoare de elocvență.", "Castelul actual datează din secolul al XV-lea.", "Vizitatorii sărută piatra aplecându-se pe spate.", "Grădinile sunt o atracție majoră."]
    },
    image: "/geo-images/ireland/blarney.webp",
  },
  {
    id: "cult-kilkenny",
    type: "landmark",
    parent: "ireland",
    coords: [-7.2449, 52.6485],
    name: { de: "Kilkenny Castle", hu: "Kilkenny Castle", ro: "Castelul Kilkenny", en: "Kilkenny Castle" },
    description: {
      en: "Kilkenny Castle is a Norman castle and one of Ireland's most recognizable historic buildings.",
      de: "Kilkenny Castle ist eine normannische Burg und eines der bekanntesten historischen Gebäude Irlands.",
      hu: "A Kilkenny Castle egy normann vár és Írország egyik legismertebb történelmi épülete.",
      ro: "Castelul Kilkenny este un castel normand și una dintre cele mai recognoscibile clădiri istorice ale Irlandei."
    },
    facts: {
      en: ["It was founded in the 12th century.", "It once belonged to the Butler family.", "It overlooks the River Nore.", "It is a key symbol of Kilkenny."],
      de: ["Es wurde im 12. Jahrhundert gegründet.", "Es gehörte einst der Familie Butler.", "Es überblickt den Fluss Nore.", "Es ist ein zentrales Symbol von Kilkenny."],
      hu: ["A 12. században alapították.", "Valaha a Butler család birtoka volt.", "A Nore folyóra néz.", "Kilkenny egyik fő szimbóluma."],
      ro: ["A fost fondat în secolul al XII-lea.", "A aparținut cândva familiei Butler.", "Oferă vedere spre râul Nore.", "Este un simbol important al orașului Kilkenny."]
    },
    image: "/geo-images/ireland/kilkenny-castle.webp",
  }
  ,
  {
    id: "hist-trim-castle",
    type: "historical",
    parent: "ireland",
    coords: [-6.7867, 53.5558],
    name: { de: "Trim Castle", hu: "Trim vára", ro: "Castelul Trim", en: "Trim Castle" },
    description: {
      en: "Trim Castle is Ireland's largest Anglo-Norman castle and a headline historical site in County Meath. Its massive stone keep dominates the Boyne Valley and makes Trim a strong search term for castle tourism. The castle is famous for medieval power, film location appeal, and easy access from Dublin. It anchors the story of Norman Ireland and gives visitors a very photogenic riverside setting.",
      de: "Trim Castle ist die größte anglonormannische Burg Irlands und eine historische Hauptattraktion in County Meath. Ihr massiver Steinkern dominiert das Boyne Valley und macht Trim zu einem starken Suchbegriff für Burgtourismus. Die Burg ist bekannt für mittelalterliche Macht, Filmkulisse und die gute Erreichbarkeit von Dublin. Sie verankert die Geschichte des normannischen Irlands und bietet eine sehr fotogene Lage am Fluss.",
      hu: "A Trim Castle Írország legnagyobb anglo-normann vára és County Meath kiemelt történelmi helyszíne. Masszív kőtornya uralja a Boyne-völgyet, ezért Trim erős keresési kifejezés a várturizmusban. A vár a középkori hatalom, a filmes helyszín és a Dublinból könnyen elérhető úti cél szerepét is betölti. A normann Írország történetét őrzi, és nagyon fotogén folyóparti környezetet kínál.",
      ro: "Trim Castle este cel mai mare castel anglo-normand din Irlanda și un sit istoric de prim rang în comitatul Meath. Donjonul său masiv domină Boyne Valley și face din Trim un termen puternic pentru turismul de castele. Castelul este cunoscut pentru puterea medievală, pentru rolul în producții de film și pentru accesul ușor din Dublin. El ancorează povestea Irlandei normande și oferă un cadru foarte fotogenic pe malul râului."
    },
    facts: {
      en: ["Trim Castle is the largest Anglo-Norman castle in Ireland.", "It stands in County Meath.", "The castle overlooks the River Boyne valley.", "It is a famous film location.", "Trim is one of the key heritage towns of Ireland's Ancient East."],
      de: ["Trim Castle ist die größte anglonormannische Burg Irlands.", "Sie steht in County Meath.", "Die Burg überblickt das Boyne-Valley.", "Sie ist ein bekannter Drehort.", "Trim gehört zu den wichtigsten Kulturerbestädten von Ireland's Ancient East."],
      hu: ["A Trim Castle Írország legnagyobb anglo-normann vára.", "County Meathben áll.", "A Boyne-völgy fölé magasodik.", "Híres forgatási helyszín.", "Trim az Ireland's Ancient East egyik kulcsörökségi városa."],
      ro: ["Trim Castle este cel mai mare castel anglo-normand din Irlanda.", "Se află în comitatul Meath.", "Domină valea râului Boyne.", "Este o locație celebră de filmare.", "Trim este unul dintre orașele-cheie de patrimoniu din Ireland's Ancient East."]
    },
    image: "/geo-images/ireland/trim-castle.webp",
  },
  {
    id: "hist-newgrange",
    type: "historical",
    parent: "ireland",
    coords: [-6.4754, 53.6947],
    name: { de: "Newgrange", hu: "Newgrange", ro: "Newgrange", en: "Newgrange" },
    description: {
      en: "Newgrange is a prehistoric passage tomb in the Boyne Valley and one of Ireland's most searched archaeological sites. Older than Stonehenge and the Egyptian pyramids, it delivers huge SEO value for ancient history and world heritage travel. The monument is famous for its winter solstice alignment and carefully reconstructed mound. Newgrange offers a rare mix of mystery, science, and ancient Irish storytelling.",
      de: "Newgrange ist ein prähistorisches Ganggrab im Boyne Valley und eine der meistgesuchten archäologischen Stätten Irlands. Älter als Stonehenge und die ägyptischen Pyramiden, liefert es großen SEO-Wert für Antike und Weltkulturerbe. Das Monument ist berühmt für seine Ausrichtung auf die Wintersonnenwende und seinen sorgfältig rekonstruierten Hügel. Newgrange verbindet Geheimnis, Wissenschaft und uraltes irisches Erzählen.",
      hu: "A Newgrange egy őskori átjárósír a Boyne-völgyben, és Írország egyik legkeresettebb régészeti helyszíne. Idősebb Stonehenge-nél és az egyiptomi piramisoknál, így óriási SEO-értéket jelent az ókori történelem és világörökségi utazás témájában. Az emlékmű a téli napfordulóhoz igazított bejáratáról és gondosan rekonstruált dombjáról híres. Newgrange ritka keveréke a misztikumnak, a tudománynak és az ősi ír történetmesélésnek.",
      ro: "Newgrange este un mormânt preistoric de tip passage în Boyne Valley și unul dintre cele mai căutate situri arheologice din Irlanda. Mai vechi decât Stonehenge și piramidele egiptene, oferă valoare SEO uriașă pentru istorie antică și turism de patrimoniu mondial. Monumentul este faimos pentru alinierea la solstițiul de iarnă și pentru tumulul său reconstruit cu grijă. Newgrange oferă un amestec rar de mister, știință și poveste irlandeză străveche."
    },
    facts: {
      en: ["Newgrange dates to around 3200 BC.", "It is older than Stonehenge.", "The passage aligns with the winter solstice sunrise.", "It is in the Boyne Valley UNESCO landscape.", "Newgrange is one of Europe's great prehistoric monuments."],
      de: ["Newgrange stammt ungefähr aus dem Jahr 3200 v. Chr.", "Es ist älter als Stonehenge.", "Der Gang ist auf den Sonnenaufgang der Wintersonnenwende ausgerichtet.", "Es liegt in der UNESCO-Landschaft des Boyne Valley.", "Newgrange zählt zu Europas großen prähistorischen Monumenten."],
      hu: ["Newgrange körülbelül Kr. e. 3200-ból származik.", "Idősebb Stonehenge-nél.", "A folyosó a téli napforduló napfelkeltéjéhez igazodik.", "A Boyne-völgy UNESCO tájának része.", "Newgrange Európa nagy őskori emlékművei közé tartozik."],
      ro: ["Newgrange datează din jurul anului 3200 î.Hr.", "Este mai vechi decât Stonehenge.", "Coridorul este aliniat cu răsăritul de la solstițiul de iarnă.", "Se află în peisajul UNESCO Boyne Valley.", "Newgrange este unul dintre marile monumente preistorice ale Europei."]
    },
    image: "/geo-images/ireland/newgrange.webp",
  }
  ,
  {
    id: "hist-kilmainham-gaol",
    type: "historical",
    parent: "ireland",
    coords: [-6.3021, 53.3439],
    name: { de: "Kilmainham Gaol", hu: "Kilmainham börtön", ro: "Kilmainham Gaol", en: "Kilmainham Gaol" },
    description: {
      en: "Kilmainham Gaol in Dublin is one of Ireland's most important political history sites. The former prison is linked to rebellion, independence, and the story of modern Irish statehood. Its guided tours create strong search interest around Dublin history, revolution, and heritage travel. The building is a powerful reminder of how national identity was shaped through hardship and reform.",
      de: "Kilmainham Gaol in Dublin ist eine der wichtigsten Stätten der politischen Geschichte Irlands. Das ehemalige Gefängnis ist mit Aufständen, Unabhängigkeit und der Entstehung des modernen irischen Staates verbunden. Seine Führungen erzeugen starkes Suchinteresse rund um Dublins Geschichte, Revolution und Kulturtourismus. Das Gebäude erinnert eindrucksvoll daran, wie nationale Identität durch Leid und Reform geformt wurde.",
      hu: "A dublini Kilmainham Gaol Írország egyik legfontosabb politikai történelmi helyszíne. A volt börtön összekapcsolódik a felkelésekkel, a függetlenséggel és a modern ír államiság történetével. Vezetett túrái erős keresési érdeklődést generálnak Dublin történelme, a forradalom és az örökségturizmus iránt. Az épület erőteljes emlékeztető arra, hogy a nemzeti identitás hogyan formálódott meg a nehézségek és reformok során.",
      ro: "Kilmainham Gaol din Dublin este unul dintre cele mai importante situri ale istoriei politice irlandeze. Fosta închisoare este legată de răscoale, independență și de povestea statului irlandez modern. Tururile ghidate generează interes puternic de căutare pentru istoria Dublinului, revoluție și turism de patrimoniu. Clădirea amintește clar modul în care identitatea națională a fost modelată prin suferință și reformă."
    },
    facts: {
      en: ["Kilmainham Gaol opened in 1796.", "It played a major role in Irish independence history.", "Many rebel leaders were imprisoned there.", "The building is now a museum.", "It is one of Dublin's most important historic sites."],
      de: ["Kilmainham Gaol wurde 1796 eröffnet.", "Es spielte eine große Rolle in der irischen Unabhängigkeitsgeschichte.", "Viele Rebellenführer waren dort inhaftiert.", "Das Gebäude ist heute ein Museum.", "Es ist eine der wichtigsten historischen Stätten Dublins."],
      hu: ["A Kilmainham Gaol 1796-ban nyílt meg.", "Fontos szerepe volt az ír függetlenség történetében.", "Sok lázadó vezetőt tartottak itt fogva.", "Az épület ma múzeum.", "Dublin egyik legfontosabb történelmi helyszíne."],
      ro: ["Kilmainham Gaol s-a deschis în 1796.", "A avut un rol major în istoria independenței irlandeze.", "Mulți lideri rebeli au fost închiși aici.", "Clădirea este acum muzeu.", "Este unul dintre cele mai importante situri istorice din Dublin."]
    },
    image: "/geo-images/ireland/kilmainham-gaol.webp",
  },
  {
    id: "hist-rock-of-cashel",
    type: "historical",
    parent: "ireland",
    coords: [-7.8892, 52.5200],
    name: { de: "Rock of Cashel", hu: "Rock of Cashel", ro: "Rock of Cashel", en: "Rock of Cashel" },
    description: {
      en: "The Rock of Cashel rises dramatically above the plains of Tipperary and is one of Ireland's iconic medieval sites. Its cathedral ruins, round tower, and royal associations make it essential for history-focused travel content. The location delivers strong search appeal because it combines scenic drama with deep ecclesiastical heritage. Cashel is a classic stop for anyone tracing early Irish kingship and church power.",
      de: "Der Rock of Cashel erhebt sich dramatisch über die Ebenen von Tipperary und ist eine der ikonischen mittelalterlichen Stätten Irlands. Seine Kathedralruinen, der Rundturm und die königlichen Bezüge machen ihn für geschichtsorientierte Reiseseiten unverzichtbar. Der Ort besitzt starke Suchattraktivität, weil er landschaftliche Dramatik mit tiefer kirchlicher Geschichte verbindet. Cashel ist ein klassischer Halt für alle, die frühe irische Königsmacht und Kirchenmacht nachvollziehen wollen.",
      hu: "A Rock of Cashel drámaian emelkedik Tipperary síksága fölé, és Írország egyik ikonikus középkori helyszíne. Katedrálisromjai, kerek tornya és királyi kapcsolatai miatt a történelemközpontú utazási tartalmak nélkülözhetetlen eleme. A hely erős keresési vonzerőt jelent, mert a táji látványt mély egyházi örökséggel köti össze. Cashel klasszikus megálló mindazoknak, akik az ír királyság és egyházi hatalom korai történetét követik.",
      ro: "Rock of Cashel se ridică spectaculos deasupra câmpiilor din Tipperary și este unul dintre siturile medievale emblematice ale Irlandei. Ruinele catedralei, turnul rotund și legăturile regale îl fac esențial pentru conținutul de călătorie axat pe istorie. Locația are un puternic atractiv pentru căutări, deoarece combină dramatismul peisajului cu patrimoniul ecleziastic profund. Cashel este o oprire clasică pentru cei care urmăresc începuturile regalității și puterii bisericești irlandeze."
    },
    facts: {
      en: ["The Rock of Cashel was associated with the kings of Munster.", "It includes a round tower and cathedral ruins.", "It is one of Ireland's best-known medieval landmarks.", "The site sits on a limestone outcrop.", "Cashel is a major heritage stop in Tipperary."],
      de: ["Der Rock of Cashel war mit den Königen von Munster verbunden.", "Er umfasst einen Rundturm und Kathedralruinen.", "Er ist eines der bekanntesten mittelalterlichen Wahrzeichen Irlands.", "Der Ort liegt auf einem Kalksteinfelsen.", "Cashel ist ein wichtiger Kulturerbe-Stopp in Tipperary."],
      hu: ["A Rock of Cashel a munsteri királyokhoz kötődött.", "Kerek tornyot és katedrálisromokat is magában foglal.", "Írország egyik legismertebb középkori látványossága.", "A hely mészkőszirten fekszik.", "Cashel fontos örökségi megálló Tipperaryben."],
      ro: ["Rock of Cashel a fost asociat cu regii din Munster.", "Include un turn rotund și ruine de catedrală.", "Este unul dintre cele mai cunoscute repere medievale ale Irlandei.", "Situl se află pe un afloriment de calcar.", "Cashel este o oprire majoră de patrimoniu în Tipperary."]
    },
    image: "/geo-images/ireland/rock-of-cashel.webp",
  },
  {
    id: "hist-clonmacnoise",
    type: "historical",
    parent: "ireland",
    coords: [-7.9876, 53.3267],
    name: { de: "Clonmacnoise", hu: "Clonmacnoise", ro: "Clonmacnoise", en: "Clonmacnoise" },
    description: {
      en: "Clonmacnoise is a major monastic site on the banks of the River Shannon in County Offaly. Its ruins, high crosses, and round towers make it a must-see for Irish medieval history searches. The site tells the story of learning, faith, and power in early Christian Ireland. Clonmacnoise remains one of the most atmospheric heritage stops in the midlands.",
      de: "Clonmacnoise ist eine bedeutende Klosterstätte am Ufer des Shannon in County Offaly. Seine Ruinen, Hochkreuze und Rundtürme machen es zu einem Muss für Suchanfragen zur irischen Mittelaltergeschichte. Der Ort erzählt die Geschichte von Bildung, Glauben und Macht im frühchristlichen Irland. Clonmacnoise bleibt einer der stimmungsvollsten Kulturerbestopps in den Midlands.",
      hu: "Clonmacnoise egy jelentős monostorhely a Shannon folyó partján, County Offalyban. Romjai, magas keresztjei és kerek tornyai miatt kihagyhatatlan az ír középkori történelem kereséseiben. A hely a tanulás, a hit és a hatalom történetét meséli el a korai keresztény Írországban. Clonmacnoise ma is az egyik legkülönlegesebb hangulatú örökségi megálló a Midlandsben.",
      ro: "Clonmacnoise este un sit monastic major pe malul râului Shannon, în comitatul Offaly. Ruinele, crucile înalte și turnurile rotunde îl fac obligatoriu pentru căutările despre istoria medievală irlandeză. Situl spune povestea învățării, credinței și puterii în Irlanda creștină timpurie. Clonmacnoise rămâne una dintre cele mai atmosferice opriri de patrimoniu din Midlands."
    },
    facts: {
      en: ["Clonmacnoise was founded in the 6th century.", "It stands beside the River Shannon.", "The site includes high crosses and round towers.", "It was an important center of learning.", "Clonmacnoise is a core Irish monastic heritage landmark."],
      de: ["Clonmacnoise wurde im 6. Jahrhundert gegründet.", "Es liegt am River Shannon.", "Der Ort umfasst Hochkreuze und Rundtürme.", "Es war ein wichtiges Bildungszentrum.", "Clonmacnoise ist ein zentrales irisches Klosterdenkmal."],
      hu: ["Clonmacnoise a 6. században alapult.", "A Shannon folyó mellett áll.", "Magas kereszteket és kerek tornyokat is magában foglal.", "Fontos oktatási központ volt.", "Clonmacnoise az ír monasztikus örökség kulcshelyszíne."],
      ro: ["Clonmacnoise a fost fondat în secolul al VI-lea.", "Se află lângă râul Shannon.", "Situl include cruci înalte și turnuri rotunde.", "A fost un important centru de învățare.", "Clonmacnoise este un reper central al patrimoniului monastic irlandez."]
    },
    image: "/geo-images/ireland/clonmacnoise.webp",
  },
  {
    id: "hist-cahir-castle",
    type: "historical",
    parent: "ireland",
    coords: [-7.9238, 52.3734],
    name: { de: "Cahir Castle", hu: "Cahir vára", ro: "Castelul Cahir", en: "Cahir Castle" },
    description: {
      en: "Cahir Castle is one of Ireland's largest and best-preserved castles, standing on a rocky island in the River Suir. It is a strong keyword for Irish castle tourism because it combines size, authenticity, and easy access. The castle's walls and towers create a classic medieval experience for visitors. Cahir also fits well into routes between Cork, Tipperary, and Waterford.",
      de: "Cahir Castle ist eine der größten und best erhaltenen Burgen Irlands und steht auf einer Felseninsel im River Suir. Es ist ein starkes Keyword für irischen Burgtourismus, weil es Größe, Authentizität und gute Erreichbarkeit verbindet. Die Mauern und Türme der Burg schaffen ein klassisches mittelalterliches Erlebnis für Besucher. Cahir passt auch gut auf Routen zwischen Cork, Tipperary und Waterford.",
      hu: "A Cahir Castle Írország egyik legnagyobb és legjobb állapotban megőrzött vára, amely a Suir folyó sziklás szigetén áll. Erős kulcsszó az ír várturizmusban, mert méretet, hitelességet és könnyű megközelíthetőséget egyesít. Falai és tornyai klasszikus középkori élményt nyújtanak a látogatóknak. Cahir jól illeszkedik Cork, Tipperary és Waterford közötti útvonalakba is.",
      ro: "Castelul Cahir este unul dintre cele mai mari și mai bine păstrate castele din Irlanda, ridicat pe o insulă stâncoasă din râul Suir. Este un cuvânt-cheie puternic pentru turismul de castele irlandeze deoarece combină dimensiunea, autenticitatea și accesibilitatea. Zidurile și turnurile sale oferă vizitatorilor o experiență medievală clasică. Cahir se potrivește bine și pe rutele dintre Cork, Tipperary și Waterford."
    },
    facts: {
      en: ["Cahir Castle stands on an island in the River Suir.", "It is among Ireland's largest castles.", "The fortress dates to the 13th century.", "It is one of the best-preserved castles in Ireland.", "Cahir is a popular stop on south-east travel routes."],
      de: ["Cahir Castle steht auf einer Insel im River Suir.", "Es gehört zu den größten Burgen Irlands.", "Die Festung stammt aus dem 13. Jahrhundert.", "Sie ist eine der am besten erhaltenen Burgen Irlands.", "Cahir ist ein beliebter Stopp auf Routen im Südosten."],
      hu: ["A Cahir Castle a Suir folyó egyik szigetén áll.", "Írország legnagyobb várai közé tartozik.", "A 13. századból származik.", "Az egyik legjobb állapotban megmaradt ír vár.", "Cahir népszerű megálló a délkeleti útvonalakon."],
      ro: ["Castelul Cahir stă pe o insulă din râul Suir.", "Este printre cele mai mari castele din Irlanda.", "Fortăreața datează din secolul al XIII-lea.", "Este unul dintre cele mai bine păstrate castele irlandeze.", "Cahir este o oprire populară pe rutele din sud-est."]
    },
    image: "/geo-images/ireland/cahir-castle.webp",
  }
  ,
  {
    id: "hist-battle-of-the-boyne",
    type: "historical",
    parent: "ireland",
    coords: [-6.5082, 53.7350],
    name: { de: "Battle of the Boyne", hu: "Boyne-i csata", ro: "Bătălia de la Boyne", en: "Battle of the Boyne" },
    description: {
      en: "The Battle of the Boyne is one of the most famous historical battle sites in Ireland and a major search topic for Irish history tours. The 1690 battle shaped the political future of the island and remains central to conversations about memory and identity. Visitors can explore the Boyne landscape, river crossings, and interpretation sites around Oldbridge. It is a high-value location for history, conflict, and heritage keyword coverage.",
      de: "Die Schlacht am Boyne ist eine der berühmtesten historischen Schlachtstätten Irlands und ein großes Suchthema für Irland-Historientouren. Die Schlacht von 1690 prägte die politische Zukunft der Insel und bleibt zentral für Gespräche über Erinnerung und Identität. Besucher können die Boyne-Landschaft, Flussübergänge und die Ausstellungsorte rund um Oldbridge erkunden. Es ist ein hochwertiger Ort für Suchbegriffe zu Geschichte, Konflikt und Kulturerbe.",
      hu: "A Boyne-i csata Írország egyik leghíresebb történelmi csatatere, és az ír történelmi túrák egyik fontos keresési témája. Az 1690-es ütközet meghatározta a sziget politikai jövőjét, és ma is központi szerepet játszik az emlékezet és identitás kérdéseiben. A látogatók felfedezhetik a Boyne táját, a folyóátkelőket és az oldbridge-i értelmező helyszíneket. Ez kiemelt értékű helyszín a történelem-, konfliktus- és örökségi kulcsszavak szempontjából.",
      ro: "Bătălia de la Boyne este unul dintre cele mai celebre situri istorice de luptă din Irlanda și un subiect major pentru tururile de istorie irlandeză. Bătălia din 1690 a modelat viitorul politic al insulei și rămâne esențială în discuțiile despre memorie și identitate. Vizitatorii pot explora peisajul Boyne, trecerile peste râu și punctele de interpretare din zona Oldbridge. Este o locație cu valoare ridicată pentru acoperirea cuvintele-cheie despre istorie, conflict și patrimoniu."
    },
    facts: {
      en: ["The battle took place in 1690.", "It was fought near the River Boyne.", "The site is a major Irish historical memory location.", "Oldbridge is central to visitor interpretation.", "It is one of the best-known battlefields in Ireland."],
      de: ["Die Schlacht fand 1690 statt.", "Sie wurde nahe dem River Boyne ausgetragen.", "Der Ort ist ein wichtiger Erinnerungsort der irischen Geschichte.", "Oldbridge ist zentral für die Vermittlung an Besucher.", "Es ist eines der bekanntesten Schlachtfelder Irlands."],
      hu: ["A csata 1690-ben zajlott.", "A Boyne folyó közelében vívták.", "A helyszín az ír történelmi emlékezet fontos pontja.", "Oldbridge központi szerepű a látogatói értelmezésben.", "Írország egyik legismertebb csatamezeje."],
      ro: ["Bătălia a avut loc în 1690.", "S-a purtat lângă râul Boyne.", "Situl este o locație majoră a memoriei istorice irlandeze.", "Oldbridge este central pentru interpretarea pentru vizitatori.", "Este unul dintre cele mai cunoscute câmpuri de luptă din Irlanda."]
    },
    image: "/geo-images/ireland/battle-of-the-boyne.webp",
  },
  {
    id: "hist-charles-fort",
    type: "historical",
    parent: "ireland",
    coords: [-8.4990, 51.7039],
    name: { de: "Charles Fort", hu: "Charles erőd", ro: "Fortul Charles", en: "Charles Fort" },
    description: {
      en: "Charles Fort guards Kinsale Harbour and is one of Ireland's most impressive star forts. Built in the late 17th century, it reflects military engineering and coastal defense history. The site is a strong SEO target for visitors interested in forts, harbors, and southern Ireland routes. Its long walls and water views make it especially appealing for photography and family trips.",
      de: "Charles Fort bewacht den Hafen von Kinsale und ist eine der beeindruckendsten Sternfestungen Irlands. Er wurde im späten 17. Jahrhundert erbaut und spiegelt Militärtechnik und Küstenverteidigung wider. Der Ort ist ein starkes SEO-Ziel für Besucher, die sich für Festungen, Häfen und Routen im Süden Irlands interessieren. Seine langen Mauern und der Blick aufs Wasser machen ihn besonders attraktiv für Fotos und Familienausflüge.",
      hu: "A Charles Fort őrzi a Kinsale-öblöt, és Írország egyik legimpozánsabb csillag alakú erődje. A 17. század végén épült, és a hadmérnöki megoldásokat, valamint a parti védelem történetét tükrözi. Erős SEO-célpont azoknak, akiket az erődök, kikötők és a dél-ír útvonalak érdekelnek. Hosszú falai és vízre néző panorámája különösen vonzó fotózáshoz és családi kirándulásokhoz.",
      ro: "Fortul Charles păzește golful Kinsale și este unul dintre cele mai impresionante forturi stelare din Irlanda. Construit la sfârșitul secolului al XVII-lea, reflectă ingineria militară și istoria apărării de coastă. Situl este o țintă SEO puternică pentru vizitatorii interesați de forturi, porturi și rute din sudul Irlandei. Zidurile sale lungi și priveliștile către apă îl fac deosebit de atractiv pentru fotografie și ieșiri cu familia."
    },
    facts: {
      en: ["Charles Fort overlooks Kinsale Harbour.", "It is a star-shaped fortification.", "The fort dates to the late 1600s.", "It played a role in coastal defense.", "It is one of Ireland's standout military heritage sites."],
      de: ["Charles Fort überblickt den Hafen von Kinsale.", "Es ist eine sternförmige Festungsanlage.", "Die Festung stammt aus dem späten 17. Jahrhundert.", "Sie spielte eine Rolle in der Küstenverteidigung.", "Es ist eine der herausragenden militärischen Kulturerbestätten Irlands."],
      hu: ["A Charles Fort a Kinsale-öböl fölött magasodik.", "Csillag alakú erődítmény.", "A 17. század végéről származik.", "Szerepe volt a parti védelemben.", "Írország egyik kiemelkedő katonai örökségi helye."],
      ro: ["Fortul Charles domină golful Kinsale.", "Este o fortificație în formă de stea.", "Fortul datează de la sfârșitul secolului al XVII-lea.", "A avut un rol în apărarea de coastă.", "Este unul dintre cele mai importante situri de patrimoniu militar din Irlanda."]
    },
    image: "/geo-images/ireland/charles-fort.webp",
  },
  {
    id: "landmark-guinness-storehouse",
    type: "landmark",
    parent: "ireland",
    coords: [-6.2869, 53.3414],
    name: { de: "Guinness Storehouse", hu: "Guinness Storehouse", ro: "Guinness Storehouse", en: "Guinness Storehouse" },
    description: {
      en: "The Guinness Storehouse is Dublin's flagship tourist landmark and one of Ireland's most searched attractions. Built inside the old fermentation plant, it tells the story of the country's most famous stout and brand identity. The experience combines skyline views, marketing history, and a powerful Dublin check-in moment. It is a key keyword for Irish city travel, brewery tourism, and iconic indoor attractions.",
      de: "Das Guinness Storehouse ist Dublins Flaggschiff unter den Touristenattraktionen und eine der meistgesuchten Sehenswürdigkeiten Irlands. In der alten Gäranlage untergebracht, erzählt es die Geschichte des berühmtesten Stouts und der Markenidentität des Landes. Das Erlebnis verbindet Skyline-Blicke, Marketinggeschichte und einen starken Dublin-Check-in-Moment. Es ist ein wichtiges Keyword für Städtereisen, Brauereitourismus und ikonische Indoor-Attraktionen.",
      hu: "A Guinness Storehouse Dublin zászlóshajó látványossága és Írország egyik legkeresettebb attrakciója. A régi erjesztőüzemben kialakítva az ország leghíresebb stout sörének és márkaidentitásának történetét mutatja be. Az élmény összekapcsolja a panorámát, a marketingtörténetet és egy erős dublini „check-in” pontot. Kulcsszóként fontos az ír városlátogatás, a sörturizmus és az ikonikus beltéri attrakciók témájában.",
      ro: "Guinness Storehouse este atracția emblematică a Dublinului și unul dintre cele mai căutate obiective din Irlanda. Amenajat în vechea fabrică de fermentare, spune povestea celei mai faimoase beri stout și a identității de brand a țării. Experiența combină priveliștea asupra orașului, istoria marketingului și un moment puternic de check-in în Dublin. Este un cuvânt-cheie esențial pentru turism urban irlandez, turism de berărie și atracții indoor iconice."
    },
    facts: {
      en: ["It is one of Dublin's top visitor attractions.", "The building is seven stories high.", "The Gravity Bar offers city views.", "It is linked to the Guinness brewing story.", "The site is a major Irish tourism brand."],
      de: ["Es ist eine der wichtigsten Attraktionen Dublins.", "Das Gebäude ist sieben Stockwerke hoch.", "Die Gravity Bar bietet Stadtblick.", "Es ist mit der Guinness-Braugeschichte verbunden.", "Der Ort ist eine große irische Tourismusmarke."],
      hu: ["Dublin egyik legfontosabb turisztikai attrakciója.", "Az épület hét emeletes.", "A Gravity Bar városra néző kilátást ad.", "A Guinness sörfőzés történetéhez kötődik.", "Fontos ír turisztikai márka."],
      ro: ["Este una dintre atracțiile de top din Dublin.", "Clădirea are șapte niveluri.", "Gravity Bar oferă vedere asupra orașului.", "Este legat de povestea fabricării Guinness.", "Situl este un brand major de turism irlandez."]
    },
    image: "/geo-images/ireland/guinness-storehouse.webp",
  },
  {
    id: "landmark-trinity-long-room",
    type: "landmark",
    parent: "ireland",
    coords: [-6.2561, 53.3439],
    name: { de: "Long Room", hu: "Long Room", ro: "Long Room", en: "Long Room" },
    description: {
      en: "The Long Room at Trinity College is one of Dublin's most iconic interior landmarks. Its oak shelves, vaulted ceiling, and literary aura make it a top search result for library and history tourism in Ireland. The room is closely associated with the Book of Kells and the prestige of Trinity College Dublin. It is a visually rich, instantly recognizable Dublin landmark with strong SEO value.",
      de: "Der Long Room im Trinity College ist eines der ikonischsten Innenwahrzeichen Dublins. Seine Eichregale, das Gewölbe und die literarische Aura machen ihn zu einem Top-Suchergebnis für Bibliotheks- und Kulturtourismus in Irland. Der Raum ist eng mit dem Book of Kells und dem Ansehen des Trinity College Dublin verbunden. Es ist ein visuell reiches, sofort erkennbares Dubliner Wahrzeichen mit starkem SEO-Wert.",
      hu: "A Trinity College Long Roomja Dublin egyik legikonikusabb beltéri nevezetessége. Tölgyfa polcai, boltozatos mennyezete és irodalmi hangulata miatt kiemelt keresési találat a könyvtár- és történelmi turizmusban. A terem szorosan kapcsolódik a Book of Kellshez és a Trinity College Dublin rangjához. Látványos, azonnal felismerhető dublini jelkép, erős SEO-értékkel.",
      ro: "Long Room de la Trinity College este unul dintre cele mai iconice repere interioare ale Dublinului. Rafturile de stejar, tavanul boltit și aura literară îl fac un rezultat de top pentru turismul de bibliotecă și istorie din Irlanda. Sala este strâns legată de Book of Kells și de prestigiul Trinity College Dublin. Este un reper dublinnez foarte vizual și imediat recognoscibil, cu valoare SEO puternică."
    },
    facts: {
      en: ["The Long Room is part of Trinity College Dublin.", "It is famous for its long vaulted hall.", "The Book of Kells is associated with the site.", "It is one of Ireland's most photographed interiors.", "The room is central to Dublin literary tourism."],
      de: ["Der Long Room gehört zum Trinity College Dublin.", "Er ist berühmt für seine lange Gewölbehalle.", "Das Book of Kells ist mit dem Ort verbunden.", "Er ist eines der meistfotografierten Innenräume Irlands.", "Der Raum ist zentral für den literarischen Tourismus in Dublin."],
      hu: ["A Long Room a Trinity College Dublin része.", "Híres hosszú boltozatos terméről.", "A Book of Kells kapcsolódik hozzá.", "Írország egyik legtöbbet fényképezett belső tere.", "A terem központi eleme Dublin irodalmi turizmusának."],
      ro: ["Long Room face parte din Trinity College Dublin.", "Este celebră pentru sala sa lungă boltită.", "Book of Kells este asociată cu acest loc.", "Este unul dintre cele mai fotografiate interioare din Irlanda.", "Sala este centrală pentru turismul literar din Dublin."]
    },
    image: "/geo-images/ireland/trinity-long-room.webp",
  }
  ,
  {
    id: "landmark-dublin-castle",
    type: "landmark",
    parent: "ireland",
    coords: [-6.2663, 53.3430],
    name: { de: "Dublin Castle", hu: "Dublin Castle", ro: "Castelul Dublin", en: "Dublin Castle" },
    description: {
      en: "Dublin Castle is a central landmark for Irish state history and a must-see in the city center. It served as a seat of British rule and later became a ceremonial and governmental site for independent Ireland. The castle combines medieval foundations, Georgian additions, and major state rooms. It is a powerful keyword for Dublin heritage, politics, and guided city visits.",
      de: "Dublin Castle ist ein zentrales Wahrzeichen der irischen Staatsgeschichte und ein Muss im Stadtzentrum. Es diente als Sitz der britischen Herrschaft und wurde später ein zeremonieller und staatlicher Ort des unabhängigen Irlands. Die Burg verbindet mittelalterliche Fundamente, georgianische Ergänzungen und bedeutende Staatsräume. Sie ist ein starkes Keyword für Dubliner Kulturerbe, Politik und geführte Stadtbesuche.",
      hu: "A Dublin Castle az ír államtörténet központi nevezetessége és a belváros kihagyhatatlan pontja. A brit uralom székhelye volt, később pedig az önálló Írország ceremoniális és kormányzati helyszínévé vált. A vár középkori alapokat, georgiánus bővítéseket és fontos állami termeket egyesít. Erős kulcsszó Dublin öröksége, politikája és városnézése szempontjából.",
      ro: "Castelul Dublin este un reper central pentru istoria statului irlandez și o vizită obligatorie în centrul orașului. A servit ca sediu al guvernării britanice și apoi a devenit un sit ceremonial și guvernamental pentru Irlanda independentă. Castelul combină fundații medievale, adăugiri georgiene și săli de stat importante. Este un cuvânt-cheie puternic pentru patrimoniul Dublinului, politică și tururi ghidate ale orașului."
    },
    facts: {
      en: ["Dublin Castle sits in the historic city center.", "It was a British administrative center for centuries.", "The site now hosts state events and tours.", "Its State Apartments are a major highlight.", "It is one of Dublin's core historic landmarks."],
      de: ["Dublin Castle liegt im historischen Zentrum.", "Es war jahrhundertelang ein britisches Verwaltungszentrum.", "Heute finden dort Staatsveranstaltungen und Führungen statt.", "Die State Apartments sind ein Hauptanziehungspunkt.", "Es gehört zu Dublins wichtigsten historischen Wahrzeichen."],
      hu: ["A Dublin Castle a történelmi belvárosban áll.", "Évszázadokon át brit közigazgatási központ volt.", "Ma állami rendezvényeknek és túráknak ad otthont.", "A State Apartments a fő látványossága.", "Dublin egyik alapvető történelmi nevezetessége."],
      ro: ["Castelul Dublin se află în centrul istoric al orașului.", "A fost secole întregi un centru administrativ britanic.", "Astăzi găzduiește evenimente de stat și tururi.", "State Apartments sunt un punct de atracție major.", "Este unul dintre reperele istorice esențiale ale Dublinului."]
    },
    image: "/geo-images/ireland/dublin-castle.webp",
  },
  {
    id: "landmark-st-patricks-cathedral",
    type: "landmark",
    parent: "ireland",
    coords: [-6.2744, 53.3397],
    name: { de: "St. Patrick's Cathedral", hu: "Szent Patrik-katedrális", ro: "Catedrala Sf. Patrick", en: "St. Patrick's Cathedral" },
    description: {
      en: "St. Patrick's Cathedral is Dublin's largest church and a defining landmark of Irish religious heritage. Its Gothic architecture, memorials, and literary links make it a strong search topic for Dublin sightseeing. The cathedral is closely tied to Saint Patrick and long-running urban history on the south side of the city. It is both a spiritual site and a major piece of the capital's visual identity.",
      de: "Die St. Patrick's Cathedral ist die größte Kirche Dublins und ein prägendes Wahrzeichen des irischen religiösen Erbes. Ihre gotische Architektur, Denkmäler und literarischen Bezüge machen sie zu einem starken Suchthema für Dubliner Sehenswürdigkeiten. Die Kathedrale ist eng mit dem heiligen Patrick und der langen Stadtgeschichte auf der Südseite verbunden. Sie ist sowohl ein spiritueller Ort als auch ein wichtiges Element der visuellen Identität der Hauptstadt.",
      hu: "A Szent Patrik-katedrális Dublin legnagyobb temploma és az ír vallási örökség meghatározó nevezetessége. Gótikus építészete, emlékművei és irodalmi kapcsolatai miatt erős keresési téma Dublin látnivalóinak körében. A katedrális szorosan kötődik Szent Patrikhoz és a város déli oldalának hosszú történetéhez. Egyszerre spirituális helyszín és a főváros vizuális identitásának fontos része.",
      ro: "Catedrala Sf. Patrick este cea mai mare biserică din Dublin și un reper definitoriu al patrimoniului religios irlandez. Arhitectura gotică, memorialele și legăturile literare o fac un subiect puternic pentru căutările despre obiectivele Dublinului. Catedrala este strâns legată de Sfântul Patrick și de istoria urbană de lungă durată a părții sudice a orașului. Este atât un loc spiritual, cât și o piesă majoră a identității vizuale a capitalei."
    },
    facts: {
      en: ["It is the largest church in Dublin.", "It is linked to Saint Patrick.", "The cathedral dates back to medieval Dublin.", "Jonathan Swift served there as dean.", "It is a key stop on Dublin sightseeing routes."],
      de: ["Es ist die größte Kirche Dublins.", "Es ist mit dem heiligen Patrick verbunden.", "Die Kathedrale geht auf das mittelalterliche Dublin zurück.", "Jonathan Swift war dort Dekan.", "Sie ist ein wichtiger Halt auf Dubliner Rundgängen."],
      hu: ["Ez Dublin legnagyobb temploma.", "Szent Patrikhoz kapcsolódik.", "A katedrális a középkori Dublinig nyúlik vissza.", "Jonathan Swift is itt szolgált dékánként.", "Fontos állomás a dublini városnézésben."],
      ro: ["Este cea mai mare biserică din Dublin.", "Este legată de Sfântul Patrick.", "Catedrala datează din Dublinul medieval.", "Jonathan Swift a fost aici decan.", "Este o oprire cheie pe traseele turistice din Dublin."]
    },
    image: "/geo-images/ireland/st-patricks-cathedral.webp",
  },
  {
    id: "landmark-the-spire",
    type: "landmark",
    parent: "ireland",
    coords: [-6.2604, 53.3498],
    name: { de: "The Spire", hu: "A Spire", ro: "The Spire", en: "The Spire" },
    description: {
      en: "The Spire is Dublin's modern vertical landmark and one of the most recognizable city-center symbols in Ireland. Rising from O'Connell Street, it creates a strong visual anchor for urban tourism and map searches. The monument is useful for SEO because it is simple, iconic, and closely associated with Dublin's contemporary identity. It contrasts old and new Dublin in a single sharp skyline feature.",
      de: "The Spire ist Dublins modernes vertikales Wahrzeichen und eines der bekanntesten Symbole im Stadtzentrum Irlands. Es erhebt sich auf der O'Connell Street und bildet einen starken visuellen Anker für Stadttourismus und Kartensuchen. Das Denkmal ist SEO-stark, weil es schlicht, ikonisch und eng mit Dublins heutiger Identität verbunden ist. Es kontrastiert altes und neues Dublin in einem einzigen klaren Skyline-Element.",
      hu: "A Spire Dublin modern függőleges jelképe és Írország egyik legfelismerhetőbb belvárosi szimbóluma. Az O'Connell Streeten emelkedik, így erős vizuális horgonyt ad a városi turizmusnak és a térképes kereséseknek. Az emlékmű SEO-szempontból is erős, mert egyszerű, ikonikus és szorosan kapcsolódik Dublin kortárs identitásához. Egyetlen tiszta városi sziluettben ütközteti a régi és az új Dublin képét.",
      ro: "The Spire este reperul vertical modern al Dublinului și unul dintre cele mai recognoscibile simboluri din centrul orașului în Irlanda. Se ridică pe O'Connell Street și oferă un punct vizual puternic pentru turism urban și căutări pe hartă. Monumentul este util pentru SEO deoarece este simplu, iconic și strâns asociat cu identitatea contemporană a Dublinului. El contrastează vechiul și noul Dublin într-un singur element clar de skyline."
    },
    facts: {
      en: ["The Spire stands on O'Connell Street.", "It is a modern Dublin landmark.", "It replaced the old Nelson's Pillar site.", "The structure is made of stainless steel.", "It is one of the city's simplest visual icons."],
      de: ["The Spire steht auf der O'Connell Street.", "Es ist ein modernes Dubliner Wahrzeichen.", "Es ersetzte den Standort der früheren Nelson's Pillar.", "Die Struktur besteht aus Edelstahl.", "Es ist eines der schlichtesten visuellen Symbole der Stadt."],
      hu: ["A Spire az O'Connell Streeten áll.", "Modern dublini nevezetesség.", "A régi Nelson's Pillar helyét váltotta.", "Rozsdamentes acélból készült.", "A város egyik legegyszerűbb vizuális ikonja."],
      ro: ["The Spire se află pe O'Connell Street.", "Este un reper modern al Dublinului.", "A înlocuit locul fostului Nelson's Pillar.", "Structura este din oțel inoxidabil.", "Este unul dintre cele mai simple simboluri vizuale ale orașului."]
    },
    image: "/geo-images/ireland/the-spire.webp",
  },
  {
    id: "landmark-belfast-city-hall",
    type: "landmark",
    parent: "ireland",
    coords: [-5.9262, 54.5964],
    name: { de: "Belfast City Hall", hu: "Belfast City Hall", ro: "Belfast City Hall", en: "Belfast City Hall" },
    description: {
      en: "Belfast City Hall is an iconic civic building and a central landmark in Northern Ireland's capital. Its grand dome and public square make it a strong search point for city tours, architecture, and Belfast travel. The building reflects the wealth and ambition of the city's industrial era. It is a highly photogenic symbol of Belfast's civic identity and urban pride.",
      de: "Belfast City Hall ist ein ikonisches Verwaltungsgebäude und ein zentrales Wahrzeichen der Hauptstadt Nordirlands. Seine große Kuppel und der öffentliche Platz machen es zu einem starken Suchpunkt für Stadtrundgänge, Architektur und Belfast-Reisen. Das Gebäude spiegelt den Wohlstand und Ehrgeiz der industriellen Ära der Stadt wider. Es ist ein äußerst fotogenes Symbol für Belfasts Bürgeridentität und städtischen Stolz.",
      hu: "A Belfast City Hall ikonikus közigazgatási épület és Észak-Írország fővárosának központi nevezetessége. Nagy kupolája és a nyilvános tér erős keresési ponttá teszi városi túrák, építészet és Belfast-utazás kapcsán. Az épület a város ipari korszakának gazdagságát és ambícióját tükrözi. Nagyon fotogén jelképe Belfast városi identitásának és polgári büszkeségének.",
      ro: "Belfast City Hall este o clădire civică emblematică și un reper central în capitala Irlandei de Nord. Domul său mare și piața publică îl transformă într-un punct puternic pentru tururi ale orașului, arhitectură și călătorii în Belfast. Clădirea reflectă bogăția și ambiția erei industriale a orașului. Este un simbol foarte fotogenic al identității civice și mândriei urbane a Belfastului."
    },
    facts: {
      en: ["It stands in Donegall Square.", "The building is a Belfast civic symbol.", "It reflects the city's Edwardian era wealth.", "The grounds often host public events.", "It is a key landmark in the city center."],
      de: ["Es steht am Donegall Square.", "Das Gebäude ist ein bürgerliches Symbol Belfasts.", "Es spiegelt den Wohlstand der Edwardianischen Zeit wider.", "Auf dem Gelände finden oft öffentliche Veranstaltungen statt.", "Es ist ein wichtiges Wahrzeichen im Stadtzentrum."],
      hu: ["A Donegall Square-en áll.", "Belfast polgári szimbóluma.", "A város Edward-kori gazdagságát tükrözi.", "A környéken gyakran tartanak nyilvános eseményeket.", "A belváros egyik fő nevezetessége."],
      ro: ["Se află în Donegall Square.", "Este un simbol civic al Belfastului.", "Reflectă bogăția orașului din epoca edwardiană.", "În zonă au loc adesea evenimente publice.", "Este un reper cheie din centrul orașului."]
    },
    image: "/geo-images/ireland/belfast-city-hall.webp",
  },
  {
    id: "landmark-port-of-cork",
    type: "port",
    parent: "ireland",
    coords: [-8.3164, 51.8976],
    name: { de: "Port of Cork", hu: "Cork kikötője", ro: "Portul Cork", en: "Port of Cork" },
    description: {
      en: "The Port of Cork is one of Ireland's major maritime gateways and a strong keyword for logistics and cruise tourism. It supports commercial shipping, ferry activity, and the wider economy of the south coast. The port also connects naturally with Cork City, Cobh, and the Irish Sea and Atlantic routes. It is an important part of the modern Irish port story and regional trade network.",
      de: "Der Port of Cork ist einer der wichtigsten Seehäfen Irlands und ein starkes Keyword für Logistik- und Kreuzfahrttourismus. Er unterstützt den Handelsschiffsverkehr, Fähraktivität und die Wirtschaft der Südküste. Der Hafen verbindet sich natürlich mit Cork City, Cobh sowie den Irischen-Meer- und Atlantikrouten. Er ist ein wichtiger Teil der modernen irischen Hafen- und Handelsgeschichte.",
      hu: "A Port of Cork Írország egyik fő tengeri kapuja és erős kulcsszó a logisztika és a hajókikötő turizmus terén. Teherhajózást, kompforgalmat és a déli part gazdaságát is szolgálja. A kikötő szervesen kapcsolódik Cork városához, Cobhhoz és az Ír-tenger, illetve az Atlanti-útvonalakhoz. A modern ír kikötőtörténet és a regionális kereskedelmi hálózat fontos része.",
      ro: "Portul Cork este una dintre principalele porți maritime ale Irlandei și un cuvânt-cheie puternic pentru logistică și turism de croazieră. Susține transportul comercial, feriboturile și economia coastei de sud. Portul se leagă natural de Cork City, Cobh și rutele din Marea Irlandei și Atlantic. Este o parte importantă a poveștii moderne a porturilor irlandeze și a rețelei regionale de comerț."
    },
    facts: {
      en: ["It is one of Ireland's main ports.", "The port supports cargo and cruise traffic.", "Cork Harbour is closely linked to it.", "It is important for south-coast trade.", "Port of Cork is a major maritime logistics keyword."],
      de: ["Es ist einer der wichtigsten Häfen Irlands.", "Der Hafen unterstützt Fracht- und Kreuzfahrtverkehr.", "Der Cork Harbour ist eng mit ihm verbunden.", "Er ist wichtig für den Handel an der Südküste.", "Port of Cork ist ein wichtiges Keyword für maritime Logistik."],
      hu: ["Írország egyik fő kikötője.", "Teher- és hajóforgalmat is kiszolgál.", "Szorosan kapcsolódik a Cork Harbourhoz.", "Fontos a déli part kereskedelme számára.", "A Port of Cork jelentős tengeri logisztikai kulcsszó."],
      ro: ["Este unul dintre principalele porturi ale Irlandei.", "Portul susține trafic de marfă și croaziere.", "Este strâns legat de Cork Harbour.", "Este important pentru comerțul de pe coasta de sud.", "Port of Cork este un cuvânt-cheie major pentru logistică maritimă."]
    },
    image: "/geo-images/ireland/port-of-cork.webp",
  },
  {
    id: "landmark-dublin-port",
    type: "port",
    parent: "ireland",
    coords: [-6.2228, 53.3490],
    name: { de: "Dublin Port", hu: "Dublin kikötője", ro: "Portul Dublin", en: "Dublin Port" },
    description: {
      en: "Dublin Port is the country's busiest ferry and freight gateway and a key search term for Irish transport. It sits close to the city center, linking the capital to Britain and continental trade routes. The port's role in logistics, tourism, and energy supply makes it central to Ireland's modern economy. It also anchors the city's long relationship with the sea and river mouth.",
      de: "Dublin Port ist Irlands verkehrsreichster Fähr- und Frachtknoten und ein wichtiges Suchwort für irischen Verkehr. Er liegt nahe am Stadtzentrum und verbindet die Hauptstadt mit Großbritannien und kontinentalen Handelsrouten. Die Rolle des Hafens in Logistik, Tourismus und Energieversorgung macht ihn zentral für die moderne irische Wirtschaft. Er verankert zudem die lange Beziehung der Stadt zum Meer und zur Flussmündung.",
      hu: "A Dublin Port az ország legforgalmasabb komp- és árufuvarozási kapuja, valamint fontos keresőkifejezés az ír közlekedés témájában. A belváros közelében fekszik, és összeköti a fővárost Nagy-Britanniával és a kontinentális kereskedelmi útvonalakkal. A kikötő logisztikai, turisztikai és energiaellátási szerepe miatt központi jelentőségű Írország modern gazdaságában. Emellett a város tengerrel és folyótorkolattal való hosszú kapcsolatát is megtestesíti.",
      ro: "Portul Dublin este cea mai aglomerată poartă de feribot și marfă din țară și un termen-cheie important pentru transportul irlandez. Se află aproape de centrul orașului și leagă capitala de Marea Britanie și de rutele comerciale continentale. Rolul portului în logistică, turism și aprovizionarea cu energie îl face central pentru economia modernă a Irlandei. De asemenea, ancorează relația îndelungată a orașului cu marea și gura de vărsare a râului."
    },
    facts: {
      en: ["Dublin Port is Ireland's busiest port.", "It handles ferries and freight.", "The port is close to the city center.", "It links Ireland with Britain and Europe.", "It is essential to the national supply chain."],
      de: ["Dublin Port ist Irlands verkehrsreichster Hafen.", "Er wickelt Fähren und Fracht ab.", "Der Hafen liegt nahe am Stadtzentrum.", "Er verbindet Irland mit Großbritannien und Europa.", "Er ist für die nationale Lieferkette unverzichtbar."],
      hu: ["A Dublin Port Írország legforgalmasabb kikötője.", "Komp- és áruforgalmat kezel.", "A belvároshoz közel fekszik.", "Összeköti Írországot Nagy-Britanniával és Európával.", "Nélkülözhetetlen a nemzeti ellátási láncban."],
      ro: ["Portul Dublin este cel mai aglomerat port al Irlandei.", "Gestionează feriboturi și marfă.", "Portul este aproape de centrul orașului.", "Leagă Irlanda de Marea Britanie și Europa.", "Este esențial pentru lanțul național de aprovizionare."]
    },
    image: "/geo-images/ireland/dublin-port.webp",
  }
  ,
  {
    id: "landmark-national-museum-archaeology",
    type: "landmark",
    parent: "ireland",
    coords: [-6.2541, 53.3409],
    name: { de: "National Museum of Ireland", hu: "Írország Nemzeti Múzeuma", ro: "National Museum of Ireland", en: "National Museum of Ireland" },
    description: {
      en: "The National Museum of Ireland in Dublin is a flagship cultural landmark for archaeology and Irish history. Its collections cover gold, bog bodies, weapons, and everyday objects that trace the island's long past. The museum is a strong keyword for educational travel, family visits, and rain-proof Dublin itineraries. It offers a deep, curated view of Ireland from prehistory to the modern era.",
      de: "Das National Museum of Ireland in Dublin ist ein Flaggschiff unter den kulturellen Wahrzeichen für Archäologie und irische Geschichte. Seine Sammlungen umfassen Gold, Moorleichen, Waffen und Alltagsgegenstände, die die lange Vergangenheit der Insel nachzeichnen. Das Museum ist ein starkes Keyword für Bildungstourismus, Familienbesuche und wetterfeste Dublin-Programme. Es bietet einen tiefen, kuratierten Blick auf Irland von der Urgeschichte bis zur Moderne.",
      hu: "A dublini Írország Nemzeti Múzeuma zászlóshajó kulturális nevezetesség régészet és ír történelem témában. Gyűjteményei aranyat, lápibeadványokat, fegyvereket és mindennapi tárgyakat tartalmaznak, amelyek végigkövetik a sziget hosszú múltját. A múzeum erős kulcsszó az oktatási utazás, családi látogatás és az esőbiztos dublini programok terén. Mély, kurált nézőpontot ad Írországról az őskortól a modern korig.",
      ro: "National Museum of Ireland din Dublin este un reper cultural de prim rang pentru arheologie și istorie irlandeză. Colecțiile sale includ aur, corpuri conservate în turbă, arme și obiecte cotidiene care urmăresc trecutul lung al insulei. Muzeul este un cuvânt-cheie puternic pentru turism educațional, vizite în familie și itinerarii Dublin pe vreme ploioasă. Oferă o perspectivă profundă și curată asupra Irlandei, de la preistorie până în epoca modernă."
    },
    facts: {
      en: ["It is a major Dublin museum.", "The archaeology branch is especially famous.", "Its collection includes the Ardagh Chalice.", "The museum is free to enter.", "It is central to Irish school and family visits."],
      de: ["Es ist ein großes Dubliner Museum.", "Der archäologische Zweig ist besonders berühmt.", "Die Sammlung umfasst den Ardagh Chalice.", "Der Eintritt ist frei.", "Es ist zentral für Schul- und Familienbesuche in Irland."],
      hu: ["Ez egy jelentős dublini múzeum.", "Különösen híres a régészeti részlege.", "Gyűjteményében megtalálható az Ardagh Chalice.", "A belépés ingyenes.", "Fontos helyszín iskolai és családi látogatásokhoz."],
      ro: ["Este un muzeu important din Dublin.", "Secția de arheologie este deosebit de celebră.", "Colecția include Ardagh Chalice.", "Intrarea este gratuită.", "Este central pentru vizite școlare și de familie în Irlanda."]
    },
    image: "/geo-images/ireland/national-museum-archaeology.webp",
  },
  {
    id: "landmark-the-custom-house",
    type: "landmark",
    parent: "ireland",
    coords: [-6.2487, 53.3498],
    name: { de: "The Custom House", hu: "Custom House", ro: "The Custom House", en: "The Custom House" },
    description: {
      en: "The Custom House is one of Dublin's finest neoclassical landmarks and a symbol of the city's riverfront. Designed by James Gandon, it remains central to Irish architectural tourism and cityscape photography. The building also carries strong historical meaning through fire, reconstruction, and state administration. It is a classic keyword for Dublin architecture, Georgian design, and waterfront heritage.",
      de: "The Custom House ist eines der besten neoklassizistischen Wahrzeichen Dublins und ein Symbol der Flussfront der Stadt. Von James Gandon entworfen, bleibt es zentral für irischen Architekturtourismus und Stadtfotografie. Das Gebäude hat auch durch Feuer, Wiederaufbau und staatliche Verwaltung starke historische Bedeutung. Es ist ein klassisches Keyword für Dubliner Architektur, georgianisches Design und Ufererbe.",
      hu: "A Custom House Dublin egyik legszebb neoklasszicista nevezetessége és a folyópart egyik jelképe. James Gandon tervezte, és ma is központi szerepet játszik az ír építészeti turizmusban és városképi fotózásban. Az épület a tűz, az újjáépítés és az államigazgatás miatt történelmileg is fontos. Klasszikus kulcsszó Dublin építészetére, georgiánus stílusára és vízparti örökségére.",
      ro: "The Custom House este unul dintre cele mai frumoase repere neoclasice ale Dublinului și un simbol al malului râului. Proiectată de James Gandon, rămâne centrală pentru turismul arhitectural irlandez și fotografia de cityscape. Clădirea are și o puternică semnificație istorică prin incendiu, reconstrucție și administrarea statului. Este un cuvânt-cheie clasic pentru arhitectura Dublinului, designul georgian și patrimoniul de pe malul apei."
    },
    facts: {
      en: ["The Custom House stands on the River Liffey.", "It was designed by James Gandon.", "It is a major neoclassical building.", "The structure has a dramatic fire history.", "It is one of Dublin's most photographed riverfront sites."],
      de: ["The Custom House steht am River Liffey.", "Es wurde von James Gandon entworfen.", "Es ist ein bedeutendes neoklassizistisches Gebäude.", "Das Gebäude hat eine dramatische Brandgeschichte.", "Es ist einer der meistfotografierten Orte an Dublins Flussufer."],
      hu: ["A Custom House a Liffey folyónál áll.", "James Gandon tervezte.", "Jelentős neoklasszicista épület.", "Dramatikus tűz története van.", "Dublin egyik legtöbbet fotózott folyóparti helye."],
      ro: ["The Custom House se află pe râul Liffey.", "A fost proiectată de James Gandon.", "Este o clădire neoclasică majoră.", "Structura are o istorie dramatică a incendiului.", "Este unul dintre cele mai fotografiate situri de pe malul râului din Dublin."]
    },
    image: "/geo-images/ireland/the-custom-house.webp",
  },
  {
    id: "landmark-belfast-harbour",
    type: "port",
    parent: "ireland",
    coords: [-5.8951, 54.6179],
    name: { de: "Belfast Harbour", hu: "Belfast Harbour", ro: "Portul Belfast", en: "Belfast Harbour" },
    description: {
      en: "Belfast Harbour is a key maritime complex and a major part of the city's industrial and cruise identity. It connects Belfast with trade, shipbuilding memory, and redevelopment on the waterfront. The harbour area is also relevant for tourism searches because of Titanic links and modern waterfront regeneration. Belfast Harbour remains one of the strongest keywords for Northern Ireland port travel.",
      de: "Belfast Harbour ist ein wichtiger Hafenkontakt und ein zentraler Teil der industriellen und Kreuzfahrtidentität der Stadt. Er verbindet Belfast mit Handel, Schiffbau-Erinnerung und Umgestaltung am Wasser. Das Hafengebiet ist auch für Tourismussuchen relevant, da es mit der Titanic und der modernen Uferentwicklung verbunden ist. Belfast Harbour bleibt eines der stärksten Keywords für den Hafen-Tourismus in Nordirland.",
      hu: "A Belfast Harbour fontos tengeri komplexum és a város ipari, valamint hajókikötő identitásának központi része. Összeköti Belfastot a kereskedelemmel, a hajógyártás emlékezetével és a vízparti átépítéssel. A kikötőterület turisztikai keresésekben is jelentős a Titanic-kapcsolat és a modern partmenti fejlesztések miatt. A Belfast Harbour Észak-Írország kikötőturizmusának egyik legerősebb kulcsszava.",
      ro: "Portul Belfast este un complex maritim-cheie și o parte majoră a identității industriale și de croazieră a orașului. Leagă Belfast de comerț, memoria construcțiilor navale și regenerarea zonei waterfront. Zona portuară este relevantă și pentru căutările turistice datorită legăturilor cu Titanic și reamenajării moderne a malului. Belfast Harbour rămâne unul dintre cele mai puternice cuvinte-cheie pentru turismul de port din Irlanda de Nord."
    },
    facts: {
      en: ["Belfast Harbour is central to the city's waterfront.", "It is tied to shipbuilding history.", "The Titanic story is closely linked to the area.", "Cruise traffic is part of its modern role.", "It is a major Northern Ireland port keyword."],
      de: ["Belfast Harbour ist zentral für die Uferfront der Stadt.", "Er ist mit der Schiffbaugeschichte verbunden.", "Die Titanic-Geschichte ist eng mit dem Gebiet verknüpft.", "Kreuzfahrtverkehr gehört zu seiner modernen Rolle.", "Es ist ein wichtiges Keyword für den Hafen Nordirlands."],
      hu: ["A Belfast Harbour a város vízpartjának központi része.", "A hajóépítés történetéhez kötődik.", "A Titanic története szorosan kapcsolódik hozzá.", "A modern szerepében a hajókikötő-forgalom is jelen van.", "Fontos északír kikötői kulcsszó."],
      ro: ["Belfast Harbour este central pentru malul apei al orașului.", "Este legat de istoria construcțiilor navale.", "Povestea Titanic este strâns asociată zonei.", "Traficul de croazieră face parte din rolul său modern.", "Este un cuvânt-cheie major pentru porturile din Irlanda de Nord."]
    },
    image: "/geo-images/ireland/belfast-harbour.webp",
  },
  {
    id: "landmark-shannon-free-zone",
    type: "industry",
    parent: "ireland",
    coords: [-8.8918, 52.7030],
    name: { de: "Shannon Free Zone", hu: "Shannon Free Zone", ro: "Shannon Free Zone", en: "Shannon Free Zone" },
    description: {
      en: "Shannon Free Zone is one of Ireland's landmark industrial and business zones and a major keyword for economic travel content. Built around Shannon Airport, it became a symbol of modern investment, export activity, and international business. The zone is central to discussions about Irish industry, aviation-linked development, and regional jobs. It offers a strong modern contrast to the historic and scenic sites elsewhere in the country.",
      de: "Die Shannon Free Zone ist eine der markanten Industrie- und Wirtschaftsflächen Irlands und ein wichtiges Keyword für Wirtschaftstourismus. Rund um den Shannon Airport entstanden, wurde sie zum Symbol für moderne Investitionen, Exportaktivitäten und internationales Geschäft. Die Zone ist zentral für Diskussionen über irische Industrie, luftfahrtnahen Ausbau und regionale Arbeitsplätze. Sie bildet einen starken modernen Kontrast zu den historischen und landschaftlichen Orten des Landes.",
      hu: "A Shannon Free Zone Írország egyik meghatározó ipari és üzleti övezete, valamint fontos kulcsszó a gazdasági turizmusban. A Shannon repülőtér köré épült, és a modern befektetés, exporttevékenység és nemzetközi üzlet szimbólumává vált. Az övezet központi szerepet játszik az ír ipar, a repülőgéphez kapcsolódó fejlesztések és a regionális munkahelyek témájában. Erős modern kontrasztot ad az ország történelmi és festői helyszínei mellett.",
      ro: "Shannon Free Zone este una dintre zonele industriale și de afaceri emblematice ale Irlandei și un cuvânt-cheie major pentru conținutul despre economia țării. Dezvoltată în jurul aeroportului Shannon, a devenit un simbol al investițiilor moderne, activității de export și afacerilor internaționale. Zona este centrală în discuțiile despre industria irlandeză, dezvoltarea legată de aviație și locurile de muncă regionale. Oferă un contrast modern puternic față de siturile istorice și naturale ale țării."
    },
    facts: {
      en: ["Shannon Free Zone is linked to Shannon Airport.", "It is a major Irish business and industry district.", "The zone is associated with export-oriented development.", "It helped define modern regional economic policy.", "It is a strong keyword for Irish industry content."],
      de: ["Die Shannon Free Zone ist mit dem Shannon Airport verbunden.", "Sie ist ein wichtiges irisches Wirtschafts- und Industriegebiet.", "Die Zone steht für exportorientierte Entwicklung.", "Sie prägte die moderne regionale Wirtschaftspolitik.", "Sie ist ein starkes Keyword für Industrieinhalte zu Irland."],
      hu: ["A Shannon Free Zone a Shannon repülőtérhez kapcsolódik.", "Fontos ír üzleti és ipari negyed.", "Az exportorientált fejlődéshez kötődik.", "Meghatározta a modern regionális gazdaságpolitikát.", "Erős kulcsszó az ír ipari tartalmakban."],
      ro: ["Shannon Free Zone este legată de aeroportul Shannon.", "Este un important district irlandez de afaceri și industrie.", "Zona este asociată cu dezvoltarea orientată spre export.", "A ajutat la definirea politicii economice regionale moderne.", "Este un cuvânt-cheie puternic pentru conținutul despre industria irlandeză."]
    },
    image: "/geo-images/ireland/shannon-free-zone.webp",
  },
  {
    id: "landmark-waterford-crystal",
    type: "industry",
    parent: "ireland",
    coords: [-7.1090, 52.2598],
    name: { de: "Waterford Crystal", hu: "Waterford Crystal", ro: "Waterford Crystal", en: "Waterford Crystal" },
    description: {
      en: "Waterford Crystal is a famous Irish manufacturing name and a strong tourism keyword for craftsmanship and luxury. The brand connects Waterford with premium design, export reputation, and a long tradition of skilled glassmaking. Visitors search for it as part of industrial heritage, factory visits, and Irish-made gifts. It is one of the clearest examples of Irish industry becoming a global brand story.",
      de: "Waterford Crystal ist ein berühmter irischer Produktionsname und ein starkes Tourismus-Keyword für Handwerk und Luxus. Die Marke verbindet Waterford mit Premiumdesign, Exportreputation und einer langen Glasmachertradition. Besucher suchen danach im Zusammenhang mit Industrieerbe, Werksbesuchen und Geschenken aus Irland. Es ist eines der klarsten Beispiele dafür, wie irische Industrie zu einer globalen Markengeschichte wurde.",
      hu: "A Waterford Crystal híres ír gyártómárka és erős turisztikai kulcsszó a kézművesség és a luxus témájában. A márka Waterfordot a prémium dizájnnal, az exporthírnévvel és az üvegművesség hosszú hagyományával köti össze. A látogatók ipari örökség, gyárlátogatás és ír ajándéktárgyak kapcsán keresik. Ez az egyik legtisztább példa arra, hogyan vált az ír ipar globális márkatörténetté.",
      ro: "Waterford Crystal este un nume celebru al producției irlandeze și un cuvânt-cheie puternic pentru meșteșug și lux. Brandul leagă Waterford de design premium, reputație de export și o lungă tradiție a sticlăriei. Vizitatorii îl caută pentru patrimoniu industrial, tururi de fabrică și cadouri made in Ireland. Este unul dintre cele mai clare exemple despre cum industria irlandeză a devenit o poveste globală de brand."
    },
    facts: {
      en: ["Waterford Crystal is a famous Irish brand.", "It is linked to glassmaking and craftsmanship.", "The name is associated with Waterford city.", "It is a key industrial heritage keyword.", "It is popular in luxury gift and tourism searches."],
      de: ["Waterford Crystal ist eine berühmte irische Marke.", "Sie ist mit Glasmacherei und Handwerk verbunden.", "Der Name ist mit der Stadt Waterford verbunden.", "Es ist ein wichtiges Keyword für Industrieerbe.", "Es ist beliebt bei Suchanfragen zu Luxusgeschenken und Tourismus."],
      hu: ["A Waterford Crystal híres ír márka.", "Az üvegművességhez és kézművességhez kötődik.", "A név Waterford városához kapcsolódik.", "Fontos ipari örökségi kulcsszó.", "Népszerű a luxusajándék és turisztikai keresésekben."],
      ro: ["Waterford Crystal este un brand irlandez celebru.", "Este legat de fabricarea sticlei și meșteșug.", "Numele este asociat cu orașul Waterford.", "Este un cuvânt-cheie important pentru patrimoniul industrial.", "Este popular în căutările pentru cadouri de lux și turism."]
    },
    image: "/geo-images/ireland/waterford-crystal.webp",
  },
  {
    id: "landmark-golden-vale",
    type: "agriculture",
    parent: "ireland",
    coords: [-8.2800, 52.2500],
    name: { de: "Golden Vale", hu: "Golden Vale", ro: "Golden Vale", en: "Golden Vale" },
    description: {
      en: "Golden Vale is one of Ireland's best-known agricultural regions and a powerful keyword for Irish farming tourism. The fertile landscape spans parts of Munster and is strongly associated with dairy production and pastureland. It represents the backbone of rural Irish food culture, export quality, and green landscape branding. Golden Vale is useful for content that connects agriculture, scenery, and traditional countryside identity.",
      de: "Golden Vale ist eine der bekanntesten Agrarregionen Irlands und ein starkes Keyword für irischen Landwirtschaftstourismus. Die fruchtbare Landschaft erstreckt sich über Teile von Munster und ist stark mit Milchproduktion und Weideland verbunden. Sie repräsentiert das Rückgrat der ländlichen irischen Esskultur, Exportqualität und grünen Landschaftsmarke. Golden Vale eignet sich gut für Inhalte, die Landwirtschaft, Landschaft und traditionelle Landidentität verbinden.",
      hu: "A Golden Vale Írország egyik legismertebb mezőgazdasági régiója és erős kulcsszó az ír farmturizmusban. A termékeny táj Munster részein terül el, és erősen kötődik a tejtermeléshez és a legelőkhöz. A vidéki ír gasztronómiai kultúra, az exportminőség és a zöld táj brandingjének gerincét jelképezi. A Golden Vale jól használható olyan tartalmakban, amelyek a mezőgazdaságot, a tájat és a hagyományos vidéki identitást kapcsolják össze.",
      ro: "Golden Vale este una dintre cele mai cunoscute regiuni agricole ale Irlandei și un cuvânt-cheie puternic pentru turismul agricol irlandez. Peisajul fertil se întinde în părți din Munster și este strâns asociat cu producția de lactate și pășunile. Reprezintă coloana vertebrală a culturii alimentare rurale irlandeze, a calității de export și a brandului de peisaj verde. Golden Vale este util pentru conținut care leagă agricultura, peisajul și identitatea tradițională de la țară."
    },
    facts: {
      en: ["Golden Vale is a fertile farming region.", "It is strongly associated with dairy production.", "It lies in parts of Munster.", "The area is important to rural Irish branding.", "Golden Vale is a classic agriculture keyword."],
      de: ["Golden Vale ist eine fruchtbare Agrarregion.", "Sie ist stark mit Milchproduktion verbunden.", "Sie liegt in Teilen von Munster.", "Das Gebiet ist wichtig für die ländliche irische Markenbildung.", "Golden Vale ist ein klassisches Landwirtschafts-Keyword."],
      hu: ["A Golden Vale termékeny mezőgazdasági régió.", "Erősen kötődik a tejtermeléshez.", "Munster részein található.", "Fontos a vidéki ír márkaépítés szempontjából.", "A Golden Vale klasszikus mezőgazdasági kulcsszó."],
      ro: ["Golden Vale este o regiune agricolă fertilă.", "Este strâns asociată cu producția de lactate.", "Se află în părți din Munster.", "Zona este importantă pentru brandingul rural irlandez.", "Golden Vale este un cuvânt-cheie clasic pentru agricultură."]
    },
    image: "/geo-images/ireland/golden-vale.webp",
  },
  {
    id: "city-naas",
    type: "city",
    parent: "ireland",
    coords: [-6.6616, 53.2158],
    name: { de: "Naas", hu: "Naas", ro: "Naas", en: "Naas" },
    description: {
      en: "Naas is a fast-growing town in County Kildare. It works as a commuter base and a practical local centre. The town is close to Dublin and the wider horse-country landscape. Naas is a useful keyword for short breaks and regional travel.",
      de: "Naas ist eine schnell wachsende Stadt im County Kildare. Sie dient als Pendlerbasis und praktisches lokales Zentrum. Der Ort liegt nahe an Dublin und der groesseren Pferdelandschaft. Naas ist ein nuetzliches Keyword fuer Kurztrips und Regionalreisen.",
      hu: "Naas egy gyorsan fejlodo varos County Kildare megyeben. Ingazoi baziskent es praktikus helyi kozpontkent mukodik. A varos kozel van Dublinhoz es a lovas videkhez. Naas hasznos kulcsszo rovid utazasokhoz es regionalis turizmushoz.",
      ro: "Naas este un oras in crestere rapida din County Kildare. Functioneaza ca baza de navetism si centru local practic. Orasul este aproape de Dublin si de peisajul mai larg al zonei calaretilor. Naas este un cuvant-cheie util pentru escapade scurte si calatorii regionale."
    },
    facts: {
      en: ["County town of Kildare.", "Close to Dublin routes.", "Strong retail and service base.", "Linked to horse-country tourism.", "Good for short-break searches."],
      de: ["Bezirkshauptort von Kildare.", "Nahe an Dublin-Routen.", "Starke Basis fuer Handel und Service.", "Mit Pferdeland-Tourismus verbunden.", "Gut fuer Kurzreise-Suchen."],
      hu: ["Kildare megye szekhelye.", "Kozel van a dublini utakhoz.", "Eros kereskedelmi es szolgaltatasi bazis.", "A lovas turizmushoz is kotodik.", "Jó rovid utazas keresesehez."],
      ro: ["Oras de resedinta in Kildare.", "Aproape de rutele spre Dublin.", "Baza puternica in retail si servicii.", "Legat de turismul zonei calaretilor.", "Bun pentru cautari de city break."]
    },
    image: "/geo-images/ireland/naas.webp",
  },
  {
    id: "city-portlaoise",
    type: "city",
    parent: "ireland",
    coords: [-7.3016, 53.0344],
    name: { de: "Portlaoise", hu: "Portlaoise", ro: "Portlaoise", en: "Portlaoise" },
    description: {
      en: "Portlaoise is the county town of Laois. It sits on a key Midlands travel corridor. The town offers rail access, shopping, and easy day-trip planning. Portlaoise is a strong keyword for central Ireland itineraries.",
      de: "Portlaoise ist die Bezirkshauptstadt von Laois. Sie liegt an einem wichtigen Reisekorridor der Midlands. Der Ort bietet Bahnanschluss, Shopping und einfache Tagesausflugsplanung. Portlaoise ist ein starkes Keyword fuer Zentralirland-Routen.",
      hu: "Portlaoise Laois megye szekhelye. Egy fontos midlandszi utazasi folyoson fekszik. A varos vasuti kapcsolatot, vasarlast es konnyu egynapos tervezest ad. Portlaoise eros kulcsszo Kozep-Irorszag utvonalaihoz.",
      ro: "Portlaoise este orasul de resedinta al comitatului Laois. Se afla pe un coridor important de calatorie din Midlands. Orasul ofera acces feroviar, shopping si planificare usoara pentru excursii de o zi. Portlaoise este un cuvant-cheie puternic pentru itinerariile din centrul Irlandei."
    },
    facts: {
      en: ["County town of Laois.", "On a Midlands corridor.", "Easy rail and road access.", "Good base for day trips.", "Compact visitor centre."],
      de: ["Bezirkshauptort von Laois.", "An einem Midlands-Korridor.", "Gute Bahn- und Strassenanbindung.", "Praktische Basis fuer Tagesausfluege.", "Kompaktes Besucherzentrum."],
      hu: ["Laois megye szekhelye.", "Midlands folyoson fekszik.", "Jó vasuti es kozuti kapcsolat.", "Jo bazis egynapos kirandulasokhoz.", "Kompakt latogatoi kozpont."],
      ro: ["Oras de resedinta in Laois.", "Pe un coridor din Midlands.", "Acces bun feroviar si rutier.", "Baza buna pentru excursii de o zi.", "Centru compact pentru vizitatori."]
    },
    image: "/geo-images/ireland/portlaoise.webp",
  },
  {
    id: "city-mullingar",
    type: "city",
    parent: "ireland",
    coords: [-7.3355, 53.5245],
    name: { de: "Mullingar", hu: "Mullingar", ro: "Mullingar", en: "Mullingar" },
    description: {
      en: "Mullingar is a lively Midlands town in Westmeath. It works as a base between Dublin and the west of Ireland. The town has strong local commerce and easy access to lakes and countryside. Mullingar is a reliable keyword for central Ireland travel.",
      de: "Mullingar ist eine lebendige Midlands-Stadt in Westmeath. Sie dient als Basis zwischen Dublin und dem Westen Irlands. Der Ort hat starken lokalen Handel und guten Zugang zu Seen und Landschaft. Mullingar ist ein verlaessliches Keyword fuer Zentralirland-Reisen.",
      hu: "Mullingar egy elelénk midlandszi varos Westmeath megyeben. Dublin es Nyugat-Irorszag kozott jo baziskent mukodik. A varos eros helyi kereskedelmet es jo hozzafertest ad tavakhoz es videkhez. Mullingar megbizhato kulcsszo a kozep-irorszagi utazasokhoz.",
      ro: "Mullingar este un oras animat din Midlands, in Westmeath. Functioneaza ca baza intre Dublin si vestul Irlandei. Orasul are comert local puternic si acces usor la lacuri si peisaj rural. Mullingar este un cuvant-cheie sigur pentru calatoriile in centrul Irlandei."
    },
    facts: {
      en: ["Located in Westmeath.", "Midlands travel base.", "Close to lakes and countryside.", "Useful between Dublin and west.", "Strong central Ireland keyword."],
      de: ["In Westmeath gelegen.", "Basis fuer Midlands-Reisen.", "Nahe an Seen und Landschaft.", "Nuetzlich zwischen Dublin und Westen.", "Starkes Zentralirland-Keyword."],
      hu: ["Westmeathben talalhato.", "Midlands utazasi bazis.", "Kozel a tavakhoz es videkhez.", "Jo Dublin es nyugat kozott.", "Eros kozep-irorszagi kulcsszo."],
      ro: ["Situat in Westmeath.", "Baza de calatorie in Midlands.", "Aproape de lacuri si peisaj rural.", "Util intre Dublin si vest.", "Cuvant-cheie puternic pentru centrul Irlandei."]
    },
    image: "/geo-images/ireland/mullingar.webp",
  },
  {
    id: "city-tullamore",
    type: "city",
    parent: "ireland",
    coords: [-7.4947, 53.2736],
    name: { de: "Tullamore", hu: "Tullamore", ro: "Tullamore", en: "Tullamore" },
    description: {
      en: "Tullamore is the county town of Offaly. It has a clear Midlands identity and a strong link to whiskey history. The town works well for shopping, short stays, and local travel. Tullamore is a useful keyword for central county trips.",
      de: "Tullamore ist die Bezirkshauptstadt von Offaly. Sie hat eine klare Midlands-Identitaet und eine starke Verbindung zur Whiskygeschichte. Der Ort eignet sich gut fuer Shopping, Kurzaufenthalte und lokale Reisen. Tullamore ist ein nuetzliches Keyword fuer Reisen in zentrale Countys.",
      hu: "Tullamore Offaly megye szekhelye. Egyertelmu midlandszi identitasa es eros whiskeytorteneti kapcsolata van. A varos jo vasarlashoz, rovid ottlethez es helyi utazasokhoz. Tullamore hasznos kulcsszo a kozponti megyek utjaihoz.",
      ro: "Tullamore este orasul de resedinta al comitatului Offaly. Are o identitate clara de Midlands si o legatura puternica cu istoria whiskey-ului. Orasul este bun pentru shopping, sejururi scurte si calatorii locale. Tullamore este un cuvant-cheie util pentru excursiile din comitatele centrale."
    },
    facts: {
      en: ["County town of Offaly.", "Linked to whiskey history.", "Strong Midlands identity.", "Good for short stays.", "Useful county-trip keyword."],
      de: ["Bezirkshauptort von Offaly.", "Mit Whiskygeschichte verbunden.", "Starke Midlands-Identitaet.", "Gut fuer Kurzaufenthalte.", "Nuetzliches Keyword fuer County-Trips."],
      hu: ["Offaly megye szekhelye.", "A whiskeytortenethez kotodik.", "Eros midlandszi identitas.", "Jo rovid ottlethez.", "Hasznos megyei utazas kulcsszo."],
      ro: ["Oras de resedinta in Offaly.", "Legat de istoria whiskey-ului.", "Identitate puternica de Midlands.", "Bun pentru sejururi scurte.", "Cuvant-cheie util pentru excursii in comitate."]
    },
    image: "/geo-images/ireland/tullamore.webp",
  },
  {
    id: "city-carrick-on-shannon",
    type: "city",
    parent: "ireland",
    coords: [-8.0943, 53.9460],
    name: { de: "Carrick-on-Shannon", hu: "Carrick-on-Shannon", ro: "Carrick-on-Shannon", en: "Carrick-on-Shannon" },
    description: {
      en: "Carrick-on-Shannon is a compact county town in Leitrim. It sits on the River Shannon and has a strong boating feel. The town is useful for short breaks and west of Ireland routes. Carrick-on-Shannon is a strong keyword for river travel.",
      de: "Carrick-on-Shannon ist eine kompakte Bezirkshauptstadt in Leitrim. Sie liegt an der Shannon und hat einen starken Bootscharakter. Der Ort ist nuetzlich fuer Kurzurlaube und Routen im Westen Irlands. Carrick-on-Shannon ist ein starkes Keyword fuer Flussreisen.",
      hu: "Carrick-on-Shannon egy kompakt megyekozpont Leitrimben. A Shannon partjan fekszik, es eros hajos hangulata van. A varos hasznos rovid pihenésekhez es nyugat-irorszagi utvonalakhoz. Carrick-on-Shannon eros kulcsszo a folyami utazasokhoz.",
      ro: "Carrick-on-Shannon este un oras de resedinta compact in Leitrim. Se afla pe raul Shannon si are o atmosfera puternica de navigatie. Orasul este util pentru escapade scurte si rute spre vestul Irlandei. Carrick-on-Shannon este un cuvant-cheie puternic pentru calatoriile pe rau."
    },
    facts: {
      en: ["County town of Leitrim.", "On the River Shannon.", "Popular for boating breaks.", "Compact and easy to visit.", "Good west Ireland base."],
      de: ["Bezirkshauptort von Leitrim.", "An der Shannon gelegen.", "Beliebt fuer Boots-Kurzurlaube.", "Kompakt und leicht zu besuchen.", "Gute Basis fuer den Westen."],
      hu: ["Leitrim megye szekhelye.", "A Shannon partjan van.", "Népszeru hajos pihenésekhez.", "Kicsi es konnyen bejarhato.", "Jo bazis a nyugat fele."],
      ro: ["Oras de resedinta in Leitrim.", "Pe raul Shannon.", "Popular pentru escapade cu barca.", "Compact si usor de vizitat.", "Baza buna pentru vestul Irlandei."]
    },
    image: "/geo-images/ireland/carrick-on-shannon.webp",
  },
  {
    id: "city-cavan",
    type: "city",
    parent: "ireland",
    coords: [-7.3613, 53.9908],
    name: { de: "Cavan", hu: "Cavan", ro: "Cavan", en: "Cavan" },
    description: {
      en: "Cavan is the county town of Cavan. It is a practical gateway to the lakeland north midlands. The town is useful for border-region travel and local services. Cavan is a reliable keyword for inland Ireland trips.",
      de: "Cavan ist die Bezirkshauptstadt von Cavan. Sie ist ein praktisches Tor zu den Seenlandschaften der nördlichen Midlands. Der Ort ist nuetzlich fuer Grenzregion-Reisen und lokale Dienste. Cavan ist ein verlaessliches Keyword fuer Reisen ins irische Binnenland.",
      hu: "Cavan Cavan megye szekhelye. Gyakorlati kapu az eszaki midlandszi tavak vilagahoz. A varos jo hatarvideki utazasokhoz es helyi szolgaltatasokhoz. Cavan megbizhato kulcsszo az irorszagi belso utazasokhoz.",
      ro: "Cavan este orasul de resedinta al comitatului Cavan. Este o poarta practica spre zona lacurilor din nordul Midlands. Orasul este util pentru calatorii in zona de granita si pentru servicii locale. Cavan este un cuvant-cheie sigur pentru excursiile in interiorul Irlandei."
    },
    facts: {
      en: ["County town of Cavan.", "Gateway to lakeland routes.", "Useful near the border region.", "Local services hub.", "Good inland travel keyword."],
      de: ["Bezirkshauptort von Cavan.", "Tor zu Seenrouten.", "Nuetzlich nahe der Grenzregion.", "Zentrum fuer lokale Dienste.", "Gutes Binnenreise-Keyword."],
      hu: ["Cavan megye szekhelye.", "Kaput ad a tavak utvonalaihoz.", "Hasznos a hatarvidek kozeleben.", "Helyi szolgaltatasi kozpont.", "Jó belso utazasi kulcsszo."],
      ro: ["Oras de resedinta in Cavan.", "Poarta spre rutele cu lacuri.", "Util aproape de zona de granita.", "Centru local de servicii.", "Cuvant-cheie bun pentru calatorii interne."]
    },
    image: "/geo-images/ireland/cavan.webp",
  },
  {
    id: "city-monaghan",
    type: "city",
    parent: "ireland",
    coords: [-6.9663, 54.2490],
    name: { de: "Monaghan", hu: "Monaghan", ro: "Monaghan", en: "Monaghan" },
    description: {
      en: "Monaghan is the county town of Monaghan. It has a compact centre and a strong border-area role. The town is useful for short stays and cross-border travel. Monaghan fits small-town Ireland content well.",
      de: "Monaghan ist die Bezirkshauptstadt von Monaghan. Sie hat ein kompaktes Zentrum und eine starke Rolle im Grenzgebiet. Der Ort ist nuetzlich fuer Kurzaufenthalte und grenzueberschreitende Reisen. Monaghan passt gut zu Inhalten ueber das kleine irische Stadtleben.",
      hu: "Monaghan Monaghan megye szekhelye. Kompakt varoskozpontja es eros hatarvideki szerepe van. A varos hasznos rovid ottletekhez es hataron atnyulo utazasokhoz. Monaghan jol illik a kisméretu irorszagi varosi tartalmakhoz.",
      ro: "Monaghan este orasul de resedinta al comitatului Monaghan. Are un centru compact si un rol puternic in zona de granita. Orasul este util pentru sejururi scurte si calatorii transfrontaliere. Monaghan se potriveste bine continutului despre orasele mici din Irlanda."
    },
    facts: {
      en: ["County town of Monaghan.", "Strong border-area base.", "Compact and walkable centre.", "Good for short stays.", "Useful cross-border keyword."],
      de: ["Bezirkshauptort von Monaghan.", "Starke Basis im Grenzgebiet.", "Kompaktes, gut begehbares Zentrum.", "Gut fuer Kurzaufenthalte.", "Nuetzliches Grenzreise-Keyword."],
      hu: ["Monaghan megye szekhelye.", "Eros bazis a hatarvideken.", "Kompakt es setalhato kozpont.", "Jo rovid ottlethez.", "Hasznos hataron atnyulo kulcsszo."],
      ro: ["Oras de resedinta in Monaghan.", "Baza puternica in zona de granita.", "Centru compact si usor de parcurs.", "Bun pentru sejururi scurte.", "Cuvant-cheie util pentru calatorii transfrontaliere."]
    },
    image: "/geo-images/ireland/monaghan.webp",
  },
  {
    id: "city-letterkenny",
    type: "city",
    parent: "ireland",
    coords: [-7.7409, 54.9503],
    name: { de: "Letterkenny", hu: "Letterkenny", ro: "Letterkenny", en: "Letterkenny" },
    description: {
      en: "Letterkenny is the largest town in Donegal. It works as a northwest hub for shopping and travel. The town is a strong base for coast, mountain, and border routes. Letterkenny is a high-value keyword for Donegal trips.",
      de: "Letterkenny ist die groesste Stadt in Donegal. Sie dient als Nordwest-Knotenpunkt fuer Shopping und Reisen. Der Ort ist eine starke Basis fuer Kueste, Berge und Grenzrouten. Letterkenny ist ein wertvolles Keyword fuer Donegal-Reisen.",
      hu: "Letterkenny Donegal legnagyobb varosa. Eszaknyugati kozpontkent mukodik vasarlasra es utazasra. A varos jo bazis part, hegyek es hatarutvonalak fele. Letterkenny nagy erteku kulcsszo a Donegal utazasokhoz.",
      ro: "Letterkenny este cel mai mare oras din Donegal. Functioneaza ca hub pentru nord-vest in shopping si calatorie. Orasul este o baza puternica pentru rute de coasta, munte si granita. Letterkenny este un cuvant-cheie valoros pentru excursiile in Donegal."
    },
    facts: {
      en: ["Largest town in Donegal.", "Northwest travel hub.", "Good base for road trips.", "Close to coast and mountains.", "Strong Donegal keyword."],
      de: ["Groesste Stadt in Donegal.", "Nordwestlicher Reiseknotenpunkt.", "Gute Basis fuer Roadtrips.", "Nahe an Kueste und Bergen.", "Starkes Donegal-Keyword."],
      hu: ["Donegal legnagyobb varosa.", "Eszaknyugati utazasi kozpont.", "Jo bazis autos utakhoz.", "Kozel a parthoz es hegyekhez.", "Eros Donegal kulcsszo."],
      ro: ["Cel mai mare oras din Donegal.", "Hub de calatorie pentru nord-vest.", "Baza buna pentru drumuri lungi.", "Aproape de coasta si munti.", "Cuvant-cheie puternic pentru Donegal."]
    },
    image: "/geo-images/ireland/letterkenny.webp",
  },
  {
    id: "city-killarney",
    type: "city",
    parent: "ireland",
    coords: [-9.5086, 52.0591],
    name: { de: "Killarney", hu: "Killarney", ro: "Killarney", en: "Killarney" },
    description: {
      en: "Killarney is one of Ireland's best-known visitor towns. It sits beside lakes and mountains in Kerry. The town has a strong hotel and tour economy. Killarney is a top keyword for scenic Ireland content.",
      de: "Killarney ist eine der bekanntesten Besucherstaedte Irlands. Sie liegt in Kerry neben Seen und Bergen. Der Ort hat eine starke Hotel- und Tourenwirtschaft. Killarney ist ein Top-Keyword fuer landschaftliche Irland-Inhalte.",
      hu: "Killarney Irorszag egyik legismertebb turisztikai varosa. Kerry megyeben tavak es hegyek mellett fekszik. A varosnak eros hotel- es turíras gazdasaga van. Killarney elso osztalyu kulcsszo a festoi irorszagi tartalmakhoz.",
      ro: "Killarney este unul dintre cele mai cunoscute orase turistice ale Irlandei. Se afla langa lacuri si munti in Kerry. Orasul are o economie solida de hoteluri si tururi. Killarney este un cuvant-cheie de top pentru continutul scenic despre Irlanda."
    },
    facts: {
      en: ["Major Kerry visitor town.", "Near lakes and mountains.", "Strong hotel and tour base.", "Popular for day-trip planning.", "Top scenic travel keyword."],
      de: ["Wichtige Besucherstadt in Kerry.", "Nahe an Seen und Bergen.", "Starke Hotel- und Tourbasis.", "Beliebt fuer Tagesausfluege.", "Top-Keyword fuer Landschaftsreisen."],
      hu: ["Fontos Kerry turisztikai varos.", "Tavakhoz es hegyekhez kozel.", "Eros hotel- es turíras bazis.", "Népszeru egynapos tervezeshez.", "Elso osztalyu festoi kulcsszo."],
      ro: ["Oras turistic major in Kerry.", "Aproape de lacuri si munti.", "Baza puternica de hoteluri si tururi.", "Popular pentru excursii de o zi.", "Cuvant-cheie de top pentru peisaje."]
    },
    image: "/geo-images/ireland/killarney.webp",
  },
  {
    id: "city-clonmel",
    type: "city",
    parent: "ireland",
    coords: [-7.7039, 52.3550],
    name: { de: "Clonmel", hu: "Clonmel", ro: "Clonmel", en: "Clonmel" },
    description: {
      en: "Clonmel is a busy south Tipperary town. It has a strong commercial core and a river setting. The town is a practical base for the Suir valley. Clonmel is a useful keyword for southeast Ireland travel.",
      de: "Clonmel ist eine lebendige Stadt im Sueden von Tipperary. Sie hat einen starken Geschaeftskern und eine Flusslage. Der Ort ist eine praktische Basis fuer das Suir-Tal. Clonmel ist ein nuetzliches Keyword fuer Reisen im Suedosten Irlands.",
      hu: "Clonmel egy nyuzsgo deli Tipperary-i varos. Eros kereskedelmi kozpontja es folyoparti fekvesse van. A varos praktikus bazis a Suir-völgy felfedezesere. Clonmel hasznos kulcsszo a delkelet-irorszagi utazasokhoz.",
      ro: "Clonmel este un oras agitat din sudul Tipperary. Are un centru comercial puternic si o pozitie pe rau. Orasul este o baza practica pentru valea Suir. Clonmel este un cuvant-cheie util pentru calatoriile din sud-estul Irlandei."
    },
    facts: {
      en: ["Important town in South Tipperary.", "Set in the Suir valley.", "Commercial and food-focused base.", "Good for southeast routes.", "Near several historic stops."],
      de: ["Wichtige Stadt in Sued-Tipperary.", "In der Suir-Tal-Lage.", "Kommmerzieller und foodie-freundlicher Ort.", "Gut fuer Routen im Suedosten.", "Nahe bei mehreren historischen Zielen."],
      hu: ["Fontos varos South Tipperaryben.", "A Suir-völgyben fekszik.", "Kereskedelmi es gasztronomiai kozpont.", "Jo delkelet-irorszagi utvonalakhoz.", "Tobble tortenelmi hely kozeleben van."],
      ro: ["Oras important in South Tipperary.", "Situat in valea Suir.", "Baza comerciala si culinara.", "Bun pentru rute in sud-est.", "Aproape de mai multe situri istorice."]
    },
    image: "/geo-images/ireland/clonmel.webp",
  },
  {
    id: "city-dungarvan",
    type: "city",
    parent: "ireland",
    coords: [-7.6253, 52.0917],
    name: { de: "Dungarvan", hu: "Dungarvan", ro: "Dungarvan", en: "Dungarvan" },
    description: {
      en: "Dungarvan is a coastal town in Waterford. It has a strong harbour feel and a lively food scene. The town is a gateway to the Waterford Greenway and west Waterford coast. Dungarvan is a strong keyword for the southeast coast.",
      de: "Dungarvan ist eine Kuestenstadt in Waterford. Sie hat starken Hafencharakter und eine lebendige Food-Szene. Der Ort ist ein Tor zum Waterford Greenway und zur West-Waterford-Kueste. Dungarvan ist ein starkes Keyword fuer die Suedostkueste.",
      hu: "Dungarvan egy tengerparti varos Waterford megyeben. Erős kikotohangulata es elelénk gasztronomiai elet van. A varos kapu a Waterford Greenway es Nyugat-Waterford partja fele. Dungarvan eros kulcsszo a delkeleti part menten.",
      ro: "Dungarvan este un oras de coasta in Waterford. Are atmosfera de port si o scena gastronomica vie. Orasul este o poarta spre Waterford Greenway si coasta de vest a Waterfordului. Dungarvan este un cuvant-cheie puternic pentru coasta de sud-est."
    },
    facts: {
      en: ["Coastal town in Waterford.", "Gateway to the Greenway.", "Strong seafood appeal.", "Has a harbour atmosphere.", "Good southeast coast keyword."],
      de: ["Kuestenstadt in Waterford.", "Tor zum Greenway.", "Stark fuer Seafood-Reiz.", "Mit Hafenatmosphaere.", "Gutes Keyword fuer die Suedostkueste."],
      hu: ["Waterfordi tengerparti varos.", "Kaput ad a Greenway-hez.", "Eros tengeri eteles vonzerő.", "Jellegzetes kikotohangulata van.", "Jó delkeleti parti kulcsszo."],
      ro: ["Oras de coasta in Waterford.", "Poarta spre Greenway.", "Atractiv pentru fructe de mare.", "Are atmosfera de port.", "Cuvant-cheie bun pentru coasta de sud-est."]
    },
    image: "/geo-images/ireland/dungarvan.webp",
  },
  {
    id: "city-mallow",
    type: "city",
    parent: "ireland",
    coords: [-8.6437, 52.1338],
    name: { de: "Mallow", hu: "Mallow", ro: "Mallow", en: "Mallow" },
    description: {
      en: "Mallow is a County Cork town with a convenient road and rail position. It is a common base for north Cork and the Blackwater valley. The town mixes services, shopping, and rural access. Mallow is a solid keyword for inland Cork travel.",
      de: "Mallow ist eine Stadt im County Cork mit guenstiger Strassen- und Bahnlage. Sie ist eine haeufige Basis fuer Nord-Cork und das Blackwater-Tal. Der Ort verbindet Dienstleistungen, Shopping und Zugang zur laendlichen Landschaft. Mallow ist ein solides Keyword fuer Reisen ins Innere von Cork.",
      hu: "Mallow Cork megye varosa, kedvezo kozuti es vasuti helyzettel. Gyakori bazis Eszak-Cork es a Blackwater-völgy felfedezesere. A varos a szolgaltatasokat, a vasarlast es a videki hozzaferest kapcsolja ossze. Mallow eros kulcsszo Cork belso utazasaiban.",
      ro: "Mallow este un oras din County Cork, cu o pozitie convenabila rutiera si feroviara. Este o baza frecventa pentru nordul Cork si valea Blackwater. Orasul combina servicii, shopping si acces la zona rurala. Mallow este un cuvant-cheie solid pentru calatoriile in interiorul lui Cork."
    },
    facts: {
      en: ["County Cork town.", "Useful rail and road stop.", "Base for north Cork trips.", "Close to Blackwater valley.", "Good inland Cork keyword."],
      de: ["Stadt im County Cork.", "Wichtiger Bahn- und Strassenhalt.", "Basis fuer Nord-Cork-Touren.", "Nahe am Blackwater-Tal.", "Gutes Inland-Cork-Keyword."],
      hu: ["Cork megyei varos.", "Fontos vasuti es kozuti megallo.", "Bazis eszak-corki kirandulasokhoz.", "Kozel a Blackwater-völgyhoz.", "Jo belso Cork kulcsszo."],
      ro: ["Oras din County Cork.", "Popas bun feroviar si rutier.", "Baza pentru excursii in nordul Cork.", "Aproape de valea Blackwater.", "Cuvant-cheie bun pentru Cork interior."]
    },
    image: "/geo-images/ireland/mallow.webp",
  },
  {
    id: "city-wicklow",
    type: "city",
    parent: "ireland",
    coords: [-6.0427, 52.9808],
    name: { de: "Wicklow", hu: "Wicklow", ro: "Wicklow", en: "Wicklow" },
    description: {
      en: "Wicklow is a coastal county town with easy access to the mountains and the east coast. It works well as a base for scenic drives, harbour visits, and garden tourism. The town is compact but strongly tied to the Garden County image. Wicklow is a useful keyword for southeast coastal searches.",
      de: "Wicklow ist eine Kuesten-Bezirkshauptstadt mit einfachem Zugang zu Bergen und Ostkueste. Sie eignet sich gut als Basis fuer Panoramafahrten, Hafenbesuche und Gartentourismus. Der Ort ist kompakt, aber eng mit dem Image des Garden County verbunden. Wicklow ist ein nuetzliches Keyword fuer Suchanfragen an der suedostlichen Kueste.",
      hu: "Wicklow egy tengerparti megyekozpont, amelyhez konnyu hozzaferes van a hegyekhez es a keleti parthoz. Jo bazis festoi autozasokhoz, kikotolatasokhoz es kertturizmushoz. A varos kompakt, de eros kapcsolatban all a Garden County kepevel. Wicklow hasznos kulcsszo a delkeleti parti kereseseiben.",
      ro: "Wicklow este un oras de resedinta de coasta, cu acces usor la munti si la coasta de est. Functioneaza bine ca baza pentru drumuri pitoresti, vizite in port si turism de gradini. Orasul este compact, dar foarte legat de imaginea Garden County. Wicklow este un cuvant-cheie util pentru cautarile de pe coasta de sud-est."
    },
    facts: {
      en: ["County town on the east coast.", "Gateway to mountain routes.", "Compact harbour-town feel.", "Strong Garden County branding.", "Good for scenic drive searches."],
      de: ["Bezirkshauptort an der Ostkueste.", "Tor zu Berg-Routen.", "Kompaktes Hafenstadt-Gefuehl.", "Starkes Garden-County-Image.", "Gut fuer Panoramafahrten-Suchen."],
      hu: ["Keleti parti megyekozpont.", "Kaput ad a hegyi utvonalakhoz.", "Kompakt kikotovarosi hangulat.", "Eros Garden County marka.", "Jó festoi vezeteses utakhoz."],
      ro: ["Oras de resedinta pe coasta de est.", "Poarta spre rutele montane.", "Atmosfera compacta de oras-port.", "Brand puternic de Garden County.", "Bun pentru cautari despre drumuri pitoresti."]
    },
    image: "/geo-images/ireland/wicklow.webp",
  },
  {
    id: "city-ballina",
    type: "city",
    parent: "ireland",
    coords: [-9.1535, 54.1169],
    name: { de: "Ballina", hu: "Ballina", ro: "Ballina", en: "Ballina" },
    description: {
      en: "Ballina is a major town in north Mayo. It has a busy local centre and good links to river activity. The town also works well for trips toward the Wild Atlantic Way. Ballina is a reliable keyword for Mayo travel content.",
      de: "Ballina ist eine groessere Stadt im Norden von Mayo. Sie hat ein lebendiges Zentrum und gute Beziuge zu Flussaktivitaeten. Der Ort eignet sich auch gut fuer Reisen in Richtung Wild Atlantic Way. Ballina ist ein verlaessliches Keyword fuer Mayo-Reiseinhalte.",
      hu: "Ballina Mayo eszaki reszenek fontos varosa. Nyuzsgo varoskozponttal es jo folyami kapcsolatokkal rendelkezik. A varos a Wild Atlantic Way fele induló utakhoz is jo. Ballina megbizhato kulcsszo a Mayo utazasi tartalmakban.",
      ro: "Ballina este un oras important in nordul lui Mayo. Are un centru animat si legaturi bune cu activitatile pe rau. Orasul este util si pentru excursii spre Wild Atlantic Way. Ballina este un cuvant-cheie de incredere pentru continutul despre Mayo."
    },
    facts: {
      en: ["Major town in north Mayo.", "Linked to river activity.", "Good base for northwest coast.", "Busy local retail centre.", "Useful for Wild Atlantic Way."],
      de: ["Groessere Stadt im Norden von Mayo.", "Mit Flussaktivitaeten verbunden.", "Gute Basis fuer die Nordwestkueste.", "Lebhaftes lokales Handelszentrum.", "Nuetzlich fuer Wild-Atlantic-Way-Touren."],
      hu: ["Mayo eszaki nagyvarosa.", "A folyami aktivitashoz kotodik.", "Jo bazis az eszaknyugati parthoz.", "Nyuzsgo helyi kereskedelmi kozpont.", "Hasznos a Wild Atlantic Wayhez."],
      ro: ["Oras important in nordul lui Mayo.", "Legat de activitatile pe rau.", "Baza buna pentru coasta de nord-vest.", "Centru local comercial animat.", "Util pentru Wild Atlantic Way."]
    },
    image: "/geo-images/ireland/ballina.webp",
  },
  {
    id: "city-westport",
    type: "city",
    parent: "ireland",
    coords: [-9.5208, 53.8006],
    name: { de: "Westport", hu: "Westport", ro: "Westport", en: "Westport" },
    description: {
      en: "Westport is one of Mayo's best-known towns. It combines Georgian streets, harbour access, and quick routes to the mountains and islands. The town is strongly associated with leisure breaks and outdoor travel. Westport is a powerful keyword for west of Ireland itineraries.",
      de: "Westport ist eine der bekanntesten Staedte in Mayo. Sie verbindet georgianische Strassen, Hafenzugang und schnelle Routen zu Bergen und Inseln. Der Ort ist stark mit Freizeitpausen und Outdoor-Reisen verbunden. Westport ist ein starkes Keyword fuer Reiserouten im Westen Irlands.",
      hu: "Westport Mayo egyik legismertebb varosa. Georgiánus utcakat, kikotoi kapcsolatot es gyors utvonalat ad a hegyekhez es szigetekhez. A varos eros kapcsolatban all a pihenesekkel es a szabadtéri utazasokkal. Westport eros kulcsszo a nyugat-irorszagi utvonalakhoz.",
      ro: "Westport este unul dintre cele mai cunoscute orase din Mayo. Combina strazi georgiene, acces la port si rute rapide spre munti si insule. Orasul este asociat puternic cu escapadele de relaxare si calatoriile in aer liber. Westport este un cuvant-cheie puternic pentru itinerariile din vestul Irlandei."
    },
    facts: {
      en: ["One of Mayo's best-known towns.", "Popular base for the west coast.", "Near mountain and island routes.", "Georgian streets and harbour access.", "Strong leisure travel keyword."],
      de: ["Eine der bekanntesten Staedte in Mayo.", "Beliebte Basis fuer die Westkueste.", "Nahe an Berg- und Inselrouten.", "Georgianische Strassen und Hafenbezug.", "Starkes Keyword fuer Freizeitreisen."],
      hu: ["Mayo egyik legismertebb varosa.", "Népszeru bazis a nyugati parthoz.", "Kozel a hegyi es szigeti utvonalakhoz.", "Georgiánus utcak es kikotoi kapcsolat.", "Eros kulcsszo a piheneshez."],
      ro: ["Unul dintre cele mai cunoscute orase din Mayo.", "Baza populara pentru coasta de vest.", "Aproape de rute montane si insulare.", "Strazi georgiene si acces la port.", "Cuvant-cheie puternic pentru calatorii de relaxare."]
    },
    image: "/geo-images/ireland/westport.webp",
  },
  {
    id: "hist-hill-of-tara",
    type: "historical",
    parent: "ireland",
    coords: [-6.6104, 53.5819],
    name: { de: "Hill of Tara", hu: "Hill of Tara", ro: "Hill of Tara", en: "Hill of Tara" },
    description: {
      en: "The Hill of Tara is one of Ireland's most iconic ancient sites. It is linked to the High Kings of Ireland and old ceremonial power. Visitors come for the earthworks, views, and national symbolism. The site is essential for ancient and mythic Ireland content.",
      de: "Der Hill of Tara ist eine der bekanntesten antiken Staetten Irlands. Er ist mit den High Kings of Ireland und alter Zeremonialmacht verbunden. Besucher kommen wegen der Erdwerke, der Aussicht und der nationalen Symbolik. Die Staette ist essenziell fuer antike und mythische Irland-Inhalte.",
      hu: "A Hill of Tara Irorszag egyik legikonikusabb osi helyszine. Az Ireland High Kingshoz es a regi szertartasi hatalomhoz kotodik. A latogatok a foldmunkak, a kilatas es a nemzeti szimbolika miatt jonnek. A hely alapveto az osi es mitikus irorszagi tartalmakban.",
      ro: "Hill of Tara este unul dintre cele mai iconice situri antice din Irlanda. Este legat de High Kings of Ireland si de puterea ceremoniala veche. Vizitatorii vin pentru valurile de pamant, privelisti si simbolism national. Situl este esential pentru continutul despre Irlanda antica si mitica."
    },
    facts: {
      en: ["Linked to the High Kings of Ireland.", "Major ancient ceremonial site.", "Important national-symbol location.", "Known for earthworks and views.", "Top historical Ireland keyword."],
      de: ["Mit den High Kings of Ireland verbunden.", "Wichtige antike Zeremonialstaette.", "Bedeutender Ort nationaler Symbolik.", "Bekannt fuer Erdwerke und Aussicht.", "Top-Keyword fuer historische Irland-Themen."],
      hu: ["Az Ireland High Kingshoz kotodik.", "Fontos osi szertartasi helyszin.", "Nemzeti szimbolum szempontjabol jelentős.", "Foldmunkakrol es kilatasrol ismert.", "Elso osztalyu tortenelmi kulcsszo."],
      ro: ["Legat de High Kings of Ireland.", "Situl ceremonial antic important.", "Loc cu simbolism national puternic.", "Cunoscut pentru valuri de pamant si privelisti.", "Cuvant-cheie istoric de top."]
    },
    image: "/geo-images/ireland/hill-of-tara.webp",
  },
  {
    id: "hist-jerpoint-abbey",
    type: "historical",
    parent: "ireland",
    coords: [-7.1585, 52.5227],
    name: { de: "Jerpoint Abbey", hu: "Jerpoint Abbey", ro: "Jerpoint Abbey", en: "Jerpoint Abbey" },
    description: {
      en: "Jerpoint Abbey is a famous Cistercian ruin in County Kilkenny. It is known for carved stone detail and a strong monastic atmosphere. The site gives visitors a clear sense of medieval Ireland. Jerpoint Abbey works well for history and architecture searches.",
      de: "Jerpoint Abbey ist eine beruehmte Zisterzienserruine im County Kilkenny. Sie ist fuer ihre Steinmetzdetails und ihre starke monastische Atmosphaere bekannt. Die Staette vermittelt Besuchern ein klares Gefuehl fuer mittelalterliches Irland. Jerpoint Abbey eignet sich gut fuer Geschichts- und Architektur-Suchen.",
      hu: "A Jerpoint Abbey egy hires ciszterci kolostorrom Kilkenny megyeben. Faragott koreszleteirol es eros monasztikus hangulatarol ismert. A hely jol atadja a kozepkori Irorszag erzeseit. A Jerpoint Abbey jo tortenelmi es epiteszeti keresésekhez.",
      ro: "Jerpoint Abbey este o ruina cisterciana celebra din County Kilkenny. Este cunoscuta pentru detaliile sculptate in piatra si atmosfera monastica puternica. Situl le ofera vizitatorilor un sentiment clar al Irlandei medievale. Jerpoint Abbey functioneaza bine pentru cautari istorice si de arhitectura."
    },
    facts: {
      en: ["Cistercian abbey ruin.", "Located in County Kilkenny.", "Known for carved stone detail.", "Set in a river valley.", "Strong medieval keyword."],
      de: ["Zisterzienserruine.", "Im County Kilkenny gelegen.", "Bekannt fuer Steinmetzdetails.", "In einem Flusstal gelegen.", "Starkes Mittelalter-Keyword."],
      hu: ["Ciszterci kolostorrom.", "Kilkenny megyeben talalhato.", "Faragott koreszleteirol ismert.", "Egy folyovölgyben fekszik.", "Eros kozepkori kulcsszo."],
      ro: ["Ruina cisterciana.", "Situata in County Kilkenny.", "Cunoscuta pentru detaliile in piatra.", "Asezata intr-o vale de rau.", "Cuvant-cheie puternic medieval."]
    },
    image: "/geo-images/ireland/jerpoint-abbey.webp",
  },
  {
    id: "landmark-king-johns-castle",
    type: "landmark",
    parent: "ireland",
    coords: [-8.6206, 52.6674],
    name: { de: "King John's Castle", hu: "King John's Castle", ro: "King John's Castle", en: "King John's Castle" },
    description: {
      en: "King John's Castle is a flagship Norman landmark in Limerick. The fortress overlooks the Shannon crossing and shapes the city's medieval story. It is a major attraction for castle searches and urban history content. The site is ideal for landmark travel planning.",
      de: "King John's Castle ist ein Vorzeige-Normannenwahrzeichen in Limerick. Die Festung ueberblickt die Shannon-Querung und praegt die mittelalterliche Geschichte der Stadt. Sie ist eine grosse Attraktion fuer Burgsuchen und Stadtgeschichten. Die Staette ist ideal fuer Landmark-Reiseplanung.",
      hu: "A King John's Castle Limerick egyik fontos normann nevezetessege. Az erosseg a Shannon-atkelest nezi, es a varos kozepkori tortenetet formálja. Nagy attrakcio a kastelykeresesekben es a varosi torteneti tartalmakban. A hely idealis landmark utazasi tervezeshez.",
      ro: "King John's Castle este un reper normand de prim rang in Limerick. Fortareata supravegheaza trecerea peste Shannon si modeleaza povestea medievala a orasului. Este o atractie majora pentru cautari despre castele si continut de istorie urbana. Situl este ideal pentru planificarea calatoriilor de tip landmark."
    },
    facts: {
      en: ["Flagship Norman castle in Limerick.", "Overlooks the Shannon crossing.", "Major attraction for castle searches.", "Strong riverside landmark.", "Good for city-history content."],
      de: ["Vorzeige-Normannenburg in Limerick.", "Ueberblickt die Shannon-Querung.", "Wichtige Attraktion fuer Burgsuchen.", "Starkes historisches Ufer-Wahrzeichen.", "Gut fuer Stadtgeschichte-Inhalte."],
      hu: ["Limerick fontos normann kastelya.", "A Shannon-atkelest nezi.", "Nagy attrakcio a kastelykeresesekben.", "Eros folyoparti nevezetesseg.", "Jo varostorteneti tartalmakhoz."],
      ro: ["Castel normand de referinta in Limerick.", "Supravegheaza trecerea peste Shannon.", "Atractie majora pentru cautari despre castele.", "Reper istoric puternic pe malul apei.", "Bun pentru continut despre istoria orasului."]
    },
    image: "/geo-images/ireland/king-johns-castle.webp",
  },
  {
    id: "hist-glenveagh-castle",
    type: "historical",
    parent: "ireland",
    coords: [-7.9833, 55.0289],
    name: { de: "Glenveagh Castle", hu: "Glenveagh Castle", ro: "Glenveagh Castle", en: "Glenveagh Castle" },
    description: {
      en: "Glenveagh Castle is a striking 19th-century castle in Donegal. It combines a formal house, gardens, and a mountain and lake backdrop. Visitors often pair it with walks in the Glenveagh area. The castle is a strong keyword for Donegal heritage travel.",
      de: "Glenveagh Castle ist eine auffaellige Burg aus dem 19. Jahrhundert in Donegal. Sie verbindet ein formelles Haus, Gaerten und eine Kulisse aus Bergen und Seen. Besucher kombinieren den Ort oft mit Spaziergaengen im Glenveagh-Gebiet. Die Burg ist ein starkes Keyword fuer Donegal-Erbe.",
      hu: "A Glenveagh Castle egy lenyugozo 19. szazadi kastely Donegalban. Egy formalis hazat, kertet es hegyi-tavi hatteret kapcsol ossze. A latogatók gyakran Glenveagh setakkal parositjak. A kastely eros kulcsszo Donegal oroksegi utazasi tartalmakhoz.",
      ro: "Glenveagh Castle este un castel impresionant din secolul al XIX-lea in Donegal. Combina o casa formala, gradini si un fundal de munti si lacuri. Vizitatorii il combina adesea cu plimbari in zona Glenveagh. Castelul este un cuvant-cheie puternic pentru turismul de patrimoniu din Donegal."
    },
    facts: {
      en: ["19th-century castle in Donegal.", "Set among mountains and lakes.", "Popular for scenic day trips.", "Linked to Glenveagh area.", "Strong heritage keyword."],
      de: ["Burg aus dem 19. Jahrhundert in Donegal.", "Zwischen Bergen und Seen gelegen.", "Beliebt fuer landschaftliche Tagesausfluege.", "Mit dem Glenveagh-Gebiet verbunden.", "Starkes Erbe-Keyword."],
      hu: ["19. szazadi kastely Donegalban.", "Hegyek es tavak kozott fekszik.", "Népszeru festoi egynapos kirandulasokra.", "A Glenveagh teruleteihez kotodik.", "Eros oroksegi kulcsszo."],
      ro: ["Castel din secolul al XIX-lea in Donegal.", "Asezat intre munti si lacuri.", "Popular pentru excursii pitoresti de o zi.", "Legat de zona Glenveagh.", "Cuvant-cheie puternic pentru patrimoniu."]
    },
    image: "/geo-images/ireland/glenveagh-castle.webp",
  },
  {
    id: "hist-rathcroghan",
    type: "historical",
    parent: "ireland",
    coords: [-8.1341, 53.7381],
    name: { de: "Rathcroghan", hu: "Rathcroghan", ro: "Rathcroghan", en: "Rathcroghan" },
    description: {
      en: "Rathcroghan is a major archaeological landscape in Roscommon. It is linked to early kingship, burial mounds, and legendary stories. The area is valuable for ancient Ireland and archaeology searches. Rathcroghan is a high-value heritage destination.",
      de: "Rathcroghan ist eine wichtige archäologische Landschaft in Roscommon. Sie ist mit frueher Koenigsherrschaft, Grabhuellen und legendaren Geschichten verbunden. Das Gebiet ist wertvoll fuer Suchanfragen zu antikem Irland und Archäologie. Rathcroghan ist ein hochwertiges Kulturreiseziel.",
      hu: "Rathcroghan egy fontos regeszeti tajkép Roscommon megyeben. A korai kiralysaghoz, sirhalmokhoz es legendas tortenetekhez kotodik. A terulet ertekes az osi Irorszag es a regeszet kereseseiben. Rathcroghan kiemelt oroksegi celpont.",
      ro: "Rathcroghan este un peisaj arheologic major in Roscommon. Este legat de regalitatea timpurie, movile funerare si povesti legendare. Zona este valoroasa pentru cautari despre Irlanda antica si arheologie. Rathcroghan este o destinatie de patrimoniu de mare valoare."
    },
    facts: {
      en: ["Major royal archaeological site.", "Linked to early Irish kingship.", "Important for burial mound history.", "Strong mythology value.", "Top heritage keyword."],
      de: ["Wichtige koenigliche Archäologie-Staette.", "Mit frueher irischer Koenigsherrschaft verbunden.", "Wichtig fuer die Geschichte der Grabhuellen.", "Starker Mythologie-Wert.", "Top-Keyword fuer Erbe."],
      hu: ["Fontos kiralyi regeszeti helyszin.", "A korai ir kiralysaghoz kotodik.", "A sirhalmok tortenete miatt jelentős.", "Eros mitologiai erteke van.", "Elso osztalyu oroksegi kulcsszo."],
      ro: ["Situl arheologic regal major.", "Legat de regalitatea irlandeza timpurie.", "Important pentru istoria movilelor funerare.", "Are valoare mitologica puternica.", "Cuvant-cheie de top pentru patrimoniu."]
    },
    image: "/geo-images/ireland/rathcroghan.webp",
  },
  {
    id: "hist-fore-abbey",
    type: "historical",
    parent: "ireland",
    coords: [-7.3125, 53.6997],
    name: { de: "Fore Abbey", hu: "Fore Abbey", ro: "Fore Abbey", en: "Fore Abbey" },
    description: {
      en: "Fore Abbey is a ruined monastic site in Westmeath. It is famous for the legend of the seven wonders and its quiet atmosphere. The abbey is a useful stop for central Ireland history trips. Fore Abbey performs well for monastery search traffic.",
      de: "Fore Abbey ist eine Ruinenklosterstaette in Westmeath. Sie ist beruehmt fuer die Legende der sieben Wunder und ihre ruhige Atmosphaere. Die Abtei ist ein nuetzlicher Halt fuer Geschichtsreisen in Zentralirland. Fore Abbey funktioniert gut fuer Klostersuchanfragen.",
      hu: "A Fore Abbey egy romos kolostori helyszin Westmeath megyeben. A het csoda legendajarol es csendes hangulatarol ismert. Az apatsag hasznos megallo a kozep-irorszagi tortenelmi utakhoz. A Fore Abbey jol teljesit a kolostorkeresésekben.",
      ro: "Fore Abbey este un sit monastic in ruina din Westmeath. Este faimos pentru legenda celor sapte minuni si pentru atmosfera sa linistita. Abatia este un popas util pentru calatoriile istorice din Irlanda centrala. Fore Abbey functioneaza bine pentru cautarile despre manastiri."
    },
    facts: {
      en: ["Ruined monastic site in Westmeath.", "Known for the seven wonders.", "Strong early Christian atmosphere.", "Useful central Ireland stop.", "Good monastery keyword."],
      de: ["Ruinenklosterstaette in Westmeath.", "Bekannt fuer die sieben Wunder.", "Starke fruehchristliche Atmosphaere.", "Nuetzlicher Halt in Zentralirland.", "Gutes Keyword fuer Klostererbe."],
      hu: ["Romos kolostori hely Westmeathben.", "A het csoda legendajarol ismert.", "Eros korakereszteny hangulat.", "Hasznos kozep-irorszagi megallo.", "Jo kolostori kulcsszo."],
      ro: ["Situl monastic in ruina din Westmeath.", "Cunoscut pentru cele sapte minuni.", "Atmosfera crestina timpurie puternica.", "Popas util in centrul Irlandei.", "Cuvant-cheie bun pentru manastiri."]
    },
    image: "/geo-images/ireland/fore-abbey.webp",
  },
  {
    id: "landmark-dun-aonghasa",
    type: "landmark",
    parent: "ireland",
    coords: [-9.6480, 53.1238],
    name: { de: "Dun Aonghasa", hu: "Dun Aonghasa", ro: "Dun Aonghasa", en: "Dun Aonghasa" },
    description: {
      en: "Dun Aonghasa is a dramatic stone fort on Inis Mor. It stands on a cliff edge and offers one of the most memorable views in Ireland. The site combines prehistory, landscape drama, and island travel appeal. It is a strong landmark keyword for western Ireland.",
      de: "Dun Aonghasa ist eine dramatische Steinfestung auf Inis Mor. Sie steht am Rand einer Klippe und bietet einen der einpraegsamsten Ausblicke Irlands. Die Staette verbindet Vorgeschichte, Landschaftsdrama und Inselreise-Appeal. Sie ist ein starkes Landmark-Keyword fuer den Westen Irlands.",
      hu: "A Dun Aonghasa egy drmai koerosseg Inis Moron. Egy szakadek szelen all, es Irorszag egyik legemlekezetesebb kilatasat adja. A hely az oskort, a tajdramat es a szigeti utazas vonzerot egyesiti. Eros landmark kulcsszo Nyugat-Irorszaghoz.",
      ro: "Dun Aonghasa este o fortareata spectaculoasa de piatra pe Inis Mor. Sta pe marginea unei faleze si ofera una dintre cele mai memorabile privelisti din Irlanda. Situl combina preistoria, dramatismul peisajului si atractia calatoriilor pe insule. Este un cuvant-cheie puternic de landmark pentru vestul Irlandei."
    },
    facts: {
      en: ["Cliff-edge fort on Inis Mor.", "Iconic western Ireland view.", "Prehistoric and island appeal.", "Major landmark keyword.", "Strong scenic search term."],
      de: ["Festung am Klippenrand auf Inis Mor.", "Ikonischer Blick des Westens.", "Vorgeschichtlicher und inselbezogener Reiz.", "Wichtiges Wahrzeichen-Keyword.", "Starkes Landschafts-Suchwort."],
      hu: ["Szakadekparti erosseg Inis Moron.", "Ikonikus nyugati irorszagi kilatas.", "Osköri es szigeti vonzerő.", "Fontos landmark kulcsszo.", "Eros festoi keresesi kifejezes."],
      ro: ["Fortareata pe marginea falezei pe Inis Mor.", "Privire iconica din vestul Irlandei.", "Atractie preistorica si insulara.", "Cuvant-cheie major de landmark.", "Termen puternic pentru cautari pitoresti."]
    },
    image: "/geo-images/ireland/dun-aonghasa.webp",
  },
  {
    id: "historical-glasnevin-cemetery",
    type: "historical",
    parent: "ireland",
    coords: [-6.2710, 53.3730],
    name: { de: "Glasnevin Cemetery", hu: "Glasnevin Cemetery", ro: "Glasnevin Cemetery", en: "Glasnevin Cemetery" },
    description: {
      en: "Glasnevin Cemetery is one of Dublin's key memorial landscapes. It is linked to political history, public memory, and national figures. Visitors come for guided stories and the strong atmosphere. The site is a key stop for history and memorial searches.",
      de: "Glasnevin Cemetery ist eine der wichtigsten Gedenklandschaften Dublins. Sie ist mit politischer Geschichte, oeffentlichem Gedenken und nationalen Persoenlichkeiten verbunden. Besucher kommen wegen Fuehrungen und der starken Atmosphaere. Die Staette ist ein zentraler Halt fuer historische und Gedenk-Suchen.",
      hu: "A Glasnevin Cemetery Dublin egyik fontos emlekhelyi tajkepe. Politikai tortenelemhez, kozosségi emlekezethez es nemzeti alakokhoz kotodik. A latogatok vezetesek es az eros hangulat miatt jonnek. A hely kulcsfontossagu tortenelmi es emlekhelyi keresésekben.",
      ro: "Glasnevin Cemetery este unul dintre peisajele memoriale cheie ale Dublinului. Este legat de istoria politica, memoria publica si figuri nationale. Vizitatorii vin pentru tururi ghidate si atmosfera puternica. Situl este un popas cheie pentru cautari istorice si memoriale."
    },
    facts: {
      en: ["Major memorial site in Dublin.", "Linked to political history.", "Important national figures buried here.", "Known for guided tours.", "Strong memorial keyword."],
      de: ["Wichtige Gedenkstaette in Dublin.", "Mit politischer Geschichte verbunden.", "Wichtige nationale Persoenlichkeiten ruhen hier.", "Bekannt fuer Fuehrungen.", "Starkes Gedenk-Keyword."],
      hu: ["Fontos dublini emlekhely.", "A politikai tortenelemhez kotodik.", "Fontos nemzeti alakok nyugszanak itt.", "Vezetesekrol ismert.", "Eros emlekhelyi kulcsszo."],
      ro: ["Situl memorial major din Dublin.", "Legat de istoria politica.", "Aici sunt ingropate figuri nationale importante.", "Cunoscut pentru tururi ghidate.", "Cuvant-cheie puternic pentru memorial."]
    },
    image: "/geo-images/ireland/glasnevin-cemetery.webp",
  },
  {
    id: "mountain-mweelrea",
    type: "mountain",
    parent: "ireland",
    coords: [-9.8139, 53.6250],
    name: { de: "Mweelrea", hu: "Mweelrea", ro: "Mweelrea", en: "Mweelrea" },
    description: {
      en: "Mweelrea is one of the highest mountains in Connacht. It is prized by hikers for its steep profile and wide Atlantic views. The mountain adds strong outdoor value to west of Ireland content. Mweelrea is useful for hiking and Mayo travel searches.",
      de: "Mweelrea ist einer der hoechsten Berge in Connacht. Wanderer schaetzen ihn wegen seines steilen Profils und der weiten Atlantikblicke. Der Berg bringt starken Outdoor-Wert in Inhalte ueber den Westen Irlands. Mweelrea ist nuetzlich fuer Wander- und Mayo-Suchen.",
      hu: "Mweelrea Connacht egyik legmagasabb hegye. A turazok a meredek formaja es a szeles atlanti kilatas miatt kedvelik. A hegy eros szabadtéri erteket ad a nyugat-irorszagi tartalmakhoz. Mweelrea hasznos turazas- es Mayo keresésekhez.",
      ro: "Mweelrea este unul dintre cei mai inalti munti din Connacht. Este apreciat de drumeti pentru profilul abrupt si privelistile largi spre Atlantic. Muntele adauga valoare puternica pentru continutul despre outdoor din vestul Irlandei. Mweelrea este util pentru cautari despre drumetii si Mayo."
    },
    facts: {
      en: ["One of Connacht's highest peaks.", "Located in County Mayo.", "Known for steep hiking routes.", "Offers wide Atlantic views.", "Strong outdoor keyword."],
      de: ["Einer der hoechsten Gipfel Connachts.", "Im County Mayo gelegen.", "Bekannt fuer steile Wanderwege.", "Bietet weite Atlantikblicke.", "Starkes Outdoor-Keyword."],
      hu: ["Connacht egyik legmagasabb csucsa.", "Mayo megyeben talalhato.", "Meredek turautjairol ismert.", "Szeles atlanti kilatast ad.", "Eros szabadtéri kulcsszo."],
      ro: ["Unul dintre cele mai inalte varfuri din Connacht.", "Situat in County Mayo.", "Cunoscut pentru traseele abrupte.", "Ofera privelisti largi spre Atlantic.", "Cuvant-cheie puternic pentru outdoor."]
    },
    image: "/geo-images/ireland/mweelrea.webp",
  },
  {
    id: "mountain-mangerton",
    type: "mountain",
    parent: "ireland",
    coords: [-9.6048, 52.0051],
    name: { de: "Mangerton", hu: "Mangerton", ro: "Mangerton", en: "Mangerton" },
    description: {
      en: "Mangerton rises above the Killarney area. It is a classic Kerry mountain for walkers. The peak is known for its broad summit and lake views. Mangerton is a strong keyword for Kerry adventure searches.",
      de: "Mangerton erhebt sich ueber dem Killarney-Gebiet. Er ist ein klassischer Kerry-Berg fuer Wanderer. Der Gipfel ist fuer seinen breiten Gipfel und Seeblicke bekannt. Mangerton ist ein starkes Keyword fuer Kerry-Abenteuer-Suchen.",
      hu: "A Mangerton a Killarney-terseg fole magasodik. Klasszikus Kerry-hegy a turazok szamara. A csucs szeles tetejerol es tavi kilatasairol ismert. Mangerton eros kulcsszo Kerry kalandkeresesekhez.",
      ro: "Mangerton se ridica deasupra zonei Killarney. Este un munte clasic din Kerry pentru drumeti. Varful este cunoscut pentru platoul larg si privelistile asupra lacurilor. Mangerton este un cuvant-cheie puternic pentru cautarile de aventura din Kerry."
    },
    facts: {
      en: ["Classic Kerry hiking mountain.", "Above the Killarney area.", "Known for lake views.", "Linked to park scenery.", "Strong adventure keyword."],
      de: ["Klassischer Wanderberg in Kerry.", "Ueber dem Killarney-Gebiet.", "Bekannt fuer Seeblicke.", "Mit Parklandschaft verbunden.", "Starkes Abenteuer-Keyword."],
      hu: ["Klasszikus Kerry turagey.", "Killarney felett emelkedik.", "Tavi kilatairól ismert.", "A park tajahoz kotodik.", "Eros kaland-kulcsszo."],
      ro: ["Munte clasic pentru drumetii in Kerry.", "Deasupra zonei Killarney.", "Cunoscut pentru privelistile asupra lacurilor.", "Legat de peisajul parcului.", "Cuvant-cheie puternic pentru aventura."]
    },
    image: "/geo-images/ireland/mangerton.webp",
  },
  {
    id: "lake-lough-mask",
    type: "lake",
    parent: "ireland",
    coords: [-9.3371, 53.5354],
    name: { de: "Lough Mask", hu: "Lough Mask", ro: "Lough Mask", en: "Lough Mask" },
    description: {
      en: "Lough Mask is a large lake in County Mayo. It is popular for fishing, scenery, and quiet rural drives. The lake adds strong natural balance to west of Ireland content. Lough Mask is useful for lake break searches.",
      de: "Lough Mask ist ein grosser See im County Mayo. Er ist beliebt fuer Angeln, Landschaft und ruhige Landfahrten. Der See bringt starken natuerlichen Ausgleich in Inhalte ueber den Westen Irlands. Lough Mask ist nuetzlich fuer Suchanfragen nach Seeaufenthalten.",
      hu: "A Lough Mask egy nagy to Mayo megyeben. Horgaszatra, tajkepre es csendes videki autozasokra népszeru. A to eros termeszetes egyensulyt ad a nyugat-irorszagi tartalmaknak. Lough Mask hasznos a tavi pihenesek kereseseiben.",
      ro: "Lough Mask este un lac mare in County Mayo. Este popular pentru pescuit, peisaj si drumuri rurale linistite. Lacul adauga un echilibru natural puternic continutului despre vestul Irlandei. Lough Mask este util pentru cautari despre sejururi la lac."
    },
    facts: {
      en: ["Large lake in County Mayo.", "Popular for fishing trips.", "Known for quiet scenic drives.", "Important inland water landscape.", "Useful lake keyword."],
      de: ["Grosser See im County Mayo.", "Beliebt fuer Angelausfluege.", "Bekannt fuer ruhige Panoramafahrten.", "Wichtige Binnenwasserlandschaft.", "Nuetzliches See-Keyword."],
      hu: ["Nagy to Mayo megyeben.", "Népszeru horgaszati celpont.", "Csendes festoi autozasokra ismert.", "Fontos belvizi taj.", "Hasznos tavi kulcsszo."],
      ro: ["Lac mare in County Mayo.", "Popular pentru iesiri la pescuit.", "Cunoscut pentru drumuri panoramice linistite.", "Peisaj acvatic interior important.", "Cuvant-cheie util pentru lacuri."]
    },
    image: "/geo-images/ireland/lough-mask.webp",
  },
  {
    id: "lake-lough-gill",
    type: "lake",
    parent: "ireland",
    coords: [-8.3898, 54.2813],
    name: { de: "Lough Gill", hu: "Lough Gill", ro: "Lough Gill", en: "Lough Gill" },
    description: {
      en: "Lough Gill is a scenic lake close to Sligo. It is linked to boat trips, river corridors, and literary landscape associations. The lake is compact and easy to include in regional travel planning. Lough Gill is a strong keyword for Sligo scenery content.",
      de: "Lough Gill ist ein landschaftlich reizvoller See nahe Sligo. Er ist mit Bootsfahrten, Flusskorridoren und literarischen Landschaftsbeziehungen verbunden. Der See ist kompakt und leicht in Regionalreisen einzuplanen. Lough Gill ist ein starkes Keyword fuer Sligo-Landschaftsinhalte.",
      hu: "A Lough Gill egy festoi to Sligo kozeleben. Hajokazasokhoz, folyoszakaszokhoz es irodalmi tajkapcsolatokhoz kotodik. A to kompakt es konnyen beillesztheto regionalis tervekbe. Lough Gill eros kulcsszo a Sligo tajkep tartalmakban.",
      ro: "Lough Gill este un lac pitoresc aproape de Sligo. Este legat de plimbari cu barca, coridoare fluviale si asociatii literare de peisaj. Lacul este compact si usor de inclus in planurile regionale de calatorie. Lough Gill este un cuvant-cheie puternic pentru peisajul din Sligo."
    },
    facts: {
      en: ["Scenic lake near Sligo.", "Good for boat-trip searches.", "Linked to literary themes.", "Compact and easy to visit.", "Strong northwest keyword."],
      de: ["Landschaftssee nahe Sligo.", "Gut fuer Bootstour-Suchen.", "Mit literarischen Themen verbunden.", "Kompakt und leicht zu besuchen.", "Starkes Nordwest-Keyword."],
      hu: ["Festoi to Sligo kozeleben.", "Jo a hajokazas kereseseihez.", "Irodalmi temakhoz is kotodik.", "Kompakt es konnyen meglatogathato.", "Eros eszaknyugati kulcsszo."],
      ro: ["Lac scenic aproape de Sligo.", "Bun pentru cautari de barci.", "Legat de teme literare.", "Compact si usor de vizitat.", "Cuvant-cheie puternic pentru nord-vest."]
    },
    image: "/geo-images/ireland/lough-gill.webp",
  },
  {
    id: "river-barrow",
    type: "river",
    parent: "ireland",
    coords: [-6.9714, 52.8949],
    name: { de: "River Barrow", hu: "River Barrow", ro: "River Barrow", en: "River Barrow" },
    description: {
      en: "The River Barrow is one of Ireland's great eastern rivers. It runs through fertile country and canal-linked heritage routes. The river is popular with walkers, boaters, and countryside explorers. River Barrow works well for inland waterway content.",
      de: "Der River Barrow ist einer der grossen Fluesse im Osten Irlands. Er fuehrt durch fruchtbares Land und kanaalverbundene Erbrouten. Der Fluss ist bei Wanderern, Bootsfahrern und Landentdeckern beliebt. River Barrow eignet sich gut fuer Inhalte zu Binnenwasserwegen.",
      hu: "A River Barrow Irorszag egyik nagy keleti folyója. Termekeny videken es csatornahoz kotodo oroksegi utvonalakon halad at. A folyó kedvelt a gyaloglok, hajozok es videkfelfedezok koreben. A River Barrow jo belvizi tartalomhoz.",
      ro: "River Barrow este unul dintre marile rauri din estul Irlandei. Curge prin zone fertile si trasee de patrimoniu legate de canale. Raul este popular printre drumeti, navigatori si exploratori rurali. River Barrow functioneaza bine pentru continutul despre cai navigabile interioare."
    },
    facts: {
      en: ["One of Ireland's major eastern rivers.", "Flows through fertile countryside.", "Linked to canal routes.", "Popular with walkers and boaters.", "Strong inland-waterway keyword."],
      de: ["Einer der grossen Fluesse im Osten Irlands.", "Fliesst durch fruchtbares Land.", "Mit Kanalufern verbunden.", "Beliebt bei Wanderern und Bootsfahrern.", "Starkes Binnenwasserweg-Keyword."],
      hu: ["Irorszag egyik nagy keleti folyója.", "Termekeny videken halad at.", "Csatornautvonalakhoz kotodik.", "Népszeru a gyaloglok es hajozok koreben.", "Eros belvizi kulcsszo."],
      ro: ["Unul dintre marile rauri din estul Irlandei.", "Curge prin peisaj rural fertil.", "Legat de rute de canale.", "Popular printre drumeti si navigatori.", "Cuvant-cheie puternic pentru ape interioare."]
    },
    image: "/geo-images/ireland/river-barrow.webp",
  },
  {
    id: "river-blackwater",
    type: "river",
    parent: "ireland",
    coords: [-7.8467, 52.1248],
    name: { de: "River Blackwater", hu: "River Blackwater", ro: "River Blackwater", en: "River Blackwater" },
    description: {
      en: "The River Blackwater is a major Munster river with a broad scenic presence. It passes through heritage towns, farmland, and attractive fishing stretches. The river is useful for travel content about Waterford and Cork rural routes. River Blackwater is a strong keyword for south Munster landscapes.",
      de: "Der River Blackwater ist ein grosser Munster-Fluss mit breiter landschaftlicher Wirkung. Er fuehrt durch historische Staedte, Farmland und attraktive Angelabschnitte. Der Fluss ist nuetzlich fuer Reiseinhalte zu laendlichen Routen in Waterford und Cork. River Blackwater ist ein starkes Keyword fuer Sued-Munster-Landschaften.",
      hu: "A River Blackwater egy fontos Munster-i folyó, melynek eros tajkepi jelenléte van. Oroksegi varosokon, mezogazdasagi teruleteken es jo horgaszszakaszokon halad at. A folyó hasznos Waterford es Cork videki utvonalairól szolo tartalmakban. A River Blackwater eros kulcsszo Dél-Munster tajaihoz.",
      ro: "River Blackwater este un rau major din Munster, cu prezenta larga peisagistica. Trece prin orase de patrimoniu, terenuri agricole si zone atractive pentru pescuit. Raul este util pentru continutul despre rutele rurale din Waterford si Cork. River Blackwater este un cuvant-cheie puternic pentru peisajele din sudul Munster."
    },
    facts: {
      en: ["Major river in Munster.", "Passes through heritage towns.", "Important for fishing and scenery.", "Links Waterford and Cork areas.", "Strong south Munster keyword."],
      de: ["Wichtiger Fluss in Munster.", "Fuehrt durch historische Staedte.", "Wichtig fuer Angeln und Landschaft.", "Verbindet Waterford- und Cork-Gebiete.", "Starkes Keyword fuer Sued-Munster."],
      hu: ["Fontos folyó Munsterben.", "Oroksegi varosokon halad at.", "Horgaszat es tajkep szempontjabol jelentős.", "Waterford es Cork teruleteit kotheti.", "Eros del-munsteri kulcsszo."],
      ro: ["Rau important in Munster.", "Trece prin orase de patrimoniu.", "Important pentru pescuit si peisaj.", "Leaga zonele Waterford si Cork.", "Cuvant-cheie puternic pentru sudul Munster."]
    },
    image: "/geo-images/ireland/river-blackwater.webp",
  },
  {
    id: "river-liffey",
    type: "river",
    parent: "ireland",
    coords: [-6.2603, 53.3498],
    name: { de: "River Liffey", hu: "River Liffey", ro: "River Liffey", en: "River Liffey" },
    description: {
      en: "The River Liffey is Dublin's defining river. It runs through the capital and shapes bridges, quays, and riverside identity. The river is central to searches about Dublin sightseeing and city walks. River Liffey is essential for Dublin landscape content.",
      de: "Der River Liffey ist Dublins praegender Fluss. Er verlaeuft durch die Hauptstadt und praegt Bruecken, Quais und die Uferidentitaet. Der Fluss ist zentral fuer Suchanfragen zu Dublin-Sightseeing und Stadtspaziergaengen. River Liffey ist essenziell fuer Dublin-Landschaftsinhalte.",
      hu: "A River Liffey Dublin meghatarozo folyója. Atfut a fo varoson, es megalakitja a hidakat, rakpartokat es a folyoparti identitast. A folyó kozponti szerepet jatszik a dublini nevezetessegek es varosi setak kereseseiben. A River Liffey alapveto a Dublin tajkep tartalomhoz.",
      ro: "River Liffey este raul definitoriu al Dublinului. Curge prin capitala si modeleaza podurile, cheiurile si identitatea de pe malul apei. Raul este central in cautarile despre obiectivele din Dublin si plimbarile urbane. River Liffey este esential pentru continutul despre peisajul Dublinului."
    },
    facts: {
      en: ["Defines the city of Dublin.", "Runs through the capital centre.", "Shapes quays and bridges.", "Key for Dublin sightseeing.", "Core urban river keyword."],
      de: ["Praegt die Stadt Dublin.", "Fliesst durch das Stadtzentrum.", "Bestimmt Quais und Bruecken.", "Wichtig fuer Dublin-Sightseeing.", "Kern-Keyword fuer den Stadtfluss."],
      hu: ["Dublin arculatazo folyója.", "Atfut a fo varos kozpontjan.", "A rakpartokat es hidakat formálja.", "Fontos a dublini nevezetessegekhez.", "Alapveto varosi folyó kulcsszo."],
      ro: ["Defineste orasul Dublin.", "Curge prin centrul capitalei.", "Modeleaza cheiurile si podurile.", "Cheie pentru obiectivele din Dublin.", "Cuvant-cheie central pentru rau urban."]
    },
    image: "/geo-images/ireland/river-liffey.webp",
  },
  {
    id: "island-inishbofin",
    type: "island",
    parent: "ireland",
    coords: [-10.2000, 53.6200],
    name: { de: "Inishbofin", hu: "Inishbofin", ro: "Inishbofin", en: "Inishbofin" },
    description: {
      en: "Inishbofin is a small island off the Galway and Connemara coast. It is known for quiet beaches, wildlife, and a strong island escape feeling. The island is useful for slow travel and west coast content. Inishbofin is a valuable keyword for island searches.",
      de: "Inishbofin ist eine kleine Insel vor der Galway- und Connemara-Kueste. Sie ist bekannt fuer ruhige Straende, Tierwelt und ein starkes Insel-Fluchtgefuehl. Die Insel ist nuetzlich fuer Slow Travel und Inhalte zur Westkueste. Inishbofin ist ein wertvolles Keyword fuer Inselsuchen.",
      hu: "Inishbofin egy kicsi sziget Galway es Connemara partjainal. Csendes strandjairól, vadvilagarol es eros szigeti menekules hangulatarol ismert. A sziget hasznos a lassu utazas es a nyugati parti tartalmak szamara. Inishbofin ertekes kulcsszo a szigetkeresesekben.",
      ro: "Inishbofin este o mica insula langa coasta Galway si Connemara. Este cunoscuta pentru plajele linistite, fauna salbatica si senzatia puternica de evadare pe insula. Insula este utila pentru slow travel si continutul de pe coasta de vest. Inishbofin este un cuvant-cheie valoros pentru cautarile despre insule."
    },
    facts: {
      en: ["Offshore island off Galway.", "Known for quiet beaches.", "Strong slow-travel appeal.", "Useful west coast keyword.", "Good for island searches."],
      de: ["Kleine Insel vor Galway.", "Bekannt fuer ruhige Straende.", "Stark fuer Slow-Travel-Reiz.", "Gutes Westkueste-Keyword.", "Gut fuer Inselsuchen."],
      hu: ["Galway partjainal fekszik.", "Csendes strandjairól ismert.", "Eros lassu-utazasi vonzerő.", "Jo nyugati parti kulcsszo.", "Hasznos szigetkeresesekhez."],
      ro: ["Insula offshore langa Galway.", "Cunoscuta pentru plajele linistite.", "Atractie puternica pentru slow travel.", "Cuvant bun pentru coasta de vest.", "Util pentru cautari despre insule."]
    },
    image: "/geo-images/ireland/inishbofin.webp",
  },
  {
    id: "industry-midleton-distillery",
    type: "industry",
    parent: "ireland",
    coords: [-8.1692, 51.9135],
    name: { de: "Midleton Distillery", hu: "Midleton Distillery", ro: "Midleton Distillery", en: "Midleton Distillery" },
    description: {
      en: "Midleton Distillery is a famous Irish spirits site in County Cork. It is central to whiskey production and visitor experiences. The distillery links industry, heritage, and tasting tourism. Midleton Distillery is ideal for food and drink search traffic.",
      de: "Midleton Distillery ist eine beruehmte irische Spirituosenstaette im County Cork. Sie ist zentral fuer Whiskeyproduktion und Besuchererlebnisse. Die Brennerei verbindet Industrie, Geschichte und Verkostungstourismus. Midleton Distillery ist ideal fuer Food- und Drink-Suchanfragen.",
      hu: "A Midleton Distillery hires ir italgyarto helyszin Cork megyeben. Kozponti szerepet jatszik a whiskeygyartasban es a latogatoi elmenyekben. A fozde az ipart, az orokseget es a kostolasi turizmust koti ossze. A Midleton Distillery idealis etel-ital keresesi forgalomhoz.",
      ro: "Midleton Distillery este un sit celebru pentru bauturi spirtoase irlandeze in County Cork. Este central pentru productia de whiskey si experientele vizitatorilor. Distileria leaga industria, patrimoniul si turismul de degustare. Midleton Distillery este ideala pentru traficul de cautari food and drink."
    },
    facts: {
      en: ["Famous whiskey site in Cork.", "Strong tasting-tourism appeal.", "Linked to premium visitor visits.", "Important Irish industry keyword.", "Well-known spirits destination."],
      de: ["Beruehmte Whiskey-Staette in Cork.", "Starker Reiz fuer Verkostungstourismus.", "Mit Premium-Besucherbesuchen verbunden.", "Wichtiges Industrie-Keyword Irlands.", "Bekanntes Spirituosen-Ziel."],
      hu: ["Híres whiskeyhely Corkban.", "Eros kostolasi turisztikai vonzerő.", "Premium latogatoi elmenyekhez kotodik.", "Fontos ir ipari kulcsszo.", "Ismert italos celpont."],
      ro: ["Sit celebru de whiskey in Cork.", "Atractie puternica pentru turismul de degustare.", "Legata de vizite premium pentru oaspeti.", "Cuvant-cheie important pentru industria irlandeza.", "Destinatie cunoscuta pentru spirtoase."]
    },
    image: "/geo-images/ireland/midleton-distillery.webp",
  },
  {
    id: "industry-teeling-whiskey-distillery",
    type: "industry",
    parent: "ireland",
    coords: [-6.2786, 53.3398],
    name: { de: "Teeling Whiskey Distillery", hu: "Teeling Whiskey Distillery", ro: "Teeling Whiskey Distillery", en: "Teeling Whiskey Distillery" },
    description: {
      en: "Teeling Whiskey Distillery is a major Dublin industry attraction. It supports searches about whiskey tours and tasting rooms. The site adds a contemporary industry angle to Dublin travel content. Teeling Whiskey Distillery is useful for premium city tourism.",
      de: "Teeling Whiskey Distillery ist eine wichtige Industrieattraktion in Dublin. Sie unterstuetzt Suchen nach Whisky-Touren und Verkostungsraeumen. Die Staette bringt einen modernen Industrieaspekt in Dublin-Reiseinhalte. Teeling Whiskey Distillery ist nuetzlich fuer Premium-Stadttourismus.",
      hu: "A Teeling Whiskey Distillery fontos dublini ipari attrakcio. Whiskeyturak es kostoloterem kereseseit tamogatja. A hely kortars ipari nezopontot ad a dublini tartalmakhoz. A Teeling Whiskey Distillery hasznos a premium varosi turizmushoz.",
      ro: "Teeling Whiskey Distillery este o atractie industriala majora din Dublin. Sustine cautarile despre tururi de whiskey si camere de degustare. Situl adauga un unghi industrial contemporan continutului despre Dublin. Teeling Whiskey Distillery este utila pentru turism urban premium."
    },
    facts: {
      en: ["Modern whiskey attraction in Dublin.", "Popular for tasting-room visits.", "Strong city-tourism keyword.", "Adds an industry angle to Dublin.", "Well known among spirit tours."],
      de: ["Moderne Whiskey-Attraktion in Dublin.", "Beliebt fuer Verkostungsbesuche.", "Starkes Keyword fuer Stadttourismus.", "Bringt Industrieaspekt in Dublin.", "Bekannt bei Spirituosen-Touren."],
      hu: ["Modern whiskey attrakcio Dublinban.", "Népszeru kostoloi latogatasokhoz.", "Eros varosi turisztikai kulcsszo.", "Ipari nezopontot ad Dublinhoz.", "Ismert ital-turak kozott."],
      ro: ["Atractie moderna de whiskey in Dublin.", "Populara pentru vizite de degustare.", "Cuvant-cheie puternic pentru city tourism.", "Adauga un unghi industrial Dublinului.", "Cunoscuta in tururile de bauturi spirtoase."]
    },
    image: "/geo-images/ireland/teeling-whiskey-distillery.webp",
  },
  {
    id: "industry-slane-distillery",
    type: "industry",
    parent: "ireland",
    coords: [-6.5441, 53.7098],
    name: { de: "Slane Distillery", hu: "Slane Distillery", ro: "Slane Distillery", en: "Slane Distillery" },
    description: {
      en: "Slane Distillery is a notable modern distilling site in County Meath. It connects rural estate scenery with premium spirits production. The site is useful for branded food and drink content in northeast Ireland. Slane Distillery gives a strong lifestyle angle to Meath searches.",
      de: "Slane Distillery ist eine bemerkenswerte moderne Brennerei im County Meath. Sie verbindet laendliche Gutshoflandschaft mit Premium-Spirituosenproduktion. Die Staette ist nuetzlich fuer markenbezogene Food- und Drink-Inhalte im Nordosten Irlands. Slane Distillery bringt einen starken Lifestyle-Aspekt in Meath-Suchen.",
      hu: "A Slane Distillery figyelemre melto modern fozde County Meathben. A videki birtoktajat kotheti ossze a premium italgyartassal. A hely hasznos markazas etel-ital tartalmakhoz Eszakkelet-Irorszagban. A Slane Distillery eros eletmodos szempontot ad a Meath kereseseihez.",
      ro: "Slane Distillery este un sit modern de distilare remarcabil in County Meath. Leaga peisajul rural al domeniului de productia de bauturi spirtoase premium. Situl este util pentru continutul de brand food and drink din nord-estul Irlandei. Slane Distillery adauga un unghi puternic de lifestyle cautarilor din Meath."
    },
    facts: {
      en: ["Modern distilling site in Meath.", "Good for branded drinks content.", "Linked to rural estate scenery.", "Strong northeast Ireland keyword.", "Visitor-friendly industry stop."],
      de: ["Moderne Brennerei in Meath.", "Gut fuer Marken-Getraenke-Inhalte.", "Mit laendlicher Gutshoflandschaft verbunden.", "Starkes Keyword fuer den Nordosten.", "Besucherfreundlicher Industriehalt."],
      hu: ["Modern fozde Meath megyeben.", "Jo markazas italos tartalomhoz.", "Videki birtoktajhoz kotodik.", "Eros eszakkeleti kulcsszo.", "Latogato barat ipari megallo."],
      ro: ["Situl modern de distilare in Meath.", "Bun pentru continut de bauturi branduit.", "Legat de peisajul rural al domeniului.", "Cuvant-cheie puternic pentru nord-est.", "Popas industrial prietenos cu vizitatorii."]
    },
    image: "/geo-images/ireland/slane-distillery.webp",
  },
  {
    id: "industry-foxford-woollen-mills",
    type: "industry",
    parent: "ireland",
    coords: [-9.1156, 53.9457],
    name: { de: "Foxford Woollen Mills", hu: "Foxford Woollen Mills", ro: "Foxford Woollen Mills", en: "Foxford Woollen Mills" },
    description: {
      en: "Foxford Woollen Mills is a classic Mayo production site. It combines manufacturing history, retail appeal, and a recognizable west of Ireland brand story. The site is ideal for visitors who want industry with a community feel. Foxford Woollen Mills is useful for craft and shopping searches.",
      de: "Foxford Woollen Mills ist eine klassische Produktionsstaette in Mayo. Sie verbindet Industriegeschichte, Einzelhandelsrelevanz und eine erkennbare Markengeschichte des Westens. Der Ort ist ideal fuer Besucher, die Industrie mit Gemeinschaftscharakter suchen. Foxford Woollen Mills ist nuetzlich fuer Handwerk- und Shopping-Suchen.",
      hu: "A Foxford Woollen Mills klasszikus mayo-i gyartasi helyszin. Az ipartortenetet, a vasarlasi vonzerot es a nyugat-irorszagi marka tortenetet kapcsolja ossze. A hely idealis azoknak, akik az ipart kozossegi hangulattal keresik. A Foxford Woollen Mills hasznos kzmves es vasarlasi keresésekhez.",
      ro: "Foxford Woollen Mills este un sit clasic de productie din Mayo. Imbina istoria industriala, atractia de retail si o poveste recognoscibila de brand din vestul Irlandei. Locul este ideal pentru vizitatorii care vor industrie cu atmosfera de comunitate. Foxford Woollen Mills este util pentru cautari despre artizanat si shopping."
    },
    facts: {
      en: ["Classic Mayo production site.", "Known for woollen craft heritage.", "Also works as a retail stop.", "Strong west of Ireland brand.", "Useful for craft shopping searches."],
      de: ["Klassische Produktionsstaette in Mayo.", "Bekannt fuer Wollhandwerk.", "Auch als Einkaufsstopp geeignet.", "Starke Marke des Westens.", "Gut fuer Handwerks- und Shopping-Suchen."],
      hu: ["Klasszikus mayo-i gyartasi hely.", "A gyapjus kzmves oroksegrol ismert.", "Vasarlasi megallokent is mukodik.", "Eros nyugat-irorszagi marka.", "Hasznos kzmves vasarlasi keresésekhez."],
      ro: ["Situl clasic de productie din Mayo.", "Cunoscut pentru mostenirea tesaturilor din lana.", "Functioneaza si ca oprire de shopping.", "Brand puternic din vestul Irlandei.", "Util pentru cautari de artizanat si cumparaturi."]
    },
    image: "/geo-images/ireland/foxford-woollen-mills.webp",
  },
  {
    id: "industry-tullamore-dew",
    type: "industry",
    parent: "ireland",
    coords: [-7.4919, 53.2727],
    name: { de: "Tullamore Dew", hu: "Tullamore Dew", ro: "Tullamore Dew", en: "Tullamore Dew" },
    description: {
      en: "Tullamore Dew is one of Ireland's best-known whiskey brands. It links the town to export history and national brand recognition. The site is useful for searches about distilling in the Midlands. Tullamore Dew fits strongly into Irish food and drink tourism content.",
      de: "Tullamore Dew ist eine der bekanntesten Whiskey-Marken Irlands. Es verbindet die Stadt mit Exportgeschichte und nationaler Markenbekanntheit. Die Staette ist nuetzlich fuer Suchanfragen zur Brennerei in den Midlands. Tullamore Dew passt stark in irische Food- und Drink-Tourismusinhalte.",
      hu: "A Tullamore Dew Irorszag egyik legismertebb whiskeymarkaja. A varost exporttortenettel es orszagos markaertelmezessel kapcsolja ossze. A hely hasznos a Midlands fozdekeresesekhez. A Tullamore Dew jol illik az ir etel-ital turizmus tartalmaiba.",
      ro: "Tullamore Dew este unul dintre cele mai cunoscute branduri de whiskey din Irlanda. Leaga orasul de istoria exportului si de recunoasterea nationala a brandului. Locul este util pentru cautari despre distilare in Midlands. Tullamore Dew se potriveste bine in continutul de turism food and drink din Irlanda."
    },
    facts: {
      en: ["Major Irish whiskey brand.", "Strong Offaly industry keyword.", "Linked to export history.", "Useful for Midlands searches.", "Well known nationwide."],
      de: ["Wichtige irische Whiskey-Marke.", "Starkes Industrie-Keyword fuer Offaly.", "Mit Exportgeschichte verbunden.", "Gut fuer Midlands-Suchen.", "Landesweit bekannt."],
      hu: ["Nagy ir whiskey marka.", "Eros Offaly ipari kulcsszo.", "Exporttortenethez kotodik.", "Jó midlandszi keresésekhez.", "Orszagszerte ismert."],
      ro: ["Brand major irlandez de whiskey.", "Cuvant-cheie industrial puternic pentru Offaly.", "Legat de istoria exportului.", "Bun pentru cautari in Midlands.", "Cunoscut la nivel national."]
    },
    image: "/geo-images/ireland/tullamore-dew.webp",
  },
  {
    id: "kid-landmark-dublin-zoo",
    type: "kid-landmark",
    parent: "ireland",
    coords: [-6.3006, 53.3554],
    name: { de: "Dublin Zoo", hu: "Dublin Zoo", ro: "Dublin Zoo", en: "Dublin Zoo" },
    description: {
      en: "Dublin Zoo is one of the country's best-known family attractions. It sits in Phoenix Park and offers a classic day-out for visitors of all ages. The zoo is central to Dublin family planning and school-holiday searches. Dublin Zoo is a strong child-focused landmark in the capital.",
      de: "Dublin Zoo ist eine der bekanntesten Familienattraktionen des Landes. Es liegt im Phoenix Park und bietet einen klassischen Tagesausflug fuer Besucher aller Altersgruppen. Der Zoo ist zentral fuer Dublin-Familienplanung und Suchanfragen in den Schulferien. Dublin Zoo ist ein starkes kindorientiertes Wahrzeichen der Hauptstadt.",
      hu: "A Dublin Zoo az orszag egyik legismertebb csaladi attrakcioja. A Phoenix Parkban talalhato, es klasszikus egesznapos programot ad minden korosztalynak. A zoo kozponti szerepet kap a dublini csaladi tervezesben es az iskolaszüneti keresésekben. A Dublin Zoo eros gyerekfokuszu nevezetesseg a fo varosban.",
      ro: "Dublin Zoo este una dintre cele mai cunoscute atractii pentru familii din tara. Se afla in Phoenix Park si ofera o zi clasica pentru vizitatori de toate varstele. Gradina zoologica este centrala pentru planificarea in familie in Dublin si pentru cautarile din vacantele scolare. Dublin Zoo este un reper puternic orientat spre copii in capitala."
    },
    facts: {
      en: ["Top family attraction in Dublin.", "Located in Phoenix Park.", "Popular for school-holiday visits.", "Classic day-out for all ages.", "Strong kid-friendly keyword."],
      de: ["Top-Familienattraktion in Dublin.", "Im Phoenix Park gelegen.", "Beliebt in den Schulferien.", "Klassischer Tagesausflug fuer alle.", "Starkes kinderfreundliches Keyword."],
      hu: ["Top csaladi attrakcio Dublinban.", "A Phoenix Parkban van.", "Népszeru iskolaszüneti latogatasra.", "Klasszikus egesznapos program.", "Eros gyerekbarat kulcsszo."],
      ro: ["Atractie de top pentru familii in Dublin.", "Situata in Phoenix Park.", "Populara in vacantele scolare.", "O zi clasica pentru toate varstele.", "Cuvant-cheie puternic pentru copii."]
    },
    image: "/geo-images/ireland/dublin-zoo.webp",
  },
  {
    id: "kid-landmark-fota-wildlife-park",
    type: "kid-landmark",
    parent: "ireland",
    coords: [-8.3169, 51.8955],
    name: { de: "Fota Wildlife Park", hu: "Fota Wildlife Park", ro: "Fota Wildlife Park", en: "Fota Wildlife Park" },
    description: {
      en: "Fota Wildlife Park is a major family attraction near Cork. It gives visitors open-space wildlife viewing in a relaxed island setting. The park works well for holiday itineraries and kid days out. Fota Wildlife Park is one of the top child-friendly landmarks in Ireland.",
      de: "Fota Wildlife Park ist eine grosse Familienattraktion nahe Cork. Er bietet offene Tierbeobachtung in entspannter Inselumgebung. Der Park eignet sich gut fuer Urlaubsrouten und Kindertage. Fota Wildlife Park ist eines der besten kinderfreundlichen Wahrzeichen Irlands.",
      hu: "A Fota Wildlife Park fontos csaladi attrakcio Cork kozeleben. Nyitott teru vadvilag-nezest ad nyugodt szigeti kornyezetben. A park jo nyaralasi utvonalakhoz es gyerekprogramokhoz. A Fota Wildlife Park Irorszag egyik legjobb gyerekbarat nevezetessege.",
      ro: "Fota Wildlife Park este o atractie majora pentru familii langa Cork. Ofera observarea faunei in spatiu deschis, intr-un cadru relaxat de insula. Parcul functioneaza bine pentru itinerarii de vacanta si zile pentru copii. Fota Wildlife Park este unul dintre cele mai bune repere prietenoase cu copiii din Irlanda."
    },
    facts: {
      en: ["Major family attraction near Cork.", "Open-space wildlife viewing.", "Relaxed island setting.", "Great for holiday itineraries.", "Top southeast kid keyword."],
      de: ["Grosse Familienattraktion nahe Cork.", "Tierbeobachtung im offenen Raum.", "Entspannte Inselumgebung.", "Gut fuer Urlaubsrouten.", "Top-Keyword fuer Kinder im Suedosten."],
      hu: ["Fontos csaladi attrakcio Cork mellett.", "Nyitott teru vadvilag-nezes.", "Nyugodt szigeti kornyezet.", "Jo nyaralasi utvonalakhoz.", "Top delkeleti gyerek kulcsszo."],
      ro: ["Atractie majora pentru familii langa Cork.", "Observare a faunei in spatiu deschis.", "Cadru relaxat pe insula.", "Excelent pentru itinerarii de vacanta.", "Cuvant de top pentru copii in sud-est."]
    },
    image: "/geo-images/ireland/fota-wildlife-park.webp",
  },
  {
    id: "kid-landmark-emerald-park",
    type: "kid-landmark",
    parent: "ireland",
    coords: [-6.4572, 53.5076],
    name: { de: "Emerald Park", hu: "Emerald Park", ro: "Emerald Park", en: "Emerald Park" },
    description: {
      en: "Emerald Park is one of Ireland's most popular amusement-style attractions for families. It combines rides, play areas, and a full day-out format. The park is especially useful for Leinster family searches. Emerald Park is a major keyword for fun-focused Ireland itineraries.",
      de: "Emerald Park ist eine der beliebtesten Freizeitattraktionen Irlands fuer Familien. Er verbindet Fahrgeschaefte, Spielbereiche und ein ganztägiges Tagesformat. Der Park ist besonders nuetzlich fuer Familien-Suchen in Leinster. Emerald Park ist ein wichtiges Keyword fuer spaassorientierte Irland-Routen.",
      hu: "Az Emerald Park Irorszag egyik legnepszerubb vidamparki jellegu attrakcioja csaladoknak. Jatekokat, jatszoteruleteket es egesznapos programot egyesit. A park kulonosen hasznos Leinster csaladi kereseseihez. Az Emerald Park fontos kulcsszo a szorakozasfokuszu irorszagi utvonalakhoz.",
      ro: "Emerald Park este una dintre cele mai populare atractii de tip parc de distractii din Irlanda pentru familii. Combina atractii, zone de joaca si un format de zi intreaga. Parcul este deosebit de util pentru cautarile de familie din Leinster. Emerald Park este un cuvant-cheie major pentru itinerariile distractive din Irlanda."
    },
    facts: {
      en: ["Popular family amusement park.", "Strong Leinster day-trip appeal.", "Includes rides and play areas.", "Good for full-day planning.", "Major fun-focused keyword."],
      de: ["Beliebter Familien-Freizeitpark.", "Starke Tagesausflugswirkung in Leinster.", "Mit Fahrgeschaeften und Spielzonen.", "Gut fuer ganztägige Planung.", "Wichtiges Fun-Keyword."],
      hu: ["Népszeru csaladi vidampark.", "Eros Leinster egynapos vonzerő.", "Jatekokat es jatszoteruleteket tartalmaz.", "Jo egesznapos tervezeshez.", "Fontos szorakoztato kulcsszo."],
      ro: ["Parc de distractii popular pentru familii.", "Atractie puternica de excursie de o zi in Leinster.", "Include atractii si zone de joaca.", "Bun pentru planificare pe zi intreaga.", "Cuvant-cheie major pentru distractie."]
    },
    image: "/geo-images/ireland/emerald-park.webp",
  },
  {
    id: "kid-landmark-lough-key-adventure-park",
    type: "kid-landmark",
    parent: "ireland",
    coords: [-8.1470, 53.9993],
    name: { de: "Lough Key Adventure Park", hu: "Lough Key Adventure Park", ro: "Lough Key Adventure Park", en: "Lough Key Adventure Park" },
    description: {
      en: "Lough Key Adventure Park is a family-focused outdoor attraction in Roscommon. It combines treetop activity, lakeside scenery, and adventure-style play. The park works well for west of Ireland family breaks and school-holiday planning. Lough Key Adventure Park is a strong kid-friendly landmark keyword.",
      de: "Lough Key Adventure Park ist eine familienorientierte Outdoor-Attraktion in Roscommon. Er verbindet Aktivitaeten in den Baumwipfeln, Seelandschaft und abenteuerorientiertes Spielen. Der Park eignet sich gut fuer Familienpausen im Westen Irlands und fuer Schulferienplanung. Lough Key Adventure Park ist ein starkes kinderfreundliches Landmark-Keyword.",
      hu: "A Lough Key Adventure Park egy csaladkozpontu szabadtéri attrakcio Roscommon megyeben. Fakoneto aktivitast, tavi tajat es kalandos jatekot egyesit. A park jol mukodik nyugat-irorszagi csaladi pihenésekhez es iskolaszüneti tervezeshez. A Lough Key Adventure Park eros gyerekbarat landmark kulcsszo.",
      ro: "Lough Key Adventure Park este o atractie outdoor axata pe familie in Roscommon. Combina activitati in copaci, peisaj de lac si joaca in stil aventura. Parcul este potrivit pentru escapade in familie in vestul Irlandei si pentru planificarea vacantei scolare. Lough Key Adventure Park este un cuvant-cheie puternic pentru reperele prietenoase cu copiii."
    },
    facts: {
      en: ["Family-focused outdoor attraction.", "Set by a scenic lake.", "Good for older kids and parents.", "Popular for school-holiday planning.", "Strong west Ireland kid keyword."],
      de: ["Familienorientierte Outdoor-Attraktion.", "An einem landschaftlichen See gelegen.", "Gut fuer aeltere Kinder und Eltern.", "Beliebt fuer Schulferienplanung.", "Starkes Kinder-Keyword fuer den Westen."],
      hu: ["Csaladkozpontu szabadtéri attrakcio.", "Festoi to mellett fekszik.", "Nagyobb gyerekeknek es szuloknek jo.", "Népszeru iskolaszüneti tervezeshez.", "Eros nyugat-irorszagi gyerek kulcsszo."],
      ro: ["Atractie outdoor orientata spre familie.", "Asezata langa un lac pitoresc.", "Buna pentru copii mai mari si parinti.", "Populara pentru planificarea vacantei scolare.", "Cuvant-cheie puternic pentru copii in vestul Irlandei."]
    },
    image: "/geo-images/ireland/lough-key-adventure-park.webp",
  }
];

export const irelandAllPoi: POI[] = [irelandCountry, ...irelandRegions, ...irelandCities, ...irelandCulture, ...irelandNature];
