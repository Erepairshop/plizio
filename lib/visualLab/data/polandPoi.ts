import type { POI } from "./poi";

export const polandCountry: POI = {
  id: "poland",
  type: "country",
  parent: "EU",
  coords: [19.1451, 51.9194],
  name: { de: "Polen", hu: "Lengyelország", ro: "Polonia", en: "Poland" },
  description: {
    de: "Polen ist ein Land in Mitteleuropa, bekannt für seine reiche Geschichte, wunderschöne Altstädte und vielfältige Landschaften.",
    hu: "Lengyelország közép-európai ország, amely gazdag történelméről, gyönyörű óvárosairól és változatos tájairól ismert.",
    ro: "Polonia este o țară din Europa Centrală, cunoscută pentru istoria sa bogată, orașele vechi frumoase și peisajele diverse.",
    en: "Poland is a country in Central Europe known for its rich history, beautiful old towns, and diverse landscapes.",
  },
  facts: {
    de: ["Hauptstadt ist Warschau.", "Heimat von Nikolaus Kopernikus und Marie Curie.", "Besitzt 17 UNESCO-Welterbestätten.", "Bekannt für Pierogi und Gastfreundschaft."],
    hu: ["Fővárosa Varsó.", "Nikolausz Kopernikusz és Marie Curie hazája.", "17 UNESCO világörökségi helyszínnel rendelkezik.", "Híres a pierogiról és a vendégszeretetéről."],
    ro: ["Capitala este Varșovia.", "Patria lui Nicolaus Copernic și Marie Curie.", "Deține 17 situri din patrimoniul mondial UNESCO.", "Cunoscută pentru pierogi și ospitalitate."],
    en: ["Capital is Warsaw.", "Home of Nicolaus Copernicus and Marie Curie.", "Has 17 UNESCO World Heritage sites.", "Famous for pierogi and hospitality."],
  },
  image: "/geo-images/poland/poland-main.webp",
};

export const polandRegions: POI[] = [
  {
    id: "PL-MZ",
    type: "region",
    parent: "poland",
    coords: [21.01, 52.23],
    name: { de: "Masowien", hu: "Mazóvia", ro: "Mazovia", en: "Masovian" },
    description: {
      de: "Masowien ist die größte und bevölkerungsreichste Region Polens, in der sich die Hauptstadt Warschau befindet.",
      hu: "Mazóvia Lengyelország legnagyobb és legnépesebb régiója, itt található a főváros, Varsó.",
      ro: "Mazovia este cea mai mare și mai populată regiune a Poloniei, unde se află capitala Varșovia.",
      en: "Masovian is the largest and most populous region of Poland, home to the capital city, Warsaw.",
    },
    facts: {
      de: ["Wirtschaftliches Zentrum Polens.", "Flaches Land mit vielen Feldern.", "Heimat von Frédéric Chopin.", "Besitzt den Kampinos-Nationalpark."],
      hu: ["Lengyelország gazdasági központja.", "Sík vidék sok szántófölddel.", "Frédéric Chopin szülőhelye.", "Itt található a Kampinos Nemzeti Park."],
      ro: ["Centrul economic al Poloniei.", "Ținut plat cu multe câmpuri.", "Locul de naștere al lui Frédéric Chopin.", "Găzduiește Parcul Național Kampinos."],
      en: ["Economic center of Poland.", "Flat land with many fields.", "Birthplace of Frédéric Chopin.", "Home to the Kampinos National Park."],
    },
    image: "/geo-images/poland/mazowieckie.webp",
  },
  {
    id: "PL-MA",
    type: "region",
    parent: "poland",
    coords: [19.94, 50.06],
    name: { de: "Kleinpolen", hu: "Kis-Lengyelország", ro: "Polonia Mică", en: "Lesser Poland" },
    description: {
      de: "Kleinpolen ist eine historische Region im Süden Polens, bekannt für Krakau und das Tatra-Gebirge.",
      hu: "Kis-Lengyelország történelmi régió Lengyelország déli részén, Krakkóról és a Tátráról ismert.",
      ro: "Polonia Mică este o regiune istorică din sudul Poloniei, cunoscută pentru Cracovia și Munții Tatra.",
      en: "Lesser Poland is a historical region in southern Poland, known for Krakow and the Tatra Mountains.",
    },
    facts: {
      de: ["Hauptstadt ist Krakau.", "Beherbergt das Tatra-Gebirge.", "Bekannt für die Salzmine Wieliczka.", "Reich an UNESCO-Welterbestätten."],
      hu: ["Székhelye Krakkó.", "Itt található a Tátra-hegység.", "Híres a wieliczkai sóbányáról.", "Gazdag UNESCO világörökségi helyszínekben."],
      ro: ["Capitala este Cracovia.", "Găzduiește Munții Tatra.", "Cunoscută pentru mina de sare Wieliczka.", "Bogată în situri UNESCO."],
      en: ["Capital is Krakow.", "Home to the Tatra Mountains.", "Famous for the Wieliczka Salt Mine.", "Rich in UNESCO World Heritage sites."],
    },
    image: "/geo-images/poland/malopolskie.webp",
  },
  {
    id: "PL-PM",
    type: "region",
    parent: "poland",
    coords: [18.64, 54.35],
    name: { de: "Pommern", hu: "Pomeránia", ro: "Pomerania", en: "Pomeranian" },
    description: {
      de: "Pommern liegt an der Ostseeküste und ist bekannt für seine Strände, Häfen und die Dreistadt.",
      hu: "Pomeránia a Balti-tenger partján fekszik, strandjairól, kikötőiről és a Hármasvárosról ismert.",
      ro: "Pomerania este situată pe coasta Mării Baltice și este cunoscută pentru plajele, porturile și Tricity.",
      en: "Pomeranian is located on the Baltic coast and is known for its beaches, ports, and the Tricity area.",
    },
    facts: {
      de: ["Hauptstadt ist Danzig.", "Besitzt lange Sandstrände.", "Heimat der Marienburg (Malbork).", "Bekannt für den Slowinzischen Nationalpark."],
      hu: ["Székhelye Gdańsk.", "Hosszú homokos strandokkal rendelkezik.", "Itt található Malbork vára.", "Híres a Słowiński Nemzeti Parkról."],
      ro: ["Capitala este Gdańsk.", "Are plaje lungi cu nisip.", "Găzduiește castelul Malbork.", "Cunoscută pentru Parcul Național Słowiński."],
      en: ["Capital is Gdansk.", "Has long sandy beaches.", "Home to Malbork Castle.", "Known for the Słowiński National Park."],
    },
    image: "/geo-images/poland/pomorskie.webp",
  },
  {
    id: "PL-DS",
    type: "region",
    parent: "poland",
    coords: [17.03, 51.10],
    name: { de: "Niederschlesien", hu: "Alsó-Szilézia", ro: "Silezia Inferioară", en: "Lower Silesian" },
    description: {
      de: "Niederschlesien im Südwesten Polens ist bekannt für seine Schlösser, Berge und die Stadt Breslau.",
      hu: "Alsó-Szilézia Lengyelország délnyugati részén kastélyairól, hegyeiről és Wrocław városáról ismert.",
      ro: "Silezia Inferioară din sud-vestul Poloniei este cunoscută pentru castelele, munții și orașul Wrocław.",
      en: "Lower Silesian in southwestern Poland is known for its castles, mountains, and the city of Wroclaw.",
    },
    facts: {
      de: ["Hauptstadt ist Breslau.", "Heimat des Riesengebirges.", "Bekannt für das Schloss Fürstenstein.", "Reich an Bergbaugeschichte."],
      hu: ["Székhelye Wrocław.", "Itt található az Óriás-hegység.", "Híres a Książ-kastélyról.", "Gazdag bányászati múlttal rendelkezik."],
      ro: ["Capitala este Wrocław.", "Găzduiește Munții Karkonosze.", "Cunoscută pentru castelul Książ.", "Bogată în istorie minieră."],
      en: ["Capital is Wroclaw.", "Home to the Karkonosze Mountains.", "Famous for Ksiaz Castle.", "Rich in mining history."],
    },
    image: "/geo-images/poland/dolnoslaskie.webp",
  },
  {
    id: "PL-WP",
    type: "region",
    parent: "poland",
    coords: [16.92, 52.40],
    name: { de: "Großpolen", hu: "Nagy-Lengyelország", ro: "Polonia Mare", en: "Greater Poland" },
    description: {
      de: "Großpolen gilt als die Wiege des polnischen Staates mit einer reichen Geschichte und fruchtbarem Ackerland.",
      hu: "Nagy-Lengyelországot a lengyel állam bölcsőjének tekintik, gazdag történelemmel és termékeny földekkel.",
      ro: "Polonia Mare este considerată leagănul statului polonez, cu o istorie bogată și terenuri agricole fertile.",
      en: "Greater Poland is considered the cradle of the Polish state, with a rich history and fertile farmland.",
    },
    facts: {
      de: ["Hauptstadt ist Posen.", "Ort der ersten polnischen Hauptstadt (Gnesen).", "Bekannt für den Rogalin-Park.", "Wichtiges Landwirtschaftszentrum."],
      hu: ["Székhelye Poznań.", "Itt volt az első lengyel főváros (Gniezno).", "Híres a Rogalin parkról.", "Fontos mezőgazdasági központ."],
      ro: ["Capitala este Poznań.", "Locul primei capitale poloneze (Gniezno).", "Cunoscută pentru parcul Rogalin.", "Important centru agricol."],
      en: ["Capital is Poznan.", "Site of the first Polish capital (Gniezno).", "Known for Rogalin Park.", "Important agricultural center."],
    },
    image: "/geo-images/poland/wielkopolskie.webp",
  },
  {
    id: "PL-SL",
    type: "region",
    parent: "poland",
    coords: [19.02, 50.26],
    name: { de: "Schlesien", hu: "Szilézia", ro: "Silezia", en: "Silesian" },
    description: {
      de: "Schlesien ist eine hochindustrialisierte Region im Süden, bekannt für Kohlebergbau und Industriekultur.",
      hu: "Szilézia egy erősen iparosodott régió délen, szénbányászatáról és ipari kultúrájáról ismert.",
      ro: "Silezia este o regiune puternic industrializată din sud, cunoscută pentru mineritul de cărbune și cultura industrială.",
      en: "Silesian is a highly industrialized region in the south, known for coal mining and industrial culture.",
    },
    facts: {
      de: ["Hauptstadt ist Kattowitz.", "Dichteste Besiedlung in Polen.", "Bekannt für die 'Schwarze Madonna' in Tschenstochau.", "Reich an Industriedenkmalern."],
      hu: ["Székhelye Katowice.", "Lengyelország legsűrűbben lakott területe.", "Híres a częstochowai 'Fekete Madonnáról'.", "Gazdag ipari műemlékekben."],
      ro: ["Capitala este Katowice.", "Cea mai mare densitate a populației din Polonia.", "Cunoscută pentru 'Madona Neagră' din Częstochowa.", "Bogată în monumente industriale."],
      en: ["Capital is Katowice.", "Highest population density in Poland.", "Famous for the 'Black Madonna' in Czestochowa.", "Rich in industrial monuments."],
    },
    image: "/geo-images/poland/slaskie.webp",
  },
  {
    id: "PL-LD",
    type: "region",
    parent: "poland",
    coords: [19.45, 51.75],
    name: { de: "Lodz", hu: "Łódź", ro: "Łódź", en: "Łódź" },
    description: {
      de: "Die Region Lodz liegt im Zentrum Polens und war historisch ein Zentrum der Textilindustrie.",
      hu: "Łódź régió Lengyelország központjában fekszik, történelmileg a textilipar központja volt.",
      ro: "Regiunea Łódź este situată în centrul Poloniei și a fost istoric un centru al industriei textile.",
      en: "The Łódź region is located in central Poland and was historically a center of the textile industry.",
    },
    facts: {
      de: ["Hauptstadt ist Lodz.", "Zentraler Verkehrsknotenpunkt.", "Bekannt für die Filmhochschule Lodz.", "Besitzt viele Jugendstil-Gebäude."],
      hu: ["Székhelye Łódź.", "Központi közlekedési csomópont.", "Híres a łódźi filmfőiskoláról.", "Sok szecessziós épülettel rendelkezik."],
      ro: ["Capitala este Łódź.", "Nod central de transport.", "Cunoscută pentru școala de film din Łódź.", "Deține multe clădiri Art Nouveau."],
      en: ["Capital is Łódź.", "Central transport hub.", "Famous for the Łódź Film School.", "Has many Art Nouveau buildings."],
    },
    image: "/geo-images/poland/lodzkie.webp",
  },
  {
    id: "PL-LU",
    type: "region",
    parent: "poland",
    coords: [22.56, 51.24],
    name: { de: "Lublin", hu: "Lublin", ro: "Lublin", en: "Lublin" },
    description: {
      de: "Lublin im Osten Polens ist bekannt für seine unberührte Natur und historische Architektur.",
      hu: "Lublin régió Lengyelország keleti részén érintetlen természetéről és történelmi építészetéről ismert.",
      ro: "Lublin din estul Poloniei este cunoscută pentru natura sa virgină și arhitectura istorică.",
      en: "Lublin in eastern Poland is known for its untouched nature and historical architecture.",
    },
    facts: {
      de: ["Hauptstadt ist Lublin.", "Besitzt den Roztocze-Nationalpark.", "Bekannt für die Renaissance-Stadt Zamość.", "Wichtiges Bildungszentrum im Osten."],
      hu: ["Székhelye Lublin.", "Itt található a Roztocze Nemzeti Park.", "Híres a reneszánsz Zamość városáról.", "Fontos oktatási központ keleten."],
      ro: ["Capitala este Lublin.", "Găzduiește Parcul Național Roztocze.", "Cunoscută pentru orașul renascentist Zamość.", "Important centru educațional în est."],
      en: ["Capital is Lublin.", "Home to the Roztocze National Park.", "Famous for the Renaissance town of Zamość.", "Important educational center in the east."],
    },
    image: "/geo-images/poland/lubelskie.webp",
  },
  {
    id: "PL-WN",
    type: "region",
    parent: "poland",
    coords: [20.48, 53.77],
    name: { de: "Ermland-Masuren", hu: "Warmia-Mazúria", ro: "Warmia și Mazuria", en: "Warmian-Masurian" },
    description: {
      de: "Diese Region ist als das 'Land der tausend Seen' bekannt und ein Paradies für Segler und Naturfreunde.",
      hu: "Ez a régió az 'ezer tó vidéke' néven ismert, a vitorlázók és a természetbarátok paradicsoma.",
      ro: "Această regiune este cunoscută sub numele de 'Ținutul celor o mie de lacuri' și este un paradis pentru navigatori și iubitorii de natură.",
      en: "This region is known as the 'Land of a Thousand Lakes' and is a paradise for sailors and nature lovers.",
    },
    facts: {
      de: ["Hauptstadt ist Allenstein.", "Beherbergt die Masurische Seenplatte.", "Bekannt für die Wolfsschanze.", "Reich an Wäldern und Wasserwegen."],
      hu: ["Székhelye Olsztyn.", "Itt található a Mazuri-tóhátság.", "Híres a Farkasodúról (Wolfsschanze).", "Gazdag erdőkben és vízi utakban."],
      ro: ["Capitala este Olsztyn.", "Găzduiește Districtul Lacurilor Mazuriene.", "Cunoscută pentru Wolf's Lair.", "Bogată în păduri și căi navigabile."],
      en: ["Capital is Olsztyn.", "Home to the Masurian Lake District.", "Famous for the Wolf's Lair.", "Rich in forests and waterways."],
    },
    image: "/geo-images/poland/warminsko-mazurskie.webp",
  },
  {
    id: "PL-ZP",
    type: "region",
    parent: "poland",
    coords: [14.55, 53.42],
    name: { de: "Westpommern", hu: "Nyugat-Pomeránia", ro: "Pomerania Occidentală", en: "West Pomeranian" },
    description: {
      de: "Westpommern im Nordwesten bietet breite Strände, dichte Wälder und die Hafenstadt Stettin.",
      hu: "Nyugat-Pomeránia északnyugaton széles strandokat, sűrű erdőket és Szczecin kikötővárosát kínálja.",
      ro: "Pomerania Occidentală din nord-vest oferă plaje largi, păduri dese și orașul port Szczecin.",
      en: "West Pomeranian in the northwest offers wide beaches, dense forests, and the port city of Szczecin.",
    },
    facts: {
      de: ["Hauptstadt ist Stettin.", "Bekannt für die Insel Usedom.", "Besitzt den Nationalpark Wollin.", "Wichtiger Zugang zur Ostsee."],
      hu: ["Székhelye Szczecin.", "Híres Usedom szigetéről.", "Itt található a Wolin Nemzeti Park.", "Fontos kijárat a Balti-tengerre."],
      ro: ["Capitala este Szczecin.", "Cunoscută pentru insula Usedom.", "Găzduiește Parcul Național Wolin.", "Acces important la Marea Baltică."],
      en: ["Capital is Szczecin.", "Famous for Usedom island.", "Home to the Wolin National Park.", "Important gateway to the Baltic Sea."],
    },
    image: "/geo-images/poland/zachodniopomorskie.webp",
  },
  {
    id: "PL-PD",
    type: "region",
    parent: "poland",
    coords: [23.16, 53.13],
    name: { de: "Podlachien", hu: "Podlasie", ro: "Podlasia", en: "Podlaskie" },
    description: {
      de: "Podlachien im Nordosten ist bekannt für seine wilde Natur und den letzten Urwald Europas.",
      hu: "Podlasie északkeleten vad természetéről és Európa utolsó őserdejéről ismert.",
      ro: "Podlasia din nord-est este cunoscută pentru natura sa sălbatică și ultima pădure virgină din Europa.",
      en: "Podlaskie in the northeast is known for its wild nature and the last primeval forest in Europe.",
    },
    facts: {
      de: ["Hauptstadt ist Białystok.", "Heimat der Wisente im Białowieża-Urwald.", "Bekannt für den Biebrza-Nationalpark.", "Kulturell sehr vielfältig."],
      hu: ["Székhelye Białystok.", "Az európai bölények hazája a Białowieża-erdőben.", "Híres a Biebrza Nemzeti Parkról.", "Kulturálisan nagyon sokszínű."],
      ro: ["Capitala este Białystok.", "Patria zimbrilor din Pădurea Białowieża.", "Cunoscută pentru Parcul Național Biebrza.", "Foarte diversă din punct de vedere cultural."],
      en: ["Capital is Białystok.", "Home to European bison in Białowieża Forest.", "Known for the Biebrza National Park.", "Culturally very diverse."],
    },
    image: "/geo-images/poland/podlaskie.webp",
  },
  {
    id: "PL-PK",
    type: "region",
    parent: "poland",
    coords: [22.00, 50.04],
    name: { de: "Karpatenvorland", hu: "Kárpátalja", ro: "Subcarpatia", en: "Subcarpathian" },
    description: {
      de: "Das Karpatenvorland im Südosten ist geprägt von den Bieszczady-Bergen und unberührter Wildnis.",
      hu: "A Kárpátalja délkeleten a Bieszczady-hegységről és az érintetlen vadonról nevezetes.",
      ro: "Subcarpatia din sud-est este marcată de Munții Bieszczady și de sălbăticia virgină.",
      en: "Subcarpathian in the southeast is characterized by the Bieszczady Mountains and untouched wilderness.",
    },
    facts: {
      de: ["Hauptstadt ist Rzeszów.", "Heimat des Bieszczady-Nationalparks.", "Bekannt für Holzkirchen.", "Dunkelster Sternenhimmel Polens."],
      hu: ["Székhelye Rzeszów.", "Itt található a Bieszczady Nemzeti Park.", "Híres a fatemplomairól.", "Itt a legsötétebb a csillagos égbolt Lengyelországban."],
      ro: ["Capitala este Rzeszów.", "Găzduiește Parcul Național Bieszczady.", "Cunoscută pentru bisericile din lemn.", "Cel mai întunecat cer înstelat din Polonia."],
      en: ["Capital is Rzeszów.", "Home to the Bieszczady National Park.", "Famous for wooden churches.", "Darkest starry sky in Poland."],
    },
    image: "/geo-images/poland/podkarpackie.webp",
  },
  {
    id: "PL-KP",
    type: "region",
    parent: "poland",
    coords: [18.59, 53.01],
    name: { de: "Kujawien-Pommern", hu: "Kujávia-Pomeránia", ro: "Cuiavia și Pomerania", en: "Kuyavian-Pomeranian" },
    description: {
      de: "Diese Region im Norden Polens ist bekannt für die historische Stadt Thorn und ihre Thermalbäder.",
      hu: "Ez az észak-lengyelországi régió a történelmi Toruń városáról és termálfürdőiről ismert.",
      ro: "Această regiune din nordul Poloniei este cunoscută pentru orașul istoric Toruń și băile sale termale.",
      en: "This region in northern Poland is known for the historical city of Toruń and its thermal spas.",
    },
    facts: {
      de: ["Hauptstädte sind Bydgoszcz und Thorn.", "Geburtsort von Kopernikus.", "Bekannt für Lebkuchen aus Thorn.", "Besitzt das Weichseltal."],
      hu: ["Székhelyei Bydgoszcz és Toruń.", "Kopernikusz szülőhelye.", "Híres a toruńi mézeskalácsról.", "Itt található a Visztula-völgy."],
      ro: ["Capitalele sunt Bydgoszcz și Toruń.", "Locul de naștere al lui Copernic.", "Cunoscută pentru turtă dulce din Toruń.", "Deține Valea Vistulei."],
      en: ["Capitals are Bydgoszcz and Toruń.", "Birthplace of Copernicus.", "Famous for Toruń gingerbread.", "Has the Vistula valley."],
    },
    image: "/geo-images/poland/kujawsko-pomorskie.webp",
  },
  {
    id: "PL-SK",
    type: "region",
    parent: "poland",
    coords: [20.62, 50.86],
    name: { de: "Heiligkreuz", hu: "Szentkereszt", ro: "Sfânta Cruce", en: "Świętokrzyskie" },
    description: {
      de: "Die Region Heiligkreuz ist eine der ältesten Gebirgsregionen Polens mit reicher Geologie.",
      hu: "A Szentkereszt régió Lengyelország egyik legrégebbi hegyvidéke, gazdag geológiai értékekkel.",
      ro: "Regiunea Sfânta Cruce este una dintre cele mai vechi regiuni montane din Polonia, cu o geologie bogată.",
      en: "The Holy Cross region is one of the oldest mountain regions in Poland with rich geology.",
    },
    facts: {
      de: ["Hauptstadt ist Kielce.", "Heimat des Heiligkreuzgebirges.", "Bekannt für die Höhle 'Raj'.", "Besitzt uralte Eichen."],
      hu: ["Székhelye Kielce.", "Itt található a Szentkereszt-hegység.", "Híres a 'Raj' (Paradicsom) barlangról.", "Ősi tölgyfákkal rendelkezik."],
      ro: ["Capitala este Kielce.", "Găzduiește Munții Sfânta Cruce.", "Cunoscută pentru peștera 'Raj'.", "Deține stejari străvechi."],
      en: ["Capital is Kielce.", "Home to the Holy Cross Mountains.", "Famous for the 'Raj' (Paradise) cave.", "Has ancient oak trees."],
    },
    image: "/geo-images/poland/swietokrzyskie.webp",
  },
  {
    id: "PL-LB",
    type: "region",
    parent: "poland",
    coords: [15.22, 52.73],
    name: { de: "Lebus", hu: "Lubus", ro: "Lubusz", en: "Lubusz" },
    description: {
      de: "Lebus im Westen ist die waldreichste Region Polens und bekannt für ihren Weinbau.",
      hu: "A nyugati Lubus Lengyelország legerdősebb régiója, és bortermeléséről ismert.",
      ro: "Lubusz din vest este cea mai împădurită regiune a Poloniei și este cunoscută pentru viticultură.",
      en: "Lubusz in the west is the most forested region of Poland and known for its viticulture.",
    },
    facts: {
      de: ["Hauptstädte sind Landsberg und Grünberg.", "Bekannt für das Weinfest in Zielona Góra.", "Besitzt viele Seen.", "Wichtiges Naturschutzgebiet."],
      hu: ["Székhelyei Gorzów Wlkp. és Zielona Góra.", "Híres a zielona góra-i borfesztiválról.", "Sok tóval rendelkezik.", "Fontos természetvédelmi terület."],
      ro: ["Capitalele sunt Gorzów Wlkp. și Zielona Góra.", "Cunoscută pentru festivalul vinului din Zielona Góra.", "Deține multe lacuri.", "Importantă rezervație naturală."],
      en: ["Capitals are Gorzów Wlkp. and Zielona Góra.", "Famous for the wine festival in Zielona Góra.", "Has many lakes.", "Important nature conservation area."],
    },
    image: "/geo-images/poland/lubuskie.webp",
  },
  {
    id: "PL-OP",
    type: "region",
    parent: "poland",
    coords: [17.92, 50.67],
    name: { de: "Oppeln", hu: "Opole", ro: "Opole", en: "Opole" },
    description: {
      de: "Die Region Oppeln ist die kleinste Region Polens und bekannt für ihre kulturelle Vielfalt.",
      hu: "Az Opolei régió Lengyelország legkisebb régiója, kulturális sokszínűségéről ismert.",
      ro: "Regiunea Opole este cea mai mică regiune a Poloniei și este cunoscută pentru diversitatea sa culturală.",
      en: "The Opole region is the smallest region of Poland and known for its cultural diversity.",
    },
    facts: {
      de: ["Hauptstadt ist Oppeln.", "Bekannt für das polnische Liederfestival.", "Besitzt das Schloss Moszna.", "Starke deutsche Minderheit."],
      hu: ["Székhelye Opole.", "Híres a lengyel dalfesztiválról.", "Itt található a Moszna-kastély.", "Jelentős német kisebbség él itt."],
      ro: ["Capitala este Opole.", "Cunoscută pentru festivalul cântecului polonez.", "Găzduiește castelul Moszna.", "Minoritate germană puternică."],
      en: ["Capital is Opole.", "Famous for the Polish Song Festival.", "Home to Moszna Castle.", "Strong German minority."],
    },
    image: "/geo-images/poland/opolskie.webp",
  },
];

export const polandCities: POI[] = [
  {
    id: "warsaw",
    type: "city",
    parent: "PL-MZ",
    coords: [21.0122, 52.2297],
    name: { de: "Warschau", hu: "Varsó", ro: "Varșovia", en: "Warsaw" },
    description: {
      de: "Warschau, die Hauptstadt Polens, ist eine dynamische Metropole, die nach dem Zweiten Weltkrieg wiederaufgebaut wurde.",
      hu: "Varsó, Lengyelország fővárosa, egy dinamikus metropolisz, amelyet a második világháború után újjáépítettek.",
      ro: "Varșovia, capitala Poloniei, este o metropolă dinamică, reconstruită după cel de-al Doilea Război Mondial.",
      en: "Warsaw, the capital of Poland, is a dynamic metropolis that was rebuilt after World War II.",
    },
    facts: {
      de: ["Größte Stadt Polens.", "Die Altstadt ist UNESCO-Welterbe.", "Besitzt den Kulturpalast.", "Zentrum für Wirtschaft und Kultur."],
      hu: ["Lengyelország legnagyobb városa.", "Az óváros az UNESCO világörökség része.", "Itt található a Kultúra és Tudomány Palotája.", "Gazdasági és kulturális központ."],
      ro: ["Cel mai mare oraș din Polonia.", "Orașul Vechi este patrimoniu UNESCO.", "Găzduiește Palatul Culturii.", "Centru economic și cultural."],
      en: ["Largest city in Poland.", "The Old Town is a UNESCO World Heritage site.", "Home to the Palace of Culture and Science.", "Center for economy and culture."],
    },
    image: "/geo-images/poland/warsaw.webp",
  },
  {
    id: "krakow",
    type: "city",
    parent: "PL-MA",
    coords: [19.9450, 50.0647],
    name: { de: "Krakau", hu: "Krakkó", ro: "Cracovia", en: "Krakow" },
    description: {
      de: "Krakau ist die ehemalige Hauptstadt Polens und bekannt für seinen gut erhaltenen mittelalterlichen Kern.",
      hu: "Krakkó Lengyelország egykori fővárosa, jól megőrzött középkori városmagjáról ismert.",
      ro: "Cracovia este fosta capitală a Poloniei și este cunoscută pentru centrul său medieval bine conservat.",
      en: "Krakow is the former capital of Poland and known for its well-preserved medieval core.",
    },
    facts: {
      de: ["Heimat der Wawel-Burg.", "Besitzt einen der größten Marktplätze Europas.", "Ehemaliger Sitz der polnischen Könige.", "Wichtiges Touristenziel."],
      hu: ["A Wawel-vár hazája.", "Európa egyik legnagyobb piacterével rendelkezik.", "A lengyel királyok egykori székhelye.", "Fontos turisztikai célpont."],
      ro: ["Găzduiește castelul Wawel.", "Are una dintre cele mai mari piețe din Europa.", "Fosta reședință a regilor polonezi.", "Importantă destinație turistică."],
      en: ["Home to Wawel Castle.", "Has one of the largest market squares in Europe.", "Former seat of Polish kings.", "Major tourist destination."],
    },
    image: "/geo-images/poland/krakow.webp",
  },
  {
    id: "wroclaw",
    type: "city",
    parent: "PL-DS",
    coords: [17.0385, 51.1079],
    name: { de: "Breslau", hu: "Wrocław", ro: "Wrocław", en: "Wroclaw" },
    description: {
      de: "Breslau ist eine Stadt der Brücken und Inseln an der Oder, bekannt für ihre Zwerge und Architektur.",
      hu: "Wrocław a hidak és szigetek városa az Odera partján, törpéiről és építészetéről ismert.",
      ro: "Wrocław este orașul podurilor și insulelor de pe râul Oder, cunoscut pentru piticii și arhitectura sa.",
      en: "Wroclaw is a city of bridges and islands on the Oder River, known for its dwarves and architecture.",
    },
    facts: {
      de: ["Besitzt über 100 Brücken.", "Bekannt für die Breslauer Zwerge.", "Heimat der Jahrhunderthalle.", "Kulturhauptstadt Europas 2016."],
      hu: ["Több mint 100 híddal rendelkezik.", "Híres a wrocławi törpékről.", "Itt található a Centenáriumi Csarnok.", "Európa Kulturális Fővárosa volt 2016-ban."],
      ro: ["Are peste 100 de poduri.", "Cunoscut pentru piticii din Wrocław.", "Găzduiește Hala Centenarului.", "Capitală Europeană a Culturii în 2016."],
      en: ["Has over 100 bridges.", "Known for the Wroclaw dwarves.", "Home to the Centennial Hall.", "European Capital of Culture in 2016."],
    },
    image: "/geo-images/poland/wroclaw.webp",
  },
  {
    id: "gdansk",
    type: "city",
    parent: "PL-PM",
    coords: [18.6466, 54.3520],
    name: { de: "Danzig", hu: "Gdańsk", ro: "Gdańsk", en: "Gdansk" },
    description: {
      de: "Danzig ist eine historische Hafenstadt an der Ostsee und der Geburtsort der Solidarność-Bewegung.",
      hu: "Gdańsk történelmi kikötőváros a Balti-tenger partján, a Szolidaritás mozgalom szülőhelye.",
      ro: "Gdańsk este un oraș port istoric la Marea Baltică și locul de naștere al mișcării Solidaritatea.",
      en: "Gdansk is a historical port city on the Baltic Sea and the birthplace of the Solidarity movement.",
    },
    facts: {
      de: ["Wichtige Hansestadt.", "Bekannt für den Bernsteinhandel.", "Ort des Beginns des Zweiten Weltkriegs.", "Besitzt die Marienkirche."],
      hu: ["Fontos Hanza-város.", "Híres a borostyánkereskedelemről.", "A második világháború kitörésének helyszíne.", "Itt található a Mária-templom."],
      ro: ["Important oraș hanseatic.", "Cunoscut pentru comerțul cu chihlimbar.", "Locul de început al celui de-al Doilea Război Mondial.", "Deține Biserica Sfânta Maria."],
      en: ["Important Hanseatic city.", "Known for amber trade.", "Site of the start of World War II.", "Home to St. Mary's Church."],
    },
    image: "/geo-images/poland/gdansk.webp",
  },
  {
    id: "poznan",
    type: "city",
    parent: "PL-WP",
    coords: [16.9252, 52.4064],
    name: { de: "Posen", hu: "Poznań", ro: "Poznań", en: "Poznan" },
    description: {
      de: "Posen ist ein wichtiges Handels- und Bildungszentrum mit einem wunderschönen Renaissance-Rathaus.",
      hu: "Poznań fontos kereskedelmi és oktatási központ, gyönyörű reneszánsz városházával.",
      ro: "Poznań este un important centru comercial și educațional, cu o primărie renascentistă frumoasă.",
      en: "Poznan is an important trade and educational center with a beautiful Renaissance town hall.",
    },
    facts: {
      de: ["Bekannt für die Ziegen am Rathaus.", "Wichtiger Messestandort.", "Berühmt für das Martinsgebäck.", "Eine der ältesten Städte Polens."],
      hu: ["Híres a városháza tornyában lévő kecskebakokról.", "Fontos vásárváros.", "Híres a Szent Márton-kifliről.", "Lengyelország egyik legrégebbi városa."],
      ro: ["Cunoscut pentru caprele de pe primărie.", "Important centru expozițional.", "Faimos pentru cornurile Sfântului Martin.", "Unul dintre cele mai vechi orașe din Polonia."],
      en: ["Known for the goats on the town hall.", "Important trade fair location.", "Famous for St. Martin's croissants.", "One of the oldest cities in Poland."],
    },
    image: "/geo-images/poland/poznan.webp",
  },
  {
    id: "szczecin",
    type: "city",
    parent: "PL-ZP",
    coords: [14.5528, 53.4285],
    name: { de: "Stettin", hu: "Szczecin", ro: "Szczecin", en: "Szczecin" },
    description: {
      de: "Stettin ist eine bedeutende Hafenstadt im Nordwesten Polens mit einer einzigartigen sternförmigen Stadtplanung.",
      hu: "Szczecin jelentős kikötőváros Lengyelország északnyugati részén, egyedülálló csillag alakú városszerkezettel.",
      ro: "Szczecin este un oraș port important din nord-vestul Poloniei, cu o planificare urbană unică în formă de stea.",
      en: "Szczecin is a major port city in northwestern Poland with a unique star-shaped urban layout.",
    },
    facts: {
      de: ["Besitzt das Schloss der Pommerschen Herzöge.", "Bekannt für die Hakenterrasse.", "Großer Seehafen.", "Grüne Stadt mit vielen Parks."],
      hu: ["Itt található a pomerániai hercegek vára.", "Híres a Waly Chrobrego teraszról.", "Hatalmas tengeri kikötő.", "Zöld város sok parkkal."],
      ro: ["Găzduiește Castelul Ducilor Pomeranieni.", "Cunoscut pentru terasele Hakenterrasse.", "Mare port maritim.", "Oraș verde cu multe parcuri."],
      en: ["Home to the Castle of the Pomeranian Dukes.", "Known for the Waly Chrobrego terraces.", "Large seaport.", "Green city with many parks."],
    },
    image: "/geo-images/poland/szczecin.webp",
  },
  {
    id: "lodz-city",
    type: "city",
    parent: "PL-LD",
    coords: [19.4560, 51.7592],
    name: { de: "Lodz", hu: "Łódź", ro: "Łódź", en: "Łódź" },
    description: {
      de: "Lodz ist die drittgrößte Stadt Polens, bekannt für ihre industrielle Vergangenheit und lebendige Kulturszene.",
      hu: "Łódź Lengyelország harmadik legnagyobb városa, ipari múltjáról és élénk kulturális életéről ismert.",
      ro: "Łódź este al treilea oraș ca mărime din Polonia, cunoscut pentru trecutul său industrial și scena culturală vibrantă.",
      en: "Łódź is the third-largest city in Poland, known for its industrial past and vibrant cultural scene.",
    },
    facts: {
      de: ["Besitzt die längste Einkaufsstraße Polens (Piotrkowska).", "Zentrum der polnischen Filmindustrie.", "Bekannt für das Manufaktura-Zentrum.", "Reich an Textilgeschichte."],
      hu: ["Itt található Lengyelország leghosszabb sétálóutcája (Piotrkowska).", "A lengyel filmipar központja.", "Híres a Manufaktura központról.", "Gazdag textilipari múlttal rendelkezik."],
      ro: ["Are cea mai lungă stradă comercială din Polonia (Piotrkowska).", "Centrul industriei cinematografice poloneze.", "Cunoscut pentru centrul Manufaktura.", "Bogată în istorie textilă."],
      en: ["Has the longest commercial street in Poland (Piotrkowska).", "Center of the Polish film industry.", "Known for the Manufaktura center.", "Rich in textile history."],
    },
    image: "/geo-images/poland/lodz.webp",
  },
  {
    id: "lublin-city",
    type: "city",
    parent: "PL-LU",
    coords: [22.5684, 51.2465],
    name: { de: "Lublin", hu: "Lublin", ro: "Lublin", en: "Lublin" },
    description: {
      de: "Lublin ist die größte Stadt in Ostpolen und ein wichtiges akademisches und kulturelles Zentrum.",
      hu: "Lublin Kelet-Lengyelország legnagyobb városa, fontos akadémiai és kulturális központ.",
      ro: "Lublin este cel mai mare oraș din estul Poloniei și un important centru academic și cultural.",
      en: "Lublin is the largest city in eastern Poland and an important academic and cultural center.",
    },
    facts: {
      de: ["Besitzt eine gut erhaltene Altstadt.", "Bekannt für das Lubliner Schloss.", "Ort der Union von Lublin.", "Wichtige Universitätsstadt."],
      hu: ["Jól megőrzött óvárossal rendelkezik.", "Híres a lublini várról.", "A lublini unió helyszíne.", "Fontos egyetemi város."],
      ro: ["Are un oraș vechi bine conservat.", "Cunoscut pentru Castelul Lublin.", "Locul Uniunii de la Lublin.", "Important oraș universitar."],
      en: ["Has a well-preserved old town.", "Known for the Lublin Castle.", "Site of the Union of Lublin.", "Important university city."],
    },
    image: "/geo-images/poland/lublin.webp",
  },
  {
    id: "katowice",
    type: "city",
    parent: "PL-SL",
    coords: [19.0238, 50.2649],
    name: { de: "Kattowitz", hu: "Katowice", ro: "Katowice", en: "Katowice" },
    description: {
      de: "Kattowitz ist das Herz der schlesischen Industrieregion und hat sich zu einem modernen Zentrum für Kultur und Wirtschaft gewandelt.",
      hu: "Katowice a sziléziai ipari régió szíve, amely modern kulturális és gazdasági központtá alakult.",
      ro: "Katowice este inima regiunii industriale sileziene și s-a transformat într-un centru modern pentru cultură și afaceri.",
      en: "Katowice is the heart of the Silesian industrial region and has transformed into a modern center for culture and business.",
    },
    facts: {
      de: ["Bekannt für die Spodek-Arena.", "Sitz des Schlesischen Museums.", "UNESCO-Stadt der Musik.", "Zentrum der Metropolregion."],
      hu: ["Híres a Spodek arénáról.", "Itt található a Sziléziai Múzeum.", "Az UNESCO zenei városa.", "A metropolisz-régió központja."],
      ro: ["Cunoscut pentru arena Spodek.", "Găzduiește Muzeul Silezian.", "Oraș al muzicii UNESCO.", "Centrul regiunii metropolitane."],
      en: ["Known for the Spodek arena.", "Home to the Silesian Museum.", "UNESCO City of Music.", "Center of the metropolitan area."],
    },
    image: "/geo-images/poland/katowice.webp",
  },
  {
    id: "bialystok",
    type: "city",
    parent: "PL-PD",
    coords: [23.1688, 53.1325],
    name: { de: "Białystok", hu: "Białystok", ro: "Białystok", en: "Białystok" },
    description: {
      de: "Białystok ist die größte Stadt im Nordosten Polens und bekannt für ihre multikulturelle Geschichte.",
      hu: "Białystok Északkelet-Lengyelország legnagyobb városa, multikulturális történelméről ismert.",
      ro: "Białystok este cel mai mare oraș din nord-estul Poloniei și este cunoscut pentru istoria sa multiculturală.",
      en: "Białystok is the largest city in northeastern Poland and known for its multicultural history.",
    },
    facts: {
      de: ["Besitzt den Branicki-Palast.", "Geburtsort von Ludwik Zamenhof (Esperanto).", "Tor zum Białowieża-Urwald.", "Grüne Stadt."],
      hu: ["Itt található a Branicki-palota.", "Ludwik Zamenhof (Eszperantó) szülőhelye.", "A Białowieża-erdő kapuja.", "Zöld város."],
      ro: ["Găzduiește Palatul Branicki.", "Locul de naștere al lui Ludwik Zamenhof (Esperanto).", "Poarta către Pădurea Białowieża.", "Oraș verde."],
      en: ["Home to the Branicki Palace.", "Birthplace of Ludwik Zamenhof (Esperanto).", "Gateway to the Białowieża Forest.", "Green city."],
    },
    image: "/geo-images/poland/bialystok.webp",
  },
  {
    id: "torun",
    type: "city",
    parent: "PL-KP",
    coords: [18.5984, 53.0138],
    name: { de: "Thorn", hu: "Toruń", ro: "Toruń", en: "Toruń" },
    description: {
      de: "Thorn ist eine wunderschöne mittelalterliche Stadt an der Weichsel, berühmt für Kopernikus und Lebkuchen.",
      hu: "Toruń gyönyörű középkori város a Visztula partján, Kopernikuszról és a mézeskalácsról híres.",
      ro: "Toruń este un oraș medieval frumos pe malul Vistulei, faimos pentru Copernic și turtă dulce.",
      en: "Toruń is a beautiful medieval city on the Vistula River, famous for Copernicus and gingerbread.",
    },
    facts: {
      de: ["UNESCO-Welterbe Altstadt.", "Geburtsort von Nikolaus Kopernikus.", "Bekannt für Thorner Lebkuchen.", "Besitzt ein schiefes Stadttor."],
      hu: ["Az óváros az UNESCO világörökség része.", "Nikolausz Kopernikusz szülőhelye.", "Híres a toruńi mézeskalácsról.", "Itt található egy ferde bástya."],
      ro: ["Orașul Vechi este patrimoniu UNESCO.", "Locul de naștere al lui Nicolaus Copernic.", "Cunoscut pentru turtă dulce din Toruń.", "Deține un turn înclinat."],
      en: ["UNESCO World Heritage old town.", "Birthplace of Nicolaus Copernicus.", "Famous for Toruń gingerbread.", "Has a leaning tower."],
    },
    image: "/geo-images/poland/torun.webp",
  },
  {
    id: "czestochowa",
    type: "city",
    parent: "PL-SL",
    coords: [19.1203, 50.814],
    name: { de: "Tschenstochau", hu: "Częstochowa", ro: "Częstochowa", en: "Czestochowa" },
    description: {
      de: "Tschenstochau ist das spirituelle Zentrum Polens, bekannt für das Kloster Jasna Góra.",
      hu: "Częstochowa Lengyelország spirituális központja, a Jasna Góra-i kolostorról ismert.",
      ro: "Częstochowa este centrul spiritual al Poloniei, cunoscut pentru mănăstirea Jasna Góra.",
      en: "Czestochowa is the spiritual center of Poland, known for the Jasna Góra Monastery.",
    },
    facts: {
      de: ["Heimat der Schwarzen Madonna.", "Wichtigster Wallfahrtsort Polens.", "Besitzt das Kloster Jasna Góra.", "Zieht Millionen Pilger an."],
      hu: ["A Fekete Madonna hazája.", "Lengyelország legfontosabb zarándokhelye.", "Itt található a Jasna Góra kolostor.", "Zarándokok millióit vonzza."],
      ro: ["Găzduiește Madona Neagră.", "Cel mai important loc de pelerinaj din Polonia.", "Deține mănăstirea Jasna Góra.", "Atrage milioane de pelerini."],
      en: ["Home to the Black Madonna.", "Most important pilgrimage site in Poland.", "Houses the Jasna Góra Monastery.", "Attracts millions of pilgrims."],
    },
    image: "/geo-images/poland/czestochowa.webp",
  },
  {
    id: "gdynia",
    type: "city",
    parent: "PL-PM",
    coords: [18.5305, 54.5189],
    name: { de: "Gdingen", hu: "Gdynia", ro: "Gdynia", en: "Gdynia" },
    description: {
      de: "Gdynia ist eine moderne Hafenstadt, die in den 1920er Jahren erbaut wurde und für ihre modernistische Architektur bekannt ist.",
      hu: "Gdynia egy modern kikötőváros, amely az 1920-as években épült, és modernista építészetéről ismert.",
      ro: "Gdynia este un oraș port modern, construit în anii 1920 și cunoscut pentru arhitectura sa modernistă.",
      en: "Gdynia is a modern port city built in the 1920s and known for its modernist architecture.",
    },
    facts: {
      de: ["Teil der Dreistadt.", "Wichtiger Seehafen.", "Bekannt für das Gdynia Film Festival.", "Besitzt das Segelschiff Dar Pomorza."],
      hu: ["A Hármasváros része.", "Fontos tengeri kikötő.", "Híres a Gdyniai Filmfesztiválról.", "Itt található a Dar Pomorza vitorláshajó."],
      ro: ["Parte a Tricity.", "Important port maritim.", "Cunoscut pentru Festivalul de Film de la Gdynia.", "Deține nava-școală Dar Pomorza."],
      en: ["Part of the Tricity.", "Important seaport.", "Known for the Gdynia Film Festival.", "Home to the Dar Pomorza sailing ship."],
    },
    image: "/geo-images/poland/gdynia.webp",
  },
  {
    id: "sopot",
    type: "city",
    parent: "PL-PM",
    coords: [18.5600, 54.4416],
    name: { de: "Sopot", hu: "Sopot", ro: "Sopot", en: "Sopot" },
    description: {
      de: "Sopot ist ein eleganter Badeort an der Ostsee, bekannt für seine Seebrücke und sein Nachtleben.",
      hu: "Sopot elegáns tengerparti üdülőhely a Balti-tengeren, mólójáról és éjszakai életéről ismert.",
      ro: "Sopot este o stațiune elegantă la Marea Baltică, cunoscută pentru debarcaderul său și viața de noapte.",
      en: "Sopot is an elegant seaside resort on the Baltic Sea, known for its pier and nightlife.",
    },
    facts: {
      de: ["Besitzt die längste Holzseebrücke Europas.", "Bekannt für das 'Krumme Haus'.", "Heimat des Sopot Festivals.", "Beliebter Kurort."],
      hu: ["Itt található Európa leghosszabb fa mólója.", "Híres a 'Görbe Házról'.", "A Sopoti Fesztivál hazája.", "Népszerű üdülőhely."],
      ro: ["Are cel mai lung debarcader de lemn din Europa.", "Cunoscut pentru 'Casa Strâmbă'.", "Găzduiește Festivalul de la Sopot.", "Stațiune populară."],
      en: ["Has the longest wooden pier in Europe.", "Known for the 'Crooked House'.", "Home to the Sopot Festival.", "Popular spa resort."],
    },
    image: "/geo-images/poland/sopot.webp",
  },
  {
    id: "wawel",
    type: "landmark",
    parent: "krakow",
    coords: [19.9354, 50.0541],
    name: { de: "Wawel-Schloss", hu: "Wawel", ro: "Castelul Wawel", en: "Wawel Castle" },
    description: {
      de: "Das Wawel-Schloss in Krakau war jahrhundertelang die Residenz der polnischen Könige.",
      hu: "A krakkói Wawel-vár évszázadokon át a lengyel királyok rezidenciája volt.",
      ro: "Castelul Wawel din Cracovia a fost reședința regilor polonezi timp de secole.",
      en: "Wawel Castle in Krakow was the residence of Polish kings for centuries.",
    },
    facts: {
      de: ["Symbol der polnischen Staatlichkeit.", "Beherbergt die Wawel-Kathedrale.", "Ort der Krönungen.", "Besitzt die Wawel-Drachenhöhle."],
      hu: ["A lengyel államiság szimbóluma.", "Itt található a Wawel-székesegyház.", "A koronázások helyszíne.", "Itt található a Sárkány-barlang."],
      ro: ["Simbol al statului polonez.", "Găzduiește Catedrala Wawel.", "Locul încoronărilor.", "Deține peștera Dragonului Wawel."],
      en: ["Symbol of Polish statehood.", "Houses the Wawel Cathedral.", "Site of coronations.", "Home to the Wawel Dragon's den."],
    },
    image: "/geo-images/poland/wawel.webp",
  },
  {
    id: "rynek-glowny",
    type: "landmark",
    parent: "krakow",
    coords: [19.9373, 50.0617],
    name: { de: "Hauptmarkt", hu: "Főpiac", ro: "Piața Centrală", en: "Main Market Square" },
    description: {
      de: "Der Hauptmarkt in Krakau ist einer der größten und schönsten mittelalterlichen Plätze in Europa.",
      hu: "A krakkói Főpiac Európa egyik legnagyobb és legszebb középkori tere.",
      ro: "Piața Centrală din Cracovia este una dintre cele mai mari și mai frumoase piețe medievale din Europa.",
      en: "The Main Market Square in Krakow is one of the largest and most beautiful medieval squares in Europe.",
    },
    facts: {
      de: ["Besitzt die Tuchhallen (Sukiennice).", "Heimat der Marienkirche.", "Zentrum des Krakauer Lebens.", "UNESCO-Welterbe."],
      hu: ["Itt található a Posztócsarnok (Sukiennice).", "Itt található a Mária-templom.", "A krakkói élet központja.", "UNESCO világörökség."],
      ro: ["Găzduiește Halele de Postăvărie (Sukiennice).", "Patria Bisericii Sfânta Maria.", "Centrul vieții din Cracovia.", "Patrimoniu UNESCO."],
      en: ["Home to the Cloth Hall (Sukiennice).", "Home to St. Mary's Basilica.", "Center of Krakow life.", "UNESCO World Heritage site."],
    },
    image: "/geo-images/poland/rynek.webp",
  },
  {
    id: "biebrza",
    type: "landmark",
    parent: "PL-PD",
    coords: [22.6000, 53.4000],
    name: { de: "Biebrza-Nationalpark", hu: "Biebrza Nemzeti Park", ro: "Parcul Național Biebrza", en: "Biebrza National Park" },
    description: {
      de: "Der Biebrza-Nationalpark ist das größte Schutzgebiet Polens, bekannt für seine ausgedehnten Sümpfe und Vogelwelt.",
      hu: "A Biebrza Nemzeti Park Lengyelország legnagyobb védett területe, kiterjedt mocsarairól és madárvilágáról ismert.",
      ro: "Parcul Național Biebrza este cea mai mare zonă protejată din Polonia, cunoscută pentru mlaștinile sale întinse și viața păsărilor.",
      en: "Biebrza National Park is the largest protected area in Poland, known for its vast marshes and birdlife.",
    },
    facts: {
      de: ["Größter Nationalpark Polens.", "Wichtiges Refugium für Elche.", "Paradies für Vogelbeobachter.", "Besitzt unberührte Flusslandschaften."],
      hu: ["Lengyelország legnagyobb nemzeti parkja.", "Fontos menedékhely a jávorszarvasoknak.", "A madármegfigyelők paradicsoma.", "Érintetlen folyóparti tájakkal rendelkezik."],
      ro: ["Cel mai mare parc național din Polonia.", "Refugiu important pentru elani.", "Paradis pentru observatorii de păsări.", "Deține peisaje fluviale virgine."],
      en: ["Largest national park in Poland.", "Important refuge for elks.", "Paradise for birdwatchers.", "Has untouched river landscapes."],
    },
    image: "/geo-images/poland/biebrza.webp",
  },
  {
    id: "ojcow",
    type: "landmark",
    parent: "PL-MA",
    coords: [19.8333, 50.2167],
    name: { de: "Ojców-Nationalpark", hu: "Ojcówi Nemzeti Park", ro: "Parcul Național Ojców", en: "Ojców National Park" },
    description: {
      de: "Der Ojców-Nationalpark ist der kleinste Nationalpark Polens, bekannt für seine Kalksteinfelsen und Höhlen.",
      hu: "Az Ojcówi Nemzeti Park Lengyelország legkisebb nemzeti parkja, mészkőszikláiról és barlangjairól ismert.",
      ro: "Parcul Național Ojców este cel mai mic parc național din Polonia, cunoscut pentru stâncile sale de calcar și peșteri.",
      en: "Ojców National Park is the smallest national park in Poland, known for its limestone rocks and caves.",
    },
    facts: {
      de: ["Bekannt für die 'Herkuleskeule'.", "Besitzt das Schloss Pieskowa Skała.", "Reich an Fledermausarten.", "Wunderschöne Schluchten."],
      hu: ["Híres a 'Herkules-buzogány' szikláról.", "Itt található a Pieskowa Skała vár.", "Gazdag denevérfajokban.", "Gyönyörű szurdokokkal rendelkezik."],
      ro: ["Cunoscut pentru stânca 'Măciuca lui Hercule'.", "Găzduiește castelul Pieskowa Skała.", "Bogat în specii de lilieci.", "Chei frumoase."],
      en: ["Known for the 'Hercules' Club' rock.", "Home to Pieskowa Skała Castle.", "Rich in bat species.", "Beautiful gorges."],
    },
    image: "/geo-images/poland/ojcow.webp",
  },
  {
    id: "wieliczka",
    type: "landmark",
    parent: "PL-MA",
    coords: [20.0647, 49.9831],
    name: { de: "Salzbergwerk Wieliczka", hu: "Wieliczkai sóbánya", ro: "Salina Wieliczka", en: "Wieliczka Salt Mine" },
    description: {
      de: "Das Salzbergwerk Wieliczka ist eines der ältesten der Welt und beherbergt eine unterirdische Kathedrale.",
      hu: "A wieliczkai sóbánya a világ egyik legrégebbi sóbányája, egy föld alatti katedrálisnak ad otthont.",
      ro: "Salina Wieliczka este una dintre cele mai vechi din lume și găzduiește o catedrală subterană.",
      en: "The Wieliczka Salt Mine is one of the world's oldest salt mines and houses an underground cathedral.",
    },
    facts: {
      de: ["UNESCO-Welterbe seit 1978.", "Besitzt Kapellen aus Salz.", "Reicht bis in 327 Meter Tiefe.", "Über 1 Million Besucher jährlich."],
      hu: ["1978 óta UNESCO világörökség.", "Sóból faragott kápolnákkal rendelkezik.", "327 méter mélyre nyúlik le.", "Évente több mint 1 millió látogató."],
      ro: ["Patrimoniu UNESCO din 1978.", "Deține capele sculptate în sare.", "Ajunge până la 327 de metri adâncime.", "Peste 1 milion de vizitatori anual."],
      en: ["UNESCO World Heritage site since 1978.", "Has chapels carved out of salt.", "Reaches a depth of 327 meters.", "Over 1 million visitors annually."],
    },
    image: "/geo-images/poland/wieliczka.webp",
  },
  {
    id: "auschwitz",
    type: "landmark",
    parent: "PL-MA",
    coords: [19.2098, 50.0274],
    name: { de: "Auschwitz-Birkenau", hu: "Auschwitz-Birkenau", ro: "Auschwitz-Birkenau", en: "Auschwitz-Birkenau" },
    description: {
      de: "Auschwitz-Birkenau war das größte deutsche Vernichtungslager während des Zweiten Weltkriegs und ist heute eine Gedenkstätte.",
      hu: "Auschwitz-Birkenau volt a legnagyobb német megsemmisítő tábor a második világháború alatt, ma emlékhely.",
      ro: "Auschwitz-Birkenau a fost cel mai mare lagăr de exterminare german în timpul celui de-al Doilea Război Mondial și este astăzi un memorial.",
      en: "Auschwitz-Birkenau was the largest German extermination camp during World War II and is now a memorial site.",
    },
    facts: {
      de: ["Symbol für den Holocaust.", "UNESCO-Welterbe.", "Besteht aus Auschwitz I und II.", "Ort des Gedenkens und der Mahnung."],
      hu: ["A holokauszt szimbóluma.", "UNESCO világörökség.", "Auschwitz I. és II. táborokból áll.", "Az emlékezés és a figyelmeztetés helyszíne."],
      ro: ["Simbol al Holocaustului.", "Patrimoniu UNESCO.", "Format din Auschwitz I și II.", "Loc de comemorare și avertizare."],
      en: ["Symbol of the Holocaust.", "UNESCO World Heritage site.", "Consists of Auschwitz I and II.", "Site of remembrance and warning."],
    },
    image: "/geo-images/poland/auschwitz.webp",
  },
  {
    id: "tatra",
    type: "landmark",
    parent: "PL-MA",
    coords: [19.9495, 49.2992],
    name: { de: "Tatra-Gebirge", hu: "Tátra", ro: "Munții Tatra", en: "Tatra Mountains" },
    description: {
      de: "Die Tatra ist das höchste Gebirge Polens und bietet spektakuläre alpine Landschaften.",
      hu: "A Tátra Lengyelország legmagasabb hegysége, látványos alpesi tájakat kínál.",
      ro: "Munții Tatra sunt cei mai înalți din Polonia și oferă peisaje alpine spectaculoase.",
      en: "The Tatras are the highest mountains in Poland and offer spectacular alpine landscapes.",
    },
    facts: {
      de: ["Höchster Gipfel ist der Rysy.", "Bekannt für Zakopane.", "Besitzt den Bergsee Meerauge.", "Nationalpark und Biosphärenreservat."],
      hu: ["Legmagasabb csúcsa a Tengerszem-csúcs (Rysy).", "Zakopanéról híres.", "Itt található a Morskie Oko tó.", "Nemzeti park és bioszféra-rezervátum."],
      ro: ["Cel mai înalt vârf este Rysy.", "Cunoscut pentru Zakopane.", "Deține lacul Morskie Oko.", "Parc național și rezervație a biosferei."],
      en: ["Highest peak is Rysy.", "Famous for Zakopane.", "Home to the Morskie Oko lake.", "National park and biosphere reserve."],
    },
    image: "/geo-images/poland/tatra.webp",
  },
  {
    id: "malbork",
    type: "landmark",
    parent: "PL-PM",
    coords: [19.0275, 54.0392],
    name: { de: "Marienburg", hu: "Malbork vára", ro: "Castelul Malbork", en: "Malbork Castle" },
    description: {
      de: "Die Marienburg ist die größte Backsteinburg der Welt und war Sitz des Deutschen Ordens.",
      hu: "A malborki vár a világ legnagyobb téglaépítésű vára, a Német Lovagrend székhelye volt.",
      ro: "Castelul Malbork este cel mai mare castel de cărămidă din lume și a fost sediul Ordinului Teuton.",
      en: "Malbork Castle is the largest brick castle in the world and was the seat of the Teutonic Order.",
    },
    facts: {
      de: ["UNESCO-Welterbe.", "Meisterwerk der Backsteingotik.", "Am Fluss Nogat gelegen.", "Riesige Burganlage."],
      hu: ["UNESCO világörökség.", "A tégla-gótika remekműve.", "A Nogat folyó partján fekszik.", "Hatalmas várkomplexum."],
      ro: ["Patrimoniu UNESCO.", "Capodoperă a goticului din cărămidă.", "Situat pe râul Nogat.", "Complex uriaș de fortificații."],
      en: ["UNESCO World Heritage site.", "Masterpiece of brick Gothic.", "Located on the Nogat River.", "Huge castle complex."],
    },
    image: "/geo-images/poland/malbork.webp",
  },
  {
    id: "bialowieza",
    type: "landmark",
    parent: "PL-PD",
    coords: [23.8300, 52.7000],
    name: { de: "Białowieża-Urwald", hu: "Białowieża-erdő", ro: "Pădurea Białowieża", en: "Białowieża Forest" },
    description: {
      de: "Der Białowieża-Urwald ist einer der letzten und größten verbliebenen Teile des riesigen Urwaldes in Europa.",
      hu: "A Białowieża-erdő az egykori európai síkvidéki őserdő egyik utolsó és legnagyobb megmaradt darabja.",
      ro: "Pădurea Białowieża este una dintre ultimele și cele mai mari părți rămase din uriașa pădure virgină din Europa.",
      en: "Białowieża Forest is one of the last and largest remaining parts of the immense primeval forest in Europe.",
    },
    facts: {
      de: ["Heimat des europäischen Wisents.", "UNESCO-Welterbe.", "Grenzübergreifend mit Belarus.", "Sehr hohe Artenvielfalt."],
      hu: ["Az európai bölény hazája.", "UNESCO világörökség.", "Átnyúlik Fehéroroszországba.", "Nagyon magas biodiverzitás."],
      ro: ["Patria zimbrului european.", "Patrimoniu UNESCO.", "Transfrontalier cu Belarus.", "Biodiversitate foarte ridicată."],
      en: ["Home to the European bison.", "UNESCO World Heritage site.", "Cross-border with Belarus.", "Very high biodiversity."],
    },
    image: "/geo-images/poland/bialowieza.webp",
  },
  {
    id: "mazury",
    type: "landmark",
    parent: "PL-WN",
    coords: [21.5000, 53.8000],
    name: { de: "Masurische Seenplatte", hu: "Mazuri-tóhátság", ro: "Districtul Lacurilor Mazuriene", en: "Masurian Lake District" },
    description: {
      de: "Die Masurische Seenplatte umfasst über 2.000 Seen und ist ein beliebtes Ziel für Wassersportler.",
      hu: "A Mazuri-tóhátság több mint 2000 tavat foglal magában, a vízi sportok kedvelőinek népszerű célpontja.",
      ro: "Districtul Lacurilor Mazuriene cuprinde peste 2.000 de lacuri și este o destinație populară pentru sporturi nautice.",
      en: "The Masurian Lake District contains over 2,000 lakes and is a popular destination for water sports.",
    },
    facts: {
      de: ["Land der tausend Seen.", "Größter See ist der Spirdingsee.", "Ideal zum Segeln und Kajakfahren.", "Reich an Störchen."],
      hu: ["Az ezer tó vidéke.", "Legnagyobb tava a Śniardwy-tó.", "Ideális vitorlázáshoz és kajakozáshoz.", "Gazdag gólyákban."],
      ro: ["Ținutul celor o mie de lacuri.", "Cel mai mare lac este Śniardwy.", "Ideal pentru navigație și caiac.", "Bogat în berze."],
      en: ["Land of a thousand lakes.", "Largest lake is Śniardwy.", "Ideal for sailing and kayaking.", "Rich in storks."],
    },
    image: "/geo-images/poland/mazury.webp",
    },
    {
    id: "stare-miasto-warszawa",
    type: "landmark",
    parent: "warsaw",
    coords: [21.0122, 52.2477],
    name: { de: "Warschauer Altstadt", hu: "Varsói óváros", ro: "Orașul Vechi Varșovia", en: "Warsaw Old Town" },
    description: {
      de: "Die Warschauer Altstadt ist das historische Herz der Stadt und wurde nach dem Krieg originalgetreu wiederaufgebaut.",
      hu: "A varsói óváros a város történelmi szíve, amelyet a háború után hűen újjáépítettek az eredeti tervek alapján.",
      ro: "Orașul Vechi din Varșovia este inima istorică a orașului, reconstruit fidel după al Doilea Război Mondial.",
      en: "The Warsaw Old Town is the historic heart of the city, faithfully rebuilt after its destruction in World War II.",
    },
    facts: {
      de: ["Ist ein UNESCO-Weltkulturerbe.", "Besitzt das prächtige Königsschloss."],
      hu: ["Az UNESCO világörökség része.", "Itt található a pompás Királyi Vár."],
      ro: ["Este sit al patrimoniului mondial UNESCO.", "Găzduiește magnificul Castel Regal."],
      en: ["It is a UNESCO World Heritage site.", "Home to the magnificent Royal Castle."],
    },
    image: "/geo-images/poland/stare-miasto-warszawa.webp",
    },
    {
    id: "stare-miasto-torun",
    type: "landmark",
    parent: "torun",
    coords: [18.6044, 53.0102],
    name: { de: "Thorner Altstadt", hu: "Toruńi óváros", ro: "Orașul Vechi Toruń", en: "Toruń Old Town" },
    description: {
      de: "Ein hervorragendes Beispiel für eine mittelalterliche Hansestadt mit gut erhaltenen gotischen Backsteinbauten.",
      hu: "A középkori Hanza-város kiemelkedő példája, amely híres jól megőrzött gótikus téglaépítészetéről.",
      ro: "Un exemplu remarcabil de oraș hanseatic medieval, cu o arhitectură gotică din cărămidă bine conservată.",
      en: "An outstanding example of a medieval Hanseatic town with well-preserved Gothic brick architecture throughout.",
    },
    facts: {
      de: ["Geburtsort von Nikolaus Kopernikus.", "Bekannt für seine köstlichen Lebkuchen."],
      hu: ["Nikolausz Kopernikusz szülőhelye.", "Híres a finom toruńi mézeskalácsról."],
      ro: ["Locul de naștere al lui Nicolaus Copernic.", "Faimos pentru delicioasa turtă dulce."],
      en: ["Birthplace of Nikolaus Copernicus.", "Famous for its delicious gingerbread."],
    },
    image: "/geo-images/poland/stare-miasto-torun.webp",
    },
    {
    id: "zamosc-city",
    type: "city",
    parent: "PL-LU",
    coords: [23.2525, 50.7171],
    name: { de: "Zamość", hu: "Zamość", ro: "Zamość", en: "Zamość" },
    description: {
      de: "Zamość ist eine einzigartige Renaissancestadt im Osten Polens, die nach dem Modell der idealen Stadt entworfen wurde.",
      hu: "Zamość egy egyedülálló reneszánsz város Kelet-Lengyelországban, amelyet az ideális város modellje alapján terveztek.",
      ro: "Zamość este un oraș renascentist unic din estul Poloniei, proiectat conform modelului orașului ideal.",
      en: "Zamość is a unique Renaissance town in eastern Poland, designed according to the model of an ideal city.",
    },
    facts: {
      de: ["Wird oft als Perle der Renaissance bezeichnet.", "Wurde von dem Architekten Bernardo Morando geplant."],
      hu: ["Gyakran a reneszánsz gyöngyszemének nevezik.", "Bernardo Morando olasz építész tervezte."],
      ro: ["Numit adesea Perla Renașterii.", "Proiectat de arhitectul italian Bernardo Morando."],
      en: ["Often called the Pearl of the Renaissance.", "Planned by the Italian architect Bernardo Morando."],
    },
    image: "/geo-images/poland/zamosc-city.webp",
    },
    {
    id: "stare-miasto-zamosc",
    type: "landmark",
    parent: "zamosc-city",
    coords: [23.251, 50.7165],
    name: { de: "Altstadt von Zamość", hu: "Zamośći óváros", ro: "Orașul Vechi Zamość", en: "Zamość Old Town" },
    description: {
      de: "Die Altstadt von Zamość besticht durch ihre farbenfrohen armenischen Mietshäuser und den prächtigen Marktplatz.",
      hu: "Zamość óvárosa lenyűgöző a színes örmény bérházaival és a gyönyörű, tágas főterével.",
      ro: "Orașul Vechi din Zamość impresionează prin casele armenești colorate și piața centrală magnifică.",
      en: "The Old Town of Zamość impresses with its colorful Armenian tenement houses and the magnificent market square.",
    },
    facts: {
      de: ["Ist ein UNESCO-Weltkulturerbe.", "Besitzt ein prächtiges Rathaus mit Freitreppe."],
      hu: ["Az UNESCO világörökség része.", "Díszes városházája híres díszlépcsőjéről."],
      ro: ["Este sit al patrimoniului mondial UNESCO.", "Are o primărie magnifică cu o scară monumentală."],
      en: ["It is a UNESCO World Heritage site.", "Features a magnificent town hall with a grand staircase."],
    },
    image: "/geo-images/poland/stare-miasto-zamosc.webp",
    },
    {
    id: "kazimierz-krakow",
    type: "landmark",
    parent: "krakow",
    coords: [19.9463, 50.0519],
    name: { de: "Stadtteil Kazimierz", hu: "Kazimierz negyed", ro: "Cartierul Kazimierz", en: "Kazimierz District" },
    description: {
      de: "Das historische jüdische Viertel von Krakau ist heute ein lebendiges Zentrum für Kultur, Art und Nachtleben.",
      hu: "Krakkó történelmi zsidó negyede ma a kultúra, a művészet és a pezsgő éjszakai élet központja.",
      ro: "Cartierul evreiesc istoric din Cracovia este acum un centru vibrant pentru cultură, artă și viață de noapte.",
      en: "The historic Jewish quarter of Krakow is now a vibrant center for culture, art, and exciting nightlife.",
    },
    facts: {
      de: ["Beherbergt viele historische Synagogen.", "Bekannt für das jährliche Jüdische Kulturfestival."],
      hu: ["Számos történelmi zsinagógának ad otthont.", "Híres az évente megrendezett Zsidó Kulturális Fesztiválról."],
      ro: ["Găzduiește multe sinagogi istorice.", "Faimos pentru Festivalul anual de Cultură Evreiască."],
      en: ["Home to many historical synagogues.", "Famous for the annual Jewish Culture Festival."],
    },
    image: "/geo-images/poland/kazimierz-krakow.webp",
    },
    {
    id: "jasna-gora",
    type: "landmark",
    parent: "czestochowa",
    coords: [19.0972, 50.8122],
    name: { de: "Kloster Jasna Góra", hu: "Jasna Góra-i kolostor", ro: "Mănăstirea Jasna Góra", en: "Jasna Góra Monastery" },
    description: {
      de: "Ein bedeutendes Paulinerkloster und der wichtigste Wallfahrtsort für Katholiken im ganzen Land.",
      hu: "Jelentős pálos kolostor és a legfontosabb zarándokhely a katolikusok számára az egész országban.",
      ro: "O mănăstire paulină importantă și cel mai important loc de pelerinaj pentru catolici din întreaga țară.",
      en: "A significant Pauline monastery and the most important pilgrimage site for Catholics in the entire country.",
    },
    facts: {
      de: ["Bewahrt das Ikone der Schwarzen Madonna.", "Widerstand erfolgreich der Belagerung im Jahr 1655."],
      hu: ["Itt őrzik a Fekete Madonna kegyképét.", "Sikeresen ellenállt az 1655-ös svéd ostromnak."],
      ro: ["Păstrează icoana Madonei Negre.", "A rezistat cu succes asediului din anul 1655."],
      en: ["Houses the icon of the Black Madonna.", "Successfully resisted a major siege in the year 1655."],
    },
    image: "/geo-images/poland/jasna-gora.webp",
    },
    {
    id: "stare-miasto-gdansk",
    type: "landmark",
    parent: "gdansk",
    coords: [18.6493, 54.3485],
    name: { de: "Danziger Rechtstadt", hu: "Gdański óváros", ro: "Orașul Vechi Gdańsk", en: "Gdansk Main Town" },
    description: {
      de: "Die Rechtstadt von Danzig besticht durch ihre prächtigen Bürgerhäuser, den Neptunbrunnen und die Marienkirche.",
      hu: "Gdańsk óvárosa lenyűgöző polgárházaival, a Neptun-kúttal és a hatalmas Mária-templommal.",
      ro: "Orașul principal din Gdańsk impresionează prin casele sale burgheze, Fântâna lui Neptun și Biserica Sfânta Maria.",
      en: "The Main Town of Gdansk impresses with its grand tenement houses, Neptune's Fountain, and St. Mary's Church.",
    },
    facts: {
      de: ["Die Marienkirche ist eine der größten Backsteinkirchen.", "Der Artushof war ein Treffpunkt reicher Kaufleute."],
      hu: [["A Mária-templom a világ egyik legnagyobb téglaépülete."], "Az Artus-udvar a gazdag kereskedők találkozóhelye volt."],
      ro: ["Biserica Sfânta Maria este una dintre cele mai mari din cărămidă.", "Curtea lui Artus era locul de întâlnire al negustorilor."],
      en: ["St. Mary's is one of the largest brick churches.", "Artus Court was a meeting place for wealthy merchants."],
    },
    image: "/geo-images/poland/stare-miasto-gdansk.webp",
    },
    {
    id: "gniezno",
    type: "city",
    parent: "PL-WP",
    coords: [17.5925, 52.5361],
    name: { de: "Gnesen", hu: "Gniezno", ro: "Gniezno", en: "Gniezno" },
    description: {
      de: "Gnesen gilt als die erste Hauptstadt Polens und ist ein wichtiger Ort für die Entstehung des polnischen Staates.",
      hu: "Gnieznót Lengyelország első fővárosának tekintik, és kulcsfontosságú helyszín a lengyel állam eredete szempontjából.",
      ro: "Gniezno este considerat prima capitală a Poloniei și este un loc cheie pentru originea statului polonez.",
      en: "Gniezno is considered the first capital of Poland and is a key site for the origin of the Polish state.",
    },
    facts: {
      de: ["Beherbergt die Kathedrale mit den Gnesener Türen.", "Hier fand im Jahr 1000 der Akt von Gnesen statt."],
      hu: ["Itt található a székesegyház a híres bronzkapuval.", "1000-ben itt került sor a gnieznói kongresszusra."],
      ro: ["Găzduiește Catedrala cu Porțile din Gniezno.", "Congresul de la Gniezno a avut loc aici în anul 1000."],
      en: ["Home to the Cathedral with the Gniezno Doors.", "The Congress of Gniezno took place here in the year 1000."],
    },
    image: "/geo-images/poland/gniezno.webp",
    },
    {
    id: "zamek-ksiaz",
    type: "landmark",
    parent: "PL-DS",
    coords: [16.2911, 50.8422],
    name: { de: "Schloss Fürstenstein", hu: "Książ vára", ro: "Castelul Książ", en: "Książ Castle" },
    description: {
      de: "Das drittgrößte Schloss Polens liegt malerisch auf einem Felsen und bietet eine faszinierende Geschichte.",
      hu: "Lengyelország harmadik legnagyobb vára festői sziklán fekszik, és lenyűgöző történelmet kínál.",
      ro: "Al treilea castel ca mărime din Polonia este situat pitoresc pe o stâncă și oferă o istorie fascinantă.",
      en: "The third largest castle in Poland is picturesquely located on a rock and offers a fascinating history.",
    },
    facts: {
      de: ["Besitzt ein ausgedehntes System von Tunneln.", "War Teil des geheimnisvollen Projekts Riese."],
      hu: ["Kiterjedt föld alatti alagútrendszerrel rendelkezik.", "A titokzatos Projekt Riese része volt a háború alatt."],
      ro: ["Are un sistem extins de tuneluri subterane.", "A făcut parte din misteriosul Proiect Riese în timpul războiului."],
      en: ["Features an extensive system of underground tunnels.", "Was part of the mysterious Project Riese during the war."],
    },
    image: "/geo-images/poland/zamek-ksiaz.webp",
    },
    {
    id: "zamek-lancut",
    type: "landmark",
    parent: "PL-PK",
    coords: [22.2336, 50.0683],
    name: { de: "Schloss Łańcut", hu: "Łańcuti vár", ro: "Castelul Łańcut", en: "Łańcut Castle" },
    description: {
      de: "Eines der schönsten aristokratischen Residenzen in Polen, bekannt für seine prächtigen Innenräume und den Park.",
      hu: "Lengyelország egyik legszebb nemesi rezidenciája, amely pompás belső tereiről és parkjáról híres.",
      ro: "Una dintre cele mai frumoase reședințe aristocratice din Polonia, cunoscută pentru interioarele superbe.",
      en: "One of the most beautiful aristocratic residences in Poland, known for its grand interiors and parkland.",
    },
    facts: {
      de: ["Beherbergt eine beeindruckende Kutschenausstellung.", "Der Schlosspark umfasst einen wunderschönen Rosengarten."],
      hu: ["Lenyűgöző lovaskocsi-kiállításnak ad otthont.", "A várparkban gyönyörű rózsakert található."],
      ro: ["Găzduiește o colecție impresionantă de trăsuri.", "Parcul castelului are o grădină de trandafiri superbă."],
      en: ["Houses an impressive collection of horse-drawn carriages.", "The castle park features a beautiful rose garden."],
    },
    image: "/geo-images/poland/zamek-lancut.webp",
    },
    {
    id: "karkonosze-np",
    type: "landmark",
    parent: "PL-DS",
    coords: [15.65, 50.75],
    name: { de: "Nationalpark Riesengebirge", hu: "Karkonosze Nemzeti Park", ro: "Parcul Național Karkonosze", en: "Karkonosze NP" },
    description: {
      de: "Ein Gebirgspark an der Grenze zu Tschechien, bekannt für seine markanten Felsformationen und Wasserfälle.",
      hu: "Hegyi nemzeti park a cseh határon, amely jellegzetes sziklaalakzatairól és vízeséseiről híres.",
      ro: "Un parc montan la granița cu Cehia, renumit pentru formațiunile stâncoase și cascadele frumoase.",
      en: "A mountain park on the Czech border, famous for its striking rock formations and beautiful waterfalls.",
    },
    facts: {
      de: ["Die Schneekoppe ist der höchste Gipfel.", "Heimat des sagenumwobenen Berggeists Rübezahl."],
      hu: ["A hegység legmagasabb csúcsa a Śnieżka.", "A legendás hegyi szellem, Rübezahl hazája."],
      ro: ["Vârful Śnieżka este cel mai înalt din masiv.", "Patria legendarului spirit al munților, Rübezahl."],
      en: ["Śnieżka is the highest peak in the range.", "Home to the legendary mountain spirit Rübezahl."],
    },
    image: "/geo-images/poland/karkonosze-np.webp",
    },
    {
    id: "bieszczady-np",
    type: "landmark",
    parent: "PL-PK",
    coords: [22.65, 49.15],
    name: { de: "Nationalpark Bieszczady", hu: "Bieszczady Nemzeti Park", ro: "Parcul Național Bieszczady", en: "Bieszczady NP" },
    description: {
      de: "Dieser Park im Südosten Polens bietet wilde Natur, endlose Bergwiesen und eine einzigartige Einsamkeit.",
      hu: "Ez a délkelet-lengyelországi park vad természetet, végtelen hegyi réteket és egyedülálló nyugalmat kínál.",
      ro: "Acest parc din sud-estul Poloniei oferă natură sălbatică, pajiști montane nesfârșite și o liniște unică.",
      en: "This park in southeastern Poland offers wild nature, endless mountain meadows, and unique solitude.",
    },
    facts: {
      de: ["Bekannt für die charakteristischen Poloninas.", "Ein Rückzugsort für Braunbären und Wölfe."],
      hu: ["Híres a jellegzetes polonina hegyi rétekről.", "A barnamedvék és farkasok fontos menedékhelye."],
      ro: ["Faimos pentru pajiștile montane Polonina.", "Un sanctuar pentru urșii bruni și lupii sălbatici."],
      en: ["Famous for the characteristic Polonina meadows.", "A sanctuary for brown bears and wild wolves."],
    },
    image: "/geo-images/poland/bieszczady-np.webp",
    },
    {
    id: "morskie-oko",
    type: "landmark",
    parent: "PL-MA",
    coords: [20.08, 49.2],
    name: { de: "Meerauge", hu: "Morskie Oko", ro: "Morskie Oko", en: "Morskie Oko" },
    description: {
      de: "Der größte und bekannteste See in der Hohen Tatra, umgeben von majestätischen Gipfeln und steilen Felswänden.",
      hu: "A Magas-Tátra legnagyobb és leghíresebb tava, amelyet fenséges csúcsok és meredek sziklafalak vesznek körül.",
      ro: "Cel mai mare și mai faimos lac din Tatra Înaltă, înconjurat de vârfuri maiestuoase și pereți de stâncă.",
      en: "The largest and most famous lake in the High Tatras, surrounded by majestic peaks and steep rock walls.",
    },
    facts: {
      de: ["Bedeutet übersetzt 'Auge des Meeres'.", "Ein beliebtes Ziel für Wanderer in der Tatra."],
      hu: ["A neve magyarul 'Tengerszemet' jelent.", "A tátrai túrázók egyik legnépszerűbb célpontja."],
      ro: ["Numele se traduce prin 'Ochiul Mării'.", "O destinație foarte populară pentru drumeții din Tatra."],
      en: ["The name translates to 'Eye of the Sea'.", "A very popular destination for hikers in the Tatras."],
    },
    image: "/geo-images/poland/morskie-oko.webp",
    },
    {
    id: "slowinski-np",
    type: "landmark",
    parent: "PL-PM",
    coords: [17.38, 54.71],
    name: { de: "Slowinzischer Nationalpark", hu: "Słowiński Nemzeti Park", ro: "Parcul Național Słowiński", en: "Słowiński NP" },
    description: {
      de: "Bekannt für seine beeindruckenden Wanderdünen an der Ostseeküste, die die umliegenden Wälder langsam begraben.",
      hu: "A balti-tengeri partvidék lenyűgöző vándorló dűnéiről ismert, amelyek lassan betemetik a környező erdőket.",
      ro: "Cunoscut pentru dunele sale mișcătoare impresionante de pe coasta Balticii, care îngroapă încet pădurile.",
      en: "Known for its impressive moving dunes on the Baltic coast, which slowly bury the surrounding forests.",
    },
    facts: {
      de: ["Die Dünen können bis zu 40 Meter hoch sein.", "Wurde von der UNESCO als Biosphärenreservat anerkannt."],
      hu: ["A dűnék akár 40 méter magasak is lehetnek.", "Az UNESCO bioszféra-rezervátumnak nyilvánította."],
      ro: ["Dunele pot atinge o înălțime de până la 40 de metri.", "Recunoscut de UNESCO ca rezervație a biosferei."],
      en: ["The dunes can reach up to 40 meters in height.", "Recognized by UNESCO as a biosphere reserve."],
    },
    image: "/geo-images/poland/slowinski-np.webp",
    },
    {
    id: "pieniny-np",
    type: "landmark",
    parent: "PL-MA",
    coords: [20.4, 49.43],
    name: { de: "Nationalpark Pieninen", hu: "Pieniny Nemzeti Park", ro: "Parcul Național Pieniny", en: "Pieniny NP" },
    description: {
      de: "Ein kleiner, aber malerischer Nationalpark, berühmt für seine spektakulären Aussichten und den Fluss Dunajec.",
      hu: "Kicsi, de festői nemzeti park, amely látványos kilátásairól és a Dunajec-áttörésről híres.",
      ro: "Un parc național mic, dar pitoresc, faimos pentru priveliștile spectaculoase și defileul Dunajec.",
      en: "A small but picturesque national park, famous for its spectacular views and the Dunajec River Gorge.",
    },
    facts: {
      de: ["Der Gipfel Trzy Korony bietet einen tollen Blick.", "Beherbergt viele seltene Pflanzen- und Schmetterlingsarten."],
      hu: ["A Három Korona-csúcsról lenyűgöző a kilátás.", "Számos ritka növény- és lepkefaj otthona."],
      ro: ["Vârful Trzy Korony oferă o vedere uimitoare.", "Găzduiește multe specii rare de plante și fluturi."],
      en: ["The Trzy Korony peak offers a stunning view.", "Home to many rare plant and butterfly species."],
    },
    image: "/geo-images/poland/pieniny-np.webp",
    },
    {
    id: "dunajec-gorge",
    type: "landmark",
    parent: "PL-MA",
    coords: [20.41, 49.41],
    name: { de: "Dunajec-Durchbruch", hu: "Dunajeci-áttörés", ro: "Defileul Dunajec", en: "Dunajec River Gorge" },
    description: {
      de: "Eines der schönsten Flusstäler in Europa, wo der Dunajec in engen Kurven durch das Pieninen-Gebirge fließt.",
      hu: "Európa egyik legszebb folyóvölgye, ahol a Dunajec szűk kanyarokban folyik át a Pieniny-hegységen.",
      ro: "Una dintre cele mai frumoase văi fluviale din Europa, unde Dunărea curge în curbe strânse prin Pieniny.",
      en: "One of the most beautiful river valleys in Europe, where the Dunajec flows in tight bends through the Pieniny.",
    },
    facts: {
      de: ["Berühmt für Floßfahrten mit traditionellen Flößern.", "Bildet die natürliche Grenze zwischen Polen und der Slowakei."],
      hu: ["Híres a hagyományos tutajozásról a folyón.", "Természetes határt képez Lengyelország és Szlovákia között."],
      ro: ["Faimos pentru plimbările cu pluta tradițională.", "Formează granița naturală între Polonia și Slovacia."],
      en: ["Famous for rafting trips with traditional rafters.", "Forms the natural border between Poland and Slovakia."],
    },
    image: "/geo-images/poland/dunajec-gorge.webp",
    },
    {
    id: "hel-peninsula",
    type: "landmark",
    parent: "PL-PM",
    coords: [18.8, 54.65],
    name: { de: "Halbinsel Hel", hu: "Hel-félsziget", ro: "Peninsula Hel", en: "Hel Peninsula" },
    description: {
      de: "Eine schmale, 35 km lange Landzunge in der Ostsee, bekannt für ihre breiten Sandstrände und starken Winde.",
      hu: "Egy keskeny, 35 km hosszú félsziget a Balti-tengerben, amely homokos strandjairól és erős szeleiről ismert.",
      ro: "O fâșie îngustă de pământ de 35 km în Marea Baltică, cunoscută pentru plajele sale largi de nisip.",
      en: "A narrow, 35 km long spit in the Baltic Sea, known for its wide sandy beaches and strong winds for surfing.",
    },
    facts: {
      de: ["Ein Paradies für Wind- und Kitesurfer.", "Am Ende der Halbinsel liegt das Städtchen Hel."],
      hu: ["A szörfösök és kiteszörfösök igazi paradicsoma.", "A félsziget végén található Hel városa."],
      ro: ["Un paradis pentru windsurferi și kitesurferi.", "Orașul Hel se află chiar în vârful peninsulei."],
      en: ["A paradise for wind and kite surfers alike.", "The small town of Hel is located at the very tip."],
    },
    image: "/geo-images/poland/hel-peninsula.webp",
    },
    {
    id: "bialka-tatrzanska",
    type: "landmark",
    parent: "PL-MA",
    coords: [20.1, 49.39],
    name: { de: "Białka Tatrzańska", hu: "Białka Tatrzańska", ro: "Białka Tatrzańska", en: "Białka Tatrzańska" },
    description: {
      de: "Ein beliebtes Bergdorf, das für seine hervorragenden Skigebiete und modernen Thermalbäder bekannt ist.",
      hu: "Népszerű hegyi falu, amely kiváló sípályáiról és modern termálfürdőiről ismert.",
      ro: "Un sat montan popular, cunoscut pentru stațiunile de schi excelente și băile termale moderne.",
      en: "A popular mountain village known for its excellent ski resorts and modern thermal bath complexes.",
    },
    facts: {
      de: ["Besitzt das große Skigebiet Kotelnica.", "Berühmt für die Terma Bania Badelandschaft."],
      hu: ["Itt található a nagy Kotelnica síközpont.", "Híres a Terma Bania termálfürdő-komplexumról."],
      ro: ["Găzduiește marea stațiune de schi Kotelnica.", "Faimos pentru complexul termal Terma Bania."],
      en: ["Home to the large Kotelnica ski resort.", "Famous for the Terma Bania thermal bath complex."],
    },
    image: "/geo-images/poland/bialka-tatrzanska.webp",
    },
    {
    id: "muzeum-powstania-warszawskiego",
    type: "landmark",
    parent: "warsaw",
    coords: [20.9803, 52.2323],
    name: { de: "Museum des Warschauer Aufstands", hu: "Varsói Felkelés Múzeuma", ro: "Muzeul Insurecției din Varșovia", en: "Warsaw Uprising Museum" },
    description: {
      de: "Ein interaktives Museum, das den heldenhaften Kampf der Warschauer Bürger im Jahr 1944 dokumentiert.",
      hu: "Interaktív múzeum, amely a varsói polgárok 1944-es hősies küzdelmét mutatja be.",
      ro: "Un muzeu interactiv care documentează lupta eroică a cetățenilor Varșoviei în anul 1944.",
      en: "An interactive museum documenting the heroic struggle of Warsaw's citizens in the year 1944.",
    },
    facts: {
      de: ["Nutzt moderne multimediale Effekte.", "Eines der meistbesuchten Museen in Warschau."],
      hu: ["Modern multimédiás effekteket használ.", "Varsó egyik leglátogatottabb múzeuma."],
      ro: ["Folosește efecte multimedia moderne.", "Unul dintre cele mai vizitate muzee din Varșovia."],
      en: ["Uses modern multimedia effects throughout.", "One of the most visited museums in Warsaw."],
    },
    image: "/geo-images/poland/muzeum-powstania-warszawskiego.webp",
    },
    {
    id: "centrum-nauki-kopernik",
    type: "landmark",
    parent: "warsaw",
    coords: [21.0283, 52.2419],
    name: { de: "Kopernikus-Wissenschaftszentrum", hu: "Kopernikusz Tudományos Központ", ro: "Centrul de Știință Copernic", en: "Copernicus Science Center" },
    description: {
      de: "Ein modernes Wissenschaftsmuseum an der Weichsel, in dem Besucher Experimente selbst durchführen können.",
      hu: "Modern tudományos központ a Visztula partján, ahol a látogatók maguk végezhetnek kísérleteket.",
      ro: "Un muzeu modern de știință pe malul Vistulei, unde vizitatorii pot face singuri experimente.",
      en: "A modern science museum on the Vistula, where visitors can perform experiments by themselves.",
    },
    facts: {
      de: ["Beherbergt ein modernes Planetarium.", "Fördert das Interesse an Naturwissenschaften."],
      hu: ["Itt található egy modern planetárium.", "Népszerűsíti a természettudományok iránti érdeklődést."],
      ro: ["Găzduiește un planetariu de ultimă generație.", "Promovează interesul pentru științele naturii."],
      en: ["Houses a state-of-the-art planetarium.", "Promotes interest in natural sciences and tech."],
    },
    image: "/geo-images/poland/centrum-nauki-kopernik.webp",
    },
    {
    id: "warsaw-zoo",
    type: "landmark",
    parent: "warsaw",
    coords: [21.02, 52.26],
    name: { de: "Warschauer Zoo", hu: "Varsói Állatkert", ro: "Grădina Zoologică Varșovia", en: "Warsaw Zoo" },
    description: {
      de: "Ein großer zoologischer Garten, der eine wichtige Rolle bei der Rettung von Verfolgten im Krieg spielte.",
      hu: "Nagy állatkert, amely jelentős szerepet játszott az üldözöttek mentésében a második világháború alatt.",
      ro: "O grădină zoologică mare care a jucat un rol semnificativ în salvarea celor persecutați în timpul războiului.",
      en: "A large zoological garden that played a significant role in saving the persecuted during the war.",
    },
    facts: {
      de: ["Beheimatet über 500 Tierarten.", "Die Villa der Zoodirektoren ist ein Gedenkort."],
      hu: ["Több mint 500 állatfajnak ad otthont.", "Az igazgatói villa ma fontos emlékhely."],
      ro: ["Găzduiește peste 500 de specii de animale.", "Vila directorilor grădinii este acum un memorial."],
      en: ["Home to more than 500 species of animals.", "The zoo director's villa is now a memorial site."],
    },
    image: "/geo-images/poland/warsaw-zoo.webp",
    },
    {
    id: "rynek-wroclaw",
    type: "landmark",
    parent: "wroclaw",
    coords: [17.0322, 51.1095],
    name: { de: "Breslauer Ring", hu: "Wrocławi piactér", ro: "Piața Centrală din Wrocław", en: "Wroclaw Market Square" },
    description: {
      de: "Einer der größten mittelalterlichen Marktplätze in Europa mit einem prächtigen gotischen Rathaus im Zentrum.",
      hu: "Európa egyik legnagyobb középkori piactere, központjában a gyönyörű gótikus városházával.",
      ro: "Una dintre cele mai mari piețe medievale din Europa, cu o primărie gotică magnifică în centru.",
      en: "One of the largest medieval market squares in Europe, with a magnificent Gothic town hall at its center.",
    },
    facts: {
      de: ["Bekannt für die bunten Bürgerhäuser.", "Besitzt den ältesten Gastkeller der Stadt."],
      hu: ["Színes polgárházairól híres.", "Itt található a város legrégebbi étterme."],
      ro: ["Cunoscută pentru casele burgheze colorate.", "Găzduiește cea mai veche berărie din oraș."],
      en: ["Known for its colorful tenement houses.", "Home to the oldest restaurant cellar in town."],
    },
    image: "/geo-images/poland/rynek-wroclaw.webp",
    },
    {
    id: "ulica-piotrkowska",
    type: "landmark",
    parent: "lodz-city",
    coords: [19.456, 51.76],
    name: { de: "Piotrkowska-Straße", hu: "Piotrkowska utca", ro: "Strada Piotrkowska", en: "Piotrkowska Street" },
    description: {
      de: "Die längste Handelsstraße Polens ist die Lebensader von Lodz und gesäumt von prächtigen Villen und Palästen.",
      hu: "Lengyelország leghosszabb sétálóutcája Łódź lüktető szíve, amelyet pompás villák és paloták szegélyeznek.",
      ro: "Cea mai lungă stradă comercială din Polonia este inima orașului Łódź, mărginită de vile și palate.",
      en: "The longest commercial street in Poland is the lifeblood of Lodz, lined with grand villas and palaces.",
    },
    facts: {
      de: ["Über 4 Kilometer lang.", "Besitzt den Walk of Fame des polnischen Kinos."],
      hu: ["Több mint 4 kilométer hosszú.", "Itt található a lengyel mozi hírességeinek sétánya."],
      ro: ["Are peste 4 kilometri lungime.", "Găzduiește Aleea Celebrităților din cinematografia poloneză."],
      en: ["More than 4 kilometers in length.", "Features the Walk of Fame of Polish cinema."],
    },
    image: "/geo-images/poland/ulica-piotrkowska.webp",
    },
    {
    id: "stary-rynek-poznan",
    type: "landmark",
    parent: "poznan",
    coords: [16.9344, 52.4083],
    name: { de: "Alter Markt in Posen", hu: "Poznańi óvárosi piactér", ro: "Piața Veche din Poznań", en: "Poznań Old Market Square" },
    description: {
      de: "Ein wunderschöner Platz mit einem Renaissance-Rathaus, das für seine mechanischen Ziegen bekannt ist.",
      hu: "Gyönyörű tér egy reneszánsz városházával, amely a mindennap öklelőző mechanikus kecskebakjairól híres.",
      ro: "O piață frumoasă cu o primărie renascentistă, faimoasă pentru caprele mecanice care se lovesc cu capul.",
      en: "A beautiful square with a Renaissance town hall, famous for its mechanical goats that butt heads daily.",
    },
    facts: {
      de: ["Die Ziegen erscheinen jeden Mittag.", "Umgeben von schmalen, bunten Krämerhäusern."],
      hu: ["A kecskebakok minden délben megjelennek.", "Színes, keskeny kalmárházak veszik körül."],
      ro: ["Caprele apar în fiecare zi la prânz.", "Înconjurată de case de negustori înguste și colorate."],
      en: ["The goats appear every day at noon.", "Surrounded by narrow, colorful merchant houses."],
    },
    image: "/geo-images/poland/stary-rynek-poznan.webp",
    },
    {
    id: "energylandia",
    type: "landmark",
    parent: "PL-MA",
    coords: [19.4, 49.99],
    name: { de: "Energylandia", hu: "Energylandia", ro: "Energylandia", en: "Energylandia" },
    description: {
      de: "Der größte Freizeitpark Polens bietet zahlreiche Achterbahnen und Attraktionen für die ganze Familie.",
      hu: "Lengyelország legnagyobb vidámparkja, amely számos hullámvasutat és attrakciót kínál az egész családnak.",
      ro: "Cel mai mare parc de distracții din Polonia, oferind numeroase roller coastere și atracții pentru toată familia.",
      en: "The largest amusement park in Poland, offering numerous roller coasters and attractions for the whole family.",
    },
    facts: {
      de: ["Besitzt Hyperion, einen der höchsten Coaster.", "Verfügt über einen großen Wasserpark-Bereich."],
      hu: ["Itt található a Hyperion, az egyik legmagasabb hullámvasút.", "Hatalmas vízipark részleggel is rendelkezik."],
      ro: ["Găzduiește Hyperion, unul dintre cele mai înalte coastere.", "Dispune de o zonă mare de parc acvatic."],
      en: ["Home to Hyperion, one of Europe's tallest coasters.", "Features a very large water park area."],
    },
    image: "/geo-images/poland/energylandia.webp",
    },
    ];
    id: "pl-bydgoszcz",
    type: "city",
    parent: "PL-KP",
    coords: [18.0084, 53.1235],
    name: { de: "Bydgoszcz", hu: "Bydgoszcz", ro: "Bydgoszcz", en: "Bydgoszcz" },
    description: {
      de: "Bydgoszcz ist eine dynamische Stadt an der Brda, die oft als Venedig Polens bezeichnet wird. Sie besticht durch ihre wunderschöne Architektur am Flussufer. Die Stadt hat eine reiche industrielle Vergangenheit, die sich in modernen Kulturzentren widerspiegelt. Die Mühleninsel ist ein beliebtes Erholungsgebiet im Zentrum.",
      hu: "Bydgoszcz dinamikus város a Brda folyó partján, amelyet Lengyelország Velencéjének is neveznek. Lenyűgöző építészetével büszkélkedhet a folyó mentén. A város gazdag ipari múlttal rendelkezik, amely modern kulturális központokban él tovább. A Malom-sziget egy népszerű pihenőövezet a központban.",
      ro: "Bydgoszcz este un oraș dinamic pe râul Brda, numit adesea Veneția Poloniei. Se mândrește cu o arhitectură uimitoare de-a lungul malului râului. Orașul are un trecut industrial bogat, reflectat în centre culturale moderne. Insula Morilor este o zonă de recreere populară în centru.",
      en: "Bydgoszcz is a dynamic city on the Brda River, often called the Venice of Poland. It boasts stunning architecture along the riverbanks. The city has a rich industrial past, which is reflected in modern cultural centers. Mill Island is a popular recreation area in the center."
    },
    facts: {
      de: ["Bekannt als das polnische Venedig.", "Besitzt die Mühleninsel.", "Reich an Jugendstil.", "Wichtiger Binnenhafen.", "Heimat der Opera Nova.", "Bedeutendes Industriezentrum."],
      hu: ["A lengyel Velenceként ismert.", "Itt található a Malom-sziget.", "Gazdag szecessziós épületekben.", "Fontos belföldi kikötő.", "Az Opera Nova otthona.", "Jelentős ipari központ."],
      ro: ["Cunoscută ca Veneția poloneză.", "Deține Insula Morilor.", "Bogată în stil Art Nouveau.", "Port interior important.", "Găzduiește Opera Nova.", "Centru industrial semnificativ."],
      en: ["Known as the Polish Venice.", "Features Mill Island.", "Rich in Art Nouveau.", "Important inland port.", "Home to the Opera Nova.", "Significant industrial center."]
    },
    image: "/geo-images/poland/bydgoszcz.webp"
  },
  {
    id: "pl-lublin",
    type: "city",
    parent: "PL-LU",
    coords: [22.5667, 51.2464],
    name: { de: "Lublin", hu: "Lublin", ro: "Lublin", en: "Lublin" },
    description: {
      de: "Lublin ist die größte Stadt in Ostpolen und ein wichtiges historisches Zentrum. Die gut erhaltene Altstadt ist reich an Renaissance-Architektur. Die Stadt war Schauplatz der Union von Lublin im Jahr 1569. Heute ist sie eine lebendige Universitätsstadt mit vielen kulturellen Veranstaltungen.",
      hu: "Lublin Kelet-Lengyelország legnagyobb városa és fontos történelmi központ. A jól megőrzött óváros gazdag reneszánsz építészetben. A város az 1569-es lublini unió helyszíne volt. Ma nyüzsgő egyetemi város, számos kulturális eseménnyel.",
      ro: "Lublin este cel mai mare oraș din estul Poloniei și un important centru istoric. Orașul vechi bine conservat este bogat în arhitectură renascentistă. Orașul a fost locul Uniunii de la Lublin în 1569. Astăzi este un oraș universitar vibrant, cu multe evenimente culturale.",
      en: "Lublin is the largest city in eastern Poland and an important historical center. The well-preserved Old Town is rich in Renaissance architecture. The city was the site of the Union of Lublin in 1569. Today it is a vibrant university city with many cultural events."
    },
    facts: {
      de: ["Größte Stadt im Osten Polens.", "Besitzt eine Renaissance-Altstadt.", "Ort der Union von Lublin.", "Lebendige Studentenstadt.", "Heimat des Lubliner Schlosses.", "Zentrum für Kulturfestivals."],
      hu: ["Kelet-Lengyelország legnagyobb városa.", "Reneszánsz óvárossal rendelkezik.", "A lublini unió helyszíne.", "Nyüzsgő diákváros.", "A lublini vár otthona.", "Kulturális fesztiválok központja."],
      ro: ["Cel mai mare oraș din estul Poloniei.", "Are un oraș vechi renascentist.", "Locul Uniunii de la Lublin.", "Oraș studențesc vibrant.", "Găzduiește Castelul Lublin.", "Centru pentru festivaluri culturale."],
      en: ["Largest city in eastern Poland.", "Features a Renaissance Old Town.", "Site of the Union of Lublin.", "Vibrant student city.", "Home to Lublin Castle.", "Center for cultural festivals."]
    },
    image: "/geo-images/poland/lublin.webp"
  },
  {
    id: "pl-katowice",
    type: "city",
    parent: "PL-SL",
    coords: [19.0216, 50.2649],
    name: { de: "Kattowitz", hu: "Katowice", ro: "Katowice", en: "Katowice" },
    description: {
      de: "Kattowitz ist das Herz der industriellen Region Schlesien. Die Stadt hat sich in den letzten Jahren zu einem Zentrum für moderne Architektur und Kultur gewandelt. Die Spodek-Arena ist ein Wahrzeichen der Stadt und Austragungsort für Großveranstaltungen. Kattowitz verbindet sein industrielles Erbe mit moderner Innovation.",
      hu: "Katowice a sziléziai ipari régió szíve. A város az elmúlt években a modern építészet és kultúra központjává vált. A Spodek aréna a város jelképe és nagy rendezvények helyszíne. Katowice ötvözi ipari örökségét a modern innovációval.",
      ro: "Katowice este inima regiunii industriale Silezia. Orașul s-a transformat în ultimii ani într-un centru pentru arhitectura și cultura modernă. Arena Spodek este un punct de reper al orașului și locul de desfășurare a unor evenimente majore. Katowice îmbină moștenirea sa industrială cu inovația modernă.",
      en: "Katowice is the heart of the Silesian industrial region. The city has transformed in recent years into a center for modern architecture and culture. The Spodek Arena is a landmark of the city and host to major events. Katowice blends its industrial heritage with modern innovation."
    },
    facts: {
      de: ["Zentrum der Metropolregion Schlesien.", "Bekannt für die Spodek-Arena.", "Hat ein reiches industrielles Erbe.", "Ausgezeichnet als UNESCO-Musikstadt.", "Standort des Schlesischen Museums.", "Wichtiger Verkehrsknotenpunkt."],
      hu: ["A sziléziai metropolisz központja.", "Híres a Spodek arénáról.", "Gazdag ipari örökséggel rendelkezik.", "UNESCO zenei városa díjazott.", "A Sziléziai Múzeum helyszíne.", "Fontos közlekedési csomópont."],
      ro: ["Centrul zonei metropolitane Silezia.", "Cunoscută pentru Arena Spodek.", "Are o bogată moștenire industrială.", "Premiată ca Oraș al Muzicii UNESCO.", "Sediul Muzeului Sileziei.", "Important nod de transport."],
      en: ["Center of the Silesian metropolis.", "Known for the Spodek Arena.", "Has a rich industrial heritage.", "Awarded UNESCO City of Music.", "Location of the Silesian Museum.", "Important transportation hub."]
    },
    image: "/geo-images/poland/katowice.webp"
  },
  {
    id: "pl-czestochowa",
    type: "city",
    parent: "PL-SL",
    coords: [19.1204, 50.8118],
    name: { de: "Tschenstochau", hu: "Częstochowa", ro: "Częstochowa", en: "Częstochowa" },
    description: {
      de: "Tschenstochau ist vor allem als spirituelles Herz Polens bekannt. Das Kloster Jasna Góra zieht jährlich Millionen von Pilgern an, die die Ikone der Schwarzen Madonna verehren. Die Stadt hat auch eine lebhafte industrielle und kulturelle Szene. Tschenstochau ist ein Ort der Geschichte und tiefer religiöser Bedeutung.",
      hu: "Częstochowa leginkább Lengyelország spirituális központjaként ismert. A Jasna Góra-i kolostor zarándokok millióit vonzza évente, akik a Fekete Madonna ikont tisztelik. A város élénk ipari és kulturális élettel is rendelkezik. Częstochowa a történelem és a mély vallási jelentőség helye.",
      ro: "Częstochowa este cunoscută în primul rând ca inima spirituală a Poloniei. Mănăstirea Jasna Góra atrage milioane de pelerini anual care venerează icoana Madonei Negre. Orașul are, de asemenea, o scenă industrială și culturală vibrantă. Częstochowa este un loc de istorie și profundă semnificație religioasă.",
      en: "Częstochowa is best known as the spiritual heart of Poland. The Jasna Góra Monastery attracts millions of pilgrims annually who venerate the icon of the Black Madonna. The city also has a vibrant industrial and cultural scene. Częstochowa is a place of history and deep religious significance."
    },
    facts: {
      de: ["Heimat des Klosters Jasna Góra.", "Wichtigster Pilgerort Polens.", "Besitzt das Gemälde der Schwarzen Madonna.", "Hat starke industrielle Wurzeln.", "Besitzt eine lange Allee in der Innenstadt.", "Zieht jährlich Millionen Besucher an."],
      hu: ["A Jasna Góra kolostor otthona.", "Lengyelország legfontosabb zarándokhelye.", "A Fekete Madonna festményének őrzője.", "Erős ipari gyökerekkel rendelkezik.", "Hosszú sétálóutcája van a belvárosban.", "Évente látogatók millióit vonzza."],
      ro: ["Găzduiește mănăstirea Jasna Góra.", "Cel mai important loc de pelerinaj din Polonia.", "Deține pictura Madonei Negre.", "Are rădăcini industriale puternice.", "Deține un bulevard lung în centrul orașului.", "Atrage milioane de vizitatori anual."],
      en: ["Home to the Jasna Góra Monastery.", "Most important pilgrimage site in Poland.", "Houses the painting of the Black Madonna.", "Has strong industrial roots.", "Features a long avenue in the city center.", "Attracts millions of visitors annually."]
    },
    image: "/geo-images/poland/czestochowa.webp"
  },
  {
    id: "pl-radom",
    type: "city",
    parent: "PL-MZ",
    coords: [21.1469, 51.4027],
    name: { de: "Radom", hu: "Radom", ro: "Radom", en: "Radom" },
    description: {
      de: "Radom ist eine historische Stadt in der Woiwodschaft Masowien mit reicher Vergangenheit. Die Stadt war jahrhundertelang ein wichtiges königliches Zentrum. Radom ist bekannt für seine internationalen Flugschauen und seine gut erhaltene Altstadt. Es bietet Besuchern eine Mischung aus historischen Denkmälern und moderner Kultur.",
      hu: "Radom történelmi város a Mazóviai vajdaságban, gazdag múlttal. A város évszázadokon át fontos királyi központ volt. Radom híres nemzetközi repülőnapjairól és jól megőrzött óvárosáról. Történelmi műemlékek és modern kultúra keverékét kínálja a látogatóknak.",
      ro: "Radom este un oraș istoric din voievodatul Mazovia, cu un trecut bogat. Orașul a fost un important centru regal timp de secole. Radom este cunoscut pentru mitingurile sale aviatice internaționale și orașul vechi bine conservat. Oferă vizitatorilor un amestec de monumente istorice și cultură modernă.",
      en: "Radom is a historical city in the Masovian Voivodeship with a rich past. The city was an important royal center for centuries. Radom is known for its international air shows and its well-preserved Old Town. It offers visitors a mix of historical monuments and modern culture."
    },
    facts: {
      de: ["Verfügt über eine reiche Königsgeschichte.", "Bekannt für die Radom Air Show.", "Zweitgrößte Stadt in Masowien.", "Heimat vieler gotischer und barocker Kirchen.", "Historisches Zentrum der Waffenproduktion.", "Hat eine gut erhaltene Altstadt."],
      hu: ["Gazdag királyi történelemmel rendelkezik.", "Híres a radomi repülőnapról.", "Mazóvia második legnagyobb városa.", "Számos gótikus és barokk templom otthona.", "A fegyvergyártás történelmi központja.", "Jól megőrzött óvárosa van."],
      ro: ["Are o bogată istorie regală.", "Cunoscut pentru Radom Air Show.", "Al doilea oraș ca mărime din Mazovia.", "Găzduiește multe biserici gotice și baroce.", "Centru istoric al producției de arme.", "Are un oraș vechi bine conservat."],
      en: ["Features a rich royal history.", "Known for the Radom Air Show.", "Second-largest city in Masovia.", "Home to many Gothic and Baroque churches.", "Historical center of weapons production.", "Has a well-preserved Old Town."]
    },
    image: "/geo-images/poland/radom.webp"
  },
  {
    id: "pl-sopot",
    type: "city",
    parent: "PL-PM",
    coords: [18.5603, 54.4416],
    name: { de: "Sopot", hu: "Sopot", ro: "Sopot", en: "Sopot" },
    description: {
      de: "Sopot ist ein eleganter Küstenort an der Ostsee, der zur sogenannten Dreistadt gehört. Die Stadt ist berühmt für ihre historische Holzseebrücke, die längste Europas. Besucher genießen die feinen Sandstrände, das lebhafte Nachtleben und die einzigartige Bäderarchitektur. Das Krumme Haus ist eine der kuriosesten Sehenswürdigkeiten der Stadt.",
      hu: "Sopot elegáns tengerparti üdülőváros a Balti-tengernél, amely az úgynevezett Hármasváros része. A város híres történelmi fa mólójáról, amely Európa leghosszabbika. A látogatók élvezhetik a finom homokos strandokat, az élénk éjszakai életet és a különleges fürdőépítészetet. A Görbe Ház a város egyik legfurcsább látványossága.",
      ro: "Sopot este o stațiune elegantă de pe coasta Mării Baltice, care face parte din așa-numitul Tricity. Orașul este renumit pentru debarcaderul său istoric din lemn, cel mai lung din Europa. Vizitatorii se bucură de plajele cu nisip fin, de viața de noapte vibrantă și de arhitectura balneară unică. Casa Strâmbă este una dintre cele mai curioase atracții ale orașului.",
      en: "Sopot is an elegant seaside resort on the Baltic Sea, part of the so-called Tricity. The city is famous for its historical wooden pier, the longest in Europe. Visitors enjoy the fine sandy beaches, vibrant nightlife, and unique spa architecture. The Crooked House is one of the city's most curious attractions."
    },
    facts: {
      de: ["Teil der Dreistadt-Metropole.", "Besitzt die längste Holzseebrücke in Europa.", "Berühmt für das Sopot Festival.", "Hat das berühmte 'Krumme Haus'.", "Bietet beliebte Ostseestrände.", "Eleganter Kurort mit langer Tradition."],
      hu: ["A Hármasváros metropolisz része.", "Itt van Európa leghosszabb fa mólója.", "Híres a Sopoti Fesztiválról.", "Itt található a híres 'Görbe Ház'.", "Népszerű balti-tengeri strandokat kínál.", "Elegáns gyógyüdülőhely nagy hagyományokkal."],
      ro: ["Parte a metropolei Tricity.", "Deține cel mai lung debarcader de lemn din Europa.", "Renumit pentru Festivalul Sopot.", "Are faimoasa 'Casă Strâmbă'.", "Oferă plaje populare la Marea Baltică.", "Stațiune elegantă cu o lungă tradiție."],
      en: ["Part of the Tricity metropolis.", "Features the longest wooden pier in Europe.", "Famous for the Sopot Festival.", "Has the famous 'Crooked House'.", "Offers popular Baltic Sea beaches.", "Elegant spa resort with a long tradition."]
    },
    image: "/geo-images/poland/sopot.webp"
  },
  {
    id: "pl-kielce",
    type: "city",
    parent: "PL-SK",
    coords: [20.6275, 50.8667],
    name: { de: "Kielce", hu: "Kielce", ro: "Kielce", en: "Kielce" },
    description: {
      de: "Kielce liegt im Herzen des Heiligkreuzgebirges und ist von wunderschöner Natur umgeben. Die Stadt ist ein wichtiges Zentrum für Messen und Ausstellungen in Europa. Der Palast der Krakauer Bischöfe ist ein hervorragend erhaltenes Beispiel frühbarocker Architektur. Zahlreiche Naturreservate direkt in der Stadt laden zu Entdeckungen ein.",
      hu: "Kielce a Szentkereszt-hegység szívében fekszik, gyönyörű természet veszi körül. A város fontos vásár- és kiállítási központ Európában. A krakkói püspökök palotája a kora barokk építészet kiválóan megőrzött példája. Számos természetvédelmi terület hívogat felfedezésre közvetlenül a városban.",
      ro: "Kielce este situat în inima Munților Sfintei Cruci și este înconjurat de o natură frumoasă. Orașul este un centru important pentru târguri și expoziții din Europa. Palatul Episcopilor de Cracovia este un exemplu excelent conservat de arhitectură barocă timpurie. Numeroase rezervații naturale chiar în oraș invită la explorare.",
      en: "Kielce is located in the heart of the Holy Cross Mountains and is surrounded by beautiful nature. The city is an important center for trade fairs and exhibitions in Europe. The Palace of the Krakow Bishops is a superbly preserved example of early Baroque architecture. Numerous nature reserves right in the city invite exploration."
    },
    facts: {
      de: ["Zentrum des Heiligkreuzgebirges.", "Wichtiger Messestandort (Targi Kielce).", "Besitzt den Bischofspalast aus dem 17. Jahrhundert.", "Einzige Stadt in Europa mit 5 geologischen Reservaten.", "Berühmt für Kadzielnia-Amphitheater.", "Beliebt für Geotourismus."],
      hu: ["A Szentkereszt-hegység központja.", "Fontos vásárváros (Targi Kielce).", "17. századi püspöki palotával rendelkezik.", "Az egyetlen európai város 5 geológiai rezervátummal.", "Híres a Kadzielnia amfiteátrumról.", "Népszerű a geoturizmus terén."],
      ro: ["Centrul Munților Sfintei Cruci.", "Important centru expozițional (Targi Kielce).", "Deține Palatul Episcopilor din secolul al XVII-lea.", "Singurul oraș din Europa cu 5 rezervații geologice.", "Renumit pentru Amfiteatrul Kadzielnia.", "Popular pentru geoturism."],
      en: ["Center of the Holy Cross Mountains.", "Important trade fair location (Targi Kielce).", "Features the 17th-century Bishops' Palace.", "Only city in Europe with 5 geological reserves.", "Famous for the Kadzielnia Amphitheater.", "Popular for geotourism."]
    },
    image: "/geo-images/poland/kielce.webp"
  },
  {
    id: "pl-olsztyn",
    type: "city",
    parent: "PL-WN",
    coords: [20.4841, 53.7767],
    name: { de: "Allenstein", hu: "Olsztyn", ro: "Olsztyn", en: "Olsztyn" },
    description: {
      de: "Olsztyn ist die malerische Hauptstadt der Region Ermland-Masuren. Die Stadt ist von 15 Seen und dichten Wäldern umgeben. In der Burg Allenstein wirkte einst Nikolaus Kopernikus, der hier seine astronomischen Beobachtungen durchführte. Die gotische Architektur und die Nähe zur Natur machen die Stadt zu einem besonderen Ziel.",
      hu: "Olsztyn a Warmia-Mazúria régió festői fővárosa. A várost 15 tó és sűrű erdők veszik körül. Az olsztyni várban egykor Nikolausz Kopernikusz tevékenykedett, aki itt végezte csillagászati megfigyeléseit. A gótikus építészet és a természet közelsége különleges úti céllá teszi a várost.",
      ro: "Olsztyn este capitala pitorească a regiunii Warmia-Mazuria. Orașul este înconjurat de 15 lacuri și păduri dese. Nicolaus Copernic a lucrat odată în Castelul Olsztyn, unde și-a efectuat observațiile astronomice. Arhitectura gotică și apropierea de natură fac din oraș o destinație specială.",
      en: "Olsztyn is the picturesque capital of the Warmian-Masurian region. The city is surrounded by 15 lakes and dense forests. Nicolaus Copernicus once worked in Olsztyn Castle, where he conducted his astronomical observations. The Gothic architecture and proximity to nature make the city a special destination."
    },
    facts: {
      de: ["Tor zu den Masurischen Seen.", "Hat über 10 Seen innerhalb der Stadtgrenzen.", "Kopernikus lebte auf der Burg Allenstein.", "Besitzt ein modernes Planetarium.", "Historische Hauptstadt der Region Ermland.", "Beliebt für Wassersport und Natur."],
      hu: ["A mazuri tavak kapuja.", "Több mint 10 tó található a városhatáron belül.", "Kopernikusz az olsztyni várban élt.", "Modern planetáriummal rendelkezik.", "A Warmia régió történelmi fővárosa.", "Népszerű a vízi sportok és a természet kedvelői körében."],
      ro: ["Poarta către Lacurile Mazuriene.", "Are peste 10 lacuri în limitele orașului.", "Copernic a locuit în Castelul Olsztyn.", "Are un planetariu modern.", "Capitala istorică a regiunii Warmia.", "Popular pentru sporturi nautice și natură."],
      en: ["Gateway to the Masurian Lakes.", "Has over 10 lakes within the city limits.", "Copernicus lived in Olsztyn Castle.", "Features a modern planetarium.", "Historical capital of the Warmia region.", "Popular for water sports and nature."]
    },
    image: "/geo-images/poland/olsztyn.webp"
  },
  {
    id: "pl-rzeszow",
    type: "city",
    parent: "PL-PK",
    coords: [22.0048, 50.0412],
    name: { de: "Rzeszów", hu: "Rzeszów", ro: "Rzeszów", en: "Rzeszów" },
    description: {
      de: "Rzeszów ist die größte Stadt und das wirtschaftliche Zentrum im Südosten Polens. Sie ist bekannt für ihre gepflegte Altstadt mit einem malerischen Marktplatz. Ein Highlight ist die unterirdische Touristenroute, die alte Keller und Gänge miteinander verbindet. Rzeszów ist eine sich schnell entwickelnde, moderne Universitätsstadt.",
      hu: "Rzeszów Délkelet-Lengyelország legnagyobb városa és gazdasági központja. Gondozott óvárosáról és festői piacteréről ismert. Fő látványossága a föld alatti turisztikai útvonal, amely régi pincéket és folyosókat köt össze. Rzeszów egy gyorsan fejlődő, modern egyetemi város.",
      ro: "Rzeszów este cel mai mare oraș și centrul economic din sud-estul Poloniei. Este cunoscut pentru orașul vechi bine îngrijit, cu o piață pitorească. Un punct de atracție este traseul turistic subteran, care conectează vechile pivnițe și coridoare. Rzeszów este un oraș universitar modern, cu o dezvoltare rapidă.",
      en: "Rzeszów is the largest city and economic center in southeastern Poland. It is known for its well-maintained Old Town with a picturesque market square. A highlight is the underground tourist route, which connects old cellars and corridors. Rzeszów is a rapidly developing, modern university city."
    },
    facts: {
      de: ["Hauptstadt der Woiwodschaft Karpatenvorland.", "Bietet ein faszinierendes unterirdisches Labyrinth.", "Wichtiger Knotenpunkt für die Luftfahrtindustrie.", "Besitzt ein imposantes Lubomirski-Schloss.", "Bekannt als saubere und sichere Stadt.", "Tor zu den Bieszczady-Bergen."],
      hu: ["A Kárpátaljai vajdaság fővárosa.", "Lenyűgöző földalatti labirintust kínál.", "A repülőgépipar fontos csomópontja.", "Impozáns Lubomirski-kastéllyal rendelkezik.", "Tiszta és biztonságos városként ismert.", "A Bieszczady-hegység kapuja."],
      ro: ["Capitala voievodatului Subcarpatia.", "Oferă un labirint subteran fascinant.", "Nod important pentru industria aviației.", "Deține un impunător Castel Lubomirski.", "Cunoscut ca un oraș curat și sigur.", "Poarta către Munții Bieszczady."],
      en: ["Capital of the Subcarpathian Voivodeship.", "Offers a fascinating underground labyrinth.", "Important hub for the aviation industry.", "Features an imposing Lubomirski Castle.", "Known as a clean and safe city.", "Gateway to the Bieszczady Mountains."]
    },
    image: "/geo-images/poland/rzeszow.webp"
  },
  {
    id: "pl-gdynia",
    type: "city",
    parent: "PL-PM",
    coords: [18.5311, 54.5189],
    name: { de: "Gdingen", hu: "Gdynia", ro: "Gdynia", en: "Gdynia" },
    description: {
      de: "Gdynia ist eine dynamische Hafenstadt, die nach dem Ersten Weltkrieg aus einem kleinen Fischerdorf entstand. Sie ist berühmt für ihre durchgängige modernistische Architektur. Als Teil der Dreistadt bietet sie breite Strände, Museen am Wasser und einen großen Fährhafen. Die Stadt ist ein Symbol des maritimen Aufbruchs Polens.",
      hu: "Gdynia egy dinamikus kikötőváros, amely az első világháború után nőtt ki egy kis halászfaluból. Híres egységes modernista építészetéről. A Hármasváros részeként széles strandokat, vízparti múzeumokat és nagy kompkikötőt kínál. A város Lengyelország tengeri felemelkedésének szimbóluma.",
      ro: "Gdynia este un oraș port dinamic care a crescut dintr-un mic sat de pescari după Primul Război Mondial. Este renumit pentru arhitectura sa modernistă consecventă. Ca parte a Tricity, oferă plaje largi, muzee pe malul apei și un mare terminal de feriboturi. Orașul este un simbol al ascensiunii maritime a Poloniei.",
      en: "Gdynia is a dynamic port city that grew from a small fishing village after World War I. It is famous for its consistent modernist architecture. As part of the Tricity, it offers wide beaches, waterfront museums, and a large ferry terminal. The city is a symbol of Poland's maritime rise."
    },
    facts: {
      de: ["Gegründet in den 1920er Jahren.", "Bedeutendstes Zentrum polnischer Meereswirtschaft.", "Berühmt für modernistische Architektur.", "Heimat historischer Museumsschiffe.", "Gastgeber des Polnischen Filmfestivals.", "Teil der Metropolregion Dreistadt."],
      hu: ["Az 1920-as években alapították.", "A lengyel tengergazdaság legjelentősebb központja.", "Híres modernista építészetéről.", "Történelmi múzeumhajók otthona.", "A Lengyel Filmfesztivál házigazdája.", "A Hármasváros metropolisz része."],
      ro: ["Fondat în anii 1920.", "Cel mai important centru al economiei maritime poloneze.", "Renumit pentru arhitectura modernistă.", "Găzduiește nave-muzeu istorice.", "Gazda Festivalului de Film Polonez.", "Parte a zonei metropolitane Tricity."],
      en: ["Founded in the 1920s.", "Most important center of the Polish maritime economy.", "Famous for modernist architecture.", "Home to historical museum ships.", "Host of the Polish Film Festival.", "Part of the Tricity metropolitan area."]
    },
    image: "/geo-images/poland/gdynia.webp"
  },
  {
    id: "pl-malbork-castle",
    type: "historical",
    parent: "PL-PM",
    coords: [19.0291, 54.0399],
    name: { de: "Marienburg", hu: "Malbork vára", ro: "Castelul Malbork", en: "Malbork Castle" },
    description: {
      de: "Die Marienburg ist die mächtigste mittelalterliche Festung Europas und die größte Backsteinburg der Welt. Sie wurde vom Deutschen Orden im 13. Jahrhundert erbaut und diente lange als Hauptsitz der Kreuzritter. Die majestätische Anlage liegt malerisch am Ufer der Nogat. Heute zieht das UNESCO-Welterbe unzählige Geschichtsinteressierte an.",
      hu: "A malborki vár Európa leghatalmasabb középkori erődítménye és a világ legnagyobb téglaépítésű vára. A Német Lovagrend építette a 13. században, és sokáig a keresztesek székhelyeként szolgált. A fenséges komplexum festői környezetben fekszik a Nogat folyó partján. Az UNESCO világörökség ma számtalan történelemrajongót vonz.",
      ro: "Castelul Malbork este cea mai puternică fortăreață medievală din Europa și cel mai mare castel de cărămidă din lume. A fost construit de Ordinul Teutonic în secolul al XIII-lea și a servit mult timp ca sediu al cruciaților. Complexul maiestuos este situat pitoresc pe malul râului Nogat. Astăzi, situl Patrimoniului Mondial UNESCO atrage nenumărați pasionați de istorie.",
      en: "Malbork Castle is the most powerful medieval fortress in Europe and the largest brick castle in the world. It was built by the Teutonic Order in the 13th century and long served as the headquarters of the crusaders. The majestic complex is picturesquely situated on the banks of the Nogat River. Today, the UNESCO World Heritage Site attracts countless history buffs."
    },
    facts: {
      de: ["Größte Backsteinburg der Welt.", "Ehemaliger Sitz des Deutschen Ordens.", "UNESCO-Weltkulturerbe seit 1997.", "Klassisches Beispiel mittelalterlicher Wehranlagen.", "Besteht aus drei separaten Burgen.", "Eines der bedeutendsten Denkmäler Polens."],
      hu: ["A világ legnagyobb téglavára.", "A Német Lovagrend egykori székhelye.", "1997 óta UNESCO világörökség.", "Középkori védművek klasszikus példája.", "Három különálló várból áll.", "Lengyelország egyik legjelentősebb műemléke."],
      ro: ["Cel mai mare castel de cărămidă din lume.", "Fostul sediu al Ordinului Teutonic.", "Patrimoniu Mondial UNESCO din 1997.", "Exemplu clasic de fortificații medievale.", "Constă din trei castele separate.", "Unul dintre cele mai importante monumente din Polonia."],
      en: ["Largest brick castle in the world.", "Former seat of the Teutonic Order.", "UNESCO World Heritage Site since 1997.", "Classic example of medieval fortifications.", "Consists of three separate castles.", "One of the most important monuments in Poland."]
    },
    image: "/geo-images/poland/malbork-castle.webp"
  },
  {
    id: "pl-wawel-castle",
    type: "historical",
    parent: "PL-MA",
    coords: [19.9354, 50.0540],
    name: { de: "Wawel", hu: "Wawel", ro: "Castelul Wawel", en: "Wawel Castle" },
    description: {
      de: "Das Wawel-Schloss thront majestätisch auf einem Hügel über der Weichsel in Krakau. Es war jahrhundertelang die Residenz der polnischen Könige und das Zentrum der staatlichen Macht. Die Anlage vereint verschiedene Baustile, von Romanik bis zur Renaissance. Neben dem Schloss befindet sich die berühmte Wawel-Kathedrale mit den Königsgräbern.",
      hu: "A Wawel királyi vár fenségesen magasodik a Visztula fölé Krakkóban. Évszázadokon át a lengyel királyok rezidenciája és az állami hatalom központja volt. A komplexum különböző építészeti stílusokat ötvöz, a romántól a reneszánszig. A várkastély mellett található a híres Wawel-székesegyház a királyi sírokkal.",
      ro: "Castelul Wawel se înalță maiestuos pe un deal deasupra râului Vistula din Cracovia. A fost reședința regilor polonezi și centrul puterii de stat timp de secole. Complexul combină diferite stiluri arhitecturale, de la romanic la renascentist. Lângă castel se află faimoasa Catedrală Wawel cu mormintele regale.",
      en: "Wawel Castle sits majestically on a hill overlooking the Vistula River in Krakow. It was the residence of Polish kings and the center of state power for centuries. The complex combines various architectural styles, from Romanesque to Renaissance. Next to the castle is the famous Wawel Cathedral with the royal tombs."
    },
    facts: {
      de: ["Historischer Sitz der polnischen Könige.", "Symbol der nationalen Identität Polens.", "Beherbergt den prächtigen Renaissance-Hof.", "UNESCO-Welterbe im Herzen Krakaus.", "Wawel-Drachenhöhle liegt unter dem Hügel.", "Die Kathedrale enthält viele Königsgräber."],
      hu: ["A lengyel királyok történelmi székhelye.", "A lengyel nemzeti identitás szimbóluma.", "Lenyűgöző reneszánsz udvarral büszkélkedhet.", "UNESCO világörökség Krakkó szívében.", "A Wawel sárkányának barlangja a domb alatt található.", "A katedrális sok királyi sírt őriz."],
      ro: ["Sediul istoric al regilor polonezi.", "Simbol al identității naționale poloneze.", "Găzduiește magnifica curte renascentistă.", "Patrimoniu UNESCO în inima Cracoviei.", "Peștera Dragonului Wawel se află sub deal.", "Catedrala conține multe morminte regale."],
      en: ["Historical seat of the Polish kings.", "Symbol of Poland's national identity.", "Features a magnificent Renaissance courtyard.", "UNESCO World Heritage site in the heart of Krakow.", "Wawel Dragon's Den is beneath the hill.", "The cathedral holds many royal tombs."]
    },
    image: "/geo-images/poland/wawel-castle.webp"
  },
  {
    id: "pl-kazimierz-dolny",
    type: "historical",
    parent: "PL-LU",
    coords: [21.9558, 51.3178],
    name: { de: "Kazimierz Dolny", hu: "Kazimierz Dolny", ro: "Kazimierz Dolny", en: "Kazimierz Dolny" },
    description: {
      de: "Kazimierz Dolny ist ein malerisches Städtchen an der Weichsel, das für seine reiche Geschichte und künstlerische Atmosphäre bekannt ist. Der Renaissance-Marktplatz und die Ruinen der alten Burg prägen das Stadtbild. Künstler und Maler schätzen die Region wegen ihres einzigartigen Lichts und Charmes. Es ist ein beliebtes Ziel für Wochenendausflüge.",
      hu: "Kazimierz Dolny egy festői kisváros a Visztula partján, amely gazdag történelméről és művészi hangulatáról ismert. A reneszánsz piactér és a régi vár romjai meghatározzák a városképet. A művészek és festők egyedi fényei és bája miatt kedvelik a régiót. Népszerű célpont a hétvégi kirándulásokhoz.",
      ro: "Kazimierz Dolny este un oraș pitoresc pe râul Vistula, cunoscut pentru istoria sa bogată și atmosfera artistică. Piața renascentistă și ruinele vechiului castel domină peisajul urban. Artiștii și pictorii apreciază regiunea pentru lumina și farmecul său unic. Este o destinație populară pentru evadările de weekend.",
      en: "Kazimierz Dolny is a picturesque town on the Vistula River, known for its rich history and artistic atmosphere. The Renaissance market square and the ruins of the old castle define the townscape. Artists and painters appreciate the region for its unique light and charm. It is a popular destination for weekend getaways."
    },
    facts: {
      de: ["Berühmt für Renaissance-Architektur.", "Treffpunkt für Künstler und Maler.", "Historischer Binnenhafen an der Weichsel.", "Besitzt eine mittelalterliche Burgruine.", "Berühmt für hefeteiggebildete Hähne.", "Hat alte und stimmungsvolle Getreidespeicher."],
      hu: ["Reneszánsz építészetéről híres.", "Művészek és festők találkozóhelye.", "Történelmi belföldi kikötő a Visztulán.", "Középkori várrommal rendelkezik.", "Híres a kelt tésztából sült kakasokról.", "Régi és hangulatos magtárai vannak."],
      ro: ["Renumit pentru arhitectura renascentistă.", "Loc de întâlnire pentru artiști și pictori.", "Port interior istoric pe Vistula.", "Are o ruină de castel medieval.", "Renumit pentru cocoșii copți din aluat cu drojdie.", "Are grânare vechi și pline de atmosferă."],
      en: ["Famous for Renaissance architecture.", "Meeting place for artists and painters.", "Historical inland port on the Vistula.", "Has a medieval castle ruin.", "Famous for yeast dough roosters.", "Features old and atmospheric granaries."]
    },
    image: "/geo-images/poland/kazimierz-dolny.webp"
  },
  {
    id: "pl-torun-old-town",
    type: "historical",
    parent: "PL-KP",
    coords: [18.6041, 53.0103],
    name: { de: "Toruńer Altstadt", hu: "Toruńi óváros", ro: "Orașul Vechi Toruń", en: "Toruń Old Town" },
    description: {
      de: "Die Altstadt von Toruń ist eine der am besten erhaltenen mittelalterlichen Stätten Europas und UNESCO-Welterbe. Sie begeistert mit gotischen Backsteinkirchen, dem prächtigen Rathaus und den originalen Stadtmauern. Die Stadt ist weltbekannt als Geburtsort von Nikolaus Kopernikus. Ein Spaziergang durch die engen Gassen fühlt sich an wie eine Zeitreise.",
      hu: "Toruń óvárosa Európa egyik legjobb állapotban fennmaradt középkori helyszíne és UNESCO világörökség. Gótikus téglatemplomaival, díszes városházájával és eredeti városfalaival nyűgöz le mindenkit. A város Nikolausz Kopernikusz szülőhelyeként világhírű. Egy séta a szűk utcákon olyan, mint egy időutazás.",
      ro: "Orașul Vechi din Toruń este unul dintre cele mai bine conservate situri medievale din Europa și face parte din Patrimoniul Mondial UNESCO. Încântă prin bisericile gotice din cărămidă, primăria magnifică și zidurile originale ale orașului. Orașul este renumit în întreaga lume ca locul de naștere al lui Nicolaus Copernic. O plimbare pe străzile înguste se simte ca o călătorie în timp.",
      en: "The Old Town of Toruń is one of the best-preserved medieval sites in Europe and a UNESCO World Heritage Site. It delights with Gothic brick churches, the magnificent town hall, and the original city walls. The city is world-famous as the birthplace of Nicolaus Copernicus. A walk through the narrow streets feels like a journey through time."
    },
    facts: {
      de: ["Zählt zum UNESCO-Weltkulturerbe.", "Geburtsort des Astronomen Nikolaus Kopernikus.", "Berühmt für die traditionellen Lebkuchen.", "Überragende Beispiele der Backsteingotik.", "Zerstörungen im Zweiten Weltkrieg entgangen.", "Besitzt einen Schiefen Turm."],
      hu: ["Az UNESCO világörökség része.", "Nikolausz Kopernikusz csillagász szülőhelye.", "Híres a hagyományos mézeskalácsokról.", "A téglagótika kiemelkedő példái találhatók itt.", "Megmenekült a második világháborús pusztítástól.", "Ferde toronnyal is rendelkezik."],
      ro: ["Face parte din Patrimoniul Mondial UNESCO.", "Locul de naștere al astronomului Nicolaus Copernic.", "Renumit pentru turta dulce tradițională.", "Exemple remarcabile de arhitectură gotică din cărămidă.", "A scăpat de distrugerile din al Doilea Război Mondial.", "Are un Turn Înclinat."],
      en: ["Part of the UNESCO World Heritage Site.", "Birthplace of astronomer Nicolaus Copernicus.", "Famous for traditional gingerbread.", "Outstanding examples of brick Gothic architecture.", "Spared from destruction in World War II.", "Features a Leaning Tower."]
    },
    image: "/geo-images/poland/torun-old-town.webp"
  },
  {
    id: "pl-ogrodzieniec",
    type: "historical",
    parent: "PL-SL",
    coords: [19.5380, 50.4522],
    name: { de: "Burg Ogrodzieniec", hu: "Ogrodzieniec vára", ro: "Castelul Ogrodzieniec", en: "Ogrodzieniec Castle" },
    description: {
      de: "Die Ruine der Burg Ogrodzieniec ist das beeindruckendste Relikt der sogenannten Adlerhorst-Burgen in Polen. Sie liegt majestätisch auf den höchsten Felsen des Juraausläufers. Die Festung aus dem 14. Jahrhundert wurde in den Kalkstein gebaut, wodurch Burg und Fels oft verschmelzen. Der Ort diente bereits häufig als spektakuläre Filmkulisse.",
      hu: "Az Ogrodzieniec várrom Lengyelország úgynevezett Sasfészek várainak leglenyűgözőbb maradványa. Fenségesen helyezkedik el a jura hegység legmagasabb szikláin. A 14. századi erődítményt a mészkőbe építették, így a vár és a szikla szinte egybeolvad. A helyszín már többször szolgált látványos filmforgatások háttereként.",
      ro: "Ruinele Castelului Ogrodzieniec sunt cea mai impresionantă relicvă a așa-numitelor castele Cuibul Vulturilor din Polonia. Este situat maiestuos pe cele mai înalte stânci ale zonei Jura. Fortăreața din secolul al XIV-lea a fost construită în piatră de var, adesea fuzionând castelul și stânca. Locația a servit adesea ca fundal spectaculos pentru filme.",
      en: "The ruins of Ogrodzieniec Castle are the most impressive relic of the so-called Eagles' Nest castles in Poland. It is situated majestically on the highest rocks of the Jura range. The 14th-century fortress was built into the limestone, often merging the castle and the rock. The location has frequently served as a spectacular film set."
    },
    facts: {
      de: ["Größte Burg auf der Adlerhorst-Route.", "Erbaut im 14. Jahrhundert in Kalksteinfelsen.", "Oft Drehort für bekannte Serien und Filme.", "Beliebter Ort für Gespenstergeschichten.", "Zerstört während der schwedischen Sintflut.", "Bietet spektakuläre Ausblicke auf den Jura."],
      hu: ["A Sasfészek-útvonal legnagyobb vára.", "A 14. században épült mészkősziklákra.", "Gyakran szolgál ismert sorozatok és filmek forgatási helyszínéül.", "Kísértettörténetek népszerű helyszíne.", "A svéd özönvíz idején pusztult el.", "Látványos kilátást nyújt a jura hegységre."],
      ro: ["Cel mai mare castel de pe traseul Cuibul Vulturilor.", "Construit în secolul al XIV-lea în stânci de calcar.", "Adesea locație de filmare pentru seriale și filme cunoscute.", "Loc popular pentru povești cu fantome.", "Distrus în timpul Potopului suedez.", "Oferă vederi spectaculoase ale regiunii Jura."],
      en: ["Largest castle on the Trail of the Eagles' Nests.", "Built in the 14th century into limestone rocks.", "Often a filming location for popular series and movies.", "Popular site for ghost stories.", "Destroyed during the Swedish Deluge.", "Offers spectacular views of the Jura."]
    },
    image: "/geo-images/poland/ogrodzieniec.webp"
  },
  {
    id: "pl-zamosc",
    type: "historical",
    parent: "PL-LU",
    coords: [23.2533, 50.7203],
    name: { de: "Zamość", hu: "Zamość", ro: "Zamość", en: "Zamość" },
    description: {
      de: "Zamość ist ein architektonisches Juwel der Renaissance und wird oft das 'Padua des Nordens' genannt. Die Stadt wurde im 16. Jahrhundert auf dem Reißbrett als ideale Stadt entworfen. Der malerische Marktplatz mit dem beeindruckenden Rathaus und den bunten Bürgerhäusern ist ein UNESCO-Welterbe. Zamość hat seine ursprüngliche Anlage bis heute perfekt bewahrt.",
      hu: "Zamość a reneszánsz építészet ékköve, amelyet gyakran 'Észak Padovájának' is neveznek. A várost a 16. században tervezték ideális városként. A festői piactér az impozáns városházával és a színes polgárházakkal az UNESCO világörökség része. Zamość a mai napig tökéletesen megőrizte eredeti elrendezését.",
      ro: "Zamość este o bijuterie arhitecturală a Renașterii și este adesea numită 'Padova Nordului'. Orașul a fost proiectat în secolul al XVI-lea de la zero ca un oraș ideal. Piața pitorească, cu primăria sa impresionantă și casele colorate, este inclusă în Patrimoniul Mondial UNESCO. Zamość și-a păstrat perfect structura originală până în zilele noastre.",
      en: "Zamość is an architectural jewel of the Renaissance and is often called the 'Padua of the North'. The city was designed from scratch in the 16th century as an ideal city. The picturesque market square with the impressive town hall and colorful townhouses is a UNESCO World Heritage Site. Zamość has perfectly preserved its original layout to this day."
    },
    facts: {
      de: ["Bekannt als die 'Ideale Stadt'.", "Vollständig im Renaissance-Stil erbaut.", "Die Altstadt ist UNESCO-Weltkulturerbe.", "Erbaut von Jan Zamoyski im 16. Jahrhundert.", "Besitzt wunderschöne bunte armenische Häuser.", "Ehemalige mächtige Festungsstadt."],
      hu: ["Az 'ideális városként' is ismert.", "Teljesen reneszánsz stílusban épült.", "Az óváros az UNESCO világörökség része.", "Jan Zamoyski építtette a 16. században.", "Gyönyörű, színes örmény házakkal rendelkezik.", "Egykor hatalmas erődváros volt."],
      ro: ["Cunoscut ca 'Orașul Ideal'.", "Construit în întregime în stil renascentist.", "Orașul Vechi este în Patrimoniul Mondial UNESCO.", "Construit de Jan Zamoyski în secolul al XVI-lea.", "Deține case armenești colorate și frumoase.", "Fost oraș fortificat puternic."],
      en: ["Known as the 'Ideal City'.", "Built entirely in the Renaissance style.", "The Old Town is a UNESCO World Heritage Site.", "Built by Jan Zamoyski in the 16th century.", "Features beautiful colorful Armenian houses.", "Former powerful fortress city."]
    },
    image: "/geo-images/poland/zamosc.webp"
  },
  {
    id: "pl-warsaw-old-town",
    type: "historical",
    parent: "PL-MZ",
    coords: [21.0087, 52.2490],
    name: { de: "Warschauer Altstadt", hu: "Varsói óváros", ro: "Orașul Vechi Varșovia", en: "Warsaw Old Town" },
    description: {
      de: "Die Warschauer Altstadt ist ein beispielloses Zeugnis für den Willen zum Wiederaufbau. Nach der völligen Zerstörung im Zweiten Weltkrieg wurde sie detailgetreu rekonstruiert. Heute bezaubern die gepflasterten Gassen, der Königsschlossplatz und die farbenfrohen Häuserfassaden Besucher aus aller Welt. Sie steht als einzigartiges Beispiel historischer Rekonstruktion auf der UNESCO-Welterbeliste.",
      hu: "A varsói óváros az újjáépítési akarat példátlan bizonyítéka. A második világháború során elszenvedett teljes pusztulás után részletekbe menően újjáépítették. Ma macskaköves utcái, a Királyi Vár tere és a színes házhomlokzatok a világ minden tájáról lenyűgözik a látogatókat. A történelmi rekonstrukció egyedülálló példájaként szerepel az UNESCO világörökségi listáján.",
      ro: "Orașul Vechi din Varșovia este o dovadă fără precedent a dorinței de reconstrucție. După distrugerea sa totală în al Doilea Război Mondial, a fost reconstruit în detaliu. Astăzi, străzile pietruite, Piața Castelului Regal și fațadele colorate ale caselor farmecă vizitatorii din întreaga lume. Este un exemplu unic de reconstrucție istorică pe lista Patrimoniului Mondial UNESCO.",
      en: "Warsaw's Old Town is an unparalleled testament to the will to rebuild. After its total destruction in World War II, it was meticulously reconstructed. Today, its cobbled streets, Royal Castle Square, and colorful facades charm visitors from all over the world. It stands as a unique example of historical reconstruction on the UNESCO World Heritage list."
    },
    facts: {
      de: ["Nach 1945 fast vollständig rekonstruiert.", "Einzigartiges UNESCO-Welterbe der Rekonstruktion.", "Das Königsschloss dominiert den Hauptplatz.", "Besitzt die berühmte Seejungfrau-Statue (Syrenka).", "Zentrum der Geschichte und Kultur Warschaus.", "Erstrahlt heute in alter Pracht."],
      hu: ["1945 után szinte teljesen újjáépítették.", "A rekonstrukció egyedülálló UNESCO világöröksége.", "A főteret a Királyi Vár uralja.", "Itt található a híres sellőszobor (Syrenka).", "Varsó történelmének és kultúrájának központja.", "Ma régi pompájában ragyog."],
      ro: ["Reconstruit aproape în întregime după 1945.", "Sit unic al Patrimoniului Mondial UNESCO pentru reconstrucție.", "Castelul Regal domină piața principală.", "Deține faimoasa statuie a sirenei (Syrenka).", "Centrul istoriei și culturii din Varșovia.", "Astăzi strălucește în vechea sa glorie."],
      en: ["Almost entirely reconstructed after 1945.", "Unique UNESCO World Heritage site of reconstruction.", "The Royal Castle dominates the main square.", "Features the famous Mermaid statue (Syrenka).", "Center of Warsaw's history and culture.", "Shines today in its former glory."]
    },
    image: "/geo-images/poland/warsaw-old-town.webp"
  },
  {
    id: "pl-jasna-gora",
    type: "historical",
    parent: "PL-SL",
    coords: [19.0930, 50.8124],
    name: { de: "Kloster Jasna Góra", hu: "Jasna Góra-i kolostor", ro: "Mănăstirea Jasna Góra", en: "Jasna Góra Monastery" },
    description: {
      de: "Jasna Góra in Tschenstochau ist das bedeutendste Marienheiligtum Polens. Im Herzen des Klosters befindet sich die verehrte Ikone der Schwarzen Madonna. Das Kloster gleicht einer Festung und hat historisch vielen Belagerungen standgehalten. Für die Polen ist es nicht nur ein religiöses Zentrum, sondern auch ein Symbol nationalen Widerstands.",
      hu: "A częstochowai Jasna Góra Lengyelország legjelentősebb Mária-kegyhelye. A kolostor szívében található a Fekete Madonna tisztelt ikonja. A kolostor egy erődítményre hasonlít, és a történelem során számos ostromnak ellenállt. A lengyelek számára nemcsak vallási központ, hanem a nemzeti ellenállás szimbóluma is.",
      ro: "Jasna Góra din Częstochowa este cel mai important sanctuar marian din Polonia. În inima mănăstirii se află venerata icoană a Madonei Negre. Mănăstirea seamănă cu o fortăreață și a rezistat istoric la multe asedii. Pentru polonezi, nu este doar un centru religios, ci și un simbol al rezistenței naționale.",
      en: "Jasna Góra in Częstochowa is the most important Marian sanctuary in Poland. In the heart of the monastery lies the venerated icon of the Black Madonna. The monastery resembles a fortress and has historically withstood many sieges. For Poles, it is not only a religious center but also a symbol of national resistance."
    },
    facts: {
      de: ["Das wichtigste spirituelle Zentrum Polens.", "Bewahrt das Gemälde der Schwarzen Madonna auf.", "War Schauplatz der historischen Verteidigung gegen die Schweden.", "Wird jährlich von Millionen Pilgern besucht.", "Gegründet im 14. Jahrhundert.", "Ein mächtiger barocker Klosterkomplex."],
      hu: ["Lengyelország legfontosabb spirituális központja.", "A Fekete Madonna festményét őrzi.", "A svédek elleni történelmi védekezés helyszíne volt.", "Évente zarándokok milliói látogatják.", "A 14. században alapították.", "Hatalmas barokk kolostorkomplexum."],
      ro: ["Cel mai important centru spiritual din Polonia.", "Păstrează pictura Madonei Negre.", "A fost locul apărării istorice împotriva suedezilor.", "Este vizitat de milioane de pelerini anual.", "Fondat în secolul al XIV-lea.", "Un puternic complex monahal baroc."],
      en: ["The most important spiritual center of Poland.", "Preserves the painting of the Black Madonna.", "Was the site of the historical defense against the Swedes.", "Is visited by millions of pilgrims annually.", "Founded in the 14th century.", "A massive Baroque monastery complex."]
    },
    image: "/geo-images/poland/jasna-gora.webp"
  },
  {
    id: "pl-gniezno-cathedral",
    type: "historical",
    parent: "PL-WP",
    coords: [17.5926, 52.5352],
    name: { de: "Kathedrale von Gnesen", hu: "Gnieznói székesegyház", ro: "Catedrala din Gniezno", en: "Gniezno Cathedral" },
    description: {
      de: "Die Kathedrale von Gnesen ist eines der ehrwürdigsten Kirchengebäude Polens. Sie war Krönungsstätte der ersten polnischen Könige und ist das wichtigste Denkmal der polnischen Staatsgründung. In ihrem Inneren befinden sich die Reliquien des heiligen Adalbert, des Schutzpatrons Polens. Die Bronzetüren der Kathedrale sind ein Meisterwerk mittelalterlicher Gießer-Kunst.",
      hu: "A gnieznói székesegyház Lengyelország egyik legteiszteletreméltóbb egyházi épülete. Az első lengyel királyok koronázási helye volt, és a lengyel államalapítás legfontosabb emlékműve. Belsejében találhatók Szent Adalbert, Lengyelország védőszentjének ereklyéi. A székesegyház bronzajtajai a középkori öntőművészet remekművei.",
      ro: "Catedrala din Gniezno este una dintre cele mai venerate biserici din Polonia. A fost locul de încoronare al primilor regi polonezi și este cel mai important monument al fondării statului polonez. În interior se află moaștele Sfântului Adalbert, patronul Poloniei. Ușile de bronz ale catedralei sunt o capodoperă a artei medievale de turnare.",
      en: "Gniezno Cathedral is one of the most venerable church buildings in Poland. It was the coronation site of the first Polish kings and is the most important monument of the founding of the Polish state. Inside are the relics of Saint Adalbert, the patron saint of Poland. The bronze doors of the cathedral are a masterpiece of medieval casting art."
    },
    facts: {
      de: ["Ort der Krönung der ersten polnischen Könige.", "Hauptkirche Polens mit großer historischer Bedeutung.", "Beherbergt das silberne Reliquiar des hl. Adalbert.", "Berühmt für die romanischen 'Gnesener Türen'.", "Eine der ältesten Diözesen in Europa.", "Ein bedeutendes Ziel auf der Piasten-Route."],
      hu: ["Az első lengyel királyok koronázási helyszíne.", "Lengyelország főtemploma nagy történelmi jelentőséggel.", "Szent Adalbert ezüst ereklyetartójának őrzője.", "Híres a román kori 'Gnieznói ajtókról'.", "Európa egyik legrégebbi egyházmegyéje.", "A Piast-útvonal egyik jelentős állomása."],
      ro: ["Locul încoronării primilor regi polonezi.", "Biserica principală a Poloniei, cu o mare importanță istorică.", "Găzduiește racla de argint a Sf. Adalbert.", "Renumit pentru 'Ușile de Gniezno' în stil romanic.", "Una dintre cele mai vechi eparhii din Europa.", "O destinație importantă pe Traseul Piast."],
      en: ["Site of the coronation of the first Polish kings.", "Main church of Poland with great historical significance.", "Houses the silver reliquary of St. Adalbert.", "Famous for the Romanesque 'Gniezno Doors'.", "One of the oldest dioceses in Europe.", "A major destination on the Piast Route."]
    },
    image: "/geo-images/poland/gniezno-cathedral.webp"
  },
  {
    id: "pl-krzyztopor",
    type: "historical",
    parent: "PL-SK",
    coords: [21.6058, 50.7758],
    name: { de: "Schloss Krzyżtopór", hu: "Krzyżtopór kastély", ro: "Castelul Krzyżtopór", en: "Krzyżtopór Palace" },
    description: {
      de: "Die monumentale Ruine des Schlosses Krzyżtopór in Ujazd ist ein faszinierendes Beispiel polnischer Palastarchitektur des 17. Jahrhunderts. Vor dem Bau von Versailles war es der größte Palast Europas. Die Anlage wurde nach dem Kalenderprinzip entworfen, mit vier Türmen, 12 großen Sälen, 52 Zimmern und 365 Fenstern. Trotz der Zerstörungen strahlt die Ruine bis heute puren Größenwahn aus.",
      hu: "Az ujazdi Krzyżtopór kastély monumentális romja a 17. századi lengyel palotaépítészet lenyűgöző példája. Versailles megépítése előtt ez volt Európa legnagyobb palotája. A komplexumot a naptár elve alapján tervezték, négy toronnyal, 12 nagy teremmel, 52 szobával és 365 ablakkal. A pusztítás ellenére a rom a mai napig a tiszta megalomániát sugározza.",
      ro: "Ruinele monumentale ale Castelului Krzyżtopór din Ujazd reprezintă un exemplu fascinant de arhitectură de palat poloneză din secolul al XVII-lea. Înainte de construcția Palatului Versailles, a fost cel mai mare palat din Europa. Complexul a fost proiectat după principiul calendarului, cu patru turnuri, 12 săli mari, 52 de camere și 365 de ferestre. În ciuda distrugerii, ruina emană și astăzi megalomanie pură.",
      en: "The monumental ruins of Krzyżtopór Palace in Ujazd are a fascinating example of 17th-century Polish palace architecture. Before the construction of Versailles, it was the largest palace in Europe. The complex was designed according to the calendar principle, with four towers, 12 large halls, 52 rooms, and 365 windows. Despite its destruction, the ruin still radiates pure megalomania today."
    },
    facts: {
      de: ["Größter Palast Europas vor Versailles.", "Erbaut als Kalender (365 Fenster, 52 Räume).", "Beeindruckende, gigantische Palastruine.", "Ein Symbol aristokratischer Prachtsucht.", "Besaß angeblich ein Aquarium in der Decke.", "Liegt abseits der großen Touristenpfade."],
      hu: ["Versailles előtt Európa legnagyobb palotája.", "Naptár alapján épült (365 ablak, 52 szoba).", "Lenyűgöző, gigantikus palotarom.", "Az arisztokratikus pompavágy szimbóluma.", "Állítólag egy akvárium volt a mennyezetén.", "Távol esik a nagy turistautaktól."],
      ro: ["Cel mai mare palat din Europa înainte de Versailles.", "Construit ca un calendar (365 de ferestre, 52 de camere).", "Ruină impresionantă, gigantică de palat.", "Un simbol al splendorii aristocratice.", "Se presupune că avea un acvariu în tavan.", "Situat în afara traseelor turistice majore."],
      en: ["Largest palace in Europe before Versailles.", "Built as a calendar (365 windows, 52 rooms).", "Impressive, gigantic palace ruin.", "A symbol of aristocratic splendor.", "Allegedly had an aquarium in the ceiling.", "Located off the major tourist paths."]
    },
    image: "/geo-images/poland/krzyztopor.webp"
  },
  {
    id: "pl-bialowieza-np",
    type: "landmark",
    parent: "PL-PD",
    coords: [23.8681, 52.7000],
    name: { de: "Białowieża-NP", hu: "Białowieża Nemzeti Park", ro: "Parcul Național Białowieża", en: "Białowieża NP" },
    description: {
      de: "Der Nationalpark Białowieża schützt den letzten Rest des riesigen Urwaldes, der einst weite Teile Europas bedeckte. Die uralten Bäume und die unberührte Natur bieten einen unvergleichlichen Lebensraum. Der Park ist besonders als Heimat des europäischen Wisents bekannt, das hier erfolgreich wiederangesiedelt wurde. Dieses UNESCO-Welterbe ist ein Paradies für Naturliebhaber.",
      hu: "A Białowieża Nemzeti Park védi az egykor Európa nagy részét borító hatalmas őserdő utolsó maradványát. Az ősi fák és az érintetlen természet páratlan élőhelyet biztosítanak. A park különösen az európai bölény otthonaként ismert, amelyet itt sikeresen visszatelepítettek. Ez az UNESCO világörökségi helyszín a természet szerelmeseinek paradicsoma.",
      ro: "Parcul Național Białowieża protejează ultimele rămășițe ale imensei păduri virgine care a acoperit cândva mari părți ale Europei. Copacii străvechi și natura neatinsă oferă un habitat de neegalat. Parcul este deosebit de cunoscut ca fiind casa zimbrului european, care a fost reintrodus cu succes aici. Acest sit al Patrimoniului Mondial UNESCO este un paradis pentru iubitorii de natură.",
      en: "Białowieża National Park protects the last remnant of the immense primeval forest that once covered large parts of Europe. The ancient trees and untouched nature provide an unparalleled habitat. The park is especially known as the home of the European bison, which was successfully reintroduced here. This UNESCO World Heritage site is a paradise for nature lovers."
    },
    facts: {
      de: ["Schützt den letzten Tiefland-Urwald Europas.", "Heimat der größten freilebenden Wisentpopulation.", "Geteilt zwischen Polen und Belarus.", "Einzigartiges UNESCO-Weltnaturerbe.", "Sehr hohe Biodiversität an Pflanzen und Pilzen.", "Strenges Reservat nur mit Guide begehbar."],
      hu: ["Európa utolsó síkvidéki őserdejét védi.", "A legnagyobb szabadon élő bölénypopuláció otthona.", "Lengyelország és Fehéroroszország között oszlik meg.", "Egyedülálló UNESCO természeti világörökség.", "Nagyon magas növény- és gombadiverzifikáció.", "A szigorúan védett terület csak vezetővel látogatható."],
      ro: ["Protejează ultima pădure virgină de șes din Europa.", "Găzduiește cea mai mare populație de zimbri în libertate.", "Împărțit între Polonia și Belarus.", "Sit unic al Patrimoniului Mondial Natural UNESCO.", "Biodiversitate foarte mare de plante și ciuperci.", "Rezervație strictă accesibilă doar cu ghid."],
      en: ["Protects Europe's last lowland primeval forest.", "Home to the largest free-roaming bison population.", "Shared between Poland and Belarus.", "Unique UNESCO World Natural Heritage site.", "Very high biodiversity of plants and fungi.", "Strict reserve accessible only with a guide."]
    },
    image: "/geo-images/poland/bialowieza-np.webp"
  },
  {
    id: "pl-tatra-np",
    type: "mountain",
    parent: "PL-MA",
    coords: [20.0000, 49.2500],
    name: { de: "Tatra-Nationalpark", hu: "Tátrai Nemzeti Park", ro: "Parcul Național Tatra", en: "Tatra NP" },
    description: {
      de: "Der Tatra-Nationalpark bewahrt das höchste Gebirge Polens und bietet atemberaubende alpine Landschaften. Die schroffen Gipfel, tiefen Täler und klaren Bergseen wie das Meerauge ziehen jährlich Millionen von Wanderern an. Der Park ist Lebensraum für Bären, Gämsen und Murmeltiere. Die raue Schönheit der Tatra macht sie zu einem Kronjuwel der polnischen Natur.",
      hu: "A Tátrai Nemzeti Park védi Lengyelország legmagasabb hegységét, és lélegzetelállító alpesi tájakat kínál. A zord csúcsok, a mély völgyek és a tiszta hegyi tavak, mint a Tengerszem, évente több millió túrázót vonzanak. A park medvék, zergék és mormoták élőhelye. A Tátra zord szépsége a lengyel természet egyik koronaékszerévé teszi.",
      ro: "Parcul Național Tatra protejează cei mai înalți munți din Polonia și oferă peisaje alpine uluitoare. Vârfurile abrupte, văile adânci și lacurile limpezi de munte, cum ar fi Morskie Oko, atrag milioane de drumeți anual. Parcul este habitat pentru urși, capre negre și marmote. Frumusețea aspră a Munților Tatra îi face o bijuterie a naturii poloneze.",
      en: "Tatra National Park preserves the highest mountains in Poland and offers breathtaking alpine landscapes. The rugged peaks, deep valleys, and clear mountain lakes like Morskie Oko attract millions of hikers annually. The park is a habitat for bears, chamois, and marmots. The rugged beauty of the Tatras makes them a crown jewel of Polish nature."
    },
    facts: {
      de: ["Das einzige alpine Gebirge in Polen.", "Beherbergt den höchsten Gipfel, den Rysy (2499 m).", "Beliebtes Ziel für Wanderer und Bergsteiger.", "Geschützter Lebensraum für Braunbären und Gämsen.", "Anerkannt als UNESCO-Biosphärenreservat.", "Grenzt an den slowakischen Nationalpark."],
      hu: ["Az egyetlen alpesi jellegű hegység Lengyelországban.", "Itt található a legmagasabb csúcs, a Rysy (2499 m).", "Népszerű célpont túrázók és hegymászók számára.", "A barna medvék és a zergék védett élőhelye.", "Elismert UNESCO bioszféra-rezervátum.", "Határos a szlovák nemzeti parkkal."],
      ro: ["Singurii munți de tip alpin din Polonia.", "Găzduiește cel mai înalt vârf, Rysy (2499 m).", "Destinație populară pentru drumeții și alpiniști.", "Habitat protejat pentru urșii bruni și caprele negre.", "Recunoscut ca rezervație a biosferei UNESCO.", "Se învecinează cu parcul național slovac."],
      en: ["The only alpine-type mountains in Poland.", "Home to the highest peak, Rysy (2499 m).", "Popular destination for hikers and mountaineers.", "Protected habitat for brown bears and chamois.", "Recognized as a UNESCO Biosphere Reserve.", "Borders the Slovak national park."]
    },
    image: "/geo-images/poland/tatra-np.webp"
  },
  {
    id: "pl-bieszczady-np",
    type: "mountain",
    parent: "PL-PK",
    coords: [22.5500, 49.1800],
    name: { de: "Bieszczady-NP", hu: "Bieszczady Nemzeti Park", ro: "Parcul Național Bieszczady", en: "Bieszczady NP" },
    description: {
      de: "Die Bieszczady sind die wildeste und abgelegenste Bergregion in Polen. Sie sind bekannt für ihre 'Połoniny', weite und baumlose Bergwiesen, die atemberaubende Ausblicke bieten. Diese Region ist ein Rückzugsort für Wölfe, Bären und Luchse, fernab vom Massentourismus. Hier finden Naturliebhaber absolute Stille und den dunkelsten Sternenhimmel des Landes.",
      hu: "A Bieszczady a legvadabb és legeldugottabb hegyvidéki régió Lengyelországban. Híresek a 'Połoniny'-ről, a széles és fátlan hegyi rétekről, amelyek lélegzetelállító kilátást nyújtanak. Ez a régió a farkasok, medvék és hiúzok menedéke, távol a tömegturizmustól. Itt a természet szerelmesei teljes csendet és az ország legsötétebb csillagos egét találják.",
      ro: "Bieszczady este cea mai sălbatică și izolată regiune montană din Polonia. Aceștia sunt cunoscuți pentru 'Połoniny', pajiștile montane largi și fără copaci, care oferă vederi uluitoare. Această regiune este un refugiu pentru lupi, urși și râși, departe de turismul de masă. Aici, iubitorii de natură găsesc liniște absolută și cel mai întunecat cer înstelat din țară.",
      en: "The Bieszczady Mountains are the wildest and most remote mountain region in Poland. They are known for their 'Połoniny', wide and treeless mountain meadows that offer breathtaking views. This region is a retreat for wolves, bears, and lynxes, far from mass tourism. Here, nature lovers find absolute silence and the darkest starry sky in the country."
    },
    facts: {
      de: ["Bekannt für die charakteristischen 'Połoniny'.", "Polens wildeste Berglandschaft.", "Heimat von Großraubtieren wie Wölfen und Luchsen.", "Ausgezeichnetes Gebiet zur Sternenbeobachtung.", "Liegt im äußersten Südosten Polens.", "Besitzt verlassene Dörfer aus der Vorkriegszeit."],
      hu: ["A jellegzetes 'Połoniny' hegyi rétekről ismert.", "Lengyelország legvadabb hegyvidéki tája.", "A nagyragadozók, mint a farkasok és hiúzok otthona.", "Kiváló terület csillagászati megfigyelésekre.", "Lengyelország legdélkeletibb részén fekszik.", "Háború előtti elhagyatott falvakkal rendelkezik."],
      ro: ["Cunoscuți pentru pajiștile caracteristice 'Połoniny'.", "Cel mai sălbatic peisaj montan din Polonia.", "Găzduiește prădători mari precum lupi și râși.", "Zonă excelentă pentru observarea stelelor.", "Situat în extremitatea de sud-est a Poloniei.", "Are sate abandonate din perioada antebelică."],
      en: ["Known for the characteristic 'Połoniny' meadows.", "Poland's wildest mountain landscape.", "Home to large predators such as wolves and lynxes.", "Excellent area for stargazing.", "Located in the extreme southeast of Poland.", "Features abandoned pre-war villages."]
    },
    image: "/geo-images/poland/bieszczady-np.webp"
  },
  {
    id: "pl-masurian-lakes",
    type: "lake",
    parent: "PL-WN",
    coords: [21.8000, 53.8000],
    name: { de: "Masurische Seen", hu: "Mazuri-tavak", ro: "Lacurile Mazuriene", en: "Masurian Lakes" },
    description: {
      de: "Die Masurische Seenplatte ist ein riesiges Netzwerk aus über 2000 Seen, die durch Flüsse und Kanäle miteinander verbunden sind. Sie ist ein Mekka für Segler, Kanuten und Angler. Die unberührten Wälder ringsum bieten Schutz für zahlreiche seltene Vogelarten. Masuren wird oft als das grüne Herz Polens bezeichnet und ist ideal zum Entspannen.",
      hu: "A Mazuri-tóhátság több mint 2000 tóból álló hatalmas hálózat, amelyeket folyók és csatornák kötnek össze. A vitorlázók, kenusok és horgászok mekkája. A környező érintetlen erdők számos ritka madárfajnak nyújtanak menedéket. Mazúriát gyakran Lengyelország zöld szívének is nevezik, és ideális a kikapcsolódásra.",
      ro: "Districtul Lacurilor Mazuriene este o rețea uriașă de peste 2000 de lacuri conectate prin râuri și canale. Este o mecca pentru marinari, canotori și pescari. Pădurile virgine din jur oferă protecție pentru numeroase specii rare de păsări. Mazuria este adesea numită inima verde a Poloniei și este ideală pentru relaxare.",
      en: "The Masurian Lake District is a vast network of over 2000 lakes connected by rivers and canals. It is a mecca for sailors, canoeists, and anglers. The surrounding untouched forests provide shelter for numerous rare bird species. Masuria is often referred to as the green heart of Poland and is ideal for relaxing."
    },
    facts: {
      de: ["Besteht aus mehr als 2.000 miteinander verbundenen Seen.", "Eines der besten Segelreviere in Europa.", "Spirdingsee (Śniardwy) ist der größte See Polens.", "Kandidat für die Neuen 7 Naturwunder.", "Bedeutendes Gebiet für Vogelbeobachtungen.", "Perfekt für Hausbooturlaube."],
      hu: ["Több mint 2000 egymással összekapcsolt tóból áll.", "Európa egyik legjobb vitorlázó területe.", "A Śniardwy-tó Lengyelország legnagyobb tava.", "Jelölt volt az Új 7 Természeti Csoda címre.", "Jelentős madármegfigyelő terület.", "Tökéletes lakóhajós nyaralásokhoz."],
      ro: ["Constă din peste 2.000 de lacuri interconectate.", "Una dintre cele mai bune zone de navigație din Europa.", "Lacul Śniardwy este cel mai mare lac din Polonia.", "Candidat pentru Cele Noi 7 Minuni ale Naturii.", "Zonă importantă pentru observarea păsărilor.", "Perfect pentru vacanțe pe bărci cu casă."],
      en: ["Consists of more than 2,000 interconnected lakes.", "One of the best sailing areas in Europe.", "Lake Śniardwy is the largest lake in Poland.", "Candidate for the New 7 Wonders of Nature.", "Important area for bird watching.", "Perfect for houseboat holidays."]
    },
    image: "/geo-images/poland/masurian-lakes.webp"
  },
  {
    id: "pl-slowinski-np",
    type: "landmark",
    parent: "PL-PM",
    coords: [17.5500, 54.7500],
    name: { de: "Slowinzischer NP", hu: "Słowiński Nemzeti Park", ro: "Parcul Național Słowiński", en: "Słowiński NP" },
    description: {
      de: "Der Slowinzische Nationalpark an der Ostseeküste ist weltbekannt für seine riesigen Wanderdünen, die eine wüstenähnliche Landschaft bilden. Diese 'polnische Sahara' bewegt sich jedes Jahr um einige Meter landeinwärts und begräbt Wälder unter sich. Der Park umfasst auch große Küstenseen und Kiefernwälder. Er wurde als UNESCO-Biosphärenreservat anerkannt.",
      hu: "A balti-tengeri partvidéken található Słowiński Nemzeti Park világhírű a sivatagszerű tájat alkotó hatalmas vándorló dűnéiről. Ez a 'lengyel Szahara' minden évben néhány métert halad a szárazföld belseje felé, és erdőket temet maga alá. A park nagy part menti tavakat és fenyőerdőket is magában foglal. UNESCO bioszféra-rezervátumként ismerték el.",
      ro: "Parcul Național Słowiński de pe coasta Mării Baltice este renumit în întreaga lume pentru imensele sale dune mișcătoare, care formează un peisaj asemănător deșertului. Acest 'Sahara polonez' se mișcă spre interiorul țării cu câțiva metri în fiecare an, îngropând păduri sub el. Parcul include, de asemenea, lacuri mari de coastă și păduri de pini. A fost recunoscut ca rezervație a biosferei UNESCO.",
      en: "Słowiński National Park on the Baltic coast is world-famous for its massive shifting dunes, which form a desert-like landscape. This 'Polish Sahara' moves inland by a few meters each year, burying forests beneath it. The park also includes large coastal lakes and pine forests. It has been recognized as a UNESCO Biosphere Reserve."
    },
    facts: {
      de: ["Berühmt für Europas größte Wanderdünen.", "Dünen erreichen Höhen von über 40 Metern.", "Landschaft wird oft als 'polnische Sahara' bezeichnet.", "UNESCO-Biosphärenreservat.", "Umfasst die großen Küstenseen Łebsko und Gardno.", "Einzigartige Kombination aus Meer, Sand und Wald."],
      hu: ["Európa legnagyobb vándorló dűnéiről híres.", "A dűnék magassága meghaladja a 40 métert.", "A tájat gyakran 'lengyel Szaharának' nevezik.", "UNESCO bioszféra-rezervátum.", "Magában foglalja a Łebsko és Gardno nagy partmenti tavakat.", "A tenger, a homok és az erdő egyedülálló kombinációja."],
      ro: ["Renumit pentru cele mai mari dune mișcătoare din Europa.", "Dunele ating înălțimi de peste 40 de metri.", "Peisajul este adesea numit 'Sahara poloneză'.", "Rezervație a biosferei UNESCO.", "Include marile lacuri de coastă Łebsko și Gardno.", "Combinație unică de mare, nisip și pădure."],
      en: ["Famous for Europe's largest shifting dunes.", "Dunes reach heights of over 40 meters.", "The landscape is often called the 'Polish Sahara'.", "UNESCO Biosphere Reserve.", "Includes the large coastal lakes Łebsko and Gardno.", "Unique combination of sea, sand, and forest."]
    },
    image: "/geo-images/poland/slowinski-np.webp"
  },
  {
    id: "pl-morskie-oko",
    type: "lake",
    parent: "PL-MA",
    coords: [20.0728, 49.1978],
    name: { de: "Meerauge", hu: "Morskie Oko", ro: "Morskie Oko", en: "Morskie Oko" },
    description: {
      de: "Das Morskie Oko (Meerauge) ist der größte und wohl schönste Bergsee der Hohen Tatra. Er liegt malerisch eingebettet in einem tiefen Kessel, überragt von steilen Granitgipfeln. Das smaragdgrüne Wasser und die umliegende Alpenflora machen ihn zu einem unvergesslichen Anblick. Der Weg zum See ist eine der beliebtesten Wanderrouten Polens.",
      hu: "A Morskie Oko (Tengerszem) a Magas-Tátra legnagyobb és talán legszebb hegyi tava. Festői környezetben fekszik egy mély katlanban, meredek gránitcsúcsok fölé magasodva. A smaragdzöld víz és a környező alpesi flóra felejthetetlen látványt nyújt. A tóhoz vezető út Lengyelország egyik legnépszerűbb túraútvonala.",
      ro: "Morskie Oko (Ochiul Mării) este cel mai mare și, probabil, cel mai frumos lac de munte din Tatra Înaltă. Este situat pitoresc într-o căldare adâncă, dominat de vârfuri abrupte de granit. Apa de un verde smarald și flora alpină din jur îl fac o priveliște de neuitat. Drumul către lac este unul dintre cele mai populare trasee de drumeții din Polonia.",
      en: "Morskie Oko (Eye of the Sea) is the largest and arguably the most beautiful mountain lake in the High Tatras. It is picturesquely situated in a deep cirque, towered over by steep granite peaks. The emerald green water and surrounding alpine flora make it an unforgettable sight. The path to the lake is one of Poland's most popular hiking routes."
    },
    facts: {
      de: ["Größter See in der Tatra.", "Gilt als einer der schönsten Seen der Welt.", "Das Wasser ist kristallklar und fischreich.", "Wird vom höchsten Berg Polens, dem Rysy, überragt.", "Die Wanderung dorthin ist sehr populär.", "Im Winter friert der See oft komplett zu."],
      hu: ["A Tátra legnagyobb tava.", "A világ egyik legszebb tavaként tartják számon.", "A víz kristálytiszta és halakban gazdag.", "Lengyelország legmagasabb hegye, a Rysy magasodik fölé.", "Az oda vezető túra nagyon népszerű.", "Télen a tó gyakran teljesen befagy."],
      ro: ["Cel mai mare lac din Tatra.", "Considerat unul dintre cele mai frumoase lacuri din lume.", "Apa este cristalină și bogată în pești.", "Este dominat de cel mai înalt munte din Polonia, Rysy.", "Drumeția până acolo este foarte populară.", "Iarna, lacul îngheață adesea complet."],
      en: ["Largest lake in the Tatra Mountains.", "Considered one of the most beautiful lakes in the world.", "The water is crystal clear and rich in fish.", "Towered over by Poland's highest mountain, Rysy.", "The hike there is very popular.", "In winter, the lake often freezes over completely."]
    },
    image: "/geo-images/poland/morskie-oko.webp"
  },
  {
    id: "pl-ojcow-np",
    type: "landmark",
    parent: "PL-MA",
    coords: [19.8294, 50.2133],
    name: { de: "Ojców-NP", hu: "Ojców Nemzeti Park", ro: "Parcul Național Ojców", en: "Ojców NP" },
    description: {
      de: "Der Ojców-Nationalpark ist zwar der kleinste Polens, aber geologisch einer der interessantesten. Er besticht durch tiefe Schluchten, skurrile Kalksteinfelsen wie die Herkuleskeule und über 400 Höhlen. Inmitten dieser Karstlandschaft thronen historische Schlösser auf Felsvorsprüngen. Der Park liegt nur wenige Kilometer von Krakau entfernt und ist eine grüne Oase.",
      hu: "Bár az Ojców Nemzeti Park Lengyelország legkisebbike, geológiailag az egyik legérdekesebb. Mély szurdokokkal, különleges mészkősziklákkal (mint a Herkules-buzogány) és több mint 400 barlanggal büszkélkedhet. A karsztvidék közepén történelmi kastélyok magasodnak a sziklákon. A park Krakkótól mindössze néhány kilométerre található, egy igazi zöld oázis.",
      ro: "Deși Parcul Național Ojców este cel mai mic din Polonia, din punct de vedere geologic este unul dintre cele mai interesante. Captivează cu chei adânci, formațiuni bizare de calcar precum Măciuca lui Hercule și peste 400 de peșteri. În mijlocul acestui peisaj carstic, castele istorice se înalță pe stânci. Parcul este la doar câțiva kilometri de Cracovia și este o oază verde.",
      en: "Although Ojców National Park is the smallest in Poland, geologically it is one of the most interesting. It captivates with deep gorges, bizarre limestone formations like the Hercules' Club, and over 400 caves. In the midst of this karst landscape, historical castles sit perched on rock outcrops. The park is only a few kilometers from Krakow and is a green oasis."
    },
    facts: {
      de: ["Der flächenmäßig kleinste Nationalpark in Polen.", "Berühmt für faszinierende Kalksteinformationen.", "Beherbergt das malerische Schloss Pieskowa Skała.", "Lebensraum für viele Fledermausarten in den Höhlen.", "Das Wahrzeichen ist der Felsen 'Herkuleskeule'.", "Teil der berühmten Adlerhorst-Route."],
      hu: ["Területre Lengyelország legkisebb nemzeti parkja.", "Lenyűgöző mészkőképződményeiről híres.", "Itt található a festői Pieskowa Skała kastély.", "Számos denevérfaj élőhelye a barlangokban.", "Jelképe a 'Herkules-buzogány' nevű szikla.", "A híres Sasfészek-útvonal része."],
      ro: ["Cel mai mic parc național din Polonia ca suprafață.", "Renumit pentru formațiunile fascinante de calcar.", "Găzduiește pitorescul Castel Pieskowa Skała.", "Habitat pentru multe specii de lilieci în peșteri.", "Punctul de reper este stânca 'Măciuca lui Hercule'.", "Parte a celebrului Traseu al Cuiburilor de Vulturi."],
      en: ["The smallest national park in Poland by area.", "Famous for fascinating limestone formations.", "Houses the picturesque Pieskowa Skała Castle.", "Habitat for many bat species in the caves.", "The landmark is the 'Hercules' Club' rock.", "Part of the famous Trail of the Eagles' Nests."]
    },
    image: "/geo-images/poland/ojcow-np.webp"
  },
  {
    id: "pl-kampinos-np",
    type: "landmark",
    parent: "PL-MZ",
    coords: [20.7500, 52.3000],
    name: { de: "Kampinos-NP", hu: "Kampinos Nemzeti Park", ro: "Parcul Național Kampinos", en: "Kampinos NP" },
    description: {
      de: "Der Kampinos-Nationalpark erstreckt sich als riesiges Waldgebiet direkt vor den Toren Warschaus. Die Landschaft ist geprägt von einem einzigartigen Kontrast aus trockenen Binnendünen und feuchten Sumpfgebieten. Der Wald ist ein wichtiges Refugium für Elche, Luchse und Biber. Es ist einer der wenigen Nationalparks weltweit, die direkt an eine europäische Hauptstadt grenzen.",
      hu: "A Kampinos Nemzeti Park egy hatalmas erdőterület, amely közvetlenül Varsó kapujában terül el. A tájat a száraz belföldi dűnék és a nedves mocsaras területek egyedülálló kontrasztja jellemzi. Az erdő fontos menedékhely a jávorszarvasok, hiúzok és hódok számára. Azon kevés nemzeti parkok egyike a világon, amely közvetlenül egy európai fővárossal határos.",
      ro: "Parcul Național Kampinos se întinde ca o zonă forestieră imensă chiar la porțile Varșoviei. Peisajul se caracterizează printr-un contrast unic de dune continentale uscate și mlaștini umede. Pădurea este un refugiu important pentru elani, râși și castori. Este unul dintre puținele parcuri naționale din lume care se învecinează direct cu o capitală europeană.",
      en: "The Kampinos National Park stretches out as a vast forest area right at the gates of Warsaw. The landscape is characterized by a unique contrast of dry inland dunes and wet swamps. The forest is an important refuge for elk, lynx, and beavers. It is one of the few national parks worldwide that directly borders a European capital."
    },
    facts: {
      de: ["Die 'grüne Lunge' der Hauptstadt Warschau.", "Bekannt für den Wechsel aus Sanddünen und Sümpfen.", "Das Wappentier des Parks ist der Elch.", "Verfügt über ein ausgezeichnetes Rad- und Wanderwegenetz.", "UNESCO-Biosphärenreservat 'Puszcza Kampinoska'.", "Versteckt viele historische Gräber aus dem Krieg."],
      hu: ["A főváros, Varsó 'zöld tüdeje'.", "A homokdűnék és a mocsarak váltakozásáról ismert.", "A park címerállata a jávorszarvas.", "Kiváló kerékpár- és túraútvonal-hálózattal rendelkezik.", "UNESCO bioszféra-rezervátum 'Puszcza Kampinoska'.", "Sok történelmi háborús sírt rejt."],
      ro: ["'Plămânul verde' al capitalei Varșovia.", "Cunoscut pentru alternanța dintre dunele de nisip și mlaștini.", "Animalul heraldic al parcului este elanul.", "Are o rețea excelentă de trasee pentru ciclism și drumeții.", "Rezervație a biosferei UNESCO 'Puszcza Kampinoska'.", "Ascunde multe morminte istorice din timpul războiului."],
      en: ["The 'green lung' of the capital city, Warsaw.", "Known for the alternation of sand dunes and swamps.", "The heraldic animal of the park is the elk.", "Features an excellent network of cycling and hiking trails.", "UNESCO Biosphere Reserve 'Puszcza Kampinoska'.", "Hides many historical war graves."]
    },
    image: "/geo-images/poland/kampinos-np.webp"
  },
  {
    id: "pl-pieniny-np",
    type: "mountain",
    parent: "PL-MA",
    coords: [20.4000, 49.4000],
    name: { de: "Pieninen-NP", hu: "Pieniny Nemzeti Park", ro: "Parcul Național Pieniny", en: "Pieniny NP" },
    description: {
      de: "Der Pieninen-Nationalpark schützt ein kleines, aber extrem pittoreskes Gebirgsmassiv. Die spektakulärste Attraktion ist der Durchbruchstals des Flusses Dunajec, der sich hier in engen Schleifen durch die steilen Kalksteinfelsen windet. Eine traditionelle Floßfahrt auf dem Dunajec ist ein unvergessliches Erlebnis. Der berühmteste Gipfel ist der majestätische Trzy Korony (Drei Kronen).",
      hu: "A Pieniny Nemzeti Park egy kicsi, de rendkívül festői hegyvonulatot véd. A leglátványosabb attrakció a Dunajec-folyó áttörése, amely szűk kanyarulatokban kígyózik a meredek mészkősziklák között. A hagyományos tutajozás a Dunajecen felejthetetlen élmény. A leghíresebb csúcs a fenséges Trzy Korony (Három Korona).",
      ro: "Parcul Național Pieniny protejează un masiv muntos mic, dar extrem de pitoresc. Cea mai spectaculoasă atracție este defileul râului Dunajec, care șerpuiește în bucle strânse prin stâncile abrupte de calcar. O plimbare cu pluta tradițională pe Dunajec este o experiență de neuitat. Cel mai faimos vârf este maiestuosul Trzy Korony (Trei Coroane).",
      en: "Pieniny National Park protects a small but extremely picturesque mountain massif. The most spectacular attraction is the Dunajec River Gorge, which winds its way in tight loops through the steep limestone cliffs. A traditional raft trip on the Dunajec is an unforgettable experience. The most famous peak is the majestic Trzy Korony (Three Crowns)."
    },
    facts: {
      de: ["Bekannt für die spektakuläre Dunajec-Schlucht.", "Die Floßfahrt mit Goralen ist eine Hauptattraktion.", "Höchster markanter Punkt sind die 'Drei Kronen'.", "Lebensraum für den seltenen Apollofalter.", "Einer der ältesten grenzüberschreitenden Parks in Europa.", "Wunderschöne Wälder mit reicher Herbstfärbung."],
      hu: ["A látványos Dunajec-szurdokról ismert.", "A gorálok vezette tutajozás a fő attrakció.", "Legkiemelkedőbb pontja a 'Három Korona'.", "A ritka apolló-lepke élőhelye.", "Európa egyik legrégebbi határon átnyúló parkja.", "Gyönyörű erdők gazdag őszi színekkel."],
      ro: ["Cunoscut pentru spectaculosul Defileu al Dunajecului.", "Plimbarea cu pluta cu goralii este o atracție principală.", "Cel mai înalt punct proeminent sunt 'Trei Coroane'.", "Habitat pentru fluturele rar Apollo.", "Unul dintre cele mai vechi parcuri transfrontaliere din Europa.", "Păduri frumoase cu o bogată coloratură de toamnă."],
      en: ["Known for the spectacular Dunajec River Gorge.", "The raft trip with Gorals is a main attraction.", "The highest prominent point is the 'Three Crowns'.", "Habitat for the rare Apollo butterfly.", "One of the oldest cross-border parks in Europe.", "Beautiful forests with rich autumn colors."]
    },
    image: "/geo-images/poland/pieniny-np.webp"
  },
  {
    id: "pl-wolin-np",
    type: "island",
    parent: "PL-ZP",
    coords: [14.5000, 54.0000],
    name: { de: "Wollin-NP", hu: "Wolin Nemzeti Park", ro: "Parcul Național Wolin", en: "Wolin Island NP" },
    description: {
      de: "Der Nationalpark Wollin erstreckt sich über die größte polnische Insel an der Ostsee. Seine beeindruckendsten Merkmale sind die steilen, bis zu 95 Meter hohen Klippen, die dramatisch ins Meer abfallen. Der Park schützt wunderschöne Buchenwälder, Küstenseen und das Mündungsdelta der Swine. Er ist auch stolzer Standort eines Reservats für Wisente.",
      hu: "A Wolin Nemzeti Park Lengyelország legnagyobb balti-tengeri szigetén terül el. Leglenyűgözőbb jellegzetességei a meredek, akár 95 méter magas sziklák, amelyek drámaian zuhannak a tengerbe. A park gyönyörű bükkerdőket, part menti tavakat és a Świna deltáját védi. Emellett büszkén ad otthont egy bölényrezervátumnak is.",
      ro: "Parcul Național Wolin se întinde pe cea mai mare insulă poloneză din Marea Baltică. Cele mai impresionante caracteristici ale sale sunt stâncile abrupte de până la 95 de metri, care coboară dramatic în mare. Parcul protejează păduri frumoase de fagi, lacuri de coastă și delta râului Świna. Este, de asemenea, mândrul cămin al unei rezervații de zimbri.",
      en: "Wolin National Park covers the largest Polish island in the Baltic Sea. Its most impressive features are the steep cliffs, up to 95 meters high, which drop dramatically into the sea. The park protects beautiful beech forests, coastal lakes, and the delta of the Świna River. It is also the proud home of a bison reserve."
    },
    facts: {
      de: ["Schützt die beeindruckende Steilküste der Insel Wollin.", "Höchste Klippe erreicht fast 100 Meter.", "Beherbergt ein Reservat für Wisente.", "Wichtiger Rastplatz für Zugvögel.", "Heimat des majestätischen Seeadlers.", "Die Insel bietet das größte Wikingerfestival Europas."],
      hu: ["Védi a Wolin-sziget lenyűgöző szikláit.", "A legmagasabb szikla majdnem eléri a 100 métert.", "Bölényrezervátumnak ad otthont.", "A vándormadarak fontos pihenőhelye.", "A fenséges rétisas otthona.", "A sziget ad otthont Európa legnagyobb viking fesztiváljának."],
      ro: ["Protejează impresionanta coastă abruptă a insulei Wolin.", "Cea mai înaltă stâncă atinge aproape 100 de metri.", "Găzduiește o rezervație de zimbri.", "Loc important de odihnă pentru păsările migratoare.", "Patria vulturului codalb maiestuos.", "Insula găzduiește cel mai mare festival viking din Europa."],
      en: ["Protects the impressive steep coast of Wolin Island.", "The highest cliff reaches nearly 100 meters.", "Houses a reserve for European bison.", "Important resting place for migratory birds.", "Home of the majestic white-tailed eagle.", "The island hosts Europe's largest Viking festival."]
    },
    image: "/geo-images/poland/wolin-np.webp"
  }
];

export const polandAllPoi: POI[] = [
  polandCountry,
  ...polandRegions,
  ...polandCities,
];
