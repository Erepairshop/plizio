// @ts-nocheck
import type { POI } from "./poi";
import { slovakiaHistory } from "./poiExtraSlovakiaHistory";
import { slovakiaOther } from "./poiExtraSlovakiaOther";

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
    de: "Die Slowakei ist ein Binnenstaat in Mitteleuropa, bekannt für seine dramatischen Berglandschaften der Hohen Tatra, zahlreiche mittelalterliche Burgen und reiche Volkskultur.",
    hu: "Szlovákia egy közép-európai ország, amely a Magas-Tátra drámai hegyi tájairól, számos középkori váráról és gazdag népi kultúrájáról ismert.",
    ro: "Slovacia este o țară din Europa Centrală, cunoscută pentru peisajele montane dramatice ale Munților Tatra Înaltă, numeroasele castele medievale și cultura populară bogată.",
    en: "Slovakia is a Central European country known for its dramatic mountain landscapes of the High Tatras, numerous medieval castles, and rich folk culture."
  },
  descriptionAdvanced: {
      de: "Die Slowakei, offiziell die Slowakische Republik, ist ein faszinierendes Land im Herzen Mitteleuropas, das für seine atemberaubende natürliche Schönheit, seine reiche Geschichte und seine beeindruckende Dichte an Burgen bekannt ist. Das Land grenzt an Tschechien, Polen, die Ukraine, Ungarn und Österreich. Die Geografie der Slowakei wird maßgeblich von den Karpaten geprägt, wobei die Hohe Tatra im Norden mit ihren schroffen Gipfeln und kristallklaren Bergseen ein Paradies für Wanderer und Wintersportler darstellt. Die Slowakei beherbergt über 100 Burgen und Schlösser, darunter die monumentale Zipser Burg (Spišský hrad), eine der größten Burganlagen Mitteleuropas und UNESCO-Welterbe. Die Hauptstadt Bratislava, malerisch an der Donau gelegen, besticht durch ihre charmante Altstadt und ihre strategische Lage im Dreiländereck. Kulturell ist das Land tief in seinen slawischen Wurzeln und einer lebendigen Folklore verankert, die sich in traditioneller Musik, Tanz und dem charakteristischen Holzhandwerk widerspiegelt. Kulinarisch bietet die Slowakei herzhafte Genüsse wie Bryndzové halušky (Kartoffelklöße mit Schafskäse). Heute präsentiert sich die Slowakei als moderne, dynamische Nation mit einer starken Automobilindustrie und einer wachsenden Wirtschaft innerhalb der Europäischen Union. Ob man die mystischen Höhlen des Slowakischen Karsts erkundet, in den historischen Kurorten wie Piešťany entspannt oder die unberührte Natur der Nationalparks genießt – die Slowakei empfängt ihre Besucher mit einer Mischung aus wilder Romantik und herzlicher Gastfreundschaft.",
      hu: "Szlovákia, hivatalos nevén a Szlovák Köztársaság, egy lenyűgöző ország Közép-Európa szívében, amely lélegzetelállító természeti szépségéről, gazdag történelméről és a várak rendkívüli sűrűségéről ismert. Az ország Csehországgal, Lengyelországgal, Ukrajnával, Magyarországgal és Ausztriával határos. Szlovákia földrajzát meghatározzák a Kárpátok, északon a Magas-Tátra sziklás csúcsaival és kristálytiszta tengerszemeivel a túrázók és a téli sportok kedvelőinek paradicsoma. Szlovákiában több mint 100 vár és kastély található, köztük a monumentális Szepesi vár (Spišský hrad), amely Közép-Európa egyik legnagyobb váregyüttese és az UNESCO Világörökség része. A főváros, Pozsony, a Duna partján fekszik, és bájos óvárosával, valamint a hármashatárnál elfoglalt stratégiai helyzetével bűvöli el a látogatókat. Kulturális szempontból az ország mélyen gyökerezik szláv múltjában és vibráló folklórjában, amely a hagyományos zenében, táncban és a jellegzetes fafaragó művészetben mutatkozik meg. Kulinárisan Szlovákia olyan kiadós ételeket kínál, mint a sztrapacska (Bryndzové halušky). Ma Szlovákia modern, dinamikus nemzet, erős autóiparral és növekvő gazdasággal az Európai Unión belül. Akár a Szlovák-karszt misztikus barlangjait fedezi fel valaki, akár a történelmi fürdővárosokban, például Pöstyénben pihen, vagy a nemzeti parkok érintetlen természetét élvezi – Szlovákia a vadregényes romantika és a szívélyes vendégszeretet keverékével fogadja látogatóit.",
      ro: "Slovacia este un stat central-european care îmbină armonios peisajele montane spectaculoase cu un patrimoniu istoric vast, fiind definită geografic de lanțul Munților Carpați. După separarea pașnică de Republica Cehă în 1993, proces cunoscut sub numele de „Divorțul de Catifea”, țara a cunoscut o modernizare rapidă și o integrare profundă în structurile europene, adoptând moneda Euro în 2009. Bratislava, capitala situată pe malurile Dunării, este singura capitală din lume care se învecinează direct cu două state, Austria și Ungaria, reflectând caracterul multicultural al regiunii. Munții Tatra Înaltă reprezintă mândria națională, oferind trasee de drumeție alpine și stațiuni de schi de renume mondial, în timp ce parcurile naționale precum Paradisul Slovac adăpostesc defilee și cascade impresionante. Din punct de vedere economic, Slovacia s-a afirmat ca un „tigru al Europei”, devenind cel mai mare producător de automobile pe cap de locuitor din lume, cu fabrici majore în orașe precum Trnava, Nitra sau Žilina. Moștenirea sa medievală este vizibilă prin densitatea incredibilă de castele și fortărețe, Castelul Spiš fiind unul dintre cele mai mari ansambluri fortificate din Europa. Tradițiile populare sunt păstrate cu sfințenie în sate pitorești precum Vlkolínec, protejat de UNESCO, unde arhitectura din lemn și obiceiurile ancestrale oferă o fereastră spre trecutul rural al națiunii.",
      en: "Slovakia is a landlocked nation situated in the geographic heart of Europe, characterized by its dramatic mountainous terrain and a rich tapestry of history that spans from the Great Moravian Empire to the Habsburg era. The country is dominated by the Carpathian Mountains, with the High Tatras forming the northern border and providing some of the most spectacular alpine scenery in Central Europe, including the highest peak, Gerlachovský štít. Following the peaceful dissolution of Czechoslovakia in 1993, a transition famously called the Velvet Divorce, Slovakia rapidly evolved into a modern, export-oriented economy and is currently the world’s leading producer of passenger cars per capita. Its strategic location along the Danube River has made the capital, Bratislava, a crossroads of cultures for centuries, serving as the coronation city for Hungarian kings for nearly 300 years. Slovakia boasts one of the highest concentrations of castles and chateaus in the world, ranging from the fairytale-like Bojnice Castle to the imposing ruins of Spiš Castle, a UNESCO World Heritage site. Beyond its industrial prowess and historic fortresses, the nation is renowned for its subterranean wonders, with over 6,000 discovered caves, including the rare Ochtinská Aragonite Cave. The cultural landscape is enriched by vibrant folk traditions, distinct wooden architecture in the north, and a burgeoning wine industry in the Little Carpathians, making it a multifaceted destination for history buffs and outdoor enthusiasts alike.",
    },
  descriptionAdvancedHu: "Szlovákia a Kárpátok uralta Közép-Európa szívében található, ahol a természeti szépségek és a történelmi várak összefonódnak. Az ország egyedülálló ökoszisztémákkal, gazdag népi kultúrával és dinamikus gazdasággal rendelkezik.",
  factsAdvanced: {
    de: [
      "Die Slowakei ist bekannt für ihre hohe Dichte an Mineralquellen und Heilbädern, die besonders im Nordwesten und im Landesinneren liegen.",
      "Die geografische Lage des Landes macht es zu einem der wichtigsten Transitländer für den europäischen Güterverkehr.",
      "Das Automobilcluster in der Westslowakei ist das bedeutendste industrielle Zentrum der Nation.",
      "Die Volksarchitektur, insbesondere die hölzernen Kirchen, ist einzigartig in der Weltgeschichte der Sakralbaukunst."
    ],
    hu: [
      "Szlovákia különleges adottsága az ásványvizek és gyógyfürdők sűrűsége, főleg az északnyugati és belső területeken.",
      "Az ország földrajzi fekvése miatt Európa egyik legfontosabb tranzitországa a teherforgalom számára.",
      "A nyugat-szlovákiai autóipari klaszter az ország legjelentősebb ipari központja.",
      "A népi építészet, különösen a fatemplomok, egyedülálló a világ egyházi építészetében."
    ],
    ro: [
      "Are cea mai mare densitate de castele pe cap de locuitor din lume.",
      "Trecerea la moneda Euro a avut loc în anul 2009.",
      "Peste 40% din suprafața țării este acoperită de păduri.",
      "Deține peste 6.000 de peșteri cunoscute, multe deschise publicului."
    ],
    en: ["Slovakia has one of the highest numbers of castles and chateaus per capita in the world.", "The country adopted the Euro as its official currency on January 1, 2009.", "Over 40% of the country's total land area is covered by dense forests.", "Bratislava and Vienna are the two closest national capitals in Europe."]
  },
  factsAdvancedHu: [
      "Szlovákia területének több mint 40%-át erdők borítják.",
      "Az országban több mint 6000 barlangot fedeztek fel.",
      "Pozsony és Bécs Európa két legközelebbi fővárosa.",
      "Az ország 2009-ben vezette be az eurót."
  ],
  facts: {
    de: [
      "Die Slowakei hat die höchste Dichte an Burgen und Schlössern pro Kopf weltweit.",
      "Mehr als 6.000 Höhlen wurden in der Slowakei entdeckt.",
      "Der geografische Mittelpunkt Europas soll in der Nähe des Dorfes Kremnické Bane liegen.",
      "Das Land hat neun Nationalparks und 14 geschützte Landschaftsgebiete.",
      "Die Slowakei ist der weltweit größte Pro-Kopf-Produzent von Automobilen.",
      "Die Zipser Burg ist eine der größten Burganlagen in Mitteleuropa.",
      "Die slowakische Sprache wird oft als das 'Esperanto der slawischen Sprachen' bezeichnet.",
      "Der Nationalpark Hohe Tatra ist das älteste Schutzgebiet des Landes.",
      "Die Slowakei besitzt die weltweit höchste Anzahl an Holzkirchen pro Quadratkilometer.",
      "Das Dorf Čičmany ist berühmt für seine traditionellen Häuser mit weißen Ornamenten."
    ],
    hu: [
      "Szlovákiában a legmagasabb az egy főre jutó várak és kastélyok száma a világon.",
      "Szlovákiában több mint 6000 barlangot fedeztek fel.",
      "Az országnak kilenc nemzeti parkja és 14 tájvédelmi körzete van.",
      "Szlovákia a világ legnagyobb egy főre jutó autógyártója.",
      "A Szepesi vár Közép-Európa egyik legnagyobb váregyüttese.",
      "A szlovák nyelvet gyakran a \"szláv nyelvek eszperantójának\" nevezik.",
      "A Magas-Tátra Nemzeti Park az ország legrégebbi védett területe.",
      "Szlovákiában található a világon a legtöbb fatemplom egy négyzetkilométerre vetítve.",
      "Csicsmány (Čičmany) falu híres fehér díszítésű hagyományos házairól."
    ],
    ro: [
      "Slovacia are cea mai mare densitate de castele și palate pe cap de locuitor din lume.",
      "Peste 6.000 de peșteri au fost descoperite în Slovacia.",
      "Centrul geografic al Europei s-ar afla lângă satul Kremnické Bane.",
      "Țara are nouă parcuri naționale și 14 zone peisajere protejate.",
      "Slovacia este cel mai mare producător de automobile pe cap de locuitor din lume.",
      "Cetatea Spiš este unul dintre cele mai mari ansambluri de castele din Europa Centrală.",
      "Limba slovacă este adesea numită \"esperanto a limbilor slave\".",
      "Parcul Național Tatra Înaltă este cea mai veche zonă protejată din țară.",
      "Slovacia deține cel mai mare număr de biserici de lemn pe kilometru pătrat din lume.",
      "Satul Čičmany este faimos pentru casele sale tradiționale cu ornamente albe."
    ],
    en: [
      "Slovakia has the highest density of castles and chateaux per capita in the world.",
      "More than 6,000 caves have been discovered in Slovakia.",
      "The geographical center of Europe is said to be located near the village of Kremnické Bane.",
      "The country has nine national parks and 14 protected landscape areas.",
      "Slovakia is the world's largest producer of automobiles per capita.",
      "Spiš Castle is one of the largest castle complexes in Central Europe.",
      "The Slovak language is often called the 'Esperanto of Slavic languages'.",
      "The High Tatras National Park is the oldest protected area in the country.",
      "Slovakia has the world's highest number of wooden churches per square kilometer.",
      "The village of Čičmany is famous for its traditional houses with white ornaments."
    ]
  },
  descriptionAdvancedEn: "Slovakia, a landlocked nation in Central Europe, is characterized by its mountainous terrain, largely dominated by the Carpathian Mountains. The country transitioned smoothly to independence following the dissolution of Czechoslovakia in 1993. Historically, its territory served as an important crossroads for trade and cultural exchange between Eastern and Western Europe. Today, Slovakia boasts a rapidly developing economy heavily focused on automotive manufacturing and engineering. The landscape features deep valleys, expansive forests, and numerous medieval castles, making it a focal point for studying European geographical features.",
  factsAdvancedEn: ["Slovakia has one of the highest numbers of castles and chateaus per capita in the world.", "The country adopted the Euro as its official currency on January 1, 2009.", "Over 40% of the country's total land area is covered by dense forests.", "Bratislava and Vienna are the two closest national capitals in Europe."],
  image: "/geo-images/slovakia/country-slovakia.webp"
};
