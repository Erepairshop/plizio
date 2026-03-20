// ─── HUNGARIAN TEST — MAGYAR TESZT CURRICULUM (Grade 1–8) ──────────────────
// Structure mirrors englishCurriculum.ts and deutschCurriculum.ts
// Procedural questions generated via hungarianGenerators*.ts
//
// One example question per subtopic — expand manually if needed.
// Procedural questions generated via hungarianGenerators*.ts

import type { CurriculumTheme, CurriculumQuestion } from "./curriculumTypes";
import type { TestGradeMark } from "./languageTestTypes";
import {
  G1_Generators_Hungarian,
} from "./hungarianGenerators";
import {
  G2_Generators_Hungarian,
} from "./hungarianGenerators2";
import {
  G3_Generators_Hungarian,
} from "./hungarianGenerators3";
import {
  G4_Generators_Hungarian,
} from "./hungarianGenerators4";
import {
  G5_Generators_Hungarian,
} from "./hungarianGenerators5";
import {
  G6_Generators_Hungarian,
} from "./hungarianGenerators6";
import {
  G7_Generators_Hungarian,
} from "./hungarianGenerators7";
import {
  G8_Generators_Hungarian,
} from "./hungarianGenerators8";

// ─── TYPE ALIASES (compatible with englishCurriculum.ts structure) ────────────

export type HungarianQuestion = CurriculumQuestion;
export type HungarianTheme = CurriculumTheme;

// ─── GENERATOR MAP (for fast lookup in getHungarianQuestions) ────────────────

const GENERATOR_MAP: Record<
  number,
  Record<string, Record<string, (seed?: number) => CurriculumQuestion[]>>
> = {
  1: { "": G1_Generators_Hungarian as any },
  2: { "": G2_Generators_Hungarian as any },
  3: { "": G3_Generators_Hungarian as any },
  4: { "": G4_Generators_Hungarian as any },
  5: { "": G5_Generators_Hungarian as any },
  6: { "": G6_Generators_Hungarian as any },
  7: { "": G7_Generators_Hungarian as any },
  8: { "": G8_Generators_Hungarian as any },
};

// ─── GRADE 1 (1. OSZTÁLY) — BETŰK, SZAVAK, MONDATOK ──────────────────────

const G1: HungarianTheme[] = [
  {
    id: "betuk_hangok",
    name: "Betűk és hangok",
    icon: "🔤",
    color: "#FF2D78",
    subtopics: [
      {
        id: "maganhangzok",
        name: "Magánhangzók",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "massalhangzok",
        name: "Mássalhangzók",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "abc_sorrend",
        name: "ABC sorrend",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "betuparok",
        name: "Betűpárok",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "rovid_hosszu",
        name: "Rövid és hosszú magánhangzók",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "j_ly",
        name: "j/ly megkülönböztetés",
        questions: [],
        hasGenerator: true,
      },
    ],
  },
  {
    id: "szavak",
    name: "Szavak",
    icon: "📚",
    color: "#00D4FF",
    subtopics: [
      {
        id: "szotagszam",
        name: "Szótagszám",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "elvalasztas",
        name: "Elvétkezés, szótagolás",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "fonevek",
        name: "Főnevek",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "igek",
        name: "Igék",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "melleknevek",
        name: "Melléknevek",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "ellentetek",
        name: "Ellentétes szavak",
        questions: [],
        hasGenerator: true,
      },
    ],
  },
  {
    id: "szokincs",
    name: "Szókincs",
    icon: "🎨",
    color: "#00FF88",
    subtopics: [
      {
        id: "allatok",
        name: "Állatok",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "szinek",
        name: "Színek",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "csalad",
        name: "Család",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "testresz",
        name: "Testrészek",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "elelmiszer",
        name: "Élelmiszerek",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "napszakok",
        name: "Napszakok",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "ruhazat",
        name: "Ruházat",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "idojaras",
        name: "Időjárás",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "kozlekedes",
        name: "Közlekedés",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "heteknapjai",
        name: "Hét napjai",
        questions: [],
        hasGenerator: true,
      },
    ],
  },
  {
    id: "mondatok",
    name: "Mondatok",
    icon: "✍️",
    color: "#B44DFF",
    subtopics: [
      {
        id: "mondatfajtak",
        name: "Mondattípusok",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "irasjelek",
        name: "Írásjelek",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "nagybetu",
        name: "Nagybetű használat",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "kerdes_felelet",
        name: "Kérdés-felelet",
        questions: [],
        hasGenerator: true,
      },
    ],
  },
  {
    id: "hangtan",
    name: "Hangtan",
    icon: "🔊",
    color: "#FFD700",
    subtopics: [
      {
        id: "betufelismeres",
        name: "Betűfelismerés",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "kettozodes",
        name: "Kétközés (mássalhangzók)",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "kicsinyitokepozo",
        name: "Kicsinyítő képző",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "hangutanzo",
        name: "Hangutánzó szavak",
        questions: [],
        hasGenerator: true,
      },
    ],
  },
];

// ─── GRADE 2 (2. OSZTÁLY) — SZÓFAJOK, HELYESÍRÁS, RAGOZÁS ───────────────

const G2: HungarianTheme[] = [
  {
    id: "szofajok",
    name: "Szófajok",
    icon: "🏷️",
    color: "#FF2D78",
    subtopics: [
      {
        id: "fonev",
        name: "Főnevek",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "ige",
        name: "Igék",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "melleknev",
        name: "Melléknevek",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "nevelő",
        name: "Nevelők (a, az)",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "nevuto",
        name: "Névutók",
        questions: [],
        hasGenerator: true,
      },
    ],
  },
  {
    id: "helyesiras",
    name: "Helyesírás",
    icon: "✏️",
    color: "#00D4FF",
    subtopics: [
      {
        id: "ly_j",
        name: "ly/j megkülönböztetés",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "rovid_hosszu",
        name: "Rövid és hosszú magánhangzók",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "maganhangzo_harmonia",
        name: "Magánhangzó-harmónia",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "hosszu_massalhangzo",
        name: "Hosszú mássalhangzók",
        questions: [],
        hasGenerator: true,
      },
    ],
  },
  {
    id: "mondat",
    name: "Mondat",
    icon: "📖",
    color: "#00FF88",
    subtopics: [
      {
        id: "mondatfajtak",
        name: "Mondattípusok",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "mondatresz",
        name: "Mondatrészek",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "szorend",
        name: "Szórend",
        questions: [],
        hasGenerator: true,
      },
    ],
  },
  {
    id: "szo",
    name: "Szóalkotás",
    icon: "🔗",
    color: "#B44DFF",
    subtopics: [
      {
        id: "osszetetel",
        name: "Összetételek",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "kepzok",
        name: "Képzők",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "tobbesszam",
        name: "Többesszám",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "kotojelek",
        name: "Kötőjelek",
        questions: [],
        hasGenerator: true,
      },
    ],
  },
  {
    id: "ragozas",
    name: "Ragozás",
    icon: "🔄",
    color: "#FFD700",
    subtopics: [
      {
        id: "fonevreg",
        name: "Főnév ragozása",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "igereg",
        name: "Ige ragozása",
        questions: [],
        hasGenerator: true,
      },
    ],
  },
  {
    id: "szokincs",
    name: "Szókincs",
    icon: "📚",
    color: "#00FF88",
    subtopics: [
      {
        id: "szinonimak",
        name: "Szinonimák",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "ellentetek",
        name: "Ellentétek",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "foglalkozasok",
        name: "Foglalkozások",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "evszakok",
        name: "Évszakok",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "iskola",
        name: "Iskolai szókincs",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "termeszet",
        name: "Természet szókincs",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "sport",
        name: "Sport szókincs",
        questions: [],
        hasGenerator: true,
      },
    ],
  },
  {
    id: "olvasas",
    name: "Olvasás",
    icon: "📖",
    color: "#00D4FF",
    subtopics: [
      {
        id: "szokincs",
        name: "Szókincs megértés",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "szovegertes",
        name: "Szövegértés",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "mesek",
        name: "Meseelem-zés",
        questions: [],
        hasGenerator: true,
      },
    ],
  },
];

// ─── GRADE 3 (3. OSZTÁLY) — IGEIDŐK, NÉVSZÓK, SZÖVEGÉRTÉS ────────────────

const G3: HungarianTheme[] = [
  {
    id: "igeidok",
    name: "Igeidők",
    icon: "⏰",
    color: "#FF2D78",
    subtopics: [
      {
        id: "jelen",
        name: "Jelen idő",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "mult",
        name: "Múlt idő",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "jovo",
        name: "Jövő idő",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "felszolito",
        name: "Felszólító mód",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "felteteles",
        name: "Feltételes mód",
        questions: [],
        hasGenerator: true,
      },
    ],
  },
  {
    id: "nevszok",
    name: "Névszók",
    icon: "🏷️",
    color: "#00D4FF",
    subtopics: [
      {
        id: "fonevragozas",
        name: "Főnév ragozása",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "melleknevfokozas",
        name: "Melléknevek fokozása",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "birtokos",
        name: "Birtokos kapcsolat",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "hatarozaragu",
        name: "Határozóragos esetek",
        questions: [],
        hasGenerator: true,
      },
    ],
  },
  {
    id: "szo",
    name: "Szóalkotás",
    icon: "🔗",
    color: "#00FF88",
    subtopics: [
      {
        id: "osszetett_halado",
        name: "Összetett szavak",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "szocsaladok",
        name: "Szócsaládok",
        questions: [],
        hasGenerator: true,
      },
    ],
  },
  {
    id: "szoveg",
    name: "Szövegalkotás",
    icon: "📝",
    color: "#B44DFF",
    subtopics: [
      {
        id: "megertés",
        name: "Szövegértés",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "osszefoglalas",
        name: "Szöveg összefoglalása",
        questions: [],
        hasGenerator: true,
      },
    ],
  },
  {
    id: "szokincs",
    name: "Szókincs",
    icon: "📚",
    color: "#FFD700",
    subtopics: [
      {
        id: "szolasok",
        name: "Szólások",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "kozmondasok",
        name: "Közmondások",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "erzelmek",
        name: "Érzelmek szókincs",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "idokifejezesek",
        name: "Idő kifejezések",
        questions: [],
        hasGenerator: true,
      },
    ],
  },
  {
    id: "helyesiras",
    name: "Helyesírás",
    icon: "✏️",
    color: "#00D4FF",
    subtopics: [
      {
        id: "egybeíras",
        name: "Egybeírás",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "kuloniras",
        name: "Különírás",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "ikes_igek",
        name: "Ikes igék",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "masshangzo_torveny",
        name: "Mássalhangzó-törvény",
        questions: [],
        hasGenerator: true,
      },
    ],
  },
  {
    id: "fogalmazas",
    name: "Fogalmazás",
    icon: "✍️",
    color: "#00FF88",
    subtopics: [
      {
        id: "elbeszeles",
        name: "Elbeszélés",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "leiras",
        name: "Leírás",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "parbeszed",
        name: "Párbeszéd",
        questions: [],
        hasGenerator: true,
      },
    ],
  },
  {
    id: "mondat",
    name: "Mondatalkotás",
    icon: "📖",
    color: "#B44DFF",
    subtopics: [
      {
        id: "targy",
        name: "Tárgy szerep",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "hatarozo",
        name: "Határozó szerep",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "jelzo",
        name: "Jelző szerep",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "osszetett_alap",
        name: "Összetett mondatok alapjai",
        questions: [],
        hasGenerator: true,
      },
    ],
  },
];

// ─── GRADE 4 (4. OSZTÁLY) — IGEI RAGOZÁS, NÉVMÁSOK, ÖSSZETETT MONDATOK ──

const G4: HungarianTheme[] = [
  {
    id: "ige",
    name: "Igei ragozás",
    icon: "🔄",
    color: "#FF2D78",
    subtopics: [
      {
        id: "alanyi",
        name: "Alanyi ragozás",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "targyas_ragozas",
        name: "Tárgyasragozás",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "ige_igemódok",
        name: "Igék módjai",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "igeidők_összef",
        name: "Igeidők összefoglalása",
        questions: [],
        hasGenerator: true,
      },
    ],
  },
  {
    id: "nevmas",
    name: "Névmások",
    icon: "👤",
    color: "#00D4FF",
    subtopics: [
      {
        id: "szemelyes_nevmas",
        name: "Személyes névmások",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "mutato_nevmas",
        name: "Mutató névmások",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "kerdo_nevmas",
        name: "Kérdő névmások",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "visszaható",
        name: "Visszaható névmások",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "határozatlan",
        name: "Határozatlan névmások",
        questions: [],
        hasGenerator: true,
      },
    ],
  },
  {
    id: "hatarozo",
    name: "Határozók",
    icon: "📍",
    color: "#00FF88",
    subtopics: [
      {
        id: "helyhataroza",
        name: "Helyhatározó",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "idohataroza",
        name: "Időhatározó",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "modhataroza",
        name: "Módhatározó",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "cel",
        name: "Célhatározó",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "ok",
        name: "Okhatározó",
        questions: [],
        hasGenerator: true,
      },
    ],
  },
  {
    id: "mondat",
    name: "Összetett mondatok",
    icon: "🔀",
    color: "#B44DFF",
    subtopics: [
      {
        id: "mellerendelés",
        name: "Mellérendelés",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "alárendelés",
        name: "Alárendelés",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "tobbsz_osszetett",
        name: "Többszörösen összetett mondatok",
        questions: [],
        hasGenerator: true,
      },
    ],
  },
  {
    id: "szoalkotás",
    name: "Szóalkotás",
    icon: "🔗",
    color: "#FFD700",
    subtopics: [
      {
        id: "kepzes",
        name: "Képzés",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "ragozas",
        name: "Ragozás",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "jelezés",
        name: "Jelezés",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "igekötő_haladó",
        name: "Igekötő (haladó)",
        questions: [],
        hasGenerator: true,
      },
    ],
  },
  {
    id: "helyesiras",
    name: "Helyesírás",
    icon: "✏️",
    color: "#00D4FF",
    subtopics: [
      {
        id: "igekoveto",
        name: "Igekötő",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "kuloniro",
        name: "Különírás",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "vesszőhasználat",
        name: "Vessző használata",
        questions: [],
        hasGenerator: true,
      },
    ],
  },
  {
    id: "fogalmazas",
    name: "Fogalmazás",
    icon: "✍️",
    color: "#00FF88",
    subtopics: [
      {
        id: "erveles",
        name: "Érvelés",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "level",
        name: "Levélírás",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "napló",
        name: "Naplóírás",
        questions: [],
        hasGenerator: true,
      },
    ],
  },
  {
    id: "nyelvtan",
    name: "Nyelvtan",
    icon: "📖",
    color: "#B44DFF",
    subtopics: [
      {
        id: "szoelem",
        name: "Szóelemzés",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "mondatelemzes",
        name: "Mondatelemzés",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "szószerkezet",
        name: "Szószerkezetek",
        questions: [],
        hasGenerator: true,
      },
    ],
  },
];

// ─── GRADE 5 (5. OSZTÁLY) — HANGTAN, SZÓELEMZÉS, SZÓFAJOK HALADÓ ────────

const G5: HungarianTheme[] = [
  {
    id: "hangtan",
    name: "Hangtan",
    icon: "🔊",
    color: "#FF2D78",
    subtopics: [
      {
        id: "hangrendsz",
        name: "Hangrendszer",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "hasonulas",
        name: "Hangösszehangzás",
        questions: [],
        hasGenerator: true,
      },
    ],
  },
  {
    id: "szoelemzes",
    name: "Szóelemzés",
    icon: "🔍",
    color: "#00D4FF",
    subtopics: [
      {
        id: "to_toldalek",
        name: "Tő és toldalék",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "kepzo_jel_rag",
        name: "Képző, jel, rag",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "igenev",
        name: "Igenevek",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "hatarozoSzo",
        name: "Határozószerű szók",
        questions: [],
        hasGenerator: true,
      },
    ],
  },
  {
    id: "szofajok_halado",
    name: "Szófajok (haladó)",
    icon: "🏷️",
    color: "#00FF88",
    subtopics: [
      {
        id: "alany_allitmany",
        name: "Alany, állítmány",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "targy_hatarozo",
        name: "Tárgy, határozók",
        questions: [],
        hasGenerator: true,
      },
    ],
  },
  {
    id: "szoveg",
    name: "Szövegalkotás",
    icon: "📝",
    color: "#B44DFF",
    subtopics: [
      {
        id: "szovegtipusok",
        name: "Szövegtípusok",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "kohezio",
        name: "Szövegkohézió",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "koznyelv_irodalmi",
        name: "Köznyelv vs. szépírói nyelvezet",
        questions: [],
        hasGenerator: true,
      },
    ],
  },
  {
    id: "szoalkotás",
    name: "Szóalkotás",
    icon: "🔗",
    color: "#FFD700",
    subtopics: [
      {
        id: "osszetetel_iras",
        name: "Összetétel, írása",
        questions: [],
        hasGenerator: true,
      },
    ],
  },
  {
    id: "irodalom",
    name: "Irodalom",
    icon: "📚",
    color: "#00D4FF",
    subtopics: [
      {
        id: "versformak",
        name: "Versformák",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "stiluseszk",
        name: "Stíluseszközök",
        questions: [],
        hasGenerator: true,
      },
    ],
  },
];

// ─── GRADE 6 (6. OSZTÁLY) — ÖSSZETETT MONDATOK, SZÓKÉPEK, NYELVTÖRTÉNET ──

const G6: HungarianTheme[] = [
  {
    id: "mondat_haladó",
    name: "Összetett mondatok",
    icon: "🔀",
    color: "#FF2D78",
    subtopics: [
      {
        id: "mellér",
        name: "Mellérendelő mondatok",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "alár",
        name: "Alárendelő mondatok",
        questions: [],
        hasGenerator: true,
      },
    ],
  },
  {
    id: "szokepek",
    name: "Szóképek",
    icon: "🎨",
    color: "#00D4FF",
    subtopics: [
      {
        id: "hasonlat_metafora",
        name: "Hasonlat, metafora",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "megszemelyes",
        name: "Megszemélyesítés",
        questions: [],
        hasGenerator: true,
      },
    ],
  },
  {
    id: "nyelvtortenet",
    name: "Nyelvtörténet",
    icon: "📜",
    color: "#00FF88",
    subtopics: [
      {
        id: "idegen_szavak",
        name: "Idegen szavak",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "nyelvcsal",
        name: "Nyelvcsal",
        questions: [],
        hasGenerator: true,
      },
    ],
  },
  {
    id: "szoveg_halado",
    name: "Szövegértelmezés",
    icon: "📖",
    color: "#B44DFF",
    subtopics: [
      {
        id: "erveles_alap",
        name: "Érvelés alapjai",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "ertelmez_halado",
        name: "Szövegértelmezés (haladó)",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "tulajdonnev",
        name: "Tulajdonnevek",
        questions: [],
        hasGenerator: true,
      },
    ],
  },
  {
    id: "fogalmazas_halado",
    name: "Fogalmazás (haladó)",
    icon: "✍️",
    color: "#FFD700",
    subtopics: [
      {
        id: "essze",
        name: "Esszé írás",
        questions: [],
        hasGenerator: true,
      },
    ],
  },
];

// ─── GRADE 7 (7. OSZTÁLY) — STILISZTIKA, SZÖVEGALKOTÁS, KOMMUNIKÁCIÓ ────

const G7: HungarianTheme[] = [
  {
    id: "nyelvtort_haladó",
    name: "Nyelvtörténet (haladó)",
    icon: "📜",
    color: "#FF2D78",
    subtopics: [
      {
        id: "hangvaltozas",
        name: "Hangváltozások",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "jovenényszó_haladó",
        name: "Jövevényszók (haladó)",
        questions: [],
        hasGenerator: true,
      },
    ],
  },
  {
    id: "retorika",
    name: "Retorika",
    icon: "🎤",
    color: "#00D4FF",
    subtopics: [
      {
        id: "erveles_haladó",
        name: "Érvelés (haladó)",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "meggyozes_haladó",
        name: "Meggyőzés (haladó)",
        questions: [],
        hasGenerator: true,
      },
    ],
  },
  {
    id: "stilisztika",
    name: "Stilisztika",
    icon: "🎨",
    color: "#00FF88",
    subtopics: [
      {
        id: "stilusretegek",
        name: "Stílusrétegek",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "szovegstilus",
        name: "Szövegstílus",
        questions: [],
        hasGenerator: true,
      },
    ],
  },
  {
    id: "nyelvv",
    name: "Nyelvváltozatok",
    icon: "🗣️",
    color: "#B44DFF",
    subtopics: [
      {
        id: "tajnyelv",
        name: "Tájnyelv",
        questions: [],
        hasGenerator: true,
      },
    ],
  },
  {
    id: "szoveg_ervelo",
    name: "Szövegalkotás (érvelő)",
    icon: "📝",
    color: "#FFD700",
    subtopics: [
      {
        id: "ervelo_szoveg",
        name: "Érvelő szöveg",
        questions: [],
        hasGenerator: true,
      },
    ],
  },
  {
    id: "kommunikacio",
    name: "Kommunikáció",
    icon: "💬",
    color: "#00D4FF",
    subtopics: [
      {
        id: "verbalis",
        name: "Verbális kommunikáció",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "mediaszoveg",
        name: "Médiaeszközök",
        questions: [],
        hasGenerator: true,
      },
    ],
  },
];

// ─── GRADE 8 (8. OSZTÁLY) — NYELVTÖRTÉNET, STÍLUSESZKÖZÖK, SZABÁLYOZÁS ──

const G8: HungarianTheme[] = [
  {
    id: "nyelvtort_8",
    name: "Nyelvtörténet (8. osztály)",
    icon: "📜",
    color: "#FF2D78",
    subtopics: [
      {
        id: "omagyr",
        name: "Ős magyar nyelvemléekek",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "kodexek",
        name: "Kódexek fejlődése",
        questions: [],
        hasGenerator: true,
      },
    ],
  },
  {
    id: "stiluseszk",
    name: "Stíluseszközök",
    icon: "🎨",
    color: "#00D4FF",
    subtopics: [
      {
        id: "alliteracio_ritmika",
        name: "Alliteráció, ritmika",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "ironia_szatira",
        name: "Irónia, szatíra",
        questions: [],
        hasGenerator: true,
      },
    ],
  },
  {
    id: "szoveg_irodalmi",
    name: "Szöveganalízis",
    icon: "📖",
    color: "#00FF88",
    subtopics: [
      {
        id: "irodalmi_elemzes",
        name: "Irodalmi elemzés",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "kritikai_gondolkodas",
        name: "Kritikai gondolkodás",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "tudomanyos_szoveg",
        name: "Tudományos szöveg",
        questions: [],
        hasGenerator: true,
      },
    ],
  },
  {
    id: "helyesiras_8",
    name: "Helyesírás (8. osztály)",
    icon: "✏️",
    color: "#B44DFF",
    subtopics: [
      {
        id: "osszefoglalo",
        name: "Helyesírás összefoglalása",
        questions: [],
        hasGenerator: true,
      },
    ],
  },
  {
    id: "norma",
    name: "Nyelvnorma",
    icon: "📋",
    color: "#FFD700",
    subtopics: [
      {
        id: "kozmagyar",
        name: "Köznyelvesség",
        questions: [],
        hasGenerator: true,
      },
    ],
  },
  {
    id: "vita",
    name: "Vita, érvelés",
    icon: "🎤",
    color: "#00D4FF",
    subtopics: [
      {
        id: "erveles_technika",
        name: "Érvelési technika",
        questions: [],
        hasGenerator: true,
      },
      {
        id: "cafolás",
        name: "Cáfolás módszere",
        questions: [],
        hasGenerator: true,
      },
    ],
  },
];

// ─── CURRICULUM COLLECTION ────────────────────────────────────────────────

export const HUNGARIAN_CURRICULUM: Record<number, HungarianTheme[]> = {
  1: G1,
  2: G2,
  3: G3,
  4: G4,
  5: G5,
  6: G6,
  7: G7,
  8: G8,
};

// ─── QUESTION GENERATION FROM GENERATORS ──────────────────────────────────────

export function getHungarianQuestions(
  grade: number,
  selectedSubtopicIds: string[],
  count = 10
): HungarianQuestion[] {
  const themes = HUNGARIAN_CURRICULUM[grade] ?? [];
  const pool: HungarianQuestion[] = [];

  // Build a map of all generators for this grade
  const generatorsByGrade: Record<number, Record<string, (seed?: number) => CurriculumQuestion[]>> = {
    1: G1_Generators_Hungarian as any,
    2: G2_Generators_Hungarian as any,
    3: G3_Generators_Hungarian as any,
    4: G4_Generators_Hungarian as any,
    5: G5_Generators_Hungarian as any,
    6: G6_Generators_Hungarian as any,
    7: G7_Generators_Hungarian as any,
    8: G8_Generators_Hungarian as any,
  };

  const generators = generatorsByGrade[grade];

  if (!generators) {
    return [];
  }

  for (const theme of themes) {
    for (const sub of theme.subtopics) {
      if (selectedSubtopicIds.includes(sub.id)) {
        // Try to get the generator function for this subtopic
        let generatorFn: ((seed?: number) => CurriculumQuestion[]) | undefined =
          generators[sub.id];

        if (generatorFn) {
          pool.push(
            ...generatorFn(Math.floor(Math.random() * 1000000))
          );
        } else {
          pool.push(...sub.questions);
        }

        // Find _typing variant if exists
        const typingKey = sub.id + "_typing";
        let typingFn: ((seed?: number) => CurriculumQuestion[]) | undefined =
          generators[typingKey];

        if (typingFn) {
          pool.push(
            ...typingFn(Math.floor(Math.random() * 1000000))
          );
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
        // Reshuffle options for variety
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

// ─── HUNGARIAN GRADING — HU 1-5 scale ────────────────────────────────────────

export function calculateHungarianGrade(pct: number): TestGradeMark {
  // HU grading: 1-5 scale (5=jeles, 4=jó, 3=közepes, 2=elégséges, 1=elégtelen)
  if (pct >= 90)
    return {
      note: "5",
      label: "Jeles",
      color: "#FFD700",
      emoji: "🌟",
    };
  if (pct >= 75)
    return {
      note: "4",
      label: "Jó",
      color: "#00FF88",
      emoji: "😊",
    };
  if (pct >= 60)
    return {
      note: "3",
      label: "Közepes",
      color: "#00D4FF",
      emoji: "🙂",
    };
  if (pct >= 40)
    return {
      note: "2",
      label: "Elégséges",
      color: "#FF6B00",
      emoji: "😅",
    };
  return {
    note: "1",
    label: "Elégtelen",
    color: "#FF4444",
    emoji: "😟",
  };
}

// ─── SUBTOPIC HINTS (optional) ────────────────────────────────────────────

export const HUNGARIAN_SUBTOPIC_HINTS: Record<string, string> = {
  maganhangzok: "A magánhangzók: a, á, e, é, i, í, o, ó, ö, ő, u, ú, ü, ű",
  massalhangzok: "Mássalhangzók: b, c, d, f, g, h, j, k, l, m, n, p, r, s, t, v, z",
  rovid_hosszu: "Rövid: a, e, i, o, u | Hosszú: á, é, í, ó, ö, ő, ú, ü, ű",
  j_ly: "Melyik esetben használunk 'j'-t és melyik esetben 'ly'-t?",
  szotagszam: "Számold meg, hány szótagra osztható a szó!",
  fonevek: "A főnevek azt jelölik, amit meg lehet érteni a szóval.",
  igek: "Az igék cselekvéseket, történéseket jelölnek.",
  melleknevek: "A melléknevek a tulajdonságokat jelölnek.",
  mondatfajtak: "Kijelentő, kérdő, felszólító, óhajtó mondatok",
  irasjelek: "Pont (.), kérdőjel (?), felkiáltójel (!), vessző (,)",
  nagybetu: "Mondat elején, helynevek, személynevek, intézmények nevei",
  helyesiras: "Vigyázz az ékezetekre és a hosszú-rövid magánhangzók különbségére!",
};
