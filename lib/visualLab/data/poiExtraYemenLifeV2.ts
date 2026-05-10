import type { POI } from "./poi";

export const poiExtraYemenLifeV2: POI[] = [
  {
    id: "sanaa-zoo-life-v2",
    type: "park",
    parent: "YE-SA",
    coords: [44.2081, 15.3483],
    name: {
      de: "Zoo von Sanaa",
      hu: "Szanaai Állatkert",
      ro: "Grădina Zoologică din Sana'a",
      en: "Sanaa Zoo"
    },
    description: {
      de: "Einer der bekanntesten Tierparks im Jemen, der eine Vielzahl lokaler und exotischer Tierarten beherbergt und ein beliebtes Ausflugsziel für Familien in der Hauptstadt ist.",
      hu: "Jemen egyik legismertebb állatparkja, amely számos helyi és egzotikus fajnak ad otthont, és népszerű családi kirándulóhely a fővárosban.",
      ro: "Una dintre cele mai cunoscute grădini zoologice din Yemen, care găzduiește o varietate de specii locale și exotice, fiind o destinație populară pentru familiile din capitală.",
      en: "One of the most famous animal parks in Yemen, home to a variety of local and exotic species and a popular destination for families in the capital."
    },
    facts: {
      de: [
        "Wurde 1999 eröffnet.",
        "Beherbergt seltene arabische Leoparden.",
        "Umfasst auch Spielplätze für Kinder."
      ],
      hu: [
        "1999-ben nyitotta meg kapuit.",
        "Ritka arab leopárdoknak is otthont ad.",
        "Játszótereket is tartalmaz gyerekek számára."
      ],
      ro: [
        "A fost deschisă în anul 1999.",
        "Găzduiește leoparzi arabi rari.",
        "Include și locuri de joacă pentru copii."
      ],
      en: [
        "It was opened in 1999.",
        "Houses rare Arabian leopards.",
        "Includes playgrounds for children."
      ]
    }
  },
  {
    id: "taiz-zoo-life-v2",
    type: "park",
    parent: "YE-TA",
    coords: [43.9926, 13.5855],
    name: {
      de: "Zoo von Taiz",
      hu: "Taizi Állatkert",
      ro: "Grădina Zoologică din Taiz",
      en: "Taiz Zoo"
    },
    description: {
      de: "Ein bedeutender Zoo im südlichen Hochland, der für seinen Bestand an arabischen Leoparden und afrikanischen Löwen bekannt ist.",
      hu: "Jelentős állatkert a déli hegyvidéken, amely az arab leopárdok és afrikai oroszlánok állományáról ismert.",
      ro: "O grădină zoologică importantă în zonele înalte din sud, cunoscută pentru populația sa de leoparzi arabi și lei africani.",
      en: "A significant zoo in the southern highlands, known for its population of Arabian leopards and African lions."
    },
    facts: {
      de: [
        "Wurde ursprünglich für die private Sammlung des Herrschers angelegt.",
        "Einer der wichtigsten Zoos im südlichen Jemen.",
        "Bekannt für seine Großkatzengehege."
      ],
      hu: [
        "Eredetileg az uralkodó magángyűjteménye számára hozták létre.",
        "A dél-jemeni régió egyik legfontosabb állatkertje.",
        "Nagymacska-kifutóiról ismert."
      ],
      ro: [
        "A fost creat inițial pentru colecția privată a conducătorului.",
        "Una dintre cele mai importante grădini zoologice din sudul Yemenului.",
        "Renumită pentru incintele sale cu feline mari."
      ],
      en: [
        "Originally created for the ruler's private collection.",
        "One of the most important zoos in southern Yemen.",
        "Known for its big cat enclosures."
      ]
    }, image: "/poi-images/taiz-zoo-life-v2.webp"},
  {
    id: "al-sabeen-park-life-v2",
    type: "park",
    parent: "YE-SA",
    coords: [44.2058, 15.3283],
    name: {
      de: "Al-Sabeen-Park",
      hu: "Al-Szabín Park",
      ro: "Parcul Al-Sabeen",
      en: "Al Sabeen Park"
    },
    description: {
      de: "Der größte öffentliche Park in Sanaa, der weitläufige Grünflächen, Denkmäler und Erholungsbereiche für die Stadtbewohner bietet.",
      hu: "Szanaa legnagyobb nyilvános parkja, amely hatalmas zöldterületekkel, emlékművekkel és rekreációs területekkel várja a városlakókat.",
      ro: "Cel mai mare parc public din Sana'a, care oferă spații verzi întinse, monumente și zone de recreere pentru locuitorii orașului.",
      en: "The largest public park in Sanaa, offering expansive green spaces, monuments, and recreational areas for the city's residents."
    },
    facts: {
      de: [
        "Liegt nahe der berühmten Al-Saleh-Moschee.",
        "Beliebter Ort für Picknicks und Familienausflüge.",
        "Bietet weitläufige Grünflächen inmitten der Wüstenstadt."
      ],
      hu: [
        "A híres Al-Száleh mecset közelében található.",
        "Népszerű hely piknikezésre és családi kirándulásokra.",
        "Hatalmas zöldterületeket kínál a sivatagi város közepén."
      ],
      ro: [
        "Situat lângă faimoasa Moschee Al-Saleh.",
        "Un loc popular pentru picnicuri și ieșiri în familie.",
        "Oferă spații verzi întinse în mijlocul orașului deșertic."
      ],
      en: [
        "Located near the famous Al-Saleh Mosque.",
        "A popular spot for picnics and family outings.",
        "Offers extensive green spaces in the middle of the desert city."
      ]
    }, image: "/poi-images/al-sabeen-park-life-v2.webp"},
  {
    id: "funcity-sanaa-life-v2",
    type: "kid-friendly",
    parent: "YE-SA",
    coords: [44.2052, 15.3400],
    name: {
      de: "FunCity Sanaa",
      hu: "FunCity Szanaa",
      ro: "FunCity Sana'a",
      en: "FunCity Sanaa"
    },
    description: {
      de: "Ein beliebter Vergnügungspark im Zentrum von Sanaa, der Fahrgeschäfte, Spielhallen und Unterhaltung für Kinder jeden Alters bietet.",
      hu: "Népszerű vidámpark Szanaa központjában, amely vidámparki játékokat, játéktermeket és szórakozást kínál minden korosztályú gyermek számára.",
      ro: "Un parc de distracții popular în centrul orașului Sana'a, oferind atracții, săli de jocuri și divertisment pentru copiii de toate vârstele.",
      en: "A popular amusement park in central Sanaa, offering rides, arcades, and entertainment for children of all ages."
    },
    facts: {
      de: [
        "Einer der größten Vergnügungsparks im Jemen.",
        "Bietet eine Vielzahl von Fahrgeschäften und Arkaden.",
        "Ein wichtiges Unterhaltungszentrum für Familien."
      ],
      hu: [
        "Jemen egyik legnagyobb vidámparkja.",
        "Számos körhintát és játéktermet kínál.",
        "Fontos szórakoztatóközpont a családok számára."
      ],
      ro: [
        "Unul dintre cele mai mari parcuri de distracții din Yemen.",
        "Oferă o varietate de atracții și săli de jocuri.",
        "Un centru important de divertisment pentru familii."
      ],
      en: [
        "One of the largest amusement parks in Yemen.",
        "Offers a variety of rides and arcades.",
        "An important entertainment center for families."
      ]
    }, image: "/poi-images/funcity-sanaa-life-v2.webp"},
  {
    id: "bani-matar-coffee-farms-life-v2",
    type: "agriculture",
    parent: "YE-SN",
    coords: [43.9525, 15.2287],
    name: {
      de: "Kaffeeplantagen von Bani Matar",
      hu: "Bani Matar kávéültetvényei",
      ro: "Plantațiile de cafea Bani Matar",
      en: "Bani Matar Coffee Farms"
    },
    description: {
      de: "Die historischen Kaffeeterrassen von Bani Matar, westlich von Sanaa, produzieren einige der hochwertigsten Kaffeebohnen der Welt, bekannt als Matari-Kaffee.",
      hu: "Szanaától nyugatra található Bani Matar történelmi kávéteraszai a világ legkiválóbb kávébabjait, a Matari kávét termesztik.",
      ro: "Terasele istorice de cafea din Bani Matar, la vest de Sana'a, produc unele dintre boabele de cafea de cea mai înaltă calitate din lume, cunoscute sub numele de cafea Matari.",
      en: "The historic coffee terraces of Bani Matar, west of Sanaa, produce some of the highest quality coffee beans in the world, known as Matari coffee."
    },
    facts: {
      de: [
        "Liefert den weltberühmten Matari-Kaffee.",
        "Der Kaffee wächst auf steilen Steinterrassen.",
        "Die Anbaumethoden haben sich seit Jahrhunderten kaum verändert."
      ],
      hu: [
        "A világhírű Matari kávét biztosítja.",
        "A kávé meredek kőteraszokon terem.",
        "A termesztési módszerek évszázadok óta alig változtak."
      ],
      ro: [
        "Furnizează faimoasa cafea Matari.",
        "Cafeaua crește pe terase abrupte de piatră.",
        "Metodele de cultivare s-au schimbat foarte puțin de-a lungul secolelor."
      ],
      en: [
        "Supplies the world-famous Matari coffee.",
        "The coffee grows on steep stone terraces.",
        "Cultivation methods have barely changed for centuries."
      ]
    }, image: "/poi-images/bani-matar-coffee-farms-life-v2.webp"},
  {
    id: "tihama-banana-plantations-life-v2",
    type: "agriculture",
    parent: "YE-HU",
    coords: [43.1492, 14.3644],
    name: {
      de: "Bananenplantagen der Tihama",
      hu: "Tiháma banánültetvényei",
      ro: "Plantațiile de banane Tihama",
      en: "Tihama Banana Plantations"
    },
    description: {
      de: "In der fruchtbaren und heißen Tihama-Ebene am Roten Meer gedeihen riesige Bananenplantagen, die das ganze Land mit frischen Früchten versorgen.",
      hu: "A Vörös-tenger melletti termékeny és forró Tiháma-síkságon hatalmas banánültetvények virágoznak, amelyek az egész országot ellátják friss gyümölccsel.",
      ro: "În câmpia fertilă și fierbinte Tihama de la Marea Roșie înfloresc plantații uriașe de banane, care aprovizionează întreaga țară cu fructe proaspete.",
      en: "Huge banana plantations thrive in the fertile and hot Tihama plain on the Red Sea, supplying the entire country with fresh fruit."
    },
    facts: {
      de: [
        "Profitieren vom heißen und feuchten Küstenklima.",
        "Ein Großteil der jemenitischen Bananenernte stammt von hier.",
        "Sichern den Lebensunterhalt vieler lokaler Bauern."
      ],
      hu: [
        "A forró és párás tengerparti klímából profitálnak.",
        "A jemeni banántermés nagy része innen származik.",
        "Sok helyi gazdának biztosítanak megélhetést."
      ],
      ro: [
        "Beneficiază de clima caldă și umedă de coastă.",
        "O mare parte din recolta de banane din Yemen provine de aici.",
        "Asigură un mijloc de trai pentru mulți fermieri locali."
      ],
      en: [
        "Benefit from the hot and humid coastal climate.",
        "A large part of the Yemeni banana harvest comes from here.",
        "Provide a livelihood for many local farmers."
      ]
    }, image: "/poi-images/tihama-banana-plantations-life-v2.webp"},
  {
    id: "wadi-dhar-orchards-life-v2",
    type: "agriculture",
    parent: "YE-SA",
    coords: [44.1275, 15.4419],
    name: {
      de: "Obstgärten des Wadi Dhar",
      hu: "Vádi Dhar gyümölcsösei",
      ro: "Livezile din Wadi Dhar",
      en: "Orchards of Wadi Dhar"
    },
    description: {
      de: "Das Wadi Dhar in der Nähe von Sanaa ist nicht nur für seinen Felsenpalast bekannt, sondern auch für seine üppigen Gärten, in denen Granatäpfel, Aprikosen und Trauben angebaut werden.",
      hu: "A Szanaa melletti Vádi Dhar nemcsak a sziklapalotájáról, hanem buja kertjeiről is híres, ahol gránátalmát, sárgabarackot és szőlőt termesztenek.",
      ro: "Wadi Dhar, lângă Sana'a, este cunoscut nu numai pentru palatul său de piatră, ci și pentru grădinile sale luxuriante unde se cultivă rodii, caise și struguri.",
      en: "Wadi Dhar near Sanaa is known not only for its rock palace, but also for its lush gardens where pomegranates, apricots, and grapes are grown."
    },
    facts: {
      de: [
        "Berühmt für süße Granatäpfel und Aprikosen.",
        "Das Wasser aus tiefen Brunnen speist die Gärten.",
        "Bieten einen starken Kontrast zur kargen Felslandschaft."
      ],
      hu: [
        "Édes gránátalmáról és sárgabarackjáról híres.",
        "A kerteket mély kutakból származó víz táplálja.",
        "Éles ellentétben állnak a kopár sziklás tájjal."
      ],
      ro: [
        "Renumite pentru rodiile dulci și caisele.",
        "Apa din fântânile adânci alimentează grădinile.",
        "Oferă un contrast puternic cu peisajul stâncos arid."
      ],
      en: [
        "Famous for sweet pomegranates and apricots.",
        "Water from deep wells feeds the gardens.",
        "Offer a sharp contrast to the barren rocky landscape."
      ]
    }, image: "/poi-images/wadi-dhar-orchards-life-v2.webp"},
  {
    id: "socotra-aloe-fields-life-v2",
    type: "agriculture",
    parent: "YE-SU",
    coords: [53.9463, 12.5204],
    name: {
      de: "Aloe-Felder von Sokotra",
      hu: "Szokotra aloe-mezői",
      ro: "Câmpurile de aloe din Socotra",
      en: "Socotra Aloe Fields"
    },
    description: {
      de: "Auf der Insel Sokotra wächst die endemische Aloe perryi, die seit der Antike für ihre medizinischen Eigenschaften geschätzt und geerntet wird.",
      hu: "Szokotra szigetén nő az endemikus Aloe perryi, amelyet az ókor óta értékelnek és takarítanak be gyógyhatása miatt.",
      ro: "Pe insula Socotra crește specia endemică Aloe perryi, care a fost apreciată și recoltată pentru proprietățile sale medicinale încă din antichitate.",
      en: "The endemic Aloe perryi grows on the island of Socotra and has been valued and harvested for its medicinal properties since antiquity."
    },
    facts: {
      de: [
        "Aloe perryi ist endemisch auf Sokotra.",
        "Der Saft wird traditionell als Heilmittel verwendet.",
        "Bereits die alten Griechen und Römer handelten mit sokotranischer Aloe."
      ],
      hu: [
        "Az Aloe perryi Szokotra szigetén endemikus.",
        "Levét hagyományosan gyógyszerként használják.",
        "Már az ókori görögök és rómaiak is kereskedtek a szokotrai aloéval."
      ],
      ro: [
        "Aloe perryi este endemică în Socotra.",
        "Sucul său este folosit tradițional ca medicament.",
        "Chiar și grecii și romanii antici făceau comerț cu aloe de Socotra."
      ],
      en: [
        "Aloe perryi is endemic to Socotra.",
        "Its juice is traditionally used as medicine.",
        "Even the ancient Greeks and Romans traded in Socotran aloe."
      ]
    }, image: "/poi-images/socotra-aloe-fields-life-v2.webp"},
  {
    id: "hadhramaut-date-groves-life-v2",
    type: "agriculture",
    parent: "YE-HD",
    coords: [48.7492, 15.9328],
    name: {
      de: "Dattelpalmenhaine des Hadramaut",
      hu: "Hadramaut datolyapálma-ligetei",
      ro: "Livezile de palmieri din Hadhramaut",
      en: "Hadhramaut Date Groves"
    },
    description: {
      de: "Entlang des saisonalen Flusses im Wadi Hadramaut erstrecken sich endlose Dattelpalmenhaine, die eine jahrtausendealte landwirtschaftliche Tradition fortsetzen.",
      hu: "A Vádi Hadramaut szezonális folyója mentén végtelen datolyapálma-ligetek húzódnak, amelyek évezredes mezőgazdasági hagyományt folytatnak.",
      ro: "De-a lungul râului sezonier din Wadi Hadhramaut se întind livezi nesfârșite de palmieri curmali, continuând o tradiție agricolă milenară.",
      en: "Endless date palm groves stretch along the seasonal river in Wadi Hadhramaut, continuing a millennia-old agricultural tradition."
    },
    facts: {
      de: [
        "Datteln sind ein Grundnahrungsmittel im Hadramaut.",
        "Die Palmen spenden Schatten für andere landwirtschaftliche Kulturen.",
        "Werden entlang des Haupttals und seiner Nebenflüsse bewirtschaftet."
      ],
      hu: [
        "A datolya alapvető élelmiszer Hadramautban.",
        "A pálmák árnyékot adnak más mezőgazdasági növényeknek.",
        "A fő völgy és mellékfolyói mentén művelik őket."
      ],
      ro: [
        "Curmalele sunt un aliment de bază în Hadhramaut.",
        "Palmierii oferă umbră pentru alte culturi agricole.",
        "Sunt cultivate de-a lungul văii principale și a afluenților săi."
      ],
      en: [
        "Dates are a staple food in Hadhramaut.",
        "The palms provide shade for other agricultural crops.",
        "They are cultivated along the main valley and its tributaries."
      ]
    }, image: "/poi-images/hadhramaut-date-groves-life-v2.webp"},
  {
    id: "kamaran-mangroves-life-v2",
    type: "wildlife-area",
    parent: "YE-HU",
    coords: [42.5855, 15.3524],
    name: {
      de: "Mangrovenwälder von Kamaran",
      hu: "Kamaran mangroveerdői",
      ro: "Pădurile de mangrove Kamaran",
      en: "Kamaran Mangrove Forests"
    },
    description: {
      de: "Die Küsten der Kamaran-Insel im Roten Meer sind von dichten Mangrovenwäldern gesäumt, die ein wichtiges Brutgebiet für Seevögel und Meereslebewesen darstellen.",
      hu: "A Vörös-tengerben fekvő Kamaran-sziget partjait sűrű mangroveerdők szegélyezik, amelyek fontos költőhelyet jelentenek a tengeri madarak és élőlények számára.",
      ro: "Coastele insulei Kamaran din Marea Roșie sunt mărginite de păduri dense de mangrove, care reprezintă o zonă importantă de reproducere pentru păsările și viețuitoarele marine.",
      en: "The coasts of Kamaran Island in the Red Sea are lined with dense mangrove forests, which are an important breeding area for seabirds and marine life."
    },
    facts: {
      de: [
        "Bieten Schutz vor Küstenerosion.",
        "Ein wichtiges Ökosystem für junge Fische und Krustentiere.",
        "Zählen zu den wenigen erhaltenen Mangrovenwäldern am Roten Meer."
      ],
      hu: [
        "Védelmet nyújtanak a part menti erózió ellen.",
        "Fontos ökoszisztéma a fiatal halak és rákfélék számára.",
        "A Vörös-tenger kevés fennmaradt mangroveerdeinek egyike."
      ],
      ro: [
        "Oferă protecție împotriva eroziunii de coastă.",
        "Un ecosistem important pentru peștii tineri și crustacee.",
        "Printre puținele păduri de mangrove rămase la Marea Roșie."
      ],
      en: [
        "Provide protection against coastal erosion.",
        "An important ecosystem for young fish and crustaceans.",
        "Among the few remaining mangrove forests on the Red Sea."
      ]
    }, image: "/poi-images/kamaran-mangroves-life-v2.webp"},
  {
    id: "dhamar-qat-farms-life-v2",
    type: "agriculture",
    parent: "YE-DH",
    coords: [44.3831, 14.5427],
    name: {
      de: "Qat-Farmen von Dhamar",
      hu: "Dhamar qat-farmjai",
      ro: "Fermele de qat din Dhamar",
      en: "Dhamar Qat Farms"
    },
    description: {
      de: "Die landwirtschaftlichen Flächen rund um Dhamar sind stark vom Anbau von Qat geprägt, einer in der jemenitischen Kultur tief verwurzelten Pflanze, die auf kunstvollen Terrassen wächst.",
      hu: "Dhamar környéki mezőgazdasági területeket erősen meghatározza a qat termesztése, egy olyan növényé, amely mélyen gyökerezik a jemeni kultúrában, és művészi teraszokon terem.",
      ro: "Terenurile agricole din jurul orașului Dhamar sunt puternic influențate de cultivarea qat-ului, o plantă adânc înrădăcinată în cultura yemenită, care crește pe terase elaborate.",
      en: "The agricultural areas around Dhamar are heavily characterized by the cultivation of qat, a plant deeply rooted in Yemeni culture that grows on elaborate terraces."
    },
    facts: {
      de: [
        "Qat ist ein bedeutender Wirtschaftsfaktor in der Region.",
        "Die Sträucher benötigen große Mengen an Bewässerungswasser.",
        "Die besten Blätter werden täglich auf den lokalen Märkten verkauft."
      ],
      hu: [
        "A qat jelentős gazdasági tényező a régióban.",
        "A cserjék nagy mennyiségű öntözővizet igényelnek.",
        "A legjobb leveleket naponta értékesítik a helyi piacokon."
      ],
      ro: [
        "Qat-ul este un factor economic major în regiune.",
        "Arbuștii necesită cantități mari de apă pentru irigații.",
        "Cele mai bune frunze sunt vândute zilnic pe piețele locale."
      ],
      en: [
        "Qat is a major economic factor in the region.",
        "The shrubs require large amounts of irrigation water.",
        "The best leaves are sold daily in the local markets."
      ]
    }, image: "/poi-images/dhamar-qat-farms-life-v2.webp"},
  {
    id: "dawan-honey-farms-life-v2",
    type: "agriculture",
    parent: "YE-HD",
    coords: [48.3308, 15.1508],
    name: {
      de: "Imkereien im Wadi Dawan",
      hu: "Vádi Dawan méhészetei",
      ro: "Stupinele din Wadi Dawan",
      en: "Honey Farms of Wadi Dawan"
    },
    description: {
      de: "Das Wadi Dawan ist weltberühmt für seinen Sidr-Honig. Die traditionellen Imker nutzen die Blüten des Christusdorn-Baumes, um einen der teuersten und reinsten Honige der Welt zu produzieren.",
      hu: "Vádi Dawan világhírű a Sidr mézéről. A hagyományos méhészek a krisztustövis fa virágait használják a világ egyik legdrágább és legtisztább mézének előállításához.",
      ro: "Wadi Dawan este faimos în întreaga lume pentru mierea sa de Sidr. Apicultorii tradiționali folosesc florile arborelui de jujubier pentru a produce una dintre cele mai scumpe și pure tipuri de miere din lume.",
      en: "Wadi Dawan is world-famous for its Sidr honey. Traditional beekeepers use the flowers of the jujube tree to produce one of the most expensive and purest honeys in the world."
    },
    facts: {
      de: [
        "Sidr-Honig gilt als einer der reinsten der Welt.",
        "Die Bienenstöcke werden traditionell aus Lehm und Ästen gebaut.",
        "Die Ernte erfolgt noch immer größtenteils in reiner Handarbeit."
      ],
      hu: [
        "A Sidr méz a világ egyik legtisztább méze.",
        "A kaptárakat hagyományosan vályogból és ágakból építik.",
        "A betakarítás még mindig nagyrészt kézzel történik."
      ],
      ro: [
        "Mierea de Sidr este considerată una dintre cele mai pure din lume.",
        "Stupii sunt construiți tradițional din lut și ramuri.",
        "Recoltarea se face încă în mare parte manual."
      ],
      en: [
        "Sidr honey is considered one of the purest in the world.",
        "The hives are traditionally built from mud and branches.",
        "Harvesting is still mostly done by hand."
      ]
    }, image: "/poi-images/dawan-honey-farms-life-v2.webp"},
  {
    id: "aden-fun-city-life-v2",
    type: "kid-friendly",
    parent: "YE-AD",
    coords: [44.9789, 12.8251],
    name: {
      de: "Fun City Aden",
      hu: "Fun City Áden",
      ro: "Fun City Aden",
      en: "Fun City Aden"
    },
    description: {
      de: "Ein familienfreundlicher Freizeitkomplex in der Hafenstadt Aden, der sowohl Einheimischen als auch Besuchern eine willkommene Abkühlung und Unterhaltung bietet.",
      hu: "Családbarát szórakoztató komplexum Áden kikötővárosában, amely a helyiek és a látogatók számára egyaránt kellemes kikapcsolódást és szórakozást kínál.",
      ro: "Un complex de agrement pentru familii în orașul port Aden, care oferă o răcorire binevenită și divertisment atât pentru localnici, cât și pentru vizitatori.",
      en: "A family-friendly leisure complex in the port city of Aden, offering a welcome cool-down and entertainment for both locals and visitors."
    },
    facts: {
      de: [
        "Ein modernes Freizeitzentrum für Familien.",
        "Verfügt über Attraktionen wie Autoscooter und Karussells.",
        "Besonders an Wochenenden und Feiertagen stark besucht."
      ],
      hu: [
        "Modern szabadidőközpont családok számára.",
        "Olyan attrakciókkal rendelkezik, mint a dodzsem és a körhinták.",
        "Különösen hétvégén és ünnepnapokon nagyon forgalmas."
      ],
      ro: [
        "Un centru modern de agrement pentru familii.",
        "Dispune de atracții precum mașinuțe tamponabile și carusele.",
        "Foarte aglomerat în special în weekend și de sărbători."
      ],
      en: [
        "A modern leisure center for families.",
        "Features attractions like bumper cars and carousels.",
        "Very busy, especially on weekends and holidays."
      ]
    }, image: "/poi-images/aden-fun-city-life-v2.webp"},
  {
    id: "ras-shouab-turtle-beach-life-v2",
    type: "wildlife-area",
    parent: "YE-SU",
    coords: [53.3888, 12.5702],
    name: {
      de: "Schildkrötenstrand von Ras Schuhab",
      hu: "Ras Schuhab teknősstrandja",
      ro: "Plaja țestoaselor de la Ras Shouab",
      en: "Ras Shouab Turtle Beach"
    },
    description: {
      de: "Der abgeschiedene Strand von Ras Schuhab auf der Insel Sokotra ist ein wichtiges Nistgebiet für Meeresschildkröten und besticht durch seinen feinen, weißen Sand und kristallklares Wasser.",
      hu: "Szokotra szigetén található elszigetelt Ras Schuhab strand fontos fészkelőhelye a tengeri teknősöknek, és finom, fehér homokjával, valamint kristálytiszta vizével nyűgöz le.",
      ro: "Plaja izolată din Ras Shouab de pe insula Socotra este o zonă importantă de cuibărit pentru țestoasele marine și impresionează cu nisipul său fin și alb și apa cristalină.",
      en: "The secluded beach of Ras Shouab on Socotra Island is an important nesting area for sea turtles and impresses with its fine, white sand and crystal-clear water."
    },
    facts: {
      de: [
        "Grüne Meeresschildkröten legen hier ihre Eier ab.",
        "Der Strand ist nur per Boot oder über steinige Pfade erreichbar.",
        "Ein geschütztes Gebiet zur Erhaltung der maritimen Fauna."
      ],
      hu: [
        "Leves teknősök rakják le itt tojásaikat.",
        "A strand csak csónakkal vagy köves ösvényeken érhető el.",
        "Védett terület a tengeri fauna megőrzése érdekében."
      ],
      ro: [
        "Testoasele verzi își depun ouăle aici.",
        "Plaja este accesibilă doar cu barca sau pe cărări pietroase.",
        "O zonă protejată pentru conservarea faunei marine."
      ],
      en: [
        "Green sea turtles lay their eggs here.",
        "The beach is only accessible by boat or via rocky paths.",
        "A protected area for the conservation of marine fauna."
      ]
    }, image: "/poi-images/ras-shouab-turtle-beach-life-v2.webp"},
  {
    id: "al-baradouni-park-life-v2",
    type: "park",
    parent: "YE-DH",
    coords: [44.4023, 14.5458],
    name: {
      de: "Al-Baradouni-Park",
      hu: "Al-Baradouni Park",
      ro: "Parcul Al-Baradouni",
      en: "Al-Baradouni Park"
    },
    description: {
      de: "Dieser städtische Park in Dhamar ist nach dem berühmten jemenitischen Dichter Abdullah al-Baradouni benannt und bietet schattige Spazierwege und Blumenbeete.",
      hu: "Ezt a dhamari városi parkot a híres jemeni költőről, Abdullah al-Baradouniról nevezték el, és árnyékos sétányokat, valamint virágágyásokat kínál.",
      ro: "Acest parc urban din Dhamar poartă numele celebrului poet yemenit Abdullah al-Baradouni și oferă alei umbrite și straturi de flori.",
      en: "This urban park in Dhamar is named after the famous Yemeni poet Abdullah al-Baradouni and offers shaded walking paths and flower beds."
    },
    facts: {
      de: [
        "Benannt nach einem der größten Poeten des Jemen.",
        "Dient als grüne Lunge der Stadt Dhamar.",
        "Ein beliebter Treffpunkt für Studenten und Schriftsteller."
      ],
      hu: [
        "Jemen egyik legnagyobb költőjéről kapta a nevét.",
        "Dhamar város zöld tüdejeként szolgál.",
        "Diákok és írók népszerű találkozóhelye."
      ],
      ro: [
        "Numit după unul dintre cei mai mari poeți ai Yemenului.",
        "Servește drept plămânul verde al orașului Dhamar.",
        "Un loc de întâlnire popular pentru studenți și scriitori."
      ],
      en: [
        "Named after one of Yemen's greatest poets.",
        "Serves as the green lung of the city of Dhamar.",
        "A popular meeting place for students and writers."
      ]
    }, image: "/poi-images/al-baradouni-park-life-v2.webp"},
  {
    id: "ibb-green-terraces-life-v2",
    type: "agriculture",
    parent: "YE-IB",
    coords: [44.1758, 13.9749],
    name: {
      de: "Grüne Terrassen von Ibb",
      hu: "Ibb zöld teraszai",
      ro: "Terasele verzi din Ibb",
      en: "Green Terraces of Ibb"
    },
    description: {
      de: "Dank der regelmäßigen Monsunregenfälle ist das Gouvernement Ibb die landwirtschaftlich produktivste Region des Landes. Die grünen Bergterrassen sind ein Meisterwerk traditioneller Landwirtschaft.",
      hu: "A rendszeres monszunesőknek köszönhetően Ibb kormányzóság az ország mezőgazdaságilag legtermékenyebb régiója. A zöld hegyi teraszok a hagyományos mezőgazdaság remekművei.",
      ro: "Datorită ploilor musonice regulate, guvernoratul Ibb este cea mai productivă regiune agricolă din țară. Terasele montane verzi sunt o capodoperă a agriculturii tradiționale.",
      en: "Thanks to regular monsoon rains, the Ibb governorate is the most agriculturally productive region in the country. The green mountain terraces are a masterpiece of traditional agriculture."
    },
    facts: {
      de: [
        "Die Terrassen verhindern Bodenerosion an den steilen Hängen.",
        "Hier werden vor allem Sorghumhirse und Gemüse angebaut.",
        "Die Landschaft leuchtet während der Regenzeit in tiefem Grün."
      ],
      hu: [
        "A teraszok megakadályozzák a talajeróziót a meredek lejtőkön.",
        "Itt főleg cirok és zöldségek teremnek.",
        "A táj az esős évszakban mélyzöld színben pompázik."
      ],
      ro: [
        "Terasele previn eroziunea solului pe pantele abrupte.",
        "Aici se cultivă în principal sorg și legume.",
        "Peisajul strălucește într-un verde intens în timpul sezonului ploios."
      ],
      en: [
        "The terraces prevent soil erosion on the steep slopes.",
        "Mainly sorghum and vegetables are grown here.",
        "The landscape shines in deep green during the rainy season."
      ]
    }, image: "/poi-images/ibb-green-terraces-life-v2.webp"},
  {
    id: "mahra-camel-breeding-life-v2",
    type: "agriculture",
    parent: "YE-MR",
    coords: [51.8153, 16.3217],
    name: {
      de: "Kamelzucht der Mahra-Region",
      hu: "Mahra-régió tevetenyésztése",
      ro: "Creșterea cămilelor în regiunea Mahra",
      en: "Mahra Camel Breeding"
    },
    description: {
      de: "Die Mahra-Region im äußersten Osten des Jemen ist für ihre einzigartigen Kamelrassen berühmt, die für den Transport und die Milchproduktion in den rauen Wüstenbedingungen unverzichtbar sind.",
      hu: "Jemen legkeletibb részén fekvő Mahra régió egyedülálló tevefajtáiról híres, amelyek elengedhetetlenek a szállításhoz és a tejtermeléshez a zord sivatagi körülmények között.",
      ro: "Regiunea Mahra din extremul est al Yemenului este renumită pentru rasele sale unice de cămile, care sunt indispensabile pentru transport și producția de lapte în condițiile aspre ale deșertului.",
      en: "The Mahra region in the far east of Yemen is famous for its unique camel breeds, which are indispensable for transportation and milk production in the harsh desert conditions."
    },
    facts: {
      de: [
        "Die Mahri-Kamele gelten als besonders ausdauernd und schnell.",
        "Sie sind tief in die Poesie und Kultur der Mahra-Nomaden verwoben.",
        "Noch heute finden in der Region traditionelle Kamelrennen statt."
      ],
      hu: [
        "A mahri tevék különösen kitartóak és gyorsak.",
        "Szorosan összefonódtak a mahra nomádok költészetével és kultúrájával.",
        "A régióban ma is tartanak hagyományos teveversenyeket."
      ],
      ro: [
        "Cămilele Mahri sunt considerate deosebit de rezistente și rapide.",
        "Ele sunt profund împletite în poezia și cultura nomazilor Mahra.",
        "Cursele tradiționale de cămile încă mai au loc în regiune astăzi."
      ],
      en: [
        "The Mahri camels are considered particularly enduring and fast.",
        "They are deeply intertwined in the poetry and culture of the Mahra nomads.",
        "Traditional camel races still take place in the region today."
      ]
    }
  },
  {
    id: "socotra-dragon-blood-nurseries-life-v2",
    type: "agriculture",
    parent: "YE-SU",
    coords: [53.9934, 12.4831],
    name: {
      de: "Drachenblutbaum-Schulen",
      hu: "Sárkányvérfa csemetekertek",
      ro: "Pepinierile de arbori sângele dragonului",
      en: "Dragon Blood Tree Nurseries"
    },
    description: {
      de: "Lokale Initiativen auf dem Diksam-Plateau haben kleine Baumschulen eingerichtet, um die gefährdeten Drachenblutbäume nachzuzüchten und so das einzigartige Ökosystem Sokotras zu erhalten.",
      hu: "A Diksam-fennsíkon helyi kezdeményezések kisebb csemetekerteket hoztak létre, hogy a veszélyeztetett sárkányvérfákat újratelepítsék, megőrizve ezzel Szokotra egyedülálló ökoszisztémáját.",
      ro: "Inițiativele locale de pe Platoul Diksam au înființat mici pepiniere pentru a reproduce arborii sângele dragonului pe cale de dispariție, păstrând astfel ecosistemul unic al insulei Socotra.",
      en: "Local initiatives on the Diksam Plateau have established small nurseries to propagate the endangered dragon blood trees and thus preserve the unique ecosystem of Socotra."
    },
    facts: {
      de: [
        "Sollen dem Rückgang der ikonischen Baumart entgegenwirken.",
        "Die jungen Bäume wachsen in den ersten Jahren extrem langsam.",
        "Werden von lokalen Umweltschützern und internationalen Organisationen unterstützt."
      ],
      hu: [
        "Az ikonikus fafaj pusztulásának ellensúlyozására szolgálnak.",
        "A fiatal fák az első években rendkívül lassan nőnek.",
        "Helyi környezetvédők és nemzetközi szervezetek támogatják."
      ],
      ro: [
        "Menite să contracareze declinul speciilor de copaci iconici.",
        "Copacii tineri cresc extrem de lent în primii ani.",
        "Sprijinite de ecologiști locali și organizații internaționale."
      ],
      en: [
        "Intended to counteract the decline of the iconic tree species.",
        "The young trees grow extremely slowly in the first few years.",
        "Supported by local environmentalists and international organizations."
      ]
    }, image: "/poi-images/socotra-dragon-blood-nurseries-life-v2.webp"},
  {
    id: "al-khokha-palm-groves-life-v2",
    type: "agriculture",
    parent: "YE-HU",
    coords: [43.2422, 13.8055],
    name: {
      de: "Palmenhaine von Al-Khokha",
      hu: "Al-Khokha pálmaligetei",
      ro: "Livezile de palmieri din Al-Khokha",
      en: "Al-Khokha Palm Groves"
    },
    description: {
      de: "Die Küstenstadt Al-Khokha am Roten Meer ist von dichten, schattenspendenden Palmenhainen umgeben, die eine wichtige Einkommensquelle für die lokale Bevölkerung darstellen.",
      hu: "A Vörös-tenger partján fekvő Al-Khokha várost sűrű, árnyékot adó pálmaligetek veszik körül, amelyek fontos bevételi forrást jelentenek a helyi lakosság számára.",
      ro: "Orașul de coastă Al-Khokha de la Marea Roșie este înconjurat de livezi dense de palmieri care oferă umbră și reprezintă o importantă sursă de venit pentru populația locală.",
      en: "The coastal town of Al-Khokha on the Red Sea is surrounded by dense, shade-providing palm groves, which are an important source of income for the local population."
    },
    facts: {
      de: [
        "Spenden Schatten an den heißen Stränden des Roten Meeres.",
        "Die Palmenblätter werden traditionell zum Flechten von Matten genutzt.",
        "Ein idyllisches Gebiet für Fischer und ihre Familien."
      ],
      hu: [
        "Árnyékot adnak a Vörös-tenger forró strandjain.",
        "A pálmaleveleket hagyományosan szőnyegfonáshoz használják.",
        "Idilli terület a halászok és családjaik számára."
      ],
      ro: [
        "Oferă umbră pe plajele fierbinți de la Marea Roșie.",
        "Frunzele de palmier sunt folosite tradițional pentru țesut rogojini.",
        "O zonă idilică pentru pescari și familiile lor."
      ],
      en: [
        "Provide shade on the hot beaches of the Red Sea.",
        "The palm leaves are traditionally used for weaving mats.",
        "An idyllic area for fishermen and their families."
      ]
    }, image: "/poi-images/al-khokha-palm-groves-life-v2.webp"},
  {
    id: "zabid-cotton-fields-life-v2",
    type: "agriculture",
    parent: "YE-HU",
    coords: [43.3242, 14.1953],
    name: {
      de: "Baumwollfelder von Zabid",
      hu: "Zabid pamutmezői",
      ro: "Câmpurile de bumbac din Zabid",
      en: "Zabid Cotton Fields"
    },
    description: {
      de: "Dank der saisonalen Überschwemmungen des Wadi Zabid können in der historischen Region Zabid weite Baumwollfelder kultiviert werden, die die jemenitische Textilproduktion unterstützen.",
      hu: "A Vádi Zabid szezonális áradásainak köszönhetően a történelmi Zabid régióban hatalmas pamutmezőket művelnek, amelyek a jemeni textilipart támogatják.",
      ro: "Datorită inundațiilor sezoniere din Wadi Zabid, vaste câmpuri de bumbac pot fi cultivate în regiunea istorică Zabid, sprijinind producția de textile din Yemen.",
      en: "Thanks to the seasonal flooding of Wadi Zabid, vast cotton fields can be cultivated in the historic Zabid region, supporting Yemeni textile production."
    },
    facts: {
      de: [
        "Der Baumwollanbau hat in der Region eine lange Geschichte.",
        "Wird in feinen jemenitischen Textilien und traditioneller Kleidung verarbeitet.",
        "Die Felder leuchten während der Blütezeit weiß."
      ],
      hu: [
        "A gyapottermesztés nagy múltra tekint vissza a régióban.",
        "Finom jemeni textíliákban és hagyományos ruházatokban dolgozzák fel.",
        "A mezők virágzáskor fehéren ragyognak."
      ],
      ro: [
        "Cultivarea bumbacului are o istorie lungă în regiune.",
        "Este prelucrat în textile fine yemenite și haine tradiționale.",
        "Câmpurile strălucesc în alb în timpul sezonului de înflorire."
      ],
      en: [
        "Cotton cultivation has a long history in the region.",
        "It is processed into fine Yemeni textiles and traditional clothing.",
        "The fields shine white during the flowering season."
      ]
    }
  }
];