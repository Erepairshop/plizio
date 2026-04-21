import type { POI } from "./poi";

export const czechRepublicCountry: POI = {
  id: "country-czech-republic",
  type: "country",
  parent: "europe",
  coords: [15.4730, 49.8175],
  name: {
    de: "Tschechien",
    hu: "Csehország",
    ro: "Cehia",
    en: "Czech Republic"
  },
  description: {
    de: "Tschechien ist ein Binnenstaat in Mitteleuropa, bekannt für seine reiche Geschichte, Architektur und Bierkultur. Die Hauptstadt Prag ist eine der meistbesuchten Städte Europas. Das Land hat viele Burgen und Schlösser.",
    hu: "Csehország egy közép-európai ország, amely gazdag történelméről, építészetéről és sörkultúrájáról ismert. Fővárosa, Prága Európa egyik leglátogatottabb városa. Az ország számos várral és kastéllyal rendelkezik.",
    ro: "Cehia este o țară fără ieșire la mare din Europa Centrală, cunoscută pentru istoria sa bogată, arhitectura și cultura berii. Capitala Praga este unul dintre cele mai vizitate orașe din Europa. Țara are multe castele și palate.",
    en: "The Czech Republic is a landlocked country in Central Europe, known for its rich history, architecture, and beer culture. The capital Prague is one of the most visited cities in Europe. The country has many castles and chateaux."
  },
  facts: {
    de: [
      "Tschechien hat den höchsten Bierkonsum pro Kopf weltweit.",
      "Prag wird oft als 'Stadt der hundert Türme' bezeichnet.",
      "Das Land ist bekannt für böhmisches Kristallglas.",
      "Es gibt 16 UNESCO-Welterbestätten in Tschechien."
    ],
    hu: [
      "Csehországban a legmagasabb az egy főre jutó sörfogyasztás a világon.",
      "Prágát gyakran a 'száz torony városának' nevezik.",
      "Az ország híres a cseh kristályüvegről.",
      "Csehországban 16 UNESCO Világörökségi helyszín található."
    ],
    ro: [
      "Cehia are cel mai mare consum de bere pe cap de locuitor din lume.",
      "Praga este adesea numită 'Orașul celor o sută de turle'.",
      "Țara este cunoscută pentru sticla de cristal de Boemia.",
      "Există 16 situri ale Patrimoniului Mondial UNESCO în Cehia."
    ],
    en: [
      "The Czech Republic has the highest beer consumption per capita in the world.",
      "Prague is often called the 'City of a Hundred Spires'.",
      "The country is known for Bohemian crystal glass.",
      "There are 16 UNESCO World Heritage sites in the Czech Republic."
    ]
  },
  image: "/geo-images/czech-republic/country-czech-republic.webp"
};

export const czechRepublicRegions: POI[] = [
  {
    id: "city-prague",
    type: "city",
    parent: "country-czech-republic",
    coords: [14.4378, 50.0755],
    name: {
      de: "Prag",
      hu: "Prága",
      ro: "Praga",
      en: "Prague"
    },
    description: {
      de: "Prag ist die Hauptstadt und größte Stadt Tschechiens. Sie wird durch die Moldau geteilt und ist berühmt für ihren Altstädter Ring, die astronomische Uhr und die Karlsbrücke. Die Prager Burg thront über der Stadt.",
      hu: "Prága Csehország fővárosa és legnagyobb városa. A Moldva folyó szeli ketté, és híres az Óvárosi térről, az Orloj csillagászati óráról és a Károly-hídról. A prágai vár a város fölé magasodik.",
      ro: "Praga este capitala și cel mai mare oraș al Cehiei. Este împărțită de râul Vltava și este renumită pentru Piața Orașului Vechi, ceasul astronomic și Podul Carol. Castelul Praga domină orașul.",
      en: "Prague is the capital and largest city of the Czech Republic. It is bisected by the Vltava River and is famous for its Old Town Square, the astronomical clock, and the Charles Bridge. Prague Castle towers over the city."
    },
    facts: {
      de: [
        "Die Prager Burg ist das größte geschlossene Burgareal der Welt.",
        "Die Karlsbrücke wurde im 14. Jahrhundert erbaut.",
        "Die astronomische Uhr (Orloj) stammt aus dem Jahr 1410.",
        "Prag hat eine der ältesten Universitäten Mitteleuropas (Karls-Universität)."
      ],
      hu: [
        "A prágai vár a világ legnagyobb egybefüggő várkomplexuma.",
        "A Károly-hidat a 14. században építették.",
        "Az Orloj csillagászati óra 1410-ből származik.",
        "Prágában található Közép-Európa egyik legrégebbi egyeteme (Károly Egyetem)."
      ],
      ro: [
        "Castelul Praga este cel mai mare complex de castele antice din lume.",
        "Podul Carol a fost construit în secolul al XIV-lea.",
        "Ceasul astronomic (Orloj) datează din 1410.",
        "Praga are una dintre cele mai vechi universități din Europa Centrală (Universitatea Carolină)."
      ],
      en: [
        "Prague Castle is the largest ancient castle complex in the world.",
        "The Charles Bridge was built in the 14th century.",
        "The astronomical clock (Orloj) dates back to 1410.",
        "Prague has one of the oldest universities in Central Europe (Charles University)."
      ]
    },
    image: "/geo-images/czech-republic/city-prague.webp"
  },
  {
    id: "city-brno",
    type: "city",
    parent: "country-czech-republic",
    coords: [16.6068, 49.1951],
    name: {
      de: "Brünn",
      hu: "Brno",
      ro: "Brno",
      en: "Brno"
    },
    description: {
      de: "Brünn ist die zweitgrößte Stadt Tschechiens und das historische Zentrum Mährens. Sie ist bekannt für ihre modernistische Architektur, insbesondere die Villa Tugendhat. Die Festung Špilberk überblickt die Stadt.",
      hu: "Brno Csehország második legnagyobb városa és Morvaország történelmi központja. Modernista építészetéről ismert, különösen a Tugendhat-villáról. A Špilberk erőd a város fölé magasodik.",
      ro: "Brno este al doilea oraș ca mărime din Cehia și centrul istoric al Moraviei. Este cunoscut pentru arhitectura sa modernistă, în special Vila Tugendhat. Cetatea Špilberk domină orașul.",
      en: "Brno is the second-largest city in the Czech Republic and the historical center of Moravia. It is known for its modernist architecture, especially the Villa Tugendhat. The Špilberk Castle overlooks the city."
    },
    facts: {
      de: [
        "Die Villa Tugendhat ist ein UNESCO-Welterbe.",
        "Brünn ist ein wichtiges Zentrum für Universitäten und Forschung.",
        "Die Festung Špilberk war einst ein berüchtigtes Gefängnis.",
        "Das Brünner Drachen-Symbol ist eigentlich ein Krokodil."
      ],
      hu: [
        "A Tugendhat-villa az UNESCO Világörökség része.",
        "Brno az egyetemek és a kutatás fontos központja.",
        "A Špilberk erőd egykor hírhedt börtön volt.",
        "A brnói sárkány szimbóluma valójában egy krokodil."
      ],
      ro: [
        "Vila Tugendhat este un sit al Patrimoniului Mondial UNESCO.",
        "Brno este un centru important pentru universități și cercetare.",
        "Cetatea Špilberk a fost odată o închisoare notorie.",
        "Simbolul dragonului din Brno este de fapt un crocodil."
      ],
      en: [
        "The Villa Tugendhat is a UNESCO World Heritage site.",
        "Brno is a major center for universities and research.",
        "Špilberk Castle was once a notorious prison.",
        "The Brno dragon symbol is actually a crocodile."
      ]
    },
    image: "/geo-images/czech-republic/city-brno.webp"
  },
  {
    id: "city-plzen",
    type: "city",
    parent: "country-czech-republic",
    coords: [13.3776, 49.7384],
    name: {
      de: "Pilsen",
      hu: "Plzeň",
      ro: "Plzeň",
      en: "Plzen"
    },
    description: {
      de: "Pilsen ist eine Stadt in Westböhmen, die weltweit für das Pilsner Bier bekannt ist. Die Brauerei Pilsner Urquell wurde hier 1842 gegründet. Die Stadt hat auch eine beeindruckende Synagoge und Kathedrale.",
      hu: "Plzeň egy nyugat-csehországi város, amely világszerte ismert a pilseni sörről. A Pilsner Urquell sörfőzdét itt alapították 1842-ben. A város lenyűgöző zsinagógával és katedrálissal is rendelkezik.",
      ro: "Plzeň este un oraș din vestul Boemiei, cunoscut în întreaga lume pentru berea Pilsner. Fabrica de bere Pilsner Urquell a fost fondată aici în 1842. Orașul are, de asemenea, o sinagogă și o catedrală impresionante.",
      en: "Plzen is a city in western Bohemia, known worldwide for Pilsner beer. The Pilsner Urquell brewery was founded here in 1842. The city also has an impressive synagogue and cathedral."
    },
    facts: {
      de: [
        "Das erste Pilsner Bier wurde 1842 gebraut.",
        "Die Große Synagoge in Pilsen ist die drittgrößte der Welt.",
        "Die St.-Bartholomäus-Kathedrale hat den höchsten Kirchturm Tschechiens.",
        "Pilsen war 2015 Kulturhauptstadt Europas."
      ],
      hu: [
        "Az első pilseni sört 1842-ben főzték.",
        "A plzeňi Nagy Zsinagóga a harmadik legnagyobb a világon.",
        "A Szent Bertalan-katedrálisnak van Csehország legmagasabb templomtornya.",
        "Plzeň 2015-ben Európa Kulturális Fővárosa volt."
      ],
      ro: [
        "Prima bere Pilsner a fost preparată în 1842.",
        "Marea Sinagogă din Plzeň este a treia ca mărime din lume.",
        "Catedrala Sf. Bartolomeu are cel mai înalt turn de biserică din Cehia.",
        "Plzeň a fost Capitală Europeană a Culturii în 2015."
      ],
      en: [
        "The first Pilsner beer was brewed in 1842.",
        "The Great Synagogue in Plzen is the third largest in the world.",
        "St. Bartholomew's Cathedral has the tallest church tower in the Czech Republic.",
        "Plzen was the European Capital of Culture in 2015."
      ]
    },
    image: "/geo-images/czech-republic/city-plzen.webp"
  },
  {
    id: "city-cesky-krumlov",
    type: "city",
    parent: "country-czech-republic",
    coords: [14.3140, 48.8127],
    name: {
      de: "Krumau",
      hu: "Český Krumlov",
      ro: "Český Krumlov",
      en: "Český Krumlov"
    },
    description: {
      de: "Český Krumlov ist eine Stadt in Südböhmen, die für ihr historisches Zentrum und ihr Schloss bekannt ist. Die Altstadt ist ein UNESCO-Welterbe und wird von einer Schleife der Moldau umschlossen.",
      hu: "Český Krumlov egy dél-csehországi város, amely történelmi központjáról és kastélyáról ismert. Az óváros az UNESCO Világörökség része, és a Moldva folyó kanyarulata öleli körül.",
      ro: "Český Krumlov este un oraș din sudul Boemiei, cunoscut pentru centrul său istoric și castelul său. Orașul vechi este un sit al Patrimoniului Mondial UNESCO și este înconjurat de o buclă a râului Vltava.",
      en: "Český Krumlov is a city in the South Bohemia region, known for its historic center and castle. The Old Town is a UNESCO World Heritage site and is enclosed by a meander of the Vltava River."
    },
    facts: {
      de: [
        "Das Schloss Český Krumlov ist das zweitgrößte in Tschechien.",
        "Die Stadt hat ein einzigartiges barockes Schlosstheater.",
        "Das historische Zentrum ist seit 1992 UNESCO-Welterbe.",
        "Im Schlossgraben werden seit dem 16. Jahrhundert Bären gehalten."
      ],
      hu: [
        "A Český Krumlov-i kastély a második legnagyobb Csehországban.",
        "A város egyedülálló barokk kastélyszínházzal rendelkezik.",
        "A történelmi központ 1992 óta az UNESCO Világörökség része.",
        "A várárokban a 16. század óta tartanak medvéket."
      ],
      ro: [
        "Castelul Český Krumlov este al doilea ca mărime din Cehia.",
        "Orașul are un teatru de castel baroc unic.",
        "Centrul istoric este un sit al Patrimoniului Mondial UNESCO din 1992.",
        "Urșii au fost ținuți în șanțul castelului încă din secolul al XVI-lea."
      ],
      en: [
        "Český Krumlov Castle is the second largest in the Czech Republic.",
        "The city has a unique Baroque castle theater.",
        "The historic center has been a UNESCO World Heritage site since 1992.",
        "Bears have been kept in the castle moat since the 16th century."
      ]
    },
    image: "/geo-images/czech-republic/city-cesky-krumlov.webp"
  },
  {
    id: "city-karlovy-vary",
    type: "city",
    parent: "country-czech-republic",
    coords: [12.8712, 50.2319],
    name: {
      de: "Karlsbad",
      hu: "Karlovy Vary",
      ro: "Karlovy Vary",
      en: "Karlovy Vary"
    },
    description: {
      de: "Karlovy Vary (Karlsbad) ist ein berühmter Kurort in Westböhmen. Die Stadt ist bekannt für ihre heißen Quellen, die farbenfrohe Architektur und das jährliche internationale Filmfestival. Sie gehört zu den 'Great Spa Towns of Europe'.",
      hu: "Karlovy Vary (Karlsbad) egy híres fürdőváros Nyugat-Csehországban. A város hőforrásairól, színes építészetéről és az évente megrendezett nemzetközi filmfesztiválról ismert. Az 'Európa nagy fürdővárosai' közé tartozik.",
      ro: "Karlovy Vary (Karlsbad) este un oraș balnear renumit din vestul Boemiei. Orașul este cunoscut pentru izvoarele sale termale, arhitectura colorată și festivalul internațional de film anual. Face parte din 'Marile orașe balneare ale Europei'.",
      en: "Karlovy Vary (Carlsbad) is a famous spa town in western Bohemia. The city is known for its hot springs, colorful architecture, and the annual international film festival. It is part of the 'Great Spa Towns of Europe'."
    },
    facts: {
      de: [
        "Die Stadt hat 13 Hauptquellen und Hunderte kleinere Quellen.",
        "Der Kräuterlikör Becherovka stammt aus Karlovy Vary.",
        "Das Karlovy Vary International Film Festival ist eines der ältesten der Welt.",
        "Die Stadt wurde im 14. Jahrhundert von Karl IV. gegründet."
      ],
      hu: [
        "A városnak 13 fő forrása és több száz kisebb forrása van.",
        "A Becherovka gyógynövénylikőr Karlovy Varyból származik.",
        "A Karlovy Vary Nemzetközi Filmfesztivál a világ egyik legrégebbi filmfesztiválja.",
        "A várost a 14. században alapította IV. Károly."
      ],
      ro: [
        "Orașul are 13 izvoare principale și sute de izvoare mai mici.",
        "Lichiorul de plante Becherovka provine din Karlovy Vary.",
        "Festivalul Internațional de Film de la Karlovy Vary este unul dintre cele mai vechi din lume.",
        "Orașul a fost fondat în secolul al XIV-lea de Carol al IV-lea."
      ],
      en: [
        "The city has 13 main springs and hundreds of smaller ones.",
        "The herbal liqueur Becherovka originates from Karlovy Vary.",
        "The Karlovy Vary International Film Festival is one of the oldest in the world.",
        "The city was founded in the 14th century by Charles IV."
      ]
    },
    image: "/geo-images/czech-republic/city-karlovy-vary.webp"
  },
  {
    id: "city-kutna-hora",
    type: "city",
    parent: "country-czech-republic",
    coords: [15.2681, 49.9484],
    name: {
      de: "Kuttenberg",
      hu: "Kutná Hora",
      ro: "Kutná Hora",
      en: "Kutná Hora"
    },
    description: {
      de: "Kutná Hora ist eine historische Stadt östlich von Prag. Sie wurde durch den Silberbergbau reich und war einst die zweitwichtigste Stadt Böhmens. Das historische Zentrum und die Barbarakirche sind UNESCO-Welterbe.",
      hu: "Kutná Hora egy történelmi város Prágától keletre. Az ezüstbányászat révén gazdagodott meg, és egykor Csehország második legfontosabb városa volt. A történelmi központ és a Szent Borbála-templom az UNESCO Világörökség része.",
      ro: "Kutná Hora este un oraș istoric la est de Praga. A devenit bogat prin mineritul de argint și a fost odată al doilea cel mai important oraș din Boemia. Centrul istoric și Biserica Sf. Barbara sunt situri ale Patrimoniului Mondial UNESCO.",
      en: "Kutná Hora is a historic town east of Prague. It grew rich through silver mining and was once the second most important city in Bohemia. The historic center and St. Barbara's Church are UNESCO World Heritage sites."
    },
    facts: {
      de: [
        "Das Sedletz-Ossarium (Knochenkirche) ist mit menschlichen Knochen dekoriert.",
        "Die Barbarakirche ist ein Meisterwerk der Spätgotik.",
        "Der Prager Groschen wurde hier geprägt.",
        "Die Stadt konkurrierte im Mittelalter wirtschaftlich mit Prag."
      ],
      hu: [
        "A sedleci osszárium (csontkápolna) emberi csontokkal van díszítve.",
        "A Szent Borbála-templom a késő gótika remekműve.",
        "A prágai garast itt verték.",
        "A város a középkorban gazdaságilag versenyzett Prágával."
      ],
      ro: [
        "Osuarul Sedlec (Biserica de oase) este decorat cu oase umane.",
        "Biserica Sf. Barbara este o capodoperă a goticului târziu.",
        "Groșul de Praga a fost bătut aici.",
        "Orașul a concurat economic cu Praga în Evul Mediu."
      ],
      en: [
        "The Sedlec Ossuary (Bone Church) is decorated with human bones.",
        "St. Barbara's Church is a masterpiece of late Gothic architecture.",
        "The Prague groschen was minted here.",
        "The city competed economically with Prague in the Middle Ages."
      ]
    },
    image: "/geo-images/czech-republic/city-kutna-hora.webp"
  },
  {
    id: "nature-sumava",
    type: "nature",
    parent: "country-czech-republic",
    coords: [13.8167, 48.9833],
    name: {
      de: "Böhmerwald",
      hu: "Šumava",
      ro: "Šumava",
      en: "Šumava"
    },
    description: {
      de: "Der Nationalpark Šumava (Böhmerwald) liegt im Südwesten Tschechiens an der Grenze zu Deutschland und Österreich. Er ist das größte zusammenhängende Waldgebiet Mitteleuropas und schützt Moore, Gletscherseen und Urwälder.",
      hu: "A Šumava Nemzeti Park Csehország délnyugati részén, a német és osztrák határon fekszik. Közép-Európa legnagyobb egybefüggő erdőterülete, amely lápokat, gleccsertavakat és őserdőket véd.",
      ro: "Parcul Național Šumava este situat în sud-vestul Cehiei, la granița cu Germania și Austria. Este cea mai mare zonă forestieră contiguă din Europa Centrală și protejează mlaștini, lacuri glaciare și păduri primare.",
      en: "The Šumava National Park is located in the southwest of the Czech Republic on the border with Germany and Austria. It is the largest contiguous forest area in Central Europe and protects bogs, glacial lakes, and primeval forests."
    },
    facts: {
      de: [
        "Šumava ist der größte Nationalpark in Tschechien.",
        "Die Moldau, der längste Fluss Tschechiens, entspringt hier.",
        "Zusammen mit dem Bayerischen Wald bildet er das 'Grüne Dach Europas'.",
        "Der Park ist ein wichtiges Rückzugsgebiet für Luchse."
      ],
      hu: [
        "A Šumava Csehország legnagyobb nemzeti parkja.",
        "A Moldva, Csehország leghosszabb folyója itt ered.",
        "A Bajor-erdővel együtt alkotja 'Európa zöld tetejét'.",
        "A park fontos menedékhely a hiúzok számára."
      ],
      ro: [
        "Šumava este cel mai mare parc național din Cehia.",
        "Râul Vltava, cel mai lung râu din Cehia, izvorăște aici.",
        "Împreună cu Pădurea Bavareză, formează 'Acoperișul Verde al Europei'.",
        "Parcul este un refugiu important pentru râși."
      ],
      en: [
        "Šumava is the largest national park in the Czech Republic.",
        "The Vltava, the longest river in the Czech Republic, rises here.",
        "Together with the Bavarian Forest, it forms the 'Green Roof of Europe'.",
        "The park is an important refuge for lynxes."
      ]
    },
    image: "/geo-images/czech-republic/nature-sumava.webp"
  }
];

export const czechRepublicCities: POI[] = [
  {
    id: "city-prague",
    type: "city",
    parent: "country-czech-republic",
    coords: [14.4378, 50.0755],
    name: {
      de: "Prag",
      hu: "Prága",
      ro: "Praga",
      en: "Prague"
    },
    description: {
      de: "Prag ist die Hauptstadt Tschechiens und bekannt für ihre Altstadt, die Karlsbrücke und die Prager Burg. Das historische Zentrum prägt das Bild einer der bedeutendsten Städte Mitteleuropas.",
      hu: "Prága Csehország fővárosa, híres óvárosáról, a Károly-hídról és a prágai várról. Történelmi központja Közép-Európa egyik legfontosabb városképét adja.",
      ro: "Praga este capitala Cehiei și este cunoscută pentru centrul său vechi, Podul Carol și Castelul Praga. Centrul istoric definește una dintre cele mai importante destinații din Europa Centrală.",
      en: "Prague is the capital of the Czech Republic and is known for its Old Town, Charles Bridge, and Prague Castle. Its historic center defines one of Central Europe's most important cityscapes."
    },
    facts: {
      de: [
        "Prag ist die Hauptstadt und größte Stadt Tschechiens.",
        "Die Karlsbrücke und die Altstadt gehören zu den bekanntesten Sehenswürdigkeiten.",
        "Die Prager Burg ist ein riesiger Burgkomplex über der Moldau.",
        "Die Stadt ist ein Kernziel des UNESCO-Welterbes in Mitteleuropa."
      ],
      hu: [
        "Prága Csehország fővárosa és legnagyobb városa.",
        "A Károly-híd és az óváros a legismertebb látnivalók közé tartozik.",
        "A prágai vár egy hatalmas várkomplexum a Moldva fölött.",
        "A város Közép-Európa egyik kiemelt UNESCO-örökségi helyszíne."
      ],
      ro: [
        "Praga este capitala și cel mai mare oraș al Cehiei.",
        "Podul Carol și centrul vechi sunt printre cele mai cunoscute obiective.",
        "Castelul Praga este un complex uriaș deasupra râului Vltava.",
        "Orașul este un reper major al patrimoniului UNESCO din Europa Centrală."
      ],
      en: [
        "Prague is the capital and largest city of the Czech Republic.",
        "Charles Bridge and the Old Town are among its best-known sights.",
        "Prague Castle is a vast complex above the Vltava River.",
        "The city is a major UNESCO heritage anchor in Central Europe."
      ]
    },
    image: "/geo-images/czechRepublic/city-prague.webp"
  }
];

export const czechRepublicCulture: POI[] = [
  {
    id: "cult-charles-bridge",
    type: "culture",
    parent: "country-czech-republic",
    coords: [14.4114, 50.0865],
    name: {
      de: "Karlsbrücke",
      hu: "Károly-híd Prága",
      ro: "Podul Carol",
      en: "Charles Bridge"
    },
    description: {
      de: "Die Karlsbrücke ist die berühmte gotische Steinbrücke über die Moldau in Prag. Sie wurde 1357 begonnen und ist mit ihren Skulpturen eines der Wahrzeichen der Stadt.",
      hu: "A Károly-híd Prága híres gótikus kőhídja a Moldva felett. 1357-ben kezdték építeni, és szobraival a város egyik jelképe.",
      ro: "Podul Carol este faimosul pod gotic de piatră peste Vltava, în Praga. A fost început în 1357 și, cu statuile sale, este unul dintre simbolurile orașului.",
      en: "Charles Bridge is the famous Gothic stone bridge over the Vltava in Prague. Construction began in 1357, and its statues make it one of the city's symbols."
    },
    facts: {
      de: [
        "Der Bau begann 1357 unter Karl IV.",
        "Die Brücke ist mit einer langen Reihe von Statuen geschmückt.",
        "Sie verbindet die Altstadt mit der Kleinseite.",
        "Die Karlsbrücke ist eines der meistfotografierten Bauwerke Tschechiens."
      ],
      hu: [
        "Az építést 1357-ben IV. Károly alatt kezdték el.",
        "A hidat szobrok hosszú sora díszíti.",
        "Az óvárost köti össze a Kisoldallal.",
        "A Károly-híd Csehország egyik legtöbbet fotózott építménye."
      ],
      ro: [
        "Construcția a început în 1357, sub Carol al IV-lea.",
        "Podul este decorat cu o lungă serie de statui.",
        "Leagă Orașul Vechi de Malá Strana.",
        "Podul Carol este una dintre cele mai fotografiate construcții din Cehia."
      ],
      en: [
        "Construction began in 1357 under Charles IV.",
        "The bridge is decorated with a long row of statues.",
        "It connects the Old Town with the Lesser Town.",
        "Charles Bridge is one of the most photographed structures in the Czech Republic."
      ]
    },
    image: "/geo-images/czechRepublic/cult-charles-bridge.webp"
  },
  {
    id: "cult-prague-castle",
    type: "culture",
    parent: "country-czech-republic",
    coords: [14.4010, 50.0903],
    name: {
      de: "Prager Burg",
      hu: "Hradzsin",
      ro: "Castelul Praga",
      en: "Prague Castle"
    },
    description: {
      de: "Die Prager Burg ist ein riesiger Burgkomplex über der Moldau und das symbolische Zentrum des Landes. Der Komplex umfasst Paläste, Kirchen, Höfe und Gärten.",
      hu: "A Hradzsin egy hatalmas várkomplexum a Moldva fölött, és az ország szimbolikus központja. A komplexum palotákat, templomokat, udvarokat és kerteket foglal magában.",
      ro: "Castelul Praga este un complex uriaș deasupra Vltavei și centrul simbolic al țării. Complexul include palate, biserici, curți și grădini.",
      en: "Prague Castle is a vast complex above the Vltava and the symbolic center of the country. The complex includes palaces, churches, courtyards, and gardens."
    },
    facts: {
      de: [
        "Es gilt als der größte antike Burgkomplex der Welt.",
        "Die Burg ist seit Jahrhunderten Sitz der böhmischen Herrschaft.",
        "Der Veitsdom gehört zu den wichtigsten Teilen des Areals.",
        "Heute ist die Anlage Amtssitz des Präsidenten."
      ],
      hu: [
        "A világ legnagyobb ókori várkomplexumaként tartják számon.",
        "A vár évszázadok óta a cseh államiság központja.",
        "A Szent Vitus-székesegyház a terület egyik legfontosabb része.",
        "Ma az államelnök hivatali székhelye."
      ],
      ro: [
        "Este considerat cel mai mare complex de castel antic din lume.",
        "Castelul a fost timp de secole sediul puterii boeme.",
        "Catedrala Sf. Vitus este una dintre cele mai importante părți ale ansamblului.",
        "Astăzi găzduiește sediul oficial al președintelui."
      ],
      en: [
        "It is regarded as the largest ancient castle complex in the world.",
        "The castle has been the seat of Bohemian power for centuries.",
        "St. Vitus Cathedral is one of the most important parts of the site.",
        "Today it serves as the official workplace of the president."
      ]
    },
    image: "/geo-images/czechRepublic/cult-prague-castle.webp"
  },
  {
    id: "cult-cesky-krumlov",
    type: "culture",
    parent: "country-czech-republic",
    coords: [14.3158, 48.8129],
    name: {
      de: "Böhmisch Krumau",
      hu: "Český Krumlov",
      ro: "Český Krumlov",
      en: "Český Krumlov"
    },
    description: {
      de: "Český Krumlov ist eine malerische Renaissance-Stadt in Südböhmen. Ihr historisches Zentrum und das Schloss gehören zu den bekanntesten UNESCO-Orten des Landes.",
      hu: "Český Krumlov egy festői reneszánsz város Dél-Csehországban. Történelmi központja és vára az ország legismertebb UNESCO-helyszínei közé tartozik.",
      ro: "Český Krumlov este un oraș pitoresc renascentist din sudul Boemiei. Centrul istoric și castelul său se numără printre cele mai cunoscute situri UNESCO din țară.",
      en: "Český Krumlov is a picturesque Renaissance town in South Bohemia. Its historic center and castle are among the country's best-known UNESCO sites."
    },
    facts: {
      de: [
        "Das historische Zentrum ist UNESCO-Welterbe.",
        "Das Schloss gehört zu den größten in Tschechien.",
        "Die Stadt wird von einer Moldau-Schleife umgeben.",
        "Český Krumlov ist eines der schönsten historischen Ensembles Mitteleuropas."
      ],
      hu: [
        "A történelmi központ UNESCO világörökségi helyszín.",
        "A vár Csehország egyik legnagyobbja.",
        "A várost a Moldva egy kanyarulata öleli körül.",
        "Český Krumlov Közép-Európa egyik legszebb történelmi együttese."
      ],
      ro: [
        "Centrul istoric este sit UNESCO.",
        "Castelul este unul dintre cele mai mari din Cehia.",
        "Orașul este înconjurat de un meandru al Vltavei.",
        "Český Krumlov este unul dintre cele mai frumoase ansambluri istorice din Europa Centrală."
      ],
      en: [
        "Its historic center is a UNESCO World Heritage site.",
        "The castle is among the largest in the Czech Republic.",
        "The town is surrounded by a bend of the Vltava River.",
        "Český Krumlov is one of Central Europe's finest historic ensembles."
      ]
    },
    image: "/geo-images/czechRepublic/cult-cesky-krumlov.webp"
  },
  {
    id: "cult-karlstejn",
    type: "culture",
    parent: "country-czech-republic",
    coords: [14.1883, 49.9395],
    name: {
      de: "Burg Karlstein",
      hu: "Karlštejn-vár",
      ro: "Castelul Karlštejn",
      en: "Karlštejn Castle"
    },
    description: {
      de: "Karlštejn ist eine berühmte Burg südwestlich von Prag, die unter Karl IV. errichtet wurde. Sie diente zur Aufbewahrung der Reichskleinodien und Kroninsignien.",
      hu: "Karlštejn egy híres vár Prága délnyugati részén, amelyet IV. Károly építtetett. A birodalmi ékszerek és a koronázási jelvények őrzésére szolgált.",
      ro: "Karlštejn este un castel faimos la sud-vest de Praga, construit sub Carol al IV-lea. A servit pentru păstrarea însemnelor imperiale și a regaliilor coroanei.",
      en: "Karlštejn is a famous castle southwest of Prague, built under Charles IV. It was used to safeguard the imperial jewels and crown insignia."
    },
    facts: {
      de: [
        "Die Burg wurde im 14. Jahrhundert unter Karl IV. errichtet.",
        "Sie bewahrte Reichskleinodien und Kroninsignien.",
        "Karlštejn ist eines der bekanntesten Burgenziele des Landes.",
        "Die Lage auf einem Hügel macht die Silhouette besonders markant."
      ],
      hu: [
        "A várat a 14. században IV. Károly építtette.",
        "A birodalmi ékszerek és koronázási jelvények őrzésére szolgált.",
        "Karlštejn az ország egyik legismertebb várlátványossága.",
        "A dombtetőn fekvő helyszín különösen látványossá teszi a sziluettjét."
      ],
      ro: [
        "Castelul a fost ridicat în secolul al XIV-lea sub Carol al IV-lea.",
        "A păstrat regaliile coroanei și însemnele imperiale.",
        "Karlštejn este una dintre cele mai cunoscute destinații de castel din țară.",
        "Poziția pe un deal îi face silueta foarte distinctivă."
      ],
      en: [
        "The castle was built in the 14th century under Charles IV.",
        "It was used to store imperial jewels and crown insignia.",
        "Karlštejn is one of the country's best-known castle destinations.",
        "Its hilltop setting makes its silhouette especially distinctive."
      ]
    },
    image: "/geo-images/czechRepublic/cult-karlstejn.webp"
  },
  {
    id: "cult-kutna-hora",
    type: "culture",
    parent: "country-czech-republic",
    coords: [15.2647, 49.9506],
    name: {
      de: "Kutná Hora - Sedlec",
      hu: "Kutná Hora Sedlec",
      ro: "Kutná Hora Sedlec",
      en: "Kutná Hora Sedlec"
    },
    description: {
      de: "Kutná Hora Sedlec ist mit der Knochenkapelle und dem historischen Erbe von Kutná Hora verbunden. Der Ort gehört zu den bekanntesten UNESCO-Landschaften in Böhmen.",
      hu: "Kutná Hora Sedlec a csontkápolnáról és Kutná Hora történelmi örökségéről ismert. A helyszín Csehország egyik legismertebb UNESCO-örökségi pontja.",
      ro: "Kutná Hora Sedlec este cunoscut pentru Capela Oaselor și moștenirea istorică a orașului Kutná Hora. Locul se numără printre cele mai cunoscute peisaje UNESCO din Boemia.",
      en: "Kutná Hora Sedlec is associated with the Bone Chapel and the historic heritage of Kutná Hora. The site is among the best-known UNESCO landmarks in Bohemia."
    },
    facts: {
      de: [
        "Das Sedletz-Ossarium ist als Knochenkapelle berühmt.",
        "Etwa 40.000 menschliche Knochen wurden dort kunstvoll verwendet.",
        "Kutná Hora war einst ein bedeutendes Silberbergbaustadtzentrum.",
        "Die Gegend ist ein wichtiger UNESCO- und Pilgerort."
      ],
      hu: [
        "A sedleci osszárium a híres csontkápolna.",
        "Körülbelül 40 000 emberi csontot használtak fel benne művészien.",
        "Kutná Hora egykor fontos ezüstbányászati központ volt.",
        "A helyszín fontos UNESCO- és zarándokhely."
      ],
      ro: [
        "Ossuarul de la Sedlec este faimoasa Capelă a Oaselor.",
        "Aproximativ 40.000 de oase umane au fost folosite artistic acolo.",
        "Kutná Hora a fost cândva un important centru minier de argint.",
        "Zona este un important sit UNESCO și loc de pelerinaj."
      ],
      en: [
        "The Sedlec Ossuary is the famous Bone Chapel.",
        "Around 40,000 human bones were artistically used there.",
        "Kutná Hora was once an important silver-mining center.",
        "The area is an important UNESCO and pilgrimage site."
      ]
    },
    image: "/geo-images/czechRepublic/cult-kutna-hora.webp"
  }
];

export const czechRepublicNature: POI[] = [
  {
    id: "nat-bohemian-switzerland",
    type: "nature",
    parent: "country-czech-republic",
    coords: [14.3, 50.85],
    name: {
      de: "Böhmische Schweiz NP",
      hu: "Cseh Svájc Nemzeti Park",
      ro: "Parcul Național Elveția Boemiei",
      en: "Bohemian Switzerland NP"
    },
    description: {
      de: "Der Nationalpark Böhmische Schweiz liegt im Norden des Landes und ist für seine Sandsteinfelsen und Schluchten bekannt. Die Pravčická brána ist eines seiner ikonischsten Naturdenkmäler.",
      hu: "A Cseh Svájc Nemzeti Park az ország északi részén fekszik, és homokkő szikláiról, szurdokairól ismert. A Pravčická brána a legikonikusabb természeti látványosságai közé tartozik.",
      ro: "Parcul Național Elveția Boemiei se află în nordul țării și este cunoscut pentru stâncile de gresie și cheiurile sale. Pravčická brána este unul dintre cele mai emblematice monumente naturale.",
      en: "Bohemian Switzerland National Park lies in the north of the country and is known for its sandstone cliffs and gorges. Pravčická brána is one of its most iconic natural landmarks."
    },
    facts: {
      de: [
        "Die Pravčická brána ist das größte natürliche Sandsteinbogen Europas.",
        "Der Park schützt tiefe Schluchten und markante Felsformationen.",
        "Er liegt an der Grenze zu Deutschland.",
        "Das Gebiet ist ein Magnet für Wanderer und Fotografen."
      ],
      hu: [
        "A Pravčická brána Európa legnagyobb természetes homokkő boltíve.",
        "A park mély szurdokokat és jellegzetes sziklaalakzatokat véd.",
        "Németországgal közös határvidéken fekszik.",
        "A terület a túrázók és fotósok kedvelt célpontja."
      ],
      ro: [
        "Pravčická brána este cel mai mare arc natural de gresie din Europa.",
        "Parcul protejează chei adânci și formațiuni stâncoase spectaculoase.",
        "Se află la granița cu Germania.",
        "Zona este foarte populară pentru drumeții și fotografie."
      ],
      en: [
        "Pravčická brána is Europe's largest natural sandstone arch.",
        "The park protects deep gorges and striking rock formations.",
        "It sits along the border with Germany.",
        "The area is a favorite for hikers and photographers."
      ]
    },
    image: "/geo-images/czechRepublic/nat-bohemian-switzerland.webp"
  },
  {
    id: "nat-sumava",
    type: "nature",
    parent: "country-czech-republic",
    coords: [13.5, 49.0],
    name: {
      de: "Böhmerwald NP",
      hu: "Šumava NP",
      ro: "Parcul Național Šumava",
      en: "Šumava NP"
    },
    description: {
      de: "Der Nationalpark Šumava bildet mit dem Bayerischen Wald das größte zusammenhängende Waldgebiet Mitteleuropas. Moore, Bergseen und Urwälder prägen die Landschaft.",
      hu: "A Šumava Nemzeti Park a Bajor-erdővel együtt Közép-Európa legnagyobb összefüggő erdőterületét alkotja. Lápok, hegyi tavak és őserdők jellemzik a tájat.",
      ro: "Parcul Național Šumava, împreună cu Pădurea Bavareză, formează cea mai mare zonă forestieră contiguă din Europa Centrală. Peisajul este definit de mlaștini, lacuri montane și păduri primare.",
      en: "Šumava National Park, together with the Bavarian Forest, forms the largest contiguous forest area in Central Europe. The landscape is shaped by bogs, mountain lakes, and primeval forests."
    },
    facts: {
      de: [
        "Šumava ist der größte Nationalpark Tschechiens.",
        "Die Moldau entspringt in diesem Gebirge.",
        "Zusammen mit dem Bayerischen Wald bildet er das Grüne Dach Europas.",
        "Der Park ist ein wichtiger Lebensraum für Luchse."
      ],
      hu: [
        "A Šumava Csehország legnagyobb nemzeti parkja.",
        "A Moldva itt ered.",
        "A Bajor-erdővel együtt Európa zöld tetejét alkotja.",
        "A park fontos élőhely a hiúzok számára."
      ],
      ro: [
        "Šumava este cel mai mare parc național din Cehia.",
        "Râul Vltava izvorăște aici.",
        "Împreună cu Pădurea Bavareză formează Acoperișul Verde al Europei.",
        "Parcul este un habitat important pentru râși."
      ],
      en: [
        "Šumava is the largest national park in the Czech Republic.",
        "The Vltava River rises here.",
        "Together with the Bavarian Forest it forms Europe's Green Roof.",
        "The park is an important habitat for lynx."
      ]
    },
    image: "/geo-images/czechRepublic/nat-sumava.webp"
  },
  {
    id: "nat-moravian-karst",
    type: "nature",
    parent: "country-czech-republic",
    coords: [16.75, 49.35],
    name: {
      de: "Mährischer Karst",
      hu: "Morva-karszt",
      ro: "Carstul Morav",
      en: "Moravian Karst"
    },
    description: {
      de: "Der Mährische Karst ist ein großes Karstgebiet nördlich von Brünn mit Höhlen, Schluchten und unterirdischen Flüssen. Die Punkva-Höhlen und die Macocha-Schlucht sind die bekanntesten Orte.",
      hu: "A Morva-karszt Brünn északi részén fekvő nagy karsztvidék barlangokkal, szurdokokkal és föld alatti folyókkal. A Punkva-barlangok és a Macocha-szurdok a legismertebb helyei.",
      ro: "Carstul Morav este o mare zonă carstică la nord de Brno, cu peșteri, chei și râuri subterane. Peșterile Punkva și prăpastia Macocha sunt cele mai cunoscute locuri.",
      en: "The Moravian Karst is a large karst area north of Brno with caves, gorges, and underground rivers. The Punkva Caves and the Macocha Abyss are its best-known sites."
    },
    facts: {
      de: [
        "Das Gebiet umfasst mehr als 1.100 bekannte Höhlen.",
        "Die Punkva-Höhlen gehören zu den beliebtesten Naturzielen.",
        "Die Macocha-Schlucht ist ein markantes Karsttal.",
        "Der Mährische Karst ist eines der wichtigsten Höhlensysteme des Landes."
      ],
      hu: [
        "A terület több mint 1100 ismert barlangot foglal magába.",
        "A Punkva-barlangok a legnépszerűbb természeti célpontok közé tartoznak.",
        "A Macocha-szurdok jellegzetes karszttölcsér.",
        "A Morva-karszt az ország egyik legfontosabb barlangrendszere."
      ],
      ro: [
        "Zona cuprinde peste 1.100 de peșteri cunoscute.",
        "Peșterile Punkva sunt printre cele mai populare destinații naturale.",
        "Prăpastia Macocha este o vale carstică spectaculoasă.",
        "Carstul Morav este unul dintre cele mai importante sisteme de peșteri din țară."
      ],
      en: [
        "The area includes more than 1,100 known caves.",
        "The Punkva Caves are among the most popular natural destinations.",
        "The Macocha Abyss is a striking karst chasm.",
        "The Moravian Karst is one of the country's most important cave systems."
      ]
    },
    image: "/geo-images/czechRepublic/nat-moravian-karst.webp"
  },
  {
    id: "nat-krkonose",
    type: "nature",
    parent: "country-czech-republic",
    coords: [15.7, 50.7],
    name: {
      de: "Riesengebirge",
      hu: "Krkonoše Óriás-hegység",
      ro: "Munții Krkonoše",
      en: "Krkonoše Mountains"
    },
    description: {
      de: "Das Riesengebirge ist das höchste Gebirge Tschechiens und bildet einen Teil der Grenze zu Polen. Der Berg Sněžka ist der höchste Gipfel des Landes und prägt die Region.",
      hu: "A Krkonoše Óriás-hegység Csehország legmagasabb hegysége, és részben a lengyel határt alkotja. A Sněžka a legmagasabb csúcs, és meghatározza a térséget.",
      ro: "Munții Krkonoše sunt cel mai înalt lanț muntos din Cehia și formează o parte a graniței cu Polonia. Vârful Sněžka este cel mai înalt din țară și definește regiunea.",
      en: "The Krkonoše Mountains are the highest mountain range in the Czech Republic and form part of the border with Poland. Sněžka is the country's highest peak and defines the region."
    },
    facts: {
      de: [
        "Die Sněžka ist mit 1.603 Metern der höchste Berg Tschechiens.",
        "Das Riesengebirge ist ein bedeutendes Winter- und Wandergebiet.",
        "Die Region ist reich an alpinen Wiesen und klaren Bergbächen.",
        "Der tschechische Teil ist als Nationalpark geschützt."
      ],
      hu: [
        "A Sněžka 1603 méterrel Csehország legmagasabb hegye.",
        "A Krkonoše fontos téli és túravidék.",
        "A régió alpesi rétekben és tiszta hegyi patakokban gazdag.",
        "A cseh oldalt nemzeti park védi."
      ],
      ro: [
        "Sněžka, cu 1.603 metri, este cel mai înalt vârf din Cehia.",
        "Munții Krkonoše sunt o importantă zonă de iarnă și drumeții.",
        "Regiunea este bogată în pajiști alpine și pâraie limpezi de munte.",
        "Partea cehă este protejată ca parc național."
      ],
      en: [
        "Sněžka, at 1,603 meters, is the highest mountain in the Czech Republic.",
        "The Krkonoše are an important winter and hiking region.",
        "The area is rich in alpine meadows and clear mountain streams.",
        "The Czech side is protected as a national park."
      ]
    },
    image: "/geo-images/czechRepublic/nat-krkonose.webp"
  },
  {
    id: "nat-karlovy-vary",
    type: "nature",
    parent: "country-czech-republic",
    coords: [12.8671, 50.2301],
    name: {
      de: "Karlsbad",
      hu: "Karlovy Vary",
      ro: "Karlovy Vary",
      en: "Karlovy Vary"
    },
    description: {
      de: "Karlovy Vary ist ein berühmter Kurort in Westböhmen mit Thermalquellen, Kolonnaden und historischer Bäderarchitektur. Die Stadt ist auch als UNESCO-Heilbad bekannt.",
      hu: "Karlovy Vary egy híres nyugat-csehországi fürdőváros termálforrásokkal, árkádokkal és történelmi fürdőépületekkel. A város UNESCO-gyógyhelyként is ismert.",
      ro: "Karlovy Vary este un renumit oraș balnear din Boemia de Vest, cu izvoare termale, colonade și arhitectură istorică de băi. Orașul este cunoscut și ca sit UNESCO balnear.",
      en: "Karlovy Vary is a famous spa town in western Bohemia with thermal springs, colonnades, and historic bath architecture. The city is also known as a UNESCO spa destination."
    },
    facts: {
      de: [
        "Die Stadt gehört zu den bekanntesten Kurorten Europas.",
        "Ihre Thermalquellen prägen das ganze Stadtbild.",
        "Karlovy Vary ist für seine Kurarchitektur und Kolonnaden bekannt.",
        "Das internationale Filmfestival macht den Ort zusätzlich berühmt."
      ],
      hu: [
        "A város Európa legismertebb fürdővárosai közé tartozik.",
        "A termálforrások az egész városképet meghatározzák.",
        "Karlovy Vary híres a fürdőépítészetéről és árkádjairól.",
        "A nemzetközi filmfesztivál tovább növeli az ismertségét."
      ],
      ro: [
        "Orașul este printre cele mai cunoscute stațiuni balneare din Europa.",
        "Izvoarele termale definesc întregul peisaj urban.",
        "Karlovy Vary este renumit pentru arhitectura balneară și colonadele sale.",
        "Festivalul internațional de film îi sporește faima."
      ],
      en: [
        "The city is among Europe's best-known spa towns.",
        "Its thermal springs shape the entire cityscape.",
        "Karlovy Vary is known for its spa architecture and colonnades.",
        "The international film festival adds to its fame."
      ]
    },
    image: "/geo-images/czechRepublic/nat-karlovy-vary.webp"
  }
];

export const czechRepublicAllPoi: POI[] = [czechRepublicCountry, ...czechRepublicRegions, ...czechRepublicCities, ...czechRepublicCulture, ...czechRepublicNature];
