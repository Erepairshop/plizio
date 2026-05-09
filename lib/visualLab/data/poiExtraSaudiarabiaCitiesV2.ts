import type { POI } from "./poi";

export const poiExtraSaudiarabiaCitiesV2: POI[] = [
  {
    id: "riyadh-cities-v2",
    type: "state-capital",
    parent: "SA-01",
    coords: [46.7167, 24.6333],
    name: { de: "Riad", hu: "Rijád", ro: "Riad", en: "Riyadh" },
    description: {
      de: "Die weitläufige Hauptstadt Saudi-Arabiens ist das politische und finanzielle Zentrum der Arabischen Halbinsel.",
      hu: "Szaúd-Arábia kiterjedt sivatagi fővárosa az Arab-félsziget politikai és pénzügyi központja.",
      ro: "Capitala vastă a Arabiei Saudite este centrul politic și financiar al Peninsulei Arabice.",
      en: "The sprawling capital of Saudi Arabia is the political and financial center of the Arabian Peninsula."
    },
    facts: {
      de: [
        "Riad bedeutet übersetzt \"Die Gärten\".",
        "Das historische Masmak-Fort markiert die Staatsgründung."
      ],
      hu: [
        "Rijád neve magyarul azt jelenti: \"A kertek\".",
        "A történelmi Maszmak-erőd az államalapítás jelképe."
      ],
      ro: [
        "Numele Riad se traduce prin \"Grădinile\".",
        "Fortul istoric Masmak marchează fondarea statului."
      ],
      en: [
        "Riyadh translates to \"The Gardens\".",
        "The historic Masmak Fort marks the founding of the state."
      ]
    },
    descriptionAdvanced: {
      de: "Riad ist die Hauptstadt des Königreichs Saudi-Arabien und mit über 7,6 Millionen Einwohnern (2022) die größte Stadt der Arabischen Halbinsel. Die Stadt liegt auf dem zentralen Najd-Plateau auf rund 600 Metern Höhe. 1744 schloss Muhammad ibn Saud im benachbarten Diriyya das Bündnis mit dem Religionsgelehrten Muhammad ibn Abd al-Wahhab, das den Grundstein des saudischen Staates legte. Am 14. Januar 1902 eroberte der spätere König Abd al-Aziz ibn Saud die Festung al-Masmak in Riad zurück, was als Beginn der Staatsgründung gilt. Mit der Proklamation des Königreichs Saudi-Arabien am 23. September 1932 wurde Riad offizielle Hauptstadt. Heute beherbergt die Stadt das 302 Meter hohe Kingdom Centre und das Königliche Diplomatenviertel."
    },
    factsAdvanced: {
      de: ["Hauptstadt seit der Proklamation des Königreichs am 23. September 1932", "Über 7,6 Millionen Einwohner im Großraum (2022)", "Auf dem Najd-Plateau auf rund 600 Metern Höhe", "Rückeroberung der Masmak-Festung am 14. Januar 1902 durch Ibn Saud", "Saudisch-wahhabitisches Bündnis 1744 in Diriyya geschlossen", "Kingdom Centre 302 Meter hoch, eröffnet 2002", "Diriyya (UNESCO-Welterbe seit 2010) liegt im Stadtgebiet", "Megaprojekt New Murabba mit 400-Meter-Würfel angekündigt"]
    }
  },
  {
    id: "jeddah-cities-v2",
    type: "city",
    parent: "SA-02",
    coords: [39.1979, 21.5433],
    name: { de: "Dschidda", hu: "Dzsidda", ro: "Jeddah", en: "Jeddah" },
    description: {
      de: "Eine moderne Hafenstadt am Roten Meer, die traditionell als Tor für Pilger auf dem Weg nach Mekka dient.",
      hu: "Modern kikötőváros a Vörös-tenger partján, amely hagyományosan a Mekkába tartó zarándokok kapuja.",
      ro: "Un oraș-port modern la Marea Roșie, care servește tradițional drept poartă pentru pelerinii spre Mecca.",
      en: "A modern port city on the Red Sea that traditionally serves as the gateway for pilgrims traveling to Mecca."
    },
    facts: {
      de: [
        "Die Stadt beherbergt den berühmten King Fahd Fountain.",
        "Die historische Altstadt Al-Balad ist UNESCO-Weltkulturerbe."
      ],
      hu: [
        "A városban található a híres Fahd király szökőkút.",
        "Történelmi óvárosa, Al-Balad az UNESCO Világörökség része."
      ],
      ro: [
        "Orașul găzduiește faimoasa Fântână a Regelui Fahd.",
        "Centrul istoric Al-Balad este inclus în patrimoniul UNESCO."
      ],
      en: [
        "The city is home to the famous King Fahd Fountain.",
        "Its historic district Al-Balad is a UNESCO World Heritage site."
      ]
    },
    descriptionAdvanced: {
      de: "Dschidda liegt am Roten Meer und ist mit rund 4,7 Millionen Einwohnern die zweitgrößte Stadt Saudi-Arabiens sowie wichtigster Hafen des Königreichs. Die Stadt wurde laut Überlieferung 647 n. Chr. unter Kalif Uthman ibn Affan zum offiziellen Hafen für Pilger nach Mekka bestimmt, das nur rund 80 Kilometer entfernt liegt. Bis zur Eröffnung des Flughafens King Abdulaziz im Jahr 1981 erreichten praktisch alle Hadsch-Pilger das Land über Dschidda. Die historische Altstadt al-Balad mit ihren mehrstöckigen Korallenstein-Häusern und vorspringenden Holz-Erkern (Roshan) wurde 2014 zum UNESCO-Weltkulturerbe erklärt. Vor der Staatsgründung 1932 war Dschidda Hauptstadt des Königreichs Hedschas. Der 312 Meter hohe King Fahd Springbrunnen sprüht Wasser bis 260 Meter hoch."
    },
    factsAdvanced: {
      de: ["Rund 4,7 Millionen Einwohner, zweitgrößte Stadt des Königreichs", "Offizieller Pilgerhafen seit 647 n. Chr. unter Kalif Uthman", "Etwa 80 Kilometer westlich von Mekka", "Altstadt al-Balad seit 2014 UNESCO-Weltkulturerbe", "King Fahd Fountain mit Wasserstrahl bis 260 Meter Höhe", "Flughafen King Abdulaziz seit 1981 in Betrieb", "Bis 1925 Hauptstadt des Königreichs Hedschas", "Jeddah Tower (geplant über 1.000 Meter) im Bau seit 2013"]
    }
  },
  {
    id: "mecca-cities-v2",
    type: "state-capital",
    parent: "SA-02",
    coords: [39.8261, 21.4225],
    name: { de: "Mekka", hu: "Mekka", ro: "Mecca", en: "Mecca" },
    description: {
      de: "Die heiligste Stadt des Islams, Geburtsort des Propheten Mohammed und Ziel der jährlichen Hadsch-Pilgerfahrt.",
      hu: "Az iszlám legszentebb városa, Mohamed próféta szülőhelye és az éves haddzs zarándoklat célpontja.",
      ro: "Cel mai sfânt oraș al islamului, locul de naștere al profetului Mahomed și destinația pelerinajului anual Hajj.",
      en: "The holiest city in Islam, birthplace of the Prophet Muhammad, and the destination of the annual Hajj pilgrimage."
    },
    facts: {
      de: [
        "Die Kaaba befindet sich im Zentrum der Großen Moschee.",
        "Nicht-Muslime dürfen die Stadt traditionell nicht betreten."
      ],
      hu: [
        "A Kába-szentély a Nagy Mecset közepén található.",
        "Nem muszlimok hagyományosan nem léphetnek be a városba."
      ],
      ro: [
        "Kaaba este situată în centrul Marii Moschei.",
        "Non-musulmanilor le este interzis accesul în oraș."
      ],
      en: [
        "The Kaaba is located in the center of the Great Mosque.",
        "Non-Muslims are traditionally prohibited from entering the city."
      ]
    },
    descriptionAdvanced: {
      de: "Mekka in der westsaudischen Hedschas-Region ist die heiligste Stadt des Islams und Geburtsort des Propheten Mohammed im Jahr 570 n. Chr. Die Stadt zählt rund 2 Millionen Einwohner, schwillt aber zur jährlichen Pilgerfahrt Hadsch im Monat Dhu l-Hiddscha auf 3 bis 4 Millionen Besucher an. Im Zentrum der Heiligen Moschee al-Masdschid al-Haram steht die etwa 15 Meter hohe würfelförmige Kaaba, die nach islamischer Überlieferung von Abraham und Ismail errichtet wurde. Mit der Eroberung Mekkas durch Mohammed im Jahr 630 n. Chr. wurde sie zum geistlichen Zentrum des Islams. Das Königreich Saudi-Arabien (gegründet 1932) trägt im offiziellen Königstitel den Beinamen Hüter der zwei heiligen Stätten. Der 601 Meter hohe Königliche Uhrenturm Abradsch al-Bait überragt seit 2012 die Heilige Moschee."
    },
    factsAdvanced: {
      de: ["Geburtsstadt des Propheten Mohammed im Jahr 570 n. Chr.", "Eroberung Mekkas durch Mohammed im Jahr 630 n. Chr.", "Rund 2 Millionen Einwohner, bis 4 Millionen während der Hadsch", "Kaaba im Zentrum der Heiligen Moschee al-Masdschid al-Haram", "Hadsch-Pilgerfahrt jährlich im Monat Dhu l-Hiddscha", "Königlicher Uhrenturm Abradsch al-Bait seit 2012, 601 Meter hoch", "Königstitel seit 1986: Hüter der zwei heiligen Stätten", "Zutritt für Nicht-Muslime traditionell verboten"]
    }
  },
  {
    id: "medina-cities-v2",
    type: "state-capital",
    parent: "SA-03",
    coords: [39.6122, 24.4686],
    name: { de: "Medina", hu: "Medina", ro: "Medina", en: "Medina" },
    description: {
      de: "Die zweitheiligste Stadt des Islams beherbergt die Prophetenmoschee und ist ein zentraler spiritueller Ort.",
      hu: "Az iszlám második legszentebb városa, amely a Próféta mecsetjének ad otthont és fontos spirituális központ.",
      ro: "Al doilea cel mai sfânt oraș al islamului adăpostește Moscheea Profetului și este un loc spiritual central.",
      en: "The second holiest city in Islam is home to the Prophet's Mosque and serves as a central spiritual site."
    },
    facts: {
      de: [
        "Hier befindet sich das Grab des Propheten Mohammed.",
        "Die Stadt wurde früher Yathrib genannt."
      ],
      hu: [
        "Itt található Mohamed próféta sírja.",
        "A várost korábban Jaszribnak hívták."
      ],
      ro: [
        "Aici se află mormântul profetului Mahomed.",
        "Orașul a fost numit anterior Yathrib."
      ],
      en: [
        "The tomb of the Prophet Muhammad is located here.",
        "The city was formerly known as Yathrib."
      ]
    },
    descriptionAdvanced: {
      de: "Medina (al-Madina al-Munawwara, die erleuchtete Stadt) ist nach Mekka die zweitheiligste Stadt des Islams und liegt rund 340 Kilometer nördlich davon in der Provinz Medina. Die Stadt zählt etwa 1,5 Millionen Einwohner. Vor der Hidschra Mohammeds im Jahr 622 n. Chr. trug sie den Namen Yathrib. Die Hidschra (Auswanderung Mohammeds und seiner Anhänger von Mekka nach Medina) markiert den Beginn der islamischen Zeitrechnung. Im Zentrum steht die Prophetenmoschee al-Masdschid an-Nabawi, die Mohammed selbst nach seiner Ankunft errichtete und in der er 632 n. Chr. begraben wurde. Unter osmanischer Herrschaft (1517–1916) wurde die Moschee mehrfach erweitert. Mit der Eingliederung in das Königreich Saudi-Arabien 1932 unterstand Medina dem Hause Saud."
    },
    factsAdvanced: {
      de: ["Etwa 1,5 Millionen Einwohner", "Rund 340 Kilometer nördlich von Mekka", "Hidschra Mohammeds nach Yathrib im Jahr 622 n. Chr.", "Beginn der islamischen Zeitrechnung mit der Hidschra", "Grab des Propheten Mohammed in der Prophetenmoschee seit 632", "Osmanische Herrschaft von 1517 bis 1916", "Eingliederung in Saudi-Arabien 1932", "Zutritt zum Stadtzentrum nur für Muslime"]
    }
  },
  {
    id: "dammam-cities-v2",
    type: "state-capital",
    parent: "SA-04",
    coords: [50.1033, 26.4333],
    name: { de: "Dammam", hu: "Dammám", ro: "Dammam", en: "Dammam" },
    description: {
      de: "Die Metropole an der Ostküste ist ein wichtiges Verwaltungszentrum und reich an Erdölindustrieanlagen.",
      hu: "A keleti partvidék metropolisa fontos közigazgatási központ, amely gazdag kőolajipari létesítményekben.",
      ro: "Metropola de pe coasta de est este un centru administrativ major, bogat în facilități petroliere.",
      en: "The metropolis on the east coast is a major administrative center rich in petroleum industry facilities."
    },
    facts: {
      de: [
        "Die Stadt verfügt über den größten Hafen im Persischen Golf.",
        "King Fahd Park ist einer der größten Parks des Landes."
      ],
      hu: [
        "A város rendelkezik a Perzsa-öböl legnagyobb kikötőjével.",
        "A Fahd Király Park az ország egyik legnagyobb parkja."
      ],
      ro: [
        "Orașul are cel mai mare port din Golful Persic.",
        "Parcul Regele Fahd este unul dintre cele mai mari din țară."
      ],
      en: [
        "The city features the largest port in the Persian Gulf.",
        "King Fahd Park is one of the largest parks in the country."
      ]
    },
    descriptionAdvanced: {
      de: "Dammam ist Hauptstadt der Ostprovinz (asch-Scharqiyya) und mit rund 1,5 Millionen Einwohnern (Großraum 4,5 Millionen) das Verwaltungszentrum der saudischen Erdölregion am Persischen Golf. Die Stadt verdankt ihren Aufstieg dem ersten kommerziellen Ölfund der Arabischen Halbinsel: Am 4. März 1938 stieß die Bohrung Dammam Nr. 7 in 1.441 Metern Tiefe auf Öl, was den Beginn der saudischen Erdölindustrie markierte. Das Konzessionsabkommen mit der Standard Oil of California war 1933 unter König Abd al-Aziz ibn Saud unterzeichnet worden. Aus der Konzession entstand die Aramco, heute Saudi Aramco mit Sitz im benachbarten Dhahran. Der König-Abdulaziz-Hafen, eröffnet 1949, ist der größte Hafen am Persischen Golf. Die Stadt bildet mit Dhahran und al-Khobar einen zusammenhängenden Ballungsraum."
    },
    factsAdvanced: {
      de: ["Hauptstadt der Ostprovinz mit rund 1,5 Millionen Einwohnern", "Erstes kommerzielles Erdöl in Saudi-Arabien am 4. März 1938 in Dammam Nr. 7", "Aramco-Konzession 1933 mit Standard Oil of California", "König-Abdulaziz-Hafen seit 1949 größter Hafen am Persischen Golf", "Bohrung Dammam Nr. 7 in 1.441 Metern Tiefe fündig", "Ballungsraum mit Dhahran und al-Khobar (rund 4,5 Mio. Einwohner)", "Zentrum der saudischen Erdölverwaltung", "King Fahd International Airport seit 1999"]
    }
  },
  {
    id: "taif-cities-v2",
    type: "city",
    parent: "SA-02",
    coords: [40.4167, 21.2667],
    name: { de: "Ta'if", hu: "Taif", ro: "Taif", en: "Ta'if" },
    description: {
      de: "Eine Bergstadt in der Provinz Mekka, bekannt für ihr kühleres Klima und die Produktion von Rosenwasser.",
      hu: "Mekka tartományának hegyi városa, amely hűvösebb éghajlatáról és rózsavíz-termeléséről híres.",
      ro: "Un oraș montan din provincia Mecca, cunoscut pentru climatul său mai răcoros și producția de apă de trandafiri.",
      en: "A mountain city in the Mecca Province known for its cooler climate and the production of rose water."
    },
    facts: {
      de: [
        "Die Stadt liegt auf einer Höhe von über 1.800 Metern.",
        "Sie gilt als inoffizielle Sommerhauptstadt des Landes."
      ],
      hu: [
        "A város több mint 1800 méteres magasságban fekszik.",
        "Az ország nem hivatalos nyári fővárosának tartják."
      ],
      ro: [
        "Orașul este situat la o altitudine de peste 1.800 de metri.",
        "Este considerat capitala neoficială de vară a țării."
      ],
      en: [
        "The city is located at an altitude of over 1,800 meters.",
        "It is considered the unofficial summer capital of the country."
      ]
    },
    descriptionAdvanced: {
      de: "Ta'if liegt im Asir-Gebirge auf rund 1.870 Metern Höhe in der Provinz Mekka, etwa 80 Kilometer südöstlich der heiligen Stadt, und zählt rund 1 Million Einwohner. Wegen der angenehmen Sommertemperaturen dient Ta'if traditionell als Sommerresidenz der saudischen Königsfamilie und gilt als inoffizielle Sommerhauptstadt des Königreichs. Bereits in vorislamischer Zeit war Ta'if ein wichtiger Handelsplatz und Wallfahrtsort der arabischen Stämme. Im Jahr 630 n. Chr. unterwarf sich die Stadt Mohammed nach kurzer Belagerung. 1924 eroberte Ibn Saud Ta'if im Vorfeld der Eingliederung des Hedschas in sein Reich. Im Mai 1934 wurde hier der Vertrag von Ta'if zwischen Saudi-Arabien und Jemen unterzeichnet. Berühmt ist die Region für die Damaszener-Rosen und die Herstellung von Rosenwasser."
    },
    factsAdvanced: {
      de: ["Auf rund 1.870 Metern Höhe im Asir-Gebirge", "Rund 1 Million Einwohner", "Inoffizielle Sommerhauptstadt der Königsfamilie", "80 Kilometer südöstlich von Mekka", "Vertrag von Ta'if mit Jemen im Mai 1934", "Eroberung durch Ibn Saud 1924", "Berühmt für Damaszener-Rosen und Rosenwasser", "Friedensabkommen für den Libanon 1989 ebenfalls hier unterzeichnet"]
    }
  },
  {
    id: "tabuk-cities-v2",
    type: "state-capital",
    parent: "SA-07",
    coords: [36.5715, 28.3833],
    name: { de: "Tabuk", hu: "Tabúk", ro: "Tabuk", en: "Tabuk" },
    description: {
      de: "Die Provinzhauptstadt im Nordwesten des Landes nahe der jordanischen Grenze ist von historischen Stätten umgeben.",
      hu: "Az ország északnyugati részén, a jordán határ közelében fekvő tartományi fővárost történelmi helyszínek övezik.",
      ro: "Capitala provinciei din nord-vestul țării, lângă granița cu Iordania, este înconjurată de situri istorice.",
      en: "The provincial capital in the northwest of the country, near the Jordanian border, is surrounded by historical sites."
    },
    facts: {
      de: [
        "Die Region verzeichnet im Winter gelegentlich Schneefall.",
        "Die Tabuk-Festung stammt aus der osmanischen Zeit."
      ],
      hu: [
        "A régióban télen időnként havazás is előfordul.",
        "A tabúki erőd az oszmán korszakból származik."
      ],
      ro: [
        "Regiunea înregistrează ocazional ninsori iarna.",
        "Fortăreața Tabuk datează din perioada otomană."
      ],
      en: [
        "The region occasionally experiences snowfall in winter.",
        "The Tabuk Castle dates back to the Ottoman era."
      ]
    },
    descriptionAdvanced: {
      de: "Tabuk ist Hauptstadt der gleichnamigen Provinz im Nordwesten Saudi-Arabiens nahe der jordanischen Grenze und zählt rund 670.000 Einwohner. Die Stadt liegt auf einem Plateau auf rund 770 Metern Höhe und gehört zu den kühlsten Regionen des Königreichs mit gelegentlichem Schneefall im Winter. Bereits im Jahr 630 n. Chr. zog Mohammed mit einem Heer nach Tabuk, um die byzantinische Bedrohung abzuwehren; die Tabuk-Expedition (Ghazwat Tabuk) gilt als sein letzter großer Feldzug. Die Tabuk-Festung im Stadtzentrum wurde 1559 unter Sultan Süleyman I. errichtet und diente als Stützpunkt der Hedschas-Bahn (Eröffnung 1908), die Damaskus über Tabuk mit Medina verband. Die Provinz beherbergt das saudische Megaprojekt NEOM, das ab 2017 angekündigte 500 Milliarden Dollar teure Smart-City-Vorhaben am Roten Meer."
    },
    factsAdvanced: {
      de: ["Hauptstadt der Provinz Tabuk mit rund 670.000 Einwohnern", "Auf einem Plateau auf rund 770 Metern Höhe", "Tabuk-Expedition Mohammeds im Jahr 630 n. Chr.", "Tabuk-Festung 1559 unter Sultan Süleyman I. errichtet", "Hedschas-Bahn seit 1908 mit Bahnhof in Tabuk", "Gelegentlicher Schneefall im Winter", "NEOM-Megaprojekt seit 2017 in der Provinz angekündigt", "500 Milliarden US-Dollar geplantes NEOM-Investitionsvolumen"]
    }
  },
  {
    id: "buraidah-cities-v2",
    type: "state-capital",
    parent: "SA-05",
    coords: [43.9750, 26.3260],
    name: { de: "Buraida", hu: "Burajda", ro: "Buraidah", en: "Buraidah" },
    description: {
      de: "Das Herz der Region Al Qasim ist ein bedeutendes landwirtschaftliches Zentrum, das besonders für seine Datteln bekannt ist.",
      hu: "Al-Kaszím régió központja jelentős mezőgazdasági csomópont, amely különösen datolyatermeléséről híres.",
      ro: "Inima regiunii Al Qasim este un important centru agricol, renumit în special pentru curmalele sale.",
      en: "The heart of the Al Qasim region is a major agricultural center, particularly famous for its dates."
    },
    facts: {
      de: [
        "Die Stadt beherbergt den größten Dattelmarkt der Welt.",
        "Traditionelle Lehmarchitektur prägt das Umland."
      ],
      hu: [
        "Itt található a világ legnagyobb datolyapiaca.",
        "A környéket a hagyományos vályogépítészet jellemzi."
      ],
      ro: [
        "Orașul găzduiește cea mai mare piață de curmale din lume.",
        "Arhitectura tradițională din chirpici domină împrejurimile."
      ],
      en: [
        "The city hosts the largest date market in the world.",
        "Traditional mud-brick architecture characterizes the surrounding area."
      ]
    },
    descriptionAdvanced: {
      de: "Buraida ist Hauptstadt der Region al-Qasim im Zentrum Saudi-Arabiens und zählt rund 750.000 Einwohner. Die Stadt liegt auf rund 600 Metern Höhe in der Wüstenebene des Najd, etwa 330 Kilometer nordwestlich von Riad. Ihr Aufstieg gründet auf der Bewässerungslandwirtschaft und der berühmten Dattelproduktion: Der Dattelmarkt von Buraida (Buraydah Dates Festival) wurde 2017 vom Guinness-Buch als größter Dattelmarkt der Welt bestätigt. Mit dem Anschluss an das saudische Eisenbahnnetz und die Hauptstraße Riad–Dammam gewann Buraida ab den 1950er Jahren wirtschaftlich an Bedeutung. Die Region al-Qasim wurde 1906 endgültig in das saudische Reich integriert, als Ibn Saud die rivalisierende Stadt Unaiza und Buraida unter seine Kontrolle brachte. Heute ist Buraida ein konservatives Zentrum mit traditioneller Lehmarchitektur in den umliegenden Dörfern."
    },
    factsAdvanced: {
      de: ["Hauptstadt der Region al-Qasim mit rund 750.000 Einwohnern", "Größter Dattelmarkt der Welt laut Guinness-Buch 2017", "Auf rund 600 Metern Höhe im Najd", "330 Kilometer nordwestlich von Riad", "Eingliederung in das saudische Reich 1906 unter Ibn Saud", "Wichtiges Bewässerungsgebiet mit Hunderttausenden Dattelpalmen", "Buraydah Dates Festival jährlich im Spätsommer", "Konservatives religiöses Zentrum des Königreichs"]
    }
  },
  {
    id: "khamis-mushait-cities-v2",
    type: "city",
    parent: "SA-14",
    coords: [42.7333, 18.3000],
    name: { de: "Chamis Muschait", hu: "Hamísz Musajt", ro: "Khamis Mushait", en: "Khamis Mushait" },
    description: {
      de: "Eine pulsierende Handelsstadt in den Bergen der Asir-Provinz, die ein wichtiges Militär- und Geschäftszentrum ist.",
      hu: "Pehegéses kereskedőváros Aszír tartomány hegyei között, amely fontos katonai és üzleti központ.",
      ro: "Un oraș comercial vibrant în munții provinciei Asir, care este un important centru militar și de afaceri.",
      en: "A vibrant commercial city in the mountains of the Asir Province, serving as a key military and business center."
    },
    facts: {
      de: [
        "Die Stadt ist für ihren traditionellen Silbermarkt bekannt.",
        "Sie gehört zu den bevölkerungsreichsten Städten der Region."
      ],
      hu: [
        "A város hagyományos ezüstpiacáról ismert.",
        "A régió egyik legnépesebb települése."
      ],
      ro: [
        "Orașul este cunoscut pentru piața sa tradițională de argint.",
        "Este unul dintre cele mai populate orașe din regiune."
      ],
      en: [
        "The city is known for its traditional silver market.",
        "It is one of the most populated cities in the region."
      ]
    },
    descriptionAdvanced: {
      de: "Chamis Muschait liegt im Asir-Gebirge auf rund 2.000 Metern Höhe in der Provinz Asir und zählt rund 630.000 Einwohner. Die Stadt bildet mit der nahe gelegenen Provinzhauptstadt Abha einen Ballungsraum. Der Name leitet sich vom traditionellen Donnerstagsmarkt (arabisch chamis) der Stämme der Region ab. Die Eingliederung in das saudische Königreich erfolgte 1932 mit der Staatsgründung. Ihre besondere strategische Bedeutung verdankt die Stadt dem König-Khaled-Luftwaffenstützpunkt, einem der wichtigsten Stützpunkte der Royal Saudi Air Force, der 1965 errichtet wurde. Während des Zweiten Golfkriegs 1990/91 starteten von hier Einsätze der Anti-Irak-Koalition. Wegen des kühleren Bergklimas mit Sommertemperaturen unter 30 Grad ist Chamis Muschait auch beliebter Sommerausflugsort für Saudis aus den heißen Tieflandregionen."
    },
    factsAdvanced: {
      de: ["Auf rund 2.000 Metern Höhe im Asir-Gebirge", "Rund 630.000 Einwohner in der Provinz Asir", "Name vom traditionellen Donnerstagsmarkt (chamis)", "König-Khaled-Luftwaffenstützpunkt seit 1965", "Bedeutender Einsatzort im Zweiten Golfkrieg 1990/91", "Eingliederung ins Königreich Saudi-Arabien 1932", "Sommertemperaturen unter 30 Grad Celsius", "Bildet mit Abha einen zusammenhängenden Ballungsraum"]
    }
  },
  {
    id: "abha-cities-v2",
    type: "state-capital",
    parent: "SA-14",
    coords: [42.5053, 18.2164],
    name: { de: "Abha", hu: "Abhá", ro: "Abha", en: "Abha" },
    description: {
      de: "Die hoch gelegene Provinzhauptstadt von Asir zieht mit ihrem milden Klima und der malerischen Berglandschaft viele Besucher an.",
      hu: "Aszír tartomány magasan fekvő fővárosa enyhe éghajlatával és festői hegyvidéki tájával sok látogatót vonz.",
      ro: "Capitala provinciei Asir, situată la mare altitudine, atrage mulți vizitatori datorită climatului său blând și peisajului montan.",
      en: "The high-altitude provincial capital of Asir attracts many visitors with its mild climate and picturesque mountain scenery."
    },
    facts: {
      de: [
        "Die Region ist berühmt für die farbenfrohen Häuser der Qulas.",
        "Der nahegelegene Asir-Nationalpark bietet eine reiche Flora."
      ],
      hu: [
        "A régió híres a falvak színesre festett házairól.",
        "A közeli Aszír Nemzeti Park gazdag növényvilággal büszkélkedhet."
      ],
      ro: [
        "Regiunea este faimoasă pentru casele colorate tradiționale.",
        "Parcul Național Asir din apropiere oferă o floră bogată."
      ],
      en: [
        "The region is famous for the brightly colored traditional houses.",
        "The nearby Asir National Park boasts rich flora."
      ]
    },
    descriptionAdvanced: {
      de: "Abha ist Hauptstadt der Provinz Asir im Südwesten Saudi-Arabiens und liegt auf rund 2.270 Metern Höhe in den Sarawat-Bergen, was sie zur höchstgelegenen Großstadt des Königreichs macht. Die Stadt zählt etwa 366.000 Einwohner. Wegen der angenehmen Sommertemperaturen um 25 Grad gilt Abha als Sommerausflugsziel für saudische Familien aus den heißen Regionen wie Riad und Dschidda. Die Region Asir wurde 1922 unter Ibn Saud erobert und 1932 endgültig dem neugegründeten Königreich Saudi-Arabien einverleibt. Der Asir-Nationalpark, gegründet 1981 als erster Nationalpark des Landes, umfasst 4.500 Quadratkilometer und schützt seltene Arten wie den arabischen Leoparden und Hamadryas-Paviane. Die traditionellen Qulas-Häuser mit ihren bunten geometrischen Wandmalereien (al-Qatt al-Asiri, UNESCO-Welterbe seit 2017) prägen die Architektur der Region."
    },
    factsAdvanced: {
      de: ["Höchstgelegene Großstadt Saudi-Arabiens auf rund 2.270 Metern", "Hauptstadt der Provinz Asir mit etwa 366.000 Einwohnern", "Asir-Nationalpark seit 1981, erster Nationalpark des Landes", "Nationalpark umfasst 4.500 Quadratkilometer", "Al-Qatt al-Asiri-Wandmalerei UNESCO-Welterbe seit 2017", "Sommertemperaturen um 25 Grad Celsius", "Eroberung durch Ibn Saud 1922", "Eingliederung ins Königreich 1932"]
    }
  },
  {
    id: "al-hofuf-cities-v2",
    type: "city",
    parent: "SA-04",
    coords: [49.5653, 25.3646],
    name: { de: "Hofuf", hu: "Hofuf", ro: "Al Hofuf", en: "Al Hofuf" },
    description: {
      de: "Das städtische Zentrum der Al-Ahsa-Oase ist tief in der Geschichte verwurzelt und von Millionen Dattelpalmen umgeben.",
      hu: "Az Al-Aksza oázis városi központja mélyen gyökerezik a történelemben, és több millió datolyapálma övezi.",
      ro: "Centrul urban al oazei Al-Ahsa este adânc înrădăcinat în istorie și înconjurat de milioane de curmali.",
      en: "The urban center of the Al-Ahsa Oasis is deeply rooted in history and surrounded by millions of date palms."
    },
    facts: {
      de: [
        "Die Al-Ahsa-Oase gehört zum UNESCO-Weltkulturerbe.",
        "Die historische Qaisariah-Markthalle ist ein Highlight."
      ],
      hu: [
        "Az Al-Aksza oázis az UNESCO Világörökség része.",
        "A történelmi Kiszarija piac a város egyik fénypontja."
      ],
      ro: [
        "Oaza Al-Ahsa face parte din Patrimoniul Mondial UNESCO.",
        "Piața istorică Qaisariah este un punct de atracție major."
      ],
      en: [
        "The Al-Ahsa Oasis is a UNESCO World Heritage site.",
        "The historic Qaisariah Souq is a major highlight."
      ]
    },
    descriptionAdvanced: {
      de: "Hofuf ist das städtische Zentrum der Oase al-Ahsa in der Ostprovinz Saudi-Arabiens und zählt rund 660.000 Einwohner. Die al-Ahsa-Oase ist mit über 2,5 Millionen Dattelpalmen die größte Palmenoase der Welt und seit 2018 UNESCO-Welterbe. Sie wird von rund 280 artesischen Quellen gespeist, die seit Jahrtausenden eine intensive Landwirtschaft ermöglichen. Die Region war seit der Bronzezeit besiedelt und gehörte später zum karmatischen Staat (899–1077). 1913 eroberte Ibn Saud Hofuf von den Osmanen und gliederte die Region in sein Reich ein, was den Beginn der saudischen Kontrolle über die Ostprovinz markiert. 1938 wurde nahe Hofuf in Dammam das erste saudische Erdöl gefunden. Die historische Festung Ibrahim aus osmanischer Zeit (1556) und der überdachte Qaisariah-Souq sind bedeutende Denkmäler."
    },
    factsAdvanced: {
      de: ["Rund 660.000 Einwohner im Zentrum der al-Ahsa-Oase", "Größte Palmenoase der Welt mit über 2,5 Millionen Dattelpalmen", "Al-Ahsa seit 2018 UNESCO-Welterbe", "Rund 280 artesische Quellen speisen die Oase", "Eroberung durch Ibn Saud 1913 von den Osmanen", "Festung Ibrahim seit 1556 aus osmanischer Zeit", "Karmatischer Staat in der Region 899 bis 1077", "Qaisariah-Souq als historischer überdachter Markt"]
    }
  },
  {
    id: "al-mubarraz-cities-v2",
    type: "city",
    parent: "SA-04",
    coords: [49.5858, 25.4136],
    name: { de: "Al Mubarraz", hu: "Al Mubarraz", ro: "Al Mubarraz", en: "Al Mubarraz" },
    description: {
      de: "Die Zwillingsstadt von Hofuf innerhalb der Al-Ahsa-Oase teilt sich deren fruchtbares Landbewässerungssystem.",
      hu: "Hofuf ikervárosa az Al-Aksza oázison belül, amely osztozik a terület termékeny öntözőrendszerén.",
      ro: "Orașul geamăn al lui Hofuf, aflat în oaza Al-Ahsa, împarte sistemul de irigații fertil al acesteia.",
      en: "The twin city of Hofuf within the Al-Ahsa Oasis shares its fertile land irrigation system."
    },
    facts: {
      de: [
        "Es ist historisch von großen Lehmburgen umgeben.",
        "Die Stadt wächst zunehmend mit Hofuf zusammen."
      ],
      hu: [
        "Történelmileg hatalmas vályogvárak vették körül.",
        "A város napjainkra egyre inkább összenő Hofuffal."
      ],
      ro: [
        "Istoric, a fost înconjurat de mari cetăți de lut.",
        "Orașul se contopește din ce în ce mai mult cu Hofuf."
      ],
      en: [
        "It was historically surrounded by large mud-brick forts.",
        "The city is increasingly merging with Hofuf."
      ]
    },
    descriptionAdvanced: {
      de: "Al-Mubarraz liegt in der Oase al-Ahsa in der Ostprovinz Saudi-Arabiens, nur wenige Kilometer nördlich von Hofuf, und zählt rund 300.000 Einwohner. Beide Städte bilden zusammen die zweitgrößte Stadtagglomeration der Ostprovinz nach dem Ballungsraum Dammam. Die Stadt war historisch ein wichtiges Zentrum der schiitischen Bevölkerung der Region und besaß mehrere Lehmburgen, von denen die Schloss-Khuzam-Festung aus dem 19. Jahrhundert teilweise erhalten ist. Mit der Eroberung der Region durch Ibn Saud im Jahr 1913 wurde al-Mubarraz Teil des wachsenden saudischen Reiches und 1932 des neugegründeten Königreichs. Die Wirtschaft der Stadt basiert auf der Dattelproduktion in den umliegenden Palmenhainen, der Tierhaltung und zunehmend auf Dienstleistungen für die Erdölindustrie der Ostprovinz. Die al-Ahsa-Oase wurde 2018 UNESCO-Welterbe."
    },
    factsAdvanced: {
      de: ["Rund 300.000 Einwohner in der al-Ahsa-Oase", "Zwillingsstadt von Hofuf in der Ostprovinz", "Schloss-Khuzam-Festung aus dem 19. Jahrhundert", "Eroberung durch Ibn Saud 1913", "Bedeutendes Zentrum schiitischer Bevölkerung", "Al-Ahsa-Oase seit 2018 UNESCO-Welterbe", "Wirtschaft auf Dattelpalmen und Erdöldienstleistungen", "Eingliederung ins Königreich Saudi-Arabien 1932"]
    }
  },
  {
    id: "hail-cities-v2",
    type: "state-capital",
    parent: "SA-06",
    coords: [41.6907, 27.5158],
    name: { de: "Ha'il", hu: "Háíl", ro: "Ha'il", en: "Ha'il" },
    description: {
      de: "Eine Stadt umgeben von markanten Granitbergen, die auf der historischen Pilgerroute von Persien nach Mekka liegt.",
      hu: "A feltűnő gránithegyekkel körülvett város a Perzsiából Mekkába vezető történelmi zarándokúton fekszik.",
      ro: "Un oraș înconjurat de munți de granit remarcabili, situat pe ruta istorică de pelerinaj din Persia spre Mecca.",
      en: "A city surrounded by striking granite mountains, located on the historic pilgrimage route from Persia to Mecca."
    },
    facts: {
      de: [
        "Die Festungen A'arif und Barzan sind lokale Wahrzeichen.",
        "Hier findet jährlich eine bekannte internationale Rallye statt."
      ],
      hu: [
        "Az A'arif és a Barzan erődítmények a helyi nevezetességek.",
        "Itt évente egy ismert nemzetközi rali versenyt is rendeznek."
      ],
      ro: [
        "Fortărețele A'arif și Barzan sunt puncte de reper locale.",
        "Aici are loc anual un raliu internațional renumit."
      ],
      en: [
        "The A'arif and Barzan forts are local landmarks.",
        "A well-known international rally takes place here annually."
      ]
    },
    descriptionAdvanced: {
      de: "Ha'il ist Hauptstadt der Provinz Ha'il im Norden Saudi-Arabiens und zählt rund 412.000 Einwohner. Die Stadt liegt auf rund 1.000 Metern Höhe zwischen den Aja- und Salma-Granitbergen am historischen Pilgerweg von Persien und Mesopotamien nach Mekka. Im 19. Jahrhundert war Ha'il Hauptstadt des mächtigen Emirats der Raschidi-Dynastie (1836–1921), die zeitweise mit dem rivalisierenden Haus Saud um die Herrschaft über die Arabische Halbinsel kämpfte. 1921 eroberte Ibn Saud die Stadt, was den Untergang der Raschidi und einen entscheidenden Schritt zur Vereinigung Arabiens markierte. Die A'arif-Festung und der Barzan-Palast erinnern an diese Zeit. Im Umland von Ha'il liegen die UNESCO-Welterbestätten Dschubba und ar-Rāt, deren Felsbilder bis zu 10.000 Jahre alt sind. Seit 2008 findet hier jährlich die Rallye Ha'il statt."
    },
    factsAdvanced: {
      de: ["Hauptstadt der Provinz Ha'il mit rund 412.000 Einwohnern", "Auf rund 1.000 Metern zwischen Aja- und Salma-Bergen", "Hauptstadt des Raschidi-Emirats von 1836 bis 1921", "Eroberung durch Ibn Saud 1921", "UNESCO-Welterbe Dschubba und ar-Rāt mit bis zu 10.000 Jahre alten Felsbildern", "A'arif-Festung und Barzan-Palast als Wahrzeichen", "Rallye Ha'il seit 2008 jährlich", "Auf historischer Pilgerroute von Persien nach Mekka"]
    }
  },
  {
    id: "najran-cities-v2",
    type: "state-capital",
    parent: "SA-10",
    coords: [44.1277, 17.4933],
    name: { de: "Nadschran", hu: "Nadzsrán", ro: "Najran", en: "Najran" },
    description: {
      de: "Die südliche Stadt an der Grenze zum Jemen ist berühmt für ihre alten Ruinen und die Lehmarchitektur des Palastes von Al-Aan.",
      hu: "A jemen melletti déli város ősi romjairól és az Al-Aan palota vályogépítészetéről híres.",
      ro: "Orașul sudic de la granița cu Yemenul este renumit pentru ruinele sale antice și arhitectura din lut a Palatului Al-Aan.",
      en: "The southern city on the border with Yemen is famous for its ancient ruins and the mud-brick architecture of Al-Aan Palace."
    },
    facts: {
      de: [
        "Die historische Stätte Al-Ukhdud zeugt von antiken Siedlungen.",
        "Die Stadt liegt im fruchtbaren Wadi Nadschran."
      ],
      hu: [
        "Az Al-Ukhdud történelmi helyszín ókori településekről tanúskodik.",
        "A város a termékeny Nadzsrán völgyben (vádi) található."
      ],
      ro: [
        "Situl istoric Al-Ukhdud atestă existența așezărilor antice.",
        "Orașul este situat în fertilul Wadi Najran."
      ],
      en: [
        "The historical site of Al-Ukhdud is evidence of ancient settlements.",
        "The city is located in the fertile Wadi Najran."
      ]
    },
    descriptionAdvanced: {
      de: "Nadschran ist Hauptstadt der gleichnamigen Provinz im Südwesten Saudi-Arabiens an der jemenitischen Grenze und zählt rund 380.000 Einwohner. Die Stadt liegt im fruchtbaren Wadi Nadschran auf rund 1.300 Metern Höhe. Das nahe gelegene Al-Ukhdud (auch Raqmat) ist eine bedeutende archäologische Stätte mit Spuren einer Besiedlung seit dem 1. Jahrtausend v. Chr. und wird im Koran (Sure 85) im Zusammenhang mit der Märtyrerschaft der Christen von Nadschran 523 n. Chr. erwähnt, als der jüdische König Dhu Nuwas die christliche Gemeinde verfolgte. Die Region gehörte historisch zum Jemen und wurde nach dem saudisch-jemenitischen Krieg 1934 mit dem Vertrag von Ta'if dem Königreich Saudi-Arabien zugesprochen. Die traditionelle Lehmarchitektur mit dem Al-Aan-Palast und turmartigen Familienhäusern (mehrstöckig, bis 7 Etagen) prägt das Stadtbild bis heute."
    },
    factsAdvanced: {
      de: ["Hauptstadt der Provinz Nadschran mit rund 380.000 Einwohnern", "Im Wadi Nadschran auf rund 1.300 Metern Höhe", "Al-Ukhdud archäologische Stätte mit Bezug zur Sure 85", "Christenverfolgung 523 n. Chr. unter Dhu Nuwas", "Eingliederung ins Königreich nach Vertrag von Ta'if 1934", "Saudisch-jemenitischer Krieg 1934 entschied Zugehörigkeit", "Al-Aan-Palast als bedeutendes Lehmgebäude", "Turmartige Lehmhäuser mit bis zu sieben Etagen"]
    }
  },
  {
    id: "al-jubail-cities-v2",
    type: "city",
    parent: "SA-04",
    coords: [49.6583, 27.0111],
    name: { de: "Al-Dschubail", hu: "Al-Dzsubajl", ro: "Al Jubail", en: "Al Jubail" },
    description: {
      de: "Ein ehemaliges kleines Fischerdorf, das sich zu einer der größten Industriestädte der Welt entwickelt hat.",
      hu: "Az egykori kis halászfalu a világ egyik legnagyobb iparvárosává nőtte ki magát.",
      ro: "Un fost mic sat de pescari care s-a transformat într-unul dintre cele mai mari orașe industriale din lume.",
      en: "A former small fishing village that has developed into one of the largest industrial cities in the world."
    },
    facts: {
      de: [
        "Sie ist das Zentrum der saudischen petrochemischen Industrie.",
        "Die Stadt wurde in den 1970er Jahren planmäßig erweitert."
      ],
      hu: [
        "A szaúdi petrolkémiai ipar abszolút központja.",
        "A várost az 1970-es években tervszerűen bővítették."
      ],
      ro: [
        "Este centrul industriei petrochimice saudite.",
        "Orașul a fost extins sistematic în anii 1970."
      ],
      en: [
        "It is the center of the Saudi petrochemical industry.",
        "The city was systematically expanded in the 1970s."
      ]
    },
    descriptionAdvanced: {
      de: "Al-Dschubail liegt am Persischen Golf in der Ostprovinz Saudi-Arabiens und zählt rund 380.000 Einwohner. Die ehemals kleine Fischerstadt wurde durch das königliche Dekret vom 21. September 1975 zur planmäßig errichteten Industriestadt erklärt; heute ist Jubail Industrial City eine der größten petrochemischen Industriezonen der Welt. Die staatliche Royal Commission for Jubail and Yanbu wurde eigens für den Aufbau gegründet. Die Stadt beherbergt das saudische SABIC-Konglomerat und über 30 Großchemieanlagen. Mit ihrem Tiefseehafen King Fahd Industrial Port (Kapazität über 80 Millionen Tonnen pro Jahr) ist al-Dschubail der wichtigste Industriehafen am Persischen Golf. Während des Zweiten Golfkriegs 1991 war die Stadt Hauptquartier der US-Marines. 1986 wurden in einer nahen Bucht christliche Ruinen aus dem 4. Jahrhundert gefunden, die zu den ältesten Kirchen der Arabischen Halbinsel zählen."
    },
    factsAdvanced: {
      de: ["Königliches Dekret zur Industriestadt am 21. September 1975", "Rund 380.000 Einwohner in der Ostprovinz", "Eine der größten petrochemischen Zonen der Welt", "King Fahd Industrial Port mit Kapazität über 80 Millionen Tonnen", "Hauptquartier der US-Marines im Zweiten Golfkrieg 1991", "Royal Commission for Jubail and Yanbu eigens gegründet 1975", "Christliche Ruinen aus dem 4. Jahrhundert 1986 entdeckt", "Sitz wichtiger SABIC-Anlagen"]
    }
  },
  {
    id: "al-kharj-cities-v2",
    type: "city",
    parent: "SA-01",
    coords: [47.3346, 24.1550],
    name: { de: "Al-Chardsch", hu: "Al-Hardzs", ro: "Al Kharj", en: "Al Kharj" },
    description: {
      de: "Eine landwirtschaftlich geprägte Stadt südlich von Riad, die historische Wasserbrunnen und Paläste beherbergt.",
      hu: "A Rijádtól délre fekvő mezőgazdasági város történelmi vízgyűjtőknek és palotáknak ad otthont.",
      ro: "Un oraș predominant agricol, la sud de Riad, care adăpostește fântâni de apă și palate istorice.",
      en: "An agricultural city south of Riyadh that is home to historical water wells and palaces."
    },
    facts: {
      de: [
        "Der King Abdulaziz Palast ist eine bekannte Sehenswürdigkeit.",
        "Die Region verfügt über alte Kalksteinbrunnen (Dahl)."
      ],
      hu: [
        "Az Abdul-Aziz Király Palota egy jól ismert látványosság.",
        "A régióban régi mészkőkutak (Dahl) is találhatók."
      ],
      ro: [
        "Palatul Regele Abdulaziz este o atracție cunoscută.",
        "Regiunea dispune de fântâni antice de calcar (Dahl)."
      ],
      en: [
        "The King Abdulaziz Palace is a well-known attraction.",
        "The region features ancient limestone wells (Dahl)."
      ]
    },
    descriptionAdvanced: {
      de: "Al-Chardsch liegt rund 90 Kilometer südöstlich von Riad in der Provinz Riad und zählt rund 425.000 Einwohner. Die Region ist seit jahrhunderten ein bedeutendes landwirtschaftliches Zentrum auf dem Najd-Plateau dank tiefer natürlicher Kalksteinbrunnen, der sogenannten Dahl, die natürliches Grundwasser aus großer Tiefe an die Oberfläche bringen. König Abd al-Aziz ibn Saud (Regierungszeit 1932–1953) ließ in den 1930er und 1940er Jahren in al-Chardsch eine Modellfarm und mehrere Paläste errichten, darunter den noch heute erhaltenen al-Salam-Palast. Während des Zweiten Weltkriegs unterstützten amerikanische Berater unter dem Programm Lend-Lease den Aufbau der Landwirtschaft. Heute beherbergt al-Chardsch den größten Milchviehbetrieb des Nahen Ostens, die Almarai-Farm, mit über 100.000 Kühen. Der Prinz-Sultan-Luftwaffenstützpunkt wurde 1991 zentral für die US-Streitkräfte am Persischen Golf."
    },
    factsAdvanced: {
      de: ["Rund 425.000 Einwohner, 90 Kilometer südöstlich von Riad", "Natürliche Dahl-Kalksteinbrunnen aus großer Tiefe", "Modellfarm König Abd al-Aziz' in den 1930er und 1940er Jahren", "Al-Salam-Palast aus der Zeit des Staatsgründers", "Almarai-Farm als größter Milchbetrieb des Nahen Ostens", "Über 100.000 Kühe auf der Almarai-Farm", "Prinz-Sultan-Luftwaffenstützpunkt seit 1991 für US-Truppen", "US-amerikanische Lend-Lease-Hilfe im Zweiten Weltkrieg"]
    }
  },
  {
    id: "yanbu-cities-v2",
    type: "city",
    parent: "SA-03",
    coords: [38.0622, 24.0891],
    name: { de: "Yanbu", hu: "Janbu", ro: "Yanbu", en: "Yanbu" },
    description: {
      de: "Eine Küstenstadt, die durch ihre Raffinerien und den wichtigen Exporthafen für Erdöl an der Westküste bedeutend ist.",
      hu: "A nyugati partvidéken fekvő tengerparti város a finomítóiról és a fontos kőolaj-exportkikötőjéről nevezetes.",
      ro: "Un oraș de coastă, important datorită rafinăriilor și portului major de export de petrol de pe coasta de vest.",
      en: "A coastal city that is significant for its refineries and the major petroleum export port on the west coast."
    },
    facts: {
      de: [
        "Die Stadt teilt sich in Industriegebiet und historische Altstadt.",
        "Yanbu ist ein beliebter Ort für Taucher am Roten Meer."
      ],
      hu: [
        "A város iparterületre és történelmi óvárosra oszlik.",
        "Janbu népszerű célpont a Vörös-tenger búvárai számára."
      ],
      ro: [
        "Orașul este împărțit într-o zonă industrială și un centru istoric.",
        "Yanbu este o destinație populară pentru scafandrii din Marea Roșie."
      ],
      en: [
        "The city is divided into an industrial area and a historical center.",
        "Yanbu is a popular destination for divers in the Red Sea."
      ]
    },
    descriptionAdvanced: {
      de: "Yanbu liegt am Roten Meer in der Provinz Medina und zählt mit dem Industriegebiet Yanbu al-Sinaiyya rund 332.000 Einwohner. Die historische Altstadt Yanbu al-Bahr war seit dem Altertum ein wichtiger Hafen und Versorgungspunkt der Pilgerkarawanen nach Medina. Lawrence von Arabien (T. E. Lawrence) hatte hier während der arabischen Revolte 1916/17 sein Hauptquartier. Mit königlichem Dekret vom 21. September 1975 wurde Yanbu, parallel zu al-Dschubail, zur planmäßig errichteten Industriestadt erklärt. Yanbu ist Endpunkt mehrerer Pipelines aus den östlichen Ölfeldern, darunter der 1.200 Kilometer langen Petroline (East-West-Pipeline), die seit 1981 saudisches Rohöl von Abqaiq nach Yanbu transportiert. Drei große Raffinerien und mehrere petrochemische Anlagen prägen den Hafen. Die Korallenriffe vor Yanbu zählen zu den schönsten Tauchgebieten am Roten Meer."
    },
    factsAdvanced: {
      de: ["Rund 332.000 Einwohner am Roten Meer", "Königliches Dekret zur Industriestadt am 21. September 1975", "Endpunkt der 1.200 km langen Petroline (East-West-Pipeline) seit 1981", "Hauptquartier von Lawrence von Arabien 1916/17", "Drei große Raffinerien und mehrere petrochemische Anlagen", "Historische Altstadt Yanbu al-Bahr als Pilgerhafen", "Wichtige Korallenriffe vor der Küste", "Alter Versorgungsort der Karawanen nach Medina"]
    }
  },
  {
    id: "qatif-cities-v2",
    type: "city",
    parent: "SA-04",
    coords: [50.0000, 26.5500],
    name: { de: "Qatif", hu: "Katif", ro: "Qatif", en: "Qatif" },
    description: {
      de: "Eine der ältesten Siedlungen in Ostarabien mit einer reichen landwirtschaftlichen Tradition in der Dattelpalmenkultur.",
      hu: "Kelet-Arábia egyik legrégebbi települése, amely gazdag mezőgazdasági és datolyapálma-termesztési hagyományokkal rendelkezik.",
      ro: "Una dintre cele mai vechi așezări din estul Arabiei, cu o bogată tradiție agricolă în cultivarea curmalelor.",
      en: "One of the oldest settlements in Eastern Arabia with a rich agricultural tradition in date palm cultivation."
    },
    facts: {
      de: [
        "Der historische Markt Khamis Souq ist traditionell bekannt.",
        "Die Stadt besitzt ein altes Fischer-Erbe im Persischen Golf."
      ],
      hu: [
        "A Khamis Souq történelmi piac a régió egyik látványossága.",
        "A város ősi halászati örökséggel bír a Perzsa-öbölben."
      ],
      ro: [
        "Piața istorică Khamis Souq este cunoscută în mod tradițional.",
        "Orașul are o veche moștenire pescărească în Golful Persic."
      ],
      en: [
        "The historic Khamis Souq market is traditionally well-known.",
        "The city has an ancient fishing heritage in the Persian Gulf."
      ]
    },
    descriptionAdvanced: {
      de: "Qatif liegt am Persischen Golf in der Ostprovinz Saudi-Arabiens und ist mit rund 524.000 Einwohnern eines der ältesten kontinuierlich bewohnten Siedlungsgebiete Ostarabiens, mit archäologischen Spuren bis ins 3. Jahrtausend v. Chr. (Dilmun-Kultur). Die Region war im 9.-11. Jahrhundert Teil des karmatischen Staates und stand später unter portugiesischer (1521–1551) und osmanischer Herrschaft. 1913 eroberte Ibn Saud Qatif von den Osmanen und gliederte die Region in sein Reich ein. Die mehrheitlich schiitische Bevölkerung pflegt eigene religiöse und kulturelle Traditionen innerhalb des sunnitisch geprägten Königreichs. Die Wirtschaft basiert auf Dattelpalmen-Hainen, Fischerei mit langer Tradition im Persischen Golf sowie zunehmend auf der nahen Erdölindustrie der Ostprovinz. Die Qatif-Oase mit über 1 Million Dattelpalmen war jahrhundertelang ein wichtiger Stopp auf den Karawanenrouten."
    },
    factsAdvanced: {
      de: ["Rund 524.000 Einwohner am Persischen Golf", "Spuren der Dilmun-Kultur ab dem 3. Jahrtausend v. Chr.", "Karmatischer Staat von etwa 899 bis 1077", "Portugiesische Herrschaft von 1521 bis 1551", "Eroberung durch Ibn Saud 1913", "Mehrheitlich schiitische Bevölkerung", "Qatif-Oase mit über 1 Million Dattelpalmen", "Lange Fischerei-Tradition im Persischen Golf"]
    }
  },
  {
    id: "arar-cities-v2",
    type: "state-capital",
    parent: "SA-08",
    coords: [41.0194, 30.9753],
    name: { de: "Arar", hu: "Arar", ro: "Arar", en: "Arar" },
    description: {
      de: "Die Hauptstadt der Provinz Nördliche Grenzen liegt in einer weiten Ebene und wurde nach der Transarabischen Pipeline gegründet.",
      hu: "Az Északi Határvidék tartományának fővárosa egy széles síkságon fekszik, és a Transzarábiai Csővezeték megépítése után alapították.",
      ro: "Capitala provinciei Frontierele de Nord este situată pe o câmpie vastă și a fost fondată după construirea conductei Trans-Arabice.",
      en: "The capital of the Northern Borders province lies on a vast plain and was founded after the construction of the Trans-Arabian Pipeline."
    },
    facts: {
      de: [
        "Sie befindet sich nahe der Grenze zum Irak.",
        "Die Weidegebiete der Umgebung sind im Frühling sehr beliebt."
      ],
      hu: [
        "A város az iraki határ közelében fekszik.",
        "A környező legelők tavasszal rendkívül népszerűek a helyiek körében."
      ],
      ro: [
        "Se află aproape de granița cu Irakul.",
        "Pășunile din împrejurimi sunt foarte populare primăvara."
      ],
      en: [
        "It is located near the border with Iraq.",
        "The surrounding pastures are very popular in the spring."
      ]
    },
    descriptionAdvanced: {
      de: "Arar ist Hauptstadt der Provinz Nördliche Grenzen (al-Hudud asch-Schamaliyya) und zählt rund 192.000 Einwohner. Die Stadt entstand erst in den 1950er Jahren als Versorgungsstützpunkt entlang der Trans-Arabian Pipeline (TAPLINE), die von 1950 bis 1990 saudisches Rohöl von Qaisuma in der Ostprovinz über 1.214 Kilometer durch Jordanien und Syrien zum libanesischen Mittelmeerhafen Sidon transportierte. Eine ihrer Pumpstationen Nr. 5 wurde zum Kern der Stadt. Mit dem Anschluss an die Hauptstraße Riad–Bagdad und der Nähe zur irakischen Grenze (rund 55 Kilometer entfernt) entwickelte sich Arar zum wichtigen Grenzposten. Während des Zweiten Golfkriegs 1990/91 wurde die Pipeline endgültig stillgelegt. Heute ist Arar ein beliebtes Frühlingsausflugsziel der Saudis, da die umliegenden Steppenflächen nach den Winterregen für kurze Zeit blühen und zur Tradition des Wüstencampings einladen."
    },
    factsAdvanced: {
      de: ["Hauptstadt der Provinz Nördliche Grenzen mit rund 192.000 Einwohnern", "Gegründet in den 1950er Jahren als TAPLINE-Pumpstation Nr. 5", "Trans-Arabian Pipeline 1.214 Kilometer lang von Qaisuma nach Sidon", "TAPLINE in Betrieb von 1950 bis 1990", "Rund 55 Kilometer von der irakischen Grenze entfernt", "Beliebtes Frühlingsziel mit blühenden Steppen", "Tradition des Wüstencampings nach dem Winterregen", "Endgültige Stilllegung der TAPLINE im Zweiten Golfkrieg"]
    }
  },
  {
    id: "sakakah-cities-v2",
    type: "state-capital",
    parent: "SA-12",
    coords: [40.2064, 29.9697],
    name: { de: "Sakaka", hu: "Szakáka", ro: "Sakakah", en: "Sakakah" },
    description: {
      de: "Die Hauptstadt der Region Al-Dschauf zeichnet sich durch ihre Olivenfarmen und bedeutende archäologische Stätten aus.",
      hu: "Al-Dzsauf régió fővárosát hatalmas olajfaültetvényei és jelentős régészeti lelőhelyei teszik különlegessé.",
      ro: "Capitala regiunii Al Jawf se distinge prin fermele sale de măslini și siturile arheologice importante.",
      en: "The capital of the Al Jawf region is distinguished by its olive farms and significant archaeological sites."
    },
    facts: {
      de: [
        "Das nahegelegene Za'abal-Schloss thront auf einem Berg.",
        "Rajajil, das \"Stonehenge von Saudi-Arabien\", liegt in der Nähe."
      ],
      hu: [
        "A közeli Za'abal-kastély egy magaslaton trónol.",
        "Rajajil, Szaúd-Arábia \"Stonehenge-e\" szintén a közelben található."
      ],
      ro: [
        "Castelul Za'abal din apropiere domină un munte.",
        "Rajajil, \"Stonehenge-ul Arabiei Saudite\", se află în apropiere."
      ],
      en: [
        "The nearby Za'abal Castle perches on a mountain.",
        "Rajajil, the \"Stonehenge of Saudi Arabia\", is located nearby."
      ]
    },
    descriptionAdvanced: {
      de: "Sakaka ist Hauptstadt der Region al-Dschauf im Norden Saudi-Arabiens und zählt rund 250.000 Einwohner. Die Stadt liegt auf rund 580 Metern Höhe in einer fruchtbaren Senke, die seit dem Altertum durch artesische Brunnen bewässert wird. Die Region al-Dschauf gehört zu den größten Olivenanbaugebieten des Königreichs, mit über 20 Millionen Olivenbäumen. Das Za'abal-Schloss aus Lehmziegeln auf einem Felshügel überragt die Stadt und stammt vermutlich aus dem 1. Jahrhundert v. Chr. Die archäologische Stätte Rajajil (auch das Stonehenge von Saudi-Arabien) liegt rund 10 Kilometer südwestlich und besteht aus rund 50 Gruppen aufrecht stehender Sandsteinpfeiler aus dem 4. Jahrtausend v. Chr. 1922 wurde die Region durch das Bündnis mit Ibn Saud Teil des saudischen Reiches und 1932 des neuen Königreichs. In Sakaka steht außerdem die 2019 in Betrieb genommene 300-MW-Photovoltaikanlage Sakaka."
    },
    factsAdvanced: {
      de: ["Hauptstadt der Region al-Dschauf mit rund 250.000 Einwohnern", "Auf rund 580 Metern Höhe in einer fruchtbaren Senke", "Über 20 Millionen Olivenbäume in der Region", "Za'abal-Schloss vermutlich aus dem 1. Jahrhundert v. Chr.", "Rajajil als Stonehenge von Saudi-Arabien aus dem 4. Jahrtausend v. Chr.", "Eingliederung ins saudische Reich 1922", "Photovoltaikanlage Sakaka mit 300 MW seit 2019", "Artesische Brunnen seit dem Altertum"]
    }
  },
  {
    id: "jizan-cities-v2",
    type: "state-capital",
    parent: "SA-09",
    coords: [42.5511, 16.8892],
    name: { de: "Dschisan", hu: "Dzsízán", ro: "Jizan", en: "Jizan" },
    description: {
      de: "Die Hafenstadt im äußersten Südwesten des Landes profitiert vom Roten Meer und verfügt über reichhaltige Agrarflächen.",
      hu: "Az ország délnyugati csücskében fekvő kikötőváros a Vörös-tengerből profitál, és gazdag mezőgazdasági területekkel rendelkezik.",
      ro: "Orașul-port din sud-vestul extrem al țării beneficiază de Marea Roșie și dispune de terenuri agricole bogate.",
      en: "The port city in the far southwest of the country benefits from the Red Sea and features rich agricultural lands."
    },
    facts: {
      de: [
        "Die Region ist berühmt für den Anbau von Papayas und Mangos.",
        "Von hier aus starten Fähren zu den Farasan-Inseln."
      ],
      hu: [
        "A régió papaja- és mangótermesztéséről híres.",
        "Innen indulnak a kompok a Faraszán-szigetekre."
      ],
      ro: [
        "Regiunea este renumită pentru cultivarea papaya și mango.",
        "De aici pleacă feriboturile spre Insulele Farasan."
      ],
      en: [
        "The region is famous for growing papayas and mangoes.",
        "Ferries depart from here to the Farasan Islands."
      ]
    },
    descriptionAdvanced: {
      de: "Dschisan ist Hauptstadt der gleichnamigen Provinz im äußersten Südwesten Saudi-Arabiens am Roten Meer und zählt rund 157.000 Einwohner. Die Stadt liegt nahe der jemenitischen Grenze und ist Hauptumschlaghafen für die fruchtbare Tihama-Küstenebene, die zu den wichtigsten landwirtschaftlichen Regionen des Königreichs gehört, vor allem für tropische Früchte wie Papayas, Mangos und Bananen. Die Region wurde nach dem saudisch-jemenitischen Krieg 1934 mit dem Vertrag von Ta'if Saudi-Arabien zugesprochen. Vor der Küste liegen die Farasan-Inseln, ein 1989 ausgewiesenes Naturschutzgebiet von 700 Quadratkilometern, das die seltene Arabische Gazelle und große Mangrovenwälder schützt. Mit dem Megaprojekt Dschisan Economic City entsteht seit 2007 eine geplante neue Industriestadt, die Saudi Aramco betreibt. Die Raffinerie Jazan ging 2018 in Betrieb."
    },
    factsAdvanced: {
      de: ["Hauptstadt der Provinz Dschisan mit rund 157.000 Einwohnern", "Am Roten Meer nahe der jemenitischen Grenze", "Farasan-Inseln 700 Quadratkilometer Naturschutzgebiet seit 1989", "Eingliederung ins Königreich nach Vertrag von Ta'if 1934", "Tropischer Anbau von Papaya, Mango und Banane", "Schutz der Arabischen Gazelle in den Farasan-Inseln", "Jazan Economic City seit 2007 im Aufbau", "Raffinerie Jazan seit 2018 in Betrieb"]
    }
  },
  {
    id: "al-qurayyat-cities-v2",
    type: "city",
    parent: "SA-12",
    coords: [37.3628, 31.3318],
    name: { de: "Al-Qurayyat", hu: "Al-Kurajját", ro: "Al Qurayyat", en: "Al Qurayyat" },
    description: {
      de: "Die nördliche Stadt nahe der jordanischen Grenze ist vor allem für den Handel, Salzgewinnung und Oliven berühmt.",
      hu: "A jordán határ közelében fekvő északi város elsősorban a kereskedelemről, a sólepárlásról és az olajbogyóiról híres.",
      ro: "Orașul nordic din apropierea graniței cu Iordania este renumit mai ales pentru comerț, extracția sării și măsline.",
      en: "The northern city near the Jordanian border is most famous for trade, salt extraction, and olives."
    },
    facts: {
      de: [
        "Hier befindet sich ein bedeutender Grenzübergang zu Jordanien.",
        "Das lokale Klima begünstigt den Olivenanbau stark."
      ],
      hu: [
        "Itt található egy fontos határátkelő Jordánia felé.",
        "A helyi klíma rendkívül kedvez az olajbogyó termesztésének."
      ],
      ro: [
        "Aici se află un important punct de trecere a frontierei către Iordania.",
        "Climatul local favorizează puternic cultivarea măslinilor."
      ],
      en: [
        "A major border crossing to Jordan is located here.",
        "The local climate is highly favorable for olive cultivation."
      ]
    },
    descriptionAdvanced: {
      de: "Al-Qurayyat liegt im äußersten Nordwesten Saudi-Arabiens in der Region al-Dschauf, nur wenige Kilometer von der jordanischen Grenze entfernt, und zählt rund 147.000 Einwohner. Die Stadt liegt auf rund 540 Metern Höhe in einer Region mit milderem Klima, das den Olivenanbau begünstigt. Al-Qurayyat war Drehscheibe der traditionellen Karawanenrouten von Damaskus nach Medina und beherbergt die Festung Kaf aus osmanischer Zeit. Die Region wurde 1922 durch Ibn Saud erobert und 1932 in das neugegründete Königreich Saudi-Arabien integriert. Wichtigster Wirtschaftszweig ist heute der Grenzhandel über den Übergang Halat Ammar nach Jordanien sowie die Salzgewinnung aus dem Salzsee Sabkhat al-Qurayyat. Die Region zählt zu den größten Olivenanbaugebieten Saudi-Arabiens. Im Stadtgebiet liegt der Bahnhof der historischen Hedschas-Bahn, die von 1908 bis 1916 Damaskus mit Medina verband."
    },
    factsAdvanced: {
      de: ["Rund 147.000 Einwohner an der jordanischen Grenze", "Auf rund 540 Metern Höhe in der Region al-Dschauf", "Festung Kaf aus osmanischer Zeit", "Grenzübergang Halat Ammar nach Jordanien", "Salzgewinnung aus dem Sabkhat al-Qurayyat", "Eroberung durch Ibn Saud 1922", "Hedschas-Bahn-Bahnhof aus den Jahren 1908 bis 1916", "Eines der größten Olivenanbaugebiete des Königreichs"]
    }
  },
  {
    id: "dhahran-cities-v2",
    type: "city",
    parent: "SA-04",
    coords: [50.1500, 26.2833],
    name: { de: "Dhahran", hu: "Dahrán", ro: "Dhahran", en: "Dhahran" },
    description: {
      de: "Als Hauptsitz des nationalen Erdölunternehmens Saudi Aramco ist die Stadt das administrative Zentrum der Ölindustrie.",
      hu: "A szaúdi Aramco nemzeti kőolajtársaság központjaként a város az olajipar kiemeltebb adminisztratív bázisa.",
      ro: "Fiind sediul companiei naționale petroliere Saudi Aramco, orașul este centrul administrativ al industriei petroliere.",
      en: "As the headquarters of the national oil company Saudi Aramco, the city is the administrative center of the oil industry."
    },
    facts: {
      de: [
        "Das moderne King Abdulaziz Center for World Culture (Ithra) steht hier.",
        "Der Wohlstand der Stadt beruht maßgeblich auf dem Öl-Boom."
      ],
      hu: [
        "A modern Ithra (Világkulturális Központ) lenyűgöző épülete itt található.",
        "A város gazdagsága nagyrészt az olajfellendülésen alapul."
      ],
      ro: [
        "Modernul Centru King Abdulaziz pentru Cultura Mondială (Ithra) se află aici.",
        "Prosperitatea orașului se bazează în mare parte pe boom-ul petrolier."
      ],
      en: [
        "The modern King Abdulaziz Center for World Culture (Ithra) is located here.",
        "The city's wealth is largely based on the oil boom."
      ]
    },
    descriptionAdvanced: {
      de: "Dhahran liegt in der Ostprovinz Saudi-Arabiens, Teil des Ballungsraums Dammam–Dhahran–al-Khobar, und zählt rund 152.000 Einwohner. Die Stadt ist Hauptsitz von Saudi Aramco, dem nach Marktwert wertvollsten Erdölunternehmen der Welt, das 1933 als California Arabian Standard Oil Company gegründet wurde. Am 4. März 1938 stieß die Bohrung Dammam Nr. 7 nahe Dhahran in 1.441 Metern Tiefe auf das erste kommerzielle Erdöl Saudi-Arabiens. 1980 verstaatlichte Saudi-Arabien Aramco vollständig und benannte sie 1988 in Saudi Aramco um. Im Dezember 2019 ging das Unternehmen mit einem Börsenwert von rund 2 Billionen Dollar an die Börse von Riad. Das 2017 eröffnete König-Abdulaziz-Zentrum für Weltkultur (Ithra) ist eines der bedeutendsten Kulturzentren der arabischen Welt. Auch die King Fahd University of Petroleum and Minerals (gegründet 1963) hat hier ihren Sitz."
    },
    factsAdvanced: {
      de: ["Hauptsitz von Saudi Aramco mit rund 152.000 Einwohnern", "Erstes kommerzielles Erdöl Saudi-Arabiens am 4. März 1938", "Aramco-Gründung 1933 als California Arabian Standard Oil", "Vollständige Verstaatlichung 1980, Umbenennung 1988", "Aramco-Börsengang Dezember 2019 mit rund 2 Billionen Dollar Bewertung", "Ithra-Kulturzentrum seit 2017 geöffnet", "King Fahd University of Petroleum and Minerals seit 1963", "Bohrung Dammam Nr. 7 in 1.441 Metern Tiefe fündig"]
    }
  },
  {
    id: "al-bahah-cities-v2",
    type: "state-capital",
    parent: "SA-11",
    coords: [41.4589, 20.0129],
    name: { de: "Al-Baha", hu: "Al-Báha", ro: "Al Bahah", en: "Al Bahah" },
    description: {
      de: "Eine Hochlandstadt inmitten von Wäldern und Bergen, die für ihre traditionelle Architektur und landwirtschaftlichen Terrassen geschätzt wird.",
      hu: "Erdők és hegyek között fekvő hegyvidéki város, amelyet hagyományos építészete és mezőgazdasági teraszai miatt becsülnek.",
      ro: "Un oraș de munte în mijlocul pădurilor, apreciat pentru arhitectura tradițională și terasele agricole.",
      en: "A highland city surrounded by forests and mountains, appreciated for its traditional architecture and agricultural terraces."
    },
    facts: {
      de: [
        "Das historische Dorf Dhee Ayn mit seinen alten Steinhäusern liegt nahebei.",
        "Das Klima der Region macht sie zum beliebten Sommertourismus-Ziel."
      ],
      hu: [
        "A történelmi Dhee Ayn falu a régi kőházaival a közelben fekszik.",
        "A régió éghajlata miatt a nyári turizmus kedvelt célpontja."
      ],
      ro: [
        "Satul istoric Dhee Ayn cu casele sale vechi de piatră se află în apropiere.",
        "Climatul regiunii o face o destinație populară pentru turismul de vară."
      ],
      en: [
        "The historic village of Dhee Ayn with its old stone houses is located nearby.",
        "The region's climate makes it a popular summer tourism destination."
      ]
    },
    descriptionAdvanced: {
      de: "Al-Baha ist Hauptstadt der gleichnamigen kleinsten Provinz Saudi-Arabiens und liegt im Asir-Gebirge auf rund 2.155 Metern Höhe; die Stadt zählt etwa 110.000 Einwohner. Sie ist umgeben von rund 40 Wäldern, darunter der Raghadan-Forst, was sie zu einem der grünsten Orte des Königreichs macht. Die Sommertemperaturen liegen selten über 25 Grad Celsius, was al-Baha zu einem beliebten Sommerausflugsziel saudischer Familien macht. Die Region war historisch von den Stämmen der Ghamid und Zahran besiedelt und wurde 1934 endgültig in das Königreich Saudi-Arabien integriert. Charakteristisch für die Region sind traditionelle mehrstöckige Steinhäuser mit Schieferdächern. Das nahe gelegene historische Dorf Dhee Ayn (Marmordorf) aus dem 9. Jahrhundert besteht aus rund 60 Steinhäusern, die auf einem Marmorhügel über einer ganzjährig fließenden Quelle thronen. Die Provinz beherbergt zudem den Schada-Berg auf 2.250 Metern."
    },
    factsAdvanced: {
      de: ["Hauptstadt der kleinsten Provinz Saudi-Arabiens mit rund 110.000 Einwohnern", "Auf rund 2.155 Metern Höhe im Asir-Gebirge", "Rund 40 Wälder umgeben die Stadt", "Sommertemperaturen selten über 25 Grad Celsius", "Eingliederung ins Königreich 1934", "Dhee Ayn Marmordorf aus dem 9. Jahrhundert", "Rund 60 Steinhäuser auf einem Marmorhügel in Dhee Ayn", "Stämme der Ghamid und Zahran historisch ansässig"]
    }
  },
  {
    id: "tarut-cities-v2",
    type: "city",
    parent: "SA-04",
    coords: [50.0500, 26.5667],
    name: { de: "Tarut", hu: "Tárút", ro: "Tarut", en: "Tarut" },
    description: {
      de: "Eine der ältesten besiedelten Inseln im Persischen Golf, bekannt für ihre archäologischen Funde und die historische Burg.",
      hu: "A Perzsa-öböl egyik legrégebben lakott szigete, amely régészeti leleteiről és történelmi váráról ismert.",
      ro: "Una dintre cele mai vechi insule locuite din Golful Persic, cunoscută pentru descoperirile arheologice și castelul istoric.",
      en: "One of the oldest inhabited islands in the Persian Gulf, known for its archaeological discoveries and historical castle."
    },
    facts: {
      de: [
        "Die Tarut-Festung überblickt die dicht bebaute Altstadt.",
        "Die Insel ist durch Dammwege mit dem Festland verbunden."
      ],
      hu: [
        "A Tárút-erőd az óváros fölé magasodik.",
        "A szigetet töltésutak kötik össze a szárazfölddel."
      ],
      ro: [
        "Fortăreața Tarut domină orașul vechi dens construit.",
        "Insula este conectată de continent prin diguri."
      ],
      en: [
        "Tarut Castle overlooks the densely built old town.",
        "The island is connected to the mainland by causeways."
      ]
    },
    descriptionAdvanced: {
      de: "Die Insel Tarut liegt in der Bucht von Tarut im Persischen Golf, gegenüber der Stadt Qatif in der Ostprovinz, und ist mit rund 80.000 Einwohnern eines der am dichtesten besiedelten Gebiete Saudi-Arabiens. Die Insel zählt zu den ältesten dauerhaft bewohnten Orten der Arabischen Halbinsel mit archäologischen Spuren bis ins 5. Jahrtausend v. Chr. (Ubaid-Kultur), als hier ein wichtiger Hafen der Dilmun-Zivilisation lag. 1515 eroberten die Portugiesen unter Manuel Mascarenhas die Insel und errichteten an der Stelle einer älteren Burganlage die heutige Tarut-Festung, die sie bis 1551 hielten, bevor die Osmanen folgten. 1913 wurde Tarut durch Ibn Saud Teil des saudischen Reiches. Die Insel ist über mehrere Dammwege mit dem Festland verbunden und beherbergt traditionelle schiitische Gemeinden, die ihre eigenen Bräuche pflegen. Das Vorratsgut Lulu (eine Süßwasserquelle) bewässerte historisch die Palmenhaine."
    },
    factsAdvanced: {
      de: ["Rund 80.000 Einwohner auf der Insel Tarut", "Spuren der Ubaid-Kultur ab dem 5. Jahrtausend v. Chr.", "Wichtiger Dilmun-Hafen im 3. Jahrtausend v. Chr.", "Portugiesische Herrschaft von 1515 bis 1551", "Tarut-Festung 1515 von den Portugiesen errichtet", "Eingliederung ins saudische Reich durch Ibn Saud 1913", "Über mehrere Dammwege mit dem Festland verbunden", "Süßwasserquelle Lulu bewässerte historisch die Palmenhaine"]
    }
  },
  {
    id: "al-khobar-cities-v2",
    type: "city",
    parent: "SA-04",
    coords: [50.2083, 26.2833],
    name: { de: "Al-Chubar", hu: "Al-Hubar", ro: "Al Khobar", en: "Al Khobar" },
    description: {
      de: "Eine wohlhabende Handels- und Küstenstadt am Persischen Golf, die eng mit Bahrain verbunden ist.",
      hu: "Gazdag kereskedelmi és tengerparti város a Perzsa-öbölben, amely szoros kapcsolatban áll Bahreinnel.",
      ro: "Un oraș comercial și de coastă prosper la Golful Persic, având legături strânse cu Bahrain.",
      en: "A wealthy commercial and coastal city on the Persian Gulf that is closely connected to Bahrain."
    },
    facts: {
      de: [
        "Der King Fahd Causeway beginnt in dieser Stadt.",
        "Die Corniche-Promenade am Meer ist ein beliebtes Freizeitziel."
      ],
      hu: [
        "A Fahd Király Töltésút (Causeway) innen indul Bahrein felé.",
        "A tengerparti sétány (Corniche) népszerű szabadidős célpont."
      ],
      ro: [
        "Podul Regele Fahd (King Fahd Causeway) începe din acest oraș.",
        "Promenada Corniche de la mare este o destinație populară de agrement."
      ],
      en: [
        "The King Fahd Causeway starts in this city.",
        "The seaside Corniche is a popular leisure destination."
      ]
    },
    descriptionAdvanced: {
      de: "Al-Chubar liegt am Persischen Golf in der Ostprovinz Saudi-Arabiens, südlich von Dhahran und Dammam, und zählt rund 626.000 Einwohner. Bis zum Erdölfund 1938 war al-Chubar ein kleines Fischerdorf, das durch die Aktivitäten der Aramco zur modernen Geschäftsmetropole wuchs. Mit der Eröffnung des King Fahd Causeway am 25. November 1986 wurde al-Chubar über eine 25 Kilometer lange Brücken- und Dammverbindung mit dem Inselstaat Bahrain verbunden, was die Stadt zum wichtigen Tor zur Golfregion macht. Die Corniche-Promenade entlang der Bucht zählt zu den beliebtesten Freizeitorten der Ostprovinz. Während des Zweiten Golfkriegs traf am 25. Februar 1991 eine irakische Scud-Rakete eine US-Kaserne und tötete 28 amerikanische Soldaten. 1996 wurde der amerikanische Wohnkomplex Khobar Towers Ziel eines Anschlags mit 19 Toten."
    },
    factsAdvanced: {
      de: ["Rund 626.000 Einwohner am Persischen Golf", "King Fahd Causeway nach Bahrain seit 25. November 1986", "25 Kilometer lange Brücken- und Dammverbindung", "Wachstum nach dem Erdölfund 1938", "Scud-Raketenangriff am 25. Februar 1991 mit 28 toten US-Soldaten", "Anschlag auf Khobar Towers 1996 mit 19 Toten", "Corniche-Promenade als Hauptfreizeitort", "Wichtigstes Tor zur Golfregion über Bahrain"]
    }
  },
  {
    id: "al-khafji-cities-v2",
    type: "city",
    parent: "SA-04",
    coords: [48.5000, 28.4333],
    name: { de: "Al-Chafdschi", hu: "Al-Hafdzsi", ro: "Al Khafji", en: "Al Khafji" },
    description: {
      de: "Eine Grenzstadt im Nordosten zu Kuwait, die nach dem Fund von Erdöl in der neutralen Zone rapide wuchs.",
      hu: "Kuvait északkeleti határánál fekvő város, amely a semleges zónában talált kőolajnak köszönhetően indult gyors növekedésnek.",
      ro: "Un oraș de graniță în nord-est cu Kuweit, care a crescut rapid după descoperirea petrolului în zona neutră.",
      en: "A border city in the northeast with Kuwait that grew rapidly following the discovery of oil in the neutral zone."
    },
    facts: {
      de: [
        "Die Stadt erlebte während des Zweiten Golfkriegs schwere Kämpfe.",
        "Ihre Strände zählen zu den unberührtesten der Region."
      ],
      hu: [
        "A város a második öbölháború idején heves harcok színtere volt.",
        "Tengerpartjai a régió legérintetlenebb partszakaszai közé tartoznak."
      ],
      ro: [
        "Orașul a fost scena unor lupte grele în timpul Războiului din Golf.",
        "Plajele sale se numără printre cele mai curate din regiune."
      ],
      en: [
        "The city experienced heavy fighting during the Gulf War.",
        "Its beaches are among the most pristine in the region."
      ]
    },
    descriptionAdvanced: {
      de: "Al-Chafdschi liegt am Persischen Golf an der saudisch-kuwaitischen Grenze in der Ostprovinz und zählt rund 76.000 Einwohner. Die Stadt entstand 1957/58 mit dem Erdölfund in der saudisch-kuwaitischen Neutralen Zone, einem Sondergebiet, das 1922 mit dem Vertrag von Uqair zwischen Ibn Saud und dem britischen Hochkommissar in Bagdad geschaffen wurde, um die Beweidungsrechte der Stämme zu sichern. Die Aufteilung der Neutralen Zone wurde 1965 mit Saudi-Arabien und 1969 mit Kuwait vertraglich geregelt. Während des Zweiten Golfkriegs ereignete sich vom 29. Januar bis 1. Februar 1991 die Schlacht von al-Chafdschi, der erste größere Bodenkampf des Krieges, bei dem irakische Truppen die Stadt besetzten und durch saudisch-katar-amerikanische Streitkräfte zurückgeschlagen wurden. Heute fördert die Khafji Joint Operations rund 300.000 Barrel Rohöl pro Tag aus dem Wafra-Feld."
    },
    factsAdvanced: {
      de: ["Rund 76.000 Einwohner an der kuwaitischen Grenze", "Erdölfund in der Neutralen Zone 1957/58", "Vertrag von Uqair 1922 schuf die Neutrale Zone", "Aufteilung der Neutralen Zone 1965 (SA) und 1969 (KW)", "Schlacht von al-Chafdschi vom 29. Januar bis 1. Februar 1991", "Erster größerer Bodenkampf des Zweiten Golfkriegs", "Khafji Joint Operations fördern rund 300.000 Barrel Rohöl täglich", "Vergleichsweise unberührte Strände am Persischen Golf"]
    }
  },
  {
    id: "hafar-al-batin-cities-v2",
    type: "city",
    parent: "SA-04",
    coords: [45.9667, 28.4333],
    name: { de: "Hafar al-Batin", hu: "Hafar al-Bátin", ro: "Hafar Al Batin", en: "Hafar Al Batin" },
    description: {
      de: "Diese im Nordosten gelegene Wüstenstadt dient seit Jahrhunderten als Rastplatz für Pilger und Handelskarawanen auf dem Weg nach Mekka.",
      hu: "Ez az északkeleten fekvő sivatagi város évszázadok óta pihenőhely a Mekkába tartó zarándokok és karavánok számára.",
      ro: "Acest oraș din deșertul din nord-est servește de secole ca loc de odihnă pentru pelerinii și caravanele spre Mecca.",
      en: "This desert city in the northeast has served for centuries as a resting place for pilgrims and trade caravans heading to Mecca."
    },
    facts: {
      de: [
        "Sie liegt im ausgetrockneten Flussbett Wadi al-Batin.",
        "König Saud militärische Basis trug stark zur Stadtentwicklung bei."
      ],
      hu: [
        "A kiszáradt Vádi al-Bátin folyómederben terül el.",
        "Szaúd király katonai bázisa jelentősen hozzájárult a város fejlődéséhez."
      ],
      ro: [
        "Este situat în albia secată a râului Wadi al-Batin.",
        "Baza militară a Regelui Saud a contribuit mult la dezvoltarea orașului."
      ],
      en: [
        "It is located in the dried riverbed of Wadi al-Batin.",
        "King Saud's military base contributed heavily to the city's development."
      ]
    },
    descriptionAdvanced: {
      de: "Hafar al-Batin liegt im Wadi al-Batin im Nordosten Saudi-Arabiens, rund 90 Kilometer von der irakischen und kuwaitischen Grenze entfernt, und zählt rund 360.000 Einwohner. Der arabische Name Hafar (Brunnen) und Wadi al-Batin verweisen auf die alten, von Kalif Uthman ibn Affan im 7. Jahrhundert gegrabenen Brunnen, die die Karawanen auf dem Weg von Basra nach Mekka mit Wasser versorgten. Die Stadt liegt im trockenen Flussbett des Wadi al-Batin, das die historische Grenze zwischen den Stammesgebieten der Mutair und der Ajman markierte. Mit dem Aufbau der König-Khaled-Militärstadt (KKMC) in den 1980er Jahren, einer der größten Militärstädte Saudi-Arabiens, gewann Hafar al-Batin strategische Bedeutung als Hauptquartier der saudischen Nordregion. Während des Zweiten Golfkriegs 1990/91 war die Stadt zentraler Sammelpunkt der internationalen Koalitionstruppen, da von hier aus die Bodenoffensive zur Befreiung Kuwaits gestartet wurde."
    },
    factsAdvanced: {
      de: ["Rund 360.000 Einwohner im Wadi al-Batin", "Brunnen aus dem 7. Jahrhundert von Kalif Uthman gegraben", "Auf der historischen Karawanenroute Basra–Mekka", "König-Khaled-Militärstadt (KKMC) seit den 1980er Jahren", "Eine der größten Militärstädte Saudi-Arabiens", "Sammelpunkt der Koalitionstruppen 1990/91", "Etwa 90 Kilometer von der irakisch-kuwaitischen Grenze", "Stammesgrenze zwischen Mutair und Ajman"]
    }
  },
  {
    id: "unayzah-cities-v2",
    type: "city",
    parent: "SA-05",
    coords: [43.9744, 26.0855],
    name: { de: "Unaiza", hu: "Unajza", ro: "Unayzah", en: "Unayzah" },
    description: {
      de: "Die zweitgrößte Stadt in der Region Al Qasim ist für ihr kulturelles Erbe, Dattelfarmen und die jährlichen Festivals bekannt.",
      hu: "Az Al-Kaszím régió második legnagyobb városa, amely kulturális örökségéről, datolyatermeléséről és fesztiváljairól ismert.",
      ro: "Al doilea cel mai mare oraș din regiunea Al Qasim este cunoscut pentru moștenirea sa culturală, fermele de curmale și festivalurile anuale.",
      en: "The second largest city in the Al Qasim region is known for its cultural heritage, date farms, and annual festivals."
    },
    facts: {
      de: [
        "Die Stadt wird oft das \"Paris von Najd\" genannt.",
        "Sie pflegt alte literarische und poetische Traditionen."
      ],
      hu: [
        "A várost gyakran nevezik \"Nadzsd Párizsának\" is.",
        "Nagy gondot fordít az irodalmi és költészeti hagyományok ápolására."
      ],
      ro: [
        "Orașul este adesea numit \"Parisul din Najd\".",
        "Menține tradiții literare și poetice vechi."
      ],
      en: [
        "The city is often called the \"Paris of Najd\".",
        "It maintains old literary and poetic traditions."
      ]
    },
    descriptionAdvanced: {
      de: "Unaiza ist die zweitgrößte Stadt der Region al-Qasim und zählt rund 165.000 Einwohner. Die Stadt liegt auf rund 720 Metern Höhe im Najd, etwa 30 Kilometer südwestlich von Buraida und rund 350 Kilometer nordwestlich von Riad. Im 19. Jahrhundert war Unaiza ein wichtiger Stopp der Karawanenrouten und ein bedeutendes Handelszentrum, wodurch ihre Kaufleute weit über die Region hinaus bekannt wurden. Wegen ihres relativen Wohlstands, ihrer Aufgeschlossenheit für Bildung und ihrer literarischen Tradition wurde sie als Paris von Najd bezeichnet. Die Eingliederung in das saudische Reich erfolgte 1906 unter Ibn Saud nach dem Sieg über die Raschidi. Die Region ist berühmt für ihre Datteln (besonders die Sorte Sukkari) und ihre traditionelle Lehmarchitektur, die in dem restaurierten al-Bassam-Haus aus dem 19. Jahrhundert beispielhaft erhalten ist. Aus Unaiza stammen zahlreiche bekannte saudische Dichter und Religionsgelehrte."
    },
    factsAdvanced: {
      de: ["Rund 165.000 Einwohner, zweitgrößte Stadt al-Qasims", "Auf rund 720 Metern Höhe im Najd", "Spitzname Paris von Najd wegen literarischer Tradition", "Eingliederung ins saudische Reich 1906 unter Ibn Saud", "Berühmt für die Dattelsorte Sukkari", "Al-Bassam-Haus aus dem 19. Jahrhundert restauriert", "Wichtige Karawanenstation im 19. Jahrhundert", "30 Kilometer südwestlich von Buraida"]
    }
  },
  {
    id: "al-majmaah-cities-v2",
    type: "city",
    parent: "SA-01",
    coords: [45.3333, 25.9000],
    name: { de: "Al-Madschma'a", hu: "Al-Madzsma'a", ro: "Al Majma'ah", en: "Al Majma'ah" },
    description: {
      de: "Eine historische Siedlung nördlich von Riad, die ehemals als administratives Zentrum der Najd-Region diente.",
      hu: "Történelmi település Rijádtól északra, amely egykor a Nadzsd régió adminisztratív központjaként működött.",
      ro: "O așezare istorică la nord de Riad, care a servit anterior ca centru administrativ al regiunii Najd.",
      en: "A historic settlement north of Riyadh that formerly served as the administrative center of the Najd region."
    },
    facts: {
      de: [
        "Ein restauriertes Fort wacht über die Palmenhaine der Stadt.",
        "Die Universität Majmaah ist ein wichtiger lokaler Bildungsträger."
      ],
      hu: [
        "Egy felújított erődítmény őrködik a város pálmaligetei felett.",
        "A Majma'ah Egyetem fontos helyi oktatási intézmény."
      ],
      ro: [
        "Un fort restaurat veghează asupra plantațiilor de palmieri din oraș.",
        "Universitatea Majmaah este un important furnizor local de educație."
      ],
      en: [
        "A restored fort watches over the city's palm groves.",
        "Majmaah University is an important local educational institution."
      ]
    },
    descriptionAdvanced: {
      de: "Al-Madschma'a liegt rund 180 Kilometer nordwestlich von Riad in der Provinz Riad und zählt rund 133.000 Einwohner. Die historische Stadt ist Hauptort der Region Sudair und war im 18. und 19. Jahrhundert eines der wichtigsten Verwaltungszentren der Najd-Region. Aus al-Madschma'a stammt der bedeutende saudische Religionsgelehrte und Geschichtsschreiber Uthman ibn Bischr (1795–1873), Autor der grundlegenden Chronik Unwan al-Madschd fi Tarich Najd zur Geschichte des ersten saudischen Staates. Mit der Konsolidierung des saudischen Reiches unter Ibn Saud zu Beginn des 20. Jahrhunderts wurde die Stadt fest in das wachsende Königreich integriert. Die restaurierte Festung al-Madschma'a aus dem 19. Jahrhundert ist heute Museum. Die 2009 gegründete Universität al-Madschma'a ist eine der jüngeren staatlichen Universitäten Saudi-Arabiens. Die Region ist berühmt für ihre Dattelpalmenhaine und das traditionelle Najdi-Handwerk."
    },
    factsAdvanced: {
      de: ["Rund 133.000 Einwohner, 180 Kilometer nordwestlich von Riad", "Hauptort der Region Sudair", "Geburtsort des Historikers Uthman ibn Bischr (1795 bis 1873)", "Festung al-Madschma'a aus dem 19. Jahrhundert als Museum", "Universität al-Madschma'a seit 2009", "Im 18. und 19. Jahrhundert wichtiges Verwaltungszentrum", "Tradition der Najdi-Handwerks", "Umgeben von Dattelpalmenhainen"]
    }
  }
];
