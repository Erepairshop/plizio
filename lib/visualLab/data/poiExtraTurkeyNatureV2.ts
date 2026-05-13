import type { POI } from "./poi";

export const poiExtraTurkeyNatureV2: POI[] = [
  {
    id: "turkey-lake-tuz-nature-v2",
    type: "lake",
    parent: "TR-68",
    coords: [33.3333, 38.8333],
    name: { de: "Tuz Gölü", hu: "Tuz-tó", ro: "Lacul Tuz", en: "Lake Tuz"},
    image: "/poi-images/turkey-lake-tuz-nature-v2.webp",
    description: {
      de: "Der Tuz Gölü ist der zweitgrößte See der Türkei und einer der größten hypersalinen Seen der Welt.",
      hu: "A Tuz-tó Törökország második legnagyobb tava, és a világ egyik legnagyobb hipersós tava.",
      ro: "Lacul Tuz este al doilea cel mai mare lac din Turcia și unul dintre cele mai mari lacuri hipersaline din lume.",
      en: "Lake Tuz is the second largest lake in Turkey and one of the largest hypersaline lakes in the world."
    },
    facts: {
      de: ["Liegt in Zentralanatolien.", "Der Name bedeutet Salzsee.", "Wichtiger Lebensraum für Flamingos."],
      hu: ["Közép-Anatóliában található.", "A neve sós tavat jelent.", "Fontos élőhely a flamingók számára."],
      ro: ["Situat în Anatolia Centrală.", "Numele înseamnă Lacul Sărat.", "Habitat important pentru flamingo."],
      en: ["Located in Central Anatolia.", "The name means Salt Lake.", "Important habitat for flamingos."]
    }, image: "/poi-images/turkey-lake-tuz-nature-v2.webp",
    descriptionAdvanced: {
      de: "Der Tuz Gölü ist einer der salzhaltigsten Seen weltweit und bedeckt ein riesiges Plateau in Zentralanatolien. Im Sommer verdunstet das Wasser und hinterlässt eine dicke Salzkruste.",
      hu: "A Tuz-tó Törökország második legnagyobb tava, amelynek sótartalma rendkívül magas, elérheti a 33%-ot is. Nyáron a víz nagy része elpárolog, vakítóan fehér sómezőt hagyva maga után.",
      ro: "Lacul Tuz este unul dintre cele mai sărate lacuri din lume, situat în inima Anatoliei. Pe timp de vară, apa se evaporă masiv, lăsând în urmă o crustă de sare albă ca zăpada.",
      en: "Lake Tuz is one of the largest hypersaline lakes in the world, located in Central Anatolia. During summer, the water recedes to reveal a vast, shimmering expanse of white salt crust.",
    },
    factsAdvanced: {
      de: ["Fläche: ca. 1.665 km²", "Salzgehalt: bis zu 32,9%", "Höhe: 905 Meter über Meer", "Wichtigster Brutplatz für Flamingos"],
      hu: ["Területe: kb. 1665 km²", "Sótartalom: akár 32,9%", "Tengerszint feletti magasság: 905 m", "Európa egyik legnagyobb flamingótelepe"],
      ro: ["Suprafață: aprox. 1.665 km²", "Salinitate: până la 32,9%", "Altitudine: 905 metri", "Loc major de cuibărit pentru flamingo"],
      en: ["Surface area: approx. 1,665 km²", "Salinity level: up to 32.9%", "Elevation: 905 meters above sea level", "Main breeding ground for greater flamingos"],
    },
  },
  {
    id: "turkey-lake-egirdir-nature-v2",
    type: "lake",
    parent: "TR-32",
    coords: [30.8667, 38.0500],
    name: { de: "Eğirdir-See", hu: "Eğirdir-tó", ro: "Lacul Eğirdir", en: "Lake Eğirdir"},
    image: "/poi-images/turkey-lake-egirdir-nature-v2.webp",
    description: {
      de: "Der Eğirdir-See ist ein Süßwassersee in der türkischen Seenregion, umgeben von malerischen Bergen.",
      hu: "Az Eğirdir-tó egy édesvizű tó a török tóvidéken, amelyet festői hegyek vesznek körül.",
      ro: "Lacul Eğirdir este un lac cu apă dulce din regiunea lacurilor din Turcia, înconjurat de munți pitorești.",
      en: "Lake Eğirdir is a freshwater lake in the Turkish Lakes Region, surrounded by picturesque mountains."
    },
    facts: {
      de: ["Der viertgrößte See der Türkei.", "Hat zwei kleine Inseln.", "Bekannt für klares Wasser und Apfelgärten."],
      hu: ["Törökország negyedik legnagyobb tava.", "Két kis szigettel rendelkezik.", "Tiszta vizéről és almaültetvényeiről ismert."],
      ro: ["Al patrulea cel mai mare lac din Turcia.", "Are două insule mici.", "Cunoscut pentru apa limpede și livezile de meri."],
      en: ["The fourth largest lake in Turkey.", "Has two small islands.", "Known for clear water and apple orchards."]
    }, image: "/poi-images/turkey-lake-egirdir-nature-v2.webp",
    descriptionAdvanced: {
      de: "Der Eğirdir-See in der Provinz Isparta ist bekannt für sein klares Wasser, das je nach Tageszeit seine Farbe ändert. Er ist der viertgrößte See des Landes und ein wichtiges Süßwasserreservoir.",
      hu: "Az Isparta tartományban fekvő Eğirdir-tó Törökország negyedik legnagyobb tava. A tó színe napszaktól függően változik, partján pedig két kis sziget is található, melyeket gát köt össze.",
      ro: "Lacul Eğirdir, situat în provincia Isparta, este faimos pentru apele sale care își schimbă culoarea. Este al patrulea cel mai mare lac din Turcia și o sursă vitală de apă dulce.",
      en: "Lake Eğirdir in Isparta province is renowned for its crystal-clear waters that shift hues throughout the day. It is Turkey's fourth-largest lake and a key freshwater ecosystem.",
    },
    factsAdvanced: {
      de: ["Fläche: ca. 482 km²", "Maximale Tiefe: 14 Meter", "Liegt im Taurusgebirge", "Zwei Inseln: Can Ada und Yeşil Ada"],
      hu: ["Területe: kb. 482 km²", "Maximális mélysége: 14 méter", "A Torosz-hegységben található", "Szigetei: Can Ada és Yeşil Ada"],
      ro: ["Suprafață: aprox. 482 km²", "Adâncime maximă: 14 metri", "Situat în Munții Taurus", "Insule: Can Ada și Yeşil Ada"],
      en: ["Surface area: approx. 482 km²", "Maximum depth: 14 meters", "Located in the Taurus Mountains", "Two islands: Can Ada and Yeşil Ada"],
    },
  },
  {
    id: "turkey-kizilirmak-river-nature-v2",
    type: "river",
    parent: "TR-58",
    coords: [35.9500, 41.7167],
    name: { de: "Kızılırmak", hu: "Kızılırmak", ro: "Râul Kızılırmak", en: "Kızılırmak River"},
    image: "/poi-images/turkey-kizilirmak-river-nature-v2.webp",
    description: {
      de: "Der Kızılırmak ist der längste ausschließlich auf türkischem Gebiet fließende Fluss und mündet ins Schwarze Meer.",
      hu: "A Kızılırmak a leghosszabb, kizárólag török területen folyó folyó, amely a Fekete-tengerbe ömlik.",
      ro: "Kızılırmak este cel mai lung râu care curge în întregime pe teritoriul turc, vărsându-se în Marea Neagră.",
      en: "The Kızılırmak is the longest river flowing entirely within Turkish territory, emptying into the Black Sea."
    },
    facts: {
      de: ["Sein Name bedeutet Roter Fluss.", "Er ist etwa 1355 Kilometer lang.", "Wird für Wasserkraft und Bewässerung genutzt."],
      hu: ["A neve vörös folyót jelent.", "Körülbelül 1355 kilométer hosszú.", "Vízenergiára és öntözésre használják."],
      ro: ["Numele său înseamnă Râul Roșu.", "Are o lungime de aproximativ 1355 de kilometri.", "Folosit pentru energie hidroelectrică și irigații."],
      en: ["Its name means Red River.", "It is about 1355 kilometers long.", "Used for hydroelectric power and irrigation."]
    }, image: "/poi-images/turkey-kizilirmak-river-nature-v2.webp",
    descriptionAdvanced: {
      de: "Der Kızılırmak, auch Roter Fluss genannt, ist der längste Fluss, der vollständig innerhalb der Türkei fließt. Er entspringt in Ostanatolien und mündet nach weitem Bogen ins Schwarze Meer.",
      hu: "A Kızılırmak (Vörös-folyó) a leghosszabb olyan folyó, amely teljes egészében Törökország területén halad át. Nevét a medréből kimosott vöröses hordalékról kapta.",
      ro: "Kızılırmak, cunoscut sub numele de Râul Roșu, este cel mai lung curs de apă care curge în întregime pe teritoriul Turciei. Izvorăște din Anatolia și se varsă în Marea Neagră.",
      en: "The Kızılırmak, or Red River, is the longest river to flow entirely within Turkish borders. It originates in Eastern Anatolia and follows a wide arc before emptying into the Black Sea.",
    },
    factsAdvanced: {
      de: ["Gesamtlänge: 1.355 km", "Einzugsgebiet: 77.100 km²", "Wichtig für die Stromerzeugung", "Bekannt für Töpferkunst in Avanos"],
      hu: ["Hosszúsága: 1355 km", "Vízgyűjtő terület: 77 100 km²", "Számos vízerőmű üzemel rajta", "Avanos híres fazekasainak agyagforrása"],
      ro: ["Lungime totală: 1.355 km", "Bazin hidrografic: 77.100 km²", "Utilizat pentru energie hidroelectrică", "Sursă de argilă pentru olărit în Avanos"],
      en: ["Total length: 1,355 km", "Basin area: 77,100 km²", "Critical for hydroelectric power", "Source of red clay for Avanos pottery"],
    },
  },
  {
    id: "turkey-sakarya-river-nature-v2",
    type: "river",
    parent: "TR-54",
    coords: [30.6500, 41.1167],
    name: { de: "Sakarya", hu: "Sakarya", ro: "Râul Sakarya", en: "Sakarya River"},
    image: "/poi-images/turkey-sakarya-river-nature-v2.webp",
    description: {
      de: "Der Sakarya ist der drittlängste Fluss der Türkei und fließt durch die historische Region Phrygien ins Schwarze Meer.",
      hu: "A Sakarya Törökország harmadik leghosszabb folyója, és a történelmi Phrügia régión keresztül folyik a Fekete-tengerbe.",
      ro: "Sakarya este al treilea cel mai lung râu din Turcia, curgând prin regiunea istorică Frigia în Marea Neagră.",
      en: "The Sakarya is the third longest river in Turkey, flowing through the historical region of Phrygia into the Black Sea."
    },
    facts: {
      de: ["Mündet nahe der Stadt Karasu.", "Hat eine Länge von 824 Kilometern.", "Ein wichtiges Flusssystem für Westanatolien."],
      hu: ["Karasu városa közelében torkollik.", "Hossza 824 kilométer.", "Fontos folyórendszer Nyugat-Anatólia számára."],
      ro: ["Se varsă aproape de orașul Karasu.", "Are o lungime de 824 de kilometri.", "Un sistem fluvial important pentru vestul Anatoliei."],
      en: ["Empties near the city of Karasu.", "Has a length of 824 kilometers.", "An important river system for western Anatolia."]
    }, image: "/poi-images/turkey-sakarya-river-nature-v2.webp",
    descriptionAdvanced: {
      de: "Der Sakarya ist einer der bedeutendsten Flüsse im Nordwesten der Türkei. Er durchfließt fruchtbare Ebenen und historische Regionen, bevor er östlich von Istanbul in das Schwarze Meer mündet.",
      hu: "A Sakarya-folyó Északnyugat-Törökország egyik legfontosabb vízfolyása. Termékeny alföldeken és történelmi tájakon kanyarog keresztül, mielőtt a Fekete-tengerbe ömlene.",
      ro: "Râul Sakarya este unul dintre cele mai importante cursuri de apă din nord-vestul Turciei. Traversează câmpii fertile și regiuni istorice înainte de a se vărsa în Marea Neagră.",
      en: "The Sakarya River is a major waterway in northwestern Turkey. It winds through fertile plains and historical regions before reaching its mouth at the Black Sea, east of Istanbul.",
    },
    factsAdvanced: {
      de: ["Gesamtlänge: 824 km", "Drittlängster Fluss der Türkei", "Mündet bei Karasu ins Meer", "Historisch wichtig durch die Sakarya-Schlacht"],
      hu: ["Hosszúsága: 824 km", "Törökország harmadik leghosszabb folyója", "Karasu közelében éri el a tengert", "A sakaryai csata (1921) helyszíne"],
      ro: ["Lungime totală: 824 km", "Al treilea cel mai lung râu din Turcia", "Gura de vărsare: localitatea Karasu", "Semnificație istorică: Bătălia de la Sakarya"],
      en: ["Total length: 824 km", "Third longest river in Turkey", "Empties into the sea at Karasu", "Site of the historic Battle of Sakarya"],
    },
  },
  {
    id: "turkey-lake-beysehir-nature-v2",
    type: "lake",
    parent: "TR-42",
    coords: [31.5333, 37.7833],
    name: { de: "Beyşehir-See", hu: "Beyşehir-tó", ro: "Lacul Beyşehir", en: "Lake Beyşehir"},
    image: "/poi-images/turkey-lake-beysehir-nature-v2.webp",
    description: {
      de: "Der Beyşehir-See ist der größte Süßwassersee in der Türkei und ein wichtiges Vogelschutzgebiet.",
      hu: "A Beyşehir-tó Törökország legnagyobb édesvizű tava és egy fontos madárvédelmi terület.",
      ro: "Lacul Beyşehir este cel mai mare lac cu apă dulce din Turcia și o importantă zonă de protecție a păsărilor.",
      en: "Lake Beyşehir is the largest freshwater lake in Turkey and an important bird sanctuary."
    },
    facts: {
      de: ["Befindet sich im Südwesten Anatoliens.", "Beherbergt mehr als 30 Inseln.", "Teil eines ausgedehnten Nationalparks."],
      hu: ["Anatólia délnyugati részén található.", "Több mint 30 szigetnek ad otthont.", "Egy kiterjedt nemzeti park része."],
      ro: ["Situat în sud-vestul Anatoliei.", "Găzduiește peste 30 de insule.", "Face parte dintr-un parc național extins."],
      en: ["Located in southwestern Anatolia.", "Hosts more than 30 islands.", "Part of an extensive national park."]
    }, image: "/poi-images/turkey-lake-beysehir-nature-v2.webp",
    descriptionAdvanced: {
      de: "Der Beyşehir-See ist der größte Süßwassersee der Türkei und liegt im Südwesten von Zentralanatolien. Er ist umgeben vom majestätischen Anamas-Gebirge und beherbergt zahlreiche kleine Inseln.",
      hu: "A Beyşehir-tó Törökország legnagyobb édesvízi tava, Közép-Anatólia délnyugati részén. A tavat az Anamas-hegység bércei ölelik körbe, és több tucat kisebb sziget tarkítja felszínét.",
      ro: "Lacul Beyşehir este cel mai mare lac cu apă dulce din Turcia, situat în sud-vestul Anatoliei Centrale. Este înconjurat de Munții Anamas și adăpostește numeroase insule mici.",
      en: "Lake Beyşehir is Turkey's largest freshwater lake, situated in southwestern Central Anatolia. Framed by the Anamas Mountains, the lake is dotted with numerous scenic islands.",
    },
    factsAdvanced: {
      de: ["Fläche: ca. 650 km²", "Liegt auf 1.121 m Höhe", "Wichtiger Nationalpark seit 1993", "Besitzt 33 Inseln"],
      hu: ["Területe: kb. 650 km²", "Magasság: 1121 méter", "1993 óta nemzeti park", "Összesen 33 sziget található benne"],
      ro: ["Suprafață: aprox. 650 km²", "Altitudine: 1.121 metri", "Parc Național din anul 1993", "Conține 33 de insule"],
      en: ["Surface area: approx. 650 km²", "Elevation: 1,121 meters", "National Park status since 1993", "Home to 33 islands"],
    },
  },
  {
    id: "turkey-mount-erciyes-nature-v2",
    type: "mountain",
    parent: "TR-38",
    coords: [35.4833, 38.5333],
    name: { de: "Erciyes Dağı", hu: "Erciyes-hegy", ro: "Muntele Erciyes", en: "Mount Erciyes"},
    image: "/poi-images/turkey-mount-erciyes-nature-v2.webp",
    description: {
      de: "Der Erciyes Dağı ist ein massiver Stratovulkan und der höchste Berg in Zentralanatolien.",
      hu: "Az Erciyes-hegy egy hatalmas rétegvulkán, és Közép-Anatólia legmagasabb hegye.",
      ro: "Muntele Erciyes este un stratovulcan masiv și cel mai înalt munte din Anatolia Centrală.",
      en: "Mount Erciyes is a massive stratovolcano and the highest mountain in Central Anatolia."
    },
    facts: {
      de: ["Erreicht eine Höhe von 3917 Metern.", "Ein beliebtes Skigebiet im Winter.", "Seine Ausbrüche formten die Landschaft Kappadokiens."],
      hu: ["Eléri a 3917 méteres magasságot.", "Népszerű síközpont télen.", "Kitörései formálták Kappadókia táját."],
      ro: ["Atinge o altitudine de 3917 metri.", "O destinație populară pentru schi iarna.", "Erupțiile sale au modelat peisajul din Capadocia."],
      en: ["Reaches an elevation of 3917 meters.", "A popular ski resort in winter.", "Its eruptions shaped the landscape of Cappadocia."]
    }, image: "/poi-images/turkey-mount-erciyes-nature-v2.webp",
    descriptionAdvanced: {
      de: "Der Erciyes Dağı bei Kayseri ist ein gewaltiger Schichtvulkan und der höchste Berg Zentralanatoliens. Seine schneebedeckte Spitze ist weithin sichtbar und beherbergt ein modernes Skigebiet.",
      hu: "A Kayseri mellett emelkedő Erciyes-hegy egy hatalmas rétegvulkán, Közép-Anatólia legmagasabb csúcsa. Hófödte csúcsa messziről látható, ma pedig népszerű síközpontként üzemel.",
      ro: "Muntele Erciyes de lângă Kayseri este un vulcan masiv și cel mai înalt vârf din Anatolia Centrală. Culmea sa înzăpezită este vizibilă de departe și găzduiește o stațiune de schi.",
      en: "Mount Erciyes near Kayseri is a massive stratovolcano and the highest peak in Central Anatolia. Its snow-capped summit is a landmark of the region and home to a premier ski resort.",
    },
    factsAdvanced: {
      de: ["Höhe: 3.917 Meter", "Ein erloschener Vulkan", "Wichtiges Wintersportzentrum", "Namensgeber für die Stadt Caesarea"],
      hu: ["Magasság: 3917 méter", "Kialudt rétegvulkán", "Modern téli sportközpont", "Az ókorban Argaeus néven ismerték"],
      ro: ["Înălțime: 3.917 metri", "Vulcan stins (stratovulcan)", "Centru modern de sporturi de iarnă", "Cunoscut în antichitate ca Muntele Argaeus"],
      en: ["Height: 3,917 meters", "Dormant stratovolcano", "Major winter sports hub", "Known in antiquity as Mount Argaeus"],
    },
  },
  {
    id: "turkey-kackar-mountains-nature-v2",
    type: "mountain",
    parent: "TR-53",
    coords: [41.1667, 40.8333],
    name: { de: "Kaçkar-Gebirge", hu: "Kaçkar-hegység", ro: "Munții Kaçkar", en: "Kaçkar Mountains"},
    image: "/poi-images/turkey-kackar-mountains-nature-v2.webp",
    description: {
      de: "Das Kaçkar-Gebirge ist ein eiszeitlich geprägtes Gebirgsmassiv in der östlichen Schwarzmeerregion mit dichten Wäldern und Almen.",
      hu: "A Kaçkar-hegység egy jégkorszaki eredetű hegytömb a keleti fekete-tengeri régióban, sűrű erdőkkel és havasi legelőkkel.",
      ro: "Munții Kaçkar sunt un masiv muntos modelat de ghețari în regiunea estică a Mării Negre, cu păduri dese și pășuni alpine.",
      en: "The Kaçkar Mountains are a glacially shaped mountain range in the eastern Black Sea region with dense forests and alpine pastures."
    },
    facts: {
      de: ["Der höchste Gipfel ist 3937 Meter hoch.", "Bekannt für Heliskiing und Trekking.", "Heimat von Braunbären und Wölfen."],
      hu: ["A legmagasabb csúcsa 3937 méter magas.", "A helisízés és a túrázás központja.", "Barnamedvék és farkasok otthona."],
      ro: ["Cel mai înalt vârf are 3937 de metri.", "Cunoscut pentru heliski și drumeții.", "Cămin pentru urși bruni și lupi."],
      en: ["The highest peak is 3937 meters high.", "Known for heliskiing and trekking.", "Home to brown bears and wolves."]
    }, image: "/poi-images/turkey-kackar-mountains-nature-v2.webp",
    descriptionAdvanced: {
      de: "Die Kaçkar-Berge im Nordosten der Türkei sind Teil des Pontischen Gebirges. Sie zeichnen sich durch alpine Landschaften, Gletscherseen und eine außergewöhnliche Artenvielfalt aus.",
      hu: "Az Északkelet-Törökországban húzódó Kaçkar-hegység a Pontuszi-hegyvidék része. Alpesi tájak, gleccsertavak és rendkívüli biológiai sokféleség jellemzi ezt a vadregényes vidéket.",
      ro: "Munții Kaçkar din nord-estul Turciei fac parte din Alpii Pontici. Sunt renumiți pentru peisajele lor alpine, lacurile glaciare și o biodiversitate remarcabilă.",
      en: "The Kaçkar Mountains in northeastern Turkey are part of the Pontic range. They are characterized by alpine landscapes, glacial lakes, and an extraordinary variety of flora and fauna.",
    },
    factsAdvanced: {
      de: ["Höchster Punkt: 3.937 m", "Teil des Pontischen Gebirges", "Nationalpark seit 1994", "Bekannt für den Anzer-Honig"],
      hu: ["Legmagasabb csúcs: 3937 méter", "A Pontuszi-hegység része", "Nemzeti park 1994 óta", "Híres az Anzer-méz termeléséről"],
      ro: ["Cel mai înalt vârf: 3.937 m", "Parte a Munților Pontici", "Statut de Parc Național din 1994", "Zonă faimoasă pentru mierea de Anzer"],
      en: ["Highest peak: 3,937 meters", "Part of the Pontic Alps", "National Park status since 1994", "Famed for Anzer honey production"],
    },
  },
  {
    id: "turkey-lake-cildir-nature-v2",
    type: "lake",
    parent: "TR-75",
    coords: [43.2500, 41.0500],
    name: { de: "Çıldır-See", hu: "Çıldır-tó", ro: "Lacul Çıldır", en: "Lake Çıldır"},
    image: "/poi-images/turkey-lake-cildir-nature-v2.webp",
    description: {
      de: "Der Çıldır-See ist ein großer Alpensee im Nordosten der Türkei, der im Winter komplett zufriert.",
      hu: "A Çıldır-tó egy nagy alpesi tó Törökország északkeleti részén, amely télen teljesen befagy.",
      ro: "Lacul Çıldır este un lac alpin mare din nord-estul Turciei, care îngheață complet în timpul iernii.",
      en: "Lake Çıldır is a large alpine lake in northeastern Turkey that completely freezes over during winter."
    },
    facts: {
      de: ["Der zweitgrößte See in Ostanatolien.", "Pferdeschlittenfahrten sind eine Winterattraktion.", "Fischer fangen Karpfen durch Löcher im Eis."],
      hu: ["Kelet-Anatólia második legnagyobb tava.", "A lovasszános utazások népszerű téli látványosságok.", "A halászok a jégen lévő lékeken keresztül fogják a pontyot."],
      ro: ["Al doilea cel mai mare lac din Anatolia de Est.", "Plimbările cu sania trasă de cai sunt o atracție de iarnă.", "Pescarii prind crap prin găuri în gheață."],
      en: ["The second largest lake in Eastern Anatolia.", "Horse sleigh rides are a winter attraction.", "Fishermen catch carp through holes in the ice."]
    }, image: "/poi-images/turkey-lake-cildir-nature-v2.webp",
    descriptionAdvanced: {
      de: "Der Çıldır-See liegt im hohen Nordosten der Türkei und ist bekannt für seine extreme Kälte im Winter. Wenn die Oberfläche dick zufriert, nutzen Fischer traditionelle Methoden zum Eisfischen.",
      hu: "A török-örmény határ közelében fekvő Çıldır-tó télen teljesen befagy. Ilyenkor a helyi halászok lékhorgászattal fogják ki a halakat, a befagyott vízen pedig lovas szánok közlekednek.",
      ro: "Lacul Çıldır, situat în nord-estul extrem al Turciei, este faimos pentru iernile sale aspre. Când îngheață complet, pescarii locali practică pescuitul la copcă folosind metode tradiționale.",
      en: "Lake Çıldır in northeastern Turkey is famous for freezing solid in winter. When the ice thickens, local fishermen use traditional ice-fishing techniques while horse-drawn sleighs cross the surface.",
    },
    factsAdvanced: {
      de: ["Fläche: 123 km²", "Höhe: 1.959 m über Meer", "Zweitgrößter See Ostanatoliens", "Wassertiefe: bis zu 42 Meter"],
      hu: ["Területe: 123 km²", "Magasság: 1959 méter", "Kelet-Anatólia második legnagyobb tava", "Mélysége: eléri a 42 métert"],
      ro: ["Suprafață: 123 km²", "Altitudine: 1.959 metri", "Al doilea cel mai mare lac din Anatolia de Est", "Adâncime: până la 42 de metri"],
      en: ["Surface area: 123 km²", "Elevation: 1,959 meters", "Second largest lake in East Anatolia", "Water depth: up to 42 meters"],
    },
  },
  {
    id: "turkey-yedigoller-national-park-nature-v2",
    type: "national-park",
    parent: "TR-14",
    coords: [31.7500, 40.9333],
    name: { de: "Yedigöller-Nationalpark", hu: "Yedigöller Nemzeti Park", ro: "Parcul Național Yedigöller", en: "Yedigöller National Park"},
    image: "/poi-images/turkey-yedigoller-national-park-nature-v2.webp",
    description: {
      de: "Der Yedigöller-Nationalpark, auch Sieben Seen genannt, ist berühmt für seine farbenprächtigen Laubwälder im Herbst.",
      hu: "A Yedigöller Nemzeti Park, vagyis a Hét-tó a gyönyörű, színes őszi lombhullató erdeiről híres.",
      ro: "Parcul Național Yedigöller, numit și Șapte Lacuri, este faimos pentru pădurile sale de foioase viu colorate toamna.",
      en: "Yedigöller National Park, also called Seven Lakes, is famous for its vibrantly colored deciduous forests in autumn."
    },
    facts: {
      de: ["Besteht aus sieben durch Erdrutsche geformten Seen.", "Ein beliebtes Ziel für Naturfotografen.", "Reich an Buchen, Eichen und Kiefern."],
      hu: ["Hét földcsuszamlás által kialakított tóból áll.", "Népszerű célpont a természetfotósok számára.", "Bükk-, tölgy- és fenyőfákban gazdag."],
      ro: ["Format din șapte lacuri create prin alunecări de teren.", "O destinație populară pentru fotografii de natură.", "Bogat în fagi, stejari și pini."],
      en: ["Consists of seven lakes formed by landslides.", "A popular destination for nature photographers.", "Rich in beech, oak, and pine trees."]
    }, image: "/poi-images/turkey-yedigoller-national-park-nature-v2.webp",
    descriptionAdvanced: {
      de: "Der Yedigöller-Nationalpark in der Provinz Bolu umfasst sieben durch Erdrutsche entstandene Seen. Er ist besonders im Herbst für sein spektakuläres Farbspiel der Laubwälder berühmt.",
      hu: "A Bolu tartományban található Yedigöller (Hét-tó) Nemzeti Park hét apró tóról kapta a nevét, melyeket földcsuszamlások hoztak létre. Ősszel a lombok színes kavalkádja vonzza a látogatókat.",
      ro: "Parcul Național Yedigöller din provincia Bolu cuprinde șapte lacuri formate prin alunecări de teren. Este celebru mai ales toamna pentru explozia de culori a pădurilor de foioase.",
      en: "Yedigöller National Park in Bolu province features seven lakes formed by landslides. It is renowned for its breathtaking autumn foliage, as the dense forest turns vibrant shades of orange and red.",
    },
    factsAdvanced: {
      de: ["Gegründet: 1965", "Höhenlage: 700 bis 900 m", "Seen: Büyükgöl, Küçükgöl u.a.", "Reich an Buchen und Eichen"],
      hu: ["Alapítva: 1965", "Tengerszint feletti magasság: 700-900 m", "Legnagyobb tava a Büyükgöl", "Bükk- és tölgyerdők uralják"],
      ro: ["Înființat în: 1965", "Altitudine: între 700 și 900 m", "Include lacul Büyükgöl", "Păduri bogate de fag și stejar"],
      en: ["Established in: 1965", "Elevation: 700 to 900 meters", "Main lake: Büyükgöl (Big Lake)", "Rich in beech and oak trees"],
    },
  },
  {
    id: "turkey-koprulu-canyon-nature-v2",
    type: "national-park",
    parent: "TR-07",
    coords: [31.1833, 37.1833],
    name: { de: "Köprülü-Kanyon-Nationalpark", hu: "Köprülü-kanyon Nemzeti Park", ro: "Parcul Național Canionul Köprülü", en: "Köprülü Canyon National Park"},
    image: "/poi-images/turkey-koprulu-canyon-nature-v2.webp",
    description: {
      de: "Ein atemberaubendes Flusstal im Taurusgebirge, das für Wildwasser-Rafting und römische Steinbrücken bekannt ist.",
      hu: "Egy lélegzetelállító folyóvölgy a Torosz-hegységben, amely a vadvízi evezésről és a római kőhidakról ismert.",
      ro: "O vale uluitoare a râului din Munții Taurus, cunoscută pentru rafting și poduri romane de piatră.",
      en: "A breathtaking river valley in the Taurus Mountains, known for whitewater rafting and Roman stone bridges."
    },
    facts: {
      de: ["Die Schlucht ist bis zu 400 Meter tief.", "Enthält die antike Stadt Selge.", "Beliebter Ort für Outdoor-Sportarten."],
      hu: ["A szurdok akár 400 méter mély is lehet.", "A területen fekszik Selge ókori városa.", "Népszerű helyszín a szabadtéri sportokhoz."],
      ro: ["Canionul are o adâncime de până la 400 de metri.", "Conține orașul antic Selge.", "Loc popular pentru sporturi în aer liber."],
      en: ["The canyon is up to 400 meters deep.", "Contains the ancient city of Selge.", "Popular location for outdoor sports."]
    }, image: "/poi-images/turkey-koprulu-canyon-nature-v2.webp",
    descriptionAdvanced: {
      de: "Der Köprülü-Kanyon-Nationalpark in Antalya bietet eine der dramatischsten Schluchten der Türkei. Der Fluss Köprüçay fließt hier unter antiken römischen Brücken hindurch und lädt zum Rafting ein.",
      hu: "Az Antalya tartományban fekvő Köprülü-kanyon Törökország egyik leglátványosabb szurdoka. A Köprüçay-folyó ókori római hidak alatt kanyarog, ma pedig a vadvízi evezés központja.",
      ro: "Parcul Național Köprülü Canyon din Antalya adăpostește unul dintre cele mai spectaculoase canioane din Turcia. Râul Köprüçay trece pe sub poduri romane antice, fiind ideal pentru rafting.",
      en: "Köprülü Canyon National Park in Antalya features one of Turkey's most dramatic gorges. The Köprüçay River winds beneath ancient Roman bridges, offering world-class white-water rafting opportunities.",
    },
    factsAdvanced: {
      de: ["Länge des Kanyons: 14 km", "Tiefe: bis zu 400 Meter", "Brücke: Oluk Köprü (2. Jh. n. Chr.)", "Größter Mittelmeer-Zypressenwald"],
      hu: ["A kanyon hossza: 14 km", "Mélysége: akár 400 méter", "Híd: Oluk Köprü (i.sz. 2. század)", "Európa legnagyobb cipruserdeje"],
      ro: ["Lungime canion: 14 km", "Adâncime: până la 400 metri", "Pod: Oluk Köprü (sec. II d.Hr.)", "Cea mai mare pădure de chiparoși"],
      en: ["Canyon length: 14 km", "Depth: up to 400 meters", "Bridge: Oluk Köprü (2nd century AD)", "Largest Mediterranean cypress forest"],
    },
  },
  {
    id: "turkey-munzur-valley-nature-v2",
    type: "national-park",
    parent: "TR-62",
    coords: [39.5000, 39.3333],
    name: { de: "Munzur-Tal-Nationalpark", hu: "Munzur-völgy Nemzeti Park", ro: "Parcul Național Valea Munzur", en: "Munzur Valley National Park"},
    image: "/poi-images/turkey-munzur-valley-nature-v2.webp",
    description: {
      de: "Der Munzur-Tal-Nationalpark in Ostanatolien ist geprägt von schroffen Bergen, tiefen Schluchten und seltenen Wildtierarten.",
      hu: "A kelet-anatóliai Munzur-völgy Nemzeti Parkot zord hegyek, mély szurdokok és ritka vadon élő állatok jellemzik.",
      ro: "Parcul Național Valea Munzur din estul Anatoliei se caracterizează prin munți abrupți, defilee adânci și specii rare de faună sălbatică.",
      en: "Munzur Valley National Park in Eastern Anatolia is characterized by rugged mountains, deep gorges, and rare wildlife species."
    },
    facts: {
      de: ["Einer der größten Nationalparks der Türkei.", "Reich an endemischen Pflanzenarten.", "Lebensraum der seltenen Munzur-Forelle."],
      hu: ["Törökország egyik legnagyobb nemzeti parkja.", "Endemikus növényfajokban gazdag.", "A ritka munzuri pisztráng élőhelye."],
      ro: ["Unul dintre cele mai mari parcuri naționale din Turcia.", "Bogat în specii de plante endemice.", "Habitat pentru păstrăvul rar de Munzur."],
      en: ["One of the largest national parks in Turkey.", "Rich in endemic plant species.", "Habitat of the rare Munzur trout."]
    }, image: "/poi-images/turkey-munzur-valley-nature-v2.webp",
    descriptionAdvanced: {
      de: "Das Munzur-Tal in Ostanatolien ist für seine unberührte Natur und die sprudelnden Quellen bekannt. Das Gebirgswasser des Munzur-Flusses gilt als besonders rein und ist heilig für die lokale Bevölkerung.",
      hu: "A Kelet-Anatóliában fekvő Munzur-völgy érintetlen természetéről és kristálytiszta forrásairól híres. A Munzur-folyó vize rendkívül tiszta, a helyi lakosok számára pedig vallási jelentőséggel bír.",
      ro: "Valea Munzur din Anatolia de Est este cunoscută pentru natura sa neatinsă și izvoarele repezi. Apele râului Munzur sunt extrem de pure și sunt considerate sacre de către populația locală.",
      en: "Munzur Valley in Eastern Anatolia is celebrated for its untouched wilderness and gushing springs. The Munzur River's crystal-clear waters are exceptionally pure and hold sacred status for the locals.",
    },
    factsAdvanced: {
      de: ["Nationalpark seit 1971", "Fläche: 42.674 Hektar", "Reich an endemischen Pflanzen", "Heimat von Wildschafen und Bären"],
      hu: ["Nemzeti park 1971 óta", "Területe: 42 674 hektár", "Számos endemikus növényfaj", "Vad juhok és medvék élőhelye"],
      ro: ["Parc Național din 1971", "Suprafață: 42.674 hectare", "Bogată în plante endemice", "Habitat pentru oi sălbatice și urși"],
      en: ["National Park since 1971", "Area: 42,674 hectares", "Rich in endemic plant species", "Habitat for wild sheep and bears"],
    },
  },
  {
    id: "turkey-mount-suphan-nature-v2",
    type: "mountain",
    parent: "TR-13",
    coords: [42.8167, 38.9333],
    name: { de: "Süphan Dağı", hu: "Süphan-hegy", ro: "Muntele Süphan", en: "Mount Süphan"},
    image: "/poi-images/turkey-mount-suphan-nature-v2.webp",
    description: {
      de: "Der Süphan Dağı ist ein ruhender Vulkan und der dritthöchste Berg der Türkei, gelegen am nördlichen Ufer des Vansees.",
      hu: "A Süphan-hegy egy szunnyadó vulkán és Törökország harmadik legmagasabb hegye, a Van-tó északi partján.",
      ro: "Muntele Süphan este un vulcan adormit și al treilea cel mai înalt munte din Turcia, situat pe malul nordic al Lacului Van.",
      en: "Mount Süphan is a dormant volcano and the third highest mountain in Turkey, located on the northern shore of Lake Van."
    },
    facts: {
      de: ["Erreicht eine Höhe von 4058 Metern.", "Oft von einer dicken Schneedecke gekrönt.", "Ein anspruchsvolles Ziel für Bergsteiger."],
      hu: ["Eléri a 4058 méteres magasságot.", "Gyakran vastag hótakaró borítja.", "Kihívást jelentő célpont a hegymászóknak."],
      ro: ["Atinge o altitudine de 4058 de metri.", "Adesea încoronat cu un strat gros de zăpadă.", "O destinație provocatoare pentru alpiniști."],
      en: ["Reaches an elevation of 4058 meters.", "Often crowned with a thick layer of snow.", "A challenging destination for mountaineers."]
    }, image: "/poi-images/turkey-mount-suphan-nature-v2.webp",
    descriptionAdvanced: {
      de: "Der Berg Süphan ist ein majestätischer, erloschener Vulkan am Nordufer des Van-Sees. Er ist der dritthöchste Gipfel der Türkei und bietet Wanderern einen weiten Blick über das anatolische Hochland.",
      hu: "A Süphan-hegy egy tekintélyes kialudt vulkán a Van-tó északi partján. Törökország harmadik legmagasabb csúcsa, amelyről lélegzetelállító kilátás nyílik a környező anatóliai fennsíkokra.",
      ro: "Muntele Süphan este un vulcan stins maiestuos, situat pe malul nordic al Lacului Van. Este al treilea cel mai înalt vârf din Turcia, oferind panorame superbe asupra platoului anatolian.",
      en: "Mount Süphan is a majestic dormant volcano on the northern shores of Lake Van. As Turkey's third-highest peak, it offers climbers sweeping views over the rugged Anatolian highlands.",
    },
    factsAdvanced: {
      de: ["Höhe: 4.058 Meter", "Erloschener Schichtvulkan", "Besteigung meist im Sommer", "Dritthöchster Berg der Türkei"],
      hu: ["Magasság: 4058 méter", "Kialudt rétegvulkán", "Nyáron a legnépszerűbb túracélpont", "Törökország 3. legmagasabb hegye"],
      ro: ["Înălțime: 4.058 metri", "Vulcan stins (stratovulcan)", "Ascensiune recomandată vara", "Al treilea vârf ca înălțime din țară"],
      en: ["Height: 4,058 meters", "Dormant stratovolcano", "Popular for summer trekking", "Turkey's third-highest mountain"],
    },
  },
  {
    id: "turkey-belgrad-forest-nature-v2",
    type: "forest",
    parent: "TR-34",
    coords: [28.9667, 41.2000],
    name: { de: "Belgrader Wald", hu: "Belgrádi erdő", ro: "Pădurea Belgrad", en: "Belgrad Forest"},
    image: "/poi-images/turkey-belgrad-forest-nature-v2.webp",
    description: {
      de: "Ein ausgedehnter Mischwald im Nordwesten von Istanbul, der als wichtige Frischluftquelle und Erholungsgebiet für die Stadt dient.",
      hu: "Egy kiterjedt vegyes erdő Isztambul északnyugati részén, amely fontos friss levegőforrásként és rekreációs területként szolgál a város számára.",
      ro: "O pădure mixtă extinsă în nord-vestul Istanbulului, care servește ca o sursă importantă de aer proaspăt și zonă de recreere pentru oraș.",
      en: "An extensive mixed forest in the northwest of Istanbul, serving as an important source of fresh air and recreation area for the city."
    },
    facts: {
      de: ["Beherbergt historische osmanische Staudämme.", "Bietet zahlreiche Wander- und Laufstrecken.", "Wurde nach serbischen Gefangenen benannt."],
      hu: ["Történelmi oszmán gátaknak ad otthont.", "Számos túra- és futópályát kínál.", "Szerb foglyokról nevezték el."],
      ro: ["Găzduiește baraje istorice otomane.", "Oferă numeroase trasee de drumeții și alergare.", "A fost numită după prizonierii sârbi."],
      en: ["Houses historical Ottoman dams.", "Offers numerous hiking and running trails.", "Was named after Serbian prisoners."]
    }, image: "/poi-images/turkey-belgrad-forest-nature-v2.webp",
    descriptionAdvanced: {
      de: "Der Belgrader Wald ist die grüne Lunge von Istanbul und erstreckt sich am östlichen Ende der thrakischen Halbinsel. Er beherbergt historische Stauseen, die einst die Stadt mit Wasser versorgten.",
      hu: "A Belgrád-erdő Isztambul tüdeje, amely a város északi részén terül el. Az erdő mélyén történelmi víztározók és gátak találhatók, melyek egykor a város vízellátását biztosították.",
      ro: "Pădurea Belgrad este plămânul verde al Istanbulului, situată în nordul metropolei. Găzduiește rezervoare istorice și baraje care alimentau orașul cu apă în perioada otomană.",
      en: "Belgrad Forest is the green lung of Istanbul, located at the eastern edge of the Thracian Peninsula. It contains historic reservoirs and aqueducts that once supplied the city with water.",
    },
    factsAdvanced: {
      de: ["Fläche: ca. 5.500 Hektar", "Enthält 7 historische Dämme", "Über 70 Vogelarten gesichtet", "Beliebtes Naherholungsgebiet"],
      hu: ["Területe: kb. 5500 hektár", "7 történelmi gát található benne", "Több mint 70 madárfaj otthona", "Isztambuliak kedvelt kirándulóhelye"],
      ro: ["Suprafață: aprox. 5.500 hectare", "Conține 7 baraje istorice", "Peste 70 de specii de păsări", "Zonă majoră de recreere urbană"],
      en: ["Area: approx. 5,500 hectares", "Home to 7 historic dams", "Over 70 bird species recorded", "Popular weekend getaway for locals"],
    },
  },
  {
    id: "turkey-lake-bafa-nature-v2",
    type: "lake",
    parent: "TR-09",
    coords: [27.4667, 37.5000],
    name: { de: "Bafa-See", hu: "Bafa-tó", ro: "Lacul Bafa", en: "Lake Bafa"},
    image: "/poi-images/turkey-lake-bafa-nature-v2.webp",
    description: {
      de: "Der Bafa-See ist ein Flachwassersee in der Ägäisregion, der einst ein Golf der Ägäis war, bevor er durch Sedimente abgetrennt wurde.",
      hu: "A Bafa-tó egy sekély vizű tó az égei-tengeri régióban, amely egykor az Égei-tenger öble volt, mielőtt üledékek elzárták volna.",
      ro: "Lacul Bafa este un lac de mică adâncime din regiunea Mării Egee, care odată a fost un golf al Mării Egee înainte de a fi separat de sedimente.",
      en: "Lake Bafa is a shallow lake in the Aegean region that was once a gulf of the Aegean Sea before being separated by sediments."
    },
    facts: {
      de: ["Ein Paradies für Vogelbeobachter.", "Umgeben vom wilden Latmos-Gebirge.", "Zeigt Ruinen der antiken Stadt Herakleia."],
      hu: ["A madármegfigyelők paradicsoma.", "A vad Latmosz-hegység veszi körül.", "Herakleia ókori városának romjait mutatja be."],
      ro: ["Un paradis pentru observatorii de păsări.", "Înconjurat de sălbaticii Munți Latmus.", "Prezintă ruinele orașului antic Heracleea."],
      en: ["A paradise for birdwatchers.", "Surrounded by the wild Latmus Mountains.", "Features ruins of the ancient city of Heraclea."]
    }, image: "/poi-images/turkey-lake-bafa-nature-v2.webp",
    descriptionAdvanced: {
      de: "Der Bafa-See war in der Antike ein Teil des Golfs von Milet, bevor er durch Sedimente des Mäanders vom Meer getrennt wurde. Er ist gesäumt von antiken Ruinen und den Felsen des Latmos-Gebirges.",
      hu: "A Bafa-tó az ókorban még a tenger része volt (Lade-öböl), de a Menderes-folyó hordaléka elzárta a kijáratát. Partján az ókori Hérakleia romjai és bizarr sziklaalakzatok láthatók.",
      ro: "Lacul Bafa a fost în antichitate un golf al Mării Egee, izolat ulterior de aluviunile râului Menderes. Este înconjurat de ruine antice și de stâncile spectaculoase ale Munților Latmos.",
      en: "Lake Bafa was once a gulf of the Aegean Sea before being cut off by silt from the Meander River. It is framed by the rugged Latmos Mountains and the ruins of ancient Heracleia.",
    },
    factsAdvanced: {
      de: ["Fläche: ca. 60 km²", "Ehemals Meeresbucht (Latmischer Golf)", "Antike Ruinen von Herakleia am See", "Heimat von Fischadlern und Pelikanen"],
      hu: ["Területe: kb. 60 km²", "Eredetileg tengeröböl volt", "Itt találhatók Hérakleia romjai", "Halászsasok és pelikánok fészkelőhelye"],
      ro: ["Suprafață: aprox. 60 km²", "Fost golf marin (Golful Latmic)", "Găzduiește ruinele orașului Heracleia", "Habitat pentru vulturi pescari"],
      en: ["Surface area: approx. 60 km²", "Formerly a marine gulf (Latmian Gulf)", "Site of ancient Heracleia ruins", "Refuge for ospreys and pelicans"],
    },
  },
  {
    id: "turkey-seyhan-river-nature-v2",
    type: "river",
    parent: "TR-01",
    coords: [34.9000, 36.7167],
    name: { de: "Seyhan", hu: "Seyhan", ro: "Râul Seyhan", en: "Seyhan River"},
    image: "/poi-images/turkey-seyhan-river-nature-v2.webp",
    description: {
      de: "Der Seyhan ist der längste Fluss, der in der Türkei ins Mittelmeer mündet, und durchfließt die fruchtbare Çukurova-Ebene.",
      hu: "A Seyhan a leghosszabb Törökországban a Földközi-tengerbe ömlő folyó, és a termékeny Çukurova-síkságon folyik keresztül.",
      ro: "Seyhan este cel mai lung râu care se varsă în Marea Mediterană în Turcia și curge prin câmpia fertilă Çukurova.",
      en: "The Seyhan is the longest river flowing into the Mediterranean Sea within Turkey, and it flows through the fertile Çukurova plain."
    },
    facts: {
      de: ["Spielt eine wichtige Rolle in der Landwirtschaft.", "Wird durch die Seyhan-Talsperre gestaut.", "Fließt direkt durch die Großstadt Adana."],
      hu: ["Fontos szerepet játszik a mezőgazdaságban.", "A Seyhan-gát duzzasztja fel.", "Közvetlenül Adana nagyvárosán folyik keresztül."],
      ro: ["Joacă un rol important în agricultură.", "Este reținut de barajul Seyhan.", "Curge direct prin marele oraș Adana."],
      en: ["Plays an important role in agriculture.", "Is dammed by the Seyhan Dam.", "Flows directly through the large city of Adana."]
    }, image: "/poi-images/turkey-seyhan-river-nature-v2.webp",
    descriptionAdvanced: {
      de: "Der Seyhan ist der längste Fluss, der in das Mittelmeer mündet und die fruchtbare Çukurova-Ebene durchfließt. In Adana überspannt die historische Steinbrücke Taşköprü seine breite Strömung.",
      hu: "A Seyhan a Földközi-tengerbe ömlő leghosszabb török folyó, amely a termékeny Çukurova-alföldön halad át. Adana városában az ókori római Taşköprü híd ível át a vize felett.",
      ro: "Râul Seyhan este cel mai lung curs de apă din Turcia care se varsă în Marea Mediterană. Traversează câmpia fertilă Çukurova, trecând prin orașul Adana sub podul istoric Taşköprü.",
      en: "The Seyhan is the longest river in Turkey to empty into the Mediterranean. It nourishes the fertile Çukurova plain and flows through Adana, where the Roman Taşköprü bridge spans its waters.",
    },
    factsAdvanced: {
      de: ["Länge: 560 km", "Wichtigster Fluss der Çukurova", "Speist den Seyhan-Stausee", "Mündet südlich von Tarsus"],
      hu: ["Hosszúsága: 560 km", "A Çukurova-alföld fő folyója", "A Seyhan-víztározót táplálja", "Tarsustól délre ömlik a tengerbe"],
      ro: ["Lungime: 560 km", "Principalul râu din câmpia Çukurova", "Alimentează barajul Seyhan", "Gura de vărsare: sud de Tarsus"],
      en: ["Length: 560 km", "Main river of the Çukurova plain", "Feeds the large Seyhan Dam", "Empties into the sea south of Tarsus"],
    },
  },
  {
    id: "turkey-aladaglar-nature-v2",
    type: "national-park",
    parent: "TR-51",
    coords: [35.1500, 37.8333],
    name: { de: "Aladağlar-Nationalpark", hu: "Aladağlar Nemzeti Park", ro: "Parcul Național Aladağlar", en: "Aladağlar National Park"},
    image: "/poi-images/turkey-aladaglar-nature-v2.webp",
    description: {
      de: "Dieses bergige Wunderland wird oft als die Alpen der Türkei bezeichnet und bietet steile Klippen und tiefe Täler.",
      hu: "Ezt a hegyvidéki csodavilágot gyakran Törökország Alpokjának nevezik, és meredek sziklákat és mély völgyeket kínál.",
      ro: "Această țară a minunilor muntoase este adesea numită Alpii Turciei și oferă stânci abrupte și văi adânci.",
      en: "This mountainous wonderland is often referred to as the Alps of Turkey and offers steep cliffs and deep valleys."
    },
    facts: {
      de: ["Der höchste Gipfel ist der Kızılkaya (3767 m).", "Zieht Kletterer und Trekker aus der ganzen Welt an.", "Bekannt für seine vielfältige Flora und Fauna."],
      hu: ["A legmagasabb csúcsa a Kızılkaya (3767 m).", "A világ minden tájáról vonzza a hegymászókat és túrázókat.", "Változatos növény- és állatvilágáról ismert."],
      ro: ["Cel mai înalt vârf este Kızılkaya (3767 m).", "Atrage alpiniști și iubitori de drumeții din întreaga lume.", "Cunoscut pentru flora și fauna sa diversă."],
      en: ["The highest peak is Kızılkaya (3767 m).", "Attracts climbers and trekkers from all over the world.", "Known for its diverse flora and fauna."]
    }, image: "/poi-images/turkey-aladaglar-nature-v2.webp",
    descriptionAdvanced: {
      de: "Der Aladağlar-Nationalpark im Taurusgebirge ist ein Paradies für Bergsteiger. Die zerklüfteten Kalksteinformationen, tiefen Schluchten und Wasserfälle wie die Kapuzbaşı-Fälle prägen die Landschaft.",
      hu: "A Torosz-hegységben található Aladağlar Nemzeti Park a hegymászók paradicsoma. Csipkés mészkőcsúcsok, mély kanyonok és a lenyűgöző Kapuzbaşı-vízesések alkotják a táj képét.",
      ro: "Parcul Național Aladağlar din Munții Taurus este un paradis pentru alpiniști. Formațiunile calcaroase abrupte, canioanele adânci și cascadele Kapuzbaşı definesc acest peisaj sălbatic.",
      en: "Aladağlar National Park in the Taurus Mountains is a mountaineering paradise. It is characterized by jagged limestone peaks, deep canyons, and the spectacular Kapuzbaşı waterfalls.",
    },
    factsAdvanced: {
      de: ["Höchster Gipfel: Demirkazık (3.756 m)", "Nationalpark seit 1995", "Berühmt für die Kapuzbaşı-Fälle", "Zentrum für Klettersport"],
      hu: ["Legmagasabb csúcs: Demirkazık (3756 m)", "Nemzeti park 1995 óta", "Itt találhatók a Kapuzbaşı-vízesések", "Fontos hegymászó központ"],
      ro: ["Vârful Demirkazık: 3.756 m", "Parc Național din 1995", "Faimos pentru Cascadele Kapuzbaşı", "Destinație majoră pentru alpinism"],
      en: ["Highest peak: Demirkazık (3,756 m)", "National Park status since 1995", "Famous for Kapuzbaşı waterfalls", "Premier rock climbing destination"],
    },
  },
  {
    id: "turkey-mount-hasan-nature-v2",
    type: "mountain",
    parent: "TR-68",
    coords: [34.1667, 38.1333],
    name: { de: "Hasan Dağı", hu: "Hasan-hegy", ro: "Muntele Hasan", en: "Mount Hasan"},
    image: "/poi-images/turkey-mount-hasan-nature-v2.webp",
    description: {
      de: "Der Hasan Dağı ist ein ruhender Doppelgipfel-Vulkan, dessen Silhouette die Landschaft von Aksaray und Niğde dominiert.",
      hu: "A Hasan-hegy egy szunnyadó, kétcsúcsú vulkán, amelynek sziluettje uralja Aksaray és Niğde táját.",
      ro: "Muntele Hasan este un vulcan adormit cu două vârfuri, a cărui siluetă domină peisajul din Aksaray și Niğde.",
      en: "Mount Hasan is a dormant twin-peaked volcano whose silhouette dominates the landscape of Aksaray and Niğde."
    },
    facts: {
      de: ["Sein höchster Punkt liegt bei 3268 Metern.", "Ein prähistorischer Obsidian-Lieferant.", "Beliebt für Paragliding und Bergsteigen."],
      hu: ["Legmagasabb pontja 3268 méter.", "Történelem előtti obszidián-lelőhely.", "Népszerű a siklóernyőzés és a hegymászás rajongói körében."],
      ro: ["Cel mai înalt punct al său este la 3268 de metri.", "O sursă preistorică de obsidian.", "Popular pentru parapantă și alpinism."],
      en: ["Its highest point is at 3268 meters.", "A prehistoric supplier of obsidian.", "Popular for paragliding and mountaineering."]
    }, image: "/poi-images/turkey-mount-hasan-nature-v2.webp",
    descriptionAdvanced: {
      de: "Der Hasan Dağı ist ein imposanter, inaktiver Schichtvulkan, der die Landschaft von Kappadokien dominiert. Er besitzt zwei Gipfel und ist vermutlich auf steinzeitlichen Wandgemälden abgebildet.",
      hu: "A Hasan-hegy egy impozáns, inaktív rétegvulkán, amely Kappadókia látképét uralja. Két különálló csúcsa van, és feltehetően már egy újkőkorszaki falfestményen is megörökítették.",
      ro: "Muntele Hasan este un vulcan stins impunător care domină peisajul din Cappadocia. Are două vârfuri distincte și apare probabil în cele mai vechi picturi rupestre din lume.",
      en: "Mount Hasan is an imposing inactive stratovolcano that looms over the Cappadocian landscape. It has twin peaks and is famously thought to be depicted in Neolithic cave paintings.",
    },
    factsAdvanced: {
      de: ["Höhe: 3.268 Meter", "Zwei Gipfel (Großer u. Kleiner Hasan)", "Nahe der antiken Stadt Çatalhöyük", "Inaktiver Schichtvulkan"],
      hu: ["Magasság: 3268 méter", "Két csúcsa van (Büyük és Küçük Hasan)", "Çatalhöyük közelében található", "Inaktív rétegvulkán"],
      ro: ["Înălțime: 3.268 metri", "Două vârfuri (Hasan Mare și Mic)", "Situat lângă situl Çatalhöyük", "Vulcan inactiv (stratovulcan)"],
      en: ["Elevation: 3,268 meters", "Twin summits (Big and Small Hasan)", "Near the ancient site of Çatalhöyük", "Inactive stratovolcano"],
    },
  },
  {
    id: "turkey-kaz-daglari-nature-v2",
    type: "national-park",
    parent: "TR-10",
    coords: [26.8500, 39.7000],
    name: { de: "Kaz Dağları Nationalpark", hu: "Kaz Dağları Nemzeti Park", ro: "Parcul Național Kaz Dağları", en: "Kaz Dağları National Park"},
    image: "/poi-images/turkey-kaz-daglari-nature-v2.webp",
    description: {
      de: "Der Kaz Dağları Nationalpark, bekannt als das antike Berg Ida, ist eine üppig bewaldete Region mit reicher Mythologie.",
      hu: "A Kaz Dağları Nemzeti Park, az ókori Ida-hegyként is ismert terület egy dús erdőkkel borított régió, amely gazdag mitológiával rendelkezik.",
      ro: "Parcul Național Kaz Dağları, cunoscut ca anticul Munte Ida, este o regiune cu păduri luxuriante și o mitologie bogată.",
      en: "Kaz Dağları National Park, known as the ancient Mount Ida, is a lushly forested region with rich mythology."
    },
    facts: {
      de: ["Der Schauplatz vieler griechischer Mythen.", "Bietet einen der höchsten Sauerstoffgehalte der Welt.", "Zahlreiche Wasserfälle und heilende Quellen."],
      hu: ["Számos görög mítosz helyszíne.", "A világ egyik legmagasabb oxigénszintjét kínálja.", "Számos vízesés és gyógyforrás található itt."],
      ro: ["Locul de desfășurare al multor mituri grecești.", "Oferă unul dintre cele mai ridicate niveluri de oxigen din lume.", "Numeroase cascade și izvoare vindecătoare."],
      en: ["The setting of many Greek myths.", "Offers one of the highest oxygen levels in the world.", "Numerous waterfalls and healing springs."]
    }, image: "/poi-images/turkey-kaz-daglari-nature-v2.webp",
    descriptionAdvanced: {
      de: "Die Kaz Dağları, in der Antike als Berg Ida bekannt, liegen im Nordwesten der Türkei. Das Gebirge ist berühmt für seine hohe Sauerstoffkonzentration und seine Rolle in der griechischen Mythologie.",
      hu: "A Kaz-hegység (Kaz Dağları), az ókori Ida-hegy, Északnyugat-Törökországban található. Kiemelkedően magas oxigénkoncentrációjáról és a görög mitológiában betöltött szerepéről híres.",
      ro: "Munții Kaz (Kaz Dağları), cunoscuți în antichitate sub numele de Muntele Ida, se află în nord-vestul Turciei. Sunt renumiți pentru nivelul ridicat de oxigen și rolul în mitologia greacă.",
      en: "The Kaz Mountains, known in antiquity as Mount Ida, are located in northwestern Turkey. The range is famous for its exceptionally high oxygen levels and its rich role in Greek mythology.",
    },
    factsAdvanced: {
      de: ["Höchster Punkt: 1.774 m (Karataş)", "Mythologischer Ort (Urteil des Paris)", "Nationalpark seit 1994", "Reich an endemischen Tannenarten"],
      hu: ["Legmagasabb pont: 1774 m", "Párisz almájának mitológiai helyszíne", "Nemzeti park 1994 óta", "Sajátos jegenyefenyő-fajok hazája"],
      ro: ["Altitudine maximă: 1.774 m", "Locul mitologic al Judecății lui Paris", "Parc Național din 1994", "Păduri de brazi endemici"],
      en: ["Highest point: 1,774 meters", "Mythological site (Judgment of Paris)", "National Park since 1994", "Home to endemic fir species"],
    },
  },
  {
    id: "turkey-buyuk-menderes-nature-v2",
    type: "river",
    parent: "TR-09",
    coords: [27.1833, 37.5333],
    name: { de: "Büyük Menderes", hu: "Nagy-Menderes", ro: "Marele Meandru", en: "Büyük Menderes River"},
    image: "/poi-images/turkey-buyuk-menderes-nature-v2.webp",
    description: {
      de: "Der Große Mäander ist ein bedeutender Fluss in Westanatolien, der für seine stark gewundenen Kurven, die sogenannten Mäander, berühmt ist.",
      hu: "A Nagy-Menderes egy jelentős folyó Nyugat-Anatóliában, amely erősen kanyargós íveiről, az úgynevezett meanderekről híres.",
      ro: "Marele Meandru este un râu important în vestul Anatoliei, faimos pentru curbele sale puternic șerpuite, numite meandre.",
      en: "The Büyük Menderes is a major river in western Anatolia, famous for its winding curves, known as meanders."
    },
    facts: {
      de: ["Mündet in die Ägäis.", "Etwa 548 Kilometer lang.", "Bildet ein wertvolles Feuchtgebiet-Delta."],
      hu: ["Az Égei-tengerbe ömlik.", "Körülbelül 548 kilométer hosszú.", "Értékes vizesélőhely-deltát alkot."],
      ro: ["Se varsă în Marea Egee.", "Are o lungime de aproximativ 548 de kilometri.", "Formează o deltă și o zonă umedă valoroasă."],
      en: ["Empties into the Aegean Sea.", "About 548 kilometers long.", "Forms a valuable wetland delta."]
    }, image: "/poi-images/turkey-buyuk-menderes-nature-v2.webp",
    descriptionAdvanced: {
      de: "Der Große Mäander ist ein historisch bedeutender Fluss in der Westtürkei. Er ist berühmt für seinen gewundenen Verlauf, der dem geographischen Fachbegriff Mäander seinen Namen gab.",
      hu: "A Büyük Menderes (Nagy-Menderes) Nyugat-Törökország jelentős folyója. Kanyargós medréről vált világhírűvé, hiszen tőle ered a földrajzi szakkifejezés, a kanyarulat (meander) elnevezése.",
      ro: "Büyük Menderes este un râu istoric important din vestul Turciei. Este celebru pentru cursul său extrem de sinuos, care a dat numele termenului geografic de meandru.",
      en: "The Büyük Menderes is a historically significant river in western Turkey. It is famous for its winding course, which gave rise to the geographic term 'meander' for curving rivers.",
    },
    factsAdvanced: {
      de: ["Gesamtlänge: 615 km", "Gibt dem Mäander-Begriff den Namen", "Mündet ins Ägäische Meer", "Speist fruchtbare Täler"],
      hu: ["Hosszúsága: 615 km", "A meander szakkifejezés névadója", "Az Égei-tengerbe ömlik", "Mezőgazdaságilag kulcsfontosságú völgy"],
      ro: ["Lungime totală: 615 km", "Eponimul termenului de meandru", "Se varsă în Marea Egee", "Valea sa este extrem de fertilă"],
      en: ["Total length: 615 km", "Eponym for the term 'meander'", "Empties into the Aegean Sea", "Supports highly fertile agricultural valleys"],
    },
  },
  {
    id: "turkey-lake-salda-nature-v2",
    type: "lake",
    parent: "TR-15",
    coords: [29.6833, 37.5500],
    name: { de: "Salda-See", hu: "Salda-tó", ro: "Lacul Salda", en: "Lake Salda"},
    image: "/poi-images/turkey-lake-salda-nature-v2.webp",
    description: {
      de: "Der Salda-See ist ein mittelgroßer Kratersee, der wegen seines türkisfarbenen Wassers und weißen Sandes oft als die türkischen Malediven bezeichnet wird.",
      hu: "A Salda-tó egy közepes méretű krátertó, amelyet türkizkék vize és fehér homokja miatt gyakran a török Maldív-szigeteknek neveznek.",
      ro: "Lacul Salda este un lac de crater de mărime medie, adesea numit Maldivele Turciei datorită apei sale turcoaz și nisipului alb.",
      en: "Lake Salda is a mid-size crater lake, often referred to as the Turkish Maldives due to its turquoise waters and white sand."
    },
    facts: {
      de: ["Mit 196 Metern einer der tiefsten Seen der Türkei.", "Reich an feinem, weißem Hydromagnesit-Sand.", "Die Mineralien ähneln denen im Jezero-Krater auf dem Mars."],
      hu: ["196 méterével Törökország egyik legmélyebb tava.", "Gazdag finom, fehér hidromagnezit homokban.", "Ásványai hasonlóak a Marson lévő Jezero-kráterben találhatóakhoz."],
      ro: ["Cu o adâncime de 196 de metri, este unul dintre cele mai adânci lacuri din Turcia.", "Bogat în nisip alb fin de hidromagnezită.", "Mineralele sunt similare cu cele găsite în craterul Jezero de pe Marte."],
      en: ["At 196 meters, one of the deepest lakes in Turkey.", "Rich in fine, white hydromagnesite sand.", "Its minerals are similar to those found in the Jezero crater on Mars."]
    },
    descriptionAdvanced: {
      de: "Der Salda-See wird oft als die türkischen Malediven bezeichnet. Er besticht durch seinen weißen Sand und das azurblaue Wasser, wobei seine Mineralstruktur Ähnlichkeiten mit dem Marsboden aufweist.",
      hu: "A Salda-tavat gyakran török Maldív-szigetekként emlegetik fehér homokja és azúrkék vize miatt. Különleges ásványi összetétele tudományos körökben a Mars talajával mutat hasonlóságot.",
      ro: "Lacul Salda este supranumit Maldivele Turciei datorită nisipului alb și apei turcoaz. Structura sa minerală unică este comparată de cercetători cu cea de pe planeta Marte.",
      en: "Lake Salda is often called the 'Maldives of Turkey' for its white magnesium-rich sands and azure waters. Its unique mineralogy is of great interest to NASA for its similarities to Mars.",
    },
    factsAdvanced: {
      de: ["Tiefe: bis zu 184 Meter", "Einer der tiefsten Seen der Türkei", "Hoher Magnesiumgehalt im Wasser", "NASA-Forschungsobjekt (Mars-Analogie)"],
      hu: ["Mélysége: 184 méter", "Törökország egyik legmélyebb tava", "Magas magnéziumtartalmú homok", "A NASA marsi kutatásokhoz használja"],
      ro: ["Adâncime: până la 184 metri", "Unul dintre cele mai adânci lacuri", "Nisip bogat în magneziu", "Obiect de studiu NASA (analogie Marte)"],
      en: ["Depth: up to 184 meters", "One of Turkey's deepest lakes", "High magnesium mineral content", "Studied by NASA for Mars similarities"],
    },
  }
];
