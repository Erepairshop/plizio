import type { POI } from "./poi";

export const poiExtraBoliviaCitiesV2: POI[] = [
  {
    id: "santa-cruz-de-la-sierra-cities-v2",
    type: "city",
    parent: "BO-S",
    coords: [-63.1812, -17.7833],
    name: { de: "Santa Cruz de la Sierra", hu: "Santa Cruz de la Sierra", ro: "Santa Cruz de la Sierra", en: "Santa Cruz de la Sierra" },
    description: {
      de: "Die bevölkerungsreichste Stadt Boliviens und das wichtigste Wirtschaftszentrum des Landes, gelegen im tropischen Tiefland.",
      hu: "Bolívia legnépesebb városa és legfőbb gazdasági központja, amely a trópusi alföldön fekszik.",
      ro: "Cel mai populat oraș din Bolivia și principalul centru economic, situat în câmpiile tropicale.",
      en: "The most populous city in Bolivia and its main economic hub, located in the tropical lowlands."
    },
    facts: {
      de: ["Größte Stadt Boliviens.", "Wirtschaftliches Zentrum.", "Tropisches Klima."],
      hu: ["Bolívia legnagyobb városa.", "Gazdasági motor.", "Trópusi klíma jellemzi."],
      ro: ["Cel mai mare oraș bolivian.", "Centru comercial major.", "Are climă tropicală."],
      en: ["Largest city in Bolivia.", "Major economic center.", "Tropical climate."]
    },
    descriptionAdvanced: {
      de: "",
      hu: "Santa Cruz de la Sierra Bolívia leggyorsabban fejlődő nagyvárosa, amely az ország gazdasági motorjaként funkcionál. A trópusi alföldön elterülő település egyedülálló, koncentrikus gyűrűs városszerkezetével tűnik ki, amely az óvárosból kiindulva tágul kifelé. A térség sajátos 'camba' kultúrája és a párás, trópusi klíma éles kontrasztban áll az Andok magashegyi városaival. Santa Cruz ma az agrárüzlet, az olaj- és gázipar központja, egyben kapu a jezsuita missziók és az Amazonas-medence felé. Földrajz K6 — trópusi öv és gazdasági régiók.",
      ro: "",
      en: "Santa Cruz de la Sierra is a vibrant, modern metropolis that has experienced explosive growth over the last few decades, becoming the economic engine of Bolivia. Located in the eastern lowlands, it offers a stark contrast to the high-altitude cities of the Andes with its humid tropical climate and relaxed, 'camba' culture. The city is laid out in a unique concentric ring pattern, with the historic center at its heart and modern commercial districts expanding outwards. Historically, it was founded by Spanish explorers coming from Paraguay, and today it serves as a major hub for agribusiness, oil, and gas. Visitors enjoy its lush botanical gardens, lively nightlife, and its status as the gateway to the Jesuit Missions and the Amazon basin."
    },
    factsAdvanced: {
      de: [],
      hu: [
        "A világ egyik leggyorsabban növekvő városa, amely Bolívia GDP-jének több mint 30%-át adja.",
        "Egyedi várostervezése kilenc koncentrikus körön vagy 'gyűrűn' alapul.",
        "1561. február 26-án alapította Ñuflo de Chaves spanyol felfedező.",
        "A 'Gyűrűk Városaként' ismert, a bolíviai trópusi alföldi kultúra szíve."
      ],
      ro: [],
      en: [
        "It is one of the fastest-growing cities in the world and produces over 30% of Bolivia's GDP.",
        "The city's design is based on a series of nine concentric 'rings' or belts.",
        "It was founded on February 26, 1561, by Ñuflo de Chaves.",
        "Santa Cruz is known as the 'City of the Rings' and is the heart of Bolivia's tropical lowland culture."
      ]
    }
  },
  {
    id: "el-alto-cities-v2",
    type: "city",
    parent: "BO-L",
    coords: [-68.1500, -16.5000],
    name: { de: "El Alto", hu: "El Alto", ro: "El Alto", en: "El Alto" },
    description: {
      de: "Eine der höchstgelegenen Großstädte der Welt, die sich auf dem Altiplano direkt über La Paz erstreckt.",
      hu: "A világ egyik legmagasabban fekvő nagyvárosa, amely az Altiplano fennsíkján, közvetlenül La Paz felett terül el.",
      ro: "Unul dintre cele mai înalte orașe mari din lume, situat pe platoul Altiplano, chiar deasupra La Paz.",
      en: "One of the highest major cities in the world, stretching across the Altiplano just above La Paz."
    },
    facts: {
      de: ["Über 4.000 Meter hoch.", "Sehr schnell wachsend.", "Eigener Flughafen."],
      hu: ["Több mint 4000 méter magasan van.", "Gyorsan növekvő népesség.", "Itt található a nemzetközi repülőtér."],
      ro: ["Peste 4.000 de metri altitudine.", "Populație în creștere rapidă.", "Găzduiește aeroportul internațional."],
      en: ["Over 4,000 meters in elevation.", "Rapidly growing population.", "Home to the international airport."]
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "",
      en: "El Alto is a bustling, high-altitude metropolis that sits on the Altiplano plateau, overlooking the valley of La Paz. Originally a suburb of the capital, it achieved city status in 1985 and has since become one of the most populous and politically influential cities in Bolivia. El Alto is famous for its strong indigenous identity, predominantly Aymara, and its vibrant street markets, including the massive 16 de Julio market. The city is also the birthplace of 'Neo-Andean' architecture, characterized by colorful, extravagant buildings known as 'cholets.' Despite its harsh climate and thin air at 4,150 meters, El Alto is a center of relentless energy, commerce, and social activism that shapes the nation's future."
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [],
      en: [
        "El Alto is the highest major city in the world with over one million inhabitants.",
        "The city is home to El Alto International Airport, the main gateway to La Paz.",
        "It is famous for 'Lucha Libre de Cholitas,' traditional wrestling matches involving indigenous women.",
        "The city is connected to La Paz by the world's most extensive urban cable car system, Mi Teleférico."
      ]
    }
  },
  {
    id: "la-paz-cities-v2",
    type: "state-capital",
    parent: "BO-L",
    coords: [-68.1193, -16.4897],
    name: { de: "La Paz", hu: "La Paz", ro: "La Paz", en: "La Paz" },
    description: {
      de: "Der Regierungssitz Boliviens, spektakulär in einer tiefen Schlucht gelegen und mit einem riesigen Seilbahnnetz ausgestattet.",
      hu: "Bolívia kormányzati székhelye, amely egy mély kanyonban fekszik, és kiterjedt drótkötélpálya-hálózattal rendelkezik.",
      ro: "Sediul guvernului bolivian, situat spectaculos într-un canion și dotat cu o rețea uriașă de telecabine.",
      en: "The administrative capital of Bolivia, spectacularly set in a deep canyon and famous for its extensive cable car network."
    },
    facts: {
      de: ["Höchster Regierungssitz der Welt.", "Bekannt für die Mi Teleférico.", "In einem Talkessel gelegen."],
      hu: ["A világ legmagasabb kormányzati központja.", "Híres a Mi Teleférico rendszerről.", "Egy völgykatlanban épült."],
      ro: ["Cea mai înaltă capitală administrativă.", "Renumit pentru Mi Teleférico.", "Construit într-un canion adânc."],
      en: ["Highest administrative capital.", "Famous for the Mi Teleférico.", "Located in a steep canyon."]
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "",
      en: "La Paz, officially known as Nuestra Señora de La Paz, is the stunning administrative capital of Bolivia and the highest capital city in the world. It is built into a bowl-like canyon carved by the Choqueyapu River, with neighborhoods clinging to the steep slopes and the majestic Mount Illimani providing a dramatic backdrop. The city is a fascinating blend of traditional Andean culture and modern urban life, where ancient markets like the Witches' Market exist alongside high-rise buildings. Historically, it was founded in 1548 as a resting point between the silver mines of Potosí and the Pacific coast. Today, La Paz is globally recognized for its unique topography and its efficient network of colorful cable cars that glide over the city, offering some of the most spectacular urban views on Earth."
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [],
      en: [
        "The city's elevation ranges from 3,250 meters in the lower valleys to 4,100 meters on the edges of the plateau.",
        "The Witches' Market (Mercado de las Brujas) sells traditional items for Aymara rituals, including dried llama fetuses.",
        "The San Pedro prison, located in the city center, is famous for its unique self-governing community of inmates.",
        "Calle Jaén is one of the city's few remaining streets with well-preserved colonial architecture and several museums."
      ]
    }
  },
  {
    id: "cochabamba-cities-v2",
    type: "state-capital",
    parent: "BO-C",
    coords: [-66.1568, -17.3895],
    name: { de: "Cochabamba", hu: "Cochabamba", ro: "Cochabamba", en: "Cochabamba" },
    description: {
      de: "Bekannt als das gastronomische Zentrum Boliviens, gelegen in einem fruchtbaren Tal mit angenehmem Klima.",
      hu: "Bolívia gasztronómiai központjaként ismert város, amely egy termékeny völgyben, kellemes éghajlattal büszkélkedhet.",
      ro: "Cunoscut ca centrul gastronomic al Boliviei, situat într-o vale fertilă cu o climă foarte plăcută.",
      en: "Known as the gastronomic heart of Bolivia, located in a fertile valley with a highly pleasant climate."
    },
    facts: {
      de: ["Stadt des ewigen Frühlings.", "Cristo de la Concordia Statue.", "Kulinarische Hauptstadt."],
      hu: ["Az örök tavasz városa.", "Itt áll a Cristo de la Concordia szobor.", "Kulináris főváros."],
      ro: ["Orașul primăverii eterne.", "Statuia Cristo de la Concordia.", "Capitală culinară."],
      en: ["City of eternal spring.", "Cristo de la Concordia statue.", "Culinary capital."]
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "",
      en: "Cochabamba is often celebrated as the 'City of Eternal Spring' due to its mild and temperate climate throughout the year. Located in a fertile valley in the heart of Bolivia, it is the country's undisputed culinary capital, famous for its abundant produce and diverse traditional dishes like 'Silpancho' and 'Pique Macho.' The city is dominated by the massive Cristo de la Concordia statue, which stands atop San Pedro Hill and is one of the largest statues of Jesus Christ in the world. Historically, the region was an important agricultural center for the Inca Empire and later for the Spanish colonies. Today, Cochabamba is a major educational and commercial hub, known for its relaxed atmosphere, vibrant street life, and the sprawling 'La Cancha' market, one of the largest open-air markets in South America."
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [],
      en: [
        "The Cristo de la Concordia is taller than Rio de Janeiro's Christ the Redeemer.",
        "The city gained international fame in 2000 during the 'Cochabamba Water War,' a successful protest against water privatization.",
        "Cochabamba is home to the Universidad Mayor de San Simón, one of Bolivia's most prestigious public universities.",
        "The historic Palacio Portales was built by the 'Tin King' Simón Patiño, although he never lived in it."
      ]
    }
  },
  {
    id: "oruro-cities-v2",
    type: "state-capital",
    parent: "BO-O",
    coords: [-67.1167, -17.9667],
    name: { de: "Oruro", hu: "Oruro", ro: "Oruro", en: "Oruro" },
    description: {
      de: "Eine hochgelegene Bergbaustadt, die weltweit für ihren farbenfrohen und traditionellen Karneval berühmt ist.",
      hu: "Magasan fekvő bányászváros, amely világszerte híres a színpompás és hagyományőrző karneváljáról.",
      ro: "Un oraș minier de mare altitudine, faimos în întreaga lume pentru carnavalul său tradițional colorat.",
      en: "A high-altitude mining city globally famous for its colorful and traditional annual carnival."
    },
    facts: {
      de: ["Berühmt für den Karneval von Oruro.", "Wichtige Bergbaustadt.", "Liegt auf über 3.700 Metern."],
      hu: ["Híres az orurói karneválról.", "Fontos bányászati központ.", "Több mint 3700 méteren fekszik."],
      ro: ["Faimos pentru Carnavalul de la Oruro.", "Centru minier important.", "Situat la peste 3.700 metri."],
      en: ["Famous for the Oruro Carnival.", "Important mining center.", "Located above 3,700 meters."]
    },
    descriptionAdvanced: {
      de: "",
      hu: "Oruro egy zord bányászváros, amely 3709 méteres magasságban fekszik az Altiplano északi peremén. Bár a város az ón-, ezüst- és rézbányászat egyik központja, világszerte az UNESCO által is elismert, monumentális karneváljáról híres. Az 'Oruro-i karnevál' központi eleme a 'Diablada' tánc, amely a jó és a rossz küzdelmét szimbolizálja, és mélyen gyökerezik az őslakos és a katolikus hagyományokban egyaránt. Történelmileg fontos állomása volt az első bolíviai vasútvonalnak, amely összekötötte a felföldet a Csendes-óceánnal, ma pedig a város az andoki ellenálló képesség és kulturális büszkeség jelképe. Történelem K8 — UNESCO világörökség és andoki hagyományok.",
      ro: "",
      en: "Oruro is a rugged mining city situated at a chilling 3,709 meters on the northern edge of the Altiplano. While it serves as a vital center for the mining of tin, silver, and copper, it is best known globally for the 'Carnaval de Oruro,' a massive religious and folkloric festival declared a Masterpiece of the Oral and Intangible Heritage of Humanity by UNESCO. The festival features the iconic 'Diablada' dance, which symbolizes the struggle between good and evil, rooted in both indigenous and Catholic traditions. Historically, Oruro was a key station on the first railway in Bolivia, connecting the highlands to the Pacific coast. Today, the city remains a symbol of Andean resilience and cultural pride, drawing tens of thousands of visitors every year to witness its spectacular parades and devotion to the Virgin of the Socavón."
    },
    factsAdvanced: {
      de: [],
      hu: [
        "Az Oruro-i karnevál több mint 50 tánccsoportot vonultat fel, akik 20 órán keresztül folyamatosan lépnek fel.",
        "A város az Uru Uru-tó és a zsugorodó Poopó-tó közelében található.",
        "Oruro-t 1606-ban alapították Real Villa de Don Felipe de Austria néven, ezüstbányászati központként.",
        "A Socavón-szentély egy ősi ezüstbánya bejárata fölé épült."
      ],
      ro: [],
      en: [
        "The Carnaval de Oruro features over 50 groups of dancers performing for 20 hours straight.",
        "The city is located near Lake Uru Uru and the shrinking Lake Poopó.",
        "Oruro was founded in 1606 as a silver mining center named Real Villa de Don Felipe de Austria.",
        "The Santuario del Socavón is built over the entrance to an ancient silver mine."
      ]
    }
  },
  {
    id: "sucre-cities-v2",
    type: "state-capital",
    parent: "BO-H",
    coords: [-65.2627, -19.0333],
    name: { de: "Sucre", hu: "Sucre", ro: "Sucre", en: "Sucre" },
    description: {
      de: "Die konstitutionelle Hauptstadt Boliviens, berühmt für ihre gut erhaltene koloniale weiße Architektur.",
      hu: "Bolívia alkotmányos fővárosa, amely híres a kiválóan megőrzött fehér gyarmati építészetéről.",
      ro: "Capitala constituțională a Boliviei, faimoasă pentru arhitectura sa colonială albă bine conservată.",
      en: "The constitutional capital of Bolivia, famous for its beautifully preserved white colonial architecture."
    },
    facts: {
      de: ["Konstitutionelle Hauptstadt.", "Die weiße Stadt.", "UNESCO-Weltkulturerbe."],
      hu: ["Alkotmányos főváros.", "A fehér városként is ismert.", "UNESCO Világörökségi helyszín."],
      ro: ["Capitală constituțională.", "Cunoscut ca Orașul Alb.", "Sit al Patrimoniului Mondial UNESCO."],
      en: ["Constitutional capital.", "Known as the White City.", "UNESCO World Heritage site."]
    },
    descriptionAdvanced: {
      de: "",
      hu: "Sucre, a 'Fehér Város', Bolívia alkotmányos fővárosa és a spanyol gyarmati építészet egyik gyöngyszeme. A város történelmi központja UNESCO Világörökségi helyszín, amelyet fehérre meszelt falak, vörös cseréptetők és elegáns terek jellemeznek. Történelmileg 'La Plata'-ként volt ismert, közelsége a híres Potosí ezüstbányáihoz a spanyol birodalom egyik szellemi és kulturális központjává tette. Itt hirdették ki hivatalosan Bolívia függetlenségét 1825-ben, a Casa de la Libertad épületében. Ma jogi és igazságügyi központ, amely otthont ad a Legfelsőbb Bíróságnak is. Földrajz K7 — gyarmati építészet és világtörténelem.",
      ro: "",
      en: "Sucre, often referred to as the 'White City,' is the constitutional capital of Bolivia and a jewel of colonial Spanish architecture. Nestled in a valley at a comfortable altitude, the city's historic center is a UNESCO World Heritage site, characterized by pristine white-washed buildings, red-tiled roofs, and elegant squares. Historically, it was named 'La Plata' due to its proximity to the silver mines of Potosí and became a major intellectual and cultural center of the Spanish Empire in the Americas. Sucre is also the place where Bolivia's independence was officially declared in 1825 at the Casa de la Libertad. Today, it remains a major legal and judicial hub, housing the Supreme Court, and is a popular destination for students and travelers seeking to learn Spanish in a refined and peaceful environment."
    },
    factsAdvanced: {
      de: [],
      hu: [
        "Sucre-nek négy hivatalos neve is volt: La Plata, Charcas, Ciudad Blanca és végül Sucre.",
        "Az 1624-ben alapított Szent Ferenc Xavér Egyetem az Újvilág egyik legrégebbi felsőoktatási intézménye.",
        "A közeli Cal Orck'o lelőhelyen található a világ legnagyobb dinoszaurusz lábnyom-gyűjteménye egyetlen mészkőfalon.",
        "A város híres kiváló minőségű csokoládéiról és a közeli Jalq'a közösségek hagyományos szövési technikáiról."
      ],
      ro: [],
      en: [
        "Sucre has four different official names: La Plata, Charcas, Ciudad Blanca, and finally Sucre.",
        "The University of Saint Francis Xavier, founded in 1624, is one of the oldest in the New World.",
        "The nearby Cal Orck'o site features the world's largest collection of dinosaur footprints on a single limestone wall.",
        "The city is known for its high-quality chocolates and traditional weaving techniques from the nearby Jalq'a communities."
      ]
    }
  },
  {
    id: "tarija-cities-v2",
    type: "state-capital",
    parent: "BO-T",
    coords: [-64.7296, -21.5355],
    name: { de: "Tarija", hu: "Tarija", ro: "Tarija", en: "Tarija" },
    description: {
      de: "Das Herz der bolivianischen Weinproduktion im Süden des Landes, bekannt für ihr mildes Klima und entspannte Atmosphäre.",
      hu: "A bolíviai bortermelés szíve az ország déli részén, amely enyhe klímájáról és nyugodt légköréről ismert.",
      ro: "Inima producției de vin din Bolivia, în sudul țării, recunoscută pentru clima blândă și atmosfera relaxată.",
      en: "The heart of Bolivian wine production in the south, known for its mild climate and relaxed atmosphere."
    },
    facts: {
      de: ["Zentrum des Weinbaus.", "Südliche Metropole.", "Mediterranes Klima."],
      hu: ["A borászat központja.", "Déli nagyváros.", "Mediterrán jellegű klíma."],
      ro: ["Centrul viticulturii boliviene.", "Metropolă sudică.", "Climă de tip mediteranean."],
      en: ["Center of wine making.", "Southern metropolis.", "Mediterranean-like climate."]
    },
    descriptionAdvanced: {
      de: "",
      hu: "Tarija egy elbűvölő dél-bolíviai város, amely mediterrán jellegű éghajlatáról, buja völgyeiről és nyugodt élettempójáról híres. A spanyol ihletésű öröksége miatt gyakran 'bolíviai Andalúziának' is nevezik, emellett az ország magasan fekvő borainak és a singani párlat gyártásának központja. A környező Santa Ana és Valle de la Concepción völgyekben festői szőlőültetvények találhatók, amelyek a világ legmagasabban termelt szőlőfajtáinak adnak otthont. Történelmileg az Andok és a Rio de la Plata közötti gyarmati kereskedelmi útvonalak fontos állomása volt. Ma a város stratégiai kapuja Bolívia hatalmas földgázkészleteinek a Chaco-régióban, hagyományos mezőgazdasági gyökereit összekapcsolva egy modern, energiatermelésre épülő gazdasággal. Földrajz K7 — mezőgazdasági régiók és gazdasági erőforrások.",
      ro: "",
      en: "Tarija is a charming city in southern Bolivia, known for its Mediterranean-like climate, lush valleys, and laid-back pace of life. Often called the 'Bolivian Andalusia' because of its Spanish-inspired heritage, it is the center of the country's high-altitude wine and singani production. The surrounding valleys of Santa Ana and Valle de la Concepción are home to picturesque vineyards that produce some of the highest-grown grapes in the world. Historically, Tarija was an important outpost on the colonial trade routes between the Andes and the Rio de la Plata. Today, it is also the strategic gateway to Bolivia's massive natural gas reserves in the Chaco region, combining its traditional agricultural roots with a modern energy-driven economy."
    },
    factsAdvanced: {
      de: [],
      hu: [
        "A város klímája miatt egész évben kellemes hőmérséklet jellemzi, amit 'örök tavasznak' is neveznek.",
        "A Tarija környéki borászatok a világ legmagasabb tengerszint feletti magasságban fekvő ültetvényei közé tartoznak.",
        "A 'Singani' egy helyi, szőlőből készült párlat, amely nemzeti italnak számít Bolíviában.",
        "Tarija híres a hagyományos 'Chapaco' kultúráról, amelyet zenés-táncos fesztiválok jellemeznek."
      ],
      ro: [],
      en: [
        "The city enjoys mild temperatures year-round, often described as 'eternal spring.'",
        "The vineyards around Tarija are among the highest-altitude wine-growing regions in the world.",
        "'Singani' is a local spirit made from muscat of Alexandria grapes and is considered Bolivia's national drink.",
        "Tarija is famous for its traditional 'Chapaco' culture, characterized by vibrant music and dance festivals."
      ]
    }
  },
  {
    id: "potosi-cities-v2",
    type: "state-capital",
    parent: "BO-P",
    coords: [-65.7531, -19.5836],
    name: { de: "Potosí", hu: "Potosí", ro: "Potosí", en: "Potosí" },
    description: {
      de: "Eine der höchstgelegenen Städte der Welt am Fuße des Cerro Rico, historisch berühmt für ihren enormen Silberreichtum.",
      hu: "A világ egyik legmagasabban fekvő városa a Cerro Rico lábánál, amely történelmileg az óriási ezüstvagyonáról híres.",
      ro: "Unul dintre cele mai înalte orașe din lume, la baza Cerro Rico, faimos istoric pentru bogăția sa enormă de argint.",
      en: "One of the highest cities in the world at the foot of Cerro Rico, historically famous for its massive silver wealth."
    },
    facts: {
      de: ["Liegt auf über 4.000 m.", "Reiche Silberminen-Geschichte.", "Cerro Rico prägt das Stadtbild."],
      hu: ["Több mint 4000 méteren van.", "Gazdag ezüstbányászati múlt.", "A Cerro Rico hegy uralja a látképet."],
      ro: ["La peste 4.000 m altitudine.", "Istorie bogată în minerit de argint.", "Cerro Rico domină peisajul."],
      en: ["Located above 4,000 m.", "Rich silver mining history.", "Cerro Rico mountain dominates."]
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "",
      en: "Potosí is a city of immense historical and tragic significance, perched at a staggering 4,090 meters in the shadow of the Cerro Rico (Rich Hill). During the 16th and 17th centuries, it was one of the largest and wealthiest cities in the world, as its mountain yielded unimaginable quantities of silver that fueled the global economy and the Spanish Empire. However, this wealth came at a terrible human cost, with millions of indigenous and African people perishing in the brutal conditions of the mines. The city's colonial center is remarkably well-preserved and is a UNESCO World Heritage site, featuring grandiose churches and the massive Casa de la Moneda (Royal Mint). Today, Potosí remains a hard-working mining town, and the Cerro Rico, though heavily depleted, continues to be mined for tin, zinc, and silver by traditional cooperatives."
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [],
      en: [
        "In the 1600s, Potosí was the most populous city in the Western Hemisphere, surpassing even London and Paris.",
        "The expression 'vale un Potosí' (worth a Potosí) is still used in Spanish to describe something of immense value.",
        "The city's altitude makes it one of the highest urban centers on the planet, with very cold nights even in summer.",
        "Traditional miners' rituals include offerings to 'El Tío,' the spiritual master of the underworld who is believed to protect the workers."
      ]
    }
  },
  {
    id: "sacaba-cities-v2",
    type: "city",
    parent: "BO-C",
    coords: [-66.0400, -17.4000],
    name: { de: "Sacaba", hu: "Sacaba", ro: "Sacaba", en: "Sacaba" },
    description: {
      de: "Eine schnell wachsende Nachbarstadt von Cochabamba, die für ihre landwirtschaftliche Produktion bekannt ist.",
      hu: "Cochabamba gyorsan növekvő szomszédvárosa, amely jelentős mezőgazdasági termeléséről ismert.",
      ro: "Un oraș învecinat cu Cochabamba, cu o creștere rapidă, cunoscut pentru producția sa agricolă.",
      en: "A rapidly growing neighboring city of Cochabamba, known for its agricultural output."
    },
    facts: {
      de: ["Zweitgrößte Stadt in Cochabamba.", "Wichtiger Agrarstandort.", "Teil der Metropolregion."],
      hu: ["Cochabamba megye második legnagyobb városa.", "Fontos mezőgazdasági terület.", "A metropolisz övezet része."],
      ro: ["Al doilea oraș ca mărime din Cochabamba.", "Zonă agricolă importantă.", "Parte a zonei metropolitane."],
      en: ["Second largest city in Cochabamba.", "Important agricultural area.", "Part of the metropolitan region."]
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "",
      en: "Sacaba is the second-most populous city in the Cochabamba Department and a vital part of the region's expanding metropolitan area. Historically, it has been an essential agricultural hub, serving as a primary supplier of corn, potatoes, and vegetables to the city of Cochabamba. The city has experienced significant industrial and urban growth in recent decades, attracting thousands of migrants from the highlands seeking better economic opportunities in the fertile valley. Sacaba is also known for its strong culinary traditions, particularly its traditional Sunday markets where locals and visitors enjoy typical dishes from the valley. Despite its modernization, it maintains its role as a key logistical and commercial link between the central valleys and the tropical lowlands to the east."
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [],
      en: [
        "Sacaba is home to many 'chicherías,' traditional establishments that produce and serve Chicha, an ancient Andean corn beer.",
        "The city holds the 'Feria del Chicharrón' annually, celebrating its most famous local pork dish.",
        "It is situated at an elevation of approximately 2,720 meters.",
        "Sacaba has become a major center for small and medium-scale manufacturing in the department."
      ]
    }
  },
  {
    id: "quillacollo-cities-v2",
    type: "city",
    parent: "BO-C",
    coords: [-66.2833, -17.4000],
    name: { de: "Quillacollo", hu: "Quillacollo", ro: "Quillacollo", en: "Quillacollo" },
    description: {
      de: "Berühmt für das Fest der Jungfrau von Urkupiña, ein wichtiger religiöser und kommerzieller Knotenpunkt.",
      hu: "Az Urkupiña-i Szűz ünnepéről híres város, amely fontos vallási és kereskedelmi csomópont is egyben.",
      ro: "Faimos pentru festivalul Fecioarei de la Urkupiña, un important centru religios și comercial.",
      en: "Famous for the Festival of the Virgin of Urkupiña, acting as a major religious and commercial hub."
    },
    facts: {
      de: ["Heimat der Virgen de Urkupiña.", "Großer Markt für lokale Güter.", "Liegt nahe Cochabamba."],
      hu: ["A Virgen de Urkupiña otthona.", "Nagy piac a helyi termékeknek.", "Cochabamba közelében található."],
      ro: ["Sediul feciioarei din Urkupiña.", "Piață mare pentru bunuri locale.", "Situat lângă Cochabamba."],
      en: ["Home of the Virgin of Urkupiña.", "Large market for local goods.", "Located near Cochabamba."]
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "",
      en: "Quillacollo is a bustling commercial and religious center located just west of Cochabamba. It is most famous for hosting the 'Virgen de Urkupiña' festival every August, which is one of the largest and most significant religious pilgrimages in Bolivia, drawing nearly a million people. The festival is a vibrant showcase of Andean folklore, with thousands of dancers in elaborate costumes performing for days. Beyond its religious importance, Quillacollo is a major marketplace for agricultural products and textiles, serving as a vital trade hub for the communities of the surrounding valleys. Historically, it was a core area for the cultivation of maize during the Inca Empire, and today it remains a key driver of the regional economy and a symbol of hybrid religious devotion."
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [],
      en: [
        "The name 'Urkupiña' comes from a Quechua phrase meaning 'she is already on the hill,' referring to a legendary sighting of the Virgin Mary.",
        "Pilgrims often perform a ritual of breaking stones from a nearby hill, which they take home as a symbol of the wealth they hope the Virgin will provide.",
        "Quillacollo is one of the fastest-growing urban centers in Bolivia.",
        "The city is surrounded by some of the most productive agricultural land in the department."
      ]
    }
  },
  {
    id: "montero-cities-v2",
    type: "city",
    parent: "BO-S",
    coords: [-63.2505, -17.3387],
    name: { de: "Montero", hu: "Montero", ro: "Montero", en: "Montero" },
    description: {
      de: "Das landwirtschaftliche Herz des Departamentos Santa Cruz, besonders bekannt für den großflächigen Zuckerrohranbau.",
      hu: "Santa Cruz megye mezőgazdasági központja, amely különösen a kiterjedt cukornádtermesztéséről ismert.",
      ro: "Inima agricolă a departamentului Santa Cruz, cunoscută în special pentru cultivarea pe scară largă a trestiei de zahăr.",
      en: "The agricultural heart of the Santa Cruz department, especially known for large-scale sugarcane cultivation."
    },
    facts: {
      de: ["Zentrum der Zuckerproduktion.", "Wichtige Agrarstadt.", "Sehr heißes Klima."],
      hu: ["A cukortermelés központja.", "Jelentős agrárváros.", "Nagyon meleg az éghajlata."],
      ro: ["Centrul producției de zahăr.", "Oraș agricol important.", "Climă foarte caldă."],
      en: ["Center of sugar production.", "Important agricultural town.", "Very hot climate."]
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "",
      en: "Montero is a major city in the tropical lowlands of Santa Cruz, situated about 50 kilometers north of the departmental capital. It is recognized as the agricultural powerhouse of the region, primarily due to its massive production of sugarcane, cotton, and soy. The city is home to the Guabirá sugar mill, one of the largest and most important industrial facilities in the country. Montero has grown rapidly into a vital commercial and logistical hub, connecting the agricultural production zones with the rest of Bolivia and international markets. The climate is intensely tropical, with high humidity and heat, which supports the year-round intensive farming that characterizes the area's landscape and economy."
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [],
      en: [
        "Montero is the capital of the Obispo Santistevan Province.",
        "It was named in honor of the military hero Colonel Marceliano Montero.",
        "The city is the heart of the 'Northern Integrated Zone,' the most productive agricultural region in Bolivia.",
        "Montero is home to a passionate football culture, represented by the local club Guabirá."
      ]
    }
  },
  {
    id: "trinidad-cities-v2",
    type: "state-capital",
    parent: "BO-B",
    coords: [-64.9000, -14.8333],
    name: { de: "Trinidad", hu: "Trinidad", ro: "Trinidad", en: "Trinidad" },
    description: {
      de: "Die Hauptstadt von Beni im Amazonasbecken, die stark von der umliegenden Rinderzucht geprägt ist.",
      hu: "Beni megye fővárosa az Amazonas-medencében, amelynek életét erősen meghatározza a környező szarvasmarha-tenyésztés.",
      ro: "Capitala departamentului Beni din bazinul Amazonului, puternic influențată de creșterea vitelor din împrejurimi.",
      en: "The capital of Beni in the Amazon basin, heavily influenced by the surrounding cattle ranching industry."
    },
    facts: {
      de: ["Hauptstadt von Beni.", "Oft von Überschwemmungen bedroht.", "Zentrum der Viehzucht."],
      hu: ["Beni fővárosa.", "Gyakran fenyegetik áradások.", "A szarvasmarha-tenyésztés központja."],
      ro: ["Capitala departamentului Beni.", "Adesea amenințată de inundații.", "Centru al creșterii animalelor."],
      en: ["Capital of Beni.", "Often threatened by floods.", "Center of cattle ranching."]
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "",
      en: "Trinidad is the tropical capital of the Beni Department, located deep in the Amazonian lowlands of northeastern Bolivia. Surrounded by vast savannas and numerous rivers, the city is the epicentre of the country's extensive cattle ranching industry. Historically, it was founded as a Jesuit mission in 1686, which is still reflected in its central plaza and religious traditions. Due to its location in a low-lying floodplain, Trinidad is built on a series of ancient and modern earthen mounds to protect it from the annual seasonal floods. The city serves as a gateway to exploring the biodiversity of the Moxos plains and the nearby Ibare and Mamoré rivers, offering a unique glimpse into the life and culture of the Bolivian Amazon."
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [],
      en: [
        "The city is officially known as La Santísima Trinidad (The Most Holy Trinity).",
        "Trinidad is famous for its 'mototaxis,' which are the primary and most iconic form of transportation for its residents.",
        "Nearby Puerto Almacén is a popular spot to see Pink River Dolphins in their natural habitat.",
        "The 'Chope Piesta' is the city's main traditional festival, celebrated in June with massive parades and horse races."
      ]
    }
  },
  {
    id: "riberalta-cities-v2",
    type: "city",
    parent: "BO-B",
    coords: [-66.0631, -10.9823],
    name: { de: "Riberalta", hu: "Riberalta", ro: "Riberalta", en: "Riberalta" },
    description: {
      de: "Die Hauptstadt des bolivianischen Amazonasgebietes, weltweit führend in der Verarbeitung von Paranüssen.",
      hu: "A bolíviai amazóniai térség központja, amely világelső a brazil dió (paranő) feldolgozásában.",
      ro: "Capitala regiunii amazoniene boliviene, lider mondial în procesarea nucilor braziliene.",
      en: "The capital of the Bolivian Amazon region, a world leader in the processing of Brazil nuts."
    },
    facts: {
      de: ["Zentrum der Paranuss-Industrie.", "Liegt am Río Beni.", "Heißes und feuchtes Klima."],
      hu: ["A brazil dió ipar központja.", "A Río Beni partján fekszik.", "Meleg és párás éghajlat."],
      ro: ["Centrul industriei nucilor braziliene.", "Situat pe râul Beni.", "Climă caldă și umedă."],
      en: ["Center of the Brazil nut industry.", "Located on the Beni River.", "Hot and humid climate."]
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "",
      en: "Riberalta is a strategic river port and industrial city located in the northernmost part of the Beni Department, at the confluence of the Beni and Madre de Dios rivers. It is internationally famous as the 'World Capital of the Amazon Nut,' as it processes and exports the majority of the world's supply of Brazil nuts. Historically, the city flourished during the great rubber boom of the late 19th century, attracting immigrants from around the world, including a significant Japanese community that still influences local culture. Today, Riberalta remains a vibrant hub for river commerce and forest products, set in a landscape of dense rainforest and powerful waterways that define its isolated but industrious character."
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [],
      en: [
        "The city's name comes from its location on the high banks ('riberas altas') of the Beni River.",
        "Riberalta is one of the few places in Bolivia with a significant and historical Japanese-Bolivian population.",
        "The surrounding forests are part of the 'Northern Amazon' ecological zone, known for its extreme biodiversity.",
        "It is the largest city in the Vaca Díez Province and a key gateway to the Pando Department."
      ]
    }
  },
  {
    id: "warnes-cities-v2",
    type: "city",
    parent: "BO-S",
    coords: [-63.1667, -17.5167],
    name: { de: "Warnes", hu: "Warnes", ro: "Warnes", en: "Warnes" },
    description: {
      de: "Ein wichtiger Industriestandort nördlich von Santa Cruz, wo sich viele moderne Fabriken angesiedelt haben.",
      hu: "Fontos ipari központ Santa Cruz-tól északra, ahol számos modern gyár telepedett le az elmúlt években.",
      ro: "Un important centru industrial la nord de Santa Cruz, unde s-au stabilit multe fabrici moderne.",
      en: "An important industrial location north of Santa Cruz, home to many modern manufacturing plants."
    },
    facts: {
      de: ["Wichtiger Industriepark.", "Nahe am Flughafen Viru Viru.", "Wächst sehr schnell."],
      hu: ["Jelentős ipari parkkal rendelkezik.", "Közel van a Viru Viru repülőtérhez.", "Nagyon gyorsan növekszik."],
      ro: ["Parc industrial major.", "Aproape de aeroportul Viru Viru.", "Crește foarte repede."],
      en: ["Major industrial park.", "Close to Viru Viru Airport.", "Growing very rapidly."]
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "",
      en: "Warnes is a rapidly growing industrial satellite city located just 30 kilometers north of Santa Cruz de la Sierra. It has become a cornerstone of Bolivia's economic development, housing the massive Latin American Industrial Park (PILAT), which is one of the largest in the region. The city's strategic location along the primary highway to the north and its proximity to the Viru Viru International Airport make it a prime location for manufacturing, logistics, and dairy processing. Historically, it began as a quiet agricultural outpost, but the recent industrial boom has transformed it into a bustling center of modern commerce, attracting significant investment and a growing workforce from across the country."
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [],
      en: [
        "Warnes is the capital of the Ignacio Warnes Province, named after a famous independence leader.",
        "The city is a major center for the production of milk and other dairy products in the department.",
        "It is home to Sport Boys Warnes, a football club that achieved national fame by winning the league in 2015.",
        "The city's rapid expansion is part of the 'metropolitanization' process of the Santa Cruz region."
      ]
    }
  },
  {
    id: "la-guardia-cities-v2",
    type: "city",
    parent: "BO-S",
    coords: [-63.3167, -17.8833],
    name: { de: "La Guardia", hu: "La Guardia", ro: "La Guardia", en: "La Guardia" },
    description: {
      de: "Eine florierende Satellitenstadt von Santa Cruz de la Sierra, die als Tor zu den westlichen Tälern dient.",
      hu: "Santa Cruz de la Sierra virágzó szatellitvárosa, amely a nyugati völgyek felé vezető kapuként szolgál.",
      ro: "Un oraș satelit înfloritor al Santa Cruz de la Sierra, care servește drept poartă către văile vestice.",
      en: "A thriving satellite city of Santa Cruz de la Sierra, serving as the gateway to the western valleys."
    },
    facts: {
      de: ["Teil der Metropolregion Santa Cruz.", "Verbindungsstadt in den Westen.", "Hohes Bevölkerungswachstum."],
      hu: ["A Santa Cruz-i agglomeráció része.", "Összekötő város a nyugati országrésszel.", "Magas népességnövekedés jellemzi."],
      ro: ["Parte a zonei metropolitane Santa Cruz.", "Oraș de legătură spre vest.", "Creștere ridicată a populației."],
      en: ["Part of the Santa Cruz metropolitan area.", "Gateway city to the west.", "High population growth."]
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "",
      en: "La Guardia is a dynamic and expanding municipality that forms part of the greater Santa Cruz metropolitan area. Situated to the southwest of the capital, it serves as a critical transition point between the flat tropical plains and the rising foothills of the Andes. The city is famous for its citrus production, particularly its high-quality oranges and tangerines, which are celebrated during annual local festivals. In recent years, La Guardia has transformed from a rural community into a major residential and commercial hub, as many residents of Santa Cruz move there in search of a slightly cooler climate and more space. Its location on the main highway leading towards Samaipata and Sucre makes it a vital logistical link for regional trade and tourism."
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [],
      en: [
        "The municipality is one of the most important producers of oranges in the Santa Cruz Department.",
        "La Guardia is home to several large-scale beverage manufacturing plants, including major breweries.",
        "It is known for its beautiful natural viewpoints that overlook the Piraí River.",
        "The city's name traditionally refers to its role as a 'guard post' or sentinel for the colonial city of Santa Cruz."
      ]
    }
  },
  {
    id: "viacha-cities-v2",
    type: "city",
    parent: "BO-L",
    coords: [-68.3000, -16.6500],
    name: { de: "Viacha", hu: "Viacha", ro: "Viacha", en: "Viacha" },
    description: {
      de: "Eine Industriestadt auf dem Altiplano in der Nähe von La Paz, landesweit bekannt für ihre Zementproduktion.",
      hu: "Ipari város az Altiplano-n La Paz közelében, amely országosan ismert a cementgyártásáról.",
      ro: "Un oraș industrial pe Altiplano lângă La Paz, cunoscut la nivel național pentru producția sa de ciment.",
      en: "An industrial city on the Altiplano near La Paz, nationally known for its cement production."
    },
    facts: {
      de: ["Große Zementfabrik (SOBOCE).", "Liegt auf über 3.800 m.", "Eisenbahnknotenpunkt."],
      hu: ["Nagy cementgyár (SOBOCE) található itt.", "Több mint 3800 méteren fekszik.", "Vasúti csomópont."],
      ro: ["Fabrică mare de ciment (SOBOCE).", "Situat la peste 3.800 m.", "Nod feroviar important."],
      en: ["Large cement factory (SOBOCE).", "Located above 3,800 m.", "Important railway junction."]
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "",
      en: "Viacha is a significant industrial and railway hub located on the vast Altiplano, about 22 kilometers southwest of El Alto and La Paz. It is most famous as the home of the SOBOCE cement plant, the largest in Bolivia, which has provided the building materials for much of the country's modern infrastructure. Historically, Viacha was a crucial junction where major international rail lines from Chile and Peru met, facilitating the export of minerals from the highlands. The city's identity is deeply rooted in both its industrial heritage and its traditional Aymara roots, which are celebrated through vibrant local festivals and markets. Despite its dusty and windswept Altiplano environment, it remains an essential driver of the La Paz regional economy."
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [],
      en: [
        "Viacha is located at an altitude of approximately 3,875 meters above sea level.",
        "The city played a major role in the historic 1841 Battle of Ingavi, which secured Bolivian independence from Peru.",
        "It is the capital of the Ingavi Province in the La Paz Department.",
        "The city is a center for the production of traditional Andean textiles and pottery."
      ]
    }
  },
  {
    id: "yacuiba-cities-v2",
    type: "city",
    parent: "BO-T",
    coords: [-63.6775, -22.0167],
    name: { de: "Yacuiba", hu: "Yacuiba", ro: "Yacuiba", en: "Yacuiba" },
    description: {
      de: "Eine lebhafte Grenzstadt im Süden Boliviens, die stark vom Handel mit dem benachbarten Argentinien abhängt.",
      hu: "Élénk határváros Bolívia déli részén, amelynek gazdasága erősen függ a szomszédos Argentínával folytatott kereskedelemtől.",
      ro: "Un oraș de graniță animat în sudul Boliviei, care depinde puternic de comerțul cu Argentina vecină.",
      en: "A bustling border town in southern Bolivia, heavily reliant on cross-border trade with neighboring Argentina."
    },
    facts: {
      de: ["Grenzstadt zu Argentinien.", "Wichtiges Handelszentrum.", "Reich an Erdgasvorkommen im Umland."],
      hu: ["Határváros Argentína felé.", "Fontos kereskedelmi csomópont.", "A környék gazdag földgázban."],
      ro: ["Oraș de graniță cu Argentina.", "Centru comercial important.", "Zonă bogată în gaze naturale."],
      en: ["Border town with Argentina.", "Important trading center.", "Surrounding area is rich in natural gas."]
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "",
      en: "Yacuiba is a vibrant and strategic border city located in the extreme south of Bolivia, directly across from the Argentine town of Salvador Mazza. It is the commercial capital of the Gran Chaco region and serves as a major hub for international trade between the two nations. The city is famous for its lively markets, where a wide range of products from both countries are exchanged daily. Historically, the area was part of a territorial dispute between Bolivia and Argentina, eventually remaining with Bolivia after the 1925 border treaty. In recent decades, Yacuiba has grown exponentially due to the discovery of massive natural gas reserves in its surrounding areas, making it a critical player in Bolivia's energy exports and a key point for regional energy infrastructure."
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [],
      en: [
        "Yacuiba is the largest city in the Gran Chaco Province of the Tarija Department.",
        "The city experiences extreme heat, with summer temperatures frequently exceeding 40°C.",
        "It is the terminus of a major railway line connecting Bolivia to the Argentine rail network.",
        "The Aguaragüe National Park is located just to the west, protecting the region's vital watersheds."
      ]
    }
  },
  {
    id: "colcapirhua-cities-v2",
    type: "city",
    parent: "BO-C",
    coords: [-66.2333, -17.3833],
    name: { de: "Colcapirhua", hu: "Colcapirhua", ro: "Colcapirhua", en: "Colcapirhua" },
    description: {
      de: "Eine dicht besiedelte Stadtgemeinde in der Metropolregion von Cochabamba mit starkem Fokus auf Kleinindustrie.",
      hu: "Sűrűn lakott városi terület Cochabamba agglomerációjában, amely erősen a kisiparra összpontosít.",
      ro: "Un municipiu dens populat din zona metropolitană Cochabamba, cu un accent puternic pe mica industrie.",
      en: "A densely populated municipality in the Cochabamba metropolitan area with a strong focus on light industry."
    },
    facts: {
      de: ["Liegt zwischen Cochabamba und Quillacollo.", "Dicht besiedeltes Gebiet.", "Zentrum für Handwerk."],
      hu: ["Cochabamba és Quillacollo között fekszik.", "Sűrűn lakott terület.", "A kézművesipar egyik központja."],
      ro: ["Situat între Cochabamba și Quillacollo.", "Zonă dens populată.", "Centru pentru meșteșuguri."],
      en: ["Located between Cochabamba and Quillacollo.", "Densely populated area.", "Center for handicrafts."]
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "",
      en: "Colcapirhua is a bustling and densely populated municipality that acts as a vital commercial bridge between the cities of Cochabamba and Quillacollo. Historically, the area was known as a major agricultural center, with its name in Quechua meaning 'the place where the grain silos are.' Today, it has transformed into a dynamic urban center with a strong focus on small and medium-scale industry, particularly in the production of high-quality handicrafts, ceramics, and textiles. The city is also famous for its traditional markets and its specialized workshops that continue to use ancestral techniques to create modern products. Its strategic location along the main east-west highway makes it an essential hub for regional transport and local trade within the fertile Cochabamba valley."
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [],
      en: [
        "The name Colcapirhua is derived from the Quechua words 'qollqa' (silo) and 'pirwa' (storehouse).",
        "It is recognized as the 'Capital of the Small Industry' in the department.",
        "The city is famous for its specialized artisans who produce decorative and functional ceramics.",
        "It was officially created as a municipality on April 15, 1985."
      ]
    }
  },
  {
    id: "tiquipaya-cities-v2",
    type: "city",
    parent: "BO-C",
    coords: [-66.2167, -17.3333],
    name: { de: "Tiquipaya", hu: "Tiquipaya", ro: "Tiquipaya", en: "Tiquipaya" },
    description: {
      de: "Wird oft als Blumenhauptstadt Boliviens bezeichnet und liegt in einem kühlen, grünen Tal nahe Cochabamba.",
      hu: "Gyakran Bolívia virágfővárosaként emlegetik, és egy hűvös, zöld völgyben fekszik Cochabamba közelében.",
      ro: "Adesea numită capitala florilor din Bolivia, situată într-o vale verde și răcoroasă lângă Cochabamba.",
      en: "Often referred to as the flower capital of Bolivia, located in a cool, green valley near Cochabamba."
    },
    facts: {
      de: ["Bekannt als Hauptstadt der Blumen.", "Beliebter Wohnort.", "Veranstaltet Umweltgipfel."],
      hu: ["A virágok fővárosaként ismert.", "Népszerű lakóövezet.", "Környezetvédelmi csúcstalálkozókat is rendeznek itt."],
      ro: ["Cunoscută drept capitala florilor.", "Zonă rezidențială populară.", "Găzduiește summit-uri de mediu."],
      en: ["Known as the capital of flowers.", "Popular residential area.", "Hosts environmental summits."]
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "",
      en: "Tiquipaya is an idyllic municipality situated in a lush, green valley at the base of the Tunari mountain range, just north of Cochabamba. Known as the 'Capital of Flowers,' it is the region's premier center for floriculture, producing a wide variety of roses, carnations, and lilies that are exported throughout the country. The city is also a significant center for higher education, home to the prestigious Universidad del Valle (UNIVALLE). In recent years, Tiquipaya has gained international recognition for hosting major global summits on climate change and the rights of Mother Earth, reflecting its strong environmental identity. Its slightly higher altitude and abundant water sources provide a cooler, fresher climate that has made it one of the most desirable residential areas in the entire department."
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [],
      en: [
        "The city hosts a famous annual Flower Fair that showcases the incredible diversity of local production.",
        "Tiquipaya is a primary gateway to the high-altitude landscapes of Tunari National Park.",
        "The name Tiquipaya is thought to mean 'place of convergence' in an ancient indigenous language.",
        "It is home to the 'World People's Conference on Climate Change,' which first met there in 2010."
      ]
    }
  },
  {
    id: "cobija-cities-v2",
    type: "state-capital",
    parent: "BO-N",
    coords: [-68.7667, -11.0333],
    name: { de: "Cobija", hu: "Cobija", ro: "Cobija", en: "Cobija" },
    description: {
      de: "Die nördlichste Departamento-Hauptstadt Boliviens im tiefen Regenwald, direkt an der Granze zu Brasilien gelegen.",
      hu: "Bolívia legészakibb megyeszékhelye a mély esőerdőben, közvetlenül a brazil határ mentén fekszik.",
      ro: "Cea mai nordică capitală de departament din Bolivia, în adâncul pădurii tropicale, chiar la granița cu Brazilia.",
      en: "The northernmost departmental capital of Bolivia in the deep rainforest, located right on the Brazilian border."
    },
    facts: {
      de: ["Hauptstadt des Departamentos Pando.", "Direkte Grenze zu Brasilien.", "Sehr tropisches Klima."],
      hu: ["Pando megye fővárosa.", "Közvetlen határ Brazíliával.", "Nagyon trópusi éghajlat."],
      ro: ["Capitala departamentului Pando.", "Graniță directă cu Brazilia.", "Climă foarte tropicală."],
      en: ["Capital of the Pando department.", "Direct border with Brazil.", "Very tropical climate."]
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "",
      en: "Cobija is a unique and isolated departmental capital located in the extreme northern tip of Bolivia, deep within the Amazonian rainforest. Situated on the banks of the Acre River, it lies directly opposite the Brazilian city of Brasiléia, separated only by a narrow international bridge. Historically, Cobija was founded in 1906 under the name 'Puerto Bahía' following the Acre War, as a strategic outpost to secure Bolivia's remaining rubber-rich territories. Today, the city is a thriving 'Free Trade Zone,' attracting shoppers from across the region and from Brazil. The environment is intensely tropical, with high humidity and lush vegetation, and the city's culture is a fascinating blend of Bolivian and Brazilian influences, seen in everything from its music to its cuisine."
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [],
      en: [
        "Cobija is the capital of the Pando Department, the least populated and most remote in Bolivia.",
        "The city is known as the 'Pearl of the Acre' due to its scenic location on the riverbanks.",
        "It is one of the wettest cities in Bolivia, receiving over 1,800 mm of rain annually.",
        "The city's economy is heavily dependent on the export of Brazil nuts and cross-border retail trade."
      ]
    }
  },
  {
    id: "vinto-cities-v2",
    type: "city",
    parent: "BO-C",
    coords: [-66.3167, -17.4000],
    name: { de: "Vinto", hu: "Vinto", ro: "Vinto", en: "Vinto" },
    description: {
      de: "Eine ruhige Gemeinde im fruchtbaren unteren Tal von Cochabamba, die traditionell für ihren Apfelanbau bekannt ist.",
      hu: "Csendes település Cochabamba termékeny alsó völgyében, amely hagyományosan az almatermesztéséről ismert.",
      ro: "O comunitate liniștită în valea inferioară fertilă din Cochabamba, cunoscută tradițional pentru cultivarea merelor.",
      en: "A quiet municipality in the fertile lower valley of Cochabamba, traditionally known for apple cultivation."
    },
    facts: {
      de: ["Teil des unteren Cochabamba-Tals.", "Bekannt für Obstplantagen.", "Nahe bei Quillacollo."],
      hu: ["Az alsó Cochabamba-völgy része.", "Gyümölcsöseiről híres.", "Quillacollo közelében található."],
      ro: ["Parte a văii inferioare Cochabamba.", "Cunoscut pentru livezile de fructe.", "Aproape de Quillacollo."],
      en: ["Part of the lower Cochabamba valley.", "Known for its fruit orchards.", "Close to Quillacollo."]
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "",
      en: "Vinto is a picturesque and peaceful municipality located in the 'Bajo Valle' (Lower Valley) of Cochabamba, just west of Quillacollo. For generations, it has been celebrated as the center of Bolivia's apple production, with its orchards producing high-quality varieties that are prized across the region. The city also hosts the historic 'Casona de Pairumani,' a magnificent estate and model farm built by the Tin King Simón Patiño in the early 20th century, which is now a major cultural and architectural landmark. Vinto's environment is characterized by fertile soils and a pleasant temperate climate, which supports a wide range of agricultural activities. Despite the growing urban sprawl from nearby cities, Vinto maintains a more relaxed, rural atmosphere and a strong connection to its traditional farming heritage."
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [],
      en: [
        "Vinto is known as the 'Capital of the Apple' and holds a famous annual Apple Festival.",
        "The Pairumani estate includes beautiful gardens and an old hydroelectric plant, one of the first in Bolivia.",
        "The city is located at an altitude of approximately 2,550 meters.",
        "Vinto is also a major producer of traditional Andean dairy products like 'quesillo' cheese."
      ]
    }
  },
  {
    id: "guayaramerin-cities-v2",
    type: "city",
    parent: "BO-B",
    coords: [-65.3500, -10.8333],
    name: { de: "Guayaramerín", hu: "Guayaramerín", ro: "Guayaramerín", en: "Guayaramerín" },
    description: {
      de: "Ein wichtiger Flusshafen und Handelsstadt am Río Mamoré gegenüber der brasilianischen Stadt Guajará-Mirim.",
      hu: "Fontos folyami kikötő és kereskedőváros a Mamoré folyó partján, a brazil Guajará-Mirim várossal szemben.",
      ro: "Un important port fluvial și oraș comercial pe râul Mamoré, vizavi de orașul brazilian Guajará-Mirim.",
      en: "A major river port and trading town on the Mamoré River opposite the Brazilian city of Guajará-Mirim."
    },
    facts: {
      de: ["Grenzstadt zu Brasilien.", "Wichtiger Flusshafen.", "Liegt im Amazonasbecken."],
      hu: ["Brazíliával határos város.", "Fontos folyami kikötő.", "Az Amazonas-medencében fekszik."],
      ro: ["Oraș de graniță cu Brazilia.", "Port fluvial important.", "Situat în bazinul Amazonului."],
      en: ["Border town with Brazil.", "Important river port.", "Located in the Amazon basin."]
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "",
      en: "Guayaramerín is a vital river port and commercial gateway located in the far north of the Beni Department, along the powerful Mamoré River. It sits directly on the border with Brazil, facing the city of Guajará-Mirim, and serves as a major hub for the exchange of goods and forest products between the two countries. The city's history is deeply tied to the era of rubber extraction, which transformed this remote Amazonian outpost into a bustling center of trade in the early 20th century. Today, it remains an essential logistical link for northern Bolivia, facilitating the export of Brazil nuts and timber. The city's atmosphere is defined by its humid tropical heat, the constant movement of riverboats, and a unique cross-border culture that blends Spanish and Portuguese influences."
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [],
      en: [
        "The city's name likely means 'small stream' or 'high bank' in an indigenous language.",
        "Guayaramerín is the final station on the historic but abandoned Madeira-Mamoré Railway on the Bolivian side.",
        "The Acre river nearby was the scene of significant conflict during the rubber boom period.",
        "It is the main urban center of the Vaca Díez Province along with its sister city Riberalta."
      ]
    }
  },
  {
    id: "villazon-cities-v2",
    type: "city",
    parent: "BO-P",
    coords: [-65.5942, -22.0875],
    name: { de: "Villazón", hu: "Villazón", ro: "Villazón", en: "Villazón" },
    description: {
      de: "Der südlichste Grenzposten Boliviens nach Argentinien, ein Knotenpunkt für internationalen Handel und Verkehr.",
      hu: "Bolívia legdélebbi határátkelője Argentína felé, a nemzetközi kereskedelem és forgalom fontos csomópontja.",
      ro: "Cel mai sudic punct de trecere a frontierei din Bolivia spre Argentina, un nod pentru comerțul internațional și trafic.",
      en: "Bolivia's southernmost border post with Argentina, a hub for international trade and transit."
    },
    facts: {
      de: ["Wichtigster Grenzübergang nach Argentinien im Süden.", "Gegenüber von La Quiaca.", "Kühles Hochlandklima."],
      hu: ["A legfontosabb déli határátkelő Argentínába.", "La Quiaca-val szemben fekszik.", "Hűvös hegyvidéki klíma."],
      ro: ["Cea mai importantă trecere a frontierei spre Argentina în sud.", "Vizavi de La Quiaca.", "Climă răcoroasă de munte."],
      en: ["Main border crossing to Argentina in the south.", "Opposite La Quiaca.", "Cool highland climate."]
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "",
      en: "Villazón is a bustling and essential border city located at the southern tip of the Potosí Department, standing at a high altitude of 3,447 meters. It is separated from the Argentine city of La Quiaca only by a narrow international bridge, making it one of the busiest land ports in Bolivia. The city is a major center for cross-border commerce, with its streets lined with thousands of shops and stalls selling everything from textiles and electronics to food products. Historically, it was founded in 1910 and named after President Eliodoro Villazón. The city's identity is defined by its cold, dry highland climate and its role as the primary gateway for travelers and goods moving between Bolivia and the Southern Cone, facilitated by a direct railway connection to the heart of the Altiplano."
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [],
      en: [
        "Villazón is the starting point of the main railway line that runs north to Uyuni, Oruro, and La Paz.",
        "The city experiences extreme temperature fluctuations, with very cold nights throughout the year.",
        "It is the capital of the Modesto Omiste Province.",
        "Villazón is a major logistical hub for the export of Bolivian minerals and agricultural goods to Argentina."
      ]
    }
  },
  {
    id: "yapacani-cities-v2",
    type: "city",
    parent: "BO-S",
    coords: [-63.8833, -17.4000],
    name: { de: "Yapacaní", hu: "Yapacaní", ro: "Yapacaní", en: "Yapacaní" },
    description: {
      de: "Ein wichtiger Knotenpunkt auf der Hauptfernstraße zwischen Santa Cruz und Cochabamba, umgeben von Reisfeldern.",
      hu: "Fontos csomópont a Santa Cruz és Cochabamba közötti főúton, amelyet hatalmas rizsföldek vesznek körül.",
      ro: "Un nod important pe autostrada principală dintre Santa Cruz și Cochabamba, înconjurat de câmpuri de orez.",
      en: "An important junction on the main highway between Santa Cruz and Cochabamba, surrounded by rice fields."
    },
    facts: {
      de: ["Liegt am Fluss Yapacaní.", "Strategische Lage an der Ruta 4.", "Starkes Agrarzentrum."],
      hu: ["A Yapacaní folyó mentén fekszik.", "Stratégiai elhelyezkedés a Ruta 4 főúton.", "Erős mezőgazdasági központ."],
      ro: ["Situat pe râul Yapacaní.", "Locație strategică pe Ruta 4.", "Centru agricol puternic."],
      en: ["Located on the Yapacaní River.", "Strategic location on Route 4.", "Strong agricultural center."]
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "",
      en: "Yapacaní is a dynamic and productive city located in the tropical lowlands of Santa Cruz, situated along the banks of the wide Yapacaní River. It is a critical node on the main highway connecting Santa Cruz de la Sierra with Cochabamba, making it an essential commercial and logistical link. The city is the center of a major agricultural expansion zone, famous for its intensive production of rice, citrus, and timber. Historically, Yapacaní has been a primary destination for internal migration, as thousands of settlers from the highlands have moved here to clear land and establish farms. This has created a vibrant, diverse community that blends Andean traditions with the frontier spirit of the tropical lowlands. The surrounding landscape is a mosaic of massive rice fields and remnants of dense Amazonian forest."
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [],
      en: [
        "Yapacaní is known as the 'Rice Capital of Bolivia' due to its enormous production volumes.",
        "The city is a gateway to the northern entrance of the Amboró National Park.",
        "The Yapacaní River is known for its wide, sandy bed and its tendency to flood during the intense tropical rains.",
        "The city has become a major center for social and political movements in the region."
      ]
    }
  },
  {
    id: "villamontes-cities-v2",
    type: "city",
    parent: "BO-T",
    coords: [-63.4500, -21.2667],
    name: { de: "Villamontes", hu: "Villamontes", ro: "Villamontes", en: "Villamontes" },
    description: {
      de: "Eine historische Stadt im Chaco, die während des Chacokrieges als bolivianisches Hauptquartier diente und heute für Fischfang bekannt ist.",
      hu: "Történelmi város a Gran Chacóban, amely a chaco-i háború idején bolíviai főhadiszállás volt, ma a horgászatáról ismert.",
      ro: "Un oraș istoric din Chaco care a servit ca sediu bolivian în timpul Războiului Chaco și este astăzi cunoscut pentru pescuit.",
      en: "A historical city in the Chaco that served as Bolivian headquarters during the Chaco War, now known for fishing."
    },
    facts: {
      de: ["Historischer Ort des Chaco-Krieges.", "Liegt am Río Pilcomayo.", "Eine der heißesten Städte Boliviens."],
      hu: ["A chaco-i háború történelmi helyszíne.", "A Pilcomayo folyó partján fekszik.", "Bolívia egyik legmelegebb városa."],
      ro: ["Sit istoric al Războiului Chaco.", "Situat pe râul Pilcomayo.", "Unul dintre cele mai fierbinți orașe din Bolivia."],
      en: ["Historical site of the Chaco War.", "Located on the Pilcomayo River.", "One of the hottest cities in Bolivia."]
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "",
      en: "Villamontes is a city of profound historical significance located in the heart of the Bolivian Chaco, on the banks of the Pilcomayo River. During the Chaco War (1932-1935), it served as the strategic headquarters for the Bolivian Army and was the site of the final, decisive battles that successfully halted the Paraguayan advance. Today, the city is a major center for the natural gas industry and is equally famous for its fishing culture, centered on the Sábalo fish that migrates through the Pilcomayo. Villamontes is known for its extreme climate, frequently recording some of the highest temperatures in South America. Despite its harsh environment, it remains a symbol of national resilience and a vital economic hub for the Tarija Department."
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [],
      en: [
        "The city holds the record for the highest temperature ever recorded in Bolivia, reaching 46.7°C.",
        "The Sábalo fishing season in the Pilcomayo is a major economic event for the entire Chaco region.",
        "Villamontes is home to several monuments and museums dedicated to the heroes of the Chaco War.",
        "It is located at a low altitude of only 390 meters above sea level."
      ]
    }
  },
  {
    id: "bermejo-cities-v2",
    type: "city",
    parent: "BO-T",
    coords: [-64.3333, -22.7333],
    name: { de: "Bermejo", hu: "Bermejo", ro: "Bermejo", en: "Bermejo" },
    description: {
      de: "Eine isolierte Grenzstadt im extremen Süden Boliviens, deren Wirtschaft stark auf die Zuckerindustrie ausgerichtet ist.",
      hu: "Elszigetelt határváros Bolívia legdélebbi részén, amelynek gazdasága erősen a cukoriparra épül.",
      ro: "Un oraș de graniță izolat în sudul extrem al Boliviei, a cărui economie este puternic orientată spre industria zahărului.",
      en: "An isolated border town in the extreme south of Bolivia, with an economy heavily focused on the sugar industry."
    },
    facts: {
      de: ["Grenzstadt zu Argentinien.", "Bedeutende Zuckerrohrindustrie.", "Tropisches Mikroklima."],
      hu: ["Argentin határváros.", "Jelentős cukornádipar.", "Trópusi mikroklímája van."],
      ro: ["Oraș de graniță cu Argentina.", "Industria trestiei de zahăr semnificativă.", "Microclimat tropical."],
      en: ["Border town with Argentina.", "Significant sugarcane industry.", "Tropical microclimate."]
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "",
      en: "Bermejo is a remote and bustling border town situated in the extreme south of the Tarija Department, at the confluence of the Bermejo and Grande de Tarija rivers. It is famous for its unique 'tropical enclave' microclimate, which allows for the intensive cultivation of sugarcane and citrus in an otherwise temperate highland department. The city's economy is dominated by the Industrias Agrícolas de Bermejo (IABSA) sugar mill, which is the primary employer in the region. Directly across the river lies the Argentine town of Aguas Blancas, creating a constant flow of trade and people via small ferry boats. Bermejo is also historically significant as the site where the first productive oil well in Bolivia was drilled in 1922, marking the beginning of the nation's hydrocarbon era."
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [],
      en: [
        "Bermejo is known as the 'Cradle of the Bolivian Petroleum Industry'.",
        "The city celebrates the 'Festival Internacional del Lapacho' annually, honoring the colorful flowering trees of the region.",
        "It is located at an altitude of 415 meters, making it one of the lowest points in the Tarija Department.",
        "The Bermejo River serves as a natural international border with Argentina."
      ]
    }
  },
  {
    id: "camiri-cities-v2",
    type: "city",
    parent: "BO-S",
    coords: [-63.5167, -19.0333],
    name: { de: "Camiri", hu: "Camiri", ro: "Camiri", en: "Camiri" },
    description: {
      de: "Einst das boomende Zentrum der bolivianischen Ölindustrie, trägt sie bis heute den Titel 'Erdölhauptstadt Boliviens'.",
      hu: "Egykor a bolíviai olajipar virágzó központja volt, mind a mai napig a 'Bolívia kőolaj-fővárosa' címet viseli.",
      ro: "Cândva centrul înfloritor al industriei petroliere boliviene, poartă și astăzi titlul de 'capitală petrolieră a Boliviei'.",
      en: "Once the booming center of the Bolivian oil industry, it still holds the title of the 'oil capital of Bolivia'."
    },
    facts: {
      de: ["Ehemaliges Öl-Zentrum.", "Befindet sich im Cordillera-Gebirge.", "Nahe dem Ort von Che Guevaras Gefangennahme."],
      hu: ["Egykori olajközpont.", "A Cordillera-hegységben található.", "Közel van Che Guevara elfogásának helyszínéhez."],
      ro: ["Fost centru petrolier.", "Situat în Munții Cordillera.", "Aproape de locul capturării lui Che Guevara."],
      en: ["Former oil hub.", "Located in the Cordillera mountains.", "Near the site of Che Guevara's capture."]
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "",
      en: "Camiri is a historic city located in the foothills of the Cordillera Oriental, within the Santa Cruz Department. It gained national fame as the 'Petroleum Capital of Bolivia' during the mid-20th century, when it was the heart of the country's first major oil boom. The city's development was deeply shaped by the state oil company YPFB, which built much of its infrastructure. Historically, Camiri also gained international attention in 1967 during the guerrilla campaign of Che Guevara, as it was the site where the French intellectual Régis Debray was captured and tried. Today, while the large-scale oil production has moved elsewhere, Camiri remains a major service center for the Chaco region and a key point on the highway connecting Santa Cruz with the southern borders."
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [],
      en: [
        "The name Camiri comes from a Guaraní word meaning 'small field' or 'small plantation'.",
        "The city is situated along the banks of the Parapetí River.",
        "Camiri is home to a unique museum dedicated to the history of the petroleum industry in Bolivia.",
        "It is the largest urban center in the Cordillera Province."
      ]
    }
  },
  {
    id: "tupiza-cities-v2",
    type: "city",
    parent: "BO-P",
    coords: [-65.7167, -21.4333],
    name: { de: "Tupiza", hu: "Tupiza", ro: "Tupiza", en: "Tupiza" },
    description: {
      de: "Umgeben von dramatischen roten Felsformationen ist Tupiza ein beliebtes Ziel für Touristen und Legenden um Butch Cassidy.",
      hu: "A drámai vörös sziklaképződményekkel körülvett Tupiza népszerű turisztikai célpont, ahol Butch Cassidy legendája is él.",
      ro: "Înconjurat de formațiuni stâncoase roșii dramatice, Tupiza este o destinație turistică populară legată de Butch Cassidy.",
      en: "Surrounded by dramatic red rock formations, Tupiza is a popular tourist destination tied to the legends of Butch Cassidy."
    },
    facts: {
      de: ["Bekannt für Rote Felsen.", "Angenehmeres Klima als Potosí.", "Historische Outlaw-Verbindungen."],
      hu: ["A vörös szikláiról ismert.", "Kellemesebb a klímája, mint Potosínak.", "Történelmi betyárkapcsolatok."],
      ro: ["Cunoscut pentru stâncile roșii.", "Climă mai blândă decât Potosí.", "Conexiuni istorice cu haiduci."],
      en: ["Known for red rocks.", "Milder climate than Potosí.", "Historical outlaw connections."]
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "",
      en: "Tupiza is a breathtakingly beautiful city nestled in a narrow valley in the southern Potosí Department. It is world-renowned for its stunning desert scenery, characterized by jagged red sandstone cliffs, deep canyons, and towering cacti that resemble the American Wild West. The city is a major hub for adventure tourism, offering horse-riding tours and treks through iconic locations like the 'Quebrada de Palala' and 'El Cañón del Duende.' Historically, Tupiza is famous as the setting for the final days of the American outlaws Butch Cassidy and the Sundance Kid, who are believed to have met their end in the nearby village of San Vicente. Its relatively mild climate and dramatic landscapes make it one of the most unique and atmospheric destinations in the Bolivian highlands."
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [],
      en: [
        "The city is often called the 'Gateway to the South' for travelers arriving from Argentina.",
        "Tupiza was the site of the first battle for Bolivian independence, the Battle of Suipacha, in 1810.",
        "It is the capital of the Sud Chichas Province and the heart of the Chicha culture.",
        "The surrounding area is rich in mineral deposits, including lead, zinc, and silver."
      ]
    }
  },
  {
    id: "llallagua-cities-v2",
    type: "city",
    parent: "BO-P",
    coords: [-66.5833, -18.4167],
    name: { de: "Llallagua", hu: "Llallagua", ro: "Llallagua", en: "Llallagua" },
    description: {
      de: "Eine der historisch bedeutendsten Zinnbergbaustädte der Welt, in der die legendäre Siglo-XX-Mine den Reichtum begründete.",
      hu: "A világ egyik történelmileg legjelentősebb ónbányász városa, ahol a legendás Siglo XX bánya alapozta meg a vagyont.",
      ro: "Unul dintre cele mai importante orașe istorice de exploatare a staniului din lume, unde mina Siglo XX a creat bogăție.",
      en: "One of the most historically significant tin-mining towns in the world, where the legendary Siglo XX mine built vast wealth."
    },
    facts: {
      de: ["Ehemalige größte Zinnmine der Welt.", "Sehr kaltes Klima.", "Zentrum der Arbeiterbewegung."],
      hu: ["Egykor a világ legnagyobb ónbányája volt itt.", "Nagyon hideg éghajlat.", "A munkásmozgalom egyik központja."],
      ro: ["Fosta cea mai mare mină de staniu din lume.", "Climă foarte rece.", "Centru al mișcării muncitorești."],
      en: ["Former site of the world's largest tin mine.", "Very cold climate.", "Center of the labor movement."]
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "",
      en: "Llallagua is a rugged and historic mining city located in the high Andes of the Potosí Department, at an elevation of nearly 3,900 meters. During the early 20th century, it became one of the most important economic centers in the world as the site of the 'Siglo XX' mine, which was the largest tin mine on Earth and the source of the fortune of the 'Tin King' Simón Patiño. The city has a fierce political identity, serving as a historic stronghold for the Bolivian labor and miners' movements, often playing a decisive role in the nation's political upheavals. Today, while the glory days of the tin boom have passed, Llallagua remains a major center for mineral extraction by traditional cooperatives and is home to the Siglo XX National University, which continues its legacy of social and political intellectualism."
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [],
      en: [
        "The mine at Llallagua was so wealthy that it once produced nearly 10% of the world's entire tin supply.",
        "The city is known for its intense cold and thin air, typical of the high Altiplano.",
        "The 'Massacre of San Juan' in 1967 took place here, a tragic event in the history of the Bolivian labor movement.",
        "Llallagua is the capital of the Rafael Bustillo Province."
      ]
    }
  },
  {
    id: "san-ignacio-de-velasco-cities-v2",
    type: "city",
    parent: "BO-S",
    coords: [-60.9500, -16.3667],
    name: { de: "San Ignacio de Velasco", hu: "San Ignacio de Velasco", ro: "San Ignacio de Velasco", en: "San Ignacio de Velasco" },
    description: {
      de: "Die größte Stadt der bolivianischen Chiquitania, berühmt für ihre wunderschöne jesuitische Missionskirche aus Holz.",
      hu: "A bolíviai Chiquitania régió legnagyobb városa, amely gyönyörű, fából épült jezsuita missziós templomáról híres.",
      ro: "Cel mai mare oraș din regiunea Chiquitania din Bolivia, faimos pentru frumoasa sa biserică iezuită din lemn.",
      en: "The largest city in the Bolivian Chiquitania, famous for its beautifully crafted wooden Jesuit mission church."
    },
    facts: {
      de: ["Tor zu den Jesuitenmissionen.", "Holzverarbeitungszentrum.", "Großer zentraler Platz."],
      hu: ["A jezsuita missziók kapuja.", "Fafeldolgozó központ.", "Hatalmas központi térrel rendelkezik."],
      ro: ["Poarta către misiunile iezuite.", "Centru de prelucrare a lemnului.", "Piață centrală mare."],
      en: ["Gateway to the Jesuit missions.", "Woodworking center.", "Large central plaza."]
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "",
      en: "San Ignacio de Velasco is the largest and most dynamic city in the Chiquitania region of eastern Bolivia. It serves as the primary gateway to the Jesuit Missions of Chiquitos, a series of UNESCO World Heritage sites famous for their unique baroque-mestizo architecture. The city's own cathedral is a masterpiece of wooden construction, intricately carved and decorated with local and religious motifs. San Ignacio has grown into a major commercial and logistical center for the northeastern part of the Santa Cruz Department, supporting industries like cattle ranching, timber, and traditional woodworking. The city is situated near the beautiful Guapomó lagoon and acts as a central hub for exploring the nearby historic mission villages and the wild landscapes of the Noel Kempff Mercado National Park."
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [],
      en: [
        "San Ignacio is the largest municipality in the Velasco Province.",
        "The city's cathedral was reconstructed in the 20th century, carefully following the original 18th-century designs.",
        "It is a center for high-quality artisanal furniture and religious wood carvings.",
        "The city's airport is a key link for transport into the remote northern Amazon regions."
      ]
    }
  },
  {
    id: "san-julian-cities-v2",
    type: "city",
    parent: "BO-S",
    coords: [-62.6167, -16.9000],
    name: { de: "San Julián", hu: "San Julián", ro: "San Julián", en: "San Julián" },
    description: {
      de: "Eine landwirtschaftliche Modellstadt, die durch organisierte Besiedlung entstand und heute führend in der Soja-Produktion ist.",
      hu: "Egy mezőgazdasági modellváros, amely szervezett betelepítéssel jött létre, és ma vezető szerepet tölt be a szójatermesztésben.",
      ro: "Un oraș agricol model care a apărut prin așezare organizată și este astăzi lider în producția de soia.",
      en: "An agricultural model city that emerged through organized settlement and is today a leader in soy production."
    },
    facts: {
      de: ["Bedeutendes Soja-Anbaugebiet.", "Moderne Planstadt.", "Hoher Anteil an Migranten aus dem Andenhochland."],
      hu: ["Jelentős szójatermelő terület.", "Modern tervezett város.", "Sok betelepülő érkezett az Andokból."],
      ro: ["Zonă importantă de cultivare a soiei.", "Oraș modern planificat.", "Proporție mare de migranți din Anzi."],
      en: ["Major soy-producing area.", "Modern planned city.", "High proportion of migrants from the Andean highlands."]
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "",
      en: "San Julián is a remarkable example of planned urban and agricultural development in the tropical lowlands of Santa Cruz. It was established in the 1970s as part of a major government program to settle families from the overpopulated Andean highlands in the fertile eastern plains. Today, it has grown into one of Bolivia's most productive agricultural centers, specializing in the intensive cultivation of soy, corn, and sunflowers. The city is characterized by its strong social organization and the diverse cultural background of its residents, who have successfully integrated highland traditions with lowland farming techniques. San Julián's economic vitality and its role as a major producer of grain make it a key player in the nation's food security and export economy."
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [],
      en: [
        "San Julián is known for its highly organized 'nucleated' settlement pattern, designed to optimize agricultural land use.",
        "The city is one of the most politically active and organized municipalities in the department.",
        "It is a primary source of soy for Bolivia's industrial cooking oil industry.",
        "The population has grown from a few hundred pioneers to over 50,000 residents in just a few decades."
      ]
    }
  },
  {
    id: "huanuni-cities-v2",
    type: "city",
    parent: "BO-O",
    coords: [-66.8333, -18.2833],
    name: { de: "Huanuni", hu: "Huanuni", ro: "Huanuni", en: "Huanuni" },
    description: {
      de: "Eine raue Bergbausiedlung in Oruro, in der sich eine der größten staatlich geführten Zinnminen des Landes befindet.",
      hu: "Egy zord bányásztelepülés Oruro megyében, ahol az ország egyik legnagyobb állami tulajdonú ónbányája működik.",
      ro: "O așezare minieră aspră din Oruro, care găzduiește una dintre cele mai mari mine de staniu administrate de stat.",
      en: "A rugged mining settlement in Oruro that hosts one of the country's largest state-run tin mines."
    },
    facts: {
      de: ["Große Zinnmine (Posokoni).", "Starke Gewerkschaftspräsenz.", "Kaltes, trockenes Klima."],
      hu: ["Hatalmas ónbánya (Posokoni) van itt.", "Erős szakszervezeti jelenlét.", "Hideg, száraz klíma."],
      ro: ["Mină mare de staniu (Posokoni).", "Prezență sindicală puternică.", "Climă rece și uscată."],
      en: ["Large tin mine (Posokoni).", "Strong union presence.", "Cold, dry climate."]
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "",
      en: "Huanuni is a gritty and iconic mining city located in the high Altiplano of the Oruro Department. It is built around the massive Posokoni hill, which contains one of the world's richest deposits of tin. The city is the center of operations for the state-owned Huanuni Mining Company, which employs thousands of workers and remains a vital pillar of the Bolivian economy. Huanuni is famous for its powerful and militant miners' union, which has historically played a central role in the country's social struggles and political movements. The environment is harsh, with extreme cold and a landscape dominated by mining infrastructure, but the city possesses a deep sense of identity and pride rooted in its underground labor and its status as a bastion of the working class."
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [],
      en: [
        "The Posokoni hill has been mined for over a century and remains one of the world's primary sources of tin.",
        "The city is located at a high altitude of approximately 3,950 meters.",
        "Huanuni is often referred to as the 'National Bastion of the Working Class' in Bolivia.",
        "The local economy revolves almost entirely around the activities of the state mine."
      ]
    }
  },
  {
    id: "punata-cities-v2",
    type: "city",
    parent: "BO-C",
    coords: [-65.8333, -17.5500],
    name: { de: "Punata", hu: "Punata", ro: "Punata", en: "Punata" },
    description: {
      de: "Bekannt als das Herz des Hochtals von Cochabamba und berühmt für die Herstellung von Chicha, einem traditionellen Maisbier.",
      hu: "A cochabambai Magas-völgy szíveként ismert, amely egy hagyományos kukoricasör, a chicha készítéséről híres.",
      ro: "Cunoscută drept inima văii înalte din Cochabamba și faimoasă pentru producția de chicha, o bere tradițională de porumb.",
      en: "Known as the heart of the High Valley of Cochabamba and famous for producing chicha, a traditional corn beer."
    },
    facts: {
      de: ["Hauptstadt der Chicha.", "Traditionelle Märkte.", "Fruchtbares Landwirtschaftsgebiet."],
      hu: ["A chicha fővárosa.", "Hagyományos piacok találhatók itt.", "Termékeny mezőgazdasági vidék."],
      ro: ["Capitala băuturii chicha.", "Piețe tradiționale.", "Zonă agricolă fertilă."],
      en: ["Capital of chicha.", "Traditional markets.", "Fertile agricultural area."]
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "",
      en: "Punata is a bustling and traditional city located in the 'Valle Alto' (High Valley) of Cochabamba. It is celebrated across Bolivia as the 'Pearl of the Valley' and the 'Capital of Chicha,' referring to the high-quality ancestral corn beer that is a cornerstone of local culture. The city is home to one of the most vibrant and largest agricultural markets in the region, where farmers from across the valley gather to trade produce, livestock, and textiles. Historically, the area was a major center for grain production since pre-Columbian times. Today, Punata remains a symbol of the authentic Cochabamba valley lifestyle, known for its colonial-era plaza, its rich gastronomy, and its status as a vital logistical hub for the southern part of the department."
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [],
      en: [
        "Punata is famous for its 'Rosquetes,' a traditional ring-shaped sweet bread covered in white glaze.",
        "The city holds one of the largest livestock markets in Bolivia every Tuesday.",
        "It is the capital of the Punata Province and a major educational center for the surrounding rural areas.",
        "The city's church, the Temple of San Juan Bautista, is a significant colonial architectural site."
      ]
    }
  },
  {
    id: "cotoca-cities-v2",
    type: "city",
    parent: "BO-S",
    coords: [-62.9833, -17.7500],
    name: { de: "Cotoca", hu: "Cotoca", ro: "Cotoca", en: "Cotoca" },
    description: {
      de: "Ein wichtiger Wallfahrtsort östlich von Santa Cruz, in dem die Schutzpatronin des bolivianischen Ostens verehrt wird.",
      hu: "Fontos zarándokhely Santa Cruz-tól keletre, ahol a bolíviai keleti országrész védőszentjét tisztelik.",
      ro: "Un important loc de pelerinaj la est de Santa Cruz, unde este venerată sfânta patroană a estului bolivian.",
      en: "An important pilgrimage site east of Santa Cruz where the patron saint of the Bolivian east is venerated."
    },
    facts: {
      de: ["Wallfahrtskirche von Cotoca.", "Berühmt für lokales Gebäck.", "Nahe Santa Cruz."],
      hu: ["A cotocai zarándoktemplom otthona.", "Helyi péksüteményeiről híres.", "Santa Cruz közelében fekszik."],
      ro: ["Biserica de pelerinaj din Cotoca.", "Faimos pentru produsele de patiserie locale.", "Aproape de Santa Cruz."],
      en: ["Pilgrimage church of Cotoca.", "Famous for local baked goods.", "Near Santa Cruz."]
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "",
      en: "Cotoca is a historic and deeply religious town located just 20 kilometers east of Santa Cruz de la Sierra. It is most famous as the home of the 'Virgen de Cotoca,' the patron saint of the Santa Cruz Department and the entire Bolivian East. Every December 8th, hundreds of thousands of pilgrims walk from the capital to the town's sanctuary in a massive show of faith. Beyond its religious significance, Cotoca is renowned for its traditional pottery and its delicious local treats, particularly 'paraguayos,' 'cuñapés,' and various types of artisan breads baked in clay ovens. The town maintains a colonial and rural charm that provides a stark contrast to the modern skyscraper skyline of nearby Santa Cruz, making it a popular weekend getaway for city residents."
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [],
      en: [
        "The town's sanctuary, the Sanctuary of the Virgin of Cotoca, is a national monument.",
        "Cotoca is the main center for traditional ceramic production in the Santa Cruz region.",
        "The town was officially founded in 1799, although its origins as a settlement are much older.",
        "It is the capital of the first municipal section of the Campas Province."
      ]
    }
  },
  {
    id: "ascension-de-guarayos-cities-v2",
    type: "city",
    parent: "BO-S",
    coords: [-63.1833, -15.8667],
    name: { de: "Ascensión de Guarayos", hu: "Ascensión de Guarayos", ro: "Ascensión de Guarayos", en: "Ascensión de Guarayos" },
    description: {
      de: "Eine wachsende Stadt auf halbem Weg zwischen Santa Cruz und Trinidad, die als Zentrum des Guarayos-Tals dient.",
      hu: "Növekvő város félúton Santa Cruz és Trinidad között, amely a Guarayos-völgy központjaként funkcionál.",
      ro: "Un oraș în creștere la jumătatea distanței dintre Santa Cruz și Trinidad, care servește drept centru al văii Guarayos.",
      en: "A growing city halfway between Santa Cruz and Trinidad, serving as the center of the Guarayos valley."
    },
    facts: {
      de: ["Zentrum der Guarayos-Kultur.", "Bedeutende Ananas-Produktion.", "Wichtiger Zwischenstopp."],
      hu: ["A Guarayos kultúra központja.", "Jelentős ananásztermelés.", "Fontos pihenőhely utazóknak."],
      ro: ["Centrul culturii Guarayos.", "Producție semnificativă de ananas.", "Popas important."],
      en: ["Center of Guarayos culture.", "Significant pineapple production.", "Important rest stop."]
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "",
      en: "Ascensión de Guarayos is the vibrant capital of the Guarayos Province, situated in the tropical transition zone between Santa Cruz and the Beni Department. It is the heart of the Guarayos indigenous culture, famous for its rich musical traditions, particularly baroque-inspired orchestral music that traces back to colonial times. The city is also a major agricultural hub, recognized throughout Bolivia as the 'Capital of the Pineapple' due to the exceptional quality and volume of its local production. Historically, it began as a Franciscan mission in the early 19th century, which has left a lasting architectural and cultural legacy. Today, its strategic position on the main highway between the lowlands and the Amazon makes it a vital commercial and logistical link for the region."
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [],
      en: [
        "The city is home to the Guarayos Music Institute, which trains young musicians in traditional and classical baroque music.",
        "Ascensión is a major producer of precious timber and forest products.",
        "The city's main festival is the 'Fiesta Patronal de Ascensión,' celebrated with traditional dances and elaborate wooden masks.",
        "It is located at an altitude of approximately 250 meters above sea level."
      ]
    }
  },
  {
    id: "achocalla-cities-v2",
    type: "city",
    parent: "BO-L",
    coords: [-68.1667, -16.5667],
    name: { de: "Achocalla", hu: "Achocalla", ro: "Achocalla", en: "Achocalla" },
    description: {
      de: "Ein tiefer gelegenes Talgebiet am Rand von El Alto, das der Metropole als grünes Naherholungsgebiet dient.",
      hu: "Egy mélyebben fekvő völgy El Alto szélén, amely zöld rekreációs területként szolgál a metropolisz számára.",
      ro: "O vale la o altitudine mai joasă la marginea El Alto, care servește drept zonă de recreere verde pentru metropolă.",
      en: "A lower-lying valley area on the edge of El Alto that serves as a green recreational zone for the metropolis."
    },
    facts: {
      de: ["Hat eine Lagune zur Erholung.", "Viel Landwirtschaft.", "Wärmeres Klima als El Alto."],
      hu: ["Egy lagúna is található itt a pihenni vágyóknak.", "Sok a mezőgazdasági terület.", "Melegebb a klímája, mint El Altonak."],
      ro: ["Are o lagună pentru recreere.", "Multă agricultură.", "Climă mai caldă decât El Alto."],
      en: ["Features a lagoon for recreation.", "Lots of agriculture.", "Warmer climate than El Alto."]
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "",
      en: "Achocalla is a surprisingly lush and rural valley tucked just beneath the rim of the Altiplano, right on the border of the massive cities of El Alto and La Paz. It serves as a vital 'green lung' for the metropolitan area, characterized by its traditional agricultural terraces and numerous greenhouses that supply fresh flowers and vegetables to the urban markets. The centerpiece of the municipality is the Achocalla Lagoon, a popular recreational spot where locals go to row boats and enjoy traditional meals in a scenic setting. Historically, the area was a core agricultural zone for the pre-Columbian cultures of the highlands. Despite the rapid urban expansion of its neighbors, Achocalla maintains a strong indigenous identity and a peaceful, slower pace of life that offers a stark contrast to the nearby urban chaos."
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [],
      en: [
        "The municipality is located at an altitude of 3,750 meters, making it significantly warmer than El Alto.",
        "Achocalla is famous for its production of artisanal dairy products like 'queso fresco'.",
        "The area features dramatic views of the eroded clay spires that characterize the La Paz valley.",
        "It is a popular destination for paragliders who take off from the edges of the Altiplano."
      ]
    }
  },
  {
    id: "mineros-cities-v2",
    type: "city",
    parent: "BO-S",
    coords: [-63.2333, -17.1167],
    name: { de: "Mineros", hu: "Mineros", ro: "Mineros", en: "Mineros" },
    description: {
      de: "Das Herz des Zuckerrohranbaugebiets in Nord-Santa Cruz, das für seinen industriellen Landbau von großer Bedeutung ist.",
      hu: "A cukornádtermesztő vidék szíve Észak-Santa Cruzban, amely ipari mezőgazdasága révén kiemelkedő jelentőségű.",
      ro: "Inima zonei de cultivare a trestiei de zahăr din nordul Santa Cruz, de mare importanță pentru agricultura sa industrială.",
      en: "The heart of the sugarcane growing area in northern Santa Cruz, of great importance for its industrial agriculture."
    },
    facts: {
      de: ["Umfangreicher Zuckerrohranbau.", "Dichtes Netz von Feldwegen.", "Zieht Saisonarbeiter an."],
      hu: ["Kiterjedt cukornádültetvények.", "Földutak sűrű hálózata.", "Sok idénymunkást vonz."],
      ro: ["Cultivare extinsă de trestie de zahăr.", "Rețea densă de drumuri de pământ.", "Atrage muncitori sezonieri."],
      en: ["Extensive sugarcane cultivation.", "Dense network of dirt roads.", "Attracts seasonal workers."]
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "",
      en: "Mineros is a key agricultural city located in the northern integrated zone of the Santa Cruz Department. Its history and economy are almost entirely defined by the intensive cultivation of sugarcane, which has transformed the surrounding landscape into a vast sea of green plantations. The city is a major supply center for the nearby Unagro sugar mill, one of Bolivia's most important industrial producers. Mineros has grown rapidly due to the industrialization of farming, attracting a diverse population of agricultural experts, technicians, and laborers from across the country. The city serves as a vital commercial node for the northern plains, facilitating the logistics of grain and sugar production that are essential for the nation's economy and exports."
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [],
      en: [
        "The city is known as one of the 'poles of growth' in the Santa Cruz agricultural frontier.",
        "Mineros experiences a classic tropical savanna climate with high temperatures and distinct wet and dry seasons.",
        "The surrounding area is also a major producer of soy and corn.",
        "It is located approximately 80 kilometers north of Santa Cruz de la Sierra."
      ]
    }
  },
  {
    id: "uyuni-cities-v2",
    type: "city",
    parent: "BO-P",
    coords: [-66.8250, -20.4597],
    name: { de: "Uyuni", hu: "Uyuni", ro: "Uyuni", en: "Uyuni" },
    description: {
      de: "Das raue Tor zur größten Salzwüste der Welt, geprägt von extremem Wind und einem surrealen Eisenbahnfriedhof.",
      hu: "A világ legnagyobb sósivatagának zord kapuja, amelyet az extrém szél és egy szürreális vonat-temető jellemez.",
      ro: "Poarta aspră către cel mai mare deșert de sare din lume, caracterizată prin vânt extrem și un cimitir de trenuri ireal.",
      en: "The harsh gateway to the world's largest salt flat, characterized by extreme winds and a surreal train cemetery."
    },
    facts: {
      de: ["Tor zum Salar de Uyuni.", "Bekannt für den Zugfriedhof.", "Wichtiger Tourismusort."],
      hu: ["A Salar de Uyuni kapuja.", "A vonattemetőről ismert.", "Kiemelt turisztikai központ."],
      ro: ["Poarta către Salar de Uyuni.", "Cunoscut pentru cimitirul de trenuri.", "Centru turistic important."],
      en: ["Gateway to the Salar de Uyuni.", "Known for the train cemetery.", "Important tourist center."]
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "",
      en: "Uyuni is a windswept and rugged outpost located on the high Altiplano of the Potosí Department, at a chilling 3,670 meters above sea level. It is globally famous as the primary gateway to the Salar de Uyuni, the world's largest salt flat. Historically, the city was founded in 1889 as a major railway junction and commercial hub for the mining industry, a legacy that is still visible today at the surreal 'Train Cemetery' on its outskirts. The environment is extremely harsh, with freezing nights, intense solar radiation, and frequent sandstorms. Despite its desolation, Uyuni has become one of Bolivia's most important tourist hubs, welcoming hundreds of thousands of travelers every year who use the city as a base for expeditions into the breathtaking landscapes of the salt flats and the southern lagoons."
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [],
      en: [
        "The city's name comes from the Aymara word 'Uyu,' meaning a place for livestock or a corral.",
        "Uyuni experiences some of the lowest temperatures in Bolivia, often dropping below -15°C in winter.",
        "The Train Cemetery (Cementerio de Trenes) features dozens of rusted British-made steam locomotives from the early 20th century.",
        "The city is a strategic point for the future industrialization of the salt flat's massive lithium reserves."
      ]
    }
  },
  {
    id: "san-borja-cities-v2",
    type: "city",
    parent: "BO-B",
    coords: [-66.7333, -14.8667],
    name: { de: "San Borja", hu: "San Borja", ro: "San Borja", en: "San Borja" },
    description: {
      de: "Ein geschäftiges Rinderzuchtzentrum im westlichen Beni, das als Ausgangspunkt für Dschungelexpeditionen dient.",
      hu: "Nyüzsgő szarvasmarha-tenyésztési központ Nyugat-Beniben, amely dzsungel-expedíciók kiindulópontjaként is szolgál.",
      ro: "Un centru aglomerat de creștere a vitelor în vestul Beni, care servește ca punct de plecare pentru expedițiile în junglă.",
      en: "A bustling cattle-ranching center in western Beni that serves as a starting point for jungle expeditions."
    },
    facts: {
      de: ["Zentrum der Rinderzucht.", "Heimat indigener Gruppen.", "Liegt in der Pampa-Region."],
      hu: ["A szarvasmarha-tenyésztés központja.", "Bennszülött csoportok otthona.", "A pampa régióban fekszik."],
      ro: ["Centrul creșterii vitelor.", "Acasă pentru grupuri indigene.", "Situat în regiunea pampelor."],
      en: ["Center of cattle ranching.", "Home to indigenous groups.", "Located in the pampas region."]
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "",
      en: "San Borja is a vibrant and growing city located in the western plains of the Beni Department, in a region known as the 'Pampas del Beni.' It is a major hub for the country's cattle industry, surrounded by massive ranches that produce a significant portion of Bolivia's beef. Historically, it was founded as a Jesuit mission in 1693, and its identity is deeply tied to the traditions of the local Moxos and Tsimané indigenous peoples. The city serves as a vital logistical link between the highlands and the Amazonian lowlands, situated along the main highway to Rurrenabaque. Its environment is a mix of vast tropical savannas and patches of dense rainforest, making it a key area for both agricultural production and biological conservation, including the nearby Beni Biological Station."
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [],
      en: [
        "San Borja is known as the 'Heart of the Beni' due to its central location in the department's ranching zone.",
        "The city is a gateway to the Chimán Forest and the Tsimané indigenous territory.",
        "It experiences heavy seasonal flooding that defines the rhythms of local life and ranching.",
        "The city's main square and church still reflect its Jesuit-missionary origins."
      ]
    }
  },
  {
    id: "el-torno-cities-v2",
    type: "city",
    parent: "BO-S",
    coords: [-63.3833, -17.9833],
    name: { de: "El Torno", hu: "El Torno", ro: "El Torno", en: "El Torno" },
    description: {
      de: "Eine fruchtbare Gemeinde nahe Santa Cruz, in der Zitrusfrüchte und Kaffee für den regionalen Markt angebaut werden.",
      hu: "Termékeny település Santa Cruz közelében, ahol citrusféléket és kávét termesztenek a regionális piac számára.",
      ro: "Un municipiu fertil lângă Santa Cruz, unde se cultivă citrice și cafea pentru piața regională.",
      en: "A fertile municipality near Santa Cruz where citrus fruits and coffee are grown for the regional market."
    },
    facts: {
      de: ["Teil des Amboró-Nationalparks-Einflussgebiets.", "Agrarzentrum.", "Produziert viele Zitrusfrüchte."],
      hu: ["Az Amboró Nemzeti Park vonzáskörzetének része.", "Mezőgazdasági központ.", "Sok citrusfélét termeszt."],
      ro: ["Parte a zonei de influență a Parcului Național Amboró.", "Centru agricol.", "Produce multe citrice."],
      en: ["Part of the Amboró National Park influence zone.", "Agricultural center.", "Produces many citrus fruits."]
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "",
      en: "El Torno is a picturesque and rapidly developing municipality located along the banks of the Piraí River, just southwest of Santa Cruz de la Sierra. Known as the 'Ecological Gateway' to the Santa Cruz valleys, it sits in a fertile transition zone where the tropical plains meet the first foothills of the Andes. The city is a major center for the production of citrus fruits, bananas, and high-altitude coffee, which thrive in its humid and relatively mild climate. Its proximity to the northern entrance of Amboró National Park makes it a popular spot for ecotourism and birdwatching. In recent years, El Torno has seen significant residential growth as more people from the nearby capital seek a more tranquil life in its scenic, forest-covered landscape."
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [],
      en: [
        "El Torno is famous for its 'Espejillos' waterfalls, a series of stunning natural pools and falls located nearby.",
        "The city serves as a major supplier of fresh fruits and vegetables to the markets of Santa Cruz de la Sierra.",
        "The Piraí River defines the geography of the municipality and is a favorite spot for local families during the weekends.",
        "It was officially created as an independent municipality in 1993."
      ]
    }
  },
  {
    id: "puerto-suarez-cities-v2",
    type: "city",
    parent: "BO-S",
    coords: [-57.8000, -18.9667],
    name: { de: "Puerto Suárez", hu: "Puerto Suárez", ro: "Puerto Suárez", en: "Puerto Suárez" },
    description: {
      de: "Die letzte große Stadt vor der brasilianischen Grenze, gelegen am Rand des Pantanal-Feuchtgebiets mit reichlich Eisenerz in der Nähe.",
      hu: "Az utolsó nagyváros a brazil határ előtt, a Pantanal vizes élőhelyének szélén, bőséges vasérc-készletekkel a közelben.",
      ro: "Ultimul oraș mare înainte de granița braziliană, situat la marginea zonei umede Pantanal, cu minereu de fier din abundență în apropiere.",
      en: "The last major city before the Brazilian border, located on the edge of the Pantanal wetland with abundant iron ore nearby."
    },
    facts: {
      de: ["Tor zum Pantanal.", "Nahe dem Mutún-Eisenerzberg.", "Grenzstadt zu Brasilien."],
      hu: ["A Pantanal kapuja.", "A Mutún vasérchegy közelében van.", "Határváros Brazíliával."],
      ro: ["Poarta către Pantanal.", "Aproape de muntele de fier Mutún.", "Oraș de graniță cu Brazilia."],
      en: ["Gateway to the Pantanal.", "Near the Mutún iron ore mountain.", "Border town with Brazil."]
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "",
      en: "Puerto Suárez is a strategic border city located on the shores of the Cáceres Lagoon in the extreme east of Bolivia, right at the border with Brazil. It is the main gateway to the Bolivian Pantanal, one of the world's largest and most biodiverse freshwater wetlands. Historically, the city was founded in 1875 to establish a Bolivian presence on the Paraguay-Paraná river system. Today, it is of enormous economic importance due to its proximity to the Mutún mountain, which contains one of the planet's largest and richest deposits of iron ore and manganese. Puerto Suárez is a bustling hub of cross-border trade, connected to the rest of the country by a major railway and highway, and acts as a vital link between the heart of South America and the Atlantic ports."
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [],
      en: [
        "The city is the capital of the Germán Busch Province.",
        "Puerto Suárez is home to a significant population of Caiman yacare and other wildlife typical of the Pantanal.",
        "It is located at a low altitude of about 100 meters above sea level.",
        "The nearby Puerto Busch project aims to provide Bolivia with a fully sovereign port on the Paraguay River."
      ]
    }
  },
  {
    id: "portachuelo-cities-v2",
    type: "city",
    parent: "BO-S",
    coords: [-63.4000, -17.3333],
    name: { de: "Portachuelo", hu: "Portachuelo", ro: "Portachuelo", en: "Portachuelo" },
    description: {
      de: "Bekannt im ganzen Land für seine exzellenten traditionellen Backwaren und die klassische landwirtschaftliche Produktion.",
      hu: "Országszerte híres kiváló minőségű hagyományos pékáruiról és klasszikus mezőgazdasági termeléséről.",
      ro: "Cunoscut în toată țara pentru produsele de patiserie tradiționale excelente și producția agricolă clasică.",
      en: "Known throughout the country for its excellent traditional baked goods and classical agricultural production."
    },
    facts: {
      de: ["Berühmt für traditionelles Brot und Gebäck.", "Eine der ältesten Städte in der Region.", "Fruchtbare Böden."],
      hu: ["Híres a hagyományos kenyérről és péksüteményekről.", "A régió egyik legrégebbi városa.", "Termékeny talajjal rendelkezik."],
      ro: ["Faimos pentru pâinea și produsele de patiserie tradiționale.", "Unul dintre cele mai vechi orașe din regiune.", "Soluri fertile."],
      en: ["Famous for traditional bread and pastries.", "One of the oldest towns in the region.", "Fertile soils."]
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "",
      en: "Portachuelo is a charming and historic city located in the fertile northern plains of the Santa Cruz Department. It is widely famous throughout Bolivia for its exceptional traditional culinary heritage, particularly its 'horneados' (baked goods) like sausages, 'cuñapés,' and its world-class 'roscas de arroz.' Historically, it was founded in 1770 and was one of the earliest Spanish settlements in the region, serving as a vital agricultural center. Today, Portachuelo remains a key producer of rice, sugarcane, and cattle, benefiting from the rich alluvial soils of the surrounding territory. The city's peaceful atmosphere, colonial-style plaza, and reputation for the best traditional breakfast in the department make it a favorite stop for travelers and a proud symbol of 'Camba' lowland culture."
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [],
      en: [
        "Portachuelo is known as the 'Gastronomic Capital of the North' in Santa Cruz.",
        "The city's name traditionally refers to its role as a 'narrow pass' or gateway into the northern forests.",
        "It is the capital of the Sara Province, an area with a deep agricultural tradition.",
        "The city celebrates the 'Festival del Salchichón' to honor its unique and famous local sausage variety."
      ]
    }
  },
  {
    id: "caranavi-cities-v2",
    type: "city",
    parent: "BO-L",
    coords: [-67.5500, -15.8167],
    name: { de: "Caranavi", hu: "Caranavi", ro: "Caranavi", en: "Caranavi" },
    description: {
      de: "Die Kaffee-Hauptstadt Boliviens liegt in den subtropischen Yungas-Tälern, umgeben von dichtem Grün und Obstplantagen.",
      hu: "Bolívia kávéfővárosa, amely a szubtrópusi Yungas-völgyekben fekszik, buja növényzet és gyümölcsösök ölelésében.",
      ro: "Capitala cafelei din Bolivia se află în văile subtropicale Yungas, înconjurată de verdeață densă și livezi.",
      en: "The coffee capital of Bolivia is located in the subtropical Yungas valleys, surrounded by dense greenery and orchards."
    },
    facts: {
      de: ["Kaffeehauptstadt Boliviens.", "Liegt in den Yungas.", "Sehr subtropisches Klima."],
      hu: ["Bolívia kávéfővárosa.", "A Yungas régióban fekszik.", "Erősen szubtrópusi éghajlatú."],
      ro: ["Capitala cafelei din Bolivia.", "Situat în regiunea Yungas.", "Climă foarte subtropicală."],
      en: ["Coffee capital of Bolivia.", "Located in the Yungas region.", "Very subtropical climate."]
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "",
      en: "Caranavi is the bustling and tropical 'Coffee Capital of Bolivia,' situated at the confluence of the Coroico and Yariza rivers in the lush Yungas region. Located at a relatively low altitude for the La Paz Department (600 meters), it enjoys a humid, subtropical climate that is perfect for growing high-quality Arabica coffee, as well as a wide variety of tropical fruits and coca. The city has grown rapidly from a small pioneer settlement in the mid-20th century into a major commercial and logistical hub for the entire northern La Paz region. The surrounding landscape is characterized by steep, forest-covered mountains and rushing rivers, offering a stark and beautiful contrast to the high Altiplano. For visitors, Caranavi is the heart of Bolivia's organic coffee movement and a gateway to the deeper Amazonian jungles."
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [],
      en: [
        "Caranavi produces over 80% of Bolivia's national coffee supply.",
        "The city is a major center for internal migration, as thousands of families from the highlands have settled here to farm the fertile slopes.",
        "It is home to several award-winning coffee cooperatives that export to specialized markets worldwide.",
        "The nearby 'Cascada del Amor' is a popular natural waterfall and swimming spot for locals and tourists."
      ]
    }
  },
  {
    id: "rurrenabaque-cities-v2",
    type: "city",
    parent: "BO-B",
    coords: [-67.5278, -14.4414],
    name: { de: "Rurrenabaque", hu: "Rurrenabaque", ro: "Rurrenabaque", en: "Rurrenabaque" },
    description: {
      de: "Ein weltbekannter Ausgangspunkt für Ökotourismus, um die Pampa und den Madidi-Nationalpark im Dschungel zu erkunden.",
      hu: "Világhírű ökoturisztikai kiindulópont, ahonnan a Pampák és a Madidi Nemzeti Park dzsungele is könnyen elérhető.",
      ro: "Un punct de plecare de renume mondial pentru ecoturism, pentru a explora Pampa și Parcul Național Madidi din junglă.",
      en: "A world-renowned starting point for ecotourism to explore the Pampas and the Madidi National Park in the jungle."
    },
    facts: {
      de: ["Tor zum Madidi-Nationalpark.", "Großer Ökotourismus-Hub.", "Liegt am Río Beni."],
      hu: ["A Madidi Nemzeti Park kapuja.", "Jelentős ökoturisztikai központ.", "A Beni folyó mentén található."],
      ro: ["Poarta către Parcul Național Madidi.", "Un centru major de ecoturism.", "Situat pe râul Beni."],
      en: ["Gateway to the Madidi National Park.", "Major ecotourism hub.", "Located on the Beni River."]
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "",
      en: "Rurrenabaque, often affectionately called 'Rurre,' is Bolivia's premier ecotourism destination, perched on the banks of the mighty Beni River. This charming tropical town is the strategic gateway to two of the continent's most incredible wilderness areas: the Madidi National Park, the most biodiverse on Earth, and the Yacuma Pampas, famous for its abundant wildlife like anacondas and pink dolphins. Historically a small river port, Rurrenabaque has transformed into a vibrant hub for international travelers seeking authentic jungle adventures led by expert indigenous guides. The town itself has a relaxed atmosphere, with its streets lined with moto-taxis and outdoor cafes, set against the dramatic backdrop of the last rising foothills of the Andes as they meet the vast Amazonian plains."
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [],
      en: [
        "The town is known as the 'Pearl of the Beni' for its scenic beauty and tropical charm.",
        "It is located at an elevation of only 274 meters, ensuring a hot and humid climate year-round.",
        "The name Rurrenabaque comes from a Tacana word meaning 'duck stream'.",
        "Boats from Rurre depart daily for multi-day expeditions deep into the Amazonian rainforest and savannas."
      ]
    }
  },
  {
    id: "challapata-cities-v2",
    type: "city",
    parent: "BO-O",
    coords: [-66.7667, -18.9000],
    name: { de: "Challapata", hu: "Challapata", ro: "Challapata", en: "Challapata" },
    description: {
      de: "Eine Hochlandstadt, die als eines der wichtigsten Zentren für die Produktion von Quinoa in Südamerika gilt.",
      hu: "Hegyvidéki város, amelyet Dél-Amerika egyik legfontosabb quinoatermelő központjaként tartanak számon.",
      ro: "Un oraș de munte care este considerat unul dintre cele mai importante centre de producție a quinovei din America de Sud.",
      en: "A highland city that is considered one of the most important centers for quinoa production in South America."
    },
    facts: {
      de: ["Agrarzentrum des Altiplano.", "Berühmt für den Quinoa-Anbau.", "Hat einen großen Agrarmarkt."],
      hu: ["Az Altiplano mezőgazdasági központja.", "A quinoatermesztésről híres.", "Hatalmas agrárpiaca van."],
      ro: ["Centrul agricol din Altiplano.", "Faimos pentru cultivarea quinovei.", "Are o mare piață agricolă."],
      en: ["Agricultural center of the Altiplano.", "Famous for quinoa cultivation.", "Has a large agricultural market."]
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "",
      en: "Challapata is a significant agricultural and commercial city located on the Altiplano, strategically positioned on the main highway between Oruro and Potosí. It is internationally recognized as the 'Capital of Quinoa,' as it serves as the primary processing and trade hub for the high-quality organic quinoa grown in the surrounding highlands. The city is also a major center for livestock, particularly alpacas and sheep, and its weekly market is one of the most important on the Altiplano for the trade of traditional products and textiles. Historically, Challapata has been a vital intersection for trade routes connecting the central Andes with the southern valleys. Its landscape is characterized by vast, windswept plains and the nearby Poopó Lake, reflecting its rugged but productive high-altitude identity."
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [],
      en: [
        "The city is the capital of the Eduardo Avaroa Province in the Oruro Department.",
        "Challapata is located at an altitude of approximately 3,738 meters above sea level.",
        "It is home to the Tacagua Dam, which provides vital irrigation water for the region's intensive agriculture.",
        "The city's 'Real Quinoa' variety is highly prized in international markets for its size and nutritional value."
      ]
    }
  },
  {
    id: "santa-ana-del-yacuma-cities-v2",
    type: "city",
    parent: "BO-B",
    coords: [-65.4333, -13.7500],
    name: { de: "Santa Ana del Yacuma", hu: "Santa Ana del Yacuma", ro: "Santa Ana del Yacuma", en: "Santa Ana del Yacuma" },
    description: {
      de: "Tief in den Savannen von Beni gelegen, dreht sich hier fast alles um weitläufige Rinderzucht auf riesigen Farmen.",
      hu: "Mélyen a beni szavannákon fekszik, és itt szinte minden a hatalmas farmokon folyó szarvasmarha-tenyésztés körül forog.",
      ro: "Aflat adânc în savanele din Beni, aici aproape totul se învârte în jurul creșterii extinse a vitelor la ferme uriașe.",
      en: "Located deep in the savannas of Beni, almost everything here revolves around extensive cattle ranching on giant farms."
    },
    facts: {
      de: ["Klassische Cowboy-Stadt.", "Infrastruktur für Viehzucht.", "Abgelegen im Amazonas-Tiefland."],
      hu: ["Klasszikus cowboy-város.", "Állattenyésztési infrastruktúra.", "Félreeső helyen az Amazonas-alföldön."],
      ro: ["Oraș clasic de cowboy.", "Infrastructură pentru creșterea animalelor.", "Izolat în câmpiile Amazonului."],
      en: ["Classic cowboy town.", "Infrastructure for cattle ranching.", "Isolated in the Amazon lowlands."]
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "",
      en: "Santa Ana del Yacuma is a remote and traditional city located in the heart of the seasonally flooded savannas of the Beni Department. Often called the 'Cattle Capital of the Amazon,' it is the administrative and commercial center for some of Bolivia's largest and most productive cattle ranches. The city's life and economy are deeply defined by the rhythms of the Yacuma and Rapulo rivers, which provided the primary means of transport for decades. Historically, it was founded as a Jesuit mission in 1708 and has preserved a strong sense of its unique 'moxeño' and 'vaquero' (cowboy) identity. The surrounding landscape is an infinite sea of grass dotted with forest islands, teeming with wildlife such as capybaras, caimans, and storks, making it a quintessential Amazonian frontier town."
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [],
      en: [
        "The city is the capital of the Yacuma Province, one of the largest in the department.",
        "Santa Ana is famous for its 'mototaxis' and its small, bustling airport that is a vital link to the outside world.",
        "The 'Tradición Anaitiana' is the town's most important festival, celebrated with traditional horse races and bullfights.",
        "It is located at an altitude of only 144 meters, ensuring hot tropical weather year-round."
      ]
    }
  },
  {
    id: "san-jose-de-chiquitos-cities-v2",
    type: "city",
    parent: "BO-S",
    coords: [-60.7333, -17.8333],
    name: { de: "San José de Chiquitos", hu: "San José de Chiquitos", ro: "San José de Chiquitos", en: "San José de Chiquitos" },
    description: {
      de: "Ein historisches Juwel mit der einzigen Jesuitenkirche der Region, die aus Stein statt aus Holz gebaut wurde.",
      hu: "Történelmi ékszerdoboz a régió egyetlen olyan jezsuita templomával, amelyet fa helyett kőből építettek.",
      ro: "O bijuterie istorică având singura biserică iezuită din regiune care a fost construită din piatră în loc de lemn.",
      en: "A historic jewel featuring the only Jesuit church in the region that was built entirely out of stone rather than wood."
    },
    facts: {
      de: ["Besondere Jesuitenmission aus Stein.", "Historisch sehr bedeutsam.", "Liegt an der Eisenbahn nach Brasilien."],
      hu: ["Különleges kőből épült jezsuita misszió.", "Történelmileg nagyon fontos.", "A Brazíliába tartó vasútvonalon fekszik."],
      ro: ["Misiune iezuită specială din piatră.", "Foarte semnificativ istoric.", "Situat pe calea ferată spre Brazilia."],
      en: ["Special stone Jesuit mission.", "Historically very significant.", "Located on the railway to Brazil."]
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "",
      en: "San José de Chiquitos is a stunning historical and cultural landmark in the eastern lowlands of Santa Cruz. It is world-famous for its magnificent mission church, which is the only one among the Jesuit Missions of Chiquitos that was constructed entirely from stone, brick, and lime rather than the traditional carved wood. This UNESCO World Heritage site stands as a testament to the unique 'Baroque-Mestizo' style that emerged from the encounter between European missionaries and the indigenous Chiquitano people. Historically, the town was founded in 1698 and is considered the 'Cradle of Santa Cruz,' as the original site of the city of Santa Cruz de la Sierra is located nearby at Santa Cruz la Vieja. Today, San José is a key hub on the railway connecting Bolivia with Brazil and a major center for cultural tourism and cattle ranching."
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [],
      en: [
        "The mission complex includes the church, a bell tower, a mortuary chapel, and a colegio.",
        "The nearby 'Santa Cruz la Vieja' Historical Park protects the original ruins of the first Santa Cruz city founded in 1561.",
        "San José is known for its beautiful 'Posada del Sol,' a colonial-style hotel that is an architectural attraction in itself.",
        "The city is surrounded by the impressive Serranía de San José, which offers great hiking and natural viewpoints."
      ]
    }
  },
  {
    id: "sipe-sipe-cities-v2",
    type: "city",
    parent: "BO-C",
    coords: [-66.3667, -17.4500],
    name: { de: "Sipe Sipe", hu: "Sipe Sipe", ro: "Sipe Sipe", en: "Sipe Sipe" },
    description: {
      de: "Eine ruhige Ortschaft, die von landwirtschaftlichen Feldern und nahegelegenen präkolumbianischen Ruinen wie Inka Rakay umgeben ist.",
      hu: "Csendes település, amelyet mezőgazdasági területek és a közeli prekolumbián romok (pl. Inka Rakay) vesznek körül.",
      ro: "Un sat liniștit înconjurat de câmpuri agricole și de ruine precolumbiene din apropiere, precum Inka Rakay.",
      en: "A quiet village surrounded by agricultural fields and nearby pre-Columbian ruins such as Inka Rakay."
    },
    facts: {
      de: ["Nahe den Inka-Ruinen von Inka Rakay.", "Traditionelle Traubenernte.", "Teil des Cochabamba-Tals."],
      hu: ["Az Inka Rakay romok közelében van.", "Hagyományos szőlőszüretéről ismert.", "A Cochabamba-völgy része."],
      ro: ["Aproape de ruinele Inca din Inka Rakay.", "Recolta tradițională de struguri.", "Parte a Văii Cochabamba."],
      en: ["Near the Inca ruins of Inka Rakay.", "Traditional grape harvest.", "Part of the Cochabamba Valley."]
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "",
      en: "Sipe Sipe is a peaceful and scenic municipality located at the western end of the Cochabamba valley. It is famously known as the 'City of the Grapes' and the 'Villa of the Silk,' reflecting its long history of viticulture and traditional artisan production. The city sits in the shadow of the impressive Inka Rakay ruins, a major pre-Columbian archaeological site that served as an administrative and defensive outpost for the Inca Empire. Sipe Sipe's environment is characterized by fertile lands fed by the waters of the Andes, supporting the production of high-quality grapes, maize, and diverse fruits. The city maintains a strong Andean identity, with vibrant traditional festivals and a slower pace of life that draws visitors from the nearby urban centers seeking natural beauty and historical depth."
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [],
      en: [
        "Inka Rakay offers one of the most spectacular viewpoints over the entire Cochabamba central valley.",
        "Sipe Sipe is famous for its production of 'Guarapo,' a traditional sweet fermented grape drink.",
        "The city's church features beautiful colonial architecture and is a protected historical site.",
        "It was historically a key rest point on the ancient Inca road system leading to the highlands."
      ]
    }
  },
  {
    id: "patacamaya-cities-v2",
    type: "city",
    parent: "BO-L",
    coords: [-67.9167, -17.2333],
    name: { de: "Patacamaya", hu: "Patacamaya", ro: "Patacamaya", en: "Patacamaya" },
    description: {
      de: "Eine entscheidende Straßenkreuzung auf dem Altiplano, in deren Nähe ein bedeutendes astronomisches Observatorium steht.",
      hu: "Döntő fontosságú útkereszteződés az Altiplanon, amelynek közelében egy jelentős csillagvizsgáló is áll.",
      ro: "O intersecție rutieră crucială pe Altiplano, în apropierea căreia se află un observator astronomic important.",
      en: "A crucial road junction on the Altiplano, near which a significant astronomical observatory is located."
    },
    facts: {
      de: ["Wichtiger Verkehrsknotenpunkt.", "Beherbergt ein Sternwarten-Teleskop.", "Kaltes und windiges Klima."],
      hu: ["Fontos közlekedési csomópont.", "Egy csillagászati teleszkópnak ad otthont.", "Hideg és szeles éghajlat jellemzi."],
      ro: ["Nod important de transport.", "Găzduiește un telescop de observator.", "Climă rece și cu vânt."],
      en: ["Important transport hub.", "Houses an observatory telescope.", "Cold and windy climate."]
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "",
      en: "Patacamaya is a vital transit city situated on the windswept Altiplano, about 100 kilometers south of La Paz. It is most famous as the 'Triple Crossroads of the Andes,' as it sits at the strategic junction of the main highways connecting La Paz with Oruro, Potosí, and the international route to Arica on the Chilean coast. This makes it a bustling hub for long-distance transport, with hundreds of trucks and buses passing through daily. The city is also scientifically significant for hosting the Max Schreier Astronomical Observatory, which benefits from the thin air and clear Altiplano skies for stellar observations. Despite its dusty and utilitarian appearance, Patacamaya is a resilient community with a strong Aymara cultural identity, serving as an essential logistical lung for the Bolivian highlands."
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [],
      en: [
        "The name Patacamaya is thought to come from the Aymara words meaning 'one hundred deaths,' referring to a historic battle.",
        "It is located at an altitude of approximately 3,785 meters above sea level.",
        "The city is a major center for the trade of Altiplano products like wool, potatoes, and quinoa.",
        "The nearby military base is one of the most important training centers in the department."
      ]
    }
  },
  {
    id: "puerto-quijarro-cities-v2",
    type: "city",
    parent: "BO-S",
    coords: [-57.7667, -18.9833],
    name: { de: "Puerto Quijarro", hu: "Puerto Quijarro", ro: "Puerto Quijarro", en: "Puerto Quijarro" },
    description: {
      de: "Eine lebendige Grenzstadt am Canal Tamengo, die den einzigen souveränen bolivianischen Zugang zum Flusssystem Paraguay-Paraná bietet.",
      hu: "Élénk határváros a Tamengo-csatornánál, amely az jedinül szuverén bolíviai hozzáférést biztosítja a Paraguay-Paraná folyórendszerhez.",
      ro: "Un oraș de graniță animat pe Canalul Tamengo, care oferă singurul acces suveran al Boliviei la sistemul fluvial Paraguay-Paraná.",
      en: "A lively border city on the Tamengo Canal, providing the only sovereign Bolivian access to the Paraguay-Paraná river system."
    },
    facts: {
      de: ["Boliviens freier Zugang zum Meer über Flüsse.", "Grenzstadt zu Corumbá (Brasilien).", "Kanal- und Binnenhafenstadt."],
      hu: ["Bolívia szabad folyami kijárata a tenger felé.", "Határváros Corumbá (Brazília) mellett.", "Csatorna- és belvízi kikötőváros."],
      ro: ["Accesul liber al Boliviei la mare prin râuri.", "Oraș de graniță cu Corumbá (Brazilia).", "Oraș-port pe canal și interior."],
      en: ["Bolivia's free river access to the sea.", "Border town with Corumbá (Brazil).", "Canal and inland port city."]
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "",
      en: "Puerto Quijarro is a strategic and bustling port city located on the extreme eastern edge of Bolivia, along the Tamengo Canal. It is a vital gateway for the nation's international trade, as the canal provides Bolivia with sovereign access to the massive Paraguay-Paraná Waterway, which leads directly to the Atlantic Ocean. The city sits directly on the border with Brazil, forming a continuous urban area with the neighboring city of Corumbá. Puerto Quijarro is a hive of activity, with massive grain terminals and oil storage facilities operating alongside a lively commercial center full of duty-free shops. Its identity is defined by the hot tropical climate, the constant flow of international river traffic, and its role as the terminus for the 'Tren del Pantanal' that connects the border with the city of Santa Cruz."
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [],
      en: [
        "The city is named after Antonio Quijarro, a prominent Bolivian diplomat and explorer.",
        "It is home to Puerto Aguirre, the first sovereign port in Bolivia with an exit to the Atlantic.",
        "The economy is driven by the export of soy and the import of manufactured goods from Brazil.",
        "It is located at an altitude of only 110 meters, making it one of the lowest points in Bolivia."
      ]
    }
  },
  {
    id: "vallegrande-cities-v2",
    type: "city",
    parent: "BO-S",
    coords: [-64.1000, -18.4833],
    name: { de: "Vallegrande", hu: "Vallegrande", ro: "Vallegrande", en: "Vallegrande" },
    description: {
      de: "Eine Kleinstadt in den Tälern von Santa Cruz, historisch berühmt als der Ort, an dem die sterblichen Überreste von Che Guevara ausgestellt wurden.",
      hu: "Kisváros Santa Cruz völgyeiben, amely történelmileg arról híres, hogy itt állították ki Che Guevara földi maradványait.",
      ro: "Un orășel din văile Santa Cruz, renumit istoric ca locul unde au fost expuse rămășițele lui Che Guevara.",
      en: "A small town in the valleys of Santa Cruz, historically famous as the place where Che Guevara's remains were displayed."
    },
    facts: {
      de: ["Teil der Che-Guevara-Route.", "Bekannt für Obst und Liköre.", "Mildes Tal-Klima."],
      hu: ["A Che Guevara útvonal része.", "Gyümölcseiről és likőrjeiről ismert.", "Enyhe völgyi klíma jellemzi."],
      ro: ["Parte a traseului Che Guevara.", "Cunoscut pentru fructe și lichioruri.", "Climă blândă de vale."],
      en: ["Part of the Che Guevara route.", "Known for fruit and liqueurs.", "Mild valley climate."]
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "",
      en: "Vallegrande is a picturesque and historic town nestled in the temperate valleys of the Santa Cruz Department. Known for its well-preserved colonial atmosphere and red-tiled roofs, it is a significant center for traditional agriculture, famous for its high-quality fruits, artisanal liqueurs, and specialized jerky. However, it is most internationally recognized for its tragic role in modern history; it was in Vallegrande that the remains of Ernesto 'Che' Guevara were brought and displayed in the local hospital's laundry room after his execution in the nearby village of La Higuera in 1967. Today, the town is the centerpiece of the 'Che Trail,' attracting thousands of pilgrims and historians. Despite its fame, Vallegrande maintains a quiet, authentic charm, celebrated for its vibrant carnival and its deep-rooted 'vallegrandin' culture."
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [],
      en: [
        "The town was founded in 1612 as a Spanish outpost to control the indigenous Guarani people.",
        "The local hospital's laundry room (Lavandería del Hospital Nuestro Señor de Malta) is now a historic site visited by tourists from around the world.",
        "Vallegrande is famous for its 'Asadito Vallegrandino,' a traditional pork dish.",
        "It is the capital of the Vallegrande Province, located at an elevation of 2,030 meters."
      ]
    }
  },
  {
    id: "robore-cities-v2",
    type: "city",
    parent: "BO-S",
    coords: [-59.7667, -18.3333],
    name: { de: "Roboré", hu: "Roboré", ro: "Roboré", en: "Roboré" },
    description: {
      de: "Wird wegen seiner wunderschönen Natur, den Thermalquellen und markanten Felsformationen auch die Perle des Ostens genannt.",
      hu: "Gyönyörű természeti adottságai, hőforrásai és feltűnő sziklaképződményei miatt a Kelet gyöngyszemének is nevezik.",
      ro: "Se numește și Perla Estului datorită naturii sale frumoase, izvoarelor termale și formațiunilor stâncoase izbitoare.",
      en: "Often called the Pearl of the East due to its beautiful natural surroundings, thermal springs, and striking rock formations."
    },
    facts: {
      de: ["Die Perle des Ostens.", "Touristisches Naturzentrum.", "Nahe dem Chochis-Felsen."],
      hu: ["A Kelet gyöngyszeme.", "Turisztikai természeti központ.", "A Chochis-szikla közelében fekszik."],
      ro: ["Perla Orientului.", "Centru turistic de natură.", "Aproape de stânca Chochis."],
      en: ["The Pearl of the East.", "Tourism nature center.", "Near the Chochis rock."]
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "",
      en: "Roboré is a stunning natural paradise located in the heart of the Chiquitania region, often referred to as the 'Pearl of the East.' It is famous for its breathtaking landscapes, which include dramatic sandstone mesas, crystal-clear waterfalls, and unique thermal springs. The town serves as the primary base for exploring the spectacular Tucabaca Valley and the Aguas Calientes, where a naturally warm river offers therapeutic bathing in a lush forest setting. Historically, Roboré developed as a major stop on the 'Railway to the East' that connects Santa Cruz with Brazil, and its identity is deeply tied to the iron and manganese rich hills of the region. It is a premier destination for ecotourism and adventure lovers, offering a serene escape into some of Bolivia's most untouched and diverse tropical landscapes."
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [],
      en: [
        "Roboré is home to the 'Chochis' rock, a massive and iconic red sandstone monolith that is a symbol of the region.",
        "The Aguas Calientes river is one of the few places in the world with a naturally occurring warm river for swimming.",
        "The city was founded in 1916 and is the second section of the Chiquitos Province.",
        "The nearby 'Santiago de Chiquitos' mission is one of the most beautiful and best-preserved in the area."
      ]
    }
  },
  {
    id: "san-ignacio-de-moxos-cities-v2",
    type: "city",
    parent: "BO-B",
    coords: [-65.6333, -14.9833],
    name: { de: "San Ignacio de Moxos", hu: "San Ignacio de Moxos", ro: "San Ignacio de Moxos", en: "San Ignacio de Moxos" },
    description: {
      de: "Die spirituelle Hauptstadt von Beni, weltweit berühmt für ihr farbenprächtiges Ichapekene Piesta, ein UNESCO-Weltkulturerbe.",
      hu: "Beni szellemi fővárosa, amely világszerte híres a színpompás Ichapekene Piesta ünnepéről, amely az UNESCO kulturális örökség része.",
      ro: "Capitala spirituală a departamentului Beni, faimoasă la nivel mondial pentru festivalul colorat Ichapekene Piesta.",
      en: "The spiritual capital of Beni, famous worldwide for its colorful Ichapekene Piesta, an intangible UNESCO cultural heritage."
    },
    facts: {
      de: ["Folklore-Hauptstadt des Beni.", "Jesuiten-Einfluss.", "Riesiges indigenes Fest im Juli."],
      hu: ["Beni folklórfővárosa.", "Erős jezsuita behatás.", "Hatalmas őslakos ünnep júliusban."],
      ro: ["Capitala folclorului din Beni.", "Influență iezuită.", "Festival indigen uriaș în iulie."],
      en: ["Folklore capital of Beni.", "Jesuit influence.", "Huge indigenous festival in July."]
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "",
      en: "San Ignacio de Moxos is the soulful 'Spiritual Capital of Beni,' located in the heart of the Amazonian savannas. It is world-renowned for its unique and vibrant religious syncretism, which blends Jesuit missionary traditions with the ancient beliefs of the Moxos indigenous people. The city is the stage for the 'Ichapekene Piesta,' a massive and spectacular festival held every July that features hundreds of masked dancers, including the iconic 'Macheteros' and the giant 'Abuelos.' This festival has been recognized by UNESCO as an Intangible Cultural Heritage of Humanity. Historically, the town was founded in 1689 and remains a major center for Baroque-Andean music and traditional craftsmanship. The city is set beside the Isireri lagoon and serves as a vital gateway to the TIPNIS indigenous territory and the wild forest landscapes of the central Beni."
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [],
      en: [
        "The city is famous for its prestigious Moxos Baroque Orchestra, which performs colonial music discovered in the mission archives.",
        "The 'Macheteros' dance is a powerful symbol of the Moxos culture, featuring dancers in feather headdresses with wooden swords.",
        "It is the capital of the Moxos Province and is located about 90 kilometers west of Trinidad.",
        "The town is almost entirely surrounded by seasonally flooded wetlands and tropical savannas."
      ]
    }
  },
  {
    id: "concepcion-cities-v2",
    type: "city",
    parent: "BO-S",
    coords: [-62.0167, -16.1333],
    name: { de: "Concepción", hu: "Concepción", ro: "Concepción", en: "Concepción" },
    description: {
      de: "Eine ruhige Missionarsstadt in der Chiquitania, die stolz ein alljährliches Orchideenfest veranstaltet und prächtige barocke Architektur aufweist.",
      hu: "Csendes missziós város a Chiquitaniában, amely büszkén ad otthont az éves orchideafesztiválnak és pazar barokk építészettel büszkélkedhet.",
      ro: "Un oraș misionar liniștit din Chiquitania, care găzduiește mândru un festival anual de orhidee și prezintă o arhitectură barocă magnifică.",
      en: "A quiet missionary town in the Chiquitania that proudly hosts an annual orchid festival and features magnificent baroque architecture."
    },
    facts: {
      de: ["Bekannt für Orchideen.", "Teil der Jesuitenmissionen.", "Hat eine barocke Holzkirche."],
      hu: ["Orchideáiról híres.", "A jezsuita missziók része.", "Barokk fatemploma van."],
      ro: ["Cunoscut pentru orhidee.", "Parte a misiunilor iezuite.", "Are o biserică barocă din lemn."],
      en: ["Known for orchids.", "Part of the Jesuit missions.", "Features a baroque wooden church."]
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "",
      en: "Concepción is a cultural jewel of the Santa Cruz Department and a central point on the circuit of the Jesuit Missions of Chiquitos. The city's crown jewel is its spectacular cathedral, an 18th-century wooden masterpiece that is considered one of the finest examples of Baroque-Mestizo architecture in the Americas and is a UNESCO World Heritage site. Concepción is also celebrated as the 'Sanctuary of the Orchids,' hosting a world-famous orchid festival every October to honor the incredible variety of these flowers found in the surrounding forests. Historically, the town was founded in 1709 and has preserved its serene, colonial character, with its wide streets and red-earth plazas. It remains a major center for cultural preservation, traditional music, and sustainable forest management in the Chiquitano dry forest region."
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [],
      en: [
        "The cathedral's interior features stunning hand-painted altars and intricately carved wooden columns.",
        "Concepción is the capital of the Ñuflo de Chaves Province.",
        "The city is a major center for the 'International Festival of American Renaissance and Baroque Music'.",
        "The Zapocó dam nearby provides a beautiful natural setting for birdwatching and local recreation."
      ]
    }
  },
  {
    id: "mairana-cities-v2",
    type: "city",
    parent: "BO-S",
    coords: [-63.9500, -18.1167],
    name: { de: "Mairana", hu: "Mairana", ro: "Mairana", en: "Mairana" },
    description: {
      de: "Ein idyllisches Tal südwestlich von Santa Cruz, geprägt von intensiver Landwirtschaft und dem Anbau von Tabak sowie Gemüse.",
      hu: "Idilli völgy Santa Cruz-tól délnyugatra, amelyet az intenzív mezőgazdaság, valamint a dohány- és zöldségtermesztés jellemez.",
      ro: "O vale idilică la sud-vest de Santa Cruz, caracterizată prin agricultura intensivă și cultivarea tutunului și legumelor.",
      en: "An idyllic valley southwest of Santa Cruz, characterized by intensive agriculture and the cultivation of tobacco and vegetables."
    },
    facts: {
      de: ["Liegt in den Tälern (Valles).", "Bekannt für Tabakanbau.", "Ruhiges Landleben."],
      hu: ["A völgyek (Valles) régiójában található.", "A dohánytermesztésről ismert.", "Nyugodt vidéki élet."],
      ro: ["Situat în regiunea Văilor (Valles).", "Cunoscut pentru cultivarea tutunului.", "Viață rurală liniștită."],
      en: ["Located in the Valleys (Valles) region.", "Known for tobacco farming.", "Quiet country life."]
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "",
      en: "Mairana is a vibrant agricultural town nestled in a wide, fertile valley on the eastern slopes of the Andes, within the Santa Cruz Department. Known as the 'Green Capital' of the region, it is a major supplier of fresh vegetables, corn, and tobacco to the national markets. The city sits in a strategic transition zone between the high mountains and the tropical lowlands, enjoying a pleasant, temperate climate that supports diverse farming activities. Historically, Mairana has been an important center for trade between the valleys and the lowlands, and its lively weekly markets are a showcase of the region's productive vitality. The surrounding area is also rich in archaeological sites, including ancient rock paintings and ruins that suggest the valley has been a prized place of settlement for thousands of years."
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [],
      en: [
        "Mairana is located at an elevation of 1,300 meters, providing a cooler climate than the nearby city of Santa Cruz.",
        "The municipality is one of the most important producers of high-quality tobacco in Bolivia.",
        "The nearby 'Yunga de Mairana' is a rare high-altitude forest area with unique biodiversity.",
        "The city celebrates its main traditional festival on the 24th of September."
      ]
    }
  },
  {
    id: "cliza-cities-v2",
    type: "city",
    parent: "BO-C",
    coords: [-65.9333, -17.5833],
    name: { de: "Cliza", hu: "Cliza", ro: "Cliza", en: "Cliza" },
    description: {
      de: "Eine historische Ortschaft im Cochabamba-Tal, landesweit geliebt für ihr lokales Taubengericht namens Pichón.",
      hu: "Történelmi település a Cochabamba-völgyben, amelyet országszerte szeretnek a Pichón nevű helyi galambétel miatt.",
      ro: "O așezare istorică în Valea Cochabamba, iubită la nivel național pentru preparatul său local din porumbel numit Pichón.",
      en: "A historic settlement in the Cochabamba valley, beloved nationwide for its local pigeon dish called Pichón."
    },
    facts: {
      de: ["Kulinarisch berühmt für Pichón.", "Sehr landwirtschaftlich geprägt.", "Teil des Valle Alto."],
      hu: ["Gasztronómiailag a Pichónról híres.", "Erősen mezőgazdasági jellegű.", "A Valle Alto része."],
      ro: ["Faimos culinar pentru Pichón.", "Foarte caracterizat agricol.", "Parte a Valle Alto."],
      en: ["Culinary famous for Pichón.", "Highly agricultural character.", "Part of the Valle Alto."]
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "",
      en: "Cliza is a bustling and traditional town located in the heart of the 'Valle Alto' of Cochabamba, famous for its deep agricultural roots and its unique culinary identity. Known throughout Bolivia as the 'Capital of the Pichón,' it is the place to enjoy the traditional dish of roasted squab, which draws thousands of food lovers every weekend. The city's history is tied to the ancient cultures of the valley, and it was a strategic center for grain production during the colonial era. Cliza is also home to a legendary weekly Sunday market, one of the most authentic and colorful in the department, where local farmers trade a vast array of fruits, grains, and traditional textiles. Despite modern growth, Cliza maintains a strong connection to its rural heritage and its role as a vital commercial heart for the surrounding valley communities."
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [],
      en: [
        "The city holds the 'Feria del Pichón' every July, a major gastronomic event that celebrates its most iconic dish.",
        "Cliza is the capital of the Germán Jordán Province.",
        "The city is a major producer of traditional corn varieties and specialized Andean fruits.",
        "Its colonial-style plaza and central market are highlights for visitors seeking authentic valley life."
      ]
    }
  },
  {
    id: "tarata-cities-v2",
    type: "city",
    parent: "BO-C",
    coords: [-66.0167, -17.6167],
    name: { de: "Tarata", hu: "Tarata", ro: "Tarata", en: "Tarata" },
    description: {
      de: "Oft das koloniale Juwel des Cochabamba-Tals genannt, berühmt für die Geburt zahlreicher bolivianischer Präsidenten.",
      hu: "Gyakran a Cochabamba-völgy gyarmati ékszerének nevezik, és arról híres, hogy számos bolíviai elnök születési helye.",
      ro: "Adesea numit bijuteria colonială a Văii Cochabamba, faimos pentru nașterea a numeroși președinți bolivieni.",
      en: "Often called the colonial jewel of the Cochabamba valley, famous as the birthplace of multiple Bolivian presidents."
    },
    facts: {
      de: ["Geburtsort mehrerer Präsidenten.", "Gut erhaltene Kolonialarchitektur.", "Berühmt für Chorizo-Wurst."],
      hu: ["Több elnök szülőhelye.", "Jól megőrzött gyarmati építészet.", "Híres a chorizo kolbászáról."],
      ro: ["Locul de naștere al mai multor președinți.", "Arhitectură colonială bine conservată.", "Faimos pentru cârnații chorizo."],
      en: ["Birthplace of several presidents.", "Well-preserved colonial architecture.", "Famous for chorizo sausage."]
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "",
      en: "Tarata is a historic gem tucked away in the 'Valle Alto' of Cochabamba, recognized as the 'City of the Presidents' for being the birthplace of several of Bolivia's most influential leaders, including René Barrientos and Mariano Melgarejo. The town is a living museum of colonial architecture, with its narrow cobblestone streets, elegant old houses, and the impressive San José convent. Tarata is also nationally famous for its unique 'Chorizo Tarateño,' a specialized sausage that is a staple of local gastronomy. Historically, the town was a major administrative and religious center during the Spanish colonial period, which left it with a rich cultural and artistic legacy. Today, it remains a tranquil but highly significant destination, celebrated for its authentic atmosphere, its skilled artisans, and its profound historical depth."
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [],
      en: [
        "The San José Convent in Tarata is one of the oldest and most beautiful in the region.",
        "Tarata is the capital of the Esteban Arze Province, named after a hero of the independence war who was also born here.",
        "The city hosts a famous 'Feria del Chorizo' to celebrate its culinary specialty.",
        "It is located at an altitude of approximately 2,750 meters."
      ]
    }
  },
  {
    id: "aiquile-cities-v2",
    type: "city",
    parent: "BO-C",
    coords: [-65.1833, -18.2000],
    name: { de: "Aiquile", hu: "Aiquile", ro: "Aiquile", en: "Aiquile" },
    description: {
      de: "Die unbestrittene Welthauptstadt des Charango, eines kleinen traditionellen Zupfinstruments aus den Anden.",
      hu: "A charango vitathatatlan világfővárosa, amely egy kis hagyományos andoki pengetős hangszer.",
      ro: "Capitala mondială incontestabilă a charango-ului, un mic instrument cu coarde tradițional andin.",
      en: "The undisputed world capital of the charango, a small traditional stringed instrument from the Andes."
    },
    facts: {
      de: ["Hauptstadt des Charango.", "Austragungsort des jährlichen Musikfestivals.", "Überlebte ein schweres Erdbeben 1998."],
      hu: ["A charango fővárosa.", "Éves zenei fesztivál helyszíne.", "Túlélt egy súlyos földrengést 1998-ban."],
      ro: ["Capitala instrumentului charango.", "Găzduiește festivalul anual de muzică.", "A supraviețuit unui cutremur sever în 1998."],
      en: ["Capital of the charango.", "Host of the annual music festival.", "Survived a severe earthquake in 1998."]
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "",
      en: "Aiquile is a resilient and culturally rich city located in the dry southeastern valleys of the Cochabamba Department. It is globally recognized as the 'World Capital of the Charango,' celebrated for the incredible skill of its luthiers who craft this traditional ten-stringed Andean instrument. Every November, the city hosts the 'Feria y Festival Internacional del Charango,' drawing master players and fans from around the world. Historically, Aiquile was a strategic administrative center in the colonial era, but it gained national attention in 1998 for surviving and successfully rebuilding after a catastrophic earthquake. Today, the city is a symbol of cultural pride and recovery, set in a landscape of rugged hills and deep valleys that produce specialized crops like grapes and custard apples."
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [],
      en: [
        "Aiquile is home to the 'Museo del Charango,' which houses a unique collection of instruments from various eras and styles.",
        "The city is the capital of the Campero Province.",
        "It is famous for its 'Pan de Aiquile,' a traditional sourdough bread baked in communal clay ovens.",
        "Aiquile is located at an altitude of approximately 2,250 meters."
      ]
    }
  },
  {
    id: "capinota-cities-v2",
    type: "city",
    parent: "BO-C",
    coords: [-66.2500, -17.7167],
    name: { de: "Capinota", hu: "Capinota", ro: "Capinota", en: "Capinota" },
    description: {
      de: "Eine wohlhabende Agrarstadt mit einem bedeutenden Kalksteinabbau, der die Grundlage für eine große Zementfabrik bildet.",
      hu: "Jómódú agrárváros jelentős mészkőbányászattal, amely a helyi nagy cementgyár alapját is adja.",
      ro: "Un oraș agricol prosper cu o exploatare semnificativă de calcar, care formează baza unei mari fabrici de ciment.",
      en: "A prosperous agricultural town with significant limestone mining, forming the basis for a large cement factory."
    },
    facts: {
      de: ["Bedeutende Zementindustrie (COBOCE).", "Befindet sich im unteren Tal.", "Fruchtbares Anbaugebiet."],
      hu: ["Jelentős a cementipara (COBOCE).", "Az alsó völgyben helyezkedik el.", "Termékeny mezőgazdasági vidék."],
      ro: ["Industrie semnificativă de ciment (COBOCE).", "Situat în valea inferioară.", "Zonă de cultură fertilă."],
      en: ["Significant cement industry (COBOCE).", "Located in the lower valley.", "Fertile farming area."]
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "",
      en: "Capinota is a vibrant and productive municipality located in the 'Valle Bajo' (Lower Valley) of Cochabamba, at the confluence of the Arque and Rocha rivers. It is best known nationally as the industrial heart of the valley, housing the massive COBOCE cement plant, which utilizes the region's rich limestone deposits. Beyond its industrial importance, Capinota is a major agricultural hub, famous for its high-quality grape production and its traditional 'Guarapo' wine. Historically, the area was an essential source of food for the mining cities of the Altiplano during the colonial era. Today, it remains a bustling center of commerce and transport, blending its industrial vitality with deep-rooted rural traditions and a pleasant temperate climate."
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [],
      en: [
        "The city is known as the 'Land of the Vine and the Cement'.",
        "Capinota celebrates the 'Feria del Guarapo' every year, drawing fans of the traditional local wine.",
        "It is the capital of the Capinota Province and a key link to the mining regions of northern Potosí.",
        "The city is situated at an altitude of approximately 2,380 meters."
      ]
    }
  },
  {
    id: "coroico-cities-v2",
    type: "city",
    parent: "BO-L",
    coords: [-67.7275, -16.1889],
    name: { de: "Coroico", hu: "Coroico", ro: "Coroico", en: "Coroico" },
    description: {
      de: "Das touristische Juwel der nördlichen Yungas, das oft am Ende der gefährlichen Death Road mit dem Fahrrad erreicht wird.",
      hu: "Az északi Yungas turisztikai gyöngyszeme, ahová gyakran a veszélyes Halálút végén kerékpárral érkeznek a látogatók.",
      ro: "Bijuteria turistică a nordului Yungas, la care se ajunge adesea pe bicicletă la capătul periculosului Drum al Morții.",
      en: "The tourist jewel of the northern Yungas, often reached by bicycle at the end of the dangerous Death Road."
    },
    facts: {
      de: ["Am Ende der Death Road gelegen.", "Tropisches Paradies der Yungas.", "Sehr touristisch."],
      hu: ["A Halálút végén található.", "A Yungas trópusi paradicsoma.", "Népszerű turistacélpont."],
      ro: ["Situat la capătul Drumului Morții.", "Paradis tropical în Yungas.", "Foarte turistic."],
      en: ["Located at the end of the Death Road.", "Tropical paradise of the Yungas.", "Highly touristic."]
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "",
      en: "Coroico is a breathtakingly scenic town perched on the slopes of the Andes, overlooking the lush subtropical valleys of the Yungas. It is Bolivia's premier destination for adventure seekers, famous for being the finish line of the world-renowned 'Death Road' (North Yungas Road) mountain bike tour. The town enjoys a warm, humid climate and is surrounded by dense forests, cascading waterfalls, and plantations of coffee, citrus, and coca. Historically, Coroico has been a vital center for the Afro-Bolivian community, which has preserved its unique traditions and music in the nearby village of Tocaña. Today, its spectacular viewpoints, diverse wildlife, and relaxed atmosphere make it the most popular weekend escape for residents of La Paz and international travelers alike."
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [],
      en: [
        "The town's name likely comes from an Aymara word meaning 'golden hill'.",
        "Coroico was the first municipality in Bolivia to be declared an 'Autonomous Ecological Municipality'.",
        "It is situated at an elevation of 1,750 meters, providing a perfect subtropical escape from the cold Altiplano.",
        "The nearby 'Vagante' pools are natural swimming holes in a mountain river that are popular with hikers."
      ]
    }
  },
  {
    id: "copacabana-cities-v2",
    type: "city",
    parent: "BO-L",
    coords: [-69.0833, -16.1667],
    name: { de: "Copacabana", hu: "Copacabana", ro: "Copacabana", en: "Copacabana" },
    description: {
      de: "Ein malerischer Wallfahrtsort am Ufer des Titicacasees, von dem aus die berühmte Isla del Sol besucht werden kann.",
      hu: "Festői zarándokhely a Titicaca-tó partján, ahonnan a híres Isla del Sol is könnyen megközelíthető.",
      ro: "Un oraș de pelerinaj pitoresc pe malul lacului Titicaca, de unde poate fi vizitată celebra Isla del Sol.",
      en: "A picturesque pilgrimage town on the shores of Lake Titicaca from which the famous Isla del Sol can be visited."
    },
    facts: {
      de: ["Am Ufer des Titicacasees.", "Heimat der Virgen de Copacabana.", "Ausgangspunkt zur Sonneninsel."],
      hu: ["A Titicaca-tó partján fekszik.", "A Copacabana-i Szűz otthona.", "A Nap-sziget kiindulópontja."],
      ro: ["Pe malul lacului Titicaca.", "Casa Fecioarei din Copacabana.", "Punct de plecare spre Insula Soarelui."],
      en: ["On the shores of Lake Titicaca.", "Home of the Virgin of Copacabana.", "Starting point to the Island of the Sun."]
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "",
      en: "Copacabana is a strikingly beautiful and spiritual town nestled on the shores of the deep blue Lake Titicaca. It is the most important Catholic pilgrimage site in Bolivia, home to the Basilica of Our Lady of Copacabana, a magnificent 17th-century shrine that houses the famous dark-skinned 'Virgen de Copacabana.' The town is a vibrant blend of Incan heritage and colonial tradition, set against a backdrop of jagged hills and the world's highest navigable lake. Historically, it was a sacred site long before the arrival of the Spanish, serving as a crossing point for pilgrims traveling to the Island of the Sun. Today, Copacabana is the primary hub for tourists exploring the lake's islands and is famous for the unique 'Blessing of the Cars' ritual held daily in front of the cathedral."
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [],
      en: [
        "The name 'Copacabana' likely comes from the Aymara 'Kota Kahuana,' meaning 'view of the lake'.",
        "The town is the capital of the Manco Kapac Province, named after the legendary founder of the Inca Empire.",
        "The 'Calvario' hill offers a steep climb and the most spectacular sunset views over Lake Titicaca.",
        "The world-famous Copacabana beach in Rio de Janeiro was actually named after the Virgin of this Bolivian town."
      ]
    }
  },
  {
    id: "chulumani-cities-v2",
    type: "city",
    parent: "BO-L",
    coords: [-67.5333, -16.4167],
    name: { de: "Chulumani", hu: "Chulumani", ro: "Chulumani", en: "Chulumani" },
    description: {
      de: "Die traditionelle Hauptstadt der südlichen Yungas, die historisch für ihren intensiven Koka-Anbau bekannt ist.",
      hu: "A déli Yungas hagyományos fővárosa, amely történelmileg az intenzív kokatermesztéséről ismert.",
      ro: "Capitala tradițională a regiunii Yungas de sud, cunoscută istoric pentru cultivarea intensivă a frunzelor de coca.",
      en: "The traditional capital of the southern Yungas, historically known for its intensive coca cultivation."
    },
    facts: {
      de: ["Hauptort der Sud Yungas.", "Zentrum des Koka-Anbaus.", "Herrliche Bergblicke."],
      hu: ["A Sud Yungas központja.", "A kokatermesztés egyik központja.", "Gyönyörű hegyi panoráma."],
      ro: ["Centrul regiunii Sud Yungas.", "Centrul cultivării coca.", "Vederi magnifice la munte."],
      en: ["Main town of the Sud Yungas.", "Center of coca cultivation.", "Magnificent mountain views."]
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "",
      en: "Chulumani is the historic and bustling capital of the 'Sud Yungas' region, perched spectacularly on a mountain ridge in the humid valleys east of La Paz. It is recognized as a major center for the traditional and legal cultivation of coca, which covers the surrounding hills in meticulously tiered terraces. The city enjoys a perfect subtropical climate, making it a long-time favorite weekend retreat for the residents of La Paz seeking warmth and lush scenery. Historically, Chulumani was a vital outpost for the trade of tropical products between the Amazon and the high Andes. Its identity is defined by its colonial-style buildings, its vibrant local markets, and its proximity to spectacular natural wonders like the APA-APA biological reserve and numerous mountain waterfalls."
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [],
      en: [
        "Chulumani is known as the 'Capital of the Yungas' and is the head of the Sud Yungas Province.",
        "The city is a primary producer of high-quality organic honey and citrus fruits.",
        "The name Chulumani likely means 'pigeon's water' in the Aymara language.",
        "It is situated at an altitude of approximately 1,740 meters, providing a lush, green environment."
      ]
    }
  },
  {
    id: "sorata-cities-v2",
    type: "city",
    parent: "BO-L",
    coords: [-68.6500, -15.7667],
    name: { de: "Sorata", hu: "Sorata", ro: "Sorata", en: "Sorata" },
    description: {
      de: "Ein friedliches Talstädtchen am Fuße des gigantischen Mount Illampu, das als Paradies für Wanderer und Bergsteiger gilt.",
      hu: "Békés völgyi kisváros a hatalmas Illampu hegy lábánál, amelyet a túrázók és hegymászók paradicsomaként tartanak számon.",
      ro: "Un orășel de vale pașnic la poalele gigantului munte Illampu, considerat un paradis pentru drumeți și alpiniști.",
      en: "A peaceful valley town at the foot of the massive Mount Illampu, considered a paradise for hikers and mountaineers."
    },
    facts: {
      de: ["Ausgangspunkt für Illampu-Trek.", "Subtropisches Mikroklima.", "Historischer Rückzugsort."],
      hu: ["Az Illampu túra kiindulópontja.", "Szubtrópusi mikroklímája van.", "Történelmi menedékhely."],
      ro: ["Punct de plecare pentru drumeția Illampu.", "Microclimat subtropical.", "Retragere istorică."],
      en: ["Starting point for the Illampu trek.", "Subtropical microclimate.", "Historical retreat."]
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "",
      en: "Sorata is a stunningly located town tucked into a deep, lush valley at the base of the massive Illampu and Ancohuma peaks. Often described as the 'Garden of Eden of the Andes,' it offers a surprising subtropical microclimate just a few hours from the freezing Altiplano. Historically, Sorata was a wealthy center for the rubber and quinine trade during the late 19th century, a legacy that is still reflected in its grand colonial-style plaza and old mansions. Today, it is a premier destination for international hikers and mountain bikers, serving as the starting point for the legendary Illampu Circuit and the challenging trek to the San Cristobal cave. Its atmosphere is one of profound tranquility and natural beauty, making it one of Bolivia's most beloved mountain retreats."
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [],
      en: [
        "The town was famously sieged by indigenous forces led by Túpac Katari during the uprising of 1781.",
        "Sorata is the capital of the Larecaja Province in the La Paz Department.",
        "The 'Gruta de San Pedro' is a massive local cave featuring a subterranean lagoon that can be visited by boat.",
        "It is located at an altitude of approximately 2,670 meters, surrounded by soaring snow-capped summits."
      ]
    }
  },
  {
    id: "samaipata-cities-v2",
    type: "city",
    parent: "BO-S",
    coords: [-63.8833, -18.1833],
    name: { de: "Samaipata", hu: "Samaipata", ro: "Samaipata", en: "Samaipata" },
    description: {
      de: "Ein malerischer Dorf in den Voranden, weltweit bekannt für die nahegelegene massive prä-inkaische Festung El Fuerte.",
      hu: "Festői falu az Andok előhegyeiben, amely világszerte ismert a közeli hatalmas inka előtti El Fuerte erődítményről.",
      ro: "Un sat pitoresc din pre-Anzi, cunoscut la nivel mondial pentru fortăreața masivă pre-incașă El Fuerte din apropiere.",
      en: "A picturesque village in the pre-Andes, known worldwide for the nearby massive pre-Incan fortress of El Fuerte."
    },
    facts: {
      de: ["Heimat von El Fuerte de Samaipata.", "Beliebt bei Expatriates.", "Angenehmes kühles Klima."],
      hu: ["El Fuerte de Samaipata otthona.", "Népszerű a külföldiek körében.", "Kellemes hűvös éghajlat."],
      ro: ["Acasă la El Fuerte de Samaipata.", "Popular printre expatriați.", "Climă răcoroasă plăcută."],
      en: ["Home to El Fuerte de Samaipata.", "Popular with expatriates.", "Pleasant cool climate."]
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "",
      en: "Samaipata is a charming and cosmopolitan mountain village located in the stunning foothills of the Andes, west of Santa Cruz. Its name means 'Rest in the Heights' in Quechua, reflecting its historic role as a retreat and crossroads between the mountains and the plains. The town is globally famous for the nearby 'El Fuerte de Samaipata,' a massive carved sandstone rock that is the largest pre-Columbian ceremonial site of its kind and a UNESCO World Heritage site. Samaipata has attracted a diverse community of expatriates from around the world, creating a unique, bohemian atmosphere with a wide range of international restaurants and eco-lodges. Its pleasantly cool climate and proximity to the Amboró National Park make it a premier destination for hiking, wine tasting, and cultural exploration."
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [],
      en: [
        "El Fuerte is believed to have been a sacred site for the Chané, Inca, and later Spanish cultures.",
        "Samaipata is the capital of the Florida Province in the Santa Cruz Department.",
        "The region is a major producer of high-quality organic wine and artisanal crafts.",
        "It is located at an altitude of approximately 1,650 meters, providing a 'spring-like' weather year-round."
      ]
    }
  },
  {
    id: "san-matias-cities-v2",
    type: "city",
    parent: "BO-S",
    coords: [-58.4000, -16.3667],
    name: { de: "San Matías", hu: "San Matías", ro: "San Matías", en: "San Matías" },
    description: {
      de: "Die östlichste Stadt Boliviens, die direkt an der Grenze zu Brasilien liegt und tief im Pantanal eingebettet ist.",
      hu: "Bolívia legkeletibb városa, amely közvetlenül a brazil határ mentén, mélyen a Pantanal vizes élőhelyébe ágyazva fekszik.",
      ro: "Cel mai estic oraș din Bolivia, situat chiar la granița cu Brazilia și încorporat adânc în Pantanal.",
      en: "The easternmost city of Bolivia, located right on the border with Brazil and deeply embedded in the Pantanal."
    },
    facts: {
      de: ["Extrem isolierte Lage.", "Tiefe Pantanal-Wildnis.", "Lebt vom Grenzhandel."],
      hu: ["Rendkívül elszigetelt fekvés.", "A Pantanal vadonjának mélyén van.", "A határkereskedelemből él."],
      ro: ["Locație extrem de izolată.", "Sălbăticia adâncă Pantanal.", "Trăiește din comerțul de frontieră."],
      en: ["Extremely isolated location.", "Deep Pantanal wilderness.", "Lives off border trade."]
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "",
      en: "San Matías is a remote and rugged frontier city located at the easternmost point of Bolivia, directly on the border with the Brazilian state of Mato Grosso. It is the main gateway to the San Matías Integrated Management Natural Area, a vast and wild region that forms part of the incredible Pantanal wetlands. Historically, the city has been a vital but isolated center for cross-border trade and cattle ranching. The environment is intensely tropical and defined by the seasonal floods that transform the landscape into a massive network of lagoons and savannas. Its identity is a unique mix of Bolivian and Brazilian cultures, with Portuguese often heard as much as Spanish. Despite its remoteness, San Matías is a critical point for regional security and biological conservation, protecting some of the most untouched wilderness in the continent."
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [],
      en: [
        "San Matías is the capital of the Ángel Sandoval Province.",
        "The nearby protected area is home to iconic wildlife like the Hyacinth Macaw and the Giant River Otter.",
        "The city is located at a low altitude of approximately 120 meters above sea level.",
        "Access to the rest of Bolivia is primarily via long dirt highways that can become impassable during the rainy season."
      ]
    }
  },
  {
    id: "san-ramon-cities-v2",
    type: "city",
    parent: "BO-S",
    coords: [-62.6000, -16.6000],
    name: { de: "San Ramón", hu: "San Ramón", ro: "San Ramón", en: "San Ramón" },
    description: {
      de: "Eine kleine Stadt in der Provinz Nuflo de Chavez, die vor allem als Transitpunkt und für lokalen Goldabbau bekannt ist.",
      hu: "Kisváros Nuflo de Chavez tartományban, amely elsősorban tranzitpontként és a helyi aranybányászatról ismert.",
      ro: "Un orășel din provincia Nuflo de Chavez, cel mai bine cunoscut ca punct de tranzit și pentru mineritul local de aur.",
      en: "A small town in the Nuflo de Chavez province, primarily known as a transit point and for local gold mining."
    },
    facts: {
      de: ["Kleiner Goldabbau-Ort.", "Wichtige Straßenkreuzung.", "Tor in den Nordosten."],
      hu: ["Kisebb aranybányász település.", "Fontos útkereszteződés.", "Kapu az északkeleti vidék felé."],
      ro: ["Oraș mic de exploatare a aurului.", "Intersecție rutieră importantă.", "Poarta către nord-est."],
      en: ["Small gold mining town.", "Important road junction.", "Gateway to the northeast."]
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "",
      en: "San Ramón is a busy and strategic commercial town located at a major road junction in the northeastern plains of the Santa Cruz Department. It serves as the primary 'gateway' where the highways from Santa Cruz branch off towards the Jesuit Missions of Chiquitos to the east and the Beni Amazon to the north. Historically, San Ramón gained notoriety during the rubber boom and more recently as a center for artisanal gold mining in the nearby hills of the Precambrian Shield. The town is a bustling hub for transport and logistics, characterized by its humid tropical climate and a landscape that transitions between dense dry forests and extensive cattle ranches. Its dynamic economy and strategic location make it a vital point of transit for thousands of travelers and goods moving through the Bolivian lowlands."
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [],
      en: [
        "San Ramón is known as the 'Crossroads of the East' due to its strategic position on the highway network.",
        "The city is a major center for the supply and trade of the regional gold mining industry.",
        "It is located at an altitude of approximately 250 meters above sea level.",
        "The town is a key service center for the expanding agricultural frontier in the Nuflo de Chavez Province."
      ]
    }
  },
  {
    id: "pailon-cities-v2",
    type: "city",
    parent: "BO-S",
    coords: [-62.7500, -17.6500],
    name: { de: "Pailón", hu: "Pailón", ro: "Pailón", en: "Pailón" },
    description: {
      de: "Die erste große Stadt östlich des Río Grande, ein entscheidender logistischer Punkt für die intensive Landwirtschaft der Region.",
      hu: "Az első nagyváros a Río Grande folyótól keletre, amely döntő logisztikai pont a régió intenzív mezőgazdasága számára.",
      ro: "Primul mare oraș la est de Río Grande, un punct logistic crucial pentru agricultura intensivă a regiunii.",
      en: "The first major city east of the Río Grande, a crucial logistical point for the region's intensive agriculture."
    },
    facts: {
      de: ["Tor zur Chiquitania.", "Agrarzentrum (Soja).", "Hält die Brücke über den Río Grande."],
      hu: ["A Chiquitania régió kapuja.", "Agrárközpont (szója).", "Itt található a híd a Río Grande felett."],
      ro: ["Poarta către Chiquitania.", "Centru agricol (soia).", "Deține podul peste Río Grande."],
      en: ["Gateway to the Chiquitania.", "Agricultural center (soy).", "Holds the bridge over the Río Grande."]
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "",
      en: "Pailón is a strategic and rapidly growing agricultural city located just east of the massive Río Grande, acting as the primary gateway to the vast Chiquitania plains. It is the heart of one of Bolivia's most productive agricultural zones, specializing in the industrial-scale cultivation of soy, sunflowers, and corn. The city's development is centered around the vital bridge that crosses the Río Grande, which is the only land link between the city of Santa Cruz and the extensive agricultural frontier to the east. Historically, Pailón began as a small railway settlement, but the recent agricultural boom has transformed it into a bustling center of commerce and logistics. The landscape is an infinite sea of cultivated fields, reflecting the city's role as a major driver of the national economy and food exports."
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [],
      en: [
        "Pailón is home to a significant population of Mennonite colonies that are highly integrated into the regional agricultural economy.",
        "The city is a major collection and storage point for grains destined for international export.",
        "It is the capital of the Pailón Municipality, the first section of the Chiquitos Province.",
        "The city is located at an altitude of approximately 300 meters above sea level."
      ]
    }
  },
  {
    id: "ivirgarzama-cities-v2",
    type: "city",
    parent: "BO-C",
    coords: [-64.8667, -17.0333],
    name: { de: "Ivirgarzama", hu: "Ivirgarzama", ro: "Ivirgarzama", en: "Ivirgarzama" },
    description: {
      de: "Das wirtschaftliche Zentrum der tropischen Chapare-Region, berühmt für seinen riesigen Markt und den Obsthandel.",
      hu: "A trópusi Chapare régió gazdasági központja, amely hatalmas piacáról és gyümölcskereskedelméről híres.",
      ro: "Centrul economic al regiunii tropicale Chapare, faimos pentru piața sa uriașă și comerțul cu fructe.",
      en: "The economic center of the tropical Chapare region, famous for its massive market and fruit trade."
    },
    facts: {
      de: ["Wirtschaftszentrum im Tropen-Chapare.", "Großer Wochenmarkt.", "Schnell wachsende Stadt."],
      hu: ["Gazdasági központ a trópusi Chapare-ban.", "Hatalmas heti piac.", "Gyorsan növekvő település."],
      ro: ["Centru economic în Chapare tropical.", "Piață săptămânală mare.", "Oraș cu creștere rapidă."],
      en: ["Economic center in the tropical Chapare.", "Large weekly market.", "Rapidly growing town."]
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "",
      en: "Ivirgarzama is the bustling commercial and economic heart of the tropical Chapare region in the Cochabamba Department. It has grown exponentially in recent decades from a small pioneer outpost into a major urban center, serving as the primary marketplace for the region's intensive production of bananas, pineapples, and legal coca. The city is famous for its massive 'Mercado Campesino,' where thousands of farmers from the surrounding jungles gather to trade products and supplies. Its strategic position on the main highway connecting Santa Cruz and Cochabamba makes it a vital logistical hub for the entire central tropical region. Ivirgarzama's identity is defined by its hot, humid climate, its relentless commercial energy, and its role as a powerful symbol of the social and economic development of the tropical lowlands."
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [],
      en: [
        "Ivirgarzama is known as the 'Commercial Capital of the Tropics' in the department.",
        "The city is a major center for higher education in the Chapare, home to a branch of the San Simón University.",
        "It is located at an altitude of only 230 meters, ensuring an intensely tropical environment.",
        "The city is a key center for the political and social organizations of the region's coca growers."
      ]
    }
  },
  {
    id: "chimore-cities-v2",
    type: "city",
    parent: "BO-C",
    coords: [-65.1333, -16.9833],
    name: { de: "Chimoré", hu: "Chimoré", ro: "Chimoré", en: "Chimoré" },
    description: {
      de: "Eine tropische Stadt, die vor allem durch ihren großen Flughafen und als wichtiger Produktionsort für Bananen bekannt ist.",
      hu: "Trópusi város, amely elsősorban hatalmas repülőteréről és mint jelentős banántermelő központ ismert.",
      ro: "Un oraș tropical cunoscut în primul rând pentru aeroportul său mare și ca un loc important de producție a bananelor.",
      en: "A tropical city primarily known for its large airport and as a major production site for bananas."
    },
    facts: {
      de: ["Hat einen internationalen Flughafen.", "Zentrum des Bananenanbaus.", "Heißes Tropenklima."],
      hu: ["Nemzetközi repülőtérrel rendelkezik.", "A banántermesztés központja.", "Forró trópusi éghajlat."],
      ro: ["Are un aeroport internațional.", "Centrul cultivării bananelor.", "Climă tropicală fierbinte."],
      en: ["Has an international airport.", "Center of banana cultivation.", "Hot tropical climate."]
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "",
      en: "Chimoré is a significant tropical city located in the heart of the Chapare region, famous for its strategic importance and its role as a powerhouse of Amazonian agriculture. It is most recognized for hosting the Chimoré International Airport, a massive facility that was originally a military base and now serves as a key logistical point for the region. The city is the center of a major export-oriented banana industry, with thousands of hectares of plantations surrounding the urban area. Historically, Chimoré has been a focal point for national programs aimed at agricultural development and crop substitution. Its environment is intensely tropical, with lush rainforests and powerful rivers like the Chimoré and Ichilo that define the geography and provide essential water for the region's productive vitality."
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [],
      en: [
        "The Chimoré International Airport has one of the longest runways in Bolivia, capable of handling large cargo planes.",
        "The city is a major center for the industrial processing and packaging of bananas for international export.",
        "Chimoré is home to the 'Universidad Indígena Quechua Casimiro Huanca,' a major center for indigenous education.",
        "It is located at an altitude of approximately 235 meters above sea level."
      ]
    }
  },
  {
    id: "villa-tunari-cities-v2",
    type: "city",
    parent: "BO-C",
    coords: [-65.4167, -16.9667],
    name: { de: "Villa Tunari", hu: "Villa Tunari", ro: "Villa Tunari", en: "Villa Tunari" },
    description: {
      de: "Das Tor zum bolivianischen Tropenwald, umgeben von Flüssen und Parks, was es zu einem beliebten Touristenziel macht.",
      hu: "A bolíviai trópusi erdő kapuja, amelyet folyók és parkok vesznek körül, így rendkívül népszerű turistacélpont.",
      ro: "Poarta către pădurea tropicală boliviană, înconjurată de râuri și parcuri, ceea ce o face o destinație turistică populară.",
      en: "The gateway to the Bolivian tropical forest, surrounded by rivers and parks, making it a popular tourist destination."
    },
    facts: {
      de: ["Tourismuszentrum des Chapare.", "Viel Dschungel und Flüsse.", "Sehr regnerisches Klima."],
      hu: ["A Chapare régió turisztikai központja.", "Sok dzsungel és folyó van a környéken.", "Nagyon esős az éghajlata."],
      ro: ["Centrul turistic din Chapare.", "Multă junglă și râuri.", "Climă foarte ploioasă."],
      en: ["Tourism center of the Chapare.", "Lots of jungle and rivers.", "Very rainy climate."]
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "",
      en: "Villa Tunari is the premier tourist destination in the tropical lowlands of Cochabamba, situated where the Andes finally drop into the vast Amazonian plains. It is a natural paradise surrounded by three powerful rivers—the Espíritu Santo, San Mateo, and Chapare—making it a major hub for adventure sports like rafting and kayaking. The city is the gateway to the Carrasco National Park and is famous for its lush wildlife sanctuaries, such as Parque Machía, where volunteers care for rescued monkeys and birds. Villa Tunari is also known for being one of the wettest places in Bolivia, which creates an environment of incredible green intensity and numerous spectacular waterfalls. Its combination of tropical heat, diverse wildlife, and modern eco-resorts makes it a favorite escape for both local and international nature lovers."
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [],
      en: [
        "The city is home to the 'Orquideario' (Orchid Garden), showcasing hundreds of species of native tropical orchids.",
        "Villa Tunari is a strategic logistical center on the primary highway connecting the east and west of Bolivia.",
        "The nearby 'Puerto San Francisco' offers boat trips into the deeper Amazonian river systems.",
        "It is located at an altitude of approximately 300 meters, ensuring a hot and humid tropical climate year-round."
      ]
    }
  }
];
