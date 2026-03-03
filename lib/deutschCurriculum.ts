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
          { type: "mcq", topic: "buchstaben", subtopic: "gross_klein", question: "Schreibt man Nomen im Deutschen groß?", options: ["Ja, immer", "Nein, nie", "Nur am Satzanfang"], correct: 0 },
{ type: "typing", topic: "buchstaben", subtopic: "gross_klein", question: "Korrekt: 'der ___ (baum)'", answer: ["Baum"] },
{ type: "mcq", topic: "buchstaben", subtopic: "gross_klein", question: "Welches Wort ist ein Nomen?", options: ["laufen", "schön", "Haus"], correct: 2 },
{ type: "typing", topic: "buchstaben", subtopic: "gross_klein", question: "Korrekt: 'ein ___ (hund)'", answer: ["Hund"] },
{ type: "mcq", topic: "buchstaben", subtopic: "gross_klein", question: "Werden Verben normalerweise großgeschrieben?", options: ["Nein", "Ja", "Nur nach 'der'"], correct: 0 },
{ type: "typing", topic: "buchstaben", subtopic: "gross_klein", question: "Korrekt: 'die ___ (sonne)'", answer: ["Sonne"] },
{ type: "mcq", topic: "buchstaben", subtopic: "gross_klein", question: "Satzanfang: '___ (wir) spielen.'", options: ["Wir", "wir"], correct: 0 },
{ type: "typing", topic: "buchstaben", subtopic: "gross_klein", question: "Schreibe groß oder klein: 'das ___ (lernen) fällt mir leicht.'", answer: ["Lernen"] },
{ type: "mcq", topic: "buchstaben", subtopic: "gross_klein", question: "Welches Wort ist groß?", options: ["Beruf", "schnell", "heute"], correct: 0 },
{ type: "typing", topic: "buchstaben", subtopic: "gross_klein", question: "Korrekt: 'meine ___ (mutter)'", answer: ["Mutter"] },
{ type: "mcq", topic: "buchstaben", subtopic: "gross_klein", question: "Eigennamen (Peter, Berlin) werden...", options: ["großgeschrieben", "kleingeschrieben"], correct: 0 },
{ type: "typing", topic: "buchstaben", subtopic: "gross_klein", question: "Korrekt: 'der ___ (apfel)'", answer: ["Apfel"] },
{ type: "mcq", topic: "buchstaben", subtopic: "gross_klein", question: "Welches Wort ist falsch?", options: ["der tisch", "die Lampe", "das Buch"], correct: 0 },
{ type: "typing", topic: "buchstaben", subtopic: "gross_klein", question: "Schreibe richtig: 'alles ___ (gute)'", answer: ["Gute"] },
{ type: "mcq", topic: "buchstaben", subtopic: "gross_klein", question: "Wochentage schreibt man...", options: ["groß", "klein"], correct: 0 },
{ type: "typing", topic: "buchstaben", subtopic: "gross_klein", question: "Korrekt: 'am ___ (montag)'", answer: ["Montag"] },
{ type: "mcq", topic: "buchstaben", subtopic: "gross_klein", question: "Adjektive nach 'etwas' (etwas Schönes) werden...", options: ["großgeschrieben", "kleingeschrieben"], correct: 0 },
{ type: "typing", topic: "buchstaben", subtopic: "gross_klein", question: "Korrekt: 'etwas ___ (neues)'", answer: ["Neues"] },
{ type: "mcq", topic: "buchstaben", subtopic: "gross_klein", question: "Anredepronomen 'Sie' in Briefen ist...", options: ["groß", "klein"], correct: 0 },
{ type: "typing", topic: "buchstaben", subtopic: "gross_klein", question: "Korrekt: 'viele ___ (grüße)'", answer: ["Grüße"] },
{ type: "mcq", topic: "buchstaben", subtopic: "gross_klein", question: "Wird 'ich' im Satzinneren großgeschrieben?", options: ["Nein", "Ja"], correct: 0 },
{ type: "typing", topic: "buchstaben", subtopic: "gross_klein", question: "Korrekt: 'das ___ (wasser)'", answer: ["Wasser"] },
{ type: "mcq", topic: "buchstaben", subtopic: "gross_klein", question: "Tageszeiten nach 'heute' (heute Morgen) sind...", options: ["groß", "klein"], correct: 0 },
{ type: "typing", topic: "buchstaben", subtopic: "gross_klein", question: "Korrekt: 'heute ___ (abend)'", answer: ["Abend"] },
{ type: "mcq", topic: "buchstaben", subtopic: "gross_klein", question: "Welches Wort ist ein Nomen?", options: ["Glück", "froh", "singen"], correct: 0 },
{ type: "typing", topic: "buchstaben", subtopic: "gross_klein", question: "Korrekt: 'das ___ (frühstück)'", answer: ["Frühstück"] },
{ type: "mcq", topic: "buchstaben", subtopic: "gross_klein", question: "Nach einem Doppelpunkt schreibt man groß, wenn...", options: ["ein ganzer Satz folgt", "nur ein Wort folgt"], correct: 0 },
{ type: "typing", topic: "buchstaben", subtopic: "gross_klein", question: "Korrekt: 'mein ___ (freund)'", answer: ["Freund"] },
{ type: "mcq", topic: "buchstaben", subtopic: "gross_klein", question: "Farben als Nomen (das Blau) sind...", options: ["groß", "klein"], correct: 0 },
{ type: "typing", topic: "buchstaben", subtopic: "gross_klein", question: "Korrekt: 'die Farbe ___ (rot)'", answer: ["Rot"] },
{ type: "mcq", topic: "buchstaben", subtopic: "gross_klein", question: "Werden Sprachen nach Präpositionen (auf Deutsch) groß?", options: ["Ja", "Nein"], correct: 0 },
{ type: "typing", topic: "buchstaben", subtopic: "gross_klein", question: "Korrekt: 'auf ___ (englisch)'", answer: ["Englisch"] },
{ type: "mcq", topic: "buchstaben", subtopic: "gross_klein", question: "Welches Wort ist klein?", options: ["gehen", "Schule", "Brot"], correct: 0 },
{ type: "typing", topic: "buchstaben", subtopic: "gross_klein", question: "Korrekt: 'die ___ (arbeit)'", answer: ["Arbeit"] },
{ type: "mcq", topic: "buchstaben", subtopic: "gross_klein", question: "Nomen-Endung '-ung' (Zeitung) bedeutet...", options: ["Großschreibung", "Kleinschreibung"], correct: 0 },
{ type: "typing", topic: "buchstaben", subtopic: "gross_klein", question: "Korrekt: 'die ___ (hoffnung)'", answer: ["Hoffnung"] },
{ type: "mcq", topic: "buchstaben", subtopic: "gross_klein", question: "Nomen-Endung '-heit' (Freiheit) bedeutet...", options: ["Großschreibung", "Kleinschreibung"], correct: 0 },
{ type: "typing", topic: "buchstaben", subtopic: "gross_klein", question: "Korrekt: 'die ___ (freiheit)'", answer: ["Freiheit"] },
{ type: "mcq", topic: "buchstaben", subtopic: "gross_klein", question: "Nomen-Endung '-keit' (Einsamkeit) bedeutet...", options: ["Großschreibung", "Kleinschreibung"], correct: 0 },
{ type: "typing", topic: "buchstaben", subtopic: "gross_klein", question: "Korrekt: 'die ___ (süßigkeit)'", answer: ["Süßigkeit"] },
{ type: "mcq", topic: "buchstaben", subtopic: "gross_klein", question: "Nomen-Endung '-schaft' (Freundschaft) bedeutet...", options: ["Großschreibung", "Kleinschreibung"], correct: 0 },
{ type: "typing", topic: "buchstaben", subtopic: "gross_klein", question: "Korrekt: 'die ___ (mannschaft)'", answer: ["Mannschaft"] },
{ type: "mcq", topic: "buchstaben", subtopic: "gross_klein", question: "Nomen-Endung '-nis' (Ergebnis) bedeutet...", options: ["Großschreibung", "Kleinschreibung"], correct: 0 },
{ type: "typing", topic: "buchstaben", subtopic: "gross_klein", question: "Korrekt: 'das ___ (erlebnis)'", answer: ["Erlebnis"] },
{ type: "mcq", topic: "buchstaben", subtopic: "gross_klein", question: "Werden Zahlen als Nomen (eine Fünf) groß?", options: ["Ja", "Nein"], correct: 0 },
{ type: "typing", topic: "buchstaben", subtopic: "gross_klein", question: "Korrekt: 'eine ___ (eins) schreiben'", answer: ["Eins"] },
{ type: "mcq", topic: "buchstaben", subtopic: "gross_klein", question: "Welches Adjektiv ist groß (nominalisiert)?", options: ["das Beste", "gut", "schön"], correct: 0 },
{ type: "typing", topic: "buchstaben", subtopic: "gross_klein", question: "Korrekt: 'im ___ (dunkeln)'", answer: ["Dunkeln"] },
{ type: "mcq", topic: "buchstaben", subtopic: "gross_klein", question: "Werden Monate großgeschrieben?", options: ["Ja", "Nein"], correct: 0 },
{ type: "typing", topic: "buchstaben", subtopic: "gross_klein", question: "Korrekt: 'der ___ (januar)'", answer: ["Januar"] },
{ type: "mcq", topic: "buchstaben", subtopic: "gross_klein", question: "Nach 'viel' (viel Gutes) schreibt man das Adjektiv...", options: ["groß", "klein"], correct: 0 },
{ type: "typing", topic: "buchstaben", subtopic: "gross_klein", question: "Korrekt: 'viel ___ (erfolg)'", answer: ["Erfolg"] },
{ type: "mcq", topic: "buchstaben", subtopic: "gross_klein", question: "Nach 'wenig' (wenig Neues) schreibt man das Adjektiv...", options: ["groß", "klein"], correct: 0 },
{ type: "typing", topic: "buchstaben", subtopic: "gross_klein", question: "Korrekt: 'wenig ___ (spannendes)'", answer: ["Spannendes"] },
{ type: "mcq", topic: "buchstaben", subtopic: "gross_klein", question: "Präposition + Artikel (beim = bei dem) -> Folgewort ist meist...", options: ["groß", "klein"], correct: 0 },
{ type: "typing", topic: "buchstaben", subtopic: "gross_klein", question: "Korrekt: 'beim ___ (essen)'", answer: ["Essen"] },
{ type: "mcq", topic: "buchstaben", subtopic: "gross_klein", question: "Korrekt: 'vom ___ (laufen)'", options: ["vom Laufen", "vom laufen"], correct: 0 },
{ type: "typing", topic: "buchstaben", subtopic: "gross_klein", question: "Korrekt: 'zum ___ (backen)'", answer: ["Backen"] },
{ type: "mcq", topic: "buchstaben", subtopic: "gross_klein", question: "Wird 'morgens' (Adverb) großgeschrieben?", options: ["Nein", "Ja"], correct: 0 },
{ type: "typing", topic: "buchstaben", subtopic: "gross_klein", question: "Korrekt: 'ich komme ___ (morgens)'", answer: ["morgens"] },
{ type: "mcq", topic: "buchstaben", subtopic: "gross_klein", question: "Wird 'gestern' großgeschrieben?", options: ["Nein", "Ja"], correct: 0 },
{ type: "typing", topic: "buchstaben", subtopic: "gross_klein", question: "Korrekt: 'es war ___ (gestern)'", answer: ["gestern"] },
{ type: "mcq", topic: "buchstaben", subtopic: "gross_klein", question: "Werden Titel (Dr., Prof.) großgeschrieben?", options: ["Ja", "Nein"], correct: 0 },
{ type: "typing", topic: "buchstaben", subtopic: "gross_klein", question: "Korrekt: '___ (herr) Müller'", answer: ["Herr"] },
{ type: "mcq", topic: "buchstaben", subtopic: "gross_klein", question: "Paarbezeichnungen: '___ (jung) und Alt'", options: ["Jung", "jung"], correct: 0 },
{ type: "typing", topic: "buchstaben", subtopic: "gross_klein", question: "Korrekt: 'Groß und ___ (klein)'", answer: ["Klein"] },
{ type: "mcq", topic: "buchstaben", subtopic: "gross_klein", question: "Werden Pronomen wie 'mein, dein' großgeschrieben?", options: ["Nein", "Ja, immer"], correct: 0 },
{ type: "typing", topic: "buchstaben", subtopic: "gross_klein", question: "Korrekt: 'das ist ___ (mein) Buch.'", answer: ["mein"] },
{ type: "mcq", topic: "buchstaben", subtopic: "gross_klein", question: "Wird 'man' (Pronomen) großgeschrieben?", options: ["Nein", "Ja"], correct: 0 },
{ type: "typing", topic: "buchstaben", subtopic: "gross_klein", question: "Korrekt: 'darf ___ (man) das?'", answer: ["man"] },
{ type: "mcq", topic: "buchstaben", subtopic: "gross_klein", question: "Welches Wort ist ein Nomen?", options: ["Gedanke", "denken", "klug"], correct: 0 },
{ type: "typing", topic: "buchstaben", subtopic: "gross_klein", question: "Korrekt: 'ein schöner ___ (tag)'", answer: ["Tag"] },
{ type: "mcq", topic: "buchstaben", subtopic: "gross_klein", question: "Feste Wendung: 'Angst ___ (haben)'", options: ["haben", "Haben"], correct: 0 },
{ type: "typing", topic: "buchstaben", subtopic: "gross_klein", question: "Korrekt: 'ich habe ___ (angst)'", answer: ["Angst"] },
{ type: "mcq", topic: "buchstaben", subtopic: "gross_klein", question: "Feste Wendung: 'Recht ___ (geben)'", options: ["geben", "Geben"], correct: 0 },
{ type: "typing", topic: "buchstaben", subtopic: "gross_klein", question: "Korrekt: 'du hast ___ (recht)'", answer: ["Recht"] },
{ type: "mcq", topic: "buchstaben", subtopic: "gross_klein", question: "Superlativ mit 'am': 'am ___ (besten)'", options: ["besten", "Besten"], correct: 0 },
{ type: "typing", topic: "buchstaben", subtopic: "gross_klein", question: "Korrekt: 'am ___ (schnellsten)'", answer: ["schnellsten"] },
{ type: "mcq", topic: "buchstaben", subtopic: "gross_klein", question: "Werden Himmelsrichtungen als Nomen groß?", options: ["Ja", "Nein"], correct: 0 },
{ type: "typing", topic: "buchstaben", subtopic: "gross_klein", question: "Korrekt: 'der ___ (osten)'", answer: ["Osten"] },
{ type: "mcq", topic: "buchstaben", subtopic: "gross_klein", question: "Korrekt: 'heute ___ (mittag)'", options: ["Mittag", "mittag"], correct: 0 },
{ type: "typing", topic: "buchstaben", subtopic: "gross_klein", question: "Korrekt: '___ (dienstag) abend'", answer: ["Dienstagabend", "Dienstag"] },
{ type: "mcq", topic: "buchstaben", subtopic: "gross_klein", question: "Wird 'etwas' großgeschrieben?", options: ["Nein", "Ja"], correct: 0 },
{ type: "typing", topic: "buchstaben", subtopic: "gross_klein", question: "Korrekt: 'hast du ___ (etwas)?'", answer: ["etwas"] },
{ type: "mcq", topic: "buchstaben", subtopic: "gross_klein", question: "Nomen nach 'kein':", options: ["kein Geld", "kein geld"], correct: 0 },
{ type: "typing", topic: "buchstaben", subtopic: "gross_klein", question: "Korrekt: 'keine ___ (zeit)'", answer: ["Zeit"] },
{ type: "mcq", topic: "buchstaben", subtopic: "gross_klein", question: "Wird 'niemand' großgeschrieben?", options: ["Nein", "Ja"], correct: 0 },
{ type: "typing", topic: "buchstaben", subtopic: "gross_klein", question: "Korrekt: 'es war ___ (niemand) da.'", answer: ["niemand"] },
{ type: "mcq", topic: "buchstaben", subtopic: "gross_klein", question: "Wird 'beide' großgeschrieben?", options: ["Nein", "Ja"], correct: 0 },
{ type: "typing", topic: "buchstaben", subtopic: "gross_klein", question: "Korrekt: 'wir ___ (beide)'", answer: ["beide"] },
{ type: "mcq", topic: "buchstaben", subtopic: "gross_klein", question: "Was ist richtig?", options: ["Rad fahren", "rad Fahren"], correct: 0 },
{ type: "typing", topic: "buchstaben", subtopic: "gross_klein", question: "Korrekt: 'das ___ (radfahren)'", answer: ["Radfahren"] },
{ type: "mcq", topic: "buchstaben", subtopic: "gross_klein", question: "Wird 'null' als Zahlwort klein?", options: ["Ja", "Nein (als Nomen)"], correct: 0 },
{ type: "typing", topic: "buchstaben", subtopic: "gross_klein", question: "Korrekt: 'auf ___ (null) sinken'", answer: ["Null"] },
{ type: "mcq", topic: "buchstaben", subtopic: "gross_klein", question: "Werden substantivierte Verben groß?", options: ["Ja", "Nein"], correct: 0 },
{ type: "typing", topic: "buchstaben", subtopic: "gross_klein", question: "Korrekt: 'beim ___ (lesen)'", answer: ["Lesen"] },
{ type: "mcq", topic: "buchstaben", subtopic: "gross_klein", question: "Anfang nach Ausrufezeichen!", options: ["Groß", "Klein"], correct: 0 },
{ type: "typing", topic: "buchstaben", subtopic: "gross_klein", question: "Korrekt: 'Stopp! ___ (geh) nicht.'", answer: ["Geh"] },
{ type: "mcq", topic: "buchstaben", subtopic: "gross_klein", question: "Wird 'ein bisschen' groß?", options: ["Nein", "Ja"], correct: 0 },
{ type: "typing", topic: "buchstaben", subtopic: "gross_klein", question: "Korrekt: 'ein ___ (bisschen)'", answer: ["bisschen"] },
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
          { type: "mcq", topic: "buchstaben", subtopic: "silben", question: "Wie viele Silben hat 'Haus'?", options: ["1", "2", "3"], correct: 0 },
{ type: "typing", topic: "buchstaben", subtopic: "silben", question: "Trenne in Silben: Wasser →", answer: ["Was-ser"] },
{ type: "mcq", topic: "buchstaben", subtopic: "silben", question: "Wie viele Silben hat 'Apfel'?", options: ["1", "2", "3"], correct: 1 },
{ type: "typing", topic: "buchstaben", subtopic: "silben", question: "Trenne in Silben: Garten →", answer: ["Gar-ten"] },
{ type: "mcq", topic: "buchstaben", subtopic: "silben", question: "Welche Trennung ist richtig?", options: ["Ba-llon", "Bal-lon", "Ball-on"], correct: 1 },
{ type: "typing", topic: "buchstaben", subtopic: "silben", question: "Trenne in Silben: Kinder →", answer: ["Kin-der"] },
{ type: "mcq", topic: "buchstaben", subtopic: "silben", question: "Wie viele Silben hat 'Computer'?", options: ["2", "3", "4"], correct: 1 },
{ type: "typing", topic: "buchstaben", subtopic: "silben", question: "Trenne in Silben: laufen →", answer: ["lau-fen"] },
{ type: "mcq", topic: "buchstaben", subtopic: "silben", question: "Welche Trennung ist richtig?", options: ["Re-gen", "Reg-en", "Rege-n"], correct: 0 },
{ type: "typing", topic: "buchstaben", subtopic: "silben", question: "Trenne in Silben: Sonne →", answer: ["Son-ne"] },
{ type: "mcq", topic: "buchstaben", subtopic: "silben", question: "Wie viele Silben hat 'Banane'?", options: ["2", "3", "4"], correct: 1 },
{ type: "typing", topic: "buchstaben", subtopic: "silben", question: "Trenne in Silben: lernen →", answer: ["ler-nen"] },
{ type: "mcq", topic: "buchstaben", subtopic: "silben", question: "Trennung bei 'st': 'Fenster'", options: ["Fen-ster", "Fens-ter"], correct: 0 },
{ type: "typing", topic: "buchstaben", subtopic: "silben", question: "Trenne in Silben: Bäcker →", answer: ["Bä-cker"] },
{ type: "mcq", topic: "buchstaben", subtopic: "silben", question: "Wie viele Silben hat 'Elefant'?", options: ["2", "3", "4"], correct: 1 },
{ type: "typing", topic: "buchstaben", subtopic: "silben", question: "Trenne in Silben: spielen →", answer: ["spie-len"] },
{ type: "mcq", topic: "buchstaben", subtopic: "silben", question: "Wird 'ck' getrennt? (z.B. Zucker)", options: ["Nein, 'ck' bleibt zusammen", "Ja, 'c-k'"], correct: 0 },
{ type: "typing", topic: "buchstaben", subtopic: "silben", question: "Trenne in Silben: Butter →", answer: ["But-ter"] },
{ type: "mcq", topic: "buchstaben", subtopic: "silben", question: "Wie viele Silben hat 'Ei'?", options: ["1", "2"], correct: 0 },
{ type: "typing", topic: "buchstaben", subtopic: "silben", question: "Trenne in Silben: Finger →", answer: ["Fin-ger"] },
{ type: "mcq", topic: "buchstaben", subtopic: "silben", question: "Welche Trennung ist richtig?", options: ["Bruder", "Bru-der", "Brud-er"], correct: 1 },
{ type: "typing", topic: "buchstaben", subtopic: "silben", question: "Trenne in Silben: Lampe →", answer: ["Lam-pe"] },
{ type: "mcq", topic: "buchstaben", subtopic: "silben", question: "Wie viele Silben hat 'Regenschirm'?", options: ["2", "3", "4"], correct: 1 },
{ type: "typing", topic: "buchstaben", subtopic: "silben", question: "Trenne in Silben: kommen →", answer: ["kom-men"] },
{ type: "mcq", topic: "buchstaben", subtopic: "silben", question: "Wird 'ch' getrennt? (z.B. lachen)", options: ["Nein", "Ja, lach-en"], correct: 0 },
{ type: "typing", topic: "buchstaben", subtopic: "silben", question: "Trenne in Silben: lachen →", answer: ["la-chen"] },
{ type: "mcq", topic: "buchstaben", subtopic: "silben", question: "Wie viele Silben hat 'Winter'?", options: ["1", "2", "3"], correct: 1 },
{ type: "typing", topic: "buchstaben", subtopic: "silben", question: "Trenne in Silben: Auto →", answer: ["Au-to"] },
{ type: "mcq", topic: "buchstaben", subtopic: "silben", question: "Welche Trennung ist falsch?", options: ["Him-mel", "Hi-mmel"], correct: 1 },
{ type: "typing", topic: "buchstaben", subtopic: "silben", question: "Trenne in Silben: Brötchen →", answer: ["Bröt-chen"] },
{ type: "mcq", topic: "buchstaben", subtopic: "silben", question: "Wie viele Silben hat 'Schokolade'?", options: ["3", "4", "5"], correct: 1 },
{ type: "typing", topic: "buchstaben", subtopic: "silben", question: "Trenne in Silben: Schule →", answer: ["Schu-le"] },
{ type: "mcq", topic: "buchstaben", subtopic: "silben", question: "Wird 'sch' getrennt? (z.B. waschen)", options: ["Nein", "Ja"], correct: 0 },
{ type: "typing", topic: "buchstaben", subtopic: "silben", question: "Trenne in Silben: waschen →", answer: ["wa-schen"] },
{ type: "mcq", topic: "buchstaben", subtopic: "silben", question: "Wie viele Silben hat 'Vogel'?", options: ["1", "2"], correct: 1 },
{ type: "typing", topic: "buchstaben", subtopic: "silben", question: "Trenne in Silben: fliegen →", answer: ["flie-gen"] },
{ type: "mcq", topic: "buchstaben", subtopic: "silben", question: "Welche Trennung ist richtig?", options: ["Ka-tze", "Kat-ze"], correct: 1 },
{ type: "typing", topic: "buchstaben", subtopic: "silben", question: "Trenne in Silben: Katze →", answer: ["Kat-ze"] },
{ type: "mcq", topic: "buchstaben", subtopic: "silben", question: "Wie viele Silben hat 'Bleistift'?", options: ["1", "2", "3"], correct: 1 },
{ type: "typing", topic: "buchstaben", subtopic: "silben", question: "Trenne in Silben: Tafel →", answer: ["Ta-fel"] },
{ type: "mcq", topic: "buchstaben", subtopic: "silben", question: "Wird 'ph' getrennt? (z.B. Alphabet)", options: ["Nein", "Ja"], correct: 0 },
{ type: "typing", topic: "buchstaben", subtopic: "silben", question: "Trenne in Silben: Delfin →", answer: ["Del-fin"] },
{ type: "mcq", topic: "buchstaben", subtopic: "silben", question: "Wie viele Silben hat 'Hund'?", options: ["1", "2"], correct: 0 },
{ type: "typing", topic: "buchstaben", subtopic: "silben", question: "Trenne in Silben: bellen →", answer: ["bel-len"] },
{ type: "mcq", topic: "buchstaben", subtopic: "silben", question: "Welche Trennung ist richtig?", options: ["Ta-sche", "Tas-che"], correct: 0 },
{ type: "typing", topic: "buchstaben", subtopic: "silben", question: "Trenne in Silben: Tasche →", answer: ["Ta-sche"] },
{ type: "mcq", topic: "buchstaben", subtopic: "silben", question: "Wie viele Silben hat 'Ferien'?", options: ["2", "3"], correct: 1 },
{ type: "typing", topic: "buchstaben", subtopic: "silben", question: "Trenne in Silben: Sommer →", answer: ["Som-mer"] },
{ type: "mcq", topic: "buchstaben", subtopic: "silben", question: "Kann eine Silbe nur aus einem Vokal bestehen? (z.B. Abend)", options: ["Ja", "Nein"], correct: 0 },
{ type: "typing", topic: "buchstaben", subtopic: "silben", question: "Trenne in Silben: Abend →", answer: ["A-bend"] },
{ type: "mcq", topic: "buchstaben", subtopic: "silben", question: "Wie viele Silben hat 'Krokodil'?", options: ["2", "3", "4"], correct: 1 },
{ type: "typing", topic: "buchstaben", subtopic: "silben", question: "Trenne in Silben: Mutter →", answer: ["Mut-ter"] },
{ type: "mcq", topic: "buchstaben", subtopic: "silben", question: "Welche Trennung ist richtig?", options: ["He-xe", "Hex-e"], correct: 0 },
{ type: "typing", topic: "buchstaben", subtopic: "silben", question: "Trenne in Silben: Hexe →", answer: ["He-xe"] },
{ type: "mcq", topic: "buchstaben", subtopic: "silben", question: "Wie viele Silben hat 'Zitrone'?", options: ["2", "3", "4"], correct: 1 },
{ type: "typing", topic: "buchstaben", subtopic: "silben", question: "Trenne in Silben: gelb →", answer: ["gelb"] },
{ type: "mcq", topic: "buchstaben", subtopic: "silben", question: "Wird 'ng' getrennt? (z.B. Finger)", options: ["Nein, meistens nicht", "Ja, Fin-ger"], correct: 1 },
{ type: "typing", topic: "buchstaben", subtopic: "silben", question: "Trenne in Silben: singen →", answer: ["sin-gen"] },
{ type: "mcq", topic: "buchstaben", subtopic: "silben", question: "Wie viele Silben hat 'Fisch'?", options: ["1", "2"], correct: 0 },
{ type: "typing", topic: "buchstaben", subtopic: "silben", question: "Trenne in Silben: schwimmen →", answer: ["schwim-men"] },
{ type: "mcq", topic: "buchstaben", subtopic: "silben", question: "Welche Trennung ist richtig?", options: ["Kof-fer", "Ko-ffer"], correct: 0 },
{ type: "typing", topic: "buchstaben", subtopic: "silben", question: "Trenne in Silben: Koffer →", answer: ["Kof-fer"] },
{ type: "mcq", topic: "buchstaben", subtopic: "silben", question: "Wie viele Silben hat 'Polizei'?", options: ["3", "4"], correct: 0 },
{ type: "typing", topic: "buchstaben", subtopic: "silben", question: "Trenne in Silben: helfen →", answer: ["hel-fen"] },
{ type: "mcq", topic: "buchstaben", subtopic: "silben", question: "Wird 'tz' getrennt? (z.B. sitzen)", options: ["Ja, sit-zen", "Nein"], correct: 0 },
{ type: "typing", topic: "buchstaben", subtopic: "silben", question: "Trenne in Silben: sitzen →", answer: ["sit-zen"] },
{ type: "mcq", topic: "buchstaben", subtopic: "silben", question: "Wie viele Silben hat 'Kaffee'?", options: ["1", "2"], correct: 1 },
{ type: "typing", topic: "buchstaben", subtopic: "silben", question: "Trenne in Silben: Kaffee →", answer: ["Kaf-fee"] },
{ type: "mcq", topic: "buchstaben", subtopic: "silben", question: "Welche Trennung ist richtig?", options: ["Ei-er", "E-ier"], correct: 0 },
{ type: "typing", topic: "buchstaben", subtopic: "silben", question: "Trenne in Silben: Eier →", answer: ["Ei-er"] },
{ type: "mcq", topic: "buchstaben", subtopic: "silben", question: "Wie viele Silben hat 'Maus'?", options: ["1", "2"], correct: 0 },
{ type: "typing", topic: "buchstaben", subtopic: "silben", question: "Trenne in Silben: Käse →", answer: ["Kä-se"] },
{ type: "mcq", topic: "buchstaben", subtopic: "silben", question: "Wird 'dt' getrennt? (z.B. Stadt)", options: ["Nein", "Ja"], correct: 0 },
{ type: "typing", topic: "buchstaben", subtopic: "silben", question: "Trenne in Silben: Städte →", answer: ["Städ-te"] },
{ type: "mcq", topic: "buchstaben", subtopic: "silben", question: "Wie viele Silben hat 'Handy'?", options: ["1", "2"], correct: 1 },
{ type: "typing", topic: "buchstaben", subtopic: "silben", question: "Trenne in Silben: Handy →", answer: ["Han-dy"] },
{ type: "mcq", topic: "buchstaben", subtopic: "silben", question: "Welche Trennung ist richtig?", options: ["Löffel", "Löf-fel"], correct: 1 },
{ type: "typing", topic: "buchstaben", subtopic: "silben", question: "Trenne in Silben: Löffel →", answer: ["Löf-fel"] },
{ type: "mcq", topic: "buchstaben", subtopic: "silben", question: "Wie viele Silben hat 'Abenteuer'?", options: ["3", "4", "5"], correct: 1 },
{ type: "typing", topic: "buchstaben", subtopic: "silben", question: "Trenne in Silben: Abenteuer →", answer: ["A-ben-teu-er"] },
{ type: "mcq", topic: "buchstaben", subtopic: "silben", question: "Trennung bei drei Konsonanten: 'Flasche'", options: ["Fla-sche", "Flas-che"], correct: 0 },
{ type: "typing", topic: "buchstaben", subtopic: "silben", question: "Trenne in Silben: Flasche →", answer: ["Fla-sche"] },
{ type: "mcq", topic: "buchstaben", subtopic: "silben", question: "Wie viele Silben hat 'Wurst'?", options: ["1", "2"], correct: 0 },
{ type: "typing", topic: "buchstaben", subtopic: "silben", question: "Trenne in Silben: Messer →", answer: ["Mes-ser"] },
{ type: "mcq", topic: "buchstaben", subtopic: "silben", question: "Trennung von 'Diphthongen' (ei, au, eu):", options: ["Werden nicht getrennt", "Können getrennt werden"], correct: 0 },
{ type: "typing", topic: "buchstaben", subtopic: "silben", question: "Trenne in Silben: heute →", answer: ["heu-te"] },
{ type: "mcq", topic: "buchstaben", subtopic: "silben", question: "Wie viele Silben hat 'Europa'?", options: ["2", "3", "4"], correct: 1 },
{ type: "typing", topic: "buchstaben", subtopic: "silben", question: "Trenne in Silben: Europa →", answer: ["Eu-ro-pa"] },
{ type: "mcq", topic: "buchstaben", subtopic: "silben", question: "Trennung bei 'pf': 'Apfel'", options: ["A-pfel", "Ap-fel"], correct: 1 },
{ type: "typing", topic: "buchstaben", subtopic: "silben", question: "Trenne in Silben: Kopfschmerz →", answer: ["Kopf-schmerz"] },
{ type: "mcq", topic: "buchstaben", subtopic: "silben", question: "Wie viele Silben hat 'Brot'?", options: ["1", "2"], correct: 0 },
{ type: "typing", topic: "buchstaben", subtopic: "silben", question: "Trenne in Silben: Bäcker →", answer: ["Bä-cker"] },
{ type: "mcq", topic: "buchstaben", subtopic: "silben", question: "Wird 'bl' am Wortanfang getrennt?", options: ["Nein", "Ja"], correct: 0 },
{ type: "typing", topic: "buchstaben", subtopic: "silben", question: "Trenne in Silben: Blume →", answer: ["Blu-me"] },
{ type: "mcq", topic: "buchstaben", subtopic: "silben", question: "Wie viele Silben hat 'Gabel'?", options: ["1", "2"], correct: 1 },
{ type: "typing", topic: "buchstaben", subtopic: "silben", question: "Trenne in Silben: Gabel →", answer: ["Ga-fel"] },
{ type: "mcq", topic: "buchstaben", subtopic: "silben", question: "Welche Trennung ist richtig?", options: ["Un-ter", "Unt-er"], correct: 0 },
{ type: "typing", topic: "buchstaben", subtopic: "silben", question: "Trenne in Silben: unter →", answer: ["un-ter"] },
{ type: "mcq", topic: "buchstaben", subtopic: "silben", question: "Wie viele Silben hat 'Dinosaurier'?", options: ["4", "5", "6"], correct: 1 },
{ type: "typing", topic: "buchstaben", subtopic: "silben", question: "Trenne in Silben: Computer →", answer: ["Com-pu-ter"] }
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
          { type: "mcq", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Wo muss das Komma stehen? 'Er sagt_dass er kommt.'", options: ["vor 'dass'", "nach 'dass'", "gar kein Komma"], correct: 0 },
{ type: "typing", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Welches Bindewort leitet oft einen Nebensatz mit Komma ein: 'Ich komme, ___ ich Zeit habe.'", answer: ["wenn"] },
{ type: "mcq", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Ist der Satz korrekt? 'Ich glaube dass, es regnet.'", options: ["Ja", "Nein, Komma muss vor 'dass'", "Nein, kein Komma nötig"], correct: 1 },
{ type: "typing", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Ergänze das Bindewort: 'Sie rennt, ___ sie den Bus nicht verpassen will.'", answer: ["weil"] },
{ type: "mcq", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Wo fehlt das Komma? 'Wir wissen_wer das war.'", options: ["vor 'wer'", "nach 'wer'", "kein Komma"], correct: 0 },
{ type: "typing", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Setze das Komma: 'Ich hoffe ___ dass du gesund bist.' (Schreibe das Wort davor + Komma)", answer: ["hoffe,"] },
{ type: "mcq", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Welcher Satz ist richtig?", options: ["Ich gehe heim, weil ich müde bin.", "Ich gehe heim weil, ich müde bin.", "Ich gehe heim weil ich müde bin."], correct: 0 },
{ type: "typing", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Ergänze das Komma-Wort: 'Ich frage mich, ___ du heute kommst.' (ob/und/oder)", answer: ["ob"] },
{ type: "mcq", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Braucht man vor 'und' in einer Aufzählung ein Komma?", options: ["Ja", "Nein", "Nur manchmal"], correct: 1 },
{ type: "typing", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Was fehlt? 'Ich warte hier ___ bis du fertig bist.'", answer: [","] },
{ type: "mcq", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Wo gehört das Komma hin? 'Wenn die Sonne scheint_gehen wir raus.'", options: ["vor 'Wenn'", "nach 'scheint'", "gar nicht"], correct: 1 },
{ type: "typing", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Schreibe das Bindewort mit Komma davor: 'Ich bleibe zu Hause ___ es regnet.'", answer: [", weil", ", da"] },
{ type: "mcq", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Satzbau: 'Er freut sich, dass er Ferien hat.' Korrekt?", options: ["Ja", "Nein"], correct: 0 },
{ type: "typing", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Welches Wort leitet den Nebensatz ein? 'Ich weiß nicht, ob er kommt.'", answer: ["ob"] },
{ type: "mcq", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Wo ist der Fehler? 'Sie sagt, dass, sie morgen kommt.'", options: ["Komma nach 'dass' ist falsch", "Komma vor 'dass' ist falsch", "Kein Fehler"], correct: 0 },
{ type: "typing", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Vervollständige: 'Es ist wichtig ___ dass man lernt.'", answer: [","] },
{ type: "mcq", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Wo trennt man? 'Ich lerne Deutsch_damit ich in Berlin arbeiten kann.'", options: ["vor 'damit'", "nach 'damit'", "vor 'ich'"], correct: 0 },
{ type: "typing", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Frage-Nebensatz: 'Er fragt, ___ die Schule beginnt.' (wann/und)", answer: ["wann"] },
{ type: "mcq", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Muss vor 'weil' immer ein Komma stehen, wenn ein Nebensatz folgt?", options: ["Ja", "Nein"], correct: 0 },
{ type: "typing", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Korrigiere: 'Ich komme wenn du rufst.' (Schreibe das Wort mit Komma)", answer: ["komme,"] },
          { type: "mcq", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Wo steht das Komma? 'Nachdem er gegessen hatte_ging er schlafen.'", options: ["vor 'Nachdem'", "nach 'hatte'", "gar kein Komma"], correct: 1 },
{ type: "typing", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Welches Bindewort leitet den Grund ein? 'Ich lerne, ___ ich die Prüfung bestehen will.'", answer: ["weil", "da"] },
{ type: "mcq", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Ist dieser Satz korrekt? 'Obwohl es regnet, gehen wir spazieren.'", options: ["Ja", "Nein, Komma nach 'regnet' ist falsch", "Nein, Komma vor 'Obwohl' fehlt"], correct: 0 },
{ type: "typing", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Setze das Komma: 'Sie hofft ___ dass alles gut geht.'", answer: [","] },
{ type: "mcq", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Wo fehlt das Komma? 'Das ist der Mann_den ich gestern sah.'", options: ["vor 'den'", "nach 'Mann'", "kein Komma nötig"], correct: 0 },
{ type: "typing", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Relativsatz: 'Der Film, ___ ich sah, war gut.' (den/das/die)", answer: ["den"] },
{ type: "mcq", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Wo gehört das Komma hin? 'Bevor ich gehe_trinke ich einen Kaffee.'", options: ["vor 'Bevor'", "nach 'gehe'", "nach 'trinke'"], correct: 1 },
{ type: "typing", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Ergänze das Wort: 'Ich weiß, ___ du Recht hast.' (dass/das)", answer: ["dass"] },
{ type: "mcq", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Trennt das Komma Haupt- und Nebensatz?", options: ["Ja, immer", "Nein, nie", "Nur bei 'und'"], correct: 0 },
{ type: "typing", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Korrektur: 'Ich frage mich ob es morgen schneit.' (Schreibe das Wort vor dem Komma + Komma)", answer: ["mich,"] },
{ type: "mcq", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Ist das Komma richtig gesetzt? 'Wir hoffen, bald zu kommen.'", options: ["Ja, optional bei Infinitiv", "Nein, verboten", "Ja, zwingend"], correct: 0 },
{ type: "typing", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Bindewort für Zeit: 'Ich sage es dir, ___ ich ankomme.'", answer: ["wenn", "sobald"] },
{ type: "mcq", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Wo fehlt das Komma? 'Er fragt_wo der Bahnhof ist.'", options: ["vor 'wo'", "nach 'fragt'", "nach 'wo'"], correct: 0 },
{ type: "typing", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Relativsatz: 'Das Buch, ___ auf dem Tisch liegt.' (den/das/die)", answer: ["das"] },
{ type: "mcq", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Richtig oder falsch? 'Während er las, hörte er Musik.'", options: ["Richtig", "Falsch"], correct: 0 },
{ type: "typing", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Setze das Komma: 'Er kam zu spät ___ weil sein Auto kaputt war.'", answer: [","] },
{ type: "mcq", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Braucht 'damit' ein Komma davor?", options: ["Ja, wenn es einen Nebensatz einleitet", "Nein, nie", "Nur am Satzanfang"], correct: 0 },
{ type: "typing", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Wie heißt das Bindewort? 'Er kam, ___ er krank war.' (obwohl/und)", answer: ["obwohl"] },
{ type: "mcq", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Satzbau: 'Dass du da bist, freut mich.' Korrekt?", options: ["Ja", "Nein, Komma nach 'bist' ist falsch"], correct: 0 },
{ type: "typing", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Was fehlt? 'Sag mir ___ was du denkst.'", answer: [","] },
          { type: "mcq", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Wo steht das Komma? 'Seit er hier wohnt_ist er glücklicher.'", options: ["nach 'wohnt'", "vor 'Seit'", "kein Komma"], correct: 0 },
{ type: "typing", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Bindewort für Bedingung: 'Ich helfe dir, ___ du mich fragst.'", answer: ["wenn", "falls"] },
{ type: "mcq", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Ist der Satz korrekt? 'Er geht, ohne, ein Wort zu sagen.'", options: ["Nein, Komma nach 'ohne' ist falsch", "Ja", "Nein, Komma vor 'ohne' fehlt"], correct: 0 },
{ type: "typing", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Setze das Komma: 'Egal ___ was du sagst.'", answer: [","] },
{ type: "mcq", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Relativsatz: 'Die Frau_die dort steht_ist meine Lehrerin.'", options: ["zwei Kommas nötig", "ein Komma vor 'die'", "kein Komma"], correct: 0 },
{ type: "typing", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Relativsatz: 'Das Kind, ___ dort spielt.' (den/das/die)", answer: ["das"] },
{ type: "mcq", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Wo fehlt das Komma? 'Anstatt zu lernen_sah er fern.'", options: ["nach 'lernen'", "vor 'Anstatt'", "nach 'sah'"], correct: 0 },
{ type: "typing", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Ergänze das Wort: 'Ich weiß nicht, ___ spät es ist.'", answer: ["wie"] },
{ type: "mcq", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Muss vor 'sondern' ein Komma stehen?", options: ["Ja", "Nein", "Nur am Satzende"], correct: 0 },
{ type: "typing", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Korrektur: 'Ich komme morgen, außer es regnet.' (Was fehlt vor 'es'?)", answer: [","] },
{ type: "mcq", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Welcher Satz ist richtig?", options: ["Er kam, sah und siegte.", "Er kam, sah, und siegte.", "Er kam sah und siegte."], correct: 0 },
{ type: "typing", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Bindewort: 'Er fragt, ___ wir kommen.' (ob/und)", answer: ["ob"] },
{ type: "mcq", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Wo fehlt das Komma? 'Er liebt Pizza_aber keine Pasta.'", options: ["vor 'aber'", "nach 'Pizza'", "vor 'keine'"], correct: 0 },
{ type: "typing", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Setze das Zeichen: 'Ich backe einen Kuchen ___ du kochst Tee.'", answer: [","] },
{ type: "mcq", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Korrekt? 'Ich hoffe, dass du kommst.'", options: ["Ja", "Nein"], correct: 0 },
{ type: "typing", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Was fehlt? 'Ich lerne Deutsch ___ um zu verstehen.'", answer: [","] },
{ type: "mcq", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Wo gehört das Komma hin? 'Bevor wir essen_waschen wir uns.'", options: ["nach 'essen'", "vor 'Bevor'", "nach 'wir'"], correct: 0 },
{ type: "typing", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Ergänze: 'Das ist alles ___ was ich weiß.'", answer: [","] },
{ type: "mcq", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Braucht man ein Komma vor 'doch'?", options: ["Ja, meistens", "Nein, nie", "Nur nach 'und'"], correct: 0 },
{ type: "typing", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Korrektur: 'Er lügt obwohl er es weiß.' (Wort vor dem Komma + Komma)", answer: ["lügt,"] },
          { type: "mcq", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Muss vor 'da' (mivel) ein Komma stehen? 'Ich bleibe hier_da es regnet.'", options: ["Ja", "Nein", "Nur am Satzanfang"], correct: 0 },
{ type: "typing", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Ergänze das Bindewort: 'Ich gehe schlafen, ___ ich müde bin.'", answer: ["weil", "da"] },
{ type: "mcq", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Wo fehlt das Komma? 'Sie sagt_sie habe keine Zeit.'", options: ["vor 'sie habe'", "nach 'sagt'", "kein Komma bei indirekter Rede"], correct: 1 },
{ type: "typing", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Relativsatz: 'Das ist das Haus, ___ ich kaufen will.'", answer: ["das"] },
{ type: "mcq", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Ist der Satz korrekt? 'Einerseits lerne ich, andererseits spiele ich.'", options: ["Ja", "Nein, Komma nach 'lerne' ist falsch"], correct: 0 },
{ type: "typing", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Setze das Komma: 'Ich freue mich ___ dich zu sehen.'", answer: [","] },
{ type: "mcq", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Wo steht das Komma? 'Wer nicht lernt_bleibt dumm.'", options: ["nach 'lernt'", "nach 'Wer'", "kein Komma"], correct: 0 },
{ type: "typing", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Wie heißt das Bindewort? 'Ich komme, ___ du willst oder nicht.'", answer: ["ob"] },
{ type: "mcq", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Braucht 'sowie' ein Komma?", options: ["Nein, meistens wie 'und'", "Ja, immer", "Nur vor Verben"], correct: 0 },
{ type: "typing", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Was fehlt? 'Ich helfe dir ___ sofern ich kann.'", answer: [","] },
{ type: "mcq", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Welcher Satz ist richtig?", options: ["Je mehr er isst, desto dicker wird er.", "Je mehr er isst desto dicker wird er.", "Je mehr er isst, desto dicker, wird er."], correct: 0 },
{ type: "typing", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Ergänze das Wort: 'Er kam, ___ er gerufen wurde.'", answer: ["nachdem", "als"] },
{ type: "mcq", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Wo gehört das Komma hin? 'Um gesund zu bleiben_muss man Sport treiben.'", options: ["nach 'bleiben'", "vor 'Um'", "nach 'Sport'"], correct: 0 },
{ type: "typing", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Schreibe das Komma-Wort: 'Ich komme morgen ___ außer wenn es stürmt.'", answer: [","] },
{ type: "mcq", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Satzbau: 'Er behauptet, recht zu haben.' Korrekt?", options: ["Ja", "Nein"], correct: 0 },
{ type: "typing", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Vervollständige: 'Es ist egal ___ wer das Fenster zerbrochen hat.'", answer: [","] },
{ type: "mcq", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Wo fehlt das Komma? 'Obwohl er reich ist_ist er sparsam.'", options: ["nach 'ist' (erstes)", "vor 'Obwohl'", "nach 'reich'"], correct: 0 },
{ type: "typing", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Relativsatz: 'Die Leute, ___ wir gestern trafen.'", answer: ["die"] },
{ type: "mcq", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Muss vor 'wie' ein Komma stehen, wenn ein ganzer Satz folgt?", options: ["Ja", "Nein, nie", "Nur bei Vergleichen von Nomen"], correct: 0 },
{ type: "typing", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Setze das Zeichen: 'Ich wusste nicht ___ dass du hier bist.'", answer: [","] },
          { type: "mcq", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Wo fehlt das Komma? 'Er fragt_wann wir gehen.'", options: ["vor 'wann'", "nach 'wann'", "kein Komma"], correct: 0 },
{ type: "typing", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Relativsatz: 'Der Baum, ___ im Garten steht.'", answer: ["der"] },
{ type: "mcq", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Ist dieser Satz korrekt? 'Ich hoffe, dich bald zu sehen.'", options: ["Ja", "Nein"], correct: 0 },
{ type: "typing", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Ergänze das Bindewort: 'Er läuft, ___ er kann.' (so schnell/und)", answer: ["so schnell"] },
{ type: "mcq", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Muss vor 'jedoch' ein Komma stehen, wenn es Sätze verbindet?", options: ["Ja", "Nein"], correct: 0 },
{ type: "typing", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Setze das Komma: 'Egal ___ wie spät es ist.'", answer: [","] },
{ type: "mcq", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Wo trennt man? 'Ich denke_dass du Recht hast.'", options: ["vor 'dass'", "nach 'dass'", "gar nicht"], correct: 0 },
{ type: "typing", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Was fehlt? 'Ich lerne Deutsch ___ damit ich es verstehe.'", answer: [","] },
{ type: "mcq", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Richtig oder falsch? 'Sie sagt er kommt morgen.' (Ohne 'dass')", options: ["Richtig, Komma optional", "Falsch, Komma muss", "Richtig, kein Komma nötig"], correct: 2 },
{ type: "typing", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Bindewort: 'Wir warten, ___ der Regen aufhört.'", answer: ["bis"] },
{ type: "mcq", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Wo steht das Komma? 'Während sie schlief_sang er.'", options: ["nach 'schlief'", "vor 'Während'", "nach 'sang'"], correct: 0 },
{ type: "typing", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Relativsatz: 'Das ist die Frau, ___ ich gestern half.'", answer: ["der"] },
{ type: "mcq", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Braucht man bei 'entweder ... oder' ein Komma vor 'oder'?", options: ["Nein", "Ja", "Nur bei langen Sätzen"], correct: 0 },
{ type: "typing", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Setze das Zeichen: 'Ich gehe ___ sobald ich fertig bin.'", answer: [","] },
{ type: "mcq", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Wo fehlt das Komma? 'Er wollte wissen_warum niemand da war.'", options: ["vor 'warum'", "nach 'wissen'", "vor 'da'"], correct: 0 },
{ type: "typing", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Vervollständige: 'Es ist schade ___ dass du gehst.'", answer: [","] },
{ type: "mcq", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Satzbau: 'Wer zuerst kommt, mahlt zuerst.' Korrekt?", options: ["Ja", "Nein"], correct: 0 },
{ type: "typing", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Ergänze: 'Ich frage, ___ du Zeit hast.'", answer: ["ob"] },
{ type: "mcq", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Wo gehört das Komma hin? 'Anstatt zu arbeiten_schlief er.'", options: ["nach 'arbeiten'", "vor 'Anstatt'", "nach 'er'"], correct: 0 },
{ type: "typing", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Korrektur: 'Ich helfe dir wenn du willst.' (Wort vor Komma + Komma)", answer: ["dir,"] },
          { type: "mcq", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Muss vor 'bevor' ein Komma stehen?", options: ["Ja, wenn ein Nebensatz beginnt", "Nein, nie", "Nur nach Verben"], correct: 0 },
{ type: "typing", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Bindewort: 'Er kam zu spät, ___ der Bus weg war.'", answer: ["weil", "da"] },
{ type: "mcq", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Wo fehlt das Komma? 'Dort steht das Auto_das ich meine.'", options: ["vor 'das' (zweites)", "nach 'Auto'", "gar nicht"], correct: 0 },
{ type: "typing", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Setze das Komma: 'Ich bin sicher ___ dass er kommt.'", answer: [","] },
{ type: "mcq", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Welcher Satz ist richtig?", options: ["Er mag Äpfel, Birnen und Orangen.", "Er mag Äpfel, Birnen, und Orangen.", "Er mag Äpfel Birnen und Orangen."], correct: 0 },
{ type: "typing", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Relativsatz: 'Die Kinder, ___ dort spielen.'", answer: ["die"] },
{ type: "mcq", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Wo fehlt das Komma? 'Falls es regnet_bleiben wir hier.'", options: ["nach 'regnet'", "vor 'Falls'", "nach 'wir'"], correct: 0 },
{ type: "typing", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Ergänze: 'Sag mir, ___ du das gemacht hast.'", answer: ["wie"] },
{ type: "mcq", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Muss vor 'sondern' ein Komma stehen?", options: ["Ja", "Nein"], correct: 0 },
{ type: "typing", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Korrektur: 'Ich weiß dass du lügst.' (Wort vor Komma + Komma)", answer: ["weiß,"] },
{ type: "mcq", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Ist der Satz korrekt? 'Um zu gewinnen, muss man trainieren.'", options: ["Ja", "Nein"], correct: 0 },
{ type: "typing", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Bindewort: 'Ich bleibe, ___ du gehst.'", answer: ["während", "bis"] },
{ type: "mcq", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Wo gehört das Komma hin? 'Nachdem er fertig war_ging er weg.'", options: ["nach 'war'", "vor 'Nachdem'", "nach 'er'"], correct: 0 },
{ type: "typing", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Was fehlt? 'Ich frage mich ___ warum du das sagst.'", answer: [","] },
{ type: "mcq", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Satzbau: 'Dass er krank ist, weiß ich.' Korrekt?", options: ["Ja", "Nein"], correct: 0 },
{ type: "typing", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Setze das Zeichen: 'Sie ist klein ___ aber oho!'", answer: [","] },
{ type: "mcq", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Wo fehlt das Komma? 'Ob er kommt_ist unklar.'", options: ["nach 'kommt'", "vor 'Ob'", "nach 'ist'"], correct: 0 },
{ type: "typing", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Relativsatz: 'Das Buch, ___ ich lese.'", answer: ["das"] },
{ type: "mcq", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Braucht 'und' in Aufzählungen ein Komma?", options: ["Nein", "Ja"], correct: 0 },
{ type: "typing", topic: "zeichensetzung_k5", subtopic: "komma_nebensatz", question: "Vervollständige: 'Es ist wichtig ___ dass alle da sind.'", answer: [","] },
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
