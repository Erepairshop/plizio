// lib/explorerPools/informatikaK5_i9.ts
import type { PoolTopicDef } from "./types";

export const INFO_K5_I9_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Informatik Entdecker 9",
    t1_title: "Reihenfolge (Sequenz)", t1_text: "Beim Programmieren wird jeder Befehl in der richtigen Reihenfolge ausgeführt.", t1_inst: "Ordne die Paare zu:", t1_h1: "Was kommt zuerst?", t1_h2: "Reihenfolge ist wichtig!", t1_q: "Was passiert, wenn die Reihenfolge falsch ist?", t1_qa: "Das Programm funktioniert nicht richtig", t1_qb: "Das Programm wird schneller", t1_qc: "Das Programm löscht Daten", t1_qd: "Das Programm druckt",
    t1_l1: "1. Schritt", t1_r1: "Zuerst", t1_l2: "2. Schritt", t1_r2: "Dann", t1_l3: "3. Schritt", t1_r3: "Zuletzt",
    t2_title: "Bedingung (if-Anweisung)", t2_text: "Eine Bedingung prüft, ob etwas wahr oder falsch ist, und entscheidet, was passiert.", t2_inst: "Fülle die Lücke aus:", t2_h1: "Wenn... dann...", t2_h2: "True oder False?", t2_q: "Was macht eine if-Anweisung?", t2_qa: "Prüft eine Bedingung", t2_qb: "Wiederholt einen Befehl", t2_qc: "Speichert eine Datei", t2_qd: "Öffnet ein Programm",
    t2_sent: "Wenn die Bedingung ___ ist, führt das Programm den Befehl aus.", t2_qa2: "wahr", t2_qb2: "falsch", t2_qc2: "leer", t2_qd2: "groß",
    t3_title: "Schleife (Wiederholung)", t3_text: "Eine Schleife wiederholt Befehle mehrmals, ohne sie extra schreiben zu müssen.", t3_inst: "Sortiere in die Eimer:", t3_h1: "Einmal oder viele Male?", t3_h2: "Schleife = Wiederholung.", t3_q: "Wann benutzt man eine Schleife?", t3_qa: "Wenn man etwas mehrmals wiederholen will", t3_qb: "Wenn man eine Datei speichert", t3_qc: "Wenn man eine Farbe wählt", t3_qd: "Wenn man druckt",
    t3_bl1: "Schleife (viele Male)", t3_bl2: "Einmalig", t3_i1: "10× bewegen", t3_i2: "Einmal drucken", t3_i3: "100× zählen", t3_i4: "Datei öffnen",
    t4_title: "Scratch Grundlagen", t4_text: "Scratch ist eine Programmiersprache für Anfänger mit bunten Bausteinen.", t4_inst: "Bringe die Wörter in Ordnung:", t4_h1: "Scratch = bunte Bausteine.", t4_h2: "Einfach anfangen!", t4_q: "Was ist Scratch?", t4_qa: "Eine visuelle Programmiersprache", t4_qb: "Ein Texteditor", t4_qc: "Ein Zeichenprogramm", t4_qd: "Ein Tabellenkalkulationsprogramm",
    t4_w1: "In", t4_w2: "Scratch", t4_w3: "programmieren", t4_w4: "wir", t4_w5: "mit Bausteinen.", t4_w6: "", t4_w7: "",
    t5_title: "Fehler beheben (Debugging)", t5_text: "Debugging bedeutet, Fehler im Programm zu suchen und zu beheben.", t5_inst: "Markiere das richtige Wort:", t5_h1: "Bug = Fehler, Debug = beheben.", t5_h2: "Fehler finden und reparieren!", t5_q: "Was bedeutet 'Debuggen'?", t5_qa: "Programmfehler suchen und beheben", t5_qb: "Programme installieren", t5_qc: "Dateien löschen", t5_qd: "E-Mails lesen",
    t5_tk1: "Debugging", t5_tk2: "hilft", t5_tk3: "Fehler", t5_tk4: "im Programm", t5_tk5: "zu beheben.", t5_tk6: "",
  },
  en: {
    explorer_title: "Informatics Explorer 9",
    t1_title: "Sequence", t1_text: "In programming, every command is executed in the correct order.", t1_inst: "Match the pairs:", t1_h1: "What comes first?", t1_h2: "Order matters!", t1_q: "What happens if the order is wrong?", t1_qa: "The program doesn't work correctly", t1_qb: "The program becomes faster", t1_qc: "The program deletes data", t1_qd: "The program prints",
    t1_l1: "1st step", t1_r1: "First", t1_l2: "2nd step", t1_r2: "Then", t1_l3: "3rd step", t1_r3: "Last",
    t2_title: "Condition (if statement)", t2_text: "A condition checks if something is true or false and decides what happens.", t2_inst: "Fill in the blank:", t2_h1: "If... then...", t2_h2: "True or False?", t2_q: "What does an if statement do?", t2_qa: "Checks a condition", t2_qb: "Repeats a command", t2_qc: "Saves a file", t2_qd: "Opens a program",
    t2_sent: "If the condition is ___, the program executes the command.", t2_qa2: "true", t2_qb2: "false", t2_qc2: "empty", t2_qd2: "large",
    t3_title: "Loop (Repetition)", t3_text: "A loop repeats commands multiple times without having to write them extra.", t3_inst: "Sort into buckets:", t3_h1: "Once or many times?", t3_h2: "Loop = repetition.", t3_q: "When do you use a loop?", t3_qa: "When you want to repeat something many times", t3_qb: "When saving a file", t3_qc: "When choosing a color", t3_qd: "When printing",
    t3_bl1: "Loop (many times)", t3_bl2: "Once only", t3_i1: "Move 10×", t3_i2: "Print once", t3_i3: "Count 100×", t3_i4: "Open file",
    t4_title: "Scratch Basics", t4_text: "Scratch is a programming language for beginners with colorful blocks.", t4_inst: "Put the words in order:", t4_h1: "Scratch = colorful blocks.", t4_h2: "Easy to start!", t4_q: "What is Scratch?", t4_qa: "A visual programming language", t4_qb: "A text editor", t4_qc: "A drawing program", t4_qd: "A spreadsheet",
    t4_w1: "In", t4_w2: "Scratch", t4_w3: "we", t4_w4: "program", t4_w5: "with blocks.", t4_w6: "", t4_w7: "",
    t5_title: "Debugging", t5_text: "Debugging means finding and fixing errors in a program.", t5_inst: "Highlight the correct word:", t5_h1: "Bug = error, Debug = fix.", t5_h2: "Find and repair errors!", t5_q: "What does 'debugging' mean?", t5_qa: "Finding and fixing program errors", t5_qb: "Installing programs", t5_qc: "Deleting files", t5_qd: "Reading emails",
    t5_tk1: "Debugging", t5_tk2: "helps", t5_tk3: "fix", t5_tk4: "errors", t5_tk5: "in a program.", t5_tk6: "",
  },
  hu: {
    explorer_title: "Informatika Felfedező 9",
    t1_title: "Sorrend (szekvencia)", t1_text: "A programozásban minden utasítás a helyes sorrendben hajtódik végre.", t1_inst: "Párosítsd össze:", t1_h1: "Mi jön először?", t1_h2: "A sorrend számít!", t1_q: "Mi történik, ha a sorrend rossz?", t1_qa: "A program nem működik helyesen", t1_qb: "A program gyorsabb lesz", t1_qc: "A program adatot töröl", t1_qd: "A program nyomtat",
    t1_l1: "1. lépés", t1_r1: "Először", t1_l2: "2. lépés", t1_r2: "Aztán", t1_l3: "3. lépés", t1_r3: "Végül",
    t2_title: "Feltétel (if-utasítás)", t2_text: "A feltétel megvizsgálja, hogy valami igaz vagy hamis-e, és ennek alapján dönt.", t2_inst: "Töltsd ki a hiányt:", t2_h1: "Ha... akkor...", t2_h2: "Igaz vagy hamis?", t2_q: "Mit csinál az if-utasítás?", t2_qa: "Megvizsgál egy feltételt", t2_qb: "Megismétel egy parancsot", t2_qc: "Ment egy fájlt", t2_qd: "Megnyit egy programot",
    t2_sent: "Ha a feltétel ___, a program végrehajtja az utasítást.", t2_qa2: "igaz", t2_qb2: "hamis", t2_qc2: "üres", t2_qd2: "nagy",
    t3_title: "Ciklus (ismétlés)", t3_text: "A ciklus parancsokat ismétel meg többször, anélkül hogy külön kellene leírni.", t3_inst: "Válogasd szét:", t3_h1: "Egyszer vagy sokszor?", t3_h2: "Ciklus = ismétlés.", t3_q: "Mikor használunk ciklust?", t3_qa: "Ha valamit sokszor meg akarunk ismételni", t3_qb: "Ha fájlt mentünk", t3_qc: "Ha színt választunk", t3_qd: "Ha nyomtatunk",
    t3_bl1: "Ciklus (sokszor)", t3_bl2: "Egyszer", t3_i1: "10× mozgás", t3_i2: "Egyszer nyomtat", t3_i3: "100× számol", t3_i4: "Fájl megnyitás",
    t4_title: "Scratch alapok", t4_text: "A Scratch kezdőknek való programozási nyelv, színes blokkokkal.", t4_inst: "Tedd sorrendbe a szavakat:", t4_h1: "Scratch = színes blokkok.", t4_h2: "Könnyű elkezdeni!", t4_q: "Mi a Scratch?", t4_qa: "Vizuális programozási nyelv", t4_qb: "Szövegszerkesztő", t4_qc: "Rajzolóprogram", t4_qd: "Táblázatkezelő",
    t4_w1: "A Scratch-ben", t4_w2: "blokkokkal", t4_w3: "programozunk.", t4_w4: "", t4_w5: "", t4_w6: "", t4_w7: "",
    t5_title: "Hibakeresés (debugging)", t5_text: "A debugging a programban lévő hibák megkeresését és kijavítását jelenti.", t5_inst: "Jelöld meg a helyes szót:", t5_h1: "Bug = hiba, Debug = javítás.", t5_h2: "Hibát keresni és javítani!", t5_q: "Mit jelent a 'debuggolás'?", t5_qa: "Programhibák keresése és javítása", t5_qb: "Programok telepítése", t5_qc: "Fájlok törlése", t5_qd: "E-mailek olvasása",
    t5_tk1: "A debugging", t5_tk2: "segít", t5_tk3: "megtalálni", t5_tk4: "és javítani", t5_tk5: "a hibákat.", t5_tk6: "",
  },
  ro: {
    explorer_title: "Explorator Informatică 9",
    t1_title: "Secvență", t1_text: "În programare, fiecare comandă se execută în ordinea corectă.", t1_inst: "Potrivește perechile:", t1_h1: "Ce vine primul?", t1_h2: "Ordinea contează!", t1_q: "Ce se întâmplă dacă ordinea este greșită?", t1_qa: "Programul nu funcționează corect", t1_qb: "Programul devine mai rapid", t1_qc: "Programul șterge date", t1_qd: "Programul tipărește",
    t1_l1: "Pasul 1", t1_r1: "Primul", t1_l2: "Pasul 2", t1_r2: "Apoi", t1_l3: "Pasul 3", t1_r3: "Ultimul",
    t2_title: "Condiție (instrucțiunea if)", t2_text: "O condiție verifică dacă ceva este adevărat sau fals și decide ce se întâmplă.", t2_inst: "Completează spațiul liber:", t2_h1: "Dacă... atunci...", t2_h2: "Adevărat sau Fals?", t2_q: "Ce face o instrucțiune if?", t2_qa: "Verifică o condiție", t2_qb: "Repetă o comandă", t2_qc: "Salvează un fișier", t2_qd: "Deschide un program",
    t2_sent: "Dacă condiția este ___, programul execută comanda.", t2_qa2: "adevărată", t2_qb2: "falsă", t2_qc2: "goală", t2_qd2: "mare",
    t3_title: "Buclă (repetiție)", t3_text: "O buclă repetă comenzi de mai multe ori fără a le scrie din nou.", t3_inst: "Sortează în găleți:", t3_h1: "O dată sau de multe ori?", t3_h2: "Buclă = repetiție.", t3_q: "Când folosim o buclă?", t3_qa: "Când vrem să repetăm ceva de mai multe ori", t3_qb: "Când salvăm un fișier", t3_qc: "Când alegem o culoare", t3_qd: "Când tipărim",
    t3_bl1: "Buclă (de multe ori)", t3_bl2: "O dată", t3_i1: "Mișcă 10×", t3_i2: "Tipărire o dată", t3_i3: "Numără 100×", t3_i4: "Deschide fișier",
    t4_title: "Scratch - noțiuni de bază", t4_text: "Scratch este un limbaj de programare pentru începători cu blocuri colorate.", t4_inst: "Pune cuvintele în ordine:", t4_h1: "Scratch = blocuri colorate.", t4_h2: "Ușor de început!", t4_q: "Ce este Scratch?", t4_qa: "Un limbaj de programare vizual", t4_qb: "Un editor de text", t4_qc: "Un program de desen", t4_qd: "Un tabel de calcul",
    t4_w1: "În", t4_w2: "Scratch", t4_w3: "programăm", t4_w4: "cu blocuri.", t4_w5: "", t4_w6: "", t4_w7: "",
    t5_title: "Depanare (debugging)", t5_text: "Depanarea înseamnă găsirea și corectarea erorilor dintr-un program.", t5_inst: "Evidențiază cuvântul corect:", t5_h1: "Bug = eroare, Debug = corectare.", t5_h2: "Găsește și repară erorile!", t5_q: "Ce înseamnă 'depanare'?", t5_qa: "Găsirea și corectarea erorilor", t5_qb: "Instalarea programelor", t5_qc: "Ștergerea fișierelor", t5_qd: "Citirea emailurilor",
    t5_tk1: "Depanarea", t5_tk2: "ajută", t5_tk3: "la corectarea", t5_tk4: "erorilor", t5_tk5: "din program.", t5_tk6: "",
  }
};

export const INFO_K5_I9_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "simple-icon", icon: "🔢", color: "#3F51B5" },
    interactive: { type: "match-pairs", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", pairs: [{left:"t1_l1",right:"t1_r1"},{left:"t1_l2",right:"t1_r2"},{left:"t1_l3",right:"t1_r3"}] },
    quiz: { question: "t1_q", choices: ["t1_qa","t1_qb","t1_qc","t1_qd"], answer: "t1_qa" }
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "❓", color: "#FF9800" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2","t2_qb2","t2_qc2","t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa","t2_qb","t2_qc","t2_qd"], answer: "t2_qa" }
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "simple-icon", icon: "🔄", color: "#4CAF50" },
    interactive: { type: "drag-to-bucket", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", buckets: [{id:"b1",label:"t3_bl1"},{id:"b2",label:"t3_bl2"}], items: [{text:"t3_i1",bucketId:"b1"},{text:"t3_i2",bucketId:"b2"},{text:"t3_i3",bucketId:"b1"},{text:"t3_i4",bucketId:"b2"}] },
    quiz: { question: "t3_q", choices: ["t3_qa","t3_qb","t3_qc","t3_qd"], answer: "t3_qa" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "🐱", color: "#FF5722" },
    interactive: { type: "word-order", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", words: ["t4_w1","t4_w2","t4_w3"], correctOrder: [0,1,2] },
    quiz: { question: "t4_q", choices: ["t4_qa","t4_qb","t4_qc","t4_qd"], answer: "t4_qa" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "🐛", color: "#795548" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5"], correctIndices: [0] },
    quiz: { question: "t5_q", choices: ["t5_qa","t5_qb","t5_qc","t5_qd"], answer: "t5_qa" }
  }
];
