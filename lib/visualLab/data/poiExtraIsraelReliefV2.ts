import type { POI } from "./poi";

export const poiExtraIsraelReliefV2: POI[] = [
  {
    id: "israel-negev-desert-relief-v2",
    type: "desert",
    parent: "IL-D",
    coords: [34.79, 30.5],
    name: { de: "Wüste Negev", hu: "Negev-sivatag", ro: "Deșertul Negev", en: "Negev Desert" },
    description: {
      de: "Die Negev-Wüste bedeckt mehr als die Hälfte der Landfläche Israels und zeichnet sich durch felsige Täler und tiefe Krater aus.",
      hu: "A Negev-sivatag Izrael területének több mint felét teszi ki, sziklás völgyek és hatalmas kráterek jellemzik.",
      ro: "Deșertul Negev acoperă mai mult de jumătate din suprafața Israelului și se caracterizează prin văi stâncoase și cratere adânci.",
      en: "The Negev Desert covers more than half of Israel's land area, characterized by rocky valleys and deep craters."
    },
    facts: {
      de: ["Bedeckt über 55% Israels.", "Beherbergt den Ramon-Krater."],
      hu: ["Izrael területének 55%-át teszi ki.", "Itt található a Ramon-kráter."],
      ro: ["Acoperă peste 55% din Israel.", "Adăpostește craterul Ramon."],
      en: ["Covers over 55% of Israel.", "Home to the Makhtesh Ramon."]
    }, image: "/poi-images/israel-negev-desert-relief-v2.webp"},
  {
    id: "israel-judaean-desert-relief-v2",
    type: "desert",
    parent: "IL-JM",
    coords: [35.33, 31.66],
    name: { de: "Judäische Wüste", hu: "Júdeai-sivatag", ro: "Deșertul Iudeei", en: "Judaean Desert" },
    description: {
      de: "Eine kleine, aber faszinierende Wüste östlich von Jerusalem, die steil hinab zum Toten Meer abfällt.",
      hu: "Egy kicsi, de lenyűgöző sivatag Jeruzsálemtől keletre, amely meredeken ereszkedik le a Holt-tengerig.",
      ro: "Un deșert mic, dar fascinant la est de Ierusalim, care coboară abrupt spre Marea Moartă.",
      en: "A small but fascinating desert east of Jerusalem, descending steeply to the Dead Sea."
    },
    facts: {
      de: ["Liegt östlich von Jerusalem.", "Berühmt für die Qumran-Höhlen."],
      hu: ["Jeruzsálemtől keletre fekszik.", "Híres a qumráni barlangokról."],
      ro: ["Situat la est de Ierusalim.", "Renumit pentru peșterile de la Qumran."],
      en: ["Located east of Jerusalem.", "Famous for the Qumran Caves."]
    }, image: "/poi-images/israel-judaean-desert-relief-v2.webp"},
  {
    id: "israel-golan-heights-relief-v2",
    type: "plateau",
    parent: "IL-Z",
    coords: [35.75, 33.0],
    name: { de: "Golanhöhen", hu: "Golan-fennsík", ro: "Înălțimile Golan", en: "Golan Heights" },
    description: {
      de: "Ein strategisch wichtiges Basaltplateau im Norden, das für seine fruchtbaren Böden und vulkanische Landschaft bekannt ist.",
      hu: "Egy stratégiailag fontos bazaltfennsík északon, amely termékeny talajáról és vulkanikus tájáról ismert.",
      ro: "Un platou de bazalt strategic important în nord, cunoscut pentru solurile sale fertile și peisajul vulcanic.",
      en: "A strategically important basalt plateau in the north, known for its fertile soils and volcanic landscape."
    },
    facts: {
      de: ["Vulkanischen Ursprungs.", "Höchster Punkt ist der Berg Hermon."],
      hu: ["Vulkanikus eredetű.", "Legmagasabb pontja a Hermon-hegy."],
      ro: ["De origine vulcanică.", "Cel mai înalt punct este Muntele Hermon."],
      en: ["Volcanic in origin.", "Highest point is Mount Hermon."]
    }, image: "/poi-images/israel-golan-heights-relief-v2.webp"},
  {
    id: "israel-jezreel-valley-relief-v2",
    type: "valley",
    parent: "IL-Z",
    coords: [35.31, 32.58],
    name: { de: "Jesreelebene", hu: "Jezréel-völgy", ro: "Valea Izreel", en: "Jezreel Valley" },
    description: {
      de: "Eine große, überaus fruchtbare Ebene im Norden Israels, die historisch eine wichtige Ost-West-Verbindung darstellt.",
      hu: "Egy nagy és rendkívül termékeny síkság Észak-Izraelben, amely történelmileg fontos kelet-nyugati útvonal.",
      ro: "O câmpie mare și extrem de fertilă în nordul Israelului, care a fost istoric o importantă rută est-vest.",
      en: "A large, incredibly fertile plain in northern Israel, historically an important east-west route."
    },
    facts: {
      de: ["Sehr fruchtbare Landwirtschaftsregion.", "Wichtiger historischer Knotenpunkt."],
      hu: ["Nagyon termékeny mezőgazdasági régió.", "Fontos történelmi csomópont."],
      ro: ["Regiune agricolă foarte fertilă.", "Nod istoric important."],
      en: ["Highly fertile agricultural region.", "Important historical junction."]
    }, image: "/poi-images/israel-jezreel-valley-relief-v2.webp"},
  {
    id: "israel-arava-valley-relief-v2",
    type: "valley",
    parent: "IL-D",
    coords: [35.25, 30.5],
    name: { de: "Arava-Senke", hu: "Arava-völgy", ro: "Valea Arava", en: "Arava Valley" },
    description: {
      de: "Ein Teil des Großen Afrikanischen Grabenbruchs, der sich vom Toten Meer bis zum Golf von Akaba im Süden erstreckt.",
      hu: "A Nagy-hasadékvölgy része, amely a Holt-tengertől az Akabai-öbölig húzódik délen.",
      ro: "O parte a Marelui Rift African, care se întinde de la Marea Moartă la Golful Aqaba în sud.",
      en: "Part of the Great Rift Valley, stretching from the Dead Sea to the Gulf of Aqaba in the south."
    },
    facts: {
      de: ["Teil des Großen Grabenbruchs.", "Extrem trockenes Wüstenklima."],
      hu: ["A Nagy-hasadékvölgy része.", "Rendkívül száraz sivatagi klíma."],
      ro: ["Parte a Marelui Rift.", "Climat de deșert extrem de uscat."],
      en: ["Part of the Great Rift Valley.", "Extremely dry desert climate."]
    }, image: "/poi-images/israel-arava-valley-relief-v2.webp"},
  {
    id: "israel-mount-sodom-relief-v2",
    type: "mountain",
    parent: "IL-D",
    coords: [35.39, 31.07],
    name: { de: "Berg Sodom", hu: "Szodoma-hegy", ro: "Muntele Sodoma", en: "Mount Sodom" },
    description: {
      de: "Ein Bergzug, der fast ausschließlich aus Steinsalz besteht und sich entlang des südwestlichen Ufers des Toten Meeres erhebt.",
      hu: "Egy hegylánc, amely szinte kizárólag kősóból áll, és a Holt-tenger délnyugati partja mentén emelkedik.",
      ro: "Un lanț muntos format aproape în întregime din sare de rocă, care se ridică de-a lungul malului de sud-vest al Mării Moarte.",
      en: "A mountain range composed almost entirely of rock salt, rising along the southwestern shore of the Dead Sea."
    },
    facts: {
      de: ["Besteht zu 80% aus Salz.", "Wächst jährlich um einige Millimeter."],
      hu: ["80%-ban sóból áll.", "Évente néhány millimétert nő."],
      ro: ["Format din 80% sare.", "Crește cu câțiva milimetri pe an."],
      en: ["Composed of 80% salt.", "Grows a few millimeters annually."]
    }, image: "/poi-images/israel-mount-sodom-relief-v2.webp"},
  {
    id: "israel-mount-scopus-relief-v2",
    type: "mountain",
    parent: "IL-JM",
    coords: [35.24, 31.79],
    name: { de: "Skopusberg", hu: "Szkópusz-hegy", ro: "Muntele Scopus", en: "Mount Scopus" },
    description: {
      de: "Ein bedeutender Berg im Nordosten von Jerusalem, der einen hervorragenden Panoramablick über die Stadt bietet.",
      hu: "Egy jelentős hegy Jeruzsálem északkeleti részén, amely kiváló panorámát nyújt a városra.",
      ro: "Un munte important din nord-estul Ierusalimului, care oferă o vedere panoramică excelentă a orașului.",
      en: "A prominent mountain in northeast Jerusalem, offering an excellent panoramic view of the city."
    },
    facts: {
      de: ["Erhebt sich 826 Meter über dem Meer.", "Standort der Hebräischen Universität."],
      hu: ["826 méterre emelkedik a tengerszint felett.", "A Héber Egyetem campusa is itt van."],
      ro: ["Se ridică la 826 metri deasupra mării.", "Sediul Universității Ebraice."],
      en: ["Rises 826 meters above sea level.", "Home to the Hebrew University."]
    }, image: "/poi-images/israel-mount-scopus-relief-v2.webp"},
  {
    id: "israel-carmel-coast-relief-v2",
    type: "coast",
    parent: "IL-HA",
    coords: [34.95, 32.65],
    name: { de: "Karmelküste", hu: "Kármel-partvidék", ro: "Coasta Carmel", en: "Carmel Coastal Plain" },
    description: {
      de: "Ein schmaler Küstenstreifen am Mittelmeer, der zwischen dem Karmelgebirge und dem Meer verläuft.",
      hu: "Egy keskeny tengerparti sáv a Földközi-tenger mentén, amely a Kármel-hegy és a tenger között húzódik.",
      ro: "O fâșie de coastă îngustă de-a lungul Mării Mediterane, care se desfășoară între Muntele Carmel și mare.",
      en: "A narrow coastal strip along the Mediterranean, running between the Mount Carmel range and the sea."
    },
    facts: {
      de: ["Erstreckt sich über etwa 30 Kilometer.", "Beherbergt viele Bananenplantagen."],
      hu: ["Körülbelül 30 kilométer hosszan terül el.", "Sok banánültetvénynek ad otthont."],
      ro: ["Se întinde pe aproximativ 30 de kilometri.", "Găzduiește multe plantații de banane."],
      en: ["Stretches for about 30 kilometers.", "Home to many banana plantations."]
    }, image: "/poi-images/israel-carmel-coast-relief-v2.webp"},
  {
    id: "israel-sharon-plain-relief-v2",
    type: "coast",
    parent: "IL-M",
    coords: [34.88, 32.25],
    name: { de: "Scharonebene", hu: "Saron-síkság", ro: "Câmpia Sharon", en: "Sharon Plain" },
    description: {
      de: "Die zentrale Küstenebene Israels, die für ihre Zitrushaine bekannt ist und die am dichtesten besiedelte Region des Landes bildet.",
      hu: "Izrael középső tengerparti síksága, amely citrusligeteiről ismert, és az ország legsűrűbben lakott régiója.",
      ro: "Câmpia de coastă centrală a Israelului, cunoscută pentru plantațiile sale de citrice și fiind cea mai dens populată regiune.",
      en: "Israel's central coastal plain, known for its citrus groves and forming the most densely populated region of the country."
    },
    facts: {
      de: ["Sehr dicht besiedelt.", "Früher von Sümpfen bedeckt."],
      hu: ["Rendkívül sűrűn lakott.", "Régebben mocsarak borították."],
      ro: ["Foarte dens populată.", "Anterior acoperită de mlaștini."],
      en: ["Highly densely populated.", "Formerly covered by swamps."]
    }, image: "/poi-images/israel-sharon-plain-relief-v2.webp"},
  {
    id: "israel-mount-ebal-relief-v2",
    type: "mountain",
    parent: "IL-JM",
    coords: [35.26, 32.23],
    name: { de: "Berg Ebal", hu: "Ebál-hegy", ro: "Muntele Ebal", en: "Mount Ebal" },
    description: {
      de: "Einer der höchsten Gipfel in Samaria, der historisch als Berg der Verfluchung bekannt ist und über der Stadt Nablus thront.",
      hu: "Szamária egyik legmagasabb csúcsa, amelyet történelmileg az átkok hegyeként ismernek, és Nablusz városa fölé magasodik.",
      ro: "Unul dintre cele mai înalte vârfuri din Samaria, cunoscut istoric ca Muntele Blestemelor, care domină orașul Nablus.",
      en: "One of the highest peaks in Samaria, historically known as the Mount of Curses, towering over the city of Nablus."
    },
    facts: {
      de: ["Höhe von 940 Metern.", "Liegt nördlich von Nablus."],
      hu: ["940 méter magas.", "Nablusztól északra található."],
      ro: ["Înălțime de 940 metri.", "Situat la nord de Nablus."],
      en: ["Height of 940 meters.", "Located north of Nablus."]
    }, image: "/poi-images/israel-mount-ebal-relief-v2.webp"},
  {
    id: "israel-mount-gerizim-relief-v2",
    type: "mountain",
    parent: "IL-JM",
    coords: [35.27, 32.19],
    name: { de: "Berg Garizim", hu: "Garizim-hegy", ro: "Muntele Garizim", en: "Mount Gerizim" },
    description: {
      de: "Der Berg Garizim ist das religiöse Zentrum der Samaritaner und wird historisch als der Berg des Segens bezeichnet.",
      hu: "A Garizim-hegy a szamaritánusok vallási központja, és történelmileg az áldás hegyének nevezik.",
      ro: "Muntele Garizim este centrul religios al samaritenilor și este descris istoric ca Muntele Binecuvântărilor.",
      en: "Mount Gerizim is the religious center of the Samaritans and is historically described as the Mount of Blessing."
    },
    facts: {
      de: ["Höhe von 881 Metern.", "Heiligtum der Samaritaner."],
      hu: ["881 méter magas.", "A szamaritánusok szent helye."],
      ro: ["Înălțime de 881 metri.", "Sanctuar al samaritenilor."],
      en: ["Height of 881 meters.", "Sanctuary of the Samaritans."]
    }, image: "/poi-images/israel-mount-gerizim-relief-v2.webp"},
  {
    id: "israel-zin-valley-relief-v2",
    type: "valley",
    parent: "IL-D",
    coords: [34.78, 30.85],
    name: { de: "Zin-Tal", hu: "Cin-völgy", ro: "Valea Zin", en: "Zin Valley" },
    description: {
      de: "Ein spektakuläres trockenes Flusstal in der Negev-Wüste, das nach Winterregen Sturzfluten erlebt.",
      hu: "Látványos kiszáradt folyóvölgy a Negev-sivatagban, amely a téli esők után hirtelen áradásokat él át.",
      ro: "O vale spectaculoasă a unui râu secat în deșertul Negev, care se confruntă cu viituri după ploile de iarnă.",
      en: "A spectacular dry river valley in the Negev Desert that experiences flash floods after winter rains."
    },
    facts: {
      de: ["Trockenes Flussbett (Wadi).", "Bekannt für tiefe Canyons."],
      hu: ["Kiszáradt folyómeder (vádi).", "Mély kanyonjairól ismert."],
      ro: ["Albia uscată a unui râu (Wadi).", "Cunoscut pentru canioanele sale adânci."],
      en: ["Dry riverbed (Wadi).", "Known for deep canyons."]
    }, image: "/poi-images/israel-zin-valley-relief-v2.webp"},
  {
    id: "israel-mount-ramon-relief-v2",
    type: "mountain",
    parent: "IL-D",
    coords: [34.63, 30.50],
    name: { de: "Berg Ramon", hu: "Ramon-hegy", ro: "Muntele Ramon", en: "Mount Ramon" },
    description: {
      de: "Der höchste Gipfel in der Negev-Wüste, der sich am Rand des spektakulären Ramon-Kraters befindet.",
      hu: "A Negev-sivatag legmagasabb csúcsa, amely a látványos Ramon-kráter szélén található.",
      ro: "Cel mai înalt vârf din deșertul Negev, situat la marginea spectaculosului crater Ramon.",
      en: "The highest peak in the Negev Desert, located on the edge of the spectacular Makhtesh Ramon."
    },
    facts: {
      de: ["Höhe von 1037 Metern.", "Höchster Berg im Süden Israels."],
      hu: ["1037 méter magas.", "Dél-Izrael legmagasabb hegye."],
      ro: ["Înălțime de 1037 metri.", "Cel mai înalt munte din sudul Israelului."],
      en: ["Height of 1037 meters.", "Highest mountain in southern Israel."]
    }, image: "/poi-images/israel-mount-ramon-relief-v2.webp"},
  {
    id: "israel-judaean-mountains-relief-v2",
    type: "mountain",
    parent: "IL-JM",
    coords: [35.08, 31.75],
    name: { de: "Judäisches Bergland", hu: "Júdeai-hegység", ro: "Munții Iudeei", en: "Judaean Mountains" },
    description: {
      de: "Eine Gebirgskette im zentralen Teil des Landes, in der sich unter anderem Jerusalem und Hebron befinden.",
      hu: "Hegylánc az ország középső részén, ahol többek között Jeruzsálem és Hebron is található.",
      ro: "Un lanț muntos în partea centrală a țării, unde sunt situate Ierusalimul și Hebronul, printre altele.",
      en: "A mountain range in the central part of the country, where Jerusalem and Hebron are located."
    },
    facts: {
      de: ["Erreicht bis zu 1000 Meter Höhe.", "Stark terrassierte Landschaft."],
      hu: ["Akár 1000 méteres magasságot is eléri.", "Erősen teraszosított táj."],
      ro: ["Atinge până la 1000 de metri altitudine.", "Peisaj puternic terasat."],
      en: ["Reaches up to 1000 meters in height.", "Heavily terraced landscape."]
    }, image: "/poi-images/israel-judaean-mountains-relief-v2.webp"},
  {
    id: "israel-beit-netofa-valley-relief-v2",
    type: "valley",
    parent: "IL-Z",
    coords: [35.32, 32.81],
    name: { de: "Beit-Netofa-Tal", hu: "Bét-Netofa-völgy", ro: "Valea Beit Netofa", en: "Beit Netofa Valley" },
    description: {
      de: "Ein weites, von Landwirtschaft geprägtes Tal in der Region Untergaliläa, das für seine reiche Olivenölproduktion bekannt ist.",
      hu: "Egy széles, mezőgazdasági jellegű völgy Alsó-Galileában, amely gazdag olívaolaj-termeléséről ismert.",
      ro: "O vale largă, agricolă în regiunea Galileii Inferioare, cunoscută pentru producția bogată de ulei de măsline.",
      en: "A broad, agricultural valley in the Lower Galilee region, known for its rich olive oil production."
    },
    facts: {
      de: ["Liegt in Untergaliläa.", "Länge von etwa 16 Kilometern."],
      hu: ["Alsó-Galileában található.", "Hossza körülbelül 16 kilométer."],
      ro: ["Situată în Galileea Inferioară.", "Lungime de aproximativ 16 kilometri."],
      en: ["Located in the Lower Galilee.", "Length of about 16 kilometers."]
    }, image: "/poi-images/israel-beit-netofa-valley-relief-v2.webp"},
  {
    id: "israel-mount-bental-relief-v2",
    type: "mountain",
    parent: "IL-Z",
    coords: [35.78, 33.13],
    name: { de: "Berg Bental", hu: "Bental-hegy", ro: "Muntele Bental", en: "Mount Bental" },
    description: {
      de: "Ein erloschener Vulkan in den nördlichen Golanhöhen, der einen weiten Blick über die syrische Grenze bietet.",
      hu: "Kialudt vulkán az északi Golan-fennsíkon, ahonnan messzire ellátni a szíriai határ felé.",
      ro: "Un vulcan stins în nordul Înălțimilor Golan, care oferă o priveliște vastă peste granița siriană.",
      en: "An extinct volcano in the northern Golan Heights, offering sweeping views across the Syrian border."
    },
    facts: {
      de: ["Erloschener Vulkankrater.", "Höhe von 1171 Metern."],
      hu: ["Kialudt vulkáni kráter.", "1171 méter magas."],
      ro: ["Crater vulcanic stins.", "Înălțime de 1171 metri."],
      en: ["Extinct volcanic crater.", "Height of 1171 meters."]
    }, image: "/poi-images/israel-mount-bental-relief-v2.webp"},
  {
    id: "israel-zvulun-valley-relief-v2",
    type: "valley",
    parent: "IL-HA",
    coords: [35.08, 32.83],
    name: { de: "Sebulon-Tal", hu: "Zebulon-völgy", ro: "Valea Zevulun", en: "Zvulun Valley" },
    description: {
      de: "Ein fruchtbares Tal entlang der Küste nahe Haifa, das industriell und landwirtschaftlich intensiv genutzt wird.",
      hu: "Termékeny völgy a tengerpart mentén, Haifa közelében, amelyet iparilag és mezőgazdaságilag is intenzíven használnak.",
      ro: "O vale fertilă de-a lungul coastei lângă Haifa, utilizată intens din punct de vedere industrial și agricol.",
      en: "A fertile valley along the coast near Haifa, intensely utilized for industry and agriculture."
    },
    facts: {
      de: ["Liegt nördlich von Haifa.", "Historisches Stammesgebiet Sebulon."],
      hu: ["Haifától északra fekszik.", "Zebulon törzsének történelmi területe."],
      ro: ["Situată la nord de Haifa.", "Teritoriul istoric al tribului Zabulon."],
      en: ["Located north of Haifa.", "Historical territory of the tribe of Zebulun."]
    }, image: "/poi-images/israel-zvulun-valley-relief-v2.webp"},
  {
    id: "israel-paran-valley-relief-v2",
    type: "valley",
    parent: "IL-D",
    coords: [34.96, 30.33],
    name: { de: "Paran-Tal", hu: "Párán-völgy", ro: "Valea Paran", en: "Paran Valley" },
    description: {
      de: "Das breiteste Wadi in Israel, das nach starken Regenfällen gigantische Wassermassen durch die Negev-Wüste transportiert.",
      hu: "Izrael legszélesebb vádija, amely heves esőzések után óriási víztömegeket szállít a Negev-sivatagon keresztül.",
      ro: "Cel mai lat wadi din Israel, care transportă mase gigantice de apă prin deșertul Negev după ploi abundente.",
      en: "The widest wadi in Israel, carrying gigantic masses of water through the Negev Desert after heavy rains."
    },
    facts: {
      de: ["Größtes Wadi Israels.", "Fließt in die Arava-Senke."],
      hu: ["Izrael legnagyobb vádija.", "Az Arava-völgybe torkollik."],
      ro: ["Cel mai mare wadi din Israel.", "Se varsă în Valea Arava."],
      en: ["Israel's largest wadi.", "Flows into the Arava Valley."]
    }, image: "/poi-images/israel-paran-valley-relief-v2.webp"},
  {
    id: "israel-mount-karkom-relief-v2",
    type: "mountain",
    parent: "IL-D",
    coords: [34.74, 30.28],
    name: { de: "Berg Karkom", hu: "Karkom-hegy", ro: "Muntele Karkom", en: "Mount Karkom" },
    description: {
      de: "Ein Wüstenberg in der südlichen Negev, auf dem zahlreiche alte Felszeichnungen und archäologische Stätten entdeckt wurden.",
      hu: "Sivatagi hegy a déli Negevben, ahol számos ősi sziklarajzot és régészeti lelőhelyet fedeztek fel.",
      ro: "Un munte deșertic în sudul Negevului, unde au fost descoperite numeroase gravuri rupestre antice și situri arheologice.",
      en: "A desert mountain in the southern Negev where numerous ancient rock carvings and archaeological sites have been discovered."
    },
    facts: {
      de: ["Besitzt über 40.000 Felsritzungen.", "Wird von einigen als Sinai-Berg vermutet."],
      hu: ["Több mint 40 000 sziklarajz található itt.", "Egyesek a Sínai-heggyel azonosítják."],
      ro: ["Are peste 40.000 de petroglife.", "Unii cred că este Muntele Sinai."],
      en: ["Has over 40,000 petroglyphs.", "Some believe it is Mount Sinai."]
    }, image: "/poi-images/israel-mount-karkom-relief-v2.webp"},
  {
    id: "israel-jordan-valley-relief-v2",
    type: "valley",
    parent: "IL-Z",
    coords: [35.54, 32.33],
    name: { de: "Jordantal", hu: "Jordán-völgy", ro: "Valea Iordanului", en: "Jordan Valley" },
    description: {
      de: "Ein langer, tektonischer Graben, durch den der Jordanfluss fließt und der eine natürliche Grenze im Osten Israels bildet.",
      hu: "Hosszú tektonikus árok, amelyen a Jordán folyó folyik keresztül, és amely természetes határt képez Izrael keleti részén.",
      ro: "Un șanț tectonic lung prin care curge râul Iordan, formând o graniță naturală în estul Israelului.",
      en: "A long, tectonic rift through which the Jordan River flows, forming a natural border in eastern Israel."
    },
    facts: {
      de: ["Teil des syrisch-afrikanischen Grabenbruchs.", "Wichtiges landwirtschaftliches Gebiet."],
      hu: ["A szír-afrikai árok része.", "Fontos mezőgazdasági terület."],
      ro: ["Parte a Riftului Sirio-African.", "Zonă agricolă importantă."],
      en: ["Part of the Syro-African Rift.", "Important agricultural area."]
    }
  }
];
