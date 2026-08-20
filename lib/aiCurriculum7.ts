import AI_K7_JSON from "./aiCurriculum7_data.json";
import { selectDiverseAIQuestions } from "./aiQuestionDiversity";
import type { KemiaTheme, KemiaQuestion } from "./kemiaCurriculumShared";

type MultiLang = { de: string; hu: string; ro: string; en: string };
type MultiLangOptions = { de: string[]; hu: string[]; ro: string[]; en: string[] };

interface RawQuestion {
  type: "mcq" | "typing";
  question: MultiLang;
  options?: MultiLangOptions;
  answer?: MultiLang | string;
  correct?: number;
}

const AI_K7_DATA: Record<string, RawQuestion[]> = { ...(AI_K7_JSON as any),
  "ai_k7_t1_1": [ // Mélyebb neural network
    { type: "mcq", question: { de: "Was ist ein 'Hidden Layer'?", hu: "Mi az a 'rejtett réteg' (hidden layer)?", ro: "Ce este un 'strat ascuns'?", en: "What is a 'hidden layer'?" }, options: { de: ["Schicht zwischen Input und Output", "Eine geheime Datei", "Der Ausschaltknopf", "Ein Backup"], hu: ["Bemenet és kimenet közötti réteg", "Egy titkos fájl", "A kikapcsoló gomb", "Egy biztonsági mentés"], ro: ["Stratul între intrare și ieșire", "Un fișier secret", "Butonul de oprire", "O copie de rezervă"], en: ["Layer between input and output", "A secret file", "The off button", "A backup"] }, correct: 0 },
    { type: "mcq", question: { de: "Was macht die Aktivierungsfunktion?", hu: "Mit csinál az aktivációs függvény?", ro: "Ce face funcția de activare?", en: "What does the activation function do?" }, options: { de: ["Bestimmt den Output eines Neurons", "Löscht Daten", "Kühlt den Prozessor", "Druckt Ergebnisse"], hu: ["Meghatározza a neuron kimenetét", "Adatokat töröl", "Hűti a processzort", "Eredményeket nyomtat"], ro: ["Determină ieșirea unui neuron", "Șterge datele", "Răcește procesorul", "Imprimă rezultatele"], en: ["Determines the output of a neuron", "Deletes data", "Cools the processor", "Prints results"] }, correct: 0 },
    { type: "mcq", question: { de: "Was ist Backpropagation?", hu: "Mi a visszaterjesztés (backpropagation)?", ro: "Ce este backpropagation?", en: "What is backpropagation?" }, options: { de: ["Lernmethode durch Fehlerkorrektur", "Ein Hardware-Fehler", "Internet-Verbindung", "Dateiformat"], hu: ["Hibajavításon alapuló tanulási módszer", "Hardverhiba", "Internetkapcsolat", "Fájlformátum"], ro: ["Metodă de învățare prin corectarea erorilor", "O eroare hardware", "Conexiune la internet", "Format de fișier"], en: ["Learning method via error correction", "A hardware error", "Internet connection", "File format"] }, correct: 0 },
    { type: "typing", question: { de: "Wie nennt man eine Schicht im Netzwerk?", hu: "Hogy hívják a hálózat egy szintjét?", ro: "Cum se numește un nivel din rețea?", en: "What is a level in a neural network called?" }, answer: { de: "Layer", hu: "Réteg", ro: "Strat", en: "Layer" } }
  ],
  "ai_k7_t1_2": [ // Transformer arch
    { type: "mcq", question: { de: "Was ist das Hauptmerkmal von Transformern?", hu: "Mi a Transformer architektúra fő jellemzője?", ro: "Care este caracteristica principală a arhitecturii Transformer?", en: "What is the main feature of Transformer architecture?" }, options: { de: ["Attention-Mechanismus", "Batteriebetrieb", "Räder", "Flügel"], hu: ["Figyelem (Attention) mechanizmus", "Akkumulátoros működés", "Kerekek", "Szárnyak"], ro: ["Mecanism de atenție", "Funcționare pe baterie", "Roți", "Aripi"], en: ["Attention mechanism", "Battery operation", "Wheels", "Wings"] }, correct: 0 },
    { type: "mcq", question: { de: "Wer hat das Transformer-Modell erfunden?", hu: "Ki fejlesztette ki a Transformer modellt?", ro: "Cine a dezvoltat modelul Transformer?", en: "Who developed the Transformer model?" }, options: { de: ["Google Research", "NASA", "McDonalds", "Ferrari"], hu: ["Google Research", "NASA", "McDonalds", "Ferrari"], ro: ["Google Research", "NASA", "McDonalds", "Ferrari"], en: ["Google Research", "NASA", "McDonalds", "Ferrari"] }, correct: 0 },
    { type: "typing", question: { de: "Wofür steht 'T' in GPT?", hu: "Mit jelent a 'T' a GPT-ben?", ro: "Ce înseamnă 'T' în GPT?", en: "What does 'T' stand for in GPT?" }, answer: "Transformer" }
  ],
  "ai_k7_t1_3": [ // LLM részletek
    { type: "mcq", question: { de: "Was sind Parameter in einem LLM?", hu: "Mik a paraméterek egy LLM-nél?", ro: "Ce sunt parametrii într-un LLM?", en: "What are parameters in an LLM?" }, options: { de: ["Einstellbare Gewichte", "Farben", "Nutzername", "Passwörter"], hu: ["Beállítható súlyok", "Színek", "Felhasználónév", "Jelszavak"], ro: ["Ponderi reglabile", "Culori", "Nume de utilizator", "Parole"], en: ["Adjustable weights", "Colors", "Username", "Passwords"] }, correct: 0 },
    { type: "mcq", question: { de: "Was ist ein Token?", hu: "Mi az a token?", ro: "Ce este un token?", en: "What is a token?" }, options: { de: ["Ein Wortstück", "Eine Münze", "Ein Kabel", "Ein Virus"], hu: ["Egy szórészlet", "Egy érme", "Egy kábel", "Egy vírus"], ro: ["O unitate de text", "O monedă", "Un cablu", "Un virus"], en: ["A piece of text/word", "A coin", "A cable", "A virus"] }, correct: 0 },
    { type: "typing", question: { de: "Wofür steht LLM?", hu: "Mit jelent az LLM rövidítés?", ro: "Ce înseamnă LLM?", en: "What does LLM stand for?" }, answer: { de: "Large Language Model", hu: "Large Language Model", ro: "Large Language Model", en: "Large Language Model" } }
  ],
  "ai_k7_t1_4": [ // RLHF
    { type: "mcq", question: { de: "Was bedeutet RLHF?", hu: "Mit jelent az RLHF?", ro: "Ce înseamnă RLHF?", en: "What does RLHF stand for?" }, options: { de: ["Lernen durch menschliches Feedback", "Raketen-Flug-Hilfe", "Realer Licht-Fokus", "Roboter-Lern-Hilfe"], hu: ["Tanulás emberi visszajelzéssel", "Rakéta-Lég-Harc", "Rendes Lap-Hiba", "Robot-Lánc-Híd"], ro: ["Învățare prin feedback uman", "Ajutor de zbor", "Focalizare lumină", "Ajutor robot"], en: ["Reinforcement Learning from Human Feedback", "Rocket Launch Help", "Real Light Focus", "Robot Learning Help"] }, correct: 0 },
    { type: "typing", question: { de: "Wer gibt beim RLHF Feedback?", hu: "Ki ad visszajelzést az RLHF során?", ro: "Cine oferă feedback în RLHF?", en: "Who provides feedback in RLHF?" }, answer: { de: "Menschen", hu: "Emberek", ro: "Oamenii", en: "Humans" } }
  ],
  "ai_k7_t1_5": [ // AI nyelvi modell fejlődés
    { type: "mcq", question: { de: "Welches Modell kam vor GPT-4?", hu: "Melyik modell előzte meg a GPT-4-et?", ro: "Ce model a precedat GPT-4?", en: "Which model preceded GPT-4?" }, options: { de: ["GPT-3", "GPT-5", "GPT-10", "GPT-X"], hu: ["GPT-3", "GPT-5", "GPT-10", "GPT-X"], ro: ["GPT-3", "GPT-5", "GPT-10", "GPT-X"], en: ["GPT-3", "GPT-5", "GPT-10", "GPT-X"] }, correct: 0 },
    { type: "typing", question: { de: "Wer entwickelte ChatGPT?", hu: "Ki fejlesztette a ChatGPT-t?", ro: "Cine a dezvoltat ChatGPT?", en: "Who developed ChatGPT?" }, answer: "OpenAI" }
  ],
  "ai_k7_t1_6": [ // Adat-annotáció
    { type: "mcq", question: { de: "Was ist Daten-Annotation?", hu: "Mi az adat-annotáció?", ro: "Ce este adnotarea datelor?", en: "What is data annotation?" }, options: { de: ["Daten beschriften", "Daten löschen", "Daten stehlen", "Daten kochen"], hu: ["Adatok felcímkézése", "Adatok törlése", "Adatok ellopása", "Adatok főzése"], ro: ["Etichetarea datelor", "Ștergerea datelor", "Furtul datelor", "Gătirea datelor"], en: ["Labeling data", "Deleting data", "Stealing data", "Cooking data"] }, correct: 0 },
    { type: "typing", question: { de: "Wie nennt man beschriftete Daten?", hu: "Hogy hívják a felcímkézett adatokat?", ro: "Cum se numesc datele etichetate?", en: "What are labeled data called?" }, answer: { de: "Labels", hu: "Címkék", ro: "Etichete", en: "Labels" } }
  ],
  "ai_k7_t2_1": [ // Hallucináció
    { type: "mcq", question: { de: "Was ist eine KI-Halluzination?", hu: "Mi az a MI hallucináció?", ro: "Ce este o halucinație IA?", en: "What is an AI hallucination?" }, options: { de: ["Falsche Fakten erfunden", "Ein Traum", "Ein Virus", "Hardware-Schaden"], hu: ["Kitalált hamis tények", "Egy álom", "Egy vírus", "Hardverhiba"], ro: ["Fapte false inventate", "Un vis", "Un virus", "Defecțiune hardware"], en: ["Inventing false facts", "A dream", "A virus", "Hardware failure"] }, correct: 0 },
    { type: "typing", question: { de: "Soll man KI-Infos immer prüfen?", hu: "Mindig ellenőrizni kell a MI infókat?", ro: "Trebuie verificate mereu informațiile IA?", en: "Should you always check AI info?" }, answer: { de: "Ja", hu: "Igen", ro: "Da", en: "Yes" } }
  ],
  "ai_k7_t2_2": [ // Bias
    { type: "mcq", question: { de: "Was bedeutet Bias in der KI?", hu: "Mit jelent a bias (torzítás) a MI-ben?", ro: "Ce înseamnă bias în IA?", en: "What does bias mean in AI?" }, options: { de: ["Voreingenommenheit", "Geschwindigkeit", "Farbe", "Gewicht"], hu: ["Elfogultság/Torzítás", "Sebesség", "Szín", "Súly"], ro: ["Prejudecată", "Viteză", "Culoare", "Greutate"], en: ["Bias/Prejudice", "Speed", "Color", "Weight"] }, correct: 0 },
    { type: "typing", question: { de: "Woher kommt Bias?", hu: "Honnan származik a bias?", ro: "De unde provine bias-ul?", en: "Where does bias come from?" }, answer: { de: "Daten", hu: "Adatokból", ro: "Date", en: "Data" } }
  ],
  "ai_k7_t2_3": [ // AI torzítás-tesztelés
    { type: "mcq", question: { de: "Wie testet man Bias?", hu: "Hogyan tesztelik a torzítást?", ro: "Cum se testează bias-ul?", en: "How is bias tested?" }, options: { de: ["Mit diversen Datensätzen", "Gar nicht", "Mit Wasser", "Mit Magneten"], hu: ["Változatos adatkészletekkel", "Sehogy", "Vízzel", "Mágnesekkel"], ro: ["Cu seturi de date diverse", "Deloc", "Cu apă", "Cu magneți"], en: ["With diverse datasets", "Not at all", "With water", "With magnets"] }, correct: 0 }
  ],
  "ai_k7_t2_4": [ // Deepfake részletek
    { type: "mcq", question: { de: "Was nutzt Deepfake?", hu: "Mit használ a Deepfake?", ro: "Ce folosește Deepfake?", en: "What does Deepfake use?" }, options: { de: ["GANs", "Excel", "Papier", "Stifte"], hu: ["GAN-okat", "Excelt", "Papírt", "Ceruzát"], ro: ["GAN-uri", "Excel", "Hârtie", "Creioane"], en: ["GANs (Generative Adversarial Networks)", "Excel", "Paper", "Pencils"] }, correct: 0 },
    { type: "typing", question: { de: "Wofür steht GAN?", hu: "Mit jelent a GAN?", ro: "Ce înseamnă GAN?", en: "What does GAN stand for?" }, answer: "Generative Adversarial Network" }
  ],
  "ai_k7_t2_5": [ // AI etika haladó
    { type: "mcq", question: { de: "Was ist Alignment?", hu: "Mi az az 'alignment' az etikában?", ro: "Ce este 'alignment' în etică?", en: "What is 'alignment' in ethics?" }, options: { de: ["Anpassung an menschliche Werte", "Gerade Linie", "Schriftart", "Akkulaufzeit"], hu: ["Az emberi értékekhez való igazítás", "Egyenes vonal", "Betűtípus", "Akkuidő"], ro: ["Alinierea cu valorile umane", "Linie dreaptă", "Font", "Durata bateriei"], en: ["Aligning with human values", "Straight line", "Font", "Battery life"] }, correct: 0 }
  ],
  "ai_k7_t2_6": [ // AI szabályozás részletek
    { type: "mcq", question: { de: "Was ist der EU AI Act?", hu: "Mi az az EU AI Act?", ro: "Ce este EU AI Act?", en: "What is the EU AI Act?" }, options: { de: ["Ein Gesetz zur KI-Regulierung", "Ein neues Spiel", "Ein Film", "Ein Roboter-Modell"], hu: ["Egy törvény a MI szabályozására", "Egy új játék", "Egy film", "Egy robotmodell"], ro: ["O lege pentru reglementarea IA", "Un joc nou", "Un film", "Un model de robot"], en: ["A law for AI regulation", "A new game", "A film", "A robot model"] }, correct: 0 }
  ],
  "ai_k7_t3_1": [ // AI medicina
    { type: "mcq", question: { de: "Wie hilft KI in der Medizin?", hu: "Hogyan segít a MI az orvoslásban?", ro: "Cum ajută IA în medicină?", en: "How does AI help in medicine?" }, options: { de: ["Diagnose von Röntgenbildern", "Taxi fahren", "Kochen", "Singen"], hu: ["Röntgenképek elemzése", "Taxizás", "Főzés", "Éneklés"], ro: ["Analiza radiografiilor", "Taximetrie", "Gătit", "Cântat"], en: ["Analyzing X-ray images", "Driving taxis", "Cooking", "Singing"] }, correct: 0 }
  ],
  "ai_k7_t3_2": [ // AI pénzügy
    { type: "mcq", question: { de: "Was macht KI im Finanzwesen?", hu: "Mit csinál a MI a pénzügyekben?", ro: "Ce face IA în finanțe?", en: "What does AI do in finance?" }, options: { de: ["Betrugserkennung", "Geld drucken", "Einkaufen", "Schlafen"], hu: ["Csalásfelismerés", "Pénznyomtatás", "Vásárlás", "Alvás"], ro: ["Detectarea fraudelor", "Tipărirea banilor", "Cumpărături", "Somn"], en: ["Fraud detection", "Printing money", "Shopping", "Sleep"] }, correct: 0 }
  ],
  "ai_k7_t3_3": [ // AI kiberbiztonság
    { type: "mcq", question: { de: "Wie hilft KI der Sicherheit?", hu: "Hogyan segít a MI a kiberbiztonságban?", ro: "Cum ajută IA securitatea cibernetică?", en: "How does AI help cybersecurity?" }, options: { de: ["Angriffe erkennen", "Passwörter löschen", "Monitor ausschalten", "Kaffee machen"], hu: ["Támadások felismerése", "Jelszavak törlése", "Monitor kikapcsolása", "Kávéfőzés"], ro: ["Detectarea atacurilor", "Ștergerea parolelor", "Oprirea monitorului", "Prepararea cafelei"], en: ["Detecting attacks", "Deleting passwords", "Turning off monitor", "Making coffee"] }, correct: 0 }
  ],
  "ai_k7_t3_4": [ // AI-human interakció
    { type: "mcq", question: { de: "Was ist NLP?", hu: "Mi az a NLP?", ro: "Ce este NLP?", en: "What is NLP?" }, options: { de: ["Natürliche Sprachverarbeitung", "Neues Licht-Programm", "Netz-Lauf-Plan", "Nacht-Lese-Protokoll"], hu: ["Természetes nyelvfeldolgozás", "Új fényprogram", "Hálózati terv", "Éjszakai olvasó"], ro: ["Procesarea limbajului natural", "Program nou de lumină", "Plan de rețea", "Protocol de noapte"], en: ["Natural Language Processing", "New Light Program", "Net Run Plan", "Night Reading Protocol"] }, correct: 0 }
  ],
  "ai_k7_t3_5": [ // AI jogi kérdések
    { type: "mcq", question: { de: "Wer besitzt das Urheberrecht an KI-Kunst?", hu: "Kié a szerzői jog a MI-művészetnél?", ro: "Cine deține drepturile de autor pentru arta IA?", en: "Who owns copyright for AI art?" }, options: { de: ["Oft rechtlich unklar", "Der Computer", "Niemand", "Die Steckdose"], hu: ["Gyakran jogilag tisztázatlan", "A számítógép", "Senki", "A konnektor"], ro: ["Adesea neclar juridic", "Calculatorul", "Nimeni", "Priza"], en: ["Often legally unclear", "The computer", "Nobody", "The power outlet"] }, correct: 0 }
  ],
  "ai_k7_t3_6": [ // AI környezeti költsége
    { type: "mcq", question: { de: "Was braucht KI-Training viel?", hu: "Mire van szüksége a MI-tanításnak?", ro: "De ce are nevoie mult antrenarea IA?", en: "What does AI training need a lot of?" }, options: { de: ["Energie und Wasser", "Sand", "Holz", "Papier"], hu: ["Energia és víz", "Homok", "Fa", "Papír"], ro: ["Energie și apă", "Nisip", "Lemn", "Hârtie"], en: ["Energy and water", "Sand", "Wood", "Paper"] }, correct: 0 }
  ],
  "ai_k7_t4_1": [ // AI kreativitás
    { type: "mcq", question: { de: "Kann KI kreativ sein?", hu: "Lehet a MI kreatív?", ro: "Poate IA să fie creativă?", en: "Can AI be creative?" }, options: { de: ["Ja, durch Kombination", "Nein, niemals", "Nur wenn es regnet", "Nur am Montag"], hu: ["Igen, kombinációk révén", "Nem, soha", "Csak ha esik", "Csak hétfőn"], ro: ["Da, prin combinații", "Nu, niciodată", "Doar când plouă", "Doar lunea"], en: ["Yes, through combinations", "No, never", "Only if it rains", "Only on Monday"] }, correct: 0 }
  ],
  "ai_k7_t4_2": [ // AI képgenerálás fejlődés
    { type: "mcq", question: { de: "Welches Tool macht Bilder?", hu: "Melyik eszköz készít képeket?", ro: "Care instrument face imagini?", en: "Which tool creates images?" }, options: { de: ["Midjourney", "Excel", "Word", "Spotify"], hu: ["Midjourney", "Excel", "Word", "Spotify"], ro: ["Midjourney", "Excel", "Word", "Spotify"], en: ["Midjourney", "Excel", "Word", "Spotify"] }, correct: 0 }
  ],
  "ai_k7_t4_3": [ // AI hanggenerálás
    { type: "mcq", question: { de: "Was ist Voice Cloning?", hu: "Mi a hangklónozás?", ro: "Ce este clonarea vocală?", en: "What is voice cloning?" }, options: { de: ["Stimme künstlich nachahmen", "Singen", "Schreien", "Flüstern"], hu: ["Hang mesterséges utánzása", "Éneklés", "Kiabálás", "Suttogás"], ro: ["Imitarea artificială a vocii", "Cântat", "Țipat", "Șoptit"], en: ["Artificially mimicking a voice", "Singing", "Screaming", "Whispering"] }, correct: 0 }
  ],
  "ai_k7_t4_4": [ // AI autonóm rendszerek
    { type: "mcq", question: { de: "Was ist ein autonomes System?", hu: "Mi az az autonóm rendszer?", ro: "Ce este un sistem autonom?", en: "What is an autonomous system?" }, options: { de: ["Handelt selbstständig", "Braucht Fernsteuerung", "Hat immer Räder", "Ist aus Gold"], hu: ["Önállóan cselekszik", "Távirányító kell hozzá", "Mindig van kereke", "Aranyból van"], ro: ["Acționează independent", "Are nevoie de telecomandă", "Are mereu roți", "Este din aur"], en: ["Acts independently", "Needs remote control", "Always has wheels", "Is made of gold"] }, correct: 0 }
  ],
  "ai_k7_t4_5": [ // AI filozófia alap
    { type: "mcq", question: { de: "Was ist der Turing-Test?", hu: "Mi a Turing-teszt?", ro: "Ce este testul Turing?", en: "What is the Turing test?" }, options: { de: ["Prüfung der Intelligenz", "Ein Sehtest", "Ein Hörtest", "Ein Lauftest"], hu: ["Az intelligencia vizsgálata", "Látásvizsgálat", "Hallásvizsgálat", "Futóteszt"], ro: ["Testarea inteligenței", "Test de vedere", "Test de auz", "Test de alergare"], en: ["Testing intelligence", "Vision test", "Hearing test", "Running test"] }, correct: 0 }
  ],
  "ai_k7_t4_6": [ // AI fegyverek
    { type: "mcq", question: { de: "Was sind LAWS?", hu: "Mik azok a LAWS fegyverek?", ro: "Ce sunt armele LAWS?", en: "What are LAWS?" }, options: { de: ["Autonome Waffensysteme", "Lustige Spiele", "Wasserpistolen", "Laserschwerter"], hu: ["Autonóm fegyverrendszerek", "Vicces játékok", "Vízipisztolyok", "Lézerkardok"], ro: ["Sisteme de arme autonome", "Jocuri amuzante", "Pistoale cu apă", "Săbii laser"], en: ["Lethal Autonomous Weapons Systems", "Funny games", "Water pistols", "Lightsabers"] }, correct: 0 }
  ]
};

function generateFinalQuestions(subId: string): RawQuestion[] {
  // Gazdag JSON-tartalom (a régi inline-shadow + 25/10-ciklus elárnyékolta/duplikálta).
  const fromJson = Array.isArray((AI_K7_JSON as any)[subId]) ? ((AI_K7_JSON as any)[subId] as RawQuestion[]) : [];
  const fromInline = Array.isArray(AI_K7_DATA[subId]) ? AI_K7_DATA[subId] : [];
  const merged = fromJson.length >= fromInline.length ? [...fromJson, ...fromInline] : [...fromInline, ...fromJson];
  const seen = new Set<string>();
  const out: RawQuestion[] = [];
  for (const q of merged) {
    const ql = (q as any)?.question;
    const key = (ql && ql.hu) || (typeof ql === "string" ? ql : JSON.stringify(q));
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(q);
  }
  if (out.length > 0) return out;
  const fb = AI_K7_DATA["ai_k7_t1_1"];
  return Array.isArray(fb) ? fb : [];
}

export const AI_K7_CURRICULUM: KemiaTheme[] = [
  {
    id: "ai_k7_th1",
    name: "AI Architektúrák",
    icon: "🏗️",
    color: "#3B82F6",
    subtopics: [
      { id: "ai_k7_t1_1", name: { de: "Deep Neural Networks", hu: "Mélyebb neural network", ro: "Rețele neuronale profunde", en: "Deep Neural Networks" }, questions: [], hasGenerator: false },
      { id: "ai_k7_t1_2", name: { de: "Transformer Arch", hu: "Transformer arch", ro: "Arhitectura Transformer", en: "Transformer Arch" }, questions: [], hasGenerator: false },
      { id: "ai_k7_t1_3", name: { de: "LLM Details", hu: "LLM részletek", ro: "Detalii LLM", en: "LLM Details" }, questions: [], hasGenerator: false },
      { id: "ai_k7_t1_4", name: { de: "RLHF", hu: "RLHF folyamat", ro: "RLHF", en: "RLHF" }, questions: [], hasGenerator: false },
      { id: "ai_k7_t1_5", name: { de: "Modellentwicklung", hu: "AI nyelvi modell fejlődés", ro: "Evoluția modelelor lingvistice", en: "Model Development" }, questions: [], hasGenerator: false },
      { id: "ai_k7_t1_6", name: { de: "Datenannotation", hu: "Adat-annotáció", ro: "Adnotarea datelor", en: "Data Annotation" }, questions: [], hasGenerator: false }
    ]
  },
  {
    id: "ai_k7_th2",
    name: "AI Kihívások és Etika",
    icon: "⚖️",
    color: "#EF4444",
    subtopics: [
      { id: "ai_k7_t2_1", name: { de: "Halluzination", hu: "Hallucináció", ro: "Halucinații", en: "Hallucination" }, questions: [], hasGenerator: false },
      { id: "ai_k7_t2_2", name: { de: "Bias", hu: "Bias (torzítás)", ro: "Bias", en: "Bias" }, questions: [], hasGenerator: false },
      { id: "ai_k7_t2_3", name: { de: "Bias Testing", hu: "AI torzítás-tesztelés", ro: "Testarea bias-ului", en: "Bias Testing" }, questions: [], hasGenerator: false },
      { id: "ai_k7_t2_4", name: { de: "Deepfake Details", hu: "Deepfake részletek", ro: "Detalii Deepfake", en: "Deepfake Details" }, questions: [], hasGenerator: false },
      { id: "ai_k7_t2_5", name: { de: "Ethik für Fortgeschrittene", hu: "AI etika haladó", ro: "Etică IA avansată", en: "Advanced AI Ethics" }, questions: [], hasGenerator: false },
      { id: "ai_k7_t2_6", name: { de: "Regulierung", hu: "AI szabályozás részletek", ro: "Reglementare IA", en: "AI Regulation" }, questions: [], hasGenerator: false }
    ]
  },
  {
    id: "ai_k7_th3",
    name: "AI az Iparban",
    icon: "🏭",
    color: "#10B981",
    subtopics: [
      { id: "ai_k7_t3_1", name: { de: "Medizin", hu: "AI medicina", ro: "Medicină IA", en: "AI Medicine" }, questions: [], hasGenerator: false },
      { id: "ai_k7_t3_2", name: { de: "Finanzen", hu: "AI pénzügy", ro: "Finanțe IA", en: "AI Finance" }, questions: [], hasGenerator: false },
      { id: "ai_k7_t3_3", name: { de: "Cybersicherheit", hu: "AI kiberbiztonság", ro: "Securitate cibernetică IA", en: "AI Cybersecurity" }, questions: [], hasGenerator: false },
      { id: "ai_k7_t3_4", name: { de: "Mensch-Maschine", hu: "AI-human interakció", ro: "Interacțiune om-mașină", en: "Human-AI Interaction" }, questions: [], hasGenerator: false },
      { id: "ai_k7_t3_5", name: { de: "Rechtsfragen", hu: "AI jogi kérdések", ro: "Probleme juridice IA", en: "AI Legal Issues" }, questions: [], hasGenerator: false },
      { id: "ai_k7_t3_6", name: { de: "Umweltkosten", hu: "AI környezeti költsége", ro: "Costul ecologic al IA", en: "Environmental Cost" }, questions: [], hasGenerator: false }
    ]
  },
  {
    id: "ai_k7_th4",
    name: "Kreativitás és Jövő",
    icon: "🔮",
    color: "#8B5CF6",
    subtopics: [
      { id: "ai_k7_t4_1", name: { de: "Kreativität", hu: "AI kreativitás", ro: "Creativitate IA", en: "AI Creativity" }, questions: [], hasGenerator: false },
      { id: "ai_k7_t4_2", name: { de: "Bildgenerierung", hu: "AI képgenerálás fejlődés", ro: "Evoluția generării de imagini", en: "Image Gen Progress" }, questions: [], hasGenerator: false },
      { id: "ai_k7_t4_3", name: { de: "Audio/Stimme", hu: "AI hanggenerálás", ro: "Generare audio IA", en: "AI Voice Gen" }, questions: [], hasGenerator: false },
      { id: "ai_k7_t4_4", name: { de: "Autonome Systeme", hu: "AI autonóm rendszerek", ro: "Sisteme autonome", en: "Autonomous Systems" }, questions: [], hasGenerator: false },
      { id: "ai_k7_t4_5", name: { de: "Philosophie", hu: "AI filozófia alap", ro: "Filozofia IA", en: "AI Philosophy" }, questions: [], hasGenerator: false },
      { id: "ai_k7_t4_6", name: { de: "KI-Waffen", hu: "AI fegyverek", ro: "Arme IA", en: "AI Weapons" }, questions: [], hasGenerator: false }
    ]
  }
];

AI_K7_CURRICULUM.forEach(theme => {
  theme.subtopics.forEach(sub => {
    const raw = generateFinalQuestions(sub.id);
    sub.questions = raw.map((q) => {
      if (q.type === "mcq") {
        return {
          type: "mcq",
          topic: "ai",
          subtopic: sub.id,
          question: q.question.hu,
          options: q.options?.hu || [],
          correct: q.correct || 0,
          _lang: {
            de: { q: q.question.de, opts: q.options?.de },
            hu: { q: q.question.hu, opts: q.options?.hu },
            ro: { q: q.question.ro, opts: q.options?.ro },
            en: { q: q.question.en, opts: q.options?.en }
          }
        } as any;
      } else {
        return {
          type: "typing",
          topic: "ai",
          subtopic: sub.id,
          question: q.question.hu,
          answer: q.answer && typeof q.answer === 'object' ? q.answer.hu : (q.answer || ""),
          _lang: {
            de: { q: q.question.de, ans: q.answer && typeof q.answer === 'object' ? q.answer.de : q.answer },
            hu: { q: q.question.hu, ans: q.answer && typeof q.answer === 'object' ? q.answer.hu : q.answer },
            ro: { q: q.question.ro, ans: q.answer && typeof q.answer === 'object' ? q.answer.ro : q.answer },
            en: { q: q.question.en, ans: q.answer && typeof q.answer === 'object' ? q.answer.en : q.answer }
          }
        } as any;
      }
    });
  });
});

export function getAIK7Questions(subtopicIds: string[], count = 10, lang = "hu"): KemiaQuestion[] {
  let pool: any[] = [];
  AI_K7_CURRICULUM.forEach(theme => {
    theme.subtopics.forEach(sub => {
      if (subtopicIds.includes(sub.id)) {
        sub.questions.forEach((q: any) => {
          const localized = { ...q };
          const lData = q._lang?.[lang] || q._lang?.["en"] || q._lang?.["hu"];
          if (lData) {
            localized.question = lData.q;
            if (q.type === "mcq") localized.options = lData.opts;
            else localized.answer = lData.ans;
          }
          pool.push(localized);
        });
      }
    });
  });
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return selectDiverseAIQuestions(pool, count);
}
