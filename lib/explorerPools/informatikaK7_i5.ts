// lib/explorerPools/informatikaK7_i5.ts
import type { PoolTopicDef } from "./types";

export const INFO_K7_I5_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Informatik Entdecker K7-5",
    t1_title: "if-else Verzweigung", t1_text: "if-else prueft eine Bedingung: ist sie wahr, fuehrt Python den if-Block aus, sonst den else-Block.", t1_inst: "Ordne die Paare zu:", t1_h1: "Wann if, wann else?", t1_h2: "Wahr oder Falsch entscheidet!", t1_q: "Wann wird der else-Block ausgefuehrt?", t1_qa: "Wenn die if-Bedingung falsch ist", t1_qb: "Wenn die Bedingung wahr ist", t1_qc: "Immer", t1_qd: "Nie",
    t1_l1: "if", t1_r1: "Wenn wahr", t1_l2: "else", t1_r2: "Wenn falsch", t1_l3: "elif", t1_r3: "Sonst wenn",
    t2_title: "while-Schleife", t2_text: "while wiederholt einen Block, solange eine Bedingung wahr ist.", t2_inst: "Fuelle die Luecke aus:", t2_h1: "while = solange wahr.", t2_h2: "Vorsicht: Endlosschleife!", t2_q: "Wann stoppt eine while-Schleife?", t2_qa: "Wenn die Bedingung falsch wird", t2_qb: "Nach 10 Wiederholungen immer", t2_qc: "Sofort", t2_qd: "Nie",
    t2_sent: "Eine while-Schleife laeuft, solange die Bedingung ___ ist.", t2_qa2: "wahr", t2_qb2: "falsch", t2_qc2: "leer", t2_qd2: "gross",
    t3_title: "for-Schleife", t3_text: "for iteriert ueber eine Folge von Elementen (Liste, Range).", t3_inst: "Sortiere in die Eimer:", t3_h1: "while oder for?", t3_h2: "Bekannte Anzahl = for!", t3_q: "Fuer was ist die for-Schleife geeignet?", t3_qa: "Iteration ueber bekannte Elemente", t3_qb: "Nur wenn Bedingung unbekannt", t3_qc: "Nur fuer Zahlen", t3_qd: "Nur fuer Text",
    t3_bl1: "for-Schleife", t3_bl2: "while-Schleife", t3_i1: "for i in range(10):", t3_i2: "while x > 0:", t3_i3: "for item in liste:", t3_i4: "while True:",
    t4_title: "break und continue", t4_text: "break beendet eine Schleife sofort, continue springt zur naechsten Iteration.", t4_inst: "Bringe die Woerter in Ordnung:", t4_h1: "break = raus aus Schleife.", t4_h2: "continue = naechste Runde!", t4_q: "Was macht break in einer Schleife?", t4_qa: "Beendet die Schleife sofort", t4_qb: "Startet die Schleife neu", t4_qc: "Ueberspringt eine Iteration", t4_qd: "Pausiert die Schleife",
    t4_w1: "break", t4_w2: "beendet", t4_w3: "die", t4_w4: "Schleife", t4_w5: "sofort.", t4_w6: "", t4_w7: "",
    t5_title: "Schachtelung und Einrueckung", t5_text: "Python verwendet Einrueckung (Leerzeichen) statt Klammern, um Bloecke zu definieren.", t5_inst: "Markiere das richtige Wort:", t5_h1: "Einrueckung ist Pflicht!", t5_h2: "4 Leerzeichen oder Tab.", t5_q: "Wie definiert Python Code-Bloecke?", t5_qa: "Durch Einrueckung (Indentation)", t5_qb: "Durch geschweifte Klammern", t5_qc: "Durch Semikolons", t5_qd: "Durch Kommentare",
    t5_tk1: "Python", t5_tk2: "verwendet", t5_tk3: "Einrueckung", t5_tk4: "fuer Code-Bloecke.", t5_tk5: "", t5_tk6: "",
  },
  en: {
    explorer_title: "Informatics Explorer K7-5",
    t1_title: "if-else Branch", t1_text: "if-else checks a condition: if true, Python runs the if-block, otherwise the else-block.", t1_inst: "Match the pairs:", t1_h1: "When if, when else?", t1_h2: "True or False decides!", t1_q: "When is the else-block executed?", t1_qa: "When the if condition is false", t1_qb: "When the condition is true", t1_qc: "Always", t1_qd: "Never",
    t1_l1: "if", t1_r1: "When true", t1_l2: "else", t1_r2: "When false", t1_l3: "elif", t1_r3: "Otherwise if",
    t2_title: "while Loop", t2_text: "while repeats a block as long as a condition is true.", t2_inst: "Fill in the blank:", t2_h1: "while = as long as true.", t2_h2: "Careful: infinite loop!", t2_q: "When does a while loop stop?", t2_qa: "When the condition becomes false", t2_qb: "Always after 10 repetitions", t2_qc: "Immediately", t2_qd: "Never",
    t2_sent: "A while loop runs as long as the condition is ___.", t2_qa2: "true", t2_qb2: "false", t2_qc2: "empty", t2_qd2: "large",
    t3_title: "for Loop", t3_text: "for iterates over a sequence of elements (list, range).", t3_inst: "Sort into buckets:", t3_h1: "while or for?", t3_h2: "Known count = for!", t3_q: "What is the for loop suited for?", t3_qa: "Iteration over known elements", t3_qb: "Only when condition unknown", t3_qc: "Only for numbers", t3_qd: "Only for text",
    t3_bl1: "for loop", t3_bl2: "while loop", t3_i1: "for i in range(10):", t3_i2: "while x > 0:", t3_i3: "for item in list:", t3_i4: "while True:",
    t4_title: "break and continue", t4_text: "break ends a loop immediately, continue jumps to the next iteration.", t4_inst: "Put the words in order:", t4_h1: "break = exit loop.", t4_h2: "continue = next round!", t4_q: "What does break do in a loop?", t4_qa: "Ends the loop immediately", t4_qb: "Restarts the loop", t4_qc: "Skips one iteration", t4_qd: "Pauses the loop",
    t4_w1: "break", t4_w2: "ends", t4_w3: "the", t4_w4: "loop", t4_w5: "immediately.", t4_w6: "", t4_w7: "",
    t5_title: "Nesting and Indentation", t5_text: "Python uses indentation (spaces) instead of braces to define blocks.", t5_inst: "Highlight the correct word:", t5_h1: "Indentation is mandatory!", t5_h2: "4 spaces or Tab.", t5_q: "How does Python define code blocks?", t5_qa: "By indentation", t5_qb: "By curly braces", t5_qc: "By semicolons", t5_qd: "By comments",
    t5_tk1: "Python", t5_tk2: "uses", t5_tk3: "indentation", t5_tk4: "for code blocks.", t5_tk5: "", t5_tk6: "",
  },
  hu: {
    explorer_title: "Informatika Felfedező K7-5",
    t1_title: "if-else elágazás", t1_text: "Az if-else megvizsgál egy feltételt: ha igaz, az if-blokkot futtatja, különben az else-blokkot.", t1_inst: "Párosítsd össze:", t1_h1: "Mikor if, mikor else?", t1_h2: "Igaz vagy hamis dönt!", t1_q: "Mikor fut le az else-blokk?", t1_qa: "Ha az if feltétel hamis", t1_qb: "Ha a feltétel igaz", t1_qc: "Mindig", t1_qd: "Soha",
    t1_l1: "if", t1_r1: "Ha igaz", t1_l2: "else", t1_r2: "Ha hamis", t1_l3: "elif", t1_r3: "Különben ha",
    t2_title: "while ciklus", t2_text: "A while ismételget egy blokkot, amíg a feltétel igaz.", t2_inst: "Töltsd ki a hiányt:", t2_h1: "while = amíg igaz.", t2_h2: "Vigyázz: végtelen ciklus!", t2_q: "Mikor áll meg a while ciklus?", t2_qa: "Ha a feltétel hamisra vált", t2_qb: "Mindig 10 ismétlés után", t2_qc: "Azonnal", t2_qd: "Soha",
    t2_sent: "A while ciklus fut, amíg a feltétel ___ marad.", t2_qa2: "igaz", t2_qb2: "hamis", t2_qc2: "üres", t2_qd2: "nagy",
    t3_title: "for ciklus", t3_text: "A for elemek sorozatán iterál (lista, range).", t3_inst: "Válogasd szét:", t3_h1: "while vagy for?", t3_h2: "Ismert darabszám = for!", t3_q: "Mire alkalmas a for ciklus?", t3_qa: "Ismert elemek bejárására", t3_qb: "Csak ha ismeretlen a feltétel", t3_qc: "Csak számokhoz", t3_qd: "Csak szöveghez",
    t3_bl1: "for ciklus", t3_bl2: "while ciklus", t3_i1: "for i in range(10):", t3_i2: "while x > 0:", t3_i3: "for elem in lista:", t3_i4: "while True:",
    t4_title: "break és continue", t4_text: "A break azonnal befejezi a ciklust, a continue a következő iterációra ugrik.", t4_inst: "Tedd sorrendbe a szavakat:", t4_h1: "break = kilép a ciklusból.", t4_h2: "continue = következő kör!", t4_q: "Mit csinál a break egy ciklusban?", t4_qa: "Azonnal befejezi a ciklust", t4_qb: "Újraindítja a ciklust", t4_qc: "Kihagya egy iterációt", t4_qd: "Szünetelteti a ciklust",
    t4_w1: "A break", t4_w2: "azonnal", t4_w3: "befejezi", t4_w4: "a ciklust.", t4_w5: "", t4_w6: "", t4_w7: "",
    t5_title: "Behúzás és beágyazás", t5_text: "A Python behúzást (szóközöket) használ zárójelek helyett a blokkok meghatározásához.", t5_inst: "Jelöld meg a helyes szót:", t5_h1: "A behúzás kötelező!", t5_h2: "4 szóköz vagy Tab.", t5_q: "Hogyan határozza meg a Python a kódblokkokat?", t5_qa: "Behúzással (indentation)", t5_qb: "Kapcsos zárójelekkel", t5_qc: "Pontosvesszőkkel", t5_qd: "Megjegyzésekkel",
    t5_tk1: "A Python", t5_tk2: "behúzást", t5_tk3: "használ", t5_tk4: "a kódblokkokhoz.", t5_tk5: "", t5_tk6: "",
  },
  ro: {
    explorer_title: "Explorator Informatică K7-5",
    t1_title: "Ramificarea if-else", t1_text: "if-else verifică o condiție: dacă e adevărată, Python rulează blocul if, altfel blocul else.", t1_inst: "Potrivește perechile:", t1_h1: "Când if, când else?", t1_h2: "Adevărat sau Fals decide!", t1_q: "Când se execută blocul else?", t1_qa: "Când condiția if este falsă", t1_qb: "Când condiția este adevărată", t1_qc: "Întotdeauna", t1_qd: "Niciodată",
    t1_l1: "if", t1_r1: "Dacă adevărat", t1_l2: "else", t1_r2: "Dacă fals", t1_l3: "elif", t1_r3: "Altfel dacă",
    t2_title: "Bucla while", t2_text: "while repetă un bloc atât timp cât o condiție este adevărată.", t2_inst: "Completează spațiul liber:", t2_h1: "while = atât timp cât adevărat.", t2_h2: "Atenție: buclă infinită!", t2_q: "Când se oprește o buclă while?", t2_qa: "Când condiția devine falsă", t2_qb: "Întotdeauna după 10 repetiții", t2_qc: "Imediat", t2_qd: "Niciodată",
    t2_sent: "O buclă while rulează atât timp cât condiția este ___.", t2_qa2: "adevărată", t2_qb2: "falsă", t2_qc2: "goală", t2_qd2: "mare",
    t3_title: "Bucla for", t3_text: "for iterează peste o secvență de elemente (listă, range).", t3_inst: "Sortează în găleți:", t3_h1: "while sau for?", t3_h2: "Număr cunoscut = for!", t3_q: "Pentru ce este potrivită bucla for?", t3_qa: "Iterarea peste elemente cunoscute", t3_qb: "Doar când condiția e necunoscută", t3_qc: "Doar pentru numere", t3_qd: "Doar pentru text",
    t3_bl1: "Bucla for", t3_bl2: "Bucla while", t3_i1: "for i in range(10):", t3_i2: "while x > 0:", t3_i3: "for elem in lista:", t3_i4: "while True:",
    t4_title: "break și continue", t4_text: "break termină imediat o buclă, continue sare la iterația următoare.", t4_inst: "Pune cuvintele în ordine:", t4_h1: "break = iese din buclă.", t4_h2: "continue = runda următoare!", t4_q: "Ce face break într-o buclă?", t4_qa: "Termină imediat bucla", t4_qb: "Repornește bucla", t4_qc: "Sare o iterație", t4_qd: "Oprește bucla temporar",
    t4_w1: "break", t4_w2: "termină", t4_w3: "bucla", t4_w4: "imediat.", t4_w5: "", t4_w6: "", t4_w7: "",
    t5_title: "Indentare și cuibărire", t5_text: "Python folosește indentarea (spații) în loc de acolade pentru a defini blocuri.", t5_inst: "Evidențiază cuvântul corect:", t5_h1: "Indentarea este obligatorie!", t5_h2: "4 spații sau Tab.", t5_q: "Cum definește Python blocurile de cod?", t5_qa: "Prin indentare", t5_qb: "Prin acolade", t5_qc: "Prin punct și virgulă", t5_qd: "Prin comentarii",
    t5_tk1: "Python", t5_tk2: "folosește", t5_tk3: "indentarea", t5_tk4: "pentru blocuri de cod.", t5_tk5: "", t5_tk6: "",
  }
};

export const INFO_K7_I5_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "simple-icon", icon: "🔀", color: "#9C27B0" },
    interactive: { type: "match-pairs", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", pairs: [{left:"t1_l1",right:"t1_r1"},{left:"t1_l2",right:"t1_r2"},{left:"t1_l3",right:"t1_r3"}] },
    quiz: { question: "t1_q", choices: ["t1_qa","t1_qb","t1_qc","t1_qd"], answer: "t1_qa" }
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "🔄", color: "#2196F3" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2","t2_qb2","t2_qc2","t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa","t2_qb","t2_qc","t2_qd"], answer: "t2_qa" }
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "simple-icon", icon: "🔁", color: "#4CAF50" },
    interactive: { type: "drag-to-bucket", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", buckets: [{id:"b1",label:"t3_bl1"},{id:"b2",label:"t3_bl2"}], items: [{text:"t3_i1",bucketId:"b1"},{text:"t3_i2",bucketId:"b2"},{text:"t3_i3",bucketId:"b1"},{text:"t3_i4",bucketId:"b2"}] },
    quiz: { question: "t3_q", choices: ["t3_qa","t3_qb","t3_qc","t3_qd"], answer: "t3_qa" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "⛔", color: "#F44336" },
    interactive: { type: "word-order", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", words: ["t4_w1","t4_w2","t4_w3","t4_w4"], correctOrder: [0,1,2,3] },
    quiz: { question: "t4_q", choices: ["t4_qa","t4_qb","t4_qc","t4_qd"], answer: "t4_qa" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "↩️", color: "#607D8B" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4"], correctIndices: [2] },
    quiz: { question: "t5_q", choices: ["t5_qa","t5_qb","t5_qc","t5_qd"], answer: "t5_qa" }
  }
];
