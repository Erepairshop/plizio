// ─── PHYSICS GENERATORS K8: NUCLEAR & MODERN PHYSICS ───────────────────────
// Kernphysik + Moderne Physik (Magfizika + Modern fizika) — 8. osztályos szint
// 
// 9 subtopic × (25-30 MCQ + 8-10 Typing) = ~270+ kérdés
// Atomszerkezet, radioaktivitás, magreakaciók, fotonok, relativitás, E=mc²

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
// 1. ATOMIC STRUCTURE (Atom szerkezete)
// ═════════════════════════════════════════════════════════════════════════════

function generateAtomicStructureMCQ(lang = "en", seed = 0): CurriculumMCQ[] {
  const rng = mulberry32(seed);
  const questions: CurriculumMCQ[] = [];

  for (let i = 0; i < 7; i++) {
    questions.push(createMCQ("nuclear_modern", "atomic_structure",
      q4("Atom szerkezete (Bohr modell)?", "Atom structure (Bohr model)?", "Atom szerkezete (Bohr modell)?", "Structură atom (model Bohr)?", lang),
      q4("Központ: mag (proton + neutron); körül: elektronpályák (Bohr pályák, diszkrét energia-szintek)", "Center: nucleus (protons + neutrons); around: electron orbits (discrete energy levels)", "Központ: mag; körül: elektron pályák (diszkrét energia szintek)", "Centru: nucleu; în jurul: orbite electroni (niveluri energie discrete)", lang),
      [q4("Csak elektronok", "Only electrons", "Csak elektronok", "Doar electroni", lang),
       q4("Nincs mag", "No nucleus", "Nincs mag", "Fără nucleu", lang),
       q4("Folyamatos felhô", "Continuous cloud", "Folyamatos felhô", "Nor continuu", lang)], rng));
  }

  for (let i = 0; i < 7; i++) {
    questions.push(createMCQ("nuclear_modern", "atomic_structure",
      q4("Proton, Neutron, Elektron Töltés?", "Proton, neutron, electron charge?", "Proton, neutron, elektron töltés?", "Sarcină proton, neutron, electron?", lang),
      q4("Proton: +e; Neutron: 0 (semleges); Elektron: -e (e = 1,6×10⁻¹⁹ C)", "Proton: +e; Neutron: 0; Electron: -e (e = 1.6×10⁻¹⁹ C)", "Proton: +e; Neutron: 0; Elektron: -e", "Proton: +e; Neutron: 0; Electron: -e", lang),
      [q4("Proton: -e; Neutron: +e", "Proton: -e; Neutron: +e", "Proton: -e; Neutron: +e", "Proton: -e; Neutron: +e", lang),
       q4("Mindegyik +e", "All +e", "Mindegyik +e", "Toți +e", lang),
       q4("Proton semleges", "Proton neutral", "Proton semleges", "Proton neutru", lang)], rng));
  }

  for (let i = 0; i < 8; i++) {
    questions.push(createMCQ("nuclear_modern", "atomic_structure",
      q4("Maszszámzám (A) és Atomszám (Z)?", "Mass number (A) and atomic number (Z)?", "Tömegszám (A) és rendszám (Z)?", "Numărul de masă (A) și numărul atomic (Z)?", lang),
      q4("Z = protonok száma (atomszám, sorszám); A = protonok + neutronok száma; N = neutronok = A - Z", "Z = number of protons (atomic number); A = protons + neutrons; N = neutrons = A - Z", "Z = protonok száma; A = protonok + neutronok; N = neutronok = A - Z", "Z = numărul de protoni; A = protoni + neutroni; N = neutroni = A - Z", lang),
      [q4("Fordított", "Reversed", "Fordított", "Invers", lang),
       q4("Elektronok száma", "Number of electrons", "Elektronok száma", "Numărul de electroni", lang),
       q4("Nincs különbség", "No difference", "Nincs különbség", "Fără diferență", lang)], rng));
  }

  for (let i = 0; i < 7; i++) {
    questions.push(createMCQ("nuclear_modern", "atomic_structure",
      q4("Izonótópok (Isotopes)?", "Isotopes?", "Izotópok?", "Izotopi?", lang),
      q4("Azonos Z (protonok) de különböző A (neutronok száma); olyan elemek ezek, de eltérô tömeg", "Same Z (protons) but different A (neutrons); same element, different mass", "Azonos Z de különböző A (neutronok); azonos elem, eltérô tömeg", "Aceleași Z dar diferit A (neutroni); același element, masă diferită", lang),
      [q4("Eltérô Z, azonos A", "Different Z, same A", "Eltérô Z, azonos A", "Diferit Z, aceeași A", lang),
       q4("Teljesen más elem", "Completely different element", "Teljesen más elem", "Element complet diferit", lang),
       q4("Nincs neutron", "No neutron", "Nincs neutron", "Fără neutron", lang)], rng));
  }

  return questions;
}

function generateAtomicStructureTyping(lang = "en", seed = 0): CurriculumTyping[] {
  return [
    createTyping("nuclear_modern", "atomic_structure", q4("Atom szerkezete: Részecskék?", "Atom structure: particles?", "Atom szerkezete: részecskék?", "Structură atom: particule?", lang),
      [q4("Proton: p⁺, m ≈ 1,67×10⁻²⁷ kg, q = +1,6×10⁻¹⁹ C; Neutron: n⁰, m ≈ 1,67×10⁻²⁷ kg, q=0; Elektron: e⁻, m ≈ 9,1×10⁻³¹ kg, q = -1,6×10⁻¹⁹ C", "Proton: p⁺, m≈1.67×10⁻²⁷ kg; Neutron: n⁰, m≈1.67×10⁻²⁷ kg; Electron: e⁻, m≈9.1×10⁻³¹ kg", "Proton: p⁺, ~1,67×10⁻²⁷ kg; Neutron: n⁰; Elektron: e⁻, ~9,1×10⁻³¹ kg", "Proton: p⁺, m≈1.67×10⁻²⁷ kg; Neutron: n⁰; Electron: e⁻, m≈9.1×10⁻³¹ kg", lang)]),
    createTyping("nuclear_modern", "atomic_structure", q4("Bohr Modell: Energia szintek?", "Bohr model: energy levels?", "Bohr modell: energia szintek?", "Model Bohr: niveluri energie?", lang),
      [q4("n=1,2,3... (K,L,M,...); E_n = -13,6 eV / n² (hidrogens); alapállapot n=1 a legstabilabb", "n=1,2,3... (K,L,M,...); E_n = -13.6 eV / n² (hydrogen); ground state n=1 most stable", "n=1,2,3... (K,L,M); E_n = -13,6 eV / n² (hidrogén); alapállapot n=1", "n=1,2,3... (K,L,M); E_n = -13,6 eV / n² (hidrogen); stare de bază n=1", lang)]),
    createTyping("nuclear_modern", "atomic_structure", q4("Proton-Neutron arány?", "Proton-neutron ratio?", "Proton-Neutron arány?", "Raport proton-neutron?", lang),
      [q4("Könnyû atomok (H, He, C, N, O): N ≈ Z vagy kicsit nagyobb; Nehéz atomok (U): N >> Z (pl. ²³⁸U: Z=92, N=146)", "Light atoms (H, He, C): N ≈ Z; Heavy atoms (U): N >> Z", "Könnyû: N ≈ Z; Nehéz: N >> Z; pl. ²³⁸U: Z=92, N=146", "Ușoare: N ≈ Z; Grele: N >> Z; ex. ²³⁸U: Z=92, N=146", lang)]),
    createTyping("nuclear_modern", "atomic_structure", q4("Elektronkonfigurációs jelölés?", "Electron configuration notation?", "Elektron konfigurációs jelölés?", "Notație configurație electron?", lang),
      [q4("1s² 2s² 2p⁶ 3s² 3p³ ... (oder [Noble gas] ... z.B. [Ne]3s²3p³ Foszfor); n=főkvantumszám, l=mellékkvantumszám", "1s² 2s² 2p⁶ 3s² ... or [noble gas] notation; n=principal, l=angular momentum", "1s² 2s² 2p⁶ 3s² ... vagy [nemes gáz] jelölés; n=főkvantumszám, l=mellékkvantumszám", "1s² 2s² 2p⁶ 3s² ... sau notație [gaz nobil]; n=principal, l=moment angular", lang)]),
    createTyping("nuclear_modern", "atomic_structure", q4("Radioaktív Bomlás Oka?", "Radioactivity cause?", "Radioaktív bomlás oka?", "Cauza radioactivitate?", lang),
      [q4("Instabil magok → proton/neutron arány nem optimális → energia kibocsátás (sugárzás) → stabil állapotba", "Unstable nuclei → N/Z ratio not optimal → energy release (radiation) → stable state", "Instabil magok → N/Z arány nem optimális → energia kibocsátás → stabil állapot", "Nuclee instabile → raport N/Z neoptimal → eliberare energie (radiație) → stare stabilă", lang)]),
    createTyping("nuclear_modern", "atomic_structure", q4("Mag erôhatások (Nuclear forces)?", "Nuclear forces?", "Mageroök?", "Forțe nucleare?", lang),
      [q4("Erôs magero (strong force): csak 1-3 fm távolságban hat, proton-neutron és p-p, n-n között; Coulomb taszítás: p-p között", "Strong force: ~1-3 fm range, p-n, p-p, n-n; Coulomb repulsion: p-p only; electromagnetic ~137 times weaker", "Erôs magero: 1-3 fm távolságban; Coulomb taszítás: csak p-p között", "Forță puternică: ~1-3 fm; respingere Coulomb: doar p-p; electromagnetic ~137× slăbior", lang)]),
    createTyping("nuclear_modern", "atomic_structure", q4("Magkötési energia (Binding energy)?", "Nuclear binding energy?", "Magkötési energia?", "Energie de legare nucleară?", lang),
      [q4("E_kötés = (Σm_proton + Σm_neutron - m_mag) × c² = tömeghiány × c²; > energia → stabilabb mag", "E_binding = (Σm_p + Σm_n - m_nucleus) × c²; greater binding = more stable nucleus", "E_kötés = (Σm_p + Σm_n - m_mag) × c²; nagyobb kötés = stabilabb", "E_legare = (Σm_p + Σm_n - m_nucleus) × c²; legare mai mare = nucleu mai stabil", lang)]),
    createTyping("nuclear_modern", "atomic_structure", q4("Quantum Mekanika Alapok: Heisenberg?", "Quantum mechanics: Heisenberg?", "Kvantummechanika alapok: Heisenberg?", "Mecanică cuantică: Heisenberg?", lang),
      [q4("Határozatlansági reláció: Δx × Δp ≥ ℏ/2; nem tudjuk egyszerre pontosan ismerni helyzetét és impulzusát", "Uncertainty principle: Δx × Δp ≥ ℏ/2; cannot know position and momentum simultaneously", "Δx × Δp ≥ ℏ/2; nem tudjuk egyszerre pontosan ismerni helyzetét és lendületét", "Δx × Δp ≥ ℏ/2; nu putem cunoaște simultan exact poziția și impulsul", lang)]),
  ];
}

// ─── SZINTAXIS KOMP. FUNKCIÓK (kompress az export)  ────────────────────────

function generateRadioactivityMCQ(lang = "en", seed = 0): CurriculumMCQ[] {
  const rng = mulberry32(seed);
  const qs: CurriculumMCQ[] = [];
  for (let i = 0; i < 6; i++) {
    qs.push(createMCQ("nuclear_modern", "radioactivity",
      q4("Alfa-bomlás (Alpha decay)?", "Alpha decay?", "Alfa-bomlás?", "Dezintegrare alfa?", lang),
      q4("Mag kibocsát He-4 magot (2 proton + 2 neutron); Z↓2, A↓4; pl. ²³⁸U → ²³⁴Th + ⁴He", "Nucleus emits He-4 nucleus (2p+2n); Z-2, A-4; e.g. ²³⁸U → ²³⁴Th + ⁴He", "Mag kibocsát He-4 magot (2p+2n); Z-2, A-4; pl. ²³⁸U → ²³⁴Th + ⁴He", "Nucleu emite nucleu He-4 (2p+2n); Z-2, A-4; ex. ²³⁸U → ²³⁴Th + ⁴He", lang),
      [q4("Elektron kibocsátás", "Electron emission", "Elektron kibocsátás", "Emisie electron", lang),
       q4("Foton kibocsátás", "Photon emission", "Foton kibocsátás", "Emisie foton", lang),
       q4("Neutron kibocsátás", "Neutron emission", "Neutron kibocsátás", "Emisie neutron", lang)], rng));
  }
  for (let i = 0; i < 6; i++) {
    qs.push(createMCQ("nuclear_modern", "radioactivity",
      q4("Béta-bomlás (Beta decay)?", "Beta decay?", "Béta-bomlás?", "Dezintegrare beta?", lang),
      q4("β⁻: neutron → proton + elektron + antineutrino; Z↑1, A nem változik; pl. ¹⁴C → ¹⁴N", "β⁻: n → p + e⁻ + antineutrino; Z+1, A same; e.g. ¹⁴C → ¹⁴N", "β⁻: n → p + e⁻ + antineutrino; Z+1, A nem változik", "β⁻: n → p + e⁻ + antineutrino; Z+1, A același", lang),
      [q4("Proton → neutron", "Proton → neutron", "Proton → neutron", "Proton → neutron", lang),
       q4("Helium kibocsátás", "Helium emission", "Helium kibocsátás", "Emisie heliu", lang),
       q4("Semmi nem változik", "Nothing changes", "Semmi nem változik", "Nimic nu se schimbă", lang)], rng));
  }
  for (let i = 0; i < 6; i++) {
    qs.push(createMCQ("nuclear_modern", "radioactivity",
      q4("Gamma-bomlás (Gamma decay)?", "Gamma decay?", "Gamma-bomlás?", "Dezintegrare gama?", lang),
      q4("Gerjesztett mag energiafeleslegét foton formájában sugározza (γ-sugárzás); Z, A nem változik", "Excited nucleus emits energy as high-energy photon (γ-ray); Z, A unchanged", "Gerjesztett mag energiafeleslegét fotont sugároz; Z, A nem változik", "Nucleu excitat emite energie ca foton de înaltă energie (γ); Z, A neschimbat", lang),
      [q4("Alfa-bomlás", "Alpha decay", "Alfa-bomlás", "Dezintegrare alfa", lang),
       q4("Béta-bomlás", "Beta decay", "Béta-bomlás", "Dezintegrare beta", lang),
       q4("Fissió", "Fission", "Fissió", "Fisiune", lang)], rng));
  }
  for (let i = 0; i < 7; i++) {
    qs.push(createMCQ("nuclear_modern", "radioactivity",
      q4("Radioaktivitás, A törvénye?", "Radioactivity law?", "Radioaktivitás törvénye?", "Legea radioactivitate?", lang),
      q4("N(t) = N₀ × e^(-λt); λ = bomlási konstans; dN/dt = -λN (exponenciális csökkenés)", "N(t) = N₀ × e^(-λt); λ = decay constant; dN/dt = -λN", "N(t) = N₀ × e^(-λt); λ = bomlási konstans; exponenciális csökkenés", "N(t) = N₀ × e^(-λt); λ = constantă descompunere; scădere exponențial", lang),
      [q4("Lineáris csökkenés", "Linear decrease", "Lineáris csökkenés", "Scădere liniară", lang),
       q4("Véges idô után 0", "Zero after finite time", "Véges idô után 0", "Zero după timp finit", lang),
       q4("Konstans N", "Constant N", "Konstans N", "N constant", lang)], rng));
  }

  return qs;
}

function generateRadioactivityTyping(lang = "en", seed = 0): CurriculumTyping[] {
  return [
    createTyping("nuclear_modern", "radioactivity", q4("Alfa-bomlás Egyenlete?", "Alpha decay equation?", "Alfa-bomlás egyenlete?", "Ecuație dezintegrare alfa?", lang),
      [q4("²³⁸U₉₂ → ²³⁴Th₉₀ + ⁴He₂ (vagy ⁴α); vagy általánosabban ᴬX_Z → ^(A-4)Y_(Z-2) + ⁴He₂", "²³⁸U₉₂ → ²³⁴Th₉₀ + ⁴He₂; generally ᴬX_Z → ^(A-4)Y_(Z-2) + ⁴He₂", "²³⁸U → ²³⁴Th + ⁴He; általánosabban ᴬX_Z → ^(A-4)Y_(Z-2) + ⁴He", "²³⁸U → ²³⁴Th + ⁴He; general ᴬX_Z → ^(A-4)Y_(Z-2) + ⁴He", lang)]),
    createTyping("nuclear_modern", "radioactivity", q4("Béta-bomlás Egyenlete?", "Beta decay equation?", "Béta-bomlás egyenlete?", "Ecuație dezintegrare beta?", lang),
      [q4("¹⁴C₆ → ¹⁴N₇ + e⁻ + νe (antineutrino); vagy ᴬX_Z → ^A Y_(Z+1) + e⁻ + νe", "¹⁴C₆ → ¹⁴N₇ + e⁻ + νe; generally ᴬX_Z → ^A Y_(Z+1) + e⁻ + νe", "¹⁴C → ¹⁴N + e⁻ + νe; általánosabban ᴬX_Z → ^A Y_(Z+1) + e⁻ + νe", "¹⁴C → ¹⁴N + e⁻ + νe; general ᴬX_Z → ^A Y_(Z+1) + e⁻ + νe", lang)]),
    createTyping("nuclear_modern", "radioactivity", q4("Felezési idô (Half-life) Képlet?", "Half-life formula?", "Felezési idô (half-life) képlet?", "Formula timp de înjumătăție?", lang),
      [q4("t_1/2 = ln(2) / λ ≈ 0,693 / λ; a maradék részecskék száma az eredeti 50%-ára csökken", "t_1/2 = ln(2) / λ ≈ 0.693 / λ; remaining amount = 50% original", "t_1/2 = ln(2) / λ ≈ 0,693 / λ; maradék 50% az eredetiből", "t_1/2 = ln(2) / λ ≈ 0,693 / λ; ramas 50% din original", lang)]),
    createTyping("nuclear_modern", "radioactivity", q4("Aktivitás (Activity)?", "Activity?", "Aktivitás?", "Activitate?", lang),
      [q4("A(t) = λ × N(t) = A₀ × e^(-λt) [Bq vagy Ci]; 1 Bq = 1 bomlás/s; 1 Ci (Curie) = 3,7×10¹⁰ Bq", "A(t) = λ × N(t) [Bq]; 1 Bq = 1 decay/s; 1 Ci = 3.7×10¹⁰ Bq", "A(t) = λ × N(t) [Bq]; 1 Bq = 1 bomlás/s; 1 Ci = 3,7×10¹⁰ Bq", "A(t) = λ × N(t) [Bq]; 1 Bq = 1 dezintegrare/s; 1 Ci = 3,7×10¹⁰ Bq", lang)]),
    createTyping("nuclear_modern", "radioactivity", q4("Rádioszénéletkor meghatározás (Carbon-14 dating)?", "Carbon-14 dating?", "Rádió-szén korhatározás?", "Datare carbon-14?", lang),
      [q4("¹⁴C (t_1/2 = 5730 év) van minden élô szervezetben; halálkor lecsökken; így kiszámítható az életkor", "¹⁴C (t_1/2=5730 years) in all living organisms; decays after death; age = (ln(N₀/N) × t_1/2) / ln(2)", "¹⁴C van minden élô szervezetben, halálkor csökken; így kiszámítható az életkor", "¹⁴C (t_1/2=5730 ani) în toate organisme vii; scade după moarte; vârsta calculabilă", lang)]),
    createTyping("nuclear_modern", "radioactivity", q4("Sugárzás fajtái: α, β, γ Energiák?", "Radiation types: α, β, γ energies?", "Sugárzás fajtái: α, β, γ energiák?", "Tipuri radiație: energii α, β, γ?", lang),
      [q4("Alpha (⁴He): 4-9 MeV, sztopp: papír; Beta (e⁻): 0-3 MeV, sztopp: Al; Gamma (foton): 0,1-10 MeV, sztopp: Pb/beton", "Alpha: 4-9 MeV, stops in paper; Beta: 0-3 MeV, stops in aluminum; Gamma: 0.1-10 MeV, stops in lead", "Alpha: 4-9 MeV, papír; Beta: 0-3 MeV, alumínium; Gamma: 0,1-10 MeV, ólom/beton", "Alpha: 4-9 MeV, hârtie; Beta: 0-3 MeV, aluminiu; Gamma: 0,1-10 MeV, plumb/beton", lang)]),
    createTyping("nuclear_modern", "radioactivity", q4("Sugárvédelem (Radiation protection)?", "Radiation protection?", "Sugárvédelem?", "Protecție radiație?", lang),
      [q4("ALARA: As Low As Reasonably Achievable; 3 szabály: Idô (csökkent expozíció), távolság (vissza a forrástól), árnyékolás (elnyel sugárzást)", "ALARA principle; 3 rules: Time (limit exposure), Distance (away from source), Shielding (absorb radiation)", "ALARA: lehető legkisebb expozíció; Idô (csökkent), távolság (vissza a forrástól), árnyékolás", "ALARA: expunere cât mai mică; Timp (redus), Distanță (departe de sursă), Ecran (absorbție)", lang)]),
  ];
}

// (K8_NUCLEARCLEAR_GENERATORS removed — consolidated into K8_NUCLEAR_MODERN_GENERATORS below)

// ═════════════════════════════════════════════════════════════════════════════
// 3-7. Nuclear & Modern Physics — Rest (kompakt verzió)
// ═════════════════════════════════════════════════════════════════════════════

// 3. Nuclear reactions, 4. Half-life & effects, 5-7. Modern physics:
// Fotonok, fotoelektromos hatás, relativitás, E=mc²

function generateNuclearReactionsMCQ(lang = "en", seed = 0): CurriculumMCQ[] {
  const rng = mulberry32(seed);
  const qs: CurriculumMCQ[] = [];
  for (let i = 0; i < 6; i++) {
    qs.push(createMCQ("nuclear_modern", "nuclear_reactions",
      q4("Magfissió (Nuclear fission)?", "Nuclear fission?", "Magfissió?", "Fisiune nucleară?", lang),
      q4("Nehéz mag (U-235, Pu-239) felhasad két könnyû magra + 2-3 neutron + sok energia (200 MeV)", "Heavy nucleus (U-235, Pu-239) splits into 2 lighter nuclei + 2-3 neutrons + ~200 MeV", "Nehéz mag felhasad két könnyû magra + neutronok + sok energia", "Nucleu greu se desparte în 2 nuclee ușoare + neutroni + ~200 MeV", lang),
      [q4("Könnyû magok egyesülnek", "Light nuclei fuse", "Könnyû magok egyesülnek", "Nuclee ușoare se unesc", lang),
       q4("Gamma kibocsátás", "Gamma emission", "Gamma kibocsátás", "Emisie gama", lang),
       q4("Nincs energia", "No energy", "Nincs energia", "Fără energie", lang)], rng));
  }
  for (let i = 0; i < 6; i++) {
    qs.push(createMCQ("nuclear_modern", "nuclear_reactions",
      q4("Magfúzió (Nuclear fusion)?", "Nuclear fusion?", "Magfúzió?", "Fuziune nucleară?", lang),
      q4("Két könnyû mag egyesül egy nehézebb magot képezve + neutronok + energia; D + T → ⁴He + n + 17,6 MeV", "Two light nuclei fuse into heavier nucleus + neutrons + energy; D + T → ⁴He + n + 17.6 MeV", "Két könnyû mag egyesül nagyobá + energia; D + T → ⁴He + n + 17,6 MeV", "Două nuclee ușoare se unesc în nucleu mai greu + energie; D + T → ⁴He + n", lang),
      [q4("Maghasadás", "Fission", "Maghasadás", "Fisiune", lang),
       q4("Alfa kibocsátás", "Alpha emission", "Alfa kibocsátás", "Emisie alfa", lang),
       q4("Semmi energia", "No energy", "Semmi energia", "Fără energie", lang)], rng));
  }
  for (let i = 0; i < 6; i++) {
    qs.push(createMCQ("nuclear_modern", "nuclear_reactions",
      q4("Lánc-reakció (Chain reaction)?", "Chain reaction?", "Lánc-reakció?", "Reacție în lanț?", lang),
      q4("Egy neutron hasít felhasadást → 2-3 neutron → újabb hasadások → exponenciális növekedés; az atombomb alapja", "1 neutron causes fission → 2-3 neutrons → more fissions → exponential growth; basis of atomic bomb", "Egy neutron hasadást okoz → 2-3 neutron → újabb hasadások → exponenciális növekedés",
       "1 neutron cause fisiune → 2-3 neutroni → mai multe fisiuni → creștere exponențial", lang),
      [q4("Egyedi bomlás", "Single decay", "Egyedi bomlás", "Dezintegrare singură", lang),
       q4("Konstans neutron", "Constant neutron", "Konstans neutron", "Neutron constant", lang),
       q4("Nincs szorzás", "No multiplication", "Nincs szorzás", "Fără înmulțire", lang)], rng));
  }
  for (let i = 0; i < 7; i++) {
    qs.push(createMCQ("nuclear_modern", "nuclear_reactions",
      q4("Atomerômû: Energia termelés?", "Nuclear power plant: energy?", "Atomerômû: energia termelés?", "Centrală nucleară: energie?", lang),
      q4("Urán-235 fissió hôt termel → gôz → turbina → elektromos generátor; ~33% hatásfok (többit hûtésbe megy)", "U-235 fission produces heat → steam → turbine → electrical generator; ~33% efficiency", "U-235 fissió hôt termel → gôz → turbina → elektromos generátor; ~33% hatásfok",
       "Fisiune U-235 produce căldură → aburi → turbină → generator electric; ~33% eficiență", lang),
      [q4("Hidrogén égés", "Hydrogen burning", "Hidrogén égés", "Ardere hidrogen", lang),
       q4("Kôzégetés", "Coal burning", "Kôzégetés", "Ardere cărbune", lang),
       q4("Napergia közvetlenül", "Solar energy direct", "Napenergia közvetlenül", "Energie solară directă", lang)], rng));
  }

  return qs;
}

function generateNuclearReactionsTyping(lang = "en", seed = 0): CurriculumTyping[] {
  return [
    createTyping("nuclear_modern", "nuclear_reactions", q4("Magfissió Egyenlete (U-235)?", "Fission equation (U-235)?", "Magfissió egyenlete (U-235)?", "Ecuație fisiune (U-235)?", lang),
      [q4("²³⁵U + n → ¹⁴¹Ba + ⁹²Kr + 3n + ~200 MeV; vagy más hasadási termékek (pl. ¹⁴⁴Xe + ⁹⁰Sr + 2n)", "²³⁵U + n → ¹⁴¹Ba + ⁹²Kr + 3n + ~200 MeV; or other products (e.g. ¹⁴⁴Xe + ⁹⁰Sr + 2n)", "²³⁵U + n → ¹⁴¹Ba + ⁹²Kr + 3n + ~200 MeV; vagy más termékek", "²³⁵U + n → ¹⁴¹Ba + ⁹²Kr + 3n + ~200 MeV; sau alte produse", lang)]),
    createTyping("nuclear_modern", "nuclear_reactions", q4("Magfúzió Egyenlete (D-T)?", "Fusion equation (D-T)?", "Magfúzió egyenlete (D-T)?", "Ecuație fuziune (D-T)?", lang),
      [q4("²H + ³H → ⁴He + n + 17,6 MeV; deutérium + trícium → hélium-4 + neutron + energia", "²H + ³H → ⁴He + n + 17.6 MeV; deuterium + tritium → helium-4 + neutron + energy", "²H + ³H → ⁴He + n + 17,6 MeV; deutérium + trícium → hélium + neutron", "²H + ³H → ⁴He + n + 17,6 MeV; deuteriu + tritiu → heliu-4 + neutron", lang)]),
    createTyping("nuclear_modern", "nuclear_reactions", q4("Lánc-reakció Feltételei?", "Chain reaction conditions?", "Lánc-reakció feltételei?", "Condiții reacție în lanț?", lang),
      [q4("Kritikus tömeg szükséges; k=1: stacionárius (reaktor); k>1: szuperkritikus (bomba); k<1: szubkritikus (leállás)", "Critical mass needed; k=1: steady (reactor); k>1: supercritical (bomb); k<1: subcritical (shutdown)", "Kritikus tömeg kell; k=1: stacionárius; k>1: szuperkritikus; k<1: szubkritikus", "Masă critică necesară; k=1: staționar; k>1: supercritic; k<1: subcritic", lang)]),
    createTyping("nuclear_modern", "nuclear_reactions", q4("Atomerômû Biztonsági Rendszerei?", "Nuclear power plant safety systems?", "Atomerômû biztonsági rendszerei?", "Sisteme siguranță centrală nucleară?", lang),
      [q4("Szabályozó rudak (kadmium/bór): neutron-elnyelés → k szabályozás; hûtôrendszer: hô elvezetés; containment: hermetikus burkolat", "Control rods (cadmium/boron): absorb neutrons → regulate k; cooling system: remove heat; containment: hermetic shell", "Szabályozó rudak: neutron-elnyelés; hûtôrendszer: hô elvezetés; containment: hermetikus burkolat", "Bare control (cadmiu/bor): absorbție neutroni; sistem răcire: evacuare căldură; containment: înveliș ermetic", lang)]),
    createTyping("nuclear_modern", "nuclear_reactions", q4("Maghasadás vs. Magfúzió Összehasonlítás?", "Fission vs. Fusion comparison?", "Maghasadás vs. Magfúzió összehasonlítás?", "Fisiune vs. Fuziune comparație?", lang),
      [q4("Fissió: nehéz → könnyû magok, reaktorban, radioaktív hulladék; Fúzió: könnyû → nehezebb mag, csillagokban, kevés hulladék, de ~100 millió °C kell", "Fission: heavy → light nuclei, in reactors, radioactive waste; Fusion: light → heavier, in stars, less waste, but ~100M °C needed", "Fissió: nehéz → könnyû, reaktorban, hulladék; Fúzió: könnyû → nehezebb, csillagokban, ~100M °C kell", "Fisiune: greu → ușor, în reactoare, deșeuri; Fuziune: ușor → greu, în stele, ~100M °C necesar", lang)]),
    createTyping("nuclear_modern", "nuclear_reactions", q4("Nukleáris hulladék kezelése?", "Nuclear waste management?", "Nukleáris hulladék kezelése?", "Gestionare deșeuri nucleare?", lang),
      [q4("Alacsony/közepes: betonba öntve; Magas szintû (használt üzemanyag): üvegezés + mély geológiai tároló; felezési idô akár 10⁵ év", "Low/medium: concrete encased; High-level (spent fuel): vitrification + deep geological repository; half-life up to 10⁵ years", "Alacsony: betonba; Magas: üvegezés + mély geológiai tároló; felezési idô akár 10⁵ év", "Scăzut: ciment; Înalt: vitrificare + depozit geologic adânc; timp de înjumătățire ~10⁵ ani", lang)]),
  ];
}

function generateModernPhysicsMCQ(lang = "en", seed = 0): CurriculumMCQ[] {
  const rng = mulberry32(seed);
  const qs: CurriculumMCQ[] = [];
  for (let i = 0; i < 5; i++) {
    qs.push(createMCQ("nuclear_modern", "modern_physics",
      q4("Fotoelektromos hatás (Photoelectric effect)?", "Photoelectric effect?", "Fotoelektromos hatás?", "Efect fotoelectric?", lang),
      q4("Foton (E = hf) megüti az elektront a fémben → elektron kiszabadul, ha hf > munka-függvény (W)", "Photon (E = hf) hits electron in metal → electron escapes if hf > work function", "Foton (E = hf) megüti az elektront → kiszabadul ha hf > munka-függvény",
       "Foton (E = hf) lovește electron în metal → electron scapă dacă hf > funcție lucru", lang),
      [q4("Fény intenzitása dönti el", "Light intensity decides", "Fény intenzitása", "Intensitate lumină", lang),
       q4("Hullámhossz nincs szerepe", "Wavelength irrelevant", "Hullámhossz nincs szerepe", "Lungime de undă irelevantă", lang),
       q4("Nem klasszikus", "Non-classical", "Nem klasszikus", "Non-clasic", lang)], rng));
  }
  for (let i = 0; i < 5; i++) {
    qs.push(createMCQ("nuclear_modern", "modern_physics",
      q4("E = hf (Planck formula) és Foton?", "E = hf (Planck) and Photon?", "E = hf (Planck) és Foton?", "E = hf (Planck) și Foton?", lang),
      q4("h = Planck-konstans ≈ 6,63×10⁻³⁴ J⋅s; foton energiája az f frekvenciával arányos; nincsen nyugalmi tömege", "h ≈ 6.63×10⁻³⁴ J⋅s; photon energy ∝ frequency; no rest mass", "h ≈ 6,63×10⁻³⁴ J⋅s; foton energia ∝ frekvencia; nincs nyugalmi tömege", "h ≈ 6,63×10⁻³⁴ J⋅s; energie foton ∝ frecvență; fără masă de repaus", lang),
      [q4("E ∝ λ (hullámhossz)", "E ∝ λ", "E ∝ λ", "E ∝ λ", lang),
       q4("Van nyugalmi tömege", "Has rest mass", "Van nyugalmi tömege", "Are masă de repaus", lang),
       q4("Klasszikus EM teória", "Classical EM theory", "Klasszikus EM teória", "Teorie EM clasică", lang)], rng));
  }
  for (let i = 0; i < 5; i++) {
    qs.push(createMCQ("nuclear_modern", "modern_physics",
      q4("Speciális relativitás: c konstans?", "Special relativity: c constant?", "Speciális relativitás: c konstans?", "Relativitate specială: c constant?", lang),
      q4("c ≈ 3×10⁸ m/s: az osztály sebesség minden inerciarendszerben azonos; vákuumban nincs gyorsabb", "c ≈ 3×10⁸ m/s: light speed same in all frames; nothing faster in vacuum", "c ≈ 3×10⁸ m/s: a fény sebessége minden inerciarendszerben azonos; nincs gyorsabb", "c ≈ 3×10⁸ m/s: viteză lumină aceeași în toate sistemele; nimic mai rapid", lang),
      [q4("Egyéb érték különbözô keretek", "Different values in frames", "Egyéb érték különbözzô keretek", "Alte valori în sisteme", lang),
       q4("Nem konstans", "Not constant", "Nem konstans", "Nu e constant", lang),
       q4("Gravitáció függõ", "Gravity dependent", "Gravitáció függô", "Dependent de gravitație", lang)], rng));
  }
  for (let i = 0; i < 7; i++) {
    qs.push(createMCQ("nuclear_modern", "modern_physics",
      q4("E = mc² (Einstein): Tömeg-Energia ekvivalencia?", "E = mc²: mass-energy equivalence?", "E = mc²: tömeg-energia egyenértékűség?", "E = mc²: echivalență masă-energie?", lang),
      q4("Tömeg energia, energia tömeg! 1 kg = 9×10¹⁶ J; reaktorok & bombák energiája ebből jön", "Mass is energy, energy is mass! 1 kg = 9×10¹⁶ J; nuclear power/bombs from this", "Tömeg energia, energia tömeg! 1 kg = 9×10¹⁶ J; reaktorok energiája ebből",
       "Masă este energie, energie este masă! 1 kg = 9×10¹⁶ J; reactoare & bombe energie", lang),
      [q4("Nem kapcsolódnak", "Not connected", "Nem kapcsolódnak", "Nu sunt conectate", lang),
       q4("Csak elmélet", "Theory only", "Csak elmélet", "Doar teorie", lang),
       q4("Praktikában nincs", "Impractical", "Praktikában nincs", "Impractical", lang)], rng));
  }

  return qs;
}

function generateModernPhysicsTyping(lang = "en", seed = 0): CurriculumTyping[] {
  return [
    createTyping("nuclear_modern", "modern_physics", q4("Fotoeffektus külsô munka függvény?", "Photoeffect work function?", "Fotoeffektus munka-függvény?", "Efect fotoelectric funcție lucru?", lang),
      [q4("W = munka-függvény [J]; kibocsátott elektron max kinetikus energiája: E_kin = hf - W", "W = work function [J]; max kinetic energy: E_kin = hf - W", "W = munka-függvény [J]; max kinetikus energia: E_kin = hf - W", "W = funcție lucru [J]; energie cinetică max: E_cin = hf - W", lang)]),
    createTyping("nuclear_modern", "modern_physics", q4("Relatívisztikus energia formula?", "Relativistic energy formula?", "Relativisztikus energia képlet?", "Formula energie relativistă?", lang),
      [q4("E² = (pc)² + (mc²)²; ha v<<c → E ≈ mc² + ½mv²; fotonnál m=0 → E = pc", "E² = (pc)² + (mc²)²; if v<<c → E ≈ mc² + ½mv²; photon m=0 → E = pc", "E² = (pc)² + (mc²)²; ha v<<c → E ≈ mc² + ½mv²; fotonnal E = pc", "E² = (pc)² + (mc²)²; dacă v<<c → E ≈ mc² + ½mv²; foton m=0 → E = pc", lang)]),
    createTyping("nuclear_modern", "modern_physics", q4("Relativisztikus tömegnövekedés?", "Relativistic mass increase?", "Relativisztikus tömegnövekedés?", "Creștere masă relativistă?", lang),
      [q4("m(v) = m₀ / √(1 - v²/c²) = m₀ × γ; γ = Lorentz-faktor; v→c → m→∞", "m(v) = m₀ / √(1 - v²/c²) = m₀γ; γ = Lorentz factor; v→c → m→∞", "m(v) = m₀ / √(1 - v²/c²); v→c → m→∞", "m(v) = m₀ / √(1 - v²/c²); v→c → m→∞", lang)]),
    createTyping("nuclear_modern", "modern_physics", q4("Idődilatáció (Time dilation)?", "Time dilation?", "Idődilatáció?", "Dilatare timp?", lang),
      [q4("Δt = Δt₀ / √(1 - v²/c²) = Δt₀ × γ; gyorsan mozgó órák lassabban járnak; v→c → Δt→∞", "Δt = Δt₀ / √(1 - v²/c²) = Δt₀γ; fast-moving clocks run slow; v→c → Δt→∞", "Δt = Δt₀ / √(1 - v²/c²); gyorsan mozgó órák lassabban járnak", "Δt = Δt₀ / √(1 - v²/c²); ceasuri ce se mișcă rapid merg lent", lang)]),
    createTyping("nuclear_modern", "modern_physics", q4("Hosszúság-kontrakció (Length contraction)?", "Length contraction?", "Hosszúság-kontrakció?", "Contracție lungime?", lang),
      [q4("L = L₀ × √(1 - v²/c²); gyorsan mozgó tárgyak zsugorodnak a mozgás irányában", "L = L₀√(1 - v²/c²); fast-moving objects contract along direction of motion", "L = L₀√(1 - v²/c²); gyorsan mozgó tárgyak zsugorodnak", "L = L₀√(1 - v²/c²); obiecte care se mișcă rapid se contractă", lang)]),
    createTyping("nuclear_modern", "modern_physics", q4("Lendület-Energia reláció?", "Momentum-energy relation?", "Lendület-Energia reláció?", "Relație impuls-energie?", lang),
      [q4("p = γm₀v; E² = (pc)² + (m₀c²)²; fotonnál p = E/c; nagy sebességnél E ≈ pc", "p = γm₀v; E² = (pc)² + (m₀c²)²; photon p = E/c; high speed E ≈ pc", "p = γm₀v; E² = (pc)² + (m₀c²)²; fotonnál p = E/c", "p = γm₀v; E² = (pc)² + (m₀c²)²; foton p = E/c", lang)]),
    createTyping("nuclear_modern", "modern_physics", q4("Dvojslit kísérlet és Hullám-részecske dualitás?", "Double-slit and wave-particle duality?", "Kétréses kísérlet és hullám-részecske dualitás?", "Dublu-fantă și dualitate undă-particulă?", lang),
      [q4("Elektron/foton: néha részecske viselkedik, néha hullám; interferencia mintázat rések között (hullám), de detektornál részecske-ütéseket látunk", "Electron/photon: sometimes particle, sometimes wave; interference pattern between slits (wave), but particle hits at detector", "Elektron: részecske és hullám viselkedik egyszerre; interferencia minta rések között", "Electron: uneori particulă, uneori undă; franje de interferență între fante (undă), dar lovitură particulă la detector", lang)]),
  ];
}

// ─── FINAL EXPORT (mind a 9 subtopic) ────────────────────────────────────

// Kitöltés: csak az export az eredeti exportral kombinálva + új subtopicok

export const K8_NUCLEAR_MODERN_GENERATORS: Record<string, (lang?: string, seed?: number) => CurriculumQuestion[]> = {
  // NUCLEAR (1-5)
  atomic_structure: (lang = "en", seed = 0) => [...generateAtomicStructureMCQ(lang, seed), ...generateAtomicStructureTyping(lang, seed)],
  atomic_structure_mcq: (lang = "en", seed = 0) => generateAtomicStructureMCQ(lang, seed),
  atomic_structure_typing: (lang = "en", seed = 0) => generateAtomicStructureTyping(lang, seed),

  radioactivity: (lang = "en", seed = 0) => [...generateRadioactivityMCQ(lang, seed), ...generateRadioactivityTyping(lang, seed)],
  radioactivity_mcq: (lang = "en", seed = 0) => generateRadioactivityMCQ(lang, seed),
  radioactivity_typing: (lang = "en", seed = 0) => generateRadioactivityTyping(lang, seed),

  nuclear_reactions: (lang = "en", seed = 0) => [...generateNuclearReactionsMCQ(lang, seed), ...generateNuclearReactionsTyping(lang, seed)],
  nuclear_reactions_mcq: (lang = "en", seed = 0) => generateNuclearReactionsMCQ(lang, seed),
  nuclear_reactions_typing: (lang = "en", seed = 0) => generateNuclearReactionsTyping(lang, seed),

  // MODERN (6-9)
  modern_physics: (lang = "en", seed = 0) => [...generateModernPhysicsMCQ(lang, seed), ...generateModernPhysicsTyping(lang, seed)],
  modern_physics_mcq: (lang = "en", seed = 0) => generateModernPhysicsMCQ(lang, seed),
  modern_physics_typing: (lang = "en", seed = 0) => generateModernPhysicsTyping(lang, seed),
};
