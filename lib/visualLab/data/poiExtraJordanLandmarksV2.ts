import type { POI } from "./poi";

export const poiExtraJordanLandmarksV2: POI[] = [
  {
    id: "al-khazneh-landmarks-v2",
    type: "landmark",
    parent: "JO-MN",
    coords: [35.4519, 30.3222],
    name: { de: "Al-Khazneh", hu: "Al-Khazneh (Kincstár)", ro: "Al-Khazneh (Trezoreria)", en: "Al-Khazneh (The Treasury)" },
    description: {
      de: "Das berühmte Schatzhaus ist das ikonischste Monument Petras. Es wurde im 1. Jahrhundert aus dem massiven roten Sandstein gemeißelt.",
      hu: "A híres Kincstár Petra legikonikusabb műemléke. Az 1. században faragták ki a hatalmas vörös homokkő sziklafalból.",
      ro: "Faimoasa Trezorerie este cel mai iconic monument din Petra. A fost sculptată în stânca masivă de gresie roșie în secolul I.",
      en: "The famous Treasury is the most iconic monument of Petra. It was carved out of the massive red sandstone cliff in the 1st century."
    },
    facts: {
      de: ["Die Fassade ist 40 Meter hoch.", "Ursprünglich diente es als Königsgrab.", "Es ist der Endpunkt des Siq.", "Bekannt aus dem Film Indiana Jones."],
      hu: ["A homlokzat 40 méter magas.", "Eredetileg királyi sírként szolgált.", "Ez a Siq szurdok végpontja.", "Az Indiana Jones filmből is ismert."],
      ro: ["Fațada are 40 de metri înălțime.", "Inițial a servit drept mormânt regal.", "Este punctul final al defileului Siq.", "Cunoscut din filmul Indiana Jones."],
      en: ["The facade is 40 meters high.", "It originally served as a royal tomb.", "It is the end point of the Siq.", "Known from the Indiana Jones movie."]
    }
  },
  {
    id: "ad-deir-landmarks-v2",
    type: "landmark",
    parent: "JO-MN",
    coords: [35.4320, 30.3385],
    name: { de: "Ad-Deir (Das Kloster)", hu: "Ad-Deir (A Kolostor)", ro: "Ad-Deir (Mănăstirea)", en: "Ad-Deir (The Monastery)" },
    description: {
      de: "Das Kloster ist eines der größten Monumente in Petra und erfordert einen Aufstieg über 800 Stufen. Es besticht durch seine enorme Größe und abgelegene Lage.",
      hu: "A Kolostor Petra egyik legnagyobb műemléke, amelyhez több mint 800 lépcsőfok megmászása szükséges. Lenyűgöző a hatalmas mérete és elszigetelt fekvése.",
      ro: "Mănăstirea este unul dintre cele mai mari monumente din Petra și necesită urcarea a peste 800 de trepte. Impresionează prin dimensiunea sa enormă și locația izolată.",
      en: "The Monastery is one of the largest monuments in Petra and requires climbing over 800 steps. It impresses with its enormous size and remote location."
    },
    facts: {
      de: ["Die Breite beträgt fast 50 Meter.", "Es wurde im frühen 2. Jahrhundert erbaut.", "Der Name stammt von byzantinischen Kreuzen im Inneren.", "Es diente vermutlich als nabatäischer Tempel."],
      hu: ["A szélessége közel 50 méter.", "A 2. század elején épült.", "Nevét a belsejében lévő bizánci keresztekről kapta.", "Feltehetően nabateus templomként szolgált."],
      ro: ["Lățimea este de aproape 50 de metri.", "A fost construit la începutul secolului al II-lea.", "Numele provine de la crucile bizantine din interior.", "Probabil a servit drept templu nabatean."],
      en: ["The width is nearly 50 meters.", "It was built in the early 2nd century.", "The name comes from Byzantine crosses inside.", "It probably served as a Nabataean temple."]
    }
  },
  {
    id: "the-siq-landmarks-v2",
    type: "landmark",
    parent: "JO-MN",
    coords: [35.4589, 30.3223],
    name: { de: "Der Siq", hu: "A Siq", ro: "Defileul Siq", en: "The Siq" },
    description: {
      de: "Der schmale Canyon ist der dramatische Haupteingang zur antiken Stadt Petra. Die hohen Felswände schirmen das Sonnenlicht ab und leiten Besucher direkt zum Schatzhaus.",
      hu: "A szűk kanyon Petra drámai főbejárata. A magas sziklafalak elzárják a napfényt, és a látogatókat egyenesen a Kincstárhoz vezetik.",
      ro: "Canionul îngust este intrarea principală dramatică în orașul antic Petra. Pereții înalți de stâncă blochează lumina soarelui și conduc vizitatorii direct la Trezorerie.",
      en: "The narrow canyon is the dramatic main entrance to the ancient city of Petra. The high rock walls block the sunlight and lead visitors directly to the Treasury."
    },
    facts: {
      de: ["Die Schlucht ist etwa 1,2 Kilometer lang.", "Die Felswände sind bis zu 80 Meter hoch.", "Sie entstand durch tektonische Kräfte.", "Es gibt Reste antiker Wasserkanäle an den Wänden."],
      hu: ["A szurdok mintegy 1,2 kilométer hosszú.", "A sziklafalak akár 80 méter magasak is lehetnek.", "Tektonikus erők hozták létre.", "Az ősi vízcsatornák maradványai a falakon láthatók."],
      ro: ["Defileul are o lungime de aproximativ 1,2 kilometri.", "Pereții de stâncă au o înălțime de până la 80 de metri.", "A fost creat de forțe tectonice.", "Există rămășițe ale canalelor de apă antice pe pereți."],
      en: ["The gorge is about 1.2 kilometers long.", "The rock walls are up to 80 meters high.", "It was created by tectonic forces.", "There are remains of ancient water channels on the walls."]
    }
  },
  {
    id: "royal-tombs-petra-landmarks-v2",
    type: "landmark",
    parent: "JO-MN",
    coords: [35.4468, 30.3323],
    name: { de: "Königsgräber von Petra", hu: "Királyi sírok (Petra)", ro: "Mormintele Regale (Petra)", en: "Royal Tombs of Petra" },
    description: {
      de: "Diese imposante Reihe von Gräbern ist in die Felswand des Jabal al-Khubtha gehauen. Sie umfassen das Urnengrab, das Seidengrab und das Palastgrab.",
      hu: "Ez az impozáns sírsor a Jabal al-Khubtha sziklafalába van vájva. Közéjük tartozik az Urnasír, a Selyemsír és a Palotasír.",
      ro: "Acest șir impunător de morminte este sculptat în peretele stâncos al Jabal al-Khubtha. Acestea includ Mormântul Urnei, Mormântul de Mătase și Mormântul Palatului.",
      en: "This imposing row of tombs is carved into the rock face of Jabal al-Khubtha. They include the Urn Tomb, the Silk Tomb, and the Palace Tomb."
    },
    facts: {
      de: ["Sie überblicken das Haupttal von Petra.", "Das Urnengrab hat einen großen Vorhof.", "Das Seidengrab besticht durch farbige Gesteinsschichten.", "Sie wurden für nabatäische Könige errichtet."],
      hu: ["Petra fő völgyére néznek.", "Az Urnasírnak nagy előudvara van.", "A Selyemsír a színes kőzetrétegeivel nyűgöz le.", "Nabateus királyok számára épültek."],
      ro: ["Ele au vedere la valea principală din Petra.", "Mormântul Urnei are o curte mare.", "Mormântul de Mătase impresionează cu straturile sale colorate de piatră.", "Au fost construite pentru regii nabateeni."],
      en: ["They overlook the main valley of Petra.", "The Urn Tomb has a large courtyard.", "The Silk Tomb impresses with colored rock layers.", "They were built for Nabataean kings."]
    }
  },
  {
    id: "great-temple-petra-landmarks-v2",
    type: "landmark",
    parent: "JO-MN",
    coords: [35.4439, 30.3283],
    name: { de: "Großer Tempel von Petra", hu: "Petra Nagy Temploma", ro: "Marele Templu din Petra", en: "Great Temple of Petra" },
    description: {
      de: "Dieser weitläufige monumentale Komplex liegt im Zentrum von Petra. Er war wahrscheinlich ein großes religiöses oder administratives Zentrum der Nabatäer.",
      hu: "Ez a kiterjedt monumentális komplexum Petra központjában található. Valószínűleg a nabateusok nagy vallási vagy közigazgatási központja volt.",
      ro: "Acest vast complex monumental este situat în centrul orașului Petra. A fost probabil un mare centru religios sau administrativ al nabateenilor.",
      en: "This vast monumental complex is located in the center of Petra. It was probably a major religious or administrative center of the Nabataeans."
    },
    facts: {
      de: ["Das Areal umfasst etwa 7000 Quadratmeter.", "Es verfügt über ein kleines Theater im Inneren.", "Elefantenköpfige Kapitelle wurden hier gefunden.", "Es wurde im 1. Jahrhundert v. Chr. begonnen."],
      hu: ["A terület mintegy 7000 négyzetmétert ölel fel.", "Egy kis színház is található a belsejében.", "Elefántfejes oszlopfőket találtak itt.", "Az építkezést az i.e. 1. században kezdték."],
      ro: ["Zona acoperă aproximativ 7000 de metri pătrați.", "Are un mic teatru în interior.", "Aici au fost găsite capiteluri cu cap de elefant.", "Construcția a început în secolul I î.Hr."],
      en: ["The area covers about 7000 square meters.", "It features a small theater inside.", "Elephant-headed capitals were found here.", "Construction began in the 1st century BC."]
    }
  },
  {
    id: "little-petra-landmarks-v2",
    type: "landmark",
    parent: "JO-MN",
    coords: [35.4428, 30.3734],
    name: { de: "Klein-Petra (Siq al-Barid)", hu: "Kis Petra (Siq al-Barid)", ro: "Mica Petra (Siq al-Barid)", en: "Little Petra (Siq al-Barid)" },
    description: {
      de: "Diese abgelegene Stätte nördlich von Petra diente einst als Vorort für durchreisende Händler. Sie beherbergt gut erhaltene in den Fels gehauene Speisesäle und Fresken.",
      hu: "Ez az elszigetelt helyszín Petrától északra egykor az átutazó kereskedők külvárosaként szolgált. Jól karbantartott sziklába vájt étkezők és freskók találhatók itt.",
      ro: "Acest sit izolat la nord de Petra a servit odată ca o suburbie pentru comercianții aflați în trecere. Adăpostește săli de mese și fresce sculptate în stâncă, bine conservate.",
      en: "This remote site north of Petra once served as a suburb for passing merchants. It houses well-preserved rock-cut dining halls and frescoes."
    },
    facts: {
      de: ["Der Name Siq al-Barid bedeutet 'Kalte Schlucht'.", "Es gibt seltene nabatäische Deckenmalereien.", "Der Ort diente als Rastplatz für Karawanen.", "Er ist deutlich ruhiger als das Haupttal."],
      hu: ["A Siq al-Barid név azt jelenti: 'Hideg szurdok'.", "Ritka nabateus mennyezetfestmények láthatók itt.", "A hely karavánok pihenőhelyéül szolgált.", "Jóval csendesebb, mint a fővölgy."],
      ro: ["Numele Siq al-Barid înseamnă 'Canionul Rece'.", "Există picturi pe tavan nabateene rare.", "Locul a servit drept popas pentru caravane.", "Este mult mai liniștit decât valea principală."],
      en: ["The name Siq al-Barid means 'Cold Canyon'.", "There are rare Nabataean ceiling paintings.", "The place served as a resting place for caravans.", "It is much quieter than the main valley."]
    }
  },
  {
    id: "nymphaeum-amman-landmarks-v2",
    type: "landmark",
    parent: "JO-AM",
    coords: [35.9370, 31.9515],
    name: { de: "Nymphäum von Amman", hu: "Ammáni Nymphaeum", ro: "Nimfeul din Amman", en: "Nymphaeum of Amman" },
    description: {
      de: "Ein monumentaler öffentlicher Brunnen aus der Römerzeit, der sich in der Innenstadt von Amman befindet. Er war einst mit Mosaiken, Steinmetzarbeiten und einem großen Pool geschmückt.",
      hu: "Egy monumentális ókori római közútikút Ammán belvárosában. Egykor mozaikokkal, kőfaragványokkal és egy nagy medencével díszítették.",
      ro: "O fântână publică monumentală din perioada romană situată în centrul orașului Amman. Era odată decorată cu mozaicuri, sculpturi în piatră și o piscină mare.",
      en: "A monumental Roman public fountain located in downtown Amman. It was once decorated with mosaics, stone carvings, and a large pool."
    },
    facts: {
      de: ["Es wurde 191 n. Chr. erbaut.", "Der Komplex war zweistöckig.", "Wasser floss aus geschnitzten Löwenköpfen.", "Es bot eine Erfrischung für Reisende."],
      hu: ["Kr. u. 191-ben épült.", "A komplexum kétszintes volt.", "A víz faragott oroszlánfejekből folyt.", "Felfrissülést nyújtott az utazóknak."],
      ro: ["A fost construit în 191 d.Hr.", "Complexul avea două etaje.", "Apa curgea din capete de leu sculptate.", "Ofertea răcorire pentru călători."],
      en: ["It was built in 191 AD.", "The complex was two stories high.", "Water flowed from carved lion heads.", "It provided refreshment for travelers."]
    }
  },
  {
    id: "umayyad-palace-amman-landmarks-v2",
    type: "landmark",
    parent: "JO-AM",
    coords: [35.9348, 31.9550],
    name: { de: "Umayyaden-Palast", hu: "Omajád palota", ro: "Palatul Umayyad", en: "Umayyad Palace" },
    description: {
      de: "Dieser Ruinenkomplex auf dem Zitadellenhügel stammt aus dem 8. Jahrhundert. Das restaurierte Monumentaltor mit seiner Kuppel ist das markanteste Merkmal.",
      hu: "Ez a Citadella-hegyen lévő romkomplexum a 8. századból származik. A felújított, kupolás monumentális kapu a legmeghatározóbb eleme.",
      ro: "Acest complex de ruine de pe dealul Citadelei datează din secolul al VIII-lea. Poarta monumentală restaurată cu domul său este caracteristica sa cea mai frapantă.",
      en: "This ruin complex on the Citadel hill dates from the 8th century. The restored monumental gate with its dome is the most striking feature."
    },
    facts: {
      de: ["Die Anlage war Sitz des Provinzgouverneurs.", "Die aktuelle Kuppel wurde von spanischen Archäologen hinzugefügt.", "Ein großer Wassertank sicherte die Versorgung.", "Es wurde 749 durch ein Erdbeben zerstört."],
      hu: ["A komplexum a tartományi kormányzó székhelye volt.", "A jelenlegi kupolát spanyol régészek adták hozzá.", "Egy nagy víztartály biztosította az ellátást.", "749-ben egy földrengés pusztította el."],
      ro: ["Complexul a fost sediul guvernatorului provinciei.", "Domul actual a fost adăugat de arheologii spanioli.", "Un rezervor mare de apă a asigurat aprovizionarea.", "A fost distrus de un cutremur în 749."],
      en: ["The complex was the seat of the provincial governor.", "The current dome was added by Spanish archaeologists.", "A large water tank ensured the supply.", "It was destroyed by an earthquake in 749."]
    }
  },
  {
    id: "king-abdullah-mosque-amman-landmarks-v2",
    type: "landmark",
    parent: "JO-AM",
    coords: [35.9135, 31.9613],
    name: { de: "König-Abdullah-I.-Moschee", hu: "I. Abdullah király mecset", ro: "Moscheea Regele Abdullah I", en: "King Abdullah I Mosque" },
    description: {
      de: "Ein unverwechselbares Wahrzeichen Ammans, bekannt für seine prächtige blaue Mosaikkuppel. Sie ist eine der wenigen Moscheen in Jordanien, die von Nicht-Muslimen besucht werden darf.",
      hu: "Ammán egyik jellegzetes nevezetessége, amely pompás kék mozaikkupolájáról ismert. Azon kevés jordániai mecsetek egyike, amelyet nem muszlimok is látogathatnak.",
      ro: "Un punct de reper distinctiv al Ammanului, cunoscut pentru domul său magnific din mozaic albastru. Este una dintre puținele moschei din Iordania care poate fi vizitată de non-musulmani.",
      en: "A distinctive landmark of Amman, known for its magnificent blue mosaic dome. It is one of the few mosques in Jordan that can be visited by non-Muslims."
    },
    facts: {
      de: ["Sie wurde zwischen 1982 und 1989 erbaut.", "Die Kuppel hat einen Durchmesser von 35 Metern.", "Sie bietet Platz für 3000 Gläubige.", "Im Inneren befindet sich ein islamisches Museum."],
      hu: ["1982 és 1989 között épült.", "A kupola átmérője 35 méter.", "3000 hívő befogadására alkalmas.", "Belsejében egy iszlám múzeum is található."],
      ro: ["A fost construită între 1982 și 1989.", "Domul are un diametru de 35 de metri.", "Poate găzdui 3000 de credincioși.", "În interior există un muzeu islamic."],
      en: ["It was built between 1982 and 1989.", "The dome has a diameter of 35 meters.", "It can accommodate 3000 worshipers.", "There is an Islamic museum inside."]
    }
  },
  {
    id: "abu-darwish-mosque-landmarks-v2",
    type: "landmark",
    parent: "JO-AM",
    coords: [35.9343, 31.9392],
    name: { de: "Abu-Darwisch-Moschee", hu: "Abu Darwish mecset", ro: "Moscheea Abu Darwish", en: "Abu Darwish Mosque" },
    description: {
      de: "Diese Moschee erhebt sich auf dem Jabal al-Ashrafiyeh und sticht durch ihr charakteristisches Muster aus abwechselnd schwarzen und weißen Steinen hervor.",
      hu: "Ez a mecset a Jabal al-Ashrafiyeh hegyen magasodik, és a fekete és fehér kövek váltakozó, jellegzetes mintázatával tűnik ki.",
      ro: "Această moschee se ridică pe Jabal al-Ashrafiyeh și iese în evidență prin modelul său caracteristic de pietre alternante negre și albe.",
      en: "This mosque rises on Jabal al-Ashrafiyeh and stands out with its characteristic pattern of alternating black and white stones."
    },
    facts: {
      de: ["Die Moschee wurde 1961 errichtet.", "Die Steine stammen aus verschiedenen Regionen Jordaniens.", "Sie ist von vielen Teilen Ammans sichtbar.", "Nicht-Muslime dürfen das Gebäude nur von außen betrachten."],
      hu: ["A mecset 1961-ben épült.", "A kövek Jordánia különböző régióiból származnak.", "Ammán számos pontjáról jól látható.", "A nem muszlimok csak kívülről tekinthetik meg az épületet."],
      ro: ["Moscheea a fost construită în 1961.", "Pietrele provin din diferite regiuni ale Iordaniei.", "Este vizibilă din multe părți ale Ammanului.", "Non-musulmanii pot privi clădirea doar din exterior."],
      en: ["The mosque was built in 1961.", "The stones come from different regions of Jordan.", "It is visible from many parts of Amman.", "Non-Muslims are only allowed to view the building from the outside."]
    }
  },
  {
    id: "qasr-al-abd-landmarks-v2",
    type: "landmark",
    parent: "JO-AM",
    coords: [35.7511, 31.9126],
    name: { de: "Qasr al-Abd", hu: "Qasr al-Abd", ro: "Qasr al-Abd", en: "Qasr al-Abd" },
    description: {
      de: "Ein hellenistischer Palast nahe Iraq al-Amir, der aus riesigen Steinblöcken errichtet wurde. Er ist eines der wenigen erhaltenen Beispiele für diese Architektur in der Region.",
      hu: "Egy hellenisztikus palota Iraq al-Amir közelében, amelyet hatalmas kőtömbökből építettek. Az egyik kevés fennmaradt példája ennek az építészetnek a régióban.",
      ro: "Un palat elenistic lângă Iraq al-Amir, construit din blocuri de piatră uriașe. Este unul dintre puținele exemple supraviețuitoare ale acestei arhitecturi din regiune.",
      en: "A Hellenistic palace near Iraq al-Amir, built from huge stone blocks. It is one of the few surviving examples of this architecture in the region."
    },
    facts: {
      de: ["Das Bauwerk stammt aus dem 2. Jahrhundert v. Chr.", "Der Name bedeutet 'Schloss des Sklaven'.", "Einige Steinblöcke wiegen über 15 Tonnen.", "An den Außenwänden sind Löwenreliefs geschnitzt."],
      hu: ["Az építmény az i.e. 2. századból származik.", "A név jelentése 'A rabszolga kastélya'.", "Néhány kőtömb súlya meghaladja a 15 tonnát.", "A külső falakon oroszlános domborművek találhatók."],
      ro: ["Structura datează din secolul al II-lea î.Hr.", "Numele înseamnă 'Castelul Sclavului'.", "Unele blocuri de piatră cântăresc peste 15 tone.", "Pe pereții exteriori sunt sculptate reliefuri cu lei."],
      en: ["The structure dates from the 2nd century BC.", "The name means 'Castle of the Slave'.", "Some stone blocks weigh over 15 tons.", "Lion reliefs are carved on the outer walls."]
    }
  },
  {
    id: "oval-plaza-jerash-landmarks-v2",
    type: "landmark",
    parent: "JO-JA",
    coords: [35.8913, 32.2771],
    name: { de: "Ovales Forum", hu: "Ovális tér (Dzseras)", ro: "Piața Ovală (Jerash)", en: "Oval Plaza" },
    description: {
      de: "Dieser asymmetrische, von majestätischen ionischen Säulen umgebene Platz diente als verbindendes Element zwischen der Hauptstraße und dem Zeustempel in Jerash.",
      hu: "Ez a fenséges ión oszlopokkal körülvett, aszimmetrikus tér összekötő elemként szolgált a főutca és a Zeusz-templom között Dzserasban.",
      ro: "Această piață asimetrică, înconjurată de coloane ionice maiestuoase, a servit ca element de legătură între strada principală și Templul lui Zeus din Jerash.",
      en: "This asymmetrical plaza, surrounded by majestic Ionic columns, served as a connecting element between the main street and the Temple of Zeus in Jerash."
    },
    facts: {
      de: ["Es misst beeindruckende 90 mal 80 Meter.", "Es ist von 56 ionischen Säulen gesäumt.", "Der Platz wurde im 1. Jahrhundert angelegt.", "Er diente als Marktplatz und Versammlungsort."],
      hu: ["Lenyűgöző 90-szer 80 méteres méretű.", "56 ión oszlop szegélyezi.", "A teret az 1. században alakították ki.", "Piactérként és találkozóhelyként szolgált."],
      ro: ["Măsoară impresionant 90 pe 80 de metri.", "Este mărginit de 56 de coloane ionice.", "Piața a fost creată în secolul I.", "A servit ca piață și loc de adunare."],
      en: ["It measures an impressive 90 by 80 meters.", "It is lined with 56 Ionic columns.", "The plaza was created in the 1st century.", "It served as a marketplace and gathering place."]
    }
  },
  {
    id: "arch-of-hadrian-jerash-landmarks-v2",
    type: "landmark",
    parent: "JO-JA",
    coords: [35.8910, 32.2718],
    name: { de: "Hadrianstor", hu: "Hadrianus diadalíve", ro: "Arcul lui Hadrian", en: "Arch of Hadrian" },
    description: {
      de: "Dieser massive Triumphbogen wurde zu Ehren des Besuchs des römischen Kaisers Hadrian im Jahr 129 n. Chr. am südlichen Eingang von Jerash errichtet.",
      hu: "Ezt a hatalmas diadalívet Hadrianus római császár Kr. u. 129-ben tett látogatásának tiszteletére emelték Dzseras déli bejáratánál.",
      ro: "Acest arc de triumf masiv a fost ridicat în onoarea vizitei împăratului roman Hadrian în 129 d.Hr. la intrarea de sud a orașului Jerash.",
      en: "This massive triumphal arch was erected in honor of the visit of the Roman Emperor Hadrian in 129 AD at the southern entrance of Jerash."
    },
    facts: {
      de: ["Das Tor ist fast 21 Meter hoch.", "Es verfügt über drei gewölbte Durchgänge.", "Ein Teil des Tores wurde umfangreich restauriert.", "Es sollte das neue Haupttor der Stadt werden."],
      hu: ["A kapu majdnem 21 méter magas.", "Három íves átjáróval rendelkezik.", "A kapu egy részét kiterjedten restaurálták.", "A város új főkapujának szánták."],
      ro: ["Poarta are o înălțime de aproape 21 de metri.", "Are trei pasaje boltite.", "O parte a porții a fost restaurată extensiv.", "Trebuia să fie noua poartă principală a orașului."],
      en: ["The gate is nearly 21 meters high.", "It has three arched passageways.", "A part of the gate has been extensively restored.", "It was intended to be the city's new main gate."]
    }
  },
  {
    id: "temple-of-artemis-jerash-landmarks-v2",
    type: "landmark",
    parent: "JO-JA",
    coords: [35.8911, 32.2825],
    name: { de: "Artemistempel", hu: "Artemisz-templom", ro: "Templul lui Artemis", en: "Temple of Artemis" },
    description: {
      de: "Der Tempel der Artemis thront auf einem der höchsten Punkte von Jerash. Er war der Schutzgöttin der Stadt gewidmet und ist bekannt für seine imposanten Säulen.",
      hu: "Az Artemisz-templom Dzseras egyik legmagasabb pontján magasodik. A város védőistennőjének szentelték, és impozáns oszlopairól ismert.",
      ro: "Templul lui Artemis domină de pe unul dintre cele mai înalte puncte din Jerash. A fost dedicat zeiței protectoare a orașului și este cunoscut pentru coloanele sale impunătoare.",
      en: "The Temple of Artemis dominates from one of the highest points in Jerash. It was dedicated to the patron goddess of the city and is known for its imposing columns."
    },
    facts: {
      de: ["Von 12 korinthischen Säulen stehen noch elf.", "Die Säulen schwingen leicht im Wind.", "Der Tempel wurde nie vollständig fertiggestellt.", "Im 12. Jahrhundert wurde er als Festung genutzt."],
      hu: ["A 12 korinthoszi oszlopból tizenegy még ma is áll.", "Az oszlopok enyhén kilengenek a szélben.", "A templom sosem készült el teljesen.", "A 12. században erődítményként használták."],
      ro: ["Unsprezece din cele 12 coloane corintice stau încă în picioare.", "Coloanele se leagănă ușor în vânt.", "Templul nu a fost niciodată finalizat complet.", "În secolul al XII-lea a fost folosit ca fortăreață."],
      en: ["Eleven of the 12 Corinthian columns still stand.", "The columns sway slightly in the wind.", "The temple was never fully completed.", "In the 12th century it was used as a fortress."]
    }
  },
  {
    id: "south-theater-jerash-landmarks-v2",
    type: "landmark",
    parent: "JO-JA",
    coords: [35.8901, 32.2772],
    name: { de: "Südtheater von Jerash", hu: "Dzseras Déli Színháza", ro: "Teatrul de Sud din Jerash", en: "South Theater of Jerash" },
    description: {
      de: "Das größte Theater der antiken Stadt Jerash beeindruckt mit seiner außergewöhnlichen Akustik. Ein Sprecher in der Mitte der Bühne ist in den obersten Rängen klar zu hören.",
      hu: "Dzseras ókori városának legnagyobb színháza lenyűgöz kivételes akusztikájával. A színpad közepén álló beszélőt a legfelső sorokban is tisztán hallani.",
      ro: "Cel mai mare teatru din orașul antic Jerash impresionează prin acustica sa excepțională. Un vorbitor în centrul scenei poate fi auzit clar în rândurile de sus.",
      en: "The largest theater in the ancient city of Jerash impresses with its exceptional acoustics. A speaker in the center of the stage can be heard clearly in the top rows."
    },
    facts: {
      de: ["Es bot Platz für mehr als 3000 Zuschauer.", "Das Theater wurde im späten 1. Jahrhundert erbaut.", "Die steinernen Sitze sind teilweise mit griechischen Buchstaben nummeriert.", "Heute finden hier oft Musikfestivals statt."],
      hu: ["Több mint 3000 néző befogadására volt alkalmas.", "A színház az 1. század végén épült.", "A kőülések egy része görög betűkkel van számozva.", "Ma gyakran zenei fesztiválokat tartanak itt."],
      ro: ["Putea găzdui peste 3000 de spectatori.", "Teatrul a fost construit la sfârșitul secolului I.", "Scaunele de piatră sunt parțial numerotate cu litere grecești.", "Astăzi aici au loc adesea festivaluri de muzică."],
      en: ["It could accommodate over 3000 spectators.", "The theater was built in the late 1st century.", "The stone seats are partially numbered with Greek letters.", "Today music festivals are often held here."]
    }
  },
  {
    id: "qasr-al-mushatta-landmarks-v2",
    type: "landmark",
    parent: "JO-AM",
    coords: [36.0101, 31.7371],
    name: { de: "Qasr al-Mushatta", hu: "Qasr al-Mushatta", ro: "Qasr al-Mushatta", en: "Qasr al-Mushatta" },
    description: {
      de: "Die Ruine des größten umayyadischen Wüstenschlosses in Jordanien. Ein Großteil seiner prachtvoll geschnitzten Fassade wurde als Geschenk an den deutschen Kaiser übergeben und befindet sich heute in Berlin.",
      hu: "Jordánia legnagyobb omajád sivatagi kastélyának romja. Gazdagon faragott homlokzatának nagy részét a német császárnak ajándékozták, és ma Berlinben található.",
      ro: "Ruinele celui mai mare castel din deșert umayyad din Iordania. O mare parte din fațada sa sculptată magnific a fost dăruită împăratului german și se află astăzi la Berlin.",
      en: "The ruin of the largest Umayyad desert castle in Jordan. Much of its magnificently carved facade was given as a gift to the German Emperor and is now in Berlin."
    },
    facts: {
      de: ["Der Bau wurde um 744 begonnen, aber nie beendet.", "Es liegt sehr nahe am internationalen Flughafen Queen Alia.", "Die Anlage ist von einer massiven quadratischen Mauer umgeben.", "Der Name bedeutet 'Winterlager'."],
      hu: ["Az építkezés 744 körül kezdődött, de soha nem fejeződött be.", "Nagyon közel van a Queen Alia nemzetközi repülőtérhez.", "A komplexumot egy hatalmas négyzetes fal veszi körül.", "A név jelentése 'Téli tábor'."],
      ro: ["Construcția a început în jurul anului 744, dar nu a fost niciodată terminată.", "Este situat foarte aproape de aeroportul internațional Queen Alia.", "Complexul este înconjurat de un zid pătrat masiv.", "Numele înseamnă 'Tabără de iarnă'."],
      en: ["Construction began around 744 but was never finished.", "It is located very close to Queen Alia International Airport.", "The complex is surrounded by a massive square wall.", "The name means 'Winter Camp'."]
    }
  },
  {
    id: "qasr-tuba-landmarks-v2",
    type: "landmark",
    parent: "JO-AM",
    coords: [36.5705, 31.3255],
    name: { de: "Qasr Tuba", hu: "Qasr Tuba", ro: "Qasr Tuba", en: "Qasr Tuba" },
    description: {
      de: "Dieses abgelegene Wüstenschloss aus der Umayyadenzeit besteht aus einer ungewöhnlichen Kombination von gebrannten Ziegeln und Stein. Es ist eines der am schwersten zugänglichen Bauwerke seiner Art.",
      hu: "Ez az elszigetelt omajád-kori sivatagi kastély égetett téglák és kövek szokatlan kombinációjából épült. Típusának egyik legnehezebben megközelíthető építménye.",
      ro: "Acest castel de deșert izolat din perioada umayyadă constă dintr-o combinație neobișnuită de cărămizi arse și piatră. Este una dintre cele mai greu accesibile clădiri de acest gen.",
      en: "This remote desert castle from the Umayyad period consists of an unusual combination of baked bricks and stone. It is one of the most difficult to access structures of its kind."
    },
    facts: {
      de: ["Es liegt etwa 100 Kilometer von Amman entfernt.", "Das Gebäude besteht aus zwei identischen symmetrischen Hälften.", "Es sollte Karawanen auf der Route in den Hejaz schützen.", "Ein Großteil der Mauern ist erhalten geblieben."],
      hu: ["Körülbelül 100 kilométerre fekszik Ammántól.", "Az épület két azonos szimmetrikus félből áll.", "Feladata a Hidzsázba tartó karavánok védelme volt.", "A falak nagy része fennmaradt."],
      ro: ["Este situat la aproximativ 100 de kilometri de Amman.", "Clădirea este formată din două jumătăți simetrice identice.", "Trebuia să protejeze caravanele pe drumul spre Hejaz.", "O mare parte din ziduri s-au păstrat."],
      en: ["It is located about 100 kilometers from Amman.", "The building consists of two identical symmetrical halves.", "It was intended to protect caravans on the route to the Hejaz.", "Much of the walls has been preserved."]
    }
  },
  {
    id: "lots-cave-landmarks-v2",
    type: "landmark",
    parent: "JO-KA",
    coords: [35.4789, 31.0456],
    name: { de: "Lot-Höhle", hu: "Lót barlangja", ro: "Peștera lui Lot", en: "Lot's Cave" },
    description: {
      de: "Eine Höhle in den steilen Bergen nahe dem Toten Meer, in der der biblische Lot und seine Töchter nach der Zerstörung von Sodom Zuflucht gesucht haben sollen. Eine byzantinische Kirche wurde davor errichtet.",
      hu: "Egy barlang a Holt-tenger közeli meredek hegyekben, ahol a bibliai Lót és lányai a hagyomány szerint Szodoma pusztulása után menedéket kerestek. Elé egy bizánci templomot építettek.",
      ro: "O peșteră în munții abrupți de lângă Marea Moartă, unde se spune că biblicul Lot și fiicele sale s-au refugiat după distrugerea Sodomei. În fața ei a fost construită o biserică bizantină.",
      en: "A cave in the steep mountains near the Dead Sea where the biblical Lot and his daughters are said to have taken refuge after the destruction of Sodom. A Byzantine church was built in front of it."
    },
    facts: {
      de: ["Die Stätte wurde erst 1991 archäologisch entdeckt.", "Besucher müssen Hunderte von Stufen hinaufsteigen.", "Auf dem Boden der Kirchenruine sind Mosaike erhalten.", "Es gibt Inschriften, die den heiligen Lot erwähnen."],
      hu: ["A helyszínt régészetileg csak 1991-ben fedezték fel.", "A látogatóknak több száz lépcsőfokot kell megmászniuk.", "A templomrom padlóján mozaikok maradtak fenn.", "Feliratok említik benne Szent Lótot."],
      ro: ["Situl a fost descoperit arheologic abia în 1991.", "Vizitatorii trebuie să urce sute de trepte.", "Mozaicuri sunt păstrate pe podeaua ruinelor bisericii.", "Există inscripții care îl menționează pe Sfântul Lot."],
      en: ["The site was not discovered archaeologically until 1991.", "Visitors must climb hundreds of steps.", "Mosaics are preserved on the floor of the church ruins.", "There are inscriptions mentioning Saint Lot."]
    }
  },
  {
    id: "jabal-haroun-landmarks-v2",
    type: "landmark",
    parent: "JO-MN",
    coords: [35.4056, 30.3167],
    name: { de: "Jabal Haroun", hu: "Áron hegye (Jabal Haroun)", ro: "Muntele lui Aaron (Jabal Haroun)", en: "Mount Aaron (Jabal Haroun)" },
    description: {
      de: "Dieser Berg ist der höchste Gipfel im Bereich von Petra. Auf seiner Spitze befindet sich ein kleiner weißer Schrein, der als das Grab von Moses' Bruder Aaron gilt.",
      hu: "Ez a hegy a Petra területének legmagasabb csúcsa. Tetején egy kis fehér szentély található, amelyet a hagyomány Mózes bátyjának, Áronnak a sírjaként tart számon.",
      ro: "Acest munte este cel mai înalt vârf din zona Petra. În vârf se află un mic altar alb, considerat a fi mormântul lui Aaron, fratele lui Moise.",
      en: "This mountain is the highest peak in the Petra area. At its top is a small white shrine, believed to be the tomb of Moses' brother Aaron."
    },
    facts: {
      de: ["Der Berg ist etwa 1350 Meter hoch.", "Der Aufstieg erfordert eine mehrstündige Wanderung.", "Die weiße Moschee stammt aus dem 14. Jahrhundert.", "Er ist sowohl für Muslime als auch Juden ein heiliger Ort."],
      hu: ["A hegy mintegy 1350 méter magas.", "A megmászásához több órás túra szükséges.", "A fehér mecset a 14. századból származik.", "Muszlimok és zsidók számára egyaránt szent hely."],
      ro: ["Muntele are aproximativ 1350 de metri înălțime.", "Ascensiunea necesită o drumeție de câteva ore.", "Moscheea albă datează din secolul al XIV-lea.", "Este un loc sfânt atât pentru musulmani, cât și pentru evrei."],
      en: ["The mountain is about 1350 meters high.", "The ascent requires a hike of several hours.", "The white mosque dates from the 14th century.", "It is a sacred place for both Muslims and Jews."]
    }
  },
  {
    id: "rujm-al-malfouf-landmarks-v2",
    type: "landmark",
    parent: "JO-AM",
    coords: [35.9015, 31.9567],
    name: { de: "Rujm al-Malfouf", hu: "Rujm al-Malfouf", ro: "Rujm al-Malfouf", en: "Rujm al-Malfouf" },
    description: {
      de: "Ein runder megalithischer Wachturm in Amman, der vermutlich während des Königreichs Ammon errichtet wurde. Er ist eine der ältesten erhaltenen Strukturen der Stadt.",
      hu: "Egy kerek megalitikus őrtorony Ammánban, amelyet valószínűleg az Ammoni Királyság idején emeltek. A város egyik legrégebbi fennmaradt építménye.",
      ro: "Un turn de veghe megalitic rotund din Amman, construit probabil în timpul Regatului Ammon. Este una dintre cele mai vechi structuri conservate din oraș.",
      en: "A round megalithic watchtower in Amman, probably built during the Kingdom of Ammon. It is one of the oldest surviving structures in the city."
    },
    facts: {
      de: ["Er wurde wahrscheinlich um das 13. Jahrhundert v. Chr. erbaut.", "Der Name bedeutet übersetzt 'Gerollter Steinhaufen'.", "Er diente dem Schutz der landwirtschaftlichen Gebiete.", "Ausgrabungen förderten römische Artefakte zutage."],
      hu: ["Valószínűleg az i.e. 13. század környékén épült.", "A név fordítása 'Feltekert kőhalom'.", "A mezőgazdasági területek védelmét szolgálta.", "Az ásatások római leleteket is a felszínre hoztak."],
      ro: ["A fost probabil construit în jurul secolului al XIII-lea î.Hr.", "Numele se traduce prin 'Grămadă de pietre rulată'.", "A servit la protejarea zonelor agricole.", "Săpăturile au scos la iveală artefacte romane."],
      en: ["It was probably built around the 13th century BC.", "The name translates to 'Rolled pile of stones'.", "It served to protect agricultural areas.", "Excavations revealed Roman artifacts."]
    }
  }
];
