import type { POI } from "./poi";

export const franceCountry: POI[] = [
  {
    id: "FR",
    type: "country",
    parent: "EU",
    coords: [2.2137, 46.2276],
    name: {"de": "Frankreich", "hu": "Franciaország", "ro": "Franța", "en": "France"},
    description: {"de": "Land in Westeuropa, bekannt für Kultur, Geschichte und Gastronomie.", "hu": "Nyugat-európai ország, kultúrájáról, történelméről és gasztronómiájáról ismert.", "ro": "Țară din Europa de Vest, cunoscută pentru cultură, istorie și gastronomie.", "en": "Country in Western Europe, known for its culture, history, and gastronomy."},
    facts: {"de": ["Hauptstadt: Paris.", "Einwohner: ca. 68 Millionen.", "Währung: Euro."], "hu": ["Főváros: Párizs.", "Népesség: kb. 68 millió.", "Pénznem: Euró."], "ro": ["Capitala: Paris.", "Populație: aprox. 68 milioane.", "Monedă: Euro."], "en": ["Capital: Paris.", "Population: approx. 68 million.", "Currency: Euro."]}
  }
];

export const franceRegions: POI[] = [
  {
    id: "FR-ARA",
    type: "region",
    parent: "FR",
    coords: [4.8, 45.7],
    name: {"de": "Auvergne-Rhône-Alpes", "hu": "Auvergne-Rhône-Alpes", "ro": "Auvergne-Rhône-Alpes", "en": "Auvergne-Rhône-Alpes"},
    description: {"de": "Region in Frankreich.", "hu": "Régió Franciaországban.", "ro": "Regiune în Franța.", "en": "Region in France."},
    facts: {"de": ["Hauptstadt: Lyon."], "hu": ["Székhelye: Lyon."], "ro": ["Capitala: Lyon."], "en": ["Capital: Lyon."]}
  },
  {
    id: "FR-BFC",
    type: "region",
    parent: "FR",
    coords: [5, 47.2],
    name: {"de": "Bourgogne-Franche-Comté", "hu": "Bourgogne-Franche-Comté", "ro": "Bourgogne-Franche-Comté", "en": "Bourgogne-Franche-Comté"},
    description: {"de": "Region in Frankreich.", "hu": "Régió Franciaországban.", "ro": "Regiune în Franța.", "en": "Region in France."},
    facts: {"de": ["Hauptstadt: Dijon."], "hu": ["Székhelye: Dijon."], "ro": ["Capitala: Dijon."], "en": ["Capital: Dijon."]}
  },
  {
    id: "FR-BRE",
    type: "region",
    parent: "FR",
    coords: [-2.8, 48.2],
    name: {"de": "Bretagne", "hu": "Bretagne", "ro": "Bretagne", "en": "Bretagne"},
    description: {"de": "Region in Frankreich.", "hu": "Régió Franciaországban.", "ro": "Regiune în Franța.", "en": "Region in France."},
    facts: {"de": ["Hauptstadt: Rennes."], "hu": ["Székhelye: Rennes."], "ro": ["Capitala: Rennes."], "en": ["Capital: Rennes."]}
  },
  {
    id: "FR-CVL",
    type: "region",
    parent: "FR",
    coords: [1.7, 47.5],
    name: {"de": "Centre-Val de Loire", "hu": "Centre-Val de Loire", "ro": "Centre-Val de Loire", "en": "Centre-Val de Loire"},
    description: {"de": "Region in Frankreich.", "hu": "Régió Franciaországban.", "ro": "Regiune în Franța.", "en": "Region in France."},
    facts: {"de": ["Hauptstadt: Orléans."], "hu": ["Székhelye: Orléans."], "ro": ["Capitala: Orléans."], "en": ["Capital: Orléans."]}
  },
  {
    id: "FR-COR",
    type: "region",
    parent: "FR",
    coords: [9, 42.1],
    name: {"de": "Corse", "hu": "Corse", "ro": "Corse", "en": "Corse"},
    description: {"de": "Region in Frankreich.", "hu": "Régió Franciaországban.", "ro": "Regiune în Franța.", "en": "Region in France."},
    facts: {"de": ["Hauptstadt: Ajaccio."], "hu": ["Székhelye: Ajaccio."], "ro": ["Capitala: Ajaccio."], "en": ["Capital: Ajaccio."]}
  },
  {
    id: "FR-GES",
    type: "region",
    parent: "FR",
    coords: [6.1, 48.6],
    name: {"de": "Grand Est", "hu": "Grand Est", "ro": "Grand Est", "en": "Grand Est"},
    description: {"de": "Region in Frankreich.", "hu": "Régió Franciaországban.", "ro": "Regiune în Franța.", "en": "Region in France."},
    facts: {"de": ["Hauptstadt: Strasbourg."], "hu": ["Székhelye: Strasbourg."], "ro": ["Capitala: Strasbourg."], "en": ["Capital: Strasbourg."]}
  },
  {
    id: "FR-HDF",
    type: "region",
    parent: "FR",
    coords: [2.8, 50],
    name: {"de": "Hauts-de-France", "hu": "Hauts-de-France", "ro": "Hauts-de-France", "en": "Hauts-de-France"},
    description: {"de": "Region in Frankreich.", "hu": "Régió Franciaországban.", "ro": "Regiune în Franța.", "en": "Region in France."},
    facts: {"de": ["Hauptstadt: Lille."], "hu": ["Székhelye: Lille."], "ro": ["Capitala: Lille."], "en": ["Capital: Lille."]}
  },
  {
    id: "FR-IDF",
    type: "region",
    parent: "FR",
    coords: [2.3, 48.8],
    name: {"de": "Île-de-France", "hu": "Île-de-France", "ro": "Île-de-France", "en": "Île-de-France"},
    description: {"de": "Region in Frankreich.", "hu": "Régió Franciaországban.", "ro": "Regiune în Franța.", "en": "Region in France."},
    facts: {"de": ["Hauptstadt: Paris."], "hu": ["Székhelye: Paris."], "ro": ["Capitala: Paris."], "en": ["Capital: Paris."]}
  },
  {
    id: "FR-NOR",
    type: "region",
    parent: "FR",
    coords: [0.1, 49.1],
    name: {"de": "Normandie", "hu": "Normandie", "ro": "Normandie", "en": "Normandie"},
    description: {"de": "Region in Frankreich.", "hu": "Régió Franciaországban.", "ro": "Regiune în Franța.", "en": "Region in France."},
    facts: {"de": ["Hauptstadt: Rouen."], "hu": ["Székhelye: Rouen."], "ro": ["Capitala: Rouen."], "en": ["Capital: Rouen."]}
  },
  {
    id: "FR-NAQ",
    type: "region",
    parent: "FR",
    coords: [0.5, 45.2],
    name: {"de": "Nouvelle-Aquitaine", "hu": "Nouvelle-Aquitaine", "ro": "Nouvelle-Aquitaine", "en": "Nouvelle-Aquitaine"},
    description: {"de": "Region in Frankreich.", "hu": "Régió Franciaországban.", "ro": "Regiune în Franța.", "en": "Region in France."},
    facts: {"de": ["Hauptstadt: Bordeaux."], "hu": ["Székhelye: Bordeaux."], "ro": ["Capitala: Bordeaux."], "en": ["Capital: Bordeaux."]}
  },
  {
    id: "FR-OCC",
    type: "region",
    parent: "FR",
    coords: [2, 43.6],
    name: {"de": "Occitanie", "hu": "Occitanie", "ro": "Occitanie", "en": "Occitanie"},
    description: {"de": "Region in Frankreich.", "hu": "Régió Franciaországban.", "ro": "Regiune în Franța.", "en": "Region in France."},
    facts: {"de": ["Hauptstadt: Toulouse."], "hu": ["Székhelye: Toulouse."], "ro": ["Capitala: Toulouse."], "en": ["Capital: Toulouse."]}
  },
  {
    id: "FR-PDL",
    type: "region",
    parent: "FR",
    coords: [-0.5, 47.5],
    name: {"de": "Pays de la Loire", "hu": "Pays de la Loire", "ro": "Pays de la Loire", "en": "Pays de la Loire"},
    description: {"de": "Region in Frankreich.", "hu": "Régió Franciaországban.", "ro": "Regiune în Franța.", "en": "Region in France."},
    facts: {"de": ["Hauptstadt: Nantes."], "hu": ["Székhelye: Nantes."], "ro": ["Capitala: Nantes."], "en": ["Capital: Nantes."]}
  },
  {
    id: "FR-PAC",
    type: "region",
    parent: "FR",
    coords: [6, 43.9],
    name: {"de": "Provence-Alpes-Côte d'Azur", "hu": "Provence-Alpes-Côte d'Azur", "ro": "Provence-Alpes-Côte d'Azur", "en": "Provence-Alpes-Côte d'Azur"},
    description: {"de": "Region in Frankreich.", "hu": "Régió Franciaországban.", "ro": "Regiune în Franța.", "en": "Region in France."},
    facts: {"de": ["Hauptstadt: Marseille."], "hu": ["Székhelye: Marseille."], "ro": ["Capitala: Marseille."], "en": ["Capital: Marseille."]}
  },
];

export const franceCities: POI[] = [
  {
    id: "paris",
    type: "state-capital",
    parent: "FR-IDF",
    coords: [2.3522, 48.8566],
    name: {"de": "Paris", "hu": "Párizs", "ro": "Paris", "en": "Paris"},
    description: {"de": "Hauptstadt in Frankreich.", "hu": "Hauptstadt Franciaországban.", "ro": "Hauptstadt în Franța.", "en": "Hauptstadt in France."},
    facts: {"de": ["Paris ist faszinierend."], "hu": ["A(z) Párizs lenyűgöző."], "ro": ["Paris este fascinant."], "en": ["Paris is fascinating."]},
    image: "/geo-images/france/paris.webp"
  },
  {
    id: "marseille",
    type: "city",
    parent: "FR-PAC",
    coords: [5.3698, 43.2965],
    name: {"de": "Marseille", "hu": "Marseille", "ro": "Marsilia", "en": "Marseille"},
    description: {"de": "Hafenstadt in Frankreich.", "hu": "Hafenstadt Franciaországban.", "ro": "Hafenstadt în Franța.", "en": "Hafenstadt in France."},
    facts: {"de": ["Marseille ist faszinierend."], "hu": ["A(z) Marseille lenyűgöző."], "ro": ["Marsilia este fascinant."], "en": ["Marseille is fascinating."]},
    image: "/geo-images/france/marseille.webp"
  },
  {
    id: "lyon",
    type: "city",
    parent: "FR-ARA",
    coords: [4.8357, 45.764],
    name: {"de": "Lyon", "hu": "Lyon", "ro": "Lyon", "en": "Lyon"},
    description: {"de": "Gastronomie in Frankreich.", "hu": "Gastronomie Franciaországban.", "ro": "Gastronomie în Franța.", "en": "Gastronomie in France."},
    facts: {"de": ["Lyon ist faszinierend."], "hu": ["A(z) Lyon lenyűgöző."], "ro": ["Lyon este fascinant."], "en": ["Lyon is fascinating."]},
    image: "/geo-images/france/lyon.webp"
  },
  {
    id: "toulouse",
    type: "city",
    parent: "FR-OCC",
    coords: [1.4442, 43.6047],
    name: {"de": "Toulouse", "hu": "Toulouse", "ro": "Toulouse", "en": "Toulouse"},
    description: {"de": "Luftfahrt in Frankreich.", "hu": "Luftfahrt Franciaországban.", "ro": "Luftfahrt în Franța.", "en": "Luftfahrt in France."},
    facts: {"de": ["Toulouse ist faszinierend."], "hu": ["A(z) Toulouse lenyűgöző."], "ro": ["Toulouse este fascinant."], "en": ["Toulouse is fascinating."]},
    image: "/geo-images/france/toulouse.webp"
  },
  {
    id: "nice",
    type: "city",
    parent: "FR-PAC",
    coords: [7.262, 43.7102],
    name: {"de": "Nizza", "hu": "Nizza", "ro": "Nisa", "en": "Nizza"},
    description: {"de": "Riviera in Frankreich.", "hu": "Riviera Franciaországban.", "ro": "Riviera în Franța.", "en": "Riviera in France."},
    facts: {"de": ["Nizza ist faszinierend."], "hu": ["A(z) Nizza lenyűgöző."], "ro": ["Nisa este fascinant."], "en": ["Nizza is fascinating."]},
    image: "/geo-images/france/nice.webp"
  },
  {
    id: "nantes",
    type: "city",
    parent: "FR-PDL",
    coords: [-1.5536, 47.2184],
    name: {"de": "Nantes", "hu": "Nantes", "ro": "Nantes", "en": "Nantes"},
    description: {"de": "Westen in Frankreich.", "hu": "Westen Franciaországban.", "ro": "Westen în Franța.", "en": "Westen in France."},
    facts: {"de": ["Nantes ist faszinierend."], "hu": ["A(z) Nantes lenyűgöző."], "ro": ["Nantes este fascinant."], "en": ["Nantes is fascinating."]},
    image: "/geo-images/france/nantes.webp"
  },
  {
    id: "bordeaux",
    type: "city",
    parent: "FR-NAQ",
    coords: [-0.5792, 44.8378],
    name: {"de": "Bordeaux", "hu": "Bordeaux", "ro": "Bordeaux", "en": "Bordeaux"},
    description: {"de": "Wein in Frankreich.", "hu": "Wein Franciaországban.", "ro": "Wein în Franța.", "en": "Wein in France."},
    facts: {"de": ["Bordeaux ist faszinierend."], "hu": ["A(z) Bordeaux lenyűgöző."], "ro": ["Bordeaux este fascinant."], "en": ["Bordeaux is fascinating."]},
    image: "/geo-images/france/bordeaux.webp"
  },
  {
    id: "strasbourg",
    type: "city",
    parent: "FR-GES",
    coords: [7.7521, 48.5734],
    name: {"de": "Straßburg", "hu": "Strasbourg", "ro": "Strasbourg", "en": "Straßburg"},
    description: {"de": "Europa in Frankreich.", "hu": "Europa Franciaországban.", "ro": "Europa în Franța.", "en": "Europa in France."},
    facts: {"de": ["Straßburg ist faszinierend."], "hu": ["A(z) Strasbourg lenyűgöző."], "ro": ["Strasbourg este fascinant."], "en": ["Straßburg is fascinating."]},
    image: "/geo-images/france/strasbourg.webp"
  },
  {
    id: "lille",
    type: "city",
    parent: "FR-HDF",
    coords: [3.0573, 50.6292],
    name: {"de": "Lille", "hu": "Lille", "ro": "Lille", "en": "Lille"},
    description: {"de": "Norden in Frankreich.", "hu": "Norden Franciaországban.", "ro": "Norden în Franța.", "en": "Norden in France."},
    facts: {"de": ["Lille ist faszinierend."], "hu": ["A(z) Lille lenyűgöző."], "ro": ["Lille este fascinant."], "en": ["Lille is fascinating."]},
    image: "/geo-images/france/lille.webp"
  },
  {
    id: "versailles",
    type: "landmark",
    parent: "FR-IDF",
    coords: [2.1204, 48.8049],
    name: {"de": "Versailles", "hu": "Versailles", "ro": "Versailles", "en": "Versailles"},
    description: {"de": "Schloss in Frankreich.", "hu": "Schloss Franciaországban.", "ro": "Schloss în Franța.", "en": "Schloss in France."},
    facts: {"de": ["Versailles ist faszinierend."], "hu": ["A(z) Versailles lenyűgöző."], "ro": ["Versailles este fascinant."], "en": ["Versailles is fascinating."]},
    image: "/geo-images/france/versailles.webp"
  },
  {
    id: "mont-saint-michel",
    type: "landmark",
    parent: "FR-NOR",
    coords: [-1.5115, 48.6361],
    name: {"de": "Mont Saint-Michel", "hu": "Mont Saint-Michel", "ro": "Mont Saint-Michel", "en": "Mont Saint-Michel"},
    description: {"de": "Kloster in Frankreich.", "hu": "Kloster Franciaországban.", "ro": "Kloster în Franța.", "en": "Kloster in France."},
    facts: {"de": ["Mont Saint-Michel ist faszinierend."], "hu": ["A(z) Mont Saint-Michel lenyűgöző."], "ro": ["Mont Saint-Michel este fascinant."], "en": ["Mont Saint-Michel is fascinating."]},
    image: "/geo-images/france/mont-saint-michel.webp"
  },
  {
    id: "carcassonne",
    type: "landmark",
    parent: "FR-OCC",
    coords: [2.3537, 43.2122],
    name: {"de": "Carcassonne", "hu": "Carcassonne", "ro": "Carcassonne", "en": "Carcassonne"},
    description: {"de": "Festung in Frankreich.", "hu": "Festung Franciaországban.", "ro": "Festung în Franța.", "en": "Festung in France."},
    facts: {"de": ["Carcassonne ist faszinierend."], "hu": ["A(z) Carcassonne lenyűgöző."], "ro": ["Carcassonne este fascinant."], "en": ["Carcassonne is fascinating."]},
    image: "/geo-images/france/carcassonne.webp"
  },
  {
    id: "loire-chateaux",
    type: "landmark",
    parent: "FR-CVL",
    coords: [1.5333, 47.6],
    name: {"de": "Châteaux de la Loire", "hu": "Loire-völgyi kastélyok", "ro": "Castelele de pe Loara", "en": "Châteaux de la Loire"},
    description: {"de": "Schlösser in Frankreich.", "hu": "Schlösser Franciaországban.", "ro": "Schlösser în Franța.", "en": "Schlösser in France."},
    facts: {"de": ["Châteaux de la Loire ist faszinierend."], "hu": ["A(z) Loire-völgyi kastélyok lenyűgöző."], "ro": ["Castelele de pe Loara este fascinant."], "en": ["Châteaux de la Loire is fascinating."]},
    image: "/geo-images/france/loire-chateaux.webp"
  },
  {
    id: "cannes",
    type: "city",
    parent: "FR-PAC",
    coords: [7.0174, 43.5528],
    name: {"de": "Cannes", "hu": "Cannes", "ro": "Cannes", "en": "Cannes"},
    description: {"de": "Film in Frankreich.", "hu": "Film Franciaországban.", "ro": "Film în Franța.", "en": "Film in France."},
    facts: {"de": ["Cannes ist faszinierend."], "hu": ["A(z) Cannes lenyűgöző."], "ro": ["Cannes este fascinant."], "en": ["Cannes is fascinating."]},
    image: "/geo-images/france/cannes.webp"
  },
  {
    id: "french-alps",
    type: "mountain",
    parent: "FR-ARA",
    coords: [6.5, 45.5],
    name: {"de": "Französische Alpen", "hu": "Francia Alpok", "ro": "Alpii Francezi", "en": "Französische Alpen"},
    description: {"de": "Gebirge in Frankreich.", "hu": "Gebirge Franciaországban.", "ro": "Gebirge în Franța.", "en": "Gebirge in France."},
    facts: {"de": ["Französische Alpen ist faszinierend."], "hu": ["A(z) Francia Alpok lenyűgöző."], "ro": ["Alpii Francezi este fascinant."], "en": ["Französische Alpen is fascinating."]},
    image: "/geo-images/france/french-alps.webp"
  },
  {
    id: "mont-blanc",
    type: "mountain",
    parent: "FR-ARA",
    coords: [6.8642, 45.8326],
    name: {"de": "Mont Blanc", "hu": "Mont Blanc", "ro": "Mont Blanc", "en": "Mont Blanc"},
    description: {"de": "Höchster Berg in Frankreich.", "hu": "Höchster Berg Franciaországban.", "ro": "Höchster Berg în Franța.", "en": "Höchster Berg in France."},
    facts: {"de": ["Mont Blanc ist faszinierend."], "hu": ["A(z) Mont Blanc lenyűgöző."], "ro": ["Mont Blanc este fascinant."], "en": ["Mont Blanc is fascinating."]},
    image: "/geo-images/france/mont-blanc.webp"
  },
  {
    id: "normandy-dday",
    type: "historical",
    parent: "FR-NOR",
    coords: [-0.88, 49.36],
    name: {"de": "D-Day Strände", "hu": "D-Day partok", "ro": "Plajele D-Day", "en": "D-Day Strände"},
    description: {"de": "Geschichte in Frankreich.", "hu": "Geschichte Franciaországban.", "ro": "Geschichte în Franța.", "en": "Geschichte in France."},
    facts: {"de": ["D-Day Strände ist faszinierend."], "hu": ["A(z) D-Day partok lenyűgöző."], "ro": ["Plajele D-Day este fascinant."], "en": ["D-Day Strände is fascinating."]},
    image: "/geo-images/france/normandy-dday.webp"
  },
  {
    id: "eiffel-tower",
    type: "landmark",
    parent: "FR-IDF",
    coords: [2.2945, 48.8584],
    name: {"de": "Eiffelturm", "hu": "Eiffel-torony", "ro": "Turnul Eiffel", "en": "Eiffelturm"},
    description: {"de": "Wahrzeichen in Frankreich.", "hu": "Wahrzeichen Franciaországban.", "ro": "Wahrzeichen în Franța.", "en": "Wahrzeichen in France."},
    facts: {"de": ["Eiffelturm ist faszinierend."], "hu": ["A(z) Eiffel-torony lenyűgöző."], "ro": ["Turnul Eiffel este fascinant."], "en": ["Eiffelturm is fascinating."]},
    image: "/geo-images/france/eiffel-tower.webp"
  },
  {
    id: "louvre",
    type: "landmark",
    parent: "FR-IDF",
    coords: [2.3376, 48.8606],
    name: {"de": "Louvre", "hu": "Louvre", "ro": "Luvru", "en": "Louvre"},
    description: {"de": "Museum in Frankreich.", "hu": "Museum Franciaországban.", "ro": "Museum în Franța.", "en": "Museum in France."},
    facts: {"de": ["Louvre ist faszinierend."], "hu": ["A(z) Louvre lenyűgöző."], "ro": ["Luvru este fascinant."], "en": ["Louvre is fascinating."]},
    image: "/geo-images/france/louvre.webp"
  },
  {
    id: "notre-dame",
    type: "landmark",
    parent: "FR-IDF",
    coords: [2.3499, 48.8529],
    name: {"de": "Notre-Dame", "hu": "Notre-Dame", "ro": "Notre-Dame", "en": "Notre-Dame"},
    description: {"de": "Kathedrale in Frankreich.", "hu": "Kathedrale Franciaországban.", "ro": "Kathedrale în Franța.", "en": "Kathedrale in France."},
    facts: {"de": ["Notre-Dame ist faszinierend."], "hu": ["A(z) Notre-Dame lenyűgöző."], "ro": ["Notre-Dame este fascinant."], "en": ["Notre-Dame is fascinating."]},
    image: "/geo-images/france/notre-dame.webp"
  },
  {
    id: "chambord",
    type: "landmark",
    parent: "FR-CVL",
    coords: [1.5172, 47.616],
    name: {"de": "Schloss Chambord", "hu": "Chambord kastély", "ro": "Castelul Chambord", "en": "Schloss Chambord"},
    description: {"de": "Loire in Frankreich.", "hu": "Loire Franciaországban.", "ro": "Loire în Franța.", "en": "Loire in France."},
    facts: {"de": ["Schloss Chambord ist faszinierend."], "hu": ["A(z) Chambord kastély lenyűgöző."], "ro": ["Castelul Chambord este fascinant."], "en": ["Schloss Chambord is fascinating."]},
    image: "/geo-images/france/chambord.webp"
  },
  {
    id: "calais",
    type: "city",
    parent: "FR-HDF",
    coords: [1.8587, 50.9513],
    name: {"de": "Calais", "hu": "Calais", "ro": "Calais", "en": "Calais"},
    description: {"de": "Hafen in Frankreich.", "hu": "Hafen Franciaországban.", "ro": "Hafen în Franța.", "en": "Hafen in France."},
    facts: {"de": ["Calais ist faszinierend."], "hu": ["A(z) Calais lenyűgöző."], "ro": ["Calais este fascinant."], "en": ["Calais is fascinating."]},
    image: "/geo-images/france/calais.webp"
  },
  {
    id: "reims",
    type: "city",
    parent: "FR-GES",
    coords: [4.0331, 49.2583],
    name: {"de": "Reims", "hu": "Reims", "ro": "Reims", "en": "Reims"},
    description: {"de": "Champagne in Frankreich.", "hu": "Champagne Franciaországban.", "ro": "Champagne în Franța.", "en": "Champagne in France."},
    facts: {"de": ["Reims ist faszinierend."], "hu": ["A(z) Reims lenyűgöző."], "ro": ["Reims este fascinant."], "en": ["Reims is fascinating."]},
    image: "/geo-images/france/reims.webp"
  },
];

export const franceAllPoi: POI[] = [...franceCountry, ...franceRegions, ...franceCities];
