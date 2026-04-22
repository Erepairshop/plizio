import type { POI } from "../data/poi";

export const sanmarinoCountry: POI = {
  id: "country-sanmarino",
  type: "country",
  parent: "europe",
  coords: [12.4578, 43.9424],
  name: {
    de: "San Marino",
    hu: "San Marino",
    ro: "San Marino",
    en: "San Marino"
  },
  description: {
    de: "San Marino ist die älteste bestehende Republik der Welt und ein Zwergstaat, der vollständig von Italien umgeben ist.",
    hu: "San Marino a világ legrégebbi máig fennálló köztársasága, és egy törpeállam, amelyet teljesen körülvesz Olaszország.",
    ro: "San Marino este cea mai veche republică din lume și un microstat complet înconjurat de Italia.",
    en: "San Marino is the world's oldest surviving republic and a microstate entirely surrounded by Italy."
  },
  descriptionAdvanced: {
    de: "San Marino ist ein faszinierender Zwergstaat, der auf dem Berg Titano thront. Die historischen Türme und die mittelalterliche Architektur bieten atemberaubende Ausblicke.",
    hu: "San Marino egy lenyűgöző törpeállam, amely a Titano-hegyen magasodik. A történelmi tornyok és a középkori építészet lélegzetelállító kilátást nyújtanak.",
    ro: "San Marino este un microstat fascinant situat pe Muntele Titano. Turnurile istorice și arhitectura medievală oferă priveliști uluitoare.",
    en: "San Marino is a fascinating microstate perched on Mount Titano. The historic towers and medieval architecture offer breathtaking views."
  },
  facts: {
    de: [
      "San Marino ist die drittkleinste Nation Europas.",
      "Die Republik wurde der Legende nach im Jahr 301 gegründet.",
      "Das Land hat mehr Autos als Einwohner.",
      "Die Amtssprache ist Italienisch.",
      "Der Monte Titano und das historische Zentrum gehören zum UNESCO-Welterbe."
    ],
    hu: [
      "San Marino Európa harmadik legkisebb országa.",
      "A köztársaságot a legenda szerint 301-ben alapították.",
      "Az országnak több autója van, mint lakosa.",
      "A hivatalos nyelv az olasz.",
      "A Titano-hegy és a történelmi központ az UNESCO világörökség része."
    ],
    ro: [
      "San Marino este a treia cea mai mică națiune din Europa.",
      "Conform legendei, republica a fost fondată în anul 301.",
      "Țara are mai multe mașini decât locuitori.",
      "Limba oficială este italiana.",
      "Muntele Titano și centrul istoric fac parte din Patrimoniul Mondial UNESCO."
    ],
    en: [
      "San Marino is the third smallest nation in Europe.",
      "According to legend, the republic was founded in 301 AD.",
      "The country has more cars than residents.",
      "The official language is Italian.",
      "Mount Titano and the historic center are a UNESCO World Heritage site."
    ]
  },
  image: "/geo-images/sanmarino/country-sanmarino.webp"
};

export const sanmarinoRegions: POI[] = [];

export const sanmarinoCities: POI[] = [
  {
    id: "city-san-marino",
    type: "city",
    parent: "country-sanmarino",
    coords: [12.4464, 43.9317],
    name: {
      de: "Stadt San Marino",
      hu: "San Marino város",
      ro: "Orașul San Marino",
      en: "City of San Marino"
    },
    description: {
      de: "Die Hauptstadt liegt auf dem Monte Titano und ist bekannt für ihre mittelalterlichen Festungsmauern und engen Kopfsteinpflasterstraßen.",
      hu: "A főváros a Titano-hegyen fekszik, és híres középkori várfalairól, valamint szűk macskaköves utcáiról.",
      ro: "Capitala este situată pe Muntele Titano și este cunoscută pentru zidurile sale medievale și străduțele înguste pietruite.",
      en: "The capital is located on Mount Titano and is known for its medieval fortresses and narrow cobblestone streets."
    },
    facts: {
      de: [
        "Die Altstadt ist UNESCO-Welterbe.",
        "Der Palazzo Pubblico ist der Sitz der Regierung.",
        "Es gibt zahlreiche zollfreie Geschäfte.",
        "Die Stadt bietet spektakuläre Ausblicke bis zur Adria."
      ],
      hu: [
        "Az óváros UNESCO világörökség.",
        "A Palazzo Pubblico a kormány székhelye.",
        "Számos vámmentes üzlet található itt.",
        "Látványos kilátás nyílik egészen az Adriai-tengerig."
      ],
      ro: [
        "Centrul vechi este în Patrimoniul Mondial UNESCO.",
        "Palazzo Pubblico este sediul guvernului.",
        "Există numeroase magazine duty-free.",
        "Orașul oferă vederi spectaculoase până la Marea Adriatică."
      ],
      en: [
        "The old town is a UNESCO World Heritage site.",
        "The Palazzo Pubblico is the seat of government.",
        "There are numerous duty-free shops.",
        "The city offers spectacular views all the way to the Adriatic Sea."
      ]
    },
    image: "/geo-images/sanmarino/city-san-marino.webp"
  },
  {
    id: "city-serravalle",
    type: "city",
    parent: "country-sanmarino",
    coords: [12.4828, 43.9686],
    name: {
      de: "Serravalle",
      hu: "Serravalle",
      ro: "Serravalle",
      en: "Serravalle"
    },
    description: {
      de: "Serravalle ist die bevölkerungsreichste Gemeinde San Marinos und ein wichtiges Handels- und Sportzentrum.",
      hu: "Serravalle San Marino legnépesebb települése, és egy fontos kereskedelmi és sportközpont.",
      ro: "Serravalle este cea mai populată comună din San Marino și un important centru comercial și sportiv.",
      en: "Serravalle is the most populous municipality in San Marino and a major commercial and sports center."
    },
    facts: {
      de: [
        "Es beherbergt das Olympiastadion von San Marino.",
        "Die Stadt wurde 1463 an San Marino angegliedert.",
        "Hier befindet sich der Hauptsitz des san-marinesischen Rundfunks.",
        "Es ist ein wichtiges wirtschaftliches Zentrum."
      ],
      hu: [
        "Itt található San Marino Olimpiai Stadionja.",
        "A várost 1463-ban csatolták San Marinóhoz.",
        "Itt van a san marinói rádió és televízió központja.",
        "Fontos gazdasági központ."
      ],
      ro: [
        "Găzduiește Stadionul Olimpic din San Marino.",
        "Orașul a fost anexat la San Marino în 1463.",
        "Aici este sediul principal al radiodifuziunii din San Marino.",
        "Este un important centru economic."
      ],
      en: [
        "It is home to the San Marino Olympic Stadium.",
        "The town was annexed to San Marino in 1463.",
        "The headquarters of San Marino's broadcasting is located here.",
        "It is a major economic center."
      ]
    },
    image: "/geo-images/sanmarino/city-serravalle.webp"
  },
  {
    id: "city-borgo-maggiore",
    type: "city",
    parent: "country-sanmarino",
    coords: [12.4419, 43.9406],
    name: {
      de: "Borgo Maggiore",
      hu: "Borgo Maggiore",
      ro: "Borgo Maggiore",
      en: "Borgo Maggiore"
    },
    description: {
      de: "Borgo Maggiore liegt am Fuße des Monte Titano und ist historisch der wichtigste Marktplatz der Republik.",
      hu: "Borgo Maggiore a Titano-hegy lábánál fekszik, és történelmileg a köztársaság legfontosabb piactere.",
      ro: "Borgo Maggiore este situat la poalele Muntelui Titano și, istoric, a fost cea mai importantă piață a republicii.",
      en: "Borgo Maggiore lies at the foot of Mount Titano and was historically the most important marketplace in the republic."
    },
    facts: {
      de: [
        "Ein traditioneller Markt findet hier jeden Donnerstag statt.",
        "Eine Seilbahn verbindet Borgo Maggiore mit der Stadt San Marino.",
        "Die Stadt ist für ihre historischen Glockentürme bekannt.",
        "Es war früher unter dem Namen 'Mercatale' bekannt."
      ],
      hu: [
        "Hagyományos piacot tartanak itt minden csütörtökön.",
        "Egy drótkötélpálya köti össze Borgo Maggiorét San Marino várossal.",
        "A város történelmi harangtornyairól ismert.",
        "Korábban 'Mercatale' néven ismerték."
      ],
      ro: [
        "O piață tradițională are loc aici în fiecare joi.",
        "O telecabină leagă Borgo Maggiore de Orașul San Marino.",
        "Orașul este cunoscut pentru clopotnițele sale istorice.",
        "A fost cunoscut anterior sub numele de 'Mercatale'."
      ],
      en: [
        "A traditional market is held here every Thursday.",
        "A cable car connects Borgo Maggiore with the City of San Marino.",
        "The town is known for its historic bell towers.",
        "It was formerly known as 'Mercatale'."
      ]
    },
    image: "/geo-images/sanmarino/city-borgo-maggiore.webp"
  },
  {
    id: "city-domagnano",
    type: "city",
    parent: "country-sanmarino",
    coords: [12.4683, 43.9486],
    name: {
      de: "Domagnano",
      hu: "Domagnano",
      ro: "Domagnano",
      en: "Domagnano"
    },
    description: {
      de: "Domagnano ist eine kleine Gemeinde, die für ihre Weinberge und die historische Burg bekannt ist.",
      hu: "Domagnano egy kis község, amely szőlőskertjeiről és történelmi váráról ismert.",
      ro: "Domagnano este o comună mică cunoscută pentru podgoriile sale și castelul istoric.",
      en: "Domagnano is a small municipality known for its vineyards and historic castle."
    },
    facts: {
      de: [
        "Hier wurde der Schatz von Domagnano gefunden (ostgotischer Schmuck).",
        "Die Gegend ist bekannt für Olivenöl- und Weinproduktion.",
        "Die Burg Montelupo stand einst hier.",
        "Bietet eine malerische Aussicht auf den Monte Titano."
      ],
      hu: [
        "Itt találták meg a Domagnanói kincset (osztrogót ékszerek).",
        "A környék olívaolaj- és bortermeléséről ismert.",
        "Egykor itt állt a Montelupo vár.",
        "Festői kilátást nyújt a Titano-hegyre."
      ],
      ro: [
        "Aici a fost găsită Comoara din Domagnano (bijuterii ostrogote).",
        "Zona este cunoscută pentru producția de ulei de măsline și vin.",
        "Castelul Montelupo se afla aici cândva.",
        "Oferă o vedere pitorească spre Muntele Titano."
      ],
      en: [
        "The Treasure of Domagnano (Ostrogothic jewelry) was found here.",
        "The area is known for olive oil and wine production.",
        "The Montelupo castle once stood here.",
        "Offers a picturesque view of Mount Titano."
      ]
    },
    image: "/geo-images/sanmarino/city-domagnano.webp"
  },
  {
    id: "city-fiorentino",
    type: "city",
    parent: "country-sanmarino",
    coords: [12.4578, 43.9103],
    name: {
      de: "Fiorentino",
      hu: "Fiorentino",
      ro: "Fiorentino",
      en: "Fiorentino"
    },
    description: {
      de: "Fiorentino ist eine der neun Gemeinden von San Marino und war einst eine wichtige Festung.",
      hu: "Fiorentino San Marino kilenc községének egyike, amely egykor fontos erődítmény volt.",
      ro: "Fiorentino este una dintre cele nouă comune din San Marino și a fost cândva o cetate importantă.",
      en: "Fiorentino is one of the nine municipalities of San Marino and was once an important fortress."
    },
    facts: {
      de: ["Im Mittelalter als 'Castellaccio' (große Festung) bekannt."],
      hu: ["A középkorban 'Castellaccio' (nagy erőd) néven ismerték."],
      ro: ["Cunoscută în Evul Mediu ca 'Castellaccio' (marea fortăreață)."],
      en: ["Known in the Middle Ages as 'Castellaccio' (great fortress)."]
    },
    image: "/geo-images/sanmarino/city-fiorentino.webp"
  },
  {
    id: "city-acquaviva",
    type: "city",
    parent: "country-sanmarino",
    coords: [12.4181, 43.9458],
    name: {
      de: "Acquaviva",
      hu: "Acquaviva",
      ro: "Acquaviva",
      en: "Acquaviva"
    },
    description: {
      de: "Acquaviva verdankt ihren Namen einer wichtigen Wasserquelle am Fuße des Monte Cerreto.",
      hu: "Acquaviva nevét egy fontos vízforrásnak köszönheti a Monte Cerreto lábánál.",
      ro: "Acquaviva își datorează numele unui izvor important de apă de la poalele Muntelui Cerreto.",
      en: "Acquaviva owes its name to an important water spring at the foot of Monte Cerreto."
    },
    facts: {
      de: ["Der Legende nach tauchte der Heilige Marinus hier in einer Höhle auf."],
      hu: ["A legenda szerint Szent Marinus itt bukkant fel egy barlangban."],
      ro: ["Conform legendei, Sfântul Marinus a apărut aici într-o peșteră."],
      en: ["Legend has it that Saint Marinus emerged here in a cave."]
    },
    image: "/geo-images/sanmarino/city-acquaviva.webp"
  }
];

export const sanmarinoCulture: POI[] = [
  {
    id: "cult-guaita",
    type: "landmark",
    parent: "country-sanmarino",
    coords: [12.4485, 43.9360],
    name: {
      de: "Guaita (Erster Turm)",
      hu: "Guaita (Első Torony)",
      ro: "Guaita (Primul Turn)",
      en: "Guaita (First Tower)"
    },
    description: {
      de: "Der Guaita ist der älteste und größte der drei Türme auf dem Monte Titano, der im 11. Jahrhundert erbaut wurde.",
      hu: "A Guaita a Titano-hegy három tornya közül a legrégebbi és a legnagyobb, a 11. században épült.",
      ro: "Guaita este cel mai vechi și cel mai mare dintre cele trei turnuri de pe Muntele Titano, construit în secolul al XI-lea.",
      en: "The Guaita is the oldest and largest of the three towers on Mount Titano, built in the 11th century."
    },
    facts: {
      de: [
        "Der Turm diente lange Zeit als Gefängnis.",
        "Er wurde auf einer festen Felsbasis ohne Fundament errichtet.",
        "Das Gebäude wurde mehrfach restauriert, zuletzt im 20. Jahrhundert.",
        "Er ist auf der san-marinesischen 5-Cent-Münze abgebildet."
      ],
      hu: [
        "A torony sokáig börtönként szolgált.",
        "Szilárd sziklaalapra épült alapozás nélkül.",
        "Az épületet többször felújították, legutóbb a 20. században.",
        "A san marinói 5 centes érmén is szerepel."
      ],
      ro: [
        "Turnul a servit mult timp ca închisoare.",
        "A fost construit pe o bază de stâncă solidă fără fundație.",
        "Clădirea a fost restaurată de mai multe ori, cel mai recent în secolul XX.",
        "Este reprezentat pe moneda de 5 cenți din San Marino."
      ],
      en: [
        "The tower served as a prison for a long time.",
        "It was built on a solid rock base with no foundation.",
        "The building has been restored several times, most recently in the 20th century.",
        "It is depicted on the Sammarinese 5-cent coin."
      ]
    },
    image: "/geo-images/sanmarino/cult-guaita.webp"
  },
  {
    id: "cult-cesta",
    type: "landmark",
    parent: "country-sanmarino",
    coords: [12.4490, 43.9320],
    name: {
      de: "Cesta (Zweiter Turm)",
      hu: "Cesta (Második Torony)",
      ro: "Cesta (Al doilea Turn)",
      en: "Cesta (Second Tower)"
    },
    description: {
      de: "Der Cesta-Turm steht auf dem höchsten Punkt des Monte Titano und beherbergt das Museum für alte Waffen.",
      hu: "A Cesta-torony a Titano-hegy legmagasabb pontján áll, és a régi fegyverek múzeumának ad otthont.",
      ro: "Turnul Cesta stă pe cel mai înalt punct al Muntelui Titano și găzduiește Muzeul Armelor Antice.",
      en: "The Cesta tower stands on the highest peak of Mount Titano and houses the Museum of Ancient Arms."
    },
    facts: {
      de: [
        "Er wurde im 13. Jahrhundert auf den Überresten einer älteren römischen Festung erbaut.",
        "Das Museum enthält über 500 Waffen aus dem Mittelalter.",
        "Der Turm bietet einen der besten Panoramablicke.",
        "Er wird auf der san-marinesischen 1-Cent-Münze dargestellt."
      ],
      hu: [
        "A 13. században épült egy régebbi római erőd romjain.",
        "A múzeumban több mint 500 középkori fegyver található.",
        "A toronyból nyílik az egyik legjobb panoráma.",
        "A san marinói 1 centes érmén ábrázolják."
      ],
      ro: [
        "A fost construit în secolul al XIII-lea pe rămășițele unui vechi fort roman.",
        "Muzeul conține peste 500 de arme din Evul Mediu.",
        "Turnul oferă una dintre cele mai bune vederi panoramice.",
        "Este reprezentat pe moneda de 1 cent din San Marino."
      ],
      en: [
        "It was built in the 13th century on the remains of an older Roman fort.",
        "The museum contains over 500 weapons dating back to the Middle Ages.",
        "The tower offers one of the best panoramic views.",
        "It is depicted on the Sammarinese 1-cent coin."
      ]
    },
    image: "/geo-images/sanmarino/cult-cesta.webp"
  },
  {
    id: "cult-montale",
    type: "landmark",
    parent: "country-sanmarino",
    coords: [12.4498, 43.9295],
    name: {
      de: "Montale (Dritter Turm)",
      hu: "Montale (Harmadik Torony)",
      ro: "Montale (Al treilea Turn)",
      en: "Montale (Third Tower)"
    },
    description: {
      de: "Der Montale ist der kleinste der drei Türme. Im Gegensatz zu den anderen ist er nicht für die Öffentlichkeit zugänglich.",
      hu: "A Montale a legkisebb a három torony közül. A többivel ellentétben ez nem látogatható a nagyközönség számára.",
      ro: "Montale este cel mai mic dintre cele trei turnuri. Spre deosebire de celelalte, nu este deschis publicului.",
      en: "The Montale is the smallest of the three towers. Unlike the others, it is not open to the public."
    },
    facts: {
      de: [
        "Er wurde im 14. Jahrhundert erbaut.",
        "Der Turm hat nur einen einzigen Eingang, der 7 Meter über dem Boden liegt.",
        "Er wurde gebaut, um sich gegen die Malatesta-Familie zu verteidigen.",
        "Er ist auf der san-marinesischen 2-Cent-Münze zu sehen."
      ],
      hu: [
        "A 14. században épült.",
        "A toronynak csak egyetlen bejárata van, amely 7 méterre van a földtől.",
        "A Malatesta család elleni védekezés céljából épült.",
        "A san marinói 2 centes érmén látható."
      ],
      ro: [
        "A fost construit în secolul al XIV-lea.",
        "Turnul are o singură intrare, care se află la 7 metri deasupra solului.",
        "A fost construit pentru a se apăra împotriva familiei Malatesta.",
        "Se poate vedea pe moneda de 2 cenți din San Marino."
      ],
      en: [
        "It was built in the 14th century.",
        "The tower has only one entrance, which is 7 meters above the ground.",
        "It was built to defend against the Malatesta family.",
        "It is seen on the Sammarinese 2-cent coin."
      ]
    },
    image: "/geo-images/sanmarino/cult-montale.webp"
  },
  {
    id: "cult-palazzo-pubblico",
    type: "landmark",
    parent: "country-sanmarino",
    coords: [12.4466, 43.9366],
    name: {
      de: "Palazzo Pubblico",
      hu: "Palazzo Pubblico",
      ro: "Palazzo Pubblico",
      en: "Palazzo Pubblico"
    },
    description: {
      de: "Das Rathaus von San Marino und das offizielle Regierungsgebäude, in dem Zeremonien und Staatstreffen stattfinden.",
      hu: "San Marino városházája és a hivatalos kormányépület, ahol ceremóniákat és állami találkozókat tartanak.",
      ro: "Primăria orașului San Marino și clădirea oficială a guvernului, unde au loc ceremoniile și întâlnirile de stat.",
      en: "The town hall of San Marino and official Government Building, where ceremonies and state meetings are held."
    },
    facts: {
      de: [
        "Entworfen vom römischen Architekten Francesco Azzurri im späten 19. Jahrhundert.",
        "Der gotische Baustil ähnelt dem Palazzo Vecchio in Florenz.",
        "Vor dem Gebäude befindet sich die Piazza della Libertà.",
        "Hier findet die Wachablösung statt."
      ],
      hu: [
        "Francesco Azzurri római építész tervezte a 19. század végén.",
        "A gótikus építészeti stílus a firenzei Palazzo Vecchio-ra hasonlít.",
        "Az épület előtt található a Piazza della Libertà.",
        "Itt tartják az őrségváltást."
      ],
      ro: [
        "Proiectat de arhitectul roman Francesco Azzurri la sfârșitul secolului al XIX-lea.",
        "Stilul arhitectural gotic seamănă cu Palazzo Vecchio din Florența.",
        "În fața clădirii se află Piazza della Libertà.",
        "Aici are loc schimbarea gărzii."
      ],
      en: [
        "Designed by Roman architect Francesco Azzurri in the late 19th century.",
        "The gothic architectural style resembles the Palazzo Vecchio in Florence.",
        "In front of the building is the Piazza della Libertà.",
        "The changing of the guard takes place here."
      ]
    },
    image: "/geo-images/sanmarino/cult-palazzo-pubblico.webp"
  },
  {
    id: "cult-basilica-di-san-marino",
    type: "historical",
    parent: "country-sanmarino",
    coords: [12.4463, 43.9372],
    name: {
      de: "Basilica di San Marino",
      hu: "San Marino-bazilika",
      ro: "Bazilica San Marino",
      en: "Basilica di San Marino"
    },
    description: {
      de: "Die Hauptkirche der Republik San Marino, die dem Heiligen Marinus, dem Gründer und Schutzpatron, gewidmet ist.",
      hu: "A San Marino Köztársaság fő temploma, amelyet a szerzetes és alapító Szent Marinusznak szenteltek.",
      ro: "Principala biserică din Republica San Marino, dedicată Sfântului Marinus, fondatorul și patronul spiritual.",
      en: "The main church of the Republic of San Marino, dedicated to Saint Marinus, the founder and patron saint."
    },
    facts: {
      de: [
        "Erbaut im 19. Jahrhundert im neoklassizistischen Stil.",
        "Unter dem Altar ruhen die Reliquien des Heiligen Marinus.",
        "Sie ersetzt eine ältere Kirche aus dem 4. Jahrhundert.",
        "Die Kirche ziert die san-marinesische 10-Cent-Münze."
      ],
      hu: [
        "A 19. században épült neoklasszicista stílusban.",
        "Az oltár alatt nyugszanak Szent Marinus ereklyéi.",
        "Egy régebbi, 4. századi templom helyére épült.",
        "A templom díszíti a san marinói 10 centes érmét."
      ],
      ro: [
        "Construită în secolul al XIX-lea în stil neoclasic.",
        "Moaștele Sfântului Marinus se odihnesc sub altar.",
        "Înlocuiește o biserică mai veche din secolul al IV-lea.",
        "Biserica decorează moneda de 10 cenți din San Marino."
      ],
      en: [
        "Built in the 19th century in the neoclassical style.",
        "The relics of Saint Marinus rest under the altar.",
        "It replaces an older church from the 4th century.",
        "The church adorns the Sammarinese 10-cent coin."
      ]
    },
    image: "/geo-images/sanmarino/cult-basilica-di-san-marino.webp"
  }
];

export const sanmarinoNature: POI[] = [
  {
    id: "nat-monte-titano",
    type: "mountain",
    parent: "country-sanmarino",
    coords: [12.45, 43.9314],
    name: {
      de: "Monte Titano",
      hu: "Titano-hegy",
      ro: "Muntele Titano",
      en: "Mount Titano"
    },
    description: {
      de: "Der Monte Titano ist der höchste Berg in San Marino und das markanteste geographische Merkmal des Landes.",
      hu: "A Titano-hegy San Marino legmagasabb hegye, és az ország legjellegzetesebb földrajzi formája.",
      ro: "Muntele Titano este cel mai înalt munte din San Marino și cea mai distinctă caracteristică geografică a țării.",
      en: "Mount Titano is the highest mountain in San Marino and the most distinctive geographical feature of the country."
    },
    facts: {
      de: [
        "Der Berg hat drei markante Gipfel, auf denen jeweils ein Turm steht.",
        "Die höchste Erhebung erreicht 739 Meter über dem Meeresspiegel.",
        "Zusammen mit dem historischen Stadtzentrum bildet er ein UNESCO-Welterbe.",
        "Der Berg ist umgeben von einer reichen Flora und Fauna."
      ],
      hu: [
        "A hegynek három jellegzetes csúcsa van, mindegyiken egy toronnyal.",
        "A legmagasabb pontja 739 méterrel a tengerszint felett található.",
        "A történelmi városközponttal együtt UNESCO világörökségi helyszín.",
        "A hegyet gazdag növény- és állatvilág veszi körül."
      ],
      ro: [
        "Muntele are trei vârfuri distincte, fiecare cu un turn deasupra.",
        "Cea mai înaltă altitudine ajunge la 739 de metri deasupra nivelului mării.",
        "Împreună cu centrul istoric, formează un sit al Patrimoniului Mondial UNESCO.",
        "Muntele este înconjurat de o floră și o faună bogată."
      ],
      en: [
        "The mountain has three distinct peaks, each topped with a tower.",
        "The highest elevation reaches 739 meters above sea level.",
        "Together with the historic city center, it forms a UNESCO World Heritage site.",
        "The mountain is surrounded by a rich flora and fauna."
      ]
    },
    image: "/geo-images/sanmarino/nat-monte-titano.webp"
  },
  {
    id: "nat-parco-ausa",
    type: "nature",
    parent: "country-sanmarino",
    coords: [12.4781, 43.9664],
    name: {
      de: "Ausa-Park",
      hu: "Ausa Park",
      ro: "Parcul Ausa",
      en: "Ausa Park"
    },
    description: {
      de: "Ein beliebter städtischer Park in Dogana (Serravalle), ideal für Erholung und Spaziergänge.",
      hu: "Népszerű városi park Doganában (Serravalle), ideális pihenésre és sétákra.",
      ro: "Un parc urban popular în Dogana (Serravalle), ideal pentru recreere și plimbări.",
      en: "A popular urban park in Dogana (Serravalle), ideal for recreation and walks."
    },
    facts: {
      de: ["Der Park bietet viele Sport- und Freizeiteinrichtungen."],
      hu: ["A park számos sport- és szabadidős létesítményt kínál."],
      ro: ["Parcul oferă multe facilități sportive și de agrement."],
      en: ["The park offers many sports and recreational facilities."]
    },
    image: "/geo-images/sanmarino/nat-parco-ausa.webp"
  },
  {
    id: "nat-sentiero-rupe",
    type: "nature",
    parent: "country-sanmarino",
    coords: [12.4430, 43.9350],
    name: {
      de: "Rupe-Wanderweg",
      hu: "Rupe túraútvonal",
      ro: "Traseul Rupe",
      en: "Rupe Trail"
    },
    description: {
      de: "Ein malerischer Wanderweg entlang der Felsklippen des Monte Titano, der Borgo Maggiore mit der Hauptstadt verbindet.",
      hu: "Festői túraútvonal a Titano-hegy sziklái mentén, amely Borgo Maggiorét köti össze a fővárossal.",
      ro: "Un traseu pitoresc de-a lungul stâncilor Muntelui Titano, care leagă Borgo Maggiore de capitală.",
      en: "A scenic hiking trail along the cliffs of Mount Titano, connecting Borgo Maggiore with the capital."
    },
    facts: {
      de: ["Der Weg führt durch dichte Wälder und bietet steile Felswände."],
      hu: ["Az út sűrű erdőkön halad keresztül és meredek sziklafalakat kínál."],
      ro: ["Traseul trece prin păduri dese și oferă pereți abrupți de stâncă."],
      en: ["The trail passes through dense forests and features steep cliff faces."]
    },
    image: "/geo-images/sanmarino/nat-sentiero-rupe.webp"
  }
];

export const sanmarinoAllPoi: POI[] = [
  sanmarinoCountry,
  ...sanmarinoRegions,
  ...sanmarinoCities,
  ...sanmarinoCulture,
  ...sanmarinoNature
];
