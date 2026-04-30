import type { POI } from "./poi";

export const mkPoisPart1: POI[] = [
  // MK-001: Struga
  {
    id: "MK-001-struga-city",
    type: "city",
    parent: "MK-001",
    coords: [20.6783, 41.1778],
    name: { de: "Struga", hu: "Sztruga", ro: "Struga", en: "Struga" },
    description: {
      de: "Struga ist eine Stadt am Ufer des Ohridsees, bekannt für den Fluss Schwarzer Drim.",
      hu: "Sztruga az Ohridi-tó partján fekvő város, amely a Fekete-Drim folyóról ismert.",
      ro: "Struga este un oraș pe malul lacului Ohrid, cunoscut pentru râul Drinul Negru.",
      en: "Struga is a city on the shores of Lake Ohrid, known for the Black Drin river."
    },
    descriptionAdvanced: {
      de: "Struga liegt idyllisch am Abfluss des Ohridsees in den Fluss Schwarzer Drim. Die Stadt ist bekannt für ihre kulturelle Bedeutung und die alljährliche Dichterlesung, die internationale Schriftsteller anzieht. Die entspannte Atmosphäre wird durch die zahlreichen Cafés am Flussufer geprägt. Sachkunde K5 — Wasserwege und Städte.",
      hu: "",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Die Dichterabende von Struga wurden 1961 ins Leben gerufen.",
        "Der Schwarze Drim ist einer der wenigen Flüsse, die direkt aus einem See entspringen.",
        "Struga wird oft die 'Stadt der Poesie' genannt.",
        "Die Stadt liegt etwa 700 Meter über dem Meeresspiegel.",
        "In der Nähe befinden sich bedeutende archäologische Stätten.",
        "Die Architektur zeigt Einflüsse aus der osmanischen Zeit."
      ],
      hu: [],
      ro: [],
      en: []
    },
    facts: {
      de: ["Berühmt für die 'Abende der Poesie von Struga'.", "Der Fluss Schwarzer Drim entspringt hier dem Ohridsee.", "Wurde in der Antike 'Enchalon' genannt."],
      hu: ["Híres a 'Sztrugai Költészeti Estek' eseményről.", "Itt folyik ki a Fekete-Drim az Ohridi-tóból.", "Az ókorban 'Enchalon' néven ismerték."],
      ro: ["Renumit pentru 'Serile de Poezie de la Struga'.", "Râul Drinul Negru izvorăște aici din Lacul Ohrid.", "În antichitate a fost numit 'Enchalon'."],
      en: ["Famous for the 'Struga Poetry Evenings'.", "The Black Drin river flows out of Lake Ohrid here.", "Known as 'Enchalon' in ancient times."]
    }
  },
  {
    id: "MK-001-black-drin",
    type: "river",
    parent: "MK-001",
    coords: [20.6775, 41.1800],
    name: { de: "Schwarzer Drim", hu: "Fekete-Drim", ro: "Drinul Negru", en: "Black Drin" },
    description: {
      de: "Ein Fluss, der aus dem Ohridsee in Struga fließt und durch Albanien fließt.",
      hu: "Egy folyó, amely az Ohridi-tóból folyik ki Sztrugánál, és Albánián keresztül halad.",
      ro: "Un râu care curge din Lacul Ohrid la Struga și traversează Albania.",
      en: "A river that flows out of Lake Ohrid in Struga and passes through Albania."
    },
    facts: {
      de: ["Hauptabfluss des Ohridsees.", "Bekannt für seine kristallklaren Gewässer in Struga.", "Wichtige Quelle für Wasserkraft."],
      hu: ["Az Ohridi-tó fő lefolyása.", "Kristálytiszta vizéről ismert Sztrugánál.", "Fontos vízenergia-forrás."],
      ro: ["Principalul curs de apă care drenează Lacul Ohrid.", "Cunoscut pentru apele sale cristaline în Struga.", "Sursă importantă de energie hidroelectrică."],
      en: ["Main outlet of Lake Ohrid.", "Known for its crystal clear waters in Struga.", "Important source for hydroelectric power."]
    }
  },
  // MK-002: Centar župa
  {
    id: "MK-002-debar-lake",
    type: "lake",
    parent: "MK-002",
    coords: [20.5250, 41.4889],
    name: { de: "Debar-See", hu: "Debari-tó", ro: "Lacul Debar", en: "Debar Lake" },
    description: {
      de: "Ein künstlicher See am Fluss Schwarzer Drim nahe der albanischen Grenze.",
      hu: "Egy mesterséges tó a Fekete-Drim folyón, az albán határ közelében.",
      ro: "Un lac artificial pe râul Drinul Negru, aproape de granița cu Albania.",
      en: "An artificial lake on the Black Drin river near the Albanian border."
    },
    facts: {
      de: ["Größter Stausee in Nordmazedonien.", "Entstanden durch den Bau der Špilje-Talsperre.", "Bietet hervorragende Bedingungen zum Angeln."],
      hu: ["Észak-Macedónia legnagyobb víztározója.", "A Špilje-gát megépítésével jött létre.", "Kiváló horgászati lehetőségeket kínál."],
      ro: ["Cel mai mare lac de acumulare din Macedonia de Nord.", "Creat prin construcția barajului Špilje.", "Oferă condiții excelente pentru pescuit."],
      en: ["Largest reservoir in North Macedonia.", "Created by the construction of the Špilje dam.", "Offers excellent conditions for fishing."]
    }
  },
  {
    id: "MK-002-kodzadzik",
    type: "historical",
    parent: "MK-002",
    coords: [20.6083, 41.4422],
    name: { de: "Kodžadžik", hu: "Kodzsádzsik", ro: "Kodzadzik", en: "Kodžadžik" },
    description: {
      de: "Ein Dorf, das als Geburtsort von Mustafa Kemal Atatürks Vater bekannt ist.",
      hu: "Egy falu, amely Mustafa Kemal Atatürk apjának szülőhelyeként ismert.",
      ro: "Un sat cunoscut ca locul de naștere al tatălui lui Mustafa Kemal Atatürk.",
      en: "A village known as the birthplace of Mustafa Kemal Atatürk's father."
    },
    facts: {
      de: ["Heimatort von Ali Rıza Efendi.", "Es gibt ein Gedenkhaus für die Familie Atatürk.", "Bedeutende Stätte für den türkischen Tourismus."],
      hu: ["Ali Rıza Efendi szülőhelye.", "Atatürk családjának emlékháza található itt.", "Fontos helyszín a török turizmus számára."],
      ro: ["Satul natal al lui Ali Rıza Efendi.", "Există o casă memorială pentru familia Atatürk.", "Sit important pentru turismul turc."],
      en: ["Home village of Ali Rıza Efendi.", "Features a memorial house for the Atatürk family.", "Significant site for Turkish tourism."]
    }
  },
  // MK-003: Debar
  {
    id: "MK-003-debar-city",
    type: "city",
    parent: "MK-003",
    coords: [20.5272, 41.5236],
    name: { de: "Debar", hu: "Debar", ro: "Debar", en: "Debar" },
    description: {
      de: "Debar ist eine Stadt im Westen des Landes, umgeben von Bergen und dem Debar-See.",
      hu: "Debar az ország nyugati részén fekvő város, hegyekkel és a Debari-tóval körülvéve.",
      ro: "Debar este un oraș în vestul țării, înconjurat de munți și de lacul Debar.",
      en: "Debar is a city in the west of the country, surrounded by mountains and Debar Lake."
    },
    facts: {
      de: ["Bekannt für seine Gipsindustrie.", "Hatte historisch eine strategische Lage an der Via Egnatia.", "Berühmt für das Thermalbad Banjishte."],
      hu: ["Gipsziparáról ismert.", "Történelmileg stratégiai helyen feküdt a Via Egnatia mentén.", "Híres a Banjishte gyógyfürdőről."],
      ro: ["Cunoscut pentru industria ghipsului.", "Istoric, a avut o poziție strategică pe Via Egnatia.", "Renumit pentru băile termale Banjishte."],
      en: ["Known for its gypsum industry.", "Historically had a strategic location on the Via Egnatia.", "Famous for the Banjishte thermal spa."]
    }
  },
  {
    id: "MK-003-st-george-monastery",
    type: "historical",
    parent: "MK-003",
    coords: [20.5608, 41.5164],
    name: { de: "Kloster des hl. Georg", hu: "Szent György-kolostor", ro: "Mănăstirea Sf. Gheorghe", en: "St. George the Victorious Monastery" },
    description: {
      de: "Ein orthodoxes Kloster im Dorf Rajčica, bekannt für seine Schnitzkunst.",
      hu: "Ortodox kolostor Rajčica faluban, amely faragott ikonosztázáról ismert.",
      ro: "O mănăstire ortodoxă în satul Rajčica, cunoscută pentru sculpturile sale.",
      en: "An Orthodox monastery in the village of Rajčica, known for its woodcarving."
    },
    facts: {
      de: ["Beherbergt Reliquien des heiligen Georg.", "Teil des Klosters Bigorski.", "Bekannt für die Herstellung von Mitren für Bischöfe."],
      hu: ["Szent György ereklyéit őrizik itt.", "A Bigorski-kolostor része.", "Püspöki süvegek (mitrák) készítéséről híres."],
      ro: ["Adăpostește moaștele Sfântului Gheorghe.", "Face parte din mănăstirea Bigorski.", "Cunoscută pentru fabricarea mitrelor pentru episcopi."],
      en: ["Houses relics of Saint George.", "Part of the Bigorski monastery complex.", "Known for making mitres for bishops."]
    }
  },
  // MK-004: Mavrovo and Rostusa
  {
    id: "MK-004-bigorski-monastery",
    type: "historical",
    parent: "MK-004",
    coords: [20.6111, 41.6219],
    name: { de: "Kloster Sveti Jovan Bigorski", hu: "Szent János Bigorski-kolostor", ro: "Mănăstirea Sf. Ioan Bigorski", en: "Saint Jovan Bigorski Monastery" },
    description: {
      de: "Eines der bedeutendsten Klöster Mazedoniens, berühmt für seine Ikonostase.",
      hu: "Macedónia egyik legjelentősebb kolostora, híres az ikonosztázáról.",
      ro: "Una dintre cele mai importante mănăstiri din Macedonia, renumită pentru iconostasul său.",
      en: "One of Macedonia's most significant monasteries, famous for its iconostasis."
    },
    facts: {
      de: ["Gegründet im Jahr 1020.", "Die Ikonostase ist ein Meisterwerk der Holzschnitzerei.", "Liegt im Radika-Flusstal."],
      hu: ["1020-ban alapították.", "Ikonosztáza a fafaragás mesterműve.", "A Radika-folyó völgyében található."],
      ro: ["Fondată în anul 1020.", "Iconostasul este o capodoperă a sculpturii în lemn.", "Situată în valea râului Radika."],
      en: ["Founded in the year 1020.", "The iconostasis is a masterpiece of woodcarving.", "Located in the Radika river valley."]
    }
  },
  {
    id: "MK-004-mavrovo-lake",
    type: "lake",
    parent: "MK-004",
    coords: [20.7333, 41.7167],
    name: { de: "Mavrovo-See", hu: "Mavrovói-tó", ro: "Lacul Mavrovo", en: "Mavrovo Lake" },
    description: {
      de: "Ein künstlicher See im Mavrovo-Nationalpark, ein beliebtes Touristenziel.",
      hu: "Mesterséges tó a Mavrovo Nemzeti Parkban, népszerű turisztikai célpont.",
      ro: "Un lac artificial în Parcul Național Mavrovo, o destinație turistică populară.",
      en: "An artificial lake in Mavrovo National Park, a popular tourist destination."
    },
    facts: {
      de: ["Die halb versunkene Nikolauskirche ist ein bekanntes Fotomotiv.", "Zentrum für Wintersport und Wandern.", "Teil des größten Nationalparks des Landes."],
      hu: ["A félig elsüllyedt Szent Miklós-templom ismert fotótéma.", "A téli sportok és a túrázás központja.", "Az ország legnagyobb nemzeti parkjának része."],
      ro: ["Biserica Sfântul Nicolae, pe jumătate scufundată, este un motiv fotografic cunoscut.", "Centru pentru sporturi de iarnă și drumeții.", "Parte a celui mai mare parc național din țară."],
      en: ["The half-submerged St. Nicholas church is a famous photo spot.", "Center for winter sports and hiking.", "Part of the country's largest national park."]
    }
  },
  // MK-005: Gostivar
  {
    id: "MK-005-gostivar-city",
    type: "city",
    parent: "MK-005",
    coords: [20.9114, 41.7961],
    name: { de: "Gostivar", hu: "Gosztivar", ro: "Gostivar", en: "Gostivar" },
    description: {
      de: "Gostivar liegt am Oberlauf des Vardar am Fuße des Šar-Gebirges.",
      hu: "Gosztivar a Vardar felső folyásánál, a Šar-hegység lábánál fekszik.",
      ro: "Gostivar este situat pe cursul superior al Vardarului, la poalele Munților Šar.",
      en: "Gostivar is located on the upper course of the Vardar at the foot of the Šar Mountains."
    },
    facts: {
      de: ["Der Uhrturm (Saat Kula) ist ein Wahrzeichen der Stadt.", "Wichtiger Handelsknotenpunkt.", "Bekannt für seine Baklava und traditionelle Küche."],
      hu: ["Az óratorony (Saat Kula) a város jelképe.", "Fontos kereskedelmi csomópont.", "Híres a baklavájáról és hagyományos konyhájáról."],
      ro: ["Turnul cu ceas (Saat Kula) este un simbol al orașului.", "Important nod comercial.", "Cunoscut pentru baclava și bucătăria tradițională."],
      en: ["The clock tower (Saat Kula) is a landmark of the city.", "Important commercial hub.", "Known for its baklava and traditional cuisine."]
    }
  },
  {
    id: "MK-005-vrelo-vardar",
    type: "nature",
    parent: "MK-005",
    coords: [20.8872, 41.7656],
    name: { de: "Vardar-Quelle", hu: "Vardar-forrás", ro: "Izvorul Vardarului", en: "Vardar Spring" },
    description: {
      de: "Die Quelle des Flusses Vardar befindet sich im Dorf Vrutok nahe Gostivar.",
      hu: "A Vardar folyó forrása Vrutok faluban található, Gosztivar közelében.",
      ro: "Izvorul râului Vardar se află în satul Vrutok, lângă Gostivar.",
      en: "The source of the Vardar river is located in the village of Vrutok near Gostivar."
    },
    facts: {
      de: ["Der Vardar ist der längste Fluss Mazedoniens.", "Vrutok ist bekannt für seine Forellenzucht.", "Beliebtes Ausflugsziel für Naturliebhaber."],
      hu: ["A Vardar Macedónia leghosszabb folyója.", "Vrutok a pisztrángtenyésztéséről ismert.", "Népszerű kirándulóhely a természetkedvelőknek."],
      ro: ["Vardar este cel mai lung râu din Macedonia.", "Vrutok este cunoscut pentru păstrăvăriile sale.", "Destinație populară pentru iubitorii de natură."],
      en: ["The Vardar is the longest river in Macedonia.", "Vrutok is known for its trout farms.", "Popular excursion site for nature lovers."]
    }
  },
  // MK-006: Vevčani
  {
    id: "MK-006-vevcani-springs",
    type: "nature",
    parent: "MK-006",
    coords: [20.5833, 41.2403],
    name: { de: "Quellen von Vevčani", hu: "Vevčani-források", ro: "Izvoarele din Vevčani", en: "Vevčani Springs" },
    description: {
      de: "Ein Naturdenkmal mit zahlreichen Wasserquellen am Fuße des Jablanica-Gebirges.",
      hu: "Természeti emlék számos vízforrással a Jablanica-hegység lábánál.",
      ro: "Un monument al naturii cu numeroase izvoare de apă la poalele Munților Jablanica.",
      en: "A natural monument with numerous water springs at the foot of the Jablanica mountain."
    },
    facts: {
      de: ["Bekannt für die 'Vevčani-Republik' (symbolische Unabhängigkeit).", "Ort eines berühmten jährlichen Karnevals.", "Das Wasser ist extrem sauber und trinkbar."],
      hu: ["A 'Vevčani Köztársaságról' (szimbolikus függetlenség) ismert.", "Híres éves karnevál helyszíne.", "A víz rendkívül tiszta és iható."],
      ro: ["Cunoscut pentru 'Republica Vevčani' (independență simbolică).", "Locul unui faimos carnaval anual.", "Apa este extrem de curată și potabilă."],
      en: ["Known for the 'Vevčani Republic' (symbolic independence).", "Site of a famous annual carnival.", "The water is extremely clean and drinkable."]
    }
  },
  {
    id: "MK-006-vevcani-village",
    type: "city",
    parent: "MK-006",
    coords: [20.5928, 41.2408],
    name: { de: "Vevčani", hu: "Vevčani", ro: "Vevčani", en: "Vevčani" },
    description: {
      de: "Ein malerisches Bergdorf, bekannt für seine Architektur und Traditionen.",
      hu: "Festői hegyi falu, amely építészetéről és hagyományairól ismert.",
      ro: "Un sat de munte pitoresc, cunoscut pentru arhitectura și tradițiile sale.",
      en: "A picturesque mountain village known for its architecture and traditions."
    },
    facts: {
      de: ["Besitzt einen eigenen 'Pass' und Währung als Souvenir.", "Berühmt für seine Steinarchitektur.", "Heimat vieler qualifizierter Steinmetze."],
      hu: ["Saját 'útlevéllel' és pénznemmel rendelkezik szuvenírként.", "Híres kőépítészetéről.", "Sok képzett kőfaragó hazája."],
      ro: ["Are propriul 'pașaport' și monedă ca suvenir.", "Renumit pentru arhitectura sa în piatră.", "Patria multor pietrari calificați."],
      en: ["Has its own 'passport' and currency as souvenirs.", "Famous for its stone architecture.", "Home to many skilled stonemasons."]
    }
  },
  // MK-007: Ohrid
  {
    id: "MK-007-ohrid-old-town",
    type: "historical",
    parent: "MK-007",
    coords: [20.7944, 41.1153],
    name: { de: "Ohrid-Altstadt", hu: "Ohrid óvárosa", ro: "Orașul vechi Ohrid", en: "Ohrid Old Town" },
    description: {
      de: "Die historische Altstadt von Ohrid, Teil des UNESCO-Welterbes.",
      hu: "Ohrid történelmi óvárosa, az UNESCO világörökség része.",
      ro: "Centrul istoric al orașului Ohrid, parte a patrimoniului mondial UNESCO.",
      en: "The historic old town of Ohrid, part of the UNESCO World Heritage site."
    },
    facts: {
      de: ["Gilt als das 'Jerusalem des Balkans'.", "Bekannt für seine 365 historischen Kirchen.", "Beherbergt ein antikes Theater."],
      hu: ["A 'Balkán Jeruzsálemeként' emlegetik.", "365 történelmi templomáról ismert.", "Antik színháznak ad otthont."],
      ro: ["Considerat 'Ierusalimul Balcanilor'.", "Cunoscut pentru cele 365 de biserici istorice.", "Găzduiește un teatru antic."],
      en: ["Known as the 'Jerusalem of the Balkans'.", "Famous for once having 365 churches.", "Home to an ancient theater."]
    }
  },
  {
    id: "MK-007-st-klement-panteleimon",
    type: "historical",
    parent: "MK-007",
    coords: [20.7911, 41.1122],
    name: { de: "Plaošnik", hu: "Plaošnik", ro: "Plaošnik", en: "Plaošnik" },
    description: {
      de: "Eine archäologische Stätte und Kloster, Sitz der ersten slawischen Universität.",
      hu: "Régészeti helyszín és kolostor, az első szláv egyetem székhelye.",
      ro: "Un sit arheologic și mănăstire, sediul primei universități slave.",
      en: "An archaeological site and monastery, seat of the first Slavic university."
    },
    facts: {
      de: ["Heimat des hl. Klemens von Ohrid.", "Wichtiges Zentrum der kyrillischen Schrift.", "Neu errichtete Kirche des hl. Panteleimon."],
      hu: ["Ohridi Szent Kelemen otthona.", "A cirill írásbeliség fontos központja.", "Az újjáépített Szent Panteleimon-templom."],
      ro: ["Patria Sfântului Clement din Ohrid.", "Important centru al scrierii chirilice.", "Biserica Sfântul Panteleimon recent reconstruită."],
      en: ["Home of Saint Clement of Ohrid.", "Important center for Cyrillic literacy.", "Features the rebuilt church of St. Panteleimon."]
    }
  },
  // MK-008: Debarca
  {
    id: "MK-008-belcista-wetland",
    type: "nature",
    parent: "MK-008",
    coords: [20.8333, 41.3000],
    name: { de: "Belčišta-Feuchtgebiet", hu: "Belčišta-mocsárvidék", ro: "Mlaștina Belčišta", en: "Belčišta Wetland" },
    description: {
      de: "Das größte Sumpfgebiet in Nordmazedonien, reich an Artenvielfalt.",
      hu: "Észak-Macedónia legnagyobb mocsári területe, gazdag élővilággal.",
      ro: "Cea mai mare zonă mlăștinoasă din Macedonia de Nord, bogată în biodiversitate.",
      en: "The largest wetland area in North Macedonia, rich in biodiversity."
    },
    facts: {
      de: ["Heimat vieler seltener Vogelarten.", "Wichtiges Ökosystem in der Region Debarca.", "Bekannt als 'Sini Virovi' (Blaue Teiche)."],
      hu: ["Számos ritka madárfaj otthona.", "Fontos ökoszisztéma Debarca régiójában.", "Sini Virovi (Kék-tavak) néven is ismert."],
      ro: ["Patria multor specii rare de păsări.", "Ecosistem important în regiunea Debarca.", "Cunoscut sub numele de 'Sini Virovi' (Bălțile Albastre)."],
      en: ["Home to many rare bird species.", "Crucial ecosystem in the Debarca region.", "Known locally as 'Sini Virovi' (Blue Ponds)."]
    }
  },
  {
    id: "MK-008-zleski-monastery",
    type: "historical",
    parent: "MK-008",
    coords: [20.8500, 41.2667],
    name: { de: "Kloster Zlešti", hu: "Zlešti-kolostor", ro: "Mănăstirea Zlešti", en: "Zlešti Monastery" },
    description: {
      de: "Überreste einer frühchristlichen Basilika und eines mittelalterlichen Klosters.",
      hu: "Kora keresztény bazilika és középkori kolostor maradványai.",
      ro: "Rămășițele unei basilici creștine timpurii și ale unei mănăstiri medievale.",
      en: "Remains of an early Christian basilica and a medieval monastery."
    },
    facts: {
      de: ["Gewidmet dem hl. Nikolaus.", "Wichtige archäologische Ausgrabungsstätte.", "Liegt in einer malerischen ländlichen Umgebung."],
      hu: ["Szent Miklósnak szentelve.", "Fontos régészeti ásatási terület.", "Festői vidéki környezetben fekszik."],
      ro: ["Dedicată Sfântului Nicolae.", "Important sit de săpături arheologice.", "Situată într-un cadru rural pitoresc."],
      en: ["Dedicated to Saint Nicholas.", "Significant archaeological excavation site.", "Located in a scenic rural setting."]
    }
  },
  // MK-009: Resen
  {
    id: "MK-009-saraj-resen",
    type: "historical",
    parent: "MK-009",
    coords: [21.0119, 41.0889],
    name: { de: "Saraj von Resen", hu: "Reseni Saraj", ro: "Sarajul din Resen", en: "Saraj of Resen" },
    description: {
      de: "Ein neoklassizistisches Schloss, das dem französischen Schloss Chenonceau nachempfunden ist.",
      hu: "Neoklasszicista palota, amelyet a francia Chenonceau-kastély mintájára építettek.",
      ro: "Un palat neoclasic, modelat după castelul francez Chenonceau.",
      en: "A Neoclassical palace modeled after the French Château de Chenonceau."
    },
    facts: {
      de: ["Erbaut von Ahmed Niyazi Bey im frühen 20. Jahrhundert.", "Beherbergt heute eine Keramikgalerie und ein Museum.", "Eines der prächtigsten Gebäude der Region."],
      hu: ["Ahmed Niyazi Bey építtette a 20. század elején.", "Ma kerámiagaléria és múzeum működik benne.", "A régió egyik legpompásabb épülete."],
      ro: ["Construit de Ahmed Niyazi Bey la începutul secolului al XX-lea.", "Găzduiește astăzi o galerie de ceramică și un muzeu.", "Una dintre cele mai somptuoase clădiri din regiune."],
      en: ["Built by Ahmed Niyazi Bey in the early 20th century.", "Now houses a ceramics gallery and a museum.", "One of the most magnificent buildings in the region."]
    }
  },
  {
    id: "MK-009-golem-grad",
    type: "nature",
    parent: "MK-009",
    coords: [20.9858, 40.8653],
    name: { de: "Insel Golem Grad", hu: "Golem Grad-sziget", ro: "Insula Golem Grad", en: "Golem Grad Island" },
    description: {
      de: "Die einzige Insel in Nordmazedonien, auch als Schlangeninsel bekannt.",
      hu: "Észak-Macedónia egyetlen szigete, amelyet Kígyó-szigetként is ismernek.",
      ro: "Singura insulă din Macedonia de Nord, cunoscută și sub numele de Insula Șerpilor.",
      en: "The only island in North Macedonia, also known as Snake Island."
    },
    facts: {
      de: ["Befindet sich im Prespasee.", "Bekannt für ihre reiche Flora und Fauna.", "Beherbergt Ruinen antiker und mittelalterlicher Kirchen."],
      hu: ["A Prespai-tóban található.", "Gazdag növény- és állatvilágáról ismert.", "Antik és középkori templomromokat őriz."],
      ro: ["Situată în Lacul Prespa.", "Cunoscută pentru flora și fauna sa bogată.", "Adăpostește ruine ale unor biserici antice și medievale."],
      en: ["Located in Lake Prespa.", "Known for its rich flora and fauna.", "Houses ruins of ancient and medieval churches."]
    }
  },
  // MK-010: Novo Selo
  {
    id: "MK-010-kolesino-waterfall",
    type: "nature",
    parent: "MK-010",
    coords: [22.8114, 41.3822],
    name: { de: "Kolešino-Wasserfall", hu: "Kolešino-vízesés", ro: "Cascada Kolešino", en: "Kolešino Waterfall" },
    description: {
      de: "Ein wunderschöner Wasserfall am Fuße des Belasica-Gebirges.",
      hu: "Gyönyörű vízesés a Belasica-hegység lábánál.",
      ro: "O cascadă frumoasă la poalele Munților Belasica.",
      en: "A beautiful waterfall located at the foot of the Belasica mountain."
    },
    facts: {
      de: ["Mit 19 Metern einer der höchsten des Landes.", "Entsteht durch den Fluss Baba.", "Ein beliebtes Picknickziel."],
      hu: ["19 méteres magasságával az egyik legmagasabb az országban.", "A Baba-folyó hozza létre.", "Népszerű kirándulóhely."],
      ro: ["Cu 19 metri, este una dintre cele mai înalte din țară.", "Formată de râul Baba.", "O destinație populară pentru picnic."],
      en: ["At 19 meters, one of the highest in the country.", "Created by the Baba river.", "A popular picnic destination."]
    }
  },
  {
    id: "MK-010-smolare-waterfall",
    type: "nature",
    parent: "MK-010",
    coords: [22.8983, 41.3653],
    name: { de: "Smolare-Wasserfall", hu: "Smolare-vízesés", ro: "Cascada Smolare", en: "Smolare Waterfall" },
    description: {
      de: "Der höchste Wasserfall Nordmazedoniens mit einer Fallhöhe von 39,5 Metern.",
      hu: "Észak-Macedónia legmagasabb vízesése, 39,5 méteres magassággal.",
      ro: "Cea mai înaltă cascadă din Macedonia de Nord, cu o cădere de 39,5 metri.",
      en: "The highest waterfall in North Macedonia, with a fall of 39.5 meters."
    },
    descriptionAdvanced: {
      de: "Der Smolare-Wasserfall ist eine der spektakulärsten Naturschönheiten des Landes. Er verbirgt sich tief in den Wäldern des Belasica-Gebirges und ist über eine aufwendige Treppenanlage zugänglich, die Besucher direkt an die Basis führt. Er beeindruckt durch seine Kraft und Höhe. Erdkunde K5 — Naturdenkmäler.",
      hu: "",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Die Anlage ist als touristisches Ziel sehr gut erschlossen.",
        "Der Weg bietet großartige Ausblicke auf die Umgebung.",
        "Das Wasser ist von hoher Reinheit.",
        "Der Wasserfall ist ein Symbol des Naturerbes in der Region.",
        "Es ist ein wichtiges Ziel für umweltbewussten Tourismus.",
        "Die Umgebung ist reich an seltenen Pflanzen."
      ],
      hu: [],
      ro: [],
      en: []
    },
    facts: {
      de: ["Liegt tief im Belasica-Gebirge.", "Erreichbar über eine hölzerne Treppenanlage.", "Ganzjährig wasserführend."],
      hu: ["Mélyen a Belasica-hegységben található.", "Fa lépcsősoron keresztül érhető el.", "Egész évben van benne víz."],
      ro: ["Situată adânc în Munții Belasica.", "Accesibilă printr-un sistem de scări din lemn.", "Are un debit constant pe tot parcursul anului."],
      en: ["Located deep in the Belasica mountain range.", "Accessible via a wooden stairway.", "Flows throughout the entire year."]
    }
  }
];
