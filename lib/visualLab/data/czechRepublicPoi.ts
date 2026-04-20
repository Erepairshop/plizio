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

export const czechRepublicAllPoi: POI[] = [
  czechRepublicCountry,
  ...czechRepublicRegions
];
