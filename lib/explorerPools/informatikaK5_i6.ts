// lib/explorerPools/informatikaK5_i6.ts
import type { PoolTopicDef } from "./types";

export const INFO_K5_I6_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Informatik Entdecker 6",
    t1_title: "Zellen in Excel", t1_text: "Eine Zelle ist das Kästchen in einer Tabelle, in das wir Daten eingeben.", t1_inst: "Ordne die Paare zu:", t1_h1: "Was gehört zu einer Tabelle?", t1_h2: "Zeile, Spalte, Zelle!", t1_q: "Wie heißt die Adresse einer Zelle?", t1_qa: "Zelladresse (z.B. A1)", t1_qb: "Dateiname", t1_qc: "Ordnername", t1_qd: "Programm",
    t1_l1: "Zelle", t1_r1: "Ein Kästchen", t1_l2: "Zeile", t1_r2: "Waagerecht", t1_l3: "Spalte", t1_r3: "Senkrecht",
    t2_title: "Zeilen und Spalten", t2_text: "Zeilen verlaufen waagerecht (1,2,3...), Spalten senkrecht (A,B,C...).", t2_inst: "Fülle die Lücke aus:", t2_h1: "Zeile = waagerecht, Spalte = senkrecht.", t2_h2: "A1 = Spalte A, Zeile 1.", t2_q: "Womit werden Spalten bezeichnet?", t2_qa: "Buchstaben (A, B, C)", t2_qb: "Zahlen (1, 2, 3)", t2_qc: "Farben", t2_qd: "Symbolen",
    t2_sent: "Zeilen werden mit ___ nummeriert.", t2_qa2: "Zahlen", t2_qb2: "Buchstaben", t2_qc2: "Farben", t2_qd2: "Pfeilen",
    t3_title: "Formeln (Berechnungen)", t3_text: "In Excel können wir mit dem Gleichheitszeichen rechnen (=SUMME(A1:A5)).", t3_inst: "Sortiere in die Eimer:", t3_h1: "Formel oder Wert?", t3_h2: "Formeln beginnen mit =", t3_q: "Womit beginnt eine Formel in Excel?", t3_qa: "= (Gleichheitszeichen)", t3_qb: "+ (Pluszeichen)", t3_qc: "# (Raute)", t3_qd: "@ (At-Zeichen)",
    t3_bl1: "Formeln", t3_bl2: "Werte", t3_i1: "=SUMME(A1:A3)", t3_i2: "42", t3_i3: "=A1+B1", t3_i4: "Hallo",
    t4_title: "Diagramme", t4_text: "Diagramme stellen Daten aus Tabellen grafisch dar.", t4_inst: "Bringe die Wörter in Ordnung:", t4_h1: "Balken, Kreis oder Linie?", t4_h2: "Daten sichtbar machen!", t4_q: "Wozu dient ein Diagramm?", t4_qa: "Daten grafisch darstellen", t4_qb: "Text formatieren", t4_qc: "Bilder speichern", t4_qd: "Internet öffnen",
    t4_w1: "Ein", t4_w2: "Diagramm", t4_w3: "stellt", t4_w4: "Daten", t4_w5: "grafisch", t4_w6: "dar.", t4_w7: "",
    t5_title: "Additionsformel", t5_text: "Mit =SUMME() können wir Zahlen in Excel addieren.", t5_inst: "Markiere das richtige Wort:", t5_h1: "SUMME addiert Zahlen.", t5_h2: "= am Anfang nicht vergessen!", t5_q: "Was berechnet =SUMME(A1:A3)?", t5_qa: "Die Summe von A1 bis A3", t5_qb: "Den Durchschnitt", t5_qc: "Das Produkt", t5_qd: "Die Differenz",
    t5_tk1: "=SUMME()", t5_tk2: "addiert", t5_tk3: "alle", t5_tk4: "ausgewählten", t5_tk5: "Zahlen.", t5_tk6: "",
  },
  en: {
    explorer_title: "Informatics Explorer 6",
    t1_title: "Cells in Excel", t1_text: "A cell is the small box in a table where we enter data.", t1_inst: "Match the pairs:", t1_h1: "What belongs in a table?", t1_h2: "Row, column, cell!", t1_q: "What is a cell address called?", t1_qa: "Cell address (e.g. A1)", t1_qb: "Filename", t1_qc: "Folder name", t1_qd: "Program",
    t1_l1: "Cell", t1_r1: "A small box", t1_l2: "Row", t1_r2: "Horizontal", t1_l3: "Column", t1_r3: "Vertical",
    t2_title: "Rows and Columns", t2_text: "Rows run horizontally (1,2,3...), columns run vertically (A,B,C...).", t2_inst: "Fill in the blank:", t2_h1: "Row = horizontal, Column = vertical.", t2_h2: "A1 = Column A, Row 1.", t2_q: "How are columns labeled?", t2_qa: "Letters (A, B, C)", t2_qb: "Numbers (1, 2, 3)", t2_qc: "Colors", t2_qd: "Symbols",
    t2_sent: "Rows are numbered with ___.", t2_qa2: "numbers", t2_qb2: "letters", t2_qc2: "colors", t2_qd2: "arrows",
    t3_title: "Formulas (Calculations)", t3_text: "In Excel we can calculate using the equals sign (=SUM(A1:A5)).", t3_inst: "Sort into buckets:", t3_h1: "Formula or value?", t3_h2: "Formulas start with =", t3_q: "What does a formula in Excel start with?", t3_qa: "= (equals sign)", t3_qb: "+ (plus sign)", t3_qc: "# (hash)", t3_qd: "@ (at sign)",
    t3_bl1: "Formulas", t3_bl2: "Values", t3_i1: "=SUM(A1:A3)", t3_i2: "42", t3_i3: "=A1+B1", t3_i4: "Hello",
    t4_title: "Charts", t4_text: "Charts display table data visually.", t4_inst: "Put the words in order:", t4_h1: "Bar, pie or line?", t4_h2: "Make data visible!", t4_q: "What is a chart used for?", t4_qa: "Display data visually", t4_qb: "Format text", t4_qc: "Save images", t4_qd: "Open internet",
    t4_w1: "A", t4_w2: "chart", t4_w3: "displays", t4_w4: "data", t4_w5: "visually.", t4_w6: "", t4_w7: "",
    t5_title: "Addition Formula", t5_text: "With =SUM() we can add numbers in Excel.", t5_inst: "Highlight the correct word:", t5_h1: "SUM adds numbers.", t5_h2: "Don't forget = at the start!", t5_q: "What does =SUM(A1:A3) calculate?", t5_qa: "The sum from A1 to A3", t5_qb: "The average", t5_qc: "The product", t5_qd: "The difference",
    t5_tk1: "=SUM()", t5_tk2: "adds", t5_tk3: "all", t5_tk4: "selected", t5_tk5: "numbers.", t5_tk6: "",
  },
  hu: {
    explorer_title: "Informatika Felfedező 6",
    t1_title: "Cellák az Excelben", t1_text: "A cella egy kis mező a táblázatban, ahova adatokat írunk.", t1_inst: "Párosítsd össze:", t1_h1: "Mi tartozik a táblázathoz?", t1_h2: "Sor, oszlop, cella!", t1_q: "Hogyan hívják a cella címét?", t1_qa: "Cellacím (pl. A1)", t1_qb: "Fájlnév", t1_qc: "Mappanév", t1_qd: "Program",
    t1_l1: "Cella", t1_r1: "Kis mező", t1_l2: "Sor", t1_r2: "Vízszintes", t1_l3: "Oszlop", t1_r3: "Függőleges",
    t2_title: "Sorok és oszlopok", t2_text: "A sorok vízszintesen futnak (1,2,3...), az oszlopok függőlegesen (A,B,C...).", t2_inst: "Töltsd ki a hiányt:", t2_h1: "Sor = vízszintes, Oszlop = függőleges.", t2_h2: "A1 = A oszlop, 1. sor.", t2_q: "Hogyan jelöljük az oszlopokat?", t2_qa: "Betűkkel (A, B, C)", t2_qb: "Számokkal (1, 2, 3)", t2_qc: "Színekkel", t2_qd: "Szimbólumokkal",
    t2_sent: "A sorokat ___ számozzuk.", t2_qa2: "számokkal", t2_qb2: "betűkkel", t2_qc2: "színekkel", t2_qd2: "nyilakkal",
    t3_title: "Képletek (számítások)", t3_text: "Az Excelben egyenlőségjellel számolhatunk (=SZUM(A1:A5)).", t3_inst: "Válogasd szét:", t3_h1: "Képlet vagy érték?", t3_h2: "A képletek =-lel kezdődnek.", t3_q: "Mivel kezdődik egy Excel képlet?", t3_qa: "= (egyenlőségjel)", t3_qb: "+ (pluszjel)", t3_qc: "# (kettőskereszt)", t3_qd: "@ (at jel)",
    t3_bl1: "Képletek", t3_bl2: "Értékek", t3_i1: "=SZUM(A1:A3)", t3_i2: "42", t3_i3: "=A1+B1", t3_i4: "Szia",
    t4_title: "Diagramok", t4_text: "A diagramok grafikusan jelenítik meg a táblázat adatait.", t4_inst: "Tedd sorrendbe a szavakat:", t4_h1: "Oszlop, kör vagy vonal?", t4_h2: "Az adatokat láthatóvá teszi!", t4_q: "Mire való egy diagram?", t4_qa: "Adatok grafikus megjelenítése", t4_qb: "Szöveg formázása", t4_qc: "Képek mentése", t4_qd: "Internet megnyitása",
    t4_w1: "A diagram", t4_w2: "grafikusan", t4_w3: "jeleníti", t4_w4: "meg", t4_w5: "az adatokat.", t4_w6: "", t4_w7: "",
    t5_title: "Összeadás képlet", t5_text: "A =SZUM() képlettel összeadhatjuk a számokat az Excelben.", t5_inst: "Jelöld meg a helyes szót:", t5_h1: "A SZUM összeadja a számokat.", t5_h2: "Ne felejtsd az =-t az elején!", t5_q: "Mit számol a =SZUM(A1:A3)?", t5_qa: "A1-től A3-ig az összeget", t5_qb: "Az átlagot", t5_qc: "A szorzatot", t5_qd: "A különbséget",
    t5_tk1: "=SZUM()", t5_tk2: "összeadja", t5_tk3: "az összes", t5_tk4: "kijelölt", t5_tk5: "számot.", t5_tk6: "",
  },
  ro: {
    explorer_title: "Explorator Informatică 6",
    t1_title: "Celule în Excel", t1_text: "O celulă este căsuța mică dintr-un tabel unde introducem date.", t1_inst: "Potrivește perechile:", t1_h1: "Ce aparține unui tabel?", t1_h2: "Rând, coloană, celulă!", t1_q: "Cum se numește adresa unei celule?", t1_qa: "Adresa celulei (ex. A1)", t1_qb: "Numele fișierului", t1_qc: "Numele dosarului", t1_qd: "Programul",
    t1_l1: "Celulă", t1_r1: "O căsuță", t1_l2: "Rând", t1_r2: "Orizontal", t1_l3: "Coloană", t1_r3: "Vertical",
    t2_title: "Rânduri și coloane", t2_text: "Rândurile merg orizontal (1,2,3...), coloanele vertical (A,B,C...).", t2_inst: "Completează spațiul liber:", t2_h1: "Rând = orizontal, Coloană = vertical.", t2_h2: "A1 = Coloana A, Rândul 1.", t2_q: "Cum sunt etichetate coloanele?", t2_qa: "Cu litere (A, B, C)", t2_qb: "Cu cifre (1, 2, 3)", t2_qc: "Cu culori", t2_qd: "Cu simboluri",
    t2_sent: "Rândurile sunt numerotate cu ___.", t2_qa2: "cifre", t2_qb2: "litere", t2_qc2: "culori", t2_qd2: "săgeți",
    t3_title: "Formule (calcule)", t3_text: "În Excel putem calcula folosind semnul egal (=SUM(A1:A5)).", t3_inst: "Sortează în găleți:", t3_h1: "Formulă sau valoare?", t3_h2: "Formulele încep cu =", t3_q: "Cu ce începe o formulă în Excel?", t3_qa: "= (semnul egal)", t3_qb: "+ (semnul plus)", t3_qc: "# (diez)", t3_qd: "@ (at)",
    t3_bl1: "Formule", t3_bl2: "Valori", t3_i1: "=SUM(A1:A3)", t3_i2: "42", t3_i3: "=A1+B1", t3_i4: "Salut",
    t4_title: "Diagrame", t4_text: "Diagramele afișează vizual datele din tabele.", t4_inst: "Pune cuvintele în ordine:", t4_h1: "Bară, cerc sau linie?", t4_h2: "Faci datele vizibile!", t4_q: "La ce servește o diagramă?", t4_qa: "Afișarea vizuală a datelor", t4_qb: "Formatarea textului", t4_qc: "Salvarea imaginilor", t4_qd: "Deschiderea internetului",
    t4_w1: "O", t4_w2: "diagramă", t4_w3: "afișează", t4_w4: "datele", t4_w5: "vizual.", t4_w6: "", t4_w7: "",
    t5_title: "Formula de adunare", t5_text: "Cu =SUM() putem aduna numere în Excel.", t5_inst: "Evidențiază cuvântul corect:", t5_h1: "SUM adună numerele.", t5_h2: "Nu uita = la început!", t5_q: "Ce calculează =SUM(A1:A3)?", t5_qa: "Suma de la A1 la A3", t5_qb: "Media", t5_qc: "Produsul", t5_qd: "Diferența",
    t5_tk1: "=SUM()", t5_tk2: "adună", t5_tk3: "toate", t5_tk4: "numerele", t5_tk5: "selectate.", t5_tk6: "",
  }
};

export const INFO_K5_I6_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "simple-icon", icon: "📊", color: "#217346" },
    interactive: { type: "match-pairs", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", pairs: [{left:"t1_l1",right:"t1_r1"},{left:"t1_l2",right:"t1_r2"},{left:"t1_l3",right:"t1_r3"}] },
    quiz: { question: "t1_q", choices: ["t1_qa","t1_qb","t1_qc","t1_qd"], answer: "t1_qa" }
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "🔢", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2","t2_qb2","t2_qc2","t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa","t2_qb","t2_qc","t2_qd"], answer: "t2_qa" }
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "icon-grid", items: [{emoji:"🧮",label:"="},{emoji:"🔢",label:"42"}] },
    interactive: { type: "drag-to-bucket", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", buckets: [{id:"b1",label:"t3_bl1"},{id:"b2",label:"t3_bl2"}], items: [{text:"t3_i1",bucketId:"b1"},{text:"t3_i2",bucketId:"b2"},{text:"t3_i3",bucketId:"b1"},{text:"t3_i4",bucketId:"b2"}] },
    quiz: { question: "t3_q", choices: ["t3_qa","t3_qb","t3_qc","t3_qd"], answer: "t3_qa" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "📈", color: "#FF5722" },
    interactive: { type: "word-order", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", words: ["t4_w1","t4_w2","t4_w3","t4_w4","t4_w5"], correctOrder: [0,1,2,3,4] },
    quiz: { question: "t4_q", choices: ["t4_qa","t4_qb","t4_qc","t4_qd"], answer: "t4_qa" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "➕", color: "#3F51B5" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5"], correctIndices: [0] },
    quiz: { question: "t5_q", choices: ["t5_qa","t5_qb","t5_qc","t5_qd"], answer: "t5_qa" }
  }
];
