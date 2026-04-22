// lib/explorerPools/aiK6_i6.ts
import type { PoolTopicDef } from "./types";

export const INFO_K6_I6_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "KI Insel 6: Ethik & Zukunft",
    t1_title: "KI-Ethik", t1_text: "Regeln und Werte, die bestimmen, wie KI sicher und fair für alle entwickelt wird.", t1_inst: "Ordne die Paare zu:", t1_h1: "Was ist richtig?", t1_h2: "Gute KI.", t1_q: "Was ist das Ziel der KI-Ethik?", t1_qa: "Faire Systeme", t1_qb: "Schnellere Computer", t1_qc: "Mehr Werbung", t1_qd: "Bessere Spiele",
    t1_l1: "Fairness", t1_r1: "Gleichheit", t1_l2: "Sicherheit", t1_r2: "Schutz", t1_l3: "Transparenz", t1_r3: "Offenheit",
    t2_title: "KI und Arbeitswelt", t2_text: "KI verändert Jobs. Manche fallen weg, viele neue entstehen.", t2_inst: "Fülle die Lücke aus:", t2_h1: "Veränderung.", t2_h2: "Neue Berufe.", t2_q: "Was passiert mit der Arbeit durch KI?", t2_qa: "Sie verändert sich", t2_qb: "Sie verschwindet ganz", t2_qc: "Sie bleibt gleich", t2_qd: "Sie wird verboten",
    t2_sent: "KI übernimmt oft ___ Aufgaben.", t2_qa2: "routinemäßige", t2_qb2: "kreative", t2_qc2: "lustige", t2_qd2: "keine",
    t3_title: "KI-Sicherheit", t3_text: "Sicherstellen, dass KI-Systeme keine gefährlichen Fehler machen.", t3_inst: "Sortiere in die Eimer:", t3_h1: "Sicher vs Riskant.", t3_h2: "Kontrolle.", t3_q: "Warum ist KI-Sicherheit wichtig?", t3_qa: "Um Schäden zu verhindern", t3_qb: "Um Strom zu sparen", t3_qc: "Um mehr zu verkaufen", t3_qd: "Um schneller zu laden",
    t3_bl1: "Sicher", t3_bl2: "Risiko", t3_i1: "Not-Aus", t3_i2: "Hacken", t3_i3: "Tests", t3_i4: "Fehlfunktion",
    t4_title: "Privatsphäre", t4_text: "KI nutzt oft persönliche Daten. Der Schutz dieser Daten ist ein Grundrecht.", t4_inst: "Bringe die Wörter in Ordnung:", t4_h1: "Meine Daten.", t4_h2: "Datenschutz.", t4_q: "Was schützt die Privatsphäre?", t4_qa: "Datenschutzregeln", t4_qb: "Ein Monitor", t4_qc: "Eine Tastatur", t4_qd: "Ein USB-Stick",
    t4_w1: "Datenschutz", t4_w2: "ist", t4_w3: "auch", t4_w4: "bei", t4_w5: "KI-Systemen", t4_w6: "sehr", t4_w7: "wichtig.",
    t5_title: "Zukunft: AGI", t5_text: "AGI (Artificial General Intelligence) wäre eine KI, die alles kann, was ein Mensch kann.", t5_inst: "Markiere das richtige Wort:", t5_h1: "Super-KI.", t5_h2: "Alleskönner.", t5_q: "Was bedeutet AGI?", t5_qa: "Allgemeine Intelligenz", t5_qb: "Alte Grafik", t5_qc: "Anderes Gerät", t5_qd: "Auto-Gas",
    t5_tk1: "AGI", t5_tk2: "existiert", t5_tk3: "heute", t5_tk4: "noch", t5_tk5: "nicht", t5_tk6: "wirklich.",
    t6_title: "Mensch-KI Team", t6_text: "Die beste Leistung entsteht oft, wenn Mensch und KI zusammenarbeiten.", t6_inst: "Ordne die Paare zu:", t6_h1: "Zusammenarbeit.", t6_h2: "Teamwork.", t6_q: "Wer profitiert von Teamwork?", t6_qa: "Beide Seiten", t6_qb: "Nur der Mensch", t6_qc: "Nur die Maschine", t6_qd: "Niemand",
    t6_l1: "Mensch", t6_r1: "Kreativität", t6_l2: "KI", t6_r2: "Rechenkraft", t6_l3: "Team", t6_r3: "Erfolg",
    t7_title: "Generative KI", t7_text: "KI, die neue Inhalte wie Texte, Bilder oder Musik erschafft.", t7_inst: "Fülle die Lücke aus:", t7_h1: "Erschaffen.", t7_h2: "Neue Dinge.", t7_q: "Was kann generative KI?", t7_qa: "Inhalte erstellen", t7_qb: "Daten löschen", t7_qc: "Hardware bauen", t7_qd: "Kabel ziehen",
    t7_sent: "ChatGPT ist eine ___ KI.", t7_qa2: "generative", t7_qb2: "kaputte", t7_qc2: "langsame", t7_qd2: "alte",
    t8_title: "Chatbots", t8_text: "Programme, mit denen man in natürlicher Sprache chatten kann (z.B. ChatGPT).", t8_inst: "Sortiere in die Eimer:", t8_h1: "Unterhaltung.", t8_h2: "Fragen stellen.", t8_q: "Was ist ein Chatbot?", t8_qa: "Ein Dialog-Programm", t8_qb: "Ein kleiner Roboter", t8_qc: "Ein Telefon", t8_qd: "Ein Lautsprecher",
    t8_bl1: "Frage", t8_bl2: "Antwort", t8_i1: "Prompt", t8_i2: "Generierung", t8_i3: "Nutzer", t8_i4: "Modell",
    t9_title: "Prompt Engineering", t9_text: "Die Kunst, der KI genau die richtigen Befehle zu geben.", t9_inst: "Bringe die Wörter in Ordnung:", t9_h1: "Gute Fragen.", t9_h2: "Besserer Output.", t9_q: "Was ist ein Prompt?", t9_qa: "Ein Befehl an die KI", t9_qb: "Ein Monitor", t9_qc: "Ein Drucker", t9_qd: "Ein Stromkabel",
    t9_w1: "Ein", t9_w2: "guter", t9_w3: "Prompt", t9_w4: "führt", t9_w5: "zu", t9_w6: "besseren", t9_w7: "Ergebnissen.",
    t10_title: "Verantwortung", t10_text: "Wer ist schuld, wenn eine KI einen Fehler macht? Eine wichtige rechtliche Frage.", t10_inst: "Markiere das richtige Wort:", t10_h1: "Schuldfrage.", t10_h2: "Recht.", t10_q: "Was ist bei KI-Fehlern oft unklar?", t10_qa: "Haftung", t10_qb: "Die Farbe", t10_qc: "Die Geschwindigkeit", t10_qd: "Der Name",
    t10_tk1: "Wer", t10_tk2: "trägt", t10_tk3: "die", t10_tk4: "Verantwortung", t10_tk5: "für", t10_tk6: "KI-Entscheidungen?",
    t11_title: "Nachhaltigkeit", t11_text: "Das Training von KI verbraucht viel Strom und Wasser zur Kühlung.", t11_inst: "Ordne die Paare zu:", t11_h1: "Umwelt.", t11_h2: "Energie.", t11_q: "Was braucht KI-Training viel?", t11_qa: "Energie", t11_qb: "Gute Laune", t11_qc: "Papier", t11_qd: "Bäume",
    t11_l1: "Rechenzentrum", t11_r1: "Kühlung", t11_l2: "Training", t11_r2: "Stromverbrauch", t11_l3: "Öko-KI", t11_r3: "Effizienz",
    t12_title: "KI-Gesetze", t12_text: "Regierungen erstellen Gesetze (wie den EU AI Act), um KI zu regulieren.", t12_inst: "Fülle die Lücke aus:", t12_h1: "Regeln vom Staat.", t12_h2: "Sicherheit.", t12_q: "Welches Gesetz reguliert KI in Europa?", t12_qa: "EU AI Act", t12_qb: "StVO", t12_qc: "BGB", t12_qd: "Mathe-Buch",
    t12_sent: "Gesetze sollen Risiken ___.", t12_qa2: "minimieren", t12_qb2: "maximieren", t12_qc2: "ignorieren", t12_qd2: "kaufen",
    t13_title: "Die Singularität", t13_text: "Ein theoretischer Zeitpunkt, an dem KI klüger wird als alle Menschen zusammen.", t13_inst: "Sortiere in die Eimer:", t13_h1: "Theorie.", t13_h2: "Zukunftsblick.", t13_q: "Was ist die Singularität?", t13_qa: "Intelligenz-Explosion", t13_qb: "Ein kleiner Stern", t13_qc: "Ein PC-Update", t13_qd: "Ein neues Spiel",
    t13_bl1: "Menschlich", t13_bl2: "Super-KI", t13_i1: "Biologie", t13_i2: "Unendlichkeit", t13_i3: "Grenzen", t13_i4: "Selbstverbesserung",
    t14_title: "KI in der Schule", t14_text: "KI kann beim Lernen helfen, sollte aber nicht das Denken ersetzen.", t14_inst: "Bringe die Wörter in Ordnung:", t14_h1: "Lernhelfer.", t14_h2: "Selbst denken.", t14_q: "Wie nutzt man KI in der Schule am besten?", t14_qa: "Als Unterstützung", t14_qb: "Zum Abschreiben", t14_qc: "Gar nicht", t14_qd: "Um zu schlafen",
    t14_w1: "KI", t14_w2: "sollte", t14_w3: "unsere", t14_w4: "eigene", t14_w5: "Intelligenz", t14_w6: "nur", t14_w7: "ergänzen.",
    t15_title: "Ethisches Design", t15_text: "KI von Anfang an so bauen, dass sie Werten wie Fairness entspricht.", t15_inst: "Markiere das richtige Wort:", t15_h1: "Werte einbauen.", t15_h2: "Planung.", t15_q: "Was bedeutet 'Ethik by Design'?", t15_qa: "Ethik von Beginn an", t15_qb: "Ethik erst am Ende", t15_qc: "Gar keine Ethik", t15_qd: "Nur Design",
    t15_tk1: "Gute", t15_tk2: "KI", t15_tk3: "beginnt", t15_tk4: "mit", t15_tk5: "ethischem", t15_tk6: "Design.", t15_tk7: ""
  },
  en: {
    explorer_title: "AI Island 6: Ethics & Future",
    t1_title: "AI Ethics", t1_text: "Rules and values that determine how AI is developed safely and fairly for everyone.", t1_inst: "Match the pairs:", t1_h1: "What is right?", t1_h2: "Good AI.", t1_q: "What is the goal of AI ethics?", t1_qa: "Fair systems", t1_qb: "Faster computers", t1_qc: "More ads", t1_qd: "Better games",
    t1_l1: "Fairness", t1_r1: "Equality", t1_l2: "Safety", t1_r2: "Protection", t1_l3: "Transparency", t1_r3: "Openness",
    t2_title: "AI and Jobs", t2_text: "AI is changing jobs. Some are disappearing, while many new ones are being created.", t2_inst: "Fill in the blank:", t2_h1: "Change.", t2_h2: "New careers.", t2_q: "What happens to work because of AI?", t2_qa: "It changes", t2_qb: "It disappears entirely", t2_qc: "It stays the same", t2_qd: "It is banned",
    t2_sent: "AI often takes over ___ tasks.", t2_qa2: "routine", t2_qb2: "creative", t2_qc2: "funny", t2_qd2: "none",
    t3_title: "AI Safety", t3_text: "Ensuring that AI systems do not make dangerous mistakes.", t3_inst: "Sort into buckets:", t3_h1: "Safe vs Risky.", t3_h2: "Control.", t3_q: "Why is AI safety important?", t3_qa: "To prevent harm", t3_qb: "To save power", t3_qc: "To sell more", t3_qd: "To load faster",
    t3_bl1: "Safe", t3_bl2: "Risk", t3_i1: "Emergency stop", t3_i2: "Hacking", t3_i3: "Testing", t3_i4: "Malfunction",
    t4_title: "Privacy", t4_text: "AI often uses personal data. Protecting this data is a fundamental right.", t4_inst: "Put the words in order:", t4_h1: "My data.", t4_h2: "Data protection.", t4_q: "What protects privacy?", t4_qa: "Data protection rules", t4_qb: "A monitor", t4_qc: "A keyboard", t4_qd: "A USB stick",
    t4_w1: "Data", t4_w2: "protection", t4_w3: "is", t4_w4: "also", t4_w5: "very", t4_w6: "important", t4_w7: "for AI.",
    t5_title: "Future: AGI", t5_text: "AGI (Artificial General Intelligence) would be an AI that can do everything a human can.", t5_inst: "Highlight the correct word:", t5_h1: "Super AI.", t5_h2: "All-rounder.", t5_q: "What does AGI stand for?", t5_qa: "General Intelligence", t5_qb: "Ancient Graphics", t5_qc: "Another Gadget", t5_qd: "Auto Gas",
    t5_tk1: "AGI", t5_tk2: "does", t5_tk3: "not", t5_tk4: "really", t5_tk5: "exist", t5_tk6: "yet.",
    t6_title: "Human-AI Team", t6_text: "The best performance often occurs when humans and AI work together.", t6_inst: "Match the pairs:", t6_h1: "Collaboration.", t6_h2: "Teamwork.", t6_q: "Who benefits from teamwork?", t6_qa: "Both sides", t6_qb: "Only humans", t6_qc: "Only the machine", t6_qd: "Nobody",
    t6_l1: "Human", t6_r1: "Creativity", t6_l2: "AI", t6_r2: "Calculation", t6_l3: "Team", t6_r3: "Success",
    t7_title: "Generative AI", t7_text: "AI that creates new content such as text, images, or music.", t7_inst: "Fill in the blank:", t7_h1: "Creating.", t7_h2: "New things.", t7_q: "What can generative AI do?", t7_qa: "Create content", t7_qb: "Delete data", t7_qc: "Build hardware", t7_qd: "Pull cables",
    t7_sent: "ChatGPT is a ___ AI.", t7_qa2: "generative", t7_qb2: "broken", t7_qc2: "slow", t7_qd2: "old",
    t8_title: "Chatbots", t8_text: "Programs that allow you to chat in natural language (e.g., ChatGPT).", t8_inst: "Sort into buckets:", t8_h1: "Conversation.", t8_h2: "Asking questions.", t8_q: "What is a chatbot?", t8_qa: "A dialog program", t8_qb: "A small robot", t8_qc: "A phone", t8_qd: "A speaker",
    t8_bl1: "Question", t8_bl2: "Answer", t8_i1: "Prompt", t8_i2: "Generation", t8_i3: "User", t8_i4: "Model",
    t9_title: "Prompt Engineering", t9_text: "The art of giving AI exactly the right commands.", t9_inst: "Put the words in order:", t9_h1: "Good questions.", t9_h2: "Better output.", t9_q: "What is a prompt?", t9_qa: "A command to the AI", t9_qb: "A monitor", t9_qc: "A printer", t9_qd: "A power cable",
    t9_w1: "A", t9_w2: "good", t9_w3: "prompt", t9_w4: "leads", t9_w5: "to", t9_w6: "better", t9_w7: "results.",
    t10_title: "Responsibility", t10_text: "Who is at fault if an AI makes a mistake? An important legal question.", t10_inst: "Highlight the correct word:", t10_h1: "Question of fault.", t10_h2: "Law.", t10_q: "What is often unclear with AI errors?", t10_qa: "Liability", t10_qb: "The color", t10_qc: "The speed", t10_qd: "The name",
    t10_tk1: "Who", t10_tk2: "bears", t10_tk3: "responsibility", t10_tk4: "for", t10_tk5: "AI", t10_tk6: "decisions?",
    t11_title: "Sustainability", t11_text: "Training AI consumes a lot of electricity and water for cooling.", t11_inst: "Match the pairs:", t11_h1: "Environment.", t11_h2: "Energy.", t11_q: "What does AI training need a lot of?", t11_qa: "Energy", t11_qb: "Good mood", t11_qc: "Paper", t11_qd: "Trees",
    t11_l1: "Data center", t11_r1: "Cooling", t11_l2: "Training", t11_r2: "Power consumption", t11_l3: "Eco AI", t11_r3: "Efficiency",
    t12_title: "AI Laws", t12_text: "Governments create laws (like the EU AI Act) to regulate AI.", t12_inst: "Fill in the blank:", t12_h1: "State rules.", t12_h2: "Safety.", t12_q: "Which law regulates AI in Europe?", t12_qa: "EU AI Act", t12_qb: "Traffic law", t12_qc: "Math book", t12_qd: "Dictionary",
    t12_sent: "Laws should ___ risks.", t12_qa2: "minimize", t12_qb2: "maximize", t12_qc2: "ignore", t12_qd2: "buy",
    t13_title: "The Singularity", t13_text: "A theoretical point in time when AI becomes smarter than all humans combined.", t13_inst: "Sort into buckets:", t13_h1: "Theory.", t13_h2: "Future outlook.", t13_q: "What is the Singularity?", t13_qa: "Intelligence explosion", t13_qb: "A small star", t13_qc: "A PC update", t13_qd: "A new game",
    t13_bl1: "Human", t13_bl2: "Super AI", t13_i1: "Biology", t13_i2: "Infinity", t13_i3: "Limits", t13_i4: "Self-improvement",
    t14_title: "AI in Education", t14_text: "AI can help with learning but should not replace thinking.", t14_inst: "Put the words in order:", t14_h1: "Learning helper.", t14_h2: "Think for yourself.", t14_q: "How best to use AI in school?", t14_qa: "As support", t14_qb: "To cheat", t14_qc: "Not at all", t14_qd: "To sleep",
    t14_w1: "AI", t14_w2: "should", t14_w3: "only", t14_w4: "complement", t14_w5: "our", t14_w6: "own", t14_w7: "intelligence.",
    t15_title: "Ethical Design", t15_text: "Building AI from the start to conform to values such as fairness.", t15_inst: "Highlight the correct word:", t15_h1: "Building in values.", t15_h2: "Planning.", t15_q: "What does 'Ethics by Design' mean?", t15_qa: "Ethics from the start", t15_qb: "Ethics only at the end", t15_qc: "No ethics at all", t15_qd: "Only design",
    t15_tk1: "Good", t15_tk2: "AI", t15_tk3: "starts", t15_tk4: "with", t15_tk5: "ethical", t15_tk6: "design.", t15_tk7: ""
  },
  hu: {
    explorer_title: "MI Sziget 6: Etika és jövő",
    t1_title: "MI-etika", t1_text: "Szabályok és értékek, amik meghatározzák az MI biztonságos és igazságos fejlesztését.", t1_inst: "Párosítsd össze:", t1_h1: "Mi a helyes?", t1_h2: "Jó MI.", t1_q: "Mi az MI-etika célja?", t1_qa: "Igazságos rendszerek", t1_qb: "Gyorsabb gép", t1_qc: "Több reklám", t1_qd: "Jobb játékok",
    t1_l1: "Igazságosság", t1_r1: "Egyenlőség", t1_l2: "Biztonság", t1_r2: "Védelem", t1_l3: "Átláthatóság", t1_r3: "Nyíltság",
    t2_title: "MI és a munka", t2_text: "Az MI megváltoztatja a munkát. Egyes állások megszűnnek, újak jönnek létre.", t2_inst: "Töltsd ki a hiányt:", t2_h1: "Változás.", t2_h2: "Új szakmák.", t2_q: "Mi történik a munkával az MI miatt?", t2_qa: "Megváltozik", t2_qb: "Teljesen eltűnik", t2_qc: "Ugyanaz marad", t2_qd: "Betiltják",
    t2_sent: "Az MI gyakran a ___ feladatokat veszi át.", t2_qa2: "rutin", t2_qb2: "kreatív", t2_qc2: "vicces", t2_qd2: "egyik sem",
    t3_title: "MI-biztonság", t3_text: "Annak biztosítása, hogy az MI-rendszerek ne kövessenek el veszélyes hibákat.", t3_inst: "Válogasd szét:", t3_h1: "Biztonságos vs Veszélyes.", t3_h2: "Ellenőrzés.", t3_q: "Miért fontos az MI-biztonság?", t3_qa: "Károk megelőzése", t3_qb: "Áramspórolás", t3_qc: "Több eladás", t3_qd: "Gyorsabb töltés",
    t3_bl1: "Biztonságos", t3_bl2: "Kockázat", t3_i1: "Vészleállító", t3_i2: "Hackelés", t3_i3: "Tesztelés", t3_i4: "Hiba",
    t4_title: "Adatvédelem", t4_text: "Az MI gyakran személyes adatokat használ. Ezek védelme alapvető jog.", t4_inst: "Tedd sorrendbe a szavakat:", t4_h1: "Az én adataim.", t4_h2: "Védelem.", t4_q: "Mi védi a magánszférát?", t4_qa: "Adatvédelmi szabályok", t4_qb: "Monitor", t4_qc: "Billentyűzet", t4_qd: "USB-kulcs",
    t4_w1: "Az", t4_w2: "adatvédelem", t4_w3: "nagyon", t4_w4: "fontos", t4_w5: "az", t4_w6: "MI", t4_w7: "esetében is.",
    t5_title: "Jövő: AGI", t5_text: "Az AGI egy olyan MI lenne, ami mindenre képes, amire egy ember.", t5_inst: "Jelöld meg a helyes szót:", t5_h1: "Szuper-MI.", t5_h2: "Mindenes.", t5_q: "Mit jelent az AGI?", t5_qa: "Általános intelligencia", t5_qb: "Régi grafika", t5_qc: "Másik eszköz", t5_qd: "Autó-gáz",
    t5_tk1: "Az AGI", t5_tk2: "ma", t5_tk3: "még", t5_tk4: "nem", t5_tk5: "valóban", t5_tk6: "létezik.",
    t6_title: "Ember-MI csapat", t6_text: "A legjobb teljesítmény gyakran akkor születik, ha ember és MI együttműködik.", t6_inst: "Párosítsd össze:", t6_h1: "Együttműködés.", t6_h2: "Csapatmunka.", t6_q: "Ki profitál a csapatmunkából?", t6_qa: "Mindkét oldal", t6_qb: "Csak az ember", t6_qc: "Csak a gép", t6_qd: "Senki",
    t6_l1: "Ember", t6_r1: "Kreativitás", t6_l2: "MI", t6_r2: "Számítás", t6_l3: "Csapat", t6_r3: "Siker",
    t7_title: "Generatív MI", t7_text: "Olyan MI, ami új tartalmakat, például szöveget, képet vagy zenét hoz létre.", t7_inst: "Töltsd ki a hiányt:", t7_h1: "Létrehozás.", t7_h2: "Új dolgok.", t7_q: "Mire képes a generatív MI?", t7_qa: "Tartalomalkotás", t7_qb: "Adattörlés", t7_qc: "Hardverépítés", t7_qd: "Kábelhúzás",
    t7_sent: "A ChatGPT egy ___ MI.", t7_qa2: "generatív", t7_qb2: "törött", t7_qc2: "lassú", t7_qd2: "régi",
    t8_title: "Chatbotok", t8_text: "Programok, amikkel természetes nyelven cseveghetünk (pl. ChatGPT).", t8_inst: "Válogasd szét:", t8_h1: "Beszélgetés.", t8_h2: "Kérdezés.", t8_q: "Mi az a chatbot?", t8_qa: "Párbeszéd-program", t8_qb: "Kis robot", t8_qc: "Telefon", t8_qd: "Hangszóró",
    t8_bl1: "Kérdés", t8_bl2: "Válasz", t8_i1: "Prompt", t8_i2: "Generálás", t8_i3: "Felhasználó", t8_i4: "Modell",
    t9_title: "Prompt Engineering", t9_text: "A művészet, hogy pontosan a megfelelő utasításokat adjuk az MI-nek.", t9_inst: "Tedd sorrendbe a szavakat:", t9_h1: "Jó kérdések.", t9_h2: "Jobb válaszok.", t9_q: "Mi az a prompt?", t9_qa: "Utasítás az MI-nek", t9_qb: "Monitor", t9_qc: "Nyomtató", t9_qd: "Kábel",
    t9_w1: "A jó", t9_w2: "prompt", t9_w3: "jobb", t9_w4: "eredményekhez", t9_w5: "vezet", t9_w6: "az", t9_w7: "MI-nél.",
    t10_title: "Felelősség", t10_text: "Ki a hibás, ha az MI hibázik? Ez egy fontos jogi kérdés.", t10_inst: "Jelöld meg a helyes szót:", t10_h1: "Ki a hibás?", t10_h2: "Jog.", t10_q: "Mi gyakran tisztázatlan az MI hibáinál?", t10_qa: "Felelősség", t10_qb: "Szín", t10_qc: "Sebesség", t10_qd: "Név",
    t10_tk1: "Ki", t10_tk2: "vállalja", t10_tk3: "a", t10_tk4: "felelősséget", t10_tk5: "az", t10_tk6: "MI", t10_tk7: "döntéseiért?",
    t11_title: "Fenntarthatóság", t11_text: "Az MI tanítása sok áramot és hűtővizet fogyaszt.", t11_inst: "Párosítsd össze:", t11_h1: "Környezet.", t11_h2: "Energia.", t11_q: "Miből fogyaszt sokat az MI?", t11_qa: "Energia", t11_qb: "Jókedv", t11_qc: "Papír", t11_qd: "Fa",
    t11_l1: "Adatközpont", t11_r1: "Hűtés", t11_l2: "Tanítás", t11_r2: "Áramfogyasztás", t11_l3: "Öko-MI", t11_r3: "Hatékonyság",
    t12_title: "MI-törvények", t12_text: "A kormányok törvényeket alkotnak az MI szabályozására (pl. EU AI Act).", t12_inst: "Töltsd ki a hiányt:", t12_h1: "Állami szabályok.", t12_h2: "Biztonság.", t12_q: "Melyik törvény szabályozza az MI-t Európában?", t12_qa: "EU AI Act", t12_qb: "KRESZ", t12_qc: "Matekkönyv", t12_qd: "Szótár",
    t12_sent: "A törvények a kockázatokat ___.", t12_qa2: "csökkentik", t12_qb2: "növelik", t12_qc2: "kihagyják", t12_qd2: "veszik",
    t13_title: "A Szingularitás", t13_text: "Elméleti pont, amikor az MI okosabb lesz, mint az összes ember együttvéve.", t13_inst: "Válogasd szét:", t13_h1: "Elmélet.", t13_h2: "Jövőkép.", t13_q: "Mi a szingularitás?", t13_qa: "Intelligencia-robbanás", t13_qb: "Egy kis csillag", t13_qc: "PC frissítés", t13_qd: "Új játék",
    t13_bl1: "Emberi", t13_bl2: "Szuper-MI", t13_i1: "Biológia", t13_i2: "Végtelenség", t13_i3: "Határok", t13_i4: "Önfejlesztés",
    t14_title: "MI az iskolában", t14_text: "Az MI segíthet a tanulásban, de ne helyettesítse a gondolkodást.", t14_inst: "Tedd sorrendbe a szavakat:", t14_h1: "Segítőtárs.", t14_h2: "Gondolkodj te is.", t14_q: "Hogyan legjobb használni az MI-t az iskolában?", t14_qa: "Segítségként", t14_qb: "Másoláshoz", t14_qc: "Sehogy", t14_qd: "Alváshoz",
    t14_w1: "Az MI", t14_w2: "csak", t14_w3: "kiegészíteni", t14_w4: "hivatott", t14_w5: "a", t14_w6: "saját", t14_w7: "tudásunkat.",
    t15_title: "Etikus tervezés", t15_text: "Az MI-t már az elejétől fogva úgy kell építeni, hogy igazságos legyen.", t15_inst: "Jelöld meg a helyes szót:", t15_h1: "Értékek beépítése.", t15_h2: "Tervezés.", t15_q: "Mit jelent az 'Ethics by Design'?", t15_qa: "Etika a kezdetektől", t15_qb: "Etika csak a végén", t15_qc: "Nincs etika", t15_qd: "Csak dizájn",
    t15_tk1: "A jó", t15_tk2: "MI", t15_tk3: "az", t15_tk4: "etikus", t15_tk5: "tervezéssel", t15_tk6: "kezdődik.", t15_tk7: ""
  },
  ro: {
    explorer_title: "Insula AI 6: Etică și viitor",
    t1_title: "Etica AI", t1_text: "Reguli și valori care determină cum este dezvoltată AI în siguranță și corectitudine.", t1_inst: "Potrivește perechile:", t1_h1: "Ce este corect?", t1_h2: "AI bun.", t1_q: "Care este scopul eticii AI?", t1_qa: "Sisteme corecte", t1_qb: "Calculatoare rapide", t1_qc: "Mai multe reclame", t1_qd: "Jocuri mai bune",
    t1_l1: "Corectitudine", t1_r1: "Egalitate", t1_l2: "Siguranță", t1_r2: "Protecție", t1_l3: "Transparență", t1_r3: "Deschidere",
    t2_title: "AI și joburile", t2_text: "AI schimbă locurile de muncă. Unele dispar, apar multe altele noi.", t2_inst: "Completează spațiul liber:", t2_h1: "Schimbare.", t2_h2: "Cariere noi.", t2_q: "Ce se întâmplă cu munca din cauza AI?", t2_qa: "Se schimbă", t2_qb: "Dispare complet", t2_qc: "Rămâne la fel", t2_qd: "Este interzisă",
    t2_sent: "AI preia adesea sarcinile ___.", t2_qa2: "de rutină", t2_qb2: "creative", t2_qc2: "amuzante", t2_qd2: "niciuna",
    t3_title: "Siguranța AI", t3_text: "Asigurarea că sistemele AI nu fac greșeli periculoase.", t3_inst: "Sortează în găleți:", t3_h1: "Sigur vs Risca.", t3_h2: "Control.", t3_q: "De ce este importantă siguranța AI?", t3_qa: "Pentru a preveni daunele", t3_qb: "Pentru a economisi curent", t3_qc: "Pentru a vinde mai mult", t3_qd: "Pentru a încărca rapid",
    t3_bl1: "Sigur", t3_bl2: "Risc", t3_i1: "Oprire urgență", t3_i2: "Hacking", t3_i3: "Testare", t3_i4: "Defecțiune",
    t4_title: "Confidențialitate", t4_text: "AI folosește adesea date personale. Protejarea acestora este un drept fundamental.", t4_inst: "Pune cuvintele în ordine:", t4_h1: "Datele mele.", t4_h2: "Protecție.", t4_q: "Ce protejează confidențialitatea?", t4_qa: "Regulile de protecție a datelor", t4_qb: "Un monitor", t4_qc: "O tastatură", t4_qd: "Un stick USB",
    t4_w1: "Protecția", t4_w2: "datelor", t4_w3: "este", t4_w4: "foarte", t4_w5: "importantă", t4_w6: "și", t4_w7: "pentru AI.",
    t5_title: "Viitor: AGI", t5_text: "AGI ar fi o inteligență artificială care poate face tot ce face un om.", t5_inst: "Evidențiază cuvântul corect:", t5_h1: "Super AI.", t5_h2: "Polivalent.", t5_q: "Ce înseamnă AGI?", t5_qa: "Inteligență Generală", t5_qb: "Grafică Veche", t5_qc: "Alt Gadget", t5_qd: "Gaz Auto",
    t5_tk1: "AGI", t5_tk2: "nu", t5_tk3: "există", t5_tk4: "cu", t5_tk5: "adevărat", t5_tk6: "încă.",
    t6_title: "Echipa Om-AI", t6_text: "Cea mai bună performanță apare adesea când oamenii și AI lucrează împreună.", t6_inst: "Potrivește perechile:", t6_h1: "Colaborare.", t6_h2: "Muncă în echipă.", t6_q: "Cine beneficiază de munca în echipă?", t6_qa: "Ambele părți", t6_qb: "Doar oamenii", t6_qc: "Doar mașina", t6_qd: "Nimeni",
    t6_l1: "Om", t6_r1: "Creativitate", t6_l2: "AI", t6_r2: "Calcul", t6_l3: "Echipă", t6_r3: "Succes",
    t7_title: "AI generativ", t7_text: "AI care creează conținut nou, cum ar fi text, imagini sau muzică.", t7_inst: "Completează spațiul liber:", t7_h1: "Creare.", t7_h2: "Lucruri noi.", t7_q: "Ce poate face AI generativ?", t7_qa: "Creează conținut", t7_qb: "Șterge date", t7_qc: "Construiește hardware", t7_qd: "Trage cabluri",
    t7_sent: "ChatGPT este un AI ___.", t7_qa2: "generativ", t7_qb2: "stricat", t7_qc2: "lent", t7_qd2: "vechi",
    t8_title: "Chatboți", t8_text: "Programe cu care poți conversa în limbaj natural (ex: ChatGPT).", t8_inst: "Sortează în găleți:", t8_h1: "Conversație.", t8_h2: "Întrebări.", t8_q: "Ce este un chatbot?", t8_qa: "Un program de dialog", t8_qb: "Un robot mic", t8_qc: "Un telefon", t8_qd: "Un difuzor",
    t8_bl1: "Întrebare", t8_bl2: "Răspuns", t8_i1: "Prompt", t8_i2: "Generare", t8_i3: "Utilizator", t8_i4: "Model",
    t9_title: "Prompt Engineering", t9_text: "Arta de a da AI comenzile exact corecte.", t9_inst: "Pune cuvintele în ordine:", t9_h1: "Întrebări bune.", t9_h2: "Rezultate mai bune.", t9_q: "Ce este un prompt?", t9_qa: "O comandă pentru AI", t9_qb: "Un monitor", t9_qc: "O imprimantă", t9_qd: "Un cablu",
    t9_w1: "Un", t9_w2: "prompt", t9_w3: "bun", t9_w4: "duce", t9_w5: "la", t9_w6: "rezultate", t9_w7: "mai bune.",
    t10_title: "Responsabilitate", t10_text: "Cine este vinovat dacă un AI greșește? O întrebare juridică importantă.", t10_inst: "Evidențiază cuvântul corect:", t10_h1: "Vinovăție.", t10_h2: "Lege.", t10_q: "Ce este adesea neclar la erorile AI?", t10_qa: "Răspunderea", t10_qb: "Culoarea", t10_qc: "Viteza", t10_qd: "Numele",
    t10_tk1: "Cine", t10_tk2: "poartă", t10_tk3: "responsabilitatea", t10_tk4: "pentru", t10_tk5: "deciziile", t10_tk6: "AI?",
    t11_title: "Sustenabilitate", t11_text: "Antrenarea AI consumă mult curent și apă pentru răcire.", t11_inst: "Potrivește perechile:", t11_h1: "Mediu.", t11_h2: "Energie.", t11_q: "De ce are nevoie mult antrenarea AI?", t11_qa: "Energie", t11_qb: "Bună dispoziție", t11_qc: "Hârtie", t11_qd: "Copaci",
    t11_l1: "Centru date", t11_r1: "Răcire", t11_l2: "Antrenare", t11_r2: "Consum curent", t11_l3: "Eco AI", t11_r3: "Eficiență",
    t12_title: "Legi AI", t12_text: "Guvernele creează legi (ca EU AI Act) pentru a reglementa AI.", t12_inst: "Completează spațiul liber:", t12_h1: "Reguli stat.", t12_h2: "Siguranță.", t12_q: "Ce lege reglementează AI în Europa?", t12_qa: "EU AI Act", t12_qb: "Cod rutier", t12_qc: "Carte mate", t12_qd: "Dicționar",
    t12_sent: "Legile ar trebui să ___ riscurile.", t12_qa2: "minimizeze", t12_qb2: "maximizeze", t12_qc2: "ignore", t12_qd2: "cumpere",
    t13_title: "Singularitatea", t13_text: "Un punct teoretic în timp când AI devine mai deșteaptă decât toți oamenii.", t13_inst: "Sortează în găleți:", t13_h1: "Teorie.", t13_h2: "Viitor.", t13_q: "Ce este singularitatea?", t13_qa: "Explozie de inteligență", t13_qb: "O stea mică", t13_qc: "Update PC", t13_qd: "Un joc nou",
    t13_bl1: "Uman", t13_bl2: "Super AI", t13_i1: "Biologie", t13_i2: "Infinit", t13_i3: "Limite", t13_i4: "Auto-îmbunătățire",
    t14_title: "AI la școală", t14_text: "AI poate ajuta la învățare, dar nu ar trebui să înlocuiască gândirea.", t14_inst: "Pune cuvintele în ordine:", t14_h1: "Ajutor învățare.", t14_h2: "Gândește singur.", t14_q: "Cum e cel mai bine să folosești AI la școală?", t14_qa: "Ca suport", t14_qb: "Pentru a copia", t14_qc: "Deloc", t14_qd: "Pentru a dormi",
    t14_w1: "AI", t14_w2: "ar", t14_w3: "trebui", t14_w4: "doar", t14_w5: "să", t14_w6: "completeze", t14_w7: "inteligența noastră.",
    t15_title: "Design etic", t15_text: "Construirea AI de la început pentru a respecta valori ca echitatea.", t15_inst: "Evidențiază cuvântul corect:", t15_h1: "Valori integrate.", t15_h2: "Planificare.", t15_q: "Ce înseamnă 'Ethics by Design'?", t15_qa: "Etică de la început", t15_qb: "Etică doar la final", t15_qc: "Fără etică", t15_qd: "Doar design",
    t15_tk1: "Un", t15_tk2: "AI", t15_tk3: "bun", t15_tk4: "începe", t15_tk5: "cu", t15_tk6: "designul", t15_tk7: "etic."
  }
};

export const INFO_K6_I6_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "simple-icon", icon: "⚖️", color: "#607D8B" },
    interactive: { type: "match-pairs", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", pairs: [{left:"t1_l1",right:"t1_r1"},{left:"t1_l2",right:"t1_r2"},{left:"t1_l3",right:"t1_r3"}] },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" }
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "💼", color: "#795548" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" }
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "icon-grid", items: [{emoji:"🛡️",label:"Safe"},{emoji:"⚠️",label:"Risk"}] },
    interactive: { type: "drag-to-bucket", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", buckets: [{id:"b1",label:"t3_bl1"},{id:"b2",label:"t3_bl2"}], items: [{text:"t3_i1",bucketId:"b1"},{text:"t3_i2",bucketId:"b2"},{text:"t3_i3",bucketId:"b1"},{text:"t3_i4",bucketId:"b2"}] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "🔒", color: "#2196F3" },
    interactive: { type: "word-order", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", words: ["t4_w1", "t4_w2", "t4_w3", "t4_w4", "t4_w5", "t4_w6", "t4_w7"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6].slice(0, 7) },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "🧠", color: "#9C27B0" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6"].filter(x=>x!==""), correctIndices: [0] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" }
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "simple-icon", icon: "🤝", color: "#4CAF50" },
    interactive: { type: "match-pairs", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", pairs: [{left:"t6_l1",right:"t6_r1"},{left:"t6_l2",right:"t6_r2"},{left:"t6_l3",right:"t6_r3"}] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" }
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "✨", color: "#FFC107" },
    interactive: { type: "gap-fill", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", sentence: "t7_sent", choices: ["t7_qa2", "t7_qb2", "t7_qc2", "t7_qd2"], correctIndex: 0 },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" }
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "simple-icon", icon: "💬", color: "#00BCD4" },
    interactive: { type: "drag-to-bucket", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", buckets: [{id:"b1",label:"t8_bl1"},{id:"b2",label:"t8_bl2"}], items: [{text:"t8_i1",bucketId:"b1"},{text:"t8_i2",bucketId:"b2"},{text:"t8_i3",bucketId:"b1"},{text:"t8_i4",bucketId:"b2"}] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" }
  },
  {
    infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "simple-icon", icon: "✍️", color: "#FF5722" },
    interactive: { type: "word-order", instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2", words: ["t9_w1", "t9_w2", "t9_w3", "t9_w4", "t9_w5", "t9_w6", "t9_w7"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6].slice(0, 7) },
    quiz: { question: "t9_q", choices: ["t9_qa", "t9_qb", "t9_qc", "t9_qd"], answer: "t9_qa" }
  },
  {
    infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "simple-icon", icon: "🧑‍⚖️", color: "#3F51B5" },
    interactive: { type: "highlight-text", instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2", tokens: ["t10_tk1","t10_tk2","t10_tk3","t10_tk4","t10_tk5","t10_tk6","t10_tk7"].filter(x=>x!==""), correctIndices: [3] },
    quiz: { question: "t10_q", choices: ["t10_qa", "t10_qb", "t10_qc", "t10_qd"], answer: "t10_qa" }
  },
  {
    infoTitle: "t11_title", infoText: "t11_text",
    svg: { type: "simple-icon", icon: "🌱", color: "#4CAF50" },
    interactive: { type: "match-pairs", instruction: "t11_inst", hint1: "t11_h1", hint2: "t11_h2", pairs: [{left:"t11_l1",right:"t11_r1"},{left:"t11_l2",right:"t11_r2"},{left:"t11_l3",right:"t11_r3"}] },
    quiz: { question: "t11_q", choices: ["t11_qa", "t11_qb", "t11_qc", "t11_qd"], answer: "t11_qa" }
  },
  {
    infoTitle: "t12_title", infoText: "t12_text",
    svg: { type: "simple-icon", icon: "📜", color: "#607D8B" },
    interactive: { type: "gap-fill", instruction: "t12_inst", hint1: "t12_h1", hint2: "t12_h2", sentence: "t12_sent", choices: ["t12_qa2", "t12_qb2", "t12_qc2", "t12_qd2"], correctIndex: 0 },
    quiz: { question: "t12_q", choices: ["t12_qa", "t12_qb", "t12_qc", "t12_qd"], answer: "t12_qa" }
  },
  {
    infoTitle: "t13_title", infoText: "t13_text",
    svg: { type: "simple-icon", icon: "💥", color: "#FF5252" },
    interactive: { type: "drag-to-bucket", instruction: "t13_inst", hint1: "t13_h1", hint2: "t13_h2", buckets: [{id:"b1",label:"t13_bl1"},{id:"b2",label:"t13_bl2"}], items: [{text:"t13_i1",bucketId:"b1"},{text:"t13_i2",bucketId:"b2"},{text:"t13_i3",bucketId:"b1"},{text:"t13_i4",bucketId:"b2"}] },
    quiz: { question: "t13_q", choices: ["t13_qa", "t13_qb", "t13_qc", "t13_qd"], answer: "t13_qa" }
  },
  {
    infoTitle: "t14_title", infoText: "t14_text",
    svg: { type: "simple-icon", icon: "🎓", color: "#3F51B5" },
    interactive: { type: "word-order", instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2", words: ["t14_w1", "t14_w2", "t14_w3", "t14_w4", "t14_w5", "t14_w6", "t14_w7"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6].slice(0, 7) },
    quiz: { question: "t14_q", choices: ["t14_qa", "t14_qb", "t14_qc", "t14_qd"], answer: "t14_qa" }
  },
  {
    infoTitle: "t15_title", infoText: "t15_text",
    svg: { type: "simple-icon", icon: "🛠️", color: "#FF9800" },
    interactive: { type: "highlight-text", instruction: "t15_inst", hint1: "t15_h1", hint2: "t15_h2", tokens: ["t15_tk1","t15_tk2","t15_tk3","t15_tk4","t15_tk5","t15_tk6","t15_tk7"].filter(x=>x!==""), correctIndices: [0,4,5] },
    quiz: { question: "t15_q", choices: ["t15_qa", "t15_qb", "t15_qc", "t15_qd"], answer: "t15_qa" }
  }
];
