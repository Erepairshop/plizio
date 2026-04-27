import type { POI } from "./poi";

export const poiExtraGreeceCities: POI[] = [
  {
    id: "city-pygos-extra",
    type: "city",
    parent: "GR-G",
    coords: [21.4404, 37.6753],
    name: { de: "Pyrgos", hu: "Pirgosz", ro: "Pyrgos", en: "Pyrgos" },
    description: {
      de: "Pyrgos ist die Hauptstadt von Elis in Westgriechenland, ein wichtiges landwirtschaftliches und kommerzielles Zentrum der Region.",
      hu: "Pirgosz a görögországi Élisz fővárosa, a régió fontos mezőgazdasági és kereskedelmi központja.",
      ro: "Pyrgos este capitala regiunii Elida din vestul Greciei, un centru agricol și comercial important al zonei.",
      en: "Pyrgos is the capital of Elis in Western Greece, an important agricultural and commercial center of the region."
    },
    facts: {
      de: ["Verwaltungszentrum der Region Elis.", "In der Nähe der antiken Stätte von Olympia.", "Wichtiger Verkehrsknotenpunkt."],
      hu: ["Élisz régió közigazgatási központja.", "Az ókori Olümpia közelében található.", "Fontos közlekedési csomópont."],
      ro: ["Centrul administrativ al regiunii Elida.", "Aproape de situl antic Olympia.", "Nod de transport important."],
      en: ["Administrative center of the Elis region.", "Close to the ancient site of Olympia.", "Important transportation hub."]
    }
  },
  {
    id: "city-corinth-extra",
    type: "city",
    parent: "GR-H",
    coords: [22.9371, 37.9322],
    name: { de: "Korinth", hu: "Korinthosz", ro: "Corint", en: "Corinth" },
    description: {
      de: "Das moderne Korinth liegt in der Nähe der antiken Stadt und des berühmten Kanals von Korinth.",
      hu: "A modern Korinthosz az ókori város és a híres Korinthoszi-csatorna közelében fekszik.",
      ro: "Orașul modern Corint este situat lângă orașul antic și faimosul Canal Corint.",
      en: "Modern Corinth is located near the ancient city and the famous Corinth Canal."
    },
    facts: {
      de: ["Nachfolger der antiken Stadt Korinth.", "Wichtiger Handelsknotenpunkt.", "Tor zur Halbinsel Peloponnes."],
      hu: ["Az ókori Korinthosz utódja.", "Fontos kereskedelmi csomópont.", "A Peloponnészoszi-félsziget kapuja."],
      ro: ["Succesorul orașului antic Corint.", "Nod comercial important.", "Poarta către peninsula Peloponez."],
      en: ["Successor to the ancient city of Corinth.", "Important commercial hub.", "Gateway to the Peloponnese peninsula."]
    }
  },
  {
    id: "city-aigio-extra",
    type: "city",
    parent: "GR-G",
    coords: [22.0831, 38.2536],
    name: { de: "Aigio", hu: "Egio", ro: "Aigio", en: "Aigio" },
    description: {
      de: "Eine Küstenstadt im Norden des Peloponnes am Golf von Korinth, bekannt für ihren Hafen und ihre Geschichte.",
      hu: "Észak-Peloponnészosz partmenti városa a Korinthoszi-öbölben, amely kikötőjéről és történelméről ismert.",
      ro: "Un oraș de coastă în nordul Peloponezului, la Golful Corint, cunoscut pentru portul și istoria sa.",
      en: "A coastal town in the northern Peloponnese on the Gulf of Corinth, known for its port and history."
    },
    facts: {
      de: ["Einer der ältesten Städte in Griechenland.", "Wichtiger Exporteur von Rosinen und Zitrusfrüchten.", "Schöne Aussicht auf den Golf von Korinth."],
      hu: ["Görögország egyik legrégebbi városa.", "Fontos mazsola- és citrusfélék exportőre.", "Gyönyörű kilátás a Korinthoszi-öbölre."],
      ro: ["Unul dintre cele mai vechi orașe din Grecia.", "Exportator important de stafide și citrice.", "Vederi frumoase ale Golfului Corint."],
      en: ["One of the oldest cities in Greece.", "Major exporter of raisins and citrus fruits.", "Beautiful views of the Gulf of Corinth."]
    }
  },
  {
    id: "city-megara-extra",
    type: "city",
    parent: "GR-I",
    coords: [23.3422, 37.9958],
    name: { de: "Megara", hu: "Megara", ro: "Megara", en: "Megara" },
    description: {
      de: "Eine antike Stadt westlich von Athen, die in der Antike für ihre Kolonien und ihre philosophische Schule bekannt war.",
      hu: "Egy Athéntól nyugatra fekvő ókori város, amely az ókorban gyarmatairól és filozófiai iskolájáról volt híres.",
      ro: "Un oraș antic la vest de Atena, faimos în antichitate pentru coloniile și școala sa filozofică.",
      en: "An ancient city west of Athens, famous in antiquity for its colonies and its school of philosophy."
    },
    facts: {
      de: ["Wichtiger Stadtstaat im antiken Griechenland.", "Heimat der Megarischen Schule der Philosophie.", "Landwirtschaftliches Zentrum in der modernen Zeit."],
      hu: ["Jelentős városállam az ókori Görögországban.", "A megarai filozófiai iskola otthona.", "Mezőgazdasági központ a modern korban."],
      ro: ["Oraș-stat important în Grecia antică.", "Casa Școlii Megariene de filozofie.", "Centru agricol în vremurile moderne."],
      en: ["Important city-state in ancient Greece.", "Home to the Megarian school of philosophy.", "Agricultural center in modern times."]
    }
  },
  {
    id: "city-chalcis-extra",
    type: "city",
    parent: "GR-H",
    coords: [23.5960, 38.4626],
    name: { de: "Chalkida", hu: "Halkída", ro: "Chalkida", en: "Chalcis" },
    description: {
      de: "Chalkida, die Hauptstadt der Insel Euböa, ist berühmt für das einzigartige Gezeitenphänomen der Euripus-Straße.",
      hu: "Halkída, Euboia sziget fővárosa, híres az Euriposz-szoros egyedülálló árapály-jelenségéről.",
      ro: "Chalkida, capitala insulei Evia, este renumită pentru fenomenul unic de maree al Strâmtorii Euripus.",
      en: "Chalcis, the capital of the island of Euboea, is famous for the unique tidal phenomenon of the Euripus Strait."
    },
    facts: {
      de: ["Hauptstadt von Euböa.", "Standort der Euripus-Brücke.", "Die Gezeiten ändern alle sechs Stunden die Richtung."],
      hu: ["Euboia fővárosa.", "Az Euriposz-híd helyszíne.", "Az árapály hatóránként irányt változtat."],
      ro: ["Capitala insulei Evia.", "Locația Podului Euripus.", "Maree își schimbă direcția la fiecare șase ore."],
      en: ["Capital of Euboea.", "Site of the Euripus Bridge.", "The tides change direction every six hours."]
    }
  },
  {
    id: "city-thebes-extra",
    type: "city",
    parent: "GR-H",
    coords: [23.3167, 38.3167],
    name: { de: "Theben", hu: "Théba", ro: "Teba", en: "Thebes" },
    description: {
      de: "Eine antike Stadt in Böotien, die eine zentrale Rolle in der griechischen Mythologie und Geschichte spielte.",
      hu: "Egy ókori város Boiótiában, amely központi szerepet játszott a görög mitológiában és történelemben.",
      ro: "Un oraș antic din Beoția, care a jucat un rol central în mitologia și istoria greacă.",
      en: "An ancient city in Boeotia that played a central role in Greek mythology and history."
    },
    facts: {
      de: ["Schauplatz vieler griechischer Mythen, einschließlich des Ödipus-Mythos.", "Einst ein Rivale von Athen und Sparta.", "Archäologisches Museum mit wichtigen Funden."],
      hu: ["Számos görög mítosz helyszíne, köztük az Oidipusz-mítoszé.", "Valaha Athén és Spárta riválisa volt.", "Régészeti múzeum fontos leletekkel."],
      ro: ["Scena multor mituri grecești, inclusiv mitul lui Oedip.", "Odinioară rival al Atenei și Spartei.", "Muzeu arheologic cu descoperiri importante."],
      en: ["The setting of many Greek myths, including the myth of Oedipus.", "Once a rival to Athens and Sparta.", "Archaeological museum with important finds."]
    }
  },
  {
    id: "city-livadeia-extra",
    type: "city",
    parent: "GR-H",
    coords: [22.8753, 38.4358],
    name: { de: "Livadeia", hu: "Levédia", ro: "Livadeia", en: "Livadeia" },
    description: {
      de: "Die Hauptstadt von Böotien, bekannt für das Orakel von Trophonios in der Antike und die malerische Schlucht des Flusses Hercyna.",
      hu: "Boiótia fővárosa, az ókorban a Trophóniosz-jóshelyéről, ma pedig a Hercyna folyó festői szurdokjáról ismert.",
      ro: "Capitala Beoției, cunoscută pentru oracolul lui Trophonius în antichitate și pentru defileul pitoresc al râului Hercyna.",
      en: "The capital of Boeotia, known for the oracle of Trophonius in antiquity and the scenic gorge of the Hercyna river."
    },
    facts: {
      de: ["Hauptstadt von Böotien.", "Antikes Orakel von Trophonios.", "Bekannt für seine Wollproduktion."],
      hu: ["Boiótia fővárosa.", "Az ókori Trophóniosz jóshelye.", "Gyapjútermeléséről ismert."],
      ro: ["Capitala Beoției.", "Oracolul antic al lui Trophonius.", "Cunoscut pentru producția de lână."],
      en: ["Capital of Boeotia.", "Ancient Oracle of Trophonius.", "Known for its wool production."]
    }
  },
  {
    id: "city-lamia-extra",
    type: "city",
    parent: "GR-H",
    coords: [22.4333, 38.9000],
    name: { de: "Lamia", hu: "Lamia", ro: "Lamia", en: "Lamia" },
    description: {
      de: "Die Hauptstadt von Phthiotis in Zentralgriechenland, überragt von einer mittelalterlichen Burg mit einer Geschichte, die bis in die Antike zurückreicht.",
      hu: "Fthiotisz fővárosa Közép-Görögországban, amely fölött egy középkori vár magasodik, melynek története az ókorba nyúlik vissza.",
      ro: "Capitala Ftiotidei din Grecia Centrală, dominată de un castel medieval cu o istorie ce datează din antichitate.",
      en: "The capital of Phthiotis in Central Greece, dominated by a medieval castle with a history dating back to antiquity."
    },
    facts: {
      de: ["Hauptstadt der Präfektur Phthiotis.", "Eine mittelalterliche Festung überblickt die Stadt.", "Wichtiger Verkehrsknotenpunkt in Zentralgriechenland."],
      hu: ["Fthiotisz prefektúra fővárosa.", "Középkori erődítmény néz le a városra.", "Fontos közlekedési csomópont Közép-Görögországban."],
      ro: ["Capitala prefecturii Ftiotida.", "O fortăreață medievală domină orașul.", "Nod de transport important în Grecia Centrală."],
      en: ["Capital of the Phthiotis prefecture.", "A medieval fortress overlooks the city.", "Important transport hub in Central Greece."]
    }
  },
  {
    id: "city-karditsa-extra",
    type: "city",
    parent: "GR-F",
    coords: [21.9225, 39.3644],
    name: { de: "Karditsa", hu: "Kardíca", ro: "Karditsa", en: "Karditsa" },
    description: {
      de: "Bekannt als eine der fahrradfreundlichsten Städte Griechenlands, mit einem ausgedehnten Netz von Radwegen.",
      hu: "Görögország egyik leginkább kerékpárbarát városaként ismert, kiterjedt kerékpárút-hálózattal.",
      ro: "Cunoscut ca unul dintre cele mai prietenoase orașe pentru biciclete din Grecia, cu o rețea extinsă de piste pentru biciclete.",
      en: "Known as one of the most bicycle-friendly cities in Greece, with an extensive network of bike lanes."
    },
    facts: {
      de: ["Fahrradfreundliche Stadt.", "Landwirtschaftliches Zentrum der thessalischen Ebene.", "Nahe dem Plastiras-See gelegen."],
      hu: ["Kerékpárbarát város.", "A thesszáliai síkság mezőgazdasági központja.", "A Plasztirasz-tó közelében található."],
      ro: ["Oraș prietenos cu bicicletele.", "Centru agricol al Câmpiei Tesaliene.", "Situat lângă Lacul Plastiras."],
      en: ["Bicycle-friendly city.", "Agricultural center of the Thessalian Plain.", "Located near Lake Plastiras."]
    }
  },
  {
    id: "city-igoumenitsa-extra",
    type: "city",
    parent: "GR-E",
    coords: [20.2656, 39.5064],
    name: { de: "Igoumenitsa", hu: "Igumeníca", ro: "Igoumenitsa", en: "Igoumenitsa" },
    description: {
      de: "Ein wichtiger Fährhafen in Westgriechenland, der Griechenland mit Italien und den Ionischen Inseln verbindet.",
      hu: "Fontos kompkikötő Nyugat-Görögországban, amely összeköti Görögországot Olaszországgal és a Jón-szigetekkel.",
      ro: "Un port important de feriboturi în vestul Greciei, care leagă Grecia de Italia și Insulele Ionice.",
      en: "A major ferry port in western Greece, connecting Greece with Italy and the Ionian Islands."
    },
    facts: {
      de: ["Haupthafen für Westgriechenland.", "Verbindet Griechenland mit Italien.", "Tor zur Region Epirus."],
      hu: ["Nyugat-Görögország fő kikötője.", "Összeköti Görögországot Olaszországgal.", "Az Epirusz régió kapuja."],
      ro: ["Portul principal pentru vestul Greciei.", "Leagă Grecia de Italia.", "Poarta către regiunea Epirus."],
      en: ["Main port for western Greece.", "Connects Greece to Italy.", "Gateway to the Epirus region."]
    }
  },
  {
    id: "city-preveza-extra",
    type: "city",
    parent: "GR-E",
    coords: [20.7522, 38.9553],
    name: { de: "Preveza", hu: "Préveza", ro: "Preveza", en: "Preveza" },
    description: {
      de: "Eine Stadt am Eingang des Ambrakischen Golfs, bekannt für ihre malerische Uferpromenade und die nahe gelegene antike Stadt Nikopolis.",
      hu: "Az Amvrakiai-öböl bejáratánál fekvő város, amely festői sétányáról és a közeli ókori Nikopolisz városáról ismert.",
      ro: "Un oraș la intrarea în Golful Ambracian, cunoscut pentru promenada sa pitorească și orașul antic din apropiere, Nicopolis.",
      en: "A town at the entrance of the Ambracian Gulf, known for its picturesque waterfront and the nearby ancient city of Nicopolis."
    },
    facts: {
      de: ["In der Nähe der antiken Stätte von Nikopolis.", "Eingang zum Ambrakischen Golf.", "Unterwassertunnel verbindet es mit Actium."],
      hu: ["Az ókori Nikopolisz közelében.", "Az Amvrakiai-öböl bejárata.", "Vízalatti alagút köti össze Actiummal."],
      ro: ["Aproape de situl antic Nicopolis.", "Intrarea în Golful Ambracian.", "Tunel subacvatic îl leagă de Actium."],
      en: ["Near the ancient site of Nicopolis.", "Entrance to the Ambracian Gulf.", "Underwater tunnel connects it to Actium."]
    }
  },
  {
    id: "city-lefkada-extra",
    type: "city",
    parent: "GR-F",
    coords: [20.7107, 38.8310],
    name: { de: "Lefkada Stadt", hu: "Lefkáda város", ro: "Orașul Lefkada", en: "Lefkada Town" },
    description: {
      de: "Die Hauptstadt der Insel Lefkada, die durch eine Brücke mit dem Festland verbunden ist. Bekannt für ihre bunten Gebäude und die venezianische Festung.",
      hu: "Lefkáda sziget fővárosa, amelyet híd köt össze a szárazfölddel. Színes épületeiről és velencei erődjéről ismert.",
      ro: "Capitala insulei Lefkada, conectată la continent printr-un pod. Cunoscută pentru clădirile sale colorate și fortăreața venețiană.",
      en: "The capital of Lefkada island, connected to the mainland by a bridge. Known for its colorful buildings and Venetian fortress."
    },
    facts: {
      de: ["Hauptstadt der Insel Lefkada.", "Durch eine bewegliche Brücke mit dem Festland verbunden.", "In der Nähe berühmter Strände wie Porto Katsiki."],
      hu: ["Lefkáda sziget fővárosa.", "Mozgatható híd köti össze a szárazfölddel.", "Híres strandok, mint a Porto Katsiki, közelében."],
      ro: ["Capitala insulei Lefkada.", "Conectată la continent printr-un pod mobil.", "Aproape de plaje faimoase precum Porto Katsiki."],
      en: ["Capital of Lefkada island.", "Connected to the mainland by a floating bridge.", "Near famous beaches like Porto Katsiki."]
    }
  },
  {
    id: "city-argostoli-extra",
    type: "city",
    parent: "GR-F",
    coords: [20.4897, 38.1738],
    name: { de: "Argostoli", hu: "Argostoli", ro: "Argostoli", en: "Argostoli" },
    description: {
      de: "Die Hauptstadt der Insel Kefalonia, gelegen in einer geschützten Bucht. Nach dem Erdbeben von 1953 wieder aufgebaut.",
      hu: "Kefalónia sziget fővárosa, egy védett öbölben található. Az 1953-as földrengés után újjáépítették.",
      ro: "Capitala insulei Kefalonia, situată într-un golf adăpostit. Reconstruită după cutremurul din 1953.",
      en: "The capital of Kefalonia island, located in a sheltered bay. Rebuilt after the 1953 earthquake."
    },
    facts: {
      de: ["Hauptstadt der Insel Kefalonia.", "Nach dem Erdbeben von 1953 wieder aufgebaut.", "De-Bosset-Brücke ist eine Hauptattraktion."],
      hu: ["Kefalónia sziget fővárosa.", "Az 1953-as földrengés után újjáépítették.", "A De Bosset-híd az egyik fő látványosság."],
      ro: ["Capitala insulei Kefalonia.", "Reconstruit după cutremurul din 1953.", "Podul De Bosset este o atracție principală."],
      en: ["Capital of Kefalonia island.", "Rebuilt after the 1953 earthquake.", "De Bosset Bridge is a main attraction."]
    }
  },
  {
    id: "city-zakynthos-extra",
    type: "city",
    parent: "GR-F",
    coords: [20.9045, 37.7850],
    name: { de: "Zakynthos Stadt", hu: "Zákinthosz város", ro: "Orașul Zakynthos", en: "Zakynthos Town" },
    description: {
      de: "Die Hauptstadt der Insel Zakynthos, bekannt für ihren venezianischen Einfluss in der Architektur und den geschäftigen Hafen.",
      hu: "Zákinthosz sziget fővárosa, amely az építészetében megfigyelhető velencei hatásról és forgalmas kikötőjéről ismert.",
      ro: "Capitala insulei Zakynthos, cunoscută pentru influența venețiană în arhitectură și portul său aglomerat.",
      en: "The capital of Zakynthos island, known for its Venetian influence in architecture and its busy harbor."
    },
    facts: {
      de: ["Hauptstadt der Insel Zakynthos.", "Hafen ist Tor zur berühmten Schiffswrack-Bucht.", "Solomos-Platz ist der zentrale Platz."],
      hu: ["Zákinthosz sziget fővárosa.", "A kikötő a híres Navagio-öböl kapuja.", "A Szolomos-tér a központi tér."],
      ro: ["Capitala insulei Zakynthos.", "Portul este poarta de acces către faimoasa plajă Navagio.", "Piața Solomos este piața centrală."],
      en: ["Capital of Zakynthos island.", "Harbor is the gateway to the famous Shipwreck Beach.", "Solomos Square is the main town square."]
    }
  },
  {
    id: "city-hermoupolis-extra",
    type: "city",
    parent: "GR-L",
    coords: [24.9431, 37.4449],
    name: { de: "Ermoupoli", hu: "Ermúpoli", ro: "Ermoupoli", en: "Ermoupoli" },
    description: {
      de: "Die Hauptstadt der Kykladen auf der Insel Syros, bekannt für ihre neoklassizistische Architektur und ihre maritime Geschichte.",
      hu: "A Kükládok fővárosa Szírosz szigetén, amely neoklasszikus építészetéről és tengerészeti történelméről ismert.",
      ro: "Capitala Cicladelor, pe insula Syros, cunoscută pentru arhitectura sa neoclasică și istoria maritimă.",
      en: "The capital of the Cyclades on the island of Syros, known for its neoclassical architecture and maritime history."
    },
    facts: {
      de: ["Hauptstadt der Kykladen.", "Einst der Haupthafen Griechenlands.", "Beeindruckendes Rathaus von Ernst Ziller entworfen."],
      hu: ["A Kükládok fővárosa.", "Valaha Görögország fő kikötője volt.", "Ernst Ziller által tervezett lenyűgöző városháza."],
      ro: ["Capitala Cicladelor.", "Odinioară principalul port al Greciei.", "Primărie impresionantă proiectată de Ernst Ziller."],
      en: ["Capital of the Cyclades.", "Once the main port of Greece.", "Impressive town hall designed by Ernst Ziller."]
    }
  },
  {
    id: "city-mytilene-extra",
    type: "city",
    parent: "GR-L",
    coords: [26.5569, 39.1103],
    name: { de: "Mytilini", hu: "Mytilíni", ro: "Mytilene", en: "Mytilene" },
    description: {
      de: "Die Hauptstadt der Insel Lesbos, mit einer großen Festung und einem lebhaften Hafen. Bekannt für ihre Ouzo-Produktion.",
      hu: "Leszbosz sziget fővárosa, nagy erőddel és élénk kikötővel. Ouzogyártásáról ismert.",
      ro: "Capitala insulei Lesbos, cu o fortăreață mare și un port plin de viață. Cunoscută pentru producția de ouzo.",
      en: "The capital of Lesbos island, with a large fortress and a lively harbor. Known for its ouzo production."
    },
    facts: {
      de: ["Hauptstadt der Insel Lesbos.", "Heimat der Ägäis-Universität.", "Eine der größten Festungen im Mittelmeer."],
      hu: ["Leszbosz sziget fővárosa.", "Az Égei-tengeri Egyetem otthona.", "A Földközi-tenger egyik legnagyobb erődje."],
      ro: ["Capitala insulei Lesbos.", "Sediul Universității din Marea Egee.", "Una dintre cele mai mari fortărețe din Mediterana."],
      en: ["Capital of Lesbos island.", "Home to the University of the Aegean.", "One of the largest fortresses in the Mediterranean."]
    }
  },
  {
    id: "city-chios-extra",
    type: "city",
    parent: "GR-L",
    coords: [26.1364, 38.3681],
    name: { de: "Chios Stadt", hu: "Híosz város", ro: "Orașul Chios", en: "Chios Town" },
    description: {
      de: "Die Hauptstadt der Insel Chios, bekannt für ihre mittelalterliche Burg und die einzigartige Produktion von Mastix.",
      hu: "Híosz sziget fővárosa, amely középkori váráról és egyedülálló masztixtermeléséről ismert.",
      ro: "Capitala insulei Chios, cunoscută pentru castelul său medieval și producția unică de mastic.",
      en: "The capital of Chios island, known for its medieval castle and the unique production of mastic."
    },
    facts: {
      de: ["Hauptstadt der Insel Chios.", "Zentrum der Mastixproduktion.", "Mittelalterliches Dorf 'Kastro' innerhalb der Stadtmauern."],
      hu: ["Híosz sziget fővárosa.", "A masztixtermelés központja.", "Középkori falu, 'Kastro', a városfalakon belül."],
      ro: ["Capitala insulei Chios.", "Centrul producției de mastic.", "Satul medieval 'Kastro' în interiorul zidurilor orașului."],
      en: ["Capital of Chios island.", "Center of mastic production.", "Medieval village 'Kastro' inside the city walls."]
    }
  },
  {
    id: "city-samos-extra",
    type: "city",
    parent: "GR-L",
    coords: [26.9725, 37.7897],
    name: { de: "Samos Stadt (Vathy)", hu: "Számosz város (Vathi)", ro: "Orașul Samos (Vathy)", en: "Samos Town (Vathy)" },
    description: {
      de: "Die Hauptstadt der Insel Samos, erbaut um eine große, amphitheatrische Bucht. Bekannt für ihren Süßwein.",
      hu: "Számosz sziget fővárosa, amely egy nagy, amfiteátrumszerű öböl köré épült. Édes boráról ismert.",
      ro: "Capitala insulei Samos, construită în jurul unui golf mare, amfiteatric. Cunoscută pentru vinul său dulce.",
      en: "The capital of Samos island, built around a large, amphitheatrical bay. Known for its sweet wine."
    },
    facts: {
      de: ["Hauptstadt der Insel Samos.", "Einer der ältesten und tiefsten natürlichen Häfen im Mittelmeer.", "Berühmt für den Muskatwein."],
      hu: ["Számosz sziget fővárosa.", "A Földközi-tenger egyik legrégebbi és legmélyebb természetes kikötője.", "Híres a muskotályboráról."],
      ro: ["Capitala insulei Samos.", "Unul dintre cele mai vechi și mai adânci porturi naturale din Mediterana.", "Faimos pentru vinul Muscat."],
      en: ["Capital of Samos island.", "One of the oldest and deepest natural harbors in the Mediterranean.", "Famous for its Muscat wine."]
    }
  },
  {
    id: "city-kos-extra",
    type: "city",
    parent: "GR-M",
    coords: [27.2872, 36.8931],
    name: { de: "Kos Stadt", hu: "Kosz város", ro: "Orașul Kos", en: "Kos Town" },
    description: {
      de: "Die Hauptstadt der Insel Kos, bekannt für ihre reiche Geschichte, einschließlich der Platane des Hippokrates und der Johanniterburg.",
      hu: "Kosz sziget fővárosa, amely gazdag történelméről, többek között Hippokratész platánfájáról és a lovagváról ismert.",
      ro: "Capitala insulei Kos, cunoscută pentru istoria sa bogată, inclusiv Platanul lui Hipocrate și Castelul Cavalerilor.",
      en: "The capital of Kos island, known for its rich history, including the Plane Tree of Hippocrates and the Castle of the Knights."
    },
    facts: {
      de: ["Hauptstadt der Insel Kos.", "Heimat von Hippokrates, dem Vater der Medizin.", "Neratzia-Burg bewacht den Hafen."],
      hu: ["Kosz sziget fővárosa.", "Hippokratész, az orvostudomány atyjának otthona.", "A Neratzia-vár őrzi a kikötőt."],
      ro: ["Capitala insulei Kos.", "Casa lui Hipocrate, părintele medicinei.", "Castelul Neratzia păzește portul."],
      en: ["Capital of Kos island.", "Home of Hippocrates, the father of medicine.", "Neratzia Castle guards the harbor."]
    }
  },
  {
    id: "city-polygyros-extra",
    type: "city",
    parent: "GR-C",
    coords: [23.3653, 40.3444],
    name: { de: "Polygyros", hu: "Polígirosz", ro: "Polygyros", en: "Polygyros" },
    description: {
      de: "Die Hauptstadt von Chalkidiki, amphitheatralisch am Fuße des Berges Cholomontas erbaut.",
      hu: "Halkidikí fővárosa, amfiteátrumszerűen épült a Holomontasz-hegy lábánál.",
      ro: "Capitala regiunii Halkidiki, construită în formă de amfiteatru la poalele Muntelui Cholomontas.",
      en: "The capital of Halkidiki, built amphitheatrically at the foot of Mount Cholomontas."
    },
    facts: {
      de: ["Hauptstadt der Präfektur Chalkidiki.", "Amphitheatralisch gebaut.", "Archäologisches Museum mit Funden aus der gesamten Region."],
      hu: ["Halkidikí prefektúra fővárosa.", "Amfiteátrumszerűen épült.", "Régészeti múzeum a régió minden tájáról származó leletekkel."],
      ro: ["Capitala prefecturii Halkidiki.", "Construit în formă de amfiteatru.", "Muzeu arheologic cu descoperiri din întreaga regiune."],
      en: ["Capital of the Halkidiki prefecture.", "Built amphitheatrically.", "Archaeological Museum with finds from all over the region."]
    }
  },
  {
    id: "city-kilkis-extra",
    type: "city",
    parent: "GR-C",
    coords: [22.8736, 40.9950],
    name: { de: "Kilkis", hu: "Kilkis", ro: "Kilkis", en: "Kilkis" },
    description: {
      de: "Eine Stadt in Zentralmakedonien, bekannt für das Archäologische Museum und das Kriegsmuseum von Kilkis.",
      hu: "Város Közép-Makedóniában, amely a Kilkisi Régészeti Múzeumról és a Kilkisi Háborús Múzeumról ismert.",
      ro: "Un oraș din Macedonia Centrală, cunoscut pentru Muzeul Arheologic și Muzeul de Război din Kilkis.",
      en: "A city in Central Macedonia, known for the Archaeological Museum and the War Museum of Kilkis."
    },
    facts: {
      de: ["Hauptstadt der regionalen Einheit Kilkis.", "Wichtige Schlacht im Zweiten Balkankrieg.", "Höhle des Heiligen Georg ist eine Touristenattraktion."],
      hu: ["Kilkis regionális egység fővárosa.", "A második balkáni háború fontos csatájának helyszíne.", "A Szent György-barlang turisztikai látványosság."],
      ro: ["Capitala unității regionale Kilkis.", "Bătălie importantă în al Doilea Război Balcanic.", "Peștera Sfântului Gheorghe este o atracție turistică."],
      en: ["Capital of the Kilkis regional unit.", "Site of a major battle in the Second Balkan War.", "Cave of Saint George is a tourist attraction."]
    }
  },
  {
    id: "city-drama-extra",
    type: "city",
    parent: "GR-B",
    coords: [24.1481, 41.1511],
    name: { de: "Drama", hu: "Dráma", ro: "Drama", en: "Drama" },
    description: {
      de: "Eine Stadt im Nordosten Griechenlands mit einer reichen Geschichte und einer wunderschönen natürlichen Umgebung, einschließlich der Agia-Varvara-Quellen.",
      hu: "Város Görögország északkeleti részén, gazdag történelemmel és gyönyörű természeti környezettel, többek között az Agia Varvara forrásokkal.",
      ro: "Un oraș din nord-estul Greciei, cu o istorie bogată și un mediu natural frumos, inclusiv izvoarele Agia Varvara.",
      en: "A city in northeastern Greece with a rich history and beautiful natural surroundings, including the Agia Varvara springs."
    },
    facts: {
      de: ["Hauptstadt der regionalen Einheit Drama.", "Bekannt für seine Wasserquellen und Parks.", "Jährliches Kurzfilmfestival."],
      hu: ["Dráma regionális egység fővárosa.", "Vízforrásairól és parkjairól ismert.", "Évente megrendezett rövidfilmfesztivál."],
      ro: ["Capitala unității regionale Drama.", "Cunoscut pentru izvoarele și parcurile sale.", "Festival anual de scurtmetraje."],
      en: ["Capital of the Drama regional unit.", "Known for its water springs and parks.", "Annual short film festival."]
    }
  },
  {
    id: "city-rhodes-city-extra",
    type: "city",
    parent: "GR-M",
    coords: [28.2225, 36.4449],
    name: { de: "Rhodos Stadt", hu: "Rodosz város", ro: "Orașul Rhodos", en: "Rhodes City" },
    description: {
      de: "Die Hauptstadt der Insel Rhodos, bekannt für ihre zum UNESCO-Weltkulturerbe gehörende mittelalterliche Stadt, die vom Johanniterorden erbaut wurde.",
      hu: "Rodosz sziget fővárosa, amely az UNESCO Világörökség részét képező, a Johannita Lovagrend által épített középkori városáról ismert.",
      ro: "Capitala insulei Rhodos, cunoscută pentru Orașul său Medieval, inclus în Patrimoniul Mondial UNESCO, construit de Cavalerii Sfântului Ioan.",
      en: "The capital of Rhodes island, known for its UNESCO World Heritage medieval city built by the Knights of Saint John."
    },
    facts: {
      de: ["UNESCO-Weltkulturerbe.", "Palast des Großmeisters.", "Straße der Ritter ist eine der am besten erhaltenen mittelalterlichen Straßen."],
      hu: ["UNESCO Világörökség része.", "Nagymesteri palota.", "A Lovagok utcája az egyik legjobb állapotban megmaradt középkori utca."],
      ro: ["Sit al Patrimoniului Mondial UNESCO.", "Palatul Marelui Maestru.", "Strada Cavalerilor este una dintre cele mai bine conservate străzi medievale."],
      en: ["UNESCO World Heritage site.", "Palace of the Grand Master.", "Street of the Knights is one of the best-preserved medieval streets."]
    }
  },
  {
    id: "city-agios-nikolaos-extra",
    type: "city",
    parent: "GR-M",
    coords: [25.7161, 35.1911],
    name: { de: "Agios Nikolaos", hu: "Ágiosz Nikólaosz", ro: "Agios Nikolaos", en: "Agios Nikolaos" },
    description: {
      de: "Eine Küstenstadt auf Kreta, berühmt für den Voulismeni-See, einen tiefen See, der mit dem Meer verbunden ist und im Zentrum der Stadt liegt.",
      hu: "Kréta partmenti városa, amely a Voulismeni-tóról híres, egy mély tóról, amely összeköttetésben áll a tengerrel és a város központjában található.",
      ro: "Un oraș de coastă din Creta, renumit pentru Lacul Voulismeni, un lac adânc conectat la mare, situat în centrul orașului.",
      en: "A coastal town in Crete, famous for Lake Voulismeni, a deep body of water connected to the sea, located in the town center."
    },
    facts: {
      de: ["Hauptstadt der regionalen Einheit Lasithi.", "Der Voulismeni-See ist ein lokales Wahrzeichen.", "Malerischer Hafen und Uferpromenade."],
      hu: ["Lasithi regionális egység fővárosa.", "A Voulismeni-tó helyi nevezetesség.", "Festői kikötő és sétány."],
      ro: ["Capitala unității regionale Lasithi.", "Lacul Voulismeni este un punct de atracție local.", "Port și faleză pitorești."],
      en: ["Capital of the Lasithi regional unit.", "Lake Voulismeni is a local landmark.", "Picturesque harbor and waterfront."]
    }
  },
  {
    id: "city-naxos-city-extra",
    type: "city",
    parent: "GR-L",
    coords: [25.3764, 37.1056],
    name: { de: "Naxos Stadt (Chora)", hu: "Naxosz város (Chora)", ro: "Orașul Naxos (Chora)", en: "Naxos City (Chora)" },
    description: {
      de: "Die Hauptstadt der Insel Naxos, bekannt für das Portara, das massive Tor eines unvollendeten antiken Tempels, und die Altstadt Kastro.",
      hu: "Naxosz sziget fővárosa, amely a Portaráról, egy befejezetlen ókori templom hatalmas kapujáról és a Kastro óvárosról ismert.",
      ro: "Capitala insulei Naxos, cunoscută pentru Portara, poarta masivă a unui templu antic neterminat, și pentru orașul vechi, Kastro.",
      en: "The capital of Naxos island, known for the Portara, the massive gate of an unfinished ancient temple, and the old Kastro district."
    },
    facts: {
      de: ["Größte Stadt der Insel Naxos.", "Portara-Tor ist das Wahrzeichen der Insel.", "Venezianisches Kastro (Burg) überblickt die Stadt."],
      hu: ["Naxosz sziget legnagyobb városa.", "A Portara-kapu a sziget jelképe.", "A velencei Kastro (vár) uralja a várost."],
      ro: ["Cel mai mare oraș de pe insula Naxos.", "Poarta Portara este simbolul insulei.", "Kastro (castelul) venețian domină orașul."],
      en: ["Largest town on Naxos island.", "Portara gate is the island's landmark.", "Venetian Kastro (castle) overlooks the town."]
    }
  },
  {
    id: "city-parikia-extra",
    type: "city",
    parent: "GR-L",
    coords: [25.1513, 37.0856],
    name: { de: "Parikia", hu: "Parikia", ro: "Parikia", en: "Parikia" },
    description: {
      de: "Die Hauptstadt und der Haupthafen der Insel Paros, bekannt für die Kirche Panagia Ekatontapiliani aus dem 4. Jahrhundert.",
      hu: "Párosz sziget fővárosa és fő kikötője, amely a 4. századi Panagia Ekatontapiliani templomról ismert.",
      ro: "Capitala și portul principal al insulei Paros, cunoscut pentru biserica Panagia Ekatontapiliani, datând din secolul al IV-lea.",
      en: "The capital and main port of Paros island, known for the 4th-century church of Panagia Ekatontapiliani."
    },
    facts: {
      de: ["Hauptstadt der Insel Paros.", "Panagia Ekatontapiliani (Kirche der 100 Türen).", "Wichtiger Fährhafen der Kykladen."],
      hu: ["Párosz sziget fővárosa.", "Panagia Ekatontapiliani (a 100 kapu temploma).", "Fontos kompkikötő a Kükládokon."],
      ro: ["Capitala insulei Paros.", "Panagia Ekatontapiliani (Biserica celor 100 de Porți).", "Port important de feriboturi în Ciclade."],
      en: ["Capital of Paros island.", "Panagia Ekatontapiliani (Church of 100 Doors).", "Major ferry hub in the Cyclades."]
    }
  },
  {
    id: "city-fira-extra",
    type: "city",
    parent: "GR-L",
    coords: [25.4312, 36.4172],
    name: { de: "Fira", hu: "Fira", ro: "Fira", en: "Fira" },
    description: {
      de: "Die Hauptstadt von Santorin, dramatisch am Rande einer 400 Meter hohen Caldera gelegen, bekannt für ihre weißen Häuser und blauen Kuppeln.",
      hu: "Szantorini fővárosa, drámai helyen, egy 400 méter magas kaldera peremén, fehér házairól és kék kupoláiról ismert.",
      ro: "Capitala insulei Santorini, situată dramatic pe marginea unei caldeire de 400 m, renumită pentru casele sale albe și cupolele albastre.",
      en: "The capital of Santorini, perched dramatically on the edge of a 400m high caldera, famous for its white houses and blue domes."
    },
    facts: {
      de: ["Hauptstadt von Santorin.", "Blick auf die Caldera und den Vulkan.", "Museum des prähistorischen Thera."],
      hu: ["Szantorini fővárosa.", "Kilátás a kalderára és a vulkánra.", "A Prehisztorikus Théra Múzeuma."],
      ro: ["Capitala insulei Santorini.", "Vedere spre caldeiră și vulcan.", "Muzeul Preistoric din Thera."],
      en: ["Capital of Santorini.", "Views of the caldera and volcano.", "Museum of Prehistoric Thera."]
    }
  },
  {
    id: "city-oia-extra",
    type: "city",
    parent: "GR-L",
    coords: [25.3755, 36.4619],
    name: { de: "Oia", hu: "Oia", ro: "Oia", en: "Oia" },
    description: {
      de: "Ein malerisches Dorf auf Santorin, weltberühmt für seine atemberaubenden Sonnenuntergänge und seine charmanten, weiß getünchten Gassen.",
      hu: "Festői falu Szantorinin, világhírű a lélegzetelállító naplementéiről és bájos, fehérre meszelt sikátorairól.",
      ro: "Un sat pitoresc din Santorini, renumit în întreaga lume pentru apusurile sale uluitoare și aleile sale fermecătoare, văruite în alb.",
      en: "A picturesque village in Santorini, world-famous for its breathtaking sunsets and charming whitewashed alleys."
    },
    facts: {
      de: ["Berühmt für seine Sonnenuntergänge.", "Künstlerisches Dorf mit vielen Galerien.", "Liegt an der Nordspitze von Santorin."],
      hu: ["Híres a naplementéiről.", "Művészfalu sok galériával.", "Szantorini északi csücskén található."],
      ro: ["Faimos pentru apusurile sale.", "Sat artistic cu multe galerii de artă.", "Situat la vârful nordic al insulei Santorini."],
      en: ["Famous for its sunsets.", "Artistic village with many galleries.", "Located on the northern tip of Santorini."]
    }
  },
  {
    id: "city-mykonos-town-extra",
    type: "city",
    parent: "GR-L",
    coords: [25.3289, 37.4452],
    name: { de: "Mykonos Stadt (Chora)", hu: "Míkonosz város (Chora)", ro: "Orașul Mykonos (Chora)", en: "Mykonos Town (Chora)" },
    description: {
      de: "Die Hauptattraktion von Mykonos mit ihren ikonischen Windmühlen, dem Viertel Klein-Venedig und einem pulsierenden Nachtleben.",
      hu: "Míkonosz fő vonzereje az ikonikus szélmalmokkal, a Kis Velence negyeddel és a nyüzsgő éjszakai élettel.",
      ro: "Atracția principală din Mykonos, cu morile sale de vânt iconice, cartierul Mica Veneție și o viață de noapte vibrantă.",
      en: "The main hub of Mykonos, with its iconic windmills, Little Venice quarter, and vibrant nightlife."
    },
    facts: {
      de: ["Ikonische Windmühlen.", "Klein-Venedig mit Bars am Wasser.", "Bekannt für sein lebhaftes Nachtleben."],
      hu: ["Ikonikus szélmalmok.", "Kis Velence vízparti bárjaival.", "Élénk éjszakai életéről ismert."],
      ro: ["Mori de vânt iconice.", "Mica Veneție cu baruri pe malul apei.", "Cunoscut pentru viața de noapte animată."],
      en: ["Iconic windmills.", "Little Venice with waterfront bars.", "Known for its lively nightlife."]
    }
  },
  {
    id: "city-edipsos-extra",
    type: "city",
    parent: "GR-H",
    coords: [23.0500, 38.8500],
    name: { de: "Edipsos", hu: "Edipszosz", ro: "Edipsos", en: "Edipsos" },
    description: {
      de: "Ein berühmter Kurort im Norden von Euböa, bekannt für seine heißen Heilquellen, die seit der Antike genutzt werden.",
      hu: "Híres gyógyfürdőváros Euboia északi részén, amely az ókor óta használt gyógyhatású forró forrásairól ismert.",
      ro: "Un faimos oraș balnear din nordul Eviei, cunoscut pentru izvoarele sale termale vindecătoare, folosite încă din antichitate.",
      en: "A famous spa town in northern Euboea, known for its healing hot springs used since antiquity."
    },
    facts: {
      de: ["Berühmter Kurort.", "Über 80 Thermalquellen.", "Zieht seit der Römerzeit Besucher an."],
      hu: ["Híres gyógyfürdőváros.", "Több mint 80 termálforrás.", "A római kor óta vonzza a látogatókat."],
      ro: ["Faimos oraș balnear.", "Peste 80 de izvoare termale.", "Atrage vizitatori încă din perioada romană."],
      en: ["Famous spa town.", "Over 80 thermal springs.", "Has attracted visitors since Roman times."]
    }
  },
  {
    id: "city-karpenisi-extra",
    type: "city",
    parent: "GR-H",
    coords: [21.7892, 38.9189],
    name: { de: "Karpenisi", hu: "Karpeníszi", ro: "Karpenisi", en: "Karpenisi" },
    description: {
      de: "Die Hauptstadt von Evrytania, umgeben von Tannenwäldern. Ein beliebtes Ziel für Wintersport und Outdoor-Aktivitäten.",
      hu: "Evritanía fővárosa, fenyőerdőkkel körülvéve. A téli sportok és a szabadtéri tevékenységek kedvelt célpontja.",
      ro: "Capitala Evritaniei, înconjurată de păduri de brad. O destinație populară pentru sporturi de iarnă și activități în aer liber.",
      en: "The capital of Evrytania, surrounded by fir forests. A popular destination for winter sports and outdoor activities."
    },
    facts: {
      de: ["Hauptstadt von Evrytania.", "Beliebtes Winterreiseziel.", "In der Nähe des Velouchi-Skigebiets."],
      hu: ["Evritanía fővárosa.", "Népszerű téli úti cél.", "A Velouchi síközpont közelében található."],
      ro: ["Capitala Evritaniei.", "Destinație populară de iarnă.", "Aproape de centrul de schi Velouchi."],
      en: ["Capital of Evrytania.", "Popular winter destination.", "Near the Velouchi Ski Center."]
    }
  },
  {
    id: "city-messolonghi-extra",
    type: "city",
    parent: "GR-G",
    coords: [21.4275, 38.3681],
    name: { de: "Mesolongi", hu: "Mesolongi", ro: "Missolonghi", en: "Missolonghi" },
    description: {
      de: "Die Hauptstadt von Ätolien-Akarnanien, berühmt für ihre Rolle im griechischen Unabhängigkeitskrieg und den Tod von Lord Byron.",
      hu: "Aitólia-Akarnanía fővárosa, amely a görög szabadságharcban játszott szerepéről és Lord Byron haláláról híres.",
      ro: "Capitala Etoliei-Acarnania, renumită pentru rolul său în Războiul de Independență al Greciei și moartea Lordului Byron.",
      en: "The capital of Aetolia-Acarnania, famous for its role in the Greek War of Independence and the death of Lord Byron."
    },
    facts: {
      de: ["Hauptstadt von Ätolien-Akarnanien.", "Ort der heldenhaften Belagerung während des Unabhängigkeitskrieges.", "Lord Byron starb hier."],
      hu: ["Aitólia-Akarnanía fővárosa.", "A szabadságharc alatti hősies ostrom helyszíne.", "Lord Byron itt halt meg."],
      ro: ["Capitala Etoliei-Acarnania.", "Locul unui asediu eroic în timpul Războiului de Independență.", "Lord Byron a murit aici."],
      en: ["Capital of Aetolia-Acarnania.", "Site of a heroic siege during the War of Independence.", "Lord Byron died here."]
    }
  }
]
