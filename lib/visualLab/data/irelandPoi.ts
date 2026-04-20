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

export const irelandNature: POI[] = [
  {
    id: "nat-cliffs-of-moher",
    type: "nature",
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
    type: "nature",
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
  }
];

export const irelandCulture: POI[] = [
  {
    id: "cult-blarney-castle",
    type: "culture",
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
  }
];

export const irelandAllPoi: POI[] = [irelandCountry, ...irelandRegions, ...irelandNature, ...irelandCulture];
