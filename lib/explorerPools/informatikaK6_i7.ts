// @ts-nocheck
import type { PoolTopicDef } from "./types";

export const INFO_K6_I7_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Informatik Entdecker K6-7",
    t1_title: "SUMME und MITTELWERT", t1_text: "Mit =SUMME() addieren wir Zahlen, mit =MITTELWERT() berechnen wir den Durchschnitt.", t1_inst: "Ordne die Paare zu:", t1_h1: "Welche Formel macht was?", t1_h2: "SUMME oder MITTELWERT?", t1_q: "Was berechnet =MITTELWERT(A1:A5)?", t1_qa: "Den Durchschnitt der Zahlen", t1_qb: "Die Summe der Zahlen", t1_qc: "Die größte Zahl", t1_qd: "Die kleinste Zahl",
    t1_l1: "=SUMME()", t1_r1: "Addition", t1_l2: "=MITTELWERT()", t1_r2: "Durchschnitt", t1_l3: "=MAX()", t1_r3: "Größter Wert",
    t2_title: "Bedingte Formatierung", t2_text: "Bedingte Formatierung färbt Zellen automatisch ein, je nach ihrem Wert.", t2_inst: "Fülle die Lücke aus:", t2_h1: "Rote Zellen = schlechter Wert?", t2_h2: "Automatisch einfärben!", t2_q: "Was macht bedingte Formatierung?", t2_qa: "Zellen je nach Wert einfärben", t2_qb: "Zahlen addieren", t2_qc: "Texte löschen", t2_qd: "Dateien speichern",
    t2_sent: "Bedingte Formatierung ___ Zellen automatisch basierend auf ihrem Wert.", t2_qa2: "färbt", t2_qb2: "löscht", t2_qc2: "kopiert", t2_qd2: "druckt",
    t3_title: "Daten sortieren", t3_text: "In Excel können wir Daten auf- oder absteigend sortieren.", t3_inst: "Sortiere in die Eimer:", t3_h1: "Aufsteigend oder absteigend?", t3_h2: "A-Z oder Z-A!", t3_q: "Was bedeutet aufsteigend sortieren?", t3_qa: "Von klein nach groß (A bis Z)", t3_qb: "Von groß nach klein (Z bis A)", t3_qc: "Zufällige Reihenfolge", t3_qd: "Nach Farbe sortieren",
    t3_bl1: "Aufsteigend", t3_bl2: "Absteigend", t3_i1: "A, B, C", t3_i2: "Z, Y, X", t3_i3: "1, 2, 3", t3_i4: "9, 8, 7",
    t4_title: "Daten filtern", t4_text: "Filter zeigen nur bestimmte Zeilen an, die einer Bedingung entsprechen.", t4_inst: "Bringe die Wörter in Ordnung:", t4_h1: "Filter = Auswahl.", t4_h2: "Nur sehen was wichtig ist!", t4_q: "Was macht ein Filter in Excel?", t4_qa: "Zeigt nur Zeilen, die einer Bedingung entsprechen", t4_qb: "Löscht alle Daten", t4_qc: "Ändert Schriftart", t4_qd: "Druckt die Tabelle",
    t4_w1: "Ein Filter", t4_w2: "zeigt", t4_w3: "nur", t4_w4: "bestimmte", t4_w5: "Daten an.", t4_w6: "", t4_w7: "",
    t5_title: "Diagrammtypen", t5_text: "Balkendiagramme vergleichen Werte, Kreisdiagramme zeigen Anteile, Liniendiagramme Trends.", t5_inst: "Markiere das richtige Wort:", t5_h1: "Welcher Diagrammtyp wofür?", t5_h2: "Balken, Kreis oder Linie!", t5_q: "Welches Diagramm zeigt Anteile am besten?", t5_qa: "Kreisdiagramm", t5_qb: "Balkendiagramm", t5_qc: "Liniendiagramm", t5_qd: "Streudiagramm",
    t5_tk1: "Das", t5_tk2: "Kreisdiagramm", t5_tk3: "zeigt", t5_tk4: "Anteile", t5_tk5: "am besten.", t5_tk6: "",
  },
  en: {
    explorer_title: "Informatics Explorer K6-7",
    t1_title: "SUM and AVERAGE", t1_text: "With =SUM() we add numbers, with =AVERAGE() we calculate the mean.", t1_inst: "Match the pairs:", t1_h1: "Which formula does what?", t1_h2: "SUM or AVERAGE?", t1_q: "What does =AVERAGE(A1:A5) calculate?", t1_qa: "The average of the numbers", t1_qb: "The sum of the numbers", t1_qc: "The largest number", t1_qd: "The smallest number",
    t1_l1: "=SUM()", t1_r1: "Addition", t1_l2: "=AVERAGE()", t1_r2: "Mean value", t1_l3: "=MAX()", t1_r3: "Largest value",
    t2_title: "Conditional Formatting", t2_text: "Conditional formatting automatically colors cells based on their value.", t2_inst: "Fill in the blank:", t2_h1: "Red cells = bad value?", t2_h2: "Automatic coloring!", t2_q: "What does conditional formatting do?", t2_qa: "Color cells based on their value", t2_qb: "Add numbers", t2_qc: "Delete texts", t2_qd: "Save files",
    t2_sent: "Conditional formatting ___ cells automatically based on their value.", t2_qa2: "colors", t2_qb2: "deletes", t2_qc2: "copies", t2_qd2: "prints",
    t3_title: "Sorting Data", t3_text: "In Excel we can sort data in ascending or descending order.", t3_inst: "Sort into buckets:", t3_h1: "Ascending or descending?", t3_h2: "A-Z or Z-A!", t3_q: "What does ascending sort mean?", t3_qa: "From small to large (A to Z)", t3_qb: "From large to small (Z to A)", t3_qc: "Random order", t3_qd: "Sort by color",
    t3_bl1: "Ascending", t3_bl2: "Descending", t3_i1: "A, B, C", t3_i2: "Z, Y, X", t3_i3: "1, 2, 3", t3_i4: "9, 8, 7",
    t4_title: "Filtering Data", t4_text: "Filters show only certain rows that meet a condition.", t4_inst: "Put the words in order:", t4_h1: "Filter = selection.", t4_h2: "See only what matters!", t4_q: "What does a filter in Excel do?", t4_qa: "Shows only rows meeting a condition", t4_qb: "Deletes all data", t4_qc: "Changes font", t4_qd: "Prints the table",
    t4_w1: "A filter", t4_w2: "shows", t4_w3: "only", t4_w4: "certain", t4_w5: "data.", t4_w6: "", t4_w7: "",
    t5_title: "Chart Types", t5_text: "Bar charts compare values, pie charts show proportions, line charts show trends.", t5_inst: "Highlight the correct word:", t5_h1: "Which chart type for what?", t5_h2: "Bar, pie or line!", t5_q: "Which chart shows proportions best?", t5_qa: "Pie chart", t5_qb: "Bar chart", t5_qc: "Line chart", t5_qd: "Scatter chart",
    t5_tk1: "The", t5_tk2: "pie chart", t5_tk3: "shows", t5_tk4: "proportions", t5_tk5: "best.", t5_tk6: "",
  },
  hu: {
    explorer_title: "Informatika Felfedező K6-7",
    t1_title: "SZUM és ÁTLAG", t1_text: "A =SZUM()-mal összeadunk, az =ÁTLAG()-gal átlagot számolunk.", t1_inst: "Párosítsd össze:", t1_h1: "Melyik képlet mit csinál?", t1_h2: "SZUM vagy ÁTLAG?", t1_q: "Mit számol az =ÁTLAG(A1:A5)?", t1_qa: "A számok átlagát", t1_qb: "A számok összegét", t1_qc: "A legnagyobb számot", t1_qd: "A legkisebb számot",
    t1_l1: "=SZUM()", t1_r1: "Összeadás", t1_l2: "=ÁTLAG()", t1_r2: "Átlagérték", t1_l3: "=MAX()", t1_r3: "Legnagyobb érték",
    t2_title: "Feltételes formázás", t2_text: "A feltételes formázás automatikusan színezi a cellákat az értékük alapján.", t2_inst: "Töltsd ki a hiányt:", t2_h1: "Piros cella = rossz érték?", t2_h2: "Automatikus színezés!", t2_q: "Mit csinál a feltételes formázás?", t2_qa: "Az értékük alapján színezi a cellákat", t2_qb: "Összeadja a számokat", t2_qc: "Törli a szövegeket", t2_qd: "Fájlokat ment",
    t2_sent: "A feltételes formázás ___ a cellákat az értékük alapján.", t2_qa2: "színezi", t2_qb2: "törli", t2_qc2: "másolja", t2_qd2: "nyomtatja",
    t3_title: "Adatok rendezése", t3_text: "Az Excelben adatokat növekvő vagy csökkenő sorrendbe rendezhetünk.", t3_inst: "Válogasd szét:", t3_h1: "Növekvő vagy csökkenő?", t3_h2: "A-Z vagy Z-A!", t3_q: "Mit jelent a növekvő rendezés?", t3_qa: "Kicsiből nagyba (A-tól Z-ig)", t3_qb: "Nagyból kicsibe (Z-től A-ig)", t3_qc: "Véletlenszerű sorrend", t3_qd: "Szín szerint rendez",
    t3_bl1: "Növekvő", t3_bl2: "Csökkenő", t3_i1: "A, B, C", t3_i2: "Z, Y, X", t3_i3: "1, 2, 3", t3_i4: "9, 8, 7",
    t4_title: "Adatok szűrése", t4_text: "A szűrők csak bizonyos feltételnek megfelelő sorokat jelenítenek meg.", t4_inst: "Tedd sorrendbe a szavakat:", t4_h1: "Szűrő = kiválasztás.", t4_h2: "Csak a fontosat látni!", t4_q: "Mit csinál a szűrő az Excelben?", t4_qa: "Csak a feltételnek megfelelő sorokat mutatja", t4_qb: "Törli az összes adatot", t4_qc: "Betűtípust változtat", t4_qd: "Kinyomtatja a táblázatot",
    t4_w1: "A szűrő", t4_w2: "csak", t4_w3: "bizonyos", t4_w4: "adatokat", t4_w5: "mutat.", t4_w6: "", t4_w7: "",
    t5_title: "Diagramtípusok", t5_text: "Az oszlopdiagramok értékeket hasonlítanak, a kördiagramok arányokat, a vonaldiagramok tendenciákat mutatnak.", t5_inst: "Jelöld meg a helyes szót:", t5_h1: "Melyik diagramtípus mire?", t5_h2: "Oszlop, kör vagy vonal!", t5_q: "Melyik diagram mutatja legjobban az arányokat?", t5_qa: "Kördiagram", t5_qb: "Oszlopdiagram", t5_qc: "Vonaldiagram", t5_qd: "Pontdiagram",
    t5_tk1: "A", t5_tk2: "kördiagram", t5_tk3: "mutatja", t5_tk4: "legjobban", t5_tk5: "az arányokat.", t5_tk6: "",
  },
  ro: {
    explorer_title: "Explorator Informatică K6-7",
    t1_title: "SUM și AVERAGE", t1_text: "Cu =SUM() adunăm numere, cu =AVERAGE() calculăm media.", t1_inst: "Potrivește perechile:", t1_h1: "Ce formulă face ce?", t1_h2: "SUM sau AVERAGE?", t1_q: "Ce calculează =AVERAGE(A1:A5)?", t1_qa: "Media numerelor", t1_qb: "Suma numerelor", t1_qc: "Cel mai mare număr", t1_qd: "Cel mai mic număr",
    t1_l1: "=SUM()", t1_r1: "Adunare", t1_l2: "=AVERAGE()", t1_r2: "Medie", t1_l3: "=MAX()", t1_r3: "Valoare maximă",
    t2_title: "Formatare condiționată", t2_text: "Formatarea condiționată colorează automat celulele în funcție de valoarea lor.", t2_inst: "Completează spațiul liber:", t2_h1: "Celule roșii = valoare rea?", t2_h2: "Colorare automată!", t2_q: "Ce face formatarea condiționată?", t2_qa: "Colorează celulele în funcție de valoare", t2_qb: "Adună numere", t2_qc: "Șterge texte", t2_qd: "Salvează fișiere",
    t2_sent: "Formatarea condiționată ___ celulele automat în funcție de valoarea lor.", t2_qa2: "colorează", t2_qb2: "șterge", t2_qc2: "copiază", t2_qd2: "tipărește",
    t3_title: "Sortarea datelor", t3_text: "În Excel putem sorta datele în ordine crescătoare sau descrescătoare.", t3_inst: "Sortează în găleți:", t3_h1: "Crescător sau descrescător?", t3_h2: "A-Z sau Z-A!", t3_q: "Ce înseamnă sortare crescătoare?", t3_qa: "De la mic la mare (A la Z)", t3_qb: "De la mare la mic (Z la A)", t3_qc: "Ordine aleatorie", t3_qd: "Sortare după culoare",
    t3_bl1: "Crescător", t3_bl2: "Descrescător", t3_i1: "A, B, C", t3_i2: "Z, Y, X", t3_i3: "1, 2, 3", t3_i4: "9, 8, 7",
    t4_title: "Filtrarea datelor", t4_text: "Filtrele afișează doar rândurile care îndeplinesc o condiție.", t4_inst: "Pune cuvintele în ordine:", t4_h1: "Filtru = selecție.", t4_h2: "Vede doar ce contează!", t4_q: "Ce face un filtru în Excel?", t4_qa: "Afișează doar rândurile care îndeplinesc o condiție", t4_qb: "Șterge toate datele", t4_qc: "Schimbă fontul", t4_qd: "Tipărește tabelul",
    t4_w1: "Un filtru", t4_w2: "afișează", t4_w3: "doar", t4_w4: "anumite", t4_w5: "date.", t4_w6: "", t4_w7: "",
    t5_title: "Tipuri de diagrame", t5_text: "Diagramele cu bare compară valori, cele circulare arată proporții, cele liniare arată tendințele.", t5_inst: "Evidențiază cuvântul corect:", t5_h1: "Ce tip de diagramă pentru ce?", t5_h2: "Bară, cerc sau linie!", t5_q: "Care diagramă arată cel mai bine proporțiile?", t5_qa: "Diagrama circulară", t5_qb: "Diagrama cu bare", t5_qc: "Diagrama liniară", t5_qd: "Diagrama de dispersie",
    t5_tk1: "Diagrama", t5_tk2: "circulară", t5_tk3: "arată", t5_tk4: "proporțiile", t5_tk5: "cel mai bine.", t5_tk6: "",
  }
};

export const INFO_K6_I7_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "simple-icon", icon: "🧮", color: "#217346" },
    interactive: { type: "match-pairs", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", pairs: [{left:"t1_l1",right:"t1_r1"},{left:"t1_l2",right:"t1_r2"},{left:"t1_l3",right:"t1_r3"}] },
    quiz: { question: "t1_q", choices: ["t1_qa","t1_qb","t1_qc","t1_qd"], answer: "t1_qa" }
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "🎨", color: "#F44336" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2","t2_qb2","t2_qc2","t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa","t2_qb","t2_qc","t2_qd"], answer: "t2_qa" }
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "simple-icon", icon: "↕️", color: "#2196F3" },
    interactive: { type: "drag-to-bucket", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", buckets: [{id:"b1",label:"t3_bl1"},{id:"b2",label:"t3_bl2"}], items: [{text:"t3_i1",bucketId:"b1"},{text:"t3_i2",bucketId:"b2"},{text:"t3_i3",bucketId:"b1"},{text:"t3_i4",bucketId:"b2"}] },
    quiz: { question: "t3_q", choices: ["t3_qa","t3_qb","t3_qc","t3_qd"], answer: "t3_qa" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "🔽", color: "#9C27B0" },
    interactive: { type: "word-order", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", words: ["t4_w1","t4_w2","t4_w3","t4_w4","t4_w5"], correctOrder: [0,1,2,3,4] },
    quiz: { question: "t4_q", choices: ["t4_qa","t4_qb","t4_qc","t4_qd"], answer: "t4_qa" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "🥧", color: "#FF9800" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5"], correctIndices: [1] },
    quiz: { question: "t5_q", choices: ["t5_qa","t5_qb","t5_qc","t5_qd"], answer: "t5_qa" }
  }
];

