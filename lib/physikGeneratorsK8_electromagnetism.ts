// ─── PHYSICS GENERATORS K8: ELECTROMAGNETISM ───────────────────────────────
// Elektromagnetismus (Elektromágnesség) — 8. osztályos szint
// 
// 5 subtopic × (32-35 MCQ + 10 Typing) = ~220+ kérdés
// Elektromágnesek, indukció, generátorok, transzformátorok, motorok

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
// 1. ELECTROMAGNETS (Elektromágnesek)
// ═════════════════════════════════════════════════════════════════════════════

function generateElectromagnetsMCQ(lang = "en", seed = 0): CurriculumMCQ[] {
  const rng = mulberry32(seed);
  const questions: CurriculumMCQ[] = [];

  for (let i = 0; i < 8; i++) {
    questions.push(createMCQ("electromagnetism", "electromagnets",
      q4("Elektromagnet: Definition?", "Electromagnet: definition?", "Elektromágnes: definíció?", "Electromagnet: definiție?", lang),
      q4("Spule (Magnetspule) mit Strom erzeugt Magnetfeld; Feldstärke ∝ Stromstärke & Windungen", "Coil carrying current creates magnetic field; field strength ∝ current & turns", "Tekercs árammal mágneses mezőt hoz létre; térerősség ∝ áramerősség & menet", "Bobină cu curent creează câmp magnetic; intensitate câmp ∝ curent & spire", lang),
      [q4("Nur Permanentmagnet", "Only permanent magnet", "Csak állandó mágnes", "Doar magnet permanent", lang),
       q4("Ohne Strom funktioniert", "Works without current", "Áram nélkül működik", "Funcționează fără curent", lang),
       q4("Immer gleich stark", "Always same strength", "Mindig azonos erős", "Mereu aceeași putere", lang)], rng));
  }

  for (let i = 0; i < 8; i++) {
    questions.push(createMCQ("electromagnetism", "electromagnets",
      q4("Elektromagnet Feldstärke: Abhängigkeiten?", "Electromagnet field strength: dependencies?", "Elektromágnes térerősség: függőségek?", "Electromagnet intensitate câmp: dependențe?", lang),
      q4("B ∝ I (Strom) und N (Windungen) und μ₀ (Permeabilität); B = μ₀ × n × I (n = N/l)", "B ∝ I (current) and N (turns) and μ₀ (permeability); B = μ₀ × n × I", "B ∝ I (áram) és N (menetek) és μ₀ (permeabilítás); B = μ₀ × n × I", "B ∝ I (curent) și N (spire) și μ₀ (permeabilitate); B = μ₀ × n × I", lang),
      [q4("Nur von Material", "Only material", "Csak anyag", "Doar material", lang),
       q4("Unabhängig von I", "Independent of I", "Független az I-től", "Independent de I", lang),
       q4("Umgekehrt proportional", "Inverse proportional", "Fordítottan arányos", "Invers proporțional", lang)], rng));
  }

  for (let i = 0; i < 8; i++) {
    questions.push(createMCQ("electromagnetism", "electromagnets",
      q4("Elektromagnet Kern: welches Material?", "Electromagnet core: which material?", "Elektromágnes mag: mely anyag?", "Electromagnet miez: ce material?", lang),
      q4("Weiches Eisen (soft iron); hohe Permeabilität; gute Magnetisierbarkeit", "Soft iron; high permeability; good magnetizability", "Puha vas; magas permeabilítás; jó mágnesesíthetőség", "Fier moale; permeabilitate ridicată; bună magnetizabilitate", lang),
      [q4("Hartmagnet", "Permanent magnet", "Állandó mágnes", "Magnet permanent", lang),
       q4("Kupfer", "Copper", "Réz", "Cupru", lang),
       q4("Aluminium", "Aluminum", "Alumínium", "Aluminiu", lang)], rng));
  }

  for (let i = 0; i < 9; i++) {
    questions.push(createMCQ("electromagnetism", "electromagnets",
      q4("Strom ↑ → Magnetfeld?", "Current ↑ → magnetic field?", "Áram ↑ → mágneses mező?", "Curent ↑ → câmp magnetic?", lang),
      q4("Auch ↑ (linear proportional)", "Also ↑ (linear)", "Szintén ↑ (lineárisan)", "De asemenea ↑ (linear)", lang),
      [q4("↓ (umgekehrt)", "↓ (inverse)", "↓ (fordított)", "↓ (invers)", lang),
       q4("Keine Änderung", "No change", "Nincs változás", "Fără schimbare", lang),
       q4("Exponentiell", "Exponential", "Exponenciális", "Exponențial", lang)], rng));
  }

  return questions;
}

function generateElectromagnetsTyping(lang = "en", seed = 0): CurriculumTyping[] {
  return [
    createTyping("electromagnetism", "electromagnets", q4("Elektromagnet vs Permanentmagnet?", "Electromagnet vs permanent magnet?", "Elektromágnes vs állandó mágnes?", "Electromagnet vs magnet permanent?", lang),
      [q4("Elektromagnet: Strom ein/aus → Feld ein/aus, einstellbar; Permanentmagnet: immer an, fest", "Electromagnet: current on/off → field on/off, adjustable; permanent: always on, fixed", "Elektromágnes: áram be/ki → mező be/ki, beállítható; állandó: mindig be, fix", "Electromagnet: curent on/off → câmp on/off, reglabil; permanent: mereu pe, fix", lang)]),
    createTyping("electromagnetism", "electromagnets", q4("Magnetfeld Stärke Formel?", "Magnetic field strength formula?", "Mágneses térerősség képlet?", "Formula intensitate câmp magnetic?", lang),
      [q4("B = μ₀ × μᵣ × n × I; B [T] tesla, n = N/l [1/m] ampere-menet/m, μ₀=4π×10⁻⁷ H/m", "B = μ₀ × μᵣ × n × I; B [T], n = N/l [1/m], μ₀=4π×10⁻⁷ H/m", "B = μ₀ × μᵣ × n × I; B [T], n = N/l [1/m], μ₀=4π×10⁻⁷ H/m", "B = μ₀ × μᵣ × n × I; B [T], n = N/l [1/m], μ₀=4π×10⁻⁷ H/m", lang)]),
    createTyping("electromagnetism", "electromagnets", q4("Spule Feldrichtung: Rechtshandregel?", "Coil field direction: right-hand rule?", "Tekercs tér iránya: jobbkéz-szabály?", "Direcția câmp bobină: regula mâinii drepte?", lang),
      [q4("Jobb kezed tekercseld az áram irányára → hüvelykujj mutat a mágneses pólus irányára (N-pólus)", "Curl right hand fingers in current direction → thumb points to N-pole direction", "Jobb kezed tekercseld az áram irányára → hüvelykujj mutat N-pólus irányára", "Degetele drepte în direcția curentului → degetul mare arată către pol N", lang)]),
    createTyping("electromagnetism", "electromagnets", q4("Elektromagnet Anwendungen?", "Electromagnet applications?", "Elektromágnes alkalmazások?", "Aplicații electromagnet?", lang),
      [q4("Elektromágnesek: csengő, visszahúzó mágnesek, MRI, szeparátorok, relék; regulálható erőhöz és gyors ki/bekapcsoláshoz", "Electromagnets: bell, relays, MRI, separators; adjustable force and quick on/off", "Elektromágnesek: csengő, relék, MRI, szeparátorok; beállítható erő és gyors ki/be", "Electromagneti: clopot, relee, MRI, separatoare; forță reglabilă și comutare rapidă", lang)]),
    createTyping("electromagnetism", "electromagnets", q4("Spulenkern Sättigung?", "Coil core saturation?", "Tekercs mag telítődés?", "Saturație miez bobină?", lang),
      [q4("B elér max értéket → további I↑ nem növeli B-t; vasat telítettnek nevezzük amikor nem lehet több mágnesesítés", "B reaches max → further I↑ doesn't increase B; iron saturated when no more magnetization possible", "B eléri max értéket → további I↑ nem növeli B-t; vas telített amikor nincs több mágnesesítés", "B ajunge la max → I↑ nu mai crește B; fier saturat când nu mai poate magnetizare", lang)]),
    createTyping("electromagnetism", "electromagnets", q4("Relé funkció?", "Relay function?", "Relé funkció?", "Funcție releu?", lang),
      [q4("Kis áram/feszültség → elektromágnes aktiválódik → mechanikus kapcsoló nyitás/zárása → nagy áram/feszültség", "Small current/voltage → electromagnet activates → mechanical switch open/close → large current/voltage", "Kis áram/feszültség → elektromágnes aktiválódik → mechanikus kapcsoló nyitás/zárása", "Curent/tensiune mic → electromagnet se activează → comutator mecanic deschis/închis", lang)]),
    createTyping("electromagnetism", "electromagnets", q4("Tesla SI egység?", "Tesla SI unit?", "Tesla SI egység?", "Unitate Tesla SI?", lang),
      [q4("1 T = 1 Wb/m² = 1 kg/(A×s²); 1 T nagyon erős mágnes mező (Föld mágnese ~50 μT)", "1 T = 1 Wb/m² = 1 kg/(A×s²); 1 T is very strong (Earth's field ~50 μT)", "1 T = 1 Wb/m² = 1 kg/(A×s²); 1 T nagyon erős (Föld mágnese ~50 μT)", "1 T = 1 Wb/m² = 1 kg/(A×s²); 1 T foarte puternic (câmp Pământ ~50 μT)", lang)]),
    createTyping("electromagnetism", "electromagnets", q4("Permeabilitas μᵣ Anyag-függőség?", "Permeability μᵣ material dependency?", "Permeabilítás μᵣ anyag-függőség?", "Permeabilitate μᵣ dependență material?", lang),
      [q4("Paramagnet: μᵣ > 1 (pl. vas, nikkel), könnyűen mágnesesíthetô; diamagnet: μᵣ < 1 (pl. réz) taszít", "Paramagnetic: μᵣ > 1 (iron, nickel), easily magnetized; diamagnetic: μᵣ < 1 (copper), repel", "Paramágnes: μᵣ > 1 (vas, nikkel), könnyen mágnesesíthetô; diamágnes: μᵣ < 1 (réz), taszít", "Paramagnetic: μᵣ > 1 (fier, nichel), ușor de magnetizat; diamagnetic: μᵣ < 1 (cupru), respinge", lang)]),
  ];
}

// ═════════════════════════════════════════════════════════════════════════════
// 2. ELECTROMAGNETIC INDUCTION (Faraday-indukció)
// ═════════════════════════════════════════════════════════════════════════════

function generateElectromagneticInductionMCQ(lang = "en", seed = 0): CurriculumMCQ[] {
  const rng = mulberry32(seed);
  const questions: CurriculumMCQ[] = [];

  for (let i = 0; i < 8; i++) {
    questions.push(createMCQ("electromagnetism", "electromagnetic_induction",
      q4("Faraday Induktionsgesetz?", "Faraday's induction law?", "Faraday indukció törvénye?", "Legea inducției Faraday?", lang),
      q4("Ε = -N × dΦ/dt; indukált feszültség = -(menetek × mágneses fluxus változás / idő)", "Ε = -N × dΦ/dt; induced voltage = -(turns × magnetic flux change / time)", "Ε = -N × dΦ/dt; indukált feszültség = -(menetek × mágneses fluxus változás / idő)", "Ε = -N × dΦ/dt; tensiune indusă = -(spire × schimbare flux magnetic / timp)", lang),
      [q4("Ε = I × R nur", "Ε = I × R only", "Csak Ε = I × R", "Doar Ε = I × R", lang),
       q4("Ε = Φ / N", "Ε = Φ / N", "Ε = Φ / N", "Ε = Φ / N", lang),
       q4("Ε = B × v", "Ε = B × v", "Ε = B × v", "Ε = B × v", lang)], rng));
  }

  for (let i = 0; i < 8; i++) {
    questions.push(createMCQ("electromagnetism", "electromagnetic_induction",
      q4("Lenz Regel (Lenz's Law)?", "Lenz's Law?", "Lenz szabálya?", "Regula Lenz?", lang),
      q4("Indukált áram irányát úgy választja, hogy ellentartson a mágneses fluxus változásnak", "Induced current direction opposes the change in magnetic flux (electromagnetic resistance)", "Indukált áram olyan irányú, hogy ellentartson a fluxus változásnak", "Direcția curent indus se opune schimbării fluxului magnetic", lang),
      [q4("Erősíti a fluxus változást", "Amplifies flux change", "Erősíti a fluxus változást", "Amplifică schimbarea fluxului", lang),
       q4("Nincs iránya", "Has no direction", "Nincs iránya", "Fără direcție", lang),
       q4("Csak metáloknál", "Only in metals", "Csak fémekben", "Doar în metale", lang)], rng));
  }

  for (let i = 0; i < 8; i++) {
    questions.push(createMCQ("electromagnetism", "electromagnetic_induction",
      q4("Mágneses fluxus Φ?", "Magnetic flux Φ?", "Mágneses fluxus Φ?", "Flux magnetic Φ?", lang),
      q4("Φ = B × A × cos(θ) [Wb weber]; területet átható mágneses mező", "Φ = B × A × cos(θ) [Wb]; magnetic field through area", "Φ = B × A × cos(θ) [Wb]; területet átható mágneses mező", "Φ = B × A × cos(θ) [Wb]; câmp magnetic prin arie", lang),
      [q4("Φ = B / A", "Φ = B / A", "Φ = B / A", "Φ = B / A", lang),
       q4("Φ = B + A", "Φ = B + A", "Φ = B + A", "Φ = B + A", lang),
       q4("Φ = B × v", "Φ = B × v", "Φ = B × v", "Φ = B × v", lang)], rng));
  }

  for (let i = 0; i < 9; i++) {
    questions.push(createMCQ("electromagnetism", "electromagnetic_induction",
      q4("Fluxus ↑ → indukált feszültség?", "Flux ↑ → induced voltage?", "Fluxus ↑ → indukált feszültség?", "Flux ↑ → tensiune indusă?", lang),
      q4("Feszültség indukálódik (arányos dΦ/dt-vel; nagyobb Φ-változás = nagyobb E)", "Voltage induced (proportional to dΦ/dt; larger Φ-change = larger E)", "Feszültség indukálódik (arányos dΦ/dt-vel)", "Tensiune indusă (proporțională cu dΦ/dt)", lang),
      [q4("Nincs feszültség", "No voltage", "Nincs feszültség", "Fără tensiune", lang),
       q4("Feszültség fordított", "Voltage reversed", "Feszültség fordított", "Tensiune inversă", lang),
       q4("Exponentiális", "Exponential", "Exponenciális", "Exponențial", lang)], rng));
  }

  return questions;
}

function generateElectromagneticInductionTyping(lang = "en", seed = 0): CurriculumTyping[] {
  return [
    createTyping("electromagnetism", "electromagnetic_induction", q4("Faraday Induktionsgesetz Formel?", "Faraday's law formula?", "Faraday indukció képlet?", "Formula Faraday?", lang),
      [q4("Ε = -N × dΦ/dt; Ε [V] indukált feszültség, N = menetek száma, dΦ/dt [Wb/s] fluxus-változás sebessége", "Ε = -N × dΦ/dt; Ε [V], N turns, dΦ/dt [Wb/s] flux change rate", "Ε = -N × dΦ/dt; Ε [V], N = menetek, dΦ/dt [Wb/s]", "Ε = -N × dΦ/dt; Ε [V], N spire, dΦ/dt [Wb/s]", lang)]),
    createTyping("electromagnetism", "electromagnetic_induction", q4("Weber SI egység?", "Weber SI unit?", "Weber SI egység?", "Unitate Weber SI?", lang),
      [q4("1 Wb = 1 V × s = 1 T × m²; mágneses fluxus SI egysége", "1 Wb = 1 V × s = 1 T × m²; SI unit of magnetic flux", "1 Wb = 1 V × s = 1 T × m²; mágneses fluxus SI egysége", "1 Wb = 1 V × s = 1 T × m²; unitate SI flux magnetic", lang)]),
    createTyping("electromagnetism", "electromagnetic_induction", q4("Lenz Szabály Fizikája?", "Lenz's Law physics?", "Lenz szabálya fizika?", "Fizica regula Lenz?", lang),
      [q4("Indukált áram olyan mágneses mezőt hoz létre, amely ellentartalmazza az eredeti fluxus-változást (energia megmaradás)", "Induced current creates magnetic field opposing flux change (energy conservation)", "Indukált áram olyan mezőt hoz létre amely ellentartalmazza a fluxus-változást", "Curent indus creează câmp care se opune schimbării fluxului", lang)]),
    createTyping("electromagnetism", "electromagnetic_induction", q4("Tekercs Kör Indukció?", "Coil motion induction?", "Tekercs mozgatás indukció?", "Indukție mișcare bobină?", lang),
      [q4("Tekercs mozgatása mágneses mezőben → fluxus-változás → indukált feszültség; v↑ → E↑", "Coil motion in magnetic field → flux change → induced voltage; v↑ → E↑", "Tekercs mozgatása mágneses mezőben → fluxus-változás → indukált feszültség", "Mișcare bobină în câmp magnetic → schimbare flux → tensiune indusă", lang)]),
    createTyping("electromagnetism", "electromagnetic_induction", q4("Motional EMF Formel?", "Motional EMF formula?", "Motional EMF képlet?", "Formula EMF motional?", lang),
      [q4("Ε = B × l × v; B [T] mágnesség, l [m] vezető hossza, v [m/s] sebesség, derékszögben", "Ε = B × l × v; B [T], l [m] conductor length, v [m/s] perpendicular", "Ε = B × l × v; B [T], l [m] vezető hossza, v [m/s]", "Ε = B × l × v; B [T], l [m] lungime conductor, v [m/s]", lang)]),
    createTyping("electromagnetism", "electromagnetic_induction", q4("Eddy Áramok (Örvényáramok)?", "Eddy currents?", "Örvényáramok?", "Curenți vârtej?", lang),
      [q4("Zárt vezető hurkokba indukált áramok; hőt termelnek; fékezéshez használnak (mágneses fékezés)", "Induced currents in closed conductor loops; produce heat; used for braking (magnetic braking)", "Zárt vezető hurokban indukált áramok; hőt termelnek; fékezéshez használnak", "Curenți induși în bucle conductor; produc căldură; folosiți pentru frânare", lang)]),
    createTyping("electromagnetism", "electromagnetic_induction", q4("Mágneses buborék Lenz?", "Magnetic damping Lenz?", "Mágneses csillapítás Lenz?", "Amortizare magnetică Lenz?", lang),
      [q4("Inga vagy rezgő tárgy mágneses mezőben → csillapító erő Lenz-szabály miatt → energia veszteség", "Pendulum or oscillator in magnetic field → damping force by Lenz → energy loss", "Inga mágneses mezőben → csillapító erő Lenz-szabály miatt", "Pendul în câmp magnetic → forță amortizare Lenz → pierdere energie", lang)]),
    createTyping("electromagnetism", "electromagnetic_induction", q4("Inverz Indukció: I ↑ → Fluxus?", "Inverse induction: I ↑ → Flux?", "Fordított indukció: I ↑ → Fluxus?", "Induće inversă: I ↑ → Flux?", lang),
      [q4("Tekercs saját áramának növekedése → saját fluxus növekedése → önindukció (self-inductance L)", "Coil's own current ↑ → own flux ↑ → self-inductance L", "Tekercs saját árama növekedése → saját fluxus növekedése → önindukció", "Creștere curent propriu bobină → flux propriu → auto-inductanță L", lang)]),
  ];
}

// ═════════════════════════════════════════════════════════════════════════════
// 3. GENERATORS (Generátorok - váltóáram előállítása)
// ═════════════════════════════════════════════════════════════════════════════

function generateGeneratorsMCQ(lang = "en", seed = 0): CurriculumMCQ[] {
  const rng = mulberry32(seed);
  const questions: CurriculumMCQ[] = [];

  for (let i = 0; i < 8; i++) {
    questions.push(createMCQ("electromagnetism", "generators",
      q4("AC Generator (Wechselstrom-Generator): Működés?", "AC Generator: operation?", "AC generátor: működés?", "Generator AC: funcționare?", lang),
      q4("Tekercs mágneses mezőben forog → fluxus harmonikus változás → szinuszos váltóáram indukálódik", "Coil rotates in magnetic field → harmonic flux change → sinusoidal AC induced", "Tekercs mágneses mezőben forog → fluxus harmonikus változása → szinuszos váltóáram", "Bobină se rotește în câmp magnetic → schimbare flux armonică → AC sinusoidal indusă", lang),
      [q4("Fém csipesz (brush) kapcsol be/ki", "Metal brush switches on/off", "Fém érintkezô be/ki kapcsol", "Perie metal comutare on/off", lang),
       q4("Csak egyenáram", "Only DC", "Csak egyenáram", "Doar DC", lang),
       q4("Állandó mágnese kell", "Needs permanent magnet", "Állandó mágnes kell", "Are nevoie de magnet permanent", lang)], rng));
  }

  for (let i = 0; i < 8; i++) {
    questions.push(createMCQ("electromagnetism", "generators",
      q4("Váltóáram (AC) Frekvencia?", "AC frequency?", "Váltóáram frekvenciája?", "Frecvență AC?", lang),
      q4("f = ω / (2π) = n × rotációszám; Európa: 50 Hz (v = 50 × 2π rad/s)", "f = ω / (2π) = rotation rate × n; Europe: 50 Hz", "f = ω / (2π) = fordulatszám × n; Európa: 50 Hz", "f = ω / (2π) = viteza rotație × n; Europa: 50 Hz", lang),
      [q4("Csak 60 Hz USA", "Only 60 Hz USA", "Csak 60 Hz USA", "Doar 60 Hz SUA", lang),
       q4("Nem függ a fordulatszámtól", "Independent of rotation", "Nem függ a fordulatszámtól", "Fără dependență rotație", lang),
       q4("Állandó érték", "Constant value", "Állandó érték", "Valoare constantă", lang)], rng));
  }

  for (let i = 0; i < 8; i++) {
    questions.push(createMCQ("electromagnetism", "generators",
      q4("Szinuszos Váltóáram Képlete?", "Sinusoidal AC formula?", "Szinuszos váltóáram képlet?", "Formula AC sinusoidal?", lang),
      q4("i(t) = I_max × sin(2πft + φ); I_max = csúcsérték, f = frekvencia, φ = fázisszög", "i(t) = I_max × sin(2πft + φ); I_max = peak, f = frequency, φ = phase", "i(t) = I_max × sin(2πft + φ); I_max = csúcsérték, f = frekvencia", "i(t) = I_max × sin(2πft + φ); I_max = vârf, f = frecvență", lang),
      [q4("i(t) = I_max × cos(t)", "i(t) = I_max × cos(t)", "i(t) = I_max × cos(t)", "i(t) = I_max × cos(t)", lang),
       q4("i(t) = I_max", "i(t) = I_max", "i(t) = I_max", "i(t) = I_max", lang),
       q4("i(t) = I_max × e^(-t)", "i(t) = I_max × e^(-t)", "i(t) = I_max × e^(-t)", "i(t) = I_max × e^(-t)", lang)], rng));
  }

  for (let i = 0; i < 9; i++) {
    questions.push(createMCQ("electromagnetism", "generators",
      q4("DC Generátor (egyenáram): Kommutátor?", "DC Generator: commutator?", "DC Generátor: kommulátor?", "Generator DC: comutator?", lang),
      q4("Fémes gyűrű-pár; felváltva kapcsolja az érintkezőket → egyenáram kimeneti irányú", "Metal ring pair; alternately switches contacts → DC output direction", "Fémes gyűrű; felváltva kapcsolja az érintkezőket → egyenáram kimenet", "Inele metal; comută alternativ contactele → ieșire DC", lang),
      [q4("Számító elektronika", "Counter electronics", "Elektronikus számítás", "Calcul electronic", lang),
       q4("Forgást akadályozza", "Blocks rotation", "Forgást akadályozza", "Blochează rotație", lang),
       q4("Nincs rá szüksége", "Not needed", "Nincs szüksége", "Nu este nevoie", lang)], rng));
  }

  return questions;
}

function generateGeneratorsTyping(lang = "en", seed = 0): CurriculumTyping[] {
  return [
    createTyping("electromagnetism", "generators", q4("AC Generátor fázisok?", "AC generator phases?", "AC Generátor fázisok?", "Faze generator AC?", lang),
      [q4("3 tekercs 120° eltolással → 3-fázisú AC; f=50 Hz, 400V szakaszos (230V fázis-nulla között)", "3 coils 120° offset → 3-phase AC; f=50 Hz, 400V line (230V phase-neutral)", "3 tekercs 120° eltolás → 3-fázisú AC; f=50 Hz, 400V fázis", "3 bobine cu decalaj 120° → AC trifazat; f=50 Hz, 400V", lang)]),
    createTyping("electromagnetism", "generators", q4("Effektív (RMS) Feszültség?", "Effective (RMS) voltage?", "Effektív (RMS) feszültség?", "Tensiune efectivă (RMS)?", lang),
      [q4("U_eff = U_max / √2 ≈ 0,707 × U_max; azonos hőelégítésű egyenáram; AC-mérnöki standard", "U_eff = U_max / √2 ≈ 0.707 × U_max; equivalent heating DC; engineering standard", "U_eff = U_max / √2 ≈ 0,707 × U_max; ekvivalens hőelégítés DC-vel", "U_eff = U_max / √2 ≈ 0,707 × U_max; încălzire echivalentă DC", lang)]),
    createTyping("electromagnetism", "generators", q4("Teljesítmény AC: valós vs reaktív?", "AC power: real vs reactive?", "Teljesítmény AC: valós vs reaktív?", "Putere AC: reală vs reactivă?", lang),
      [q4("P_valós = U_eff × I_eff × cos(φ) [W] (működtet); P_reaktív = U_eff × I_eff × sin(φ) [VAR] (tekercs/kondenzátor)", "P_real = U_eff × I_eff × cos(φ) [W]; P_reactive = U_eff × I_eff × sin(φ) [VAR]", "P_valós = U_eff × I_eff × cos(φ) [W]; P_reaktív = U_eff × I_eff × sin(φ) [VAR]", "P_reală = U_eff × I_eff × cos(φ) [W]; P_reactivă = U_eff × I_eff × sin(φ) [VAR]", lang)]),
    createTyping("electromagnetism", "generators", q4("Generátor Kimeneti Feszültség: Függőségek?", "Generator output voltage: dependencies?", "Generátor kimenet feszültség: függőségek?", "Tensiune ieșire generator: dependențe?", lang),
      [q4("U ∝ B (mágneses mező), ∝ ω (szögsebesség), ∝ N (menetek), ∝ A (terület); U = B × A × ω × N × sin(ωt)", "U ∝ B (field), ∝ ω (angular velocity), ∝ N (turns), ∝ A (area)", "U ∝ B, ∝ ω, ∝ N, ∝ A; U = B × A × ω × N × sin(ωt)", "U ∝ B, ∝ ω, ∝ N, ∝ A; U = B × A × ω × N × sin(ωt)", lang)]),
    createTyping("electromagnetism", "generators", q4("Szinkron Motor vs Generátor?", "Synchronous motor vs generator?", "Szinkron motor vs generátor?", "Motor sincron vs generator?", lang),
      [q4("Generátor: mechanikai energia → elektromos; motor: elektromos → mechanikai; ugyanaz a szerkezet!", "Generator: mechanical → electrical; motor: electrical → mechanical; same structure!", "Generátor: mechanikai → elektromos; motor: elektromos → mechanikai", "Generator: mecanic → electric; motor: electric → mecanic; aceeași structură!", lang)]),
    createTyping("electromagnetism", "generators", q4("Turbógenerátor (Gőzenergia)?", "Turbogenerator (steam power)?", "Turbógenerátor (gőz energia)?", "Turbogenerator (energie vapor)?", lang),
      [q4("Gőz turbina forgatja a termoelektromos generátort; nagy teljesítmény (1000+ MW); hűtéshez nagy vízmennyiség", "Steam turbine rotates electricity generator; high power (1000+ MW); needs lots of cooling water", "Gőz turbina forgatja a generátort; nagy teljesítmény; nagy vízmennyiség hűtéshez", "Turbină vapor rotește generatorul; putere mare; cantitate apă pentru răcire", lang)]),
    createTyping("electromagnetism", "generators", q4("Vissza-EMF (Gegen-EMK)?", "Back EMF (counter-EMF)?", "Vissza-EMF (Back-EMF)?", "EMF contrare (Back-EMF)?", lang),
      [q4("Forgó tekercs saját fluxusa lecsökkenti az indukált feszültséget; ω↑ → EMF_back ↑ → kimenet feszültség csökken", "Rotating coil's own flux opposes induced voltage; ω↑ → back-EMF ↑", "Forgó tekercs saját fluxusa csökkenti az indukált feszültséget", "Flux propriu bobina rotitoare oppose tensiunea indusă", lang)]),
    createTyping("electromagnetism", "generators", q4("Vastartalom Perde (Eddy loss)?", "Iron loss (core loss)?", "Vas veszteség?", "Pierdere miez fier?", lang),
      [q4("Vas magban indukált örvényáramok (eddy currents) + hiszterézis veszteség; hő felszabadul; P_loss ∝ f²", "Eddy currents + hysteresis in iron core; heat released; P_loss ∝ f²", "Örvényáramok + hiszterézis vas magban; hő felszabadul", "Curenți vârtej + histerezis în miez fier; căldură degajată", lang)]),
  ];
}

// ═════════════════════════════════════════════════════════════════════════════
// 4. TRANSFORMERS (Transzformátorok)
// ═════════════════════════════════════════════════════════════════════════════

function generateTransformersMCQ(lang = "en", seed = 0): CurriculumMCQ[] {
  const rng = mulberry32(seed);
  const questions: CurriculumMCQ[] = [];

  for (let i = 0; i < 8; i++) {
    questions.push(createMCQ("electromagnetism", "transformers",
      q4("Transzformátor: Működés?", "Transformer: operation?", "Transzformátor: működés?", "Transformator: funcționare?", lang),
      q4("Két tekercs közös vasmagban; primer tekercs AC feszültsége → mágneses mező → szekunder tekercs indukál feszültséget", "Two coils in shared iron core; primary AC voltage → magnetic field → secondary induces voltage", "Két tekercs közös vasmagban; primer feszültség → mágneses mező → szekunder tekercs indukál", "Două bobine în miez fier comun; tensiune primar AC → câmp magnetic → bobina secundară induce tensiune", lang),
      [q4("Egyenárammal működik", "Works with DC", "Egyenárammal működik", "Funcționează cu DC", lang),
       q4("Mágneses csatolás nélkül", "Without magnetic coupling", "Mágneses csatolás nélkül", "Fără cuplare magnetică", lang),
       q4("Saját energiáját tároltja", "Stores own energy", "Saját energiáját tároltja", "Stochează propria energie", lang)], rng));
  }

  for (let i = 0; i < 8; i++) {
    questions.push(createMCQ("electromagnetism", "transformers",
      q4("Transzformációs Törvény (Transformation Law)?", "Transformation Law?", "Transzformációs törvény?", "Legea transformării?", lang),
      q4("U₂/U₁ = N₂/N₁; feszültségek aránya = menetszámok aránya", "U₂/U₁ = N₂/N₁; voltage ratio = turns ratio", "U₂/U₁ = N₂/N₁; feszültség arány = menetek arány", "U₂/U₁ = N₂/N₁; raport tensiuni = raport spire", lang),
      [q4("U₂/U₁ = N₁/N₂", "U₂/U₁ = N₁/N₂", "U₂/U₁ = N₁/N₂", "U₂/U₁ = N₁/N₂", lang),
       q4("U₂ = U₁", "U₂ = U₁", "U₂ = U₁", "U₂ = U₁", lang),
       q4("N₂ = N₁", "N₂ = N₁", "N₂ = N₁", "N₂ = N₁", lang)], rng));
  }

  for (let i = 0; i < 8; i++) {
    questions.push(createMCQ("electromagnetism", "transformers",
      q4("Emelő (step-up) vs Leszálló (step-down) Transzformátor?", "Step-up vs step-down transformer?", "Emelő vs leszálló transzformátor?", "Transformator ridicare vs coborâre?", lang),
      q4("Emelő: N₂>N₁ → U₂>U₁ (feszültség ↑, áram ↓); Leszálló: N₂<N₁ → U₂<U₁ (feszültség ↓, áram ↑)", "Step-up: N₂>N₁ → U₂>U₁ (voltage ↑, current ↓); Step-down: N₂<N₁ → U₂<U₁", "Emelő: N₂>N₁ → U₂>U₁; Leszálló: N₂<N₁ → U₂<U₁", "Ridicare: N₂>N₁ → U₂>U₁; Coborâre: N₂<N₁ → U₂<U₁", lang),
      [q4("Egyforma aránnyal", "Same ratio", "Egyforma aránnyal", "Raport egal", lang),
       q4("Fordított", "Reversed", "Fordított", "Invers", lang),
       q4("Nem függ N-től", "Independent of N", "Nem függ N-től", "Fără dependență de N", lang)], rng));
  }

  for (let i = 0; i < 9; i++) {
    questions.push(createMCQ("electromagnetism", "transformers",
      q4("Transzformátor Hatásfok?", "Transformer efficiency?", "Transzformátor hatásfok?", "Eficiență transformator?", lang),
      q4("η = P₂/P₁ ≈ 99% ideálisan (valódi ~95-98%, veszteségek: vas + réz hő)", "η = P₂/P₁ ≈ 99% ideally (real ~95-98%, losses: iron + copper heat)", "η = P₂/P₁ ≈ 99% ideális (valódi ~95-98%)", "η = P₂/P₁ ≈ 99% ideal (real ~95-98%)", lang),
      [q4("Mindig 100%", "Always 100%", "Mindig 100%", "Mereu 100%", lang),
       q4("50% alatt", "Below 50%", "50% alatt", "Sub 50%", lang),
       q4("Nincs veszteség", "No losses", "Nincs veszteség", "Fără pierderi", lang)], rng));
  }

  return questions;
}

function generateTransformersTyping(lang = "en", seed = 0): CurriculumTyping[] {
  return [
    createTyping("electromagnetism", "transformers", q4("Transzformátor Törvény Teljesítmény?", "Transformer power law?", "Transzformátor teljesítmény törvény?", "Legea putere transformator?", lang),
      [q4("Ideális transzformátor: P₁ = P₂ → U₁ × I₁ = U₂ × I₂; energia megmaradás", "Ideal transformer: P₁ = P₂ → U₁ × I₁ = U₂ × I₂; energy conservation", "Ideális: P₁ = P₂ → U₁ × I₁ = U₂ × I₂", "Ideal: P₁ = P₂ → U₁ × I₁ = U₂ × I₂", lang)]),
    createTyping("electromagnetism", "transformers", q4("Áram Transzformáció Képlet?", "Current transformation formula?", "Áram transzformáció képlet?", "Formula transformare curent?", lang),
      [q4("I₂/I₁ = N₁/N₂; áramok fordított arányban (ha feszültség ↑ akkor áram ↓)", "I₂/I₁ = N₁/N₂; currents in inverse ratio", "I₂/I₁ = N₁/N₂; áramok fordított arányban", "I₂/I₁ = N₁/N₂; curenți în raport invers", lang)]),
    createTyping("electromagnetism", "transformers", q4("Transzformátor Veszteségek?", "Transformer losses?", "Transzformátor veszteségek?", "Pierderi transformator?", lang),
      [q4("1) Vastartalom (iron loss): örvényáramok + hiszterézis; 2) Réz (copper loss): primer + szekunder tekercs hője", "1) Iron loss: eddy currents + hysteresis; 2) Copper loss: I²R heating coils", "1) Vastartalom: örvényáramok + hiszterézis; 2) Réz: tekercs hője", "1) Pierdere fier: eddy currents + histerezis; 2) Pierdere cupru: I²R încălzire bobine", lang)]),
    createTyping("electromagnetism", "transformers", q4("Nagyfeszültség Átadás: Lépcsőzés?", "High voltage transmission: step-up?", "Nagyfeszültség átadás: lépcsőzés?", "Transmisie înaltă tensiune: trepte?", lang),
      [q4("Power Station 230V → emelő 230kV → távolabb → leszálló 230V fogyasztónak; 10kV csökkent Joule-loss miatt", "Power plant 230V → step-up 230kV → long distance → step-down 230V consumer; 1000× current reduction = 10⁶× less loss", "Erőmű 230V → emelő 230kV → távolság → leszálló 230V; 1000× áram csökkentés", "Centrală electrică 230V → ridicare 230kV → distanță → coborâre 230V; 1000× reducere curent", lang)]),
    createTyping("electromagnetism", "transformers", q4("Autotranszformátor?", "Autotransformer?", "Autotranszformátor?", "Autotransformator?", lang),
      [q4("Egyetlen tekercs; primer és szekunder közös; kis teljesítmény csatoláshoz; kompaktabb mint 2-tekercsű", "Single coil; primary and secondary share windings; compact; small power coupling", "Egyetlen tekercs; primer és szekunder közös; kompaktabb", "Singură bobină; primar și secundar común; mai compact", lang)]),
    createTyping("electromagnetism", "transformers", q4("Transzformátor Vasmagra?", "Transformer iron core?", "Transzformátor vasmagra?", "Miez tranformator fier?", lang),
      [q4("Lamellae (laminált vas): egymásra helyezett vékony rétegek; szigetelik csökkent örvényáramokat → kisebb veszteség", "Laminated iron: thin insulated layers; reduces eddy currents → less loss", "Lamellák (laminált vas): vékony szigetelt rétegek; örvényáramok csökkent", "Laminat fier: straturi subțiri izolate; eddy currents reduse", lang)]),
    createTyping("electromagnetism", "transformers", q4("Hűtés Transzformátor?", "Transformer cooling?", "Transzformátor hűtés?", "Răcire transformator?", lang),
      [q4("Kis: léghűtés (ventillátor); közép: olaj (minerál); nagy: moszat (PCB) vagy szintétikus olaj", "Small: air cooling (fan); medium: mineral oil; large: dielectric oil", "Kis: levegő (ventillátor); közép: olaj; nagy: speciális olaj", "Mic: aer (ventilator); mediu: ulei mineral; mare: ulei dielectric", lang)]),
    createTyping("electromagnetism", "transformers", q4("Transzformátor zaja?", "Transformer noise?", "Transzformátor zaja?", "Zgomot transformator?", lang),
      [q4("~50 Hz alapharmonikus (2 × 50 Hz = 100 Hz); magnetostrikció (vas molekulák vibrálnak); olaj hűtésben buborék okoz", "~50 Hz fundamental + harmonics (100 Hz); magnetostriction (iron vibration); oil cooling bubbles", "~50 Hz alapharmonikus; magnetostrikció (vas vibrálás); olaj hűtésben buborék", "~50 Hz + armonici; magnetostricție (oscilație fier); bule în ulei", lang)]),
  ];
}

// ═════════════════════════════════════════════════════════════════════════════
// 5. ELECTRIC MOTORS (Villanymotor)
// ═════════════════════════════════════════════════════════════════════════════

function generateElectricMotorsMCQ(lang = "en", seed = 0): CurriculumMCQ[] {
  const rng = mulberry32(seed);
  const questions: CurriculumMCQ[] = [];

  for (let i = 0; i < 8; i++) {
    questions.push(createMCQ("electromagnetism", "electric_motors",
      q4("Villanymotor Alapelve?", "Electric motor principle?", "Villanymotor alapelve?", "Principiu motor electric?", lang),
      q4("Áram + mágneses mező = Lorentz erő; F = B × I × l; erő forgó tekercsre hat → forgás", "Current + magnetic field = Lorentz force; F = B × I × l; force rotates coil", "Áram + mágneses mező = Lorentz erő; F = B × I × l", "Curent + câmp magnetic = Forță Lorentz; F = B × I × l", lang),
      [q4("Hő termelés", "Heat production", "Hő termelés", "Producție căldură", lang),
       q4("Elektromosság leállása", "Electricity stop", "Elektromosság leállása", "Oprire electricitate", lang),
       q4("Fény kibocsátás", "Light emission", "Fény kibocsátás", "Emisie lumină", lang)], rng));
  }

  for (let i = 0; i < 8; i++) {
    questions.push(createMCQ("electromagnetism", "electric_motors",
      q4("AC Motor (3-fázisú aszinkron): Működés?", "AC motor (3-phase induction): operation?", "AC motor (3-fázisú indukció): működés?", "Motor AC (3-fază inducție): funcționare?", lang),
      q4("3-fázisú váltóáram → forgó mágneses mező → örvényáramok rotor vezetőiben → Lorentz erő → forgás", "3-phase AC → rotating magnetic field → eddy currents in rotor → Lorentz force → rotation", "3-fázisú AC → forgó mágneses mező → örvényáramok rotor-ban → forgás", "AC trifazat → câmp magnetic rotitor → curenți vârtej în rotor → forță Lorentz", lang),
      [q4("Szinkron fordulatszám = AC frekvencia × pólusmenet", "Synchronous RPM = AC frequency × poles", "Szinkron fordulat = AC frekvencia × pólusszám", "Rotații sincrone = frecvență AC × poli", lang),
       q4("Csak 3-fázis közvetlenül", "Only 3-phase direct", "Csak 3-fázis közvetlenül", "Doar 3-fază direct", lang),
       q4("Nincs aszinkron motor", "No asynchronous", "Nincs aszinkron", "Fără asincron", lang)], rng));
  }

  for (let i = 0; i < 8; i++) {
    questions.push(createMCQ("electromagnetism", "electric_motors",
      q4("Szlip (Slip) Aszinkron Motor?", "Slip in induction motor?", "Szlip aszinkron motor?", "Alunecare motor inducție?", lang),
      q4("s = (n_szinkron - n_rotor) / n_szinkron; s = 0: szinkron forgás, s = 1: rotor áll még", "s = (n_sync - n_rotor) / n_sync; s = 0: synchronous, s = 1: rotor stopped", "s = (n_szinkron - n_rotor) / n_szinkron; s=0 szinkron, s=1 áll", "s = (n_sincron - n_rotor) / n_sincron; s=0 sincron, s=1 rotor pe loc", lang),
      [q4("Fordulatszám teljesen egyenlő", "Speed completely equal", "Teljesen egyenlő fordulat", "Viteză complet egală", lang),
       q4("Nincs szlip soha", "Never slip", "Nincs szlip", "Fără alunecare", lang),
       q4("Pozitív egyetlen", "Positive only", "Pozitív egyedül", "Doar pozitiv", lang)], rng));
  }

  for (let i = 0; i < 9; i++) {
    questions.push(createMCQ("electromagnetism", "electric_motors",
      q4("DC Motor (egyenáramú motor): Kommulátor Szerep?", "DC motor: commutator role?", "DC motor: kommulátor szerep?", "Motor DC: rol comutator?", lang),
      q4("Felváltva kapcsolja a polárást forgó tekercsénél; folyamatos Lorentz erő forgásirányban; egyenletes fordulatszám", "Alternately switches polarity in rotating coil; continuous Lorentz force in rotation direction", "Felváltva kapcsolja a polárást; folyamatos erő forgás irányban",
       "Comută alternativ polaritatea; forță continuă în direcția rotație", lang),
      [q4("Megállítja a motort", "Stops motor", "Megállítja motort", "Oprește motor", lang),
       q4("Nincs szerep", "No role", "Nincs szerep", "Fără rol", lang),
       q4("Hőt termel", "Generates heat", "Hőt termel", "Generează căldură", lang)], rng));
  }

  return questions;
}

function generateElectricMotorsTyping(lang = "en", seed = 0): CurriculumTyping[] {
  return [
    createTyping("electromagnetism", "electric_motors", q4("Villanymotor Teljesítmény?", "Motor power?", "Villanymotor teljesítmény?", "Putere motor?", lang),
      [q4("P = U × I × cos(φ) × η [W]; η = hatásfok ~85-95% (veszteség: hő, súrlódás)", "P = U × I × cos(φ) × η [W]; η = efficiency ~85-95%", "P = U × I × cos(φ) × η [W]; η = hatásfok ~85-95%", "P = U × I × cos(φ) × η [W]; η = eficiență ~85-95%", lang)]),
    createTyping("electromagnetism", "electric_motors", q4("Nyomaték (Torque) Motor?", "Motor torque?", "Motor nyomaték?", "Cuplu motor?", lang),
      [q4("M = k × Φ × I [N⋅m]; Φ = mágneses fluxus, I = áram; nagyobb fluxus/áram = nagyobb forgató erő", "M = k × Φ × I [N⋅m]; larger flux/current = larger torque", "M = k × Φ × I [N⋅m]; nagyobb fluxus/áram = nagyobb nyomaték", "M = k × Φ × I [N⋅m]; flux/curent mai mare = cuplu mai mare", lang)]),
    createTyping("electromagnetism", "electric_motors", q4("Indítási Áram Motor?", "Motor starting current?", "Indítási áram motor?", "Curent pornire motor?", lang),
      [q4("Induláskor I_indít >> I_névleges (3-10×); mivel a rotor 0 fordul, nincs vissza-EMF; fokozatosan csökken", "Starting current I_start >> I_rated (3-10×); no back-EMF initially; decreases gradually", "Induláskor I >> I_névleges; nincs vissza-EMF, fokozatosan csökken", "Pornire I_start >> I_rated; fără EMF contrare inițial; scade treptat", lang)]),
    createTyping("electromagnetism", "electric_motors", q4("Egyéb Motor Típusok?", "Other motor types?", "Más motor típusok?", "Alte tipuri motoare?", lang),
      [q4("1) Uniwersális: AC/DC (szépsűrű kommulátor); 2) Szinkron: AC csak szinkron fordulatszám; 3) Brushless: elektronikus kommuláció", "1) Universal: AC/DC; 2) Synchronous: AC only at sync speed; 3) Brushless: electronic commutation", "1) Univerzális: AC/DC; 2) Szinkron: AC szinkron fordulaton; 3) Szénkefe nélkül: elektronikus kommuláció", "1) Universal: AC/DC; 2) Sincron: AC doar viteză sincron; 3) Fără perii: comutare electronică", lang)]),
    createTyping("electromagnetism", "electric_motors", q4("Vissza-EMF (Back EMF)?", "Back EMF?", "Vissza-EMF?", "EMF contrare?", lang),
      [q4("Forgó tekercs saját mágnese indukál feszültséget szemben az alkalmazott feszültséggel; E_vissza = k × ω × Φ", "Rotating coil's field induces voltage opposing applied voltage; back-EMF = k × ω × Φ", "Forgó tekercs mágnese indukál ellentétes feszültséget; E_vissza = k × ω × Φ", "Câmp bobinei rotitoare induce tensiune opusă; EMF_contrare = k × ω × Φ", lang)]),
    createTyping("electromagnetism", "electric_motors", q4("Motor Megfordítás Iránya?", "Motor direction reversal?", "Motor megfordítás?", "Inversare direcție motor?", lang),
      [q4("DC motor: tápellátás polaritásának fordítása (+ ↔ -); AC motor: 2 fázis felcserélése (U ↔ V)", "DC: reverse supply polarity; AC: swap 2 phases", "DC: tápellátás polaritása fordítása; AC: 2 fázis felcserélése", "DC: inversare polaritate alimentare; AC: inversare 2 faze", lang)]),
    createTyping("electromagnetism", "electric_motors", q4("Motor Hatásfok vs Generátor?", "Motor efficiency vs generator?", "Motor hatásfok vs generátor?", "Eficiență motor vs generator?", lang),
      [q4("Motor η = (P_mech / P_elec) × 100%; Generátor η = (P_elec / P_mech) × 100%; általában motor hatásfok magasabb", "Motor η = P_mech/P_elec; Generator η = P_elec/P_mech; motor usually higher", "Motor η = P_mech/P_elec; Generátor η = P_elec/P_mech; motor általában magasabb", "Motor η = P_mech/P_elec; Generator η = P_elec/P_mech; motor obicei mai mare", lang)]),
    createTyping("electromagnetism", "electric_motors", q4("Lineáris Motor?", "Linear motor?", "Lineáris motor?", "Motor liniar?", lang),
      [q4("Tekercs + mágneses mező = F = B × I × l → egyenes mozgás; vonatban (Maglev), gyárakban, hifi hangszórók", "Coil + magnetic field = F = B × I × l → straight motion; trains (Maglev), speakers", "Tekercs + mágneses mező = F = B × I × l → egyenes mozgás; vonatok, hangszórók", "Bobină + câmp magnetic = F = B × I × l → mișcare lineară; trenuri (Maglev), difuzoare", lang)]),
  ];
}

// ─── FINAL EXPORT ──────────────────────────────────────────────────────────

export const K8_ELECTROMAGNETISM_GENERATORS: Record<string, (lang?: string, seed?: number) => CurriculumQuestion[]> = {
  electromagnets: (lang = "en", seed = 0) => [...generateElectromagnetsMCQ(lang, seed), ...generateElectromagnetsTyping(lang, seed)],
  electromagnets_mcq: (lang = "en", seed = 0) => generateElectromagnetsMCQ(lang, seed),
  electromagnets_typing: (lang = "en", seed = 0) => generateElectromagnetsTyping(lang, seed),

  electromagnetic_induction: (lang = "en", seed = 0) => [...generateElectromagneticInductionMCQ(lang, seed), ...generateElectromagneticInductionTyping(lang, seed)],
  electromagnetic_induction_mcq: (lang = "en", seed = 0) => generateElectromagneticInductionMCQ(lang, seed),
  electromagnetic_induction_typing: (lang = "en", seed = 0) => generateElectromagneticInductionTyping(lang, seed),

  generators: (lang = "en", seed = 0) => [...generateGeneratorsMCQ(lang, seed), ...generateGeneratorsTyping(lang, seed)],
  generators_mcq: (lang = "en", seed = 0) => generateGeneratorsMCQ(lang, seed),
  generators_typing: (lang = "en", seed = 0) => generateGeneratorsTyping(lang, seed),

  transformers: (lang = "en", seed = 0) => [...generateTransformersMCQ(lang, seed), ...generateTransformersTyping(lang, seed)],
  transformers_mcq: (lang = "en", seed = 0) => generateTransformersMCQ(lang, seed),
  transformers_typing: (lang = "en", seed = 0) => generateTransformersTyping(lang, seed),

  electric_motors: (lang = "en", seed = 0) => [...generateElectricMotorsMCQ(lang, seed), ...generateElectricMotorsTyping(lang, seed)],
  electric_motors_mcq: (lang = "en", seed = 0) => generateElectricMotorsMCQ(lang, seed),
  electric_motors_typing: (lang = "en", seed = 0) => generateElectricMotorsTyping(lang, seed),
};
