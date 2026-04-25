// Switzerland Admin-2 (Bezirke / Districts) placeholder data
// Each canton entry contains its districts as SubRegion-compatible objects.
// Paths are generated placeholder rectangles derived from the canton's approximate
// bounding box on the CH projection (viewBox "0 0 1000 641").
// Real GeoJSON paths can be swapped in later; the structure is final.

export interface ChDistrict {
  id: string;
  name: { de: string; hu: string; ro: string; en: string };
  labelX: number;
  labelY: number;
  path: string;
}

// Helper: build a simple rectangular placeholder path centred on (cx,cy)
function rect(cx: number, cy: number, w = 60, h = 45): string {
  const x1 = Math.round(cx - w / 2);
  const y1 = Math.round(cy - h / 2);
  const x2 = x1 + w;
  const y2 = y1 + h;
  return `M${x1},${y1}L${x2},${y1}L${x2},${y2}L${x1},${y2}Z`;
}

export const chAdmin2Map: Record<string, ChDistrict[]> = {
  // ── Aargau (AG) — 11 Bezirke ──────────────────────────────────────────
  "CH-AG": [
    { id: "CH-AG-Aarau",       name: { de: "Aarau",        hu: "Aarau",        ro: "Aarau",        en: "Aarau" },        labelX: 460, labelY: 130, path: rect(460, 130) },
    { id: "CH-AG-BadenAG",    name: { de: "Baden",        hu: "Baden",        ro: "Baden",        en: "Baden" },        labelX: 510, labelY: 115, path: rect(510, 115) },
    { id: "CH-AG-Bremgarten", name: { de: "Bremgarten",   hu: "Bremgarten",   ro: "Bremgarten",   en: "Bremgarten" },  labelX: 465, labelY: 160, path: rect(465, 160) },
    { id: "CH-AG-Brugg",      name: { de: "Brugg",        hu: "Brugg",        ro: "Brugg",        en: "Brugg" },        labelX: 490, labelY: 105, path: rect(490, 105) },
    { id: "CH-AG-Kulm",       name: { de: "Kulm",         hu: "Kulm",         ro: "Kulm",         en: "Kulm" },         labelX: 440, labelY: 155, path: rect(440, 155) },
    { id: "CH-AG-Laufenburg",  name: { de: "Laufenburg",   hu: "Laufenburg",   ro: "Laufenburg",   en: "Laufenburg" },  labelX: 420, labelY: 100, path: rect(420, 100) },
    { id: "CH-AG-Lenzburg",   name: { de: "Lenzburg",     hu: "Lenzburg",     ro: "Lenzburg",     en: "Lenzburg" },    labelX: 475, labelY: 145, path: rect(475, 145) },
    { id: "CH-AG-Muri",       name: { de: "Muri",         hu: "Muri",         ro: "Muri",         en: "Muri" },         labelX: 455, labelY: 175, path: rect(455, 175) },
    { id: "CH-AG-Rheinfelden", name: { de: "Rheinfelden",  hu: "Rheinfelden",  ro: "Rheinfelden",  en: "Rheinfelden" }, labelX: 395, labelY: 90,  path: rect(395, 90)  },
    { id: "CH-AG-Zurzach",    name: { de: "Zurzach",      hu: "Zurzach",      ro: "Zurzach",      en: "Zurzach" },     labelX: 505, labelY: 90,  path: rect(505, 90)  },
    { id: "CH-AG-Zofingen",   name: { de: "Zofingen",     hu: "Zofingen",     ro: "Zofingen",     en: "Zofingen" },    labelX: 440, labelY: 180, path: rect(440, 180) },
  ],

  // ── Appenzell Ausserrhoden (AR) — 3 Bezirke ───────────────────────────
  "CH-AR": [
    { id: "CH-AR-Hinterland", name: { de: "Hinterland",   hu: "Hinterland",   ro: "Hinterland",   en: "Hinterland" },  labelX: 790, labelY: 185, path: rect(790, 185) },
    { id: "CH-AR-Mittelland", name: { de: "Mittelland",   hu: "Mittelland",   ro: "Mittelland",   en: "Mittelland" },  labelX: 800, labelY: 170, path: rect(800, 170) },
    { id: "CH-AR-Vorderland", name: { de: "Vorderland",   hu: "Vorderland",   ro: "Vorderland",   en: "Vorderland" },  labelX: 815, labelY: 155, path: rect(815, 155) },
  ],

  // ── Appenzell Innerrhoden (AI) — 6 Bezirke ────────────────────────────
  "CH-AI": [
    { id: "CH-AI-Appenzell",  name: { de: "Appenzell",    hu: "Appenzell",    ro: "Appenzell",    en: "Appenzell" },   labelX: 780, labelY: 160, path: rect(780, 160, 40, 30) },
    { id: "CH-AI-Rüte",       name: { de: "Rüte",         hu: "Rüte",         ro: "Rüte",         en: "Rüte" },         labelX: 768, labelY: 170, path: rect(768, 170, 35, 25) },
    { id: "CH-AI-Schlatt",    name: { de: "Schlatt",      hu: "Schlatt",      ro: "Schlatt",      en: "Schlatt" },     labelX: 762, labelY: 145, path: rect(762, 145, 35, 25) },
    { id: "CH-AI-Schwende",   name: { de: "Schwende",     hu: "Schwende",     ro: "Schwende",     en: "Schwende" },    labelX: 775, labelY: 175, path: rect(775, 175, 35, 25) },
    { id: "CH-AI-Gonten",     name: { de: "Gonten",       hu: "Gonten",       ro: "Gonten",       en: "Gonten" },      labelX: 768, labelY: 155, path: rect(768, 155, 35, 25) },
    { id: "CH-AI-Oberegg",    name: { de: "Oberegg",      hu: "Oberegg",      ro: "Oberegg",      en: "Oberegg" },     labelX: 808, labelY: 130, path: rect(808, 130, 35, 25) },
  ],

  // ── Basel-Landschaft (BL) — 5 Bezirke ────────────────────────────────
  "CH-BL": [
    { id: "CH-BL-Arlesheim",  name: { de: "Arlesheim",    hu: "Arlesheim",    ro: "Arlesheim",    en: "Arlesheim" },   labelX: 375, labelY: 90,  path: rect(375, 90)  },
    { id: "CH-BL-Laufen",     name: { de: "Laufen",       hu: "Laufen",       ro: "Laufen",       en: "Laufen" },      labelX: 355, labelY: 125, path: rect(355, 125) },
    { id: "CH-BL-Liestal",    name: { de: "Liestal",      hu: "Liestal",      ro: "Liestal",      en: "Liestal" },     labelX: 390, labelY: 110, path: rect(390, 110) },
    { id: "CH-BL-Sissach",    name: { de: "Sissach",      hu: "Sissach",      ro: "Sissach",      en: "Sissach" },     labelX: 405, labelY: 120, path: rect(405, 120) },
    { id: "CH-BL-Waldenburg", name: { de: "Waldenburg",   hu: "Waldenburg",   ro: "Waldenburg",   en: "Waldenburg" },  labelX: 380, labelY: 135, path: rect(380, 135) },
  ],

  // ── Basel-Stadt (BS) — 3 Gemeinden (treated as districts) ────────────
  "CH-BS": [
    { id: "CH-BS-BaselCity",  name: { de: "Basel",        hu: "Bázel",        ro: "Basel",        en: "Basel" },        labelX: 362, labelY: 77,  path: rect(362, 77,  30, 22) },
    { id: "CH-BS-Bettingen",  name: { de: "Bettingen",    hu: "Bettingen",    ro: "Bettingen",    en: "Bettingen" },   labelX: 375, labelY: 68,  path: rect(375, 68,  25, 18) },
    { id: "CH-BS-Riehen",     name: { de: "Riehen",       hu: "Riehen",       ro: "Riehen",       en: "Riehen" },      labelX: 370, labelY: 60,  path: rect(370, 60,  25, 18) },
  ],

  // ── Bern (BE) — 5 Verwaltungsregionen ────────────────────────────────
  "CH-BE": [
    { id: "CH-BE-BernMittelland", name: { de: "Bern-Mittelland",  hu: "Bern-Mittelland",  ro: "Bern-Mittelland",  en: "Bern-Mittelland" },  labelX: 440, labelY: 250, path: rect(440, 250, 70, 55) },
    { id: "CH-BE-Emmental",      name: { de: "Emmental",         hu: "Emmental",         ro: "Emmental",         en: "Emmental" },          labelX: 490, labelY: 215, path: rect(490, 215, 65, 50) },
    { id: "CH-BE-Jura-Biel",     name: { de: "Seeland/Biel",     hu: "Seeland/Biel",     ro: "Seeland/Biel",     en: "Seeland/Biel" },     labelX: 365, labelY: 215, path: rect(365, 215, 65, 50) },
    { id: "CH-BE-Oberland",      name: { de: "Berner Oberland",  hu: "Berni-Felföld",    ro: "Oberland Bernez",  en: "Bernese Oberland" }, labelX: 450, labelY: 330, path: rect(450, 330, 70, 55) },
    { id: "CH-BE-Thun",          name: { de: "Thun",             hu: "Thun",             ro: "Thun",             en: "Thun" },              labelX: 430, labelY: 310, path: rect(430, 310, 65, 50) },
  ],

  // ── Fribourg (FR) — 7 Bezirke ─────────────────────────────────────────
  "CH-FR": [
    { id: "CH-FR-Broye",       name: { de: "Broye",         hu: "Broye",         ro: "Broye",         en: "Broye" },         labelX: 320, labelY: 295, path: rect(320, 295) },
    { id: "CH-FR-Glane",       name: { de: "Glane",         hu: "Glane",         ro: "Glane",         en: "Glane" },         labelX: 315, labelY: 325, path: rect(315, 325) },
    { id: "CH-FR-Greyerz",     name: { de: "Greyerz",       hu: "Greyerz",       ro: "Gruyère",       en: "Gruyère" },      labelX: 340, labelY: 355, path: rect(340, 355) },
    { id: "CH-FR-Lac",         name: { de: "See",           hu: "See",           ro: "Lac",           en: "Lake" },          labelX: 295, labelY: 290, path: rect(295, 290) },
    { id: "CH-FR-Saane",       name: { de: "Saane",         hu: "Saane",         ro: "Sarine",        en: "Sarine" },        labelX: 330, labelY: 310, path: rect(330, 310) },
    { id: "CH-FR-Sense",       name: { de: "Sense",         hu: "Sense",         ro: "Singine",       en: "Singine" },       labelX: 355, labelY: 305, path: rect(355, 305) },
    { id: "CH-FR-Vivisbach",   name: { de: "Vivisbachbezirk", hu: "Vivisbach",  ro: "Veveyse",       en: "Veveyse" },       labelX: 340, labelY: 370, path: rect(340, 370) },
  ],

  // ── Geneva (GE) — 45 communes; represented as 3 zones ─────────────────
  "CH-GE": [
    { id: "CH-GE-Geneve",      name: { de: "Genf Stadt",    hu: "Genf város",    ro: "Geneva Oraș",   en: "Geneva City" },   labelX: 165, labelY: 410, path: rect(165, 410, 40, 30) },
    { id: "CH-GE-Rive-Gauche", name: { de: "Rive Gauche",   hu: "Bal part",      ro: "Malul Stâng",   en: "Left Bank" },     labelX: 155, labelY: 430, path: rect(155, 430, 40, 30) },
    { id: "CH-GE-Rive-Droite", name: { de: "Rive Droite",   hu: "Jobb part",     ro: "Malul Drept",   en: "Right Bank" },    labelX: 180, labelY: 405, path: rect(180, 405, 40, 30) },
  ],

  // ── Glarus (GL) — 3 Gemeinden ─────────────────────────────────────────
  "CH-GL": [
    { id: "CH-GL-Glarus-Nord",  name: { de: "Glarus Nord",   hu: "Glarus Nord",   ro: "Glarus Nord",   en: "Glarus North" }, labelX: 660, labelY: 235, path: rect(660, 235, 45, 35) },
    { id: "CH-GL-Glarus",       name: { de: "Glarus",        hu: "Glarus",        ro: "Glarus",        en: "Glarus" },       labelX: 660, labelY: 265, path: rect(660, 265, 45, 35) },
    { id: "CH-GL-Glarus-Sued",  name: { de: "Glarus Süd",    hu: "Glarus Süd",    ro: "Glarus Sud",    en: "Glarus South" }, labelX: 660, labelY: 295, path: rect(660, 295, 45, 35) },
  ],

  // ── Grisons / Graubünden (GR) — 11 Regionen ───────────────────────────
  "CH-GR": [
    { id: "CH-GR-Albula",      name: { de: "Albula",        hu: "Albula",        ro: "Albula",        en: "Albula" },        labelX: 810, labelY: 350, path: rect(810, 350) },
    { id: "CH-GR-Bernina",     name: { de: "Bernina",       hu: "Bernina",       ro: "Bernina",       en: "Bernina" },       labelX: 850, labelY: 390, path: rect(850, 390) },
    { id: "CH-GR-Engiadina",   name: { de: "Engiadina",     hu: "Engiadina",     ro: "Engiadina",     en: "Engiadina" },     labelX: 890, labelY: 400, path: rect(890, 400) },
    { id: "CH-GR-Imboden",     name: { de: "Imboden",       hu: "Imboden",       ro: "Imboden",       en: "Imboden" },       labelX: 790, labelY: 330, path: rect(790, 330) },
    { id: "CH-GR-Landquart",   name: { de: "Landquart",     hu: "Landquart",     ro: "Landquart",     en: "Landquart" },     labelX: 820, labelY: 295, path: rect(820, 295) },
    { id: "CH-GR-Maloja",      name: { de: "Maloja",        hu: "Maloja",        ro: "Maloja",        en: "Maloja" },        labelX: 855, labelY: 415, path: rect(855, 415) },
    { id: "CH-GR-MoesaGR",    name: { de: "Moesa",         hu: "Moesa",         ro: "Moesa",         en: "Moesa" },         labelX: 760, labelY: 420, path: rect(760, 420) },
    { id: "CH-GR-Plessur",     name: { de: "Plessur",       hu: "Plessur",       ro: "Plessur",       en: "Plessur" },       labelX: 820, labelY: 330, path: rect(820, 330) },
    { id: "CH-GR-Prättigau",   name: { de: "Prättigau",     hu: "Prättigau",     ro: "Prättigau",     en: "Prättigau" },    labelX: 830, labelY: 270, path: rect(830, 270) },
    { id: "CH-GR-SursesGR",   name: { de: "Surses",        hu: "Surses",        ro: "Surses",        en: "Surses" },        labelX: 835, labelY: 365, path: rect(835, 365) },
    { id: "CH-GR-Viamala",     name: { de: "Viamala",       hu: "Viamala",       ro: "Viamala",       en: "Viamala" },       labelX: 790, labelY: 380, path: rect(790, 380) },
  ],

  // ── Jura (JU) — 3 Bezirke ─────────────────────────────────────────────
  "CH-JU": [
    { id: "CH-JU-Ajoie",       name: { de: "Ajoie",         hu: "Ajoie",         ro: "Ajoie",         en: "Ajoie" },         labelX: 250, labelY: 140, path: rect(250, 140) },
    { id: "CH-JU-Franches-Montagnes", name: { de: "Freiberge", hu: "Freiberge", ro: "Les Franches-Montagnes", en: "Franches-Montagnes" }, labelX: 255, labelY: 175, path: rect(255, 175) },
    { id: "CH-JU-Delémont",    name: { de: "Delémont",      hu: "Delémont",      ro: "Delémont",      en: "Delémont" },      labelX: 245, labelY: 155, path: rect(245, 155) },
  ],

  // ── Lucerne (LU) — 6 Wahlkreise ───────────────────────────────────────
  "CH-LU": [
    { id: "CH-LU-Entlebuch",   name: { de: "Entlebuch",     hu: "Entlebuch",     ro: "Entlebuch",     en: "Entlebuch" },     labelX: 480, labelY: 295, path: rect(480, 295) },
    { id: "CH-LU-Hochdorf",    name: { de: "Hochdorf",      hu: "Hochdorf",      ro: "Hochdorf",      en: "Hochdorf" },      labelX: 510, labelY: 255, path: rect(510, 255) },
    { id: "CH-LU-Lucerne",     name: { de: "Luzern",        hu: "Luzern",        ro: "Lucerna",       en: "Lucerne" },       labelX: 505, labelY: 270, path: rect(505, 270) },
    { id: "CH-LU-Sursee",      name: { de: "Sursee",        hu: "Sursee",        ro: "Sursee",        en: "Sursee" },        labelX: 495, labelY: 230, path: rect(495, 230) },
    { id: "CH-LU-Willisau",    name: { de: "Willisau",      hu: "Willisau",      ro: "Willisau",      en: "Willisau" },      labelX: 510, labelY: 235, path: rect(510, 235) },
    { id: "CH-LU-WillisauLand",name: { de: "Willisau-Land", hu: "Willisau-Land", ro: "Willisau-Land", en: "Willisau Land" }, labelX: 520, labelY: 250, path: rect(520, 250) },
  ],

  // ── Neuchâtel (NE) — 6 Bezirke ────────────────────────────────────────
  "CH-NE": [
    { id: "CH-NE-Boudry",      name: { de: "Boudry",        hu: "Boudry",        ro: "Boudry",        en: "Boudry" },        labelX: 270, labelY: 255, path: rect(270, 255) },
    { id: "CH-NE-LeLocle",     name: { de: "Le Locle",      hu: "Le Locle",      ro: "Le Locle",      en: "Le Locle" },      labelX: 255, labelY: 230, path: rect(255, 230) },
    { id: "CH-NE-LaChaux",     name: { de: "La Chaux-de-Fonds", hu: "La Chaux-de-Fonds", ro: "La Chaux-de-Fonds", en: "La Chaux-de-Fonds" }, labelX: 258, labelY: 218, path: rect(258, 218) },
    { id: "CH-NE-Neuchatel",   name: { de: "Neuenburg",     hu: "Neuenburg",     ro: "Neuchâtel",     en: "Neuchâtel" },     labelX: 272, labelY: 245, path: rect(272, 245) },
    { id: "CH-NE-Val-de-Ruz",  name: { de: "Val-de-Ruz",   hu: "Val-de-Ruz",   ro: "Val-de-Ruz",   en: "Val-de-Ruz" },    labelX: 280, labelY: 255, path: rect(280, 255) },
    { id: "CH-NE-Val-de-Travers", name: { de: "Val-de-Travers", hu: "Val-de-Travers", ro: "Val-de-Travers", en: "Val-de-Travers" }, labelX: 250, labelY: 245, path: rect(250, 245) },
  ],

  // ── Nidwalden (NW) — 1 Bezirk ────────────────────────────────────────
  "CH-NW": [
    { id: "CH-NW-Nidwalden",   name: { de: "Nidwalden",     hu: "Nidwalden",     ro: "Nidwalden",     en: "Nidwalden" },     labelX: 560, labelY: 290, path: rect(560, 290, 55, 40) },
  ],

  // ── Obwalden (OW) — 1 Bezirk ─────────────────────────────────────────
  "CH-OW": [
    { id: "CH-OW-Obwalden",    name: { de: "Obwalden",      hu: "Obwalden",      ro: "Obwalden",      en: "Obwalden" },      labelX: 545, labelY: 315, path: rect(545, 315, 55, 40) },
  ],

  // ── St. Gallen (SG) — 8 Wahlkreise ───────────────────────────────────
  "CH-SG": [
    { id: "CH-SG-Rheintal",    name: { de: "Rheintal",      hu: "Rheintal",      ro: "Rheintal",      en: "Rheintal" },      labelX: 830, labelY: 175, path: rect(830, 175) },
    { id: "CH-SG-Rorschach",   name: { de: "Rorschach",     hu: "Rorschach",     ro: "Rorschach",     en: "Rorschach" },     labelX: 810, labelY: 160, path: rect(810, 160) },
    { id: "CH-SG-Sarganserland", name: { de: "Sarganserland", hu: "Sarganserland", ro: "Sarganserland", en: "Sarganserland" }, labelX: 840, labelY: 250, path: rect(840, 250) },
    { id: "CH-SG-SeeBezirkSG", name: { de: "See-Gaster",    hu: "See-Gaster",    ro: "See-Gaster",    en: "See-Gaster" },    labelX: 720, labelY: 215, path: rect(720, 215) },
    { id: "CH-SG-StGallen",    name: { de: "St. Gallen",    hu: "Sankt Gallen",  ro: "Sankt Gallen",  en: "St. Gallen" },    labelX: 800, labelY: 195, path: rect(800, 195) },
    { id: "CH-SG-Toggenburg",  name: { de: "Toggenburg",    hu: "Toggenburg",    ro: "Toggenburg",    en: "Toggenburg" },    labelX: 755, labelY: 225, path: rect(755, 225) },
    { id: "CH-SG-WerdenbergSG",name: { de: "Werdenberg",    hu: "Werdenberg",    ro: "Werdenberg",    en: "Werdenberg" },    labelX: 835, labelY: 215, path: rect(835, 215) },
    { id: "CH-SG-Wil",         name: { de: "Wil",           hu: "Wil",           ro: "Wil",           en: "Wil" },           labelX: 725, labelY: 175, path: rect(725, 175) },
  ],

  // ── Schaffhausen (SH) — 6 Bezirke ────────────────────────────────────
  "CH-SH": [
    { id: "CH-SH-Diessenhofen", name: { de: "Diessenhofen",  hu: "Diessenhofen",  ro: "Diessenhofen",  en: "Diessenhofen" }, labelX: 635, labelY: 20,  path: rect(635, 20)  },
    { id: "CH-SH-Klettgau",     name: { de: "Klettgau",      hu: "Klettgau",      ro: "Klettgau",      en: "Klettgau" },     labelX: 590, labelY: 18,  path: rect(590, 18)  },
    { id: "CH-SH-Reiat",        name: { de: "Reiat",         hu: "Reiat",         ro: "Reiat",         en: "Reiat" },        labelX: 575, labelY: 28,  path: rect(575, 28)  },
    { id: "CH-SH-Stein",        name: { de: "Stein",         hu: "Stein",         ro: "Stein",         en: "Stein" },        labelX: 620, labelY: 35,  path: rect(620, 35)  },
    { id: "CH-SH-SchaffhausenBez", name: { de: "Schaffhausen", hu: "Schaffhausen", ro: "Schaffhausen",  en: "Schaffhausen" }, labelX: 592, labelY: 25,  path: rect(592, 25)  },
    { id: "CH-SH-Schleitheim",  name: { de: "Schleitheim",   hu: "Schleitheim",   ro: "Schleitheim",   en: "Schleitheim" },  labelX: 560, labelY: 22,  path: rect(560, 22)  },
  ],

  // ── Schwyz (SZ) — 6 Bezirke ───────────────────────────────────────────
  "CH-SZ": [
    { id: "CH-SZ-Einsiedeln",  name: { de: "Einsiedeln",    hu: "Einsiedeln",    ro: "Einsiedeln",    en: "Einsiedeln" },    labelX: 625, labelY: 248, path: rect(625, 248) },
    { id: "CH-SZ-Gersau",      name: { de: "Gersau",        hu: "Gersau",        ro: "Gersau",        en: "Gersau" },        labelX: 595, labelY: 265, path: rect(595, 265, 40, 30) },
    { id: "CH-SZ-Höfe",        name: { de: "Höfe",          hu: "Höfe",          ro: "Höfe",          en: "Höfe" },          labelX: 630, labelY: 225, path: rect(630, 225) },
    { id: "CH-SZ-Küssnacht",   name: { de: "Küssnacht",     hu: "Küssnacht",     ro: "Küssnacht",     en: "Küssnacht" },     labelX: 577, labelY: 245, path: rect(577, 245) },
    { id: "CH-SZ-March",       name: { de: "March",         hu: "March",         ro: "March",         en: "March" },         labelX: 655, labelY: 235, path: rect(655, 235) },
    { id: "CH-SZ-Schwyz",      name: { de: "Schwyz",        hu: "Schwyz",        ro: "Schwyz",        en: "Schwyz" },        labelX: 612, labelY: 258, path: rect(612, 258) },
  ],

  // ── Solothurn (SO) — 5 Bezirke ───────────────────────────────────────
  "CH-SO": [
    { id: "CH-SO-Bucheggberg",  name: { de: "Bucheggberg",   hu: "Bucheggberg",   ro: "Bucheggberg",   en: "Bucheggberg" },  labelX: 405, labelY: 195, path: rect(405, 195) },
    { id: "CH-SO-Dorneck",      name: { de: "Dorneck",       hu: "Dorneck",       ro: "Dorneck",       en: "Dorneck" },      labelX: 360, labelY: 145, path: rect(360, 145) },
    { id: "CH-SO-Gösgen",       name: { de: "Gösgen",        hu: "Gösgen",        ro: "Gösgen",        en: "Gösgen" },       labelX: 435, labelY: 170, path: rect(435, 170) },
    { id: "CH-SO-Lebern",       name: { de: "Lebern",        hu: "Lebern",        ro: "Lebern",        en: "Lebern" },       labelX: 390, labelY: 185, path: rect(390, 185) },
    { id: "CH-SO-Olten",        name: { de: "Olten",         hu: "Olten",         ro: "Olten",         en: "Olten" },        labelX: 420, labelY: 175, path: rect(420, 175) },
    { id: "CH-SO-Solothurn",    name: { de: "Solothurn",     hu: "Solothurn",     ro: "Solothurn",     en: "Solothurn" },    labelX: 390, labelY: 172, path: rect(390, 172) },
    { id: "CH-SO-Thal",         name: { de: "Thal",          hu: "Thal",          ro: "Thal",          en: "Thal" },         labelX: 358, labelY: 158, path: rect(358, 158) },
    { id: "CH-SO-Thierstein",   name: { de: "Thierstein",    hu: "Thierstein",    ro: "Thierstein",    en: "Thierstein" },   labelX: 352, labelY: 138, path: rect(352, 138) },
    { id: "CH-SO-WasserambtSO", name: { de: "Wasseramt",     hu: "Wasseramt",     ro: "Wasseramt",     en: "Wasseramt" },    labelX: 400, labelY: 200, path: rect(400, 200) },
  ],

  // ── Thurgau (TG) — 5 Bezirke ─────────────────────────────────────────
  "CH-TG": [
    { id: "CH-TG-Arbon",        name: { de: "Arbon",         hu: "Arbon",         ro: "Arbon",         en: "Arbon" },        labelX: 740, labelY: 72,  path: rect(740, 72)  },
    { id: "CH-TG-Bischofszell", name: { de: "Bischofszell",  hu: "Bischofszell",  ro: "Bischofszell",  en: "Bischofszell" }, labelX: 720, labelY: 90,  path: rect(720, 90)  },
    { id: "CH-TG-Diessenhofen", name: { de: "Diessenhofen",  hu: "Diessenhofen",  ro: "Diessenhofen",  en: "Diessenhofen" }, labelX: 660, labelY: 58,  path: rect(660, 58)  },
    { id: "CH-TG-FrauenfeldBez", name: { de: "Frauenfeld",   hu: "Frauenfeld",    ro: "Frauenfeld",    en: "Frauenfeld" },   labelX: 670, labelY: 80,  path: rect(670, 80)  },
    { id: "CH-TG-KreuzlingenBez", name: { de: "Kreuzlingen",  hu: "Kreuzlingen",  ro: "Kreuzlingen",  en: "Kreuzlingen" },  labelX: 695, labelY: 68,  path: rect(695, 68)  },
    { id: "CH-TG-MünchwiesenTG", name: { de: "Münchwilen",   hu: "Münchwilen",    ro: "Münchwilen",    en: "Münchwilen" },   labelX: 695, labelY: 95,  path: rect(695, 95)  },
    { id: "CH-TG-Steckborn",    name: { de: "Steckborn",     hu: "Steckborn",     ro: "Steckborn",     en: "Steckborn" },    labelX: 640, labelY: 68,  path: rect(640, 68)  },
    { id: "CH-TG-Weinfelden",   name: { de: "Weinfelden",    hu: "Weinfelden",    ro: "Weinfelden",    en: "Weinfelden" },   labelX: 710, labelY: 82,  path: rect(710, 82)  },
  ],

  // ── Ticino (TI) — 8 Distretti ────────────────────────────────────────
  "CH-TI": [
    { id: "CH-TI-Bellinzona",  name: { de: "Bellinzona",    hu: "Bellinzona",    ro: "Bellinzona",    en: "Bellinzona" },    labelX: 650, labelY: 450, path: rect(650, 450) },
    { id: "CH-TI-Blenio",      name: { de: "Blenio",        hu: "Blenio",        ro: "Blenio",        en: "Blenio" },        labelX: 655, labelY: 410, path: rect(655, 410) },
    { id: "CH-TI-Leventina",   name: { de: "Leventina",     hu: "Leventina",     ro: "Leventina",     en: "Leventina" },     labelX: 618, labelY: 390, path: rect(618, 390) },
    { id: "CH-TI-Locarno",     name: { de: "Locarno",       hu: "Locarno",       ro: "Locarno",       en: "Locarno" },       labelX: 630, labelY: 465, path: rect(630, 465) },
    { id: "CH-TI-Lugano",      name: { de: "Lugano",        hu: "Lugano",        ro: "Lugano",        en: "Lugano" },        labelX: 655, labelY: 520, path: rect(655, 520) },
    { id: "CH-TI-Mendrisio",   name: { de: "Mendrisio",     hu: "Mendrisio",     ro: "Mendrisio",     en: "Mendrisio" },     labelX: 655, labelY: 560, path: rect(655, 560) },
    { id: "CH-TI-Riviera",     name: { de: "Riviera",       hu: "Riviera",       ro: "Riviera",       en: "Riviera" },       labelX: 660, labelY: 470, path: rect(660, 470) },
    { id: "CH-TI-Vallemaggia", name: { de: "Vallemaggia",   hu: "Vallemaggia",   ro: "Vallemaggia",   en: "Vallemaggia" },   labelX: 610, labelY: 455, path: rect(610, 455) },
  ],

  // ── Uri (UR) — 1 Bezirk ──────────────────────────────────────────────
  "CH-UR": [
    { id: "CH-UR-Uri",          name: { de: "Uri",           hu: "Uri",           ro: "Uri",           en: "Uri" },           labelX: 600, labelY: 335, path: rect(600, 335, 60, 50) },
  ],

  // ── Vaud (VD) — 10 Bezirke ───────────────────────────────────────────
  "CH-VD": [
    { id: "CH-VD-Aigle",        name: { de: "Aigle",         hu: "Aigle",         ro: "Aigle",         en: "Aigle" },         labelX: 280, labelY: 415, path: rect(280, 415) },
    { id: "CH-VD-Broye-Vully",  name: { de: "Broye-Vully",   hu: "Broye-Vully",   ro: "Broye-Vully",   en: "Broye-Vully" },  labelX: 295, labelY: 290, path: rect(295, 290) },
    { id: "CH-VD-Gros-de-Vaud", name: { de: "Gros-de-Vaud",  hu: "Gros-de-Vaud",  ro: "Gros-de-Vaud",  en: "Gros-de-Vaud" }, labelX: 295, labelY: 320, path: rect(295, 320) },
    { id: "CH-VD-Jura-Nord",    name: { de: "Jura-Nord vaudois", hu: "Jura-Nord", ro: "Jura-Nord",      en: "North Jura" },   labelX: 260, labelY: 270, path: rect(260, 270) },
    { id: "CH-VD-Lausanne",     name: { de: "Lausanne",      hu: "Lausanne",      ro: "Lausanne",      en: "Lausanne" },      labelX: 264, labelY: 355, path: rect(264, 355) },
    { id: "CH-VD-Lavaux-Oron",  name: { de: "Lavaux-Oron",   hu: "Lavaux-Oron",   ro: "Lavaux-Oron",   en: "Lavaux-Oron" },  labelX: 285, labelY: 355, path: rect(285, 355) },
    { id: "CH-VD-Morges",       name: { de: "Morges",        hu: "Morges",        ro: "Morges",        en: "Morges" },        labelX: 250, labelY: 355, path: rect(250, 355) },
    { id: "CH-VD-Nyon",         name: { de: "Nyon",          hu: "Nyon",          ro: "Nyon",          en: "Nyon" },          labelX: 210, labelY: 360, path: rect(210, 360) },
    { id: "CH-VD-Ouest-lausannois", name: { de: "Ouest lausannois", hu: "Ouest lausannois", ro: "Ouest lausannois", en: "West Lausanne" }, labelX: 248, labelY: 368, path: rect(248, 368) },
    { id: "CH-VD-Riviera-Pays-dEnhaut", name: { de: "Riviera", hu: "Riviera", ro: "Riviera", en: "Riviera" },                labelX: 300, labelY: 390, path: rect(300, 390) },
  ],

  // ── Valais / Wallis (VS) — 13 Bezirke ────────────────────────────────
  "CH-VS": [
    { id: "CH-VS-Brig",         name: { de: "Brig",          hu: "Brig",          ro: "Brig",          en: "Brig" },          labelX: 480, labelY: 490, path: rect(480, 490) },
    { id: "CH-VS-Conthey",      name: { de: "Conthey",       hu: "Conthey",       ro: "Conthey",       en: "Conthey" },       labelX: 385, labelY: 500, path: rect(385, 500) },
    { id: "CH-VS-Entremont",    name: { de: "Entremont",     hu: "Entremont",     ro: "Entremont",     en: "Entremont" },     labelX: 335, labelY: 530, path: rect(335, 530) },
    { id: "CH-VS-Goms",         name: { de: "Goms",          hu: "Goms",          ro: "Goms",          en: "Goms" },          labelX: 520, labelY: 470, path: rect(520, 470) },
    { id: "CH-VS-Hérens",       name: { de: "Hérens",        hu: "Hérens",        ro: "Hérens",        en: "Hérens" },        labelX: 415, labelY: 505, path: rect(415, 505) },
    { id: "CH-VS-Leuk",         name: { de: "Leuk",          hu: "Leuk",          ro: "Leuk",          en: "Leuk" },          labelX: 455, labelY: 490, path: rect(455, 490) },
    { id: "CH-VS-Martigny",     name: { de: "Martigny",      hu: "Martigny",      ro: "Martigny",      en: "Martigny" },      labelX: 305, labelY: 505, path: rect(305, 505) },
    { id: "CH-VS-Monthey",      name: { de: "Monthey",       hu: "Monthey",       ro: "Monthey",       en: "Monthey" },       labelX: 250, labelY: 495, path: rect(250, 495) },
    { id: "CH-VS-Raron",        name: { de: "Raron",         hu: "Raron",         ro: "Raron",         en: "Raron" },         labelX: 463, labelY: 475, path: rect(463, 475) },
    { id: "CH-VS-Sion",         name: { de: "Sion",          hu: "Sion",          ro: "Sion",          en: "Sion" },          labelX: 400, labelY: 495, path: rect(400, 495) },
    { id: "CH-VS-Sierre",       name: { de: "Sierre",        hu: "Sierre",        ro: "Sierre",        en: "Sierre" },        labelX: 435, labelY: 495, path: rect(435, 495) },
    { id: "CH-VS-StMaurice",    name: { de: "Saint-Maurice", hu: "Saint-Maurice", ro: "Saint-Maurice", en: "Saint-Maurice" }, labelX: 270, labelY: 490, path: rect(270, 490) },
    { id: "CH-VS-Visp",         name: { de: "Visp",          hu: "Visp",          ro: "Visp",          en: "Visp" },          labelX: 460, labelY: 480, path: rect(460, 480) },
  ],

  // ── Zug (ZG) — 1 Bezirk ──────────────────────────────────────────────
  "CH-ZG": [
    { id: "CH-ZG-Zug",          name: { de: "Zug",           hu: "Zug",           ro: "Zug",           en: "Zug" },           labelX: 585, labelY: 225, path: rect(585, 225, 55, 40) },
  ],

  // ── Zürich (ZH) — 12 Bezirke ─────────────────────────────────────────
  "CH-ZH": [
    { id: "CH-ZH-Affoltern",    name: { de: "Affoltern",     hu: "Affoltern",     ro: "Affoltern",     en: "Affoltern" },     labelX: 565, labelY: 165, path: rect(565, 165) },
    { id: "CH-ZH-Andelfingen",  name: { de: "Andelfingen",   hu: "Andelfingen",   ro: "Andelfingen",   en: "Andelfingen" },   labelX: 605, labelY: 72,  path: rect(605, 72)  },
    { id: "CH-ZH-Bülach",       name: { de: "Bülach",        hu: "Bülach",        ro: "Bülach",        en: "Bülach" },        labelX: 590, labelY: 70,  path: rect(590, 70)  },
    { id: "CH-ZH-Dielsdorf",    name: { de: "Dielsdorf",     hu: "Dielsdorf",     ro: "Dielsdorf",     en: "Dielsdorf" },     labelX: 565, labelY: 88,  path: rect(565, 88)  },
    { id: "CH-ZH-Dietikon",     name: { de: "Dietikon",      hu: "Dietikon",      ro: "Dietikon",      en: "Dietikon" },      labelX: 550, labelY: 130, path: rect(550, 130) },
    { id: "CH-ZH-Hinwil",       name: { de: "Hinwil",        hu: "Hinwil",        ro: "Hinwil",        en: "Hinwil" },        labelX: 645, labelY: 168, path: rect(645, 168) },
    { id: "CH-ZH-Horgen",       name: { de: "Horgen",        hu: "Horgen",        ro: "Horgen",        en: "Horgen" },        labelX: 605, labelY: 175, path: rect(605, 175) },
    { id: "CH-ZH-Meilen",       name: { de: "Meilen",        hu: "Meilen",        ro: "Meilen",        en: "Meilen" },        labelX: 625, labelY: 155, path: rect(625, 155) },
    { id: "CH-ZH-Pfäffikon",    name: { de: "Pfäffikon",     hu: "Pfäffikon",     ro: "Pfäffikon",     en: "Pfäffikon" },     labelX: 640, labelY: 140, path: rect(640, 140) },
    { id: "CH-ZH-Uster",        name: { de: "Uster",         hu: "Uster",         ro: "Uster",         en: "Uster" },         labelX: 635, labelY: 125, path: rect(635, 125) },
    { id: "CH-ZH-Winterthur",   name: { de: "Winterthur",    hu: "Winterthur",    ro: "Winterthur",    en: "Winterthur" },    labelX: 631, labelY: 98,  path: rect(631, 98)  },
    { id: "CH-ZH-ZurichBez",    name: { de: "Zürich",        hu: "Zürich",        ro: "Zürich",        en: "Zurich" },        labelX: 600, labelY: 120, path: rect(600, 120) },
  ],

  // ── Liechtenstein (LI) — placeholder, same map coord space ───────────
  // (shown on CH map as a micro-state alongside; own IDs)
  // Not a Swiss canton, skipped intentionally.
};
