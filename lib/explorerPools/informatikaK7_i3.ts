// @ts-nocheck
// lib/explorerPools/informatikaK7_i3.ts
import type { PoolTopicDef } from "./types";

export const INFO_K7_I3_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Informatik Entdecker K7-3",
    t1_title: "Sortieralgorithmen", t1_text: "Sortieralgorithmen ordnen Daten in eine bestimmte Reihenfolge (Bubble Sort, Quick Sort).", t1_inst: "Ordne die Paare zu:", t1_h1: "Welcher Algorithmus macht was?", t1_h2: "Sortieren = in Reihenfolge bringen!", t1_q: "Was macht ein Sortieralgorithmus?", t1_qa: "Daten in Reihenfolge bringen", t1_qb: "Daten löschen", t1_qc: "Daten kopieren", t1_qd: "Daten drucken",
    t1_l1: "Bubble Sort", t1_r1: "Einfaches Tauschen", t1_l2: "Quick Sort", t1_r2: "Schnelles Teilen", t1_l3: "Merge Sort", t1_r3: "Zusammenführen", t1_l4: "Insertion Sort", t1_r4: "Einfügen",
    t2_title: "Lineare Suche", t2_text: "Lineare Suche prüft jeden Eintrag nacheinander, bis der gesuchte Wert gefunden wird.", t2_inst: "Fülle die Lücke aus:", t2_h1: "Element für Element prüfen.", t2_h2: "Langsam aber sicher!", t2_q: "Wie funktioniert die lineare Suche?", t2_qa: "Jeden Eintrag der Reihe nach prüfen", t2_qb: "In der Mitte beginnen", t2_qc: "Zufällig suchen", t2_qd: "Nur gerade Positionen prüfen",
    t2_sent: "Die lineare Suche prüft Elemente ___ nacheinander.", t2_c1: "einzeln", t2_c2: "viele", t2_c3: "zufällig", t2_c4: "schnell",
    t3_title: "Binäre Suche", t3_text: "Binäre Suche halbiert bei jedem Schritt den Suchbereich – viel schneller als linear.", t3_inst: "Sortiere in die Eimer:", t3_h1: "Schnell oder langsam?", t3_h2: "Binär > Linear!", t3_q: "Was ist die Voraussetzung für binäre Suche?", t3_qa: "Die Daten müssen sortiert sein", t3_qb: "Die Daten müssen gelöscht werden", t3_qc: "Die Daten müssen kopiert werden", t3_qd: "Die Daten müssen gedruckt werden",
    t3_bl1: "Binäre Suche", t3_bl2: "Lineare Suche", t3_i1: "Sortierte Liste nötig", t3_i2: "Unsortierte Liste möglich", t3_i3: "Sehr schnell (log n)", t3_i4: "Langsamer (n Schritte)",
    t4_title: "Algorithmus-Effizienz", t4_text: "Die Effizienz misst, wie viele Schritte ein Algorithmus benötigt (O-Notation).", t4_inst: "Bringe die Wörter in Ordnung:", t4_h1: "Weniger Schritte = effizienter.", t4_h2: "O(n) = linear, O(log n) = schnell.", t4_q: "Was misst die Effizienz eines Algorithmus?", t4_qa: "Die Anzahl der benötigten Schritte", t4_qb: "Die Dateigröße", t4_qc: "Die Bildschirmhelligkeit", t4_qd: "Den Stromverbrauch",
    t4_w1: "Effizienz", t4_w2: "misst", t4_w3: "die Anzahl", t4_w4: "der Schritte",
    t5_title: "Pseudocode", t5_text: "Pseudocode ist eine informelle Beschreibung eines Algorithmus, unabhängig von einer Programmiersprache.", t5_inst: "Markiere das richtige Wort:", t5_h1: "Pseudocode = vereinfachter Code.", t5_h2: "Planen vor dem Coden!", t5_q: "Wofür verwendet man Pseudocode?", t5_qa: "Algorithmen informell beschreiben", t5_qb: "Webseiten erstellen", t5_qc: "Dateien löschen", t5_qd: "Daten sichern",
    t5_tk1: "Pseudocode", t5_tk2: "beschreibt", t5_tk3: "Algorithmen", t5_tk4: "in einfacher Sprache.",
    t6_title: "Flussdiagramm", t6_text: "Ein Flussdiagramm stellt einen Algorithmus grafisch mit Symbolen wie Rechtecken und Rauten dar.", t6_inst: "Ordne die Symbole zu:", t6_h1: "Raute = Entscheidung.", t6_h2: "Rechteck = Aktion.", t6_q: "Was stellt eine Raute im Flussdiagramm dar?", t6_qa: "Eine Entscheidung", t6_qb: "Den Start", t6_qc: "Das Ende", t6_qd: "Eine Ausgabe",
    t6_l1: "Oval", t6_r1: "Start/Ende", t6_l2: "Rechteck", t6_r2: "Aktion/Prozess", t6_l3: "Raute", t6_r3: "Entscheidung", t6_l4: "Pfeil", t6_r4: "Ablaufrichtung",
    t7_title: "Struktogramm", t7_text: "Ein Struktogramm (Nassi-Shneiderman) zeigt den Ablauf eines Programms in ineinander verschachtelten Blöcken.", t7_inst: "Fülle die Lücke aus:", t7_h1: "Blöcke statt Pfeile.", t7_h2: "Kompakte Darstellung.", t7_q: "Wie nennt man ein Struktogramm noch?", t7_qa: "Nassi-Shneiderman-Diagramm", t7_qb: "Flussdiagramm", t7_qc: "UML-Diagramm", t7_qd: "Klassendiagramm",
    t7_sent: "Ein Struktogramm verwendet ___ statt Pfeilen.", t7_c1: "Blöcke", t7_c2: "Kreise", t7_c3: "Linien", t7_c4: "Punkte",
    t8_title: "Sequenz", t8_text: "Eine Sequenz ist die einfachste Struktur: Befehle werden nacheinander von oben nach unten ausgeführt.", t8_inst: "Bringe die Schritte in Ordnung:", t8_h1: "Schritt 1, dann 2, dann 3.", t8_h2: "Immer der Reihe nach.", t8_q: "Was ist eine Sequenz in einem Algorithmus?", t8_qa: "Befehle nacheinander ausführen", t8_qb: "Befehle wiederholen", t8_qc: "Befehle überspringen", t8_qd: "Befehle löschen",
    t8_w1: "Befehle", t8_w2: "werden", t8_w3: "nacheinander", t8_w4: "ausgeführt",
    t9_title: "Verzweigung", t9_text: "Eine Verzweigung (if-else) lässt den Algorithmus Entscheidungen treffen und verschiedene Wege gehen.", t9_inst: "Sortiere in die Eimer:", t9_h1: "Wahr oder Falsch?", t9_h2: "Entscheidungen lenken den Ablauf.", t9_q: "Was ermöglicht eine Verzweigung?", t9_qa: "Entscheidungen treffen", t9_qb: "Daten speichern", t9_qc: "Schleifen beenden", t9_qd: "Variablen löschen",
    t9_bl1: "Bedingung Wahr", t9_bl2: "Bedingung Falsch", t9_i1: "Führe IF-Block aus", t9_i2: "Führe ELSE-Block aus", t9_i3: "Gehe Weg A", t9_i4: "Gehe Weg B",
    t10_title: "Wiederholung", t10_text: "Eine Wiederholung (Schleife) führt einen Teil des Algorithmus mehrmals aus, bis eine Bedingung erfüllt ist.", t10_inst: "Markiere das richtige Wort:", t10_h1: "Schleifen wiederholen Code.", t10_h2: "Spart Schreibarbeit.", t10_q: "Was macht eine Schleife?", t10_qa: "Wiederholt Befehle", t10_qb: "Beendet das Programm", t10_qc: "Löscht Daten", t10_qd: "Druckt Text",
    t10_tk1: "Eine Schleife", t10_tk2: "wiederholt", t10_tk3: "Befehle", t10_tk4: "mehrmals.",
    t11_title: "Endlosschleife", t11_text: "Eine Endlosschleife bricht nie ab, weil ihre Abbruchbedingung nie erreicht wird. Meistens ein Fehler!", t11_inst: "Fülle die Lücke aus:", t11_h1: "Sie hört nie auf.", t11_h2: "Das Programm hängt sich auf.", t11_q: "Warum entsteht eine Endlosschleife?", t11_qa: "Abbruchbedingung wird nie erreicht", t11_qb: "Der Computer ist zu schnell", t11_qc: "Zu wenig Speicherplatz", t11_qd: "Falsche Programmiersprache",
    t11_sent: "Eine Endlosschleife bricht ___ ab.", t11_c1: "nie", t11_c2: "sofort", t11_c3: "manchmal", t11_c4: "schnell",
    t12_title: "Zuweisung", t12_text: "Bei einer Zuweisung bekommt eine Variable einen neuen Wert, z.B. x = 5.", t12_inst: "Ordne die Paare zu:", t12_h1: "Links die Variable, rechts der Wert.", t12_h2: "Das Gleichheitszeichen weist zu.", t12_q: "Was macht eine Zuweisung?", t12_qa: "Gibt einer Variablen einen Wert", t12_qb: "Vergleicht zwei Werte", t12_qc: "Löscht eine Variable", t12_qd: "Startet eine Schleife",
    t12_l1: "x = 5", t12_r1: "Zuweisung", t12_l2: "x == 5", t12_r2: "Vergleich", t12_l3: "x + 5", t12_r3: "Berechnung", t12_l4: "print(x)", t12_r4: "Ausgabe",
    t13_title: "Eingabe/Ausgabe", t13_text: "Algorithmen verarbeiten Eingaben (Input) und liefern Ergebnisse (Output) nach dem EVA-Prinzip.", t13_inst: "Bringe die Wörter in Ordnung:", t13_h1: "Eingabe, Verarbeitung, Ausgabe.", t13_h2: "Das EVA-Prinzip.", t13_q: "Wofür steht EVA?", t13_qa: "Eingabe, Verarbeitung, Ausgabe", t13_qb: "Einfach, Viel, Alles", t13_qc: "Ende, Vor, Anfang", t13_qd: "Erste Variable Ausgeben",
    t13_w1: "Eingabe", t13_w2: "Verarbeitung", t13_w3: "Ausgabe", t13_w4: "(EVA)",
    t14_title: "Fehler (Bug)", t14_text: "Ein Bug ist ein Fehler im Algorithmus. Debugging ist der Prozess, diese Fehler zu finden und zu beheben.", t14_inst: "Sortiere in die Eimer:", t14_h1: "Fehler oder Lösung?", t14_h2: "Bug = schlecht, Fix = gut.", t14_q: "Was ist Debugging?", t14_qa: "Fehler finden und beheben", t14_qb: "Neue Fehler einbauen", t14_qc: "Das Programm löschen", t14_qd: "Den Computer neu starten",
    t14_bl1: "Problem", t14_bl2: "Lösung", t14_i1: "Bug", t14_i2: "Debugging", t14_i3: "Absturz", t14_i4: "Bugfix",
    t15_title: "Optimierung", t15_text: "Optimierung macht einen Algorithmus schneller oder speichersparender, ohne das Ergebnis zu ändern.", t15_inst: "Markiere das richtige Wort:", t15_h1: "Schneller und besser.", t15_h2: "Gleiches Ergebnis, weniger Aufwand.", t15_q: "Was ist das Ziel der Optimierung?", t15_qa: "Algorithmus schneller machen", t15_qb: "Algorithmus löschen", t15_qc: "Ergebnis verfälschen", t15_qd: "Mehr Fehler einbauen",
    t15_tk1: "Optimierung", t15_tk2: "macht", t15_tk3: "Algorithmen", t15_tk4: "schneller."
  },
  en: {
    explorer_title: "Informatics Explorer K7-3",
    t1_title: "Sorting Algorithms", t1_text: "Sorting algorithms order data in a specific sequence (Bubble Sort, Quick Sort).", t1_inst: "Match the pairs:", t1_h1: "Which algorithm does what?", t1_h2: "Sorting = putting in order!", t1_q: "What does a sorting algorithm do?", t1_qa: "Puts data in order", t1_qb: "Deletes data", t1_qc: "Copies data", t1_qd: "Prints data",
    t1_l1: "Bubble Sort", t1_r1: "Simple swapping", t1_l2: "Quick Sort", t1_r2: "Fast partitioning", t1_l3: "Merge Sort", t1_r3: "Merging halves", t1_l4: "Insertion Sort", t1_r4: "Inserting",
    t2_title: "Linear Search", t2_text: "Linear search checks every entry one by one until the searched value is found.", t2_inst: "Fill in the blank:", t2_h1: "Check element by element.", t2_h2: "Slow but reliable!", t2_q: "How does linear search work?", t2_qa: "Check each entry one after another", t2_qb: "Start in the middle", t2_qc: "Search randomly", t2_qd: "Only check even positions",
    t2_sent: "Linear search checks elements ___ one by one.", t2_c1: "each", t2_c2: "many", t2_c3: "randomly", t2_c4: "quickly",
    t3_title: "Binary Search", t3_text: "Binary search halves the search range at each step – much faster than linear.", t3_inst: "Sort into buckets:", t3_h1: "Fast or slow?", t3_h2: "Binary > Linear!", t3_q: "What is the prerequisite for binary search?", t3_qa: "The data must be sorted", t3_qb: "The data must be deleted", t3_qc: "The data must be copied", t3_qd: "The data must be printed",
    t3_bl1: "Binary search", t3_bl2: "Linear search", t3_i1: "Sorted list required", t3_i2: "Unsorted list possible", t3_i3: "Very fast (log n)", t3_i4: "Slower (n steps)",
    t4_title: "Algorithm Efficiency", t4_text: "Efficiency measures how many steps an algorithm needs (Big O notation).", t4_inst: "Put the words in order:", t4_h1: "Fewer steps = more efficient.", t4_h2: "O(n) = linear, O(log n) = fast.", t4_q: "What does efficiency of an algorithm measure?", t4_qa: "The number of steps required", t4_qb: "The file size", t4_qc: "Screen brightness", t4_qd: "Power consumption",
    t4_w1: "Efficiency", t4_w2: "measures", t4_w3: "the number", t4_w4: "of steps",
    t5_title: "Pseudocode", t5_text: "Pseudocode is an informal description of an algorithm, not tied to any programming language.", t5_inst: "Highlight the correct word:", t5_h1: "Pseudocode = simplified code.", t5_h2: "Plan before coding!", t5_q: "What is pseudocode used for?", t5_qa: "Informally describing algorithms", t5_qb: "Creating websites", t5_qc: "Deleting files", t5_qd: "Backing up data",
    t5_tk1: "Pseudocode", t5_tk2: "describes", t5_tk3: "algorithms", t5_tk4: "simply.",
    t6_title: "Flowchart", t6_text: "A flowchart represents an algorithm graphically using symbols like rectangles and diamonds.", t6_inst: "Match the symbols:", t6_h1: "Diamond = decision.", t6_h2: "Rectangle = action.", t6_q: "What does a diamond represent in a flowchart?", t6_qa: "A decision", t6_qb: "The start", t6_qc: "The end", t6_qd: "An output",
    t6_l1: "Oval", t6_r1: "Start/End", t6_l2: "Rectangle", t6_r2: "Action/Process", t6_l3: "Diamond", t6_r3: "Decision", t6_l4: "Arrow", t6_r4: "Flow direction",
    t7_title: "Structogram", t7_text: "A structogram (Nassi-Shneiderman) shows the flow of a program in nested blocks.", t7_inst: "Fill in the blank:", t7_h1: "Blocks instead of arrows.", t7_h2: "Compact representation.", t7_q: "What is another name for a structogram?", t7_qa: "Nassi-Shneiderman diagram", t7_qb: "Flowchart", t7_qc: "UML diagram", t7_qd: "Class diagram",
    t7_sent: "A structogram uses ___ instead of arrows.", t7_c1: "blocks", t7_c2: "circles", t7_c3: "lines", t7_c4: "dots",
    t8_title: "Sequence", t8_text: "A sequence is the simplest structure: commands are executed one after another from top to bottom.", t8_inst: "Put the steps in order:", t8_h1: "Step 1, then 2, then 3.", t8_h2: "Always in order.", t8_q: "What is a sequence in an algorithm?", t8_qa: "Executing commands one after another", t8_qb: "Repeating commands", t8_qc: "Skipping commands", t8_qd: "Deleting commands",
    t8_w1: "Commands", t8_w2: "are", t8_w3: "executed", t8_w4: "sequentially",
    t9_title: "Selection", t9_text: "A selection (if-else) lets the algorithm make decisions and take different paths.", t9_inst: "Sort into buckets:", t9_h1: "True or False?", t9_h2: "Decisions guide the flow.", t9_q: "What does a selection enable?", t9_qa: "Making decisions", t9_qb: "Saving data", t9_qc: "Ending loops", t9_qd: "Deleting variables",
    t9_bl1: "Condition True", t9_bl2: "Condition False", t9_i1: "Execute IF block", t9_i2: "Execute ELSE block", t9_i3: "Take Path A", t9_i4: "Take Path B",
    t10_title: "Iteration", t10_text: "An iteration (loop) executes a part of the algorithm multiple times until a condition is met.", t10_inst: "Highlight the correct word:", t10_h1: "Loops repeat code.", t10_h2: "Saves typing.", t10_q: "What does a loop do?", t10_qa: "Repeats commands", t10_qb: "Ends the program", t10_qc: "Deletes data", t10_qd: "Prints text",
    t10_tk1: "A loop", t10_tk2: "repeats", t10_tk3: "commands", t10_tk4: "multiple times.",
    t11_title: "Infinite Loop", t11_text: "An infinite loop never stops because its exit condition is never reached. Usually a bug!", t11_inst: "Fill in the blank:", t11_h1: "It never ends.", t11_h2: "The program freezes.", t11_q: "Why does an infinite loop occur?", t11_qa: "Exit condition is never reached", t11_qb: "The computer is too fast", t11_qc: "Not enough storage", t11_qd: "Wrong programming language",
    t11_sent: "An infinite loop ___ stops.", t11_c1: "never", t11_c2: "immediately", t11_c3: "sometimes", t11_c4: "quickly",
    t12_title: "Assignment", t12_text: "In an assignment, a variable gets a new value, e.g., x = 5.", t12_inst: "Match the pairs:", t12_h1: "Variable on the left, value on the right.", t12_h2: "The equals sign assigns.", t12_q: "What does an assignment do?", t12_qa: "Gives a variable a value", t12_qb: "Compares two values", t12_qc: "Deletes a variable", t12_qd: "Starts a loop",
    t12_l1: "x = 5", t12_r1: "Assignment", t12_l2: "x == 5", t12_r2: "Comparison", t12_l3: "x + 5", t12_r3: "Calculation", t12_l4: "print(x)", t12_r4: "Output",
    t13_title: "Input/Output", t13_text: "Algorithms process inputs and deliver results (outputs) according to the IPO principle.", t13_inst: "Put the words in order:", t13_h1: "Input, Process, Output.", t13_h2: "The IPO principle.", t13_q: "What does IPO stand for?", t13_qa: "Input, Process, Output", t13_qb: "Inside, Past, Outside", t13_qc: "Integer, Print, Object", t13_qd: "Initial Program Output",
    t13_w1: "Input", t13_w2: "Process", t13_w3: "Output", t13_w4: "(IPO)",
    t14_title: "Bug", t14_text: "A bug is an error in the algorithm. Debugging is the process of finding and fixing these errors.", t14_inst: "Sort into buckets:", t14_h1: "Error or solution?", t14_h2: "Bug = bad, Fix = good.", t14_q: "What is debugging?", t14_qa: "Finding and fixing errors", t14_qb: "Adding new errors", t14_qc: "Deleting the program", t14_qd: "Restarting the computer",
    t14_bl1: "Problem", t14_bl2: "Solution", t14_i1: "Bug", t14_i2: "Debugging", t14_i3: "Crash", t14_i4: "Bugfix",
    t15_title: "Optimization", t15_text: "Optimization makes an algorithm faster or more memory-efficient without changing the result.", t15_inst: "Highlight the correct word:", t15_h1: "Faster and better.", t15_h2: "Same result, less effort.", t15_q: "What is the goal of optimization?", t15_qa: "Make algorithm faster", t15_qb: "Delete algorithm", t15_qc: "Falsify result", t15_qd: "Add more errors",
    t15_tk1: "Optimization", t15_tk2: "makes", t15_tk3: "algorithms", t15_tk4: "faster."
  },
  hu: {
    explorer_title: "Informatika Felfedező K7-3",
    t1_title: "Rendező algoritmusok", t1_text: "A rendező algoritmusok adatokat rendeznek meghatározott sorrendbe (Bubble Sort, Quick Sort).", t1_inst: "Párosítsd össze:", t1_h1: "Melyik algoritmus mit csinál?", t1_h2: "Rendezés = sorrendbe rakás!", t1_q: "Mit csinál egy rendező algoritmus?", t1_qa: "Sorrendbe rendezi az adatokat", t1_qb: "Adatokat töröl", t1_qc: "Adatokat másol", t1_qd: "Adatokat nyomtat",
    t1_l1: "Bubble Sort", t1_r1: "Egyszerű csere", t1_l2: "Quick Sort", t1_r2: "Gyors felosztás", t1_l3: "Merge Sort", t1_r3: "Összeolvasztás", t1_l4: "Insertion Sort", t1_r4: "Beszúrás",
    t2_title: "Lineáris keresés", t2_text: "A lineáris keresés minden elemet egymás után ellenőriz, amíg meg nem találja.", t2_inst: "Töltsd ki a hiányt:", t2_h1: "Elemet elemenként ellenőriz.", t2_h2: "Lassú, de megbízható!", t2_q: "Hogyan működik a lineáris keresés?", t2_qa: "Minden elemet egymás után ellenőriz", t2_qb: "A közepétől indul", t2_qc: "Véletlenszerűen keres", t2_qd: "Csak páros pozíciókat ellenőriz",
    t2_sent: "A lineáris keresés ___ egymás után ellenőrzi az elemeket.", t2_c1: "egyenként", t2_c2: "sokat", t2_c3: "véletlenszerűen", t2_c4: "gyorsan",
    t3_title: "Bináris keresés", t3_text: "A bináris keresés minden lépésben felezi a keresési tartományt – sokkal gyorsabb a lineárisnál.", t3_inst: "Válogasd szét:", t3_h1: "Gyors vagy lassú?", t3_h2: "Bináris > Lineáris!", t3_q: "Mi a bináris keresés előfeltétele?", t3_qa: "Az adatoknak rendezettnek kell lenniük", t3_qb: "Az adatokat törölni kell", t3_qc: "Az adatokat másolni kell", t3_qd: "Az adatokat nyomtatni kell",
    t3_bl1: "Bináris keresés", t3_bl2: "Lineáris keresés", t3_i1: "Rendezett lista kell", t3_i2: "Rendezetlen lista is jó", t3_i3: "Nagyon gyors (log n)", t3_i4: "Lassabb (n lépés)",
    t4_title: "Algoritmus hatékonysága", t4_text: "A hatékonyság méri, hogy hány lépést igényel egy algoritmus (O-jelölés).", t4_inst: "Tedd sorrendbe a szavakat:", t4_h1: "Kevesebb lépés = hatékonyabb.", t4_h2: "O(n) = lineáris, O(log n) = gyors.", t4_q: "Mit mér az algoritmus hatékonysága?", t4_qa: "A szükséges lépések számát", t4_qb: "A fájl méretét", t4_qc: "A képernyő fényerejét", t4_qd: "Az energiafogyasztást",
    t4_w1: "A hatékonyság", t4_w2: "az algoritmus", t4_w3: "lépéseinek", t4_w4: "számát méri.",
    t5_title: "Pszeudokód", t5_text: "A pszeudokód egy algoritmus informális leírása, nem kötődik programozási nyelvhez.", t5_inst: "Jelöld meg a helyes szót:", t5_h1: "Pszeudokód = egyszerűsített kód.", t5_h2: "Tervezz, mielőtt kódolsz!", t5_q: "Mire való a pszeudokód?", t5_qa: "Algoritmusok informális leírására", t5_qb: "Weboldalak létrehozására", t5_qc: "Fájlok törlésére", t5_qd: "Adatok mentésére",
    t5_tk1: "A pszeudokód", t5_tk2: "egyszerű", t5_tk3: "nyelven írja le", t5_tk4: "az algoritmusokat.",
    t6_title: "Folyamatábra", t6_text: "A folyamatábra egy algoritmus grafikus ábrázolása szimbólumokkal, például téglalapokkal és rombuszokkal.", t6_inst: "Párosítsd a szimbólumokat:", t6_h1: "Rombusz = döntés.", t6_h2: "Téglalap = művelet.", t6_q: "Mit jelent a rombusz a folyamatábrán?", t6_qa: "Döntést", t6_qb: "Kezdetet", t6_qc: "Véget", t6_qd: "Kimenetet",
    t6_l1: "Ovális", t6_r1: "Start/Vége", t6_l2: "Téglalap", t6_r2: "Művelet", t6_l3: "Rombusz", t6_r3: "Döntés", t6_l4: "Nyíl", t6_r4: "Irány",
    t7_title: "Struktogram", t7_text: "A struktogram (Nassi-Shneiderman) a program futását egymásba ágyazott blokkokban mutatja be.", t7_inst: "Töltsd ki a hiányt:", t7_h1: "Blokkok nyilak helyett.", t7_h2: "Kompakt ábrázolás.", t7_q: "Hogy hívják másképp a struktogramot?", t7_qa: "Nassi-Shneiderman diagram", t7_qb: "Folyamatábra", t7_qc: "UML diagram", t7_qd: "Osztálydiagram",
    t7_sent: "A struktogram ___ használ nyilak helyett.", t7_c1: "blokkokat", t7_c2: "köröket", t7_c3: "vonalakat", t7_c4: "pontokat",
    t8_title: "Szekvencia", t8_text: "A szekvencia a legegyszerűbb szerkezet: a parancsok egymás után, fentről lefelé hajtódnak végre.", t8_inst: "Tedd sorrendbe a lépéseket:", t8_h1: "1. lépés, aztán 2., majd 3.", t8_h2: "Mindig sorban.", t8_q: "Mi a szekvencia egy algoritmusban?", t8_qa: "Parancsok egymás utáni végrehajtása", t8_qb: "Parancsok ismétlése", t8_qc: "Parancsok kihagyása", t8_qd: "Parancsok törlése",
    t8_w1: "A parancsok", t8_w2: "egymás", t8_w3: "után", t8_w4: "hajtódnak végre.",
    t9_title: "Elágazás", t9_text: "Az elágazás (if-else) lehetővé teszi, hogy az algoritmus döntéseket hozzon és különböző utakon haladjon.", t9_inst: "Válogasd szét:", t9_h1: "Igaz vagy Hamis?", t9_h2: "A döntések irányítják a futást.", t9_q: "Mit tesz lehetővé az elágazás?", t9_qa: "Döntések meghozatalát", t9_qb: "Adatok mentését", t9_qc: "Ciklusok befejezését", t9_qd: "Változók törlését",
    t9_bl1: "Feltétel Igaz", t9_bl2: "Feltétel Hamis", t9_i1: "IF blokk fut", t9_i2: "ELSE blokk fut", t9_i3: "A úton megy", t9_i4: "B úton megy",
    t10_title: "Ciklus", t10_text: "A ciklus (iteráció) az algoritmus egy részét többször végrehajtja, amíg egy feltétel teljesül.", t10_inst: "Jelöld meg a helyes szót:", t10_h1: "A ciklus ismétel.", t10_h2: "Gépelést spórol.", t10_q: "Mit csinál a ciklus?", t10_qa: "Parancsokat ismétel", t10_qb: "Befejezi a programot", t10_qc: "Adatokat töröl", t10_qd: "Szöveget nyomtat",
    t10_tk1: "A ciklus", t10_tk2: "többször", t10_tk3: "ismétel", t10_tk4: "parancsokat.",
    t11_title: "Végtelen ciklus", t11_text: "A végtelen ciklus sosem áll meg, mert a kilépési feltétel sosem teljesül. Ez általában hiba!", t11_inst: "Töltsd ki a hiányt:", t11_h1: "Sosem ér véget.", t11_h2: "A program lefagy.", t11_q: "Miért alakul ki végtelen ciklus?", t11_qa: "A kilépési feltétel sosem teljesül", t11_qb: "A gép túl gyors", t11_qc: "Nincs elég tárhely", t11_qd: "Rossz programozási nyelv",
    t11_sent: "A végtelen ciklus ___ áll meg.", t11_c1: "sosem", t11_c2: "azonnal", t11_c3: "néha", t11_c4: "gyorsan",
    t12_title: "Értékadás", t12_text: "Értékadáskor egy változó új értéket kap, pl. x = 5.", t12_inst: "Párosítsd össze:", t12_h1: "Balra a változó, jobbra az érték.", t12_h2: "Az egyenlőségjel ad értéket.", t12_q: "Mit csinál az értékadás?", t12_qa: "Értéket ad egy változónak", t12_qb: "Összehasonlít két értéket", t12_qc: "Töröl egy változót", t12_qd: "Elindít egy ciklust",
    t12_l1: "x = 5", t12_r1: "Értékadás", t12_l2: "x == 5", t12_r2: "Összehasonlítás", t12_l3: "x + 5", t12_r3: "Számítás", t12_l4: "print(x)", t12_r4: "Kimenet",
    t13_title: "Be/Kimenet", t13_text: "Az algoritmusok bemeneteket (Input) dolgoznak fel és eredményeket (Output) adnak vissza.", t13_inst: "Tedd sorrendbe a szavakat:", t13_h1: "Bemenet, Feldolgozás, Kimenet.", t13_h2: "Az IPO elv.", t13_q: "Mit jelent az IPO?", t13_qa: "Input, Process, Output", t13_qb: "Inside, Past, Outside", t13_qc: "Integer, Print, Object", t13_qd: "Initial Program Output",
    t13_w1: "Bemenet", t13_w2: "Feldolgozás", t13_w3: "Kimenet", t13_w4: "(IPO)",
    t14_title: "Hiba (Bug)", t14_text: "A bug egy hiba az algoritmusban. A debugging (hibakeresés) ezen hibák megtalálása és javítása.", t14_inst: "Válogasd szét:", t14_h1: "Hiba vagy megoldás?", t14_h2: "Bug = rossz, Fix = jó.", t14_q: "Mi a debugging?", t14_qa: "Hibák keresése és javítása", t14_qb: "Új hibák beépítése", t14_qc: "A program törlése", t14_qd: "A gép újraindítása",
    t14_bl1: "Probléma", t14_bl2: "Megoldás", t14_i1: "Bug", t14_i2: "Debugging", t14_i3: "Összeomlás", t14_i4: "Bugfix",
    t15_title: "Optimalizálás", t15_text: "Az optimalizálás gyorsabbá vagy memóriatakarékosabbá teszi az algoritmust anélkül, hogy az eredmény változna.", t15_inst: "Jelöld meg a helyes szót:", t15_h1: "Gyorsabb és jobb.", t15_h2: "Ugyanaz az eredmény, kevesebb munka.", t15_q: "Mi az optimalizálás célja?", t15_qa: "Az algoritmus gyorsítása", t15_qb: "Az algoritmus törlése", t15_qc: "Az eredmény meghamisítása", t15_qd: "Több hiba beépítése",
    t15_tk1: "Az optimalizálás", t15_tk2: "gyorsabbá", t15_tk3: "teszi", t15_tk4: "az algoritmust."
  },
  ro: {
    explorer_title: "Explorator Informatică K7-3",
    t1_title: "Algoritmi de sortare", t1_text: "Algoritmii de sortare ordonează datele într-o secvență specifică (Bubble Sort, Quick Sort).", t1_inst: "Potrivește perechile:", t1_h1: "Ce algoritm face ce?", t1_h2: "Sortare = punere în ordine!", t1_q: "Ce face un algoritm de sortare?", t1_qa: "Pune datele în ordine", t1_qb: "Șterge datele", t1_qc: "Copiază datele", t1_qd: "Tipărește datele",
    t1_l1: "Bubble Sort", t1_r1: "Schimb simplu", t1_l2: "Quick Sort", t1_r2: "Partiționare rapidă", t1_l3: "Merge Sort", t1_r3: "Interclasare", t1_l4: "Insertion Sort", t1_r4: "Inserare",
    t2_title: "Căutare liniară", t2_text: "Căutarea liniară verifică fiecare element unul câte unul până găsește valoarea căutată.", t2_inst: "Completează spațiul liber:", t2_h1: "Verifică element cu element.", t2_h2: "Lent dar sigur!", t2_q: "Cum funcționează căutarea liniară?", t2_qa: "Verifică fiecare element unul după altul", t2_qb: "Începe de la mijloc", t2_qc: "Caută aleatoriu", t2_qd: "Verifică doar pozițiile pare",
    t2_sent: "Căutarea liniară verifică elementele ___ unul câte unul.", t2_c1: "fiecare", t2_c2: "multe", t2_c3: "aleatoriu", t2_c4: "rapid",
    t3_title: "Căutare binară", t3_text: "Căutarea binară reduce la jumătate spațiul de căutare la fiecare pas – mult mai rapidă decât cea liniară.", t3_inst: "Sortează în găleți:", t3_h1: "Rapid sau lent?", t3_h2: "Binar > Linear!", t3_q: "Ce condiție trebuie îndeplinită pentru căutarea binară?", t3_qa: "Datele trebuie sortate", t3_qb: "Datele trebuie șterse", t3_qc: "Datele trebuie copiate", t3_qd: "Datele trebuie tipărite",
    t3_bl1: "Căutare binară", t3_bl2: "Căutare liniară", t3_i1: "Listă sortată necesară", t3_i2: "Listă nesortată posibilă", t3_i3: "Foarte rapid (log n)", t3_i4: "Mai lent (n pași)",
    t4_title: "Eficiența algoritmilor", t4_text: "Eficiența măsoară câți pași necesită un algoritm (notația O).", t4_inst: "Pune cuvintele în ordine:", t4_h1: "Mai puțini pași = mai eficient.", t4_h2: "O(n) = liniar, O(log n) = rapid.", t4_q: "Ce măsoară eficiența unui algoritm?", t4_qa: "Numărul de pași necesari", t4_qb: "Dimensiunea fișierului", t4_qc: "Luminozitatea ecranului", t4_qd: "Consumul de energie",
    t4_w1: "Eficiența", t4_w2: "măsoară", t4_w3: "numărul", t4_w4: "de pași",
    t5_title: "Pseudocod", t5_text: "Pseudocodul este o descriere informală a unui algoritm, nefiind legat de un limbaj de programare.", t5_inst: "Evidențiază cuvântul corect:", t5_h1: "Pseudocod = cod simplificat.", t5_h2: "Planifică înainte de a codifica!", t5_q: "Pentru ce se folosește pseudocodul?", t5_qa: "Descrierea informală a algoritmilor", t5_qb: "Crearea site-urilor web", t5_qc: "Ștergerea fișierelor", t5_qd: "Salvarea datelor",
    t5_tk1: "Pseudocodul", t5_tk2: "descrie", t5_tk3: "algoritmii", t5_tk4: "simplu.",
    t6_title: "Schemă logică", t6_text: "O schemă logică reprezintă un algoritm grafic folosind simboluri precum dreptunghiuri și romburi.", t6_inst: "Potrivește simbolurile:", t6_h1: "Romb = decizie.", t6_h2: "Dreptunghi = acțiune.", t6_q: "Ce reprezintă un romb într-o schemă logică?", t6_qa: "O decizie", t6_qb: "Începutul", t6_qc: "Sfârșitul", t6_qd: "O ieșire",
    t6_l1: "Oval", t6_r1: "Start/Stop", t6_l2: "Dreptunghi", t6_r2: "Acțiune", t6_l3: "Romb", t6_r3: "Decizie", t6_l4: "Săgeată", t6_r4: "Direcție",
    t7_title: "Structogramă", t7_text: "O structogramă (Nassi-Shneiderman) arată fluxul unui program în blocuri imbricate.", t7_inst: "Completează spațiul liber:", t7_h1: "Blocuri în loc de săgeți.", t7_h2: "Reprezentare compactă.", t7_q: "Cum se mai numește o structogramă?", t7_qa: "Diagramă Nassi-Shneiderman", t7_qb: "Schemă logică", t7_qc: "Diagramă UML", t7_qd: "Diagramă de clase",
    t7_sent: "O structogramă folosește ___ în loc de săgeți.", t7_c1: "blocuri", t7_c2: "cercuri", t7_c3: "linii", t7_c4: "puncte",
    t8_title: "Secvență", t8_text: "O secvență este cea mai simplă structură: comenzile sunt executate una după alta, de sus în jos.", t8_inst: "Pune pașii în ordine:", t8_h1: "Pasul 1, apoi 2, apoi 3.", t8_h2: "Întotdeauna în ordine.", t8_q: "Ce este o secvență într-un algoritm?", t8_qa: "Executarea comenzilor una după alta", t8_qb: "Repetarea comenzilor", t8_qc: "Sărirea peste comenzi", t8_qd: "Ștergerea comenzilor",
    t8_w1: "Comenzile", t8_w2: "sunt", t8_w3: "executate", t8_w4: "secvențial",
    t9_title: "Ramificare", t9_text: "O ramificare (if-else) permite algoritmului să ia decizii și să urmeze căi diferite.", t9_inst: "Sortează în găleți:", t9_h1: "Adevărat sau Fals?", t9_h2: "Deciziile ghidează fluxul.", t9_q: "Ce permite o ramificare?", t9_qa: "Luarea deciziilor", t9_qb: "Salvarea datelor", t9_qc: "Încheierea buclelor", t9_qd: "Ștergerea variabilelor",
    t9_bl1: "Condiție Adevărată", t9_bl2: "Condiție Falsă", t9_i1: "Execută blocul IF", t9_i2: "Execută blocul ELSE", t9_i3: "Urmează Calea A", t9_i4: "Urmează Calea B",
    t10_title: "Iterație", t10_text: "O iterație (buclă) execută o parte a algoritmului de mai multe ori până când o condiție este îndeplinită.", t10_inst: "Evidențiază cuvântul corect:", t10_h1: "Buclele repetă codul.", t10_h2: "Economisește tastarea.", t10_q: "Ce face o buclă?", t10_qa: "Repetă comenzi", t10_qb: "Termină programul", t10_qc: "Șterge date", t10_qd: "Tipărește text",
    t10_tk1: "O buclă", t10_tk2: "repetă", t10_tk3: "comenzi", t10_tk4: "de mai multe ori.",
    t11_title: "Buclă infinită", t11_text: "O buclă infinită nu se oprește niciodată deoarece condiția sa de ieșire nu este atinsă. De obicei o eroare!", t11_inst: "Completează spațiul liber:", t11_h1: "Nu se termină niciodată.", t11_h2: "Programul se blochează.", t11_q: "De ce apare o buclă infinită?", t11_qa: "Condiția de ieșire nu este atinsă", t11_qb: "Computerul este prea rapid", t11_qc: "Nu este suficient spațiu", t11_qd: "Limbaj de programare greșit",
    t11_sent: "O buclă infinită nu se oprește ___.", t11_c1: "niciodată", t11_c2: "imediat", t11_c3: "uneori", t11_c4: "rapid",
    t12_title: "Atribuire", t12_text: "Într-o atribuire, o variabilă primește o valoare nouă, de ex. x = 5.", t12_inst: "Potrivește perechile:", t12_h1: "Variabila în stânga, valoarea în dreapta.", t12_h2: "Semnul egal atribuie.", t12_q: "Ce face o atribuire?", t12_qa: "Oferă o valoare unei variabile", t12_qb: "Compară două valori", t12_qc: "Șterge o variabilă", t12_qd: "Începe o buclă",
    t12_l1: "x = 5", t12_r1: "Atribuire", t12_l2: "x == 5", t12_r2: "Comparație", t12_l3: "x + 5", t12_r3: "Calcul", t12_l4: "print(x)", t12_r4: "Ieșire",
    t13_title: "Intrare/Ieșire", t13_text: "Algoritmii procesează intrări și livrează rezultate (ieșiri) conform principiului IPO.", t13_inst: "Pune cuvintele în ordine:", t13_h1: "Intrare, Procesare, Ieșire.", t13_h2: "Principiul IPO.", t13_q: "Ce înseamnă IPO?", t13_qa: "Intrare, Procesare, Ieșire", t13_qb: "Inside, Past, Outside", t13_qc: "Integer, Print, Object", t13_qd: "Initial Program Output",
    t13_w1: "Intrare", t13_w2: "Procesare", t13_w3: "Ieșire", t13_w4: "(IPO)",
    t14_title: "Eroare (Bug)", t14_text: "Un bug este o eroare în algoritm. Debugging este procesul de găsire și reparare a acestor erori.", t14_inst: "Sortează în găleți:", t14_h1: "Eroare sau soluție?", t14_h2: "Bug = rău, Fix = bun.", t14_q: "Ce este debugging?", t14_qa: "Găsirea și repararea erorilor", t14_qb: "Adăugarea de noi erori", t14_qc: "Ștergerea programului", t14_qd: "Repornirea computerului",
    t14_bl1: "Problemă", t14_bl2: "Soluție", t14_i1: "Bug", t14_i2: "Debugging", t14_i3: "Crash", t14_i4: "Bugfix",
    t15_title: "Optimizare", t15_text: "Optimizarea face un algoritm mai rapid sau mai eficient din punct de vedere al memoriei, fără a schimba rezultatul.", t15_inst: "Evidențiază cuvântul corect:", t15_h1: "Mai rapid și mai bun.", t15_h2: "Același rezultat, mai puțin efort.", t15_q: "Care este scopul optimizării?", t15_qa: "Să facă algoritmul mai rapid", t15_qb: "Să șteargă algoritmul", t15_qc: "Să falsifice rezultatul", t15_qd: "Să adauge mai multe erori",
    t15_tk1: "Optimizarea", t15_tk2: "face", t15_tk3: "algoritmii", t15_tk4: "mai rapizi."
  }
};

export const INFO_K7_I3_POOL: PoolTopicDef[] = [
  {
    difficulty: "easy",
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "simple-icon", icon: "🔀", bg: "#EFF6FF", color: "#2563EB" },
    interactive: { type: "match-pairs", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", pairs: [{left:"t1_l1",right:"t1_r1"},{left:"t1_l2",right:"t1_r2"},{left:"t1_l3",right:"t1_r3"},{left:"t1_l4",right:"t1_r4"}] },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" }
  },
  {
    difficulty: "easy",
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "🔍", bg: "#FDF2F8", color: "#DB2777" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_c1", "t2_c2", "t2_c3", "t2_c4"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" }
  },
  {
    difficulty: "medium",
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "simple-icon", icon: "⚡", bg: "#F0F9FF", color: "#0EA5E9" },
    interactive: { type: "drag-to-bucket", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", buckets: [{id:"b1",label:"t3_bl1"},{id:"b2",label:"t3_bl2"}], items: [{text:"t3_i1",bucketId:"b1"},{text:"t3_i2",bucketId:"b2"},{text:"t3_i3",bucketId:"b1"},{text:"t3_i4",bucketId:"b2"}] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" }
  },
  {
    difficulty: "medium",
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "⏱️", bg: "#FEF3C7", color: "#D97706" },
    interactive: { type: "physics-stacker", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", words: ["t4_w1", "t4_w2", "t4_w3", "t4_w4"], correctOrder: [0, 1, 2, 3] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" }
  },
  {
    difficulty: "hard",
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "📝", bg: "#F3E8FF", color: "#B45309" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1", "t5_tk2", "t5_tk3", "t5_tk4"], correctIndices: [0] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" }
  },
  {
    difficulty: "easy",
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "simple-icon", icon: "📊", bg: "#EFF6FF", color: "#2563EB" },
    interactive: { type: "match-pairs", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", pairs: [{left:"t6_l1",right:"t6_r1"},{left:"t6_l2",right:"t6_r2"},{left:"t6_l3",right:"t6_r3"},{left:"t6_l4",right:"t6_r4"}] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" }
  },
  {
    difficulty: "easy",
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "🧱", bg: "#FDF2F8", color: "#DB2777" },
    interactive: { type: "gap-fill", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", sentence: "t7_sent", choices: ["t7_c1", "t7_c2", "t7_c3", "t7_c4"], correctIndex: 0 },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" }
  },
  {
    difficulty: "medium",
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "simple-icon", icon: "⬇️", bg: "#F0F9FF", color: "#0EA5E9" },
    interactive: { type: "physics-stacker", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", words: ["t8_w1", "t8_w2", "t8_w3", "t8_w4"], correctOrder: [0, 1, 2, 3] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" }
  },
  {
    difficulty: "medium",
    infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "simple-icon", icon: "🔀", bg: "#FEF3C7", color: "#D97706" },
    interactive: { type: "drag-to-bucket", instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2", buckets: [{id:"b1",label:"t9_bl1"},{id:"b2",label:"t9_bl2"}], items: [{text:"t9_i1",bucketId:"b1"},{text:"t9_i2",bucketId:"b2"},{text:"t9_i3",bucketId:"b1"},{text:"t9_i4",bucketId:"b2"}] },
    quiz: { question: "t9_q", choices: ["t9_qa", "t9_qb", "t9_qc", "t9_qd"], answer: "t9_qa" }
  },
  {
    difficulty: "hard",
    infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "simple-icon", icon: "🔄", bg: "#F3E8FF", color: "#B45309" },
    interactive: { type: "highlight-text", instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2", tokens: ["t10_tk1", "t10_tk2", "t10_tk3", "t10_tk4"], correctIndices: [1] },
    quiz: { question: "t10_q", choices: ["t10_qa", "t10_qb", "t10_qc", "t10_qd"], answer: "t10_qa" }
  },
  {
    difficulty: "easy",
    infoTitle: "t11_title", infoText: "t11_text",
    svg: { type: "simple-icon", icon: "♾️", bg: "#EFF6FF", color: "#2563EB" },
    interactive: { type: "gap-fill", instruction: "t11_inst", hint1: "t11_h1", hint2: "t11_h2", sentence: "t11_sent", choices: ["t11_c1", "t11_c2", "t11_c3", "t11_c4"], correctIndex: 0 },
    quiz: { question: "t11_q", choices: ["t11_qa", "t11_qb", "t11_qc", "t11_qd"], answer: "t11_qa" }
  },
  {
    difficulty: "easy",
    infoTitle: "t12_title", infoText: "t12_text",
    svg: { type: "simple-icon", icon: "📥", bg: "#FDF2F8", color: "#DB2777" },
    interactive: { type: "match-pairs", instruction: "t12_inst", hint1: "t12_h1", hint2: "t12_h2", pairs: [{left:"t12_l1",right:"t12_r1"},{left:"t12_l2",right:"t12_r2"},{left:"t12_l3",right:"t12_r3"},{left:"t12_l4",right:"t12_r4"}] },
    quiz: { question: "t12_q", choices: ["t12_qa", "t12_qb", "t12_qc", "t12_qd"], answer: "t12_qa" }
  },
  {
    difficulty: "medium",
    infoTitle: "t13_title", infoText: "t13_text",
    svg: { type: "simple-icon", icon: "⚙️", bg: "#F0F9FF", color: "#0EA5E9" },
    interactive: { type: "physics-stacker", instruction: "t13_inst", hint1: "t13_h1", hint2: "t13_h2", words: ["t13_w1", "t13_w2", "t13_w3", "t13_w4"], correctOrder: [0, 1, 2, 3] },
    quiz: { question: "t13_q", choices: ["t13_qa", "t13_qb", "t13_qc", "t13_qd"], answer: "t13_qa" }
  },
  {
    difficulty: "medium",
    infoTitle: "t14_title", infoText: "t14_text",
    svg: { type: "simple-icon", icon: "🐛", bg: "#FEF3C7", color: "#D97706" },
    interactive: { type: "drag-to-bucket", instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2", buckets: [{id:"b1",label:"t14_bl1"},{id:"b2",label:"t14_bl2"}], items: [{text:"t14_i1",bucketId:"b1"},{text:"t14_i2",bucketId:"b2"},{text:"t14_i3",bucketId:"b1"},{text:"t14_i4",bucketId:"b2"}] },
    quiz: { question: "t14_q", choices: ["t14_qa", "t14_qb", "t14_qc", "t14_qd"], answer: "t14_qa" }
  },
  {
    difficulty: "hard",
    infoTitle: "t15_title", infoText: "t15_text",
    svg: { type: "simple-icon", icon: "🚀", bg: "#F3E8FF", color: "#B45309" },
    interactive: { type: "highlight-text", instruction: "t15_inst", hint1: "t15_h1", hint2: "t15_h2", tokens: ["t15_tk1", "t15_tk2", "t15_tk3", "t15_tk4"], correctIndices: [0] },
    quiz: { question: "t15_q", choices: ["t15_qa", "t15_qb", "t15_qc", "t15_qd"], answer: "t15_qa" }
  }
];

