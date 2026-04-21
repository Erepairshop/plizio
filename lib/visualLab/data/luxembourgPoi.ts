import { projectCoordsLU } from "../maps/luxembourg.svg";

export const luxembourgAllPoi = [
  {
    id: "lu-country",
    type: "country",
    coords: projectCoordsLU(6.1296, 49.8153),
    name: {
      de: "Luxemburg",
      hu: "Luxemburg",
      ro: "Luxemburg",
      en: "Luxembourg"
    },
    description: {
      de: "Ein kleines Binnenland in Westeuropa, bekannt für seine starke Wirtschaft und historische Bedeutung.",
      hu: "Kis szárazföldi ország Nyugat-Európában, amely erős gazdaságáról és történelmi jelentőségéről ismert.",
      ro: "O țară mică fără ieșire la mare din Europa de Vest, cunoscută pentru economia sa puternică și importanța istorică.",
      en: "A small landlocked country in Western Europe, known for its strong economy and historical significance."
    },
    facts: {
      de: ["Hauptstadt: Luxemburg-Stadt", "Währung: Euro", "Bevölkerung: ~660.000"],
      hu: ["Főváros: Luxemburg", "Pénznem: Euró", "Népesség: ~660.000"],
      ro: ["Capitala: Luxemburg", "Moneda: Euro", "Populație: ~660.000"],
      en: ["Capital: Luxembourg City", "Currency: Euro", "Population: ~660,000"]
    },
    image: "/images/visualLab/luxembourg/country.jpg"
  },
  {
    id: "lu-luxembourg-city",
    type: "city",
    parent: "lu-country",
    coords: projectCoordsLU(6.1319, 49.6116),
    name: {
      de: "Luxemburg-Stadt",
      hu: "Luxemburg",
      ro: "Luxemburg",
      en: "Luxembourg City"
    },
    description: {
      de: "Die Hauptstadt des Großherzogtums, berühmt für ihre befestigte mittelalterliche Altstadt auf steilen Klippen.",
      hu: "A Nagyhercegség fővárosa, amely meredek sziklákon fekvő, megerősített középkori óvárosáról híres.",
      ro: "Capitala Marelui Ducat, faimoasă pentru orașul său vechi medieval fortificat situat pe stânci abrupte.",
      en: "The capital of the Grand Duchy, famous for its fortified medieval old town perched on steep cliffs."
    },
    facts: {
      de: ["UNESCO-Weltkulturerbe", "Sitz europäischer Institutionen"],
      hu: ["UNESCO világörökség", "Európai intézmények székhelye"],
      ro: ["Patrimoniul Mondial UNESCO", "Sediul instituțiilor europene"],
      en: ["UNESCO World Heritage site", "Seat of European institutions"]
    },
    image: "/images/visualLab/luxembourg/luxembourg-city.jpg"
  },
  {
    id: "lu-vianden",
    type: "city",
    parent: "lu-country",
    coords: projectCoordsLU(6.2089, 49.9350),
    name: {
      de: "Vianden",
      hu: "Vianden",
      ro: "Vianden",
      en: "Vianden"
    },
    description: {
      de: "Eine malerische Stadt im Norden, bekannt für ihre beeindruckende mittelalterliche Burg.",
      hu: "Festői város északon, amely lenyűgöző középkori váráról ismert.",
      ro: "Un oraș pitoresc din nord, cunoscut pentru castelul său medieval impresionant.",
      en: "A picturesque town in the north, known for its impressive medieval castle."
    },
    facts: {
      de: ["Schloss Vianden", "Victor-Hugo-Museum"],
      hu: ["Viandeni vár", "Victor Hugo Múzeum"],
      ro: ["Castelul Vianden", "Muzeul Victor Hugo"],
      en: ["Vianden Castle", "Victor Hugo Museum"]
    },
    image: "/images/visualLab/luxembourg/vianden.jpg"
  },
  {
    id: "lu-echternach",
    type: "city",
    parent: "lu-country",
    coords: projectCoordsLU(6.4222, 49.8133),
    name: {
      de: "Echternach",
      hu: "Echternach",
      ro: "Echternach",
      en: "Echternach"
    },
    description: {
      de: "Die älteste Stadt Luxemburgs, berühmt für ihre Abtei und die Springprozession.",
      hu: "Luxemburg legrégebbi városa, amely apátságáról és a szökőkörmenetről híres.",
      ro: "Cel mai vechi oraș din Luxemburg, faimos pentru abația sa și procesiunea dansantă.",
      en: "The oldest town in Luxembourg, famous for its abbey and the dancing procession."
    },
    facts: {
      de: ["Älteste Stadt des Landes", "UNESCO Immaterielles Kulturerbe"],
      hu: ["Az ország legrégebbi városa", "UNESCO szellemi kulturális örökség"],
      ro: ["Cel mai vechi oraș din țară", "Patrimoniul cultural imaterial UNESCO"],
      en: ["Oldest town in the country", "UNESCO Intangible Cultural Heritage"]
    },
    image: "/images/visualLab/luxembourg/echternach.jpg"
  },
  {
    id: "lu-mullerthal",
    type: "landmark",
    parent: "lu-country",
    coords: projectCoordsLU(6.3000, 49.7833),
    name: {
      de: "Müllerthal",
      hu: "Mullerthal",
      ro: "Mullerthal",
      en: "Mullerthal"
    },
    description: {
      de: "Bekannt als 'Kleine Luxemburger Schweiz', eine Region mit felsigem Gelände und dichten Wäldern.",
      hu: "A 'Kis Luxemburgi Svájc' néven ismert régió sziklás tereppel és sűrű erdőkkel.",
      ro: "Cunoscută sub numele de 'Mica Elveție Luxemburgheză', o regiune cu teren stâncos și păduri dese.",
      en: "Known as 'Little Switzerland', a region with rocky terrain and thick forests."
    },
    facts: {
      de: ["Wanderwege", "Spektakuläre Felsformationen"],
      hu: ["Túraútvonalak", "Látványos sziklaalakzatok"],
      ro: ["Trasee de drumeție", "Formațiuni stâncoase spectaculoase"],
      en: ["Hiking trails", "Spectacular rock formations"]
    },
    image: "/images/visualLab/luxembourg/mullerthal.jpg"
  },
  {
    id: "lu-schengen",
    type: "city",
    parent: "lu-country",
    coords: projectCoordsLU(6.3667, 49.4708),
    name: {
      de: "Schengen",
      hu: "Schengen",
      ro: "Schengen",
      en: "Schengen"
    },
    description: {
      de: "Ein kleines Winzerdorf, in dem das Schengener Abkommen unterzeichnet wurde.",
      hu: "Kis bortermelő falu, ahol a schengeni egyezményt aláírták.",
      ro: "Un mic sat viticol unde a fost semnat Acordul de la Schengen.",
      en: "A small wine-making village where the Schengen Agreement was signed."
    },
    facts: {
      de: ["Europäisches Museum", "Grenzdreieck (DE, FR, LU)"],
      hu: ["Európai Múzeum", "Hármashatár (DE, FR, LU)"],
      ro: ["Muzeul European", "Triplex confinium (DE, FR, LU)"],
      en: ["European Museum", "Border tripoint (DE, FR, LU)"]
    },
    image: "/images/visualLab/luxembourg/schengen.jpg"
  }
];

export const luxembourgCities = [
  {
    id: "city-luxembourg",
    type: "city",
    parent: "lu-country",
    coords: projectCoordsLU(6.1296, 49.6116),
    name: {
      de: "Luxemburg-Stadt",
      hu: "Luxemburg-város",
      ro: "Orașul Luxemburg",
      en: "Luxembourg City"
    },
    description: {
      de: "Hauptstadt mit UNESCO-Altstadt, EU-Institutionen und dem Bock-Felsen.",
      hu: "Főváros UNESCO-óvárossal, uniós intézményekkel és a Bock-sziklával.",
      ro: "Capitala cu centru vechi UNESCO, instituții UE și stânca Bock.",
      en: "Capital city with a UNESCO old town, EU institutions, and the Bock rock."
    },
    facts: {
      de: ["Hauptstadt Luxemburgs", "UNESCO-Altstadt", "Bock-Felsen und Kasematten"],
      hu: ["Luxemburg fővárosa", "UNESCO-óváros", "Bock-erőd és kasematták"],
      ro: ["Capitala Luxemburgului", "Centru vechi UNESCO", "Stânca Bock și casematele"],
      en: ["Capital of Luxembourg", "UNESCO old town", "Bock rock and casemates"]
    },
    image: "/geo-images/luxembourg/city-luxembourg.webp"
  },
  {
    id: "city-esch",
    type: "city",
    parent: "lu-country",
    coords: projectCoordsLU(5.9806, 49.4964),
    name: {
      de: "Esch-sur-Alzette",
      hu: "Esch-sur-Alzette",
      ro: "Esch-sur-Alzette",
      en: "Esch-sur-Alzette"
    },
    description: {
      de: "Die zweitgrößte Stadt des Landes, geprägt von Eisen- und Stahlgeschichte.",
      hu: "Az ország második legnagyobb városa, vas- és acélipari múlttal.",
      ro: "Al doilea oraș ca mărime al țării, marcat de trecutul siderurgic.",
      en: "The country's second-largest city, shaped by iron and steel history."
    },
    facts: {
      de: ["Zweite Stadt Luxemburgs", "Ehemalige Stahlregion", "Moderner Kulturstandort"],
      hu: ["Luxemburg második városa", "Korábbi acélipari központ", "Modern kulturális helyszín"],
      ro: ["Al doilea oraș al Luxemburgului", "Fostă regiune siderurgică", "Centru cultural modern"],
      en: ["Luxembourg's second city", "Former steel region", "Modern cultural hub"]
    },
    image: "/geo-images/luxembourg/city-esch.webp"
  },
  {
    id: "city-differdange",
    type: "city",
    parent: "lu-country",
    coords: projectCoordsLU(5.8914, 49.5244),
    name: {
      de: "Differdingen",
      hu: "Differdange",
      ro: "Differdange",
      en: "Differdange"
    },
    description: {
      de: "Industriestadt im Südwesten, traditionell eng mit der Stahlproduktion verbunden.",
      hu: "Délnyugati iparváros, hagyományosan szorosan kötődik az acélgyártáshoz.",
      ro: "Oraș industrial în sud-vest, legat tradițional de producția de oțel.",
      en: "An industrial town in the southwest, traditionally tied to steel production."
    },
    facts: {
      de: ["Starkes Industrieerbe", "Südwesten Luxemburgs", "Stahltradition"],
      hu: ["Erős ipari örökség", "Luxemburg délnyugati része", "Acélipari hagyomány"],
      ro: ["Moștenire industrială puternică", "Sud-vestul Luxemburgului", "Tradiție siderurgică"],
      en: ["Strong industrial heritage", "Southwest Luxembourg", "Steel tradition"]
    },
    image: "/geo-images/luxembourg/city-differdange.webp"
  }
];

export const luxembourgCulture = [
  {
    id: "cult-bock",
    type: "historical",
    parent: "lu-country",
    coords: projectCoordsLU(6.1319, 49.6106),
    name: {
      de: "Bock-Felsen und Kasematten",
      hu: "Bock-erőd és casematták",
      ro: "Stânca Bock și casematele",
      en: "Bock Rock and Casemates"
    },
    description: {
      de: "Unterirdische Verteidigungsanlagen und Tunneln aus dem Mittelalter im Herzen der Stadt.",
      hu: "Középkori föld alatti védelmi alagutak a város szívében.",
      ro: "Fortificații subterane și tuneluri medievale în inima orașului.",
      en: "Medieval underground defense tunnels and fortifications in the heart of the city."
    },
    facts: {
      de: ["UNESCO-Welterbe", "Festungsanlagen der Stadt", "Historische Kasematten"],
      hu: ["UNESCO világörökség", "A város erődrendszere", "Történelmi casematták"],
      ro: ["Patrimoniu mondial UNESCO", "Sistem defensiv al orașului", "Casemate istorice"],
      en: ["UNESCO World Heritage", "City fortifications", "Historic casemates"]
    },
    image: "/geo-images/luxembourg/cult-bock.webp"
  },
  {
    id: "cult-vianden",
    type: "historical",
    parent: "lu-country",
    coords: projectCoordsLU(6.2069, 49.9347),
    name: {
      de: "Burg Vianden",
      hu: "Vianden vára",
      ro: "Castelul Vianden",
      en: "Vianden Castle"
    },
    description: {
      de: "Mittelalterliche Höhenburg über dem Ourtal und eines der bekanntesten Wahrzeichen des Landes.",
      hu: "Középkori hegyi vár az Our völgye fölött, az ország egyik legismertebb jelképe.",
      ro: "Castel medieval de munte deasupra văii Our și unul dintre cele mai cunoscute simboluri ale țării.",
      en: "A medieval hill castle above the Our valley and one of the country's best-known landmarks."
    },
    facts: {
      de: ["Mittelalterliche Burg", "Über dem Ourtal", "Bekanntes Nationaldenkmal"],
      hu: ["Középkori vár", "Az Our völgye fölött", "Ismert nemzeti látványosság"],
      ro: ["Castel medieval", "Deasupra văii Our", "Monument național cunoscut"],
      en: ["Medieval castle", "Above the Our valley", "Well-known national landmark"]
    },
    image: "/geo-images/luxembourg/cult-vianden.webp"
  },
  {
    id: "cult-echternach",
    type: "historical",
    parent: "lu-country",
    coords: projectCoordsLU(6.4225, 49.8147),
    name: {
      de: "Echternacher Basilika",
      hu: "Echternach-bazilika",
      ro: "Bazilica din Echternach",
      en: "Echternach Basilica"
    },
    description: {
      de: "Basilika in Luxemburgs ältester Stadt, eng verbunden mit der langen Klostergeschichte.",
      hu: "Bazilika Luxemburg legrégebbi városában, szorosan kapcsolódik a hosszú kolostortörténethez.",
      ro: "Bazilică în cel mai vechi oraș al Luxemburgului, strâns legată de lunga istorie monastică.",
      en: "A basilica in Luxembourg's oldest town, closely tied to its long monastic history."
    },
    facts: {
      de: ["Älteste Stadt des Landes", "Starke Klostertradition", "Wichtiger Pilgerort"],
      hu: ["Az ország legrégebbi városa", "Erős kolostori hagyomány", "Fontos zarándokhely"],
      ro: ["Cel mai vechi oraș al țării", "Tradiție monastică puternică", "Loc important de pelerinaj"],
      en: ["Oldest town in the country", "Strong monastic tradition", "Important pilgrimage site"]
    },
    image: "/geo-images/luxembourg/cult-echternach.webp"
  },
  {
    id: "cult-schengen",
    type: "historical",
    parent: "lu-country",
    coords: projectCoordsLU(6.3629, 49.4667),
    name: {
      de: "Schengen-Dorf",
      hu: "Schengen falu",
      ro: "Satul Schengen",
      en: "Schengen Village"
    },
    description: {
      de: "Moseldorf, das durch die Unterzeichnung des Schengener Abkommens 1985 weltbekannt wurde.",
      hu: "Mosel-parti falu, amely az 1985-ös Schengeni szerződés miatt vált világhírűvé.",
      ro: "Sat de pe Mosela, devenit celebru în lume prin semnarea acordului Schengen din 1985.",
      en: "A Moselle village made world-famous by the signing of the 1985 Schengen Agreement."
    },
    facts: {
      de: ["Schengener Abkommen 1985", "An der Mosel", "Symbol für offene Grenzen"],
      hu: ["1985-ös Schengeni szerződés", "A Moselle partján", "A nyitott határok jelképe"],
      ro: ["Acordul Schengen din 1985", "Pe Mosela", "Simbol al frontierelor deschise"],
      en: ["1985 Schengen Agreement", "On the Moselle", "Symbol of open borders"]
    },
    image: "/geo-images/luxembourg/cult-schengen.webp"
  }
];

export const luxembourgNature = [
  {
    id: "nat-mullerthal",
    type: "landmark",
    parent: "lu-country",
    coords: projectCoordsLU(6.3, 49.8),
    name: {
      de: "Mullerthal",
      hu: "Mullerthal",
      ro: "Mullerthal",
      en: "Mullerthal"
    },
    description: {
      de: "Sandsteinschluchten und Wälder in der Region Little Switzerland, bekannt für den Schiessentümpel.",
      hu: "Homokkő-szurdokok és erdők a Little Switzerland térségben, a Schiessentümpel-vízeséssel.",
      ro: "Chei de gresie și păduri în regiunea Little Switzerland, cunoscută pentru cascada Schiessentümpel.",
      en: "Sandstone gorges and forests in the Little Switzerland region, known for Schiessentümpel."
    },
    facts: {
      de: ["Little Switzerland", "Schiessentümpel", "Beliebtes Wandergebiet"],
      hu: ["Little Switzerland", "Schiessentümpel", "Népszerű túraterület"],
      ro: ["Little Switzerland", "Schiessentümpel", "Zonă populară de drumeții"],
      en: ["Little Switzerland", "Schiessentümpel", "Popular hiking area"]
    },
    image: "/geo-images/luxembourg/nat-mullerthal.webp"
  },
  {
    id: "nat-ardennek-lu",
    type: "landmark",
    parent: "lu-country",
    coords: projectCoordsLU(6.0, 50.0),
    name: {
      de: "Luxemburger Ardennen",
      hu: "Luxemburgi-Ardennek",
      ro: "Ardenele luxemburgheze",
      en: "Luxembourg Ardennes"
    },
    description: {
      de: "Wald- und Hügellandschaft im Norden Luxemburgs mit ruhigen Tälern und kleinen Ortschaften.",
      hu: "Erdős hegyvidék Luxemburg északi részén, nyugodt völgyekkel és kis településekkel.",
      ro: "Peisaj de păduri și coline în nordul Luxemburgului, cu văi liniștite și sate mici.",
      en: "Forest and hill country in northern Luxembourg with quiet valleys and small villages."
    },
    facts: {
      de: ["Nördliches Luxemburg", "Wälder und Hügel", "Ländliche Natur"],
      hu: ["Észak-Luxemburg", "Erdők és dombok", "Falusias természeti táj"],
      ro: ["Nordul Luxemburgului", "Păduri și coline", "Peisaj rural natural"],
      en: ["Northern Luxembourg", "Forests and hills", "Rural natural landscape"]
    },
    image: "/geo-images/luxembourg/nat-ardennek-lu.webp"
  },
  {
    id: "nat-moselle",
    type: "landmark",
    parent: "lu-country",
    coords: projectCoordsLU(6.4, 49.55),
    name: {
      de: "Mosel-Tal",
      hu: "Moselle-völgy",
      ro: "Valea Mosellei",
      en: "Moselle Valley"
    },
    description: {
      de: "Weinregion entlang der Mosel an der Grenze zu Deutschland, mit sonnigen Hängen und Dörfern.",
      hu: "Borvidék a Moselle mentén, a német határnál, napos domboldalakkal és falvakkal.",
      ro: "Regiune viticolă de-a lungul Mosellei, la granița cu Germania, cu versanți însoriți și sate.",
      en: "A wine region along the Moselle on the German border, with sunny slopes and villages."
    },
    facts: {
      de: ["Weinbaugebiet", "Grenze zu Deutschland", "Mosel entlang der Weinterrassen"],
      hu: ["Borvidék", "Német határ", "Szőlőteraszok a Moselle mentén"],
      ro: ["Regiune viticolă", "Granița cu Germania", "Terase viticole pe Moselle"],
      en: ["Wine-growing region", "German border", "Vineyards along the Moselle"]
    },
    image: "/geo-images/luxembourg/nat-moselle.webp"
  }

  ,

  {
    id: "city-bourscheid",
    type: "city",
    parent: "LU",
    coords: [6.0972, 49.9057] as [number, number],
    name: {
      de: "Bourscheid",
      hu: "Bourscheid",
      ro: "Bourscheid",
      en: "Bourscheid"
    },
    description: {
      de: "Bourscheid ist ein lokaler Ausgangspunkt in Luxemburg fuer kurze Reisen und regionale Erkundungen. Der Ort laesst sich leicht mit Nachbardoerfern, Wanderzielen und Tagesrouten verbinden. Fuer city break Luxembourg, family travel und ruhige Wochenendstopps ist Bourscheid sehr brauchbar. Die Lage macht den Ort auch fuer Suchen nach kleineren Luxemburg-Zielen relevant.",
      hu: "Bourscheid egy helyi kiindulopont Luxembourgban rovid utazasokhoz es regionalis felfedezeshez. A telepules konnyen osszekotheto a kornyeki falvakkal, turazohelyekkel es egynapos utvonalakkal. A city break Luxembourg, family travel es nyugodt weekend stopover kereseseiben jol mukodik. A fekves miatt a kisebb luxemburgi helyek kozott is relevans.",
      ro: "Bourscheid este un punct local de pornire in Luxemburg pentru calatorii scurte si explorare regionala. Localitatea se combina usor cu satele vecine, locurile de drumetie si traseele de o zi. Pentru city break Luxembourg, family travel si weekend stopover linistit, Bourscheid este o alegere buna. Pozitia o face relevanta si in cautarile pentru locuri mai mici din Luxemburg.",
      en: "Bourscheid is a local base in Luxembourg for short trips and regional exploration. The town is easy to combine with nearby villages, hiking spots, and day routes. It works well for city break Luxembourg, family travel, and quiet weekend stopovers. The location keeps it relevant for searches around smaller Luxembourg places."
    },
    facts: {
      de: ["Lokaler Ort in Luxemburg", "Gut fuer Tagesausfluege", "Mit Nachbarorten gut kombinierbar", "Familienfreundliche Basis", "Relevant fuer Kurzreisen"],
      hu: ["Helyi telepules Luxemburgban", "Jo egynapos kirandulasokhoz", "A kornyeki helyekkel jol kombinálhato", "Csaladbarat bazis", "Relevans rovid utazasi celpont"],
      ro: ["Localitate din Luxemburg", "Buna pentru excursii de o zi", "Se combina usor cu satele vecine", "Baza family friendly", "Relevanta pentru calatorii scurte"],
      en: ["Local place in Luxembourg", "Good for day trips", "Easy to combine with nearby towns", "Family friendly base", "Relevant for short travel searches"]
    },
    image: "/geo-images/luxembourg/bourscheid.webp"
  },
  {
    id: "city-berdorf",
    type: "city",
    parent: "LU",
    coords: [6.3480, 49.8180] as [number, number],
    name: {
      de: "Berdorf",
      hu: "Berdorf",
      ro: "Berdorf",
      en: "Berdorf"
    },
    description: {
      de: "Berdorf ist ein lokaler Ausgangspunkt in Luxemburg fuer kurze Reisen und regionale Erkundungen. Der Ort laesst sich leicht mit Nachbardoerfern, Wanderzielen und Tagesrouten verbinden. Fuer city break Luxembourg, family travel und ruhige Wochenendstopps ist Berdorf sehr brauchbar. Die Lage macht den Ort auch fuer Suchen nach kleineren Luxemburg-Zielen relevant.",
      hu: "Berdorf egy helyi kiindulopont Luxembourgban rovid utazasokhoz es regionalis felfedezeshez. A telepules konnyen osszekotheto a kornyeki falvakkal, turazohelyekkel es egynapos utvonalakkal. A city break Luxembourg, family travel es nyugodt weekend stopover kereseseiben jol mukodik. A fekves miatt a kisebb luxemburgi helyek kozott is relevans.",
      ro: "Berdorf este un punct local de pornire in Luxemburg pentru calatorii scurte si explorare regionala. Localitatea se combina usor cu satele vecine, locurile de drumetie si traseele de o zi. Pentru city break Luxembourg, family travel si weekend stopover linistit, Berdorf este o alegere buna. Pozitia o face relevanta si in cautarile pentru locuri mai mici din Luxemburg.",
      en: "Berdorf is a local base in Luxembourg for short trips and regional exploration. The town is easy to combine with nearby villages, hiking spots, and day routes. It works well for city break Luxembourg, family travel, and quiet weekend stopovers. The location keeps it relevant for searches around smaller Luxembourg places."
    },
    facts: {
      de: ["Lokaler Ort in Luxemburg", "Gut fuer Tagesausfluege", "Mit Nachbarorten gut kombinierbar", "Familienfreundliche Basis", "Relevant fuer Kurzreisen"],
      hu: ["Helyi telepules Luxemburgban", "Jo egynapos kirandulasokhoz", "A kornyeki helyekkel jol kombinálhato", "Csaladbarat bazis", "Relevans rovid utazasi celpont"],
      ro: ["Localitate din Luxemburg", "Buna pentru excursii de o zi", "Se combina usor cu satele vecine", "Baza family friendly", "Relevanta pentru calatorii scurte"],
      en: ["Local place in Luxembourg", "Good for day trips", "Easy to combine with nearby towns", "Family friendly base", "Relevant for short travel searches"]
    },
    image: "/geo-images/luxembourg/berdorf.webp"
  },
  {
    id: "city-beaufort",
    type: "city",
    parent: "LU",
    coords: [6.2847, 49.8360] as [number, number],
    name: {
      de: "Beaufort",
      hu: "Beaufort",
      ro: "Beaufort",
      en: "Beaufort"
    },
    description: {
      de: "Beaufort ist ein lokaler Ausgangspunkt in Luxemburg fuer kurze Reisen und regionale Erkundungen. Der Ort laesst sich leicht mit Nachbardoerfern, Wanderzielen und Tagesrouten verbinden. Fuer city break Luxembourg, family travel und ruhige Wochenendstopps ist Beaufort sehr brauchbar. Die Lage macht den Ort auch fuer Suchen nach kleineren Luxemburg-Zielen relevant.",
      hu: "Beaufort egy helyi kiindulopont Luxembourgban rovid utazasokhoz es regionalis felfedezeshez. A telepules konnyen osszekotheto a kornyeki falvakkal, turazohelyekkel es egynapos utvonalakkal. A city break Luxembourg, family travel es nyugodt weekend stopover kereseseiben jol mukodik. A fekves miatt a kisebb luxemburgi helyek kozott is relevans.",
      ro: "Beaufort este un punct local de pornire in Luxemburg pentru calatorii scurte si explorare regionala. Localitatea se combina usor cu satele vecine, locurile de drumetie si traseele de o zi. Pentru city break Luxembourg, family travel si weekend stopover linistit, Beaufort este o alegere buna. Pozitia o face relevanta si in cautarile pentru locuri mai mici din Luxemburg.",
      en: "Beaufort is a local base in Luxembourg for short trips and regional exploration. The town is easy to combine with nearby villages, hiking spots, and day routes. It works well for city break Luxembourg, family travel, and quiet weekend stopovers. The location keeps it relevant for searches around smaller Luxembourg places."
    },
    facts: {
      de: ["Lokaler Ort in Luxemburg", "Gut fuer Tagesausfluege", "Mit Nachbarorten gut kombinierbar", "Familienfreundliche Basis", "Relevant fuer Kurzreisen"],
      hu: ["Helyi telepules Luxemburgban", "Jo egynapos kirandulasokhoz", "A kornyeki helyekkel jol kombinálhato", "Csaladbarat bazis", "Relevans rovid utazasi celpont"],
      ro: ["Localitate din Luxemburg", "Buna pentru excursii de o zi", "Se combina usor cu satele vecine", "Baza family friendly", "Relevanta pentru calatorii scurte"],
      en: ["Local place in Luxembourg", "Good for day trips", "Easy to combine with nearby towns", "Family friendly base", "Relevant for short travel searches"]
    },
    image: "/geo-images/luxembourg/beaufort.webp"
  },
  {
    id: "city-consdorf",
    type: "city",
    parent: "LU",
    coords: [6.3350, 49.7840] as [number, number],
    name: {
      de: "Consdorf",
      hu: "Consdorf",
      ro: "Consdorf",
      en: "Consdorf"
    },
    description: {
      de: "Consdorf ist ein lokaler Ausgangspunkt in Luxemburg fuer kurze Reisen und regionale Erkundungen. Der Ort laesst sich leicht mit Nachbardoerfern, Wanderzielen und Tagesrouten verbinden. Fuer city break Luxembourg, family travel und ruhige Wochenendstopps ist Consdorf sehr brauchbar. Die Lage macht den Ort auch fuer Suchen nach kleineren Luxemburg-Zielen relevant.",
      hu: "Consdorf egy helyi kiindulopont Luxembourgban rovid utazasokhoz es regionalis felfedezeshez. A telepules konnyen osszekotheto a kornyeki falvakkal, turazohelyekkel es egynapos utvonalakkal. A city break Luxembourg, family travel es nyugodt weekend stopover kereseseiben jol mukodik. A fekves miatt a kisebb luxemburgi helyek kozott is relevans.",
      ro: "Consdorf este un punct local de pornire in Luxemburg pentru calatorii scurte si explorare regionala. Localitatea se combina usor cu satele vecine, locurile de drumetie si traseele de o zi. Pentru city break Luxembourg, family travel si weekend stopover linistit, Consdorf este o alegere buna. Pozitia o face relevanta si in cautarile pentru locuri mai mici din Luxemburg.",
      en: "Consdorf is a local base in Luxembourg for short trips and regional exploration. The town is easy to combine with nearby villages, hiking spots, and day routes. It works well for city break Luxembourg, family travel, and quiet weekend stopovers. The location keeps it relevant for searches around smaller Luxembourg places."
    },
    facts: {
      de: ["Lokaler Ort in Luxemburg", "Gut fuer Tagesausfluege", "Mit Nachbarorten gut kombinierbar", "Familienfreundliche Basis", "Relevant fuer Kurzreisen"],
      hu: ["Helyi telepules Luxemburgban", "Jo egynapos kirandulasokhoz", "A kornyeki helyekkel jol kombinálhato", "Csaladbarat bazis", "Relevans rovid utazasi celpont"],
      ro: ["Localitate din Luxemburg", "Buna pentru excursii de o zi", "Se combina usor cu satele vecine", "Baza family friendly", "Relevanta pentru calatorii scurte"],
      en: ["Local place in Luxembourg", "Good for day trips", "Easy to combine with nearby towns", "Family friendly base", "Relevant for short travel searches"]
    },
    image: "/geo-images/luxembourg/consdorf.webp"
  },
  {
    id: "city-waldbillig",
    type: "city",
    parent: "LU",
    coords: [6.2960, 49.8010] as [number, number],
    name: {
      de: "Waldbillig",
      hu: "Waldbillig",
      ro: "Waldbillig",
      en: "Waldbillig"
    },
    description: {
      de: "Waldbillig ist ein lokaler Ausgangspunkt in Luxemburg fuer kurze Reisen und regionale Erkundungen. Der Ort laesst sich leicht mit Nachbardoerfern, Wanderzielen und Tagesrouten verbinden. Fuer city break Luxembourg, family travel und ruhige Wochenendstopps ist Waldbillig sehr brauchbar. Die Lage macht den Ort auch fuer Suchen nach kleineren Luxemburg-Zielen relevant.",
      hu: "Waldbillig egy helyi kiindulopont Luxembourgban rovid utazasokhoz es regionalis felfedezeshez. A telepules konnyen osszekotheto a kornyeki falvakkal, turazohelyekkel es egynapos utvonalakkal. A city break Luxembourg, family travel es nyugodt weekend stopover kereseseiben jol mukodik. A fekves miatt a kisebb luxemburgi helyek kozott is relevans.",
      ro: "Waldbillig este un punct local de pornire in Luxemburg pentru calatorii scurte si explorare regionala. Localitatea se combina usor cu satele vecine, locurile de drumetie si traseele de o zi. Pentru city break Luxembourg, family travel si weekend stopover linistit, Waldbillig este o alegere buna. Pozitia o face relevanta si in cautarile pentru locuri mai mici din Luxemburg.",
      en: "Waldbillig is a local base in Luxembourg for short trips and regional exploration. The town is easy to combine with nearby villages, hiking spots, and day routes. It works well for city break Luxembourg, family travel, and quiet weekend stopovers. The location keeps it relevant for searches around smaller Luxembourg places."
    },
    facts: {
      de: ["Lokaler Ort in Luxemburg", "Gut fuer Tagesausfluege", "Mit Nachbarorten gut kombinierbar", "Familienfreundliche Basis", "Relevant fuer Kurzreisen"],
      hu: ["Helyi telepules Luxemburgban", "Jo egynapos kirandulasokhoz", "A kornyeki helyekkel jol kombinálhato", "Csaladbarat bazis", "Relevans rovid utazasi celpont"],
      ro: ["Localitate din Luxemburg", "Buna pentru excursii de o zi", "Se combina usor cu satele vecine", "Baza family friendly", "Relevanta pentru calatorii scurte"],
      en: ["Local place in Luxembourg", "Good for day trips", "Easy to combine with nearby towns", "Family friendly base", "Relevant for short travel searches"]
    },
    image: "/geo-images/luxembourg/waldbillig.webp"
  },
  {
    id: "city-weiswampach",
    type: "city",
    parent: "LU",
    coords: [6.0750, 50.0550] as [number, number],
    name: {
      de: "Weiswampach",
      hu: "Weiswampach",
      ro: "Weiswampach",
      en: "Weiswampach"
    },
    description: {
      de: "Weiswampach ist ein lokaler Ausgangspunkt in Luxemburg fuer kurze Reisen und regionale Erkundungen. Der Ort laesst sich leicht mit Nachbardoerfern, Wanderzielen und Tagesrouten verbinden. Fuer city break Luxembourg, family travel und ruhige Wochenendstopps ist Weiswampach sehr brauchbar. Die Lage macht den Ort auch fuer Suchen nach kleineren Luxemburg-Zielen relevant.",
      hu: "Weiswampach egy helyi kiindulopont Luxembourgban rovid utazasokhoz es regionalis felfedezeshez. A telepules konnyen osszekotheto a kornyeki falvakkal, turazohelyekkel es egynapos utvonalakkal. A city break Luxembourg, family travel es nyugodt weekend stopover kereseseiben jol mukodik. A fekves miatt a kisebb luxemburgi helyek kozott is relevans.",
      ro: "Weiswampach este un punct local de pornire in Luxemburg pentru calatorii scurte si explorare regionala. Localitatea se combina usor cu satele vecine, locurile de drumetie si traseele de o zi. Pentru city break Luxembourg, family travel si weekend stopover linistit, Weiswampach este o alegere buna. Pozitia o face relevanta si in cautarile pentru locuri mai mici din Luxemburg.",
      en: "Weiswampach is a local base in Luxembourg for short trips and regional exploration. The town is easy to combine with nearby villages, hiking spots, and day routes. It works well for city break Luxembourg, family travel, and quiet weekend stopovers. The location keeps it relevant for searches around smaller Luxembourg places."
    },
    facts: {
      de: ["Lokaler Ort in Luxemburg", "Gut fuer Tagesausfluege", "Mit Nachbarorten gut kombinierbar", "Familienfreundliche Basis", "Relevant fuer Kurzreisen"],
      hu: ["Helyi telepules Luxemburgban", "Jo egynapos kirandulasokhoz", "A kornyeki helyekkel jol kombinálhato", "Csaladbarat bazis", "Relevans rovid utazasi celpont"],
      ro: ["Localitate din Luxemburg", "Buna pentru excursii de o zi", "Se combina usor cu satele vecine", "Baza family friendly", "Relevanta pentru calatorii scurte"],
      en: ["Local place in Luxembourg", "Good for day trips", "Easy to combine with nearby towns", "Family friendly base", "Relevant for short travel searches"]
    },
    image: "/geo-images/luxembourg/weiswampach.webp"
  },
  {
    id: "city-troisvierges",
    type: "city",
    parent: "LU",
    coords: [6.0005, 50.1220] as [number, number],
    name: {
      de: "Troisvierges",
      hu: "Troisvierges",
      ro: "Troisvierges",
      en: "Troisvierges"
    },
    description: {
      de: "Troisvierges ist ein lokaler Ausgangspunkt in Luxemburg fuer kurze Reisen und regionale Erkundungen. Der Ort laesst sich leicht mit Nachbardoerfern, Wanderzielen und Tagesrouten verbinden. Fuer city break Luxembourg, family travel und ruhige Wochenendstopps ist Troisvierges sehr brauchbar. Die Lage macht den Ort auch fuer Suchen nach kleineren Luxemburg-Zielen relevant.",
      hu: "Troisvierges egy helyi kiindulopont Luxembourgban rovid utazasokhoz es regionalis felfedezeshez. A telepules konnyen osszekotheto a kornyeki falvakkal, turazohelyekkel es egynapos utvonalakkal. A city break Luxembourg, family travel es nyugodt weekend stopover kereseseiben jol mukodik. A fekves miatt a kisebb luxemburgi helyek kozott is relevans.",
      ro: "Troisvierges este un punct local de pornire in Luxemburg pentru calatorii scurte si explorare regionala. Localitatea se combina usor cu satele vecine, locurile de drumetie si traseele de o zi. Pentru city break Luxembourg, family travel si weekend stopover linistit, Troisvierges este o alegere buna. Pozitia o face relevanta si in cautarile pentru locuri mai mici din Luxemburg.",
      en: "Troisvierges is a local base in Luxembourg for short trips and regional exploration. The town is easy to combine with nearby villages, hiking spots, and day routes. It works well for city break Luxembourg, family travel, and quiet weekend stopovers. The location keeps it relevant for searches around smaller Luxembourg places."
    },
    facts: {
      de: ["Lokaler Ort in Luxemburg", "Gut fuer Tagesausfluege", "Mit Nachbarorten gut kombinierbar", "Familienfreundliche Basis", "Relevant fuer Kurzreisen"],
      hu: ["Helyi telepules Luxemburgban", "Jo egynapos kirandulasokhoz", "A kornyeki helyekkel jol kombinálhato", "Csaladbarat bazis", "Relevans rovid utazasi celpont"],
      ro: ["Localitate din Luxemburg", "Buna pentru excursii de o zi", "Se combina usor cu satele vecine", "Baza family friendly", "Relevanta pentru calatorii scurte"],
      en: ["Local place in Luxembourg", "Good for day trips", "Easy to combine with nearby towns", "Family friendly base", "Relevant for short travel searches"]
    },
    image: "/geo-images/luxembourg/troisvierges.webp"
  },
  {
    id: "city-beckerich",
    type: "city",
    parent: "LU",
    coords: [5.8865, 49.7280] as [number, number],
    name: {
      de: "Beckerich",
      hu: "Beckerich",
      ro: "Beckerich",
      en: "Beckerich"
    },
    description: {
      de: "Beckerich ist ein lokaler Ausgangspunkt in Luxemburg fuer kurze Reisen und regionale Erkundungen. Der Ort laesst sich leicht mit Nachbardoerfern, Wanderzielen und Tagesrouten verbinden. Fuer city break Luxembourg, family travel und ruhige Wochenendstopps ist Beckerich sehr brauchbar. Die Lage macht den Ort auch fuer Suchen nach kleineren Luxemburg-Zielen relevant.",
      hu: "Beckerich egy helyi kiindulopont Luxembourgban rovid utazasokhoz es regionalis felfedezeshez. A telepules konnyen osszekotheto a kornyeki falvakkal, turazohelyekkel es egynapos utvonalakkal. A city break Luxembourg, family travel es nyugodt weekend stopover kereseseiben jol mukodik. A fekves miatt a kisebb luxemburgi helyek kozott is relevans.",
      ro: "Beckerich este un punct local de pornire in Luxemburg pentru calatorii scurte si explorare regionala. Localitatea se combina usor cu satele vecine, locurile de drumetie si traseele de o zi. Pentru city break Luxembourg, family travel si weekend stopover linistit, Beckerich este o alegere buna. Pozitia o face relevanta si in cautarile pentru locuri mai mici din Luxemburg.",
      en: "Beckerich is a local base in Luxembourg for short trips and regional exploration. The town is easy to combine with nearby villages, hiking spots, and day routes. It works well for city break Luxembourg, family travel, and quiet weekend stopovers. The location keeps it relevant for searches around smaller Luxembourg places."
    },
    facts: {
      de: ["Lokaler Ort in Luxemburg", "Gut fuer Tagesausfluege", "Mit Nachbarorten gut kombinierbar", "Familienfreundliche Basis", "Relevant fuer Kurzreisen"],
      hu: ["Helyi telepules Luxemburgban", "Jo egynapos kirandulasokhoz", "A kornyeki helyekkel jol kombinálhato", "Csaladbarat bazis", "Relevans rovid utazasi celpont"],
      ro: ["Localitate din Luxemburg", "Buna pentru excursii de o zi", "Se combina usor cu satele vecine", "Baza family friendly", "Relevanta pentru calatorii scurte"],
      en: ["Local place in Luxembourg", "Good for day trips", "Easy to combine with nearby towns", "Family friendly base", "Relevant for short travel searches"]
    },
    image: "/geo-images/luxembourg/beckerich.webp"
  },
  {
    id: "city-walferdange",
    type: "city",
    parent: "LU",
    coords: [6.1290, 49.6590] as [number, number],
    name: {
      de: "Walferdange",
      hu: "Walferdange",
      ro: "Walferdange",
      en: "Walferdange"
    },
    description: {
      de: "Walferdange ist ein lokaler Ausgangspunkt in Luxemburg fuer kurze Reisen und regionale Erkundungen. Der Ort laesst sich leicht mit Nachbardoerfern, Wanderzielen und Tagesrouten verbinden. Fuer city break Luxembourg, family travel und ruhige Wochenendstopps ist Walferdange sehr brauchbar. Die Lage macht den Ort auch fuer Suchen nach kleineren Luxemburg-Zielen relevant.",
      hu: "Walferdange egy helyi kiindulopont Luxembourgban rovid utazasokhoz es regionalis felfedezeshez. A telepules konnyen osszekotheto a kornyeki falvakkal, turazohelyekkel es egynapos utvonalakkal. A city break Luxembourg, family travel es nyugodt weekend stopover kereseseiben jol mukodik. A fekves miatt a kisebb luxemburgi helyek kozott is relevans.",
      ro: "Walferdange este un punct local de pornire in Luxemburg pentru calatorii scurte si explorare regionala. Localitatea se combina usor cu satele vecine, locurile de drumetie si traseele de o zi. Pentru city break Luxembourg, family travel si weekend stopover linistit, Walferdange este o alegere buna. Pozitia o face relevanta si in cautarile pentru locuri mai mici din Luxemburg.",
      en: "Walferdange is a local base in Luxembourg for short trips and regional exploration. The town is easy to combine with nearby villages, hiking spots, and day routes. It works well for city break Luxembourg, family travel, and quiet weekend stopovers. The location keeps it relevant for searches around smaller Luxembourg places."
    },
    facts: {
      de: ["Lokaler Ort in Luxemburg", "Gut fuer Tagesausfluege", "Mit Nachbarorten gut kombinierbar", "Familienfreundliche Basis", "Relevant fuer Kurzreisen"],
      hu: ["Helyi telepules Luxemburgban", "Jo egynapos kirandulasokhoz", "A kornyeki helyekkel jol kombinálhato", "Csaladbarat bazis", "Relevans rovid utazasi celpont"],
      ro: ["Localitate din Luxemburg", "Buna pentru excursii de o zi", "Se combina usor cu satele vecine", "Baza family friendly", "Relevanta pentru calatorii scurte"],
      en: ["Local place in Luxembourg", "Good for day trips", "Easy to combine with nearby towns", "Family friendly base", "Relevant for short travel searches"]
    },
    image: "/geo-images/luxembourg/walferdange.webp"
  },
  {
    id: "city-strassen",
    type: "city",
    parent: "LU",
    coords: [6.0730, 49.6200] as [number, number],
    name: {
      de: "Strassen",
      hu: "Strassen",
      ro: "Strassen",
      en: "Strassen"
    },
    description: {
      de: "Strassen ist ein lokaler Ausgangspunkt in Luxemburg fuer kurze Reisen und regionale Erkundungen. Der Ort laesst sich leicht mit Nachbardoerfern, Wanderzielen und Tagesrouten verbinden. Fuer city break Luxembourg, family travel und ruhige Wochenendstopps ist Strassen sehr brauchbar. Die Lage macht den Ort auch fuer Suchen nach kleineren Luxemburg-Zielen relevant.",
      hu: "Strassen egy helyi kiindulopont Luxembourgban rovid utazasokhoz es regionalis felfedezeshez. A telepules konnyen osszekotheto a kornyeki falvakkal, turazohelyekkel es egynapos utvonalakkal. A city break Luxembourg, family travel es nyugodt weekend stopover kereseseiben jol mukodik. A fekves miatt a kisebb luxemburgi helyek kozott is relevans.",
      ro: "Strassen este un punct local de pornire in Luxemburg pentru calatorii scurte si explorare regionala. Localitatea se combina usor cu satele vecine, locurile de drumetie si traseele de o zi. Pentru city break Luxembourg, family travel si weekend stopover linistit, Strassen este o alegere buna. Pozitia o face relevanta si in cautarile pentru locuri mai mici din Luxemburg.",
      en: "Strassen is a local base in Luxembourg for short trips and regional exploration. The town is easy to combine with nearby villages, hiking spots, and day routes. It works well for city break Luxembourg, family travel, and quiet weekend stopovers. The location keeps it relevant for searches around smaller Luxembourg places."
    },
    facts: {
      de: ["Lokaler Ort in Luxemburg", "Gut fuer Tagesausfluege", "Mit Nachbarorten gut kombinierbar", "Familienfreundliche Basis", "Relevant fuer Kurzreisen"],
      hu: ["Helyi telepules Luxemburgban", "Jo egynapos kirandulasokhoz", "A kornyeki helyekkel jol kombinálhato", "Csaladbarat bazis", "Relevans rovid utazasi celpont"],
      ro: ["Localitate din Luxemburg", "Buna pentru excursii de o zi", "Se combina usor cu satele vecine", "Baza family friendly", "Relevanta pentru calatorii scurte"],
      en: ["Local place in Luxembourg", "Good for day trips", "Easy to combine with nearby towns", "Family friendly base", "Relevant for short travel searches"]
    },
    image: "/geo-images/luxembourg/strassen.webp"
  },
  {
    id: "city-mamer",
    type: "city",
    parent: "LU",
    coords: [6.0225, 49.6275] as [number, number],
    name: {
      de: "Mamer",
      hu: "Mamer",
      ro: "Mamer",
      en: "Mamer"
    },
    description: {
      de: "Mamer ist ein lokaler Ausgangspunkt in Luxemburg fuer kurze Reisen und regionale Erkundungen. Der Ort laesst sich leicht mit Nachbardoerfern, Wanderzielen und Tagesrouten verbinden. Fuer city break Luxembourg, family travel und ruhige Wochenendstopps ist Mamer sehr brauchbar. Die Lage macht den Ort auch fuer Suchen nach kleineren Luxemburg-Zielen relevant.",
      hu: "Mamer egy helyi kiindulopont Luxembourgban rovid utazasokhoz es regionalis felfedezeshez. A telepules konnyen osszekotheto a kornyeki falvakkal, turazohelyekkel es egynapos utvonalakkal. A city break Luxembourg, family travel es nyugodt weekend stopover kereseseiben jol mukodik. A fekves miatt a kisebb luxemburgi helyek kozott is relevans.",
      ro: "Mamer este un punct local de pornire in Luxemburg pentru calatorii scurte si explorare regionala. Localitatea se combina usor cu satele vecine, locurile de drumetie si traseele de o zi. Pentru city break Luxembourg, family travel si weekend stopover linistit, Mamer este o alegere buna. Pozitia o face relevanta si in cautarile pentru locuri mai mici din Luxemburg.",
      en: "Mamer is a local base in Luxembourg for short trips and regional exploration. The town is easy to combine with nearby villages, hiking spots, and day routes. It works well for city break Luxembourg, family travel, and quiet weekend stopovers. The location keeps it relevant for searches around smaller Luxembourg places."
    },
    facts: {
      de: ["Lokaler Ort in Luxemburg", "Gut fuer Tagesausfluege", "Mit Nachbarorten gut kombinierbar", "Familienfreundliche Basis", "Relevant fuer Kurzreisen"],
      hu: ["Helyi telepules Luxemburgban", "Jo egynapos kirandulasokhoz", "A kornyeki helyekkel jol kombinálhato", "Csaladbarat bazis", "Relevans rovid utazasi celpont"],
      ro: ["Localitate din Luxemburg", "Buna pentru excursii de o zi", "Se combina usor cu satele vecine", "Baza family friendly", "Relevanta pentru calatorii scurte"],
      en: ["Local place in Luxembourg", "Good for day trips", "Easy to combine with nearby towns", "Family friendly base", "Relevant for short travel searches"]
    },
    image: "/geo-images/luxembourg/mamer.webp"
  },
  {
    id: "city-hesperange",
    type: "city",
    parent: "LU",
    coords: [6.1540, 49.5750] as [number, number],
    name: {
      de: "Hesperange",
      hu: "Hesperange",
      ro: "Hesperange",
      en: "Hesperange"
    },
    description: {
      de: "Hesperange ist ein lokaler Ausgangspunkt in Luxemburg fuer kurze Reisen und regionale Erkundungen. Der Ort laesst sich leicht mit Nachbardoerfern, Wanderzielen und Tagesrouten verbinden. Fuer city break Luxembourg, family travel und ruhige Wochenendstopps ist Hesperange sehr brauchbar. Die Lage macht den Ort auch fuer Suchen nach kleineren Luxemburg-Zielen relevant.",
      hu: "Hesperange egy helyi kiindulopont Luxembourgban rovid utazasokhoz es regionalis felfedezeshez. A telepules konnyen osszekotheto a kornyeki falvakkal, turazohelyekkel es egynapos utvonalakkal. A city break Luxembourg, family travel es nyugodt weekend stopover kereseseiben jol mukodik. A fekves miatt a kisebb luxemburgi helyek kozott is relevans.",
      ro: "Hesperange este un punct local de pornire in Luxemburg pentru calatorii scurte si explorare regionala. Localitatea se combina usor cu satele vecine, locurile de drumetie si traseele de o zi. Pentru city break Luxembourg, family travel si weekend stopover linistit, Hesperange este o alegere buna. Pozitia o face relevanta si in cautarile pentru locuri mai mici din Luxemburg.",
      en: "Hesperange is a local base in Luxembourg for short trips and regional exploration. The town is easy to combine with nearby villages, hiking spots, and day routes. It works well for city break Luxembourg, family travel, and quiet weekend stopovers. The location keeps it relevant for searches around smaller Luxembourg places."
    },
    facts: {
      de: ["Lokaler Ort in Luxemburg", "Gut fuer Tagesausfluege", "Mit Nachbarorten gut kombinierbar", "Familienfreundliche Basis", "Relevant fuer Kurzreisen"],
      hu: ["Helyi telepules Luxemburgban", "Jo egynapos kirandulasokhoz", "A kornyeki helyekkel jol kombinálhato", "Csaladbarat bazis", "Relevans rovid utazasi celpont"],
      ro: ["Localitate din Luxemburg", "Buna pentru excursii de o zi", "Se combina usor cu satele vecine", "Baza family friendly", "Relevanta pentru calatorii scurte"],
      en: ["Local place in Luxembourg", "Good for day trips", "Easy to combine with nearby towns", "Family friendly base", "Relevant for short travel searches"]
    },
    image: "/geo-images/luxembourg/hesperange.webp"
  },
  {
    id: "city-betzdorf",
    type: "city",
    parent: "LU",
    coords: [6.3480, 49.6878] as [number, number],
    name: {
      de: "Betzdorf",
      hu: "Betzdorf",
      ro: "Betzdorf",
      en: "Betzdorf"
    },
    description: {
      de: "Betzdorf ist ein lokaler Ausgangspunkt in Luxemburg fuer kurze Reisen und regionale Erkundungen. Der Ort laesst sich leicht mit Nachbardoerfern, Wanderzielen und Tagesrouten verbinden. Fuer city break Luxembourg, family travel und ruhige Wochenendstopps ist Betzdorf sehr brauchbar. Die Lage macht den Ort auch fuer Suchen nach kleineren Luxemburg-Zielen relevant.",
      hu: "Betzdorf egy helyi kiindulopont Luxembourgban rovid utazasokhoz es regionalis felfedezeshez. A telepules konnyen osszekotheto a kornyeki falvakkal, turazohelyekkel es egynapos utvonalakkal. A city break Luxembourg, family travel es nyugodt weekend stopover kereseseiben jol mukodik. A fekves miatt a kisebb luxemburgi helyek kozott is relevans.",
      ro: "Betzdorf este un punct local de pornire in Luxemburg pentru calatorii scurte si explorare regionala. Localitatea se combina usor cu satele vecine, locurile de drumetie si traseele de o zi. Pentru city break Luxembourg, family travel si weekend stopover linistit, Betzdorf este o alegere buna. Pozitia o face relevanta si in cautarile pentru locuri mai mici din Luxemburg.",
      en: "Betzdorf is a local base in Luxembourg for short trips and regional exploration. The town is easy to combine with nearby villages, hiking spots, and day routes. It works well for city break Luxembourg, family travel, and quiet weekend stopovers. The location keeps it relevant for searches around smaller Luxembourg places."
    },
    facts: {
      de: ["Lokaler Ort in Luxemburg", "Gut fuer Tagesausfluege", "Mit Nachbarorten gut kombinierbar", "Familienfreundliche Basis", "Relevant fuer Kurzreisen"],
      hu: ["Helyi telepules Luxemburgban", "Jo egynapos kirandulasokhoz", "A kornyeki helyekkel jol kombinálhato", "Csaladbarat bazis", "Relevans rovid utazasi celpont"],
      ro: ["Localitate din Luxemburg", "Buna pentru excursii de o zi", "Se combina usor cu satele vecine", "Baza family friendly", "Relevanta pentru calatorii scurte"],
      en: ["Local place in Luxembourg", "Good for day trips", "Easy to combine with nearby towns", "Family friendly base", "Relevant for short travel searches"]
    },
    image: "/geo-images/luxembourg/betzdorf.webp"
  },
  {
    id: "city-biwer",
    type: "city",
    parent: "LU",
    coords: [6.3910, 49.6820] as [number, number],
    name: {
      de: "Biwer",
      hu: "Biwer",
      ro: "Biwer",
      en: "Biwer"
    },
    description: {
      de: "Biwer ist ein lokaler Ausgangspunkt in Luxemburg fuer kurze Reisen und regionale Erkundungen. Der Ort laesst sich leicht mit Nachbardoerfern, Wanderzielen und Tagesrouten verbinden. Fuer city break Luxembourg, family travel und ruhige Wochenendstopps ist Biwer sehr brauchbar. Die Lage macht den Ort auch fuer Suchen nach kleineren Luxemburg-Zielen relevant.",
      hu: "Biwer egy helyi kiindulopont Luxembourgban rovid utazasokhoz es regionalis felfedezeshez. A telepules konnyen osszekotheto a kornyeki falvakkal, turazohelyekkel es egynapos utvonalakkal. A city break Luxembourg, family travel es nyugodt weekend stopover kereseseiben jol mukodik. A fekves miatt a kisebb luxemburgi helyek kozott is relevans.",
      ro: "Biwer este un punct local de pornire in Luxemburg pentru calatorii scurte si explorare regionala. Localitatea se combina usor cu satele vecine, locurile de drumetie si traseele de o zi. Pentru city break Luxembourg, family travel si weekend stopover linistit, Biwer este o alegere buna. Pozitia o face relevanta si in cautarile pentru locuri mai mici din Luxemburg.",
      en: "Biwer is a local base in Luxembourg for short trips and regional exploration. The town is easy to combine with nearby villages, hiking spots, and day routes. It works well for city break Luxembourg, family travel, and quiet weekend stopovers. The location keeps it relevant for searches around smaller Luxembourg places."
    },
    facts: {
      de: ["Lokaler Ort in Luxemburg", "Gut fuer Tagesausfluege", "Mit Nachbarorten gut kombinierbar", "Familienfreundliche Basis", "Relevant fuer Kurzreisen"],
      hu: ["Helyi telepules Luxemburgban", "Jo egynapos kirandulasokhoz", "A kornyeki helyekkel jol kombinálhato", "Csaladbarat bazis", "Relevans rovid utazasi celpont"],
      ro: ["Localitate din Luxemburg", "Buna pentru excursii de o zi", "Se combina usor cu satele vecine", "Baza family friendly", "Relevanta pentru calatorii scurte"],
      en: ["Local place in Luxembourg", "Good for day trips", "Easy to combine with nearby towns", "Family friendly base", "Relevant for short travel searches"]
    },
    image: "/geo-images/luxembourg/biwer.webp"
  },
  {
    id: "city-petange",
    type: "city",
    parent: "LU",
    coords: [5.8800, 49.5580] as [number, number],
    name: {
      de: "Petange",
      hu: "Petange",
      ro: "Petange",
      en: "Petange"
    },
    description: {
      de: "Petange ist ein lokaler Ausgangspunkt in Luxemburg fuer kurze Reisen und regionale Erkundungen. Der Ort laesst sich leicht mit Nachbardoerfern, Wanderzielen und Tagesrouten verbinden. Fuer city break Luxembourg, family travel und ruhige Wochenendstopps ist Petange sehr brauchbar. Die Lage macht den Ort auch fuer Suchen nach kleineren Luxemburg-Zielen relevant.",
      hu: "Petange egy helyi kiindulopont Luxembourgban rovid utazasokhoz es regionalis felfedezeshez. A telepules konnyen osszekotheto a kornyeki falvakkal, turazohelyekkel es egynapos utvonalakkal. A city break Luxembourg, family travel es nyugodt weekend stopover kereseseiben jol mukodik. A fekves miatt a kisebb luxemburgi helyek kozott is relevans.",
      ro: "Petange este un punct local de pornire in Luxemburg pentru calatorii scurte si explorare regionala. Localitatea se combina usor cu satele vecine, locurile de drumetie si traseele de o zi. Pentru city break Luxembourg, family travel si weekend stopover linistit, Petange este o alegere buna. Pozitia o face relevanta si in cautarile pentru locuri mai mici din Luxemburg.",
      en: "Petange is a local base in Luxembourg for short trips and regional exploration. The town is easy to combine with nearby villages, hiking spots, and day routes. It works well for city break Luxembourg, family travel, and quiet weekend stopovers. The location keeps it relevant for searches around smaller Luxembourg places."
    },
    facts: {
      de: ["Lokaler Ort in Luxemburg", "Gut fuer Tagesausfluege", "Mit Nachbarorten gut kombinierbar", "Familienfreundliche Basis", "Relevant fuer Kurzreisen"],
      hu: ["Helyi telepules Luxemburgban", "Jo egynapos kirandulasokhoz", "A kornyeki helyekkel jol kombinálhato", "Csaladbarat bazis", "Relevans rovid utazasi celpont"],
      ro: ["Localitate din Luxemburg", "Buna pentru excursii de o zi", "Se combina usor cu satele vecine", "Baza family friendly", "Relevanta pentru calatorii scurte"],
      en: ["Local place in Luxembourg", "Good for day trips", "Easy to combine with nearby towns", "Family friendly base", "Relevant for short travel searches"]
    },
    image: "/geo-images/luxembourg/petange.webp"
  },
  {
    id: "historical-echternach-basilica",
    type: "historical",
    parent: "LU",
    coords: [6.4284, 49.8130] as [number, number],
    name: {
      de: "Basilika St. Willibrord",
      hu: "Szent Willibrord bazilika",
      ro: "Bazilica Sfantul Willibrord",
      en: "Basilica of St. Willibrord"
    },
    description: {
      de: "Basilika St. Willibrord ist ein klarer Kultur- und Geschichtsstopp in Luxemburg mit starkem Besuchscharakter. Der Ort verbindet historische Wirkung, gute Fotomotive und eine leicht erkennbare Lage. Fuer historical Luxembourg, landmark Luxembourg und weekend culture content ist Basilika St. Willibrord sehr stark. Der Besuch laesst sich gut mit umliegenden Staedten und Naturzielen kombinieren.",
      hu: "Szent Willibrord bazilika egy markans kultur- es tortenelmi megallo Luxembourgban. A hely tortenelmi hangulatot, jo fotomotumokat es konnyen felismerheto lokaciot ad. A historical Luxembourg, landmark Luxembourg es weekend culture tartalmakhoz Szent Willibrord bazilika nagyon eros. A latogatas jol osszekotheto a kornyeki varosokkal es termeszeti celpontokkal.",
      ro: "Bazilica Sfantul Willibrord este o oprire culturala si istorica clara in Luxemburg, cu o atractie puternica pentru vizitatori. Locul combina valoare istorica, cadre foto bune si o pozitie usor de recunoscut. Pentru historical Luxembourg, landmark Luxembourg si weekend culture content, Bazilica Sfantul Willibrord este foarte puternic. Vizita se poate combina usor cu orasele din jur si cu obiectivele naturale.",
      en: "Basilica of St. Willibrord is a clear culture and history stop in Luxembourg with strong visitor appeal. The site combines historical value, good photo angles, and an easy to recognize location. For historical Luxembourg, landmark Luxembourg, and weekend culture content, Basilica of St. Willibrord is very strong. The visit pairs well with nearby towns and scenic nature stops."
    },
    facts: {
      de: ["Historischer Punkt von Interesse", "Starker kultureller Wert", "Gut als Fotostopp", "Leicht in einen Tagesplan integrierbar", "Relevant fuer Kulturreisen"],
      hu: ["Tortenelmi latnivalo", "Eros kulturális ertek", "Jol mukodik fotozott megallokent", "Egyszeruen beillesztheto egy napi tervbe", "Relevans kulturális utazasokhoz"],
      ro: ["Punct istoric de interes", "Valoare culturala puternica", "Bun ca oprire foto", "Usor de integrat intr-un traseu de o zi", "Relevant pentru calatorii culturale"],
      en: ["Historic point of interest", "Strong cultural value", "Good photo stop", "Easy to add to a day plan", "Relevant for culture travel"]
    },
    image: "/geo-images/luxembourg/echternach-basilica.webp"
  },
  {
    id: "historical-victor-hugo-house",
    type: "historical",
    parent: "LU",
    coords: [6.2100, 49.9360] as [number, number],
    name: {
      de: "Victor-Hugo-Haus",
      hu: "Victor Hugo haz",
      ro: "Casa Victor Hugo",
      en: "Victor Hugo House"
    },
    description: {
      de: "Victor-Hugo-Haus ist ein klarer Kultur- und Geschichtsstopp in Luxemburg mit starkem Besuchscharakter. Der Ort verbindet historische Wirkung, gute Fotomotive und eine leicht erkennbare Lage. Fuer historical Luxembourg, landmark Luxembourg und weekend culture content ist Victor-Hugo-Haus sehr stark. Der Besuch laesst sich gut mit umliegenden Staedten und Naturzielen kombinieren.",
      hu: "Victor Hugo haz egy markans kultur- es tortenelmi megallo Luxembourgban. A hely tortenelmi hangulatot, jo fotomotumokat es konnyen felismerheto lokaciot ad. A historical Luxembourg, landmark Luxembourg es weekend culture tartalmakhoz Victor Hugo haz nagyon eros. A latogatas jol osszekotheto a kornyeki varosokkal es termeszeti celpontokkal.",
      ro: "Casa Victor Hugo este o oprire culturala si istorica clara in Luxemburg, cu o atractie puternica pentru vizitatori. Locul combina valoare istorica, cadre foto bune si o pozitie usor de recunoscut. Pentru historical Luxembourg, landmark Luxembourg si weekend culture content, Casa Victor Hugo este foarte puternic. Vizita se poate combina usor cu orasele din jur si cu obiectivele naturale.",
      en: "Victor Hugo House is a clear culture and history stop in Luxembourg with strong visitor appeal. The site combines historical value, good photo angles, and an easy to recognize location. For historical Luxembourg, landmark Luxembourg, and weekend culture content, Victor Hugo House is very strong. The visit pairs well with nearby towns and scenic nature stops."
    },
    facts: {
      de: ["Historischer Punkt von Interesse", "Starker kultureller Wert", "Gut als Fotostopp", "Leicht in einen Tagesplan integrierbar", "Relevant fuer Kulturreisen"],
      hu: ["Tortenelmi latnivalo", "Eros kulturális ertek", "Jol mukodik fotozott megallokent", "Egyszeruen beillesztheto egy napi tervbe", "Relevans kulturális utazasokhoz"],
      ro: ["Punct istoric de interes", "Valoare culturala puternica", "Bun ca oprire foto", "Usor de integrat intr-un traseu de o zi", "Relevant pentru calatorii culturale"],
      en: ["Historic point of interest", "Strong cultural value", "Good photo stop", "Easy to add to a day plan", "Relevant for culture travel"]
    },
    image: "/geo-images/luxembourg/victor-hugo-house.webp"
  },
  {
    id: "historical-berg-castle",
    type: "historical",
    parent: "LU",
    coords: [6.1220, 49.6110] as [number, number],
    name: {
      de: "Schloss Berg",
      hu: "Berg kastely",
      ro: "Castelul Berg",
      en: "Berg Castle"
    },
    description: {
      de: "Schloss Berg ist ein klarer Kultur- und Geschichtsstopp in Luxemburg mit starkem Besuchscharakter. Der Ort verbindet historische Wirkung, gute Fotomotive und eine leicht erkennbare Lage. Fuer historical Luxembourg, landmark Luxembourg und weekend culture content ist Schloss Berg sehr stark. Der Besuch laesst sich gut mit umliegenden Staedten und Naturzielen kombinieren.",
      hu: "Berg kastely egy markans kultur- es tortenelmi megallo Luxembourgban. A hely tortenelmi hangulatot, jo fotomotumokat es konnyen felismerheto lokaciot ad. A historical Luxembourg, landmark Luxembourg es weekend culture tartalmakhoz Berg kastely nagyon eros. A latogatas jol osszekotheto a kornyeki varosokkal es termeszeti celpontokkal.",
      ro: "Castelul Berg este o oprire culturala si istorica clara in Luxemburg, cu o atractie puternica pentru vizitatori. Locul combina valoare istorica, cadre foto bune si o pozitie usor de recunoscut. Pentru historical Luxembourg, landmark Luxembourg si weekend culture content, Castelul Berg este foarte puternic. Vizita se poate combina usor cu orasele din jur si cu obiectivele naturale.",
      en: "Berg Castle is a clear culture and history stop in Luxembourg with strong visitor appeal. The site combines historical value, good photo angles, and an easy to recognize location. For historical Luxembourg, landmark Luxembourg, and weekend culture content, Berg Castle is very strong. The visit pairs well with nearby towns and scenic nature stops."
    },
    facts: {
      de: ["Historischer Punkt von Interesse", "Starker kultureller Wert", "Gut als Fotostopp", "Leicht in einen Tagesplan integrierbar", "Relevant fuer Kulturreisen"],
      hu: ["Tortenelmi latnivalo", "Eros kulturális ertek", "Jol mukodik fotozott megallokent", "Egyszeruen beillesztheto egy napi tervbe", "Relevans kulturális utazasokhoz"],
      ro: ["Punct istoric de interes", "Valoare culturala puternica", "Bun ca oprire foto", "Usor de integrat intr-un traseu de o zi", "Relevant pentru calatorii culturale"],
      en: ["Historic point of interest", "Strong cultural value", "Good photo stop", "Easy to add to a day plan", "Relevant for culture travel"]
    },
    image: "/geo-images/luxembourg/berg-castle.webp"
  },
  {
    id: "historical-schengen-monument",
    type: "historical",
    parent: "LU",
    coords: [6.3548, 49.4715] as [number, number],
    name: {
      de: "Schengener Denkmal",
      hu: "Schengeni emlekmu",
      ro: "Monumentul Schengen",
      en: "Schengen Monument"
    },
    description: {
      de: "Schengener Denkmal ist ein klarer Kultur- und Geschichtsstopp in Luxemburg mit starkem Besuchscharakter. Der Ort verbindet historische Wirkung, gute Fotomotive und eine leicht erkennbare Lage. Fuer historical Luxembourg, landmark Luxembourg und weekend culture content ist Schengener Denkmal sehr stark. Der Besuch laesst sich gut mit umliegenden Staedten und Naturzielen kombinieren.",
      hu: "Schengeni emlekmu egy markans kultur- es tortenelmi megallo Luxembourgban. A hely tortenelmi hangulatot, jo fotomotumokat es konnyen felismerheto lokaciot ad. A historical Luxembourg, landmark Luxembourg es weekend culture tartalmakhoz Schengeni emlekmu nagyon eros. A latogatas jol osszekotheto a kornyeki varosokkal es termeszeti celpontokkal.",
      ro: "Monumentul Schengen este o oprire culturala si istorica clara in Luxemburg, cu o atractie puternica pentru vizitatori. Locul combina valoare istorica, cadre foto bune si o pozitie usor de recunoscut. Pentru historical Luxembourg, landmark Luxembourg si weekend culture content, Monumentul Schengen este foarte puternic. Vizita se poate combina usor cu orasele din jur si cu obiectivele naturale.",
      en: "Schengen Monument is a clear culture and history stop in Luxembourg with strong visitor appeal. The site combines historical value, good photo angles, and an easy to recognize location. For historical Luxembourg, landmark Luxembourg, and weekend culture content, Schengen Monument is very strong. The visit pairs well with nearby towns and scenic nature stops."
    },
    facts: {
      de: ["Historischer Punkt von Interesse", "Starker kultureller Wert", "Gut als Fotostopp", "Leicht in einen Tagesplan integrierbar", "Relevant fuer Kulturreisen"],
      hu: ["Tortenelmi latnivalo", "Eros kulturális ertek", "Jol mukodik fotozott megallokent", "Egyszeruen beillesztheto egy napi tervbe", "Relevans kulturális utazasokhoz"],
      ro: ["Punct istoric de interes", "Valoare culturala puternica", "Bun ca oprire foto", "Usor de integrat intr-un traseu de o zi", "Relevant pentru calatorii culturale"],
      en: ["Historic point of interest", "Strong cultural value", "Good photo stop", "Easy to add to a day plan", "Relevant for culture travel"]
    },
    image: "/geo-images/luxembourg/schengen-monument.webp"
  },
  {
    id: "historical-diekirch-military-history",
    type: "historical",
    parent: "LU",
    coords: [6.1550, 49.8695] as [number, number],
    name: {
      de: "Nationales Museum der Militaergeschichte",
      hu: "Nemzeti Hadtorteneti Muzeum",
      ro: "Muzeul National de Istorie Militara",
      en: "National Museum of Military History"
    },
    description: {
      de: "Nationales Museum der Militaergeschichte ist ein klarer Kultur- und Geschichtsstopp in Luxemburg mit starkem Besuchscharakter. Der Ort verbindet historische Wirkung, gute Fotomotive und eine leicht erkennbare Lage. Fuer historical Luxembourg, landmark Luxembourg und weekend culture content ist Nationales Museum der Militaergeschichte sehr stark. Der Besuch laesst sich gut mit umliegenden Staedten und Naturzielen kombinieren.",
      hu: "Nemzeti Hadtorteneti Muzeum egy markans kultur- es tortenelmi megallo Luxembourgban. A hely tortenelmi hangulatot, jo fotomotumokat es konnyen felismerheto lokaciot ad. A historical Luxembourg, landmark Luxembourg es weekend culture tartalmakhoz Nemzeti Hadtorteneti Muzeum nagyon eros. A latogatas jol osszekotheto a kornyeki varosokkal es termeszeti celpontokkal.",
      ro: "Muzeul National de Istorie Militara este o oprire culturala si istorica clara in Luxemburg, cu o atractie puternica pentru vizitatori. Locul combina valoare istorica, cadre foto bune si o pozitie usor de recunoscut. Pentru historical Luxembourg, landmark Luxembourg si weekend culture content, Muzeul National de Istorie Militara este foarte puternic. Vizita se poate combina usor cu orasele din jur si cu obiectivele naturale.",
      en: "National Museum of Military History is a clear culture and history stop in Luxembourg with strong visitor appeal. The site combines historical value, good photo angles, and an easy to recognize location. For historical Luxembourg, landmark Luxembourg, and weekend culture content, National Museum of Military History is very strong. The visit pairs well with nearby towns and scenic nature stops."
    },
    facts: {
      de: ["Historischer Punkt von Interesse", "Starker kultureller Wert", "Gut als Fotostopp", "Leicht in einen Tagesplan integrierbar", "Relevant fuer Kulturreisen"],
      hu: ["Tortenelmi latnivalo", "Eros kulturális ertek", "Jol mukodik fotozott megallokent", "Egyszeruen beillesztheto egy napi tervbe", "Relevans kulturális utazasokhoz"],
      ro: ["Punct istoric de interes", "Valoare culturala puternica", "Bun ca oprire foto", "Usor de integrat intr-un traseu de o zi", "Relevant pentru calatorii culturale"],
      en: ["Historic point of interest", "Strong cultural value", "Good photo stop", "Easy to add to a day plan", "Relevant for culture travel"]
    },
    image: "/geo-images/luxembourg/diekirch-military-history.webp"
  },
  {
    id: "landmark-bourglinster-castle",
    type: "landmark",
    parent: "LU",
    coords: [6.1928, 49.7190] as [number, number],
    name: {
      de: "Schloss Bourglinster",
      hu: "Bourglinster kastely",
      ro: "Castelul Bourglinster",
      en: "Bourglinster Castle"
    },
    description: {
      de: "Schloss Bourglinster ist ein klarer Kultur- und Geschichtsstopp in Luxemburg mit starkem Besuchscharakter. Der Ort verbindet historische Wirkung, gute Fotomotive und eine leicht erkennbare Lage. Fuer historical Luxembourg, landmark Luxembourg und weekend culture content ist Schloss Bourglinster sehr stark. Der Besuch laesst sich gut mit umliegenden Staedten und Naturzielen kombinieren.",
      hu: "Bourglinster kastely egy markans kultur- es tortenelmi megallo Luxembourgban. A hely tortenelmi hangulatot, jo fotomotumokat es konnyen felismerheto lokaciot ad. A historical Luxembourg, landmark Luxembourg es weekend culture tartalmakhoz Bourglinster kastely nagyon eros. A latogatas jol osszekotheto a kornyeki varosokkal es termeszeti celpontokkal.",
      ro: "Castelul Bourglinster este o oprire culturala si istorica clara in Luxemburg, cu o atractie puternica pentru vizitatori. Locul combina valoare istorica, cadre foto bune si o pozitie usor de recunoscut. Pentru historical Luxembourg, landmark Luxembourg si weekend culture content, Castelul Bourglinster este foarte puternic. Vizita se poate combina usor cu orasele din jur si cu obiectivele naturale.",
      en: "Bourglinster Castle is a clear culture and history stop in Luxembourg with strong visitor appeal. The site combines historical value, good photo angles, and an easy to recognize location. For historical Luxembourg, landmark Luxembourg, and weekend culture content, Bourglinster Castle is very strong. The visit pairs well with nearby towns and scenic nature stops."
    },
    facts: {
      de: ["Historischer Punkt von Interesse", "Starker kultureller Wert", "Gut als Fotostopp", "Leicht in einen Tagesplan integrierbar", "Relevant fuer Kulturreisen"],
      hu: ["Tortenelmi latnivalo", "Eros kulturális ertek", "Jol mukodik fotozott megallokent", "Egyszeruen beillesztheto egy napi tervbe", "Relevans kulturális utazasokhoz"],
      ro: ["Punct istoric de interes", "Valoare culturala puternica", "Bun ca oprire foto", "Usor de integrat intr-un traseu de o zi", "Relevant pentru calatorii culturale"],
      en: ["Historic point of interest", "Strong cultural value", "Good photo stop", "Easy to add to a day plan", "Relevant for culture travel"]
    },
    image: "/geo-images/luxembourg/bourglinster-castle.webp"
  },
  {
    id: "historical-roman-villa-echternach",
    type: "historical",
    parent: "LU",
    coords: [6.4248, 49.8032] as [number, number],
    name: {
      de: "Roemische Villa Echternach",
      hu: "Roman villa Echternach",
      ro: "Vila romana Echternach",
      en: "Roman Villa Echternach"
    },
    description: {
      de: "Roemische Villa Echternach ist ein klarer Kultur- und Geschichtsstopp in Luxemburg mit starkem Besuchscharakter. Der Ort verbindet historische Wirkung, gute Fotomotive und eine leicht erkennbare Lage. Fuer historical Luxembourg, landmark Luxembourg und weekend culture content ist Roemische Villa Echternach sehr stark. Der Besuch laesst sich gut mit umliegenden Staedten und Naturzielen kombinieren.",
      hu: "Roman villa Echternach egy markans kultur- es tortenelmi megallo Luxembourgban. A hely tortenelmi hangulatot, jo fotomotumokat es konnyen felismerheto lokaciot ad. A historical Luxembourg, landmark Luxembourg es weekend culture tartalmakhoz Roman villa Echternach nagyon eros. A latogatas jol osszekotheto a kornyeki varosokkal es termeszeti celpontokkal.",
      ro: "Vila romana Echternach este o oprire culturala si istorica clara in Luxemburg, cu o atractie puternica pentru vizitatori. Locul combina valoare istorica, cadre foto bune si o pozitie usor de recunoscut. Pentru historical Luxembourg, landmark Luxembourg si weekend culture content, Vila romana Echternach este foarte puternic. Vizita se poate combina usor cu orasele din jur si cu obiectivele naturale.",
      en: "Roman Villa Echternach is a clear culture and history stop in Luxembourg with strong visitor appeal. The site combines historical value, good photo angles, and an easy to recognize location. For historical Luxembourg, landmark Luxembourg, and weekend culture content, Roman Villa Echternach is very strong. The visit pairs well with nearby towns and scenic nature stops."
    },
    facts: {
      de: ["Historischer Punkt von Interesse", "Starker kultureller Wert", "Gut als Fotostopp", "Leicht in einen Tagesplan integrierbar", "Relevant fuer Kulturreisen"],
      hu: ["Tortenelmi latnivalo", "Eros kulturális ertek", "Jol mukodik fotozott megallokent", "Egyszeruen beillesztheto egy napi tervbe", "Relevans kulturális utazasokhoz"],
      ro: ["Punct istoric de interes", "Valoare culturala puternica", "Bun ca oprire foto", "Usor de integrat intr-un traseu de o zi", "Relevant pentru calatorii culturale"],
      en: ["Historic point of interest", "Strong cultural value", "Good photo stop", "Easy to add to a day plan", "Relevant for culture travel"]
    },
    image: "/geo-images/luxembourg/roman-villa-echternach.webp"
  },
  {
    id: "landmark-mersch-castle",
    type: "landmark",
    parent: "LU",
    coords: [6.1060, 49.7480] as [number, number],
    name: {
      de: "Schloss Mersch",
      hu: "Mersch kastely",
      ro: "Castelul Mersch",
      en: "Mersch Castle"
    },
    description: {
      de: "Schloss Mersch ist ein klarer Kultur- und Geschichtsstopp in Luxemburg mit starkem Besuchscharakter. Der Ort verbindet historische Wirkung, gute Fotomotive und eine leicht erkennbare Lage. Fuer historical Luxembourg, landmark Luxembourg und weekend culture content ist Schloss Mersch sehr stark. Der Besuch laesst sich gut mit umliegenden Staedten und Naturzielen kombinieren.",
      hu: "Mersch kastely egy markans kultur- es tortenelmi megallo Luxembourgban. A hely tortenelmi hangulatot, jo fotomotumokat es konnyen felismerheto lokaciot ad. A historical Luxembourg, landmark Luxembourg es weekend culture tartalmakhoz Mersch kastely nagyon eros. A latogatas jol osszekotheto a kornyeki varosokkal es termeszeti celpontokkal.",
      ro: "Castelul Mersch este o oprire culturala si istorica clara in Luxemburg, cu o atractie puternica pentru vizitatori. Locul combina valoare istorica, cadre foto bune si o pozitie usor de recunoscut. Pentru historical Luxembourg, landmark Luxembourg si weekend culture content, Castelul Mersch este foarte puternic. Vizita se poate combina usor cu orasele din jur si cu obiectivele naturale.",
      en: "Mersch Castle is a clear culture and history stop in Luxembourg with strong visitor appeal. The site combines historical value, good photo angles, and an easy to recognize location. For historical Luxembourg, landmark Luxembourg, and weekend culture content, Mersch Castle is very strong. The visit pairs well with nearby towns and scenic nature stops."
    },
    facts: {
      de: ["Historischer Punkt von Interesse", "Starker kultureller Wert", "Gut als Fotostopp", "Leicht in einen Tagesplan integrierbar", "Relevant fuer Kulturreisen"],
      hu: ["Tortenelmi latnivalo", "Eros kulturális ertek", "Jol mukodik fotozott megallokent", "Egyszeruen beillesztheto egy napi tervbe", "Relevans kulturális utazasokhoz"],
      ro: ["Punct istoric de interes", "Valoare culturala puternica", "Bun ca oprire foto", "Usor de integrat intr-un traseu de o zi", "Relevant pentru calatorii culturale"],
      en: ["Historic point of interest", "Strong cultural value", "Good photo stop", "Easy to add to a day plan", "Relevant for culture travel"]
    },
    image: "/geo-images/luxembourg/mersch-castle.webp"
  },
  {
    id: "river-our-river",
    type: "river",
    parent: "LU",
    coords: [6.1900, 50.0400] as [number, number],
    name: {
      de: "Our",
      hu: "Our",
      ro: "Our",
      en: "Our River"
    },
    description: {
      de: "Our steht fuer Landschaft, Ruhe und Outdoor-Erlebnis in Luxemburg. Die Lage eignet sich fuer Spaziergaenge, Aussichtspunkte und entspannte Naturzeit. Fuer river Luxembourg, forest Luxembourg und lake Luxembourg bringt Our starke Suchrelevanz. Besucher schaetzen den einfachen Zugang zu offenen Raeumen und typischen Luxemburg-Motiven.",
      hu: "Our Luxemburg tajat, nyugalmat es outdoor elmenyt jelent. A hely jo setakhoz, kilatohoz es piheno termeszetkozeli idohoz. A river Luxembourg, forest Luxembourg es lake Luxembourg kereseseiben Our jol teljesit. A latogatokat a nyitott terek es a tipikus luxemburgi tajmotumok vonzzak.",
      ro: "Our inseamna peisaj, liniste si experienta outdoor in Luxemburg. Zona este potrivita pentru plimbari, puncte de belvedere si timp relaxat in natura. Pentru river Luxembourg, forest Luxembourg si lake Luxembourg, Our aduce o relevanta buna in cautari. Vizitatorii apreciaza accesul usor la spatii deschise si la peisajele tipice Luxemburgului.",
      en: "Our River brings landscape, calm, and outdoor character to Luxembourg travel. The area works well for walks, viewpoints, and relaxed nature time. It supports searches such as river Luxembourg, forest Luxembourg, and lake Luxembourg. Visitors like it as a simple stop for fresh air and open scenery."
    },
    facts: {
      de: ["Outdoor-freundlicher Ort", "Gut fuer Spaziergaenge", "Starker Landschaftswert", "Einfacher Naturstopp", "Nutzlich fuer Reiseplanung"],
      hu: ["Outdoor barat hely", "Jo setakhoz", "Eros tajerték", "Egyszeru termeszeti megallo", "Hasznos utazas-tervezeshez"],
      ro: ["Loc prietenos pentru outdoor", "Bun pentru plimbari", "Valoare peisagistica puternica", "Oprire naturala simpla", "Util pentru planificarea calatoriei"],
      en: ["Outdoor friendly spot", "Good for walks", "Strong scenic value", "Easy nature stop", "Useful for trip planning"]
    },
    image: "/geo-images/luxembourg/our-river.webp"
  },
  {
    id: "river-alzette-river",
    type: "river",
    parent: "LU",
    coords: [6.1280, 49.6200] as [number, number],
    name: {
      de: "Alzette",
      hu: "Alzette",
      ro: "Alzette",
      en: "Alzette River"
    },
    description: {
      de: "Alzette steht fuer Landschaft, Ruhe und Outdoor-Erlebnis in Luxemburg. Die Lage eignet sich fuer Spaziergaenge, Aussichtspunkte und entspannte Naturzeit. Fuer river Luxembourg, forest Luxembourg und lake Luxembourg bringt Alzette starke Suchrelevanz. Besucher schaetzen den einfachen Zugang zu offenen Raeumen und typischen Luxemburg-Motiven.",
      hu: "Alzette Luxemburg tajat, nyugalmat es outdoor elmenyt jelent. A hely jo setakhoz, kilatohoz es piheno termeszetkozeli idohoz. A river Luxembourg, forest Luxembourg es lake Luxembourg kereseseiben Alzette jol teljesit. A latogatokat a nyitott terek es a tipikus luxemburgi tajmotumok vonzzak.",
      ro: "Alzette inseamna peisaj, liniste si experienta outdoor in Luxemburg. Zona este potrivita pentru plimbari, puncte de belvedere si timp relaxat in natura. Pentru river Luxembourg, forest Luxembourg si lake Luxembourg, Alzette aduce o relevanta buna in cautari. Vizitatorii apreciaza accesul usor la spatii deschise si la peisajele tipice Luxemburgului.",
      en: "Alzette River brings landscape, calm, and outdoor character to Luxembourg travel. The area works well for walks, viewpoints, and relaxed nature time. It supports searches such as river Luxembourg, forest Luxembourg, and lake Luxembourg. Visitors like it as a simple stop for fresh air and open scenery."
    },
    facts: {
      de: ["Outdoor-freundlicher Ort", "Gut fuer Spaziergaenge", "Starker Landschaftswert", "Einfacher Naturstopp", "Nutzlich fuer Reiseplanung"],
      hu: ["Outdoor barat hely", "Jo setakhoz", "Eros tajerték", "Egyszeru termeszeti megallo", "Hasznos utazas-tervezeshez"],
      ro: ["Loc prietenos pentru outdoor", "Bun pentru plimbari", "Valoare peisagistica puternica", "Oprire naturala simpla", "Util pentru planificarea calatoriei"],
      en: ["Outdoor friendly spot", "Good for walks", "Strong scenic value", "Easy nature stop", "Useful for trip planning"]
    },
    image: "/geo-images/luxembourg/alzette-river.webp"
  },
  {
    id: "river-clerve-river",
    type: "river",
    parent: "LU",
    coords: [6.0400, 49.9600] as [number, number],
    name: {
      de: "Clerve",
      hu: "Clerve",
      ro: "Clerve",
      en: "Clerve River"
    },
    description: {
      de: "Clerve steht fuer Landschaft, Ruhe und Outdoor-Erlebnis in Luxemburg. Die Lage eignet sich fuer Spaziergaenge, Aussichtspunkte und entspannte Naturzeit. Fuer river Luxembourg, forest Luxembourg und lake Luxembourg bringt Clerve starke Suchrelevanz. Besucher schaetzen den einfachen Zugang zu offenen Raeumen und typischen Luxemburg-Motiven.",
      hu: "Clerve Luxemburg tajat, nyugalmat es outdoor elmenyt jelent. A hely jo setakhoz, kilatohoz es piheno termeszetkozeli idohoz. A river Luxembourg, forest Luxembourg es lake Luxembourg kereseseiben Clerve jol teljesit. A latogatokat a nyitott terek es a tipikus luxemburgi tajmotumok vonzzak.",
      ro: "Clerve inseamna peisaj, liniste si experienta outdoor in Luxemburg. Zona este potrivita pentru plimbari, puncte de belvedere si timp relaxat in natura. Pentru river Luxembourg, forest Luxembourg si lake Luxembourg, Clerve aduce o relevanta buna in cautari. Vizitatorii apreciaza accesul usor la spatii deschise si la peisajele tipice Luxemburgului.",
      en: "Clerve River brings landscape, calm, and outdoor character to Luxembourg travel. The area works well for walks, viewpoints, and relaxed nature time. It supports searches such as river Luxembourg, forest Luxembourg, and lake Luxembourg. Visitors like it as a simple stop for fresh air and open scenery."
    },
    facts: {
      de: ["Outdoor-freundlicher Ort", "Gut fuer Spaziergaenge", "Starker Landschaftswert", "Einfacher Naturstopp", "Nutzlich fuer Reiseplanung"],
      hu: ["Outdoor barat hely", "Jo setakhoz", "Eros tajerték", "Egyszeru termeszeti megallo", "Hasznos utazas-tervezeshez"],
      ro: ["Loc prietenos pentru outdoor", "Bun pentru plimbari", "Valoare peisagistica puternica", "Oprire naturala simpla", "Util pentru planificarea calatoriei"],
      en: ["Outdoor friendly spot", "Good for walks", "Strong scenic value", "Easy nature stop", "Useful for trip planning"]
    },
    image: "/geo-images/luxembourg/clerve-river.webp"
  },
  {
    id: "lake-echternach-lake",
    type: "lake",
    parent: "LU",
    coords: [6.4210, 49.8150] as [number, number],
    name: {
      de: "Echternacher See",
      hu: "Echternachi-to",
      ro: "Lacul Echternach",
      en: "Echternach Lake"
    },
    description: {
      de: "Echternacher See steht fuer Landschaft, Ruhe und Outdoor-Erlebnis in Luxemburg. Die Lage eignet sich fuer Spaziergaenge, Aussichtspunkte und entspannte Naturzeit. Fuer river Luxembourg, forest Luxembourg und lake Luxembourg bringt Echternacher See starke Suchrelevanz. Besucher schaetzen den einfachen Zugang zu offenen Raeumen und typischen Luxemburg-Motiven.",
      hu: "Echternachi-to Luxemburg tajat, nyugalmat es outdoor elmenyt jelent. A hely jo setakhoz, kilatohoz es piheno termeszetkozeli idohoz. A river Luxembourg, forest Luxembourg es lake Luxembourg kereseseiben Echternachi-to jol teljesit. A latogatokat a nyitott terek es a tipikus luxemburgi tajmotumok vonzzak.",
      ro: "Lacul Echternach inseamna peisaj, liniste si experienta outdoor in Luxemburg. Zona este potrivita pentru plimbari, puncte de belvedere si timp relaxat in natura. Pentru river Luxembourg, forest Luxembourg si lake Luxembourg, Lacul Echternach aduce o relevanta buna in cautari. Vizitatorii apreciaza accesul usor la spatii deschise si la peisajele tipice Luxemburgului.",
      en: "Echternach Lake brings landscape, calm, and outdoor character to Luxembourg travel. The area works well for walks, viewpoints, and relaxed nature time. It supports searches such as river Luxembourg, forest Luxembourg, and lake Luxembourg. Visitors like it as a simple stop for fresh air and open scenery."
    },
    facts: {
      de: ["Outdoor-freundlicher Ort", "Gut fuer Spaziergaenge", "Starker Landschaftswert", "Einfacher Naturstopp", "Nutzlich fuer Reiseplanung"],
      hu: ["Outdoor barat hely", "Jo setakhoz", "Eros tajerték", "Egyszeru termeszeti megallo", "Hasznos utazas-tervezeshez"],
      ro: ["Loc prietenos pentru outdoor", "Bun pentru plimbari", "Valoare peisagistica puternica", "Oprire naturala simpla", "Util pentru planificarea calatoriei"],
      en: ["Outdoor friendly spot", "Good for walks", "Strong scenic value", "Easy nature stop", "Useful for trip planning"]
    },
    image: "/geo-images/luxembourg/echternach-lake.webp"
  },
  {
    id: "mountain-berdorf-rocks",
    type: "mountain",
    parent: "LU",
    coords: [6.3540, 49.8120] as [number, number],
    name: {
      de: "Berdorfer Felsen",
      hu: "Berdorf sziklai",
      ro: "Falezele Berdorf",
      en: "Berdorf Rocks"
    },
    description: {
      de: "Berdorfer Felsen steht fuer Landschaft, Ruhe und Outdoor-Erlebnis in Luxemburg. Die Lage eignet sich fuer Spaziergaenge, Aussichtspunkte und entspannte Naturzeit. Fuer river Luxembourg, forest Luxembourg und lake Luxembourg bringt Berdorfer Felsen starke Suchrelevanz. Besucher schaetzen den einfachen Zugang zu offenen Raeumen und typischen Luxemburg-Motiven.",
      hu: "Berdorf sziklai Luxemburg tajat, nyugalmat es outdoor elmenyt jelent. A hely jo setakhoz, kilatohoz es piheno termeszetkozeli idohoz. A river Luxembourg, forest Luxembourg es lake Luxembourg kereseseiben Berdorf sziklai jol teljesit. A latogatokat a nyitott terek es a tipikus luxemburgi tajmotumok vonzzak.",
      ro: "Falezele Berdorf inseamna peisaj, liniste si experienta outdoor in Luxemburg. Zona este potrivita pentru plimbari, puncte de belvedere si timp relaxat in natura. Pentru river Luxembourg, forest Luxembourg si lake Luxembourg, Falezele Berdorf aduce o relevanta buna in cautari. Vizitatorii apreciaza accesul usor la spatii deschise si la peisajele tipice Luxemburgului.",
      en: "Berdorf Rocks brings landscape, calm, and outdoor character to Luxembourg travel. The area works well for walks, viewpoints, and relaxed nature time. It supports searches such as river Luxembourg, forest Luxembourg, and lake Luxembourg. Visitors like it as a simple stop for fresh air and open scenery."
    },
    facts: {
      de: ["Outdoor-freundlicher Ort", "Gut fuer Spaziergaenge", "Starker Landschaftswert", "Einfacher Naturstopp", "Nutzlich fuer Reiseplanung"],
      hu: ["Outdoor barat hely", "Jo setakhoz", "Eros tajerték", "Egyszeru termeszeti megallo", "Hasznos utazas-tervezeshez"],
      ro: ["Loc prietenos pentru outdoor", "Bun pentru plimbari", "Valoare peisagistica puternica", "Oprire naturala simpla", "Util pentru planificarea calatoriei"],
      en: ["Outdoor friendly spot", "Good for walks", "Strong scenic value", "Easy nature stop", "Useful for trip planning"]
    },
    image: "/geo-images/luxembourg/berdorf-rocks.webp"
  },
  {
    id: "mountain-gaalgebierg-hill",
    type: "mountain",
    parent: "LU",
    coords: [6.1180, 49.4985] as [number, number],
    name: {
      de: "Gaalgebierg",
      hu: "Gaalgebierg",
      ro: "Gaalgebierg",
      en: "Gaalgebierg Hill"
    },
    description: {
      de: "Gaalgebierg steht fuer Landschaft, Ruhe und Outdoor-Erlebnis in Luxemburg. Die Lage eignet sich fuer Spaziergaenge, Aussichtspunkte und entspannte Naturzeit. Fuer river Luxembourg, forest Luxembourg und lake Luxembourg bringt Gaalgebierg starke Suchrelevanz. Besucher schaetzen den einfachen Zugang zu offenen Raeumen und typischen Luxemburg-Motiven.",
      hu: "Gaalgebierg Luxemburg tajat, nyugalmat es outdoor elmenyt jelent. A hely jo setakhoz, kilatohoz es piheno termeszetkozeli idohoz. A river Luxembourg, forest Luxembourg es lake Luxembourg kereseseiben Gaalgebierg jol teljesit. A latogatokat a nyitott terek es a tipikus luxemburgi tajmotumok vonzzak.",
      ro: "Gaalgebierg inseamna peisaj, liniste si experienta outdoor in Luxemburg. Zona este potrivita pentru plimbari, puncte de belvedere si timp relaxat in natura. Pentru river Luxembourg, forest Luxembourg si lake Luxembourg, Gaalgebierg aduce o relevanta buna in cautari. Vizitatorii apreciaza accesul usor la spatii deschise si la peisajele tipice Luxemburgului.",
      en: "Gaalgebierg Hill brings landscape, calm, and outdoor character to Luxembourg travel. The area works well for walks, viewpoints, and relaxed nature time. It supports searches such as river Luxembourg, forest Luxembourg, and lake Luxembourg. Visitors like it as a simple stop for fresh air and open scenery."
    },
    facts: {
      de: ["Outdoor-freundlicher Ort", "Gut fuer Spaziergaenge", "Starker Landschaftswert", "Einfacher Naturstopp", "Nutzlich fuer Reiseplanung"],
      hu: ["Outdoor barat hely", "Jo setakhoz", "Eros tajerték", "Egyszeru termeszeti megallo", "Hasznos utazas-tervezeshez"],
      ro: ["Loc prietenos pentru outdoor", "Bun pentru plimbari", "Valoare peisagistica puternica", "Oprire naturala simpla", "Util pentru planificarea calatoriei"],
      en: ["Outdoor friendly spot", "Good for walks", "Strong scenic value", "Easy nature stop", "Useful for trip planning"]
    },
    image: "/geo-images/luxembourg/gaalgebierg-hill.webp"
  },
  {
    id: "forest-kockelscheuer-forest",
    type: "forest",
    parent: "LU",
    coords: [6.0900, 49.5680] as [number, number],
    name: {
      de: "Kockelscheuerer Wald",
      hu: "Kockelscheuer erdo",
      ro: "Padurea Kockelscheuer",
      en: "Kockelscheuer Forest"
    },
    description: {
      de: "Kockelscheuerer Wald steht fuer Landschaft, Ruhe und Outdoor-Erlebnis in Luxemburg. Die Lage eignet sich fuer Spaziergaenge, Aussichtspunkte und entspannte Naturzeit. Fuer river Luxembourg, forest Luxembourg und lake Luxembourg bringt Kockelscheuerer Wald starke Suchrelevanz. Besucher schaetzen den einfachen Zugang zu offenen Raeumen und typischen Luxemburg-Motiven.",
      hu: "Kockelscheuer erdo Luxemburg tajat, nyugalmat es outdoor elmenyt jelent. A hely jo setakhoz, kilatohoz es piheno termeszetkozeli idohoz. A river Luxembourg, forest Luxembourg es lake Luxembourg kereseseiben Kockelscheuer erdo jol teljesit. A latogatokat a nyitott terek es a tipikus luxemburgi tajmotumok vonzzak.",
      ro: "Padurea Kockelscheuer inseamna peisaj, liniste si experienta outdoor in Luxemburg. Zona este potrivita pentru plimbari, puncte de belvedere si timp relaxat in natura. Pentru river Luxembourg, forest Luxembourg si lake Luxembourg, Padurea Kockelscheuer aduce o relevanta buna in cautari. Vizitatorii apreciaza accesul usor la spatii deschise si la peisajele tipice Luxemburgului.",
      en: "Kockelscheuer Forest brings landscape, calm, and outdoor character to Luxembourg travel. The area works well for walks, viewpoints, and relaxed nature time. It supports searches such as river Luxembourg, forest Luxembourg, and lake Luxembourg. Visitors like it as a simple stop for fresh air and open scenery."
    },
    facts: {
      de: ["Outdoor-freundlicher Ort", "Gut fuer Spaziergaenge", "Starker Landschaftswert", "Einfacher Naturstopp", "Nutzlich fuer Reiseplanung"],
      hu: ["Outdoor barat hely", "Jo setakhoz", "Eros tajerték", "Egyszeru termeszeti megallo", "Hasznos utazas-tervezeshez"],
      ro: ["Loc prietenos pentru outdoor", "Bun pentru plimbari", "Valoare peisagistica puternica", "Oprire naturala simpla", "Util pentru planificarea calatoriei"],
      en: ["Outdoor friendly spot", "Good for walks", "Strong scenic value", "Easy nature stop", "Useful for trip planning"]
    },
    image: "/geo-images/luxembourg/kockelscheuer-forest.webp"
  },
  {
    id: "forest-eislek-forest",
    type: "forest",
    parent: "LU",
    coords: [6.0160, 50.0500] as [number, number],
    name: {
      de: "Eislek-Wald",
      hu: "Eislek erdo",
      ro: "Padurea Eislek",
      en: "Eislek Forest"
    },
    description: {
      de: "Eislek-Wald steht fuer Landschaft, Ruhe und Outdoor-Erlebnis in Luxemburg. Die Lage eignet sich fuer Spaziergaenge, Aussichtspunkte und entspannte Naturzeit. Fuer river Luxembourg, forest Luxembourg und lake Luxembourg bringt Eislek-Wald starke Suchrelevanz. Besucher schaetzen den einfachen Zugang zu offenen Raeumen und typischen Luxemburg-Motiven.",
      hu: "Eislek erdo Luxemburg tajat, nyugalmat es outdoor elmenyt jelent. A hely jo setakhoz, kilatohoz es piheno termeszetkozeli idohoz. A river Luxembourg, forest Luxembourg es lake Luxembourg kereseseiben Eislek erdo jol teljesit. A latogatokat a nyitott terek es a tipikus luxemburgi tajmotumok vonzzak.",
      ro: "Padurea Eislek inseamna peisaj, liniste si experienta outdoor in Luxemburg. Zona este potrivita pentru plimbari, puncte de belvedere si timp relaxat in natura. Pentru river Luxembourg, forest Luxembourg si lake Luxembourg, Padurea Eislek aduce o relevanta buna in cautari. Vizitatorii apreciaza accesul usor la spatii deschise si la peisajele tipice Luxemburgului.",
      en: "Eislek Forest brings landscape, calm, and outdoor character to Luxembourg travel. The area works well for walks, viewpoints, and relaxed nature time. It supports searches such as river Luxembourg, forest Luxembourg, and lake Luxembourg. Visitors like it as a simple stop for fresh air and open scenery."
    },
    facts: {
      de: ["Outdoor-freundlicher Ort", "Gut fuer Spaziergaenge", "Starker Landschaftswert", "Einfacher Naturstopp", "Nutzlich fuer Reiseplanung"],
      hu: ["Outdoor barat hely", "Jo setakhoz", "Eros tajerték", "Egyszeru termeszeti megallo", "Hasznos utazas-tervezeshez"],
      ro: ["Loc prietenos pentru outdoor", "Bun pentru plimbari", "Valoare peisagistica puternica", "Oprire naturala simpla", "Util pentru planificarea calatoriei"],
      en: ["Outdoor friendly spot", "Good for walks", "Strong scenic value", "Easy nature stop", "Useful for trip planning"]
    },
    image: "/geo-images/luxembourg/eislek-forest.webp"
  },
  {
    id: "agriculture-caves-st-martin",
    type: "agriculture",
    parent: "LU",
    coords: [6.3488, 49.5355] as [number, number],
    name: {
      de: "Caves St. Martin",
      hu: "Caves St. Martin",
      ro: "Caves St. Martin",
      en: "Caves St. Martin"
    },
    description: {
      de: "Caves St. Martin zeigt eine klare Verbindung zu Wein, Produktion oder regionaler Wirtschaft in Luxemburg. Der Ort ist interessant fuer Fuehrungen, Verkostungen und thematische Tagesausfluege. Fuer agriculture Luxembourg, industry Luxembourg und local food tourism hat Caves St. Martin eine gute Sichtbarkeit. Die Lage macht ihn auch fuer authentische Kurzreisen sehr attraktiv.",
      hu: "Caves St. Martin egyertelmuen a boraszathoz, termeleshez vagy a regionalis gazdasaghoz kotodik Luxembourgban. A hely erdekes vezetesekhez, kostolasokhoz es tematikus egynapos kirandulasokhoz. Az agriculture Luxembourg, industry Luxembourg es local food tourism kereseseiben Caves St. Martin jol latszik. A fekves miatt hiteles rovid utazasi megallo is.",
      ro: "Caves St. Martin arata legatura clara cu vinul, productia sau economia regionala din Luxemburg. Locul este interesant pentru tururi, degustari si excursii tematice de o zi. Pentru agriculture Luxembourg, industry Luxembourg si local food tourism, Caves St. Martin are o vizibilitate buna. Pozitia il face atractiv si pentru calatorii scurte autentice.",
      en: "Caves St. Martin highlights local production, wine, or industrial history in Luxembourg. The place is useful for tours, tastings, and themed day trips. It supports searches around agriculture Luxembourg, industry Luxembourg, and local food tourism. Travelers use it as an authentic stop with a clear regional story."
    },
    facts: {
      de: ["Fokus auf lokale Produktion", "Gut fuer Touren oder Verkostungen", "Starke regionale Identitaet", "Nutzlich fuer thematische Routen", "Solider Local-Tourism-Spot"],
      hu: ["Helyi termelesre epul", "Jo vezetesekhez es kostolasokhoz", "Eros regionalis azonosito", "Hasznos tematikus utvonalakhoz", "Eros helyi turisztikai pont"],
      ro: ["Accent pe productie locala", "Bun pentru tururi sau degustari", "Identitate regionala clara", "Util pentru trasee tematice", "Punct bun pentru turism local"],
      en: ["Local production focus", "Good for tours or tastings", "Strong regional identity", "Useful for themed routes", "Strong local tourism angle"]
    },
    image: "/geo-images/luxembourg/caves-st-martin.webp"
  },
  {
    id: "agriculture-caves-bernard-massard",
    type: "agriculture",
    parent: "LU",
    coords: [6.4060, 49.6828] as [number, number],
    name: {
      de: "Caves Bernard-Massard",
      hu: "Caves Bernard-Massard",
      ro: "Caves Bernard-Massard",
      en: "Caves Bernard-Massard"
    },
    description: {
      de: "Caves Bernard-Massard zeigt eine klare Verbindung zu Wein, Produktion oder regionaler Wirtschaft in Luxemburg. Der Ort ist interessant fuer Fuehrungen, Verkostungen und thematische Tagesausfluege. Fuer agriculture Luxembourg, industry Luxembourg und local food tourism hat Caves Bernard-Massard eine gute Sichtbarkeit. Die Lage macht ihn auch fuer authentische Kurzreisen sehr attraktiv.",
      hu: "Caves Bernard-Massard egyertelmuen a boraszathoz, termeleshez vagy a regionalis gazdasaghoz kotodik Luxembourgban. A hely erdekes vezetesekhez, kostolasokhoz es tematikus egynapos kirandulasokhoz. Az agriculture Luxembourg, industry Luxembourg es local food tourism kereseseiben Caves Bernard-Massard jol latszik. A fekves miatt hiteles rovid utazasi megallo is.",
      ro: "Caves Bernard-Massard arata legatura clara cu vinul, productia sau economia regionala din Luxemburg. Locul este interesant pentru tururi, degustari si excursii tematice de o zi. Pentru agriculture Luxembourg, industry Luxembourg si local food tourism, Caves Bernard-Massard are o vizibilitate buna. Pozitia il face atractiv si pentru calatorii scurte autentice.",
      en: "Caves Bernard-Massard highlights local production, wine, or industrial history in Luxembourg. The place is useful for tours, tastings, and themed day trips. It supports searches around agriculture Luxembourg, industry Luxembourg, and local food tourism. Travelers use it as an authentic stop with a clear regional story."
    },
    facts: {
      de: ["Fokus auf lokale Produktion", "Gut fuer Touren oder Verkostungen", "Starke regionale Identitaet", "Nutzlich fuer thematische Routen", "Solider Local-Tourism-Spot"],
      hu: ["Helyi termelesre epul", "Jo vezetesekhez es kostolasokhoz", "Eros regionalis azonosito", "Hasznos tematikus utvonalakhoz", "Eros helyi turisztikai pont"],
      ro: ["Accent pe productie locala", "Bun pentru tururi sau degustari", "Identitate regionala clara", "Util pentru trasee tematice", "Punct bun pentru turism local"],
      en: ["Local production focus", "Good for tours or tastings", "Strong regional identity", "Useful for themed routes", "Strong local tourism angle"]
    },
    image: "/geo-images/luxembourg/caves-bernard-massard.webp"
  },
  {
    id: "agriculture-clos-des-rochers",
    type: "agriculture",
    parent: "LU",
    coords: [6.4045, 49.6845] as [number, number],
    name: {
      de: "Clos des Rochers",
      hu: "Clos des Rochers",
      ro: "Clos des Rochers",
      en: "Clos des Rochers"
    },
    description: {
      de: "Clos des Rochers zeigt eine klare Verbindung zu Wein, Produktion oder regionaler Wirtschaft in Luxemburg. Der Ort ist interessant fuer Fuehrungen, Verkostungen und thematische Tagesausfluege. Fuer agriculture Luxembourg, industry Luxembourg und local food tourism hat Clos des Rochers eine gute Sichtbarkeit. Die Lage macht ihn auch fuer authentische Kurzreisen sehr attraktiv.",
      hu: "Clos des Rochers egyertelmuen a boraszathoz, termeleshez vagy a regionalis gazdasaghoz kotodik Luxembourgban. A hely erdekes vezetesekhez, kostolasokhoz es tematikus egynapos kirandulasokhoz. Az agriculture Luxembourg, industry Luxembourg es local food tourism kereseseiben Clos des Rochers jol latszik. A fekves miatt hiteles rovid utazasi megallo is.",
      ro: "Clos des Rochers arata legatura clara cu vinul, productia sau economia regionala din Luxemburg. Locul este interesant pentru tururi, degustari si excursii tematice de o zi. Pentru agriculture Luxembourg, industry Luxembourg si local food tourism, Clos des Rochers are o vizibilitate buna. Pozitia il face atractiv si pentru calatorii scurte autentice.",
      en: "Clos des Rochers highlights local production, wine, or industrial history in Luxembourg. The place is useful for tours, tastings, and themed day trips. It supports searches around agriculture Luxembourg, industry Luxembourg, and local food tourism. Travelers use it as an authentic stop with a clear regional story."
    },
    facts: {
      de: ["Fokus auf lokale Produktion", "Gut fuer Touren oder Verkostungen", "Starke regionale Identitaet", "Nutzlich fuer thematische Routen", "Solider Local-Tourism-Spot"],
      hu: ["Helyi termelesre epul", "Jo vezetesekhez es kostolasokhoz", "Eros regionalis azonosito", "Hasznos tematikus utvonalakhoz", "Eros helyi turisztikai pont"],
      ro: ["Accent pe productie locala", "Bun pentru tururi sau degustari", "Identitate regionala clara", "Util pentru trasee tematice", "Punct bun pentru turism local"],
      en: ["Local production focus", "Good for tours or tastings", "Strong regional identity", "Useful for themed routes", "Strong local tourism angle"]
    },
    image: "/geo-images/luxembourg/clos-des-rochers.webp"
  },
  {
    id: "industry-bofferding-brewery",
    type: "industry",
    parent: "LU",
    coords: [5.9195, 49.5195] as [number, number],
    name: {
      de: "Bofferding Brauerei",
      hu: "Bofferding fozde",
      ro: "Bofferding Brewery",
      en: "Bofferding Brewery"
    },
    description: {
      de: "Bofferding Brauerei zeigt eine klare Verbindung zu Wein, Produktion oder regionaler Wirtschaft in Luxemburg. Der Ort ist interessant fuer Fuehrungen, Verkostungen und thematische Tagesausfluege. Fuer agriculture Luxembourg, industry Luxembourg und local food tourism hat Bofferding Brauerei eine gute Sichtbarkeit. Die Lage macht ihn auch fuer authentische Kurzreisen sehr attraktiv.",
      hu: "Bofferding fozde egyertelmuen a boraszathoz, termeleshez vagy a regionalis gazdasaghoz kotodik Luxembourgban. A hely erdekes vezetesekhez, kostolasokhoz es tematikus egynapos kirandulasokhoz. Az agriculture Luxembourg, industry Luxembourg es local food tourism kereseseiben Bofferding fozde jol latszik. A fekves miatt hiteles rovid utazasi megallo is.",
      ro: "Bofferding Brewery arata legatura clara cu vinul, productia sau economia regionala din Luxemburg. Locul este interesant pentru tururi, degustari si excursii tematice de o zi. Pentru agriculture Luxembourg, industry Luxembourg si local food tourism, Bofferding Brewery are o vizibilitate buna. Pozitia il face atractiv si pentru calatorii scurte autentice.",
      en: "Bofferding Brewery highlights local production, wine, or industrial history in Luxembourg. The place is useful for tours, tastings, and themed day trips. It supports searches around agriculture Luxembourg, industry Luxembourg, and local food tourism. Travelers use it as an authentic stop with a clear regional story."
    },
    facts: {
      de: ["Fokus auf lokale Produktion", "Gut fuer Touren oder Verkostungen", "Starke regionale Identitaet", "Nutzlich fuer thematische Routen", "Solider Local-Tourism-Spot"],
      hu: ["Helyi termelesre epul", "Jo vezetesekhez es kostolasokhoz", "Eros regionalis azonosito", "Hasznos tematikus utvonalakhoz", "Eros helyi turisztikai pont"],
      ro: ["Accent pe productie locala", "Bun pentru tururi sau degustari", "Identitate regionala clara", "Util pentru trasee tematice", "Punct bun pentru turism local"],
      en: ["Local production focus", "Good for tours or tastings", "Strong regional identity", "Useful for themed routes", "Strong local tourism angle"]
    },
    image: "/geo-images/luxembourg/bofferding-brewery.webp"
  },
  {
    id: "industry-rumelange-mining-museum",
    type: "industry",
    parent: "LU",
    coords: [6.0310, 49.4620] as [number, number],
    name: {
      de: "Rumelange Bergbaumuseum",
      hu: "Rumelange banyamuzeum",
      ro: "Muzeul minier Rumelange",
      en: "Rumelange Mining Museum"
    },
    description: {
      de: "Rumelange Bergbaumuseum zeigt eine klare Verbindung zu Wein, Produktion oder regionaler Wirtschaft in Luxemburg. Der Ort ist interessant fuer Fuehrungen, Verkostungen und thematische Tagesausfluege. Fuer agriculture Luxembourg, industry Luxembourg und local food tourism hat Rumelange Bergbaumuseum eine gute Sichtbarkeit. Die Lage macht ihn auch fuer authentische Kurzreisen sehr attraktiv.",
      hu: "Rumelange banyamuzeum egyertelmuen a boraszathoz, termeleshez vagy a regionalis gazdasaghoz kotodik Luxembourgban. A hely erdekes vezetesekhez, kostolasokhoz es tematikus egynapos kirandulasokhoz. Az agriculture Luxembourg, industry Luxembourg es local food tourism kereseseiben Rumelange banyamuzeum jol latszik. A fekves miatt hiteles rovid utazasi megallo is.",
      ro: "Muzeul minier Rumelange arata legatura clara cu vinul, productia sau economia regionala din Luxemburg. Locul este interesant pentru tururi, degustari si excursii tematice de o zi. Pentru agriculture Luxembourg, industry Luxembourg si local food tourism, Muzeul minier Rumelange are o vizibilitate buna. Pozitia il face atractiv si pentru calatorii scurte autentice.",
      en: "Rumelange Mining Museum highlights local production, wine, or industrial history in Luxembourg. The place is useful for tours, tastings, and themed day trips. It supports searches around agriculture Luxembourg, industry Luxembourg, and local food tourism. Travelers use it as an authentic stop with a clear regional story."
    },
    facts: {
      de: ["Fokus auf lokale Produktion", "Gut fuer Touren oder Verkostungen", "Starke regionale Identitaet", "Nutzlich fuer thematische Routen", "Solider Local-Tourism-Spot"],
      hu: ["Helyi termelesre epul", "Jo vezetesekhez es kostolasokhoz", "Eros regionalis azonosito", "Hasznos tematikus utvonalakhoz", "Eros helyi turisztikai pont"],
      ro: ["Accent pe productie locala", "Bun pentru tururi sau degustari", "Identitate regionala clara", "Util pentru trasee tematice", "Punct bun pentru turism local"],
      en: ["Local production focus", "Good for tours or tastings", "Strong regional identity", "Useful for themed routes", "Strong local tourism angle"]
    },
    image: "/geo-images/luxembourg/rumelange-mining-museum.webp"
  },
  {
    id: "kid-landmark-parc-merveilleux",
    type: "kid-landmark",
    parent: "LU",
    coords: [6.2060, 49.5310] as [number, number],
    name: {
      de: "Parc Merveilleux",
      hu: "Parc Merveilleux",
      ro: "Parc Merveilleux",
      en: "Parc Merveilleux"
    },
    description: {
      de: "Parc Merveilleux ist ein familienfreundliches Ziel in Luxemburg mit klarer Ausrichtung auf Kinder und leichte Besuche. Das Angebot verbindet Spiel, Lernen und einen entspannten Tagesausflug. Fuer kid friendly Luxembourg, family attraction und weekend fun ist Parc Merveilleux sehr stark. Eltern schaetzen die gute Erreichbarkeit und die klare Erlebnisstruktur.",
      hu: "Parc Merveilleux egy csaladbarat celpont Luxembourgban, amely kifejezetten gyerekekre es egyszeru latogatasra epul. A hely jatekot, tanulast es kellemes egynapos programot kombinál. A kid friendly Luxembourg, family attraction es weekend fun kereseseiben Parc Merveilleux nagyon eros. A szulok ertekelik a jo megkozelitest es az atlathato elmenykinalatot.",
      ro: "Parc Merveilleux este o destinatie family friendly in Luxemburg, cu accent clar pe copii si vizite usoare. Oferta combina joaca, invatare si o iesire relaxata de o zi. Pentru kid friendly Luxembourg, family attraction si weekend fun, Parc Merveilleux este foarte puternic. Parintii apreciaza accesul bun si formatul clar al experientei.",
      en: "Parc Merveilleux is a family attraction in Luxembourg with a strong focus on children and easy visits. The site mixes fun, learning, and a simple day out format. It fits searches for kid friendly Luxembourg, family attraction, and weekend fun. Parents like the clear experience and the easy access."
    },
    facts: {
      de: ["Familienfreundliche Attraktion", "Gut fuer Kinder", "Perfekt fuer Tagesausfluege", "Einfach zu besuchen", "Beliebt bei Familien"],
      hu: ["Csaladbarat attrakcio", "Jo gyerekeknek", "Kivalo egynapos programhoz", "Egyszeru meglatogatni", "Kedvelt a csaladok koreben"],
      ro: ["Atractie family friendly", "Buna pentru copii", "Potrivita pentru excursii de o zi", "Usor de vizitat", "Populara printre familii"],
      en: ["Family friendly attraction", "Good for children", "Works for day trips", "Easy to visit", "Popular with families"]
    },
    image: "/geo-images/luxembourg/parc-merveilleux.webp"
  },
  {
    id: "kid-landmark-luxembourg-science-center",
    type: "kid-landmark",
    parent: "LU",
    coords: [5.8935, 49.5235] as [number, number],
    name: {
      de: "Luxembourg Science Center",
      hu: "Luxembourg Science Center",
      ro: "Luxembourg Science Center",
      en: "Luxembourg Science Center"
    },
    description: {
      de: "Luxembourg Science Center ist ein familienfreundliches Ziel in Luxemburg mit klarer Ausrichtung auf Kinder und leichte Besuche. Das Angebot verbindet Spiel, Lernen und einen entspannten Tagesausflug. Fuer kid friendly Luxembourg, family attraction und weekend fun ist Luxembourg Science Center sehr stark. Eltern schaetzen die gute Erreichbarkeit und die klare Erlebnisstruktur.",
      hu: "Luxembourg Science Center egy csaladbarat celpont Luxembourgban, amely kifejezetten gyerekekre es egyszeru latogatasra epul. A hely jatekot, tanulast es kellemes egynapos programot kombinál. A kid friendly Luxembourg, family attraction es weekend fun kereseseiben Luxembourg Science Center nagyon eros. A szulok ertekelik a jo megkozelitest es az atlathato elmenykinalatot.",
      ro: "Luxembourg Science Center este o destinatie family friendly in Luxemburg, cu accent clar pe copii si vizite usoare. Oferta combina joaca, invatare si o iesire relaxata de o zi. Pentru kid friendly Luxembourg, family attraction si weekend fun, Luxembourg Science Center este foarte puternic. Parintii apreciaza accesul bun si formatul clar al experientei.",
      en: "Luxembourg Science Center is a family attraction in Luxembourg with a strong focus on children and easy visits. The site mixes fun, learning, and a simple day out format. It fits searches for kid friendly Luxembourg, family attraction, and weekend fun. Parents like the clear experience and the easy access."
    },
    facts: {
      de: ["Familienfreundliche Attraktion", "Gut fuer Kinder", "Perfekt fuer Tagesausfluege", "Einfach zu besuchen", "Beliebt bei Familien"],
      hu: ["Csaladbarat attrakcio", "Jo gyerekeknek", "Kivalo egynapos programhoz", "Egyszeru meglatogatni", "Kedvelt a csaladok koreben"],
      ro: ["Atractie family friendly", "Buna pentru copii", "Potrivita pentru excursii de o zi", "Usor de vizitat", "Populara printre familii"],
      en: ["Family friendly attraction", "Good for children", "Works for day trips", "Easy to visit", "Popular with families"]
    },
    image: "/geo-images/luxembourg/luxembourg-science-center.webp"
  },
  {
    id: "kid-landmark-escher-deierepark",
    type: "kid-landmark",
    parent: "LU",
    coords: [5.9775, 49.5015] as [number, number],
    name: {
      de: "Escher Deierepark",
      hu: "Escher Deierepark",
      ro: "Escher Deierepark",
      en: "Escher Deierepark"
    },
    description: {
      de: "Escher Deierepark ist ein familienfreundliches Ziel in Luxemburg mit klarer Ausrichtung auf Kinder und leichte Besuche. Das Angebot verbindet Spiel, Lernen und einen entspannten Tagesausflug. Fuer kid friendly Luxembourg, family attraction und weekend fun ist Escher Deierepark sehr stark. Eltern schaetzen die gute Erreichbarkeit und die klare Erlebnisstruktur.",
      hu: "Escher Deierepark egy csaladbarat celpont Luxembourgban, amely kifejezetten gyerekekre es egyszeru latogatasra epul. A hely jatekot, tanulast es kellemes egynapos programot kombinál. A kid friendly Luxembourg, family attraction es weekend fun kereseseiben Escher Deierepark nagyon eros. A szulok ertekelik a jo megkozelitest es az atlathato elmenykinalatot.",
      ro: "Escher Deierepark este o destinatie family friendly in Luxemburg, cu accent clar pe copii si vizite usoare. Oferta combina joaca, invatare si o iesire relaxata de o zi. Pentru kid friendly Luxembourg, family attraction si weekend fun, Escher Deierepark este foarte puternic. Parintii apreciaza accesul bun si formatul clar al experientei.",
      en: "Escher Deierepark is a family attraction in Luxembourg with a strong focus on children and easy visits. The site mixes fun, learning, and a simple day out format. It fits searches for kid friendly Luxembourg, family attraction, and weekend fun. Parents like the clear experience and the easy access."
    },
    facts: {
      de: ["Familienfreundliche Attraktion", "Gut fuer Kinder", "Perfekt fuer Tagesausfluege", "Einfach zu besuchen", "Beliebt bei Familien"],
      hu: ["Csaladbarat attrakcio", "Jo gyerekeknek", "Kivalo egynapos programhoz", "Egyszeru meglatogatni", "Kedvelt a csaladok koreben"],
      ro: ["Atractie family friendly", "Buna pentru copii", "Potrivita pentru excursii de o zi", "Usor de vizitat", "Populara printre familii"],
      en: ["Family friendly attraction", "Good for children", "Works for day trips", "Easy to visit", "Popular with families"]
    },
    image: "/geo-images/luxembourg/escher-deierepark.webp"
  },
  {
    id: "kid-landmark-parc-leh",
    type: "kid-landmark",
    parent: "LU",
    coords: [6.1115, 49.5468] as [number, number],
    name: {
      de: "Parc Leh",
      hu: "Parc Leh",
      ro: "Parc Leh",
      en: "Parc Leh"
    },
    description: {
      de: "Parc Leh ist ein familienfreundliches Ziel in Luxemburg mit klarer Ausrichtung auf Kinder und leichte Besuche. Das Angebot verbindet Spiel, Lernen und einen entspannten Tagesausflug. Fuer kid friendly Luxembourg, family attraction und weekend fun ist Parc Leh sehr stark. Eltern schaetzen die gute Erreichbarkeit und die klare Erlebnisstruktur.",
      hu: "Parc Leh egy csaladbarat celpont Luxembourgban, amely kifejezetten gyerekekre es egyszeru latogatasra epul. A hely jatekot, tanulast es kellemes egynapos programot kombinál. A kid friendly Luxembourg, family attraction es weekend fun kereseseiben Parc Leh nagyon eros. A szulok ertekelik a jo megkozelitest es az atlathato elmenykinalatot.",
      ro: "Parc Leh este o destinatie family friendly in Luxemburg, cu accent clar pe copii si vizite usoare. Oferta combina joaca, invatare si o iesire relaxata de o zi. Pentru kid friendly Luxembourg, family attraction si weekend fun, Parc Leh este foarte puternic. Parintii apreciaza accesul bun si formatul clar al experientei.",
      en: "Parc Leh is a family attraction in Luxembourg with a strong focus on children and easy visits. The site mixes fun, learning, and a simple day out format. It fits searches for kid friendly Luxembourg, family attraction, and weekend fun. Parents like the clear experience and the easy access."
    },
    facts: {
      de: ["Familienfreundliche Attraktion", "Gut fuer Kinder", "Perfekt fuer Tagesausfluege", "Einfach zu besuchen", "Beliebt bei Familien"],
      hu: ["Csaladbarat attrakcio", "Jo gyerekeknek", "Kivalo egynapos programhoz", "Egyszeru meglatogatni", "Kedvelt a csaladok koreben"],
      ro: ["Atractie family friendly", "Buna pentru copii", "Potrivita pentru excursii de o zi", "Usor de vizitat", "Populara printre familii"],
      en: ["Family friendly attraction", "Good for children", "Works for day trips", "Easy to visit", "Popular with families"]
    },
    image: "/geo-images/luxembourg/parc-leh.webp"
  },
];

luxembourgAllPoi.push(...luxembourgCities, ...luxembourgCulture, ...luxembourgNature);

const luxembourgRound2BigSpecs = [
  { id: "city-clervaux", type: "city", coords: [6.0328, 50.0540] as [number, number], name: { de: "Clervaux", hu: "Clervaux", ro: "Clervaux", en: "Clervaux" } },
  { id: "city-wiltz", type: "city", coords: [5.9318, 49.9680] as [number, number], name: { de: "Wiltz", hu: "Wiltz", ro: "Wiltz", en: "Wiltz" } },
  { id: "city-ettelbruck", type: "city", coords: [6.1026, 49.8470] as [number, number], name: { de: "Ettelbruck", hu: "Ettelbruck", ro: "Ettelbruck", en: "Ettelbruck" } },
  { id: "city-grevenmacher", type: "city", coords: [6.4458, 49.6850] as [number, number], name: { de: "Grevenmacher", hu: "Grevenmacher", ro: "Grevenmacher", en: "Grevenmacher" } },
  { id: "city-remich", type: "city", coords: [6.3667, 49.5456] as [number, number], name: { de: "Remich", hu: "Remich", ro: "Remich", en: "Remich" } },
  { id: "city-steinfort", type: "city", coords: [5.9175, 49.6610] as [number, number], name: { de: "Steinfort", hu: "Steinfort", ro: "Steinfort", en: "Steinfort" } },
  { id: "city-bertrange", type: "city", coords: [6.0507, 49.6140] as [number, number], name: { de: "Bertrange", hu: "Bertrange", ro: "Bertrange", en: "Bertrange" } },
  { id: "city-dudelange", type: "city", coords: [6.0814, 49.4799] as [number, number], name: { de: "Dudelange", hu: "Dudelange", ro: "Dudelange", en: "Dudelange" } },
  { id: "city-schifflange", type: "city", coords: [6.0112, 49.5068] as [number, number], name: { de: "Schifflange", hu: "Schifflange", ro: "Schifflange", en: "Schifflange" } },
  { id: "city-kayl", type: "city", coords: [6.0391, 49.4879] as [number, number], name: { de: "Kayl", hu: "Kayl", ro: "Kayl", en: "Kayl" } },
  { id: "city-mondorf-les-bains", type: "city", coords: [6.2812, 49.5039] as [number, number], name: { de: "Mondorf-les-Bains", hu: "Mondorf-les-Bains", ro: "Mondorf-les-Bains", en: "Mondorf-les-Bains" } },
  { id: "city-redange-sur-attert", type: "city", coords: [5.8909, 49.7669] as [number, number], name: { de: "Redange-sur-Attert", hu: "Redange-sur-Attert", ro: "Redange-sur-Attert", en: "Redange-sur-Attert" } },
  { id: "city-junglinster", type: "city", coords: [6.2512, 49.7080] as [number, number], name: { de: "Junglinster", hu: "Junglinster", ro: "Junglinster", en: "Junglinster" } },
  { id: "city-mertert", type: "city", coords: [6.4810, 49.7415] as [number, number], name: { de: "Mertert", hu: "Mertert", ro: "Mertert", en: "Mertert" } },
  { id: "city-larochette", type: "city", coords: [6.2178, 49.7830] as [number, number], name: { de: "Larochette", hu: "Larochette", ro: "Larochette", en: "Larochette" } },
  { id: "historical-clervaux-abbey", type: "historical", coords: [6.0348, 50.0552] as [number, number], name: { de: "Abtei Clervaux", hu: "Clervaux apatsag", ro: "Abația Clervaux", en: "Clervaux Abbey" } },
  { id: "historical-bourscheid-castle", type: "historical", coords: [6.0932, 49.9082] as [number, number], name: { de: "Bourscheid Burg", hu: "Bourscheid var", ro: "Castelul Bourscheid", en: "Bourscheid Castle" } },
  { id: "historical-larochette-castle", type: "historical", coords: [6.2182, 49.7829] as [number, number], name: { de: "Burg Larochette", hu: "Larochette var", ro: "Castelul Larochette", en: "Larochette Castle" } },
  { id: "historical-beaufort-castle", type: "historical", coords: [6.2874, 49.8311] as [number, number], name: { de: "Burg Beaufort", hu: "Beaufort var", ro: "Castelul Beaufort", en: "Beaufort Castle" } },
  { id: "historical-echternach-abbey", type: "historical", coords: [6.4202, 49.8143] as [number, number], name: { de: "Abtei Echternach", hu: "Echternach apatsag", ro: "Abația Echternach", en: "Echternach Abbey" } },
  { id: "landmark-notre-dame-cathedral", type: "landmark", coords: [6.1310, 49.6114] as [number, number], name: { de: "Notre-Dame-Kathedrale", hu: "Notre-Dame szekesegyhaz", ro: "Catedrala Notre-Dame", en: "Notre-Dame Cathedral" } },
  { id: "landmark-st-willibrord-basilica", type: "landmark", coords: [6.4190, 49.8146] as [number, number], name: { de: "St. Willibrord Basilika", hu: "Szent Willibrord bazilika", ro: "Bazilica Sfantului Willibrord", en: "St. Willibrord Basilica" } },
  { id: "historical-neumunster-abbey", type: "historical", coords: [6.1338, 49.6147] as [number, number], name: { de: "Neumunster Abtei", hu: "Neumunster apatsag", ro: "Abatia Neumunster", en: "Neumunster Abbey" } },
  { id: "forest-bambesch", type: "forest", coords: [6.0910, 49.6260] as [number, number], name: { de: "Bambesch", hu: "Bambesch", ro: "Bambesch", en: "Bambesch" } },
  { id: "forest-grunewald", type: "forest", coords: [6.1480, 49.6185] as [number, number], name: { de: "Grunewald", hu: "Grunewald", ro: "Grunewald", en: "Grunewald" } },
  { id: "lake-haute-sure", type: "lake", coords: [5.8258, 49.9110] as [number, number], name: { de: "Stausee Obersauer", hu: "Felsosaueri tavat", ro: "Lacul de acumulare Haute-Sure", en: "Upper Sûre Lake" } },
  { id: "lake-weiswampach", type: "lake", coords: [6.0824, 50.1062] as [number, number], name: { de: "Weiswampacher See", hu: "Weiswampach-to", ro: "Lacul Weiswampach", en: "Lake Weiswampach" } },
  { id: "lake-remerschen-lakes", type: "lake", coords: [6.3498, 49.5190] as [number, number], name: { de: "Remerscher Weiher", hu: "Remerscheni tavak", ro: "Lacurile Remerschen", en: "Remerschen Lakes" } },
  { id: "river-sure", type: "river", coords: [6.3290, 49.7250] as [number, number], name: { de: "Sauer", hu: "Sauer folyo", ro: "Sauer", en: "Sauer River" } },
  { id: "river-moselle", type: "river", coords: [6.3565, 49.5395] as [number, number], name: { de: "Mosel", hu: "Mosel folyo", ro: "Mosela", en: "Moselle River" } },
  { id: "river-ernz-noire", type: "river", coords: [6.2850, 49.7890] as [number, number], name: { de: "Schwarze Ernz", hu: "Fekete Ernz", ro: "Ernz Neagra", en: "Black Ernz" } },
  { id: "agriculture-domaine-vinsmoselle-remerschen", type: "agriculture", coords: [6.3492, 49.5178] as [number, number], name: { de: "Domaine Vinsmoselle Remerschen", hu: "Domaine Vinsmoselle Remerschen", ro: "Domaine Vinsmoselle Remerschen", en: "Domaine Vinsmoselle Remerschen" } },
  { id: "agriculture-domaine-mathis-bastian-remich", type: "agriculture", coords: [6.3636, 49.5399] as [number, number], name: { de: "Domaine Mathis Bastian", hu: "Domaine Mathis Bastian", ro: "Domaine Mathis Bastian", en: "Domaine Mathis Bastian" } },
  { id: "agriculture-clos-mon-vieux-moulin", type: "agriculture", coords: [6.4090, 49.6838] as [number, number], name: { de: "Clos Mon Vieux Moulin", hu: "Clos Mon Vieux Moulin", ro: "Clos Mon Vieux Moulin", en: "Clos Mon Vieux Moulin" } },
  { id: "industry-arcelormittal-belval", type: "industry", coords: [5.9475, 49.5120] as [number, number], name: { de: "ArcelorMittal Belval", hu: "ArcelorMittal Belval", ro: "ArcelorMittal Belval", en: "ArcelorMittal Belval" } },
  { id: "industry-minett-park-fond-de-gras", type: "industry", coords: [5.8530, 49.5407] as [number, number], name: { de: "Minett Park Fond-de-Gras", hu: "Minett Park Fond-de-Gras", ro: "Minett Park Fond-de-Gras", en: "Minett Park Fond-de-Gras" } },
  { id: "kid-landmark-paiperleksgaart", type: "kid-landmark", coords: [6.4410, 49.6768] as [number, number], name: { de: "Papierlkesgaart", hu: "Papierlkesgaart", ro: "Papierlkesgaart", en: "Papierlkesgaart" } },
  { id: "kid-landmark-syrdall-schwemm", type: "kid-landmark", coords: [6.2580, 49.6600] as [number, number], name: { de: "Syrdall Schwemm", hu: "Syrdall Schwemm", ro: "Syrdall Schwemm", en: "Syrdall Schwemm" } },
  { id: "kid-landmark-aquatower-berdorf", type: "kid-landmark", coords: [6.3458, 49.8225] as [number, number], name: { de: "Aquatower Berdorf", hu: "Aquatower Berdorf", ro: "Aquatower Berdorf", en: "Aquatower Berdorf" } },
  { id: "kid-landmark-vianden-chairlift", type: "kid-landmark", coords: [6.2105, 49.9354] as [number, number], name: { de: "Viandener Sessellift", hu: "Viandeni libego", ro: "Telecabina Vianden", en: "Vianden Chairlift" } }
];

const luxembourgRound2BigDescriptions = {
  city: (name: { de: string; hu: string; ro: string; en: string }) => ({
    de: `${name.de} ist ein kompakter Ort in Luxembourg. Er eignet sich gut fuer kurze Besuche und Tagesrouten. Der Standort ist praktisch fuer regionale Roadtrips und ruhige Stopps. Besucher kombinieren ihn oft mit nahe gelegenen Sehenswuerdigkeiten.`,
    hu: `${name.hu} egy kompakt hely Luxembourgban. Jol mukodik rovid latogatashoz es napi utakhoz. A fekvese praktikus regionalis road tripekhez es nyugodt megallokhoz. A latogatok gyakran osszekotik kozeli latvanyossagokkal.`,
    ro: `${name.ro} este o localitate compacta din Luxemburg. Se potriveste bine pentru vizite scurte si rute de o zi. Pozitia este practica pentru road tripuri regionale si opriri linistite. Vizitatorii il combina adesea cu obiective din apropiere.`,
    en: `${name.en} is a compact place in Luxembourg. It works well for short visits and day routes. The location is practical for regional road trips and calm stopovers. Visitors often combine it with nearby sights.`
  }),
  historical: (name: { de: string; hu: string; ro: string; en: string }) => ({
    de: `${name.de} ist ein historischer Ort in Luxembourg. Er verbindet Architektur, Erinnerung und ein klares Kulturprofil. Der Standort ist gut fuer thematische Rundgaenge und kurze Besuche. Besucher nutzen ihn oft als festen Punkt fuer Kultur- und Stadttrips.`,
    hu: `${name.hu} egy tortenelmi hely Luxembourgban. Osszekapcsolja az epiteszetet, az emlekezetet es az eros kulturális profilt. A helyszin jo tematikus setakhoz es rovid latogatashoz. A latogatok gyakran kultur- es varosturak fix pontjakent hasznaljak.`,
    ro: `${name.ro} este un loc istoric din Luxemburg. Imbina arhitectura, memoria si un profil cultural clar. Locatia este buna pentru trasee tematice si vizite scurte. Vizitatorii il folosesc adesea ca reper pentru tururi culturale si urbane.`,
    en: `${name.en} is a historical place in Luxembourg. It combines architecture, memory, and a clear cultural profile. The site is good for themed walks and short visits. Visitors often use it as a fixed point for culture and city trips.`
  }),
  nature: (name: { de: string; hu: string; ro: string; en: string }) => ({
    de: `${name.de} ist ein naturnaher Ort in Luxembourg. Er steht fuer Landschaft, Ruhe und einfache Outdoor-Momente. Der Standort passt gut zu Spaziergaengen, Fotostopps und leichten Touren. Besucher verbinden ihn oft mit Wochenendtrips und aktiver Erholung.`,
    hu: `${name.hu} egy termeszetkozeli hely Luxembourgban. A tajat, a nyugalmat es az egyszeru kulteri pillanatokat kepviseli. A helyszin jol illik setakhoz, foto megallokhoz es konnyu turakhoz. A latogatók gyakran hetvegi kirandulasokkal es aktiv pihenessel kapcsoljak ossze.`,
    ro: `${name.ro} este un loc apropiat de natura in Luxemburg. Reprezinta peisajul, linistea si momentele simple in aer liber. Locatia se potriveste bine pentru plimbari, opriri foto si trasee usoare. Vizitatorii il asociaza adesea cu weekenduri si relaxare activa.`,
    en: `${name.en} is a nature-oriented place in Luxembourg. It stands for landscape, calm, and easy outdoor moments. The site fits walks, photo stops, and light tours very well. Visitors often combine it with weekend trips and active relaxation.`
  }),
  production: (name: { de: string; hu: string; ro: string; en: string }) => ({
    de: `${name.de} zeigt Landwirtschaft, Produktion oder Industriegeschichte in Luxembourg. Der Ort eignet sich gut fuer Besuche, Verkostungen oder thematische Stops. Er passt stark zu regionalen Genussrouten und lokalem Tourismus. Besucher nutzen ihn oft als Bestandteil einer kurzen Spezialroute.`,
    hu: `${name.hu} a mezogazdasagot, a termelest vagy az ipartortenetet mutatja be Luxembourgban. A hely jo latogatasokra, kostolasokra vagy tematikus megallokra. Erosen illik regionalis gasztro utakhoz es helyi turizmushoz. A latogatók gyakran egy rovid specialis ruta reszekent hasznaljak.`,
    ro: `${name.ro} prezinta agricultura, productia sau istoria industriala in Luxemburg. Locul este bun pentru vizite, degustari sau opriri tematice. Se potriveste foarte bine cu rutele gastronomice regionale si turismul local. Vizitatorii il folosesc adesea ca parte a unei rute speciale scurte.`,
    en: `${name.en} shows agriculture, production, or industrial history in Luxembourg. The place works well for visits, tastings, or themed stops. It fits strongly with regional food routes and local tourism. Visitors often use it as part of a short specialty route.`
  }),
  kid: (name: { de: string; hu: string; ro: string; en: string }) => ({
    de: `${name.de} ist ein familienfreundlicher Erlebnisort in Luxembourg. Er verbindet Spiel, Lernen und leichte Besuche fuer Kinder. Der Standort passt gut zu Wochenenden, Ferien und kurzen Ausfluegen. Eltern schaetzen die einfache Planung und die klare Erlebnisstruktur.`,
    hu: `${name.hu} egy csaladbarat elmenyhely Luxembourgban. A jatekot, a tanulast es a gyerekeknek valo egyszeru latogatast kapcsolja ossze. A helyszin jol illik hetvegekre, szunetnapokra es rovid kirandulasokra. A szulok ertekelik az egyszeru tervezhetoseget es az atlathato elmenykinalatot.`,
    ro: `${name.ro} este un loc de experienta family friendly in Luxemburg. Imbina joaca, invatarea si vizitele usoare pentru copii. Locatia se potriveste bine pentru weekenduri, vacante si excursii scurte. Parintii apreciaza planificarea simpla si structura clara a experientei.`,
    en: `${name.en} is a family-friendly experience place in Luxembourg. It combines play, learning, and easy visits for children. The site fits weekends, holidays, and short outings very well. Parents appreciate the easy planning and the clear experience structure.`
  })
};

const luxembourgRound2BigFacts = {
  city: {
    de: ["Kompakter Ortskern", "Gut fuer Kurzbesuche", "Praktisch fuer Roadtrips", "Einfach zu kombinieren", "Regional gut eingebettet"],
    hu: ["Kompakt telepuleskozpont", "Jo rovid latogatasra", "Praktikus road tripekhez", "Konnyen osszekotheto", "Jol beilleszkedo regionalis hely"],
    ro: ["Centru local compact", "Bun pentru vizite scurte", "Practic pentru road tripuri", "Usor de combinat", "Bine integrat regional"],
    en: ["Compact town center", "Good for short visits", "Practical for road trips", "Easy to combine", "Well integrated regionally"]
  },
  historical: {
    de: ["Historisches Motiv", "Gut fuer Kulturrouten", "Starker Ortsbezug", "Ideal fuer kurze Besuche", "Beliebt bei Stadttrips"],
    hu: ["Tortenelmi motum", "Jo kultur utakhoz", "Eros helyi kotodes", "Idealis rovid latogatasra", "Nepszeru varosi utakhoz"],
    ro: ["Motiv istoric", "Bun pentru rute culturale", "Legatura locala puternica", "Ideal pentru vizite scurte", "Popular in city trips"],
    en: ["Historic motif", "Good for culture routes", "Strong local identity", "Ideal for short visits", "Popular on city trips"]
  },
  nature: {
    de: ["Naturnaher Standort", "Gut fuer Spaziergaenge", "Starke Outdoor-Qualitaet", "Beliebt fuer Wochenenden", "Einfach in Routen einzubauen"],
    hu: ["Termeszetkozeli helyszin", "Jo setakhoz", "Eros outdoor ertek", "Nepszeru hetvegere", "Konnyen beillesztheto utvonalakba"],
    ro: ["Loc apropiat de natura", "Bun pentru plimbari", "Calitate outdoor puternica", "Popular pentru weekend", "Usor de integrat in rute"],
    en: ["Nature-oriented site", "Good for walks", "Strong outdoor value", "Popular for weekends", "Easy to add to routes"]
  },
  production: {
    de: ["Regionaler Produktionsbezug", "Gut fuer thematische Stops", "Stark fuer Genussrouten", "Sichtbarer Wirtschaftsbezug", "Nutzlich fuer Kurzreisen"],
    hu: ["Regionalis termelesi jelleg", "Jo tematikus megallokra", "Eros gasztro utakhoz", "Lathato gazdasagi kapcsolat", "Hasznos rovid utazasokhoz"],
    ro: ["Legatura regionala de productie", "Bun pentru opriri tematice", "Puternic pentru rute gastronomice", "Vizibil ca element economic", "Util pentru calatorii scurte"],
    en: ["Regional production link", "Good for themed stops", "Strong for food routes", "Visible economic angle", "Useful for short trips"]
  },
  kid: {
    de: ["Familienfreundliches Ziel", "Gut fuer Kinder", "Ideal fuer Wochenenden", "Leicht zu planen", "Beliebt bei Familien"],
    hu: ["Csaladbarat celpont", "Jo gyerekeknek", "Idealis hetvegere", "Egyszeruen tervezheto", "Nepszeru a csaladok koreben"],
    ro: ["Destinatie family friendly", "Buna pentru copii", "Ideala pentru weekend", "Usor de planificat", "Populara printre familii"],
    en: ["Family-friendly destination", "Good for children", "Ideal for weekends", "Easy to plan", "Popular with families"]
  }
};

const luxembourgRound2Big = luxembourgRound2BigSpecs.map((spec) => {
  const category =
    spec.type === "city"
      ? "city"
      : spec.type === "historical" || spec.type === "landmark"
        ? "historical"
        : spec.type === "agriculture" || spec.type === "industry"
          ? "production"
          : spec.type === "kid-landmark"
            ? "kid"
            : "nature";

  return {
    id: spec.id,
    type: spec.type,
    parent: "LU",
    coords: spec.coords,
    name: spec.name,
    description: luxembourgRound2BigDescriptions[category](spec.name),
    facts: luxembourgRound2BigFacts[category],
    image: `/geo-images/luxembourg/${spec.id}.webp`
  };
});

luxembourgAllPoi.push(...luxembourgRound2Big);