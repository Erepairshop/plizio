import type { POI } from "./poi";

export const belgiumCountry: POI = {
  id: "belgium",
  type: "country",
  parent: "EU",
  coords: [4.4699, 50.5039],
  name: { de: "Belgien", hu: "Belgium", ro: "Belgia", en: "Belgium" },
  description: {
    en: "Belgium is a country in Western Europe known for medieval towns, Renaissance architecture, and as the headquarters of the European Union and NATO. The country has a rich history as a crossroads of Europe, blending Germanic and Latin cultures. It is famous for its culinary traditions, including world-class chocolate, waffles, and a vast variety of beers. Belgium's landscape varies from the sandy beaches of the North Sea to the rolling hills and forests of the Ardennes.",
    de: "Belgien ist ein Land in Westeuropa, bekannt für seine mittelalterlichen Städte, Renaissance-Architektur und als Sitz der Europäischen Union und der NATO. Das Land hat eine reiche Geschichte als Kreuzungspunkt Europas, an dem germanische und lateinische Kulturen aufeinandertreffen. Es ist berühmt für seine kulinarischen Traditionen, darunter erstklassige Schokolade, Waffeln und eine enorme Vielfalt an Biersorten. Die Landschaft Belgiens reicht von den Sandstränden der Nordsee bis zu den sanften Hügeln und Wäldern der Ardennen.",
    hu: "Belgium egy nyugat-európai ország, amelyet középkori városairól, reneszánsz építészetéről, valamint az Európai Unió és a NATO székhelyeként ismerünk. Az ország gazdag történelme során Európa kereszteződéseként szolgált, ötvözve a germán és a latin kultúrákat. Híres kulináris hagyományairól, többek között a világszínvonalú csokoládéról, gofriról és a sörök hatalmas választékáról. Belgium tájai az Északi-tenger homokos strandjaitól az Ardennek dombjaiig és erdőiig terjednek.",
    ro: "Belgia este o țară din Europa de Vest cunoscută pentru orașele sale medievale, arhitectura renascentistă și ca sediu al Uniunii Europene și NATO. Țara are o istorie bogată ca punct de răscruce al Europei, îmbinând culturile germanice și latine. Este faimoasă pentru tradițiile sale culinare, inclusiv ciocolata de talie mondială, vafele și o varietate vastă de beri. Peisajul Belgiei variază de la plajele cu nisip ale Mării Nordului până la dealurile și pădurile din Ardeni."
  },
  facts: {
    en: [
      "Belgium has three official languages: Dutch, French, and German.",
      "Brussels is the de facto capital of the European Union.",
      "Belgium is known for over 800 varieties of beer.",
      "The country invented the saxophone, created by Adolphe Sax in 1846.",
      "Belgian waffles and chocolates are world famous.",
      "Belgium has the highest density of castles in the world per square mile.",
      "The Big Bang theory was first proposed by a Belgian priest and physicist, Georges Lemaître.",
      "Belgium produces over 220,000 tons of chocolate per year."
    ],
    de: [
      "Belgien hat drei Amtssprachen: Niederländisch, Französisch und Deutsch.",
      "Brüssel ist die de-facto-Hauptstadt der Europäischen Union.",
      "Belgien ist bekannt für über 800 verschiedene Biersorten.",
      "Das Land erfand das Saxophon, das 1846 von Adolphe Sax entwickelt wurde.",
      "Belgische Waffeln und Pralinen sind weltberühmt.",
      "Belgien hat die höchste Dichte an Schlössern pro Quadratmeile weltweit.",
      "Die Urknalltheorie wurde zuerst von einem belgischen Priester und Physiker, Georges Lemaître, vorgeschlagen.",
      "Belgien produziert jährlich über 220.000 Tonnen Schokolade."
    ],
    hu: [
      "Belgiumnak három hivatalos nyelve van: a holland, a francia és a német.",
      "Brüsszel az Európai Unió de facto fővárosa.",
      "Belgium több mint 800 féle söréről ismert.",
      "Az országban találták fel a szaxofont, amelyet Adolphe Sax alkotott meg 1846-ban.",
      "A belga gofri és csokoládé világhírű.",
      "Belgiumban a legmagasabb a kastélyok sűrűsége a világon négyzetmérföldenként.",
      "Az Ősrobbanás-elméletet először egy belga pap és fizikus, Georges Lemaître javasolta.",
      "Belgium évente több mint 220 000 tonna csokoládét termel."
    ],
    ro: [
      "Belgia are trei limbi oficiale: olandeza, franceza și germana.",
      "Bruxelles este capitala de facto a Uniunii Europene.",
      "Belgia este cunoscută pentru peste 800 de varietăți de bere.",
      "Țara a inventat saxofonul, creat de Adolphe Sax în 1846.",
      "Vafele și ciocolata belgiană sunt faimoase în întreaga lume.",
      "Belgia are cea mai mare densitate de castele din lume pe milă pătrată.",
      "Teoria Big Bang a fost propusă pentru prima dată de un preot și fizician belgian, Georges Lemaître.",
      "Belgia produce peste 220.000 de tone de ciocolată pe an."
    ]
  },
  image: "/geo-images/belgium/belgium-main.webp",
};

export const belgiumRegions: POI[] = [
  {
    id: "city-brussels",
    type: "city",
    parent: "belgium",
    coords: [4.3517, 50.8503],
    name: { de: "Brüssel", hu: "Brüsszel", ro: "Bruxelles", en: "Brussels" },
    description: {
      en: "Brussels is the capital of Belgium and the administrative center of the European Union. It is a multicultural city known for its stunning Grand Place, historic architecture, and vibrant art scene. As a global hub for international politics, it hosts numerous embassies and international organizations. Visitors enjoy its diverse culinary offerings, from fine dining to street food like fries and waffles.",
      de: "Brüssel ist die Hauptstadt Belgiens und das Verwaltungszentrum der Europäischen Union. Es ist eine multikulturelle Stadt, bekannt für ihren beeindruckenden Grand Place, historische Architektur und eine lebendige Kunstszene. Als globales Zentrum für internationale Politik beherbergt sie zahlreiche Botschaften und internationale Organisationen. Besucher genießen das vielfältige kulinarische Angebot, von gehobener Küche bis hin zu Street Food wie Pommes und Waffeln.",
      hu: "Brüsszel Belgium fővárosa és az Európai Unió adminisztratív központja. Multikulturális város, amely lenyűgöző főteréről (Grand Place), történelmi építészetéről és vibráló művészeti életéről ismert. A nemzetközi politika globális csomópontjaként számos nagykövetségnek és nemzetközi szervezetnek ad otthont. A látogatók élvezik változatos kulináris kínálatát, a finom ételektől az utcai ételekig, mint a sült krumpli és a gofri.",
      ro: "Bruxelles este capitala Belgiei și centrul administrativ al Uniunii Europene. Este un oraș multicultural cunoscut pentru uimitoarea sa Grand Place, arhitectura istorică și scena artistică vibrantă. Ca centru global pentru politica internațională, găzduiește numeroase ambasade și organizații internaționale. Vizitatorii se bucură de ofertele sale culinare diverse, de la restaurante rafinate la mâncare stradală, cum ar fi cartofii prăjiți și vafele."
    },
    facts: {
      en: ["The Grand Place is a UNESCO World Heritage site.","Brussels is home to the Atomium, built for the 1958 World Expo.","The city has over 80 museums.","Manneken Pis is a famous landmark statue in the city center."],
      de: ["Der Grand Place ist ein UNESCO-Weltkulturerbe.","Brüssel beherbergt das Atomium, das für die Weltausstellung 1958 gebaut wurde.","Die Stadt hat über 80 Museen.","Manneken Pis ist eine berühmte Wahrzeichen-Statue im Stadtzentrum."],
      hu: ["A Grand Place az UNESCO Világörökség része.","Brüsszelben található az Atomium, amely az 1958-as világkiállításra épült.","A városban több mint 80 múzeum található.","A Manneken Pis egy híres jelképes szobor a városközpontban."],
      ro: ["Grand Place este un sit al Patrimoniului Mondial UNESCO.","Bruxelles găzduiește Atomium, construit pentru Expoziția Mondială din 1958.","Orașul are peste 80 de muzee.","Manneken Pis este o faimoasă statuie simbol din centrul orașului."]
    },
    image: "/geo-images/belgium/brussels.webp",
  },
  {
    id: "reg-flanders",
    type: "region",
    parent: "belgium",
    coords: [3.73, 51.05],
    name: { de: "Flandern", hu: "Flandria", ro: "Flandra", en: "Flanders" },
    description: {
      en: "Flanders is the Dutch-speaking northern region of Belgium. It is characterized by its flat landscape, historic art cities like Antwerp, Ghent, and Bruges, and a strong economic presence. The region has a rich artistic heritage, being the home of the Flemish Primitives and masters like Rubens. Flanders is also famous for its cycling culture and world-class ports.",
      de: "Flandern ist die niederländischsprachige nördliche Region Belgiens. Sie zeichnet sich durch ihre flache Landschaft, historische Kunststädte wie Antwerpen, Gent und Brügge und eine starke wirtschaftliche Präsenz aus. Die Region hat ein reiches künstlerisches Erbe und war die Heimat der Flämischen Primitiven und Meister wie Rubens. Flandern ist auch berühmt für seine Radsportkultur und erstklassigen Häfen.",
      hu: "Flandria Belgium holland nyelvű északi régiója. Jellemzője a sík táj, az olyan történelmi művészeti városok, mint Antwerpen, Gent és Brugge, valamint az erős gazdasági jelenlét. A régió gazdag művészeti örökséggel rendelkezik, a flamand primitívek és olyan mesterek otthona, mint Rubens. Flandria híres kerékpáros kultúrájáról és világszínvonalú kikötőiről is.",
      ro: "Flandra este regiunea nordică vorbitoare de olandeză a Belgiei. Se caracterizează prin peisajul său plat, orașe de artă istorice precum Anvers, Gent și Bruges și o prezență economică puternică. Regiunea are o bogată moștenire artistică, fiind casa Primitivilor Flamanzi și a unor maeștri precum Rubens. Flandra este, de asemenea, faimoasă pentru cultura sa ciclistă și porturile de talie mondială."
    },
    facts: {
      en: ["Antwerp is the diamond capital of the world.","Bruges is often called the 'Venice of the North' due to its canals.","Flanders is one of the most densely populated regions in Europe.","The region is famous for its medieval belfries."],
      de: ["Antwerpen ist die Diamantenhauptstadt der Welt.","Brügge wird wegen seiner Kanäle oft als 'Venedig des Nordens' bezeichnet.","Flandern ist eine der am dichtesten besiedelten Regionen Europas.","Die Region ist berühmt für ihre mittelalterlichen Belfriede."],
      hu: ["Antwerpen a világ gyémántfővárosa.","Brugge-t csatornái miatt gyakran az 'Észak Velencéjének' nevezik.","Flandria Európa egyik legsűrűbben lakott régiója.","A régió híres középkori harangtornyairól (belfry)."],
      ro: ["Anvers este capitala diamantelor din lume.","Bruges este adesea numit 'Veneția Nordului' datorită canalelor sale.","Flandra este una dintre cele mai dens populate regiuni din Europa.","Regiunea este faimoasă pentru clopotnițele sale medievale."]
    },
    image: "/geo-images/belgium/flanders.webp",
  },
  {
    id: "reg-wallonia",
    type: "region",
    parent: "belgium",
    coords: [4.86, 50.46],
    name: { de: "Wallonien", hu: "Vallónia", ro: "Valonia", en: "Wallonia" },
    description: {
      en: "Wallonia is the French-speaking southern region of Belgium. It is known for its picturesque landscapes, including the Ardennes mountains, historic castles, and industrial heritage. The region offers a mix of charming towns like Namur and Liège, and beautiful nature perfect for hiking and outdoor activities. Wallonia has a rich folklore and is famous for its hearty cuisine and local beers.",
      de: "Wallonien ist die französischsprachige südliche Region Belgiens. Sie ist bekannt für ihre malerischen Landschaften, einschließlich der Ardennen, historische Schlösser und ihr industrielles Erbe. Die Region bietet eine Mischung aus charmanten Städten wie Namur und Lüttich und wunderschöner Natur, die ideal zum Wandern und für Outdoor-Aktivitäten ist. Wallonien hat eine reiche Folklore und ist berühmt für seine herzhafte Küche und lokalen Biere.",
      hu: "Vallónia Belgium francia nyelvű déli régiója. Festői tájairól, többek között az Ardennek hegységéről, történelmi kastélyairól és ipari örökségéről ismert. A régió olyan bájos városok keverékét kínálja, mint Namur és Liège, valamint gyönyörű természetet, amely tökéletes túrázáshoz és szabadtéri tevékenységekhez. Vallónia gazdag folklórral rendelkezik, és híres kiadós konyhájáról és helyi söreiről.",
      ro: "Valonia este regiunea sudică vorbitoare de franceză a Belgiei. Este cunoscută pentru peisajele sale pitorești, inclusiv munții Ardeni, castele istorice și moștenirea industrială. Regiunea oferă un amestec de orașe fermecătoare precum Namur și Liège și o natură frumoasă, perfectă pentru drumeții și activități în aer liber. Valonia are un folclor bogat și este faimoasă pentru bucătăria sa consistentă și berile locale."
    },
    facts: {
      en: ["The Ardennes was the site of the Battle of the Bulge in WWII.","Wallonia has many UNESCO-listed industrial sites.","Namur is the capital of the Walloon region.","The region is famous for its Trappist beers."],
      de: ["Die Ardennen waren Schauplatz der Ardennenoffensive im Zweiten Weltkrieg.","Wallonien hat viele UNESCO-gelistete Industriestätten.","Namur ist die Hauptstadt der wallonischen Region.","Die Region ist berühmt für ihre Trappistenbiere."],
      hu: ["Az Ardennek volt a helyszíne a II. világháborús ardenneki offenzívának.","Vallónia számos UNESCO által jegyzett ipari helyszínnel rendelkezik.","Namur a vallon régió fővárosa.","A régió híres trappista söreiről."],
      ro: ["Ardenii au fost locul Bătăliei de la Bulge în cel de-al Doilea Război Mondial.","Valonia are multe situri industriale incluse în patrimoniul UNESCO.","Namur este capitala regiunii valone.","Regiunea este faimoasă pentru berile sale trapiste."]
    },
    image: "/geo-images/belgium/wallonia.webp",
  }
];

export const belgiumCulture: POI[] = [
  {
    id: "cult-atomium",
    type: "culture",
    parent: "city-brussels",
    coords: [4.3415, 50.8949],
    name: { de: "Atomium", hu: "Atomium", ro: "Atomium", en: "Atomium" },
    description: {
      en: "The Atomium is a landmark building in Brussels, originally constructed for the 1958 World's Expo. It represents a unit cell of an iron crystal magnified 165 billion times. Today, it is a museum and a symbol of Brussels, offering panoramic views of the city from its highest sphere. It stands as a testament to the optimism and scientific progress of the mid-20th century.",
      de: "Das Atomium ist ein Wahrzeichen in Brüssel, das ursprünglich für die Weltausstellung 1958 errichtet wurde. Es stellt eine Elementarzelle eines Eisenkristalls dar, die 165 Milliarden Mal vergrößert wurde. Heute ist es ein Museum und ein Symbol für Brüssel und bietet von seiner höchsten Kugel aus einen Panoramablick auf die Stadt. Es steht als Zeugnis für den Optimismus und den wissenschaftlichen Fortschritt der Mitte des 20. Jahrhunderts.",
      hu: "Az Atomium Brüsszel egyik jelképes épülete, amelyet eredetileg az 1958-as világkiállításra építettek. Egy vas kristályrács elemi celláját ábrázolja, 165 milliárdszoros nagyításban. Ma múzeumként és Brüsszel szimbólumaként működik, legfelső gömbjéből panorámás kilátás nyílik a városra. A 20. század közepi optimizmus és tudományos fejlődés mementója.",
      ro: "Atomium este o clădire simbol din Bruxelles, construită inițial pentru Expoziția Mondială din 1958. Reprezintă o celulă unitară a unui cristal de fier mărită de 165 de miliarde de ori. Astăzi, este un muzeu și un simbol al Bruxelles-ului, oferind vederi panoramice ale orașului din sfera sa cea mai înaltă. Este o mărturie a optimismului și progresului științific de la mijlocul secolului al XX-lea."
    },
    facts: {
      en: ["It is 102 meters tall.","The spheres are connected by tubes with escalators.","It was intended to last only six months but became a permanent icon.","The top sphere contains a restaurant."],
      de: ["Es ist 102 Meter hoch.","Die Kugeln sind durch Röhren mit Rolltreppen verbunden.","Es sollte nur sechs Monate stehen bleiben, wurde aber zu einer dauerhaften Ikone.","In der obersten Kugel befindet sich ein Restaurant."],
      hu: ["102 méter magas.","A gömböket mozgólépcsőket tartalmazó csövek kötik össze.","Eredetileg csak hat hónapig maradt volna állva, de állandó ikonná vált.","A legfelső gömbben egy étterem található."],
      ro: ["Are 102 metri înălțime.","Sferele sunt conectate prin tuburi cu scări rulante.","A fost prevăzut să dureze doar șase luni, dar a devenit o pictogramă permanentă.","Sfera superioară conține un restaurant."]
    },
    image: "/geo-images/belgium/atomium.webp",
  },
  {
    id: "cult-grand-place",
    type: "culture",
    parent: "city-brussels",
    coords: [4.3524, 50.8467],
    name: { de: "Grand Place", hu: "Grand Place", ro: "Grand Place", en: "Grand Place" },
    description: {
      en: "The Grand Place is the central square of Brussels, widely considered one of the most beautiful squares in Europe. It is surrounded by opulent guildhalls and two larger edifices, the city's Town Hall and the King's House. The square is a UNESCO World Heritage site and serves as the heart of the city's social and cultural life, hosting events like the Flower Carpet every two years.",
      de: "Der Grand Place ist der zentrale Platz von Brüssel und gilt weithin als einer der schönsten Plätze Europas. Er ist von prächtigen Zunfthäusern und zwei größeren Gebäuden umgeben, dem Rathaus der Stadt und dem Königshaus. Der Platz ist ein UNESCO-Weltkulturerbe und dient als Herz des sozialen und kulturellen Lebens der Stadt, wo alle zwei Jahre Veranstaltungen wie der Blumenteppich stattfinden.",
      hu: "A Grand Place Brüsszel központi tere, amelyet széles körben Európa egyik legszebb terének tartanak. Gazdagon díszített céhházak és két nagyobb épület, a Városháza és a Király Háza veszi körül. A tér az UNESCO Világörökség része, és a város társadalmi és kulturális életének szíve, ahol kétévente olyan eseményeket rendeznek, mint a Virágszőnyeg.",
      ro: "Grand Place este piața centrală din Bruxelles, considerată pe scară largă una dintre cele mai frumoase piețe din Europa. Este înconjurată de case de bresle opulente și de două edificii mai mari, Primăria orașului și Casa Regelui. Piața este un sit al Patrimoniului Mondial UNESCO și servește drept inima vieții sociale și culturale a orașului, găzduind evenimente precum Covorul de Flori la fiecare doi ani."
    },
    facts: {
      en: ["Most of the buildings date from the late 17th century.","Victor Hugo called it the most beautiful square in the world.","The Town Hall is the only remaining medieval building on the square.","The Flower Carpet uses over 500,000 begonias."],
      de: ["Die meisten Gebäude stammen aus dem späten 17. Jahrhundert.","Victor Hugo nannte ihn den schönsten Platz der Welt.","Das Rathaus ist das einzige erhaltene mittelalterliche Gebäude auf dem Platz.","Für den Blumenteppich werden über 500.000 Begonien verwendet."],
      hu: ["Az épületek többsége a 17. század végéről származik.","Victor Hugo a világ legszebb terének nevezte.","A Városháza az egyetlen megmaradt középkori épület a téren.","A Virágszőnyeghez több mint 500 000 begóniát használnak fel."],
      ro: ["Majoritatea clădirilor datează de la sfârșitul secolului al XVII-lea.","Victor Hugo a numit-o cea mai frumoasă piață din lume.","Primăria este singura clădire medievală rămasă în piață.","Covorul de Flori folosește peste 500.000 de begonii."]
    },
    image: "/geo-images/belgium/grand-place.webp",
  }
];

export const belgiumNature: POI[] = [
  {
    id: "nat-ardennes",
    type: "nature",
    parent: "reg-wallonia",
    coords: [5.5, 50.2],
    name: { de: "Ardennen", hu: "Ardennek", ro: "Munții Ardeni", en: "Ardennes" },
    description: {
      en: "The Ardennes is a region of extensive forests, rolling hills, and ridges in southeast Belgium. It is a haven for nature lovers, offering numerous trails for hiking, cycling, and kayaking. The area is dotted with charming villages, historic abbeys, and medieval castles. It is also known for its rich wildlife and as a significant historical site from World War II.",
      de: "Die Ardennen sind eine Region mit ausgedehnten Wäldern, sanften Hügeln und Bergrücken im Südosten Belgiens. Sie sind ein Paradies für Naturliebhaber und bieten zahlreiche Wege zum Wandern, Radfahren und Kajakfahren. Die Gegend ist gespickt mit charmanten Dörfern, historischen Abteien und mittelalterlichen Schlössern. Sie ist auch bekannt für ihre reiche Tierwelt und als bedeutende historische Stätte aus dem Zweiten Weltkrieg.",
      hu: "Az Ardennek kiterjedt erdők, dombok és hegygerincek vidéke Délkelet-Belgiumban. A természetkedvelők paradicsoma, számos túra-, kerékpár- és kajakútvonalat kínál. A területet bájos falvak, történelmi apátságok és középkori várak tarkítják. Gazdag vadvilágáról és a II. világháború jelentős történelmi helyszíneként is ismert.",
      ro: "Munții Ardeni sunt o regiune de păduri extinse, dealuri și creste în sud-estul Belgiei. Este un paradis pentru iubitorii de natură, oferind numeroase trasee pentru drumeții, ciclism și caiac. Zona este presărată cu sate fermecătoare, abații istorice și castele medievale. Este, de asemenea, cunoscută pentru fauna sa bogată și ca sit istoric semnificativ din cel de-al Doilea Război Mondial."
    },
    facts: {
      en: ["Signal de Botrange is the highest point in Belgium.","The region is famous for its smoked ham and game meat.","It covers parts of Belgium, Luxembourg, and France.","The caves of Han-sur-Lesse are a major natural attraction."],
      de: ["Signal de Botrange ist der höchste Punkt Belgiens.","Die Region ist berühmt für ihren geräucherten Schinken und Wildfleisch.","Sie erstreckt sich über Teile von Belgien, Luxemburg und Frankreich.","Die Höhlen von Han-sur-Lesse sind eine bedeutende natürliche Attraktion."],
      hu: ["A Signal de Botrange Belgium legmagasabb pontja.","A régió híres füstölt sonkájáról és vadhúsairól.","Belgium, Luxemburg és Franciaország egyes részeit fedi le.","A Han-sur-Lesse barlangok jelentős természeti látványosságnak számítanak."],
      ro: ["Signal de Botrange este cel mai înalt punct din Belgia.","Regiunea este faimoasă pentru șunca afumată și carnea de vânat.","Acoperă părți din Belgia, Luxemburg și Franța.","Peșterile din Han-sur-Lesse sunt o atracție naturală majoră."]
    },
    image: "/geo-images/belgium/ardennes.webp",
  }
];

export const belgiumAllPoi: POI[] = [belgiumCountry, ...belgiumRegions, ...belgiumCulture, ...belgiumNature];
