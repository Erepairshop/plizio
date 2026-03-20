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

  const questionPool = [
    { q: "Rezumatul unui text se scrie:", c: "la persoana a III-a, în ordine cronologică", w: ["la persoana I, în orice ordine", "cu toate detaliile din text", "ca o copie a textului original"] },
    { q: "Ce este rezumatul?", c: "O prezentare scurtă a ideilor principale dintr-un text", w: ["O copie completă a textului original", "O poveste inventată pe baza unui text", "O listă de cuvinte noi din text"] },
    { q: "Ce se include într-un rezumat?", c: "Ideile principale și faptele esențiale", w: ["Toate dialogurile din text", "Opiniile personale ale cititorului", "Descrierile detaliate ale personajelor"] },
    { q: "Ce se exclude dintr-un rezumat?", c: "Detaliile și descrierile care nu sunt esențiale", w: ["Personajele principale", "Acțiunea principală a textului", "Locul unde se petrece acțiunea"] },
    { q: "Cum trebuie să fie un rezumat față de textul original?", c: "Mai scurt, cuprinzând doar esențialul", w: ["La fel de lung ca textul original", "Mai lung, cu explicații suplimentare", "Scris cu alte cuvinte, dar cu același număr de rânduri"] },
    { q: "Care este primul pas în realizarea unui rezumat?", c: "Citirea atentă a textului și identificarea ideilor principale", w: ["Scrierea opiniei personale despre text", "Copierea primului paragraf al textului", "Inventarea unui final diferit pentru text"] },
    { q: "Cum se numește procesul de a reduce textul la ideile principale?", c: "sintetizare", w: ["parafrazare", "comentare", "analiză"] },
    { q: "Rezumatul trebuie să păstreze:", c: "ordinea evenimentelor din text", w: ["opiniile personale", "toți dialogue", "detalii descriptive"] },
  ];

  const questions: CurriculumMCQ[] = [];
  const combined = shuffle(questionPool, rng).slice(0, 7);

  for (const item of combined) {
    questions.push(createMCQ(topic, subtopic, item.q, item.c, item.w, rng));
  }

  return shuffle(questions, rng);
}

// ─── 2. TEXT NARATIV ──────────────────────────────────────────────────────────

function gen_text_narativ_c4(seed: number): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const topic = "text_c4";
  const subtopic = "text_narativ_c4";

  const questionPool = [
    { q: "Momentele subiectului unui text narativ sunt în ordine:", c: "expoziție, intrigă, desfășurare, punct culminant, deznodământ", w: ["intrigă, expoziție, deznodământ, punct culminant, desfășurare", "desfășurare, intrigă, expoziție, deznodământ, punct culminant", "punct culminant, expoziție, desfășurare, intrigă, deznodământ"] },
    { q: "Ce este textul narativ?", c: "Un text care povestește întâmplări reale sau imaginare", w: ["Un text care descrie un peisaj sau un obiect", "Un text care prezintă o opinie și argumente", "Un text care conține informații științifice"] },
    { q: "Care dintre următoarele este un text narativ?", c: "Basmul", w: ["Articolul de ziar", "Scrisoarea oficială", "Rețeta culinară"] },
    { q: "Ce este expoziția într-un text narativ?", c: "Momentul în care sunt prezentate personajele, locul și timpul acțiunii", w: ["Momentul de maximă tensiune din poveste", "Finalul poveștii, rezolvarea conflictului", "Momentul în care apare conflictul principal"] },
    { q: "Ce este punctul culminant al unui text narativ?", c: "Momentul de maximă tensiune sau intensitate al acțiunii", w: ["Începutul poveștii, prezentarea personajelor", "Finalul fericit al poveștii", "Descrierea locului unde se petrece acțiunea"] },
    { q: "Cine este naratorul într-un text narativ?", c: "Cel care povestește întâmplările din text", w: ["Personajul negativ al poveștii", "Cititorul textului", "Autorul cărții în care apare textul"] },
    { q: "Ce este deznodământul unui text narativ?", c: "Rezolvarea conflictului și încheierea acțiunii", w: ["Apariția primului conflict în poveste", "Descrierea personajelor principale", "Momentul de cea mai mare tensiune din poveste"] },
    { q: "Ce element este esențial în textul narativ?", c: "Acțiunea sau întâmplarea care se petrece", w: ["Rimă și ritm regulat", "Formule de inceput de basm", "Explicații științifice"] },
    { q: "Cum se numesc întâmplările din textul narativ?", c: "Acțiune", w: ["Descriere", "Argument", "Concluzie"] },
    { q: "Care parte a textului narativ introduce conflictul?", c: "Intriga", w: ["Expoziția", "Desfășurarea", "Deznodământul"] },
    { q: "Textul narativ poate fi scris din perspectiva:", c: "Persoanei I, a II-a sau a III-a", w: ["Doar din persoana I", "Doar din persoana a III-a", "Doar din persoana a II-a"] },
    { q: "Care dintre acestea este o caracteristică a textului narativ?", c: "Prezența personajelor și a conflictului", w: ["Limbaj strict tehnic", "Absența completă de timp", "Fără nici un conflict"] },
    { q: "Peripețiile unui text narativ sunt:", c: "Schimbări în acțiune care măresc tensiunea", w: ["Descrieri detaliate ale naturii", "Explicații științifice", "Formule de adresare"] },
    { q: "Ce se întâmplă în momentul intrigii?", c: "Apare conflictul principal și se creează suspans", w: ["Se încheie povestea", "Se prezintă doar locul", "Se descrie doar atmosfera"] },
    { q: "Textura narativă necesită:", c: "O succesiune de întâmplări în timp", w: ["Doar descrieri statice", "Formule de inceput", "Versuri și rime"] },
    { q: "Care este scopa textului narativ?", c: "Să povestească și să delecteze cititorul", w: ["Să convingă cititorul", "Să informeze riguros", "Să critice aspru"] },
  ];

  const questions: CurriculumMCQ[] = [];
  const combined = shuffle(questionPool, rng).slice(0, 7);

  for (const item of combined) {
    questions.push(createMCQ(topic, subtopic, item.q, item.c, item.w, rng));
  }

  return shuffle(questions, rng);
}

// ─── 3. TEXT ARGUMENTATIV ────────────────────────────────────────────────────

function gen_text_argumentativ_c4(seed: number): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const topic = "text_c4";
  const subtopic = "text_argumentativ_c4";

  const questionPool = [
    { q: "Textul argumentativ trebuie să conțină:", c: "o opinie, argumente și o concluzie", w: ["doar o opinie, fără argumente", "doar fapte, fără opinie", "descrieri ale naturii și personajelor"] },
    { q: "Ce este un argument într-un text argumentativ?", c: "O dovadă sau un motiv care susține opinia exprimată", w: ["O întrebare adresată cititorului", "O poveste imaginară fără legătură cu subiectul", "O descriere a unui peisaj"] },
    { q: "Care dintre următorii conectori este specific textului argumentativ?", c: "Deoarece", w: ["A fost odată", "Și trăiră fericiți", "Dragă prietene"] },
    { q: "Cum începe de obicei un text argumentativ?", c: "Cu prezentarea opiniei sau a punctului de vedere al autorului", w: ["Cu descrierea unui peisaj de natură", "Cu lista personajelor din poveste", "Cu data și locul scrierii"] },
    { q: "Ce rol are concluzia într-un text argumentativ?", c: "Rezumă opinia și argumentele prezentate", w: ["Introduce un subiect nou, netratat anterior", "Contrazice opinia exprimată la început", "Descrie personajele textului"] },
    { q: "Care expresie introducea o concluzie într-un text argumentativ?", c: "În concluzie,", w: ["A fost odată ca niciodată,", "Dragă prietene,", "Conform dicționarului,"] },
    { q: "Cum diferă textul argumentativ de textul narativ?", c: "Argumentativul convinge, narritivul povestește", w: ["Ambele sunt identice", "Narritivul convinge mai bine", "Argumentativul nu are argumente"] },
    { q: "Care conectori leagă argumentele într-un text argumentativ?", c: "Deasemenea, în plus, pe de altă parte", w: ["A fost odată, și trăiră fericiți", "Dragă, scumpe, prietene", "Ieri, astazi, maine"] },
    { q: "Ce se înțelege prin a susține o opinie?", c: "A prezenta dovezi și motive pentru a o justifica", w: ["A o nega în mod clar", "A o ascunde cititorului", "A o ignora"] },
    { q: "Care este structura unui text argumentativ bine construit?", c: "Introducere, dezvoltare cu argumente, concluzie", w: ["Doar concluzie directă", "Doar dezvoltare fără introducere", "Fără o ordine specifică"] },
    { q: "Un text argumentativ trebuie să fie:", c: "Coerent și logic", w: ["Plin de povestea fictive", "Vag și imprecis", "Plicticos și repetitiv"] },
    { q: "Care este scopul principal al textului argumentativ?", c: "Să persuadeze cititorul", w: ["Să îl delecteze cu o poveste", "Să îl informeze strict", "Să îl confunde"] },
    { q: "Ce element nu trebuie să lipsească dintr-un argument valabil?", c: "Dovezile care susțin ideea", w: ["Versurile și rimele", "Descrierile lungi", "Dialogurile dintre personaje"] },
    { q: "Limbajul unui text argumentativ este:", c: "Clar, precis și convingător", w: ["Poetic și plin de figuri de stil", "Emoțional și subiectiv", "Tehnic și incomprehensibil"] },
    { q: "Cum recunoști textul argumentativ?", c: "Prezintă o opinie susținută cu argumente", w: ["Povestește o întâmplare", "Descrie doar un obiect", "Conține versuri"] },
    { q: "Care conectori introduc contraargumente într-un text argumentativ?", c: "Cu toate acestea, cu toate, dar", w: ["Și, deasemenea, în plus", "A fost, s-a întâmplat", "Dragă, scumpe"] },
  ];

  const questions: CurriculumMCQ[] = [];
  const combined = shuffle(questionPool, rng).slice(0, 7);

  for (const item of combined) {
    questions.push(createMCQ(topic, subtopic, item.q, item.c, item.w, rng));
  }

  return shuffle(questions, rng);
}

// ─── 4. SCRISOAREA ───────────────────────────────────────────────────────────

function gen_scrisoarea_c4(seed: number): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const topic = "text_c4";
  const subtopic = "scrisoarea_c4";

  const questionPool = [
    { q: "Formula de adresare dintr-o scrisoare personală poate fi:", c: "Dragă prietene,", w: ["Stimate domnule,", "Cu stimă,", "Vă salut cu respect,"] },
    { q: "Care este ordinea corectă a elementelor unei scrisori?", c: "Locul și data, formula de adresare, corpul scrisorii, formula de încheiere, semnătura", w: ["Semnătura, corpul scrisorii, formula de adresare, data", "Formula de încheiere, corpul scrisorii, locul și data, semnătura", "Corpul scrisorii, formula de adresare, semnătura, data"] },
    { q: "Ce este formula de încheiere a unei scrisori personale?", c: "O formulă de salut cu care se termină scrisoarea, înainte de semnătură", w: ["Prima propoziție din scrisoare", "Adresa destinatarului scrisă pe plic", "Data la care a fost trimisă scrisoarea"] },
    { q: "Unde se scriu locul și data într-o scrisoare?", c: "În partea de sus a scrisorii, de obicei în dreapta", w: ["La sfârșitul scrisorii, după semnătură", "În mijlocul scrisorii, după corpul principal", "Pe plic, lângă timbru"] },
    { q: "Care este diferența dintre o scrisoare personală și una oficială?", c: "Scrisoarea personală folosește un ton prietenos, cea oficială un ton formal", w: ["Scrisoarea personală nu are semnătură, cea oficială are", "Scrisoarea oficială nu are formulă de adresare", "Scrisoarea personală se scrie în versuri"] },
    { q: "Care formulă de încheiere este potrivită pentru o scrisoare personală?", c: "Cu drag, al tău prieten,", w: ["Cu deosebită stimă,", "Cu respect și considerație,", "Al dumneavoastră supus,"] },
    { q: "Ce elemente trebuie neapărat în orice scrisoare?", c: "Data, formula de adresare, semnătura", w: ["Doar semnătura", "Doar data", "Doar formula de adresare"] },
    { q: "Care formulă de adresare se folosește în scrisorile oficiale?", c: "Stimate domnule / doamnă,", w: ["Dragă prietene,", "Scumpe colega,", "Bună prietene,"] },
    { q: "Corpul scrisorii conține:", c: "Mesajul principal pe care vrem să îl transmitem", w: ["Doar data și locul", "Doar semnătura", "Doar formula de adresare"] },
    { q: "Ce este semnătura unei scrisori?", c: "Numele scris de mână la sfârșitul scrisorii", w: ["Data de trimitere", "Formula de adresare", "Titlul scrisorii"] },
    { q: "Cum se aranjează adresa pe plic?", c: "Numele și adresa destinatarului în centru/dreapta", w: ["Doar codul poștal", "Doar orașul", "Aleatoriu pe plic"] },
    { q: "Care este formatul corect de dată într-o scrisoare?", c: "Ziua, luna, anul (ex. 15 martie 2024)", w: ["Doar anul", "Doar ziua", "Doar luna și anul"] },
    { q: "O scrisoare oficială trebuie să fie:", c: "Concisă, clară și respectuoasă", w: ["Lungă și plicticioasă", "Prea familială", "Slabă la gramatică"] },
    { q: "Care este rostul unei scrisori?", c: "Să comunice un mesaj unei anumite persoane", w: ["Să povesteșă o întâmplare", "Să descrie un peisaj", "Să critice oamenii"] },
    { q: "Tonul unei scrisori personale este:", c: "Cald, apropiat și prietenos", w: ["Distant și formal", "Tare și ofensator", "Bland și neexpresiv"] },
    { q: "Care este diferența între scrisoare și email?", c: "Scrisoarea e pe hârtie, email-ul e digital", w: ["Nu există diferență", "Email-ul nu are semnătură", "Scrisoarea nu are dată"] },
  ];

  const questions: CurriculumMCQ[] = [];
  const combined = shuffle(questionPool, rng).slice(0, 7);

  for (const item of combined) {
    questions.push(createMCQ(topic, subtopic, item.q, item.c, item.w, rng));
  }

  return shuffle(questions, rng);
}

// ─── 5. TEXTUL INFORMATIV ────────────────────────────────────────────────────

function gen_textul_informativ_c4(seed: number): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const topic = "text_c4";
  const subtopic = "textul_informativ_c4";

  const questionPool = [
    { q: "Textul informativ se caracterizează prin:", c: "limbaj obiectiv și informații precise", w: ["limbaj subiectiv și emoții ale autorului", "rime și ritm regulat", "dialoguri între personaje imaginare"] },
    { q: "Care dintre următoarele este un text informativ?", c: "Un articol de enciclopedie despre delfini", w: ["Un basm despre un prinț și un dragon", "O scrisoare trimisă unui prieten", "O poezie despre primăvară"] },
    { q: "Ce scop are un text informativ?", c: "Să transmită informații corecte și clare despre un subiect", w: ["Să distreze cititorul cu o poveste imaginară", "Să convingă cititorul să adopte o anumită opinie", "Să descrie sentimentele autorului"] },
    { q: "Ce element important are de obicei un text informativ?", c: "Un titlu care indică subiectul textului", w: ["Rime la sfârșitul fiecărei propoziții", "Un conflict între personaje", "O formulă de adresare la început"] },
    { q: "Cum recunoști un text informativ?", c: "Prezintă fapte reale, verificabile, fără opinia autorului", w: ["Conține personaje cu puteri magice", "Este scris la persoana I și exprimă trăiri personale", "Are rimă și ritm ca o poezie"] },
    { q: "Limbajul unui text informativ este:", c: "Clar, precis și obiectiv", w: ["Poetic, cu multe figuri de stil", "Subiectiv, plin de sentimente și emoții", "Familiar, ca în conversațiile dintre prieteni"] },
    { q: "Care este scopul principal al unui text informativ?", c: "Să transmită cunoștințe și fapte verificate", w: ["Să emoționeze cititorul", "Să critice aspru", "Să distreze cu povești"] },
    { q: "Textul informativ poate fi:", c: "Un articol, o biografie, o definiție, o explicație", w: ["Doar o poveste", "Doar o poezie", "Doar o scrisoare"] },
    { q: "Ce nu trebuie să conțină textul informativ?", c: "Opiniile și sentimentele autorului", w: ["Faptele reale", "Informații precise", "Titluri clare"] },
    { q: "Care dintre acestea este o sursă de informații valabile?", c: "Enciclopedia, manualul, articolul științific", w: ["Basmul popular", "Legenda", "Poveștile imaginare"] },
    { q: "Cum trebuie structurat un text informativ?", c: "Cu introducere, dezvoltare și concluzie", w: ["Fără nicio ordine", "Cu rime și versuri", "Cu dialoguri doar"] },
    { q: "Care este tonul unui text informativ?", c: "Neutru și obiectiv", w: ["Emoțional și pasionat", "Ironic și critic", "Plin de umor"] },
    { q: "Ce rol au exemplele într-un text informativ?", c: "Să clarifice și să susțină informațiile principale", w: ["Să distreze cititorul", "Să lungească textul", "Să confunde ideile"] },
    { q: "Textul informativ folosește de obicei:", c: "Trecutu și prezentul în sens de datare a faptelor", w: ["Viitorul în mod predominant", "Condițional întotdeauna", "Imperativul exclusiv"] },
    { q: "Care este diferența dintre text informativ și narativ?", c: "Informatorul prezintă fapte, narrativul povestește întâmplări", w: ["Nu există diferență", "Informatorul povestește mai bine", "Narrativul este mai precis"] },
    { q: "De ce este important limbajul clar în textul informativ?", c: "Pentru ca cititorul să înțeleagă exact informația transmisă", w: ["Pentru a face textul mai lung", "Pentru a confunda cititorul", "Pentru a arăta erudițiunea autorului"] },
  ];

  const questions: CurriculumMCQ[] = [];
  const combined = shuffle(questionPool, rng).slice(0, 7);

  for (const item of combined) {
    questions.push(createMCQ(topic, subtopic, item.q, item.c, item.w, rng));
  }

  return shuffle(questions, rng);
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
