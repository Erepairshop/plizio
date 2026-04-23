import type { POI } from "./poi";

export const mkPoisPart3: POI[] = [
  // MK-021: Čučer Sandevo
  {
    id: "MK-021-skopska-crna-gora",
    type: "mountain",
    parent: "MK-021",
    coords: [21.4333, 42.1667],
    name: { de: "Skopska Crna Gora", hu: "Szkopszka Crna Gora", ro: "Skopska Crna Gora", en: "Skopska Crna Gora" },
    description: {
      de: "Ein Gebirgszug nördlich von Skopje, bekannt für seine zahlreichen Klöster und Wanderwege.",
      hu: "Szkopjétól északra fekvő hegyvonulat, számos kolostoráról és túraútvonaláról ismert.",
      ro: "Un lanț muntos la nord de Skopje, cunoscut pentru numeroasele sale mănăstiri și trasee de drumeție.",
      en: "A mountain range north of Skopje, known for its numerous monasteries and hiking trails."
    },
    facts: {
      de: ["Höchster Gipfel ist Ramno.", "Beherbergt viele mittelalterliche Kirchen.", "Ein beliebtes Naherholungsgebiet für die Einwohner von Skopje."],
      hu: ["Legmagasabb csúcsa a Ramno.", "Számos középkori templomnak ad otthont.", "Népszerű kirándulóhely a szkopjeiek számára."],
      ro: ["Cel mai înalt vârf este Ramno.", "Găzduiește multe biserici medievale.", "O zonă de recreere populară pentru locuitorii din Skopje."],
      en: ["The highest peak is Ramno.", "Home to many medieval churches.", "A popular recreation area for Skopje residents."]
    }
  },
  {
    id: "MK-021-st-nicetas-monastery",
    type: "historical",
    parent: "MK-021",
    coords: [21.3917, 42.1000],
    name: { de: "Kloster Sveti Nikita", hu: "Szent Nikétasz-kolostor", ro: "Mănăstirea Sf. Nichita", en: "Saint Nikitas Monastery" },
    description: {
      de: "Ein mittelalterliches Kloster im Dorf Banjane, gegründet vom serbischen König Milutin.",
      hu: "Középkori kolostor Banjane faluban, Milutin szerb király alapította.",
      ro: "O mănăstire medievală în satul Banjane, fondată de regele sârb Milutin.",
      en: "A medieval monastery in the village of Banjane, founded by the Serbian King Milutin."
    },
    facts: {
      de: ["Erbaut im frühen 14. Jahrhundert.", "Bekannt für seine Fresken von Michael und Eutychios.", "Ein bedeutendes Denkmal byzantinischer Kunst."],
      hu: ["A 14. század elején épült.", "Mihály és Eutükhiosz freskóiról ismert.", "A bizánci művészet jelentős emléke."],
      ro: ["Construită la începutul secolului al XIV-lea.", "Cunoscută pentru frescele realizate de Mihail și Eutihie.", "Un monument important al artei bizantine."],
      en: ["Built in the early 14th century.", "Known for its frescoes by Michael and Eutychios.", "A significant monument of Byzantine art."]
    }
  },
  // MK-022: Gjorče Petrov
  {
    id: "MK-022-kuckovo-monastery",
    type: "historical",
    parent: "MK-022",
    coords: [21.3111, 42.0639],
    name: { de: "Kloster Sveti Gjorgji - Kučkovo", hu: "Kučkovói Szent György-kolostor", ro: "Mănăstirea Sf. Gheorghe - Kučkovo", en: "Saint George Monastery - Kučkovo" },
    description: {
      de: "Ein malerisches Kloster im Dorf Kučkovo, ein ruhiger Ort für spirituelle Erholung.",
      hu: "Festői kolostor Kučkovo faluban, csendes hely a lelki feltöltődésre.",
      ro: "O mănăstire pitorească în satul Kučkovo, un loc liniștit pentru relaxare spirituală.",
      en: "A picturesque monastery in the village of Kučkovo, a quiet place for spiritual retreat."
    },
    facts: {
      de: ["Umgeben von Kiefernwäldern.", "Bekannt für seine heilende Quelle.", "Ein beliebtes Ausflugsziel am Wochenende."],
      hu: ["Fenyőerdők veszik körül.", "Gyógyforrásáról ismert.", "Népszerű hétvégi kirándulóhely."],
      ro: ["Înconjurată de păduri de pini.", "Cunoscută pentru izvorul său tămăduitor.", "O destinație populară pentru excursii de weekend."],
      en: ["Surrounded by pine forests.", "Known for its healing spring.", "A popular weekend excursion destination."]
    }
  },
  {
    id: "MK-022-lepenc-river",
    type: "river",
    parent: "MK-022",
    coords: [21.3667, 42.0167],
    name: { de: "Lepenac", hu: "Lepenc", ro: "Lepenac", en: "Lepenac" },
    description: {
      de: "Ein Nebenfluss des Vardar, der durch die Gemeinde Gjorče Petrov fließt.",
      hu: "A Vardar mellékfolyója, amely keresztülfolyik Gjorče Petrov községen.",
      ro: "Un afluent al Vardarului care traversează municipalitatea Gjorče Petrov.",
      en: "A tributary of the Vardar river that flows through the Gjorče Petrov municipality."
    },
    facts: {
      de: ["Entspringt im Kosovo.", "Mündet in Skopje in den Vardar.", "Die Flussufer werden für Erholungszwecke genutzt."],
      hu: ["Koszovóban ered.", "Szkopjéban torkollik a Vardarba.", "A folyópartokat rekreációs célokra használják."],
      ro: ["Izvorăște în Kosovo.", "Se varsă în Vardar la Skopje.", "Malurile râului sunt folosite în scopuri recreative."],
      en: ["Originates in Kosovo.", "Joins the Vardar in Skopje.", "The riverbanks are used for recreational purposes."]
    }
  },
  // MK-023: Saraj
  {
    id: "MK-023-matka-canyon",
    type: "nature",
    parent: "MK-023",
    coords: [21.2967, 41.9567],
    name: { de: "Matka-Schlucht", hu: "Matka-kanyon", ro: "Canionul Matka", en: "Matka Canyon" },
    description: {
      de: "Eines der beliebtesten Ausflugsziele in der Nähe von Skopje, bekannt für seinen Stausee und Höhlen.",
      hu: "Szkopje környékének egyik legnépszerűbb kirándulóhelye, víztározójáról és barlangjairól ismert.",
      ro: "Una dintre cele mai populare destinații din apropierea orașului Skopje, cunoscută pentru lacul de acumulare și peșteri.",
      en: "One of the most popular destinations near Skopje, known for its artificial lake and caves."
    },
    facts: {
      de: ["Beherbergt die Vrelo-Höhle, eine der tiefsten Unterwasserhöhlen.", "Ein Paradies für Kajakfahrer und Wanderer.", "Es gibt dort mehrere mittelalterliche Klöster."],
      hu: ["Itt található a Vrelo-barlang, a világ egyik legmélyebb víz alatti barlangja.", "A kajakosok és túrázók paradicsoma.", "Számos középkori kolostor található a kanyonban."],
      ro: ["Găzduiește peștera Vrelo, una dintre cele mai adânci peșteri subacvatice.", "Un paradis pentru caiaciști și drumeți.", "Există mai multe mănăstiri medievale în canion."],
      en: ["Home to Vrelo cave, one of the world's deepest underwater caves.", "A paradise for kayakers and hikers.", "Features several medieval monasteries."]
    }
  },
  {
    id: "MK-023-st-andrew-monastery",
    type: "historical",
    parent: "MK-023",
    coords: [21.2981, 41.9519],
    name: { de: "Kloster Sveti Andreja", hu: "Szent András-kolostor", ro: "Mănăstirea Sf. Andrei", en: "Saint Andrew's Monastery" },
    description: {
      de: "Ein im 14. Jahrhundert erbautes Kloster, das direkt am Ufer des Matka-Sees liegt.",
      hu: "A 14. században épült kolostor, amely közvetlenül a Matka-tó partján fekszik.",
      ro: "O mănăstire construită în secolul al XIV-lea, situată direct pe malul lacului Matka.",
      en: "A 14th-century monastery located directly on the shores of Lake Matka."
    },
    facts: {
      de: ["Gegründet von Andreas, dem Sohn von König Volkašin.", "Bekannt für seine wertvollen Fresken.", "Nur mit dem Boot oder zu Fuß erreichbar."],
      hu: ["Volkassin király fia, András alapította.", "Értékes freskóiról ismert.", "Csak csónakkal vagy gyalog érhető el."],
      ro: ["Fondată de Andrei, fiul regelui Volkašin.", "Cunoscută pentru frescele sale valoroase.", "Accesibilă doar cu barca sau pe jos."],
      en: ["Founded by Andrew, son of King Volkašin.", "Known for its valuable frescoes.", "Accessible only by boat or on foot."]
    }
  },
  // MK-024: Jegunovce
  {
    id: "MK-024-st-george-stence",
    type: "historical",
    parent: "MK-024",
    coords: [21.0167, 42.1167],
    name: { de: "Kirche des hl. Georg - Stenče", hu: "Stenčei Szent György-templom", ro: "Biserica Sf. Gheorghe - Stenče", en: "Church of Saint George - Stenče" },
    description: {
      de: "Eine alte orthodoxe Kirche im Dorf Stenče mit bedeutendem kulturellem Erbe.",
      hu: "Régi ortodox templom Stenče faluban, jelentős kulturális örökséggel.",
      ro: "O veche biserică ortodoxă în satul Stenče, cu un patrimoniu cultural important.",
      en: "An old Orthodox church in the village of Stenče with significant cultural heritage."
    },
    facts: {
      de: ["Besitzt gut erhaltene Ikonen.", "Zentrum der Dorf-Traditionen.", "Teil der Diözese Tetovo-Gostivar."],
      hu: ["Jól megőrzött ikonokkal rendelkezik.", "A falu hagyományainak központja.", "A Tetovo-Gosztivari egyházmegye része."],
      ro: ["Deține icoane bine conservate.", "Centrul tradițiilor satului.", "Parte a eparhiei Tetovo-Gostivar."],
      en: ["Features well-preserved icons.", "Center of village traditions.", "Part of the Tetovo-Gostivar diocese."]
    }
  },
  {
    id: "MK-024-siricina-bridge",
    type: "landmark",
    parent: "MK-024",
    coords: [21.0833, 42.0667],
    name: { de: "Siričino-Brücke", hu: "Siričinói híd", ro: "Podul Siričino", en: "Siričino Bridge" },
    description: {
      de: "Eine wichtige Brücke über den Vardar, die die umliegenden Dörfer verbindet.",
      hu: "Fontos híd a Vardar folyón, amely összeköti a környező falvakat.",
      ro: "Un pod important peste râul Vardar, care leagă satele din jur.",
      en: "An important bridge over the Vardar river, connecting the surrounding villages."
    },
    facts: {
      de: ["Bietet eine Aussicht auf den Fluss Vardar.", "Wichtiger Verkehrsknotenpunkt für die Gemeinde.", "Ein Ort für lokale Angler."],
      hu: ["Kilátást nyújt a Vardar folyóra.", "A község fontos közlekedési csomópontja.", "A helyi horgászok kedvelt helye."],
      ro: ["Oferă o vedere asupra râului Vardar.", "Nod de transport important pentru municipalitate.", "Un loc pentru pescarii locali."],
      en: ["Provides a view of the Vardar river.", "Important transport link for the municipality.", "A spot for local fishermen."]
    }
  },
  // MK-025: Tearce
  {
    id: "MK-025-lesok-monastery",
    type: "historical",
    parent: "MK-025",
    coords: [21.0000, 42.0667],
    name: { de: "Kloster Lešok", hu: "Lesoki kolostor", ro: "Mănăstirea Lešok", en: "Lešok Monastery" },
    description: {
      de: "Ein bedeutendes geistliches Zentrum am Fuße des Šar-Gebirges.",
      hu: "Jelentős szellemi központ a Šar-hegység lábánál.",
      ro: "Un centru spiritual important la poalele Munților Šar.",
      en: "A significant spiritual center at the foot of the Šar Mountains."
    },
    facts: {
      de: ["Heimat des mazedonischen Aufklärers Kiril Pejčinoviḱ.", "Beherbergt die Kirchen der hl. Athanasius und der hl. Gottesmutter.", "Wurde im Konflikt von 2001 beschädigt und wieder aufgebaut."],
      hu: ["Kiril Pejčinoviḱ macedón felvilágosító otthona.", "A Szent Atanáz és a Szent Szűzanya templomoknak ad otthont.", "A 2001-es konfliktusban megsérült, majd újjáépítették."],
      ro: ["Patria iluministului macedonean Kiril Pejčinoviḱ.", "Găzduiește bisericile Sf. Atanasie și Sf. Născătoare de Dumnezeu.", "A fost avariată în conflictul din 2001 și reconstruită."],
      en: ["Home of the Macedonian enlightener Kiril Pejčinoviḱ.", "Houses the churches of St. Athanasius and the Holy Mother of God.", "Damaged in the 2001 conflict and subsequently rebuilt."]
    }
  },
  {
    id: "MK-025-varvara-village",
    type: "nature",
    parent: "MK-025",
    coords: [21.0500, 42.1000],
    name: { de: "Dorf Varvara", hu: "Varvara falu", ro: "Satul Varvara", en: "Varvara Village" },
    description: {
      de: "Ein malerisches Bergdorf, bekannt für seine Natur und kühle Bergluft.",
      hu: "Festői hegyi falu, amely természetéről és friss hegyi levegőjéről ismert.",
      ro: "Un sat de munte pitoresc, cunoscut pentru natura sa și aerul curat de munte.",
      en: "A scenic mountain village known for its nature and fresh mountain air."
    },
    facts: {
      de: ["Ein Ausgangspunkt für Wanderungen im Šar-Gebirge.", "Bekannt für seine traditionelle ländliche Atmosphäre.", "Bietet einen herrlichen Blick auf die Polog-Ebene."],
      hu: ["Kiindulópont a Šar-hegységbe vezető túrákhoz.", "Hagyományos vidéki hangulatáról ismert.", "Csodás kilátást nyújt a Polog-síkságra."],
      ro: ["Un punct de plecare pentru drumeții în Munții Šar.", "Cunoscut pentru atmosfera sa rurală tradițională.", "Oferă o vedere superbă asupra câmpiei Polog."],
      en: ["A starting point for hikes in the Šar Mountains.", "Known for its traditional rural atmosphere.", "Offers a magnificent view of the Polog valley."]
    }
  },
  // MK-026: Tetovo
  {
    id: "MK-026-painted-mosque",
    type: "historical",
    parent: "MK-026",
    coords: [20.9667, 42.0067],
    name: { de: "Bunte Moschee (Šarena Džamija)", hu: "Festett mecset", ro: "Moscheea Pictată", en: "Painted Mosque" },
    description: {
      de: "Eine einzigartige Moschee, die für ihre kunstvollen Außendekorationen bekannt ist.",
      hu: "Egyedülálló mecset, amely díszes külső festéséről ismert.",
      ro: "O moschee unică, cunoscută pentru decorațiunile sale exterioare elaborate.",
      en: "A unique mosque known for its elaborate exterior and interior decorations."
    },
    facts: {
      de: ["Erbaut im 15. Jahrhundert und im 19. Jahrhundert renoviert.", "Über 30.000 Eier wurden für die Farben verwendet.", "Ein Meisterwerk der osmanischen Architektur."],
      hu: ["A 15. században épült, a 19. században felújították.", "Több mint 30 000 tojást használtak fel a festéshez.", "Az oszmán építészet mesterműve."],
      ro: ["Construită în secolul al XV-lea și renovată în secolul al XIX-lea.", "Peste 30.000 de ouă au fost folosite pentru prepararea culorilor.", "O capodoperă a arhitecturii otomane."],
      en: ["Built in the 15th century and renovated in the 19th century.", "Over 30,000 eggs were used to prepare the paints.", "A masterpiece of Ottoman architecture."]
    }
  },
  {
    id: "MK-026-arabati-baba-teke",
    type: "historical",
    parent: "MK-026",
    coords: [20.9583, 42.0028],
    name: { de: "Arabati-Baba-Tekke", hu: "Arabati Baba-tekke", ro: "Arabati Baba Tekke", en: "Arabati Baba Tekke" },
    description: {
      de: "Ein Derwischkloster der Bektaschi in Tetovo, eines der besterhaltenen im Balkan.",
      hu: "Bektasi dervis kolostor Tetovóban, a Balkán egyik legjobb állapotban fennmaradt tekkéje.",
      ro: "O mănăstire a dervișilor bectași în Tetovo, una dintre cele mai bine conservate din Balcani.",
      en: "A Bektashi dervish monastery in Tetovo, one of the best-preserved in the Balkans."
    },
    facts: {
      de: ["Gegründet im 16. Jahrhundert.", "Besteht aus einem großen Komplex mit Gärten.", "Ein Zentrum der Bektaschi-Kultur."],
      hu: ["A 16. században alapították.", "Hatalmas épületegyüttes kertekkel.", "A bektasi kultúra központja."],
      ro: ["Fondată în secolul al XVI-lea.", "Formată dintr-un complex mare cu grădini.", "Un centru al culturii bectașilor."],
      en: ["Founded in the 16th century.", "Consists of a large complex with gardens.", "A center of Bektashi culture."]
    }
  },
  // MK-027: Bogovinje
  {
    id: "MK-027-bogovinje-lake",
    type: "lake",
    parent: "MK-027",
    coords: [20.8500, 41.9333],
    name: { de: "Bogovinje-See", hu: "Bogovinjei-tó", ro: "Lacul Bogovinje", en: "Bogovinje Lake" },
    description: {
      de: "Der größte Gletschersee im Šar-Gebirge.",
      hu: "A Šar-hegység legnagyobb gleccsertava.",
      ro: "Cel mai mare lac glaciar din Munții Šar.",
      en: "The largest glacial lake in the Šar Mountains."
    },
    facts: {
      de: ["Liegt auf einer Höhe von über 1.900 Metern.", "Bietet kristallklares, kaltes Gebirgswasser.", "Ein Ziel für erfahrene Wanderer."],
      hu: ["Több mint 1900 méteres magasságban fekszik.", "Kristálytiszta, hideg hegyi vizet kínál.", "A tapasztalt túrázók célpontja."],
      ro: ["Situat la o altitudine de peste 1.900 de metri.", "Oferă apă de munte rece și cristalină.", "O destinație pentru drumeții experimentați."],
      en: ["Located at an altitude of over 1,900 meters.", "Offers crystal clear, cold mountain water.", "A destination for experienced hikers."]
    }
  },
  {
    id: "MK-027-bogovinje-river",
    type: "river",
    parent: "MK-027",
    coords: [20.9167, 41.9167],
    name: { de: "Bogovinje-Fluss", hu: "Bogovinje-folyó", ro: "Râul Bogovinje", en: "Bogovinje River" },
    description: {
      de: "Ein kleiner Gebirgsfluss, der aus dem Bogovinje-See entspringt.",
      hu: "Kis hegyi folyó, amely a Bogovinjei-tóból ered.",
      ro: "Un mic râu de munte care izvorăște din lacul Bogovinje.",
      en: "A small mountain river that originates from Bogovinje Lake."
    },
    facts: {
      de: ["Fließt durch das Dorf Bogovinje.", "Speist die landwirtschaftlichen Flächen im Tal.", "Bekannt für sein sauberes Wasser."],
      hu: ["Bogovinje falun folyik keresztül.", "Öntözi a völgy mezőgazdasági területeit.", "Tiszta vizéről ismert."],
      ro: ["Curge prin satul Bogovinje.", "Alimentează terenurile agricole din vale.", "Cunoscut pentru apa sa curată."],
      en: ["Flows through the village of Bogovinje.", "Feeds the agricultural lands in the valley.", "Known for its clean water."]
    }
  },
  // MK-028: Vrapcište
  {
    id: "MK-028-vrapciste-fields",
    type: "nature",
    parent: "MK-028",
    coords: [20.8833, 41.8333],
    name: { de: "Felder von Vrapčište", hu: "Vrapcištei mezők", ro: "Câmpiile din Vrapčište", en: "Vrapčište Fields" },
    description: {
      de: "Fruchtbare landwirtschaftliche Flächen am Fuße des Šar-Gebirges.",
      hu: "Termékeny mezőgazdasági területek a Šar-hegység lábánál.",
      ro: "Terenuri agricole fertile la poalele Munților Šar.",
      en: "Fertile agricultural lands at the foot of the Šar Mountains."
    },
    facts: {
      de: ["Bekannt für den Anbau von Gemüse und Getreide.", "Bietet einen schönen Kontrast zum Gebirge.", "Wichtig für die lokale Wirtschaft."],
      hu: ["Zöldség- és gabonatermesztéséről ismert.", "Szép kontrasztot alkot a hegyekkel.", "Fontos a helyi gazdaság számára."],
      ro: ["Cunoscute pentru cultivarea legumelor și cerealelor.", "Oferă un contrast frumos cu munții.", "Importante pentru economia locală."],
      en: ["Known for growing vegetables and cereals.", "Offers a beautiful contrast to the mountains.", "Crucial for the local economy."]
    }
  },
  {
    id: "MK-028-st-elijah-vrapciste",
    type: "historical",
    parent: "MK-028",
    coords: [20.8750, 41.8389],
    name: { de: "Kirche des hl. Elias - Vrapčište", hu: "Vrapcištei Szent Illés-templom", ro: "Biserica Sf. Ilie - Vrapčište", en: "Church of Saint Elijah - Vrapčište" },
    description: {
      de: "Eine bedeutende orthodoxe Kirche im Dorf Vrapčište.",
      hu: "Jelentős ortodox templom Vrapcište faluban.",
      ro: "O biserică ortodoxă importantă în satul Vrapčište.",
      en: "An important Orthodox church in the village of Vrapčište."
    },
    facts: {
      de: ["Ein kulturelles Denkmal der Region.", "Regelmäßiger Ort für religiöse Feste.", "Besitzt eine interessante Innenarchitektur."],
      hu: ["A régió kulturális műemléke.", "Vallási ünnepek rendszeres helyszíne.", "Érdekes belső építészettel rendelkezik."],
      ro: ["Un monument cultural al regiunii.", "Loc regulat pentru sărbători religioase.", "Deține o arhitectură interioară interesantă."],
      en: ["A cultural monument of the region.", "Regular site for religious festivals.", "Features interesting interior architecture."]
    }
  },
  // MK-029: Kriva Palanka
  {
    id: "MK-029-osogovo-monastery",
    type: "historical",
    parent: "MK-029",
    coords: [22.3667, 42.2000],
    name: { de: "Kloster Sveti Joakim Osogovski", hu: "Szent Joakim Osogovski-kolostor", ro: "Mănăstirea Sf. Ioachim Osogovski", en: "Saint Joakim Osogovski Monastery" },
    description: {
      de: "Eines der schönsten Klöster Mazedoniens, gelegen im Osogovo-Gebirge.",
      hu: "Macedónia egyik legszebb kolostora, az Osogovo-hegységben található.",
      ro: "Una dintre cele mai frumoase mănăstiri din Macedonia, situată în Munții Osogovo.",
      en: "One of the most beautiful monasteries in Macedonia, located in the Osogovo Mountains."
    },
    facts: {
      de: ["Besteht aus zwei Kirchen.", "Bekannt für seine Gastfreundschaft und Übernachtungsmöglichkeiten.", "Umgeben von dichten Eichenwäldern."],
      hu: ["Két templomból áll.", "Vendégszeretetéről és szálláslehetőségeiről ismert.", "Sűrű tölgyerdők veszik körül."],
      ro: ["Formată din două biserici.", "Cunoscută pentru ospitalitatea sa și posibilitățile de cazare.", "Înconjurată de păduri dese de stejar."],
      en: ["Consists of two churches.", "Known for its hospitality and lodging options.", "Surrounded by dense oak forests."]
    }
  },
  {
    id: "MK-029-stanicki-waterfall",
    type: "nature",
    parent: "MK-029",
    coords: [22.2833, 42.2333],
    name: { de: "Stanički-Wasserfall", hu: "Stanički-vízesés", ro: "Cascada Stanički", en: "Stanički Waterfall" },
    description: {
      de: "Ein malerischer Wasserfall in der Nähe des Dorfes Stanci.",
      hu: "Festői vízesés Stanci falu közelében.",
      ro: "O cascadă pitorească lângă satul Stanci.",
      en: "A scenic waterfall located near the village of Stanci."
    },
    facts: {
      de: ["Ein beliebtes Ziel für Wanderungen.", "Bietet Erfrischung an heißen Sommertagen.", "Das Wasser stürzt aus einer Höhe von 11 Metern."],
      hu: ["Népszerű túracélpont.", "Felfrissülést kínál a forró nyári napokon.", "A víz 11 méteres magasságból zúdul le."],
      ro: ["O destinație populară pentru drumeții.", "Oferă răcoare în zilele fierbinți de vară.", "Apa cade de la o înălțime de 11 metri."],
      en: ["A popular destination for hikes.", "Provides refreshment on hot summer days.", "The water falls from a height of 11 meters."]
    }
  },
  // MK-030: Rankovce
  {
    id: "MK-030-st-nicholas-church-psaca",
    type: "historical",
    parent: "MK-030",
    coords: [22.2167, 42.1667],
    name: { de: "Kirche des hl. Nikolaus - Psača", hu: "Psačai Szent Miklós-templom", ro: "Biserica Sf. Nicolae - Psača", en: "Church of Saint Nicholas - Psača" },
    description: {
      de: "Ein bedeutendes Denkmal der mittelalterlichen Freskenmalerei.",
      hu: "A középkori freskófestészet jelentős emléke.",
      ro: "Un monument important al picturii murale medievale.",
      en: "A significant monument of medieval fresco painting."
    },
    facts: {
      de: ["Erbaut im 14. Jahrhundert.", "Bekannt für seine realistischen Porträts der Stifter.", "Ein wichtiges kulturelles Erbe."],
      hu: ["A 14. században épült.", "Az alapítók valósághű portréiról ismert.", "Fontos kulturális örökség."],
      ro: ["Construită în secolul al XIV-lea.", "Cunoscută pentru portretele realiste ale ctitorilor.", "Un patrimoniu cultural important."],
      en: ["Built in the 14th century.", "Famous for its realistic portraits of the founders.", "A vital piece of cultural heritage."]
    }
  },
  {
    id: "MK-030-kriva-river-valley",
    type: "nature",
    parent: "MK-030",
    coords: [22.1500, 42.1833],
    name: { de: "Kriva-Reka-Tal", hu: "Kriva-folyó völgye", ro: "Valea râului Kriva", en: "Kriva River Valley" },
    description: {
      de: "Ein malerisches Tal, durch das die Kriva Reka fließt.",
      hu: "Festői völgy, amelyen a Kriva-folyó folyik keresztül.",
      ro: "O vale pitorească prin care curge râul Kriva.",
      en: "A scenic valley through which the Kriva river flows."
    },
    facts: {
      de: ["Bietet fruchtbare Böden für die Landwirtschaft.", "Ein Ort für ruhige Spaziergänge.", "Umgeben von sanften Hügeln."],
      hu: ["Termékeny talajt biztosít a mezőgazdaságnak.", "Helyszín csendes sétákhoz.", "Lankás dombok veszik körül."],
      ro: ["Oferă soluri fertile pentru agricultură.", "Un loc pentru plimbări liniștite.", "Înconjurată de dealuri domoale."],
      en: ["Provides fertile soil for agriculture.", "A place for peaceful walks.", "Surrounded by rolling hills."]
    }
  }
];
