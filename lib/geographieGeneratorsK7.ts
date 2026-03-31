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
};

export const K7_GEOGRAPHIE_GENERATORS: any = {};
const keys = ["plate_tectonics", "earthquakes_measuring", "volcanism_types", "mountain_formation", "atmosphere_layers", "global_wind_systems", "high_low_pressure", "climate_graphs_analysis", "population_density_global", "demographic_transition", "migration_push_pull", "urbanization_megacities", "usa_landscapes", "belt_system_agriculture", "silicon_valley_high_tech", "canada_overview", "monsoon_mechanics", "china_rise_economy", "india_population_dev", "japan_hazards_high_tech", "global_warming_basics", "tropical_rainforest_destruction", "desertification_sahel", "ocean_pollution_plastic"];

keys.forEach(k => {
  const gen = (lang: string, seed: number) => makeMCQs(k, lang, mulberry32(seed), DATA_K7[k].mcq);
  K7_GEOGRAPHIE_GENERATORS[k] = gen;
  K7_GEOGRAPHIE_GENERATORS[`${k}_mcq`] = gen;
  K7_GEOGRAPHIE_GENERATORS[`${k}_typing`] = (lang: string, seed: number) => makeTyping(k, lang, DATA_K7[k].typing);
});
