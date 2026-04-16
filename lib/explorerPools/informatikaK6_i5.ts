// lib/explorerPools/informatikaK6_i5.ts
import type { PoolTopicDef } from "./types";

export const INFO_K6_I5_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Informatik Entdecker K6-5",
    t1_title: "E-Mail Absender und Empfänger", t1_text: "Jede E-Mail hat einen Absender (Von:) und einen Empfänger (An:).", t1_inst: "Ordne die Paare zu:", t1_h1: "Von wem? An wen?", t1_h2: "Absender und Empfänger!", t1_q: "Was steht im Feld 'An:' einer E-Mail?", t1_qa: "Die E-Mail-Adresse des Empfängers", t1_qb: "Der Betreff", t1_qc: "Der Anhang", t1_qd: "Das Datum",
    t1_l1: "Von:", t1_r1: "Absender", t1_l2: "An:", t1_r2: "Empfänger", t1_l3: "CC:", t1_r3: "Kopie an",
    t2_title: "Betreff der E-Mail", t2_text: "Der Betreff fasst kurz zusammen, worum es in der E-Mail geht.", t2_inst: "Fülle die Lücke aus:", t2_h1: "Was kommt in den Betreff?", t2_h2: "Kurz und klar!", t2_q: "Was ist der Betreff einer E-Mail?", t2_qa: "Eine kurze Zusammenfassung des Inhalts", t2_qb: "Die E-Mail-Adresse", t2_qc: "Der Anhang", t2_qd: "Das Passwort",
    t2_sent: "Der ___ fasst den Inhalt der E-Mail kurz zusammen.", t2_qa2: "Betreff", t2_qb2: "Absender", t2_qc2: "Anhang", t2_qd2: "Browser",
    t3_title: "Anhänge", t3_text: "An eine E-Mail können wir Dateien als Anhang anfügen (Bilder, Dokumente).", t3_inst: "Sortiere in die Eimer:", t3_h1: "Was kann man anhängen?", t3_h2: "Dateien als Anhang!", t3_q: "Was ist ein E-Mail-Anhang?", t3_qa: "Eine Datei, die mitgeschickt wird", t3_qb: "Der Betreff", t3_qc: "Das Passwort", t3_qd: "Die Webseite",
    t3_bl1: "Kann als Anhang", t3_bl2: "Kein Anhang", t3_i1: "Foto", t3_i2: "Der Betreff-Text", t3_i3: "Dokument", t3_i4: "Absenderadresse",
    t4_title: "SPAM-Filter", t4_text: "SPAM-Filter sortieren unerwünschte E-Mails automatisch aus.", t4_inst: "Bringe die Wörter in Ordnung:", t4_h1: "Filter = sortieren.", t4_h2: "Spam geht in den Spam-Ordner!", t4_q: "Was macht ein SPAM-Filter?", t4_qa: "Sortiert unerwünschte E-Mails aus", t4_qb: "Schreibt E-Mails automatisch", t4_qc: "Löscht alle E-Mails", t4_qd: "Druckt E-Mails",
    t4_w1: "Ein Spam-Filter", t4_w2: "sortiert", t4_w3: "unerwünschte", t4_w4: "E-Mails", t4_w5: "heraus.", t4_w6: "", t4_w7: "",
    t5_title: "Sicherer E-Mail-Umgang", t5_text: "Öffne keine Links oder Anhänge von unbekannten Absendern.", t5_inst: "Markiere das richtige Wort:", t5_h1: "Vorsicht bei Unbekannten!", t5_h2: "Nicht klicken, nicht öffnen!", t5_q: "Was sollte man bei E-Mails von Unbekannten tun?", t5_qa: "Nicht öffnen oder löschen", t5_qb: "Sofort antworten", t5_qc: "Den Anhang herunterladen", t5_qd: "Weiterleiten an alle",
    t5_tk1: "Öffne", t5_tk2: "keine Anhänge", t5_tk3: "von", t5_tk4: "unbekannten", t5_tk5: "Absendern.", t5_tk6: "",
  },
  en: {
    explorer_title: "Informatics Explorer K6-5",
    t1_title: "Email Sender and Recipient", t1_text: "Every email has a sender (From:) and a recipient (To:).", t1_inst: "Match the pairs:", t1_h1: "From whom? To whom?", t1_h2: "Sender and recipient!", t1_q: "What is in the 'To:' field of an email?", t1_qa: "The recipient's email address", t1_qb: "The subject", t1_qc: "The attachment", t1_qd: "The date",
    t1_l1: "From:", t1_r1: "Sender", t1_l2: "To:", t1_r2: "Recipient", t1_l3: "CC:", t1_r3: "Copy to",
    t2_title: "Email Subject", t2_text: "The subject briefly summarizes what the email is about.", t2_inst: "Fill in the blank:", t2_h1: "What goes in the subject?", t2_h2: "Short and clear!", t2_q: "What is the subject of an email?", t2_qa: "A brief summary of the content", t2_qb: "The email address", t2_qc: "The attachment", t2_qd: "The password",
    t2_sent: "The ___ briefly summarizes the content of the email.", t2_qa2: "subject", t2_qb2: "sender", t2_qc2: "attachment", t2_qd2: "browser",
    t3_title: "Attachments", t3_text: "We can attach files to an email (images, documents).", t3_inst: "Sort into buckets:", t3_h1: "What can be attached?", t3_h2: "Files as attachments!", t3_q: "What is an email attachment?", t3_qa: "A file that is sent along", t3_qb: "The subject", t3_qc: "The password", t3_qd: "The website",
    t3_bl1: "Can be attached", t3_bl2: "Not an attachment", t3_i1: "Photo", t3_i2: "The subject text", t3_i3: "Document", t3_i4: "Sender address",
    t4_title: "SPAM Filter", t4_text: "SPAM filters automatically sort out unwanted emails.", t4_inst: "Put the words in order:", t4_h1: "Filter = sort.", t4_h2: "Spam goes to spam folder!", t4_q: "What does a SPAM filter do?", t4_qa: "Sorts out unwanted emails", t4_qb: "Writes emails automatically", t4_qc: "Deletes all emails", t4_qd: "Prints emails",
    t4_w1: "A spam filter", t4_w2: "sorts out", t4_w3: "unwanted", t4_w4: "emails.", t4_w5: "", t4_w6: "", t4_w7: "",
    t5_title: "Safe Email Use", t5_text: "Don't open links or attachments from unknown senders.", t5_inst: "Highlight the correct word:", t5_h1: "Be careful with unknowns!", t5_h2: "Don't click, don't open!", t5_q: "What should you do with emails from unknown senders?", t5_qa: "Don't open them or delete them", t5_qb: "Reply immediately", t5_qc: "Download the attachment", t5_qd: "Forward to everyone",
    t5_tk1: "Don't open", t5_tk2: "attachments", t5_tk3: "from", t5_tk4: "unknown", t5_tk5: "senders.", t5_tk6: "",
  },
  hu: {
    explorer_title: "Informatika Felfedező K6-5",
    t1_title: "E-mail feladó és cím", t1_text: "Minden e-mailnek van feladója (Feladó:) és címzettje (Címzett:).", t1_inst: "Párosítsd össze:", t1_h1: "Kitől? Kinek?", t1_h2: "Feladó és címzett!", t1_q: "Mi van a 'Címzett:' mezőben?", t1_qa: "A címzett e-mail-címe", t1_qb: "A tárgy", t1_qc: "A csatolmány", t1_qd: "A dátum",
    t1_l1: "Feladó:", t1_r1: "Küldő személy", t1_l2: "Címzett:", t1_r2: "Fogadó személy", t1_l3: "Másolat:", t1_r3: "Másolat kap",
    t2_title: "E-mail tárgya", t2_text: "A tárgy röviden összefoglalja, miről szól az e-mail.", t2_inst: "Töltsd ki a hiányt:", t2_h1: "Mi kerül a tárgyba?", t2_h2: "Rövid és világos!", t2_q: "Mi az e-mail tárgya?", t2_qa: "A tartalom rövid összefoglalása", t2_qb: "Az e-mail-cím", t2_qc: "A csatolmány", t2_qd: "A jelszó",
    t2_sent: "A ___ röviden összefoglalja az e-mail tartalmát.", t2_qa2: "tárgy", t2_qb2: "feladó", t2_qc2: "csatolmány", t2_qd2: "böngésző",
    t3_title: "Csatolmányok", t3_text: "Az e-mailhez fájlokat csatolhatunk mellékletként (képek, dokumentumok).", t3_inst: "Válogasd szét:", t3_h1: "Mit lehet csatolni?", t3_h2: "Fájlok mellékletként!", t3_q: "Mi az e-mail csatolmány?", t3_qa: "Egy fájl, amit mellékeltek", t3_qb: "A tárgy", t3_qc: "A jelszó", t3_qd: "A weboldal",
    t3_bl1: "Lehet csatolmány", t3_bl2: "Nem csatolmány", t3_i1: "Fotó", t3_i2: "A tárgyszöveg", t3_i3: "Dokumentum", t3_i4: "Feladó cím",
    t4_title: "SPAM-szűrő", t4_text: "A SPAM-szűrő automatikusan kiszűri a kéretlen e-maileket.", t4_inst: "Tedd sorrendbe a szavakat:", t4_h1: "Szűrő = válogat.", t4_h2: "A spam a spam mappába kerül!", t4_q: "Mit csinál a SPAM-szűrő?", t4_qa: "Kiszűri a kéretlen e-maileket", t4_qb: "Automatikusan e-maileket ír", t4_qc: "Törli az összes e-mailt", t4_qd: "Nyomtatja az e-maileket",
    t4_w1: "A spam-szűrő", t4_w2: "kiszűri", t4_w3: "a kéretlen", t4_w4: "e-maileket.", t4_w5: "", t4_w6: "", t4_w7: "",
    t5_title: "Biztonságos e-mail-használat", t5_text: "Ne nyiss meg linkeket vagy csatolmányokat ismeretlen feladóktól.", t5_inst: "Jelöld meg a helyes szót:", t5_h1: "Óvatosan az ismeretlenekkel!", t5_h2: "Ne kattints, ne nyiss meg!", t5_q: "Mit kell tenni ismeretlen feladótól érkező e-mailekkel?", t5_qa: "Ne nyisd meg vagy töröld", t5_qb: "Azonnal válaszolj", t5_qc: "Töltsd le a csatolmányt", t5_qd: "Továbbítsd mindenkinek",
    t5_tk1: "Ne nyiss", t5_tk2: "meg csatolmányokat", t5_tk3: "ismeretlen", t5_tk4: "feladóktól.", t5_tk5: "", t5_tk6: "",
  },
  ro: {
    explorer_title: "Explorator Informatică K6-5",
    t1_title: "Expeditor și destinatar email", t1_text: "Fiecare email are un expeditor (De la:) și un destinatar (Către:).", t1_inst: "Potrivește perechile:", t1_h1: "De la cine? Către cine?", t1_h2: "Expeditor și destinatar!", t1_q: "Ce se află în câmpul 'Către:' al unui email?", t1_qa: "Adresa de email a destinatarului", t1_qb: "Subiectul", t1_qc: "Atașamentul", t1_qd: "Data",
    t1_l1: "De la:", t1_r1: "Expeditor", t1_l2: "Către:", t1_r2: "Destinatar", t1_l3: "CC:", t1_r3: "Copie la",
    t2_title: "Subiectul emailului", t2_text: "Subiectul rezumă pe scurt despre ce este emailul.", t2_inst: "Completează spațiul liber:", t2_h1: "Ce merge în subiect?", t2_h2: "Scurt și clar!", t2_q: "Ce este subiectul unui email?", t2_qa: "Un scurt rezumat al conținutului", t2_qb: "Adresa de email", t2_qc: "Atașamentul", t2_qd: "Parola",
    t2_sent: "___ rezumă pe scurt conținutul emailului.", t2_qa2: "Subiectul", t2_qb2: "Expeditorul", t2_qc2: "Atașamentul", t2_qd2: "Browserul",
    t3_title: "Atașamente", t3_text: "Putem atașa fișiere la un email (imagini, documente).", t3_inst: "Sortează în găleți:", t3_h1: "Ce poate fi atașat?", t3_h2: "Fișiere ca atașamente!", t3_q: "Ce este un atașament de email?", t3_qa: "Un fișier trimis odată cu emailul", t3_qb: "Subiectul", t3_qc: "Parola", t3_qd: "Site-ul web",
    t3_bl1: "Poate fi atașament", t3_bl2: "Nu este atașament", t3_i1: "Fotografie", t3_i2: "Textul subiectului", t3_i3: "Document", t3_i4: "Adresa expeditorului",
    t4_title: "Filtru SPAM", t4_text: "Filtrele SPAM sortează automat emailurile nedorite.", t4_inst: "Pune cuvintele în ordine:", t4_h1: "Filtru = sortare.", t4_h2: "Spam-ul merge în dosarul spam!", t4_q: "Ce face un filtru SPAM?", t4_qa: "Sortează emailurile nedorite", t4_qb: "Scrie emailuri automat", t4_qc: "Șterge toate emailurile", t4_qd: "Tipărește emailurile",
    t4_w1: "Un filtru spam", t4_w2: "sortează", t4_w3: "emailurile", t4_w4: "nedorite.", t4_w5: "", t4_w6: "", t4_w7: "",
    t5_title: "Utilizarea sigură a emailului", t5_text: "Nu deschide linkuri sau atașamente de la expeditori necunoscuți.", t5_inst: "Evidențiază cuvântul corect:", t5_h1: "Atenție cu necunoscuții!", t5_h2: "Nu da click, nu deschide!", t5_q: "Ce trebuie să faci cu emailurile de la expeditori necunoscuți?", t5_qa: "Nu le deschide sau șterge-le", t5_qb: "Răspunde imediat", t5_qc: "Descarcă atașamentul", t5_qd: "Redirecționează la toți",
    t5_tk1: "Nu deschide", t5_tk2: "atașamente", t5_tk3: "de la", t5_tk4: "expeditori necunoscuți.", t5_tk5: "", t5_tk6: "",
  }
};

export const INFO_K6_I5_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "simple-icon", icon: "📧", color: "#2196F3" },
    interactive: { type: "match-pairs", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", pairs: [{left:"t1_l1",right:"t1_r1"},{left:"t1_l2",right:"t1_r2"},{left:"t1_l3",right:"t1_r3"}] },
    quiz: { question: "t1_q", choices: ["t1_qa","t1_qb","t1_qc","t1_qd"], answer: "t1_qa" }
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "✉️", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2","t2_qb2","t2_qc2","t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa","t2_qb","t2_qc","t2_qd"], answer: "t2_qa" }
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "simple-icon", icon: "📎", color: "#FF9800" },
    interactive: { type: "drag-to-bucket", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", buckets: [{id:"b1",label:"t3_bl1"},{id:"b2",label:"t3_bl2"}], items: [{text:"t3_i1",bucketId:"b1"},{text:"t3_i2",bucketId:"b2"},{text:"t3_i3",bucketId:"b1"},{text:"t3_i4",bucketId:"b2"}] },
    quiz: { question: "t3_q", choices: ["t3_qa","t3_qb","t3_qc","t3_qd"], answer: "t3_qa" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "🚫", color: "#F44336" },
    interactive: { type: "word-order", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", words: ["t4_w1","t4_w2","t4_w3","t4_w4"], correctOrder: [0,1,2,3] },
    quiz: { question: "t4_q", choices: ["t4_qa","t4_qb","t4_qc","t4_qd"], answer: "t4_qa" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "🔒", color: "#9C27B0" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4"], correctIndices: [3] },
    quiz: { question: "t5_q", choices: ["t5_qa","t5_qb","t5_qc","t5_qd"], answer: "t5_qa" }
  }
];
