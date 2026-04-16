// lib/explorerPools/informatikaK7_i4.ts
import type { PoolTopicDef } from "./types";

export const INFO_K7_I4_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Informatik Entdecker K7-4",
    t1_title: "Variablen in Python", t1_text: "Eine Variable speichert einen Wert. In Python: alter = 13 oder name = 'Anna'.", t1_inst: "Ordne die Paare zu:", t1_h1: "Welcher Datentyp ist was?", t1_h2: "Zahl, Text oder Wahrheitswert?", t1_q: "Was ist eine Variable?", t1_qa: "Ein benannter Speicherplatz fuer Werte", t1_qb: "Eine Schleife", t1_qc: "Eine Funktion", t1_qd: "Ein Kommentar",
    t1_l1: "Integer", t1_r1: "Ganze Zahl", t1_l2: "String", t1_r2: "Text", t1_l3: "Boolean", t1_r3: "Wahr/Falsch",
    t2_title: "print() Funktion", t2_text: "Mit print() geben wir Text oder Werte in Python auf dem Bildschirm aus.", t2_inst: "Fuelle die Luecke aus:", t2_h1: "print() = Ausgabe.", t2_h2: "print('Hallo') zeigt Hallo.", t2_q: "Was macht print() in Python?", t2_qa: "Gibt Text oder Werte aus", t2_qb: "Liest Benutzereingaben", t2_qc: "Loescht Variablen", t2_qd: "Beendet das Programm",
    t2_sent: "Mit ___ geben wir Text auf dem Bildschirm aus.", t2_qa2: "print()", t2_qb2: "input()", t2_qc2: "delete()", t2_qd2: "end()",
    t3_title: "input() Funktion", t3_text: "input() liest eine Eingabe des Benutzers ein und gibt sie als String zurueck.", t3_inst: "Sortiere in die Eimer:", t3_h1: "Eingabe oder Ausgabe?", t3_h2: "input() liest, print() schreibt!", t3_q: "Was macht input() in Python?", t3_qa: "Liest eine Benutzereingabe", t3_qb: "Gibt Text aus", t3_qc: "Loescht eine Variable", t3_qd: "Beendet das Programm",
    t3_bl1: "Eingabe", t3_bl2: "Ausgabe", t3_i1: "input()", t3_i2: "print()", t3_i3: "name = input()", t3_i4: "print(name)",
    t4_title: "Strings (Zeichenketten)", t4_text: "Strings sind Texte in Python, in Anfuehrungszeichen: 'Hallo' oder \"Welt\".", t4_inst: "Bringe die Woerter in Ordnung:", t4_h1: "Strings in Anfuehrungszeichen.", t4_h2: "Einzel oder doppelt!", t4_q: "Wie schreibt man einen String in Python?", t4_qa: "In Anfuehrungszeichen: Hallo", t4_qb: "In spitzen Klammern: <Hallo>", t4_qc: "In eckigen Klammern: [Hallo]", t4_qd: "In runden Klammern: (Hallo)",
    t4_w1: "Ein", t4_w2: "String", t4_w3: "steht", t4_w4: "in Anfuehrungszeichen.", t4_w5: "", t4_w6: "", t4_w7: "",
    t5_title: "Integer (Ganzzahlen)", t5_text: "Integer sind ganze Zahlen in Python ohne Anfuehrungszeichen: alter = 13.", t5_inst: "Markiere das richtige Wort:", t5_h1: "Integer = ganze Zahl, kein Text.", t5_h2: "13 ist ein Integer!", t5_q: "Was ist ein Integer in Python?", t5_qa: "Eine ganze Zahl", t5_qb: "Ein Text in Anfuehrungszeichen", t5_qc: "Ein Wahrheitswert", t5_qd: "Eine Kommazahl",
    t5_tk1: "Integer", t5_tk2: "ist", t5_tk3: "eine", t5_tk4: "ganze Zahl", t5_tk5: "in Python.", t5_tk6: "",
  },
  en: {
    explorer_title: "Informatics Explorer K7-4",
    t1_title: "Variables in Python", t1_text: "A variable stores a value. In Python: age = 13 or name = 'Anna'.", t1_inst: "Match the pairs:", t1_h1: "Which data type is what?", t1_h2: "Number, text or boolean?", t1_q: "What is a variable?", t1_qa: "A named storage space for values", t1_qb: "A loop", t1_qc: "A function", t1_qd: "A comment",
    t1_l1: "Integer", t1_r1: "Whole number", t1_l2: "String", t1_r2: "Text", t1_l3: "Boolean", t1_r3: "True/False",
    t2_title: "print() Function", t2_text: "With print() we output text or values to the screen in Python.", t2_inst: "Fill in the blank:", t2_h1: "print() = output.", t2_h2: "print('Hello') shows Hello.", t2_q: "What does print() do in Python?", t2_qa: "Outputs text or values", t2_qb: "Reads user input", t2_qc: "Deletes variables", t2_qd: "Ends the program",
    t2_sent: "With ___ we output text to the screen.", t2_qa2: "print()", t2_qb2: "input()", t2_qc2: "delete()", t2_qd2: "end()",
    t3_title: "input() Function", t3_text: "input() reads a user input and returns it as a string.", t3_inst: "Sort into buckets:", t3_h1: "Input or output?", t3_h2: "input() reads, print() writes!", t3_q: "What does input() do in Python?", t3_qa: "Reads a user input", t3_qb: "Outputs text", t3_qc: "Deletes a variable", t3_qd: "Ends the program",
    t3_bl1: "Input", t3_bl2: "Output", t3_i1: "input()", t3_i2: "print()", t3_i3: "name = input()", t3_i4: "print(name)",
    t4_title: "Strings", t4_text: "Strings are texts in Python written in quotation marks: 'Hello' or \"World\".", t4_inst: "Put the words in order:", t4_h1: "Strings in quotation marks.", t4_h2: "Single or double quotes!", t4_q: "How do you write a string in Python?", t4_qa: "In quotation marks: Hello", t4_qb: "In angle brackets: <Hello>", t4_qc: "In square brackets: [Hello]", t4_qd: "In round brackets: (Hello)",
    t4_w1: "A", t4_w2: "string", t4_w3: "is", t4_w4: "in quotation marks.", t4_w5: "", t4_w6: "", t4_w7: "",
    t5_title: "Integer (Whole Numbers)", t5_text: "Integers are whole numbers in Python without quotation marks: age = 13.", t5_inst: "Highlight the correct word:", t5_h1: "Integer = whole number, not text.", t5_h2: "13 is an integer!", t5_q: "What is an integer in Python?", t5_qa: "A whole number", t5_qb: "A text in quotation marks", t5_qc: "A boolean value", t5_qd: "A decimal number",
    t5_tk1: "Integer", t5_tk2: "is", t5_tk3: "a", t5_tk4: "whole number", t5_tk5: "in Python.", t5_tk6: "",
  },
  hu: {
    explorer_title: "Informatika Felfedező K7-4",
    t1_title: "Változók Pythonban", t1_text: "A változó értékeket tárol. Pythonban: kor = 13 vagy nev = 'Anna'.", t1_inst: "Párosítsd össze:", t1_h1: "Melyik adattípus mi?", t1_h2: "Szám, szöveg vagy logikai?", t1_q: "Mi a változó?", t1_qa: "Értékek elnevezett tárolóhelye", t1_qb: "Egy ciklus", t1_qc: "Egy függvény", t1_qd: "Egy megjegyzés",
    t1_l1: "Integer", t1_r1: "Egész szám", t1_l2: "String", t1_r2: "Szöveg", t1_l3: "Boolean", t1_r3: "Igaz/Hamis",
    t2_title: "print() függvény", t2_text: "A print() függvénnyel szöveget vagy értéket írunk ki a képernyőre Pythonban.", t2_inst: "Töltsd ki a hiányt:", t2_h1: "print() = kimenet.", t2_h2: "print('Helló') megjeleníti Helló.", t2_q: "Mit csinál a print() Pythonban?", t2_qa: "Szöveget vagy értéket ír ki", t2_qb: "Felhasználói bevitelt olvas", t2_qc: "Változókat töröl", t2_qd: "Befejezi a programot",
    t2_sent: "A ___ segítségével szöveget írunk ki a képernyőre.", t2_qa2: "print()", t2_qb2: "input()", t2_qc2: "delete()", t2_qd2: "end()",
    t3_title: "input() függvény", t3_text: "Az input() beolvassa a felhasználó bevitelét és stringként adja vissza.", t3_inst: "Válogasd szét:", t3_h1: "Bevitel vagy kimenet?", t3_h2: "input() olvas, print() ír!", t3_q: "Mit csinál az input() Pythonban?", t3_qa: "Beolvassa a felhasználói bevitelt", t3_qb: "Szöveget ír ki", t3_qc: "Változót töröl", t3_qd: "Befejezi a programot",
    t3_bl1: "Bevitel", t3_bl2: "Kimenet", t3_i1: "input()", t3_i2: "print()", t3_i3: "nev = input()", t3_i4: "print(nev)",
    t4_title: "Stringek (szövegek)", t4_text: "A stringek szövegek Pythonban, idézőjel között: 'Helló' vagy \"Világ\".", t4_inst: "Tedd sorrendbe a szavakat:", t4_h1: "Stringek idézőjelben.", t4_h2: "Egyszeres vagy dupla!", t4_q: "Hogyan írunk stringet Pythonban?", t4_qa: "Idézőjelben: Helló", t4_qb: "Csúcsos zárójelben: <Helló>", t4_qc: "Szögletes zárójelben: [Helló]", t4_qd: "Kerek zárójelben: (Helló)",
    t4_w1: "A string", t4_w2: "idézőjel", t4_w3: "között", t4_w4: "áll.", t4_w5: "", t4_w6: "", t4_w7: "",
    t5_title: "Integer (egész számok)", t5_text: "Az integer egész számok Pythonban, idézőjel nélkül: kor = 13.", t5_inst: "Jelöld meg a helyes szót:", t5_h1: "Integer = egész szám, nem szöveg.", t5_h2: "A 13 egy integer!", t5_q: "Mi az integer Pythonban?", t5_qa: "Egy egész szám", t5_qb: "Idézőjelben lévő szöveg", t5_qc: "Logikai érték", t5_qd: "Tizedes szám",
    t5_tk1: "Az integer", t5_tk2: "egész", t5_tk3: "szám", t5_tk4: "Pythonban.", t5_tk5: "", t5_tk6: "",
  },
  ro: {
    explorer_title: "Explorator Informatică K7-4",
    t1_title: "Variabile în Python", t1_text: "O variabilă stochează o valoare. În Python: varsta = 13 sau nume = 'Anna'.", t1_inst: "Potrivește perechile:", t1_h1: "Ce tip de date este ce?", t1_h2: "Număr, text sau boolean?", t1_q: "Ce este o variabilă?", t1_qa: "Un spațiu de stocare cu nume pentru valori", t1_qb: "O buclă", t1_qc: "O funcție", t1_qd: "Un comentariu",
    t1_l1: "Integer", t1_r1: "Număr întreg", t1_l2: "String", t1_r2: "Text", t1_l3: "Boolean", t1_r3: "Adevărat/Fals",
    t2_title: "Funcția print()", t2_text: "Cu print() afișăm text sau valori pe ecran în Python.", t2_inst: "Completează spațiul liber:", t2_h1: "print() = ieșire.", t2_h2: "print('Salut') arată Salut.", t2_q: "Ce face print() în Python?", t2_qa: "Afișează text sau valori", t2_qb: "Citește input-ul utilizatorului", t2_qc: "Șterge variabile", t2_qd: "Termină programul",
    t2_sent: "Cu ___ afișăm text pe ecran.", t2_qa2: "print()", t2_qb2: "input()", t2_qc2: "delete()", t2_qd2: "end()",
    t3_title: "Funcția input()", t3_text: "input() citește introducerea unui utilizator și o returnează ca string.", t3_inst: "Sortează în găleți:", t3_h1: "Intrare sau ieșire?", t3_h2: "input() citește, print() scrie!", t3_q: "Ce face input() în Python?", t3_qa: "Citește introducerea utilizatorului", t3_qb: "Afișează text", t3_qc: "Șterge o variabilă", t3_qd: "Termină programul",
    t3_bl1: "Intrare", t3_bl2: "Ieșire", t3_i1: "input()", t3_i2: "print()", t3_i3: "nume = input()", t3_i4: "print(nume)",
    t4_title: "Șiruri de caractere (Strings)", t4_text: "Șirurile sunt texte în Python scrise între ghilimele: 'Salut' sau \"Lume\".", t4_inst: "Pune cuvintele în ordine:", t4_h1: "Șiruri între ghilimele.", t4_h2: "Simple sau duble!", t4_q: "Cum scriem un string în Python?", t4_qa: "Între ghilimele: Salut", t4_qb: "Între paranteze unghiulare: <Salut>", t4_qc: "Între paranteze drepte: [Salut]", t4_qd: "Între paranteze rotunde: (Salut)",
    t4_w1: "Un string", t4_w2: "stă", t4_w3: "între", t4_w4: "ghilimele.", t4_w5: "", t4_w6: "", t4_w7: "",
    t5_title: "Integer (numere întregi)", t5_text: "Întregii sunt numere întregi în Python fără ghilimele: varsta = 13.", t5_inst: "Evidențiază cuvântul corect:", t5_h1: "Integer = număr întreg, nu text.", t5_h2: "13 este un integer!", t5_q: "Ce este un integer în Python?", t5_qa: "Un număr întreg", t5_qb: "Text între ghilimele", t5_qc: "O valoare booleană", t5_qd: "Un număr zecimal",
    t5_tk1: "Integer", t5_tk2: "este", t5_tk3: "un", t5_tk4: "număr întreg", t5_tk5: "în Python.", t5_tk6: "",
  }
};

export const INFO_K7_I4_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "simple-icon", icon: "🐍", color: "#3776AB" },
    interactive: { type: "match-pairs", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", pairs: [{left:"t1_l1",right:"t1_r1"},{left:"t1_l2",right:"t1_r2"},{left:"t1_l3",right:"t1_r3"}] },
    quiz: { question: "t1_q", choices: ["t1_qa","t1_qb","t1_qc","t1_qd"], answer: "t1_qa" }
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "🖨️", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2","t2_qb2","t2_qc2","t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa","t2_qb","t2_qc","t2_qd"], answer: "t2_qa" }
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "simple-icon", icon: "⌨️", color: "#FF9800" },
    interactive: { type: "drag-to-bucket", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", buckets: [{id:"b1",label:"t3_bl1"},{id:"b2",label:"t3_bl2"}], items: [{text:"t3_i1",bucketId:"b1"},{text:"t3_i2",bucketId:"b2"},{text:"t3_i3",bucketId:"b1"},{text:"t3_i4",bucketId:"b2"}] },
    quiz: { question: "t3_q", choices: ["t3_qa","t3_qb","t3_qc","t3_qd"], answer: "t3_qa" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "text-bubbles", items: [{text:"str",bg:"#9C27B0",color:"#fff"},{text:"int",bg:"#2196F3",color:"#fff"}] },
    interactive: { type: "word-order", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", words: ["t4_w1","t4_w2","t4_w3","t4_w4"], correctOrder: [0,1,2,3] },
    quiz: { question: "t4_q", choices: ["t4_qa","t4_qb","t4_qc","t4_qd"], answer: "t4_qa" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "🔢", color: "#F44336" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5"], correctIndices: [0,3] },
    quiz: { question: "t5_q", choices: ["t5_qa","t5_qb","t5_qc","t5_qd"], answer: "t5_qa" }
  }
];
