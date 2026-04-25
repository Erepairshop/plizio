// Austria Admin-2 (Bezirke) — placeholder geometry
// Austria has 9 Bundesländer and ~94 Bezirke.
// Paths are placeholder rectangles until real GeoJSON data is available.
// labelX/labelY are projected into a 1000x1200 viewBox per Bundesland.

export interface AustriaDistrict {
  id: string;
  name: { de: string; hu: string; ro: string; en: string };
  centerLat: number;
  centerLng: number;
  labelX: number;
  labelY: number;
  path: string;
}

// Helper: placeholder rect path
function rect(x: number, y: number, w = 140, h = 100): string {
  return `M${x},${y} L${x + w},${y} L${x + w},${y + h} L${x},${y + h} Z`;
}

// AT-1 — Burgenland (7 Bezirke)
const burgenlandDistricts: AustriaDistrict[] = [
  { id: "AT-1-EU", name: { de: "Eisenstadt-Umgebung", hu: "Kismarton-környéke", ro: "Eisenstadt-Umgebung", en: "Eisenstadt-Umgebung" }, centerLat: 47.85, centerLng: 16.52, labelX: 480, labelY: 175, path: rect(410, 125) },
  { id: "AT-1-GF", name: { de: "Güssing", hu: "Németújvár", ro: "Güssing", en: "Güssing" }, centerLat: 47.06, centerLng: 16.32, labelX: 340, labelY: 825, path: rect(270, 775) },
  { id: "AT-1-JE", name: { de: "Jennersdorf", hu: "Gyanafalva", ro: "Jennersdorf", en: "Jennersdorf" }, centerLat: 46.94, centerLng: 16.13, labelX: 200, labelY: 975, path: rect(130, 925) },
  { id: "AT-1-MA", name: { de: "Mattersburg", hu: "Mattersburg", ro: "Mattersburg", en: "Mattersburg" }, centerLat: 47.74, centerLng: 16.4, labelX: 340, labelY: 325, path: rect(270, 275) },
  { id: "AT-1-ND", name: { de: "Neusiedl am See", hu: "Nezsider", ro: "Neusiedl am See", en: "Neusiedl am See" }, centerLat: 47.95, centerLng: 16.85, labelX: 620, labelY: 75, path: rect(550, 25) },
  { id: "AT-1-OP", name: { de: "Oberpullendorf", hu: "Felsőpulya", ro: "Oberpullendorf", en: "Oberpullendorf" }, centerLat: 47.5, centerLng: 16.5, labelX: 480, labelY: 525, path: rect(410, 475) },
  { id: "AT-1-OW", name: { de: "Oberwart", hu: "Felsőőr", ro: "Oberwart", en: "Oberwart" }, centerLat: 47.29, centerLng: 16.2, labelX: 340, labelY: 675, path: rect(270, 625) },
];

// AT-2 — Carinthia / Kärnten (10 Bezirke)
const carinthiaDistricts: AustriaDistrict[] = [
  { id: "AT-2-FE", name: { de: "Feldkirchen", hu: "Feldkirchen", ro: "Feldkirchen", en: "Feldkirchen" }, centerLat: 46.72, centerLng: 14.1, labelX: 410, labelY: 175, path: rect(340, 125) },
  { id: "AT-2-HE", name: { de: "Hermagor", hu: "Hermász", ro: "Hermagor", en: "Hermagor" }, centerLat: 46.63, centerLng: 13.37, labelX: 130, labelY: 325, path: rect(60, 275) },
  { id: "AT-2-KL", name: { de: "Klagenfurt-Land", hu: "Klagenfurt-Land", ro: "Klagenfurt-Land", en: "Klagenfurt-Land" }, centerLat: 46.6, centerLng: 14.4, labelX: 550, labelY: 475, path: rect(480, 425) },
  { id: "AT-2-KS", name: { de: "Klagenfurt-Stadt", hu: "Klagenfurt város", ro: "Klagenfurt-Stadt", en: "Klagenfurt Stadt" }, centerLat: 46.62, centerLng: 14.31, labelX: 410, labelY: 475, path: rect(340, 425) },
  { id: "AT-2-SP", name: { de: "Spittal an der Drau", hu: "Spittal an der Drau", ro: "Spittal an der Drau", en: "Spittal an der Drau" }, centerLat: 46.79, centerLng: 13.49, labelX: 200, labelY: 175, path: rect(130, 125) },
  { id: "AT-2-SV", name: { de: "St. Veit an der Glan", hu: "Sankt Veit an der Glan", ro: "St. Veit an der Glan", en: "St. Veit an der Glan" }, centerLat: 46.77, centerLng: 14.36, labelX: 550, labelY: 275, path: rect(480, 225) },
  { id: "AT-2-VK", name: { de: "Völkermarkt", hu: "Völkermarkt", ro: "Völkermarkt", en: "Völkermarkt" }, centerLat: 46.66, centerLng: 14.63, labelX: 690, labelY: 475, path: rect(620, 425) },
  { id: "AT-2-VL", name: { de: "Villach-Land", hu: "Villach-Land", ro: "Villach-Land", en: "Villach-Land" }, centerLat: 46.61, centerLng: 13.85, labelX: 270, labelY: 475, path: rect(200, 425) },
  { id: "AT-2-VS", name: { de: "Villach-Stadt", hu: "Villach város", ro: "Villach-Stadt", en: "Villach Stadt" }, centerLat: 46.62, centerLng: 13.85, labelX: 270, labelY: 375, path: rect(200, 325) },
  { id: "AT-2-WO", name: { de: "Wolfsberg", hu: "Wolfsberg", ro: "Wolfsberg", en: "Wolfsberg" }, centerLat: 46.84, centerLng: 14.84, labelX: 760, labelY: 175, path: rect(690, 125) },
];

// AT-3 — Lower Austria / Niederösterreich (21 Bezirke)
const lowerAustriaDistricts: AustriaDistrict[] = [
  { id: "AT-3-AM", name: { de: "Amstetten", hu: "Amstetten", ro: "Amstetten", en: "Amstetten" }, centerLat: 48.12, centerLng: 14.87, labelX: 200, labelY: 675, path: rect(130, 625) },
  { id: "AT-3-BA", name: { de: "Baden", hu: "Baden", ro: "Baden", en: "Baden" }, centerLat: 48.01, centerLng: 16.23, labelX: 760, labelY: 775, path: rect(690, 725) },
  { id: "AT-3-BL", name: { de: "Bruck an der Leitha", hu: "Bruck an der Leitha", ro: "Bruck an der Leitha", en: "Bruck an der Leitha" }, centerLat: 48.03, centerLng: 16.78, labelX: 900, labelY: 775, path: rect(830, 725) },
  { id: "AT-3-BM", name: { de: "Bruck an der Mur (NÖ)", hu: "Bruck (NÖ)", ro: "Bruck (NÖ)", en: "Bruck (NÖ)" }, centerLat: 48.0, centerLng: 15.6, labelX: 480, labelY: 775, path: rect(410, 725) },
  { id: "AT-3-GD", name: { de: "Gmünd", hu: "Gmünd", ro: "Gmünd", en: "Gmünd" }, centerLat: 48.77, centerLng: 14.98, labelX: 270, labelY: 75, path: rect(200, 25) },
  { id: "AT-3-GF", name: { de: "Gänserndorf", hu: "Gänserndorf", ro: "Gänserndorf", en: "Gänserndorf" }, centerLat: 48.34, centerLng: 16.72, labelX: 900, labelY: 375, path: rect(830, 325) },
  { id: "AT-3-GK", name: { de: "Grieskirchen (NÖ)", hu: "Grieskirchen (NÖ)", ro: "Grieskirchen (NÖ)", en: "Grieskirchen (NÖ)" }, centerLat: 48.2, centerLng: 15.5, labelX: 410, labelY: 525, path: rect(340, 475) },
  { id: "AT-3-HL", name: { de: "Hollabrunn", hu: "Hollabrunn", ro: "Hollabrunn", en: "Hollabrunn" }, centerLat: 48.56, centerLng: 16.08, labelX: 690, labelY: 175, path: rect(620, 125) },
  { id: "AT-3-HO", name: { de: "Horn", hu: "Horn", ro: "Horn", en: "Horn" }, centerLat: 48.66, centerLng: 15.66, labelX: 550, labelY: 125, path: rect(480, 75) },
  { id: "AT-3-KO", name: { de: "Korneuburg", hu: "Korneuburg", ro: "Korneuburg", en: "Korneuburg" }, centerLat: 48.35, centerLng: 16.33, labelX: 830, labelY: 375, path: rect(760, 325) },
  { id: "AT-3-KR", name: { de: "Krems-Land", hu: "Krems-Land", ro: "Krems-Land", en: "Krems-Land" }, centerLat: 48.41, centerLng: 15.61, labelX: 550, labelY: 325, path: rect(480, 275) },
  { id: "AT-3-KS", name: { de: "Krems-Stadt", hu: "Krems város", ro: "Krems-Stadt", en: "Krems Stadt" }, centerLat: 48.41, centerLng: 15.61, labelX: 410, labelY: 325, path: rect(340, 275) },
  { id: "AT-3-LF", name: { de: "Lilienfeld", hu: "Lilienfeld", ro: "Lilienfeld", en: "Lilienfeld" }, centerLat: 48.01, centerLng: 15.6, labelX: 480, labelY: 825, path: rect(410, 775) },
  { id: "AT-3-MD", name: { de: "Mödling", hu: "Mödling", ro: "Mödling", en: "Mödling" }, centerLat: 48.1, centerLng: 16.28, labelX: 830, labelY: 675, path: rect(760, 625) },
  { id: "AT-3-ME", name: { de: "Melk", hu: "Melk", ro: "Melk", en: "Melk" }, centerLat: 48.23, centerLng: 15.33, labelX: 270, labelY: 525, path: rect(200, 475) },
  { id: "AT-3-MI", name: { de: "Mistelbach", hu: "Mistelbach", ro: "Mistelbach", en: "Mistelbach" }, centerLat: 48.57, centerLng: 16.57, labelX: 900, labelY: 175, path: rect(830, 125) },
  { id: "AT-3-MK", name: { de: "Neunkirchen", hu: "Neunkirchen", ro: "Neunkirchen", en: "Neunkirchen" }, centerLat: 47.72, centerLng: 16.08, labelX: 760, labelY: 975, path: rect(690, 925) },
  { id: "AT-3-PL", name: { de: "St. Pölten-Land", hu: "Sankt Pölten-Land", ro: "St. Pölten-Land", en: "St. Pölten-Land" }, centerLat: 48.18, centerLng: 15.62, labelX: 550, labelY: 525, path: rect(480, 475) },
  { id: "AT-3-PS", name: { de: "St. Pölten-Stadt", hu: "Sankt Pölten város", ro: "St. Pölten-Stadt", en: "St. Pölten Stadt" }, centerLat: 48.2, centerLng: 15.62, labelX: 410, labelY: 525, path: rect(340, 475) },
  { id: "AT-3-SB", name: { de: "Scheibbs", hu: "Scheibbs", ro: "Scheibbs", en: "Scheibbs" }, centerLat: 47.99, centerLng: 15.16, labelX: 270, labelY: 825, path: rect(200, 775) },
  { id: "AT-3-TU", name: { de: "Tulln", hu: "Tulln", ro: "Tulln", en: "Tulln" }, centerLat: 48.33, centerLng: 15.97, labelX: 690, labelY: 375, path: rect(620, 325) },
  { id: "AT-3-WB", name: { de: "Wiener Neustadt-Land", hu: "Wiener Neustadt-Land", ro: "Wiener Neustadt-Land", en: "Wiener Neustadt-Land" }, centerLat: 47.83, centerLng: 16.25, labelX: 830, labelY: 875, path: rect(760, 825) },
  { id: "AT-3-WN", name: { de: "Wiener Neustadt-Stadt", hu: "Wiener Neustadt város", ro: "Wiener Neustadt-Stadt", en: "Wiener Neustadt Stadt" }, centerLat: 47.81, centerLng: 16.24, labelX: 830, labelY: 975, path: rect(760, 925) },
  { id: "AT-3-WU", name: { de: "Wien-Umgebung", hu: "Bécs-környéke", ro: "Wien-Umgebung", en: "Vienna environs" }, centerLat: 48.15, centerLng: 16.3, labelX: 900, labelY: 575, path: rect(830, 525) },
  { id: "AT-3-ZT", name: { de: "Zwettl", hu: "Zwettl", ro: "Zwettl", en: "Zwettl" }, centerLat: 48.6, centerLng: 15.16, labelX: 270, labelY: 175, path: rect(200, 125) },
];

// AT-4 — Upper Austria / Oberösterreich (15 Bezirke)
const upperAustriaDistricts: AustriaDistrict[] = [
  { id: "AT-4-BM", name: { de: "Braunau am Inn", hu: "Braunau am Inn", ro: "Braunau am Inn", en: "Braunau am Inn" }, centerLat: 48.26, centerLng: 13.04, labelX: 130, labelY: 175, path: rect(60, 125) },
  { id: "AT-4-EF", name: { de: "Eferding", hu: "Eferding", ro: "Eferding", en: "Eferding" }, centerLat: 48.31, centerLng: 13.98, labelX: 410, labelY: 175, path: rect(340, 125) },
  { id: "AT-4-FK", name: { de: "Freistadt", hu: "Freistadt", ro: "Freistadt", en: "Freistadt" }, centerLat: 48.51, centerLng: 14.5, labelX: 690, labelY: 75, path: rect(620, 25) },
  { id: "AT-4-GM", name: { de: "Gmunden", hu: "Gmunden", ro: "Gmunden", en: "Gmunden" }, centerLat: 47.92, centerLng: 13.8, labelX: 410, labelY: 575, path: rect(340, 525) },
  { id: "AT-4-GR", name: { de: "Grieskirchen", hu: "Grieskirchen", ro: "Grieskirchen", en: "Grieskirchen" }, centerLat: 48.23, centerLng: 13.83, labelX: 340, labelY: 275, path: rect(270, 225) },
  { id: "AT-4-KI", name: { de: "Kirchdorf an der Krems", hu: "Kirchdorf an der Krems", ro: "Kirchdorf an der Krems", en: "Kirchdorf an der Krems" }, centerLat: 47.9, centerLng: 14.12, labelX: 550, labelY: 575, path: rect(480, 525) },
  { id: "AT-4-LI", name: { de: "Linz-Land", hu: "Linz-Land", ro: "Linz-Land", en: "Linz-Land" }, centerLat: 48.25, centerLng: 14.3, labelX: 620, labelY: 275, path: rect(550, 225) },
  { id: "AT-4-LL", name: { de: "Linz-Stadt", hu: "Linz város", ro: "Linz-Stadt", en: "Linz Stadt" }, centerLat: 48.3, centerLng: 14.29, labelX: 620, labelY: 175, path: rect(550, 125) },
  { id: "AT-4-PE", name: { de: "Perg", hu: "Perg", ro: "Perg", en: "Perg" }, centerLat: 48.25, centerLng: 14.63, labelX: 760, labelY: 275, path: rect(690, 225) },
  { id: "AT-4-PL", name: { de: "Pfarrkirchen im Mühlkreis", hu: "Pfarrkirchen im Mühlkreis", ro: "Pfarrkirchen im Mühlkreis", en: "Pfarrkirchen im Mühlkreis" }, centerLat: 48.44, centerLng: 13.72, labelX: 270, labelY: 75, path: rect(200, 25) },
  { id: "AT-4-RO", name: { de: "Rohrbach", hu: "Rohrbach", ro: "Rohrbach", en: "Rohrbach" }, centerLat: 48.57, centerLng: 13.99, labelX: 480, labelY: 75, path: rect(410, 25) },
  { id: "AT-4-SD", name: { de: "Schärding", hu: "Schärding", ro: "Schärding", en: "Schärding" }, centerLat: 48.46, centerLng: 13.43, labelX: 200, labelY: 75, path: rect(130, 25) },
  { id: "AT-4-SR", name: { de: "Steyr-Land", hu: "Steyr-Land", ro: "Steyr-Land", en: "Steyr-Land" }, centerLat: 48.02, centerLng: 14.43, labelX: 620, labelY: 575, path: rect(550, 525) },
  { id: "AT-4-ST", name: { de: "Steyr-Stadt", hu: "Steyr város", ro: "Steyr-Stadt", en: "Steyr Stadt" }, centerLat: 48.04, centerLng: 14.42, labelX: 620, labelY: 475, path: rect(550, 425) },
  { id: "AT-4-UU", name: { de: "Urfahr-Umgebung", hu: "Urfahr-Umgebung", ro: "Urfahr-Umgebung", en: "Urfahr-Umgebung" }, centerLat: 48.38, centerLng: 14.25, labelX: 550, labelY: 175, path: rect(480, 125) },
  { id: "AT-4-VB", name: { de: "Vöcklabruck", hu: "Vöcklabruck", ro: "Vöcklabruck", en: "Vöcklabruck" }, centerLat: 47.99, centerLng: 13.64, labelX: 270, labelY: 475, path: rect(200, 425) },
  { id: "AT-4-WE", name: { de: "Wels-Land", hu: "Wels-Land", ro: "Wels-Land", en: "Wels-Land" }, centerLat: 48.15, centerLng: 13.98, labelX: 410, labelY: 375, path: rect(340, 325) },
  { id: "AT-4-WL", name: { de: "Wels-Stadt", hu: "Wels város", ro: "Wels-Stadt", en: "Wels Stadt" }, centerLat: 48.16, centerLng: 14.03, labelX: 480, labelY: 375, path: rect(410, 325) },
];

// AT-5 — Salzburg (6 Bezirke)
const salzburgDistricts: AustriaDistrict[] = [
  { id: "AT-5-HА", name: { de: "Hallein", hu: "Hallein", ro: "Hallein", en: "Hallein" }, centerLat: 47.68, centerLng: 13.1, labelX: 480, labelY: 575, path: rect(410, 525) },
  { id: "AT-5-JO", name: { de: "St. Johann im Pongau", hu: "St. Johann im Pongau", ro: "St. Johann im Pongau", en: "St. Johann im Pongau" }, centerLat: 47.34, centerLng: 13.2, labelX: 480, labelY: 825, path: rect(410, 775) },
  { id: "AT-5-LU", name: { de: "Lungau", hu: "Lungau", ro: "Lungau", en: "Lungau" }, centerLat: 47.1, centerLng: 13.8, labelX: 760, labelY: 975, path: rect(690, 925) },
  { id: "AT-5-PG", name: { de: "Pinzgau", hu: "Pinzgau", ro: "Pinzgau", en: "Pinzgau" }, centerLat: 47.3, centerLng: 12.6, labelX: 200, labelY: 875, path: rect(130, 825) },
  { id: "AT-5-PT", name: { de: "Pongau", hu: "Pongau", ro: "Pongau", en: "Pongau" }, centerLat: 47.32, centerLng: 13.1, labelX: 340, labelY: 875, path: rect(270, 825) },
  { id: "AT-5-SL", name: { de: "Salzburg-Land", hu: "Salzburg-Land", ro: "Salzburg-Land", en: "Salzburg-Land" }, centerLat: 47.7, centerLng: 13.17, labelX: 340, labelY: 475, path: rect(270, 425) },
  { id: "AT-5-SS", name: { de: "Salzburg-Stadt", hu: "Salzburg város", ro: "Salzburg-Stadt", en: "Salzburg Stadt" }, centerLat: 47.8, centerLng: 13.05, labelX: 340, labelY: 275, path: rect(270, 225) },
  { id: "AT-5-TA", name: { de: "Tamsweg", hu: "Tamsweg", ro: "Tamsweg", en: "Tamsweg" }, centerLat: 47.13, centerLng: 13.81, labelX: 760, labelY: 875, path: rect(690, 825) },
  { id: "AT-5-ZE", name: { de: "Zell am See", hu: "Zell am See", ro: "Zell am See", en: "Zell am See" }, centerLat: 47.32, centerLng: 12.79, labelX: 270, labelY: 875, path: rect(200, 825) },
];

// AT-6 — Styria / Steiermark (13 Bezirke)
const styriaDistricts: AustriaDistrict[] = [
  { id: "AT-6-BM", name: { de: "Bruck-Mürzzuschlag", hu: "Bruck-Mürzzuschlag", ro: "Bruck-Mürzzuschlag", en: "Bruck-Mürzzuschlag" }, centerLat: 47.55, centerLng: 15.3, labelX: 480, labelY: 175, path: rect(410, 125) },
  { id: "AT-6-DL", name: { de: "Deutschlandsberg", hu: "Deutschlandsberg", ro: "Deutschlandsberg", en: "Deutschlandsberg" }, centerLat: 46.81, centerLng: 15.22, labelX: 270, labelY: 775, path: rect(200, 725) },
  { id: "AT-6-EF", name: { de: "Feldbach", hu: "Feldbach", ro: "Feldbach", en: "Feldbach" }, centerLat: 46.95, centerLng: 15.88, labelX: 690, labelY: 675, path: rect(620, 625) },
  { id: "AT-6-FF", name: { de: "Fürstenfeld", hu: "Fürstenfeld", ro: "Fürstenfeld", en: "Fürstenfeld" }, centerLat: 47.05, centerLng: 16.08, labelX: 830, labelY: 575, path: rect(760, 525) },
  { id: "AT-6-GB", name: { de: "Graz-Umgebung", hu: "Graz-Umgebung", ro: "Graz-Umgebung", en: "Graz-Umgebung" }, centerLat: 47.0, centerLng: 15.4, labelX: 480, labelY: 575, path: rect(410, 525) },
  { id: "AT-6-GR", name: { de: "Graz-Stadt", hu: "Graz város", ro: "Graz-Stadt", en: "Graz Stadt" }, centerLat: 47.07, centerLng: 15.44, labelX: 550, labelY: 575, path: rect(480, 525) },
  { id: "AT-6-HB", name: { de: "Hartberg-Fürstenfeld", hu: "Hartberg-Fürstenfeld", ro: "Hartberg-Fürstenfeld", en: "Hartberg-Fürstenfeld" }, centerLat: 47.28, centerLng: 15.98, labelX: 760, labelY: 375, path: rect(690, 325) },
  { id: "AT-6-JE", name: { de: "Jennersdorf", hu: "Jennersdorf", ro: "Jennersdorf", en: "Jennersdorf" }, centerLat: 46.94, centerLng: 16.14, labelX: 900, labelY: 775, path: rect(830, 725) },
  { id: "AT-6-KF", name: { de: "Knittelfeld", hu: "Knittelfeld", ro: "Knittelfeld", en: "Knittelfeld" }, centerLat: 47.22, centerLng: 14.83, labelX: 200, labelY: 475, path: rect(130, 425) },
  { id: "AT-6-LB", name: { de: "Leibnitz", hu: "Leibnitz", ro: "Leibnitz", en: "Leibnitz" }, centerLat: 46.78, centerLng: 15.54, labelX: 550, labelY: 875, path: rect(480, 825) },
  { id: "AT-6-LE", name: { de: "Leoben", hu: "Leoben", ro: "Leoben", en: "Leoben" }, centerLat: 47.38, centerLng: 15.09, labelX: 340, labelY: 275, path: rect(270, 225) },
  { id: "AT-6-LI", name: { de: "Liezen", hu: "Liezen", ro: "Liezen", en: "Liezen" }, centerLat: 47.56, centerLng: 14.24, labelX: 130, labelY: 175, path: rect(60, 125) },
  { id: "AT-6-MK", name: { de: "Murau", hu: "Murau", ro: "Murau", en: "Murau" }, centerLat: 47.1, centerLng: 14.17, labelX: 130, labelY: 575, path: rect(60, 525) },
  { id: "AT-6-MT", name: { de: "Murtal", hu: "Murtal", ro: "Murtal", en: "Murtal" }, centerLat: 47.2, centerLng: 14.65, labelX: 270, labelY: 475, path: rect(200, 425) },
  { id: "AT-6-PB", name: { de: "Leibnitz-Land", hu: "Leibnitz-Land", ro: "Leibnitz-Land", en: "Leibnitz-Land" }, centerLat: 46.82, centerLng: 15.45, labelX: 410, labelY: 875, path: rect(340, 825) },
  { id: "AT-6-RA", name: { de: "Radkersburg", hu: "Radkersburg", ro: "Radkersburg", en: "Radkersburg" }, centerLat: 46.68, centerLng: 15.98, labelX: 760, labelY: 1025, path: rect(690, 975) },
  { id: "AT-6-VO", name: { de: "Voitsberg", hu: "Voitsberg", ro: "Voitsberg", en: "Voitsberg" }, centerLat: 47.04, centerLng: 15.14, labelX: 270, labelY: 675, path: rect(200, 625) },
  { id: "AT-6-WK", name: { de: "Weiz", hu: "Weiz", ro: "Weiz", en: "Weiz" }, centerLat: 47.22, centerLng: 15.63, labelX: 620, labelY: 475, path: rect(550, 425) },
];

// AT-7 — Tyrol / Tirol (9 Bezirke)
const tyrolDistricts: AustriaDistrict[] = [
  { id: "AT-7-EL", name: { de: "Innsbruck-Land", hu: "Innsbruck-Land", ro: "Innsbruck-Land", en: "Innsbruck-Land" }, centerLat: 47.27, centerLng: 11.4, labelX: 550, labelY: 475, path: rect(480, 425) },
  { id: "AT-7-IL", name: { de: "Imst", hu: "Imst", ro: "Imst", en: "Imst" }, centerLat: 47.24, centerLng: 10.74, labelX: 270, labelY: 475, path: rect(200, 425) },
  { id: "AT-7-IS", name: { de: "Innsbruck-Stadt", hu: "Innsbruck város", ro: "Innsbruck-Stadt", en: "Innsbruck Stadt" }, centerLat: 47.27, centerLng: 11.39, labelX: 480, labelY: 375, path: rect(410, 325) },
  { id: "AT-7-KB", name: { de: "Kitzbühel", hu: "Kitzbühel", ro: "Kitzbühel", en: "Kitzbühel" }, centerLat: 47.45, centerLng: 12.39, labelX: 830, labelY: 275, path: rect(760, 225) },
  { id: "AT-7-KU", name: { de: "Kufstein", hu: "Kufstein", ro: "Kufstein", en: "Kufstein" }, centerLat: 47.58, centerLng: 12.17, labelX: 760, labelY: 175, path: rect(690, 125) },
  { id: "AT-7-LA", name: { de: "Landeck", hu: "Landeck", ro: "Landeck", en: "Landeck" }, centerLat: 47.14, centerLng: 10.56, labelX: 130, labelY: 575, path: rect(60, 525) },
  { id: "AT-7-LI", name: { de: "Lienz", hu: "Lienz", ro: "Lienz", en: "Lienz" }, centerLat: 46.83, centerLng: 12.77, labelX: 900, labelY: 875, path: rect(830, 825) },
  { id: "AT-7-RE", name: { de: "Reutte", hu: "Reutte", ro: "Reutte", en: "Reutte" }, centerLat: 47.48, centerLng: 10.71, labelX: 200, labelY: 175, path: rect(130, 125) },
  { id: "AT-7-SZ", name: { de: "Schwaz", hu: "Schwaz", ro: "Schwaz", en: "Schwaz" }, centerLat: 47.35, centerLng: 11.7, labelX: 690, labelY: 375, path: rect(620, 325) },
];

// AT-8 — Vorarlberg (4 Bezirke)
const vorarlbergDistricts: AustriaDistrict[] = [
  { id: "AT-8-BL", name: { de: "Bludenz", hu: "Bludenz", ro: "Bludenz", en: "Bludenz" }, centerLat: 47.15, centerLng: 9.82, labelX: 340, labelY: 675, path: rect(270, 625) },
  { id: "AT-8-BR", name: { de: "Bregenz", hu: "Bregenz", ro: "Bregenz", en: "Bregenz" }, centerLat: 47.51, centerLng: 9.74, labelX: 270, labelY: 175, path: rect(200, 125) },
  { id: "AT-8-DL", name: { de: "Dornbirn", hu: "Dornbirn", ro: "Dornbirn", en: "Dornbirn" }, centerLat: 47.41, centerLng: 9.74, labelX: 270, labelY: 375, path: rect(200, 325) },
  { id: "AT-8-FK", name: { de: "Feldkirch", hu: "Feldkirch", ro: "Feldkirch", en: "Feldkirch" }, centerLat: 47.24, centerLng: 9.6, labelX: 200, labelY: 525, path: rect(130, 475) },
];

// AT-9 — Vienna / Wien (23 Gemeindebezirke)
const viennaDistricts: AustriaDistrict[] = [
  { id: "AT-9-01", name: { de: "Innere Stadt", hu: "Belváros", ro: "Innere Stadt", en: "Innere Stadt" }, centerLat: 48.21, centerLng: 16.37, labelX: 480, labelY: 525, path: rect(440, 500, 80, 60) },
  { id: "AT-9-02", name: { de: "Leopoldstadt", hu: "Leopoldstadt", ro: "Leopoldstadt", en: "Leopoldstadt" }, centerLat: 48.22, centerLng: 16.39, labelX: 620, labelY: 475, path: rect(580, 450, 80, 60) },
  { id: "AT-9-03", name: { de: "Landstraße", hu: "Landstraße", ro: "Landstraße", en: "Landstraße" }, centerLat: 48.2, centerLng: 16.39, labelX: 620, labelY: 575, path: rect(580, 550, 80, 60) },
  { id: "AT-9-04", name: { de: "Wieden", hu: "Wieden", ro: "Wieden", en: "Wieden" }, centerLat: 48.19, centerLng: 16.36, labelX: 480, labelY: 625, path: rect(440, 600, 80, 60) },
  { id: "AT-9-05", name: { de: "Margareten", hu: "Margareten", ro: "Margareten", en: "Margareten" }, centerLat: 48.18, centerLng: 16.35, labelX: 340, labelY: 675, path: rect(300, 650, 80, 60) },
  { id: "AT-9-06", name: { de: "Mariahilf", hu: "Mariahilf", ro: "Mariahilf", en: "Mariahilf" }, centerLat: 48.2, centerLng: 16.35, labelX: 340, labelY: 575, path: rect(300, 550, 80, 60) },
  { id: "AT-9-07", name: { de: "Neubau", hu: "Neubau", ro: "Neubau", en: "Neubau" }, centerLat: 48.2, centerLng: 16.35, labelX: 200, labelY: 575, path: rect(160, 550, 80, 60) },
  { id: "AT-9-08", name: { de: "Josefstadt", hu: "Josefstadt", ro: "Josefstadt", en: "Josefstadt" }, centerLat: 48.21, centerLng: 16.34, labelX: 200, labelY: 475, path: rect(160, 450, 80, 60) },
  { id: "AT-9-09", name: { de: "Alsergrund", hu: "Alsergrund", ro: "Alsergrund", en: "Alsergrund" }, centerLat: 48.22, centerLng: 16.35, labelX: 340, labelY: 375, path: rect(300, 350, 80, 60) },
  { id: "AT-9-10", name: { de: "Favoriten", hu: "Favoriten", ro: "Favoriten", en: "Favoriten" }, centerLat: 48.16, centerLng: 16.37, labelX: 480, labelY: 775, path: rect(440, 750, 80, 60) },
  { id: "AT-9-11", name: { de: "Simmering", hu: "Simmering", ro: "Simmering", en: "Simmering" }, centerLat: 48.17, centerLng: 16.43, labelX: 760, labelY: 725, path: rect(720, 700, 80, 60) },
  { id: "AT-9-12", name: { de: "Meidling", hu: "Meidling", ro: "Meidling", en: "Meidling" }, centerLat: 48.17, centerLng: 16.33, labelX: 340, labelY: 725, path: rect(300, 700, 80, 60) },
  { id: "AT-9-13", name: { de: "Hietzing", hu: "Hietzing", ro: "Hietzing", en: "Hietzing" }, centerLat: 48.18, centerLng: 16.28, labelX: 130, labelY: 675, path: rect(90, 650, 80, 60) },
  { id: "AT-9-14", name: { de: "Penzing", hu: "Penzing", ro: "Penzing", en: "Penzing" }, centerLat: 48.2, centerLng: 16.29, labelX: 130, labelY: 575, path: rect(90, 550, 80, 60) },
  { id: "AT-9-15", name: { de: "Rudolfsheim-Fünfhaus", hu: "Rudolfsheim-Fünfhaus", ro: "Rudolfsheim-Fünfhaus", en: "Rudolfsheim-Fünfhaus" }, centerLat: 48.2, centerLng: 16.33, labelX: 200, labelY: 575, path: rect(160, 550, 80, 60) },
  { id: "AT-9-16", name: { de: "Ottakring", hu: "Ottakring", ro: "Ottakring", en: "Ottakring" }, centerLat: 48.21, centerLng: 16.31, labelX: 130, labelY: 475, path: rect(90, 450, 80, 60) },
  { id: "AT-9-17", name: { de: "Hernals", hu: "Hernals", ro: "Hernals", en: "Hernals" }, centerLat: 48.22, centerLng: 16.31, labelX: 130, labelY: 375, path: rect(90, 350, 80, 60) },
  { id: "AT-9-18", name: { de: "Währing", hu: "Währing", ro: "Währing", en: "Währing" }, centerLat: 48.23, centerLng: 16.33, labelX: 200, labelY: 325, path: rect(160, 300, 80, 60) },
  { id: "AT-9-19", name: { de: "Döbling", hu: "Döbling", ro: "Döbling", en: "Döbling" }, centerLat: 48.25, centerLng: 16.35, labelX: 340, labelY: 225, path: rect(300, 200, 80, 60) },
  { id: "AT-9-20", name: { de: "Brigittenau", hu: "Brigittenau", ro: "Brigittenau", en: "Brigittenau" }, centerLat: 48.24, centerLng: 16.37, labelX: 480, labelY: 325, path: rect(440, 300, 80, 60) },
  { id: "AT-9-21", name: { de: "Floridsdorf", hu: "Floridsdorf", ro: "Floridsdorf", en: "Floridsdorf" }, centerLat: 48.27, centerLng: 16.4, labelX: 620, labelY: 175, path: rect(580, 150, 80, 60) },
  { id: "AT-9-22", name: { de: "Donaustadt", hu: "Donaustadt", ro: "Donaustadt", en: "Donaustadt" }, centerLat: 48.23, centerLng: 16.45, labelX: 760, labelY: 325, path: rect(720, 300, 80, 60) },
  { id: "AT-9-23", name: { de: "Liesing", hu: "Liesing", ro: "Liesing", en: "Liesing" }, centerLat: 48.14, centerLng: 16.28, labelX: 130, labelY: 875, path: rect(90, 850, 80, 60) },
];

export const atAdmin2Map: Record<string, AustriaDistrict[]> = {
  "AT-1": burgenlandDistricts,
  "AT-2": carinthiaDistricts,
  "AT-3": lowerAustriaDistricts,
  "AT-4": upperAustriaDistricts,
  "AT-5": salzburgDistricts,
  "AT-6": styriaDistricts,
  "AT-7": tyrolDistricts,
  "AT-8": vorarlbergDistricts,
  "AT-9": viennaDistricts,
};
