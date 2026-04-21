import type { POI } from "./poi";

export const slovakiaCountry: POI = {
  id: "country-slovakia",
  type: "country",
  parent: "europe",
  coords: [19.6990, 48.6690],
  name: {
    de: "Slowakei",
    hu: "Szlovákia",
    ro: "Slovacia",
    en: "Slovakia"
  },
  description: {
    de: "Die Slowakei ist ein Binnenstaat in Mitteleuropa, bekannt für seine dramatischen Berglandschaften und zahlreichen Burgen. Das Land bietet eine reiche Mischung aus Volkskultur, historischen Städten und unberührter Natur in den Karpaten.",
    hu: "Szlovákia egy közép-európai ország, amely drámai hegyi tájairól és számos váráról ismert. Az ország a népi kultúra, a történelmi városok és a Kárpátok érintetlen természetének gazdag keverékét kínálja.",
    ro: "Slovacia este o țară fără ieșire la mare din Europa Centrală, cunoscută pentru peisajele sale montane dramatice și numeroasele castele. Țara oferă un amestec bogat de cultură populară, orașe istorice și natură virgină în Carpați.",
    en: "Slovakia is a landlocked country in Central Europe, known for its dramatic mountain landscapes and numerous castles. The country offers a rich mix of folk culture, historic towns, and untouched nature in the Carpathian Mountains."
  },
  facts: {
    de: [
      "Die Slowakei hat die höchste Dichte an Burgen und Schlössern pro Kopf weltweit.",
      "Mehr als 6.000 Höhlen wurden in der Slowakei entdeckt.",
      "Der geografische Mittelpunkt Europas soll in der Nähe des Dorfes Kremnické Bane liegen.",
      "Das Land hat neun Nationalparks und 14 geschützte Landschaftsgebiete."
    ],
    hu: [
      "Szlovákiában a legmagasabb az egy főre jutó várak és kastélyok száma a világon.",
      "Szlovákiában több mint 6000 barlangot fedeztek fel.",
      "Európa földrajzi középpontja állítólag Jánosrét (Kremnické Bane) falu közelében található.",
      "Az országnak kilenc nemzeti parkja és 14 tájvédelmi körzete van."
    ],
    ro: [
      "Slovacia are cea mai mare densitate de castele și palate pe cap de locuitor din lume.",
      "Peste 6.000 de peșteri au fost descoperite în Slovacia.",
      "Centrul geografic al Europei s-ar afla lângă satul Kremnické Bane.",
      "Țara are nouă parcuri naționale și 14 zone peisajere protejate."
    ],
    en: [
      "Slovakia has the highest density of castles and chateaux per capita in the world.",
      "More than 6,000 caves have been discovered in Slovakia.",
      "The geographical center of Europe is said to be located near the village of Kremnické Bane.",
      "The country has nine national parks and 14 protected landscape areas."
    ]
  },
  image: "/geo-images/slovakia/country-slovakia.webp"
};

export const slovakiaRegions: POI[] = [
  {
    id: "city-bratislava",
    type: "city",
    parent: "country-slovakia",
    coords: [17.1077, 48.1486],
    name: {
      de: "Pressburg",
      hu: "Pozsony",
      ro: "Bratislava",
      en: "Bratislava"
    },
    description: {
      de: "Bratislava, die Hauptstadt der Slowakei, liegt an der Donau nahe der Grenze zu Österreich und Ungarn. Die Stadt ist bekannt für ihre restaurierte Altstadt und die markante Burg auf einem Hügel über dem Fluss.",
      hu: "Pozsony, Szlovákia fővárosa a Duna partján fekszik, az osztrák és a magyar határ közelében. A város felújított óvárosáról és a folyó feletti dombon álló jellegzetes váráról ismert.",
      ro: "Bratislava, capitala Slovaciei, este situată pe Dunăre, lângă granița cu Austria și Ungaria. Orașul este cunoscut pentru orașul său vechi restaurat și castelul distinctiv de pe un deal deasupra fluviului.",
      en: "Bratislava, the capital of Slovakia, is set along the Danube River by the border with Austria and Hungary. The city is known for its restored old town and the distinctive castle on a hill above the river."
    },
    facts: {
      de: [
        "Bratislava ist die einzige Hauptstadt der Welt, die an zwei Nachbarländer grenzt.",
        "Die Burg Bratislava hat vier Ecktürme und ähnelt einem umgedrehten Tisch.",
        "Die Stadt war unter dem Namen Pressburg lange Zeit die Hauptstadt Ungarns.",
        "Die UFO-Brücke bietet eine Aussichtsplattform in 85 Metern Höhe."
      ],
      hu: [
        "Pozsony az egyetlen főváros a világon, amely két szomszédos országgal is határos.",
        "A pozsonyi várnak négy saroktornya van, és egy felfordított asztalra hasonlít.",
        "A város hosszú ideig Magyarország fővárosa volt Pozsony néven.",
        "Az UFO-híd 85 méter magas kilátóterasszal rendelkezik."
      ],
      ro: [
        "Bratislava este singura capitală din lume care se învecinează cu două țări vecine.",
        "Castelul Bratislava are patru turnuri de colț și seamănă cu o masă răsturnată.",
        "Orașul a fost mult timp capitala Ungariei sub numele de Pressburg.",
        "Podul UFO oferă o platformă de observare la o înălțime de 85 de metri."
      ],
      en: [
        "Bratislava is the only capital in the world that borders two neighboring countries.",
        "Bratislava Castle has four corner towers and resembles an upturned table.",
        "The city was the capital of Hungary for a long time under the name Pressburg.",
        "The UFO Bridge features an observation deck at a height of 85 meters."
      ]
    },
    image: "/geo-images/slovakia/city-bratislava.webp"
  },
  {
    id: "city-kosice",
    type: "city",
    parent: "country-slovakia",
    coords: [21.2611, 48.7164],
    name: {
      de: "Kaschau",
      hu: "Kassa",
      ro: "Košice",
      en: "Košice"
    },
    description: {
      de: "Košice ist die zweitgrößte Stadt der Slowakei und das kulturelle Zentrum des Ostens. Die Stadt besitzt einen wunderschönen spindelförmigen Hauptplatz mit dem gotischen Dom der heiligen Elisabeth.",
      hu: "Kassa Szlovákia második legnagyobb városa és a keleti országrész kulturális központja. A város gyönyörű, orsó alakú főtérrel rendelkezik, amelynek közepén a gótikus Szent Erzsébet-dóm áll.",
      ro: "Košice este al doilea oraș ca mărime din Slovacia și centrul cultural al estului. Orașul are o piață principală frumoasă în formă de fus, cu Catedrala gotică Sfânta Elisabeta.",
      en: "Košice is the second-largest city in Slovakia and the cultural center of the east. The city boasts a beautiful spindle-shaped main square with the Gothic St. Elisabeth Cathedral."
    },
    facts: {
      de: [
        "Der Dom der heiligen Elisabeth ist die größte Kirche der Slowakei.",
        "Košice war 2013 Kulturhauptstadt Europas.",
        "Der Friedensmarathon von Košice ist der älteste Marathon in Europa.",
        "Die Stadt hat das älteste urkundlich belegte Stadtwappen Europas (1369)."
      ],
      hu: [
        "A Szent Erzsébet-dóm Szlovákia legnagyobb temploma.",
        "Kassa 2013-ban Európa Kulturális Fővárosa volt.",
        "A kassai békemaraton Európa legrégebbi maratonja.",
        "A város rendelkezik Európa legrégebbi, dokumentált városi címerével (1369)."
      ],
      ro: [
        "Catedrala Sfânta Elisabeta este cea mai mare biserică din Slovacia.",
        "Košice a fost Capitală Europeană a Culturii în 2013.",
        "Maratonul Păcii din Košice este cel mai vechi maraton din Europa.",
        "Orașul are cea mai veche stemă orășenească documentată din Europa (1369)."
      ],
      en: [
        "St. Elisabeth Cathedral is the largest church in Slovakia.",
        "Košice was the European Capital of Culture in 2013.",
        "The Košice Peace Marathon is the oldest marathon in Europe.",
        "The city has the oldest documented city coat of arms in Europe (1369)."
      ]
    },
    image: "/geo-images/slovakia/city-kosice.webp"
  },
  {
    id: "nature-high-tatras",
    type: "nature",
    parent: "country-slovakia",
    coords: [20.1333, 49.1667],
    name: {
      de: "Hohe Tatra",
      hu: "Magas-Tátra",
      ro: "Munții Tatra Mare",
      en: "High Tatras"
    },
    description: {
      de: "Die Hohe Tatra ist das kleinste Hochgebirge der Welt und Teil der Karpaten. Sie bietet spektakuläre Gipfel, Gletscherseen (Tarnen) und eine einzigartige Flora und Fauna.",
      hu: "A Magas-Tátra a világ legkisebb magashegysége és a Kárpátok része. Látványos csúcsokat, gleccsertavakat (tengerszemeket) és egyedülálló növény- és állatvilágot kínál.",
      ro: "Munții Tatra Mare sunt cei mai mici munți înalți din lume și fac parte din Carpați. Oferă vârfuri spectaculoase, lacuri glaciare și o floră și faună unică.",
      en: "The High Tatras are the smallest high mountain range in the world and part of the Carpathians. They offer spectacular peaks, glacial lakes (tarns), and unique flora and fauna."
    },
    facts: {
      de: [
        "Der Gerlachovský štít ist mit 2.655 Metern der höchste Gipfel der Slowakei.",
        "Die Hohe Tatra ist der älteste Nationalpark der Slowakei (TANAP).",
        "Es gibt über 100 Gletscherseen in der Hohen Tatra.",
        "Die Region ist ein Lebensraum für Braunbären, Wölfe und Gämsen."
      ],
      hu: [
        "A Gerlachfalvi-csúcs 2655 méterrel Szlovákia legmagasabb pontja.",
        "A Magas-Tátra Szlovákia legrégebbi nemzeti parkja (TANAP).",
        "Több mint 100 gleccsertó található a Magas-Tátrában.",
        "A régió barna medvék, farkasok és zergék élőhelye."
      ],
      ro: [
        "Vârful Gerlachovský este cel mai înalt vârf din Slovacia, cu 2.655 de metri.",
        "Tatra Mare este cel mai vechi parc național din Slovacia (TANAP).",
        "Există peste 100 de lacuri glaciare în Tatra Mare.",
        "Regiunea este un habitat pentru urși bruni, lupi și capre negre."
      ],
      en: [
        "Gerlachovský štít is the highest peak in Slovakia at 2,655 meters.",
        "The High Tatras is the oldest national park in Slovakia (TANAP).",
        "There are over 100 glacial lakes in the High Tatras.",
        "The region is a habitat for brown bears, wolves, and chamois."
      ]
    },
    image: "/geo-images/slovakia/nature-high-tatras.webp"
  },
  {
    id: "city-banska-stiavnica",
    type: "city",
    parent: "country-slovakia",
    coords: [18.8931, 48.4585],
    name: {
      de: "Schemnitz",
      hu: "Selmecbánya",
      ro: "Banská Štiavnica",
      en: "Banská Štiavnica"
    },
    description: {
      de: "Banská Štiavnica ist eine wunderschön erhaltene mittelalterliche Bergbaustadt und UNESCO-Welterbe. Sie liegt in der Mitte eines riesigen erloschenen Vulkans.",
      hu: "Selmecbánya egy gyönyörűen megőrzött középkori bányászváros és UNESCO Világörökségi helyszín. Egy hatalmas kialudt vulkán közepén fekszik.",
      ro: "Banská Štiavnica este un oraș minier medieval frumos conservat și sit al Patrimoniului Mondial UNESCO. Este situat în mijlocul unui vulcan uriaș stins.",
      en: "Banská Štiavnica is a beautifully preserved medieval mining town and a UNESCO World Heritage site. It is located in the center of a huge extinct volcano."
    },
    facts: {
      de: [
        "Hier wurde 1762 die erste Bergbauakademie der Welt gegründet.",
        "Die Stadt ist bekannt für ihre 'Tajchy' – künstliche Wasserreservoirs für den Bergbau.",
        "Das Alte Schloss und das Neue Schloss sind markante Wahrzeichen.",
        "Schießpulver wurde hier 1627 zum ersten Mal weltweit im Bergbau eingesetzt."
      ],
      hu: [
        "Itt alapították a világ első bányászati akadémiáját 1762-ben.",
        "A város híres a 'tajchy'-król – a bányászathoz használt mesterséges víztározókról.",
        "Az Óvár és az Újvár a város jellegzetes látnivalói.",
        "A világon először itt használtak puskaport bányászati célokra 1627-ben."
      ],
      ro: [
        "Prima academie minieră din lume a fost fondată aici în 1762.",
        "Orașul este cunoscut pentru 'tajchy' – rezervoare de apă artificiale pentru minerit.",
        "Castelul Vechi și Castelul Nou sunt repere distinctive.",
        "Praful de pușcă a fost folosit aici pentru prima dată în lume în minerit, în 1627."
      ],
      en: [
        "The world's first mining academy was founded here in 1762.",
        "The town is known for its 'tajchy' – artificial water reservoirs for mining.",
        "The Old Castle and the New Castle are prominent landmarks.",
        "Gunpowder was used here for the first time in the world for mining in 1627."
      ]
    },
    image: "/geo-images/slovakia/city-banska-stiavnica.webp"
  },
  {
    id: "castle-spis",
    type: "castle",
    parent: "country-slovakia",
    coords: [20.7681, 49.0011],
    name: {
      de: "Zipser Burg",
      hu: "Szepesi vár",
      ro: "Cetatea Spiš",
      en: "Spiš Castle"
    },
    description: {
      de: "Die Zipser Burg (Spišský hrad) ist eine der größten Burganlagen in Mitteleuropa. Sie thront auf einem Travertinfelsen über der Stadt Spišské Podhradie und ist UNESCO-Welterbe.",
      hu: "A Szepesi vár (Spišský hrad) Közép-Európa egyik legnagyobb várkomplexuma. Egy travertin sziklán magasodik Szepesváralja (Spišské Podhradie) városa felett, és az UNESCO Világörökség része.",
      ro: "Cetatea Spiš (Spišský hrad) este unul dintre cele mai mari complexe de castele din Europa Centrală. Se află pe o stâncă de travertin deasupra orașului Spišské Podhradie și este sit al Patrimoniului Mondial UNESCO.",
      en: "Spiš Castle (Spišský hrad) is one of the largest castle complexes in Central Europe. It towers on a travertine rock above the town of Spišské Podhradie and is a UNESCO World Heritage site."
    },
    facts: {
      de: [
        "Die Burg erstreckt sich über eine Fläche von mehr als 4 Hektar.",
        "Sie wurde im 12. Jahrhundert an der Stelle einer älteren Festung erbaut.",
        "Die Burg brannte 1780 nieder und ist seitdem eine Ruine.",
        "Sie diente als Drehort für Filme wie 'Dragonheart' und 'Die letzte Legion'."
      ],
      hu: [
        "A vár területe meghaladja a 4 hektárt.",
        "A 12. században épült egy korábbi erőd helyén.",
        "A vár 1780-ban leégett, azóta romként áll.",
        "Olyan filmek forgatási helyszíne volt, mint a 'Sárkányszív' és 'Az utolsó légió'."
      ],
      ro: [
        "Cetatea se întinde pe o suprafață de peste 4 hectare.",
        "A fost construită în secolul al XII-lea pe locul unei fortărețe mai vechi.",
        "Cetatea a ars în 1780 și de atunci este o ruină.",
        "A servit ca locație de filmare pentru filme precum 'Dragonheart' și 'Ultima legiune'."
      ],
      en: [
        "The castle covers an area of more than 4 hectares.",
        "It was built in the 12th century on the site of an older fortress.",
        "The castle burned down in 1780 and has been a ruin ever since.",
        "It served as a filming location for movies like 'Dragonheart' and 'The Last Legion'."
      ]
    },
    image: "/geo-images/slovakia/castle-spis.webp"
  },
  {
    id: "nature-slovak-paradise",
    type: "nature",
    parent: "country-slovakia",
    coords: [20.4333, 48.9167],
    name: {
      de: "Slowakisches Paradies",
      hu: "Szlovák Paradicsom",
      ro: "Parcul Național Paradisul Slovac",
      en: "Slovak Paradise"
    },
    description: {
      de: "Der Nationalpark Slowakisches Paradies (Slovenský raj) ist bekannt für seine tiefen Schluchten, Wasserfälle und Leitern. Es ist ein Paradies für Wanderer, die Abenteuer suchen.",
      hu: "A Szlovák Paradicsom (Slovenský raj) Nemzeti Park mély szurdokairól, vízeséseiről és létráiról ismert. A kalandvágyó túrázók paradicsoma.",
      ro: "Parcul Național Paradisul Slovac (Slovenský raj) este cunoscut pentru cheile sale adânci, cascadele și scările sale. Este un paradis pentru drumeții care caută aventură.",
      en: "The Slovak Paradise (Slovenský raj) National Park is known for its deep gorges, waterfalls, and ladders. It is a paradise for hikers seeking adventure."
    },
    facts: {
      de: [
        "Der Park enthält etwa 300 km Wanderwege, oft mit Leitern und Brücken.",
        "Die Dobšinská-Eishöhle im Park gehört zum UNESCO-Welterbe.",
        "Suchá Belá ist die meistbesuchte Schlucht des Parks.",
        "Der Park hat eine der höchsten Konzentrationen an Schmetterlingen in der Slowakei."
      ],
      hu: [
        "A parkban körülbelül 300 km túraútvonal található, gyakran létrákkal és hidakkal.",
        "A parkban található Dobšinai-jégbarlang az UNESCO Világörökség része.",
        "A Suchá Belá a park leglátogatottabb szurdoka.",
        "A parkban található Szlovákia egyik legnagyobb pillangó-koncentrációja."
      ],
      ro: [
        "Parcul conține aproximativ 300 km de trasee de drumeție, adesea cu scări și poduri.",
        "Peștera de gheață Dobšinská din parc face parte din Patrimoniul Mondial UNESCO.",
        "Suchá Belá este cel mai vizitat defileu din parc.",
        "Parcul are una dintre cele mai mari concentrații de fluturi din Slovacia."
      ],
      en: [
        "The park contains about 300 km of hiking trails, often with ladders and bridges.",
        "The Dobšinská Ice Cave in the park is a UNESCO World Heritage site.",
        "Suchá Belá is the most visited gorge in the park.",
        "The park has one of the highest concentrations of butterflies in Slovakia."
      ]
    },
    image: "/geo-images/slovakia/nature-slovak-paradise.webp"
  },
  {
    id: "city-piestany",
    type: "city",
    parent: "country-slovakia",
    coords: [17.8281, 48.5908],
    name: {
      de: "Pistyan",
      hu: "Pöstyén",
      ro: "Piešťany",
      en: "Piešťany"
    },
    description: {
      de: "Piešťany ist der größte und bekannteste Kurort der Slowakei. Er ist weltweit berühmt für seinen heilenden Schwefelschlamm und das Thermalwasser, das besonders bei Rheuma hilft.",
      hu: "Pöstyén Szlovákia legnagyobb és legismertebb fürdővárosa. Világszerte híres gyógyhatású kénes iszapjáról és termálvizéről, amely különösen a reumatikus panaszokon segít.",
      ro: "Piešťany este cea mai mare și mai cunoscută stațiune balneară din Slovacia. Este renumită în întreaga lume pentru nămolul său sulfuros curativ și apa termală, care ajută în special în cazul reumatismului.",
      en: "Piešťany is the largest and most famous spa town in Slovakia. It is world-renowned for its healing sulfuric mud and thermal water, which is particularly helpful for rheumatism."
    },
    facts: {
      de: [
        "Das Symbol der Stadt ist ein Mann, der eine Krücke zerbricht.",
        "Die Kurinsel (Kúpeľný ostrov) ist das Zentrum des Kurlebens.",
        "Das Thermalwasser entspringt aus einer Tiefe von 2.000 Metern.",
        "Piešťany hat eine lange Tradition in der Behandlung von Erkrankungen des Bewegungsapparates."
      ],
      hu: [
        "A város szimbóluma egy mankót törő férfi.",
        "A Fürdősziget (Kúpeľný ostrov) a gyógyüdülés központja.",
        "A termálvíz 2000 méter mélyről tör fel.",
        "Pöstyén hosszú hagyományokkal rendelkezik a mozgásszervi megbetegedések kezelésében."
      ],
      ro: [
        "Simbolul orașului este un bărbat care rupe o cârjă.",
        "Insula Băilor (Kúpeľný ostrov) este centrul vieții balneare.",
        "Apa termală izvorăște de la o adâncime de 2.000 de metri.",
        "Piešťany are o lungă tradiție în tratarea afecțiunilor aparatului locomotor."
      ],
      en: [
        "The symbol of the town is a man breaking a crutch.",
        "The Spa Island (Kúpeľný ostrov) is the center of spa life.",
        "The thermal water rises from a depth of 2,000 meters.",
        "Piešťany has a long tradition in treating musculoskeletal disorders."
      ]
    },
    image: "/geo-images/slovakia/city-piestany.webp"
  }
];

export const slovakiaCities: POI[] = [
  {
    id: "city-bratislava",
    type: "city",
    parent: "country-slovakia",
    coords: [17.1077, 48.1486],
    name: { de: "Pressburg", hu: "Pozsony", ro: "Bratislava", en: "Bratislava" },
    description: {
      de: "Bratislava ist die Hauptstadt der Slowakei an der Donau. Sie verbindet Altstadt, Burgberg und die Nähe zu Österreich und Ungarn.",
      hu: "Pozsony Szlovákia fővárosa a Duna partján. Az óvárost, a várdombot és az osztrák, valamint magyar közelséget egyesíti.",
      ro: "Bratislava este capitala Slovaciei, pe Dunăre. Îmbină centrul vechi, dealul castelului și apropierea de Austria și Ungaria.",
      en: "Bratislava is the capital of Slovakia on the Danube. It combines the old town, the castle hill, and close links to Austria and Hungary."
    },
    facts: {
      de: [
        "Bratislava ist die einzige Hauptstadt mit Grenze zu zwei Ländern.",
        "Die Altstadt ist das historische Herz der Stadt.",
        "Der Burgberg prägt die Silhouette über der Donau.",
        "Die Stadt ist ein wichtiger Verkehrsknoten in Mitteleuropa."
      ],
      hu: [
        "Pozsony az egyetlen főváros, amely két országgal határos.",
        "Az óváros a város történelmi központja.",
        "A várdomb meghatározza a Duna fölötti látképet.",
        "A város fontos közlekedési csomópont Közép-Európában."
      ],
      ro: [
        "Bratislava este singura capitală care se învecinează cu două țări.",
        "Centrul vechi este inima istorică a orașului.",
        "Dealul castelului domină panorama deasupra Dunării.",
        "Orașul este un nod important de transport în Europa Centrală."
      ],
      en: [
        "Bratislava is the only capital bordering two countries.",
        "The old town is the historic heart of the city.",
        "The castle hill shapes the skyline above the Danube.",
        "The city is a major transport hub in Central Europe."
      ]
    },
    image: "/geo-images/slovakia/city-bratislava.webp"
  },
  {
    id: "city-kosice",
    type: "city",
    parent: "country-slovakia",
    coords: [21.2611, 48.7164],
    name: { de: "Kaschau", hu: "Kassa", ro: "Košice", en: "Košice" },
    description: {
      de: "Košice ist die zweitgrößte Stadt der Slowakei und das kulturelle Zentrum des Ostens. Der Dom und der große Hauptplatz prägen das Stadtbild.",
      hu: "Kassa Szlovákia második legnagyobb városa és a keleti országrész kulturális központja. A dóm és a nagy főtér határozza meg a városképet.",
      ro: "Košice este al doilea oraș ca mărime din Slovacia și centrul cultural al estului. Catedrala și piața principală definesc orașul.",
      en: "Košice is the second-largest city in Slovakia and the cultural center of the east. The cathedral and main square define the city."
    },
    facts: {
      de: [
        "Košice ist die zweitgrößte Stadt der Slowakei.",
        "Der Dom der heiligen Elisabeth ist das wichtigste Wahrzeichen.",
        "Die Stadt war 2013 Europäische Kulturhauptstadt.",
        "Der Peace Marathon ist der älteste Marathon Europas."
      ],
      hu: [
        "Kassa Szlovákia második legnagyobb városa.",
        "A Szent Erzsébet-dóm a legfontosabb jelkép.",
        "A város 2013-ban Európa Kulturális Fővárosa volt.",
        "A békemaraton Európa legrégebbi maratonja."
      ],
      ro: [
        "Košice este al doilea oraș ca mărime din Slovacia.",
        "Catedrala Sfânta Elisabeta este simbolul principal.",
        "Orașul a fost Capitală Europeană a Culturii în 2013.",
        "Maratonul Păcii este cel mai vechi maraton din Europa."
      ],
      en: [
        "Košice is the second-largest city in Slovakia.",
        "St. Elisabeth Cathedral is the main landmark.",
        "The city was the European Capital of Culture in 2013.",
        "The Peace Marathon is the oldest marathon in Europe."
      ]
    },
    image: "/geo-images/slovakia/city-kosice.webp"
  },
  {
    id: "city-banska-bystrica",
    type: "city",
    parent: "country-slovakia",
    coords: [19.145, 48.7395],
    name: { de: "Neusohl", hu: "Besztercebánya", ro: "Banská Bystrica", en: "Banská Bystrica" },
    description: {
      de: "Banská Bystrica liegt im Herzen der Slowakei und ist eng mit dem Bergbau und dem slowakischen Nationalaufstand verbunden. Die Stadt verbindet historische Plätze mit starker regionaler Identität.",
      hu: "Besztercebánya Szlovákia szívében fekszik, és szorosan kapcsolódik a bányászathoz, valamint a szlovák nemzeti felkeléshez. Történelmi tereket és erős regionális identitást egyesít.",
      ro: "Banská Bystrica se află în inima Slovaciei și este legată de minerit și de revolta națională slovacă. Îmbină piețe istorice cu o identitate regională puternică.",
      en: "Banská Bystrica lies in the heart of Slovakia and is tied to mining and the Slovak National Uprising. It combines historic squares with strong regional identity."
    },
    facts: {
      de: [
        "Die Stadt spielte 1944 eine zentrale Rolle beim slowakischen Nationalaufstand.",
        "Sie liegt im Tal des Flusses Hron.",
        "Der Hauptplatz ist das historische Zentrum der Stadt.",
        "Die Umgebung ist reich an Bergbaugeschichte."
      ],
      hu: [
        "A város 1944-ben központi szerepet játszott a szlovák nemzeti felkelésben.",
        "A Hron folyó völgyében fekszik.",
        "A főtér a város történelmi központja.",
        "Környezete bányászati örökségben gazdag."
      ],
      ro: [
        "Orașul a avut un rol central în Revolta Națională Slovacă din 1944.",
        "Se află în valea râului Hron.",
        "Piața principală este centrul istoric al orașului.",
        "Zona înconjurătoare este bogată în istorie minieră."
      ],
      en: [
        "The city played a central role in the 1944 Slovak National Uprising.",
        "It lies in the valley of the Hron River.",
        "The main square is the historic center of the city.",
        "The surrounding area is rich in mining heritage."
      ]
    },
    image: "/geo-images/slovakia/city-banska-bystrica.webp"
  },
  {
    id: "city-zilina",
    type: "city",
    parent: "country-slovakia",
    coords: [18.7408, 49.2236],
    name: { de: "Sillein", hu: "Zsolna", ro: "Žilina", en: "Žilina" },
    description: {
      de: "Žilina liegt im Nordwesten der Slowakei am Fluss Waag und ist ein wichtiges regionales Zentrum. Die Stadt ist ein Ausgangspunkt für Reisen in die Berge.",
      hu: "Zsolna Szlovákia északnyugati részén, a Vág folyó mellett fekszik, és fontos regionális központ. A város a hegyek felé vezető utak kiindulópontja.",
      ro: "Žilina se află în nord-vestul Slovaciei, pe râul Váh, și este un important centru regional. Orașul este un punct de plecare spre munți.",
      en: "Žilina lies in northwestern Slovakia on the Váh River and is an important regional center. The city is a gateway to the mountains."
    },
    facts: {
      de: [
        "Žilina liegt am Fluss Waag.",
        "Die Stadt ist ein wichtiger Verkehrsknoten im Nordwesten.",
        "Sie dient als Tor zu den Bergen der Region.",
        "Die Altstadt rund um die Kirche ist historisch bedeutsam."
      ],
      hu: [
        "Zsolna a Vág folyó partján fekszik.",
        "A város fontos közlekedési csomópont északnyugaton.",
        "A térség hegyeihez vezető kapu.",
        "Az óváros történelmileg jelentős."
      ],
      ro: [
        "Žilina se află pe râul Váh.",
        "Orașul este un nod important de transport în nord-vest.",
        "Funcționează ca poartă către munții regiunii.",
        "Centrul vechi are valoare istorică."
      ],
      en: [
        "Žilina lies on the Váh River.",
        "The city is a major transport hub in the northwest.",
        "It serves as a gateway to the region's mountains.",
        "The old town has historical significance."
      ]
    },
    image: "/geo-images/slovakia/city-zilina.webp"
  },
  {
    id: "city-poprad",
    type: "city",
    parent: "country-slovakia",
    coords: [20.2972, 49.0594],
    name: { de: "Deutschendorf", hu: "Poprád", ro: "Poprad", en: "Poprad" },
    description: {
      de: "Poprad liegt am Fuß der Hohen Tatra und gilt als Tor zu den Bergen. Die Stadt ist ein wichtiger Ausgangspunkt für den Tourismus und den Zugang zur Tatra.",
      hu: "Poprád a Magas-Tátra lábánál fekszik, és a hegyek kapujaként ismert. A város fontos turisztikai kiindulópont a Tátrába.",
      ro: "Poprad se află la poalele Munților Tatra și este considerat poarta către munți. Orașul este un important punct de plecare turistic spre Tatra.",
      en: "Poprad lies at the foot of the High Tatras and is known as a gateway to the mountains. The city is an important tourism base for access to the Tatras."
    },
    facts: {
      de: [
        "Poprad ist ein wichtiger Zugangspunkt zur Hohen Tatra.",
        "Der Flughafen Poprad-Tatry unterstützt den Tourismus.",
        "Die Stadt besitzt eine gut erhaltene historische Kernzone.",
        "Sie ist ein zentraler Verkehrsknoten in der Region."
      ],
      hu: [
        "Poprád fontos belépési pont a Magas-Tátrába.",
        "A Poprád-Tátra repülőtér támogatja a turizmust.",
        "A városnak jól megőrzött történelmi központja van.",
        "A térség közlekedési csomópontja."
      ],
      ro: [
        "Poprad este un punct important de acces către Tatra Mare.",
        "Aeroportul Poprad-Tatry susține turismul din regiune.",
        "Orașul are un centru istoric bine păstrat.",
        "Este un nod de transport central în zonă."
      ],
      en: [
        "Poprad is a key access point to the High Tatras.",
        "Poprad-Tatry Airport supports tourism in the region.",
        "The city has a well-preserved historic center.",
        "It is a central transport hub in the area."
      ]
    },
    image: "/geo-images/slovakia/city-poprad.webp"
  }
];

export const slovakiaCulture: POI[] = [
  {
    id: "cult-bratislava-castle",
    type: "historical",
    parent: "country-slovakia",
    coords: [17.1003, 48.1422],
    name: { de: "Pressburger Burg", hu: "Pozsonyi vár", ro: "Castelul Bratislava", en: "Bratislava Castle" },
    description: {
      de: "Die Burg Bratislava steht auf dem Burgberg über der Donau und ist eines der stärksten Symbole der Hauptstadt.",
      hu: "A pozsonyi vár a Várhegyen áll a Duna fölött, és a főváros egyik legerősebb szimbóluma.",
      ro: "Castelul Bratislava se află pe dealul castelului deasupra Dunării și este un simbol puternic al capitalei.",
      en: "Bratislava Castle stands on the castle hill above the Danube and is one of the capital's strongest symbols."
    },
    facts: {
      de: [
        "Die Burg ist seit dem 9. Jahrhundert ein bedeutender Ort.",
        "Sie dominiert das Stadtbild über der Donau.",
        "Der Burgberg ist eng mit der Hauptstadtgeschichte verbunden.",
        "Die Anlage gilt als nationales Symbol der Slowakei."
      ],
      hu: [
        "A vár a 9. század óta jelentős helyszín.",
        "Uralkodik a Duna fölötti városképen.",
        "A várhegy szorosan kapcsolódik a főváros történetéhez.",
        "Az épületegyüttes Szlovákia nemzeti szimbóluma."
      ],
      ro: [
        "Castelul este un loc important încă din secolul al IX-lea.",
        "Domină panorama orașului deasupra Dunării.",
        "Dealul castelului este legat strâns de istoria capitalei.",
        "Ansamblul este considerat un simbol național al Slovaciei."
      ],
      en: [
        "The castle has been an important site since the 9th century.",
        "It dominates the city skyline above the Danube.",
        "The castle hill is closely tied to the capital's history.",
        "The complex is considered a national symbol of Slovakia."
      ]
    },
    image: "/geo-images/slovakia/cult-bratislava-castle.webp"
  },
  {
    id: "cult-spis-castle",
    type: "historical",
    parent: "country-slovakia",
    coords: [20.7678, 48.9983],
    name: { de: "Zipser Burg", hu: "Szepesvár", ro: "Castelul Spiș", en: "Spiš Castle" },
    description: {
      de: "Die Zipser Burg gehört zu den größten mittelalterlichen Burganlagen Mitteleuropas und ist UNESCO-Welterbe.",
      hu: "A Szepesvár Közép-Európa egyik legnagyobb középkori várkomplexuma és UNESCO Világörökség.",
      ro: "Castelul Spiș este unul dintre cele mai mari complexe medievale de fortificații din Europa Centrală și sit UNESCO.",
      en: "Spiš Castle is one of the largest medieval castle complexes in Central Europe and a UNESCO World Heritage site."
    },
    facts: {
      de: [
        "Die Burg ist UNESCO-Welterbe.",
        "Sie zählt zu den größten Burganlagen Mitteleuropas.",
        "Die Ruine liegt auf einem Travertinhügel.",
        "Sie ist ein Symbol der Ostslowakei."
      ],
      hu: [
        "A vár UNESCO Világörökség.",
        "Közép-Európa egyik legnagyobb várkomplexuma.",
        "A rom egy travertin dombon áll.",
        "A kelet-szlovákiai régió egyik jelképe."
      ],
      ro: [
        "Castelul este sit UNESCO.",
        "Este unul dintre cele mai mari complexe de castele din Europa Centrală.",
        "Ruina se află pe un deal de travertin.",
        "Este un simbol al estului Slovaciei."
      ],
      en: [
        "The castle is a UNESCO World Heritage site.",
        "It is one of the largest castle complexes in Central Europe.",
        "The ruin stands on a travertine hill.",
        "It is a symbol of eastern Slovakia."
      ]
    },
    image: "/geo-images/slovakia/cult-spis-castle.webp"
  },
  {
    id: "cult-banska-stiavnica",
    type: "historical",
    parent: "country-slovakia",
    coords: [18.8925, 48.4594],
    name: { de: "Schemnitz", hu: "Selmecbánya", ro: "Banská Štiavnica", en: "Banská Štiavnica" },
    description: {
      de: "Banská Štiavnica ist eine historische Bergbaustadt und UNESCO-Welterbe in einer vulkanischen Landschaft.",
      hu: "Selmecbánya történelmi bányászváros és UNESCO Világörökség egy vulkanikus tájban.",
      ro: "Banská Štiavnica este un oraș minier istoric și sit UNESCO într-un peisaj vulcanic.",
      en: "Banská Štiavnica is a historic mining town and UNESCO World Heritage site in a volcanic landscape."
    },
    facts: {
      de: [
        "Die Stadt ist UNESCO-Welterbe.",
        "Sie war ein Zentrum des Bergbaus in Mitteleuropa.",
        "Die künstlichen Wasserreservoirs heißen Tajchy.",
        "Hier entstand eine der ersten Bergbauakademien der Welt."
      ],
      hu: [
        "A város UNESCO Világörökség.",
        "Közép-Európa bányászatának egyik központja volt.",
        "A mesterséges víztározókat tajchy-nak nevezik.",
        "Itt jött létre a világ egyik első bányászati akadémiája."
      ],
      ro: [
        "Orașul este sit UNESCO.",
        "A fost un centru important al mineritului în Europa Centrală.",
        "Rezervoarele artificiale de apă se numesc tajchy.",
        "Aici a apărut una dintre primele academii miniere din lume."
      ],
      en: [
        "The town is a UNESCO World Heritage site.",
        "It was a major mining center in Central Europe.",
        "The artificial water reservoirs are called tajchy.",
        "One of the world's first mining academies was founded here."
      ]
    },
    image: "/geo-images/slovakia/cult-banska-stiavnica.webp"
  },
  {
    id: "cult-vlkolinec",
    type: "historical",
    parent: "country-slovakia",
    coords: [19.2833, 49.0419],
    name: { de: "Walkendorf", hu: "Vlkolínec", ro: "Vlkolínec", en: "Vlkolínec" },
    description: {
      de: "Vlkolínec ist ein gut erhaltenes Bergdorf und UNESCO-Welterbe. Die hölzerne Siedlungsstruktur zeigt traditionelle ländliche Architektur in den Karpaten.",
      hu: "Vlkolínec egy jól megőrzött hegyi falu és UNESCO Világörökség. A fából épült településszerkezet a Kárpátok hagyományos falusi építészetét mutatja.",
      ro: "Vlkolínec este un sat montan bine păstrat și sit UNESCO. Structura sa din lemn arată arhitectura rurală tradițională din Carpați.",
      en: "Vlkolínec is a well-preserved mountain village and UNESCO World Heritage site. Its wooden layout shows traditional rural architecture in the Carpathians."
    },
    facts: {
      de: [
        "Vlkolínec ist UNESCO-Welterbe.",
        "Das Dorf bewahrt traditionelle Holzarchitektur.",
        "Es liegt in einer Berglandschaft nahe Ružomberok.",
        "Es gilt als eines der besterhaltenen Volksbaudörfer des Landes."
      ],
      hu: [
        "Vlkolínec UNESCO Világörökség.",
        "A falu megőrizte a hagyományos faépítészetet.",
        "Ružomberok közelében, hegyi környezetben fekszik.",
        "Az ország egyik legjobb állapotban fennmaradt népi falva."
      ],
      ro: [
        "Vlkolínec este sit UNESCO.",
        "Satul păstrează arhitectura tradițională din lemn.",
        "Se află într-un peisaj montan lângă Ružomberok.",
        "Este unul dintre cele mai bine păstrate sate tradiționale din Slovacia."
      ],
      en: [
        "Vlkolínec is a UNESCO World Heritage site.",
        "The village preserves traditional wooden architecture.",
        "It lies in a mountain setting near Ružomberok.",
        "It is one of the country's best-preserved folk villages."
      ]
    },
    image: "/geo-images/slovakia/cult-vlkolinec.webp"
  },
  {
    id: "cult-bardejov",
    type: "historical",
    parent: "country-slovakia",
    coords: [21.2761, 49.2941],
    name: { de: "Bartfeld", hu: "Bártfa", ro: "Bardejov", en: "Bardejov" },
    description: {
      de: "Bardejov ist eine mittelalterliche Stadt mit einem hervorragend erhaltenen Marktplatz und UNESCO-Status.",
      hu: "Bártfa középkori város, kiemelkedően megőrzött főtérrel és UNESCO-státusszal.",
      ro: "Bardejov este un oraș medieval cu o piață principală foarte bine păstrată și statut UNESCO.",
      en: "Bardejov is a medieval town with a remarkably preserved main square and UNESCO status."
    },
    facts: {
      de: [
        "Die Altstadt gehört zum UNESCO-Welterbe.",
        "Der Hauptplatz zählt zu den schönsten in der Slowakei.",
        "Viele gotische und Renaissance-Bauten sind erhalten.",
        "Bardejov liegt nahe der polnischen Grenze."
      ],
      hu: [
        "Az óváros az UNESCO Világörökség része.",
        "A főtér Szlovákia egyik legszebb tere.",
        "Sok gótikus és reneszánsz épület fennmaradt.",
        "Bártfa közel fekszik a lengyel határhoz."
      ],
      ro: [
        "Centrul vechi face parte din Patrimoniul Mondial UNESCO.",
        "Piața principală este una dintre cele mai frumoase din Slovacia.",
        "Au supraviețuit multe clădiri gotice și renascentiste.",
        "Bardejov se află aproape de granița cu Polonia."
      ],
      en: [
        "The old town is part of the UNESCO World Heritage site.",
        "The main square is one of the most beautiful in Slovakia.",
        "Many Gothic and Renaissance buildings have survived.",
        "Bardejov lies close to the Polish border."
      ]
    },
    image: "/geo-images/slovakia/cult-bardejov.webp"
  }
];

export const slovakiaNature: POI[] = [
  {
    id: "nat-high-tatras",
    type: "mountain",
    parent: "country-slovakia",
    coords: [20.1, 49.17],
    name: { de: "Hohe Tatra", hu: "Magas-Tátra", ro: "Munții Tatra Mare", en: "High Tatras" },
    description: {
      de: "Die Hohe Tatra ist das kleinste Hochgebirge der Welt und das alpine Herz der Slowakei.",
      hu: "A Magas-Tátra a világ legkisebb magashegysége és Szlovákia alpesi szíve.",
      ro: "Munții Tatra Mare sunt cea mai mică zonă montană înaltă din lume și inima alpină a Slovaciei.",
      en: "The High Tatras are the smallest high mountain range in the world and the alpine heart of Slovakia."
    },
    facts: {
      de: [
        "Der Gerlachovský štít ist mit 2655 Metern der höchste Berg des Landes.",
        "Die Region gehört zu den bekanntesten Wandergebieten der Slowakei.",
        "Die Hohe Tatra ist Teil der Karpaten.",
        "Sie ist ein Symbol des slowakischen Naturerbes."
      ],
      hu: [
        "A Gerlachovský štít 2655 méterrel Szlovákia legmagasabb pontja.",
        "A térség az ország egyik legismertebb túrahelye.",
        "A Magas-Tátra a Kárpátok része.",
        "A szlovák természeti örökség fontos szimbóluma."
      ],
      ro: [
        "Gerlachovský štít este cel mai înalt vârf din Slovacia, cu 2655 m.",
        "Regiunea este una dintre cele mai cunoscute zone de drumeție din țară.",
        "Tatra Mare face parte din Carpați.",
        "Este un simbol important al patrimoniului natural slovac."
      ],
      en: [
        "Gerlachovský štít is the highest peak in Slovakia at 2655 meters.",
        "The region is one of the country's best-known hiking areas.",
        "The High Tatras are part of the Carpathians.",
        "They are an important symbol of Slovak natural heritage."
      ]
    },
    image: "/geo-images/slovakia/nat-high-tatras.webp"
  },
  {
    id: "nat-slovensky-raj",
    type: "forest",
    parent: "country-slovakia",
    coords: [20.42, 48.92],
    name: { de: "Slowakisches Paradies", hu: "Szlovák Paradicsom NP", ro: "Parcul Național Slovak Paradise", en: "Slovak Paradise National Park" },
    description: {
      de: "Das Slowakische Paradies ist ein Nationalpark voller Schluchten, Wasserfälle und Leitern.",
      hu: "A Szlovák Paradicsom szurdokokkal, vízesésekkel és létrákkal teli nemzeti park.",
      ro: "Parcul Național Slovak Paradise este plin de chei, cascade și scări.",
      en: "Slovak Paradise is a national park full of gorges, waterfalls, and ladders."
    },
    facts: {
      de: [
        "Der Park ist für Schluchten und Leiternetzwerke bekannt.",
        "Es gibt zahlreiche Wasserfälle und enge Canyons.",
        "Die Region ist ein beliebtes Ziel für aktive Wanderer.",
        "Der Nationalpark schützt eine abwechslungsreiche Karstlandschaft."
      ],
      hu: [
        "A park szurdokjairól és létrás útvonalairól híres.",
        "Számos vízesés és szűk kanyon található itt.",
        "Népszerű célpont az aktív túrázók körében.",
        "A nemzeti park változatos karsztvidéket véd."
      ],
      ro: [
        "Parcul este cunoscut pentru chei și rețelele de scări.",
        "Aici se găsesc numeroase cascade și canioane înguste.",
        "Este o destinație populară pentru drumeții activi.",
        "Parcul național protejează un peisaj carstic variat."
      ],
      en: [
        "The park is known for its gorges and ladder networks.",
        "It has numerous waterfalls and narrow canyons.",
        "It is a popular destination for active hikers.",
        "The national park protects a varied karst landscape."
      ]
    },
    image: "/geo-images/slovakia/nat-slovensky-raj.webp"
  },
  {
    id: "nat-pieniny",
    type: "mountain",
    parent: "country-slovakia",
    coords: [20.4, 49.4],
    name: { de: "Pieninen", hu: "Pieniny NP", ro: "Parcul Național Pieniny", en: "Pieniny National Park" },
    description: {
      de: "Die Pieninen sind ein grenzüberschreitendes Naturgebiet mit dem malerischen Dunajec-Tal.",
      hu: "A Pieninek határon átnyúló természeti térség a festői Dunajec-völggyel.",
      ro: "Pieniny este o zonă naturală transfrontalieră cu pitoreasca vale a Dunajecului.",
      en: "Pieniny is a cross-border natural area with the scenic Dunajec Valley."
    },
    facts: {
      de: [
        "Der Dunajec bildet hier eine berühmte Flusslandschaft.",
        "Tutajfahrten gehören zu den bekanntesten Erlebnissen der Region.",
        "Die Kalksteinfelsen prägen die Landschaft deutlich.",
        "Das Gebiet liegt an der Grenze zu Polen."
      ],
      hu: [
        "Itt a Dunajec híres folyóvölgyet alakít ki.",
        "A tutajozás a térség egyik legismertebb élménye.",
        "A mészkősziklák erősen meghatározzák a tájat.",
        "A terület a lengyel határ mentén fekszik."
      ],
      ro: [
        "Dunajecul formează aici un peisaj fluvial faimos.",
        "Plimbările cu pluta sunt una dintre cele mai cunoscute activități.",
        "Stâncile de calcar definesc clar peisajul.",
        "Zona se află la granița cu Polonia."
      ],
      en: [
        "The Dunajec creates a famous river landscape here.",
        "Rafting is one of the region's best-known experiences.",
        "The limestone cliffs strongly shape the scenery.",
        "The area lies on the border with Poland."
      ]
    },
    image: "/geo-images/slovakia/nat-pieniny.webp"
  },
  {
    id: "nat-domica",
    type: "landmark",
    parent: "country-slovakia",
    coords: [20.45, 48.48],
    name: { de: "Domica-Höhle", hu: "Domica-barlang", ro: "Peștera Domica", en: "Domica Cave" },
    description: {
      de: "Die Domica-Höhle ist Teil des UNESCO-geschützten Höhlensystems Aggtelek-Domica.",
      hu: "A Domica-barlang az UNESCO által védett Aggtelek-Domica barlangrendszer része.",
      ro: "Peștera Domica face parte din sistemul de peșteri protejat de UNESCO Aggtelek-Domica.",
      en: "Domica Cave is part of the UNESCO-protected Aggtelek-Domica cave system."
    },
    facts: {
      de: [
        "Die Höhle gehört zum UNESCO-Welterbe Aggtelek-Domica.",
        "Sie ist Teil eines grenzüberschreitenden Karstsystems.",
        "Die unterirdischen Räume sind reich an Tropfsteinen.",
        "Die Höhle liegt im Südosten der Slowakei."
      ],
      hu: [
        "A barlang az Aggtelek-Domica UNESCO világörökség része.",
        "Egy határon átnyúló karsztrendszer része.",
        "A föld alatti termek gazdagok cseppkövekben.",
        "A barlang Szlovákia délkeleti részén található."
      ],
      ro: [
        "Peștera face parte din patrimoniul UNESCO Aggtelek-Domica.",
        "Este parte a unui sistem carstic transfrontalier.",
        "Sălile subterane sunt bogate în stalactite și stalagmite.",
        "Peștera se află în sud-estul Slovaciei."
      ],
      en: [
        "The cave is part of the UNESCO Aggtelek-Domica World Heritage site.",
        "It belongs to a cross-border karst system.",
        "Its underground chambers are rich in dripstone formations.",
        "The cave is located in southeastern Slovakia."
      ]
    },
    image: "/geo-images/slovakia/nat-domica.webp"
  },
  {
    id: "nat-ochtinska",
    type: "landmark",
    parent: "country-slovakia",
    coords: [20.29, 48.69],
    name: { de: "Ochtina-Aragonithöhle", hu: "Ochtinai aragonit-barlang", ro: "Peștera de aragonit Ochtina", en: "Ochtinska Aragonite Cave" },
    description: {
      de: "Die Ochtina-Aragonithöhle ist weltweit für ihre seltenen Aragonitkristalle berühmt.",
      hu: "Az Ochtinai aragonit-barlang ritka aragonitkristályairól világhírű.",
      ro: "Peștera de aragonit Ochtina este faimoasă în lume pentru cristalele sale rare de aragonit.",
      en: "The Ochtinska Aragonite Cave is world-famous for its rare aragonite crystals."
    },
    facts: {
      de: [
        "Die Höhle ist UNESCO-Welterbe.",
        "Sie ist weltweit für Aragonitkristalle bekannt.",
        "Aragonit ist in Höhlen sehr selten.",
        "Die Höhle liegt in der Mittelslowakei."
      ],
      hu: [
        "A barlang UNESCO Világörökség.",
        "Világszerte híres az aragonitkristályairól.",
        "Az aragonit barlangokban rendkívül ritka.",
        "A barlang Közép-Szlovákiában található."
      ],
      ro: [
        "Peștera este sit UNESCO.",
        "Este cunoscută în întreaga lume pentru cristalele de aragonit.",
        "Aragonitul este extrem de rar în peșteri.",
        "Peștera se află în Slovacia centrală."
      ],
      en: [
        "The cave is a UNESCO World Heritage site.",
        "It is known worldwide for its aragonite crystals.",
        "Aragonite is extremely rare in caves.",
        "The cave is located in central Slovakia."
      ]
    },
    image: "/geo-images/slovakia/nat-ochtinska.webp"
  }
];

export const slovakiaAllPoi: POI[] = [
  slovakiaCountry,
  ...slovakiaRegions,
  ...slovakiaCities,
  ...slovakiaCulture,
  ...slovakiaNature
];
