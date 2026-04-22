// ─── PHYSICS GENERATORS K7: WORK, POWER & ENERGY ────────────────────────
// "Arbeit & Leistung" theme — work-energy theorem, power, kinetic/potential energy
// Grade 7 (13-14 years old)
//
// Generates ~32-35 MCQ + 8 Typing questions per subtopic using seeded PRNG
// W = F·s·cos(θ), P = W/t, Ek = ½mv², Ep = mgh

import type { CurriculumQuestion, CurriculumMCQ, CurriculumTyping } from "./curriculumTypes";

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

function q4(de: string, en: string, hu: string, ro: string, lang = "en"): string {
  const map: Record<string, string> = { de, en, hu, ro };
  return map[lang] || en;
}

function createMCQ(
  topic: string,
  subtopic: string,
  question: string,
  correct: string,
  wrong: string[],
  rng: () => number
): CurriculumMCQ {
  const options = [...wrong, correct];
  for (let i = options.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [options[i], options[j]] = [options[j], options[i]];
  }
  return {
    type: "mcq" as const,
    topic,
    subtopic,
    question,
    options,
    correct: options.indexOf(correct),
  };
}

function createTyping(
  topic: string,
  subtopic: string,
  question: string,
  answers: string[]
): CurriculumTyping {
  return {
    type: "typing",
    topic,
    subtopic,
    question,
    answer: answers[0],
  };
}

// ─── WORK (W = F × s × cos θ) ────────────────────────────────────────────

function generateWorkMCQ(lang = "en", seed = 0): CurriculumMCQ[] {
  const rng = mulberry32(seed);
  const questions: CurriculumMCQ[] = [];

  for (let i = 0; i < 7; i++) {
    questions.push(createMCQ("work_power", "work", q4("Arbeit Definition?", "Work definition?", "Munka definíciója?", "Definiție lucru mecanic?", lang),
      q4("W = F × s × cos(θ); Kraft × Weg × Winkel-Kosinus", "W = F × s × cos(θ); Force × distance × angle cosine", "W = F × s × cos(θ); Erő × távolság × szög kosszinusza", "W = F × s × cos(θ); Forță × distanță × cosinus unghi", lang),
      [q4("W = F/s", "W = F/s", "W = F/s", "W = F/s", lang), q4("W = F + s", "W = F + s", "W = F + s", "W = F + s", lang), q4("W = m × g × h nur", "W = m × g × h only", "W = m × g × h csak", "W = m × g × h doar", lang)], rng));
  }

  for (let i = 0; i < 7; i++) {
    questions.push(createMCQ("work_power", "work", q4("Positive vs Negative Arbeit?", "Positive vs Negative work?", "Pozitív vs Negatív munka?", "Muncă pozitivă vs negativă?", lang),
      q4("Positiv: Kraft & Bewegung gleiche Richtung (θ<90°); Negativ: Kraft gegen Bewegung (θ>90°)", "Positive: force & motion same direction (θ<90°); Negative: force against motion (θ>90°)", "Pozitív: erő & mozgás ugyanaz irány (θ<90°); Negatív: erő ellen mozgás (θ>90°)", "Pozitivă: forță & mișcare aceeași direcție (θ<90°); Negativă: forță contra mișcării (θ>90°)", lang),
      [q4("Immer gleiches Vorzeichen", "Same sign always", "Mindig ugyanaz a jel", "Întotdeauna același semn", lang), q4("Nur bei Reibung", "Only friction", "Csak súrlódás", "Doar frecare", lang), q4("Winkel nicht wichtig", "Angle doesn't matter", "Szög nem fontos", "Unghiul nu contează", lang)], rng));
  }

  for (let i = 0; i < 7; i++) {
    const scenario = pick([
      { q: q4("Kasten 10m horizontal mit 50N Kraft gezogen (0°)?", "Box 10m horizontal with 50N force (0°)?", "Doboz 10m vízszintesen 50N erővel húzva (0°)?", "Cutie 10m orizontal cu forță 50N (0°)?", lang), a: q4("500 J (cos 0°=1)", "500 J (cos 0°=1)", "500 J (cos 0°=1)", "500 J (cos 0°=1)", lang) },
      { q: q4("Kasten 5m vertikal gegen g (θ=180°)?", "Box 5m vertical against g (θ=180°)?", "Doboz 5m függőlegesen g ellen (θ=180°)?", "Cutie 5m vertical contra g (θ=180°)?", lang), a: q4("Negativ: -m×g×h (cos180°=-1)", "Negative: -m×g×h (cos180°=-1)", "Negatív: -m×g×h (cos180°=-1)", "Negativă: -m×g×h (cos180°=-1)", lang) },
      { q: q4("Kasten 2m mit 40N senkrecht zu Weg?", "Box 2m with 40N perpendicular to path?", "Doboz 2m 40N merőlegesen az úthoz?", "Cutie 2m cu 40N perpendicular pe cale?", lang), a: q4("0 J (cos 90°=0)", "0 J (cos 90°=0)", "0 J (cos 90°=0)", "0 J (cos 90°=0)", lang) },
    ], rng);
    questions.push(createMCQ("work_power", "work", scenario.q, scenario.a, [q4("100 J", "100 J", "100 J", "100 J", lang)], rng));
  }

  for (let i = 0; i < 6; i++) {
    questions.push(createMCQ("work_power", "work", q4("Arbeit in SI-Einheit?", "Work in SI unit?", "Munka SI-egységben?", "Lucru SI unitate?", lang),
      q4("Joule (J) = Newton × Meter", "Joule (J) = Newton × Meter", "Joule (J) = Newton × Méter", "Joule (J) = Newton × Metru", lang),
      [q4("Watt (W)", "Watt (W)", "Watt (W)", "Watt (W)", lang), q4("Erg", "Erg", "Erg", "Erg", lang), q4("Kalorie", "Calorie", "Kalória", "Calorie", lang)], rng));
  }

  return questions;
}

function generateWorkTyping(lang = "en", seed = 0): CurriculumTyping[] {
  return [
    createTyping("work_power", "work", q4("Arbeit-Energie-Satz?", "Work-energy theorem?", "Munka-energia tétel?", "Teorema muncă-energie?", lang),
      [q4("W_netto = ΔEk = ½m(v_f² - v_i²); Nettoarbeit = Kinetische Energieänderung", "W_net = ΔEk = ½m(v_f² - v_i²); net work = change in kinetic energy", "W_netto = ΔEk = ½m(v_f² - v_i²); nettó munka = mozgási energia változása", "W_net = ΔEk = ½m(v_f² - v_i²); munca netă = schimbare energie cinetică", lang)]),
    createTyping("work_power", "work", q4("Arbeit gegen Reibung?", "Work against friction?", "Munka súrlódás ellen?", "Lucru contra fricțiunei?", lang),
      [q4("W_friction = -μ × N × d; negativ (Energie geht verloren als Wärme)", "W_friction = -μ × N × d; negative (energy lost as heat)", "W_friction = -μ × N × d; negatív (energia hővé alakul)", "W_friction = -μ × N × d; negativ (energie pierdută ca căldură)", lang)]),
    createTyping("work_power", "work", q4("Konservative vs Nicht-konservativ?", "Conservative vs non-conservative force?", "Konzervatív vs nem-konzervatív erő?", "Forță conservativă vs neconservativă?", lang),
      [q4("Konservativ (Gravitation, Feder): nur Position wichtig, Weg egal; Nicht-konservativ (Reibung): Weg wichtig, Energieverlust", "Conservative (gravity, spring): only position matters, path independent; Non-conservative (friction): path matters, energy loss", "Konzervatív (gravitáció, rugó): csak pozíció fontos, út független; Nem-konzervatív (súrlódás): út fontos, energiaveszteség", "Conservativă (gravitație, arc): doar poziția importantă, cale independentă; Neconservativă (frecare): cale importantă, pierdere energie", lang)]),
    createTyping("work_power", "work", q4("Arbeit durch konstante Kraft?", "Work with constant force?", "Munka állandó erővel?", "Lucru cu forță constantă?", lang),
      [q4("W = F·Δs·cos(θ); wenn θ=0° → W = F·Δs; wenn θ=180° → W = -F·Δs", "W = F·Δs·cos(θ); if θ=0° → W = F·Δs; if θ=180° → W = -F·Δs", "W = F·Δs·cos(θ); ha θ=0° → W = F·Δs; ha θ=180° → W = -F·Δs", "W = F·Δs·cos(θ); dacă θ=0° → W = F·Δs; dacă θ=180° → W = -F·Δs", lang)]),
  ];
}

// ─── POWER (P = W/t) ──────────────────────────────────────────────────

function generatePowerMCQ(lang = "en", seed = 0): CurriculumMCQ[] {
  const rng = mulberry32(seed);
  const questions: CurriculumMCQ[] = [];

  for (let i = 0; i < 7; i++) {
    questions.push(createMCQ("work_power", "power", q4("Leistung Definition?", "Power definition?", "Teljesítmény definíciója?", "Definiție putere?", lang),
      q4("P = W/t; Arbeit pro Zeit [Watt = Joule/Sekunde]", "P = W/t; work per time [Watt = Joule/second]", "P = W/t; munka per idő [Watt = Joule/másodperc]", "P = W/t; lucru per timp [Watt = Joule/secundă]", lang),
      [q4("P = F × v nur", "P = F × v only", "P = F × v csak", "P = F × v doar", lang), q4("P = m × g", "P = m × g", "P = m × g", "P = m × g", lang), q4("P = E/m", "P = E/m", "P = E/m", "P = E/m", lang)], rng));
  }

  for (let i = 0; i < 7; i++) {
    questions.push(createMCQ("work_power", "power", q4("Durchschnittliche Leistung?", "Average power?", "Átlagos teljesítmény?", "Putere medie?", lang),
      q4("P_avg = W_total / t_total; Gesamtarbeit geteilt durch Gesamtzeit", "P_avg = W_total / t_total; total work divided by total time", "P_avg = W_total / t_total; teljes munka osztva teljes idővel", "P_avg = W_total / t_total; lucru total împărțit la timp total", lang),
      [q4("P_avg = W × t", "P_avg = W × t", "P_avg = W × t", "P_avg = W × t", lang), q4("P_avg = F / v", "P_avg = F / v", "P_avg = F / v", "P_avg = F / v", lang), q4("P_avg = m × v", "P_avg = m × v", "P_avg = m × v", "P_avg = m × v", lang)], rng));
  }

  for (let i = 0; i < 7; i++) {
    const example = pick([
      { q: q4("100 J in 5 Sekunden = ?", "100 J in 5 seconds = ?", "100 J 5 másodpercben = ?", "100 J în 5 secunde = ?", lang), a: q4("20 W", "20 W", "20 W", "20 W", lang) },
      { q: q4("2000 J in 10 s = ?", "2000 J in 10 s = ?", "2000 J 10 másodpercben = ?", "2000 J în 10 sec = ?", lang), a: q4("200 W", "200 W", "200 W", "200 W", lang) },
      { q: q4("Wie lange 1500 J mit 250 W?", "How long 1500 J at 250 W?", "Meddig 1500 J 250 W-tal?", "Cât timp 1500 J la 250 W?", lang), a: q4("6 Sekunden", "6 seconds", "6 másodperc", "6 secunde", lang) },
    ], rng);
    questions.push(createMCQ("work_power", "power", example.q, example.a, [q4("15 W", "15 W", "15 W", "15 W", lang)], rng));
  }

  for (let i = 0; i < 6; i++) {
    questions.push(createMCQ("work_power", "power", q4("Leistung in Watt?", "Power in Watts?", "Teljesítmény Watt-ban?", "Putere în Wați?", lang),
      q4("1 Watt = 1 Joule/Sekunde = 1 Newton×Meter/Sekunde", "1 Watt = 1 Joule/second = 1 Newton×Meter/second", "1 Watt = 1 Joule/másodperc = 1 Newton×Méter/másodperc", "1 Watt = 1 Joule/secundă = 1 Newton×Metru/secundă", lang),
      [q4("1 Watt = 1 kg×m/s", "1 Watt = 1 kg×m/s", "1 Watt = 1 kg×m/s", "1 Watt = 1 kg×m/s", lang), q4("1 Watt = 1 kg×m²/s²", "1 Watt = 1 kg×m²/s²", "1 Watt = 1 kg×m²/s²", "1 Watt = 1 kg×m²/s²", lang), q4("1 Watt = 1 kg²/s", "1 Watt = 1 kg²/s", "1 Watt = 1 kg²/s", "1 Watt = 1 kg²/s", lang)], rng));
  }

  return questions;
}

function generatePowerTyping(lang = "en", seed = 0): CurriculumTyping[] {
  return [
    createTyping("work_power", "power", q4("Leistung = Kraft × Geschwindigkeit?", "Power = Force × velocity?", "Teljesítmény = Erő × sebesség?", "Putere = Forță × viteză?", lang),
      [q4("Ja: P = F·v (wenn F || v); P = F·v·cos(θ) allgemein", "Yes: P = F·v (when F || v); P = F·v·cos(θ) in general", "Igen: P = F·v (ha F || v); P = F·v·cos(θ) általánosan", "Da: P = F·v (când F || v); P = F·v·cos(θ) general", lang)]),
    createTyping("work_power", "power", q4("Kilowatt vs Watt?", "Kilowatt vs Watt?", "Kilowatt vs Watt?", "Kilowatt vs Watt?", lang),
      [q4("1 kW = 1000 W; 1 MW = 1.000.000 W; 1 HP = 746 W (Pferdestärke)", "1 kW = 1000 W; 1 MW = 1,000,000 W; 1 HP = 746 W (horsepower)", "1 kW = 1000 W; 1 MW = 1.000.000 W; 1 LE = 746 W (lóerő)", "1 kW = 1000 W; 1 MW = 1.000.000 W; 1 CP = 746 W (putere cai)", lang)]),
    createTyping("work_power", "power", q4("Momentanleistung?", "Instantaneous power?", "Pillanatnyi teljesítmény?", "Putere instantanee?", lang),
      [q4("P = dW/dt = F·v; Derivata Arbeit nach Zeit", "P = dW/dt = F·v; derivative of work with respect to time", "P = dW/dt = F·v; munka deriváltja az idő szerint", "P = dW/dt = F·v; derivata lucrului după timp", lang)]),
  ];
}

// ─── KINETIC ENERGY (Ek = ½mv²) ──────────────────────────────────────────

function generateKineticEnergyCQ(lang = "en", seed = 0): CurriculumMCQ[] {
  const rng = mulberry32(seed);
  const questions: CurriculumMCQ[] = [];

  for (let i = 0; i < 7; i++) {
    questions.push(createMCQ("work_power", "kinetic_energy_calc", q4("Kinetische Energie Definition?", "Kinetic energy definition?", "Mozgási energia definíciója?", "Definiție energie cinetică?", lang),
      q4("Ek = ½ × m × v²; Halbe Masse mal Geschwindigkeit-Quadrat", "Ek = ½ × m × v²; half mass times velocity squared", "Ek = ½ × m × v²; fél tömeg szorozva sebesség négyzetével", "Ek = ½ × m × v²; jumătate masă ori viteză la pătrat", lang),
      [q4("Ek = m × v", "Ek = m × v", "Ek = m × v", "Ek = m × v", lang), q4("Ek = m × g × h", "Ek = m × g × h", "Ek = m × g × h", "Ek = m × g × h", lang), q4("Ek = F × s", "Ek = F × s", "Ek = F × s", "Ek = F × s", lang)], rng));
  }

  for (let i = 0; i < 7; i++) {
    const example = pick([
      { q: q4("2 kg mit 10 m/s: Ek?", "2 kg at 10 m/s: Ek?", "2 kg 10 m/s-mal: Ek?", "2 kg la 10 m/s: Ek?", lang), a: q4("100 J", "100 J", "100 J", "100 J", lang) },
      { q: q4("5 kg mit 4 m/s: Ek?", "5 kg at 4 m/s: Ek?", "5 kg 4 m/s-mal: Ek?", "5 kg la 4 m/s: Ek?", lang), a: q4("40 J", "40 J", "40 J", "40 J", lang) },
      { q: q4("3 kg mit 0 m/s: Ek?", "3 kg at 0 m/s: Ek?", "3 kg 0 m/s-mal: Ek?", "3 kg la 0 m/s: Ek?", lang), a: q4("0 J", "0 J", "0 J", "0 J", lang) },
    ], rng);
    questions.push(createMCQ("work_power", "kinetic_energy_calc", example.q, example.a, [q4("200 J", "200 J", "200 J", "200 J", lang)], rng));
  }

  for (let i = 0; i < 6; i++) {
    questions.push(createMCQ("work_power", "kinetic_energy_calc", q4("Ek proportional zu v?", "Ek proportional to v?", "Ek arányos-e v-hez?", "Ek proporțional cu v?", lang),
      q4("Nein! Ek ~ v² (quadratisch); Verdopplung v → 4× Ek", "No! Ek ∝ v² (quadratic); doubling v → 4× Ek", "Nem! Ek ~ v² (négyzetes); v megduplázása → 4× Ek", "Nu! Ek ∝ v² (pătratic); dublare v → 4× Ek", lang),
      [q4("Ja, linear", "Yes, linear", "Igen, lineáris", "Da, linear", lang), q4("Ja, kubisch", "Yes, cubic", "Igen, köbös", "Da, cubic", lang), q4("Nein, konstant", "No, constant", "Nem, állandó", "Nu, constant", lang)], rng));
  }

  return questions;
}

function generateKineticEnergyTyping(lang = "en", seed = 0): CurriculumTyping[] {
  return [
    createTyping("work_power", "kinetic_energy_calc", q4("Kinetische Energie in Joule?", "Kinetic energy in Joule?", "Mozgási energia Joule-ban?", "Energie cinetică în Joule?", lang),
      [q4("Ek = ½ m v² [kg×(m/s)² = kg×m²/s² = J]", "Ek = ½ m v² [kg×(m/s)² = kg×m²/s² = J]", "Ek = ½ m v² [kg×(m/s)² = kg×m²/s² = J]", "Ek = ½ m v² [kg×(m/s)² = kg×m²/s² = J]", lang)]),
    createTyping("work_power", "kinetic_energy_calc", q4("Änderung kinetisch Energie?", "Change in kinetic energy?", "Mozgási energia változása?", "Schimbare energie cinetică?", lang),
      [q4("ΔEk = Ek_final - Ek_initial = ½m(v_f² - v_i²); = Netto-Arbeit darauf", "ΔEk = Ek_final - Ek_initial = ½m(v_f² - v_i²); = net work on object", "ΔEk = Ek_final - Ek_initial = ½m(v_f² - v_i²); = nettó munka rá", "ΔEk = Ek_final - Ek_initial = ½m(v_f² - v_i²); = munca netă pe obiect", lang)]),
  ];
}

// ─── POTENTIAL ENERGY (Ep = mgh) ──────────────────────────────────────────

function generatePotentialEnergyCQ(lang = "en", seed = 0): CurriculumMCQ[] {
  const rng = mulberry32(seed);
  const questions: CurriculumMCQ[] = [];

  for (let i = 0; i < 7; i++) {
    questions.push(createMCQ("work_power", "potential_energy_calc", q4("Potenzielle Energie (Gravitativ)?", "Potential energy (gravitational)?", "Helyzeti energia (gravitációs)?", "Energie potențială (gravitațională)?", lang),
      q4("Ep = m × g × h; Masse × g × Höhe (Erde: g≈9.81 m/s²)", "Ep = m × g × h; mass × g × height (Earth: g≈9.81 m/s²)", "Ep = m × g × h; tömeg × g × magasság (Föld: g≈9,81 m/s²)", "Ep = m × g × h; masă × g × înălțime (Pământ: g≈9,81 m/s²)", lang),
      [q4("Ep = ½ × m × v²", "Ep = ½ × m × v²", "Ep = ½ × m × v²", "Ep = ½ × m × v²", lang), q4("Ep = F × s", "Ep = F × s", "Ep = F × s", "Ep = F × s", lang), q4("Ep = m × g² × h", "Ep = m × g² × h", "Ep = m × g² × h", "Ep = m × g² × h", lang)], rng));
  }

  for (let i = 0; i < 7; i++) {
    const example = pick([
      { q: q4("2 kg bei 10 m Höhe: Ep?", "2 kg at 10 m height: Ep?", "2 kg 10 m magasságban: Ep?", "2 kg la 10 m înălțime: Ep?", lang), a: q4("~196 J", "~196 J", "~196 J", "~196 J", lang) },
      { q: q4("5 kg bei 5 m: Ep?", "5 kg at 5 m: Ep?", "5 kg 5 m-nél: Ep?", "5 kg la 5 m: Ep?", lang), a: q4("~245 J", "~245 J", "~245 J", "~245 J", lang) },
      { q: q4("10 kg bei h=0: Ep?", "10 kg at h=0: Ep?", "10 kg h=0-nál: Ep?", "10 kg la h=0: Ep?", lang), a: q4("0 J", "0 J", "0 J", "0 J", lang) },
    ], rng);
    questions.push(createMCQ("work_power", "potential_energy_calc", example.q, example.a, [q4("100 J", "100 J", "100 J", "100 J", lang)], rng));
  }

  for (let i = 0; i < 6; i++) {
    questions.push(createMCQ("work_power", "potential_energy_calc", q4("Ep abhängig von Referenzpunkt?", "Ep depends on reference point?", "Ep függ-e a referenciponttól?", "Ep depinde de punct referință?", lang),
      q4("Ja! Ep relativ zu gewähltem h=0; nur ΔEp hat physikalische Bedeutung", "Yes! Ep relative to chosen h=0; only ΔEp has physical meaning", "Igen! Ep relatív a választott h=0-hoz; csak ΔEp-nak van fizikai jelentése", "Da! Ep relativ la h=0 ales; doar ΔEp are sens fizic", lang),
      [q4("Nein, absolut", "No, absolute", "Nem, abszolút", "Nu, absolut", lang), q4("Nein, konstant", "No, constant", "Nem, állandó", "Nu, constant", lang), q4("Nein, masszentrum-bezogen", "No, center of mass", "Nem, tömegközéppon", "Nu, centru masă", lang)], rng));
  }

  return questions;
}

function generatePotentialEnergyTyping(lang = "en", seed = 0): CurriculumTyping[] {
  return [
    createTyping("work_power", "potential_energy_calc", q4("Elastische potenzielle Energie?", "Elastic potential energy?", "Rugalmas helyzeti energia?", "Energie potențială elastică?", lang),
      [q4("Ep = ½ × k × x²; k=Federkonstante (N/m), x=Auslenkung (m)", "Ep = ½ × k × x²; k=spring constant (N/m), x=displacement (m)", "Ep = ½ × k × x²; k=rugóállandó (N/m), x=elmozdulás (m)", "Ep = ½ × k × x²; k=constantă arc (N/m), x=deplasare (m)", lang)]),
    createTyping("work_power", "potential_energy_calc", q4("Energieerhaltung (konservativ)?", "Energy conservation (conservative)?", "Energia megmaradása (konzervatív)?", "Conservarea energie (conservativ)?", lang),
      [q4("Ek + Ep = konstant (ohne Reibung); bei Reibung: Ek + Ep + Q_thermal = konstant", "Ek + Ep = constant (no friction); with friction: Ek + Ep + Q_thermal = constant", "Ek + Ep = állandó (súrlódás nélkül); súrlódással: Ek + Ep + Q_thermal = állandó", "Ek + Ep = constantă (fără frecare); cu frecare: Ek + Ep + Q_thermal = constantă", lang)]),
  ];
}

// ─── MECHANICAL ADVANTAGE (MA = F_out/F_in) ─────────────────────────────

function generateMechanicalAdvantageMCQ(lang = "en", seed = 0): CurriculumMCQ[] {
  const rng = mulberry32(seed);
  const questions: CurriculumMCQ[] = [];

  for (let i = 0; i < 7; i++) {
    questions.push(createMCQ("work_power", "mechanical_advantage", q4("Mechanischer Vorteil Definition?", "Mechanical advantage definition?", "Mechanikai előny definíciója?", "Definiție avantaj mecanic?", lang),
      q4("MA = F_out / F_in; Ausgangs-Kraft geteilt durch Eintrag-Kraft", "MA = F_out / F_in; output force divided by input force", "MA = F_out / F_in; kimeneti erő osztva bemeneti erővel", "MA = F_out / F_in; forță ieșire împărțită la forță intrare", lang),
      [q4("MA = d_in / d_out", "MA = d_in / d_out", "MA = d_in / d_out", "MA = d_in / d_out", lang), q4("MA = W_out / W_in", "MA = W_out / W_in", "MA = W_out / W_in", "MA = W_out / W_in", lang), q4("MA = m × g", "MA = m × g", "MA = m × g", "MA = m × g", lang)], rng));
  }

  for (let i = 0; i < 7; i++) {
    const machine = pick([
      { q: q4("Hebel (Lever): MA?", "Lever: MA?", "Emelő (Lever): MA?", "Pârghie: MA?", lang), a: q4("MA = d_effort / d_load; erfordert 2m vs 0.5m load: MA=4", "MA = d_effort / d_load; 2m effort vs 0.5m load: MA=4", "MA = d_effort / d_load; 2m erőfeszítés vs 0.5m teher: MA=4", "MA = d_effort / d_load; 2m efort vs 0.5m sarcină: MA=4", lang) },
      { q: q4("Flaschenzug (Pulley): 3 Seile?", "Pulley: 3 ropes?", "Csigasor: 3 kötél?", "Scripete: 3 frânghii?", lang), a: q4("MA = 3 (3 Seile tragen Last)", "MA = 3 (3 ropes support load)", "MA = 3 (3 kötél hordja a terhet)", "MA = 3 (3 frânghii susțin sarcina)", lang) },
      { q: q4("Schiefe Ebene: 0.5 m Höhe / 2 m Länge?", "Incline: 0.5 m height / 2 m length?", "Ferde sík: 0.5 m magasság / 2 m hossz?", "Plan înclinat: 0.5 m înălțime / 2 m lungime?", lang), a: q4("MA = 4 (Länge/Höhe)", "MA = 4 (length/height)", "MA = 4 (hossz/magasság)", "MA = 4 (lungime/înălțime)", lang) },
    ], rng);
    questions.push(createMCQ("work_power", "mechanical_advantage", machine.q, machine.a, [q4("MA = 1", "MA = 1", "MA = 1", "MA = 1", lang)], rng));
  }

  for (let i = 0; i < 6; i++) {
    questions.push(createMCQ("work_power", "mechanical_advantage", q4("Einfache Maschinen: 6 Arten?", "Simple machines: 6 types?", "Egyszerű gépek: 6 típus?", "Mașini simple: 6 tipuri?", lang),
      q4("Hebel, Rolle, schiefe Ebene, Keil, Schraube, Rad-Achse", "Lever, pulley, incline, wedge, screw, wheel-axle", "Emelő, csiga, ferde sík, ék, csavar, kerék-tengely", "Pârghie, scripete, plan înclinat, pană, șurub, roată-axă", lang),
      [q4("Nur Hebel", "Only lever", "Csak emelő", "Doar pârghie", lang), q4("Nur Rollen", "Only pulleys", "Csak csigák", "Doar scripeți", lang), q4("Hebel + Rolle", "Lever + pulley", "Emelő + csiga", "Pârghie + scripete", lang)], rng));
  }

  return questions;
}

function generateMechanicalAdvantageTyping(lang = "en", seed = 0): CurriculumTyping[] {
  return [
    createTyping("work_power", "mechanical_advantage", q4("Ideal vs Real MA?", "Ideal vs real MA?", "Ideális vs valódi MA?", "MA ideal vs real?", lang),
      [q4("Ideal: keine Reibung, W_in = W_out (W=F·d); Real: Reibung, W_out < W_in → Effizienz = W_out/W_in × 100%", "Ideal: no friction, W_in = W_out (W=F·d); Real: friction, W_out < W_in → Efficiency = W_out/W_in × 100%", "Ideális: nincs súrlódás, W_in = W_out (W=F·d); Valódi: súrlódás, W_out < W_in → Hatékonyság = W_out/W_in × 100%", "Ideal: fără frecare, W_in = W_out (W=F·d); Real: frecare, W_out < W_in → Eficiență = W_out/W_in × 100%", lang)]),
  ];
}

// ─── EXPORT ───────────────────────────────────────────────────────────────

export const K7_WORK_POWER_GENERATORS: Record<string, (lang?: string, seed?: number) => CurriculumQuestion[]> = {
  work: (lang = "en", seed = 0) => [...generateWorkMCQ(lang, seed), ...generateWorkTyping(lang, seed)],
  work_mcq: (lang = "en", seed = 0) => generateWorkMCQ(lang, seed),
  work_typing: (lang = "en", seed = 0) => generateWorkTyping(lang, seed),

  power: (lang = "en", seed = 0) => [...generatePowerMCQ(lang, seed), ...generatePowerTyping(lang, seed)],
  power_mcq: (lang = "en", seed = 0) => generatePowerMCQ(lang, seed),
  power_typing: (lang = "en", seed = 0) => generatePowerTyping(lang, seed),

  kinetic_energy_calc: (lang = "en", seed = 0) => [...generateKineticEnergyCQ(lang, seed), ...generateKineticEnergyTyping(lang, seed)],
  kinetic_energy_calc_mcq: (lang = "en", seed = 0) => generateKineticEnergyCQ(lang, seed),
  kinetic_energy_calc_typing: (lang = "en", seed = 0) => generateKineticEnergyTyping(lang, seed),

  potential_energy_calc: (lang = "en", seed = 0) => [...generatePotentialEnergyCQ(lang, seed), ...generatePotentialEnergyTyping(lang, seed)],
  potential_energy_calc_mcq: (lang = "en", seed = 0) => generatePotentialEnergyCQ(lang, seed),
  potential_energy_calc_typing: (lang = "en", seed = 0) => generatePotentialEnergyTyping(lang, seed),

  mechanical_advantage: (lang = "en", seed = 0) => [...generateMechanicalAdvantageMCQ(lang, seed), ...generateMechanicalAdvantageTyping(lang, seed)],
  mechanical_advantage_mcq: (lang = "en", seed = 0) => generateMechanicalAdvantageMCQ(lang, seed),
  mechanical_advantage_typing: (lang = "en", seed = 0) => generateMechanicalAdvantageTyping(lang, seed),
};
