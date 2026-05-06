// @ts-nocheck
import type { POI } from "./poi";

export const poiExtraEgyptNatureV2: POI[] = [
  {
    id: "nilus-river-nature-v2",
    type: "river",
    parent: "EG-C",
    coords: [31.13, 30.06],
    name: { de: "Nil", hu: "Nílus", ro: "Nil", en: "Nile" },
    description: { de: "Der längste Fluss der Welt, Lebensader Ägyptens.", hu: "A világ leghosszabb folyója, Egyiptom éltető ere.", ro: "Cel mai lung fluviu din lume, linia vitală a Egiptului.", en: "The longest river in the world, the lifeline of Egypt." },
    facts: {
      de: ["Fließt nach Norden", "Mündet ins Mittelmeer"],
      hu: ["Észak felé folyik", "A Földközi-tengerbe ömlik"],
      ro: ["Curge spre nord", "Se varsă în Marea Mediterană"],
      en: ["Flows northward", "Flows into the Mediterranean Sea"]
    }, image: "/poi-images/nilus-river-nature-v2.webp"},
  {
    id: "nasser-see-lake-nature-v2",
    type: "lake",
    parent: "EG-ASN",
    coords: [32.90, 22.80],
    name: { de: "Nasser-Stausee", hu: "Nasszer-tó", ro: "Lacul Nasser", en: "Lake Nasser" },
    description: { de: "Ein riesiger Stausee im Süden Ägyptens.", hu: "Egy hatalmas mesterséges tó Egyiptom déli részén.", ro: "Un lac artificial imens în sudul Egiptului.", en: "A massive reservoir in southern Egypt." },
    facts: {
      de: ["Durch den Assuan-Staudamm entstanden", "Einer der größten Stauseen der Welt"],
      hu: ["Az Asszuáni-gát hozta létre", "A világ egyik legnagyobb mesterséges tava"],
      ro: ["Creat de Barajul Assuan", "Unul dintre cele mai mari lacuri artificiale din lume"],
      en: ["Created by the Aswan High Dam", "One of the largest reservoirs in the world"]
    }, image: "/poi-images/nasser-see-lake-nature-v2.webp"},
  {
    id: "rotes-meer-sea-nature-v2",
    type: "sea",
    parent: "EG-BS",
    coords: [33.50, 24.50],
    name: { de: "Rotes Meer", hu: "Vörös-tenger", ro: "Marea Roșie", en: "Red Sea" },
    description: { de: "Ein Nebenmeer des Indischen Ozeans zwischen Afrika und Asien.", hu: "Az Indiai-óceán melléktengere Afrika és Ázsia között.", ro: "O mare a Oceanului Indian între Africa și Asia.", en: "An inlet of the Indian Ocean between Africa and Asia." },
    facts: {
      de: ["Bekannt für Korallenriffe", "Sehr salzhaltiges Wasser"],
      hu: ["Korallzátonyairól híres", "Nagyon sós víz"],
      ro: ["Cunoscută pentru recifele de corali", "Apă foarte sărată"],
      en: ["Known for coral reefs", "Very salty water"]
    }, image: "/poi-images/rotes-meer-sea-nature-v2.webp"},
  {
    id: "sinai-gebirge-mountain-nature-v2",
    type: "mountain",
    parent: "EG-SIN",
    coords: [33.95, 28.50],
    name: { de: "Sinai-Gebirge", hu: "Sínai-hegység", ro: "Munții Sinai", en: "Sinai Mountains" },
    description: { de: "Eine Gebirgskette auf der Halbinsel Sinai.", hu: "Hegységrendszer a Sínai-félszigeten.", ro: "Un lanț muntos pe Peninsula Sinai.", en: "A mountain range on the Sinai Peninsula." },
    facts: {
      de: ["Historisch bedeutsam", "Wüstenklima"],
      hu: ["Történelmileg jelentős", "Sivatagi éghajlat"],
      ro: ["Istoric semnificativ", "Climat deșertic"],
      en: ["Historically significant", "Desert climate"]
    }, image: "/poi-images/sinai-gebirge-mountain-nature-v2.webp"},
  {
    id: "qattara-depression-lake-nature-v2",
    type: "lake",
    parent: "EG-MT",
    coords: [27.00, 29.50],
    name: { de: "Qattara-Senke", hu: "Kattara-mélyföld", ro: "Depresiunea Qattara", en: "Qattara Depression" },
    description: { de: "Eine tiefliegende Senke in der Libyschen Wüste.", hu: "Mélyföld a Líbiai-sivatagban.", ro: "O depresiune adâncă în Deșertul Libian.", en: "A deep basin in the Libyan Desert." },
    facts: {
      de: ["Unter dem Meeresspiegel", "Salzseen und Sümpfe"],
      hu: ["Tengerszint alatti", "Sós tavak és mocsarak"],
      ro: ["Sub nivelul mării", "Lacuri sărate și mlaștini"],
      en: ["Below sea level", "Salt lakes and marshes"]
    }, image: "/poi-images/qattara-depression-lake-nature-v2.webp"},
  {
    id: "siwa-oase-lake-nature-v2",
    type: "lake",
    parent: "EG-MT",
    coords: [25.50, 29.20],
    name: { de: "Siwa-Oase", hu: "Siwa-oázis", ro: "Oaza Siwa", en: "Siwa Oasis" },
    description: { de: "Eine isolierte Oase in der Wüste mit Salzseen.", hu: "Elszigetelt oázis a sivatagban, sós tavakkal.", ro: "O oază izolată în deșert cu lacuri sărate.", en: "An isolated oasis in the desert with salt lakes." },
    facts: {
      de: ["Berühmt für Dattelpalmen", "Alte Traditionen"],
      hu: ["Datolyapálmáiról híres", "Régi hagyományok"],
      ro: ["Faimoasă pentru palmieri", "Tradiții vechi"],
      en: ["Famous for date palms", "Ancient traditions"]
    }, image: "/poi-images/siwa-oase-lake-nature-v2.webp"},
  {
    id: "gebel-elba-mountain-nature-v2",
    type: "mountain",
    parent: "EG-RS",
    coords: [36.30, 22.20],
    name: { de: "Gebel Elba", hu: "Gebel Elba", ro: "Gebel Elba", en: "Gebel Elba" },
    description: { de: "Ein Berg im Südosten Ägyptens mit hoher Biodiversität.", hu: "Hegy Egyiptom délkeleti részén, nagy biológiai sokféleséggel.", ro: "Un munte în sud-estul Egiptului cu biodiversitate ridicată.", en: "A mountain in southeast Egypt with high biodiversity." },
    facts: {
      de: ["Nationalparkgebiet", "Nebelwald-ähnlich"],
      hu: ["Nemzeti park terület", "Ködös erdőhöz hasonló"],
      ro: ["Zonă de parc național", "Similar cu pădurea cețoasă"],
      en: ["National park area", "Similar to cloud forest"]
    }, image: "/poi-images/gebel-elba-mountain-nature-v2.webp"},
  {
    id: "baris-oase-lake-nature-v2",
    type: "lake",
    parent: "EG-WAD",
    coords: [30.50, 24.50],
    name: { de: "Baris-Oase", hu: "Baris-oázis", ro: "Oaza Baris", en: "Baris Oasis" },
    description: { de: "Eine Oase in der Westlichen Wüste.", hu: "Oázis a Nyugati-sivatagban.", ro: "O oază în Deșertul de Vest.", en: "An oasis in the Western Desert." },
    facts: {
      de: ["Landwirtschaftlich genutzt", "Teil der Kharga-Oasen"],
      hu: ["Mezőgazdasági terület", "A Kharga-oázisok része"],
      ro: ["Utilizată agricol", "Parte a oazelor Kharga"],
      en: ["Used for agriculture", "Part of the Kharga oases"]
    }, image: "/poi-images/baris-oase-lake-nature-v2.webp"},
  {
    id: "bahariya-oase-lake-nature-v2",
    type: "lake",
    parent: "EG-MT",
    coords: [28.90, 28.35],
    name: { de: "Bahariya-Oase", hu: "Baharija-oázis", ro: "Oaza Bahariya", en: "Bahariya Oasis" },
    description: { de: "Oase in der Westlichen Wüste mit heißen Quellen.", hu: "Oázis a Nyugati-sivatagban, meleg vizű forrásokkal.", ro: "Oază în Deșertul de Vest cu izvoare termale.", en: "Oasis in the Western Desert with hot springs." },
    facts: {
      de: ["Funde von Dinosaurier-Fossilien", "Thermalquellen"],
      hu: ["Dinoszaurusz-fosszíliák leletei", "Termálforrások"],
      ro: ["Descoperiri de fosile de dinozaur", "Izvoare termale"],
      en: ["Discovery of dinosaur fossils", "Thermal springs"]
    }, image: "/poi-images/bahariya-oase-lake-nature-v2.webp"},
  {
    id: "farafra-oase-lake-nature-v2",
    type: "lake",
    parent: "EG-WAD",
    coords: [27.90, 27.00],
    name: { de: "Farafra-Oase", hu: "Farafra-oázis", ro: "Oaza Farafra", en: "Farafra Oasis" },
    description: { de: "Bekannt für die Weiße Wüste in der Nähe.", hu: "A közeli Fehér-sivatagról ismert.", ro: "Cunoscută pentru Deșertul Alb din apropiere.", en: "Known for the White Desert nearby." },
    facts: {
      de: ["Weiße Kreideformationen", "Einzigartige Landschaft"],
      hu: ["Fehér krétaformációk", "Egyedi táj"],
      ro: ["Formațiuni de cretă albă", "Peisaj unic"],
      en: ["White chalk formations", "Unique landscape"]
    }, image: "/poi-images/farafra-oase-lake-nature-v2.webp"},
  {
    id: "dakhla-oase-lake-nature-v2",
    type: "lake",
    parent: "EG-WAD",
    coords: [29.00, 25.50],
    name: { de: "Dakhla-Oase", hu: "Dakhla-oázis", ro: "Oaza Dakhla", en: "Dakhla Oasis" },
    description: { de: "Eine fruchtbare Oase in der Westlichen Wüste.", hu: "Termékeny oázis a Nyugati-sivatagban.", ro: "O oază fertilă în Deșertul de Vest.", en: "A fertile oasis in the Western Desert." },
    facts: {
      de: ["Viele kleine Dörfer", "Landwirtschaft"],
      hu: ["Sok kis falu", "Mezőgazdaság"],
      ro: ["Multe sate mici", "Agricultură"],
      en: ["Many small villages", "Agriculture"]
    }, image: "/poi-images/dakhla-oase-lake-nature-v2.webp"},
  {
    id: "kharga-oase-lake-nature-v2",
    type: "lake",
    parent: "EG-WAD",
    coords: [30.55, 25.45],
    name: { de: "Kharga-Oase", hu: "Kharga-oázis", ro: "Oaza Kharga", en: "Kharga Oasis" },
    description: { de: "Die größte Oase in der Westlichen Wüste Ägyptens.", hu: "A legnagyobb oázis Egyiptom Nyugati-sivatagában.", ro: "Cea mai mare oază din Deșertul de Vest al Egiptului.", en: "The largest oasis in Egypt's Western Desert." },
    facts: {
      de: ["Historischer Handelsort", "Wasserquellen"],
      hu: ["Történelmi kereskedelmi hely", "Vízforrások"],
      ro: ["Loc istoric de comerț", "Surse de apă"],
      en: ["Historic trading post", "Water sources"]
    }, image: "/poi-images/kharga-oase-lake-nature-v2.webp"},
  {
    id: "niltal-delta-river-nature-v2",
    type: "river",
    parent: "EG-C",
    coords: [31.20, 30.80],
    name: { de: "Nildelta", hu: "Nílus-delta", ro: "Delta Nilului", en: "Nile Delta" },
    description: { de: "Das fruchtbare Mündungsgebiet des Nils.", hu: "A Nílus termékeny torkolatvidéke.", ro: "Zona fertilă a estuarului Nilului.", en: "The fertile alluvial plain where the Nile river flows." },
    facts: {
      de: ["Sehr dicht besiedelt", "Wichtige Agrarregion"],
      hu: ["Nagyon sűrűn lakott", "Fontos mezőgazdasági régió"],
      ro: ["Foarte dens populată", "Regiune agricolă importantă"],
      en: ["Very densely populated", "Important agricultural region"]
    }, image: "/poi-images/niltal-delta-river-nature-v2.webp"},
  {
    id: "burullus-see-lake-nature-v2",
    type: "lake",
    parent: "EG-KFS",
    coords: [30.80, 31.40],
    name: { de: "Burullus-See", hu: "Burullus-tó", ro: "Lacul Burullus", en: "Lake Burullus" },
    description: { de: "Ein Brackwassersee im Nildelta.", hu: "Sós vizű tó a Nílus-deltában.", ro: "Un lac cu apă salmastră în Delta Nilului.", en: "A brackish lake in the Nile Delta." },
    facts: {
      de: ["Naturschutzgebiet", "Wichtiges Feuchtgebiet"],
      hu: ["Természetvédelmi terület", "Fontos vizes élőhely"],
      ro: ["Rezervație naturală", "Zonă umedă importantă"],
      en: ["Nature reserve", "Important wetland"]
    }, image: "/poi-images/burullus-see-lake-nature-v2.webp"},
  {
    id: "manzala-see-lake-nature-v2",
    type: "lake",
    parent: "EG-DK",
    coords: [32.00, 31.30],
    name: { de: "Manzala-See", hu: "Manzala-tó", ro: "Lacul Manzala", en: "Lake Manzala" },
    description: { de: "Der größte Lagunensee im Nildelta.", hu: "A legnagyobb lagúna a Nílus-deltában.", ro: "Cea mai mare lagună din Delta Nilului.", en: "The largest lagoon in the Nile Delta." },
    facts: {
      de: ["Fischereiregion", "Salzhaltig"],
      hu: ["Halászati régió", "Sós vizű"],
      ro: ["Regiune piscicolă", "Salină"],
      en: ["Fishing region", "Saline"]
    }, image: "/poi-images/manzala-see-lake-nature-v2.webp"},
  {
    id: "idku-see-lake-nature-v2",
    type: "lake",
    parent: "EG-BH",
    coords: [30.20, 31.30],
    name: { de: "Idku-See", hu: "Idku-tó", ro: "Lacul Idku", en: "Lake Idku" },
    description: { de: "Ein flacher See im nördlichen Nildelta.", hu: "Sekély tó az északi Nílus-deltában.", ro: "Un lac puțin adânc în nordul Deltei Nilului.", en: "A shallow lake in the northern Nile Delta." },
    facts: {
      de: ["Brackwasser", "Wasservogel-Habitat"],
      hu: ["Sós víz", "Vízi madarak élőhelye"],
      ro: ["Apă salmastră", "Habitat pentru păsări acvatice"],
      en: ["Brackish water", "Waterfowl habitat"]
    }, image: "/poi-images/idku-see-lake-nature-v2.webp"},
  {
    id: "mariut-see-lake-nature-v2",
    type: "lake",
    parent: "EG-ALX",
    coords: [29.90, 31.10],
    name: { de: "Mariut-See", hu: "Mariut-tó", ro: "Lacul Mariut", en: "Lake Mariut" },
    description: { de: "Ein See südlich von Alexandria.", hu: "Alexandriától délre fekvő tó.", ro: "Un lac la sud de Alexandria.", en: "A lake south of Alexandria." },
    facts: {
      de: ["Durch Industrie belastet", "Ehemalige Ausdehnung größer"],
      hu: ["Iparilag terhelt", "Korábban nagyobb kiterjedésű"],
      ro: ["Poluat industrial", "Extindere mai mare în trecut"],
      en: ["Industrially affected", "Larger extent in the past"]
    }, image: "/poi-images/mariut-see-lake-nature-v2.webp"},
  {
    id: "qarun-see-lake-nature-v2",
    type: "lake",
    parent: "EG-FYM",
    coords: [30.60, 29.50],
    name: { de: "Qarun-See", hu: "Qarun-tó", ro: "Lacul Qarun", en: "Lake Qarun" },
    description: { de: "Ein Salzsee in der Faiyum-Oase.", hu: "Sós tó a Faiyum-oázisban.", ro: "Un lac sărat în Oaza Faiyum.", en: "A salt lake in the Faiyum Oasis." },
    facts: {
      de: ["Überreste eines größeren Sees", "Wichtiges Vogelschutzgebiet"],
      hu: ["Egy nagyobb tó maradványa", "Fontos madárvédelmi terület"],
      ro: ["Rămășița unui lac mai mare", "Zonă importantă de protecție a păsărilor"],
      en: ["Remains of a larger lake", "Important bird sanctuary"]
    }, image: "/poi-images/qarun-see-lake-nature-v2.webp"},
  {
    id: "wadi-el-rayan-lake-nature-v2",
    type: "lake",
    parent: "EG-FYM",
    coords: [30.40, 29.10],
    name: { de: "Wadi El Rayan", hu: "Wadi El Rayan", ro: "Wadi El Rayan", en: "Wadi El Rayan" },
    description: { de: "Ein Gebiet mit zwei Seen und Wasserfällen.", hu: "Két tóból és vízesésekből álló terület.", ro: "O zonă cu două lacuri și cascade.", en: "An area with two lakes and waterfalls." },
    facts: {
      de: ["Nationalpark", "Einzige Wasserfälle Ägyptens"],
      hu: ["Nemzeti park", "Egyiptom egyetlen vízesései"],
      ro: ["Parc național", "Singurele cascade din Egipt"],
      en: ["National park", "Egypt's only waterfalls"]
    }, image: "/poi-images/wadi-el-rayan-lake-nature-v2.webp"},
  {
    id: "gebels-alk-mountain-nature-v2",
    type: "mountain",
    parent: "EG-SIN",
    coords: [33.90, 28.60],
    name: { de: "Gebel Katherina", hu: "Katalin-hegy", ro: "Gebel Katherina", en: "Mount Catherine" },
    description: { de: "Der höchste Berg Ägyptens.", hu: "Egyiptom legmagasabb hegye.", ro: "Cel mai înalt munte din Egipt.", en: "The highest mountain in Egypt." },
    facts: {
      de: ["Liegt auf der Sinai-Halbinsel", "Hohe Lage"],
      hu: ["A Sínai-félszigeten fekszik", "Magasan fekvő"],
      ro: ["Situat în Peninsula Sinai", "Altitudine ridicată"],
      en: ["Located on the Sinai Peninsula", "High altitude"]
    }, image: "/poi-images/gebels-alk-mountain-nature-v2.webp"},
  {
    id: "gebels-mousa-mountain-nature-v2",
    type: "mountain",
    parent: "EG-SIN",
    coords: [33.90, 28.50],
    name: { de: "Gebel Musa", hu: "Mózes-hegy", ro: "Gebel Musa", en: "Mount Sinai" },
    description: { de: "Ein Berg von großer religiöser Bedeutung.", hu: "Nagy vallási jelentőségű hegy.", ro: "Un munte cu mare semnificație religioasă.", en: "A mountain of great religious significance." },
    facts: {
      de: ["Traditioneller Ort der Offenbarung", "Pilgerziel"],
      hu: ["A kinyilatkoztatás hagyományos helye", "Zarándokhely"],
      ro: ["Locul tradițional al revelației", "Destinație de pelerinaj"],
      en: ["Traditional site of revelation", "Pilgrimage site"]
    }, image: "/poi-images/gebels-mousa-mountain-nature-v2.webp"},
  {
    id: "galala-plateau-mountain-nature-v2",
    type: "mountain",
    parent: "EG-SUZ",
    coords: [32.50, 29.30],
    name: { de: "Galala-Plateau", hu: "Galala-fennsík", ro: "Platoul Galala", en: "Galala Plateau" },
    description: { de: "Ein Hochplateau östlich des Niltals.", hu: "Fennsík a Nílus-völgyétől keletre.", ro: "Un platou înalt la est de Valea Nilului.", en: "A high plateau east of the Nile Valley." },
    facts: {
      de: ["Kalksteinplateau", "Wüstenlandschaft"],
      hu: ["Mészkőfennsík", "Sivatagi táj"],
      ro: ["Platou calcaros", "Peisaj deșertic"],
      en: ["Limestone plateau", "Desert landscape"]
    }, image: "/poi-images/galala-plateau-mountain-nature-v2.webp"},
  {
    id: "gebels-shayib-mountain-nature-v2",
    type: "mountain",
    parent: "EG-RS",
    coords: [33.40, 26.80],
    name: { de: "Gebel Shayib el-Banat", hu: "Gebel Shayib el-Banat", ro: "Gebel Shayib el-Banat", en: "Gebel Shayib el-Banat" },
    description: { de: "Der höchste Berg außerhalb der Sinai-Halbinsel.", hu: "A legmagasabb hegy a Sínai-félszigeten kívül.", ro: "Cel mai înalt munte în afara Peninsulei Sinai.", en: "The highest mountain outside the Sinai Peninsula." },
    facts: {
      de: ["Teil des Rotmeergebirges", "Schwierige Besteigung"],
      hu: ["A Vörös-tengeri-hegység része", "Nehéz megmászni"],
      ro: ["Parte a Munților Mării Roșii", "Ascensiune dificilă"],
      en: ["Part of the Red Sea Mountains", "Difficult climb"]
    }, image: "/poi-images/gebels-shayib-mountain-nature-v2.webp"},
  {
    id: "gebels-hamada-mountain-nature-v2",
    type: "mountain",
    parent: "EG-RS",
    coords: [33.80, 25.50],
    name: { de: "Gebel Hamada", hu: "Gebel Hamada", ro: "Gebel Hamada", en: "Gebel Hamada" },
    description: { de: "Ein markanter Berg im Rotmeergebirge.", hu: "Jellegzetes hegy a Vörös-tengeri-hegységben.", ro: "Un munte distinctiv în Munții Mării Roșii.", en: "A prominent mountain in the Red Sea Mountains." },
    facts: {
      de: ["Wüstenberg", "Trockenes Klima"],
      hu: ["Sivatagi hegy", "Száraz éghajlat"],
      ro: ["Munte deșertic", "Climat uscat"],
      en: ["Desert mountain", "Dry climate"]
    }, image: "/poi-images/gebels-hamada-mountain-nature-v2.webp"},
  {
    id: "gebels-umb-mountain-nature-v2",
    type: "mountain",
    parent: "EG-RS",
    coords: [34.00, 25.00],
    name: { de: "Gebel Um Taghir", hu: "Gebel Um Taghir", ro: "Gebel Um Taghir", en: "Gebel Um Taghir" },
    description: { de: "Ein Gebirgsmassiv nahe Safaga.", hu: "Hegyvonulat Safaga közelében.", ro: "Un masiv muntos lângă Safaga.", en: "A mountain massif near Safaga." },
    facts: {
      de: ["Karge Landschaft", "Bergbau-Region"],
      hu: ["Kopár táj", "Bányászati régió"],
      ro: ["Peisaj arid", "Regiune minieră"],
      en: ["Barren landscape", "Mining region"]
    }, image: "/poi-images/gebels-umb-mountain-nature-v2.webp"},
  {
    id: "abuh-simbel-island-nature-v2",
    type: "island",
    parent: "EG-ASN",
    coords: [31.60, 22.30],
    name: { de: "Insel bei Abu Simbel", hu: "Sziget Abu Szimbelnél", ro: "Insulă lângă Abu Simbel", en: "Island near Abu Simbel" },
    description: { de: "Eine Insel im Nasser-Stausee.", hu: "Sziget a Nasszer-tóban.", ro: "O insulă în Lacul Nasser.", en: "An island in Lake Nasser." },
    facts: {
      de: ["Kleine Insel", "Künstlicher See"],
      hu: ["Kis sziget", "Mesterséges tó"],
      ro: ["Insulă mică", "Lac artificial"],
      en: ["Small island", "Artificial lake"]
    }, image: "/poi-images/abuh-simbel-island-nature-v2.webp"},
  {
    id: "gezirah-island-nature-v2",
    type: "island",
    parent: "EG-C",
    coords: [31.20, 30.05],
    name: { de: "Gezira-Insel", hu: "Gezira-sziget", ro: "Insula Gezira", en: "Gezira Island" },
    description: { de: "Eine Insel im Nil mitten in Kairo.", hu: "Sziget a Nílusban, Kairó közepén.", ro: "O insulă pe Nil în mijlocul orașului Cairo.", en: "An island in the Nile in the middle of Cairo." },
    facts: {
      de: ["Zentraler Stadtteil", "Parklandschaften"],
      hu: ["Központi kerület", "Parkok"],
      ro: ["Cartier central", "Parcuri"],
      en: ["Central district", "Park areas"]
    }, image: "/poi-images/gezirah-island-nature-v2.webp"},
  {
    id: "rotem-sea-coral-sea-nature-v2",
    type: "sea",
    parent: "EG-SIN",
    coords: [34.50, 28.00],
    name: { de: "Golf von Aqaba", hu: "Akabai-öböl", ro: "Golful Aqaba", en: "Gulf of Aqaba" },
    description: { de: "Ein Meeresarm des Roten Meeres.", hu: "A Vörös-tenger egyik tengeröble.", ro: "Un braț al Mării Roșii.", en: "An inlet of the Red Sea." },
    facts: {
      de: ["Wichtig für den Tourismus", "Tiefe Gewässer"],
      hu: ["Fontos a turizmus számára", "Mély vizek"],
      ro: ["Importantă pentru turism", "Ape adânci"],
      en: ["Important for tourism", "Deep waters"]
    }, image: "/poi-images/rotem-sea-coral-sea-nature-v2.webp"},
  {
    id: "suez-golf-sea-nature-v2",
    type: "sea",
    parent: "EG-SUZ",
    coords: [33.00, 28.50],
    name: { de: "Golf von Suez", hu: "Szuezi-öböl", ro: "Golful Suez", en: "Gulf of Suez" },
    description: { de: "Ein nördlicher Arm des Roten Meeres.", hu: "A Vörös-tenger északi tengeröble.", ro: "Un braț nordic al Mării Roșii.", en: "A northern arm of the Red Sea." },
    facts: {
      de: ["Ölförderung", "Verbindung zum Suezkanal"],
      hu: ["Olajkitermelés", "Összeköttetés a Szuezi-csatornával"],
      ro: ["Exploatare petrolieră", "Legătură cu Canalul Suez"],
      en: ["Oil extraction", "Connection to the Suez Canal"]
    }, image: "/poi-images/suez-golf-sea-nature-v2.webp"},
  {
    id: "qattara-edge-mountain-nature-v2",
    type: "mountain",
    parent: "EG-MT",
    coords: [27.50, 29.80],
    name: { de: "Qattara-Steilküste", hu: "Kattara-sziklafal", ro: "Stâncile Qattara", en: "Qattara Escarpment" },
    description: { de: "Die steile Kante der Qattara-Senke.", hu: "A Kattara-mélyföld meredek pereme.", ro: "Marginea abruptă a Depresiunii Qattara.", en: "The steep edge of the Qattara Depression." },
    facts: {
      de: ["Geologisches Phänomen", "Sehr trocken"],
      hu: ["Geológiai jelenség", "Nagyon száraz"],
      ro: ["Fenomen geologic", "Foarte uscat"],
      en: ["Geological phenomenon", "Very dry"]
    }
  }
];

