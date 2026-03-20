// ─── ROMANIAN GENERATORS (CLASA a V-a) — ORTOGRAFIE ─────────────────────────
import type { CurriculumQuestion, CurriculumMCQ } from "./curriculumTypes";

function mulberry32(seed: number) {
  return function () {
    seed |= 0; seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
function shuffle<T>(arr: T[], rng: () => number): T[] {
  const copy = [...arr]; for (let i = copy.length - 1; i > 0; i--) { const j = Math.floor(rng() * (i + 1)); [copy[i], copy[j]] = [copy[j], copy[i]]; } return copy;
}
function pick<T>(arr: T[], rng: () => number): T { return arr[Math.floor(rng() * arr.length)]; }
function createMCQ(topic: string, subtopic: string, question: string, correct: string, wrongOptions: string[], rng: () => number): CurriculumMCQ {
  const seen = new Set<string>(); const unique: string[] = [];
  for (const w of wrongOptions) { if (w !== correct && !seen.has(w)) { seen.add(w); unique.push(w); } }
  const opts = shuffle([correct, ...unique.slice(0, 3)], rng);
  return { type: "mcq", topic, subtopic, question, options: opts, correct: opts.indexOf(correct) };
}

// ─── 1. â vs î ───────────────────────────────────────────────────────────────
function gen_a_i_c5(seed: number): CurriculumMCQ[] {
  const rng = mulberry32(seed);
  const T = "ortografie_c5";
  const S = "a_i_c5";

  const questions: CurriculumMCQ[] = [
    createMCQ(T, S,
      "Care dintre următoarele cuvinte este scris corect?",
      "mâncare",
      ["mîncare", "mîincare", "mânkare"],
      rng),

    createMCQ(T, S,
      "Cuvântul „în” (prepoziție) se scrie cu:",
      "î (î la început de cuvânt)",
      ["â (â se folosește oriunde)", "a (fără diacritic)", "i (fără diacritic)"],
      rng),

    createMCQ(T, S,
      "Completați: „Ea a _nceput să cânte.” — ce literă lipsește?",
      "î (î la început de cuvânt: început)",
      ["â (â în interior)", "i (fără diacritic)", "a (fără diacritic)"],
      rng),

    createMCQ(T, S,
      "Care dintre variantele de mai jos este corect scrisă?",
      "pâine",
      ["pîine", "paîne", "piâne"],
      rng),

    createMCQ(T, S,
      "Regula generală spune că „â” se scrie:",
      "în interiorul cuvintelor românești",
      ["la începutul cuvintelor", "la sfârșitul cuvintelor", "numai în cuvinte de origine străină"],
      rng),

    createMCQ(T, S,
      "Care dintre aceste cuvinte se scrie cu „î”, nu cu „â”?",
      "înainte",
      ["mână", "câmp", "râu"],
      rng),

    createMCQ(T, S,
      "Cuvântul „coborâm” este derivat al verbului „a coborî”. Cum se scrie forma de gerunziu?",
      "coborând",
      ["coborînd", "coboriind", "coborîînd"],
      rng),
  ];

  return shuffle(questions, rng);
}

// ─── 2. Semne diacritice ──────────────────────────────────────────────────────
function gen_semne_diacritice_c5(seed: number): CurriculumMCQ[] {
  const rng = mulberry32(seed);
  const T = "ortografie_c5";
  const S = "semne_diacritice_c5";

  const questions: CurriculumMCQ[] = [
    createMCQ(T, S,
      "Care este diferența de sens între „masa” și „mașa”?",
      "„masa” = piesă de mobilier; „mașa” = diminutivul numelui Maria",
      ["sunt sinonime", "„masa” este plural, „mașa” este singular", "nu există nicio diferență de sens"],
      rng),

    createMCQ(T, S,
      "Care dintre semnele diacritice de mai jos NU există în alfabetul românesc?",
      "ñ (n cu tildă)",
      ["ă (a cu breve)", "ș (s cu virgulă)", "ț (t cu virgulă)"],
      rng),

    createMCQ(T, S,
      "Cum se scrie corect cuvântul care denumește localitatea unde locuiești?",
      "oraș (cu ș)",
      ["oras (fără diacritic)", "orash (cu sh în loc de ș)", "oraş (cu virgulă sub s — acceptabil, dar ș este forma standard)"],
      rng),

    createMCQ(T, S,
      "Care propoziție este scrisă corect, cu toate diacriticele?",
      "Fetița a mâncat o prăjitură delicioasă.",
      ["Fetita a mancat o prajituara delicioasa.", "Fetița a mâncat o prajitură delicioasă.", "Fetița a mâncat o prăjitură delicioasa."],
      rng),

    createMCQ(T, S,
      "Ce diferență de sens există între „tata” și „tata” scris cu diacritice „tată”?",
      "„tată” = părintele (cu ă la sfârșit), „tata” = forma de adresare afectuoasă",
      ["nu există nicio diferență", "„tata” este corect, „tată” nu există", "„tata” înseamnă mama"],
      rng),

    createMCQ(T, S,
      "Litera „ș” (s cu virgulă dedesubt) se pronunță ca:",
      "sh (ca în engleză „shoe”)",
      ["s simplu (ca în „soare”)", "z (ca în „zero”)", "j (ca în „joc\”)"],
      rng),

    createMCQ(T, S,
      "De ce sunt importante diacriticele în scrierea românească?",
      "Schimbă pronunția și, uneori, sensul cuvintelor",
      ["Sunt doar decorative, nu schimbă nimic", "Se folosesc numai în texte literare", "Nu se mai folosesc în scrierea modernă"],
      rng),
  ];

  return shuffle(questions, rng);
}

// ─── 3. Scrierea cuvintelor compuse ──────────────────────────────────────────
function gen_scrierea_compuselor_c5(seed: number): CurriculumMCQ[] {
  const rng = mulberry32(seed);
  const T = "ortografie_c5";
  const S = "scrierea_compuselor_c5";

  const questions: CurriculumMCQ[] = [
    createMCQ(T, S,
      "Cum se scrie corect numele plantei din familia florilor galbene înalte?",
      "floarea-soarelui",
      ["floarea soarelui", "floreasoarelui", "Floarea-Soarelui"],
      rng),

    createMCQ(T, S,
      "Care este scrierea corectă a direcției cardinale intermediare?",
      "nord-vest",
      ["nordvest", "nord vest", "Nord-Vest"],
      rng),

    createMCQ(T, S,
      "Cuvântul compus care denumește un câine de talie mare, asemănător cu lupul, se scrie:",
      "câine-lup",
      ["câinelup", "câine lup", "Câine-lup"],
      rng),

    createMCQ(T, S,
      "Cum se scrie corect salutul de dimineață?",
      "bună-ziua",
      ["buna ziua", "buna-ziua", "Bună ziua"],
      rng),

    createMCQ(T, S,
      "Cuvântul compus care desemnează persoana care vinde și cumpără se scrie:",
      "vânzător-cumpărător",
      ["vânzătorcumpărător", "vânzător cumpărător", "vânzator-cumparator"],
      rng),

    createMCQ(T, S,
      "Un „bloc-turn” este un tip de clădire. Cum se scrie corect?",
      "bloc-turn",
      ["blocturn", "bloc turn", "Block-turn"],
      rng),

    createMCQ(T, S,
      "Care regulă se aplică în general la scrierea cuvintelor compuse cu cratimă?",
      "Când cele două cuvinte formează împreună un sens nou, unitar",
      ["Întotdeauna se scriu cu spațiu între ele", "Niciodată nu se folosește cratima", "Se scriu lipit, fără cratimă și fără spațiu"],
      rng),
  ];

  return shuffle(questions, rng);
}

// ─── 4. Cratima între forme verbale enclitice ─────────────────────────────────
function gen_cratima_forme_c5(seed: number): CurriculumMCQ[] {
  const rng = mulberry32(seed);
  const T = "ortografie_c5";
  const S = "cratima_forme_c5";

  const questions: CurriculumMCQ[] = [
    createMCQ(T, S,
      "Care este scrierea corectă a propoziției cu verbul „a se duce” la perfect compus?",
      "S-a dus la piață.",
      ["Sa dus la piață.", "s-a Dus la piață.", "Sa-dus la piață."],
      rng),

    createMCQ(T, S,
      "„La” (prepoziție) vs. „l-a” (pronume + verb auxiliar): Care propoziție este corectă?",
      "L-a chemat la el.",
      ["La chemat la el.", "l-a chemat La el.", "La chemat La el."],
      rng),

    createMCQ(T, S,
      "Cum deosebim „s-a” (pronume reflexiv + verb auxiliar) de „sa” (adjectiv pronominal posesiv)?",
      "„s-a” = el/ea a făcut ceva (ex: s-a dus); „sa” = al/a lui/ei (ex: mama sa)",
      ["Nu există nicio diferență", "„sa” este întotdeauna greșit", "„s-a” se folosește numai la plural"],
      rng),

    createMCQ(T, S,
      "Care variantă este corect scrisă?",
      "Mi-a spus adevărul.",
      ["Mia spus adevărul.", "mi-A spus adevărul.", "Mia-spus adevărul."],
      rng),

    createMCQ(T, S,
      "„Nea” (omul de zăpadă sau apelativ familiar) vs. „ne-a” (pronume + verb). Care este corect?",
      "Ne-a surprins cu un cadou. / Nea Ion ne-a salutat.",
      ["Nea surprins cu un cadou.", "Ne-a Ion ne-a salutat.", "Neea surprins cu un cadou."],
      rng),

    createMCQ(T, S,
      "Alegeți varianta corectă: „Ei ___ chemat să mergem cu ei.”",
      "ne-au chemat",
      ["neau chemat", "ne-au-chemat", "neauchemat"],
      rng),

    createMCQ(T, S,
      "De ce se folosește cratima în „i-a dat” (pronume + verb auxiliar)?",
      "Cratima leagă pronumele neaccentuat „i” de verbul auxiliar „a”, marcând pronunția lor împreună",
      ["Nu se folosește cratimă; se scrie „ia dat\”", "Cratima se pune după orice pronume", "Este o greșeală; se scrie „ia-dat\”"],
      rng),
  ];

  return shuffle(questions, rng);
}

// ─── EXPORT ───────────────────────────────────────────────────────────────────
export const C5_Ort_Generators: Record<string, Record<string, (seed?: number) => CurriculumQuestion[]>> = {
  ortografie_c5: {
    a_i_c5: (seed = 42) => gen_a_i_c5(seed),
    semne_diacritice_c5: (seed = 42) => gen_semne_diacritice_c5(seed),
    scrierea_compuselor_c5: (seed = 42) => gen_scrierea_compuselor_c5(seed),
    cratima_forme_c5: (seed = 42) => gen_cratima_forme_c5(seed),
  }
};
