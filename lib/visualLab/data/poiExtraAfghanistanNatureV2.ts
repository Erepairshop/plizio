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
  ,
    factsAdvanced: { multi4: ["Elevation: 7,492 m (24,580 ft)", "First ascent: 1960 by a Japanese team", "First winter ascent: 1973 by a Polish team", "Part of the Hindu Kush mountain range", "Second highest peak in the Hindu Kush", "Located on the Afghanistan-Pakistan border", "The surrounding area is a habitat for snow leopards", "Part of the Wakhan National Park"] }},
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
  ,
    factsAdvanced: { multi4: ["Length: Over 800 kilometers (500 miles)", "Highest peak: Tirich Mir (7,708 m)", "Separates the Amu Darya valley from the Indus River valley", "Historically known as the 'Caucasus Indicus'", "Crossed by Alexander the Great in 329 BC", "Source of major rivers like the Helmand, Hari Rud, and Kabul", "Prone to significant seismic activity", "The name translates to 'Killer of Hindus'"] }},
  {
    id: "afghanistan-pamir-nature-v2",
    type: "mountain",
    parent: "AF-BDS",
    coords: [73.0, 38.0],
    name: { de: "Pamir-Gebirge", hu: "Pamír-hegység", ro: "Munții Pamir", en: "Pamir Mountains" },
    description: { de: "Das Pamir-Gebirge im Nordosten Afghanistans bildet eine Hochgebirgsregion, die als Dach der Welt bekannt ist.", hu: "Afganisztán északkeleti részén, a Vahán-folyosóban húzódó magashegység, amelyet gyakran emlegetnek a világ tetejeként.", ro: "Munții Pamir ating nord-estul Afganistanului în Coridorul Wakhan. Această regiune alpină înaltă este adesea numită 'Acoperișul Lumii'.", en: "The Pamir Mountains touch northeastern Afghanistan in the Wakhan Corridor. This high alpine region is often referred to as the 'Roof of the World'." },
    facts: {
      de: ["Teil des Großen Pamir und Kleinen Pamir", "Heimat des seltenen Marco-Polo-Schafes", "Durchschnittliche Höhe über 4.000 Meter", "Wichtiger ökologischer Korridor in Zentralasien"],
      hu: ["Magaslati fennsíkok vidéke", "A Vahán-folyosóban fekszik", "Átlagmagassága 4000 méter felett", "Ritka Marco Polo-juhok élőhelye"],
      ro: ["Situat în Coridorul Wakhan", "Climat alpin extrem", "Adăpostește specii rare de animale", "Acoperișul lumii"],
      en: ["Located in the Wakhan Corridor", "Extreme high alpine climate", "Home to rare animal species", "Roof of the World"]
    }
  ,
    factsAdvanced: { multi4: ["Known as the 'Roof of the World'", "Junction of several major Asian mountain ranges", "Average elevation exceeds 4,000 meters (13,123 ft)", "Afghan portion is mainly in the Wakhan Corridor", "Home to nomadic Kyrgyz and Wakhi people", "Habitat for the Marco Polo sheep", "Lake Zorkul, a major lake, is located here", "Contains extensive glacial systems"] }},
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
  ,
    factsAdvanced: { multi4: ["Established on April 3, 2014", "Afghanistan's second national park", "Area: 10,951 square kilometers", "Covers the entire Wakhan District", "Protects over 120 snow leopards", "Home to the Marco Polo sheep and Siberian ibex", "Supports the indigenous Wakhi and Kyrgyz communities", "Connects to protected areas in Tajikistan, Pakistan, and China"] }},
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
  ,
    factsAdvanced: { multi4: ["Established in 2020", "Located in Nuristan Province, eastern Afghanistan", "Protects unique Western Himalayan broadleaf and coniferous forests", "Habitat for the endangered Kashmir musk deer", "Home to Himalayan black bears and leopards", "Characterized by steep, V-shaped valleys", "The region is known for its distinct languages and culture", "Covers an area of approximately 1,200 square kilometers"] }},
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
  ,
    factsAdvanced: { multi4: ["Ancient name: Oxus River", "Length: Approximately 2,540 km (1,578 miles)", "Forms the border between Afghanistan and several Central Asian countries", "Source: Pamir Mountains, from the confluence of the Vakhsh and Panj rivers", "Historically flowed into the Aral Sea", "Vital for irrigation, especially for cotton crops", "Mentioned in the works of ancient Greek historians", "Its flow has significantly decreased in modern times"] }},
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
  ,
    factsAdvanced: { multi4: ["Length: 1,150 km (715 miles)", "Longest river entirely within Afghanistan", "Source: Koh-e Baba range of the Hindu Kush", "Mouth: Hamun Lake in the Sistan Basin", "The Kajaki Dam is a major hydroelectric station on the river", "Main tributary is the Arghandab River", "Crucial for agriculture in southern Afghanistan", "Water rights are a point of dispute with Iran"] }},
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
  ,
    factsAdvanced: { multi4: ["Length: Approximately 1,100 km (680 miles)", "Source: Koh-e Baba mountains, central Afghanistan", "Flows through the city of Herat", "Forms the border between Afghanistan-Iran and Iran-Turkmenistan", "Disappears in the Karakum Desert", "The Salma Dam is a major hydroelectric project on the river", "Known as the Tejen River in Turkmenistan", "Its valley has been a historically significant cultural corridor"] }, image: "/poi-images/afghanistan-hari-rud-nature-v2.webp"},
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
  ,
    factsAdvanced: { multi4: ["Length: Approximately 700 km (435 miles)", "Source: Sanglakh Range, Hindu Kush", "Flows through the capitals of Kabul and Jalalabad", "Tributary of the Indus River", "Joined by the Panjshir and Kunar rivers in Afghanistan", "Historically significant route (Khyber Pass)", "Heavily utilized for irrigation and hydropower", "Faces severe pollution issues, especially around Kabul"] }, image: "/poi-images/afghanistan-kabul-river-nature-v2.webp"},
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
  ,
    factsAdvanced: { multi4: ["Main river of the Panjshir Valley", "Tributary of the Kabul River", "Approximately 150 km (93 miles) long", "The valley is famous for its high-quality emeralds", "Historically a stronghold of resistance", "The name 'Panjshir' means 'Five Lions'", "The valley is densely populated, with over 100,000 residents", "Water is used for irrigation and small-scale hydropower"] }, image: "/poi-images/afghanistan-pandschschir-river-nature-v2.webp"},
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
  ,
    factsAdvanced: { multi4: ["Length: Approximately 400 km (250 miles)", "Main tributary of the Helmand River", "Source: Ghazni Province", "Flows past the city of Kandahar", "The Dahla Dam is located on this river", "Its valley is famous for its pomegranates", "Provides irrigation for a large agricultural area", "Historically significant in the Kandahar region"] }, image: "/poi-images/afghanistan-arghandab-river-nature-v2.webp"},
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
  ,
    factsAdvanced: { multi4: ["Located in Badakhshan Province", "Tributary of the Amu Darya (Oxus River)", "Valley is the world's primary source of high-grade lapis lazuli", "Lapis lazuli mines have been active for over 6,000 years", "Flows through the provincial capital, Fayzabad", "The river is approximately 320 km (200 miles) long", "Water is used for irrigation and local hydropower", "The region is also known for ruby and spinel deposits"] }, image: "/poi-images/afghanistan-koktscha-river-nature-v2.webp"},
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
  ,
    factsAdvanced: { multi4: ["Total length: 978 km (608 miles)", "Source: Ghor Province, Afghanistan", "Flows through Afghanistan and Turkmenistan", "Forms a large oasis and inland delta at Mary, Turkmenistan", "The ancient city of Merv was located in its delta", "Does not flow into any sea (endorheic basin)", "Crucial for agriculture in the Badghis province", "Historically part of the region of Bactria"] }, image: "/poi-images/afghanistan-murgab-river-nature-v2.webp"},
  {
    id: "afghanistan-schah-foladi-nature-v2",
    type: "mountain",
    parent: "AF-BAM",
    coords: [67.6, 34.65],
    name: { de: "Schah Foladi", hu: "Shah Foladi", ro: "Shah Foladi", en: "Shah Foladi" },
    description: { de: "Der Schah Foladi ist mit 4.951 Metern der höchste Gipfel der Koh-i-Baba-Kette im zentralen Hochland.", hu: "A Shah Foladi a Koh-e Baba hegylánc legmagasabb csúcsa. Lejtőit gyakran hó borítja, és uralják Bámiján tartomány táját.", ro: "Shah Foladi este cel mai înalt vârf din lanțul muntos Koh-e Baba. Pantele sale sunt adesea acoperite de zăpadă și domină peisajul provinciei Bamiyan.", en: "The highest peak of the Koh-i-Baba mountain range, offering rugged alpine scenery and permanent snow fields." },
    facts: {
      de: ["Gipfelhöhe erreicht 4.951 Meter", "Dominierender Berg der Provinz Bamiyan", "Ganzjährig schneebedeckte Gipfelregionen", "Ursprung zahlreicher Gebirgsflüsse"],
      hu: ["Több mint 5000 méter magas", "A Koh-e Baba legmagasabb hegye", "Népszerű a hegymászók körében", "Bámiján közelében"],
      ro: ["Peste 5.000 de metri altitudine", "Cel mai înalt munte din Koh-e Baba", "Popular pentru alpinism", "Aproape de Bamiyan"],
      en: ["Reaches an elevation of 4,951 meters", "Part of the Hindu Kush mountain system", "Located in the Bamyan Province", "Popular destination for extreme mountaineers"]
    }
  ,
    factsAdvanced: { multi4: ["Elevation: 5,143 m (16,873 ft)", "Highest peak of the Koh-e-Baba range", "Located in Bamiyan Province", "Part of the Band-e-Amir National Park watershed", "The name translates to 'King of Steel'", "Considered the source of many of Afghanistan's rivers", "A popular but challenging destination for trekking", "Summit is snow-capped for most of the year"] }, image: "/poi-images/afghanistan-schah-foladi-nature-v2.webp"},
  {
    id: "afghanistan-zorkulsee-nature-v2",
    type: "lake",
    parent: "AF-BDS",
    coords: [73.66, 37.45],
    name: { de: "Zorkulsee", hu: "Zorkul-tó", ro: "Lacul Zorkul", en: "Lake Zorkul" },
    description: { de: "Dieser abgelegene Hochgebirgssee im Pamir-Gebirge markiert einen Teil der Grenze zwischen Afghanistan und Tadschikistan. Er liegt in einer unberührten, kargen Landschaft.", hu: "Ez a távoli magashegyi tó a Pamír-hegységben az Afganisztán és Tádzsikisztán közötti határ egy részét jelöli. Érintetlen, kietlen tájon fekszik.", ro: "Lacul Zorkul este un lac alpin spectaculos situat în Munții Pamir, la granița dintre Afganistan și Tadjikistan.", en: "This remote high mountain lake in the Pamir Mountains marks part of the border between Afghanistan and Tajikistan. It lies in a pristine, barren landscape." },
    facts: {
      de: ["Auf 4.130 Metern Höhe", "Grenze zu Tadschikistan", "Ursprung des Pamir-Flusses", "Zugefroren im Winter"],
      hu: ["4130 méteres magasságban", "Határ Tádzsikisztán felé", "A Pamír folyó forrása", "Télen befagyott"],
      ro: ["Altitudine de aproximativ 4.126 metri", "Situat în coridorul Wakhan", "Suprafață de circa 38 km pătrați", "Sursă importantă pentru râul Pamir"],
      en: ["At 4,130 meters elevation", "Border with Tajikistan", "Source of the Pamir River", "Frozen in winter"]
    }
  ,
    factsAdvanced: { multi4: ["Elevation: 4,130 m (13,550 ft)", "Straddles the border of Afghanistan and Tajikistan", "Source of the Pamir River", "Designated as a Ramsar wetland of international importance", "Also known as Lake Victoria in 19th-century British sources", "Length: 25 km (16 miles)", "The lake is frozen for about 8-9 months of the year", "Important habitat for migratory birds like the bar-headed goose"] }, image: "/poi-images/afghanistan-zorkulsee-nature-v2.webp"},
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
  ,
    descriptionAdvanced: {
    
    "de": "Der Chaqmaqtin-See liegt in der abgelegenen Region des Kleinen Pamir im Wakhan-Korridor Afghanistans auf einer Höhe von über 4.000 Metern. Dieser Süßwassersee ist von weiten, grasbewachsenen Tälern umgeben, die traditionell als Sommerweiden für die Herden der nomadischen Kirgisen dienen. Der See entsteht durch Schmelzwasser aus den umliegenden Gletschern und ist eine wichtige Wasserquelle in dieser hochgelegenen und trockenen Umgebung. Die Region ist bekannt für ihre extreme Abgeschiedenheit und die raue Schönheit der Landschaft. Der See und seine Umgebung sind ein wichtiger Lebensraum für verschiedene Wildtiere, darunter Murmeltiere und verschiedene Vogelarten. Aufgrund seiner isolierten Lage ist das Ökosystem des Chaqmaqtin-Sees weitgehend unberührt geblieben und bietet einen Einblick in eine der letzten wirklich wilden Gegenden Zentralasiens.",
    "hu": "A Chaqmaqtin-tó Afganisztán Vahán-folyosójának távoli Kis-Pamír régiójában található, több mint 4000 méteres magasságban. Ezt az édesvizű tavat tágas, füves völgyek veszik körül, amelyeket a nomád kirgizek hagyományosan nyári legelőként használnak nyájaik számára. A tó a környező gleccserek olvadékvizéből jön létre, és fontos vízforrást jelent ebben a magaslati és száraz környezetben. A régió extrém elszigeteltségéről és a táj zord szépségéről ismert. A tó és környéke fontos élőhelyet biztosít különböző vadon élő állatoknak, köztük mormotáknak és különféle madárfajoknak. Elszigetelt fekvésének köszönhetően a Chaqmaqtin-tó ökoszisztémája nagyrészt érintetlen maradt, betekintést nyújtva Közép-Ázsia egyik utolsó valóban vad területébe.",
    "ro": "Lacul Chaqmaqtin este situat în regiunea izolată Micul Pamir din Coridorul Wakhan al Afganistanului, la o altitudine de peste 4.000 de metri. Acest lac de apă dulce este înconjurat de văi largi, ierboase, folosite în mod tradițional ca pășuni de vară pentru turmele nomazilor kârgâzi. Lacul este format din topirea apelor din ghețarii înconjurători și reprezintă o sursă de apă vitală în acest mediu de mare altitudine și arid. Regiunea este cunoscută pentru izolarea sa extremă și pentru frumusețea aspră a peisajului. Lacul și împrejurimile sale sunt un habitat important pentru diverse specii de animale sălbatice, inclusiv marmote și diferite specii de păsări. Datorită locației sale izolate, ecosistemul lacului Chaqmaqtin a rămas în mare parte neatins, oferind o privire asupra uneia dintre ultimele zone cu adevărat sălbatice din Asia Centrală.",
    "en": "Chaqmaqtin Lake is located in the remote Little Pamir region of Afghanistan's Wakhan Corridor, at an altitude of over 4,000 meters. This freshwater lake is surrounded by wide, grassy valleys traditionally used as summer pastures for the herds of the nomadic Kyrgyz people. The lake is formed by meltwater from the surrounding glaciers and provides a vital water source in this high-altitude and arid environment. The region is known for its extreme remoteness and the rugged beauty of its landscape. The lake and its surroundings are an important habitat for various wildlife, including marmots and different bird species. Due to its isolated location, the Chaqmaqtin Lake ecosystem has remained largely untouched, offering a glimpse into one of the last truly wild areas of Central Asia."
    },
    factsAdvanced: { multi4: ["Location: Little Pamir, Wakhan Corridor, Afghanistan", "Elevation: Approx. 4,024 m (13,202 ft)", "Type: Freshwater lake", "Source of the Aksu or Murghab river", "Surrounded by summer pastures for Kyrgyz nomads", "Area is extremely remote and sparsely populated", "Habitat for Marco Polo sheep and other wildlife", "Frozen for more than half the year"] }, image: "/poi-images/afghanistan-chaqmaqtin-see-nature-v2.webp"},
  {
    id: "afghanistan-shiva-see-nature-v2",
    type: "lake",
    parent: "AF-BDS",
    coords: [70.36, 37.38],
    name: { de: "Shiva-See", hu: "Shiva-tó", ro: "Lacul Shiva", en: "Shiva Lake" },
    description: { de: "Der Schiwa-See ist ein Gebirgssee in der Provinz Badachschan, der in einer Höhe von etwa 3.100 Metern liegt.", hu: "Badahsán tartományban található édesvízi hegyi tó, amely 3100 méteres magasságban helyezkedik el.", ro: "Lacul Shiva, cunoscut și sub numele de Lacul Shewa, este un lac de apă dulce din provincia Badakhshan. Pajiștile verzi din jur sunt folosite de nomazi ca pășuni de vară.", en: "Shiva Lake, also known as Shewa Lake, is a freshwater lake in Badakhshan Province. The surrounding green meadows are used by nomads as summer pastures." },
    facts: {
      de: ["Höchstgelegener großer See Afghanistans", "Wichtige Wasserquelle für die Region", "Nur in den Sommermonaten eisfrei", "Umgeben von alpinen Weideflächen"],
      hu: ["Badahsán tartományban található", "Édesvízi hegyi tó", "3100 méteres magasságban", "Környéke népszerű nyári legelő"],
      ro: ["Lac cu apă dulce", "În provincia Badakhshan", "Îngheață în timpul iernii lungi", "Popular printre ciobani"],
      en: ["Freshwater lake", "In Badakhshan Province", "Freezes in the long winter", "Popular with herders"]
    }
  ,
    descriptionAdvanced: {
    
    "de": "Der Shiva-See, auch Shewa-See genannt, ist ein beeindruckender See in der Provinz Badachschan im Nordosten Afghanistans. Er liegt auf einer Höhe von etwa 3.100 Metern und wurde durch einen massiven prähistorischen Erdrutsch gebildet, der den Fluss Arakht blockierte. Dieser natürliche Damm schuf einen tiefen, etwa 11 Kilometer langen See mit leuchtend blauem Wasser. Der See ist von steilen, felsigen Hängen umgeben, die in den Sommermonaten mit grünen Weiden durchsetzt sind. Die Region ist abgelegen und schwer zugänglich, was zur Erhaltung ihrer unberührten Schönheit beigetragen hat. Der Shiva-See ist ein wichtiges Wasserreservoir und beeinflusst das lokale Mikroklima. Er ist ein Beispiel für die dramatischen geologischen Prozesse, die die Landschaft dieser Hochgebirgsregion geprägt haben.",
    "hu": "A Shiva-tó, más néven Shewa-tó, egy lenyűgöző tó Badahsán tartományban, Északkelet-Afganisztánban. Körülbelül 3100 méteres magasságban fekszik, és egy hatalmas, őskori földcsuszamlás hozta létre, amely elzárta az Arakht folyót. Ez a természetes gát egy mély, körülbelül 11 kilométer hosszú, ragyogó kék vizű tavat hozott létre. A tavat meredek, sziklás lejtők veszik körül, amelyeket a nyári hónapokban zöld legelők tarkítanak. A régió elszigetelt és nehezen megközelíthető, ami hozzájárult érintetlen szépségének megőrzéséhez. A Shiva-tó fontos víztározó és befolyásolja a helyi mikroklímát. Példája azoknak a drámai geológiai folyamatoknak, amelyek ezt a magashegyi régió tájképét formálták.",
    "ro": "Lacul Shiva, cunoscut și sub numele de Lacul Shewa, este un lac impresionant situat în provincia Badakhshan din nord-estul Afganistanului. Aflat la o altitudine de aproximativ 3.100 de metri, lacul a fost format de o alunecare de teren preistorică masivă care a blocat râul Arakht. Acest baraj natural a creat un lac adânc, lung de aproximativ 11 kilometri, cu ape de un albastru vibrant. Lacul este înconjurat de versanți abrupți și stâncoși, intercalați cu pășuni verzi în lunile de vară. Regiunea este izolată și greu accesibilă, ceea ce a contribuit la conservarea frumuseții sale neatinse. Lacul Shiva este un rezervor de apă important și influențează microclimatul local, fiind un exemplu al proceselor geologice dramatice care au modelat peisajul acestei regiuni de mare altitudine.",
    "en": "Shiva Lake, also known as Shewa Lake, is a stunning lake located in the Badakhshan Province of northeastern Afghanistan. Situated at an altitude of about 3,100 meters, the lake was formed by a massive prehistoric landslide that blocked the Arakht River. This natural dam created a deep lake, approximately 11 kilometers long, with vibrant blue waters. The lake is surrounded by steep, rocky slopes interspersed with green pastures during the summer months. The region is remote and difficult to access, which has helped preserve its pristine beauty. Shiva Lake is an important water reservoir and influences the local microclimate, serving as an example of the dramatic geological processes that have shaped the landscape of this high-mountain region."
    },
    factsAdvanced: { multi4: ["Location: Badakhshan Province, Afghanistan", "Elevation: Approximately 3,100 m (10,170 ft)", "Type: Landslide-dammed lake", "Formed by a landslide blocking the Arakht River", "Length: Approximately 11 km (6.8 miles)", "Known for its deep, vibrant blue color", "The region is seismically active", "Access to the lake is difficult and often requires trekking"] }, image: "/poi-images/afghanistan-shiva-see-nature-v2.webp"},
  {
    id: "afghanistan-kajaki-stausee-nature-v2",
    type: "lake",
    parent: "AF-HEL",
    coords: [65.11, 32.32],
    name: { de: "Kajaki-Stausee", hu: "Kajaki-víztározó", ro: "Lacul de acumulare Kajaki", en: "Kajaki Reservoir" },
    description: { de: "Der Kajaki-Stausee am Helmand-Fluss ist eines der wichtigsten Wasserreservoirs Afghanistans. Er dient der Bewässerung der südlichen Wüsten und der Stromerzeugung.", hu: "A Helmand folyón kialakított hatalmas víztározó, amely kulcsfontosságú az ország déli részének öntözésében és áramellátásában.", ro: "Lacul de acumulare Kajaki de pe râul Helmand este unul dintre cele mai importante rezervoare de apă din Afganistan. Acesta servește la irigarea deșerturilor din sud și la generarea de energie.", en: "The Kajaki Reservoir on the Helmand River is one of Afghanistan's most important water reservoirs. It serves to irrigate the southern deserts and generate electricity." },
    facts: {
      de: ["Am Helmand-Fluss", "Wichtiges Kraftwerk", "Bewässert Helmand-Provinz", "Bau in den 1950er Jahren"],
      hu: ["A Helmand folyón épült", "Fontos vízerőmű működik itt", "Dél-Afganisztán öntözőbázisa", "Az 1950-es években létesült"],
      ro: ["Pe râul Helmand", "Centrală electrică importantă", "Irigă provincia Helmand", "Construit în anii 1950"],
      en: ["On the Helmand River", "Important power plant", "Irrigates Helmand Province", "Built in the 1950s"]
    }
  ,
    descriptionAdvanced: {
    
    "de": "Der Kajaki-Staudamm und der dazugehörige Stausee sind ein zentrales Infrastrukturprojekt am Helmand-Fluss in der Provinz Helmand im Süden Afghanistans. Der Damm wurde ursprünglich in den 1950er Jahren mit Unterstützung der USA gebaut, um die Bewässerung zu regulieren und Strom zu erzeugen. Der Stausee ist einer der größten Wasserspeicher des Landes und von entscheidender Bedeutung für die Landwirtschaft in der Helmand-Flussaue, einer der fruchtbarsten Regionen Afghanistans. Er versorgt Tausende von Hektar Land mit Wasser und ermöglicht den Anbau von Weizen, Baumwolle und Obst. Der Damm beherbergt auch ein Wasserkraftwerk, das eine wichtige Stromquelle für die Provinzen Helmand und Kandahar darstellt. Das Projekt war im Laufe der Jahrzehnte immer wieder Ziel von Konflikten, was seine strategische Bedeutung unterstreicht.",
    "hu": "A Kajaki-gát és a hozzá tartozó víztározó egy központi infrastrukturális projekt a Helmand folyón, Helmand tartományban, Dél-Afganisztánban. A gátat eredetileg az 1950-es években építették az Egyesült Államok támogatásával az öntözés szabályozására és villamosenergia-termelésre. A víztározó az ország egyik legnagyobb víztárolója, és létfontosságú a Helmand folyó árterületén folytatott mezőgazdaság számára, amely Afganisztán egyik legtermékenyebb régiója. Több ezer hektár földet lát el vízzel, lehetővé téve a búza, gyapot és gyümölcsök termesztését. A gát egy vízerőműnek is otthont ad, amely fontos áramforrás Helmand és Kandahár tartományok számára. A projekt az évtizedek során többször is konfliktusok célpontjává vált, ami hangsúlyozza stratégiai jelentőségét.",
    "ro": "Barajul Kajaki și rezervorul său sunt un proiect de infrastructură central pe râul Helmand, în provincia Helmand din sudul Afganistanului. Construit inițial în anii 1950 cu sprijin american, barajul a fost proiectat pentru a regla irigațiile și a genera energie hidroelectrică. Rezervorul este unul dintre cele mai mari corpuri de apă stocată din țară și este de o importanță critică pentru agricultura din valea râului Helmand, una dintre cele mai fertile regiuni ale Afganistanului. Acesta furnizează apă pentru mii de hectare de teren, permițând cultivarea grâului, bumbacului și fructelor. Barajul găzduiește și o centrală hidroelectrică, o sursă vitală de electricitate pentru provinciile Helmand și Kandahar. Proiectul a fost o țintă a conflictelor de-a lungul decadelor, subliniind importanța sa strategică.",
    "en": "The Kajaki Dam and its reservoir are a central piece of infrastructure on the Helmand River in Helmand Province, southern Afghanistan. Originally constructed in the 1950s with American support, the dam was designed to regulate irrigation and generate hydroelectric power. The reservoir is one of the largest bodies of stored water in the country and is critically important for agriculture in the Helmand river valley, one of Afghanistan's most fertile regions. It provides water to thousands of hectares of land, enabling the cultivation of wheat, cotton, and fruits. The dam also houses a hydroelectric power station, a vital source of electricity for Helmand and Kandahar provinces. The project has been a target of conflict over the decades, highlighting its strategic importance."
    },
    factsAdvanced: { multi4: ["Location: Kajaki District, Helmand Province", "Built on the Helmand River", "Original construction completed in 1953", "Provides electricity and irrigation water for southern Afghanistan", "Reservoir capacity: 1.715 billion cubic meters", "A key strategic asset during conflicts", "Major expansion projects have been undertaken since the 2000s", "Crucial for the agricultural economy of the region"] }, image: "/poi-images/afghanistan-kajaki-stausee-nature-v2.webp"},
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
  ,
    descriptionAdvanced: {
    
    "de": "Die Spīn Ghar-Bergkette, was auf Paschtu „Weißer Berg“ bedeutet, erstreckt sich entlang der Grenze zwischen Afghanistan und Pakistan. Ihr höchster Gipfel, der Mount Sikaram, erreicht eine Höhe von 4.761 Metern. Die Berge sind für ihre ausgedehnten Wälder aus Kiefern und Himalaya-Zedern bekannt, die einen starken Kontrast zu den trockeneren Regionen im Süden bilden. Diese Wälder sind ein wichtiger Lebensraum für eine Vielzahl von Wildtieren. Die Bergkette ist auch von großer historischer und strategischer Bedeutung, da sie den berühmten Khyber-Pass im Norden überblickt, der seit Jahrtausenden eine wichtige Invasions- und Handelsroute zwischen Zentral- und Südasien darstellt. Die Region war Schauplatz zahlreicher Militäroperationen und Stammeskonflikte. Die schneebedeckten Gipfel, die den Bergen ihren Namen geben, sind ein markantes Merkmal der Landschaft an der Durand-Linie.",
    "hu": "A Spin Ghar-hegylánc, amely pastu nyelven „Fehér Hegyeket” jelent, az Afganisztán és Pakisztán közötti határ mentén húzódik. Legmagasabb csúcsa, a Mount Sikaram, eléri a 4761 métert. A hegyek kiterjedt fenyő- és himalájai cédruserdeikről ismertek, amelyek éles ellentétben állnak a délebbre fekvő szárazabb régiókkal. Ezek az erdők fontos élőhelyet biztosítanak számos vadon élő állatfaj számára. A hegylánc történelmi és stratégiai jelentősége is nagy, mivel északról a híres Haibár-hágóra néz, amely évezredek óta fontos inváziós és kereskedelmi útvonal Közép- és Dél-Ázsia között. A régió számos katonai művelet és törzsi konfliktus helyszíne volt. A hegyeknek nevet adó, hóval borított csúcsok a Durand-vonal menti táj jellegzetes elemei.",
    "ro": "Lanțul muntos Spīn Ghar, care înseamnă „Muntele Alb” în paștună, se întinde de-a lungul graniței dintre Afganistan și Pakistan. Cel mai înalt vârf al său, Muntele Sikaram, atinge o altitudine de 4.761 de metri. Munții sunt cunoscuți pentru pădurile lor extinse de pin și cedru de Himalaya, care contrastează puternic cu regiunile mai aride din sud. Aceste păduri sunt un habitat important pentru o varietate de animale sălbatice. Lanțul muntos are, de asemenea, o mare importanță istorică și strategică, deoarece domină faimosul Pas Khyber la nord, care a fost o rută cheie de invazie și comerț între Asia Centrală și de Sud timp de milenii. Regiunea a fost scena a numeroase operațiuni militare și conflicte tribale. Vârfurile acoperite de zăpadă, care dau numele munților, sunt o caracteristică proeminentă a peisajului de-a lungul Liniei Durand.",
    "en": "The Spīn Ghar mountain range, meaning 'White Mountain' in Pashto, stretches along the border between Afghanistan and Pakistan. Its highest peak, Mount Sikaram, reaches an altitude of 4,761 meters. The mountains are known for their extensive forests of pine and deodar cedar, which stand in sharp contrast to the more arid regions to the south. These forests are an important habitat for a variety of wildlife. The range is also of great historical and strategic importance as it overlooks the famous Khyber Pass to the north, which has been a key invasion and trade route between Central and South Asia for millennia. The region has been the site of numerous military operations and tribal conflicts. The snow-clad peaks that give the mountains their name are a prominent feature of the landscape along the Durand Line."
    },
    factsAdvanced: { multi4: ["Pashto name meaning 'White Mountains'", "Forms a natural border between Afghanistan and Pakistan", "Highest peak: Mount Sikaram at 4,761 m (15,620 ft)", "Overlooks the historic Khyber Pass", "Features extensive pine and deodar cedar forests", "The Tora Bora cave complex is located within this range", "Part of the larger Hindu Kush mountain system", "Historically a contested and strategic region"] }, image: "/poi-images/afghanistan-spin-ghar-nature-v2.webp"},
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
  ,
    descriptionAdvanced: {
    
    "de": "Das Koh-e-Baba-Gebirge ist die westliche Verlängerung des Hindukusch und liegt im Herzen Afghanistans, hauptsächlich in der Provinz Bamiyan. Sein höchster Gipfel ist der Schah Foladi. Das Gebirge ist von entscheidender hydrologischer Bedeutung für das Land, da hier mehrere der wichtigsten Flüsse Afghanistans entspringen, darunter der Helmand, der Hari Rud und der Kabul-Fluss. Diese Flüsse versorgen weite Teile des Landes mit Wasser für Landwirtschaft und Trinkwasser. Die Landschaft ist rau und karg, mit hohen Gipfeln und tiefen Tälern. Die Region ist die Heimat des Hazara-Volkes. Das Koh-e-Baba-Gebirge ist auch Teil des Einzugsgebiets des Band-e-Amir-Nationalparks, der für seine Seen bekannt ist. Die Erhaltung des Ökosystems dieses Gebirges ist für die Wassersicherheit Afghanistans von größter Bedeutung.",
    "hu": "A Koh-e Baba-hegység a Hindukus nyugati kiterjesztése, és Afganisztán szívében, főként Bámiján tartományban található. Legmagasabb csúcsa a Shah Foladi. A hegység létfontosságú hidrológiai jelentőséggel bír az ország számára, mivel itt ered Afganisztán több fontos folyója, köztük a Helmand, a Hari Rud és a Kabul folyó. Ezek a folyók az ország nagy részét ellátják vízzel a mezőgazdaság és az ivóvízellátás számára. A táj zord és kopár, magas csúcsokkal és mély völgyekkel. A régió a hazara nép otthona. A Koh-e Baba-hegység a Band-e-Amir Nemzeti Park vízgyűjtő területének is része, amely tavairól ismert. Ennek a hegységnek az ökoszisztémájának megőrzése rendkívül fontos Afganisztán vízbiztonsága szempontjából.",
    "ro": "Munții Koh-e Baba reprezintă extensia vestică a Hindu Kush și sunt situați în inima Afganistanului, în principal în provincia Bamiyan. Cel mai înalt vârf al său este Shah Foladi. Lanțul muntos are o importanță hidrologică crucială pentru țară, fiind locul de unde izvorăsc mai multe dintre cele mai importante râuri ale Afganistanului, inclusiv râurile Helmand, Hari Rud și Kabul. Aceste râuri furnizează apă pentru agricultură și consum în mari părți ale țării. Peisajul este aspru și arid, cu vârfuri înalte și văi adânci. Regiunea este locuită de poporul Hazara. Munții Koh-e Baba fac, de asemenea, parte din bazinul hidrografic al Parcului Național Band-e-Amir, renumit pentru lacurile sale. Conservarea ecosistemului acestui lanț muntos este de o importanță capitală pentru securitatea apei din Afganistan.",
    "en": "The Koh-e Baba mountain range is the western extension of the Hindu Kush, located in the heart of Afghanistan, primarily in Bamiyan province. Its highest peak is Shah Foladi. The range is of critical hydrological importance to the country, as it is the source of several of Afghanistan's major rivers, including the Helmand, Hari Rud, and Kabul rivers. These rivers provide water for agriculture and drinking to large parts of the nation. The landscape is rugged and stark, with high peaks and deep valleys. The region is the homeland of the Hazara people. The Koh-e Baba range also forms part of the watershed for the Band-e-Amir National Park, famous for its lakes. Conservation of this range's ecosystem is of utmost importance for Afghanistan's water security."
    },
    factsAdvanced: { multi4: ["Western extension of the Hindu Kush range", "Located in central Afghanistan, primarily Bamiyan Province", "Highest peak: Shah Foladi (5,143 m)", "Source of Afghanistan's major rivers: Helmand, Hari Rud, Kabul", "Considered the 'water tower' of Afghanistan", "Homeland of the Hazara ethnic group", "Characterized by a semi-arid, alpine climate", "Name translates to 'Grandfather Mountains'"] }}
];
