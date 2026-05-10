import type { POI } from "./poi";

export const poiExtraSyriaNatureV2: POI[] = [
  {
    id: "euphrates-river-syria-nature-v2",
    type: "river",
    parent: "SY-DY",
    coords: [39.8166, 35.5333],
    name: { de: "Euphrat", hu: "Eufrátesz", ro: "Eufrat", en: "Euphrates" },
    description: {
      de: "Der Euphrat ist der längste und wichtigste Fluss Syriens, der als Lebensader durch die Wüste fließt.",
      hu: "Az Eufrátesz Szíria leghosszabb és legfontosabb folyója, amely életet adó vízi útként kanyarog a sivatagban.",
      ro: "Eufratul este cel mai lung și mai important râu din Siria, traversând deșertul ca o adevărată sursă de viață.",
      en: "The Euphrates is the longest and most important river in Syria, flowing as a lifeline through the desert."
    },
    facts: {
      de: ["Fließt von der Türkei nach Syrien", "Wichtig für die Landwirtschaft", "Bildet den Assad-See", "Historische Wiege der Zivilisation"],
      hu: ["Törökországból folyik Szíriába", "Kiemelkedő a mezőgazdaság számára", "Felduzzasztásával jött létre az Aszad-tó", "A civilizáció történelmi bölcsője"],
      ro: ["Curge din Turcia în Siria", "Esențial pentru agricultură", "Formează Lacul Assad", "Leagăn istoric al civilizației"],
      en: ["Flows from Turkey into Syria", "Crucial for agriculture", "Forms Lake Assad", "Historical cradle of civilization"]
    }, image: "/poi-images/euphrates-river-syria-nature-v2.webp"},
  {
    id: "orontes-river-nature-v2",
    type: "river",
    parent: "SY-HM",
    coords: [36.75, 35.1333],
    name: { de: "Orontes", hu: "Orontész", ro: "Orontes", en: "Orontes" },
    description: {
      de: "Der Orontes fließt durch Westsyrien und ist bekannt für seine historischen Wasserräder in der Stadt Hama.",
      hu: "Az Orontész Nyugat-Szírián folyik keresztül, és leginkább a Hamá városában található történelmi vízkerekeiről ismert.",
      ro: "Râul Orontes curge prin vestul Siriei și este faimos pentru roțile de apă istorice din orașul Hama.",
      en: "The Orontes River flows through western Syria and is famous for its historical water wheels in the city of Hama."
    },
    facts: {
      de: ["Fließt nach Norden", "Versorgt die Region Hama", "Wichtige Wasserquelle", "Bekannt als Nahr al-Asi"],
      hu: ["Észak felé folyik", "Hamá régióját látja el vízzel", "Fontos vízforrás", "Helyi neve Nahr al-Aszi"],
      ro: ["Curge spre nord", "Aprovizionează regiunea Hama", "Sursă vitală de apă", "Cunoscut sub numele de Nahr al-Asi"],
      en: ["Flows northwards", "Supplies the Hama region", "Vital water source", "Known locally as Nahr al-Asi"]
    }, image: "/poi-images/orontes-river-nature-v2.webp"},
  {
    id: "khabur-river-nature-v2",
    type: "river",
    parent: "SY-HA",
    coords: [40.75, 36.5],
    name: { de: "Chabur", hu: "Hábúr", ro: "Khabur", en: "Khabur" },
    description: {
      de: "Der Chabur ist der größte Nebenfluss des Euphrat in Syrien und prägt die fruchtbare Region Al-Dschasira.",
      hu: "A Hábúr az Eufrátesz legnagyobb szíriai mellékfolyója, amely a termékeny Al-Dzsazíra régiót formálja.",
      ro: "Khabur este cel mai mare afluent al Eufratului din Siria, definind regiunea fertilă Al-Jazira.",
      en: "The Khabur is the largest tributary of the Euphrates in Syria, shaping the fertile Al-Jazira region."
    },
    facts: {
      de: ["Größter Nebenfluss des Euphrat", "Zentrum alter Kulturen", "Bewässert den Nordosten", "Entspringt in der Türkei"],
      hu: ["Az Eufrátesz legnagyobb mellékfolyója", "Ősi kultúrák központja", "Északkelet-Szíriát öntözi", "Törökországban ered"],
      ro: ["Cel mai mare afluent al Eufratului", "Centru al culturilor antice", "Irigă nord-estul țării", "Izvorăște din Turcia"],
      en: ["Largest tributary of the Euphrates", "Center of ancient cultures", "Irrigates the northeast", "Originates in Turkey"]
    }, image: "/poi-images/khabur-river-nature-v2.webp"},
  {
    id: "lake-assad-nature-v2",
    type: "lake",
    parent: "SY-RA",
    coords: [38.3333, 36.0],
    name: { de: "Assad-See", hu: "Aszad-tó", ro: "Lacul Assad", en: "Lake Assad" },
    description: {
      de: "Der Assad-See ist der größte Stausee Syriens, der durch den Bau der Tabqa-Talsperre am Euphrat entstand.",
      hu: "Az Aszad-tó Szíria legnagyobb víztározója, amelyet a Tabka-gát felépítésével hoztak létre az Eufráteszen.",
      ro: "Lacul Assad este cel mai mare lac de acumulare din Siria, creat prin construirea barajului Tabqa pe Eufrat.",
      en: "Lake Assad is Syria's largest reservoir, created by the construction of the Tabqa Dam on the Euphrates."
    },
    facts: {
      de: ["Größter See des Landes", "Wichtig für die Stromerzeugung", "Bietet Lebensraum für Vögel", "Trinkwasserreservoir"],
      hu: ["Az ország legnagyobb tava", "Kiemelkedő az áramtermelésben", "Fontos madárélőhely", "Jelentős ivóvízbázis"],
      ro: ["Cel mai mare lac din țară", "Important pentru energia hidroelectrică", "Habitat pentru păsări", "Rezervor de apă potabilă"],
      en: ["Largest lake in the country", "Important for power generation", "Habitat for various birds", "Drinking water reservoir"]
    }, image: "/poi-images/lake-assad-nature-v2.webp"},
  {
    id: "lake-qattinah-nature-v2",
    type: "lake",
    parent: "SY-HI",
    coords: [36.65, 34.6666],
    name: { de: "Qattinah-See", hu: "Kattina-tó", ro: "Lacul Qattinah", en: "Lake Qattinah" },
    description: {
      de: "Der Qattinah-See ist ein historischer See südwestlich von Homs, dessen Staudamm teilweise aus der Antike stammt.",
      hu: "A Kattina-tó egy történelmi tó Homsz városától délnyugatra, amelynek gátja részben az ókorból származik.",
      ro: "Lacul Qattinah este un lac istoric la sud-vest de Homs, al cărui baraj datează parțial din antichitate.",
      en: "Lake Qattinah is a historical lake southwest of Homs, featuring a dam that partly dates back to antiquity."
    },
    facts: {
      de: ["Antiker Staudamm", "Liegt am Orontes", "Südwestlich von Homs", "Bedeutend für lokale Bewässerung"],
      hu: ["Ókori gátja van", "Az Orontész folyón található", "Homsztól délnyugatra fekszik", "Jelentős a helyi öntözésben"],
      ro: ["Baraj de origine antică", "Situat pe râul Orontes", "La sud-vest de Homs", "Crucial pentru irigațiile locale"],
      en: ["Ancient dam origins", "Located on the Orontes River", "Southwest of Homs", "Crucial for local irrigation"]
    }, image: "/poi-images/lake-qattinah-nature-v2.webp"},
  {
    id: "mount-hermon-syria-nature-v2",
    type: "mountain",
    parent: "SY-QU",
    coords: [35.85, 33.4166],
    name: { de: "Hermon-Berg", hu: "Hermon-hegy", ro: "Muntele Hermon", en: "Mount Hermon" },
    description: {
      de: "Der Hermon-Berg ist der höchste Punkt Syriens und bildet eine markante natürliche Grenze im Südwesten des Landes.",
      hu: "A Hermon-hegy Szíria legmagasabb pontja, amely látványos természetes határt képez az ország délnyugati részén.",
      ro: "Muntele Hermon este cel mai înalt punct din Siria și formează o frontieră naturală impresionantă în sud-vestul țării.",
      en: "Mount Hermon is the highest point in Syria, forming a striking natural border in the southwestern part of the country."
    },
    facts: {
      de: ["Höchster Punkt Syriens", "Im Winter schneebedeckt", "Grenzt an den Libanon", "Wichtige Süßwasserquelle"],
      hu: ["Szíria legmagasabb pontja", "Télen hó fedi", "Libanonnal határos", "Fontos édesvízforrás"],
      ro: ["Cel mai înalt punct din Siria", "Acoperit de zăpadă iarna", "La granița cu Libanul", "Sursă vitală de apă dulce"],
      en: ["Highest point in Syria", "Snow-capped in winter", "Borders Lebanon", "Vital freshwater source"]
    }, image: "/poi-images/mount-hermon-syria-nature-v2.webp"},
  {
    id: "jabal-al-druze-nature-v2",
    type: "mountain",
    parent: "SY-SU",
    coords: [36.7333, 32.6666],
    name: { de: "Dschebel ad-Durus", hu: "Dzsebel ed-Drúz", ro: "Jabal al-Druze", en: "Jabal al-Druze" },
    description: {
      de: "Das vulkanische Bergland Dschebel ad-Durus erhebt sich majestätisch in der südsyrischen Region As-Suwaida.",
      hu: "A vulkanikus Dzsebel ed-Drúz hegyvidék fenségesen magasodik a dél-szíriai Asz-Szuwajda régióban.",
      ro: "Regiunea vulcanică muntoasă Jabal al-Druze se înalță maiestuos în sudul Siriei, în guvernoratul As-Suwayda.",
      en: "The volcanic mountainous region of Jabal al-Druze rises majestically in the southern Syrian region of As-Suwayda."
    },
    facts: {
      de: ["Vulkanischen Ursprungs", "Heimat der Drusen", "Fruchtbare Vulkanböden", "Auch Jabal al-Arab genannt"],
      hu: ["Vulkanikus eredetű", "A drúz közösség otthona", "Termékeny vulkáni talaj", "Dzsebel el-Arab néven is ismert"],
      ro: ["Origine vulcanică", "Căminul comunității druze", "Soluri vulcanice fertile", "Cunoscut și ca Jabal al-Arab"],
      en: ["Volcanic origin", "Home to the Druze community", "Fertile volcanic soils", "Also known as Jabal al-Arab"]
    }, image: "/poi-images/jabal-al-druze-nature-v2.webp"},
  {
    id: "anti-lebanon-mountains-syria-nature-v2",
    type: "mountain",
    parent: "SY-RD",
    coords: [36.2333, 33.8833],
    name: { de: "Anti-Libanon", hu: "Antilibanon", ro: "Munții Anti-Liban", en: "Anti-Lebanon Mountains" },
    description: {
      de: "Der Anti-Libanon ist ein schroffer Gebirgszug, der eine natürliche Barriere zwischen Syrien und dem Libanon bildet.",
      hu: "Az Antilibanon egy zord hegylánc, amely természetes akadályt képez Szíria és Libanon között.",
      ro: "Anti-Libanul este un lanț muntos accidentat care formează o barieră naturală între Siria și Liban.",
      en: "The Anti-Lebanon Mountains are a rugged mountain range forming a natural barrier between Syria and Lebanon."
    },
    facts: {
      de: ["Grenzgebirge zum Libanon", "Verläuft von Nord nach Süd", "Karg und felsig", "Zuhause seltener Pflanzen"],
      hu: ["Határhegység Libanonnal", "Észak-déli irányú", "Kopár és sziklás", "Ritka növények élőhelye"],
      ro: ["Munți de graniță cu Libanul", "Se întind de la nord la sud", "Pietros și arid", "Adăpostește plante rare"],
      en: ["Border mountains with Lebanon", "Runs north to south", "Barren and rocky", "Home to rare plants"]
    }, image: "/poi-images/anti-lebanon-mountains-syria-nature-v2.webp"},
  {
    id: "syrian-coastal-mountains-nature-v2",
    type: "mountain",
    parent: "SY-LA",
    coords: [36.1666, 35.25],
    name: { de: "Ansarija-Berge", hu: "Szíriai-partvidéki-hegység", ro: "Munții Al-Nusayriyah", en: "Syrian Coastal Mountain Range" },
    description: {
      de: "Die dicht bewaldeten Ansarija-Berge verlaufen parallel zur Mittelmeerküste und fangen reichlich Niederschlag auf.",
      hu: "A sűrűn erdősült Szíriai-partvidéki-hegység a Földközi-tenger partjával párhuzamosan fut, és bőséges csapadékot kap.",
      ro: "Munții Al-Nusayriyah, bogat împăduriți, se întind paralel cu coasta mediteraneană și captează precipitații abundente.",
      en: "The heavily forested Syrian Coastal Mountain Range runs parallel to the Mediterranean coast and receives abundant rainfall."
    },
    facts: {
      de: ["Grünste Region Syriens", "Parallel zur Küste", "Historische Burgen in der Region", "Auch Dschebel Aansariye genannt"],
      hu: ["Szíria legzöldebb régiója", "A parttal párhuzamos", "Történelmi várak a régióban", "Dzsebel Anszarija néven is ismert"],
      ro: ["Cea mai verde regiune din Siria", "Paralel cu coasta", "Castele istorice în regiune", "Cunoscut și ca Jabal Ansariyah"],
      en: ["Greenest region in Syria", "Parallel to the coast", "Historical castles in the region", "Also called Jabal Ansariyah"]
    }, image: "/poi-images/syrian-coastal-mountains-nature-v2.webp"},
  {
    id: "jabal-al-bishri-nature-v2",
    type: "mountain",
    parent: "SY-DY",
    coords: [39.25, 35.3333],
    name: { de: "Dschebel al-Bischri", hu: "Dzsebel el-Bisri", ro: "Jabal al-Bishri", en: "Jabal al-Bishri" },
    description: {
      de: "Der Dschebel al-Bischri ist ein weitläufiges Hochland in der syrischen Wüste, das von Nomadenstämmen durchquert wird.",
      hu: "A Dzsebel el-Bisri egy kiterjedt fennsík a szíriai sivatagban, amelyet évszázadok óta nomád törzsek járnak be.",
      ro: "Jabal al-Bishri este un platou extins în deșertul sirian, traversat istoric de triburi nomade.",
      en: "Jabal al-Bishri is an extensive highland in the Syrian desert, historically traversed by nomadic tribes."
    },
    facts: {
      de: ["Liegt in der Syrischen Wüste", "Historisches Nomadenland", "Reich an Asphaltquellen", "Raue Wüstenlandschaft"],
      hu: ["A Szíriai-sivatagban található", "Történelmi nomád vidék", "Aszfaltforrásokban gazdag", "Zord sivatagi táj"],
      ro: ["Situat în deșertul sirian", "Ținut nomad istoric", "Bogat în izvoare de asfalt", "Peisaj deșertic aspru"],
      en: ["Located in the Syrian Desert", "Historical nomadic land", "Rich in asphalt springs", "Rugged desert landscape"]
    }, image: "/poi-images/jabal-al-bishri-nature-v2.webp"},
  {
    id: "barada-river-nature-v2",
    type: "river",
    parent: "SY-RD",
    coords: [36.2833, 33.5166],
    name: { de: "Barada", hu: "Barada", ro: "Barada", en: "Barada" },
    description: {
      de: "Der Barada ist der Hauptfluss von Damaskus und erschafft die berühmte Ghouta-Oase, die der Stadt das Leben sichert.",
      hu: "A Barada Damaszkusz fő folyója, amely létrehozza a híres Gúta oázist, ezzel életben tartva a várost.",
      ro: "Barada este râul principal al Damascului, dând naștere faimoasei oaze Ghouta, vitală pentru oraș.",
      en: "The Barada is the main river of Damascus, creating the famous Ghouta oasis that sustains the city."
    },
    facts: {
      de: ["Fließt durch Damaskus", "Speist die Ghouta-Oase", "Historische Bedeutung", "Leidet unter Wassermangel"],
      hu: ["Damaszkuszon folyik át", "A Gúta oázist táplálja", "Kiemelkedő történelmi jelentőség", "Vízhiánnyal küzd"],
      ro: ["Traversează Damascul", "Alimentează oaza Ghouta", "Importanță istorică majoră", "Suferă de penurie de apă"],
      en: ["Flows through Damascus", "Feeds the Ghouta oasis", "Major historical importance", "Suffers from water scarcity"]
    }, image: "/poi-images/barada-river-nature-v2.webp"},
  {
    id: "jabal-zawiya-nature-v2",
    type: "mountain",
    parent: "SY-ID",
    coords: [36.6, 35.7333],
    name: { de: "Dschebel Sawiye", hu: "Dzsebel Závija", ro: "Jabal Zawiya", en: "Jabal Zawiya" },
    description: {
      de: "Der Dschebel Sawiye ist ein Kalksteinmassiv in der Provinz Idlib, das für seine antiken toten Städte bekannt ist.",
      hu: "A Dzsebel Závija egy mészkőhegység Idlib tartományban, amely az ott található ókori holt városokról híres.",
      ro: "Jabal Zawiya este un masiv de calcar din provincia Idlib, renumit pentru orașele sale antice moarte.",
      en: "Jabal Zawiya is a limestone massif in the Idlib province, renowned for its ancient dead cities."
    },
    facts: {
      de: ["Teil des Belus-Massivs", "Heimat vieler Ruinen", "Höchster Gipfel über 800m", "Kalksteingebirge"],
      hu: ["A Belus-hegység része", "Számos rom otthona", "Legmagasabb csúcsa 800m felett", "Mészkőhegység"],
      ro: ["Face parte din Masivul Belus", "Găzduiește multe ruine", "Cel mai înalt vârf are peste 800m", "Masiv de calcar"],
      en: ["Part of the Belus Massif", "Home to many ruins", "Highest peak over 800m", "Limestone mountain"]
    }, image: "/poi-images/jabal-zawiya-nature-v2.webp"},
  {
    id: "balikh-river-nature-v2",
    type: "river",
    parent: "SY-RA",
    coords: [39.0833, 35.95],
    name: { de: "Balich", hu: "Balih", ro: "Balikh", en: "Balikh" },
    description: {
      de: "Der Balich ist ein Nebenfluss des Euphrat, der bei der Stadt ar-Raqqa mündet und in der Antike dicht besiedelt war.",
      hu: "A Balih az Eufrátesz egyik mellékfolyója, amely Rakka városánál ömlik a fő folyóba, és az ókorban sűrűn lakott volt.",
      ro: "Balikh este un afluent al Eufratului, care se varsă lângă orașul Raqqa și a fost dens populat în antichitate.",
      en: "The Balikh is a tributary of the Euphrates that joins the main river near Raqqa and was densely populated in antiquity."
    },
    facts: {
      de: ["Nebenfluss des Euphrat", "Mündet bei Raqqa", "Wichtig in der Antike", "Entspringt an der türkischen Grenze"],
      hu: ["Az Eufrátesz mellékfolyója", "Rakkánál torkollik", "Az ókorban jelentős volt", "A török határnál ered"],
      ro: ["Afluent al Eufratului", "Se varsă lângă Raqqa", "Important în antichitate", "Izvorăște la granița turcă"],
      en: ["Tributary of the Euphrates", "Joins near Raqqa", "Important in antiquity", "Originates at the Turkish border"]
    }, image: "/poi-images/balikh-river-nature-v2.webp"},
  {
    id: "lake-muzairib-nature-v2",
    type: "lake",
    parent: "SY-DR",
    coords: [36.0166, 32.7],
    name: { de: "Muzairib-See", hu: "Muzairib-tó", ro: "Lacul Muzairib", en: "Lake Muzairib" },
    description: {
      de: "Der Muzairib-See ist ein wichtiges Süßwassergewässer im Süden Syriens, das durch zahlreiche natürliche Quellen gespeist wird.",
      hu: "A Muzairib-tó egy fontos édesvízi tó Szíria déli részén, amelyet számos természetes forrás táplál.",
      ro: "Lacul Muzairib este o importantă sursă de apă dulce din sudul Siriei, alimentat de numeroase izvoare naturale.",
      en: "Lake Muzairib is an important freshwater lake in southern Syria, fed by numerous natural springs."
    },
    facts: {
      de: ["Liegt in der Region Daraa", "Beliebtes Ausflugsziel", "Wichtig für die Landwirtschaft", "Von Quellen gespeist"],
      hu: ["Daraa régióban található", "Népszerű kirándulóhely", "Fontos a mezőgazdaság számára", "Források táplálják"],
      ro: ["Situat în regiunea Daraa", "Destinație populară", "Important pentru agricultură", "Alimentat de izvoare"],
      en: ["Located in the Daraa region", "Popular excursion destination", "Important for agriculture", "Fed by springs"]
    }, image: "/poi-images/lake-muzairib-nature-v2.webp"},
  {
    id: "jabal-qasioun-nature-v2",
    type: "mountain",
    parent: "SY-DI",
    coords: [36.2666, 33.55],
    name: { de: "Dschebel Qasiyun", hu: "Kászijún-hegy", ro: "Muntele Qasioun", en: "Mount Qasioun" },
    description: {
      de: "Der Dschebel Qasiyun erhebt sich direkt über Damaskus und bietet einen unvergleichlichen Panoramablick auf die gesamte Hauptstadt.",
      hu: "A Kászijún-hegy közvetlenül Damaszkusz fölé magasodik, és páratlan panorámát nyújt az egész fővárosra.",
      ro: "Muntele Qasioun se înalță direct deasupra Damascului, oferind o vedere panoramică inegalabilă asupra întregii capitale.",
      en: "Mount Qasioun rises directly above Damascus, offering an unparalleled panoramic view of the entire capital city."
    },
    facts: {
      de: ["Überblickt Damaskus", "Religiös bedeutsam", "Beliebter Aussichtspunkt", "Teil des Anti-Libanon"],
      hu: ["Damaszkusz fölé magasodik", "Vallási szempontból jelentős", "Népszerű kilátóhely", "Az Antilibanon része"],
      ro: ["Domină Damascul", "Semnificație religioasă", "Punct de belvedere popular", "Parte din Anti-Liban"],
      en: ["Overlooks Damascus", "Religiously significant", "Popular viewpoint", "Part of the Anti-Lebanon range"]
    }
  },
  {
    id: "baer-bassit-forest-nature-v2",
    type: "forest",
    parent: "SY-LA",
    coords: [35.9833, 35.85],
    name: { de: "Baer-Bassit-Wald", hu: "Baer-Basszit erdő", ro: "Pădurea Baer-Bassit", en: "Baer-Bassit Forest" },
    description: {
      de: "Der Baer-Bassit-Wald erstreckt sich entlang der Mittelmeerküste und ist eine der letzten großen zusammenhängenden Waldflächen Syriens.",
      hu: "A Baer-Basszit erdő a Földközi-tenger partja mentén húzódik, és Szíria egyik utolsó nagy kiterjedésű, egybefüggő erdősége.",
      ro: "Pădurea Baer-Bassit se întinde de-a lungul coastei mediteraneene și este una dintre ultimele suprafețe forestiere mari din Siria.",
      en: "The Baer-Bassit Forest stretches along the Mediterranean coast and is one of the last large continuous forest areas in Syria."
    },
    facts: {
      de: ["Mediterrane Vegetation", "Beliebt für Ökotourismus", "Küstennahe Wälder", "Reiche Biodiversität"],
      hu: ["Mediterrán növényzet", "Népszerű ökoturisztikai célpont", "Partmenti erdők", "Gazdag biodiverzitás"],
      ro: ["Vegetație mediteraneană", "Populară pentru ecoturism", "Păduri de coastă", "Biodiversitate bogată"],
      en: ["Mediterranean vegetation", "Popular for ecotourism", "Coastal forests", "Rich biodiversity"]
    }, image: "/poi-images/baer-bassit-forest-nature-v2.webp"},
  {
    id: "slenfeh-forest-nature-v2",
    type: "forest",
    parent: "SY-LA",
    coords: [36.1833, 35.5833],
    name: { de: "Slenfeh-Wald", hu: "Szlenfe-erdő", ro: "Pădurea Slenfeh", en: "Slenfeh Forest" },
    description: {
      de: "Die kühlen Wälder von Slenfeh in den Ansarija-Bergen bieten an heißen Sommertagen einen erfrischenden Rückzugsort.",
      hu: "A Szíriai-partvidéki-hegységben található Szlenfe hűvös erdői frissítő menedéket nyújtanak a forró nyári napokon.",
      ro: "Pădurile răcoroase din Slenfeh, aflate în Munții Al-Nusayriyah, oferă un refugiu revigorant în zilele fierbinți de vară.",
      en: "The cool forests of Slenfeh in the Syrian Coastal Mountain Range offer a refreshing retreat on hot summer days."
    },
    facts: {
      de: ["Hochgelegene Wälder", "Zedern und Tannen", "Sommerfrische", "Nahe der Burg Salah ed-Din"],
      hu: ["Magasan fekvő erdők", "Cédrusok és fenyők", "Nyári menedék", "Szaladin várának közelében"],
      ro: ["Păduri de mare altitudine", "Cedri și brazi", "Refugiu de vară", "Aproape de Castelul lui Salah al-Din"],
      en: ["High-altitude forests", "Cedars and firs", "Summer resort", "Near Salah Ed-Din Castle"]
    }, image: "/poi-images/slenfeh-forest-nature-v2.webp"},
  {
    id: "afrin-river-nature-v2",
    type: "river",
    parent: "SY-HL",
    coords: [36.8666, 36.5],
    name: { de: "Afrin", hu: "Afrin", ro: "Afrin", en: "Afrin" },
    description: {
      de: "Der Fluss Afrin durchfließt den von Olivenhainen geprägten Nordwesten Syriens, bevor er in die Türkei zurückkehrt.",
      hu: "Az Afrin folyó átszeli Szíria olajfaligetekkel borított északnyugati részét, mielőtt visszatérne Törökországba.",
      ro: "Râul Afrin curge prin nord-vestul Siriei, o regiune dominată de plantații de măslini, înainte de a se întoarce în Turcia.",
      en: "The Afrin River flows through the olive-grove-dominated northwest of Syria before returning to Turkey."
    },
    facts: {
      de: ["Fließt durch die Region Afrin", "Nebenfluss des Orontes", "Umgeben von Olivenbäumen", "Entspringt im Taurusgebirge"],
      hu: ["Afrin régióján folyik át", "Az Orontész mellékfolyója", "Olajfák övezik", "A Torosz-hegységben ered"],
      ro: ["Curge prin regiunea Afrin", "Afluent al râului Orontes", "Înconjurat de măslini", "Izvorăște din Munții Taurus"],
      en: ["Flows through the Afrin region", "Tributary of the Orontes", "Surrounded by olive trees", "Originates in the Taurus Mountains"]
    }, image: "/poi-images/afrin-river-nature-v2.webp"},
  {
    id: "al-sinn-river-nature-v2",
    type: "river",
    parent: "SY-TA",
    coords: [35.95, 35.2666],
    name: { de: "Al-Sinn", hu: "Al-Szinn", ro: "Al-Sinn", en: "Al-Sinn River" },
    description: {
      de: "Der kurze, aber wasserreiche Al-Sinn-Fluss mündet in das Mittelmeer und ist entscheidend für die Küstenbewässerung.",
      hu: "A rövid, de bővizű Al-Szinn folyó a Földközi-tengerbe torkollik, és létfontosságú a partmenti öntözés számára.",
      ro: "Scurtul, dar bogatul râu Al-Sinn se varsă în Marea Mediterană și este crucial pentru irigațiile de coastă.",
      en: "The short but water-rich Al-Sinn River flows into the Mediterranean Sea and is crucial for coastal irrigation."
    },
    facts: {
      de: ["Fließt ins Mittelmeer", "Nur wenige Kilometer lang", "Sichert die Wasserversorgung", "Entspringt starken Karstquellen"],
      hu: ["A Földközi-tengerbe ömlik", "Csak néhány kilométer hosszú", "Biztosítja a vízellátást", "Erős karsztforrásokból ered"],
      ro: ["Se varsă în Marea Mediterană", "Are doar câțiva kilometri lungime", "Asigură alimentarea cu apă", "Izvorăște din izvoare carstice"],
      en: ["Flows into the Mediterranean", "Only a few kilometers long", "Secures water supply", "Originates from strong karst springs"]
    }, image: "/poi-images/al-sinn-river-nature-v2.webp"},
  {
    id: "tigris-river-syria-nature-v2",
    type: "river",
    parent: "SY-HA",
    coords: [42.3666, 37.1],
    name: { de: "Tigris", hu: "Tigris", ro: "Tigru", en: "Tigris" },
    description: {
      de: "Der Tigris berührt Syrien nur an einem kurzen Grenzabschnitt im äußersten Nordosten und bildet die Grenze zum Irak.",
      hu: "A Tigris folyó csak egy rövid határszakaszon érinti Szíriát a legészakkeletibb csücsökben, határt képezve Irakkal.",
      ro: "Tigrul atinge Siria doar pe o scurtă porțiune de graniță în extremitatea nord-estică, formând granița cu Irakul.",
      en: "The Tigris River touches Syria only along a short border section in the extreme northeast, forming the border with Iraq."
    },
    facts: {
      de: ["Bildet einen Teil der Grenze", "Fließt ins Zweistromland", "Historisch extrem bedeutsam", "Nur kurz in Syrien"],
      hu: ["A határ egy részét képezi", "Mezopotámiába folyik", "Történelmileg rendkívül fontos", "Csak rövid szakaszon szíriai"],
      ro: ["Formează o parte a graniței", "Curge spre Mesopotamia", "Extrem de important istoric", "Doar pe o distanță scurtă în Siria"],
      en: ["Forms part of the border", "Flows into Mesopotamia", "Historically extremely significant", "Only briefly in Syria"]
    }
  }
];
