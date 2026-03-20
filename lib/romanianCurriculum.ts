// ─── ROMANIAN TEST — LIMBA ROMÂNĂ CURRICULUM (Clasa I–VIII) ──────────────────
// Procedural questions generated via romanianGenerators.ts

import type { CurriculumTheme, CurriculumQuestion } from "./curriculumTypes";
import type { TestGradeMark } from "./languageTestTypes";
import { C1_Generators } from "./romanianGenerators";
import { C2_Generators } from "./romanianGeneratorsC2";
import { C3_Generators } from "./romanianGeneratorsC3";
import { C4_Morfo_Generators } from "./romanianGeneratorsC4morfo";
import { C4_Sint_Generators } from "./romanianGeneratorsC4sint";
import { C4_Ort_Generators } from "./romanianGeneratorsC4ort";
import { C4_Voc_Generators } from "./romanianGeneratorsC4voc";
import { C4_Text_Generators } from "./romanianGeneratorsC4text";
import { C4_Lec_Generators } from "./romanianGeneratorsC4lec";
import { C6P1_Generators } from "./romanianGeneratorsC6p1";
import { C6P2_Generators } from "./romanianGeneratorsC6p2";
import { C6P3_Generators } from "./romanianGeneratorsC6p3";
import { C6P4_Generators } from "./romanianGeneratorsC6p4";

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

// ─── CLASA a II-a (Grade 2) ──────────────────────────────────────────────────

const C2: RomanianTheme[] = [
  {
    id: "parti_vorbire_c2",
    name: "Părțile de vorbire",
    icon: "🏷️",
    color: "#FF2D78",
    subtopics: [
      { id: "substantiv_c2", name: "Substantivul", questions: [
        { type: "mcq", topic: "parti_vorbire_c2", subtopic: "substantiv_c2", question: "Care cuvânt este un substantiv?", options: ["carte", "frumos", "aleargă", "repede"], correct: 0 },
      ]},
      { id: "verb_c2", name: "Verbul", questions: [
        { type: "mcq", topic: "parti_vorbire_c2", subtopic: "verb_c2", question: "Care cuvânt este un verb?", options: ["scrie", "masă", "mare", "vesel"], correct: 0 },
      ]},
      { id: "adjectiv_c2", name: "Adjectivul", questions: [
        { type: "mcq", topic: "parti_vorbire_c2", subtopic: "adjectiv_c2", question: "Care cuvânt este un adjectiv?", options: ["frumos", "casă", "merge", "el"], correct: 0 },
      ]},
    ],
  },
  {
    id: "ortografie_c2",
    name: "Ortografie",
    icon: "📐",
    color: "#00D4FF",
    subtopics: [
      { id: "a_i_reguli_c2", name: "â și î — reguli", questions: [
        { type: "mcq", topic: "ortografie_c2", subtopic: "a_i_reguli_c2", question: "Cum se scrie corect?", options: ["România", "Romănia", "Romaînia", "Românîa"], correct: 0 },
      ]},
      { id: "sa_s_a_c2", name: "sa / s-a", questions: [
        { type: "mcq", topic: "ortografie_c2", subtopic: "sa_s_a_c2", question: "Completează: '... dus la școală.'", options: ["S-a", "Sa", "S a", "S'a"], correct: 0 },
      ]},
      { id: "ia_i_a_c2", name: "ia / i-a", questions: [
        { type: "mcq", topic: "ortografie_c2", subtopic: "ia_i_a_c2", question: "Care formă este corectă? 'Mama ... dat o carte.'", options: ["i-a", "ia", "i a", "i'a"], correct: 0 },
      ]},
      { id: "sau_s_au_c2", name: "sau / s-au", questions: [
        { type: "mcq", topic: "ortografie_c2", subtopic: "sau_s_au_c2", question: "Care formă este corectă? 'Copiii ... jucat în parc.'", options: ["s-au", "sau", "s au", "s'au"], correct: 0 },
      ]},
    ],
  },
  {
    id: "propozitia_c2",
    name: "Propoziția",
    icon: "✍️",
    color: "#00FF88",
    subtopics: [
      { id: "subiect_predicat_c2", name: "Subiectul și predicatul", questions: [
        { type: "mcq", topic: "propozitia_c2", subtopic: "subiect_predicat_c2", question: "Care este subiectul în propoziția: 'Maria citește o carte.'?", options: ["Maria", "citește", "carte", "o"], correct: 0 },
      ]},
      { id: "tipuri_prop_c2", name: "Tipuri de propoziții", questions: [
        { type: "mcq", topic: "propozitia_c2", subtopic: "tipuri_prop_c2", question: "Ce tip de propoziție este: 'Vino aici!'?", options: ["Imperativă", "Enunțiativă", "Interogativă", "Exclamativă"], correct: 0 },
      ]},
      { id: "punctuatie_c2", name: "Semnele de punctuație (. ? ! , ;)", questions: [
        { type: "mcq", topic: "propozitia_c2", subtopic: "punctuatie_c2", question: "Ce semn punem după o comandă?", options: ["!", ".", "?", ","], correct: 0 },
      ]},
    ],
  },
  {
    id: "textul_c2",
    name: "Textul",
    icon: "📖",
    color: "#B44DFF",
    subtopics: [
      { id: "narativ_c2", name: "Textul narativ", questions: [
        { type: "mcq", topic: "textul_c2", subtopic: "narativ_c2", question: "Care este partea de început a unui text narativ?", options: ["Introducerea", "Cuprinsul", "Încheierea", "Dialogul"], correct: 0 },
      ]},
      { id: "personaje_actiuni_c2", name: "Personaje și acțiuni", questions: [
        { type: "mcq", topic: "textul_c2", subtopic: "personaje_actiuni_c2", question: "Ce sunt personajele într-un text?", options: ["Cei care apar în poveste", "Titlul povestirii", "Sfârșitul poveștii", "Semnele de punctuație"], correct: 0 },
      ]},
      { id: "dialog_c2", name: "Dialogul", questions: [
        { type: "mcq", topic: "textul_c2", subtopic: "dialog_c2", question: "Cum marcăm un dialog în text?", options: ["Cu linia de dialog (–)", "Cu punct (.)", "Cu paranteză ()", "Cu asterisc (*)"], correct: 0 },
      ]},
    ],
  },
  {
    id: "vocabular_c2",
    name: "Vocabular",
    icon: "📚",
    color: "#FFD700",
    subtopics: [
      { id: "omonime_c2", name: "Omonime", questions: [
        { type: "mcq", topic: "vocabular_c2", subtopic: "omonime_c2", question: "Cuvântul 'broască' poate însemna:", options: ["animal SAU lacăt", "doar animal", "doar lacăt", "nici una"], correct: 0 },
      ]},
      { id: "cuvinte_compuse_c2", name: "Cuvinte compuse", questions: [
        { type: "mcq", topic: "vocabular_c2", subtopic: "cuvinte_compuse_c2", question: "Care cuvânt este compus?", options: ["untdelemn", "frumos", "casă", "merge"], correct: 0 },
      ]},
      { id: "expresii_c2", name: "Expresii/Zicători", questions: [
        { type: "mcq", topic: "vocabular_c2", subtopic: "expresii_c2", question: "Ce înseamnă 'a da din casă'?", options: ["A spune secrete", "A muta casa", "A construi o casă", "A vinde o casă"], correct: 0 },
      ]},
    ],
  },
  {
    id: "comunicare_c2",
    name: "Comunicare",
    icon: "🗣️",
    color: "#FF6B00",
    subtopics: [
      { id: "dialog_oral_c2", name: "Dialog — formule de politețe", questions: [
        { type: "mcq", topic: "comunicare_c2", subtopic: "dialog_oral_c2", question: "Cum salutăm un adult?", options: ["Bună ziua!", "Salut!", "Hei!", "Yo!"], correct: 0 },
      ]},
      { id: "bilet_felicitare_c2", name: "Biletul și felicitarea", questions: [
        { type: "mcq", topic: "comunicare_c2", subtopic: "bilet_felicitare_c2", question: "Ce conține un bilet?", options: ["Destinatar, mesaj, semnătură", "Doar semnătura", "Doar data", "Un desen"], correct: 0 },
      ]},
    ],
  },
  {
    id: "lectura_c2",
    name: "Lectură și înțelegere",
    icon: "📕",
    color: "#10B981",
    subtopics: [
      { id: "intelegere_c2", name: "Înțelegerea textului", questions: [
        { type: "mcq", topic: "lectura_c2", subtopic: "intelegere_c2", question: "Text: \"Ana merge la bibliotecă. Ea împrumută o carte despre animale.\"\n\nUnde merge Ana?", options: ["La bibliotecă", "La școală", "Acasă", "La magazin"], correct: 0 },
      ]},
      { id: "succesiune_c2", name: "Succesiunea evenimentelor", questions: [
        { type: "mcq", topic: "lectura_c2", subtopic: "succesiune_c2", question: "Text: \"Ion s-a trezit, s-a spălat și a plecat la școală.\"\n\nCe a făcut Ion PRIMA dată?", options: ["S-a trezit", "S-a spălat", "A plecat la școală", "A mâncat"], correct: 0 },
      ]},
      { id: "morala_c2", name: "Morala/învățătura", questions: [
        { type: "mcq", topic: "lectura_c2", subtopic: "morala_c2", question: "Text: \"Vulpea a vrut strugurii, dar nu a putut ajunge la ei. A spus: 'Sunt acri oricum!'\"\n\nCare este morala?", options: ["Nu disprețui ce nu poți obține", "Strugurii sunt acri", "Vulpea e proastă", "E bine să renunți"], correct: 0 },
      ]},
    ],
  },
];

// ─── CLASA a III-a (Grade 3) ─────────────────────────────────────────────────

const C3: RomanianTheme[] = [
  {
    id: "substantiv_c3",
    name: "Substantivul",
    icon: "🏷️",
    color: "#FF2D78",
    subtopics: [
      { id: "gen_subst_c3", name: "Genul substantivului (m/f/n)", questions: [
        { type: "mcq", topic: "substantiv_c3", subtopic: "gen_subst_c3", question: "Ce gen are substantivul 'munte'?", options: ["masculin", "feminin", "neutru", "comun"], correct: 0 },
      ]},
      { id: "numar_subst_c3", name: "Numărul substantivului (sg/pl)", questions: [
        { type: "mcq", topic: "substantiv_c3", subtopic: "numar_subst_c3", question: "Care este pluralul substantivului 'copil'?", options: ["copii", "copile", "copiii", "copilași"], correct: 0 },
      ]},
      { id: "caz_subst_c3", name: "Cazul substantivului (N/G/D/Ac)", questions: [
        { type: "mcq", topic: "substantiv_c3", subtopic: "caz_subst_c3", question: "'Ana citește.' — La ce caz este substantivul 'Ana'?", options: ["Nominativ", "Acuzativ", "Dativ", "Genitiv"], correct: 0 },
      ]},
    ],
  },
  {
    id: "verb_c3",
    name: "Verbul",
    icon: "⚡",
    color: "#00D4FF",
    subtopics: [
      { id: "conjugare_c3", name: "Conjugarea verbului (persoane)", questions: [
        { type: "mcq", topic: "verb_c3", subtopic: "conjugare_c3", question: "Care este forma verbului 'a merge' pentru 'eu'?", options: ["merg", "mergi", "merge", "mergem"], correct: 0 },
      ]},
      { id: "timp_verb_c3", name: "Timpurile verbului (prezent/trecut/viitor)", questions: [
        { type: "mcq", topic: "verb_c3", subtopic: "timp_verb_c3", question: "La ce timp este verbul 'a cântat'?", options: ["trecut", "prezent", "viitor", "infinitiv"], correct: 0 },
      ]},
      { id: "persoana_nr_c3", name: "Persoana și numărul verbului", questions: [
        { type: "mcq", topic: "verb_c3", subtopic: "persoana_nr_c3", question: "'noi mergem' — La ce persoană și număr este verbul?", options: ["I plural", "I singular", "a III-a plural", "a II-a plural"], correct: 0 },
      ]},
    ],
  },
  {
    id: "adjectiv_c3",
    name: "Adjectivul",
    icon: "🎨",
    color: "#00FF88",
    subtopics: [
      { id: "acord_adj_c3", name: "Acordul adjectivului cu substantivul", questions: [
        { type: "mcq", topic: "adjectiv_c3", subtopic: "acord_adj_c3", question: "Care este forma adjectivului 'frumos' pentru substantivul feminin 'floare'?", options: ["frumoasă", "frumos", "frumoși", "frumoase"], correct: 0 },
      ]},
      { id: "adj_propozitie_c3", name: "Adjectivul în propoziție", questions: [
        { type: "mcq", topic: "adjectiv_c3", subtopic: "adj_propozitie_c3", question: "Care este adjectivul din: 'Câinele cel negru a latrat.'?", options: ["negru", "câinele", "latrat", "cel"], correct: 0 },
      ]},
    ],
  },
  {
    id: "vocabular_c3",
    name: "Vocabular avansat",
    icon: "📚",
    color: "#B44DFF",
    subtopics: [
      { id: "sinonime_c3", name: "Sinonime", questions: [
        { type: "mcq", topic: "vocabular_c3", subtopic: "sinonime_c3", question: "Care este sinonimul cuvântului 'a vorbi'?", options: ["a spune", "a tăcea", "a merge", "a dormi"], correct: 0 },
      ]},
      { id: "antonime_c3", name: "Antonime", questions: [
        { type: "mcq", topic: "vocabular_c3", subtopic: "antonime_c3", question: "Care este antonimul cuvântului 'vesel'?", options: ["trist", "bucuros", "fericit", "mulțumit"], correct: 0 },
      ]},
      { id: "familia_cuvintelor_c3", name: "Familia de cuvinte", questions: [
        { type: "mcq", topic: "vocabular_c3", subtopic: "familia_cuvintelor_c3", question: "Care cuvânt face parte din familia lui 'floare'?", options: ["florar", "casnic", "copăcel", "apă"], correct: 0 },
      ]},
    ],
  },
  {
    id: "ortografie_c3",
    name: "Ortografie avansată",
    icon: "📐",
    color: "#FFD700",
    subtopics: [
      { id: "cratima_c3", name: "Cratima — n-am, nu-i, m-am, l-am", questions: [
        { type: "mcq", topic: "ortografie_c3", subtopic: "cratima_c3", question: "Completează corect: 'Eu ___ văzut filmul.'", options: ["n-am", "nam", "n am", "n'am"], correct: 0 },
      ]},
    ],
  },
  {
    id: "propozitia_c3",
    name: "Propoziția — dezvoltată și figuri de stil",
    icon: "✍️",
    color: "#FF6B00",
    subtopics: [
      { id: "propozitie_dezv_c3", name: "Propoziția simplă și dezvoltată", questions: [
        { type: "mcq", topic: "propozitia_c3", subtopic: "propozitie_dezv_c3", question: "Ce este o propoziție simplă?", options: ["Are doar subiect și predicat", "Are mai mult de 5 cuvinte", "Are atribute și complemente", "Are dialog"], correct: 0 },
      ]},
      { id: "figuri_stil_c3", name: "Figuri de stil (comparație, personificare)", questions: [
        { type: "mcq", topic: "propozitia_c3", subtopic: "figuri_stil_c3", question: "Ce figură de stil conține: 'Fata era frumoasă ca o floare.'?", options: ["comparație", "personificare", "enumerație", "repetiție"], correct: 0 },
      ]},
    ],
  },
  {
    id: "lectura_c3",
    name: "Lectură și comprehensiune",
    icon: "📕",
    color: "#10B981",
    subtopics: [
      { id: "intelegere_c3", name: "Înțelegerea textului", questions: [
        { type: "mcq", topic: "lectura_c3", subtopic: "intelegere_c3", question: "Text: \"Toamna, codrul se îmbracă în haine de aur și ruginiu.\"\n\nCe anotimp descrie textul?", options: ["Toamna", "Vara", "Iarna", "Primăvara"], correct: 0 },
      ]},
      { id: "idee_principala_c3", name: "Ideea principală și rezumatul", questions: [
        { type: "mcq", topic: "lectura_c3", subtopic: "idee_principala_c3", question: "Ce este ideea principală a unui text?", options: ["Mesajul cel mai important", "Titlul textului", "Prima propoziție", "Ultimul paragraf"], correct: 0 },
      ]},
    ],
  },
];

// ─── CLASA a IV-a (Grade 4) ──────────────────────────────────────────────────

const C4: RomanianTheme[] = [
  {
    id: "morfologie_c4",
    name: "Morfologie",
    icon: "🏷️",
    color: "#FF2D78",
    subtopics: [
      { id: "substantiv_c4", name: "Substantivul", questions: [
        { type: "mcq", topic: "morfologie_c4", subtopic: "substantiv_c4", question: "Ce parte de vorbire este cuvântul 'carte'?", options: ["Substantiv", "Verb", "Adjectiv", "Pronume"], correct: 0 },
      ]},
      { id: "adjectiv_c4", name: "Adjectivul", questions: [
        { type: "mcq", topic: "morfologie_c4", subtopic: "adjectiv_c4", question: "Care cuvânt este adjectiv?", options: ["frumos", "casă", "merge", "eu"], correct: 0 },
      ]},
      { id: "pronume_personal_c4", name: "Pronumele personal", questions: [
        { type: "mcq", topic: "morfologie_c4", subtopic: "pronume_personal_c4", question: "Care este pronumele personal de persoana I singular?", options: ["eu", "tu", "el", "noi"], correct: 0 },
      ]},
      { id: "pronume_posesiv_c4", name: "Pronumele posesiv", questions: [
        { type: "mcq", topic: "morfologie_c4", subtopic: "pronume_posesiv_c4", question: "Care este pronumele posesiv pentru persoana I singular?", options: ["al meu", "al tău", "al lui", "al nostru"], correct: 0 },
      ]},
      { id: "verb_timpuri_c4", name: "Verbul — timpuri", questions: [
        { type: "mcq", topic: "morfologie_c4", subtopic: "verb_timpuri_c4", question: "La ce timp este verbul 'va merge'?", options: ["viitor", "prezent", "trecut", "perfect compus"], correct: 0 },
      ]},
    ],
  },
  {
    id: "sintaxa_c4",
    name: "Sintaxă",
    icon: "✍️",
    color: "#00D4FF",
    subtopics: [
      { id: "alte_parti_c4", name: "Alte părți de vorbire (adverb, prepoziție, conjuncție)", questions: [
        { type: "mcq", topic: "sintaxa_c4", subtopic: "alte_parti_c4", question: "Care cuvânt este adverb?", options: ["repede", "masă", "frumos", "el"], correct: 0 },
      ]},
      { id: "subiect_predicat_c4", name: "Subiectul și predicatul", questions: [
        { type: "mcq", topic: "sintaxa_c4", subtopic: "subiect_predicat_c4", question: "Care este subiectul în 'Maria citește'?", options: ["Maria", "citește", "cărți", "azi"], correct: 0 },
      ]},
      { id: "atribut_c4", name: "Atributul", questions: [
        { type: "mcq", topic: "sintaxa_c4", subtopic: "atribut_c4", question: "Care este atributul în 'fata frumoasă'?", options: ["frumoasă", "fata", "cea", "a"], correct: 0 },
      ]},
      { id: "complement_c4", name: "Complementul", questions: [
        { type: "mcq", topic: "sintaxa_c4", subtopic: "complement_c4", question: "În 'Citesc o carte', complementul direct este:", options: ["o carte", "citesc", "o", "carte"], correct: 0 },
      ]},
      { id: "fraza_propozitii_c4", name: "Fraza — propoziții", questions: [
        { type: "mcq", topic: "sintaxa_c4", subtopic: "fraza_propozitii_c4", question: "Câte propoziții are fraza 'Maria citește și Ion scrie'?", options: ["2", "1", "3", "4"], correct: 0 },
      ]},
    ],
  },
  {
    id: "ortografie_c4",
    name: "Ortografie",
    icon: "📐",
    color: "#00FF88",
    subtopics: [
      { id: "majuscule_c4", name: "Majuscule — reguli avansate", questions: [
        { type: "mcq", topic: "ortografie_c4", subtopic: "majuscule_c4", question: "Care cuvânt se scrie cu majusculă?", options: ["București", "frumos", "merge", "carte"], correct: 0 },
      ]},
      { id: "cratima_avansata_c4", name: "Cratima avansată", questions: [
        { type: "mcq", topic: "ortografie_c4", subtopic: "cratima_avansata_c4", question: "Care formă este corectă?", options: ["s-a dus", "sa dus", "s a dus", "s'a dus"], correct: 0 },
      ]},
      { id: "punctuatie_c4", name: "Punctuație", questions: [
        { type: "mcq", topic: "ortografie_c4", subtopic: "punctuatie_c4", question: "Ce semn de punctuație folosim în enumerații?", options: [",", ".", "!", "?"], correct: 0 },
      ]},
      { id: "despartire_avansata_c4", name: "Despărțirea avansată în silabe", questions: [
        { type: "mcq", topic: "ortografie_c4", subtopic: "despartire_avansata_c4", question: "Cum se desparte corect 'structură'?", options: ["struc-tu-ră", "stru-ctu-ră", "s-truc-tu-ră", "structu-ră"], correct: 0 },
      ]},
      { id: "scrierea_corecta_c4", name: "Scrierea corectă a cuvintelor", questions: [
        { type: "mcq", topic: "ortografie_c4", subtopic: "scrierea_corecta_c4", question: "Care formă este corectă?", options: ["într-adevăr", "intr-adevăr", "intradevăr", "într adevăr"], correct: 0 },
      ]},
    ],
  },
  {
    id: "vocabular_c4",
    name: "Vocabular",
    icon: "📚",
    color: "#B44DFF",
    subtopics: [
      { id: "sinonime_antonime_c4", name: "Sinonime și antonime", questions: [
        { type: "mcq", topic: "vocabular_c4", subtopic: "sinonime_antonime_c4", question: "Care este sinonimul lui 'a vorbi'?", options: ["a spune", "a tăcea", "a merge", "a dormi"], correct: 0 },
      ]},
      { id: "campuri_semantice_c4", name: "Câmpuri semantice", questions: [
        { type: "mcq", topic: "vocabular_c4", subtopic: "campuri_semantice_c4", question: "Care cuvânt aparține câmpului semantic 'școală'?", options: ["manual", "pădure", "ocean", "lună"], correct: 0 },
      ]},
      { id: "expresii_frazeologice_c4", name: "Expresii frazeologice", questions: [
        { type: "mcq", topic: "vocabular_c4", subtopic: "expresii_frazeologice_c4", question: "'A trage pe sfoară' înseamnă:", options: ["a înșela", "a ajuta", "a alerga", "a cânta"], correct: 0 },
      ]},
      { id: "derivare_compunere_c4", name: "Derivare și compunere", questions: [
        { type: "mcq", topic: "vocabular_c4", subtopic: "derivare_compunere_c4", question: "Cuvântul 'florar' este derivat din:", options: ["floare", "flori", "florile", "florărie"], correct: 0 },
      ]},
    ],
  },
  {
    id: "text_c4",
    name: "Tipuri de texte",
    icon: "📖",
    color: "#FFD700",
    subtopics: [
      { id: "rezumat_c4", name: "Rezumatul", questions: [
        { type: "mcq", topic: "text_c4", subtopic: "rezumat_c4", question: "Ce este rezumatul unui text?", options: ["Povestirea pe scurt a ideilor principale", "Copierea textului", "Traducerea textului", "Titlul textului"], correct: 0 },
      ]},
      { id: "text_narativ_c4", name: "Textul narativ", questions: [
        { type: "mcq", topic: "text_c4", subtopic: "text_narativ_c4", question: "Textul narativ povestește:", options: ["o serie de întâmplări", "caracteristici ale unui obiect", "o conversație", "versuri și rime"], correct: 0 },
      ]},
      { id: "text_argumentativ_c4", name: "Textul argumentativ", questions: [
        { type: "mcq", topic: "text_c4", subtopic: "text_argumentativ_c4", question: "Textul argumentativ are scopul de a:", options: ["convinge cititorul", "descrie un loc", "povesti o întâmplare", "prezenta un dialog"], correct: 0 },
      ]},
      { id: "scrisoarea_c4", name: "Scrisoarea", questions: [
        { type: "mcq", topic: "text_c4", subtopic: "scrisoarea_c4", question: "Ce conține o scrisoare?", options: ["Formulă de adresare, mesaj, semnătură", "Doar semnătura", "Doar data", "Versuri"], correct: 0 },
      ]},
      { id: "textul_informativ_c4", name: "Textul informativ", questions: [
        { type: "mcq", topic: "text_c4", subtopic: "textul_informativ_c4", question: "Textul informativ prezintă:", options: ["fapte și date reale", "personaje imaginare", "versuri și rime", "dialoguri fictive"], correct: 0 },
      ]},
    ],
  },
  {
    id: "lectura_c4",
    name: "Lectură și înțelegere",
    icon: "📕",
    color: "#10B981",
    subtopics: [
      { id: "intelegere_text_c4", name: "Înțelegerea textului", questions: [
        { type: "mcq", topic: "lectura_c4", subtopic: "intelegere_text_c4", question: "Cum identificăm ideea principală a unui text?", options: ["Găsim mesajul cel mai important", "Citim doar primul rând", "Numărăm cuvintele", "Căutăm rimele"], correct: 0 },
      ]},
      { id: "personaje_c4", name: "Personajele textului", questions: [
        { type: "mcq", topic: "lectura_c4", subtopic: "personaje_c4", question: "Personajul principal este:", options: ["cel care apare cel mai mult în text", "primul menționat", "cel mai bun", "narratorul"], correct: 0 },
      ]},
      { id: "tema_mesaj_c4", name: "Tema și mesajul textului", questions: [
        { type: "mcq", topic: "lectura_c4", subtopic: "tema_mesaj_c4", question: "Tema unui text reprezintă:", options: ["subiectul principal despre care se vorbește", "titlul textului", "autorul textului", "lungimea textului"], correct: 0 },
      ]},
      { id: "figuri_stil_c4", name: "Figuri de stil", questions: [
        { type: "mcq", topic: "lectura_c4", subtopic: "figuri_stil_c4", question: "'Fata era frumoasă ca o floare' conține:", options: ["comparație", "personificare", "enumerație", "repetiție"], correct: 0 },
      ]},
    ],
  },
];

// ─── CLASA a VI-a (Grade 6) ──────────────────────────────────────────────────

const C6: RomanianTheme[] = [
  {
    id: "substantiv_c6",
    name: "Substantivul — Declinări și funcții",
    icon: "🏷️",
    color: "#FF2D78",
    subtopics: [
      { id: "declinare_c6", name: "Declinarea completă (N/G/D/Ac/V)", questions: [
        { type: "mcq", topic: "substantiv_c6", subtopic: "declinare_c6", question: "Cum se declină substantivul 'carte' la Genitiv singular?", options: ["cărții", "cartei", "cartă", "cărți"], correct: 0 },
      ]},
      { id: "functii_sintactice_c6", name: "Funcții sintactice ale substantivului", questions: [
        { type: "mcq", topic: "substantiv_c6", subtopic: "functii_sintactice_c6", question: "În propoziția 'Dau cartea Mariei', ce funcție are 'Mariei'?", options: ["Complement indirect", "Complement direct", "Atribut", "Subiect"], correct: 0 },
      ]},
      { id: "defective_c6", name: "Substantive defective", questions: [
        { type: "mcq", topic: "substantiv_c6", subtopic: "defective_c6", question: "Substantivul 'datorie' este defectiv. Ce formă nu are?", options: ["plural", "singular", "genitiv", "nominativ"], correct: 0 },
      ]},
    ],
  },
  {
    id: "pronume_c6",
    name: "Pronumele — Tipuri și categorii",
    icon: "👤",
    color: "#00D4FF",
    subtopics: [
      { id: "personale_c6", name: "Pronume personale (eu, tu, el, ea)", questions: [
        { type: "mcq", topic: "pronume_c6", subtopic: "personale_c6", question: "Care este forma de Acuzativ a pronumelui 'eu'?", options: ["mă", "mi", "mie", "am"], correct: 0 },
      ]},
      { id: "demonstrative_c6", name: "Pronume demonstrative (acesta, acela)", questions: [
        { type: "mcq", topic: "pronume_c6", subtopic: "demonstrative_c6", question: "Pronumele demonstrativ 'aceasta' se referă la ceva:", options: ["apropiat", "depărtat", "neuterminant", "nespecificat"], correct: 0 },
      ]},
      { id: "posesive_c6", name: "Pronume posesive (al meu, al tău)", questions: [
        { type: "mcq", topic: "pronume_c6", subtopic: "posesive_c6", question: "Care pronume posesiv corespunde persoanei I singular?", options: ["al meu", "al tău", "al lui", "al nostru"], correct: 0 },
      ]},
      { id: "reflexive_c6", name: "Pronume reflexive (mă, te, se)", questions: [
        { type: "mcq", topic: "pronume_c6", subtopic: "reflexive_c6", question: "În expresia 'mă gândesc', pronumele reflexiv este:", options: ["mă", "am", "cum", "gândesc"], correct: 0 },
      ]},
      { id: "interogative_c6", name: "Pronume interogative (cine, ce, care)", questions: [
        { type: "mcq", topic: "pronume_c6", subtopic: "interogative_c6", question: "Pronumele interogativ 'cine' se folosește pentru a întreba despre:", options: ["persoane", "lucruri", "emoții", "locuri"], correct: 0 },
      ]},
      { id: "nehotarate_c6", name: "Pronume nehotărâte (cineva, ceva, fiecare)", questions: [
        { type: "mcq", topic: "pronume_c6", subtopic: "nehotarate_c6", question: "Pronumele nehotărat 'fiecare' exprimă:", options: ["universalitate", "particularitate", "negație", "posibilitate"], correct: 0 },
      ]},
      { id: "relative_c6", name: "Pronume relative (care, cine)", questions: [
        { type: "mcq", topic: "pronume_c6", subtopic: "relative_c6", question: "Pronumele relativ 'care' introduce:", options: ["propoziție subordonnată atributivă", "propoziție principală", "propoziție completivă", "conjuncție"], correct: 0 },
      ]},
    ],
  },
  {
    id: "verb_c6",
    name: "Verbul — Moduri și timpuri",
    icon: "⚡",
    color: "#FFD700",
    subtopics: [
      { id: "moduri_nepersonale_c6", name: "Moduri nepersonale (infinitiv, gerunziu, participiu)", questions: [
        { type: "mcq", topic: "verb_c6", subtopic: "moduri_nepersonale_c6", question: "Gerunziul verbului 'a merge' este:", options: ["mergând", "mers", "merge", "a merge"], correct: 0 },
      ]},
      { id: "timpuri_literare_c6", name: "Timpuri literare (trecut simplu, perfect)", questions: [
        { type: "mcq", topic: "verb_c6", subtopic: "timpuri_literare_c6", question: "Perfectul simplu exprimă o acțiune:", options: ["terminată și lăsat urme", "în derulare", "simultaneă cu alta", "viitoare"], correct: 0 },
      ]},
      { id: "diateze_c6", name: "Diateze (activă, pasivă)", questions: [
        { type: "mcq", topic: "verb_c6", subtopic: "diateze_c6", question: "Propoziția 'Copilul citește cartea' este în diateză:", options: ["activă", "pasivă", "reflexivă", "medie"], correct: 0 },
      ]},
      { id: "neregulata_c6", name: "Conjugare neregulată (a fi, a avea, a merge)", questions: [
        { type: "mcq", topic: "verb_c6", subtopic: "neregulata_c6", question: "Forma de persoana 'el' la verbul 'a fi' este:", options: ["este", "ești", "sunt", "sunteți"], correct: 0 },
      ]},
      { id: "acord_c6", name: "Acordul subiect-verb", questions: [
        { type: "mcq", topic: "verb_c6", subtopic: "acord_c6", question: "În 'Copiii și fetele joacă', verbul este:", options: ["joacă (plural)", "joacă (singular)", "joaca", "joacuri"], correct: 0 },
      ]},
    ],
  },
  {
    id: "adverb_prepozitie_c6",
    name: "Adverbe, Prepoziții, Conjuncții, Interjecții",
    icon: "🎯",
    color: "#00FF88",
    subtopics: [
      { id: "adverb_tipuri_c6", name: "Tipuri de adverbe (mod, timp, loc, cantitate)", questions: [
        { type: "mcq", topic: "adverb_prepozitie_c6", subtopic: "adverb_tipuri_c6", question: "Adverbul 'azi' este de:", options: ["timp", "mod", "loc", "cantitate"], correct: 0 },
      ]},
      { id: "prepozitie_cazuri_c6", name: "Prepoziții și cazurile cerute", questions: [
        { type: "mcq", topic: "adverb_prepozitie_c6", subtopic: "prepozitie_cazuri_c6", question: "Prepoziția 'din' cer ce caz?", options: ["Genitiv", "Dativ", "Acuzativ", "Nominativ"], correct: 0 },
      ]},
      { id: "conjunctie_c6", name: "Conjuncții coordonatoare și subordonatoare", questions: [
        { type: "mcq", topic: "adverb_prepozitie_c6", subtopic: "conjunctie_c6", question: "Conjuncția 'și' este:", options: ["coordonatoare (aditivă)", "subordonatoare", "prepoziție", "pronume"], correct: 0 },
      ]},
      { id: "interjectie_c6", name: "Interjecții (aia!, ah!, hai!)", questions: [
        { type: "mcq", topic: "adverb_prepozitie_c6", subtopic: "interjectie_c6", question: "Interjecția 'vai!' exprimă:", options: ["durere", "bucurie", "ură", "indiferență"], correct: 0 },
      ]},
    ],
  },
  {
    id: "sintaxa_c6",
    name: "Sintaxa — Funcții în propoziție",
    icon: "✍️",
    color: "#FF6B00",
    subtopics: [
      { id: "subiect_c6", name: "Subiectul", questions: [
        { type: "mcq", topic: "sintaxa_c6", subtopic: "subiect_c6", question: "În 'Maria citește', subiectul este:", options: ["Maria", "citește", "cărți", "azi"], correct: 0 },
      ]},
      { id: "predicat_verbal_c6", name: "Predicatul verbal", questions: [
        { type: "mcq", topic: "sintaxa_c6", subtopic: "predicat_verbal_c6", question: "Predicatul verbal poate fi compus din:", options: ["verb + auxiliar", "substantiv + adjectiv", "adverb + adjectiv", "prepoziție + pronume"], correct: 0 },
      ]},
      { id: "predicat_nominal_c6", name: "Predicatul nominal (copulă + atribut)", questions: [
        { type: "mcq", topic: "sintaxa_c6", subtopic: "predicat_nominal_c6", question: "În 'Copilul este fericit', predicatul nominal este:", options: ["este fericit", "copilul", "fericit", "este"], correct: 0 },
      ]},
      { id: "complement_direct_c6", name: "Complementul direct (Ac.)", questions: [
        { type: "mcq", topic: "sintaxa_c6", subtopic: "complement_direct_c6", question: "În 'Citesc o carte', complementul direct este:", options: ["o carte", "citesc", "o", "carte"], correct: 0 },
      ]},
      { id: "complement_indirect_c6", name: "Complementul indirect (Dat./Genitiv/cu prep.)", questions: [
        { type: "mcq", topic: "sintaxa_c6", subtopic: "complement_indirect_c6", question: "În 'Vorbesc cu prietenul meu', complementul indirect este:", options: ["cu prietenul meu", "vorbesc", "prietenul", "meu"], correct: 0 },
      ]},
      { id: "complement_circumstantial_c6", name: "Complementul circumstanțial (loc/timp/mod/cauză)", questions: [
        { type: "mcq", topic: "sintaxa_c6", subtopic: "complement_circumstantial_c6", question: "În 'Merg la grădină mâine', complementul circumstanțial este:", options: ["la grădină / mâine", "merg", "grădină", "azi"], correct: 0 },
      ]},
      { id: "atribut_c6", name: "Atributul", questions: [
        { type: "mcq", topic: "sintaxa_c6", subtopic: "atribut_c6", question: "În 'Fata frumoasă cântă', atributul este:", options: ["frumoasă", "fata", "cântă", "cea"], correct: 0 },
      ]},
    ],
  },
  {
    id: "fraza_c6",
    name: "Propoziția complexă — Subordonate",
    icon: "📖",
    color: "#B44DFF",
    subtopics: [
      { id: "subord_completive_c6", name: "Subordonate completive (că, dacă, cine)", questions: [
        { type: "mcq", topic: "fraza_c6", subtopic: "subord_completive_c6", question: "În 'Spun că voi veni', propoziția subordonnată este:", options: ["că voi veni", "spun", "voi veni", "veni"], correct: 0 },
      ]},
      { id: "subord_circumstantiale_c6", name: "Subordonate circumstanțiale (cauzale, temporale, etc.)", questions: [
        { type: "mcq", topic: "fraza_c6", subtopic: "subord_circumstantiale_c6", question: "În 'Dacă plouă, nu merg', propoziția subordonnată este:", options: ["Dacă plouă", "nu merg", "plouă", "merg"], correct: 0 },
      ]},
      { id: "subord_atributive_c6", name: "Subordonate atributive (care)", questions: [
        { type: "mcq", topic: "fraza_c6", subtopic: "subord_atributive_c6", question: "În 'Fetița care citește este silențioasă', subordonnata atributivă este:", options: ["care citește", "citește", "fetița", "silențioasă"], correct: 0 },
      ]},
    ],
  },
  {
    id: "vocabular_c6",
    name: "Vocabular avansat și semantică",
    icon: "📚",
    color: "#10B981",
    subtopics: [
      { id: "polisemie_c6", name: "Polisemie și omonimie", questions: [
        { type: "mcq", topic: "vocabular_c6", subtopic: "polisemie_c6", question: "Cuvântul 'masă' poate însemna:", options: ["mobilă și planetă (mit.)", "culoare", "joc", "floare"], correct: 0 },
      ]},
      { id: "derivare_c6", name: "Derivare avansată (prefixe, sufixe)", questions: [
        { type: "mcq", topic: "vocabular_c6", subtopic: "derivare_c6", question: "Din radicalul 'scri' se pot forma cuvinte cum ar fi:", options: ["scrisoare, scriitor, manuscris", "skriu, skream", "scriu, creiu", "scriem, scrieti"], correct: 0 },
      ]},
      { id: "locutiuni_c6", name: "Locuții și expresii idiomatice", questions: [
        { type: "mcq", topic: "vocabular_c6", subtopic: "locutiuni_c6", question: "Locuția 'a-și pune capul la cale' înseamnă:", options: ["a pune în practică un plan", "a-și pierde gândurile", "a se gândi mult", "a pleca din țară"], correct: 0 },
      ]},
      { id: "neologisme_c6", name: "Neologisme (selfie, online, email)", questions: [
        { type: "mcq", topic: "vocabular_c6", subtopic: "neologisme_c6", question: "Neologismul 'selfie' provine din limba:", options: ["engleză", "franceză", "germană", "italiană"], correct: 0 },
      ]},
      { id: "campuri_semantice_c6", name: "Câmpuri semantice", questions: [
        { type: "mcq", topic: "vocabular_c6", subtopic: "campuri_semantice_c6", question: "Care cuvânt aparține câmpului semantic 'familie'?", options: ["bunic", "casă", "copac", "cărți"], correct: 0 },
      ]},
    ],
  },
  {
    id: "text_lectura_c6",
    name: "Lectură și analiză de texte",
    icon: "📕",
    color: "#FF8C00",
    subtopics: [
      { id: "genuri_c6", name: "Genuri și specii literare (nuvela, roman, pozie, dramă)", questions: [
        { type: "mcq", topic: "text_lectura_c6", subtopic: "genuri_c6", question: "Nuvela se caracterizează prin:", options: ["scurtă, o singură problemă", "lungă, mai multe probleme", "versuri și rime", "dialogue și scenă"], correct: 0 },
      ]},
      { id: "moduri_expunere_c6", name: "Moduri de expunere (narațiune, descriere, dialog)", questions: [
        { type: "mcq", topic: "text_lectura_c6", subtopic: "moduri_expunere_c6", question: "Narațiunea prezintă:", options: ["o serie de întâmplări într-o ordine", "caracteristici ale obiectelor", "o conversație", "versuri și rime"], correct: 0 },
      ]},
      { id: "personaje_c6", name: "Analiză și caracterizare personaje", questions: [
        { type: "mcq", topic: "text_lectura_c6", subtopic: "personaje_c6", question: "Un personaj protagonist este:", options: ["central și dezvoltat în text", "minor și secundar", "negativ și ostil", "neutru și silențios"], correct: 0 },
      ]},
      { id: "texte_nonliterare_c6", name: "Texte nonliterare (articol, publicitate, instructaj)", questions: [
        { type: "mcq", topic: "text_lectura_c6", subtopic: "texte_nonliterare_c6", question: "Un articol de ziar se caracterizează prin:", options: ["informație actuală și structură clară", "versuri regulate", "personaje imaginare", "limbaj fantastic"], correct: 0 },
      ]},
    ],
  },
];

// ─── MAIN EXPORT ──────────────────────────────────────────────────────────────

export const ROMANIAN_CURRICULUM: Record<number, RomanianTheme[]> = {
  1: C1,
  2: C2,
  3: C3,
  4: C4,
  6: C6,
};

// ─── MERGE C6 GENERATORS FROM 4 PHASES ─────────────────────────────────────
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const C6_Generators: Record<string, Record<string, (seed?: number) => CurriculumQuestion[]>> = ({
  substantiv_c6: {
    declinare_c6: C6P1_Generators.subst_declinare,
    functii_sintactice_c6: C6P1_Generators.subst_functii_sintactice,
    defective_c6: C6P1_Generators.subst_defective,
  },
  pronume_c6: {
    personale_c6: C6P1_Generators.pronume_personale,
    demonstrative_c6: C6P1_Generators.pronume_demonstrative,
    posesive_c6: C6P1_Generators.pronume_posesive,
    reflexive_c6: C6P1_Generators.pronume_reflexive,
    interogative_c6: C6P1_Generators.pronume_interogative,
    nehotarate_c6: C6P1_Generators.pronume_nehotarate,
    relative_c6: C6P1_Generators.pronume_relative,
  },
  verb_c6: {
    moduri_nepersonale_c6: C6P2_Generators.verb_moduri_nepersonale,
    timpuri_literare_c6: C6P2_Generators.verb_timpuri_literare,
    diateze_c6: C6P2_Generators.verb_diateze,
    neregulata_c6: C6P2_Generators.verb_conjugare_neregulata,
    acord_c6: C6P2_Generators.verb_acord,
  },
  adverb_prepozitie_c6: {
    adverb_tipuri_c6: C6P2_Generators.adverb_tipuri,
    prepozitie_cazuri_c6: C6P2_Generators.prepozitie_cazuri,
    conjunctie_c6: C6P2_Generators.conjunctie,
    interjectie_c6: C6P2_Generators.interjectie,
  },
  sintaxa_c6: {
    subiect_c6: C6P3_Generators.sintaxa_subiect,
    predicat_verbal_c6: C6P3_Generators.sintaxa_predicat_verbal,
    predicat_nominal_c6: C6P3_Generators.sintaxa_predicat_nominal,
    complement_direct_c6: C6P3_Generators.sintaxa_complement_direct,
    complement_indirect_c6: C6P3_Generators.sintaxa_complement_indirect,
    complement_circumstantial_c6: C6P3_Generators.sintaxa_complement_circumstantial,
    atribut_c6: C6P3_Generators.sintaxa_atribut,
  },
  fraza_c6: {
    subord_completive_c6: C6P3_Generators.fraza_subord_completive,
    subord_circumstantiale_c6: C6P3_Generators.fraza_subord_circumstantiale,
    subord_atributive_c6: C6P3_Generators.fraza_subord_atributive,
  },
  vocabular_c6: {
    polisemie_c6: C6P4_Generators.vocabular_polisemie,
    derivare_c6: C6P4_Generators.vocabular_derivare,
    locutiuni_c6: C6P4_Generators.vocabular_locutiuni,
    neologisme_c6: C6P4_Generators.vocabular_neologisme,
    campuri_semantice_c6: C6P4_Generators.vocabular_campuri_semantice,
  },
  text_lectura_c6: {
    genuri_c6: C6P4_Generators.text_lectura_genuri,
    moduri_expunere_c6: C6P4_Generators.text_lectura_moduri,
    personaje_c6: C6P4_Generators.text_lectura_personaje,
    texte_nonliterare_c6: C6P4_Generators.text_lectura_nonliterare,
  },
// eslint-disable-next-line @typescript-eslint/no-explicit-any
} as any);

/** Generator mapping by grade */
const C4_Generators: Record<string, Record<string, (seed?: number) => CurriculumQuestion[]>> = {
  ...C4_Morfo_Generators,
  ...C4_Sint_Generators,
  ...C4_Ort_Generators,
  ...C4_Voc_Generators,
  ...C4_Text_Generators,
  ...C4_Lec_Generators,
};

const GENERATOR_MAP: Record<number, Record<string, Record<string, (seed?: number) => CurriculumQuestion[]>>> = {
  1: C1_Generators,
  2: C2_Generators,
  3: C3_Generators,
  4: C4_Generators,
  6: C6_Generators,
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

export function calculateRomanianGrade(pct: number, _countryCode = "RO"): TestGradeMark {
  if (pct >= 90) return { note: "FB", label: "Foarte Bine",    color: "#FFD700", emoji: "🌟" };
  if (pct >= 70) return { note: "B",  label: "Bine",           color: "#00FF88", emoji: "😊" };
  if (pct >= 50) return { note: "S",  label: "Suficient",      color: "#FF6B00", emoji: "🙂" };
  return              { note: "I",  label: "Insuficient",     color: "#FF4444", emoji: "😟" };
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
  // ─── Clasa II ───
  // Părți de vorbire
  "substantiv_c2":          "Substantivul denumește ființe, lucruri, fenomene: om, carte, ploaie. Se scrie cu literă MARE dacă e nume propriu (Ana, București).",
  "verb_c2":                "Verbul arată ce FACE cineva: aleargă, citește, doarme, scrie. Întrebarea: 'Ce face?' → verbuL!",
  "adjectiv_c2":            "Adjectivul arată CUM ESTE un lucru: frumos, mare, roșu, deștept. Întrebarea: 'Cum este?' → adjectivuL!",
  // Ortografie
  "a_i_reguli_c2":          "Regula â/î: La ÎNCEPUT și SFÂRȘIT de cuvânt scriem 'î' (început, coborî). În INTERIORUL cuvântului scriem 'â' (câine, pâine). Excepție: 'România' și derivatele.",
  "sa_s_a_c2":              "Test: înlocuiește cu 'a sa' sau 'ea s-a'. Dacă merge 'a sa' → scrie 'sa'. Dacă merge 's-a' (se + a) → scrie 's-a'.",
  "ia_i_a_c2":              "Test: 'ia' = verb (el ia) sau pronume. 'i-a' = 'îi' + 'a' (lui i-a dat). Dacă poți spune 'îi' înainte → 'i-a'.",
  "sau_s_au_c2":            "Test: 'sau' = conjuncție (SAU asta, SAU aia). 's-au' = 'se' + 'au' (ei s-au jucat). Dacă poți spune 'se au' → 's-au'.",
  // Propoziția
  "subiect_predicat_c2":    "Subiectul = CINE face acțiunea (cine? ce?). Predicatul = CE FACE subiectul (ce face? ce este?). Ex: 'Maria citește' → S=Maria, P=citește.",
  "tipuri_prop_c2":         "Enunțiativă (.) = spune ceva. Interogativă (?) = întreabă. Exclamativă (!) = exprimă emoție. Imperativă (!) = dă un ordin.",
  "punctuatie_c2":          "Punct (.) = sfârșitul propoziției. Virgulă (,) = pauză scurtă/enumerare. Punct și virgulă (;) = pauză medie. Semnul (?) = întrebare. Semnul (!) = exclamație/ordin.",
  // Textul
  "narativ_c2":             "Textul narativ povestește ceva. Are 3 părți: Introducere (cine, unde, când), Cuprins (ce se întâmplă), Încheiere (cum se termină).",
  "personaje_actiuni_c2":   "Personajele sunt CINE apare în text. Fiecare personaj face ACȚIUNI (verbe). Caută: cine vorbește, cine face ceva, cu cine interacționează.",
  "dialog_c2":              "Dialogul se marchează cu linia de dialog (–). Fiecare replică pe rând nou. Se poate adăuga cine vorbește: – Bună! spuse Ana.",
  // Vocabular
  "omonime_c2":             "Omonimele sunt cuvinte care se SCRIU la fel dar au SENSURI diferite: broască (animal) / broască (lacăt), pas (mișcare) / pas (pasăre=struț).",
  "cuvinte_compuse_c2":     "Cuvintele compuse sunt formate din 2+ cuvinte: untdelemn (unt+de+lemn), binecuvântare (bine+cuvântare), floarea-soarelui.",
  "expresii_c2":            "Expresiile/zicătorile au un sens figurat, nu literal: 'a da din casă' = a spune secrete, 'a bate câmpii' = a vorbi fără sens.",
  // Comunicare
  "dialog_oral_c2":         "Formulele de politețe: Bună ziua! (salut), Vă rog (cerere), Mulțumesc (recunoștință), Scuzați-mă (scuze), La revedere! (despărțire).",
  "bilet_felicitare_c2":    "Biletul conține: destinatar (Dragă Ana,), mesaj scurt, semnătura (Al tău, Ion). Felicitarea: urare + motiv (La mulți ani! Cu ocazia...).",
  // Lectură
  "intelegere_c2":          "Citește textul cu atenție! Răspunsul se găsește ÎNTOTDEAUNA în text. Subliniază cuvintele cheie din întrebare și caută-le în text.",
  "succesiune_c2":          "Succesiunea = ordinea în care se întâmplă lucrurile. Caută cuvintele de timp: mai întâi, apoi, după aceea, în final, la sfârșit.",
  "morala_c2":              "Morala/învățătura = ce lecție ne învață povestea. Gândește-te: ce ar fi trebuit să facă personajul diferit? Ce ne sfătuiește autorul?",
  // ─── Clasa III ───
  "gen_subst_c3":           "Genul substantivului: MASCULIN (un câine, doi câini), FEMININ (o casă, două case), NEUTRU (un scaun, două scaune). Regula: singularul cu 'un/o', pluralul cu 'doi/două'.",
  "numar_subst_c3":         "Singular = un singur lucru. Plural = mai multe. Atenție la neregulate: om→oameni, copil→copii, carte→cărți, casă→case, munte→munți.",
  "caz_subst_c3":           "Nominativ (cine? ce?) — Genitiv (al cui?) — Dativ (cui?) — Acuzativ (pe cine? ce?). Exemplu: 'Ana (N) dă Mariei (D) cartea (Ac) Elenei (G).'",
  "conjugare_c3":           "Conjugare prezent: eu merg, tu mergi, el/ea merge, noi mergem, voi mergeți, ei/ele merg. Rădăcina rămâne aceeași, sufixul se schimbă!",
  "timp_verb_c3":           "Prezent = acum (merge), Trecut = s-a întâmplat (a mers/mergea), Viitor = se va întâmpla (va merge). Test: 'ieri/azi/mâine + verb'.",
  "persoana_nr_c3":         "Persoana I: eu/noi. Persoana a II-a: tu/voi. Persoana a III-a: el/ea/ei/ele. Singular = un subiect, Plural = mai mulți subiecți.",
  "acord_adj_c3":           "Adjectivul se acordă cu substantivul în GEN și NUMĂR: copil frumos, fată frumoasă, copii frumoși, fete frumoase. Întreabă: 'Cum este cine/ce?'",
  "adj_propozitie_c3":      "Adjectivul este cuvântul care arată CUM ESTE substantivul. Se găsește lângă substantiv și răspunde la 'Cum este? Care?'",
  "sinonime_c3":            "Sinonimele = cuvinte cu același înțeles: vesel=bucuros=fericit, repede=iute=rapid, a merge=a umbla=a se deplasa.",
  "antonime_c3":            "Antonimele = cuvinte cu înțeles opus: vesel↔trist, înalt↔scund, cald↔rece, a urca↔a coborî, bogat↔sărac.",
  "familia_cuvintelor_c3":  "Familia de cuvinte = toate cuvintele cu aceeași rădăcină: floare→florar, floricică, florărie, înflorit, floral. Rădăcina = partea comună!",
  "cratima_c3":             "Cratima leagă cuvinte scurte: n-am (nu+am), m-am (mă+am), l-am (îl+am), nu-i (nu+îi), mi-a (mie+a). Se scrie FĂRĂ spații!",
  "propozitie_dezv_c3":     "Propoziție simplă = subiect + predicat (Ana citește). Propoziție dezvoltată = subiect + predicat + atribute/complemente (Ana cea harnică citește cu plăcere).",
  "figuri_stil_c3":         "Comparație: 'ca' / 'precum' (fata frumoasă ca o floare). Personificare: obiectul primește însușiri omenești (vântul suspina). Enumerație: lista de elemente.",
  "intelegere_c3":          "Citește textul integral, apoi întrebarea. Caută cuvintele cheie din întrebare în text. Răspunsul trebuie să fie susținut de text!",
  "idee_principala_c3":     "Ideea principală = 'Despre CE/CINE este textul?'. Rezumatul = povestești pe scurt, cu propriile cuvinte, respectând ordinea evenimentelor.",
  // ─── Clasa VI ───
  "declinare_c6":           "Declinarea = schimbarea formei substantivului după caz (N/G/D/Ac/V). Exemplu: carte→cărți (N), cărții (G), cărții (D), cartea (Ac), carte! (V).",
  "functii_sintactice_c6":  "Funcții: Subiect (CINE face), Predicat (CE FACE), Complement direct (PE CINE/CE), Complement indirect (CUI/CU CINE), Atribut (CARE?), Circumstanțial (UNDE/CÂND/CUM).",
  "defective_c6":           "Substantive defective = care nu au TOATE formele. 'datorie' n-are plural. 'cunoștințe' nu are singular. Memorează ca excepții!",
  "personale_c6":           "Pronume personale: eu/noi (I), tu/voi (II), el/ea/ei/ele (III). Forme: Nominativ (eu, tu, el), Acuzativ (mă, te, îl), Dativ (mie, ție, lui).",
  "demonstrative_c6":       "Demonstrative apropiate: acesta, aceasta, aceștia, acestea (AICI). Depărtate: acela, aceea, aceia, alea (ACOLO). Neutru: asta, aia.",
  "posesive_c6":            "Posesive: al meu/a mea (I sg), al tău/a ta (II sg), al lui/al ei/al lui (III sg), al nostru/a noastră (I pl), al vostru/a voastră (II pl), al lor/a lor (III pl).",
  "reflexive_c6":           "Reflexive: mă, te, se (singular), ne, vă, se (plural). Se folosesc cu verbe reflexive: mă spăl, te gândești, se vaită, ne-ntoarcem, vă pregătiți, se joacă.",
  "interogative_c6":        "Interogative: cine (persoane), ce (lucruri), care (alăturare), cui (dativ), pe cine (acuzativ). Ex: Cine vine? Ce ai? Care-i asta? Cui îi dai?",
  "nehotarate_c6":          "Nehotărâte: cineva (oricine nedefinit), ceva (orice nedefinit), fiecare (universal), oricine (universal), orice (universal). Ex: Cineva a sunat.",
  "relative_c6":            "Relative: care (universal), cine (pentru persoane), ce (rar). Introduc propoziții subordonate. Ex: Fetița care citește / Băiatul cine vorbește.",
  "moduri_nepersonale_c6":  "Nepersonale: Infinitiv (a merge), Gerunziu (mergând), Participiu (mers). NU au marcă de persoană/număr. Folosire: 'Mersul este plăcut.' 'Mergând prin parc...'",
  "timpuri_literare_c6":    "Timpuri literare: Trecut simplu (cântă = acum demult), Perfect simplu (cântase = anterior trecut), Plus-perfect (a cântat = anterior recent). Frecvente în literatura clasică.",
  "diateze_c6":             "Diateză = activă (SUBIECT face) vs pasivă (SUBIECT suferă acțiunea). Ex: Copil citește cartea (activ) vs Cartea este citită (pasiv).",
  "neregulata_c6":          "Verbe neregulate = nu urmează modelul (cânta→cântă, mânca→mănânc, bea→beau, lua→iau). A fi/a avea sunt parțial neregulate. Memorează!",
  "acord_c6":               "Subiect plural = verb plural: 'Copiii joacă' (NU joacă). Subiect singular = verb singular: 'Copilul joacă'. Acordul se face ÎNTOTDEAUNA!",
  "adverb_tipuri_c6":       "Tipuri: MOD (frumos, repede, ușor), TIMP (azi, mâine, ieri), LOC (sus, jos, acolo), CANTITATE (mult, puțin, destul), FRECVENȚĂ (adesea, rar, niciodată).",
  "prepozitie_cazuri_c6":   "Prepoziții: la (Dat/Ac), din (Gen), cu (Instr), în (Ac), pe (Ac), sub (Ac), lângă (Ac), între (Ac), pentru (Ac), după (Ac), înainte (Ac).",
  "conjunctie_c6":          "Conjuncții COORDONATOARE: și (aditivă), sau (disjunctivă), dar (adversativă). SUBORDONATOARE: că, dacă, deoarece, pentru că, dacă, cât, cand.",
  "interjectie_c6":         "Interjecții: aia! (bucurie), ah! (surpriză), hai! (îndemnare), bah! (dispret), vai! (durere), bravo! (apreciere), uf! (oboseală), psst! (atragere atenție).",
  "subiect_c6":             "Subiectul răspunde la CINE/CE FACE ACȚIUNEA. Poate fi: substantiv (Maria), pronume (el), infinitiv (A citi e plăcut), frază (Că va veni mâine nu-i sigur).",
  "predicat_verbal_c6":     "Predicat verbal = VERBI care arată ce FACE subiectul. Poate fi: simplu (merge), compus (a mers), complex (va merge, s-a jucat). Răspunde la CE FACE?",
  "predicat_nominal_c6":    "Predicat nominal = COPULĂ + ATRIBUT. Copule: a fi (sunt, ești, este), a rămâne (rămân), a deveni (devin), a părea (par). Ex: Copilul este fericit.",
  "complement_direct_c6":   "Complement direct (Acuzativ) = PE CINE/CE? Răspunde: pe Ana (persoană marcată cu 'pe'), cartea, o ție. DIRECT cu verbul, FĂRĂ prepoziție.",
  "complement_indirect_c6": "Complement indirect = CUI/CU CINE/DE CINE? Răspunde: Mariei (dativ), cu prietenul (prepoziție), din casă (prepoziție). NU direct cu verbul.",
  "complement_circumstantial_c6": "Circumstanțiale = UNDE (loc), CÂND (timp), CUM (mod), DE CE (cauză), PENTRU CE (scop), CÂT (măsură). Ex: Merg la grădină (loc) mâine (timp) cu plăcere (mod).",
  "atribut_c6":             "Atributul CARACTERIZEAZĂ substantivul. Răspunde la CARE? Ce adjectiv/pronume/grup prepoziție se atașează. Ex: fata frumoasă, cartea lui Ion, băiatul care citește.",
  "subord_completive_c6":   "Completive = răspund la ÎNTREBĂRI INDIRECTE. Introduse cu: că (Spun că va veni), dacă (Mă întreb dacă vine), cine (Știu cine a făcut), ce (Nustiu ce vrei).",
  "subord_circumstantiale_c6": "Circumstanțiale = UNDE (locul unde), CÂND (timp când), DACĂ (condiție), DEOARECE (cauza), PENTRU CA (scop), CAND (timp), DEȘI (concesie).",
  "subord_atributive_c6":   "Atributive = modifcă un substantiv din principală. Introduse cu CARE (relativ): Fetița care citește / Copilul, care era obosit, a adormit. CARE înlocuiește substantivul.",
  "polisemie_c6":           "Polisemie = un cuvânt cu MAI MULTE SENSURI ÎNRUDITE. Ex: masă (mobilă, planetă), carte (obiect, joc), munte (relief, grămadă). Sensuri DIFERITE dar ASEMĂNĂTOARE.",
  "derivare_c6":           "Derivare = formare de cuvinte noi prin PREFIXE/SUFIXE. Radical: scri → prefix+radical: prescri, suffix+radical: scriitor, prefix+radical+suffix: rescriitor.",
  "locutiuni_c6":           "Locuții = grupuri de cuvinte cu sens FIGURAT, NU LITERAL. Ex: a-și pune capul la cale (a plănui), a cere luna din cer (a cere imposibil), a avea inimă de aur (a fi bun).",
  "neologisme_c6":          "Neologisme = cuvinte NORI în limbă. Provin din engleză (selfie, online, email) sau alte surse. Au introdus NOȚIUNI noi în vocabular.",
  "campuri_semantice_c6":   "Câmpuri = cuvinte cu sens APROPIAT din aceeași ZONĂ SEMANTICĂ. Familie: tată, mamă, frate. Culori: roșu, albastru, verde. Emoții: bucurie, tristețe, frică.",
  "genuri_c6":              "Genuri literare: Nuvela (scurtă, o problemă), Roman (lung, complexă), Poezie (versuri, ritm), Dramă (scenă, dialoguri), Basm (fantastic, moralitate), Fabulă (animale, lecție morală).",
  "moduri_expunere_c6":     "Moduri: NARAȚIUNE (povestire de acțiuni), DESCRIERE (caracterizare, în stare), DIALOG (conversație), MONOLOG (vorbire unui singur om). Textele le combină!",
  "personaje_c6":           "Analiză personaj: CINE e (nume, vârstă), CUM e (trăsături, emoții), CE FACE (acțiuni, evoluție), DE CE (motivații). Protagonist (principal) / Antagonist (negativ) / Secundar.",
  "texte_nonliterare_c6":   "Nonliterare: Articol ziar (informație, neutru), Publicitate (promovare, persuasivă), Instructaj (pași, clar), Carte tehnică (date, formală), Reclama (soluție, persuasivă).",
};
