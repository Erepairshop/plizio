import { createMCQ, createTyping, mulberry32, type GeographieQuestion } from "./geographieCurriculumShared";

const q = (hu: string, en: string, de: string, ro: string, lang: string) => {
  if (lang === "hu") return hu;
  if (lang === "de") return de;
  if (lang === "ro") return ro;
  return en;
};

const makeMCQs = (subtopic: string, lang: string, rng: any, data: any[]) =>
  data.map(d => createMCQ("geographie", subtopic, q(d.q[0], d.q[1], d.q[2], d.q[3], lang), q(d.c[0], d.c[1], d.c[2], d.c[3], lang), [q(d.w1[0], d.w1[1], d.w1[2], d.w1[3], lang), q(d.w2[0], d.w2[1], d.w2[2], d.w2[3], lang), q(d.w3[0], d.w3[1], d.w3[2], d.w3[3], lang)], rng));

const makeTyping = (subtopic: string, lang: string, data: any[]) =>
  data.map(d => createTyping("geographie", subtopic, q(d.q[0], d.q[1], d.q[2], d.q[3], lang), [q(d.a[0], d.a[1], d.a[2], d.a[3], lang)]));

// ─── DATA SOURCES K6 ────────────────────────────────────────────────────────

const DATA_K6: any = {
  contour_lines: {
    mcq: [
      { q: ["Mik azok a szintvonalak?", "What are contour lines?", "Was sind Höhenlinien?", "Ce sunt curbele de nivel?"], c: ["Azonos magasságú pontokat összekötő vonalak", "Lines connecting points of equal height", "Linien gleicher Höhe", "Linii care unesc puncte cu aceeași altitudine"], w1: ["Azonos hőmérsékletű vonalak", "Lines of equal temp", "Linien gleicher Temperatur", "Linii de temperatură egală"], w2: ["Országhatárok", "Country borders", "Landesgrenzen", "Granițe de țară"], w3: ["Folyók jelzései", "River markers", "Flussmarkierungen", "Marcaje de râu"] },
      { q: ["Mit jelent ha a vonalak sűrűk?", "Close lines?", "Eng?", "Linii dese?"], c: ["Meredek", "Steep", "Steil", "Abrupt"], w1: ["Lapos", "Flat", "Flach", "Plan"], w2: ["Víz", "Water", "Wasser", "Apă"], w3: ["Erdő", "Forest", "Wald", "Pădure"] },
      { q: ["Mi a szintköz?", "Interval?", "Abstand?", "Echidistanța?"], c: ["Magasságkülönbség", "Height difference", "Höhendifferenz", "Diferență înălțime"], w1: ["Hossz", "Length", "Länge", "Lungime"], w2: ["Szín", "Color", "Farbe", "Culoare"], w3: ["Idő", "Time", "Zeit", "Timp"] },
      { q: ["Barna szín?", "Brown color?", "Braun?", "Maro?"], c: ["Hegy", "Mountain", "Berg", "Munte"], w1: ["Víz", "Water", "Wasser", "Apă"], w2: ["Alföld", "Plain", "Tiefland", "Câmpie"], w3: ["Város", "City", "Stadt", "Oraș"] },
      { q: ["Zöld szín?", "Green color?", "Grün?", "Verde?"], c: ["Alföld", "Plain", "Tiefland", "Câmpie"], w1: ["Hegy", "Mountain", "Berg", "Munte"], w2: ["Tenger", "Sea", "Meer", "Mare"], w3: ["Út", "Road", "Straße", "Drum"] },
    ],
    typing: [
      { q: ["Szintvonal angolul?", "Contour line EN?", "Höhenlinie EN?", "Curbă nivel EN?"], a: ["Contour", "Contour", "Contour", "Contour"] },
      { q: ["Magasság németül?", "Height DE?", "Höhe?", "Înălțime DE?"], a: ["Höhe", "Height", "Höhe", "Inaltime"] },
    ]
  },
  gps_gis_basics: {
    mcq: [
      { q: ["GPS jelentése?", "GPS meaning?", "Bedeutung GPS?", "Ce înseamnă GPS?"], c: ["Helymeghatározó rendszer", "Positioning system", "Positionsbestimmung", "Sistem poziționare"], w1: ["Internet", "Internet", "Internet", "Internet"], w2: ["Játék", "Game", "Spiel", "Joc"], w3: ["Posta", "Post", "Post", "Poștă"] },
      { q: ["Mivel mér a GPS?", "Using what?", "Womit?", "Cu ce?"], c: ["Műholdakkal", "Satellites", "Satelliten", "Sateliți"], w1: ["Kábellel", "Cables", "Kabel", "Cablu"], w2: ["Hanggal", "Sound", "Schall", "Sunet"], w3: ["Fénnyel", "Light", "Licht", "Lumină"] },
    ],
    typing: [
      { q: ["Műhold angolul?", "Satellite EN?", "Satellit?", "Satelit EN?"], a: ["Satellite", "Satellite", "Satellit", "Satelit"] },
      { q: ["Navigáció németül?", "Navigation DE?", "Navigation?", "Navigație DE?"], a: ["Navigation", "Navigation", "Navigation", "Navigatie"] },
    ]
  },
  atlas_usage: {
    mcq: [
      { q: ["Mi az atlasz?", "Atlas?", "Atlas?", "Atlas?"], c: ["Térképgyűjtemény", "Map collection", "Kartensammlung", "Colecție hărți"], w1: ["Könyv", "Book", "Buch", "Carte"], w2: ["Újság", "Paper", "Zeitung", "Ziar"], w3: ["Iránytű", "Compass", "Kompass", "Busolă"] },
    ],
    typing: [
      { q: ["Jelmagyarázat angolul?", "Legend EN?", "Legende?", "Legendă EN?"], a: ["Legend", "Legend", "Legende", "Legend"] },
    ]
  },
  time_zones: {
    mcq: [
      { q: ["Hány időzóna?", "How many zones?", "Wie viele Zeitzonen?", "Câte fusuri orare?"], c: ["24", "24", "24", "24"], w1: ["12", "12", "12", "12"], w2: ["60", "60", "60", "60"], w3: ["100", "100", "100", "100"] },
    ],
    typing: [
      { q: ["Greenwichi idő?", "Greenwich time?", "Zeit?", "Timp?"], a: ["GMT", "GMT", "GMT", "GMT"] },
    ]
  },
  tropical_zone: {
    mcq: [
      { q: ["Hol vannak a trópusok?", "Where tropics?", "Tropen?", "Tropice?"], c: ["Egyenlítőnél", "At Equator", "Am Äquator", "La Ecuator"], w1: ["Sarkokon", "At Poles", "An Polen", "La Poli"], w2: ["Európában", "Europe", "Europa", "Europa"], w3: ["Sivatagban", "Desert", "Wüste", "Deșert"] },
    ],
    typing: [
      { q: ["Esőerdő németül?", "Rainforest DE?", "Regenwald?", "Pădure DE?"], a: ["Regenwald", "Rainforest", "Regenwald", "Regenwald"] },
    ]
  },
  subtropical_zone: {
    mcq: [
      { q: ["Mediterrán nyár?", "Med summer?", "Sommer?", "Vară?"], c: ["Forró, száraz", "Hot, dry", "Heiß, trocken", "Cald, uscat"], w1: ["Hideg", "Cold", "Kalt", "Rece"], w2: ["Esős", "Rainy", "Nass", "Ploios"], w3: ["Havas", "Snowy", "Schnee", "Zăpadă"] },
    ],
    typing: [
      { q: ["Tél angolul?", "Winter EN?", "Winter?", "Iarnă EN?"], a: ["Winter", "Winter", "Winter", "Iarna"] },
    ]
  },
  temperate_zone: {
    mcq: [
      { q: ["Hány évszak?", "Seasons?", "Jahreszeiten?", "Anotimpuri?"], c: ["4", "4", "4", "4"], w1: ["1", "1", "1", "1"], w2: ["2", "2", "2", "2"], w3: ["12", "12", "12", "12"] },
    ],
    typing: [
      { q: ["Nyár németül?", "Summer DE?", "Sommer?", "Vară DE?"], a: ["Sommer", "Summer", "Sommer", "Vara"] },
    ]
  },
  polar_zone: {
    mcq: [
      { q: ["Sarki állat (Észak)?", "North pole animal?", "Tier?", "Animal?"], c: ["Jegesmedve", "Polar bear", "Eisbär", "Urs polar"], w1: ["Pingvin", "Penguin", "Pinguin", "Pinguin"], w2: ["Majom", "Monkey", "Affe", "Maimuță"], w3: ["Elefánt", "Elephant", "Elefant", "Elefant"] },
    ],
    typing: [
      { q: ["Jég angolul?", "Ice EN?", "Eis?", "Gheață EN?"], a: ["Ice", "Ice", "Eis", "Gheata"] },
    ]
  },
};

  northern_europe: {
    mcq: [
      { q: ["Melyik ország fekszik Észak-Európában?", "North EU country?", "Nordeuropäisches Land?", "Țară din Europa de Nord?"], c: ["Norvégia, Svédország", "Norway, Sweden", "Norwegen, Schweden", "Norvegia, Suedia"], w1: ["Olaszország", "Italy", "Italien", "Italia"], w2: ["Spanyolország", "Spain", "Spanien", "Spania"], w3: ["Görögország", "Greece", "Griechenland", "Grecia"] },
      { q: ["Mi a fjord?", "What is a fjord?", "Was ist ein Fjord?", "Ce este un fjord?"], c: ["Keskeny, mély tengeröböl", "Narrow, deep sea bay", "Schmale Meeresbucht", "Golf marin îngust și adânc"], w1: ["Magas hegycsúcs", "High peak", "Hoher Berg", "Vârf muntos înalt"], w2: ["Sivatagi folyó", "Desert river", "Wüstenfluss", "Râu de deșert"], w3: ["Városi park", "City park", "Stadtpark", "Parc urban"] },
      { q: ["Milyen táj jellemző Norvégiára?", "Norway landscape?", "Landschaft Norwegens?", "Peisajul Norvegiei?"], c: ["Hegyvidék és fjordok", "Mountains and fjords", "Gebirge und Fjorde", "Munți și fjorduri"], w1: ["Lapos alföld", "Flat plains", "Flachland", "Câmpie plană"], w2: ["Homokos sivatag", "Sandy desert", "Sandwüste", "Deșert de nisip"], w3: ["Trópusi erdő", "Tropical forest", "Regenwald", "Pădure tropicală"] },
      { q: ["Mi Izland különlegessége?", "Iceland feature?", "Besonderheit Islands?", "Specificul Islandei?"], c: ["Gejzírek és vulkánok", "Geysers and volcanoes", "Geysire und Vulkane", "Gheizere și vulcani"], w1: ["Nincs ott jég", "No ice there", "Kein Eis", "Nu are gheață"], w2: ["Ott a legmelegebb", "Hottest place", "Am heißesten", "E cel mai cald loc"], w3: ["Csak erdő van", "Only forests", "Nur Wald", "Doar păduri"] },
      { q: ["Melyik város Stockholm?", "Stockholm capital of?", "Stockholm Hauptstadt von?", "Stockholm e capitala?"], c: ["Svédország", "Sweden", "Schweden", "Suedia"], w1: ["Norvégia", "Norway", "Norwegen", "Norvegia"], w2: ["Dánia", "Denmark", "Dänemark", "Danemarca"], w3: ["Finnország", "Finland", "Finnland", "Finlanda"] },
    ],
    typing: [
      { q: ["Norvégia fővárosa?", "Capital Norway?", "Hauptstadt?", "Capitala Norvegiei?"], a: ["Oslo", "Oslo", "Oslo", "Oslo"] },
      { q: ["Svédország fővárosa?", "Capital Sweden?", "Hauptstadt?", "Capitala Suediei?"], a: ["Stockholm", "Stockholm", "Stockholm", "Stockholm"] },
    ]
  },
  western_europe: {
    mcq: [
      { q: ["Franciaország fővárosa?", "Capital France?", "Hauptstadt?", "Capitala Franței?"], c: ["Párizs", "Paris", "Paris", "Paris"], w1: ["London", "London", "London", "Londra"], w2: ["Berlin", "Berlin", "Berlin", "Berlin"], w3: ["Madrid", "Madrid", "Madrid", "Madrid"] },
      { q: ["Hollandia jellemzője?", "Netherlands?", "Holland?", "Olanda?"], c: ["Mélyföld (polderek)", "Lowlands", "Tiefland", "Poldere"], w1: ["Hegyek", "Mountains", "Berge", "Munți"], w2: ["Vulkánok", "Volcanoes", "Vulkane", "Vulcani"], w3: ["Sivatag", "Desert", "Wüste", "Deșert"] },
      { q: ["Egyesült Királyság fővárosa?", "Capital UK?", "Hauptstadt?", "Capitala UK?"], c: ["London", "London", "London", "Londra"], w1: ["Párizs", "Paris", "Paris", "Paris"], w2: ["Dublin", "Dublin", "Dublin", "Dublin"], w3: ["Bécs", "Vienna", "Wien", "Viena"] },
      { q: ["Mi a 'Benelux'?", "Benelux?", "Benelux?", "Benelux?"], c: ["3 ország szövetsége", "3 countries", "3 Länder", "Uniune a 3 țări"], w1: ["Autómárka", "Car brand", "Auto", "Marcă auto"], w2: ["Hegység", "Mountain", "Berg", "Munte"], w3: ["Étel", "Food", "Essen", "Mâncare"] },
      { q: ["London folyója?", "London river?", "London Fluss?", "Râul Londrei?"], c: ["Temze", "Thames", "Themse", "Tamisa"], w1: ["Szajna", "Seine", "Seine", "Sena"], w2: ["Rajna", "Rhine", "Rhein", "Rin"], w3: ["Duna", "Danube", "Donau", "Dunărea"] },
    ],
    typing: [
      { q: ["Franciaország fővárosa?", "Capital France?", "Paris?", "Paris?"], a: ["Párizs", "Paris", "Paris", "Paris"] },
      { q: ["Egyesült Királyság fővárosa?", "Capital UK?", "London?", "London?"], a: ["London", "London", "London", "Londra"] },
    ]
  },
  southern_europe: {
    mcq: [
      { q: ["Olaszország fővárosa?", "Capital Italy?", "Hauptstadt?", "Capitala Italiei?"], c: ["Róma", "Rome", "Rom", "Roma"], w1: ["Milánó", "Milan", "Mailand", "Milano"], w2: ["Velence", "Venice", "Venedig", "Veneția"], w3: ["Nápoly", "Naples", "Neapel", "Napoli"] },
      { q: ["Görögország fővárosa?", "Capital Greece?", "Hauptstadt?", "Capitala Greciei?"], c: ["Athén", "Athens", "Athen", "Atena"], w1: ["Szparta", "Sparta", "Sparta", "Sparta"], w2: ["Kréta", "Crete", "Kreta", "Creta"], w3: ["Rodosz", "Rhodes", "Rhodos", "Rhodos"] },
      { q: ["Vulkán Olaszországban?", "Volcano Italy?", "Vulkan?", "Vulcan?"], c: ["Etna / Vezúv", "Etna", "Etna", "Etna"], w1: ["Izland", "Iceland", "Island", "Islanda"], w2: ["Fudzsi", "Fuji", "Fuji", "Fuji"], w3: ["Popo", "Popo", "Popo", "Popo"] },
      { q: ["Spanyolország fővárosa?", "Capital Spain?", "Hauptstadt?", "Capitala Spaniei?"], c: ["Madrid", "Madrid", "Madrid", "Madrid"], w1: ["Barcelona", "Barcelona", "Barcelona", "Barcelona"], w2: ["Lisszabon", "Lisbon", "Lissabon", "Lisabona"], w3: ["Sevilla", "Seville", "Sevilla", "Sevilla"] },
      { q: ["Mediterrán éghajlat?", "Med climate?", "Klima?", "Climă?"], c: ["Forró nyár, enyhe tél", "Hot summer, mild winter", "Heiß/Mild", "Vară caldă, iarnă blândă"], w1: ["Sarki", "Polar", "Polar", "Polară"], w2: ["Esőerdő", "Rainforest", "Regenwald", "Junglă"], w3: ["Sivatag", "Desert", "Wüste", "Deșert"] },
    ],
    typing: [
      { q: ["Olaszország fővárosa?", "Capital Italy?", "Rom?", "Roma?"], a: ["Róma", "Rome", "Rom", "Roma"] },
      { q: ["Görögország fővárosa?", "Capital Greece?", "Athen?", "Atena?"], a: ["Athén", "Athens", "Athen", "Atena"] },
    ]
  },
  eastern_europe: {
    mcq: [
      { q: ["Oroszország fővárosa?", "Capital Russia?", "Hauptstadt?", "Capitala Rusiei?"], c: ["Moszkva", "Moscow", "Moskau", "Moscova"], w1: ["Szentpétervár", "St. Petersburg", "Sankt Petersburg", "Sankt Petersburg"], w2: ["Kijev", "Kyiv", "Kiew", "Kiev"], w3: ["Varsó", "Warsaw", "Warschau", "Varșovia"] },
      { q: ["Ukrajna fővárosa?", "Capital Ukraine?", "Hauptstadt?", "Capitala Ucrainei?"], c: ["Kijev", "Kyiv", "Kiew", "Kiev"], w1: ["Odessza", "Odesa", "Odessa", "Odesa"], w2: ["Lviv", "Lviv", "Lwiw", "Liov"], w3: ["Harkiv", "Kharkiv", "Charkiw", "Harkov"] },
      { q: ["Hegység EU/Ázsia közt?", "Range EU/Asia?", "Gebirge?", "Munți?"], c: ["Urál", "Ural", "Ural", "Ural"], w1: ["Alpok", "Alps", "Alpen", "Alpi"], w2: ["Kárpátok", "Carpathians", "Karpaten", "Carpați"], w3: ["Andok", "Andes", "Anden", "Anzi"] },
      { q: ["Oroszország ázsiai része?", "Asian Russia?", "Sibirien?", "Siberia?"], c: ["Szibéria", "Siberia", "Sibirien", "Siberia"], w1: ["Tajga", "Taiga", "Taiga", "Taiga"], w2: ["Kaukázus", "Caucasus", "Kaukasus", "Caucaz"], w3: ["Moszkva", "Moscow", "Moskau", "Moscova"] },
      { q: ["Orosz írásmód?", "Russian alphabet?", "Alphabet?", "Alfabet?"], c: ["Cirill", "Cyrillic", "Kyrillisch", "Chirilic"], w1: ["Latin", "Latin", "Latein", "Latin"], w2: ["Kínai", "Chinese", "Chinesisch", "Chinez"], w3: ["Görög", "Greek", "Griechisch", "Grec"] },
    ],
    typing: [
      { q: ["Oroszország fővárosa?", "Capital Russia?", "Moskau?", "Moscova?"], a: ["Moszkva", "Moscow", "Moskau", "Moscova"] },
      { q: ["Ukrajna fővárosa?", "Capital Ukraine?", "Kiew?", "Kiev?"], a: ["Kijev", "Kyiv", "Kiew", "Kiev"] },
    ]
  },
};

  central_europe_neighbors: {
    mcq: [
      { q: ["Melyik ország közép-európai?", "Central EU country?", "Mitteleuropäisch?", "Țară din Europa Centrală?"], c: ["Magyarország, Németország", "Hungary, Germany", "Ungarn, Deutschland", "Ungaria, Germania"], w1: ["Spanyolország", "Spain", "Spanien", "Spania"], w2: ["Portugália", "Portugal", "Portugal", "Portugalia"], w3: ["Görögország", "Greece", "Griechenland", "Grecia"] },
      { q: ["Ausztria fővárosa?", "Capital Austria?", "Wien?", "Viena?"], c: ["Bécs", "Vienna", "Wien", "Viena"], w1: ["Budapest", "Budapest", "Budapest", "Budapesta"], w2: ["Prága", "Prague", "Prag", "Praga"], w3: ["Bern", "Bern", "Bern", "Berna"] },
      { q: ["Svájc jellemzője?", "Switzerland?", "Schweiz?", "Elveția?"], c: ["Alpok, bankok, csoki", "Alps, banks, chocolate", "Alpen, Banken", "Alpi, bănci, ciocolată"], w1: ["Tengerpart", "Coast", "Küste", "Litoral"], w2: ["Sivatag", "Desert", "Wüste", "Deșert"], w3: ["Fjordok", "Fjords", "Fjorde", "Fjorduri"] },
      { q: ["Lengyelország fővárosa?", "Capital Poland?", "Warschau?", "Varșovia?"], c: ["Varsó", "Warsaw", "Warschau", "Varșovia"], w1: ["Krakkó", "Krakow", "Krakau", "Cracovia"], w2: ["Prága", "Prague", "Prag", "Praga"], w3: ["Berlin", "Berlin", "Berlin", "Berlin"] },
      { q: ["Csehország fővárosa?", "Capital Czechia?", "Prag?", "Praga?"], c: ["Prága", "Prague", "Prag", "Praga"], w1: ["Pozsony", "Bratislava", "Pressburg", "Bratislava"], w2: ["Varsó", "Warsaw", "Warschau", "Varșovia"], w3: ["Bécs", "Vienna", "Wien", "Viena"] },
    ],
    typing: [
      { q: ["Ausztria fővárosa?", "Capital Austria?", "Wien?", "Viena?"], a: ["Bécs", "Vienna", "Wien", "Viena"] },
      { q: ["Lengyelország fővárosa?", "Capital Poland?", "Warschau?", "Varșovia?"], a: ["Varsó", "Warsaw", "Warschau", "Varsovia"] },
    ]
  },
  ocean_currents: {
    mcq: [
      { q: ["Mi az óceáni áramlás?", "Ocean current?", "Meeresströmung?", "Curent oceanic?"], c: ["Víz tömegének mozgása", "Movement of water", "Wasserbewegung", "Mișcarea apei"], w1: ["Hullámzás", "Waves", "Wellen", "Valuri"], w2: ["Eső", "Rain", "Regen", "Ploaie"], w3: ["Apály-dagály", "Tides", "Gezeiten", "Mareea"] },
      { q: ["Melyik áramlat melegíti Európát?", "Warms EU?", "Golfstrom?", "Curentul Golfului?"], c: ["Golf-áramlat", "Gulf Stream", "Golfstrom", "Curentul Golfului"], w1: ["Labrador", "Labrador", "Labrador", "Labrador"], w2: ["Humboldt", "Humboldt", "Humboldt", "Humboldt"], w3: ["Benguela", "Benguela", "Benguela", "Benguela"] },
      { q: ["Honnan indul a Golf-áramlat?", "Origin?", "Herkunft?", "Origine?"], c: ["Mexikói-öböl", "Gulf of Mexico", "Mexiko", "Golful Mexic"], w1: ["Északi-sark", "North Pole", "Nordpol", "Polul Nord"], w2: ["Antarktisz", "Antarctica", "Antarktis", "Antarctica"], w3: ["Európa", "Europe", "Europa", "Europa"] },
      { q: ["Hideg áramlat hatása?", "Cold current impact?", "Folge?", "Impact?"], c: ["Szárazság a parton", "Dryness on coast", "Trockenheit", "Secetă pe coastă"], w1: ["Sok eső", "Much rain", "Viel Regen", "Multe ploi"], w2: ["Hőség", "Heat", "Hitze", "Caniculă"], w3: ["Erdő", "Forest", "Wald", "Pădure"] },
      { q: ["Mi hajtja a felszíni áramlást?", "Drives them?", "Antrieb?", "Motor?"], c: ["Szelek", "Winds", "Winde", "Vânturile"], w1: ["Halak", "Fish", "Fische", "Peștii"], w2: ["Hajók", "Ships", "Schiffe", "Navele"], w3: ["Hold", "Moon", "Mond", "Luna"] },
    ],
    typing: [
      { q: ["Híres meleg áramlat?", "Warm current?", "Golfstrom?", "Curent cald?"], a: ["Golf-áramlat", "Gulf Stream", "Golfstrom", "Curentul Golfului"] },
      { q: ["Áramlat angolul?", "Current?", "Strömung?", "Curent (EN)?"], a: ["Current", "Current", "Strömung", "Curent"] },
    ]
  },
  rivers_life: {
    mcq: [
      { q: ["Folyó kezdete?", "Start?", "Quelle?", "Izvor?"], c: ["Forrás", "Source", "Quelle", "Izvor"], w1: ["Torkolat", "Mouth", "Mündung", "Vărsare"], w2: ["Kanyar", "Bend", "Kurve", "Cotitură"], w3: ["Híd", "Bridge", "Brücke", "Pod"] },
      { q: ["Folyó vége?", "End?", "Mündung?", "Sfârșit?"], c: ["Torkolat", "Mouth", "Mündung", "Vărsare"], w1: ["Forrás", "Source", "Quelle", "Izvor"], w2: ["Gát", "Dam", "Damm", "Baraj"], w3: ["Vízesés", "Waterfall", "Wasserfall", "Cascadă"] },
      { q: ["Európa leghosszabb folyója?", "Longest EU river?", "Wolga?", "Volga?"], c: ["Volga", "Volga", "Wolga", "Volga"], w1: ["Duna", "Danube", "Donau", "Dunărea"], w2: ["Rajna", "Rhine", "Rhein", "Rin"], w3: ["Temze", "Thames", "Themse", "Tamisa"] },
      { q: ["Folyókanyarulat neve?", "River bend?", "Mäander?", "Meandru?"], c: ["Meander", "Meander", "Mäander", "Meandru"], w1: ["Egyenes", "Straight", "Gerade", "Dreaptă"], w2: ["Hullám", "Wave", "Welle", "Val"], w3: ["Zubogó", "Rapids", "Stromschnelle", "Vârtej"] },
      { q: ["Duna torkolata?", "Danube mouth?", "Schwarzes Meer?", "Marea Neagră?"], c: ["Fekete-tenger", "Black Sea", "Schwarzes Meer", "Marea Neagră"], w1: ["Adria", "Adriatic", "Adria", "Marea Adriatică"], w2: ["Balti-tenger", "Baltic", "Ostsee", "Marea Baltică"], w3: ["Északi-tenger", "North Sea", "Nordsee", "Marea Nordului"] },
    ],
    typing: [
      { q: ["Folyó angolul?", "River?", "Fluss?", "Râu (EN)?"], a: ["River", "River", "Fluss", "Rau"] },
      { q: ["Duna németül?", "Danube DE?", "Donau?", "Dunărea DE?"], a: ["Donau", "Danube", "Donau", "Dunarea"] },
    ]
  },
  water_scarcity: {
    mcq: [
      { q: ["Mi a vízhiány?", "Water scarcity?", "Wassermangel?", "Lipsă apă?"], c: ["Kevés tiszta édesvíz", "Lack of fresh water", "Zu wenig Süßwasser", "Lipsă apă dulce"], w1: ["Sok eső", "Too much rain", "Zu viel Regen", "Prea multă ploaie"], w2: ["Csak sós víz", "Salt water only", "Nur Salzwasser", "Doar apă sărată"], w3: ["Jég", "Ice", "Eis", "Gheață"] },
      { q: ["Hogyan spórolhatunk?", "How save?", "Sparen?", "Economisire?"], c: ["Zuhanyozás fürdés helyett", "Shower vs bath", "Duschen statt Baden", "Duș în loc de baie"], w1: ["Folyassuk a csapot", "Let run", "Laufen lassen", "Lăsăm apa să curgă"], w2: ["Sok mosás", "More washing", "Viel waschen", "Mai multă spălare"], w3: ["Nincs rá szükség", "Not needed", "Nicht nötig", "Nu e nevoie"] },
      { q: ["Vízszennyezés forrása?", "Pollution source?", "Ursache?", "Sursă poluare?"], c: ["Vegyszerek, szemét", "Chemicals, trash", "Chemikalien, Müll", "Chimicale, gunoi"], w1: ["Halak", "Fish", "Fische", "Peștii"], w2: ["Kavicsok", "Stones", "Steine", "Pietrele"], w3: ["Szél", "Wind", "Wind", "Vântul"] },
    ],
    typing: [
      { q: ["Víz németül?", "Water DE?", "Wasser?", "Apă DE?"], a: ["Wasser", "Water", "Wasser", "Apa"] },
      { q: ["Sivatag angolul?", "Desert EN?", "Wüste?", "Deșert EN?"], a: ["Desert", "Desert", "Wüste", "Desert"] },
    ]
  },
};

  glaciers_ice: {
    mcq: [
      { q: ["Mi a gleccser?", "Glacier?", "Gletscher?", "Ghețar?"], c: ["Mozgó jégtömeg", "Moving ice mass", "Fließendes Eis", "Masă de gheață mobilă"], w1: ["Hóember", "Snowman", "Schneemann", "Om de zăpadă"], w2: ["Fagyott tó", "Frozen lake", "See", "Lac înghețat"], w3: ["Eső", "Rain", "Regen", "Ploaie"] },
      { q: ["Hol vannak gleccserek?", "Where are they?", "Wo?", "Unde?"], c: ["Magashegység, sarkok", "High mountains, poles", "Hochgebirge, Pole", "Munți înalți, poli"], w1: ["Sivatag", "Desert", "Wüste", "Deșert"], w2: ["Alföld", "Plain", "Tiefland", "Câmpie"], w3: ["Város", "City", "Stadt", "Oraș"] },
      { q: ["Gleccser vájta völgy?", "Glacial valley?", "U-Tal?", "Vale glaciară?"], c: ["Teknővölgy (U)", "U-valley", "Trogtal", "Vale în U"], w1: ["V-völgy", "V-valley", "Kerbtal", "Vale în V"], w2: ["Sík", "Plain", "Ebene", "Câmpie"], w3: ["Lyuk", "Hole", "Loch", "Gaură"] },
    ],
    typing: [
      { q: ["Gleccser angolul?", "Glacier EN?", "Gletscher?", "Ghețar EN?"], a: ["Glacier", "Glacier", "Gletscher", "Ghetar"] },
      { q: ["Jég németül?", "Ice DE?", "Eis?", "Gheață DE?"], a: ["Eis", "Ice", "Eis", "Gheata"] },
    ]
  },
  mediterranean_farming: {
    mcq: [
      { q: ["Mediterrán növény?", "Med plant?", "Pflanze?", "Plantă?"], c: ["Olajfa, citrusok", "Olive, citrus", "Oliven, Zitrus", "Măslin, citrice"], w1: ["Fenyő", "Pine", "Kiefer", "Pin"], w2: ["Búza", "Wheat", "Weizen", "Grâu"], w3: ["Krumpli", "Potato", "Kartoffel", "Cartof"] },
      { q: ["Mikor van az aratás?", "Harvest?", "Ernte?", "Recolta?"], c: ["Nyáron / Ősszel", "Summer / Autumn", "Sommer / Herbst", "Vară / Toamnă"], w1: ["Télen", "Winter", "Winter", "Iarnă"], w2: ["Csak éjjel", "Night", "Nacht", "Noaptea"], w3: ["Sohase", "Never", "Nie", "Niciodată"] },
    ],
    typing: [
      { q: ["Olajbogyó angolul?", "Olive EN?", "Olive?", "Măslină EN?"], a: ["Olive", "Olive", "Olive", "Maslina"] },
      { q: ["Citrom németül?", "Lemon DE?", "Zitrone?", "Lămâie DE?"], a: ["Zitrone", "Lemon", "Zitrone", "Lamaie"] },
    ]
  },
  livestock_farming: {
    mcq: [
      { q: ["Milyen állatot tartanak?", "Livestock?", "Vieh?", "Animale?"], c: ["Szarvasmarha, juh, sertés", "Cattle, sheep, pig", "Rinder, Schafe", "Bovine, oi, porci"], w1: ["Oroszlán", "Lion", "Löwe", "Leu"], w2: ["Zebra", "Zebra", "Zebra", "Zebră"], w3: ["Cápa", "Shark", "Hai", "Rechin"] },
      { q: ["Mi a legelő?", "Pasture?", "Weide?", "Pășune?"], c: ["Füves terület", "Grassy area", "Grasland", "Zonă cu iarbă"], w1: ["Út", "Road", "Straße", "Drum"], w2: ["Hegy", "Mountain", "Berg", "Munte"], w3: ["Város", "City", "Stadt", "Oraș"] },
    ],
    typing: [
      { q: ["Tehén németül?", "Cow DE?", "Kuh?", "Vacă DE?"], a: ["Kuh", "Cow", "Kuh", "Vaca"] },
      { q: ["Juh angolul?", "Sheep EN?", "Schaf?", "Oaie EN?"], a: ["Sheep", "Sheep", "Schaf", "Sheep"] },
    ]
  },
  organic_farming: {
    mcq: [
      { q: ["Mi az öko gazdálkodás?", "Organic?", "Öko?", "Eco?"], c: ["Vegyszermentes", "Chemical-free", "Ohne Chemie", "Fără chimicale"], w1: ["Mérgező", "Toxic", "Giftig", "Toxic"], w2: ["Gépi", "Machine", "Maschine", "Mașini"], w3: ["Nincs", "None", "Keines", "Nu există"] },
      { q: ["Környezetbarát?", "Eco-friendly?", "Umweltfreundlich?", "Ecologic?"], c: ["Igen", "Yes", "Ja", "Da"], w1: ["Nem", "No", "Nein", "Nu"], w2: ["Csak kicsit", "Maybe", "Vielleicht", "Poate"], w3: ["Sohase", "Never", "Nie", "Niciodată"] },
    ],
    typing: [
      { q: ["Bio angolul?", "Bio EN?", "Bio?", "Bio EN?"], a: ["Organic", "Organic", "Bio", "Organic"] },
      { q: ["Zöld németül?", "Green DE?", "Grün?", "Verde DE?"], a: ["Grün", "Green", "Grün", "Verde"] },
    ]
  },
};

// Map empty data for the rest to keep it valid
const REST_DATA = ["food_supply_chains", "mass_tourism", "alpine_tourism", "sustainable_travel", "city_trips"];
REST_DATA.forEach(key => { DATA_K6[key] = { mcq: [], typing: [] }; });

export const K6_GEOGRAPHIE_GENERATORS = {
  contour_lines: (lang: string, seed: number) => makeMCQs("contour_lines", lang, mulberry32(seed), DATA_K6.contour_lines.mcq),
  contour_lines_mcq: (lang: string, seed: number) => makeMCQs("contour_lines", lang, mulberry32(seed), DATA_K6.contour_lines.mcq),
  contour_lines_typing: (lang: string, seed: number) => makeTyping("contour_lines", lang, DATA_K6.contour_lines.typing),

  gps_gis_basics: (lang: string, seed: number) => makeMCQs("gps_gis_basics", lang, mulberry32(seed), DATA_K6.gps_gis_basics.mcq),
  gps_gis_basics_mcq: (lang: string, seed: number) => makeMCQs("gps_gis_basics", lang, mulberry32(seed), DATA_K6.gps_gis_basics.mcq),
  gps_gis_basics_typing: (lang: string, seed: number) => makeTyping("gps_gis_basics", lang, DATA_K6.gps_gis_basics.typing),

  atlas_usage: (lang: string, seed: number) => makeMCQs("atlas_usage", lang, mulberry32(seed), DATA_K6.atlas_usage.mcq),
  atlas_usage_mcq: (lang: string, seed: number) => makeMCQs("atlas_usage", lang, mulberry32(seed), DATA_K6.atlas_usage.mcq),
  atlas_usage_typing: (lang: string, seed: number) => makeTyping("atlas_usage", lang, DATA_K6.atlas_usage.typing),

  time_zones: (lang: string, seed: number) => makeMCQs("time_zones", lang, mulberry32(seed), DATA_K6.time_zones.mcq),
  time_zones_mcq: (lang: string, seed: number) => makeMCQs("time_zones", lang, mulberry32(seed), DATA_K6.time_zones.mcq),
  time_zones_typing: (lang: string, seed: number) => makeTyping("time_zones", lang, DATA_K6.time_zones.typing),

  tropical_zone: (lang: string, seed: number) => makeMCQs("tropical_zone", lang, mulberry32(seed), DATA_K6.tropical_zone.mcq),
  tropical_zone_mcq: (lang: string, seed: number) => makeMCQs("tropical_zone", lang, mulberry32(seed), DATA_K6.tropical_zone.mcq),
  tropical_zone_typing: (lang: string, seed: number) => makeTyping("tropical_zone", lang, DATA_K6.tropical_zone.typing),

  subtropical_zone: (lang: string, seed: number) => makeMCQs("subtropical_zone", lang, mulberry32(seed), DATA_K6.subtropical_zone.mcq),
  subtropical_zone_mcq: (lang: string, seed: number) => makeMCQs("subtropical_zone", lang, mulberry32(seed), DATA_K6.subtropical_zone.mcq),
  subtropical_zone_typing: (lang: string, seed: number) => makeTyping("subtropical_zone", lang, DATA_K6.subtropical_zone.typing),

  temperate_zone: (lang: string, seed: number) => makeMCQs("temperate_zone", lang, mulberry32(seed), DATA_K6.temperate_zone.mcq),
  temperate_zone_mcq: (lang: string, seed: number) => makeMCQs("temperate_zone", lang, mulberry32(seed), DATA_K6.temperate_zone.mcq),
  temperate_zone_typing: (lang: string, seed: number) => makeTyping("temperate_zone", lang, DATA_K6.temperate_zone.typing),

  polar_zone: (lang: string, seed: number) => makeMCQs("polar_zone", lang, mulberry32(seed), DATA_K6.polar_zone.mcq),
  polar_zone_mcq: (lang: string, seed: number) => makeMCQs("polar_zone", lang, mulberry32(seed), DATA_K6.polar_zone.mcq),
  polar_zone_typing: (lang: string, seed: number) => makeTyping("polar_zone", lang, DATA_K6.polar_zone.typing),
};

// Placeholder for remaining generators
const keys = ["northern_europe", "western_europe", "southern_europe", "eastern_europe", "central_europe_neighbors", "ocean_currents", "rivers_life", "water_scarcity", "glaciers_ice", "mediterranean_farming", "livestock_farming", "organic_farming", "food_supply_chains", "mass_tourism", "alpine_tourism", "sustainable_travel", "city_trips"];
keys.forEach(k => {
  (K6_GEOGRAPHIE_GENERATORS as any)[k] = (lang: string, seed: number) => makeMCQs(k, lang, mulberry32(seed), DATA_K6[k].mcq);
  (K6_GEOGRAPHIE_GENERATORS as any)[`${k}_mcq`] = (lang: string, seed: number) => makeMCQs(k, lang, mulberry32(seed), DATA_K6[k].mcq);
  (K6_GEOGRAPHIE_GENERATORS as any)[`${k}_typing`] = (lang: string, seed: number) => makeTyping(k, lang, DATA_K6[k].typing);
});
