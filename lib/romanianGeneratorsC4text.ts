// ─── ROMANIAN GENERATORS (CLASA a IV-a) — PRODUCERE DE TEXT ──────────────────
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

// ─── 1. REZUMAT ───────────────────────────────────────────────────────────────

function gen_rezumat_c4(seed: number): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const topic = "text_c4";
  const subtopic = "rezumat_c4";
  const questions: CurriculumMCQ[] = [];

  questions.push(createMCQ(topic, subtopic,
    "Rezumatul unui text se scrie:",
    "la persoana a III-a, în ordine cronologică",
    [
      "la persoana I, în orice ordine",
      "cu toate detaliile din text",
      "ca o copie a textului original",
    ],
    rng
  ));

  questions.push(createMCQ(topic, subtopic,
    "Ce este rezumatul?",
    "O prezentare scurtă a ideilor principale dintr-un text",
    [
      "O copie completă a textului original",
      "O poveste inventată pe baza unui text",
      "O listă de cuvinte noi din text",
    ],
    rng
  ));

  questions.push(createMCQ(topic, subtopic,
    "Ce se include într-un rezumat?",
    "Ideile principale și faptele esențiale",
    [
      "Toate dialogurile din text",
      "Opiniile personale ale cititorului",
      "Descrierile detaliate ale personajelor",
    ],
    rng
  ));

  questions.push(createMCQ(topic, subtopic,
    "Ce se exclude dintr-un rezumat?",
    "Detaliile și descrierile care nu sunt esențiale",
    [
      "Personajele principale",
      "Acțiunea principală a textului",
      "Locul unde se petrece acțiunea",
    ],
    rng
  ));

  questions.push(createMCQ(topic, subtopic,
    "Cum trebuie să fie un rezumat față de textul original?",
    "Mai scurt, cuprinzând doar esențialul",
    [
      "La fel de lung ca textul original",
      "Mai lung, cu explicații suplimentare",
      "Scris cu alte cuvinte, dar cu același număr de rânduri",
    ],
    rng
  ));

  questions.push(createMCQ(topic, subtopic,
    "Care este primul pas în realizarea unui rezumat?",
    "Citirea atentă a textului și identificarea ideilor principale",
    [
      "Scrierea opiniei personale despre text",
      "Copierea primului paragraf al textului",
      "Inventarea unui final diferit pentru text",
    ],
    rng
  ));

  return questions;
}

// ─── 2. TEXT NARATIV ──────────────────────────────────────────────────────────

function gen_text_narativ_c4(seed: number): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const topic = "text_c4";
  const subtopic = "text_narativ_c4";
  const questions: CurriculumMCQ[] = [];

  questions.push(createMCQ(topic, subtopic,
    "Momentele subiectului unui text narativ sunt în ordine:",
    "expoziție, intrigă, desfășurare, punct culminant, deznodământ",
    [
      "intrigă, expoziție, deznodământ, punct culminant, desfășurare",
      "desfășurare, intrigă, expoziție, deznodământ, punct culminant",
      "punct culminant, expoziție, desfășurare, intrigă, deznodământ",
    ],
    rng
  ));

  questions.push(createMCQ(topic, subtopic,
    "Ce este textul narativ?",
    "Un text care povestește întâmplări reale sau imaginare",
    [
      "Un text care descrie un peisaj sau un obiect",
      "Un text care prezintă o opinie și argumente",
      "Un text care conține informații științifice",
    ],
    rng
  ));

  questions.push(createMCQ(topic, subtopic,
    "Care dintre următoarele este un text narativ?",
    "Basmul",
    [
      "Articolul de ziar",
      "Scrisoarea oficială",
      "Rețeta culinară",
    ],
    rng
  ));

  questions.push(createMCQ(topic, subtopic,
    "Ce este expoziția într-un text narativ?",
    "Momentul în care sunt prezentate personajele, locul și timpul acțiunii",
    [
      "Momentul de maximă tensiune din poveste",
      "Finalul poveștii, rezolvarea conflictului",
      "Momentul în care apare conflictul principal",
    ],
    rng
  ));

  questions.push(createMCQ(topic, subtopic,
    "Ce este punctul culminant al unui text narativ?",
    "Momentul de maximă tensiune sau intensitate al acțiunii",
    [
      "Începutul poveștii, prezentarea personajelor",
      "Finalul fericit al poveștii",
      "Descrierea locului unde se petrece acțiunea",
    ],
    rng
  ));

  questions.push(createMCQ(topic, subtopic,
    "Cine este naratorul într-un text narativ?",
    "Cel care povestește întâmplările din text",
    [
      "Personajul negativ al poveștii",
      "Cititorul textului",
      "Autorul cărții în care apare textul",
    ],
    rng
  ));

  questions.push(createMCQ(topic, subtopic,
    "Ce este deznodământul unui text narativ?",
    "Rezolvarea conflictului și încheierea acțiunii",
    [
      "Apariția primului conflict în poveste",
      "Descrierea personajelor principale",
      "Momentul de cea mai mare tensiune din poveste",
    ],
    rng
  ));

  return questions;
}

// ─── 3. TEXT ARGUMENTATIV ────────────────────────────────────────────────────

function gen_text_argumentativ_c4(seed: number): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const topic = "text_c4";
  const subtopic = "text_argumentativ_c4";
  const questions: CurriculumMCQ[] = [];

  questions.push(createMCQ(topic, subtopic,
    "Textul argumentativ trebuie să conțină:",
    "o opinie, argumente și o concluzie",
    [
      "doar o opinie, fără argumente",
      "doar fapte, fără opinie",
      "descrieri ale naturii și personajelor",
    ],
    rng
  ));

  questions.push(createMCQ(topic, subtopic,
    "Ce este un argument într-un text argumentativ?",
    "O dovadă sau un motiv care susține opinia exprimată",
    [
      "O întrebare adresată cititorului",
      "O poveste imaginară fără legătură cu subiectul",
      "O descriere a unui peisaj",
    ],
    rng
  ));

  questions.push(createMCQ(topic, subtopic,
    "Care dintre următorii conectori este specific textului argumentativ?",
    "Deoarece",
    [
      "A fost odată",
      "Și trăiră fericiți",
      "Dragă prietene",
    ],
    rng
  ));

  questions.push(createMCQ(topic, subtopic,
    "Cum începe de obicei un text argumentativ?",
    "Cu prezentarea opiniei sau a punctului de vedere al autorului",
    [
      "Cu descrierea unui peisaj de natură",
      "Cu lista personajelor din poveste",
      "Cu data și locul scrierii",
    ],
    rng
  ));

  questions.push(createMCQ(topic, subtopic,
    "Ce rol are concluzia într-un text argumentativ?",
    "Rezumă opinia și argumentele prezentate",
    [
      "Introduce un subiect nou, netratat anterior",
      "Contrazice opinia exprimată la început",
      "Descrie personajele textului",
    ],
    rng
  ));

  questions.push(createMCQ(topic, subtopic,
    "Care expresie introducea o concluzie într-un text argumentativ?",
    "În concluzie,",
    [
      "A fost odată ca niciodată,",
      "Dragă prietene,",
      "Conform dicționarului,",
    ],
    rng
  ));

  return questions;
}

// ─── 4. SCRISOAREA ───────────────────────────────────────────────────────────

function gen_scrisoarea_c4(seed: number): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const topic = "text_c4";
  const subtopic = "scrisoarea_c4";
  const questions: CurriculumMCQ[] = [];

  questions.push(createMCQ(topic, subtopic,
    "Formula de adresare dintr-o scrisoare personală poate fi:",
    "Dragă prietene,",
    [
      "Stimate domnule,",
      "Cu stimă,",
      "Vă salut cu respect,",
    ],
    rng
  ));

  questions.push(createMCQ(topic, subtopic,
    "Care este ordinea corectă a elementelor unei scrisori?",
    "Locul și data, formula de adresare, corpul scrisorii, formula de încheiere, semnătura",
    [
      "Semnătura, corpul scrisorii, formula de adresare, data",
      "Formula de încheiere, corpul scrisorii, locul și data, semnătura",
      "Corpul scrisorii, formula de adresare, semnătura, data",
    ],
    rng
  ));

  questions.push(createMCQ(topic, subtopic,
    "Ce este formula de încheiere a unei scrisori personale?",
    "O formulă de salut cu care se termină scrisoarea, înainte de semnătură",
    [
      "Prima propoziție din scrisoare",
      "Adresa destinatarului scrisă pe plic",
      "Data la care a fost trimisă scrisoarea",
    ],
    rng
  ));

  questions.push(createMCQ(topic, subtopic,
    "Unde se scriu locul și data într-o scrisoare?",
    "În partea de sus a scrisorii, de obicei în dreapta",
    [
      "La sfârșitul scrisorii, după semnătură",
      "În mijlocul scrisorii, după corpul principal",
      "Pe plic, lângă timbru",
    ],
    rng
  ));

  questions.push(createMCQ(topic, subtopic,
    "Care este diferența dintre o scrisoare personală și una oficială?",
    "Scrisoarea personală folosește un ton prietenos, cea oficială un ton formal",
    [
      "Scrisoarea personală nu are semnătură, cea oficială are",
      "Scrisoarea oficială nu are formulă de adresare",
      "Scrisoarea personală se scrie în versuri",
    ],
    rng
  ));

  questions.push(createMCQ(topic, subtopic,
    "Care formulă de încheiere este potrivită pentru o scrisoare personală?",
    "Cu drag, al tău prieten,",
    [
      "Cu deosebită stimă,",
      "Cu respect și considerație,",
      "Al dumneavoastră supus,",
    ],
    rng
  ));

  return questions;
}

// ─── 5. TEXTUL INFORMATIV ────────────────────────────────────────────────────

function gen_textul_informativ_c4(seed: number): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const topic = "text_c4";
  const subtopic = "textul_informativ_c4";
  const questions: CurriculumMCQ[] = [];

  questions.push(createMCQ(topic, subtopic,
    "Textul informativ se caracterizează prin:",
    "limbaj obiectiv și informații precise",
    [
      "limbaj subiectiv și emoții ale autorului",
      "rime și ritm regulat",
      "dialoguri între personaje imaginare",
    ],
    rng
  ));

  questions.push(createMCQ(topic, subtopic,
    "Care dintre următoarele este un text informativ?",
    "Un articol de enciclopedie despre delfini",
    [
      "Un basm despre un prinț și un dragon",
      "O scrisoare trimisă unui prieten",
      "O poezie despre primăvară",
    ],
    rng
  ));

  questions.push(createMCQ(topic, subtopic,
    "Ce scop are un text informativ?",
    "Să transmită informații corecte și clare despre un subiect",
    [
      "Să distreze cititorul cu o poveste imaginară",
      "Să convingă cititorul să adopte o anumită opinie",
      "Să descrie sentimentele autorului",
    ],
    rng
  ));

  questions.push(createMCQ(topic, subtopic,
    "Ce element important are de obicei un text informativ?",
    "Un titlu care indică subiectul textului",
    [
      "Rime la sfârșitul fiecărei propoziții",
      "Un conflict între personaje",
      "O formulă de adresare la început",
    ],
    rng
  ));

  questions.push(createMCQ(topic, subtopic,
    "Cum recunoști un text informativ?",
    "Prezintă fapte reale, verificabile, fără opinia autorului",
    [
      "Conține personaje cu puteri magice",
      "Este scris la persoana I și exprimă trăiri personale",
      "Are rimă și ritm ca o poezie",
    ],
    rng
  ));

  questions.push(createMCQ(topic, subtopic,
    "Limbajul unui text informativ este:",
    "Clar, precis și obiectiv",
    [
      "Poetic, cu multe figuri de stil",
      "Subiectiv, plin de sentimente și emoții",
      "Familiar, ca în conversațiile dintre prieteni",
    ],
    rng
  ));

  return questions;
}

// ─── EXPORT ──────────────────────────────────────────────────────────────────

export const C4_Text_Generators: Record<string, Record<string, (seed?: number) => CurriculumQuestion[]>> = {
  text_c4: {
    rezumat_c4: (seed = 42) => gen_rezumat_c4(seed),
    text_narativ_c4: (seed = 42) => gen_text_narativ_c4(seed),
    text_argumentativ_c4: (seed = 42) => gen_text_argumentativ_c4(seed),
    scrisoarea_c4: (seed = 42) => gen_scrisoarea_c4(seed),
    textul_informativ_c4: (seed = 42) => gen_textul_informativ_c4(seed),
  }
};
