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

// ─── DATA SOURCES K8 ────────────────────────────────────────────────────────

const DATA_K8: any = {
  weathering_erosion: {
    mcq: [
      { q: ["Mi az aprózódás?", "What is weathering?", "Verwitterung?", "Ce este meteorizarea?"], c: ["Kőzetek szétesése fizikai hatásra", "Rocks breaking physically", "Mechanische Zerstörung", "Dezagregarea rocilor"], w1: ["Csak kémiai oldódás", "Chemical only", "Chemisch", "Doar chimică"], w2: ["Új hegyek születése", "Mountain birth", "Gebirgsbildung", "Formarea munților"], w3: ["Vulkánkitörés", "Volcano", "Vulkanismus", "Vulcanism"] },
      { q: ["Mi okozza a fagyaprózódást?", "Frost weathering cause?", "Frostsprengung?", "Cauza îngheț-dezghețului?"], c: ["Megfagyó víz tágulása", "Freezing water expands", "Gefrierendes Wasser", "Dilatarea apei înghețate"], w1: ["A Nap melege", "Sun heat", "Sonnenhitze", "Căldura soarelui"], w2: ["Erős szél", "Strong wind", "Wind", "Vântul puternic"], w3: ["Halak úszása", "Fish", "Fische", "Peștii"] },
    ],
    typing: [{ q: ["Aprózódás angolul?", "Weathering?", "Verwitterung?", "Meteorizare?"], a: ["Weathering", "Weathering", "Verwitterung", "Meteorizare"] }]
  },
  fluvial_landforms: {
    mcq: [
      { q: ["Milyen völgyet váj a folyó?", "River valley shape?", "Flusstal?", "Forma văii râului?"], c: ["V alakú völgy", "V-shaped valley", "Kerbtal (V-Tal)", "Vale în V"], w1: ["U alakú völgy", "U-shaped", "Trogtal", "Vale în U"], w2: ["Sík terület", "Plain", "Ebene", "Câmpie"], w3: ["Lyuk", "Hole", "Loch", "Gaură"] },
    ],
    typing: [{ q: ["Folyó vájta völgy?", "V-valley?", "Kerbtal?", "Valea în V?"], a: ["V-völgy", "V-valley", "Kerbtal", "Valea in V"] }]
  },
  glacial_landforms: {
    mcq: [
      { q: ["Milyen völgyet váj a gleccser?", "Glacial valley shape?", "Gletschertal?", "Valea glaciară?"], c: ["U alakú völgy", "U-shaped valley", "Trogtal (U-Tal)", "Vale în U"], w1: ["V alakú völgy", "V-shaped", "Kerbtal", "Vale în V"], w2: ["Kerek tó", "Round lake", "See", "Lac rotund"], w3: ["Sivatag", "Desert", "Wüste", "Deșert"] },
    ],
    typing: [{ q: ["Gleccser völgye?", "U-valley?", "Trogtal?", "Valea în U?"], a: ["U-völgy", "U-valley", "Trogtal", "Valea in U"] }]
  },
  aeolian_landforms: {
    mcq: [
      { q: ["Mi az eolikus forma?", "Aeolian form?", "Äolische Formen?", "Formă eoliană?"], c: ["Szél által épített/pusztított", "Wind-built/destroyed", "Vom Wind geformt", "Creată de vânt"], w1: ["Víz által", "Water-made", "Vom Wasser", "Creată de apă"], w2: ["Ember által", "Man-made", "Menschlich", "Creată de om"], w3: ["Holdi", "Lunar", "Mond", "Lunară"] },
    ],
    typing: [{ q: ["Szél angolul?", "Wind?", "Wind?", "Vânt?"], a: ["Wind", "Wind", "Wind", "Vant"] }]
  },
  economic_sectors: {
    mcq: [
      { q: ["Hány gazdasági szektor van?", "How many sectors?", "Wirtschaftssektoren?", "Câte sectoare?"], c: ["3 (vagy 4)", "3 (or 4)", "3 (oder 4)", "3 (sau 4)"], w1: ["1", "1", "1", "1"], w2: ["10", "10", "10", "10"], w3: ["100", "100", "100", "100"] },
      { q: ["Mi a tercier szektor?", "Tertiary sector?", "Tertiärer Sektor?", "Sectorul terțiar?"], c: ["Szolgáltatások", "Services", "Dienstleistungen", "Servicii"], w1: ["Mezőgazdaság", "Agriculture", "Landwirtschaft", "Agricultură"], w2: ["Ipar", "Industry", "Industrie", "Industrie"], w3: ["Bányászat", "Mining", "Bergbau", "Minerit"] },
    ],
    typing: [{ q: ["Szolgáltatások szektora?", "Service sector?", "Dienstleistungen?", "Sector servicii?"], a: ["Harmadlagos", "Tertiary", "Tertiär", "Tertiar"] }]
  },
  globalization_impact: {
    mcq: [
      { q: ["Mi a globalizáció?", "Globalization?", "Globalisierung?", "Globalizarea?"], c: ["Világméretű egységesedés", "Worldwide integration", "Weltweite Verflechtung", "Integrare mondială"], w1: ["Elszigetelődés", "Isolation", "Isolation", "Izolare"], w2: ["Csak egy falu", "Only a village", "Nur ein Dorf", "Doar un sat"], w3: ["Játék", "Game", "Spiel", "Joc"] },
    ],
    typing: [{ q: ["Globális angolul?", "Global?", "Global?", "Global?"], a: ["Global", "Global", "Global", "Global"] }]
  },
  world_trade_routes: {
    mcq: [
      { q: ["Melyik fontos tengeri csatorna?", "Trade canal?", "Seekanal?", "Canal maritim?"], c: ["Panama, Szuez", "Panama, Suez", "Panama, Suez", "Panama, Suez"], w1: ["Duna", "Danube", "Donau", "Dunărea"], w2: ["Rajna", "Rhine", "Rhein", "Rin"], w3: ["Tisza", "Tisza", "Theiß", "Tisa"] },
    ],
    typing: [{ q: ["Egyiptomi csatorna?", "Egypt canal?", "Suezkanal?", "Canal în Egipt?"], a: ["Szuez", "Suez", "Suez", "Suez"] }]
  },
  locational_factors: {
    mcq: [
      { q: ["Mi a telephelyválasztó tényező?", "Locational factor?", "Standortfaktor?", "Factor de localizare?"], c: ["Munkaerő, nyersanyag", "Labor, raw materials", "Arbeitskräfte, Rohstoffe", "Forța de muncă"], w1: ["Szín", "Color", "Farbe", "Culoare"], w2: ["Név", "Name", "Name", "Nume"], w3: ["Szerencse", "Luck", "Glück", "Noroc"] },
    ],
    typing: [{ q: ["Helyszín angolul?", "Location?", "Standort?", "Locație?"], a: ["Location", "Location", "Standort", "Locatie"] }]
  },
  amazon_rainforest_use: {
    mcq: [
      { q: ["Hol van az Amazonas?", "Where is Amazon?", "Amazonas?", "Unde e Amazonul?"], c: ["Dél-Amerika", "South America", "Südamerika", "America de Sud"], w1: ["Afrika", "Africa", "Afrika", "Africa"], w2: ["Ázsia", "Asia", "Asien", "Asia"], w3: ["Európa", "Europe", "Europa", "Europa"] },
    ],
    typing: [{ q: ["Amazonas országa?", "Amazon country?", "Brasilien?", "Țara Amazonului?"], a: ["Brazília", "Brazil", "Brasilien", "Brazilia"] }]
  },
  brazil_economic_power: {
    mcq: [
      { q: ["Mi Brazília fővárosa?", "Capital Brazil?", "Brasilia?", "Capitala Braziliei?"], c: ["Brazíliaváros", "Brasilia", "Brasilia", "Brasilia"], w1: ["Rio de Janeiro", "Rio", "Rio", "Rio"], w2: ["Sao Paulo", "Sao Paulo", "Sao Paulo", "Sao Paulo"], w3: ["Buenos Aires", "Buenos Aires", "Buenos Aires", "Buenos Aires"] },
    ],
    typing: [{ q: ["Híres brazil város?", "Famous Brazil city?", "Rio?", "Oraș faimos BR?"], a: ["Rio de Janeiro", "Rio", "Rio", "Rio de Janeiro"] }]
  },
  andes_mining_climate: {
    mcq: [
      { q: ["Hegység Dél-Amerikában?", "South America range?", "Anden?", "Munți în Am. de Sud?"], c: ["Andok", "Andes", "Anden", "Anzi"], w1: ["Alpok", "Alps", "Alpen", "Alpi"], w2: ["Himalája", "Himalayas", "Himalaya", "Himalaya"], w3: ["Urál", "Ural", "Ural", "Ural"] },
    ],
    typing: [{ q: ["Andok angolul?", "Andes?", "Anden?", "Anzi?"], a: ["Andes", "Andes", "Anden", "Andes"] }]
  },
  central_america_islands: {
    mcq: [
      { q: ["Melyik tenger van itt?", "Central America sea?", "Karibik?", "Ce mare e aici?"], c: ["Karib-tenger", "Caribbean Sea", "Karibik", "Marea Caraibelor"], w1: ["Balti-tenger", "Baltic", "Ostsee", "Marea Baltică"], w2: ["Fekete-tenger", "Black Sea", "Schwarzes Meer", "Marea Neagră"], w3: ["Északi-tenger", "North Sea", "Nordsee", "Marea Nordului"] },
    ],
    typing: [{ q: ["Szigetek neve itt?", "Islands name?", "Karibik?", "Numele insulelor?"], a: ["Karib-szigetek", "Caribbean", "Karibik", "Caraibe"] }]
  },
  africa_climate_zones: {
    mcq: [
      { q: ["Afrika legnagyobb sivataga?", "Largest desert?", "Sahara?", "Cel mai mare deșert?"], c: ["Szahara", "Sahara", "Sahara", "Sahara"], w1: ["Góbi", "Gobi", "Gobi", "Gobi"], w2: ["Kalahári", "Kalahari", "Kalahari", "Kalahari"], w3: ["Atacama", "Atacama", "Atacama", "Atacama"] },
    ],
    typing: [{ q: ["Sivatag Afrikában?", "Desert in Africa?", "Sahara?", "Deșert în Africa?"], a: ["Szahara", "Sahara", "Sahara", "Sahara"] }]
  },
  hunger_resource_conflict: {
    mcq: [
      { q: ["Miért van éhezés néhol?", "Why hunger?", "Hunger?", "De ce foame?"], c: ["Szárazság és háborúk", "Drought and wars", "Dürre und Krieg", "Secetă și războaie"], w1: ["Túl sok étel", "Too much food", "Zu viel Essen", "Prea multă hrană"], w2: ["Csak játék", "Game", "Spiel", "Joc"], w3: ["Nincs rá ok", "No reason", "Kein Grund", "Niciun motiv"] },
    ],
    typing: [{ q: ["Éhezés angolul?", "Hunger?", "Hunger?", "Foame?"], a: ["Hunger", "Hunger", "Hunger", "Foame"] }]
  },
  developing_aid_projects: {
    mcq: [
      { q: ["Mi a fejlesztési segély?", "What is aid?", "Entwicklungshilfe?", "Ajutor dezvoltare?"], c: ["Szegény országok támogatása", "Support for poor states", "Unterstützung", "Sprijin pt. țări sărace"], w1: ["Csak kölcsön", "Loan only", "Kredit", "Doar împrumut"], w2: ["Háború", "War", "Krieg", "Război"], w3: ["Semmi", "Nothing", "Nichts", "Nimic"] },
    ],
    typing: [{ q: ["Segély angolul?", "Aid?", "Hilfe?", "Ajutor??"], a: ["Aid", "Aid", "Hilfe", "Ajutor"] }]
  },
  africa_megacities_dev: {
    mcq: [
      { q: ["Híres afrikai nagyváros?", "African megacity?", "Kairo?", "Megaoraș african?"], c: ["Kairó, Lagos", "Cairo, Lagos", "Kairo, Lagos", "Cairo, Lagos"], w1: ["Berlin", "Berlin", "Berlin", "Berlin"], w2: ["London", "London", "London", "Londra"], w3: ["Párizs", "Paris", "Paris", "Paris"] },
    ],
    typing: [{ q: ["Egyiptom fővárosa?", "Capital Egypt?", "Kairo?", "Capitala Egiptului?"], a: ["Kairó", "Cairo", "Kairo", "Cairo"] }]
  },
  australia_outback_resources: {
    mcq: [
      { q: ["Mi az 'Outback'?", "Outback?", "Outback?", "Outback?"], c: ["Ausztrália belső, száraz része", "Interior dry part", "Innere Trockengebiet", "Interiorul uscat"], w1: ["Tengerpart", "Coast", "Küste", "Litoral"], w2: ["Hegység", "Mountain", "Gebirge", "Munți"], w3: ["Városközpont", "City center", "Stadtzentrum", "Centru oraș"] },
    ],
    typing: [{ q: ["Ausztrália állata?", "AU animal?", "Känguru?", "Animal AU?"], a: ["Kenguru", "Kangaroo", "Känguru", "Cangur"] }]
  },
  oceania_islands_threat: {
    mcq: [
      { q: ["Mi fenyegeti Óceániát?", "Threat to Oceania?", "Gefahr?", "Pericol?"], c: ["Tengerszint emelkedés", "Sea level rise", "Meeresspiegelanstieg", "Ridicarea mării"], w1: ["Hóvihar", "Snowstorm", "Schnee", "Viscol"], w2: ["Hideg", "Cold", "Kälte", "Frig"], w3: ["Semmi", "Nothing", "Nichts", "Nimic"] },
    ],
    typing: [{ q: ["Sziget angolul?", "Island?", "Insel?", "Insulă?"], a: ["Island", "Island", "Insel", "Insula"] }]
  },
  great_barrier_reef_env: {
    mcq: [
      { q: ["Mi a Nagy-korallzátony?", "Barrier Reef?", "Korallenriff?", "Marea Barieră?"], c: ["Hatalmas korallépítmény", "Huge coral reef", "Großes Riff", "Recif de corali uriaș"], w1: ["Egy nagy híd", "A bridge", "Brücke", "Un pod"], w2: ["Egy sivatag", "A desert", "Wüste", "Un deșert"], w3: ["Egy hegység", "A mountain", "Gebirge", "Un munte"] },
    ],
    typing: [{ q: ["Korall angolul?", "Coral?", "Koralle?", "Coral?"], a: ["Coral", "Coral", "Koralle", "Coral"] }]
  },
  antarctica_research: {
    mcq: [
      { q: ["Ki él az Antarktiszon?", "Who lives there?", "Wer lebt dort?", "Cine trăiește acolo?"], c: ["Kutatók időszakosan", "Researchers", "Forscher", "Cercetători"], w1: ["Indiánok", "Indians", "Indianer", "Indieni"], w2: ["Majmok", "Monkeys", "Affen", "Maimuțe"], w3: ["Senki", "No one", "Niemand", "Nimeni"] },
    ],
    typing: [{ q: ["Pingvin angolul?", "Penguin?", "Pinguin?", "Pinguin?"], a: ["Penguin", "Penguin", "Pinguin", "Pinguin"] }]
  },
  energy_transition_global: {
    mcq: [
      { q: ["Mi az energiahordozó váltás?", "Energy transition?", "Energiewende?", "Tranziția energetica?"], c: ["Megújuló energiák használata", "Using renewables", "Erneuerbare Energien", "Folosirea regenerabilelor"], w1: ["Csak szén", "Only coal", "Nur Kohle", "Doar cărbune"], w2: ["Csak olaj", "Only oil", "Nur Öl", "Doar petrol"], w3: ["Nincs váltás", "No change", "Keine", "Nicio schimbare"] },
    ],
    typing: [{ q: ["Napenergia angolul?", "Solar energy?", "Solar?", "Energie solară?"], a: ["Solar energy", "Solar energy", "Solarenergie", "Solar energy"] }]
  },
  sustainable_development_goals: {
    mcq: [
      { q: ["Mik azok a fenntarthatósági célok?", "What are SDGs?", "Nachhaltigkeitsziele?", "Ce sunt SDG-urile?"], c: ["A jövőért kitűzött feladatok", "Goals for the future", "Zukunftssicherung", "Obiective pt. viitor"], w1: ["Csak álmok", "Only dreams", "Träume", "Doar vise"], w2: ["Rossz dolgok", "Bad things", "Schlecht", "Lucruri rele"], w3: ["Nincs ilyen", "None", "Keine", "Nu există"] },
    ],
    typing: [{ q: ["Jövő angolul?", "Future?", "Zukunft?", "Viitor?"], a: ["Future", "Future", "Zukunft", "Viitor"] }]
  },
  digitalization_world: {
    mcq: [
      { q: ["Mi a digitalizáció?", "Digitalization?", "Digitalisierung?", "Digitalizarea?"], c: ["Digitális technikák terjedése", "Spread of digital tech", "Vernetzung", "Tehnologii digitale"], w1: ["Régi írógépek", "Old typewriters", "Schreibmaschinen", "Mașini de scris vechi"], w2: ["Csak papír", "Only paper", "Nur Papier", "Doar hârtie"], w3: ["Nincs ilyen", "None", "Nichts", "Nimic"] },
    ],
    typing: [{ q: ["Internet angolul?", "Internet?", "Internet?", "Internet?"], a: ["Internet", "Internet", "Internet", "Internet"] }]
  },
  future_cities_planning: {
    mcq: [
      { q: ["Milyen a jövő városa?", "Future city?", "Stadt der Zukunft?", "Orașul viitorului?"], c: ["Zöld és okos", "Green and smart", "Grün und smart", "Verde și smart"], w1: ["Sötét és poros", "Dark and dusty", "Dunkel und staubig", "Întunecat és prăfuit"], w2: ["Csak beton", "Only concrete", "Nur Beton", "Doar beton"], w3: ["Nincs város", "No cities", "Keine Städte", "Nu sunt orașe"] },
    ],
    typing: [{ q: ["Okos város (angolul)?", "Smart city?", "Smart City?", "Oraș smart?"], a: ["Smart City", "Smart City", "Smart City", "Smart City"] }]
  },

  global_development_hdi: {
    mcq: [
      { q: ["Mit jelent az HDI?", "What is HDI?", "Was ist der HDI?", "Ce înseamnă HDI?"], c: ["Emberi fejlettségi mutató", "Human Development Index", "Index der menschlichen Entwicklung", "Indicele dezvoltării umane"], w1: ["Hőmérséklet", "Heat index", "Temperaturindex", "Indice de căldură"], w2: ["Hajózási térkép", "Ship map", "Schiffskarte", "Hartă navală"], w3: ["Hegylánc", "Mountain chain", "Gebirge", "Lanț muntos"] },
      { q: ["Mit mér az HDI?", "What does HDI measure?", "Was misst der HDI?", "Ce măsoară HDI?"], c: ["Élettartam, oktatás, jövedelem", "Life expectancy, education, income", "Leben, Bildung, Einkommen", "Speranță de viață, educație, venit"], w1: ["Csak időjárás", "Only weather", "Nur Wetter", "Doar vremea"], w2: ["Csak terület", "Only area", "Nur Fläche", "Doar suprafața"], w3: ["Csak népesség", "Only population", "Nur Bevölkerung", "Doar populația"] },
      { q: ["Melyik ország szokott magas HDI-t kapni?", "High HDI country?", "Welches Land?", "Țară cu HDI mare?"], c: ["Norvégia", "Norway", "Norwegen", "Norvegia"], w1: ["Szomália", "Somalia", "Somalia", "Somalia"], w2: ["Chad", "Chad", "Tschad", "Ciad"], w3: ["Niger", "Niger", "Niger", "Niger"] },
      { q: ["Mit jelez az alacsony HDI?", "Low HDI means?", "Niedriger HDI?", "HDI mic?"], c: ["Fejlesztési lemaradást", "Development gap", "Entwicklungsrückstand", "Întârziere în dezvoltare"], w1: ["Túl sok hegyet", "Too many mountains", "Zu viele Berge", "Prea mulți munți"], w2: ["Kék tengert", "Blue sea", "Blaues Meer", "Mare albastră"], w3: ["Nagyvárost", "Big city", "Großstadt", "Oraș mare"] },
    ],
    typing: [
      { q: ["HDI angolul?", "HDI EN?", "HDI?", "HDI EN?"], a: ["Human Development Index", "Human Development Index", "HDI", "Indicele dezvoltarii umane"] },
      { q: ["Fejlettség angolul?", "Development EN?", "Entwicklung?", "Dezvoltare EN?"], a: ["Development", "Development", "Entwicklung", "Dezvoltare"] },
    ]
  },
  ecological_footprint_k8: {
    mcq: [
      { q: ["Mit jelent az ökológiai lábnyom?", "Ecological footprint?", "Ökologischer Fußabdruck?", "Amprentă ecologică?"], c: ["Az erőforrás-felhasználás mértékét", "Resource use size", "Ressourcenverbrauch", "Mărimea folosirii resurselor"], w1: ["Csak a cipő méretét", "Shoe size", "Schuhgröße", "Mărimea pantofului"], w2: ["Az út hosszát", "Road length", "Weglänge", "Lungimea drumului"], w3: ["A születési számot", "Birth count", "Geburtenzahl", "Număr de nașteri"] },
      { q: ["Hogyan csökkenthető a lábnyom?", "How reduce footprint?", "Wie verringern?", "Cum reducem?"], c: ["Kevesebb energia és hús", "Less energy and meat", "Weniger Energie und Fleisch", "Mai puțină energie și carne"], w1: ["Több szemét", "More trash", "Mehr Müll", "Mai mult gunoi"], w2: ["Folyó víz", "Running water", "Laufendes Wasser", "Apă curentă"], w3: ["Nagyobb autó", "Bigger car", "Größeres Auto", "Mașină mai mare"] },
      { q: ["Mi növeli a lábnyomot?", "What increases footprint?", "Was erhöht ihn?", "Ce îl crește?"], c: ["Hosszú szállítás", "Long transport", "Langer Transport", "Transport lung"], w1: ["Kerékpár", "Bicycle", "Fahrrad", "Bicicletă"], w2: ["Újrahasználat", "Reuse", "Wiederverwenden", "Reutilizare"], w3: ["Takarékosság", "Saving", "Sparen", "Economisire"] },
      { q: ["Melyik a kisebb lábnyom?", "Smaller footprint?", "Kleinerer Fußabdruck?", "Care e mai mică?"], c: ["Helyi termék", "Local product", "Lokales Produkt", "Produs local"], w1: ["Távoli import", "Imported far away", "Fernimport", "Import îndepărtat"], w2: ["Folyamatos pazarlás", "Waste", "Verschwendung", "Risipă"], w3: ["Egyszer használatos", "Single-use", "Einweg", "De unică folosință"] },
    ],
    typing: [
      { q: ["Lábnyom angolul?", "Footprint EN?", "Fußabdruck?", "Amprentă EN?"], a: ["Footprint", "Footprint", "Fußabdruck", "Amprenta"] },
      { q: ["Erőforrás angolul?", "Resource EN?", "Ressource?", "Resursă EN?"], a: ["Resource", "Resource", "Ressource", "Resursa"] },
    ]
  },
  urbanization_process: {
    mcq: [
      { q: ["Mi az urbanizáció?", "Urbanization?", "Urbanisierung?", "Urbanizare?"], c: ["Városiasodás", "City growth", "Verstädterung", "Urbanizare"], w1: ["Erdősödés", "Forestation", "Aufforstung", "Împădurire"], w2: ["Elsivatagosodás", "Desertification", "Verödung", "Deșertificare"], w3: ["Jégkorszak", "Ice age", "Eiszeit", "Era glaciară"] },
      { q: ["Mi nő meg urbanizációnál?", "What grows?", "Was wächst?", "Ce crește?"], c: ["Városok lakossága", "City population", "Stadtbevölkerung", "Populația urbană"], w1: ["Sivatag", "Desert", "Wüste", "Deșert"], w2: ["Fjellek", "Mountains", "Berge", "Munți"], w3: ["Polcok", "Shelves", "Regale", "Rafturi"] },
      { q: ["Mi az egyik következmény?", "One consequence?", "Eine Folge?", "O consecință?"], c: ["Megavárosok", "Megacities", "Megastädte", "Megapolisuri"], w1: ["Kevesebb ember", "Fewer people", "Weniger Menschen", "Mai puțini oameni"], w2: ["Kevesebb út", "Fewer roads", "Weniger Straßen", "Mai puține drumuri"], w3: ["Kevesebb ház", "Fewer houses", "Weniger Häuser", "Mai puține case"] },
      { q: ["Mitől gyorsul az urbanizáció?", "What speeds it up?", "Was beschleunigt?", "Ce o accelerează?"], c: ["Munka és szolgáltatások", "Jobs and services", "Arbeit und Dienste", "Locuri de muncă și servicii"], w1: ["Hideg hó", "Cold snow", "Kalter Schnee", "Zăpadă rece"], w2: ["Sivatagi homok", "Desert sand", "Wüstensand", "Nisip deșert"], w3: ["A sarki fény", "Aurora", "Nordlicht", "Aurora"] },
    ],
    typing: [
      { q: ["Városiasodás angolul?", "Urbanization EN?", "Verstädterung?", "Urbanizare EN?"], a: ["Urbanization", "Urbanization", "Verstädterung", "Urbanizare"] },
      { q: ["Megaváros angolul?", "Megacity EN?", "Megastadt?", "Megapolis EN?"], a: ["Megacity", "Megacity", "Megastadt", "Megacity"] },
    ]
  },
};

export const K8_GEOGRAPHIE_GENERATORS: any = {};
const keys = ["weathering_erosion", "fluvial_landforms", "glacial_landforms", "aeolian_landforms", "economic_sectors", "globalization_impact", "world_trade_routes", "locational_factors", "amazon_rainforest_use", "brazil_economic_power", "andes_mining_climate", "central_america_islands", "africa_climate_zones", "hunger_resource_conflict", "developing_aid_projects", "africa_megacities_dev", "australia_outback_resources", "ocean_currents", "rivers_life", "water_scarcity", "glaciers_ice", "energy_transition_global", "sustainable_development_goals", "digitalization_world", "future_cities_planning"];

keys.forEach(k => {
  const gen = (lang: string, seed: number) => makeMCQs(k, lang, mulberry32(seed), DATA_K8[k].mcq);
  K8_GEOGRAPHIE_GENERATORS[k] = gen;
  K8_GEOGRAPHIE_GENERATORS[`${k}_mcq`] = gen;
  K8_GEOGRAPHIE_GENERATORS[`${k}_typing`] = (lang: string, seed: number) => makeTyping(k, lang, DATA_K8[k].typing);
});

Object.assign(K8_GEOGRAPHIE_GENERATORS, {
  globalization_impact_k8: K8_GEOGRAPHIE_GENERATORS.globalization_impact,
  globalization_impact_k8_mcq: K8_GEOGRAPHIE_GENERATORS.globalization_impact_mcq,
  globalization_impact_k8_typing: K8_GEOGRAPHIE_GENERATORS.globalization_impact_typing,

  great_barrier_reef_env: (lang: string, seed: number) => makeMCQs("great_barrier_reef_env", lang, mulberry32(seed), DATA_K8.great_barrier_reef_env.mcq),
  great_barrier_reef_env_mcq: (lang: string, seed: number) => makeMCQs("great_barrier_reef_env", lang, mulberry32(seed), DATA_K8.great_barrier_reef_env.mcq),
  great_barrier_reef_env_typing: (lang: string, seed: number) => makeTyping("great_barrier_reef_env", lang, DATA_K8.great_barrier_reef_env.typing),

  renewable_energy_k8: K8_GEOGRAPHIE_GENERATORS.energy_transition_global,
  renewable_energy_k8_mcq: K8_GEOGRAPHIE_GENERATORS.energy_transition_global_mcq,
  renewable_energy_k8_typing: K8_GEOGRAPHIE_GENERATORS.energy_transition_global_typing,

  global_development_hdi: (lang: string, seed: number) => makeMCQs("global_development_hdi", lang, mulberry32(seed), DATA_K8.global_development_hdi.mcq),
  global_development_hdi_mcq: (lang: string, seed: number) => makeMCQs("global_development_hdi", lang, mulberry32(seed), DATA_K8.global_development_hdi.mcq),
  global_development_hdi_typing: (lang: string, seed: number) => makeTyping("global_development_hdi", lang, DATA_K8.global_development_hdi.typing),

  ecological_footprint_k8: (lang: string, seed: number) => makeMCQs("ecological_footprint_k8", lang, mulberry32(seed), DATA_K8.ecological_footprint_k8.mcq),
  ecological_footprint_k8_mcq: (lang: string, seed: number) => makeMCQs("ecological_footprint_k8", lang, mulberry32(seed), DATA_K8.ecological_footprint_k8.mcq),
  ecological_footprint_k8_typing: (lang: string, seed: number) => makeTyping("ecological_footprint_k8", lang, DATA_K8.ecological_footprint_k8.typing),

  urbanization_process: (lang: string, seed: number) => makeMCQs("urbanization_process", lang, mulberry32(seed), DATA_K8.urbanization_process.mcq),
  urbanization_process_mcq: (lang: string, seed: number) => makeMCQs("urbanization_process", lang, mulberry32(seed), DATA_K8.urbanization_process.mcq),
  urbanization_process_typing: (lang: string, seed: number) => makeTyping("urbanization_process", lang, DATA_K8.urbanization_process.typing),
});
