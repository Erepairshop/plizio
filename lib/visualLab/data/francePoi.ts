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
  {
    id: "fr-chateau-chenonceau",
    type: "landmark",
    parent: "FR-CVL",
    coords: [1.0703, 47.3249],
    name: { de: "Schloss Chenonceau", hu: "Chenonceau-i kastély", ro: "Castelul Chenonceau", en: "Château de Chenonceau" },
    image: "/geo-images/france/chateau-chenonceau.webp",
    description: {
      de: "Das Schloss Chenonceau ist eines der meistbesuchten Schlösser Frankreichs und liegt im Loiretal. Es ist berühmt für seine Galerie, die den Fluss Cher überbrückt. Das Schloss wird oft als 'Schloss der Damen' bezeichnet, da es von bedeutenden Frauen wie Diana von Poitiers und Katharina von Medici geprägt wurde. Die Architektur vereint Gotik und Renaissance auf einzigartige Weise.",
      hu: "A Chenonceau-i kastély a Loire-völgy egyik legnépszerűbb látványossága, amely a Cher folyón átívelő galériájáról híres. Gyakran nevezik a 'hölgyek kastélyának', mivel történetét olyan meghatározó nők alakították, mint Diane de Poitiers és Medici Katalin. A kastély kertjei és belső terei a francia reneszánsz pompáját tükrözik. Egyedülálló elhelyezkedése miatt a víz felett lebegő palota benyomását kelti.",
      ro: "Castelul Chenonceau este unul dintre cele mai vizitate castele din Franța, situat în Valea Loarei. Este faimos pentru galeria sa care traversează râul Cher, oferind o priveliște spectaculoasă. Castelul este supranumit 'Castelul Doamnelor', fiind marcat de influența unor figuri feminine istorice precum Diana de Poitiers și Caterina de Medici. Arhitectura sa îmbină armonios stilul gotic târziu cu cel renascentist.",
      en: "Château de Chenonceau is one of the most visited castles in France, located in the Loire Valley. It is famous for its unique gallery that spans the Cher River. Often called the 'Ladies' Castle', its history was shaped by influential women like Diane de Poitiers and Catherine de' Medici. The castle's architecture is an exceptional blend of late Gothic and early Renaissance styles."
    },
    facts: {
      de: ["Erbaut im 16. Jahrhundert auf den Fundamenten einer alten Mühle.", "Die Galerie über dem Cher ist 60 Meter lang.", "Besitzt wunderschöne Gärten von Diana von Poitiers und Katharina von Medici.", "Diente im Ersten Weltkrieg als Lazarett.", "War während des Zweiten Weltkriegs ein Fluchtweg über die Demarkationslinie.", "Beherbergt eine bedeutende Sammlung alter Meistergemälde.", "Das Schloss ist seit 1840 als Monument historique klassifiziert."],
      hu: ["A 16. században épült egy régi malom alapjaira.", "A Cher folyó feletti galéria 60 méter hosszú.", "Diane de Poitiers és Medici Katalin gyönyörű kertjei veszik körül.", "Az első világháború alatt katonai kórházként működött.", "A második világháborúban menekülési útvonalként szolgált a demarkációs vonalon.", "Jelentős régi mesterek festménygyűjteményének ad otthont.", "1840 óta szerepel a történelmi műemlékek listáján."],
      ro: ["Construit în secolul al XVI-lea pe fundațiile unei vechi mori.", "Galeria de peste râul Cher are o lungime de 60 de metri.", "Dispune de grădini superbe create de Diana de Poitiers și Caterina de Medici.", "A servit ca spital militar în timpul Primului Război Mondial.", "În Al Doilea Război Mondial a fost o cale de evadare peste linia de demarcație.", "Găzduiește o colecție importantă de picturi ale vechilor maeștri.", "Este clasificat ca monument istoric din anul 1840."],
      en: ["Built in the 16th century on the foundations of an old mill.", "The gallery over the Cher river is 60 meters long.", "Features beautiful gardens designed by Diane de Poitiers and Catherine de' Medici.", "Served as a military hospital during World War I.", "Was an escape route across the demarcation line during World War II.", "Houses a significant collection of Old Master paintings.", "Classified as a Monument Historique since 1840."]
    }
  },
  {
    id: "fr-chateau-chambord",
    type: "landmark",
    parent: "FR-CVL",
    coords: [1.5172, 47.6161],
    name: { de: "Schloss Chambord", hu: "Chambord-i kastély", ro: "Castelul Chambord", en: "Château de Chambord" },
    image: "/geo-images/france/chateau-chambord.webp",
    description: {
      de: "Schloss Chambord ist das größte und prächtigste Schloss im Loiretal. Es wurde im Auftrag von König Franz I. als Jagdschloss erbaut und gilt als Meisterwerk der französischen Renaissance. Die Architektur zeigt deutliche Einflüsse von Leonardo da Vinci, insbesondere bei der berühmten Doppelwendeltreppe. Das Schloss liegt in einem riesigen, von einer Mauer umschlossenen Park.",
      hu: "A Chambord-i kastély a Loire-völgy legnagyobb és legimpozánsabb kastélya. I. Ferenc király építtette vadászkastélynak, és a francia reneszánsz építészet remekműveként tartják számon. Az épület tervezésében Leonardo da Vinci hatása is érezhető, különösen a híres kettős csigalépcsőnél. A kastélyt egy hatalmas, fallal körülvett park övezi, amely Európa legnagyobb zárt erdőrezervátuma.",
      ro: "Castelul Chambord este cel mai mare și mai grandios castel din Valea Loarei. A fost construit la ordinul regelui Francisc I ca pavilion de vânătoare și este considerat o capodoperă a Renașterii franceze. Arhitectura sa prezintă influențe clare ale lui Leonardo da Vinci, în special la celebra scară cu dublă elice. Castelul este situat într-un parc imens, înconjurat de cel mai lung zid din Franța.",
      en: "Château de Chambord is the largest and most magnificent castle in the Loire Valley. Built for King Francis I as a hunting lodge, it is a masterpiece of the French Renaissance. The architecture shows strong influences from Leonardo da Vinci, most notably in the famous double-helix staircase. The castle is set within a vast walled park, the largest enclosed forest in Europe."
    },
    facts: {
      de: ["Baubeginn war im Jahr 1519 unter Franz I.", "Verfügt über 440 Zimmer und 365 Schornsteine.", "Die Doppelwendeltreppe erlaubt es zwei Personen, sich zu sehen, ohne sich zu begegnen.", "Der Park ist so groß wie die Stadt Paris.", "Das Schloss wurde nie vollständig fertiggestellt.", "Leonardo da Vinci verbrachte seine letzten Jahre in der Nähe und beeinflusste das Design.", "Es gehört seit 1981 zum UNESCO-Weltkulturerbe."],
      hu: ["Az építkezés 1519-ben kezdődött I. Ferenc uralkodása alatt.", "440 szobával és 365 kéménnyel rendelkezik.", "A kettős csigalépcsőn két ember úgy haladhat el, hogy látják egymást, de nem találkoznak.", "A kastélypark területe akkora, mint Párizs városa.", "A kastélyt soha nem fejezték be teljesen.", "Leonardo da Vinci a közelben töltötte utolsó éveit és hatással volt a tervekre.", "1981 óta az UNESCO Világörökség része."],
      ro: ["Construcția a început în 1519 sub domnia lui Francisc I.", "Are 440 de camere și 365 de șeminee.", "Scara cu dublă elice permite ca două persoane să se vadă fără să se întâlnească.", "Parcul este la fel de mare ca orașul Paris.", "Castelul nu a fost niciodată finalizat complet.", "Leonardo da Vinci a locuit în apropiere și a influențat designul.", "Face parte din Patrimoniul Mondial UNESCO din 1981."],
      en: ["Construction began in 1519 under Francis I.", "Features 440 rooms and 365 chimneys.", "The double-helix staircase allows two people to ascend and descend without meeting.", "The park is as large as the city of Paris.", "The castle was never fully completed.", "Leonardo da Vinci spent his last years nearby and influenced the design.", "Inscribed as a UNESCO World Heritage site in 1981."]
    }
  },
  {
    id: "fr-chateau-fontainebleau",
    type: "historical",
    parent: "FR-IDF",
    coords: [2.6993, 48.4024],
    name: { de: "Schloss Fontainebleau", hu: "Fontainebleau-i kastély", ro: "Castelul Fontainebleau", en: "Château de Fontainebleau" },
    image: "/geo-images/france/chateau-fontainebleau.webp",
    description: {
      de: "Schloss Fontainebleau ist eines der größten Königsschlösser Frankreichs und liegt südlich von Paris. Es diente über acht Jahrhunderte hinweg als Residenz für französische Monarchen, von Ludwig VII. bis Napoleon III. Das Schloss ist bekannt für seine prächtige Innenausstattung und die weitläufigen Gärten. Es spiegelt die Entwicklung der französischen Architektur und Kunst über viele Epochen wider.",
      hu: "A Fontainebleau-i kastély Franciaország egyik legnagyobb királyi palotája, Párizstól délre található. Nyolc évszázadon át szolgált a francia uralkodók rezidenciájaként, VII. Lajostól egészen III. Napóleonig. A kastély híres pazar belső díszítéséről és kiterjedt kertjeiről. Az épületegyüttes hűen tükrözi a francia építészet és művészet fejlődését számos korszakon keresztül.",
      ro: "Castelul Fontainebleau este unul dintre cele mai mari palate regale din Franța, situat la sud de Paris. A servit ca reședință pentru monarhii francezi timp de opt secole, de la Ludovic al VII-lea până la Napoleon al III-lea. Castelul este renumit pentru decorul interior somptuos și grădinile sale vaste. Reflectă evoluția arhitecturii și artei franceze de-a lungul mai multor epoci.",
      en: "Château de Fontainebleau is one of the largest French royal châteaux, located south of Paris. It served as a residence for French monarchs for over eight centuries, from Louis VII to Napoleon III. The palace is renowned for its magnificent interior decorations and extensive gardens. It reflects the evolution of French architecture and art across many different eras."
    },
    facts: {
      de: ["Napoleon Bonaparte bezeichnete es als 'das wahre Heim der Könige'.", "Beherbergt die einzige erhaltene Thronsaal-Ausstattung in Frankreich.", "Die berühmte hufeisenförmige Treppe wurde im 17. Jahrhundert erbaut.", "Das Schloss hat über 1500 Zimmer.", "Es ist von einem 25.000 Hektar großen Wald umgeben.", "Hier unterzeichnete Napoleon 1814 seine Abdankung.", "Seit 1981 gehört es zum UNESCO-Weltkulturerbe."],
      hu: ["Napóleon Bonaparte 'a királyok igazi otthonának' nevezte.", "Itt található Franciaország egyetlen épségben maradt trónterme.", "A híres patkó alakú lépcső a 17. században épült.", "A kastélynak több mint 1500 szobája van.", "Egy 25 000 hektáros erdő veszi körül.", "Napóleon itt írta alá lemondását 1814-ben.", "1981 óta az UNESCO Világörökség része."],
      ro: ["Napoleon Bonaparte l-a numit 'adevărata casă a regilor'.", "Găzduiește singura sală a tronului păstrată intactă din Franța.", "Celebra scară în formă de potcoavă a fost construită în secolul al XVII-lea.", "Palatul are peste 1500 de camere.", "Este înconjurat de o pădure de 25.000 de hectare.", "Aici a semnat Napoleon actul de abdicare în 1814.", "Este inclus în Patrimoniul Mondial UNESCO din 1981."],
      en: ["Napoleon Bonaparte called it 'the true home of kings'.", "Houses the only throne room in France to have retained its original furniture.", "The famous horseshoe-shaped staircase was built in the 17th century.", "The palace contains over 1,500 rooms.", "Surrounded by a 25,000-hectare forest.", "Napoleon signed his abdication here in 1814.", "Designated a UNESCO World Heritage site in 1981."]
    }
  },
  {
    id: "fr-pont-du-gard",
    type: "historical",
    parent: "FR-OCC",
    coords: [4.5352, 43.9475],
    name: { de: "Pont du Gard", hu: "Pont du Gard", ro: "Pont du Gard", en: "Pont du Gard" },
    image: "/geo-images/france/pont-du-gard.webp",
    description: {
      de: "Der Pont du Gard ist ein beeindruckendes römisches Aquädukt im Süden Frankreichs. Es wurde im 1. Jahrhundert n. Chr. erbaut, um Wasser über den Fluss Gardon nach Nîmes zu leiten. Das Bauwerk ist eines der am besten erhaltenen römischen Aquädukte der Welt. Es besteht aus drei Etagen von Bögen und ist ein Meisterwerk antiker Ingenieurskunst.",
      hu: "A Pont du Gard egy lenyűgöző római kori vízvezeték Dél-Franciaországban. Az 1. században épült, hogy vizet szállítson a Gardon folyón keresztül Nîmes városába. Ez az egyik legjobb állapotban fennmaradt római vízvezeték a világon. Három szintnyi boltívből áll, és az ókori mérnöki tudomány kiemelkedő alkotása.",
      ro: "Pont du Gard este un apeduct roman impresionant situat în sudul Franței. A fost construit în secolul I d.Hr. pentru a transporta apă peste râul Gardon către orașul Nîmes. Structura este unul dintre cele mai bine conservate apeducte romane din lume. Este format din trei niveluri de arcade și reprezintă o capodoperă a ingineriei antice.",
      en: "Pont du Gard is an impressive Roman aqueduct bridge in southern France. Built in the 1st century AD, it was part of a system that carried water across the Gardon River to Nîmes. It is one of the best-preserved Roman aqueducts in the world. Consisting of three tiers of arches, it is a masterpiece of ancient engineering."
    },
    facts: {
      de: ["Das Aquädukt ist fast 50 Meter hoch.", "Es wurde ohne Mörtel aus tonnenschweren Steinblöcken gebaut.", "Das Gefälle des gesamten Aquädukts beträgt nur 12 Meter auf 50 Kilometern.", "Täglich flossen etwa 20.000 Kubikmeter Wasser hindurch.", "Im Mittelalter diente es als Brücke für den Straßenverkehr.", "Es ist auf der 5-Euro-Banknote abgebildet.", "UNESCO-Weltkulturerbe seit 1985."],
      hu: ["A vízvezeték majdnem 50 méter magas.", "Habarcs nélkül, több tonnás kőtömbökből építették.", "A teljes vezeték lejtése mindössze 12 méter 50 kilométeren.", "Naponta körülbelül 20 000 köbméter víz folyt át rajta.", "A középkorban közúti hídként is használták.", "Szerepel az 5 eurós bankjegyen.", "1985 óta az UNESCO Világörökség része."],
      ro: ["Apeductul are o înălțime de aproape 50 de metri.", "A fost construit fără mortar, din blocuri de piatră de câteva tone.", "Panta întregului apeduct este de doar 12 metri pe o distanță de 50 km.", "Zilnic transporta aproximativ 20.000 de metri cubi de apă.", "În Evul Mediu a fost folosit ca pod rutier.", "Este reprezentat pe bancnota de 5 euro.", "Patrimoniu Mondial UNESCO din 1985."],
      en: ["The aqueduct stands nearly 50 meters high.", "Built without mortar using stone blocks weighing several tons.", "The gradient of the entire aqueduct is only 12 meters over 50 kilometers.", "It carried about 20,000 cubic meters of water daily.", "Used as a road bridge during the Middle Ages.", "Depicted on the 5-euro banknote.", "UNESCO World Heritage site since 1985."]
    }
  },
  {
    id: "fr-carnac",
    type: "historical",
    parent: "FR-BRE",
    coords: [-3.0783, 47.5794],
    name: { de: "Menhire von Carnac", hu: "Carnaci kősorok", ro: "Aliniamentele de la Carnac", en: "Carnac stones" },
    image: "/geo-images/france/carnac.webp",
    description: {
      de: "Die Menhire von Carnac in der Bretagne sind eine der weltweit bedeutendsten Megalith-Anlagen. Über 3000 prähistorische Steine sind hier in langen Reihen, Kreisen und Dolmen angeordnet. Sie stammen aus der Jungsteinzeit, etwa zwischen 4500 und 3300 v. Chr. Der Zweck dieser gewaltigen Anlage ist bis heute ein archäologisches Rätsel.",
      hu: "A bretagne-i Carnaci kősorok a világ egyik legjelentősebb megalitikus lelőhelye. Több mint 3000 prehisztorikus kő található itt hosszú sorokba, körökbe és dolmenekbe rendezve. Az újkőkorszakból származnak, körülbelül i. e. 4500 és 3300 között állították fel őket. E hatalmas építmény pontos célja a mai napig régészeti rejtély.",
      ro: "Aliniamentele de la Carnac din Bretania reprezintă unul dintre cele mai importante situri megalitice din lume. Peste 3000 de pietre preistorice sunt dispuse aici în rânduri lungi, cercuri și dolmene. Datând din perioada neolitică, între 4500 și 3300 î.Hr., scopul acestei vaste structuri rămâne până astăzi un mister arheologic.",
      en: "The Carnac stones in Brittany are one of the world's most significant megalithic sites. More than 3,000 prehistoric stones are arranged in long alignments, circles, and dolmens. They date back to the Neolithic period, roughly between 4500 and 3300 BC. The exact purpose of this vast complex remains an archaeological mystery to this day."
    },
    facts: {
      de: ["Die Anlage erstreckt sich über eine Länge von etwa 4 Kilometern.", "Es gibt drei Hauptgruppen von Steinreihen: Ménec, Kermario und Kerlescan.", "Einige Menhire sind über 4 Meter hoch.", "Der Legende nach sind die Steine eine versteinerte römische Legion.", "Wissenschaftler vermuten astronomische oder religiöse Funktionen.", "Die Steine bestehen aus lokalem Granit.", "Die Anlage ist für Besucher zum Schutz der Vegetation teilweise eingezäunt."],
      hu: ["A lelőhely körülbelül 4 kilométer hosszan terül el.", "Három fő kősor-csoport létezik: Ménec, Kermario és Kerlescan.", "Némelyik menhir magassága meghaladja a 4 métert.", "A legenda szerint a kövek egy kővé vált római légiót alkotnak.", "A tudósok csillagászati vagy vallási funkciót feltételeznek.", "A kövek helyi gránitból készültek.", "A területet a növényzet védelme érdekében részben bekerítették."],
      ro: ["Situl se întinde pe o lungime de aproximativ 4 kilometri.", "Există trei grupuri principale de aliniamente: Ménec, Kermario și Kerlescan.", "Unele menhire au o înălțime de peste 4 metri.", "Conform legendei, pietrele sunt o legiune romană pietrificată.", "Oamenii de știință suspectează funcții astronomice sau religioase.", "Pietrele sunt cioplite din granit local.", "Situl este parțial împrejmuit pentru a proteja vegetația."],
      en: ["The site stretches over a length of about 4 kilometers.", "There are three main groups of alignments: Ménec, Kermario, and Kerlescan.", "Some menhirs stand over 4 meters tall.", "According to legend, the stones are a petrified Roman legion.", "Scientists suggest astronomical or religious functions for the site.", "The stones are made of local granite.", "The area is partially fenced to protect the vegetation from erosion."]
    }
  },
  {
    id: "fr-arenas-nimes",
    type: "historical",
    parent: "FR-OCC",
    coords: [4.3600, 43.8344],
    name: { de: "Amphitheater von Nîmes", hu: "Nîmes-i amfiteátrum", ro: "Amfiteatrul din Nîmes", en: "Arena of Nîmes" },
    image: "/geo-images/france/arenas-nimes.webp",
    description: {
      de: "Das Amphitheater von Nîmes ist eines der am besten erhaltenen römischen Arenen der Welt. Es wurde um 70 n. Chr. erbaut und bot Platz für über 20.000 Zuschauer. Die Architektur ist dem Kolosseum in Rom nachempfunden, aber in kleinerem Maßstab. Heute wird die Arena für Konzerte, Stierkämpfe und historische Reenactments genutzt.",
      hu: "A Nîmes-i amfiteátrum a világ egyik legjobb állapotban fennmaradt római kori arénája. I. sz. 70 körül épült, és több mint 20 000 néző befogadására volt alkalmas. Építészeti megoldásai a római Colosseumot idézik, kisebb léptékben. Napjainkban az aréna koncerteknek, bikaviadaloknak és történelmi játékoknak ad otthont.",
      ro: "Amfiteatrul din Nîmes este una dintre cele mai bine conservate arene romane din lume. A fost construit în jurul anului 70 d.Hr. și avea o capacitate de peste 20.000 de spectatori. Arhitectura sa este inspirată de Colosseumul din Roma, dar la o scară mai mică. Astăzi, arena este folosită pentru concerte, coride și reconstituiri istorice.",
      en: "The Arena of Nîmes is one of the best-preserved Roman amphitheaters in the world. Built around 70 AD, it could hold over 20,000 spectators. Its architecture is modeled after the Colosseum in Rome, but on a smaller scale. Today, the arena is used for concerts, bullfights, and historical reenactments."
    },
    facts: {
      de: ["Die Arena hat eine elliptische Form von 133 mal 101 Metern.", "Die Fassade besteht aus zwei Etagen mit jeweils 60 Bögen.", "Im Mittelalter wurde die Arena zu einer befestigten Siedlung umgebaut.", "Es gab ein ausgeklügeltes System von Gängen und Treppen für die Zuschauer.", "Die Arena verfügte über ein Velum zum Schutz vor der Sonne.", "Seit 1840 ist sie als Monument historique geschützt.", "Jedes Jahr finden hier die 'Großen Römischen Spiele' statt."],
      hu: ["Az aréna elliptikus alakú, 133-szor 101 méteres.", "A homlokzat két szintből áll, szintenként 60 boltívvel.", "A középkorban az arénát erődített településsé alakították át.", "Bonyolult folyosó- és lépcsőrendszer segítette a nézők mozgását.", "Az aréna rendelkezett napellenzővel (velum) a nézők védelmére.", "1840 óta védett történelmi műemlék.", "Minden évben itt rendezik meg a 'Nagy Római Játékokat'."],
      ro: ["Arena are o formă eliptică de 133 pe 101 metri.", "Fațada este compusă din două niveluri, fiecare cu 60 de arcade.", "În Evul Mediu, arena a fost transformată într-o așezare fortificată.", "Exista un sistem ingenios de galerii și scări pentru spectatori.", "Arena dispunea de un velum pentru protecție solară.", "Este protejată ca monument istoric din 1840.", "Anual găzduiește 'Marile Jocuri Romane'."],
      en: ["The arena has an elliptical shape measuring 133 by 101 meters.", "The facade consists of two levels, each with 60 arches.", "In the Middle Ages, the arena was transformed into a fortified village.", "It featured a sophisticated system of corridors and stairs for spectators.", "The arena had a velum to provide shade for the audience.", "Protected as a Monument Historique since 1840.", "Hosts the 'Great Roman Games' every year."]
    }
  },
  {
    id: "fr-abbey-cluny",
    type: "historical",
    parent: "FR-BFC",
    coords: [4.6597, 46.4345],
    name: { de: "Abtei Cluny", hu: "Clunyi apátság", ro: "Abația Cluny", en: "Cluny Abbey" },
    image: "/geo-images/france/abbey-cluny.webp",
    description: {
      de: "Die Abtei Cluny in Burgund war im Mittelalter das geistliche Zentrum Europas. Gegründet im Jahr 910, stand sie an der Spitze eines riesigen Netzwerks von Klöstern. Die Abteikirche Cluny III war bis zum Bau des Petersdoms in Rom die größte Kirche der Christenheit. Während der Französischen Revolution wurde die Abtei weitgehend zerstört, aber die Ruinen zeugen noch heute von ihrer einstigen Größe.",
      hu: "A burgundiai Clunyi apátság a középkori Európa szellemi és vallási központja volt. A 910-ben alapított apátság egy hatalmas kolostorhálózat élén állt. A Cluny III apátsági templom a római Szent Péter-bazilika felépüléséig a keresztény világ legnagyobb temploma volt. A francia forradalom alatt az apátság nagy részét lerombolták, de a romok ma is tanúskodnak egykori dicsőségéről.",
      ro: "Abația Cluny din Burgundia a fost centrul spiritual al Europei în Evul Mediu. Fondată în anul 910, se afla în fruntea unei vaste rețele de mănăstiri. Biserica abației Cluny III a fost cea mai mare biserică a creștinătății până la construcția Bazilicii Sfântul Petru din Roma. În timpul Revoluției Franceze, abația a fost în mare parte distrusă, dar ruinele sale atestă și astăzi măreția de odinioară.",
      en: "Cluny Abbey in Burgundy was the spiritual heart of medieval Europe. Founded in 910, it headed a vast network of monasteries across the continent. The abbey church, Cluny III, was the largest church in Christendom until the construction of St. Peter's Basilica in Rome. Although largely destroyed during the French Revolution, the remaining ruins still convey its former grandeur."
    },
    facts: {
      de: ["Gegründet von Wilhelm I., Herzog von Aquitanien.", "Die Abtei unterstand direkt dem Papst.", "Cluny III war 187 Meter lang.", "Die Reformbewegung von Cluny beeinflusste das gesamte kirchliche Leben.", "Nach der Revolution wurde die Abtei als Steinbruch genutzt.", "Heute beherbergt das Gelände ein Museum und eine Hochschule.", "Ein digitaler Rundgang zeigt die Kirche in ihrer ursprünglichen Pracht."],
      hu: ["I. Vilmos aquitániai herceg alapította.", "Az apátság közvetlenül a pápa fennhatósága alá tartozott.", "A Cluny III templom 187 méter hosszú volt.", "A clunyi reformmozgás az egész egyházi életre hatással volt.", "A forradalom után az apátságot kőbányaként használták.", "Ma a területen múzeum és főiskola működik.", "Digitális rekonstrukciók mutatják be a templom eredeti pompáját."],
      ro: ["Fondată de William I, Duce de Aquitania.", "Abația se afla sub autoritatea directă a Papei.", "Biserica Cluny III avea o lungime de 187 de metri.", "Mișcarea de reformă de la Cluny a influențat întreaga viață bisericească.", "După Revoluție, abația a fost folosită ca carieră de piatră.", "Astăzi, situl găzduiește un muzeu și o instituție de învățământ superior.", "Un tur digital prezintă biserica în splendoarea sa originală."],
      en: ["Founded by William I, Duke of Aquitaine.", "The abbey was directly subject to the Pope.", "Cluny III was 187 meters long.", "The Cluniac reform movement influenced all aspects of church life.", "After the Revolution, the abbey was used as a stone quarry.", "Today, the site houses a museum and a higher education institution.", "Digital reconstructions show the church in its original magnificence."]
    }
  },
  {
    id: "fr-bayeux-tapestry",
    type: "historical",
    parent: "FR-NOR",
    coords: [-0.7036, 49.2769],
    name: { de: "Teppich von Bayeux", hu: "Bayeux-i kárpit", ro: "Tapițeria de la Bayeux", en: "Bayeux Tapestry" },
    image: "/geo-images/france/bayeux-tapestry.webp",
    description: {
      de: "Der Teppich von Bayeux ist ein weltweit einzigartiges Kunstwerk aus dem 11. Jahrhundert. Er zeigt in 58 Szenen die Eroberung Englands durch den Normannenherzog Wilhelm den Eroberer und die Schlacht bei Hastings im Jahr 1066. Trotz seines Namens ist es kein gewebter Teppich, sondern eine Stickerei auf Leinen. Das Werk ist fast 70 Meter lang und bietet wertvolle Einblicke in das mittelalterliche Leben.",
      hu: "A Bayeux-i kárpit a 11. századból származó, világszerte egyedülálló műalkotás. 58 jelenetben mutatja be Anglia normann meghódítását Vilmos herceg által, valamint az 1066-os hastingsi csatát. Neve ellenére nem szőtt kárpit, hanem vászonra készített hímzés. A mű majdnem 70 méter hosszú, és felbecsülhetetlen értékű betekintést nyújt a középkori életbe.",
      ro: "Tapițeria de la Bayeux este o operă de artă unică în lume, datând din secolul al XI-lea. Aceasta ilustrează în 58 de scene cucerirea Angliei de către ducele normand William Cuceritorul și bătălia de la Hastings din 1066. În ciuda numelui, nu este o tapițerie țesută, ci o broderie pe pânză de in. Opera are o lungime de aproape 70 de metri și oferă detalii prețioase despre viața medievală.",
      en: "The Bayeux Tapestry is a unique 11th-century masterpiece. It depicts the events leading up to the Norman conquest of England by William the Conqueror, culminating in the Battle of Hastings in 1066. Despite its name, it is an embroidery on linen rather than a woven tapestry. Nearly 70 meters long, it provides invaluable insights into medieval life and warfare."
    },
    facts: {
      de: ["Der Teppich ist etwa 50 Zentimeter hoch und 68 Meter lang.", "Er wurde wahrscheinlich in England kurz nach 1066 angefertigt.", "Es werden 626 Personen, 202 Pferde und 505 andere Tiere dargestellt.", "Die Stickerei besteht aus Wolle in acht verschiedenen Farben.", "Er wird im Musée de la Tapisserie de Bayeux ausgestellt.", "Seit 2007 gehört er zum UNESCO-Weltdokumentenerbe.", "Der Teppich enthält auch Darstellungen des Halleyschen Kometen."],
      hu: ["A kárpit körülbelül 50 centiméter magas és 68 méter hosszú.", "Valószínűleg Angliában készült röviddel 1066 után.", "626 személyt, 202 lovat és 505 egyéb állatot ábrázol.", "A hímzés nyolcféle színű gyapjúfonallal készült.", "A Bayeux-i Kárpit Múzeumban látható.", "2007 óta az UNESCO Világemlékezet listáján szerepel.", "A kárpiton a Halley-üstökös ábrázolása is látható."],
      ro: ["Tapițeria are aproximativ 50 cm înălțime și 68 m lungime.", "A fost probabil realizată în Anglia la scurt timp după 1066.", "Sunt reprezentate 626 de persoane, 202 cai și 505 alte animale.", "Broderia este realizată din lână în opt culori diferite.", "Este expusă la Muzeul Tapițeriei din Bayeux.", "Face parte din registrul UNESCO 'Memoria Lumii' din 2007.", "Tapițeria include și o reprezentare a cometei Halley."],
      en: ["The tapestry is about 50 centimeters high and 68 meters long.", "It was likely commissioned by Bishop Odo and made in England.", "It features 626 people, 202 horses, and 505 other animals.", "The embroidery uses wool yarn in eight distinct colors.", "It is displayed at the Musée de la Tapisserie de Bayeux.", "Inscribed in UNESCO's Memory of the World Register in 2007.", "It contains one of the earliest known depictions of Halley's Comet."]
    }
  },
  {
    id: "fr-omaha-beach",
    type: "historical",
    parent: "FR-NOR",
    coords: [-0.9833, 49.3767],
    name: { de: "Omaha Beach", hu: "Omaha-part", ro: "Plaja Omaha", en: "Omaha Beach" },
    image: "/geo-images/france/omaha-beach.webp",
    description: {
      de: "Omaha Beach ist einer der fünf Landungsabschnitte der Alliierten in der Normandie am D-Day, dem 6. Juni 1944. Hier fanden die verlustreichsten Kämpfe der gesamten Operation Overlord statt. Die US-Truppen stießen auf heftigen Widerstand der deutschen Verteidiger. Heute ist der Strand ein Ort des Gedenkens und beherbergt den beeindruckenden amerikanischen Soldatenfriedhof von Colleville-sur-Mer.",
      hu: "Az Omaha-part egyike annak az öt partszakasznak, ahol a szövetséges erők partra szálltak Normandiában 1944. június 6-án, a D-napon. Itt zajlottak az Overlord hadművelet legvéresebb harcai. Az amerikai csapatok heves ellenállásba ütköztek a német védők részéről. Ma a tengerpart az emlékezés helyszíne, itt található a Colleville-sur-Mer-i amerikai katonai temető is.",
      ro: "Plaja Omaha este unul dintre cele cinci sectoare de debarcare ale aliaților în Normandia în Ziua Z, 6 iunie 1944. Aici au avut loc cele mai sângeroase lupte din întreaga Operațiune Overlord. Trupele americane au întâmpinat o rezistență acerbă din partea apărătorilor germani. Astăzi, plaja este un loc de comemorare și găzduiește impresionantul cimitir american din Colleville-sur-Mer.",
      en: "Omaha Beach was one of the five landing sectors for the Allied invasion of Normandy on D-Day, June 6, 1944. It was the site of the heaviest casualties during Operation Overlord. American troops faced fierce resistance from German defenders on the bluffs above the beach. Today, it is a place of solemn remembrance and home to the Normandy American Cemetery."
    },
    facts: {
      de: ["Die Landung begann um 6:30 Uhr morgens.", "Omaha Beach ist etwa 8 Kilometer lang.", "Die Alliierten erlitten hier am ersten Tag über 2.000 Verluste.", "Der Strand war durch steile Klippen und starke Befestigungen schwer einzunehmen.", "Der Film 'Der Soldat James Ryan' zeigt eine realistische Darstellung der Landung.", "Der amerikanische Friedhof umfasst fast 9.400 Gräber.", "Zahlreiche Denkmäler und Museen entlang der Küste erinnern an die Ereignisse."],
      hu: ["A partraszállás reggel 6:30-kor kezdődött.", "Az Omaha-part körülbelül 8 kilométer hosszú.", "A szövetségesek több mint 2000 embert vesztettek itt az első napon.", "A meredek sziklák és az erős erődítmények miatt nehéz volt bevenni.", "A 'Ryan közlegény megmentése' című film élethűen mutatja be a partraszállást.", "Az amerikai temetőben közel 9400 katona nyugszik.", "Számos emlékmű és múzeum őrzi az események emlékét a parton."],
      ro: ["Debarcarea a început la ora 6:30 dimineața.", "Plaja Omaha are o lungime de aproximativ 8 kilometri.", "Aliații au suferit peste 2.000 de pierderi aici în prima zi.", "Plaja a fost greu de cucerit din cauza falezelor abrupte și a fortificațiilor.", "Filmul 'Salvați soldatul Ryan' oferă o reprezentare realistă a debarcării.", "Cimitirul american cuprinde aproape 9.400 de morminte.", "Numeroase monumente și muzee de-a lungul coastei comemorează evenimentele."],
      en: ["The landings began at 6:30 AM.", "The beach sector is approximately 8 kilometers long.", "Allied forces suffered over 2,000 casualties here on the first day.", "The terrain was difficult due to steep bluffs and strong German defenses.", "The film 'Saving Private Ryan' depicts the landing on Omaha Beach.", "The American Cemetery overlooks the beach and contains nearly 9,400 graves.", "Numerous monuments and museums along the coast honor the fallen."]
    }
  },
  {
    id: "fr-chateau-vincennes",
    type: "historical",
    parent: "FR-IDF",
    coords: [2.4380, 48.8430],
    name: { de: "Schloss Vincennes", hu: "Vincennes-i kastély", ro: "Castelul Vincennes", en: "Château de Vincennes" },
    image: "/geo-images/france/chateau-vincennes.webp",
    description: {
      de: "Das Schloss Vincennes am östlichen Stadtrand von Paris ist die größte erhaltene mittelalterliche Festung Europas. Es diente lange Zeit als königliche Residenz und später als Gefängnis und Militärstützpunkt. Besonders beeindruckend ist der 52 Meter hohe Wohnturm (Donjon), der höchste seiner Art in Europa. Die Anlage umfasst auch eine prächtige gotische Kapelle, die Sainte-Chapelle de Vincennes.",
      hu: "A Párizs keleti szélén található Vincennes-i kastély Európa legnagyobb épségben maradt középkori erődítménye. Hosszú ideig királyi rezidenciaként szolgált, később börtönként és katonai bázisként használták. Különösen lenyűgöző az 52 méter magas lakótorony (donjon), amely a legmagasabb ilyen jellegű építmény Európában. A várkomplexumhoz tartozik egy pompás gótikus kápolna is.",
      ro: "Castelul Vincennes, situat la marginea de est a Parisului, este cea mai mare fortăreață medievală păstrată în Europa. A servit mult timp ca reședință regală, iar ulterior ca închisoare și bază militară. Impresionant este turnul de locuință (donjon) de 52 de metri înălțime, cel mai înalt de acest tip din Europa. Complexul include și o capelă gotică superbă, Sainte-Chapelle de Vincennes.",
      en: "The Château de Vincennes, located on the eastern edge of Paris, is the largest surviving medieval royal fortress in Europe. It served as a royal residence for centuries before becoming a prison and military headquarters. Its massive keep (donjon), standing 52 meters high, is the tallest of its kind in Europe. The complex also features a beautiful Gothic chapel, the Sainte-Chapelle de Vincennes."
    },
    facts: {
      de: ["Der Donjon wurde im 14. Jahrhundert unter Karl V. fertiggestellt.", "Berühmte Gefangene waren unter anderem der Marquis de Sade und Diderot.", "Das Schloss ist von einem tiefen Graben und einer 1,2 km langen Mauer umgeben.", "Hier wurde 1917 die Spionin Mata Hari hingerichtet.", "Es beherbergt heute das historische Archiv der französischen Armee.", "Die Sainte-Chapelle wurde nach dem Vorbild der Kapelle auf der Île de la Cité erbaut.", "Das Schloss ist bequem mit der Pariser Metro erreichbar."],
      hu: ["A lakótorony a 14. században, V. Károly alatt készült el.", "Híres foglyai közé tartozott Sade márki és Diderot is.", "A kastélyt mély árok és egy 1,2 km hosszú fal veszi körül.", "Itt végezték ki 1917-ben Mata Harit, a híres kémnőt.", "Ma itt található a francia hadsereg történelmi archívuma.", "A Sainte-Chapelle a párizsi Île de la Cité-n található kápolna mintájára épült.", "A kastély könnyen megközelíthető a párizsi metróval."],
      ro: ["Donjonul a fost finalizat în secolul al XIV-lea sub Carol al V-lea.", "Printre prizonierii celebri s-au numărat Marchizul de Sade și Diderot.", "Castelul este înconjurat de un șanț adânc și un zid de 1,2 km lungime.", "Aici a fost executată spioana Mata Hari în 1917.", "Găzduiește în prezent arhivele istorice ale armatei franceze.", "Sainte-Chapelle a fost construită după modelul celei de pe Île de la Cité.", "Castelul este ușor accesibil cu metroul parizian."],
      en: ["The keep was completed in the 14th century under Charles V.", "Famous prisoners included the Marquis de Sade and Denis Diderot.", "The fortress is surrounded by a deep moat and a 1.2 km long curtain wall.", "The spy Mata Hari was executed here in 1917.", "It now houses the historical archives of the French Ministry of Defense.", "The Sainte-Chapelle was modeled after the one on the Île de la Cité.", "The castle is easily accessible via the Paris Metro."]
    }
  },
  {
    id: "fr-mont-blanc",
    type: "mountain",
    parent: "FR-ARA",
    coords: [6.8646, 45.8326],
    name: { de: "Mont Blanc", hu: "Mont Blanc", ro: "Mont Blanc", en: "Mont Blanc" },
    image: "/geo-images/france/mont-blanc.webp",
    description: {
      de: "Der Mont Blanc ist mit 4.807 Metern der höchste Berg der Alpen und Westeuropas. Er liegt an der Grenze zwischen Frankreich und Italien, wobei der Gipfel auf französischem Staatsgebiet liegt. Der Berg ist ein Symbol für den Alpinismus und zieht jährlich Tausende von Bergsteigern und Touristen an. Die Region um den Mont Blanc bietet spektakuläre Gletscherlandschaften und erstklassige Skigebiete.",
      hu: "A Mont Blanc 4807 méteres magasságával az Alpok és Nyugat-Európa legmagasabb hegycsúcsa. A francia-olasz határon fekszik, csúcsa francia területen található. A hegy az alpinizmus szimbóluma, amely évente hegymászók és turisták ezreit vonzza. A Mont Blanc környéke lenyűgöző gleccserlatványt és világszínvonalú sípályákat kínál az idelátogatóknak.",
      ro: "Mont Blanc este cel mai înalt munte din Alpi și din Europa de Vest, având o înălțime de 4.807 metri. Situat la granița dintre Franța și Italia, vârful său se află pe teritoriul francez. Muntele este un simbol al alpinismului și atrage anual mii de alpiniști și turiști. Regiunea din jurul Mont Blanc oferă peisaje glaciare spectaculoase și stațiuni de schi de talie mondială.",
      en: "Mont Blanc, standing at 4,807 meters, is the highest mountain in the Alps and Western Europe. It is located on the border between France and Italy, with the summit being in French territory. The mountain is a symbol of alpinism and attracts thousands of climbers and tourists every year. The region around Mont Blanc offers spectacular glacial landscapes and world-class ski resorts."
    },
    facts: {
      de: ["Die Erstbesteigung erfolgte 1786 durch Jacques Balmat und Michel-Gabriel Paccard.", "Die Höhe des Berges variiert je nach Schneebedeckung.", "Der Mont-Blanc-Tunnel verbindet Frankreich und Italien unter dem Berg.", "Chamonix am Fuße des Berges war Austragungsort der ersten Olympischen Winterspiele.", "Es gibt mehrere klassische Routen zum Gipfel.", "Das Massiv beherbergt zahlreiche Gletscher, darunter das Mer de Glace.", "Der Berg ist Teil des Natura-2000-Netzwerks zum Schutz der Artenvielfalt."],
      hu: ["Az első megmászás 1786-ban történt Jacques Balmat és Michel-Gabriel Paccard által.", "A hegy magassága a hóvastagságtól függően változik.", "A Mont Blanc-alagút a hegy alatt köti össze Franciaországot és Olaszországot.", "A hegy lábánál fekvő Chamonix adott otthont az első téli olimpiának.", "Számos klasszikus útvonal vezet a csúcsra.", "A masszívum számos gleccsernek ad otthont, köztük a Mer de Glace-nak.", "A hegy a Natura 2000 hálózat része a biológiai sokféleség védelme érdekében."],
      ro: ["Prima ascensiune a fost realizată în 1786 de Jacques Balmat și Michel-Gabriel Paccard.", "Înălțimea muntelui variază în funcție de grosimea stratului de zăpadă.", "Tunelul Mont Blanc leagă Franța de Italia pe sub munte.", "Chamonix, la poalele muntelui, a găzduit primele Jocuri Olimpice de iarnă.", "Există mai multe rute clasice către vârf.", "Masivul găzduiește numeroși ghețari, inclusiv Mer de Glace.", "Muntele face parte din rețeaua Natura 2000 pentru protejarea biodiversității."],
      en: ["The first ascent was made in 1786 by Jacques Balmat and Michel-Gabriel Paccard.", "The mountain's height varies depending on the snow cover.", "The Mont Blanc Tunnel connects France and Italy beneath the mountain.", "Chamonix, at the foot of the mountain, hosted the first Winter Olympics.", "There are several classic routes to reach the summit.", "The massif is home to numerous glaciers, including the Mer de Glace.", "The mountain is part of the Natura 2000 network for biodiversity protection."]
    }
  },
  {
    id: "fr-gorges-verdon",
    type: "landmark",
    parent: "FR-PAC",
    coords: [6.3556, 43.7544],
    name: { de: "Verdonschlucht", hu: "Verdon-kanyon", ro: "Cheile Verdonului", en: "Gorges du Verdon" },
    image: "/geo-images/france/gorges-verdon.webp",
    description: {
      de: "Die Verdonschlucht in der Provence gilt als der 'Grand Canyon Europas'. Der Fluss Verdon hat sich hier bis zu 700 Meter tief in das Kalksteingebirge gegraben und eine spektakuläre, 21 Kilometer lange Schlucht geformt. Das türkisfarbene Wasser des Flusses bildet einen faszinierenden Kontrast zu den hellen Felswänden. Die Region ist ein Paradies für Wanderer, Kletterer und Wassersportler.",
      hu: "A provence-i Verdon-kanyont gyakran nevezik 'Európa Grand Canyonjának'. A Verdon folyó helyenként 700 méter mélyen vágta bele magát a mészkőhegységbe, egy 21 kilométer hosszú, látványos szurdokot hozva létre. A folyó türkizkék vize lenyűgöző kontrasztot alkot a világos sziklafalakkal. A környék a túrázók, sziklamászók és a vízi sportok kedvelőinek paradicsoma.",
      ro: "Cheile Verdonului din Provence sunt considerate 'Marele Canyon al Europei'. Râul Verdon a săpat aici o albie de până la 700 de metri adâncime în masivul calcaros, formând un defileu spectaculos de 21 de kilometri lungime. Apa turcoaz a râului creează un contrast fascinant cu pereții stâncoși deschiși la culoare. Regiunea este un paradis pentru drumeții, alpiniști și pasionații de sporturi nautice.",
      en: "The Gorges du Verdon in Provence is often called the 'Grand Canyon of Europe'. The Verdon River has carved a spectacular canyon up to 700 meters deep into the limestone plateau, stretching for 21 kilometers. The river's striking turquoise water creates a stunning contrast with the pale limestone cliffs. The region is a haven for hikers, rock climbers, and water sports enthusiasts."
    },
    facts: {
      de: ["Die Schlucht endet im Stausee Lac de Sainte-Croix.", "Die engste Stelle der Schlucht ist nur wenige Meter breit.", "Es gibt zahlreiche Aussichtspunkte entlang der Panoramastraßen.", "Die Region beherbergt seltene Gänsegeier, die dort wieder angesiedelt wurden.", "Klettern ist an den bis zu 700 Meter hohen Wänden sehr beliebt.", "Tretbootfahren auf dem Verdon ist eine der Hauptattraktionen.", "Die Schlucht wurde erst Anfang des 20. Jahrhunderts vollständig erforscht."],
      hu: ["A szurdok a Lac de Sainte-Croix víztározónál ér véget.", "A kanyon legkeskenyebb pontja mindössze néhány méter széles.", "A panorámautak mentén számos kilátópont található.", "A területen ritka fakó keselyűk élnek, amelyeket sikeresen visszatelepítettek.", "A sziklamászás nagyon népszerű a 700 méter magas falakon.", "A vízibiciklizés a Verdon folyón az egyik legfőbb turisztikai vonzerő.", "A szurdokot csak a 20. század elején térképezték fel teljesen."],
      ro: ["Defileul se termină în lacul de acumulare Lac de Sainte-Croix.", "Cea mai îngustă porțiune a cheilor are doar câțiva metri lățime.", "Există numeroase puncte de belvedere de-a lungul drumurilor panoramice.", "Regiunea găzduiește vulturi pleșuvi suri, care au fost recolonizați acolo.", "Alpinismul este foarte popular pe pereții de până la 700 de metri înălțime.", "Plimbările cu hidrobicicleta pe Verdon sunt una dintre atracțiile principale.", "Cheile au fost explorate complet abia la începutul secolului al XX-lea."],
      en: ["The canyon ends in the man-made Lake of Sainte-Croix.", "The narrowest part of the gorge is only a few meters wide.", "Numerous viewpoints are located along the scenic rim roads.", "The area is home to rare griffon vultures, which were reintroduced there.", "Rock climbing is world-renowned on the 700-meter-high cliffs.", "Renting a pedal boat to enter the canyon is a popular activity.", "The gorge was only fully explored and mapped in the early 20th century."]
    }
  },
  {
    id: "fr-calanques",
    type: "landmark",
    parent: "FR-PAC",
    coords: [5.4633, 43.2150],
    name: { de: "Calanques Nationalpark", hu: "Calanques Nemzeti Park", ro: "Parcul Național Calanques", en: "Calanques NP" },
    image: "/geo-images/france/calanques.webp",
    description: {
      de: "Der Nationalpark Calanques erstreckt sich entlang der Mittelmeerküste zwischen Marseille und Cassis. Er ist bekannt für seine fjordähnlichen Buchten, die tief in die weißen Kalksteinfelsen einschneiden. Das kristallklare, türkisfarbene Wasser lädt zum Baden und Schnorcheln ein. Der Park schützt eine einzigartige Flora und Fauna sowohl an Land als auch unter Wasser.",
      hu: "A Calanques Nemzeti Park a Marseille és Cassis közötti földközi-tengeri partvonal mentén húzódik. Híres a fjordokra emlékeztető öbleiről, amelyek mélyen benyúlnak a fehér mészkősziklák közé. A kristálytiszta, türkizkék víz kiválóan alkalmas fürdőzésre és búvárkodásra. A park egyedülálló növény- és állatvilágot véd mind a szárazföldön, mind a víz alatt.",
      ro: "Parcul Național Calanques se întinde de-a lungul coastei mediteraneene între Marsilia și Cassis. Este renumit pentru golfurile sale asemănătoare fiordurilor, care pătrund adânc în stâncile albe de calcar. Apa cristalină, de culoare turcoaz, este ideală pentru înot și snorkeling. Parcul protejează o floră și faună unică, atât pe uscat, cât și în mediul marin.",
      en: "The Calanques National Park stretches along the Mediterranean coast between Marseille and Cassis. It is famous for its fjord-like inlets carved deep into the white limestone cliffs. The crystal-clear turquoise waters are perfect for swimming and snorkeling. The park protects a unique ecosystem of flora and fauna both on land and in the marine environment."
    },
    facts: {
      de: ["Gegründet im Jahr 2012 als erster Nationalpark, der Land, Meer und Stadtrand umfasst.", "Die höchste Klippe, Cap Canaille, ist 394 Meter hoch.", "Viele Buchten sind nur zu Fuß oder mit dem Boot erreichbar.", "Der Park beherbergt über 140 geschützte Tier- und Pflanzenarten.", "Im Sommer ist der Zugang wegen Waldbrandgefahr oft eingeschränkt.", "Die Unterwasserhöhle Cosquer enthält prähistorische Malereien.", "Beliebtes Ziel für Wanderungen mit spektakulären Ausblicken."],
      hu: ["2012-ben alapították, ez az első park, amely szárazföldi, tengeri és városközeli területeket is magában foglal.", "A legmagasabb szikla, a Cap Canaille 394 méter magas.", "Sok öböl csak gyalogosan vagy hajóval közelíthető meg.", "A park több mint 140 védett állat- és növényfajnak ad otthont.", "Nyáron a tűzveszély miatt gyakran korlátozzák a belépést.", "A víz alatti Cosquer-barlang prehisztorikus barlangrajzokat rejt.", "Népszerű túracélpont látványos tengeri panorámával."],
      ro: ["Fondat în 2012, este primul parc național care include zone terestre, marine și periurbane.", "Cea mai înaltă faleză, Cap Canaille, are 394 de metri înălțime.", "Multe golfuri sunt accesibile doar pe jos sau cu barca.", "Parcul găzduiește peste 140 de specii protejate de animale și plante.", "Accesul este adesea restricționat vara din cauza riscului de incendii.", "Peștera submarină Cosquer conține picturi preistorice.", "Destinație populară pentru drumeții cu vederi spectaculoase."],
      en: ["Established in 2012, it's the first national park to include land, sea, and peri-urban areas.", "The highest cliff, Cap Canaille, rises 394 meters above the sea.", "Many inlets are only accessible by foot or by boat.", "The park is home to over 140 protected animal and plant species.", "Access is often restricted in summer due to forest fire risks.", "The underwater Cosquer Cave contains prehistoric paintings.", "A popular destination for hiking with breathtaking coastal views."]
    }
  },
  {
    id: "fr-camargue",
    type: "landmark",
    parent: "FR-PAC",
    coords: [4.5583, 43.5389],
    name: { de: "Camargue", hu: "Camargue", ro: "Camargue", en: "Camargue" },
    image: "/geo-images/france/camargue.webp",
    description: {
      de: "Die Camargue ist ein riesiges Feuchtgebiet im Rhone-Delta in Südfrankreich. Sie ist weltberühmt für ihre wilden weißen Pferde, schwarzen Stiere und rosa Flamingos. Die Landschaft ist geprägt von Salzwiesen, Lagunen und Reisfeldern. Die Camargue ist ein wichtiges Naturschutzgebiet und ein einzigartiger Lebensraum für zahlreiche Vogelarten.",
      hu: "A Camargue egy hatalmas mocsaras vidék a Rhone-deltában, Dél-Franciaországban. Világszerte híres vadon élő fehér lovairól, fekete bikáiról és rózsaszín flamingóiról. A tájat sós mocsarak, lagúnák és rizsföldek jellemzik. A Camargue fontos természetvédelmi terület és egyedülálló élőhely számos madárfaj számára.",
      ro: "Camargue este o zonă umedă vastă situată în delta Ronului, în sudul Franței. Este faimoasă în întreaga lume pentru caii săi albi sălbatici, taurii negri și flamingo roz. Peisajul este marcat de mlaștini sărate, lagune și câmpuri de orez. Camargue este o rezervație naturală importantă și un habitat unic pentru numeroase specii de păsări.",
      en: "The Camargue is a vast wetland located in the Rhone Delta in southern France. It is world-famous for its wild white horses, black bulls, and pink flamingos. The landscape is characterized by salt marshes, lagoons, and rice paddies. The Camargue is a major nature reserve and a unique habitat for numerous bird species."
    },
    facts: {
      de: ["Die Camargue-Pferde gelten als eine der ältesten Pferderassen der Welt.", "Es ist das einzige Brutgebiet für rosa Flamingos in Frankreich.", "Die Region ist bekannt für die Gewinnung von Meersalz (Fleur de Sel).", "Saintes-Maries-de-la-Mer ist das kulturelle Zentrum der Region.", "Die Camargue-Stiere werden für unblutige Stierspiele gezüchtet.", "Reisanbau ist ein wichtiger Wirtschaftszweig in der Camargue.", "Das Gebiet umfasst über 140.000 Hektar."],
      hu: ["A camargue-i ló a világ egyik legősibb lófajtájának számít.", "Ez az egyetlen hely Franciaországban, ahol a rózsaszín flamingók fészkelnek.", "A régió híres a tengeri só (Fleur de Sel) lepárlásáról.", "Saintes-Maries-de-la-Mer a vidék kulturális központja.", "A camargue-i bikákat vér nélküli bikajátékokhoz tenyésztik.", "A rizstermesztés fontos gazdasági ágazat a területen.", "A vidék több mint 140 000 hektáron terül el."],
      ro: ["Caii de Camargue sunt considerați una dintre cele mai vechi rase din lume.", "Este singurul loc de cuibărit pentru flamingo roz din Franța.", "Regiunea este cunoscută pentru producția de sare marină (Fleur de Sel).", "Saintes-Maries-de-la-Mer este centrul cultural al regiunii.", "Taurii de Camargue sunt crescuți pentru jocuri cu tauri fără vărsare de sânge.", "Cultivarea orezului este o ramură economică importantă în zonă.", "Teritoriul cuprinde peste 140.000 de hectare."],
      en: ["Camargue horses are considered one of the oldest breeds in the world.", "It is the only nesting ground for pink flamingos in France.", "The region is famous for its sea salt production (Fleur de Sel).", "Saintes-Maries-de-la-Mer is the cultural heart of the region.", "Camargue bulls are bred for non-lethal bullfighting games.", "Rice cultivation is a significant part of the local economy.", "The area covers over 140,000 hectares."]
    }
  },
  {
    id: "fr-dune-pilat",
    type: "landmark",
    parent: "FR-NAQ",
    coords: [-1.2136, 44.5864],
    name: { de: "Dune du Pilat", hu: "Dune du Pilat", ro: "Duna lui Pilat", en: "Dune du Pilat" },
    image: "/geo-images/france/dune-pilat.webp",
    description: {
      de: "Die Dune du Pilat an der Atlantikküste bei Arcachon ist die höchste Wanderdüne Europas. Sie erstreckt sich über fast drei Kilometer Länge und erreicht eine Höhe von bis zu 110 Metern. Von ihrem Gipfel aus hat man einen atemberaubenden Blick auf den Atlantik und die umliegenden Pinienwälder. Die Düne bewegt sich jedes Jahr einige Meter landeinwärts.",
      hu: "Az Arcachon melletti Atlanti-parton található Dune du Pilat Európa legmagasabb homokdűnéje. Közel három kilométer hosszan nyúlik el, magassága pedig eléri a 110 métert. Tetejéről lélegzetelállító kilátás nyílik az Atlanti-óceánra és a környező fenyőerdőkre. A dűne évente néhány métert halad a szárazföld belseje felé.",
      ro: "Duna lui Pilat, situată pe coasta atlantică lângă Arcachon, este cea mai înaltă dună de nisip din Europa. Se întinde pe o lungime de aproape trei kilometri și atinge o înălțime de până la 110 metri. De pe vârful său, se oferă o vedere panoramică superbă asupra Oceanului Atlantic și a pădurilor de pini din jur. Duna se deplasează anual cu câțiva metri spre interiorul uscatului.",
      en: "The Dune du Pilat, located on the Atlantic coast near Arcachon, is the tallest sand dune in Europe. It stretches for nearly three kilometers and reaches heights of up to 110 meters. From its summit, visitors can enjoy breathtaking views of the Atlantic Ocean and the surrounding pine forests. The dune moves several meters inland every year."
    },
    facts: {
      de: ["Das Volumen der Düne beträgt etwa 60 Millionen Kubikmeter.", "Sie besteht aus feinem Quarzsand.", "Im Sommer wird eine Treppe installiert, um den Aufstieg zu erleichtern.", "Die Düne ist ein beliebter Ort für Paragliding.", "Sie gehört zum Naturschutzgebiet Bassin d'Arcachon.", "Unter dem Sand wurden prähistorische Siedlungsspuren gefunden.", "Jährlich besuchen über zwei Millionen Menschen die Düne."],
      hu: ["A dűne térfogata körülbelül 60 millió köbméter.", "Finom kvarchomokból áll.", "Nyáron lépcsőt helyeznek ki, hogy megkönnyítsék a feljutást.", "A dűne a siklóernyősök kedvelt helyszíne.", "Az Arcachon-öböl természetvédelmi területéhez tartozik.", "A homok alatt prehisztorikus települések nyomait találták meg.", "Évente több mint közel kétmillió ember látogatja meg a dűnét."],
      ro: ["Volumul dunei este de aproximativ 60 de milioane de metri cubi.", "Este formată din nisip fin de cuarț.", "Vara este instalată o scară pentru a facilita urcarea.", "Duna este un loc popular pentru parapantă.", "Face parte din rezervația naturală a Bazinului Arcachon.", "Sub nisip au fost găsite urme ale unor așezări preistorice.", "Peste două milioane de oameni vizitează duna în fiecare an."],
      en: ["The dune contains approximately 60 million cubic meters of sand.", "It is composed entirely of fine quartz sand.", "A staircase is installed during the summer to help visitors climb up.", "The dune is a world-famous spot for paragliding.", "It is part of the protected Bassin d'Arcachon area.", "Prehistoric remains have been discovered beneath the shifting sands.", "More than two million people visit the dune annually."]
    }
  },
  {
    id: "fr-corsica-gr20",
    type: "mountain",
    parent: "FR-COR",
    coords: [9.0000, 42.0000],
    name: { de: "GR20 Korsika", hu: "GR20 Korzika", ro: "GR20 Corsica", en: "Corsica GR20" },
    image: "/geo-images/france/corsica-gr20.webp",
    description: {
      de: "Der GR20 auf Korsika gilt als einer der schwierigsten und schönsten Fernwanderwege Europas. Er durchquert die Insel von Nordwesten nach Südosten über das zerklüftete Hochgebirge. Auf einer Länge von etwa 180 Kilometern bietet er spektakuläre Ausblicke auf schroffe Gipfel und das Mittelmeer. Die Wanderung erfordert eine sehr gute Kondition und Trittsicherheit.",
      hu: "A korzikai GR20-at Európa egyik legnehezebb és legszebb távolsági túraútvonalának tartják. Északnyugatról délkelet felé szeli át a szigetet a vad hegyvidéken keresztül. A körülbelül 180 kilométer hosszú útvonal látványos kilátást nyújt a csipkés hegycsúcsokra és a Földközi-tengerre. A túra kiváló állóképességet és biztos járást igényel.",
      ro: "GR20 din Corsica este considerat unul dintre cele mai dificile și frumoase trasee de drumeție pe distanțe lungi din Europa. Traversează insula de la nord-vest la sud-est prin munții înalți și accidentați. Pe o lungime de aproximativ 180 de kilometri, oferă vederi spectaculoase asupra vârfurilor stâncoase și a Mării Mediterane. Traseul necesită o condiție fizică foarte bună.",
      en: "The GR20 in Corsica is considered one of the most difficult and beautiful long-distance hiking trails in Europe. It crosses the island from northwest to southeast through the rugged high mountains. Stretching for about 180 kilometers, it offers spectacular views of jagged peaks and the Mediterranean Sea. The hike requires excellent physical condition and sure-footedness."
    },
    facts: {
      de: ["Der Weg ist in 16 Etappen unterteilt.", "Der höchste Punkt ist der Monte Cinto mit 2.706 Metern.", "Wanderer übernachten meist in einfachen Berghütten (Refuges).", "Die beste Reisezeit ist von Juni bis September.", "Der Weg ist mit rot-weißen Markierungen gekennzeichnet.", "Er wurde in den 1970er Jahren angelegt.", "Die gesamte Wanderung dauert etwa 15 Tage."],
      hu: ["Az útvonal 16 szakaszra van osztva.", "A legmagasabb pont a Monte Cinto, 2706 méterrel.", "A túrázók általában egyszerű hegyi menedékházakban szállnak meg.", "A legjobb időszak a túrázásra júniustól szeptemberig tart.", "Az utat piros-fehér jelzések mutatják.", "Az 1970-es években alakították ki.", "A teljes túra körülbelül 15 napot vesz igénybe."],
      ro: ["Traseul este împărțit în 16 etape.", "Cel mai înalt punct este Monte Cinto, la 2.706 metri.", "Drumeții înnoptează de obicei în refugii montane simple.", "Cea mai bună perioadă pentru parcurgere este din iunie până în septembrie.", "Traseul este marcat cu semne roșu-alb.", "A fost creat în anii 1970.", "Întregul traseu durează aproximativ 15 zile."],
      en: ["The trail is traditionally divided into 16 daily stages.", "The highest point reached is near Monte Cinto at 2,706 meters.", "Hikers usually stay in basic mountain huts called 'refuges'.", "The best time to hike is from June to September.", "The path is marked with red and white blazes.", "The trail was established in the early 1970s.", "Completing the entire trail takes about 15 days on average."]
    }
  },
  {
    id: "fr-pyrenees-np",
    type: "mountain",
    parent: "FR-OCC",
    coords: [0.0000, 42.8000],
    name: { de: "Nationalpark Pyrenäen", hu: "Pireneusi Nemzeti Park", ro: "Parcul Național Pirinei", en: "Pyrenees NP" },
    image: "/geo-images/france/pyrenees-np.webp",
    description: {
      de: "Der Nationalpark Pyrenäen erstreckt sich entlang der Grenze zu Spanien im Südwesten Frankreichs. Er schützt eine wilde Hochgebirgslandschaft mit beeindruckenden Gipfeln, Bergseen und Wasserfällen. Der Park ist ein Rückzugsort für seltene Tierarten wie den Braunbären und den Gänsegeier. Wanderer finden hier ein weitläufiges Wegenetz in unberührter Natur.",
      hu: "A Pireneusi Nemzeti Park a spanyol határ mentén húzódik Franciaország délnyugati részén. Vadregényes magashegyi tájat véd, lenyűgöző csúcsokkal, tengerszemekkel és vízesésekkel. A park olyan ritka állatfajok menedéke, mint a barna medve és a fakó keselyű. A túrázók kiterjedt útvonalhálózatot találnak az érintetlen természetben.",
      ro: "Parcul Național Pirinei se întinde de-a lungul graniței cu Spania, în sud-vestul Franței. Protejează un peisaj montan sălbatic, cu vârfuri impresionante, lacuri glaciare și cascade. Parcul este un refugiu pentru specii rare precum ursul brun și vulturul pleșuv sur. Drumeții pot explora o rețea vastă de trasee în natură virgină.",
      en: "The Pyrenees National Park stretches along the Spanish border in southwestern France. It protects a wild high-mountain landscape featuring impressive peaks, glacial lakes, and waterfalls. The park is a sanctuary for rare species such as the brown bear and the griffon vulture. Hikers can enjoy an extensive network of trails through pristine nature."
    },
    facts: {
      de: ["Gegründet im Jahr 1967.", "Der höchste Gipfel im Park ist der Vignemale (3.298 m).", "Beherbergt den berühmten Felsenkessel Cirque de Gavarnie.", "Es gibt keine Straßen, die den Park von Nord nach Süd durchqueren.", "Der Park grenzt an den spanischen Nationalpark Ordesa y Monte Perdido.", "Über 2.500 Pflanzenarten sind hier heimisch.", "Beliebt für Bergsteigen, Wandern und Skilanglauf."],
      hu: ["1967-ben alapították.", "A park legmagasabb csúcsa a Vignemale (3298 m).", "Itt található a híres Gavarnie-sziklakatlan.", "Nincsenek utak, amelyek észak-déli irányban átszelnék a parkot.", "A park határos a spanyol Ordesa y Monte Perdido Nemzeti Parkkal.", "Több mint 2500 növényfaj honos a területen.", "Népszerű a hegymászás, a túrázás és a sífutás körében."],
      ro: ["Fondat în anul 1967.", "Cel mai înalt vârf din parc este Vignemale (3.298 m).", "Găzduiește celebrul circ glaciar Cirque de Gavarnie.", "Nu există drumuri care să traverseze parcul de la nord la sud.", "Se învecinează cu parcul național spaniol Ordesa y Monte Perdido.", "Peste 2.500 de specii de plante sunt native aici.", "Popular pentru alpinism, drumeții și schi fond."],
      en: ["Established in 1967.", "The highest peak within the park is Vignemale at 3,298 meters.", "Home to the famous Cirque de Gavarnie, a massive natural amphitheater.", "No roads cross the park from north to south.", "It borders the Ordesa y Monte Perdido National Park in Spain.", "Over 2,500 plant species are found within its boundaries.", "A prime location for mountaineering, hiking, and cross-country skiing."]
    }
  },
  {
    id: "fr-vanoise",
    type: "mountain",
    parent: "FR-ARA",
    coords: [6.7667, 45.4000],
    name: { de: "Vanoise Nationalpark", hu: "Vanoise Nemzeti Park", ro: "Parcul Național Vanoise", en: "Vanoise NP" },
    image: "/geo-images/france/vanoise.webp",
    description: {
      de: "Der Nationalpark Vanoise in den Savoyer Alpen war der erste Nationalpark Frankreichs. Er liegt zwischen den Tälern der Tarentaise und der Maurienne und grenzt an den italienischen Nationalpark Gran Paradiso. Die Hochgebirgslandschaft ist geprägt von Gletschern, Bergseen und einer reichen alpinen Flora. Der Park ist besonders bekannt für seine große Steinbock-Population.",
      hu: "A Savoyai-Alpokban található Vanoise Nemzeti Park volt Franciaország első nemzeti parkja. A Tarentaise- és Maurienne-völgyek között fekszik, és határos az olasz Gran Paradiso Nemzeti Parkkal. A magashegyi tájat gleccserek, tengerszemek és gazdag alpesi növényvilág jellemzi. A park különösen híres jelentős kőszáli kecske állományáról.",
      ro: "Parcul Național Vanoise din Alpii Savoiei a fost primul parc național din Franța. Este situat între văile Tarentaise și Maurienne și se învecinează cu parcul italian Gran Paradiso. Peisajul montan înalt este marcat de ghețari, lacuri alpine și o floră montană bogată. Parcul este renumit în special pentru populația sa mare de capre negre și ibex.",
      en: "The Vanoise National Park in the Savoy Alps was the first national park established in France. It is situated between the Tarentaise and Maurienne valleys and borders Italy's Gran Paradiso National Park. The high-altitude landscape features glaciers, alpine lakes, and a rich variety of mountain flora. The park is especially well-known for its large population of Alpine ibex."
    },
    facts: {
      de: ["Gegründet im Jahr 1963 zum Schutz des Steinbocks.", "Höchster Gipfel ist die Grande Casse (3.855 m).", "Es gibt über 500 Kilometer markierte Wanderwege.", "Der Park beherbergt etwa 1.200 Pflanzenarten.", "Zusammen mit dem Gran Paradiso bildet er eines der größten Schutzgebiete Europas.", "In der Kernzone des Parks ist das Mitführen von Hunden verboten.", "Zahlreiche Berghütten bieten Unterkunft für Wanderer."],
      hu: ["1963-ban alapították a kőszáli kecskék védelmére.", "Legmagasabb csúcsa a Grande Casse (3855 m).", "Több mint 500 kilométernyi jelzett túraútvonal található itt.", "A park körülbelül 1200 növényfajnak ad otthont.", "A Gran Paradiso parkkal együtt Európa egyik legnagyobb védett területét alkotja.", "A park központi zónájába tilos kutyát bevinni.", "Számos hegyi menedékház várja a túrázókat."],
      ro: ["Fondat în 1963 pentru protejarea caprei ibex.", "Cel mai înalt vârf este Grande Casse (3.855 m).", "Există peste 500 de kilometri de trasee de drumeție marcate.", "Parcul găzduiește aproximativ 1.200 de specii de plante.", "Împreună cu Gran Paradiso, formează una dintre cele mai mari arii protejate din Europa.", "Accesul cu câini este interzis în zona centrală a parcului.", "Numeroase cabane montane oferă cazare pentru drumeți."],
      en: ["Founded in 1963 to save the Alpine ibex from extinction.", "The highest peak is Grande Casse, reaching 3,855 meters.", "Features over 500 kilometers of marked hiking trails.", "Home to approximately 1,200 different plant species.", "Together with Gran Paradiso, it forms one of the largest protected areas in Europe.", "Dogs are strictly prohibited in the core zone of the park.", "Numerous mountain huts (refuges) provide lodging for hikers."]
    }
  },
  {
    id: "fr-lascaux",
    type: "historical",
    parent: "FR-NAQ",
    coords: [1.1761, 45.0542],
    name: { de: "Höhle von Lascaux", hu: "Lascaux-i barlang", ro: "Peștera Lascaux", en: "Lascaux cave" },
    image: "/geo-images/france/lascaux.webp",
    description: {
      de: "Die Höhle von Lascaux im Périgord enthält einige der bedeutendsten prähistorischen Höhlenmalereien der Welt. Die Zeichnungen von Tieren wie Stieren, Hirschen und Pferden stammen aus dem Jungpaläolithikum (ca. 17.000 v. Chr.). Um die Originale zu schützen, ist die Höhle für die Öffentlichkeit gesperrt. Besucher können jedoch detailgetreue Nachbildungen (Lascaux II, III und IV) besichtigen.",
      hu: "A périgord-i Lascaux-i barlang a világ legjelentősebb őskori barlangrajzait rejti. A bikákat, szarvasokat és lovakat ábrázoló rajzok a felső paleolitikumból (i. e. 17 000 körül) származnak. Az eredeti rajzok védelme érdekében a barlang le van zárva a látogatók előtt. A turisták azonban megtekinthetik a barlang élethű másolatait (Lascaux II, III és IV).",
      ro: "Peștera Lascaux din Périgord conține unele dintre cele mai importante picturi rupestre preistorice din lume. Desenele reprezentând animale precum tauri, cerbi și cai datează din paleoliticul superior (aprox. 17.000 î.Hr.). Pentru a proteja originalele, peștera este închisă publicului. Vizitatorii pot însă admira replici fidele (Lascaux II, III și IV).",
      en: "The Lascaux Cave in the Périgord region contains some of the most famous prehistoric cave paintings in the world. The artwork, depicting animals like bulls, stags, and horses, dates back to the Upper Paleolithic period (around 17,000 BC). To preserve the originals, the cave is closed to the public, but visitors can explore highly detailed replicas (Lascaux II, III, and IV)."
    },
    facts: {
      de: ["Die Höhle wurde 1940 von vier Jugendlichen entdeckt.", "Sie wird oft als 'Sixtinische Kapelle der Urgeschichte' bezeichnet.", "Die Malereien wurden mit natürlichen Pigmenten wie Ocker und Manganoxid erstellt.", "Über 600 Malereien und 1.500 Gravuren schmücken die Wände.", "Die Höhle wurde 1963 für Besucher geschlossen, um Schimmelbildung zu verhindern.", "Lascaux IV ist ein hochmodernes internationales Zentrum für Höhlenkunst.", "Seit 1979 gehört sie zum UNESCO-Weltkulturerbe."],
      hu: ["A barlangot 1940-ben fedezte fel négy fiatal.", "Gyakran nevezik az 'őskor Sixtus-kápolnájának'.", "A festmények természetes pigmentekkel, például okkerrel készültek.", "Több mint 600 festmény és 1500 metszet díszíti a falakal.", "A barlangot 1963-ban zárták le a látogatók elől az állagmegóvás érdekében.", "A Lascaux IV egy ultramodern nemzetközi barlangművészeti központ.", "1979 óta az UNESCO Világörökség része."],
      ro: ["Peștera a fost descoperită în 1940 de patru adolescenți.", "Este adesea numită 'Capela Sixtină a preistoriei'.", "Picturile au fost realizate cu pigmenți naturali precum ocru și oxid de mangan.", "Peste 600 de picturi și 1.500 de gravuri decorează pereții.", "Peștera a fost închisă vizitatorilor în 1963 pentru a preveni degradarea.", "Lascaux IV este un centru internațional de artă rupestră ultramodern.", "Face parte din Patrimoniul Mondial UNESCO din 1979."],
      en: ["The cave was discovered in 1940 by four teenagers.", "It is often referred to as the 'Sistine Chapel of Prehistory'.", "The paintings were created using natural pigments like ochre and manganese oxide.", "Over 600 paintings and 1,500 engravings adorn the walls.", "The original cave was closed in 1963 to prevent damage from carbon dioxide and humidity.", "Lascaux IV is a state-of-the-art international center for cave art.", "Inscribed as a UNESCO World Heritage site in 1979."]
    }
  },
  {
    id: "fr-mer-de-glace",
    type: "landmark",
    parent: "FR-ARA",
    coords: [6.9286, 45.9081],
    name: { de: "Mer de Glace", hu: "Mer de Glace", ro: "Mer de Glace", en: "Mer de Glace" },
    image: "/geo-images/france/mer-de-glace.webp",
    description: {
      de: "Das Mer de Glace ('Eismeer') ist der größte Gletscher Frankreichs und liegt am Nordhang des Mont-Blanc-Massivs. Er ist etwa sieben Kilometer lang und beeindruckt durch seine gewaltigen Eismassen. Besucher können den Gletscher mit der Zahnradbahn von Chamonix aus erreichen. Eine künstlich geschlagene Eisgrotte ermöglicht einen Blick in das Innere des Gletschers.",
      hu: "A Mer de Glace ('Jégtenger') Franciaország legnagyobb gleccsere, amely a Mont Blanc-masszívum északi oldalán található. Körülbelül hét kilométer hosszú, és hatalmas jégtömegeivel nyűgözi le a látogatókat. A gleccser Chamonix-ból fogaskerekű vasúttal érhető el. Egy mesterségesen kialakított jégbarlang lehetővé teszi a betekintést a gleccser belsejébe.",
      ro: "Mer de Glace ('Marea de Gheață') este cel mai mare ghețar din Franța, situat pe versantul nordic al masivului Mont Blanc. Are o lungime de aproximativ șapte kilometri și impresionează prin masele sale enorme de gheață. Vizitatorii pot ajunge la ghețar cu trenul cu cremalieră din Chamonix. O grotă de gheață săpată artificial permite explorarea interiorului ghețarului.",
      en: "The Mer de Glace ('Sea of Ice') is the largest glacier in France, located on the northern slopes of the Mont Blanc massif. It is about seven kilometers long and is a spectacular sight with its massive ice formations. Visitors can reach the glacier via the Montenvers rack railway from Chamonix. A man-made ice cave allows visitors to walk inside the heart of the glacier."
    },
    facts: {
      de: ["Der Gletscher ist an einigen Stellen bis zu 200 Meter dick.", "Er bewegt sich etwa 120 Meter pro Jahr.", "Die Zahnradbahn von Montenvers wurde 1908 eröffnet.", "Aufgrund des Klimawandels zieht sich der Gletscher stark zurück.", "Über 400 Stufen führen von der Seilbahnstation hinunter zum Gletscher.", "Die Eisgrotte muss jedes Jahr neu in das Eis geschlagen werden.", "Es gibt ein Museum (Glaciorium), das die Geschichte des Gletschers erklärt."],
      hu: ["A gleccser helyenként akár 200 méter vastag is lehet.", "Évente körülbelül 120 métert mozog.", "A Montenvers fogaskerekű vasutat 1908-ban nyitották meg.", "A klímaváltozás miatt a gleccser jelentősen visszahúzódott.", "Több mint 400 lépcső vezet le a felvonótól a gleccserhez.", "A jégbarlangot minden évben újra ki kell vájni a jégbe.", "Egy múzeum (Glaciorium) mutatja be a gleccser történetét."],
      ro: ["Ghețarul are o grosime de până la 200 de metri în unele locuri.", "Se deplasează cu aproximativ 120 de metri pe an.", "Calea ferată cu cremalieră Montenvers a fost deschisă în 1908.", "Din cauza schimbărilor climatice, ghețarul se retrage rapid.", "Peste 400 de trepte duc de la stația de telecabină până la ghețar.", "Grota de gheață trebuie săpată din nou în fiecare an.", "Există un muzeu (Glaciorium) care explică istoria ghețarului."],
      en: ["The glacier is up to 200 meters thick in some places.", "It moves at a rate of about 120 meters per year.", "The Montenvers rack railway was opened in 1908.", "The glacier has been retreating significantly due to climate change.", "Over 400 steps lead down from the cable car station to the glacier surface.", "The ice cave must be re-carved every year as the glacier moves.", "A museum called the Glaciorium explains the history and science of the glacier."]
    }
  },
  {
    id: "fr-reims-cathedral",
    type: "city",
    parent: "FR-GES",
    coords: [4.0333, 49.2583],
    name: { de: "Kathedrale von Reims", hu: "Reimsi katedrális", ro: "Catedrala din Reims", en: "Reims Cathedral" },
    image: "/geo-images/france/reims-cathedral.webp",
    description: {
      de: "Die Kathedrale Notre-Dame de Reims ist ein Meisterwerk der französischen Gotik und ein Ort von großer historischer Bedeutung. Über Jahrhunderte hinweg wurden hier die französischen Könige gekrönt. Die Fassade ist berühmt für ihren reichen Skulpturenschmuck, insbesondere den 'lächelnden Engel'. Die Kathedrale wurde nach schweren Zerstörungen im Ersten Weltkrieg originalgetreu wiederaufgebaut.",
      hu: "A reimsi Notre-Dame-székesegyház a francia gótika remekműve és kiemelkedő történelmi jelentőségű helyszín. Évszázadokon át itt koronázták meg a francia királyokat. Homlokzata híres gazdag szobordíszítéséről, különösen a 'mosolygó angyalról'. Az első világháború súlyos pusztításai után a katedrálist hűen az eredeti állapotához építették újjá.",
      ro: "Catedrala Notre-Dame din Reims este o capodoperă a goticului francez și un loc de o importanță istorică majoră. Timp de secole, aici au fost încoronați regii Franței. Fațada este renumită pentru decorul său sculptural bogat, în special pentru 'Îngerul care zâmbește'. Catedrala a fost reconstruită fidel după distrugerile masive suferite în timpul Primului Război Mondial.",
      en: "Reims Cathedral (Notre-Dame de Reims) is a masterpiece of French Gothic architecture and a site of immense historical importance. For centuries, it was the traditional location for the coronation of the Kings of France. The facade is famous for its rich sculptural decoration, most notably the 'Smiling Angel'. The cathedral was meticulously restored after being severely damaged during World War I."
    },
    facts: {
      de: ["Baubeginn der heutigen Kathedrale war im Jahr 1211.", "Insgesamt wurden hier 33 französische Könige gekrönt.", "Die Kathedrale besitzt über 2.300 Statuen.", "Die Glasfenster stammen teilweise von Marc Chagall.", "Sie ist 150 Meter lang und die Türme sind 81 Meter hoch.", "Seit 1991 gehört sie zum UNESCO-Weltkulturerbe.", "Die Taufe von Chlodwig I. fand an dieser Stelle im Jahr 496 statt."],
      hu: ["A mai székesegyház építése 1211-ben kezdődött.", "Összesen 33 francia királyt koronáztak meg itt.", "A katedrális több mint 2300 szoborral rendelkezik.", "Az üvegablakok egy részét Marc Chagall tervezte.", "Hossza 150 méter, tornyai pedig 81 méter magasak.", "1991 óta az UNESCO Világörökség része.", "I. Klodvig megkeresztelése ezen a helyen történt 496-ban."],
      ro: ["Construcția actualei catedrale a început în anul 1211.", "În total, 33 de regi ai Franței au fost încoronați aici.", "Catedrala are peste 2.300 de statui.", "Unele vitralii au fost realizate de Marc Chagall.", "Are o lungime de 150 de metri, iar turnurile au 81 de metri înălțime.", "Face parte din Patrimoniul Mondial UNESCO din 1991.", "Botezul lui Clovis I a avut loc pe acest loc în anul 496."],
      en: ["Construction of the current cathedral began in 1211.", "A total of 33 French kings were crowned here.", "The cathedral is adorned with over 2,300 statues.", "Some of the stained glass windows were designed by Marc Chagall.", "It is 150 meters long, with towers reaching 81 meters in height.", "Inscribed as a UNESCO World Heritage site in 1991.", "The site is where Clovis I was baptized in 496 AD."]
    }
  },
  {
    id: "fr-avignon",
    type: "city",
    parent: "FR-PAC",
    coords: [4.8058, 43.9493],
    name: { de: "Avignon", hu: "Avignon", ro: "Avignon", en: "Avignon" },
    image: "/geo-images/france/avignon.webp",
    description: {
      de: "Avignon in der Provence ist bekannt als die 'Stadt der Päpste'. Im 14. Jahrhundert war sie die Residenz der Päpste und damit das Zentrum der christlichen Welt. Der gewaltige Papstpalast und die berühmte Brücke Pont Saint-Bénézet prägen das Stadtbild. Die gut erhaltene Altstadt ist von einer mächtigen Stadtmauer umgeben und beherbergt heute ein weltberühmtes Theaterfestival.",
      hu: "A provence-i Avignon a 'pápák városaként' ismert. A 14. században a pápák székhelye volt, így a keresztény világ központjává vált. A hatalmas Pápai Palota és a híres Pont Saint-Bénézet híd határozzák meg a városképet. A jó állapotban fennmaradt óvárost hatalmas városfal veszi körül, és ma egy világhírű színházi fesztiválnak ad otthont.",
      ro: "Avignon din Provence este cunoscut sub numele de 'Orașul Papilor'. În secolul al XIV-lea, a fost reședința papilor și, prin urmare, centrul lumii creștine. Imensul Palat al Papilor și celebrul pod Pont Saint-Bénézet domină peisajul urban. Orașul vechi bine conservat este înconjurat de ziduri medievale puternice și găzduiește astăzi un festival de teatru de renume mondial.",
      en: "Avignon in Provence is famously known as the 'City of Popes'. In the 14th century, it served as the residence of the Popes, making it the center of the Christian world. The massive Palais des Papes and the iconic Pont Saint-Bénézet bridge are the city's most famous landmarks. Its well-preserved historic center is enclosed by medieval walls and hosts a world-renowned theater festival every summer."
    },
    facts: {
      de: ["Der Papstpalast ist das größte gotische Gebäude des Mittelalters.", "Die Brücke von Avignon ist durch das Volkslied 'Sur le pont d'Avignon' weltbekannt.", "Die Stadtmauer ist über 4 Kilometer lang und besitzt 39 Türme.", "Avignon war von 1309 bis 1377 Papstsitz.", "Das Festival d'Avignon ist eines der bedeutendsten Theaterfestivals der Welt.", "Die Altstadt gehört seit 1995 zum UNESCO-Weltkulturerbe.", "Die Stadt liegt am Ufer der Rhone."],
      hu: ["A Pápai Palota a középkor legnagyobb gótikus épülete.", "Az avignoni híd a 'Sur le pont d'Avignon' című népdal révén vált világhírűvé.", "A városfal több mint 4 kilométer hosszú és 39 toronnyal rendelkezik.", "Avignon 1309 és 1377 között volt pápai székhely.", "Az Avignoni Fesztivál a világ egyik legjelentősebb színházi eseménye.", "Az óváros 1995 óta az UNESCO Világörökség része.", "A város a Rhone folyó partján fekszik."],
      ro: ["Palatul Papilor este cea mai mare construcție gotică din Evul Mediu.", "Podul din Avignon este celebru datorită cântecului popular 'Sur le pont d'Avignon'.", "Zidurile orașului au peste 4 km lungime și 39 de turnuri.", "Avignon a fost sediul papal între 1309 și 1377.", "Festivalul de la Avignon este unul dintre cele mai importante festivaluri de teatru din lume.", "Centrul istoric este inclus în Patrimoniul Mondial UNESCO din 1995.", "Orașul este situat pe malul fluviului Ron."],
      en: ["The Palais des Papes is the largest Gothic palace in the world.", "The Pont d'Avignon is famous worldwide due to the song 'Sur le pont d'Avignon'.", "The city walls stretch for over 4 kilometers and feature 39 towers.", "Avignon was the seat of the Papacy from 1309 to 1377.", "The Festival d'Avignon is one of the world's greatest performing arts events.", "The historic center was designated a UNESCO World Heritage site in 1995.", "The city is located on the banks of the Rhône River."]
    }
  },
  {
    id: "fr-annecy",
    type: "city",
    parent: "FR-ARA",
    coords: [6.1294, 45.8992],
    name: { de: "Annecy", hu: "Annecy", ro: "Annecy", en: "Annecy" },
    image: "/geo-images/france/annecy.webp",
    description: {
      de: "Annecy, oft als das 'Venedig der Alpen' bezeichnet, liegt am Ufer des gleichnamigen Sees in Hochsavoyen. Die malerische Altstadt ist von Kanälen durchzogen und besticht durch ihre pastellfarbenen Häuser und blumengeschmückten Brücken. Das Wahrzeichen der Stadt ist das Palais de l'Île, ein ehemaliges Gefängnis inmitten eines Kanals. Der Lac d'Annecy gilt als einer der saubersten Seen Europas.",
      hu: "Annecy-t, amelyet gyakran az 'Alpok Velencéjének' neveznek, a hasonló nevű tó partján fekszik Felső-Savoyában. A festői óvárost csatornák szelik át, pasztellszínű házaival és virágokkal díszített hídjaival varázsolja el a látogatókat. A város jelképe a Palais de l'Île, egy egykori börtön a csatorna közepén. Az Annecy-i tavat Európa egyik legtisztább tavaként tartják számon.",
      ro: "Annecy, supranumit adesea 'Veneția Alpilor', este situat pe malul lacului cu același nume în Haute-Savoie. Orașul vechi pitoresc este străbătut de canale și impresionează prin casele sale în culori pastelate și podurile decorate cu flori. Simbolul orașului este Palais de l'Île, o fostă închisoare situată în mijlocul unui canal. Lacul Annecy este considerat unul dintre cele mai curate lacuri din Europa.",
      en: "Annecy, often called the 'Venice of the Alps', is located on the shores of Lake Annecy in the Haute-Savoie region. Its picturesque old town is crisscrossed by canals and features pastel-colored houses and flower-decked bridges. The city's most iconic landmark is the Palais de l'Île, a former prison situated in the middle of a canal. Lake Annecy is renowned as one of the cleanest lakes in Europe."
    },
    facts: {
      de: ["Das Palais de l'Île stammt aus dem 12. Jahrhundert.", "Der Lac d'Annecy ist der zweitgrößte See Frankreichs.", "Annecy ist ein Zentrum für Animationsfilm und beherbergt ein bedeutendes Festival.", "Das Schloss Annecy thront über der Altstadt.", "Die Stadt ist ein beliebter Ausgangspunkt für Outdoor-Aktivitäten in den Alpen.", "Die 'Pont des Amours' (Liebesbrücke) bietet einen schönen Blick auf den See.", "Annecy war im 16. Jahrhundert Sitz des Bischofs von Genf."],
      hu: ["A Palais de l'Île a 12. századból származik.", "Az Annecy-i tó Franciaország második legnagyobb tava.", "Annecy az animációs filmek központja, jelentős fesztiválnak ad otthont.", "Az Annecy-i vár az óváros fölé magasodik.", "A város népszerű kiindulópont az alpesi szabadtéri sportokhoz.", "A 'Pont des Amours' (Szerelmesek hídja) gyönyörű kilátást nyújt a tóra.", "Annecy a 16. században a genfi püspök székhelye volt."],
      ro: ["Palais de l'Île datează din secolul al XII-lea.", "Lacul Annecy este al doilea ca mărime din Franța.", "Annecy este un centru al filmului de animație și găzduiește un festival important.", "Castelul Annecy domină orașul vechi de pe o colină.", "Orașul este un punct de plecare popular pentru activități în aer liber în Alpi.", "Podul 'Pont des Amours' oferă o priveliște superbă asupra lacului.", "Annecy a fost sediul episcopului de Geneva în secolul al XVI-lea."],
      en: ["The Palais de l'Île dates back to the 12th century.", "Lake Annecy is the second largest lake in France.", "Annecy is a global hub for animation and hosts a major international festival.", "The Château d'Annecy overlooks the old town from a hilltop.", "The city is a popular base for outdoor activities like paragliding and hiking.", "The 'Pont des Amours' (Lovers' Bridge) offers a romantic view of the lake.", "Annecy became the seat of the Bishop of Geneva in the 16th century."]
    }
  },
  {
    id: "fr-dijon",
    type: "city",
    parent: "FR-BFC",
    coords: [5.0415, 47.3220],
    name: { de: "Dijon", hu: "Dijon", ro: "Dijon", en: "Dijon" },
    image: "/geo-images/france/dijon.webp",
    description: {
      de: "Dijon, die Hauptstadt Burgunds, ist eine Stadt mit reichem architektonischem Erbe und großer gastronomischer Tradition. Einst war sie der glanzvolle Sitz der Herzöge von Burgund, deren Palast heute das Rathaus und ein bedeutendes Kunstmuseum beherbergt. Die Altstadt besticht durch ihre Fachwerkhäuser und prächtigen Stadtpaläste. Weltweit bekannt ist Dijon vor allem für seinen Senf.",
      hu: "Dijon, Burgundia fővárosa, gazdag építészeti örökséggel és jelentős gasztronómiai hagyományokkal rendelkező város. Egykor a burgundi hercegek fényűző székhelye volt, palotájukban ma a városháza és egy neves művészeti múzeum működik. Az óváros fagerendás házaival és pompás palotáival nyűgözi le a látogatókat. Dijon világszerte leginkább a mustárjáról ismert.",
      ro: "Dijon, capitala Burgundiei, este un oraș cu un bogat patrimoniu arhitectural și o mare tradiție gastronomică. A fost odinioară sediul strălucitor al ducilor de Burgundia, al căror palat găzduiește astăzi primăria și un important muzeu de artă. Orașul vechi impresionează prin casele sale cu bârne de lemn și palatele somptuoase. Dijon este cunoscut în întreaga lume în special pentru muștarul său.",
      en: "Dijon, the capital of Burgundy, is a city with a rich architectural heritage and a great gastronomic tradition. It was once the powerful seat of the Dukes of Burgundy, whose palace now houses the city hall and a major fine arts museum. The historic center is filled with half-timbered houses and grand townhouses. Globally, Dijon is most famous for its namesake mustard."
    },
    facts: {
      de: ["Der Palast der Herzöge von Burgund ist das Wahrzeichen der Stadt.", "Dijon besitzt eine der ältesten Kunstsammlungen Frankreichs.", "Die Eule an der Kirche Notre-Dame gilt als Glücksbringer.", "Der 'Parcours de la Chouette' führt Touristen zu den wichtigsten Sehenswürdigkeiten.", "Dijon ist ein Tor zu den berühmten Weingebieten der Côte d'Or.", "Die Stadt war ein wichtiger Knotenpunkt an der historischen Seidenstraße.", "Der Kir (Aperitif aus Weißwein und Cassis) wurde hier erfunden."],
      hu: ["A burgundi hercegek palotája a város jelképe.", "Dijon rendelkezik Franciaország egyik legrégebbi művészeti gyűjteményével.", "A Notre-Dame templom falán található bagoly szerencsehozónak számít.", "A 'Bagoly-útvonal' vezeti végig a turistákat a főbb látnivalókon.", "Dijon a kapu a Côte d'Or híres borvidékeihez.", "A város fontos csomópont volt a történelmi selyemúton.", "A Kir koktélt (fehérbor és feketeribizli-likőr) itt találták fel."],
      ro: ["Palatul Ducilor de Burgundia este simbolul orașului.", "Dijon deține una dintre cele mai vechi colecții de artă din Franța.", "Bufnița de pe biserica Notre-Dame este considerată un talisman norocos.", "Traseul 'Parcours de la Chouette' ghidează turiștii către principalele atracții.", "Dijon este poarta de intrare către faimoasele podgorii din Côte d'Or.", "Orașul a fost un nod important pe drumul istoric al mătăsii.", "Aperitivul Kir (vin alb și lichior de coacăze) a fost inventat aici."],
      en: ["The Palace of the Dukes of Burgundy is the city's centerpiece.", "Dijon's Museum of Fine Arts is one of the oldest in France.", "A small stone owl on Notre-Dame Church is said to bring good luck.", "The 'Owl's Trail' (Parcours de la Chouette) marks a walking tour of the city.", "Dijon is the gateway to the world-famous Côte d'Or wine region.", "The city was a major hub on the historical trade routes between north and south.", "The Kir aperitif was created here by Canon Félix Kir."]
    }
  },
  {
    id: "fr-aix-en-provence",
    type: "city",
    parent: "FR-PAC",
    coords: [5.4474, 43.5297],
    name: { de: "Aix-en-Provence", hu: "Aix-en-Provence", ro: "Aix-en-Provence", en: "Aix-en-Provence" },
    image: "/geo-images/france/aix-en-provence.webp",
    description: {
      de: "Aix-en-Provence ist eine elegante Universitätsstadt in der Provence, bekannt für ihre zahlreichen Brunnen und prächtigen Alleen. Die Stadt war die Heimat des Malers Paul Cézanne, dessen Atelier man heute besichtigen kann. Der Cours Mirabeau, eine von Platanen gesäumte Prachtstraße, bildet das Herz der Stadt. Aix besticht durch sein mediterranes Flair und seine reiche Kunst- und Kulturgeschichte.",
      hu: "Aix-en-Provence egy elegáns egyetemi város Provence-ban, amely számos szökőkútjáról és pompás sugárútjairól ismert. A város Paul Cézanne festőművész szülőhelye volt, akinek műterme ma is látogatható. A Cours Mirabeau, a platánfákkal szegélyezett díszes sugárút alkotja a város szívét. Aix mediterrán hangulatával, valamint gazdag művészeti és kulturális múltjával bűvöli el a látogatókat.",
      ro: "Aix-en-Provence este un oraș universitar elegant din Provence, cunoscut pentru numeroasele sale fântâni și bulevarde superbe. Orașul a fost casa pictorului Paul Cézanne, al cărui atelier poate fi vizitat și astăzi. Cours Mirabeau, un bulevard magnific mărginit de platani, reprezintă inima orașului. Aix impresionează prin farmecul său mediteranean și istoria sa bogată în artă și cultură.",
      en: "Aix-en-Provence is an elegant university city in Provence, famous for its numerous fountains and grand boulevards. It was the birthplace and home of the painter Paul Cézanne, and his studio is now a popular museum. The Cours Mirabeau, a beautiful avenue lined with plane trees, is the heart of the city. Aix is known for its refined Mediterranean atmosphere and rich cultural heritage."
    },
    facts: {
      de: ["Aix wird oft als die 'Stadt der tausend Brunnen' bezeichnet.", "Die Stadt wurde von den Römern wegen ihrer Thermalquellen gegründet.", "Paul Cézanne malte oft den nahegelegenen Berg Montagne Sainte-Victoire.", "Die Kathedrale Saint-Sauveur vereint verschiedene Baustile vom 5. bis 18. Jahrhundert.", "Calissons (Mandelgebäck) sind eine berühmte Spezialität der Stadt.", "Aix beherbergt eine der ältesten Universitäten Frankreichs.", "Die Stadt ist bekannt für ihre zahlreichen Kunstgalerien und Museen."],
      hu: ["Aix-et gyakran az 'ezer szökőkút városának' nevezik.", "A várost a rómaiak alapították termálforrásai miatt.", "Paul Cézanne gyakran festette meg a közeli Montagne Sainte-Victoire hegyet.", "A Saint-Sauveur-székesegyház különböző stílusokat ötvöz az 5. és 18. század között.", "A Calisson (mandulás édesség) a város híres specialitása.", "Aix ad otthont Franciaország egyik legrégebbi egyetemének.", "A város számos művészeti galériájáról és múzeumáról ismert."],
      ro: ["Aix este adesea numit 'Orașul celor o mie de fântâni'.", "Orașul a fost fondat de romani datorită izvoarelor sale termale.", "Paul Cézanne a pictat adesea muntele din apropiere, Montagne Sainte-Victoire.", "Catedrala Saint-Sauveur îmbină stiluri arhitecturale din secolele V-XVIII.", "Calissons (dulciuri cu migdale) sunt o specialitate celebră a orașului.", "Aix găzduiește una dintre cele mai vechi universități din Franța.", "Orașul este renumit pentru numeroasele sale galerii de artă și muzee."],
      en: ["Aix is often called the 'City of a Thousand Fountains'.", "The city was founded by the Romans because of its thermal springs.", "Paul Cézanne frequently painted the nearby Montagne Sainte-Victoire.", "The Saint-Sauveur Cathedral features architectural styles from the 5th to the 18th century.", "Calissons, a traditional almond-based candy, are a local specialty.", "Aix is home to one of the oldest universities in France, founded in 1409.", "The city is a major center for law and arts in southern France."]
    }
  },
  {
    id: "fr-bordeaux",
    type: "city",
    parent: "FR-NAQ",
    coords: [-0.5792, 44.8378],
    name: { de: "Bordeaux", hu: "Bordeaux", ro: "Bordeaux", en: "Bordeaux" },
    image: "/geo-images/france/bordeaux.webp",
    description: {
      de: "Bordeaux, an der Garonne gelegen, ist die Welthauptstadt des Weins und eine Stadt von außergewöhnlicher architektonischer Schönheit. Das Stadtbild ist geprägt von prächtigen Ensembles aus dem 18. Jahrhundert, was ihr den Beinamen 'Kleines Paris' einbrachte. Das moderne Wahrzeichen ist der 'Miroir d'eau', das weltweit größte Reflexionsbecken. Bordeaux ist ein lebendiges Zentrum für Kultur, Gastronomie und Handel.",
      hu: "A Garonne partján fekvő Bordeaux a világ borfővárosa és kivételes építészeti szépségű város. Városképét a 18. századi pompás épületegyüttesek határozzák meg, amiért 'Kis Párizsnak' is nevezik. Modern jelképe a 'Miroir d'eau', a világ legnagyobb tükörmedencéje. Bordeaux a kultúra, a gasztronómia és a kereskedelem lüktető központja.",
      ro: "Bordeaux, situat pe malul Garonnei, este capitala mondială a vinului și un oraș de o frumusețe arhitecturală excepțională. Peisajul urban este dominat de ansambluri magnifice din secolul al XVIII-lea, ceea ce i-a adus supranumele de 'Micul Paris'. Simbolul modern este 'Miroir d'eau', cea mai mare oglindă de apă din lume. Bordeaux este un centru vibrant de cultură, gastronomie și comerț.",
      en: "Bordeaux, situated on the Garonne River, is the wine capital of the world and a city of exceptional architectural beauty. Its historic center is filled with magnificent 18th-century buildings, earning it the nickname 'Little Paris'. A modern highlight is the 'Miroir d'eau', the world's largest reflecting pool. Bordeaux is a vibrant hub for culture, gastronomy, and international trade."
    },
    facts: {
      de: ["Bordeaux hat nach Paris die meisten denkmalgeschützten Gebäude in Frankreich.", "Die Region Bordeaux ist das größte zusammenhängende Weinbaugebiet der Welt.", "Der Place de la Bourse ist ein Meisterwerk der klassischen Architektur.", "Die Cité du Vin ist ein hochmodernes Museum zur Weinkultur.", "Die Stadt besitzt eine der längsten Fußgängerzonen Europas (Rue Sainte-Catherine).", "Bordeaux war während der Weltkriege zeitweise Sitz der französischen Regierung.", "Fast die Hälfte der Stadt gehört zum UNESCO-Welterbe."],
      hu: ["Párizs után Bordeaux-ban van a legtöbb műemléki védettségű épület Franciaországban.", "A bordeaux-i borvidék a világ legnagyobb összefüggő szőlőtermő területe.", "A Place de la Bourse a klasszikus építészet remekműve.", "A Cité du Vin egy ultramodern borkultúra-múzeum.", "A városban található Európa egyik leghosszabb sétálóutcája (Rue Sainte-Catherine).", "A világháborúk alatt Bordeaux ideiglenesen a francia kormány székhelye volt.", "A város területének majdnem fele az UNESCO Világörökség része."],
      ro: ["Bordeaux are cele mai multe clădiri protejate din Franța, după Paris.", "Regiunea Bordeaux este cea mai mare zonă viticolă din lume.", "Place de la Bourse este o capodoperă a arhitecturii clasice.", "Cité du Vin este un muzeu ultramodern dedicat culturii vinului.", "Orașul are una dintre cele mai lungi străzi pietonale din Europa (Rue Sainte-Catherine).", "Bordeaux a fost sediul temporar al guvernului francez în timpul războaielor mondiale.", "Aproape jumătate din suprafața orașului este inclusă în Patrimoniul UNESCO."],
      en: ["Bordeaux has the highest number of preserved historical buildings in France after Paris.", "The surrounding region is the largest fine wine-producing area in the world.", "The Place de la Bourse is a masterpiece of 18th-century French architecture.", "The Cité du Vin is a high-tech museum dedicated to the history of wine.", "The Rue Sainte-Catherine is one of the longest pedestrian shopping streets in Europe.", "Bordeaux served as the temporary capital of France during several wars.", "Nearly half of the city's area is designated as a UNESCO World Heritage site."]
    }
  },
  {
    id: "fr-rouen",
    type: "city",
    parent: "FR-NOR",
    coords: [1.0997, 49.4431],
    name: { de: "Rouen", hu: "Rouen", ro: "Rouen", en: "Rouen" },
    image: "/geo-images/france/rouen.webp",
    description: {
      de: "Rouen, die historische Hauptstadt der Normandie, ist eine Stadt voller Geschichte und Kunst. Sie ist bekannt für ihre prächtige gotische Kathedrale, die Claude Monet in einer berühmten Bilderserie verewigte. Die Altstadt mit ihren zahlreichen Fachwerkhäusern und kopfsteingepflasterten Gassen wirkt wie ein Freilichtmuseum. Rouen ist auch der Ort, an dem Johanna von Orléans im Jahr 1431 hingerichtet wurde.",
      hu: "Rouen, Normandia történelmi fővárosa, a történelem és a művészet városa. Híres pompás gótikus katedrálisáról, amelyet Claude Monet örökített meg egy híres festménysorozatban. Az óváros számos fagerendás házával és macskaköves utcáival egy szabadtéri múzeumra emlékeztet. Rouen az a hely is, ahol 1431-ben kivégezték Jeanne d'Arcot, az orléans-i szüzet.",
      ro: "Rouen, capitala istorică a Normandiei, este un oraș plin de istorie și artă. Este renumit pentru catedrala sa gotică magnifică, imortalizată de Claude Monet într-o serie celebră de picturi. Orașul vechi, cu numeroasele sale case cu bârne de lemn și străzi pavate, arată ca un muzeu în aer liber. Rouen este și locul unde Ioana d'Arc a fost executată în anul 1431.",
      en: "Rouen, the historic capital of Normandy, is a city steeped in history and art. It is famous for its magnificent Gothic cathedral, which Claude Monet immortalized in a series of paintings. The old town, with its numerous half-timbered houses and cobblestone streets, feels like an open-air museum. Rouen is also the site where Joan of Arc was executed in 1431."
    },
    facts: {
      de: ["Die Kathedrale von Rouen war zeitweise das höchste Gebäude der Welt.", "Der 'Gros-Horloge' ist eine astronomische Uhr aus dem 14. Jahrhundert.", "Die Stadt wird oft als 'Stadt der hundert Kirchtürme' bezeichnet.", "Johanna von Orléans wurde auf dem Alten Marktplatz verbrannt.", "Rouen ist ein bedeutender Binnenhafen an der Seine.", "Das Musée des Beaux-Arts beherbergt eine wichtige Impressionisten-Sammlung.", "Die Stadt wurde im Zweiten Weltkrieg schwer beschädigt und wiederaufgebaut."],
      hu: ["A roueni katedrális egy időben a világ legmagasabb épülete volt.", "A 'Gros-Horloge' egy 14. századi csillagászati óra.", "A várost gyakran a 'száz torony városának' nevezik.", "Jeanne d'Arcot a Régi Piactéren égették meg.", "Rouen jelentős folyami kikötő a Szajna partján.", "A Szépművészeti Múzeum jelentős impresszionista gyűjteménnyel rendelkezik.", "A várost a második világháborúban súlyos károk érték, de újjáépítették."],
      ro: ["Catedrala din Rouen a fost pentru o perioadă cea mai înaltă clădire din lume.", " 'Gros-Horloge' este un ceas astronomic din secolul al XIV-lea.", "Orașul este adesea numit 'Orașul celor o sută de clopotnițe'.", "Ioana d'Arc a fost arsă pe rug în Piața Veche a orașului.", "Rouen este un port fluvial important pe Sena.", "Muzeul de Arte Frumoase găzduiește o colecție importantă de impresioniști.", "Orașul a fost grav avariat în Al Doilea Război Mondial și ulterior reconstruit."],
      en: ["Rouen Cathedral was the tallest building in the world from 1876 to 1880.", "The 'Gros-Horloge' is a famous 14th-century astronomical clock.", "The city is often called the 'City of a Hundred Spires'.", "Joan of Arc was burned at the stake in the city's Old Market Square.", "Rouen is a major inland port on the Seine River.", "The Museum of Fine Arts houses one of France's most important collections.", "The city's historic center was carefully restored after World War II."]
    }
  },
  {
    id: "fr-saint-tropez",
    type: "city",
    parent: "FR-PAC",
    coords: [6.6400, 43.2678],
    name: { de: "Saint-Tropez", hu: "Saint-Tropez", ro: "Saint-Tropez", en: "Saint-Tropez" },
    image: "/geo-images/france/saint-tropez.webp",
    description: {
      de: "Saint-Tropez an der Côte d'Azur ist einer der berühmtesten Ferienorte der Welt. Das ehemalige Fischerdorf wurde in den 1950er Jahren durch Stars wie Brigitte Bardot zum Treffpunkt des internationalen Jetsets. Trotz des Glamours hat sich der Ort in seinen Gassen viel von seinem ursprünglichen Charme bewahrt. Der Hafen mit seinen luxuriösen Yachten und die Zitadelle sind die Hauptattraktionen.",
      hu: "A Côte d'Azur-ön található Saint-Tropez a világ egyik leghíresebb üdülőhelye. Az egykori halászfalu az 1950-es években vált a nemzetközi jetset találkozóhelyévé, olyan sztárok révén, mint Brigitte Bardot. A csillogás ellenére a település szűk utcái sokat megőriztek eredeti bájukból. A luxusjachtokkal teli kikötő és a citadella a város fő látványosságai.",
      ro: "Saint-Tropez de pe Coasta de Azur este una dintre cele mai faimoase stațiuni de vacanță din lume. Fostul sat de pescari a devenit în anii '50 locul de întâlnire al jet-set-ului internațional, datorită unor vedete precum Brigitte Bardot. În ciuda strălucirii, localitatea și-a păstrat mult din farmecul original în străduțele sale. Portul cu iahturi de lux și citadela sunt principalele atracții.",
      en: "Saint-Tropez on the French Riviera is one of the most famous resort towns in the world. Once a quiet fishing village, it became a hotspot for the international jet set in the 1950s, largely thanks to stars like Brigitte Bardot. Despite its glamorous reputation, the town has preserved much of its original charm in its narrow streets. The harbor, filled with luxury yachts, and the 17th-century citadel are its main landmarks."
    },
    facts: {
      de: ["Die Zitadelle von Saint-Tropez bietet einen Panoramablick über den Golf.", "Der Strand von Pampelonne ist der bekannteste Strand der Region.", "Das Musée de l'Annonciade zeigt bedeutende Werke der klassischen Moderne.", "Die Gendarmerie von Saint-Tropez wurde durch die Filme mit Louis de Funès berühmt.", "Im Hafen liegen einige der teuersten Yachten der Welt.", "Die 'Tarte Tropézienne' ist eine berühmte lokale Kuchenspezialität.", "Jedes Jahr findet die Segelregatta 'Les Voiles de Saint-Tropez' statt."],
      hu: ["A Saint-Tropez-i citadella panorámás kilátást nyújt az öbölre.", "A Pampelonne-part a régió legismertebb strandja.", "A Musée de l'Annonciade jelentős modern művészeti alkotásokat mutat be.", "A helyi csendőrség Louis de Funès filmjei révén vált világhírűvé.", "A kikötőben a világ legdrágább jachtjai közül több is horgonyoz.", "A 'Tarte Tropézienne' a város híres helyi süteménykülönlegessége.", "Minden évben megrendezik a 'Les Voiles de Saint-Tropez' vitorlásversenyt."],
      ro: ["Citadela din Saint-Tropez oferă o vedere panoramică asupra golfului.", "Plaja Pampelonne este cea mai cunoscută plajă din regiune.", "Muzeul de l'Annonciade expune opere importante de artă modernă.", "Jandarmeria din Saint-Tropez a devenit celebră datorită filmelor cu Louis de Funès.", "În port sunt ancorate unele dintre cele mai scumpe iahturi din lume.", " 'Tarte Tropézienne' este o specialitate locală de prăjitură foarte faimoasă.", "Anual are loc regata 'Les Voiles de Saint-Tropez'."],
      en: ["The 17th-century citadel offers panoramic views of the Gulf of Saint-Tropez.", "Pampelonne Beach is the most famous stretch of sand in the area.", "The Musée de l'Annonciade houses a significant collection of modern art.", "The local gendarmerie became world-famous through the Louis de Funès films.", "The harbor is home to some of the most expensive superyachts in the world.", "The 'Tarte Tropézienne' is a famous local pastry created in the 1950s.", "The town hosts the prestigious 'Les Voiles de Saint-Tropez' sailing regatta annually."]
    }
  },
  {
    id: "fr-le-mans",
    type: "city",
    parent: "FR-PDL",
    coords: [0.1986, 48.0061],
    name: { de: "Le Mans", hu: "Le Mans", ro: "Le Mans", en: "Le Mans" },
    image: "/geo-images/france/le-mans.webp",
    description: {
      de: "Le Mans ist weltweit bekannt für das legendäre 24-Stunden-Rennen, eines der bedeutendsten Motorsport-Ereignisse der Welt. Doch die Stadt hat auch eine faszinierende historische Seite: Die 'Cité Plantagenêt' ist eine der am besten erhaltenen mittelalterlichen Altstädte Frankreichs. Sie ist von einer beeindruckenden römischen Stadtmauer umgeben. Die Kathedrale Saint-Julien ist eine der größten und schönsten des Landes.",
      hu: "Le Mans világszerte a legendás 24 órás autóversenyről ismert, amely a világ egyik legjelentősebb motorsport eseménye. A városnak azonban van egy lenyűgöző történelmi oldala is: a 'Cité Plantagenêt' Franciaország egyik legjobb állapotban fennmaradt középkori óvárosa. Egy impozáns római kori városfal veszi körül. A Saint-Julien-székesegyház az ország egyik legnagyobb és legszebb katedrálisa.",
      ro: "Le Mans este cunoscut în întreaga lume pentru legendara cursă de 24 de ore, unul dintre cele mai importante evenimente de motorsport din lume. Totuși, orașul are și o latură istorică fascinantă: 'Cité Plantagenêt' este unul dintre cele mai bine conservate orașe vechi medievale din Franța. Este înconjurat de un zid roman impresionant. Catedrala Saint-Julien este una dintre cele mai mari și frumoase din țară.",
      en: "Le Mans is globally famous for the legendary 24 Hours of Le Mans, one of the world's most prestigious automobile races. Beyond the racetrack, the city boasts a stunning historic center called the 'Cité Plantagenêt', one of the best-preserved medieval quarters in France. It is enclosed by a remarkable Roman wall. The Saint-Julien Cathedral is one of the largest and most beautiful in the country."
    },
    facts: {
      de: ["Das 24-Stunden-Rennen von Le Mans findet seit 1923 statt.", "Die römische Stadtmauer aus dem 3. Jahrhundert ist fast vollständig erhalten.", "Die Kathedrale Saint-Julien vereint Romanik und Gotik.", "Le Mans war die Geburtsstadt von Heinrich II. von England.", "Das 'Musée des 24 Heures' zeigt die Geschichte des Rennsports.", "Die Altstadt dient oft als Kulisse für historische Filme.", "Le Mans liegt am Zusammenfluss von Sarthe und Huisne."],
      hu: ["A Le Mans-i 24 órás versenyt 1923 óta rendezik meg.", "A 3. századi római városfal szinte teljes egészében épségben maradt.", "A Saint-Julien-székesegyház a román és a gótikus stílust ötvözi.", "Le Mans volt II. Henrik angol király szülővárosa.", "A '24 órás verseny múzeuma' mutatja be az autóversenyzés történetét.", "Az óváros gyakran szolgál történelmi filmek díszleteként.", "Le Mans a Sarthe és a Huisne folyók találkozásánál fekszik."],
      ro: ["Cursa de 24 de ore de la Le Mans se desfășoară din 1923.", "Zidul roman din secolul al III-lea este păstrat aproape în întregime.", "Catedrala Saint-Julien îmbină stilul romanic cu cel gotic.", "Le Mans a fost locul de naștere al regelui Henric al II-lea al Angliei.", "Muzeul '24 Heures' prezintă istoria sportului cu motor.", "Orașul vechi este adesea folosit ca decor pentru filme istorice.", "Le Mans este situat la confluența râurilor Sarthe și Huisne."],
      en: ["The 24 Hours of Le Mans endurance race has been held annually since 1923.", "The 3rd-century Roman wall is one of the most complete in Europe.", "Saint-Julien Cathedral is famous for its unique blend of Romanesque and Gothic styles.", "Le Mans was the birthplace of Henry II, the first Plantagenet King of England.", "The Museum of the 24 Hours of Le Mans showcases the history of the race.", "The historic district is a popular filming location for period movies.", "The city is located at the confluence of the Sarthe and Huisne rivers."]
    }
  },
  {
    id: "fr-montpellier",
    type: "city",
    parent: "FR-OCC",
    coords: [3.8767, 43.6108],
    name: { de: "Montpellier", hu: "Montpellier", ro: "Montpellier", en: "Montpellier" },
    image: "/geo-images/france/montpellier.webp",
    description: {
      de: "Montpellier im Süden Frankreichs ist eine dynamische Universitätsstadt, die historische Eleganz mit moderner Architektur verbindet. Die mittelalterliche Altstadt, 'L'Écusson' genannt, besticht durch ihre engen Gassen und prächtigen Stadtpaläste. Die Place de la Comédie ist der lebendige Mittelpunkt der Stadt. Montpellier beherbergt eine der ältesten noch aktiven medizinischen Fakultäten der Welt.",
      hu: "A dél-franciaországi Montpellier egy dinamikus egyetemi város, amely ötvözi a történelmi eleganciát a modern építészettel. A középkori óváros, az 'L'Écusson', szűk utcáival és pompás palotáival varázsolja el a látogatókat. A Place de la Comédie a város lüktető központja. Montpellier-ben található a világ egyik legrégebbi, ma is működő orvosi egyeteme.",
      ro: "Montpellier, situat în sudul Franței, este un oraș universitar dinamic care îmbină eleganța istorică cu arhitectura modernă. Centrul vechi medieval, numit 'L'Écusson', impresionează prin străduțele sale înguste și palatele superbe. Place de la Comédie este inima vibrantă a orașului. Montpellier găzduiește una dintre cele mai vechi facultăți de medicină încă active din lume.",
      en: "Montpellier in southern France is a dynamic university city that blends historic elegance with cutting-edge modern architecture. Its medieval center, known as 'L'Écusson', is a maze of narrow streets and grand townhouses. The Place de la Comédie is the city's bustling main square. Montpellier is home to one of the world's oldest medical schools still in operation today."
    },
    facts: {
      de: ["Die Universität Montpellier wurde im Jahr 1289 gegründet.", "Die Stadt besitzt den ältesten botanischen Garten Frankreichs (Jardin des Plantes).", "Das Viertel Antigone wurde vom Architekten Ricardo Bofill im neoklassizistischen Stil entworfen.", "Montpellier liegt nur wenige Kilometer vom Mittelmeer entfernt.", "Die Stadt ist bekannt für ihr modernes Straßenbahnnetz, gestaltet von Christian Lacroix.", "Das Musée Fabre ist eines der bedeutendsten Kunstmuseen Frankreichs.", "Die Stadt hat eine der größten Fußgängerzonen Europas."],
      hu: ["A Montpellier-i Egyetemet 1289-ben alapították.", "Itt található Franciaország legrégebbi botanikus kertje (Jardin des Plantes).", "Az Antigone negyedet Ricardo Bofill építész tervezte neoklasszicista stílusban.", "Montpellier mindössze néhány kilométerre fekszik a Földközi-tengertől.", "A város híres a Christian Lacroix által tervezett modern villamoshálózatáról.", "A Musée Fabre Franciaország egyik legjelentősebb művészeti múzeuma.", "A város rendelkezik Európa egyik legnagyobb sétálóövezetével."],
      ro: ["Universitatea din Montpellier a fost fondată în anul 1289.", "Orașul deține cea mai veche grădină botanică din Franța (Jardin des Plantes).", "Cartierul Antigone a fost proiectat de arhitectul Ricardo Bofill în stil neoclasic.", "Montpellier se află la doar câțiva kilometri de Marea Mediterană.", "Orașul este cunoscut pentru rețeaua sa modernă de tramvaie, decorată de Christian Lacroix.", "Muzeul Fabre este unul dintre cele mai importante muzee de artă din Franța.", "Orașul are una dintre cele mai mari zone pietonale din Europa."],
      en: ["The University of Montpellier was officially founded in 1289.", "It is home to the Jardin des Plantes, the oldest botanical garden in France.", "The Antigone district was designed by architect Ricardo Bofill in a neo-classical style.", "Montpellier is located just a few kilometers from the Mediterranean coast.", "The city's tram system features colorful designs by fashion icon Christian Lacroix.", "The Musée Fabre is one of the most important art museums in France.", "The city boasts one of the largest pedestrianized areas in Europe."]
    }
  },
];

export const franceAllPoi: POI[] = [...franceCountry, ...franceRegions, ...franceCities];
