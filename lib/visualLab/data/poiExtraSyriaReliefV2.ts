import type { POI } from "./poi";

export const poiExtraSyriaReliefV2: POI[] = [
  {
    id: "syrian-desert-relief-v2",
    type: "desert",
    parent: "SY-DY",
    coords: [38.5, 33.5],
    name: { de: "Syrische Wüste", hu: "Szíriai-sivatag", ro: "Deșertul Sirian", en: "Syrian Desert" },
    description: { de: "Die Syrische Wüste ist eine weite, trockene Steppenlandschaft, die einen großen Teil der Landesfläche bedeckt und von Beduinen bewohnt wird.", hu: "A Szíriai-sivatag egy kiterjedt, száraz sztyeppevidék, amely az ország területének nagy részét lefedi, és beduinok lakják.", ro: "Deșertul Sirian este un peisaj vast de stepă aridă care acoperă o mare parte din suprafața țării și este locuit de beduini.", en: "The Syrian Desert is a vast, arid steppe landscape that covers a large part of the country's land area and is inhabited by Bedouins." },
    facts: {
      de: ["Deckt etwa 500.000 Quadratkilometer ab", "Erstreckt sich über mehrere Länder", "Traditionelle Heimat der Beduinen"],
      hu: ["Mintegy 500 000 négyzetkilométert fed le", "Több országon átível", "A beduinok hagyományos hazája"],
      ro: ["Acoperă aproximativ 500.000 de kilometri pătrați", "Se întinde pe mai multe țări", "Casa tradițională a beduinilor"],
      en: ["Covers about 500,000 square kilometers", "Extends across multiple countries", "Traditional home of the Bedouins"]
    }
  },
  {
    id: "al-jazira-plateau-relief-v2",
    type: "plateau",
    parent: "SY-HA",
    coords: [40.5, 36.5],
    name: { de: "Al-Dschasira-Ebene", hu: "Dzsazíra-fennsík", ro: "Platoul Al-Jazira", en: "Al-Jazira Plateau" },
    description: { de: "Die Al-Dschasira-Ebene im Nordosten Syriens ist eine wichtige landwirtschaftliche Region, die von den Flüssen Euphrat und Tigris geprägt wird.", hu: "Az északkelet-szíriai Dzsazíra-fennsík egy fontos mezőgazdasági régió, amelyet az Eufrátesz és a Tigris folyók határoznak meg.", ro: "Platoul Al-Jazira din nord-estul Siriei este o importantă regiune agricolă modelată de râurile Eufrat și Tigru.", en: "The Al-Jazira Plateau in northeastern Syria is an important agricultural region shaped by the Euphrates and Tigris rivers." },
    facts: {
      de: ["Gilt als Kornkammer Syriens", "Liegt zwischen Euphrat und Tigris", "Sehr fruchtbare Böden"],
      hu: ["Szíria éléskamrájának számít", "Az Eufrátesz és a Tigris között fekszik", "Rendkívül termékeny talaj"],
      ro: ["Considerată grânarul Siriei", "Situată între Eufrat și Tigru", "Soluri foarte fertile"],
      en: ["Considered the breadbasket of Syria", "Located between the Euphrates and Tigris", "Very fertile soils"]
    }
  },
  {
    id: "jabal-abd-al-aziz-relief-v2",
    type: "mountain",
    parent: "SY-HA",
    coords: [40.066667, 36.316667],
    name: { de: "Dschebel Abd al-Aziz", hu: "Dzsebel Abd al-Aziz", ro: "Jabal Abd al-Aziz", en: "Mount Abd al-Aziz" },
    description: { de: "Der Dschebel Abd al-Aziz ist ein markanter Gebirgszug in der Al-Hasakah-Region, der als Naturschutzgebiet dient und bedrohte Tierarten schützt.", hu: "A Dzsebel Abd al-Aziz egy kiemelkedő hegylánc az Al-Haszaka régióban, amely természetvédelmi területként működik és veszélyeztetett állatfajokat véd.", ro: "Jabal Abd al-Aziz este un lanț muntos proeminent în regiunea Al-Hasakah, care servește ca rezervație naturală și protejează speciile de animale pe cale de dispariție.", en: "Mount Abd al-Aziz is a prominent mountain range in the Al-Hasakah region, serving as a nature reserve and protecting endangered animal species." },
    facts: {
      de: ["Erreicht Höhen von bis zu 920 Metern", "Ausgewiesenes Naturschutzgebiet", "Wichtiger Lebensraum für Wildtiere"],
      hu: ["Akár 920 méteres magasságot is elér", "Kijelölt természetvédelmi terület", "Fontos élőhely a vadvilág számára"],
      ro: ["Atinge înălțimi de până la 920 de metri", "Rezervație naturală desemnată", "Habitat important pentru fauna sălbatică"],
      en: ["Reaches heights of up to 920 meters", "Designated nature reserve", "Important habitat for wildlife"]
    }
  },
  {
    id: "jabal-al-akra-relief-v2",
    type: "mountain",
    parent: "SY-LA",
    coords: [35.966667, 35.95],
    name: { de: "Dschebel al-Akra", hu: "Dzsebel al-Akra", ro: "Muntele Kel", en: "Mount Casius" },
    description: { de: "Der Dschebel al-Akra, auch bekannt als Berg Casius, ist ein steiler Kalksteinberg nahe der türkischen Grenze, der steil ins Mittelmeer abfällt.", hu: "A Dzsebel al-Akra, más néven Casius-hegy, egy meredek mészkőhegy a török határ közelében, amely meredeken zuhan a Földközi-tengerbe.", ro: "Jabal al-Akra, cunoscut și sub numele de Muntele Casius, este un munte abrupt de calcar, situat lângă granița turcă, care coboară abrupt în Marea Mediterană.", en: "Jabal al-Akra, also known as Mount Casius, is a steep limestone mountain near the Turkish border that drops sharply into the Mediterranean Sea." },
    facts: {
      de: ["Höhe von 1.709 Metern", "In der Antike als heiliger Berg verehrt", "Liegt direkt an der Küste"],
      hu: ["Magassága 1709 méter", "Az ókorban szent hegyként tisztelték", "Közvetlenül a tengerparton fekszik"],
      ro: ["Înălțime de 1.709 metri", "Venerat ca munte sfânt în antichitate", "Situat direct pe coastă"],
      en: ["Elevation of 1,709 meters", "Revered as a sacred mountain in antiquity", "Located directly on the coast"]
    }
  },
  {
    id: "al-ghab-plain-relief-v2",
    type: "valley",
    parent: "SY-HM",
    coords: [36.333333, 35.5],
    name: { de: "Al-Ghab-Ebene", hu: "Al-Gáb-síkság", ro: "Câmpia Al-Ghab", en: "Al-Ghab Plain" },
    description: { de: "Die Al-Ghab-Ebene ist ein fruchtbares Grabenbruch-Tal am Fluss Orontes, das in der Mitte des 20. Jahrhunderts entwässert wurde, um Ackerland zu gewinnen.", hu: "Az Al-Gáb-síkság egy termékeny hasadékvölgy az Orontész folyó mentén, amelyet a 20. század közepén csapoltak le termőföld nyerése céljából.", ro: "Câmpia Al-Ghab este o vale de rift fertilă pe râul Orontes, care a fost drenată la mijlocul secolului al XX-lea pentru a crea teren arabil.", en: "The Al-Ghab Plain is a fertile rift valley on the Orontes River that was drained in the mid-20th century to reclaim agricultural land." },
    facts: {
      de: ["Ursprünglich ein großes Sumpfgebiet", "Über 80 Kilometer lang", "Wichtig für die Landwirtschaft"],
      hu: ["Eredetileg egy nagy mocsárvidék volt", "Több mint 80 kilométer hosszú", "Fontos a mezőgazdaság számára"],
      ro: ["Inițial o zonă mare de mlaștină", "Peste 80 de kilometri lungime", "Importantă pentru agricultură"],
      en: ["Originally a large swamp area", "Over 80 kilometers long", "Important for agriculture"]
    }
  },
  {
    id: "kurd-dagh-relief-v2",
    type: "mountain",
    parent: "SY-HL",
    coords: [36.75, 36.666667],
    name: { de: "Kurd Dagh", hu: "Kurd-hegység", ro: "Munții Kurd", en: "Kurd Mountains" },
    description: { de: "Der Kurd Dagh ist ein bergiges Hochland im Nordwesten Syriens, das durch seine dichten Olivenhaine und reiche kulturelle Geschichte geprägt ist.", hu: "A Kurd-hegység egy hegyvidéki terület Északnyugat-Szíriában, amelyet sűrű olajfaligetek és gazdag kulturális történelem jellemez.", ro: "Munții Kurd sunt un ținut muntos în nord-vestul Siriei, caracterizat prin plantații dense de măslini și o bogată istorie culturală.", en: "Kurd Dagh is a mountainous highland in northwestern Syria, characterized by its dense olive groves and rich cultural history." },
    facts: {
      de: ["Bekannt für den Olivenanbau", "Teil des Taurusgebirges", "Heimat vieler antiker Ruinen"],
      hu: ["Az olajbogyó-termesztésről ismert", "A Torosz-hegység része", "Számos ókori rom otthona"],
      ro: ["Cunoscut pentru cultivarea măslinelor", "Parte a Munților Taurus", "Găzduiește multe ruine antice"],
      en: ["Known for olive cultivation", "Part of the Taurus Mountains", "Home to many ancient ruins"]
    }
  },
  {
    id: "jabal-samaan-relief-v2",
    type: "mountain",
    parent: "SY-HL",
    coords: [36.833333, 36.333333],
    name: { de: "Dschebel Samaan", hu: "Simeon-hegy", ro: "Muntele Simeon", en: "Mount Simeon" },
    description: { de: "Der Dschebel Samaan ist ein Kalksteinmassiv, das für die Ruinen des Simeonsklosters und die umliegenden berühmten Toten Städte bekannt ist.", hu: "A Simeon-hegy egy mészkőmasszívum, amely a Szent Simeon-kolostor romjairól és a környező híres Holt városokról ismert.", ro: "Muntele Simeon este un masiv de calcar cunoscut pentru ruinele Mănăstirii Sfântului Simeon și pentru faimoasele Orașe Moarte din jur.", en: "Mount Simeon is a limestone massif known for the ruins of the Church of Saint Simeon Stylites and the surrounding famous Dead Cities." },
    facts: {
      de: ["Höchster Punkt erreicht über 800 Meter", "Heimat byzantinischer Ruinenstätten", "Geologisch von Kalkstein geprägt"],
      hu: ["Legmagasabb pontja meghaladja a 800 métert", "Bizánci romok otthona", "Geológiailag a mészkő dominálja"],
      ro: ["Cel mai înalt punct depășește 800 de metri", "Găzduiește ruine bizantine", "Geologic dominat de calcar"],
      en: ["Highest point reaches over 800 meters", "Home to Byzantine ruins", "Geologically dominated by limestone"]
    }
  },
  {
    id: "hauran-plateau-relief-v2",
    type: "plateau",
    parent: "SY-DR",
    coords: [36.166667, 32.75],
    name: { de: "Hauran-Plateau", hu: "Haurán-fennsík", ro: "Platoul Hauran", en: "Hauran Plateau" },
    description: { de: "Das Hauran-Plateau im Süden Syriens ist eine vulkanische Hochebene, die für ihre fruchtbare rote Erde und historische Bedeutung bekannt ist.", hu: "A dél-szíriai Haurán-fennsík egy vulkanikus fennsík, amely termékeny vörös talajáról és történelmi jelentőségéről ismert.", ro: "Platoul Hauran din sudul Siriei este un platou vulcanic cunoscut pentru solul său roșu fertil și importanța istorică.", en: "The Hauran Plateau in southern Syria is a volcanic plateau known for its fertile red soil and historical significance." },
    facts: {
      de: ["Vulkanischen Ursprungs", "Ehemalige römische Provinz", "Reich an Basaltgestein"],
      hu: ["Vulkanikus eredetű", "Egykori római provincia", "Bazaltkőzetekben gazdag"],
      ro: ["De origine vulcanică", "Fostă provincie romană", "Bogat în rocă bazaltică"],
      en: ["Of volcanic origin", "Former Roman province", "Rich in basalt rock"]
    }
  },
  {
    id: "al-safa-relief-v2",
    type: "plateau",
    parent: "SY-SU",
    coords: [37.25, 33.083333],
    name: { de: "Al-Safa", hu: "Al-Szafa", ro: "Al-Safa", en: "Al-Safa" },
    description: { de: "Al-Safa ist ein zerklüftetes vulkanisches Lavafeld südöstlich von Damaskus, das durch seine schwarze, mondähnliche Landschaft besticht.", hu: "Az Al-Szafa egy zord, vulkanikus lávamező Damaszkusztól délkeletre, amely fekete, holdszerű tájával nyűgöz le.", ro: "Al-Safa este un câmp accidentat de lavă vulcanică, situat la sud-est de Damasc, care impresionează prin peisajul său negru, asemănător lunii.", en: "Al-Safa is a rugged volcanic lava field southeast of Damascus, striking for its black, moon-like landscape." },
    facts: {
      de: ["Gilt als unwegsames Gelände", "Besteht aus erstarrten Lavaströmen", "Wenig Vegetation vorhanden"],
      hu: ["Járhatatlan terepnek számít", "Megszilárdult lávafolyamokból áll", "Kevés növényzet található itt"],
      ro: ["Considerat teren accidentat", "Alcătuit din fluxuri de lavă solidificată", "Vegetație redusă"],
      en: ["Considered rugged terrain", "Consists of solidified lava flows", "Little vegetation present"]
    }
  },
  {
    id: "al-lajat-relief-v2",
    type: "plateau",
    parent: "SY-SU",
    coords: [36.333333, 32.916667],
    name: { de: "Al-Ladscha", hu: "Al-Ladzsa", ro: "Al-Lajat", en: "Al-Lajat" },
    description: { de: "Al-Ladscha, auch als Lejah bekannt, ist ein stark zerklüftetes Basaltplateau, das in der Antike als Zufluchtsort für Banditen und Rebellen diente.", hu: "Az Al-Ladzsa egy erősen tagolt bazaltfennsík, amely az ókorban banditák és lázadók menedékhelyéül szolgált.", ro: "Al-Lajat este un platou bazaltic extrem de accidentat care a servit ca refugiu pentru bandiți și rebeli în antichitate.", en: "Al-Lajat, also known as Lejah, is a highly rugged basalt plateau that served as a refuge for bandits and rebels in antiquity." },
    facts: {
      de: ["Schwer zugängliches Gebiet", "Historisch als Trachonitis bekannt", "Geologische Barriere im Süden"],
      hu: ["Nehezen megközelíthető terület", "Történelmileg Trachonitis néven ismert", "Geológiai akadály délen"],
      ro: ["Zonă greu accesibilă", "Cunoscută istoric ca Trachonitis", "Barieră geologică în sud"],
      en: ["Difficult to access area", "Historically known as Trachonitis", "Geological barrier in the south"]
    }
  },
  {
    id: "jabal-abu-rujmayn-relief-v2",
    type: "mountain",
    parent: "SY-HO",
    coords: [38.5, 35.0],
    name: { de: "Dschebel Abu Rudschmain", hu: "Dzsebel Abu Ruzsmajn", ro: "Jabal Abu Rujmayn", en: "Jabal Abu Rujmayn" },
    description: { de: "Der Dschebel Abu Rudschmain ist eine langgestreckte Bergkette inmitten der syrischen Wüste, die wichtige archäologische Stätten birgt.", hu: "A Dzsebel Abu Ruzsmajn egy hosszan elnyúló hegylánc a Szíriai-sivatag közepén, amely fontos régészeti lelőhelyeket rejt.", ro: "Jabal Abu Rujmayn este un lanț muntos alungit în mijlocul Deșertului Sirian, care ascunde situri arheologice importante.", en: "Jabal Abu Rujmayn is an elongated mountain range in the middle of the Syrian Desert, harboring important archaeological sites." },
    facts: {
      de: ["Nördlich von Palmyra gelegen", "Wüstengebirge", "Erreicht Höhen um 1.100 Meter"],
      hu: ["Palmyrától északra található", "Sivatagi hegység", "Körülbelül 1100 méteres magasságot ér el"],
      ro: ["Situat la nord de Palmyra", "Munte de deșert", "Atinge înălțimi de aproximativ 1.100 de metri"],
      en: ["Located north of Palmyra", "Desert mountain range", "Reaches heights around 1,100 meters"]
    }
  },
  {
    id: "jabal-al-bilas-relief-v2",
    type: "mountain",
    parent: "SY-HM",
    coords: [37.5, 34.916667],
    name: { de: "Dschebel al-Balaas", hu: "Dzsebel al-Balász", ro: "Jabal al-Bilas", en: "Jabal al-Bilas" },
    description: { de: "Der Dschebel al-Balaas ist ein trockenes Bergland im zentralen Syrien, das von nomadischen Stämmen für die Weidewirtschaft genutzt wird.", hu: "A Dzsebel al-Balász egy száraz hegyvidék Közép-Szíriában, amelyet a nomád törzsek legeltetésre használnak.", ro: "Jabal al-Bilas este un ținut muntos arid în centrul Siriei, folosit de triburile nomade pentru pășunat.", en: "Jabal al-Bilas is an arid mountainous region in central Syria, used by nomadic tribes for grazing." },
    facts: {
      de: ["Zentral in Syrien gelegen", "Klima ist arid bis semi-arid", "Wichtiges Weideland"],
      hu: ["Szíria központjában található", "Éghajlata száraz vagy félszáraz", "Fontos legelőterület"],
      ro: ["Situat în centrul Siriei", "Clima este aridă până la semi-aridă", "Pășune importantă"],
      en: ["Located centrally in Syria", "Climate is arid to semi-arid", "Important grazing land"]
    }
  },
  {
    id: "rouj-valley-relief-v2",
    type: "valley",
    parent: "SY-ID",
    coords: [36.416667, 35.916667],
    name: { de: "Roudsch-Ebene", hu: "Rúdzs-síkság", ro: "Câmpia Rouj", en: "Rouj Basin" },
    description: { de: "Die Roudsch-Ebene ist eine fruchtbare geologische Senke in der Provinz Idlib, die intensiv landwirtschaftlich genutzt wird.", hu: "A Rúdzs-síkság egy termékeny geológiai medence Idlib tartományban, amelyet intenzíven mezőgazdasági célokra használnak.", ro: "Câmpia Rouj este o depresiune geologică fertilă în provincia Idlib, care este utilizată intens în scopuri agricole.", en: "The Rouj Basin is a fertile geological depression in the Idlib province that is intensively used for agriculture." },
    facts: {
      de: ["Westlich der Stadt Idlib", "Sehr fruchtbare Böden", "Dicht besiedeltes Agrargebiet"],
      hu: ["Idlib városától nyugatra található", "Nagyon termékeny talaj", "Sűrűn lakott mezőgazdasági terület"],
      ro: ["La vest de orașul Idlib", "Soluri foarte fertile", "Zonă agricolă dens populată"],
      en: ["West of the city of Idlib", "Very fertile soils", "Densely populated agricultural area"]
    }
  },
  {
    id: "qalamoun-mountains-relief-v2",
    type: "mountain",
    parent: "SY-RD",
    coords: [36.666667, 33.916667],
    name: { de: "Qalamun-Berge", hu: "Kalamún-hegység", ro: "Munții Qalamoun", en: "Qalamoun Mountains" },
    description: { de: "Die Qalamun-Berge sind der nordöstliche Ausläufer des Anti-Libanon-Gebirges und eine strategisch wichtige Gebirgsregion in Syrien.", hu: "A Kalamún-hegység az Antilibanon-hegység északkeleti nyúlványa, és stratégiailag fontos hegyvidéki régió Szíriában.", ro: "Munții Qalamoun reprezintă prelungirea nord-estică a lanțului muntos Anti-Liban și o regiune muntoasă de importanță strategică în Siria.", en: "The Qalamoun Mountains are the northeastern extension of the Anti-Lebanon mountain range and a strategically important mountainous region in Syria." },
    facts: {
      de: ["Höchste Erhebung über 2.000 Meter", "Verbindet Damaskus mit Zentralsyrien", "Raue winterliche Bedingungen"],
      hu: ["Legmagasabb pontja meghaladja a 2000 métert", "Damaszkuszt köti össze Közép-Szíriával", "Zord téli körülmények"],
      ro: ["Cea mai înaltă altitudine depășește 2.000 de metri", "Leagă Damascul de centrul Siriei", "Condiții de iarnă aspre"],
      en: ["Highest elevation over 2,000 meters", "Connects Damascus with central Syria", "Harsh winter conditions"]
    }
  },
  {
    id: "syrian-coast-relief-v2",
    type: "coast",
    parent: "SY-LA",
    coords: [35.916667, 35.5],
    name: { de: "Syrische Mittelmeerküste", hu: "Szíriai-tengerpart", ro: "Coasta Siriană", en: "Syrian Coast" },
    description: { de: "Die syrische Mittelmeerküste ist ein schmaler, fruchtbarer Streifen, der durch ein mildes Klima und reiche Landwirtschaft geprägt ist.", hu: "A szíriai Földközi-tenger partvidéke egy keskeny, termékeny sáv, amelyet enyhe éghajlat és gazdag mezőgazdaság jellemez.", ro: "Coasta mediteraneană siriană este o fâșie îngustă și fertilă, caracterizată de un climat blând și o agricultură bogată.", en: "The Syrian Mediterranean coast is a narrow, fertile strip characterized by a mild climate and rich agriculture." },
    facts: {
      de: ["Etwa 180 Kilometer lang", "Mildes mediterranes Klima", "Zentrum des syrischen Tourismus"],
      hu: ["Körülbelül 180 kilométer hosszú", "Enyhe mediterrán éghajlat", "A szíriai turizmus központja"],
      ro: ["Aproximativ 180 de kilometri lungime", "Climă mediteraneană blândă", "Centrul turismului sirian"],
      en: ["About 180 kilometers long", "Mild Mediterranean climate", "Center of Syrian tourism"]
    }
  },
  {
    id: "jabal-al-nabi-yunis-relief-v2",
    type: "mountain",
    parent: "SY-LA",
    coords: [36.216667, 35.583333],
    name: { de: "Dschebel al-Nabi Yunis", hu: "Dzsebel an-Nabi Júnisz", ro: "Jabal al-Nabi Yunis", en: "Mount Nabi Yunis" },
    description: { de: "Der Dschebel al-Nabi Yunis ist mit über 1.500 Metern der höchste Gipfel der syrischen Küstengebirgskette und bietet weite Ausblicke.", hu: "A több mint 1500 méter magas Dzsebel an-Nabi Júnisz a szíriai partvidéki hegylánc legmagasabb csúcsa, amely széles kilátást nyújt.", ro: "La peste 1.500 de metri, Jabal al-Nabi Yunis este cel mai înalt vârf din lanțul muntos de coastă sirian și oferă vederi panoramice.", en: "At over 1,500 meters, Mount Nabi Yunis is the highest peak of the Syrian coastal mountain range and offers sweeping views." },
    facts: {
      de: ["Höchster Punkt der Ansarija-Berge", "Höhe von 1.562 Metern", "Oft im Winter schneebedeckt"],
      hu: ["Az Ansarija-hegység legmagasabb pontja", "Magassága 1562 méter", "Télen gyakran hó borítja"],
      ro: ["Cel mai înalt punct din Munții Ansariyah", "Înălțime de 1.562 de metri", "Adesea acoperit de zăpadă iarna"],
      en: ["Highest point of the Ansariyah Mountains", "Elevation of 1,562 meters", "Often snow-capped in winter"]
    }
  },
  {
    id: "orontes-valley-relief-v2",
    type: "valley",
    parent: "SY-HM",
    coords: [36.666667, 34.916667],
    name: { de: "Orontes-Tal", hu: "Orontész-völgy", ro: "Valea Orontes", en: "Orontes Valley" },
    description: { de: "Das Orontes-Tal durchschneidet den Westen Syriens und bildet seit Jahrtausenden eine wichtige landwirtschaftliche und kulturelle Lebensader.", hu: "Az Orontész-völgy átszeli Nyugat-Szíriát, és évezredek óta fontos mezőgazdasági és kulturális ütőérként szolgál.", ro: "Valea Orontes străbate vestul Siriei și de milenii formează o linie de viață agricolă și culturală esențială.", en: "The Orontes Valley cuts through western Syria and has formed an essential agricultural and cultural lifeline for millennia." },
    facts: {
      de: ["Wichtiges Bewässerungsgebiet", "Reichtum an archäologischen Stätten", "Prägt Städte wie Homs und Hama"],
      hu: ["Fontos öntözési terület", "Régészeti lelőhelyekben gazdag", "Olyan városokat határoz meg, mint Homsz és Hamá"],
      ro: ["Zonă importantă de irigare", "Bogată în situri arheologice", "Definește orașe precum Homs și Hama"],
      en: ["Important irrigation area", "Rich in archaeological sites", "Defines cities like Homs and Hama"]
    }
  },
  {
    id: "wadi-barada-relief-v2",
    type: "valley",
    parent: "SY-RD",
    coords: [36.1, 33.616667],
    name: { de: "Wadi Barada", hu: "Vádi Barada", ro: "Wadi Barada", en: "Wadi Barada" },
    description: { de: "Das Wadi Barada ist ein malerisches Gebirgstal, durch das der Fluss Barada fließt, um die Hauptstadt Damaskus mit Wasser zu versorgen.", hu: "A Vádi Barada egy festői hegyi völgy, amelyen a Barada folyó folyik keresztül, hogy ellássa vízzel a fővárost, Damaszkuszt.", ro: "Wadi Barada este o vale montană pitorească prin care curge râul Barada pentru a furniza apă capitalei Damasc.", en: "Wadi Barada is a picturesque mountain valley through which the Barada River flows to supply water to the capital, Damascus." },
    facts: {
      de: ["Wichtigste Wasserquelle für Damaskus", "Liegt im Anti-Libanon-Gebirge", "Von steilen Klippen umgeben"],
      hu: ["Damaszkusz legfontosabb vízforrása", "Az Antilibanon-hegységben található", "Meredek sziklák veszik körül"],
      ro: ["Cea mai importantă sursă de apă pentru Damasc", "Situat în Munții Anti-Liban", "Înconjurat de stânci abrupte"],
      en: ["Most important water source for Damascus", "Located in the Anti-Lebanon Mountains", "Surrounded by steep cliffs"]
    }
  },
  {
    id: "jabal-al-shumariyah-relief-v2",
    type: "mountain",
    parent: "SY-HO",
    coords: [37.333333, 34.75],
    name: { de: "Dschebel al-Schumarija", hu: "Dzsebel as-Sumarijja", ro: "Jabal al-Shumariyah", en: "Jabal al-Shumariyah" },
    description: { de: "Der Dschebel al-Schumarija ist ein Gebirgszug im Gouvernement Homs, der den Übergang von fruchtbaren Ebenen zur Wüste markiert.", hu: "A Dzsebel as-Sumarijja egy hegylánc Homsz tartományban, amely a termékeny síkságok és a sivatag közötti átmenetet jelöli.", ro: "Jabal al-Shumariyah este un lanț muntos în guvernoratul Homs care marchează tranziția de la câmpiile fertile la deșert.", en: "Jabal al-Shumariyah is a mountain range in the Homs Governorate that marks the transition from fertile plains to the desert." },
    facts: {
      de: ["Östlich von Homs gelegen", "Trockenes Klima", "Dünn besiedelte Region"],
      hu: ["Homsztól keletre található", "Száraz éghajlat", "Ritkán lakott régió"],
      ro: ["Situat la est de Homs", "Climă aridă", "Regiune slab populată"],
      en: ["Located east of Homs", "Arid climate", "Sparsely populated region"]
    }
  },
  {
    id: "jabal-al-shaar-relief-v2",
    type: "mountain",
    parent: "SY-HO",
    coords: [37.833333, 35.166667],
    name: { de: "Dschebel al-Schaar", hu: "Dzsebel as-Saar", ro: "Jabal al-Shaar", en: "Jabal al-Shaar" },
    description: { de: "Der Dschebel al-Schaar ist eine bergige Region im zentralsyrischen Wüstengebiet, die für ihre Erdgas- und Ölvorkommen bekannt ist.", hu: "A Dzsebel as-Saar egy hegyvidéki terület Közép-Szíria sivatagi régiójában, amely földgáz- és olajlelőhelyeiről ismert.", ro: "Jabal al-Shaar este o regiune muntoasă în zona deșertică din centrul Siriei, cunoscută pentru rezervele sale de gaze naturale și petrol.", en: "Jabal al-Shaar is a mountainous region in the central Syrian desert area, known for its natural gas and oil reserves." },
    facts: {
      de: ["Wichtige Gasfelder", "Strategische Bedeutung", "Raue Wüstenumgebung"],
      hu: ["Fontos gázmezők", "Stratégiai jelentőség", "Zord sivatagi környezet"],
      ro: ["Zăcăminte importante de gaze", "Importanță strategică", "Mediu deșertic aspru"],
      en: ["Important gas fields", "Strategic importance", "Harsh desert environment"]
    }
  }
];
