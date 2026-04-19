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
  },
  {
    id: "AT-Hohensalzburg", type: "landmark", parent: "AT-5", coords: [13.0475, 47.7949],
    name: { de: "Festung Hohensalzburg", hu: "Hohensalzburg vára", ro: "Cetatea Hohensalzburg", en: "Hohensalzburg Fortress" },
    image: "/geo-images/austria/hohensalzburg.webp",
    description: { de: "Eine der größten vollständig erhaltenen Burgen Mitteleuropas, hoch über Salzburg.", hu: "Közép-Európa egyik legnagyobb, teljesen épségben maradt vára Salzburg felett.", ro: "Una dintre cele mai mari cetăți complet conservate din Europa Centrală, deasupra Salzburgului.", en: "One of the largest fully preserved castles in Central Europe, high above Salzburg." },
    facts: { de: ["Bau begann im Jahr 1077.", "Nie von fremden Truppen eingenommen."], hu: ["Építése 1077-ben kezdődött.", "Soha nem foglalták el idegen csapatok."], ro: ["Construcția a început în 1077.", "Nu a fost niciodată cucerită de trupe străine."], en: ["Construction began in 1077.", "Never captured by foreign troops."] }
  },
  {
    id: "AT-Belvedere", type: "landmark", parent: "AT-9", coords: [16.3808, 48.1915],
    name: { de: "Schloss Belvedere", hu: "Belvedere kastély", ro: "Palatul Belvedere", en: "Belvedere Palace" },
    image: "/geo-images/austria/belvedere.webp",
    description: { de: "Ein barockes Schlossensemble in Wien, das bedeutende Kunstsammlungen beherbergt.", hu: "Barokk kastélyegyüttes Bécsben, amely jelentős művészeti gyűjteményeknek ad otthont.", ro: "Un ansamblu de palate baroce din Viena, care găzduiește colecții importante de artă.", en: "A Baroque palace complex in Vienna, housing important art collections." },
    facts: { de: ["Beherbergt Klimts berühmtes Gemälde 'Der Kuss'.", "Einst Sommerresidenz von Prinz Eugen von Savoyen."], hu: ["Itt látható Klimt híres 'A csók' című festménye.", "Egykor Savoyai Jenő herceg nyári rezidenciája volt."], ro: ["Găzduiește celebra pictură 'Sărutul' de Klimt.", "Fostă reședință de vară a prințului Eugen de Savoia."], en: ["Houses Klimt's famous painting 'The Kiss'.", "Once the summer residence of Prince Eugene of Savoy."] }
  },
  {
    id: "AT-Hohenwerfen", type: "landmark", parent: "AT-5", coords: [13.1883, 47.4831],
    name: { de: "Burg Hohenwerfen", hu: "Hohenwerfen vára", ro: "Castelul Hohenwerfen", en: "Hohenwerfen Castle" },
    image: "/geo-images/austria/hohenwerfen.webp",
    description: { de: "Eine beeindruckende mittelalterliche Felsenburg im Salzachtal.", hu: "Lenyűgöző középkori sziklavár a Salzach völgyében.", ro: "Un impresionant castel medieval pe stâncă în valea Salzach.", en: "An impressive medieval rock castle in the Salzach valley." },
    facts: { de: ["Bekannt für die historische Greifvogelstation.", "Diente als Kulisse für viele Filme."], hu: ["Híres a történelmi ragadozómadár-központjáról.", "Számos film forgatási helyszínéül szolgált."], ro: ["Cunoscut pentru centrul istoric de șoimărit.", "A servit drept decor pentru multe filme."], en: ["Known for the historic falconry center.", "Served as a backdrop for many films."] }
  },
  {
    id: "AT-Eggenberg", type: "landmark", parent: "AT-6", coords: [15.3908, 47.0736],
    name: { de: "Schloss Eggenberg", hu: "Eggenberg-kastély", ro: "Castelul Eggenberg", en: "Eggenberg Palace" },
    image: "/geo-images/austria/eggenberg.webp",
    description: { de: "Das bedeutendste Schloss der Steiermark, bekannt für seine astronomische Symbolik.", hu: "Stájerország legjelentősebb kastélya, amely csillagászati szimbolikájáról ismert.", ro: "Cel mai important castel din Stiria, cunoscut pentru simbolistica sa astronomică.", en: "The most significant palace in Styria, known for its astronomical symbolism." },
    facts: { de: ["Hat 365 Außenfenster (Tage im Jahr).", "UNESCO-Welterbe seit 2010."], hu: ["365 külső ablaka van (az év napjai).", "2010 óta UNESCO világörökség."], ro: ["Are 365 de ferestre exterioare (zilele anului).", "Patrimoniu UNESCO din 2010."], en: ["Has 365 exterior windows (days in a year).", "UNESCO World Heritage site since 2010."] }
  },
  {
    id: "AT-Hochosterwitz", type: "landmark", parent: "AT-2", coords: [14.4522, 46.7567],
    name: { de: "Burg Hochosterwitz", hu: "Hochosterwitz vára", ro: "Castelul Hochosterwitz", en: "Hochosterwitz Castle" },
    image: "/geo-images/austria/hochosterwitz.webp",
    description: { de: "Eine der spektakulärsten Burgen Österreichs, auf einem 160 Meter hohen Dolomitfelsen.", hu: "Ausztria egyik leglátványosabb vára egy 160 méter magas dolomitsziklán.", ro: "Unul dintre cele mai spectaculoase castele din Austria, pe o stâncă de dolomită de 160 de metri.", en: "One of Austria's most spectacular castles, on a 160-meter high dolomite rock." },
    facts: { de: ["Hat 14 befestigte Burgtore.", "Gilt als Vorbild für Disneys Aschenputtel-Schloss."], hu: ["14 megerősített várkapuja van.", "Úgy tartják, ez volt a Disney Hamupipőke-kastélyának mintája."], ro: ["Are 14 porți fortificate.", "Considerat modelul pentru castelul Cenușăreesei al lui Disney."], en: ["Has 14 fortified castle gates.", "Considered the model for Disney's Cinderella Castle."] }
  },
  {
    id: "AT-Ambras", type: "landmark", parent: "AT-7", coords: [11.4319, 47.2561],
    name: { de: "Schloss Ambras", hu: "Ambras kastély", ro: "Castelul Ambras", en: "Ambras Castle" },
    image: "/geo-images/austria/ambras.webp",
    description: { de: "Ein Renaissanceschloss in Innsbruck mit bedeutenden Kunstsammlungen.", hu: "Reneszánsz kastély Innsbruckban, jelentős művészeti gyűjteményekkel.", ro: "Un castel renascentist în Innsbruck cu colecții de artă importante.", en: "A Renaissance castle in Innsbruck with significant art collections." },
    facts: { de: ["Beherbergt eine berühmte Wunderkammer.", "Gilt als das älteste Museum der Welt."], hu: ["Híres 'csodakamrával' rendelkezik.", "A világ legrégebbi múzeumaként tartják számon."], ro: ["Găzduiește o faimoasă cameră de curiozități.", "Considerat cel mai vechi muzeu din lume."], en: ["Houses a famous cabinet of curiosities.", "Considered the oldest museum in the world."] }
  },
  {
    id: "AT-Krimml", type: "landmark", parent: "AT-5", coords: [12.1694, 47.2100],
    name: { de: "Krimmler Wasserfälle", hu: "Krimmli vízesés", ro: "Cascada Krimml", en: "Krimml Waterfalls" },
    image: "/geo-images/austria/krimml.webp",
    description: { de: "Mit einer Fallhöhe von 380 Metern die höchsten Wasserfälle Österreichs.", hu: "380 méteres magasságával Ausztria legmagasabb vízesése.", ro: "Cu o înălțime de 380 de metri, cea mai înaltă cascadă din Austria.", en: "With a drop of 380 meters, the highest waterfalls in Austria." },
    facts: { de: ["Fünftgrößte Wasserfälle der Welt.", "Die Gischt soll heilende Wirkung haben."], hu: ["A világ ötödik legmagasabb vízesése.", "A vízpárának gyógyító hatást tulajdonítanak."], ro: ["A cincea cea mai înaltă cascadă din lume.", "Se spune că vaporii de apă au efecte curative."], en: ["Fifth highest waterfalls in the world.", "The spray is said to have healing properties."] }
  },
  {
    id: "AT-HallstaetterSee", type: "lake", parent: "AT-4", coords: [13.6631, 47.5786],
    name: { de: "Hallstätter See", hu: "Hallstatti-tó", ro: "Lacul Hallstätter", en: "Lake Hallstatt" },
    image: "/geo-images/austria/hallstatt.webp",
    description: { de: "Ein Gebirgssee im Salzkammergut, an dessen Ufer der berühmte Ort Hallstatt liegt.", hu: "Hegyi tó a Salzkammergut régióban, partján a híres Hallstatt városával.", ro: "Un lac montan în Salzkammergut, pe malul căruia se află celebrul oraș Hallstatt.", en: "A mountain lake in the Salzkammergut region, with the famous town of Hallstatt on its shore." },
    facts: { de: ["Bis zu 125 Meter tief.", "Ein beliebtes Ziel für Taucher."], hu: ["Akár 125 méter mély is lehet.", "A búvárok kedvelt célpontja."], ro: ["Până la 125 de metri adâncime.", "O destinație populară pentru scafandri."], en: ["Up to 125 meters deep.", "A popular destination for divers."] }
  },
  {
    id: "AT-Dachstein", type: "mountain", parent: "AT-6", coords: [13.6108, 47.4675],
    name: { de: "Dachstein", hu: "Dachstein", ro: "Dachstein", en: "Dachstein" },
    image: "/geo-images/austria/dachstein.webp",
    description: { de: "Ein markantes Bergmassiv und beliebtes Ziel für Alpinisten und Skifahrer.", hu: "Jellegzetes hegymasszívum, az alpinisták és síelők kedvelt célpontja.", ro: "Un masiv muntos distinctiv și o destinație populară pentru alpiniști și schiori.", en: "A prominent mountain massif and a popular destination for alpinists and skiers." },
    facts: { de: ["Besitzt den 'Skywalk', eine Aussichtsplattform mit Glasboden.", "Beherbergt einen Eispalast im Gletscher."], hu: ["Itt található a 'Skywalk' üvegpadlós kilátó.", "A gleccserben egy jégpalota látogatható."], ro: ["Are un 'Skywalk', o platformă de observație cu podea de sticlă.", "Găzduiește un palat de gheață în ghețar."], en: ["Features the 'Skywalk', a glass-bottomed observation deck.", "Houses an ice palace inside the glacier."] }
  },
  {
    id: "AT-HoheTauern", type: "region", parent: "AT", coords: [12.6667, 47.1167],
    name: { de: "Nationalpark Hohe Tauern", hu: "Hohe Tauern Nemzeti Park", ro: "Parcul Național Hohe Tauern", en: "Hohe Tauern National Park" },
    image: "/geo-images/austria/hohe-tauern.webp",
    description: { de: "Das größte Naturschutzgebiet in den Alpen, das sich über drei Bundesländer erstreckt.", hu: "Az Alpok legnagyobb természetvédelmi területe, amely három tartományon ível át.", ro: "Cea mai mare rezervație naturală din Alpi, care se întinde pe trei state.", en: "The largest nature reserve in the Alps, spanning across three states." },
    facts: { de: ["Beherbergt über 300 Dreitausender.", "Größter Nationalpark Mitteleuropas."], hu: ["Több mint 300 háromezer méter feletti csúcsnak ad otthont.", "Közép-Európa legnagyobb nemzeti parkja."], ro: ["Găzduiește peste 300 de vârfuri de peste 3000 de metri.", "Cel mai mare parc național din Europa Centrală."], en: ["Home to over 300 peaks above 3000 meters.", "Largest national park in Central Europe."] }
  },
  {
    id: "AT-Staatsoper", type: "landmark", parent: "AT-9", coords: [16.3691, 48.2031],
    name: { de: "Wiener Staatsoper", hu: "Bécsi Állami Operaház", ro: "Opera de Stat din Viena", en: "Vienna State Opera" },
    image: "/geo-images/austria/vienna.webp",
    description: { de: "Eines der bedeutendsten Opernhäuser der Welt, bekannt für seine erstklassigen Aufführungen.", hu: "A világ egyik legjelentősebb operaháza, amely világszínvonalú előadásairól ismert.", ro: "Una dintre cele mai importante opere din lume, cunoscută pentru spectacolele sale de primă clasă.", en: "One of the most important opera houses in the world, known for its world-class performances." },
    facts: { de: ["Austragungsort des Wiener Opernballs.", "Wurde 1869 mit Mozarts 'Don Giovanni' eröffnet."], hu: ["A Bécsi Operabál helyszíne.", "1869-ben Mozart 'Don Giovanni'-jával nyílt meg."], ro: ["Gazda Balului Operei din Viena.", "Inaugurată în 1869 cu 'Don Giovanni' de Mozart."], en: ["Host of the Vienna Opera Ball.", "Opened in 1869 with Mozart's 'Don Giovanni'."] }
  },
  {
    id: "AT-Albertina", type: "landmark", parent: "AT-9", coords: [16.3683, 48.2047],
    name: { de: "Albertina", hu: "Albertina", ro: "Albertina", en: "Albertina" },
    image: "/geo-images/austria/albertina.webp",
    description: { de: "Ein bedeutendes Kunstmuseum in Wien, das eine der größten grafischen Sammlungen besitzt.", hu: "Jelentős bécsi művészeti múzeum, amely a világ egyik legnagyobb grafikai gyűjteményével rendelkezik.", ro: "Un muzeu de artă important din Viena, care deține una dintre cele mai mari colecții grafice.", en: "A major art museum in Vienna, holding one of the world's largest graphic collections." },
    facts: { de: ["Umfasst Werke von Dürer bis Picasso.", "Befindet sich in einem ehemaligen habsburgischen Palais."], hu: ["Dürertől Picassóig számos művész alkotásait őrzi.", "Egy egykori Habsburg-palotában található."], ro: ["Include lucrări de la Dürer la Picasso.", "Se află într-un fost palat habsburgic."], en: ["Includes works from Dürer to Picasso.", "Located in a former Habsburg palace."] }
  },
  {
    id: "AT-KHM", type: "landmark", parent: "AT-9", coords: [16.3617, 48.2036],
    name: { de: "Kunsthistorisches Museum", hu: "Szépművészeti Múzeum", ro: "Muzeul de Istorie a Artei", en: "Kunsthistorisches Museum" },
    image: "/geo-images/austria/khm.webp",
    description: { de: "Eines der bedeutendsten Kunstmuseen der Welt, erbaut für die kaiserlichen Sammlungen.", hu: "A világ egyik legjelentősebb művészeti múzeuma, a császári gyűjtemények számára épült.", ro: "Unul dintre cele mai importante muzee de artă din lume, construit pentru colecțiile imperiale.", en: "One of the world's foremost art museums, built to house the imperial collections." },
    facts: { de: ["Besitzt die weltweit wichtigste Bruegel-Sammlung.", "Gegenstück zum Naturhistorischen Museum."], hu: ["Itt található a világ legfontosabb Bruegel-gyűjteménye.", "A Természettudományi Múzeum párja."], ro: ["Deține cea mai importantă colecție Bruegel din lume.", "Perechea Muzeului de Istorie Naturală."], en: ["Houses the world's most important Bruegel collection.", "Counterpart to the Natural History Museum."] }
  },
  {
    id: "AT-Prater", type: "landmark", parent: "AT-9", coords: [16.3958, 48.2167],
    name: { de: "Wiener Prater", hu: "Práter", ro: "Prater", en: "Prater" },
    image: "/geo-images/austria/prater.webp",
    description: { de: "Ein großer öffentlicher Park in Wien, bekannt für seinen traditionsreichen Vergnügungspark.", hu: "Hatalmas nyilvános park Bécsben, amely nagy múltú vidámparkjáról ismert.", ro: "Un parc public mare în Viena, cunoscut pentru parcul său de distracții tradițional.", en: "A large public park in Vienna, famous for its traditional amusement park." },
    facts: { de: ["Das Riesenrad ist eines der Wahrzeichen Wiens.", "War einst kaiserliches Jagdrevier."], hu: ["Az Óriáskerék (Riesenrad) Bécs egyik jelképe.", "Egykor császári vadászterület volt."], ro: ["Roata Mare este unul dintre simbolurile Vienei.", "A fost odată un teren de vânătoare imperial."], en: ["The Ferris Wheel (Riesenrad) is a symbol of Vienna.", "Was once an imperial hunting ground."] }
  },
  {
    id: "AT-SchoenbrunnZoo", type: "landmark", parent: "AT-9", coords: [16.3028, 48.1822],
    name: { de: "Tiergarten Schönbrunn", hu: "Schönbrunni Állatkert", ro: "Grădina Zoologică Schönbrunn", en: "Schönbrunn Zoo" },
    image: "/geo-images/austria/schoenbrunn-zoo.webp",
    description: { de: "Der älteste Zoo der Welt, gelegen im Park von Schloss Schönbrunn.", hu: "A világ legrégebbi állatkertje, amely a Schönbrunni kastély parkjában található.", ro: "Cea mai veche grădină zoologică din lume, situată în parcul Palatului Schönbrunn.", en: "The world's oldest zoo, located in the park of Schönbrunn Palace." },
    facts: { de: ["Mehrfach als bester Zoo Europas ausgezeichnet.", "Beheimatet Große Pandas."], hu: ["Többször választották Európa legjobb állatkertjének.", "Óriáspandák is élnek itt."], ro: ["Premiată de mai multe ori ca cea mai bună grădină zoologică din Europa.", "Găzduiește urși panda giganți."], en: ["Voted Europe's best zoo multiple times.", "Home to giant pandas."] }
  },
  {
    id: "AT-Hundertwasser", type: "landmark", parent: "AT-9", coords: [16.3941, 48.2075],
    name: { de: "Hundertwasserhaus", hu: "Hundertwasser-ház", ro: "Hundertwasserhaus", en: "Hundertwasser House" },
    image: "/geo-images/austria/hundertwasser.webp",
    description: { de: "Ein farbenfrohes Wohnhaus in Wien, entworfen vom Künstler Friedensreich Hundertwasser.", hu: "Színes lakóház Bécsben, amelyet Friedensreich Hundertwasser művész tervezett.", ro: "O casă de locuit colorată din Viena, proiectată de artistul Friedensreich Hundertwasser.", en: "A colorful apartment house in Vienna, designed by artist Friedensreich Hundertwasser." },
    facts: { de: ["Hat keine geraden Linien.", "Bäume wachsen aus den Fenstern."], hu: ["Nincsenek benne egyenes vonalak.", "Fák nőnek ki az ablakaiból."], ro: ["Nu are linii drepte.", "Copaci cresc din ferestre."], en: ["Has no straight lines.", "Trees grow out of the windows."] }
  },
  {
    id: "AT-Klosterneuburg", type: "landmark", parent: "AT-3", coords: [16.3267, 48.3075],
    name: { de: "Stift Klosterneuburg", hu: "Klosterneuburgi apátság", ro: "Abația Klosterneuburg", en: "Klosterneuburg Monastery" },
    image: "/geo-images/austria/klosterneuburg.webp",
    description: { de: "Ein prächtiges Stift vor den Toren Wiens, bekannt für seine Kunstschätze und Weinbau.", hu: "Pompás apátság Bécs kapujában, amely műkincseiről és borászatáról ismert.", ro: "O magnifică abație la porțile Vienei, cunoscută pentru comorile sale de artă și viticultură.", en: "A magnificent monastery at the gates of Vienna, known for its art treasures and viticulture." },
    facts: { de: ["Beherbergt den Verduner Altar.", "Besitzt eines der ältesten Weingüter Österreichs."], hu: ["Itt található a Verduni oltár.", "Ausztria egyik legrégebbi borászatával rendelkezik."], ro: ["Găzduiește Altarul de la Verdun.", "Deține una dintre cele mai vechi podgorii din Austria."], en: ["Houses the Verdun Altar.", "Owns one of Austria's oldest wineries."] }
  },
  {
    id: "AT-Achensee", type: "lake", parent: "AT-7", coords: [11.7083, 47.4333],
    name: { de: "Achensee", hu: "Achensee", ro: "Lacul Achen", en: "Achensee" },
    image: "/geo-images/austria/achensee.webp",
    description: { de: "Der größte See Tirols, oft als das 'Tiroler Meer' bezeichnet.", hu: "Tirol legnagyobb tava, amelyet gyakran 'Tiroli tengernek' is neveznek.", ro: "Cel mai mare lac din Tirol, adesea numit 'Marea tiroleză'.", en: "Tyrol's largest lake, often referred to as the 'Tyrolean Sea'." },
    facts: { de: ["Bekannt für seine hervorragende Wasserqualität.", "Beliebt bei Seglern und Surfern."], hu: ["Kiváló vízminőségéről ismert.", "Vitorlázók és szörfösök kedvelt helye."], ro: ["Cunoscut pentru calitatea excelentă a apei.", "Popular printre navigatori și surferi."], en: ["Known for its excellent water quality.", "Popular with sailors and surfers."] }
  },
  {
    id: "AT-Pyramidenkogel", type: "landmark", parent: "AT-2", coords: [14.1453, 46.6092],
    name: { de: "Pyramidenkogel", hu: "Pyramidenkogel", ro: "Pyramidenkogel", en: "Pyramidenkogel" },
    image: "/geo-images/austria/pyramidenkogel.webp",
    description: { de: "Ein Aussichtsturm in Kärnten mit spektakulärem Blick über den Wörthersee.", hu: "Kilátótorony Karintiában, ahonnan látványos kilátás nyílik a Wörthi-tóra.", ro: "Un turn de observație în Carintia cu o vedere spectaculoasă asupra lacului Wörthersee.", en: "An observation tower in Carinthia with spectacular views over Lake Wörthersee." },
    facts: { de: ["Höchster Holzaussichtsturm der Welt.", "Besitzt eine 120 Meter lange Tunnelrutsche."], hu: ["A világ legmagasabb fából készült kilátótornya.", "Itt található egy 120 méter hosszú csúszda."], ro: ["Cel mai înalt turn de observație din lemn din lume.", "Are un tobogan tip tunel de 120 de metri lungime."], en: ["World's tallest wooden observation tower.", "Features a 120-meter long tunnel slide."] }
  },
  {
    id: "AT-Arlberg", type: "landmark", parent: "AT-7", coords: [10.2114, 47.1294],
    name: { de: "Arlberg", hu: "Arlberg", ro: "Arlberg", en: "Arlberg" },
    image: "/geo-images/austria/arlberg.webp",
    description: { de: "Ein legendäres Skigebiet und Gebirgspass zwischen Tirol und Vorarlberg.", hu: "Legendás sírégió és hágó Tirol és Vorarlberg között.", ro: "O regiune legendară de schi și pas montan între Tirol și Vorarlberg.", en: "A legendary ski region and mountain pass between Tyrol and Vorarlberg." },
    facts: { de: ["Gilt als 'Wiege des alpinen Skilaufs'.", "Eines der schneereichsten Gebiete Österreichs."], hu: ["Az 'alpesi sízés bölcsőjeként' emlegetik.", "Ausztria egyik leghavasabb területe."], ro: ["Considerat 'leagănul schiului alpin'.", "Una dintre cele mai înzăpezite zone din Austria."], en: ["Considered the 'cradle of Alpine skiing'.", "One of the snowiest regions in Austria."] }
  }
,
  {
    "id": "at-villach",
    "type": "city",
    "parent": "AT-2",
    "coords": [
      13.847,
      46.6103
    ],
    "name": {
      "de": "Villach",
      "hu": "Villach",
      "ro": "Villach",
      "en": "Villach"
    },
    "image": "/geo-images/austria/villach.webp",
    "description": {
      "de": "Villach ist die siebtgrößte Stadt Österreichs und ein wichtiger Verkehrsknotenpunkt in Kärnten. Die Stadt liegt an der Drau und ist von malerischen Bergen und Seen umgeben. Bekannt ist Villach auch für seinen traditionellen Villacher Kirchtag und den Fasching. Die historische Altstadt lädt mit ihren charmanten Gassen zum Verweilen ein.",
      "hu": "Villach Ausztria hetedik legnagyobb városa és Karintia fontos közlekedési csomópontja. A város a Dráva partján fekszik, festői hegyek és tavak ölelésében. Villach híres hagyományos búcsújáról és farsangi karneváljáról. A történelmi óváros hangulatos utcái sétára csábítanak.",
      "ro": "Villach este al șaptelea oraș ca mărime din Austria și un important nod de transport în Carintia. Orașul este situat pe râul Drava și este înconjurat de munți și lacuri pitorești. Villach este cunoscut și pentru tradiționalul său Kirchtag și carnaval. Centrul istoric al orașului te invită să te relaxezi pe străzile sale fermecătoare.",
      "en": "Villach is the seventh largest city in Austria and an important transport hub in Carinthia. The city is located on the Drava river and is surrounded by picturesque mountains and lakes. Villach is also known for its traditional Villach Kirchtag and its carnival. The historic old town with its charming streets invites you to linger."
    },
    "facts": {
      "de": [
        "Villach ist die zweitgrößte Stadt in Kärnten.",
        "Die Stadt liegt an der Einmündung der Gail in die Drau.",
        "Der Villacher Kirchtag ist Österreichs größtes Brauchtumsfest.",
        "Villach hat eine reiche römische und mittelalterliche Geschichte.",
        "Die nahegelegene Burgruine Landskron ist ein beliebtes Ausflugsziel.",
        "Villach ist ein wichtiger Knotenpunkt im Alpen-Adria-Raum."
      ],
      "hu": [
        "Villach Karintia második legnagyobb városa.",
        "A város a Gail és a Dráva folyók összefolyásánál fekszik.",
        "A villachi búcsú (Kirchtag) Ausztria legnagyobb hagyományőrző ünnepe.",
        "Villach gazdag római és középkori történelemmel rendelkezik.",
        "A közeli Landskron várrom kedvelt kirándulóhely.",
        "Villach fontos csomópont az Alpok-Adria régióban."
      ],
      "ro": [
        "Villach este al doilea oraș ca mărime din Carintia.",
        "Orașul este situat la confluența râurilor Gail și Drava.",
        "Kirchtag-ul din Villach este cel mai mare festival folcloric din Austria.",
        "Villach are o bogată istorie romană și medievală.",
        "Ruinele castelului Landskron din apropiere reprezintă o destinație populară.",
        "Villach este un nod important în regiunea Alpi-Adriatica."
      ],
      "en": [
        "Villach is the second largest city in Carinthia.",
        "The city is located at the confluence of the Gail and Drava rivers.",
        "The Villach Kirchtag is Austria's largest traditional festival.",
        "Villach has a rich Roman and medieval history.",
        "The nearby Landskron Castle ruins are a popular destination.",
        "Villach is an important hub in the Alps-Adriatic region."
      ]
    }
  },
  {
    "id": "at-wiener-neustadt",
    "type": "city",
    "parent": "AT-3",
    "coords": [
      16.2444,
      47.8144
    ],
    "name": {
      "de": "Wiener Neustadt",
      "hu": "Bécsújhely",
      "ro": "Wiener Neustadt",
      "en": "Wiener Neustadt"
    },
    "image": "/geo-images/austria/wiener-neustadt.webp",
    "description": {
      "de": "Wiener Neustadt ist eine bedeutende Stadt in Niederösterreich, südlich von Wien gelegen. Sie wurde im späten 12. Jahrhundert gegründet und diente oft als Residenz der Habsburger. Die Theresianische Militärakademie, eine der ältesten Militärakademien der Welt, hat hier ihren Sitz. Die Stadt verbindet heute historische Architektur mit moderner Industrie und Bildung.",
      "hu": "Bécsújhely (Wiener Neustadt) egy jelentős város Alsó-Ausztriában, Bécstől délre. A 12. század végén alapították, és gyakran szolgált a Habsburgok rezidenciájaként. Itt található a Theresianum Katonai Akadémia, a világ egyik legrégebbi katonai akadémiája. A város ma a történelmi építészetet ötvözi a modern iparral és oktatással.",
      "ro": "Wiener Neustadt este un oraș important din Austria Inferioară, situat la sud de Viena. A fost fondat la sfârșitul secolului al XII-lea și a servit adesea ca reședință a Habsburgilor. Academia Militară Tereziană, una dintre cele mai vechi academii militare din lume, este situată aici. Astăzi, orașul combină arhitectura istorică cu industria și educația modernă.",
      "en": "Wiener Neustadt is an important city in Lower Austria, located south of Vienna. It was founded in the late 12th century and often served as a residence for the Habsburgs. The Theresian Military Academy, one of the oldest military academies in the world, is located here. Today, the city combines historic architecture with modern industry and education."
    },
    "facts": {
      "de": [
        "Wiener Neustadt wurde 1194 vom Babenberger-Herzog Leopold V. gegründet.",
        "Ein Teil des Lösegelds für Richard Löwenherz wurde zur Finanzierung der Stadtgründung verwendet.",
        "Kaiser Friedrich III. und Maximilian I. residierten oft in der Stadt.",
        "Die Burg Wiener Neustadt beherbergt die Theresianische Militärakademie.",
        "Die Stadt wurde im Zweiten Weltkrieg durch Bombenangriffe stark zerstört.",
        "Heute ist Wiener Neustadt ein wichtiges Zentrum für Luftfahrt und Technologie."
      ],
      "hu": [
        "Bécsújhelyet 1194-ben alapította V. Lipót Babenberg herceg.",
        "Oroszlánszívű Richárd váltságdíjának egy részét a városalapítás finanszírozására fordították.",
        "III. Frigyes és I. Miksa császárok gyakran tartózkodtak a városban.",
        "A bécsújhelyi vár ad otthont a Theresianum Katonai Akadémiának.",
        "A várost a második világháborúban bombatámadások súlyosan elpusztították.",
        "Ma Bécsújhely a repülés és a technológia fontos központja."
      ],
      "ro": [
        "Wiener Neustadt a fost fondat în 1194 de ducele Babenberg Leopold al V-lea.",
        "O parte din răscumpărarea pentru Richard Inimă de Leu a fost folosită pentru a finanța fondarea orașului.",
        "Împărații Frederic al III-lea și Maximilian I au locuit frecvent în oraș.",
        "Castelul Wiener Neustadt găzduiește Academia Militară Tereziană.",
        "Orașul a fost puternic distrus de bombardamente în al Doilea Război Mondial.",
        "Astăzi, Wiener Neustadt este un centru important pentru aviație și tehnologie."
      ],
      "en": [
        "Wiener Neustadt was founded in 1194 by the Babenberg Duke Leopold V.",
        "Part of the ransom for Richard the Lionheart was used to finance the city's foundation.",
        "Emperors Frederick III and Maximilian I often resided in the city.",
        "Wiener Neustadt Castle houses the Theresian Military Academy.",
        "The city was heavily destroyed by bombing during World War II.",
        "Today, Wiener Neustadt is an important center for aviation and technology."
      ]
    }
  },
  {
    "id": "at-krems",
    "type": "city",
    "parent": "AT-3",
    "coords": [
      15.61,
      48.4088
    ],
    "name": {
      "de": "Krems an der Donau",
      "hu": "Krems an der Donau",
      "ro": "Krems an der Donau",
      "en": "Krems an der Donau"
    },
    "image": "/geo-images/austria/krems.webp",
    "description": {
      "de": "Krems an der Donau ist die fünftgrößte Stadt Niederösterreichs und liegt am östlichen Rand der Wachau. Die Stadt hat eine über 1000-jährige Geschichte und ist für ihren Weinbau und ihre historische Altstadt berühmt. Das Steiner Tor ist das Wahrzeichen von Krems und das einzig erhaltene Stadttor. Die Donau-Universität Krems zieht viele internationale Studierende an.",
      "hu": "Krems an der Donau Alsó-Ausztria ötödik legnagyobb városa, a Wachau keleti szélén fekszik. A város több mint 1000 éves történelemmel rendelkezik, híres borászatáról és történelmi óvárosáról. A Steiner Tor Krems jelképe és az egyetlen fennmaradt városkapu. A Kremsi Duna Egyetem sok nemzetközi hallgatót vonz.",
      "ro": "Krems an der Donau este al cincilea oraș ca mărime din Austria Inferioară și se află la marginea estică a regiunii Wachau. Orașul are o istorie de peste 1000 de ani și este faimos pentru viticultura sa și centrul istoric. Steiner Tor este simbolul orașului Krems și singura poartă a orașului care s-a păstrat. Universitatea Dunării din Krems atrage mulți studenți internaționali.",
      "en": "Krems an der Donau is the fifth largest city in Lower Austria and is located on the eastern edge of the Wachau valley. The city has a history of over 1,000 years and is famous for its viticulture and historic old town. The Steiner Tor is the landmark of Krems and the only surviving city gate. The Danube University Krems attracts many international students."
    },
    "facts": {
      "de": [
        "Krems wurde im Jahr 995 erstmals urkundlich erwähnt.",
        "Die Stadt bildet zusammen mit Stein an der Donau eine Doppelstadt.",
        "Die historische Altstadt gehört zum UNESCO-Welterbe der Wachau.",
        "Krems ist ein bedeutendes Zentrum für den österreichischen Weinbau.",
        "Das Karikaturmuseum Krems ist das einzige Museum seiner Art in Österreich.",
        "Die Donau-Universität Krems ist auf Weiterbildung spezialisiert."
      ],
      "hu": [
        "Krems nevét 995-ben említik először írásos dokumentumok.",
        "A város Stein an der Donau-val egy ikervárost alkot.",
        "A történelmi óváros a Wachau részeként az UNESCO Világörökség része.",
        "Krems az osztrák borászat jelentős központja.",
        "A Kremsi Karikatúramúzeum az egyetlen ilyen jellegű múzeum Ausztriában.",
        "A Kremsi Duna Egyetem a továbbképzésre specializálódott."
      ],
      "ro": [
        "Krems a fost menționat pentru prima dată într-un document în anul 995.",
        "Orașul formează un oraș dublu împreună cu Stein an der Donau.",
        "Centrul istoric face parte din patrimoniul mondial UNESCO al regiunii Wachau.",
        "Krems este un centru important pentru viticultura austriacă.",
        "Muzeul de Caricatură din Krems este singurul de acest fel din Austria.",
        "Universitatea Dunării din Krems este specializată în formare continuă."
      ],
      "en": [
        "Krems was first mentioned in a document in the year 995.",
        "The city forms a twin city together with Stein an der Donau.",
        "The historic old town is part of the UNESCO World Heritage of the Wachau.",
        "Krems is a major center for Austrian viticulture.",
        "The Caricature Museum Krems is the only museum of its kind in Austria.",
        "The Danube University Krems specializes in continuing education."
      ]
    }
  },
  {
    "id": "at-wels",
    "type": "city",
    "parent": "AT-4",
    "coords": [
      14.0275,
      48.1575
    ],
    "name": {
      "de": "Wels",
      "hu": "Wels",
      "ro": "Wels",
      "en": "Wels"
    },
    "image": "/geo-images/austria/wels.webp",
    "description": {
      "de": "Wels ist die achtgrößte Stadt Österreichs und die zweitgrößte Stadt in Oberösterreich. Die Stadt liegt an der Traun und hat eine bedeutende Rolle als Messestadt und Industriezentrum. Wels hat eine lange Geschichte, die bis in die Römerzeit zurückreicht, als sie als Ovilava bekannt war. Die Welser Burg und der historische Stadtplatz sind beliebte Sehenswürdigkeiten.",
      "hu": "Wels Ausztria nyolcadik és Felső-Ausztria második legnagyobb városa. A város a Traun folyó partján fekszik, és fontos szerepet játszik mint vásárváros és ipari központ. Wels hosszú, a római korig visszanyúló történelemmel rendelkezik, amikor Ovilava néven ismerték. A welsi vár és a történelmi főtér kedvelt látványosságok.",
      "ro": "Wels este al optulea oraș ca mărime din Austria și al doilea oraș ca mărime din Austria Superioară. Orașul este situat pe râul Traun și are un rol important ca oraș al târgurilor și centru industrial. Wels are o istorie lungă care datează din epoca romană, când era cunoscut sub numele de Ovilava. Castelul Wels și piața istorică a orașului sunt atracții populare.",
      "en": "Wels is the eighth largest city in Austria and the second largest city in Upper Austria. The city is located on the Traun river and plays an important role as a trade fair city and industrial center. Wels has a long history dating back to Roman times when it was known as Ovilava. The Wels Castle and the historic town square are popular sights."
    },
    "facts": {
      "de": [
        "Wels war unter den Römern als Ovilava eine wichtige Stadt.",
        "Kaiser Maximilian I. starb 1519 in der Welser Burg.",
        "Die Messe Wels ist eine der größten und wichtigsten in Österreich.",
        "Der Ledererturm ist das einzig erhaltene Stadttor von Wels.",
        "Die Stadtkrone von Wels ist ein bedeutendes architektonisches Merkmal der Altstadt.",
        "Wels ist ein wichtiger Standort für die Lebensmittel- und Maschinenbauindustrie."
      ],
      "hu": [
        "Wels Ovilava néven fontos város volt a rómaiak idején.",
        "I. Miksa császár a welsi várban halt meg 1519-ben.",
        "A Welsi Vásár az egyik legnagyobb és legfontosabb Ausztriában.",
        "A Ledererturm (Bőrműves-torony) az egyetlen fennmaradt welsi városkapu.",
        "A welsi városháza és az óváros építészete különleges értékű.",
        "Wels az élelmiszer- és gépipar fontos központja."
      ],
      "ro": [
        "Wels a fost un oraș important sub romani, cunoscut sub numele de Ovilava.",
        "Împăratul Maximilian I a murit în Castelul Wels în 1519.",
        "Târgul de la Wels este unul dintre cele mai mari și mai importante din Austria.",
        "Turnul Lederer este singura poartă a orașului Wels care s-a păstrat.",
        "Arhitectura orașului vechi este o trăsătură caracteristică importantă a orașului Wels.",
        "Wels este o locație importantă pentru industria alimentară și ingineria mecanică."
      ],
      "en": [
        "Wels was an important city under the Romans, known as Ovilava.",
        "Emperor Maximilian I died in the Wels Castle in 1519.",
        "The Wels Trade Fair is one of the largest and most important in Austria.",
        "The Lederer Tower is the only surviving city gate of Wels.",
        "The historical architecture of the old town is a significant feature of Wels.",
        "Wels is an important location for the food and mechanical engineering industries."
      ]
    }
  },
  {
    "id": "at-dornbirn",
    "type": "city",
    "parent": "AT-8",
    "coords": [
      9.7431,
      47.4143
    ],
    "name": {
      "de": "Dornbirn",
      "hu": "Dornbirn",
      "ro": "Dornbirn",
      "en": "Dornbirn"
    },
    "image": "/geo-images/austria/dornbirn.webp",
    "description": {
      "de": "Dornbirn ist die bevölkerungsreichste Stadt im österreichischen Bundesland Vorarlberg und der wichtigste wirtschaftliche Knotenpunkt der Region. Die Stadt liegt im Vorarlberger Rheintal und ist für ihre Textilindustrie-Geschichte bekannt. Heute besticht Dornbirn durch eine moderne Architektur und die Nähe zur Natur, etwa der Rappenlochschlucht. Das Karren-Seilbahn bietet einen spektakulären Blick über das Rheintal bis zum Bodensee.",
      "hu": "Dornbirn az osztrák Vorarlberg tartomány legnépesebb városa és a régió legfontosabb gazdasági központja. A város a Vorarlbergi Rajna-völgyben fekszik, és híres textilipari történelméről. Ma Dornbirn modern építészetével és a természet, például a Rappenloch-szurdok közelségével hódít. A Karren felvonó látványos kilátást kínál a Rajna-völgyön át egészen a Bóden-tóig.",
      "ro": "Dornbirn este cel mai populat oraș din statul austriac Vorarlberg și cel mai important nod economic al regiunii. Orașul este situat în valea Rinului din Vorarlberg și este cunoscut pentru istoria sa în industria textilă. Astăzi, Dornbirn impresionează prin arhitectura modernă și apropierea de natură, cum ar fi defileul Rappenloch. Telecabina Karren oferă o priveliște spectaculoasă peste valea Rinului până la Lacul Constanța.",
      "en": "Dornbirn is the most populous city in the Austrian state of Vorarlberg and the region's most important economic hub. The city is located in the Vorarlberg Rhine Valley and is known for its textile industry history. Today, Dornbirn impresses with its modern architecture and its proximity to nature, such as the Rappenloch Gorge. The Karren cable car offers a spectacular view across the Rhine Valley to Lake Constance."
    },
    "facts": {
      "de": [
        "Dornbirn hat mehr Einwohner als die Landeshauptstadt Bregenz.",
        "Die Stadt war im 19. Jahrhundert das Zentrum der Vorarlberger Textilindustrie.",
        "Das Inatura Museum ist eines der modernsten Naturmuseen Europas.",
        "Die Rappenlochschlucht ist eine der größten Schluchten der Ostalpen.",
        "Der Hausberg Karren ist ein beliebtes Ausflugsziel mit Panoramarestaurant.",
        "Dornbirn beherbergt die Fachhochschule Vorarlberg."
      ],
      "hu": [
        "Dornbirnnek több lakosa van, mint a tartományi fővárosnak, Bregenznek.",
        "A 19. században a város a vorarlbergi textilipar központja volt.",
        "Az Inatura Múzeum Európa egyik legmodernebb természettudományi múzeuma.",
        "A Rappenloch-szurdok a Keleti-Alpok egyik legnagyobb szurdoka.",
        "A Karren hegy kedvelt kirándulóhely, panorámaétteremmel.",
        "Dornbirn ad otthont a Vorarlbergi Szakfőiskolának."
      ],
      "ro": [
        "Dornbirn are mai mulți locuitori decât capitala statului, Bregenz.",
        "În secolul al XIX-lea, orașul a fost centrul industriei textile din Vorarlberg.",
        "Muzeul Inatura este unul dintre cele mai moderne muzee ale naturii din Europa.",
        "Defileul Rappenloch este unul dintre cele mai mari defileuri din Alpii Orientali.",
        "Muntele Karren este o destinație populară, cu un restaurant panoramic.",
        "Dornbirn găzduiește Universitatea de Științe Aplicate din Vorarlberg."
      ],
      "en": [
        "Dornbirn has more inhabitants than the state capital Bregenz.",
        "In the 19th century, the city was the center of the Vorarlberg textile industry.",
        "The Inatura Museum is one of the most modern nature museums in Europe.",
        "The Rappenloch Gorge is one of the largest gorges in the Eastern Alps.",
        "The Karren mountain is a popular destination with a panoramic restaurant.",
        "Dornbirn is home to the Vorarlberg University of Applied Sciences."
      ]
    }
  },
  {
    "id": "at-steyr",
    "type": "city",
    "parent": "AT-4",
    "coords": [
      14.4167,
      48.05
    ],
    "name": {
      "de": "Steyr",
      "hu": "Steyr",
      "ro": "Steyr",
      "en": "Steyr"
    },
    "image": "/geo-images/austria/steyr.webp",
    "description": {
      "de": "Steyr ist eine historische Stadt in Oberösterreich und liegt am Zusammenfluss von Enns und Steyr. Sie war jahrhundertelang das Zentrum der österreichischen Eisenindustrie, was der Stadt großen Reichtum brachte. Der malerische Stadtplatz von Steyr gehört zu den am besten erhaltenen Altstadtensembles im deutschsprachigen Raum. Zudem wird Steyr oft als die \"Christkindlstadt\" bezeichnet, da sich hier das Postamt Christkindl befindet.",
      "hu": "Steyr történelmi város Felső-Ausztriában, az Enns és a Steyr folyók összefolyásánál fekszik. Évszázadokon át az osztrák vasipar központja volt, ami nagy gazdagságot hozott a városnak. Steyr festői főtere a német nyelvterület egyik legjobb állapotban fennmaradt óvárosi együttese. Steyrt gyakran \"Christkindlstadt\"-nak, a Jézuska városának is nevezik, mivel itt található a Christkindl postahivatal.",
      "ro": "Steyr este un oraș istoric din Austria Superioară, situat la confluența râurilor Enns și Steyr. Timp de secole, a fost centrul industriei siderurgice austriece, ceea ce a adus o mare bogăție orașului. Piața pitorească a orașului Steyr este unul dintre cele mai bine conservate ansambluri vechi ale orașului din țările de limbă germană. Steyr este adesea denumit \"orașul Christkindl\", deoarece aici se află oficiul poștal Christkindl.",
      "en": "Steyr is a historic city in Upper Austria, located at the confluence of the Enns and Steyr rivers. For centuries, it was the center of the Austrian iron industry, which brought great wealth to the city. The picturesque town square of Steyr is one of the best-preserved old town ensembles in the German-speaking world. In addition, Steyr is often referred to as the \"Christkindlstadt\" (Christ Child City), as the Christkindl post office is located here."
    },
    "facts": {
      "de": [
        "Steyr war ein wichtiger Standort für die Waffen- und Fahrzeugproduktion.",
        "Das Bummerlhaus am Stadtplatz ist ein Meisterwerk der Gotik.",
        "Schloss Lamberg thront majestätisch über dem Zusammenfluss von Enns und Steyr.",
        "Der Komponist Anton Bruckner verbrachte oft Zeit in Steyr.",
        "Das Postamt Christkindl beantwortet jährlich rund 2 Millionen Briefe von Kindern.",
        "Die Steyrer Altstadt besitzt über 100 historische Gebäude."
      ],
      "hu": [
        "Steyr fontos fegyver- és járműgyártó központ volt.",
        "A főtéren található Bummerlhaus a gótika egyik remekműve.",
        "A Lamberg-kastély fenségesen magasodik az Enns és a Steyr összefolyása fölé.",
        "Anton Bruckner zeneszerző gyakran töltött időt Steyrben.",
        "A Christkindl postahivatal évente mintegy 2 millió gyermeklevélre válaszol.",
        "A steyri óvárosban több mint 100 történelmi épület található."
      ],
      "ro": [
        "Steyr a fost o locație importantă pentru producția de arme și vehicule.",
        "Bummerlhaus din piața orașului este o capodoperă a arhitecturii gotice.",
        "Castelul Lamberg tronează maiestuos deasupra confluenței râurilor Enns și Steyr.",
        "Compozitorul Anton Bruckner petrecea adesea timp în Steyr.",
        "Oficiul poștal Christkindl răspunde la aproximativ 2 milioane de scrisori de la copii în fiecare an.",
        "Orașul vechi Steyr are peste 100 de clădiri istorice."
      ],
      "en": [
        "Steyr was an important location for weapon and vehicle production.",
        "The Bummerlhaus on the town square is a masterpiece of Gothic architecture.",
        "Lamberg Castle sits majestically above the confluence of the Enns and Steyr rivers.",
        "The composer Anton Bruckner often spent time in Steyr.",
        "The Christkindl post office answers around 2 million letters from children annually.",
        "The Steyr old town has over 100 historic buildings."
      ]
    }
  },
  {
    "id": "at-feldkirch",
    "type": "city",
    "parent": "AT-8",
    "coords": [
      9.5986,
      47.2375
    ],
    "name": {
      "de": "Feldkirch",
      "hu": "Feldkirch",
      "ro": "Feldkirch",
      "en": "Feldkirch"
    },
    "image": "/geo-images/austria/feldkirch.webp",
    "description": {
      "de": "Feldkirch ist die am weitesten westlich gelegene Gemeinde in Österreich und grenzt an Liechtenstein und die Schweiz. Die Stadt ist für ihre hervorragend erhaltene mittelalterliche Altstadt bekannt. Die Schattenburg dominiert das Stadtbild und war einst der Sitz der Grafen von Montfort. Feldkirch ist heute ein wichtiges Bildungs- und Kulturzentrum in Vorarlberg.",
      "hu": "Feldkirch Ausztria legnyugatibb fekvésű települése, Liechtenstein és Svájc határán fekszik. A város kiválóan fennmaradt középkori óvárosáról ismert. A Schattenburg uralja a városképet, és egykor a Montfort grófok székhelye volt. Feldkirch ma fontos oktatási és kulturális központ Vorarlbergben.",
      "ro": "Feldkirch este cea mai vestică municipalitate din Austria și se învecinează cu Liechtenstein și Elveția. Orașul este cunoscut pentru orașul său vechi medieval excelent conservat. Castelul Schattenburg domină peisajul urban și a fost cândva sediul conților de Montfort. Astăzi, Feldkirch este un important centru educațional și cultural din Vorarlberg.",
      "en": "Feldkirch is the westernmost municipality in Austria and borders Liechtenstein and Switzerland. The city is known for its excellently preserved medieval old town. The Schattenburg Castle dominates the cityscape and was once the seat of the Counts of Montfort. Today, Feldkirch is an important educational and cultural center in Vorarlberg."
    },
    "facts": {
      "de": [
        "Die Schattenburg ist eine der am besten erhaltenen Burgen Mitteleuropas.",
        "Feldkirch erhielt 1218 das Stadtrecht von Hugo I. von Montfort.",
        "Das Katzenturm genannte Bauwerk ist ein Teil der ehemaligen Stadtbefestigung.",
        "In Feldkirch findet jährlich das bekannte Poolbar-Festival statt.",
        "Der Schriftsteller James Joyce verbrachte einige Zeit in Feldkirch.",
        "Die Stadt liegt am Fluss Ill, kurz bevor dieser in den Rhein mündet."
      ],
      "hu": [
        "A Schattenburg Közép-Európa egyik legjobb állapotban fennmaradt vára.",
        "Feldkirch 1218-ban kapott városi rangot I. Hugo von Montforttól.",
        "A Macskatoronynak (Katzenturm) nevezett építmény a korábbi városfal része.",
        "Feldkirchben évente megrendezik az ismert Poolbar-Fesztivált.",
        "James Joyce író rövid időt töltött Feldkirchben.",
        "A város az Ill folyó partján fekszik, röviddel azelőtt, hogy a Rajnába ömlik."
      ],
      "ro": [
        "Castelul Schattenburg este unul dintre cele mai bine conservate castele din Europa Centrală.",
        "Feldkirch a primit drepturile de oraș în 1218 de la Hugo I de Montfort.",
        "Structura cunoscută sub numele de Katzenturm (Turnul Pisicilor) face parte din fostele fortificații ale orașului.",
        "Renumitul festival Poolbar are loc anual în Feldkirch.",
        "Scriitorul James Joyce a petrecut ceva timp la Feldkirch.",
        "Orașul este situat pe râul Ill, cu puțin timp înainte ca acesta să se verse în Rin."
      ],
      "en": [
        "Schattenburg Castle is one of the best-preserved castles in Central Europe.",
        "Feldkirch received city rights in 1218 from Hugo I of Montfort.",
        "The structure known as the Katzenturm (Cat Tower) is part of the former city fortifications.",
        "The renowned Poolbar Festival takes place annually in Feldkirch.",
        "The writer James Joyce spent some time in Feldkirch.",
        "The city is located on the river Ill, shortly before it flows into the Rhine."
      ]
    }
  },
  {
    "id": "at-leoben",
    "type": "city",
    "parent": "AT-6",
    "coords": [
      15.0942,
      47.38
    ],
    "name": {
      "de": "Leoben",
      "hu": "Leoben",
      "ro": "Leoben",
      "en": "Leoben"
    },
    "image": "/geo-images/austria/leoben.webp",
    "description": {
      "de": "Leoben ist die zweitgrößte Stadt in der Steiermark und liegt im Zentrum des österreichischen Bergbau- und Hüttenwesens. Die Montanuniversität Leoben prägt die Stadt maßgeblich und verleiht ihr ein junges, studentisches Flair. Leoben ist auch als Sitz der Gösser Brauerei bekannt, einem der traditionsreichsten Bierproduzenten Österreichs. Der mittelalterliche Hauptplatz zählt zu den schönsten in der Region.",
      "hu": "Leoben Stájerország második legnagyobb városa, és az osztrák bányászat és kohászat központjában fekszik. A Leobeni Bányászati Egyetem meghatározza a várost, és fiatalos, diákos hangulatot kölcsönöz neki. Leoben a Gösser sörgyár székhelyeként is ismert, amely Ausztria egyik legnagyobb múltú sörgyártója. A középkori főtér a régió egyik legszebbje.",
      "ro": "Leoben este al doilea oraș ca mărime din Stiria și este situat în centrul industriei miniere și metalurgice din Austria. Universitatea de Minerit din Leoben are o influență majoră asupra orașului, dându-i o atmosferă tânără, studențească. Leoben este cunoscut și ca sediul fabricii de bere Gösser, unul dintre cei mai tradiționali producători de bere din Austria. Piața principală medievală este una dintre cele mai frumoase din regiune.",
      "en": "Leoben is the second largest city in Styria and is located in the center of the Austrian mining and metallurgical industry. The University of Leoben has a major influence on the city, giving it a young, student atmosphere. Leoben is also known as the seat of the Gösser brewery, one of Austria's most traditional beer producers. The medieval main square is one of the most beautiful in the region."
    },
    "facts": {
      "de": [
        "Leoben ist das wirtschaftliche Zentrum der Obersteiermark.",
        "Die Montanuniversität Leoben wurde 1840 gegründet.",
        "Der Schwammerlturm ist das Wahrzeichen von Leoben und verdankt seinen Namen der pilzförmigen Haube.",
        "Das Stift Göss in Leoben ist das älteste Kloster der Steiermark.",
        "In Leoben wurde 1797 der Vorfrieden von Leoben zwischen Napoleon und Österreich geschlossen.",
        "Die Stadt liegt in einer Schleife der Mur."
      ],
      "hu": [
        "Leoben Felső-Stájerország gazdasági központja.",
        "A Leobeni Bányászati Egyetemet 1840-ben alapították.",
        "A Gombatorony (Schwammerlturm) Leoben jelképe, nevét gomba alakú tetőzetéről kapta.",
        "A leobeni Göss-apátság Stájerország legrégebbi kolostora.",
        "Leobenben kötötték meg a leobeni előzetes békét Napóleon és Ausztria között 1797-ben.",
        "A város a Mura folyó egy kanyarulatában fekszik."
      ],
      "ro": [
        "Leoben este centrul economic al Stiriei Superioare.",
        "Universitatea din Leoben a fost fondată în 1840.",
        "Turnul Schwammerlturm este simbolul orașului Leoben, numit astfel datorită acoperișului său în formă de ciupercă.",
        "Mănăstirea Göss din Leoben este cea mai veche mănăstire din Stiria.",
        "Tratatul preliminar de la Leoben a fost semnat între Napoleon și Austria aici în 1797.",
        "Orașul este situat într-o buclă a râului Mur."
      ],
      "en": [
        "Leoben is the economic center of Upper Styria.",
        "The Montanuniversität Leoben (University of Mining) was founded in 1840.",
        "The Schwammerlturm is the landmark of Leoben and owes its name to its mushroom-shaped dome.",
        "Göss Abbey in Leoben is the oldest monastery in Styria.",
        "The Preliminary Peace of Leoben was concluded here between Napoleon and Austria in 1797.",
        "The city is situated in a loop of the Mur river."
      ]
    }
  },
  {
    "id": "at-wolfsberg",
    "type": "city",
    "parent": "AT-2",
    "coords": [
      14.8333,
      46.8333
    ],
    "name": {
      "de": "Wolfsberg",
      "hu": "Wolfsberg",
      "ro": "Wolfsberg",
      "en": "Wolfsberg"
    },
    "image": "/geo-images/austria/wolfsberg.webp",
    "description": {
      "de": "Wolfsberg ist die drittgrößte Stadt Kärntens und das Zentrum des Lavanttals. Das Lavanttal, oft als das \"Paradies Kärntens\" bezeichnet, ist bekannt für seinen Obstbau und die sanfte Hügellandschaft. Hoch über der Stadt thront das prächtige Schloss Wolfsberg, das dem Ort ein markantes Profil verleiht. Wolfsberg hat eine charmante Altstadt mit gut erhaltenen Bürgerhäusern.",
      "hu": "Wolfsberg Karintia harmadik legnagyobb városa és a Lavanttal központja. A Lavanttal, amelyet gyakran \"Karintia paradicsomaként\" is emlegetnek, gyümölcstermesztéséről és szelíd dombvidékéről ismert. A város felett magasan trónol a pompás Wolfsberg-kastély, amely jellegzetes arculatot ad a településnek. Wolfsbergnek hangulatos óvárosa van, jó állapotban fennmaradt polgárházakkal.",
      "ro": "Wolfsberg este al treilea oraș ca mărime din Carintia și centrul văii Lavant. Valea Lavant, adesea numită „Paradisul Carintiei”, este cunoscută pentru pomicultura și peisajul său deluros și blând. Deasupra orașului se înalță magnificul Castel Wolfsberg, care conferă locului un profil izbitor. Wolfsberg are un oraș vechi fermecător cu case burgheze bine conservate.",
      "en": "Wolfsberg is the third largest city in Carinthia and the center of the Lavant Valley. The Lavant Valley, often referred to as the \"Paradise of Carinthia\", is known for its fruit growing and gentle hilly landscape. High above the city sits the magnificent Wolfsberg Castle, giving the town a striking profile. Wolfsberg has a charming old town with well-preserved townhouses."
    },
    "facts": {
      "de": [
        "Wolfsberg wurde 1178 erstmals urkundlich erwähnt.",
        "Schloss Wolfsberg wurde im 19. Jahrhundert im Tudor-Stil umgebaut.",
        "Die Stadt ist der wichtigste Wirtschaftsstandort im Lavanttal.",
        "Das Lavanttal ist berühmt für seinen Most und die Obstkultur.",
        "Die Koralpe östlich von Wolfsberg ist ein beliebtes Wander- und Skigebiet.",
        "Der Fluss Lavant fließt direkt durch das Stadtzentrum."
      ],
      "hu": [
        "Wolfsberget először 1178-ban említik írásos források.",
        "A Wolfsberg-kastélyt a 19. században Tudor-stílusban átépítették.",
        "A város a Lavanttal legfontosabb gazdasági központja.",
        "A Lavanttal híres a mustjáról és gyümölcskultúrájáról.",
        "A Wolfsbergtől keletre fekvő Koralpe kedvelt túra- és síterep.",
        "A Lavant folyó egyenesen a városközponton folyik keresztül."
      ],
      "ro": [
        "Wolfsberg a fost menționat pentru prima dată într-un document în 1178.",
        "Castelul Wolfsberg a fost reconstruit în secolul al XIX-lea în stil Tudor.",
        "Orașul este cea mai importantă locație economică din valea Lavant.",
        "Valea Lavant este renumită pentru cidrul său de mere și cultura fructelor.",
        "Muntele Koralpe de la est de Wolfsberg este o zonă populară pentru drumeții și schi.",
        "Râul Lavant curge direct prin centrul orașului."
      ],
      "en": [
        "Wolfsberg was first mentioned in a document in 1178.",
        "Wolfsberg Castle was rebuilt in the 19th century in the Tudor style.",
        "The city is the most important economic location in the Lavant Valley.",
        "The Lavant Valley is famous for its cider and fruit culture.",
        "The Koralpe mountain east of Wolfsberg is a popular hiking and skiing area.",
        "The river Lavant flows directly through the city center."
      ]
    }
  },
  {
    "id": "at-lienz",
    "type": "city",
    "parent": "AT-7",
    "coords": [
      12.76,
      46.8297
    ],
    "name": {
      "de": "Lienz",
      "hu": "Lienz",
      "ro": "Lienz",
      "en": "Lienz"
    },
    "image": "/geo-images/austria/lienz.webp",
    "description": {
      "de": "Lienz ist die Hauptstadt und das wirtschaftliche Zentrum von Osttirol. Sie liegt an der Einmündung der Isel in die Drau und wird auch die 'Sonnenstadt' genannt, weil sie mit über 2.000 Sonnenstunden pro Jahr glänzt. Vor der Kulisse der Lienzer Dolomiten bietet die Stadt ein unvergleichliches Alpenpanorama. Das Schloss Bruck, auf einem Hügel über der Stadt, beherbergt Kunstwerke des Osttiroler Malers Albin Egger-Lienz.",
      "hu": "Lienz Kelet-Tirol fővárosa és gazdasági központja. Az Isel és a Dráva összefolyásánál fekszik, és 'Napvárosnak' is nevezik, mivel évente több mint 2000 napsütéses órával büszkélkedhet. A Lienzi-Dolomitok kulisszája előtt a város páratlan alpesi panorámát kínál. A város feletti dombon álló Bruck kastély Albin Egger-Lienz kelet-tiroli festő műveinek ad otthont.",
      "ro": "Lienz este capitala și centrul economic al Tirolului de Est. Este situat la confluența râurilor Isel și Drava și este numit și „Orașul Soarelui” deoarece strălucește cu peste 2.000 de ore de soare pe an. Pe fundalul Dolomiților Lienz, orașul oferă o panoramă alpină incomparabilă. Castelul Bruck, situat pe un deal deasupra orașului, găzduiește lucrări de artă ale pictorului tirolez de est Albin Egger-Lienz.",
      "en": "Lienz is the capital and economic center of East Tyrol. It is located at the confluence of the Isel and Drava rivers and is also called the 'Sun City' because it boasts over 2,000 hours of sunshine per year. Against the backdrop of the Lienz Dolomites, the city offers an incomparable Alpine panorama. Bruck Castle, on a hill above the city, houses artworks by the East Tyrolean painter Albin Egger-Lienz."
    },
    "facts": {
      "de": [
        "Lienz ist die einzige Stadt in Osttirol.",
        "Die Stadt hat ein mediterran anmutendes Klima und viele Palmen im Zentrum.",
        "In der Nähe befindet sich die römische Ausgrabungsstätte Aguntum.",
        "Das Schloss Bruck wurde im 13. Jahrhundert von den Grafen von Görz erbaut.",
        "Lienz ist ein idealer Ausgangspunkt für Touren in den Nationalpark Hohe Tauern.",
        "Die Lienzer Dolomiten sind nicht geologisch mit den Südtiroler Dolomiten verwandt."
      ],
      "hu": [
        "Lienz az egyetlen város Kelet-Tirolban.",
        "A város mediterrán hangulatú klímával és sok pálmafával rendelkezik a központban.",
        "A közelben található az Aguntum nevű római kori ásatás.",
        "A Bruck kastélyt a 13. században építtették a görzi grófok.",
        "Lienz ideális kiindulópont a Magas-Tauern Nemzeti Parkba tett túrákhoz.",
        "A Lienzi-Dolomitok geológiailag nem rokonai a dél-tiroli Dolomitoknak."
      ],
      "ro": [
        "Lienz este singurul oraș din Tirolul de Est.",
        "Orașul are o climă de tip mediteranean și mulți palmieri în centru.",
        "În apropiere se află situl de excavare roman Aguntum.",
        "Castelul Bruck a fost construit în secolul al XIII-lea de conții de Gorizia.",
        "Lienz este un punct de plecare ideal pentru excursii în Parcul Național Hohe Tauern.",
        "Dolomiții din Lienz nu sunt înrudiți geologic cu Dolomiții din Tirolul de Sud."
      ],
      "en": [
        "Lienz is the only city in East Tyrol.",
        "The city has a Mediterranean-like climate and many palm trees in its center.",
        "Nearby is the Roman excavation site of Aguntum.",
        "Bruck Castle was built in the 13th century by the Counts of Gorizia.",
        "Lienz is an ideal starting point for tours into the Hohe Tauern National Park.",
        "The Lienz Dolomites are not geologically related to the South Tyrolean Dolomites."
      ]
    }
  },
  {
    "id": "at-zell-am-see",
    "type": "lake",
    "parent": "AT-5",
    "coords": [
      12.7929,
      47.3249
    ],
    "name": {
      "de": "Zell am See",
      "hu": "Zell am See",
      "ro": "Zell am See",
      "en": "Zell am See"
    },
    "image": "/geo-images/austria/zell-am-see.webp",
    "description": {
      "de": "Zell am See ist eine malerische Stadt im Salzburger Land, die am Ufer des Zeller Sees liegt. Die Kombination aus kristallklarem See, schneebedeckten Bergen und dem nahegelegenen Kitzsteinhorn-Gletscher macht den Ort ganzjährig zu einem beliebten Reiseziel. Im Winter zieht das Skigebiet Schmittenhöhe Wintersportler an, während im Sommer Schwimmen und Bootfahren im See locken. Die historische Altstadt lädt zum Flanieren und Genießen ein.",
      "hu": "Zell am See egy festői város Salzburg tartományban, a Zeller See (Zelli-tó) partján. A kristálytiszta tó, a hófedte hegyek és a közeli Kitzsteinhorn-gleccser kombinációja egész évben népszerű utazási célponttá teszi. Télen a Schmittenhöhe síterep vonzza a téli sportok szerelmeseit, míg nyáron a tóban való úszás és csónakázás csábít. A történelmi óváros sétára és kikapcsolódásra hívogat.",
      "ro": "Zell am See este un oraș pitoresc din statul Salzburg, situat pe malul lacului Zell. Combinația dintre lacul limpede, munții acoperiți de zăpadă și ghețarul din apropiere Kitzsteinhorn face din acest loc o destinație populară pe tot parcursul anului. Iarna, zona de schi Schmittenhöhe atrage iubitorii sporturilor de iarnă, în timp ce vara înotul și plimbările cu barca pe lac sunt atracțiile principale. Orașul istoric vechi vă invită la plimbare și relaxare.",
      "en": "Zell am See is a picturesque town in the state of Salzburg, located on the shores of Lake Zell. The combination of the crystal-clear lake, snow-capped mountains and the nearby Kitzsteinhorn glacier makes the place a popular travel destination year-round. In winter, the Schmittenhöhe ski area attracts winter sports enthusiasts, while in summer, swimming and boating in the lake are the main draws. The historic old town invites you to stroll and relax."
    },
    "facts": {
      "de": [
        "Der Zeller See hat Trinkwasserqualität.",
        "Zell am See und Kaprun bilden zusammen eine der wichtigsten Tourismusregionen Österreichs.",
        "Die Schmittenhöhe gilt als Österreichs schönster Aussichtsberg.",
        "Der Ort wurde bereits in der Bronzezeit besiedelt.",
        "Im Sommer finden regelmäßig eindrucksvolle Wasserspiele am See statt.",
        "Zell am See hat einen eigenen kleinen Flugplatz für Segel- und Motorflieger."
      ],
      "hu": [
        "A Zeller See vize ivóvíz minőségű.",
        "Zell am See és Kaprun együtt Ausztria egyik legfontosabb turisztikai régióját alkotja.",
        "A Schmittenhöhe-t tartják Ausztria legszebb kilátóhegyének.",
        "A település már a bronzkorban is lakott volt.",
        "Nyáron rendszeresen látványos fényjátékos szökőkút-műsorokat tartanak a tavon.",
        "Zell am See saját kis repülőtérrel rendelkezik vitorlázó- és motoros repülők számára."
      ],
      "ro": [
        "Lacul Zell are calitatea apei potabile.",
        "Zell am See și Kaprun formează împreună una dintre cele mai importante regiuni turistice din Austria.",
        "Schmittenhöhe este considerat cel mai frumos munte de panoramă din Austria.",
        "Așezarea a fost locuită încă din Epoca Bronzului.",
        "Vara au loc în mod regulat spectacole impresionante cu apă pe lac.",
        "Zell am See are propriul său mic aerodrom pentru planoare și avioane cu motor."
      ],
      "en": [
        "Lake Zell has drinking water quality.",
        "Zell am See and Kaprun together form one of Austria's most important tourism regions.",
        "The Schmittenhöhe is considered Austria's most beautiful panoramic mountain.",
        "The settlement was inhabited as early as the Bronze Age.",
        "In summer, impressive water shows take place regularly on the lake.",
        "Zell am See has its own small airfield for gliders and motorized aircraft."
      ]
    }
  },
  {
    "id": "at-worthersee",
    "type": "lake",
    "parent": "AT-2",
    "coords": [
      14.15,
      46.6167
    ],
    "name": {
      "de": "Wörthersee",
      "hu": "Wörthersee",
      "ro": "Wörthersee",
      "en": "Lake Wörthersee"
    },
    "image": "/geo-images/austria/worthersee.webp",
    "description": {
      "de": "Der Wörthersee ist der größte und wohl bekannteste See Kärntens. Wegen seines türkisblauen, im Sommer angenehm warmen Wassers ist er ein Magnet für Badegäste und Prominenz. Die Architektur am Ufer wird durch die charakteristische Wörthersee-Architektur des 19. Jahrhunderts geprägt. Orte wie Velden, Pörtschach und Maria Wörth liegen direkt am See und sind berühmt für ihr mondänes Flair.",
      "hu": "A Wörthersee (Wörthi-tó) Karintia legnagyobb és legismertebb tava. Türkizkék, nyáron kellemesen meleg vizének köszönhetően mágnesként vonzza a fürdőzőket és a hírességeket. A part menti építészetet a 19. századi jellegzetes Wörthersee-i építészet határozza meg. Olyan települések, mint Velden, Pörtschach és Maria Wörth közvetlenül a tó partján fekszenek, és híresek elegáns hangulatukról.",
      "ro": "Lacul Wörthersee este cel mai mare și probabil cel mai faimos lac din Carintia. Datorită apei sale de un albastru turcoaz, care este plăcut de caldă vara, este un magnet pentru înotători și celebrități. Arhitectura de pe mal este caracterizată de arhitectura specifică Wörthersee din secolul al XIX-lea. Locuri precum Velden, Pörtschach și Maria Wörth sunt situate direct pe lac și sunt renumite pentru aerul lor sofisticat.",
      "en": "Lake Wörthersee is the largest and arguably the most famous lake in Carinthia. Because of its turquoise-blue water, which is pleasantly warm in summer, it is a magnet for bathers and celebrities. The architecture on the shore is characterized by the distinctive Wörthersee architecture of the 19th century. Places like Velden, Pörtschach, and Maria Wörth are situated directly on the lake and are famous for their sophisticated flair."
    },
    "facts": {
      "de": [
        "Der Wörthersee kann im Sommer Wassertemperaturen bis zu 27 Grad Celsius erreichen.",
        "Er ist fast 17 Kilometer lang und bis zu 1,6 Kilometer breit.",
        "Das Schlosshotel Velden ist ein bekanntes Luxushotel am Westufer.",
        "In Maria Wörth befindet sich eine malerische Wallfahrtskirche auf einer Halbinsel.",
        "Jährlich findet am Wörthersee das größte GTI-Treffen Europas statt (bis 2022).",
        "Die Wörthersee-Schifffahrt hat eine lange Tradition und verbindet die Uferorte."
      ],
      "hu": [
        "A Wörthersee vízhőmérséklete nyáron elérheti a 27 Celsius-fokot is.",
        "Majdnem 17 kilométer hosszú és akár 1,6 kilométer széles is lehet.",
        "A veldeni Schlosshotel egy ismert luxusszálloda a nyugati parton.",
        "Maria Wörth egy festői zarándoktemplomnak ad otthont egy félszigeten.",
        "Évente a Wörtherseenél tartották Európa legnagyobb GTI találkozóját (2022-ig).",
        "A wörtherseei hajózás hosszú hagyományokkal rendelkezik, és összeköti a parti településeket."
      ],
      "ro": [
        "Lacul Wörthersee poate atinge temperaturi ale apei de până la 27 de grade Celsius vara.",
        "Are aproape 17 kilometri lungime și până la 1,6 kilometri lățime.",
        "Schlosshotel Velden este un hotel de lux bine-cunoscut pe malul de vest.",
        "În Maria Wörth există o biserică pitorească de pelerinaj pe o peninsulă.",
        "Cea mai mare întâlnire GTI din Europa a avut loc anual la Wörthersee (până în 2022).",
        "Navigația pe Wörthersee are o tradiție lungă și leagă orașele de coastă."
      ],
      "en": [
        "Lake Wörthersee can reach water temperatures of up to 27 degrees Celsius in summer.",
        "It is almost 17 kilometers long and up to 1.6 kilometers wide.",
        "The Schlosshotel Velden is a well-known luxury hotel on the western shore.",
        "In Maria Wörth, there is a picturesque pilgrimage church on a peninsula.",
        "The largest GTI meeting in Europe took place annually at Lake Wörthersee (until 2022).",
        "Wörthersee passenger shipping has a long tradition and connects the coastal towns."
      ]
    }
  },
  {
    "id": "at-kitzsteinhorn",
    "type": "mountain",
    "parent": "AT-5",
    "coords": [
      12.687,
      47.1886
    ],
    "name": {
      "de": "Kitzsteinhorn",
      "hu": "Kitzsteinhorn",
      "ro": "Kitzsteinhorn",
      "en": "Kitzsteinhorn"
    },
    "image": "/geo-images/austria/kitzsteinhorn.webp",
    "description": {
      "de": "Das Kitzsteinhorn ist ein Berg in den Hohen Tauern und beherbergt das erste Gletscherskigebiet Österreichs. Mit der Seilbahn gelangt man auf über 3.000 Meter Höhe zur Gipfelwelt 3000, wo man einen spektakulären Blick auf den Nationalpark Hohe Tauern hat. Selbst im Sommer liegt hier Schnee, was das Gebiet zu einem einzigartigen Erlebnis macht. Das Kitzsteinhorn gilt als Mythos und bietet erstklassige Wintersportbedingungen fast das ganze Jahr über.",
      "hu": "A Kitzsteinhorn a Magas-Tauern egy hegye, és itt található Ausztria első gleccserek síterepe. A felvonóval több mint 3000 méteres magasságba lehet eljutni a Gipfelwelt 3000 (Csúcsvilág 3000) kilátóhoz, ahonnan látványos kilátás nyílik a Magas-Tauern Nemzeti Parkra. Itt még nyáron is van hó, ami egyedülálló élménnyé teszi a területet. A Kitzsteinhorn legendás hegynek számít, és szinte egész évben első osztályú téli sportolási feltételeket kínál.",
      "ro": "Kitzsteinhorn este un munte din Hohe Tauern și găzduiește prima zonă de schi pe ghețar din Austria. Telecabina vă duce la peste 3.000 de metri altitudine până la Gipfelwelt 3000, unde aveți o vedere spectaculoasă asupra Parcului Național Hohe Tauern. Chiar și vara este zăpadă aici, ceea ce face din zonă o experiență unică. Kitzsteinhorn este considerat un mit și oferă condiții de primă clasă pentru sporturile de iarnă aproape tot timpul anului.",
      "en": "The Kitzsteinhorn is a mountain in the Hohe Tauern and is home to Austria's first glacier ski area. The cable car takes you to an altitude of over 3,000 meters to the Gipfelwelt 3000, where you have a spectacular view of the Hohe Tauern National Park. Even in summer, there is snow here, making the area a unique experience. The Kitzsteinhorn is considered a myth and offers first-class winter sports conditions almost all year round."
    },
    "facts": {
      "de": [
        "Der Gipfel des Kitzsteinhorns liegt auf 3.203 Metern Höhe.",
        "Die Gipfelwelt 3000 ist der höchste für jedermann bequem erreichbare Punkt im Salzburger Land.",
        "Der Gletscher ermöglicht fast ganzjährigen Skibetrieb.",
        "Ein 360 Meter langer Stollen führt zur Panoramaplattform Nationalpark Gallery.",
        "1965 wurde die erste Seilbahn auf das Kitzsteinhorn eröffnet.",
        "Das Ice Camp am Kitzsteinhorn bietet Iglus aus Eis und Schnee."
      ],
      "hu": [
        "A Kitzsteinhorn csúcsa 3203 méter magas.",
        "A Gipfelwelt 3000 Salzburg tartomány legmagasabb, bárki számára könnyen megközelíthető pontja.",
        "A gleccser szinte egész évben lehetővé teszi a síelést.",
        "Egy 360 méter hosszú alagút vezet a Nationalpark Gallery panorámaplatformhoz.",
        "1965-ben nyílt meg az első felvonó a Kitzsteinhornra.",
        "A Kitzsteinhornon található Ice Camp jégből és hóból készült iglukat kínál."
      ],
      "ro": [
        "Vârful Kitzsteinhorn se află la o altitudine de 3.203 metri.",
        "Gipfelwelt 3000 este cel mai înalt punct din regiunea Salzburg ușor accesibil pentru oricine.",
        "Ghețarul permite practicarea schiului aproape tot anul.",
        "Un tunel lung de 360 de metri duce la platforma panoramică Nationalpark Gallery.",
        "În 1965 a fost deschisă prima telecabină spre Kitzsteinhorn.",
        "Ice Camp de pe Kitzsteinhorn oferă igluuri din gheață și zăpadă."
      ],
      "en": [
        "The summit of the Kitzsteinhorn is at an altitude of 3,203 meters.",
        "Gipfelwelt 3000 is the highest point in the Salzburg region easily accessible to everyone.",
        "The glacier allows almost year-round skiing.",
        "A 360-meter-long tunnel leads to the Nationalpark Gallery panorama platform.",
        "In 1965, the first cable car to the Kitzsteinhorn was opened.",
        "The Ice Camp on the Kitzsteinhorn offers igloos made of ice and snow."
      ]
    }
  },
  {
    "id": "at-nockberge",
    "type": "mountain",
    "parent": "AT-2",
    "coords": [
      13.95,
      46.8833
    ],
    "name": {
      "de": "Biosphärenpark Nockberge",
      "hu": "Nockberge Bioszférapark",
      "ro": "Parcul Biosferei Nockberge",
      "en": "Nockberge Biosphere Reserve"
    },
    "image": "/geo-images/austria/nockberge.webp",
    "description": {
      "de": "Der Biosphärenpark Nockberge in Kärnten ist bekannt für seine sanften, runden Kuppen (Nocken), die sich von den schroffen Gipfeln anderer Alpenregionen deutlich abheben. Er bietet ein einzigartiges Naturerlebnis mit seltenen Pflanzen und Tieren sowie weiten Almen. Die Nockalmstraße ist eine der schönsten Panoramastraßen Österreichs und windet sich durch diese herrliche Bergwelt. Die Region ist ideal für entspannte Wanderungen und Naturbeobachtungen.",
      "hu": "A karintiai Nockberge Bioszférapark ismert szelíd, kerekded hegyhátairól (Nocken), amelyek élesen elütnek más alpesi régiók zord csúcsaitól. Egyedülálló természeti élményt kínál ritka növény- és állatvilágával, valamint tágas alpesi legelőivel. A Nockalmstraße Ausztria egyik legszebb panorámaútja, amely ezen a csodálatos hegyvidéken kanyarog keresztül. A régió ideális pihentető túrákhoz és természetmegfigyeléshez.",
      "ro": "Parcul Biosferei Nockberge din Carintia este cunoscut pentru culmile sale blânde și rotunde (Nocken), care contrastează puternic cu vârfurile accidentate din alte regiuni alpine. Oferă o experiență unică a naturii cu plante și animale rare, precum și pășuni alpine vaste. Nockalmstraße este unul dintre cele mai frumoase drumuri panoramice din Austria, șerpuind prin acest magnific peisaj montan. Regiunea este ideală pentru drumeții relaxante și observarea naturii.",
      "en": "The Nockberge Biosphere Reserve in Carinthia is known for its gentle, rounded mountain tops (Nocken), which contrast sharply with the rugged peaks of other Alpine regions. It offers a unique nature experience with rare plants and animals as well as vast Alpine pastures. The Nockalm Road is one of the most beautiful panoramic roads in Austria, winding through this magnificent mountain landscape. The region is ideal for relaxing hikes and nature observation."
    },
    "facts": {
      "de": [
        "Die Nockberge bestehen vorwiegend aus Schiefergestein, was ihre runde Form erklärt.",
        "Die Nockalmstraße ist 34 Kilometer lang und hat 52 Kehren.",
        "Der Park ist seit 2012 als UNESCO-Biosphärenpark anerkannt.",
        "In den Nockbergen wächst der Speik, eine stark duftende Baldrianart.",
        "Thermalquellen in der Region wie in Bad Kleinkirchheim sind seit Jahrhunderten beliebt.",
        "Das Karlbad ist das älteste Bauernbad Österreichs und liegt in den Nockbergen."
      ],
      "hu": [
        "A Nockberge főleg palakőzetből áll, ami megmagyarázza a hegyek kerekded formáját.",
        "A Nockalmstraße 34 kilométer hosszú és 52 hajtűkanyarral rendelkezik.",
        "A park 2012 óta UNESCO Bioszféraparkként van elismerve.",
        "A Nockbergében terem a speik, egy erősen illatozó macskagyökérféle.",
        "A régió hőforrásai, mint a Bad Kleinkirchheim-iek, évszázadok óta népszerűek.",
        "A Karlbad Ausztria legrégebbi parasztfürdője, amely a Nockbergében található."
      ],
      "ro": [
        "Munții Nockberge constau în principal din roci de șist, ceea ce explică forma lor rotundă.",
        "Drumul Nockalm are o lungime de 34 de kilometri și are 52 de curbe în ac de păr.",
        "Parcul a fost recunoscut ca o rezervație a biosferei UNESCO din 2012.",
        "Valeriana celtică (Speik), cu un miros puternic, crește în Nockberge.",
        "Izvoarele termale din regiune, precum cele din Bad Kleinkirchheim, sunt populare de secole.",
        "Karlbad este cel mai vechi spa tradițional din Austria și se află în Nockberge."
      ],
      "en": [
        "The Nockberge consist mainly of slate rock, which explains their round shape.",
        "The Nockalm Road is 34 kilometers long and has 52 hairpin bends.",
        "The park has been recognized as a UNESCO Biosphere Reserve since 2012.",
        "Valeriana celtica (Speik), a strongly scented valerian plant, grows in the Nockberge.",
        "Thermal springs in the region, such as those in Bad Kleinkirchheim, have been popular for centuries.",
        "The Karlbad is the oldest traditional spa in Austria and is located in the Nockberge."
      ]
    }
  },
  {
    "id": "at-kalkalpen-np",
    "type": "mountain",
    "parent": "AT-4",
    "coords": [
      14.3,
      47.8
    ],
    "name": {
      "de": "Nationalpark Kalkalpen",
      "hu": "Kalkalpen Nemzeti Park",
      "ro": "Parcul Național Kalkalpen",
      "en": "Kalkalpen National Park"
    },
    "image": "/geo-images/austria/kalkalpen-np.webp",
    "description": {
      "de": "Der Nationalpark Kalkalpen in Oberösterreich schützt das größte zusammenhängende Waldgebiet Österreichs. Er besticht durch tiefe Schluchten, unberührte Gebirgsbäche und ausgedehnte Buchenwälder, die zum UNESCO-Weltnaturerbe zählen. Das Gebiet ist ein Rückzugsort für seltene Tierarten wie den Luchs. Wanderer und Radfahrer finden hier ein riesiges Wegenetz in einer der wildesten Landschaften der Alpen.",
      "hu": "A felső-ausztriai Kalkalpen (Mészkő-Alpok) Nemzeti Park Ausztria legnagyobb egybefüggő erdőterületét védi. Lenyűgöző mély szurdokaival, érintetlen hegyi patakjaival és hatalmas bükkerdeivel, amelyek az UNESCO Természeti Világörökség részét képezik. A terület olyan ritka állatfajok menedéke, mint például az eurázsiai hiúz. A túrázók és kerékpárosok hatalmas úthálózatot találnak itt az Alpok egyik legvadabb táján.",
      "ro": "Parcul Național Kalkalpen din Austria Superioară protejează cea mai mare zonă forestieră contiguă din Austria. Impresionează cu defileele adânci, pâraiele de munte virgine și pădurile extinse de fagi care fac parte din Patrimoniul Natural Mondial UNESCO. Zona este un refugiu pentru specii de animale rare, precum râsul. Drumeții și bicicliștii vor găsi aici o rețea imensă de trasee în unul dintre cele mai sălbatice peisaje din Alpi.",
      "en": "The Kalkalpen National Park in Upper Austria protects the largest contiguous forest area in Austria. It impresses with its deep gorges, pristine mountain streams, and extensive beech forests, which are part of the UNESCO World Natural Heritage. The area is a refuge for rare animal species such as the lynx. Hikers and cyclists will find a huge network of trails here in one of the wildest landscapes of the Alps."
    },
    "facts": {
      "de": [
        "Der Nationalpark umfasst das Sengsengebirge und das Reichraminger Hintergebirge.",
        "Vier Fünftel der Nationalparkfläche sind von Wald bedeckt.",
        "Die Buchenwälder im Park gehören zum UNESCO-Welterbe der alten Buchenwälder.",
        "Im Park leben über 30 Säugetierarten und rund 80 Brutvogelarten.",
        "Der Luchs ist seit Ende der 1990er Jahre hier wieder heimisch.",
        "Das Nationalparkzentrum befindet sich in Molln."
      ],
      "hu": [
        "A nemzeti park magában foglalja a Sengsen-hegységet és a Reichramingi Hintergebirgét.",
        "A nemzeti park területének négyötödét erdő borítja.",
        "A park bükkerdei az ősbükkösök UNESCO Világörökségének részei.",
        "A parkban több mint 30 emlősfaj és mintegy 80 költő madárfaj él.",
        "A hiúz az 1990-es évek vége óta ismét honos itt.",
        "A Nemzeti Park Látogatóközpontja Mollnban található."
      ],
      "ro": [
        "Parcul național include Munții Sengsen și Reichraminger Hintergebirge.",
        "Patru cincimi din suprafața parcului național sunt acoperite de păduri.",
        "Pădurile de fag din parc fac parte din Patrimoniul Mondial UNESCO al pădurilor primare de fag.",
        "Peste 30 de specii de mamifere și aproximativ 80 de specii de păsări cuibăritoare trăiesc în parc.",
        "Râsul a devenit din nou o specie nativă aici de la sfârșitul anilor 1990.",
        "Centrul parcului național este situat în Molln."
      ],
      "en": [
        "The national park includes the Sengsen Mountains and the Reichraminger Hintergebirge.",
        "Four-fifths of the national park area is covered by forest.",
        "The beech forests in the park belong to the UNESCO World Heritage of primeval beech forests.",
        "Over 30 mammal species and about 80 breeding bird species live in the park.",
        "The lynx has been native here again since the late 1990s.",
        "The national park center is located in Molln."
      ]
    }
  },
  {
    "id": "at-gesauze",
    "type": "mountain",
    "parent": "AT-6",
    "coords": [
      14.65,
      47.5833
    ],
    "name": {
      "de": "Nationalpark Gesäuse",
      "hu": "Gesäuse Nemzeti Park",
      "ro": "Parcul Național Gesäuse",
      "en": "Gesäuse National Park"
    },
    "image": "/geo-images/austria/gesauze.webp",
    "description": {
      "de": "Das Gesäuse in der Steiermark ist bekannt für seine schroffen Kalkgipfel, die steil über dem tosenden Fluss Enns aufragen. Der Nationalpark Gesäuse schützt dieses einzigartige Durchbruchstal, das bei Wildwassersportlern und Kletterern gleichermaßen beliebt ist. Das Motto des Parks lautet 'Wildes Wasser, steiler Fels', was die Landschaft perfekt beschreibt. Es ist der jüngste und drittgrößte Nationalpark Österreichs.",
      "hu": "A stájerországi Gesäuse vad mészkőcsúcsairól ismert, amelyek meredeken emelkednek a dübörgő Enns folyó fölé. A Gesäuse Nemzeti Park ezt az egyedülálló áttöréses völgyet védi, amely egyaránt népszerű a vadvízi evezősök és a sziklamászók körében. A park mottója: 'Vad víz, meredek szikla', ami tökéletesen leírja a tájat. Ez Ausztria legfiatalabb és harmadik legnagyobb nemzeti parkja.",
      "ro": "Gesäuse din Stiria este cunoscut pentru vârfurile sale abrupte de calcar care se ridică deasupra râului tumultuos Enns. Parcul Național Gesäuse protejează această vale unică, care este populară în rândul pasionaților de sporturi de apă albă și alpiniștilor deopotrivă. Deviza parcului este „Apă sălbatică, stâncă abruptă”, care descrie perfect peisajul. Este cel mai tânăr și al treilea cel mai mare parc național din Austria.",
      "en": "The Gesäuse in Styria is known for its rugged limestone peaks rising steeply above the roaring Enns river. The Gesäuse National Park protects this unique gorge valley, which is popular with whitewater sports enthusiasts and rock climbers alike. The park's motto is 'Wild water, steep rock', which perfectly describes the landscape. It is the youngest and third largest national park in Austria."
    },
    "facts": {
      "de": [
        "Der Name 'Gesäuse' stammt vom lauten Rauschen (Sausen) des Flusses Enns.",
        "Der Nationalpark wurde im Jahr 2002 gegründet.",
        "Die Hochtor-Gruppe bildet mit über 2.300 Metern die höchsten Erhebungen im Park.",
        "Das Gesäuse gilt als eine der Wiegen des alpinen Klettersports.",
        "Der Park weist eine der höchsten Endemiten-Dichten in den Alpen auf (nur hier vorkommende Arten).",
        "Der Weidendom ist das lebende Besucherzentrum des Nationalparks."
      ],
      "hu": [
        "A 'Gesäuse' név az Enns folyó hangos zúgásából (Sausen) származik.",
        "A nemzeti parkot 2002-ben alapították.",
        "A Hochtor-csoport alkotja a park legmagasabb pontjait, több mint 2300 méterrel.",
        "A Gesäuse az alpesi sziklamászás egyik bölcsőjének számít.",
        "A park az Alpok egyik legnagyobb endemikus fajok sűrűségével rendelkezik (csak itt előforduló fajok).",
        "A Fűzfakupola (Weidendom) a nemzeti park élő látogatóközpontja."
      ],
      "ro": [
        "Numele „Gesäuse” provine de la vuietul puternic (Sausen) al râului Enns.",
        "Parcul național a fost înființat în 2002.",
        "Grupul Hochtor formează cele mai înalte vârfuri din parc la peste 2.300 de metri.",
        "Gesäuse este considerat unul dintre leagănele alpinismului.",
        "Parcul are una dintre cele mai mari densități de specii endemice din Alpi (specii care apar doar aici).",
        "Domul de Salcie (Weidendom) este centrul viu al vizitatorilor parcului național."
      ],
      "en": [
        "The name 'Gesäuse' comes from the loud roaring (Sausen) of the Enns river.",
        "The national park was founded in 2002.",
        "The Hochtor group forms the highest elevations in the park at over 2,300 meters.",
        "The Gesäuse is considered one of the cradles of Alpine rock climbing.",
        "The park has one of the highest densities of endemics in the Alps (species found only here).",
        "The Willow Dome (Weidendom) is the living visitor center of the national park."
      ]
    }
  },
  {
    "id": "at-thayatal-np",
    "type": "landmark",
    "parent": "AT-3",
    "coords": [
      15.8833,
      48.8333
    ],
    "name": {
      "de": "Nationalpark Thayatal",
      "hu": "Thayatal Nemzeti Park",
      "ro": "Parcul Național Thayatal",
      "en": "Thayatal National Park"
    },
    "image": "/geo-images/austria/thayatal-np.webp",
    "description": {
      "de": "Der Nationalpark Thayatal in Niederösterreich ist der kleinste Nationalpark Österreichs und grenzt an den tschechischen Národní park Podyjí. Er schützt das malerische, tief eingeschnittene Tal der Thaya, das mit seiner unglaublichen Artenvielfalt begeistert. Die Landschaft zeichnet sich durch dichte Wälder, steile Felswände und bunte Wiesen aus. Die Ruine Kaja im Park ist ein eindrucksvolles Zeugnis des Mittelalters.",
      "hu": "Az alsó-ausztriai Thayatal Nemzeti Park Ausztria legkisebb nemzeti parkja, és a cseh Národní park Podyjí-vel határos. A Thaya folyó festői, mélyen bevágott völgyét védi, amely hihetetlen fajgazdagságával varázsolja el a látogatókat. A tájat sűrű erdők, meredek sziklafalak és színes rétek jellemzik. A parkban található Kaja várrom a középkor lenyűgöző emléke.",
      "ro": "Parcul Național Thayatal din Austria Inferioară este cel mai mic parc național din Austria și se învecinează cu Parcul Național Podyjí din Cehia. Protejează valea pitorească și adâncă a râului Thaya, care impresionează prin biodiversitatea sa incredibilă. Peisajul este caracterizat de păduri dense, stânci abrupte și pajiști colorate. Ruinele castelului Kaja din parc sunt o mărturie impresionantă a Evului Mediu.",
      "en": "The Thayatal National Park in Lower Austria is the smallest national park in Austria and borders the Czech Národní park Podyjí. It protects the picturesque, deeply cut valley of the Thaya river, which impresses with its incredible biodiversity. The landscape is characterized by dense forests, steep rock faces and colorful meadows. The Kaja castle ruins in the park are an impressive testament to the Middle Ages."
    },
    "facts": {
      "de": [
        "Der Nationalpark Thayatal ist mit rund 1.330 Hektar der kleinste in Österreich.",
        "Das Thayatal ist ein klassisches Durchbruchstal mit vielen Flussschleifen.",
        "Im Park leben sehr seltene Wildkatzen, die als heimliche Jäger gelten.",
        "Die Smaragdeidechse ist eines der markantesten Tiere in der Region.",
        "Die Grenze zwischen Österreich und Tschechien verläuft oft direkt in der Mitte der Thaya.",
        "Der Park wurde im Jahr 2000 feierlich eröffnet."
      ],
      "hu": [
        "A Thayatal Nemzeti Park a maga mintegy 1330 hektárjával a legkisebb Ausztriában.",
        "A Thayatal egy klasszikus áttöréses völgy sok folyókanyarulattal.",
        "A parkban nagyon ritka vadmacskák élnek, amelyeket rejtőzködő vadászoknak tartanak.",
        "A zöld gyík az egyik legjellegzetesebb állat a régióban.",
        "Ausztria és Csehország határa gyakran közvetlenül a Thaya közepén húzódik.",
        "A parkot 2000-ben nyitották meg ünnepélyesen."
      ],
      "ro": [
        "Cu o suprafață de aproximativ 1.330 de hectare, Parcul Național Thayatal este cel mai mic din Austria.",
        "Valea Thaya este o vale de defileu clasică cu multe coturi de râu.",
        "Pisicile sălbatice foarte rare, considerate vânători ascunși, trăiesc în parc.",
        "Șopârla de smarald este unul dintre cele mai distinctive animale din regiune.",
        "Granița dintre Austria și Cehia se află adesea direct în mijlocul râului Thaya.",
        "Parcul a fost deschis oficial în anul 2000."
      ],
      "en": [
        "At around 1,330 hectares, the Thayatal National Park is the smallest in Austria.",
        "The Thaya Valley is a classic gorge valley with many river meanders.",
        "Very rare wildcats, considered elusive hunters, live in the park.",
        "The emerald lizard is one of the most distinctive animals in the region.",
        "The border between Austria and the Czech Republic often runs directly down the middle of the Thaya.",
        "The park was officially opened in the year 2000."
      ]
    }
  },
  {
    "id": "at-oetztal",
    "type": "mountain",
    "parent": "AT-7",
    "coords": [
      10.9,
      47
    ],
    "name": {
      "de": "Ötztal",
      "hu": "Ötztal",
      "ro": "Valea Ötz",
      "en": "Ötztal"
    },
    "image": "/geo-images/austria/oetztal.webp",
    "description": {
      "de": "Das Ötztal in Tirol ist das längste Seitental des Inntals und umgeben von majestätischen Dreitausendern. Bekannt ist das Tal für seine erstklassigen Wintersportorte wie Sölden und Obergurgl. Im Sommer ist das Ötztal ein Paradies für Wanderer, Kletterer und Mountainbiker. Berühmtheit erlangte das Tal 1991 durch den Fund der Gletschermumie 'Ötzi' am Tisenjoch.",
      "hu": "A tiroli Ötztal az Inn völgyének leghosszabb mellékvölgye, fenséges háromezres hegyekkel körülvéve. A völgy olyan első osztályú téli sportközpontjairól ismert, mint Sölden és Obergurgl. Nyáron az Ötztal a túrázók, hegymászók és hegyikerékpárosok paradicsoma. A völgy 1991-ben szerzett hírnevet, amikor a Tisenjochon megtalálták az 'Ötzi' nevű gleccsermúmiát.",
      "ro": "Valea Ötz (Ötztal) din Tirol este cea mai lungă vale laterală a văii Innului și este înconjurată de munți maiestuoși de 3.000 de metri. Valea este cunoscută pentru stațiunile sale de sporturi de iarnă de primă clasă, precum Sölden și Obergurgl. Vara, Ötztal este un paradis pentru drumeții, alpiniști și cicliștii de munte. Valea a câștigat faimă în 1991, odată cu descoperirea mumiei de pe ghețar „Ötzi” la Tisenjoch.",
      "en": "The Ötztal in Tyrol is the longest side valley of the Inn Valley and is surrounded by majestic 3,000-meter peaks. The valley is known for its first-class winter sports resorts such as Sölden and Obergurgl. In summer, the Ötztal is a paradise for hikers, climbers, and mountain bikers. The valley gained fame in 1991 with the discovery of the glacier mummy 'Ötzi' at the Tisenjoch."
    },
    "facts": {
      "de": [
        "Das Ötztal ist rund 65 Kilometer lang.",
        "Der Stuibenfall im Ötztal ist mit 159 Metern der höchste Wasserfall Tirols.",
        "Der Fundort der Gletschermumie Ötzi liegt knapp an der Grenze zu Italien.",
        "Die Ötztaler Gletscherstraße ist eine der höchsten asphaltierten Straßen der Alpen.",
        "Sölden ist einer der bekanntesten und größten Wintersportorte Europas.",
        "Der höchste Berg Tirols, die Wildspitze (3.768 m), liegt in den Ötztaler Alpen."
      ],
      "hu": [
        "Az Ötztal mintegy 65 kilométer hosszú.",
        "Az Ötztalban található Stuibenfall 159 méterével Tirol legmagasabb vízesése.",
        "Ötzi, a gleccsermúmia megtalálásának helye közvetlenül az olasz határ közelében található.",
        "Az Ötztaler Gletscherstraße az Alpok egyik legmagasabban fekvő aszfaltozott útja.",
        "Sölden Európa egyik legismertebb és legnagyobb téli sportközpontja.",
        "Tirol legmagasabb hegye, a Wildspitze (3768 m) az Ötztal-Alpokban található."
      ],
      "ro": [
        "Valea Ötztal are aproximativ 65 de kilometri lungime.",
        "Cascada Stuibenfall din Ötztal este cea mai înaltă cascadă din Tirol, cu o înălțime de 159 de metri.",
        "Locul descoperirii mumiei de gheață Ötzi se află chiar la granița cu Italia.",
        "Ötztaler Gletscherstraße este unul dintre cele mai înalte drumuri asfaltate din Alpi.",
        "Sölden este una dintre cele mai cunoscute și mai mari stațiuni de sporturi de iarnă din Europa.",
        "Cel mai înalt munte din Tirol, Wildspitze (3.768 m), este situat în Alpii Ötztal."
      ],
      "en": [
        "The Ötztal is about 65 kilometers long.",
        "The Stuibenfall waterfall in the Ötztal is the highest waterfall in Tyrol at 159 meters.",
        "The site where the glacier mummy Ötzi was found is right on the border with Italy.",
        "The Ötztal Glacier Road is one of the highest paved roads in the Alps.",
        "Sölden is one of the most famous and largest winter sports resorts in Europe.",
        "The highest mountain in Tyrol, the Wildspitze (3,768 m), is located in the Ötztal Alps."
      ]
    }
  },
  {
    "id": "at-eisriesenwelt",
    "type": "landmark",
    "parent": "AT-5",
    "coords": [
      13.1908,
      47.5031
    ],
    "name": {
      "de": "Eisriesenwelt Werfen",
      "hu": "Eisriesenwelt jégbarlang",
      "ro": "Peștera de Gheață Eisriesenwelt",
      "en": "Eisriesenwelt Ice Cave"
    },
    "image": "/geo-images/austria/eisriesenwelt.webp",
    "description": {
      "de": "Die Eisriesenwelt in Werfen ist die größte Eishöhle der Welt. Das Höhlensystem im Tennengebirge erstreckt sich über eine Gesamtlänge von rund 42 Kilometern. Die fantastischen Eisformationen entstehen im Frühjahr, wenn Schmelzwasser in die eiskalte Höhle sickert und dort gefriert. Besucher können dieses eisige Naturwunder im Rahmen von geführten Touren mit Grubenlampen erkunden.",
      "hu": "A werfeni Eisriesenwelt a világ legnagyobb jégbarlangja. A Tennengebirge hegységben lévő barlangrendszer teljes hossza mintegy 42 kilométer. A fantasztikus jégképződmények tavasszal keletkeznek, amikor az olvadékvíz beszivárog a jéghideg barlangba és ott megfagy. A látogatók bányászlámpás vezetett túrákon fedezhetik fel ezt a fagyos természeti csodát.",
      "ro": "Eisriesenwelt din Werfen este cea mai mare peșteră de gheață din lume. Sistemul de peșteri din Munții Tennengebirge se întinde pe o lungime totală de aproximativ 42 de kilometri. Formațiunile fantastice de gheață se creează primăvara, când apa topită se infiltrează în peștera înghețată și îngheață acolo. Vizitatorii pot explora această minune de gheață a naturii în tururi ghidate, cu lămpi de miner.",
      "en": "The Eisriesenwelt in Werfen is the largest ice cave in the world. The cave system in the Tennengebirge mountain range extends over a total length of around 42 kilometers. The fantastic ice formations are created in spring when meltwater seeps into the freezing cave and freezes there. Visitors can explore this icy natural wonder on guided tours with miner's lamps."
    },
    "facts": {
      "de": [
        "Die Eisriesenwelt gilt mit 42 km als das größte Eishöhlensystem der Erde.",
        "Das Höhlenportal liegt auf einer Höhe von 1.641 Metern.",
        "Die Höhle wurde 1879 vom Naturforscher Anton Posselt entdeckt.",
        "Im Inneren der Höhle herrschen auch im Sommer Temperaturen unter 0 Grad.",
        "Die Besucher bewältigen bei der Tour im Inneren der Höhle 700 Stufen.",
        "Die Höhle ist nur von Mai bis Oktober für die Öffentlichkeit zugänglich."
      ],
      "hu": [
        "A 42 km hosszú Eisriesenwelt a Föld legnagyobb jégbarlangrendszere.",
        "A barlang bejárata 1641 méteres magasságban található.",
        "A barlangot 1879-ben fedezte fel Anton Posselt természettudós.",
        "A barlang belsejében még nyáron is 0 fok alatti hőmérséklet uralkodik.",
        "A látogatók a barlang belsejében tett túra során 700 lépcsőfokot másznak meg.",
        "A barlang csak májustól októberig látogatható a nagyközönség számára."
      ],
      "ro": [
        "Cu o lungime de 42 km, Eisriesenwelt este considerat cel mai mare sistem de peșteri de gheață de pe Pământ.",
        "Portalul peșterii este situat la o altitudine de 1.641 metri.",
        "Peștera a fost descoperită în 1879 de naturalistul Anton Posselt.",
        "În interiorul peșterii, temperaturile sunt sub 0 grade chiar și vara.",
        "Vizitatorii urcă 700 de trepte în timpul turului din interiorul peșterii.",
        "Peștera este deschisă publicului doar din mai până în octombrie."
      ],
      "en": [
        "At 42 km, the Eisriesenwelt is considered the largest ice cave system on Earth.",
        "The cave portal is located at an altitude of 1,641 meters.",
        "The cave was discovered in 1879 by the naturalist Anton Posselt.",
        "Inside the cave, temperatures are below 0 degrees even in summer.",
        "Visitors climb 700 steps during the tour inside the cave.",
        "The cave is only open to the public from May to October."
      ]
    }
  },
  {
    "id": "at-donau-auen-np",
    "type": "landmark",
    "parent": "AT-3",
    "coords": [
      16.6667,
      48.1333
    ],
    "name": {
      "de": "Nationalpark Donau-Auen",
      "hu": "Donau-Auen Nemzeti Park",
      "ro": "Parcul Național Donau-Auen",
      "en": "Danube-Auen National Park"
    },
    "image": "/geo-images/austria/donau-auen-np.webp",
    "description": {
      "de": "Der Nationalpark Donau-Auen erstreckt sich zwischen Wien und Bratislava und bewahrt eine der letzten großen unverbauten Flussauenlandschaften Mitteleuropas. Die Auwälder werden von der Dynamik der Donau geprägt und verändern durch Hochwasser und Trockenperioden ständig ihr Gesicht. Das Gebiet ist Lebensraum für zahlreiche bedrohte Tier- und Pflanzenarten, darunter der Seeadler. Besucher können die Auen bei Bootsfahrten oder Wanderungen erkunden.",
      "hu": "A Donau-Auen Nemzeti Park Bécs és Pozsony között húzódik, és Közép-Európa egyik utolsó nagy, szabályozatlan folyami ártéri táját őrzi. Az ártéri erdőket a Duna dinamikája alakítja, és arculatukat az áradások és aszályok folyamatosan változtatják. A terület számos veszélyeztetett állat- és növényfaj, köztük a rétisas élőhelye. A látogatók hajókirándulásokon vagy gyalogtúrákon fedezhetik fel az árteret.",
      "ro": "Parcul Național Donau-Auen se întinde între Viena și Bratislava și păstrează unul dintre ultimele peisaje mari de câmpie inundabilă a unui râu nereglat din Europa Centrală. Pădurile luncilor inundabile sunt modelate de dinamica Dunării și își schimbă constant aspectul din cauza inundațiilor și a secetei. Zona este un habitat pentru numeroase specii de animale și plante pe cale de dispariție, inclusiv vulturul cu coadă albă. Vizitatorii pot explora câmpiile inundabile în excursii cu barca sau drumeții.",
      "en": "The Danube-Auen National Park stretches between Vienna and Bratislava and preserves one of the last large, unregulated river floodplain landscapes in Central Europe. The floodplain forests are shaped by the dynamics of the Danube and are constantly changing their appearance due to floods and dry periods. The area is a habitat for numerous endangered animal and plant species, including the white-tailed eagle. Visitors can explore the floodplains on boat trips or hikes."
    },
    "facts": {
      "de": [
        "Die Donau-Auen sind die größte naturnahe Flussauenlandschaft Mitteleuropas.",
        "Der Park wurde 1996 gegründet, nachdem der Bau eines Kraftwerks bei Hainburg verhindert wurde.",
        "Im Park sind über 800 höhere Pflanzenarten und hunderte Vogelarten heimisch.",
        "Der Eisvogel ist das Symboltier des Nationalparks Donau-Auen.",
        "Europäische Sumpfschildkröten finden hier einen ihrer letzten Rückzugsorte in Österreich.",
        "Das Schloss Orth ist das Besucherzentrum (nationalpark-zentrum) der Donau-Auen."
      ],
      "hu": [
        "A Donau-Auen Közép-Európa legnagyobb, természetközeli állapotban lévő folyami ártéri tája.",
        "A parkot 1996-ban alapították, miután megakadályozták egy hainburgi erőmű építését.",
        "A parkban több mint 800 magasabb rendű növényfaj és több száz madárfaj él.",
        "A jégmadár a Donau-Auen Nemzeti Park szimbólumállata.",
        "Az európai mocsáriteknősök itt találják meg utolsó menedékeik egyikét Ausztriában.",
        "Az Orthi kastély ad otthont a Donau-Auen Látogatóközpontnak."
      ],
      "ro": [
        "Donau-Auen este cel mai mare peisaj de câmpie inundabilă naturală din Europa Centrală.",
        "Parcul a fost fondat în 1996 după ce a fost împiedicată construirea unei centrale electrice la Hainburg.",
        "Peste 800 de specii de plante superioare și sute de specii de păsări sunt native în parc.",
        "Pescărușul albastru este animalul simbol al Parcului Național Donau-Auen.",
        "Țestoasele de baltă europene își găsesc aici unul dintre ultimele refugii din Austria.",
        "Castelul Orth este centrul de vizitatori al parcului Donau-Auen."
      ],
      "en": [
        "The Donau-Auen is the largest near-natural river floodplain landscape in Central Europe.",
        "The park was founded in 1996 after the construction of a power plant near Hainburg was prevented.",
        "Over 800 higher plant species and hundreds of bird species are native to the park.",
        "The kingfisher is the symbol animal of the Danube-Auen National Park.",
        "European pond turtles find one of their last refuges in Austria here.",
        "Orth Castle is the visitor center of the Donau-Auen."
      ]
    }
  },
  {
    "id": "at-gottweig-abbey",
    "type": "historical",
    "parent": "AT-3",
    "coords": [
      15.6167,
      48.3667
    ],
    "name": {
      "de": "Stift Göttweig",
      "hu": "Göttweigi apátság",
      "ro": "Abația Göttweig",
      "en": "Göttweig Abbey"
    },
    "image": "/geo-images/austria/gottweig-abbey.webp",
    "description": {
      "de": "Das Stift Göttweig ist ein Benediktinerkloster auf einem Hügel südlich von Krems in Niederösterreich. Aufgrund seiner exponierten Lage und prächtigen Architektur wird es oft als das 'Österreichische Montecassino' bezeichnet. Das Stift gehört zusammen mit der Kulturlandschaft Wachau zum UNESCO-Welterbe. Besonders beeindruckend ist die monumentale Kaiserstiege im Inneren des Klosters, eines der schönsten barocken Treppenhäuser Europas.",
      "hu": "A Göttweigi apátság egy bencés kolostor Alsó-Ausztriában, a Krems-től délre fekvő hegyen. Kiemelkedő fekvése és pompás építészete miatt gyakran 'Osztrák Montecassino'-nak is nevezik. Az apátság a wachaui kultúrtájjal együtt az UNESCO Világörökség része. Különösen lenyűgöző a kolostor belsejében található monumentális Császárlépcső, amely Európa egyik legszebb barokk lépcsőháza.",
      "ro": "Abația Göttweig este o mănăstire benedictină pe un deal la sud de Krems, în Austria Inferioară. Datorită locației sale expuse și arhitecturii magnifice, este adesea denumită „Montecassino austriac”. Abația, împreună cu peisajul cultural Wachau, face parte din Patrimoniul Mondial UNESCO. Deosebit de impresionantă este scara imperială monumentală din interiorul mănăstirii, una dintre cele mai frumoase scări baroce din Europa.",
      "en": "Göttweig Abbey is a Benedictine monastery on a hill south of Krems in Lower Austria. Due to its exposed location and magnificent architecture, it is often referred to as the 'Austrian Montecassino'. The abbey, together with the Wachau cultural landscape, is a UNESCO World Heritage Site. Particularly impressive is the monumental Imperial Staircase inside the monastery, one of the most beautiful baroque staircases in Europe."
    },
    "facts": {
      "de": [
        "Das Stift Göttweig wurde 1083 vom Bischof Altmann von Passau gegründet.",
        "Nach einem Brand 1718 wurde das Stift im Barockstil unter Johann Lukas von Hildebrandt neu erbaut.",
        "Das Deckenfresko über der Kaiserstiege wurde von Paul Troger gemalt.",
        "Göttweig ist auch ein bedeutendes Weingut mit einer langen Weinbautradition.",
        "In der Stiftsbibliothek befinden sich rund 150.000 Bände.",
        "Das Kloster überblickt das Donautal und den östlichen Rand der Wachau."
      ],
      "hu": [
        "A Göttweigi apátságot 1083-ban alapította Altmann passaui püspök.",
        "Egy 1718-as tűzvész után a kolostort barokk stílusban építették újjá Johann Lukas von Hildebrandt vezetésével.",
        "A Császárlépcső feletti mennyezetfreskót Paul Troger festette.",
        "Göttweig hosszú borászati hagyományokkal rendelkező, jelentős borbirtok is egyben.",
        "A kolostor könyvtárában mintegy 150 000 kötet található.",
        "A kolostorból kilátás nyílik a Duna-völgyre és a Wachau keleti szélére."
      ],
      "ro": [
        "Abația Göttweig a fost fondată în 1083 de episcopul Altmann din Passau.",
        "După un incendiu în 1718, abația a fost reconstruită în stil baroc sub conducerea lui Johann Lukas von Hildebrandt.",
        "Fresca de pe tavanul deasupra Scării Imperiale a fost pictată de Paul Troger.",
        "Göttweig este, de asemenea, o cramă importantă, cu o lungă tradiție viticolă.",
        "Biblioteca mănăstirii conține în jur de 150.000 de volume.",
        "Mănăstirea are vedere la Valea Dunării și la marginea estică a regiunii Wachau."
      ],
      "en": [
        "Göttweig Abbey was founded in 1083 by Bishop Altmann of Passau.",
        "After a fire in 1718, the abbey was rebuilt in Baroque style under Johann Lukas von Hildebrandt.",
        "The ceiling fresco above the Imperial Staircase was painted by Paul Troger.",
        "Göttweig is also an important winery with a long viticultural tradition.",
        "The abbey library contains around 150,000 volumes.",
        "The monastery overlooks the Danube Valley and the eastern edge of the Wachau."
      ]
    }
  },
  {
    "id": "at-stift-admont",
    "type": "historical",
    "parent": "AT-6",
    "coords": [
      14.46,
      47.575
    ],
    "name": {
      "de": "Stift Admont",
      "hu": "Admonti apátság",
      "ro": "Abația Admont",
      "en": "Admont Abbey"
    },
    "image": "/geo-images/austria/stift-admont.webp",
    "description": {
      "de": "Das Stift Admont in der Steiermark ist das älteste bestehende Kloster in der Region und weltweit bekannt für seine atemberaubende Stiftsbibliothek. Sie ist die größte klösterliche Bibliothek der Welt und ein Meisterwerk des Spätbarock. Die prachtvollen Deckenfresken und die kunstvollen Schnitzereien machen sie zu einem architektonischen Juwel. Darüber hinaus beherbergt das Stift bedeutende Sammlungen von Kunst und Naturgeschichte.",
      "hu": "A stájerországi Admonti apátság a régió legrégebbi fennmaradt kolostora, és világszerte ismert lélegzetelállító könyvtáráról. Ez a világ legnagyobb kolostori könyvtára, a késő barokk mesterműve. A pompás mennyezeti freskók és a művészi fafaragások igazi építészeti ékszerdobozzá teszik. Emellett az apátság jelentős művészeti és természettudományi gyűjteményeknek ad otthont.",
      "ro": "Abația Admont din Stiria este cea mai veche mănăstire existentă din regiune și este cunoscută în întreaga lume pentru biblioteca sa uluitoare. Este cea mai mare bibliotecă monahală din lume și o capodoperă a barocului târziu. Frescele magnifice de pe tavan și sculpturile ornamentate o transformă într-o bijuterie arhitecturală. În plus, mănăstirea găzduiește colecții importante de artă și istorie naturală.",
      "en": "Admont Abbey in Styria is the oldest existing monastery in the region and is known worldwide for its breathtaking abbey library. It is the largest monastic library in the world and a masterpiece of the Late Baroque. The magnificent ceiling frescoes and ornate carvings make it an architectural jewel. In addition, the abbey houses important collections of art and natural history."
    },
    "facts": {
      "de": [
        "Das Stift Admont wurde im Jahr 1074 gegründet.",
        "Die Stiftsbibliothek ist 70 Meter lang, 14 Meter breit und 13 Meter hoch.",
        "Die Bibliothek beherbergt rund 70.000 Bände, der gesamte Stiftsbestand umfasst 200.000 Bände.",
        "Die Deckenfresken der Bibliothek wurden von Bartolomeo Altomonte geschaffen.",
        "Vier überlebensgroße Holzskulpturen in der Bibliothek stellen die 'Vier letzten Dinge' dar (Tod, Gericht, Hölle, Himmel).",
        "Ein verheerender Brand im Jahr 1865 zerstörte fast das gesamte Kloster, verschonte jedoch die Bibliothek."
      ],
      "hu": [
        "Az Admonti apátságot 1074-ben alapították.",
        "A kolostori könyvtár 70 méter hosszú, 14 méter széles és 13 méter magas.",
        "A könyvtár mintegy 70 000 kötetnek ad otthont, a teljes apátsági állomány 200 000 kötet.",
        "A könyvtár mennyezetfreskóit Bartolomeo Altomonte készítette.",
        "A könyvtárban található négy életnagyságnál nagyobb faszobor az 'utolsó négy dolgot' ábrázolja (Halál, Ítélet, Pokol, Mennyország).",
        "Egy 1865-ös pusztító tűzvész szinte az egész kolostort elpusztította, de a könyvtárat megkímélte."
      ],
      "ro": [
        "Abația Admont a fost fondată în anul 1074.",
        "Biblioteca mănăstirii are 70 de metri lungime, 14 metri lățime și 13 metri înălțime.",
        "Biblioteca găzduiește în jur de 70.000 de volume, fondul întregii abații cuprinzând 200.000 de volume.",
        "Frescele de pe tavanul bibliotecii au fost create de Bartolomeo Altomonte.",
        "Patru sculpturi de lemn în mărime naturală din bibliotecă reprezintă cele „Patru Ultime Lucruri” (Moartea, Judecata, Iadul, Raiul).",
        "Un incendiu devastator din 1865 a distrus aproape întreaga mănăstire, dar a cruțat biblioteca."
      ],
      "en": [
        "Admont Abbey was founded in the year 1074.",
        "The abbey library is 70 meters long, 14 meters wide and 13 meters high.",
        "The library houses around 70,000 volumes, the entire abbey collection comprises 200,000 volumes.",
        "The ceiling frescoes of the library were created by Bartolomeo Altomonte.",
        "Four larger-than-life wooden sculptures in the library represent the 'Four Last Things' (Death, Judgment, Hell, Heaven).",
        "A devastating fire in 1865 destroyed almost the entire monastery but spared the library."
      ]
    }
  },
  {
    "id": "at-salzburg-festival",
    "type": "landmark",
    "parent": "AT-5",
    "coords": [
      13.043,
      47.7972
    ],
    "name": {
      "de": "Salzburger Festspiele",
      "hu": "Salzburgi Ünnepi Játékok",
      "ro": "Festivalul de la Salzburg",
      "en": "Salzburg Festival"
    },
    "image": "/geo-images/austria/salzburg-festival.webp",
    "description": {
      "de": "Die Salzburger Festspiele sind das weltweit bedeutendste Festival der klassischen Musik und darstellenden Kunst. Seit über 100 Jahren verwandeln sie die Mozartstadt Salzburg jeden Sommer in die Kulturhauptstadt der Welt. Mit Aufführungen von Opern, Schauspielen und Konzerten auf höchstem künstlerischen Niveau ziehen sie das internationale Publikum an. Das Stück 'Jedermann' von Hugo von Hofmannsthal auf dem Domplatz ist das Herzstück des Festivals.",
      "hu": "A Salzburgi Ünnepi Játékok a klasszikus zene és előadóművészet világának legjelentősebb fesztiválja. Több mint 100 éve minden nyáron a világ kulturális fővárosává változtatják Mozart városát, Salzburgot. A legmagasabb művészi színvonalú opera-, színházi és koncertelőadásokkal vonzzák a nemzetközi közönséget. Hugo von Hofmannsthal 'Akárki' (Jedermann) című darabja a Dóm téren a fesztivál szíve.",
      "ro": "Festivalul de la Salzburg este cel mai important festival de muzică clasică și artele spectacolului din lume. De peste 100 de ani, au transformat în fiecare vară orașul lui Mozart, Salzburg, în capitala culturală a lumii. Atrag publicul internațional cu spectacole de operă, teatru și concerte la cel mai înalt nivel artistic. Piesa „Jedermann” de Hugo von Hofmannsthal din Piața Catedralei este inima festivalului.",
      "en": "The Salzburg Festival is the world's most important festival of classical music and performing arts. For over 100 years, they have transformed the city of Mozart, Salzburg, into the cultural capital of the world every summer. They attract an international audience with opera, drama and concert performances at the highest artistic level. The play 'Jedermann' (Everyman) by Hugo von Hofmannsthal on the Cathedral Square is the heart of the festival."
    },
    "facts": {
      "de": [
        "Die Festspiele wurden 1920 von Max Reinhardt, Hugo von Hofmannsthal und Richard Strauss gegründet.",
        "Das Festspielhaus-Ensemble in Salzburg umfasst das Große Festspielhaus, das Haus für Mozart und die Felsenreitschule.",
        "Der 'Jedermann' wird traditionell unter freiem Himmel auf dem Domplatz aufgeführt.",
        "Über 250.000 Besucher aus aller Welt kommen jährlich zu den Salzburger Festspielen.",
        "Das Festival dauert in der Regel fünf Wochen von Mitte Juli bis Ende August.",
        "Herbert von Karajan prägte die Festspiele in der Nachkriegszeit als Dirigent maßgeblich."
      ],
      "hu": [
        "A fesztivált 1920-ban alapította Max Reinhardt, Hugo von Hofmannsthal és Richard Strauss.",
        "A salzburgi Fesztiválpalota-együttes magában foglalja a Nagy Fesztiválpalotát, a Haus für Mozartot és a Felsenreitschulét.",
        "A 'Jedermann' című darabot hagyományosan a szabad ég alatt, a Dóm téren adják elő.",
        "Évente több mint 250 000 látogató érkezik a világ minden tájáról a Salzburgi Ünnepi Játékokra.",
        "A fesztivál általában öt hétig tart július közepétől augusztus végéig.",
        "Herbert von Karajan karmesterként döntően meghatározta az Ünnepi Játékokat a háború utáni időszakban."
      ],
      "ro": [
        "Festivalul a fost fondat în 1920 de Max Reinhardt, Hugo von Hofmannsthal și Richard Strauss.",
        "Ansamblul Festspielhaus din Salzburg include Grosses Festspielhaus, Haus für Mozart și Felsenreitschule.",
        "„Jedermann” se desfășoară în mod tradițional în aer liber în Piața Catedralei.",
        "Peste 250.000 de vizitatori din întreaga lume vin anual la Festivalul de la Salzburg.",
        "Festivalul durează de obicei cinci săptămâni, de la jumătatea lunii iulie până la sfârșitul lunii august.",
        "Herbert von Karajan, ca dirijor, a avut o influență majoră asupra festivalului în perioada postbelică."
      ],
      "en": [
        "The festival was founded in 1920 by Max Reinhardt, Hugo von Hofmannsthal and Richard Strauss.",
        "The Festspielhaus ensemble in Salzburg includes the Grosses Festspielhaus, the Haus für Mozart and the Felsenreitschule.",
        "The play 'Jedermann' is traditionally performed outdoors on the Cathedral Square.",
        "Over 250,000 visitors from all over the world come to the Salzburg Festival every year.",
        "The festival usually lasts five weeks from mid-July to the end of August.",
        "Herbert von Karajan had a major influence on the festival as a conductor in the post-war period."
      ]
    }
  },
  {
    "id": "at-minimundus",
    "type": "kid-landmark",
    "parent": "AT-2",
    "coords": [
      14.2797,
      46.6281
    ],
    "name": {
      "de": "Minimundus",
      "hu": "Minimundus",
      "ro": "Minimundus",
      "en": "Minimundus"
    },
    "image": "/geo-images/austria/minimundus.webp",
    "description": {
      "de": "Minimundus in Klagenfurt am Wörthersee ist ein beliebter Miniaturpark und wird oft als die 'kleine Welt am Wörthersee' bezeichnet. Hier können Besucher an einem einzigen Tag um die ganze Welt reisen. Der Park zeigt über 150 detailgetreue Modelle von berühmten Gebäuden, Schiffen und Zügen aus mehr als 40 Ländern im Maßstab 1:25. Es ist ein lehrreiches und faszinierendes Erlebnis für die ganze Familie.",
      "hu": "A klagenfurti Wörthersee partján található Minimundus egy népszerű miniatűrpark, amelyet gyakran 'kis világnak a Wörtherseenél' is neveznek. Itt a látogatók egyetlen nap alatt körbeutazhatják az egész világot. A parkban több mint 40 ország híres épületeinek, hajóinak és vonatainak több mint 150 részlethű, 1:25 méretarányú makettje látható. Tanulságos és lenyűgöző élmény az egész család számára.",
      "ro": "Minimundus din Klagenfurt pe Lacul Wörthersee este un parc miniatural popular și este adesea menționat ca „mica lume de pe Wörthersee”. Aici, vizitatorii pot călători în jurul lumii într-o singură zi. Parcul are peste 150 de modele detaliate ale clădirilor, navelor și trenurilor faimoase din peste 40 de țări la o scară de 1:25. Este o experiență educativă și fascinantă pentru întreaga familie.",
      "en": "Minimundus in Klagenfurt am Wörthersee is a popular miniature park and is often referred to as the 'little world on Lake Wörthersee'. Here visitors can travel around the world in a single day. The park features over 150 detailed models of famous buildings, ships and trains from more than 40 countries at a scale of 1:25. It is an educational and fascinating experience for the whole family."
    },
    "facts": {
      "de": [
        "Alle Modelle im Minimundus sind im einheitlichen Maßstab 1:25 gebaut.",
        "Der Miniaturpark wurde 1958 eröffnet.",
        "Viele der Modelle wurden aus den Originalmaterialien der echten Gebäude gefertigt (z. B. Marmor, Sandstein).",
        "Der Nettoerlös des Minimundus geht an die Hilfsorganisation 'Rettet das Kind'.",
        "Das größte Modell im Park ist der Petersdom aus Rom.",
        "Auf dem Gelände fahren auch Modellzüge, die jährlich rund 5.000 Kilometer zurücklegen."
      ],
      "hu": [
        "A Minimundus minden makettje egységes, 1:25-ös méretarányban készült.",
        "A miniatűrparkot 1958-ban nyitották meg.",
        "A makettek közül sokat a valódi épületek eredeti anyagaiból (pl. márvány, homokkő) készítettek.",
        "A Minimundus nettó bevétele a 'Mentsük meg a gyermekeket' ('Rettet das Kind') segélyszervezethez kerül.",
        "A park legnagyobb makettje a római Szent Péter-bazilika.",
        "A területen modellvonatok is közlekednek, amelyek évente mintegy 5000 kilométert tesznek meg."
      ],
      "ro": [
        "Toate modelele din Minimundus sunt construite la o scară uniformă de 1:25.",
        "Parcul în miniatură a fost deschis în 1958.",
        "Multe dintre modele au fost realizate folosind materialele originale ale clădirilor reale (de exemplu, marmură, gresie).",
        "Veniturile nete de la Minimundus merg către organizația de asistență „Rettet das Kind” (Salvați Copilul).",
        "Cel mai mare model din parc este Bazilica Sfântul Petru din Roma.",
        "În parc circulă și trenuri în miniatură care parcurg aproximativ 5.000 de kilometri anual."
      ],
      "en": [
        "All models in Minimundus are built to a uniform scale of 1:25.",
        "The miniature park was opened in 1958.",
        "Many of the models were made from the original materials of the real buildings (e.g., marble, sandstone).",
        "The net proceeds from Minimundus go to the aid organization 'Rettet das Kind' (Save the Child).",
        "The largest model in the park is St. Peter's Basilica from Rome.",
        "Model trains also run on the grounds, covering around 5,000 kilometers annually."
      ]
    }
  },
  {
    "id": "at-schladming-dachstein",
    "type": "mountain",
    "parent": "AT-6",
    "coords": [
      13.6889,
      47.3944
    ],
    "name": {
      "de": "Schladming-Dachstein",
      "hu": "Schladming-Dachstein",
      "ro": "Schladming-Dachstein",
      "en": "Schladming-Dachstein"
    },
    "image": "/geo-images/austria/schladming-dachstein.webp",
    "description": {
      "de": "Die Urlaubsregion Schladming-Dachstein in der Steiermark zählt zu den führenden Alpendestinationen Österreichs. Sie ist weltweit bekannt für die alpine Ski-Weltmeisterschaft und die berühmte 4-Berge-Skischaukel. Im Sommer verwandelt sich die Region in ein Wanderparadies mit saftigen Almwiesen, kristallklaren Bergseen und markanten Gipfeln. Der imposante Dachstein-Gletscher krönt das Panorama und lockt mit spektakulären Attraktionen.",
      "hu": "A stájerországi Schladming-Dachstein üdülőrégió Ausztria vezető alpesi úti céljai közé tartozik. Világszerte ismert az alpesisí-világbajnokságról és a híres 4 hegyet összekötő síhintáról (4-Berge-Skischaukel). Nyáron a régió túrázóparadicsommá változik, buja alpesi rétekkel, kristálytiszta hegyi tavakkal és lenyűgöző hegycsúcsokkal. Az impozáns Dachstein-gleccser koronázza meg a panorámát, és látványos attrakciókkal vonzza a látogatókat.",
      "ro": "Regiunea de vacanță Schladming-Dachstein din Stiria este una dintre cele mai importante destinații alpine din Austria. Este cunoscut în întreaga lume pentru Campionatul Mondial de Schi Alpin și faimosul leagăn de schi pe 4 munți. Vara, regiunea se transformă într-un paradis pentru drumeții, cu pajiști alpine luxuriante, lacuri de munte cristaline și vârfuri de munte uimitoare. Impunătorul ghețar Dachstein încoronează panorama și atrage cu atracții spectaculoase.",
      "en": "The Schladming-Dachstein holiday region in Styria is one of the leading Alpine destinations in Austria. It is known worldwide for the Alpine World Ski Championships and the famous 4-Mountain Ski Swing. In summer, the region transforms into a hiking paradise with lush Alpine meadows, crystal-clear mountain lakes, and striking mountain peaks. The imposing Dachstein glacier crowns the panorama and attracts visitors with spectacular attractions."
    },
    "facts": {
      "de": [
        "Die 4-Berge-Skischaukel verbindet die Berge Hauser Kaibling, Planai, Hochwurzen und Reiteralm ohne Unterbrechung.",
        "Schladming trug bereits mehrmals die Alpine Skiweltmeisterschaft aus (zuletzt 2013).",
        "Das berühmte 'Nightrace', ein Nachtslalom der Herren auf der Planai, zieht jährlich bis zu 50.000 Fans an.",
        "Am Dachstein-Gletscher befindet sich der 'Sky Walk', eine spektakuläre gläserne Aussichtsplattform.",
        "Der Hohe Dachstein ist mit 2.995 Metern der höchste Berg der Steiermark.",
        "Die Region umfasst auch die 'Treppe ins Nichts' und den Eispalast am Gletscher."
      ],
      "hu": [
        "A 4 hegyes síhinta (4-Berge-Skischaukel) megszakítás nélkül köti össze a Hauser Kaibling, a Planai, a Hochwurzen és a Reiteralm hegyeket.",
        "Schladming már többször is rendezett alpesisí-világbajnokságot (legutóbb 2013-ban).",
        "A híres 'Nightrace', egy éjszakai férfi műlesiklás a Planain, évente akár 50 000 rajongót is vonz.",
        "A Dachstein-gleccseren található a 'Sky Walk', egy látványos üveg kilátóplatform.",
        "A Hoher Dachstein 2995 méteres magasságával Stájerország legmagasabb hegye.",
        "A régióhoz tartozik a 'Semmibe vezető lépcső' és a jégpalota is a gleccseren."
      ],
      "ro": [
        "Leagănul de schi cu 4 munți leagă munții Hauser Kaibling, Planai, Hochwurzen și Reiteralm fără întrerupere.",
        "Schladming a găzduit deja Campionatele Mondiale de Schi Alpin de mai multe ori (cel mai recent în 2013).",
        "Renumita „Nightrace”, un slalom de noapte masculin pe Planai, atrage până la 50.000 de fani în fiecare an.",
        "Pe ghețarul Dachstein se află „Sky Walk”, o platformă spectaculoasă de observare din sticlă.",
        "Muntele Hoher Dachstein, la 2.995 de metri, este cel mai înalt munte din Stiria.",
        "Regiunea include, de asemenea, „Scara spre Nimic” și Palatul de Gheață de pe ghețar."
      ],
      "en": [
        "The 4-Mountain Ski Swing connects the Hauser Kaibling, Planai, Hochwurzen and Reiteralm mountains without interruption.",
        "Schladming has already hosted the Alpine World Ski Championships several times (most recently in 2013).",
        "The famous 'Nightrace', a men's night slalom on the Planai, attracts up to 50,000 fans every year.",
        "The 'Sky Walk', a spectacular glass observation platform, is located on the Dachstein glacier.",
        "The Hoher Dachstein is the highest mountain in Styria at 2,995 meters.",
        "The region also includes the 'Stairway to Nothingness' and the Ice Palace on the glacier."
      ]
    }
  },
  {
    "id": "at-kitzbuhel-ski",
    "type": "landmark",
    "parent": "AT-7",
    "coords": [
      12.3906,
      47.447
    ],
    "name": {
      "de": "Kitzbühel & Hahnenkamm",
      "hu": "Kitzbühel és a Hahnenkamm",
      "ro": "Kitzbühel și Hahnenkamm",
      "en": "Kitzbühel & Hahnenkamm"
    },
    "image": "/geo-images/austria/kitzbuhel-ski.webp",
    "description": {
      "de": "Kitzbühel in Tirol ist einer der exklusivsten und bekanntesten Wintersportorte der Welt. Der malerische Ort mit seinem mittelalterlichen Stadtkern zieht Prominenz und Skibegeisterte gleichermaßen an. Weltruhm erlangte Kitzbühel vor allem durch das legendäre Hahnenkammrennen mit der gefürchteten 'Streif'-Abfahrt. Aber auch abseits der Pisten bietet Kitzbühel mit Luxusboutiquen, Haubenrestaurants und einer traumhaften Natur ein unvergleichliches Erlebnis.",
      "hu": "A tiroli Kitzbühel a világ egyik legexkluzívabb és legismertebb téli sportközpontja. A festői település középkori városmagjával a hírességeket és a síelés szerelmeseit egyaránt vonzza. Kitzbühel világhírnevét elsősorban a legendás Hahnenkamm-versenynek és a rettegett 'Streif' lesiklópályának köszönheti. Kitzbühel azonban a lejtőkön kívül is páratlan élményt nyújt luxusbutikjaival, díjnyertes éttermeivel és álomszép természetével.",
      "ro": "Kitzbühel din Tirol este una dintre cele mai exclusiviste și cunoscute stațiuni de sporturi de iarnă din lume. Orașul pitoresc cu centrul său medieval atrage deopotrivă vedete și pasionați de schi. Kitzbühel a câștigat faimă mondială în principal datorită legendarei curse Hahnenkamm și temutei pârtii „Streif”. Dar, chiar și departe de pârtii, Kitzbühel oferă o experiență de neegalat cu buticuri de lux, restaurante premiate și natură de vis.",
      "en": "Kitzbühel in Tyrol is one of the most exclusive and famous winter sports resorts in the world. The picturesque town with its medieval core attracts celebrities and ski enthusiasts alike. Kitzbühel gained world fame primarily through the legendary Hahnenkamm race and the dreaded 'Streif' downhill run. But even away from the slopes, Kitzbühel offers an unparalleled experience with luxury boutiques, award-winning restaurants and wonderful nature."
    },
    "facts": {
      "de": [
        "Die Streif gilt als die schwierigste und gefährlichste Abfahrtsstrecke der Welt.",
        "Beim Hahnenkammrennen erreichen die Skirennläufer auf der Zielschusskante Geschwindigkeiten bis zu 140 km/h.",
        "Der Mausefalle-Sprung auf der Streif führt zu Flügen von bis zu 80 Metern Länge.",
        "Kitzbühel war Austragungsort unzähliger Weltcuprennen im alpinen Skisport.",
        "Das Kitzbüheler Horn ist ein weiterer bekannter Skiberg in der Region.",
        "Im Sommer findet in Kitzbühel das Generali Open, ein ATP-Tennisturnier, statt."
      ],
      "hu": [
        "A Streif a világ legnehezebb és legveszélyesebb lesiklópályája.",
        "A Hahnenkamm-versenyen a sízők a cél előtti egyenesben akár a 140 km/h-s sebességet is elérik.",
        "A Streifen található 'Egérfogó' (Mausefalle) ugratónál akár 80 métert is repülhetnek a versenyzők.",
        "Kitzbühel számtalan alpesisí-világkupa futamnak adott otthont.",
        "A Kitzbüheler Horn egy másik ismert síhegy a régióban.",
        "Nyáron Kitzbühelben rendezik a Generali Open ATP-teniszbajnokságot."
      ],
      "ro": [
        "Pârtia Streif este considerată cea mai dificilă și periculoasă pârtie de coborâre din lume.",
        "În timpul cursei Hahnenkamm, schiorii ating viteze de până la 140 km/h la finalul coborârii.",
        "Săritura „Cursă de Șoareci” (Mausefalle) de pe Streif duce la zboruri de până la 80 de metri lungime.",
        "Kitzbühel a găzduit nenumărate curse de Cupă Mondială la schi alpin.",
        "Kitzbüheler Horn este un alt munte de schi bine-cunoscut din regiune.",
        "Vara, turneul de tenis ATP Generali Open are loc în Kitzbühel."
      ],
      "en": [
        "The Streif is considered the most difficult and dangerous downhill ski run in the world.",
        "During the Hahnenkamm race, skiers reach speeds of up to 140 km/h on the final schuss.",
        "The Mausefalle (Mousetrap) jump on the Streif results in flights of up to 80 meters in length.",
        "Kitzbühel has hosted countless Alpine Ski World Cup races.",
        "The Kitzbüheler Horn is another well-known ski mountain in the region.",
        "In summer, the Generali Open, an ATP tennis tournament, takes place in Kitzbühel."
      ]
    }
  },
  {
    "id": "at-mozarteum-salzburg",
    "type": "landmark",
    "parent": "AT-5",
    "coords": [
      13.0506,
      47.8014
    ],
    "name": {
      "de": "Stiftung Mozarteum",
      "hu": "Mozarteum Alapítvány",
      "ro": "Fundația Mozarteum",
      "en": "Mozarteum Foundation"
    },
    "image": "/geo-images/austria/mozarteum-salzburg.webp",
    "description": {
      "de": "Die Internationale Stiftung Mozarteum in Salzburg hat es sich zur Aufgabe gemacht, das Erbe Wolfgang Amadeus Mozarts zu bewahren. Sie betreibt Mozarts Geburtshaus und das Mozart-Wohnhaus als Museen, die zu den meistbesuchten Sehenswürdigkeiten Österreichs zählen. Zudem verwahrt die Stiftung eine unschätzbare Sammlung an Autographen, Instrumenten und Briefen des genialen Komponisten. Jedes Jahr im Januar veranstaltet das Mozarteum die Mozartwoche, ein renommiertes Klassikfestival.",
      "hu": "A salzburgi Nemzetközi Mozarteum Alapítvány célja Wolfgang Amadeus Mozart örökségének megőrzése. Az alapítvány működteti Mozart szülőházát és lakóházát múzeumként, amelyek Ausztria leglátogatottabb nevezetességei közé tartoznak. Ezenkívül az alapítvány a zseniális zeneszerző kéziratainak, hangszereinek és leveleinek felbecsülhetetlen értékű gyűjteményét őrzi. A Mozarteum minden év januárjában megrendezi a Mozart-hetet, egy neves klasszikus zenei fesztivált.",
      "ro": "Fundația Internațională Mozarteum din Salzburg are misiunea de a păstra moștenirea lui Wolfgang Amadeus Mozart. Administrează locul de naștere al lui Mozart și reședința Mozart ca muzee, care sunt printre cele mai vizitate atracții din Austria. În plus, fundația deține o colecție neprețuită de autografe, instrumente și scrisori ale genialului compozitor. În fiecare an, în luna ianuarie, Mozarteum organizează Săptămâna Mozart, un festival renumit de muzică clasică.",
      "en": "The International Mozarteum Foundation in Salzburg has set itself the task of preserving the legacy of Wolfgang Amadeus Mozart. It operates Mozart's Birthplace and the Mozart Residence as museums, which are among the most visited sights in Austria. In addition, the foundation holds an invaluable collection of autographs, instruments, and letters of the brilliant composer. Every year in January, the Mozarteum organizes the Mozart Week, a renowned classical music festival."
    },
    "facts": {
      "de": [
        "Die Stiftung Mozarteum wurde 1880 von Bürgern der Stadt Salzburg gegründet.",
        "In Mozarts Geburtshaus in der Getreidegasse kam er 1756 zur Welt.",
        "Das Archiv der Stiftung beherbergt über die Hälfte aller weltweit bekannten Mozart-Dokumente.",
        "Zu den Originalinstrumenten in der Sammlung gehören Mozarts Konzertflügel und seine Violine.",
        "Die Stiftung gibt auch die 'Neue Mozart-Ausgabe' heraus, die wissenschaftlich fundierte Gesamtausgabe seiner Werke.",
        "Das Gebäude der Stiftung Mozarteum besitzt zwei prachtvolle Konzertsäle."
      ],
      "hu": [
        "A Mozarteum Alapítványt 1880-ban alapították Salzburg város polgárai.",
        "Mozart 1756-ban született a Getreidegassén található szülőházában.",
        "Az alapítvány archívuma őrzi az összes világszerte ismert Mozart-dokumentum több mint felét.",
        "A gyűjtemény eredeti hangszerei közé tartozik Mozart koncertzongorája és hegedűje.",
        "Az alapítvány adja ki az 'Új Mozart-kiadást' is, amely műveinek tudományosan megalapozott összkiadása.",
        "A Mozarteum Alapítvány épülete két pompás koncertteremmel rendelkezik."
      ],
      "ro": [
        "Fundația Mozarteum a fost fondată în 1880 de cetățenii din Salzburg.",
        "Mozart s-a născut în 1756 în locul său de naștere din Getreidegasse.",
        "Arhiva fundației găzduiește mai mult de jumătate din toate documentele Mozart cunoscute la nivel mondial.",
        "Instrumentele originale din colecție includ pianul de concert al lui Mozart și vioara sa.",
        "De asemenea, fundația publică „Noua ediție Mozart”, o ediție completă fundamentată științific a lucrărilor sale.",
        "Clădirea Fundației Mozarteum are două săli de concerte magnifice."
      ],
      "en": [
        "The Mozarteum Foundation was founded in 1880 by citizens of the city of Salzburg.",
        "Mozart was born in 1756 in his birthplace in the Getreidegasse.",
        "The foundation's archive houses over half of all known Mozart documents worldwide.",
        "Original instruments in the collection include Mozart's concert grand piano and his violin.",
        "The foundation also publishes the 'New Mozart Edition', the scientifically based complete edition of his works.",
        "The Mozarteum Foundation building has two magnificent concert halls."
      ]
    }
  },
  {
    "id": "at-riegersburg",
    "type": "historical",
    "parent": "AT-6",
    "coords": [
      15.9333,
      46.8833
    ],
    "name": {
      "de": "Riegersburg",
      "hu": "Riegersburg",
      "ro": "Castelul Riegersburg",
      "en": "Riegersburg Castle"
    },
    "image": "/geo-images/austria/riegersburg.webp",
    "description": {
      "de": "Die Riegersburg thront majestätisch auf einem 482 Meter hohen Basaltfelsen eines erloschenen Vulkans in der Südoststeiermark. Sie galt jahrhundertelang als die stärkste Festung der Christenheit und konnte niemals erobert werden. Heute ist die imposante Burg ein beliebtes Ausflugsziel mit mehreren Museen, darunter ein Hexenmuseum. Der Aufstieg kann entweder zu Fuß über historische Burgtore oder bequem per Schrägaufzug erfolgen.",
      "hu": "A Riegersburg fenségesen trónol egy kialudt vulkán 482 méter magas bazaltszikláján Délkelet-Stájerországban. Évszázadokon át a kereszténység legerősebb erődítményének számított, és soha nem tudták elfoglalni. Ma az impozáns vár népszerű kirándulóhely több múzeummal, köztük egy boszorkánymúzeummal. A feljutás történhet gyalog a történelmi várkapukon keresztül, vagy kényelmesen siklóval.",
      "ro": "Castelul Riegersburg stă maiestuos pe o stâncă de bazalt de 482 de metri înălțime a unui vulcan stins din sud-estul Stiriei. Timp de secole a fost considerată cea mai puternică fortăreață din creștinătate și nu a putut fi cucerită niciodată. Astăzi, impunătorul castel este o destinație populară, cu mai multe muzee, inclusiv un muzeu al vrăjitoarelor. Urcarea se poate face fie pe jos prin porțile istorice ale castelului, fie confortabil cu un lift înclinat.",
      "en": "Riegersburg Castle sits majestically on a 482-meter-high basalt rock of an extinct volcano in southeastern Styria. For centuries it was considered the strongest fortress in Christendom and could never be conquered. Today, the imposing castle is a popular excursion destination with several museums, including a witch museum. The ascent can be done either on foot through historic castle gates or comfortably via an inclined elevator."
    },
    "facts": {
      "de": [
        "Die Burg wurde im 11. Jahrhundert erstmals urkundlich erwähnt.",
        "Sie besitzt eine 3 Kilometer lange Wehrmauer mit elf Basteien und sieben Toren.",
        "Die Riegersburg gehört seit 1822 der Fürstenfamilie Liechtenstein.",
        "Das Hexenmuseum in der Burg thematisiert die dunkle Zeit der Hexenprozesse in der Steiermark im 17. Jahrhundert.",
        "Unter der Burg gibt es eine Greifvogelwarte, die spektakuläre Flugschauen anbietet.",
        "Die Burg trotzte sowohl den Türken- als auch den Kuruzzen-Einfällen."
      ],
      "hu": [
        "A várat először a 11. században említik írásos emlékek.",
        "3 kilométer hosszú védőfallal rendelkezik, tizenegy bástyával és hét kapuval.",
        "A Riegersburg 1822 óta a Liechtenstein hercegi család tulajdona.",
        "A várban található boszorkánymúzeum a 17. századi stájerországi boszorkányperek sötét időszakát dolgozza fel.",
        "A vár alatt található egy ragadozómadár-állomás, amely látványos röptetéseket kínál.",
        "A vár dacolt a török és a kuruc betörésekkel is."
      ],
      "ro": [
        "Castelul a fost menționat pentru prima dată într-un document din secolul al XI-lea.",
        "Are un zid de apărare de 3 kilometri lungime cu unsprezece bastioane și șapte porți.",
        "Riegersburg aparține familiei princiare de Liechtenstein din 1822.",
        "Muzeul vrăjitoarelor din castel explorează vremurile întunecate ale proceselor de vrăjitoare din Stiria secolului al XVII-lea.",
        "Sub castel există un sanctuar de păsări de pradă care oferă spectacole de zbor spectaculoase.",
        "Castelul a sfidat atât invaziile turcești, cât și pe cele ale curuților."
      ],
      "en": [
        "The castle was first mentioned in a document in the 11th century.",
        "It has a 3-kilometer-long defensive wall with eleven bastions and seven gates.",
        "Riegersburg has belonged to the princely family of Liechtenstein since 1822.",
        "The witch museum in the castle explores the dark times of the witch trials in Styria in the 17th century.",
        "Below the castle there is a bird of prey sanctuary that offers spectacular flight shows.",
        "The castle defied both the Turkish and the Kuruc invasions."
      ]
    }
  },
  {
    "id": "at-kufstein-fortress",
    "type": "historical",
    "parent": "AT-7",
    "coords": [
      12.1667,
      47.5833
    ],
    "name": {
      "de": "Festung Kufstein",
      "hu": "Kufsteini vár",
      "ro": "Fortăreața Kufstein",
      "en": "Kufstein Fortress"
    },
    "image": "/geo-images/austria/kufstein-fortress.webp",
    "description": {
      "de": "Die Festung Kufstein ist das Wahrzeichen der Stadt Kufstein in Tirol und thront weithin sichtbar auf einem Hügel über dem Fluss Inn. Jahrhundertelang war sie ein heiß umkämpftes Grenzbastion zwischen Bayern und Tirol. Heute ist sie ein faszinierendes Geschichtserlebnis und dient als Kulisse für zahlreiche kulturelle Veranstaltungen. Ein besonderes Highlight ist die Heldenorgel, die größte Freiluftorgel der Welt, deren Klang täglich über die Stadt schallt.",
      "hu": "A Kufsteini vár a tiroli Kufstein város jelképe, és messziről láthatóan magasodik egy dombon az Inn folyó felett. Évszázadokon át hevesen vitatott határerődítmény volt Bajorország és Tirol között. Ma lenyűgöző történelmi élményt nyújt, és számos kulturális rendezvény helyszínéül szolgál. Különleges látványossága a Hősök orgonája, a világ legnagyobb szabadtéri orgonája, amelynek hangja naponta csendül fel a város felett.",
      "ro": "Fortăreața Kufstein este simbolul orașului Kufstein din Tirol și tronează vizibil de departe pe un deal deasupra râului Inn. Timp de secole a fost un bastion de graniță aprig disputat între Bavaria și Tirol. Astăzi este o experiență istorică fascinantă și servește ca fundal pentru numeroase evenimente culturale. Un punct de atracție deosebit este Orga Eroilor (Heldenorgel), cea mai mare orgă în aer liber din lume, al cărei sunet răsună în oraș în fiecare zi.",
      "en": "Kufstein Fortress is the landmark of the city of Kufstein in Tyrol and towers visibly from afar on a hill above the river Inn. For centuries it was a hotly contested border bastion between Bavaria and Tyrol. Today it is a fascinating historical experience and serves as a backdrop for numerous cultural events. A special highlight is the Heroes' Organ (Heldenorgel), the world's largest outdoor organ, whose sound echoes across the city every day."
    },
    "facts": {
      "de": [
        "Die Festung wurde im 13. Jahrhundert erstmals urkundlich als Eigentum der Bischöfe von Regensburg erwähnt.",
        "Kaiser Maximilian I. ließ die Festung im 16. Jahrhundert mit dem runden 'Kaiserturm' massiv ausbauen.",
        "Im Kaiserturm befand sich ein gefürchtetes Staatsgefängnis, insbesondere für ungarische Dissidenten im 19. Jahrhundert.",
        "Die Heldenorgel hat 4.948 Pfeifen und wird täglich um 12 Uhr gespielt.",
        "Eine moderne Panoramabahn ermöglicht einen bequemen Aufstieg zur Festung.",
        "Die Festungsarena mit Überdachung ist ein beliebter Ort für Konzerte und Operetten."
      ],
      "hu": [
        "A várat először a 13. században említik írásban, mint a regensburgi püspökök tulajdonát.",
        "I. Miksa császár a 16. században jelentősen kibővíttette az erődöt a kerek 'Császártoronnyal'.",
        "A Császártoronyban egy rettegett állami börtön működött, különösen magyar disszidensek számára a 19. században.",
        "A Hősök orgonája 4948 síppal rendelkezik, és minden nap 12 órakor szólal meg.",
        "Egy modern panorámafelvonó teszi lehetővé a kényelmes feljutást a várba.",
        "A fedett aréna a várban kedvelt helyszíne koncerteknek és operetteknek."
      ],
      "ro": [
        "Fortăreața a fost menționată pentru prima dată într-un document din secolul al XIII-lea ca proprietate a episcopilor de Regensburg.",
        "Împăratul Maximilian I a extins masiv fortăreața în secolul al XVI-lea cu „Turnul Împăratului” (Kaiserturm) rotund.",
        "În Kaiserturm a existat o temută închisoare de stat, în special pentru dizidenții maghiari în secolul al XIX-lea.",
        "Orga Eroilor are 4.948 de tuburi și este cântată zilnic la ora 12.",
        "O telegondolă panoramică modernă permite o ascensiune confortabilă spre fortăreață.",
        "Arena acoperită a fortăreței este un loc popular pentru concerte și operete."
      ],
      "en": [
        "The fortress was first mentioned in a document in the 13th century as the property of the Bishops of Regensburg.",
        "Emperor Maximilian I had the fortress massively expanded in the 16th century with the round 'Emperor's Tower' (Kaiserturm).",
        "The Kaiserturm housed a dreaded state prison, especially for Hungarian dissidents in the 19th century.",
        "The Heroes' Organ has 4,948 pipes and is played daily at 12 noon.",
        "A modern panorama funicular allows for a comfortable ascent to the fortress.",
        "The roofed fortress arena is a popular venue for concerts and operettas."
      ]
    }
  },
  {
    "id": "at-kreuzenstein",
    "type": "historical",
    "parent": "AT-3",
    "coords": [
      16.3167,
      48.3833
    ],
    "name": {
      "de": "Burg Kreuzenstein",
      "hu": "Kreuzenstein vára",
      "ro": "Castelul Kreuzenstein",
      "en": "Kreuzenstein Castle"
    },
    "image": "/geo-images/austria/kreuzenstein.webp",
    "description": {
      "de": "Die Burg Kreuzenstein nahe Wien ist eine beeindruckende Schauburg, die im 19. Jahrhundert auf den Resten einer mittelalterlichen Burgruine erbaut wurde. Der Polarforscher Graf Nepomuk Wilczek ließ sie als idealisierte Ritterburg rekonstruieren, wobei er architektonische Elemente aus ganz Europa zusammentrug. Heute begeistert die Burg mit einer umfassenden Waffensammlung, einer historischen Rüstkammer und originalen mittelalterlichen Möbeln. Sie diente bereits mehrfach als Kulisse für internationale Filmproduktionen.",
      "hu": "A Bécshez közeli Kreuzenstein vára egy lenyűgöző látványvár, amelyet a 19. században építettek egy középkori várrom romjain. Nepomuk Wilczek gróf, sarkkutató építtette újjá idealizált lovagvárként, egész Európából összegyűjtött építészeti elemek felhasználásával. Ma a vár átfogó fegyvergyűjteménnyel, történelmi fegyvertárral és eredeti középkori bútorokkal nyűgözi le a látogatókat. Már többször is szolgált nemzetközi filmprodukciók forgatási helyszínéül.",
      "ro": "Castelul Kreuzenstein de lângă Viena este un castel spectaculos impresionant care a fost construit în secolul al XIX-lea pe rămășițele unui castel medieval în ruină. Exploratorul polar contele Nepomuk Wilczek l-a reconstruit ca un castel al cavalerilor idealizat, adunând elemente arhitecturale din toată Europa. Astăzi, castelul impresionează printr-o colecție cuprinzătoare de arme, un depozit de arme istoric și mobilier medieval original. A servit de câteva ori ca fundal pentru producții internaționale de film.",
      "en": "Kreuzenstein Castle near Vienna is an impressive show castle that was built in the 19th century on the remains of a ruined medieval castle. The polar explorer Count Nepomuk Wilczek had it reconstructed as an idealized knight's castle, gathering architectural elements from all over Europe. Today, the castle impresses with a comprehensive collection of weapons, an historical armory, and original medieval furniture. It has already served as a backdrop for international film productions on several occasions."
    },
    "facts": {
      "de": [
        "Die ursprüngliche Burg Kreuzenstein wurde während des Dreißigjährigen Krieges 1645 von schwedischen Truppen zerstört.",
        "Der Wiederaufbau der Burg dauerte von 1874 bis 1906.",
        "Die Burg wurde aus vielen originalen mittelalterlichen Bauteilen aus ganz Europa zusammengesetzt (sogenannte Spolien).",
        "Auf der Burg befindet sich eine der größten privaten Rüstkammern Europas.",
        "Die Adlerwarte Kreuzenstein bietet spektakuläre Freiflugvorführungen von Greifvögeln.",
        "Filme wie 'Die drei Musketiere' (1993) und 'Der letzte Tempelritter' mit Nicolas Cage wurden hier gedreht."
      ],
      "hu": [
        "Az eredeti Kreuzenstein várát a harmincéves háború alatt, 1645-ben a svéd csapatok pusztították el.",
        "A vár újjáépítése 1874-től 1906-ig tartott.",
        "A várat számos eredeti középkori építőelemből, egész Európából származó darabokból állították össze (ún. spóliák).",
        "A várban található Európa egyik legnagyobb magán fegyvertára.",
        "A Kreuzenstein Sasfészek látványos ragadozómadár-röptetéseket kínál.",
        "Itt forgatták többek között 'A három testőr' (1993) és a Nicolas Cage főszereplésével készült 'Boszorkányvadászat' (Der letzte Tempelritter) című filmeket."
      ],
      "ro": [
        "Castelul original Kreuzenstein a fost distrus de trupele suedeze în 1645 în timpul Războiului de Treizeci de Ani.",
        "Reconstrucția castelului a durat din 1874 până în 1906.",
        "Castelul a fost asamblat din multe componente medievale originale din toată Europa (așa-numitele spolii).",
        "Castelul găzduiește unul dintre cele mai mari depozite private de arme din Europa.",
        "Sanctuarul de vulturi Kreuzenstein oferă demonstrații spectaculoase de zbor liber ale păsărilor de pradă.",
        "Aici au fost filmate filme precum „Cei trei mușchetari” (1993) și „Anotimpul vrăjitoarei” cu Nicolas Cage."
      ],
      "en": [
        "The original Kreuzenstein Castle was destroyed by Swedish troops in 1645 during the Thirty Years' War.",
        "The reconstruction of the castle lasted from 1874 to 1906.",
        "The castle was assembled from many original medieval building components from all over Europe (so-called spolia).",
        "The castle houses one of the largest private armories in Europe.",
        "The Kreuzenstein eagle sanctuary offers spectacular free-flight demonstrations of birds of prey.",
        "Movies like 'The Three Musketeers' (1993) and 'Season of the Witch' starring Nicolas Cage were filmed here."
      ]
    }
  }
];

export const austriaAllPoi: POI[] = [
  austriaCountry,
  ...austriaRegions,
  ...austriaCities
];