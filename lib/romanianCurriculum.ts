// ─── ROMANIAN TEST — LIMBA ROMÂNĂ CURRICULUM (Clasa I–VIII) ──────────────────
// Procedural questions generated via romanianGenerators.ts

import type { CurriculumTheme, CurriculumQuestion, GradeMark } from "./curriculumTypes";
import { C1_Generators } from "./romanianGenerators";

// ─── TYPE ALIASES ────────────────────────────────────────────────────────────

export type RomanianQuestion = CurriculumQuestion;
export type RomanianTheme = CurriculumTheme;

// ─── CLASA I (Grade 1) ──────────────────────────────────────────────────────

const C1: RomanianTheme[] = [
  {
    id: "alfabet_c1",
    name: "Alfabetul",
    icon: "\u{1F524}",
    color: "#FF2D78",
    subtopics: [
      {
        id: "vocale_c1",
        name: "Vocale (a, \u0103, \u00e2, e, i, \u00ee, o, u)",
        questions: [
          { type: "mcq", topic: "alfabet_c1", subtopic: "vocale_c1", question: "Care liter\u0103 este o vocal\u0103?", options: ["a", "b", "c", "d"], correct: 0 },
        ],
      },
      {
        id: "consoane_c1",
        name: "Consoane",
        questions: [
          { type: "mcq", topic: "alfabet_c1", subtopic: "consoane_c1", question: "Care liter\u0103 este o consoan\u0103?", options: ["b", "a", "e", "i"], correct: 0 },
        ],
      },
      {
        id: "litere_mari_mici_c1",
        name: "Litere mari \u0219i mici",
        questions: [
          { type: "mcq", topic: "alfabet_c1", subtopic: "litere_mari_mici_c1", question: "Care este forma mare a literei 'a'?", options: ["A", "a", "b", "B"], correct: 0 },
        ],
      },
      {
        id: "litere_speciale_c1",
        name: "Literele \u0103, \u00e2, \u00ee, \u0219, \u021b",
        questions: [
          { type: "mcq", topic: "alfabet_c1", subtopic: "litere_speciale_c1", question: "Care liter\u0103 are sedil\u0103?", options: ["\u0219", "s", "z", "c"], correct: 0 },
        ],
      },
      {
        id: "ordine_alfa_c1",
        name: "Ordinea alfabetic\u0103",
        questions: [
          { type: "mcq", topic: "alfabet_c1", subtopic: "ordine_alfa_c1", question: "Care liter\u0103 vine dup\u0103 'b'?", options: ["c", "a", "d", "e"], correct: 0 },
        ],
      },
    ],
  },
  {
    id: "sunete_c1",
    name: "Sunete \u0219i grupuri de litere",
    icon: "\u{1F50A}",
    color: "#00D4FF",
    subtopics: [
      {
        id: "vocale_consoane_c1",
        name: "Vocale \u0219i consoane \u00een cuvinte",
        questions: [
          { type: "mcq", topic: "sunete_c1", subtopic: "vocale_consoane_c1", question: "C\u00e2te vocale are cuv\u00e2ntul 'cas\u0103'?", options: ["2", "1", "3", "4"], correct: 0 },
        ],
      },
      {
        id: "grupuri_ce_ci_c1",
        name: "Grupurile ce, ci",
        questions: [
          { type: "mcq", topic: "sunete_c1", subtopic: "grupuri_ce_ci_c1", question: "Care cuv\u00e2nt con\u021bine grupul 'ce'?", options: ["cerc", "caiet", "carte", "copac"], correct: 0 },
        ],
      },
      {
        id: "grupuri_ge_gi_c1",
        name: "Grupurile ge, gi",
        questions: [
          { type: "mcq", topic: "sunete_c1", subtopic: "grupuri_ge_gi_c1", question: "Care cuv\u00e2nt con\u021bine grupul 'ge'?", options: ["ger", "gard", "gust", "gol"], correct: 0 },
        ],
      },
      {
        id: "grupuri_che_chi_c1",
        name: "Grupurile che, chi, ghe, ghi",
        questions: [
          { type: "mcq", topic: "sunete_c1", subtopic: "grupuri_che_chi_c1", question: "Care cuv\u00e2nt con\u021bine grupul 'che'?", options: ["cheie", "cerc", "cioc", "carte"], correct: 0 },
        ],
      },
    ],
  },
  {
    id: "silabe_c1",
    name: "Silabe",
    icon: "\u{1F4DD}",
    color: "#00FF88",
    subtopics: [
      {
        id: "despartire_c1",
        name: "Desp\u0103r\u021birea \u00een silabe",
        questions: [
          { type: "mcq", topic: "silabe_c1", subtopic: "despartire_c1", question: "Cum se desparte 'cas\u0103' \u00een silabe?", options: ["ca-s\u0103", "cas-\u0103", "c-as\u0103", "ca-s-\u0103"], correct: 0 },
        ],
      },
      {
        id: "numarare_c1",
        name: "Num\u0103rul de silabe",
        questions: [
          { type: "mcq", topic: "silabe_c1", subtopic: "numarare_c1", question: "C\u00e2te silabe are cuv\u00e2ntul 'mama'?", options: ["2", "1", "3", "4"], correct: 0 },
        ],
      },
      {
        id: "silaba_accent_c1",
        name: "Silaba accentuat\u0103",
        questions: [
          { type: "mcq", topic: "silabe_c1", subtopic: "silaba_accent_c1", question: "Pe care silab\u0103 cade accentul \u00een 'mam\u0103'?", options: ["ma-", "-m\u0103", "ma-m\u0103", "nici una"], correct: 0 },
        ],
      },
    ],
  },
  {
    id: "cuvantul_c1",
    name: "Cuv\u00e2ntul",
    icon: "\u{1F4D6}",
    color: "#B44DFF",
    subtopics: [
      {
        id: "sinonime_c1",
        name: "Sinonime",
        questions: [
          { type: "mcq", topic: "cuvantul_c1", subtopic: "sinonime_c1", question: "Care cuv\u00e2nt \u00eenseamn\u0103 la fel cu 'mare'?", options: ["uria\u0219", "mic", "vesel", "trist"], correct: 0 },
        ],
      },
      {
        id: "antonime_c1",
        name: "Antonime",
        questions: [
          { type: "mcq", topic: "cuvantul_c1", subtopic: "antonime_c1", question: "Care este antonimul cuv\u00e2ntului 'mare'?", options: ["mic", "uria\u0219", "vesel", "frumos"], correct: 0 },
        ],
      },
      {
        id: "diminutive_c1",
        name: "Diminutive",
        questions: [
          { type: "mcq", topic: "cuvantul_c1", subtopic: "diminutive_c1", question: "Care este diminutivul cuv\u00e2ntului 'cas\u0103'?", options: ["c\u0103su\u021b\u0103", "casnic\u0103", "acas\u0103", "c\u0103soi"], correct: 0 },
        ],
      },
      {
        id: "familii_c1",
        name: "Familia de cuvinte",
        questions: [
          { type: "mcq", topic: "cuvantul_c1", subtopic: "familii_c1", question: "Care cuv\u00e2nt face parte din familia cuv\u00e2ntului 'floare'?", options: ["florar", "c\u0103su\u021b\u0103", "m\u0103su\u021b\u0103", "c\u0103\u021belu\u0219"], correct: 0 },
        ],
      },
      {
        id: "singular_plural_c1",
        name: "Singular \u0219i plural",
        questions: [
          { type: "mcq", topic: "cuvantul_c1", subtopic: "singular_plural_c1", question: "Care este pluralul cuv\u00e2ntului 'carte'?", options: ["c\u0103r\u021bi", "carte", "cartes", "cartei"], correct: 0 },
        ],
      },
    ],
  },
  // ── Theme 5: Propoziția ──────────────────────────────────────────────────
  {
    id: "propozitia_c1",
    name: "Propoziția",
    icon: "✍️",
    color: "#FFD700",
    subtopics: [
      {
        id: "punctuatie_c1",
        name: "Semnele de punctuație (. ? !)",
        questions: [
          { type: "mcq", topic: "propozitia_c1", subtopic: "punctuatie_c1", question: "Ce semn de punctuație punem la sfârșitul unei întrebări?", options: ["?", ".", "!", ","], correct: 0 },
        ],
      },
      {
        id: "litera_mare_c1",
        name: "Litera mare la începutul propoziției",
        questions: [
          { type: "mcq", topic: "propozitia_c1", subtopic: "litera_mare_c1", question: "Care propoziție este scrisă corect?", options: ["Ana merge la școală.", "ana merge la școală.", "ana Merge la școală.", "Ana merge la Școală."], correct: 0 },
        ],
      },
      {
        id: "propozitie_tip_c1",
        name: "Tipuri de propoziții (enunțiativă, interogativă, exclamativă)",
        questions: [
          { type: "mcq", topic: "propozitia_c1", subtopic: "propozitie_tip_c1", question: "Ce tip de propoziție este: 'Ce frumos este afară!'?", options: ["Exclamativă", "Enunțiativă", "Interogativă", "Imperativă"], correct: 0 },
        ],
      },
      {
        id: "ordine_cuvinte_c1",
        name: "Ordinea cuvintelor în propoziție",
        questions: [
          { type: "mcq", topic: "propozitia_c1", subtopic: "ordine_cuvinte_c1", question: "Care este ordinea corectă? 'merge / Ana / la / școală'", options: ["Ana merge la școală.", "merge Ana la școală.", "la școală Ana merge.", "școală la merge Ana."], correct: 0 },
        ],
      },
    ],
  },
  // ── Theme 6: Ortografie ─────────────────────────────────────────────────────
  {
    id: "ortografie_c1",
    name: "Ortografie",
    icon: "📐",
    color: "#FF6B00",
    subtopics: [
      {
        id: "m_bp_c1",
        name: "Scrierea cu m înainte de b și p",
        questions: [
          { type: "mcq", topic: "ortografie_c1", subtopic: "m_bp_c1", question: "Cum se scrie corect?", options: ["câmp", "cânp", "câmb", "cânb"], correct: 0 },
        ],
      },
      {
        id: "a_i_c1",
        name: "Scrierea cu â și î",
        questions: [
          { type: "mcq", topic: "ortografie_c1", subtopic: "a_i_c1", question: "Care cuvânt conține litera 'â'?", options: ["câine", "ciine", "cuine", "caîne"], correct: 0 },
        ],
      },
      {
        id: "cratima_c1",
        name: "Cratima (-) în cuvinte",
        questions: [
          { type: "mcq", topic: "ortografie_c1", subtopic: "cratima_c1", question: "Care cuvânt se scrie cu cratimă?", options: ["s-a", "sa", "s a", "s_a"], correct: 0 },
        ],
      },
      {
        id: "scrierea_corecta_c1",
        name: "Scrierea corectă a cuvintelor",
        questions: [
          { type: "mcq", topic: "ortografie_c1", subtopic: "scrierea_corecta_c1", question: "Care formă este corectă?", options: ["într-o", "intro", "intr-o", "într o"], correct: 0 },
        ],
      },
    ],
  },
  // ── Theme 7: Lectură și înțelegere ──────────────────────────────────────────
  {
    id: "lectura_c1",
    name: "Lectură și înțelegere",
    icon: "📚",
    color: "#10B981",
    subtopics: [
      {
        id: "intelegere_c1",
        name: "Înțelegerea textului",
        questions: [
          { type: "mcq", topic: "lectura_c1", subtopic: "intelegere_c1", question: "Text: \"Pisica stă pe covor. Ea doarme liniștită.\"\n\nUnde stă pisica?", options: ["Pe covor", "Pe masă", "Pe scaun", "Pe pat"], correct: 0 },
        ],
      },
      {
        id: "personaje_c1",
        name: "Personaje și acțiuni",
        questions: [
          { type: "mcq", topic: "lectura_c1", subtopic: "personaje_c1", question: "Text: \"Ion aleargă în parc. El se joacă cu mingea.\"\n\nCe face Ion?", options: ["Aleargă și se joacă", "Doarme", "Mănâncă", "Citește"], correct: 0 },
        ],
      },
      {
        id: "ideea_c1",
        name: "Ideea principală a textului",
        questions: [
          { type: "mcq", topic: "lectura_c1", subtopic: "ideea_c1", question: "Text: \"Maria citește o carte frumoasă. Ea citește în fiecare zi. Maria iubește cărțile.\"\n\nCare este ideea principală?", options: ["Maria iubește să citească.", "Maria nu știe să citească.", "Maria urăște cărțile.", "Maria se uită la televizor."], correct: 0 },
        ],
      },
    ],
  },
];

// ─── MAIN EXPORT ──────────────────────────────────────────────────────────────

export const ROMANIAN_CURRICULUM: Record<number, RomanianTheme[]> = {
  1: C1,
};

/** Generator mapping by grade */
const GENERATOR_MAP: Record<number, Record<string, Record<string, (seed?: number) => CurriculumQuestion[]>>> = {
  1: C1_Generators,
};

/** Returns shuffled questions from selected subtopics (max count). */
export function getRomanianQuestions(
  grade: number,
  selectedSubtopicIds: string[],
  count = 10
): RomanianQuestion[] {
  const themes = ROMANIAN_CURRICULUM[grade] ?? [];
  const pool: RomanianQuestion[] = [];
  const generators = GENERATOR_MAP[grade];

  if (!generators) return [];

  for (const theme of themes) {
    for (const sub of theme.subtopics) {
      if (selectedSubtopicIds.includes(sub.id)) {
        const topicGenerators = generators[theme.id];
        if (topicGenerators) {
          const generatorFn = topicGenerators[sub.id];
          if (generatorFn && typeof generatorFn === "function") {
            const seed = Math.floor(Math.random() * 1000000);
            const generated = generatorFn(seed);
            pool.push(...generated);
          } else {
            pool.push(...sub.questions);
          }
        } else {
          pool.push(...sub.questions);
        }
      }
    }
  }

  // If pool is too small, cycle through existing questions with shuffled options
  if (pool.length > 0 && pool.length < count) {
    const base = [...pool];
    while (pool.length < count) {
      const q = { ...base[pool.length % base.length] };
      if (q.type === "mcq" && q.options) {
        const opts = [...q.options];
        const correctAnswer = opts[q.correct ?? 0];
        for (let i = opts.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [opts[i], opts[j]] = [opts[j], opts[i]];
        }
        q.options = opts;
        q.correct = opts.indexOf(correctAnswer);
      }
      pool.push(q);
    }
  }

  // Fisher-Yates shuffle
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, count);
}

// ─── ROMANIAN GRADING — Calificative (FB / B / S / I) ───────────────────────

export function calculateRomanianGrade(pct: number, _countryCode = "RO"): GradeMark {
  if (pct >= 90) return { label: "FB", description: "Foarte Bine",        color: "#FFD700", emoji: "🌟" };
  if (pct >= 70) return { label: "B",  description: "Bine",               color: "#00FF88", emoji: "😊" };
  if (pct >= 50) return { label: "S",  description: "Suficient",          color: "#FF6B00", emoji: "🙂" };
  return              { label: "I",  description: "Insuficient",         color: "#FF4444", emoji: "😟" };
}

// ─── SUBTOPIC HINTS (shown after wrong answer) ──────────────────────────────

export const ROMANIAN_SUBTOPIC_HINTS: Record<string, string> = {
  // Alfabet
  "vocale_c1":              "Vocalele limbii române sunt: a, ă, â, e, i, î, o, u (8 vocale)",
  "consoane_c1":            "Consoanele sunt toate literele care NU sunt vocale: b, c, d, f, g, h, j, k, l, m, n, p, r, s, ș, t, ț, v, x, z",
  "litere_mari_mici_c1":    "Fiecare literă are două forme: MARE (A, B, C) și mică (a, b, c). Litera mare se folosește la început de propoziție și la nume proprii.",
  "litere_speciale_c1":     "Literele speciale românești sunt: ă (a cu sedilă), â (a cu circumflex), î (i cu circumflex), ș (s cu sedilă), ț (t cu sedilă)",
  "ordine_alfa_c1":         "Alfabetul român: A, Ă, Â, B, C, D, E, F, G, H, I, Î, J, K, L, M, N, O, P, Q, R, S, Ș, T, Ț, U, V, W, X, Y, Z (31 litere)",
  // Sunete
  "vocale_consoane_c1":     "Într-un cuvânt, numără vocalele (a, ă, â, e, i, î, o, u). Câte vocale — atâtea silabe!",
  "grupuri_ce_ci_c1":       "Grupurile 'ce' și 'ci' au un sunet special (ca în 'cerc', 'cinci'). NU sunt 'ke'/'ki'!",
  "grupuri_ge_gi_c1":       "Grupurile 'ge' și 'gi' au un sunet special (ca în 'ger', 'girafă'). NU sunt 'ghe'/'ghi'!",
  "grupuri_che_chi_c1":     "Grupurile 'che', 'chi', 'ghe', 'ghi' au sunet tare: cheie=ke-ie, ghete=ge-te. Litera 'h' face sunetul tare!",
  // Silabe
  "despartire_c1":          "Regula de bază: câte vocale, atâtea silabe. Desparte între două consoane: car-te, cop-ac. O consoană între vocale merge la silaba următoare: ca-să, ma-ma.",
  "numarare_c1":            "Numără vocalele din cuvânt — câte vocale, atâtea silabe! Exemplu: 'pisică' → i, i, ă = 3 silabe (pi-si-că)",
  "silaba_accent_c1":       "Silaba accentuată este cea pe care o pronunțăm mai tare. Exemplu: MAmă (accent pe prima), coPAC (accent pe a doua).",
  // Cuvântul
  "sinonime_c1":            "Sinonimele sunt cuvinte cu ACELAȘI înțeles: mare=uriaș, mic=mărunt, frumos=drăguț, vesel=bucuros",
  "antonime_c1":            "Antonimele sunt cuvinte cu înțeles OPUS: mare↔mic, frumos↔urât, vesel↔trist, cald↔rece, sus↔jos",
  "diminutive_c1":          "Diminutivele arată ceva mic sau drag: casă→căsuță, floare→floricică, copil→copilăș, carte→cărticică",
  "familii_c1":             "Familia de cuvinte = cuvinte cu aceeași rădăcină: floare → florar, floricică, înflorit, florărie",
  "singular_plural_c1":     "Singular = un singur lucru (o carte). Plural = mai multe (două cărți). Regulă: carte→cărți, copac→copaci, masă→mese",
  // Propoziția
  "punctuatie_c1":          "Punctul (.) = propoziție normală. Semnul întrebării (?) = întrebare. Semnul exclamării (!) = surpriză sau emoție.",
  "litera_mare_c1":         "Scriem cu literă MARE: la începutul propoziției, numele de persoane (Ana, Ion), denumiri de locuri (București, România).",
  "propozitie_tip_c1":      "Enunțiativă: spune ceva (.) — Interogativă: întreabă ceva (?) — Exclamativă: exprimă emoție (!)",
  "ordine_cuvinte_c1":      "Într-o propoziție, cuvintele trebuie puse în ordine logică: CINE + CE FACE + UNDE/CÂND. Exemplu: Ana merge la școală.",
  // Ortografie
  "m_bp_c1":                "Înainte de 'b' și 'p' scriem întotdeauna 'm' (NU 'n'): câmp, bomboane, cumpăra, umbrela, timpuriu",
  "a_i_c1":                 "La începutul cuvântului scriem 'î' (început, înalt, într-o). În interiorul cuvântului scriem 'â' (câine, mâncare, pâine).",
  "cratima_c1":             "Cratima (-) leagă cuvinte scurte: s-a, n-am, într-o, m-a, l-am, nu-i. Se scrie FĂRĂ spații!",
  "scrierea_corecta_c1":    "Atenție la scrierea corectă: într-o (NU intro), s-a (NU sa), m-a (NU ma), n-am (NU nam).",
  // Lectură
  "intelegere_c1":          "Citește textul cu atenție! Răspunsul se găsește ÎNTOTDEAUNA în text. Caută cuvintele cheie din întrebare.",
  "personaje_c1":           "Personajele sunt CINE apare în text. Acțiunile sunt CE FAC personajele. Caută verbele (merg, citesc, aleargă).",
  "ideea_c1":               "Ideea principală = despre ce este textul PE SCURT. Gândește-te: dacă ar trebui să spui textul într-o singură propoziție, ce ai zice?",
};
