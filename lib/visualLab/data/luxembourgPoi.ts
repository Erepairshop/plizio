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
    type: "nature",
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
    type: "nature",
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
    type: "nature",
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
    type: "nature",
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
];

luxembourgAllPoi.push(...luxembourgCities, ...luxembourgCulture, ...luxembourgNature);
