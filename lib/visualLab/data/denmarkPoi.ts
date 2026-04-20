import type { POI } from "./poi";

export const denmarkCountry: POI = {
  id: "denmark",
  type: "country",
  parent: "EU",
  coords: [12.5683, 55.6761],
  name: { de: "Dänemark", hu: "Dánia", ro: "Danemarca", en: "Denmark" },
  description: {
    en: "Denmark is a Scandinavian country in Northern Europe, consisting of the Jutland Peninsula and numerous islands. It is known for its high quality of life, progressive social policies, and iconic design. As the oldest kingdom in Europe, Denmark has a rich history of Vikings and maritime trade. The landscape is characterized by flat, fertile land, sandy coasts, and a strong connection to the sea, which has shaped its culture and economy for centuries.",
    de: "Dänemark ist ein skandinavisches Land in Nordeuropa, das aus der Halbinsel Jütland und zahlreichen Inseln besteht. Es ist bekannt für seine hohe Lebensqualität, seine progressive Sozialpolitik und sein ikonisches Design. Als ältestes Königreich Europas hat Dänemark eine reiche Geschichte von Wikingern und Seehandel. Die Landschaft ist geprägt von flachem, fruchtbarem Land, Sandküsten und einer starken Verbindung zum Meer, die seine Kultur und Wirtschaft seit Jahrhunderten prägt.",
    hu: "Dánia egy skandináv ország Észak-Európában, amely a Jütland-félszigetből és számos szigetből áll. Magas életminőségéről, progresszív szociális politikájáról és ikonikus dizájnjáról ismert. Európa legrégebbi királyságaként Dánia gazdag viking történelemmel és tengeri kereskedelmi múlttal rendelkezik. Tájait sík, termékeny földek, homokos tengerpartok és a tengerhez való szoros kötődés jellemzi, amely évszázadok óta meghatározza kultúráját és gazdaságát.",
    ro: "Danemarca este o țară scandinavă din Europa de Nord, formată din Peninsula Iutlanda și numeroase insule. Este cunoscută pentru calitatea ridicată a vieții, politicile sociale progresiste și designul iconic. Fiind cel mai vechi regat din Europa, Danemarca are o istorie bogată de vikingi și comerț maritim. Peisajul este caracterizat de terenuri plane și fertile, coaste nisipoase și o legătură puternică cu marea, care i-a modelat cultura și economia timp de secole."
  },
  facts: {
    en: [
      "Denmark is often ranked as one of the happiest countries in the world.",
      "The Danish monarchy is one of the oldest in the world, dating back over 1,000 years.",
      "The Danish flag, the Dannebrog, is the oldest continuously used national flag in the world.",
      "Denmark has more bicycles than people in its capital, Copenhagen.",
      "The country is made up of over 400 named islands.",
      "Lego was invented in Denmark in 1932."
    ],
    de: [
      "Dänemark wird oft als eines der glücklichsten Länder der Welt eingestuft.",
      "Die dänische Monarchie ist eine der ältesten der Welt und blickt auf eine über 1.000-jährige Geschichte zurück.",
      "Die dänische Flagge, der Dannebrog, ist die älteste kontinuierlich verwendete Nationalflagge der Welt.",
      "In der Hauptstadt Kopenhagen gibt es mehr Fahrräder als Einwohner.",
      "Das Land besteht aus über 400 benannten Inseln.",
      "Lego wurde 1932 in Dänemark erfunden."
    ],
    hu: [
      "Dániát gyakran a világ egyik legboldogabb országaként tartják számon.",
      "A dán monarchia az egyik legrégebbi a világon, több mint 1000 éves múltra tekint vissza.",
      "A dán zászló, a Dannebrog, a világ legrégebbi, folyamatosan használt nemzeti lobogója.",
      "A fővárosban, Koppenhágában több kerékpár van, mint ember.",
      "Az ország több mint 400 elnevezett szigetből áll.",
      "A Legót Dániában találták fel 1932-ben."
    ],
    ro: [
      "Danemarca este adesea clasată ca fiind una dintre cele mai fericite țări din lume.",
      "Monarhia daneză este una dintre cele mai vechi din lume, datând de peste 1.000 de ani.",
      "Steagul danez, Dannebrog, este cel mai vechi steag național utilizat continuu din lume.",
      "Danemarca are mai multe biciclete decât oameni în capitala sa, Copenhaga.",
      "Țara este formată din peste 400 de insule cu nume.",
      "Lego a fost inventat în Danemarca în 1932."
    ]
  },
  image: "/geo-images/denmark/denmark-main.webp",
};

export const denmarkRegions: POI[] = [
  {
    id: "city-copenhagen",
    type: "city",
    parent: "denmark",
    coords: [12.5683, 55.6761],
    name: { de: "Kopenhagen", hu: "Koppenhága", ro: "Copenhaga", en: "Copenhagen" },
    description: {
      en: "Copenhagen, the capital of Denmark, is a vibrant city known for its historic charm and modern innovation. It features the famous Nyhavn harbor with its colorful houses, the historic Tivoli Gardens amusement park, and the iconic Little Mermaid statue. The city is a global leader in sustainability and bicycle culture, offering a high quality of life and a rich culinary scene, including many Michelin-starred restaurants.",
      de: "Kopenhagen, die Hauptstadt Dänemarks, ist eine lebendige Stadt, die für ihren historischen Charme und ihre modernen Innovationen bekannt ist. Sie beherbergt den berühmten Hafen Nyhavn mit seinen bunten Häusern, den historischen Vergnügungspark Tivoli und die ikonische Statue der Kleinen Meerjungfrau. Die Stadt ist weltweit führend in Sachen Nachhaltigkeit und Fahrradkultur und bietet eine hohe Lebensqualität sowie eine reiche kulinarische Szene mit vielen Michelin-Stern-Restaurants.",
      hu: "Koppenhága, Dánia fővárosa, történelmi bájáról és modern innovációiról ismert vibráló város. Itt található a híres Nyhavn kikötő színes házaival, a történelmi Tivoli kertek vidámparkja és az ikonikus Kis hableány szobor. A város világelső a fenntarthatóság és a kerékpáros kultúra terén, magas életminőséget és gazdag gasztronómiai kínálatot nyújt, számos Michelin-csillagos étteremmel.",
      ro: "Copenhaga, capitala Danemarcei, este un oraș vibrant cunoscut pentru farmecul său istoric și inovația modernă. Acesta găzduiește faimosul port Nyhavn cu casele sale colorate, parcul istoric de distracții Grădinile Tivoli și emblematica statuie Mica Sirenă. Orașul este un lider global în sustenabilitate și cultura bicicletelor, oferind o calitate ridicată a vieții și o scenă culinară bogată, inclusiv multe restaurante cu stele Michelin."
    },
    facts: {
      en: ["Tivoli Gardens is one of the oldest operating amusement parks in the world.","The city is home to the Freetown Christiania, a self-proclaimed autonomous neighborhood.","Copenhagen's harbor is clean enough to swim in.","The Strøget is one of the longest pedestrian shopping streets in Europe."],
      de: ["Die Tivoli-Gärten sind einer der ältesten in Betrieb befindlichen Vergnügungsparks der Welt.","In der Stadt befindet sich die Freistadt Christiania, ein selbsternanntes autonomes Viertel.","Der Hafen von Kopenhagen ist sauber genug, um darin zu schwimmen.","Der Strøget ist eine der längsten Fußgängerzonen Europas."],
      hu: ["A Tivoli kertek a világ egyik legrégebbi működő vidámparkja.","A városban található Christiania, egy önjelölt autonóm negyed.","Koppenhága kikötője elég tiszta ahhoz, hogy úszni lehessen benne.","A Strøget Európa egyik leghosszabb sétálóutcája."],
      ro: ["Grădinile Tivoli sunt unul dintre cele mai vechi parcuri de distracții în funcțiune din lume.","Orașul găzduiește Orașul Liber Christiania, un cartier autonom autoproclamat.","Portul Copenhagăi este suficient de curat pentru a înota în el.","Strøget este una dintre cele mai lungi străzi comerciale pietonale din Europa."]
    },
    image: "/geo-images/denmark/copenhagen.webp",
  },
  {
    id: "city-aarhus",
    type: "city",
    parent: "denmark",
    coords: [10.2039, 56.1567],
    name: { de: "Aarhus", hu: "Aarhus", ro: "Aarhus", en: "Aarhus" },
    description: {
      en: "Aarhus is Denmark's second-largest city, located on the east coast of the Jutland peninsula. It is a dynamic university city known for its blend of history and contemporary culture. Key attractions include the ARoS Aarhus Art Museum with its rainbow panorama, and Den Gamle By, an open-air museum showcasing Danish urban history. Aarhus offers a cozy atmosphere, beautiful forests, and beaches just a short distance from the city center.",
      de: "Aarhus ist die zweitgrößte Stadt Dänemarks und liegt an der Ostküste der Halbinsel Jütland. Es ist eine dynamische Universitätsstadt, die für ihre Mischung aus Geschichte und zeitgenössischer Kultur bekannt ist. Zu den Hauptattraktionen gehören das Kunstmuseum ARoS Aarhus mit seinem Regenbogen-Panorama und Den Gamle By, ein Freilichtmuseum, das die dänische Stadtgeschichte zeigt. Aarhus bietet eine gemütliche Atmosphäre, wunderschöne Wälder und Strände in unmittelbarer Nähe des Stadtzentrums.",
      hu: "Aarhus Dánia második legnagyobb városa, a Jütland-félsziget keleti partján fekszik. Dinamikus egyetemi város, amely a történelem és a kortárs kultúra ötvözetéről ismert. Főbb látnivalói közé tartozik az ARoS Aarhus Művészeti Múzeum a szivárványos panorámájával, valamint a Den Gamle By, egy szabadtéri múzeum, amely a dán várostörténetet mutatja be. Aarhus hangulatos légkört, gyönyörű erdőket és strandokat kínál a városközponttól nem messze.",
      ro: "Aarhus este al doilea oraș ca mărime din Danemarca, situat pe coasta de est a peninsulei Iutlanda. Este un oraș universitar dinamic, cunoscut pentru amestecul său de istorie și cultură contemporană. Atracțiile principale includ Muzeul de Artă ARoS Aarhus cu panorama sa curcubeu și Den Gamle By, un muzeu în aer liber care prezintă istoria urbană daneză. Aarhus oferă o atmosferă primitoare, păduri frumoase și plaje la mică distanță de centrul orașului."
    },
    facts: {
      en: ["Aarhus was a European Capital of Culture in 2017.","The city was founded as a Viking settlement in the 8th century.","The Aarhus Cathedral is the tallest and longest church in Denmark.","The Moesgaard Museum is famous for its archaeological exhibits, including the Grauballe Man."],
      de: ["Aarhus war 2017 Kulturhauptstadt Europas.","Die Stadt wurde im 8. Jahrhundert als Wikingersiedlung gegründet.","Der Dom von Aarhus ist die höchste und längste Kirche Dänemarks.","Das Moesgaard Museum ist berühmt für seine archäologischen Exponate, darunter der Grauballe-Mann."],
      hu: ["Aarhus 2017-ben Európa Kulturális Fővárosa volt.","A várost viking településként alapították a 8. században.","Az aarhus-i katedrális Dánia legmagasabb és leghosszabb temploma.","A Moesgaard Múzeum híres régészeti kiállításairól, köztük a Grauballe-i férfiról."],
      ro: ["Aarhus a fost Capitală Europeană a Culturii în 2017.","Orașul a fost fondat ca așezare vikingă în secolul al VIII-lea.","Catedrala din Aarhus este cea mai înaltă și mai lungă biserică din Danemarca.","Muzeul Moesgaard este faimos pentru exponatele sale arheologice, inclusiv Omul de la Grauballe."]
    },
    image: "/geo-images/denmark/aarhus.webp",
  },
  {
    id: "city-odense",
    type: "city",
    parent: "denmark",
    coords: [10.3883, 55.3958],
    name: { de: "Odense", hu: "Odense", ro: "Odense", en: "Odense" },
    description: {
      en: "Odense, located on the island of Funen, is the birthplace of the world-famous fairytale writer Hans Christian Andersen. The city celebrates its literary heritage with museums, statues, and annual festivals dedicated to his work. Odense is one of Denmark's oldest cities, offering a charming old town, beautiful parks, and a lively cultural scene. It is also a center for robotics and technology in Denmark.",
      de: "Odense auf der Insel Fünen ist der Geburtsort des weltberühmten Märchenschreibers Hans Christian Andersen. Die Stadt feiert ihr literarisches Erbe mit Museen, Statuen und jährlichen Festivals, die seinem Werk gewidmet sind. Odense ist eine der ältesten Städte Dänemarks und bietet eine charmante Altstadt, wunderschöne Parks und eine lebendige Kulturszene. Es ist auch ein Zentrum für Robotik und Technologie in Dänemark.",
      hu: "Odense, amely Fünen szigetén található, a világhírű meseíró, Hans Christian Andersen szülőhelye. A város múzeumokkal, szobrokkal és a munkásságának szentelt éves fesztiválokkal ünnepli irodalmi örökségét. Odense Dánia egyik legrégebbi városa, hangulatos óvárossal, gyönyörű parkokkal és élénk kulturális élettel. Emellett a robotika és a technológia központja is Dániában.",
      ro: "Odense, situat pe insula Funen, este locul de naștere al celebrului scriitor de basme Hans Christian Andersen. Orașul își celebrează moștenirea literară prin muzee, statui și festivaluri anuale dedicate operei sale. Odense este unul dintre cele mai vechi orașe din Danemarca, oferind un oraș vechi fermecător, parcuri frumoase și o scenă culturală plină de viață. Este, de asemenea, un centru pentru robotică și tehnologie în Danemarca."
    },
    facts: {
      en: ["The H.C. Andersen Museum is a major attraction in the city.","Odense is named after the Norse god Odin.","The city has a strong tradition of cycling, with extensive bike paths.","The Odense Zoo is consistently ranked as one of the best in Europe."],
      de: ["Das H.C. Andersen Museum ist eine Hauptattraktion der Stadt.","Odense ist nach dem nordischen Gott Odin benannt.","Die Stadt hat eine starke Radfahrtradition mit ausgedehnten Radwegen.","Der Zoo von Odense wird regelmäßig als einer der besten in Europa eingestuft."],
      hu: ["A H.C. Andersen Múzeum a város egyik fő látványossága.","Odense a skandináv istenről, Odinról kapta a nevét.","A városban erős a kerékpározás hagyománya, kiterjedt kerékpárutakkal.","Az Odense-i Állatkertet rendszeresen Európa legjobbjai közé sorolják."],
      ro: ["Muzeul H.C. Andersen este o atracție majoră în oraș.","Odense poartă numele zeului nordic Odin.","Orașul are o tradiție puternică în ciclism, cu piste extinse pentru biciclete.","Grădina Zoologică din Odense este clasată constant printre cele mai bune din Europa."]
    },
    image: "/geo-images/denmark/odense.webp",
  },
  {
    id: "reg-jutland",
    type: "region",
    parent: "denmark",
    coords: [9.5018, 56.2639],
    name: { de: "Jütland", hu: "Jütland", ro: "Iutlanda", en: "Jutland" },
    description: {
      en: "Jutland is the large peninsula that forms the mainland part of Denmark. It is characterized by diverse landscapes, from the rugged North Sea coast with its vast sandy beaches and dunes to the gentler hills and fjords of the east coast. Jutland is home to historic towns, Viking monuments like the Jelling Stones, and the original Legoland in Billund. The region is known for its agricultural heritage and strong local traditions.",
      de: "Jütland ist die große Halbinsel, die den Festlandteil Dänemarks bildet. Sie ist geprägt von vielfältigen Landschaften, von der schroffen Nordseeküste mit ihren weiten Sandstränden und Dünen bis hin zu den sanfteren Hügeln und Fjorden der Ostküste. Jütland beherbergt historische Städte, Wikingerdenkmäler wie die Steine von Jelling und das ursprüngliche Legoland in Billund. Die Region ist bekannt für ihr landwirtschaftliches Erbe und ihre starken lokalen Traditionen.",
      hu: "Jütland a nagy félsziget, amely Dánia szárazföldi részét alkotja. Változatos tájak jellemzik, a zord északi-tengeri partvidéktől a hatalmas homokos strandokkal és dűnékkel, a keleti part szelídebb dombjaiig és fjordjaiig. Jütland történelmi városoknak, viking emlékeknek, mint például a Jelling-kövek, és az eredeti Legolandnek ad otthont Billundban. A régió mezőgazdasági örökségéről és erős helyi hagyományairól ismert.",
      ro: "Iutlanda este marea peninsulă care formează partea continentală a Danemarcei. Este caracterizată de peisaje diverse, de la coasta aspră a Mării Nordului, cu plajele sale vaste de nisip și dune, până la dealurile și fiordurile mai blânde de pe coasta de est. Iutlanda găzduiește orașe istorice, monumente vikinge precum Pietrele de la Jelling și originalul Legoland din Billund. Regiunea este cunoscută pentru moștenirea sa agricolă și tradițiile locale puternice."
    },
    facts: {
      en: ["The Jelling Stones are a UNESCO World Heritage site, often called 'Denmark's birth certificate'.","Skagen, at the northern tip of Jutland, is where the North Sea and Baltic Sea meet.","Jutland is the only part of Denmark connected to mainland Europe.","The region has a rich Viking history, with many burial mounds and settlements."],
      de: ["Die Steine von Jelling sind ein UNESCO-Weltkulturerbe und werden oft als 'Geburtsurkunde Dänemarks' bezeichnet.","In Skagen, an der Nordspitze Jütlands, treffen Nord- und Ostsee aufeinander.","Jütland ist der einzige Teil Dänemarks, der mit dem europäischen Festland verbunden ist.","Die Region hat eine reiche Wikingergeschichte mit vielen Grabhügeln und Siedlungen."],
      hu: ["A Jelling-kövek az UNESCO Világörökség részei, gyakran 'Dánia születési anyakönyvi kivonataként' emlegetik őket.","Skagenben, Jütland északi csücskén találkozik az Északi-tenger és a Balti-tenger.","Jütland Dánia egyetlen része, amely kapcsolódik a kontinentális Európához.","A régió gazdag viking történelemmel rendelkezik, számos sírhalommal és településsel."],
      ro: ["Pietrele de la Jelling sunt un sit al Patrimoniului Mondial UNESCO, fiind adesea numite 'certificatul de naștere al Danemarcei'.","Skagen, în vârful nordic al Iutlandei, este locul unde se întâlnesc Marea Nordului și Marea Baltică.","Iutlanda este singura parte a Danemarcei conectată la Europa continentală.","Regiunea are o istorie vikingă bogată, cu multe movile funerare și așezări."]
    },
    image: "/geo-images/denmark/jutland.webp",
  },
  {
    id: "reg-zealand",
    type: "region",
    parent: "denmark",
    coords: [11.7600, 55.4800],
    name: { de: "Seeland", hu: "Sjælland", ro: "Zeelanda", en: "Zealand" },
    description: {
      en: "Zealand is the largest and most populous island in Denmark, home to the capital city, Copenhagen. The island offers a mix of bustling urban areas, historic royal palaces, and beautiful coastal landscapes. Key sites include Roskilde with its Viking Ship Museum and cathedral, and the stunning Møns Klint chalk cliffs. Zealand is the cultural and political heart of Denmark, connected to Sweden by the impressive Øresund Bridge.",
      de: "Seeland ist die größte und bevölkerungsreichste Insel Dänemarks und beherbergt die Hauptstadt Kopenhagen. Die Insel bietet eine Mischung aus geschäftigen Stadtgebieten, historischen Königsschlössern und wunderschönen Küstenlandschaften. Zu den wichtigsten Sehenswürdigkeiten gehören Roskilde mit seinem Wikingerschiffsmuseum und der Kathedrale sowie die beeindruckenden Kreidefelsen von Møns Klint. Seeland ist das kulturelle und politische Herz Dänemarks und durch die beeindruckende Öresundbrücke mit Schweden verbunden.",
      hu: "Sjælland Dánia legnagyobb és legnépesebb szigete, itt található a főváros, Koppenhága. A sziget nyüzsgő városi területek, történelmi királyi paloták és gyönyörű tengerparti tájak keverékét kínálja. Főbb helyszínei közé tartozik Roskilde a Viking Hajómúzeummal és a székesegyházzal, valamint a lenyűgöző Møns Klint krétafalak. Sjælland Dánia kulturális és politikai szíve, amelyet a lenyűgöző Øresund híd köt össze Svédországgal.",
      ro: "Zeelanda este cea mai mare și mai populată insulă din Danemarca, găzduind capitala, Copenhaga. Insula oferă un amestec de zone urbane pline de viață, palate regale istorice și peisaje de coastă frumoase. Siturile cheie includ Roskilde, cu Muzeul Navelor Vikinge și catedrala sa, și uimitoarele stânci de cretă Møns Klint. Zeelanda este inima culturală și politică a Danemarcei, fiind conectată de Suedia prin impresionantul Pod Øresund."
    },
    facts: {
      en: ["Zealand is the 13th largest island in Europe.","The Øresund Bridge connects Zealand to the Swedish city of Malmö.","Kronborg Castle in Helsingør is the setting for Shakespeare's Hamlet.","Roskilde was the capital of Denmark until the 15th century."],
      de: ["Seeland ist die 13. größte Insel Europas.","Die Öresundbrücke verbindet Seeland mit der schwedischen Stadt Malmö.","Schloss Kronborg in Helsingør ist der Schauplatz von Shakespeares Hamlet.","Roskilde war bis zum 15. Jahrhundert die Hauptstadt Dänemarks."],
      hu: ["Sjælland Európa 13. legnagyobb szigete.","Az Øresund híd köti össze Sjællandot a svédországi Malmővel.","A helsingőri Kronborg-kastély Shakespeare Hamletjének helyszíne.","Roskilde a 15. századig Dánia fővárosa volt."],
      ro: ["Zeelanda este a 13-a cea mai mare insulă din Europa.","Podul Øresund conectează Zeelanda de orașul suedez Malmö.","Castelul Kronborg din Helsingør este cadrul pentru piesa Hamlet de Shakespeare.","Roskilde a fost capitala Danemarcei până în secolul al XV-lea."]
    },
    image: "/geo-images/denmark/zealand.webp",
  }
];

export const denmarkCulture: POI[] = [
  {
    id: "cult-legoland",
    type: "culture",
    parent: "denmark",
    coords: [9.1261, 55.7353],
    name: { de: "Legoland Billund", hu: "Legoland Billund", ro: "Legoland Billund", en: "Legoland Billund" },
    description: {
      en: "Legoland Billund is the original Legoland park, opened in 1968 near the Lego factory. It is one of Denmark's most popular tourist attractions, featuring incredible models built from millions of Lego bricks, thrilling rides, and themed areas. The park celebrates creativity and imagination, attracting families from all over the world. It is a testament to the global impact of the Danish toy company and its commitment to play and learning.",
      de: "Legoland Billund ist der ursprüngliche Legoland-Park, der 1968 in der Nähe der Lego-Fabrik eröffnet wurde. Er ist eine der beliebtesten Touristenattraktionen Dänemarks und bietet unglaubliche Modelle aus Millionen von Legosteinen, aufregende Fahrgeschäfte und Themenbereiche. Der Park feiert Kreativität und Fantasie und zieht Familien aus der ganzen Welt an. Er ist ein Zeugnis für den weltweiten Einfluss des dänischen Spielzeugunternehmens und sein Engagement für Spiel und Lernen.",
      hu: "A Legoland Billund az eredeti Legoland park, amely 1968-ban nyílt meg a Lego gyár közelében. Dánia egyik legnépszerűbb turisztikai látványossága, amely több millió Lego kockából épült hihetetlen modelleket, izgalmas játékokat és tematikus területeket kínál. A park a kreativitást és a képzeletet ünnepli, a világ minden tájáról vonzza a családokat. Ez a dán játékgyártó cég globális hatásának, valamint a játék és a tanulás iránti elkötelezettségének bizonyítéka.",
      ro: "Legoland Billund este parcul original Legoland, deschis în 1968 lângă fabrica Lego. Este una dintre cele mai populare atracții turistice din Danemarca, oferind modele incredibile construite din milioane de piese Lego, atracții palpitante și zone tematice. Parcul celebrează creativitatea și imaginația, atrăgând familii din întreaga lume. Este o dovadă a impactului global al companiei daneze de jucării și a angajamentului său față de joc și învățare."
    },
    facts: {
      en: ["The park is located right next to the original Lego factory.","Miniland features famous landmarks from around the world built to scale.","More than 60 million Lego bricks were used to build the park.","Billund is also home to the Lego House, an interactive experience center."],
      de: ["Der Park befindet sich direkt neben der ursprünglichen Lego-Fabrik.","Das Miniland zeigt berühmte Wahrzeichen aus aller Welt im Maßstab.","Für den Bau des Parks wurden mehr als 60 Millionen Legosteine verwendet.","In Billund befindet sich auch das Lego House, ein interaktives Erlebniszentrum."],
      hu: ["A park közvetlenül az eredeti Lego gyár mellett található.","A Miniland a világ híres látnivalóit mutatja be méretarányos maketteken.","A park felépítéséhez több mint 60 millió Lego kockát használtak fel.","Billundban található a Lego House is, egy interaktív élményközpont."],
      ro: ["Parcul este situat chiar lângă fabrica originală Lego.","Miniland prezintă repere faimoase din întreaga lume construite la scară.","Peste 60 de milioane de piese Lego au fost folosite pentru a construi parcul.","Billund găzduiește, de asemenea, Lego House, un centru de experiență interactiv."]
    },
    image: "/geo-images/denmark/legoland.webp",
  }
];

export const denmarkNature: POI[] = [
  {
    id: "nat-bornholm",
    type: "nature",
    parent: "denmark",
    coords: [14.9100, 55.1100],
    name: { de: "Bornholm", hu: "Bornholm", ro: "Bornholm", en: "Bornholm" },
    description: {
      en: "Bornholm is a Danish island in the Baltic Sea, known for its unique geography, including rocky coastlines, sandy beaches, and lush forests. It is a popular destination for outdoor enthusiasts, offering excellent hiking, cycling, and sailing opportunities. The island is also famous for its round churches, medieval fortress ruins of Hammershus, and its vibrant arts and crafts scene, particularly ceramics and glassblowing.",
      de: "Bornholm ist eine dänische Insel in der Ostsee, die für ihre einzigartige Geografie bekannt ist, darunter felsige Küsten, Sandstrände und üppige Wälder. Sie ist ein beliebtes Ziel für Outdoor-Enthusiasten und bietet hervorragende Möglichkeiten zum Wandern, Radfahren und Segeln. Die Insel ist auch berühmt für ihre Rundkirchen, die mittelalterlichen Festungsruinen von Hammershus und ihre lebendige Kunsthandwerksszene, insbesondere Keramik und Glasbläserei.",
      hu: "Bornholm egy dán sziget a Balti-tengeren, amely egyedülálló földrajzáról ismert, beleértve a sziklás partokat, a homokos strandokat és a buja erdőket. A szabadtéri tevékenységek kedvelőinek népszerű úti célja, kiváló túrázási, kerékpározási és vitorlázási lehetőségeket kínál. A sziget híres körtemplomairól, Hammershus középkori várromjairól, valamint élénk művészeti és kézműves életéről, különösen a kerámiáról és az üvegfúvásról.",
      ro: "Bornholm este o insulă daneză din Marea Baltică, cunoscută pentru geografia sa unică, incluzând coaste stâncoase, plaje cu nisip și păduri luxuriante. Este o destinație populară pentru pasionații de activități în aer liber, oferind oportunități excelente pentru drumeții, ciclism și navigație. Insula este, de asemenea, faimoasă pentru bisericile sale rotunde, ruinele cetății medievale Hammershus și scena sa vibrantă de artă și meșteșuguri, în special ceramică și suflarea sticlei."
    },
    facts: {
      en: ["Bornholm is known as the 'Sunshine Island' of Denmark.","The island has four unique medieval round churches.","Hammershus is Northern Europe's largest medieval fortress ruin.","Bornholm is famous for its smoked herring, a local delicacy."],
      de: ["Bornholm ist als die 'Sonneninsel' Dänemarks bekannt.","Die Insel besitzt vier einzigartige mittelalterliche Rundkirchen.","Hammershus ist Nordeuropas größte mittelalterliche Festungsruine.","Bornholm ist berühmt für seinen Räucherhering, eine lokale Spezialität."],
      hu: ["Bornholm Dánia 'Napsütötte szigeteként' ismert.","A szigeten négy egyedülálló középkori körtemplom található.","Hammershus Észak-Európa legnagyobb középkori várromja.","Bornholm híres a füstölt heringről, amely helyi különlegesség."],
      ro: ["Bornholm este cunoscută sub numele de 'Insula Soarelui' a Danemarcei.","Insula are patru biserici rotunde medievale unice.","Hammershus este cea mai mare ruină de cetate medievală din Europa de Nord.","Bornholm este faimoasă pentru heringul afumat, o delicatesă locală."]
    },
    image: "/geo-images/denmark/bornholm.webp",
  }
];

export const denmarkAllPoi: POI[] = [denmarkCountry, ...denmarkRegions, ...denmarkCulture, ...denmarkNature];
