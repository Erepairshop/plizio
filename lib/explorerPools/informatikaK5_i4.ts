// lib/explorerPools/informatikaK5_i4.ts
import type { PoolTopicDef } from "./types";

export const INFO_K5_I4_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Informatik Entdecker 4",
    t1_title: "Dateiendungen", t1_text: "Jede Datei hat eine Endung, die zeigt, welcher Typ sie ist (.txt, .jpg, .mp3).", t1_inst: "Ordne die Paare zu:", t1_h1: "Welche Endung gehört wozu?", t1_h2: "Bild, Text oder Musik?", t1_q: "Welche Endung haben Fotos meistens?", t1_qa: ".jpg", t1_qb: ".txt", t1_qc: ".mp3", t1_qd: ".exe",
    t1_l1: ".txt", t1_r1: "Textdatei", t1_l2: ".jpg", t1_r2: "Bild", t1_l3: ".mp3", t1_r3: "Musik",
    t2_title: "Ordner und Verzeichnisse", t2_text: "Ordner helfen uns, Dateien zu ordnen – wie Mappen im Schulrucksack.", t2_inst: "Fülle die Lücke aus:", t2_h1: "Ordner halten Ordnung.", t2_h2: "Wie in der Schule!", t2_q: "Was ist ein Ordner?", t2_qa: "Ein Behälter für Dateien", t2_qb: "Ein Programm", t2_qc: "Eine Datei", t2_qd: "Ein Drucker",
    t2_sent: "Dateien werden in ___ gespeichert.", t2_qa2: "Ordnern", t2_qb2: "Programmen", t2_qc2: "Druckern", t2_qd2: "Bildschirmen",
    t3_title: "Datei kopieren", t3_text: "Beim Kopieren bleibt das Original und es entsteht eine Kopie.", t3_inst: "Sortiere in die Eimer:", t3_h1: "Original oder Kopie?", t3_h2: "Was passiert beim Kopieren?", t3_q: "Was passiert beim Kopieren einer Datei?", t3_qa: "Original bleibt, Kopie entsteht", t3_qb: "Original wird gelöscht", t3_qc: "Datei wird geöffnet", t3_qd: "Datei wird gedruckt",
    t3_bl1: "Vor dem Kopieren", t3_bl2: "Nach dem Kopieren", t3_i1: "1 Datei", t3_i2: "2 Dateien", t3_i3: "Original", t3_i4: "Kopie",
    t4_title: "Datei löschen", t4_text: "Gelöschte Dateien kommen zuerst in den Papierkorb und können wiederhergestellt werden.", t4_inst: "Bringe die Wörter in Ordnung:", t4_h1: "Papierkorb = Zwischenstufe", t4_h2: "Erst prüfen, dann löschen!", t4_q: "Wohin geht eine gelöschte Datei zuerst?", t4_qa: "Papierkorb", t4_qb: "Internet", t4_qc: "Drucker", t4_qd: "Ordner",
    t4_w1: "Gelöschte", t4_w2: "Dateien", t4_w3: "kommen", t4_w4: "in", t4_w5: "den", t4_w6: "Papierkorb.", t4_w7: "",
    t5_title: "Der Papierkorb", t5_text: "Der Papierkorb hält gelöschte Dateien, bis man ihn leert.", t5_inst: "Markiere das richtige Wort:", t5_h1: "Papierkorb = sicherer Puffer.", t5_h2: "Leeren = dauerhaft weg!", t5_q: "Was passiert wenn man den Papierkorb leert?", t5_qa: "Dateien sind dauerhaft weg", t5_qb: "Dateien kommen zurück", t5_qc: "Computer startet neu", t5_qd: "Dateien werden kopiert",
    t5_tk1: "Der", t5_tk2: "Papierkorb", t5_tk3: "schützt", t5_tk4: "vor", t5_tk5: "versehentlichem", t5_tk6: "Löschen.",
  },
  en: {
    explorer_title: "Informatics Explorer 4",
    t1_title: "File Extensions", t1_text: "Every file has an extension that shows what type it is (.txt, .jpg, .mp3).", t1_inst: "Match the pairs:", t1_h1: "Which extension belongs where?", t1_h2: "Image, text or music?", t1_q: "Which extension do photos usually have?", t1_qa: ".jpg", t1_qb: ".txt", t1_qc: ".mp3", t1_qd: ".exe",
    t1_l1: ".txt", t1_r1: "Text file", t1_l2: ".jpg", t1_r2: "Image", t1_l3: ".mp3", t1_r3: "Music",
    t2_title: "Folders and Directories", t2_text: "Folders help us organize files – like binders in a school bag.", t2_inst: "Fill in the blank:", t2_h1: "Folders keep order.", t2_h2: "Like at school!", t2_q: "What is a folder?", t2_qa: "A container for files", t2_qb: "A program", t2_qc: "A file", t2_qd: "A printer",
    t2_sent: "Files are stored in ___.", t2_qa2: "folders", t2_qb2: "programs", t2_qc2: "printers", t2_qd2: "screens",
    t3_title: "Copying a File", t3_text: "When copying, the original stays and a copy is created.", t3_inst: "Sort into buckets:", t3_h1: "Original or copy?", t3_h2: "What happens when copying?", t3_q: "What happens when you copy a file?", t3_qa: "Original stays, copy is created", t3_qb: "Original is deleted", t3_qc: "File is opened", t3_qd: "File is printed",
    t3_bl1: "Before copying", t3_bl2: "After copying", t3_i1: "1 file", t3_i2: "2 files", t3_i3: "Original", t3_i4: "Copy",
    t4_title: "Deleting a File", t4_text: "Deleted files first go to the Recycle Bin and can be restored.", t4_inst: "Put the words in order:", t4_h1: "Recycle Bin = intermediate step", t4_h2: "Check first, then delete!", t4_q: "Where does a deleted file go first?", t4_qa: "Recycle Bin", t4_qb: "Internet", t4_qc: "Printer", t4_qd: "Folder",
    t4_w1: "Deleted", t4_w2: "files", t4_w3: "go", t4_w4: "to", t4_w5: "the", t4_w6: "Recycle Bin.", t4_w7: "",
    t5_title: "The Recycle Bin", t5_text: "The Recycle Bin holds deleted files until you empty it.", t5_inst: "Highlight the correct word:", t5_h1: "Recycle Bin = safety buffer.", t5_h2: "Empty = permanently gone!", t5_q: "What happens when you empty the Recycle Bin?", t5_qa: "Files are permanently gone", t5_qb: "Files come back", t5_qc: "Computer restarts", t5_qd: "Files are copied",
    t5_tk1: "The", t5_tk2: "Recycle Bin", t5_tk3: "protects", t5_tk4: "against", t5_tk5: "accidental", t5_tk6: "deletion.",
  },
  hu: {
    explorer_title: "Informatika Felfedező 4",
    t1_title: "Fájl kiterjesztések", t1_text: "Minden fájlnak van kiterjesztése, ami megmutatja milyen típusú (.txt, .jpg, .mp3).", t1_inst: "Párosítsd össze:", t1_h1: "Melyik kiterjesztés mihez tartozik?", t1_h2: "Kép, szöveg vagy zene?", t1_q: "Milyen kiterjesztése van a fotóknak?", t1_qa: ".jpg", t1_qb: ".txt", t1_qc: ".mp3", t1_qd: ".exe",
    t1_l1: ".txt", t1_r1: "Szövegfájl", t1_l2: ".jpg", t1_r2: "Kép", t1_l3: ".mp3", t1_r3: "Zene",
    t2_title: "Mappák és könyvtárak", t2_text: "A mappák segítenek rendezni a fájlokat – mint az aktatáskában lévő dosszié.", t2_inst: "Töltsd ki a hiányt:", t2_h1: "A mappák rendet tartanak.", t2_h2: "Olyan, mint az iskolában!", t2_q: "Mi egy mappa?", t2_qa: "Fájlok tárolója", t2_qb: "Egy program", t2_qc: "Egy fájl", t2_qd: "Egy nyomtató",
    t2_sent: "A fájlokat ___ tároljuk.", t2_qa2: "mappákban", t2_qb2: "programokban", t2_qc2: "nyomtatókban", t2_qd2: "képernyőkön",
    t3_title: "Fájl másolása", t3_text: "Másolásnál az eredeti megmarad és keletkezik egy másolat.", t3_inst: "Válogasd szét:", t3_h1: "Eredeti vagy másolat?", t3_h2: "Mi történik másolásnál?", t3_q: "Mi történik amikor másolunk egy fájlt?", t3_qa: "Eredeti megmarad, másolat keletkezik", t3_qb: "Eredeti törlődik", t3_qc: "Fájl megnyílik", t3_qd: "Fájl kinyomtatódik",
    t3_bl1: "Másolás előtt", t3_bl2: "Másolás után", t3_i1: "1 fájl", t3_i2: "2 fájl", t3_i3: "Eredeti", t3_i4: "Másolat",
    t4_title: "Fájl törlése", t4_text: "A törölt fájlok először a Kukába kerülnek és visszaállíthatók.", t4_inst: "Tedd sorrendbe a szavakat:", t4_h1: "Kuka = közbülső lépés", t4_h2: "Előbb ellenőrizz, aztán törölj!", t4_q: "Hová kerül először a törölt fájl?", t4_qa: "Kukába", t4_qb: "Internetre", t4_qc: "Nyomtatóba", t4_qd: "Mappába",
    t4_w1: "A törölt", t4_w2: "fájlok", t4_w3: "a", t4_w4: "Kukába", t4_w5: "kerülnek.", t4_w6: "", t4_w7: "",
    t5_title: "A Kuka", t5_text: "A Kuka megőrzi a törölt fájlokat, amíg ki nem ürítjük.", t5_inst: "Jelöld meg a helyes szót:", t5_h1: "Kuka = biztonsági puffer.", t5_h2: "Kiürítés = véglegesen eltűnik!", t5_q: "Mi történik, ha kiürítjük a Kukát?", t5_qa: "A fájlok véglegesen elvesznek", t5_qb: "A fájlok visszajönnek", t5_qc: "A számítógép újraindul", t5_qd: "A fájlok másolódnak",
    t5_tk1: "A", t5_tk2: "Kuka", t5_tk3: "megvéd", t5_tk4: "a véletlen", t5_tk5: "törléstől.", t5_tk6: "",
  },
  ro: {
    explorer_title: "Explorator Informatică 4",
    t1_title: "Extensii de fișiere", t1_text: "Fiecare fișier are o extensie care arată ce tip este (.txt, .jpg, .mp3).", t1_inst: "Potrivește perechile:", t1_h1: "Ce extensie aparține unde?", t1_h2: "Imagine, text sau muzică?", t1_q: "Ce extensie au de obicei fotografiile?", t1_qa: ".jpg", t1_qb: ".txt", t1_qc: ".mp3", t1_qd: ".exe",
    t1_l1: ".txt", t1_r1: "Fișier text", t1_l2: ".jpg", t1_r2: "Imagine", t1_l3: ".mp3", t1_r3: "Muzică",
    t2_title: "Dosare și directoare", t2_text: "Dosarele ne ajută să organizăm fișierele – ca mapele din ghiozdan.", t2_inst: "Completează spațiul liber:", t2_h1: "Dosarele mențin ordinea.", t2_h2: "Ca la școală!", t2_q: "Ce este un dosar?", t2_qa: "Un container pentru fișiere", t2_qb: "Un program", t2_qc: "Un fișier", t2_qd: "O imprimantă",
    t2_sent: "Fișierele sunt stocate în ___.", t2_qa2: "dosare", t2_qb2: "programe", t2_qc2: "imprimante", t2_qd2: "ecrane",
    t3_title: "Copierea unui fișier", t3_text: "La copiere, originalul rămâne și se creează o copie.", t3_inst: "Sortează în găleți:", t3_h1: "Original sau copie?", t3_h2: "Ce se întâmplă la copiere?", t3_q: "Ce se întâmplă când copiezi un fișier?", t3_qa: "Originalul rămâne, copia se creează", t3_qb: "Originalul se șterge", t3_qc: "Fișierul se deschide", t3_qd: "Fișierul se tipărește",
    t3_bl1: "Înainte de copiere", t3_bl2: "După copiere", t3_i1: "1 fișier", t3_i2: "2 fișiere", t3_i3: "Original", t3_i4: "Copie",
    t4_title: "Ștergerea unui fișier", t4_text: "Fișierele șterse merg mai întâi în Coșul de gunoi și pot fi restaurate.", t4_inst: "Pune cuvintele în ordine:", t4_h1: "Coșul de gunoi = pas intermediar", t4_h2: "Verifică întâi, apoi șterge!", t4_q: "Unde merge mai întâi un fișier șters?", t4_qa: "Coșul de gunoi", t4_qb: "Internet", t4_qc: "Imprimantă", t4_qd: "Dosar",
    t4_w1: "Fișierele", t4_w2: "șterse", t4_w3: "merg", t4_w4: "în", t4_w5: "Coșul de gunoi.", t4_w6: "", t4_w7: "",
    t5_title: "Coșul de gunoi", t5_text: "Coșul de gunoi păstrează fișierele șterse până îl golim.", t5_inst: "Evidențiază cuvântul corect:", t5_h1: "Coș de gunoi = tampon de siguranță.", t5_h2: "Golire = dispărut permanent!", t5_q: "Ce se întâmplă când golești Coșul de gunoi?", t5_qa: "Fișierele dispar permanent", t5_qb: "Fișierele revin", t5_qc: "Calculatorul repornește", t5_qd: "Fișierele se copiază",
    t5_tk1: "Coșul", t5_tk2: "de gunoi", t5_tk3: "protejează", t5_tk4: "împotriva", t5_tk5: "ștergerii", t5_tk6: "accidentale.",
  }
};

export const INFO_K5_I4_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "simple-icon", icon: "📄", color: "#FF9800" },
    interactive: { type: "match-pairs", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", pairs: [{left:"t1_l1",right:"t1_r1"},{left:"t1_l2",right:"t1_r2"},{left:"t1_l3",right:"t1_r3"}] },
    quiz: { question: "t1_q", choices: ["t1_qa","t1_qb","t1_qc","t1_qd"], answer: "t1_qa" }
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "📁", color: "#FFC107" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2","t2_qb2","t2_qc2","t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa","t2_qb","t2_qc","t2_qd"], answer: "t2_qa" }
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "icon-grid", items: [{emoji:"📄",label:"1"},{emoji:"📄",label:"2"}] },
    interactive: { type: "drag-to-bucket", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", buckets: [{id:"b1",label:"t3_bl1"},{id:"b2",label:"t3_bl2"}], items: [{text:"t3_i1",bucketId:"b1"},{text:"t3_i2",bucketId:"b2"},{text:"t3_i3",bucketId:"b1"},{text:"t3_i4",bucketId:"b2"}] },
    quiz: { question: "t3_q", choices: ["t3_qa","t3_qb","t3_qc","t3_qd"], answer: "t3_qa" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "🗑️", color: "#9E9E9E" },
    interactive: { type: "word-order", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", words: ["t4_w1","t4_w2","t4_w3","t4_w4","t4_w5"], correctOrder: [0,1,2,3,4] },
    quiz: { question: "t4_q", choices: ["t4_qa","t4_qb","t4_qc","t4_qd"], answer: "t4_qa" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "🗑️", color: "#607D8B" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5"], correctIndices: [1] },
    quiz: { question: "t5_q", choices: ["t5_qa","t5_qb","t5_qc","t5_qd"], answer: "t5_qa" }
  }
];
