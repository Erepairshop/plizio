import type { POI } from "./poi";

export const poiExtraAfghanistanNatureV2: POI[] = [
  {
    id: "afghanistan-noshaq-nature-v2",
    type: "mountain",
    parent: "AF-BDS",
    coords: [71.833, 36.433],
    name: { de: "Noshaq", hu: "Noshakh", ro: "Noshaq", en: "Noshaq" },
    description: { de: "Der Noshaq ist der höchste Berg Afghanistans. Er liegt im Hindukusch an der Grenze zu Pakistan.", hu: "A Noshakh Afganisztán legmagasabb hegye. A Hindukus-hegységben található, a pakisztáni határon.", ro: "Noshaq este cel mai înalt munte din Afganistan. Este situat în Hindu Kush, la granița cu Pakistanul.", en: "Noshaq is the highest mountain in Afghanistan. It is located in the Hindu Kush on the border with Pakistan." },
    facts: {
      de: ["Höhe: 7.492 Meter", "Höchster Berg des Landes", "Teil des Hindukusch", "Grenzberg zu Pakistan"],
      hu: ["Magasság: 7 492 méter", "Az ország legmagasabb hegye", "A Hindukus része", "Határhegy Pakisztán felé"],
      ro: ["Altitudine: 7.492 metri", "Cel mai înalt munte din țară", "Parte a Hindu Kush", "Munte de frontieră cu Pakistan"],
      en: ["Elevation: 7,492 meters", "Highest mountain in the country", "Part of the Hindu Kush", "Border mountain with Pakistan"]
    }
  },
  {
    id: "afghanistan-hindukusch-nature-v2",
    type: "mountain",
    parent: "AF-BAM",
    coords: [71.0, 35.0],
    name: { de: "Hindukusch", hu: "Hindukus", ro: "Hindu Kush", en: "Hindu Kush" },
    description: { de: "Der Hindukusch ist ein gewaltiges Hochgebirge in Zentralasien, das sich größtenteils durch Afghanistan erstreckt. Es ist bekannt für seine raue, unberührte Natur.", hu: "A Hindukus egy hatalmas magashegység Közép-Ázsiában, amely nagyrészt Afganisztánon húzódik keresztül. Zord, érintetlen természetéről ismert.", ro: "Hindu Kush este un lanț muntos masiv din Asia Centrală, care se întinde în mare parte prin Afganistan. Este renumit pentru natura sa aspră și virgină.", en: "The Hindu Kush is a massive high mountain range in Central Asia, stretching largely through Afghanistan. It is known for its rugged, untouched nature." },
    facts: {
      de: ["Über 800 km lang", "Trennt Zentral- und Südasien", "Höchste Gipfel über 7.000m", "Wichtige Wasserscheide"],
      hu: ["Több mint 800 km hosszú", "Közép- és Dél-Ázsiát választja el", "A legmagasabb csúcsok 7000 m felettiek", "Fontos vízválasztó"],
      ro: ["Peste 800 km lungime", "Separă Asia Centrală de Asia de Sud", "Cele mai înalte vârfuri peste 7.000m", "Importantă cumpănă a apelor"],
      en: ["Over 800 km long", "Separates Central and South Asia", "Highest peaks over 7,000m", "Important watershed"]
    }
  },
  {
    id: "afghanistan-pamir-nature-v2",
    type: "mountain",
    parent: "AF-BDS",
    coords: [73.0, 38.0],
    name: { de: "Pamir-Gebirge", hu: "Pamír-hegység", ro: "Munții Pamir", en: "Pamir Mountains" },
    description: { de: "Das Pamir-Gebirge berührt den Nordosten Afghanistans im Wakhan-Korridor. Diese hochalpine Region wird oft als 'Dach der Welt' bezeichnet.", hu: "A Pamír-hegység a Vahán-folyosónál érinti Afganisztán északkeleti részét. Ezt a magashegyi régiót gyakran 'a világ tetejeként' emlegetik.", ro: "Munții Pamir ating nord-estul Afganistanului în Coridorul Wakhan. Această regiune alpină înaltă este adesea numită 'Acoperișul Lumii'.", en: "The Pamir Mountains touch northeastern Afghanistan in the Wakhan Corridor. This high alpine region is often referred to as the 'Roof of the World'." },
    facts: {
      de: ["Liegt im Wakhan-Korridor", "Extremes Hochgebirgsklima", "Heimat seltener Tierarten", "Dach der Welt"],
      hu: ["A Vahán-folyosóban található", "Extrém magashegyi éghajlat", "Ritka állatfajok otthona", "A világ teteje"],
      ro: ["Situat în Coridorul Wakhan", "Climat alpin extrem", "Adăpostește specii rare de animale", "Acoperișul lumii"],
      en: ["Located in the Wakhan Corridor", "Extreme high alpine climate", "Home to rare animal species", "Roof of the World"]
    }
  },
  {
    id: "afghanistan-wakhan-national-park-nature-v2",
    type: "national-park",
    parent: "AF-BDS",
    coords: [73.5, 37.1],
    name: { de: "Nationalpark Wakhan", hu: "Vahán Nemzeti Park", ro: "Parcul Național Wakhan", en: "Wakhan National Park" },
    description: { de: "Der Nationalpark Wakhan schützt die empfindliche Ökologie des Wakhan-Korridors. Hier leben Schneeleoparden, Marco-Polo-Schafe und andere bedrohte Arten.", hu: "A Vahán Nemzeti Park a Vahán-folyosó érzékeny ökológiáját védi. Hópárducok, Marco Polo juhok és más veszélyeztetett fajok élnek itt.", ro: "Parcul Național Wakhan protejează ecologia fragilă a Coridorului Wakhan. Aici trăiesc leoparzi de zăpadă, oi Marco Polo și alte specii pe cale de dispariție.", en: "Wakhan National Park protects the fragile ecology of the Wakhan Corridor. Snow leopards, Marco Polo sheep, and other endangered species live here." },
    facts: {
      de: ["Zweiter Nationalpark Afghanistans", "Schutzgebiet für Schneeleoparden", "Gegründet im Jahr 2014", "Alpine Wüstenlandschaft"],
      hu: ["Afganisztán második nemzeti parkja", "Hópárducok védett területe", "2014-ben alapították", "Alpesi sivatagi táj"],
      ro: ["Al doilea parc național din Afganistan", "Zonă protejată pentru leopardul de zăpadă", "Înființat în 2014", "Peisaj de deșert alpin"],
      en: ["Afghanistan's second national park", "Protected area for snow leopards", "Established in 2014", "Alpine desert landscape"]
    }
  },
  {
    id: "afghanistan-nuristan-national-park-nature-v2",
    type: "national-park",
    parent: "AF-NUR",
    coords: [70.8, 35.3],
    name: { de: "Nationalpark Nuristan", hu: "Nurisztán Nemzeti Park", ro: "Parcul Național Nuristan", en: "Nuristan National Park" },
    description: { de: "Dieser Nationalpark in den bewaldeten Bergen Ostafghanistans schützt seltene Monsunwälder. Die unzugängliche Region hat eine reiche Biodiversität erhalten.", hu: "Ez a nemzeti park Kelet-Afganisztán erdős hegyeiben ritka monszunerdőket véd. A megközelíthetetlen régió megőrizte gazdag biológiai sokféleségét.", ro: "Acest parc național din munții împăduriți din estul Afganistanului protejează păduri musonice rare. Regiunea inaccesibilă și-a păstrat o biodiversitate bogată.", en: "This national park in the forested mountains of eastern Afghanistan protects rare monsoon forests. The inaccessible region has preserved a rich biodiversity." },
    facts: {
      de: ["Schützt afghanische Wälder", "Einzigartiges Monsunklima", "Zahlreiche Vogelarten", "Gegründet im Jahr 2020"],
      hu: ["Védi az afgán erdőket", "Egyedülálló monszun éghajlat", "Számos madárfaj", "2020-ban alapították"],
      ro: ["Protejează pădurile afgane", "Climat musonic unic", "Numeroase specii de păsări", "Înființat în 2020"],
      en: ["Protects Afghan forests", "Unique monsoon climate", "Numerous bird species", "Established in 2020"]
    }
  },
  {
    id: "afghanistan-amudarja-nature-v2",
    type: "river",
    parent: "AF-BAL",
    coords: [66.5, 37.3],
    name: { de: "Amudarja", hu: "Amu-darja", ro: "Amu Daria", en: "Amu Darya" },
    description: { de: "Der Amudarja ist einer der wichtigsten Flüsse Zentralasiens und bildet die natürliche Grenze zwischen Afghanistan und seinen nördlichen Nachbarn.", hu: "Az Amu-darja Közép-Ázsia egyik legfontosabb folyója, amely természetes határt képez Afganisztán és északi szomszédai között.", ro: "Amu Daria este unul dintre cele mai importante râuri din Asia Centrală și formează granița naturală între Afganistan și vecinii săi nordici.", en: "The Amu Darya is one of the most important rivers in Central Asia, forming the natural border between Afghanistan and its northern neighbors." },
    facts: {
      de: ["Längster Fluss Zentralasiens", "Bildet die Nordgrenze", "Mündet in den Aralsee", "Historisch als Oxus bekannt"],
      hu: ["Közép-Ázsia leghosszabb folyója", "Északi határt képezi", "Az Aral-tóba ömlik", "Történelmileg Oxus néven ismert"],
      ro: ["Cel mai lung râu din Asia Centrală", "Formează granița de nord", "Se varsă în Marea Aral", "Cunoscut istoric sub numele de Oxus"],
      en: ["Longest river in Central Asia", "Forms the northern border", "Flows into the Aral Sea", "Historically known as Oxus"]
    }
  },
  {
    id: "afghanistan-helmand-river-nature-v2",
    type: "river",
    parent: "AF-HEL",
    coords: [64.0, 31.0],
    name: { de: "Helmand-Fluss", hu: "Helmand folyó", ro: "Râul Helmand", en: "Helmand River" },
    description: { de: "Der Helmand ist der längste Fluss Afghanistans und eine lebenswichtige Wasserquelle für die südlichen Wüstenregionen. Er entspringt im Koh-e Baba-Gebirge.", hu: "A Helmand Afganisztán leghosszabb folyója, a déli sivatagi régiók létfontosságú vízforrása. A Koh-e Baba-hegységben ered.", ro: "Helmand este cel mai lung râu din Afganistan și o sursă de apă vitală pentru regiunile deșertice din sud. Izvorăște din munții Koh-e Baba.", en: "The Helmand is the longest river in Afghanistan and a vital water source for the southern desert regions. It rises in the Koh-e Baba mountains." },
    facts: {
      de: ["Längster innerafghanischer Fluss", "Endet im Sistan-Becken", "Wichtig für die Landwirtschaft", "Entspringt nahe Kabul"],
      hu: ["Leghosszabb belső afgán folyó", "A Szisztán-medencében végződik", "Fontos a mezőgazdaság számára", "Kabul közelében ered"],
      ro: ["Cel mai lung râu din interiorul Afganistanului", "Se termină în bazinul Sistan", "Important pentru agricultură", "Izvorăște lângă Kabul"],
      en: ["Longest inner-Afghan river", "Ends in the Sistan Basin", "Important for agriculture", "Rises near Kabul"]
    }
  },
  {
    id: "afghanistan-hari-rud-nature-v2",
    type: "river",
    parent: "AF-HER",
    coords: [62.0, 34.3],
    name: { de: "Hari Rud", hu: "Hari Rud", ro: "Hari Rud", en: "Hari Rud" },
    description: { de: "Der Hari Rud fließt von den Bergen Zentralafghanistans nach Westen durch die Stadt Herat und bildet später die Grenze zu Iran und Turkmenistan.", hu: "A Hari Rud Közép-Afganisztán hegyeiből nyugat felé, Herát városán keresztül folyik, majd Irán és Türkmenisztán határát képezi.", ro: "Hari Rud curge din munții Afganistanului central spre vest prin orașul Herat și mai târziu formează granița cu Iranul și Turkmenistanul.", en: "The Hari Rud flows from the mountains of central Afghanistan westwards through the city of Herat and later forms the border with Iran and Turkmenistan." },
    facts: {
      de: ["Ca. 1.100 km lang", "Fließt durch Herat", "Bildet internationale Grenzen", "Versickert in der Wüste Karakum"],
      hu: ["Kb. 1100 km hosszú", "Heráton folyik keresztül", "Nemzetközi határokat képez", "A Karakum sivatagban tűnik el"],
      ro: ["Aprox. 1.100 km lungime", "Trece prin Herat", "Formează granițe internaționale", "Se pierde în deșertul Karakum"],
      en: ["Approx. 1,100 km long", "Flows through Herat", "Forms international borders", "Sinks into the Karakum Desert"]
    }
  },
  {
    id: "afghanistan-kabul-river-nature-v2",
    type: "river",
    parent: "AF-KAB",
    coords: [70.0, 34.5],
    name: { de: "Kabul-Fluss", hu: "Kabul folyó", ro: "Râul Kabul", en: "Kabul River" },
    description: { de: "Der Kabul-Fluss entspringt im Hindukusch und fließt durch die afghanische Hauptstadt, bevor er Pakistan erreicht und in den Indus mündet.", hu: "A Kabul folyó a Hindukusban ered és átfolyik az afgán fővároson, mielőtt eléri Pakisztánt és az Indusba ömlik.", ro: "Râul Kabul izvorăște din Hindu Kush și trece prin capitala afgană înainte de a ajunge în Pakistan și de a se vărsa în râul Indus.", en: "The Kabul River rises in the Hindu Kush and flows through the Afghan capital before reaching Pakistan and flowing into the Indus." },
    facts: {
      de: ["Etwa 700 km lang", "Fließt durch Kabul", "Mündet in den Indus", "Historisch wichtiger Handelsweg"],
      hu: ["Körülbelül 700 km hosszú", "Kabulon folyik keresztül", "Az Indusba ömlik", "Történelmileg fontos kereskedelmi útvonal"],
      ro: ["Aproximativ 700 km lungime", "Trece prin Kabul", "Se varsă în râul Indus", "Rută comercială istorică importantă"],
      en: ["About 700 km long", "Flows through Kabul", "Flows into the Indus", "Historically important trade route"]
    }
  },
  {
    id: "afghanistan-pandschschir-river-nature-v2",
    type: "river",
    parent: "AF-PAN",
    coords: [69.5, 35.0],
    name: { de: "Pandschschir-Fluss", hu: "Pandzssír folyó", ro: "Râul Panjshir", en: "Panjshir River" },
    description: { de: "Der Pandschschir-Fluss schneidet ein tiefes, fruchtbares Tal durch den Hindukusch. Sein klares Bergwasser speist zahlreiche landwirtschaftliche Flächen.", hu: "A Pandzssír folyó mély, termékeny völgyet vág a Hindukuson keresztül. Tiszta hegyi vize számos mezőgazdasági területet táplál.", ro: "Râul Panjshir sapă o vale adâncă și fertilă prin Hindu Kush. Apa sa limpede de munte hrănește numeroase terenuri agricole.", en: "The Panjshir River cuts a deep, fertile valley through the Hindu Kush. Its clear mountain water feeds numerous agricultural areas." },
    facts: {
      de: ["Namensgeber des Pandschschir-Tals", "Mündet in den Kabul-Fluss", "Wichtige Trinkwasserquelle", "Bekannt für Smaragdminen im Tal"],
      hu: ["A Pandzssír-völgy névadója", "A Kabul folyóba ömlik", "Fontos ivóvízforrás", "Smaragdbányáiról ismert völgy"],
      ro: ["Dă numele Văii Panjshir", "Se varsă în râul Kabul", "Sursă importantă de apă potabilă", "Cunoscut pentru minele de smarald din vale"],
      en: ["Namesake of the Panjshir Valley", "Flows into the Kabul River", "Important drinking water source", "Known for emerald mines in the valley"]
    }
  },
  {
    id: "afghanistan-arghandab-river-nature-v2",
    type: "river",
    parent: "AF-KAN",
    coords: [65.5, 31.5],
    name: { de: "Arghandab-Fluss", hu: "Arghandab folyó", ro: "Râul Arghandab", en: "Arghandab River" },
    description: { de: "Der Arghandab ist der wichtigste Nebenfluss des Helmand. Er fließt in der Nähe von Kandahar und bewässert eine der wichtigsten Agrarregionen Afghanistans.", hu: "Az Arghandab a Helmand legfontosabb mellékfolyója. Kandahár közelében folyik, és Afganisztán egyik legfontosabb mezőgazdasági régióját öntözi.", ro: "Arghandab este cel mai important afluent al râului Helmand. Curge în apropiere de Kandahar și irigă una dintre cele mai importante regiuni agricole din Afganistan.", en: "The Arghandab is the most important tributary of the Helmand. It flows near Kandahar and irrigates one of Afghanistan's most important agricultural regions." },
    facts: {
      de: ["Länge von etwa 400 km", "Nebenfluss des Helmand", "Speist den Dahla-Staudamm", "Grüne Oase bei Kandahar"],
      hu: ["Körülbelül 400 km hosszú", "A Helmand mellékfolyója", "A Dahla-gátat táplálja", "Zöld oázis Kandahár mellett"],
      ro: ["Lungime de aproximativ 400 km", "Afluent al râului Helmand", "Alimentează barajul Dahla", "Oază verde lângă Kandahar"],
      en: ["Length of about 400 km", "Tributary of the Helmand", "Feeds the Dahla Dam", "Green oasis near Kandahar"]
    }
  },
  {
    id: "afghanistan-koktscha-river-nature-v2",
    type: "river",
    parent: "AF-BDS",
    coords: [69.4, 37.1],
    name: { de: "Koktscha-Fluss", hu: "Kokcsa folyó", ro: "Râul Kokcha", en: "Kokcha River" },
    description: { de: "Dieser Fluss fließt durch die Provinz Badachschan im Nordosten. Das Tal des Koktscha ist seit der Antike berühmt für seine reichhaltigen Lapislazuli-Minen.", hu: "Ez a folyó az északkeleti Badahsán tartományon folyik keresztül. A Kokcsa völgye az ókor óta híres gazdag lazúrkőbányáiról.", ro: "Acest râu curge prin provincia Badakhshan în nord-est. Valea Kokcha este renumită din antichitate pentru minele sale bogate de lapis lazuli.", en: "This river flows through the Badakhshan province in the northeast. The valley of the Kokcha has been famous since antiquity for its rich lapis lazuli mines." },
    facts: {
      de: ["Nebenfluss des Amudarja", "Fließt durch Feyzabad", "Bekannt für Lapislazuli", "Reißendes Gebirgswasser"],
      hu: ["Az Amu-darja mellékfolyója", "Fajzábádon folyik keresztül", "Lazúrkövekről ismert", "Sebes hegyi víz"],
      ro: ["Afluent al Amu Daria", "Trece prin Fayzabad", "Cunoscut pentru lapis lazuli", "Apă de munte rapidă"],
      en: ["Tributary of the Amu Darya", "Flows through Fayzabad", "Known for lapis lazuli", "Torrential mountain water"]
    }
  },
  {
    id: "afghanistan-murgab-river-nature-v2",
    type: "river",
    parent: "AF-BDG",
    coords: [63.5, 35.3],
    name: { de: "Murgab", hu: "Murgab", ro: "Murgab", en: "Murghab" },
    description: { de: "Der Murgab entspringt im afghanischen Gebirge, fließt nach Nordwesten und erschafft wichtige fruchtbare Oasen, bevor er in der Karakum-Wüste versiegt.", hu: "A Murgab az afgán hegyekben ered, északnyugat felé folyik, és fontos termékeny oázisokat hoz létre, mielőtt kiszáradna a Karakum-sivatagban.", ro: "Murgab izvorăște din munții afgani, curge spre nord-vest și creează oaze fertile importante înainte de a seca în deșertul Karakum.", en: "The Murghab rises in the Afghan mountains, flows northwest, and creates important fertile oases before drying up in the Karakum Desert." },
    facts: {
      de: ["Länge von 850 km", "Entspringt in der Provinz Ghor", "Fließt nach Turkmenistan", "Versickert im Sand"],
      hu: ["850 km hosszúságú", "Gór tartományban ered", "Türkmenisztánba folyik", "A homokban tűnik el"],
      ro: ["Lungime de 850 km", "Izvorăște în provincia Ghor", "Curge spre Turkmenistan", "Se pierde în nisip"],
      en: ["Length of 850 km", "Rises in Ghor Province", "Flows to Turkmenistan", "Sinks into the sand"]
    }
  },
  {
    id: "afghanistan-schah-foladi-nature-v2",
    type: "mountain",
    parent: "AF-BAM",
    coords: [67.6, 34.65],
    name: { de: "Schah Foladi", hu: "Shah Foladi", ro: "Shah Foladi", en: "Shah Foladi" },
    description: { de: "Der Schah Foladi ist der höchste Gipfel der Koh-e Baba-Gebirgskette. Seine Hänge sind oft schneebedeckt und dominieren die Landschaft der Provinz Bamiyan.", hu: "A Shah Foladi a Koh-e Baba hegylánc legmagasabb csúcsa. Lejtőit gyakran hó borítja, és uralják Bámiján tartomány táját.", ro: "Shah Foladi este cel mai înalt vârf din lanțul muntos Koh-e Baba. Pantele sale sunt adesea acoperite de zăpadă și domină peisajul provinciei Bamiyan.", en: "Shah Foladi is the highest peak of the Koh-e Baba mountain range. Its slopes are often covered with snow and dominate the landscape of Bamiyan Province." },
    facts: {
      de: ["Über 5.000 Meter hoch", "Höchster Berg im Koh-e Baba", "Beliebt für Bergsteigen", "Nahe Bamiyan"],
      hu: ["Több mint 5000 méter magas", "A Koh-e Baba legmagasabb hegye", "Népszerű a hegymászók körében", "Bámiján közelében"],
      ro: ["Peste 5.000 de metri altitudine", "Cel mai înalt munte din Koh-e Baba", "Popular pentru alpinism", "Aproape de Bamiyan"],
      en: ["Over 5,000 meters high", "Highest mountain in Koh-e Baba", "Popular for mountaineering", "Near Bamiyan"]
    }
  },
  {
    id: "afghanistan-zorkulsee-nature-v2",
    type: "lake",
    parent: "AF-BDS",
    coords: [73.66, 37.45],
    name: { de: "Zorkulsee", hu: "Zorkul-tó", ro: "Lacul Zorkul", en: "Lake Zorkul" },
    description: { de: "Dieser abgelegene Hochgebirgssee im Pamir-Gebirge markiert einen Teil der Grenze zwischen Afghanistan und Tadschikistan. Er liegt in einer unberührten, kargen Landschaft.", hu: "Ez a távoli magashegyi tó a Pamír-hegységben az Afganisztán és Tádzsikisztán közötti határ egy részét jelöli. Érintetlen, kietlen tájon fekszik.", ro: "Acest lac alpin izolat din Munții Pamir marchează o parte a graniței dintre Afganistan și Tadjikistan. Este situat într-un peisaj arid, neatins.", en: "This remote high mountain lake in the Pamir Mountains marks part of the border between Afghanistan and Tajikistan. It lies in a pristine, barren landscape." },
    facts: {
      de: ["Auf 4.130 Metern Höhe", "Grenze zu Tadschikistan", "Ursprung des Pamir-Flusses", "Zugefroren im Winter"],
      hu: ["4130 méteres magasságban", "Határ Tádzsikisztán felé", "A Pamír folyó forrása", "Télen befagyott"],
      ro: ["La 4.130 de metri altitudine", "Granița cu Tadjikistan", "Izvorul râului Pamir", "Înghețat iarna"],
      en: ["At 4,130 meters elevation", "Border with Tajikistan", "Source of the Pamir River", "Frozen in winter"]
    }
  },
  {
    id: "afghanistan-chaqmaqtin-see-nature-v2",
    type: "lake",
    parent: "AF-BDS",
    coords: [74.15, 37.27],
    name: { de: "Chaqmaqtin-See", hu: "Chaqmaqtin-tó", ro: "Lacul Chaqmaqtin", en: "Chaqmaqtin Lake" },
    description: { de: "Ein malerischer Hochgebirgssee im Wakhan-Korridor. Er ist eine wichtige Wasserquelle in dieser trockenen und abgelegenen Region des Kleinen Pamirs.", hu: "Festői magashegyi tó a Vahán-folyosóban. Fontos vízforrás a Kis-Pamír ezen száraz és távoli régiójában.", ro: "Un lac alpin pitoresc în Coridorul Wakhan. Este o sursă de apă importantă în această regiune uscată și izolată a Micului Pamir.", en: "A picturesque high mountain lake in the Wakhan Corridor. It is an important water source in this dry and remote region of the Little Pamir." },
    facts: {
      de: ["Im Kleinen Pamir gelegen", "Etwa 4.024 Meter hoch", "Zieht Zugvögel an", "Sommerweide für Nomaden"],
      hu: ["A Kis-Pamírban található", "Körülbelül 4024 méter magas", "Vándormadarakat vonz", "Nyári legelő nomádoknak"],
      ro: ["Situat în Micul Pamir", "La aproximativ 4.024 metri altitudine", "Atrage păsările migratoare", "Pășune de vară pentru nomazi"],
      en: ["Located in the Little Pamir", "About 4,024 meters high", "Attracts migratory birds", "Summer pasture for nomads"]
    }
  },
  {
    id: "afghanistan-shiva-see-nature-v2",
    type: "lake",
    parent: "AF-BDS",
    coords: [70.36, 37.38],
    name: { de: "Shiva-See", hu: "Shiva-tó", ro: "Lacul Shiva", en: "Shiva Lake" },
    description: { de: "Der Shiva-See, auch Shewa-See genannt, ist ein Süßwassersee in der Provinz Badachschan. Die umgebenden grünen Wiesen werden von Nomaden als Sommerweideland genutzt.", hu: "A Shiva-tó, más néven Shewa-tó egy édesvizű tó Badahsán tartományban. A környező zöld réteket nomádok használják nyári legelőként.", ro: "Lacul Shiva, cunoscut și sub numele de Lacul Shewa, este un lac de apă dulce din provincia Badakhshan. Pajiștile verzi din jur sunt folosite de nomazi ca pășuni de vară.", en: "Shiva Lake, also known as Shewa Lake, is a freshwater lake in Badakhshan Province. The surrounding green meadows are used by nomads as summer pastures." },
    facts: {
      de: ["Süßwassersee", "In der Provinz Badachschan", "Gefriert im langen Winter", "Beliebt bei Hirten"],
      hu: ["Édesvizű tó", "Badahsán tartományban", "A hosszú tél alatt befagy", "Népszerű a pásztorok körében"],
      ro: ["Lac cu apă dulce", "În provincia Badakhshan", "Îngheață în timpul iernii lungi", "Popular printre ciobani"],
      en: ["Freshwater lake", "In Badakhshan Province", "Freezes in the long winter", "Popular with herders"]
    }
  },
  {
    id: "afghanistan-kajaki-stausee-nature-v2",
    type: "lake",
    parent: "AF-HEL",
    coords: [65.11, 32.32],
    name: { de: "Kajaki-Stausee", hu: "Kajaki-víztározó", ro: "Lacul de acumulare Kajaki", en: "Kajaki Reservoir" },
    description: { de: "Der Kajaki-Stausee am Helmand-Fluss ist eines der wichtigsten Wasserreservoirs Afghanistans. Er dient der Bewässerung der südlichen Wüsten und der Stromerzeugung.", hu: "A Kajaki-víztározó a Helmand folyón Afganisztán egyik legfontosabb víztározója. A déli sivatagok öntözését és az áramtermelést szolgálja.", ro: "Lacul de acumulare Kajaki de pe râul Helmand este unul dintre cele mai importante rezervoare de apă din Afganistan. Acesta servește la irigarea deșerturilor din sud și la generarea de energie.", en: "The Kajaki Reservoir on the Helmand River is one of Afghanistan's most important water reservoirs. It serves to irrigate the southern deserts and generate electricity." },
    facts: {
      de: ["Am Helmand-Fluss", "Wichtiges Kraftwerk", "Bewässert Helmand-Provinz", "Bau in den 1950er Jahren"],
      hu: ["A Helmand folyón", "Fontos erőmű", "Helmand tartományt öntözi", "Az 1950-es években épült"],
      ro: ["Pe râul Helmand", "Centrală electrică importantă", "Irigă provincia Helmand", "Construit în anii 1950"],
      en: ["On the Helmand River", "Important power plant", "Irrigates Helmand Province", "Built in the 1950s"]
    }
  },
  {
    id: "afghanistan-spin-ghar-nature-v2",
    type: "mountain",
    parent: "AF-NAN",
    coords: [70.13, 33.95],
    name: { de: "Spīn Ghar", hu: "Spin Ghar", ro: "Spin Ghar", en: "Spin Ghar" },
    description: { de: "Spīn Ghar, auch bekannt als Weiße Berge, ist eine Bergkette, die die Grenze zwischen Afghanistan und Pakistan markiert. Sie ist für ihre dichten Nadelwälder bekannt.", hu: "A Spin Ghar, más néven Fehér Hegyek, az Afganisztán és Pakisztán határát jelző hegylánc. Sűrű tűlevelű erdeiről ismert.", ro: "Spin Ghar, cunoscuți și sub numele de Munții Albi, este un lanț muntos care marchează granița dintre Afganistan și Pakistan. Este renumit pentru pădurile sale dense de conifere.", en: "Spin Ghar, also known as the White Mountains, is a mountain range that marks the border between Afghanistan and Pakistan. It is known for its dense coniferous forests." },
    facts: {
      de: ["Höchster Gipfel: Mount Sikaram", "Bedeutet Weiße Berge", "Nahe dem Khyber-Pass", "Historisch umkämpfte Region"],
      hu: ["Legmagasabb csúcs: Mount Sikaram", "Fehér Hegyeket jelent", "A Haibár-hágó közelében", "Történelmileg vitatott régió"],
      ro: ["Cel mai înalt vârf: Muntele Sikaram", "Înseamnă Munții Albi", "Aproape de Pasul Khyber", "Regiune disputată istoric"],
      en: ["Highest peak: Mount Sikaram", "Means White Mountains", "Near the Khyber Pass", "Historically contested region"]
    }
  },
  {
    id: "afghanistan-koh-e-baba-nature-v2",
    type: "mountain",
    parent: "AF-BAM",
    coords: [67.7, 34.6],
    name: { de: "Koh-e Baba", hu: "Koh-e Baba", ro: "Koh-e Baba", en: "Koh-e Baba" },
    description: { de: "Das Koh-e Baba-Gebirge ist die westliche Fortsetzung des Hindukusch. Hier entspringen mehrere der wichtigsten Flüsse Afghanistans, darunter der Helmand und der Hari Rud.", hu: "A Koh-e Baba-hegység a Hindukus nyugati folytatása. Itt ered Afganisztán több legfontosabb folyója, köztük a Helmand és a Hari Rud.", ro: "Munții Koh-e Baba reprezintă continuarea vestică a Hindu Kush. Aici izvorăsc mai multe dintre cele mai importante râuri din Afganistan, printre care Helmand și Hari Rud.", en: "The Koh-e Baba mountain range is the western continuation of the Hindu Kush. Several of Afghanistan's most important rivers rise here, including the Helmand and the Hari Rud." },
    facts: {
      de: ["Zentrum von Afghanistan", "Wichtige Flussspeisung", "Raue alpine Umgebung", "Gehört zum Hindukusch-System"],
      hu: ["Afganisztán központja", "Fontos folyóforrás", "Zord alpesi környezet", "A Hindukus rendszer része"],
      ro: ["Centrul Afganistanului", "Alimentare importantă a râurilor", "Mediu alpin aspru", "Parte a sistemului Hindu Kush"],
      en: ["Center of Afghanistan", "Important river supply", "Rugged alpine environment", "Part of the Hindu Kush system"]
    }
  }
];
