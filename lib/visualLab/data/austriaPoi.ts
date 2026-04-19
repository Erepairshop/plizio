import type { POI } from "./poi";

export const austriaCountry: POI = {
  id: "AT",
  type: "country",
  parent: "EUROPE",
  coords: [13.3333, 47.3333],
  name: { de: "Österreich", hu: "Ausztria", ro: "Austria", en: "Austria" },
  image: "/geo-images/austria/austria.webp",
  description: {
    de: "Ein Binnenstaat in Mitteleuropa, berühmt für seine Alpenlandschaft, klassische Musik und reiche Geschichte.",
    hu: "Közép-európai szárazföldi ország, amely híres alpesi tájairól, klasszikus zenéjéről és gazdag történelméről.",
    ro: "O țară fără ieșire la mare din Europa Centrală, faimoasă pentru peisajele sale alpine, muzica clasică și istoria bogată.",
    en: "A landlocked country in Central Europe, famous for its Alpine landscapes, classical music, and rich history."
  },
  facts: {
    de: ["Die Hauptstadt ist Wien.", "Die Alpen bedecken etwa 62% des Landes.", "Heimat vieler berühmter Komponisten wie Mozart und Strauss.", "Amtssprache ist Deutsch."],
    hu: ["Fővárosa Bécs.", "Az Alpok az ország mintegy 62%-át borítják.", "Sok híres zeneszerző, például Mozart és Strauss hazája.", "Hivatalos nyelve a német."],
    ro: ["Capitala este Viena.", "Alpii acoperă aproximativ 62% din țară.", "Casa multor compozitori celebri, cum ar fi Mozart și Strauss.", "Limba oficială este germana."],
    en: ["The capital is Vienna.", "The Alps cover about 62% of the country.", "Home to many famous composers like Mozart and Strauss.", "The official language is German."]
  }
};

export const austriaRegions: POI[] = [
  {
    id: "AT-1", type: "region", parent: "AT", coords: [16.5333, 47.8333],
    name: { de: "Burgenland", hu: "Burgenland", ro: "Burgenland", en: "Burgenland" },
    image: "/geo-images/austria/burgenland.webp",
    description: { de: "Das östlichste Bundesland, bekannt für Wein und den Neusiedler See.", hu: "A legkeletibb tartomány, amely borairól és a Fertő tóról ismert.", ro: "Cel mai estic stat, cunoscut pentru vin și lacul Neusiedl.", en: "The easternmost state, known for wine and Lake Neusiedl." },
    facts: { de: ["Flachstes Bundesland.", "Hauptstadt ist Eisenstadt."], hu: ["A leglaposabb tartomány.", "Fővárosa Kismarton (Eisenstadt)."], ro: ["Cel mai plat stat.", "Capitala este Eisenstadt."], en: ["Flattest state.", "Capital is Eisenstadt."] }
  },
  {
    id: "AT-2", type: "region", parent: "AT", coords: [14.3053, 46.6247],
    name: { de: "Kärnten", hu: "Karintia", ro: "Carintia", en: "Carinthia" },
    image: "/geo-images/austria/carinthia.webp",
    description: { de: "Südlichstes Bundesland, berühmt für seine vielen Badeseen.", hu: "A legdélibb tartomány, híres fürdőtavairól.", ro: "Cel mai sudic stat, faimos pentru numeroasele sale lacuri de baie.", en: "Southernmost state, famous for its many bathing lakes." },
    facts: { de: ["Wörthersee ist sehr beliebt.", "Hauptstadt ist Klagenfurt."], hu: ["A Wörthi-tó nagyon népszerű.", "Fővárosa Klagenfurt."], ro: ["Lacul Wörthersee este foarte popular.", "Capitala este Klagenfurt."], en: ["Lake Wörthersee is very popular.", "Capital is Klagenfurt."] }
  },
  {
    id: "AT-3", type: "region", parent: "AT", coords: [15.6333, 48.2],
    name: { de: "Niederösterreich", hu: "Alsó-Ausztria", ro: "Austria Inferioară", en: "Lower Austria" },
    image: "/geo-images/austria/lower-austria.webp",
    description: { de: "Umschließt Wien und ist flächenmäßig das größte Bundesland.", hu: "Körülveszi Bécset, és területre a legnagyobb tartomány.", ro: "Înconjoară Viena și este cel mai mare stat ca suprafață.", en: "Surrounds Vienna and is the largest state by area." },
    facts: { de: ["Die Wachau ist UNESCO-Welterbe.", "Hauptstadt ist St. Pölten."], hu: ["A Wachau UNESCO világörökség.", "Fővárosa St. Pölten."], ro: ["Valea Wachau este în patrimoniul UNESCO.", "Capitala este St. Pölten."], en: ["The Wachau valley is a UNESCO World Heritage site.", "Capital is St. Pölten."] }
  },
  {
    id: "AT-4", type: "region", parent: "AT", coords: [14.2861, 48.3069],
    name: { de: "Oberösterreich", hu: "Felső-Ausztria", ro: "Austria Superioară", en: "Upper Austria" },
    image: "/geo-images/austria/upper-austria.webp",
    description: { de: "Nordwestliches Bundesland mit starker Industrie und schöner Natur.", hu: "Északnyugati tartomány erős iparral és gyönyörű természettel.", ro: "Stat din nord-vest cu industrie puternică și natură frumoasă.", en: "Northwestern state with strong industry and beautiful nature." },
    facts: { de: ["Teilt sich das Salzkammergut.", "Hauptstadt ist Linz."], hu: ["Osztozik a Salzkammergut régióban.", "Fővárosa Linz."], ro: ["Împarte regiunea Salzkammergut.", "Capitala este Linz."], en: ["Shares the Salzkammergut region.", "Capital is Linz."] }
  },
  {
    id: "AT-5", type: "region", parent: "AT", coords: [13.055, 47.8095],
    name: { de: "Salzburg", hu: "Salzburg", ro: "Salzburg", en: "Salzburg" },
    image: "/geo-images/austria/salzburg.webp",
    description: { de: "Bekannt für seine Kultur, Musik und atemberaubenden Berglandschaften.", hu: "Kultúrájáról, zenéjéről és lenyűgöző hegyi tájairól ismert.", ro: "Cunoscut pentru cultura, muzica și peisajele sale montane uimitoare.", en: "Known for its culture, music, and stunning mountain landscapes." },
    facts: { de: ["Geburtsort von Mozart.", "Zieht Skifahrer aus aller Welt an."], hu: ["Mozart szülőhelye.", "Sízőket vonz a világ minden tájáról."], ro: ["Locul de naștere al lui Mozart.", "Atrage schiori din toată lumea."], en: ["Birthplace of Mozart.", "Attracts skiers from all over the world."] }
  },
  {
    id: "AT-6", type: "region", parent: "AT", coords: [15.4395, 47.0707],
    name: { de: "Steiermark", hu: "Stájerország", ro: "Stiria", en: "Styria" },
    image: "/geo-images/austria/styria.webp",
    description: { de: "Das 'Grüne Herz' Österreichs mit vielen Wäldern und Weinbergen.", hu: "Ausztria 'Zöld Szíve', sok erdővel és szőlőültetvénnyel.", ro: "'Inima verde' a Austriei, cu multe păduri și podgorii.", en: "The 'Green Heart' of Austria, with many forests and vineyards." },
    facts: { de: ["Bekannt für Kürbiskernöl.", "Hauptstadt ist Graz."], hu: ["Híres a tökmagolajáról.", "Fővárosa Graz."], ro: ["Cunoscut pentru uleiul de semințe de dovleac.", "Capitala este Graz."], en: ["Known for pumpkin seed oil.", "Capital is Graz."] }
  },
  {
    id: "AT-7", type: "region", parent: "AT", coords: [11.3945, 47.2692],
    name: { de: "Tirol", hu: "Tirol", ro: "Tirol", en: "Tyrol" },
    image: "/geo-images/austria/tyrol.webp",
    description: { de: "Das Herz der Alpen, ein Paradies für Wintersport und Wandern.", hu: "Az Alpok szíve, a téli sportok és a túrázás paradicsoma.", ro: "Inima Alpilor, un paradis pentru sporturile de iarnă și drumeții.", en: "The heart of the Alps, a paradise for winter sports and hiking." },
    facts: { de: ["Sehr bergig.", "Hauptstadt ist Innsbruck."], hu: ["Nagyon hegyvidéki.", "Fővárosa Innsbruck."], ro: ["Foarte muntos.", "Capitala este Innsbruck."], en: ["Very mountainous.", "Capital is Innsbruck."] }
  },
  {
    id: "AT-8", type: "region", parent: "AT", coords: [9.7438, 47.5014],
    name: { de: "Vorarlberg", hu: "Vorarlberg", ro: "Vorarlberg", en: "Vorarlberg" },
    image: "/geo-images/austria/vorarlberg.webp",
    description: { de: "Das westlichste und kleinste Bundesland (ohne Wien).", hu: "A legnyugatibb és legkisebb tartomány (Bécs kivételével).", ro: "Cel mai vestic și mai mic stat (exceptând Viena).", en: "The westernmost and smallest state (excluding Vienna)." },
    facts: { de: ["Grenzt an die Schweiz und Deutschland.", "Hauptstadt ist Bregenz."], hu: ["Svájccal és Németországgal határos.", "Fővárosa Bregenz."], ro: ["Se învecinează cu Elveția și Germania.", "Capitala este Bregenz."], en: ["Borders Switzerland and Germany.", "Capital is Bregenz."] }
  },
  {
    id: "AT-9", type: "region", parent: "AT", coords: [16.3738, 48.2082],
    name: { de: "Wien", hu: "Bécs", ro: "Viena", en: "Vienna" },
    image: "/geo-images/austria/vienna.webp",
    description: { de: "Die Hauptstadt und das kleinste, aber bevölkerungsreichste Bundesland.", hu: "A főváros és a legkisebb, de legnépesebb tartomány.", ro: "Capitala și cel mai mic, dar cel mai populat stat.", en: "The capital and the smallest but most populous state." },
    facts: { de: ["Historisches Zentrum ist UNESCO-Welterbe.", "Sitz vieler internationaler Organisationen."], hu: ["Történelmi központja UNESCO világörökség.", "Számos nemzetközi szervezet székhelye."], ro: ["Centrul istoric este în patrimoniul UNESCO.", "Sediul multor organizații internaționale."], en: ["Historic center is a UNESCO World Heritage site.", "Seat of many international organizations."] }
  }
];

export const austriaCities: POI[] = [
  {
    id: "AT-Wien", type: "city", parent: "AT-9", coords: [16.3738, 48.2082],
    name: { de: "Wien", hu: "Bécs", ro: "Viena", en: "Vienna" },
    image: "/geo-images/austria/vienna.webp",
    description: { de: "Österreichs Hauptstadt, bekannt für ihre imperialen Paläste und Kaffehauskultur.", hu: "Ausztria fővárosa, amely császári palotáiról és kávéházi kultúrájáról ismert.", ro: "Capitala Austriei, cunoscută pentru palatele sale imperiale și cultura cafenelelor.", en: "Austria's capital, known for its imperial palaces and coffee-house culture." },
    facts: { de: ["Ehemaliges Zentrum der Habsburger.", "Schloss Schönbrunn ist hier."], hu: ["A Habsburgok egykori központja.", "Itt található a Schönbrunni kastély."], ro: ["Fostul centru al Habsburgilor.", "Aici se află Palatul Schönbrunn."], en: ["Former center of the Habsburgs.", "Schönbrunn Palace is here."] }
  },
  {
    id: "AT-Graz", type: "city", parent: "AT-6", coords: [15.4395, 47.0707],
    name: { de: "Graz", hu: "Graz", ro: "Graz", en: "Graz" },
    image: "/geo-images/austria/graz.webp",
    description: { de: "Die zweitgrößte Stadt Österreichs mit einer gut erhaltenen Altstadt.", hu: "Ausztria második legnagyobb városa, jól megőrzött óvárossal.", ro: "Al doilea oraș ca mărime din Austria, cu un centru vechi bine conservat.", en: "Austria's second-largest city with a well-preserved old town." },
    facts: { de: ["Wahrzeichen ist der Uhrturm.", "Universitätsstadt."], hu: ["Jelképe az Óratorony (Uhrturm).", "Egyetemváros."], ro: ["Simbolul este Turnul cu Ceas.", "Oraș universitar."], en: ["Landmark is the Clock Tower.", "University city."] }
  },
  {
    id: "AT-Linz", type: "city", parent: "AT-4", coords: [14.2861, 48.3069],
    name: { de: "Linz", hu: "Linz", ro: "Linz", en: "Linz" },
    image: "/geo-images/austria/linz.webp",
    description: { de: "Eine moderne Industriestadt an der Donau mit starkem Fokus auf Technologie und Kunst.", hu: "Modern iparváros a Duna partján, erős technológiai és művészeti fókusszal.", ro: "Un oraș industrial modern pe Dunăre, cu un accent puternic pe tehnologie și artă.", en: "A modern industrial city on the Danube with a strong focus on technology and art." },
    facts: { de: ["Ars Electronica Center ist hier.", "Bekannt für die Linzer Torte."], hu: ["Itt található az Ars Electronica Center.", "Híres a Linzer tortáról."], ro: ["Aici este Centrul Ars Electronica.", "Cunoscut pentru tortul Linzer."], en: ["Ars Electronica Center is here.", "Known for the Linzer Torte."] }
  },
  {
    id: "AT-SalzburgCity", type: "city", parent: "AT-5", coords: [13.055, 47.8095],
    name: { de: "Salzburg", hu: "Salzburg", ro: "Salzburg", en: "Salzburg" },
    image: "/geo-images/austria/salzburg.webp",
    description: { de: "Barockstadt und Geburtsort von Wolfgang Amadeus Mozart.", hu: "Barokk város és Wolfgang Amadeus Mozart szülőhelye.", ro: "Oraș baroc și locul de naștere al lui Wolfgang Amadeus Mozart.", en: "Baroque city and birthplace of Wolfgang Amadeus Mozart." },
    facts: { de: ["Festung Hohensalzburg thront über der Stadt.", "Schauplatz von 'The Sound of Music'."], hu: ["A Hohensalzburg vára magasodik a város fölé.", "A 'A muzsika hangja' helyszíne."], ro: ["Fortăreața Hohensalzburg domină orașul.", "Locul de filmare pentru 'Sunetul Muzicii'."], en: ["Hohensalzburg Fortress towers over the city.", "Setting of 'The Sound of Music'."] }
  },
  {
    id: "AT-Innsbruck", type: "city", parent: "AT-7", coords: [11.3945, 47.2692],
    name: { de: "Innsbruck", hu: "Innsbruck", ro: "Innsbruck", en: "Innsbruck" },
    image: "/geo-images/austria/innsbruck.webp",
    description: { de: "Hauptstadt Tirols, umgeben von majestätischen Bergen.", hu: "Tirol fővárosa, fenséges hegyekkel körülvéve.", ro: "Capitala Tirolului, înconjurată de munți maiestuoși.", en: "Capital of Tyrol, surrounded by majestic mountains." },
    facts: { de: ["Zweimaliger Austragungsort der Olympischen Winterspiele.", "Wahrzeichen ist das Goldene Dachl."], hu: ["Kétszeres téli olimpiai helyszín.", "Jelképe az Aranytető (Goldenes Dachl)."], ro: ["Gazdă a Jocurilor Olimpice de Iarnă de două ori.", "Simbolul este Acoperișul de Aur."], en: ["Two-time host of the Winter Olympics.", "Landmark is the Golden Roof."] }
  },
  {
    id: "AT-Klagenfurt", type: "city", parent: "AT-2", coords: [14.3053, 46.6247],
    name: { de: "Klagenfurt", hu: "Klagenfurt", ro: "Klagenfurt", en: "Klagenfurt" },
    image: "/geo-images/austria/klagenfurt.webp",
    description: { de: "Am Ostrand des Wörthersees gelegen, mit einer charmanten Renaissance-Altstadt.", hu: "A Wörthi-tó keleti partján fekszik, bájos reneszánsz óvárossal.", ro: "Situat pe malul estic al lacului Wörthersee, cu un fermecător oraș vechi renascentist.", en: "Located on the eastern shore of Lake Wörthersee, with a charming Renaissance old town." },
    facts: { de: ["Wahrzeichen ist der Lindwurm.", "Minimundus (Miniaturpark) befindet sich hier."], hu: ["Jelképe a Lindwurm (sárkány).", "Itt található a Minimundus (miniatűr park)."], ro: ["Simbolul este dragonul Lindwurm.", "Aici se află Minimundus (parc în miniatură)."], en: ["Landmark is the Lindwurm (dragon).", "Minimundus (miniature park) is located here."] }
  },
  {
    id: "AT-Bregenz", type: "city", parent: "AT-8", coords: [9.7438, 47.5014],
    name: { de: "Bregenz", hu: "Bregenz", ro: "Bregenz", en: "Bregenz" },
    image: "/geo-images/austria/bregenz.webp",
    description: { de: "Liegt am Bodensee und ist bekannt für ihre jährlichen Festspiele auf der Seebühne.", hu: "A Bódeni-tó partján fekszik, és a vízi színpadon évente megrendezett fesztiváljáról ismert.", ro: "Situat pe Lacul Constanța și cunoscut pentru festivalul său anual pe scena plutitoare.", en: "Located on Lake Constance and known for its annual festival on the floating stage." },
    facts: { de: ["Die Pfänderbahn bietet tolle Aussichten.", "Kulturelles Zentrum Vorarlbergs."], hu: ["A Pfänderbahn nagyszerű kilátást nyújt.", "Vorarlberg kulturális központja."], ro: ["Telecabina Pfänder oferă priveliști minunate.", "Centrul cultural al Vorarlbergului."], en: ["The Pfänderbahn offers great views.", "Cultural center of Vorarlberg."] }
  },
  {
    id: "AT-Eisenstadt", type: "city", parent: "AT-1", coords: [16.5333, 47.8333],
    name: { de: "Eisenstadt", hu: "Kismarton", ro: "Eisenstadt", en: "Eisenstadt" },
    image: "/geo-images/austria/eisenstadt.webp",
    description: { de: "Die kleinste Landeshauptstadt, eng mit dem Komponisten Joseph Haydn verbunden.", hu: "A legkisebb tartományi főváros, amely szorosan kapcsolódik Joseph Haydn zeneszerzőhöz.", ro: "Cea mai mică capitală de stat, strâns legată de compozitorul Joseph Haydn.", en: "The smallest state capital, closely associated with composer Joseph Haydn." },
    facts: { de: ["Schloss Esterházy ist das Highlight.", "Haydn lebte und arbeitete hier lange."], hu: ["Az Esterházy-kastély a fő látványosság.", "Haydn sokáig élt és dolgozott itt."], ro: ["Palatul Esterházy este punctul culminant.", "Haydn a trăit și a lucrat aici mult timp."], en: ["Esterházy Palace is the highlight.", "Haydn lived and worked here for a long time."] }
  },
  {
    id: "AT-StPolten", type: "city", parent: "AT-3", coords: [15.6333, 48.2],
    name: { de: "St. Pölten", hu: "St. Pölten", ro: "St. Pölten", en: "St. Pölten" },
    image: "/geo-images/austria/st-p-lten.webp",
    description: { de: "Die jüngste Landeshauptstadt Österreichs, mit einer Mischung aus Barock und moderner Architektur.", hu: "Ausztria legfiatalabb tartományi fővárosa, a barokk és a modern építészet keverékével.", ro: "Cea mai tânără capitală de stat a Austriei, cu un amestec de arhitectură barocă și modernă.", en: "Austria's youngest state capital, with a mix of Baroque and modern architecture." },
    facts: { de: ["Wurde 1986 Hauptstadt von Niederösterreich.", "Besitzt ein modernes Regierungsviertel."], hu: ["1986-ban lett Alsó-Ausztria fővárosa.", "Modern kormányzati negyeddel rendelkezik."], ro: ["A devenit capitala Austriei Inferioare în 1986.", "Are un cartier guvernamental modern."], en: ["Became capital of Lower Austria in 1986.", "Features a modern government district."] }
  },
  {
    id: "AT-Schoenbrunn", type: "landmark", parent: "AT-9", coords: [16.3122, 48.1848],
    name: { de: "Schloss Schönbrunn", hu: "Schönbrunni kastély", ro: "Palatul Schönbrunn", en: "Schönbrunn Palace" },
    image: "/geo-images/austria/sch-nbrunn-palace.webp",
    description: { de: "Die ehemalige Sommerresidenz der Habsburger, mit prächtigen Gärten und einem Zoo.", hu: "A Habsburgok egykori nyári rezidenciája, pompás kertekkel és egy állatkerttel.", ro: "Fosta reședință de vară a Habsburgilor, cu grădini magnifice și o grădină zoologică.", en: "The former summer residence of the Habsburgs, with magnificent gardens and a zoo." },
    facts: { de: ["Der Tiergarten ist der älteste bestehende Zoo der Welt.", "UNESCO-Welterbe."], hu: ["Az állatkert a világ legrégebbi működő állatkertje.", "UNESCO világörökség."], ro: ["Grădina zoologică este cea mai veche grădină zoologică funcțională din lume.", "Patrimoniu UNESCO."], en: ["The zoo is the oldest existing zoo in the world.", "UNESCO World Heritage site."] }
  },
  {
    id: "AT-Hofburg", type: "landmark", parent: "AT-9", coords: [16.3653, 48.2065],
    name: { de: "Hofburg", hu: "Hofburg", ro: "Hofburg", en: "Hofburg Palace" },
    image: "/geo-images/austria/hofburg-palace.webp",
    description: { de: "Der ehemalige kaiserliche Palast im Zentrum von Wien, heute Amtssitz des Bundespräsidenten.", hu: "Az egykori császári palota Bécs központjában, ma a szövetségi elnök hivatalos rezidenciája.", ro: "Fostul palat imperial din centrul Vienei, astăzi reședința oficială a Președintelui Federal.", en: "The former imperial palace in the center of Vienna, today the official residence of the Federal President." },
    facts: { de: ["Beherbergt die Spanische Hofreitschule.", "Umfasst zahlreiche Museen."], hu: ["A Spanyol Lovasiskola otthona.", "Számos múzeumot foglal magába."], ro: ["Găzduiește Școala Spaniolă de Călărie.", "Include numeroase muzee."], en: ["Houses the Spanish Riding School.", "Includes numerous museums."] }
  },
  {
    id: "AT-Stephansdom", type: "landmark", parent: "AT-9", coords: [16.3731, 48.2085],
    name: { de: "Stephansdom", hu: "Szent István-székesegyház", ro: "Catedrala Sfântul Ștefan", en: "St. Stephen's Cathedral" },
    image: "/geo-images/austria/st-stephen-s-cathedral.webp",
    description: { de: "Das Wahrzeichen Wiens und das bedeutendste gotische Bauwerk in Österreich.", hu: "Bécs jelképe és Ausztria legfontosabb gótikus épülete.", ro: "Simbolul Vienei și cea mai importantă clădire gotică din Austria.", en: "The symbol of Vienna and the most important Gothic building in Austria." },
    facts: { de: ["Hat ein markantes Ziegeldach.", "Der Südturm ist 136 Meter hoch."], hu: ["Jellegzetes cseréptetővel rendelkezik.", "A déli torony 136 méter magas."], ro: ["Are un acoperiș distinctiv din țiglă.", "Turnul de sud are 136 de metri înălțime."], en: ["Has a distinctive tiled roof.", "The South Tower is 136 meters high."] }
  },
  {
    id: "AT-Mozarthaus", type: "landmark", parent: "AT-5", coords: [13.0444, 47.8005],
    name: { de: "Mozarts Geburtshaus", hu: "Mozart szülőháza", ro: "Casa natală a lui Mozart", en: "Mozart's Birthplace" },
    image: "/geo-images/austria/mozart-s-birthplace.webp",
    description: { de: "Das Haus in Salzburg, in dem Wolfgang Amadeus Mozart 1756 geboren wurde.", hu: "A salzburgi ház, ahol Wolfgang Amadeus Mozart 1756-ban született.", ro: "Casa din Salzburg unde Wolfgang Amadeus Mozart s-a născut în 1756.", en: "The house in Salzburg where Wolfgang Amadeus Mozart was born in 1756." },
    facts: { de: ["Ist heute ein beliebtes Museum.", "Zeigt originale Instrumente."], hu: ["Ma népszerű múzeum.", "Eredeti hangszereket mutat be."], ro: ["Este astăzi un muzeu popular.", "Expune instrumente originale."], en: ["Is now a popular museum.", "Displays original instruments."] }
  },
  {
    id: "AT-Mirabell", type: "landmark", parent: "AT-5", coords: [13.0416, 47.8055],
    name: { de: "Schloss Mirabell", hu: "Mirabell-kastély", ro: "Palatul Mirabell", en: "Mirabell Palace" },
    image: "/geo-images/austria/mirabell-palace.webp",
    description: { de: "Ein historisches Schloss in Salzburg mit weltberühmten Gärten.", hu: "Történelmi kastély Salzburgban, világhírű kertekkel.", ro: "Un palat istoric din Salzburg, cu grădini de renume mondial.", en: "A historic palace in Salzburg with world-famous gardens." },
    facts: { de: ["Beliebter Ort für Hochzeiten.", "Filmkulisse für 'The Sound of Music'."], hu: ["Népszerű esküvői helyszín.", "A 'A muzsika hangja' forgatási helyszíne."], ro: ["Loc popular pentru nunți.", "Loc de filmare pentru 'Sunetul Muzicii'."], en: ["Popular venue for weddings.", "Filming location for 'The Sound of Music'."] }
  },
  {
    id: "AT-Grossglockner", type: "mountain", parent: "AT", coords: [12.6936, 47.0742],
    name: { de: "Großglockner", hu: "Großglockner", ro: "Grossglockner", en: "Grossglockner" },
    image: "/geo-images/austria/grossglockner.webp",
    description: { de: "Mit 3.798 Metern der höchste Berg Österreichs.", hu: "3798 méterével Ausztria legmagasabb hegye.", ro: "La 3.798 metri, cel mai înalt munte din Austria.", en: "At 3,798 meters, the highest mountain in Austria." },
    facts: { de: ["Liegt an der Grenze zwischen Kärnten und Tirol.", "Die Pasterze ist sein größter Gletscher."], hu: ["Karintia és Tirol határán fekszik.", "A Pasterze a legnagyobb gleccsere."], ro: ["Situat la granița dintre Carintia și Tirol.", "Pasterze este cel mai mare ghețar al său."], en: ["Located on the border between Carinthia and Tyrol.", "The Pasterze is its largest glacier."] }
  },
  {
    id: "AT-Zillertal", type: "landmark", parent: "AT-7", coords: [11.8797, 47.2344],
    name: { de: "Zillertal", hu: "Zillertal", ro: "Valea Ziller", en: "Zillertal" },
    image: "/geo-images/austria/zillertal.webp",
    description: { de: "Ein weites, sonniges Tal in Tirol, bekannt für Tourismus und Wintersport.", hu: "Széles, napos völgy Tirolban, amely turizmusáról és téli sportjairól ismert.", ro: "O vale largă și însorită din Tirol, cunoscută pentru turism și sporturi de iarnă.", en: "A wide, sunny valley in Tyrol, known for tourism and winter sports." },
    facts: { de: ["Eines der bekanntesten Skigebiete Österreichs.", "Zillertaler Trachten sind berühmt."], hu: ["Ausztria egyik legismertebb síterepe.", "A Zillertal-i népviselet híres."], ro: ["Una dintre cele mai faimoase zone de schi din Austria.", "Portul tradițional din Zillertal este renumit."], en: ["One of the most famous ski areas in Austria.", "Zillertal traditional dress is famous."] }
  },
  {
    id: "AT-Kitzbuehel", type: "city", parent: "AT-7", coords: [12.3925, 47.4461],
    name: { de: "Kitzbühel", hu: "Kitzbühel", ro: "Kitzbühel", en: "Kitzbühel" },
    image: "/geo-images/austria/kitzb-hel.webp",
    description: { de: "Eine kleine Alpenstadt in Tirol, berühmt als mondäner Wintersportort.", hu: "Egy kis alpesi város Tirolban, amely divatos téli sportközpontként ismert.", ro: "Un mic oraș alpin din Tirol, faimos ca stațiune elegantă de sporturi de iarnă.", en: "A small Alpine town in Tyrol, famous as a fashionable winter sports resort." },
    facts: { de: ["Heimat des Hahnenkamm-Rennens.", "Beliebt beim internationalen Jetset."], hu: ["A Hahnenkamm-verseny otthona.", "Népszerű a nemzetközi elit körében."], ro: ["Casa cursei Hahnenkamm.", "Populară printre elita internațională."], en: ["Home of the Hahnenkamm Race.", "Popular with the international jet set."] }
  },
  {
    id: "AT-Wachau", type: "region", parent: "AT-3", coords: [15.4206, 48.3883],
    name: { de: "Wachau", hu: "Wachau", ro: "Valea Wachau", en: "Wachau Valley" },
    image: "/geo-images/austria/wachau-valley.webp",
    description: { de: "Ein malerisches Donautal, bekannt für seine Weinberge und historischen Ruinen.", hu: "Festői Duna-völgy, szőlőültetvényeiről és történelmi romjairól ismert.", ro: "O vale pitorească a Dunării, cunoscută pentru podgoriile și ruinele sale istorice.", en: "A picturesque Danube valley, known for its vineyards and historic ruins." },
    facts: { de: ["UNESCO-Welterbe.", "Berühmt für Marillen (Aprikosen) und Weißwein."], hu: ["UNESCO világörökség.", "Híres a sárgabarackjáról (Marillen) és fehérboráról."], ro: ["Patrimoniu UNESCO.", "Renumită pentru caise (Marillen) și vinul alb."], en: ["UNESCO World Heritage site.", "Famous for apricots (Marillen) and white wine."] }
  },
  {
    id: "AT-Hallstatt", type: "city", parent: "AT-4", coords: [13.6493, 47.5622],
    name: { de: "Hallstatt", hu: "Hallstatt", ro: "Hallstatt", en: "Hallstatt" },
    image: "/geo-images/austria/hallstatt.webp",
    description: { de: "Ein malerisches Dorf am Hallstätter See im Salzkammergut.", hu: "Festői falu a Hallstatti-tó partján, a Salzkammergut régióban.", ro: "Un sat pitoresc pe lacul Hallstatt din regiunea Salzkammergut.", en: "A picturesque village on Lake Hallstatt in the Salzkammergut region." },
    facts: { de: ["Hat eines der ältesten Salzbergwerke der Welt.", "Wurde in China sogar nachgebaut."], hu: ["A világ egyik legrégebbi sóbányájával rendelkezik.", "Kínában még másolatot is építettek róla."], ro: ["Are una dintre cele mai vechi mine de sare din lume.", "A fost chiar reprodus în China."], en: ["Has one of the oldest salt mines in the world.", "Was even replicated in China."] }
  },
  {
    id: "AT-Wolfgangsee", type: "lake", parent: "AT-5", coords: [13.435, 47.7472],
    name: { de: "Wolfgangsee", hu: "Wolfgangsee", ro: "Lacul Wolfgang", en: "Lake Wolfgang" },
    image: "/geo-images/austria/lake-wolfgang.webp",
    description: { de: "Ein malerischer See im Salzkammergut, der sich über Salzburg und Oberösterreich erstreckt.", hu: "Festői tó a Salzkammergutban, amely Salzburg és Felső-Ausztria között terül el.", ro: "Un lac pitoresc în Salzkammergut, care se întinde pe teritoriul Salzburgului și al Austriei Superioare.", en: "A picturesque lake in the Salzkammergut region, stretching across Salzburg and Upper Austria." },
    facts: { de: ["St. Wolfgang ist der bekannteste Ort am See.", "Beliebt für Wassersport und Schifffahrt."], hu: ["St. Wolfgang a legismertebb település a tónál.", "Népszerű vízisport- és hajózási célpont."], ro: ["St. Wolfgang este cel mai faimos oraș de pe lac.", "Popular pentru sporturi nautice și navigație."], en: ["St. Wolfgang is the most famous town on the lake.", "Popular for water sports and boating."] }
  },
  {
    id: "AT-NeusiedlerSee", type: "lake", parent: "AT-1", coords: [16.7725, 47.8183],
    name: { de: "Neusiedler See", hu: "Fertő tó", ro: "Lacul Neusiedl", en: "Lake Neusiedl" },
    image: "/geo-images/austria/lake-neusiedl.webp",
    description: { de: "Ein Steppensee an der Grenze zu Ungarn, beliebt für Wassersport und Vogelbeobachtung.", hu: "Sztyepptó a magyar határon, amely vízi sportokról és madármegfigyelésről ismert.", ro: "Un lac de stepă la granița cu Ungaria, popular pentru sporturi nautice și observarea păsărilor.", en: "A steppe lake on the border with Hungary, popular for water sports and bird watching." },
    facts: { de: ["Ist sehr flach.", "UNESCO-Welterbe zusammen mit der Umgebung."], hu: ["Nagyon sekély vizű.", "Környékével együtt UNESCO világörökség."], ro: ["Este foarte puțin adânc.", "Patrimoniu UNESCO împreună cu împrejurimile sale."], en: ["It is very shallow.", "UNESCO World Heritage site together with its surroundings."] }
  },
  {
    id: "AT-Melk", type: "landmark", parent: "AT-3", coords: [15.3314, 48.2289],
    name: { de: "Stift Melk", hu: "Melki apátság", ro: "Abația Melk", en: "Melk Abbey" },
    image: "/geo-images/austria/melk-abbey.webp",
    description: { de: "Ein prächtiges Benediktinerkloster auf einem Felsen über der Donau.", hu: "Pompás bencés apátság egy Duna fölötti sziklán.", ro: "O magnifică abație benedictină pe o stâncă deasupra Dunării.", en: "A magnificent Benedictine abbey on a rock overlooking the Danube." },
    facts: { de: ["Ein Meisterwerk der Barockarchitektur.", "Tor zur Wachau."], hu: ["A barokk építészet remekműve.", "A Wachau kapuja."], ro: ["O capodoperă a arhitecturii baroce.", "Poarta către Wachau."], en: ["A masterpiece of Baroque architecture.", "Gateway to the Wachau Valley."] }
  },
  {
    id: "AT-Heiligenblut", type: "city", parent: "AT-2", coords: [12.8394, 47.04],
    name: { de: "Heiligenblut", hu: "Heiligenblut", ro: "Heiligenblut", en: "Heiligenblut" },
    image: "/geo-images/austria/heiligenblut.webp",
    description: { de: "Ein idyllisches Alpendorf am Fuß des Großglockners.", hu: "Idilli alpesi falu a Großglockner lábánál.", ro: "Un sat alpin idilic la poalele muntelui Grossglockner.", en: "An idyllic Alpine village at the foot of the Grossglockner." },
    facts: { de: ["Die gotische Kirche mit dem Bergpanorama ist ein berühmtes Fotomotiv.", "Ausgangspunkt für die Hochalpenstraße."], hu: ["A gótikus templom a hegyi panorámával híres fotótéma.", "A Hochalpenstraße kiindulópontja."], ro: ["Biserica gotică cu panorama montană este un motiv fotografic celebru.", "Punct de plecare pentru drumul alpin."], en: ["The Gothic church with the mountain panorama is a famous photo motif.", "Starting point for the High Alpine Road."] }
  },
  {
    id: "AT-Semmering", type: "landmark", parent: "AT-3", coords: [15.83, 47.6433],
    name: { de: "Semmeringbahn", hu: "Semmeringi vasút", ro: "Calea ferată Semmering", en: "Semmering Railway" },
    image: "/geo-images/austria/semmering-railway.webp",
    description: { de: "Die erste normalspurige Gebirgsbahn Europas.", hu: "Európa első normál nyomtávú hegyi vasútja.", ro: "Prima cale ferată montană cu ecartament normal din Europa.", en: "Europe's first standard-gauge mountain railway." },
    facts: { de: ["UNESCO-Welterbe.", "Beeindruckende Viadukte und Tunnel."], hu: ["UNESCO világörökség.", "Lenyűgöző viaduktok és alagutak."], ro: ["Patrimoniu UNESCO.", "Viaducte și tuneluri impresionante."], en: ["UNESCO World Heritage site.", "Impressive viaducts and tunnels."] }
  },
  {
    id: "AT-Grossalpenstrasse", type: "landmark", parent: "AT-5", coords: [12.8122, 47.1128],
    name: { de: "Großglockner Hochalpenstraße", hu: "Großglockner Alpesi Út", ro: "Drumul alpin Grossglockner", en: "Grossglockner High Alpine Road" },
    image: "/geo-images/austria/grossglockner-high-alpine-road.webp",
    description: { de: "Eine spektakuläre Panoramastraße, die mitten ins Herz des Nationalparks Hohe Tauern führt.", hu: "Látványos panorámaút, amely egyenesen a Hohe Tauern Nemzeti Park szívébe vezet.", ro: "Un drum panoramic spectaculos care duce direct în inima Parcului Național Hohe Tauern.", en: "A spectacular panoramic road leading right into the heart of the Hohe Tauern National Park." },
    facts: { de: ["Höchster befestigter Pass in Österreich.", "Bietet atemberaubende Ausblicke."], hu: ["Ausztria legmagasabb burkolt hágója.", "Lélegzetelállító kilátást nyújt."], ro: ["Cel mai înalt pas pavat din Austria.", "Oferă priveliști uluitoare."], en: ["Highest paved pass in Austria.", "Offers breathtaking views."] }
  }
];

export const austriaAllPoi: POI[] = [
  austriaCountry,
  ...austriaRegions,
  ...austriaCities
];