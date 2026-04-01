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

// ─── DATA SOURCES K7 ────────────────────────────────────────────────────────

const DATA_K7: any = {
  plate_tectonics: {
    mcq: [
      { q: ["Ki dolgozta ki a kontinensvándorlás elméletét?", "Continental drift theory?", "Alfred Wegener?", "Cine a propus deriva continentelor?"], c: ["Alfred Wegener", "Alfred Wegener", "Alfred Wegener", "Alfred Wegener"], w1: ["Einstein", "Einstein", "Einstein", "Einstein"], w2: ["Darwin", "Darwin", "Darwin", "Darwin"], w3: ["Newton", "Newton", "Newton", "Newton"] },
      { q: ["Mi a Pangea?", "What is Pangaea?", "Pangäa?", "Ce este Pangea?"], c: ["Szuperkontinens", "Supercontinent", "Urkontinent", "Supercontinent"], w1: ["Vulkán", "Volcano", "Vulkan", "Vulcan"], w2: ["Folyó", "River", "Fluss", "Râu"], w3: ["Sziget", "Island", "Insel", "Insulă"] },
    ],
    typing: [{ q: ["Szuperkontinens neve?", "Supercontinent name?", "Urkontinent?", "Nume supercontinent?"], a: ["Pangea", "Pangaea", "Pangäa", "Pangea"] }]
  },
  earthquakes_measuring: {
    mcq: [
      { q: ["Földrengés mérője?", "Quake meter?", "Seismograph?", "Instrument cutremur?"], c: ["Szeizmográf", "Seismograph", "Seismograph", "Seismograf"], w1: ["Barométer", "Barometer", "Barometer", "Barometru"], w2: ["Hőmérő", "Thermometer", "Thermometer", "Termometru"], w3: ["Iránytű", "Compass", "Kompass", "Busolă"] },
    ],
    typing: [{ q: ["Mérőeszköz neve?", "Instrument name?", "Seismograph?", "Nume instrument?"], a: ["Szeizmográf", "Seismograph", "Seismograph", "Seismograf"] }]
  },
  volcanism_types: {
    mcq: [
      { q: ["Mi a magma?", "What is magma?", "Magma?", "Magma?"], c: ["Föld alatti kőzetolvadék", "Molten rock", "Gesteinsschmelze", "Rocă topită"], w1: ["Víz", "Water", "Wasser", "Apă"], w2: ["Hamu", "Ash", "Asche", "Cenușă"], w3: ["Jég", "Ice", "Eis", "Gheață"] },
    ],
    typing: [{ q: ["Kifolyt kőzet?", "Lava name?", "Lava?", "Rocă scursă?"], a: ["Láva", "Lava", "Lava", "Lava"] }]
  },
  mountain_formation: {
    mcq: [
      { q: ["Hegységképződés módja?", "Mountain formation?", "Gebirgsbildung?", "Formarea munților?"], c: ["Gyűrődés és vetődés", "Folding and faulting", "Faltung und Hebung", "Încrețire și faliere"], w1: ["Csak eső", "Only rain", "Nur Regen", "Doar ploaie"], w2: ["Csak szél", "Only wind", "Nur Wind", "Doar vânt"], w3: ["Nincs rá mód", "No way", "Keine", "Nu există"] },
    ],
    typing: [{ q: ["Gyűrődés domború része?", "Fold top part?", "Sattel?", "Partea de sus a cutei?"], a: ["Nyereg", "Anticline", "Sattel", "Anticlinal"] }]
  },
  atmosphere_layers: {
    mcq: [
      { q: ["Legalsó légköri réteg?", "Lowest layer?", "Troposphäre?", "Cel mai jos strat?"], c: ["Troposzféra", "Troposphere", "Troposphäre", "Troposfera"], w1: ["Sztratoszféra", "Stratosphere", "Stratosphäre", "Stratosfera"], w2: ["Mezoszféra", "Mesosphere", "Mesosphäre", "Mezosfera"], w3: ["Exoszféra", "Exosphere", "Exosphäre", "Exosfera"] },
    ],
    typing: [{ q: ["Ózonréteg helye?", "Ozone layer where?", "Stratosphäre?", "Unde e ozonul?"], a: ["Sztratoszféra", "Stratosphere", "Stratosphäre", "Stratosfera"] }]
  },
  global_wind_systems: {
    mcq: [
      { q: ["Trópusi szél?", "Tropical wind?", "Passat?", "Vânt tropical?"], c: ["Passzát", "Trade wind", "Passat", "Alizeu"], w1: ["Nyugati szél", "Westerly", "Westwind", "Vânt de vest"], w2: ["Sarki szél", "Polar wind", "Polarwind", "Vânt polar"], w3: ["Szellő", "Breeze", "Brise", "Briză"] },
    ],
    typing: [{ q: ["Trópusi szél neve?", "Trade wind name?", "Passat?", "Nume vânt tropical?"], a: ["Passzát", "Trade wind", "Passat", "Alizeu"] }]
  },
  high_low_pressure: {
    mcq: [
      { q: ["Alacsony nyomás?", "Low pressure?", "Tiefdruck?", "Presiune mică?"], c: ["Ciklon", "Cyclone", "Tief", "Ciclon"], w1: ["Anticiklon", "Anticyclone", "Hoch", "Anticiclon"], w2: ["Szélcsend", "Calm", "Windstille", "Acalmie"], w3: ["Napsütés", "Sunshine", "Sonne", "Soare"] },
    ],
    typing: [{ q: ["Magas nyomás neve?", "High pressure term?", "Hochdruck?", "Presiune mare?"], a: ["Anticiklon", "Anticyclone", "Hochdruck", "Anticiclon"] }]
  },
  climate_graphs_analysis: {
    mcq: [
      { q: ["Diagram oszlopa?", "Bar chart shows?", "Säule?", "Coloana?"], c: ["Csapadék", "Precipitation", "Niederschlag", "Precipitații"], w1: ["Hő", "Temperature", "Temperatur", "Temperatură"], w2: ["Szél", "Wind", "Wind", "Vânt"], w3: ["Hegy", "Mountain", "Berg", "Munte"] },
    ],
    typing: [{ q: ["Diagram neve?", "Graph name?", "Klimadiagramm?", "Nume diagramă?"], a: ["Klímadiagram", "Climate graph", "Klimadiagramm", "Climadiagrama"] }]
  },
  population_density_global: {
    mcq: [
      { q: ["Népsűrűség?", "Density?", "Dichte?", "Densitate?"], c: ["Fő / km2", "People per km2", "Einwohner/km2", "Locuitori/km2"], w1: ["Csak km", "Only km", "Nur km", "Doar km"], w2: ["Csak fő", "Only people", "Nur Köpfe", "Doar persoane"], w3: ["Szín", "Color", "Farbe", "Culoare"] },
    ],
    typing: [{ q: ["Népsűrűség mértékegysége?", "Density unit?", "km2?", "Unitate?"], a: ["km2", "km2", "km2", "km2"] }]
  },
  demographic_transition: {
    mcq: [
      { q: ["Természetes szaporodás?", "Natural growth?", "Wachstum?", "Spor natural?"], c: ["Születés - halálozás", "Births minus deaths", "Geburt - Tod", "Natalitate - mortalitate"], w1: ["Csak születés", "Only births", "Nur Geburt", "Doar natalitate"], w2: ["Vándorlás", "Migration", "Wanderung", "Migrație"], w3: ["Alvás", "Sleep", "Schlaf", "Somn"] },
    ],
    typing: [{ q: ["Születések száma?", "Birth rate term?", "Geburtenrate?", "Natalitate?"], a: ["Natalitás", "Birthrate", "Geburtenrate", "Natalitate"] }]
  },
  migration_push_pull: {
    mcq: [
      { q: ["Push tényező?", "Push factor?", "Push?", "Push?"], c: ["Háború", "War", "Krieg", "Război"], w1: ["Béke", "Peace", "Friede", "Pace"], w2: ["Munka", "Job", "Arbeit", "Muncă"], w3: ["Játék", "Game", "Spiel", "Joc"] },
    ],
    typing: [{ q: ["Vándorlás angolul?", "Migration?", "Migration?", "Migrație?"], a: ["Migration", "Migration", "Migration", "Migratie"] }]
  },
  urbanization_megacities: {
    mcq: [
      { q: ["Megaváros lakói?", "Megacity pop?", "Mio Einwohner?", "Locuitori megaoraș?"], c: ["10 millió felett", "Over 10 million", "Über 10 Mio.", "Peste 10 mil."], w1: ["100 fő", "100 people", "100 Köpfe", "100 persoane"], w2: ["1 millió", "1 million", "1 Mio.", "1 milion"], w3: ["Csak ezer", "Only thousand", "Tausend", "O mie"] },
    ],
    typing: [{ q: ["Város angolul?", "City?", "Stadt?", "Oraș?"], a: ["City", "City", "Stadt", "Oras"] }]
  },
  usa_landscapes: {
    mcq: [
      { q: ["USA hegysége?", "USA range?", "Gebirge USA?", "Munți SUA?"], c: ["Sziklás-hegység", "Rocky Mountains", "Rockies", "Munții Stâncoși"], w1: ["Alpok", "Alps", "Alpen", "Alpi"], w2: ["Urál", "Ural", "Ural", "Ural"], w3: ["Andok", "Andes", "Anden", "Anzi"] },
    ],
    typing: [{ q: ["Nagy amerikai folyó?", "Great US river?", "Mississippi?", "Fluviu mare SUA?"], a: ["Mississippi", "Mississippi", "Mississippi", "Mississippi"] }]
  },
  belt_system_agriculture: {
    mcq: [
      { q: ["Corn Belt?", "Corn Belt?", "Maisgürtel?", "Zona porumbului?"], c: ["Kukorica", "Corn", "Mais", "Porumb"], w1: ["Búza", "Wheat", "Weizen", "Grâu"], w2: ["Hal", "Fish", "Fisch", "Pește"], w3: ["Arany", "Gold", "Gold", "Aur"] },
    ],
    typing: [{ q: ["Corn Belt magyarul?", "Corn Belt HU?", "Mais?", "Zona porumbului?"], a: ["Kukoricaövezet", "Corn belt", "Maisgürtel", "Zona porumbului"] }]
  },
  silicon_valley_high_tech: {
    mcq: [
      { q: ["Szilícium-völgy?", "Silicon Valley?", "Tech?", "Tech?"], c: ["IT központ", "IT center", "IT-Zentrum", "Centru IT"], w1: ["Búzaföld", "Wheat field", "Weizen", "Lan grâu"], w2: ["Bánya", "Mine", "Bergbau", "Mină"], w3: ["Kikötő", "Port", "Hafen", "Port"] },
    ],
    typing: [{ q: ["Tech völgy neve?", "Tech valley?", "Silicon Valley?", "Valea tech?"], a: ["Szilícium-völgy", "Silicon Valley", "Silicon Valley", "Silicon Valley"] }]
  },
  canada_overview: {
    mcq: [
      { q: ["Kanada fővárosa?", "Ottawa?", "Ottawa?", "Ottawa?"], c: ["Ottawa", "Ottawa", "Ottawa", "Ottawa"], w1: ["Toronto", "Toronto", "Toronto", "Toronto"], w2: ["Párizs", "Paris", "Paris", "Paris"], w3: ["Berlin", "Berlin", "Berlin", "Berlin"] },
    ],
    typing: [{ q: ["Kanada jelképe?", "Canada symbol?", "Ahorn?", "Simbolul Canadei?"], a: ["Juharlevél", "Maple leaf", "Ahornblatt", "Frunza de artar"] }]
  },
  monsoon_mechanics: {
    mcq: [
      { q: ["Monszun?", "Monsoon?", "Monsun?", "Muson?"], c: ["Évszakos szél", "Seasonal wind", "Jahreszeitenwind", "Vânt sezonier"], w1: ["Állandó", "Constant", "Beständig", "Permanent"], w2: ["Hóvihar", "Snowstorm", "Schnee", "Viscol"], w3: ["Csend", "Silence", "Stille", "Liniște"] },
    ],
    typing: [{ q: ["Monszun angolul?", "Monsoon?", "Monsun?", "Muson?"], a: ["Monsoon", "Monsoon", "Monsun", "Monsoon"] }]
  },
  china_rise_economy: {
    mcq: [
      { q: ["Kína lakossága?", "China pop?", "Mrd. Menschen?", "Pop. Chinei?"], c: ["1.4 milliárd", "1.4 billion", "1,4 Mrd.", "1.4 miliarde"], w1: ["1 millió", "1 million", "1 Mio.", "1 milion"], w2: ["100 millió", "100 million", "100 Mio.", "100 milioane"], w3: ["10 milliárd", "10 billion", "10 Mrd.", "10 miliarde"] },
    ],
    typing: [{ q: ["Kína fővárosa?", "Beijing?", "Peking?", "Capitala Chinei?"], a: ["Peking", "Beijing", "Peking", "Beijing"] }]
  },
  india_population_dev: {
    mcq: [
      { q: ["India fővárosa?", "New Delhi?", "Neu-Delhi?", "New Delhi?"], c: ["Új-Delhi", "New Delhi", "Neu-Delhi", "New Delhi"], w1: ["Mumbai", "Mumbai", "Mumbai", "Mumbai"], w2: ["Peking", "Beijing", "Peking", "Beijing"], w3: ["Tokió", "Tokyo", "Tokio", "Tokyo"] },
    ],
    typing: [{ q: ["Szent folyó?", "Sacred river?", "Ganges?", "Fluviu sfânt?"], a: ["Gangesz", "Ganges", "Ganges", "Gange"] }]
  },
  japan_hazards_high_tech: {
    mcq: [
      { q: ["Japán veszély?", "Japan hazard?", "Naturgefahr?", "Pericol Japonia?"], c: ["Földrengés", "Earthquake", "Erdbeben", "Cutremur"], w1: ["Sivatag", "Desert", "Wüste", "Deșert"], w2: ["Hóhiány", "No snow", "Kein Schnee", "Fără zăpadă"], w3: ["Áradás", "Flood", "Flut", "Inundație"] },
    ],
    typing: [{ q: ["Japán fővárosa?", "Tokyo?", "Tokio?", "Capitala Japoniei?"], a: ["Tokió", "Tokyo", "Tokio", "Tokyo"] }]
  },
  global_warming_basics: {
    mcq: [
      { q: ["Felmelegedés oka?", "Warming cause?", "Ursache?", "Cauza?"], c: ["Üvegházhatás", "Greenhouse effect", "Treibhauseffekt", "Efect de seră"], w1: ["Hideg", "Cold", "Kälte", "Frig"], w2: ["Hold", "Moon", "Mond", "Luna"], w3: ["Csillagok", "Stars", "Sterne", "Stele"] },
    ],
    typing: [{ q: ["CO2 angolul?", "CO2 name?", "CO2?", "CO2?"], a: ["Carbon dioxide", "Carbon dioxide", "CO2", "Dioxid de carbon"] }]
  },
  tropical_rainforest_destruction: {
    mcq: [
      { q: ["Miért vágják az erdőt?", "Why deforestation?", "Abholzung?", "Defrișări?"], c: ["Faipar, mezőgazdaság", "Wood industry, agri", "Holz, Agri", "Ind. lemnului, agri"], w1: ["Játék", "Fun", "Spaß", "Joacă"], w2: ["Hó", "Snow", "Schnee", "Zăpadă"], w3: ["Víz", "Water", "Wasser", "Apă"] },
    ],
    typing: [{ q: ["Esőerdő németül?", "Rainforest DE?", "Regenwald?", "Pădure DE?"], a: ["Regenwald", "Rainforest", "Regenwald", "Regenwald"] }]
  },
  desertification_sahel: {
    mcq: [
      { q: ["Elsivatagosodás?", "Desertification?", "Desertifikation?", "Deșertificarea?"], c: ["Termőföld pusztulása", "Land degradation", "Degradierung", "Degradarea solului"], w1: ["Áradás", "Flood", "Flut", "Inundație"], w2: ["Város", "City", "Stadt", "Oraș"], w3: ["Erdő", "Forest", "Wald", "Pădure"] },
    ],
    typing: [{ q: ["Sivatag angolul?", "Desert?", "Wüste?", "Deșert?"], a: ["Desert", "Desert", "Wüste", "Desert"] }]
  },
  ocean_pollution_plastic: {
    mcq: [
      { q: ["Fő szennyező?", "Main pollutant?", "Plastik?", "Poluant?"], c: ["Műanyag", "Plastic", "Plastik", "Plastic"], w1: ["Hal", "Fish", "Fisch", "Pește"], w2: ["Homok", "Sand", "Sand", "Nisip"], w3: ["Víz", "Water", "Wasser", "Apă"] },
    ],
    typing: [{ q: ["Műanyag angolul?", "Plastic?", "Plastik?", "Plastic?"] , a: ["Plastic", "Plastic", "Plastik", "Plastic"] }]
  },

  asia_overview_k7: {
    mcq: [
      { q: ["Melyik a legnagyobb kontinens?", "Largest continent?", "Größter Kontinent?", "Cel mai mare continent?"], c: ["Ázsia", "Asia", "Asien", "Asia"], w1: ["Európa", "Europe", "Europa", "Europa"], w2: ["Afrika", "Africa", "Afrika", "Africa"], w3: ["Ausztrália", "Australia", "Australien", "Australia"] },
      { q: ["Melyik hegység az ázsiai magashegység?", "Asian high mountain range?", "Asiatisches Hochgebirge?", "Lanț muntos asiatic?"], c: ["Himalája", "Himalayas", "Himalaya", "Himalaya"], w1: ["Andok", "Andes", "Anden", "Anzi"], w2: ["Alpok", "Alps", "Alpen", "Alpi"], w3: ["Urál", "Ural", "Ural", "Ural"] },
      { q: ["Melyik ország Ázsiában van?", "Country in Asia?", "Land in Asien?", "Țară din Asia?"], c: ["Kína", "China", "China", "China"], w1: ["Brazília", "Brazil", "Brasilien", "Brazilia"], w2: ["Franciaország", "France", "Frankreich", "Franța"], w3: ["Kanada", "Canada", "Kanada", "Canada"] },
      { q: ["Ázsia melyik része sűrűn lakott?", "Densely populated Asia?", "Dicht besiedelt?", "Partea dens populată?"], c: ["Kelet- és Dél-Ázsia", "East and South Asia", "Ost- und Südasien", "Asia de Est și Sud"], w1: ["Antarktisz", "Antarctica", "Antarktis", "Antarctica"], w2: ["Óceánok", "Oceans", "Ozeane", "Oceane"], w3: ["Sarkok", "Poles", "Pole", "Poli"] },
    ],
    typing: [
      { q: ["Ázsia angolul?", "Asia EN?", "Asien?", "Asia EN?"], a: ["Asia", "Asia", "Asien", "Asia"] },
      { q: ["Himalája angolul?", "Himalayas EN?", "Himalaya?", "Himalaya EN?"], a: ["Himalayas", "Himalayas", "Himalaya", "Himalaya"] },
    ]
  },
  earthquakes_tectonics: {
    mcq: [
      { q: ["Mi okozza a földrengést?", "What causes earthquakes?", "Was verursacht Erdbeben?", "Ce provoacă cutremure?"], c: ["Lemezek mozgása", "Plate movement", "Plattenbewegung", "Mișcarea plăcilor"], w1: ["Eső", "Rain", "Regen", "Ploaie"], w2: ["Hó", "Snow", "Schnee", "Zăpadă"], w3: ["Napsütés", "Sunlight", "Sonne", "Soare"] },
      { q: ["Mivel mérjük a rengést?", "Measure earthquake?", "Wie misst man?", "Cu ce măsurăm?"], c: ["Szeizmográf", "Seismograph", "Seismograph", "Seismograf"], w1: ["Hőmérő", "Thermometer", "Thermometer", "Termometru"], w2: ["Iránytű", "Compass", "Kompass", "Busolă"], w3: ["Mérleg", "Scale", "Waage", "Cântar"] },
      { q: ["Mi a Richter-skála?", "Richter scale?", "Richterskala?", "Scara Richter?"], c: ["Erősséget jelző skála", "Magnitude scale", "Stärkeskala", "Scară de magnitudine"], w1: ["Szélirány", "Wind direction", "Windrichtung", "Direcția vântului"], w2: ["Hőmérséklet", "Temperature", "Temperatur", "Temperatură"], w3: ["Mélység", "Depth", "Tiefe", "Adâncime"] },
      { q: ["Mit okozhat egy tengeralatti földrengés?", "Undersea quake effect?", "Folge?", "Efect?"], c: ["Cunamit", "Tsunami", "Tsunami", "Tsunami"], w1: ["Sivatagot", "Desert", "Wüste", "Deșert"], w2: ["Felhőt", "Cloud", "Wolke", "Nor"], w3: ["Erdőt", "Forest", "Wald", "Pădure"] },
    ],
    typing: [
      { q: ["Földrengés angolul?", "Earthquake EN?", "Erdbeben?", "Cutremur EN?"], a: ["Earthquake", "Earthquake", "Erdbeben", "Cutremur"] },
      { q: ["Lemez angolul?", "Plate EN?", "Platte?", "Placă EN?"], a: ["Plate", "Plate", "Platte", "Placa"] },
    ]
  },
  asia_economy_k7: {
    mcq: [
      { q: ["Melyik ország a gyárvilág egyik központja?", "Factory world?", "Weltfabrik?", "Centru industrial?"], c: ["Kína", "China", "China", "China"], w1: ["Izland", "Iceland", "Island", "Islanda"], w2: ["Peru", "Peru", "Peru", "Peru"], w3: ["Finnország", "Finland", "Finnland", "Finlanda"] },
      { q: ["Melyik ázsiai ország erős IT-ban?", "Strong IT country in Asia?", "IT-Land?", "Țară IT?"], c: ["India", "India", "Indien", "India"], w1: ["Németország", "Germany", "Deutschland", "Germania"], w2: ["Chile", "Chile", "Chile", "Chile"], w3: ["Marokkó", "Morocco", "Marokko", "Maroc"] },
      { q: ["Melyik ország ismert high-tech iparról?", "High-tech Asia?", "Hightech-Land?", "Țară high-tech?"], c: ["Japán", "Japan", "Japan", "Japonia"], w1: ["Nepál", "Nepal", "Nepal", "Nepal"], w2: ["Mali", "Mali", "Mali", "Mali"], w3: ["Ecuador", "Ecuador", "Ecuador", "Ecuador"] },
      { q: ["Mi jellemző sok ázsiai nagyvárosra?", "Asian cities?", "Asiatische Städte?", "Orașe asiatice?"], c: ["Megavárosok", "Megacities", "Megastädte", "Megapoli"], w1: ["Sivatagi falvak", "Desert villages", "Wüstendörfer", "Sate deșert"], w2: ["Fjordok", "Fjords", "Fjorde", "Fjorduri"], w3: ["Gleccserek", "Glaciers", "Gletscher", "Ghețari"] },
    ],
    typing: [
      { q: ["Kína angolul?", "China EN?", "China?", "China EN?"], a: ["China", "China", "China", "China"] },
      { q: ["Japán angolul?", "Japan EN?", "Japan?", "Japonia EN?"], a: ["Japan", "Japan", "Japan", "Japan"] },
    ]
  },
  monsoon_system: {
    mcq: [
      { q: ["Mi a monszun?", "What is a monsoon?", "Was ist der Monsun?", "Ce este musonul?"], c: ["Évszakos szélrendszer", "Seasonal wind system", "Jahreszeitwind", "Sistem de vânt sezonier"], w1: ["Állandó jég", "Permanent ice", "Dauerfrost", "Gheață permanentă"], w2: ["Hegység", "Mountain", "Gebirge", "Munți"], w3: ["Tengeráram", "Sea current", "Meeresstrom", "Curent marin"] },
      { q: ["Mikor hoz esőt a monszun?", "When does it bring rain?", "Wann Regen?", "Când aduce ploaie?"], c: ["Nyáron", "In summer", "Im Sommer", "Vara"], w1: ["Télen", "In winter", "Im Winter", "Iarna"], w2: ["Ősszel", "In autumn", "Im Herbst", "Toamna"], w3: ["Mindig ugyanúgy", "Always same", "Immer gleich", "Mereu la fel"] },
      { q: ["A monszun iránya nyáron?", "Summer monsoon direction?", "Richtung im Sommer?", "Direcția vara?"], c: ["Tenger felől a szárazföldre", "Sea to land", "Vom Meer aufs Land", "Dinspre mare spre uscat"], w1: ["Felfelé", "Up", "Nach oben", "În sus"], w2: ["Levegőbe", "Into air", "In die Luft", "În aer"], w3: ["Körbe-körbe", "Around", "Im Kreis", "În cerc"] },
      { q: ["Mi történik télen?", "Winter monsoon?", "Was im Winter?", "Iarna ce se întâmplă?"], c: ["Iránya gyakran megfordul", "Direction reverses", "Richtung kehrt um", "Direcția se inversează"], w1: ["Megáll a Föld", "Earth stops", "Erde stoppt", "Pământul se oprește"], w2: ["Eltűnik a szél", "Wind disappears", "Wind weg", "Dispare vântul"], w3: ["Mindig esik hó", "Always snow", "Immer Schnee", "Ninge mereu"] },
    ],
    typing: [
      { q: ["Monszun angolul?", "Monsoon EN?", "Monsun?", "Muson EN?"], a: ["Monsoon", "Monsoon", "Monsun", "Monsoon"] },
      { q: ["Évszakos szél angolul?", "Seasonal wind EN?", "Jahreszeitenwind?", "Vânt sezonier EN?"], a: ["Seasonal wind", "Seasonal wind", "Jahreszeitenwind", "Vant sezonier"] },
    ]
  },
  ring_of_fire_detailed: {
    mcq: [
      { q: ["Hol húzódik a Tűzgyűrű?", "Where is the Ring of Fire?", "Wo liegt der Feuerring?", "Unde e cercul de foc?"], c: ["A Csendes-óceán körül", "Around Pacific", "Um den Pazifik", "În jurul Pacificului"], w1: ["Az Atlanti-óceánban", "Atlantic only", "Im Atlantik", "În Atlantic"], w2: ["Európa közepén", "Center of Europe", "In Europa", "În Europa"], w3: ["A sarkokon", "At poles", "An den Polen", "La poli"] },
      { q: ["Mit okoz a Tűzgyűrű?", "What happens there?", "Was passiert dort?", "Ce provoacă?"], c: ["Sok földrengést és vulkánt", "Many quakes and volcanoes", "Viele Beben/Vulkane", "Multe cutremure și vulcani"], w1: ["Csak esőt", "Only rain", "Nur Regen", "Doar ploaie"], w2: ["Hóviharokat", "Snowstorms", "Schneestürme", "Viscole"], w3: ["Aszályt", "Drought", "Dürre", "Secetă"] },
      { q: ["Melyik ország része a Tűzgyűrűnek?", "Ring of Fire country?", "Welches Land?", "Țară din inel?"], c: ["Japán", "Japan", "Japan", "Japonia"], w1: ["Írország", "Ireland", "Irland", "Irlanda"], w2: ["Norvégia", "Norway", "Norwegen", "Norvegia"], w3: ["Egyiptom", "Egypt", "Ägypten", "Egipt"] },
      { q: ["Miért gyakoriak a vulkánok ott?", "Why many volcanoes?", "Warum viele Vulkane?", "De ce sunt mulți vulcani?"], c: ["Lemezek találkoznak", "Plates meet", "Platten treffen aufeinander", "Plăcile se întâlnesc"], w1: ["Mert hideg van", "Because cold", "Weil es kalt ist", "Pentru că e frig"], w2: ["Mert nincs víz", "No water", "Kein Wasser", "Fără apă"], w3: ["Mert lapos", "Flat", "Flach", "Plat"] },
    ],
    typing: [
      { q: ["Tűzgyűrű angolul?", "Ring of Fire EN?", "Feuerring?", "Cercul de foc EN?"], a: ["Ring of Fire", "Ring of Fire", "Ring of Fire", "Cercul de foc"] },
      { q: ["Csendes-óceán angolul?", "Pacific Ocean EN?", "Pazifik?", "Oceanul Pacific?"], a: ["Pacific Ocean", "Pacific Ocean", "Pazifik", "Oceanul Pacific"] },
    ]
  }
};

export const K7_GEOGRAPHIE_GENERATORS: any = {};
const keys = ["plate_tectonics", "earthquakes_measuring", "volcanism_types", "mountain_formation", "atmosphere_layers", "global_wind_systems", "high_low_pressure", "climate_graphs_analysis", "population_density_global", "demographic_transition", "migration_push_pull", "urbanization_megacities", "usa_landscapes", "belt_system_agriculture", "silicon_valley_high_tech", "canada_overview", "monsoon_mechanics", "china_rise_economy", "india_population_dev", "japan_hazards_high_tech", "global_warming_basics", "tropical_rainforest_destruction", "desertification_sahel", "ocean_pollution_plastic"];

keys.forEach(k => {
  const gen = (lang: string, seed: number) => makeMCQs(k, lang, mulberry32(seed), DATA_K7[k].mcq);
  K7_GEOGRAPHIE_GENERATORS[k] = gen;
  K7_GEOGRAPHIE_GENERATORS[`${k}_mcq`] = gen;
  K7_GEOGRAPHIE_GENERATORS[`${k}_typing`] = (lang: string, seed: number) => makeTyping(k, lang, DATA_K7[k].typing);
});

Object.assign(K7_GEOGRAPHIE_GENERATORS, {
  asia_overview_k7: (lang: string, seed: number) => makeMCQs("asia_overview_k7", lang, mulberry32(seed), DATA_K7.asia_overview_k7.mcq),
  asia_overview_k7_mcq: (lang: string, seed: number) => makeMCQs("asia_overview_k7", lang, mulberry32(seed), DATA_K7.asia_overview_k7.mcq),
  asia_overview_k7_typing: (lang: string, seed: number) => makeTyping("asia_overview_k7", lang, DATA_K7.asia_overview_k7.typing),

  earthquakes_tectonics: (lang: string, seed: number) => makeMCQs("earthquakes_tectonics", lang, mulberry32(seed), DATA_K7.earthquakes_tectonics.mcq),
  earthquakes_tectonics_mcq: (lang: string, seed: number) => makeMCQs("earthquakes_tectonics", lang, mulberry32(seed), DATA_K7.earthquakes_tectonics.mcq),
  earthquakes_tectonics_typing: (lang: string, seed: number) => makeTyping("earthquakes_tectonics", lang, DATA_K7.earthquakes_tectonics.typing),

  asia_economy_k7: (lang: string, seed: number) => makeMCQs("asia_economy_k7", lang, mulberry32(seed), DATA_K7.asia_economy_k7.mcq),
  asia_economy_k7_mcq: (lang: string, seed: number) => makeMCQs("asia_economy_k7", lang, mulberry32(seed), DATA_K7.asia_economy_k7.mcq),
  asia_economy_k7_typing: (lang: string, seed: number) => makeTyping("asia_economy_k7", lang, DATA_K7.asia_economy_k7.typing),

  monsoon_system: (lang: string, seed: number) => makeMCQs("monsoon_system", lang, mulberry32(seed), DATA_K7.monsoon_system.mcq),
  monsoon_system_mcq: (lang: string, seed: number) => makeMCQs("monsoon_system", lang, mulberry32(seed), DATA_K7.monsoon_system.mcq),
  monsoon_system_typing: (lang: string, seed: number) => makeTyping("monsoon_system", lang, DATA_K7.monsoon_system.typing),

  ring_of_fire_detailed: (lang: string, seed: number) => makeMCQs("ring_of_fire_detailed", lang, mulberry32(seed), DATA_K7.ring_of_fire_detailed.mcq),
  ring_of_fire_detailed_mcq: (lang: string, seed: number) => makeMCQs("ring_of_fire_detailed", lang, mulberry32(seed), DATA_K7.ring_of_fire_detailed.mcq),
  ring_of_fire_detailed_typing: (lang: string, seed: number) => makeTyping("ring_of_fire_detailed", lang, DATA_K7.ring_of_fire_detailed.typing),
});
