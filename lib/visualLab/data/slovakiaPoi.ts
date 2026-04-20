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

export const slovakiaAllPoi: POI[] = [
  slovakiaCountry,
  ...slovakiaRegions
];
