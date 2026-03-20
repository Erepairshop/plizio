// ─── ROMANIAN GENERATORS (CLASA a IV-a) — LECTURĂ ────────────────────────────
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

// ─── 1. ÎNȚELEGEREA TEXTULUI ──────────────────────────────────────────────────
export function gen_intelegere_text_c4(seed = 42): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "lectura_c4";
  const S = "intelegere_text_c4";
  void pick; void shuffle;
  return [
    createMCQ(T, S,
      "Ideea principală a unui text este:",
      "ideea cea mai importantă din text, care exprimă esența acestuia",
      [
        "un detaliu minor din text",
        "primul enunț al textului",
        "ultima propoziție din text",
      ],
      rng),
    createMCQ(T, S,
      "Ideea secundară a unui text este:",
      "o idee care completează sau susține ideea principală",
      [
        "ideea cea mai importantă din text",
        "morala textului",
        "titlul ales de autor",
      ],
      rng),
    createMCQ(T, S,
      "Informațiile explicite dintr-un text sunt:",
      "informații care se găsesc direct scrise în text, fără a trebui să le deducem",
      [
        "informații pe care cititorul le deduce singur din context",
        "informații inventate de cititor",
        "informații găsite numai în titlu",
      ],
      rng),
    createMCQ(T, S,
      "Informațiile implicite dintr-un text sunt:",
      "informații care nu sunt scrise direct, ci trebuie deduse de cititor",
      [
        "informații copiate exact din text",
        "informații din notele de subsol",
        "informații din cuprinsul cărții",
      ],
      rng),
    createMCQ(T, S,
      "Mesajul unui text reprezintă:",
      "ceea ce autorul dorește să transmită cititorului prin intermediul textului",
      [
        "numărul de personaje din text",
        "titlul ales de autor",
        "lungimea textului",
      ],
      rng),
    createMCQ(T, S,
      "O secvență a unui text este:",
      "o parte distinctă a textului în care se prezintă o idee sau un moment al acțiunii",
      [
        "totalitatea personajelor textului",
        "titlul și subtitlul textului",
        "cuvintele necunoscute din text",
      ],
      rng),
    createMCQ(T, S,
      "Pentru a înțelege un text citit, cel mai important pas este:",
      "să identifici ideile principale și să înțelegi legătura dintre ele",
      [
        "să numeri cuvintele din text",
        "să subliniezi toate substantivele",
        "să memorezi textul cuvânt cu cuvânt",
      ],
      rng),
  ];
}

// ─── 2. PERSONAJELE LITERARE ──────────────────────────────────────────────────
export function gen_personaje_c4(seed = 42): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "lectura_c4";
  const S = "personaje_c4";
  void pick; void shuffle;
  return [
    createMCQ(T, S,
      "Personajul principal al unui text este:",
      "personajul care apare cel mai des și în jurul căruia se desfășoară acțiunea",
      [
        "personajul care apare primul în text",
        "personajul care vorbește cel mai mult",
        "personajul menționat în titlu",
      ],
      rng),
    createMCQ(T, S,
      "Personajul secundar al unui text este:",
      "personajul care are un rol important, dar mai mic decât personajul principal",
      [
        "personajul din care este construit titlul",
        "personajul care povestește întâmplarea",
        "personajul cel mai înalt din poveste",
      ],
      rng),
    createMCQ(T, S,
      "Personajul episodic este:",
      "personajul care apare doar în câteva momente ale textului, cu rol nesemnificativ",
      [
        "personajul care luptă cu personajul principal",
        "personajul care apare în fiecare capitol",
        "personajul fără nume din text",
      ],
      rng),
    createMCQ(T, S,
      "Caracterizarea directă a unui personaj înseamnă:",
      "descrierea personajului realizată de autor, de narator sau de alt personaj prin cuvinte clare",
      [
        "deducerea trăsăturilor personajului din faptele sale",
        "descrierea locului în care trăiește personajul",
        "prezentarea obiectelor preferate ale personajului",
      ],
      rng),
    createMCQ(T, S,
      "Caracterizarea indirectă a unui personaj înseamnă:",
      "deducerea trăsăturilor personajului din faptele, vorbele și gândurile sale",
      [
        "descrierea fizică realizată de autor",
        "prezentarea personajului de către un alt personaj",
        "lista de adjective folosite de narator pentru personaj",
      ],
      rng),
    createMCQ(T, S,
      "Trăsăturile fizice ale unui personaj se referă la:",
      "înfățișarea exterioară a personajului (aspect, îmbrăcăminte, vârstă)",
      [
        "calitățile și defectele de caracter ale personajului",
        "sentimentele și emoțiile personajului",
        "relațiile personajului cu familia sa",
      ],
      rng),
    createMCQ(T, S,
      "Trăsăturile morale ale unui personaj se referă la:",
      "calitățile și defectele de caracter (curaj, bunătate, lăcomie, hărnicie etc.)",
      [
        "culoarea ochilor și a părului personajului",
        "vârsta și înălțimea personajului",
        "îmbrăcămintea purtată de personaj",
      ],
      rng),
  ];
}

// ─── 3. TEMA ȘI MESAJUL TEXTULUI ─────────────────────────────────────────────
export function gen_tema_mesaj_c4(seed = 42): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "lectura_c4";
  const S = "tema_mesaj_c4";
  void pick; void shuffle;
  return [
    createMCQ(T, S,
      "Tema unui text reprezintă:",
      "subiectul general despre care vorbește textul (natura, prietenia, curajul etc.)",
      [
        "titlul dat de autor textului",
        "morala sau concluzia textului",
        "numele personajului principal",
      ],
      rng),
    createMCQ(T, S,
      "Mesajul/morala unui text reprezintă:",
      "învățătura sau concluzia pe care o transmite textul cititorului",
      [
        "titlul textului",
        "numele autorului",
        "locul unde se petrece acțiunea",
      ],
      rng),
    createMCQ(T, S,
      "Care este tema fabulei „Corbul și vulpea"?",
      "înșelăciunea și consecințele lăudăroșeniei",
      [
        "prietenia dintre animale",
        "curajul în fața pericolului",
        "dragostea față de natură",
      ],
      rng),
    createMCQ(T, S,
      "Cum se identifică tema unui text?",
      "întrebând: „Despre ce vorbește, în general, acest text?"",
      [
        "citind doar primul paragraf al textului",
        "numărând cuvintele cheie din text",
        "căutând titlul în dicționar",
      ],
      rng),
    createMCQ(T, S,
      "Care este mesajul/morala basmului „Albă ca Zăpada"?",
      "binele învinge răul, iar bunătatea și puritatea sunt răsplătite",
      [
        "este important să fii cel mai frumos",
        "oglinzile fermecate spun întotdeauna adevărul",
        "piticii sunt cei mai buni prieteni ai oamenilor",
      ],
      rng),
    createMCQ(T, S,
      "Tema și mesajul unui text sunt:",
      "diferite: tema este subiectul general, mesajul este învățătura transmisă",
      [
        "identice, ambele exprimând același lucru",
        "ambele reprezentând titlul textului",
        "sinonime cu ideea principală",
      ],
      rng),
  ];
}

// ─── 4. FIGURI DE STIL ────────────────────────────────────────────────────────
export function gen_figuri_stil_c4(seed = 42): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "lectura_c4";
  const S = "figuri_stil_c4";
  void pick; void shuffle;
  return [
    createMCQ(T, S,
      "„Luna este o mare de argint" este un exemplu de:",
      "metaforă",
      [
        "comparație",
        "personificare",
        "enumerație",
      ],
      rng),
    createMCQ(T, S,
      "„Frunzele dansează în bătaia vântului" este un exemplu de:",
      "personificare",
      [
        "metaforă",
        "comparație",
        "repetiție",
      ],
      rng),
    createMCQ(T, S,
      "„Cerul era albastru ca marea" este un exemplu de:",
      "comparație",
      [
        "metaforă",
        "personificare",
        "enumerație",
      ],
      rng),
    createMCQ(T, S,
      "„Pe câmp creșteau flori galbene, roșii, albe și mov" este un exemplu de:",
      "enumerație",
      [
        "repetiție",
        "comparație",
        "metaforă",
      ],
      rng),
    createMCQ(T, S,
      "„Vine, vine primăvara, / Vine, vine cu cântare!" este un exemplu de:",
      "repetiție",
      [
        "enumerație",
        "personificare",
        "exclamație",
      ],
      rng),
    createMCQ(T, S,
      "„Ce frumoasă este pădurea toamna!" este un exemplu de:",
      "exclamație",
      [
        "interogație retorică",
        "repetiție",
        "comparație",
      ],
      rng),
    createMCQ(T, S,
      "„Oare cine nu iubește natura?" este un exemplu de:",
      "interogație retorică",
      [
        "exclamație",
        "enumerație",
        "metaforă",
      ],
      rng),
  ];
}

// ─── EXPORT ───────────────────────────────────────────────────────────────────
export const C4_Lec_Generators: Record<string, Record<string, (seed?: number) => CurriculumQuestion[]>> = {
  lectura_c4: {
    intelegere_text_c4: (seed = 42) => gen_intelegere_text_c4(seed),
    personaje_c4: (seed = 42) => gen_personaje_c4(seed),
    tema_mesaj_c4: (seed = 42) => gen_tema_mesaj_c4(seed),
    figuri_stil_c4: (seed = 42) => gen_figuri_stil_c4(seed),
  }
};
