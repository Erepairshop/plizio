import type { POI } from "./poi";

export const kosovoCountry: POI = {
  id: "country-kosovo",
  type: "country",
  parent: "europe",
  coords: [20.903, 42.6026],
  name: {
    de: "Kosovo",
    hu: "Koszovó",
    ro: "Kosovo",
    en: "Kosovo"
  },
  description: {
    de: "Ein junger Staat im Balkan, bekannt für seine kulturelle Vielfalt.",
    hu: "Fiatal állam a Balkánon, amely kulturális sokszínűségéről ismert.",
    ro: "Un stat tânăr din Balcani, cunoscut pentru diversitatea sa culturală.",
    en: "A young state in the Balkans, known for its cultural diversity."
  },
  descriptionAdvanced: {
    de: "Kosovo ist ein Binnenstaat auf dem Westbalkan, der 2008 seine Unabhängigkeit erklärte.",
    hu: "Koszovó egy tengerpart nélküli állam a Nyugat-Balkánon, amely 2008-ban kiáltotta ki függetlenségét.",
    ro: "Kosovo este un stat fără ieșire la mare din Balcanii de Vest, care și-a declarat independența în 2008.",
    en: "Kosovo is a landlocked country in the Western Balkans that declared independence in 2008."
  },
  facts: {
    de: ["Pristina ist die Hauptstadt."],
    hu: ["Pristina a főváros."],
    ro: ["Pristina este capitala."],
    en: ["Pristina is the capital."]
  }
};

export const kosovoPois: POI[] = [
  {
    id: "xk-pristina", type: "city", parent: "XK", coords: [21.1655, 42.6629],
    name: { de: "Pristina", hu: "Pristina", ro: "Pristina", en: "Pristina" },
    description: { de: "Hauptstadt von Kosovo.", hu: "Koszovó fővárosa.", ro: "Capitala Kosovo.", en: "Capital of Kosovo." },
    facts: { de: [], hu: [], ro: [], en: [] },
  },
  {
    id: "xk-prizren", type: "city", parent: "XK", coords: [20.7397, 42.2138],
    name: { de: "Prizren", hu: "Prizren", ro: "Prizren", en: "Prizren" },
    description: { de: "Historische Stadt am Fuß der Šar-Berge.", hu: "Történelmi város a Šar-hegység lábánál.", ro: "Oraș istoric la poalele Munților Šar.", en: "Historic city at the foot of the Šar Mountains." },
    facts: { de: [], hu: [], ro: [], en: [] },
  },
  {
    id: "xk-peja", type: "city", parent: "XK", coords: [20.29, 42.66],
    name: { de: "Peja", hu: "Peja", ro: "Peja", en: "Peja" },
    description: { de: "Stadt in West-Kosovo, Tor zur Rugova-Schlucht.", hu: "Város Nyugat-Koszovóban, a Rugova-szurdok kapuja.", ro: "Oraș în vestul Kosovo, poarta către Cheile Rugova.", en: "City in western Kosovo, gateway to the Rugova Canyon." },
    facts: { de: [], hu: [], ro: [], en: [] },
  },
  {
    id: "xk-mitrovica", type: "city", parent: "XK", coords: [20.86, 42.89],
    name: { de: "Mitrovica", hu: "Mitrovica", ro: "Mitrovica", en: "Mitrovica" },
    description: { de: "Wichtige Industriestadt im Norden.", hu: "Fontos ipari város északon.", ro: "Important oraș industrial în nord.", en: "Important industrial city in the north." },
    facts: { de: [], hu: [], ro: [], en: [] },
  },
  {
    id: "xk-gjakova", type: "city", parent: "XK", coords: [20.43, 42.38],
    name: { de: "Gjakova", hu: "Gjakova", ro: "Gjakova", en: "Gjakova" },
    description: { de: "Bekannt für den alten Basar.", hu: "Az öreg bazárról ismert.", ro: "Cunoscut pentru vechiul bazar.", en: "Known for the old bazaar." },
    facts: { de: [], hu: [], ro: [], en: [] },
  },
  {
    id: "xk-rugova", type: "nature", parent: "XK", coords: [20.08, 42.69],
    name: { de: "Rugova-Schlucht", hu: "Rugova-szurdok", ro: "Cheile Rugova", en: "Rugova Canyon" },
    description: { de: "Tiefe Schlucht und beliebtes Naturziel.", hu: "Mély szurdok és népszerű természeti célpont.", ro: "Chei adânci și destinație populară pentru natură.", en: "Deep canyon and popular nature destination." },
    facts: { de: [], hu: [], ro: [], en: [] },
  },
  {
    id: "xk-sar-mountains", type: "nature", parent: "XK", coords: [20.8, 42.1],
    name: { de: "Šar-Berge", hu: "Šar-hegység", ro: "Munții Šar", en: "Šar Mountains" },
    description: { de: "Gebirgszug im Süden mit Nationalpark.", hu: "Hegylánc délen nemzeti parkkal.", ro: "Lanț muntos în sud cu parc național.", en: "Mountain range in the south with a national park." },
    facts: { de: [], hu: [], ro: [], en: [] },
  },
  {
    id: "xk-mirusha", type: "nature", parent: "XK", coords: [20.57, 42.52],
    name: { de: "Mirusha-Wasserfälle", hu: "Mirusha-vízesések", ro: "Cascadele Mirusha", en: "Mirusha Waterfalls" },
    description: { de: "Malerische Wasserfälle und Seen.", hu: "Festői vízesések és tavak.", ro: "Cascade și lacuri pitorești.", en: "Picturesque waterfalls and lakes." },
    facts: { de: [], hu: [], ro: [], en: [] },
  },
  {
    id: "xk-gracanica", type: "historical", parent: "XK", coords: [21.19, 42.59],
    name: { de: "Kloster Gračanica", hu: "Gračanica kolostor", ro: "Mănăstirea Gračanica", en: "Gračanica Monastery" },
    description: { de: "UNESCO-Weltkulturerbe in der Nähe von Pristina.", hu: "UNESCO Világörökség Pristina közelében.", ro: "Patrimoniu mondial UNESCO lângă Pristina.", en: "UNESCO World Heritage site near Pristina." },
    facts: { de: [], hu: [], ro: [], en: [] },
  },
  {
    id: "xk-decan", type: "historical", parent: "XK", coords: [20.26, 42.54],
    name: { de: "Kloster Visoki Dečani", hu: "Visoki Dečani kolostor", ro: "Mănăstirea Visoki Dečani", en: "Visoki Dečani Monastery" },
    description: { de: "Bedeutendes serbisch-orthodoxes Kloster.", hu: "Jelentős szerb ortodox kolostor.", ro: "Importantă mănăstire ortodoxă sârbă.", en: "Important Serbian Orthodox monastery." },
    facts: { de: [], hu: [], ro: [], en: [] },
  },
  {
    id: "xk-ferizaj", type: "city", parent: "XK", coords: [21.15, 42.37],
    name: { de: "Ferizaj", hu: "Ferizaj", ro: "Ferizaj", en: "Ferizaj" },
    description: { de: "Drittgrößte Stadt im Kosovo.", hu: "Koszovó harmadik legnagyobb városa.", ro: "Al treilea oraș ca mărime din Kosovo.", en: "Third largest city in Kosovo." },
    facts: { de: [], hu: [], ro: [], en: [] },
  },
  {
    id: "xk-gjilan", type: "city", parent: "XK", coords: [21.46, 42.46],
    name: { de: "Gjilan", hu: "Gjilan", ro: "Gjilan", en: "Gjilan" },
    description: { de: "Stadt im Osten von Kosovo.", hu: "Város Kelet-Koszovóban.", ro: "Oraș în estul Kosovo.", en: "City in eastern Kosovo." },
    facts: { de: [], hu: [], ro: [], en: [] },
  },
  {
    id: "xk-podujeva", type: "city", parent: "XK", coords: [21.19, 42.91],
    name: { de: "Podujeva", hu: "Podujeva", ro: "Podujeva", en: "Podujeva" },
    description: { de: "Stadt im Nordosten.", hu: "Város északkeleten.", ro: "Oraș în nord-est.", en: "City in the northeast." },
    facts: { de: [], hu: [], ro: [], en: [] },
  },
  {
    id: "xk-viti", type: "city", parent: "XK", coords: [21.35, 42.32],
    name: { de: "Viti", hu: "Viti", ro: "Viti", en: "Viti" },
    description: { de: "Kleine Stadt im Südosten.", hu: "Kisváros délkeleten.", ro: "Oraș mic în sud-est.", en: "Small town in the southeast." },
    facts: { de: [], hu: [], ro: [], en: [] },
  },
  {
    id: "xk-vushtrri", type: "city", parent: "XK", coords: [20.96, 42.82],
    name: { de: "Vushtrri", hu: "Vushtrri", ro: "Vushtrri", en: "Vushtrri" },
    description: { de: "Eine der ältesten Städte im Kosovo.", hu: "Koszovó egyik legrégebbi városa.", ro: "Unul dintre cele mai vechi orașe din Kosovo.", en: "One of the oldest cities in Kosovo." },
    facts: { de: [], hu: [], ro: [], en: [] },
  },
  {
    id: "xk-srbica", type: "city", parent: "XK", coords: [20.78, 42.74],
    name: { de: "Skenderaj", hu: "Skenderaj", ro: "Skenderaj", en: "Skenderaj" },
    description: { de: "Stadt in der Drenica-Region.", hu: "Város a Drenica régióban.", ro: "Oraș în regiunea Drenica.", en: "City in the Drenica region." },
    facts: { de: [], hu: [], ro: [], en: [] },
  },
  {
    id: "xk-rahovec", type: "city", parent: "XK", coords: [20.65, 42.39],
    name: { de: "Rahovec", hu: "Rahovec", ro: "Rahovec", en: "Rahovec" },
    description: { de: "Zentrum des Weinbaus.", hu: "A borászat központja.", ro: "Centrul viticulturii.", en: "Center of winemaking." },
    facts: { de: [], hu: [], ro: [], en: [] },
  },
  {
    id: "xk-suhareka", type: "city", parent: "XK", coords: [20.82, 42.35],
    name: { de: "Suhareka", hu: "Suhareka", ro: "Suhareka", en: "Suhareka" },
    description: { de: "Stadt in der Nähe von Prizren.", hu: "Város Prizren közelében.", ro: "Oraș lângă Prizren.", en: "City near Prizren." },
    facts: { de: [], hu: [], ro: [], en: [] },
  },
  {
    id: "xk-dragash", type: "city", parent: "XK", coords: [20.64, 42.06],
    name: { de: "Dragash", hu: "Dragash", ro: "Dragash", en: "Dragash" },
    description: { de: "Bergstadt im Süden.", hu: "Hegyi város délen.", ro: "Oraș de munte în sud.", en: "Mountain town in the south." },
    facts: { de: [], hu: [], ro: [], en: [] },
  },
  {
    id: "xk-kacanik", type: "city", parent: "XK", coords: [21.26, 42.23],
    name: { de: "Kaçanik", hu: "Kaçanik", ro: "Kaçanik", en: "Kaçanik" },
    description: { de: "Stadt an der Grenze zu Nordmazedonien.", hu: "Város az észak-macedón határon.", ro: "Oraș la granița cu Macedonia de Nord.", en: "City on the border with North Macedonia." },
    facts: { de: [], hu: [], ro: [], en: [] },
  },
  {
    id: "xk-batllava", type: "nature", parent: "XK", coords: [21.31, 42.82],
    name: { de: "Batllava-See", hu: "Batllava-tó", ro: "Lacul Batllava", en: "Batllava Lake" },
    description: { de: "Beliebter künstlicher See.", hu: "Népszerű mesterséges tó.", ro: "Lac artificial popular.", en: "Popular artificial lake." },
    facts: { de: [], hu: [], ro: [], en: [] },
  },
  {
    id: "xk-badovc", type: "nature", parent: "XK", coords: [21.23, 42.61],
    name: { de: "Badovc-See", hu: "Badovc-tó", ro: "Lacul Badovc", en: "Badovc Lake" },
    description: { de: "Wichtiger Stausee nahe Pristina.", hu: "Fontos víztározó Pristina közelében.", ro: "Important lac de acumulare lângă Pristina.", en: "Important reservoir near Pristina." },
    facts: { de: [], hu: [], ro: [], en: [] },
  },
  {
    id: "xk-gadime", type: "landmark", parent: "XK", coords: [21.2, 42.48],
    name: { de: "Marmorhöhle von Gadime", hu: "Gadimei márványbarlang", ro: "Peștera de marmură din Gadime", en: "Marble Cave of Gadime" },
    description: { de: "Karsthöhle mit seltenen Marmorformationen.", hu: "Karsztbarlang ritka márványképződményekkel.", ro: "Peșteră carstică cu formațiuni rare de marmură.", en: "Karst cave with rare marble formations." },
    facts: { de: [], hu: [], ro: [], en: [] },
  },
  {
    id: "xk-bjeshket-e-nemuna", type: "nature", parent: "XK", coords: [20.15, 42.66],
    name: { de: "Nationalpark Bjeshkët e Nemuna", hu: "Bjeshkët e Nemuna Nemzeti Park", ro: "Parcul Național Bjeshkët e Nemuna", en: "Bjeshkët e Nemuna National Park" },
    description: { de: "Atemberaubender Nationalpark in den albanischen Alpen.", hu: "Lélegzetelállító nemzeti park az Albán-Alpokban.", ro: "Parc național uluitor în Alpii Albanezi.", en: "Breathtaking national park in the Albanian Alps." },
    facts: { de: [], hu: [], ro: [], en: [] },
  },
  {
    id: "xk-patriarchate-pec", type: "historical", parent: "XK", coords: [20.26, 42.66],
    name: { de: "Patriarchenkloster Peć", hu: "Peći patriarchális kolostor", ro: "Patriarhia din Peć", en: "Patriarchate of Peć" },
    description: { de: "Mittelalterliches serbisches Kloster.", hu: "Középkori szerb kolostor.", ro: "Mănăstire sârbă medievală.", en: "Medieval Serbian monastery." },
    facts: { de: [], hu: [], ro: [], en: [] },
  },
  {
    id: "xk-gazimestan", type: "historical", parent: "XK", coords: [21.11, 42.69],
    name: { de: "Gazimestan", hu: "Gazimestan", ro: "Gazimestan", en: "Gazimestan" },
    description: { de: "Denkmal der Schlacht auf dem Amselfeld.", hu: "A rigómezei csata emlékműve.", ro: "Monumentul Bătăliei de la Kosovo Polje.", en: "Monument to the Battle of Kosovo." },
    facts: { de: [], hu: [], ro: [], en: [] },
  },
  {
    id: "xk-national-library", type: "landmark", parent: "XK", coords: [21.16, 42.65],
    name: { de: "Nationalbibliothek", hu: "Nemzeti Könyvtár", ro: "Biblioteca Națională", en: "National Library" },
    description: { de: "Architektonisch einzigartiges Gebäude in Pristina.", hu: "Építészetileg egyedülálló épület Pristinában.", ro: "Clădire unică din punct de vedere arhitectural în Pristina.", en: "Architecturally unique building in Pristina." },
    facts: { de: [], hu: [], ro: [], en: [] },
  },
  {
    id: "xk-newborn", type: "landmark", parent: "XK", coords: [21.15, 42.66],
    name: { de: "Newborn-Denkmal", hu: "Newborn-emlékmű", ro: "Monumentul Newborn", en: "Newborn Monument" },
    description: { de: "Denkmal der Unabhängigkeit in Pristina.", hu: "A függetlenség emlékműve Pristinában.", ro: "Monumentul independenței din Pristina.", en: "Monument to independence in Pristina." },
    facts: { de: [], hu: [], ro: [], en: [] },
  },
  {
    id: "xk-kalaja-prizren", type: "historical", parent: "XK", coords: [20.74, 42.21],
    name: { de: "Festung von Prizren", hu: "Prizren vára", ro: "Cetatea Prizren", en: "Prizren Fortress" },
    description: { de: "Mittelalterliche Festung über der Stadt.", hu: "Középkori erőd a város felett.", ro: "Cetate medievală deasupra orașului.", en: "Medieval fortress overlooking the city." },
    facts: { de: [], hu: [], ro: [], en: [] },
  },
  {
    id: "xk-radavc", type: "nature", parent: "XK", coords: [20.33, 42.73],
    name: { de: "Radavc-Höhle", hu: "Radavc-barlang", ro: "Peștera Radavc", en: "Radavc Cave" },
    description: { de: "Tropfsteinhöhle nahe Peja.", hu: "Cseppkőbarlang Peja közelében.", ro: "Peșteră cu stalactite lângă Peja.", en: "Stalactite cave near Peja." },
    facts: { de: [], hu: [], ro: [], en: [] },
  },
  {
    id: "xk-novo-bordo", type: "historical", parent: "XK", coords: [21.43, 42.61],
    name: { de: "Festung Novo Brdo", hu: "Novo Brdo vára", ro: "Cetatea Novo Brdo", en: "Novo Brdo Fortress" },
    description: { de: "Ruinen einer alten Bergbaustadt.", hu: "Egy régi bányászváros romjai.", ro: "Ruinele unui vechi oraș minier.", en: "Ruins of an ancient mining town." },
    facts: { de: [], hu: [], ro: [], en: [] },
  }
];

export const kosovoAllPoi: POI[] = [
  kosovoCountry,
  ...kosovoPois
];
