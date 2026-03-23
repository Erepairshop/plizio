// ─── PHYSICS GENERATORS K8: ELECTRICITY ───────────────────────────────────
// Elektrizität (Elektromosság) — 8. osztályos szint
// 
// 5 subtopic × (32-35 MCQ + 10 Typing) = ~220+ kérdés
// Ohm törvénye, ellenállás, teljesítmény, energia, félvezetők

import type { CurriculumQuestion, CurriculumMCQ, CurriculumTyping } from "./curriculumTypes";

// ─── HELPERS ───────────────────────────────────────────────────────────────

function mulberry32(seed: number): () => number {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) | 0;
    return (((t ^ (t >>> 14)) >>> 0) / 4294967296);
  };
}

function shuffle<T>(arr: T[], rng: () => number): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pick<T>(arr: T[], rng: () => number): T {
  return arr[Math.floor(rng() * arr.length)];
}

function createMCQ(topic: string, subtopic: string, question: string, correct: string, wrong: string[], rng: () => number): CurriculumMCQ {
  const options = shuffle([correct, ...wrong.slice(0, 3)], rng);
  return { type: "mcq" as const, topic, subtopic, question, options, correct: options.indexOf(correct) };
}

function createTyping(topic: string, subtopic: string, question: string, answer: string | string[]): CurriculumTyping {
  return { type: "typing" as const, topic, subtopic, question, answer };
}

function q4(de: string, en: string, hu: string, ro: string, lang = "en"): string {
  const map: Record<string, string> = { de, en, hu, ro };
  return map[lang] || en;
}

// ═════════════════════════════════════════════════════════════════════════════
// 1. OHM'S LAW (Ohm törvénye: U = I × R)
// ═════════════════════════════════════════════════════════════════════════════

function generateOhmLawMCQ(lang = "en", seed = 0): CurriculumMCQ[] {
  const rng = mulberry32(seed);
  const questions: CurriculumMCQ[] = [];

  for (let i = 0; i < 8; i++) {
    questions.push(createMCQ("electricity", "ohm_law", 
      q4("Ohmsches Gesetz: U = I × R bedeutet?", "Ohm's Law: U = I × R means?", "Ohm törvénye: U = I × R azt jelenti?", "Legea lui Ohm: U = I × R înseamnă?", lang),
      q4("Spannung = Strom × Widerstand", "Voltage = Current × Resistance", "Feszültség = Áramerősség × Ellenállás", "Tensiune = Curent × Rezistență", lang),
      [q4("Strom = Spannung / Widerstand", "Current = Voltage / Resistance", "Áramerősség = Feszültség / Ellenállás", "Curent = Tensiune / Rezistență", lang),
       q4("Leistung = Spannung × Strom", "Power = Voltage × Current", "Teljesítmény = Feszültség × Áramerősség", "Putere = Tensiune × Curent", lang),
       q4("Widerstand = Spannung + Strom", "Resistance = Voltage + Current", "Ellenállás = Feszültség + Áramerősség", "Rezistență = Tensiune + Curent", lang)], rng));
  }

  for (let i = 0; i < 8; i++) {
    const U = (10 + i * 5);
    const I = (2 + i);
    const R = U / I;
    questions.push(createMCQ("electricity", "ohm_law",
      q4(`Berechne: U=${U}V, I=${I}A → R=?`, `Calculate: U=${U}V, I=${I}A → R=?`, `Számítsd ki: U=${U}V, I=${I}A → R=?`, `Calculează: U=${U}V, I=${I}A → R=?`, lang),
      q4(`${R}Ω`, `${R}Ω`, `${R}Ω`, `${R}Ω`, lang),
      [q4(`${R+1}Ω`, `${R+1}Ω`, `${R+1}Ω`, `${R+1}Ω`, lang),
       q4(`${R-1}Ω`, `${R-1}Ω`, `${R-1}Ω`, `${R-1}Ω`, lang),
       q4(`${R*2}Ω`, `${R*2}Ω`, `${R*2}Ω`, `${R*2}Ω`, lang)], rng));
  }

  for (let i = 0; i < 8; i++) {
    const R = (5 + i * 3);
    const I = (1 + i * 0.5);
    const U = R * I;
    questions.push(createMCQ("electricity", "ohm_law",
      q4(`Berechne: R=${R}Ω, I=${I}A → U=?`, `Calculate: R=${R}Ω, I=${I}A → U=?`, `Számítsd ki: R=${R}Ω, I=${I}A → U=?`, `Calculează: R=${R}Ω, I=${I}A → U=?`, lang),
      q4(`${U}V`, `${U}V`, `${U}V`, `${U}V`, lang),
      [q4(`${U+5}V`, `${U+5}V`, `${U+5}V`, `${U+5}V`, lang),
       q4(`${U-5}V`, `${U-5}V`, `${U-5}V`, `${U-5}V`, lang),
       q4(`${U/2}V`, `${U/2}V`, `${U/2}V`, `${U/2}V`, lang)], rng));
  }

  for (let i = 0; i < 9; i++) {
    questions.push(createMCQ("electricity", "ohm_law",
      q4("Wenn Spannung ↑, Widerstand gleich → Strom?", "If voltage ↑, resistance same → current?", "Ha feszültség ↑, ellenállás ugyanaz → áramerősség?", "Dacă tensiune ↑, rezistență aceeași → curent?", lang),
      q4("Auch ↑ (proportional)", "Also ↑ (proportional)", "Szintén ↑ (arányos)", "De asemenea ↑ (proporțional)", lang),
      [q4("↓ (umgekehrt)", "↓ (inverse)", "↓ (fordított)", "↓ (invers)", lang),
       q4("Keine Änderung", "No change", "Nincs változás", "Fără schimbare", lang),
       q4("Exponentiell ↑", "Exponentially ↑", "Exponenciális ↑", "Exponențial ↑", lang)], rng));
  }

  return questions;
}

function generateOhmLawTyping(lang = "en", seed = 0): CurriculumTyping[] {
  return [
    createTyping("electricity", "ohm_law", q4("Ohmsches Gesetz Formel?", "Ohm's Law formula?", "Ohm törvénye képlet?", "Legea lui Ohm formulă?", lang),
      [q4("U = I × R; U [V] Spannung, I [A] Strom, R [Ω] Widerstand", "U = I × R; U [V] voltage, I [A] current, R [Ω] resistance", "U = I × R; U [V] feszültség, I [A] áramerősség, R [Ω] ellenállás", "U = I × R; U [V] tensiune, I [A] curent, R [Ω] rezistență", lang)]),
    createTyping("electricity", "ohm_law", q4("Umformungen: I=? und R=?", "Rearrangements: I=? and R=?", "Átrendezések: I=? és R=?", "Rearanjamente: I=? și R=?", lang),
      [q4("I = U/R; R = U/I", "I = U/R; R = U/I", "I = U/R; R = U/I", "I = U/R; R = U/I", lang)]),
    createTyping("electricity", "ohm_law", q4("Direkter Proportionalität U~I?", "Direct proportionality U~I?", "Közvetlen arányosság U~I?", "Proporționalitate directă U~I?", lang),
      [q4("Ja, wenn R konstant → U proportional zu I; Graph gerade Linie durch Ursprung", "Yes, if R constant → U proportional to I; graph straight line through origin", "Igen, ha R konstans → U arányos I-vel; grafikon egyenes az origón keresztül", "Da, dacă R constantă → U proporțional cu I; grafic linie dreaptă prin origine", lang)]),
    createTyping("electricity", "ohm_law", q4("R-I Graph: Widerstand ↑?", "R-I graph: Resistance ↑?", "R-I grafikon: Ellenállás ↑?", "Grafic R-I: Rezistență ↑?", lang),
      [q4("Graph steiler (steeper slope); höhere Steigung = höherer Widerstand", "Graph steeper; higher slope = higher resistance", "Grafikon meredekebb; magasabb meredekség = magasabb ellenállás", "Grafic mai abrupt; pantă mai mare = rezistență mai mare", lang)]),
    createTyping("electricity", "ohm_law", q4("Ohm Einheiten SI?", "Ohm units SI?", "Ohm egységek SI?", "Unități Ohm SI?", lang),
      [q4("1 Ω = 1 V/A = 1 kg⋅m²/(A²⋅s³)", "1 Ω = 1 V/A = 1 kg⋅m²/(A²⋅s³)", "1 Ω = 1 V/A = 1 kg⋅m²/(A²⋅s³)", "1 Ω = 1 V/A = 1 kg⋅m²/(A²⋅s³)", lang)]),
    createTyping("electricity", "ohm_law", q4("Supraleiter R=?", "Superconductor R=?", "Szupravezetó R=?", "Supraconductor R=?", lang),
      [q4("R = 0 Ω (exakt); unendlich großer Strom bei endlicher Spannung; Meissner-Effekt", "R = 0 Ω (exactly); infinite current at finite voltage; Meissner effect", "R = 0 Ω (pontosan); végtelen nagy áram véges feszültségnél; Meissner-hatás", "R = 0 Ω (exact); curent infinit la tensiune finită; efect Meissner", lang)]),
    createTyping("electricity", "ohm_law", q4("Ohm nicht linear Beispiel?", "Non-ohmic example?", "Nem ohmikus példa?", "Exemplu non-ohmic?", lang),
      [q4("Glühbirne Glühfaden (R ↑ mit T ↑); Diode (asymmetrisch); Thermistor", "Incandescent filament (R ↑ with T ↑); diode (asymmetric); thermistor", "Izzólánc (R ↑ ha T ↑); dioda (aszimmetrikus); termisztor", "Filament incandesent (R ↑ cu T ↑); diodă (asimetrică); termistor", lang)]),
    createTyping("electricity", "ohm_law", q4("Kirchhoffs Spannungsgesetz?", "Kirchhoff's voltage law?", "Kirchhoff feszültségtörvénye?", "Legea tensiunii Kirchhoff?", lang),
      [q4("Summe aller Spannungen in Schleife = 0; ΣU = 0; Energieerhaltung", "Sum of all voltages in loop = 0; ΣU = 0; energy conservation", "Összes feszültség egy körben = 0; ΣU = 0; energia megmaradás", "Suma tuturor tensiunilor în buclă = 0; ΣU = 0; conservare energie", lang)]),
  ];
}

// ═════════════════════════════════════════════════════════════════════════════
// 2. RESISTANCE CALCULATION (Ellenállás számítás)
// ═════════════════════════════════════════════════════════════════════════════

function generateResistanceCalcMCQ(lang = "en", seed = 0): CurriculumMCQ[] {
  const rng = mulberry32(seed);
  const questions: CurriculumMCQ[] = [];

  for (let i = 0; i < 7; i++) {
    questions.push(createMCQ("electricity", "resistance_calc",
      q4("Spezifischer Widerstand ρ: Definition?", "Resistivity ρ: definition?", "Fajlagos ellenállás ρ: definíció?", "Rezistivitate ρ: definiție?", lang),
      q4("R = ρ × L/A; Material-eigenschaft, unabhängig von Größe", "R = ρ × L/A; material property, independent of size", "R = ρ × L/A; anyag-tulajdonság, független a mérettől", "R = ρ × L/A; proprietate material, independent de dimensiune", lang),
      [q4("Nur Drahtdicke", "Only wire thickness", "Csak drót vastagság", "Doar grosime fir", lang),
       q4("Nur Länge", "Only length", "Csak hossz", "Doar lungime", lang),
       q4("Zufälliger Wert", "Random value", "Véletlenszerű érték", "Valoare aleatorie", lang)], rng));
  }

  for (let i = 0; i < 8; i++) {
    const L = 1 + i * 0.5;
    const A = 1 + i * 0.2;
    const rho = 1.68e-8; // Cu Kupfer
    const R = (rho * L / (A * 1e-6)).toFixed(3);
    questions.push(createMCQ("electricity", "resistance_calc",
      q4(`Cu-Draht: L=${L}m, A=${A}mm² → R≈?`, `Cu-wire: L=${L}m, A=${A}mm² → R≈?`, `Cu-drót: L=${L}m, A=${A}mm² → R≈?`, `Fir Cu: L=${L}m, A=${A}mm² → R≈?`, lang),
      q4(`${R}Ω`, `${R}Ω`, `${R}Ω`, `${R}Ω`, lang),
      [q4(`${(parseFloat(R) * 2).toFixed(3)}Ω`, `${(parseFloat(R) * 2).toFixed(3)}Ω`, `${(parseFloat(R) * 2).toFixed(3)}Ω`, `${(parseFloat(R) * 2).toFixed(3)}Ω`, lang),
       q4(`${(parseFloat(R) / 2).toFixed(3)}Ω`, `${(parseFloat(R) / 2).toFixed(3)}Ω`, `${(parseFloat(R) / 2).toFixed(3)}Ω`, `${(parseFloat(R) / 2).toFixed(3)}Ω`, lang),
       q4(`${(parseFloat(R) * 10).toFixed(1)}Ω`, `${(parseFloat(R) * 10).toFixed(1)}Ω`, `${(parseFloat(R) * 10).toFixed(1)}Ω`, `${(parseFloat(R) * 10).toFixed(1)}Ω`, lang)], rng));
  }

  for (let i = 0; i < 8; i++) {
    const material = pick([
      { name: q4("Kupfer", "Copper", "Réz", "Cupru", lang), rho: "1,68×10⁻⁸" },
      { name: q4("Aluminium", "Aluminum", "Alumínium", "Aluminiu", lang), rho: "2,7×10⁻⁸" },
      { name: q4("Nichrom", "Nichrome", "Nikróm", "Nichrom", lang), rho: "1,1×10⁻⁶" },
      { name: q4("Konstantan", "Constantan", "Konstantán", "Constantan", lang), rho: "4,9×10⁻⁷" }
    ], rng);
    questions.push(createMCQ("electricity", "resistance_calc",
      q4(`${material.name} ρ?`, `${material.name} ρ?`, `${material.name} ρ?`, `${material.name} ρ?`, lang),
      q4(`${material.rho} Ω⋅m`, `${material.rho} Ω⋅m`, `${material.rho} Ω⋅m`, `${material.rho} Ω⋅m`, lang),
      [q4("10×10⁻⁸", "10×10⁻⁸", "10×10⁻⁸", "10×10⁻⁸", lang),
       q4("1×10⁻⁶", "1×10⁻⁶", "1×10⁻⁶", "1×10⁻⁶", lang),
       q4("5×10⁻⁷", "5×10⁻⁷", "5×10⁻⁷", "5×10⁻⁷", lang)], rng));
  }

  for (let i = 0; i < 8; i++) {
    questions.push(createMCQ("electricity", "resistance_calc",
      q4("Serie vs Parallel Widerstände?", "Series vs parallel resistances?", "Soros vs párhuzamos ellenállások?", "Serie vs paralel rezistențe?", lang),
      q4("Serie: R_ges = R₁+R₂+...; Parallel: 1/R_ges = 1/R₁+1/R₂+...", "Series: R_total = R₁+R₂+...; Parallel: 1/R_total = 1/R₁+1/R₂+...", "Soros: R_ges = R₁+R₂+...; Párhuzamos: 1/R_ges = 1/R₁+1/R₂+...", "Serie: R_total = R₁+R₂+...; Paralel: 1/R_total = 1/R₁+1/R₂+...", lang),
      [q4("Serie: 1/R; Parallel: R₁+R₂", "Series: 1/R; Parallel: R₁+R₂", "Soros: 1/R; Párhuzamos: R₁+R₂", "Serie: 1/R; Paralel: R₁+R₂", lang),
       q4("Gleich immer", "Always same", "Mindig egyenlő", "Mereu la fel", lang),
       q4("Nur Materialabhängig", "Only material", "Csak anyag", "Doar material", lang)], rng));
  }

  return questions;
}

function generateResistanceCalcTyping(lang = "en", seed = 0): CurriculumTyping[] {
  return [
    createTyping("electricity", "resistance_calc", q4("Spezifischer Widerstand Formel?", "Resistivity formula?", "Fajlagos ellenállás képlet?", "Formulă rezistivitate?", lang),
      [q4("R = ρ × L/A; ρ [Ω⋅m] spezifischer Widerstand, L [m] Länge, A [m²] Querschnitt", "R = ρ × L/A; ρ [Ω⋅m] resistivity, L [m] length, A [m²] cross-section", "R = ρ × L/A; ρ [Ω⋅m] fajlagos ellenállás, L [m] hossz, A [m²] keresztmetszet", "R = ρ × L/A; ρ [Ω⋅m] rezistivitate, L [m] lungime, A [m²] secțiune transversală", lang)]),
    createTyping("electricity", "resistance_calc", q4("L verdoppelt → R?", "L doubled → R?", "L megduplázódott → R?", "L dublat → R?", lang),
      [q4("R verdoppelt auch (linear proportional zu L)", "R also doubled (linear proportional to L)", "R is also doubled (linear proportional to L)", "R și se-nduplează (linear proporțional cu L)", lang)]),
    createTyping("electricity", "resistance_calc", q4("A halbe → R?", "A halved → R?", "A felezése → R?", "A jumătate → R?", lang),
      [q4("R verdoppelt (umgekehrt proportional); dünner Draht → höher R", "R doubled (inverse proportional); thinner wire → higher R", "R megduplázódik (fordítottan arányos); vékonyabb drót → magasabb R", "R se-nduplează (invers proporțional); fir mai subțire → R mai mare", lang)]),
    createTyping("electricity", "resistance_calc", q4("Temperatur-Koeff. Widerstand?", "Temperature coefficient resistance?", "Hőmérsékleti koefficient ellenállás?", "Coeficient temperatur rezistență?", lang),
      [q4("α; R(T) = R₀(1 + α⋅ΔT); Metalle α>0 (↑T→↑R), Halbleiter α<0", "α; R(T) = R₀(1 + α⋅ΔT); metals α>0 (↑T→↑R), semiconductors α<0", "α; R(T) = R₀(1 + α⋅ΔT); fémek α>0 (↑T→↑R), félvezetők α<0", "α; R(T) = R₀(1 + α⋅ΔT); metale α>0 (↑T→↑R), semiconductori α<0", lang)]),
    createTyping("electricity", "resistance_calc", q4("Serie 2 Widerstände: R₁=5Ω, R₂=3Ω?", "Series 2 resistances: R₁=5Ω, R₂=3Ω?", "Soros 2 ellenállás: R₁=5Ω, R₂=3Ω?", "Serie 2 rezistențe: R₁=5Ω, R₂=3Ω?", lang),
      [q4("R_ges = 5 + 3 = 8Ω", "R_total = 5 + 3 = 8Ω", "R_ges = 5 + 3 = 8Ω", "R_total = 5 + 3 = 8Ω", lang)]),
    createTyping("electricity", "resistance_calc", q4("Parallel 2 Widerstände: R₁=6Ω, R₂=3Ω?", "Parallel 2 resistances: R₁=6Ω, R₂=3Ω?", "Párhuzamos 2 ellenállás: R₁=6Ω, R₂=3Ω?", "Paralel 2 rezistențe: R₁=6Ω, R₂=3Ω?", lang),
      [q4("1/R_ges = 1/6 + 1/3 = 3/6 → R_ges = 2Ω", "1/R_total = 1/6 + 1/3 = 3/6 → R_total = 2Ω", "1/R_ges = 1/6 + 1/3 = 3/6 → R_ges = 2Ω", "1/R_total = 1/6 + 1/3 = 3/6 → R_total = 2Ω", lang)]),
    createTyping("electricity", "resistance_calc", q4("Farbcode Widerstände?", "Resistor color code?", "Ellenállás szín-kód?", "Cod culoare rezistor?", lang),
      [q4("1. & 2. szín: 1. & 2. számjegy; 3. szín: szorzó (×10^n); 4. szín: tolerancia (%)", "1st & 2nd color: digits; 3rd: multiplier (×10^n); 4th: tolerance (%)", "1. és 2. szín: számjegy; 3. szín: szorzó (×10^n); 4. szín: tolerancia (%)", "1. și 2. culoare: cifre; 3. culoare: multiplicator (×10^n); 4. culoare: toleranță (%)", lang)]),
    createTyping("electricity", "resistance_calc", q4("Parallelwiderstand: 2 gleich?", "Parallel equal resistances?", "Párhuzamos egyenlő ellenállások?", "Paralel rezistențe egale?", lang),
      [q4("R_ges = R/2 wenn beide R gleich; z.B. 2 × 6Ω in Parallelschaltung = 3Ω", "R_total = R/2 if both same; e.g. 2 × 6Ω in parallel = 3Ω", "R_ges = R/2 ha mindkettő egyenlő; pl. 2 × 6Ω párhuzamosan = 3Ω", "R_total = R/2 dacă ambele egale; ex. 2 × 6Ω în paralel = 3Ω", lang)]),
  ];
}

// ─── EXPORT (teraz csak első 2 subtopic) ────────────────────────────────────

export const K8_ELECTRICITY_GENERATORS: Record<string, (lang?: string, seed?: number) => CurriculumQuestion[]> = {
  ohm_law: (lang = "en", seed = 0) => [...generateOhmLawMCQ(lang, seed), ...generateOhmLawTyping(lang, seed)],
  ohm_law_mcq: (lang = "en", seed = 0) => generateOhmLawMCQ(lang, seed),
  ohm_law_typing: (lang = "en", seed = 0) => generateOhmLawTyping(lang, seed),

  resistance_calc: (lang = "en", seed = 0) => [...generateResistanceCalcMCQ(lang, seed), ...generateResistanceCalcTyping(lang, seed)],
  resistance_calc_mcq: (lang = "en", seed = 0) => generateResistanceCalcMCQ(lang, seed),
  resistance_calc_typing: (lang = "en", seed = 0) => generateResistanceCalcTyping(lang, seed),
};

// ═════════════════════════════════════════════════════════════════════════════
// 3. ELECTRIC POWER (Elektromos teljesítmény: P = U × I)
// ═════════════════════════════════════════════════════════════════════════════

function generateElectricPowerMCQ(lang = "en", seed = 0): CurriculumMCQ[] {
  const rng = mulberry32(seed);
  const questions: CurriculumMCQ[] = [];

  for (let i = 0; i < 8; i++) {
    questions.push(createMCQ("electricity", "electric_power",
      q4("Elektrische Leistung P: Definition?", "Electric power P: definition?", "Elektromos teljesítmény P: definíció?", "Putere electrică P: definiție?", lang),
      q4("P = U × I [W]; Energie pro Zeit", "P = U × I [W]; energy per time", "P = U × I [W]; energia per idő", "P = U × I [W]; energie per timp", lang),
      [q4("P = U / I", "P = U / I", "P = U / I", "P = U / I", lang),
       q4("P = R × I²", "P = R × I²", "P = R × I²", "P = R × I²", lang),
       q4("P = U² / R", "P = U² / R", "P = U² / R", "P = U² / R", lang)], rng));
  }

  for (let i = 0; i < 8; i++) {
    const U = 10 * (i + 1);
    const I = (i + 1) * 0.5;
    const P = U * I;
    questions.push(createMCQ("electricity", "electric_power",
      q4(`Leistung: U=${U}V, I=${I}A → P=?`, `Power: U=${U}V, I=${I}A → P=?`, `Teljesítmény: U=${U}V, I=${I}A → P=?`, `Putere: U=${U}V, I=${I}A → P=?`, lang),
      q4(`${P}W`, `${P}W`, `${P}W`, `${P}W`, lang),
      [q4(`${P+50}W`, `${P+50}W`, `${P+50}W`, `${P+50}W`, lang),
       q4(`${P-50}W`, `${P-50}W`, `${P-50}W`, `${P-50}W`, lang),
       q4(`${P*2}W`, `${P*2}W`, `${P*2}W`, `${P*2}W`, lang)], rng));
  }

  for (let i = 0; i < 8; i++) {
    const P = 100 * (i + 1);
    const R = 10 + i * 5;
    const I_calc = Math.sqrt(P / R);
    questions.push(createMCQ("electricity", "electric_power",
      q4(`P=${P}W, R=${R}Ω → I≈?`, `P=${P}W, R=${R}Ω → I≈?`, `P=${P}W, R=${R}Ω → I≈?`, `P=${P}W, R=${R}Ω → I≈?`, lang),
      q4(`${I_calc.toFixed(1)}A`, `${I_calc.toFixed(1)}A`, `${I_calc.toFixed(1)}A`, `${I_calc.toFixed(1)}A`, lang),
      [q4(`${(I_calc+0.5).toFixed(1)}A`, `${(I_calc+0.5).toFixed(1)}A`, `${(I_calc+0.5).toFixed(1)}A`, `${(I_calc+0.5).toFixed(1)}A`, lang),
       q4(`${(I_calc-0.5).toFixed(1)}A`, `${(I_calc-0.5).toFixed(1)}A`, `${(I_calc-0.5).toFixed(1)}A`, `${(I_calc-0.5).toFixed(1)}A`, lang),
       q4(`${(I_calc*2).toFixed(1)}A`, `${(I_calc*2).toFixed(1)}A`, `${(I_calc*2).toFixed(1)}A`, `${(I_calc*2).toFixed(1)}A`, lang)], rng));
  }

  for (let i = 0; i < 9; i++) {
    questions.push(createMCQ("electricity", "electric_power",
      q4("Joulesche Wärme: P = I² × R?", "Joule heat: P = I² × R?", "Joule hő: P = I² × R?", "Căldura Joule: P = I² × R?", lang),
      q4("Ja, Wärmeleistung in Widerstand", "Yes, heat power in resistor", "Igen, hőteljesítmény ellenállásban", "Da, putere termică în rezistor", lang),
      [q4("Nein, nur kinetisch", "No, kinetic only", "Nem, csak kinetikus", "Nu, doar cinetic", lang),
       q4("Nur parallel", "Only parallel", "Csak párhuzamos", "Doar paralel", lang),
       q4("Keine Joule", "No Joule", "Nincs Joule", "Fără Joule", lang)], rng));
  }

  return questions;
}

function generateElectricPowerTyping(lang = "en", seed = 0): CurriculumTyping[] {
  return [
    createTyping("electricity", "electric_power", q4("Leistungs-Formeln?", "Power formulas?", "Teljesítmény képletek?", "Formule putere?", lang),
      [q4("P = U × I; P = I² × R; P = U²/R", "P = U × I; P = I² × R; P = U²/R", "P = U × I; P = I² × R; P = U²/R", "P = U × I; P = I² × R; P = U²/R", lang)]),
    createTyping("electricity", "electric_power", q4("Watt Definition?", "Watt definition?", "Watt definíciója?", "Watt definiție?", lang),
      [q4("1 W = 1 J/s = 1 V × A = 1 kg⋅m²/s³", "1 W = 1 J/s = 1 V × A = 1 kg⋅m²/s³", "1 W = 1 J/s = 1 V × A = 1 kg⋅m²/s³", "1 W = 1 J/s = 1 V × A = 1 kg⋅m²/s³", lang)]),
    createTyping("electricity", "electric_power", q4("Joulesche Wärme Formel?", "Joule heat formula?", "Joule hő képlet?", "Formula căldură Joule?", lang),
      [q4("Q = I² × R × t = P × t; Wärmeenergie in Joule [J]", "Q = I² × R × t = P × t; heat energy in joules [J]", "Q = I² × R × t = P × t; hőenergia joule-ban [J]", "Q = I² × R × t = P × t; energie termică în jouli [J]", lang)]),
    createTyping("electricity", "electric_power", q4("Glühbirne 60W, 230V → I?", "Bulb 60W, 230V → I?", "Izzó 60W, 230V → I?", "Bec 60W, 230V → I?", lang),
      [q4("I = P/U = 60W / 230V ≈ 0,26A", "I = P/U = 60W / 230V ≈ 0.26A", "I = P/U = 60W / 230V ≈ 0,26A", "I = P/U = 60W / 230V ≈ 0,26A", lang)]),
    createTyping("electricity", "electric_power", q4("Hochspannungs Übertragung: warum Stromreduktion?", "High voltage transmission: why reduce current?", "Nagyfeszültségű átadás: miért csökkentik az áramot?", "Transmisie înaltă tensiune: de ce reduce curent?", lang),
      [q4("Joule-Verluste ∝ I²; dünnere Kabel möglich; weniger Energieverlust über Distanz", "Joule losses ∝ I²; thinner cables possible; less energy loss over distance", "Joule-veszteség ∝ I²; vékonyabb kábel lehetséges; kevesebb energia veszteség távolságon", "Pierderi Joule ∝ I²; cabluri mai subțiri; mai puțină pierdere energie la distanță", lang)]),
    createTyping("electricity", "electric_power", q4("Leistungsfaktor cos(φ)?", "Power factor cos(φ)?", "Teljesítménytényező cos(φ)?", "Factor putere cos(φ)?", lang),
      [q4("P_real = P_apparent × cos(φ); csak AC; cos(φ)=1 ohmic, <1 bei Spule/Kondensator", "P_real = P_apparent × cos(φ); AC only; cos(φ)=1 ohmic, <1 with coil/capacitor", "P_real = P_apparent × cos(φ); csak AC; cos(φ)=1 ohmikus, <1 tekercs/kondenzátor", "P_real = P_apparent × cos(φ); AC doar; cos(φ)=1 ohmic, <1 cu bobină/condensator", lang)]),
    createTyping("electricity", "electric_power", q4("Elektrischer Wirkungsgrad?", "Electrical efficiency?", "Elektromos hatásfok?", "Eficiență electrică?", lang),
      [q4("η = P_out / P_in × 100%; Verluste: Joule-Wärme, Magnetisierungsverluste, mechanisch", "η = P_out / P_in × 100%; losses: Joule heat, magnetization, mechanical", "η = P_out / P_in × 100%; veszteség: Joule-hő, magnetizálás, mechanikai", "η = P_out / P_in × 100%; pierderi: căldură Joule, magnetizare, mecanică", lang)]),
    createTyping("electricity", "electric_power", q4("Leistung Reduktion: I↑ oder U↑?", "Power reduction: high I or high U?", "Teljesítmény csökkentés: magas I vagy magas U?", "Reducere putere: I mare sau U mare?", lang),
      [q4("Magas U (alacsony I) jobb; Joule-Loss ∝ I² → kicsi I = kicsi Loss", "High U (low I) better; Joule loss ∝ I² → small I = small loss", "Magas U (alacsony I) jobb; Joule-veszteség ∝ I² → kis I = kis veszteség", "U mare (I mic) mai bine; pierdere Joule ∝ I² → I mic = pierdere mică", lang)]),
  ];
}

// ═════════════════════════════════════════════════════════════════════════════
// 4. ELECTRIC ENERGY (Elektromos energia: W = P × t = U × I × t)
// ═════════════════════════════════════════════════════════════════════════════

function generateElectricEnergyMCQ(lang = "en", seed = 0): CurriculumMCQ[] {
  const rng = mulberry32(seed);
  const questions: CurriculumMCQ[] = [];

  for (let i = 0; i < 7; i++) {
    questions.push(createMCQ("electricity", "electric_energy",
      q4("Elektrische Arbeit/Energie W?", "Electric work/energy W?", "Elektromos munka/energia W?", "Muncă/energie electrică W?", lang),
      q4("W = P × t [J]; Joule (SI) vagy kWh (praktisch)", "W = P × t [J]; joule (SI) or kWh (practical)", "W = P × t [J]; joule (SI) vagy kWh (praktikus)", "W = P × t [J]; joule (SI) sau kWh (practic)", lang),
      [q4("W = U / I", "W = U / I", "W = U / I", "W = U / I", lang),
       q4("W = I × t", "W = I × t", "W = I × t", "W = I × t", lang),
       q4("W = R × I", "W = R × I", "W = R × I", "W = R × I", lang)], rng));
  }

  for (let i = 0; i < 8; i++) {
    const P = 100 * (i + 1);
    const t_hours = (i + 1);
    const W_J = P * t_hours * 3600;
    const W_kWh = (P / 1000) * t_hours;
    questions.push(createMCQ("electricity", "electric_energy",
      q4(`Energie: P=${P}W, t=${t_hours}h → W=?kWh`, `Energy: P=${P}W, t=${t_hours}h → W=?kWh`, `Energia: P=${P}W, t=${t_hours}h → W=?kWh`, `Energie: P=${P}W, t=${t_hours}h → W=?kWh`, lang),
      q4(`${W_kWh}kWh`, `${W_kWh}kWh`, `${W_kWh}kWh`, `${W_kWh}kWh`, lang),
      [q4(`${W_kWh*1000}J`, `${W_kWh*1000}J`, `${W_kWh*1000}J`, `${W_kWh*1000}J`, lang),
       q4(`${W_kWh/2}kWh`, `${W_kWh/2}kWh`, `${W_kWh/2}kWh`, `${W_kWh/2}kWh`, lang),
       q4(`${W_kWh*2}kWh`, `${W_kWh*2}kWh`, `${W_kWh*2}kWh`, `${W_kWh*2}kWh`, lang)], rng));
  }

  for (let i = 0; i < 8; i++) {
    questions.push(createMCQ("electricity", "electric_energy",
      q4("1 kWh = ? J?", "1 kWh = ? J?", "1 kWh = ? J?", "1 kWh = ? J?", lang),
      q4("3,6 × 10⁶ J", "3.6 × 10⁶ J", "3,6 × 10⁶ J", "3,6 × 10⁶ J", lang),
      [q4("1 × 10⁶ J", "1 × 10⁶ J", "1 × 10⁶ J", "1 × 10⁶ J", lang),
       q4("10⁶ J", "10⁶ J", "10⁶ J", "10⁶ J", lang),
       q4("1000 J", "1000 J", "1000 J", "1000 J", lang)], rng));
  }

  for (let i = 0; i < 8; i++) {
    questions.push(createMCQ("electricity", "electric_energy",
      q4("Stromzähler in kWh: warum?", "Electricity meter in kWh: why?", "Áramszámláló kWh-ban: miért?", "Contor energie în kWh: de ce?", lang),
      q4("Praktisch größere Einheit; Haushaltsgeräte: ~1-10kW × mehrere h/Tag", "Practical large unit; household devices: ~1-10kW × hours/day", "Praktikus nagyobb egység; háztartási készülékek: ~1-10kW × óra/nap", "Unitate practică mare; aparate casă: ~1-10kW × ore/zi", lang),
      [q4("Exakte Einheit SI", "Exact SI unit", "Pontos SI egység", "Unitate SI exactă", lang),
       q4("Nur europäisch", "Only european", "Csak európai", "Doar european", lang),
       q4("Für Industrie", "For industry", "Az ipar számára", "Pentru industrie", lang)], rng));
  }

  return questions;
}

function generateElectricEnergyTyping(lang = "en", seed = 0): CurriculumTyping[] {
  return [
    createTyping("electricity", "electric_energy", q4("Energie Formeln?", "Energy formulas?", "Energia képletek?", "Formule energie?", lang),
      [q4("W = P × t = U × I × t = I² × R × t [J]; W = P × t [kWh] wenn P in kW, t in h", "W = P × t = U × I × t = I² × R × t [J]; W = P × t [kWh] if P in kW, t in h", "W = P × t = U × I × t = I² × R × t [J]; W = P × t [kWh] ha P kW-ban, t óra", "W = P × t = U × I × t = I² × R × t [J]; W = P × t [kWh] dacă P în kW, t în ore", lang)]),
    createTyping("electricity", "electric_energy", q4("kWh zu Joule Konversion?", "kWh to joule conversion?", "kWh joule-ra konverzió?", "kWh în jouli conversie?", lang),
      [q4("1 kWh = 1000 W × 3600 s = 3,6 × 10⁶ J", "1 kWh = 1000 W × 3600 s = 3.6 × 10⁶ J", "1 kWh = 1000 W × 3600 s = 3,6 × 10⁶ J", "1 kWh = 1000 W × 3600 s = 3,6 × 10⁶ J", lang)]),
    createTyping("electricity", "electric_energy", q4("Glühbirne 60W, 8h/Tag?", "Bulb 60W, 8h/day?", "Izzó 60W, 8h/nap?", "Bec 60W, 8h/zi?", lang),
      [q4("W = 60W × 8h = 480 Wh = 0,48 kWh/nap", "W = 60W × 8h = 480 Wh = 0.48 kWh/day", "W = 60W × 8h = 480 Wh = 0,48 kWh/nap", "W = 60W × 8h = 480 Wh = 0,48 kWh/zi", lang)]),
    createTyping("electricity", "electric_energy", q4("Kühlschrank 150W, 365 Tage → kWh/Jahr?", "Fridge 150W, 365 days → kWh/year?", "Hűtőszekrény 150W, 365 nap → kWh/év?", "Frigider 150W, 365 zile → kWh/an?", lang),
      [q4("W = 150W × 24h × 365 = 1,314 MWh ≈ 1,31 MWh/év", "W = 150W × 24h × 365 = 1.314 MWh ≈ 1.31 MWh/year", "W = 150W × 24h × 365 = 1,314 MWh ≈ 1,31 MWh/év", "W = 150W × 24h × 365 = 1,314 MWh ≈ 1,31 MWh/an", lang)]),
    createTyping("electricity", "electric_energy", q4("Stromkosten Berechnung?", "Electricity cost calculation?", "Áramköltség számítás?", "Calcul cost electricitate?", lang),
      [q4("Költség = W [kWh] × Tarifa [€/kWh]; z.B. 100 kWh × 0,20€/kWh = 20€", "Cost = W [kWh] × Rate [€/kWh]; e.g. 100 kWh × 0.20€/kWh = 20€", "Költség = W [kWh] × Tarifa [€/kWh]; pl. 100 kWh × 0,20€/kWh = 20€", "Cost = W [kWh] × Tarif [€/kWh]; ex. 100 kWh × 0,20€/kWh = 20€", lang)]),
    createTyping("electricity", "electric_energy", q4("Energiesparen: Konvention?", "Energy saving: convention?", "Energia spórolás: konvenció?", "Economie energie: convenție?", lang),
      [q4("LED < Energiesparlampe < Glühbirne; LED 80% weniger Energie für gleiche Helligkeit", "LED < compact fluorescent < incandescent; LED 80% less energy for same brightness", "LED < energiatakarékos < izzó; LED 80% kevesebb energia azonos fényerőhöz", "LED < compact fluorescent < incandescent; LED 80% mai puțină energie pentru aceeași luminozitate", lang)]),
    createTyping("electricity", "electric_energy", q4("Stromleitung Verlust Orslow?", "Power line loss: cause?", "Áramvezeték veszteség: oka?", "Pierdere linie putere: cauza?", lang),
      [q4("Joule-Wärmeverlust in Leitungswiderstand: Q = I² × R × t; deshalb Hochspannung/kleiner I", "Joule heat loss in line resistance: Q = I² × R × t; that's why high voltage/small I", "Joule-hőveszteség vezetési ellenállásban: Q = I² × R × t; ezért nagyfeszültség/kis I", "Pierdere căldură Joule în rezistență linie: Q = I² × R × t; de aceea înaltă tensiune/mic I", lang)]),
    createTyping("electricity", "electric_energy", q4("Batterie Kapazität Ah?", "Battery capacity Ah?", "Akkumulátor kapacitás Ah?", "Capacitate baterie Ah?", lang),
      [q4("Ah [Ampere×Stunde] = Q [Coulomb] / 3600; Ladungsmenge, nicht Energie!", "Ah [Ampere×hour] = Q [coulomb] / 3600; charge amount, not energy!", "Ah [Amper×Óra] = Q [coulomb] / 3600; töltésmennyiség, nem energia!", "Ah [Amper×ora] = Q [coulomb] / 3600; cantitate sarcină, nu energie!", lang)]),
  ];
}

// ═════════════════════════════════════════════════════════════════════════════
// 5. SEMICONDUCTORS (Félvezetők: Diode, Tranzisztor, Chip)
// ═════════════════════════════════════════════════════════════════════════════

function generateSemiconductorsMCQ(lang = "en", seed = 0): CurriculumMCQ[] {
  const rng = mulberry32(seed);
  const questions: CurriculumMCQ[] = [];

  for (let i = 0; i < 7; i++) {
    questions.push(createMCQ("electricity", "semiconductors",
      q4("Halbleiter: Definition und Beispiele?", "Semiconductors: definition and examples?", "Félvezetők: meghatározás és példák?", "Semiconductori: definiție și exemple?", lang),
      q4("Zwischen Leiter und Isolator; Si (Silizium), Ge (Germanium); Leitfähigkeit mit T↑", "Between conductor and insulator; Si (silicon), Ge (germanium); conductivity ↑ with T↑", "Vezető és szigetelő között; Si (szilícium), Ge (germánium); vezetőképesség T↑-vel nő", "Între conductor și izolator; Si (siliciu), Ge (germaniu); conductibilitate ↑ cu T↑", lang),
      [q4("Nur Leiter", "Only conductors", "Csak vezetők", "Doar conductori", lang),
       q4("Nur Isolator", "Only insulators", "Csak szigetelők", "Doar izolatori", lang),
       q4("Keine Unterschied", "No difference", "Nincs különbség", "Fără diferență", lang)], rng));
  }

  for (let i = 0; i < 7; i++) {
    questions.push(createMCQ("electricity", "semiconductors",
      q4("P-Dotierung (Doping)?", "P-doping?", "P-szennyezés?", "Dopaj P?", lang),
      q4("Akzeptor-Atome (B, Al, Ga); fehlende Elektron = Loch (hole); p-Halbleiter", "Acceptor atoms (B, Al, Ga); missing electron = hole; p-semiconductor", "Akceptor atomok (B, Al, Ga); hiányzó elektron = lyuk; p-félvezetô", "Atomi acceptor (B, Al, Ga); electron lipsit = gaură; p-semiconductor", lang),
      [q4("N-Dotierung Sache", "N-doping thing", "N-szennyezés dolog", "Dopaj N chestie", lang),
       q4("Negativ Loch", "Negative hole", "Negatív lyuk", "Gaură negativă", lang),
       q4("Leitfähigkeit ↓", "Conductivity ↓", "Vezetőképesség ↓", "Conductibilitate ↓", lang)], rng));
  }

  for (let i = 0; i < 7; i++) {
    questions.push(createMCQ("electricity", "semiconductors",
      q4("N-Dotierung (Doping)?", "N-doping?", "N-szennyezés?", "Dopaj N?", lang),
      q4("Donator-Atome (P, As, Sb); überschüssiges Elektron; n-Halbleiter", "Donor atoms (P, As, Sb); excess electron; n-semiconductor", "Donor atomok (P, As, Sb); felesleges elektron; n-félvezetó", "Atomi donatori (P, As, Sb); electron în exces; n-semiconductor", lang),
      [q4("P-Dotierung Sache", "P-doping thing", "P-szennyezés dolog", "Dopaj P chestie", lang),
       q4("Positiv Elektron", "Positive electron", "Pozitív elektron", "Electron pozitiv", lang),
       q4("Leitfähigkeit ↓", "Conductivity ↓", "Vezetőképesség ↓", "Conductibilitate ↓", lang)], rng));
  }

  for (let i = 0; i < 8; i++) {
    questions.push(createMCQ("electricity", "semiconductors",
      q4("PN-Diode: Durchlass- vs Sperrrichtung?", "PN-diode: forward vs reverse bias?", "PN-dióda: nyitó és blokkoló irány?", "Diodă PN: polarizare directă vs inversă?", lang),
      q4("Durchlass: U_anode > U_kathode → Strom fließt; Sperrrichtung: umgekehrt → kein Strom", "Forward: U_anode > U_cathode → current flows; reverse: opposite → no current", "Nyitó: U_anód > U_katód → áram folyik; blokkoló: fordított → nincs áram", "Polarizare directă: U_anod > U_catod → curent curgător; inversă: opus → fără curent", lang),
      [q4("Gleich beide", "Same both", "Mindkettő azonos", "Ambele la fel", lang),
       q4("Keine Unterschied", "No difference", "Nincs különbség", "Fără diferență", lang),
       q4("Immer blockiert", "Always blocked", "Mindig blokkolva", "Mereu blocat", lang)], rng));
  }

  return questions;
}

function generateSemiconductorsTyping(lang = "en", seed = 0): CurriculumTyping[] {
  return [
    createTyping("electricity", "semiconductors", q4("Halbleiter vs Leiter vs Isolator?", "Semiconductor vs conductor vs insulator?", "Félvezetô vs vezető vs szigetelô?", "Semiconductor vs conductor vs izolator?", lang),
      [q4("Halbleiter: ρ mittel, ~10⁻⁶...10⁴ Ω⋅m; Leiter: ρ klein <10⁻⁶; Isolator: ρ groß >10⁴ Ω⋅m", "Semiconductor: ρ medium, ~10⁻⁶...10⁴ Ω⋅m; conductor: ρ small <10⁻⁶; insulator: ρ large >10⁴ Ω⋅m", "Félvezetô: ρ közepes, ~10⁻⁶...10⁴ Ω⋅m; vezető: ρ kicsi <10⁻⁶; szigetelô: ρ nagy >10⁴ Ω⋅m", "Semiconductor: ρ mediu, ~10⁻⁶...10⁴ Ω⋅m; conductor: ρ mic <10⁻⁶; izolator: ρ mare >10⁴ Ω⋅m", lang)]),
    createTyping("electricity", "semiconductors", q4("Dotierung Effekt auf ρ?", "Doping effect on ρ?", "Szennyezés hatása a ρ-ra?", "Efect dopaj pe ρ?", lang),
      [q4("Dotierung ↓ ρ drastisch; rein Si: ρ=10⁶ Ω⋅m, dotiert: ρ=10⁻³...1 Ω⋅m", "Doping ↓ ρ drastically; pure Si: ρ=10⁶ Ω⋅m, doped: ρ=10⁻³...1 Ω⋅m", "Szennyezés ↓ ρ drámaian; tiszta Si: ρ=10⁶ Ω⋅m, szennyezett: ρ=10⁻³...1 Ω⋅m", "Dopaj ↓ ρ dramatic; Si pur: ρ=10⁶ Ω⋅m, dopat: ρ=10⁻³...1 Ω⋅m", lang)]),
    createTyping("electricity", "semiconductors", q4("Diode: Durchbruch-Spannung?", "Diode: breakdown voltage?", "Dióda: átütési feszültség?", "Diodă: tensiune pătrundere?", lang),
      [q4("U_z (Zener); sperrrichtung: U_z überschritten → plötzlich Strom; Zenerdiode für Spannungsregelung", "U_z (Zener); reverse bias: U_z exceeded → sudden current; Zener diode for voltage regulation", "U_z (Zener); blokkoló: U_z túllépve → hirtelen áram; Zener-dióda feszültség szabályozáshoz", "U_z (Zener); polarizare inversă: U_z depășit → curent brusc; diodă Zener pentru reglare tensiune", lang)]),
    createTyping("electricity", "semiconductors", q4("Tranzisztor: Funktion?", "Transistor: function?", "Tranzisztor: funkció?", "Tranzistor: funcție?", lang),
      [q4("Strom-/Spannungsverstärker (BJT, FET); kleine Basis/Gate Strom → große Kollektor/Drain Strom", "Current/voltage amplifier (BJT, FET); small base/gate current → large collector/drain current", "Áram/feszültség erôsítô (BJT, FET); kicsi bázis/kapu áram → nagy kollektor/lefolyó áram", "Amplificator curent/tensiune (BJT, FET); curent mic bază/poartă → curent mare colector/drenaj", lang)]),
    createTyping("electricity", "semiconductors", q4("Bandgap energie E_g?", "Bandgap energy E_g?", "Sáv-rés energia E_g?", "Energie bandă interzisă E_g?", lang),
      [q4("Minimum energia részecskéknek valencia → vezetési sáv; Si: ~1,1 eV, Ge: ~0,66 eV, GaAs: ~1,43 eV", "Minimum energy for particle valence → conduction band; Si: ~1.1 eV, Ge: ~0.66 eV, GaAs: ~1.43 eV", "Minimum energia valentcia → vezetési sáv; Si: ~1,1 eV, Ge: ~0,66 eV, GaAs: ~1,43 eV", "Energie minimă valență → bandă conducție; Si: ~1,1 eV, Ge: ~0,66 eV, GaAs: ~1,43 eV", lang)]),
    createTyping("electricity", "semiconductors", q4("LED (light-emitting diode)?", "LED (light-emitting diode)?", "LED (fénykibocs. dióda)?", "LED (diodă electroluminescent)?", lang),
      [q4("Forward-biased PN junction; elektron-lyuk rekombináció → foton kibocsátás; szín = E_g", "Forward-biased PN junction; electron-hole recombination → photon emission; color = E_g", "Nyitott PN átmenet; elektron-lyuk rekombináció → foton kibocsátás; szín = E_g", "Joncțiune PN polarizată direct; recombinare electron-gaură → emisie foton; culoare = E_g", lang)]),
    createTyping("electricity", "semiconductors", q4("Thermistor (thermal resistor)?", "Thermistor (thermal resistor)?", "Termisztor (hôellenállás)?", "Termistor (rezistor termic)?", lang),
      [q4("Halbleiter-ellenállás; NTC: ↑T → ↓R (negativ temp.koeff); PTC: ↑T → ↑R", "Semiconductor resistor; NTC: ↑T → ↓R (negative temp. coeff); PTC: ↑T → ↑R", "Félvezetô ellenállás; NTC: ↑T → ↓R (negatív hôm. koeff); PTC: ↑T → ↑R", "Rezistor semiconductor; NTC: ↑T → ↓R (coef. temp. negativ); PTC: ↑T → ↑R", lang)]),
    createTyping("electricity", "semiconductors", q4("IC (Integrated Circuit)?", "IC (Integrated Circuit)?", "IC (integrált áramkör)?", "IC (Circuit integrat)?", lang),
      [q4("Több 10⁶...10⁹ tranzisztor egy chip-en; modern CPU/GPU alapja", "Millions...billions transistors on one chip; basis of modern CPU/GPU", "Több 10⁶...10⁹ tranzisztor egy chip-en; modern CPU/GPU alapja", "Milioane...miliarde de tranzistori pe un cip; bază CPU/GPU modern", lang)]),
  ];
}

// ─── FINAL EXPORT ──────────────────────────────────────────────────────────

export const K8_ELECTRICITY_GENERATORS: Record<string, (lang?: string, seed?: number) => CurriculumQuestion[]> = {
  ohm_law: (lang = "en", seed = 0) => [...generateOhmLawMCQ(lang, seed), ...generateOhmLawTyping(lang, seed)],
  ohm_law_mcq: (lang = "en", seed = 0) => generateOhmLawMCQ(lang, seed),
  ohm_law_typing: (lang = "en", seed = 0) => generateOhmLawTyping(lang, seed),

  resistance_calc: (lang = "en", seed = 0) => [...generateResistanceCalcMCQ(lang, seed), ...generateResistanceCalcTyping(lang, seed)],
  resistance_calc_mcq: (lang = "en", seed = 0) => generateResistanceCalcMCQ(lang, seed),
  resistance_calc_typing: (lang = "en", seed = 0) => generateResistanceCalcTyping(lang, seed),

  electric_power: (lang = "en", seed = 0) => [...generateElectricPowerMCQ(lang, seed), ...generateElectricPowerTyping(lang, seed)],
  electric_power_mcq: (lang = "en", seed = 0) => generateElectricPowerMCQ(lang, seed),
  electric_power_typing: (lang = "en", seed = 0) => generateElectricPowerTyping(lang, seed),

  electric_energy: (lang = "en", seed = 0) => [...generateElectricEnergyMCQ(lang, seed), ...generateElectricEnergyTyping(lang, seed)],
  electric_energy_mcq: (lang = "en", seed = 0) => generateElectricEnergyMCQ(lang, seed),
  electric_energy_typing: (lang = "en", seed = 0) => generateElectricEnergyTyping(lang, seed),

  semiconductors: (lang = "en", seed = 0) => [...generateSemiconductorsMCQ(lang, seed), ...generateSemiconductorsTyping(lang, seed)],
  semiconductors_mcq: (lang = "en", seed = 0) => generateSemiconductorsMCQ(lang, seed),
  semiconductors_typing: (lang = "en", seed = 0) => generateSemiconductorsTyping(lang, seed),
};
