import type { POI } from "./poi";

export const greeceCountry: POI = {
  id: "greece",
  type: "country",
  parent: "EU",
  coords: [23.7275, 37.9838],
  name: { de: "Griechenland", hu: "Görögország", ro: "Grecia", en: "Greece" },
  description: {
    en: "Greece is a country in Southeastern Europe, known as the cradle of Western civilization. It is the birthplace of democracy, Western philosophy, the Olympic Games, and Western literature. The country is famous for its stunning islands, crystal-clear waters, and ancient archaeological sites. Greece's landscape is predominantly mountainous, with one of the longest coastlines in the world, featuring thousands of islands scattered across the Aegean and Ionian seas.",
    de: "Griechenland ist ein Land in Südosteuropa, das als Wiege der westlichen Zivilisation gilt. Es ist der Geburtsort der Demokratie, der westlichen Philosophie, der Olympischen Spiele und der westlichen Literatur. Das Land ist berühmt für seine atemberaubenden Inseln, das kristallklare Wasser und die antiken archäologischen Stätten. Die Landschaft Griechenlands ist überwiegend gebirgig und verfügt über eine der längsten Küstenlinien der Welt mit Tausenden von Inseln in der Ägäis und im Ionischen Meer.",
    hu: "Görögország délkelet-európai ország, amelyet a nyugati civilizáció bölcsőjeként tartanak számon. Itt született meg a demokrácia, a nyugati filozófia, az olimpiai játékok és a nyugati irodalom. Az ország híres lenyűgöző szigeteiről, kristálytiszta vizéről és ókori régészeti lelőhelyeiről. Görögország tájai túlnyomórészt hegyvidékiek, és a világ egyik leghosszabb partvonalával rendelkezik, több ezer szigettel az Égei- és a Jón-tengeren.",
    ro: "Grecia este o țară din Europa de Sud-Est, cunoscută ca leagănul civilizației occidentale. Este locul de naștere al democrației, al filosofiei occidentale, al Jocurilor Olimpice și al literaturii occidentale. Țara este faimoasă pentru insulele sale uimitoare, apele cristaline și siturile arheologice antice. Peisajul Greciei este predominant muntos, având una dintre cele mai lungi linii de coastă din lume, cu mii de insule împrăștiate în mările Egee și Ionică."
  },
  facts: {
    en: [
      "Greece has more than 2,000 islands, of which about 170 are inhabited.",
      "No point in Greece is more than 137 kilometers away from the sea.",
      "Athens is one of the world's oldest cities, with recorded history spanning over 3,400 years.",
      "The first Olympic Games were held in 776 BC in Olympia.",
      "Greece is the world's leading producer of sea sponges.",
      "Mount Olympus is the highest point in Greece and was considered the home of the gods."
    ],
    de: [
      "Griechenland hat mehr als 2.000 Inseln, von denen etwa 170 bewohnt sind.",
      "Kein Punkt in Griechenland ist mehr als 137 Kilometer vom Meer entfernt.",
      "Athen ist eine der ältesten Städte der Welt mit einer dokumentierten Geschichte von über 3.400 Jahren.",
      "Die ersten Olympischen Spiele fanden 776 v. Chr. in Olympia statt.",
      "Griechenland ist der weltweit führende Produzent von Naturschwämmen.",
      "Der Olymp ist der höchste Punkt Griechenlands und galt als Sitz der Götter."
    ],
    hu: [
      "Görögországnak több mint 2000 szigete van, amelyek közül körülbelül 170 lakott.",
      "Görögország egyetlen pontja sincs 137 kilométernél messzebb a tengertől.",
      "Athén a világ egyik legrégebbi városa, több mint 3400 éves írott történelemmel.",
      "Az első olimpiai játékokat i. e. 776-ban tartották Olümpiában.",
      "Görögország a világ vezető tengeri szivacs termelője.",
      "Az Olümposz-hegy Görögország legmagasabb pontja, és az istenek lakhelyének tartották."
    ],
    ro: [
      "Grecia are peste 2.000 de insule, dintre care aproximativ 170 sunt locuite.",
      "Niciun punct din Grecia nu se află la mai mult de 137 de kilometri distanță de mare.",
      "Atena este unul dintre cele mai vechi orașe din lume, cu o istorie documentată de peste 3.400 de ani.",
      "Primele Jocuri Olimpice au avut loc în anul 776 î.Hr. la Olimpia.",
      "Grecia este cel mai mare producător mondial de bureți de mare.",
      "Muntele Olimp este cel mai înalt punct din Grecia și a fost considerat casa zeilor."
    ]
  },
  image: "/geo-images/greece/greece-main.webp",
};

export const greeceRegions: POI[] = [
  {
    id: "city-athens",
    type: "city",
    parent: "greece",
    coords: [23.7275, 37.9838],
    name: { de: "Athen", hu: "Athén", ro: "Atena", en: "Athens" },
    description: {
      en: "Athens is the capital and largest city of Greece, dominated by landmarks of the 5th century BC, including the Acropolis. It is a vibrant metropolis that seamlessly blends ancient history with modern life. The city is an open-air museum, where every corner reveals a piece of the past, from the Parthenon to the ancient Agora. Athens is also a cultural hub with world-class museums, theaters, and a lively culinary scene.",
      de: "Athen ist die Hauptstadt und größte Stadt Griechenlands, dominiert von Wahrzeichen aus dem 5. Jahrhundert v. Chr., darunter die Akropolis. Es ist eine pulsierende Metropole, die antike Geschichte nahtlos mit modernem Leben verbindet. Die Stadt ist ein Freilichtmuseum, in dem jede Ecke ein Stück Vergangenheit offenbart, vom Parthenon bis zur antiken Agora. Athen ist auch ein kulturelles Zentrum mit erstklassigen Museen, Theatern und einer lebendigen kulinarischen Szene.",
      hu: "Athén Görögország fővárosa és legnagyobb városa, amelyet az i. e. 5. századi műemlékek, köztük az Akropolisz uralnak. Vibráló metropolisz, amely zökkenőmentesen ötvözi az ókori történelmet a modern élettel. A város egy szabadtéri múzeum, ahol minden sarok a múlt egy darabját tárja fel, a Parthenóntól az ókori Agoráig. Athén kulturális központ is, világszínvonalú múzeumokkal, színházakkal és élénk gasztronómiával.",
      ro: "Atena este capitala și cel mai mare oraș al Greciei, dominat de monumente din secolul al V-lea î.Hr., inclusiv Acropola. Este o metropolă vibrantă care îmbină perfect istoria antică cu viața modernă. Orașul este un muzeu în aer liber, unde fiecare colț dezvăluie o bucată din trecut, de la Partenon la vechea Agora. Atena este, de asemenea, un centru cultural cu muzee de talie mondială, teatre și o scenă culinară plină de viață."
    },
    facts: {
      en: ["The Acropolis is a UNESCO World Heritage site.","Athens hosted the first modern Olympic Games in 1896.","The city is named after the goddess Athena.","The Parthenon was built as a temple for Athena."],
      de: ["Die Akropolis ist ein UNESCO-Weltkulturerbe.","Athen war 1896 Gastgeber der ersten modernen Olympischen Spiele.","Die Stadt ist nach der Göttin Athene benannt.","Der Parthenon wurde als Tempel für Athene erbaut."],
      hu: ["Az Akropolisz az UNESCO Világörökség része.","Athén adott otthont az első modern olimpiai játékoknak 1896-ban.","A várost Athéné istennőről nevezték el.","A Parthenónt Athéné templomaként építették."],
      ro: ["Acropola este un sit al Patrimoniului Mondial UNESCO.","Atena a găzduit primele Jocuri Olimpice moderne în 1896.","Orașul poartă numele zeiței Atena.","Partenonul a fost construit ca templu pentru Atena."]
    },
    image: "/geo-images/greece/athens.webp",
  },
  {
    id: "city-thessaloniki",
    type: "city",
    parent: "greece",
    coords: [22.9444, 40.6401],
    name: { de: "Thessaloniki", hu: "Thesszaloniki", ro: "Salonic", en: "Thessaloniki" },
    description: {
      en: "Thessaloniki is Greece's second-largest city and the capital of the Macedonia region. Known for its rich Byzantine history, vibrant waterfront, and diverse culture, it offers a unique blend of old and new. The city's landmarks include the White Tower, the Arch of Galerius, and numerous Byzantine churches. Thessaloniki is also famous for its gastronomy and lively nightlife.",
      de: "Thessaloniki ist die zweitgrößte Stadt Griechenlands und die Hauptstadt der Region Makedonien. Bekannt für ihre reiche byzantinische Geschichte, die lebhafte Uferpromenade und die vielfältige Kultur, bietet sie eine einzigartige Mischung aus Alt und Neu. Zu den Wahrzeichen der Stadt gehören der Weiße Turm, der Galeriusbogen und zahlreiche byzantinische Kirchen. Thessaloniki ist auch berühmt für seine Gastronomie und sein lebhaftes Nachtleben.",
      hu: "Thesszaloniki Görögország második legnagyobb városa és a Makedónia régió fővárosa. Gazdag bizánci történelméről, vibráló vízpartjáról és sokszínű kultúrájáról ismert, a régi és az új egyedülálló keverékét kínálja. A város nevezetességei közé tartozik a Fehér Torony, Galériusz diadalíve és számos bizánci templom. Thesszaloniki híres gasztronómiájáról és élénk éjszakai életéről is.",
      ro: "Salonic este al doilea oraș ca mărime din Grecia și capitala regiunii Macedonia. Cunoscut pentru bogata sa istorie bizantină, faleza vibrantă și cultura diversă, oferă un amestec unic de vechi și nou. Monumentele orașului includ Turnul Alb, Arcul lui Galerius și numeroase biserici bizantine. Salonic este, de asemenea, faimos pentru gastronomia sa și viața de noapte plină de viață."
    },
    facts: {
      en: ["The White Tower is the symbol of the city.","The city was founded in 315 BC.","It is home to many UNESCO World Heritage Byzantine monuments.","Thessaloniki is known as the 'co-capital' of Greece."],
      de: ["Der Weiße Turm ist das Wahrzeichen der Stadt.","Die Stadt wurde 315 v. Chr. gegründet.","Sie beherbergt viele byzantinische Denkmäler des UNESCO-Weltkulturerbes.","Thessaloniki ist als 'Mit-Hauptstadt' Griechenlands bekannt."],
      hu: ["A Fehér Torony a város szimbóluma.","A várost i. e. 315-ben alapították.","Számos UNESCO Világörökség részét képező bizánci műemléknek ad otthont.","Thesszalonikit Görögország 'társfővárosaként' is ismerik."],
      ro: ["Turnul Alb este simbolul orașului.","Orașul a fost fondat în anul 315 î.Hr.","Găzduiește multe monumente bizantine din Patrimoniul Mondial UNESCO.","Salonic este cunoscut drept 'co-capitala' Greciei."]
    },
    image: "/geo-images/greece/thessaloniki.webp",
  },
  {
    id: "reg-crete",
    type: "region",
    parent: "greece",
    coords: [24.8093, 35.2401],
    name: { de: "Kreta", hu: "Kréta", ro: "Creta", en: "Crete" },
    description: {
      en: "Crete is the largest and most populous of the Greek islands, known for its varied terrain and rich history. It was the center of the Minoan civilization, the earliest advanced civilization in Europe. The island offers everything from bustling cities and ancient ruins like Knossos to beautiful beaches and rugged mountains. Crete is also famous for its unique culture, music, and healthy Mediterranean diet.",
      de: "Kreta ist die größte und bevölkerungsreichste der griechischen Inseln, bekannt für ihr abwechslungsreiches Gelände und ihre reiche Geschichte. Sie war das Zentrum der minoischen Zivilisation, der frühesten Hochkultur in Europa. Die Insel bietet alles von geschäftigen Städten und antiken Ruinen wie Knossos bis hin zu wunderschönen Stränden und schroffen Bergen. Kreta ist auch berühmt für seine einzigartige Kultur, Musik und die gesunde mediterrane Ernährung.",
      hu: "Kréta a legnagyobb és legnépesebb görög sziget, amely változatos terepviszonyairól és gazdag történelméről ismert. Ez volt a minószi civilizáció, Európa legkorábbi fejlett civilizációjának központja. A sziget a nyüzsgő városoktól és az olyan ókori romoktól kezdve, mint Knósszosz, a gyönyörű strandokig és a zord hegyekig mindent kínál. Kréta híres egyedi kultúrájáról, zenéjéről és egészséges mediterrán étrendjéről is.",
      ro: "Creta este cea mai mare și mai populată dintre insulele grecești, cunoscută pentru terenul său variat și istoria bogată. A fost centrul civilizației minoice, cea mai timpurie civilizație avansată din Europa. Insula oferă de toate, de la orașe pline de viață și ruine antice precum Knossos, până la plaje frumoase și munți accidentați. Creta este, de asemenea, faimoasă pentru cultura sa unică, muzică și dieta mediteraneană sănătoasă."
    },
    facts: {
      en: ["Knossos is the largest Bronze Age archaeological site on Crete.","The island is the birthplace of Zeus according to Greek mythology.","Crete has its own distinct dialect and musical tradition.","The Samaria Gorge is one of the longest canyons in Europe."],
      de: ["Knossos ist die größte archäologische Stätte der Bronzezeit auf Kreta.","Die Insel ist laut griechischer Mythologie der Geburtsort von Zeus.","Kreta hat seinen eigenen Dialekt und seine eigene Musiktradition.","Die Samaria-Schlucht ist einer der längsten Canyons in Europa."],
      hu: ["Knósszosz a legnagyobb bronzkori régészeti lelőhely Krétán.","A görög mitológia szerint a sziget Zeusz szülőhelye.","Krétának sajátos nyelvjárása és zenei hagyománya van.","A Szamaria-szurdok Európa egyik leghosszabb kanyonja."],
      ro: ["Knossos este cel mai mare sit arheologic din epoca bronzului din Creta.","Insula este locul de naștere al lui Zeus conform mitologiei grecești.","Creta are propriul său dialect distinct și tradiție muzicală.","Cheile Samariei sunt unul dintre cele mai lungi canioane din Europa."]
    },
    image: "/geo-images/greece/crete.webp",
  }
];

export const greeceCities: POI[] = [
  {
    id: "city-athens",
    type: "city",
    parent: "greece",
    coords: [23.7275, 37.9838],
    name: { de: "Athen", hu: "Athén", ro: "Atena", en: "Athens" },
    description: {
      de: "Athen ist Griechenlands fővárosa és az ókori világ egyik alappillére.",
      hu: "Athén Görögország fővárosa, ahol az ókor és a mai városi élet összeér.",
      ro: "Atena este capitala Greciei și un centru major al lumii antice.",
      en: "Athens is Greece's capital and one of the core cities of classical antiquity."
    },
    facts: {
      de: ["Akropolisz és Plaka a legismertebb részek.", "Itt tartották az első modern olimpiát 1896-ban.", "A város neve Athéné istennőtől jön.", "Az ókori örökség ma is mindenütt látszik."],
      hu: ["Az Akropolisz és a Plaka a legismertebb részek.", "Itt rendezték az első modern olimpiát 1896-ban.", "A város nevét Athéné istennőről kapta.", "Az ókori örökség ma is mindenütt látható."],
      ro: ["Acropola și Plaka sunt cele mai cunoscute zone.", "Aici au avut loc primele Jocuri Olimpice moderne în 1896.", "Orașul poartă numele zeiței Athena.", "Moștenirea antică este vizibilă peste tot."],
      en: ["The Acropolis and Plaka are the best-known areas.", "The first modern Olympics were held here in 1896.", "The city is named after the goddess Athena.", "Ancient heritage is visible all over the city."]
    },
    image: "/geo-images/greece/city-athens.webp",
  },
  {
    id: "city-thessaloniki",
    type: "city",
    parent: "greece",
    coords: [22.9444, 40.6401],
    name: { de: "Thessaloniki", hu: "Thesszaloniki", ro: "Salonic", en: "Thessaloniki" },
    description: {
      de: "Thessaloniki Görögország második legnagyobb városa, bizánci arculattal.",
      hu: "Thesszaloniki az ország második legnagyobb városa és erős bizánci örökséggel bír.",
      ro: "Salonic este al doilea oraș al Greciei și are un puternic profil bizantin.",
      en: "Thessaloniki is Greece's second-largest city with a strong Byzantine identity."
    },
    facts: {
      de: ["A Fehér Torony a jelképe.", "Sok bizánci templom maradt fenn.", "Fontos kikötő és kulturális központ.", "A gasztronómiája különösen híres."],
      hu: ["A Fehér Torony a jelképe.", "Sok bizánci templom maradt fenn.", "Fontos kikötő és kulturális központ.", "A gasztronómiája különösen híres."],
      ro: ["Turnul Alb este simbolul orașului.", "Au rămas multe biserici bizantine.", "Este un port și un centru cultural important.", "Este faimos pentru gastronomie."],
      en: ["The White Tower is its symbol.", "Many Byzantine churches survive here.", "It is an important port and cultural hub.", "The city is famous for its food."]
    },
    image: "/geo-images/greece/city-thessaloniki.webp",
  },
  {
    id: "city-heraklion",
    type: "city",
    parent: "greece",
    coords: [25.1442, 35.3387],
    name: { de: "Heraklion", hu: "Iraklio", ro: "Heraklion", en: "Heraklion" },
    description: {
      de: "Heraklion Kréta legnagyobb városa és Knossos kapuja.",
      hu: "Iraklio Kréta legnagyobb városa, és Knósszosz felé vezető fő kapu.",
      ro: "Heraklion este cel mai mare oraș al Cretei și poarta spre Knossos.",
      en: "Heraklion is Crete's largest city and the gateway to Knossos."
    },
    facts: {
      de: ["A velencei kikötő meghatározó látvány.", "Közel van Knósszoszhoz.", "Erős múzeumi és régészeti háttérrel bír.", "A sziget gazdasági központja."],
      hu: ["A velencei kikötő meghatározó látvány.", "Közel van Knósszoszhoz.", "Erős múzeumi és régészeti háttérrel bír.", "A sziget gazdasági központja."],
      ro: ["Portul venețian este foarte vizibil.", "Este aproape de Knossos.", "Are o bază muzeală și arheologică puternică.", "Este centrul economic al insulei."],
      en: ["The Venetian harbor shapes the city.", "It is close to Knossos.", "It has a strong museum and archaeology scene.", "It is the island's economic center."]
    },
    image: "/geo-images/greece/city-heraklion.webp",
  },
  {
    id: "city-chania",
    type: "city",
    parent: "greece",
    coords: [24.0156, 35.5138],
    name: { de: "Chania", hu: "Haniá", ro: "Chania", en: "Chania" },
    description: {
      de: "Chania Kréta egyik legszebb városa, velencei óvárossal.",
      hu: "Haniá Kréta egyik legszebb városa, híres velencei óvárosáról.",
      ro: "Chania este unul dintre cele mai frumoase orașe din Creta, cu un centru vechi venețian.",
      en: "Chania is one of Crete's most beautiful cities, known for its Venetian old town."
    },
    facts: {
      de: ["A kikötő különleges hangulatú.", "Az óvárosban velencei és oszmán nyomok is vannak.", "A nyugati Kréta egyik fő városa.", "Jó kiindulópont strandokhoz és szurdokokhoz."],
      hu: ["A kikötő különleges hangulatú.", "Az óvárosban velencei és oszmán nyomok is vannak.", "A nyugati Kréta egyik fő városa.", "Jó kiindulópont strandokhoz és szurdokokhoz."],
      ro: ["Portul are o atmosferă aparte.", "Centrul vechi păstrează urme venețiene și otomane.", "Este unul dintre orașele principale din vestul Cretei.", "Este o bază bună pentru plaje și chei."],
      en: ["The harbor has a special atmosphere.", "The old town keeps Venetian and Ottoman traces.", "It is a major city in western Crete.", "It is a good base for beaches and gorges."]
    },
    image: "/geo-images/greece/city-chania.webp",
  },
  {
    id: "city-rhodes",
    type: "city",
    parent: "greece",
    coords: [28.2278, 36.4412],
    name: { de: "Rhodos", hu: "Rodosz", ro: "Rodos", en: "Rhodes" },
    description: {
      de: "Rhodos középkori óvárosa Görögország egyik legismertebb történelmi városa.",
      hu: "Rodosz középkori óvárosa az ország egyik legfontosabb történelmi helyszíne.",
      ro: "Centrul vechi al orașului Rodos este unul dintre cele mai cunoscute situri istorice din Grecia.",
      en: "Rhodes Old Town is one of Greece's best-known historic cityscapes."
    },
    facts: {
      de: ["UNESCO világörökség.", "A johanniták fontos erődvárosa volt.", "A városfalak ma is állnak.", "A Nagymesteri palota fő látványosság."],
      hu: ["UNESCO világörökség.", "A johanniták fontos erődvárosa volt.", "A városfalak ma is állnak.", "A Nagymesteri palota fő látványosság."],
      ro: ["Este sit UNESCO.", "A fost o fortăreață importantă a Cavalerilor Ioaniți.", "Zidurile medievale sunt încă în picioare.", "Palatul Marilor Maeștri este atracția principală."],
      en: ["It is a UNESCO World Heritage site.", "It was a major fortress of the Knights Hospitaller.", "The medieval walls still stand.", "The Palace of the Grand Master is the main sight."]
    },
    image: "/geo-images/greece/city-rhodes.webp",
  }
];

export const greeceCulture: POI[] = [
  {
    id: "cult-delphi",
    type: "culture",
    parent: "greece",
    coords: [22.5010, 38.4824],
    name: { de: "Delphi", hu: "Delphoi", ro: "Delfi", en: "Delphi" },
    description: {
      en: "Delphi was considered the center of the world in ancient Greece, home to the famous Oracle of Apollo. Located on the slopes of Mount Parnassus, it is one of the most important archaeological sites in the country. Visitors can explore the Temple of Apollo, the ancient theater, and the stadium where the Pythian Games were held. The site offers breathtaking views and a profound sense of history and spirituality.",
      de: "Delphi galt im antiken Griechenland als Zentrum der Welt und war die Heimat des berühmten Orakels von Apollon. An den Hängen des Berges Parnass gelegen, ist es eine der wichtigsten archäologischen Stätten des Landes. Besucher können den Apollon-Tempel, das antike Theater und das Stadion erkunden, in dem die Pythischen Spiele stattfanden. Die Stätte bietet atemberaubende Ausblicke und ein tiefes Gefühl von Geschichte und Spiritualität.",
      hu: "Delphoit az ókori Görögországban a világ középpontjának tekintették, itt volt Apollón híres jósdája. A Parnasszosz-hegy lejtőin található, az ország egyik legfontosabb régészeti lelőhelye. A látogatók felfedezhetik Apollón templomát, az ókori színházat és a stadiont, ahol a püthói játékokat tartották. A helyszín lélegzetelállító kilátást és a történelem és a spiritualitás mély érzését kínálja.",
      ro: "Delfi a fost considerat centrul lumii în Grecia antică, găzduind faimosul Oracol al lui Apollo. Situat pe pantele Muntelui Parnas, este unul dintre cele mai importante situri arheologice din țară. Vizitatorii pot explora Templul lui Apollo, teatrul antic și stadionul unde aveau loc Jocurile Pythian. Situl oferă vederi uluitoare și un sentiment profund de istorie și spiritualitate."
    },
    facts: {
      en: ["The Oracle of Delphi was the most prestigious oracle in the Greek world.","The site is a UNESCO World Heritage site.","The 'Omphalos' stone marked the center of the earth.","The Pythian Games were the precursors to the modern Olympics."],
      de: ["Das Orakel von Delphi war das angesehenste Orakel in der griechischen Welt.","Die Stätte ist ein UNESCO-Weltkulturerbe.","Der 'Omphalos'-Stein markierte das Zentrum der Erde.","Die Pythischen Spiele waren die Vorläufer der modernen Olympiade."],
      hu: ["A delphoi jósda volt a legtekintélyesebb jósda a görög világban.","A helyszín az UNESCO Világörökség része.","Az 'Omphalos' kő jelezte a föld középpontját.","A püthói játékok a modern olimpia előfutárai voltak."],
      ro: ["Oracolul din Delfi a fost cel mai prestigios oracol din lumea greacă.","Situl este un sit al Patrimoniului Mondial UNESCO.","Piatra 'Omphalos' marca centrul pământului.","Jocurile Pythian au fost precursorii Olimpice moderne."]
    },
    image: "/geo-images/greece/delphi.webp",
  },
  {
    id: "cult-meteora",
    type: "culture",
    parent: "greece",
    coords: [21.6300, 39.7125],
    name: { de: "Meteora", hu: "Meteorák", ro: "Meteora", en: "Meteora" },
    description: {
      en: "Meteora is a stunning rock formation in central Greece hosting one of the largest and most precipitously built complexes of Eastern Orthodox monasteries. The monasteries are built on immense natural pillars and hill-like rounded boulders that dominate the local area. It is a UNESCO World Heritage site, recognized for both its natural beauty and its cultural significance as a center of monastic life since the 14th century.",
      de: "Meteora ist eine beeindruckende Felsformation in Mittelgriechenland, die einen der größten und am steilsten gebauten Komplexe östlich-orthodoxer Klöster beherbergt. Die Klöster sind auf riesigen natürlichen Säulen und hügelartigen, abgerundeten Felsbrocken errichtet, die die Umgebung dominieren. Es ist ein UNESCO-Weltkulturerbe, das sowohl für seine natürliche Schönheit als auch für seine kulturelle Bedeutung als Zentrum des mönchischen Lebens seit dem 14. Jahrhundert anerkannt ist.",
      hu: "A Meteorák lenyűgöző sziklaformáció Közép-Görögországban, amely a keleti ortodox kolostorok egyik legnagyobb és legmeredekebben épült komplexumának ad otthont. A kolostorok hatalmas természetes oszlopokra és dombszerű, lekerekített sziklákra épültek, amelyek uralják a környéket. Az UNESCO Világörökség része, amelyet természeti szépsége és a 14. század óta a szerzetesi élet központjaként betöltött kulturális jelentősége miatt is elismernek.",
      ro: "Meteora este o formațiune stâncoasă uimitoare din centrul Greciei, care găzduiește unul dintre cele mai mari și mai abrupt construite complexe de mănăstiri ortodoxe răsăritene. Mănăstirile sunt construite pe piloni naturali imenși și bolovani rotunjiți ca niște dealuri care domină zona locală. Este un sit al Patrimoniului Mondial UNESCO, recunoscut atât pentru frumusețea sa naturală, cât și pentru semnificația sa culturală ca centru al vieții monahale încă din secolul al XIV-lea."
    },
    facts: {
      en: ["The name Meteora means 'suspended in the air'.","Originally there were 24 monasteries, but only 6 remain active today.","The monasteries were built using ropes and nets to haul up materials.","It has been featured in several films, including James Bond's 'For Your Eyes Only'."],
      de: ["Der Name Meteora bedeutet 'in der Luft schwebend'.","Ursprünglich gab es 24 Klöster, aber heute sind nur noch 6 aktiv.","Die Klöster wurden mit Seilen und Netzen gebaut, um Materialien hochzuziehen.","Es war in mehreren Filmen zu sehen, darunter James Bonds 'In tödlicher Mission'."],
      hu: ["A Meteora név jelentése: 'levegőben lebegő'.","Eredetileg 24 kolostor volt, de ma már csak 6 működik.","A kolostorokat kötelek és hálók segítségével építették, így húzták fel az anyagokat.","Számos filmben szerepelt, többek között a James Bond: Szigorúan bizalmas című filmben."],
      ro: ["Numele Meteora înseamnă 'suspendat în aer'.","Inițial au fost 24 de mănăstiri, dar astăzi mai funcționează doar 6.","Mănăstirile au fost construite folosind frânghii și plase pentru a ridica materialele.","A apărut în mai multe filme, inclusiv în 'For Your Eyes Only' din seria James Bond."]
    },
    image: "/geo-images/greece/meteora.webp",
  },
  {
    id: "cult-acropolis",
    type: "culture",
    parent: "greece",
    coords: [23.7258, 37.9715],
    name: { de: "Akropolis", hu: "Akropolisz", ro: "Acropola", en: "Acropolis" },
    description: {
      de: "Az Akropolisz Athén ikonikus sziklavára és az ókori Görögország jelképe.",
      hu: "Az Akropolisz Athén ikonikus sziklavára és az ókori Görögország jelképe.",
      ro: "Acropola este cetatea-simbol a Atenei și a Greciei antice.",
      en: "The Acropolis is Athens' iconic hilltop citadel and a symbol of ancient Greece."
    },
    facts: {
      de: ["A Parthenón a legismertebb épülete.", "UNESCO világörökség.", "Az ókori Athén vallási központja volt.", "A sziklára épült erőd ma is uralja a várost."],
      hu: ["A Parthenón a legismertebb épülete.", "UNESCO világörökség.", "Az ókori Athén vallási központja volt.", "A sziklára épült erőd ma is uralja a várost."],
      ro: ["Partenonul este cea mai cunoscută clădire.", "Este sit UNESCO.", "A fost centrul religios al Atenei antice.", "Fortăreața de pe stâncă domină și azi orașul."],
      en: ["The Parthenon is its best-known building.", "It is a UNESCO World Heritage site.", "It was the religious center of ancient Athens.", "The rock fortress still dominates the city."]
    },
    image: "/geo-images/greece/cult-acropolis.webp",
  },
  {
    id: "cult-olympia",
    type: "culture",
    parent: "greece",
    coords: [21.6300, 37.6378],
    name: { de: "Olympia", hu: "Olümpia", ro: "Olimpia", en: "Olympia" },
    description: {
      de: "Olympia az ókori olimpiai játékok szent helyszíne volt.",
      hu: "Olümpia az ókori olimpiai játékok szent helyszíne volt.",
      ro: "Olimpia a fost locul sacru al Jocurilor Olimpice antice.",
      en: "Olympia was the sacred site of the ancient Olympic Games."
    },
    facts: {
      de: ["Itt tartották az első játékokat i. e. 776-ban.", "UNESCO világörökség.", "Zeusz temploma fontos maradvány.", "Az olimpiai láng hagyománya innen ered."],
      hu: ["Itt tartották az első játékokat i. e. 776-ban.", "UNESCO világörökség.", "Zeusz temploma fontos maradvány.", "Az olimpiai láng hagyománya innen ered."],
      ro: ["Primele jocuri au avut loc în 776 î.Hr.", "Este sit UNESCO.", "Templul lui Zeus este o ruină importantă.", "Tradiția flăcării olimpice pornește de aici."],
      en: ["The first games were held here in 776 BC.", "It is a UNESCO World Heritage site.", "The Temple of Zeus is a major ruin.", "The Olympic flame tradition comes from here."]
    },
    image: "/geo-images/greece/cult-olympia.webp",
  },
  {
    id: "cult-mycenae",
    type: "culture",
    parent: "greece",
    coords: [22.7539, 37.7306],
    name: { de: "Mykene", hu: "Mükéné", ro: "Micene", en: "Mycenae" },
    description: {
      de: "Mykene a bronzkori görög civilizáció egyik legfontosabb központja volt.",
      hu: "Mükéné a bronzkori görög civilizáció egyik legfontosabb központja volt.",
      ro: "Micene a fost unul dintre cele mai importante centre ale Greciei din epoca bronzului.",
      en: "Mycenae was one of the most important centers of Bronze Age Greece."
    },
    facts: {
      de: ["Az oroszlános kapu a legismertebb emlék.", "UNESCO világörökség.", "Agamemnón városaként is ismert.", "A kincseskamrák a hatalmi múltat idézik."],
      hu: ["Az oroszlános kapu a legismertebb emlék.", "UNESCO világörökség.", "Agamemnón városaként is ismert.", "A kincseskamrák a hatalmi múltat idézik."],
      ro: ["Poarta Leilor este monumentul cel mai cunoscut.", "Este sit UNESCO.", "Este cunoscută și ca cetatea lui Agamemnon.", "Mormintele regale evocă trecutul său de putere."],
      en: ["The Lion Gate is its best-known monument.", "It is a UNESCO World Heritage site.", "It is also known as Agamemnon's city.", "The royal tombs recall its powerful past."]
    },
    image: "/geo-images/greece/cult-mycenae.webp",
  }
];

export const greeceNature: POI[] = [
  {
    id: "nat-santorini",
    type: "nature",
    parent: "greece",
    coords: [25.4315, 36.3932],
    name: { de: "Santorini", hu: "Szantorini", ro: "Santorini", en: "Santorini" },
    description: {
      en: "Santorini is one of the most famous Greek islands, known for its dramatic views, stunning sunsets, and white-washed houses perched on volcanic cliffs. The island is the remnant of a massive volcanic eruption that created a large caldera. Visitors are drawn to its unique beaches with black, red, and white sand, as well as its world-renowned wineries and charming villages like Oia and Fira.",
      de: "Santorini ist eine der berühmtesten griechischen Inseln, bekannt für ihre dramatischen Aussichten, atemberaubenden Sonnenuntergänge und weiß getünchten Häuser auf vulkanischen Klippen. Die Insel ist der Überrest eines gewaltigen Vulkanausbruchs, der eine große Caldera schuf. Besucher werden von den einzigartigen Stränden mit schwarzem, rotem und weißem Sand sowie von den weltberühmten Weingütern und charmanten Dörfern wie Oia und Fira angezogen.",
      hu: "Szantorini az egyik leghíresebb görög sziget, amely drámai kilátásáról, lenyűgöző naplementéiről és a vulkáni sziklákon álló, fehérre meszelt házairól ismert. A sziget egy hatalmas vulkánkitörés maradványa, amely egy nagy kalderát hozott létre. A látogatókat vonzzák az egyedülálló fekete, vörös és fehér homokos strandok, valamint a világhírű borászatok és az olyan bájos falvak, mint Oia és Fira.",
      ro: "Santorini este una dintre cele mai faimoase insule grecești, cunoscută pentru vederile sale dramatice, apusurile uimitoare și casele albe cocoțate pe stânci vulcanice. Insula este rămășița unei erupții vulcanice masive care a creat o calderă mare. Vizitatorii sunt atrași de plajele sale unice cu nisip negru, roșu și alb, precum și de cramele sale de renume mondial și satele fermecătoare precum Oia și Fira."
    },
    facts: {
      en: ["The island's official name is Thira.","Santorini is home to a unique variety of grape called Assyrtiko.","The volcanic eruption around 1600 BC was one of the largest in history.","The island is often associated with the legend of Atlantis."],
      de: ["Der offizielle Name der Insel ist Thira.","Santorini beherbergt eine einzigartige Rebsorte namens Assyrtiko.","Der Vulkanausbruch um 1600 v. Chr. war einer der größten der Geschichte.","Die Insel wird oft mit der Legende von Atlantis in Verbindung gebracht."],
      hu: ["A sziget hivatalos neve Thira.","Szantorini egy egyedülálló szőlőfajta, az Assyrtiko otthona.","Az i. e. 1600 körüli vulkánkitörés a történelem egyik legnagyobbja volt.","A szigetet gyakran hozzák összefüggésbe Atlantisz legendájával."],
      ro: ["Numele oficial al insulei este Thira.","Santorini găzduiește o varietate unică de struguri numită Assyrtiko.","Erupția vulcanică din jurul anului 1600 î.Hr. a fost una dintre cele mai mari din istorie.","Insula este adesea asociată cu legenda Atlantidei."]
    },
    image: "/geo-images/greece/santorini.webp",
  },
  {
    id: "nat-mykonos",
    type: "nature",
    parent: "greece",
    coords: [25.3289, 37.4467],
    name: { de: "Mykonos", hu: "Mükonosz", ro: "Mykonos", en: "Mykonos" },
    description: {
      de: "Mykonos a Cikladok egyik ikonikus szigete, fehér házakkal és szélmalmokkal.",
      hu: "Mükonosz a Cikladok ikonikus szigete, fehér házakkal és szélmalmokkal.",
      ro: "Mykonos este o insulă emblematică din Ciclade, cu case albe și mori de vânt.",
      en: "Mykonos is an iconic Cycladic island with white houses and windmills."
    },
    facts: {
      de: ["Kis-Velence a legismertebb partszakasz.", "A szélmalmok a sziget jelképei.", "A kikötő nagyon élénk nyáron.", "A strandok és az éjszakai élet is híresek."],
      hu: ["Kis-Velence a legismertebb partszakasz.", "A szélmalmok a sziget jelképei.", "A kikötő nagyon élénk nyáron.", "A strandok és az éjszakai élet is híresek."],
      ro: ["Mica Veneție este cea mai cunoscută zonă de pe mal.", "Moriile de vânt sunt simbolul insulei.", "Portul este foarte animat vara.", "Plajele și viața de noapte sunt celebre."],
      en: ["Little Venice is the best-known waterfront area.", "The windmills are the island's symbol.", "The harbor is very lively in summer.", "The beaches and nightlife are famous."]
    },
    image: "/geo-images/greece/nat-mykonos.webp",
  },
  {
    id: "nat-olympus",
    type: "nature",
    parent: "greece",
    coords: [22.3584, 40.0858],
    name: { de: "Olymp", hu: "Olümposz", ro: "Olimp", en: "Mount Olympus" },
    description: {
      de: "Der Olymp Görögország legmagasabb hegye és az istenek hegyeként ismert.",
      hu: "Az Olümposz Görögország legmagasabb hegye és az istenek hegye.",
      ro: "Olimpul este cel mai înalt munte al Greciei și muntele zeilor.",
      en: "Mount Olympus is Greece's highest mountain and the mountain of the gods."
    },
    facts: {
      de: ["A mítosz szerint itt éltek az istenek.", "Nemzeti park területén fekszik.", "A csúcsok látványa ikonikus.", "A görög természet egyik szimbóluma."],
      hu: ["A mítosz szerint itt éltek az istenek.", "Nemzeti park területén fekszik.", "A csúcsok látványa ikonikus.", "A görög természet egyik szimbóluma."],
      ro: ["În mitologie aici locuiau zeii.", "Se află într-un parc național.", "Vârfurile sale sunt iconice.", "Este un simbol al naturii grecești."],
      en: ["In myth, the gods lived here.", "It lies within a national park.", "Its peaks are iconic.", "It is a symbol of Greek nature."]
    },
    image: "/geo-images/greece/nat-olympus.webp",
  },
  {
    id: "nat-samaria",
    type: "nature",
    parent: "greece",
    coords: [23.9656, 35.2989],
    name: { de: "Samaria-Schlucht", hu: "Szamaria-szurdok", ro: "Cheile Samaria", en: "Samaria Gorge" },
    description: {
      de: "A Szamaria-szurdok Kréta leglátványosabb túraútvonalai közé tartozik.",
      hu: "A Szamaria-szurdok Kréta egyik leglátványosabb természeti helye.",
      ro: "Cheile Samaria sunt unul dintre cele mai spectaculoase locuri naturale din Creta.",
      en: "Samaria Gorge is one of Crete's most spectacular natural sites."
    },
    facts: {
      de: ["Körülbelül 16 km hosszú.", "A Nemzeti Park része.", "A túra Agia Roumelinél ér véget.", "Ritka vadkecskék élnek itt."],
      hu: ["Körülbelül 16 km hosszú.", "A Nemzeti Park része.", "A túra Agia Roumelinél ér véget.", "Ritka vadkecskék élnek itt."],
      ro: ["Are aproximativ 16 km lungime.", "Face parte din parc național.", "Drumeția se termină la Agia Roumeli.", "Aici trăiesc capre sălbatice rare."],
      en: ["It is about 16 km long.", "It is part of a national park.", "The hike ends at Agia Roumeli.", "Rare wild goats live here."]
    },
    image: "/geo-images/greece/nat-samaria.webp",
  },
  {
    id: "nat-myrtos",
    type: "nature",
    parent: "greece",
    coords: [20.5367, 38.3390],
    name: { de: "Myrtos", hu: "Myrtos strand", ro: "Plaja Myrtos", en: "Myrtos Beach" },
    description: {
      de: "Myrtos strandja Kefalónián a görög tengerpart egyik ikonja.",
      hu: "A kefalóniai Myrtos strand a görög tengerpart egyik ikonja.",
      ro: "Plaja Myrtos din Kefalonia este o imagine iconică a litoralului grecesc.",
      en: "Myrtos Beach on Kefalonia is an icon of the Greek coastline."
    },
    facts: {
      de: ["Fehér kavicsos öböl.", "Meredek mészkősziklák veszik körül.", "A víz különösen türkiz.", "Naplementekor a legszebb."],
      hu: ["Fehér kavicsos öböl.", "Meredek mészkősziklák veszik körül.", "A víz különösen türkiz.", "Naplementekor a legszebb."],
      ro: ["Golf cu pietriș alb.", "Este înconjurată de stânci de calcar.", "Apa este foarte turcoaz.", "Este superbă la apus."],
      en: ["A white-pebble bay.", "It is framed by limestone cliffs.", "The water is especially turquoise.", "It is best at sunset."]
    },
    image: "/geo-images/greece/nat-myrtos.webp",
  }
];

export const greeceAllPoi: POI[] = [greeceCountry, ...greeceRegions, ...greeceCities, ...greeceCulture, ...greeceNature];
