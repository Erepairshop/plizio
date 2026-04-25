// Poland Admin-2 (powiaty) — placeholder paths
// Real GeoJSON paths require a build-time pipeline (no internet access at generation time).
// Each voivodeship has representative powiaty with dummy rectangular SVG paths
// projected onto a 1000x1200 viewBox. Replace with real paths when GeoJSON is available.
//
// Poland has 16 voivodeships and ~380 powiaty.
// Performance note: at low zoom, the parent voivodeship layer is shown; powiaty only render on drill-down.

export interface PoiatSubregion {
  id: string;
  name: { de: string; hu: string; ro: string; en: string };
  centerLat: number;
  centerLon: number;
  labelX: number;
  labelY: number;
  path: string;
}

// Helper: generate a simple rectangular placeholder path around a center point
function rect(cx: number, cy: number, w = 60, h = 50): string {
  const x = cx - w / 2;
  const y = cy - h / 2;
  return `M${x},${y} L${x + w},${y} L${x + w},${y + h} L${x},${y + h} Z`;
}

export const plAdmin2Map: Record<string, PoiatSubregion[]> = {
  // ─── PL-MZ Masovian ──────────────────────────────────────────────────────
  "PL-MZ": [
    { id: "PL-MZ-WA", name: { de: "Warschau", hu: "Varsó", ro: "Varșovia", en: "Warsaw" }, centerLat: 52.23, centerLon: 21.01, labelX: 500, labelY: 580, path: rect(500, 580) },
    { id: "PL-MZ-GR", name: { de: "Grójec", hu: "Grójec", ro: "Grójec", en: "Grójec" }, centerLat: 51.87, centerLon: 20.87, labelX: 420, labelY: 650, path: rect(420, 650) },
    { id: "PL-MZ-GZ", name: { de: "Garwolin", hu: "Garwolin", ro: "Garwolin", en: "Garwolin" }, centerLat: 51.9, centerLon: 21.61, labelX: 580, labelY: 640, path: rect(580, 640) },
    { id: "PL-MZ-GO", name: { de: "Góra Kalwaria", hu: "Góra Kalwaria", ro: "Góra Kalwaria", en: "Góra Kalwaria" }, centerLat: 51.98, centerLon: 21.21, labelX: 510, labelY: 620, path: rect(510, 620) },
    { id: "PL-MZ-LE", name: { de: "Legionowo", hu: "Legionowo", ro: "Legionowo", en: "Legionowo" }, centerLat: 52.4, centerLon: 20.93, labelX: 490, labelY: 530, path: rect(490, 530) },
    { id: "PL-MZ-OT", name: { de: "Otwock", hu: "Otwock", ro: "Otwock", en: "Otwock" }, centerLat: 52.1, centerLon: 21.26, labelX: 530, labelY: 600, path: rect(530, 600) },
    { id: "PL-MZ-PI", name: { de: "Piaseczno", hu: "Piaseczno", ro: "Piaseczno", en: "Piaseczno" }, centerLat: 52.09, centerLon: 21.02, labelX: 490, labelY: 605, path: rect(490, 605) },
    { id: "PL-MZ-PR", name: { de: "Pruszków", hu: "Pruszków", ro: "Pruszków", en: "Pruszków" }, centerLat: 52.17, centerLon: 20.8, labelX: 460, labelY: 590, path: rect(460, 590) },
    { id: "PL-MZ-PU", name: { de: "Pułtusk", hu: "Pułtusk", ro: "Pułtusk", en: "Pułtusk" }, centerLat: 52.7, centerLon: 21.09, labelX: 510, labelY: 490, path: rect(510, 490) },
    { id: "PL-MZ-WO", name: { de: "Wołomin", hu: "Wołomin", ro: "Wołomin", en: "Wołomin" }, centerLat: 52.35, centerLon: 21.24, labelX: 540, labelY: 545, path: rect(540, 545) },
    { id: "PL-MZ-SZ", name: { de: "Sierpc", hu: "Sierpc", ro: "Sierpc", en: "Sierpc" }, centerLat: 52.86, centerLon: 19.67, labelX: 340, labelY: 465, path: rect(340, 465) },
    { id: "PL-MZ-ZW", name: { de: "Żyrardów", hu: "Żyrardów", ro: "Żyrardów", en: "Żyrardów" }, centerLat: 52.05, centerLon: 20.44, labelX: 420, labelY: 610, path: rect(420, 610) },
    { id: "PL-MZ-MA", name: { de: "Maków Mazowiecki", hu: "Maków Mazowiecki", ro: "Maków Mazowiecki", en: "Maków Mazowiecki" }, centerLat: 52.86, centerLon: 21.1, labelX: 505, labelY: 462, path: rect(505, 462) },
    { id: "PL-MZ-RA", name: { de: "Radom", hu: "Radom", ro: "Radom", en: "Radom" }, centerLat: 51.4, centerLon: 21.15, labelX: 515, labelY: 700, path: rect(515, 700) },
    { id: "PL-MZ-PL", name: { de: "Płock", hu: "Płock", ro: "Płock", en: "Płock" }, centerLat: 52.55, centerLon: 19.7, labelX: 345, labelY: 510, path: rect(345, 510) },
    { id: "PL-MZ-OS", name: { de: "Ostrów Mazowiecka", hu: "Ostrów Mazowiecka", ro: "Ostrów Mazowiecka", en: "Ostrów Mazowiecka" }, centerLat: 52.8, centerLon: 21.9, labelX: 600, labelY: 467, path: rect(600, 467) },
    { id: "PL-MZ-SD", name: { de: "Siedlce", hu: "Siedlce", ro: "Siedlce", en: "Siedlce" }, centerLat: 52.17, centerLon: 22.29, labelX: 640, labelY: 590, path: rect(640, 590) },
  ],

  // ─── PL-MA Lesser Poland (Małopolskie) ───────────────────────────────────
  "PL-MA": [
    { id: "PL-MA-KR", name: { de: "Krakau", hu: "Krakkó", ro: "Cracovia", en: "Kraków" }, centerLat: 50.06, centerLon: 19.94, labelX: 400, labelY: 580, path: rect(400, 580) },
    { id: "PL-MA-TA", name: { de: "Tarnów", hu: "Tarnów", ro: "Tarnów", en: "Tarnów" }, centerLat: 50.01, centerLon: 20.99, labelX: 520, labelY: 590, path: rect(520, 590) },
    { id: "PL-MA-NS", name: { de: "Nowy Sącz", hu: "Nowy Sącz", ro: "Nowy Sącz", en: "Nowy Sącz" }, centerLat: 49.62, centerLon: 20.69, labelX: 480, labelY: 650, path: rect(480, 650) },
    { id: "PL-MA-OL", name: { de: "Olkusz", hu: "Olkusz", ro: "Olkusz", en: "Olkusz" }, centerLat: 50.28, centerLon: 19.56, labelX: 350, labelY: 545, path: rect(350, 545) },
    { id: "PL-MA-CH", name: { de: "Chrzanów", hu: "Chrzanów", ro: "Chrzanów", en: "Chrzanów" }, centerLat: 50.13, centerLon: 19.4, labelX: 325, labelY: 575, path: rect(325, 575) },
    { id: "PL-MA-MY", name: { de: "Myślenice", hu: "Myślenice", ro: "Myślenice", en: "Myślenice" }, centerLat: 49.83, centerLon: 19.94, labelX: 395, labelY: 620, path: rect(395, 620) },
    { id: "PL-MA-WA", name: { de: "Wadowice", hu: "Wadowice", ro: "Wadowice", en: "Wadowice" }, centerLat: 49.88, centerLon: 19.5, labelX: 340, labelY: 610, path: rect(340, 610) },
    { id: "PL-MA-NO", name: { de: "Nowy Targ", hu: "Nowy Targ", ro: "Nowy Targ", en: "Nowy Targ" }, centerLat: 49.48, centerLon: 20.03, labelX: 400, labelY: 680, path: rect(400, 680) },
    { id: "PL-MA-ZA", name: { de: "Zakopane", hu: "Zakopane", ro: "Zakopane", en: "Zakopane" }, centerLat: 49.3, centerLon: 19.95, labelX: 395, labelY: 720, path: rect(395, 720) },
    { id: "PL-MA-LI", name: { de: "Limanowa", hu: "Limanowa", ro: "Limanowa", en: "Limanowa" }, centerLat: 49.7, centerLon: 20.42, labelX: 440, labelY: 640, path: rect(440, 640) },
    { id: "PL-MA-BC", name: { de: "Bochnia", hu: "Bochnia", ro: "Bochnia", en: "Bochnia" }, centerLat: 49.97, centerLon: 20.43, labelX: 445, labelY: 595, path: rect(445, 595) },
    { id: "PL-MA-BR", name: { de: "Brzesko", hu: "Brzesko", ro: "Brzesko", en: "Brzesko" }, centerLat: 49.96, centerLon: 20.62, labelX: 465, labelY: 597, path: rect(465, 597) },
    { id: "PL-MA-GO", name: { de: "Gorlice", hu: "Gorlice", ro: "Gorlice", en: "Gorlice" }, centerLat: 49.66, centerLon: 21.16, labelX: 530, labelY: 645, path: rect(530, 645) },
    { id: "PL-MA-PR", name: { de: "Proszowice", hu: "Proszowice", ro: "Proszowice", en: "Proszowice" }, centerLat: 50.19, centerLon: 20.29, labelX: 425, labelY: 560, path: rect(425, 560) },
    { id: "PL-MA-WI", name: { de: "Wieliczka", hu: "Wieliczka", ro: "Wieliczka", en: "Wieliczka" }, centerLat: 49.99, centerLon: 20.07, labelX: 405, labelY: 593, path: rect(405, 593) },
    { id: "PL-MA-SU", name: { de: "Sucha Beskidzka", hu: "Sucha Beskidzka", ro: "Sucha Beskidzka", en: "Sucha Beskidzka" }, centerLat: 49.74, centerLon: 19.6, labelX: 350, labelY: 637, path: rect(350, 637) },
  ],

  // ─── PL-PM Pomeranian (Pomorskie) ────────────────────────────────────────
  "PL-PM": [
    { id: "PL-PM-GD", name: { de: "Danzig", hu: "Gdańsk", ro: "Gdańsk", en: "Gdańsk" }, centerLat: 54.35, centerLon: 18.64, labelX: 460, labelY: 400, path: rect(460, 400) },
    { id: "PL-PM-GY", name: { de: "Gdingen", hu: "Gdynia", ro: "Gdynia", en: "Gdynia" }, centerLat: 54.52, centerLon: 18.53, labelX: 445, labelY: 375, path: rect(445, 375) },
    { id: "PL-PM-SO", name: { de: "Zoppot", hu: "Sopot", ro: "Sopot", en: "Sopot" }, centerLat: 54.44, centerLon: 18.56, labelX: 448, labelY: 388, path: rect(448, 388) },
    { id: "PL-PM-SL", name: { de: "Słupsk", hu: "Słupsk", ro: "Słupsk", en: "Słupsk" }, centerLat: 54.46, centerLon: 17.03, labelX: 300, labelY: 384, path: rect(300, 384) },
    { id: "PL-PM-KA", name: { de: "Kartuzy", hu: "Kartuzy", ro: "Kartuzy", en: "Kartuzy" }, centerLat: 54.33, centerLon: 18.2, labelX: 415, labelY: 405, path: rect(415, 405) },
    { id: "PL-PM-KO", name: { de: "Kościerzyna", hu: "Kościerzyna", ro: "Kościerzyna", en: "Kościerzyna" }, centerLat: 54.12, centerLon: 17.97, labelX: 390, labelY: 430, path: rect(390, 430) },
    { id: "PL-PM-TC", name: { de: "Tczew", hu: "Tczew", ro: "Tczew", en: "Tczew" }, centerLat: 54.1, centerLon: 18.78, labelX: 470, labelY: 435, path: rect(470, 435) },
    { id: "PL-PM-ST", name: { de: "Starogard Gdański", hu: "Starogard Gdański", ro: "Starogard Gdański", en: "Starogard Gdański" }, centerLat: 53.96, centerLon: 18.53, labelX: 442, labelY: 454, path: rect(442, 454) },
    { id: "PL-PM-WJ", name: { de: "Wejherowo", hu: "Wejherowo", ro: "Wejherowo", en: "Wejherowo" }, centerLat: 54.61, centerLon: 18.23, labelX: 415, labelY: 364, path: rect(415, 364) },
    { id: "PL-PM-PR", name: { de: "Puck", hu: "Puck", ro: "Puck", en: "Puck" }, centerLat: 54.72, centerLon: 18.4, labelX: 430, labelY: 346, path: rect(430, 346) },
    { id: "PL-PM-BY", name: { de: "Bytów", hu: "Bytów", ro: "Bytów", en: "Bytów" }, centerLat: 54.17, centerLon: 17.49, labelX: 350, labelY: 422, path: rect(350, 422) },
    { id: "PL-PM-LE", name: { de: "Lębork", hu: "Lębork", ro: "Lębork", en: "Lębork" }, centerLat: 54.54, centerLon: 17.75, labelX: 372, labelY: 373, path: rect(372, 373) },
    { id: "PL-PM-CZ", name: { de: "Człuchów", hu: "Człuchów", ro: "Człuchów", en: "Człuchów" }, centerLat: 53.66, centerLon: 17.36, labelX: 335, labelY: 497, path: rect(335, 497) },
    { id: "PL-PM-CH", name: { de: "Chojnice", hu: "Chojnice", ro: "Chojnice", en: "Chojnice" }, centerLat: 53.7, centerLon: 17.56, labelX: 355, labelY: 492, path: rect(355, 492) },
    { id: "PL-PM-KW", name: { de: "Kwidzyn", hu: "Kwidzyn", ro: "Kwidzyn", en: "Kwidzyn" }, centerLat: 53.73, centerLon: 18.93, labelX: 485, labelY: 488, path: rect(485, 488) },
    { id: "PL-PM-MA", name: { de: "Malbork", hu: "Malbork", ro: "Malbork", en: "Malbork" }, centerLat: 54.04, centerLon: 19.03, labelX: 495, labelY: 445, path: rect(495, 445) },
  ],

  // ─── PL-DS Lower Silesia (Dolnośląskie) ──────────────────────────────────
  "PL-DS": [
    { id: "PL-DS-WR", name: { de: "Breslau", hu: "Wrocław", ro: "Wrocław", en: "Wrocław" }, centerLat: 51.11, centerLon: 17.04, labelX: 440, labelY: 500, path: rect(440, 500) },
    { id: "PL-DS-LE", name: { de: "Legnica", hu: "Legnica", ro: "Legnica", en: "Legnica" }, centerLat: 51.21, centerLon: 16.16, labelX: 350, labelY: 488, path: rect(350, 488) },
    { id: "PL-DS-JE", name: { de: "Jelenia Góra", hu: "Jelenia Góra", ro: "Jelenia Góra", en: "Jelenia Góra" }, centerLat: 50.9, centerLon: 15.73, labelX: 305, labelY: 530, path: rect(305, 530) },
    { id: "PL-DS-WA", name: { de: "Wałbrzych", hu: "Wałbrzych", ro: "Wałbrzych", en: "Wałbrzych" }, centerLat: 50.78, centerLon: 16.28, labelX: 362, labelY: 547, path: rect(362, 547) },
    { id: "PL-DS-KL", name: { de: "Kłodzko", hu: "Kłodzko", ro: "Kłodzko", en: "Kłodzko" }, centerLat: 50.44, centerLon: 16.66, labelX: 405, labelY: 596, path: rect(405, 596) },
    { id: "PL-DS-LU", name: { de: "Lubin", hu: "Lubin", ro: "Lubin", en: "Lubin" }, centerLat: 51.4, centerLon: 16.2, labelX: 353, labelY: 449, path: rect(353, 449) },
    { id: "PL-DS-GO", name: { de: "Góra", hu: "Góra", ro: "Góra", en: "Góra" }, centerLat: 51.67, centerLon: 16.54, labelX: 393, labelY: 413, path: rect(393, 413) },
    { id: "PL-DS-BO", name: { de: "Bolesławiec", hu: "Bolesławiec", ro: "Bolesławiec", en: "Bolesławiec" }, centerLat: 51.27, centerLon: 15.56, labelX: 284, labelY: 478, path: rect(284, 478) },
    { id: "PL-DS-LW", name: { de: "Lwówek Śląski", hu: "Lwówek Śląski", ro: "Lwówek Śląski", en: "Lwówek Śląski" }, centerLat: 51.11, centerLon: 15.59, labelX: 286, labelY: 500, path: rect(286, 500) },
    { id: "PL-DS-ZA", name: { de: "Ząbkowice Śląskie", hu: "Ząbkowice Śląskie", ro: "Ząbkowice Śląskie", en: "Ząbkowice Śląskie" }, centerLat: 50.59, centerLon: 16.81, labelX: 423, labelY: 577, path: rect(423, 577) },
    { id: "PL-DS-OR", name: { de: "Oława", hu: "Oława", ro: "Oława", en: "Oława" }, centerLat: 50.95, centerLon: 17.29, labelX: 467, labelY: 522, path: rect(467, 522) },
    { id: "PL-DS-ST", name: { de: "Strzelin", hu: "Strzelin", ro: "Strzelin", en: "Strzelin" }, centerLat: 50.78, centerLon: 17.06, labelX: 441, labelY: 546, path: rect(441, 546) },
    { id: "PL-DS-SR", name: { de: "Środa Śląska", hu: "Środa Śląska", ro: "Środa Śląska", en: "Środa Śląska" }, centerLat: 51.16, centerLon: 16.6, labelX: 398, labelY: 494, path: rect(398, 494) },
    { id: "PL-DS-TR", name: { de: "Trzebnica", hu: "Trzebnica", ro: "Trzebnica", en: "Trzebnica" }, centerLat: 51.31, centerLon: 17.07, labelX: 441, labelY: 471, path: rect(441, 471) },
    { id: "PL-DS-ZG", name: { de: "Zgorzelec", hu: "Zgorzelec", ro: "Zgorzelec", en: "Zgorzelec" }, centerLat: 51.15, centerLon: 15.01, labelX: 230, labelY: 495, path: rect(230, 495) },
    { id: "PL-DS-GW", name: { de: "Głogów", hu: "Głogów", ro: "Głogów", en: "Głogów" }, centerLat: 51.67, centerLon: 16.08, labelX: 338, labelY: 413, path: rect(338, 413) },
  ],

  // ─── PL-WP Greater Poland (Wielkopolskie) ────────────────────────────────
  "PL-WP": [
    { id: "PL-WP-PO", name: { de: "Posen", hu: "Poznań", ro: "Poznań", en: "Poznań" }, centerLat: 52.41, centerLon: 16.93, labelX: 430, labelY: 530, path: rect(430, 530) },
    { id: "PL-WP-KA", name: { de: "Kalisz", hu: "Kalisz", ro: "Kalisz", en: "Kalisz" }, centerLat: 51.76, centerLon: 18.08, labelX: 550, labelY: 610, path: rect(550, 610) },
    { id: "PL-WP-KO", name: { de: "Konin", hu: "Konin", ro: "Konin", en: "Konin" }, centerLat: 52.22, centerLon: 18.25, labelX: 567, labelY: 568, path: rect(567, 568) },
    { id: "PL-WP-GN", name: { de: "Gniezno", hu: "Gniezno", ro: "Gniezno", en: "Gniezno" }, centerLat: 52.53, centerLon: 17.6, labelX: 505, labelY: 517, path: rect(505, 517) },
    { id: "PL-WP-LE", name: { de: "Leszno", hu: "Leszno", ro: "Leszno", en: "Leszno" }, centerLat: 51.84, centerLon: 16.57, labelX: 390, labelY: 600, path: rect(390, 600) },
    { id: "PL-WP-OS", name: { de: "Ostrów Wielkopolski", hu: "Ostrów Wielkopolski", ro: "Ostrów Wielkopolski", en: "Ostrów Wielkopolski" }, centerLat: 51.65, centerLon: 17.81, labelX: 520, labelY: 625, path: rect(520, 625) },
    { id: "PL-WP-CH", name: { de: "Chodzież", hu: "Chodzież", ro: "Chodzież", en: "Chodzież" }, centerLat: 52.99, centerLon: 16.92, labelX: 428, labelY: 456, path: rect(428, 456) },
    { id: "PL-WP-GO", name: { de: "Gostyń", hu: "Gostyń", ro: "Gostyń", en: "Gostyń" }, centerLat: 51.88, centerLon: 17.0, labelX: 432, labelY: 595, path: rect(432, 595) },
    { id: "PL-WP-PI", name: { de: "Piła", hu: "Piła", ro: "Piła", en: "Piła" }, centerLat: 53.15, centerLon: 16.74, labelX: 408, labelY: 437, path: rect(408, 437) },
    { id: "PL-WP-SZ", name: { de: "Szamotuły", hu: "Szamotuły", ro: "Szamotuły", en: "Szamotuły" }, centerLat: 52.62, centerLon: 16.58, labelX: 392, labelY: 506, path: rect(392, 506) },
    { id: "PL-WP-WA", name: { de: "Wągrowiec", hu: "Wągrowiec", ro: "Wągrowiec", en: "Wągrowiec" }, centerLat: 52.8, centerLon: 17.2, labelX: 454, labelY: 480, path: rect(454, 480) },
    { id: "PL-WP-WR", name: { de: "Września", hu: "Września", ro: "Września", en: "Września" }, centerLat: 52.32, centerLon: 17.57, labelX: 503, labelY: 553, path: rect(503, 553) },
    { id: "PL-WP-ZL", name: { de: "Złotów", hu: "Złotów", ro: "Złotów", en: "Złotów" }, centerLat: 53.36, centerLon: 17.03, labelX: 435, labelY: 415, path: rect(435, 415) },
    { id: "PL-WP-PL", name: { de: "Pleszew", hu: "Pleszew", ro: "Pleszew", en: "Pleszew" }, centerLat: 51.9, centerLon: 17.78, labelX: 518, labelY: 594, path: rect(518, 594) },
    { id: "PL-WP-RA", name: { de: "Rawicz", hu: "Rawicz", ro: "Rawicz", en: "Rawicz" }, centerLat: 51.61, centerLon: 16.86, labelX: 422, labelY: 630, path: rect(422, 630) },
    { id: "PL-WP-KE", name: { de: "Kępno", hu: "Kępno", ro: "Kępno", en: "Kępno" }, centerLat: 51.28, centerLon: 17.99, labelX: 542, labelY: 672, path: rect(542, 672) },
  ],

  // ─── PL-SL Silesian (Śląskie) ─────────────────────────────────────────────
  "PL-SL": [
    { id: "PL-SL-KA", name: { de: "Kattowitz", hu: "Katowice", ro: "Katowice", en: "Katowice" }, centerLat: 50.26, centerLon: 19.02, labelX: 390, labelY: 550, path: rect(390, 550) },
    { id: "PL-SL-CH", name: { de: "Chorzów", hu: "Chorzów", ro: "Chorzów", en: "Chorzów" }, centerLat: 50.3, centerLon: 18.95, labelX: 383, labelY: 544, path: rect(383, 544) },
    { id: "PL-SL-GL", name: { de: "Gliwice", hu: "Gliwice", ro: "Gliwice", en: "Gliwice" }, centerLat: 50.29, centerLon: 18.67, labelX: 355, labelY: 545, path: rect(355, 545) },
    { id: "PL-SL-ZA", name: { de: "Żywiec", hu: "Żywiec", ro: "Żywiec", en: "Żywiec" }, centerLat: 49.69, centerLon: 19.19, labelX: 400, labelY: 625, path: rect(400, 625) },
    { id: "PL-SL-BY", name: { de: "Bielsko-Biała", hu: "Bielsko-Biała", ro: "Bielsko-Biała", en: "Bielsko-Biała" }, centerLat: 49.82, centerLon: 19.04, labelX: 385, labelY: 607, path: rect(385, 607) },
    { id: "PL-SL-CZ", name: { de: "Tschenstochau", hu: "Częstochowa", ro: "Częstochowa", en: "Częstochowa" }, centerLat: 50.81, centerLon: 19.12, labelX: 400, labelY: 462, path: rect(400, 462) },
    { id: "PL-SL-RY", name: { de: "Rybnik", hu: "Rybnik", ro: "Rybnik", en: "Rybnik" }, centerLat: 50.1, centerLon: 18.55, labelX: 340, labelY: 572, path: rect(340, 572) },
    { id: "PL-SL-SO", name: { de: "Sosnowiec", hu: "Sosnowiec", ro: "Sosnowiec", en: "Sosnowiec" }, centerLat: 50.29, centerLon: 19.12, labelX: 400, labelY: 544, path: rect(400, 544) },
    { id: "PL-SL-TY", name: { de: "Tychy", hu: "Tychy", ro: "Tychy", en: "Tychy" }, centerLat: 50.12, centerLon: 18.98, labelX: 386, labelY: 570, path: rect(386, 570) },
    { id: "PL-SL-DA", name: { de: "Dąbrowa Górnicza", hu: "Dąbrowa Górnicza", ro: "Dąbrowa Górnicza", en: "Dąbrowa Górnicza" }, centerLat: 50.32, centerLon: 19.21, labelX: 410, labelY: 540, path: rect(410, 540) },
    { id: "PL-SL-WO", name: { de: "Wodzisław Śląski", hu: "Wodzisław Śląski", ro: "Wodzisław Śląski", en: "Wodzisław Śląski" }, centerLat: 50.0, centerLon: 18.46, labelX: 330, labelY: 582, path: rect(330, 582) },
    { id: "PL-SL-MI", name: { de: "Mikołów", hu: "Mikołów", ro: "Mikołów", en: "Mikołów" }, centerLat: 50.17, centerLon: 18.9, labelX: 376, labelY: 562, path: rect(376, 562) },
    { id: "PL-SL-RA", name: { de: "Racibórz", hu: "Racibórz", ro: "Racibórz", en: "Racibórz" }, centerLat: 50.09, centerLon: 18.22, labelX: 306, labelY: 573, path: rect(306, 573) },
    { id: "PL-SL-TA", name: { de: "Tarnowskie Góry", hu: "Tarnowskie Góry", ro: "Tarnowskie Góry", en: "Tarnowskie Góry" }, centerLat: 50.45, centerLon: 18.86, labelX: 372, labelY: 520, path: rect(372, 520) },
    { id: "PL-SL-ZW", name: { de: "Zawiercie", hu: "Zawiercie", ro: "Zawiercie", en: "Zawiercie" }, centerLat: 50.49, centerLon: 19.42, labelX: 432, labelY: 514, path: rect(432, 514) },
    { id: "PL-SL-MY", name: { de: "Mysłowice", hu: "Mysłowice", ro: "Mysłowice", en: "Mysłowice" }, centerLat: 50.21, centerLon: 19.16, labelX: 404, labelY: 556, path: rect(404, 556) },
  ],

  // ─── PL-LD Łódź ──────────────────────────────────────────────────────────
  "PL-LD": [
    { id: "PL-LD-LO", name: { de: "Łódź", hu: "Łódź", ro: "Łódź", en: "Łódź" }, centerLat: 51.77, centerLon: 19.46, labelX: 435, labelY: 600, path: rect(435, 600) },
    { id: "PL-LD-PI", name: { de: "Piotrków Trybunalski", hu: "Piotrków Trybunalski", ro: "Piotrków Trybunalski", en: "Piotrków Trybunalski" }, centerLat: 51.41, centerLon: 19.7, labelX: 462, labelY: 648, path: rect(462, 648) },
    { id: "PL-LD-SL", name: { de: "Sieradz", hu: "Sieradz", ro: "Sieradz", en: "Sieradz" }, centerLat: 51.59, centerLon: 18.73, labelX: 360, labelY: 617, path: rect(360, 617) },
    { id: "PL-LD-SK", name: { de: "Skierniewice", hu: "Skierniewice", ro: "Skierniewice", en: "Skierniewice" }, centerLat: 51.96, centerLon: 20.15, labelX: 508, labelY: 570, path: rect(508, 570) },
    { id: "PL-LD-TO", name: { de: "Tomaszów Mazowiecki", hu: "Tomaszów Mazowiecki", ro: "Tomaszów Mazowiecki", en: "Tomaszów Mazowiecki" }, centerLat: 51.53, centerLon: 20.01, labelX: 492, labelY: 630, path: rect(492, 630) },
    { id: "PL-LD-ZD", name: { de: "Zduńska Wola", hu: "Zduńska Wola", ro: "Zduńska Wola", en: "Zduńska Wola" }, centerLat: 51.6, centerLon: 18.94, labelX: 382, labelY: 616, path: rect(382, 616) },
    { id: "PL-LD-BE", name: { de: "Bełchatów", hu: "Bełchatów", ro: "Bełchatów", en: "Bełchatów" }, centerLat: 51.36, centerLon: 19.35, labelX: 422, labelY: 655, path: rect(422, 655) },
    { id: "PL-LD-KU", name: { de: "Kutno", hu: "Kutno", ro: "Kutno", en: "Kutno" }, centerLat: 52.23, centerLon: 19.36, labelX: 422, labelY: 540, path: rect(422, 540) },
    { id: "PL-LD-LA", name: { de: "Łask", hu: "Łask", ro: "Łask", en: "Łask" }, centerLat: 51.59, centerLon: 19.13, labelX: 402, labelY: 617, path: rect(402, 617) },
    { id: "PL-LD-LO2", name: { de: "Łowicz", hu: "Łowicz", ro: "Łowicz", en: "Łowicz" }, centerLat: 52.1, centerLon: 19.94, labelX: 485, labelY: 557, path: rect(485, 557) },
    { id: "PL-LD-OP", name: { de: "Opoczno", hu: "Opoczno", ro: "Opoczno", en: "Opoczno" }, centerLat: 51.38, centerLon: 20.28, labelX: 520, labelY: 652, path: rect(520, 652) },
    { id: "PL-LD-PA", name: { de: "Pajęczno", hu: "Pajęczno", ro: "Pajęczno", en: "Pajęczno" }, centerLat: 51.15, centerLon: 18.98, labelX: 385, labelY: 680, path: rect(385, 680) },
    { id: "PL-LD-RA", name: { de: "Radomsko", hu: "Radomsko", ro: "Radomsko", en: "Radomsko" }, centerLat: 51.07, centerLon: 19.45, labelX: 432, labelY: 690, path: rect(432, 690) },
    { id: "PL-LD-LE", name: { de: "Leczyca", hu: "Łęczyca", ro: "Łęczyca", en: "Łęczyca" }, centerLat: 52.07, centerLon: 19.2, labelX: 408, labelY: 560, path: rect(408, 560) },
    { id: "PL-LD-WL", name: { de: "Wieluń", hu: "Wieluń", ro: "Wieluń", en: "Wieluń" }, centerLat: 51.22, centerLon: 18.57, labelX: 343, labelY: 670, path: rect(343, 670) },
  ],

  // ─── PL-LU Lublin ─────────────────────────────────────────────────────────
  "PL-LU": [
    { id: "PL-LU-LU", name: { de: "Lublin", hu: "Lublin", ro: "Lublin", en: "Lublin" }, centerLat: 51.25, centerLon: 22.57, labelX: 650, labelY: 658, path: rect(650, 658) },
    { id: "PL-LU-ZA", name: { de: "Zamość", hu: "Zamość", ro: "Zamość", en: "Zamość" }, centerLat: 50.72, centerLon: 23.25, labelX: 720, labelY: 720, path: rect(720, 720) },
    { id: "PL-LU-CH", name: { de: "Chełm", hu: "Chełm", ro: "Chełm", en: "Chełm" }, centerLat: 51.14, centerLon: 23.47, labelX: 742, labelY: 670, path: rect(742, 670) },
    { id: "PL-LU-BI", name: { de: "Biała Podlaska", hu: "Biała Podlaska", ro: "Biała Podlaska", en: "Biała Podlaska" }, centerLat: 52.03, centerLon: 23.12, labelX: 710, labelY: 558, path: rect(710, 558) },
    { id: "PL-LU-PU", name: { de: "Puławy", hu: "Puławy", ro: "Puławy", en: "Puławy" }, centerLat: 51.42, centerLon: 21.97, labelX: 590, labelY: 636, path: rect(590, 636) },
    { id: "PL-LU-RA", name: { de: "Radzyń Podlaski", hu: "Radzyń Podlaski", ro: "Radzyń Podlaski", en: "Radzyń Podlaski" }, centerLat: 51.79, centerLon: 22.62, labelX: 658, labelY: 590, path: rect(658, 590) },
    { id: "PL-LU-HR", name: { de: "Hrubieszów", hu: "Hrubieszów", ro: "Hrubieszów", en: "Hrubieszów" }, centerLat: 50.81, centerLon: 23.89, labelX: 785, labelY: 710, path: rect(785, 710) },
    { id: "PL-LU-KR", name: { de: "Kraśnik", hu: "Kraśnik", ro: "Kraśnik", en: "Kraśnik" }, centerLat: 50.92, centerLon: 22.23, labelX: 618, labelY: 698, path: rect(618, 698) },
    { id: "PL-LU-LW", name: { de: "Łuków", hu: "Łuków", ro: "Łuków", en: "Łuków" }, centerLat: 51.93, centerLon: 22.38, labelX: 630, labelY: 570, path: rect(630, 570) },
    { id: "PL-LU-OP", name: { de: "Opole Lubelskie", hu: "Opole Lubelskie", ro: "Opole Lubelskie", en: "Opole Lubelskie" }, centerLat: 51.15, centerLon: 21.97, labelX: 588, labelY: 669, path: rect(588, 669) },
    { id: "PL-LU-WL", name: { de: "Włodawa", hu: "Włodawa", ro: "Włodawa", en: "Włodawa" }, centerLat: 51.55, centerLon: 23.54, labelX: 748, labelY: 620, path: rect(748, 620) },
    { id: "PL-LU-JA", name: { de: "Janów Lubelski", hu: "Janów Lubelski", ro: "Janów Lubelski", en: "Janów Lubelski" }, centerLat: 50.71, centerLon: 22.41, labelX: 635, labelY: 722, path: rect(635, 722) },
  ],

  // ─── PL-WN Warmia-Mazuria (Warmińsko-Mazurskie) ───────────────────────────
  "PL-WN": [
    { id: "PL-WN-OL", name: { de: "Allenstein", hu: "Olsztyn", ro: "Olsztyn", en: "Olsztyn" }, centerLat: 53.77, centerLon: 20.48, labelX: 450, labelY: 380, path: rect(450, 380) },
    { id: "PL-WN-EL", name: { de: "Elbing", hu: "Elbląg", ro: "Elbląg", en: "Elbląg" }, centerLat: 54.16, centerLon: 19.4, labelX: 340, labelY: 330, path: rect(340, 330) },
    { id: "PL-WN-ET", name: { de: "Ełk", hu: "Ełk", ro: "Ełk", en: "Ełk" }, centerLat: 53.83, centerLon: 22.36, labelX: 625, labelY: 370, path: rect(625, 370) },
    { id: "PL-WN-GZ", name: { de: "Giżycko", hu: "Giżycko", ro: "Giżycko", en: "Giżycko" }, centerLat: 54.04, centerLon: 21.77, labelX: 564, labelY: 347, path: rect(564, 347) },
    { id: "PL-WN-KT", name: { de: "Kętrzyn", hu: "Kętrzyn", ro: "Kętrzyn", en: "Kętrzyn" }, centerLat: 54.08, centerLon: 21.38, labelX: 522, labelY: 341, path: rect(522, 341) },
    { id: "PL-WN-MR", name: { de: "Mrągowo", hu: "Mrągowo", ro: "Mrągowo", en: "Mrągowo" }, centerLat: 53.87, centerLon: 21.3, labelX: 512, labelY: 363, path: rect(512, 363) },
    { id: "PL-WN-NO", name: { de: "Nowe Miasto Lubawskie", hu: "Nowe Miasto Lubawskie", ro: "Nowe Miasto Lubawskie", en: "Nowe Miasto Lubawskie" }, centerLat: 53.43, centerLon: 19.59, labelX: 358, labelY: 413, path: rect(358, 413) },
    { id: "PL-WN-OG", name: { de: "Ostróda", hu: "Ostróda", ro: "Ostróda", en: "Ostróda" }, centerLat: 53.7, centerLon: 19.96, labelX: 398, labelY: 390, path: rect(398, 390) },
    { id: "PL-WN-IL", name: { de: "Iława", hu: "Iława", ro: "Iława", en: "Iława" }, centerLat: 53.6, centerLon: 19.57, labelX: 356, labelY: 402, path: rect(356, 402) },
    { id: "PL-WN-LD", name: { de: "Lidzbark Warmiński", hu: "Lidzbark Warmiński", ro: "Lidzbark Warmiński", en: "Lidzbark Warmiński" }, centerLat: 54.13, centerLon: 20.59, labelX: 462, labelY: 334, path: rect(462, 334) },
    { id: "PL-WN-SZ", name: { de: "Szczytno", hu: "Szczytno", ro: "Szczytno", en: "Szczytno" }, centerLat: 53.56, centerLon: 20.99, labelX: 500, labelY: 408, path: rect(500, 408) },
    { id: "PL-WN-PI", name: { de: "Pisz", hu: "Pisz", ro: "Pisz", en: "Pisz" }, centerLat: 53.63, centerLon: 21.81, labelX: 573, labelY: 399, path: rect(573, 399) },
  ],

  // ─── PL-ZP West Pomeranian (Zachodniopomorskie) ───────────────────────────
  "PL-ZP": [
    { id: "PL-ZP-SZ", name: { de: "Stettin", hu: "Szczecin", ro: "Szczecin", en: "Szczecin" }, centerLat: 53.43, centerLon: 14.55, labelX: 230, labelY: 430, path: rect(230, 430) },
    { id: "PL-ZP-KO", name: { de: "Koszalin", hu: "Koszalin", ro: "Koszalin", en: "Koszalin" }, centerLat: 54.19, centerLon: 16.17, labelX: 352, labelY: 345, path: rect(352, 345) },
    { id: "PL-ZP-SW", name: { de: "Świnoujście", hu: "Świnoujście", ro: "Świnoujście", en: "Świnoujście" }, centerLat: 53.91, centerLon: 14.24, labelX: 196, labelY: 375, path: rect(196, 375) },
    { id: "PL-ZP-GR", name: { de: "Gryfino", hu: "Gryfino", ro: "Gryfino", en: "Gryfino" }, centerLat: 53.26, centerLon: 14.49, labelX: 222, labelY: 448, path: rect(222, 448) },
    { id: "PL-ZP-MY", name: { de: "Myślibórz", hu: "Myślibórz", ro: "Myślibórz", en: "Myślibórz" }, centerLat: 52.92, centerLon: 14.87, labelX: 265, labelY: 486, path: rect(265, 486) },
    { id: "PL-ZP-PY", name: { de: "Pyrzyce", hu: "Pyrzyce", ro: "Pyrzyce", en: "Pyrzyce" }, centerLat: 53.15, centerLon: 14.89, labelX: 267, labelY: 461, path: rect(267, 461) },
    { id: "PL-ZP-ST", name: { de: "Stargard", hu: "Stargard", ro: "Stargard", en: "Stargard" }, centerLat: 53.34, centerLon: 15.05, labelX: 282, labelY: 442, path: rect(282, 442) },
    { id: "PL-ZP-GO", name: { de: "Goleniów", hu: "Goleniów", ro: "Goleniów", en: "Goleniów" }, centerLat: 53.56, centerLon: 14.82, labelX: 260, labelY: 417, path: rect(260, 417) },
    { id: "PL-ZP-KA", name: { de: "Kamień Pomorski", hu: "Kamień Pomorski", ro: "Kamień Pomorski", en: "Kamień Pomorski" }, centerLat: 53.97, centerLon: 14.77, labelX: 253, labelY: 363, path: rect(253, 363) },
    { id: "PL-ZP-BL", name: { de: "Białogard", hu: "Białogard", ro: "Białogard", en: "Białogard" }, centerLat: 54.0, centerLon: 15.99, labelX: 333, labelY: 360, path: rect(333, 360) },
    { id: "PL-ZP-CH", name: { de: "Choszczno", hu: "Choszczno", ro: "Choszczno", en: "Choszczno" }, centerLat: 53.17, centerLon: 15.42, labelX: 320, labelY: 459, path: rect(320, 459) },
    { id: "PL-ZP-WA", name: { de: "Wałcz", hu: "Wałcz", ro: "Wałcz", en: "Wałcz" }, centerLat: 53.27, centerLon: 16.46, labelX: 385, labelY: 448, path: rect(385, 448) },
    { id: "PL-ZP-SL", name: { de: "Sławno", hu: "Sławno", ro: "Sławno", en: "Sławno" }, centerLat: 54.36, centerLon: 16.69, labelX: 407, labelY: 319, path: rect(407, 319) },
    { id: "PL-ZP-KO2", name: { de: "Kołobrzeg", hu: "Kołobrzeg", ro: "Kołobrzeg", en: "Kołobrzeg" }, centerLat: 54.18, centerLon: 15.57, labelX: 308, labelY: 345, path: rect(308, 345) },
  ],

  // ─── PL-PD Podlaskie ─────────────────────────────────────────────────────
  "PL-PD": [
    { id: "PL-PD-BI", name: { de: "Białystok", hu: "Białystok", ro: "Białystok", en: "Białystok" }, centerLat: 53.13, centerLon: 23.16, labelX: 715, labelY: 450, path: rect(715, 450) },
    { id: "PL-PD-SU", name: { de: "Suwałki", hu: "Suwałki", ro: "Suwałki", en: "Suwałki" }, centerLat: 54.1, centerLon: 22.93, labelX: 690, labelY: 340, path: rect(690, 340) },
    { id: "PL-PD-LO", name: { de: "Łomża", hu: "Łomża", ro: "Łomża", en: "Łomża" }, centerLat: 53.18, centerLon: 22.07, labelX: 598, labelY: 444, path: rect(598, 444) },
    { id: "PL-PD-AU", name: { de: "Augustów", hu: "Augustów", ro: "Augustów", en: "Augustów" }, centerLat: 53.85, centerLon: 22.98, labelX: 694, labelY: 367, path: rect(694, 367) },
    { id: "PL-PD-BI2", name: { de: "Bielsk Podlaski", hu: "Bielsk Podlaski", ro: "Bielsk Podlaski", en: "Bielsk Podlaski" }, centerLat: 52.77, centerLon: 23.19, labelX: 720, labelY: 490, path: rect(720, 490) },
    { id: "PL-PD-GR", name: { de: "Grajewo", hu: "Grajewo", ro: "Grajewo", en: "Grajewo" }, centerLat: 53.65, centerLon: 22.45, labelX: 638, labelY: 397, path: rect(638, 397) },
    { id: "PL-PD-HA", name: { de: "Hajnówka", hu: "Hajnówka", ro: "Hajnówka", en: "Hajnówka" }, centerLat: 52.75, centerLon: 23.58, labelX: 753, labelY: 492, path: rect(753, 492) },
    { id: "PL-PD-MO", name: { de: "Mońki", hu: "Mońki", ro: "Mońki", en: "Mońki" }, centerLat: 53.4, centerLon: 22.8, labelX: 677, labelY: 423, path: rect(677, 423) },
    { id: "PL-PD-SI", name: { de: "Siemiatycze", hu: "Siemiatycze", ro: "Siemiatycze", en: "Siemiatycze" }, centerLat: 52.43, centerLon: 22.86, labelX: 683, labelY: 530, path: rect(683, 530) },
    { id: "PL-PD-SO", name: { de: "Sokółka", hu: "Sokółka", ro: "Sokółka", en: "Sokółka" }, centerLat: 53.41, centerLon: 23.5, labelX: 745, labelY: 422, path: rect(745, 422) },
    { id: "PL-PD-WY", name: { de: "Wysokie Mazowieckie", hu: "Wysokie Mazowieckie", ro: "Wysokie Mazowieckie", en: "Wysokie Mazowieckie" }, centerLat: 52.92, centerLon: 22.52, labelX: 647, labelY: 478, path: rect(647, 478) },
    { id: "PL-PD-ZA", name: { de: "Zambrów", hu: "Zambrów", ro: "Zambrów", en: "Zambrów" }, centerLat: 52.98, centerLon: 22.25, labelX: 620, labelY: 470, path: rect(620, 470) },
  ],

  // ─── PL-PK Subcarpathian (Podkarpackie) ──────────────────────────────────
  "PL-PK": [
    { id: "PL-PK-RZ", name: { de: "Rzeszów", hu: "Rzeszów", ro: "Rzeszów", en: "Rzeszów" }, centerLat: 50.04, centerLon: 22.0, labelX: 590, labelY: 675, path: rect(590, 675) },
    { id: "PL-PK-KR", name: { de: "Krosno", hu: "Krosno", ro: "Krosno", en: "Krosno" }, centerLat: 49.69, centerLon: 21.77, labelX: 564, labelY: 720, path: rect(564, 720) },
    { id: "PL-PK-PR", name: { de: "Przemyśl", hu: "Przemyśl", ro: "Przemyśl", en: "Przemyśl" }, centerLat: 49.78, centerLon: 22.77, labelX: 668, labelY: 706, path: rect(668, 706) },
    { id: "PL-PK-TA", name: { de: "Tarnobrzeg", hu: "Tarnobrzeg", ro: "Tarnobrzeg", en: "Tarnobrzeg" }, centerLat: 50.57, centerLon: 21.68, labelX: 554, labelY: 623, path: rect(554, 623) },
    { id: "PL-PK-ME", name: { de: "Mielec", hu: "Mielec", ro: "Mielec", en: "Mielec" }, centerLat: 50.29, centerLon: 21.42, labelX: 526, labelY: 657, path: rect(526, 657) },
    { id: "PL-PK-SA", name: { de: "Sanok", hu: "Sanok", ro: "Sanok", en: "Sanok" }, centerLat: 49.56, centerLon: 22.2, labelX: 612, labelY: 737, path: rect(612, 737) },
    { id: "PL-PK-JA", name: { de: "Jasło", hu: "Jasło", ro: "Jasło", en: "Jasło" }, centerLat: 49.75, centerLon: 21.47, labelX: 531, labelY: 710, path: rect(531, 710) },
    { id: "PL-PK-DE", name: { de: "Dębica", hu: "Dębica", ro: "Dębica", en: "Dębica" }, centerLat: 50.05, centerLon: 21.41, labelX: 525, labelY: 673, path: rect(525, 673) },
    { id: "PL-PK-LO", name: { de: "Lesko", hu: "Lesko", ro: "Lesko", en: "Lesko" }, centerLat: 49.47, centerLon: 22.33, labelX: 625, labelY: 748, path: rect(625, 748) },
    { id: "PL-PK-PE", name: { de: "Przeworsk", hu: "Przeworsk", ro: "Przeworsk", en: "Przeworsk" }, centerLat: 50.06, centerLon: 22.5, labelX: 647, labelY: 672, path: rect(647, 672) },
    { id: "PL-PK-SS", name: { de: "Stalowa Wola", hu: "Stalowa Wola", ro: "Stalowa Wola", en: "Stalowa Wola" }, centerLat: 50.58, centerLon: 22.05, labelX: 595, labelY: 622, path: rect(595, 622) },
    { id: "PL-PK-LU", name: { de: "Lubaczów", hu: "Lubaczów", ro: "Lubaczów", en: "Lubaczów" }, centerLat: 50.16, centerLon: 23.12, labelX: 710, labelY: 662, path: rect(710, 662) },
  ],

  // ─── PL-KP Kuyavian-Pomeranian (Kujawsko-Pomorskie) ──────────────────────
  "PL-KP": [
    { id: "PL-KP-BY", name: { de: "Bromberg", hu: "Bydgoszcz", ro: "Bydgoszcz", en: "Bydgoszcz" }, centerLat: 53.12, centerLon: 18.0, labelX: 390, labelY: 450, path: rect(390, 450) },
    { id: "PL-KP-TO", name: { de: "Thorn", hu: "Toruń", ro: "Toruń", en: "Toruń" }, centerLat: 53.01, centerLon: 18.6, labelX: 453, labelY: 462, path: rect(453, 462) },
    { id: "PL-KP-WL", name: { de: "Włocławek", hu: "Włocławek", ro: "Włocławek", en: "Włocławek" }, centerLat: 52.66, centerLon: 19.07, labelX: 395, labelY: 502, path: rect(395, 502) },
    { id: "PL-KP-GR", name: { de: "Grudziądz", hu: "Grudziądz", ro: "Grudziądz", en: "Grudziądz" }, centerLat: 53.48, centerLon: 18.76, labelX: 470, labelY: 408, path: rect(470, 408) },
    { id: "PL-KP-NA", name: { de: "Nakło nad Notecią", hu: "Nakło nad Notecią", ro: "Nakło nad Notecią", en: "Nakło nad Notecią" }, centerLat: 53.14, centerLon: 17.6, labelX: 350, labelY: 448, path: rect(350, 448) },
    { id: "PL-KP-BI", name: { de: "Bydgoszcz (Land)", hu: "Bydgoszcz (megye)", ro: "Bydgoszcz (județ)", en: "Bydgoszcz County" }, centerLat: 53.1, centerLon: 17.85, labelX: 373, labelY: 453, path: rect(373, 453) },
    { id: "PL-KP-IN", name: { de: "Inowrocław", hu: "Inowrocław", ro: "Inowrocław", en: "Inowrocław" }, centerLat: 52.8, centerLon: 18.26, labelX: 418, labelY: 483, path: rect(418, 483) },
    { id: "PL-KP-SE", name: { de: "Sępólno Krajeńskie", hu: "Sępólno Krajeńskie", ro: "Sępólno Krajeńskie", en: "Sępólno Krajeńskie" }, centerLat: 53.45, centerLon: 17.53, labelX: 344, labelY: 412, path: rect(344, 412) },
    { id: "PL-KP-TU", name: { de: "Tuchola", hu: "Tuchola", ro: "Tuchola", en: "Tuchola" }, centerLat: 53.59, centerLon: 17.86, labelX: 374, labelY: 397, path: rect(374, 397) },
    { id: "PL-KP-RY", name: { de: "Rypin", hu: "Rypin", ro: "Rypin", en: "Rypin" }, centerLat: 53.07, centerLon: 19.42, labelX: 430, labelY: 456, path: rect(430, 456) },
    { id: "PL-KP-WB", name: { de: "Wąbrzeźno", hu: "Wąbrzeźno", ro: "Wąbrzeźno", en: "Wąbrzeźno" }, centerLat: 53.29, centerLon: 18.95, labelX: 487, labelY: 432, path: rect(487, 432) },
    { id: "PL-KP-ZN", name: { de: "Żnin", hu: "Żnin", ro: "Żnin", en: "Żnin" }, centerLat: 52.85, centerLon: 17.72, labelX: 360, labelY: 478, path: rect(360, 478) },
  ],

  // ─── PL-SK Świętokrzyskie ─────────────────────────────────────────────────
  "PL-SK": [
    { id: "PL-SK-KI", name: { de: "Kielce", hu: "Kielce", ro: "Kielce", en: "Kielce" }, centerLat: 50.87, centerLon: 20.63, labelX: 465, labelY: 680, path: rect(465, 680) },
    { id: "PL-SK-OS", name: { de: "Ostrowiec Świętokrzyski", hu: "Ostrowiec Świętokrzyski", ro: "Ostrowiec Świętokrzyski", en: "Ostrowiec Świętokrzyski" }, centerLat: 50.93, centerLon: 21.4, labelX: 524, labelY: 673, path: rect(524, 673) },
    { id: "PL-SK-SL", name: { de: "Skarżysko-Kamienna", hu: "Skarżysko-Kamienna", ro: "Skarżysko-Kamienna", en: "Skarżysko-Kamienna" }, centerLat: 51.12, centerLon: 20.88, labelX: 478, labelY: 651, path: rect(478, 651) },
    { id: "PL-SK-ST", name: { de: "Starachowice", hu: "Starachowice", ro: "Starachowice", en: "Starachowice" }, centerLat: 51.04, centerLon: 21.07, labelX: 498, labelY: 661, path: rect(498, 661) },
    { id: "PL-SK-BU", name: { de: "Busko-Zdrój", hu: "Busko-Zdrój", ro: "Busko-Zdrój", en: "Busko-Zdrój" }, centerLat: 50.47, centerLon: 20.72, labelX: 474, labelY: 725, path: rect(474, 725) },
    { id: "PL-SK-JE", name: { de: "Jędrzejów", hu: "Jędrzejów", ro: "Jędrzejów", en: "Jędrzejów" }, centerLat: 50.64, centerLon: 20.31, labelX: 432, labelY: 706, path: rect(432, 706) },
    { id: "PL-SK-KA", name: { de: "Kazimierza Wielka", hu: "Kazimierza Wielka", ro: "Kazimierza Wielka", en: "Kazimierza Wielka" }, centerLat: 50.27, centerLon: 20.49, labelX: 451, labelY: 747, path: rect(451, 747) },
    { id: "PL-SK-PI", name: { de: "Pińczów", hu: "Pińczów", ro: "Pińczów", en: "Pińczów" }, centerLat: 50.52, centerLon: 20.53, labelX: 455, labelY: 719, path: rect(455, 719) },
    { id: "PL-SK-SA", name: { de: "Sandomierz", hu: "Sandomierz", ro: "Sandomierz", en: "Sandomierz" }, centerLat: 50.68, centerLon: 21.75, labelX: 560, labelY: 700, path: rect(560, 700) },
    { id: "PL-SK-WL", name: { de: "Włoszczowa", hu: "Włoszczowa", ro: "Włoszczowa", en: "Włoszczowa" }, centerLat: 50.85, centerLon: 19.96, labelX: 490, labelY: 682, path: rect(490, 682) },
    { id: "PL-SK-KO", name: { de: "Konskie", hu: "Końskie", ro: "Końskie", en: "Końskie" }, centerLat: 51.19, centerLon: 20.41, labelX: 438, labelY: 644, path: rect(438, 644) },
    { id: "PL-SK-ST2", name: { de: "Staszów", hu: "Staszów", ro: "Staszów", en: "Staszów" }, centerLat: 50.56, centerLon: 21.17, labelX: 507, labelY: 715, path: rect(507, 715) },
    { id: "PL-SK-OP", name: { de: "Opatów", hu: "Opatów", ro: "Opatów", en: "Opatów" }, centerLat: 50.8, centerLon: 21.43, labelX: 526, labelY: 688, path: rect(526, 688) },
  ],

  // ─── PL-LB Lubusz (Lubuskie) ─────────────────────────────────────────────
  "PL-LB": [
    { id: "PL-LB-ZG", name: { de: "Grünberg", hu: "Zielona Góra", ro: "Zielona Góra", en: "Zielona Góra" }, centerLat: 51.93, centerLon: 15.51, labelX: 302, labelY: 572, path: rect(302, 572) },
    { id: "PL-LB-GW", name: { de: "Gorzów Wielkopolski", hu: "Gorzów Wielkopolski", ro: "Gorzów Wielkopolski", en: "Gorzów Wielkopolski" }, centerLat: 52.73, centerLon: 15.24, labelX: 274, labelY: 491, path: rect(274, 491) },
    { id: "PL-LB-NO", name: { de: "Nowa Sól", hu: "Nowa Sól", ro: "Nowa Sól", en: "Nowa Sól" }, centerLat: 51.81, centerLon: 15.72, labelX: 324, labelY: 587, path: rect(324, 587) },
    { id: "PL-LB-ZA", name: { de: "Żary", hu: "Żary", ro: "Żary", en: "Żary" }, centerLat: 51.64, centerLon: 15.13, labelX: 265, labelY: 607, path: rect(265, 607) },
    { id: "PL-LB-ZG2", name: { de: "Żagań", hu: "Żagań", ro: "Żagań", en: "Żagań" }, centerLat: 51.62, centerLon: 15.31, labelX: 285, labelY: 609, path: rect(285, 609) },
    { id: "PL-LB-KR", name: { de: "Krosno Odrzańskie", hu: "Krosno Odrzańskie", ro: "Krosno Odrzańskie", en: "Krosno Odrzańskie" }, centerLat: 52.05, centerLon: 15.1, labelX: 263, labelY: 558, path: rect(263, 558) },
    { id: "PL-LB-SL", name: { de: "Słubice", hu: "Słubice", ro: "Słubice", en: "Słubice" }, centerLat: 52.35, centerLon: 14.56, labelX: 207, labelY: 527, path: rect(207, 527) },
    { id: "PL-LB-SW", name: { de: "Świebodzin", hu: "Świebodzin", ro: "Świebodzin", en: "Świebodzin" }, centerLat: 52.25, centerLon: 15.53, labelX: 304, labelY: 539, path: rect(304, 539) },
    { id: "PL-LB-MI", name: { de: "Międzyrzecz", hu: "Międzyrzecz", ro: "Międzyrzecz", en: "Międzyrzecz" }, centerLat: 52.45, centerLon: 15.58, labelX: 310, labelY: 519, path: rect(310, 519) },
    { id: "PL-LB-SU", name: { de: "Sulęcin", hu: "Sulęcin", ro: "Sulęcin", en: "Sulęcin" }, centerLat: 52.44, centerLon: 15.11, labelX: 263, labelY: 520, path: rect(263, 520) },
    { id: "PL-LB-WS", name: { de: "Wschowa", hu: "Wschowa", ro: "Wschowa", en: "Wschowa" }, centerLat: 51.8, centerLon: 16.06, labelX: 338, labelY: 591, path: rect(338, 591) },
    { id: "PL-LB-ST", name: { de: "Strzelce Krajeńskie", hu: "Strzelce Krajeńskie", ro: "Strzelce Krajeńskie", en: "Strzelce Krajeńskie" }, centerLat: 52.88, centerLon: 15.53, labelX: 303, labelY: 474, path: rect(303, 474) },
  ],

  // ─── PL-OP Opole (Opolskie) ──────────────────────────────────────────────
  "PL-OP": [
    { id: "PL-OP-OP", name: { de: "Oppeln", hu: "Opole", ro: "Opole", en: "Opole" }, centerLat: 50.67, centerLon: 17.93, labelX: 528, labelY: 700, path: rect(528, 700) },
    { id: "PL-OP-KE", name: { de: "Kędzierzyn-Koźle", hu: "Kędzierzyn-Koźle", ro: "Kędzierzyn-Koźle", en: "Kędzierzyn-Koźle" }, centerLat: 50.34, centerLon: 18.21, labelX: 560, labelY: 737, path: rect(560, 737) },
    { id: "PL-OP-NY", name: { de: "Nysa", hu: "Nysa", ro: "Nysa", en: "Nysa" }, centerLat: 50.47, centerLon: 17.33, labelX: 462, labelY: 722, path: rect(462, 722) },
    { id: "PL-OP-BR", name: { de: "Brzeg", hu: "Brzeg", ro: "Brzeg", en: "Brzeg" }, centerLat: 50.86, centerLon: 17.47, labelX: 478, labelY: 678, path: rect(478, 678) },
    { id: "PL-OP-KL", name: { de: "Kluczbork", hu: "Kluczbork", ro: "Kluczbork", en: "Kluczbork" }, centerLat: 51.0, centerLon: 18.21, labelX: 560, labelY: 662, path: rect(560, 662) },
    { id: "PL-OP-GR", name: { de: "Głubczyce", hu: "Głubczyce", ro: "Głubczyce", en: "Głubczyce" }, centerLat: 50.2, centerLon: 17.83, labelX: 517, labelY: 755, path: rect(517, 755) },
    { id: "PL-OP-NA", name: { de: "Namysłów", hu: "Namysłów", ro: "Namysłów", en: "Namysłów" }, centerLat: 51.08, centerLon: 17.71, labelX: 503, labelY: 652, path: rect(503, 652) },
    { id: "PL-OP-PR", name: { de: "Prudnik", hu: "Prudnik", ro: "Prudnik", en: "Prudnik" }, centerLat: 50.32, centerLon: 17.58, labelX: 490, labelY: 739, path: rect(490, 739) },
    { id: "PL-OP-ST", name: { de: "Strzelce Opolskie", hu: "Strzelce Opolskie", ro: "Strzelce Opolskie", en: "Strzelce Opolskie" }, centerLat: 50.52, centerLon: 18.3, labelX: 570, labelY: 715, path: rect(570, 715) },
    { id: "PL-OP-OW", name: { de: "Olesno", hu: "Olesno", ro: "Olesno", en: "Olesno" }, centerLat: 50.88, centerLon: 18.42, labelX: 583, labelY: 676, path: rect(583, 676) },
    { id: "PL-OP-GW", name: { de: "Góra Świętej Anny", hu: "Góra Świętej Anny", ro: "Góra Świętej Anny", en: "Strzelce-Góra" }, centerLat: 50.46, centerLon: 18.05, labelX: 539, labelY: 724, path: rect(539, 724) },
    { id: "PL-OP-OG", name: { de: "Opole Land", hu: "Opole járás", ro: "Opole județ", en: "Opole County" }, centerLat: 50.65, centerLon: 17.8, labelX: 515, labelY: 702, path: rect(515, 702) },
  ],
};
