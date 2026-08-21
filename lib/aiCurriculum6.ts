import AI_K6_JSON from "./aiCurriculum6_data.json";
import { pickDiverse } from "./testDiversity";
import { dedupeAiQuestions } from "./aiQuestionDiversity";
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

const AI_K6_DATA: Record<string, RawQuestion[]> = { ...(AI_K6_JSON as any),
  "ai_k6_t1_1": [ // Gépi tanulás mélyebben
    { type: "mcq", question: { de: "Was ist überwachtes Lernen?", hu: "Mi a felügyelt tanulás?", ro: "Ce este învățarea supravegheată?", en: "What is supervised learning?" }, options: { de: ["Lernen mit beschrifteten Daten", "Lernen ohne Hilfe", "Lernen durch Spielen", "Lernen durch Schlafen"], hu: ["Tanulás címkézett adatokkal", "Tanulás segítség nélkül", "Tanulás játékkal", "Tanulás alvás közben"], ro: ["Învățare cu date etichetate", "Învățare fără ajutor", "Învățare prin joc", "Învățare prin somn"], en: ["Learning with labeled data", "Learning without help", "Learning by playing", "Learning by sleeping"] }, correct: 0 },
    { type: "mcq", question: { de: "Was ist ein Algorithmus?", hu: "Mi az algoritmus?", ro: "Ce este un algoritm?", en: "What is an algorithm?" }, options: { de: ["Eine Schritt-für-Schritt-Anleitung", "Ein Computergehäuse", "Ein Bildschirm", "Ein Internetkabel"], hu: ["Egy lépésről lépésre követhető útmutató", "Egy számítógépház", "Egy képernyő", "Egy internetkábel"], ro: ["O instrucțiune pas cu pas", "O carcasă de calculator", "Un ecran", "Un cablu de internet"], en: ["A step-by-step instruction", "A computer case", "A screen", "An internet cable"] }, correct: 0 },
    { type: "typing", question: { de: "Wie nennt man das Lernen der KI?", hu: "Hogy hívják a gép tanulását?", ro: "Cum se numește învățarea mașinii?", en: "What is machine learning called in short?" }, answer: { de: "Machine Learning", hu: "Gépi tanulás", ro: "Învățare automată", en: "Machine Learning" } },
    { type: "typing", question: { de: "Was braucht die KI zum Lernen?", hu: "Mire van szüksége a MI-nek a tanuláshoz?", ro: "De ce are nevoie IA pentru a învăța?", en: "What does AI need to learn?" }, answer: { de: "Daten", hu: "Adatok", ro: "Date", en: "Data" } }
  ],
  "ai_k6_t1_2": [ // Neurális hálózat alap
    { type: "mcq", question: { de: "Was inspiriert neuronale Netze?", hu: "Mi inspirálta a neurális hálózatokat?", ro: "Ce a inspirat rețelele neuronale?", en: "What inspired neural networks?" }, options: { de: ["Das menschliche Gehirn", "Ein Spinnennetz", "Ein Fischernetz", "Ein Autobahnnetz"], hu: ["Az emberi agy", "Egy pókháló", "Egy halászháló", "Egy autópálya-háló"], ro: ["Creierul uman", "O pânză de păianjen", "O plasă de pescuit", "O rețea de autostrăzi"], en: ["The human brain", "A spider web", "A fishing net", "A highway network"] }, correct: 0 },
    { type: "typing", question: { de: "Wie nennt man die Grundeinheit?", hu: "Hogy hívják az alapegységet?", ro: "Cum se numește unitatea de bază?", en: "What is the basic unit called?" }, answer: { de: "Neuron", hu: "Neuron", ro: "Neuron", en: "Neuron" } }
  ],
  "ai_k6_t1_3": [ // Adatok
    { type: "mcq", question: { de: "Warum sind Daten wichtig?", hu: "Miért fontosak az adatok?", ro: "De ce sunt importante datele?", en: "Why is data important?" }, options: { de: ["Zum Trainieren der KI", "Zum Kühlen des PCs", "Zum Tippen", "Zum Drucken"], hu: ["A MI tanításához", "A PC hűtéséhez", "Gépeléshez", "Nyomtatáshoz"], ro: ["Pentru antrenarea IA", "Pentru răcirea PC-ului", "Pentru tastare", "Pentru imprimare"], en: ["For training the AI", "For cooling the PC", "For typing", "For printing"] }, correct: 0 }
  ],
  "ai_k6_t1_4": [ // Prompt writing
    { type: "mcq", question: { de: "Was ist ein Prompt?", hu: "Mi az a prompt?", ro: "Ce este un prompt?", en: "What is a prompt?" }, options: { de: ["Eine Anweisung an die KI", "Ein neues Kabel", "Ein Virus", "Ein Passwort"], hu: ["Egy utasítás a MI-nek", "Egy új kábel", "Egy vírus", "Egy jelszó"], ro: ["O instrucțiune pentru IA", "Un cablu nou", "Un virus", "O parolă"], en: ["An instruction for the AI", "A new cable", "A virus", "A password"] }, correct: 0 }
  ],
  "ai_k6_t1_5": [ // Képgenerálás
    { type: "mcq", question: { de: "Was macht eine Bild-KI?", hu: "Mit csinál egy kép-MI?", ro: "Ce face o IA de imagini?", en: "What does an image AI do?" }, options: { de: ["Erstellt Bilder aus Text", "Kocht Kaffee", "Putzt das Zimmer", "Spielt Musik"], hu: ["Képeket készít szövegből", "Kávét főz", "Takarít", "Zenét játszik"], ro: ["Creează imagini din text", "Face cafea", "Face curat", "Redă muzică"], en: ["Creates images from text", "Makes coffee", "Cleans the room", "Plays music"] }, correct: 0 }
  ],
  "ai_k6_t1_6": [ // Deepfake
    { type: "mcq", question: { de: "Was ist ein Deepfake?", hu: "Mi az a deepfake?", ro: "Ce este un deepfake?", en: "What is a deepfake?" }, options: { de: ["Ein manipuliertes Video", "Ein echtes Foto", "Ein altes Buch", "Ein neuer Computer"], hu: ["Egy manipulált videó", "Egy valódi fotó", "Egy régi könyv", "Egy új számítógép"], ro: ["Un videoclip manipulat", "O fotografie reală", "O carte veche", "Un calculator nou"], en: ["A manipulated video", "A real photo", "An old book", "A new computer"] }, correct: 0 }
  ],
  "ai_k6_t2_1": [ // AI tools
    { type: "mcq", question: { de: "Welches Tool schreibt Texte?", hu: "Melyik eszköz ír szöveget?", ro: "Care instrument scrie texte?", en: "Which tool writes texts?" }, options: { de: ["ChatGPT", "Photoshop", "Excel", "Spotify"], hu: ["ChatGPT", "Photoshop", "Excel", "Spotify"], ro: ["ChatGPT", "Photoshop", "Excel", "Spotify"], en: ["ChatGPT", "Photoshop", "Excel", "Spotify"] }, correct: 0 }
  ],
  "ai_k6_t2_2": [ // AI hibák
    { type: "mcq", question: { de: "Was ist eine Halluzination bei KI?", hu: "Mi a hallucináció a MI-nél?", ro: "Ce este o halucinație la IA?", en: "What is a hallucination in AI?" }, options: { de: ["Die KI erfindet Fakten", "Die KI schläft", "Die KI ist krank", "Die KI lacht"], hu: ["A MI tényeket talál ki", "A MI alszik", "A MI beteg", "A MI nevet"], ro: ["IA inventează fapte", "IA doarme", "IA este bolnavă", "IA râde"], en: ["AI invents facts", "AI sleeps", "AI is sick", "AI laughs"] }, correct: 0 }
  ],
  "ai_k6_t2_3": [ // AI szabályozás
    { type: "mcq", question: { de: "Warum braucht KI Regeln?", hu: "Miért kellenek szabályok a MI-nek?", ro: "De ce are nevoie IA de reguli?", en: "Why does AI need rules?" }, options: { de: ["Für die Sicherheit", "Zum Spaß", "Weil es regnet", "Damit sie schneller ist"], hu: ["A biztonság miatt", "Szórakozásból", "Mert esik az eső", "Hogy gyorsabb legyen"], ro: ["Pentru siguranță", "Pentru distracție", "Pentru că plouă", "Pentru a fi mai rapidă"], en: ["For safety", "For fun", "Because it rains", "To be faster"] }, correct: 0 }
  ],
  "ai_k6_t2_4": [ // Adatvédelem
    { type: "mcq", question: { de: "Was ist Datenschutz?", hu: "Mi az adatvédelem?", ro: "Ce este protecția datelor?", en: "What is data privacy?" }, options: { de: ["Schutz persönlicher Infos", "Einen USB-Stick putzen", "Den PC abschalten", "Ein neues Passwort kaufen"], hu: ["Személyes adatok védelme", "USB kulcs tisztítása", "PC kikapcsolása", "Új jelszó vásárlása"], ro: ["Protecția datelor personale", "Curățarea unui stick USB", "Oprirea PC-ului", "Cumpărarea unei parole noi"], en: ["Protection of personal info", "Cleaning a USB stick", "Turning off the PC", "Buying a new password"] }, correct: 0 }
  ],
  "ai_k6_t2_5": [ // AI orvoslás
    { type: "mcq", question: { de: "Wie hilft KI Ärzten?", hu: "Hogyan segít a MI az orvosoknak?", ro: "Cum ajută IA medicii?", en: "How does AI help doctors?" }, options: { de: ["Krankheiten erkennen", "Essen kochen", "Auto waschen", "Witze erzählen"], hu: ["Betegségek felismerése", "Étel főzése", "Autómosás", "Vicc mesélés"], ro: ["Recunoașterea bolilor", "Gătirea mâncării", "Spălarea mașinii", "Spunerea de glume"], en: ["Recognizing diseases", "Cooking food", "Washing cars", "Telling jokes"] }, correct: 0 }
  ],
  "ai_k6_t2_6": [ // AI kereskedelem
    { type: "mcq", question: { de: "Was ist ein Empfehlungssystem?", hu: "Mi az ajánlórendszer?", ro: "Ce este un sistem de recomandare?", en: "What is a recommender system?" }, options: { de: ["Schlägt Produkte vor", "Löscht Dateien", "Macht Hausaufgaben", "Sperrt das Handy"], hu: ["Termékeket javasol", "Fájlokat töröl", "Házit ír", "Lezárja a telefont"], ro: ["Sugerează produse", "Șterge fișiere", "Face temele", "Blochează telefonul"], en: ["Suggests products", "Deletes files", "Does homework", "Locks the phone"] }, correct: 0 }
  ],
  "ai_k6_t3_1": [ // AI közlekedés
    { type: "mcq", question: { de: "Was ist ein autonomes Fahrzeug?", hu: "Mi az önvezető jármű?", ro: "Ce este un vehicul autonom?", en: "What is an autonomous vehicle?" }, options: { de: ["Fährt ohne Fahrer", "Hat keine Räder", "Fliegt immer", "Ist aus Glas"], hu: ["Vezető nélkül megy", "Nincs kereke", "Mindig repül", "Üvegből van"], ro: ["Merge fără șofer", "Nu are roți", "Zboară mereu", "Este din sticlă"], en: ["Drives without a driver", "Has no wheels", "Always flies", "Is made of glass"] }, correct: 0 }
  ],
  "ai_k6_t3_2": [ // AI zene
    { type: "mcq", question: { de: "Kann KI Musik komponieren?", hu: "Tud a MI zenét szerezni?", ro: "Poate IA să compună muzică?", en: "Can AI compose music?" }, options: { de: ["Ja", "Nein", "Nur Schlagzeug", "Nur im Radio"], hu: ["Igen", "Nem", "Csak dobolni", "Csak a rádióban"], ro: ["Da", "Nu", "Doar tobe", "Doar la radio"], en: ["Yes", "No", "Only drums", "Only on the radio"] }, correct: 0 }
  ],
  "ai_k6_t3_3": [ // AI fordítás
    { type: "mcq", question: { de: "Was macht ein KI-Übersetzer?", hu: "Mit csinál egy MI fordító?", ro: "Ce face un traducător IA?", en: "What does an AI translator do?" }, options: { de: ["Übersetzt Sprachen", "Schreibt Lieder", "Malt Bilder", "Tanzt"], hu: ["Nyelveket fordít", "Dalokat ír", "Képeket fest", "Táncol"], ro: ["Traduce limbi", "Scrie cântece", "Pictează imagini", "Dansează"], en: ["Translates languages", "Writes songs", "Paints pictures", "Dances"] }, correct: 0 }
  ],
  "ai_k6_t3_4": [ // AI játékokban
    { type: "mcq", question: { de: "Was ist ein NPC?", hu: "Mi az a NPC?", ro: "Ce este un NPC?", en: "What is an NPC?" }, options: { de: ["Nicht-Spieler-Charakter", "Neuer PC", "Netz-PC", "Nacht-PC"], hu: ["Nem játékos karakter", "Új PC", "Hálózati PC", "Éjszakai PC"], ro: ["Personaj non-jucător", "PC nou", "PC de rețea", "PC de noapte"], en: ["Non-Player Character", "New PC", "Net PC", "Night PC"] }, correct: 0 }
  ],
  "ai_k6_t3_5": [ // AI etika
    { type: "mcq", question: { de: "Was untersucht die KI-Ethik?", hu: "Mit vizsgál a MI etika?", ro: "Ce analizează etica IA?", en: "What does AI ethics examine?" }, options: { de: ["Was richtig und falsch ist", "Wie man schneller tippt", "Wie man PCs baut", "Die Farbe von Kabeln"], hu: ["Mi a helyes és helytelen", "Hogyan gépeljünk gyorsabban", "Hogyan építsünk PC-t", "A kábelek színét"], ro: ["Ce este corect și greșit", "Cum să tastezi mai rapid", "Cum să construiești PC-uri", "Culoarea cablurilor"], en: ["What is right and wrong", "How to type faster", "How to build PCs", "The color of cables"] }, correct: 0 }
  ],
  "ai_k6_t3_6": [ // AI biztonság
    { type: "mcq", question: { de: "Was ist KI-Sicherheit?", hu: "Mi a MI biztonság?", ro: "Ce este siguranța IA?", en: "What is AI safety?" }, options: { de: ["Schutz vor KI-Schäden", "Ein Passwort für den Monitor", "Ein Schloss am PC", "Den PC nicht einschalten"], hu: ["Védelem a MI károk ellen", "Jelszó a monitorhoz", "Zár a PC-re", "A PC be nem kapcsolása"], ro: ["Protecție împotriva daunelor IA", "O parolă pentru monitor", "Un lacăt pe PC", "Neutilizarea PC-ului"], en: ["Protection from AI harm", "A password for the monitor", "A lock on the PC", "Not turning on the PC"] }, correct: 0 }
  ],
  "ai_k6_t4_1": [ // AI iskolában
    { type: "mcq", question: { de: "Wie hilft KI beim Lernen?", hu: "Hogyan segít a MI a tanulásban?", ro: "Cum ajută IA la învățare?", en: "How does AI help with learning?" }, options: { de: ["Erklärt schwierige Themen", "Macht die Pause länger", "Isst das Pausenbrot", "Schließt die Schule"], hu: ["Elmagyaráz nehéz témákat", "Hosszabb szünetet ad", "Eszik az uzsonnából", "Bezárja az iskolát"], ro: ["Explică teme dificile", "Face pauza mai lungă", "Mănâncă pachetul", "Închide școala"], en: ["Explains difficult topics", "Makes breaks longer", "Eats the lunch", "Closes the school"] }, correct: 0 }
  ],
  "ai_k6_t4_2": [ // AI otthon
    { type: "mcq", question: { de: "Was ist ein Smart Home?", hu: "Mi az az okosotthon?", ro: "Ce este o casă inteligentă?", en: "What is a smart home?" }, options: { de: ["Ein vernetztes Zuhause", "Ein Haus aus Gold", "Ein fliegendes Haus", "Ein Haus ohne Fenster"], hu: ["Egy hálózatba kötött otthon", "Aranyból készült ház", "Repülő ház", "Ablak nélküli ház"], ro: ["O casă interconectată", "O casă din aur", "O casă zburătoare", "O casă fără ferestre"], en: ["A connected home", "A house of gold", "A flying house", "A house without windows"] }, correct: 0 }
  ],
  "ai_k6_t4_3": [ // AI munka
    { type: "mcq", question: { de: "Wie verändert KI Berufe?", hu: "Hogyan változtatja meg a MI a munkát?", ro: "Cum schimbă IA locurile de muncă?", en: "How does AI change jobs?" }, options: { de: ["Automatisiert Aufgaben", "Alle gehen in Rente", "Niemand arbeitet mehr", "Roboter essen alles"], hu: ["Automatizál feladatokat", "Mindenki nyugdíjba megy", "Senki nem dolgozik többet", "A robotok megesznek mindent"], ro: ["Automatizează sarcini", "Toată lumea se pensionează", "Nimeni nu mai lucrează", "Roboții mănâncă tot"], en: ["Automates tasks", "Everyone retires", "No one works anymore", "Robots eat everything"] }, correct: 0 }
  ],
  "ai_k6_t4_4": [ // AI tudomány
    { type: "mcq", question: { de: "Was macht KI in der Wissenschaft?", hu: "Mit csinál a MI a tudományban?", ro: "Ce face IA în știință?", en: "What does AI do in science?" }, options: { de: ["Analysiert große Datenmengen", "Macht Ferien", "Liest Comics", "Schläft im Labor"], hu: ["Nagy adatmennyiséget elemez", "Nyaralni megy", "Képregényt olvas", "Alszik a laborban"], ro: ["Analizează volume mari de date", "Merge în vacanță", "Citește benzi desenate", "Doarme în laborator"], en: ["Analyzes large data sets", "Goes on vacation", "Reads comics", "Sleeps in the lab"] }, correct: 0 }
  ],
  "ai_k6_t4_5": [ // AI környezetvédelem
    { type: "mcq", question: { de: "Wie hilft KI der Umwelt?", hu: "Hogyan segít a MI a környezetnek?", ro: "Cum ajută IA mediul?", en: "How does AI help the environment?" }, options: { de: ["Optimiert Energieverbrauch", "Macht mehr Müll", "Verschwendet Wasser", "Löscht den Wald"], hu: ["Optimalizálja az energiafogyasztást", "Több szemetet csinál", "Pazarolja a vizet", "Törli az erdőt"], ro: ["Optimizează consumul de energie", "Face mai mult gunoi", "Irosește apa", "Șterge pădurea"], en: ["Optimizes energy use", "Makes more trash", "Wastes water", "Deletes the forest"] }, correct: 0 }
  ],
  "ai_k6_t4_6": [ // AI és demokrácia
    { type: "mcq", question: { de: "Was ist eine Gefahr für die Demokratie?", hu: "Mi a veszély a demokráciára nézve?", ro: "Ce este un pericol pentru democrație?", en: "What is a danger to democracy?" }, options: { de: ["KI-generierte Fake News", "Mehr Computer", "Schnelleres Internet", "Bessere Drucker"], hu: ["MI generálta álhírek", "Több számítógép", "Gyorsabb internet", "Jobb nyomtatók"], ro: ["Știri false generate de IA", "Mai multe calculatoare", "Internet mai rapid", "Imprimante mai bune"], en: ["AI generated fake news", "More computers", "Faster internet", "Better printers"] }, correct: 0 }
  ]
};

// Content generator function to ensure 25 MCQ + 10 Typing per subtopic
function generateFinalQuestions(subId: string): RawQuestion[] {
  // A gazdag JSON-tartalmat használjuk (a régi inline-shadow + 25/10-ciklus elárnyékolta és
  // duplikálta). JSON + esetleges inline-extra egyesítve, kérdés-szöveg szerint dedupolva.
  const fromJson = Array.isArray((AI_K6_JSON as any)[subId]) ? ((AI_K6_JSON as any)[subId] as RawQuestion[]) : [];
  const fromInline = Array.isArray(AI_K6_DATA[subId]) ? AI_K6_DATA[subId] : [];
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
  const fb = AI_K6_DATA["ai_k6_t1_1"];
  return Array.isArray(fb) ? fb : [];
}

export const AI_K6_CURRICULUM: KemiaTheme[] = [
  {
    id: "ai_k6_th1",
    name: "AI Alapok & Technológia",
    icon: "🤖",
    color: "#3B82F6",
    subtopics: [
      { id: "ai_k6_t1_1", name: { de: "Machine Learning", hu: "Gépi tanulás mélyebben", ro: "Învățare automată", en: "Machine Learning Deep" }, questions: [], hasGenerator: false },
      { id: "ai_k6_t1_2", name: { de: "Neuronale Netze", hu: "Neural network alap", ro: "Rețele neuronale", en: "Neural Network Basics" }, questions: [], hasGenerator: false },
      { id: "ai_k6_t1_3", name: { de: "KI Daten", hu: "Adatok szerepe", ro: "Date IA", en: "AI Data" }, questions: [], hasGenerator: false },
      { id: "ai_k6_t1_4", name: { de: "Prompt Writing", hu: "Prompt írás", ro: "Scriere Prompt", en: "Prompt Writing" }, questions: [], hasGenerator: false },
      { id: "ai_k6_t1_5", name: { de: "Bildgenerierung", hu: "Képgenerálás", ro: "Generare Imagini", en: "Image Generation" }, questions: [], hasGenerator: false },
      { id: "ai_k6_t1_6", name: { de: "Deepfake", hu: "Deepfake videók", ro: "Deepfake", en: "Deepfake" }, questions: [], hasGenerator: false }
    ]
  },
  {
    id: "ai_k6_th2",
    name: "Eszközök & Társadalom",
    icon: "🛠️",
    color: "#10B981",
    subtopics: [
      { id: "ai_k6_t2_1", name: { de: "KI Tools", hu: "AI eszközök", ro: "Instrumente IA", en: "AI Tools" }, questions: [], hasGenerator: false },
      { id: "ai_k6_t2_2", name: { de: "KI Fehler", hu: "AI hibák", ro: "Erori IA", en: "AI Errors" }, questions: [], hasGenerator: false },
      { id: "ai_k6_t2_3", name: { de: "KI Regeln", hu: "AI szabályozás", ro: "Reglementare IA", en: "AI Regulation" }, questions: [], hasGenerator: false },
      { id: "ai_k6_t2_4", name: { de: "Datenschutz", hu: "Adatvédelem", ro: "Confidențialitate", en: "Privacy" }, questions: [], hasGenerator: false },
      { id: "ai_k6_t2_5", name: { de: "Medizin", hu: "AI az orvoslásban", ro: "Medicină", en: "Medicine" }, questions: [], hasGenerator: false },
      { id: "ai_k6_t2_6", name: { de: "Handel", hu: "AI a kereskedelemben", ro: "Comerț", en: "Commerce" }, questions: [], hasGenerator: false }
    ]
  },
  {
    id: "ai_k6_th3",
    name: "Mindennapi KI",
    icon: "🚶",
    color: "#F59E0B",
    subtopics: [
      { id: "ai_k6_t3_1", name: { de: "Verkehr", hu: "AI a közlekedésben", ro: "Transport", en: "Transport" }, questions: [], hasGenerator: false },
      { id: "ai_k6_t3_2", name: { de: "Musik", hu: "AI és zene", ro: "Muzică", en: "Music" }, questions: [], hasGenerator: false },
      { id: "ai_k6_t3_3", name: { de: "Übersetzung", hu: "AI és fordítás", ro: "Traducere", en: "Translation" }, questions: [], hasGenerator: false },
      { id: "ai_k6_t3_4", name: { de: "Spiele", hu: "AI a játékokban", ro: "Jocuri", en: "Games" }, questions: [], hasGenerator: false },
      { id: "ai_k6_t3_5", name: { de: "Ethik", hu: "AI etika", ro: "Etică IA", en: "AI Ethics" }, questions: [], hasGenerator: false },
      { id: "ai_k6_t3_6", name: { de: "Sicherheit", hu: "AI biztonság", ro: "Siguranță IA", en: "AI Safety" } , questions: [], hasGenerator: false }
    ]
  },
  {
    id: "ai_k6_th4",
    name: "Jövőkép & Környezet",
    icon: "🌟",
    color: "#8B5CF6",
    subtopics: [
      { id: "ai_k6_t4_1", name: { de: "Schule", hu: "AI az iskolában", ro: "Școală", en: "School" }, questions: [], hasGenerator: false },
      { id: "ai_k6_t4_2", name: { de: "Zuhause", hu: "AI otthon", ro: "Acasă", en: "Home" }, questions: [], hasGenerator: false },
      { id: "ai_k6_t4_3", name: { de: "Arbeit", hu: "AI a munkában", ro: "Muncă", en: "Work" }, questions: [], hasGenerator: false },
      { id: "ai_k6_t4_4", name: { de: "Wissenschaft", hu: "AI a tudományban", ro: "Știință", en: "Science" }, questions: [], hasGenerator: false },
      { id: "ai_k6_t4_5", name: { de: "Umwelt", hu: "AI környezetvédelem", ro: "Mediu", en: "Environment" }, questions: [], hasGenerator: false },
      { id: "ai_k6_t4_6", name: { de: "Demokratie", hu: "AI és demokrácia", ro: "Democrație", en: "Democracy" }, questions: [], hasGenerator: false }
    ]
  }
];

// Initialize questions for all 24 subtopics
AI_K6_CURRICULUM.forEach(theme => {
  theme.subtopics.forEach(sub => {
    const raw = generateFinalQuestions(sub.id);
    sub.questions = raw.map((q, idx) => {
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

export function getAIK6Questions(subtopicIds: string[], count = 10, lang = "hu"): KemiaQuestion[] {
  let pool: any[] = [];
  AI_K6_CURRICULUM.forEach(theme => {
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
  
  // Shuffle the pool
  pool = dedupeAiQuestions(pool);
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  
  return pickDiverse(pool, count);
}
