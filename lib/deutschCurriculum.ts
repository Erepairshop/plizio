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
         { type:"mcq", topic:"buchstaben", subtopic:"vokale", question:"Welcher Buchstabe ist ein Vokal?", options:["a","b","d","f"], correct:0 },
{ type:"mcq", topic:"buchstaben", subtopic:"vokale", question:"Welcher Buchstabe ist kein Vokal?", options:["e","i","o","k"], correct:3 },
{ type:"typing", topic:"buchstaben", subtopic:"vokale", question:"Schreibe einen Vokal.", answer:["a","e","i","o","u"] },
{ type:"mcq", topic:"buchstaben", subtopic:"vokale", question:"Wie viele Vokale gibt es (a, e, i, o, u)?", options:["3","4","5","6"], correct:2 },
{ type:"typing", topic:"buchstaben", subtopic:"vokale", question:"Welcher Vokal ist in: Hund?", answer:["u"] },
{ type:"mcq", topic:"buchstaben", subtopic:"vokale", question:"Welcher Vokal ist in: Regen?", options:["e","a","o","u"], correct:0 },
{ type:"typing", topic:"buchstaben", subtopic:"vokale", question:"Welcher Vokal ist in: Brot?", answer:["o"] },
{ type:"mcq", topic:"buchstaben", subtopic:"vokale", question:"Welcher Vokal ist in: Lampe?", options:["a","e","a und e","i"], correct:2 },
{ type:"typing", topic:"buchstaben", subtopic:"vokale", question:"Welcher Vokal ist in: Tisch?", answer:["i"] },
{ type:"mcq", topic:"buchstaben", subtopic:"vokale", question:"Welcher Vokal ist in: Maus?", options:["a","u","a und u","e"], correct:2 },
          { type:"mcq", topic:"buchstaben", subtopic:"vokale", question:"Welcher Vokal ist in: Apfel?", options:["a","e","a und e","o"], correct:2 },
{ type:"typing", topic:"buchstaben", subtopic:"vokale", question:"Welcher Vokal ist in: Mond?", answer:["o"] },
{ type:"mcq", topic:"buchstaben", subtopic:"vokale", question:"Welcher Vokal ist in: Schule?", options:["u","e","u und e","a"], correct:2 },
{ type:"typing", topic:"buchstaben", subtopic:"vokale", question:"Welcher Vokal ist in: Bett?", answer:["e"] },
{ type:"mcq", topic:"buchstaben", subtopic:"vokale", question:"Welcher Vokal ist in: Kino?", options:["i","o","i und o","a"], correct:2 },
{ type:"typing", topic:"buchstaben", subtopic:"vokale", question:"Welcher Vokal ist in: Bus?", answer:["u"] },
{ type:"mcq", topic:"buchstaben", subtopic:"vokale", question:"Welcher Vokal ist in: Rose?", options:["o","e","o und e","a"], correct:2 },
{ type:"typing", topic:"buchstaben", subtopic:"vokale", question:"Welcher Vokal ist in: Tiger?", answer:["i","e"] },
{ type:"mcq", topic:"buchstaben", subtopic:"vokale", question:"Welcher Vokal ist in: Nase?", options:["a","e","a und e","i"], correct:2 },
{ type:"typing", topic:"buchstaben", subtopic:"vokale", question:"Welcher Vokal ist in: Hut?", answer:["u"] },
{ type:"mcq", topic:"buchstaben", subtopic:"vokale", question:"Welcher Vokal ist in: Sofa?", options:["o","a","o und a","e"], correct:2 },
{ type:"typing", topic:"buchstaben", subtopic:"vokale", question:"Welcher Vokal ist in: Feder?", answer:["e"] },
{ type:"mcq", topic:"buchstaben", subtopic:"vokale", question:"Welcher Vokal ist in: Garten?", options:["a","e","a und e","i"], correct:2 },
{ type:"typing", topic:"buchstaben", subtopic:"vokale", question:"Welcher Vokal ist in: Ring?", answer:["i"] },
{ type:"mcq", topic:"buchstaben", subtopic:"vokale", question:"Welcher Vokal ist in: Papier?", options:["a","i","a und i","o"], correct:2 },
          { type:"mcq", topic:"buchstaben", subtopic:"vokale", question:"Welcher Vokal ist in: Stern?", options:["e","a","o","u"], correct:0 },
{ type:"typing", topic:"buchstaben", subtopic:"vokale", question:"Welcher Vokal ist in: Wind?", answer:["i"] },
{ type:"mcq", topic:"buchstaben", subtopic:"vokale", question:"Welcher Vokal ist in: Blume?", options:["u","e","u und e","a"], correct:2 },
{ type:"typing", topic:"buchstaben", subtopic:"vokale", question:"Welcher Vokal ist in: Zug?", answer:["u"] },
{ type:"mcq", topic:"buchstaben", subtopic:"vokale", question:"Welcher Vokal ist in: Milch?", options:["i","e","a","o"], correct:0 },
{ type:"typing", topic:"buchstaben", subtopic:"vokale", question:"Welcher Vokal ist in: Glas?", answer:["a"] },
{ type:"mcq", topic:"buchstaben", subtopic:"vokale", question:"Welcher Vokal ist in: Kleid?", options:["e","i","e und i","a"], correct:2 },
{ type:"typing", topic:"buchstaben", subtopic:"vokale", question:"Welcher Vokal ist in: Park?", answer:["a"] },
{ type:"mcq", topic:"buchstaben", subtopic:"vokale", question:"Welcher Vokal ist in: Dose?", options:["o","e","o und e","a"], correct:2 },
{ type:"typing", topic:"buchstaben", subtopic:"vokale", question:"Welcher Vokal ist in: Heft?", answer:["e"] },
          
          
          // TODO: weitere Fragen ↓
        ],
      },
  { type:"mcq", topic:"buchstaben", subtopic:"gross_klein", question:"Welches Wort ist richtig geschrieben?", options:["baum","Baum","BAum","baUm"], correct:1 },
{ type:"mcq", topic:"buchstaben", subtopic:"gross_klein", question:"Welches Wort ist richtig geschrieben?", options:["schule","Schule","SCHule","schUle"], correct:1 },
{ type:"mcq", topic:"buchstaben", subtopic:"gross_klein", question:"Welches Wort ist richtig geschrieben?", options:["hund","Hund","HUnd","huNd"], correct:1 },
{ type:"mcq", topic:"buchstaben", subtopic:"gross_klein", question:"Welches Wort ist richtig geschrieben?", options:["katze","Katze","KAtze","kaTze"], correct:1 },
{ type:"mcq", topic:"buchstaben", subtopic:"gross_klein", question:"Welches Wort ist richtig geschrieben?", options:["auto","Auto","AUto","auTo"], correct:1 },
{ type:"mcq", topic:"buchstaben", subtopic:"gross_klein", question:"Welches Wort ist richtig geschrieben?", options:["garten","Garten","GArten","garTen"], correct:1 },
{ type:"mcq", topic:"buchstaben", subtopic:"gross_klein", question:"Welches Wort ist richtig geschrieben?", options:["tisch","Tisch","TIisch","tisCh"], correct:1 },
{ type:"mcq", topic:"buchstaben", subtopic:"gross_klein", question:"Welches Wort ist richtig geschrieben?", options:["apfel","Apfel","APfel","apFel"], correct:1 },
{ type:"mcq", topic:"buchstaben", subtopic:"gross_klein", question:"Welches Wort ist richtig geschrieben?", options:["blume","Blume","BLume","bluMe"], correct:1 },
{ type:"mcq", topic:"buchstaben", subtopic:"gross_klein", question:"Welches Wort ist richtig geschrieben?", options:["vogel","Vogel","VOgel","vogEl"], correct:1 },
      { type:"mcq", topic:"buchstaben", subtopic:"gross_klein", question:"Welches Wort ist richtig geschrieben?", options:["fenster","Fenster","FEnster","fenSter"], correct:1 },
{ type:"mcq", topic:"buchstaben", subtopic:"gross_klein", question:"Welches Wort ist richtig geschrieben?", options:["lehrer","Lehrer","LEhrer","lehRer"], correct:1 },
{ type:"mcq", topic:"buchstaben", subtopic:"gross_klein", question:"Welches Wort ist richtig geschrieben?", options:["heft","Heft","HEft","hefT"], correct:1 },
{ type:"mcq", topic:"buchstaben", subtopic:"gross_klein", question:"Welches Wort ist richtig geschrieben?", options:["stuhl","Stuhl","STuhl","stuHl"], correct:1 },
{ type:"mcq", topic:"buchstaben", subtopic:"gross_klein", question:"Welches Wort ist richtig geschrieben?", options:["brot","Brot","BRot","broT"], correct:1 },
{ type:"mcq", topic:"buchstaben", subtopic:"gross_klein", question:"Welches Wort ist richtig geschrieben?", options:["milch","Milch","MIlch","milCh"], correct:1 },
{ type:"mcq", topic:"buchstaben", subtopic:"gross_klein", question:"Welches Wort ist richtig geschrieben?", options:["wasser","Wasser","WAsser","wasSer"], correct:1 },
{ type:"mcq", topic:"buchstaben", subtopic:"gross_klein", question:"Welches Wort ist richtig geschrieben?", options:["sonne","Sonne","SOnne","sonNe"], correct:1 },
{ type:"mcq", topic:"buchstaben", subtopic:"gross_klein", question:"Welches Wort ist richtig geschrieben?", options:["mond","Mond","MUnd","moNd"], correct:1 },
{ type:"mcq", topic:"buchstaben", subtopic:"gross_klein", question:"Welches Wort ist richtig geschrieben?", options:["stern","Stern","STern","steRn"], correct:1 },
      { type:"mcq", topic:"buchstaben", subtopic:"gross_klein", question:"Welches Wort schreibt man groß?", options:["spielen","Hund","laufen","klein"], correct:1 },
{ type:"mcq", topic:"buchstaben", subtopic:"gross_klein", question:"Welches Wort ist falsch geschrieben?", options:["Baum","Schule","katze","Auto"], correct:2 },
{ type:"mcq", topic:"buchstaben", subtopic:"gross_klein", question:"Welcher Satz ist richtig?", options:["die Maus ist klein.","Die maus ist klein.","Die Maus ist klein.","die maus ist klein."], correct:2 },
{ type:"mcq", topic:"buchstaben", subtopic:"gross_klein", question:"Welches Wort beginnt richtig?", options:["haus","Garten","stuhl","brot"], correct:1 },
{ type:"mcq", topic:"buchstaben", subtopic:"gross_klein", question:"Welches Wort ist ein Nomen?", options:["springen","Tisch","rennen","laut"], correct:1 },
{ type:"mcq", topic:"buchstaben", subtopic:"gross_klein", question:"Welcher Satz ist falsch geschrieben?", options:["Der Hund bellt.","Die Katze schläft.","der Vogel fliegt.","Das Auto fährt."], correct:2 },
{ type:"mcq", topic:"buchstaben", subtopic:"gross_klein", question:"Welches Wort ist richtig geschrieben?", options:["apfel","Apfel","APfel","apFel"], correct:1 },
{ type:"mcq", topic:"buchstaben", subtopic:"gross_klein", question:"Welches Wort muss groß sein?", options:["laufen","spielen","Lehrer","klein"], correct:2 },
{ type:"mcq", topic:"buchstaben", subtopic:"gross_klein", question:"Welcher Satz ist richtig geschrieben?", options:["Der baum ist hoch.","Der Baum ist hoch.","der Baum ist hoch.","der baum ist hoch."], correct:1 },
{ type:"mcq", topic:"buchstaben", subtopic:"gross_klein", question:"Welches Wort ist falsch geschrieben?", options:["Sonne","Mond","stern","Blume"], correct:2 },
        ],
      },
      { type:"mcq", topic:"buchstaben", subtopic:"silben", question:"Wie viele Silben hat das Wort 'Blume'?", options:["1","2","3"], correct:1 },
{ type:"mcq", topic:"buchstaben", subtopic:"silben", question:"Wie viele Silben hat das Wort 'Banane'?", options:["2","3","4"], correct:1 },
{ type:"mcq", topic:"buchstaben", subtopic:"silben", question:"Wie viele Silben hat das Wort 'Hund'?", options:["1","2","3"], correct:0 },
{ type:"mcq", topic:"buchstaben", subtopic:"silben", question:"Wie viele Silben hat das Wort 'Elefant'?", options:["2","3","4"], correct:1 },
{ type:"mcq", topic:"buchstaben", subtopic:"silben", question:"Wie viele Silben hat das Wort 'Auto'?", options:["1","2","3"], correct:1 },
{ type:"mcq", topic:"buchstaben", subtopic:"silben", question:"Wie viele Silben hat das Wort 'Tomate'?", options:["2","3","4"], correct:1 },
{ type:"mcq", topic:"buchstaben", subtopic:"silben", question:"Wie viele Silben hat das Wort 'Stuhl'?", options:["1","2","3"], correct:0 },
{ type:"mcq", topic:"buchstaben", subtopic:"silben", question:"Wie viele Silben hat das Wort 'Familie'?", options:["2","3","4"], correct:2 },

{ type:"typing", topic:"buchstaben", subtopic:"silben", question:"Trenne in Silben: Blume →", answer:["Blu-me","blu-me"] },
{ type:"typing", topic:"buchstaben", subtopic:"silben", question:"Trenne in Silben: Banane →", answer:["Ba-na-ne","ba-na-ne"] },
{ type:"typing", topic:"buchstaben", subtopic:"silben", question:"Trenne in Silben: Auto →", answer:["Au-to","au-to"] },
{ type:"typing", topic:"buchstaben", subtopic:"silben", question:"Trenne in Silben: Elefant →", answer:["E-le-fant","e-le-fant"] },
{ type:"typing", topic:"buchstaben", subtopic:"silben", question:"Trenne in Silben: Tomate →", answer:["To-ma-te","to-ma-te"] },
{ type:"typing", topic:"buchstaben", subtopic:"silben", question:"Trenne in Silben: Tiger →", answer:["Ti-ger","ti-ger"] },
{ type:"typing", topic:"buchstaben", subtopic:"silben", question:"Trenne in Silben: Regen →", answer:["Re-gen","re-gen"] },
{ type:"typing", topic:"buchstaben", subtopic:"silben", question:"Trenne in Silben: Musik →", answer:["Mu-sik","mu-sik"] },

{ type:"mcq", topic:"buchstaben", subtopic:"silben", question:"Wo trennt man 'Kuchen' richtig?", options:["Ku-chen","Kuc-hen","Kuch-en"], correct:0 },
{ type:"mcq", topic:"buchstaben", subtopic:"silben", question:"Wo trennt man 'Lesen' richtig?", options:["Le-sen","Les-en","Lese-n"], correct:0 },
{ type:"mcq", topic:"buchstaben", subtopic:"silben", question:"Wo trennt man 'Sommer' richtig?", options:["Som-mer","So-mmer","Somm-er"], correct:0 },
{ type:"mcq", topic:"buchstaben", subtopic:"silben", question:"Wo trennt man 'Laterne' richtig?", options:["La-ter-ne","Lat-er-ne","Late-rne"], correct:0 },
  { type:"mcq", topic:"buchstaben", subtopic:"silben", question:"Wie viele Silben hat das Wort 'Papier'?", options:["1","2","3"], correct:1 },
{ type:"mcq", topic:"buchstaben", subtopic:"silben", question:"Wie viele Silben hat das Wort 'Bäckerei'?", options:["2","3","4"], correct:1 },
{ type:"mcq", topic:"buchstaben", subtopic:"silben", question:"Wie viele Silben hat das Wort 'Freundlich'?", options:["2","3","4"], correct:1 },
{ type:"mcq", topic:"buchstaben", subtopic:"silben", question:"Wie viele Silben hat das Wort 'Abend'?", options:["1","2","3"], correct:1 },
{ type:"mcq", topic:"buchstaben", subtopic:"silben", question:"Wie viele Silben hat das Wort 'Theater'?", options:["2","3","4"], correct:1 },

{ type:"typing", topic:"buchstaben", subtopic:"silben", question:"Trenne in Silben: Papier →", answer:["Pa-pier","pa-pier"] },
{ type:"typing", topic:"buchstaben", subtopic:"silben", question:"Trenne in Silben: Bäckerei →", answer:["Bä-cke-rei","bä-cke-rei"] },
{ type:"typing", topic:"buchstaben", subtopic:"silben", question:"Trenne in Silben: Abend →", answer:["A-bend","a-bend"] },
{ type:"typing", topic:"buchstaben", subtopic:"silben", question:"Trenne in Silben: Theater →", answer:["The-a-ter","the-a-ter"] },
{ type:"typing", topic:"buchstaben", subtopic:"silben", question:"Trenne in Silben: Freunde →", answer:["Freun-de","freun-de"] },
{ type:"typing", topic:"buchstaben", subtopic:"silben", question:"Trenne in Silben: Schreiben →", answer:["Schrei-ben","schrei-ben"] },
{ type:"typing", topic:"buchstaben", subtopic:"silben", question:"Trenne in Silben: Mäuse →", answer:["Mäu-se","mäu-se"] },
{ type:"typing", topic:"buchstaben", subtopic:"silben", question:"Trenne in Silben: Heizung →", answer:["Hei-zung","hei-zung"] },

{ type:"mcq", topic:"buchstaben", subtopic:"silben", question:"Wo trennt man 'Reise' richtig?", options:["Rei-se","Re-is-e","Reis-e"], correct:0 },
{ type:"mcq", topic:"buchstaben", subtopic:"silben", question:"Wo trennt man 'Laufen' richtig?", options:["Lau-fen","La-ufen","Lauf-en"], correct:0 },
{ type:"mcq", topic:"buchstaben", subtopic:"silben", question:"Wo trennt man 'Bienen' richtig?", options:["Bie-nen","Bi-enen","Bien-en"], correct:0 },
{ type:"mcq", topic:"buchstaben", subtopic:"silben", question:"Wo trennt man 'Mutter' richtig?", options:["Mut-ter","Mu-tter","Mutt-er"], correct:0 },
  { type:"mcq", topic:"buchstaben", subtopic:"silben", question:"Wie viele Silben hat das Wort 'Kindergarten'?", options:["3","4","5"], correct:1 },
{ type:"mcq", topic:"buchstaben", subtopic:"silben", question:"Wie viele Silben hat das Wort 'Hausaufgabe'?", options:["3","4","5"], correct:1 },
{ type:"mcq", topic:"buchstaben", subtopic:"silben", question:"Wie viele Silben hat das Wort 'Computer'?", options:["2","3","4"], correct:1 },
{ type:"mcq", topic:"buchstaben", subtopic:"silben", question:"Wie viele Silben hat das Wort 'Schokolade'?", options:["3","4","5"], correct:1 },
{ type:"mcq", topic:"buchstaben", subtopic:"silben", question:"Wie viele Silben hat das Wort 'Zitrone'?", options:["2","3","4"], correct:1 },

{ type:"typing", topic:"buchstaben", subtopic:"silben", question:"Trenne in Silben: Kindergarten →", answer:["Kin-der-gar-ten","kin-der-gar-ten"] },
{ type:"typing", topic:"buchstaben", subtopic:"silben", question:"Trenne in Silben: Hausaufgabe →", answer:["Haus-auf-ga-be","haus-auf-ga-be"] },
{ type:"typing", topic:"buchstaben", subtopic:"silben", question:"Trenne in Silben: Computer →", answer:["Com-pu-ter","com-pu-ter"] },
{ type:"typing", topic:"buchstaben", subtopic:"silben", question:"Trenne in Silben: Schokolade →", answer:["Scho-ko-la-de","scho-ko-la-de"] },
{ type:"typing", topic:"buchstaben", subtopic:"silben", question:"Trenne in Silben: Zitrone →", answer:["Zi-tro-ne","zi-tro-ne"] },
{ type:"typing", topic:"buchstaben", subtopic:"silben", question:"Trenne in Silben: Geburtstag →", answer:["Ge-burts-tag","ge-burts-tag"] },
{ type:"typing", topic:"buchstaben", subtopic:"silben", question:"Trenne in Silben: Apfelsaft →", answer:["Ap-fel-saft","ap-fel-saft"] },
{ type:"typing", topic:"buchstaben", subtopic:"silben", question:"Trenne in Silben: Regenbogen →", answer:["Re-gen-bo-gen","re-gen-bo-gen"] },

{ type:"mcq", topic:"buchstaben", subtopic:"silben", question:"Wo trennt man 'Apfelbaum' richtig?", options:["Ap-fel-baum","A-pfel-baum","Apfel-baum"], correct:0 },
{ type:"mcq", topic:"buchstaben", subtopic:"silben", question:"Wo trennt man 'Sommerferien' richtig?", options:["Som-mer-fe-ri-en","So-mmer-fe-rien","Sommer-fe-rien"], correct:0 },
{ type:"mcq", topic:"buchstaben", subtopic:"silben", question:"Wo trennt man 'Klassenzimmer' richtig?", options:["Klas-sen-zim-mer","Klassen-zim-mer","Klass-en-zimmer"], correct:0 },
{ type:"mcq", topic:"buchstaben", subtopic:"silben", question:"Wo trennt man 'Wassermelone' richtig?", options:["Was-ser-me-lo-ne","Wasser-me-lo-ne","Wass-er-melone"], correct:0 },
  { type:"mcq", topic:"buchstaben", subtopic:"silben", question:"Wie viele Silben hat das Wort 'Nase'?", options:["1","2","3"], correct:1 },
{ type:"mcq", topic:"buchstaben", subtopic:"silben", question:"Wie viele Silben hat das Wort 'Ball'?", options:["1","2","3"], correct:0 },
{ type:"mcq", topic:"buchstaben", subtopic:"silben", question:"Wie viele Silben hat das Wort 'Rose'?", options:["1","2","3"], correct:1 },
{ type:"mcq", topic:"buchstaben", subtopic:"silben", question:"Wie viele Silben hat das Wort 'Papa'?", options:["1","2","3"], correct:1 },
{ type:"mcq", topic:"buchstaben", subtopic:"silben", question:"Wie viele Silben hat das Wort 'Oma'?", options:["1","2","3"], correct:1 },

{ type:"typing", topic:"buchstaben", subtopic:"silben", question:"Trenne in Silben: Nase →", answer:["Na-se","na-se"] },
{ type:"typing", topic:"buchstaben", subtopic:"silben", question:"Trenne in Silben: Rose →", answer:["Ro-se","ro-se"] },
{ type:"typing", topic:"buchstaben", subtopic:"silben", question:"Trenne in Silben: Papa →", answer:["Pa-pa","pa-pa"] },
{ type:"typing", topic:"buchstaben", subtopic:"silben", question:"Trenne in Silben: Tiger →", answer:["Ti-ger","ti-ger"] },
{ type:"typing", topic:"buchstaben", subtopic:"silben", question:"Trenne in Silben: Sonne →", answer:["Son-ne","son-ne"] },
{ type:"typing", topic:"buchstaben", subtopic:"silben", question:"Trenne in Silben: Lampe →", answer:["Lam-pe","lam-pe"] },
{ type:"typing", topic:"buchstaben", subtopic:"silben", question:"Trenne in Silben: Hase →", answer:["Ha-se","ha-se"] },
{ type:"typing", topic:"buchstaben", subtopic:"silben", question:"Trenne in Silben: Dose →", answer:["Do-se","do-se"] },

{ type:"mcq", topic:"buchstaben", subtopic:"silben", question:"Wo trennt man 'Hase' richtig?", options:["Ha-se","Has-e","H-ase"], correct:0 },
{ type:"mcq", topic:"buchstaben", subtopic:"silben", question:"Wo trennt man 'Lampe' richtig?", options:["Lam-pe","La-mpe","Lamp-e"], correct:0 },
{ type:"mcq", topic:"buchstaben", subtopic:"silben", question:"Wo trennt man 'Sonne' richtig?", options:["Son-ne","So-nne","Sonn-e"], correct:0 },
{ type:"mcq", topic:"buchstaben", subtopic:"silben", question:"Wo trennt man 'Tiger' richtig?", options:["Ti-ger","Tig-er","T-iger"], correct:0 },
  { type:"mcq", topic:"buchstaben", subtopic:"silben", question:"Hat das Wort 'Hund' eine oder zwei Silben?", options:["1","2"], correct:0 },
{ type:"mcq", topic:"buchstaben", subtopic:"silben", question:"Hat das Wort 'Mama' eine oder zwei Silben?", options:["1","2"], correct:1 },
{ type:"mcq", topic:"buchstaben", subtopic:"silben", question:"Hat das Wort 'Ei' eine oder zwei Silben?", options:["1","2"], correct:0 },
{ type:"mcq", topic:"buchstaben", subtopic:"silben", question:"Hat das Wort 'Opa' eine oder zwei Silben?", options:["1","2"], correct:1 },
{ type:"mcq", topic:"buchstaben", subtopic:"silben", question:"Hat das Wort 'Baum' eine oder zwei Silben?", options:["1","2"], correct:0 },

{ type:"typing", topic:"buchstaben", subtopic:"silben", question:"Trenne in Silben: Opa →", answer:["O-pa","o-pa"] },
{ type:"typing", topic:"buchstaben", subtopic:"silben", question:"Trenne in Silben: Mama →", answer:["Ma-ma","ma-ma"] },
{ type:"typing", topic:"buchstaben", subtopic:"silben", question:"Trenne in Silben: Hase →", answer:["Ha-se","ha-se"] },
{ type:"typing", topic:"buchstaben", subtopic:"silben", question:"Trenne in Silben: Dose →", answer:["Do-se","do-se"] },

{ type:"mcq", topic:"buchstaben", subtopic:"silben", question:"Welches Wort hat eine Silbe?", options:["Ball","Nase","Oma"], correct:0 },
{ type:"mcq", topic:"buchstaben", subtopic:"silben", question:"Welches Wort hat zwei Silben?", options:["Hund","Rose","Ei"], correct:1 },

  
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
     { type:"mcq", topic:"woerter", subtopic:"artikel_k1", question:"Welcher Artikel passt? ___ Katze", options:["der","die","das"], correct:1 },
{ type:"mcq", topic:"woerter", subtopic:"artikel_k1", question:"Welcher Artikel passt? ___ Tisch", options:["der","die","das"], correct:0 },
{ type:"mcq", topic:"woerter", subtopic:"artikel_k1", question:"Welcher Artikel passt? ___ Auto", options:["der","die","das"], correct:2 },
{ type:"mcq", topic:"woerter", subtopic:"artikel_k1", question:"Welcher Artikel passt? ___ Blume", options:["der","die","das"], correct:1 },
{ type:"mcq", topic:"woerter", subtopic:"artikel_k1", question:"Welcher Artikel passt? ___ Ball", options:["der","die","das"], correct:0 },
{ type:"mcq", topic:"woerter", subtopic:"artikel_k1", question:"Welcher Artikel passt? ___ Haus", options:["der","die","das"], correct:2 },
{ type:"mcq", topic:"woerter", subtopic:"artikel_k1", question:"Welcher Artikel passt? ___ Lehrer", options:["der","die","das"], correct:0 },
{ type:"mcq", topic:"woerter", subtopic:"artikel_k1", question:"Welcher Artikel passt? ___ Lampe", options:["der","die","das"], correct:1 },
{ type:"mcq", topic:"woerter", subtopic:"artikel_k1", question:"Welcher Artikel passt? ___ Kind", options:["der","die","das"], correct:2 },
{ type:"mcq", topic:"woerter", subtopic:"artikel_k1", question:"Welcher Artikel passt? ___ Vogel", options:["der","die","das"], correct:0 },

{ type:"typing", topic:"woerter", subtopic:"artikel_k1", question:"Welcher Artikel? ___ Sonne", answer:["die"] },
{ type:"typing", topic:"woerter", subtopic:"artikel_k1", question:"Welcher Artikel? ___ Apfel", answer:["der"] },
{ type:"typing", topic:"woerter", subtopic:"artikel_k1", question:"Welcher Artikel? ___ Fenster", answer:["das"] },
{ type:"typing", topic:"woerter", subtopic:"artikel_k1", question:"Welcher Artikel? ___ Mutter", answer:["die"] },
{ type:"typing", topic:"woerter", subtopic:"artikel_k1", question:"Welcher Artikel? ___ Vater", answer:["der"] },
{ type:"typing", topic:"woerter", subtopic:"artikel_k1", question:"Welcher Artikel? ___ Bett", answer:["das"] },
{ type:"typing", topic:"woerter", subtopic:"artikel_k1", question:"Welcher Artikel? ___ Schwester", answer:["die"] },
{ type:"typing", topic:"woerter", subtopic:"artikel_k1", question:"Welcher Artikel? ___ Bruder", answer:["der"] },
{ type:"typing", topic:"woerter", subtopic:"artikel_k1", question:"Welcher Artikel? ___ Brot", answer:["das"] },
{ type:"typing", topic:"woerter", subtopic:"artikel_k1", question:"Welcher Artikel? ___ Stadt", answer:["die"] },
      { type:"mcq", topic:"woerter", subtopic:"artikel_k1", question:"Welcher Artikel passt? ___ Baum", options:["der","die","das"], correct:0 },
{ type:"mcq", topic:"woerter", subtopic:"artikel_k1", question:"Welcher Artikel passt? ___ Tür", options:["der","die","das"], correct:1 },
{ type:"mcq", topic:"woerter", subtopic:"artikel_k1", question:"Welcher Artikel passt? ___ Buch", options:["der","die","das"], correct:2 },
{ type:"mcq", topic:"woerter", subtopic:"artikel_k1", question:"Welcher Artikel passt? ___ Freund", options:["der","die","das"], correct:0 },
{ type:"mcq", topic:"woerter", subtopic:"artikel_k1", question:"Welcher Artikel passt? ___ Tasche", options:["der","die","das"], correct:1 },
{ type:"mcq", topic:"woerter", subtopic:"artikel_k1", question:"Welcher Artikel passt? ___ Messer", options:["der","die","das"], correct:2 },
{ type:"mcq", topic:"woerter", subtopic:"artikel_k1", question:"Welcher Artikel passt? ___ Junge", options:["der","die","das"], correct:0 },
{ type:"mcq", topic:"woerter", subtopic:"artikel_k1", question:"Welcher Artikel passt? ___ Insel", options:["der","die","das"], correct:1 },
{ type:"mcq", topic:"woerter", subtopic:"artikel_k1", question:"Welcher Artikel passt? ___ Kleid", options:["der","die","das"], correct:2 },
{ type:"mcq", topic:"woerter", subtopic:"artikel_k1", question:"Welcher Artikel passt? ___ Regen", options:["der","die","das"], correct:0 },

{ type:"typing", topic:"woerter", subtopic:"artikel_k1", question:"Welcher Artikel? ___ Garten", answer:["der"] },
{ type:"typing", topic:"woerter", subtopic:"artikel_k1", question:"Welcher Artikel? ___ Zeitung", answer:["die"] },
{ type:"typing", topic:"woerter", subtopic:"artikel_k1", question:"Welcher Artikel? ___ Bild", answer:["das"] },
{ type:"typing", topic:"woerter", subtopic:"artikel_k1", question:"Welcher Artikel? ___ Onkel", answer:["der"] },
{ type:"typing", topic:"woerter", subtopic:"artikel_k1", question:"Welcher Artikel? ___ Oma", answer:["die"] },
{ type:"typing", topic:"woerter", subtopic:"artikel_k1", question:"Welcher Artikel? ___ Ei", answer:["das"] },
{ type:"typing", topic:"woerter", subtopic:"artikel_k1", question:"Welcher Artikel? ___ Park", answer:["der"] },
{ type:"typing", topic:"woerter", subtopic:"artikel_k1", question:"Welcher Artikel? ___ Uhr", answer:["die"] },
{ type:"typing", topic:"woerter", subtopic:"artikel_k1", question:"Welcher Artikel? ___ Glas", answer:["das"] },
{ type:"typing", topic:"woerter", subtopic:"artikel_k1", question:"Welcher Artikel? ___ König", answer:["der"] },
      { type:"mcq", topic:"woerter", subtopic:"artikel_k1", question:"Welcher Artikel passt? ___ Stuhl", options:["der","die","das"], correct:0 },
{ type:"mcq", topic:"woerter", subtopic:"artikel_k1", question:"Welcher Artikel passt? ___ Wolke", options:["der","die","das"], correct:1 },
{ type:"mcq", topic:"woerter", subtopic:"artikel_k1", question:"Welcher Artikel passt? ___ Heft", options:["der","die","das"], correct:2 },
{ type:"mcq", topic:"woerter", subtopic:"artikel_k1", question:"Welcher Artikel passt? ___ Bär", options:["der","die","das"], correct:0 },
{ type:"mcq", topic:"woerter", subtopic:"artikel_k1", question:"Welcher Artikel passt? ___ Straße", options:["der","die","das"], correct:1 },
{ type:"mcq", topic:"woerter", subtopic:"artikel_k1", question:"Welcher Artikel passt? ___ Handy", options:["der","die","das"], correct:2 },
{ type:"mcq", topic:"woerter", subtopic:"artikel_k1", question:"Welcher Artikel passt? ___ Arzt", options:["der","die","das"], correct:0 },
{ type:"mcq", topic:"woerter", subtopic:"artikel_k1", question:"Welcher Artikel passt? ___ Farbe", options:["der","die","das"], correct:1 },
{ type:"mcq", topic:"woerter", subtopic:"artikel_k1", question:"Welcher Artikel passt? ___ Herz", options:["der","die","das"], correct:2 },
{ type:"mcq", topic:"woerter", subtopic:"artikel_k1", question:"Welcher Artikel passt? ___ Schnee", options:["der","die","das"], correct:0 },

{ type:"typing", topic:"woerter", subtopic:"artikel_k1", question:"Welcher Artikel? ___ Wiese", answer:["die"] },
{ type:"typing", topic:"woerter", subtopic:"artikel_k1", question:"Welcher Artikel? ___ Radio", answer:["das"] },
{ type:"typing", topic:"woerter", subtopic:"artikel_k1", question:"Welcher Artikel? ___ Stern", answer:["der"] },
{ type:"typing", topic:"woerter", subtopic:"artikel_k1", question:"Welcher Artikel? ___ Milch", answer:["die"] },
{ type:"typing", topic:"woerter", subtopic:"artikel_k1", question:"Welcher Artikel? ___ Dorf", answer:["das"] },
{ type:"typing", topic:"woerter", subtopic:"artikel_k1", question:"Welcher Artikel? ___ Fluss", answer:["der"] },
{ type:"typing", topic:"woerter", subtopic:"artikel_k1", question:"Welcher Artikel? ___ Suppe", answer:["die"] },
{ type:"typing", topic:"woerter", subtopic:"artikel_k1", question:"Welcher Artikel? ___ Pferd", answer:["das"] },
{ type:"typing", topic:"woerter", subtopic:"artikel_k1", question:"Welcher Artikel? ___ Mond", answer:["der"] },
{ type:"typing", topic:"woerter", subtopic:"artikel_k1", question:"Welcher Artikel? ___ Brille", answer:["die"] },
          // TODO: weitere Fragen ↓
        ],
      },
      {
        id: "fehlende_buchstaben",
        name: "Fehlende Buchstaben",
        questions: [
          { type:"typing", topic:"woerter", subtopic:"fehlende_buchstaben", question:"Ergänze den fehlenden Buchstaben: H_nd", answer:["Hund","hund"] },
{ type:"typing", topic:"woerter", subtopic:"fehlende_buchstaben", question:"Ergänze den fehlenden Buchstaben: B_ll", answer:["Ball","ball"] },
{ type:"typing", topic:"woerter", subtopic:"fehlende_buchstaben", question:"Ergänze den fehlenden Buchstaben: M_us", answer:["Maus","maus"] },
{ type:"typing", topic:"woerter", subtopic:"fehlende_buchstaben", question:"Ergänze den fehlenden Buchstaben: B_uch", answer:["Buch","buch"] },
{ type:"typing", topic:"woerter", subtopic:"fehlende_buchstaben", question:"Ergänze den fehlenden Buchstaben: H_aus", answer:["Haus","haus"] },
{ type:"typing", topic:"woerter", subtopic:"fehlende_buchstaben", question:"Ergänze den fehlenden Buchstaben: Bl_me", answer:["Blume","blume"] },
{ type:"typing", topic:"woerter", subtopic:"fehlende_buchstaben", question:"Ergänze den fehlenden Buchstaben: F_sch", answer:["Fisch","fisch"] },
{ type:"typing", topic:"woerter", subtopic:"fehlende_buchstaben", question:"Ergänze den fehlenden Buchstaben: T_sch", answer:["Tisch","tisch"] },
{ type:"typing", topic:"woerter", subtopic:"fehlende_buchstaben", question:"Ergänze den fehlenden Buchstaben: L_mp_e", answer:["Lampe","lampe"] },
{ type:"typing", topic:"woerter", subtopic:"fehlende_buchstaben", question:"Ergänze den fehlenden Buchstaben: S_nn_e", answer:["Sonne","sonne"] },
          { type:"typing", topic:"woerter", subtopic:"fehlende_buchstaben", question:"Ergänze den fehlenden Buchstaben: B_r", answer:["Bär","bär"] },
{ type:"typing", topic:"woerter", subtopic:"fehlende_buchstaben", question:"Ergänze den fehlenden Buchstaben: T_r", answer:["Tür","tür"] },
{ type:"typing", topic:"woerter", subtopic:"fehlende_buchstaben", question:"Ergänze den fehlenden Buchstaben: K_nig", answer:["König","könig"] },
{ type:"typing", topic:"woerter", subtopic:"fehlende_buchstaben", question:"Ergänze den fehlenden Buchstaben: M_dchen", answer:["Mädchen","mädchen"] },
{ type:"typing", topic:"woerter", subtopic:"fehlende_buchstaben", question:"Ergänze den fehlenden Buchstaben: V_gel", answer:["Vögel","vögel"] },

{ type:"typing", topic:"woerter", subtopic:"fehlende_buchstaben", question:"Ergänze die fehlenden Buchstaben: Br_der", answer:["Bruder","bruder"] },
{ type:"typing", topic:"woerter", subtopic:"fehlende_buchstaben", question:"Ergänze die fehlenden Buchstaben: Schw_ster", answer:["Schwester","schwester"] },
{ type:"typing", topic:"woerter", subtopic:"fehlende_buchstaben", question:"Ergänze die fehlenden Buchstaben: G_rt_n", answer:["Garten","garten"] },
{ type:"typing", topic:"woerter", subtopic:"fehlende_buchstaben", question:"Ergänze die fehlenden Buchstaben: W_ss_r", answer:["Wasser","wasser"] },
{ type:"typing", topic:"woerter", subtopic:"fehlende_buchstaben", question:"Ergänze die fehlenden Buchstaben: F_nst_r", answer:["Fenster","fenster"] },
          { type:"typing", topic:"woerter", subtopic:"fehlende_buchstaben", question:"Ergänze den fehlenden Buchstaben: R_se", answer:["Rose","rose"] },
{ type:"typing", topic:"woerter", subtopic:"fehlende_buchstaben", question:"Ergänze den fehlenden Buchstaben: N_se", answer:["Nase","nase"] },
{ type:"typing", topic:"woerter", subtopic:"fehlende_buchstaben", question:"Ergänze den fehlenden Buchstaben: D_se", answer:["Dose","dose"] },
{ type:"typing", topic:"woerter", subtopic:"fehlende_buchstaben", question:"Ergänze den fehlenden Buchstaben: P_rd", answer:["Pferd","pferd"] },
{ type:"typing", topic:"woerter", subtopic:"fehlende_buchstaben", question:"Ergänze den fehlenden Buchstaben: St_rn", answer:["Stern","stern"] },

{ type:"typing", topic:"woerter", subtopic:"fehlende_buchstaben", question:"Ergänze die fehlenden Buchstaben: Ki_d", answer:["Kind","kind"] },
{ type:"typing", topic:"woerter", subtopic:"fehlende_buchstaben", question:"Ergänze die fehlenden Buchstaben: Sp_el", answer:["Spiel","spiel"] },
{ type:"typing", topic:"woerter", subtopic:"fehlende_buchstaben", question:"Ergänze die fehlenden Buchstaben: Br_ll_", answer:["Brille","brille"] },
{ type:"typing", topic:"woerter", subtopic:"fehlende_buchstaben", question:"Ergänze die fehlenden Buchstaben: F_rbe", answer:["Farbe","farbe"] },
{ type:"typing", topic:"woerter", subtopic:"fehlende_buchstaben", question:"Ergänze die fehlenden Buchstaben: Sch_h", answer:["Schuh","schuh"] },

{ type:"typing", topic:"woerter", subtopic:"fehlende_buchstaben", question:"Ergänze den fehlenden Buchstaben: L_ffel", answer:["Löffel","löffel"] },
{ type:"typing", topic:"woerter", subtopic:"fehlende_buchstaben", question:"Ergänze den fehlenden Buchstaben: K_se", answer:["Käse","käse"] },
{ type:"typing", topic:"woerter", subtopic:"fehlende_buchstaben", question:"Ergänze die fehlenden Buchstaben: Tr_ume", answer:["Träume","träume"] },
{ type:"typing", topic:"woerter", subtopic:"fehlende_buchstaben", question:"Ergänze die fehlenden Buchstaben: H_nde", answer:["Hände","hände"] },
{ type:"typing", topic:"woerter", subtopic:"fehlende_buchstaben", question:"Ergänze die fehlenden Buchstaben: B_rg", answer:["Berg","berg"] },
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
      { type:"mcq", topic:"saetze_k1", subtopic:"satzzeichen_k1", question:"Welches Zeichen steht am Ende? 'Ich spiele im Garten___'", options:[".","?","!"], correct:0 },
{ type:"mcq", topic:"saetze_k1", subtopic:"satzzeichen_k1", question:"Welches Zeichen steht am Ende? 'Komm schnell hierher___'", options:[".","?","!"], correct:2 },
{ type:"mcq", topic:"saetze_k1", subtopic:"satzzeichen_k1", question:"Welches Zeichen steht am Ende? 'Hast du einen Ball___'", options:[".","?","!"], correct:1 },
{ type:"mcq", topic:"saetze_k1", subtopic:"satzzeichen_k1", question:"Welches Zeichen steht am Ende? 'Der Hund schläft___'", options:[".","?","!"], correct:0 },
{ type:"mcq", topic:"saetze_k1", subtopic:"satzzeichen_k1", question:"Welches Zeichen steht am Ende? 'Wie heißt du___'", options:[".","?","!"], correct:1 },
{ type:"mcq", topic:"saetze_k1", subtopic:"satzzeichen_k1", question:"Welches Zeichen steht am Ende? 'Pass auf___'", options:[".","?","!"], correct:2 },
{ type:"mcq", topic:"saetze_k1", subtopic:"satzzeichen_k1", question:"Welches Zeichen steht am Ende? 'Wir gehen nach Hause___'", options:[".","?","!"], correct:0 },
{ type:"mcq", topic:"saetze_k1", subtopic:"satzzeichen_k1", question:"Welches Zeichen steht am Ende? 'Warum lachst du___'", options:[".","?","!"], correct:1 },
{ type:"mcq", topic:"saetze_k1", subtopic:"satzzeichen_k1", question:"Welches Zeichen steht am Ende? 'Oh nein___'", options:[".","?","!"], correct:2 },
      { type:"mcq", topic:"saetze_k1", subtopic:"satzzeichen_k1", question:"Welches Zeichen steht am Ende? 'Das ist mein Ball___'", options:[".","?","!"], correct:0 },
{ type:"mcq", topic:"saetze_k1", subtopic:"satzzeichen_k1", question:"Welches Zeichen steht am Ende? 'Wo ist meine Tasche___'", options:[".","?","!"], correct:1 },
{ type:"mcq", topic:"saetze_k1", subtopic:"satzzeichen_k1", question:"Welches Zeichen steht am Ende? 'Hör bitte zu___'", options:[".","?","!"], correct:2 },
{ type:"mcq", topic:"saetze_k1", subtopic:"satzzeichen_k1", question:"Welches Zeichen steht am Ende? 'Wir lernen Deutsch___'", options:[".","?","!"], correct:0 },
{ type:"mcq", topic:"saetze_k1", subtopic:"satzzeichen_k1", question:"Welches Zeichen steht am Ende? 'Was machst du___'", options:[".","?","!"], correct:1 },
{ type:"mcq", topic:"saetze_k1", subtopic:"satzzeichen_k1", question:"Welches Zeichen steht am Ende? 'Bleib hier___'", options:[".","?","!"], correct:2 },
{ type:"mcq", topic:"saetze_k1", subtopic:"satzzeichen_k1", question:"Welches Zeichen steht am Ende? 'Meine Schwester malt___'", options:[".","?","!"], correct:0 },
{ type:"mcq", topic:"saetze_k1", subtopic:"satzzeichen_k1", question:"Welches Zeichen steht am Ende? 'Wie spät ist es___'", options:[".","?","!"], correct:1 },
{ type:"mcq", topic:"saetze_k1", subtopic:"satzzeichen_k1", question:"Welches Zeichen steht am Ende? 'Super gemacht___'", options:[".","?","!"], correct:2 },
      { type:"mcq", topic:"saetze_k1", subtopic:"satzzeichen_k1", question:"Welches Zeichen steht am Ende? 'Das ist mein Ball___'", options:[".","?","!"], correct:0 },
{ type:"mcq", topic:"saetze_k1", subtopic:"satzzeichen_k1", question:"Welches Zeichen steht am Ende? 'Wo ist meine Tasche___'", options:[".","?","!"], correct:1 },
{ type:"mcq", topic:"saetze_k1", subtopic:"satzzeichen_k1", question:"Welches Zeichen steht am Ende? 'Hör bitte zu___'", options:[".","?","!"], correct:2 },
{ type:"mcq", topic:"saetze_k1", subtopic:"satzzeichen_k1", question:"Welches Zeichen steht am Ende? 'Wir lernen Deutsch___'", options:[".","?","!"], correct:0 },
{ type:"mcq", topic:"saetze_k1", subtopic:"satzzeichen_k1", question:"Welches Zeichen steht am Ende? 'Was machst du___'", options:[".","?","!"], correct:1 },
{ type:"mcq", topic:"saetze_k1", subtopic:"satzzeichen_k1", question:"Welches Zeichen steht am Ende? 'Bleib hier___'", options:[".","?","!"], correct:2 },
{ type:"mcq", topic:"saetze_k1", subtopic:"satzzeichen_k1", question:"Welches Zeichen steht am Ende? 'Meine Schwester malt___'", options:[".","?","!"], correct:0 },
{ type:"mcq", topic:"saetze_k1", subtopic:"satzzeichen_k1", question:"Welches Zeichen steht am Ende? 'Wie spät ist es___'", options:[".","?","!"], correct:1 },
{ type:"mcq", topic:"saetze_k1", subtopic:"satzzeichen_k1", question:"Welches Zeichen steht am Ende? 'Super gemacht___'", options:[".","?","!"], correct:2 },
      { type:"mcq", topic:"saetze_k1", subtopic:"satzzeichen_k1", question:"Welches Zeichen steht am Ende? 'Heute ist es kalt___'", options:[".","?","!"], correct:0 },
{ type:"mcq", topic:"saetze_k1", subtopic:"satzzeichen_k1", question:"Welches Zeichen steht am Ende? 'Magst du Eis___'", options:[".","?","!"], correct:1 },
{ type:"mcq", topic:"saetze_k1", subtopic:"satzzeichen_k1", question:"Welches Zeichen steht am Ende? 'Vorsicht___'", options:[".","?","!"], correct:2 },
{ type:"mcq", topic:"saetze_k1", subtopic:"satzzeichen_k1", question:"Welches Zeichen steht am Ende? 'Mein Bruder liest___'", options:[".","?","!"], correct:0 },
{ type:"mcq", topic:"saetze_k1", subtopic:"satzzeichen_k1", question:"Welches Zeichen steht am Ende? 'Wo ist der Bus___'", options:[".","?","!"], correct:1 },
{ type:"mcq", topic:"saetze_k1", subtopic:"satzzeichen_k1", question:"Welches Zeichen steht am Ende? 'Hilf mir bitte___'", options:[".","?","!"], correct:2 },
{ type:"mcq", topic:"saetze_k1", subtopic:"satzzeichen_k1", question:"Welches Zeichen steht am Ende? 'Die Sonne scheint___'", options:[".","?","!"], correct:0 },
{ type:"mcq", topic:"saetze_k1", subtopic:"satzzeichen_k1", question:"Welches Zeichen steht am Ende? 'Warum weinst du___'", options:[".","?","!"], correct:1 },
{ type:"mcq", topic:"saetze_k1", subtopic:"satzzeichen_k1", question:"Welches Zeichen steht am Ende? 'Oh toll___'", options:[".","?","!"], correct:2 },
      { type:"mcq", topic:"saetze_k1", subtopic:"satzzeichen_k1", question:"Welches Zeichen steht am Ende? 'Ich male ein Bild___'", options:[".","?","!"], correct:0 },
{ type:"mcq", topic:"saetze_k1", subtopic:"satzzeichen_k1", question:"Welches Zeichen steht am Ende? 'Wo ist mein Heft___'", options:[".","?","!"], correct:1 },
{ type:"mcq", topic:"saetze_k1", subtopic:"satzzeichen_k1", question:"Welches Zeichen steht am Ende? 'Komm sofort___'", options:[".","?","!"], correct:2 },
{ type:"mcq", topic:"saetze_k1", subtopic:"satzzeichen_k1", question:"Welches Zeichen steht am Ende? 'Der Apfel ist rot___'", options:[".","?","!"], correct:0 },
{ type:"mcq", topic:"saetze_k1", subtopic:"satzzeichen_k1", question:"Welches Zeichen steht am Ende? 'Wie heißt deine Lehrerin___'", options:[".","?","!"], correct:1 },
{ type:"mcq", topic:"saetze_k1", subtopic:"satzzeichen_k1", question:"Welches Zeichen steht am Ende? 'Schnell weg___'", options:[".","?","!"], correct:2 },
{ type:"mcq", topic:"saetze_k1", subtopic:"satzzeichen_k1", question:"Welches Zeichen steht am Ende? 'Mein Vater arbeitet___'", options:[".","?","!"], correct:0 },
{ type:"mcq", topic:"saetze_k1", subtopic:"satzzeichen_k1", question:"Welches Zeichen steht am Ende? 'Hast du Zeit___'", options:[".","?","!"], correct:1 },
{ type:"mcq", topic:"saetze_k1", subtopic:"satzzeichen_k1", question:"Welches Zeichen steht am Ende? 'Wie lecker___'", options:[".","?","!"], correct:2 },
{ type:"mcq", topic:"saetze_k1", subtopic:"satzzeichen_k1", question:"Welches Zeichen steht am Ende? 'Wir spielen Fußball___'", options:[".","?","!"], correct:0 },

{ type:"mcq", topic:"saetze_k1", subtopic:"satzzeichen_k1", question:"Welches Zeichen steht am Ende? 'Wer kommt heute___'", options:[".","?","!"], correct:1 },
{ type:"mcq", topic:"saetze_k1", subtopic:"satzzeichen_k1", question:"Welches Zeichen steht am Ende? 'Halt___'", options:[".","?","!"], correct:2 },
{ type:"mcq", topic:"saetze_k1", subtopic:"satzzeichen_k1", question:"Welches Zeichen steht am Ende? 'Das Buch ist neu___'", options:[".","?","!"], correct:0 },
{ type:"mcq", topic:"saetze_k1", subtopic:"satzzeichen_k1", question:"Welches Zeichen steht am Ende? 'Warum bist du traurig___'", options:[".","?","!"], correct:1 },
{ type:"mcq", topic:"saetze_k1", subtopic:"satzzeichen_k1", question:"Welches Zeichen steht am Ende? 'Oh nein___'", options:[".","?","!"], correct:2 },
{ type:"mcq", topic:"saetze_k1", subtopic:"satzzeichen_k1", question:"Welches Zeichen steht am Ende? 'Die Kinder lachen___'", options:[".","?","!"], correct:0 },
{ type:"mcq", topic:"saetze_k1", subtopic:"satzzeichen_k1", question:"Welches Zeichen steht am Ende? 'Was ist das___'", options:[".","?","!"], correct:1 },
{ type:"mcq", topic:"saetze_k1", subtopic:"satzzeichen_k1", question:"Welches Zeichen steht am Ende? 'Pass auf dich auf___'", options:[".","?","!"], correct:2 },
{ type:"mcq", topic:"saetze_k1", subtopic:"satzzeichen_k1", question:"Welches Zeichen steht am Ende? 'Der Zug fährt ab___'", options:[".","?","!"], correct:0 },
{ type:"mcq", topic:"saetze_k1", subtopic:"satzzeichen_k1", question:"Welches Zeichen steht am Ende? 'Wie alt bist du___'", options:[".","?","!"], correct:1 },
      
        ],
      },
      {
        id: "fehlende_woerter_k1",
        name: "Fehlende Wörter",
        questions: [
          { type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Die Katze ___ Milch. (trinken)", answer:["trinkt"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Der Vogel ___ im Baum. (sitzen)", answer:["sitzt"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Ich ___ einen Ball. (haben)", answer:["habe"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Wir ___ in die Schule. (gehen)", answer:["gehen"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Mama ___ das Essen. (kochen)", answer:["kocht"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Papa ___ ein Buch. (lesen)", answer:["liest"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Das Kind ___ laut. (lachen)", answer:["lacht"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Der Junge ___ Fußball. (spielen)", answer:["spielt"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Das Mädchen ___ ein Bild. (malen)", answer:["malt"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Die Kinder ___ draußen. (spielen)", answer:["spielen"] },

{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Der Bus ___ um acht Uhr. (kommen)", answer:["kommt"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Ich ___ gern Eis. (essen)", answer:["esse"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Der Lehrer ___ Deutsch. (unterrichten)", answer:["unterrichtet"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Die Sonne ___ hell. (scheinen)", answer:["scheint"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Wir ___ ein Lied. (singen)", answer:["singen"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Das Baby ___ leise. (schlafen)", answer:["schläft","schlaeft"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Der Hund ___ laut. (bellen)", answer:["bellt"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Ich ___ meine Hausaufgaben. (machen)", answer:["mache"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Du ___ sehr schnell. (rennen)", answer:["rennst"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Die Maus ___ klein. (sein)", answer:["ist"] },

{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Der Apfel ___ rot. (sein)", answer:["ist"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Wir ___ nach Hause. (fahren)", answer:["fahren"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Ich ___ dich. (sehen)", answer:["sehe"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Das Pferd ___ schnell. (laufen)", answer:["läuft","lauft"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Der Zug ___ ab. (fahren)", answer:["fährt","faehrt"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Die Blume ___ schön. (sein)", answer:["ist"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Wir ___ heute Sport. (haben)", answer:["haben"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Ich ___ ein Bild. (zeichnen)", answer:["zeichne"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Der Mann ___ im Park. (gehen)", answer:["geht"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Die Frau ___ einen Kuchen. (backen)", answer:["backt"] },

{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Das Auto ___ schnell. (fahren)", answer:["fährt","faehrt"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Ich ___ Musik. (hören)", answer:["höre","hoere"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Der Junge ___ laut. (rufen)", answer:["ruft"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Die Kinder ___ im Garten. (spielen)", answer:["spielen"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Du ___ ein Geschenk. (bekommen)", answer:["bekommst"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Ich ___ nach Hause. (kommen)", answer:["komme"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Der Lehrer ___ die Tür. (öffnen)", answer:["öffnet","oeffnet"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Die Schülerin ___ fleißig. (lernen)", answer:["lernt"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Wir ___ einen Film. (sehen)", answer:["sehen"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Das Kind ___ eine Frage. (stellen)", answer:["stellt"] },

{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Der Bauer ___ auf dem Feld. (arbeiten)", answer:["arbeitet"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Ich ___ ein Lied. (singen)", answer:["singe"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Die Kuh ___ Gras. (essen)", answer:["isst"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Der Fisch ___ im Wasser. (schwimmen)", answer:["schwimmt"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Wir ___ Deutsch. (lernen)", answer:["lernen"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Du ___ sehr gut. (schreiben)", answer:["schreibst"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Das Baby ___ laut. (weinen)", answer:["weint"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Ich ___ meine Freunde. (treffen)", answer:["treffe"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Der Schüler ___ ruhig. (sein)", answer:["ist"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Die Eltern ___ im Wohnzimmer. (sitzen)", answer:["sitzen"] },
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
      { type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Die Katze ___ Milch. (trinken)", answer:["trinkt"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Der Vogel ___ im Baum. (sitzen)", answer:["sitzt"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Ich ___ einen Ball. (haben)", answer:["habe"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Wir ___ in die Schule. (gehen)", answer:["gehen"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Mama ___ das Essen. (kochen)", answer:["kocht"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Papa ___ ein Buch. (lesen)", answer:["liest"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Das Kind ___ laut. (lachen)", answer:["lacht"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Der Junge ___ Fußball. (spielen)", answer:["spielt"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Das Mädchen ___ ein Bild. (malen)", answer:["malt"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Die Kinder ___ draußen. (spielen)", answer:["spielen"] },

{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Der Bus ___ um acht Uhr. (kommen)", answer:["kommt"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Ich ___ gern Eis. (essen)", answer:["esse"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Der Lehrer ___ Deutsch. (unterrichten)", answer:["unterrichtet"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Die Sonne ___ hell. (scheinen)", answer:["scheint"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Wir ___ ein Lied. (singen)", answer:["singen"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Das Baby ___ leise. (schlafen)", answer:["schläft","schlaeft"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Der Hund ___ laut. (bellen)", answer:["bellt"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Ich ___ meine Hausaufgaben. (machen)", answer:["mache"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Du ___ sehr schnell. (rennen)", answer:["rennst"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Die Maus ___ klein. (sein)", answer:["ist"] },

{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Der Apfel ___ rot. (sein)", answer:["ist"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Wir ___ nach Hause. (fahren)", answer:["fahren"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Ich ___ dich. (sehen)", answer:["sehe"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Das Pferd ___ schnell. (laufen)", answer:["läuft","lauft"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Der Zug ___ ab. (fahren)", answer:["fährt","faehrt"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Die Blume ___ schön. (sein)", answer:["ist"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Wir ___ heute Sport. (haben)", answer:["haben"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Ich ___ ein Bild. (zeichnen)", answer:["zeichne"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Der Mann ___ im Park. (gehen)", answer:["geht"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Die Frau ___ einen Kuchen. (backen)", answer:["backt"] },

{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Das Auto ___ schnell. (fahren)", answer:["fährt","faehrt"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Ich ___ Musik. (hören)", answer:["höre","hoere"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Der Junge ___ laut. (rufen)", answer:["ruft"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Die Kinder ___ im Garten. (spielen)", answer:["spielen"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Du ___ ein Geschenk. (bekommen)", answer:["bekommst"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Ich ___ nach Hause. (kommen)", answer:["komme"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Der Lehrer ___ die Tür. (öffnen)", answer:["öffnet","oeffnet"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Die Schülerin ___ fleißig. (lernen)", answer:["lernt"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Wir ___ einen Film. (sehen)", answer:["sehen"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Das Kind ___ eine Frage. (stellen)", answer:["stellt"] },

{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Der Bauer ___ auf dem Feld. (arbeiten)", answer:["arbeitet"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Ich ___ ein Lied. (singen)", answer:["singe"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Die Kuh ___ Gras. (essen)", answer:["isst"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Der Fisch ___ im Wasser. (schwimmen)", answer:["schwimmt"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Wir ___ Deutsch. (lernen)", answer:["lernen"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Du ___ sehr gut. (schreiben)", answer:["schreibst"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Das Baby ___ laut. (weinen)", answer:["weint"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Ich ___ meine Freunde. (treffen)", answer:["treffe"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Der Schüler ___ ruhig. (sein)", answer:["ist"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Die Eltern ___ im Wohnzimmer. (sitzen)", answer:["sitzen"] },{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Die Katze ___ Milch. (trinken)", answer:["trinkt"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Der Vogel ___ im Baum. (sitzen)", answer:["sitzt"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Ich ___ einen Ball. (haben)", answer:["habe"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Wir ___ in die Schule. (gehen)", answer:["gehen"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Mama ___ das Essen. (kochen)", answer:["kocht"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Papa ___ ein Buch. (lesen)", answer:["liest"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Das Kind ___ laut. (lachen)", answer:["lacht"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Der Junge ___ Fußball. (spielen)", answer:["spielt"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Das Mädchen ___ ein Bild. (malen)", answer:["malt"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Die Kinder ___ draußen. (spielen)", answer:["spielen"] },

{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Der Bus ___ um acht Uhr. (kommen)", answer:["kommt"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Ich ___ gern Eis. (essen)", answer:["esse"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Der Lehrer ___ Deutsch. (unterrichten)", answer:["unterrichtet"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Die Sonne ___ hell. (scheinen)", answer:["scheint"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Wir ___ ein Lied. (singen)", answer:["singen"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Das Baby ___ leise. (schlafen)", answer:["schläft","schlaeft"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Der Hund ___ laut. (bellen)", answer:["bellt"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Ich ___ meine Hausaufgaben. (machen)", answer:["mache"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Du ___ sehr schnell. (rennen)", answer:["rennst"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Die Maus ___ klein. (sein)", answer:["ist"] },

{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Der Apfel ___ rot. (sein)", answer:["ist"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Wir ___ nach Hause. (fahren)", answer:["fahren"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Ich ___ dich. (sehen)", answer:["sehe"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Das Pferd ___ schnell. (laufen)", answer:["läuft","lauft"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Der Zug ___ ab. (fahren)", answer:["fährt","faehrt"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Die Blume ___ schön. (sein)", answer:["ist"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Wir ___ heute Sport. (haben)", answer:["haben"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Ich ___ ein Bild. (zeichnen)", answer:["zeichne"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Der Mann ___ im Park. (gehen)", answer:["geht"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Die Frau ___ einen Kuchen. (backen)", answer:["backt"] },

{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Das Auto ___ schnell. (fahren)", answer:["fährt","faehrt"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Ich ___ Musik. (hören)", answer:["höre","hoere"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Der Junge ___ laut. (rufen)", answer:["ruft"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Die Kinder ___ im Garten. (spielen)", answer:["spielen"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Du ___ ein Geschenk. (bekommen)", answer:["bekommst"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Ich ___ nach Hause. (kommen)", answer:["komme"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Der Lehrer ___ die Tür. (öffnen)", answer:["öffnet","oeffnet"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Die Schülerin ___ fleißig. (lernen)", answer:["lernt"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Wir ___ einen Film. (sehen)", answer:["sehen"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Das Kind ___ eine Frage. (stellen)", answer:["stellt"] },

{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Der Bauer ___ auf dem Feld. (arbeiten)", answer:["arbeitet"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Ich ___ ein Lied. (singen)", answer:["singe"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Die Kuh ___ Gras. (essen)", answer:["isst"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Der Fisch ___ im Wasser. (schwimmen)", answer:["schwimmt"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Wir ___ Deutsch. (lernen)", answer:["lernen"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Du ___ sehr gut. (schreiben)", answer:["schreibst"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Das Baby ___ laut. (weinen)", answer:["weint"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Ich ___ meine Freunde. (treffen)", answer:["treffe"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Der Schüler ___ ruhig. (sein)", answer:["ist"] },
{ type:"typing", topic:"saetze_k1", subtopic:"fehlende_woerter_k1", question:"Ergänze: Die Eltern ___ im Wohnzimmer. (sitzen)", answer:["sitzen"] },
          // TODO: weitere Fragen ↓
        ],
      },
      {
        id: "verben_k2",
        name: "Verben erkennen",
        questions: [
          { type:"mcq", topic:"wortarten_k2", subtopic:"verben_k2", question:"Welches Wort ist ein Verb?", options:["Haus","laufen","rot","der"], correct:1 },
{ type:"mcq", topic:"wortarten_k2", subtopic:"verben_k2", question:"Welches Wort ist ein Verb?", options:["springen","Tisch","blau","die"], correct:0 },
{ type:"mcq", topic:"wortarten_k2", subtopic:"verben_k2", question:"Welches Wort ist ein Verb?", options:["Hund","essen","schnell","das"], correct:1 },
{ type:"mcq", topic:"wortarten_k2", subtopic:"verben_k2", question:"Welches Wort ist ein Verb?", options:["Ball","schreiben","groß","ein"], correct:1 },
{ type:"mcq", topic:"wortarten_k2", subtopic:"verben_k2", question:"Welches Wort ist ein Verb?", options:["schwimmen","Auto","klein","und"], correct:0 },
{ type:"mcq", topic:"wortarten_k2", subtopic:"verben_k2", question:"Welches Wort ist ein Verb?", options:["Buch","malen","laut","mit"], correct:1 },
{ type:"mcq", topic:"wortarten_k2", subtopic:"verben_k2", question:"Welches Wort ist ein Verb?", options:["Stuhl","sehen","lang","auf"], correct:1 },
{ type:"mcq", topic:"wortarten_k2", subtopic:"verben_k2", question:"Welches Wort ist ein Verb?", options:["singen","Blume","kurz","am"], correct:0 },
{ type:"mcq", topic:"wortarten_k2", subtopic:"verben_k2", question:"Welches Wort ist ein Verb?", options:["Fenster","lesen","hell","im"], correct:1 },
{ type:"mcq", topic:"wortarten_k2", subtopic:"verben_k2", question:"Welches Wort ist ein Verb?", options:["tanzen","Katze","weich","an"], correct:0 },

{ type:"mcq", topic:"wortarten_k2", subtopic:"verben_k2", question:"Welches Wort ist ein Verb?", options:["Lehrer","arbeiten","alt","zu"], correct:1 },
{ type:"mcq", topic:"wortarten_k2", subtopic:"verben_k2", question:"Welches Wort ist ein Verb?", options:["spielen","Heft","neu","von"], correct:0 },
{ type:"mcq", topic:"wortarten_k2", subtopic:"verben_k2", question:"Welches Wort ist ein Verb?", options:["Kind","trinken","stark","bei"], correct:1 },
{ type:"mcq", topic:"wortarten_k2", subtopic:"verben_k2", question:"Welches Wort ist ein Verb?", options:["laufen","Tasche","dick","für"], correct:0 },
{ type:"mcq", topic:"wortarten_k2", subtopic:"verben_k2", question:"Welches Wort ist ein Verb?", options:["Vogel","rufen","süß","ohne"], correct:1 },
{ type:"mcq", topic:"wortarten_k2", subtopic:"verben_k2", question:"Welches Wort ist ein Verb?", options:["öffnen","Tür","hart","bis"], correct:0 },
{ type:"mcq", topic:"wortarten_k2", subtopic:"verben_k2", question:"Welches Wort ist ein Verb?", options:["Straße","fahren","kalt","gegen"], correct:1 },
{ type:"mcq", topic:"wortarten_k2", subtopic:"verben_k2", question:"Welches Wort ist ein Verb?", options:["bauen","Haus","schön","seit"], correct:0 },
{ type:"mcq", topic:"wortarten_k2", subtopic:"verben_k2", question:"Welches Wort ist ein Verb?", options:["Garten","pflanzen","jung","über"], correct:1 },
{ type:"mcq", topic:"wortarten_k2", subtopic:"verben_k2", question:"Welches Wort ist ein Verb?", options:["kochen","Suppe","warm","unter"], correct:0 },

{ type:"mcq", topic:"wortarten_k2", subtopic:"verben_k2", question:"Welches Wort ist ein Verb?", options:["Freund","helfen","nett","nach"], correct:1 },
{ type:"mcq", topic:"wortarten_k2", subtopic:"verben_k2", question:"Welches Wort ist ein Verb?", options:["denken","Kopf","klug","vor"], correct:0 },
{ type:"mcq", topic:"wortarten_k2", subtopic:"verben_k2", question:"Welches Wort ist ein Verb?", options:["Schule","lernen","fleißig","während"], correct:1 },
{ type:"mcq", topic:"wortarten_k2", subtopic:"verben_k2", question:"Welches Wort ist ein Verb?", options:["fragen","Antwort","richtig","oder"], correct:0 },
{ type:"mcq", topic:"wortarten_k2", subtopic:"verben_k2", question:"Welches Wort ist ein Verb?", options:["Computer","tippen","modern","aber"], correct:1 },
{ type:"mcq", topic:"wortarten_k2", subtopic:"verben_k2", question:"Welches Wort ist ein Verb?", options:["laufen","Schuh","eng","denn"], correct:0 },
{ type:"mcq", topic:"wortarten_k2", subtopic:"verben_k2", question:"Welches Wort ist ein Verb?", options:["Bild","zeigen","bunt","doch"], correct:1 },
{ type:"mcq", topic:"wortarten_k2", subtopic:"verben_k2", question:"Welches Wort ist ein Verb?", options:["schneiden","Messer","scharf","also"], correct:0 },
{ type:"mcq", topic:"wortarten_k2", subtopic:"verben_k2", question:"Welches Wort ist ein Verb?", options:["Zeit","warten","lang","deshalb"], correct:1 },
{ type:"mcq", topic:"wortarten_k2", subtopic:"verben_k2", question:"Welches Wort ist ein Verb?", options:["rechnen","Zahl","rund","trotzdem"], correct:0 },

{ type:"mcq", topic:"wortarten_k2", subtopic:"verben_k2", question:"Welches Wort ist ein Verb?", options:["schlafen","Bett","weich","kaum"], correct:0 },
{ type:"mcq", topic:"wortarten_k2", subtopic:"verben_k2", question:"Welches Wort ist ein Verb?", options:["Lampe","leuchten","hell","schon"], correct:1 },
{ type:"mcq", topic:"wortarten_k2", subtopic:"verben_k2", question:"Welches Wort ist ein Verb?", options:["bringen","Paket","schwer","jetzt"], correct:0 },
{ type:"mcq", topic:"wortarten_k2", subtopic:"verben_k2", question:"Welches Wort ist ein Verb?", options:["Wasser","fließen","klar","hier"], correct:1 },
{ type:"mcq", topic:"wortarten_k2", subtopic:"verben_k2", question:"Welches Wort ist ein Verb?", options:["bauen","Brücke","hoch","dort"], correct:0 },
{ type:"mcq", topic:"wortarten_k2", subtopic:"verben_k2", question:"Welches Wort ist ein Verb?", options:["Stimme","klingen","laut","unten"], correct:1 },
{ type:"mcq", topic:"wortarten_k2", subtopic:"verben_k2", question:"Welches Wort ist ein Verb?", options:["fangen","Ball","rund","oben"], correct:0 },
{ type:"mcq", topic:"wortarten_k2", subtopic:"verben_k2", question:"Welches Wort ist ein Verb?", options:["Herz","schlagen","schnell","morgen"], correct:1 },
{ type:"mcq", topic:"wortarten_k2", subtopic:"verben_k2", question:"Welches Wort ist ein Verb?", options:["werfen","Stein","hart","heute"], correct:0 },
{ type:"mcq", topic:"wortarten_k2", subtopic:"verben_k2", question:"Welches Wort ist ein Verb?", options:["Wind","wehen","stark","bald"], correct:1 },

{ type:"mcq", topic:"wortarten_k2", subtopic:"verben_k2", question:"Welches Wort ist ein Verb?", options:["ziehen","Jacke","warm","früh"], correct:0 },
{ type:"mcq", topic:"wortarten_k2", subtopic:"verben_k2", question:"Welches Wort ist ein Verb?", options:["Feuer","brennen","heiß","spät"], correct:1 },
{ type:"mcq", topic:"wortarten_k2", subtopic:"verben_k2", question:"Welches Wort ist ein Verb?", options:["kaufen","Brot","frisch","viel"], correct:0 },
{ type:"mcq", topic:"wortarten_k2", subtopic:"verben_k2", question:"Welches Wort ist ein Verb?", options:["Licht","blinken","hell","wenig"], correct:1 },
{ type:"mcq", topic:"wortarten_k2", subtopic:"verben_k2", question:"Welches Wort ist ein Verb?", options:["tragen","Tasche","schwer","genug"], correct:0 },
{ type:"mcq", topic:"wortarten_k2", subtopic:"verben_k2", question:"Welches Wort ist ein Verb?", options:["Schnee","fallen","weiß","gleich"], correct:1 },
{ type:"mcq", topic:"wortarten_k2", subtopic:"verben_k2", question:"Welches Wort ist ein Verb?", options:["reisen","Koffer","groß","weit"], correct:0 },
{ type:"mcq", topic:"wortarten_k2", subtopic:"verben_k2", question:"Welches Wort ist ein Verb?", options:["Mond","scheinen","rund","oft"], correct:1 },
{ type:"mcq", topic:"wortarten_k2", subtopic:"verben_k2", question:"Welches Wort ist ein Verb?", options:["sammeln","Briefmarke","alt","neu"], correct:0 },
{ type:"mcq", topic:"wortarten_k2", subtopic:"verben_k2", question:"Welches Wort ist ein Verb?", options:["Hahn","krähen","laut","still"], correct:1 },
          // TODO: weitere Fragen ↓
        ],
      },
      {
        id: "artikel_k2",
        name: "Artikel zuordnen",
        questions: [
          { type:"mcq", topic:"wortarten_k2", subtopic:"artikel_k2", question:"___ Hund bellt laut.", options:["Der","Die","Das"], correct:0 },
{ type:"mcq", topic:"wortarten_k2", subtopic:"artikel_k2", question:"___ Blume ist schön.", options:["Der","Die","Das"], correct:1 },
{ type:"mcq", topic:"wortarten_k2", subtopic:"artikel_k2", question:"___ Auto ist neu.", options:["Der","Die","Das"], correct:2 },
{ type:"mcq", topic:"wortarten_k2", subtopic:"artikel_k2", question:"___ Vogel fliegt hoch.", options:["Der","Die","Das"], correct:0 },
{ type:"mcq", topic:"wortarten_k2", subtopic:"artikel_k2", question:"___ Sonne scheint.", options:["Der","Die","Das"], correct:1 },
{ type:"mcq", topic:"wortarten_k2", subtopic:"artikel_k2", question:"___ Kind spielt.", options:["Der","Die","Das"], correct:2 },
{ type:"mcq", topic:"wortarten_k2", subtopic:"artikel_k2", question:"___ Lehrer erklärt.", options:["Der","Die","Das"], correct:0 },
{ type:"mcq", topic:"wortarten_k2", subtopic:"artikel_k2", question:"___ Lampe leuchtet.", options:["Der","Die","Das"], correct:1 },
{ type:"mcq", topic:"wortarten_k2", subtopic:"artikel_k2", question:"___ Buch liegt hier.", options:["Der","Die","Das"], correct:2 },
{ type:"mcq", topic:"wortarten_k2", subtopic:"artikel_k2", question:"___ Apfel ist rot.", options:["Der","Die","Das"], correct:0 },

{ type:"typing", topic:"wortarten_k2", subtopic:"artikel_k2", question:"Welcher Artikel passt? ___ Baum", answer:["der"] },
{ type:"typing", topic:"wortarten_k2", subtopic:"artikel_k2", question:"Welcher Artikel passt? ___ Katze", answer:["die"] },
{ type:"typing", topic:"wortarten_k2", subtopic:"artikel_k2", question:"Welcher Artikel passt? ___ Haus", answer:["das"] },
{ type:"typing", topic:"wortarten_k2", subtopic:"artikel_k2", question:"Welcher Artikel passt? ___ Stuhl", answer:["der"] },
{ type:"typing", topic:"wortarten_k2", subtopic:"artikel_k2", question:"Welcher Artikel passt? ___ Maus", answer:["die"] },
{ type:"typing", topic:"wortarten_k2", subtopic:"artikel_k2", question:"Welcher Artikel passt? ___ Fenster", answer:["das"] },
{ type:"typing", topic:"wortarten_k2", subtopic:"artikel_k2", question:"Welcher Artikel passt? ___ Bruder", answer:["der"] },
{ type:"typing", topic:"wortarten_k2", subtopic:"artikel_k2", question:"Welcher Artikel passt? ___ Schwester", answer:["die"] },
{ type:"typing", topic:"wortarten_k2", subtopic:"artikel_k2", question:"Welcher Artikel passt? ___ Heft", answer:["das"] },
{ type:"typing", topic:"wortarten_k2", subtopic:"artikel_k2", question:"Welcher Artikel passt? ___ Garten", answer:["der"] },

{ type:"mcq", topic:"wortarten_k2", subtopic:"artikel_k2", question:"___ Tasche ist schwer.", options:["Der","Die","Das"], correct:1 },
{ type:"mcq", topic:"wortarten_k2", subtopic:"artikel_k2", question:"___ Meer ist tief.", options:["Der","Die","Das"], correct:2 },
{ type:"mcq", topic:"wortarten_k2", subtopic:"artikel_k2", question:"___ Ball rollt.", options:["Der","Die","Das"], correct:0 },
{ type:"mcq", topic:"wortarten_k2", subtopic:"artikel_k2", question:"___ Uhr hängt an der Wand.", options:["Der","Die","Das"], correct:1 },
{ type:"mcq", topic:"wortarten_k2", subtopic:"artikel_k2", question:"___ Mädchen liest.", options:["Der","Die","Das"], correct:2 },
{ type:"mcq", topic:"wortarten_k2", subtopic:"artikel_k2", question:"___ Vater arbeitet.", options:["Der","Die","Das"], correct:0 },
{ type:"mcq", topic:"wortarten_k2", subtopic:"artikel_k2", question:"___ Mutter kocht.", options:["Der","Die","Das"], correct:1 },
{ type:"mcq", topic:"wortarten_k2", subtopic:"artikel_k2", question:"___ Bild ist bunt.", options:["Der","Die","Das"], correct:2 },
{ type:"mcq", topic:"wortarten_k2", subtopic:"artikel_k2", question:"___ Fisch schwimmt.", options:["Der","Die","Das"], correct:0 },
{ type:"mcq", topic:"wortarten_k2", subtopic:"artikel_k2", question:"___ Tür ist offen.", options:["Der","Die","Das"], correct:1 },

{ type:"typing", topic:"wortarten_k2", subtopic:"artikel_k2", question:"Welcher Artikel passt? ___ Computer", answer:["der"] },
{ type:"typing", topic:"wortarten_k2", subtopic:"artikel_k2", question:"Welcher Artikel passt? ___ Sonne", answer:["die"] },
{ type:"typing", topic:"wortarten_k2", subtopic:"artikel_k2", question:"Welcher Artikel passt? ___ Radio", answer:["das"] },
{ type:"typing", topic:"wortarten_k2", subtopic:"artikel_k2", question:"Welcher Artikel passt? ___ Opa", answer:["der"] },
{ type:"typing", topic:"wortarten_k2", subtopic:"artikel_k2", question:"Welcher Artikel passt? ___ Oma", answer:["die"] },
{ type:"typing", topic:"wortarten_k2", subtopic:"artikel_k2", question:"Welcher Artikel passt? ___ Pferd", answer:["das"] },
{ type:"typing", topic:"wortarten_k2", subtopic:"artikel_k2", question:"Welcher Artikel passt? ___ Freund", answer:["der"] },
{ type:"typing", topic:"wortarten_k2", subtopic:"artikel_k2", question:"Welcher Artikel passt? ___ Freundin", answer:["die"] },
{ type:"typing", topic:"wortarten_k2", subtopic:"artikel_k2", question:"Welcher Artikel passt? ___ Dorf", answer:["das"] },
{ type:"typing", topic:"wortarten_k2", subtopic:"artikel_k2", question:"Welcher Artikel passt? ___ Zug", answer:["der"] },

{ type:"mcq", topic:"wortarten_k2", subtopic:"artikel_k2", question:"___ Stadt ist groß.", options:["Der","Die","Das"], correct:1 },
{ type:"mcq", topic:"wortarten_k2", subtopic:"artikel_k2", question:"___ Tier schläft.", options:["Der","Die","Das"], correct:2 },
{ type:"mcq", topic:"wortarten_k2", subtopic:"artikel_k2", question:"___ König regiert.", options:["Der","Die","Das"], correct:0 },
{ type:"mcq", topic:"wortarten_k2", subtopic:"artikel_k2", question:"___ Königin lächelt.", options:["Der","Die","Das"], correct:1 },
{ type:"mcq", topic:"wortarten_k2", subtopic:"artikel_k2", question:"___ Fenster ist offen.", options:["Der","Die","Das"], correct:2 },
{ type:"mcq", topic:"wortarten_k2", subtopic:"artikel_k2", question:"___ Junge rennt.", options:["Der","Die","Das"], correct:0 },
{ type:"mcq", topic:"wortarten_k2", subtopic:"artikel_k2", question:"___ Biene summt.", options:["Der","Die","Das"], correct:1 },
{ type:"mcq", topic:"wortarten_k2", subtopic:"artikel_k2", question:"___ Licht brennt.", options:["Der","Die","Das"], correct:2 },
{ type:"mcq", topic:"wortarten_k2", subtopic:"artikel_k2", question:"___ Onkel kommt.", options:["Der","Die","Das"], correct:0 },
{ type:"mcq", topic:"wortarten_k2", subtopic:"artikel_k2", question:"___ Tante winkt.", options:["Der","Die","Das"], correct:1 },
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
          { type:"mcq", topic:"saetze_k2", subtopic:"satzarten", question:"Was für ein Satz ist: 'Komm bitte her!'", options:["Aussagesatz","Fragesatz","Ausrufsatz"], correct:2 },
{ type:"mcq", topic:"saetze_k2", subtopic:"satzarten", question:"Was für ein Satz ist: 'Wo wohnst du?'", options:["Aussagesatz","Fragesatz","Ausrufsatz"], correct:1 },
{ type:"mcq", topic:"saetze_k2", subtopic:"satzarten", question:"Was für ein Satz ist: 'Der Hund schläft.'", options:["Aussagesatz","Fragesatz","Ausrufsatz"], correct:0 },
{ type:"mcq", topic:"saetze_k2", subtopic:"satzarten", question:"Was für ein Satz ist: 'Pass auf!'", options:["Aussagesatz","Fragesatz","Ausrufsatz"], correct:2 },
{ type:"mcq", topic:"saetze_k2", subtopic:"satzarten", question:"Was für ein Satz ist: 'Hast du Zeit?'", options:["Aussagesatz","Fragesatz","Ausrufsatz"], correct:1 },
{ type:"mcq", topic:"saetze_k2", subtopic:"satzarten", question:"Was für ein Satz ist: 'Wir gehen nach Hause.'", options:["Aussagesatz","Fragesatz","Ausrufsatz"], correct:0 },
{ type:"mcq", topic:"saetze_k2", subtopic:"satzarten", question:"Was für ein Satz ist: 'Wie schön!'", options:["Aussagesatz","Fragesatz","Ausrufsatz"], correct:2 },
{ type:"mcq", topic:"saetze_k2", subtopic:"satzarten", question:"Was für ein Satz ist: 'Warum lachst du?'", options:["Aussagesatz","Fragesatz","Ausrufsatz"], correct:1 },
{ type:"mcq", topic:"saetze_k2", subtopic:"satzarten", question:"Was für ein Satz ist: 'Das ist mein Buch.'", options:["Aussagesatz","Fragesatz","Ausrufsatz"], correct:0 },
{ type:"mcq", topic:"saetze_k2", subtopic:"satzarten", question:"Was für ein Satz ist: 'Hilfe!'", options:["Aussagesatz","Fragesatz","Ausrufsatz"], correct:2 },

{ type:"mcq", topic:"saetze_k2", subtopic:"satzarten", question:"Was für ein Satz ist: 'Magst du Eis?'", options:["Aussagesatz","Fragesatz","Ausrufsatz"], correct:1 },
{ type:"mcq", topic:"saetze_k2", subtopic:"satzarten", question:"Was für ein Satz ist: 'Heute ist es kalt.'", options:["Aussagesatz","Fragesatz","Ausrufsatz"], correct:0 },
{ type:"mcq", topic:"saetze_k2", subtopic:"satzarten", question:"Was für ein Satz ist: 'Bleib hier!'", options:["Aussagesatz","Fragesatz","Ausrufsatz"], correct:2 },
{ type:"mcq", topic:"saetze_k2", subtopic:"satzarten", question:"Was für ein Satz ist: 'Wer kommt heute?'", options:["Aussagesatz","Fragesatz","Ausrufsatz"], correct:1 },
{ type:"mcq", topic:"saetze_k2", subtopic:"satzarten", question:"Was für ein Satz ist: 'Die Sonne scheint.'", options:["Aussagesatz","Fragesatz","Ausrufsatz"], correct:0 },
{ type:"mcq", topic:"saetze_k2", subtopic:"satzarten", question:"Was für ein Satz ist: 'Super gemacht!'", options:["Aussagesatz","Fragesatz","Ausrufsatz"], correct:2 },
{ type:"mcq", topic:"saetze_k2", subtopic:"satzarten", question:"Was für ein Satz ist: 'Wann beginnt die Schule?'", options:["Aussagesatz","Fragesatz","Ausrufsatz"], correct:1 },
{ type:"mcq", topic:"saetze_k2", subtopic:"satzarten", question:"Was für ein Satz ist: 'Mein Bruder liest.'", options:["Aussagesatz","Fragesatz","Ausrufsatz"], correct:0 },
{ type:"mcq", topic:"saetze_k2", subtopic:"satzarten", question:"Was für ein Satz ist: 'Stopp!'", options:["Aussagesatz","Fragesatz","Ausrufsatz"], correct:2 },
{ type:"mcq", topic:"saetze_k2", subtopic:"satzarten", question:"Was für ein Satz ist: 'Wie alt bist du?'", options:["Aussagesatz","Fragesatz","Ausrufsatz"], correct:1 },

{ type:"mcq", topic:"saetze_k2", subtopic:"satzarten", question:"Was für ein Satz ist: 'Der Apfel ist rot.'", options:["Aussagesatz","Fragesatz","Ausrufsatz"], correct:0 },
{ type:"mcq", topic:"saetze_k2", subtopic:"satzarten", question:"Was für ein Satz ist: 'Oh nein!'", options:["Aussagesatz","Fragesatz","Ausrufsatz"], correct:2 },
{ type:"mcq", topic:"saetze_k2", subtopic:"satzarten", question:"Was für ein Satz ist: 'Kannst du schwimmen?'", options:["Aussagesatz","Fragesatz","Ausrufsatz"], correct:1 },
{ type:"mcq", topic:"saetze_k2", subtopic:"satzarten", question:"Was für ein Satz ist: 'Wir lernen Deutsch.'", options:["Aussagesatz","Fragesatz","Ausrufsatz"], correct:0 },
{ type:"mcq", topic:"saetze_k2", subtopic:"satzarten", question:"Was für ein Satz ist: 'Komm sofort!'", options:["Aussagesatz","Fragesatz","Ausrufsatz"], correct:2 },
{ type:"mcq", topic:"saetze_k2", subtopic:"satzarten", question:"Was für ein Satz ist: 'Wo ist mein Heft?'", options:["Aussagesatz","Fragesatz","Ausrufsatz"], correct:1 },
{ type:"mcq", topic:"saetze_k2", subtopic:"satzarten", question:"Was für ein Satz ist: 'Der Zug fährt ab.'", options:["Aussagesatz","Fragesatz","Ausrufsatz"], correct:0 },
{ type:"mcq", topic:"saetze_k2", subtopic:"satzarten", question:"Was für ein Satz ist: 'Wie lecker!'", options:["Aussagesatz","Fragesatz","Ausrufsatz"], correct:2 },
{ type:"mcq", topic:"saetze_k2", subtopic:"satzarten", question:"Was für ein Satz ist: 'Warum bist du traurig?'", options:["Aussagesatz","Fragesatz","Ausrufsatz"], correct:1 },
{ type:"mcq", topic:"saetze_k2", subtopic:"satzarten", question:"Was für ein Satz ist: 'Das Baby schläft.'", options:["Aussagesatz","Fragesatz","Ausrufsatz"], correct:0 },

{ type:"mcq", topic:"saetze_k2", subtopic:"satzarten", question:"Was für ein Satz ist: 'Hör zu!'", options:["Aussagesatz","Fragesatz","Ausrufsatz"], correct:2 },
{ type:"mcq", topic:"saetze_k2", subtopic:"satzarten", question:"Was für ein Satz ist: 'Wer ist das?'", options:["Aussagesatz","Fragesatz","Ausrufsatz"], correct:1 },
{ type:"mcq", topic:"saetze_k2", subtopic:"satzarten", question:"Was für ein Satz ist: 'Die Kinder spielen.'", options:["Aussagesatz","Fragesatz","Ausrufsatz"], correct:0 },
{ type:"mcq", topic:"saetze_k2", subtopic:"satzarten", question:"Was für ein Satz ist: 'Achtung!'", options:["Aussagesatz","Fragesatz","Ausrufsatz"], correct:2 },
{ type:"mcq", topic:"saetze_k2", subtopic:"satzarten", question:"Was für ein Satz ist: 'Hast du Hunger?'", options:["Aussagesatz","Fragesatz","Ausrufsatz"], correct:1 },
{ type:"mcq", topic:"saetze_k2", subtopic:"satzarten", question:"Was für ein Satz ist: 'Der Lehrer erklärt.'", options:["Aussagesatz","Fragesatz","Ausrufsatz"], correct:0 },
{ type:"mcq", topic:"saetze_k2", subtopic:"satzarten", question:"Was für ein Satz ist: 'Bravo!'", options:["Aussagesatz","Fragesatz","Ausrufsatz"], correct:2 },
{ type:"mcq", topic:"saetze_k2", subtopic:"satzarten", question:"Was für ein Satz ist: 'Wann kommst du?'", options:["Aussagesatz","Fragesatz","Ausrufsatz"], correct:1 },
{ type:"mcq", topic:"saetze_k2", subtopic:"satzarten", question:"Was für ein Satz ist: 'Die Blume wächst.'", options:["Aussagesatz","Fragesatz","Ausrufsatz"], correct:0 },
{ type:"mcq", topic:"saetze_k2", subtopic:"satzarten", question:"Was für ein Satz ist: 'Schnell weg!'", options:["Aussagesatz","Fragesatz","Ausrufsatz"], correct:2 },
          // TODO: weitere Fragen ↓
        ],
      },
      {
        id: "grossschreibung_k2",
        name: "Großschreibung",
        questions: [
          { type:"mcq", topic:"saetze_k2", subtopic:"grossschreibung_k2", question:"Welches Wort ist richtig geschrieben?", options:["baum","Baum","BAum","baUm"], correct:1 },
{ type:"mcq", topic:"saetze_k2", subtopic:"grossschreibung_k2", question:"Welches Wort ist richtig geschrieben?", options:["schule","Schule","SCHule","schUle"], correct:1 },
{ type:"mcq", topic:"saetze_k2", subtopic:"grossschreibung_k2", question:"Welches Wort ist falsch geschrieben?", options:["Haus","Auto","kind","Tisch"], correct:2 },
{ type:"mcq", topic:"saetze_k2", subtopic:"grossschreibung_k2", question:"Welcher Satz ist richtig?", options:["die Katze schläft.","Die katze schläft.","Die Katze schläft.","die katze schläft."], correct:2 },
{ type:"mcq", topic:"saetze_k2", subtopic:"grossschreibung_k2", question:"Welcher Satz ist richtig?", options:["Der hund bellt.","Der Hund bellt.","der Hund bellt.","der hund bellt."], correct:1 },
{ type:"mcq", topic:"saetze_k2", subtopic:"grossschreibung_k2", question:"Welches Wort schreibt man groß?", options:["laufen","spielen","Blume","klein"], correct:2 },
{ type:"mcq", topic:"saetze_k2", subtopic:"grossschreibung_k2", question:"Welches Wort ist ein Nomen?", options:["rennen","Tisch","laut","schnell"], correct:1 },
{ type:"mcq", topic:"saetze_k2", subtopic:"grossschreibung_k2", question:"Welcher Satz ist falsch?", options:["Der Apfel ist rot.","Die Sonne scheint.","der Vogel fliegt.","Das Auto fährt."], correct:2 },
{ type:"mcq", topic:"saetze_k2", subtopic:"grossschreibung_k2", question:"Welches Wort ist richtig geschrieben?", options:["Maus","maus","mAus","MAus"], correct:0 },
{ type:"mcq", topic:"saetze_k2", subtopic:"grossschreibung_k2", question:"Welcher Satz beginnt richtig?", options:["der Baum ist hoch.","Der Baum ist hoch.","Der baum ist hoch.","der baum ist hoch."], correct:1 },

{ type:"mcq", topic:"saetze_k2", subtopic:"grossschreibung_k2", question:"Welches Wort ist falsch geschrieben?", options:["Sonne","Mond","stern","Blume"], correct:2 },
{ type:"mcq", topic:"saetze_k2", subtopic:"grossschreibung_k2", question:"Welches Wort wird großgeschrieben?", options:["schwimmen","Ball","schnell","unter"], correct:1 },
{ type:"mcq", topic:"saetze_k2", subtopic:"grossschreibung_k2", question:"Welcher Satz ist richtig?", options:["Die kinder spielen.","Die Kinder spielen.","die Kinder spielen.","die kinder spielen."], correct:1 },
{ type:"mcq", topic:"saetze_k2", subtopic:"grossschreibung_k2", question:"Welches Wort ist richtig?", options:["Lehrer","lehrer","LEhrer","leHrer"], correct:0 },
{ type:"mcq", topic:"saetze_k2", subtopic:"grossschreibung_k2", question:"Welches Wort ist falsch?", options:["Fenster","Garten","brot","Vogel"], correct:2 },
{ type:"mcq", topic:"saetze_k2", subtopic:"grossschreibung_k2", question:"Welches Wort schreibt man groß?", options:["laufen","Haus","klein","heute"], correct:1 },
{ type:"mcq", topic:"saetze_k2", subtopic:"grossschreibung_k2", question:"Welcher Satz ist richtig?", options:["Der Lehrer kommt.","der Lehrer kommt.","Der lehrer kommt.","der lehrer kommt."], correct:0 },
{ type:"mcq", topic:"saetze_k2", subtopic:"grossschreibung_k2", question:"Welches Wort ist richtig geschrieben?", options:["Auto","auto","AUto","auTo"], correct:0 },
{ type:"mcq", topic:"saetze_k2", subtopic:"grossschreibung_k2", question:"Welches Wort ist falsch geschrieben?", options:["Mädchen","Junge","schule","Katze"], correct:2 },
{ type:"mcq", topic:"saetze_k2", subtopic:"grossschreibung_k2", question:"Welcher Satz ist richtig?", options:["Das Pferd läuft.","das Pferd läuft.","Das pferd läuft.","das pferd läuft."], correct:0 },

{ type:"mcq", topic:"saetze_k2", subtopic:"grossschreibung_k2", question:"Welches Wort wird großgeschrieben?", options:["springen","Apfel","rot","unter"], correct:1 },
{ type:"mcq", topic:"saetze_k2", subtopic:"grossschreibung_k2", question:"Welcher Satz ist falsch?", options:["Der Tisch ist groß.","Die Blume ist schön.","das Haus ist alt.","Der Ball ist rund."], correct:2 },
{ type:"mcq", topic:"saetze_k2", subtopic:"grossschreibung_k2", question:"Welches Wort ist richtig geschrieben?", options:["Vogel","vogel","VOgel","voGel"], correct:0 },
{ type:"mcq", topic:"saetze_k2", subtopic:"grossschreibung_k2", question:"Welches Wort ist ein Nomen?", options:["laufen","Baum","leise","schnell"], correct:1 },
{ type:"mcq", topic:"saetze_k2", subtopic:"grossschreibung_k2", question:"Welcher Satz ist richtig?", options:["Die Sonne scheint.","die Sonne scheint.","Die sonne scheint.","die sonne scheint."], correct:0 },
{ type:"mcq", topic:"saetze_k2", subtopic:"grossschreibung_k2", question:"Welches Wort ist falsch geschrieben?", options:["Hund","Katze","vogel","Auto"], correct:2 },
{ type:"mcq", topic:"saetze_k2", subtopic:"grossschreibung_k2", question:"Welches Wort schreibt man groß?", options:["lesen","Tisch","klein","morgen"], correct:1 },
{ type:"mcq", topic:"saetze_k2", subtopic:"grossschreibung_k2", question:"Welcher Satz beginnt richtig?", options:["der Apfel ist süß.","Der Apfel ist süß.","Der apfel ist süß.","der apfel ist süß."], correct:1 },
{ type:"mcq", topic:"saetze_k2", subtopic:"grossschreibung_k2", question:"Welches Wort ist richtig?", options:["Blume","blume","BLume","bluMe"], correct:0 },
{ type:"mcq", topic:"saetze_k2", subtopic:"grossschreibung_k2", question:"Welches Wort ist falsch?", options:["Garten","Straße","haus","Fenster"], correct:2 },

{ type:"mcq", topic:"saetze_k2", subtopic:"grossschreibung_k2", question:"Welcher Satz ist richtig?", options:["Der Mond scheint.","der Mond scheint.","Der mond scheint.","der mond scheint."], correct:0 },
{ type:"mcq", topic:"saetze_k2", subtopic:"grossschreibung_k2", question:"Welches Wort wird großgeschrieben?", options:["spielen","Schule","schnell","unter"], correct:1 },
{ type:"mcq", topic:"saetze_k2", subtopic:"grossschreibung_k2", question:"Welcher Satz ist falsch?", options:["Das Kind spielt.","Die Maus läuft.","der Hund rennt.","Der Vogel singt."], correct:2 },
{ type:"mcq", topic:"saetze_k2", subtopic:"grossschreibung_k2", question:"Welches Wort ist richtig geschrieben?", options:["Katze","katze","KAtze","kaTze"], correct:0 },
{ type:"mcq", topic:"saetze_k2", subtopic:"grossschreibung_k2", question:"Welches Wort ist ein Nomen?", options:["rennen","Ball","laut","heute"], correct:1 },
{ type:"mcq", topic:"saetze_k2", subtopic:"grossschreibung_k2", question:"Welcher Satz ist richtig?", options:["Die Blume ist rot.","die Blume ist rot.","Die blume ist rot.","die blume ist rot."], correct:0 },
{ type:"mcq", topic:"saetze_k2", subtopic:"grossschreibung_k2", question:"Welches Wort ist falsch geschrieben?", options:["Auto","Buch","stuhl","Tasche"], correct:2 },
{ type:"mcq", topic:"saetze_k2", subtopic:"grossschreibung_k2", question:"Welches Wort schreibt man groß?", options:["laufen","Heft","klein","oft"], correct:1 },
{ type:"mcq", topic:"saetze_k2", subtopic:"grossschreibung_k2", question:"Welcher Satz beginnt richtig?", options:["der Vogel fliegt.","Der Vogel fliegt.","Der vogel fliegt.","der vogel fliegt."], correct:1 },
{ type:"mcq", topic:"saetze_k2", subtopic:"grossschreibung_k2", question:"Welches Wort ist richtig?", options:["Tisch","tisch","TIisch","tiSch"], correct:0 },

{ type:"mcq", topic:"saetze_k2", subtopic:"grossschreibung_k2", question:"Welches Wort ist falsch geschrieben?", options:["Mutter","Vater","bruder","Schwester"], correct:2 },
{ type:"mcq", topic:"saetze_k2", subtopic:"grossschreibung_k2", question:"Welches Wort wird großgeschrieben?", options:["springen","Apfel","rot","unter"], correct:1 },
{ type:"mcq", topic:"saetze_k2", subtopic:"grossschreibung_k2", question:"Welcher Satz ist richtig?", options:["Das Auto fährt.","das Auto fährt.","Das auto fährt.","das auto fährt."], correct:0 },
{ type:"mcq", topic:"saetze_k2", subtopic:"grossschreibung_k2", question:"Welches Wort ist richtig geschrieben?", options:["Fenster","fenster","FEnster","fenSter"], correct:0 },
{ type:"mcq", topic:"saetze_k2", subtopic:"grossschreibung_k2", question:"Welches Wort ist ein Nomen?", options:["laufen","Kind","schnell","unter"], correct:1 },
{ type:"mcq", topic:"saetze_k2", subtopic:"grossschreibung_k2", question:"Welcher Satz ist falsch?", options:["Der Baum ist hoch.","Die Katze schläft.","das Kind spielt.","Der Lehrer kommt."], correct:2 },
{ type:"mcq", topic:"saetze_k2", subtopic:"grossschreibung_k2", question:"Welches Wort schreibt man groß?", options:["lesen","Blume","leise","heute"], correct:1 },
{ type:"mcq", topic:"saetze_k2", subtopic:"grossschreibung_k2", question:"Welcher Satz beginnt richtig?", options:["der Tisch ist neu.","Der Tisch ist neu.","Der tisch ist neu.","der tisch ist neu."], correct:1 },
{ type:"mcq", topic:"saetze_k2", subtopic:"grossschreibung_k2", question:"Welches Wort ist richtig?", options:["Garten","garten","GArten","garTen"], correct:0 },
{ type:"mcq", topic:"saetze_k2", subtopic:"grossschreibung_k2", question:"Welches Wort ist falsch geschrieben?", options:["Sonne","Mond","Wasser","brot"], correct:3 },
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
          { type: "mcq", topic: "rechtschreibung_k2", subtopic: "tz_z", question: "Welches Wort ist richtig geschrieben?", options: ["Satz", "Saz", "Satzz"], correct: 0 },
{ type: "typing", topic: "rechtschreibung_k2", subtopic: "tz_z", question: "Ergänze: der Sa___", answer: ["Satz", "satz"] },
{ type: "mcq", topic: "rechtschreibung_k2", subtopic: "tz_z", question: "Welches Wort ist richtig geschrieben?", options: ["Platz", "Plaz", "Platzz"], correct: 0 },
{ type: "typing", topic: "rechtschreibung_k2", subtopic: "tz_z", question: "Ergänze: der Pla___", answer: ["Platz", "platz"] },
{ type: "mcq", topic: "rechtschreibung_k2", subtopic: "tz_z", question: "Welches Wort ist richtig geschrieben?", options: ["Netz", "Nez", "Netzz"], correct: 0 },
{ type: "typing", topic: "rechtschreibung_k2", subtopic: "tz_z", question: "Ergänze: das Ne___", answer: ["Netz", "netz"] },
{ type: "mcq", topic: "rechtschreibung_k2", subtopic: "tz_z", question: "Welches Wort ist richtig geschrieben?", options: ["Herz", "Hertz", "Herzz"], correct: 0 },
{ type: "typing", topic: "rechtschreibung_k2", subtopic: "tz_z", question: "Ergänze: das Her___", answer: ["Herz", "herz"] },
{ type: "mcq", topic: "rechtschreibung_k2", subtopic: "tz_z", question: "Welches Wort ist richtig geschrieben?", options: ["Mütze", "Müze", "Mützze"], correct: 0 },
{ type: "typing", topic: "rechtschreibung_k2", subtopic: "tz_z", question: "Ergänze: die Mü___e", answer: ["Mütze", "mütze"] },
{ type: "mcq", topic: "rechtschreibung_k2", subtopic: "tz_z", question: "Welches Wort ist richtig geschrieben?", options: ["Hitze", "Hize", "Hitzze"], correct: 0 },
{ type: "typing", topic: "rechtschreibung_k2", subtopic: "tz_z", question: "Ergänze: die Hi___e", answer: ["Hitze", "hitze"] },
{ type: "mcq", topic: "rechtschreibung_k2", subtopic: "tz_z", question: "Welches Wort ist richtig geschrieben?", options: ["Schatz", "Schaz", "Schatzz"], correct: 0 },
{ type: "typing", topic: "rechtschreibung_k2", subtopic: "tz_z", question: "Ergänze: der Scha___", answer: ["Schatz", "schatz"] },
{ type: "mcq", topic: "rechtschreibung_k2", subtopic: "tz_z", question: "Welches Wort ist richtig geschrieben?", options: ["Grenze", "Grenzeh", "Grense"], correct: 0 },
{ type: "typing", topic: "rechtschreibung_k2", subtopic: "tz_z", question: "Ergänze: die Gren___e", answer: ["Grenze", "grenze"] },
{ type: "mcq", topic: "rechtschreibung_k2", subtopic: "tz_z", question: "Welches Wort ist richtig geschrieben?", options: ["Pfütze", "Pfüze", "Pfutze"], correct: 0 },
{ type: "typing", topic: "rechtschreibung_k2", subtopic: "tz_z", question: "Ergänze: die Pfü___e", answer: ["Pfütze", "pfütze"] },
{ type: "mcq", topic: "rechtschreibung_k2", subtopic: "tz_z", question: "Welches Wort ist richtig geschrieben?", options: ["Witz", "Wiz", "Witzz"], correct: 0 },
{ type: "typing", topic: "rechtschreibung_k2", subtopic: "tz_z", question: "Ergänze: der Wi___", answer: ["Witz", "witz"] },
{ type: "mcq", topic: "rechtschreibung_k2", subtopic: "tz_z", question: "Welches Wort ist richtig geschrieben?", options: ["Klotz", "Kloz", "Klottz"], correct: 0 },
{ type: "typing", topic: "rechtschreibung_k2", subtopic: "tz_z", question: "Ergänze: der Klo___", answer: ["Klotz", "klotz"] },
{ type: "mcq", topic: "rechtschreibung_k2", subtopic: "tz_z", question: "Welches Wort ist richtig geschrieben?", options: ["Blitz", "Bliz", "Blitzz"], correct: 0 },
{ type: "typing", topic: "rechtschreibung_k2", subtopic: "tz_z", question: "Ergänze: der Bli___", answer: ["Blitz", "blitz"] }
          { type: "mcq", topic: "rechtschreibung_k2", subtopic: "tz_z", question: "Welches Wort ist richtig geschrieben?", options: ["Kranz", "Krantz", "Krans"], correct: 0 },
{ type: "typing", topic: "rechtschreibung_k2", subtopic: "tz_z", question: "Ergänze: der Kra___", answer: ["Kranz", "kranz"] },
{ type: "mcq", topic: "rechtschreibung_k2", subtopic: "tz_z", question: "Welches Wort ist richtig geschrieben?", options: ["Glanz", "Glan tz", "Glans"], correct: 0 },
{ type: "typing", topic: "rechtschreibung_k2", subtopic: "tz_z", question: "Ergänze: der Gla___", answer: ["Glanz", "glanz"] },
{ type: "mcq", topic: "rechtschreibung_k2", subtopic: "tz_z", question: "Welches Wort ist richtig geschrieben?", options: ["Holz", "Holt z", "Hols"], correct: 0 },
{ type: "typing", topic: "rechtschreibung_k2", subtopic: "tz_z", question: "Ergänze: das Ho___", answer: ["Holz", "holz"] },
{ type: "mcq", topic: "rechtschreibung_k2", subtopic: "tz_z", question: "Welches Wort ist richtig geschrieben?", options: ["Salz", "Sals", "Saltz"], correct: 0 },
{ type: "typing", topic: "rechtschreibung_k2", subtopic: "tz_z", question: "Ergänze: das Sa___", answer: ["Salz", "salz"] },
{ type: "mcq", topic: "rechtschreibung_k2", subtopic: "tz_z", question: "Welches Wort ist richtig geschrieben?", options: ["Pilz", "Piltz", "Pils"], correct: 0 },
{ type: "typing", topic: "rechtschreibung_k2", subtopic: "tz_z", question: "Ergänze: der Pi___", answer: ["Pilz", "pilz"] },
{ type: "mcq", topic: "rechtschreibung_k2", subtopic: "tz_z", question: "Welches Wort ist richtig geschrieben?", options: ["Tanz", "Tantz", "Tans"], correct: 0 },
{ type: "typing", topic: "rechtschreibung_k2", subtopic: "tz_z", question: "Ergänze: der Ta___", answer: ["Tanz", "tanz"] },
{ type: "mcq", topic: "rechtschreibung_k2", subtopic: "tz_z", question: "Welches Wort ist richtig geschrieben?", options: ["Arzt", "Arz", "Artzt"], correct: 0 },
{ type: "typing", topic: "rechtschreibung_k2", subtopic: "tz_z", question: "Ergänze: der Ar___", answer: ["Arzt", "arzt"] },
{ type: "mcq", topic: "rechtschreibung_k2", subtopic: "tz_z", question: "Welches Wort ist richtig geschrieben?", options: ["Markt", "Marktz", "Mark"], correct: 0 },
{ type: "typing", topic: "rechtschreibung_k2", subtopic: "tz_z", question: "Ergänze: der Mar___", answer: ["Markt", "markt"] },
{ type: "mcq", topic: "rechtschreibung_k2", subtopic: "tz_z", question: "Welches Wort ist richtig geschrieben?", options: ["kurz", "kurtz", "kurs"], correct: 0 },
{ type: "typing", topic: "rechtschreibung_k2", subtopic: "tz_z", question: "Ergänze: Es ist ku___.", answer: ["kurz", "Kurz"] },
{ type: "mcq", topic: "rechtschreibung_k2", subtopic: "tz_z", question: "Welches Wort ist richtig geschrieben?", options: ["süß", "süzz", "süs"], correct: 0 },
{ type: "typing", topic: "rechtschreibung_k2", subtopic: "tz_z", question: "Ergänze: Die Limo ist sü___.", answer: ["süß", "Süß"] },
{ type: "mcq", topic: "rechtschreibung_k2", subtopic: "tz_z", question: "Welches Wort ist richtig geschrieben?", options: ["setzen", "setzten", "sezen"], correct: 0 },
{ type: "typing", topic: "rechtschreibung_k2", subtopic: "tz_z", question: "Ergänze: Wir se___en uns.", answer: ["setzen"] },
{ type: "mcq", topic: "rechtschreibung_k2", subtopic: "tz_z", question: "Welches Wort ist richtig geschrieben?", options: ["schätzen", "schäzen", "schätssen"], correct: 0 },
{ type: "typing", topic: "rechtschreibung_k2", subtopic: "tz_z", question: "Ergänze: Ich schä___e dich.", answer: ["schätze"] },
{ type: "mcq", topic: "rechtschreibung_k2", subtopic: "tz_z", question: "Welches Wort ist richtig geschrieben?", options: ["nutzen", "nuzen", "nutssen"], correct: 0 },
{ type: "typing", topic: "rechtschreibung_k2", subtopic: "tz_z", question: "Ergänze: Wir nu___en das Buch.", answer: ["nutzen"] },
{ type: "mcq", topic: "rechtschreibung_k2", subtopic: "tz_z", question: "Welches Wort ist richtig geschrieben?", options: ["putzen", "puzen", "putzzen"], correct: 0 },
{ type: "typing", topic: "rechtschreibung_k2", subtopic: "tz_z", question: "Ergänze: Ich pu___e die Schuhe.", answer: ["putze"] },
{ type: "mcq", topic: "rechtschreibung_k2", subtopic: "tz_z", question: "Welches Wort ist richtig geschrieben?", options: ["kratzen", "krazen", "kratzzen"], correct: 0 },
{ type: "typing", topic: "rechtschreibung_k2", subtopic: "tz_z", question: "Ergänze: Die Katze kra___t.", answer: ["kratzt"] },
{ type: "mcq", topic: "rechtschreibung_k2", subtopic: "tz_z", question: "Welches Wort ist richtig geschrieben?", options: ["spitz", "spits", "spittz"], correct: 0 },
{ type: "typing", topic: "rechtschreibung_k2", subtopic: "tz_z", question: "Ergänze: Der Stift ist spi___.", answer: ["spitz"] }
          
          // TODO: weitere Fragen ↓
        ],
      },
      {
        id: "ck_k",
        name: "ck oder k?",
        questions: [
          { type: "typing", topic: "rechtschreibung_k2", subtopic: "ck_k", question: "Ergänze: ba___en", answer: ["backen"] },
{ type: "mcq", topic: "rechtschreibung_k2", subtopic: "ck_k", question: "Welches Wort ist richtig geschrieben?", options: ["packen", "paken", "packken"], correct: 0 },
{ type: "typing", topic: "rechtschreibung_k2", subtopic: "ck_k", question: "Ergänze: pa___en", answer: ["packen"] },
{ type: "mcq", topic: "rechtschreibung_k2", subtopic: "ck_k", question: "Welches Wort ist richtig geschrieben?", options: ["Jacke", "Jake", "Jakke"], correct: 0 },
{ type: "typing", topic: "rechtschreibung_k2", subtopic: "ck_k", question: "Ergänze: die Ja___e", answer: ["Jacke"] },
{ type: "mcq", topic: "rechtschreibung_k2", subtopic: "ck_k", question: "Welches Wort ist richtig geschrieben?", options: ["Teller", "Tecker", "Teker"], correct: 0 },
{ type: "mcq", topic: "rechtschreibung_k2", subtopic: "ck_k", question: "Welches Wort ist richtig geschrieben?", options: ["Decke", "Deke", "Dekke"], correct: 0 },
{ type: "typing", topic: "rechtschreibung_k2", subtopic: "ck_k", question: "Ergänze: die De___e", answer: ["Decke"] },
{ type: "mcq", topic: "rechtschreibung_k2", subtopic: "ck_k", question: "Welches Wort ist richtig geschrieben?", options: ["Zucker", "Zuker", "Zuckker"], correct: 0 },
{ type: "typing", topic: "rechtschreibung_k2", subtopic: "ck_k", question: "Ergänze: Zu___er", answer: ["Zucker"] },
{ type: "mcq", topic: "rechtschreibung_k2", subtopic: "ck_k", question: "Welches Wort ist richtig geschrieben?", options: ["Brücke", "Brüke", "Brükke"], correct: 0 },
{ type: "typing", topic: "rechtschreibung_k2", subtopic: "ck_k", question: "Ergänze: die Brü___e", answer: ["Brücke"] },
{ type: "mcq", topic: "rechtschreibung_k2", subtopic: "ck_k", question: "Welches Wort ist richtig geschrieben?", options: ["Glocke", "Gloke", "Glokke"], correct: 0 },
{ type: "typing", topic: "rechtschreibung_k2", subtopic: "ck_k", question: "Ergänze: die Glo___e", answer: ["Glocke"] },
{ type: "mcq", topic: "rechtschreibung_k2", subtopic: "ck_k", question: "Welches Wort ist richtig geschrieben?", options: ["trocken", "troken", "trockken"], correct: 0 },
{ type: "typing", topic: "rechtschreibung_k2", subtopic: "ck_k", question: "Ergänze: tro___en", answer: ["trocken"] },
{ type: "mcq", topic: "rechtschreibung_k2", subtopic: "ck_k", question: "Welches Wort ist richtig geschrieben?", options: ["schicken", "schiken", "schickken"], correct: 0 },
{ type: "typing", topic: "rechtschreibung_k2", subtopic: "ck_k", question: "Ergänze: schi___en", answer: ["schicken"] },
{ type: "mcq", topic: "rechtschreibung_k2", subtopic: "ck_k", question: "Welches Wort ist richtig geschrieben?", options: ["dicken", "diken", "dickken"], correct: 0 },
{ type: "typing", topic: "rechtschreibung_k2", subtopic: "ck_k", question: "Ergänze: di___en", answer: ["dicken"] },
{ type: "mcq", topic: "rechtschreibung_k2", subtopic: "ck_k", question: "Welches Wort ist richtig geschrieben?", options: ["wecken", "weken", "weckken"], correct: 0 },
{ type: "typing", topic: "rechtschreibung_k2", subtopic: "ck_k", question: "Ergänze: we___en", answer: ["wecken"] },
{ type: "mcq", topic: "rechtschreibung_k2", subtopic: "ck_k", question: "Welches Wort ist richtig geschrieben?", options: ["Haken", "Hacken", "Hakken"], correct: 0 },
{ type: "mcq", topic: "rechtschreibung_k2", subtopic: "ck_k", question: "Welches Wort ist richtig geschrieben?", options: ["Laken", "Lacken", "Lakcken"], correct: 0 },
{ type: "mcq", topic: "rechtschreibung_k2", subtopic: "ck_k", question: "Welches Wort ist richtig geschrieben?", options: ["sacken", "saken", "sakcken"], correct: 0 },
{ type: "typing", topic: "rechtschreibung_k2", subtopic: "ck_k", question: "Ergänze: sa___en", answer: ["sacken"] },
{ type: "mcq", topic: "rechtschreibung_k2", subtopic: "ck_k", question: "Welches Wort ist richtig geschrieben?", options: ["locken", "loken", "lockken"], correct: 0 },
{ type: "typing", topic: "rechtschreibung_k2", subtopic: "ck_k", question: "Ergänze: lo___en", answer: ["locken"] },
{ type: "mcq", topic: "rechtschreibung_k2", subtopic: "ck_k", question: "Welches Wort ist richtig geschrieben?", options: ["Rücken", "Rüken", "Rückken"], correct: 0 },
{ type: "typing", topic: "rechtschreibung_k2", subtopic: "ck_k", question: "Ergänze: Rü___en", answer: ["Rücken"] }
          { type: "mcq", topic: "rechtschreibung_k2", subtopic: "ck_k", question: "Welches Wort ist richtig geschrieben?", options: ["backt", "bakt", "bakkt"], correct: 0 },
{ type: "typing", topic: "rechtschreibung_k2", subtopic: "ck_k", question: "Ergänze: Er ba___t Brot.", answer: ["backt"] },
{ type: "mcq", topic: "rechtschreibung_k2", subtopic: "ck_k", question: "Welches Wort ist richtig geschrieben?", options: ["pickt", "pikt", "pikk t"], correct: 0 },
{ type: "typing", topic: "rechtschreibung_k2", subtopic: "ck_k", question: "Ergänze: Der Vogel pi___t.", answer: ["pickt"] },
{ type: "mcq", topic: "rechtschreibung_k2", subtopic: "ck_k", question: "Welches Wort ist richtig geschrieben?", options: ["zackig", "zakig", "zackkig"], correct: 0 },
{ type: "typing", topic: "rechtschreibung_k2", subtopic: "ck_k", question: "Ergänze: Die Linie ist za___ig.", answer: ["zackig"] },
{ type: "mcq", topic: "rechtschreibung_k2", subtopic: "ck_k", question: "Welches Wort ist richtig geschrieben?", options: ["wackeln", "wakeln", "wackkeln"], correct: 0 },
{ type: "typing", topic: "rechtschreibung_k2", subtopic: "ck_k", question: "Ergänze: Der Tisch wa___elt.", answer: ["wackelt"] },
{ type: "mcq", topic: "rechtschreibung_k2", subtopic: "ck_k", question: "Welches Wort ist richtig geschrieben?", options: ["Ecke", "Eke", "Ekke"], correct: 0 },
{ type: "typing", topic: "rechtschreibung_k2", subtopic: "ck_k", question: "Ergänze: die E___e", answer: ["Ecke"] },
{ type: "mcq", topic: "rechtschreibung_k2", subtopic: "ck_k", question: "Welches Wort ist richtig geschrieben?", options: ["Stecker", "Steker", "Steckker"], correct: 0 },
{ type: "typing", topic: "rechtschreibung_k2", subtopic: "ck_k", question: "Ergänze: der Ste___er", answer: ["Stecker"] },
{ type: "mcq", topic: "rechtschreibung_k2", subtopic: "ck_k", question: "Welches Wort ist richtig geschrieben?", options: ["weckt", "wekt", "wekkt"], correct: 0 },
{ type: "typing", topic: "rechtschreibung_k2", subtopic: "ck_k", question: "Ergänze: Der Lärm we___t mich.", answer: ["weckt"] },
{ type: "mcq", topic: "rechtschreibung_k2", subtopic: "ck_k", question: "Welches Wort ist richtig geschrieben?", options: ["Lecker", "Leker", "Leckker"], correct: 0 },
{ type: "typing", topic: "rechtschreibung_k2", subtopic: "ck_k", question: "Ergänze: Der Kuchen ist le___er.", answer: ["lecker", "Lecker"] },
{ type: "mcq", topic: "rechtschreibung_k2", subtopic: "ck_k", question: "Welches Wort ist richtig geschrieben?", options: ["Macke", "Make", "Makke"], correct: 0 },
{ type: "typing", topic: "rechtschreibung_k2", subtopic: "ck_k", question: "Ergänze: Das Auto hat eine Ma___e.", answer: ["Macke"] },
{ type: "mcq", topic: "rechtschreibung_k2", subtopic: "ck_k", question: "Welches Wort ist richtig geschrieben?", options: ["Nickel", "Nikel", "Nickkel"], correct: 0 },
{ type: "mcq", topic: "rechtschreibung_k2", subtopic: "ck_k", question: "Welches Wort ist richtig geschrieben?", options: ["Hacke", "Hake", "Hakke"], correct: 0 },
{ type: "typing", topic: "rechtschreibung_k2", subtopic: "ck_k", question: "Ergänze: die Ha___e", answer: ["Hacke"] },
{ type: "mcq", topic: "rechtschreibung_k2", subtopic: "ck_k", question: "Welches Wort ist richtig geschrieben?", options: ["Blick", "Blik", "Blickk"], correct: 0 },
{ type: "typing", topic: "rechtschreibung_k2", subtopic: "ck_k", question: "Ergänze: ein Bli___", answer: ["Blick"] },
{ type: "mcq", topic: "rechtschreibung_k2", subtopic: "ck_k", question: "Welches Wort ist richtig geschrieben?", options: ["Stock", "Stok", "Stockk"], correct: 0 },
{ type: "typing", topic: "rechtschreibung_k2", subtopic: "ck_k", question: "Ergänze: der Sto___", answer: ["Stock"] },
{ type: "mcq", topic: "rechtschreibung_k2", subtopic: "ck_k", question: "Welches Wort ist richtig geschrieben?", options: ["Rock", "Rok", "Rockk"], correct: 0 },
{ type: "typing", topic: "rechtschreibung_k2", subtopic: "ck_k", question: "Ergänze: der Ro___", answer: ["Rock"] }
          // TODO: weitere Fragen ↓
        ],
      },
      {
        id: "doppelvokal",
        name: "Doppelvokale (ee, oo)",
        questions: [
          { type: "typing", topic: "rechtschreibung_k2", subtopic: "doppelvokal", question: "Ergänze: S___", answer: ["See"] },
{ type: "mcq", topic: "rechtschreibung_k2", subtopic: "doppelvokal", question: "Welches Wort enthält einen Doppelvokal?", options: ["Boot", "Ball", "Hund", "Tisch"], correct: 0 },
{ type: "typing", topic: "rechtschreibung_k2", subtopic: "doppelvokal", question: "Ergänze: B___t", answer: ["Boot"] },
{ type: "mcq", topic: "rechtschreibung_k2", subtopic: "doppelvokal", question: "Welches Wort enthält einen Doppelvokal?", options: ["Meer", "Hand", "Tag", "Weg"], correct: 0 },
{ type: "typing", topic: "rechtschreibung_k2", subtopic: "doppelvokal", question: "Ergänze: M___r", answer: ["Meer"] },
{ type: "mcq", topic: "rechtschreibung_k2", subtopic: "doppelvokal", question: "Welches Wort enthält einen Doppelvokal?", options: ["Zoo", "Sonne", "Blume", "Kalt"], correct: 0 },
{ type: "typing", topic: "rechtschreibung_k2", subtopic: "doppelvokal", question: "Ergänze: Z___", answer: ["Zoo"] },
{ type: "mcq", topic: "rechtschreibung_k2", subtopic: "doppelvokal", question: "Welches Wort enthält einen Doppelvokal?", options: ["Schnee", "Wind", "Brot", "Stuhl"], correct: 0 },
{ type: "typing", topic: "rechtschreibung_k2", subtopic: "doppelvokal", question: "Ergänze: Schn___", answer: ["Schnee"] },
{ type: "mcq", topic: "rechtschreibung_k2", subtopic: "doppelvokal", question: "Welches Wort enthält einen Doppelvokal?", options: ["Moos", "Gras", "Fisch", "Lampe"], correct: 0 },
{ type: "typing", topic: "rechtschreibung_k2", subtopic: "doppelvokal", question: "Ergänze: M___s", answer: ["Moos"] },
{ type: "mcq", topic: "rechtschreibung_k2", subtopic: "doppelvokal", question: "Welches Wort enthält einen Doppelvokal?", options: ["Beere", "Topf", "Kind", "Buch"], correct: 0 },
{ type: "typing", topic: "rechtschreibung_k2", subtopic: "doppelvokal", question: "Ergänze: B___re", answer: ["Beere"] },
{ type: "mcq", topic: "rechtschreibung_k2", subtopic: "doppelvokal", question: "Welches Wort enthält einen Doppelvokal?", options: ["Klee", "Berg", "Haus", "Rock"], correct: 0 },
{ type: "typing", topic: "rechtschreibung_k2", subtopic: "doppelvokal", question: "Ergänze: Kl___", answer: ["Klee"] },
{ type: "mcq", topic: "rechtschreibung_k2", subtopic: "doppelvokal", question: "Welches Wort enthält einen Doppelvokal?", options: ["Teer", "Sack", "Feld", "Mund"], correct: 0 },
{ type: "typing", topic: "rechtschreibung_k2", subtopic: "doppelvokal", question: "Ergänze: T___r", answer: ["Teer"] },
{ type: "mcq", topic: "rechtschreibung_k2", subtopic: "doppelvokal", question: "Welches Wort enthält einen Doppelvokal?", options: ["Pool", "Stadt", "Licht", "Hand"], correct: 0 },
{ type: "typing", topic: "rechtschreibung_k2", subtopic: "doppelvokal", question: "Ergänze: P___l", answer: ["Pool"] },
{ type: "mcq", topic: "rechtschreibung_k2", subtopic: "doppelvokal", question: "Welches Wort enthält einen Doppelvokal?", options: ["Aal", "Fisch", "Kind", "Brot"], correct: 0 },
{ type: "typing", topic: "rechtschreibung_k2", subtopic: "doppelvokal", question: "Ergänze: ___l", answer: ["Aal"] },
{ type: "mcq", topic: "rechtschreibung_k2", subtopic: "doppelvokal", question: "Welches Wort enthält einen Doppelvokal?", options: ["Fee", "Hund", "Baum", "Glas"], correct: 0 },
{ type: "typing", topic: "rechtschreibung_k2", subtopic: "doppelvokal", question: "Ergänze: F___", answer: ["Fee"] },
{ type: "mcq", topic: "rechtschreibung_k2", subtopic: "doppelvokal", question: "Welches Wort enthält einen Doppelvokal?", options: ["leer", "Tisch", "Ball", "Stern"], correct: 0 },
{ type: "typing", topic: "rechtschreibung_k2", subtopic: "doppelvokal", question: "Ergänze: l___r", answer: ["leer"] },
{ type: "mcq", topic: "rechtschreibung_k2", subtopic: "doppelvokal", question: "Welches Wort enthält einen Doppelvokal?", options: ["Koole", "Kohle", "Kole", "Kalle"], correct: 1 }
          { type: "mcq", topic: "rechtschreibung_k2", subtopic: "doppelvokal", question: "Welches Wort enthält einen Doppelvokal?", options: ["Staat", "Stadt", "Start", "Stand"], correct: 0 },
{ type: "typing", topic: "rechtschreibung_k2", subtopic: "doppelvokal", question: "Ergänze: St___t", answer: ["Staat"] },
{ type: "mcq", topic: "rechtschreibung_k2", subtopic: "doppelvokal", question: "Welches Wort enthält einen Doppelvokal?", options: ["Waage", "Wage", "Wange", "Welle"], correct: 0 },
{ type: "typing", topic: "rechtschreibung_k2", subtopic: "doppelvokal", question: "Ergänze: W___ge", answer: ["Waage"] },
{ type: "mcq", topic: "rechtschreibung_k2", subtopic: "doppelvokal", question: "Welches Wort enthält einen Doppelvokal?", options: ["Haar", "Har", "Hase", "Halle"], correct: 0 },
{ type: "typing", topic: "rechtschreibung_k2", subtopic: "doppelvokal", question: "Ergänze: H___r", answer: ["Haar"] },
{ type: "mcq", topic: "rechtschreibung_k2", subtopic: "doppelvokal", question: "Welches Wort enthält einen Doppelvokal?", options: ["Saat", "Satt", "Satz", "Sand"], correct: 0 },
{ type: "typing", topic: "rechtschreibung_k2", subtopic: "doppelvokal", question: "Ergänze: S___t", answer: ["Saat"] },
{ type: "mcq", topic: "rechtschreibung_k2", subtopic: "doppelvokal", question: "Welches Wort enthält einen Doppelvokal?", options: ["Baal", "Ball", "Bald", "Bild"], correct: 0 },
{ type: "mcq", topic: "rechtschreibung_k2", subtopic: "doppelvokal", question: "Welches Wort enthält einen Doppelvokal?", options: ["sooft", "sofort", "sofat", "sohrt"], correct: 1 },
{ type: "mcq", topic: "rechtschreibung_k2", subtopic: "doppelvokal", question: "Welches Wort enthält einen Doppelvokal?", options: ["Idee", "Idde", "Iidee", "Iede"], correct: 0 },
{ type: "typing", topic: "rechtschreibung_k2", subtopic: "doppelvokal", question: "Ergänze: Id___", answer: ["Idee"] },
{ type: "mcq", topic: "rechtschreibung_k2", subtopic: "doppelvokal", question: "Welches Wort enthält einen Doppelvokal?", options: ["allee", "Allee", "Ale", "Allle"], correct: 1 },
{ type: "typing", topic: "rechtschreibung_k2", subtopic: "doppelvokal", question: "Ergänze: All___", answer: ["Allee"] },
{ type: "mcq", topic: "rechtschreibung_k2", subtopic: "doppelvokal", question: "Welches Wort enthält einen Doppelvokal?", options: ["Ozean", "Oozean", "Ozzean", "Ozeean"], correct: 0 },
{ type: "mcq", topic: "rechtschreibung_k2", subtopic: "doppelvokal", question: "Welches Wort enthält einen Doppelvokal?", options: ["Bote", "Boote", "Bot", "Botte"], correct: 1 },
{ type: "typing", topic: "rechtschreibung_k2", subtopic: "doppelvokal", question: "Ergänze: B___te", answer: ["Boote"] },
{ type: "mcq", topic: "rechtschreibung_k2", subtopic: "doppelvokal", question: "Welches Wort enthält einen Doppelvokal?", options: ["Heer", "Her", "Herr", "Herd"], correct: 0 },
{ type: "typing", topic: "rechtschreibung_k2", subtopic: "doppelvokal", question: "Ergänze: H___r", answer: ["Heer"] },
{ type: "mcq", topic: "rechtschreibung_k2", subtopic: "doppelvokal", question: "Welches Wort enthält einen Doppelvokal?", options: ["Doof", "Dof", "Doff", "Dofe"], correct: 0 },
{ type: "typing", topic: "rechtschreibung_k2", subtopic: "doppelvokal", question: "Ergänze: D___f", answer: ["Doof"] },
          { type: "mcq", topic: "rechtschreibung_k2", subtopic: "doppelvokal", question: "Welches Wort enthält einen Doppelvokal?", options: ["Meerjungfrau", "Jungfrau", "Frau", "Mann"], correct: 0 },
{ type: "typing", topic: "rechtschreibung_k2", subtopic: "doppelvokal", question: "Ergänze: M___r", answer: ["Meer"] },
{ type: "mcq", topic: "rechtschreibung_k2", subtopic: "doppelvokal", question: "Welches Wort enthält einen Doppelvokal?", options: ["Beet", "Bett", "Bit", "Boot"], correct: 0 },
{ type: "typing", topic: "rechtschreibung_k2", subtopic: "doppelvokal", question: "Ergänze: B___t", answer: ["Beet"] },
{ type: "mcq", topic: "rechtschreibung_k2", subtopic: "doppelvokal", question: "Welches Wort enthält einen Doppelvokal?", options: ["Reet", "Rett", "Rat", "Rot"], correct: 0 },
{ type: "typing", topic: "rechtschreibung_k2", subtopic: "doppelvokal", question: "Ergänze: R___t", answer: ["Reet"] },
{ type: "mcq", topic: "rechtschreibung_k2", subtopic: "doppelvokal", question: "Welches Wort enthält einen Doppelvokal?", options: ["Moosig", "Mosig", "Mossig", "Masig"], correct: 0 },
{ type: "typing", topic: "rechtschreibung_k2", subtopic: "doppelvokal", question: "Ergänze: M___sig", answer: ["Moosig"] },
{ type: "mcq", topic: "rechtschreibung_k2", subtopic: "doppelvokal", question: "Welches Wort enthält einen Doppelvokal?", options: ["Aas", "As", "Ass", "Aase"], correct: 0 },
{ type: "typing", topic: "rechtschreibung_k2", subtopic: "doppelvokal", question: "Ergänze: ___s", answer: ["Aas"] },
{ type: "mcq", topic: "rechtschreibung_k2", subtopic: "doppelvokal", question: "Welches Wort enthält einen Doppelvokal?", options: ["Seele", "Sele", "Selle", "Säle"], correct: 0 },
{ type: "typing", topic: "rechtschreibung_k2", subtopic: "doppelvokal", question: "Ergänze: S___le", answer: ["Seele"] },
{ type: "mcq", topic: "rechtschreibung_k2", subtopic: "doppelvokal", question: "Welches Wort enthält einen Doppelvokal?", options: ["Beere", "Bere", "Berr", "Bäre"], correct: 0 },
{ type: "typing", topic: "rechtschreibung_k2", subtopic: "doppelvokal", question: "Ergänze: B___re", answer: ["Beere"] },
{ type: "mcq", topic: "rechtschreibung_k2", subtopic: "doppelvokal", question: "Welches Wort enthält einen Doppelvokal?", options: ["Heere", "Here", "Herre", "Hare"], correct: 0 },
{ type: "typing", topic: "rechtschreibung_k2", subtopic: "doppelvokal", question: "Ergänze: H___re", answer: ["Heere"] },
{ type: "mcq", topic: "rechtschreibung_k2", subtopic: "doppelvokal", question: "Welches Wort enthält einen Doppelvokal?", options: ["Kooperieren", "Koperieren", "Kooperrieren", "Kopperieren"], correct: 0 },
{ type: "mcq", topic: "rechtschreibung_k2", subtopic: "doppelvokal", question: "Welches Wort enthält einen Doppelvokal?", options: ["Zoologe", "Zologe", "Zoolooge", "Zooologe"], correct: 0 },
{ type: "typing", topic: "rechtschreibung_k2", subtopic: "doppelvokal", question: "Ergänze: Z___loge", answer: ["Zoologe"] },
{ type: "mcq", topic: "rechtschreibung_k2", subtopic: "doppelvokal", question: "Welches Wort enthält einen Doppelvokal?", options: ["Kakao", "Kakko", "Kako", "Kakkao"], correct: 0 },
{ type: "mcq", topic: "rechtschreibung_k2", subtopic: "doppelvokal", question: "Welches Wort enthält einen Doppelvokal?", options: ["Radio", "Raadio", "Raddio", "Rado"], correct: 0 },
          
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
