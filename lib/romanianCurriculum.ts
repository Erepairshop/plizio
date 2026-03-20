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
import { C5_Subst_Generators } from "./romanianGeneratorsC5subst";
import { C5_Verb_Generators } from "./romanianGeneratorsC5verb";
import { C5_Sint_Generators } from "./romanianGeneratorsC5sint";
import { C5_Voc_Generators } from "./romanianGeneratorsC5voc";
import { C5_Ort_Generators } from "./romanianGeneratorsC5ort";
import { C5_Text_Generators } from "./romanianGeneratorsC5text";
import { C5_Lec_Generators } from "./romanianGeneratorsC5lec";

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
      { id: "pronume_pers_c2", name: "Pronumele personal", questions: [] },
      { id: "conjunctii_c2", name: "Conjuncțiile", questions: [
        { type: "mcq", topic: "parti_vorbire_c2", subtopic: "conjunctii_c2", question: "Care cuvânt este o CONJUNCȚIE (leagă propoziții)?", options: ["și", "casă", "aleargă", "frumos"], correct: 0 },
        { type: "mcq", topic: "parti_vorbire_c2", subtopic: "conjunctii_c2", question: "Completează: 'Vreau să merg la școală ___ plouă.'", options: ["dar", "sau", "și", "că"], correct: 0 },
        { type: "mcq", topic: "parti_vorbire_c2", subtopic: "conjunctii_c2", question: "Care conjuncție arată o OPOZIȚIE (contrast)?", options: ["dar", "și", "sau", "că"], correct: 0 },
        { type: "mcq", topic: "parti_vorbire_c2", subtopic: "conjunctii_c2", question: "Completează: 'Vrei ceai ___ suc?'", options: ["sau", "și", "dar", "că"], correct: 0 },
        { type: "mcq", topic: "parti_vorbire_c2", subtopic: "conjunctii_c2", question: "Care conjuncție arată o CAUZĂ (motivul)?", options: ["pentru că", "și", "dar", "sau"], correct: 0 },
        { type: "mcq", topic: "parti_vorbire_c2", subtopic: "conjunctii_c2", question: "Completează: 'Ana cântă ___ Mihai dansează.'", options: ["și", "dar", "sau", "că"], correct: 0 },
        { type: "mcq", topic: "parti_vorbire_c2", subtopic: "conjunctii_c2", question: "Ce este 'și' în propoziție?", options: ["conjuncție", "substantiv", "verb", "adjectiv"], correct: 0 },
        { type: "mcq", topic: "parti_vorbire_c2", subtopic: "conjunctii_c2", question: "Câte cuvinte leagă o conjuncție?", options: ["Cel puțin două", "Exact unul", "Trei sau mai multe", "Niciun cuvânt"], correct: 0 },
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
    id: "vocabular_tematic_c2",
    name: "Vocabular Tematic",
    icon: "🌍",
    color: "#10B981",
    subtopics: [
      { id: "sinonime_c2", name: "Sinonime", questions: [] },
      { id: "antonime_c2", name: "Antonime", questions: [] },
      { id: "familia_cuvintelor_c2", name: "Familia cuvintelor", questions: [] },
      { id: "animale_c2", name: "Animale — caracteristici", questions: [] },
      { id: "corpul_uman_c2", name: "Corpul uman", questions: [] },
      { id: "familia_c2", name: "Familia", questions: [] },
      { id: "alimente_c2", name: "Alimente și nutriție", questions: [] },
      { id: "anotimpuri_c2", name: "Anotimpurile", questions: [] },
      { id: "meserii_c2", name: "Meserii", questions: [] },
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
      { id: "verbe_reflexive_c3", name: "Verbe reflexive (a se spăla, a se îmbrăca)", questions: [] },
      { id: "modul_imperativ_c3", name: "Modul imperativ", questions: [] },
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
      { id: "grade_adj_c3", name: "Gradele de comparație", questions: [] },
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
      { id: "despartire_silabe_c3", name: "Despărțirea în silabe", questions: [] },
      { id: "virgula_c3", name: "Virgula în propoziție", questions: [] },
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
      { id: "subiect_predicat_c3", name: "Subiectul și predicatul", questions: [] },
      { id: "atributul_c3", name: "Atributul", questions: [] },
      { id: "vorbire_directa_c3", name: "Vorbirea directă", questions: [] },
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
  {
    id: "vocabular_tematic_c3",
    name: "Vocabular Tematic",
    icon: "🌍",
    color: "#10B981",
    subtopics: [
      { id: "natura_c3", name: "Natura și mediul", questions: [] },
      { id: "activitati_c3", name: "Activități și sport", questions: [] },
      { id: "locuinta_c3", name: "Locuința și mobilierul", questions: [] },
      { id: "imbracaminte_c3", name: "Îmbrăcăminte și accesorii", questions: [] },
      { id: "textul_descriptiv_c3", name: "Textul descriptiv", questions: [] },
    ],
  },
];

// ─── CLASA a IV-a (Grade 4) ──────────────────────────────────────────────────

const C4: RomanianTheme[] = [
  {
    id: "morfologie_c4",
    name: "Morfologie",
    icon: "📚",
    color: "#FF2D78",
    subtopics: [
      { id: "substantiv_c4", name: "Substantivul (gen, număr, caz, articol)", questions: [] },
      { id: "adjectiv_c4", name: "Adjectivul (acord, grade de comparație)", questions: [] },
      { id: "pronume_personal_c4", name: "Pronumele personal", questions: [] },
      { id: "pronume_posesiv_c4", name: "Pronumele posesiv", questions: [] },
      { id: "verb_timpuri_c4", name: "Verbul — timpurile modului indicativ", questions: [] },
    ],
  },
  {
    id: "sintaxa_c4",
    name: "Sintaxă",
    icon: "🔗",
    color: "#00D4FF",
    subtopics: [
      { id: "alte_parti_c4", name: "Adverbul, prepoziția, conjuncția, numeralul", questions: [] },
      { id: "subiect_predicat_c4", name: "Subiectul și predicatul", questions: [] },
      { id: "atribut_c4", name: "Atributul", questions: [] },
      { id: "complement_c4", name: "Complementele (direct, indirect, circumstanțial)", questions: [] },
      { id: "fraza_propozitii_c4", name: "Fraza — propoziții principale și subordonate", questions: [] },
    ],
  },
  {
    id: "ortografie_c4",
    name: "Ortografie",
    icon: "✍️",
    color: "#00FF88",
    subtopics: [
      { id: "majuscule_c4", name: "Majuscule — substantive proprii, titluri", questions: [] },
      { id: "cratima_avansata_c4", name: "Cratima avansată (s-a, l-a, ne-a)", questions: [] },
      { id: "punctuatie_c4", name: "Semnele de punctuație (virgulă, punct și virgulă, ghilimele)", questions: [] },
      { id: "despartire_avansata_c4", name: "Despărțirea avansată în silabe", questions: [] },
      { id: "scrierea_corecta_c4", name: "Scrierea corectă — forme frecvente", questions: [] },
    ],
  },
  {
    id: "vocabular_c4",
    name: "Vocabular",
    icon: "💬",
    color: "#B44DFF",
    subtopics: [
      { id: "sinonime_antonime_c4", name: "Sinonime și antonime avansate", questions: [] },
      { id: "campuri_semantice_c4", name: "Câmpuri semantice", questions: [] },
      { id: "expresii_frazeologice_c4", name: "Expresii și locuțiuni frazeologice", questions: [] },
      { id: "derivare_compunere_c4", name: "Derivare și compunere", questions: [] },
    ],
  },
  {
    id: "text_c4",
    name: "Producere de text",
    icon: "📝",
    color: "#FFD700",
    subtopics: [
      { id: "rezumat_c4", name: "Rezumatul", questions: [] },
      { id: "text_narativ_c4", name: "Textul narativ literar", questions: [] },
      { id: "text_argumentativ_c4", name: "Textul argumentativ", questions: [] },
      { id: "scrisoarea_c4", name: "Scrisoarea", questions: [] },
      { id: "textul_informativ_c4", name: "Textul informativ", questions: [] },
    ],
  },
  {
    id: "lectura_c4",
    name: "Lectură",
    icon: "📖",
    color: "#FF6B00",
    subtopics: [
      { id: "intelegere_text_c4", name: "Înțelegerea textului citit", questions: [] },
      { id: "personaje_c4", name: "Personajele literare", questions: [] },
      { id: "tema_mesaj_c4", name: "Tema și mesajul textului", questions: [] },
      { id: "figuri_stil_c4", name: "Figuri de stil (comparație, metaforă, personificare)", questions: [] },
    ],
  },
];

// ─── CLASA a V-a (Grade 5) ──────────────────────────────────────────────────

const C5: RomanianTheme[] = [
  {
    id: "substantiv_c5",
    name: "Substantivul",
    icon: "📚",
    color: "#FF2D78",
    subtopics: [
      { id: "declinarea_c5", name: "Declinarea substantivelor (cu articol hotărât)", questions: [] },
      { id: "substantive_colective_c5", name: "Substantive colective", questions: [] },
      { id: "genul_substantivelor_c5", name: "Genul substantivelor (epicene, ambigene)", questions: [] },
    ],
  },
  {
    id: "pronume_c5",
    name: "Pronumele",
    icon: "🔤",
    color: "#00D4FF",
    subtopics: [
      { id: "pronume_interogativ_c5", name: "Pronumele interogativ", questions: [] },
      { id: "pronume_nehotarat_c5", name: "Pronumele nehotărât", questions: [] },
      { id: "pronume_relativ_c5", name: "Pronumele relativ", questions: [] },
    ],
  },
  {
    id: "verb_c5",
    name: "Verbul",
    icon: "⚡",
    color: "#00FF88",
    subtopics: [
      { id: "moduri_nepersonale_c5", name: "Moduri nepersonale (infinitiv, gerunziu, participiu, supin)", questions: [] },
      { id: "perfectul_simplu_c5", name: "Perfectul simplu", questions: [] },
      { id: "mai_mult_ca_perfect_c5", name: "Mai-mult-ca-perfectul", questions: [] },
      { id: "acordul_predicat_c5", name: "Acordul predicatului cu subiectul", questions: [] },
      { id: "complement_circumstantial_c5", name: "Complementul circumstanțial (loc, timp, mod, cauză, scop)", questions: [] },
    ],
  },
  {
    id: "sintaxa_c5",
    name: "Sintaxă",
    icon: "🔗",
    color: "#B44DFF",
    subtopics: [
      { id: "apostrof_atribut_c5", name: "Atributul (substantival, pronominal, apoziție)", questions: [] },
      { id: "prop_subiectiva_c5", name: "Propoziția subordonată subiectivă", questions: [] },
      { id: "coordonare_c5", name: "Coordonarea (copulativă, adversativă, disjunctivă, conclusivă)", questions: [] },
      { id: "prop_circumstantiala_c5", name: "Propoziția circumstanțială (timp, loc, mod)", questions: [] },
    ],
  },
  {
    id: "vocabular_c5",
    name: "Vocabular",
    icon: "💬",
    color: "#FFD700",
    subtopics: [
      { id: "polisemia_c5", name: "Polisemia (cuvânt — mai multe sensuri)", questions: [] },
      { id: "omonimia_c5", name: "Omonimia", questions: [] },
      { id: "paronimia_c5", name: "Paronimia", questions: [] },
      { id: "locutiuni_c5", name: "Locuțiuni (verbale, adverbiale, substantivale)", questions: [] },
      { id: "argou_regional_c5", name: "Argou, regionalisme, neologisme", questions: [] },
    ],
  },
  {
    id: "ortografie_c5",
    name: "Ortografie",
    icon: "✍️",
    color: "#FF6B00",
    subtopics: [
      { id: "a_i_c5", name: "Scrierea lui â și î", questions: [] },
      { id: "semne_diacritice_c5", name: "Semnele diacritice (ă, â, î, ș, ț)", questions: [] },
      { id: "scrierea_compuselor_c5", name: "Scrierea cuvintelor compuse", questions: [] },
      { id: "cratima_forme_c5", name: "Cratima între forme verbale (s-a, l-a, ne-a)", questions: [] },
    ],
  },
  {
    id: "text_c5",
    name: "Producere de text",
    icon: "📝",
    color: "#10B981",
    subtopics: [
      { id: "genuri_literare_c5", name: "Genurile literare (epic, liric, dramatic)", questions: [] },
      { id: "specii_literare_c5", name: "Speciile literare (basm, nuvelă, fabulă, odă, comedie)", questions: [] },
      { id: "moduri_expunere_c5", name: "Modurile de expunere (narațiune, descriere, dialog)", questions: [] },
      { id: "personaje_caracterizare_c5", name: "Caracterizarea personajelor (directă și indirectă)", questions: [] },
      { id: "texte_nonliterare_c5", name: "Textele nonliterare (articol, știre, reclamă, instrucțiuni)", questions: [] },
    ],
  },
  {
    id: "lectura_c5",
    name: "Lectură",
    icon: "📖",
    color: "#E879F9",
    subtopics: [
      { id: "intentie_autor_c5", name: "Intenția autorului și perspectiva narativă", questions: [] },
      { id: "argumente_c5", name: "Argumentul și contraargumentul", questions: [] },
      { id: "inferente_c5", name: "Inferențe — informații implicite", questions: [] },
      { id: "timp_spatiu_c5", name: "Coordonatele spațiale și temporale ale textului", questions: [] },
    ],
  },
];

// ─── MAIN EXPORT ──────────────────────────────────────────────────────────────

export const ROMANIAN_CURRICULUM: Record<number, RomanianTheme[]> = {
  1: C1,
  2: C2,
  3: C3,
  4: C4,
  5: C5,
};

/** Generator mapping by grade */
const GENERATOR_MAP: Record<number, Record<string, Record<string, (seed?: number) => CurriculumQuestion[]>>> = {
  1: C1_Generators,
  2: C2_Generators,
  3: C3_Generators,
  4: { ...C4_Morfo_Generators, ...C4_Sint_Generators, ...C4_Ort_Generators, ...C4_Voc_Generators, ...C4_Text_Generators, ...C4_Lec_Generators },
  5: { ...C5_Subst_Generators, ...C5_Verb_Generators, ...C5_Sint_Generators, ...C5_Voc_Generators, ...C5_Ort_Generators, ...C5_Text_Generators, ...C5_Lec_Generators },
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
  // ─── Clasa III — extensii ───
  "grade_adj_c3":           "Grade de comparație: POZITIV (bun), COMPARATIV (mai bun), SUPERLATIV (cel mai bun). Comparativul = 'mai' + adjectiv. Superlativul = 'cel/cea/cei/cele mai' + adjectiv.",
  "verbe_reflexive_c3":     "Verbele reflexive exprimă o acțiune îndreptată asupra subiectului: mă spăl, te speli, se spală, ne spălăm, vă spălați, se spală. Pronumele reflexive: mă, te, se, ne, vă, se.",
  "modul_imperativ_c3":     "Imperativul exprimă o poruncă, un îndemn sau o rugăminte. Se folosește la persoana a II-a: vino! (sg) / veniți! (pl). Se pune semnul exclamării (!) la final.",
  "subiect_predicat_c3":    "Subiectul = CINE face acțiunea (întrebarea: cine? ce?). Predicatul = CE FACE subiectul (întrebarea: ce face? ce este?). Exemplu: 'Florile (S) înfloresc (P) primăvara.'",
  "atributul_c3":           "Atributul determină un SUBSTANTIV, arătând cum este, care sau al cui. Răspunde la: Care? Ce fel de? Al cui? Exemplu: 'Câinele NEGRu (atribut) latră.' — negru determină substantivul câine.",
  "vorbire_directa_c3":     "Vorbirea directă reproduce exact cuvintele unui personaj. Se marchează cu: ghilimele (\") sau linia de dialog (–). Exemplu: – Bună ziua! a spus Ana. / \"Bună ziua!\" a spus Ana.",
  "despartire_silabe_c3":   "Reguli de despărțire: 1) O consoană între vocale → merge cu silaba următoare (ca-să). 2) Două consoane → se despart (car-te). 3) Grupurile che/chi/ghe/ghi nu se despart. Câte vocale — atâtea silabe!",
  "virgula_c3":             "Virgula se pune: 1) La ENUMERAȚIE (mere, pere și prune). 2) La ADRESARE DIRECTĂ (Ana, vino!). 3) La APOZIȚIE — explicație intercalată (Ion, elev harnic, a venit.).",
  "natura_c3":              "Forme de relief: munte (înalt, vârf), deal (mai mic ca muntele), câmpie (plată). Ape: râu (curgătoare, are mal), lac (stătătoare). Ecosisteme: pădure (copaci, animale sălbatice).",
  "activitati_c3":          "Fiecare activitate are locul ei: înot → piscină/mare, fotbal → teren de sport, ciclism → parc/drum, lectură → bibliotecă/acasă. Fiecare are echipamentul specific!",
  "locuinta_c3":            "Camerele casei: dormitor (pat, dulap), bucătărie (aragaz, frigider), baie (cadă, lavoar), sufragerie (canapea, televizor), hol (cuier, covoraș). Fiecare cameră are obiectele ei!",
  "imbracaminte_c3":        "Hainele de VARĂ: tricou, rochie, sandale. Hainele de IARNĂ/TOAMNĂ: palton, cizme. Hainele pentru TOT ANUL: pantaloni, bluza. Partea corpului: sus (tricou), jos (pantaloni), picioare (cizme, sandale).",
  "textul_descriptiv_c3":   "Textul descriptiv răspunde la: 'Cum este? Cum arată?' — nu povestește (narativ), nu explică (informativ). Adjectivele sunt cele mai importante! Comparațiile și personificările dau viață descrierii.",
};
