import type { POI } from "./poi";

export const vaticanCountry: POI = {
  id: "country-vatican",
  type: "country",
  parent: "europe",
  coords: [12.4534, 41.9029],
  name: {
    de: "Vatikanstadt",
    hu: "Vatikán",
    ro: "Vatican",
    en: "Vatican City"
  },
  description: {
    de: "Der Vatikan ist der kleinste Staat der Welt, ein Stadtstaat im Herzen von Rom und das spirituelle Zentrum der römisch-katholischen Kirche.",
    hu: "A Vatikán a világ legkisebb állama, egy Róma szívében fekvő városállam, a római katolikus egyház spirituális központja.",
    ro: "Vaticanul este cel mai mic stat din lume, un oraș-stat în inima Romei și centrul spiritual al Bisericii Romano-Catolice.",
    en: "The Vatican is the smallest state in the world, a city-state in the heart of Rome and the spiritual center of the Roman Catholic Church."
  },
  facts: {
    de: [
      "Der kleinste Staat der Welt (0,44 km²).",
      "Sitz des Papstes, des Oberhauptes der katholischen Kirche.",
      "Vollständig von der italienischen Hauptstadt Rom umschlossen.",
      "Amtssprache ist Latein (für offizielle Dokumente) und Italienisch.",
      "Besitzt eine eigene Post, Armee (Schweizergarde) und Währung (Euro).",
      "Das gesamte Staatsgebiet ist UNESCO-Weltkulturerbe.",
      "Hat keine Steuern und lebt von Spenden und Souvenirverkäufen.",
      "Die Vatikanischen Museen gehören zu den bedeutendsten Kunstsammlungen weltweit.",
      "Der Petersdom ist eine der größten Kirchen der Welt.",
      "Die Schweizergarde schützt den Papst seit 1506."
    ],
    hu: [
      "A világ legkisebb független állama (0,44 km²).",
      "A pápa, a katolikus egyház fejének székhelye.",
      "Teljesen körbeöleli Róma, az olasz főváros.",
      "Hivatalos nyelve a latin (dokumentumokban) és az olasz.",
      "Saját postája, hadserege (Svájci Gárda) és pénzneme (euró) van.",
      "Egész területe az UNESCO Világörökség része.",
      "Nincsenek adók, az állam adományokból és ajándéktárgyakból tartja fenn magát.",
      "A Vatikáni Múzeumok a világ legjelentősebb művészeti gyűjteményei közé tartoznak.",
      "A Szent Péter-bazilika a világ egyik legnagyobb temploma.",
      "A Svájci Gárda 1506 óta védi a pápát."
    ],
    ro: [
      "Cel mai mic stat independent din lume (0,44 km²).",
      "Sediul Papei, capul Bisericii Catolice.",
      "Complet înconjurat de capitala Italiei, Roma.",
      "Limba oficială este latina (pentru documente) și italiana.",
      "Are propria poștă, armată (Garda Elvețiană) și monedă (euro).",
      "Întregul teritoriu este inclus în Patrimoniul Mondial UNESCO.",
      "Nu există taxe, statul se întreține din donații și vânzări de suveniruri.",
      "Muzeele Vaticane sunt printre cele mai importante colecții de artă din lume.",
      "Bazilica Sfântul Petru este una dintre cele mai mari biserici din lume.",
      "Garda Elvețiană îl protejează pe Papă din 1506."
    ],
    en: [
      "The smallest independent state in the world (0.44 km²).",
      "Seat of the Pope, the head of the Catholic Church.",
      "Completely surrounded by the Italian capital Rome.",
      "Official languages are Latin (for documents) and Italian.",
      "Has its own post office, army (Swiss Guard) and currency (Euro).",
      "The entire territory is a UNESCO World Heritage site.",
      "Has no taxes, the state supports itself through donations and souvenir sales.",
      "The Vatican Museums are among the most important art collections in the world.",
      "St. Peter's Basilica is one of the largest churches in the world.",
      "The Swiss Guard has protected the Pope since 1506."
    ]
  },
  image: "/geo-images/vatican/country-vatican.webp"
};

export const vaticanPois: POI[] = [
  {
    id: "landmark-st-peters-basilica",
    type: "landmark",
    parent: "country-vatican",
    coords: [12.4539, 41.9022],
    name: {
      de: "Petersdom",
      hu: "Szent Péter-bazilika",
      ro: "Bazilica Sfântul Petru",
      en: "St. Peter's Basilica"
    },
    description: {
      de: "Die größte und prächtigste Kirche der Christenheit, ein Meisterwerk der Renaissance und des Barock.",
      hu: "A kereszténység legnagyobb és legpompásabb temploma, a reneszánsz és barokk építészet mesterműve.",
      ro: "Cea mai mare și mai splendidă biserică a creștinătății, o capodoperă a Renașterii și Barocului.",
      en: "The largest and most magnificent church in Christendom, a masterpiece of Renaissance and Baroque architecture."
    }
  },
  {
    id: "landmark-st-peters-square",
    type: "landmark",
    parent: "country-vatican",
    coords: [12.4572, 41.9022],
    name: {
      de: "Petersplatz",
      hu: "Szent Péter tér",
      ro: "Piața Sfântul Petru",
      en: "St. Peter's Square"
    },
    description: {
      de: "Der monumentale Platz vor dem Petersdom, entworfen von Gian Lorenzo Bernini.",
      hu: "A Szent Péter-bazilika előtti monumentális tér, melyet Gian Lorenzo Bernini tervezett.",
      ro: "Piața monumentală din fața Bazilicii Sfântul Petru, proiectată de Gian Lorenzo Bernini.",
      en: "The monumental square in front of St. Peter's Basilica, designed by Gian Lorenzo Bernini."
    }
  },
  {
    id: "landmark-vatican-museums",
    type: "landmark",
    parent: "country-vatican",
    coords: [12.4533, 41.9064],
    name: {
      de: "Vatikanische Museen",
      hu: "Vatikáni Múzeumok",
      ro: "Muzeele Vaticane",
      en: "Vatican Museums"
    },
    description: {
      de: "Eines der größten und bedeutendsten Kunstmuseen der Welt mit unschätzbaren Schätzen.",
      hu: "A világ egyik legnagyobb és legjelentősebb művészeti múzeuma felbecsülhetetlen kincsekkel.",
      ro: "Unul dintre cele mai mari și mai importante muzee de artă din lume, cu comori neprețuite.",
      en: "One of the largest and most significant art museums in the world with priceless treasures."
    }
  },
  {
    id: "landmark-sistine-chapel",
    type: "landmark",
    parent: "country-vatican",
    coords: [12.4545, 41.903],
    name: {
      de: "Sixtinische Kapelle",
      hu: "Sixtus-kápolna",
      ro: "Capela Sixtină",
      en: "Sistine Chapel"
    },
    description: {
      de: "Berühmt für Michelangelos Deckenfresken und das Jüngste Gericht.",
      hu: "Michelangelo mennyezetfreskóiról és az Utolsó ítélet című festményéről híres.",
      ro: "Faimoasă pentru frescele de pe tavan ale lui Michelangelo și Judecata de Apoi.",
      en: "Famous for Michelangelo's ceiling frescoes and the Last Judgment."
    }
  },
  {
    id: "landmark-vatican-gardens",
    type: "landmark",
    parent: "country-vatican",
    coords: [12.449, 41.903],
    name: {
      de: "Vatikanische Gärten",
      hu: "Vatikáni kertek",
      ro: "Grădinile Vaticane",
      en: "Vatican Gardens"
    },
    description: {
      de: "Eine ausgedehnte Parkanlage, die mehr als die Hälfte des Staatsgebietes einnimmt.",
      hu: "Hatalmas parkrendszer, amely az állam területének több mint felét elfoglalja.",
      ro: "Un vast complex de parcuri care ocupă mai mult de jumătate din teritoriul statului.",
      en: "An extensive park system that occupies more than half of the state's territory."
    }
  },
  {
    id: "landmark-apostolic-palace",
    type: "landmark",
    parent: "country-vatican",
    coords: [12.455, 41.904],
    name: {
      de: "Apostolischer Palast",
      hu: "Apostoli Palota",
      ro: "Palatul Apostolic",
      en: "Apostolic Palace"
    },
    description: {
      de: "Die offizielle Residenz des Papstes im Vatikan.",
      hu: "A pápa hivatalos rezidenciája a Vatikánban.",
      ro: "Reședința oficială a Papei în Vatican.",
      en: "The official residence of the Pope in the Vatican."
    }
  },
  {
    id: "landmark-swiss-guard-barracks",
    type: "landmark",
    parent: "country-vatican",
    coords: [12.457, 41.905],
    name: {
      de: "Kaserne der Schweizergarde",
      hu: "Svájci Gárda laktanyája",
      ro: "Cazarma Gărzii Elvețiene",
      en: "Swiss Guard Barracks"
    },
    description: {
      de: "Der Ort, an dem die kleinste Armee der Welt stationiert ist.",
      hu: "A hely, ahol a világ legkisebb hadserege állomásozik.",
      ro: "Locul unde este staționată cea mai mică armată din lume.",
      en: "The place where the smallest army in the world is stationed."
    }
  },
  {
    id: "landmark-vatican-library",
    type: "landmark",
    parent: "country-vatican",
    coords: [12.454, 41.905],
    name: {
      de: "Vatikanische Bibliothek",
      hu: "Vatikáni Könyvtár",
      ro: "Biblioteca Vaticană",
      en: "Vatican Library"
    },
    description: {
      de: "Eine der ältesten Bibliotheken der Welt mit extrem wertvollen Manuskripten.",
      hu: "A világ egyik legrégebbi könyvtára rendkívül értékes kéziratokkal.",
      ro: "Una dintre cele mai vechi biblioteci din lume, cu manuscrise extrem de valoroase.",
      en: "One of the oldest libraries in the world with extremely valuable manuscripts."
    }
  },
  {
    id: "landmark-vatican-grottoes",
    type: "landmark",
    parent: "country-vatican",
    coords: [12.4539, 41.9022],
    name: {
      de: "Vatikanische Grotten",
      hu: "Vatikáni barlangok",
      ro: "Grotele Vaticane",
      en: "Vatican Grottoes"
    },
    description: {
      de: "Unterirdische Grabanlagen unter dem Petersdom mit Papstgräbern.",
      hu: "Föld alatti sírrendszer a Szent Péter-bazilika alatt pápai sírokkal.",
      ro: "Ansamblu subteran de morminte sub Bazilica Sfântul Petru cu morminte papale.",
      en: "Underground tomb complexes under St. Peter's Basilica with papal tombs."
    }
  },
  {
    id: "landmark-pope-paul-vi-audience-hall",
    type: "landmark",
    parent: "country-vatican",
    coords: [12.453, 41.901],
    name: {
      de: "Audienzhalle Papst Paul VI.",
      hu: "VI. Pál pápa auditóriuma",
      ro: "Aula Papa Paul al VI-lea",
      en: "Pope Paul VI Audience Hall"
    },
    description: {
      de: "Ein modernes Gebäude für päpstliche Generalaudienzen.",
      hu: "Modern épület a pápai általános kihallgatások számára.",
      ro: "O clădire modernă pentru audiențele papale generale.",
      en: "A modern building for papal general audiences."
    }
  },
  {
    id: "landmark-vatican-post-office",
    type: "landmark",
    parent: "country-vatican",
    coords: [12.457, 41.903],
    name: {
      de: "Vatikanische Post",
      hu: "Vatikáni posta",
      ro: "Poșta Vaticană",
      en: "Vatican Post Office"
    },
    description: {
      de: "Der Postdienst des Vatikans, bekannt für seine eigenen Briefmarken.",
      hu: "A Vatikán postai szolgáltatása, mely saját bélyegeiről ismert.",
      ro: "Serviciul poștal al Vaticanului, cunoscut pentru propriile sale timbre.",
      en: "The postal service of the Vatican, known for its own stamps."
    }
  },
  {
    id: "landmark-vatican-pharmacy",
    type: "landmark",
    parent: "country-vatican",
    coords: [12.456, 41.906],
    name: {
      de: "Vatikanische Apotheke",
      hu: "Vatikáni patika",
      ro: "Farmacia Vaticană",
      en: "Vatican Pharmacy"
    },
    description: {
      de: "Die meistbesuchte Apotheke der Welt.",
      hu: "A világ leglátogatottabb gyógyszertára.",
      ro: "Cea mai vizitată farmacie din lume.",
      en: "The most visited pharmacy in the world."
    }
  },
  {
    id: "landmark-st-martha-house",
    type: "landmark",
    parent: "country-vatican",
    coords: [12.451, 41.901],
    name: {
      de: "Gästehaus Santa Marta",
      hu: "Szent Márta-ház",
      ro: "Casa Sfânta Marta",
      en: "Saint Martha's House"
    },
    description: {
      de: "Die derzeitige Residenz von Papst Franziskus.",
      hu: "Ferenc pápa jelenlegi rezidenciája.",
      ro: "Reședința actuală a Papei Francisc.",
      en: "The current residence of Pope Francis."
    }
  },
  {
    id: "landmark-vatican-bank",
    type: "landmark",
    parent: "country-vatican",
    coords: [12.455, 41.905],
    name: {
      de: "Vatikanbank (IOR)",
      hu: "Vatikáni Bank (IOR)",
      ro: "Banca Vaticanului (IOR)",
      en: "Vatican Bank (IOR)"
    },
    description: {
      de: "Das Institut für die religiösen Werke.",
      hu: "A Vallási Művek Intézete.",
      ro: "Institutul pentru Lucrări Religioase.",
      en: "The Institute for the Works of Religion."
    }
  },
  {
    id: "landmark-governors-palace",
    type: "landmark",
    parent: "country-vatican",
    coords: [12.451, 41.904],
    name: {
      de: "Palast des Governatorats",
      hu: "Kormányzósági palota",
      ro: "Palatul Guvernoratului",
      en: "Governor's Palace"
    },
    description: {
      de: "Der Sitz der Regierung der Vatikanstadt.",
      hu: "A Vatikánváros kormányának székhelye.",
      ro: "Sediul guvernului Vaticanului.",
      en: "The seat of the government of Vatican City."
    }
  },
  {
    id: "landmark-vatican-observatory",
    type: "landmark",
    parent: "country-vatican",
    coords: [12.448, 41.905],
    name: {
      de: "Vatikanische Sternwarte",
      hu: "Vatikáni Csillagvizsgáló",
      ro: "Observatorul Vaticanului",
      en: "Vatican Observatory"
    },
    description: {
      de: "Eines der ältesten astronomischen Forschungsinstitute der Welt.",
      hu: "A világ egyik legrégebbi csillagászati kutatóintézete.",
      ro: "Unul dintre cele mai vechi institute de cercetare astronomică din lume.",
      en: "One of the oldest astronomical research institutes in the world."
    }
  },
  {
    id: "landmark-belvedere-courtyard",
    type: "landmark",
    parent: "country-vatican",
    coords: [12.454, 41.906],
    name: {
      de: "Belvedere-Hof",
      hu: "Belvedere-udvar",
      ro: "Curtea Belvedere",
      en: "Belvedere Courtyard"
    },
    description: {
      de: "Ein architektonisch bedeutender Innenhof im Vatikan.",
      hu: "Építészetileg jelentős belső udvar a Vatikánban.",
      ro: "O curte interioară arhitecturală importantă din Vatican.",
      en: "An architecturally significant courtyard in the Vatican."
    }
  },
  {
    id: "landmark-casina-pio-iv",
    type: "landmark",
    parent: "country-vatican",
    coords: [12.449, 41.905],
    name: {
      de: "Casina Pio IV",
      hu: "Casina Pio IV",
      ro: "Casina Pio IV",
      en: "Casina Pio IV"
    },
    description: {
      de: "Sitz der Päpstlichen Akademie der Wissenschaften.",
      hu: "A Pápai Tudományos Akadémia székhelye.",
      ro: "Sediul Academiei Pontificale de Științe.",
      en: "The seat of the Pontifical Academy of Sciences."
    }
  },
  {
    id: "landmark-pigna-courtyard",
    type: "landmark",
    parent: "country-vatican",
    coords: [12.454, 41.907],
    name: {
      de: "Pinienhof",
      hu: "Toboz-udvar",
      ro: "Curtea Pigna",
      en: "Pigna Courtyard"
    },
    description: {
      de: "Bekannt für die riesige bronzene Pinienzapfen-Skulptur.",
      hu: "Hatalmas bronz fenyőtoboz-szobráról ismert.",
      ro: "Cunoscut pentru imensa sculptură din bronz a unui con de pin.",
      en: "Known for the huge bronze pine cone sculpture."
    }
  },
  {
    id: "landmark-vatican-heliport",
    type: "landmark",
    parent: "country-vatican",
    coords: [12.446, 41.902],
    name: {
      de: "Vatikanischer Heliport",
      hu: "Vatikáni helikopter-leszálló",
      ro: "Heliportul Vaticanului",
      en: "Vatican Heliport"
    },
    description: {
      de: "Der Hubschrauberlandeplatz des Papstes im westlichsten Teil des Vatikans.",
      hu: "A pápa helikopter-leszállóhelye a Vatikán legnyugatibb részén.",
      ro: "Heliportul Papei în partea cea mai vestică a Vaticanului.",
      en: "The Pope's heliport in the westernmost part of the Vatican."
    }
  },
  {
    id: "VA-001",
    type: "region",
    parent: "country-vatican",
    coords: [12.4534, 41.9029],
    name: {
      de: "Vatikan",
      hu: "Vatikán",
      ro: "Vatican",
      en: "Vatican"
    },
    description: {
      de: "Der historische Kern und das gesamte Gebiet des Staates Vatikanstadt.",
      hu: "Vatikánváros történelmi magja és az állam teljes területe.",
      ro: "Nucleul istoric și întregul teritoriu al statului Cetatea Vaticanului.",
      en: "The historical core and entire territory of the Vatican City State."
    },
    facts: {
      de: [
        "Umfasst den gesamten souveränen Staat Vatikanstadt.",
        "Das kleinste Land der Welt nach Fläche und Bevölkerung.",
        "Enthält den Petersdom, die Vatikanischen Gärten und Museen.",
        "Wurde 1929 durch die Lateranverträge unabhängig.",
        "Ganzes Gebiet ist als UNESCO-Weltkulturerbe gelistet."
      ],
      hu: [
        "Magában foglalja a teljes szuverén Vatikán Államot.",
        "Terület és népesség alapján a világ legkisebb országa.",
        "Itt található a Szent Péter-bazilika, a Vatikáni kertek és múzeumok.",
        "1929-ben lett független a lateráni egyezmény révén.",
        "Teljes területe az UNESCO Világörökség része."
      ],
      ro: [
        "Cuprinde întregul stat suveran Cetatea Vaticanului.",
        "Cea mai mică țară din lume după suprafață și populație.",
        "Conține Bazilica Sfântul Petru, Grădinile Vaticane și Muzeele.",
        "A devenit independent în 1929 prin Tratatele de la Lateran.",
        "Întregul teritoriu este inclus în Patrimoniul Mondial UNESCO."
      ],
      en: [
        "Includes the entire sovereign Vatican City State.",
        "The smallest country in the world by area and population.",
        "Contains St. Peter's Basilica, the Vatican Gardens and Museums.",
        "Became independent in 1929 through the Lateran Treaties.",
        "The entire territory is listed as a UNESCO World Heritage site."
      ]
    }
  },
  {
    id: "VA-001-teutonic-cemetery",
    type: "landmark",
    parent: "VA-001",
    coords: [12.4542, 41.9015],
    name: {
      de: "Teutonischer Friedhof",
      hu: "Teuton temető",
      ro: "Cimitirul Teuton",
      en: "Teutonic Cemetery"
    },
    description: {
      de: "Der deutsche Friedhof im Schatten des Petersdoms.",
      hu: "Német temető a Szent Péter-bazilika árnyékában.",
      ro: "Cimitirul german din umbra Bazilicii Sfântul Petru.",
      en: "The German cemetery in the shadow of St. Peter's Basilica."
    },
    facts: {
      de: [
        "Ältester deutscher Friedhof in Rom.",
        "Liegt rechtlich auf italienischem Boden, ist aber exterritoriales Gebiet des Vatikans.",
        "Ursprünglich für Pilger aus dem Heiligen Römischen Reich gegründet.",
        "Wird von der Erzbruderschaft zur Schmerzhaften Muttergottes verwaltet.",
        "Beherbergt das Campo Santo Teutonico Kolleg."
      ],
      hu: [
        "A legrégebbi német temető Rómában.",
        "Jogilag olasz területen fekszik, de a Vatikán exterritoriális része.",
        "Eredetileg a Német-római Birodalom zarándokai számára alapították.",
        "A Fájdalmas Szűzanya Testvérisége kezeli.",
        "Itt található a Campo Santo Teutonico kollégium is."
      ],
      ro: [
        "Cel mai vechi cimitir german din Roma.",
        "Din punct de vedere juridic se află pe pământ italian, dar este teritoriu extrateritorial al Vaticanului.",
        "Fondat inițial pentru pelerinii din Sfântul Imperiu Roman.",
        "Administrat de Arhiconfraternitatea Maicii Domnului a Îndureratei.",
        "Găzduiește colegiul Campo Santo Teutonico."
      ],
      en: [
        "The oldest German cemetery in Rome.",
        "Legally on Italian soil but is extraterritorial territory of the Vatican.",
        "Originally founded for pilgrims from the Holy Roman Empire.",
        "Managed by the Archconfraternity of the Sorrowful Mother of God.",
        "Houses the Campo Santo Teutonico college."
      ]
    }
  },
  {
    id: "VA-001-leonine-wall",
    type: "historical",
    parent: "VA-001",
    coords: [12.4480, 41.9030],
    name: {
      de: "Leoninische Mauer",
      hu: "Leó-fal",
      ro: "Zidul Leonin",
      en: "Leonine Wall"
    },
    description: {
      de: "Die mittelalterliche Befestigung, die den Vatikanhügel umschließt.",
      hu: "A Vatikán-dombot körülvevő középkori erődítmény.",
      ro: "Fortificația medievală care înconjoară dealul Vaticanului.",
      en: "The medieval fortification surrounding the Vatican Hill."
    },
    facts: {
      de: [
        "Erbaut von Papst Leo IV. im 9. Jahrhundert nach dem Überfall der Sarazenen.",
        "Bildete ursprünglich den Schutz für die 'Leoninische Stadt'.",
        "Die Mauern sind heute Teil der vatikanischen Befestigungsanlagen.",
        "Der Passetto di Borgo verbindet den Vatikan über die Mauer mit der Engelsburg.",
        "Umfasst markante Türme wie den Torre di San Giovanni."
      ],
      hu: [
        "IV. Leó pápa építtette a 9. században a szaracén támadások után.",
        "Eredetileg a 'Leó-város' védelmét szolgálta.",
        "A falak ma a vatikáni erődrendszer részét képezik.",
        "A Passetto di Borgo a falon keresztül köti össze a Vatikánt az Angyalvárral.",
        "Magában foglal olyan jellegzetes tornyokat, mint a Torre di San Giovanni."
      ],
      ro: [
        "Construit de Papa Leon al IV-lea în secolul al IX-lea după raidul sarazinilor.",
        "A format inițial protecția pentru 'Orașul Leonin'.",
        "Zidurile fac parte astăzi din fortificațiile Vaticanului.",
        "Passetto di Borgo leagă Vaticanul de Castel Sant'Angelo prin zid.",
        "Include turnuri proeminente, cum ar fi Torre di San Giovanni."
      ],
      en: [
        "Built by Pope Leo IV in the 9th century after the Saracen raid.",
        "Originally formed the protection for the 'Leonine City'.",
        "The walls are now part of the Vatican fortifications.",
        "The Passetto di Borgo connects the Vatican with Castel Sant'Angelo via the wall.",
        "Includes prominent towers such as the Torre di San Giovanni."
      ]
    }
  }
];

export const vaticanAll: POI[] = [
  vaticanCountry,
  ...vaticanPois
];
