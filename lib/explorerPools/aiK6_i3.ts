// @ts-nocheck
// lib/explorerPools/aiK6_i3.ts
import type { PoolTopicDef } from "./types";

export const INFO_K6_I3_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "KI Insel 3: Zukunft & Ethik",
    t1_title: "Starke vs. Schwache KI", t1_text: "Schwache KI kann nur eine Sache gut (z.B. Schach). Starke KI gäbe es, wenn sie alles wie ein Mensch könnte.", t1_inst: "Paare zuordnen:", t1_h1: "Spezialist vs Alleskönner.", t1_h2: "Arten von KI.", t1_q: "Welche KI nutzen wir heute?", t1_qa: "Schwache KI", t1_qb: "Starke KI", t1_qc: "Super-KI", t1_qd: "Gar keine",
    t1_l1: "Schach-KI", t1_r1: "Spezialisiert", t1_l2: "Mensch", t1_r2: "Alleskönner", t1_l3: "Zukunft-KI", t1_r3: "Bewusstsein",
    t2_title: "Singularität", t2_text: "Die Idee eines Zeitpunkts, an dem KI schlauer wird als alle Menschen zusammen. Noch ist das Science-Fiction!", t2_inst: "Lücke füllen:", t2_h1: "Zukunftsvision.", t2_h2: "Superintelligenz.", t2_q: "Was ist Singularität?", t2_qa: "KI übertrifft Menschen", t2_qb: "Ein neuer Computer-Typ", t2_qc: "Ein schwarzes Loch", t2_qd: "Das Ende des Internets",
    t2_sent: "Singularität beschreibt extreme ___.", t2_qa2: "Intelligenz", t2_qb2: "Kälte", t2_qc2: "Dunkelheit", t2_qd2: "Länge",
    t3_title: "KI-Sicherheit", t3_text: "Wir müssen dafür sorgen, dass KI immer das tut, was wir wollen, und nicht gefährlich wird.", t3_inst: "Sortieren:", t3_h1: "Sicher vs Riskant.", t3_h2: "Kontrolle behalten.", t3_q: "Was ist ein 'Not-Aus' für KI?", t3_qa: "Ein Sicherheits-Schalter", t3_qb: "Eine leere Batterie", t3_qc: "Ein Update", t3_qd: "Ein Passwort",
    t3_bl1: "Sicherheitsmaßnahme", t3_bl2: "Risiko", t3_i1: "Klare Regeln", t3_i2: "Kontrollverlust", t3_i3: "Not-Aus-Knopf", t3_i4: "Fehlerhafter Code",
    t4_title: "Wem gehört KI-Kunst?", t4_text: "Wenn eine KI ein Bild malt, ist die Frage schwierig: Gehört es dem Programmierer oder der KI?", t4_inst: "Wörter ordnen:", t4_h1: "Urheberrecht.", t4_h2: "Wem gehört es?", t4_q: "Wer erschafft das Bild bei einer KI?", t4_qa: "Mensch gibt Befehl", t4_qb: "Die KI malt alleine", t4_qc: "Niemand", t4_qd: "Der Drucker",
    t4_w1: "Rechte", t4_w2: "an", t4_w3: "KI", t4_w4: "Bildern", t4_w5: "sind", t4_w6: "oft", t4_w7: "unklar.",
    t5_title: "Deepfakes", t5_text: "KI kann Videos so verändern, dass Menschen Dinge sagen, die sie nie gesagt haben. Sei skeptisch!", t5_inst: "Markiere die drei Schlüsselwörter über Deepfakes:", t5_h1: "Echt oder Fake?", t5_h2: "Manipulation.", t5_q: "Was ist ein Deepfake?", t5_qa: "Gefälschtes KI-Video", t5_qb: "Ein tiefes Loch", t5_qc: "Ein neues Spiel", t5_qd: "Ein Foto-Filter",
    t5_tk1: "Deepfakes", t5_tk2: "fälschen", t5_tk3: "sogar", t5_tk4: "Videos", t5_tk5: "von", t5_tk6: "dir.", t5_tk7: "",
    t6_title: "KI Vorurteile (Bias)", t6_text: "Wenn die Trainingsdaten einseitig sind, lernt die KI falsche Vorurteile. Das ist unfair!", t6_inst: "Paare zuordnen:", t6_h1: "Fairness.", t6_h2: "Einseitige Daten.", t6_q: "Woher kommen KI-Vorurteile?", t6_qa: "Aus unfairen Daten", t6_qb: "Aus dem Stromnetz", t6_qc: "Vom Programmierer", t6_qd: "Zufall",
    t6_l1: "Daten", t6_r1: "Grundlage", t6_l2: "Vorurteil", t6_r2: "Ergebnis", t6_l3: "Fairness", t6_r3: "Ziel",
    t7_title: "Erklärbare KI", t7_text: "Wir wollen verstehen, WARUM eine KI eine Entscheidung trifft. Das nennt man Transparenz.", t7_inst: "Lücke füllen:", t7_h1: "Durchblick.", t7_h2: "Gründe finden.", t7_q: "Warum ist Transparenz wichtig?", t7_qa: "Um KI zu vertrauen", t7_qb: "Damit sie schneller wird", t7_qc: "Damit sie bunter ist", t7_qd: "Gar nicht",
    t7_sent: "Wir brauchen ___ bei Entscheidungen.", t7_qa2: "Klarheit", t7_qb2: "Farbe", t7_qc2: "Strom", t7_qd2: "Musik",
    t8_title: "Datenschutz", t8_text: "KIs wissen oft sehr viel über uns. Wir müssen unsere privaten Daten schützen.", t8_inst: "Sortieren:", t8_h1: "Privat vs Öffentlich.", t8_h2: "Meine Daten.", t8_q: "Was sollte man KI nicht sagen?", t8_qa: "Passwörter", t8_qb: "Lieblingsfarbe", t8_qc: "Vornamen", t8_qd: "Witze",
    t8_bl1: "Geheim halten", t8_bl2: "Teilbar", t8_i1: "Adresse", t8_i2: "Hobbys", t8_i3: "Bankdaten", t8_i4: "Musikgeschmack",
    t9_title: "Autonome Waffen", t9_text: "Es gibt Streit darüber, ob Roboter im Krieg selbst Entscheidungen treffen dürfen. Viele lehnen das ab.", t9_inst: "Wörter ordnen:", t9_h1: "Schwieriges Thema.", t9_h2: "Ethik.", t9_q: "Was ist die Gefahr?", t9_qa: "Entscheidung ohne Mensch", t9_qb: "Roboter werden zu schwer", t9_qc: "Stromausfall", t9_qd: "Keine Munition",
    t9_w1: "Ethik", t9_w2: "verbietet", t9_w3: "oft", t9_w4: "autonome", t9_w5: "Waffensysteme", t9_w6: "im", t9_w7: "Krieg.",
    t10_title: "Kann KI fühlen?", t10_text: "KIs können Gefühle simulieren, aber sie haben keine echten Emotionen wie wir Menschen.", t10_inst: "Markiere die zwei Wörter dafür, was KI nur vortäuscht:", t10_h1: "Echt vs Gespielt.", t10_h2: "Emotionen.", t10_q: "Hat eine KI ein Herz?", t10_qa: "Nein, nur Code", t10_qb: "Ja, aus Metall", t10_qc: "Manchmal", t10_qd: "Nur wenn sie lächelt",
    t10_tk1: "KI", t10_tk2: "simuliert", t10_tk3: "Gefühle", t10_tk4: "ohne", t10_tk5: "echtes", t10_tk6: "Herz.", t10_tk7: "",
    t11_title: "Lernen mit KI", t11_text: "KI kann dein persönlicher Tutor sein, der dir Aufgaben genau in deinem Tempo erklärt.", t11_inst: "Paare zuordnen:", t11_h1: "Schule der Zukunft.", t11_h2: "Lernhilfe.", t11_q: "Wie hilft KI beim Lernen?", t11_qa: "Erklärt Dinge individuell", t11_qb: "Schreibt alle Noten", t11_qc: "Macht Pause", t11_qd: "Löscht Hausaufgaben",
    t11_l1: "Schüler", t11_r1: "Lerner", t11_l2: "KI Tutor", t11_r2: "Erklärer", t11_l3: "Aufgabe", t11_r3: "Training",
    t12_title: "Neuralink & Gehirn", t12_text: "Forscher arbeiten an Chips, die das Gehirn direkt mit Computern verbinden könnten.", t12_inst: "Lücke füllen:", t12_h1: "Mensch-Maschine.", t12_h2: "Schnittstellen.", t12_q: "Was ist ein Brain-Computer-Interface?", t12_qa: "Gehirn-Computer-Verbindung", t12_qb: "Ein schneller Kopfhörer", t12_qc: "Ein neuer Helm", t12_qd: "Eine Brille",
    t12_sent: "Gedanken steuern den ___.", t12_qa2: "Computer", t12_qb2: "Schuh", t12_qc2: "Apfel", t12_qd2: "Baum",
    t13_title: "KI-Gesetze", t13_text: "Länder auf der ganzen Welt schreiben Regeln, wie KI sicher und fair genutzt werden darf.", t13_inst: "Sortieren:", t13_h1: "Erlaubt vs Verboten.", t13_h2: "Regeln.", t13_q: "Warum brauchen wir KI-Gesetze?", t13_qa: "Zum Schutz der Menschen", t13_qb: "Um KI teurer zu machen", t13_qc: "Damit sie schöner aussieht", t13_qd: "Zufall",
    t13_bl1: "Erlaubt", t13_bl2: "Verboten", t13_i1: "Medizin-Hilfe", t13_i2: "Menschen täuschen", t13_i3: "Verkehr steuern", t13_i4: "Daten stehlen",
    t14_title: "Kritische Distanz", t14_text: "Wir sollten nicht alles glauben, was eine KI sagt. Sie kann auch Fehler machen oder lügen.", t14_inst: "Wörter ordnen:", t14_h1: "Hinterfragen.", t14_h2: "Vorsicht.", t14_q: "Was tun bei KI-Antworten?", t14_qa: "Informationen prüfen", t14_qb: "Alles kopieren", t14_qc: "Immer glauben", t14_qd: "Sofort löschen",
    t14_w1: "Prüfe", t14_w2: "die", t14_w3: "Fakten", t14_w4: "bevor", t14_w5: "du", t14_w6: "ihr", t14_w7: "vertraust.",
    t15_title: "Deine Zukunft", t15_text: "Du kannst mitentscheiden, wie wir KI nutzen. Lerne sie zu verstehen und gestalte mit!", t15_inst: "Markiere die drei Wörter, die zeigen, wie du die Zukunft formst:", t15_h1: "Du bist wichtig.", t15_h2: "Mitmachen.", t15_q: "Wer bestimmt über KI?", t15_qa: "Wir alle", t15_qb: "Nur die KI", t15_qc: "Die Computer", t15_qd: "Niemand",
    t15_tk1: "Deine", t15_tk2: "Ideen", t15_tk3: "gestalten", t15_tk4: "Zukunft", t15_tk5: "für", t15_tk6: "alle.", t15_tk7: ""
  },
  en: {
    explorer_title: "AI Island 3: Future & Ethics",
    t1_title: "Weak vs Strong AI", t1_text: "Weak AI is good at only one thing (e.g., chess). Strong AI would exist if it could do everything like a human.", t1_inst: "Match the pairs:", t1_h1: "Specialist vs all-rounder.", t1_h2: "Types of AI.", t1_q: "Which AI do we use today?", t1_qa: "Weak AI", t1_qb: "Strong AI", t1_qc: "Super AI", t1_qd: "None at all",
    t1_l1: "Chess AI", t1_r1: "Specialized", t1_l2: "Human", t1_r2: "All-rounder", t1_l3: "Future AI", t1_r3: "Consciousness",
    t2_title: "Singularity", t2_text: "The idea of a point in time when AI becomes smarter than all humans combined. It's still science fiction!", t2_inst: "Fill in the blank:", t2_h1: "Future vision.", t2_h2: "Super intelligence.", t2_q: "What is singularity?", t2_qa: "AI surpasses humans", t2_qb: "A new type of computer", t2_qc: "A black hole", t2_qd: "The end of the internet",
    t2_sent: "Singularity describes extreme ___.", t2_qa2: "intelligence", t2_qb2: "cold", t2_qc2: "darkness", t2_qd2: "length",
    t3_title: "AI Safety", t3_text: "We must ensure that AI always does what we want and doesn't become dangerous.", t3_inst: "Sort them:", t3_h1: "Safe vs Risky.", t3_h2: "Keeping control.", t3_q: "What is an 'emergency stop' for AI?", t3_qa: "A safety switch", t3_qb: "A dead battery", t3_qc: "An update", t3_qd: "A password",
    t3_bl1: "Safety measure", t3_bl2: "Risk", t3_i1: "Clear rules", t3_i2: "Loss of control", t3_i3: "Emergency stop button", t3_i4: "Faulty code",
    t4_title: "Who owns AI Art?", t4_text: "When an AI paints a picture, the question is difficult: Does it belong to the programmer or the AI?", t4_inst: "Order the words:", t4_h1: "Copyright.", t4_h2: "Who owns it?", t4_q: "Who creates the image in an AI?", t4_qa: "Human gives command", t4_qb: "AI paints alone", t4_qc: "Nobody", t4_qd: "The printer",
    t4_w1: "Rights", t4_w2: "to", t4_w3: "AI", t4_w4: "images", t4_w5: "are", t4_w6: "often", t4_w7: "unclear.",
    t5_title: "Deepfakes", t5_text: "AI can change videos so that people say things they never said. Be skeptical!", t5_inst: "Highlight the three key words about deepfakes:", t5_h1: "Real or fake?", t5_h2: "Manipulation.", t5_q: "What is a deepfake?", t5_qa: "Fake AI video", t5_qb: "A deep hole", t5_qc: "A new game", t5_qd: "A photo filter",
    t5_tk1: "Deepfakes", t5_tk2: "fake", t5_tk3: "even", t5_tk4: "videos", t5_tk5: "of", t5_tk6: "you.", t5_tk7: "",
    t6_title: "AI Biases", t6_text: "If the training data is biased, the AI learns wrong prejudices. That's unfair!", t6_inst: "Match the pairs:", t6_h1: "Fairness.", t6_h2: "One-sided data.", t6_q: "Where do AI biases come from?", t6_qa: "From unfair data", t6_qb: "From the power grid", t6_qc: "From the programmer", t6_qd: "Random",
    t6_l1: "Data", t6_r1: "Basis", t6_l2: "Bias", t6_r2: "Result", t6_l3: "Fairness", t6_r3: "Goal",
    t7_title: "Explainable AI", t7_text: "We want to understand WHY an AI makes a decision. This is called transparency.", t7_inst: "Fill in the blank:", t7_h1: "Insight.", t7_h2: "Finding reasons.", t7_q: "Why is transparency important?", t7_qa: "To trust AI", t7_qb: "To make it faster", t7_qc: "To make it colorful", t7_qd: "Not at all",
    t7_sent: "We need ___ in decisions.", t7_qa2: "clarity", t7_qb2: "color", t7_qc2: "power", t7_qd2: "music",
    t8_title: "Data Protection", t8_text: "AIs often know a lot about us. We must protect our private data.", t8_inst: "Sort them:", t8_h1: "Private vs Public.", t8_h2: "My data.", t8_q: "What should you not tell AI?", t8_qa: "Passwords", t8_qb: "Favorite color", t8_qc: "First names", t8_qd: "Jokes",
    t8_bl1: "Keep secret", t8_bl2: "Shareable", t8_i1: "Address", t8_i2: "Hobbies", t8_i3: "Bank details", t8_i4: "Music taste",
    t9_title: "Autonomous Weapons", t9_text: "There is debate over whether robots in war should make decisions themselves. Many oppose this.", t9_inst: "Order the words:", t9_h1: "Difficult topic.", t9_h2: "Ethics.", t9_q: "What is the danger?", t9_qa: "Decision without human", t9_qb: "Robots get too heavy", t9_qc: "Power failure", t9_qd: "No ammunition",
    t9_w1: "Ethics", t9_w2: "often", t9_w3: "forbids", t9_w4: "autonomous", t9_w5: "weapon", t9_w6: "systems.", t9_w7: "",
    t10_title: "Can AI feel?", t10_text: "AIs can simulate feelings, but they don't have real emotions like we humans do.", t10_inst: "Highlight the two words for what AI only pretends:", t10_h1: "Real vs Played.", t10_h2: "Emotions.", t10_q: "Does an AI have a heart?", t10_qa: "No, only code", t10_qb: "Yes, made of metal", t10_qc: "Sometimes", t10_qd: "Only when it smiles",
    t10_tk1: "AI", t10_tk2: "simulates", t10_tk3: "feelings", t10_tk4: "without", t10_tk5: "a", t10_tk6: "real", t10_tk7: "heart.",
    t11_title: "Learning with AI", t11_text: "AI can be your personal tutor, explaining tasks exactly at your pace.", t11_inst: "Match the pairs:", t11_h1: "School of the future.", t11_h2: "Learning aid.", t11_q: "How does AI help with learning?", t11_qa: "Explains things individually", t11_qb: "Writes all grades", t11_qc: "Takes a break", t11_qd: "Deletes homework",
    t11_l1: "Student", t11_r1: "Learner", t11_l2: "AI Tutor", t11_r2: "Explainer", t11_l3: "Task", t11_r3: "Training",
    t12_title: "Neuralink & Brain", t12_text: "Researchers are working on chips that could connect the brain directly to computers.", t12_inst: "Fill in the blank:", t12_h1: "Human-machine.", t12_h2: "Interfaces.", t12_q: "What is a brain-computer interface?", t12_qa: "Brain-computer connection", t12_qb: "Fast headphones", t12_qc: "A new helmet", t12_qd: "Glasses",
    t12_sent: "Thoughts control the ___.", t12_qa2: "computer", t12_qb2: "shoe", t12_qc2: "apple", t12_qd2: "tree",
    t13_title: "AI Laws", t13_text: "Countries worldwide are writing rules on how AI may be used safely and fairly.", t13_inst: "Sort them:", t13_h1: "Allowed vs Forbidden.", t13_h2: "Rules.", t13_q: "Why do we need AI laws?", t13_qa: "To protect people", t13_qb: "To make AI expensive", t13_qc: "To make it look better", t13_qd: "Random",
    t13_bl1: "Allowed", t13_bl2: "Forbidden", t13_i1: "Medical aid", t13_i2: "Deceiving humans", t13_i3: "Traffic control", t13_i4: "Stealing data",
    t14_title: "Critical Distance", t14_text: "We should not believe everything an AI says. It can also make mistakes or lie.", t14_inst: "Order the words:", t14_h1: "Questioning.", t14_h2: "Caution.", t14_q: "What to do with AI answers?", t14_qa: "Check facts", t14_qb: "Copy everything", t14_qc: "Always believe", t14_qd: "Delete immediately",
    t14_w1: "Check", t14_w2: "the", t14_w3: "facts", t14_w4: "before", t14_w5: "you", t14_w6: "trust", t14_w7: "it.",
    t15_title: "Your Future", t15_text: "You can help decide how we use AI. Learn to understand it and help shape it!", t15_inst: "Highlight the three words that show how you shape the future:", t15_h1: "You are important.", t15_h2: "Join in.", t15_q: "Who decides about AI?", t15_qa: "All of us", t15_qb: "Only AI", t15_qc: "The computers", t15_qd: "Nobody",
    t15_tk1: "Your", t15_tk2: "ideas", t15_tk3: "shape", t15_tk4: "tomorrow", t15_tk5: "for", t15_tk6: "everyone.", t15_tk7: ""
  },
  hu: {
    explorer_title: "MI Sziget 3: Jövő & Etika",
    t1_title: "Gyenge vs Erős MI", t1_text: "A gyenge MI csak egy dologban jó (pl. sakk). Az erős MI akkor jönne létre, ha mindenre képes lenne, mint egy ember.", t1_inst: "Párosítás:", t1_h1: "Specialista vs mindentudó.", t1_h2: "MI típusok.", t1_q: "Milyen MI-t használunk ma?", t1_qa: "Gyenge MI", t1_qb: "Erős MI", t1_qc: "Szuper MI", t1_qd: "Egyik sem",
    t1_l1: "Sakk-MI", t1_r1: "Speciális", t1_l2: "Ember", t1_r2: "Mindentudó", t1_l3: "Jövő-MI", t1_r3: "Tudat",
    t2_title: "Szingularitás", t2_text: "Az az elméleti időpont, amikor a MI okosabbá válik az összes embernél együttvéve. Ez még tudományos-fantasztikum!", t2_inst: "Hiánypótlás:", t2_h1: "Jövőkép.", t2_h2: "Szuperintelligencia.", t2_q: "Mi az a szingularitás?", t2_qa: "A MI lehagyja az embert", t2_qb: "Egy új gép", t2_qc: "Fekete lyuk", t2_qd: "A net vége",
    t2_sent: "A szingularitás extrém ___ jelent.", t2_qa2: "intelligenciát", t2_qb2: "hideget", t2_qc2: "sötétséget", t2_qd2: "hosszúságot",
    t3_title: "MI biztonság", t3_text: "Gondoskodnunk kell arról, hogy a MI mindig azt tegye, amit akarunk, és ne váljon veszélyessé.", t3_inst: "Válogatás:", t3_h1: "Biztonságos vs kockázatos.", t3_h2: "Irányítás megőrzése.", t3_q: "Mi a MI 'vészleállítója'?", t3_qa: "Egy biztonsági kapcsoló", t3_qb: "Lemerült akku", t3_qc: "Frissítés", t3_qd: "Jelszó",
    t3_bl1: "Biztonság", t3_bl2: "Kockázat", t3_i1: "Világos szabályok", t3_i2: "Irányítás elvesztése", t3_i3: "Vészleállító gomb", t3_i4: "Hibás kód",
    t4_title: "Kié a MI művészet?", t4_text: "Ha a MI fest egy képet, nehéz kérdés: a programozóé vagy a gépé a kép?", t4_inst: "Szórend:", t4_h1: "Szerzői jog.", t4_h2: "Kié a tulajdon?", t4_q: "Ki alkotja a képet a MI-nél?", t4_qa: "Az ember ad parancsot", t4_qb: "A gép magától fest", t4_qc: "Senki", t4_qd: "A nyomtató",
    t4_w1: "A MI", t4_w2: "által", t4_w3: "készített", t4_w4: "képek", t4_w5: "joga", t4_w6: "gyakran", t4_w7: "vitatott.",
    t5_title: "Deepfakes", t5_text: "A MI képes úgy módosítani videókat, hogy az emberek olyat mondanak, amit sosem tettek. Légy gyanakvó!", t5_inst: "Jelöld meg a három kulcsszót a deepfake-ekről:", t5_h1: "Igazi vagy hamis?", t5_h2: "Manipuláció.", t5_q: "Mi az a deepfake?", t5_qa: "Hamisított MI videó", t5_qb: "Egy mély lyuk", t5_qc: "Új játék", t5_qd: "Fotó szűrő",
    t5_tk1: "A deepfake-ek", t5_tk2: "meghamisítják", t5_tk3: "akár", t5_tk4: "a videóidat", t5_tk5: "is.", t5_tk6: "", t5_tk7: "",
    t6_title: "MI előítéletek", t6_text: "Ha a tanító adatok egyoldalúak, a MI is rossz előítéleteket tanul. Ez igazságtalan!", t6_inst: "Párosítás:", t6_h1: "Tisztesség.", t6_h2: "Egyoldalú adatok.", t6_q: "Honnan jönnek a MI előítéletei?", t6_qa: "A rossz adatokból", t6_qb: "Az elektromos hálózatból", t6_qc: "A programozótól", t6_qd: "Véletlen",
    t6_l1: "Adat", t6_r1: "Alap", t6_l2: "Előítélet", t6_r2: "Eredmény", t6_l3: "Tisztesség", t6_r3: "Cél",
    t7_title: "Érthető MI", t7_text: "Szeretnénk megérteni, MIÉRT hoz egy döntést a gép. Ezt nevezzük átláthatóságnak.", t7_inst: "Hiánypótlás:", t7_h1: "Betekintés.", t7_h2: "Okok keresése.", t7_q: "Miért fontos az átláthatóság?", t7_qa: "Hogy bízhassunk a MI-ben", t7_qb: "Hogy gyorsabb legyen", t7_qc: "Hogy színesebb legyen", t7_qd: "Egyáltalán nem",
    t7_sent: "Szükségünk van ___ a döntéseknél.", t7_qa2: "világosságra", t7_qb2: "színre", t7_qc2: "áramra", t7_qd2: "zenére",
    t8_title: "Adatvédelem", t8_text: "A MI sokat tud rólunk. Meg kell védenünk a magánadatainkat.", t8_inst: "Válogatás:", t8_h1: "Privát vs nyilvános.", t8_h2: "Az adataim.", t8_q: "Mit ne áruljunk el a MI-nek?", t8_qa: "Jelszavak", t8_qb: "Kedvenc szín", t8_qc: "Keresztnév", t8_qd: "Viccek",
    t8_bl1: "Titok", t8_bl2: "Megosztható", t8_i1: "Lakcím", t8_i2: "Hobbi", t8_i3: "Banki adatok", t8_i4: "Zenei ízlés",
    t9_title: "Autonóm fegyverek", t9_text: "Vitatott, hogy a robotok a háborúban maguk dönthetnek-e. Sokan ellenzik ezt.", t9_inst: "Szórend:", t9_h1: "Nehéz téma.", t9_h2: "Etika.", t9_q: "Mi a veszély?", t9_qa: "Döntés ember nélkül", t9_qb: "A robotok túl nehezek", t9_qc: "Áramszünet", t9_qd: "Nincs lőszer",
    t9_w1: "Az etika", t9_w2: "gyakran", t9_w3: "tiltja", t9_w4: "az autonóm", t9_w5: "fegyvereket.", t9_w6: "", t9_w7: "",
    t10_title: "Érez a MI?", t10_text: "A MI képes érzelmeket utánozni, de nincsenek valódi érzései, mint nekünk.", t10_inst: "Jelöld meg a két szót arról, mit színlel csak a MI:", t10_h1: "Igazi vs utánzott.", t10_h2: "Érzelmek.", t10_q: "Van a MI-nek szíve?", t10_qa: "Nincs, csak kód", t10_qb: "Igen, fémből", t10_qc: "Néha", t10_qd: "Csak ha mosolyog",
    t10_tk1: "A MI", t10_tk2: "utánozza", t10_tk3: "az érzelmeket", t10_tk4: "de", t10_tk5: "nem", t10_tk6: "érez.", t10_tk7: "",
    t11_title: "Tanulás MI-vel", t11_text: "A MI lehet a személyes tutorod, aki a te tempódban magyaráz el mindent.", t11_inst: "Párosítás:", t11_h1: "A jövő iskolája.", t11_h2: "Tanulási segéd.", t11_q: "Hogyan segít a MI a tanulásban?", t11_qa: "Egyénileg magyaráz", t11_qb: "Megírja a jegyeket", t11_qc: "Szünetet tart", t11_qd: "Törli a házit",
    t11_l1: "Diák", t11_r1: "Tanuló", t11_l2: "MI Tutor", t11_r2: "Magyarázó", t11_l3: "Feladat", t11_r3: "Gyakorlás",
    t12_title: "Neuralink & Agy", t12_text: "A kutatók olyan chipeken dolgoznak, amik közvetlenül összekötik az agyat a géppel.", t12_inst: "Hiánypótlás:", t12_h1: "Ember-gép.", t12_h2: "Interfészek.", t12_q: "Mi az az agy-gép kapcsolat?", t12_qa: "Agy és gép összekötése", t12_qb: "Egy gyors fülhallgató", t12_qc: "Egy új sisak", t12_qd: "Szemüveg",
    t12_sent: "A gondolatok irányítják a ___.", t12_qa2: "számítógépet", t12_qb2: "cipőt", t12_qc2: "almát", t12_qd2: "fát",
    t13_title: "MI törvények", t13_text: "A világ országai szabályokat írnak, hogy a MI biztonságos és tisztességes legyen.", t13_inst: "Válogatás:", t13_h1: "Szabad vs Tilos.", t13_h2: "Szabályok.", t13_q: "Miért kell MI törvény?", t13_qa: "Az emberek védelmében", t13_qb: "Hogy drágább legyen", t13_qc: "Hogy szebb legyen", t13_qd: "Véletlen",
    t13_bl1: "Szabad", t13_bl2: "Tilos", t13_i1: "Orvosi segítség", t13_i2: "Emberek átverése", t13_i3: "Forgalomirányítás", t13_i4: "Adatlopás",
    t14_title: "Kritikus szemlélet", t14_text: "Ne higgyünk el mindent a MI-nek! Hibázhat is, vagy tévedhet.", t14_inst: "Szórend:", t14_h1: "Kérdőjelezz meg.", t14_h2: "Vigyázat.", t14_q: "Mit tegyünk a MI válaszával?", t14_qa: "Ellenőrizzük a tényeket", t14_qb: "Másoljunk le mindent", t14_qc: "Mindig higgyük el", t14_qd: "Azonnal töröljük",
    t14_w1: "Mindig", t14_w2: "ellenőrizd", t14_w3: "a tényeket", t14_w4: "mielőtt", t14_w5: "hinnél", t14_w6: "neki.", t14_w7: "",
    t15_title: "A te jövőd", t15_text: "Te is dönthetsz arról, hogyan használjuk a MI-t. Tanulj róla és alakítsd te is!", t15_inst: "Jelöld meg a három szót arról, hogyan alakítod a jövőt:", t15_h1: "Fontos vagy.", t15_h2: "Vegyél részt.", t15_q: "Ki dönt a MI-ről?", t15_qa: "Mindannyian", t15_qb: "Csak a MI", t15_qc: "A gépek", t15_qd: "Senki",
    t15_tk1: "A te", t15_tk2: "ötleteid", t15_tk3: "alakítják", t15_tk4: "a jövőt", t15_tk5: "mindenkinek.", t15_tk6: "", t15_tk7: ""
  },
  ro: {
    explorer_title: "Insula IA 3: Viitor & Etică",
    t1_title: "IA Slabă vs IA Puternică", t1_text: "IA slabă e bună la un singur lucru (ex: șah). IA puternică ar exista dacă ar putea face totul ca un om.", t1_inst: "Potrivește perechile:", t1_h1: "Specialist vs bun la toate.", t1_h2: "Tipuri de IA.", t1_q: "Ce fel de IA folosim azi?", t1_qa: "IA slabă", t1_qb: "IA puternică", t1_qc: "Super IA", t1_qd: "Deloc",
    t1_l1: "IA Șah", t1_r1: "Specializată", t1_l2: "Om", t1_r2: "Bun la toate", t1_l3: "IA Viitor", t1_r3: "Conștiință",
    t2_title: "Singularitatea", t2_text: "Ideea unui moment în care IA devine mai deșteaptă decât toți oamenii la un loc. Încă e science-fiction!", t2_inst: "Completează spațiul:", t2_h1: "Viziune viitor.", t2_h2: "Super inteligență.", t2_q: "Ce este singularitatea?", t2_qa: "IA depășește omul", t2_qb: "Un nou tip de PC", t2_qc: "O gaură neagră", t2_qd: "Sfârșitul netului",
    t2_sent: "Singularitatea descrie o ___ extremă.", t2_qa2: "inteligență", t2_qb2: "răceală", t2_qc2: "întunecime", t2_qd2: "lungime",
    t3_title: "Siguranța IA", t3_text: "Trebuie să ne asigurăm că IA face mereu ce vrem noi și nu devine periculoasă.", t3_inst: "Sortează:", t3_h1: "Sigur vs Riscant.", t3_h2: "Control.", t3_q: "Ce este un 'buton de urgență'?", t3_qa: "Un întrerupător siguranță", t3_qb: "O baterie goală", t3_qc: "Un update", t3_qd: "O parolă",
    t3_bl1: "Măsură siguranță", t3_bl2: "Risc", t3_i1: "Reguli clare", t3_i2: "Pierdere control", t3_i3: "Buton oprire", t3_i4: "Cod eronat",
    t4_title: "A cui e arta IA?", t4_text: "Când o IA pictează, întrebarea e grea: aparține programatorului sau mașinii?", t4_inst: "Ordonează cuvintele:", t4_h1: "Drept de autor.", t4_h2: "A cui e proprietatea?", t4_q: "Cine creează imaginea?", t4_qa: "Omul dă comanda", t4_qb: "Mașina pictează singură", t4_qc: "Nimeni", t4_qd: "Imprimanta",
    t4_w1: "Drepturile", t4_w2: "asupra", t4_w3: "imaginilor", t4_w4: "IA", t4_w5: "sunt", t4_w6: "adesea", t4_w7: "neclare.",
    t5_title: "Deepfakes", t5_text: "IA poate schimba videourile încât oamenii spun lucruri pe care nu le-au zis. Fii sceptic!", t5_inst: "Evidențiază cele trei cuvinte-cheie despre deepfakes:", t5_h1: "Real sau fals?", t5_h2: "Manipulare.", t5_q: "Ce este un deepfake?", t5_qa: "Video IA falsificat", t5_qb: "O groapă adâncă", t5_qc: "Un joc nou", t5_qd: "Un filtru foto",
    t5_tk1: "Deepfake-urile", t5_tk2: "falsifică", t5_tk3: "chiar", t5_tk4: "videoclipurile", t5_tk5: "tale.", t5_tk6: "", t5_tk7: "",
    t6_title: "Prejudecăți IA", t6_text: "Dacă datele de antrenare sunt părtinitoare, IA învață prejudecăți greșite. E nedrept!", t6_inst: "Potrivește perechile:", t6_h1: "Echitate.", t6_h2: "Date părtinitoare.", t6_q: "De unde vin prejudecățile IA?", t6_qa: "Din date incorecte", t6_qb: "Din rețeaua electrică", t6_qc: "De la programator", t6_qd: "Întâmplător",
    t6_l1: "Date", t6_r1: "Bază", t6_l2: "Prejudecată", t6_r2: "Rezultat", t6_l3: "Echitate", t6_r3: "Scop",
    t7_title: "IA Explicabilă", t7_text: "Vrem să înțelegem DE CE o IA ia o decizie. Aceasta se numește transparență.", t7_inst: "Completează spațiul:", t7_h1: "Înțelegere.", t7_h2: "Găsire motive.", t7_q: "De ce e importantă transparența?", t7_qa: "Pentru încredere", t7_qb: "Pentru viteză", t7_qc: "Pentru culoare", t7_qd: "Deloc",
    t7_sent: "Avem nevoie de ___ în decizii.", t7_qa2: "claritate", t7_qb2: "culoare", t7_qc2: "curent", t7_qd2: "muzică",
    t8_title: "Protecția datelor", t8_text: "IA-urile știu multe despre noi. Trebuie să ne protejăm datele private.", t8_inst: "Sortează:", t8_h1: "Privat vs Public.", t8_h2: "Datele mele.", t8_q: "Ce să nu îi spui unei IA?", t8_qa: "Parolele", t8_qb: "Culoarea preferată", t8_qc: "Prenumele", t8_qd: "Bancuri",
    t8_bl1: "Secret", t8_bl2: "Public", t8_i1: "Adresa", t8_i2: "Hobby", t8_i3: "Date bancare", t8_i4: "Gusturi muzicale",
    t9_title: "Arme autonome", t9_text: "Există dispute dacă roboții de război pot lua decizii singuri. Mulți se opun.", t9_inst: "Ordonează cuvintele:", t9_h1: "Temă grea.", t9_h2: "Etică.", t9_q: "Care e pericolul?", t9_qa: "Decizii fără om", t9_qb: "Roboți prea grei", t9_qc: "Pană curent", t9_qd: "Lipsă muniție",
    t9_w1: "Etica", t9_w2: "interzice", t9_w3: "adesea", t9_w4: "armele", t9_w5: "autonome.", t9_w6: "", t9_w7: "",
    t10_title: "Simte IA ceva?", t10_text: "IA poate simula sentimente, dar nu are emoții reale ca noi oamenii.", t10_inst: "Evidențiază cele două cuvinte despre ce doar simulează IA:", t10_h1: "Real vs Mimic.", t10_h2: "Emoții.", t10_q: "Are IA inimă?", t10_qa: "Nu, doar cod", t10_qb: "Da, din metal", t10_qc: "Uneori", t10_qd: "Doar când zâmbește",
    t10_tk1: "IA", t10_tk2: "simulează", t10_tk3: "sentimentele", t10_tk4: "fără", t10_tk5: "inimă", t10_tk6: "reală.", t10_tk7: "",
    t11_title: "Învățare cu IA", t11_text: "IA poate fi tutorul tău personal, explicând totul în ritmul tău.", t11_inst: "Potrivește perechile:", t11_h1: "Școala viitorului.", t11_h2: "Ajutor învățare.", t11_q: "Cum ajută IA la învățare?", t11_qa: "Explică individual", t11_qb: "Pune notele", t11_qc: "Ia pauză", t11_qd: "Șterge temele",
    t11_l1: "Elev", t11_r1: "Învățăcel", t11_l2: "Tutor IA", t11_r2: "Explicator", t11_l3: "Sarcina", t11_r3: "Antrenament",
    t12_title: "Neuralink & Creier", t12_text: "Cercetătorii lucrează la cipuri care ar putea conecta creierul direct la PC.", t12_inst: "Completează spațiul:", t12_h1: "Om-mașină.", t12_h2: "Interfețe.", t12_q: "Ce este o interfață creier-computer?", t12_qa: "Conexiune creier-PC", t12_qb: "Căști rapide", t12_qc: "O cască nouă", t12_qd: "Ochelari",
    t12_sent: "Gândurile conduc ___.", t12_qa2: "computerul", t12_qb2: "pantoful", t12_qc2: "mărul", t12_qd2: "copacul",
    t13_title: "Legi IA", t13_text: "Țările scriu reguli pentru ca IA să fie sigură și echitabilă.", t13_inst: "Sortează:", t13_h1: "Permis vs Interzis.", t13_h2: "Reguli.", t13_q: "De ce avem nevoie de legi IA?", t13_qa: "Pentru protecția oamenilor", t13_qb: "Să fie IA mai scumpă", t13_qc: "Să arate mai bine", t13_qd: "Întâmplător",
    t13_bl1: "Permis", t13_bl2: "Interzis", t13_i1: "Ajutor medical", t13_i2: "Păcălire oameni", t13_i3: "Control trafic", t13_i4: "Furt date",
    t14_title: "Distanța critică", t14_text: "Nu trebuie să credem tot ce zice IA. Poate greși sau chiar minți.", t14_inst: "Ordonează cuvintele:", t14_h1: "Punerea la îndoială.", t14_h2: "Atenție.", t14_q: "Ce facem cu răspunsul IA?", t14_qa: "Verificăm faptele", t14_qb: "Copiem tot", t14_qc: "Credem tot", t14_qd: "Ștergem imediat",
    t14_w1: "Verifică", t14_w2: "faptele", t14_w3: "înainte", t14_w4: "să", t14_w5: "ai", t14_w6: "încredere.", t14_w7: "",
    t15_title: "Viitorul tău", t15_text: "Tu poți decide cum folosim IA. Învață despre ea și implică-te!", t15_inst: "Evidențiază cele trei cuvinte despre cum formezi viitorul:", t15_h1: "Ești important.", t15_h2: "Implică-te.", t15_q: "Cine decide despre IA?", t15_qa: "Noi toți", t15_qb: "Doar IA", t15_qc: "Computerele", t15_qd: "Nimeni",
    t15_tk1: "Azi", t15_tk2: "ideile tale", t15_tk3: "formează", t15_tk4: "viitorul", t15_tk5: "lumii.", t15_tk6: "", t15_tk7: ""
  }
};

export const INFO_K6_I3_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "simple-icon", icon: "💪", color: "#FF9800" },
    interactive: { type: "match-pairs", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", pairs: [{left:"t1_l1",right:"t1_r1"},{left:"t1_l2",right:"t1_r2"},{left:"t1_l3",right:"t1_r3"}] },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" }
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "✨", color: "#E91E63" },
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
    svg: { type: "simple-icon", icon: "🖼️", color: "#3F51B5" },
    interactive: { type: "word-order", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", words: ["t4_w1", "t4_w2", "t4_w3", "t4_w4", "t4_w5", "t4_w6", "t4_w7"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "🎭", color: "#9C27B0" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6","t5_tk7"].filter(x=>x!==undefined), correctIndices: [0,1,3] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" }
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "simple-icon", icon: "⚖️", color: "#F44336" },
    interactive: { type: "match-pairs", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", pairs: [{left:"t6_l1",right:"t6_r1"},{left:"t6_l2",right:"t6_r2"},{left:"t6_l3",right:"t6_r3"}] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" }
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "🔍", color: "#00BCD4" },
    interactive: { type: "gap-fill", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", sentence: "t7_sent", choices: ["t7_qa2", "t7_qb2", "t7_qc2", "t7_qd2"], correctIndex: 0 },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" }
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "icon-grid", items: [{emoji:"🔒",label:"Private"},{emoji:"🌐",label:"Public"}] },
    interactive: { type: "drag-to-bucket", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", buckets: [{id:"b1",label:"t8_bl1"},{id:"b2",label:"t8_bl2"}], items: [{text:"t8_i1",bucketId:"b1"},{text:"t8_i2",bucketId:"b2"},{text:"t8_i3",bucketId:"b1"},{text:"t8_i4",bucketId:"b2"}] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" }
  },
  {
    infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "simple-icon", icon: "⚔️", color: "#212121" },
    interactive: { type: "word-order", instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2", words: ["t9_w1", "t9_w2", "t9_w3", "t9_w4", "t9_w5", "t9_w6", "t9_w7"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t9_q", choices: ["t9_qa", "t9_qb", "t9_qc", "t9_qd"], answer: "t9_qa" }
  },
  {
    infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "simple-icon", icon: "❤️", color: "#F44336" },
    interactive: { type: "highlight-text", instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2", tokens: ["t10_tk1","t10_tk2","t10_tk3","t10_tk4","t10_tk5","t10_tk6","t10_tk7"].filter(x=>x!==undefined), correctIndices: [1,2] },
    quiz: { question: "t10_q", choices: ["t10_qa", "t10_qb", "t10_qc", "t10_qd"], answer: "t10_qa" }
  },
  {
    infoTitle: "t11_title", infoText: "t11_text",
    svg: { type: "simple-icon", icon: "🎓", color: "#4CAF50" },
    interactive: { type: "match-pairs", instruction: "t11_inst", hint1: "t11_h1", hint2: "t11_h2", pairs: [{left:"t11_l1",right:"t11_r1"},{left:"t11_l2",right:"t11_r2"},{left:"t11_l3",right:"t11_r3"}] },
    quiz: { question: "t11_q", choices: ["t11_qa", "t11_qb", "t11_qc", "t11_qd"], answer: "t11_qa" }
  },
  {
    infoTitle: "t12_title", infoText: "t12_text",
    svg: { type: "simple-icon", icon: "🧠", color: "#009688" },
    interactive: { type: "gap-fill", instruction: "t12_inst", hint1: "t12_h1", hint2: "t12_h2", sentence: "t12_sent", choices: ["t12_qa2", "t12_qb2", "t12_qc2", "t12_qd2"], correctIndex: 0 },
    quiz: { question: "t12_q", choices: ["t12_qa", "t12_qb", "t12_qc", "t12_qd"], answer: "t12_qa" }
  },
  {
    infoTitle: "t13_title", infoText: "t13_text",
    svg: { type: "icon-grid", items: [{emoji:"📜",label:"Law"},{emoji:"🚫",label:"Ban"}] },
    interactive: { type: "drag-to-bucket", instruction: "t13_inst", hint1: "t13_h1", hint2: "t13_h2", buckets: [{id:"b1",label:"t13_bl1"},{id:"b2",label:"t13_bl2"}], items: [{text:"t13_i1",bucketId:"b1"},{text:"t13_i2",bucketId:"b2"},{text:"t13_i3",bucketId:"b1"},{text:"t13_i4",bucketId:"b2"}] },
    quiz: { question: "t13_q", choices: ["t13_qa", "t13_qb", "t13_qc", "t13_qd"], answer: "t13_qa" }
  },
  {
    infoTitle: "t14_title", infoText: "t14_text",
    svg: { type: "simple-icon", icon: "🧐", color: "#FF9800" },
    interactive: { type: "word-order", instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2", words: ["t14_w1", "t14_w2", "t14_w3", "t14_w4", "t14_w5", "t14_w6", "t14_w7"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t14_q", choices: ["t14_qa", "t14_qb", "t14_qc", "t14_qd"], answer: "t14_qa" }
  },
  {
    infoTitle: "t15_title", infoText: "t15_text",
    svg: { type: "simple-icon", icon: "🚀", color: "#2196F3" },
    interactive: { type: "highlight-text", instruction: "t15_inst", hint1: "t15_h1", hint2: "t15_h2", tokens: ["t15_tk1","t15_tk2","t15_tk3","t15_tk4","t15_tk5","t15_tk6","t15_tk7"].filter(x=>x!==undefined), correctIndices: [1,2,3] },
    quiz: { question: "t15_q", choices: ["t15_qa", "t15_qb", "t15_qc", "t15_qd"], answer: "t15_qa" }
  }
];

