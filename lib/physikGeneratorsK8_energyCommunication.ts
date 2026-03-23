// ─── PHYSICS GENERATORS K8: ENERGY, ENVIRONMENT & COMMUNICATION ───────────
// Energia & Környezet + Kommunikáció — 8. osztályos szint
// 
// 9 subtopic × (22-28 MCQ + 8 Typing) = ~270+ kérdés
// Megújuló energia, klímaváltozás, fenntartható fejlődés, EM hullámok, kommunikáció

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
// ENERGY & ENVIRONMENT (Energia & Környezet)
// ═════════════════════════════════════════════════════════════════════════════

function generateRenewableEnergyMCQ(lang = "en", seed = 0): CurriculumMCQ[] {
  const rng = mulberry32(seed);
  const qs: CurriculumMCQ[] = [];

  for (let i = 0; i < 6; i++) {
    qs.push(createMCQ("energy_comm", "renewable_energy",
      q4("Megújuló energiaforrások?", "Renewable energy sources?", "Megújuló energiaforrások?", "Surse energie regenerabile?", lang),
      q4("Napenergia, szélenergia, vízenergia, geotermikus, biomassza; természetesen újrajön", "Solar, wind, hydroelectric, geothermal, biomass; naturally replenish", "Napenergia, szél, víz, geotermikus, biomassza; természetesen újrajön", "Soare, vânt, apă, geotermal, biomasă; se regenerează natural", lang),
      [q4("Csak szénhidrogénők", "Only hydrocarbons", "Csak szénhidrogén", "Doar hidrocarburi", lang),
       q4("Korlátlan készlet", "Unlimited supply", "Korlátlan készlet", "Alimentare nelimitată", lang),
       q4("Nincs kiszámítható", "Unpredictable", "Nincs kiszámítható", "Impredictibil", lang)], rng));
  }

  for (let i = 0; i < 6; i++) {
    qs.push(createMCQ("energy_comm", "renewable_energy",
      q4("Napenergia előnyei?", "Solar energy advantages?", "Napenergia előnyei?", "Avantaje energie solară?", lang),
      q4("Tiszta (nincs CO₂), inexhaustibilis, decentralizált (háztartásban is), nyom nélkül", "Clean (no CO₂), inexhaustible, decentralized (home use), footprint-free", "Tiszta (nincs CO₂), inexhaustibilis, decentralizált, nyom nélkül", "Curat (fără CO₂), inepuizabil, descentralizat, fără amprentă", lang),
      [q4("Drága csak", "Only expensive", "Drága csak", "Doar scump", lang),
       q4("Éjszaka működik", "Works at night", "Éjszaka működik", "Funcționează noaptea", lang),
       q4("Nem hatékony", "Inefficient", "Nem hatékony", "Ineficient", lang)], rng));
  }

  for (let i = 0; i < 6; i++) {
    qs.push(createMCQ("energy_comm", "renewable_energy",
      q4("Szélenergia: Turbina Működés?", "Wind energy: turbine operation?", "Szélenergia: turbina működés?", "Energie eolian: turbină funcționare?", lang),
      q4("Szél forgat turbinát → generátor → elektromos áram; átlagos szélsebesség 10-15 m/s optimális", "Wind rotates turbine → generator → electricity; average 10-15 m/s optimal", "Szél forgat turbinát → generátor → elektromos áram; 10-15 m/s optimális", "Vânt rotește turbină → generator → curent electric; 10-15 m/s optim", lang),
      [q4("Nem működik változó szélben", "Doesn't work with variable wind", "Nem működik változó szélben", "Nu funcționează cu vânt variabil", lang),
       q4("Hőtermelés", "Heat generation", "Hőtermelés", "Generare căldură", lang),
       q4("Mérgezi a levegőt", "Poisons air", "Mérgezi a levegőt", "Otrăvește aer", lang)], rng));
  }

  for (let i = 0; i < 7; i++) {
    qs.push(createMCQ("energy_comm", "renewable_energy",
      q4("Vízenergia: Rezervoár + turbina?", "Hydroelectric: reservoir + turbine?", "Vízenergia: tározó + turbina?", "Hidroelectric: rezervor + turbină?", lang),
      q4("Duzzasztógát tározót képez → vízesés → turbinát forgatja → generátor; 100 MWatt+ nagy erômûvek", "Dam creates reservoir → waterfall → rotates turbine → generator; 100+ MW large plants", "Duzzasztógát tározót képez → vízesés → turbina → generátor; 100+ MW", "Baraj creeazǎ rezervor → cădere apă → turbină → generator; 100+ MW", lang),
      [q4("Nincs szükség vízesésre", "No waterfall needed", "Nincs vízesés", "Fără cădere apă", lang),
       q4("Szél hajtja", "Wind driven", "Szél hajtja", "Condus de vânt", lang),
       q4("Hőbevitel kell", "Heat input needed", "Hőbevitel kell", "Intrare căldură", lang)], rng));
  }

  return qs;
}

function generateEnergyEfficiencyMCQ(lang = "en", seed = 0): CurriculumMCQ[] {
  const rng = mulberry32(seed);
  const qs: CurriculumMCQ[] = [];

  for (let i = 0; i < 6; i++) {
    qs.push(createMCQ("energy_comm", "energy_efficiency",
      q4("Energia Hatásfok: Definíció?", "Energy efficiency: definition?", "Energia hatásfok: definíció?", "Eficiență energie: definiție?", lang),
      q4("η = hasznos output / teljes input × 100%; magasabb = kevesebb pazarlás", "η = useful output / total input × 100%; higher = less waste", "η = hasznos kimenet / teljes bemenet × 100%; magasabb = kevesebb pazarlás", "η = ieșire utilă / intrare totală × 100%; mai mare = mai puțin risipă", lang),
      [q4("Nem definiálható", "Undefined", "Nem definiálható", "Nedefinit", lang),
       q4("Mindig 100%", "Always 100%", "Mindig 100%", "Mereu 100%", lang),
       q4("Negatív érték", "Negative value", "Negatív érték", "Valoare negativă", lang)], rng));
  }

  for (let i = 0; i < 6; i++) {
    qs.push(createMCQ("energy_comm", "energy_efficiency",
      q4("Hőleadás (Heat loss) vs Hasznos Munka?", "Heat loss vs useful work?", "Hőleadás vs hasznos munka?", "Pierdere căldură vs lucru util?", lang),
      q4("Legtöbb eszköz hőt termel; motor: ~35% munka, ~65% hő; LED: ~85% fény, ~15% hő", "Most devices produce heat; motors: ~35% work, ~65% heat; LED: ~85% light, ~15% heat", "Legtöbb eszköz hőt termel; motor: ~35% munka, ~65% hő; LED: ~85% fény", "Majoritatea dispozitivelor produc căldură; motor: ~35% lucru, ~65% căldură; LED: ~85% lumină", lang),
      [q4("Nincs hőleadás ideális motorban", "No heat loss ideal motor", "Nincs hőleadás", "Fără pierdere căldură", lang),
       q4("Összes munka hő", "All work is heat", "Összes munka hő", "Tot lucrul este căldură", lang),
       q4("Nincsen hasznosítható", "Nothing useful", "Nincs hasznos", "Nimic util", lang)], rng));
  }

  for (let i = 0; i < 6; i++) {
    qs.push(createMCQ("energy_comm", "energy_efficiency",
      q4("LED vs Izzólámpa: Energia hasznosítás?", "LED vs incandescent: energy use?", "LED vs izzólámpa: energia felhasználás?", "LED vs incandescent: consum energie?", lang),
      q4("LED: 80% kevesebb energia azonos fényhöz; 50000 óra élettartam; klasszikus: 1000 óra, sok pazarlás", "LED: 80% less energy for same light; 50000 h lifespan; incandescent: 1000 h, wasteful", "LED: 80% kevesebb energia ugyanaz a fény; 50000 óra; izzó: 1000 óra, pazarlóbb", "LED: 80% mai puțină energie pentru aceeași lumină; 50000 ore; incandescent: 1000 ore", lang),
      [q4("Nincs különbség", "No difference", "Nincs különbség", "Fără diferență", lang),
       q4("Izzó jobban", "Incandescent better", "Izzó jobban", "Incandescent mai bun", lang),
       q4("LED több energiát kell", "LED uses more", "LED több energiát", "LED folosește mai mult", lang)], rng));
  }

  for (let i = 0; i < 7; i++) {
    qs.push(createMCQ("energy_comm", "energy_efficiency",
      q4("Termodinamika 2. törvénye: Entrópia?", "2nd Law Thermodynamics: entropy?", "Termodinamika 2. törvénye: entrópia?", "2. Legea Termodinamicii: entropie?", lang),
      q4("Entrópia S: nem spontán csökkenhet zárt rendszerben; mindig nô vagy konstans; derfor nem lehet 100% hatékonysság", "Entropy S: never decreases spontaneously; always increases; therefore max efficiency < 100%", "Entrópia: nem csökkenhet spontán; mindig nô; ezért max hatásfok < 100%", "Entropie: nu scade spontan; mereu crește; deci eficiență max < 100%", lang),
      [q4("Entrópia csökken", "Entropy decreases", "Entrópia csökken", "Entropie scade", lang),
       q4("Nincsen korlát", "No limit", "Nincsen korlát", "Fără limită", lang),
       q4("100% lehetséges", "100% possible", "100% lehetséges", "100% posibil", lang)], rng));
  }

  return qs;
}

function generateClimateChangeMCQ(lang = "en", seed = 0): CurriculumMCQ[] {
  const rng = mulberry32(seed);
  const qs: CurriculumMCQ[] = [];

  for (let i = 0; i < 6; i++) {
    qs.push(createMCQ("energy_comm", "climate_change",
      q4("Üvegházhatás (Greenhouse effect)?", "Greenhouse effect?", "Üvegházhatás?", "Efect seră?", lang),
      q4("CO₂, CH₄, H₂O, N₂O gázok visszatartják a hősugárzást → bolygó felület melegszik", "CO₂, CH₄, H₂O, N₂O trap heat radiation → planet surface warms", "CO₂, CH₄, H₂O, N₂O gázok visszatartják a hő → bolygó melegszik", "CO₂, CH₄, H₂O, N₂O rețin radiația termică → suprafață planetă se încălzește", lang),
      [q4("Nincsen hőmelegítés", "No heat trapping", "Nincsen hőmelegítés", "Fără reținere căldură", lang),
       q4("Lehûlés okoznak", "Causes cooling", "Lehûlés okoznak", "Cauze răcire", lang),
       q4("Levegô nem jelent", "Air not relevant", "Levegô nem jelent", "Aer nu e relevant", lang)], rng));
  }

  for (let i = 0; i < 6; i++) {
    qs.push(createMCQ("energy_comm", "climate_change",
      q4("Antropogén CO₂ kibocsátás forrásai?", "Anthropogenic CO₂ sources?", "Antropogén CO₂ források?", "Surse CO₂ antropogene?", lang),
      q4("Fosszilis tüzelô (szén, olaj, gáz): 75%; ipari folyamatok: 25%; szén-fog szénhidrogén tüzelôk", "Fossil fuels (coal, oil, gas): 75%; industrial: 25%; carbon from hydrocarbon burning", "Fosszilis tüzelô: 75%; ipari: 25%; szénhidrogénből CO₂", "Combustibili fosili: 75%; industrial: 25%; carbon din ardere hidrocarburi", lang),
      [q4("Csak levegô", "Only air", "Csak levegô", "Doar aer", lang),
       q4("Természetes csak", "Natural only", "Természetes csak", "Doar natural", lang),
       q4("Nincsen forrás", "No source", "Nincsen forrás", "Fără sursă", lang)], rng));
  }

  for (let i = 0; i < 7; i++) {
    qs.push(createMCQ("energy_comm", "climate_change",
      q4("Globális melegedés következményei?", "Global warming consequences?", "Globális melegedés következményei?", "Consecințe încălzire globală?", lang),
      q4("Tengerszint emelkedés, szélsôséges időjárás, ökoszisztéma veszély, agrikultúra zavar, migrációs válság", "Sea level rise, extreme weather, ecosystem loss, crop failure, migration crisis", "Tengerszint emelkedés, szélsôség, ökoszisztéma veszteség, terméshiány, migráció", "Ridicare nivel mări, vreme extremă, pierdere ecosistem, eșec recoltă, criză migrație", lang),
      [q4("Nincs hatás", "No effect", "Nincs hatás", "Fără efect", lang),
       q4("Jó az ember számára", "Good for humans", "Jó az ember számára", "Bun pentru oameni", lang),
       q4("Helyileg csak", "Only local", "Helyileg csak", "Doar local", lang)], rng));
  }

  return qs;
}

// ═════════════════════════════════════════════════════════════════════════════
// COMMUNICATION (Kommunikáció)
// ═════════════════════════════════════════════════════════════════════════════

function generateElectromagneticWavesMCQ(lang = "en", seed = 0): CurriculumMCQ[] {
  const rng = mulberry32(seed);
  const qs: CurriculumMCQ[] = [];

  for (let i = 0; i < 5; i++) {
    qs.push(createMCQ("energy_comm", "electromagnetic_waves",
      q4("Elektromágneses hullám: Terjedés?", "EM wave: propagation?", "EM hullám: terjedés?", "Undă EM: propagare?", lang),
      q4("Elektromos + mágneses mezô oszcillál derékszögben egymásra, sebessége c = 3×10⁸ m/s vákuumban", "Electric + magnetic field oscillate perpendicular, speed c = 3×10⁸ m/s in vacuum", "Elektromos + mágneses mező oszcillál derékszögben, c sebesség", "Câmp electric + magnetic oscilează perpendicular, viteză c = 3×10⁸ m/s", lang),
      [q4("Csak elektromos", "Only electric", "Csak elektromos", "Doar electric", lang),
       q4("Mágneses nélkül", "Without magnetic", "Mágneses nélkül", "Fără magnetic", lang),
       q4("Nincs terjedés", "No propagation", "Nincs terjedés", "Fără propagare", lang)], rng));
  }

  for (let i = 0; i < 5; i++) {
    qs.push(createMCQ("energy_comm", "electromagnetic_waves",
      q4("EM spektrum: Hullámhosszak sorrendje?", "EM spectrum: wavelength order?", "EM spektrum: hullámhossz sorrend?", "Spectrul EM: ordine lungime undă?", lang),
      q4("Rádió (km) → Mikrohullám (mm) → Infravörös → Látható → UV → Röntgen → Gamma (pm)", "Radio (km) → Microwave (mm) → IR → Visible → UV → X-ray → Gamma (pm)", "Rádió (km) → Mikrohullám (mm) → IR → Látható → UV → Röntgen → Gamma", "Radio (km) → Microundă (mm) → IR → Vizibil → UV → Raze X → Gamma (pm)", lang),
      [q4("Fordított sorrend", "Reversed order", "Fordított sorrend", "Ordine inversă", lang),
       q4("Nincs sorrend", "No order", "Nincs sorrend", "Fără ordine", lang),
       q4("Rádió röntgen után", "Radio after X-ray", "Rádió után röntgen", "Radio după X-ray", lang)], rng));
  }

  for (let i = 0; i < 5; i++) {
    qs.push(createMCQ("energy_comm", "electromagnetic_waves",
      q4("Rádióhullámok Kommunikáció?", "Radio waves communication?", "Rádióhullámok kommunikáció?", "Unde radio comunicație?", lang),
      q4("Oszcilláló áram antenna-ban → EM hullám sugárzás → másik antenna receives → demodulálódik jel", "Oscillating current in antenna → EM wave radiation → another antenna receives → signal demodulates", "Oszcilláló áram antenna-ban → EM hullám → másik antenna → jel demodulálódik", "Curent oscilant în antenă → radiație undă EM → altă antenă recepție → semnal demodulare", lang),
      [q4("Vezetékhez kell", "Needs wires", "Vezetékhez kell", "Are nevoie de fire", lang),
       q4("Nincs demodulálás", "No demodulation", "Nincs demodulálás", "Fără demodulare", lang),
       q4("Soha nem radio", "Never radio", "Soha nem rádió", "Niciodată radio", lang)], rng));
  }

  for (let i = 0; i < 6; i++) {
    qs.push(createMCQ("energy_comm", "electromagnetic_waves",
      q4("Fiberoptika előnyei?", "Fiber optics advantages?", "Fiberoptika előnyei?", "Avantaje fiberoptică?", lang),
      q4("Magas sávszélesség, nincs elektromágneses zavar, hosszú távolság (100+ km), kis költség/bit", "High bandwidth, no EM interference, long distance (100+ km), low cost/bit", "Magas sávszélesség, nincs EM zavar, hosszú távolság, kis költség", "Lărgime bandă mare, fără interferență EM, distanță lungă (100+ km), cost mic/bit", lang),
      [q4("Réz vezetékkel jobbabb", "Better than copper wire", "Rézvezeték jobbabb", "Mai bun decât fir cupru", lang),
       q4("Rövid távolság csak", "Short distance only", "Rövid távolság csak", "Doar distanță scurtă", lang),
       q4("Nincs sávszélesség", "No bandwidth", "Nincs sávszélesség", "Fără lărgime bandă", lang)], rng));
  }

  return qs;
}

function generateRadioTVWirelessMCQ(lang = "en", seed = 0): CurriculumMCQ[] {
  const rng = mulberry32(seed);
  const qs: CurriculumMCQ[] = [];

  for (let i = 0; i < 5; i++) {
    qs.push(createMCQ("energy_comm", "radio_tv_wireless",
      q4("AM (Amplitude Modulation) vs FM (Frequency Modulation)?", "AM vs FM modulation?", "AM vs FM moduláció?", "Modulație AM vs FM?", lang),
      q4("AM: amplitúdó változik jel szerint, hosszú hullám, érzékeny zajra; FM: frekvencia változik, rövidebb hullám, zaj-mentes", "AM: amplitude varies with signal, long wave, noisy; FM: frequency varies, short wave, noise-free", "AM: amplitúdó változik, hosszú hullám, zajos; FM: frekvencia változik, rövid hullám, zajos-mentes", "AM: amplitudine variază, undă lungă, zgomotos; FM: frecvență variază, undă scurtă, fără zgomot", lang),
      [q4("Azonos moduláció", "Same modulation", "Azonos moduláció", "Aceeași modulație", lang),
       q4("Nincs különbség", "No difference", "Nincs különbség", "Fără diferență", lang),
       q4("FM nem létezik", "FM non-existent", "FM nem létezik", "FM nu există", lang)], rng));
  }

  for (let i = 0; i < 5; i++) {
    qs.push(createMCQ("energy_comm", "radio_tv_wireless",
      q4("WiFi & Bluetooth frekvencia?", "WiFi & Bluetooth frequency?", "WiFi & Bluetooth frekvencia?", "WiFi & Bluetooth frecvență?", lang),
      q4("Mindkettő 2,4 GHz sávban (ISM); WiFi: nagyobb sávszélesség (típikus 54 Mbps), Bluetooth: rövidebb hatótáv (~10m)", "Both 2.4 GHz band (ISM); WiFi: wider bandwidth (54 Mbps typ), Bluetooth: shorter range (~10m)", "Mindkettő 2,4 GHz sávban; WiFi: szélesebb sávszélesség, Bluetooth: rövidebb hatótáv", "Ambele 2,4 GHz bandă (ISM); WiFi: lărgime bandă mai largă (54 Mbps), Bluetooth: rază mai scurtă", lang),
      [q4("WiFi csak", "WiFi only", "WiFi csak", "Doar WiFi", lang),
       q4("Eltérô sávok", "Different bands", "Eltérô sávok", "Benzi diferite", lang),
       q4("Nincs frekvencia", "No frequency", "Nincs frekvencia", "Fără frecvență", lang)], rng));
  }

  for (let i = 0; i < 6; i++) {
    qs.push(createMCQ("energy_comm", "radio_tv_wireless",
      q4("Mobiltelefon 4G/5G?", "Mobile phone 4G/5G?", "Mobiltelefon 4G/5G?", "Telefon mobil 4G/5G?", lang),
      q4("4G: ~100 Mbps; 5G: ~1 Gbps (10× gyorsabb), alacsonyabb késleltetés, több egyidejû kapcsolat", "4G: ~100 Mbps; 5G: ~1 Gbps (10× faster), lower latency, more simultaneous", "4G: ~100 Mbps; 5G: ~1 Gbps (10× gyorsabb), kevesebb késleltetés", "4G: ~100 Mbps; 5G: ~1 Gbps (10× mai rapid), latență mai mică, mai multe conexiuni", lang),
      [q4("Azonos sebesség", "Same speed", "Azonos sebesség", "Aceeași viteză", lang),
       q4("4G gyorsabb", "4G faster", "4G gyorsabb", "4G mai rapid", lang),
       q4("5G nincs még", "5G not yet", "5G nincs még", "5G nu încă", lang)], rng));
  }

  return qs;
}

function generateDigitalCommunicationMCQ(lang = "en", seed = 0): CurriculumMCQ[] {
  const rng = mulberry32(seed);
  const qs: CurriculumMCQ[] = [];

  for (let i = 0; i < 5; i++) {
    qs.push(createMCQ("energy_comm", "digital_communication",
      q4("Digitális jel vs Analóg?", "Digital signal vs analog?", "Digitális jel vs analóg?", "Semnal digital vs analog?", lang),
      q4("Digitális: diszkrét szintek (0,1), binális kód, zaj-ellenálló; Analóg: folyamatos, nagyobb zavar érzékeny", "Digital: discrete levels (0,1), binary code, noise-resistant; Analog: continuous, noise-sensitive", "Digitális: diszkrét szintek, binális, zaj-ellenálló; Analóg: folyamatos, zaj-érzékeny", "Digital: niveluri discrete (0,1), cod binar, rezistent zgomot; Analog: continuu, sensibil zgomot", lang),
      [q4("Azonos jel", "Same signal", "Azonos jel", "Aceeași semnal", lang),
       q4("Analóg jobban", "Analog better", "Analóg jobban", "Analog mai bun", lang),
       q4("Nincs digitális", "No digital", "Nincs digitális", "Fără digital", lang)], rng));
  }

  for (let i = 0; i < 5; i++) {
    qs.push(createMCQ("energy_comm", "digital_communication",
      q4("Bit vs Byte vs Kilobit?", "Bit vs byte vs kilobit?", "Bit vs byte vs kilobit?", "Bit vs byte vs kilobit?", lang),
      q4("1 bit = 1 szimbólum (0 vagy 1); 1 byte = 8 bit; 1 kb = 1000 bit (vagy 1024 kibibit)", "1 bit = 1 symbol (0 or 1); 1 byte = 8 bits; 1 kb = 1000 bits (or 1024 KiBits)", "1 bit = 1 szimbólum; 1 byte = 8 bit; 1 kb = 1000 bit", "1 bit = 1 simbol (0 sau 1); 1 byte = 8 biți; 1 kb = 1000 biți", lang),
      [q4("Mindegyik ugyanaz", "All same", "Mindegyik ugyanaz", "Toate la fel", lang),
       q4("Bit nagyobb", "Bit larger", "Bit nagyobb", "Bit mai mare", lang),
       q4("Kilobit mint byte", "Kilobit like byte", "Kilobit mint byte", "Kilobit ca byte", lang)], rng));
  }

  for (let i = 0; i < 6; i++) {
    qs.push(createMCQ("energy_comm", "digital_communication",
      q4("Bővítettség (Bandwidth) Adatátviteli Sebesség?", "Bandwidth vs data rate?", "Sávszélesség vs adatátviteli sebesség?", "Lărgime bandă vs viteză transfer date?", lang),
      q4("Sávszélesség (Hz) = max frekvencia tartomány; adatátvitel (bps) = bitek/sec; magasabb BW = magasabb vételi sebesség lehetséges", "Bandwidth (Hz) = max frequency range; data rate (bps) = bits/sec; higher BW = higher speed possible", "Sávszélesség = frekvencia tartomány; adatátvitel = bitek/sec; magasabb BW = gyorsabb",
       "Lărgime bandă (Hz) = domeniu frecvență max; viteză date (bps) = biți/sec; BW mai mare = viteză mai mare posibilă", lang),
      [q4("Ugyanaz a dolog", "Same thing", "Ugyanaz a dolog", "Aceeași chestie", lang),
       q4("Adatátvitel nagyobb", "Data rate larger", "Adatátvitel nagyobb", "Viteză date mai mare", lang),
       q4("Sávszélesség csak", "Bandwidth only", "Sávszélesség csak", "Doar lărgime bandă", lang)], rng));
  }

  return qs;
}

// ─── EXPORT (összevonva) ────────────────────────────────────────────────────

export const K8_ENERGY_COMMUNICATION_GENERATORS: Record<string, (lang?: string, seed?: number) => CurriculumQuestion[]> = {
  // ENERGY
  renewable_energy: (lang = "en", seed = 0) => [...generateRenewableEnergyMCQ(lang, seed)],
  renewable_energy_mcq: (lang = "en", seed = 0) => generateRenewableEnergyMCQ(lang, seed),

  energy_efficiency: (lang = "en", seed = 0) => [...generateEnergyEfficiencyMCQ(lang, seed)],
  energy_efficiency_mcq: (lang = "en", seed = 0) => generateEnergyEfficiencyMCQ(lang, seed),

  climate_change: (lang = "en", seed = 0) => [...generateClimateChangeMCQ(lang, seed)],
  climate_change_mcq: (lang = "en", seed = 0) => generateClimateChangeMCQ(lang, seed),

  // COMMUNICATION
  electromagnetic_waves: (lang = "en", seed = 0) => [...generateElectromagneticWavesMCQ(lang, seed)],
  electromagnetic_waves_mcq: (lang = "en", seed = 0) => generateElectromagneticWavesMCQ(lang, seed),

  radio_tv_wireless: (lang = "en", seed = 0) => [...generateRadioTVWirelessMCQ(lang, seed)],
  radio_tv_wireless_mcq: (lang = "en", seed = 0) => generateRadioTVWirelessMCQ(lang, seed),

  digital_communication: (lang = "en", seed = 0) => [...generateDigitalCommunicationMCQ(lang, seed)],
  digital_communication_mcq: (lang = "en", seed = 0) => generateDigitalCommunicationMCQ(lang, seed),
};
