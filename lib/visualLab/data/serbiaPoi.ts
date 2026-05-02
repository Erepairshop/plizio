import type { POI } from "./poi";

// 1. Ország
export const serbiaCountry: POI = {
  id: "country-serbia",
  type: "country",
  coords: [21.0059, 44.0165],
  name: { de: "Serbien", hu: "Szerbia", ro: "Serbia", en: "Serbia" },
  description: {
    de: "Serbien liegt auf der Balkanhalbinsel. Es ist bekannt für seine reiche Geschichte, beeindruckende Festungen, orthodoxe Klöster und lebendige Städte.",
    hu: "Szerbia a Balkán-félszigeten fekszik. Gazdag történelméről, lenyűgöző erődítményeiről, ortodox kolostorairól és nyüzsgő városairól ismert.",
    ro: "Serbia este situată în Peninsula Balcanică. Este cunoscută pentru istoria sa bogată, cetățile impresionante, mănăstirile ortodoxe și orașele pline de viață.",
    en: "Serbia is located on the Balkan Peninsula. It is known for its rich history, impressive fortresses, orthodox monasteries, and vibrant cities."
  },
  descriptionAdvanced: {
    de: "",
    hu: "Szerbia a Balkán-félsziget szívében helyezkedik el, és évszázadokon át a keleti és nyugati civilizációk találkozási pontja volt. A táj északon a termékeny Pannon-síkságból áll, míg délen drámai hegyvonulatok és szurdokok uralják. Gazdag történelme során római császárok, bizánci uralkodók és oszmán hódítók hagyták rajta a nyomukat. Napjainkban az ország a hagyományos balkáni vendégszeretet és a pezsgő kulturális élet izgalmas keverékét nyújtja. Földrajz K7 — hegységek és folyók.",
    ro: "",
    en: "Serbia, positioned centrally in the Balkan Peninsula, serves as a historical crossroads between Eastern and Western civilizations. The country's diverse landscape ranges from the fertile Pannonian Plain in the north to dramatic mountain ranges and deep river gorges in the south. Throughout its rich history, Roman emperors, Byzantine rulers, and Ottoman conquerors have all left indelible marks on its culture and architecture. Today, the nation offers a compelling blend of traditional Balkan hospitality, vibrant cultural life, and a complex historical legacy. Geography K7 — mountains and rivers."
  },
  facts: {
    de: ["Hauptstadt: Belgrad", "Liegt am Balkan", "Währung: Serbischer Dinar", "Amtssprache: Serbisch", "Nicht-EU-Mitglied"],
    hu: ["Főváros: Belgrád", "A Balkánon fekszik", "Pénznem: Szerb dinár", "Hivatalos nyelv: Szerb", "Nem EU-tag"],
    ro: ["Capitala: Belgrad", "Situată în Balcani", "Moneda: Dinar sârbesc", "Limba oficială: Sârbă", "Nu este membră UE"],
    en: ["Capital: Belgrade", "Located in the Balkans", "Currency: Serbian Dinar", "Official language: Serbian", "Non-EU member"]
  },
  factsAdvanced: {
    de: [],
    hu: ["Európa és a Közel-Kelet történelmi tranzitútvonala", "17 római császár született a mai Szerbia területén", "A Duna jelentős szakasza szeli át", "Híres a pravoszláv kolostorairól", "A málna és a szilva egyik legnagyobb exportőre"],
    ro: [],
    en: ["Historically served as a major transit route between Europe and the Middle East.", "The territory of modern Serbia was the birthplace of 17 Roman emperors.", "Traversed by a significant stretch of the Danube River.", "Renowned for its collection of beautifully preserved Orthodox monasteries.", "Recognized globally as one of the largest exporters of raspberries and plums."]
  }
};

// 2. Fő régiók / Tartományok
export const serbiaRegions: POI[] = [
  {
    id: "region-vojvodina",
    type: "region",
    parent: "country-serbia",
    coords: [19.8369, 45.2671],
    name: { de: "Vojvodina", hu: "Vajdaság", ro: "Voivodina", en: "Vojvodina" },
    description: {
      de: "Die Vojvodina ist eine autonome Provinz im Norden Serbiens, bekannt für ihre multikulturelle Bevölkerung und flache Agrarlandschaft.",
      hu: "A Vajdaság egy autonóm tartomány Szerbia északi részén, amely multikulturális lakosságáról és sík mezőgazdasági tájairól ismert.",
      ro: "Voivodina este o provincie autonomă în nordul Serbiei, cunoscută pentru populația sa multiculturală și peisajul agricol plat.",
      en: "Vojvodina is an autonomous province in northern Serbia, known for its multicultural population and flat agricultural landscape."
    },
    descriptionAdvanced: {
        de: "",
        hu: "A Vajdaság Szerbia északi autonóm tartománya, amely a Pannon-síkság déli részén terül el. Ez a régió kivételes etnikai és kulturális sokszínűségéről ismert, ahol több mint 25 különböző nemzetiség él békében egymás mellett. A gazdag termőföldeknek köszönhetően az ország éléstáraként tartják számon. Építészetében és gasztronómiájában erős közép-európai, különösen osztrák-magyar hatások érvényesülnek. Történelem K8 — soknemzetiségű régiók.",
        ro: "",
        en: "Vojvodina is an autonomous province in northern Serbia, distinguished by its incredibly flat, fertile agricultural landscape that forms part of the Pannonian Plain. Historically part of the Austro-Hungarian Empire, the region developed a unique multiethnic character that is still evident in its diverse population today. The province is characterized by its orderly towns, rich cultural institutions, and extensive network of canals. Its capital, Novi Sad, serves as a vibrant center for regional commerce, arts, and academic life. Geography K8 — lowland agriculture and cultural diversity."
    },
    facts: {
      de: ["Nordprovinz", "Multikulturell", "Fruchtbare Ebenen", "Hauptstadt: Novi Sad", "Starke Landwirtschaft"],
      hu: ["Északi tartomány", "Multikulturális", "Termékeny síkságok", "Székhelye: Újvidék", "Erős mezőgazdaság"],
      ro: ["Provincie nordică", "Multiculturală", "Câmpii fertile", "Capitala: Novi Sad", "Agricultură puternică"],
      en: ["Northern province", "Multicultural", "Fertile plains", "Capital: Novi Sad", "Strong agriculture"]
    },
    factsAdvanced: {
        de: [],
        hu: ["Több mint 25 etnikai csoport otthona", "Szerbia legtermékenyebb mezőgazdasági régiója", "Hat hivatalos nyelvet használnak", "Székhelye Újvidék (Novi Sad)", "Osztrák-magyar építészeti örökség"],
        ro: [],
        en: ["Functions as an autonomous province within the Republic of Serbia.", "Home to more than 25 different ethnic groups.", "Recognizes six official languages in regional administration.", "Characterized by highly fertile soil crucial for the nation's agriculture.", "Features distinctive Austro-Hungarian architectural influences."]
    }
  },
  {
    id: "region-sumadija",
    type: "region",
    parent: "country-serbia",
    coords: [20.9167, 44.0167],
    name: { de: "Šumadija", hu: "Šumadija", ro: "Šumadija", en: "Šumadija" },
    description: {
      de: "Šumadija liegt im Herzen Serbiens und ist für ihre hügeligen Wälder und historische Bedeutung bekannt.",
      hu: "A Šumadija Szerbia szívében található, dombos erdeiről és történelmi jelentőségéről ismert.",
      ro: "Šumadija este situată în inima Serbiei și este cunoscută pentru pădurile sale deluroase și importanța istorică.",
      en: "Šumadija is located in the heart of Serbia and is known for its hilly forests and historical significance."
    },
    descriptionAdvanced: {
        de: "",
        hu: "Šumadija (Sumadia) Szerbia központi régiója, amelyet gyakran az ország történelmi és kulturális szívének is neveznek. Nevét a sűrű erdőkről (šuma) kapta, amelyek egykor beborították a dimbes-dombos tájat. Ez a vidék volt a 19. századi szerb nemzeti felkelések és a modern állam megszületésének központja. Ma lankás dombjairól, hagyományos falvairól és kiváló minőségű gyümölcsöseiről ismert. Történelem K8 — nemzetállamok kialakulása.",
        ro: "",
        en: "Šumadija, located in the central part of the country, is often referred to as the heartland of modern Serbia. Historically, its dense forests provided vital refuge and strategic advantages during the early 19th-century uprisings against Ottoman rule. The region is characterized by its rolling hills, lush orchards, and deep-rooted cultural traditions that continue to shape national identity. Today, it remains an important agricultural and industrial hub, particularly known for its fruit production. History K8 — national uprisings and state formation."
    },
    facts: {
      de: ["Zentralserbien", "Hügelige Landschaft", "Historisches Kernland", "Obstbau", "Wälder"],
      hu: ["Közép-Szerbia", "Dombos táj", "Történelmi magterület", "Gyümölcstermesztés", "Erdők"],
      ro: ["Serbia Centrală", "Peisaj deluros", "Zona istorică centrală", "Pomicultură", "Păduri"],
      en: ["Central Serbia", "Hilly landscape", "Historical heartland", "Fruit growing", "Forests"]
    },
    factsAdvanced: {
        de: [],
        hu: ["Szerbia történelmi szíve", "A név a 'šuma' (erdő) szóból ered", "A modern szerb állam bölcsője", "Híres szilvatermelő vidék", "Kragujevac a régió legfontosabb városa"],
        ro: [],
        en: ["Widely considered the historical and cultural heartland of modern Serbia.", "The name 'Šumadija' literally translates to 'forested land'.", "Served as the birthplace of the First Serbian Uprising in 1804.", "Famous for its extensive plum orchards and rakija production.", "Features a landscape dominated by rolling hills and agricultural valleys."]
    }
  }
];

// 3. Városok
export const serbiaCities: POI[] = [
  {
    id: "city-belgrade",
    type: "state-capital",
    parent: "country-serbia",
    coords: [20.4489, 44.7866],
    name: { de: "Belgrad", hu: "Belgrád", ro: "Belgrad", en: "Belgrade" },
    description: {
      de: "Belgrad ist die Hauptstadt Serbiens und liegt am Zusammenfluss von Save und Donau. Sie ist das politische, wirtschaftliche und kulturelle Zentrum.",
      hu: "Belgrád Szerbia fővárosa, a Száva és a Duna összefolyásánál fekszik. Az ország politikai, gazdasági és kulturális központja.",
      ro: "Belgrad este capitala Serbiei și este situată la confluența râurilor Sava și Dunărea. Este centrul politic, economic și cultural.",
      en: "Belgrade is the capital of Serbia and is located at the confluence of the Sava and Danube rivers. It is the political, economic, and cultural center."
    },
    descriptionAdvanced: {
        de: "",
        hu: "Belgrád, a „Fehér Város”, Európa egyik legrégebbi folyamatosan lakott települése, mely a Száva és a Duna találkozásánál fekszik. Stratégiai elhelyezkedése miatt története során több mint százszor ostromolták és negyvenszer rombolták le. Ma egy lüktető, modern metropolisz, amelyben az oszmán, a Habsburg és a szocialista építészet nyomai egyaránt felfedezhetők. A város éjszakai élete és kávéházi kultúrája világhírű. Földrajz K7 — városfejlődés folyók találkozásánál.",
        ro: "",
        en: "Belgrade, the 'White City,' stands proudly at the confluence of the Sava and Danube rivers, ranking among the oldest continuously inhabited cities in Europe. Due to its strategic location, it has been besieged over a hundred times and destroyed entirely forty times throughout its turbulent history. Today, it is a bustling modern metropolis where remnants of Ottoman, Austro-Hungarian, and socialist architecture coexist. The city is globally recognized for its vibrant nightlife, rich café culture, and enduring spirit. Geography K7 — urban development at river confluences."
    },
    facts: {
      de: ["Größte Stadt Serbiens", "Zusammenfluss von Save und Donau", "Festung Kalemegdan", "Kulturelles Zentrum", "Wichtiger Verkehrsknotenpunkt"],
      hu: ["Szerbia legnagyobb városa", "A Száva és Duna találkozása", "Kalemegdan erőd", "Kulturális központ", "Fontos közlekedési csomópont"],
      ro: ["Cel mai mare oraș din Serbia", "Confluența râurilor Sava și Dunărea", "Cetatea Kalemegdan", "Centru cultural", "Nod de transport important"],
      en: ["Largest city in Serbia", "Confluence of Sava and Danube", "Kalemegdan Fortress", "Cultural center", "Important transport hub"]
    },
    factsAdvanced: {
        de: [],
        hu: ["A Száva és a Duna összefolyásánál épült", "Története során több mint 100 alkalommal ostromolták", "A Kalemegdan erőd a város legfőbb szimbóluma", "Európa egyik legrégebbi fővárosa", "Híres a folyami hajókon lévő szórakozóhelyeiről"],
        ro: [],
        en: ["Situated precisely at the confluence of the Sava and Danube rivers.", "Has been besieged more than 100 times throughout its history.", "The Kalemegdan Fortress serves as the city's primary historical landmark.", "Ranks as one of the oldest capital cities in Europe.", "Internationally famous for its dynamic riverboat nightlife."]
    }
  },
  {
    id: "city-novi-sad",
    type: "city",
    parent: "region-vojvodina",
    coords: [19.8369, 45.2671],
    name: { de: "Novi Sad", hu: "Újvidék (Novi Sad)", ro: "Novi Sad", en: "Novi Sad" },
    description: {
      de: "Novi Sad ist die zweitgrößte Stadt Serbiens und die Hauptstadt der Vojvodina, berühmt für das EXIT-Festival und die Festung Petrovaradin.",
      hu: "Újvidék Szerbia második legnagyobb városa és a Vajdaság székhelye, híres az EXIT fesztiválról és a péterváradi erődről.",
      ro: "Novi Sad este al doilea oraș ca mărime din Serbia și capitala Voivodinei, faimos pentru festivalul EXIT și Cetatea Petrovaradin.",
      en: "Novi Sad is the second largest city in Serbia and the capital of Vojvodina, famous for the EXIT festival and Petrovaradin Fortress."
    },
    descriptionAdvanced: {
        de: "",
        hu: "Újvidék, a Vajdaság székhelye, gyakran a „Szerb Athén” néven is emlegetik kiemelkedő kulturális és oktatási szerepe miatt. A Duna bal partján elterülő város hangulata nyugodtabb és közép-európaibb, mint a fővárosé. Vele szemben, a folyó jobb partján magasodik a lenyűgöző péterváradi erőd. 2022-ben Európa Kulturális Fővárosa volt, és minden évben otthont ad a világhírű EXIT fesztiválnak. Művészet K8 — városi fesztiválok.",
        ro: "",
        en: "Novi Sad, the administrative center of Vojvodina, is frequently called the 'Serbian Athens' due to its outstanding historical role in culture and education. Situated on the left bank of the Danube, the city exudes a relaxed, Central European atmosphere that contrasts with the fast-paced capital. The imposing Petrovaradin Fortress watches over the city from the opposite riverbank. In 2022, it proudly served as a European Capital of Culture and hosts the internationally acclaimed EXIT festival annually. Arts K8 — urban festivals."
    },
    facts: {
      de: ["Zweitgrößte Stadt", "Hauptstadt der Vojvodina", "EXIT Festival", "Festung Petrovaradin", "An der Donau"],
      hu: ["Második legnagyobb város", "Vajdaság fővárosa", "EXIT Fesztivál", "Péterváradi erőd", "A Duna mentén"],
      ro: ["Al doilea oraș ca mărime", "Capitala Voivodinei", "Festivalul EXIT", "Cetatea Petrovaradin", "Pe Dunăre"],
      en: ["Second largest city", "Capital of Vojvodina", "EXIT Festival", "Petrovaradin Fortress", "On the Danube"]
    },
    factsAdvanced: {
        de: [],
        hu: ["A Vajdaság közigazgatási és kulturális központja", "2022-ben Európa Kulturális Fővárosa volt", "Az EXIT zenei fesztivál otthona", "A 'Szerb Athén' néven is ismert", "Közép-európai építészeti stílus jellemzi"],
        ro: [],
        en: ["Serves as the administrative and cultural capital of the Vojvodina province.", "Designated as a European Capital of Culture in 2022.", "Home to the world-famous EXIT music festival.", "Often referred to affectionately as the 'Serbian Athens'.", "Characterized by prominent Central European architectural styles."]
    }
  },
  {
    id: "city-nis",
    type: "city",
    parent: "country-serbia",
    coords: [21.8958, 43.3209],
    name: { de: "Niš", hu: "Niš", ro: "Niș", en: "Niš" },
    description: {
      de: "Niš ist die drittgrößte Stadt Serbiens und eine der ältesten Städte des Balkans. Sie ist der Geburtsort von Konstantin dem Großen.",
      hu: "Niš Szerbia harmadik legnagyobb városa és a Balkán egyik legrégebbi városa. Nagy Konstantin szülőhelye.",
      ro: "Niș este al treilea oraș ca mărime din Serbia și unul dintre cele mai vechi orașe din Balcani. Este locul de naștere al lui Constantin cel Mare.",
      en: "Niš is the third largest city in Serbia and one of the oldest cities in the Balkans. It is the birthplace of Constantine the Great."
    },
    descriptionAdvanced: {
        de: "",
        hu: "Niš a Balkán egyik legrégebbi városa, amely ősidők óta kulcsfontosságú csomópontként köti össze Közép-Európát a Közel-Kelettel. A város leginkább Nagy Konstantin római császár szülőhelyeként ismert, aki a milánói ediktummal engedélyezte a kereszténységet. A modern Niš a római kori maradványok, a masszív oszmán erődítmények és a pezsgő dél-szerbiai mentalitás egyedülálló ötvözete. Történelem K6 — ókori civilizációk.",
        ro: "",
        en: "Niš is one of the oldest cities in the Balkans, functioning as a vital crossroads connecting Central Europe with the Middle East since ancient times. The city is most famous as the birthplace of Roman Emperor Constantine the Great, who legalized Christianity through the Edict of Milan. Modern Niš is a unique blend of ancient Roman ruins, massive Ottoman fortifications, and a lively southern Serbian mentality. History K6 — ancient civilizations."
    },
    facts: {
      de: ["Drittgrößte Stadt", "Geburtsort von Konstantin dem Großen", "Festung von Niš", "Südserbisches Zentrum", "Schädelturm in der Nähe"],
      hu: ["Harmadik legnagyobb város", "Nagy Konstantin szülőhelye", "Niši erőd", "Dél-szerbiai központ", "Koponyatorony a közelben"],
      ro: ["Al treilea oraș ca mărime", "Locul de naștere al lui Constantin cel Mare", "Cetatea Niș", "Centrul sudului Serbiei", "Turnul Craniilor în apropiere"],
      en: ["Third largest city", "Birthplace of Constantine the Great", "Niš Fortress", "Southern Serbian center", "Skull Tower nearby"]
    },
    factsAdvanced: {
        de: [],
        hu: ["Nagy Konstantin római császár szülőhelye", "Dél-Szerbia legnagyobb városa", "A Nišava folyó partján fekszik", "Stratégiai csomópont Kelet és Nyugat között", "A Koponya-torony (Ćele Kula) tragikus emlékhelye"],
        ro: [],
        en: ["Birthplace of the influential Roman Emperor Constantine the Great.", "Ranks as the largest and most important city in Southern Serbia.", "Located along the strategic banks of the Nišava River.", "Served historically as a crucial transit hub between East and West.", "Home to the tragic and unique Skull Tower (Ćele Kula) monument."]
    }
  },
  {
    id: "city-kragujevac",
    type: "city",
    parent: "region-sumadija",
    coords: [20.9167, 44.0167],
    name: { de: "Kragujevac", hu: "Kragujevac", ro: "Kragujevac", en: "Kragujevac" },
    description: {
      de: "Kragujevac ist das historische Zentrum der Region Šumadija und bekannt für seine Automobilindustrie und Geschichte.",
      hu: "Kragujevac a Šumadija régió történelmi központja, és autóiparáról, valamint történelméről ismert.",
      ro: "Kragujevac este centrul istoric al regiunii Šumadija și este cunoscut pentru industria auto și istoria sa.",
      en: "Kragujevac is the historical center of the Šumadija region and is known for its automotive industry and history."
    },
    descriptionAdvanced: {
        de: "",
        hu: "Kragujevac a Šumadija régió központja, amely büszkén viseli a modern Szerbia első fővárosának címét a 19. század elejéről. A 20. században az ország legjelentősebb ipari központjává vált, különösen a Zastava autógyár révén. A város történelmének sötétebb lapjait a Šumarice Emlékpark őrzi, amely a második világháború tragikus eseményeire emlékeztet. Ma jelentős egyetemi város és gazdasági csomópont. Történelem K8 — iparosodás és modernizáció.",
        ro: "",
        en: "Kragujevac, the primary center of the Šumadija region, proudly holds the title of the first capital of modern Serbia established in the early 19th century. During the 20th century, it evolved into the country's most significant industrial center, spearheaded by the Zastava automotive factory. The darker chapters of its history are preserved at the Šumarice Memorial Park, commemorating the tragic events of World War II. Today, it thrives as a major university city and economic node. History K8 — industrialization and modernization."
    },
    facts: {
      de: ["Viertgrößte Stadt", "Zentrum von Šumadija", "Automobilindustrie", "Erste Hauptstadt des modernen Serbien", "Universitätstadt"],
      hu: ["Negyedik legnagyobb város", "Šumadija központja", "Autóipar", "A modern Szerbia első fővárosa", "Egyetemváros"],
      ro: ["Al patrulea oraș ca mărime", "Centrul Šumadija", "Industria auto", "Prima capitală a Serbiei moderne", "Oraș universitar"],
      en: ["Fourth largest city", "Center of Šumadija", "Automotive industry", "First capital of modern Serbia", "University city"]
    },
    factsAdvanced: {
        de: [],
        hu: ["A modern Szerbia első fővárosa volt", "A Zastava autógyár történelmi központja", "A Šumarice Emlékpark található itt", "Jelentős egyetemi város", "A Lepenica folyó partján épült"],
        ro: [],
        en: ["Served as the very first capital of the modern Serbian state.", "The historical center of the Zastava automotive manufacturing industry.", "Home to the somber Šumarice Memorial Park.", "Functions as a significant regional university city.", "Built along the banks of the Lepenica River."]
    }
  },
  {
    id: "city-subotica",
    type: "city",
    parent: "region-vojvodina",
    coords: [19.6644, 46.1000],
    name: { de: "Subotica", hu: "Szabadka (Subotica)", ro: "Subotica", en: "Subotica" },
    description: {
      de: "Subotica ist eine city in der nördlichen Vojvodina, berühmt für ihre ungarische Minderheit und die reiche Jugendstilarchitektur.",
      hu: "Szabadka egy észak-vajdasági város, híres magyar kisebbségéről és gazdag szecessziós építészetéről.",
      ro: "Subotica este un oraș în nordul Voivodinei, faimos pentru minoritatea maghiară și arhitectura bogată Art Nouveau.",
      en: "Subotica is a city in northern Vojvodina, famous for its Hungarian minority and rich Art Nouveau architecture."
    },
    descriptionAdvanced: {
        de: "",
        hu: "Szabadka (Subotica) Szerbia legészakibb városa, közvetlenül a magyar határ közelében fekszik, és páratlan szecessziós építészetéről híres. A városközpontot olyan lenyűgöző épületek díszítik, mint a Zsolnay-kerámiával borított Városháza és a Zsinagóga. A többnemzetiségű városban a szerb, magyar és horvát kultúra harmonikusan fonódik össze. A közeli Palicsi-tó népszerű pihenőhely a helyiek és a turisták körében. Művészet K8 — szecessziós építészet.",
        ro: "",
        en: "Subotica is the northernmost city in Serbia, located near the Hungarian border, and is widely celebrated for its unparalleled Art Nouveau architecture. The city center is adorned with magnificent buildings, most notably the City Hall and the Synagogue, both featuring exquisite Zsolnay ceramics. In this multiethnic city, Serbian, Hungarian, and Croatian cultures intertwine harmoniously. The nearby Lake Palić serves as a highly popular recreational destination for both locals and tourists. Arts K8 — Art Nouveau architecture."
    },
    facts: {
      de: ["Grenzstadt zu Ungarn", "Jugendstilarchitektur", "Multikulturell", "Palić-See in der Nähe", "Bedeutende ungarische Minderheit"],
      hu: ["Határváros Magyarországgal", "Szecessziós építészet", "Multikulturális", "Palić-tó a közelben", "Jelentős magyar kisebbség"],
      ro: ["Oraș de graniță cu Ungaria", "Arhitectura Art Nouveau", "Multicultural", "Lacul Palić în apropiere", "Minoritate maghiară semnificativă"],
      en: ["Border city with Hungary", "Art Nouveau architecture", "Multicultural", "Palić Lake nearby", "Significant Hungarian minority"]
    },
    factsAdvanced: {
        de: [],
        hu: ["Szerbia legészakibb nagyvárosa", "Kiemelkedő szecessziós építészeti emlékek", "Többnemzetiségű lakosság (szerb, magyar, horvát)", "A Palicsi-tó közelsége", "A Városháza Zsolnay-kerámiával díszített"],
        ro: [],
        en: ["The northernmost major city in the Republic of Serbia.", "Features outstanding examples of Art Nouveau architectural heritage.", "Maintains a diverse multiethnic population of Serbs, Hungarians, and Croats.", "Located in close proximity to the popular Lake Palić.", "The iconic City Hall is lavishly decorated with Zsolnay ceramics."]
    }
  },
  {
    id: "city-cacak",
    type: "city",
    parent: "region-sumadija",
    coords: [20.3497, 43.8914],
    name: { de: "Čačak", hu: "Čačak", ro: "Čačak", en: "Čačak" },
    description: {
      de: "Čačak ist das wirtschaftliche Zentrum der Region Moravica und bekannt für das nahe gelegene Ovčar-Kablar-Kloster-Tal.",
      hu: "Čačak a Moravica régió gazdasági központja, amely a közeli Ovčar-Kablar kolostor-völgyről ismert.",
      ro: "Čačak este centrul economic al regiunii Moravica și este cunoscut pentru valea mănăstirilor Ovčar-Kablar din apropiere.",
      en: "Čačak is the economic center of the Moravica region and is known for the nearby Ovčar-Kablar monastery valley."
    },
    descriptionAdvanced: {
        de: "",
        hu: "Čačak Nyugat-Szerbia egyik legfontosabb városa, amely a Nyugati-Morava folyó völgyében fekszik. A település a középkor óta jelentős kereskedelmi és kulturális központ, a közeli Ovčar-Kablar szurdok pedig tucatnyi kolostorával a 'szerb Athos-hegy' néven ismert. A város a nemzeti felkelések idején is fontos szerepet játszott. Ma ipari és mezőgazdasági központ, különösen híres a gyümölcstermesztésről. Történelem K7 — kolostori kultúra.",
        ro: "",
        en: "Čačak is one of the most important cities in Western Serbia, situated within the fertile valley of the West Morava River. The settlement has been a significant commercial and cultural center since the Middle Ages, with the nearby Ovčar-Kablar Gorge earning the moniker 'Serbian Mount Athos' due to its numerous monasteries. The city played a crucial role during the national uprisings for independence. Today, it is an industrial and agricultural hub, particularly famous for its fruit orchards. History K7 — monastic culture."
    },
    facts: {
      de: ["Industriezentrum", "Nahe Ovčar-Kablar-Schlucht", "Westmorava", "Nationales Freiheitsdenkmal", "Traditionsreiche Stadt"],
      hu: ["Ipari központ", "Az Ovčar-Kablar-szoros közelében", "Nyugati-Morava", "Nemzeti Szabadság Emlékmű", "Nagy hagyományú város"],
      ro: ["Centru industrial", "Lângă Defileul Ovčar-Kablar", "Morava de Vest", "Monumentul Libertății Naționale", "Oraș plin de tradiții"],
      en: ["Industrial center", "Near Ovčar-Kablar Gorge", "West Morava", "National Freedom Monument", "City with deep traditions"]
    },
    factsAdvanced: {
        de: [],
        hu: ["A Nyugati-Morava folyó mentén található", "A 'szerb Athos-hegy' kapuja", "Jelentős mezőgazdasági és ipari központ", "A 19. századi felkelések fontos helyszíne", "Gazdag középkori örökséggel bír"],
        ro: [],
        en: ["Located prominently along the West Morava River.", "Acts as the gateway to the 'Serbian Mount Athos'.", "Serves as a major regional agricultural and industrial center.", "An important historical site during the 19th-century national uprisings.", "Boasts a rich and well-preserved medieval heritage."]
    }
  },
  {
    id: "city-zrenjanin",
    type: "city",
    parent: "region-vojvodina",
    coords: [20.3906, 45.3836],
    name: { de: "Zrenjanin", hu: "Nagybecskerek (Zrenjanin)", ro: "Zrenjanin", en: "Zrenjanin" },
    description: {
      de: "Zrenjanin ist die größte Stadt im serbischen Banat und beeindruckt mit wunderschönen Brücken und Architektur im Stadtzentrum.",
      hu: "Nagybecskerek a szerbiai Bánát legnagyobb városa, és gyönyörű hídjaival, valamint belvárosi építészetével nyűgöz le.",
      ro: "Zrenjanin este cel mai mare oraș din Banatul sârbesc și impresionează prin podurile frumoase și arhitectura din centrul orașului.",
      en: "Zrenjanin is the largest city in the Serbian Banat and impresses with beautiful bridges and architecture in the city center."
    },
    descriptionAdvanced: {
        de: "",
        hu: "Nagybecskerek (Zrenjanin) a Bánság legnagyobb városa, a Béga folyó mentén terül el a Vajdaságban. A város építészete a 19. századi osztrák-magyar monarchia fénykorát idézi, gyönyörű palotákkal és hidakkal. Nevét Žarko Zrenjanin partizán hősről kapta a második világháború után. A város környéke kiváló mezőgazdasági terület, a település pedig élénk kulturális élettel büszkélkedhet. Földrajz K7 — síkvidéki mezőgazdaság.",
        ro: "",
        en: "Zrenjanin is the largest city in the Banat region, stretching along the banks of the Bega River in Vojvodina. The city's architecture evokes the golden age of the 19th-century Austro-Hungarian monarchy, featuring beautiful palaces and historic bridges. It received its current name after the partisan hero Žarko Zrenjanin following World War II. The surrounding area is prime agricultural land, while the settlement itself boasts a vibrant cultural and artistic life. Geography K7 — lowland agriculture."
    },
    facts: {
      de: ["Zentrum des Banats", "Fluss Begej", "Historische Brücken", "Rathaus-Architektur", "Ehemaliges Groß-Betschkerek"],
      hu: ["A Bánát központja", "Béga folyó", "Történelmi hidak", "Városháza építészete", "Egykori Nagybecskerek"],
      ro: ["Centrul Banatului", "Râul Bega", "Poduri istorice", "Arhitectura primăriei", "Fostul Veliki Bečkerek"],
      en: ["Center of the Banat", "Begej River", "Historical bridges", "City hall architecture", "Former Veliki Bečkerek"]
    },
    factsAdvanced: {
        de: [],
        hu: ["A Bánság adminisztratív központja", "A Béga folyó szeli ketté", "1946-ban kapta mai nevét", "Osztrák-magyar építészeti stílus", "Kiemelkedő mezőgazdasági régió"],
        ro: [],
        en: ["Functions as the administrative center of the Banat region.", "The city is bisected by the scenic Bega River.", "Received its current name in 1946 to honor a partisan hero.", "Features distinct Austro-Hungarian architectural styles.", "Surrounded by a highly productive agricultural region."]
    }
  }
];

// 4. Kultúra és Történelem
export const serbiaCulture: POI[] = [
  {
    id: "castle-kalemegdan",
    type: "historical",
    parent: "city-belgrade",
    coords: [20.4500, 44.8236],
    name: { de: "Festung Kalemegdan", hu: "Kalemegdan erőd", ro: "Cetatea Kalemegdan", en: "Kalemegdan Fortress" },
    description: {
      de: "Die Festung Kalemegdan ist das historische Herz von Belgrad, malerisch gelegen am Zusammenfluss von Save und Donau.",
      hu: "A Kalemegdan erőd Belgrád történelmi szíve, festői környezetben, a Száva és a Duna találkozásánál.",
      ro: "Cetatea Kalemegdan este inima istorică a Belgradului, situată pitoresc la confluența râurilor Sava și Dunărea.",
      en: "Kalemegdan Fortress is the historic heart of Belgrade, picturesquely located at the confluence of the Sava and Danube rivers."
    },
    descriptionAdvanced: {
        de: "",
        hu: "A Kalemegdan a belgrádi erőd és a körülötte elterülő hatalmas park, amely a Száva és a Duna összefolyása fölé magasodik. Története a kelta és római időkig nyúlik vissza, majd a bizánciak, magyarok, osztrákok és oszmánok is formálták a falait. Ez a történelmi komplexum ma Belgrád legnépszerűbb pihenőhelye, múzeumokkal, kilátókkal és a híres Győztes (Pobednik) emlékművel. Történelem K7 — végvári küzdelmek.",
        ro: "",
        en: "Kalemegdan represents the historic fortress and surrounding expansive park of Belgrade, majestically overlooking the confluence of the Sava and Danube rivers. Its complex history dates back to Celtic and Roman times, with its walls subsequently shaped by Byzantines, Hungarians, Austrians, and Ottomans. Today, this historical complex is Belgrade's most popular recreational area, featuring museums, viewpoints, and the famous 'Victor' (Pobednik) monument. History K7 — border struggles."
    },
    facts: {
      de: ["Wahrzeichen Belgrads", "Über dem Flusszusammenfluss", "Römische und osmanische Spuren", "Großer Park", "Historisches Monument"],
      hu: ["Belgrád jelképe", "A folyók találkozása felett", "Római és oszmán nyomok", "Nagy park", "Történelmi emlékmű"],
      ro: ["Simbolul Belgradului", "Deasupra confluenței râurilor", "Urme romane și otomane", "Parc mare", "Monument istoric"],
      en: ["Symbol of Belgrade", "Above the river confluence", "Roman and Ottoman traces", "Large park", "Historical monument"]
    },
    factsAdvanced: {
        de: [],
        hu: ["Belgrád legfontosabb történelmi műemléke", "Több mint 2000 éves múlttal rendelkezik", "A Száva és a Duna összefolyására néz", "A Pobednik (Győztes) emlékmű otthona", "Nevének jelentése: Vár-tér (törökül)"],
        ro: [],
        en: ["Recognized as Belgrade's most important historical monument.", "Boasts a rich history spanning over 2,000 years.", "Offers panoramic views over the confluence of the Sava and Danube.", "Home to the iconic Pobednik (Victor) monument.", "Its name literally translates to 'Fortress Square' in Turkish."]
    }
  },
  {
    id: "castle-petrovaradin",
    type: "historical",
    parent: "city-novi-sad",
    coords: [19.8631, 45.2522],
    name: { de: "Festung Petrovaradin", hu: "Péterváradi erőd", ro: "Cetatea Petrovaradin", en: "Petrovaradin Fortress" },
    description: {
      de: "Die Festung Petrovaradin in Novi Sad ist eine beeindruckende Anlage an der Donau, oft 'Gibraltar der Donau' genannt.",
      hu: "Az újvidéki péterváradi erőd a Duna mentén fekvő lenyűgöző erődítmény, amelyet gyakran a 'Duna Gibraltárjának' is neveznek.",
      ro: "Cetatea Petrovaradin din Novi Sad este un complex impresionant pe Dunăre, deseori numit 'Gibraltarul Dunării'.",
      en: "Petrovaradin Fortress in Novi Sad is an impressive complex on the Danube, often called the 'Gibraltar of the Danube'."
    },
    descriptionAdvanced: {
        de: "",
        hu: "A péterváradi erőd a Duna jobb partján, Újvidékkel szemben magasodik egy vulkáni sziklán. Az osztrák-magyar hadmérnöki zsenialitás remekműve, amelyet masszív falai és kiterjedt pincerendszere miatt a 'Duna Gibraltárjának' is neveznek. Legismertebb szimbóluma az óratorony, amelynek nagymutatója az órákat, kismutatója a perceket jelzi, hogy a távoli hajósok is leolvashassák az időt. Történelem K7 — 18. századi erődépítészet.",
        ro: "",
        en: "The Petrovaradin Fortress towers on a volcanic rock on the right bank of the Danube, directly opposite Novi Sad. It is a masterpiece of Austro-Hungarian military engineering, often called the 'Gibraltar of the Danube' due to its massive walls and extensive system of subterranean tunnels. Its most famous symbol is the clock tower, whose large hand indicates hours and the small hand minutes, designed so distant sailors could easily read the time. History K7 — 18th-century fort architecture."
    },
    facts: {
      de: ["Gibraltar der Donau", "Ort des EXIT-Festivals", "Berühmter Uhrenturm", "Katakomben", "Überblickt Novi Sad"],
      hu: ["A Duna Gibraltárja", "Az EXIT fesztivál helyszíne", "Híres óratorony", "Katakombák", "Újvidékre néz"],
      ro: ["Gibraltarul Dunării", "Locul festivalului EXIT", "Turnul cu ceas faimos", "Catacombe", "Vedere spre Novi Sad"],
      en: ["Gibraltar of the Danube", "EXIT Festival venue", "Famous clock tower", "Catacombs", "Overlooks Novi Sad"]
    },
    factsAdvanced: {
        de: [],
        hu: ["A 'Duna Gibraltárjának' nevezik", "16 kilométeres földalatti alagútrendszere van", "Az óratorony mutatói fordítva működnek", "A 18. században épült osztrák tervek alapján", "Az EXIT fesztivál helyszíne"],
        ro: [],
        en: ["Widely known as the 'Gibraltar of the Danube'.", "Features a complex 16-kilometer underground tunnel system.", "The hands on its famous clock tower function in reverse.", "Constructed in the 18th century based on Austrian military designs.", "Serves as the spectacular venue for the annual EXIT festival."]
    }
  },
  {
    id: "church-studenica",
    type: "landmark",
    parent: "country-serbia",
    coords: [20.5317, 43.4864],
    name: { de: "Kloster Studenica", hu: "Studenica kolostor", ro: "Mănăstirea Studenica", en: "Studenica Monastery" },
    description: {
      de: "Das Kloster Studenica ist eines der größten und reichsten serbisch-orthodoxen Klöster und gehört zum UNESCO-Weltkulturerbe.",
      hu: "A Studenica kolostor az egyik legnagyobb és leggazdagabb szerb ortodox kolostor, az UNESCO világörökség része.",
      ro: "Mănăstirea Studenica este una dintre cele mai mari și mai bogate mănăstiri ortodoxe sârbești și face parte din Patrimoniul Mondial UNESCO.",
      en: "Studenica Monastery is one of the largest and richest Serbian Orthodox monasteries and is a UNESCO World Heritage Site."
    },
    descriptionAdvanced: {
        de: "",
        hu: "A Studenica kolostor a 12. század végén épült, és a szerb ortodox egyház egyik legfontosabb és leggazdagabb központja. Nemanja István (Stefan Nemanja) fejedelem alapította, aki később itt is nyugszik. A komplexum a középkori szerb építészet csúcspontja, ahol a román stílusú elemek a bizánci hagyományokkal ötvöződnek. A falakat díszítő 13. és 14. századi freskók a bizánci művészet remekművei. Művészet K8 — bizánci freskófestészet.",
        ro: "",
        en: "The Studenica Monastery was constructed at the end of the 12th century and stands as one of the most important and wealthiest centers of the Serbian Orthodox Church. It was founded by Prince Stefan Nemanja, who was later laid to rest within its walls. The complex represents the pinnacle of medieval Serbian architecture, blending Romanesque spatial elements with Byzantine traditions. The 13th and 14th-century frescoes adorning the walls are recognized as masterpieces of Byzantine art. Arts K8 — Byzantine fresco painting."
    },
    facts: {
      de: ["UNESCO-Weltkulturerbe", "12. Jahrhundert", "Marmorarchitektur", "Bedeutende Fresken", "Serbisch-orthodox"],
      hu: ["UNESCO Világörökség", "12. század", "Márvány építészet", "Jelentős freskók", "Szerb ortodox"],
      ro: ["Patrimoniul Mondial UNESCO", "Secolul al XII-lea", "Arhitectură din marmură", "Fresce importante", "Ortodoxă sârbă"],
      en: ["UNESCO World Heritage Site", "12th century", "Marble architecture", "Important frescoes", "Serbian Orthodox"]
    },
    factsAdvanced: {
        de: [],
        hu: ["Nemanja István szerb fejedelem alapította", "Az UNESCO Világörökség része", "A 13. századi freskói világhírűek", "Fehér márvány homlokzata egyedülálló", "A középkori szerb állam szellemi központja volt"],
        ro: [],
        en: ["Founded by the influential Serbian Prince Stefan Nemanja.", "Officially designated as a UNESCO World Heritage site.", "Its 13th-century frescoes are internationally renowned.", "Features a unique and stunning white marble facade.", "Served as the spiritual center of the medieval Serbian state."]
    }
  },
  {
    id: "castle-golubac",
    type: "historical",
    parent: "country-serbia",
    coords: [21.6775, 44.6611],
    name: { de: "Festung Golubac", hu: "Galambóc vára", ro: "Cetatea Golubac", en: "Golubac Fortress" },
    description: {
      de: "Die Festung Golubac ist eine mittelalterliche Burgruine, die majestätisch am Eingang der Eisernen Tors-Schlucht an der Donau liegt.",
      hu: "Galambóc vára egy középkori várrom, amely fenségesen magasodik a Vaskapu-szorost bejáratánál, a Duna mentén.",
      ro: "Cetatea Golubac este o cetate medievală în ruină, așezată maiestuos la intrarea în defileul Porțile de Fier de pe Dunăre.",
      en: "Golubac Fortress is a medieval ruined castle sitting majestically at the entrance to the Iron Gates gorge on the Danube."
    },
    descriptionAdvanced: {
        de: "",
        hu: "A galambóci erőd (Golubac) egy lélegzetelállító középkori vár, amely a Duna Vaskapu-szorosának bejáratánál, meredek sziklafalakra épült. A kilenc masszív toronyból álló erődítmény évszázadokon át stratégiai határvár volt a Magyar Királyság, az Oszmán Birodalom és a szerb állam között. Nemrégiben teljesen felújították, így ma ismét eredeti pompájában csodálhatják meg a látogatók. Történelem K7 — középkori határvédelem.",
        ro: "",
        en: "The Golubac Fortress is a breathtaking medieval stronghold built on steep cliffs at the entrance to the Iron Gates gorge of the Danube. Comprising nine massive stone towers, the fortification served for centuries as a strategic border defense between the Kingdom of Hungary, the Ottoman Empire, and the Serbian state. Recently undergoing extensive renovations, it has been restored to its original splendor for modern visitors to admire. History K7 — medieval border defense."
    },
    facts: {
      de: ["An der Donau", "Eingang zum Eisernen Tor", "Mittelalterliche Burg", "Zehn Türme", "Touristenattraktion"],
      hu: ["A Duna mentén", "A Vaskapu bejárata", "Középkori vár", "Tíz torony", "Turisztikai látványosság"],
      ro: ["Pe Dunăre", "Intrarea în Porțile de Fier", "Cetate medievală", "Zece turnuri", "Atracție turistică"],
      en: ["On the Danube", "Entrance to the Iron Gates", "Medieval castle", "Ten towers", "Tourist attraction"]
    },
    factsAdvanced: {
        de: [],
        hu: ["A Vaskapu-szoros bejáratánál épült", "Kilenc impozáns kőtornya van", "A Duna egyik legszélesebb szakasza mellett áll", "Magyar, szerb és török csapatok is birtokolták", "Nemrég teljes körű felújításon esett át"],
        ro: [],
        en: ["Built precisely at the dramatic entrance to the Iron Gates gorge.", "Features nine imposing and strategically placed stone towers.", "Stands beside one of the widest stretches of the Danube River.", "Historically held by Hungarian, Serbian, and Ottoman forces.", "Recently underwent a comprehensive and complete architectural renovation."]
    }
  },
  {
    id: "archaeology-felix-romuliana",
    type: "landmark",
    parent: "country-serbia",
    coords: [22.1861, 43.8994],
    name: { de: "Felix Romuliana", hu: "Felix Romuliana", ro: "Felix Romuliana", en: "Felix Romuliana" },
    description: {
      de: "Felix Romuliana ist eine antike römische Residenz des Kaisers Galerius im Osten Serbiens, ein UNESCO-Weltkulturerbe.",
      hu: "A Felix Romuliana Galerius római császár ókori rezidenciája Kelet-Szerbiában, UNESCO világörökségi helyszín.",
      ro: "Felix Romuliana este o veche reședință romană a împăratului Galerius în estul Serbiei, parte a Patrimoniului Mondial UNESCO.",
      en: "Felix Romuliana is an ancient Roman residence of Emperor Galerius in eastern Serbia, a UNESCO World Heritage Site."
    },
    descriptionAdvanced: {
        de: "",
        hu: "A Felix Romuliana (Gamzigrad) egy lenyűgöző késő római kori palotaegyüttes Szerbia keleti részén. Galerius császár építtette a 3. és 4. század fordulóján édesanyja, Romula emlékére. A masszív védőfalakkal körülvett komplexumban paloták, templomok és termálfürdők maradványai, valamint csodálatos padlómozaikok találhatók. A helyszín az UNESCO Világörökség része, és a tetrarchia korának egyik legfontosabb emléke. Történelem K6 — késő római birodalom.",
        ro: "",
        en: "Felix Romuliana (Gamzigrad) is a spectacular Late Roman palace complex located in eastern Serbia. It was commissioned by Emperor Galerius at the turn of the 3rd and 4th centuries to honor his mother, Romula. Enclosed by massive defensive walls, the complex features the remains of palaces, temples, thermal baths, and magnificent floor mosaics. The site is a designated UNESCO World Heritage landmark and one of the most vital surviving monuments of the Tetrarchy period. History K6 — Late Roman Empire."
    },
    facts: {
      de: ["UNESCO-Weltkulturerbe", "Römischer Kaiserpalast", "Mosaike", "Nahe Zaječar", "Antike Ruinen"],
      hu: ["UNESCO Világörökség", "Római császári palota", "Mozaikok", "Zaječar közelében", "Ókori romok"],
      ro: ["Patrimoniul Mondial UNESCO", "Palat imperial roman", "Mozaicuri", "Lângă Zaječar", "Ruine antice"],
      en: ["UNESCO World Heritage Site", "Roman imperial palace", "Mosaics", "Near Zaječar", "Ancient ruins"]
    },
    factsAdvanced: {
        de: [],
        hu: ["Galerius római császár építtette", "Az UNESCO Világörökség része", "Édesanyjáról, Romuláról nevezte el", "Kiemelkedő minőségű padlómozaikokat találtak itt", "A késő római építészet mesterműve"],
        ro: [],
        en: ["Commissioned by the influential Roman Emperor Galerius.", "Officially designated as a UNESCO World Heritage site.", "Named 'Romuliana' in honor of the emperor's mother, Romula.", "Renowned for its exceptionally high-quality floor mosaics.", "Considered a genuine masterpiece of Late Roman imperial architecture."]
    }
  },
  {
    id: "monument-skull-tower",
    type: "landmark",
    parent: "city-nis",
    coords: [21.9231, 43.3117],
    name: { de: "Schädelturm", hu: "Koponyatorony", ro: "Turnul Craniilor", en: "Skull Tower" },
    description: {
      de: "Der Schädelturm (Ćele Kula) in Niš ist ein Monument, das aus den Schädeln serbischer Rebellen während des Ersten Serbischen Aufstands erbaut wurde.",
      hu: "A niši Koponyatorony (Ćele Kula) egy emlékmű, amelyet a szerb lázadók koponyáiból építettek az első szerb felkelés idején.",
      ro: "Turnul Craniilor (Ćele Kula) din Niș este un monument construit din craniile rebelilor sârbi în timpul Primei Răscoale Sârbești.",
      en: "The Skull Tower (Ćele Kula) in Niš is a monument built from the skulls of Serbian rebels during the First Serbian Uprising."
    },
    descriptionAdvanced: {
        de: "",
        hu: "A Koponya-torony (Ćele Kula) Niš városában található, és a világ egyik legmegrázóbb történelmi emlékműve. Az 1809-es čegari csata után az oszmán parancsnok az elesett szerb felkelők több száz koponyájából építtette elrettentésül. Bár a koponyák nagy részét azóta eltemették, a torony megmaradt része ma is a szabadságért hozott áldozat és a nemzeti ellenállás szimbóluma Szerbiában. Történelem K8 — függetlenségi háborúk.",
        ro: "",
        en: "The Skull Tower (Ćele Kula), located in the city of Niš, is one of the world's most harrowing historical monuments. Following the Battle of Čegar in 1809, the Ottoman commander ordered its construction from the skulls of hundreds of fallen Serbian rebels to serve as a brutal deterrent. Although most of the skulls have since been respectfully buried, the remaining portion of the tower stands today as a powerful symbol of sacrifice and national resistance in Serbia. History K8 — wars of independence."
    },
    facts: {
      de: ["Einzigartiges Denkmal", "Schädel der Rebellen", "Erster Serbischer Aufstand", "Osmanische Herrschaft", "In Niš"],
      hu: ["Egyedülálló emlékmű", "Lázadók koponyái", "Első szerb felkelés", "Oszmán uralom", "Nišben"],
      ro: ["Monument unic", "Craniile rebelilor", "Prima Răscoală Sârbă", "Dominația otomană", "În Niș"],
      en: ["Unique monument", "Skulls of rebels", "First Serbian Uprising", "Ottoman rule", "In Niš"]
    },
    factsAdvanced: {
        de: [],
        hu: ["Eredetileg 952 szerb felkelő koponyájából épült", "Az 1809-es čegari csata után emelték az oszmánok", "Elrettentő példának szánták", "Ma a szerb ellenállás nemzeti szimbóluma", "A torony fölé később védőkápolnát építettek"],
        ro: [],
        en: ["Originally constructed using the skulls of 952 fallen Serbian rebels.", "Erected by the Ottomans following the Battle of Čegar in 1809.", "Intended to serve as a brutal and terrifying deterrent.", "Currently stands as the ultimate national symbol of Serbian resistance.", "A protective memorial chapel was later built over the remaining structure."]
    }
  },
  {
    id: "church-saint-sava",
    type: "landmark",
    parent: "city-belgrade",
    coords: [20.4686, 44.7981],
    name: { de: "Tempel des Heiligen Sava", hu: "Szent Száva-templom", ro: "Catedrala Sfântul Sava", en: "Temple of Saint Sava" },
    description: {
      de: "Der Tempel des Heiligen Sava in Belgrad ist eine der größten orthodoxen Kirchen der Welt und ein dominierendes Wahrzeichen der Stadt.",
      hu: "A belgrádi Szent Száva-templom a világ egyik legnagyobb ortodox temploma, és a város meghatározó jelképe.",
      ro: "Catedrala Sfântul Sava din Belgrad este una dintre cele mai mari biserici ortodoxe din lume și un simbol dominant al orașului.",
      en: "The Temple of Saint Sava in Belgrade is one of the largest Orthodox churches in the world and a dominating landmark of the city."
    },
    descriptionAdvanced: {
        de: "",
        hu: "A Szent Száva-templom Belgrád egyik legikonikusabb épülete, és a világ egyik legnagyobb ortodox temploma. Építése 1935-ben kezdődött azon a helyen, ahol a hagyomány szerint az oszmánok 1595-ben elégették Szent Száva, a szerb ortodox egyház alapítójának ereklyéit. Bár a külseje elkészült, a monumentális belső mozaikok kialakítása évtizedeket vett igénybe. Hatalmas kupolája a város szinte minden pontjáról látható. Építészet K8 — monumentális szakrális terek.",
        ro: "",
        en: "The Temple of Saint Sava is one of Belgrade's most iconic architectural landmarks and ranks among the largest Orthodox churches in the world. Construction officially began in 1935 on the very site where, according to tradition, the Ottomans burned the relics of Saint Sava, the founder of the Serbian Orthodox Church, in 1595. While the exterior was completed earlier, the creation of the monumental interior mosaics took decades. Its massive dome is visible from almost every point in the city. Architecture K8 — monumental sacred spaces."
    },
    facts: {
      de: ["Größte orthodoxe Kirche auf dem Balkan", "Dem Heiligen Sava gewidmet", "Dominante Kuppel", "Belgrader Wahrzeichen", "Mosaik-Ausstattung"],
      hu: ["A Balkán legnagyobb ortodox temploma", "Szent Szávának szentelve", "Domináns kupola", "Belgrádi jelkép", "Mozaik díszítés"],
      ro: ["Cea mai mare biserică ortodoxă din Balcani", "Dedicată Sfântului Sava", "Cupolă dominantă", "Simbol al Belgradului", "Decorațiuni cu mozaic"],
      en: ["Largest Orthodox church in the Balkans", "Dedicated to Saint Sava", "Dominating dome", "Belgrade landmark", "Mosaic interior"]
    },
    factsAdvanced: {
        de: [],
        hu: ["A világ egyik legnagyobb ortodox temploma", "Szent Száva elégetett ereklyéinek helyén épült", "A kupolája 70 méter magas", "Az építkezés hivatalosan 1935-ben kezdődött", "A belső teret több millió mozaikdarab díszíti"],
        ro: [],
        en: ["Ranks as one of the largest Orthodox Christian churches globally.", "Built precisely where Saint Sava's relics were burned.", "The massive central dome reaches a height of 70 meters.", "Construction of the temple officially commenced in 1935.", "The interior is lavishly decorated with millions of mosaic pieces."]
    }
  },
  {
    id: "castle-smederevo",
    type: "historical",
    parent: "country-serbia",
    coords: [20.9292, 44.6669],
    name: { de: "Festung Smederevo", hu: "Szendrői vár", ro: "Cetatea Smederevo", en: "Smederevo Fortress" },
    description: {
      de: "Die Festung Smederevo ist eine der größten mittelalterlichen Flachlandfestungen in Europa, gelegen an der Donau.",
      hu: "A Szendrői vár Európa egyik legnagyobb középkori síkvidéki erődítménye, a Duna mentén fekszik.",
      ro: "Cetatea Smederevo este una dintre cele mai mari fortărețe medievale de șes din Europa, situată pe Dunăre.",
      en: "Smederevo Fortress is one of the largest medieval flatland fortresses in Europe, located on the Danube."
    },
    descriptionAdvanced: {
        de: "",
        hu: "Szendrő (Smederevo) vára Európa egyik legnagyobb síkvidéki erődítménye, amelyet Brankovics György szerb despota építtetett a 15. század első felében. A Duna és a Jezava folyó találkozásánál fekvő gigantikus vár a szerb állam utolsó nagy végvára volt az oszmán hódítás előtt. A huszonöt bástyával megerősített falak lenyűgöző látványt nyújtanak, bár az erőd a második világháború alatt súlyos károkat szenvedett egy lőszerrobbanásban. Történelem K7 — középkori várépítészet.",
        ro: "",
        en: "The Smederevo Fortress is one of Europe's largest lowland fortifications, built by Serbian Despot Đurađ Branković in the first half of the 15th century. Located at the strategic confluence of the Danube and Jezava rivers, this gigantic stronghold was the final great defense of the Serbian state before the Ottoman conquest. The walls, fortified with twenty-five massive bastions, provide a stunning sight, although the fortress suffered severe damage during a World War II ammunition explosion. History K7 — medieval fortress architecture."
    },
    facts: {
      de: ["Größte Flachlandfestung Europas", "An der Donau", "15. Jahrhundert", "Ehemalige Hauptstadt", "Beeindruckende Mauern"],
      hu: ["Európa legnagyobb síkvidéki erődje", "A Duna mentén", "15. század", "Egykori főváros", "Lenyűgöző falak"],
      ro: ["Cea mai mare fortăreață de șes din Europa", "Pe Dunăre", "Secolul al XV-lea", "Fostă capitală", "Ziduri impresionante"],
      en: ["Largest flatland fortress in Europe", "On the Danube", "15th century", "Former capital", "Impressive walls"]
    },
    factsAdvanced: {
        de: [],
        hu: ["Európa egyik legnagyobb síkvidéki erődje", "Brankovics György despota építtette", "Huszonöt masszív kőbástyája van", "A szerb állam utolsó védőbástyája volt", "A Duna és a Jezava folyó védelmében épült"],
        ro: [],
        en: ["Recognized as one of Europe's largest lowland fortresses.", "Commissioned by the Serbian Despot Đurađ Branković.", "Fortified by twenty-five massive defensive stone bastions.", "Served as the final great defensive stronghold of the medieval Serbian state.", "Constructed to protect the confluence of the Danube and Jezava rivers."]
    }
  },
  {
    id: "monument-oplenac",
    type: "landmark",
    parent: "region-sumadija",
    coords: [20.6833, 44.2500],
    name: { de: "Oplenac", hu: "Oplenac", ro: "Oplenac", en: "Oplenac" },
    description: {
      de: "Oplenac ist der Hügel in Topola, wo sich die prachtvolle St.-Georgs-Kirche und das Mausoleum der serbischen Königsfamilie Karadjordjevic befinden.",
      hu: "Oplenac a Topola közelében lévő domb, ahol a gyönyörű Szent György-templom és a Karađorđević szerb királyi család mauzóleuma található.",
      ro: "Oplenac este dealul din Topola, unde se află magnifica Biserică Sfântul Gheorghe și mausoleul familiei regale sârbe Karadjordjevic.",
      en: "Oplenac is the hill in Topola where the magnificent St. George's Church and the mausoleum of the Serbian Karadjordjevic royal family are located."
    },
    descriptionAdvanced: {
        de: "",
        hu: "Az Oplenac (Szent György-templom) a Karagyorgyevics királyi dinasztia mauzóleuma a Šumadija régióban, Topola városában. I. Péter szerb király építtette a 20. század elején. Az épület igazi csodája a belső tér, amelyet több mint 40 millió apró üvegdarabból álló, a középkori szerb freskókat másoló mozaik borít. A kriptában a szerb királyi család tagjai nyugszanak, az épület körül pedig a királyi pincészet szőlőbirtokai terülnek el. Művészet K8 — modern mozaikművészet.",
        ro: "",
        en: "Oplenac, situated near the town of Topola, is the majestic mausoleum of the Serbian royal Karađorđević dynasty. The complex's centerpiece is the Church of St. George, an architectural marvel renowned for its dazzling interior mosaics composed of over 40 million pieces in 15,000 distinct shades. Founded by King Peter I, the crypt houses the tombs of multiple generations of Serbian royalty. The surrounding area is also famous for its royal vineyards and exceptional winemaking tradition. Arts K8 — monumental mosaic art."
    },
    facts: {
      de: ["Königliches Mausoleum", "St.-Georgs-Kirche", "Atemberaubende Mosaike", "Topola", "Karadjordjevic Dynastie"],
      hu: ["Királyi mauzóleum", "Szent György-templom", "Lélegzetelállító mozaikok", "Topola", "Karađorđević dinasztia"],
      ro: ["Mausoleu regal", "Biserica Sfântul Gheorghe", "Mozaicuri uimitoare", "Topola", "Dinastia Karadjordjevic"],
      en: ["Royal mausoleum", "St. George's Church", "Stunning mosaics", "Topola", "Karadjordjevic dynasty"]
    },
    factsAdvanced: {
        de: [],
        hu: ["A Karagyorgyevics királyi család mauzóleuma", "Több mint 40 millió mozaikdarab díszíti", "I. Péter szerb király alapította", "A középkori szerb kolostorok freskóit másolja", "A híres királyi szőlőbirtokok veszik körül"],
        ro: [],
        en: ["Serves as the official mausoleum of the Karađorđević royal dynasty.", "The interior boasts mosaics made from over 40 million individual pieces.", "The mosaics feature an incredible 15,000 different color shades.", "Founded by King Peter I of Serbia.", "The surrounding region is celebrated for its historic royal vineyards."]
    }
  },
  {
    id: "spa-vrnjacka-banja",
    type: "landmark",
    parent: "country-serbia",
    coords: [20.8953, 43.6267],
    name: { de: "Vrnjačka Banja", hu: "Vrnjačka Banja", ro: "Vrnjačka Banja", en: "Vrnjačka Banja" },
    description: {
      de: "Vrnjačka Banja ist der bekannteste und beliebteste Kurort in Serbien, bekannt für seine heilenden Mineralquellen.",
      hu: "Vrnjačka Banja Szerbia legismertebb és legnépszerűbb gyógyfürdője, amely gyógyító ásványvízforrásairól híres.",
      ro: "Vrnjačka Banja este cel mai faimos și popular centru balnear din Serbia, cunoscut pentru izvoarele sale minerale curative.",
      en: "Vrnjačka Banja is the most famous and popular spa town in Serbia, known for its healing mineral springs."
    },
    descriptionAdvanced: {
        de: "",
        hu: "Vrnjačka Banja Szerbia legismertebb és legnépszerűbb gyógyfürdővárosa, amely a Goc hegy lábánál fekszik. Hét ásványvízforrása közül több már a római korban is ismert volt, a modern fürdőkultúra pedig a 19. században virágzott fel. Gyönyörű parkjai, elegáns sétányai és történelmi villái igazi békebeli atmoszférát árasztanak. A város különlegessége a 'Szerelem Hídja', ahol a szerelmesek lakatokkal pecsételik meg érzéseiket. Földrajz K7 — termálvizek és turizmus.",
        ro: "",
        en: "Vrnjačka Banja is Serbia's most famous and popular spa town, nestled at the foot of Mount Goč. Several of its seven mineral water springs were already known and utilized during the Roman era, while the modern spa culture flourished in the 19th century. Its beautiful parks, elegant promenades, and historic villas exude a true Belle Époque atmosphere. A unique feature of the town is the 'Bridge of Love,' where couples seal their feelings by attaching padlocks. Geography K7 — thermal waters and tourism."
    },
    facts: {
      de: ["Bekanntester Kurort", "Mineralquellen", "Zentralserbien", "Liebesbrücke", "Lange Kurtradition"],
      hu: ["Legismertebb gyógyfürdő", "Ásványvízforrások", "Közép-Szerbia", "Szerelem hídja", "Nagy fürdőhagyomány"],
      ro: ["Cea mai cunoscută stațiune", "Izvoare minerale", "Serbia Centrală", "Podul iubirii", "Tradiție balneară îndelungată"],
      en: ["Most famous spa resort", "Mineral springs", "Central Serbia", "Bridge of Love", "Long spa tradition"]
    },
    factsAdvanced: {
        de: [],
        hu: ["Szerbia legnagyobb és leghíresebb gyógyfürdője", "Hét különböző ásványvízforrással rendelkezik", "Itt található a híres 'Szerelem Hídja'", "Már a rómaiak is használták forrásait", "A 19. században arisztokrata üdülőhely volt"],
        ro: [],
        en: ["Recognized as Serbia's largest and most famous spa resort.", "Features seven distinct therapeutic mineral water springs.", "Home to the internationally famous 'Bridge of Love'.", "Its healing springs were actively used by the ancient Romans.", "Developed into an elite aristocratic resort during the 19th century."]
    }
  },
  {
    id: "spa-sokobanja",
    type: "landmark",
    parent: "country-serbia",
    coords: [21.8744, 43.6450],
    name: { de: "Sokobanja", hu: "Sokobanja", ro: "Sokobanja", en: "Sokobanja" },
    description: {
      de: "Sokobanja ist ein historischer Kurort im Osten Serbiens, umgeben von Bergen und bekannt für sein heilendes Klima.",
      hu: "Sokobanja egy történelmi gyógyfürdő Kelet-Szerbiában, hegyekkel körülvéve, amely gyógyító klímájáról ismert.",
      ro: "Sokobanja este o stațiune istorică în estul Serbiei, înconjurată de munți și recunoscută pentru climatul său curativ.",
      en: "Sokobanja is a historic spa town in eastern Serbia, surrounded by mountains and known for its healing climate."
    },
    descriptionAdvanced: {
        de: "",
        hu: "Sokobanja Szerbia egyik legrégebbi és legfestőibb gyógyüdülőhelye, amely tiszta hegyi levegőjéről és termálforrásairól híres. A fürdőt egy völgyben alakították ki, amelyet magas hegyek vesznek körül, így mikroklímája különösen kedvező a légúti megbetegedések kezelésére. Már a rómaiak és az oszmánok is építettek itt fürdőket, a 19. században pedig a szerb értelmiség kedvelt találkozóhelyévé vált. Földrajz K7 — hegyvidéki mikroklímák.",
        ro: "",
        en: "Sokobanja is one of Serbia's oldest and most picturesque health resorts, renowned for its pristine mountain air and thermal springs. The spa is situated in a valley surrounded by high mountains, creating a microclimate that is particularly beneficial for treating respiratory diseases. Both Romans and Ottomans built baths here, and in the 19th century, it became a favored gathering place for the Serbian intelligentsia. Geography K7 — mountain microclimates."
    },
    facts: {
      de: ["Luftkurort", "Ostserbien", "Historische Hammams", "Moravica-Fluss", "Hoher Ozongehalt"],
      hu: ["Klimatikus gyógyhely", "Kelet-Szerbia", "Történelmi hammamok", "Moravica-folyó", "Magas ózontartalom"],
      ro: ["Stațiune climatică", "Estul Serbiei", "Hamamuri istorice", "Râul Moravica", "Conținut ridicat de ozon"],
      en: ["Air spa", "Eastern Serbia", "Historical hammams", "Moravica River", "High ozone content"]
    },
    factsAdvanced: {
        de: [],
        hu: ["Kiemelkedően tiszta hegyi levegőjéről ismert", "Légúti betegségek gyógyítására specializálódott", "Már a római és oszmán időkben is fürdőhely volt", "Ivo Andrić Nobel-díjas író is gyakran pihent itt", "Erdős hegyek és szurdokok veszik körül"],
        ro: [],
        en: ["Renowned for its exceptionally clean and healing mountain air.", "Specializes in the medical treatment of respiratory diseases.", "Served as a popular bathing site during Roman and Ottoman times.", "Nobel laureate Ivo Andrić frequently rested and wrote here.", "Surrounded by lush forested mountains and deep river gorges."]
    }
  }
];

// 5. Természet (Hegyek, Tavak, Nemzeti Parkok)
export const serbiaNature: POI[] = [
  {
    id: "nature-tara-national-park",
    type: "landmark",
    parent: "country-serbia",
    coords: [19.4500, 43.8500],
    name: { de: "Nationalpark Tara", hu: "Tara Nemzeti Park", ro: "Parcul Național Tara", en: "Tara National Park" },
    description: {
      de: "Der Nationalpark Tara im Westen Serbiens ist berühmt für seine tiefen Wälder, spektakulären Aussichtspunkte und die Drina-Schlucht.",
      hu: "A nyugat-szerbiai Tara Nemzeti Park mély erdeiről, látványos kilátóiról és a Drina-szurdokról híres.",
      ro: "Parcul Național Tara din vestul Serbiei este faimos pentru pădurile sale adânci, punctele de belvedere spectaculoase și defileul Drinei.",
      en: "Tara National Park in western Serbia is famous for its deep forests, spectacular viewpoints, and the Drina Gorge."
    },
    descriptionAdvanced: {
        de: "",
        hu: "A Tara Nemzeti Park Szerbia nyugati részén, a bosnyák határ mentén terül el, és az ország egyik legérintetlenebb hegyvidéki területe. A sűrű fenyő- és bükkerdőkkel borított hegyek meredeken szakadnak le a Drina folyó mély kanyonjába. A park menedéket nyújt a ritka európai barna medvének, valamint a Pancsics-lucfenyőnek, amely egy egyedülálló jégkori reliktum faj. A Banjska Stena kilátópontról nyíló panoráma világhírű. Biológia K7 — erdei ökoszisztémák.",
        ro: "",
        en: "Tara National Park stretches across western Serbia along the Bosnian border, representing one of the country's most pristine mountainous areas. The mountains, covered in dense pine and beech forests, drop steeply into the deep canyon of the Drina River. The park provides sanctuary for the rare European brown bear and the Pančić spruce, a unique ice age relict species. The panoramic view from the Banjska Stena viewpoint is world-renowned. Biology K7 — forest ecosystems."
    },
    facts: {
      de: ["Westserbien", "Drina-Schlucht", "Aussichtspunkt Banjska Stena", "Bärenpopulation", "Dichte Wälder"],
      hu: ["Nyugat-Szerbia", "Drina-szurdok", "Banjska Stena kilátó", "Medvepopuláció", "Sűrű erdők"],
      ro: ["Vestul Serbiei", "Defileul Drinei", "Punctul de belvedere Banjska Stena", "Populație de urși", "Păduri dese"],
      en: ["Western Serbia", "Drina Gorge", "Banjska Stena viewpoint", "Bear population", "Dense forests"]
    },
    factsAdvanced: {
        de: [],
        hu: ["A Drina folyó drámai kanyonja határolja", "A barnamedvék egyik legfontosabb élőhelye", "Itt él az endemikus Pancsics-lucfenyő", "A Banjska Stena kilátó lenyűgöző panorámát nyújt", "Sűrű tűlevelű és lombhullató erdők borítják"],
        ro: [],
        en: ["Bordered by the dramatic and deep canyon of the Drina River.", "Serves as a crucial habitat for European brown bears.", "Home to the rare, endemic Pančić spruce tree.", "The Banjska Stena viewpoint offers stunning panoramic vistas.", "Covered by extensive and dense coniferous and deciduous forests."]
    }
  },
  {
    id: "nature-djerdap-national-park",
    type: "landmark",
    parent: "country-serbia",
    coords: [22.1500, 44.5833],
    name: { de: "Nationalpark Đerdap", hu: "Vaskapu Nemzeti Park", ro: "Parcul Național Đerdap", en: "Đerdap National Park" },
    description: {
      de: "Der Nationalpark Đerdap umfasst die beeindruckende Eiserne Tor-Schlucht, wo die Donau durch die Karpaten bricht.",
      hu: "A Vaskapu Nemzeti Park magában foglalja a lenyűgöző Vaskapu-szorost, ahol a Duna áttöri a Kárpátokat.",
      ro: "Parcul Național Đerdap include impresionantul defileu Porțile de Fier, unde Dunărea străpunge Carpații.",
      en: "Đerdap National Park encompasses the impressive Iron Gates gorge, where the Danube breaks through the Carpathian Mountains."
    },
    descriptionAdvanced: {
        de: "",
        hu: "A Đerdap (Vaskapu) Nemzeti Park a Duna leglátványosabb szakaszát foglalja magába, ahol a folyó áttöri a Kárpátokat és a Balkán-hegységet. A park központja a Vaskapu-szoros, Európa leghosszabb és legmélyebb folyami szurdoka. A lenyűgöző természeti szépségek mellett a terület gazdag régészeti emlékekben is, itt található a Lepenski Vir, egy 8000 éves őskori halásztelepülés, valamint a római Traianus-tábla. Földrajz K7 — folyami szurdokok kialakulása.",
        ro: "",
        en: "The Đerdap (Iron Gates) National Park encompasses the most spectacular section of the Danube, where the river breaks through the Carpathian and Balkan mountains. The centerpiece of the park is the Iron Gates gorge, Europe's longest and deepest river gorge. Beyond its stunning natural beauty, the area is rich in archaeological sites, including Lepenski Vir, an 8,000-year-old prehistoric fishing settlement, and the ancient Roman Tabula Traiana. Geography K7 — formation of river gorges."
    },
    facts: {
      de: ["Eisernes Tor", "Längste Schlucht Europas", "An der Donau", "Reiche Flora und Fauna", "Lepenski Vir in der Nähe"],
      hu: ["Vaskapu", "Európa leghosszabb szurdoka", "A Duna mentén", "Gazdag növény- és állatvilág", "Lepenski Vir a közelben"],
      ro: ["Porțile de Fier", "Cel mai lung defileu din Europa", "Pe Dunăre", "Floră și faună bogate", "Lepenski Vir în apropiere"],
      en: ["Iron Gates", "Europe's longest gorge", "On the Danube", "Rich flora and fauna", "Lepenski Vir nearby"]
    },
    factsAdvanced: {
        de: [],
        hu: ["Európa leghosszabb folyami szurdoka", "A Duna áttörése a Kárpátok és a Balkán-hegység között", "Itt található a Lepenski Vir őskori lelőhely", "A Traianus-tábla a római útépítés emléke", "A folyó helyenként 90 méter mély"],
        ro: [],
        en: ["Features Europe's longest and deepest river gorge.", "Located where the Danube cuts through the Carpathian Mountains.", "Home to the 8,000-year-old prehistoric settlement of Lepenski Vir.", "Contains the ancient Roman monument known as the Tabula Traiana.", "Protects a highly unique and diverse riverine ecosystem."]
    }
  },
  {
    id: "mountain-kopaonik",
    type: "mountain",
    parent: "country-serbia",
    coords: [20.8000, 43.2833],
    name: { de: "Kopaonik", hu: "Kopaonik", ro: "Kopaonik", en: "Kopaonik" },
    description: {
      de: "Kopaonik ist das größte Gebirge in Serbien and das beliebteste Skigebiet des Landes.",
      hu: "A Kopaonik Szerbia legnagyobb hegysége és az ország legnépszerűbb síterepe.",
      ro: "Kopaonik este cel mai mare lanț muntos din Serbia și cea mai populară stațiune de schi din țară.",
      en: "Kopaonik is the largest mountain range in Serbia and the most popular ski resort in the country."
    },
    descriptionAdvanced: {
        de: "",
        hu: "A Kopaonik Szerbia legnagyobb hegysége és legnépszerűbb síközpontja. A 'Napfényes Hegynek' is nevezett masszívum évente átlagosan 200 napsütéses nappal büszkélkedhet. Nyáron a végtelen fenyvesek, ritka alpesi növények és mély szurdokok vonzzák a túrázókat a nemzeti parkba, míg télen a kiválóan felszerelt sípályák a téli sportok szerelmeseit. A legmagasabb csúcsa a 2017 méteres Pančićev vrh. Földrajz K7 — magashegységi éghajlat.",
        ro: "",
        en: "Kopaonik is Serbia's largest mountain range and its most popular ski resort, often referred to as the 'Mountain of the Sun' due to its high number of sunny days annually. In winter, it offers excellent modern ski slopes, while in summer, it transforms into a paradise for hikers and nature lovers. The central part of the mountain is a protected national park, preserving rare plant species and diverse wildlife amidst the rugged alpine landscape. Geography K7 — alpine tourism and climate."
    },
    facts: {
      de: ["Größtes Skigebiet", "Nationalpark", "Gipfel Pančićev Vrh", "Sommer- und Wintertourismus", "Biodiversität"],
      hu: ["Legnagyobb síterep", "Nemzeti Park", "Pančićev Vrh csúcs", "Nyári és téli turizmus", "Biológiai sokféleség"],
      ro: ["Cea mai mare stațiune de schi", "Parc Național", "Vârful Pančićev Vrh", "Turism de vară și de iarnă", "Biodiversitate"],
      en: ["Largest ski resort", "National Park", "Pančićev Vrh peak", "Summer and winter tourism", "Biodiversity"]
    },
    factsAdvanced: {
        de: [],
        hu: ["Szerbia legnagyobb és legismertebb síközpontja", "Évente mintegy 200 napsütéses nap jellemzi", "Legmagasabb pontja a Pančićev vrh (2017 m)", "Gazdag alpesi növény- és állatvilággal rendelkezik", "Télen-nyáron népszerű turisztikai célpont"],
        ro: [],
        en: ["Ranks as Serbia's largest and most extensive mountain range.", "Functions as the country's premier and most popular ski resort.", "Often called the 'Mountain of the Sun' due to high sunshine hours.", "The central area is protected as a National Park.", "Preserves numerous rare alpine plant species and diverse wildlife."]
    }
  },
  {
    id: "mountain-fruska-gora",
    type: "mountain",
    parent: "region-vojvodina",
    coords: [19.8500, 45.1500],
    name: { de: "Fruška Gora", hu: "Tarcal-hegység (Fruška Gora)", ro: "Fruška Gora", en: "Fruška Gora" },
    description: {
      de: "Fruška Gora ist ein Mittelgebirge in der Vojvodina, bekannt für seine zahlreichen orthodoxen Klöster und Weinberge.",
      hu: "A Tarcal-hegység egy középhegység a Vajdaságban, számos ortodox kolostoráról és szőlőültetvényeiről ismert.",
      ro: "Fruška Gora este un munte în Voivodina, cunoscut pentru numeroasele sale mănăstiri ortodoxe și podgorii.",
      en: "Fruška Gora is a low mountain in Vojvodina, known for its numerous Orthodox monasteries and vineyards."
    },
    descriptionAdvanced: {
        de: "",
        hu: "A Fruška Gora (Tarcal-hegység) egy szelíd hegyvonulat a sík Vajdaságban, amelyet gyakran a 'szerb Szent Hegynek' neveznek a területén található 16 történelmi ortodox kolostor miatt. A nemzeti park sűrű tölgy- és hársfaerdői gazdag vadvilágnak adnak otthont, lankáin pedig évszázadok óta kiváló borokat termelnek. A hegység geológiai értelemben is különleges, egykori sziget volt a Pannon-tengerben. Földrajz K7 — szigethegységek.",
        ro: "",
        en: "The Fruška Gora National Park is the green lung of Vojvodina, an isolated island mountain rising prominently from the flat Pannonian Plain. This protected nature reserve is famous not only for its ancient oak and beech forests but also for its rich birdlife and deer populations. Alongside its natural treasures, the historical Orthodox monasteries and extensive vineyards nestled on its slopes make the region a truly unique cultural landscape. Biology K7 — forest biodiversity."
    },
    facts: {
      de: ["Nationalpark", "Orthodoxe Klöster", "Weinbau", "Nahe Novi Sad", "Hügel in der Pannonischen Tiefebene"],
      hu: ["Nemzeti Park", "Ortodox kolostorok", "Borászat", "Újvidék közelében", "Dombvidék a Pannon-síkságon"],
      ro: ["Parc Național", "Mănăstiri ortodoxe", "Viticultură", "Lângă Novi Sad", "Deal în Câmpia Panonică"],
      en: ["National Park", "Orthodox monasteries", "Viticulture", "Near Novi Sad", "Hill in the Pannonian Plain"]
    },
    factsAdvanced: {
        de: [],
        hu: ["16 középkori ortodox kolostor található itt", "Egykori sziget volt a Pannon-tengerben", "Szerbia legrégebbi nemzeti parkja", "Híres történelmi borvidék", "Lombhullató erdők borítják a lankáit"],
        ro: [],
        en: ["Considered the most important green space in the Vojvodina region.", "Serves as a nesting ground for numerous rare bird species.", "Oak and beech are the most characteristic tree species here.", "Deer and wild boars are commonly sighted throughout the park.", "A highly popular destination for hikers and cyclists."]
    }
  },
  {
    id: "nature-uvac",
    type: "landmark",
    parent: "country-serbia",
    coords: [19.9250, 43.3611],
    name: { de: "Uvac-Schlucht", hu: "Uvac-kanyon", ro: "Defileul Uvac", en: "Uvac Canyon" },
    description: {
      de: "Die Uvac-Schlucht ist berühmt für ihre spektakulären Mäander und als Lebensraum des seltenen Gänsegeiers.",
      hu: "Az Uvac-kanyon látványos kanyarulatairól és a ritka fakó keselyű élőhelyeként híres.",
      ro: "Defileul Uvac este faimos pentru meandrele sale spectaculoase și ca habitat al rarisimului vultur sur.",
      en: "The Uvac Canyon is famous for its spectacular meanders and as a habitat for the rare griffon vulture."
    },
    descriptionAdvanced: {
        de: "",
        hu: "Az Uvac Kanyon Délnyugat-Szerbia egyik leglátványosabb természeti csodája. A folyó drámai, kanyargós meandereket vágott a karsztos mészkőbe, meredek, akár 100 méter magas sziklafalakat hozva létre. A rezervátum leginkább a fakó keselyűk (Griffon vulture) mentőprogramjáról híres; ma a régió e fenséges madarak egyik legnagyobb európai kolóniájának ad otthont. Biológia K7 — madárvédelem és karsztformák.",
        ro: "",
        en: "The Uvac Canyon is one of the most spectacular natural wonders in southwestern Serbia. The river has carved dramatic, winding meanders into the karst limestone, creating steep cliff walls that reach up to 100 meters in height. The reserve is most famous for its successful conservation program for griffon vultures; today, the region hosts one of the largest European colonies of these majestic birds. Biology K7 — bird conservation and karst formations."
    },
    facts: {
      de: ["Flussmäander", "Gänsegeier", "Südwest-Serbien", "Aussichtspunkt Molitva", "Naturschutzgebiet"],
      hu: ["Folyókanyarulatok", "Fakó keselyű", "Délnyugat-Szerbia", "Molitva kilátó", "Természetvédelmi terület"],
      ro: ["Meandrele râului", "Vulturul sur", "Sud-vestul Serbiei", "Punctul de belvedere Molitva", "Rezervație naturală"],
      en: ["River meanders", "Griffon vulture", "Southwestern Serbia", "Molitva viewpoint", "Nature reserve"]
    },
    factsAdvanced: {
        de: [],
        hu: ["Drámai folyami kanyarulatairól (meander) ismert", "A fakó keselyűk legnagyobb európai élőhelye", "Mély karsztbarlangok rejtőznek a sziklafalakban", "A kanyon vize jellegzetes smaragdzöld színű", "Különleges csónaktúrák helyszíne"],
        ro: [],
        en: ["Internationally known for its dramatic, winding river meanders.", "Hosts one of the largest habitats for griffon vultures in Europe.", "Deep karst caves are hidden within its steep cliff walls.", "The water of the canyon boasts a characteristic emerald green color.", "A highly popular location for specialized boat tours."]
    }
  },
  {
    id: "nature-zlatibor",
    type: "mountain",
    parent: "country-serbia",
    coords: [19.7000, 43.7333],
    name: { de: "Zlatibor", hu: "Zlatibor", ro: "Zlatibor", en: "Zlatibor" },
    description: {
      de: "Zlatibor ist eine beliebte Bergregion im Westen Serbiens, bekannt für gesunde Luft, Tourismus und traditionelle Architektur.",
      hu: "Zlatibor egy népszerű hegyvidéki régió Nyugat-Szerbiában, egészséges levegőjéről, turizmusáról és hagyományos építészetéről ismert.",
      ro: "Zlatibor este o regiune montană populară în vestul Serbiei, cunoscută pentru aerul sănătos, turism și arhitectura tradițională.",
      en: "Zlatibor is a popular mountainous region in western Serbia, known for healthy air, tourism, and traditional architecture."
    },
    descriptionAdvanced: {
        de: "",
        hu: "A Zlatibor (Aranyfenyő) egy kiterjedt, hullámzó hegyvidéki fennsík Nyugat-Szerbiában, amely nevét a jellegzetes sárgás tűlevelű fenyőkről kapta. Kellemes alpesi klímája és gyógyító levegője miatt már a 19. század óta népszerű üdülőhely. A modern sípályák és luxusszállodák mellett a hegyvidék hagyományos fatemplomokat, szabadtéri etno-falvakat (Sirogojno) és végtelen legelőket is rejt. Földrajz K7 — hegyvidéki fennsíkok.",
        ro: "",
        en: "Zlatibor (Golden Pine) is an extensive, rolling mountainous plateau in western Serbia, named after its characteristic yellowish coniferous pines. Due to its pleasant alpine climate and healing air, it has been a highly popular health resort since the 19th century. Alongside modern ski slopes and luxury hotels, the mountain region hides traditional wooden churches, open-air ethno-villages like Sirogojno, and seemingly endless grazing pastures. Geography K7 — mountain plateaus."
    },
    facts: {
      de: ["Bergresort", "Gesundheitstourismus", "Goldene Kiefer", "Westserbien", "Goldola-Seilbahn"],
      hu: ["Hegyi üdülőhely", "Egészségturizmus", "Aranyfenyő", "Nyugat-Szerbia", "Goldola felvonó"],
      ro: ["Stațiune montană", "Turism de sănătate", "Pinul auriu", "Vestul Serbiei", "Telecabina Goldola"],
      en: ["Mountain resort", "Health tourism", "Golden pine", "Western Serbia", "Goldola cable car"]
    },
    factsAdvanced: {
        de: [],
        hu: ["Nevét az 'arany' fenyőkről kapta", "Kellemes, gyógyító hegyi klímája van", "Hagyományos etno-falvak találhatók itt", "Egész évben népszerű turisztikai célpont", "Hatalmas, lankás legelők és fenyvesek borítják"],
        ro: [],
        en: ["Its name translates directly to 'Golden Pine'.", "Features a pleasant, healing mountain climate.", "Home to beautifully preserved traditional ethno-villages.", "Remains a highly popular tourist destination year-round.", "Covered by vast, gently rolling pastures and pine forests."]
    }
  },
  {
    id: "nature-djavolja-varos",
    type: "landmark",
    parent: "country-serbia",
    coords: [21.4000, 42.9833],
    name: { de: "Đavolja Varoš", hu: "Ördögváros (Đavolja Varoš)", ro: "Đavolja Varoš", en: "Devil's Town (Đavolja Varoš)" },
    description: {
      de: "Đavolja Varoš (Teufelsstadt) ist eine einzigartige Felsformation im Süden Serbiens, die aus Hunderten von Erdpyramiden besteht.",
      hu: "Az Ördögváros (Đavolja Varoš) egy egyedülálló sziklaalakzat Dél-Szerbiában, amely több száz földpiramisból áll.",
      ro: "Đavolja Varoš (Orașul Diavolului) este o formațiune stâncoasă unică în sudul Serbiei, formată din sute de piramide de pământ.",
      en: "Devil's Town (Đavolja Varoš) is a unique rock formation in southern Serbia, consisting of hundreds of earth pyramids."
    },
    descriptionAdvanced: {
        de: "",
        hu: "Az Ördög Városa (Đavolja Varoš) egy különleges geológiai képződmény Dél-Szerbiában, a Radan-hegység lejtőin. Az erózió több mint 200 magas, vöröses földpiramist (tündérkéményt) hozott létre, melyek tetején kőtömbök egyensúlyoznak. A formációk misztikus megjelenését tovább fokozzák a rendkívül savas és ásványi anyagokban gazdag, vöröses színű források. A helyszínhez számtalan helyi legenda és népmese fűződik. Földrajz K7 — erózió és földpiramisok.",
        ro: "",
        en: "Devil's Town (Đavolja Varoš) is a highly unusual geological formation in southern Serbia, situated on the slopes of the Radan Mountains. Natural erosion has created over 200 tall, reddish earth pyramids (fairy chimneys), which intriguingly balance large stone blocks on their peaks. The mystical appearance of the formations is further enhanced by highly acidic, mineral-rich, reddish springs nearby. The site is surrounded by countless local legends and folklore. Geography K7 — erosion and earth pyramids."
    },
    facts: {
      de: ["Naturphänomen", "Erdpyramiden", "Südserbien", "Säuresquellen", "Mystische Legenden"],
      hu: ["Természeti jelenség", "Földpiramisok", "Dél-Szerbia", "Savas források", "Misztikus legendák"],
      ro: ["Fenomen natural", "Piramide de pământ", "Sudul Serbiei", "Izvoare acide", "Legende mistice"],
      en: ["Natural phenomenon", "Earth pyramids", "Southern Serbia", "Acid springs", "Mystical legends"]
    },
    factsAdvanced: {
        de: [],
        hu: ["Több mint 200 földpiramisból áll", "A természeti erózió különleges eredménye", "Rendkívül savas források (Ördög Vize) találhatók itt", "Számtalan népi legenda övezi", "A piramisok tetején andezit kőtömbök egyensúlyoznak"],
        ro: [],
        en: ["Features over 200 distinct, naturally formed earth pyramids.", "Created entirely by complex natural erosion processes.", "Large stone blocks precariously balance on the peaks of the pyramids.", "Characterized by highly acidic, mineral-rich reddish water springs.", "Surrounded by numerous local myths and folklore legends."]
    }
  },
  {
    id: "lake-palic",
    type: "lake",
    parent: "region-vojvodina",
    coords: [19.7611, 46.0667],
    name: { de: "Palić-See", hu: "Palicsi-tó", ro: "Lacul Palić", en: "Lake Palić" },
    description: {
      de: "Der Palić-See bei Subotica ist ein beliebtes Urlaubsziel mit Jugendstil-Gebäuden und einem großen Zoo.",
      hu: "A Szabadka melletti Palicsi-tó népszerű nyaralóhely szecessziós épületekkel és egy nagy állatkerttel.",
      ro: "Lacul Palić de lângă Subotica este o destinație populară de vacanță, cu clădiri Art Nouveau și o grădină zoologică mare.",
      en: "Lake Palić near Subotica is a popular holiday destination with Art Nouveau buildings and a large zoo."
    },
    descriptionAdvanced: {
        de: "",
        hu: "A Palicsi-tó (Palić) Szerbia északi részén, Szabadka közelében található, sekély vizű szikes tó. A 19. század végén az arisztokrácia egyik legkedveltebb gyógyfürdője volt, amit a part menti lenyűgöző szecessziós villák, a Víztorony és a Grand Terasz ma is hűen őriznek. A tó gazdag madárvilágnak is otthont ad, partján pedig egy gyönyörű park és egy híres állatkert található. Földrajz K7 — szikes tavak.",
        ro: "",
        en: "Lake Palić is the largest natural lake in Serbia, located in the northernmost part of the country near Subotica. The lake and its surrounding settlement blossomed into an elegant resort in the late 19th and early 20th centuries, leaving behind stunning Art Nouveau villas, a historic water tower, and a grand terrace. Today, it is a beloved destination for relaxation, wine tasting, and bird watching, seamlessly blending natural beauty with architectural elegance. Geography K7 — lake recreation."
    },
    facts: {
      de: ["Flachwassersee", "Nahe Subotica", "Tourismus-Zentrum", "Jugendstil", "Filmfestival"],
      hu: ["Sekélyvizű tó", "Szabadka közelében", "Turisztikai központ", "Szecesszió", "Filmfesztivál"],
      ro: ["Lac cu apă puțin adâncă", "Lângă Subotica", "Centru turistic", "Art Nouveau", "Festival de film"],
      en: ["Shallow lake", "Near Subotica", "Tourism center", "Art Nouveau", "Film festival"]
    },
    factsAdvanced: {
        de: [],
        hu: ["Szabadka melletti népszerű sekély tó", "Kiemelkedő szecessziós épületek a parton", "A 19. században luxus gyógyfürdő volt", "Híres állatkert működik a partján", "Gazdag vízimadár-populációval rendelkezik"],
        ro: [],
        en: ["Ranks as the largest natural lake within Serbia's borders.", "Located in the extreme north, very close to Subotica.", "Boasts outstanding Art Nouveau architectural monuments.", "Evolved into an elegant and elite resort in the 19th century.", "A highly popular destination for relaxation and local wine tasting."]
    }
  }
];

export const serbiaRivers: POI[] = [
  {
    id: "river-danube-serbia",
    type: "river",
    parent: "country-serbia",
    coords: [20.4500, 44.8236], // Belgrade confluence point as generic loc
    name: { de: "Donau", hu: "Duna", ro: "Dunărea", en: "Danube" },
    description: {
      de: "Die Donau fließt durch den Norden und Osten Serbiens und bildet das imposante Eiserne Tor.",
      hu: "A Duna Szerbia északi és keleti részén folyik keresztül, kialakítva az impozáns Vaskaput.",
      ro: "Dunărea curge prin nordul și estul Serbiei și formează impunătoarele Porți de Fier.",
      en: "The Danube flows through northern and eastern Serbia, forming the imposing Iron Gates."
    },
    descriptionAdvanced: {
        de: "",
        hu: "A Duna Szerbia legfontosabb folyója, amely közel 600 kilométeren keresztül kanyarog az országon át, összekötve a közép-európai síkságokat a Balkánnal. Útja során a folyó érinti a Vajdaság termékeny vidékeit, a fővárost, Belgrádot, és végül lenyűgöző szurdokot vág a Vaskapunál. A folyó mentén ókori római erődök, középkori várak és modern iparvárosok sorakoznak, bizonyítva a vízút évezredes stratégiai jelentőségét. Földrajz K7 — nagy folyók gazdasági szerepe.",
        ro: "",
        en: "The Danube River is Europe's second-longest river and forms a crucial geographic and economic artery as it flows through Serbia. It enters the country in the Pannonian Plain, flows past the capital city of Belgrade, and eventually carves its way through the dramatic Iron Gates gorge. The river has historically served as an important trade route and cultural boundary, and today it is essential for tourism, shipping, and diverse ecosystems. Geography K7 — European river systems."
    },
    facts: {
      de: ["Wichtigster Fluss", "Fließt durch Belgrad", "Eisernes Tor", "Grenzfluss", "Schifffahrtsweg"],
      hu: ["Legfontosabb folyó", "Átfolyik Belgrádon", "Vaskapu", "Határfolyó", "Hajózási útvonal"],
      ro: ["Cel mai important râu", "Curge prin Belgrad", "Porțile de Fier", "Râu de frontieră", "Cale navigabilă"],
      en: ["Most important river", "Flows through Belgrade", "Iron Gates", "Border river", "Navigable waterway"]
    },
    factsAdvanced: {
        de: [],
        hu: ["Közel 588 kilométeren folyik Szerbiában", "Keresztülhalad Belgrádon és Újvidéken", "A Vaskapu-szorosnál töri át a hegyeket", "Számos történelmi erőd vigyázza a partját", "Kritikus fontosságú nemzetközi hajózóút"],
        ro: [],
        en: ["Serves as Europe's second-longest river.", "Flows directly through the Serbian capital of Belgrade.", "Carves out the spectacular Iron Gates gorge in eastern Serbia.", "Historically acted as a major trade route and imperial boundary.", "Crucial for modern shipping, regional tourism, and biodiversity."]
    }
  },
  {
    id: "river-sava",
    type: "river",
    parent: "country-serbia",
    coords: [19.6500, 44.8833],
    name: { de: "Save", hu: "Száva", ro: "Sava", en: "Sava" },
    description: {
      de: "Die Save ist ein großer Flussfluss, der in Belgrad in die Donau mündet.",
      hu: "A Száva egy nagy folyó, amely Belgrádban ömlik a Dunába.",
      ro: "Sava este un râu mare care se varsă în Dunăre la Belgrad.",
      en: "The Sava is a major river that flows into the Danube in Belgrade."
    },
    descriptionAdvanced: {
        de: "",
        hu: "A Száva folyó a Balkán egyik legjelentősebb vízfolyása, amely Szlovéniából eredve éri el Szerbiát, ahol Belgrádnál ömlik a Dunába. A folyó történelmileg hosszú ideig határvonalat képezett a Habsburg Birodalom és az Oszmán Birodalom között. Ma a partjai nyüzsgő élettel teliek; Belgrádban a Száva-parti sétányok és az úszó szórakozóhelyek (splavok) a modern városi kultúra szívét jelentik. Földrajz K7 — vízrajz és városi rekreáció.",
        ro: "",
        en: "The Sava River is a major tributary of the Danube and a defining geographical feature of the western Balkans. In Serbia, it flows through fertile plains before meeting the Danube precisely at the heart of Belgrade, below the Kalemegdan Fortress. Historically, the Sava formed the natural border between the Austro-Hungarian and Ottoman empires. Today, its banks are lined with vibrant promenades, floating restaurants, and vital shipping infrastructure. Geography K7 — river confluences."
    },
    facts: {
      de: ["Mündet in die Donau", "Fließt durch Belgrad", "Wichtiger Wasserweg", "Trennt Zentralserbien von der Vojvodina", "Zahlreiche Brücken"],
      hu: ["A Dunába ömlik", "Átfolyik Belgrádon", "Fontos vízi út", "Elválasztja Közép-Szerbiát a Vajdaságtól", "Számos híd"],
      ro: ["Se varsă în Dunăre", "Curge prin Belgrad", "Cale navigabilă importantă", "Separă Serbia Centrală de Voivodina", "Multe poduri"],
      en: ["Flows into the Danube", "Flows through Belgrade", "Important waterway", "Separates Central Serbia from Vojvodina", "Numerous bridges"]
    },
    factsAdvanced: {
        de: [],
        hu: ["A Duna legnagyobb vízhozamú mellékfolyója", "Belgrádnál ömlik a Dunába", "Történelmi birodalmak határvonala volt", "A partjain rengeteg úszó étterem található", "Kereskedelmi hajózásra is használják"],
        ro: [],
        en: ["One of the most important tributaries of the Danube River.", "Meets the Danube directly at the center of Belgrade.", "Historically formed the border between major European empires.", "Its banks are famous for vibrant floating restaurants and nightlife.", "Provides vital shipping infrastructure for the region."]
    }
  }
];

export const serbiaDistrictPoi: POI[] = [
  // RS-001 Severno-Backi
      // RS-002 Zapadno-Backi
  {
    id: "RS-002-sombor",
    type: "city",
    parent: "RS-002",
    coords: [19.1125, 45.7739],
    name: { de: "Sombor", hu: "Zombor", ro: "Sombor", en: "Sombor" },
    description: {
      de: "Eine grüne Stadt in der West-Batschka, berühmt für ihre Parks, Kutschen und das imposante Komitatsgebäude.",
      hu: "Zöldellő város Nyugat-Bácskában, híres parkjairól, fogatairól és az impozáns vármegyeházáról.",
      ro: "Un oraș verde în Bačka de Vest, faimos pentru parcurile sale, trăsurile și clădirea impresionantă a comitatului.",
      en: "A green city in West Bačka, famous for its parks, carriages, and the impressive county building."
    },
    descriptionAdvanced: {
        de: "",
        hu: "Zombor (Sombor) a Nyugat-Bácska központja, amely a török hódoltság után a 18. században fejlődött jelentős várossá. Gyakran nevezik Szerbia legzöldebb városának is, a utcákat szegélyező hatalmas, több mint egy évszázados ostorfák miatt. A város építészetét a magyar és szerb kultúra keveredése, valamint a lenyűgöző megyeháza és a gyönyörű barokk és klasszicista paloták határozzák meg. Művészet K8 — 19. századi klasszicizmus.",
        ro: "",
        en: "Sombor is the cultural and administrative center of the West Bačka district, which developed into a significant city in the 18th century following the Ottoman period. It is frequently referred to as the greenest city in Serbia, primarily due to the massive, century-old hackberry trees lining its streets. The city's architecture is defined by a blend of Hungarian and Serbian cultural influences, highlighted by its stunning county hall and beautiful Baroque and Neoclassical palaces. Arts K8 — 19th-century Neoclassicism."
    },
    facts: {
      de: ["Stadt der Alleen", "Gemälde 'Schlacht von Zenta'", "Reiche Kulturgeschichte"],
      hu: ["A fasorok városa", "Zentai csata óriásfestmény", "Gazdag kultúrtörténet"],
      ro: ["Orașul aleilor", "Pictura 'Bătălia de la Zenta'", "Istorie culturală bogată"],
      en: ["City of avenues", "'Battle of Senta' painting", "Rich cultural history"]
    },
    factsAdvanced: {
        de: [],
        hu: ["Szerbia egyik legzöldebb városa", "Hatalmas, árnyékos ostorfák szegélyezik", "A Nyugat-Bácska történelmi központja", "Kiemelkedő a barokk és klasszicista építészete", "Híres a régi lovaskocsi-hagyományairól"],
        ro: [],
        en: ["Serves as the administrative center of the West Bačka district.", "Widely known as the greenest city in Serbia.", "Streets are famously lined with century-old hackberry trees.", "Features a stunning mix of Baroque and Neoclassical architecture.", "Showcases a rich blend of Hungarian and Serbian cultures."]
    }
  },
  {
    id: "RS-002-apatin",
    type: "city",
    parent: "RS-002",
    coords: [18.9858, 45.6714],
    name: { de: "Apatin", hu: "Apatin", ro: "Apatin", en: "Apatin" },
    description: {
      de: "Eine Stadt am linken Donauufer, bekannt für ihre lange Brautradition und Fischereigeschichte.",
      hu: "Város a Duna bal partján, amely hosszú sörfőzési hagyományairól és halászati múltjáról ismert.",
      ro: "Un oraș pe malul stâng al Dunării, cunoscut pentru lunga sa tradiție în fabricarea berii și istoria pescuitului.",
      en: "A city on the left bank of the Danube, known for its long brewing tradition and fishing history."
    },
    descriptionAdvanced: {
        de: "",
        hu: "Apatin egy csendes Duna-parti kisváros a Vajdaságban, amely évszázadok óta a halászatról és a hajózásról ismert. A város a 18. századi német betelepítések (dunai svábok) egyik legfontosabb központja volt, ami jelentősen formálta építészetét és iparát. Itt működik Szerbia egyik legismertebb sörgyára, a Jelen sör otthona. A közeli Felső-Duna-mente Természetvédelmi Terület gazdag ártéri ökoszisztémát rejt. Földrajz K7 — ártéri gazdálkodás.",
        ro: "",
        en: "Apatin is a peaceful town situated directly on the left bank of the Danube in the Vojvodina region. It is most famous nationwide for its historic brewery, which has been producing one of Serbia's most popular beers since 1756. The town boasts a rich fishing tradition and is surrounded by pristine nature reserves, making it a haven for anglers and ecotourists. The blend of industrial heritage and natural beauty gives Apatin its unique character. Geography K7 — riverbank settlements."
    },
    facts: {
      de: ["Jelen-Brauerei", "Donauhafen", "Fischersymposium"],
      hu: ["Jelen sörgyár", "Dunai kikötő", "Halászati hagyományok"],
      ro: ["Fabrica de bere Jelen", "Port la Dunăre", "Tradiții pescărești"],
      en: ["Jelen Brewery", "Danube port", "Fishing traditions"]
    },
    factsAdvanced: {
        de: [],
        hu: ["Híres sörfőző központ (Jelen sör)", "A dunai svábok egykori fontos települése", "A Duna partján fekszik", "Gazdag halászati hagyományokkal bír", "A Felső-Duna-mente Természetvédelmi Terület kapuja"],
        ro: [],
        en: ["Located directly on the left bank of the Danube River.", "Home to a historic brewery established in 1756.", "Maintains a deep and historic tradition of river fishing.", "Surrounded by beautiful, pristine natural water reserves.", "Functions as a popular haven for anglers and ecotourists."]
    }
  },
  // RS-003 Severno-Banatski
  {
    id: "RS-003-kikinda",
    type: "city",
    parent: "RS-003",
    coords: [20.4650, 45.8244],
    name: { de: "Kikinda", hu: "Nagykikinda", ro: "Chichinda", en: "Kikinda" },
    description: {
      de: "Eine Stadt im Nordbanat, berühmt für die archäologischen Mammutfunde und das jährliche Kürbisfestival.",
      hu: "Észak-bánsági város, amely híres a régészeti mammutleleteiről és az évenkénti tökfesztiválról.",
      ro: "Un oraș în Banatul de Nord, faimos pentru descoperirile arheologice de mamuți și festivalul anual al dovleacului.",
      en: "A city in North Banat, famous for archaeological mammoth finds and the annual pumpkin festival."
    },
    descriptionAdvanced: {
        de: "",
        hu: "Nagykikinda (Kikinda) az Észak-Bánság kulturális és gazdasági központja. A város a világ egyik legjelentősebb telelőhelye a réti fülesbaglyoknak; telente százával pihennek a városközpont fáink. Ezenkívül Kikinda büszkélkedhet a világ egyik legjobb állapotban fennmaradt mamutcsontvázával (Kika), amelyet a helyi múzeumban állítottak ki. A város építészetét a 19. századi gazdag polgárházak uralják. Biológia K7 — madárvonulás.",
        ro: "",
        en: "Kikinda is a historic town in the northern Banat region of Vojvodina, renowned for its beautifully preserved late 19th-century architecture. The town is famous worldwide for a unique reason: the discovery of a nearly perfectly preserved mammoth skeleton, affectionately named 'Kika,' which is exhibited in the local museum. It is also known as the European capital of owls, as hundreds of long-eared owls roost in the trees around the main square each winter. Furthermore, Kikinda hosts popular annual festivals celebrating pumpkins. Biology K7 — urban wildlife habitats."
    },
    facts: {
      de: ["Kika das Mammut", "Kürbistage", "Waldohreulen-Winterquartier"],
      hu: ["Kika a mammut", "Témanapok (tökfesztivál)", "Réti fülesbaglyok telelőhelye"],
      ro: ["Mamutul Kika", "Zilele dovleacului", "Iernarea bufnițelor cu urechi lungi"],
      en: ["Kika the mammoth", "Pumpkin Days", "Long-eared owl wintering site"]
    },
    factsAdvanced: {
        de: [],
        hu: ["A réti fülesbaglyok világhírű telelőhelye", "Itt találták meg 'Kika', a mamut csontvázát", "Az Észak-Bánság legfontosabb városa", "Számos gyönyörű 19. századi polgárháza van", "A kerámiagyártásáról is ismert volt"],
        ro: [],
        en: ["Home to the nearly intact skeleton of a mammoth named 'Kika'.", "Recognized globally as the winter roosting capital for long-eared owls.", "Hosts a renowned annual pumpkin festival (Dani ludaje).", "Features exceptionally well-preserved 19th-century Banat architecture.", "Located in the flat, highly fertile northern Banat plain."]
    }
  },
  {
    id: "RS-003-senta",
    type: "city",
    parent: "RS-003",
    coords: [20.0817, 45.9289],
    name: { de: "Senta", hu: "Zenta", ro: "Senta", en: "Senta" },
    description: {
      de: "Eine historische Stadt an der Theiß, berühmt für die Schlacht bei Zenta im Jahr 1697.",
      hu: "Történelmi város a Tisza partján, amely az 1697-es zentai csatáról híres.",
      ro: "Un oraș istoric pe Tisa, faimos pentru bătălia de la Senta din 1697.",
      en: "A historical city on the Tisa river, famous for the Battle of Senta in 1697."
    },
    descriptionAdvanced: {
        de: "",
        hu: "Zenta (Senta) a Tisza folyó mentén épült történelmi település, amely különösen a magyar és szerb történelemben játszott fontos szerepet. 1697-ben a zentai csatában Savoyai Jenő herceg megsemmisítő vereséget mért az oszmán seregekre, ami fordulópontot jelentett Európa történetében. A város főterét a lenyűgöző Városháza hatalmas tornya uralja, melynek kilátójából csodás panoráma nyílik a Tisza-völgyre. Történelem K8 — a török kiűzése Európából.",
        ro: "",
        en: "Senta is a picturesque town on the banks of the Tisa River, deeply intertwined with both Serbian and Hungarian history. It is most famous as the site of the pivotal 1697 Battle of Zenta, where the forces of the Holy League decisively defeated the Ottoman army, significantly altering European history. Today, Senta is a quiet, culturally rich settlement boasting beautiful Secessionist architecture and a monumental town hall. It remains an important center for the Hungarian minority in Vojvodina. History K7 — Ottoman-Habsburg wars."
    },
    facts: {
      de: ["Theiß-Ufer", "Schlachtdenkmal", "Prächtiges Rathaus"],
      hu: ["Tisza-part", "Csata emlékműve", "Pompás városháza"],
      ro: ["Malul Tisei", "Monumentul bătăliei", "Primărie splendidă"],
      en: ["Tisa riverbank", "Battle monument", "Splendid city hall"]
    },
    factsAdvanced: {
        de: [],
        hu: ["Az 1697-es zentai csata helyszíne", "A Tisza folyó partján fekszik", "A Városháza tornya a város jelképe", "Gazdag magyar kulturális örökséggel bír", "Híres a gesztenyefákkal szegélyezett utcáiról"],
        ro: [],
        en: ["Site of the historically decisive Battle of Zenta in 1697.", "Located prominently along the scenic banks of the Tisa River.", "Serves as an important cultural hub for the Hungarian community.", "Features a monumental, highly ornate central town hall.", "Showcases beautiful examples of regional Secessionist architecture."]
    }
  },
  // RS-004 Pcinjski
  {
    id: "RS-004-vranje",
    type: "city",
    parent: "RS-004",
    coords: [21.8958, 42.5544],
    name: { de: "Vranje", hu: "Vranje", ro: "Vranje", en: "Vranje" },
    description: {
      de: "Ein kulturelles Zentrum in Südserbien mit orientalischer Architektur und reicher Musiktradition.",
      hu: "Dél-szerbiai kulturális központ, amely keleti építészetéről és gazdag zenei hagyományairól ismert.",
      ro: "Un centru cultural în sudul Serbiei, cu arhitectură orientală și o bogată tradiție muzicală.",
      en: "A cultural center in southern Serbia with oriental architecture and rich music tradition."
    },
    descriptionAdvanced: {
        de: "",
        hu: "Vranje Szerbia legdélibb városa, ahol a balkáni és oszmán kulturális hatások a legerősebben érezhetők a mindennapi életben, az építészetben és a zenében. A régió híres fúvószenekarairól, hagyományos ételeiről és a sajátos déli dialektusról. A város fölött magasodó középkori Markovo Kale erőd romjai, valamint az egykori török fürdők (hamamok) a viharos történelem néma tanúi. Történelem K7 — oszmán kulturális örökség.",
        ro: "",
        en: "Vranje is a vibrant city in southern Serbia, functioning as a cultural bridge between the Balkans and the Orient. Due to its long history under Ottoman rule, the city has preserved a distinct oriental charm, evident in its old Turkish baths, winding streets, and unique local dialect. Vranje is also famous as the birthplace of Bora Stanković, one of Serbia's greatest literary figures, whose works immortalized the town's complex social transitions at the turn of the 20th century. Literature K8 — early 20th-century realism."
    },
    facts: {
      de: ["Beli Most (Weiße Brücke)", "Pašin Konak", "Geburtsort von Bora Stanković"],
      hu: ["Beli Most (Fehér híd)", "Pašin Konak", "Bora Stanković szülőhelye"],
      ro: ["Beli Most (Podul Alb)", "Pašin Konak", "Locul de naștere al lui Bora Stanković"],
      en: ["Beli Most (White Bridge)", "Pasha's Residence", "Birthplace of Bora Stanković"]
    },
    factsAdvanced: {
        de: [],
        hu: ["Szerbia legdélibb fekvésű nagyobb városa", "Erős oszmán építészeti és kulturális hatás", "A rézfúvós zenekarok egyik központja", "Sajátos dél-szerb dialektust beszélnek", "Bora Stanković híres író szülővárosa"],
        ro: [],
        en: ["Known for its enduring and distinct oriental architectural charm.", "Birthplace of the celebrated Serbian author Bora Stanković.", "Preserves numerous historic structures including old Turkish baths.", "Features a unique and highly distinctive local southern dialect.", "Acts as a primary cultural center of the Pčinja District."]
    }
  },
  {
    id: "RS-004-prohor-pcinjski",
    type: "historical",
    parent: "RS-004",
    coords: [21.8950, 42.3294],
    name: { de: "Kloster Prohor Pčinjski", hu: "Prohor Pčinjski kolostor", ro: "Mănăstirea Prohor Pčinjski", en: "Prohor Pčinjski Monastery" },
    description: {
      de: "Ein serbisch-orthodoxes Kloster aus dem 11. Jahrhundert in der Nähe der Grenze zu Nordmazedonien.",
      hu: "11. századi szerb ortodox kolostor az észak-macedón határ közelében.",
      ro: "O mănăstire ortodoxă sârbă din secolul al XI-lea, situată lângă granița cu Macedonia de Nord.",
      en: "An 11th-century Serbian Orthodox monastery located near the border with North Macedonia."
    },
    descriptionAdvanced: {
        de: "",
        hu: "A Prohor Pčinjski kolostor Dél-Szerbiában, közvetlenül az észak-macedón határ mellett, egy festői folyóvölgyben bújik meg. A 11. században alapított ortodox kolostor csodálatos bizánci freskókat rejt. A történelem viharait átvészelve a komplexum mindig is a szellemi élet és az oktatás fontos központja maradt a régióban. A második világháború alatt itt tartották a macedón partizánok első gyűlését. Történelem K8 — balkáni egyháztörténet.",
        ro: "",
        en: "The Prohor Pčinjski Monastery is an ancient spiritual sanctuary located in the extreme south of Serbia, near the border with North Macedonia. Founded in the 11th century by Byzantine Emperor Romanos IV Diogenes, the monastery is nestled in the tranquil, densely forested valley of the Pčinja River. Beyond its spiritual significance, it played a crucial role in modern history as the site where the Anti-Fascist Assembly for the National Liberation of Macedonia (ASNOM) held its first session in 1944. History K8 — World War II assemblies."
    },
    facts: {
      de: ["Gegründet von Kaiser Romanos IV.", "Geistiges Zentrum", "Inmitten unberührter Natur"],
      hu: ["IV. Rómanosz császár alapította", "Szellemi központ", "Érintetlen természetben"],
      ro: ["Fondată de împăratul Romanos al IV-lea", "Centru spiritual", "În mijlocul naturii virgine"],
      en: ["Founded by Emperor Romanos IV", "Spiritual center", "In untouched nature"]
    },
    factsAdvanced: {
        de: [],
        hu: ["A 11. században alapították", "Közvetlenül a határ mellett, hegyek között fekszik", "Értékes 14. századi freskókat őriz", "Szent Prohor remete tiszteletére épült", "Fontos második világháborús történelmi emlékhely"],
        ro: [],
        en: ["Founded by Byzantine Emperor Romanos IV Diogenes in the 11th century.", "Located in a tranquil, densely forested river valley.", "Site of the historic ASNOM assembly during World War II.", "Dedicated to Saint Prohor, a revered local hermit and saint.", "Positioned near the contemporary border with North Macedonia."]
    }
  },
  // RS-005 Borski
  {
    id: "RS-005-bor",
    type: "city",
    parent: "RS-005",
    coords: [22.1000, 44.0667],
    name: { de: "Bor", hu: "Bor", ro: "Bor", en: "Bor" },
    description: {
      de: "Ein wichtiges Bergbau- und Industriezentrum im Osten Serbiens, bekannt für seine Kupferminen.",
      hu: "Fontos bányászati és ipari központ Kelet-Szerbiában, rézbányáiról ismert.",
      ro: "Un important centru minier și industrial în estul Serbiei, cunoscut pentru minele sale de cupru.",
      en: "An important mining and industrial center in eastern Serbia, known for its copper mines."
    },
    descriptionAdvanced: {
        de: "",
        hu: "Bor Kelet-Szerbia ipari központja, amely Európa egyik legnagyobb réz- és aranybányája köré épült a 20. század elején. A városképet a hatalmas ipari létesítmények és a gigantikus külszíni fejtések uralják, amelyek szürreális, holdbéli tájat hoznak létre. Bár a bányászat súlyos ökológiai kihívásokat okozott, a környék vadregényes természeti szépségeket, barlangokat és hegyeket is rejt. Földrajz K8 — nehézipar és környezetvédelem.",
        ro: "",
        en: "Bor is a major industrial city in eastern Serbia, historically synonymous with copper mining and metallurgy since the early 20th century. The dramatic landscape around the city is heavily marked by immense open-pit mines and towering industrial facilities, offering a stark contrast to the surrounding natural beauty. Despite its heavy industrial legacy, the region is close to remarkable natural attractions, including the nearby Brestovačka Banja spa and the awe-inspiring Dubašnica canyon. Geography K8 — mining and industrial landscapes."
    },
    facts: {
      de: ["Kupfertagebau", "Industrieerbe", "Nahegelegener Bor-See"],
      hu: ["Külszíni rézbánya", "Ipari örökség", "Közeli Bori-tó"],
      ro: ["Exploatare de cupru în carieră", "Moștenire industrială", "Lacul Bor din apropiere"],
      en: ["Copper open-pit mine", "Industrial heritage", "Nearby Lake Bor"]
    },
    factsAdvanced: {
        de: [],
        hu: ["Európa egyik legnagyobb réz- és aranybányája", "A 20. században épült bányaváros", "Hatalmas külszíni bányagödrök veszik körül", "Francia tőkével alapították az első bányákat", "Jelentős nehézipari és kohászati központ"],
        ro: [],
        en: ["Serves as the undisputed center of Serbia's copper mining industry.", "Features one of the largest open-pit copper mines in Europe.", "Developed rapidly during the industrialization of the 20th century.", "Located in close proximity to the historic Brestovačka Banja spa.", "The city's landscape is defined by vast industrial infrastructure."]
    }
  },
  {
    id: "RS-005-negotin",
    type: "city",
    parent: "RS-005",
    coords: [22.5300, 44.2264],
    name: { de: "Negotin", hu: "Negotin", ro: "Negotin", en: "Negotin" },
    description: {
      de: "Eine Stadt im Dreiländereck Serbien-Bulgarien-Rumänien, berühmt für ihre Weinbautradition.",
      hu: "Város a szerb-bolgár-román hármashatárnál, híres bortermelési hagyományairól.",
      ro: "Un oraș situat la granița dintre Serbia, Bulgaria și România, faimos pentru tradiția viticolă.",
      en: "A city near the triple border of Serbia, Bulgaria, and Romania, famous for its wine-making tradition."
    },
    descriptionAdvanced: {
        de: "",
        hu: "Negotin Szerbia legkeletibb városa, a bolgár és román határ találkozásánál. A régió mikroklímája rendkívül kedvező a szőlőtermesztésnek, így a város évszázadok óta híres kiváló minőségű borairól. A környéken találhatók az egyedülálló 'pivnice' vagy 'rajacke pimnice' nevű történelmi kőborospincék faluja, ahol a hagyományos borkészítés titkait őrzik. A város Stevan Mokranjac, a híres szerb zeneszerző szülőhelye is. Földrajz K7 — történelmi borvidékek.",
        ro: "",
        en: "Negotin is an essential cultural and agricultural hub in the far east of Serbia, uniquely situated in a lowland basin near the borders of Romania and Bulgaria. It is famous as the hometown of Stevan Mokranjac, the celebrated 19th-century composer who laid the foundations of modern Serbian choral music. The region's sunny, specific microclimate makes it one of the premier wine-producing areas in the Balkans, famous for its historic 'pivnice'—unique stone wine cellars built exclusively for storing wine. Arts K8 — 19th-century choral music."
    },
    facts: {
      de: ["Negotiner Weinkeller", "Heimat von Stevan Mokranjac", "Nahe dem Eisernen Tor"],
      hu: ["Negotini borpincék", "Stevan Mokranjac hazája", "A Vaskapu közelében"],
      ro: ["Cramele din Negotin", "Casa lui Stevan Mokranjac", "Lângă Porțile de Fier"],
      en: ["Negotin wine cellars", "Home of Stevan Mokranjac", "Near the Iron Gates"]
    },
    factsAdvanced: {
        de: [],
        hu: ["Szerbia legkeletibb régiójának központja", "Stevan Mokranjac zeneszerző szülővárosa", "Kiváló borvidék, különleges mikroklímával", "Híres a történelmi kőborospincéiről (pivnice)", "Hármashatár közelében (Szerbia, Románia, Bulgária) fekszik"],
        ro: [],
        en: ["Birthplace of Stevan Mokranjac, the father of Serbian choral music.", "Strategically located near the borders of both Romania and Bulgaria.", "Renowned for its unique historic stone wine cellars called 'pivnice'.", "Features a specific microclimate highly conducive to viticulture.", "Serves as the administrative heart of the Bor District's eastern flank."]
    }
  },
  // RS-006 Zajecarski
  {
    id: "RS-006-zajecar",
    type: "city",
    parent: "RS-006",
    coords: [22.2800, 43.9000],
    name: { de: "Zaječar", hu: "Zaječar", ro: "Zaječar", en: "Zaječar" },
    description: {
      de: "Das administrative Zentrum des Bezirks Zaječar, bekannt für seine kulturellen Veranstaltungen und Geschichte.",
      hu: "A Zaječar körzet közigazgatási központja, amely kulturális eseményeiről és történelméről ismert.",
      ro: "Centrul administrativ al districtului Zaječar, cunoscut pentru evenimentele sale culturale și istorie.",
      en: "The administrative center of the Zaječar district, known for its cultural events and history."
    },
    descriptionAdvanced: {
        de: "",
        hu: "Zaječar Kelet-Szerbia kulturális és adminisztratív központja, a Timok folyó völgyében. A várost leginkább a közeli Felix Romuliana római kori palota, az UNESCO Világörökség teszi ismertté a világban. Emellett Zaječar a 'Gitarijada' nevű, évtizedek óta megrendezett rockzenei fesztiváljáról is híres, amely a Balkán egyik legrégebbi zenei eseménye. A környék dombjain elterülő falvak megőrizték autentikus népszokásaikat. Történelem K8 — modern ifjúsági kultúra.",
        ro: "",
        en: "Zaječar is the administrative heart of the Timok region in eastern Serbia, located in the valley of the Crni Timok River. The city boasts a rich history spanning from Roman antiquity to the modern era, most notably due to its proximity to the UNESCO-listed Roman palace Felix Romuliana. Today, Zaječar is perhaps best known nationwide for hosting the 'Gitarijada,' one of the longest-running rock music festivals in Southeastern Europe, which has defined the city's vibrant modern cultural identity. Arts K8 — modern music festivals."
    },
    facts: {
      de: ["Gitarijada Rockfestival", "Nationalmuseum", "Tor nach Ostserbien"],
      hu: ["Gitarijada rockfesztivál", "Nemzeti Múzeum", "Kelet-Szerbia kapuja"],
      ro: ["Festivalul de rock Gitarijada", "Muzeul Național", "Poarta către estul Serbiei"],
      en: ["Gitarijada rock festival", "National Museum", "Gateway to eastern Serbia"]
    },
    factsAdvanced: {
        de: [],
        hu: ["A Timok régió legnagyobb városa", "A 'Gitarijada' rockfesztivál otthona", "A Felix Romuliana római palota kapuja", "A Zaječarsko sör híres gyártási helye", "Gazdag vlach és szerb népi hagyományok"],
        ro: [],
        en: ["Serves as the primary administrative center of the Timok region.", "Located just a few kilometers from the Roman palace Felix Romuliana.", "Hosts the legendary 'Gitarijada' rock music festival annually.", "Situated in the picturesque valley of the Crni Timok River.", "Features an engaging mix of classical and modern architectural styles."]
    }
  },
    // RS-007 Pirotski
  {
    id: "RS-007-pirot",
    type: "city",
    parent: "RS-007",
    coords: [22.5861, 43.1556],
    name: { de: "Pirot", hu: "Pirot", ro: "Pirot", en: "Pirot" },
    description: {
      de: "Eine Stadt im Südosten Serbiens, berühmt für ihre handgewebten Teppiche (Kilims) und Käsespezialitäten.",
      hu: "Délkelet-szerbiai város, amely kézzel szőtt szőnyegeiről (kilim) és sajtkülönlegességeiről híres.",
      ro: "Un oraș în sud-estul Serbiei, faimos pentru covoarele sale țesute manual (kilim) și specialitățile de brânză.",
      en: "A city in southeastern Serbia, famous for its hand-woven carpets (kilims) and cheese specialties."
    },
    descriptionAdvanced: {
        de: "",
        hu: "Pirot egy különleges hangulatú város a bolgár határ közelében, amelyet a Nišava folyó szel ketté. A város világhírű a kézzel szőtt, geometrikus mintázatú piroti szőnyegekről (ćilim), amelyeket ma már az UNESCO szellemi kulturális örökségként is elismer. Ezenkívül a helyi gasztronómia csúcsa, a piroti sajt (kačkavalj) és az ironikus piroti humor is messze földön ismert. A várost egy jól állapotban fennmaradt 14. századi erőd védi. Művészet K8 — hagyományos textilművészet.",
        ro: "",
        en: "Pirot is a historic town in southeastern Serbia, nestled in the valley of the Nišava River near the Bulgarian border. It is most famous internationally for its exceptional kilims (Pirot carpets), which are meticulously handwoven using ancient techniques and feature distinct geometric patterns with protective symbolism. The city also takes great pride in its culinary heritage, particularly its unique pressed cheese (Pirotski kačkavalj). The well-preserved 14th-century Momčilov Grad fortress stands as a testament to the town's medieval importance. Arts K7 — traditional textiles and crafts."
    },
    facts: {
      de: ["Piroter Kilim", "Festung Momčilov Grad", "Käse von Pirot"],
      hu: ["Piroti kilim (szőnyeg)", "Momčilov Grad erőd", "Piroti sajt"],
      ro: ["Kilim de Pirot", "Cetatea Momčilov Grad", "Brânză de Pirot"],
      en: ["Pirot kilim", "Momčilov Grad Fortress", "Pirot cheese"]
    },
    factsAdvanced: {
        de: [],
        hu: ["A világhírű kézi szövésű piroti szőnyegek hazája", "Kiváló minőségű sajtjáról (kačkavalj) ismert", "14. századi középkori erődje van (Momčilov grad)", "Közvetlenül a Stara Planina hegység lábánál fekszik", "Sajátos helyi dialektust használnak"],
        ro: [],
        en: ["World-renowned for its intricate, handwoven traditional kilim carpets.", "Home to the exceptionally well-preserved 14th-century Momčilov Grad fortress.", "Famous across the region for its unique pressed cheese (kačkavalj).", "Located strategically near the modern border with Bulgaria.", "Boasts a deep and complex history of diverse cultural influences."]
    }
  },
  {
    id: "RS-007-stara-planina",
    type: "mountain",
    parent: "RS-007",
    coords: [22.6000, 43.3700],
    name: { de: "Stara Planina", hu: "Balkán-hegység (Stara Planina)", ro: "Munții Stara Planina", en: "Stara Planina" },
    description: {
      de: "Ein majestätisches Gebirge an der Grenze zu Bulgarien, bekannt für unberührte Natur und Wasserfälle.",
      hu: "Fenséges hegység a bolgár határon, érintetlen természetéről és vízeséseiről ismert.",
      ro: "Un munte majestuos la granița cu Bulgaria, cunoscut pentru natura sa virgină și cascadele sale.",
      en: "A majestic mountain range on the border with Bulgaria, known for untouched nature and waterfalls."
    },
    descriptionAdvanced: {
        de: "",
        hu: "A Stara Planina (Balkán-hegység) Szerbia és Bulgária határán húzódik, egyike a legérintetlenebb és legvadabb hegyvonulatoknak a régióban. Magasra nyúló, füves gerincei felett sziklás csúcsok magasodnak, köztük a Midžor (2169 m), Szerbia (Koszovó nélküli) legmagasabb pontja. A hegység elzárt völgyeiben hagyományos falvak bújnak meg, vizek szabdalta szurdokaiban pedig lenyűgöző, nehezen megközelíthető vízesések rejlenek. Földrajz K7 — magashegységi formakincs.",
        ro: "",
        en: "Stara Planina (the Balkan Mountains) represents one of the most rugged, wild, and untouched mountain ranges in Eastern Europe, forming a natural border between Serbia and Bulgaria. The region is characterized by steep peaks, dramatic waterfalls, deep gorges, and expansive high-altitude pastures where traditional sheep herding is still practiced. Recently, the area has seen the development of modern ski resorts, yet it remains primarily a haven for adventurous hikers and nature enthusiasts seeking absolute tranquility. Geography K8 — alpine ecosystems and borders."
    },
    facts: {
      de: ["Höchster Gipfel: Midžor", "Wintersportzentrum", "Zahlreiche Wasserfälle"],
      hu: ["Legmagasabb csúcs: Midžor", "Téli sportközpont", "Számos vízesés"],
      ro: ["Cel mai înalt vârf: Midžor", "Centru de sporturi de iarnă", "Numeroase cascade"],
      en: ["Highest peak: Midžor", "Winter sports center", "Numerous waterfalls"]
    },
    factsAdvanced: {
        de: [],
        hu: ["Szerbia és Bulgária természetes határa", "Itt található a Midžor csúcs (2169 méter)", "Érintetlen, vadregényes természeti terület", "Lenyűgöző és nehezen elérhető vízesések rejtőznek itt", "Hagyományos pásztorkultúrát őrző falvak"],
        ro: [],
        en: ["Forms a massive natural geographic border between Serbia and Bulgaria.", "Features some of the most dramatic and beautiful waterfalls in the country.", "Maintains strong traditions of high-altitude sheep herding.", "Midžor is the highest peak of this range within Serbian territory.", "Increasingly popular for both rigorous hiking and winter sports."]
    }
  },
  // RS-008 Jablanicki
  {
    id: "RS-008-leskovac",
    type: "city",
    parent: "RS-008",
    coords: [21.9461, 42.9981],
    name: { de: "Leskovac", hu: "Leskovac", ro: "Leskovac", en: "Leskovac" },
    description: {
      de: "Ein Zentrum in Südserbien, weltbekannt für seine Grillspezialitäten und das jährliche Grillfest 'Roštiljijada'.",
      hu: "Dél-szerbiai központ, világszerte ismert grillételeiről és az évenkénti 'Roštiljijada' grillfesztiválról.",
      ro: "Un centru din sudul Serbiei, cunoscut în întreaga lume pentru specialitățile sale la grătar și festivalul anual 'Roštiljijada'.",
      en: "A center in southern Serbia, world-famous for its grill specialties and the annual 'Roštiljijada' grill festival."
    },
    descriptionAdvanced: {
        de: "",
        hu: "Leskovac Dél-Szerbia egyik legfontosabb városa, amelyet gyakran a 'balkáni grill fővárosának' is neveznek. Az évente megrendezett Roštiljijada (grillfesztivál) több százezer látogatót vonz, ahol a hagyományos húsételeket ünneplik. A 19. század végén a város olyan erőteljes textilipari fellendülést élt át, hogy a 'szerb Manchesternek' hívták. Bár az ipar mára visszaesett, a város élénk déli mentalitása megmaradt. Gazdaság K8 — hagyományos élelmiszeripar.",
        ro: "",
        en: "Leskovac is a major city in southern Serbia, situated in the fertile Morava river valley. In the late 19th and early 20th centuries, it was famously dubbed 'Little Manchester' due to its highly successful and booming textile industry. Today, Leskovac is undisputed nationwide as the culinary capital of Serbian barbecue, annually hosting the famous 'Roštiljijada' festival, which attracts hundreds of thousands of visitors. The city combines a proud industrial past with a lively, welcoming southern spirit. Geography K7 — post-industrial urban development."
    },
    facts: {
      de: ["Grill-Hauptstadt", "Roštiljijada Festival", "Historische Textilindustrie"],
      hu: ["A grill fővárosa", "Roštiljijada fesztivál", "Történelmi textilipar"],
      ro: ["Capitala grătarului", "Festivalul Roštiljijada", "Industrie textilă istorică"],
      en: ["Grill capital", "Roštiljijada festival", "Historical textile industry"]
    },
    factsAdvanced: {
        de: [],
        hu: ["A híres szerb grillételek (roštilj) fővárosa", "Minden évben megrendezik a gigantikus grillfesztivált", "A 19. században 'szerb Manchesternek' nevezték textilipara miatt", "Dél-Szerbia fontos mezőgazdasági központja", "Híres a különleges pirospaprika termesztéséről"],
        ro: [],
        en: ["Historically known as 'Little Manchester' due to its massive textile industry.", "Universally recognized as the undisputed capital of Serbian barbecue.", "Hosts the massive 'Roštiljijada' meat festival every year.", "Located in a highly fertile agricultural basin in southern Serbia.", "Serves as the administrative center of the Jablanica District."]
    }
  },
  {
    id: "RS-008-caricin-grad",
    type: "historical",
    parent: "RS-008",
    coords: [21.6700, 42.9500],
    name: { de: "Caričin Grad", hu: "Caričin Grad (Justiniana Prima)", ro: "Caričin Grad", en: "Caričin Grad" },
    description: {
      de: "Die Ruinen der byzantinischen Stadt Justiniana Prima, erbaut von Kaiser Justinian I. im 6. Jahrhundert.",
      hu: "Justiniana Prima bizánci város romjai, amelyet I. Justinianus császár építtetett a 6. században.",
      ro: "Ruinele orașului bizantin Justiniana Prima, construit de împăratul Iustinian I în secolul al VI-lea.",
      en: "The ruins of the Byzantine city Justiniana Prima, built by Emperor Justinian I in the 6th century."
    },
    descriptionAdvanced: {
        de: "",
        hu: "Caričin Grad, más néven Justiniana Prima, egy lenyűgöző kora bizánci régészeti lelőhely Dél-Szerbiában. I. Justinianus császár alapította a 6. században saját szülőföldjén, mint a Balkán új adminisztratív és egyházi központját. A város monumentális bazilikákkal, oszlopsoros utcákkal és fürdőkkel rendelkezett, de virágkora mindössze néhány évtizedig tartott, mielőtt az avarok és szlávok elpusztították. Történelem K6 — bizánci városépítészet.",
        ro: "",
        en: "Caričin Grad (Justiniana Prima) is one of the most important early Byzantine archaeological sites in the Balkans. It was built in the 6th century by Emperor Justinian I near his birthplace to serve as the new administrative and spiritual capital of the Illyricum prefecture. The meticulously planned city featured grandiose basilicas, advanced aqueducts, and luxurious public baths. However, its glory was short-lived; it was abandoned just over a century later following massive Slavic and Avar invasions. History K6 — Early Byzantine urban planning."
    },
    facts: {
      de: ["Bedeutende archäologische Stätte", "Frühchristliche Basiliken", "Geplante Stadt"],
      hu: ["Jelentős régészeti lelőhely", "Korakeresztény bazilikák", "Tervezett város"],
      ro: ["Sit arheologic important", "Bazilici creștine timpurii", "Oraș planificat"],
      en: ["Important archaeological site", "Early Christian basilicas", "Planned city"]
    },
    factsAdvanced: {
        de: [],
        hu: ["I. Justinianus bizánci császár alapította a 6. században", "Eredeti neve Justiniana Prima volt", "Monumentális bazilikák és mozaikok maradványai", "Rövid életű, de grandiózus püspöki székhely volt", "Klasszikus kora bizánci várostervezés ritka példája"],
        ro: [],
        en: ["Founded by the powerful Byzantine Emperor Justinian I in the 6th century.", "Designed to serve as the grand capital of the Illyricum prefecture.", "Features ruins of advanced aqueducts, baths, and massive basilicas.", "Abandoned entirely in the 7th century due to relentless invasions.", "Provides crucial insights into early Byzantine urban architectural planning."]
    }
  },
  // RS-009 Raški
  {
    id: "RS-009-kraljevo",
    type: "city",
    parent: "RS-009",
    coords: [20.6894, 43.7258],
    name: { de: "Kraljevo", hu: "Kraljevo", ro: "Kraljevo", en: "Kraljevo" },
    description: {
      de: "Eine Stadt an der Mündung des Ibar in die Westmorava, historisch eng mit der Krönung serbischer Könige verbunden.",
      hu: "Az Ibar és a Nyugati-Morava összefolyásánál fekvő város, történelmileg a szerb királyok koronázásához kötődik.",
      ro: "Un oraș la confluența râului Ibar cu Morava de Vest, legat istoric de încoronarea regilor sârbi.",
      en: "A city at the confluence of the Ibar and West Morava rivers, historically linked to the coronation of Serbian kings."
    },
    descriptionAdvanced: {
        de: "",
        hu: "Kraljevo (A Király Városa) Közép-Szerbiában, az Ibar és a Nyugati-Morava folyók találkozásánál fekszik. A város neve arra utal, hogy a közeli Žiča kolostorban hét szerb királyt koronáztak meg a középkorban. A modern város központját egy hatalmas kör alakú tér uralja, ahonnan az utcák sugárirányban ágaznak szét. Bár a második világháborúban tragikus veszteségeket szenvedett, ma fontos ipari és közlekedési csomópont. Történelem K8 — modern várostervezés.",
        ro: "",
        en: "Kraljevo is an important city in central Serbia, located at the confluence of the Ibar and West Morava rivers. The city's name literally translates to 'King's Town,' granted in honor of the coronations of seven Serbian kings in the nearby Žiča Monastery. The city has a tragic modern history; in 1941, occupying forces executed thousands of its citizens in a single day. Today, Kraljevo is a bustling economic center known for its wide, grid-like streets and beautiful central square. History K8 — World War II memorials."
    },
    facts: {
      de: ["Stadt der Könige", "Zusammenfluss von Ibar und Morava", "Nahe Kloster Žiča"],
      hu: ["Királyok városa", "Az Ibar és Morava találkozása", "A Žiča kolostor közelében"],
      ro: ["Orașul regilor", "Confluența Ibarului cu Morava", "Lângă mănăstirea Žiča"],
      en: ["City of Kings", "Confluence of Ibar and Morava", "Near Žiča Monastery"]
    },
    factsAdvanced: {
        de: [],
        hu: ["Nevének jelentése: 'A Király Városa'", "Központjának különleges, sugárirányú utcaszerkezete van", "Az Ibar és a Nyugati-Morava összefolyásánál épült", "Hét szerb királyt koronáztak meg a közelben", "Súlyos polgári áldozatokat szenvedett a II. világháborúban"],
        ro: [],
        en: ["The city's name literally means 'King's Town' in Serbian.", "Located precisely at the confluence of the Ibar and West Morava rivers.", "Situated mere kilometers from the historically vital Žiča Monastery.", "Suffered a tragic mass execution of citizens during World War II.", "Features a highly recognizable circular central town square."]
    }
  },
  {
    id: "RS-009-zica",
    type: "historical",
    parent: "RS-009",
    coords: [20.6450, 43.6961],
    name: { de: "Kloster Žiča", hu: "Žiča kolostor", ro: "Mănăstirea Žiča", en: "Žiča Monastery" },
    description: {
      de: "Ein leuchtend rotes Kloster aus dem 13. Jahrhundert, in dem die ersten serbischen Könige gekrönt wurden.",
      hu: "Élénkvörös, 13. századi kolostor, ahol az első szerb királyokat koronázták.",
      ro: "O mănăstire de culoare roșu aprins din secolul al XIII-lea, unde au fost încoronați primii regi sârbi.",
      en: "A bright red 13th-century monastery where the first Serbian kings were crowned."
    },
    descriptionAdvanced: {
        de: "",
        hu: "A Žiča kolostor a középkori szerb állam egyik legszentebb helyszíne, amelyet a 13. század elején Nemanja István fia alapított. A kolostor egyedülálló, élénk vörösre festett homlokzatáról ismert, amely az athoszi hagyományokat követi. Ez a templom volt a független szerb ortodox egyház első székhelye és a szerb királyok koronázási temploma. A legenda szerint minden új király számára új bejáratot vágtak a falba. Művészet K8 — középkori szakrális építészet.",
        ro: "",
        en: "Žiča Monastery is an imposing monument dating back to the 13th century, historically serving as the site where the first kings of medieval Serbia were crowned. Its distinctively vibrant red exterior has become an enduring symbol of royal power and unwavering religious devotion. Throughout history, the monastery functioned as the primary administrative and spiritual center of the Serbian Orthodox Church, playing a crucial role in the consolidation of early Serbian statehood. History K8 — royal coronations and state history."
    },
    facts: {
      de: ["Krönungskirche", "Sitz des ersten Erzbischofs", "Einzigartige rote Farbe"],
      hu: ["Koronázótemplom", "Az első érsek székhelye", "Egyedülálló vörös szín"],
      ro: ["Biserica de încoronare", "Sediul primului arhiepiscop", "Culoare roșie unică"],
      en: ["Coronation church", "Seat of the first archbishop", "Unique red color"]
    },
    factsAdvanced: {
        de: [],
        hu: ["Jellegzetes, élénk vörös homlokzatú", "A szerb ortodox egyház első hivatalos székhelye", "Hét középkori szerb királyt koronáztak itt", "A 13. század elején épült", "Szent Száva (Sveti Sava) is itt szolgált"],
        ro: [],
        en: ["Historic site where the kings of medieval Serbia were formally crowned.", "Served as the original seat of the first Archbishop of Serbia.", "The distinctive red exterior specifically symbolizes enduring royal power.", "An essential monument for the understanding of Serbian statehood.", "Preserves highly valuable frescoes and a significant religious heritage."]
    }
  },
  // RS-010 Pomoravski
  {
    id: "RS-010-jagodina",
    type: "city",
    parent: "RS-010",
    coords: [21.2614, 43.9758],
    name: { de: "Jagodina", hu: "Jagodina", ro: "Jagodina", en: "Jagodina" },
    description: {
      de: "Eine Stadt im Herzen Zentralserbiens, bekannt für ihren großen Zoo und Wasserpark.",
      hu: "Közép-Szerbia szívében fekvő város, híres nagy állatkertjéről és aquaparkjáról.",
      ro: "Un oraș în inima Serbiei Centrale, cunoscut pentru grădina sa zoologică mare și parcul acvatic.",
      en: "A city in the heart of Central Serbia, known for its large zoo and water park."
    },
    descriptionAdvanced: {
        de: "",
        hu: "Jagodina egy dinamikusan fejlődő város a festői Pomoravlje régióban. A város a 20. században ipari központtá nőtte ki magát, az elmúlt évtizedekben pedig jelentős turisztikai beruházásokat hajtottak végre. Itt nyílt meg Szerbia első aquaparkja és egy népszerű viaszmúzeum is. Emellett a helyi Naiv és Margina Művészeti Múzeum nemzetközi hírű, amely bemutatja a régió gazdag önművelő festőinek alkotásait. Művészet K8 — naiv képzőművészet.",
        ro: "",
        en: "Jagodina is a dynamic city in central Serbia, located in the valley of the Belica River. It has rapidly transformed in recent decades from a traditional industrial town into a major regional tourist destination. The city is famous for its unique attractions, including a sprawling aqua park, a wax museum, and a well-maintained zoo. Despite its modern entertainment focus, Jagodina retains its historical roots, highlighted by its fascinating Museum of Naïve and Marginal Art, which celebrates self-taught regional artists. Arts K7 — naïve and folk art."
    },
    facts: {
      de: ["Wachsfigurenkabinett", "Großer Wasserpark", "Pomoravlje-Zentrum"],
      hu: ["Panoptikum", "Nagy aquapark", "Pomoravlje központja"],
      ro: ["Muzeul figurilor de ceară", "Parc acvatic mare", "Centrul Pomoravlje"],
      en: ["Wax museum", "Large water park", "Pomoravlje center"]
    },
    factsAdvanced: {
        de: [],
        hu: ["Szerbia első aquaparkjának otthona", "Nemzetközi hírű Naiv Művészeti Múzeummal büszkélkedhet", "Viaszmúzeum is működik a városban", "1946 és 1992 között 'Svetozarevo' volt a neve", "Jelentős közép-szerbiai kereskedelmi csomópont"],
        ro: [],
        en: ["Underwent rapid development to become a major tourist destination.", "Features popular attractions like a large aqua park and a wax museum.", "Home to the unique Museum of Naïve and Marginal Art.", "Located in the fertile and picturesque valley of the Belica River.", "Historically served as an important center on the route to Istanbul."]
    }
  },
  {
    id: "RS-010-manasija",
    type: "historical",
    parent: "RS-010",
    coords: [21.4689, 44.1011],
    name: { de: "Kloster Manasija", hu: "Manasija kolostor", ro: "Mănăstirea Manasija", en: "Manasija Monastery" },
    description: {
      de: "Eines der bedeutendsten Denkmäler der serbischen mittelalterlichen Kultur, umgeben von massiven Festungsmauern.",
      hu: "A szerb középkori kultúra egyik legjelentősebb emléke, hatalmas várfalakkal körülvéve.",
      ro: "Unul dintre cele mai importante monumente ale culturii medievale sârbe, înconjurat de ziduri masive de cetate.",
      en: "One of the most significant monuments of Serbian medieval culture, surrounded by massive fortress walls."
    },
    descriptionAdvanced: {
        de: "",
        hu: "A Manasija (vagy Resava) kolostor a 15. századi szerb építészet és festészet utolsó ragyogó fellángolásának emléke. Lazarevics István despota építtette, és a komplexumot egy lenyűgöző, 11 masszív toronnyal megerősített védőfal öleli körül az oszmán támadások ellen. A kolostor nemcsak vallási, hanem kulturális központ is volt: a híres 'resavai iskola' kéziratmásolói itt dolgoztak, megmentve az ortodox irodalmat. Történelem K7 — erődített kolostorok.",
        ro: "",
        en: "Manasija Monastery stands as one of the most significant cultural achievements of medieval Serbia, uniquely surrounded by massive fortified walls and eleven towers that give it the appearance of a robust fortress. Founded in the early 15th century, it served as the center of the Resava literary school, where numerous precious manuscripts were meticulously translated and copied to preserve knowledge. Its well-preserved frescoes are widely regarded among the most valuable examples of Orthodox mural painting from that tumultuous era. History K8 — fortified monasteries."
    },
    facts: {
      de: ["Gegründet von Stefan Lazarević", "Elf Verteidigungstürme", "Resava-Schule für Literatur"],
      hu: ["Stefan Lazarević alapította", "Tizenegy védőtorony", "Resava irodalmi iskola"],
      ro: ["Fondată de Stefan Lazarević", "Unsprezece turnuri de apărare", "Școala literară Resava"],
      en: ["Founded by Stefan Lazarević", "Eleven defense towers", "Resava school of literature"]
    },
    factsAdvanced: {
        de: [],
        hu: ["Masszív, 11 tornyú várfal veszi körül", "Lazarevics István despota alapította a 15. században", "A híres 'resavai másolóiskola' központja volt", "A szerb középkor utolsó nagy művészeti fellángolása", "Kiemelkedő minőségű freskókat őriz"],
        ro: [],
        en: ["Founded by the celebrated Despot Stefan Lazarević in 1407.", "Uniquely protected by 11 massive and imposing defensive towers.", "Served as the prestigious seat of the Resava literary school.", "Houses valuable frescoes renowned for their rare and striking beauty.", "Represents the pinnacle of the medieval 'Morava' architectural style."]
    }
  },
  // RS-011 Toplicki
  {
    id: "RS-011-prokuplje",
    type: "city",
    parent: "RS-011",
    coords: [21.5889, 43.2339],
    name: { de: "Prokuplje", hu: "Prokuplje", ro: "Prokuplje", en: "Prokuplje" },
    description: {
      de: "Das administrative Zentrum des Bezirks Toplica, benannt nach dem Heiligen Procopius.",
      hu: "A Toplica körzet közigazgatási központja, Szent Procopiusról nevezték el.",
      ro: "Centrul administrativ al districtului Toplica, numit după Sfântul Procopie.",
      en: "The administrative center of the Toplica district, named after Saint Procopius."
    },
    descriptionAdvanced: {
        de: "",
        hu: "Prokuplje Dél-Szerbiában, a Toplica folyó völgyében fekvő történelmi város. Neve Szent Prokopiuszra, a város védőszentjére utal, akinek ereklyéit a 14. században hozták ide. A település környéke évszázadok óta kiváló mezőgazdasági és bortermelő vidék. A várost domináló Hisar-dombon a középkori várfalak romjai emlékeztetnek azokra az időkre, amikor a város kulcsfontosságú védvonal volt a török előrenyomulás ellen. Történelem K7 — végvárrendszerek.",
        ro: "",
        en: "Prokuplje is the administrative center of the Toplica region in southern Serbia, steeped in a history that stretches back to prehistoric times. The town is dominated by the Hisar hill, upon which the ruins of a medieval fortress stand, overlooking the Toplica River, which unusually loops around the hill in an almost complete circle (epigenia). Historically, Prokuplje is celebrated as the home of the famed 'Iron Regiment,' one of the most decorated Serbian military units during the early 20th-century wars. History K8 — military heritage."
    },
    facts: {
      de: ["Hisar-Hügel", "Römische Thermen", "Weinregion"],
      hu: ["Hisar-domb", "Római fürdők", "Borvidék"],
      ro: ["Dealul Hisar", "Terme romane", "Regiune viticolă"],
      en: ["Hisar Hill", "Roman baths", "Wine region"]
    },
    factsAdvanced: {
        de: [],
        hu: ["A Toplica régió adminisztratív központja", "Szent Prokopiusz ereklyéit őrzik itt", "A Hisar-dombon ősi várromok találhatók", "Híres a minőségi szőlő- és bortermelésről", "Az első világháborúban erős partizán ellenállás központja volt"],
        ro: [],
        en: ["Serves as the administrative center of the Toplica region.", "Features a rare geographical phenomenon known as river epigenia.", "Home to the imposing ruins of the Hisar medieval fortress.", "Historically associated with the highly decorated 'Iron Regiment'.", "Surrounded by a region historically famous for its vineyards and fruit."]
    }
  },
  {
    id: "RS-011-djavolja-varos-site",
    type: "landmark",
    parent: "RS-011",
    coords: [21.4000, 42.9833],
    name: { de: "Đavolja Varoš", hu: "Ördögváros", ro: "Đavolja Varoš", en: "Devil's Town" },
    description: {
      de: "Ein seltenes Naturphänomen mit Hunderten von Erdpyramiden und zwei Quellen mit extrem saurem Wasser.",
      hu: "Ritka természeti jelenség több száz földpiramissal és két extrém savas vizű forrással.",
      ro: "Un fenomen natural rar cu sute de piramide de pământ și două izvoare cu apă extrem de acidă.",
      en: "A rare natural phenomenon with hundreds of earth pyramids and two springs of extremely acidic water."
    },
    descriptionAdvanced: {
        de: "",
        hu: "Az Ördög Városa (Đavolja Varoš) természeti emlékmű egyedülálló geomorfológiai ritkaság Európában. Az évszázados vízerózió formálta a 2-15 méter magas agyag- és homokoszlopokat, amelyeket vulkáni sziklatömbök védenek az eltűnéstől. A szürreális tájképet a szél hangja és a vöröses ásványi patakok teszik még titokzatosabbá. A területet 1959-ben nyilvánították védett természeti kinccsé. Földrajz K7 — felszínformáló erők.",
        ro: "",
        en: "Devil's Town (Đavolja Varoš) is a highly unusual and spectacular geological formation in southern Serbia, situated on the slopes of the Radan Mountains. Natural erosion has created over 200 tall, reddish earth pyramids (fairy chimneys), which intriguingly balance large stone blocks on their peaks. The mystical appearance of the formations is further enhanced by highly acidic, mineral-rich, reddish springs nearby. The site is surrounded by countless local legends and folklore, making it a premier ecotourism destination. Geography K7 — erosion and earth pyramids."
    },
    facts: {
      de: ["Erdpyramiden", "Säurequellen", "Mystische Formationen"],
      hu: ["Földpiramisok", "Savas források", "Misztikus képződmények"],
      ro: ["Piramide de pământ", "Izvoare acide", "Formațiuni mistice"],
      en: ["Earth pyramids", "Acid springs", "Mystical formations"]
    },
    factsAdvanced: {
        de: [],
        hu: ["Az erózió alkotta 'tündérkémények'", "A szél átsüvítve köztük furcsa hangokat ad", "A kősapkák védik meg az oszlopokat", "Két különálló szakadékban helyezkednek el", "1959 óta szigorúan védett terület"],
        ro: [],
        en: ["Features over 200 distinct, naturally formed tall earth pyramids.", "Created entirely by complex natural soil erosion processes.", "Large stone blocks precariously balance on the peaks of the pyramids.", "Characterized by highly acidic, mineral-rich reddish water springs.", "Surrounded by numerous fascinating local myths and folklore legends."]
    }
  },
  // RS-012 Zlatiborski
  {
    id: "RS-012-uzice",
    type: "city",
    parent: "RS-012",
    coords: [19.8425, 43.8586],
    name: { de: "Užice", hu: "Uzice", ro: "Užice", en: "Užice" },
    description: {
      de: "Eine historische Stadt im Westen Serbiens, berühmt für die Partisanenrepublik Užice im Zweiten Weltkrieg.",
      hu: "Történelmi város Nyugat-Szerbiában, híres a második világháborús Uzicei Partizánköztársaságról.",
      ro: "Un oraș istoric în vestul Serbiei, faimos pentru Republica Partizană Užice din al Doilea Război Mondial.",
      en: "A historical city in western Serbia, famous for the Užice Partisan Republic in WWII."
    },
    descriptionAdvanced: {
        de: "",
        hu: "Užice egy drámai fekvésű város Délnyugat-Szerbiában, amely a Đetinja folyó mély és szűk szurdokába épült. A település felett a középkori Stari Grad (Óvár) romjai magasodnak egy meredek sziklaszirten. 1941 őszén a város a 'Užicei Köztársaság' nevű, rövid életű partizán felszabadított terület központja volt Európában. A város brutalista és modern építészete éles kontrasztban áll a környező zöld hegyvidékkel. Történelem K8 — II. világháborús ellenállás.",
        ro: "",
        en: "Užice is a major city in western Serbia, dramatically situated in the deep, narrow gorge of the Đetinja River. In 1941, it briefly became the center of the 'Republic of Užice,' the first liberated territory in Nazi-occupied Europe. The city's architecture is a fascinating mix of ancient fortresses, brutalist Yugoslav concrete structures, and modern developments. Užice is also famous for its historic hydroelectric power plant, built in 1900 based on the visionary principles of Nikola Tesla. History K8 — World War II resistance."
    },
    facts: {
      de: ["Alte Burg Užice", "Erstes Wasserkraftwerk (Tesla-Prinzip)", "Tor zu Zlatibor"],
      hu: ["Régi uzicei vár", "Első vízerőmű (Tesla-elv)", "Zlatibor kapuja"],
      ro: ["Cetatea veche Užice", "Prima hidrocentrală (principiul Tesla)", "Poarta către Zlatibor"],
      en: ["Old Užice Fortress", "First hydroelectric plant (Tesla principle)", "Gateway to Zlatibor"]
    },
    factsAdvanced: {
        de: [],
        hu: ["A Đetinja folyó drámai szurdokába épült", "1941-ben az első felszabadított partizán terület központja", "Meredek sziklán áll a középkori Óvár romja", "Híres a hagyományos 'komplet lepinja' ételéről", "Az egyik első európai vízerőmű is itt épült (Tesla elvei alapján)"],
        ro: [],
        en: ["Dramatically located within the deep gorge of the Đetinja River.", "Briefly functioned as the center of the liberated 'Republic of Užice' in 1941.", "Home to an early hydroelectric plant built on Tesla's principles in 1900.", "Features the prominent ruins of the medieval Stari Grad fortress.", "Known for a striking mix of brutalist and traditional architecture."]
    }
  },
    // RS-013 Sremski
  {
    id: "RS-013-sremska-mitrovica",
    type: "city",
    parent: "RS-013",
    coords: [19.6122, 44.9764],
    name: { de: "Sremska Mitrovica", hu: "Szávaszentdemeter", ro: "Sremska Mitrovica", en: "Sremska Mitrovica" },
    description: {
      de: "Eine der ältesten Städte Serbiens, die auf den Ruinen der antiken römischen Hauptstadt Sirmium erbaut wurde.",
      hu: "Szerbia egyik legrégebbi városa, amely az ókori római főváros, Sirmium romjaira épült.",
      ro: "Unul dintre cele mai vechi orașe din Serbia, construit pe ruinele fostei capitale romane Sirmium.",
      en: "One of the oldest cities in Serbia, built on the ruins of the ancient Roman capital Sirmium."
    },
    descriptionAdvanced: {
        de: "",
        hu: "Sremska Mitrovica (Szávaszentdemeter) a Szerémség központja a Száva folyó partján, de igazi jelentőségét az ókori történelme adja. Itt állt Sirmium, a Római Birodalom egyik legfontosabb városa és a tetrarchia idején az egyik fővárosa. Ma a modern utcák alatt császári paloták, fürdők és hippodromok maradványai rejtőznek. A római történelem mellett a város fontos kereskedelmi kikötőként is szolgált a monarchia idején. Történelem K6 — a Római Birodalom fővárosai.",
        ro: "",
        en: "Sremska Mitrovica is a city with an extraordinary ancient pedigree, located on the banks of the Sava River in the Syrmia region. During the Roman Empire, it was known as Sirmium, serving as one of the four capital cities of the Tetrarchy and the birthplace of several Roman emperors. Today, visitors can literally walk above extensive, well-preserved Roman ruins, including an imperial palace and a hippodrome, which are integrated into the modern city's layout. History K6 — Late Roman capitals."
    },
    facts: {
      de: ["Antikes Sirmium", "Kaiserpalast", "An der Save"],
      hu: ["Ókori Sirmium", "Császári palota", "A Száva partján"],
      ro: ["Vechiul Sirmium", "Palatul Imperial", "Pe râul Sava"],
      en: ["Ancient Sirmium", "Imperial Palace", "On the Sava river"]
    },
    factsAdvanced: {
        de: [],
        hu: ["Az ókori Sirmium, római főváros helyén épült", "Több római császár született a közelben", "A Száva folyó fontos kikötővárosa", "Látványos római császári palota romjait tárták fel", "A Szerémség (Srem) közigazgatási központja"],
        ro: [],
        en: ["Historically known as Sirmium, a capital of the Late Roman Empire.", "The birthplace of numerous influential Roman emperors.", "Features extensive, excavated Roman ruins integrated into the city.", "Located strategically along the banks of the Sava River.", "Serves as the administrative center of the Syrmia (Srem) district."]
    }
  },
  {
    id: "RS-013-krusedol",
    type: "historical",
    parent: "RS-013",
    coords: [19.9400, 45.1200],
    name: { de: "Kloster Krušedol", hu: "Krušedol kolostor", ro: "Mănăstirea Krušedol", en: "Krušedol Monastery" },
    description: {
      de: "Eines der bedeutendsten Klöster der Fruška Gora, gegründet im 16. Jahrhundert.",
      hu: "A Tarcal-hegység egyik legjelentősebb kolostora, amelyet a 16. században alapítottak.",
      ro: "Una dintre cele mai importante mănăstiri din Fruška Gora, fondată în secolul al XVI-lea.",
      en: "One of the most significant monasteries of Fruška Gora, founded in the 16th century."
    },
    descriptionAdvanced: {
        de: "",
        hu: "A Krušedol kolostor a Fruška Gora (Tarcal-hegység) legfontosabb és leghíresebb ortodox kolostora. A 16. század elején alapította a Brankovics család, a szerb despoták utolsó generációja. A kolostor élénkpirosra festett kaputornyáról és gyönyörű, barokk elemeket is tartalmazó freskóiról ismert. Történelmi jelentőségét fokozza, hogy számos szerb egyházi méltóság és történelmi személyiség, köztük Obrenovics Mihály király mauzóleuma. Történelem K8 — egyházi központok a hódoltság után.",
        ro: "",
        en: "Krušedol Monastery is one of the most significant and spiritually revered monasteries located within the Fruška Gora National Park. Founded in the early 16th century by the Branković family, the last titular despots of Serbia, it became a vital sanctuary for Serbian culture during the long Ottoman occupation. The monastery's church houses the remains of numerous prominent historical figures, including patriarchs, dukes, and kings, making it a true national mausoleum. Arts K8 — post-Byzantine monastic art."
    },
    facts: {
      de: ["Mausoleum serbischer Könige", "Barockarchitektur", "Fruška Gora Region"],
      hu: ["Szerb királyok mauzóleuma", "Barokk építészet", "Tarcal-hegység vidéke"],
      ro: ["Mausoleul regilor sârbi", "Arhitectură barocă", "Regiunea Fruška Gora"],
      en: ["Mausoleum of Serbian kings", "Baroque architecture", "Fruška Gora region"]
    },
    factsAdvanced: {
        de: [],
        hu: ["A Fruška Gora legjelentősebb ortodox kolostora", "Több szerb uralkodó és pátriárka nyughelye", "A Brankovics despota-család alapította", "Gazdag 18. századi barokk freskókkal rendelkezik", "A szerb nemzeti ellenállás szellemi központja volt"],
        ro: [],
        en: ["Founded in the early 16th century by the noble Branković family.", "Considered the most prominent monastery of the Fruška Gora region.", "Functions as a national mausoleum for numerous historical figures.", "Played a crucial role in preserving culture during the Ottoman era.", "Features highly valuable and complex post-Byzantine frescoes."]
    }
  },
  // RS-014 Macvanski
  {
    id: "RS-014-sabac",
    type: "city",
    parent: "RS-014",
    coords: [19.6900, 44.7500],
    name: { de: "Šabac", hu: "Szabács", ro: "Šabac", en: "Šabac" },
    description: {
      de: "Eine Stadt an der Save, bekannt für ihre Marktkultur, Geschichte und das Šabac-Festival.",
      hu: "Város a Száva partján, amely vásári kultúrájáról, történelméről és a Szabácsi fesztiválról ismert.",
      ro: "Un oraș pe râul Sava, cunoscut pentru cultura piețelor sale, istorie și festivalul Šabac.",
      en: "A city on the Sava river, known for its market culture, history, and the Šabac festival."
    },
    descriptionAdvanced: {
        de: "",
        hu: "Šabac (Szabács) a Száva folyó partján fekvő történelmi város a Mačva régióban. A 19. században Szerbia egyik legfejlettebb, 'kisebb Párizsnak' is hívott városa volt, amely élen járt az európai kultúra átvételében: itt nyílt meg az ország egyik első gyógyszertára és újságja. A város a szerb kultúra és a kereskedelem fontos kapuja volt az Osztrák-Magyar Monarchia felé. Ma modern ipari és mezőgazdasági központ. Történelem K8 — városi polgárosodás a Balkánon.",
        ro: "",
        en: "Šabac is a lively city situated on the right bank of the Sava River, often described historically as the 'First City of Serbia' due to its early adoption of European urban planning and culture in the 19th century. Following its liberation from the Ottomans, Šabac was the first Serbian town to feature glazed windows, pianos, and European-style kafanas. Today, it remains a vibrant center of trade and culture in the Mačva region, famous for its annual autumn fair and deeply rooted bohemian spirit. History K8 — 19th-century modernization."
    },
    facts: {
      de: ["Festung Šabac", "Handelszentrum", "An der Save"],
      hu: ["Szabácsi vár", "Kereskedelmi központ", "A Száva partján"],
      ro: ["Cetatea Šabac", "Centru comercial", "Pe râul Sava"],
      en: ["Šabac Fortress", "Trade center", "On the Sava river"]
    },
    factsAdvanced: {
        de: [],
        hu: ["A Száva folyó mentén a Mačva régió központja", "A 19. században 'Szerbia Párizsának' nevezték", "Az osztrák-magyar és a szerb kultúra találkozási pontja volt", "Híres a szeptemberi Šabac-i vásárról", "Az első világháborúban heves harcok színtere (Ceri csata) volt"],
        ro: [],
        en: ["Historically celebrated as a pioneer of European culture in Serbia.", "Located strategically on the right bank of the Sava River.", "The administrative and cultural center of the Mačva region.", "Famous nationwide for its massive traditional autumn fair.", "Suffered immense demographic losses during the First World War."]
    }
  },
  {
    id: "RS-014-tronosa",
    type: "historical",
    parent: "RS-014",
    coords: [19.2800, 44.4600],
    name: { de: "Kloster Tronoša", hu: "Tronoša kolostor", ro: "Mănăstirea Tronoša", en: "Tronoša Monastery" },
    description: {
      de: "Ein historisches Kloster in der Nähe von Loznica, eng verbunden mit der Erhaltung der serbischen Literatur.",
      hu: "Történelmi kolostor Loznica közelében, szorosan kötődik a szerb irodalom megőrzéséhez.",
      ro: "O mănăstire istorică lângă Loznica, strâns legată de conservarea literaturii sârbe.",
      en: "A historical monastery near Loznica, closely linked to the preservation of Serbian literature."
    },
    descriptionAdvanced: {
        de: "",
        hu: "A Tronoša kolostor Nyugat-Szerbiában, egy csendes erdős völgyben fekszik Loznica közelében. A 14. században alapított kolostor a szerb nép nyelvi és kulturális fennmaradásának egyik legfontosabb helyszíne volt. Itt tanult fiatal korában Vuk Stefanović Karadžić, a modern szerb ábécé és nyelvújítás megalkotója. A kolostor előtt található a kilenc csövön csorgó forrás, amelyet a rigómezei csata hősei emlékére emeltek. Irodalom K8 — nyelvújítás és írásbeliség.",
        ro: "",
        en: "Tronoša Monastery is a serene and historically vital sanctuary nestled deep within the forests near the Drina River in western Serbia. According to tradition, it was founded by King Dragutin in the 13th century. The monastery played a fundamental role in Serbian education and literacy; it was here that Vuk Stefanović Karadžić, the great reformer of the Serbian language, received his early education. The site is also famous for the 'Farmer's Cross' ritual, deeply embedded in local folklore. History K8 — linguistic reformation."
    },
    facts: {
      de: ["Zentrum der Alphabetisierung", "Vuk Karadžić Schule", "Orthodoxe Tradition"],
      hu: ["Az írástudás központja", "Vuk Karadžić iskolája", "Ortodox hagyomány"],
      ro: ["Centru de alfabetizare", "Școala lui Vuk Karadžić", "Tradiție ortodoxă"],
      en: ["Center of literacy", "Vuk Karadžić's school", "Orthodox tradition"]
    },
    factsAdvanced: {
        de: [],
        hu: ["Vuk Karadžić nyelvújító korai iskolája volt", "A 14. század elején, a Nemanjić dinasztia idején alapították", "Itt található a Kilenc Jugovics fivér emlékkútja", "Az első világháborúban az osztrák-magyar sereg nagyrészt elpusztította", "A szerb írásbeliség fontos központja volt a török időkben"],
        ro: [],
        en: ["Traditionally believed to be founded by King Dragutin in the 13th century.", "The site of Vuk Stefanović Karadžić's early childhood education.", "Located in a tranquil, densely forested area near the Drina River.", "Famous for the unique local 'Farmer's Cross' religious ritual.", "Played a crucial historical role in early regional literacy efforts."]
    }
  },
  // RS-015 Južno-Backi
      // RS-016 Srednje-Banatski
    {
    id: "RS-016-carska-bara",
    type: "landmark",
    parent: "RS-016",
    coords: [20.3800, 45.2500],
    name: { de: "Carska Bara", hu: "Császár-tó", ro: "Carska Bara", en: "Carska Bara" },
    description: {
      de: "Ein bedeutendes Vogelschutzgebiet und Naturschutzgebiet im Banat.",
      hu: "Jelentős madárrezervátum és természetvédelmi terület a Bánátban.",
      ro: "O importantă rezervație de păsări și arie naturală protejată din Banat.",
      en: "A significant bird sanctuary and nature reserve in the Banat region."
    },
    descriptionAdvanced: {
        de: "",
        hu: "A Carska Bara (Császári-tó) a Vajdaság legnagyobb és legfontosabb mocsár- és lápvidéke, amely a Béga és a Tisza folyók közelében terül el. A terület nevét onnan kapta, hogy az Osztrák-Magyar Monarchia idején a királyi család tagjai, köztük Rudolf trónörökös és Ferenc Ferdinánd is vadásztak itt. Ma szigorúan védett természetvédelmi terület, amely több mint 250 madárfajnak, köztük gémeknek, kócsagoknak és kormoránoknak nyújt menedéket. Biológia K7 — ártéri ökoszisztémák.",
        ro: "",
        en: "Carska Bara (Imperial Pond) is an extraordinary nature reserve located in Vojvodina, near the city of Zrenjanin. This vast wetland complex of meandering rivers, marshes, and dense reed beds serves as one of the most important bird sanctuaries in Europe. The reserve provides a critical habitat for hundreds of bird species, including herons, pelicans, and the rare white-tailed eagle. Boat safaris through the marshes offer an unparalleled opportunity for ecological observation and photography. Biology K7 — wetland ecosystems."
    },
    facts: {
      de: ["Sumpflandschaft", "Seltene Vögel", "Naturschutzgebiet"],
      hu: ["Mocsaras vidék", "Ritka madarak", "Természetvédelmi terület"],
      ro: ["Peisaj mlăștinos", "Păsări rare", "Rezervație naturală"],
      en: ["Marshland", "Rare birds", "Nature reserve"]
    },
    factsAdvanced: {
        de: [],
        hu: ["A Vajdaság legnagyobb láp- és mocsárvidéke", "Nevét a Habsburg uralkodók vadászatairól kapta", "Több mint 250 madárfaj él a területen", "Szigorúan védett természeti rezervátum", "Gazdag hal- és kétéltű populációval rendelkezik"],
        ro: [],
        en: ["Recognized as one of the most significant wetland reserves in Europe.", "Provides critical habitat for over 250 distinct bird species.", "Located in the Banat region, just south of the city of Zrenjanin.", "Features a complex system of meandering rivers and dense reed beds.", "Offers popular eco-tourism boat safaris for birdwatching."]
    }
  },
  // RS-017 Južno-Banatski
  {
    id: "RS-017-pancevo",
    type: "city",
    parent: "RS-017",
    coords: [20.6400, 44.8708],
    name: { de: "Pančevo", hu: "Pancsova", ro: "Panciova", en: "Pančevo" },
    description: {
      de: "Eine Industriestadt am Zusammenfluss von Temesch und Donau, nahe bei Belgrad.",
      hu: "Ipari város a Temes és a Duna összefolyásánál, Belgrád közelében.",
      ro: "Un oraș industrial la confluența râului Timiș cu Dunărea, aproape de Belgrad.",
      en: "An industrial city at the confluence of the Tamiš and Danube rivers, near Belgrade."
    },
    descriptionAdvanced: {
        de: "",
        hu: "Pančevo (Pancsova) a Temes folyó torkolatánál, a Dunába ömlésnél fekvő nyüzsgő ipari és kereskedelmi város, mindössze 15 kilométerre Belgrádtól. Évszázadokon át fontos határvédő és kereskedelmi csomópont volt a Habsburg Birodalom déli végvidékén, amiről a gyönyörű óváros eklektikus, neoklasszicista épületei tanúskodnak. Bár a 20. században hatalmas kőolaj-finomítóiról és iparáról vált ismertté, a város kulturális élete ma is pezsgő. Gazdaság K8 — ipari zónák és agglomerációk.",
        ro: "",
        en: "Pančevo is a major industrial and historical city located at the confluence of the Tamiš and Danube rivers, effectively serving as a close suburb of Belgrade. The city is defined by a striking contrast: it possesses a highly developed, heavy petrochemical industrial zone alongside a remarkably well-preserved historic center featuring 18th and 19th-century Austro-Hungarian architecture. Pančevo also boasts a vibrant contemporary arts scene and a long-standing tradition of brewing, being home to one of the oldest breweries in the Balkans. Geography K8 — industrial vs historic urbanism."
    },
    facts: {
      de: ["Historische Leuchttürme", "Bedeutende Industrie", "Temesch-Ufer"],
      hu: ["Történelmi világítótornyok", "Jelentős ipar", "Temes-part"],
      ro: ["Faruri istorice", "Industrie importantă", "Malul râului Timiș"],
      en: ["Historical lighthouses", "Significant industry", "Tamiš riverbank"]
    },
    factsAdvanced: {
        de: [],
        hu: ["A Temes folyó torkolatánál fekszik", "Belgrád egyik legfontosabb ipari agglomerációja", "Történelmi határváros volt a Habsburg déli végvidéken", "Jelentős neoklasszicista építészeti örökséggel bír", "Szerbia legnagyobb kőolaj-finomítójának ad otthont"],
        ro: [],
        en: ["Located at the strategic confluence of the Tamiš and Danube rivers.", "Features a prominent and massive petrochemical industrial zone.", "Boasts a beautifully preserved Austro-Hungarian historic center.", "Home to the oldest continuously operating brewery in the Balkans.", "Functions geographically as a major satellite city of Belgrade."]
    }
  },
  {
    id: "RS-017-vrsac",
    type: "city",
    parent: "RS-017",
    coords: [21.3036, 45.1167],
    name: { de: "Vršac", hu: "Versec", ro: "Vârșeț", en: "Vršac" },
    description: {
      de: "Eine charmante Stadt am Fuße der Vršac-Berge, berühmt für ihren Weinbau.",
      hu: "Bájos város a Verseci-hegység lábánál, híres borászatáról.",
      ro: "Un oraș fermecător la poalele munților Vârșeț, faimos pentru viticultură.",
      en: "A charming city at the foot of the Vršac Mountains, famous for its viticulture."
    },
    descriptionAdvanced: {
        de: "",
        hu: "Vršac (Versec) egy festői szépségű, szőlőskertekkel körülvett város a román határ mellett, a Vajdaságban. A település fölé magasodó Versec-hegy és a középkori Versec tornya (Vršačka kula) uralja a síkvidéki tájat. A város építészete a 18. és 19. századi gazdag kereskedővárosok eleganciáját tükrözi, lenyűgöző püspöki palotával és barokk épületekkel. A régió Szerbia egyik legelismertebb borvidéke, különösen híres fehérborairól. Földrajz K7 — történelmi borvidékek és síkvidéki magaslatok.",
        ro: "",
        en: "Vršac is a picturesque city situated near the Romanian border, nestled perfectly at the foothills of the Vršac Mountains. The city is one of the most celebrated wine-producing centers in the region, a tradition that dates back to Roman times. The city's skyline is dominated by the Vršac Tower, a 15th-century fortification resting on the hill above. With its grand Orthodox and Catholic cathedrals, Vršac exhibits a deeply multi-confessional history and a refined Central European architectural elegance. Geography K7 — viticulture and border cities."
    },
    facts: {
      de: ["Vršac-Turm", "Bischofspalast", "Große Weingüter"],
      hu: ["Verseci torony", "Püspöki palota", "Hatalmas borászatok"],
      ro: ["Turnul Vârșeț", "Palatul Episcopal", "Podgorii mari"],
      en: ["Vršac Tower", "Bishop's Palace", "Large wineries"]
    },
    factsAdvanced: {
        de: [],
        hu: ["Szerbia egyik leghíresebb borvidéke", "A Versec tornya (15. század) a város jelképe", "Itt fúj a híres és erős Kosava szél", "Jovan Sterija Popović híres szerb drámaíró szülővárosa", "Kiemelkedő barokk és szecessziós építészete van"],
        ro: [],
        en: ["Nationally renowned as a premier wine-producing and viticulture center.", "Dominated by the historic 15th-century Vršac Tower on the hill.", "Located immediately adjacent to the modern border with Romania.", "Features a rich mix of both Orthodox and Catholic architectural heritage.", "Surrounded by the unique, rolling landscape of the Vršac Mountains."]
    }
  },
  // RS-018 Branicevski
  {
    id: "RS-018-pozarevac",
    type: "city",
    parent: "RS-018",
    coords: [21.1858, 44.6214],
    name: { de: "Požarevac", hu: "Pozsarevác", ro: "Požarevac", en: "Požarevac" },
    description: {
      de: "Eine Stadt mit reicher Geschichte, bekannt als Ort wichtiger Friedensverträge.",
      hu: "Gazdag történelmű város, fontos békeszerződések helyszíneként ismert.",
      ro: "Un oraș cu o istorie bogată, cunoscut ca locul unor importante tratate de pace.",
      en: "A city with a rich history, known as the site of important peace treaties."
    },
    descriptionAdvanced: {
        de: "",
        hu: "Požarevac történelmi jelentőségű város Kelet-Szerbiában, a Morava és a Mlava folyók közelében. Leginkább arról az 1718-as pozsareváci békéről (Passarowitzi béke) ismert a történelemben, amely lezárta az oszmán-Habsburg háborút, és átrajzolta a Balkán térképét. A modern város ipari és mezőgazdasági központ, amelynek közelében található a híres Ljubičevo ménes is, Szerbia egyik legrégebbi és legtekintélyesebb lótenyésztő központja. Történelem K8 — a 18. század nagy békeszerződései.",
        ro: "",
        en: "Požarevac is an important administrative and cultural center in eastern Serbia, situated in the fertile plains between the Danube, Great Morava, and Mlava rivers. The city gained historical prominence in the 18th century as the second capital of Prince Miloš Obrenović, and it was the site of the famous Treaty of Passarowitz in 1718, which reshaped the borders of Europe. Today, the city is also known for its equestrian traditions, particularly the renowned Ljubičevo stable founded by the royal family. History K7 — 18th-century treaties."
    },
    facts: {
      de: ["Friede von Passarowitz", "Ljubičevo-Pferdespiele", "Etno-Park Tulba"],
      hu: ["Pozsareváci béke", "Ljubičevói lovasjátékok", "Tulba etnopark"],
      ro: ["Pacea de la Passarowitz", "Jocurile de cai Ljubičevo", "Etno-parcul Tulba"],
      en: ["Peace of Passarowitz", "Ljubičevo Horse Games", "Tulba ethno-park"]
    },
    factsAdvanced: {
        de: [],
        hu: ["Az 1718-as pozsareváci békeszerződés helyszíne", "Itt működik a történelmi Ljubičevo ménes", "Slobodan Milošević volt elnök szülővárosa és nyughelye", "Gazdag mezőgazdasági (Stig) régió központja", "A közeli Viminacium római romváros turisztikai bázisa"],
        ro: [],
        en: ["Site of the historically significant Treaty of Passarowitz in 1718.", "Historically served as a secondary capital for Prince Miloš Obrenović.", "Home to the prestigious Ljubičevo equestrian stable, founded in 1853.", "Located in a highly fertile region bounded by three major rivers.", "The administrative and economic center of the Braničevo District."]
    }
  },
  {
    id: "RS-018-viminacium",
    type: "historical",
    parent: "RS-018",
    coords: [21.1700, 44.7300],
    name: { de: "Viminacium", hu: "Viminacium", ro: "Viminacium", en: "Viminacium" },
    description: {
      de: "Eine bedeutende römische Stadt und Militärlager, die Hauptstadt der Provinz Moesia Superior.",
      hu: "Jelentős római város és katonai tábor, Moesia Superior tartomány fővárosa.",
      ro: "Un oraș roman important și tabără militară, capitala provinciei Moesia Superior.",
      en: "An important Roman city and military camp, the capital of the province Moesia Superior."
    },
    descriptionAdvanced: {
        de: "",
        hu: "Viminacium a Római Birodalom egyik legjelentősebb katonai tábora és Moesia Superior provincia fővárosa volt, amely a Duna partján, a mai Požarevac közelében terült el. A kiterjedt régészeti lelőhelyen feltárták az egykori légiós tábort, amfiteátrumot, nyilvános fürdőket és lenyűgöző falfestményekkel díszített mauzóleumokat. A helyszín különlegessége, hogy a római romok mellett egy ötmillió éves mamut ('Vika') épségben maradt csontvázát is bemutatják. Történelem K6 — római limes és katonai táborok.",
        ro: "",
        en: "Viminacium is a sprawling archaeological park located near Požarevac, uncovering the remains of what was once the provincial capital of the Roman province of Moesia Superior. In its prime, the city was a massive military and civilian center, complete with an amphitheater, luxurious thermal baths, and vast necropolises. The site is globally unique because it was never built over by modern settlements, allowing archaeologists to unearth incredibly well-preserved frescoes, mausoleums, and even the complete skeleton of a prehistoric mammoth found nearby. History K6 — Roman provincial capitals."
    },
    facts: {
      de: ["Archäologischer Park", "Römische Gräber", "Mammut-Skelette gefunden"],
      hu: ["Régészeti park", "Római sírok", "Mammutcsontvázak lelethelye"],
      ro: ["Parc arheologic", "Morminte romane", "Schelete de mamut găsite"],
      en: ["Archaeological park", "Roman tombs", "Mammoth skeletons found"]
    },
    factsAdvanced: {
        de: [],
        hu: ["Moesia Superior római provincia fővárosa volt", "Több mint 40.000 lakosa volt a 4. században", "Kivételes állapotú római freskókat és sírokat tártak fel", "Egy 5 millió éves mamutcsontváz is megtekinthető itt", "Fontos dunai (limes) katonai táborhely volt"],
        ro: [],
        en: ["Historically served as the capital of the Roman province Moesia Superior.", "Was a major military camp capable of housing entire Roman legions.", "Uniquely preserved because no modern city was ever built on top of it.", "Features spectacular underground Roman mausoleums and frescoes.", "A complete prehistoric mammoth skeleton was excavated at the site."]
    }
  },
  // RS-019 Grad Beograd
      // RS-020 Podunavski
  {
    id: "RS-020-smederevo-city",
    type: "city",
    parent: "RS-020",
    coords: [20.9300, 44.6628],
    name: { de: "Smederevo", hu: "Szendrő", ro: "Smederevo", en: "Smederevo" },
    description: {
      de: "Eine historische Stadt an der Donau, ehemalige Hauptstadt Serbiens im Mittelalter.",
      hu: "Történelmi város a Duna mentén, Szerbia egykori fővárosa a középkorban.",
      ro: "Un oraș istoric pe Dunăre, fostă capitală a Serbiei în Evul Mediu.",
      en: "A historical city on the Danube, former capital of Serbia in the Middle Ages."
    },
    descriptionAdvanced: {
        de: "",
        hu: "Smederevo (Szendrő) a Duna partján fekvő modern ipari és kikötőváros, amely dicső történelmi múlttal rendelkezik. A 15. században, Belgrád eleste után rövid ideig a szerb állam fővárosa és utolsó védőbástyája volt. A hatalmas Szendrői vár árnyékában felnőtt modern település a 20. században hatalmas acélművéről vált ismertté, amely ma is a szerb gazdaság egyik pillére. A környék kiváló, napsütötte dombjai jelentős bortermelő vidéket alkotnak. Gazdaság K8 — nehézipar és acélgyártás.",
        ro: "",
        en: "Smederevo is a vibrant industrial and agricultural city on the banks of the Danube, best known for the colossal medieval fortress that defines its waterfront. In the 15th century, it was briefly the capital of Serbia and one of the wealthiest cities in the region. Today, Smederevo is a major center for metallurgy and heavy industry, yet it also boasts a rich tradition of viticulture. The city celebrates its heritage annually with the 'Smederevo Autumn' festival, a massive event dedicated to grapes and wine. Geography K7 — river commerce and industry."
    },
    facts: {
      de: ["An der Donau", "Obstbaugebiet", "Großer Industriestandort"],
      hu: ["A Duna mentén", "Gyümölcstermesztő vidék", "Jelentős ipari központ"],
      ro: ["Pe malul Dunării", "Zonă pomicolă", "Centru industrial major"],
      en: ["On the Danube", "Fruit growing area", "Major industrial site"]
    },
    factsAdvanced: {
        de: [],
        hu: ["A 15. században a szerb despoták fővárosa volt", "Itt áll Európa egyik legnagyobb síkvidéki erődje", "Szerbia legjelentősebb acélipari központja", "Kiemelkedő bortermelő régió", "A Duna egyik legfontosabb szerbiai teherkikötője"],
        ro: [],
        en: ["Dominated by one of the largest medieval lowland fortresses in Europe.", "Served as the final capital of medieval Serbia in the 15th century.", "Functions as a major modern center for metallurgy and heavy industry.", "Surrounded by a region historically famous for its vineyards.", "Hosts the massive annual 'Smederevo Autumn' wine and grape festival."]
    }
  },
    // RS-021 Nišavski
      // RS-022 Pomoravski (Rasinski/South area) -> Kruševac
  {
    id: "RS-022-krusevac",
    type: "city",
    parent: "RS-022",
    coords: [21.3339, 43.5800],
    name: { de: "Kruševac", hu: "Kruševac", ro: "Kruševac", en: "Kruševac" },
    description: {
      de: "Die mittelalterliche Hauptstadt Serbiens zur Zeit des Fürsten Lazar.",
      hu: "Szerbia középkori fővárosa Lázár fejedelem idején.",
      ro: "Capitala medievală a Serbiei în timpul prințului Lazar.",
      en: "The medieval capital of Serbia during the time of Prince Lazar."
    },
    descriptionAdvanced: {
        de: "",
        hu: "Kruševac a Nyugati-Morava völgyének gazdasági és kulturális központja, amely a szerb nemzeti identitás szempontjából kiemelkedő fontosságú. A 14. században Lázár cár (Knez Lazar) innen indult seregével a végzetes rigómezei (koszovói) csatába az oszmánok ellen 1389-ben. Az akkori pompás várkastélyból ma már csak Lázár gyönyörű, moravai stílusú udvari temploma, a Lazarica és néhány falmaradvány áll. Ma a város erős ipari és vegyipari bázis. Történelem K7 — a szerb középkor alkonya.",
        ro: "",
        en: "Kruševac is a historically deeply resonant city in central Serbia, founded in 1371 by Prince Lazar to serve as his fortified capital. It was from this very city that the Serbian army marched to the tragic and legendary Battle of Kosovo in 1389. The remains of Lazar's town, including the exquisite Lazarica Church, stand as poignant reminders of medieval Serbian glory. Today, Kruševac is a modern industrial hub, yet it remains profoundly connected to its medieval identity and epic poetry. History K7 — the Battle of Kosovo."
    },
    facts: {
      de: ["Lazar-Stadt (Lazarevac)", "Lazarica-Kirche", "Kosovo-Epos Verbindung"],
      hu: ["Lázár városa (Lazarevac)", "Lazarica-templom", "Kapcsolat a rigómezei éposszal"],
      ro: ["Orașul lui Lazar", "Biserica Lazarica", "Legătura cu epopeea Kosovo"],
      en: ["Lazar's City", "Lazarica Church", "Link to the Kosovo epic"]
    },
    factsAdvanced: {
        de: [],
        hu: ["Lázár cár innen indult a rigómezei csatába (1389)", "Központjában áll a gyönyörű Lazarica templom", "A középkori Szerbia utolsó dicsőséges fővárosa", "A modern vegyipar és gépipar központja", "A Koszovói Csata Hőseinek emlékműve a város szimbóluma"],
        ro: [],
        en: ["Founded by Prince Lazar in 1371 to serve as the Serbian capital.", "The starting point for the army marching to the Battle of Kosovo in 1389.", "Home to the beautifully preserved medieval Lazarica Church.", "Features the Monument to the Kosovo Heroes in the central square.", "Currently serves as the administrative center of the Rasina District."]
    }
  },
  {
    id: "RS-022-ljubostinja",
    type: "historical",
    parent: "RS-022",
    coords: [21.0333, 43.6500],
    name: { de: "Kloster Ljubostinja", hu: "Ljubostinja kolostor", ro: "Mănăstirea Ljubostinja", en: "Ljubostinja Monastery" },
    description: {
      de: "Ein serbisch-orthodoxes Frauenkloster, ein Meisterwerk der Morava-Schule.",
      hu: "Szerb ortodox női kolostor, a Morava-stílusú építészet remekműve.",
      ro: "O mănăstire ortodoxă sârbă de maici, o capodoperă a școlii de arhitectură Morava.",
      en: "A Serbian Orthodox nunnery, a masterpiece of the Morava school of architecture."
    },
    descriptionAdvanced: {
        de: "",
        hu: "A Ljubostinja kolostor a középkori szerb építészet egyik gyöngyszeme, amely Kruševac közelében található. A hagyomány szerint Lázár cár felesége, Milica hercegné alapította 1388-ban, és a rigómezei csata tragédiája után ide vonult vissza az elesett nemesek özvegyeivel, hogy apácaként éljék le életüket. Az elegáns, kőből faragott rozettákkal díszített templom a moravai stílus lenyűgöző példája, amely békét és melankóliát sugároz. Építészet K8 — moravai stílus és női mecénások.",
        ro: "",
        en: "Ljubostinja Monastery is a serene and architecturally stunning sanctuary founded by Princess Milica in 1388, just before the fateful Battle of Kosovo. Constructed in the intricate Morava architectural style, it features elaborately carved stone rosettes and graceful facades. The monastery served as a refuge for widows of the fallen nobility after the battle, including Princess Milica herself, who took monastic vows here. It remains a deeply emotional symbol of female resilience and medieval piety. Arts K8 — Morava architectural style."
    },
    facts: {
      de: ["Gegründet von Fürstin Milica", "Reich verzierte Fenster", "Malerische Lage"],
      hu: ["Milica fejedelemasszony alapította", "Gazdagon díszített ablakok", "Festői környezet"],
      ro: ["Fondată de prințesa Milica", "Ferestre bogat decorate", "Locație pitorească"],
      en: ["Founded by Princess Milica", "Richly decorated windows", "Picturesque setting"]
    },
    factsAdvanced: {
        de: [],
        hu: ["Milica hercegné (Lázár cár felesége) alapította", "A rigómezei csata özvegyeinek menedéke volt", "A moravai építészeti stílus egyik legszebb példája", "Csipkeszerű, faragott kőrozetták díszítik az ablakokat", "Itt őrzik Jefimija, az első szerb költőnő emlékét is"],
        ro: [],
        en: ["Founded by Princess Milica shortly before the 1389 Battle of Kosovo.", "A prime and exquisite example of the Morava architectural style.", "Served as a sanctuary for noble widows following the Kosovo tragedy.", "Princess Milica took her monastic vows and is buried at this site.", "Features incredibly intricate and detailed stone rosette carvings."]
    }
  },
  // RS-023 Šumadijski
      // RS-024 Moravicki
    {
    id: "RS-024-ovcar-kablar",
    type: "landmark",
    parent: "RS-024",
    coords: [20.1800, 43.9000],
    name: { de: "Ovčar-Kablar-Schlucht", hu: "Ovčar-Kablar-szurdok", ro: "Defileul Ovčar-Kablar", en: "Ovčar-Kablar Gorge" },
    description: {
      de: "Eine malerische Schlucht der Westmorava, auch 'Serbisches Heiliges Bergland' genannt.",
      hu: "A Nyugati-Morava festői szurdoka, amelyet 'szerb szent hegyvidéknek' is neveznek.",
      ro: "Un defileu pitoresc al Moravei de Vest, numit și 'Muntele Sfânt Sârbesc'.",
      en: "A picturesque gorge of the West Morava river, also called 'Serbian Holy Mountain'."
    },
    descriptionAdvanced: {
        de: "",
        hu: "Az Ovčar-Kablar szurdok a Nyugati-Morava folyó drámai áttörése két meredek hegy, az Ovčar és a Kablar között. A lenyűgöző természeti szépségű, kanyargós szurdokvölgy a szerb ortodoxia egyik legfontosabb szellemi központja is, amelyet 'szerb Athos-hegyként' emlegetnek a sűrű erdőkben megbúvó több tucat apró kolostor miatt. A látogatók számára a folyón való hajózás és a hegygerincekről nyíló szédítő panoráma felejthetetlen élményt nyújt. Földrajz K7 — folyami szurdokok és vallási izoláció.",
        ro: "",
        en: "The Ovčar-Kablar Gorge is a spectacular natural and cultural phenomenon carved by the West Morava River as it slices between the steep peaks of Mounts Ovčar and Kablar. This dramatic gorge is affectionately known as the 'Serbian Mount Athos' due to the dense concentration of small, historic Orthodox monasteries hidden within its forests and caves. The area offers unparalleled opportunities for eco-tourism, including challenging hiking trails, serene boat rides, and the exploration of centuries-old spiritual retreats. Geography K8 — river gorges and religious retreats."
    },
    facts: {
      de: ["Zahlreiche Klöster", "Wellness-Zentrum", "Wanderwege"],
      hu: ["Számos kolostor", "Gyógyfürdő központ", "Túraútvonalak"],
      ro: ["Numeroase mănăstiri", "Centru de wellness", "Trasee de drumeție"],
      en: ["Numerous monasteries", "Wellness center", "Hiking trails"]
    },
    factsAdvanced: {
        de: [],
        hu: ["A 'szerb Athos-hegyként' ismert", "Több mint 10 történelmi ortodox kolostor rejtőzik itt", "A Nyugati-Morava folyó meredek kanyonja", "A Kablar hegyről lenyűgöző meander-panoráma nyílik", "A török időkben a szerb kultúra titkos menedéke volt"],
        ro: [],
        en: ["Carved dramatically by the West Morava River between two mountains.", "Widely known as the 'Serbian Mount Athos' for its many monasteries.", "Contains over ten distinct, historic Orthodox monasteries and hermitages.", "Offers exceptional hiking trails with stunning panoramic viewpoints.", "A protected natural area renowned for its rich and varied biodiversity."]
    }
  },
  // RS-025 Kolubarski
  {
    id: "RS-025-valjevo",
    type: "city",
    parent: "RS-025",
    coords: [19.8900, 44.2700],
    name: { de: "Valjevo", hu: "Valjevo", ro: "Valjevo", en: "Valjevo" },
    description: {
      de: "Eine Stadt im Westen Serbiens, reich an Geschichte und kulturellem Erbe.",
      hu: "Nyugat-szerbiai város, gazdag történelemmel és kulturális örökséggel.",
      ro: "Un oraș în vestul Serbiei, bogat în istorie și moștenire culturală.",
      en: "A city in western Serbia, rich in history and cultural heritage."
    },
    descriptionAdvanced: {
        de: "",
        hu: "Valjevo Nyugat-Szerbia egyik legrégebbi és legélénkebb történelmi városa, a Kolubara folyó mentén. A város megőrizte régi bazárnegyedét, a Tešnjar-t, amely az oszmán és balkáni városi kultúra autentikus atmoszféráját árasztja macskaköves utcáival és régi kézműves műhelyeivel. Valjevo kulcsszerepet játszott a 19. századi szerb felkelésekben, és a környék kiváló természeti adottságai (Divčibare hegyvidék) miatt ma is a hazai turizmus egyik központja. Történelem K8 — a 19. századi balkáni bazárok.",
        ro: "",
        en: "Valjevo is a prominent city in western Serbia, beautifully situated in the valley of the Kolubara River and surrounded by lush, rolling mountains. The city is famous for its exceptionally well-preserved old Ottoman bazaar, 'Tešnjar,' which frequently serves as a filming location for period movies. Valjevo holds a proud place in Serbian history as a major center of resistance during the uprisings against the Ottomans and later during World War I, exemplified by its numerous monuments and museums. History K8 — 19th-century urban life."
    },
    facts: {
      de: ["Altstadt Tešnjar", "Nationalmuseum", "Kolubara-Fluss"],
      hu: ["Tešnjar óváros", "Nemzeti Múzeum", "Kolubara-folyó"],
      ro: ["Centrul vechi Tešnjar", "Muzeul Național", "Râul Kolubara"],
      en: ["Tešnjar old quarter", "National Museum", "Kolubara River"]
    },
    factsAdvanced: {
        de: [],
        hu: ["Híres megőrzött régi bazárnegyedéről (Tešnjar)", "A Kolubara folyó partján épült", "A 19. századi szerb felkelések egyik gócpontja volt", "Gyakran szolgál történelmi filmek forgatási helyszínéül", "A közeli Divčibare hegyvidék népszerű üdülőhely"],
        ro: [],
        en: ["Located in the picturesque valley of the Kolubara River.", "Home to 'Tešnjar,' a beautifully preserved 19th-century Ottoman bazaar.", "A prominent historical center for resistance during the national uprisings.", "Surrounded by popular mountain resorts like Divčibare.", "Hosts the National Museum, which houses extensive historical exhibits."]
    }
  },
  {
    id: "RS-025-lelic",
    type: "historical",
    parent: "RS-025",
    coords: [19.8400, 44.2100],
    name: { de: "Kloster Lelić", hu: "Lelić kolostor", ro: "Mănăstirea Lelić", en: "Lelić Monastery" },
    description: {
      de: "Ein modernes, aber bedeutendes Kloster, dem Heiligen Nikolai Velimirović gewidmet.",
      hu: "Modern, de jelentős kolostor, amelyet Szent Nikolai Velimirovićnak szenteltek.",
      ro: "O mănăstire modernă, dar importantă, dedicată Sfântului Nikolai Velimirović.",
      en: "A modern but significant monastery dedicated to Saint Nikolai Velimirović."
    },
    descriptionAdvanced: {
        de: "",
        hu: "A Lelić kolostor Valjevo közelében fekszik, és bár az egyik legfiatalabb jelentős szerb ortodox kolostor, szellemi hatása kiemelkedő. A 20. században alapították, és elsősorban Szent Nikolaj Velimirović püspök, a modern szerb egyház egyik legnagyobb teológusa és gondolkodója nyughelyeként ismert. A hagyományos moravai stílust idéző, de modern építőanyagokból, kőből és téglából épült templom a balkáni neobizánci építészet szép példája. Vallástörténet K8 — modern egyházi központok.",
        ro: "",
        en: "The Lelić Monastery is a relatively modern but profoundly important spiritual center located in the pristine mountainous area near Valjevo. Founded in the mid-20th century, it is the resting place of Bishop Nikolaj Velimirović, one of the most influential and prolific theological writers in modern Serbian Orthodox history. The monastery's church is built in the traditional Serbo-Byzantine style, combining stone and brick, and the site attracts thousands of pilgrims annually seeking spiritual solace in the tranquil natural setting. Religion K8 — 20th-century Orthodox theology."
    },
    facts: {
      de: ["Reliquien des Hl. Nikolai", "Einzigartige Architektur", "Pilgerstätte"],
      hu: ["Szent Nikolai ereklyéi", "Egyedi építészet", "Zarándokhely"],
      ro: ["Moaștele Sf. Nikolai", "Arhitectură unică", "Loc de pelerinaj"],
      en: ["Relics of St. Nikolai", "Unique architecture", "Pilgrimage site"]
    },
    factsAdvanced: {
        de: [],
        hu: ["A 20. században épült, fiatal kolostor", "Szent Nikolaj Velimirović püspök nyughelye", "Valjevo városának közelében fekszik", "Neobizánci és moravai stílusjegyeket ötvöz", "Napjainkban Szerbia egyik leglátogatottabb zarándokhelye"],
        ro: [],
        en: ["Founded in the 20th century in the mountainous region near Valjevo.", "Serves as the resting place of the influential Bishop Nikolaj Velimirović.", "Designed combining traditional Serbo-Byzantine brick and stone styles.", "Functions as a major contemporary site for Orthodox pilgrimages.", "Located in a tranquil, pristine natural setting away from urban centers."]
    }
  }
];

export const serbiaAllPoi: POI[] = [
  serbiaCountry,
  ...serbiaRegions,
  ...serbiaCities,
  ...serbiaCulture,
  ...serbiaNature,
  ...serbiaRivers,
  ...serbiaDistrictPoi
];
