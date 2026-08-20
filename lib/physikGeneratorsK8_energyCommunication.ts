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

function withSubtopic<T extends CurriculumQuestion>(questions: T[], subtopic: string): T[] {
  return questions.map((question) => ({ ...question, subtopic }));
}

// ═════════════════════════════════════════════════════════════════════════════
// ENERGY & ENVIRONMENT (Energia & Környezet)
// ═════════════════════════════════════════════════════════════════════════════

function generateRenewableEnergyMCQ(lang = "en", seed = 0): CurriculumMCQ[] {
  const rng = mulberry32(seed);
  const qs: CurriculumMCQ[] = [];

  for (let i = 0; i < 6; i++) {
    qs.push(createMCQ("energy_comm", "renewable_energy",
      q4("Welche Energiequellen sind erneuerbar?", "Renewable energy sources?", "Megújuló energiaforrások?", "Surse energie regenerabile?", lang),
      q4("Sonne, Wind, Wasser, Geothermie und Biomasse erneuern sich natürlich", "Solar, wind, hydroelectric, geothermal, biomass; naturally replenish", "Napenergia, szél, víz, geotermikus, biomassza; természetesen újrajön", "Soare, vânt, apă, geotermal, biomasă; se regenerează natural", lang),
      [q4("Nur Kohlenwasserstoffe", "Only hydrocarbons", "Csak szénhidrogén", "Doar hidrocarburi", lang),
       q4("Ein gelagerter Vorrat ohne Nachschub", "Unlimited supply", "Korlátlan készlet", "Alimentare nelimitată", lang),
       q4("Unvorhersagbare Strahlung", "Unpredictable", "Nincs kiszámítható", "Impredictibil", lang)], rng));
  }

  for (let i = 0; i < 6; i++) {
    qs.push(createMCQ("energy_comm", "renewable_energy",
      q4("Welche Vorteile hat Solarenergie?", "Solar energy advantages?", "Napenergia előnyei?", "Avantaje energie solară?", lang),
      q4("Sie ist im Betrieb sauber, praktisch unerschöpflich und dezentral nutzbar", "Clean (no CO₂), inexhaustible, decentralized (home use), footprint-free", "Tiszta (nincs CO₂), inexhaustibilis, decentralizált, nyom nélkül", "Curat (fără CO₂), inepuizabil, descentralizat, fără amprentă", lang),
      [q4("Sie ist nur teuer", "Only expensive", "Drága csak", "Doar scump", lang),
       q4("Sie liefert nachts ohne Speicher volle Leistung", "Works at night", "Éjszaka működik", "Funcționează noaptea", lang),
       q4("Sie ist grundsätzlich wirkungslos", "Inefficient", "Nem hatékony", "Ineficient", lang)], rng));
  }

  for (let i = 0; i < 6; i++) {
    qs.push(createMCQ("energy_comm", "renewable_energy",
      q4("Wie funktioniert eine Windkraftanlage?", "Wind energy: turbine operation?", "Szélenergia: turbina működés?", "Energie eolian: turbină funcționare?", lang),
      q4("Wind dreht die Turbine; der Generator wandelt die Drehung in elektrischen Strom um", "Wind rotates turbine → generator → electricity; average 10-15 m/s optimal", "Szél forgat turbinát → generátor → elektromos áram; 10-15 m/s optimális", "Vânt rotește turbină → generator → curent electric; 10-15 m/s optim", lang),
      [q4("Sie funktioniert nie bei wechselndem Wind", "Doesn't work with variable wind", "Nem működik változó szélben", "Nu funcționează cu vânt variabil", lang),
       q4("Sie erzeugt hauptsächlich Wärme", "Heat generation", "Hőtermelés", "Generare căldură", lang),
       q4("Sie vergiftet direkt die Luft", "Poisons air", "Mérgezi a levegőt", "Otrăvește aer", lang)], rng));
  }

  for (let i = 0; i < 7; i++) {
    qs.push(createMCQ("energy_comm", "renewable_energy",
      q4("Wie nutzt ein Wasserkraftwerk Lageenergie?", "Hydroelectric: reservoir + turbine?", "Vízenergia: tározó + turbina?", "Hidroelectric: rezervor + turbină?", lang),
      q4("Ein Staudamm speichert Wasser; fallendes Wasser treibt Turbine und Generator an", "Dam creates reservoir → waterfall → rotates turbine → generator; 100+ MW large plants", "Duzzasztógát tározót képez → vízesés → turbina → generátor; 100+ MW", "Baraj creeazǎ rezervor → cădere apă → turbină → generator; 100+ MW", lang),
      [q4("Es braucht keine Höhendifferenz", "No waterfall needed", "Nincs vízesés", "Fără cădere apă", lang),
       q4("Es wird direkt vom Wind angetrieben", "Wind driven", "Szél hajtja", "Condus de vânt", lang),
       q4("Es braucht vor allem Wärmezufuhr", "Heat input needed", "Hőbevitel kell", "Intrare căldură", lang)], rng));
  }

  return qs;
}

function generateEnergyEfficiencyMCQ(lang = "en", seed = 0): CurriculumMCQ[] {
  const rng = mulberry32(seed);
  const qs: CurriculumMCQ[] = [];

  for (let i = 0; i < 6; i++) {
    qs.push(createMCQ("energy_comm", "energy_efficiency",
      q4("Energie-Wirkungsgrad: Definition?", "Energy efficiency: definition?", "Energia hatásfok: definíció?", "Eficiență energetică: definiție?", lang),
      q4("eta = nutzbare Energie / zugefuehrte Energie x 100%; hoeher bedeutet weniger Verlust", "η = useful output / total input × 100%; higher = less waste", "η = hasznos kimenet / teljes bemenet × 100%; magasabb = kevesebb pazarlás", "η = ieșire utilă / intrare totală × 100%; mai mare = mai puțin risipă", lang),
      [q4("Nicht definierbar", "Undefined", "Nem definiálható", "Nedefinit", lang),
       q4("Immer 100%", "Always 100%", "Immer 100%", "Mereu 100%", lang),
       q4("Negativer Wert", "Negative value", "Negatív érték", "Valoare negativă", lang)], rng));
  }

  for (let i = 0; i < 6; i++) {
    qs.push(createMCQ("energy_comm", "energy_efficiency",
      q4("Waermeverlust im Vergleich zu nutzbarer Arbeit?", "Heat loss vs useful work?", "Hőleadás vs hasznos munka?", "Pierdere căldură vs lucru util?", lang),
      q4("Viele Geraete geben Waerme ab; ein Motor liefert etwa 35% Arbeit und 65% Waermeverlust", "Most devices produce heat; motors: ~35% work, ~65% heat; LED: ~85% light, ~15% heat", "Legtöbb eszköz hőt termel; motor: ~35% munka, ~65% hő; LED: ~85% fény", "Majoritatea dispozitivelor produc căldură; motor: ~35% lucru, ~65% căldură; LED: ~85% lumină", lang),
      [q4("Kein Waermeverlust im realen Motor", "No heat loss ideal motor", "Nincs hőleadás", "Fără pierdere căldură", lang),
       q4("Alle Arbeit wird Waerme", "All work is heat", "Összes munka hő", "Tot lucrul este căldură", lang),
       q4("Es gibt keine nutzbare Energie", "No usable energy", "Nincs hasznos", "Nimic util", lang)], rng));
  }

  for (let i = 0; i < 6; i++) {
    qs.push(createMCQ("energy_comm", "energy_efficiency",
      q4("LED und Gluehlampe: Energieumwandlung?", "LED vs incandescent: energy use?", "LED vs izzólámpa: energia felhasználás?", "LED vs incandescent: consum energie?", lang),
      q4("Eine LED braucht fuer gleiches Licht viel weniger elektrische Energie und gibt weniger Waerme ab", "LED: 80% less energy for same light; 50000 h lifespan; incandescent: 1000 h, wasteful", "LED: 80% kevesebb energia ugyanaz a fény; 50000 óra; izzó: 1000 óra, pazarlóbb", "LED: 80% mai puțină energie pentru aceeași lumină; 50000 ore; incandescent: 1000 ore", lang),
      [q4("Kein Unterschied", "No difference", "Nincs különbség", "Fără diferență", lang),
       q4("Die Gluehlampe ist effizienter", "Incandescent better", "Izzó jobban", "Incandescent mai bun", lang),
       q4("Die LED braucht mehr Energie", "LED uses more", "LED több energiát", "LED folosește mai mult", lang)], rng));
  }

  for (let i = 0; i < 7; i++) {
    qs.push(createMCQ("energy_comm", "energy_efficiency",
      q4("Zweiter Hauptsatz der Thermodynamik: Entropie?", "2nd Law Thermodynamics: entropy?", "Termodinamika 2. törvénye: entrópia?", "2. Legea Termodinamicii: entropie?", lang),
      q4("In einem abgeschlossenen System nimmt die Entropie nicht spontan ab; reale Maschinen sind nie 100% effizient", "Entropy S: never decreases spontaneously; always increases; therefore max efficiency < 100%", "Entrópia: nem csökkenhet spontán; mindig nő; ezért max hatásfok < 100%", "Entropie: nu scade spontan; mereu crește; deci eficiență max < 100%", lang),
      [q4("Entropie sinkt immer", "Entropy decreases", "Entrópia csökken", "Entropie scade", lang),
       q4("Es gibt keine Grenze", "No limit", "Nincsen korlát", "Fără limită", lang),
       q4("100% ist real erreichbar", "100% possible", "100% lehetséges", "100% posibil", lang)], rng));
  }

  return qs;
}

function generateClimateChangeMCQ(lang = "en", seed = 0): CurriculumMCQ[] {
  const rng = mulberry32(seed);
  const qs: CurriculumMCQ[] = [];

  for (let i = 0; i < 6; i++) {
    qs.push(createMCQ("energy_comm", "climate_change",
      q4("Was ist der Treibhauseffekt?", "Greenhouse effect?", "Üvegházhatás?", "Efect seră?", lang),
      q4("CO2, CH4, H2O und N2O halten Waermestrahlung zurueck; die Oberflaeche erwaermt sich", "CO₂, CH₄, H₂O, N₂O trap heat radiation → planet surface warms", "CO₂, CH₄, H₂O, N₂O gázok visszatartják a hő → bolygó melegszik", "CO₂, CH₄, H₂O, N₂O rețin radiația termică → suprafață planetă se încălzește", lang),
      [q4("Keine Waermespeicherung", "No heat trapping", "Nincsen hőmelegítés", "Fără reținere căldură", lang),
       q4("Sie verursachen nur Abkuehlung", "Causes cooling", "Lehûlés okoznak", "Cauze răcire", lang),
       q4("Luft spielt keine Rolle", "Air not relevant", "Levegô nem jelent", "Aer nu e relevant", lang)], rng));
  }

  for (let i = 0; i < 6; i++) {
    qs.push(createMCQ("energy_comm", "climate_change",
      q4("Welche Quellen hat menschengemachter CO2-Ausstoss?", "Anthropogenic CO₂ sources?", "Antropogén CO₂ források?", "Surse CO₂ antropogene?", lang),
      q4("Vor allem Kohle, Oel und Gas sowie Industrieprozesse setzen zusaetzliches CO2 frei", "Fossil fuels (coal, oil, gas): 75%; industrial: 25%; carbon from hydrocarbon burning", "Fosszilis tüzelô: 75%; ipari: 25%; szénhidrogénből CO₂", "Combustibili fosili: 75%; industrial: 25%; carbon din ardere hidrocarburi", lang),
      [q4("Nur Luft", "Only air", "Csak levegô", "Doar aer", lang),
       q4("Nur natuerliche Quellen", "Natural only", "Természetes csak", "Doar natural", lang),
       q4("Es gibt keine Quelle", "No source", "Nincsen forrás", "Fără sursă", lang)], rng));
  }

  for (let i = 0; i < 7; i++) {
    qs.push(createMCQ("energy_comm", "climate_change",
      q4("Welche Folgen hat globale Erwaermung?", "Global warming consequences?", "Globális melegedés következményei?", "Consecințe încălzire globală?", lang),
      q4("Meeresspiegelanstieg, Extremwetter, gefaehrdete Oekosysteme und Probleme in der Landwirtschaft", "Sea level rise, extreme weather, ecosystem loss, crop failure, migration crisis", "Tengerszint emelkedés, szélsôség, ökoszisztéma veszteség, terméshiány, migráció", "Ridicare nivel mări, vreme extremă, pierdere ecosistem, eșec recoltă, criză migrație", lang),
      [q4("Keine Wirkung", "No effect", "Nincs hatás", "Fără efect", lang),
       q4("Nur gut fuer Menschen", "Good for humans", "Jó az ember számára", "Bun pentru oameni", lang),
       q4("Nur lokal", "Only local", "Nur lokal", "Doar local", lang)], rng));
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
      q4("Wie breitet sich eine elektromagnetische Welle aus?", "EM wave: propagation?", "EM hullám: terjedés?", "Undă EM: propagare?", lang),
      q4("Elektrisches und magnetisches Feld schwingen senkrecht zueinander; im Vakuum mit c = 3x10^8 m/s", "Electric + magnetic field oscillate perpendicular, speed c = 3×10⁸ m/s in vacuum", "Elektromos + mágneses mező oszcillál derékszögben, c sebesség", "Câmp electric + magnetic oscilează perpendicular, viteză c = 3×10⁸ m/s", lang),
      [q4("Nur elektrisch", "Only electric", "Csak elektromos", "Doar electric", lang),
       q4("Ohne magnetisches Feld", "Without magnetic", "Mágneses nélkül", "Fără magnetic", lang),
       q4("Keine Ausbreitung", "No propagation", "Nincs terjedés", "Fără propagare", lang)], rng));
  }

  for (let i = 0; i < 5; i++) {
    qs.push(createMCQ("energy_comm", "electromagnetic_waves",
      q4("Welche Reihenfolge hat das elektromagnetische Spektrum nach Wellenlaenge?", "EM spectrum: wavelength order?", "EM spektrum: hullámhossz sorrend?", "Spectrul EM: ordine lungime undă?", lang),
      q4("Radio -> Mikrowelle -> Infrarot -> sichtbares Licht -> UV -> Roentgen -> Gamma", "Radio (km) → Microwave (mm) → IR → Visible → UV → X-ray → Gamma (pm)", "Rádió (km) → Mikrohullám (mm) → IR → Látható → UV → Röntgen → Gamma", "Radio (km) → Microundă (mm) → IR → Vizibil → UV → Raze X → Gamma (pm)", lang),
      [q4("Umgekehrte Reihenfolge", "Reversed order", "Fordított sorrend", "Ordine inversă", lang),
       q4("Keine Reihenfolge", "No order", "Nincs sorrend", "Fără ordine", lang),
       q4("Radio kommt nach Roentgenstrahlung", "Radio after X-ray", "Rádió után röntgen", "Radio după X-ray", lang)], rng));
  }

  for (let i = 0; i < 5; i++) {
    qs.push(createMCQ("energy_comm", "electromagnetic_waves",
      q4("Wie uebertragen Radiowellen Informationen?", "Radio waves communication?", "Rádióhullámok kommunikáció?", "Unde radio comunicație?", lang),
      q4("Ein schwingender Strom in der Antenne sendet EM-Wellen; eine zweite Antenne empfaengt und demoduliert das Signal", "Oscillating current in antenna → EM wave radiation → another antenna receives → signal demodulates", "Oszcilláló áram antenna-ban → EM hullám → másik antenna → jel demodulálódik", "Curent oscilant în antenă → radiație undă EM → altă antenă recepție → semnal demodulare", lang),
      [q4("Es braucht immer Kabel", "Needs wires", "Vezetékhez kell", "Are nevoie de fire", lang),
       q4("Keine Demodulation noetig", "No demodulation", "Nincs demodulálás", "Fără demodulare", lang),
       q4("Radiowellen gibt es nicht", "Never radio", "Soha nem rádió", "Niciodată radio", lang)], rng));
  }

  for (let i = 0; i < 6; i++) {
    qs.push(createMCQ("energy_comm", "electromagnetic_waves",
      q4("Welche Vorteile hat Glasfaser?", "Fiber optics advantages?", "Fiberoptika előnyei?", "Avantaje fiberoptică?", lang),
      q4("Hohe Bandbreite, kaum elektromagnetische Stoerung, lange Strecken und niedrige Kosten pro Bit", "High bandwidth, no EM interference, long distance (100+ km), low cost/bit", "Magas sávszélesség, nincs EM zavar, hosszú távolság, kis költség", "Lărgime bandă mare, fără interferență EM, distanță lungă (100+ km), cost mic/bit", lang),
      [q4("Kupfer ist immer besser", "Better than copper wire", "Rézvezeték jobbabb", "Mai bun decât fir cupru", lang),
       q4("Nur fuer kurze Strecken", "Short distance only", "Rövid távolság csak", "Doar distanță scurtă", lang),
       q4("Keine Bandbreite", "No bandwidth", "Nincs sávszélesség", "Fără lărgime bandă", lang)], rng));
  }

  return qs;
}

function generateRadioTVWirelessMCQ(lang = "en", seed = 0): CurriculumMCQ[] {
  const rng = mulberry32(seed);
  const qs: CurriculumMCQ[] = [];

  for (let i = 0; i < 5; i++) {
    qs.push(createMCQ("energy_comm", "radio_tv_wireless",
      q4("Was unterscheidet AM und FM?", "AM vs FM modulation?", "AM vs FM moduláció?", "Modulație AM vs FM?", lang),
      q4("Bei AM aendert sich die Amplitude, bei FM die Frequenz; FM ist meist weniger stoeranfaellig", "AM: amplitude varies with signal, long wave, noisy; FM: frequency varies, short wave, noise-free", "AM: amplitúdó változik, hosszú hullám, zajos; FM: frekvencia változik, rövid hullám, zajos-mentes", "AM: amplitudine variază, undă lungă, zgomotos; FM: frecvență variază, undă scurtă, fără zgomot", lang),
      [q4("Gleiche Modulation", "Same modulation", "Azonos moduláció", "Aceeași modulație", lang),
       q4("Kein Unterschied", "No difference", "Nincs különbség", "Fără diferență", lang),
       q4("FM gibt es nicht", "FM non-existent", "FM nem létezik", "FM nu există", lang)], rng));
  }

  for (let i = 0; i < 5; i++) {
    qs.push(createMCQ("energy_comm", "radio_tv_wireless",
      q4("Welche Frequenz nutzen WiFi und Bluetooth oft?", "WiFi & Bluetooth frequency?", "Milyen frekvenciasávot használ gyakran a WiFi és a Bluetooth?", "WiFi & Bluetooth frecvență?", lang),
      q4("Beide nutzen oft das 2,4-GHz-ISM-Band; WiFi hat meist mehr Datenrate, Bluetooth kuerzere Reichweite", "Both 2.4 GHz band (ISM); WiFi: wider bandwidth (54 Mbps typ), Bluetooth: shorter range (~10m)", "Mindkettő 2,4 GHz sávban; WiFi: szélesebb sávszélesség, Bluetooth: rövidebb hatótáv", "Ambele 2,4 GHz bandă (ISM); WiFi: lărgime bandă mai largă (54 Mbps), Bluetooth: rază mai scurtă", lang),
      [q4("Nur WiFi", "WiFi only", "Csak a WiFi", "Doar WiFi", lang),
       q4("Immer voellig verschiedene Baender", "Different bands", "Eltérô sávok", "Benzi diferite", lang),
       q4("Keine Frequenz", "No frequency", "Egyik sem használ frekvenciát", "Fără frecvență", lang)], rng));
  }

  for (let i = 0; i < 6; i++) {
    qs.push(createMCQ("energy_comm", "radio_tv_wireless",
      q4("Was ist typisch fuer 4G und 5G?", "Mobile phone 4G/5G?", "Mi jellemző a 4G és 5G hálózatokra?", "Telefon mobil 4G/5G?", lang),
      q4("5G ermoeglicht hoehere Datenraten, geringere Latenz und mehr gleichzeitige Verbindungen als 4G", "4G: ~100 Mbps; 5G: ~1 Gbps (10× faster), lower latency, more simultaneous", "4G: ~100 Mbps; 5G: ~1 Gbps (10× gyorsabb), kevesebb késleltetés", "4G: ~100 Mbps; 5G: ~1 Gbps (10× mai rapid), latență mai mică, mai multe conexiuni", lang),
      [q4("Gleiche Geschwindigkeit", "Same speed", "Azonos sebesség", "Aceeași viteză", lang),
       q4("4G ist schneller", "4G faster", "A 4G gyorsabb", "4G mai rapid", lang),
       q4("5G existiert nicht", "5G not yet", "5G nincs még", "5G nu încă", lang)], rng));
  }

  return qs;
}

function generateDigitalCommunicationMCQ(lang = "en", seed = 0): CurriculumMCQ[] {
  const rng = mulberry32(seed);
  const qs: CurriculumMCQ[] = [];

  for (let i = 0; i < 5; i++) {
    qs.push(createMCQ("energy_comm", "digital_communication",
      q4("Was unterscheidet digitale und analoge Signale?", "Digital signal vs analog?", "Digitális jel vs analóg?", "Semnal digital vs analog?", lang),
      q4("Digitale Signale haben diskrete Werte wie 0 und 1; analoge Signale sind kontinuierlich", "Digital: discrete levels (0,1), binary code, noise-resistant; Analog: continuous, noise-sensitive", "Digitális: diszkrét szintek, binális, zaj-ellenálló; Analóg: folyamatos, zaj-érzékeny", "Digital: niveluri discrete (0,1), cod binar, rezistent zgomot; Analog: continuu, sensibil zgomot", lang),
      [q4("Gleiches Signal", "Same signal", "Gleiches Signal", "Același semnal", lang),
       q4("Analog ist immer besser", "Analog better", "Analóg jobban", "Analog mai bun", lang),
       q4("Digitale Signale gibt es nicht", "No digital", "Nincs digitális", "Fără digital", lang)], rng));
  }

  for (let i = 0; i < 5; i++) {
    qs.push(createMCQ("energy_comm", "digital_communication",
      q4("Was ist der Unterschied zwischen Bit, Byte und Kilobit?", "Bit vs byte vs kilobit?", "Bit vs byte vs kilobit?", "Bit vs byte vs kilobit?", lang),
      q4("1 Bit ist 0 oder 1; 1 Byte hat 8 Bit; 1 kbit sind 1000 Bit", "1 bit = 1 symbol (0 or 1); 1 byte = 8 bits; 1 kb = 1000 bits (or 1024 kibibits, Kibit)", "1 bit = 1 szimbólum; 1 byte = 8 bit; 1 kb = 1000 bit", "1 bit = 1 simbol (0 sau 1); 1 byte = 8 biți; 1 kb = 1000 biți", lang),
      [q4("Alles ist gleich", "All same", "Alles ist gleich", "Toate la fel", lang),
       q4("Ein Bit ist größer als ein Byte", "Bit larger", "Bit nagyobb", "Bit mai mare", lang),
       q4("Ein Kilobit ist dasselbe wie ein Byte", "Kilobit like byte", "Kilobit mint byte", "Kilobit ca byte", lang)], rng));
  }

  for (let i = 0; i < 6; i++) {
    qs.push(createMCQ("energy_comm", "digital_communication",
      q4("Was unterscheidet Bandbreite und Datenrate?", "Bandwidth vs data rate?", "Sávszélesség vs adatátviteli sebesség?", "Lărgime bandă vs viteză transfer date?", lang),
      q4("Bandbreite beschreibt den Frequenzbereich; Datenrate beschreibt übertragene Bits pro Sekunde", "Bandwidth (Hz) = max frequency range; data rate (bps) = bits/sec; higher BW = higher speed possible", "Sávszélesség = frekvencia tartomány; adatátvitel = bitek/sec; magasabb BW = gyorsabb",
       "Lărgime bandă (Hz) = domeniu frecvență max; viteză date (bps) = biți/sec; BW mai mare = viteză mai mare posibilă", lang),
      [q4("Es ist dasselbe", "Same thing", "Ugyanaz a dolog", "Același lucru", lang),
       q4("Datenrate ist immer größer", "Data rate larger", "Adatátvitel nagyobb", "Viteză date mai mare", lang),
       q4("Nur Bandbreite zählt", "Bandwidth only", "Sávszélesség csak", "Doar lărgime bandă", lang)], rng));
  }

  return qs;
}

function generateRenewableEnergyTyping(lang = "en", seed = 0): CurriculumTyping[] {
  return [
    createTyping("energy_comm", "renewable_energy", q4("Nenne eine erneuerbare Energiequelle.", "Name a renewable energy source.", "Nevezz meg egy megújuló energiaforrást.", "Numește o sursă de energie regenerabilă.", lang), [q4("Sonne", "solar", "napenergia", "soare", lang), q4("Wind", "wind", "szél", "vânt", lang), q4("Wasser", "hydro", "vízenergia", "apă", lang)]),
    createTyping("energy_comm", "renewable_energy", q4("Was treibt eine Windkraftanlage an?", "What drives a wind turbine?", "Mi hajtja a szélturbinát?", "Ce antrenează turbina eoliană?", lang), q4("Wind", "wind", "szél", "vânt", lang)),
  ];
}

function generateEnergyEfficiencyTyping(lang = "en", seed = 0): CurriculumTyping[] {
  return [
    createTyping("energy_comm", "energy_efficiency", q4("Wie heißt das Verhältnis aus nutzbarer und zugeführter Energie?", "What is the ratio of useful output to total input called?", "Mi a hasznos és bevitt energia aránya?", "Cum se numește raportul dintre energia utilă și cea introdusă?", lang), q4("Wirkungsgrad", "efficiency", "hatásfok", "randament", lang)),
    createTyping("energy_comm", "energy_efficiency", q4("In welcher Einheit wird der Wirkungsgrad oft angegeben?", "What unit is efficiency often given in?", "Milyen egységben adjuk meg a hatásfokot?", "În ce unitate se exprimă des randamentul?", lang), q4("Prozent", "percent", "százalék", "procent", lang)),
  ];
}

function generateElectromagneticWavesTyping(lang = "en", seed = 0): CurriculumTyping[] {
  return [
    createTyping("energy_comm", "electromagnetic_waves", q4("Wie schnell sind elektromagnetische Wellen im Vakuum ungefähr?", "How fast are EM waves in vacuum?", "Milyen gyorsak az EM hullámok vákuumban?", "Cât de rapide sunt undele EM în vid?", lang), ["3×10⁸ m/s", "300000000 m/s", "Lichtgeschwindigkeit"]),
    createTyping("energy_comm", "electromagnetic_waves", q4("Welche Strahlung liegt zwischen sichtbarem Licht und Röntgenstrahlung?", "Which radiation lies between visible light and X-rays?", "Melyik sugárzás van a látható fény és a röntgen között?", "Ce radiație este între lumina vizibilă și razele X?", lang), q4("UV", "UV", "UV", "UV", lang)),
  ];
}

function generateRadioTVWirelessTyping(lang = "en", seed = 0): CurriculumTyping[] {
  return [
    createTyping("energy_comm", "radio_tv_wireless", q4("Bei welcher Modulationsart ändert sich die Frequenz?", "In which modulation does frequency change?", "Melyik modulációnál változik a frekvencia?", "La ce modulație se schimbă frecvența?", lang), "FM"),
    createTyping("energy_comm", "radio_tv_wireless", q4("Welches Mobilfunknetz hat meist geringere Latenz: 4G oder 5G?", "Which mobile network usually has lower latency: 4G or 5G?", "Melyik mobilhálózat késleltetése kisebb: 4G vagy 5G?", "Ce rețea are latență mai mică: 4G sau 5G?", lang), "5G"),
  ];
}

function generateDigitalCommunicationTyping(lang = "en", seed = 0): CurriculumTyping[] {
  return [
    createTyping("energy_comm", "digital_communication", q4("Wie viele Bit hat ein Byte?", "How many bits are in a byte?", "Hány bit egy byte?", "Câți biți are un byte?", lang), "8"),
    createTyping("energy_comm", "digital_communication", q4("Welche zwei Werte nutzt ein binäres Signal?", "Which two values does a binary signal use?", "Melyik két értéket használja a bináris jel?", "Ce două valori folosește semnalul binar?", lang), ["0 und 1", "0,1", "0 1"]),
  ];
}

// ─── EXPORT (összevonva) ────────────────────────────────────────────────────

export const K8_ENERGY_COMMUNICATION_GENERATORS: Record<string, (lang?: string, seed?: number) => CurriculumQuestion[]> = {
  // ENERGY
  renewable_energy: (lang = "en", seed = 0) => [...generateRenewableEnergyMCQ(lang, seed), ...generateRenewableEnergyTyping(lang, seed)],
  renewable_energy_mcq: (lang = "en", seed = 0) => generateRenewableEnergyMCQ(lang, seed),
  renewable_energy_typing: (lang = "en", seed = 0) => generateRenewableEnergyTyping(lang, seed),

  // Curriculum aliases (physikCurriculum8.ts)
  renewable_sources: (lang = "en", seed = 0) => withSubtopic([...generateRenewableEnergyMCQ(lang, seed), ...generateRenewableEnergyTyping(lang, seed)], "renewable_sources"),
  renewable_sources_typing: (lang = "en", seed = 0) => withSubtopic(generateRenewableEnergyTyping(lang, seed), "renewable_sources"),
  solar_energy: (lang = "en", seed = 0) => withSubtopic([...generateRenewableEnergyMCQ(lang, seed), ...generateRenewableEnergyTyping(lang, seed)], "solar_energy"),
  solar_energy_typing: (lang = "en", seed = 0) => withSubtopic(generateRenewableEnergyTyping(lang, seed), "solar_energy"),
  wind_energy: (lang = "en", seed = 0) => withSubtopic([...generateRenewableEnergyMCQ(lang, seed), ...generateRenewableEnergyTyping(lang, seed)], "wind_energy"),
  wind_energy_typing: (lang = "en", seed = 0) => withSubtopic(generateRenewableEnergyTyping(lang, seed), "wind_energy"),

  energy_efficiency: (lang = "en", seed = 0) => [...generateEnergyEfficiencyMCQ(lang, seed), ...generateEnergyEfficiencyTyping(lang, seed)],
  energy_efficiency_mcq: (lang = "en", seed = 0) => generateEnergyEfficiencyMCQ(lang, seed),
  energy_efficiency_typing: (lang = "en", seed = 0) => generateEnergyEfficiencyTyping(lang, seed),

  climate_change: (lang = "en", seed = 0) => [...generateClimateChangeMCQ(lang, seed)],
  climate_change_mcq: (lang = "en", seed = 0) => generateClimateChangeMCQ(lang, seed),

  // COMMUNICATION
  electromagnetic_waves: (lang = "en", seed = 0) => [...generateElectromagneticWavesMCQ(lang, seed), ...generateElectromagneticWavesTyping(lang, seed)],
  electromagnetic_waves_mcq: (lang = "en", seed = 0) => generateElectromagneticWavesMCQ(lang, seed),
  electromagnetic_waves_typing: (lang = "en", seed = 0) => generateElectromagneticWavesTyping(lang, seed),

  radio_tv_wireless: (lang = "en", seed = 0) => [...generateRadioTVWirelessMCQ(lang, seed), ...generateRadioTVWirelessTyping(lang, seed)],
  radio_tv_wireless_mcq: (lang = "en", seed = 0) => generateRadioTVWirelessMCQ(lang, seed),
  radio_tv_wireless_typing: (lang = "en", seed = 0) => generateRadioTVWirelessTyping(lang, seed),

  radio_tv: (lang = "en", seed = 0) => withSubtopic([...generateRadioTVWirelessMCQ(lang, seed), ...generateRadioTVWirelessTyping(lang, seed)], "radio_tv"),
  radio_tv_typing: (lang = "en", seed = 0) => withSubtopic(generateRadioTVWirelessTyping(lang, seed), "radio_tv"),
  fiber_optics: (lang = "en", seed = 0) => withSubtopic([...generateElectromagneticWavesMCQ(lang, seed), ...generateElectromagneticWavesTyping(lang, seed)], "fiber_optics"),
  fiber_optics_typing: (lang = "en", seed = 0) => withSubtopic(generateElectromagneticWavesTyping(lang, seed), "fiber_optics"),

  digital_communication: (lang = "en", seed = 0) => [...generateDigitalCommunicationMCQ(lang, seed), ...generateDigitalCommunicationTyping(lang, seed)],
  digital_communication_mcq: (lang = "en", seed = 0) => generateDigitalCommunicationMCQ(lang, seed),
  digital_communication_typing: (lang = "en", seed = 0) => generateDigitalCommunicationTyping(lang, seed),

  digital_signals: (lang = "en", seed = 0) => withSubtopic([...generateDigitalCommunicationMCQ(lang, seed), ...generateDigitalCommunicationTyping(lang, seed)], "digital_signals"),
  digital_signals_typing: (lang = "en", seed = 0) => withSubtopic(generateDigitalCommunicationTyping(lang, seed), "digital_signals"),
};
