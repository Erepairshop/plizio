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

export const denmarkCities: POI[] = [
  {
    id: "city-copenhagen",
    type: "city",
    parent: "denmark",
    coords: [12.5683, 55.6761],
    name: { de: "Kopenhagen", hu: "Koppenhága", ro: "Copenhaga", en: "Copenhagen" },
    description: {
      en: "Copenhagen is Denmark's capital and its most recognizable city, built around canals, cycling culture, and a strong maritime identity. Nyhavn, Tivoli, and the Little Mermaid make it a constant draw for visitors, while the city also leads in sustainability and design. Its compact center makes it easy to explore on foot or by bike.",
      de: "Kopenhagen ist die Hauptstadt Dänemarks und seine bekannteste Stadt, geprägt von Kanälen, Fahrradkultur und einer starken maritimen Identität. Nyhavn, Tivoli und die Kleine Meerjungfrau machen sie zu einem dauerhaften Anziehungspunkt für Besucher, während die Stadt auch bei Nachhaltigkeit und Design führend ist. Das kompakte Zentrum lässt sich leicht zu Fuß oder mit dem Fahrrad erkunden.",
      hu: "Koppenhága Dánia fővárosa és legismertebb városa, amelyet csatornák, kerékpáros kultúra és erős tengeri identitás jellemez. A Nyhavn, a Tivoli és a Kis Hableány folyamatosan vonzza a látogatókat, miközben a város a fenntarthatóság és a dizájn terén is élen jár. Kompakt belvárosa miatt gyalog vagy biciklivel is könnyen felfedezhető.",
      ro: "Copenhaga este capitala Danemarcei și cel mai recognoscibil oraș al său, construit în jurul canalelor, culturii bicicletelor și unei identități maritime puternice. Nyhavn, Tivoli și Mica Sirenă atrag constant vizitatori, iar orașul este lider și în sustenabilitate și design. Centrul compact îl face ușor de explorat pe jos sau cu bicicleta."
    },
    facts: {
      en: ["Copenhagen is one of the world's most bicycle-friendly capitals.", "The city is home to the Danish royal family and several royal landmarks.", "Nyhavn was once a busy commercial port.", "Copenhagen's harbor baths are a popular summer attraction."],
      de: ["Kopenhagen gehört zu den fahrradfreundlichsten Hauptstädten der Welt.", "In der Stadt lebt die dänische Königsfamilie, und es gibt mehrere königliche Wahrzeichen.", "Nyhavn war einst ein geschäftiger Handelshafen.", "Die Hafenbäder von Kopenhagen sind im Sommer eine beliebte Attraktion."],
      hu: ["Koppenhága a világ egyik kerékpárosbarátabb fővárosa.", "A városban él a dán királyi család, és több királyi nevezetesség is található itt.", "A Nyhavn egykor forgalmas kereskedelmi kikötő volt.", "Koppenhága kikötői fürdői nyáron népszerűek."],
      ro: ["Copenhaga este una dintre cele mai prietenoase capitale pentru bicicliști din lume.", "Orașul găzduiește familia regală daneză și mai multe repere regale.", "Nyhavn a fost odinioară un port comercial aglomerat.", "Băile portuare din Copenhaga sunt o atracție populară vara."]
    },
    image: "/geo-images/denmark/copenhagen.webp",
  },
  {
    id: "city-aarhus",
    type: "city",
    parent: "denmark",
    coords: [10.2039, 56.1629],
    name: { de: "Aarhus", hu: "Aarhus", ro: "Aarhus", en: "Aarhus" },
    description: {
      en: "Aarhus is Denmark's second-largest city and a major university and cultural center on the Jutland coast. It combines a lively harbor, modern architecture, and the famous ARoS museum with a strong historical core. The city's relaxed atmosphere and seaside setting make it one of Denmark's most appealing urban destinations.",
      de: "Aarhus ist Dänemarks zweitgrößte Stadt und ein bedeutendes Universitäts- und Kulturzentrum an der jütländischen Küste. Sie verbindet einen lebhaften Hafen, moderne Architektur und das berühmte ARoS-Museum mit einem starken historischen Kern. Die entspannte Atmosphäre und die Lage am Meer machen die Stadt zu einem der attraktivsten urbanen Ziele Dänemarks.",
      hu: "Aarhus Dánia második legnagyobb városa, és a jütlandi partvidék egyik fontos egyetemi és kulturális központja. Élénk kikötő, modern építészet és a híres ARoS múzeum jellemzi, miközben erős történelmi maggal is rendelkezik. Nyugodt hangulata és tengerparti fekvése az ország egyik legvonzóbb városává teszi.",
      ro: "Aarhus este al doilea oraș ca mărime din Danemarca și un important centru universitar și cultural de pe coasta Iutlandei. Îmbină un port animat, arhitectură modernă și celebrul muzeu ARoS cu un nucleu istoric puternic. Atmosfera relaxată și poziția la mare îl fac una dintre cele mai atractive destinații urbane din Danemarca."
    },
    facts: {
      en: ["Aarhus was a European Capital of Culture in 2017.", "The city has Viking-era origins.", "ARoS is known for its rainbow panorama on the roof.", "Aarhus Cathedral is the tallest church in Denmark."],
      de: ["Aarhus war 2017 Europäische Kulturhauptstadt.", "Die Stadt hat Ursprünge in der Wikingerzeit.", "ARoS ist für sein Regenbogenpanorama auf dem Dach bekannt.", "Der Dom von Aarhus ist die höchste Kirche Dänemarks."],
      hu: ["Aarhus 2017-ben Európa Kulturális Fővárosa volt.", "A város eredete a viking korig nyúlik vissza.", "Az ARoS a tetején lévő szivárvány panorámájáról ismert.", "Az aarhusi dóm Dánia legmagasabb temploma."],
      ro: ["Aarhus a fost Capitală Europeană a Culturii în 2017.", "Orașul are origini din epoca vikingă.", "ARoS este cunoscut pentru panorama curcubeu de pe acoperiș.", "Catedrala din Aarhus este cea mai înaltă biserică din Danemarca."]
    },
    image: "/geo-images/denmark/aarhus.webp",
  },
  {
    id: "city-odense",
    type: "city",
    parent: "denmark",
    coords: [10.4024, 55.4038],
    name: { de: "Odense", hu: "Odense", ro: "Odense", en: "Odense" },
    description: {
      en: "Odense is the main city of Funen and the birthplace of Hans Christian Andersen. Its streets, museums, and festivals reflect a strong literary identity that gives the city a distinctive atmosphere. Beyond its fairytale heritage, Odense is also growing as a center for robotics, technology, and modern urban life.",
      de: "Odense ist die wichtigste Stadt Fünens und der Geburtsort von Hans Christian Andersen. Straßen, Museen und Festivals spiegeln eine starke literarische Identität wider, die der Stadt eine besondere Atmosphäre verleiht. Neben ihrem Märchenerbe entwickelt sich Odense auch zu einem Zentrum für Robotik, Technologie und modernes Stadtleben.",
      hu: "Odense Fyn fő városa és Hans Christian Andersen szülőhelye. Utcái, múzeumai és fesztiváljai erős irodalmi identitást tükröznek, ami különleges hangulatot ad a városnak. A mesés örökség mellett Odense a robotika, a technológia és a modern városi élet egyik központja is.",
      ro: "Odense este principalul oraș al insulei Funen și locul de naștere al lui Hans Christian Andersen. Străzile, muzeele și festivalurile sale reflectă o identitate literară puternică, ce îi oferă o atmosferă aparte. Dincolo de moștenirea sa de basm, Odense se dezvoltă și ca centru pentru robotică, tehnologie și viață urbană modernă."
    },
    facts: {
      en: ["Hans Christian Andersen was born in Odense in 1805.", "The city has several museums dedicated to Andersen.", "Odense is one of Denmark's oldest cities.", "It is a growing hub for robotics and innovation."],
      de: ["Hans Christian Andersen wurde 1805 in Odense geboren.", "Die Stadt hat mehrere Museen, die Andersen gewidmet sind.", "Odense ist eine der ältesten Städte Dänemarks.", "Sie ist ein wachsendes Zentrum für Robotik und Innovation."],
      hu: ["Hans Christian Andersen 1805-ben Odensében született.", "A városban több Andersennek szentelt múzeum is van.", "Odense Dánia egyik legrégebbi városa.", "A robotika és az innováció növekvő központja."],
      ro: ["Hans Christian Andersen s-a născut la Odense în 1805.", "Orașul are mai multe muzee dedicate lui Andersen.", "Odense este unul dintre cele mai vechi orașe din Danemarca.", "Este un centru în creștere pentru robotică și inovație."]
    },
    image: "/geo-images/denmark/odense.webp",
  },
  {
    id: "city-aalborg",
    type: "city",
    parent: "denmark",
    coords: [9.9217, 57.0488],
    name: { de: "Aalborg", hu: "Aalborg", ro: "Aalborg", en: "Aalborg" },
    description: {
      en: "Aalborg is a major city in northern Jutland with a strong industrial past and a lively modern waterfront. It is known for its university, cultural venues, and a compact center filled with cafes, museums, and nightlife. The city has transformed from a port and manufacturing hub into a creative northern urban destination.",
      de: "Aalborg ist eine bedeutende Stadt im Norden Jütlands mit einer starken industriellen Vergangenheit und einer lebendigen modernen Uferzone. Sie ist bekannt für ihre Universität, kulturelle Einrichtungen und ein kompaktes Zentrum voller Cafés, Museen und Nachtleben. Die Stadt hat sich von einem Hafen- und Industriezentrum zu einem kreativen urbanen Ziel im Norden entwickelt.",
      hu: "Aalborg Észak-Jütland egyik fontos városa, erős ipari múlttal és élénk, modern vízparttal. Egyeteméről, kulturális helyszíneiről, valamint kávézókkal, múzeumokkal és éjszakai élettel teli kompakt belvárosáról ismert. A város a kikötői és gyártóközpontból kreatív északi városi célponttá alakult.",
      ro: "Aalborg este un oraș important din nordul Iutlandei, cu un trecut industrial puternic și un mal al apei modern și animat. Este cunoscut pentru universitatea sa, spațiile culturale și centrul compact plin de cafenele, muzee și viață de noapte. Orașul s-a transformat dintr-un port și centru de producție într-o destinație urbană creativă din nord."
    },
    facts: {
      en: ["Aalborg sits on the Limfjord.", "The city hosts one of Denmark's largest carnival events.", "It is a major center for education in northern Denmark.", "Aalborg's waterfront has been heavily redeveloped in recent years."],
      de: ["Aalborg liegt am Limfjord.", "Die Stadt veranstaltet einen der größten Karnevals Dänemarks.", "Sie ist ein wichtiger Bildungsstandort in Norddänemark.", "Die Uferzone von Aalborg wurde in den letzten Jahren stark umgestaltet."],
      hu: ["Aalborg a Limfjord mentén fekszik.", "A város ad otthont Dánia egyik legnagyobb karneváljának.", "Észak-Dánia egyik fontos oktatási központja.", "Aalborg vízpartját az utóbbi években jelentősen átalakították."],
      ro: ["Aalborg este situat pe Limfjord.", "Orașul găzduiește unul dintre cele mai mari carnavaluri din Danemarca.", "Este un centru important pentru educație în nordul Danemarcei.", "Zona sa de waterfront a fost reamenajată masiv în ultimii ani."]
    },
    image: "/geo-images/denmark/aalborg.webp",
  },
  {
    id: "city-helsingor",
    type: "city",
    parent: "denmark",
    coords: [12.6136, 56.0361],
    name: { de: "Helsingør", hu: "Helsingør", ro: "Helsingør", en: "Helsingør" },
    description: {
      en: "Helsingor sits on the narrowest point of the Øresund and has long been a strategic gateway between Denmark and Sweden. The city is best known for Kronborg Castle, a UNESCO World Heritage site that inspired Shakespeare's Hamlet. Its waterfront setting, old streets, and ferry connections give it a strong historical character.",
      de: "Helsingør liegt an der schmalsten Stelle des Øresunds und war lange ein strategisches Tor zwischen Dänemark und Schweden. Die Stadt ist vor allem für Schloss Kronborg bekannt, ein UNESCO-Weltkulturerbe, das Shakespeare zu Hamlet inspirierte. Ihre Lage am Wasser, die alten Straßen und die Fährverbindungen verleihen ihr einen starken historischen Charakter.",
      hu: "Helsingør az Øresund legszűkebb pontján fekszik, és hosszú ideig stratégiai kapu volt Dánia és Svédország között. A város leginkább a Kronborg várról ismert, amely UNESCO világörökségi helyszín és Shakespeare Hamletjének ihletője volt. Vízparti fekvése, régi utcái és kompösszeköttetései erős történelmi jelleget adnak neki.",
      ro: "Helsingør se află în cel mai îngust punct al strâmtorii Øresund și a fost mult timp o poartă strategică între Danemarca și Suedia. Orașul este cunoscut mai ales pentru Castelul Kronborg, sit UNESCO care l-a inspirat pe Shakespeare pentru Hamlet. Poziția sa la apă, străzile vechi și legăturile de feribot îi dau un caracter istoric puternic."
    },
    facts: {
      en: ["Kronborg Castle dominates Helsingor's skyline.", "The city is a key ferry point to Sweden.", "It once collected tolls from passing ships.", "Shakespeare's Hamlet is set at Kronborg."],
      de: ["Schloss Kronborg prägt die Silhouette von Helsingør.", "Die Stadt ist ein wichtiger Fährpunkt nach Schweden.", "Hier wurden einst Gebühren von vorbeifahrenden Schiffen erhoben.", "Shakespeares Hamlet spielt in Kronborg."],
      hu: ["A Kronborg vár uralja Helsingør látképét.", "A város fontos kompállomás Svédország felé.", "Egykor díjat szedtek a hajóktól az áthaladásért.", "Shakespeare Hamletje Kronborgban játszódik."],
      ro: ["Castelul Kronborg domină silueta orașului Helsingør.", "Orașul este un important punct de feribot către Suedia.", "Aici se colectau odinioară taxe de la navele care treceau.", "Hamlet de Shakespeare este plasat la Kronborg."]
    },
    image: "/geo-images/denmark/helsingor.webp",
  },
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
  ,
  {
    id: "cult-tivoli",
    type: "culture",
    parent: "denmark",
    coords: [12.5683, 55.6739],
    name: { de: "Tivoli-Gärten", hu: "Tivoli Kertek", ro: "Grădinile Tivoli", en: "Tivoli Gardens" },
    description: {
      en: "Tivoli Gardens is the famous Copenhagen amusement park that opened in 1843 and became one of the world's earliest theme parks. Its blend of rides, gardens, performances, and seasonal lights made it a model for later entertainment parks, including ones that inspired Walt Disney. Today it remains a defining cultural landmark of the Danish capital.",
      de: "Die Tivoli-Gärten sind der berühmte Vergnügungspark in Kopenhagen, der 1843 eröffnet wurde und zu den frühesten Themenparks der Welt gehört. Seine Mischung aus Fahrgeschäften, Gärten, Aufführungen und saisonaler Beleuchtung wurde zu einem Vorbild für spätere Freizeitparks, darunter auch solche, die Walt Disney inspirierten. Heute ist er weiterhin ein prägendes Kulturdenkmal der dänischen Hauptstadt.",
      hu: "A Tivoli Kertek a híres koppenhágai vidámpark, amely 1843-ban nyílt meg, és a világ egyik legkorábbi tematikus parkja lett. A játékok, kertek, előadások és szezonális fények keveréke mintát adott a későbbi szórakoztató parkoknak, köztük azoknak is, amelyek Walt Disneyt inspirálták. Ma is a dán főváros meghatározó kulturális nevezetessége.",
      ro: "Grădinile Tivoli sunt celebrul parc de distracții din Copenhaga, deschis în 1843 și devenit unul dintre cele mai timpurii parcuri tematice din lume. Amestecul său de atracții, grădini, spectacole și lumini sezoniere a devenit un model pentru parcurile de divertisment ulterioare, inclusiv pentru cele care l-au inspirat pe Walt Disney. Astăzi rămâne un reper cultural definitoriu al capitalei daneze."
    },
    facts: {
      en: ["Opened in 1843, Tivoli is one of the world's oldest amusement parks.", "Walt Disney reportedly drew inspiration from Tivoli.", "The park mixes rides with gardens and live performances.", "It is especially famous for its night lighting and seasonal events."],
      de: ["Die Tivoli-Gärten wurden 1843 eröffnet und gehören zu den ältesten Vergnügungsparks der Welt.", "Walt Disney ließ sich Berichten zufolge von Tivoli inspirieren.", "Der Park verbindet Fahrgeschäfte mit Gärten und Live-Aufführungen.", "Besonders berühmt ist er für seine Nachtbeleuchtung und saisonalen Veranstaltungen."],
      hu: ["A Tivoli 1843-ban nyílt meg, és a világ egyik legrégebbi vidámparkja.", "A hírek szerint Walt Disneyt is inspirálta a Tivoli.", "A park a játékokat kertekkel és élő előadásokkal ötvözi.", "Különösen híres az esti fényekről és a szezonális eseményekről."],
      ro: ["Deschis în 1843, Tivoli este unul dintre cele mai vechi parcuri de distracții din lume.", "Se spune că Walt Disney s-a inspirat din Tivoli.", "Parcul combină atracțiile cu grădini și spectacole live.", "Este faimos mai ales pentru luminile de noapte și evenimentele sezoniere."]
    },
    image: "/geo-images/denmark/tivoli.webp",
  },
  {
    id: "cult-nyhavn",
    type: "culture",
    parent: "denmark",
    coords: [12.5916, 55.6795],
    name: { de: "Nyhavn", hu: "Nyhavn", ro: "Nyhavn", en: "Nyhavn" },
    description: {
      en: "Nyhavn is Copenhagen's iconic 17th-century harbor district, instantly recognizable for its colorful townhouses and historic ships. Once a working commercial port, it has become a lively place for cafes, restaurants, and summer strolling. The canal area captures the city's maritime past and its easygoing present at the same time.",
      de: "Nyhavn ist das ikonische Hafenviertel Kopenhagens aus dem 17. Jahrhundert, sofort erkennbar an seinen bunten Stadthäusern und historischen Schiffen. Einst ein Arbeitshafen für den Handel, ist es heute ein lebhafter Ort für Cafés, Restaurants und sommerliche Spaziergänge. Das Kanalviertel fängt zugleich die maritime Vergangenheit der Stadt und ihre entspannte Gegenwart ein.",
      hu: "A Nyhavn Koppenhága ikonikus, 17. századi kikötőnegyede, amelyet színes házai és történelmi hajói miatt azonnal fel lehet ismerni. Egykor kereskedelmi munkakikötő volt, ma pedig kávézók, éttermek és nyári séták népszerű helyszíne. A csatorna menti terület egyszerre idézi fel a város tengeri múltját és könnyed jelenét.",
      ro: "Nyhavn este cartierul portuar iconic din Copenhaga, din secolul al XVII-lea, ușor de recunoscut datorită caselor sale colorate și navelor istorice. Cândva un port comercial activ, a devenit un loc animat pentru cafenele, restaurante și plimbări de vară. Zona canalului surprinde în același timp trecutul maritim al orașului și prezentul său relaxat."
    },
    facts: {
      en: ["Nyhavn means 'new harbor'.", "The harbor was dug in the 1600s.", "Hans Christian Andersen lived here for a time.", "It is one of Copenhagen's most photographed places."],
      de: ["Nyhavn bedeutet 'neuer Hafen'.", "Der Hafen wurde im 17. Jahrhundert ausgehoben.", "Hans Christian Andersen lebte zeitweise hier.", "Es ist einer der meistfotografierten Orte Kopenhagens."],
      hu: ["A Nyhavn neve 'új kikötőt' jelent.", "A kikötőt a 17. században alakították ki.", "Hans Christian Andersen egy ideig itt élt.", "Koppenhága egyik legtöbbet fényképezett helye."],
      ro: ["Nyhavn înseamnă 'port nou'.", "Portul a fost săpat în anii 1600.", "Hans Christian Andersen a locuit aici o perioadă.", "Este unul dintre cele mai fotografiate locuri din Copenhaga."]
    },
    image: "/geo-images/denmark/nyhavn.webp",
  },
  {
    id: "cult-little-mermaid",
    type: "culture",
    parent: "denmark",
    coords: [12.5993, 55.6929],
    name: { de: "Kleine Meerjungfrau", hu: "Kis Hableány szobor", ro: "Mica Sirenă", en: "Little Mermaid Statue" },
    description: {
      en: "The Little Mermaid statue is one of Copenhagen's most famous symbols and is inspired by Hans Christian Andersen's fairytale. Sculpted by Edvard Eriksen and unveiled in 1913, it has become a modest but enduring landmark on the city's waterfront. Its small size contrasts with its huge international fame.",
      de: "Die Statue der Kleinen Meerjungfrau ist eines der berühmtesten Symbole Kopenhagens und basiert auf dem Märchen von Hans Christian Andersen. Sie wurde von Edvard Eriksen geschaffen und 1913 enthüllt und ist zu einem bescheidenen, aber dauerhaften Wahrzeichen an der Uferpromenade der Stadt geworden. Ihre kleine Größe steht im Kontrast zu ihrer großen internationalen Bekanntheit.",
      hu: "A Kis Hableány szobor Koppenhága egyik leghíresebb szimbóluma, amely Hans Christian Andersen meséje nyomán készült. Edvard Eriksen alkotása 1913-ban került felavatásra, és azóta szerény, de maradandó jelképe a város vízpartjának. Apró mérete éles ellentétben áll hatalmas nemzetközi ismertségével.",
      ro: "Statuia Mica Sirenă este unul dintre cele mai cunoscute simboluri ale Copenhagăi și este inspirată de basmul lui Hans Christian Andersen. Sculptată de Edvard Eriksen și dezvăluită în 1913, a devenit un reper modest, dar durabil, pe malul apei orașului. Dimensiunea ei mică contrastează cu faima internațională uriașă."
    },
    facts: {
      en: ["The statue was unveiled in 1913.", "It was inspired by Andersen's fairy tale.", "Edvard Eriksen created the sculpture.", "The statue sits on a rock by the harbor."],
      de: ["Die Statue wurde 1913 enthüllt.", "Sie ist von Andersens Märchen inspiriert.", "Edvard Eriksen schuf die Skulptur.", "Die Statue sitzt auf einem Felsen am Hafen."],
      hu: ["A szobrot 1913-ban avatták fel.", "Andersen meséje ihlette.", "Edvard Eriksen készítette a szobrot.", "A szobor a kikötőben egy sziklán áll."],
      ro: ["Statuia a fost dezvăluită în 1913.", "Este inspirată de basmul lui Andersen.", "Edvard Eriksen a creat sculptura.", "Statuia stă pe o stâncă lângă port."]
    },
    image: "/geo-images/denmark/little-mermaid.webp",
  },
  {
    id: "cult-kronborg",
    type: "culture",
    parent: "denmark",
    coords: [12.6217, 56.039],
    name: { de: "Schloss Kronborg", hu: "Kronborg vár", ro: "Castelul Kronborg", en: "Kronborg Castle" },
    description: {
      en: "Kronborg Castle rises above the Øresund near Helsingor and is one of Denmark's most important historic fortresses. It is globally known as the setting of Shakespeare's Hamlet and is recognized by UNESCO for its cultural value. The castle's bastions, halls, and sea views make it a powerful symbol of Danish history.",
      de: "Schloss Kronborg erhebt sich über den Øresund bei Helsingør und gehört zu Dänemarks wichtigsten historischen Festungen. Es ist weltweit als Schauplatz von Shakespeares Hamlet bekannt und wird von der UNESCO für seinen kulturellen Wert anerkannt. Seine Bastionen, Säle und der Blick aufs Meer machen es zu einem starken Symbol dänischer Geschichte.",
      hu: "A Kronborg vár Helsingør közelében magasodik az Øresund fölé, és Dánia egyik legfontosabb történelmi erődje. Világszerte Shakespeare Hamletjének helyszíneként ismert, és az UNESCO is elismeri kulturális értékét. Bástyái, termei és tengeri kilátása a dán történelem erőteljes jelképévé teszik.",
      ro: "Castelul Kronborg se ridică deasupra strâmtorii Øresund, lângă Helsingør, și este una dintre cele mai importante fortărețe istorice ale Danemarcei. Este cunoscut în întreaga lume ca decorul piesei Hamlet de Shakespeare și este recunoscut de UNESCO pentru valoarea sa culturală. Bastioanele, sălile și priveliștea către mare îl transformă într-un simbol puternic al istoriei daneze."
    },
    facts: {
      en: ["Kronborg is a UNESCO World Heritage site.", "It is famously associated with Hamlet.", "The castle controlled the Øresund tolls for centuries.", "Its location gave Denmark major strategic power."],
      de: ["Kronborg ist UNESCO-Weltkulturerbe.", "Es ist berühmt mit Hamlet verbunden.", "Das Schloss kontrollierte jahrhundertelang die Øresund-Zölle.", "Seine Lage verschaffte Dänemark große strategische Macht."],
      hu: ["A Kronborg UNESCO világörökségi helyszín.", "A kastély híresen Hamlethez kapcsolódik.", "A vár évszázadokon át ellenőrizte az Øresund vámjait.", "Fekvése jelentős stratégiai erőt adott Dániának."],
      ro: ["Kronborg este sit UNESCO al Patrimoniului Mondial.", "Castelul este asociat în mod celebru cu Hamlet.", "Timp de secole a controlat taxele din Øresund.", "Poziția sa i-a oferit Danemarcei o putere strategică majoră."]
    },
    image: "/geo-images/denmark/kronborg.webp",
  },
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
  ,
  {
    id: "nat-rabjerg-mile",
    type: "nature",
    parent: "denmark",
    coords: [10.4311, 57.6772],
    name: { de: "Råbjerg Mile", hu: "Råbjerg Mile", ro: "Råbjerg Mile", en: "Råbjerg Mile" },
    description: {
      en: "Råbjerg Mile is a massive migrating sand dune in northern Jutland and one of Denmark's most striking natural sights. Driven by wind, it slowly moves across the landscape and can feel almost desert-like despite the country's generally green scenery. The dune offers sweeping views and a dramatic reminder of the power of coastal nature.",
      de: "Råbjerg Mile ist eine gewaltige wandernde Sanddüne im Norden Jütlands und eines der eindrucksvollsten Naturwunder Dänemarks. Vom Wind angetrieben bewegt sie sich langsam durch die Landschaft und wirkt trotz der sonst grünen Umgebung fast wüstenartig. Die Düne bietet weite Ausblicke und erinnert eindrucksvoll an die Kraft der Küstennatur.",
      hu: "A Råbjerg Mile egy hatalmas, vándorló homokdűne Észak-Jütlandban, és Dánia egyik leglátványosabb természeti helyszíne. A szél hajtja, lassan mozog a tájon, és a többnyire zöld környezet ellenére szinte sivatagi hangulatot áraszt. A dűne széles panorámát kínál, és látványosan mutatja a partvidéki természet erejét.",
      ro: "Råbjerg Mile este o uriașă dună de nisip în mișcare din nordul Iutlandei și unul dintre cele mai spectaculoase peisaje naturale ale Danemarcei. Determinată de vânt, se deplasează lent prin peisaj și aproape că dă impresia unui deșert, în ciuda cadrului în mod normal verde. Duna oferă priveliști largi și amintește dramatic de puterea naturii de coastă."
    },
    facts: {
      en: ["Råbjerg Mile is a moving sand dune.", "It shifts about 15 meters per year on average.", "The dune is among the largest in Northern Europe.", "It is protected as a natural monument."],
      de: ["Råbjerg Mile ist eine wandernde Sanddüne.", "Sie verschiebt sich im Durchschnitt etwa 15 Meter pro Jahr.", "Die Düne gehört zu den größten in Nordeuropa.", "Sie steht unter Naturschutz als Naturdenkmal."],
      hu: ["A Råbjerg Mile vándorló homokdűne.", "Évente átlagosan körülbelül 15 métert mozdul el.", "Európa északi részének egyik legnagyobb dűnéje.", "Természeti emlékként védett."],
      ro: ["Råbjerg Mile este o dună de nisip în mișcare.", "Se deplasează în medie cu aproximativ 15 metri pe an.", "Este printre cele mai mari dune din nordul Europei.", "Este protejată ca monument natural."]
    },
    image: "/geo-images/denmark/rabjerg-mile.webp",
  },
  {
    id: "nat-skagen",
    type: "nature",
    parent: "denmark",
    coords: [10.6, 57.7281],
    name: { de: "Skagen", hu: "Skagen", ro: "Skagen", en: "Skagen" },
    description: {
      en: "Skagen sits at the northern tip of Jutland, where Denmark meets the meeting point of two seas. The area is famous for its bright light, wide beaches, and dramatic dunes that have long attracted artists and travelers. It is a place where the landscape feels open, wind-swept, and closely tied to the sea.",
      de: "Skagen liegt an der Nordspitze Jütlands, wo Dänemark am Treffpunkt zweier Meere liegt. Die Gegend ist berühmt für ihr helles Licht, breite Strände und dramatische Dünen, die seit Langem Künstler und Reisende anziehen. Es ist ein Ort, an dem die Landschaft offen, vom Wind geprägt und eng mit dem Meer verbunden wirkt.",
      hu: "Skagen Jütland északi csúcsán fekszik, ahol Dánia a két tenger találkozási pontjánál ér véget. A terület híres a különleges fényéről, a széles strandokról és a drámai dűnékről, amelyek régóta vonzzák a művészeket és az utazókat. Olyan hely, ahol a táj nyitott, szeles és szorosan kapcsolódik a tengerhez.",
      ro: "Skagen se află în vârful nordic al Iutlandei, acolo unde Danemarca întâlnește punctul de întâlnire al două mări. Zona este faimoasă pentru lumina sa puternică, plajele largi și dunele spectaculoase care au atras de mult artiști și călători. Este un loc în care peisajul pare deschis, bătut de vânt și profund legat de mare."
    },
    facts: {
      en: ["Skagen is known for the meeting of the North Sea and Baltic Sea.", "The region inspired the Skagen Painters.", "Its light is famous among artists.", "The coastline features long sandy beaches and dunes."],
      de: ["Skagen ist bekannt als Treffpunkt von Nord- und Ostsee.", "Die Region inspirierte die Skagen-Maler.", "Ihr Licht ist bei Künstlern berühmt.", "Die Küste hat lange Sandstrände und Dünen."],
      hu: ["Skagen arról ismert, hogy itt találkozik az Északi- és a Balti-tenger.", "A vidék inspirálta a skageni festőket.", "A fénye híres a művészek körében.", "A partvonalat hosszú homokos strandok és dűnék jellemzik."],
      ro: ["Skagen este cunoscut pentru întâlnirea Mării Nordului cu Marea Baltică.", "Regiunea i-a inspirat pe pictorii din Skagen.", "Lumina sa este faimoasă printre artiști.", "Coasta are plaje lungi cu nisip și dune."]
    },
    image: "/geo-images/denmark/skagen.webp",
  },
  {
    id: "nat-mons-klint",
    type: "nature",
    parent: "denmark",
    coords: [12.543, 54.9667],
    name: { de: "Møns Klint", hu: "Møns Klint", ro: "Møns Klint", en: "Møns Klint" },
    description: {
      en: "Møns Klint is a dramatic white chalk cliff on the island of Møn, rising above the Baltic Sea. The cliffs are among Denmark's most spectacular landscapes, with steep faces, forested slopes, and clear sea views. The area is popular for hiking and for its striking contrast between bright chalk and deep blue water.",
      de: "Møns Klint ist eine dramatische weiße Kreideklippe auf der Insel Møn, die sich über die Ostsee erhebt. Die Klippen gehören zu Dänemarks spektakulärsten Landschaften mit steilen Wänden, bewaldeten Hängen und weitem Blick auf das Meer. Das Gebiet ist beliebt zum Wandern und für den starken Kontrast zwischen heller Kreide und tiefblauem Wasser.",
      hu: "A Møns Klint egy drámai fehér krétaszikla Møn szigetén, amely a Balti-tenger fölé magasodik. A sziklák Dánia egyik leglátványosabb táját alkotják, meredek falakkal, erdős lejtőkkel és tiszta tengeri kilátással. A terület népszerű túrázásra, és lenyűgöző kontrasztot mutat a világos kréta és a sötétkék víz között.",
      ro: "Møns Klint este o faleză dramatică de cretă albă pe insula Møn, ridicându-se deasupra Mării Baltice. Stâncile se numără printre cele mai spectaculoase peisaje ale Danemarcei, cu pereți abrupți, pante împădurite și priveliști clare către mare. Zona este populară pentru drumeții și pentru contrastul izbitor dintre creta albă și apa albastru intens."
    },
    facts: {
      en: ["The cliffs rise up to 128 meters above sea level.", "Møns Klint is on the island of Møn.", "The area is a UNESCO Biosphere Reserve.", "It is one of Denmark's top hiking destinations."],
      de: ["Die Klippen ragen bis zu 128 Meter über den Meeresspiegel auf.", "Møns Klint liegt auf der Insel Møn.", "Das Gebiet ist ein UNESCO-Biosphärenreservat.", "Es ist eines der beliebtesten Wanderziele Dänemarks."],
      hu: ["A sziklák akár 128 méterre is a tengerszint fölé emelkednek.", "A Møns Klint Møn szigetén található.", "A terület UNESCO bioszféra-rezervátum.", "Dánia egyik legnépszerűbb túracélpontja."],
      ro: ["Falezele se ridică până la 128 de metri deasupra nivelului mării.", "Møns Klint se află pe insula Møn.", "Zona este rezervație a biosferei UNESCO.", "Este una dintre cele mai bune destinații de drumeție din Danemarca."]
    },
    image: "/geo-images/denmark/mons-klint.webp",
  },
  {
    id: "nat-bornholm",
    type: "nature",
    parent: "denmark",
    coords: [14.9169, 55.1654],
    name: { de: "Bornholm", hu: "Bornholm", ro: "Bornholm", en: "Bornholm" },
    description: {
      en: "Bornholm is a Danish island in the Baltic Sea known for rocky coasts, sandy beaches, and a softer pace of island life. Its mix of forests, cliffs, and fishing villages makes it especially appealing for cycling, hiking, and coastal exploration. The island also has a distinctive artistic and culinary identity that sets it apart from the rest of Denmark.",
      de: "Bornholm ist eine dänische Insel in der Ostsee, die für felsige Küsten, Sandstrände und ein ruhigeres Inselleben bekannt ist. Ihre Mischung aus Wäldern, Klippen und Fischerdörfern macht sie besonders attraktiv für Radfahren, Wandern und Küstenerkundungen. Die Insel besitzt außerdem eine eigenständige künstlerische und kulinarische Identität, die sie vom Rest Dänemarks abhebt.",
      hu: "Bornholm egy dán sziget a Balti-tengeren, amely sziklás partjairól, homokos strandjairól és nyugodtabb szigeti ritmusáról ismert. Erdők, sziklák és halászfalvak keveréke különösen vonzóvá teszi kerékpározásra, túrázásra és part menti felfedezésre. A sziget emellett sajátos művészeti és gasztronómiai identitással is rendelkezik, ami megkülönbözteti Dánia többi részétől.",
      ro: "Bornholm este o insulă daneză din Marea Baltică, cunoscută pentru coastele stâncoase, plajele cu nisip și ritmul mai calm al vieții insulare. Amestecul de păduri, stânci și sate pescărești o face deosebit de atractivă pentru ciclism, drumeții și explorarea coastelor. Insula are și o identitate artistică și culinară distinctă, care o diferențiază de restul Danemarcei."
    },
    facts: {
      en: ["Bornholm is often called Denmark's sunshine island.", "The island is popular for cycling and hiking.", "It has notable round churches and castle ruins.", "Its coastline combines rocks, forests, and beaches."],
      de: ["Bornholm wird oft Dänemarks Sonneninsel genannt.", "Die Insel ist beliebt zum Radfahren und Wandern.", "Sie hat bemerkenswerte Rundkirchen und Burgruinen.", "Ihre Küste vereint Felsen, Wälder und Strände."],
      hu: ["Bornholmot gyakran Dánia napsütötte szigeteként emlegetik.", "A sziget népszerű kerékpározásra és túrázásra.", "Jellegzetes körtemplomai és várromjai vannak.", "Partvidéke sziklákat, erdőket és strandokat ötvöz."],
      ro: ["Bornholm este adesea numită insula însorită a Danemarcei.", "Insula este populară pentru ciclism și drumeții.", "Are biserici rotunde și ruine de castel remarcabile.", "Coasta ei combină stânci, păduri și plaje."]
    },
    image: "/geo-images/denmark/bornholm.webp",
  },
  {
    id: "nat-wadden-sea",
    type: "nature",
    parent: "denmark",
    coords: [8.8, 55.3],
    name: { de: "Wattenmeer", hu: "Wadden-tenger", ro: "Marea Wadden", en: "Wadden Sea" },
    description: {
      en: "The Danish Wadden Sea is a vast tidal wetland that forms part of the larger North Sea ecosystem. It is a UNESCO-listed nature area known for mudflats, salt marshes, migratory birds, and dramatic tidal changes. The landscape is open and remote, making it one of the most important coastal habitats in Europe.",
      de: "Das dänische Wattenmeer ist ein ausgedehntes Gezeitenfeuchtgebiet und Teil des größeren Ökosystems der Nordsee. Es ist ein UNESCO-geschütztes Naturgebiet, bekannt für Schlickflächen, Salzwiesen, Zugvögel und starke Gezeitenwechsel. Die Landschaft ist offen und abgelegen und zählt zu den wichtigsten Küstenlebensräumen Europas.",
      hu: "A dán Wadden-tenger hatalmas árapályos vizes élőhely, amely az Északi-tenger nagyobb ökoszisztémájának része. UNESCO által védett természeti terület, amely iszaplapályairól, sós mocsarairól, vonuló madarairól és drámai árapályváltozásairól ismert. A táj nyílt és távoli, ezért Európa egyik legfontosabb part menti élőhelye.",
      ro: "Marea Wadden daneză este o vastă zonă umedă de maree, parte a ecosistemului mai mare al Mării Nordului. Este o zonă naturală listată UNESCO, cunoscută pentru mlaștinile de nămol, pajiștile sărate, păsările migratoare și schimbările dramatice ale mareei. Peisajul este deschis și izolat, fiind unul dintre cele mai importante habitate de coastă din Europa."
    },
    facts: {
      en: ["The Wadden Sea is a UNESCO World Heritage area.", "It is crucial for migratory birds.", "Tidal flats are exposed at low tide.", "The area stretches across several countries."],
      de: ["Das Wattenmeer ist UNESCO-Welterbe.", "Es ist für Zugvögel von entscheidender Bedeutung.", "Bei Ebbe werden Wattflächen freigelegt.", "Das Gebiet erstreckt sich über mehrere Länder."],
      hu: ["A Wadden-tenger UNESCO világörökségi terület.", "Kulcsfontosságú a vonuló madarak számára.", "Apály idején iszapos lapályok tárulnak fel.", "A terület több országon is átnyúlik."],
      ro: ["Marea Wadden este sit UNESCO al Patrimoniului Mondial.", "Este esențială pentru păsările migratoare.", "La reflux apar suprafețe întinse de nămol.", "Zona se întinde peste mai multe țări."]
    },
    image: "/geo-images/denmark/wadden-sea.webp",
  },
];

export const denmarkAllPoi: POI[] = [denmarkCountry, ...denmarkRegions, ...denmarkCities, ...denmarkCulture, ...denmarkNature];
