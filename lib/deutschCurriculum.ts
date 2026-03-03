// ─── DEUTSCH TEST — FRAGEN-CURRICULUM ────────────────────────────────────────
// Grammatik & Sprachkompetenz für Klasse 1–8
// Fragen-Typen: MCQ (Multiple Choice) + Typing (Freitext)
//
// ═══════════════════════════════════════════════════════════════════════════════
// FORMAT — so fügst du Fragen ein:
//
//   MCQ (Multiple Choice):
//   { type: "mcq", topic: "<themeId>", subtopic: "<subtopicId>",
//     question: "Frage?",
//     options: ["Option A", "Option B", "Option C"],   ← 3 oder 4 Optionen
//     correct: 0 }                                      ← 0=A, 1=B, 2=C, 3=D
//
//   Typing (Freitext eingeben):
//   { type: "typing", topic: "<themeId>", subtopic: "<subtopicId>",
//     question: "Frage?",
//     answer: "Antwort" }                               ← eine Antwort
//   oder mehrere akzeptierte Antworten:
//     answer: ["Bücher", "die Bücher"] }
//   optional: hint: "Hinweis"  (erscheint klein unter der Frage)
//
// ═══════════════════════════════════════════════════════════════════════════════

export interface DeutschMCQ {
  type: "mcq";
  topic: string;
  subtopic: string;
  question: string;
  options: string[];
  correct: number;
}

export interface DeutschTyping {
  type: "typing";
  topic: string;
  subtopic: string;
  question: string;
  answer: string | string[];
  hint?: string;
}

export type DeutschQuestion = DeutschMCQ | DeutschTyping;

export interface DeutschSubtopic {
  id: string;
  name: string;
  questions: DeutschQuestion[];
}

export interface DeutschTheme {
  id: string;
  name: string;
  icon: string;
  color: string;
  subtopics: DeutschSubtopic[];
}

// ─── KLASSE 1 ─────────────────────────────────────────────────────────────────
const K1: DeutschTheme[] = [
  {
    id: "buchstaben",
    name: "Buchstaben & Laute",
    icon: "🔤",
    color: "#FF2D78",
    subtopics: [
      {
        id: "vokale",
        name: "Vokale & Konsonanten",
        questions: [
          // BEISPIEL (kannst du ersetzen oder weitere hinzufügen):
          { type:"mcq", topic:"buchstaben", subtopic:"vokale", question:"Welcher Buchstabe ist ein Vokal?", options:["e","k","r","l"], correct:0 },
{ type:"mcq", topic:"buchstaben", subtopic:"vokale", question:"Wie viele Vokale gibt es im Deutschen?", options:["3","4","5","8"], correct:2 },
{ type:"mcq", topic:"buchstaben", subtopic:"vokale", question:"Welches Wort beginnt mit einem Vokal?", options:["Apfel","Ball","Tisch","Mond"], correct:0 },
{ type:"mcq", topic:"buchstaben", subtopic:"vokale", question:"Welcher Buchstabe ist KEIN Vokal?", options:["a","e","i","b"], correct:3 },
{ type:"mcq", topic:"buchstaben", subtopic:"vokale", question:"Welcher Buchstabe ist ein Umlaut?", options:["ä","m","s","r"], correct:0 },
{ type:"mcq", topic:"buchstaben", subtopic:"vokale", question:"Welches Wort hat zwei Vokale?", options:["Ball","Haus","Mond","Brot"], correct:1 },
{ type:"mcq", topic:"buchstaben", subtopic:"vokale", question:"Welcher Buchstabe ist ein Konsonant?", options:["u","o","m","e"], correct:2 },
{ type:"typing", topic:"buchstaben", subtopic:"vokale", question:"Schreibe einen Vokal:", answer:["a","e","i","o","u","ä","ö","ü"] },
{ type:"typing", topic:"buchstaben", subtopic:"vokale", question:"Welche Vokale hörst du in: Maus?", answer:["a","u"] },
{ type:"typing", topic:"buchstaben", subtopic:"vokale", question:"Schreibe einen Umlaut:", answer:["ä","ö","ü"] },
          { type:"mcq", topic:"buchstaben", subtopic:"vokale", question:"Welcher Buchstabe ist ein Vokal?", options:["i","k","p","t"], correct:0 },
{ type:"mcq", topic:"buchstaben", subtopic:"vokale", question:"Welches Wort beginnt mit einem Vokal?", options:["Elefant","Hund","Katze","Fisch"], correct:0 },
{ type:"mcq", topic:"buchstaben", subtopic:"vokale", question:"Wie heißt der Umlaut von a?", options:["ä","ö","ü","aa"], correct:0 },
{ type:"mcq", topic:"buchstaben", subtopic:"vokale", question:"Welches Wort hat drei Vokale?", options:["Haus","Auto","Ball","Mond"], correct:1 },
{ type:"mcq", topic:"buchstaben", subtopic:"vokale", question:"Welcher Buchstabe ist KEIN Konsonant?", options:["m","s","o","t"], correct:2 },
{ type:"mcq", topic:"buchstaben", subtopic:"vokale", question:"Welches Wort endet mit einem Vokal?", options:["Mama","Hund","Baum","Stift"], correct:0 },
{ type:"mcq", topic:"buchstaben", subtopic:"vokale", question:"Welcher Laut ist ein Vokal?", options:["o","sch","st","ch"], correct:0 },
{ type:"mcq", topic:"buchstaben", subtopic:"vokale", question:"Welches Wort hat nur einen Vokal?", options:["Ball","See","Boot","Auto"], correct:0 },
{ type:"mcq", topic:"buchstaben", subtopic:"vokale", question:"Welcher Buchstabe gehört zu den Vokalen?", options:["u","l","r","n"], correct:0 },
{ type:"mcq", topic:"buchstaben", subtopic:"vokale", question:"Welches Wort beginnt mit einem Konsonanten?", options:["Apfel","Igel","Brot","Esel"], correct:2 },

{ type:"typing", topic:"buchstaben", subtopic:"vokale", question:"Schreibe zwei Vokale:", answer:["a e","e a","i o","o i","u a","a i","e i","o u"] },
{ type:"typing", topic:"buchstaben", subtopic:"vokale", question:"Welche Vokale hörst du in: Igel?", answer:["i","e"] },
{ type:"typing", topic:"buchstaben", subtopic:"vokale", question:"Welche Vokale hörst du in: Oma?", answer:["o","a"] },
{ type:"typing", topic:"buchstaben", subtopic:"vokale", question:"Welche Vokale hörst du in: Auto?", answer:["a","u","o"] },
{ type:"typing", topic:"buchstaben", subtopic:"vokale", question:"Schreibe einen Konsonanten:", answer:["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","y","z"] },
{ type:"typing", topic:"buchstaben", subtopic:"vokale", question:"Schreibe alle Umlaute:", answer:["ä ö ü","ä,ö,ü","äöü"] },
{ type:"typing", topic:"buchstaben", subtopic:"vokale", question:"Welcher Vokal fehlt? _pfel", answer:["a"] },
{ type:"typing", topic:"buchstaben", subtopic:"vokale", question:"Welcher Vokal fehlt? H_nd", answer:["u"] },
{ type:"typing", topic:"buchstaben", subtopic:"vokale", question:"Welcher Vokal fehlt? M_us", answer:["a"] },
{ type:"typing", topic:"buchstaben", subtopic:"vokale", question:"Welcher Vokal fehlt? B_ll", answer:["a"] },

{ type:"mcq", topic:"buchstaben", subtopic:"vokale", question:"Welches Wort hat einen Umlaut?", options:["Bär","Ball","Mond","Haus"], correct:0 },
{ type:"mcq", topic:"buchstaben", subtopic:"vokale", question:"Welcher Buchstabe ist ein langer Vokal?", options:["ee","b","t","m"], correct:0 },
{ type:"mcq", topic:"buchstaben", subtopic:"vokale", question:"Welches Wort hat zwei gleiche Vokale?", options:["See","Ball","Haus","Kind"], correct:0 },
{ type:"mcq", topic:"buchstaben", subtopic:"vokale", question:"Welcher Buchstabe ist ein Umlaut?", options:["ü","k","r","s"], correct:0 },
{ type:"mcq", topic:"buchstaben", subtopic:"vokale", question:"Welches Wort beginnt mit ä?", options:["Äpfel","Auto","Esel","Igel"], correct:0 },
          // TODO: weitere Fragen ↓
        ],
      },
      {
        id: "gross_klein",
        name: "Groß- & Kleinschreibung",
        questions: [
          { type: "mcq", topic: "buchstaben", subtopic: "gross_klein",
            question: "Was wird in einem deutschen Satz großgeschrieben?",
            options: ["Das erste Wort", "Das letzte Wort", "Alle Verben"], correct: 0 },
          // TODO: weitere Fragen ↓
        ],
      },
      {
        id: "silben",
        name: "Silbentrennung",
        questions: [
          { type: "mcq", topic: "buchstaben", subtopic: "silben",
            question: "Wie viele Silben hat das Wort 'Fenster'?",
            options: ["1", "2", "3"], correct: 1 },
          { type: "typing", topic: "buchstaben", subtopic: "silben",
            question: "Trenne in Silben: Schule →",
            answer: ["Schu-le", "schu-le"] },
          // TODO: weitere Fragen ↓
        ],
      },
      {
        id: "zwielaute",
        name: "Zwielaute (ei, ie, eu, äu)",
        questions: [
          { type: "mcq", topic: "buchstaben", subtopic: "zwielaute",
            question: "Welches Wort enthält den Zwielaut 'ei'?",
            options: ["Baum", "Eis", "Boot", "Brot"], correct: 1 },
          // TODO: weitere Fragen ↓
        ],
      },
      {
        id: "sp_st_anlaut",
        name: "sp und st am Wortanfang",
        questions: [
          { type: "mcq", topic: "buchstaben", subtopic: "sp_st_anlaut",
            question: "Welches Wort beginnt mit 'sp'?",
            options: ["Straße", "Spielen", "Schule", "Schwimmen"], correct: 1 },
          // TODO: weitere Fragen ↓
        ],
      },
    ],
  },
  {
    id: "woerter",
    name: "Wörter",
    icon: "📝",
    color: "#00D4FF",
    subtopics: [
      {
        id: "artikel_k1",
        name: "Artikel (der / die / das)",
        questions: [
          { type: "mcq", topic: "woerter", subtopic: "artikel_k1",
            question: "Welcher Artikel passt? ___ Hund",
            options: ["der", "die", "das"], correct: 0 },
          { type: "typing", topic: "woerter", subtopic: "artikel_k1",
            question: "Welcher Artikel? ___ Schule",
            answer: "die" },
          // TODO: weitere Fragen ↓
        ],
      },
      {
        id: "fehlende_buchstaben",
        name: "Fehlende Buchstaben",
        questions: [
          { type: "typing", topic: "woerter", subtopic: "fehlende_buchstaben",
            question: "Ergänze den fehlenden Buchstaben: K_tze",
            answer: ["Katze", "katze"] },
          // TODO: weitere Fragen ↓
        ],
      },
      {
        id: "komposita_k1",
        name: "Zusammengesetzte Wörter",
        questions: [
          { type: "mcq", topic: "woerter", subtopic: "komposita_k1",
            question: "Aus welchen Wörtern besteht 'Hausaufgabe'?",
            options: ["Haus + Aufgabe", "Hau + Saufgabe", "Ha + Usaufgabe"], correct: 0 },
          // TODO: weitere Fragen ↓
        ],
      },
    ],
  },
  {
    id: "saetze_k1",
    name: "Einfache Sätze",
    icon: "💬",
    color: "#00FF88",
    subtopics: [
      {
        id: "satzzeichen_k1",
        name: "Satzzeichen (. ? !)",
        questions: [
          { type: "mcq", topic: "saetze_k1", subtopic: "satzzeichen_k1",
            question: "Welches Zeichen steht am Ende? 'Wie heißt du___'",
            options: [".", "?", "!"], correct: 1 },
          { type: "mcq", topic: "saetze_k1", subtopic: "satzzeichen_k1",
            question: "Welches Zeichen steht am Ende? 'Ich heiße Anna___'",
            options: [".", "?", "!"], correct: 0 },
          // TODO: weitere Fragen ↓
        ],
      },
      {
        id: "fehlende_woerter_k1",
        name: "Fehlende Wörter",
        questions: [
          { type: "typing", topic: "saetze_k1", subtopic: "fehlende_woerter_k1",
            question: "Ergänze: Der Hund ___ schnell. (laufen)",
            answer: ["läuft", "lauft"] },
          // TODO: weitere Fragen ↓
        ],
      },
    ],
  },
];

// ─── KLASSE 2 ─────────────────────────────────────────────────────────────────
const K2: DeutschTheme[] = [
  {
    id: "wortarten_k2",
    name: "Wortarten",
    icon: "🏷️",
    color: "#FF2D78",
    subtopics: [
      {
        id: "nomen_k2",
        name: "Nomen erkennen",
        questions: [
          { type: "mcq", topic: "wortarten_k2", subtopic: "nomen_k2",
            question: "Welches Wort ist ein Nomen?",
            options: ["laufen", "schnell", "Schule", "aber"], correct: 2 },
          { type: "mcq", topic: "wortarten_k2", subtopic: "nomen_k2",
            question: "Welches Wort ist KEIN Nomen?",
            options: ["Hund", "spielen", "Tisch", "Apfel"], correct: 1 },
          // TODO: weitere Fragen ↓
        ],
      },
      {
        id: "verben_k2",
        name: "Verben erkennen",
        questions: [
          { type: "mcq", topic: "wortarten_k2", subtopic: "verben_k2",
            question: "Welches Wort ist ein Verb?",
            options: ["Baum", "klein", "spielen", "der"], correct: 2 },
          // TODO: weitere Fragen ↓
        ],
      },
      {
        id: "artikel_k2",
        name: "Artikel zuordnen",
        questions: [
          { type: "mcq", topic: "wortarten_k2", subtopic: "artikel_k2",
            question: "___ Schule ist groß.",
            options: ["Der", "Die", "Das"], correct: 1 },
          { type: "typing", topic: "wortarten_k2", subtopic: "artikel_k2",
            question: "Welcher Artikel passt? ___ Tisch",
            answer: "der" },
          // TODO: weitere Fragen ↓
        ],
      },
      {
        id: "adjektive_k2",
        name: "Adjektive erkennen",
        questions: [
          { type: "mcq", topic: "wortarten_k2", subtopic: "adjektive_k2",
            question: "Welches Wort ist ein Adjektiv?",
            options: ["Schule", "laufen", "schön", "der"], correct: 2 },
          // TODO: weitere Fragen ↓
        ],
      },
      {
        id: "plural_k2",
        name: "Plural der Nomen",
        questions: [
          { type: "typing", topic: "wortarten_k2", subtopic: "plural_k2",
            question: "Bilde den Plural: der Ball →",
            answer: ["Bälle", "die Bälle"] },
          // TODO: weitere Fragen ↓
        ],
      },
    ],
  },
  {
    id: "saetze_k2",
    name: "Sätze",
    icon: "💬",
    color: "#00D4FF",
    subtopics: [
      {
        id: "satzarten",
        name: "Satzarten",
        questions: [
          { type: "mcq", topic: "saetze_k2", subtopic: "satzarten",
            question: "Was für ein Satz ist: 'Wie heißt du?'",
            options: ["Aussagesatz", "Fragesatz", "Ausrufsatz"], correct: 1 },
          { type: "mcq", topic: "saetze_k2", subtopic: "satzarten",
            question: "Was für ein Satz ist: 'Ich bin müde.'",
            options: ["Aussagesatz", "Fragesatz", "Ausrufsatz"], correct: 0 },
          // TODO: weitere Fragen ↓
        ],
      },
      {
        id: "grossschreibung_k2",
        name: "Großschreibung",
        questions: [
          { type: "mcq", topic: "saetze_k2", subtopic: "grossschreibung_k2",
            question: "Was wird im Deutschen immer großgeschrieben?",
            options: ["Verben", "Adjektive", "Nomen", "Präpositionen"], correct: 2 },
          // TODO: weitere Fragen ↓
        ],
      },
    ],
  },
  {
    id: "rechtschreibung_k2",
    name: "Rechtschreibung",
    icon: "✍️",
    color: "#00FF88",
    subtopics: [
      {
        id: "tz_z",
        name: "tz oder z?",
        questions: [
          { type: "mcq", topic: "rechtschreibung_k2", subtopic: "tz_z",
            question: "Welches Wort ist richtig geschrieben?",
            options: ["Katze", "Kaze", "Kazte"], correct: 0 },
          { type: "typing", topic: "rechtschreibung_k2", subtopic: "tz_z",
            question: "Ergänze: die Ka___e",
            answer: ["Katze", "katze"] },
          // TODO: weitere Fragen ↓
        ],
      },
      {
        id: "ck_k",
        name: "ck oder k?",
        questions: [
          { type: "mcq", topic: "rechtschreibung_k2", subtopic: "ck_k",
            question: "Welches Wort ist richtig geschrieben?",
            options: ["backen", "bakken", "bacen"], correct: 0 },
          // TODO: weitere Fragen ↓
        ],
      },
      {
        id: "doppelvokal",
        name: "Doppelvokale (ee, oo)",
        questions: [
          { type: "mcq", topic: "rechtschreibung_k2", subtopic: "doppelvokal",
            question: "Welches Wort enthält einen Doppelvokal?",
            options: ["Haus", "See", "Kind", "Berg"], correct: 1 },
          // TODO: weitere Fragen ↓
        ],
      },
      {
        id: "dehnungs_h",
        name: "Dehnungs-h (fahren, Schule...)",
        questions: [
          { type: "mcq", topic: "rechtschreibung_k2", subtopic: "dehnungs_h",
            question: "Welches Wort hat ein Dehnungs-h?",
            options: ["Hund", "fahren", "Ball", "laufen"], correct: 1 },
          // TODO: weitere Fragen ↓
        ],
      },
      {
        id: "wortfamilien_k2",
        name: "Wortfamilien",
        questions: [
          { type: "mcq", topic: "rechtschreibung_k2", subtopic: "wortfamilien_k2",
            question: "Welches Wort gehört zur Wortfamilie von 'backen'?",
            options: ["Bäcker", "Butter", "Brot", "Ball"], correct: 0 },
          // TODO: weitere Fragen ↓
        ],
      },
    ],
  },
];

// ─── KLASSE 3 ─────────────────────────────────────────────────────────────────
const K3: DeutschTheme[] = [
  {
    id: "wortarten_k3",
    name: "Wortarten",
    icon: "🏷️",
    color: "#FF2D78",
    subtopics: [
      {
        id: "plural",
        name: "Nomen: Plural",
        questions: [
          { type: "typing", topic: "wortarten_k3", subtopic: "plural",
            question: "Bilde den Plural: das Buch →",
            answer: ["Bücher", "die Bücher"] },
          { type: "typing", topic: "wortarten_k3", subtopic: "plural",
            question: "Bilde den Plural: der Mann →",
            answer: ["Männer", "die Männer"] },
          { type: "mcq", topic: "wortarten_k3", subtopic: "plural",
            question: "Welche Pluralform ist richtig? das Haus →",
            options: ["Hause", "Häuser", "Hauser", "Häuse"], correct: 1 },
          // TODO: weitere Fragen ↓
        ],
      },
      {
        id: "adjektive_gegenteil",
        name: "Adjektive: Gegenteil",
        questions: [
          { type: "typing", topic: "wortarten_k3", subtopic: "adjektive_gegenteil",
            question: "Gegenteil von 'warm':",
            answer: "kalt" },
          { type: "typing", topic: "wortarten_k3", subtopic: "adjektive_gegenteil",
            question: "Gegenteil von 'groß':",
            answer: "klein" },
          // TODO: weitere Fragen ↓
        ],
      },
      {
        id: "verben_k3",
        name: "Verben konjugieren",
        questions: [
          { type: "typing", topic: "wortarten_k3", subtopic: "verben_k3",
            question: "Konjugiere (Gegenwart): er ___ (spielen)",
            answer: "spielt" },
          { type: "typing", topic: "wortarten_k3", subtopic: "verben_k3",
            question: "Konjugiere (Gegenwart): du ___ (laufen)",
            answer: "läufst" },
          { type: "mcq", topic: "wortarten_k3", subtopic: "verben_k3",
            question: "Welche Form ist richtig? wir ___ (kommen)",
            options: ["kommt", "kommen", "kommst", "komme"], correct: 1 },
          // TODO: weitere Fragen ↓
        ],
      },
      {
        id: "steigerung_k3",
        name: "Adjektiv Steigerung (groß – größer – am größten)",
        questions: [
          { type: "typing", topic: "wortarten_k3", subtopic: "steigerung_k3",
            question: "Komparativ von 'klein':",
            answer: "kleiner" },
          { type: "typing", topic: "wortarten_k3", subtopic: "steigerung_k3",
            question: "Superlativ von 'schnell':",
            answer: ["am schnellsten", "schnellsten"] },
          // TODO: weitere Fragen ↓
        ],
      },
      {
        id: "wortfamilien_k3",
        name: "Wortfamilien & Wortfelder",
        questions: [
          { type: "mcq", topic: "wortarten_k3", subtopic: "wortfamilien_k3",
            question: "Welches Wort gehört zur Wortfamilie 'spielen'?",
            options: ["Spieler", "laufen", "Schule", "Buch"], correct: 0 },
          // TODO: weitere Fragen ↓
        ],
      },
    ],
  },
  {
    id: "satzglieder_k3",
    name: "Satzglieder",
    icon: "🔍",
    color: "#00D4FF",
    subtopics: [
      {
        id: "subjekt",
        name: "Subjekt finden",
        questions: [
          { type: "mcq", topic: "satzglieder_k3", subtopic: "subjekt",
            question: "Was ist das Subjekt? 'Der Hund schläft im Garten.'",
            options: ["schläft", "Der Hund", "im Garten", "Garten"], correct: 1 },
          // TODO: weitere Fragen ↓
        ],
      },
      {
        id: "praedikat",
        name: "Prädikat finden",
        questions: [
          { type: "mcq", topic: "satzglieder_k3", subtopic: "praedikat",
            question: "Was ist das Prädikat? 'Die Katze trinkt Milch.'",
            options: ["Die Katze", "trinkt", "Milch", "die"], correct: 1 },
          // TODO: weitere Fragen ↓
        ],
      },
      {
        id: "akkusativ_obj",
        name: "Akkusativobjekt (wen/was?)",
        questions: [
          { type: "mcq", topic: "satzglieder_k3", subtopic: "akkusativ_obj",
            question: "Was fragt man beim Akkusativobjekt?",
            options: ["Wer?", "Wen oder was?", "Wem?", "Wessen?"], correct: 1 },
          // TODO: weitere Fragen ↓
        ],
      },
      {
        id: "praeteritum_k3",
        name: "Vergangenheit: sein / haben / gehen",
        questions: [
          { type: "typing", topic: "satzglieder_k3", subtopic: "praeteritum_k3",
            question: "Präteritum von 'sein' (er): er ___",
            answer: "war" },
          { type: "typing", topic: "satzglieder_k3", subtopic: "praeteritum_k3",
            question: "Präteritum von 'haben' (ich): ich ___",
            answer: "hatte" },
          // TODO: weitere Fragen ↓
        ],
      },
      {
        id: "direkte_rede_k3",
        name: "Wörtliche Rede",
        questions: [
          { type: "mcq", topic: "satzglieder_k3", subtopic: "direkte_rede_k3",
            question: "Welcher Satz verwendet wörtliche Rede richtig?",
            options: [
              "Anna sagte: Ich bin müde.",
              "Anna sagte: \u201EIch bin müde.\u201C",
              "Anna sagte, \u201Eich bin müde\u201C",
            ], correct: 1 },
          // TODO: weitere Fragen ↓
        ],
      },
    ],
  },
  {
    id: "rechtschreibung_k3",
    name: "Rechtschreibung",
    icon: "✍️",
    color: "#00FF88",
    subtopics: [
      {
        id: "ie_ih",
        name: "ie oder ih?",
        questions: [
          { type: "mcq", topic: "rechtschreibung_k3", subtopic: "ie_ih",
            question: "Wie schreibt man es richtig? sp___len",
            options: ["spihlen", "spielen", "spilen"], correct: 1 },
          // TODO: weitere Fragen ↓
        ],
      },
      {
        id: "doppelkonsonanten",
        name: "Doppelkonsonanten (mm/nn/ll)",
        questions: [
          { type: "mcq", topic: "rechtschreibung_k3", subtopic: "doppelkonsonanten",
            question: "Welches Wort ist richtig geschrieben?",
            options: ["Sone", "Sonne", "Sonn"], correct: 1 },
          // TODO: weitere Fragen ↓
        ],
      },
      {
        id: "ss_sz",
        name: "s, ss oder ß?",
        questions: [
          { type: "mcq", topic: "rechtschreibung_k3", subtopic: "ss_sz",
            question: "Welches Wort ist richtig geschrieben?",
            options: ["Strasse", "Straße", "Strase"], correct: 1 },
          { type: "typing", topic: "rechtschreibung_k3", subtopic: "ss_sz",
            question: "Wie schreibt man: der Flu___ (kurzer Vokal)",
            answer: ["Fluss", "fluss"] },
          // TODO: weitere Fragen ↓
        ],
      },
    ],
  },
];

// ─── KLASSE 4 ─────────────────────────────────────────────────────────────────
const K4: DeutschTheme[] = [
  {
    id: "kasus",
    name: "Kasus",
    icon: "📐",
    color: "#B44DFF",
    subtopics: [
      {
        id: "nominativ",
        name: "Nominativ (wer/was?)",
        questions: [
          { type: "mcq", topic: "kasus", subtopic: "nominativ",
            question: "In welchem Fall steht 'der Hund'? 'Der Hund bellt.'",
            options: ["Nominativ", "Akkusativ", "Dativ", "Genitiv"], correct: 0 },
          // TODO: weitere Fragen ↓
        ],
      },
      {
        id: "akkusativ",
        name: "Akkusativ (wen/was?)",
        questions: [
          { type: "mcq", topic: "kasus", subtopic: "akkusativ",
            question: "Setze ein: Ich sehe ___ Hund.",
            options: ["der", "den", "dem", "des"], correct: 1 },
          // TODO: weitere Fragen ↓
        ],
      },
      {
        id: "dativ",
        name: "Dativ (wem?)",
        questions: [
          { type: "mcq", topic: "kasus", subtopic: "dativ",
            question: "Setze ein: Er hilft ___ Kind.",
            options: ["das", "den", "dem", "des"], correct: 2 },
          // TODO: weitere Fragen ↓
        ],
      },
      {
        id: "genitiv",
        name: "Genitiv (wessen?)",
        questions: [
          { type: "mcq", topic: "kasus", subtopic: "genitiv",
            question: "Was fragt man beim Genitiv?",
            options: ["Wer?", "Wen?", "Wem?", "Wessen?"], correct: 3 },
          // TODO: weitere Fragen ↓
        ],
      },
    ],
  },
  {
    id: "zeitformen_k4",
    name: "Zeitformen",
    icon: "⏰",
    color: "#FF6B00",
    subtopics: [
      {
        id: "praeteritum",
        name: "Präteritum",
        questions: [
          { type: "typing", topic: "zeitformen_k4", subtopic: "praeteritum",
            question: "Bilde das Präteritum: gehen →",
            answer: "ging" },
          { type: "typing", topic: "zeitformen_k4", subtopic: "praeteritum",
            question: "Bilde das Präteritum: kommen →",
            answer: "kam" },
          // TODO: weitere Fragen ↓
        ],
      },
      {
        id: "perfekt",
        name: "Perfekt (haben / sein)",
        questions: [
          { type: "mcq", topic: "zeitformen_k4", subtopic: "perfekt",
            question: "Welches Hilfsverb? 'Ich ___ nach Hause gegangen.'",
            options: ["habe", "bin", "war", "hatte"], correct: 1 },
          { type: "mcq", topic: "zeitformen_k4", subtopic: "perfekt",
            question: "Welches Hilfsverb? 'Er ___ das Buch gelesen.'",
            options: ["ist", "hat", "war", "sei"], correct: 1 },
          // TODO: weitere Fragen ↓
        ],
      },
    ],
  },
  {
    id: "rechtschreibung_k4",
    name: "Rechtschreibung",
    icon: "✍️",
    color: "#00FF88",
    subtopics: [
      {
        id: "das_dass",
        name: "das oder dass?",
        questions: [
          { type: "mcq", topic: "rechtschreibung_k4", subtopic: "das_dass",
            question: "Welches ist richtig? 'Ich weiß, ___ er kommt.'",
            options: ["das", "dass"], correct: 1 },
          { type: "mcq", topic: "rechtschreibung_k4", subtopic: "das_dass",
            question: "Welches ist richtig? '___ Buch liegt auf dem Tisch.'",
            options: ["Das", "Dass"], correct: 0 },
          // TODO: weitere Fragen ↓
        ],
      },
      {
        id: "aeu_eu",
        name: "äu oder eu?",
        questions: [
          { type: "mcq", topic: "rechtschreibung_k4", subtopic: "aeu_eu",
            question: "Welches Wort ist richtig geschrieben?",
            options: ["Heuser", "Häuser", "Haüser"], correct: 1 },
          // TODO: weitere Fragen ↓
        ],
      },
      {
        id: "komma_aufzaehlung",
        name: "Komma bei Aufzählungen",
        questions: [
          { type: "mcq", topic: "rechtschreibung_k4", subtopic: "komma_aufzaehlung",
            question: "Welcher Satz ist richtig interpunktiert?",
            options: [
              "Ich kaufe Äpfel Birnen und Bananen.",
              "Ich kaufe Äpfel, Birnen und Bananen.",
              "Ich kaufe Äpfel, Birnen, und Bananen.",
            ], correct: 1 },
          // TODO: weitere Fragen ↓
        ],
      },
    ],
  },
  {
    id: "wortarten_k4",
    name: "Wortarten",
    icon: "🏷️",
    color: "#FF2D78",
    subtopics: [
      {
        id: "pronomen_k4",
        name: "Personalpronomen (ich/du/er/sie/es...)",
        questions: [
          { type: "mcq", topic: "wortarten_k4", subtopic: "pronomen_k4",
            question: "Welches Pronomen ersetzt 'die Lehrerin'?",
            options: ["er", "sie", "es", "ihn"], correct: 1 },
          // TODO: weitere Fragen ↓
        ],
      },
      {
        id: "adjektivendungen_k4",
        name: "Adjektivendungen (der große Hund)",
        questions: [
          { type: "mcq", topic: "wortarten_k4", subtopic: "adjektivendungen_k4",
            question: "Welche Endung? 'der groß___ Hund'",
            options: ["-e", "-en", "-er", "-em"], correct: 0 },
          // TODO: weitere Fragen ↓
        ],
      },
    ],
  },
  {
    id: "satzglieder_k4",
    name: "Satzglieder",
    icon: "🔍",
    color: "#00D4FF",
    subtopics: [
      {
        id: "subjekt_praedikat_k4",
        name: "Subjekt & Prädikat",
        questions: [
          { type: "mcq", topic: "satzglieder_k4", subtopic: "subjekt_praedikat_k4",
            question: "Was ist Subjekt und Prädikat? 'Die Kinder spielen.'",
            options: [
              "Subjekt: spielen / Prädikat: Die Kinder",
              "Subjekt: Die Kinder / Prädikat: spielen",
              "Subjekt: Die / Prädikat: Kinder",
            ], correct: 1 },
          // TODO: weitere Fragen ↓
        ],
      },
      {
        id: "objekte_k4",
        name: "Akkusativ- & Dativobjekt",
        questions: [
          { type: "mcq", topic: "satzglieder_k4", subtopic: "objekte_k4",
            question: "'Er gibt dem Kind das Buch.' — Was ist das Dativobjekt?",
            options: ["das Buch", "dem Kind", "Er", "gibt"], correct: 1 },
          // TODO: weitere Fragen ↓
        ],
      },
      {
        id: "adverbiale_k4",
        name: "Adverbiale (wann? wo? wie?)",
        questions: [
          { type: "mcq", topic: "satzglieder_k4", subtopic: "adverbiale_k4",
            question: "'morgen' beantwortet die Frage:",
            options: ["Wo?", "Wie?", "Wann?", "Warum?"], correct: 2 },
          // TODO: weitere Fragen ↓
        ],
      },
    ],
  },
  {
    id: "satzarten_k4",
    name: "Satzarten",
    icon: "❓",
    color: "#00FF88",
    subtopics: [
      {
        id: "aussage_frage_k4",
        name: "Aussage- & Fragesatz",
        questions: [
          { type: "mcq", topic: "satzarten_k4", subtopic: "aussage_frage_k4",
            question: "'Kommst du morgen?' ist ein ...",
            options: ["Aussagesatz", "Fragesatz", "Ausrufsatz", "Aufforderungssatz"], correct: 1 },
          // TODO: weitere Fragen ↓
        ],
      },
      {
        id: "aufforderung_ausruf_k4",
        name: "Aufforderungs- & Ausrufsatz",
        questions: [
          { type: "mcq", topic: "satzarten_k4", subtopic: "aufforderung_ausruf_k4",
            question: "'Komm sofort her!' ist ein ...",
            options: ["Aussagesatz", "Fragesatz", "Aufforderungssatz", "Relativsatz"], correct: 2 },
          // TODO: weitere Fragen ↓
        ],
      },
    ],
  },
  {
    id: "verben_k4",
    name: "Verben & Zeiten",
    icon: "⏰",
    color: "#B44DFF",
    subtopics: [
      {
        id: "trennbare_verben_k4",
        name: "Trennbare Verben (aufmachen, anrufen...)",
        questions: [
          { type: "mcq", topic: "verben_k4", subtopic: "trennbare_verben_k4",
            question: "Welche Form ist richtig? 'Ich ___ das Fenster ___.'",
            options: ["aufmache ... nichts", "mache ... auf", "macheauf ... nichts"], correct: 1 },
          // TODO: weitere Fragen ↓
        ],
      },
      {
        id: "futur_k4",
        name: "Zukunft: Futur I (wird + Infinitiv)",
        questions: [
          { type: "mcq", topic: "verben_k4", subtopic: "futur_k4",
            question: "Bilde das Futur I: 'Er ___ morgen kommen.'",
            options: ["hat", "wird", "ist", "war"], correct: 1 },
          // TODO: weitere Fragen ↓
        ],
      },
    ],
  },
  {
    id: "nebensatz_k4",
    name: "Nebensätze",
    icon: "🔗",
    color: "#FFD700",
    subtopics: [
      {
        id: "weil_dass_k4",
        name: "weil- und dass-Sätze",
        questions: [
          { type: "mcq", topic: "nebensatz_k4", subtopic: "weil_dass_k4",
            question: "Wo steht das Verb im weil-Satz?",
            options: ["Am Anfang", "In der Mitte", "Am Ende"], correct: 2 },
          // TODO: weitere Fragen ↓
        ],
      },
    ],
  },
];

// ─── KLASSE 5 ─────────────────────────────────────────────────────────────────
const K5: DeutschTheme[] = [
  {
    id: "wortarten_k5",
    name: "Wortarten",
    icon: "🏷️",
    color: "#FF2D78",
    subtopics: [
      {
        id: "steigerung",
        name: "Adjektive: Steigerung",
        questions: [
          { type: "typing", topic: "wortarten_k5", subtopic: "steigerung",
            question: "Komparativ von 'groß':",
            answer: "größer" },
          { type: "typing", topic: "wortarten_k5", subtopic: "steigerung",
            question: "Superlativ von 'gut':",
            answer: ["am besten", "beste", "besten"] },
          // TODO: weitere Fragen ↓
        ],
      },
      {
        id: "pronomen",
        name: "Personalpronomen",
        questions: [
          { type: "mcq", topic: "wortarten_k5", subtopic: "pronomen",
            question: "Ersetze 'den Hund': Ich sehe ___ .",
            options: ["er", "ihn", "ihm", "sein"], correct: 1 },
          // TODO: weitere Fragen ↓
        ],
      },
      {
        id: "relativpronomen",
        name: "Relativpronomen",
        questions: [
          { type: "mcq", topic: "wortarten_k5", subtopic: "relativpronomen",
            question: "Welches Relativpronomen? 'Das Buch, ___ ich lese, ist spannend.'",
            options: ["der", "die", "das", "den"], correct: 2 },
          // TODO: weitere Fragen ↓
        ],
      },
      {
        id: "praepositionen_k5",
        name: "Präpositionen mit Kasus",
        questions: [
          { type: "mcq", topic: "wortarten_k5", subtopic: "praepositionen_k5",
            question: "'mit' verlangt welchen Fall?",
            options: ["Nominativ", "Akkusativ", "Dativ", "Genitiv"], correct: 2 },
          // TODO: weitere Fragen ↓
        ],
      },
      {
        id: "adverbien_k5",
        name: "Adverbien (dort, gestern, schnell...)",
        questions: [
          { type: "mcq", topic: "wortarten_k5", subtopic: "adverbien_k5",
            question: "Welches Wort ist ein Adverb?",
            options: ["Schule", "laufen", "gestern", "der"], correct: 2 },
          // TODO: weitere Fragen ↓
        ],
      },
      {
        id: "konjunktionen_k5",
        name: "Konjunktionen (und, aber, weil, dass...)",
        questions: [
          { type: "mcq", topic: "wortarten_k5", subtopic: "konjunktionen_k5",
            question: "Welches Wort ist eine Konjunktion?",
            options: ["schnell", "aber", "Hund", "laufen"], correct: 1 },
          // TODO: weitere Fragen ↓
        ],
      },
    ],
  },
  {
    id: "satzglieder_k5",
    name: "Satzglieder",
    icon: "🔍",
    color: "#00D4FF",
    subtopics: [
      {
        id: "adverbiale",
        name: "Adverbiale Bestimmungen",
        questions: [
          { type: "mcq", topic: "satzglieder_k5", subtopic: "adverbiale",
            question: "'morgen' ist eine adverbiale Bestimmung der ...",
            options: ["Ort", "Zeit", "Art und Weise", "Grund"], correct: 1 },
          // TODO: weitere Fragen ↓
        ],
      },
      {
        id: "wortstellung",
        name: "Wortstellung",
        questions: [
          { type: "mcq", topic: "satzglieder_k5", subtopic: "wortstellung",
            question: "Was steht immer an 2. Stelle im deutschen Hauptsatz?",
            options: ["Subjekt", "Objekt", "Prädikat", "Adverb"], correct: 2 },
          // TODO: weitere Fragen ↓
        ],
      },
      {
        id: "adjektivdeklination_k5",
        name: "Adjektivdeklination (nach Artikel)",
        questions: [
          { type: "mcq", topic: "satzglieder_k5", subtopic: "adjektivdeklination_k5",
            question: "Welche Endung? 'ein groß___ Hund'",
            options: ["-e", "-en", "-er", "-em"], correct: 2 },
          // TODO: weitere Fragen ↓
        ],
      },
    ],
  },
  {
    id: "zeichensetzung_k5",
    name: "Zeichensetzung",
    icon: "✒️",
    color: "#00FF88",
    subtopics: [
      {
        id: "komma_nebensatz",
        name: "Komma vor Nebensätzen",
        questions: [
          { type: "mcq", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz",
            question: "Wo fehlt das Komma? 'Ich lerne_weil ich gut werden will.'",
            options: ["vor 'weil'", "nach 'gut'", "kein Komma nötig"], correct: 0 },
          // TODO: weitere Fragen ↓
        ],
      },
      {
        id: "direkte_rede",
        name: "Direkte Rede",
        questions: [
          { type: "mcq", topic: "zeichensetzung_k5", subtopic: "direkte_rede",
            question: "Welche Zeichen umschließen die direkte Rede?",
            options: ["( )", "[ ]", "\u201E \u201C"], correct: 2 },
          // TODO: weitere Fragen ↓
        ],
      },
    ],
  },
  {
    id: "zeitformen_k5",
    name: "Zeitformen",
    icon: "⏰",
    color: "#FF6B00",
    subtopics: [
      {
        id: "partizip_1_k5",
        name: "Partizip I (laufend, spielend...)",
        questions: [
          { type: "mcq", topic: "zeitformen_k5", subtopic: "partizip_1_k5",
            question: "Bilde das Partizip I: laufen →",
            options: ["gelaufen", "laufend", "lief", "gelauft"], correct: 1 },
          // TODO: weitere Fragen ↓
        ],
      },
      {
        id: "partizip_2_k5",
        name: "Partizip II (gelaufen, gespielt...)",
        questions: [
          { type: "mcq", topic: "zeitformen_k5", subtopic: "partizip_2_k5",
            question: "Bilde das Partizip II: spielen →",
            options: ["spielend", "gespielt", "spielte", "spiel"], correct: 1 },
          // TODO: weitere Fragen ↓
        ],
      },
      {
        id: "plusquamperfekt_k5",
        name: "Plusquamperfekt (hatte/war + Partizip II)",
        questions: [
          { type: "mcq", topic: "zeitformen_k5", subtopic: "plusquamperfekt_k5",
            question: "Bilde das Plusquamperfekt: 'Er ___ schon gegessen, als ich kam.'",
            options: ["hat", "hatte", "wird", "ist"], correct: 1 },
          // TODO: weitere Fragen ↓
        ],
      },
    ],
  },
  {
    id: "passiv_k5",
    name: "Passiv",
    icon: "🔄",
    color: "#00D4FF",
    subtopics: [
      {
        id: "vorgangspassiv_k5",
        name: "Vorgangspassiv (wird gemacht)",
        questions: [
          { type: "mcq", topic: "passiv_k5", subtopic: "vorgangspassiv_k5",
            question: "Forme um ins Passiv: 'Der Lehrer korrigiert die Aufgabe.'",
            options: [
              "Die Aufgabe wird vom Lehrer korrigiert.",
              "Die Aufgabe hat der Lehrer korrigiert.",
              "Der Lehrer wird korrigiert.",
            ], correct: 0 },
          // TODO: weitere Fragen ↓
        ],
      },
      {
        id: "passiv_praeteritum_k5",
        name: "Passiv Präteritum (wurde gemacht)",
        questions: [
          { type: "mcq", topic: "passiv_k5", subtopic: "passiv_praeteritum_k5",
            question: "Passiv Präteritum: 'Das Haus ___ gebaut.'",
            options: ["wird", "wurde", "wird werden", "hat"], correct: 1 },
          // TODO: weitere Fragen ↓
        ],
      },
    ],
  },
];

// ─── KLASSE 6 ─────────────────────────────────────────────────────────────────
const K6: DeutschTheme[] = [
  {
    id: "grammatik_k6",
    name: "Grammatik",
    icon: "⚙️",
    color: "#B44DFF",
    subtopics: [
      {
        id: "passiv",
        name: "Aktiv und Passiv",
        questions: [
          { type: "mcq", topic: "grammatik_k6", subtopic: "passiv",
            question: "Passiv von: 'Der Schüler löst die Aufgabe.'",
            options: [
              "Die Aufgabe wird vom Schüler gelöst.",
              "Die Aufgabe hat der Schüler gelöst.",
              "Die Aufgabe löste der Schüler.",
            ], correct: 0 },
          // TODO: weitere Fragen ↓
        ],
      },
      {
        id: "konjunktiv_2",
        name: "Konjunktiv II",
        questions: [
          { type: "mcq", topic: "grammatik_k6", subtopic: "konjunktiv_2",
            question: "Welcher Satz steht im Konjunktiv II?",
            options: [
              "Ich lerne heute.",
              "Ich würde gerne lernen.",
              "Ich habe gelernt.",
            ], correct: 1 },
          // TODO: weitere Fragen ↓
        ],
      },
      {
        id: "infinitiv_zu",
        name: "Infinitiv mit zu",
        questions: [
          { type: "mcq", topic: "grammatik_k6", subtopic: "infinitiv_zu",
            question: "Welche Form ist richtig?",
            options: [
              "Ich versuche schwimmen.",
              "Ich versuche zu schwimmen.",
              "Ich versuche geschwommen.",
            ], correct: 1 },
          // TODO: weitere Fragen ↓
        ],
      },
      {
        id: "modalverben_k6",
        name: "Modalverben im Konjunktiv II",
        questions: [
          { type: "mcq", topic: "grammatik_k6", subtopic: "modalverben_k6",
            question: "Konjunktiv II von 'können': ich ___",
            options: ["kann", "könnte", "konnte", "gekonnt"], correct: 1 },
          // TODO: weitere Fragen ↓
        ],
      },
    ],
  },
  {
    id: "wortschatz_k6",
    name: "Wortschatz",
    icon: "📚",
    color: "#FF2D78",
    subtopics: [
      {
        id: "synonyme",
        name: "Synonyme",
        questions: [
          { type: "mcq", topic: "wortschatz_k6", subtopic: "synonyme",
            question: "Was ist ein Synonym für 'froh'?",
            options: ["traurig", "glücklich", "müde", "böse"], correct: 1 },
          // TODO: weitere Fragen ↓
        ],
      },
      {
        id: "antonyme",
        name: "Antonyme",
        questions: [
          { type: "typing", topic: "wortschatz_k6", subtopic: "antonyme",
            question: "Antonym von 'sparsam':",
            answer: ["verschwenderisch", "verschwenderich"] },
          // TODO: weitere Fragen ↓
        ],
      },
      {
        id: "fremdwoerter",
        name: "Fremdwörter",
        questions: [
          { type: "mcq", topic: "wortschatz_k6", subtopic: "fremdwoerter",
            question: "Was bedeutet 'ökologisch'?",
            options: ["wirtschaftlich", "umweltbezogen", "gesellschaftlich", "wissenschaftlich"], correct: 1 },
          // TODO: weitere Fragen ↓
        ],
      },
    ],
  },
  {
    id: "satzstrukturen_k6",
    name: "Satzstrukturen",
    icon: "🔗",
    color: "#00D4FF",
    subtopics: [
      {
        id: "relativsatz",
        name: "Relativsatz",
        questions: [
          { type: "mcq", topic: "satzstrukturen_k6", subtopic: "relativsatz",
            question: "Welches Relativpronomen? 'Der Mann, ___ ich kenne, ist nett.'",
            options: ["der", "den", "dem", "dessen"], correct: 1 },
          // TODO: weitere Fragen ↓
        ],
      },
      {
        id: "kausalsatz",
        name: "Kausalsatz (weil / denn)",
        questions: [
          { type: "mcq", topic: "satzstrukturen_k6", subtopic: "kausalsatz",
            question: "'___ es regnet, nehme ich einen Schirm.' – Welches Wort?",
            options: ["Denn", "Weil", "Aber", "Und"], correct: 1 },
          // TODO: weitere Fragen ↓
        ],
      },
    ],
  },
  {
    id: "wortbildung_k6",
    name: "Wortbildung",
    icon: "🔨",
    color: "#FF6B00",
    subtopics: [
      {
        id: "komposita_k6",
        name: "Komposita (zusammengesetzte Wörter)",
        questions: [
          { type: "mcq", topic: "wortbildung_k6", subtopic: "komposita_k6",
            question: "Aus welchen Teilen besteht 'Schulbuch'?",
            options: ["Schul + Buch", "Schu + Lbuch", "Schulb + uch"], correct: 0 },
          // TODO: weitere Fragen ↓
        ],
      },
      {
        id: "derivation_k6",
        name: "Ableitung (Präfixe & Suffixe)",
        questions: [
          { type: "mcq", topic: "wortbildung_k6", subtopic: "derivation_k6",
            question: "Welche Vorsilbe ergibt 'das Gegenteil'?",
            options: ["un- (unglücklich)", "er- (erkennen)", "be- (besuchen)"], correct: 0 },
          // TODO: weitere Fragen ↓
        ],
      },
    ],
  },
  {
    id: "zeichensetzung_k6",
    name: "Zeichensetzung",
    icon: "✒️",
    color: "#00FF88",
    subtopics: [
      {
        id: "doppelpunkt_k6",
        name: "Doppelpunkt & Aufzählung",
        questions: [
          { type: "mcq", topic: "zeichensetzung_k6", subtopic: "doppelpunkt_k6",
            question: "Wann setzt man einen Doppelpunkt?",
            options: [
              "Vor einer Aufzählung oder wörtlichen Rede",
              "Am Satzende",
              "Nach einem Verb",
            ], correct: 0 },
          // TODO: weitere Fragen ↓
        ],
      },
      {
        id: "gedankenstrich_k6",
        name: "Gedankenstrich & Klammern",
        questions: [
          { type: "mcq", topic: "zeichensetzung_k6", subtopic: "gedankenstrich_k6",
            question: "Wofür verwendet man einen Gedankenstrich?",
            options: [
              "Für Einschübe oder Pausen im Satz",
              "Am Ende eines Satzes",
              "Statt eines Kommas",
            ], correct: 0 },
          // TODO: weitere Fragen ↓
        ],
      },
    ],
  },
];

// ─── KLASSE 7 ─────────────────────────────────────────────────────────────────
const K7: DeutschTheme[] = [
  {
    id: "indirekte_rede",
    name: "Indirekte Rede",
    icon: "💬",
    color: "#FF2D78",
    subtopics: [
      {
        id: "konjunktiv_1",
        name: "Konjunktiv I bilden",
        questions: [
          { type: "mcq", topic: "indirekte_rede", subtopic: "konjunktiv_1",
            question: "Konjunktiv I: er sagt, er (sein) →",
            options: ["er ist", "er sei", "er wäre", "er war"], correct: 1 },
          // TODO: weitere Fragen ↓
        ],
      },
      {
        id: "aussagen_umf",
        name: "Aussagen umformulieren",
        questions: [
          { type: "mcq", topic: "indirekte_rede", subtopic: "aussagen_umf",
            question: "Direkt: 'Ich bin müde.' → Indirekt: Er sagt, ...",
            options: ["er ist müde.", "er sei müde.", "er wäre müde."], correct: 1 },
          // TODO: weitere Fragen ↓
        ],
      },
    ],
  },
  {
    id: "passivformen_k7",
    name: "Passivformen",
    icon: "⚙️",
    color: "#B44DFF",
    subtopics: [
      {
        id: "werden_passiv",
        name: "Werden-Passiv",
        questions: [
          { type: "mcq", topic: "passivformen_k7", subtopic: "werden_passiv",
            question: "Passiv Präsens: 'Man baut das Haus.' →",
            options: [
              "Das Haus wurde gebaut.",
              "Das Haus wird gebaut.",
              "Das Haus ist gebaut.",
            ], correct: 1 },
          // TODO: weitere Fragen ↓
        ],
      },
      {
        id: "sein_passiv",
        name: "Sein-Passiv (Zustand)",
        questions: [
          { type: "mcq", topic: "passivformen_k7", subtopic: "sein_passiv",
            question: "Was drückt 'Das Fenster ist geöffnet.' aus?",
            options: ["Vorgang", "Zustand", "Handlung"], correct: 1 },
          // TODO: weitere Fragen ↓
        ],
      },
      {
        id: "passiv_modal",
        name: "Passiv + Modalverb",
        questions: [
          { type: "mcq", topic: "passivformen_k7", subtopic: "passiv_modal",
            question: "Passiv mit Modalverb: 'Man muss die Aufgabe lösen.' →",
            options: [
              "Die Aufgabe muss gelöst werden.",
              "Die Aufgabe muss lösen werden.",
              "Die Aufgabe wird lösen müssen.",
            ], correct: 0 },
          // TODO: weitere Fragen ↓
        ],
      },
    ],
  },
  {
    id: "stilmittel",
    name: "Stilmittel",
    icon: "🎨",
    color: "#00FF88",
    subtopics: [
      {
        id: "metapher_vergleich",
        name: "Metapher & Vergleich",
        questions: [
          { type: "mcq", topic: "stilmittel", subtopic: "metapher_vergleich",
            question: "'Er ist ein Löwe im Kampf.' – Was ist das?",
            options: ["Vergleich", "Metapher", "Alliteration", "Personifikation"], correct: 1 },
          { type: "mcq", topic: "stilmittel", subtopic: "metapher_vergleich",
            question: "'Er kämpft wie ein Löwe.' – Was ist das?",
            options: ["Metapher", "Vergleich", "Alliteration", "Personifikation"], correct: 1 },
          // TODO: weitere Fragen ↓
        ],
      },
      {
        id: "alliteration_personifikation",
        name: "Alliteration & Personifikation",
        questions: [
          { type: "mcq", topic: "stilmittel", subtopic: "alliteration_personifikation",
            question: "'Frischer Fisch friert frech.' – Was ist das?",
            options: ["Metapher", "Alliteration", "Personifikation", "Vergleich"], correct: 1 },
          // TODO: weitere Fragen ↓
        ],
      },
    ],
  },
  {
    id: "nebensatztypen_k7",
    name: "Nebensatztypen",
    icon: "🔗",
    color: "#00D4FF",
    subtopics: [
      {
        id: "kausalsatz_k7",
        name: "Kausalsatz (weil, da)",
        questions: [
          { type: "mcq", topic: "nebensatztypen_k7", subtopic: "kausalsatz_k7",
            question: "Welche Konjunktion leitet einen Kausalsatz ein?",
            options: ["wenn", "weil", "obwohl", "damit"], correct: 1 },
          // TODO: weitere Fragen ↓
        ],
      },
      {
        id: "konditionalsatz_k7",
        name: "Konditionalsatz (wenn, falls)",
        questions: [
          { type: "mcq", topic: "nebensatztypen_k7", subtopic: "konditionalsatz_k7",
            question: "'___ es regnet, bleibe ich zuhause.' — Welche Konjunktion?",
            options: ["weil", "obwohl", "wenn", "damit"], correct: 2 },
          // TODO: weitere Fragen ↓
        ],
      },
      {
        id: "konzessivsatz_k7",
        name: "Konzessivsatz (obwohl, obgleich)",
        questions: [
          { type: "mcq", topic: "nebensatztypen_k7", subtopic: "konzessivsatz_k7",
            question: "'___ er müde war, lernte er weiter.' — Welche Konjunktion?",
            options: ["weil", "obwohl", "wenn", "damit"], correct: 1 },
          // TODO: weitere Fragen ↓
        ],
      },
      {
        id: "finalsatz_k7",
        name: "Finalsatz (damit, um...zu)",
        questions: [
          { type: "mcq", topic: "nebensatztypen_k7", subtopic: "finalsatz_k7",
            question: "Welche Konjunktion leitet einen Finalsatz (Zweck) ein?",
            options: ["weil", "obwohl", "damit", "als"], correct: 2 },
          // TODO: weitere Fragen ↓
        ],
      },
      {
        id: "temporalsatz_k7",
        name: "Temporalsatz (als, wenn, während, nachdem)",
        questions: [
          { type: "mcq", topic: "nebensatztypen_k7", subtopic: "temporalsatz_k7",
            question: "Für einen einmaligen Vorgang in der Vergangenheit verwendet man:",
            options: ["wenn", "als", "während", "nachdem"], correct: 1 },
          // TODO: weitere Fragen ↓
        ],
      },
    ],
  },
  {
    id: "infinitivkonstruktionen_k7",
    name: "Infinitivkonstruktionen",
    icon: "⚙️",
    color: "#FF2D78",
    subtopics: [
      {
        id: "um_zu_k7",
        name: "um...zu (Zweck)",
        questions: [
          { type: "mcq", topic: "infinitivkonstruktionen_k7", subtopic: "um_zu_k7",
            question: "Welche Form ist richtig?",
            options: [
              "Er lernt, um gut zu werden.",
              "Er lernt, damit gut zu werden.",
              "Er lernt um gut werden.",
            ], correct: 0 },
          // TODO: weitere Fragen ↓
        ],
      },
      {
        id: "statt_ohne_zu_k7",
        name: "statt...zu / ohne...zu",
        questions: [
          { type: "mcq", topic: "infinitivkonstruktionen_k7", subtopic: "statt_ohne_zu_k7",
            question: "Welche Form ist richtig?",
            options: [
              "Er ging weg, ohne sich zu verabschieden.",
              "Er ging weg, ohne sich verabschiedet.",
              "Er ging weg ohne zu verabschieden.",
            ], correct: 0 },
          // TODO: weitere Fragen ↓
        ],
      },
    ],
  },
];

// ─── KLASSE 8 ─────────────────────────────────────────────────────────────────
const K8: DeutschTheme[] = [
  {
    id: "komplexe_grammatik_k8",
    name: "Komplexe Grammatik",
    icon: "⚙️",
    color: "#B44DFF",
    subtopics: [
      {
        id: "partizipial",
        name: "Partizipialkonstruktionen",
        questions: [
          { type: "mcq", topic: "komplexe_grammatik_k8", subtopic: "partizipial",
            question: "Was ersetzt 'das laufende Kind' (als Relativsatz)?",
            options: [
              "das Kind, das läuft",
              "das Kind, das gelaufen ist",
              "das Kind, welches laufen wird",
            ], correct: 0 },
          // TODO: weitere Fragen ↓
        ],
      },
      {
        id: "nebensatztypen",
        name: "Nebensatztypen",
        questions: [
          { type: "mcq", topic: "komplexe_grammatik_k8", subtopic: "nebensatztypen",
            question: "'Er lernte, obwohl er müde war.' – Welcher Nebensatz?",
            options: ["Kausalsatz", "Konzessivsatz", "Finalsatz", "Konditionalsatz"], correct: 1 },
          { type: "mcq", topic: "komplexe_grammatik_k8", subtopic: "nebensatztypen",
            question: "'Er lernte, damit er besteht.' – Welcher Nebensatz?",
            options: ["Kausalsatz", "Konzessivsatz", "Finalsatz", "Konditionalsatz"], correct: 2 },
          // TODO: weitere Fragen ↓
        ],
      },
    ],
  },
  {
    id: "textsorten_k8",
    name: "Textsorten",
    icon: "📝",
    color: "#FF6B00",
    subtopics: [
      {
        id: "eroerterung",
        name: "Erörterung",
        questions: [
          { type: "mcq", topic: "textsorten_k8", subtopic: "eroerterung",
            question: "Was steht am Anfang einer Erörterung?",
            options: ["Argument", "These", "Fazit", "Beispiel"], correct: 1 },
          // TODO: weitere Fragen ↓
        ],
      },
      {
        id: "bericht_erzaehlung",
        name: "Bericht vs. Erzählung",
        questions: [
          { type: "mcq", topic: "textsorten_k8", subtopic: "bericht_erzaehlung",
            question: "Was kennzeichnet einen Bericht?",
            options: [
              "Subjektive Gefühle des Autors",
              "Objektive Darstellung der Fakten",
              "Fantasievolle Ausschmückung",
            ], correct: 1 },
          // TODO: weitere Fragen ↓
        ],
      },
    ],
  },
  {
    id: "literatur_k8",
    name: "Literatur",
    icon: "📖",
    color: "#00D4FF",
    subtopics: [
      {
        id: "erzaehlperspektiven",
        name: "Erzählperspektiven",
        questions: [
          { type: "mcq", topic: "literatur_k8", subtopic: "erzaehlperspektiven",
            question: "'Ich stand am Fenster und sah ...' – Welche Perspektive?",
            options: ["Auktorialer Erzähler", "Ich-Erzähler", "Personaler Erzähler"], correct: 1 },
          // TODO: weitere Fragen ↓
        ],
      },
      {
        id: "epochen",
        name: "Epochen & Gattungen",
        questions: [
          { type: "mcq", topic: "literatur_k8", subtopic: "epochen",
            question: "Zu welcher Gattung gehört ein Roman?",
            options: ["Lyrik", "Epik", "Dramatik"], correct: 1 },
          // TODO: weitere Fragen ↓
        ],
      },
    ],
  },
  {
    id: "nominalstil_k8",
    name: "Nominal- & Verbalstil",
    icon: "📝",
    color: "#00D4FF",
    subtopics: [
      {
        id: "nominalstil_umformung_k8",
        name: "Nominalstil erkennen & umformen",
        questions: [
          { type: "mcq", topic: "nominalstil_k8", subtopic: "nominalstil_umformung_k8",
            question: "Welcher Satz ist im Nominalstil?",
            options: ["Er wurde operiert.", "Die Operation fand statt.", "Man operierte ihn."],
            correct: 1 },
          // TODO: weitere Fragen ↓
        ],
      },
    ],
  },
  {
    id: "sprachebenen_k8",
    name: "Sprachebenen",
    icon: "🎭",
    color: "#B44DFF",
    subtopics: [
      {
        id: "register_k8",
        name: "Standardsprache & Umgangssprache",
        questions: [
          { type: "mcq", topic: "sprachebenen_k8", subtopic: "register_k8",
            question: "Welcher Ausdruck gehört zur Umgangssprache?",
            options: ["Ich verstehe es nicht.", "Ich check das nicht.", "Das ist mir unverständlich."],
            correct: 1 },
          // TODO: weitere Fragen ↓
        ],
      },
      {
        id: "fachsprache_k8",
        name: "Fachsprache & Dialekt",
        questions: [
          { type: "mcq", topic: "sprachebenen_k8", subtopic: "fachsprache_k8",
            question: "Was versteht man unter Fachsprache?",
            options: ["Sprache einer bestimmten Berufsgruppe", "Sprache eines Bundeslandes", "Sprache im Internet"],
            correct: 0 },
          // TODO: weitere Fragen ↓
        ],
      },
    ],
  },
  {
    id: "zeichensetzung_k8",
    name: "Komplexe Zeichensetzung",
    icon: "✒️",
    color: "#00FF88",
    subtopics: [
      {
        id: "semikolon_k8",
        name: "Semikolon & erweiterte Kommaregeln",
        questions: [
          { type: "mcq", topic: "zeichensetzung_k8", subtopic: "semikolon_k8",
            question: "Wann verwendet man ein Semikolon?",
            options: ["Zwischen zwei inhaltlich verbundenen Hauptsätzen", "Am Ende eines Satzes", "Vor einem Relativsatz"],
            correct: 0 },
          // TODO: weitere Fragen ↓
        ],
      },
    ],
  },
];

// ─── HAUPTEXPORT ──────────────────────────────────────────────────────────────

export const DEUTSCH_CURRICULUM: Record<number, DeutschTheme[]> = {
  1: K1, 2: K2, 3: K3, 4: K4,
  5: K5, 6: K6, 7: K7, 8: K8,
};

/** Liefert alle Fragen der gewählten Subtopics (zufällig, max. count). */
export function getDeutschQuestions(
  grade: number,
  selectedSubtopicIds: string[],
  count = 10
): DeutschQuestion[] {
  const themes = DEUTSCH_CURRICULUM[grade] ?? [];
  const pool: DeutschQuestion[] = [];

  for (const theme of themes) {
    for (const sub of theme.subtopics) {
      if (selectedSubtopicIds.includes(sub.id)) {
        pool.push(...sub.questions);
      }
    }
  }

  // Fisher-Yates shuffle
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, count);
}

// ─── BENOTUNG (deutsches System 1–6) ─────────────────────────────────────────

export interface DeutschMark {
  note: number;
  label: string;
  color: string;
  emoji: string;
}

export function calculateDeutschMark(pct: number): DeutschMark {
  if (pct >= 92) return { note: 1, label: "Sehr gut",      color: "#FFD700", emoji: "🌟" };
  if (pct >= 81) return { note: 2, label: "Gut",           color: "#00FF88", emoji: "😊" };
  if (pct >= 67) return { note: 3, label: "Befriedigend",  color: "#00D4FF", emoji: "🙂" };
  if (pct >= 50) return { note: 4, label: "Ausreichend",   color: "#FF6B00", emoji: "😅" };
  if (pct >= 30) return { note: 5, label: "Mangelhaft",    color: "#FF4444", emoji: "😟" };
  return               { note: 6, label: "Ungenügend",    color: "#FF2D78", emoji: "😢" };
}
