// @ts-nocheck
// AUTO-GENERATED
import type { POI } from "./poi";
import { poiExtraCostaricaCitiesV2 } from "./poiExtraCostaricaCitiesV2";
import { poiExtraCostaricaEconomicV2 } from "./poiExtraCostaricaEconomicV2";
import { poiExtraCostaricaHistoryV2 } from "./poiExtraCostaricaHistoryV2";
import { poiExtraCostaricaLandmarksV2 } from "./poiExtraCostaricaLandmarksV2";
import { poiExtraCostaricaNatureV2 } from "./poiExtraCostaricaNatureV2";
import { poiExtraCostaricaReliefV2 } from "./poiExtraCostaricaReliefV2";
import { poiExtraCostaricaLifeV2 } from "./poiExtraCostaricaLifeV2";

export const costaricaCountry: POI[] = [];
export const costaricaRegions: POI[] = [];

export const costaricaCities: POI[] = [
  {
    id: "cr-sanjose",
    type: "state-capital",
    parent: "CR",
    coords: [-84.0833, 9.9333],
    name: { de: "San José", hu: "San José", ro: "San José", en: "San José" },
    description: { de: "Die Hauptstadt und größte Stadt im Zentraltal.", hu: "A Középső-völgyben található főváros és egyben a legnagyobb város.", ro: "Capitala și cel mai mare oraș situat în Valea Centrală.", en: "The capital and largest city located in the Central Valley." },
    descriptionAdvanced: {
      de: "San José wurde im 18. Jahrhundert gegründet und löste 1823 Cartago als Hauptstadt ab. Heute ist die Stadt ein pulsierendes kulturelles Zentrum mit prachtvollen Gebäuden wie dem Nationaltheater, das vom Reichtum des Kaffeehandels zeugt.",
      hu: "San Josét a 18. században alapították, és 1823-ban vette át a fővárosi rangot Cartagótól. Ma az ország pezsgő kulturális központja, ahol olyan pompás épületek találhatók, mint a kávékereskedelem gazdagságát hirdető Nemzeti Színház.",
      ro: "San José a fost fondat în secolul al XVIII-lea și a înlocuit Cartago ca capitală în 1823. Astăzi, orașul este un centru cultural vibrant, cu clădiri magnifice precum Teatrul Național, care reflectă bogăția adusă de comerțul cu cafea.",
      en: "Founded in the 18th century, San José replaced Cartago as the capital in 1823. Today, it is a bustling cultural hub featuring landmarks like the National Theater, a testament to the country's historic coffee wealth."
    },
    facts: {
      de: ["Hauptstadt seit 1823", "Liegt im Zentraltal", "Bevölkerung: ca. 340.000 (Stadt)", "Höhe: 1170 m"],
      hu: ["Főváros 1823 óta", "A Középső-völgyben fekszik", "Népesség: kb. 340 000 (belváros)", "Magasság: 1170 m"],
      ro: ["Capitală din 1823", "Situată în Valea Centrală", "Populație: aprox. 340.000 (oraș)", "Altitudine: 1170 m"],
      en: ["Capital since 1823", "Located in the Central Valley", "Population: approx. 340,000 (city)", "Elevation: 1,170 m"]
    },
    factsAdvanced: {
      de: ["Heimat des Goldmuseums", "Zentrum der costa-ricanischen Politik", "Architektonische Mischung aus Kolonialzeit und Moderne"],
      hu: ["Itt található az Aranymúzeum", "A Costa Rica-i politika központja", "A gyarmati és a modern építészet keveréke"],
      ro: ["Găzduiește Muzeul Aurului", "Centrul politicii costaricanene", "Amestec de arhitectură colonială și modernă"],
      en: ["Home to the Pre-Columbian Gold Museum", "Political nerve center of the nation", "Features a blend of colonial and modern architecture"]
    },
    historyYear: 1823, image: "/poi-images/cr-sanjose.webp"},
  {
    id: "cr-alajuela",
    type: "city",
    parent: "CR",
    coords: [-84.2167, 10.0167],
    name: { de: "Alajuela", hu: "Alajuela", ro: "Alajuela", en: "Alajuela" },
    description: { de: "Zweitgrößte Stadt, in der Nähe des internationalen Flughafens gelegen.", hu: "A második legnagyobb város a nemzetközi repülőtér közelében.", ro: "Al doilea oraș ca mărime, situat în apropierea aeroportului internațional.", en: "Second largest city, located near the main international airport." },
    descriptionAdvanced: {
      de: "Alajuela ist als 'Stadt der Mangos' bekannt und war der Geburtsort des Nationalhelden Juan Santamaría. Die Stadt genießt ein wärmeres Klima als San José und ist ein wichtiger Knotenpunkt für den Handel.",
      hu: "Alajuelát a \\\"mangók városaként\\\" ismerik, és itt született a nemzeti hős, Juan Santamaría. A város éghajlata melegebb, mint San Joséé, és fontos kereskedelmi csomópont.",
      ro: "Alajuela este cunoscut sub numele de \\\"orașul mangos\\\" și a fost locul de naștere al eroului național Juan Santamaría. Orașul are un climat mai cald decât San José și este un nod comercial important.",
      en: "Nicknamed the 'City of Mangoes', Alajuela was the birthplace of national hero Juan Santamaría. It enjoys a warmer climate than the capital and serves as a vital commercial hub."
    },
    facts: {
      de: ["Stadt der Mangos", "Heimat von Juan Santamaría", "Wärmeres Klima als San José", "Gegründet: 1782"],
      hu: ["A mangók városa", "Juan Santamaría szülőhelye", "Melegebb éghajlat, mint San Joséban", "Alapítva: 1782"],
      ro: ["Orașul mangos", "Casa lui Juan Santamaría", "Climat mai cald decât în San José", "Fondat: 1782"],
      en: ["The City of Mangoes", "Birthplace of Juan Santamaría", "Warmer climate than San José", "Founded: 1782"]
    },
    factsAdvanced: {
      de: ["Standort des Flughafens Juan Santamaría", "Wichtiges Zentrum für Zuckerrohr", "Bekannt für seinen Stadtpark"],
      hu: ["Itt található a Juan Santamaría repülőtér", "Fontos cukornádtermelő központ", "Híres a városi parkjáról"],
      ro: ["Locația aeroportului Juan Santamaría", "Centru important pentru trestia de zahăr", "Cunoscut pentru parcul său central"],
      en: ["Location of the primary international airport", "Major center for sugarcane processing", "Known for its lively central park"]
    },
    historyYear: 1782, image: "/poi-images/cr-alajuela.webp"},
  {
    id: "cr-cartago",
    type: "city",
    parent: "CR",
    coords: [-83.9167, 9.8667],
    name: { de: "Cartago", hu: "Cartago", ro: "Cartago", en: "Cartago" },
    description: { de: "Die ehemalige Hauptstadt, bekannt für die Basilika der Engel.", hu: "Egykori főváros, az Angyalok Bazilikájáról ismert.", ro: "Fosta capitală, cunoscută pentru Bazilica Îngerilor.", en: "The former capital, known for the Basilica of Our Lady of the Angels." },
    descriptionAdvanced: {
      de: "Cartago war die erste Hauptstadt Costa Ricas und wurde durch Vulkanausbrüche des Irazú mehrfach zerstört. Die Stadt ist heute das religiöse Zentrum des Landes, wohin jedes Jahr Millionen von Pilgern wandern.",
      hu: "Cartago volt Costa Rica első fővárosa, amelyet az Irazú-vulkán kitörései többször is romba döntöttek. A város ma az ország vallási központja, ahová minden évben zarándokok milliói gyalogolnak el.",
      ro: "Cartago a fost prima capitală a Costa Ricăi și a fost distrusă de mai multe ori de erupțiile vulcanului Irazú. Orașul este astăzi centrul religios al țării, unde milioane de pelerini vin în fiecare an.",
      en: "As Costa Rica's original capital, Cartago has faced multiple destructions by the Irazú Volcano. It remains the nation's religious heart, drawing millions of pilgrims annually to its sacred basilica."
    },
    facts: {
      de: ["Ehemalige Hauptstadt (bis 1823)", "Religiöses Zentrum", "Gegründet: 1563", "Höhe: 1435 m"],
      hu: ["Egykori főváros (1823-ig)", "Vallási központ", "Alapítva: 1563", "Magasság: 1435 m"],
      ro: ["Fosta capitală (până în 1823)", "Centru religios", "Fondat: 1563", "Altitudine: 1435 m"],
      en: ["Former capital (until 1823)", "Religious capital of Costa Rica", "Founded: 1563", "Elevation: 1,435 m"]
    },
    factsAdvanced: {
      de: ["Beherbergt die Basilika 'Nuestra Señora de los Ángeles'", "Wurde durch das Erdbeben von 1910 schwer getroffen", "Am Fuße des Vulkans Irazú"],
      hu: ["Itt áll az Angyalok Szűzanyja bazilika", "Az 1910-es földrengés súlyos károkat okozott", "Az Irazú-vulkán lábánál fekszik"],
      ro: ["Găzduiește Bazilica \\\"Nuestra Señora de los Ángeles\\\"", "Grav afectat de cutremurul din 1910", "La poalele vulcanului Irazú"],
      en: ["Home to the Basilica of Our Lady of the Angels", "Severely impacted by the 1910 earthquake", "Situated at the base of the Irazú Volcano"]
    },
    historyYear: 1563, image: "/poi-images/cr-cartago.webp"},
  {
    id: "cr-heredia",
    type: "city",
    parent: "CR",
    coords: [-84.1167, 10.0000],
    name: { de: "Heredia", hu: "Heredia", ro: "Heredia", en: "Heredia" },
    description: { de: "Die 'Stadt der Blumen', bekannt für koloniale Architektur und Universität.", hu: "A 'Virágok városa', gyarmati építészetéről és egyeteméről ismert.", ro: "'Orașul Florilor', cunoscut pentru arhitectura colonială și universitate.", en: "The 'City of Flowers', known for colonial architecture and its university." },
    descriptionAdvanced: {
      de: "Heredia liegt inmitten von Kaffeeplantagen und bewahrt einen Teil seiner kolonialen Eleganz. Die Stadt ist Sitz der Nationalen Universität und bekannt für den 'Fortín', einen historischen Wehrturm.",
      hu: "Heredia kávéültetvények gyűrűjében fekszik, és máig őrzi gyarmati eleganciáját. Itt található a Nemzeti Egyetem és a város jelképe, a \\\"Fortín\\\" nevű történelmi bástya.",
      ro: "Heredia este situat în mijlocul plantațiilor de cafea și păstrează o parte din eleganța sa colonială. Orașul găzduiește Universitatea Națională și este cunoscut pentru \\\"Fortín\\\", un turn istoric de apărare.",
      en: "Surrounded by sprawling coffee plantations, Heredia retains much of its colonial elegance. It is home to the National University and the iconic 'Fortín', a historic brick fortification tower."
    },
    facts: {
      de: ["Stadt der Blumen", "Gegründet: 1706", "Sitz der Nationalen Universität", "Kaffeeregion"],
      hu: ["A virágok városa", "Alapítva: 1706", "A Nemzeti Egyetem székhelye", "Kávétermelő vidék"],
      ro: ["Orașul florilor", "Fondat: 1706", "Sediul Universității Naționale", "Regiune cafetieră"],
      en: ["The City of Flowers", "Founded: 1706", "Home to the National University", "Heart of the coffee region"]
    },
    factsAdvanced: {
      de: ["Besitzt den berühmten Fortín-Turm", "Liegt im Schatten des Vulkans Barva", "Zentrum für Hochtechnologie-Unternehmen"],
      hu: ["Híres bástyája a Fortín", "A Barva-vulkán árnyékában fekszik", "Számos csúcstechnológiai cég központja"],
      ro: ["Deține faimosul turn Fortín", "Situat la umbra vulcanului Barva", "Centru pentru companii de înaltă tehnologie"],
      en: ["Features the iconic Fortín tower", "Located in the foothills of the Barva Volcano", "Major hub for high-tech industry and services"]
    },
    historyYear: 1706, image: "/poi-images/cr-heredia.webp"},
  {
    id: "cr-liberia",
    type: "city",
    parent: "CR",
    coords: [-85.4333, 10.6333],
    name: { de: "Liberia", hu: "Liberia", ro: "Liberia", en: "Liberia" },
    description: { de: "Die Hauptstadt der Provinz Guanacaste, Tor zu Stränden und Nationalparks.", hu: "Guanacaste tartomány fővárosa, kapu a strandokhoz és nemzeti parkokhoz.", ro: "Capitala provinciei Guanacaste, poarta către plaje și parcuri naționale.", en: "Capital of Guanacaste province, gateway to beaches and national parks." },
    descriptionAdvanced: {
      de: "Liberia wird wegen seiner weißen Lehmstraßen der Vergangenheit oft als 'Weiße Stadt' bezeichnet. Sie ist das Tor zur Provinz Guanacaste und bietet einfachen Zugang zu den schönsten Stränden und Vulkanen des Nordens.",
      hu: "Liberiát a múltbeli fehér agyagútjai miatt gyakran \\\"fehér városnak\\\" hívják. Guanacaste tartomány kapuja, ahonnan könnyen elérhetők az északi rész legszebb strandjai és vulkánjai.",
      ro: "Liberia este adesea numit \\\"orașul alb\\\" datorită străzilor sale din lut alb din trecut. Este poarta către provincia Guanacaste și oferă acces facil la cele mai frumoase plaje și vulcani din nord.",
      en: "Known as the 'White City' for its historic whitewashed adobe buildings, Liberia is the hub of Guanacaste. It serves as the primary gateway to northern beaches and volcanic national parks."
    },
    facts: {
      de: ["Die Weiße Stadt", "Hauptstadt von Guanacaste", "Heißes, trockenes Klima", "Gegründet: 1769"],
      hu: ["A fehér város", "Guanacaste tartomány székhelye", "Forró, száraz éghajlat", "Alapítva: 1769"],
      ro: ["Orașul alb", "Capitala provinciei Guanacaste", "Climat cald și uscat", "Fondat: 1769"],
      en: ["The White City", "Capital of Guanacaste", "Hot and dry climate", "Founded: 1769"]
    },
    factsAdvanced: {
      de: ["Besitzt einen internationalen Flughafen", "Zentrum der Sabanero-Kultur (Cowboys)", "Wichtiger Verkehrsknotenpunkt"],
      hu: ["Nemzetközi repülőtérrel rendelkezik", "A sabanero (cowboy) kultúra központja", "Fontos közlekedési csomópont"],
      ro: ["Are un aeroport internațional", "Centrul culturii Sabanero (cowboy)", "Nod de transport major"],
      en: ["Home to Guanacaste's international airport", "Heart of the 'Sabanero' (cowboy) culture", "Major transit point for northern tourism"]
    },
    historyYear: 1769, image: "/poi-images/cr-liberia.webp"},
  {
    id: "cr-chirripo",
    type: "mountain",
    parent: "CR",
    coords: [-83.4833, 9.4833],
    name: { de: "Cerro Chirripó", hu: "Cerro Chirripó", ro: "Cerro Chirripó", en: "Cerro Chirripo" },
    description: { de: "Der höchste Berg Costa Ricas, von dem aus man beide Ozeane sehen kann.", hu: "Costa Rica legmagasabb hegye, ahonnan mindkét óceán látható.", ro: "Cel mai înalt munte din Costa Rica, de unde se pot vedea ambele oceane.", en: "The highest mountain in Costa Rica, offering views of both the Pacific and Caribbean." },
    descriptionAdvanced: {
      de: "Cerro Chirripó liegt im Chirripó-Nationalpark und zeichnet sich durch seine paramos-Vegetation und eiszeitlichen Seen aus. An klaren Tagen bietet der Gipfel den spektakulären Anblick des Pazifiks und der Karibik gleichzeitig.",
      hu: "A Cerro Chirripó a Chirripó Nemzeti Parkban található, különlegessége a páramo-vegetáció és a jégkorszaki tavak. Tiszta napokon a csúcsról egyszerre látható a Csendes-óceán és a Karib-tenger.",
      ro: "Cerro Chirripó se află în Parcul Național Chirripó și se remarcă prin vegetația de paramo și lacurile glaciare. În zilele senine, vârful oferă vederea spectaculoasă a Pacificului și Caraibelor simultan.",
      en: "Cerro Chirripó is the centerpiece of its eponymous national park, featuring rare paramo vegetation and glacial lakes. On clear days, hikers can witness the rare sight of both the Pacific and Caribbean oceans."
    },
    facts: {
      de: ["Höhe: 3820 m", "Höchster Gipfel Costa Ricas", "Eiszeitliche Seen", "Paramos-Vegetation"],
      hu: ["Magasság: 3820 m", "Costa Rica legmagasabb pontja", "Jégkorszaki tavak", "Páramo növényzet"],
      ro: ["Altitudine: 3820 m", "Cel mai înalt vârf din Costa Rica", "Lacuri glaciare", "Vegetație de paramo"],
      en: ["Elevation: 3,820 m", "Highest peak in Costa Rica", "Features glacial lakes", "Home to unique paramo ecosystems"]
    },
    factsAdvanced: {
      de: ["Letzter Schneefall: selten gemeldet", "Besteigung erfordert Genehmigung", "Teil der Talamanca-Bergkette"],
      hu: ["A havazás nagyon ritka", "A megmászásához engedély szükséges", "A Talamanca-hegység része"],
      ro: ["Zăpada este extrem de rară", "Escaladarea necesită permis", "Parte a lanțului muntos Talamanca"],
      en: ["One of the few places in CR with freezing temps", "Summit trek requires advance permits", "Part of the Cordillera de Talamanca"]
    },
    elevation: 3820, image: "/poi-images/cr-chirripo.webp"},
  {
    id: "cr-pacuare",
    type: "river",
    parent: "CR",
    coords: [-83.5833, 10.2167],
    name: { de: "Río Pacuare", hu: "Pacuare-folyó", ro: "Râul Pacuare", en: "Pacuare River" },
    description: { de: "Weltberühmt für Wildwasser-Rafting durch atemberaubende Schluchten.", hu: "Világhírű vadvízi evezős helyszín lenyűgöző kanyonokon keresztül.", ro: "Faimos în întreaga lume pentru rafting pe ape repezi prin canioane uimitoare.", en: "World-famous for white-water rafting through breathtaking tropical gorges." },
    descriptionAdvanced: {
      de: "Der Pacuare gilt als einer der schönsten Flüsse der Welt für Rafting. Er fließt durch unberührten Regenwald und enge Felsschluchten, vorbei an tosenden Wasserfällen und indigenen Siedlungen der Cabécar.",
      hu: "A Pacuare-t a világ egyik legszebb vadvízi evezős folyójának tartják. Érintetlen esőerdőkön és szűk szurdokokon keresztül folyik, zuhogó vízesések és a Cabécar indiánok települései mellett.",
      ro: "Pacuare este considerat unul dintre cele mai frumoase râuri din lume pentru rafting. Curge prin păduri tropicale virgine și canioane înguste, trecând pe lângă cascade și așezări indigene Cabécar.",
      en: "The Pacuare is ranked among the world's top rivers for whitewater rafting. It flows through untouched rainforest and steep canyons, passing thunderous waterfalls and indigenous Cabécar territories."
    },
    facts: {
      de: ["Länge: 108 km", "Weltklasse Rafting", "Regenwald-Umgebung", "Wildwasser Stufe III-IV"],
      hu: ["Hosszúság: 108 km", "Világszínvonalú rafting", "Esőerdei környezet", "III-IV. nehézségi fokozatú vadvíz"],
      ro: ["Lungime: 108 km", "Rafting de clasă mondială", "Cadru de pădure tropicală", "Ape repezi de clasa III-IV"],
      en: ["Length: 108 km", "World-class rafting destination", "Surrounded by lush rainforest", "Features Class III-IV rapids"]
    },
    factsAdvanced: {
      de: ["Wichtiger biologischer Korridor", "Heimat des Jaguars und Ozelots", "Schutzgebiet für bedrohte Arten"],
      hu: ["Fontos biológiai folyosó", "Jaguárok és ocelotok lakhelye", "Veszélyeztetett fajok védett területe"],
      ro: ["Coridor biologic important", "Casa jaguarului și a ocelotului", "Zonă protejată pentru specii amenințate"],
      en: ["Vital biological corridor for wildlife", "Habitat for jaguars and ocelots", "Protected area for diverse tropical species"]
    },
    length: 108, image: "/poi-images/cr-pacuare.webp"},
  {
    id: "cr-arenal-lake",
    type: "lake",
    parent: "CR",
    coords: [-84.9167, 10.5333],
    name: { de: "Arenal-See", hu: "Arenal-tó", ro: "Lacul Arenal", en: "Lake Arenal" },
    description: { de: "Der größte See des Landes, am Fuße des majestätischen Vulkans Arenal.", hu: "Az ország legnagyobb tava a fenséges Arenal vulkán lábánál.", ro: "Cel mai mare lac din țară, situat la poalele maiestuosului vulcan Arenal.", en: "The country's largest lake, situated at the base of the majestic Arenal Volcano." },
    descriptionAdvanced: {
      de: "Dieser künstliche See wurde in den 1970er Jahren vergrößert, um Wasserkraft zu erzeugen. Heute deckt er einen bedeutenden Teil des Strombedarfs von Costa Rica und ist ein beliebtes Ziel für Windsurfer aus aller Welt.",
      hu: "Ezt a mesterséges tavat az 1970-es években duzzasztották fel vízerőművi célokból. Ma Costa Rica áramszükségletének jelentős részét fedezi, és a világ minden tájáról érkező szörfösök kedvelt célpontja.",
      ro: "Acest lac artificial a fost mărit în anii 1970 pentru a genera energie hidroelectrică. Astăzi acoperă o parte semnificativă din necesarul de energie al țării și este o destinație populară pentru windsurfing.",
      en: "This man-made lake was expanded in the 1970s to produce hydroelectric power. It currently generates a significant portion of Costa Rica's electricity and is a world-renowned spot for windsurfing."
    },
    facts: {
      de: ["Fläche: 85 km²", "Größter See des Landes", "Wichtige Stromquelle", "Hotspot für Windsurfing"],
      hu: ["Terület: 85 km²", "Az ország legnagyobb tava", "Fontos áramforrás", "Szörfparadicsom"],
      ro: ["Suprafață: 85 km²", "Cel mai mare lac din țară", "Sursă importantă de energie", "Loc ideal pentru windsurfing"],
      en: ["Area: 85 km²", "Largest lake in the country", "Key hydroelectric power source", "World-class windsurfing hub"]
    },
    factsAdvanced: {
      de: ["Tiefe: bis zu 60 m", "Wurde durch einen Staudamm geschaffen", "Heimat des schmackhaften Regenbogen-Buntbarschs"],
      hu: ["Mélység: akár 60 m", "Völgyzáró gát építésével jött létre", "A szivárványos sügér lakhelye"],
      ro: ["Adâncime: până la 60 m", "Creat prin construirea unui baraj", "Găzduiește peștele \\\"guapote\\\""],
      en: ["Maximum depth: 60 m", "Tripled in size by the 1979 dam", "Home to the prized Rainbow Bass (Guapote)"]
    },
    area: 85, image: "/poi-images/cr-arenal-lake.webp"},
  {
    id: "cr-rincon-vieja",
    type: "forest",
    parent: "CR",
    coords: [-85.3167, 10.8167],
    name: { de: "Rincón de la Vieja Nationalpark", hu: "Rincón de la Vieja Nemzeti Park", ro: "Parcul Național Rincón de la Vieja", en: "Rincon de la Vieja National Park" },
    description: { de: "Ein Park mit vulkanischer Aktivität, Geysiren und tropischen Trockenwäldern.", hu: "Vulkáni aktivitásáról, gejzírjeiről és trópusi száraz erdőiről ismert park.", ro: "Un parc cu activitate vulcanică, ghețari noroioși și păduri tropicale uscate.", en: "A park featuring volcanic activity, mud pots, and tropical dry forests." },
    descriptionAdvanced: {
      de: "Dieser Park zeigt die rohe Kraft der Erde mit seinen blubbernden Schlammlöchern und heißen Quellen. Er beherbergt auch den Nationalvogel Costa Ricas, den Hellroten Ara, in seinen dichten Wäldern.",
      hu: "Ez a park a Föld nyers erejét mutatja be bugyogó sármedencéivel és hőforrásaival. Sűrű erdőiben Costa Rica nemzeti madara, a sárgaszárnyú ara is megtalálható.",
      ro: "Acest parc prezintă forța brută a pământului prin bazinele sale de noroi clocotit și izvoarele termale. Găzduiește, de asemenea, pasărea națională, ara stacojiu, în pădurile sale dese.",
      en: "The park showcases Earth's raw volcanic power with bubbling mud pots and thermal springs. Its diverse landscape ranges from tropical dry forests to montane ecosystems."
    },
    facts: {
      de: ["Aktiver Vulkan", "Blubbernde Schlammlöcher", "Tropischer Trockenwald", "Heimat der Nationalblume"],
      hu: ["Aktív vulkán", "Bugyogó sármedencék", "Trópusi száraz erdő", "A nemzeti virág hazája"],
      ro: ["Vulcan activ", "Gropi de noroi clocotit", "Pădure tropicală uscată", "Casa florii naționale"],
      en: ["Active volcano complex", "Bubbling volcanic mud pots", "Tropical dry forest habitat", "Home to the national flower (Guaria Morada)"]
    },
    factsAdvanced: {
      de: ["Besitzt neun Krater", "Wichtig für die Geothermie", "UNESCO-Weltnaturerbe"],
      hu: ["Kilenc krátere van", "Fontos a geotermikus energia szempontjából", "UNESCO világörökség része"],
      ro: ["Are nouă cratere", "Important pentru energia geotermală", "Patrimoniu mondial UNESCO"],
      en: ["Features nine volcanic craters", "Key site for geothermal research", "Part of the UNESCO Guanacaste Heritage site"]
    }, image: "/poi-images/cr-rincon-vieja.webp"},
  {
    id: "cr-reventazon",
    type: "river",
    parent: "CR",
    coords: [-83.5333, 10.2833],
    name: { de: "Río Reventazón", hu: "Reventazón-folyó", ro: "Râul Reventazón", en: "Reventazon River" },
    description: { de: "Ein wichtiger Fluss für die Stromerzeugung und Wassersportarten.", hu: "Fontos folyó az áramtermelés és a vízi sportok szempontjából.", ro: "Un râu important pentru producția de energie și sporturi nautice.", en: "An important river for hydroelectric power and popular for water sports." },
    descriptionAdvanced: {
      de: "Der Reventazón ist einer der bedeutendsten Flüsse Costa Ricas für die Wirtschaft. Er speist mehrere Wasserkraftwerke und bietet gleichzeitig einige der besten Wildwasserabschnitte des Landes.",
      hu: "A Reventazón Costa Rica egyik legfontosabb folyója a gazdaság számára. Számos vízerőművet táplál, miközben az ország legjobb vadvízi szakaszait kínálja.",
      ro: "Reventazón este unul dintre cele mai importante râuri din Costa Rica pentru economie. Alimentează mai multe hidrocentrale și oferă în același timp unele dintre cele mai bune secțiuni de rafting.",
      en: "The Reventazón is a cornerstone of Costa Rica's economy, powering several major hydroelectric dams. It is also highly regarded for its world-class whitewater rafting sections."
    },
    facts: {
      de: ["Länge: 145 km", "Bedeutende Wasserkraft", "Beliebt für Kajakfahren", "Mündet in die Karibik"],
      hu: ["Hosszúság: 145 km", "Jelentős vízi energia", "Kedvelt kajakos hely", "A Karib-tengerbe torkollik"],
      ro: ["Lungime: 145 km", "Energie hidroelectrică majoră", "Popular pentru caiac", "Se varsă în Marea Caraibilor"],
      en: ["Length: 145 km", "Major hydroelectric generator", "Popular for kayaking", "Empties into the Caribbean Sea"]
    },
    factsAdvanced: {
      de: ["Größte Talsperre Mittelamerikas", "Reich an Binnengewässern", "Wichtiger biologischer Korridor"],
      hu: ["Közép-Amerika legnagyobb gátja", "Belső vizekben gazdag", "Fontos biológiai folyosó"],
      ro: ["Cel mai mare baraj din America Centrală", "Bogat în ape interioare", "Coridor biologic important"],
      en: ["Site of the largest dam in Central America", "Rich in freshwater biodiversity", "Vital corridor for migrating species"]
    },
    length: 145, image: "/poi-images/cr-reventazon.webp"},
  {
    id: "cr-guayabo",
    type: "historical",
    parent: "CR",
    coords: [-83.6833, 9.9667],
    name: { de: "Guayabo Nationalmonument", hu: "Guayabo Nemzeti Emlékhely", ro: "Monumentul Național Guayabo", en: "Guayabo National Monument" },
    description: { de: "Die bedeutendste archäologische Stätte Costa Ricas aus der präkolumbianischen Zeit.", hu: "Costa Rica legfontosabb prekolumbián kori régészeti lelőhelye.", ro: "Cel mai important sit arheologic din Costa Rica din perioada precolumbiană.", en: "The most important archaeological site in Costa Rica from the pre-Columbian era." },
    descriptionAdvanced: {
      de: "Guayabo zeigt die Überreste einer antiken Stadt, die zwischen 1000 v. Chr. und 1400 n. Chr. bewohnt war. Besonders beeindruckend ist das ausgeklügelte Aquäduktsystem, das heute noch funktioniert.",
      hu: "Guayabo egy ősi város maradványait mutatja be, amely i.e. 1000 és i.sz. 1400 között volt lakott. Különösen lenyűgöző a kifinomult vízvezeték-rendszere, amely ma is működik.",
      ro: "Guayabo prezintă rămășițele unui oraș antic locuit între 1000 î.Hr. și 1400 d.Hr. Este impresionant sistemul sofisticat de apeducte, care funcționează și astăzi.",
      en: "Guayabo preserves the remains of an ancient city inhabited from 1000 BC to 1400 AD. It features a remarkably sophisticated aqueduct system that remains functional to this day."
    },
    facts: {
      de: ["Gegründet: vor 3000 Jahren", "Antike Wasserleitungen", "Größte Maya-Stätte in CR", "UNESCO-Weltkulturerbe (Tentativ)"],
      hu: ["3000 éve alapították", "Ősi vízvezetékek", "Costa Rica legnagyobb lelőhelye", "UNESCO várományos helyszín"],
      ro: ["Fondat acum 3000 de ani", "Apeducte antice", "Cel mai mare sit din CR", "Patrimoniu UNESCO (listă tentativă)"],
      en: ["Inhabited since 1000 BC", "Ancient working aqueducts", "Largest archeological site in CR", "UNESCO tentative list site"]
    },
    factsAdvanced: {
      de: ["Besitzt gepflasterte Straßen", "Zentrum für Handel und Religion", "Umfasst Petroglyphen und Gräber"],
      hu: ["Kövezett utak hálózata", "Kereskedelmi és vallási központ", "Sziklarajzokat és sírokat tartalmaz"],
      ro: ["Are străzi pietruite", "Centru comercial și religios", "Include petroglife și morminte"],
      en: ["Features stone-paved roads", "Major ceremonial and social center", "Displays ancient petroglyphs and tombs"]
    },
    historyYear: [-1000, 1400], image: "/poi-images/cr-guayabo.webp"},
  {
    id: "cr-ruinas-urjarras",
    type: "historical",
    parent: "CR",
    coords: [-83.8286, 9.8272],
    name: { de: "Ruinen von Ujarrás", hu: "Ujarrás romjai", ro: "Ruinele de la Ujarrás", en: "Ruins of Ujarras" },
    description: { de: "Die Überreste einer der ersten Kirchen Costa Ricas aus dem 16. Jahrhundert.", hu: "Costa Rica egyik legrégebbi, 16. századi templomának maradványai.", ro: "Rămășițele uneia dintre cele mai vechi biserici din Costa Rica, din secolul al XVI-lea.", en: "The remains of one of the oldest churches in Costa Rica, dating back to the 16th century." },
    descriptionAdvanced: {
      de: "Ujarrás beherbergt die Ruinen der Kirche Nuestra Señora de la Limpia Concepción, die im späten 16. Jahrhundert erbaut wurde. Der Ort ist geschichtsträchtig und liegt malerisch im Orosi-Tal.",
      hu: "Ujarrásban találhatók a Nuestra Señora de la Limpia Concepción templom romjai, amely a 16. század végén épült. A festői Orosi-völgyben fekvő helyszín gazdag történelmi emlékekben.",
      ro: "Ujarrás găzduiește ruinele bisericii Nuestra Señora de la Limpia Concepción, construită la sfârșitul secolului al XVI-lea. Locul este încărcat de istorie și situat pitoresc în valea Orosi.",
      en: "Ujarrás contains the ruins of the 16th-century church of Nuestra Señora de la Limpia Concepción. Nestled in the Orosi Valley, it is one of the oldest colonial structures in the nation."
    },
    facts: {
      de: ["Kirche aus dem 16. Jhd.", "Spanische Kolonialruinen", "Im Orosi-Tal", "Historisches Denkmal"],
      hu: ["16. századi templom", "Spanyol gyarmati romok", "Az Orosi-völgyben", "Történelmi emlékhely"],
      ro: ["Biserică din secolul XVI", "Ruine coloniale spaniole", "În valea Orosi", "Monument istoric"],
      en: ["16th-century church", "Spanish colonial ruins", "Located in Orosi Valley", "National historic monument"]
    },
    factsAdvanced: {
      de: ["Wurde nach einer Flut aufgegeben", "Legende von der Jungfrau von Ujarrás", "Bietet schöne Gartenanlagen"],
      hu: ["Egy árvíz után hagyták el", "Ujarrás Szűzének legendája", "Szép kert övezi"],
      ro: ["Abandonat după o inundație", "Legenda Fecioarei din Ujarrás", "Înconjurat de grădini frumoase"],
      en: ["Abandoned after heavy flooding", "Famous for the legend of the Virgin", "Surrounded by beautiful parklands"]
    },
    historyYear: 1575,
    image: "/poi-images/cr-ruinas-urjarras.webp",
  },
];

export const costaricaLandmarks: POI[] = [
  {
    id: "cr-arenal",
    type: "mountain",
    parent: "CR",
    coords: [-84.7031, 10.4633],
    name: { de: "Arenal Vulkan", hu: "Arenal vulkán", ro: "Vulcanul Arenal", en: "Arenal Volcano" },
    description: { de: "Ein perfekter kegelförmiger Vulkan, umgeben von heißen Quellen.", hu: "Tökéletes kúp alakú vulkán, amelyet hőforrások vesznek körül.", ro: "Un vulcan cu formă de con perfect, înconjurat de izvoare termale.", en: "A perfectly cone-shaped volcano surrounded by hot springs." },
    descriptionAdvanced: {
      de: "Der Arenal war bis 2010 einer der aktivsten Vulkane der Welt. Seine majestätische Silhouette dominiert die Region La Fortuna und bietet zahlreiche Möglichkeiten für Thermalbäder und Naturbeobachtungen.",
      hu: "Az Arenal 2010-ig a világ egyik legaktívabb vulkánja volt. Fenséges sziluettje uralja La Fortuna környékét, és számtalan lehetőséget kínál termálvizes fürdőzésre és természetjárásra.",
      ro: "Arenal a fost unul dintre cei mai activi vulcani din lume până în 2010. Silueta sa maiestuoasă domină regiunea La Fortuna și oferă numeroase opțiuni pentru băi termale și observarea naturii.",
      en: "Until 2010, Arenal was among the world's most active volcanoes. Its iconic conical silhouette defines the La Fortuna landscape, providing a backdrop for world-class hot springs."
    },
    facts: {
      de: ["Höhe: 1670 m", "Perfekte Kegelform", "Bis 2010 sehr aktiv", "Nahe La Fortuna"],
      hu: ["Magasság: 1670 m", "Tökéletes kúp alak", "2010-ig igen aktív volt", "La Fortuna közelében"],
      ro: ["Altitudine: 1670 m", "Formă de con perfectă", "Foarte activ până în 2010", "Lângă La Fortuna"],
      en: ["Elevation: 1,670 m", "Perfect conical shape", "Highly active until 2010", "Located near La Fortuna"]
    },
    factsAdvanced: {
      de: ["Gewaltiger Ausbruch 1968", "Erhöhte geothermische Aktivität", "Teil eines Nationalparks"],
      hu: ["Hatalmas kitörés 1968-ban", "Magas geotermikus aktivitás", "Nemzeti park része"],
      ro: ["Erupție majoră în 1968", "Activitate geotermală ridicată", "Parte a unui parc național"],
      en: ["Devastating eruption in 1968", "Powers significant geothermal energy", "Located within Arenal Volcano National Park"]
    },
    elevation: 1670, image: "/poi-images/cr-arenal.webp"},
  {
    id: "cr-manuelantonio",
    type: "landmark",
    parent: "CR",
    coords: [-84.1333, 9.3833],
    name: { de: "Manuel Antonio Nationalpark", hu: "Manuel Antonio Nemzeti Park", ro: "Parcul Național Manuel Antonio", en: "Manuel Antonio National Park" },
    description: { de: "Bekannt für Strände, Dschungel und eine enorme Artenvielfalt.", hu: "Strandjairól, dzsungeléről és hatalmas biodiverzitásáról ismert.", ro: "Cunoscut pentru plaje, junglă și o mare diversitate de specii.", en: "Famous for its beaches, jungle, and immense biodiversity." },
    descriptionAdvanced: {
      de: "Obwohl es der kleinste Nationalpark des Landes ist, gehört er zu den meistbesuchten. Er kombiniert wunderschöne weiße Sandstrände mit dichtem Regenwald, in dem man leicht Faultiere und Affen beobachten kann.",
      hu: "Bár az ország legkisebb nemzeti parkja, egyben az egyik leglátogatottabb is. Gyönyörű fehér homokos strandokat ötvöz sűrű esőerdővel, ahol könnyen láthatunk lajhárokat és majmokat.",
      ro: "Deși este cel mai mic parc național din țară, este unul dintre cele mai vizitate. Combină plaje superbe cu nisip alb și pădure tropicală densă, unde se pot vedea ușor leneși și maimuțe.",
      en: "Despite being the smallest national park in Costa Rica, Manuel Antonio is one of its most popular. It blends pristine white-sand beaches with lush jungle teeming with sloths and monkeys."
    },
    facts: {
      de: ["Kleinster Nationalpark", "Weiße Sandstrände", "Viele Totenkopfäffchen", "Beliebtestes Reiseziel"],
      hu: ["A legkisebb nemzeti park", "Fehér homokos strandok", "Sok mókusmajom", "A legnépszerűbb úti cél"],
      ro: ["Cel mai mic parc național", "Plaje cu nisip alb", "Multe maimuțe veveriță", "Cea mai populară destinație"],
      en: ["Smallest national park in CR", "Stunning white-sand beaches", "High monkey and sloth population", "Highly popular tourist destination"]
    },
    factsAdvanced: {
      de: ["Begrenzte Besucherzahl pro Tag", "Schutzgebiet für das Totenkopfäffchen", "Inklusive Meeresreservat"],
      hu: ["Napi látogatói korlát van", "A mókusmajmok fontos védett területe", "Tengeri rezervátumot is magában foglal"],
      ro: ["Număr limitat de vizitatori pe zi", "Zonă de protecție pentru maimuțe", "Include o rezervație marină"],
      en: ["Daily visitor entry caps in place", "Vital sanctuary for squirrel monkeys", "Features extensive marine territory"]
    }, image: "/poi-images/cr-manuelantonio.webp"},
  {
    id: "cr-monteverde",
    type: "forest",
    parent: "CR",
    coords: [-84.8000, 10.3000],
    name: { de: "Monteverde Nebelwald", hu: "Monteverde felhőerdő", ro: "Pădurea Incețoșată Monteverde", en: "Monteverde Cloud Forest" },
    description: { de: "Ein mystischer Nebelwald, Heimat von Quetzal-Vögeln.", hu: "Misztikus felhőerdő, a kvézál (quetzal) madár otthona.", ro: "O pădure încețoșată mistică, habitatul pasării Quetzal.", en: "A mystical cloud forest reserve, home to the resplendent quetzal." },
    descriptionAdvanced: {
      de: "Monteverde ist weltberühmt für seinen Nebelwald, der durch die ständige Wolkenbildung in den Bergen entsteht. Die Region ist ein Vorreiter für den Ökotourismus und beherbergt den seltenen Göttervogel Quetzal.",
      hu: "Monteverde világhírű a köderdőjéről, amelyet a hegyekben folyamatosan képződő felhők táplálnak. A régió az ökoturizmus úttörője, és a ritka kvézál madár otthona.",
      ro: "Monteverde este faimos în lume pentru pădurea sa de ceață, creată de norii persistenți de la munte. Regiunea este pionieră în ecoturism și găzduiește rara pasăre Quetzal.",
      en: "Monteverde is globally renowned for its cloud forest, sustained by constant mountain mist. A pioneer in ecotourism, it is one of the best places to spot the rare resplendent quetzal."
    },
    facts: {
      de: ["Hochgelegener Nebelwald", "Heimat des Quetzals", "Hängebrücken-Pfade", "Biologisches Reservat"],
      hu: ["Magaslati köderdő", "A kvézál madár otthona", "Függőhidas tanösvények", "Biológiai rezervátum"],
      ro: ["Pădure de ceață montană", "Casa pasării Quetzal", "Trasee cu poduri suspendate", "Rezervație biologică"],
      en: ["High-altitude cloud forest", "Habitat of the Resplendent Quetzal", "Famous for hanging bridges", "Private biological reserve"]
    },
    factsAdvanced: {
      de: ["Über 2500 Pflanzenarten", "Wurde von Quäkern mitbegründet", "Zentrum für biologische Forschung"],
      hu: ["Több mint 2500 növényfaj", "Kvékerek alapították a települést", "Biológiai kutatóközpont"],
      ro: ["Peste 2500 specii de plante", "Fondat de comunitatea Quaker", "Centru de cercetare biologică"],
      en: ["Features over 2,500 plant species", "Founded partly by a Quaker community", "Major hub for international research"]
    }, image: "/poi-images/cr-monteverde.webp"},
  {
    id: "cr-tortuguero",
    type: "landmark",
    parent: "CR",
    coords: [-83.5000, 10.5333],
    name: { de: "Tortuguero Nationalpark", hu: "Tortuguero Nemzeti Park", ro: "Parcul Național Tortuguero", en: "Tortuguero National Park" },
    description: { de: "Der 'Amazonas von Costa Rica', berühmt für nistende Meeresschildkröten.", hu: "Costa Rica 'Amazonasa', amely a tengeri teknősök fészkelőhelyéről híres.", ro: "Considerat 'Amazonul din Costa Rica', faimos pentru cuiburile țestoaselor marine.", en: "The 'Amazon of Costa Rica', famous for nesting sea turtles." },
    descriptionAdvanced: {
      de: "Tortuguero ist nur per Boot oder Flugzeug erreichbar und besteht aus einem Labyrinth von Kanälen und Flüssen. Es ist der wichtigste Nistplatz der Karibik für die Grüne Meeresschildkröte.",
      hu: "Tortuguero csak hajóval vagy repülővel érhető el, és csatornák, folyók labirintusából áll. A Karib-térség legfontosabb fészkelőhelye a közönséges levesteknős számára.",
      ro: "Tortuguero este accesibil doar cu barca sau avionul și constă dintr-un labirint de canale și râuri. Este cel mai important loc de cuibărit din Caraibe pentru țestoasa verde.",
      en: "Accessible only by boat or air, Tortuguero is a network of water channels and rivers. It serves as the most important nesting site in the Caribbean for the Green Sea Turtle."
    },
    facts: {
      de: ["Nistplatz für Schildkröten", "Amazonas von Costa Rica", "Nur per Boot erreichbar", "Labyrinth aus Kanälen"],
      hu: ["Teknősök fészkelőhelye", "Costa Rica Amazonasa", "Csak hajóval érhető el", "Csatornák labirintusa"],
      ro: ["Loc de cuibărit pentru țestoase", "Amazonul din Costa Rica", "Accesibil doar cu barca", "Labirint de canale"],
      en: ["Critical sea turtle nesting site", "Known as CR's 'Amazon'", "Accessible only by boat or plane", "Vast network of water canals"]
    },
    factsAdvanced: {
      de: ["Schutz der Grünen Meeresschildkröte", "Reich an Seekühen und Kaimanen", "Hohe Niederschlagsmengen"],
      hu: ["A közönséges levesteknős védelme", "Manátuszokban és kajmánokban gazdag", "Rendkívül sok csapadék jellemzi"],
      ro: ["Protecția țestoaselor verzi", "Bogat în lamantini și caimani", "Cantități mari de precipitații"],
      en: ["Vital for Green Sea Turtle survival", "Habitat for manatees and caimans", "One of the country's wettest regions"]
    }, image: "/poi-images/cr-tortuguero.webp"},
  {
    id: "cr-corcovado",
    type: "landmark",
    parent: "CR",
    coords: [-83.5667, 8.5333],
    name: { de: "Corcovado Nationalpark", hu: "Corcovado Nemzeti Park", ro: "Parcul Național Corcovado", en: "Corcovado National Park" },
    description: { de: "Einer der artenreichsten Orte der Welt auf der Osa-Halbinsel.", hu: "A világ egyik biológiailag legdiverzebb helye az Osa-félszigeten.", ro: "Unul dintre cele mai bogate locuri în biodiversitate din lume.", en: "One of the most biologically intense places on Earth on the Osa Peninsula." },
    descriptionAdvanced: {
      de: "National Geographic bezeichnete Corcovado als 'den biologisch intensivsten Ort der Erde'. Der Park schützt den letzten ursprünglichen Tieflandregenwald an der mittelamerikanischen Pazifikküste.",
      hu: "A National Geographic Corcovadót \\\"a világ biológiailag legintenzívebb helyének\\\" nevezte. A park Közép-Amerika csendes-óceáni partvidékének utolsó eredeti síkvidéki esőerdőjét védi.",
      ro: "National Geographic a numit Corcovado \\\"cel mai intens loc biologic de pe Pământ\\\". Parcul protejează ultima pădure tropicală de câmpie virgină de pe coasta Pacificului din America Centrală.",
      en: "National Geographic described Corcovado as 'the most biologically intense place on Earth'. It protects the last remaining old-growth lowland rainforest on Central America's Pacific coast."
    },
    facts: {
      de: ["Biologisch extrem wertvoll", "Heimat des Harpyie-Adlers", "Tieflandregenwald", "Osa-Halbinsel"],
      hu: ["Biológiailag rendkívül gazdag", "A hárpia sas otthona", "Síkvidéki esőerdő", "Osa-félsziget"],
      ro: ["Biodiversitate extremă", "Casa vulturului harpie", "Pădure tropicală de câmpie", "Peninsula Osa"],
      en: ["Extreme biological diversity", "Habitat of the Harpy Eagle", "Virgin lowland rainforest", "Located on the Osa Peninsula"]
    },
    factsAdvanced: {
      de: ["Beherbergt alle 4 Affenarten CRs", "Wichtiger Ort für Jaguare", "Nur mit Guide zugänglich"],
      hu: ["Mind a 4 Costa Rica-i majomfaj itt él", "A jaguárok fontos élőhelye", "Csak vezetővel látogatható"],
      ro: ["Adăpostește toate cele 4 specii de maimuțe", "Important pentru jaguari", "Accesibil doar cu ghid"],
      en: ["Hosts all four CR monkey species", "Crucial sanctuary for jaguars", "Strictly requires professional guides"]
    }, image: "/poi-images/cr-corcovado.webp"},
  {
    id: "cr-tamarindo",
    type: "city",
    parent: "CR",
    coords: [-85.8333, 10.3000],
    name: { de: "Tamarindo", hu: "Tamarindo", ro: "Tamarindo", en: "Tamarindo" },
    description: { de: "Ein beliebter Küstenort und Surf-Hotspot in Guanacaste.", hu: "Népszerű tengerparti város és szörfös központ Guanacastében.", ro: "Un oraș de coastă popular și o destinație de top pentru surfing în Guanacaste.", en: "A popular coastal town and major surfing destination in Guanacaste." },
    descriptionAdvanced: {
      de: "Tamarindo hat sich von einem kleinen Fischerdorf zu einem der lebhaftesten Badeorte entwickelt. Die Gegend ist berühmt für ihre perfekten Wellen für Surfanfänger und Profis sowie für das Nachtleben.",
      hu: "Tamarindo egy kis halászfaluból fejlődött az ország egyik legélénkebb üdülőhelyévé. A környék híres a kezdőknek és profiknak is ideális hullámairól, valamint pezsgő éjszakai életéről.",
      ro: "Tamarindo a evoluat de la un sat de pescari la una dintre cele mai pline de viață stațiuni balneare. Zona este faimoasă pentru valurile sale ideale pentru surferi, dar și pentru viața de noapte.",
      en: "Tamarindo has transformed from a quiet fishing village into a vibrant coastal destination. It is globally famous for its surf breaks suitable for all levels and its energetic nightlife."
    },
    facts: {
      de: ["Surf-Zentrum", "In Guanacaste gelegen", "Goldene Sandstrände", "Nistplatz für Lederschildkröten"],
      hu: ["Szörfközpont", "Guanacaste tartományban", "Aranyhomokos strandok", "Kérgesteknősök fészkelőhelye"],
      ro: ["Centru de surfing", "Situat în Guanacaste", "Plaje cu nisip auriu", "Loc de cuibărit pentru țestoase"],
      en: ["Top surfing destination", "Located in Guanacaste", "Golden sand beaches", "Leatherback turtle nesting site"]
    },
    factsAdvanced: {
      de: ["Nahe dem Nationalpark Las Baulas", "Bekannt für Sportfischen", "Vielseitiges gastronomisches Angebot"],
      hu: ["A Las Baulas Nemzeti Park mellett", "Híres sporthorgászati hely", "Sokszínű gasztronómiai kínálat"],
      ro: ["Lângă Parcul Național Las Baulas", "Cunoscut pentru pescuit sportiv", "Ofertă gastronomică variată"],
      en: ["Adjacent to Las Baulas National Park", "Major hub for sport fishing", "Boasts a very international dining scene"]
    }, image: "/poi-images/cr-tamarindo.webp"},
  {
    id: "cr-poas",
    type: "mountain",
    parent: "CR",
    coords: [-84.2333, 10.2000],
    name: { de: "Poás Vulkan", hu: "Poás vulkán", ro: "Vulcanul Poás", en: "Poás Volcano" },
    description: { de: "Ein aktiver Vulkan mit einem spektakulären, säurehaltigen Kratersee.", hu: "Aktív vulkán egy látványos, savas vizű krátertóval.", ro: "Un vulcan activ cu un lac de crater spectaculos, acid.", en: "An active volcano featuring a spectacular, acidic crater lake." },
    descriptionAdvanced: {
      de: "Der Poás besitzt einen der größten aktiven Krater der Welt. Sein Hauptkratersee, Laguna Caliente, ist extrem säurehaltig und ändert oft seine Farbe von Türkis bis Grau, je nach vulkanischer Aktivität.",
      hu: "A Poás rendelkezik a világ egyik legnagyobb aktív kráterével. Fő krátertava, a Laguna Caliente rendkívül savas, és színe gyakran változik a türkiztől a szürkéig a vulkáni aktivitástól függően.",
      ro: "Poás deține unul dintre cele mai mari cratere active din lume. Lacul său principal din crater, Laguna Caliente, este extrem de acid și își schimbă frecvent culoarea în funcție de activitatea vulcanică.",
      en: "Poás boasts one of the world's largest active volcanic craters. Its primary crater lake, Laguna Caliente, is highly acidic and shifts colors between turquoise and grey based on seismic activity."
    },
    facts: {
      de: ["Höhe: 2708 m", "Einer der größten Krater", "Saurer Kratersee", "Häufige Geysir-Eruptionen"],
      hu: ["Magasság: 2708 m", "Az egyik legnagyobb kráter", "Savas krátertó", "Gyakori gejzírkitörések"],
      ro: ["Altitudine: 2708 m", "Unul dintre cele mai mari cratere", "Lac de crater acid", "Erupții de tip ghețar frecvente"],
      en: ["Elevation: 2,708 m", "One of the world's largest craters", "Acidic crater lake", "Known for phreatic eruptions"]
    },
    factsAdvanced: {
      de: ["Nahe San José gelegen", "Besitzt einen zweiten, kalten See (Botos)", "Häufige Sperrungen wegen Aktivität"],
      hu: ["Közel fekszik San Joséhoz", "Van egy második, hideg tava (Botos)", "Gyakran lezárják az aktivitás miatt"],
      ro: ["Situat aproape de San José", "Are un al doilea lac rece (Botos)", "Închis frecvent din cauza activității"],
      en: ["Very accessible from San José", "Features a second, dormant lake (Botos)", "Subject to closures for safety monitoring"]
    },
    elevation: 2708, image: "/poi-images/cr-poas.webp"},
  {
    id: "cr-lafortuna",
    type: "landmark",
    parent: "CR",
    coords: [-84.6719, 10.4419],
    name: { de: "La Fortuna Wasserfall", hu: "La Fortuna vízesés", ro: "Cascada La Fortuna", en: "La Fortuna Waterfall" },
    description: { de: "Ein beeindruckender, 70 Meter hoher Wasserfall in der Nähe des Arenal.", hu: "Lenyűgöző, 70 méter magas vízesés az Arenal közelében.", ro: "O cascadă impresionantă de 70 de metri, în apropiere de Arenal.", en: "A stunning 70-meter-high waterfall located near the Arenal Volcano." },
    descriptionAdvanced: {
      de: "Der Wasserfall stürzt inmitten des dichten Regenwaldes in ein erfrischendes Becken. Er wird vom Fluss Fortuna gespeist und der Abstieg über 500 Stufen belohnt Besucher mit einem spektakulären Naturerlebnis.",
      hu: "A vízesés sűrű esőerdő közepén zúdul egy frissítő medencébe. A Fortuna-folyó táplálja, és az 500 lépcsőfokon való lejutás látványos természeti élménnyel jutalmazza a látogatókat.",
      ro: "Cascada se prăbușește în mijlocul pădurii tropicale într-un bazin răcoros. Este alimentată de râul Fortuna, iar coborârea celor 500 de trepte oferă vizitatorilor o experiență naturală spectaculoasă.",
      en: "Cascading 70 meters into a tropical basin, La Fortuna is a quintessential Costa Rican waterfall. Fed by the Fortuna River, it requires a 500-step descent through the lush jungle."
    },
    facts: {
      de: ["Höhe: 70 m", "Fuße des Vulkans Chato", "Über 500 Stufen Abstieg", "Schwimmen im Becken möglich"],
      hu: ["Magasság: 70 m", "A Chato-vulkán lábánál", "Több mint 500 lépcsőfok", "Lehet úszni a medencéjében"],
      ro: ["Înălțime: 70 m", "La poalele vulcanului Chato", "Peste 500 de trepte de coborât", "Se poate înota în bazin"],
      en: ["Height: 70 m", "Base of dormant Chato Volcano", "Involves a 500-step staircase", "Swimming allowed in the basin"]
    },
    factsAdvanced: {
      de: ["Wird von lokaler Kooperative verwaltet", "Umgeben von Sekundärregenwald", "Bietet tolle Fotomotive"],
      hu: ["Helyi szövetkezet kezeli", "Másodlagos esőerdő övezi", "Kiváló fotózási helyszín"],
      ro: ["Administrat de o cooperativă locală", "Înconjurat de pădure secundară", "Locație excelentă pentru fotografii"],
      en: ["Managed by a local non-profit ADIFORT", "Surrounded by lush secondary rainforest", "Iconic spot for tropical photography"]
    }, image: "/poi-images/cr-lafortuna.webp"},
  {
    id: "cr-nationaltheater",
    type: "historical",
    parent: "CR",
    coords: [-84.0767, 9.9333],
    name: { de: "Nationaltheater von Costa Rica", hu: "Costa Rica-i Nemzeti Színház", ro: "Teatrul Național din Costa Rica", en: "National Theater of Costa Rica" },
    description: { de: "Ein prächtiges historisches Gebäude im Herzen von San José.", hu: "Pompás történelmi épület San José szívében.", ro: "O clădire istorică magnifică în inima orașului San José.", en: "A magnificent historic building in the heart of San José." },
    descriptionAdvanced: {
      de: "Das Nationaltheater wurde im späten 19. Jahrhundert erbaut und durch eine Sondersteuer auf den Kaffeeexport finanziert. Es gilt als das architektonische Juwel von San José mit seiner prunkvollen Innenausstattung.",
      hu: "A Nemzeti Színházat a 19. század végén építették, és a kávéexportra kivetett különadóból finanszírozták. San José építészeti ékkövének tartják pazar belső díszítései miatt.",
      ro: "Teatrul Național a fost construit la sfârșitul secolului al XIX-lea și finanțat printr-o taxă specială pe exportul de cafea. Este considerat bijuteria arhitecturală a orașului San José.",
      en: "Completed in 1897, the National Theater was funded by a tax on coffee exports. It remains Costa Rica's finest architectural achievement, modeled after the Paris Opera House."
    },
    facts: {
      de: ["Eröffnet: 1897", "Durch Kaffeesteuer finanziert", "Neoklassizistischer Stil", "Architektonisches Juwel"],
      hu: ["Megnyitva: 1897", "Kávéadóból épült", "Neoklasszicista stílus", "Építészeti ékszerdoboz"],
      ro: ["Inaugurat în 1897", "Finanțat din taxa pe cafea", "Stil neoclasic", "Bijuterie arhitecturală"],
      en: ["Opened in 1897", "Funded by coffee export taxes", "Neoclassical architecture", "National architectural jewel"]
    },
    factsAdvanced: {
      de: ["Deckengemälde 'Allegorie von Kaffee und Bananen'", "Aus italienischem Marmor gebaut", "Nationales Symbol"],
      hu: ["Híres 'Kávé és banán allegóriája' mennyezetkép", "Olasz márványból épült", "Nemzeti szimbólum"],
      ro: ["Pictură murală \\\"Alegoria cafelei și bananelor\\\"", "Construit cu marmură italiană", "Simbol național"],
      en: ["Features the famous 'Allegory of Coffee' mural", "Built using Carrara marble from Italy", "Considered a symbol of national pride"]
    },
    historyYear: 1891,
    image: "/poi-images/cr-nationaltheater.webp",
  },
  {
    id: "cr-irazu",
    type: "mountain",
    parent: "CR",
    coords: [-83.8500, 9.9792],
    name: { de: "Irazú Vulkan", hu: "Irazú vulkán", ro: "Vulcanul Irazú", en: "Irazú Volcano" },
    description: { de: "Der höchste Vulkan Costa Ricas mit einem grünen Kratersee.", hu: "Costa Rica legmagasabb vulkánja egy zöld krátertóval.", ro: "Cel mai înalt vulcan din Costa Rica, având un lac de crater verde.", en: "The highest volcano in Costa Rica, featuring a green crater lake." },
    descriptionAdvanced: {
      de: "Der Irazú ist berühmt für seine mondähnliche Kraterlandschaft. Mit über 3400 Metern ist er der höchste Vulkan des Landes und bot 1963 während des Besuchs von John F. Kennedy ein spektakuläres Schauspiel mit Ascheausbrüchen.",
      hu: "Az Irazú híres a holdbéli krátervidékéről. Több mint 3400 méterével az ország legmagasabb vulkánja; 1963-ban, John F. Kennedy látogatása idején látványos hamukitöréseket produkált.",
      ro: "Irazú este faimos pentru peisajul său lunar din crater. Având peste 3400 de metri, este cel mai înalt vulcan din țară; în 1963, a avut o erupție spectaculoasă chiar în timpul vizitei lui J.F. Kennedy.",
      en: "Irazú is Costa Rica's tallest volcano, known for its surreal, moon-like craters. It produced a massive ash eruption in 1963 on the day US President John F. Kennedy visited the country."
    },
    facts: {
      de: ["Höhe: 3432 m", "Höchster Vulkan Costa Ricas", "Grüner Kratersee", "Mondähnliche Landschaft"],
      hu: ["Magasság: 3432 m", "Costa Rica legmagasabb vulkánja", "Zöld krátertó", "Holdbéli táj"],
      ro: ["Altitudine: 3432 m", "Cel mai înalt vulcan din țară", "Lac de crater verde", "Peisaj lunar"],
      en: ["Elevation: 3,432 m", "Highest volcano in Costa Rica", "Acidic green crater lake", "Desolate lunar-like landscape"]
    },
    factsAdvanced: {
      de: ["Blick auf beide Ozeane an klaren Tagen", "Name bedeutet 'Grollen' in indigener Sprache", "Wichtiger Nationalpark"],
      hu: ["Tiszta időben mindkét óceán látható", "A név jelentése 'morajlás' indián nyelven", "Fontos nemzeti park"],
      ro: ["Vedere spre ambele oceane în zile senine", "Numele înseamnă \\\"bubuit\\\" în limbă indigenă", "Parc național major"],
      en: ["Possible to see both oceans on clear days", "Name means 'thunder' in indigenous tongue", "Premier high-altitude national park"]
    },
    elevation: 3432, image: "/poi-images/cr-irazu.webp"},
  {
    id: "cr-fortin",
    type: "historical",
    parent: "CR",
    coords: [-84.1167, 10.0000],
    name: { de: "El Fortín", hu: "El Fortín", ro: "El Fortín", en: "El Fortin" },
    description: { de: "Ein historischer Wehrturm in Heredia, Wahrzeichen der Stadt.", hu: "Heredia városának történelmi bástyája és jelképe.", ro: "Un turn istoric din Heredia, simbolul orașului.", en: "A historic fortification tower in Heredia and a landmark of the city." },
    descriptionAdvanced: {
      de: "Der Fortín ist ein eigentümlicher Ziegelsteinturm, der 1876 als Teil eines geplanten Rathauses und einer Festung erbaut wurde. Er ist das unverwechselbare Symbol von Heredia geworden.",
      hu: "A Fortín egy különös téglaépítmény, amely 1876-ban épült egy tervezett városháza és erőd részeként. Heredia összetéveszthetetlen szimbólumává vált az idők során.",
      ro: "Fortín este un turn de cărămidă neobișnuit, construit în 1876 ca parte a unei primării și a unei fortărețe planificate. A devenit simbolul inconfundabil al orașului Heredia.",
      en: "El Fortín is a unique brick watchtower built in 1876. Originally intended as part of a larger fortress and city hall project, it has become the iconic architectural symbol of Heredia."
    },
    facts: {
      de: ["Erbaut: 1876", "Wahrzeichen von Heredia", "Ziegelsteinkonstruktion", "Nationalmonument"],
      hu: ["Épült: 1876", "Heredia jelképe", "Tégla építmény", "Nemzeti műemlék"],
      ro: ["Construit în 1876", "Simbolul orașului Heredia", "Construcție din cărămidă", "Monument național"],
      en: ["Built in 1876", "Architectural icon of Heredia", "Unique brick construction", "Designated National Monument"]
    },
    factsAdvanced: {
      de: ["Sollte ursprünglich Schießscharten nach außen haben", "Einzigartige Form", "Mitten im Stadtzentrum"],
      hu: ["Eredetileg kifelé néző lőrésekkel tervezték", "Egyedülálló forma", "A városközpont közepén áll"],
      ro: ["Trebuia să aibă fante de tragere spre exterior", "Formă unică", "Chiar în centrul orașului"],
      en: ["Features unconventional outward-facing slits", "Highly unusual architectural design", "Located in the central plaza"]
    },
    historyYear: 1876, image: "/poi-images/cr-fortin.webp"},
  {
    id: "cr-marino-ballena",
    type: "landmark",
    parent: "CR",
    coords: [-83.7431, 9.1556],
    name: { de: "Marino Ballena Nationalpark", hu: "Marino Ballena Nemzeti Park", ro: "Parcul Național Marino Ballena", en: "Marino Ballena National Park" },
    description: { de: "Bekannt für seine 'Walflossen'-Felsformation und Walbeobachtungen.", hu: "Híres a 'bálnafarok' alakú partvonaláról és a bálnalesekről.", ro: "Renumit pentru formațiunea stâncoasă în formă de coadă de balenă și observarea balenelor.", en: "Famous for its whale-tail-shaped rock formation and humpback whale watching." },
    descriptionAdvanced: {
      de: "Dieser Meeresnationalpark ist berühmt für die 'Punta Uvita', eine natürliche Sand- und Felsbank, die bei Ebbe genau die Form einer Walflosse hat – und genau hierher kommen Buckelwale zur Paarung.",
      hu: "Ez a tengeri nemzeti park a 'Punta Uvita' miatt híres, ami egy olyan homok- és sziklapad, amely apálykor pontosan egy bálnafarok alakját veszi fel – ráadásul épp ide járnak a hosszúszárnyú bálnák szaporodni.",
      ro: "Acest parc marin este faimos pentru \\\"Punta Uvita\\\", un banc de nisip și stâncă care, la reflux, are exact forma unei cozi de balenă – chiar în locul unde vin balenele cu cocoașă pentru împerechere.",
      en: "This marine park features the extraordinary 'Whale Tail' sandbar, which naturally forms the shape of a fluke at low tide. Fittingly, the area is a major breeding ground for humpback whales."
    },
    facts: {
      de: ["Walflossen-Formation", "Buckelwal-Beobachtung", "Meeresnationalpark", "Wunderschöne Korallenriffe"],
      hu: ["Bálnafarok-alakzat", "Hosszúszárnyú bálna les", "Tengeri nemzeti park", "Gyönyörű korallzátonyok"],
      ro: ["Formațiune în formă de coadă de balenă", "Observarea balenelor", "Parc național marin", "Recife de corali superbe"],
      en: ["Whale-tail sandbar formation", "Humpback whale breeding site", "Marine national park", "Protects diverse coral reefs"]
    },
    factsAdvanced: {
      de: ["Wichtig für den Schutz der Meere", "Enthält die größte Korallenbank", "Zentrum für Schnorcheltouren"],
      hu: ["Fontos a tengervédelem szempontjából", "A legnagyobb korallpad található itt", "Búvártúrák központja"],
      ro: ["Important pentru protecția marină", "Conține cel mai mare banc de corali", "Centru pentru tururi de snorkeling"],
      en: ["Critical for marine conservation", "Houses the largest coral reef on the Pacific", "Top destination for coastal kayaking"]
    }, image: "/poi-images/cr-marino-ballena.webp"},
  {
    id: "cr-isla-del-cano",
    type: "landmark",
    parent: "CR",
    coords: [-83.8750, 8.7083],
    name: { de: "Isla del Caño", hu: "Isla del Caño", ro: "Insula Caño", en: "Cano Island" },
    description: { de: "Ein biologisches Reservat und erstklassiger Ort zum Schnorcheln und Tauchen.", hu: "Biológiai rezervátum és kiváló hely a búvárkodáshoz.", ro: "O rezervație biologică și un loc de top pentru snorkeling și scufundări.", en: "A biological reserve and premier destination for snorkeling and diving." },
    descriptionAdvanced: {
      de: "Die Isla del Caño liegt vor der Osa-Halbinsel und bietet einige der besten Unterwassersichtweiten des Landes. In der präkolumbianischen Zeit diente sie als heiliger Begräbnisplatz und Handelsstation.",
      hu: "Az Isla del Caño az Osa-félszigetnél fekszik, és itt a legjobb a víz alatti látótávolság az országban. A prekolumbián időkben szent temetkezési helyként és kereskedelmi állomásként szolgált.",
      ro: "Insula Caño este situată lângă Peninsula Osa și oferă una dintre cele mai bune vizibilități subacvatice din țară. În perioada precolumbiană, a servit drept loc sacru de înmormântare.",
      en: "Located off the Osa Peninsula, Cano Island offers some of Costa Rica's clearest waters for diving. Historically, it was a sacred pre-Columbian burial ground and trading post."
    },
    facts: {
      de: ["Biologisches Reservat", "Top Tauchplatz", "Kristallklares Wasser", "Heimat von Rochen und Haien"],
      hu: ["Biológiai rezervátum", "Kiváló búvárhely", "Kristálytiszta víz", "Ráják és cápák lakhelye"],
      ro: ["Rezervație biologică", "Loc de scufundări de top", "Apă cristalină", "Găzduiește pisici de mare și rechini"],
      en: ["Biological reserve", "Premier diving destination", "Exceptional water clarity", "Home to rays and reef sharks"]
    },
    factsAdvanced: {
      de: ["Bekannt für mysteriöse Steinkugeln", "Frühere heilige Stätte", "Begrenzte Besucherzahl"],
      hu: ["Rejtélyes kőgolyóiról is ismert", "Egykori szent hely", "Korlátozott látogatószám"],
      ro: ["Cunoscut pentru sferele de piatră misterioase", "Fost sit sacru", "Număr limitat de vizitatori"],
      en: ["Site of mysterious ancient stone spheres", "Ancient indigenous sacred ground", "Strict daily visitor limits enforced"]
    }, image: "/poi-images/cr-isla-del-cano.webp"},
  {
    id: "cr-cathedral-sanjose",
    type: "landmark",
    parent: "CR",
    coords: [-84.0789, 9.9328],
    name: { de: "Kathedrale von San José", hu: "San José-székesegyház", ro: "Catedrala din San José", en: "San Jose Cathedral" },
    description: { de: "Die Hauptkirche der Hauptstadt mit einer Mischung aus Architekturstilen.", hu: "A főváros főtemploma, különböző építészeti stílusok ötvözete.", ro: "Biserica principală a capitalei, având un amestec de stiluri arhitecturale.", en: "The main cathedral of the capital city, featuring a blend of architectural styles." },
    descriptionAdvanced: {
      de: "Die heutige Kathedrale wurde im 19. Jahrhundert erbaut, nachdem frühere Bauten durch Erdbeben zerstört wurden. Sie ist der Sitz des Erzbischofs und ein wichtiger Treffpunkt im Zentrum von San José.",
      hu: "A mai székesegyház a 19. században épült, miután a korábbi épületeket földrengések pusztították el. Az érsekség székhelye és fontos találkozóhely San José szívében.",
      ro: "Catedrala actuală a fost construită în secolul al XIX-lea, după ce edificiile anterioare au fost distruse de cutremure. Este sediul arhiepiscopului și un punct de reper în centrul orașului.",
      en: "The current Metropolitan Cathedral was built in the late 19th century following earthquake damage to prior structures. It serves as the seat of the Archdiocese and a central urban landmark."
    },
    facts: {
      de: ["Erbaut: 1871", "Sitz des Erzbischofs", "Neoklassik und Barock", "Im Herzen von San José"],
      hu: ["Épült: 1871", "Az érsekség székhelye", "Neoklasszicista és barokk stílus", "San José szívében"],
      ro: ["Construită în 1871", "Sediul arhiepiscopului", "Stil neoclasic și baroc", "În inima orașului San José"],
      en: ["Completed in 1871", "Seat of the Catholic Archdiocese", "Blends Neoclassical and Baroque", "Center of San José"]
    },
    factsAdvanced: {
      de: ["Hatte ursprünglich hölzerne Altäre", "Beherbergt wertvolle religiöse Kunst", "Bietet Blick auf den Parque Central"],
      hu: ["Eredetileg faoltárai voltak", "Értékes vallási műtárgyakat őriz", "A Központi Parkra néz"],
      ro: ["A avut inițial altare din lemn", "Adăpostește artă religioasă valoroasă", "Vedere spre Parcul Central"],
      en: ["Originally featured elaborate wood altars", "Houses precious religious artworks", "Faces the city's historic Central Park"]
    },
    historyYear: 1871, image: "/poi-images/cr-cathedral-sanjose.webp"},
  {
    id: "cr-isla-tortuga",
    type: "landmark",
    parent: "CR",
    coords: [-84.8833, 9.8500],
    name: { de: "Insel Tortuga", hu: "Teknős-sziget (Tortuga)", ro: "Insula Tortuga", en: "Tortuga Island" },
    description: { de: "Eine malerische Insel bekannt für ihre weißen Sandstrände und türkisfarbenes Wasser.", hu: "Festői sziget, amely fehér homokos strandjairól és türkizkék vizéről ismert.", ro: "O insulă pitorească renumită pentru plajele cu nisip alb și apa turcoaz.", en: "A picturesque island famous for its white sand beaches and turquoise waters." },
    descriptionAdvanced: {
      de: "Die Insel Tortuga liegt im Golf von Nicoya und ist ein beliebtes Ziel für Tagesausflüge. Sie bietet ideale Bedingungen zum Schnorcheln und Entspannen unter Palmen in einer paradiesischen Umgebung.",
      hu: "A Tortuga-sziget a Nicoya-öbölben található, és népszerű egynapos kirándulóhely. Ideális feltételeket kínál a búvárkodáshoz és a pálmafák alatti pihenéshez paradicsomi környezetben.",
      ro: "Insula Tortuga este situată în Golful Nicoya și este o destinație populară pentru excursii de o zi. Oferă condiții ideale pentru snorkeling și relaxare sub palmiere.",
      en: "Tortuga Island, located in the Gulf of Nicoya, is a quintessential tropical paradise. It is a premier destination for day cruises, offering excellent snorkeling and sunbathing on its white sands."
    },
    facts: {
      de: ["Weiße Sandstrände", "Nur per Boot erreichbar", "Ideal zum Schnorcheln", "Im Golf von Nicoya"],
      hu: ["Fehér homokos strandok", "Csak hajóval érhető el", "Ideális könnyűbúvárkodáshoz", "A Nicoya-öbölben"],
      ro: ["Plaje cu nisip alb", "Accesibil doar cu barca", "Ideal pentru snorkeling", "În Golful Nicoya"],
      en: ["Pristine white-sand beaches", "Accessible only by boat", "Premier snorkeling location", "Located in the Gulf of Nicoya"]
    },
    factsAdvanced: {
      de: ["Keine Hotels auf der Insel", "Reich an tropischen Fischen", "Beliebt für Katamaran-Touren"],
      hu: ["Nincsenek szállodák a szigeten", "Trópusi halakban gazdag", "Népszerű katamarán túrák"],
      ro: ["Nu există hoteluri pe insulă", "Bogată în pești tropicali", "Populară pentru tururi cu catamaranul"],
      en: ["No overnight hotel stays permitted", "Teeming with diverse tropical fish", "Focus of major catamaran day tours"]
    }, image: "/poi-images/cr-isla-tortuga.webp"},
  {
    id: "cr-rio-celeste",
    type: "river",
    parent: "CR",
    coords: [-84.9833, 10.7000],
    name: { de: "Río Celeste", hu: "Rio Celeste", ro: "Râul Celeste", en: "Rio Celeste" },
    description: { de: "Ein Fluss bekannt für seine leuchtend hellblaue Farbe aufgrund vulkanischer Mineralien.", hu: "Folyó, amely vulkáni ásványoknak köszönhető élénk világoskék színéről ismert.", ro: "Un râu faimos pentru culoarea sa albastru-azuriu, cauzată de mineralele vulcanice.", en: "A river known for its bright light blue color caused by volcanic minerals." },
    descriptionAdvanced: {
      de: "Die magische Farbe des Rio Celeste entsteht durch eine chemische Reaktion an der Stelle, wo zwei klare Flüsse aufeinandertreffen. Das Phänomen wird 'Los Teñideros' genannt und verzaubert jeden Besucher.",
      hu: "A Rio Celeste mágikus színe egy kémiai reakciónak köszönhető azon a ponton, ahol két tiszta folyó találkozik. A jelenséget \\\"Los Teñideros\\\"-nak hívják, és minden látogatót elvarázsol.",
      ro: "Culoarea magică a râului Celeste este rezultatul unei reacții chimice în locul unde se întâlnesc două râuri limpezi. Fenomenul se numește \\\"Los Teñideros\\\" și fascinează orice vizitator.",
      en: "The surreal blue hue of Rio Celeste is created by a chemical reaction where two clear rivers merge. This phenomenon, known as 'Los Teñideros', creates one of the country's most stunning natural sights."
    },
    facts: {
      de: ["Himmelblaue Farbe", "Im Vulkanpark Tenorio", "Optisches Phänomen", "Badeverbot im Nationalpark"],
      hu: ["Égszínkék víz", "A Tenorio-vulkán parkban", "Optikai jelenség", "A nemzeti parkban tilos a fürdés"],
      ro: ["Culoare albastru azuriu", "În Parcul Vulcanului Tenorio", "Fenomen optic", "Scăldatul este interzis în parc"],
      en: ["Vivid sky-blue water", "In Tenorio Volcano National Park", "Optical and chemical phenomenon", "Swimming prohibited in the park"]
    },
    factsAdvanced: {
      de: ["Spektakulärer hellblauer Wasserfall", "Reich an geothermalen Quellen", "Dichter Regenwald"],
      hu: ["Látványos égszínkék vízesés", "Geotermikus forrásokban gazdag", "Sűrű esőerdő"],
      ro: ["Cascadă spectaculoasă albastră", "Bogat în izvoare geotermale", "Pădure tropicală densă"],
      en: ["Features a stunning blue waterfall", "Area rich in hot geothermal springs", "Surrounded by primary rainforest"]
    },
    image: "/poi-images/cr-rio-celeste.webp",
  }
];

export const costaricaAllPoi: POI[] = [...costaricaCountry, ...costaricaRegions, ...costaricaCities, ...costaricaLandmarks, ...poiExtraCostaricaLifeV2, ...poiExtraCostaricaCitiesV2, ...poiExtraCostaricaEconomicV2, ...poiExtraCostaricaHistoryV2, ...poiExtraCostaricaLandmarksV2, ...poiExtraCostaricaNatureV2, ...poiExtraCostaricaReliefV2];

