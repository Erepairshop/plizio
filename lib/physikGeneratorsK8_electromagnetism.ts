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
       q4("Aufl.", "Exponential", "Exponenciális", "Exponențial", lang)], rng));
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
      [q4("Locken Sie die rechten Finger in die aktuelle Richtung → Daumen zeigt auf N-Pol Richtung", "Curl right hand fingers in current direction → thumb points to N-pole direction", "Jobb kezed tekercseld az áram irányára → hüvelykujj mutat N-pólus irányára", "Degetele drepte în direcția curentului → degetul mare arată către pol N", lang)]),
    createTyping("electromagnetism", "electromagnets", q4("Elektromagnet Anwendungen?", "Electromagnet applications?", "Elektromágnes alkalmazások?", "Aplicații electromagnet?", lang),
      [q4("Elektromagnete: Glocke, Relais, MRT, Separatoren; einstellbare Kraft und schnell ein/aus", "Electromagnets: bell, relays, MRI, separators; adjustable force and quick on/off", "Elektromágnesek: csengő, relék, MRI, szeparátorok; beállítható erő és gyors ki/be", "Electromagneti: clopot, relee, MRI, separatoare; forță reglabilă și comutare rapidă", lang)]),
    createTyping("electromagnetism", "electromagnets", q4("Spulenkern Sättigung?", "Coil core saturation?", "Tekercs mag telítődés?", "Saturație miez bobină?", lang),
      [q4("B erreicht max → weiter I↑ erhöht B nicht; Eisen gesättigt, wenn keine Magnetisierung mehr möglich ist", "B reaches max → further I↑ doesn't increase B; iron saturated when no more magnetization possible", "B eléri max értéket → további I↑ nem növeli B-t; vas telített amikor nincs több mágnesesítés", "B ajunge la max → I↑ nu mai crește B; fier saturat când nu mai poate magnetizare", lang)]),
    createTyping("electromagnetism", "electromagnets", q4("Relaisfunktion?", "Relay function?", "Relé funkció?", "Funcție releu?", lang),
      [q4("Kleinstrom/Spannung → Elektromagnet aktiviert → mechanische Schalter öffnen/schließen → Großstrom/Spannung", "Small current/voltage → electromagnet activates → mechanical switch open/close → large current/voltage", "Kis áram/feszültség → elektromágnes aktiválódik → mechanikus kapcsoló nyitás/zárása", "Curent/tensiune mic → electromagnet se activează → comutator mecanic deschis/închis", lang)]),
    createTyping("electromagnetism", "electromagnets", q4("Tesla SI-Einheit?", "Tesla SI unit?", "Tesla SI egység?", "Unitate Tesla SI?", lang),
      [q4("1 T = 1 Wb/m² = 1 kg/(A×s²); 1 T ist sehr stark (Erdfeld ~50 μT)", "1 T = 1 Wb/m² = 1 kg/(A×s²); 1 T is very strong (Earth's field ~50 μT)", "1 T = 1 Wb/m² = 1 kg/(A×s²); 1 T nagyon erős (Föld mágnese ~50 μT)", "1 T = 1 Wb/m² = 1 kg/(A×s²); 1 T foarte puternic (câmp Pământ ~50 μT)", lang)]),
    createTyping("electromagnetism", "electromagnets", q4("Permeabilität μr Materialabhängigkeit?", "Permeability μᵣ material dependency?", "Permeabilitás μᵣ anyag-függőség?", "Permeabilitate μᵣ dependență material?", lang),
      [q4("Diamagnet: μᵣ < 1 (z.B. Kupfer, Bismut) wird schwach abgestoßen; Paramagnet: μᵣ leicht > 1 (z.B. Aluminium, O₂) wird schwach angezogen; Ferromagnet: μᵣ ≫ 1 (Eisen, Nickel)", "Diamagnetic: μᵣ < 1 (e.g. copper, bismuth) weakly repelled; Paramagnetic: μᵣ slightly > 1 (e.g. aluminum, O₂) weakly attracted; Ferromagnetic: μᵣ ≫ 1 (iron, nickel)", "Diamágnes: μᵣ < 1 (réz, bizmut) gyengén taszít; Paramágnes: μᵣ kicsit > 1 (alumínium, O₂) gyengén vonz; Ferromágnes: μᵣ ≫ 1 (vas, nikkel)", "Diamagnetic: μᵣ < 1 (ex. cupru, bismut) respinge slab; Paramagnetic: μᵣ puțin > 1 (ex. aluminiu, O₂) atrage slab; Feromagnetic: μᵣ ≫ 1 (fier, nichel)", lang)]),
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
      q4("Ε = -N × dΦ/dt; induzierte Spannung = -(dreht × magnetische Flussänderung / Zeit)", "Ε = -N × dΦ/dt; induced voltage = -(turns × magnetic flux change / time)", "Ε = -N × dΦ/dt; indukált feszültség = -(menetek × mágneses fluxus változás / idő)", "Ε = -N × dΦ/dt; tensiune indusă = -(spire × schimbare flux magnetic / timp)", lang),
      [q4("Ε = I × R nur", "Ε = I × R only", "Csak Ε = I × R", "Doar Ε = I × R", lang),
       q4("Ε = Φ / N", "Ε = Φ / N", "Ε = Φ / N", "Ε = Φ / N", lang),
       q4("Ε = B × v", "Ε = B × v", "Ε = B × v", "Ε = B × v", lang)], rng));
  }

  for (let i = 0; i < 8; i++) {
    questions.push(createMCQ("electromagnetism", "electromagnetic_induction",
      q4("Lenz Regel (Lenz's Law)?", "Lenz's Law?", "Lenz szabálya?", "Regula Lenz?", lang),
      q4("Induzierte Stromrichtung gegen die Veränderung des magnetischen Flusses (elektromagnetische Beständigkeit)", "Induced current direction opposes the change in magnetic flux (electromagnetic resistance)", "Indukált áram olyan irányú, hogy ellentartson a fluxus változásnak", "Direcția curent indus se opune schimbării fluxului magnetic", lang),
      [q4("Verstärkt die Flussänderung", "Amplifies flux change", "Erősíti a fluxus változást", "Amplifică schimbarea fluxului", lang),
       q4("Hat keine Richtung", "Has no direction", "Nincs iránya", "Fără direcție", lang),
       q4("Nur in Metallen", "Only in metals", "Csak fémekben", "Doar în metale", lang)], rng));
  }

  for (let i = 0; i < 8; i++) {
    questions.push(createMCQ("electromagnetism", "electromagnetic_induction",
      q4("Magnetischer Fluss Φ?", "Magnetic flux Φ?", "Mágneses fluxus Φ?", "Flux magnetic Φ?", lang),
      q4("Φ = B × A × cos(θ) [Wb]; magnetisches Feld durch das Gebiet", "Φ = B × A × cos(θ) [Wb]; magnetic field through area", "Φ = B × A × cos(θ) [Wb]; területet átható mágneses mező", "Φ = B × A × cos(θ) [Wb]; câmp magnetic prin arie", lang),
      [q4("Φ = B / A", "Φ = B / A", "Φ = B / A", "Φ = B / A", lang),
       q4("Φ = B + A", "Φ = B + A", "Φ = B + A", "Φ = B + A", lang),
       q4("Φ = B × v", "Φ = B × v", "Φ = B × v", "Φ = B × v", lang)], rng));
  }

  for (let i = 0; i < 9; i++) {
    questions.push(createMCQ("electromagnetism", "electromagnetic_induction",
      q4("Flux ↑ → induzierte Spannung?", "Flux ↑ → induced voltage?", "Fluxus ↑ → indukált feszültség?", "Flux ↑ → tensiune indusă?", lang),
      q4("Spannung induziert (proportional zu dΦ/dt; größere Φ-Veränderung = größer E)", "Voltage induced (proportional to dΦ/dt; larger Φ-change = larger E)", "Feszültség indukálódik (arányos dΦ/dt-vel)", "Tensiune indusă (proporțională cu dΦ/dt)", lang),
      [q4("Keine Spannung", "No voltage", "Nincs feszültség", "Fără tensiune", lang),
       q4("Spannung umgekehrt", "Voltage reversed", "Feszültség fordított", "Tensiune inversă", lang),
       q4("Aufl.", "Exponential", "Exponenciális", "Exponențial", lang)], rng));
  }

  return questions;
}

function generateElectromagneticInductionTyping(lang = "en", seed = 0): CurriculumTyping[] {
  return [
    createTyping("electromagnetism", "electromagnetic_induction", q4("Faraday Induktionsgesetz Formel?", "Faraday's law formula?", "Faraday indukció képlet?", "Formula Faraday?", lang),
      [q4("Ε = -N × dΦ/dt; Ε [V], N Umdrehungen, dΦ/dt [Wb/s] Flussänderungsrate", "Ε = -N × dΦ/dt; Ε [V], N turns, dΦ/dt [Wb/s] flux change rate", "Ε = -N × dΦ/dt; Ε [V], N = menetek, dΦ/dt [Wb/s]", "Ε = -N × dΦ/dt; Ε [V], N spire, dΦ/dt [Wb/s]", lang)]),
    createTyping("electromagnetism", "electromagnetic_induction", q4("Weber-SI-Einheit?", "Weber SI unit?", "Weber SI egység?", "Unitate Weber SI?", lang),
      [q4("1 Wb = 1 V × s = 1 T × m²; SI magnetische Flusseinheit", "1 Wb = 1 V × s = 1 T × m²; SI unit of magnetic flux", "1 Wb = 1 V × s = 1 T × m²; mágneses fluxus SI egysége", "1 Wb = 1 V × s = 1 T × m²; unitate SI flux magnetic", lang)]),
    createTyping("electromagnetism", "electromagnetic_induction", q4("Lenz' Rechtsphysik?", "Lenz's Law physics?", "Lenz szabálya fizika?", "Fizica regula Lenz?", lang),
      [q4("Induzierter Strom erzeugt magnetisches Feld gegen Flussänderung (Energieerhaltung)", "Induced current creates magnetic field opposing flux change (energy conservation)", "Indukált áram olyan mezőt hoz létre amely ellentartalmazza a fluxus-változást", "Curent indus creează câmp care se opune schimbării fluxului", lang)]),
    createTyping("electromagnetism", "electromagnetic_induction", q4("Induktion der Spulenbewegung?", "Coil motion induction?", "Tekercs mozgatás indukció?", "Indukție mișcare bobină?", lang),
      [q4("Spulenbewegung im Magnetfeld → Flussänderung → induzierte Spannung; v↑ → E↑", "Coil motion in magnetic field → flux change → induced voltage; v↑ → E↑", "Tekercs mozgatása mágneses mezőben → fluxus-változás → indukált feszültség", "Mișcare bobină în câmp magnetic → schimbare flux → tensiune indusă", lang)]),
    createTyping("electromagnetism", "electromagnetic_induction", q4("Motional EMF Formel?", "Motional EMF formula?", "Motional EMF képlet?", "Formula EMF motional?", lang),
      [q4("Ε = B × l × v; B [T], l [m] Leiterlänge, v [m/s] senkrecht", "Ε = B × l × v; B [T], l [m] conductor length, v [m/s] perpendicular", "Ε = B × l × v; B [T], l [m] vezető hossza, v [m/s]", "Ε = B × l × v; B [T], l [m] lungime conductor, v [m/s]", lang)]),
    createTyping("electromagnetism", "electromagnetic_induction", q4("Eddy-Ströme?", "Eddy currents?", "Örvényáramok?", "Curenți vârtej?", lang),
      [q4("Induzierte Ströme in geschlossenen Leiterschleifen; Wärme erzeugen; zum Bremsen verwendet (magnetische Bremsung)", "Induced currents in closed conductor loops; produce heat; used for braking (magnetic braking)", "Zárt vezető hurokban indukált áramok; hőt termelnek; fékezéshez használnak", "Curenți induși în bucle conductor; produc căldură; folosiți pentru frânare", lang)]),
    createTyping("electromagnetism", "electromagnetic_induction", q4("Magnetische Dämpfung von Lenz?", "Magnetic damping Lenz?", "Mágneses csillapítás Lenz?", "Amortizare magnetică Lenz?", lang),
      [q4("Pendel oder Oszillator im Magnetfeld → Dämpfungskraft durch Lenz → Energieverlust", "Pendulum or oscillator in magnetic field → damping force by Lenz → energy loss", "Inga mágneses mezőben → csillapító erő Lenz-szabály miatt", "Pendul în câmp magnetic → forță amortizare Lenz → pierdere energie", lang)]),
    createTyping("electromagnetism", "electromagnetic_induction", q4("Inverse Induktion: I ↑ → Flux?", "Inverse induction: I ↑ → Flux?", "Fordított indukció: I ↑ → Fluxus?", "Induće inversă: I ↑ → Flux?", lang),
      [q4("Die aktuelle ↑ → eigenen Fluss ↑ → Selbstinduktivität L", "Coil's own current ↑ → own flux ↑ → self-inductance L", "Tekercs saját árama növekedése → saját fluxus növekedése → önindukció", "Creștere curent propriu bobină → flux propriu → auto-inductanță L", lang)]),
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
      q4("Wechselstrom-Generator: Funktionsweise?", "AC Generator: operation?", "AC generátor: működés?", "Generator AC: funcționare?", lang),
      q4("Spule dreht sich im Magnetfeld → harmonische Flussänderung → sinusförmiger Wechselstrom induziert", "Coil rotates in magnetic field → harmonic flux change → sinusoidal AC induced", "Tekercs mágneses mezőben forog → fluxus harmonikus változása → szinuszos váltóáram", "Bobină se rotește în câmp magnetic → schimbare flux armonică → AC sinusoidal indusă", lang),
      [q4("Metallbürste schaltet ein/aus", "Metal brush switches on/off", "Fém érintkező be/ki kapcsol", "Perie metal comutare on/off", lang),
       q4("Nur Gleichstrom", "Only DC", "Csak egyenáram", "Doar DC", lang),
       q4("Braucht einen Dauermagneten", "Needs permanent magnet", "Állandó mágnes kell", "Are nevoie de magnet permanent", lang)], rng));
  }

  for (let i = 0; i < 8; i++) {
    questions.push(createMCQ("electromagnetism", "generators",
      q4("Wechselstrom (AC) Frequenz?", "AC frequency?", "Váltóáram frekvenciája?", "Frecvență AC?", lang),
      q4("f = ω / (2π) = Drehzahl × n; Europa: 50 Hz (ω = 50 × 2π rad/s)", "f = ω / (2π) = rotation rate × n; Europe: 50 Hz", "f = ω / (2π) = fordulatszám × n; Európa: 50 Hz", "f = ω / (2π) = viteza rotație × n; Europa: 50 Hz", lang),
      [q4("Nur 60 Hz USA", "Only 60 Hz USA", "Csak 60 Hz USA", "Doar 60 Hz SUA", lang),
       q4("Unabhängig von der Drehzahl", "Independent of rotation", "Nem függ a fordulatszámtól", "Fără dependență rotație", lang),
       q4("Konstanter Wert", "Constant value", "Állandó érték", "Valoare constantă", lang)], rng));
  }

  for (let i = 0; i < 8; i++) {
    questions.push(createMCQ("electromagnetism", "generators",
      q4("Formel für sinusförmigen Wechselstrom?", "Sinusoidal AC formula?", "Szinuszos váltóáram képlet?", "Formula AC sinusoidal?", lang),
      q4("i(t) = I_max × sin(2πft + φ); I_max = Spitzenwert, f = Frequenz, φ = Phasenwinkel", "i(t) = I_max × sin(2πft + φ); I_max = peak, f = frequency, φ = phase", "i(t) = I_max × sin(2πft + φ); I_max = csúcsérték, f = frekvencia", "i(t) = I_max × sin(2πft + φ); I_max = vârf, f = frecvență", lang),
      [q4("i(t) = I_max × cos(t)", "i(t) = I_max × cos(t)", "i(t) = I_max × cos(t)", "i(t) = I_max × cos(t)", lang),
       q4("i(t) = I_max", "i(t) = I_max", "i(t) = I_max", "i(t) = I_max", lang),
       q4("i(t) = I_max × e^(-t)", "i(t) = I_max × e^(-t)", "i(t) = I_max × e^(-t)", "i(t) = I_max × e^(-t)", lang)], rng));
  }

  for (let i = 0; i < 9; i++) {
    questions.push(createMCQ("electromagnetism", "generators",
      q4("DC-Generator: Pendler?", "DC Generator: commutator?", "DC Generátor: kommulátor?", "Generator DC: comutator?", lang),
      q4("Metallringpaar; schaltet abwechselnd Kontakte → DC Ausgangsrichtung", "Metal ring pair; alternately switches contacts → DC output direction", "Fémes gyűrű; felváltva kapcsolja az érintkezőket → egyenáram kimenet", "Inele metal; comută alternativ contactele → ieșire DC", lang),
      [q4("Zählerelektronik", "Counter electronics", "Elektronikus számítás", "Calcul electronic", lang),
       q4("Blockdrehung", "Blocks rotation", "Forgást akadályozza", "Blochează rotație", lang),
       q4("Nicht erforderlich", "Not needed", "Nincs szüksége", "Nu este nevoie", lang)], rng));
  }

  return questions;
}

function generateGeneratorsTyping(lang = "en", seed = 0): CurriculumTyping[] {
  return [
    createTyping("electromagnetism", "generators", q4("Phasen des Wechselstromgenerators?", "AC generator phases?", "AC Generátor fázisok?", "Faze generator AC?", lang),
      [q4("3 Spulen 120° Offset → 3-phase AC; f=50 Hz, 400V Linie (230V phasenneutral)", "3 coils 120° offset → 3-phase AC; f=50 Hz, 400V line (230V phase-neutral)", "3 tekercs 120° eltolás → 3-fázisú AC; f=50 Hz, 400V fázis", "3 bobine cu decalaj 120° → AC trifazat; f=50 Hz, 400V", lang)]),
    createTyping("electromagnetism", "generators", q4("Effektive (RMS) Spannung?", "Effective (RMS) voltage?", "Effektív (RMS) feszültség?", "Tensiune efectivă (RMS)?", lang),
      [q4("U_eff = U_max / √2 ≈ 0.707 × U_max; gleichwertige Heizung DC; Engineering-Standard", "U_eff = U_max / √2 ≈ 0.707 × U_max; equivalent heating DC; engineering standard", "U_eff = U_max / √2 ≈ 0,707 × U_max; ekvivalens hőelégítés DC-vel", "U_eff = U_max / √2 ≈ 0,707 × U_max; încălzire echivalentă DC", lang)]),
    createTyping("electromagnetism", "generators", q4("Wechselstrom: real vs. reaktiv?", "AC power: real vs reactive?", "Teljesítmény AC: valós vs reaktív?", "Putere AC: reală vs reactivă?", lang),
      [q4("P_real = U_eff × I_eff × cos(φ) [W]; P_reactive = U_eff × I_eff × sin(φ) [VAR]", "P_real = U_eff × I_eff × cos(φ) [W]; P_reactive = U_eff × I_eff × sin(φ) [VAR]", "P_valós = U_eff × I_eff × cos(φ) [W]; P_reaktív = U_eff × I_eff × sin(φ) [VAR]", "P_reală = U_eff × I_eff × cos(φ) [W]; P_reactivă = U_eff × I_eff × sin(φ) [VAR]", lang)]),
    createTyping("electromagnetism", "generators", q4("Generator Ausgangsspannung: Abhängigkeiten?", "Generator output voltage: dependencies?", "Generátor kimenet feszültség: függőségek?", "Tensiune ieșire generator: dependențe?", lang),
      [q4("U ∝ B (Feld), ∝ θ (Winkelgeschwindigkeit), ∝ N (Drehungen), ∝ A (Bereich)", "U ∝ B (field), ∝ ω (angular velocity), ∝ N (turns), ∝ A (area)", "U ∝ B, ∝ ω, ∝ N, ∝ A; U = B × A × ω × N × sin(ωt)", "U ∝ B, ∝ ω, ∝ N, ∝ A; U = B × A × ω × N × sin(ωt)", lang)]),
    createTyping("electromagnetism", "generators", q4("Synchronmotor gegen Generator?", "Synchronous motor vs generator?", "Szinkron motor vs generátor?", "Motor sincron vs generator?", lang),
      [q4("Generator: mechanische → elektrisch; Motor: elektrische → mechanisch; gleiche Struktur!", "Generator: mechanical → electrical; motor: electrical → mechanical; same structure!", "Generátor: mechanikai → elektromos; motor: elektromos → mechanikai", "Generator: mecanic → electric; motor: electric → mecanic; aceeași structură!", lang)]),
    createTyping("electromagnetism", "generators", q4("Turbogenerator (Dampfkraft)?", "Turbogenerator (steam power)?", "Turbógenerátor (gőz energia)?", "Turbogenerator (energie vapor)?", lang),
      [q4("Dampfturbine rotiert Stromerzeuger; hohe Leistung (1000+ MW); benötigt viel Kühlwasser", "Steam turbine rotates electricity generator; high power (1000+ MW); needs lots of cooling water", "Gőz turbina forgatja a generátort; nagy teljesítmény; nagy vízmennyiség hűtéshez", "Turbină vapor rotește generatorul; putere mare; cantitate apă pentru răcire", lang)]),
    createTyping("electromagnetism", "generators", q4("Vissza-EMF (Gegen-EMK)?", "Back EMF (counter-EMF)?", "Vissza-EMF (Back-EMF)?", "EMF contrare (Back-EMF)?", lang),
      [q4("Rotationsspule eigenen Fluss gegen induzierte Spannung; ω↑ → zurück-EMF ↑", "Rotating coil's own flux opposes induced voltage; ω↑ → back-EMF ↑", "Forgó tekercs saját fluxusa csökkenti az indukált feszültséget", "Flux propriu bobina rotitoare oppose tensiunea indusă", lang)]),
    createTyping("electromagnetism", "generators", q4("Vastartalom Perde (Eddy loss)?", "Iron loss (core loss)?", "Vas veszteség?", "Pierdere miez fier?", lang),
      [q4("Eddy Ströme + Hysterese im Eisenkern; Wärme freigesetzt; P_loss ∝ f²", "Eddy currents + hysteresis in iron core; heat released; P_loss ∝ f²", "Örvényáramok + hiszterézis vas magban; hő felszabadul", "Curenți vârtej + histerezis în miez fier; căldură degajată", lang)]),
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
      q4("Transformer: Betrieb?", "Transformer: operation?", "Transzformátor: működés?", "Transformator: funcționare?", lang),
      q4("Zwei Spulen im gemeinsamen Eisenkern; primäre Wechselspannung → magnetisches Feld → sekundäre induziert Spannung", "Two coils in shared iron core; primary AC voltage → magnetic field → secondary induces voltage", "Két tekercs közös vasmagban; primer feszültség → mágneses mező → szekunder tekercs indukál", "Două bobine în miez fier comun; tensiune primar AC → câmp magnetic → bobina secundară induce tensiune", lang),
      [q4("Funktioniert mit DC", "Works with DC", "Egyenárammal működik", "Funcționează cu DC", lang),
       q4("Ohne magnetische Kopplung", "Without magnetic coupling", "Mágneses csatolás nélkül", "Fără cuplare magnetică", lang),
       q4("Speichert eigene Energie", "Stores own energy", "Saját energiáját tároltja", "Stochează propria energie", lang)], rng));
  }

  for (let i = 0; i < 8; i++) {
    questions.push(createMCQ("electromagnetism", "transformers",
      q4("Transformationsgesetz?", "Transformation Law?", "Transzformációs törvény?", "Legea transformării?", lang),
      q4("U2/U1 = N2/N1; Spannungsverhältnis = Drehungsverhältnis", "U₂/U₁ = N₂/N₁; voltage ratio = turns ratio", "U₂/U₁ = N₂/N₁; feszültség arány = menetek arány", "U₂/U₁ = N₂/N₁; raport tensiuni = raport spire", lang),
      [q4("U₂/U₁ = N₁/N₂", "U₂/U₁ = N₁/N₂", "U₂/U₁ = N₁/N₂", "U₂/U₁ = N₁/N₂", lang),
       q4("U₂ = U₁", "U₂ = U₁", "U₂ = U₁", "U₂ = U₁", lang),
       q4("N₂ = N₁", "N₂ = N₁", "N₂ = N₁", "N₂ = N₁", lang)], rng));
  }

  for (let i = 0; i < 8; i++) {
    questions.push(createMCQ("electromagnetism", "transformers",
      q4("Step-up gegen Step-down-Transformator?", "Step-up vs step-down transformer?", "Emelő vs leszálló transzformátor?", "Transformator ridicare vs coborâre?", lang),
      q4("Schritt-up: N₂>N₁ → U₂>U₁ (Spannung ↑, Strom ↓); Schritt-down: N₂<N₁ → U₂<U₁", "Step-up: N₂>N₁ → U₂>U₁ (voltage ↑, current ↓); Step-down: N₂<N₁ → U₂<U₁", "Emelő: N₂>N₁ → U₂>U₁; Leszálló: N₂<N₁ → U₂<U₁", "Ridicare: N₂>N₁ → U₂>U₁; Coborâre: N₂<N₁ → U₂<U₁", lang),
      [q4("Gleiches Verhältnis", "Same ratio", "Egyforma aránnyal", "Raport egal", lang),
       q4("Umgekehrt", "Reversed", "Fordított", "Invers", lang),
       q4("Unabhängig von N", "Independent of N", "Nem függ N-től", "Fără dependență de N", lang)], rng));
  }

  for (let i = 0; i < 9; i++) {
    questions.push(createMCQ("electromagnetism", "transformers",
      q4("Transformer-Effizienz?", "Transformer efficiency?", "Transzformátor hatásfok?", "Eficiență transformator?", lang),
      q4("η = P2/P1 ≈ 99% idealerweise (reale ~95-98%,-Verluste: Eisen + Kupferwärme)", "η = P₂/P₁ ≈ 99% ideally (real ~95-98%, losses: iron + copper heat)", "η = P₂/P₁ ≈ 99% ideális (valódi ~95-98%)", "η = P₂/P₁ ≈ 99% ideal (real ~95-98%)", lang),
      [q4("Immer 100%", "Always 100%", "Mindig 100%", "Mereu 100%", lang),
       q4("Unter 50%", "Below 50%", "50% alatt", "Sub 50%", lang),
       q4("Keine Verluste", "No losses", "Nincs veszteség", "Fără pierderi", lang)], rng));
  }

  return questions;
}

function generateTransformersTyping(lang = "en", seed = 0): CurriculumTyping[] {
  return [
    createTyping("electromagnetism", "transformers", q4("Machtgesetz für Transformer?", "Transformer power law?", "Transzformátor teljesítmény törvény?", "Legea putere transformator?", lang),
      [q4("Idealer Transformator: P1 = P2 → U1 × I1 = U2 × I2; Energieeinsparung", "Ideal transformer: P₁ = P₂ → U₁ × I₁ = U₂ × I₂; energy conservation", "Ideális: P₁ = P₂ → U₁ × I₁ = U₂ × I₂", "Ideal: P₁ = P₂ → U₁ × I₁ = U₂ × I₂", lang)]),
    createTyping("electromagnetism", "transformers", q4("Aktuelle Transformationsformel?", "Current transformation formula?", "Áram transzformáció képlet?", "Formula transformare curent?", lang),
      [q4("I2/I1 = N1/N2; Ströme im umgekehrten Verhältnis", "I₂/I₁ = N₁/N₂; currents in inverse ratio", "I₂/I₁ = N₁/N₂; áramok fordított arányban", "I₂/I₁ = N₁/N₂; curenți în raport invers", lang)]),
    createTyping("electromagnetism", "transformers", q4("Transformer-Verluste?", "Transformer losses?", "Transzformátor veszteségek?", "Pierderi transformator?", lang),
      [q4("1) Eisenverlust: Wirbelströme + Hysterese; 2) Kupferverlust: I²R Heizspulen", "1) Iron loss: eddy currents + hysteresis; 2) Copper loss: I²R heating coils", "1) Vastartalom: örvényáramok + hiszterézis; 2) Réz: tekercs hője", "1) Pierdere fier: eddy currents + histerezis; 2) Pierdere cupru: I²R încălzire bobine", lang)]),
    createTyping("electromagnetism", "transformers", q4("Hochspannungsübertragung: Schritt hoch?", "High voltage transmission: step-up?", "Nagyfeszültség átadás: lépcsőzés?", "Transmisie înaltă tensiune: trepte?", lang),
      [q4("Kraftwerk 230V → Step-up 230kV → Langstrecken → Step-down 230V Verbraucher; 1000× Stromreduktion = 10⁶× weniger Verlust", "Power plant 230V → step-up 230kV → long distance → step-down 230V consumer; 1000× current reduction = 10⁶× less loss", "Erőmű 230V → emelő 230kV → távolság → leszálló 230V; 1000× áram csökkentés", "Centrală electrică 230V → ridicare 230kV → distanță → coborâre 230V; 1000× reducere curent", lang)]),
    createTyping("electromagnetism", "transformers", q4("Autotransformator?", "Autotransformer?", "Autotranszformátor?", "Autotransformator?", lang),
      [q4("Einzelspule; Primär- und Sekundärteilwicklungen; kompakt; kleine Kraftkupplung", "Single coil; primary and secondary share windings; compact; small power coupling", "Egyetlen tekercs; primer és szekunder közös; kompaktabb", "Singură bobină; primar și secundar común; mai compact", lang)]),
    createTyping("electromagnetism", "transformers", q4("Transformator-Eisen-Kern?", "Transformer iron core?", "Transzformátor vasmagra?", "Miez tranformator fier?", lang),
      [q4("Laminiertes Eisen: dünne isolierte Schichten; reduziert Wirbelströme → weniger Verlust", "Laminated iron: thin insulated layers; reduces eddy currents → less loss", "Lamellák (laminált vas): vékony szigetelt rétegek; örvényáramok csökkent", "Laminat fier: straturi subțiri izolate; eddy currents reduse", lang)]),
    createTyping("electromagnetism", "transformers", q4("Transformerkühlung?", "Transformer cooling?", "Transzformátor hűtés?", "Răcire transformator?", lang),
      [q4("Klein: Luftkühlung (Fan); mittel: Mineralöl; groß: dielektrisches Öl", "Small: air cooling (fan); medium: mineral oil; large: dielectric oil", "Kis: levegő (ventillátor); közép: olaj; nagy: speciális olaj", "Mic: aer (ventilator); mediu: ulei mineral; mare: ulei dielectric", lang)]),
    createTyping("electromagnetism", "transformers", q4("Transformer-Geräusch?", "Transformer noise?", "Transzformátor zaja?", "Zgomot transformator?", lang),
      [q4("~50 Hz fundamental + Oberwellen (100 Hz); Magnetostriktion (Eisenschwingung); Ölkühlblasen", "~50 Hz fundamental + harmonics (100 Hz); magnetostriction (iron vibration); oil cooling bubbles", "~50 Hz alapharmonikus; magnetostrikció (vas vibrálás); olaj hűtésben buborék", "~50 Hz + armonici; magnetostricție (oscilație fier); bule în ulei", lang)]),
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
      q4("Strom + magnetisches Feld = Lorentzkraft; F = B × I × l; Kraft rotiert Spule", "Current + magnetic field = Lorentz force; F = B × I × l; force rotates coil", "Áram + mágneses mező = Lorentz erő; F = B × I × l", "Curent + câmp magnetic = Forță Lorentz; F = B × I × l", lang),
      [q4("Wärmeerzeugung", "Heat production", "Hő termelés", "Producție căldură", lang),
       q4("Stromstopp", "Electricity stop", "Elektromosság leállása", "Oprire electricitate", lang),
       q4("Lichtemission", "Light emission", "Fény kibocsátás", "Emisie lumină", lang)], rng));
  }

  for (let i = 0; i < 8; i++) {
    questions.push(createMCQ("electromagnetism", "electric_motors",
      q4("AC-Motor (3-phase Induktion): Betrieb?", "AC motor (3-phase induction): operation?", "AC motor (3-fázisú indukció): működés?", "Motor AC (3-fază inducție): funcționare?", lang),
      q4("3-phase AC → rotierendes Magnetfeld → Wirbelströme im Rotor → Lorentzkraft → Rotation", "3-phase AC → rotating magnetic field → eddy currents in rotor → Lorentz force → rotation", "3-fázisú AC → forgó mágneses mező → örvényáramok rotor-ban → forgás", "AC trifazat → câmp magnetic rotitor → curenți vârtej în rotor → forță Lorentz", lang),
      [q4("Synchrone RPM = AC Frequenz × Pole", "Synchronous RPM = AC frequency × poles", "Szinkron fordulat = AC frekvencia × pólusszám", "Rotații sincrone = frecvență AC × poli", lang),
       q4("Nur 3-phase direkt", "Only 3-phase direct", "Csak 3-fázis közvetlenül", "Doar 3-fază direct", lang),
       q4("Keine asynchronen", "No asynchronous", "Nincs aszinkron", "Fără asincron", lang)], rng));
  }

  for (let i = 0; i < 8; i++) {
    questions.push(createMCQ("electromagnetism", "electric_motors",
      q4("Szlip (Slip) Aszinkron Motor?", "Slip in induction motor?", "Szlip aszinkron motor?", "Alunecare motor inducție?", lang),
      q4("s = (n_sync - n_rotor) / n_sync; s = 0: synchron, s = 1: Rotor gestoppt", "s = (n_sync - n_rotor) / n_sync; s = 0: synchronous, s = 1: rotor stopped", "s = (n_szinkron - n_rotor) / n_szinkron; s=0 szinkron, s=1 áll", "s = (n_sincron - n_rotor) / n_sincron; s=0 sincron, s=1 rotor pe loc", lang),
      [q4("Geschwindigkeit völlig gleich", "Speed completely equal", "Teljesen egyenlő fordulat", "Viteză complet egală", lang),
       q4("Nie ausrutschen", "Never slip", "Nincs szlip", "Fără alunecare", lang),
       q4("Nur positiv", "Positive only", "Pozitív egyedül", "Doar pozitiv", lang)], rng));
  }

  for (let i = 0; i < 9; i++) {
    questions.push(createMCQ("electromagnetism", "electric_motors",
      q4("DC-Motor: Pendlerrolle?", "DC motor: commutator role?", "DC motor: kommulátor szerep?", "Motor DC: rol comutator?", lang),
      q4("Wechselnd schaltet Polarität in rotierende Spule; kontinuierliche Lorentzkraft in Rotationsrichtung", "Alternately switches polarity in rotating coil; continuous Lorentz force in rotation direction", "Felváltva kapcsolja a polárást; folyamatos erő forgás irányban",
       "Comută alternativ polaritatea; forță continuă în direcția rotație", lang),
      [q4("Stoppt den Motor", "Stops motor", "Megállítja motort", "Oprește motor", lang),
       q4("Keine Rolle", "No role", "Nincs szerep", "Fără rol", lang),
       q4("Erzeugt Wärme", "Generates heat", "Hőt termel", "Generează căldură", lang)], rng));
  }

  return questions;
}

function generateElectricMotorsTyping(lang = "en", seed = 0): CurriculumTyping[] {
  return [
    createTyping("electromagnetism", "electric_motors", q4("Motorleistung?", "Motor power?", "Villanymotor teljesítmény?", "Putere motor?", lang),
      [q4("P = U × I × cos(φ) × η [W]; η = Effizienz ~85-95%", "P = U × I × cos(φ) × η [W]; η = efficiency ~85-95%", "P = U × I × cos(φ) × η [W]; η = hatásfok ~85-95%", "P = U × I × cos(φ) × η [W]; η = eficiență ~85-95%", lang)]),
    createTyping("electromagnetism", "electric_motors", q4("Nyomaték (Torque) Motor?", "Motor torque?", "Motor nyomaték?", "Cuplu motor?", lang),
      [q4("M = k × Φ × I [N]; größeres Fluss-/Strommoment = größeres Drehmoment", "M = k × Φ × I [N⋅m]; larger flux/current = larger torque", "M = k × Φ × I [N⋅m]; nagyobb fluxus/áram = nagyobb nyomaték", "M = k × Φ × I [N⋅m]; flux/curent mai mare = cuplu mai mare", lang)]),
    createTyping("electromagnetism", "electric_motors", q4("Motor-Startstrom?", "Motor starting current?", "Indítási áram motor?", "Curent pornire motor?", lang),
      [q4("Starten des aktuellen I_start >> I_rated (3-10×); keine Rück-EMF zunächst; nimmt allmählich ab", "Starting current I_start >> I_rated (3-10×); no back-EMF initially; decreases gradually", "Induláskor I >> I_névleges; nincs vissza-EMF, fokozatosan csökken", "Pornire I_start >> I_rated; fără EMF contrare inițial; scade treptat", lang)]),
    createTyping("electromagnetism", "electric_motors", q4("Andere Motortypen?", "Other motor types?", "Más motor típusok?", "Alte tipuri motoare?", lang),
      [q4("1) Universal: AC/DC; 2) Synchron: AC nur bei Sync-Geschwindigkeit; 3) Brushless: elektronische Kommutation", "1) Universal: AC/DC; 2) Synchronous: AC only at sync speed; 3) Brushless: electronic commutation", "1) Univerzális: AC/DC; 2) Szinkron: AC szinkron fordulaton; 3) Szénkefe nélkül: elektronikus kommuláció", "1) Universal: AC/DC; 2) Sincron: AC doar viteză sincron; 3) Fără perii: comutare electronică", lang)]),
    createTyping("electromagnetism", "electric_motors", q4("Vissza-EMF (Back EMF)?", "Back EMF?", "Vissza-EMF?", "EMF contrare?", lang),
      [q4("Das Feld der Drehspule induziert die spannungsgegengesetzte Spannung; hinten-EMF = k × θ × Φ", "Rotating coil's field induces voltage opposing applied voltage; back-EMF = k × ω × Φ", "Forgó tekercs mágnese indukál ellentétes feszültséget; E_vissza = k × ω × Φ", "Câmp bobinei rotitoare induce tensiune opusă; EMF_contrare = k × ω × Φ", lang)]),
    createTyping("electromagnetism", "electric_motors", q4("Richtungswechsel?", "Motor direction reversal?", "Motor megfordítás?", "Inversare direcție motor?", lang),
      [q4("Gleichstrom: umgekehrte Versorgungspolarität; Wechselstrom: Wechselstromphasen 2", "DC: reverse supply polarity; AC: swap 2 phases", "DC: tápellátás polaritása fordítása; AC: 2 fázis felcserélése", "DC: inversare polaritate alimentare; AC: inversare 2 faze", lang)]),
    createTyping("electromagnetism", "electric_motors", q4("Motor-Effizienz gegen Generator?", "Motor efficiency vs generator?", "Motor hatásfok vs generátor?", "Eficiență motor vs generator?", lang),
      [q4("Motor η = P_mech/P_elec; Generator η = P_elec/P_mech; Motor in der Regel höher", "Motor η = P_mech/P_elec; Generator η = P_elec/P_mech; motor usually higher", "Motor η = P_mech/P_elec; Generátor η = P_elec/P_mech; motor általában magasabb", "Motor η = P_mech/P_elec; Generator η = P_elec/P_mech; motor obicei mai mare", lang)]),
    createTyping("electromagnetism", "electric_motors", q4("Linearmotor?", "Linear motor?", "Lineáris motor?", "Motor liniar?", lang),
      [q4("Spule + magnetisches Feld = F = B × I × l → gerade Bewegung; Züge (Maglev), Lautsprecher", "Coil + magnetic field = F = B × I × l → straight motion; trains (Maglev), speakers", "Tekercs + mágneses mező = F = B × I × l → egyenes mozgás; vonatok, hangszórók", "Bobină + câmp magnetic = F = B × I × l → mișcare lineară; trenuri (Maglev), difuzoare", lang)]),
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
