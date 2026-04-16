// lib/explorerPools/informatikaK7_i3.ts
import type { PoolTopicDef } from "./types";

export const INFO_K7_I3_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Informatik Entdecker K7-3",
    t1_title: "Sortieralgorithmen", t1_text: "Sortieralgorithmen ordnen Daten in eine bestimmte Reihenfolge (Bubble Sort, Quick Sort).", t1_inst: "Ordne die Paare zu:", t1_h1: "Welcher Algorithmus macht was?", t1_h2: "Sortieren = in Reihenfolge bringen!", t1_q: "Was macht ein Sortieralgorithmus?", t1_qa: "Daten in Reihenfolge bringen", t1_qb: "Daten löschen", t1_qc: "Daten kopieren", t1_qd: "Daten drucken",
    t1_l1: "Bubble Sort", t1_r1: "Einfaches Tauschen", t1_l2: "Quick Sort", t1_r2: "Schnelles Teilen", t1_l3: "Merge Sort", t1_r3: "Zusammenführen",
    t2_title: "Lineare Suche", t2_text: "Lineare Suche prüft jeden Eintrag nacheinander, bis der gesuchte Wert gefunden wird.", t2_inst: "Fülle die Lücke aus:", t2_h1: "Element für Element prüfen.", t2_h2: "Langsam aber sicher!", t2_q: "Wie funktioniert die lineare Suche?", t2_qa: "Jeden Eintrag der Reihe nach prüfen", t2_qb: "In der Mitte beginnen", t2_qc: "Zufällig suchen", t2_qd: "Nur gerade Positionen prüfen",
    t2_sent: "Die lineare Suche prüft Elemente ___ nacheinander.", t2_qa2: "eines", t2_qb2: "viele", t2_qc2: "zufällig", t2_qd2: "schnell",
    t3_title: "Binäre Suche", t3_text: "Binäre Suche halbiert bei jedem Schritt den Suchbereich – viel schneller als linear.", t3_inst: "Sortiere in die Eimer:", t3_h1: "Schnell oder langsam?", t3_h2: "Binär > Linear!", t3_q: "Was ist die Voraussetzung für binäre Suche?", t3_qa: "Die Daten müssen sortiert sein", t3_qb: "Die Daten müssen gelöscht werden", t3_qc: "Die Daten müssen kopiert werden", t3_qd: "Die Daten müssen gedruckt werden",
    t3_bl1: "Binäre Suche", t3_bl2: "Lineare Suche", t3_i1: "Sortierte Liste nötig", t3_i2: "Unsortierte Liste möglich", t3_i3: "Sehr schnell (log n)", t3_i4: "Langsamer (n Schritte)",
    t4_title: "Algorithmus-Effizienz", t4_text: "Die Effizienz misst, wie viele Schritte ein Algorithmus benötigt (O-Notation).", t4_inst: "Bringe die Wörter in Ordnung:", t4_h1: "Weniger Schritte = effizienter.", t4_h2: "O(n) = linear, O(log n) = schnell.", t4_q: "Was misst die Effizienz eines Algorithmus?", t4_qa: "Die Anzahl der benötigten Schritte", t4_qb: "Die Dateigröße", t4_qc: "Die Bildschirmhelligkeit", t4_qd: "Den Stromverbrauch",
    t4_w1: "Effizienz", t4_w2: "misst", t4_w3: "die Anzahl", t4_w4: "der Schritte", t4_w5: "eines Algorithmus.", t4_w6: "", t4_w7: "",
    t5_title: "Pseudocode", t5_text: "Pseudocode ist eine informelle Beschreibung eines Algorithmus, unabhängig von einer Programmiersprache.", t5_inst: "Markiere das richtige Wort:", t5_h1: "Pseudocode = vereinfachter Code.", t5_h2: "Planen vor dem Coden!", t5_q: "Wofür verwendet man Pseudocode?", t5_qa: "Algorithmen informell beschreiben", t5_qb: "Webseiten erstellen", t5_qc: "Dateien löschen", t5_qd: "Daten sichern",
    t5_tk1: "Pseudocode", t5_tk2: "beschreibt", t5_tk3: "Algorithmen", t5_tk4: "in einfacher Sprache.", t5_tk5: "", t5_tk6: "",
  },
  en: {
    explorer_title: "Informatics Explorer K7-3",
    t1_title: "Sorting Algorithms", t1_text: "Sorting algorithms order data in a specific sequence (Bubble Sort, Quick Sort).", t1_inst: "Match the pairs:", t1_h1: "Which algorithm does what?", t1_h2: "Sorting = putting in order!", t1_q: "What does a sorting algorithm do?", t1_qa: "Puts data in order", t1_qb: "Deletes data", t1_qc: "Copies data", t1_qd: "Prints data",
    t1_l1: "Bubble Sort", t1_r1: "Simple swapping", t1_l2: "Quick Sort", t1_r2: "Fast partitioning", t1_l3: "Merge Sort", t1_r3: "Merging halves",
    t2_title: "Linear Search", t2_text: "Linear search checks every entry one by one until the searched value is found.", t2_inst: "Fill in the blank:", t2_h1: "Check element by element.", t2_h2: "Slow but reliable!", t2_q: "How does linear search work?", t2_qa: "Check each entry one after another", t2_qb: "Start in the middle", t2_qc: "Search randomly", t2_qd: "Only check even positions",
    t2_sent: "Linear search checks elements ___ one by one.", t2_qa2: "each", t2_qb2: "many", t2_qc2: "randomly", t2_qd2: "quickly",
    t3_title: "Binary Search", t3_text: "Binary search halves the search range at each step – much faster than linear.", t3_inst: "Sort into buckets:", t3_h1: "Fast or slow?", t3_h2: "Binary > Linear!", t3_q: "What is the prerequisite for binary search?", t3_qa: "The data must be sorted", t3_qb: "The data must be deleted", t3_qc: "The data must be copied", t3_qd: "The data must be printed",
    t3_bl1: "Binary search", t3_bl2: "Linear search", t3_i1: "Sorted list required", t3_i2: "Unsorted list possible", t3_i3: "Very fast (log n)", t3_i4: "Slower (n steps)",
    t4_title: "Algorithm Efficiency", t4_text: "Efficiency measures how many steps an algorithm needs (Big O notation).", t4_inst: "Put the words in order:", t4_h1: "Fewer steps = more efficient.", t4_h2: "O(n) = linear, O(log n) = fast.", t4_q: "What does efficiency of an algorithm measure?", t4_qa: "The number of steps required", t4_qb: "The file size", t4_qc: "Screen brightness", t4_qd: "Power consumption",
    t4_w1: "Efficiency", t4_w2: "measures", t4_w3: "the number", t4_w4: "of steps", t4_w5: "of an algorithm.", t4_w6: "", t4_w7: "",
    t5_title: "Pseudocode", t5_text: "Pseudocode is an informal description of an algorithm, not tied to any programming language.", t5_inst: "Highlight the correct word:", t5_h1: "Pseudocode = simplified code.", t5_h2: "Plan before coding!", t5_q: "What is pseudocode used for?", t5_qa: "Informally describing algorithms", t5_qb: "Creating websites", t5_qc: "Deleting files", t5_qd: "Backing up data",
    t5_tk1: "Pseudocode", t5_tk2: "describes", t5_tk3: "algorithms", t5_tk4: "in simple language.", t5_tk5: "", t5_tk6: "",
  },
  hu: {
    explorer_title: "Informatika Felfedező K7-3",
    t1_title: "Rendező algoritmusok", t1_text: "A rendező algoritmusok adatokat rendeznek meghatározott sorrendbe (Bubble Sort, Quick Sort).", t1_inst: "Párosítsd össze:", t1_h1: "Melyik algoritmus mit csinál?", t1_h2: "Rendezés = sorrendbe rakás!", t1_q: "Mit csinál egy rendező algoritmus?", t1_qa: "Sorrendbe rendezi az adatokat", t1_qb: "Adatokat töröl", t1_qc: "Adatokat másol", t1_qd: "Adatokat nyomtat",
    t1_l1: "Bubble Sort", t1_r1: "Egyszerű csere", t1_l2: "Quick Sort", t1_r2: "Gyors felosztás", t1_l3: "Merge Sort", t1_r3: "Összeolvasztás",
    t2_title: "Lineáris keresés", t2_text: "A lineáris keresés minden elemet egymás után ellenőriz, amíg meg nem találja.", t2_inst: "Töltsd ki a hiányt:", t2_h1: "Elemet elemenként ellenőriz.", t2_h2: "Lassú, de megbízható!", t2_q: "Hogyan működik a lineáris keresés?", t2_qa: "Minden elemet egymás után ellenőriz", t2_qb: "A közepétől indul", t2_qc: "Véletlenszerűen keres", t2_qd: "Csak páros pozíciókat ellenőriz",
    t2_sent: "A lineáris keresés ___ egymás után ellenőrzi az elemeket.", t2_qa2: "egyenként", t2_qb2: "sokat", t2_qc2: "véletlenszerűen", t2_qd2: "gyorsan",
    t3_title: "Bináris keresés", t3_text: "A bináris keresés minden lépésben felezi a keresési tartományt – sokkal gyorsabb a lineárisnál.", t3_inst: "Válogasd szét:", t3_h1: "Gyors vagy lassú?", t3_h2: "Bináris > Lineáris!", t3_q: "Mi a bináris keresés előfeltétele?", t3_qa: "Az adatoknak rendezettnek kell lenniük", t3_qb: "Az adatokat törölni kell", t3_qc: "Az adatokat másolni kell", t3_qd: "Az adatokat nyomtatni kell",
    t3_bl1: "Bináris keresés", t3_bl2: "Lineáris keresés", t3_i1: "Rendezett lista kell", t3_i2: "Rendezetlen lista is jó", t3_i3: "Nagyon gyors (log n)", t3_i4: "Lassabb (n lépés)",
    t4_title: "Algoritmus hatékonysága", t4_text: "A hatékonyság méri, hogy hány lépést igényel egy algoritmus (O-jelölés).", t4_inst: "Tedd sorrendbe a szavakat:", t4_h1: "Kevesebb lépés = hatékonyabb.", t4_h2: "O(n) = lineáris, O(log n) = gyors.", t4_q: "Mit mér az algoritmus hatékonysága?", t4_qa: "A szükséges lépések számát", t4_qb: "A fájl méretét", t4_qc: "A képernyő fényerejét", t4_qd: "Az energiafogyasztást",
    t4_w1: "A hatékonyság", t4_w2: "az algoritmus", t4_w3: "lépéseinek", t4_w4: "számát méri.", t4_w5: "", t4_w6: "", t4_w7: "",
    t5_title: "Pszeudokód", t5_text: "A pszeudokód egy algoritmus informális leírása, nem kötődik programozási nyelvhez.", t5_inst: "Jelöld meg a helyes szót:", t5_h1: "Pszeudokód = egyszerűsített kód.", t5_h2: "Tervezz, mielőtt kódolsz!", t5_q: "Mire való a pszeudokód?", t5_qa: "Algoritmusok informális leírására", t5_qb: "Weboldalak létrehozására", t5_qc: "Fájlok törlésére", t5_qd: "Adatok mentésére",
    t5_tk1: "A pszeudokód", t5_tk2: "egyszerű", t5_tk3: "nyelven írja le", t5_tk4: "az algoritmusokat.", t5_tk5: "", t5_tk6: "",
  },
  ro: {
    explorer_title: "Explorator Informatică K7-3",
    t1_title: "Algoritmi de sortare", t1_text: "Algoritmii de sortare ordonează datele într-o secvență specifică (Bubble Sort, Quick Sort).", t1_inst: "Potrivește perechile:", t1_h1: "Ce algoritm face ce?", t1_h2: "Sortare = punere în ordine!", t1_q: "Ce face un algoritm de sortare?", t1_qa: "Pune datele în ordine", t1_qb: "Șterge datele", t1_qc: "Copiază datele", t1_qd: "Tipărește datele",
    t1_l1: "Bubble Sort", t1_r1: "Schimb simplu", t1_l2: "Quick Sort", t1_r2: "Partiționare rapidă", t1_l3: "Merge Sort", t1_r3: "Interclasare",
    t2_title: "Căutare liniară", t2_text: "Căutarea liniară verifică fiecare element unul câte unul până găsește valoarea căutată.", t2_inst: "Completează spațiul liber:", t2_h1: "Verifică element cu element.", t2_h2: "Lent dar sigur!", t2_q: "Cum funcționează căutarea liniară?", t2_qa: "Verifică fiecare element unul după altul", t2_qb: "Începe de la mijloc", t2_qc: "Caută aleatoriu", t2_qd: "Verifică doar pozițiile pare",
    t2_sent: "Căutarea liniară verifică elementele ___ unul câte unul.", t2_qa2: "fiecare", t2_qb2: "multe", t2_qc2: "aleatoriu", t2_qd2: "rapid",
    t3_title: "Căutare binară", t3_text: "Căutarea binară reduce la jumătate spațiul de căutare la fiecare pas – mult mai rapidă decât cea liniară.", t3_inst: "Sortează în găleți:", t3_h1: "Rapid sau lent?", t3_h2: "Binar > Linear!", t3_q: "Ce condiție trebuie îndeplinită pentru căutarea binară?", t3_qa: "Datele trebuie sortate", t3_qb: "Datele trebuie șterse", t3_qc: "Datele trebuie copiate", t3_qd: "Datele trebuie tipărite",
    t3_bl1: "Căutare binară", t3_bl2: "Căutare liniară", t3_i1: "Listă sortată necesară", t3_i2: "Listă nesortată posibilă", t3_i3: "Foarte rapidă (log n)", t3_i4: "Mai lentă (n pași)",
    t4_title: "Eficiența algoritmilor", t4_text: "Eficiența măsoară câți pași necesită un algoritm (notația O).", t4_inst: "Pune cuvintele în ordine:", t4_h1: "Mai puțini pași = mai eficient.", t4_h2: "O(n) = liniar, O(log n) = rapid.", t4_q: "Ce măsoară eficiența unui algoritm?", t4_qa: "Numărul de pași necesari", t4_qb: "Dimensiunea fișierului", t4_qc: "Luminozitatea ecranului", t4_qd: "Consumul de energie",
    t4_w1: "Eficiența", t4_w2: "măsoară", t4_w3: "numărul de pași", t4_w4: "ai unui algoritm.", t4_w5: "", t4_w6: "", t4_w7: "",
    t5_title: "Pseudocod", t5_text: "Pseudocodul este o descriere informală a unui algoritm, nefiind legat de un limbaj de programare.", t5_inst: "Evidențiază cuvântul corect:", t5_h1: "Pseudocod = cod simplificat.", t5_h2: "Planifică înainte de a codifica!", t5_q: "Pentru ce se folosește pseudocodul?", t5_qa: "Descrierea informală a algoritmilor", t5_qb: "Crearea site-urilor web", t5_qc: "Ștergerea fișierelor", t5_qd: "Salvarea datelor",
    t5_tk1: "Pseudocodul", t5_tk2: "descrie", t5_tk3: "algoritmii", t5_tk4: "în limbaj simplu.", t5_tk5: "", t5_tk6: "",
  }
};

export const INFO_K7_I3_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "simple-icon", icon: "🔃", color: "#3F51B5" },
    interactive: { type: "match-pairs", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", pairs: [{left:"t1_l1",right:"t1_r1"},{left:"t1_l2",right:"t1_r2"},{left:"t1_l3",right:"t1_r3"}] },
    quiz: { question: "t1_q", choices: ["t1_qa","t1_qb","t1_qc","t1_qd"], answer: "t1_qa" }
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "🔍", color: "#FF9800" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2","t2_qb2","t2_qc2","t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa","t2_qb","t2_qc","t2_qd"], answer: "t2_qa" }
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "simple-icon", icon: "⚡", color: "#4CAF50" },
    interactive: { type: "drag-to-bucket", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", buckets: [{id:"b1",label:"t3_bl1"},{id:"b2",label:"t3_bl2"}], items: [{text:"t3_i1",bucketId:"b1"},{text:"t3_i2",bucketId:"b2"},{text:"t3_i3",bucketId:"b1"},{text:"t3_i4",bucketId:"b2"}] },
    quiz: { question: "t3_q", choices: ["t3_qa","t3_qb","t3_qc","t3_qd"], answer: "t3_qa" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "📏", color: "#9C27B0" },
    interactive: { type: "word-order", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", words: ["t4_w1","t4_w2","t4_w3","t4_w4"], correctOrder: [0,1,2,3] },
    quiz: { question: "t4_q", choices: ["t4_qa","t4_qb","t4_qc","t4_qd"], answer: "t4_qa" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "📝", color: "#607D8B" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4"], correctIndices: [0] },
    quiz: { question: "t5_q", choices: ["t5_qa","t5_qb","t5_qc","t5_qd"], answer: "t5_qa" }
  }
];
