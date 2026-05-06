// @ts-nocheck
import type { PoolTopicDef } from "./types";

export const INFO_K7_I6_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "KI Insel 6: Ethik & Zukunft",
    t1_title: "KI-Ethik", t1_text: "Regeln und moralische Fragen darüber, wie wir KI entwickeln und nutzen sollten.", t1_inst: "Ordne die Paare zu:", t1_h1: "Richtig oder Falsch?", t1_h2: "Verantwortung.", t1_q: "Was ist ein Ziel der KI-Ethik?", t1_qa: "Faire Systeme schaffen", t1_qb: "KI so schnell wie möglich machen", t1_qc: "Menschen durch Maschinen ersetzen", t1_qd: "KI-Regeln ignorieren",
    t1_l1: "Ethik", t1_r1: "Werte", t1_l2: "KI", t1_r2: "Werkzeug", t1_l3: "Mensch", t1_r3: "Entscheider",
    t2_title: "Voreingenommenheit (Bias)", t2_text: "KI kann Vorurteile aus Trainingsdaten übernehmen und ungerecht entscheiden.", t2_inst: "Fülle die Lücke aus:", t2_h1: "Ungerechtigkeit.", t2_h2: "Datenfehler.", t2_q: "Woher kommt Bias in der KI meistens?", t2_qa: "Aus den Trainingsdaten", t2_qb: "Vom Monitor", t2_qc: "Vom Stromkabel", t2_qd: "Vom Internetanbieter",
    t2_sent: "Ein ___ in Daten führt zu unfairen Ergebnissen.", t2_qa2: "Bias", t2_qb2: "Filter", t2_qc2: "Motor", t2_qd2: "Stecker",
    t3_title: "Deepfakes", t3_text: "KI-generierte gefälschte Medien, die täuschend echt aussehen.", t3_inst: "Sortiere in die Eimer:", t3_h1: "Gefahr von Desinformation.", t3_h2: "Manipulation.", t3_q: "Was ist ein Deepfake?", t3_qa: "Ein manipuliertes Video", t3_qb: "Ein neuer Computer", t3_qc: "Ein tiefes Loch", t3_qd: "Eine schnelle Internetverbindung",
    t3_bl1: "Echt", t3_bl2: "Deepfake", t3_i1: "Handykamera-Video", t3_i2: "KI-Gesichtstausch", t3_i3: "Original-Stimme", t3_i4: "KI-Stimmklon",
    t4_title: "Zukunft der Arbeit", t4_text: "KI verändert Berufe. Manche fallen weg, viele neue entstehen.", t4_inst: "Bringe die Wörter in Ordnung:", t4_h1: "Wandel.", t4_h2: "Neue Fähigkeiten.", t4_q: "Was ist wichtig für die Arbeit mit KI?", t4_qa: "KI-Kompetenz", t4_qb: "Schnell tippen", t4_qc: "Viel Kaffee trinken", t4_qd: "Den Computer ausschalten",
    t4_w1: "KI", t4_w2: "wird", t4_w3: "viele", t4_w4: "Aufgaben", t4_w5: "in", t4_w6: "Zukunft", t4_w7: "automatisieren.",
    t5_title: "Privatsphäre", t5_text: "KI benötigt viele Daten, was Risiken für den Datenschutz birgt.", t5_inst: "Markiere das richtige Wort:", t5_h1: "Datenschutz.", t5_h2: "Persönliche Daten.", t5_q: "Welches Gesetz schützt Daten in der EU?", t5_qa: "DSGVO", t5_qb: "KI-Gesetz", t5_qc: "StVO", t5_qd: "BGB",
    t5_tk1: "Der", t5_tk2: "Schutz", t5_tk3: "unserer", t5_tk4: "Privatsphäre", t5_tk5: "ist", t5_tk6: "bei", t5_tk7: "KI-Anwendungen kritisch.",
    t6_title: "KI-Sicherheit", t6_text: "KI-Systeme müssen so gebaut sein, dass sie nicht außer Kontrolle geraten.", t6_inst: "Ordne die Paare zu:", t6_h1: "Risiken minimieren.", t6_h2: "Sichere Entwicklung.", t6_q: "Was bedeutet 'Alignment' in der KI?", t6_qa: "KI-Ziele an menschliche Werte anpassen", t6_qb: "Die KI schneller machen", t6_qc: "Den Bildschirm ausrichten", t6_qd: "Die KI löschen",
    t6_l1: "Sicherheit", t6_r1: "Schutz", t6_l2: "Risiko", t6_r2: "Gefahr", t6_l3: "Kontrolle", t6_r3: "Überwachung",
    t7_title: "EU AI Act", t7_text: "Das erste umfassende Gesetz der Welt zur Regulierung von KI.", t7_inst: "Fülle die Lücke aus:", t7_h1: "Regeln für Europa.", t7_h2: "Gesetzgebung.", t7_q: "Was regelt der EU AI Act?", t7_qa: "KI-Risikoklassen", t7_qb: "Die Internetgeschwindigkeit", t7_qc: "Den Preis von Handys", t7_qd: "Die Tastaturbelegung",
    t7_sent: "Der EU AI Act teilt KI in verschiedene ___ ein.", t7_qa2: "Risikostufen", t7_qb2: "Farben", t7_qc2: "Länder", t7_qd2: "Sprachen",
    t8_title: "Umweltbelastung", t8_text: "Das Trainieren großer KI-Modelle verbraucht sehr viel Energie.", t8_inst: "Sortiere in die Eimer:", t8_h1: "CO2-Fußabdruck.", t8_h2: "Nachhaltigkeit.", t8_q: "Was braucht ein Rechenzentrum für KI?", t8_qa: "Viel Kühlung", t8_qb: "Viel Sonnenlicht", t8_qc: "Viel frische Luft", t8_qd: "Viel Ruhe",
    t8_bl1: "Hoher Verbrauch", t8_bl2: "Nachhaltig", t8_i1: "Training von LLMs", t8_i2: "Grüne Energie", t8_i3: "Kühlung von Servern", t8_i4: "Effiziente Algorithmen",
    t9_title: "KI für das Gute", t9_text: "KI kann helfen, den Klimawandel zu bekämpfen oder Krankheiten zu heilen.", t9_inst: "Bringe die Wörter in Ordnung:", t9_h1: "Positive Nutzung.", t9_h2: "KI for Good.", t9_q: "Wo hilft KI beim Umweltschutz?", t9_qa: "Optimierung von Stromnetzen", t9_qb: "Mehr Papier verbrauchen", t9_qc: "Schneller Auto fahren", t9_qd: "Video-Streaming",
    t9_w1: "KI", t9_w2: "bietet", t9_w3: "große", t9_w4: "Chancen", t9_w5: "für", t9_w6: "eine", t9_w7: "bessere Welt.",
    t10_title: "Mensch-KI Kollaboration", t10_text: "Die beste Leistung entsteht oft, wenn Mensch und KI zusammenarbeiten.", t10_inst: "Markiere das richtige Wort:", t10_h1: "Teamarbeit.", t10_h2: "Ergänzung.", t10_q: "Wie nennt man die Zusammenarbeit von Mensch und KI?", t10_qa: "Kollaboration", t10_qb: "Konkurrenz", t10_qc: "Einsamkeit", t10_qd: "Installation",
    t10_tk1: "In", t10_tk2: "Zukunft", t10_tk3: "werden", t10_tk4: "Mensch", t10_tk5: "und", t10_tk6: "KI", t10_tk7: "Hand in Hand arbeiten.",
    t11_title: "Der Turing-Test", t11_text: "Ein Test, um festzustellen, ob eine Maschine menschenähnliche Intelligenz zeigt.", t11_inst: "Ordne die Paare zu:", t11_h1: "Alan Turing.", t11_h2: "Unterscheidbarkeit.", t11_q: "Wann besteht eine KI den Turing-Test?", t11_qa: "Wenn sie nicht von einem Menschen unterscheidbar ist", t11_qb: "Wenn sie rechnen kann", t11_qc: "Wenn sie bunt leuchtet", t11_qd: "Wenn sie schnell fährt",
    t11_l1: "Frage", t11_r1: "Prüfer", t11_l2: "Antwort", t11_r2: "Maschine", t11_l3: "Urteil", t11_r3: "Unterscheidung",
    t12_title: "Die Singularität", t12_text: "Ein theoretischer Zeitpunkt, an dem KI klüger als die gesamte Menschheit wird.", t12_inst: "Fülle die Lücke aus:", t12_h1: "Zukunftsvision.", t12_h2: "Superintelligenz.", t12_q: "Was passiert laut Theorie bei der Singularität?", t12_qa: "Explosive KI-Entwicklung", t12_qb: "Alle Computer gehen aus", t12_qc: "Das Internet wird gelöscht", t12_qd: "Die Zeit bleibt stehen",
    t12_sent: "Die technologische ___ ist ein umstrittenes Konzept.", t12_qa2: "Singularität", t12_qb2: "Pause", t12_qc2: "Reise", t12_qd2: "Farbe",
    t13_title: "KI und Kreativität", t13_text: "Kann KI wirklich kreativ sein oder kombiniert sie nur Vorhandenes?", t13_inst: "Sortiere in die Eimer:", t13_h1: "Originalität.", t13_h2: "Algorithmen vs. Geist.", t13_q: "Was ist ein Merkmal von KI-Kreativität?", t13_qa: "Rekombination von Daten", t13_qb: "Echte Gefühle", t13_qc: "Eigene Seele", t13_qd: "Hunger",
    t13_bl1: "Menschlich", t13_bl2: "KI-basiert", t13_i1: "Echtes Ölgemälde", t13_i2: "Pixel-Algorithmus", t13_i3: "Handgeschriebenes Gedicht", t13_i4: "LLM-Gedicht",
    t14_title: "Transparenz (XAI)", t14_text: "Explainable AI (XAI) versucht, die Entscheidungen von KI-Modellen verstehbar zu machen.", t14_inst: "Bringe die Wörter in Ordnung:", t14_h1: "Warum hat die KI das getan?", t14_h2: "Blackbox öffnen.", t14_q: "Warum ist XAI wichtig?", t14_qa: "Um Vertrauen zu schaffen", t14_qb: "Um die KI bunter zu machen", t14_qc: "Um Strom zu sparen", t14_qd: "Um schneller zu spielen",
    t14_w1: "Wir", t14_w2: "müssen", t14_w3: "verstehen", t14_w4: "wie", t14_w5: "KI", t14_w6: "Entscheidungen", t14_w7: "trifft.",
    t15_title: "Zusammenfassung", t15_text: "KI ist ein mächtiges Werkzeug, das wir verantwortungsbewusst gestalten müssen.", t15_inst: "Markiere das richtige Wort:", t15_h1: "Fazit.", t15_h2: "Verantwortung.", t15_q: "Wer gestaltet die Zukunft der KI?", t15_qa: "Wir alle", t15_qb: "Nur die Maschinen", t15_qc: "Niemand", t15_qd: "Der Zufall",
    t15_tk1: "KI", t15_tk2: "ist", t15_tk3: "eine", t15_tk4: "Technologie", t15_tk5: "mit", t15_tk6: "großer", t15_tk7: "Verantwortung."
  },
  en: {
    explorer_title: "AI Island 6: Ethics & Future",
    t1_title: "AI Ethics", t1_text: "Rules and moral questions about how we should develop and use AI.", t1_inst: "Match the pairs:", t1_h1: "Right or wrong?", t1_h2: "Responsibility.", t1_q: "What is a goal of AI ethics?", t1_qa: "Create fair systems", t1_qb: "Make AI as fast as possible", t1_qc: "Replace humans with machines", t1_qd: "Ignore AI rules",
    t1_l1: "Ethics", t1_r1: "Values", t1_l2: "AI", t1_r2: "Tool", t1_l3: "Human", t1_r3: "Decider",
    t2_title: "Bias", t2_text: "AI can adopt prejudices from training data and decide unfairly.", t2_inst: "Fill in the blank:", t2_h1: "Injustice.", t2_h2: "Data errors.", t2_q: "Where does bias in AI usually come from?", t2_qa: "From training data", t2_qb: "From the monitor", t2_qc: "From the power cable", t2_qd: "From the ISP",
    t2_sent: "A ___ in data leads to unfair results.", t2_qa2: "bias", t2_qb2: "filter", t2_qc2: "motor", t2_qd2: "plug",
    t3_title: "Deepfakes", t3_text: "AI-generated fake media that looks deceptively real.", t3_inst: "Sort into buckets:", t3_h1: "Risk of disinformation.", t3_h2: "Manipulation.", t3_q: "What is a deepfake?", t3_qa: "A manipulated video", t3_qb: "A new computer", t3_qc: "A deep hole", t3_qd: "A fast internet connection",
    t3_bl1: "Real", t3_bl2: "Deepfake", t3_i1: "Phone camera video", t3_i2: "AI face swap", t3_i3: "Original voice", t3_i4: "AI voice clone",
    t4_title: "Future of Work", t4_text: "AI is changing jobs. Some will disappear, many new ones will emerge.", t4_inst: "Put the words in order:", t4_h1: "Change.", t4_h2: "New skills.", t4_q: "What is important for working with AI?", t4_qa: "AI literacy", t4_qb: "Typing fast", t4_qc: "Drinking a lot of coffee", t4_qd: "Turning off the computer",
    t4_w1: "AI", t4_w2: "will", t4_w3: "automate", t4_w4: "many", t4_w5: "tasks", t4_w6: "in", t4_w7: "the future.",
    t5_title: "Privacy", t5_text: "AI requires a lot of data, which poses risks to data protection.", t5_inst: "Highlight the correct word:", t5_h1: "Data protection.", t5_h2: "Personal data.", t5_q: "Which law protects data in the EU?", t5_qa: "GDPR", t5_qb: "AI Act", t5_qc: "Traffic rules", t5_qd: "Civil code",
    t5_tk1: "The", t5_tk2: "protection", t5_tk3: "of", t5_tk4: "our", t5_tk5: "privacy", t5_tk6: "is", t5_tk7: "critical in AI.",
    t6_title: "AI Safety", t6_text: "AI systems must be built so they do not get out of control.", t6_inst: "Match the pairs:", t6_h1: "Minimize risks.", t6_h2: "Safe development.", t6_q: "What does 'alignment' mean in AI?", t6_qa: "Adapting AI goals to human values", t6_qb: "Making AI faster", t6_qc: "Aligning the screen", t6_qd: "Deleting AI",
    t6_l1: "Safety", t6_r1: "Protection", t6_l2: "Risk", t6_r2: "Danger", t6_l3: "Control", t6_r3: "Monitoring",
    t7_title: "EU AI Act", t7_text: "The world's first comprehensive law to regulate AI.", t7_inst: "Fill in the blank:", t7_h1: "Rules for Europe.", t7_h2: "Legislation.", t7_q: "What does the EU AI Act regulate?", t7_qa: "AI risk classes", t7_qb: "Internet speed", t7_qc: "Mobile phone prices", t7_qd: "Keyboard layout",
    t7_sent: "The EU AI Act divides AI into different ___.", t7_qa2: "risk levels", t7_qb2: "colors", t7_qc2: "countries", t7_qd2: "languages",
    t8_title: "Environmental Impact", t8_text: "Training large AI models consumes a lot of energy.", t8_inst: "Sort into buckets:", t8_h1: "Carbon footprint.", t8_h2: "Sustainability.", t8_q: "What does an AI data center need?", t8_qa: "A lot of cooling", t8_qb: "A lot of sunlight", t8_qc: "A lot of fresh air", t8_qd: "A lot of peace",
    t8_bl1: "High consumption", t8_bl2: "Sustainable", t8_i1: "LLM training", t8_i2: "Green energy", t8_i3: "Server cooling", t8_i4: "Efficient algorithms",
    t9_title: "AI for Good", t9_text: "AI can help fight climate change or cure diseases.", t9_inst: "Put the words in order:", t9_h1: "Positive use.", t9_h2: "AI for Good.", t9_q: "How does AI help environmental protection?", t9_qa: "Optimizing power grids", t9_qb: "Consuming more paper", t9_qc: "Driving cars faster", t9_qd: "Video streaming",
    t9_w1: "AI", t9_w2: "offers", t9_w3: "great", t9_w4: "opportunities", t9_w5: "for", t9_w6: "a", t9_w7: "better world.",
    t10_title: "Human-AI Collaboration", t10_text: "The best performance often happens when humans and AI work together.", t10_inst: "Highlight the correct word:", t10_h1: "Teamwork.", t10_h2: "Complementing.", t10_q: "What is the collaboration of human and AI called?", t10_qa: "Collaboration", t10_qb: "Competition", t10_qc: "Loneliness", t10_qd: "Installation",
    t10_tk1: "In", t10_tk2: "the future,", t10_tk3: "humans", t10_tk4: "and", t10_tk5: "AI", t10_tk6: "will", t10_tk7: "work hand in hand.",
    t11_title: "The Turing Test", t11_text: "A test to determine if a machine shows human-like intelligence.", t11_inst: "Match the pairs:", t11_h1: "Alan Turing.", t11_h2: "Indistinguishability.", t11_q: "When does an AI pass the Turing test?", t11_qa: "When it is indistinguishable from a human", t11_qb: "When it can calculate", t11_qc: "When it glows colorfully", t11_qd: "When it drives fast",
    t11_l1: "Question", t11_r1: "Judge", t11_l2: "Answer", t11_r2: "Machine", t11_l3: "Verdict", t11_r3: "Distinction",
    t12_title: "The Singularity", t12_text: "A theoretical point in time when AI becomes smarter than all of humanity.", t12_inst: "Fill in the blank:", t12_h1: "Future vision.", t12_h2: "Superintelligence.", t12_q: "What happens according to theory at the singularity?", t12_qa: "Explosive AI development", t12_qb: "All computers turn off", t12_qc: "The internet is deleted", t12_qd: "Time stands still",
    t12_sent: "Technological ___ is a controversial concept.", t12_qa2: "singularity", t12_qb2: "break", t12_qc2: "journey", t12_qd2: "color",
    t13_title: "AI and Creativity", t13_text: "Can AI really be creative or does it only combine existing things?", t13_inst: "Sort into buckets:", t13_h1: "Originality.", t13_h2: "Algorithms vs. mind.", t13_q: "What is a feature of AI creativity?", t13_qa: "Recombination of data", t13_qb: "Real feelings", t13_qc: "Own soul", t13_qd: "Hunger",
    t13_bl1: "Human", t13_bl2: "AI-based", t13_i1: "Real oil painting", t13_i2: "Pixel algorithm", t13_i3: "Handwritten poem", t13_i4: "LLM poem",
    t14_title: "Transparency (XAI)", t14_text: "Explainable AI (XAI) tries to make the decisions of AI models understandable.", t14_inst: "Put the words in order:", t14_h1: "Why did the AI do that?", t14_h2: "Opening the black box.", t14_q: "Why is XAI important?", t14_qa: "To build trust", t14_qb: "To make AI more colorful", t14_qc: "To save power", t14_qd: "To play faster",
    t14_w1: "We", t14_w2: "must", t14_w3: "understand", t14_w4: "how", t14_w5: "AI", t14_w6: "makes", t14_w7: "decisions.",
    t15_title: "Summary", t15_text: "AI is a powerful tool that we must shape responsibly.", t15_inst: "Highlight the correct word:", t15_h1: "Conclusion.", t15_h2: "Responsibility.", t15_q: "Who shapes the future of AI?", t15_qa: "All of us", t15_qb: "Only machines", t15_qc: "Nobody", t15_qd: "Chance",
    t15_tk1: "AI", t15_tk2: "is", t15_tk3: "a", t15_tk4: "technology", t15_tk5: "with", t15_tk6: "great", t15_tk7: "responsibility."
  },
  hu: {
    explorer_title: "MI Sziget 6: Etika és Jövő",
    t1_title: "MI etika", t1_text: "Szabályok és erkölcsi kérdések arról, hogyan fejlesszük és használjuk a MI-t.", t1_inst: "Párosítsd össze:", t1_h1: "Helyes vagy helytelen?", t1_h2: "Felelősség.", t1_q: "Mi a MI etika célja?", t1_qa: "Igazságos rendszerek", t1_qb: "MI minél gyorsabbá tétele", t1_qc: "Emberek gépekkel pótlása", t1_qd: "MI szabályok kihagyása",
    t1_l1: "Etika", t1_r1: "Értékek", t1_l2: "MI", t1_r2: "Eszköz", t1_l3: "Ember", t1_r3: "Döntéshozó",
    t2_title: "Elfajultság (Bias)", t2_text: "A MI átveheti az előítéleteket a tanítóadatokból, és igazságtalanul dönthet.", t2_inst: "Töltsd ki a hiányt:", t2_h1: "Igazságtalanság.", t2_h2: "Adathibák.", t2_q: "Honnan ered legtöbbször a bias?", t2_qa: "Tanítóadatokból", t2_qb: "Monitorból", t2_qc: "Tápkábelből", t2_qd: "Szolgáltatótól",
    t2_sent: "Az adatokban lévő ___ igazságtalan eredményekhez vezet.", t2_qa2: "bias", t2_qb2: "szűrő", t2_qc2: "motor", t2_qd2: "dugó",
    t3_title: "Deepfake", t3_text: "MI által generált hamis média, ami megtévesztően valódinak tűnik.", t3_inst: "Válogasd szét:", t3_h1: "Dezinformációs veszély.", t3_h2: "Manipuláció.", t3_q: "Mi a deepfake?", t3_qa: "Manipulált videó", t3_qb: "Új számítógép", t3_qc: "Mély lyuk", t3_qd: "Gyors internet",
    t3_bl1: "Valódi", t3_bl2: "Deepfake", t3_i1: "Mobil videó", t3_i2: "MI arccsere", t3_i3: "Eredeti hang", t3_i4: "MI hangklón",
    t4_title: "A munka jövője", t4_text: "A MI megváltoztatja a szakmákat. Egyesek eltűnnek, újak jönnek létre.", t4_inst: "Tedd sorrendbe a szavakat:", t4_h1: "Változás.", t4_h2: "Új képességek.", t4_q: "Mi fontos a MI-vel való munkához?", t4_qa: "MI-műveltség", t4_qb: "Gyors gépelés", t4_qc: "Sok kávé", t4_qd: "Gép kikapcsolása",
    t4_w1: "A MI", t4_w2: "sok", t4_w3: "feladatot", t4_w4: "automatizálni", t4_w5: "fog", t4_w6: "a", t4_w7: "jövőben.",
    t5_title: "Adatvédelem", t5_text: "A MI-nek sok adatra van szüksége, ami adatvédelmi kockázatokat jelent.", t5_inst: "Jelöld meg a helyes szót:", t5_h1: "Privátszféra.", t5_h2: "Személyes adatok.", t5_q: "Melyik törvény védi az adatokat az EU-ban?", t5_qa: "GDPR", t5_qb: "AI Act", t5_qc: "KRESZ", t5_qd: "Btk",
    t5_tk1: "Az", t5_tk2: "adatvédelem", t5_tk3: "kritikus", t5_tk4: "a MI", t5_tk5: "alkalmazásoknál.",
    t6_title: "MI biztonság", t6_text: "A MI rendszereket úgy kell építeni, hogy ne kerüljenek ki az irányítás alól.", t6_inst: "Párosítsd össze:", t6_h1: "Kockázatcsökkentés.", t6_h2: "Biztonságos fejlesztés.", t6_q: "Mit jelent az 'alignment'?", t6_qa: "MI céljait az emberi értékekhez igazítani", t6_qb: "MI-t gyorsítani", t6_qc: "Képernyőt igazítani", t6_qd: "MI-t törölni",
    t6_l1: "Biztonság", t6_r1: "Védelem", t6_l2: "Kockázat", t6_r2: "Veszély", t6_l3: "Irányítás", t6_r3: "Felügyelet",
    t7_title: "EU AI Act", t7_text: "A világ első átfogó törvénye a MI szabályozására.", t7_inst: "Töltsd ki a hiányt:", t7_h1: "Európai szabályok.", t7_h2: "Jogalkotás.", t7_q: "Mit szabályoz az EU AI Act?", t7_qa: "MI kockázati osztályokat", t7_qb: "Internetsebességet", t7_qc: "Mobilok árát", t7_qd: "Billentyűzetkiosztást",
    t7_sent: "Az EU AI Act ___ sorolja a MI-t.", t7_qa2: "kockázati szintekbe", t7_qb2: "színekbe", t7_qc2: "országokba", t7_qd2: "nyelvekbe",
    t8_title: "Környezeti hatás", t8_text: "A nagy MI modellek tanítása rengeteg energiát fogyaszt.", t8_inst: "Válogasd szét:", t8_h1: "CO2 lábnyom.", t8_h2: "Fenntarthatóság.", t8_q: "Mire van szüksége egy MI adatközpontnak?", t8_qa: "Sok hűtésre", t8_qb: "Sok napsütésre", t8_qc: "Friss levegőre", t8_qd: "Csendre",
    t8_bl1: "Magas fogyasztás", t8_bl2: "Fenntartható", t8_i1: "LLM tanítás", t8_i2: "Zöld energia", t8_i3: "Szerver hűtés", t8_i4: "Hatékony algoritmus",
    t9_title: "MI a jóért", t9_text: "A MI segíthet a klímaváltozás elleni harcban vagy betegségek gyógyításában.", t9_inst: "Tedd sorrendbe a szavakat:", t9_h1: "Pozitív használat.", t9_h2: "AI for Good.", t9_q: "Hol segít a MI?", t9_qa: "Energiahálózatok optimalizálása", t9_qb: "Több papír használata", t9_qc: "Gyorsabb autózás", t9_qd: "Videózás",
    t9_w1: "A MI", t9_w2: "nagy", t9_w3: "lehetőségeket", t9_w4: "kínál", t9_w5: "egy", t9_w6: "jobb", t9_w7: "világhoz.",
    t10_title: "Ember-MI együttműködés", t10_text: "A legjobb teljesítményt az ember és a MI közös munkája adja.", t10_inst: "Jelöld meg a helyes szót:", t10_h1: "Csapatmunka.", t10_h2: "Kiegészítés.", t10_q: "Hogy hívják a közös munkát?", t10_qa: "Kollaboráció", t10_qb: "Verseny", t10_qc: "Magány", t10_qd: "Telepítés",
    t10_tk1: "A jövőben", t10_tk2: "az ember", t10_tk3: "és a MI", t10_tk4: "kéz a kézben", t10_tk5: "fog", t10_tk6: "dolgozni.",
    t11_title: "Turing-teszt", t11_text: "Teszt annak megállapítására, hogy a gép mutat-e emberszerű intelligenciát.", t11_inst: "Párosítsd össze:", t11_h1: "Alan Turing.", t11_h2: "Megkülönböztethetőség.", t11_q: "Mikor megy át a MI a teszten?", t11_qa: "Ha nem különböztethető meg az embertől", t11_qb: "Ha tud számolni", t11_qc: "Ha színesen világít", t11_qd: "Ha gyorsan megy",
    t11_l1: "Kérdés", t11_r1: "Bíró", t11_l2: "Válasz", t11_r2: "Gép", t11_l3: "Ítélet", t11_r3: "Döntés",
    t12_title: "Szingularitás", t12_text: "Elméleti pont, amikor a MI okosabb lesz, mint az egész emberiség.", t12_inst: "Töltsd ki a hiányt:", t12_h1: "Jövőkép.", t12_h2: "Szuperintelligencia.", t12_q: "Mi történik ekkor az elmélet szerint?", t12_qa: "Robbanásszerű fejlődés", t12_qb: "Leállnak a gépek", t12_qc: "Törlődik az internet", t12_qd: "Megáll az idő",
    t12_sent: "A technológiai ___ egy vitatott fogalom.", t12_qa2: "szingularitás", t12_qb2: "szünet", t12_qc2: "utazás", t12_qd2: "szín",
    t13_title: "MI és kreativitás", t13_text: "Lehet-e a MI kreatív, vagy csak meglévőket kombinál?", t13_inst: "Válogasd szét:", t13_h1: "Eredetiség.", t13_h2: "Algoritmus vs. lélek.", t13_q: "Mi jellemzi a MI kreativitást?", t13_qa: "Adatok rekombinációja", t13_qb: "Valódi érzelmek", t13_qc: "Saját lélek", t13_qd: "Éhség",
    t13_bl1: "Emberi", t13_bl2: "MI-alapú", t13_i1: "Olajfestmény", t13_i2: "Pixel algoritmus", t13_i3: "Kézzel írt vers", t13_i4: "LLM vers",
    t14_title: "Átláthatóság (XAI)", t14_text: "Az Explainable AI célja, hogy érthetővé tegye a MI döntéseit.", t14_inst: "Tedd sorrendbe a szavakat:", t14_h1: "Miért tette ezt?", t14_h2: "Blackbox kinyitása.", t14_q: "Miért fontos az XAI?", t14_qa: "Bizalomépítés", t14_qb: "MI színezése", t14_qc: "Árammegtakarítás", t14_qd: "Gyorsabb játék",
    t14_w1: "Meg kell", t14_w2: "értenünk", t14_w3: "hogyan", t14_w4: "hozza", t14_w5: "meg", t14_w6: "a MI", t14_w7: "a döntéseit.",
    t15_title: "Összegzés", t15_text: "A MI egy erős eszköz, amit felelősséggel kell alakítanunk.", t15_inst: "Jelöld meg a helyes szót:", t15_h1: "Zárás.", t15_h2: "Felelősség.", t15_q: "Ki alakítja a MI jövőjét?", t15_qa: "Mindannyian", t15_qb: "Csak a gépek", t15_qc: "Senki", t15_qd: "A véletlen",
    t15_tk1: "A MI", t15_tk2: "egy", t15_tk3: "technológia", t15_tk4: "nagy", t15_tk5: "felelősséggel."
  },
  ro: {
    explorer_title: "IA Insula 6: Etică și Viitor",
    t1_title: "Etica IA", t1_text: "Reguli și întrebări morale despre cum ar trebui să dezvoltăm și să folosim IA.", t1_inst: "Potrivește perechile:", t1_h1: "Corect sau greșit?", t1_h2: "Responsabilitate.", t1_q: "Care este un scop al eticii IA?", t1_qa: "Crearea de sisteme echitabile", t1_qb: "Viteză maximă pentru IA", t1_qc: "Înlocuirea oamenilor cu mașini", t1_qd: "Ignorarea regulilor IA",
    t1_l1: "Etică", t1_r1: "Valori", t1_l2: "IA", t1_r2: "Instrument", t1_l3: "Om", t1_r3: "Decident",
    t2_title: "Părtinire (Bias)", t2_text: "IA poate prelua prejudecăți din datele de antrenament și poate decide nedrept.", t2_inst: "Completează spațiul liber:", t2_h1: "Nedreptate.", t2_h2: "Erori de date.", t2_q: "De unde provine de obicei bias-ul?", t2_qa: "Din datele de antrenament", t2_qb: "De la monitor", t2_qc: "De la cablu", t2_qd: "De la ISP",
    t2_sent: "Un ___ în date duce la rezultate nedrepte.", t2_qa2: "bias", t2_qb2: "filtru", t2_qc2: "motor", t2_qd2: "dop",
    t3_title: "Deepfake", t3_text: "Media falsă generată de IA care arată extrem de real.", t3_inst: "Sortează în găleți:", t3_h1: "Risc de dezinformare.", t3_h2: "Manipulare.", t3_q: "Ce este un deepfake?", t3_qa: "Un video manipulat", t3_qb: "Un computer nou", t3_qc: "O gaură adâncă", t3_qd: "O conexiune rapidă",
    t3_bl1: "Real", t3_bl2: "Deepfake", t3_i1: "Video telefon", t3_i2: "IA face swap", t3_i3: "Voce originală", t3_i4: "IA voice clone",
    t4_title: "Viitorul muncii", t4_text: "IA schimbă joburile. Unele dispar, apar multe altele noi.", t4_inst: "Pune cuvintele în ordine:", t4_h1: "Schimbare.", t4_h2: "Abilități noi.", t4_q: "Ce e important pentru munca cu IA?", t4_qa: "Alfabetizare IA", t4_qb: "Tastare rapidă", t4_qc: "Multă cafea", t4_qd: "Oprire computer",
    t4_w1: "IA", t4_w2: "va", t4_w3: "automatiza", t4_w4: "multe", t4_w5: "sarcini", t4_w6: "în", t4_w7: "viitor.",
    t5_title: "Confidențialitate", t5_text: "IA are nevoie de multe date, ceea ce riscă protecția datelor.", t5_inst: "Evidențiază cuvântul corect:", t5_h1: "Protecția datelor.", t5_h2: "Date personale.", t5_q: "Ce lege protejează datele în UE?", t5_qa: "GDPR", t5_qb: "AI Act", t5_qc: "Codul rutier", t5_qd: "Codul civil",
    t5_tk1: "Protecția", t5_tk2: "vieții", t5_tk3: "private", t5_tk4: "este", t5_tk5: "critică", t5_tk6: "în", t5_tk7: "IA.",
    t6_title: "Siguranța IA", t6_text: "Sistemele IA trebuie construite astfel încât să nu scape de sub control.", t6_inst: "Potrivește perechile:", t6_h1: "Minimizarea riscurilor.", t6_h2: "Dezvoltare sigură.", t6_q: "Ce înseamnă 'alignment'?", t6_qa: "Alinierea scopurilor IA cu valorile umane", t6_qb: "Accelerarea IA", t6_qc: "Alinierea ecranului", t6_qd: "Ștergerea IA",
    t6_l1: "Siguranță", t6_r1: "Protecție", t6_l2: "Risc", t6_r2: "Pericol", t6_l3: "Control", t6_r3: "Monitorizare",
    t7_title: "EU AI Act", t7_text: "Prima lege cuprinzătoare din lume pentru reglementarea IA.", t7_inst: "Completează spațiul liber:", t7_h1: "Reguli europene.", t7_h2: "Legislație.", t7_q: "Ce reglementează EU AI Act?", t7_qa: "Clase de risc IA", t7_qb: "Viteza internet", t7_qc: "Prețul telefoanelor", t7_qd: "Layout tastatură",
    t7_sent: "EU AI Act împarte IA în mai multe ___.", t7_qa2: "niveluri de risc", t7_qb2: "culori", t7_qc2: "țări", t7_qd2: "limbi",
    t8_title: "Impact mediu", t8_text: "Antrenarea modelelor mari IA consumă multă energie.", t8_inst: "Sortează în găleți:", t8_h1: "Amprenta de carbon.", t8_h2: "Sustenabilitate.", t8_q: "De ce are nevoie un centru de date IA?", t8_qa: "Multă răcire", t8_qb: "Mult soare", t8_qc: "Aer curat", t8_qd: "Liniște",
    t8_bl1: "Consum mare", t8_bl2: "Sustenabil", t8_i1: "Antrenare LLM", t8_i2: "Energie verde", t8_i3: "Răcire servere", t8_i4: "Algoritmi eficienți",
    t9_title: "IA pentru bine", t9_text: "IA poate ajuta la combaterea schimbărilor climatice sau la vindecarea bolilor.", t9_inst: "Pune cuvintele în ordine:", t9_h1: "Utilizare pozitivă.", t9_h2: "AI for Good.", t9_q: "Unde ajută IA?", t9_qa: "Optimizarea rețelelor electrice", t9_qb: "Consum mai mare de hârtie", t9_qc: "Conducere mai rapidă", t9_qd: "Video streaming",
    t9_w1: "IA", t9_w2: "oferă", t9_w3: "mari", t9_w4: "oportunități", t9_w5: "pentru", t9_w6: "o lume", t9_w7: "mai bună.",
    t10_title: "Colaborare Om-IA", t10_text: "Cele mai bune performanțe apar când omul și IA lucrează împreună.", t10_inst: "Evidențiază cuvântul corect:", t10_h1: "Muncă în echipă.", t10_h2: "Complementaritate.", t10_q: "Cum se numește colaborarea?", t10_qa: "Colaborare", t10_qb: "Competiție", t10_qc: "Singurătate", t10_qd: "Instalare",
    t10_tk1: "În", t10_tk2: "viitor", t10_tk3: "oamenii", t10_tk4: "și", t10_tk5: "IA", t10_tk6: "vor", t10_tk7: "lucra împreună.",
    t11_title: "Testul Turing", t11_text: "Un test pentru a vedea dacă o mașină arată inteligență umană.", t11_inst: "Potrivește perechile:", t11_h1: "Alan Turing.", t11_h2: "Indistinctibilitate.", t11_q: "Când trece IA testul?", t11_qa: "Când nu poate fi deosebită de un om", t11_qb: "Când știe să calculeze", t11_qc: "Când luminează colorat", t11_qd: "Când merge rapid",
    t11_l1: "Întrebare", t11_r1: "Judecător", t11_l2: "Răspuns", t11_r2: "Mașină", t11_l3: "Verdict", t11_r3: "Distincție",
    t12_title: "Singularitatea", t12_text: "Punct teoretic când IA devine mai deșteaptă decât toată omenirea.", t12_inst: "Completează spațiul liber:", t12_h1: "Viziune viitor.", t12_h2: "Superinteligență.", t12_q: "Ce se întâmplă conform teoriei?", t12_qa: "Dezvoltare explozivă a IA", t12_qb: "Toate computerele se opresc", t12_qc: "Internetul se șterge", t12_qd: "Timpul stă pe loc",
    t12_sent: "___ tehnologică este un concept controversat.", t12_qa2: "Singularitatea", t12_qb2: "Pauza", t12_qc2: "Călătoria", t12_qd2: "Culoarea",
    t13_title: "IA și creativitatea", t13_text: "Poate IA să fie creativă sau doar combină elemente existente?", t13_inst: "Sortează în găleți:", t13_h1: "Originalitate.", t13_h2: "Algoritm vs suflet.", t13_q: "Ce caracterizează creativitatea IA?", t13_qa: "Recombinarea datelor", t13_qb: "Sentimente reale", t13_qc: "Suflet propriu", t13_qd: "Foame",
    t13_bl1: "Uman", t13_bl2: "Bazat pe IA", t13_i1: "Pictură ulei reală", t13_i2: "Algoritm pixeli", t13_i3: "Poezie scrisă de mână", t13_i4: "Poezie LLM",
    t14_title: "Transparență (XAI)", t14_text: "Explainable AI (XAI) încearcă să facă deciziile IA de înțeles.", t14_inst: "Pune cuvintele în ordine:", t14_h1: "De ce a făcut asta?", t14_h2: "Deschiderea cutiei negre.", t14_q: "De ce e important XAI?", t14_qa: "Pentru încredere", t14_qb: "Pentru culori", t14_qc: "Pentru economie curent", t14_qd: "Pentru joc mai rapid",
    t14_w1: "Trebuie", t14_w2: "să", t14_w3: "înțelegem", t14_w4: "cum", t14_w5: "ia", t14_w6: "IA", t14_w7: "deciziile.",
    t15_title: "Rezumat", t15_text: "IA este un instrument puternic pe care trebuie să-l modelăm responsabil.", t15_inst: "Evidențiază cuvântul corect:", t15_h1: "Concluzie.", t15_h2: "Responsabilitate.", t15_q: "Cine modelează viitorul IA?", t15_qa: "Noi toți", t15_qb: "Doar mașinile", t15_qc: "Nimeni", t15_qd: "Hazardul",
    t15_tk1: "IA", t15_tk2: "este", t15_tk3: "o", t15_tk4: "tehnologie", t15_tk5: "cu", t15_tk6: "mare", t15_tk7: "responsabilitate."
  }
};

export const INFO_K7_I6_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "simple-icon", icon: "⚖️", color: "#607D8B" },
    interactive: { type: "match-pairs", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", pairs: [{left:"t1_l1",right:"t1_r1"},{left:"t1_l2",right:"t1_r2"},{left:"t1_l3",right:"t1_r3"}] },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" }
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "⚠️", color: "#FF9800" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" }
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "icon-grid", items: [{emoji:"🎥",label:"Real"},{emoji:"🎭",label:"Deepfake"}] },
    interactive: { type: "drag-to-bucket", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", buckets: [{id:"b1",label:"t3_bl1"},{id:"b2",label:"t3_bl2"}], items: [{text:"t3_i1",bucketId:"b1"},{text:"t3_i2",bucketId:"b2"},{text:"t3_i3",bucketId:"b1"},{text:"t3_i4",bucketId:"b2"}] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "💼", color: "#795548" },
    interactive: { type: "word-order", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", words: ["t4_w1", "t4_w2", "t4_w3", "t4_w4", "t4_w5", "t4_w6", "t4_w7"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6].slice(0, 7) },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "🔒", color: "#2196F3" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6","t5_tk7"].filter(x=>x!==undefined), correctIndices: [3] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" }
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "simple-icon", icon: "🛡️", color: "#4CAF50" },
    interactive: { type: "match-pairs", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", pairs: [{left:"t6_l1",right:"t6_r1"},{left:"t6_l2",right:"t6_r2"},{left:"t6_l3",right:"t6_r3"}] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" }
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "🇪🇺", color: "#3F51B5" },
    interactive: { type: "gap-fill", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", sentence: "t7_sent", choices: ["t7_qa2", "t7_qb2", "t7_qc2", "t7_qd2"], correctIndex: 0 },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" }
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "icon-grid", items: [{emoji:"⚡",label:"Power"},{emoji:"🌿",label:"Green"}] },
    interactive: { type: "drag-to-bucket", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", buckets: [{id:"b1",label:"t8_bl1"},{id:"b2",label:"t8_bl2"}], items: [{text:"t8_i1",bucketId:"b1"},{text:"t8_i2",bucketId:"b2"},{text:"t8_i3",bucketId:"b1"},{text:"t8_i4",bucketId:"b2"}] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" }
  },
  {
    infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "simple-icon", icon: "🌍", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2", words: ["t9_w1", "t9_w2", "t9_w3", "t9_w4", "t9_w5", "t9_w6", "t9_w7"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6].slice(0, 7) },
    quiz: { question: "t9_q", choices: ["t9_qa", "t9_qb", "t9_qc", "t9_qd"], answer: "t9_qa" }
  },
  {
    infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "simple-icon", icon: "🤝", color: "#FF5722" },
    interactive: { type: "highlight-text", instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2", tokens: ["t10_tk1","t10_tk2","t10_tk3","t10_tk4","t10_tk5","t10_tk6","t10_tk7"].filter(x=>x!==undefined), correctIndices: [3,5] },
    quiz: { question: "t10_q", choices: ["t10_qa", "t10_qb", "t10_qc", "t10_qd"], answer: "t10_qa" }
  },
  {
    infoTitle: "t11_title", infoText: "t11_text",
    svg: { type: "simple-icon", icon: "👤", color: "#9E9E9E" },
    interactive: { type: "match-pairs", instruction: "t11_inst", hint1: "t11_h1", hint2: "t11_h2", pairs: [{left:"t11_l1",right:"t11_r1"},{left:"t11_l2",right:"t11_r2"},{left:"t11_l3",right:"t11_r3"}] },
    quiz: { question: "t11_q", choices: ["t11_qa", "t11_qb", "t11_qc", "t11_qd"], answer: "t11_qa" }
  },
  {
    infoTitle: "t12_title", infoText: "t12_text",
    svg: { type: "simple-icon", icon: "✨", color: "#9C27B0" },
    interactive: { type: "gap-fill", instruction: "t12_inst", hint1: "t12_h1", hint2: "t12_h2", sentence: "t12_sent", choices: ["t12_qa2", "t12_qb2", "t12_qc2", "t12_qd2"], correctIndex: 0 },
    quiz: { question: "t12_q", choices: ["t12_qa", "t12_qb", "t12_qc", "t12_qd"], answer: "t12_qa" }
  },
  {
    infoTitle: "t13_title", infoText: "t13_text",
    svg: { type: "icon-grid", items: [{emoji:"👨‍🎨",label:"Human"},{emoji:"🎨",label:"AI"}] },
    interactive: { type: "drag-to-bucket", instruction: "t13_inst", hint1: "t13_h1", hint2: "t13_h2", buckets: [{id:"b1",label:"t13_bl1"},{id:"b2",label:"t13_bl2"}], items: [{text:"t13_i1",bucketId:"b1"},{text:"t13_i2",bucketId:"b2"},{text:"t13_i3",bucketId:"b1"},{text:"t13_i4",bucketId:"b2"}] },
    quiz: { question: "t13_q", choices: ["t13_qa", "t13_qb", "t13_qc", "t13_qd"], answer: "t13_qa" }
  },
  {
    infoTitle: "t14_title", infoText: "t14_text",
    svg: { type: "simple-icon", icon: "🔍", color: "#00BCD4" },
    interactive: { type: "word-order", instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2", words: ["t14_w1", "t14_w2", "t14_w3", "t14_w4", "t14_w5", "t14_w6", "t14_w7"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6].slice(0, 7) },
    quiz: { question: "t14_q", choices: ["t14_qa", "t14_qb", "t14_qc", "t14_qd"], answer: "t14_qa" }
  },
  {
    infoTitle: "t15_title", infoText: "t15_text",
    svg: { type: "simple-icon", icon: "🏁", color: "#212121" },
    interactive: { type: "highlight-text", instruction: "t15_inst", hint1: "t15_h1", hint2: "t15_h2", tokens: ["t15_tk1","t15_tk2","t15_tk3","t15_tk4","t15_tk5","t15_tk6","t15_tk7"].filter(x=>x!==undefined), correctIndices: [6] },
    quiz: { question: "t15_q", choices: ["t15_qa", "t15_qb", "t15_qc", "t15_qd"], answer: "t15_qa" }
  }
];

