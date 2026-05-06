// @ts-nocheck
import type { POI } from "./poi";

export const poiExtraChinaNatureV2: POI[] = [
  {
    id: "jiuzhaigou-valley-nature-v2",
    type: "national-park",
    parent: "CN-SC",
    coords: [103.913, 33.255],
    name: {
      de: "Jiuzhaigou-Tal",
      hu: "Jiuzhaigou-völgy",
      ro: "Valea Jiuzhaigou",
      en: "Jiuzhaigou Valley"
    },
    description: {
      de: "Ein Naturschutzgebiet und Nationalpark in der Provinz Sichuan, bekannt für seine mehrstufigen Wasserfälle, bunten Seen und schneebedeckten Gipfel.",
      hu: "Természetvédelmi terület és nemzeti park Szecsuán tartományban, amely többszintű vízeséseiről, színes tavairól és hófedte csúcsairól ismert.",
      ro: "O rezervație naturală și un parc național situat în provincia Sichuan, renumit pentru cascadele sale pe mai multe niveluri, lacurile colorate și vârfurile acoperite de zăpadă.",
      en: "A nature reserve and national park located in Sichuan province, famous for its multi-level waterfalls, colorful lakes, and snow-capped peaks."
    },
    facts: {
      de: ["UNESCO-Weltnaturerbe seit 1992.", "Heimat von Riesenpandas und Goldstumpfnasenaffen.", "Die Wasserfarbe ändert sich je nach Jahreszeit und Tageszeit."],
      hu: ["1992 óta az UNESCO Világörökség része.", "Óriáspandák és arany orrú majmok otthona.", "A víz színe az évszaktól és a napszaktól függően változik."],
      ro: ["Sit al Patrimoniului Mondial UNESCO din 1992.", "Adăpostește panda uriași și maimuțe cu nasul auriu.", "Culoarea apei se schimbă în funcție de anotimp și de ora din zi."],
      en: ["A UNESCO World Heritage Site since 1992.", "Home to giant pandas and golden snub-nosed monkeys.", "The water's color changes depending on the season and time of day."]
    }, image: "/poi-images/jiuzhaigou-valley-nature-v2.webp"},
  {
    id: "zhangjiajie-national-forest-park-nature-v2",
    type: "national-park",
    parent: "CN-HN",
    coords: [110.47, 29.32],
    name: {
      de: "Zhangjiajie Nationaler Waldpark",
      hu: "Zhangjiajie Nemzeti Erdőpark",
      ro: "Parcul Național Forestier Zhangjiajie",
      en: "Zhangjiajie National Forest Park"
    },
    description: {
      de: "Bekannt für seine hoch aufragenden, säulenartigen Felsformationen aus Quarzsandstein, die als Inspiration für die 'Halleluja-Berge' im Film Avatar dienten.",
      hu: "Híres a magasba törő, oszlopszerű kvarc-homokkő sziklaalakzatairól, amelyek az Avatar című film 'Hallelujah-hegyei'-nek ihletői voltak.",
      ro: "Renumit pentru formațiunile sale stâncoase înalte, asemănătoare unor stâlpi, din gresie cuarțitică, care au servit drept inspirație pentru 'Munții Aleluia' din filmul Avatar.",
      en: "Famous for its towering pillar-like rock formations of quartz-sandstone, which served as inspiration for the 'Hallelujah Mountains' in the movie Avatar."
    },
    facts: {
      de: ["Chinas erster nationaler Waldpark, 1982 gegründet.", "Verfügt über den Bailong-Aufzug, den höchsten Außenaufzug der Welt.", "Teil des Wulingyuan-Gebiets, einem UNESCO-Weltnaturerbe."],
      hu: ["Kína első nemzeti erdőparkja, 1982-ben hozták létre.", "Itt található a Bailong-lift, a világ legmagasabb kültéri liftje.", "A Wulingyuan Táj- és Történeti Érdekességek Területének része, amely UNESCO Világörökség."],
      ro: ["Primul parc național forestier al Chinei, înființat în 1982.", "Dispune de Liftul Bailong, cel mai înalt lift exterior din lume.", "Parte a Zonei de Interes Scenic și Istoric Wulingyuan, un sit al Patrimoniului Mondial UNESCO."],
      en: ["China's first national forest park, established in 1982.", "Features the Bailong Elevator, the world's tallest outdoor elevator.", "Part of the Wulingyuan Scenic Area, a UNESCO World Heritage Site."]
    }, image: "/poi-images/zhangjiajie-national-forest-park-nature-v2.webp"},
  {
    id: "yangtze-river-nature-v2",
    type: "river",
    parent: "CN-QP",
    coords: [121.79, 31.28],
    name: {
      de: "Jangtsekiang",
      hu: "Jangce",
      ro: "Fluviul Yangtze",
      en: "Yangtze River"
    },
    description: {
      de: "Der längste Fluss in Asien und der drittlängste der Welt, der eine entscheidende Rolle in der Geschichte, Kultur und Wirtschaft Chinas spielt.",
      hu: "Ázsia leghosszabb és a világ harmadik leghosszabb folyója, amely döntő szerepet játszik Kína történelmében, kultúrájában és gazdaságában.",
      ro: "Cel mai lung fluviu din Asia și al treilea cel mai lung din lume, jucând un rol crucial în istoria, cultura și economia Chinei.",
      en: "The longest river in Asia and the third-longest in the world, playing a crucial role in the history, culture, and economy of China."
    },
    facts: {
      de: ["Länge von etwa 6.300 km.", "Der Drei-Schluchten-Staudamm am Fluss ist das größte Wasserkraftwerk der Welt.", "Beheimatet den kritisch gefährdeten Glattschweinswal."],
      hu: ["Hossza körülbelül 6300 km.", "A folyón található Három-szurdok-gát a világ legnagyobb vízerőműve.", "Otthont ad a kritikusan veszélyeztetett jangcei folyamidelfinnek."],
      ro: ["Aproximativ 6.300 km în lungime.", "Barajul Trei Defileuri de pe râu este cea mai mare centrală hidroelectrică din lume.", "Adăpostește marsuinul fără înotătoare finless, specie pe cale de dispariție critică."],
      en: ["Approximately 6,300 km long.", "The Three Gorges Dam on the river is the world's largest power station.", "Home to the critically endangered finless porpoise."]
    }, image: "/poi-images/yangtze-river-nature-v2.webp"},
  {
    id: "yellow-river-nature-v2",
    type: "river",
    parent: "CN-SD",
    coords: [119.14, 37.74],
    name: {
      de: "Gelber Fluss",
      hu: "Sárga-folyó",
      ro: "Fluviul Galben",
      en: "Yellow River"
    },
    description: {
      de: "Der zweitlängste Fluss Chinas, oft als 'Wiege der chinesischen Zivilisation' bezeichnet. Sein Name kommt vom Löss-Sediment, das ihm eine gelbliche Farbe verleiht.",
      hu: "Kína második leghosszabb folyója, amelyet gyakran a 'kínai civilizáció bölcsőjének' neveznek. Nevét a löszös üledékről kapta, amely sárgás színt kölcsönöz neki.",
      ro: "Al doilea cel mai lung fluviu din China, adesea numit 'leagănul civilizației chineze'. Numele său provine de la sedimentul de loess care îi conferă o culoare gălbuie.",
      en: "The second-longest river in China, often called the 'cradle of Chinese civilization'. Its name comes from the loess sediment that gives it a yellowish color."
    },
    facts: {
      de: ["Länge von etwa 5.464 km.", "Trägt die größte Sedimentlast aller Flüsse der Welt.", "Neigt zu verheerenden Überschwemmungen und hat seinen Lauf mehrmals geändert."],
      hu: ["Hossza körülbelül 5464 km.", "A világ folyói közül a legnagyobb üledékterhelést hordozza.", "Hajlamos a pusztító árvizekre, és többször is megváltoztatta a medrét."],
      ro: ["Aproximativ 5.464 km în lungime.", "Transportă cea mai mare încărcătură de sedimente dintre toate râurile din lume.", "Este predispus la inundații devastatoare și și-a schimbat cursul de mai multe ori."],
      en: ["Approximately 5,464 km long.", "Carries the largest sediment load of any river in the world.", "Prone to devastating floods and has changed its course multiple times."]
    }, image: "/poi-images/yellow-river-nature-v2.webp"},
  {
    id: "mount-everest-nature-v2",
    type: "mountain",
    parent: "CN-XZ",
    coords: [86.925, 27.988],
    name: {
      de: "Mount Everest",
      hu: "Mount Everest",
      ro: "Muntele Everest",
      en: "Mount Everest"
    },
    description: {
      de: "Der höchste Berg der Erde über dem Meeresspiegel, an der Grenze zwischen Nepal und der Autonomen Region Tibet in China gelegen.",
      hu: "A Föld legmagasabb hegye a tengerszint felett, Nepál és a kínai Tibeti Autonóm Terület határán található.",
      ro: "Cel mai înalt munte de pe Pământ deasupra nivelului mării, situat la granița dintre Nepal și Regiunea Autonomă Tibet din China.",
      en: "Earth's highest mountain above sea level, located on the border between Nepal and the Tibet Autonomous Region of China."
    },
    facts: {
      de: ["Offizielle Höhe von 8.848,86 Metern.", "In Tibet als 'Chomolungma' (Göttinmutter der Welt) bekannt.", "Die erste bestätigte Besteigung erfolgte 1953 durch Edmund Hillary und Tenzing Norgay."],
      hu: ["Hivatalos magassága 8848,86 méter.", "Tibetben 'Csomolungma' (A Világ Isteni Anyja) néven ismert.", "Az első igazolt megmászása 1953-ban történt, Edmund Hillary és Tenzing Norgay által."],
      ro: ["Elevație oficială de 8.848,86 metri.", "Cunoscut în Tibet sub numele de 'Chomolungma' (Zeița Mamă a Lumii).", "Prima ascensiune confirmată a fost realizată de Edmund Hillary și Tenzing Norgay în 1953."],
      en: ["Official elevation of 8,848.86 meters.", "Known in Tibet as 'Chomolungma' (Goddess Mother of the World).", "The first confirmed ascent was by Edmund Hillary and Tenzing Norgay in 1953."]
    }, image: "/poi-images/mount-everest-nature-v2.webp"},
  {
    id: "west-lake-nature-v2",
    type: "lake",
    parent: "CN-ZJ",
    coords: [120.14, 30.24],
    name: {
      de: "Westsee",
      hu: "Nyugati-tó",
      ro: "Lacul de Vest",
      en: "West Lake"
    },
    description: {
      de: "Ein berühmter Süßwassersee in Hangzhou, der für seine natürliche Schönheit und historischen Relikte bekannt ist und Dichter und Maler seit Jahrhunderten inspiriert.",
      hu: "Egy híres édesvízi tó Hangcsouban, amely természeti szépségéről és történelmi emlékeiről ismert, és évszázadok óta inspirál költőket és festőket.",
      ro: "Un faimos lac de apă dulce situat în Hangzhou, renumit pentru frumusețea sa naturală și relicvele istorice, inspirând poeți și pictori de secole.",
      en: "A famous freshwater lake located in Hangzhou, renowned for its natural beauty and historic relics, influencing poets and painters for centuries."
    },
    facts: {
      de: ["UNESCO-Weltkulturerbe seit 2011.", "Umgeben von Tempeln, Pagoden, Gärten und künstlichen Inseln.", "Der See ist in drei Teile durch Dämme unterteilt."],
      hu: ["2011 óta az UNESCO Világörökség része.", "Templomok, pagodák, kertek és mesterséges szigetek veszik körül.", "A tavat gátak három részre osztják."],
      ro: ["Sit al Patrimoniului Mondial UNESCO din 2011.", "Înconjurat de temple, pagode, grădini și insule artificiale.", "Lacul este împărțit în trei secțiuni de către diguri."],
      en: ["A UNESCO World Heritage site since 2011.", "Surrounded by temples, pagodas, gardens, and artificial islands.", "The lake is divided into three sections by causeways."]
    }, image: "/poi-images/west-lake-nature-v2.webp"},
  {
    id: "li-river-nature-v2",
    type: "river",
    parent: "CN-GX",
    coords: [110.29, 25.27],
    name: {
      de: "Li-Fluss",
      hu: "Li-folyó",
      ro: "Râul Li",
      en: "Li River"
    },
    description: {
      de: "Ein Fluss in der Autonomen Region Guangxi Zhuang, berühmt für seine Landschaft aus Karsthügeln, die auf der 20-Yuan-Banknote abgebildet ist.",
      hu: "Egy folyó a Kuanghszi-Csuang Autonóm Területen, amely a karszthegyekkel tarkított tájáról híres, és a 20 jüanos bankjegyen is szerepel.",
      ro: "Un râu în Regiunea Autonomă Guangxi Zhuang, renumit pentru peisajul său de dealuri carstice, care este prezentat pe bancnota de 20 de yuani.",
      en: "A river in the Guangxi Zhuang Autonomous Region, famous for its scenery of karst hills, which is featured on the 20 yuan banknote."
    },
    facts: {
      de: ["Die 83 km lange Strecke von Guilin nach Yangshuo ist bei Touristen beliebt.", "Die Karstgipfel entstanden durch die Erosion von Kalkstein über Millionen von Jahren.", "Bambusfloßfahrten sind eine beliebte Möglichkeit, die Landschaft zu erleben."],
      hu: ["A Guilintől Yangshuóig tartó 83 km-es szakasz népszerű a turisták körében.", "A karsztcsúcsok mészkő eróziójával jöttek létre évmilliók alatt.", "A bambusztutajos túrák népszerű módja a táj felfedezésének."],
      ro: ["Secțiunea de 83 km de la Guilin la Yangshuo este populară printre turiști.", "Vârfurile carstice s-au format prin erodarea calcarului de-a lungul a milioane de ani.", "Excursiile cu pluta de bambus sunt o modalitate populară de a experimenta peisajul."],
      en: ["The 83-km section from Guilin to Yangshuo is popular with tourists.", "The karst peaks were formed by the erosion of limestone over millions of years.", "Bamboo rafting is a popular way to experience the scenery."]
    }, image: "/poi-images/li-river-nature-v2.webp"},
  {
    id: "huangshan-mountains-nature-v2",
    type: "mountain",
    parent: "CN-AH",
    coords: [118.17, 30.17],
    name: {
      de: "Huangshan-Gebirge",
      hu: "Huangshan-hegység",
      ro: "Munții Huangshan",
      en: "Huangshan Mountains"
    },
    description: {
      de: "Eine Gebirgskette in der Provinz Anhui, bekannt für ihre einzigartig geformten Granitgipfel, heißen Quellen und das Wolkenmeer aus dem die Gipfel ragen.",
      hu: "Hegylánc Anhui tartományban, amely egyedi formájú gránitcsúcsairól, forró forrásairól és a csúcsok fölé emelkedő felhőtengerről ismert.",
      ro: "Un lanț muntos în provincia Anhui, renumit pentru vârfurile sale de granit cu forme unice, izvoarele termale și marea de nori din care ies vârfurile.",
      en: "A mountain range in Anhui province, known for its uniquely shaped granite peaks, hot springs, and the sea of clouds from which the peaks rise."
    },
    facts: {
      de: ["UNESCO-Weltnaturerbe seit 1990.", "Diente als häufiges Motiv in der traditionellen chinesischen Malerei.", "Die 'Begrüßungs-Kiefer' ist ein berühmter, über 1000 Jahre alter Baum."],
      hu: ["1990 óta az UNESCO Világörökség része.", "Gyakori motívum volt a hagyományos kínai festészetben.", "Az 'Üdvözlő Fenyő' egy híres, több mint 1000 éves fa."],
      ro: ["Sit al Patrimoniului Mondial UNESCO din 1990.", "A servit drept subiect frecvent în pictura tradițională chineză.", "Pinul '迎客松' (Pinul de întâmpinare) este un copac faimos, vechi de peste 1000 de ani."],
      en: ["A UNESCO World Heritage site since 1990.", "Served as a frequent subject in traditional Chinese painting.", "The 'Welcoming Pine' is a famous tree over 1,000 years old."]
    }, image: "/poi-images/huangshan-mountains-nature-v2.webp"},
  {
    id: "qinghai-lake-nature-v2",
    type: "lake",
    parent: "CN-QH",
    coords: [100.47, 36.93],
    name: {
      de: "Qinghai-See",
      hu: "Csinghaj-tó",
      ro: "Lacul Qinghai",
      en: "Qinghai Lake"
    },
    description: {
      de: "Der größte See Chinas, ein alkalischer und salzhaltiger See in der Provinz Qinghai. Er liegt auf dem tibetischen Plateau und ist ein wichtiger Rastplatz für Zugvögel.",
      hu: "Kína legnagyobb tava, egy lúgos és sós tó Csinghaj tartományban. A Tibeti-fennsíkon fekszik, és fontos pihenőhely a vándormadarak számára.",
      ro: "Cel mai mare lac din China, un lac alcalin și salin situat în provincia Qinghai. Se află pe Platoul Tibetan și este un important loc de popas pentru păsările migratoare.",
      en: "The largest lake in China, an alkaline and saline lake located in Qinghai province. It is situated on the Tibetan Plateau and is a vital stop for migratory birds."
    },
    facts: {
      de: ["Die Fläche beträgt etwa 4.635 Quadratkilometer.", "Der See hat keine Mündung; das Wasser geht nur durch Verdunstung verloren.", "Das jährliche 'Tour de Qinghai Lake' Radrennen findet hier statt."],
      hu: ["Területe körülbelül 4635 négyzetkilométer.", "A tónak nincs kifolyása; a víz csak párolgással távozik.", "Itt rendezik meg az éves 'Tour de Qinghai Lake' kerékpárversenyt."],
      ro: ["Suprafața este de aproximativ 4.635 de kilometri pătrați.", "Lacul nu are ieșire; apa se pierde doar prin evaporare.", "Aici are loc cursa anuală de ciclism 'Turul lacului Qinghai'."],
      en: ["The surface area is about 4,635 square kilometers.", "The lake is endorheic; water is lost only by evaporation.", "The annual 'Tour de Qinghai Lake' cycling race is held here."]
    }, image: "/poi-images/qinghai-lake-nature-v2.webp"},
  {
    id: "pudacuo-national-park-nature-v2",
    type: "national-park",
    parent: "CN-YN",
    coords: [100.00, 27.83],
    name: {
      de: "Pudacuo-Nationalpark",
      hu: "Pudacuo Nemzeti Park",
      ro: "Parcul Național Pudacuo",
      en: "Pudacuo National Park"
    },
    description: {
      de: "Der erste Nationalpark in China, der die internationalen Standards der IUCN erfüllt. Er liegt in der Provinz Yunnan und ist bekannt für seine unberührten Seen und Wälder.",
      hu: "Az első nemzeti park Kínában, amely megfelel az IUCN nemzetközi szabványainak. Jünnan tartományban található, és érintetlen tavairól és erdőiről ismert.",
      ro: "Primul parc național din China care îndeplinește standardele internaționale ale IUCN. Este situat în provincia Yunnan și este cunoscut pentru lacurile și pădurile sale virgine.",
      en: "The first national park in China to meet IUCN international standards. It's located in Yunnan province and is known for its pristine lakes and forests."
    },
    facts: {
      de: ["Teil der geschützten Gebiete der drei parallelen Flüsse von Yunnan.", "Beheimatet über 100 Orchideenarten.", "Die Shudu- und Bita-Seen sind die Hauptattraktionen."],
      hu: ["A Jünnan Három Párhuzamos Folyó Védett Területek része.", "Több mint 100 orchideafajnak ad otthont.", "A Shudu- és a Bita-tó a fő látnivalók."],
      ro: ["Parte a Ariilor Protejate ale Celor Trei Râuri Paralele din Yunnan.", "Adăpostește peste 100 de specii de orhidee.", "Lacurile Shudu și Bita sunt atracțiile principale."],
      en: ["Part of the Three Parallel Rivers of Yunnan Protected Areas.", "Home to over 100 species of orchids.", "Shudu Lake and Bita Lake are its main attractions."]
    }, image: "/poi-images/pudacuo-national-park-nature-v2.webp"},
  {
    id: "namtso-lake-nature-v2",
    type: "lake",
    parent: "CN-XZ",
    coords: [90.65, 30.69],
    name: {
      de: "Namtso-See",
      hu: "Namtso-tó",
      ro: "Lacul Namtso",
      en: "Namtso Lake"
    },
    description: {
      de: "Ein Bergsee auf dem tibetischen Plateau, der als einer der schönsten Orte Tibets gilt. Sein Name bedeutet 'Himmlischer See' auf Tibetisch.",
      hu: "Hegyi tó a Tibeti-fennsíkon, amelyet Tibet egyik legszebb helyének tartanak. Neve tibetiül 'Mennyei Tó'-t jelent.",
      ro: "Un lac montan de pe Platoul Tibetan, considerat unul dintre cele mai frumoase locuri din Tibet. Numele său înseamnă 'Lacul Ceresc' în tibetană.",
      en: "A mountain lake on the Tibetan Plateau, considered one of the most beautiful places in Tibet. Its name means 'Heavenly Lake' in Tibetan."
    },
    facts: {
      de: ["Einer der höchstgelegenen Salzseen der Welt, auf 4.718 Metern.", "Im Winter gefriert er vollständig.", "Ein heiliger See im tibetischen Buddhismus und ein Pilgerziel."],
      hu: ["A világ egyik legmagasabban fekvő sós tava, 4718 méteren.", "Télen teljesen befagy.", "Szent tó a tibeti buddhizmusban és zarándokhely."],
      ro: ["Unul dintre cele mai înalte lacuri sărate din lume, la 4.718 de metri.", "Îngheață complet în timpul iernii.", "Un lac sacru în budismul tibetan și un loc de pelerinaj."],
      en: ["One of the highest saltwater lakes in the world, at 4,718 meters.", "It freezes over completely in winter.", "A sacred lake in Tibetan Buddhism and a pilgrimage site."]
    }, image: "/poi-images/namtso-lake-nature-v2.webp"},
  {
    id: "stone-forest-nature-v2",
    type: "forest",
    parent: "CN-YN",
    coords: [103.32, 24.82],
    name: {
      de: "Steinwald",
      hu: "Kő-erdő",
      ro: "Pădurea de Piatră",
      en: "Stone Forest"
    },
    description: {
      de: "Eine bemerkenswerte Ansammlung von Kalksteinformationen in der Provinz Yunnan. Die hohen Felsen scheinen wie versteinerte Bäume aus dem Boden zu ragen.",
      hu: "Figyelemre méltó mészkőalakzatok csoportja Jünnan tartományban. A magas sziklák mintha megkövesedett fákként emelkednének ki a földből.",
      ro: "O colecție remarcabilă de formațiuni de calcar în provincia Yunnan. Stâncile înalte par să se ridice din pământ ca niște copaci pietrificați.",
      en: "A notable set of limestone formations in Yunnan Province. The tall rocks seem to grow out of the ground like petrified trees."
    },
    facts: {
      de: ["Teil des südchinesischen Karst-UNESCO-Weltnaturerbes.", "Über 270 Millionen Jahre alt.", "Die Legende besagt, dass der Wald von Unsterblichen erschaffen wurde."],
      hu: ["A Dél-kínai Karszt UNESCO Világörökség része.", "Több mint 270 millió éves.", "A legenda szerint az erdőt halhatatlanok hozták létre."],
      ro: ["Parte a sitului Patrimoniului Mondial UNESCO Carstul Chinei de Sud.", "Vechime de peste 270 de milioane de ani.", "Legenda spune că pădurea a fost creată de nemuritori."],
      en: ["Part of the South China Karst UNESCO World Heritage Site.", "Over 270 million years old.", "Legend says the forest was created by immortals."]
    }, image: "/poi-images/stone-forest-nature-v2.webp"},
  {
    id: "wulingyuan-nature-v2",
    type: "national-park",
    parent: "CN-HN",
    coords: [110.50, 29.35],
    name: {
      de: "Wulingyuan",
      hu: "Wulingyuan",
      ro: "Wulingyuan",
      en: "Wulingyuan"
    },
    description: {
      de: "Ein landschaftlich reizvolles Gebiet in der Provinz Hunan, berühmt für seine über 3.000 schmalen Quarzsandsteinpfeiler und -gipfel.",
      hu: "Festői terület Hunan tartományban, híres több mint 3000 keskeny kvarc-homokkő oszlopáról és csúcsáról.",
      ro: "O zonă de interes pitoresc în provincia Hunan, renumită pentru cei peste 3.000 de stâlpi și vârfuri înguste de gresie cuarțitică.",
      en: "A scenic area in Hunan province, famous for its over 3,000 narrow quartz-sandstone pillars and peaks."
    },
    facts: {
      de: ["UNESCO-Weltnaturerbe.", "Beinhaltet den Zhangjiajie National Forest Park.", "Die Gipfel sind oft in Nebel gehüllt."],
      hu: ["UNESCO Világörökségi helyszín.", "Magába foglalja a Zhangjiajie Nemzeti Erdőparkot.", "A csúcsokat gyakran köd borítja."],
      ro: ["Sit al Patrimoniului Mondial UNESCO.", "Include Parcul Național Forestier Zhangjiajie.", "Vârfurile sunt adesea învăluite în ceață."],
      en: ["A UNESCO World Heritage Site.", "Includes Zhangjiajie National Forest Park.", "The peaks are often shrouded in mist."]
    }, image: "/poi-images/wulingyuan-nature-v2.webp"},
  {
    id: "gobi-desert-nature-v2",
    type: "mountain",
    parent: "CN-NM",
    coords: [105.28, 42.59],
    name: {
      de: "Wüste Gobi",
      hu: "Góbi-sivatag",
      ro: "Deșertul Gobi",
      en: "Gobi Desert"
    },
    description: {
      de: "Eine große Wüsten- und Halbwüstenregion in Ostasien, die Teile Nord- und Nordwestchinas sowie der südlichen Mongolei umfasst.",
      hu: "Nagy sivatagi és félsivatagi régió Kelet-Ázsiában, amely Kína északi és északnyugati részét, valamint Dél-Mongóliát foglalja magában.",
      ro: "O regiune mare deșertică și semideșertică în Asia de Est, acoperind părți din nordul și nord-vestul Chinei și sudul Mongoliei.",
      en: "A large desert and semi-desert region in East Asia, covering parts of Northern and Northwestern China, and of Southern Mongolia."
    },
    facts: {
      de: ["Die sechstgrößte Wüste der Welt.", "Eine kalte Wüste, in der es manchmal schneit.", "Wichtige archäologische Fundstätte, insbesondere für Dinosaurierfossilien."],
      hu: ["A világ hatodik legnagyobb sivataga.", "Hideg sivatag, ahol néha havazik.", "Fontos régészeti lelőhely, különösen dinoszaurusz-fosszíliák szempontjából."],
      ro: ["Al șaselea cel mai mare deșert din lume.", "Un deșert rece, unde uneori ninge.", "Situl arheologic important, în special pentru fosilele de dinozauri."],
      en: ["The sixth-largest desert in the world.", "A cold desert, and it is not uncommon to see snow.", "Important archaeological site, especially for dinosaur fossils."]
    }, image: "/poi-images/gobi-desert-nature-v2.webp"},
  {
    id: "k2-mountain-nature-v2",
    type: "mountain",
    parent: "CN-XJ",
    coords: [76.51, 35.88],
    name: {
      de: "K2",
      hu: "K2",
      ro: "K2",
      en: "K2"
    },
    description: {
      de: "Der zweithöchste Berg der Welt, an der Grenze zwischen Pakistan und China gelegen. Bekannt als der 'Wilde Berg' aufgrund der extremen Schwierigkeit seiner Besteigung.",
      hu: "A világ második legmagasabb hegye, Pakisztán és Kína határán. A 'Vad Hegy'-ként ismert a megmászásának rendkívüli nehézsége miatt.",
      ro: "Al doilea cel mai înalt munte din lume, situat la granița dintre Pakistan și China. Cunoscut sub numele de 'Muntele Sălbatic' datorită dificultății extreme a ascensiunii sale.",
      en: "The second-highest mountain in the world, located on the border between Pakistan and China. Known as the 'Savage Mountain' due to the extreme difficulty of ascent."
    },
    facts: {
      de: ["Höhe von 8.611 Metern.", "Hat eine der höchsten Todesraten unter den Achttausendern.", "Wurde erstmals 1954 von einer italienischen Expedition bestiegen."],
      hu: ["Magassága 8611 méter.", "Az egyik legmagasabb halálozási aránnyal rendelkezik a nyolcezresek között.", "Először 1954-ben egy olasz expedíció mászta meg."],
      ro: ["Elevație de 8.611 metri.", "Are una dintre cele mai mari rate de deces dintre opt-miari.", "A fost urcat pentru prima dată de o expediție italiană în 1954."],
      en: ["Elevation of 8,611 meters.", "Has one of the highest fatality rates among the eight-thousanders.", "First successfully climbed by an Italian expedition in 1954."]
    }, image: "/poi-images/k2-mountain-nature-v2.webp"},
  {
    id: "tiger-leaping-gorge-nature-v2",
    type: "river",
    parent: "CN-YN",
    coords: [100.12, 27.22],
    name: {
      de: "Tigersprung-Schlucht",
      hu: "Tigrisugrás-szurdok",
      ro: "Cheile Saltului Tigrului",
      en: "Tiger Leaping Gorge"
    },
    description: {
      de: "Eine der tiefsten und spektakulärsten Flussschluchten der Welt. Der Jinsha-Fluss, ein Nebenfluss des Jangtse, fließt durch diese malerische Schlucht.",
      hu: "A világ egyik legmélyebb és leglátványosabb folyószurdoka. A Jinsha folyó, a Jangce mellékfolyója, folyik át ezen a festői szurdokon.",
      ro: "Unul dintre cele mai adânci și mai spectaculoase canioane fluviale din lume. Râul Jinsha, un afluent al fluviului Yangtze, trece prin acest canion pitoresc.",
      en: "One of the deepest and most spectacular river canyons in the world. The Jinsha River, a tributary of the Yangtze River, passes through this scenic canyon."
    },
    facts: {
      de: ["Die Schlucht ist etwa 15 km lang.", "Maximale Tiefe von etwa 3.790 Metern von der Bergspitze bis zum Fluss.", "Ein beliebter Wanderweg führt durch die Schlucht."],
      hu: ["A szurdok körülbelül 15 km hosszú.", "Maximális mélysége körülbelül 3790 méter a hegycsúcstól a folyóig.", "Egy népszerű túraútvonal vezet át a szurdokon."],
      ro: ["Canionul are o lungime de aproximativ 15 km.", "Adâncime maximă de aproximativ 3.790 de metri de la vârful muntelui la râu.", "O potecă populară de drumeții trece prin canion."],
      en: ["The canyon is about 15 km long.", "Maximum depth of approximately 3,790 meters from mountain peak to river.", "A popular hiking trail passes through the gorge."]
    }, image: "/poi-images/tiger-leaping-gorge-nature-v2.webp"},
  {
    id: "yarlung-tsangpo-grand-canyon-nature-v2",
    type: "river",
    parent: "CN-XZ",
    coords: [95.31, 29.77],
    name: {
      de: "Yarlung Tsangpo Grand Canyon",
      hu: "Yarlung Tsangpo Grand Canyon",
      ro: "Marele Canion Yarlung Tsangpo",
      en: "Yarlung Tsangpo Grand Canyon"
    },
    description: {
      de: "Gilt als die tiefste Schlucht der Welt und etwas länger als der Grand Canyon in den Vereinigten Staaten. Der Yarlung Tsangpo Fluss fließt durch sie hindurch.",
      hu: "A világ legmélyebb szurdokának tartják, és valamivel hosszabb, mint az Egyesült Államokbeli Grand Canyon. A Yarlung Tsangpo folyó folyik át rajta.",
      ro: "Considerat cel mai adânc canion din lume și puțin mai lung decât Marele Canion din Statele Unite. Râul Yarlung Tsangpo curge prin el.",
      en: "Considered the deepest canyon in the world, and slightly longer than the Grand Canyon in the United States. The Yarlung Tsangpo River flows through it."
    },
    facts: {
      de: ["Durchschnittliche Tiefe von 2.268 Metern.", "Der Fluss wird in Indien zum Brahmaputra.", "Das Ökosystem des Canyons reicht von tropisch bis arktisch."],
      hu: ["Átlagos mélysége 2268 méter.", "A folyó Indiában Brahmaputra néven folytatódik.", "A kanyon ökoszisztémája a trópusitól az arktikusig terjed."],
      ro: ["Adâncime medie de 2.268 de metri.", "Râul devine Brahmaputra în India.", "Ecosistemul canionului variază de la tropical la arctic."],
      en: ["Average depth of 2,268 meters.", "The river becomes the Brahmaputra in India.", "The canyon's ecosystem ranges from tropical to arctic."]
    }, image: "/poi-images/yarlung-tsangpo-grand-canyon-nature-v2.webp"},
  {
    id: "lugu-lake-nature-v2",
    type: "lake",
    parent: "CN-YN",
    coords: [100.78, 27.71],
    name: {
      de: "Lugu-See",
      hu: "Lugu-tó",
      ro: "Lacul Lugu",
      en: "Lugu Lake"
    },
    description: {
      de: "Ein alpiner See an der Grenze zwischen den Provinzen Sichuan und Yunnan. Er ist bekannt für seine einzigartige Mosuo-Kultur, eine kleine ethnische Gruppe in China.",
      hu: "Alpesi tó Szecsuán és Jünnan tartományok határán. Egyedülálló mosuo kultúrájáról ismert, amely egy kis etnikai csoport Kínában.",
      ro: "Un lac alpin la granița dintre provinciile Sichuan și Yunnan. Este cunoscut pentru cultura sa unică Mosuo, un mic grup etnic din China.",
      en: "An alpine lake on the border between Sichuan and Yunnan provinces. It is known for its unique Mosuo culture, a small ethnic group in China."
    },
    facts: {
      de: ["Liegt auf einer Höhe von 2.690 Metern.", "Das Volk der Mosuo ist eine der wenigen matriarchalischen Gesellschaften der Welt.", "Besucher können in traditionellen 'Schweinemulden'-Booten fahren."],
      hu: ["2690 méteres magasságban fekszik.", "A mosuo nép a világ kevés matriarchális társadalmának egyike.", "A látogatók hagyományos 'disznóvályú' csónakokban utazhatnak."],
      ro: ["Situat la o altitudine de 2.690 de metri.", "Poporul Mosuo este una dintre puținele societăți matriarhale din lume.", "Vizitatorii pot face plimbări cu bărci tradiționale '猪槽船'."],
      en: ["Located at an altitude of 2,690 meters.", "The Mosuo people are one of the few matriarchal societies in the world.", "Visitors can ride in traditional 'pig trough' boats."]
    }, image: "/poi-images/lugu-lake-nature-v2.webp"},
  {
    id: "mount-hua-nature-v2",
    type: "mountain",
    parent: "CN-SN",
    coords: [110.09, 34.49],
    name: {
      de: "Huà Shān",
      hu: "Hua Shan",
      ro: "Muntele Hua",
      en: "Mount Hua"
    },
    description: {
      de: "Einer der Fünf Großen Berge Chinas, bekannt für seine steilen Klippen und den 'Plankenweg in den Himmel', der als einer der gefährlichsten Wanderwege der Welt gilt.",
      hu: "Kína Öt Nagy Hegyének egyike, meredek szikláiról és a 'Hidak az Ég felé' ösvényről ismert, amelyet a világ egyik legveszélyesebb túraútvonalának tartanak.",
      ro: "Unul dintre cei Cinci Mari Munți ai Chinei, cunoscut pentru stâncile sale abrupte și 'Plank Road in the Sky', considerat unul dintre cele mai periculoase trasee de drumeție din lume.",
      en: "One of China's Five Great Mountains, known for its sheer cliffs and the 'Plank Road in the Sky', considered one of the world's most dangerous hikes."
    },
    facts: {
      de: ["Hat fünf Hauptgipfel.", "Ein wichtiger daoistischer Berg.", "Seilbahnen bringen die Besucher jetzt zu den meisten Gipfeln."],
      hu: ["Öt fő csúcsa van.", "Fontos taoista hegy.", "A felvonók ma már a legtöbb csúcsra eljuttatják a látogatókat."],
      ro: ["Are cinci vârfuri principale.", "Un munte daoist important.", "Telecabinele transportă acum vizitatorii pe majoritatea vârfurilor."],
      en: ["It has five main peaks.", "An important Daoist mountain.", "Cable cars now take visitors to most of the peaks."]
    }, image: "/poi-images/mount-hua-nature-v2.webp"},
  {
    id: "kanas-lake-nature-v2",
    type: "lake",
    parent: "CN-XJ",
    coords: [87.03, 47.81],
    name: {
      de: "Kanas-See",
      hu: "Kanas-tó",
      ro: "Lacul Kanas",
      en: "Kanas Lake"
    },
    description: {
      de: "Ein alpiner See in der Präfektur Altay in der Autonomen Region Xinjiang. Er ist bekannt für seine wechselnden Farben und die Legende vom Kanas-See-Monster.",
      hu: "Alpesi tó Altaj prefektúrában, Hszincsiang Autonóm Területen. Változó színeiről és a Kanas-tavi szörny legendájáról ismert.",
      ro: "Un lac alpin în Prefectura Altay din Regiunea Autonomă Xinjiang. Este cunoscut pentru culorile sale schimbătoare și pentru legenda monstrului din Lacul Kanas.",
      en: "An alpine lake in the Altay Prefecture of Xinjiang Autonomous Region. It is known for its changing colors and the legend of the Kanas Lake Monster."
    },
    facts: {
      de: ["Der Name Kanas bedeutet 'schön und reich, geheimnisvoll' auf Mongolisch.", "Der See wurde durch Gletscheraktivität geformt.", "Die umliegende Landschaft ist eine Mischung aus sibirischer Taiga und zentralasiatischer Steppe."],
      hu: ["A Kanas név mongolul azt jelenti: 'szép és gazdag, titokzatos'.", "A tavat gleccsertevékenység alakította ki.", "A környező táj a szibériai tajga és a közép-ázsiai sztyeppe keveréke."],
      ro: ["Numele Kanas înseamnă 'frumos și bogat, misterios' în mongolă.", "Lacul a fost format de activitatea glaciară.", "Peisajul înconjurător este un amestec de taiga siberiană și stepă central-asiatică."],
      en: ["The name Kanas means 'beautiful and rich, mysterious' in Mongolian.", "The lake was formed by glacier activity.", "The surrounding landscape is a mix of Siberian taiga and Central Asian steppe."]
    }
  }
];

