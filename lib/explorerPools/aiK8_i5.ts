// @ts-nocheck
// lib/explorerPools/aiK8_i5.ts
import type { PoolTopicDef } from "./types";

export const INFO_K8_I5_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "KI-Insel: Anwendungen & Ethik",
    t1_title: "KI in der Medizin", t1_text: "KI hilft Ärzten, Krankheiten schneller zu erkennen, indem sie Röntgenbilder und Patientendaten analysiert.", t1_inst: "Ordne die Paare zu:", t1_h1: "Arzt und Helfer.", t1_h2: "Gesundheit und Technik.", t1_q: "Was ist ein Vorteil von KI in der Medizin?", t1_qa: "Schnellere Diagnosen", t1_qb: "KI macht nie Fehler", t1_qc: "Ärzte werden unnötig", t1_qd: "Weniger Vitamine",
    t1_l1: "Röntgenbild", t1_r1: "Analyse", t1_l2: "Symptom", t1_r2: "Erkennung", t1_l3: "Therapie", t1_r3: "Planung",
    t2_title: "Selbstfahrende Autos", t2_text: "Autonome Fahrzeuge nutzen Kameras und Sensoren, um sicher ohne menschlichen Fahrer zu fahren.", t2_inst: "Fülle die Lücke aus:", t2_h1: "Keine Hände am Lenkrad.", t2_h2: "Sensoren im Einsatz.", t2_q: "Welche Technologie ist entscheidend für selbstfahrende Autos?", t2_qa: "Lidar & Radar", t2_qb: "Dampfmaschine", t2_qc: "Segel", t2_qd: "Flügel",
    t2_sent: "Ein selbstfahrendes Auto muss seine ___ in Echtzeit wahrnehmen.", t2_qa2: "Umgebung", t2_qb2: "Farbe", t2_qc2: "Musik", t2_qd2: "Träume",
    t3_title: "Empfehlungsalgorithmen", t3_text: "KI analysiert dein Verhalten auf YouTube oder Netflix, um dir neue Videos vorzuschlagen.", t3_inst: "Sortiere in die Eimer:", t3_h1: "Deine Interessen.", t3_h2: "Was schaust du?", t3_q: "Warum schlägt Netflix Filme vor?", t3_qa: "Basierend auf Vorlieben", t3_qb: "Per Zufall", t3_qc: "Weil die Filme alt sind", t3_qd: "Kein Grund",
    t3_bl1: "Nutzereingabe", t3_bl2: "KI-Vorschlag", t3_i1: "Film geschaut", t3_i2: "Ähnlicher Film", t3_i3: "Like gegeben", t3_i4: "Trend-Video",
    t4_title: "KI in der Finanzwelt", t4_text: "Banken nutzen KI, um Betrug zu erkennen und Aktienkurse vorherzusagen.", t4_inst: "Bringe die Wörter in Ordnung:", t4_h1: "Geld und Schutz.", t4_h2: "Betrugserkennung.", t4_q: "Was erkennt eine KI bei Kreditkarten?", t4_qa: "Verdächtige Buchungen", t4_qb: "Die Farbe der Karte", t4_qc: "Das Gewicht der Karte", t4_qd: "Den Namen der Bank",
    t4_w1: "KI", t4_w2: "schützt", t4_w3: "Bankkonten", t4_w4: "vor", t4_w5: "unbefugten", t4_w6: "Zugriffen", t4_w7: "und Betrug.",
    t5_title: "Verantwortung (Ethik)", t5_text: "Wer ist verantwortlich, wenn eine KI einen Fehler macht? Mensch oder Maschine?", t5_inst: "Markiere das Wort für 'ethisch':", t5_h1: "Wer hat Schuld?", t5_h2: "Rechtliche Fragen.", t5_q: "Was ist ein zentrales ethisches Thema der KI?", t5_qa: "Verantwortlichkeit", t5_qb: "Batterielaufzeit", t5_qc: "Gehäusefarbe", t5_qd: "Monitorgröße",
    t5_tk1: "Ethische", t5_tk2: "Leitlinien", t5_tk3: "regeln", t5_tk4: "den", t5_tk5: "sicheren", t5_tk6: "Umgang", t5_tk7: "mit KI.",
    t6_title: "Datenschutz & KI", t6_text: "KI benötigt viele Daten, aber unsere Privatsphäre muss geschützt bleiben.", t6_inst: "Ordne die Paare zu:", t6_h1: "Privat vs. Öffentlich.", t6_h2: "Meine Daten.", t6_q: "Was ist wichtig beim Training von KI?", t6_qa: "Anonymisierung der Daten", t6_qb: "Alle Daten veröffentlichen", t6_qc: "Daten löschen", t6_qd: "Keine Daten nutzen",
    t6_l1: "Passwort", t6_r1: "Geheim", t6_l2: "Nutzername", t6_r2: "Geschützt", t6_l3: "Standort", t6_r3: "Privat",
    t7_title: "Generative KI", t7_text: "KI, die neue Inhalte wie Bilder, Texte oder Musik erschaffen kann.", t7_inst: "Fülle die Lücke aus:", t7_h1: "Etwas Neues schaffen.", t7_h2: "Kreative Maschinen.", t7_q: "Was kann eine generative KI erstellen?", t7_qa: "Digitale Kunstwerke", t7_qb: "Ein echtes Brötchen", t7_qc: "Ein Fahrrad aus Metall", t7_qd: "Einen Stuhl",
    t7_sent: "Generative KI nutzt ___ , um neue Bilder zu erzeugen.", t7_qa2: "Prompts", t7_qb2: "Hammer", t7_qc2: "Wasser", t7_qd2: "Schrauben",
    t8_title: "KI in der Schule", t8_text: "KI kann beim Lernen helfen, indem sie Aufgaben an dein Tempo anpasst.", t8_inst: "Sortiere in die Eimer:", t8_h1: "Lernhilfe vs. Schummeln.", t8_h2: "Sinnvolle Nutzung.", t8_q: "Wie kann KI Schülern helfen?", t8_qa: "Individuelles Feedback", t8_qb: "Hausaufgaben komplett kopieren", t8_qc: "Gar nicht", t8_qd: "Den PC ausschalten",
    t8_bl1: "Positiv", t8_bl2: "Kritisch", t8_i1: "Erklärungen finden", t8_i2: "Plagiate erstellen", t8_i3: "Lernplan erstellen", t8_i4: "Blindes Vertrauen",
    t9_title: "Umweltauswirkungen", t9_text: "Das Training großer KI-Modelle verbraucht sehr viel Energie.", t9_inst: "Bringe die Wörter in Ordnung:", t9_h1: "Energiehunger der KI.", t9_h2: "Nachhaltigkeit.", t9_q: "Was ist ein Umweltproblem von KI?", t9_qa: "Hoher Stromverbrauch", t9_qb: "Sie macht Lärm", t9_qc: "Sie braucht viel Papier", t9_qd: "Es gibt keine Probleme",
    t9_w1: "KI-Rechenzentren", t9_w2: "benötigen", t9_w3: "eine", t9_w4: "sehr", t9_w5: "effiziente", t9_w6: "Kühlung", t9_w7: "und Energie.",
    t10_title: "Chatbots", t10_text: "Computerprogramme, die ein Gespräch mit Menschen simulieren.", t10_inst: "Markiere das Wort für die Dialog-Programme:", t10_h1: "Sprechen mit Robotern.", t10_h2: "Dialogsysteme.", t10_q: "Wo findet man oft Chatbots?", t10_qa: "Kundenservice Webseiten", t10_qb: "Im Wald", t10_qc: "Auf einer Gabel", t10_qd: "In der Badewanne",
    t10_tk1: "Chatbots", t10_tk2: "können", t10_tk3: "Fragen", t10_tk4: "in", t10_tk5: "Echtzeit", t10_tk6: "beantworten.",
    t11_title: "Deepfakes", t11_text: "Täuschend echte Medieninhalte (Bilder/Videos), die mit KI gefälscht wurden.", t11_inst: "Ordne die Paare zu:", t11_h1: "Wahrheit oder Lüge?", t11_h2: "Manipulation erkennen.", t11_q: "Was ist die Gefahr von Deepfakes?", t11_qa: "Verbreitung von Falschinfos", t11_qb: "Bessere Bildqualität", t11_qc: "Schnelleres Internet", t11_qd: "Bunte Farben",
    t11_l1: "Original", t11_r1: "Echt", t11_l2: "Deepfake", t11_r2: "Gefälscht", t11_l3: "Manipulation", t11_r3: "Täuschung",
    t12_title: "Mensch-KI Kooperation", t12_text: "Menschen und KI arbeiten zusammen, um bessere Ergebnisse zu erzielen.", t12_inst: "Fülle die Lücke aus:", t12_h1: "Teamarbeit.", t12_h2: "Stärken kombinieren.", t12_q: "Wie nennt man die Zusammenarbeit von Mensch und KI?", t12_qa: "Augmentierte Intelligenz", t12_qb: "Zahnrad-Modell", t12_qc: "Streit", t12_qd: "Einsamkeit",
    t12_sent: "Der Mensch übernimmt die ___ , die KI die Datenanalyse.", t12_qa2: "Entscheidung", t12_qb2: "Batterie", t12_qc2: "Tastatur", t12_qd2: "Lampe",
    t13_title: "KI in der Industrie", t13_text: "Roboter in Fabriken nutzen KI, um Bauteile zu prüfen und Fehler zu finden.", t13_inst: "Sortiere in die Eimer:", t13_h1: "Fließbandarbeit.", t13_h2: "Automatisierung.", t13_q: "Was verbessert KI in der Produktion?", t13_qa: "Qualitätskontrolle", t13_qb: "Die Mittagspause", t13_qc: "Die Farbe der Wände", t13_qd: "Den Bodenbelag",
    t13_bl1: "Manueller Prozess", t13_bl2: "KI-Prozess", t13_i1: "Prüfung per Auge", t13_i2: "Kamera-Scanner", t13_i3: "Händisches Zählen", t13_i4: "Vorhersagende Wartung",
    t14_title: "Gesetze für KI (AI Act)", t14_text: "Regierungen erstellen Regeln, um den Einsatz von KI sicher zu machen.", t14_inst: "Bringe die Wörter in Ordnung:", t14_h1: "Regeln für die Technik.", t14_h2: "Sicherheit geht vor.", t14_q: "Was ist das Ziel des EU AI Acts?", t14_qa: "Sichere und faire KI", t14_qb: "KI verbieten", t14_qc: "KI teurer machen", t14_qd: "Kein Ziel",
    t14_w1: "Regeln", t14_w2: "sorgen", t14_w3: "für", t14_w4: "Vertrauen", t14_w5: "in", t14_w6: "künstliche", t14_w7: "Intelligenz.",
    t15_title: "Zukunft der Arbeit", t15_text: "KI wird Berufe verändern, aber auch viele neue Jobs schaffen.", t15_inst: "Markiere die zwei Wörter für 'lebenslanges Lernen':", t15_h1: "Wandel im Job.", t15_h2: "Neue Chancen.", t15_q: "Welche Fähigkeit wird durch KI wichtiger?", t15_qa: "Kritisches Denken", t15_qb: "Sachen auswendig lernen", t15_qc: "Schnelles Tippen", t15_qd: "Nicht zuhören",
    t15_tk1: "Lebenslanges", t15_tk2: "Lernen", t15_tk3: "ist", t15_tk4: "der", t15_tk5: "Schlüssel", t15_tk6: "zur", t15_tk7: "Arbeitswelt der Zukunft."
  },
  en: {
    explorer_title: "AI Island: Applications & Ethics",
    t1_title: "AI in Medicine", t1_text: "AI helps doctors identify diseases faster by analyzing X-rays and patient data.", t1_inst: "Match the pairs:", t1_h1: "Doctor and helper.", t1_h2: "Health and tech.", t1_q: "What is an advantage of AI in medicine?", t1_qa: "Faster diagnoses", t1_qb: "AI never makes mistakes", t1_qc: "Doctors become unnecessary", t1_qd: "Fewer vitamins",
    t1_l1: "X-ray", t1_r1: "Analysis", t1_l2: "Symptom", t1_r2: "Detection", t1_l3: "Therapy", t1_r3: "Planning",
    t2_title: "Self-Driving Cars", t2_text: "Autonomous vehicles use cameras and sensors to drive safely without a human driver.", t2_inst: "Fill in the blank:", t2_h1: "No hands on the wheel.", t2_h2: "Sensors in use.", t2_q: "Which technology is crucial for self-driving cars?", t2_qa: "Lidar & Radar", t2_qb: "Steam engine", t2_qc: "Sails", t2_qd: "Wings",
    t2_sent: "A self-driving car must perceive its ___ in real-time.", t2_qa2: "environment", t2_qb2: "color", t2_qc2: "music", t2_qd2: "dreams",
    t3_title: "Recommendation Algorithms", t3_text: "AI analyzes your behavior on YouTube or Netflix to suggest new videos to you.", t3_inst: "Sort into buckets:", t3_h1: "Your interests.", t3_h2: "What do you watch?", t3_q: "Why does Netflix suggest movies?", t3_qa: "Based on preferences", t3_qb: "By chance", t3_qc: "Because the movies are old", t3_qd: "No reason",
    t3_bl1: "User Input", t3_bl2: "AI Suggestion", t3_i1: "Movie watched", t3_i2: "Similar movie", t3_i3: "Like given", t3_i4: "Trending video",
    t4_title: "AI in Finance", t4_text: "Banks use AI to detect fraud and predict stock prices.", t4_inst: "Put the words in order:", t4_h1: "Money and protection.", t4_h2: "Fraud detection.", t4_q: "What does AI detect in credit cards?", t4_qa: "Suspicious transactions", t4_qb: "The color of the card", t4_qc: "The weight of the card", t4_qd: "The bank name",
    t4_w1: "AI", t4_w2: "protects", t4_w3: "bank", t4_w4: "accounts", t4_w5: "from", t4_w6: "unauthorized", t4_w7: "access.",
    t5_title: "Accountability (Ethics)", t5_text: "Who is responsible when AI makes a mistake? Human or machine?", t5_inst: "Highlight the word meaning 'ethical':", t5_h1: "Who is at fault?", t5_h2: "Legal questions.", t5_q: "What is a central ethical issue of AI?", t5_qa: "Accountability", t5_qb: "Battery life", t5_qc: "Case color", t5_qd: "Monitor size",
    t5_tk1: "Ethical", t5_tk2: "guidelines", t5_tk3: "regulate", t5_tk4: "the", t5_tk5: "safe", t5_tk6: "use", t5_tk7: "of AI.",
    t6_title: "Privacy & AI", t6_text: "AI needs lots of data, but our privacy must remain protected.", t6_inst: "Match the pairs:", t6_h1: "Private vs. Public.", t6_h2: "My data.", t6_q: "What is important when training AI?", t6_qa: "Anonymizing data", t6_qb: "Publishing all data", t6_qc: "Deleting data", t6_qd: "Using no data",
    t6_l1: "Password", t6_r1: "Secret", t6_l2: "Username", t6_r2: "Protected", t6_l3: "Location", t6_r3: "Private",
    t7_title: "Generative AI", t7_text: "AI that can create new content like images, text, or music.", t7_inst: "Fill in the blank:", t7_h1: "Creating something new.", t7_h2: "Creative machines.", t7_q: "What can generative AI create?", t7_qa: "Digital artworks", t7_qb: "A real bun", t7_qc: "A metal bike", t7_qd: "A chair",
    t7_sent: "Generative AI uses ___ to create new images.", t7_qa2: "prompts", t7_qb2: "hammers", t7_qc2: "water", t7_qd2: "screws",
    t8_title: "AI in Education", t8_text: "AI can help with learning by adapting tasks to your pace.", t8_inst: "Sort into buckets:", t8_h1: "Learning aid vs. Cheating.", t8_h2: "Meaningful use.", t8_q: "How can AI help students?", t8_qa: "Individual feedback", t8_qb: "Copying homework completely", t8_qc: "Not at all", t8_qd: "Turning off the PC",
    t8_bl1: "Positive", t8_bl2: "Critical", t8_i1: "Finding explanations", t8_i2: "Creating plagiarism", t8_i3: "Creating study plan", t8_i4: "Blind trust",
    t9_title: "Environmental Impact", t9_text: "Training large AI models consumes a lot of energy.", t9_inst: "Put the words in order:", t9_h1: "AI energy hunger.", t9_h2: "Sustainability.", t9_q: "What is an environmental problem of AI?", t9_qa: "High power consumption", t9_qb: "It makes noise", t9_qc: "It needs lots of paper", t9_qd: "There are no problems",
    t9_w1: "AI", t9_w2: "data", t9_w3: "centers", t9_w4: "require", t9_w5: "very", t9_w6: "efficient", t9_w7: "cooling.",
    t10_title: "Chatbots", t10_text: "Computer programs that simulate a conversation with humans.", t10_inst: "Highlight the word for the dialog programs:", t10_h1: "Talking with robots.", t10_h2: "Dialog systems.", t10_q: "Where do you often find chatbots?", t10_qa: "Customer service websites", t10_qb: "In the forest", t10_qc: "On a fork", t10_qd: "In the bathtub",
    t10_tk1: "Chatbots", t10_tk2: "can", t10_tk3: "answer", t10_tk4: "questions", t10_tk5: "in", t10_tk6: "real-time.",
    t11_title: "Deepfakes", t11_text: "Deceptively real media content (images/videos) faked with AI.", t11_inst: "Match the pairs:", t11_h1: "Truth or lie?", t11_h2: "Detecting manipulation.", t11_q: "What is the danger of deepfakes?", t11_qa: "Spread of misinformation", t11_qb: "Better image quality", t11_qc: "Faster internet", t11_qd: "Bright colors",
    t11_l1: "Original", t11_r1: "Real", t11_l2: "Deepfake", t11_r2: "Fake", t11_l3: "Manipulation", t11_r3: "Deception",
    t12_title: "Human-AI Collaboration", t12_text: "Humans and AI work together to achieve better results.", t12_inst: "Fill in the blank:", t12_h1: "Teamwork.", t12_h2: "Combining strengths.", t12_q: "What is human-AI cooperation called?", t12_qa: "Augmented Intelligence", t12_qb: "Gear model", t12_qc: "Argue", t12_qd: "Loneliness",
    t12_sent: "The human makes the ___ , the AI does the data analysis.", t12_qa2: "decision", t12_qb2: "battery", t12_qc2: "keyboard", t12_qd2: "lamp",
    t13_title: "AI in Industry", t13_text: "Robots in factories use AI to check parts and find errors.", t13_inst: "Sort into buckets:", t13_h1: "Assembly line work.", t13_h2: "Automation.", t13_q: "What does AI improve in production?", t13_qa: "Quality control", t13_qb: "Lunch break", t13_qc: "Wall color", t13_qd: "Flooring",
    t13_bl1: "Manual Process", t13_bl2: "AI Process", t13_i1: "Visual check", t13_i2: "Camera scanner", t13_i3: "Manual counting", t13_i4: "Predictive maintenance",
    t14_title: "AI Laws (AI Act)", t14_text: "Governments create rules to make AI use safe.", t14_inst: "Put the words in order:", t14_h1: "Rules for technology.", t14_h2: "Safety first.", t14_q: "What is the goal of the EU AI Act?", t14_qa: "Safe and fair AI", t14_qb: "Ban AI", t14_qc: "Make AI more expensive", t14_qd: "No goal",
    t14_w1: "Rules", t14_w2: "ensure", t14_w3: "trust", t14_w4: "in", t14_w5: "artificial", t14_w6: "intelligence", t14_w7: "systems.",
    t15_title: "Future of Work", t15_text: "AI will change professions but also create many new jobs.", t15_inst: "Highlight the two words for 'lifelong learning':", t15_h1: "Change in jobs.", t15_h2: "New opportunities.", t15_q: "Which skill becomes more important through AI?", t15_qa: "Critical thinking", t15_qb: "Memorizing things", t15_qc: "Fast typing", t15_qd: "Not listening",
    t15_tk1: "Lifelong", t15_tk2: "learning", t15_tk3: "is", t15_tk4: "the", t15_tk5: "key", t15_tk6: "to", t15_tk7: "future work."
  },
  hu: {
    explorer_title: "MI Sziget: Alkalmazások és Etika",
    t1_title: "MI az orvoslásban", t1_text: "A MI segíti az orvosokat a betegségek gyorsabb felismerésében röntgenképek elemzésével.", t1_inst: "Párosítsd össze:", t1_h1: "Orvos és segítő.", t1_h2: "Egészség és technika.", t1_q: "Mi az előnye a MI-nek az orvoslásban?", t1_qa: "Gyorsabb diagnózisok", t1_qb: "A MI sosem hibázik", t1_qc: "Az orvosok feleslegessé válnak", t1_qd: "Kevesebb vitamin",
    t1_l1: "Röntgen", t1_r1: "Elemzés", t1_l2: "Tünet", t1_r2: "Felismerés", t1_l3: "Terápia", t1_r3: "Tervezés",
    t2_title: "Önvezető autók", t2_text: "Az autonóm járművek kamerákat és szenzorokat használnak az ember nélküli közlekedéshez.", t2_inst: "Töltsd ki a hiányt:", t2_h1: "Kezek a kormány nélkül.", t2_h2: "Szenzorok akcióban.", t2_q: "Melyik technológia kulcsfontosságú az önvezető autóknak?", t2_qa: "Lidar és Radar", t2_qb: "Gőzgép", t2_qc: "Vitorla", t2_qd: "Szárnyak",
    t2_sent: "Az önvezető autónak valós időben kell érzékelnie a ___ .", t2_qa2: "környezetét", t2_qb2: "színét", t2_qc2: "zenét", t2_qd2: "álmokat",
    t3_title: "Ajánló algoritmusok", t3_text: "A MI elemzi a viselkedésedet a YouTube-on vagy Netflixen, hogy új videókat javasoljon.", t3_inst: "Válogasd szét:", t3_h1: "Az érdeklődésed.", t3_h2: "Mit nézel?", t3_q: "Miért javasol a Netflix filmeket?", t3_qa: "Preferenciák alapján", t3_qb: "Véletlenszerűen", t3_qc: "Mert régiek a filmek", t3_qd: "Nincs oka",
    t3_bl1: "Felhasználói bevitel", t3_bl2: "MI javaslat", t3_i1: "Megnézett film", t3_i2: "Hasonló film", t3_i3: "Adott lájk", t3_i4: "Trendi videó",
    t4_title: "MI a pénzügyekben", t4_text: "A bankok MI-t használnak a csalások felderítésére és a tőzsde előrejelzésére.", t4_inst: "Tedd sorrendbe a szavakat:", t4_h1: "Pénz és védelem.", t4_h2: "Csalásfelismerés.", t4_q: "Mit ismer fel a MI a bankkártyáknál?", t4_qa: "Gyanús tranzakciókat", t4_qb: "A kártya színét", t4_qc: "A kártya súlyát", t4_qd: "A bank nevét",
    t4_w1: "A MI", t4_w2: "védi", t4_w3: "a banki", t4_w4: "számlákat", t4_w5: "az", t4_w6: "illetéktelen", t4_w7: "hozzáféréstől.",
    t5_title: "Felelősség (Etika)", t5_text: "Ki a felelős, ha a MI hibázik? Az ember vagy a gép?", t5_inst: "Jelöld meg az 'etikai' jelentésű szót:", t5_h1: "Ki a hibás?", t5_h2: "Jogi kérdések.", t5_q: "Mi a MI egyik központi etikai kérdése?", t5_qa: "Felelősségre vonhatóság", t5_qb: "Akku élettartam", t5_qc: "Ház színe", t5_qd: "Monitor mérete",
    t5_tk1: "Etikai", t5_tk2: "irányelvek", t5_tk3: "szabályozzák", t5_tk4: "a MI", t5_tk5: "biztonságos", t5_tk6: "használatát.", t5_tk7: "",
    t6_title: "Adatvédelem és MI", t6_text: "A MI-nek sok adatra van szüksége, de a magánszféránkat védeni kell.", t6_inst: "Párosítsd össze:", t6_h1: "Privát vs. Nyilvános.", t6_h2: "Az adataim.", t6_q: "Mi fontos a MI tanításakor?", t6_qa: "Adatok anonimizálása", t6_qb: "Mindent közzétenni", t6_qc: "Adatok törlése", t6_qd: "Adatok nélkülözése",
    t6_l1: "Jelszó", t6_r1: "Titkos", t6_l2: "Felhasználónév", t6_r2: "Védett", t6_l3: "Helyszín", t6_r3: "Magán",
    t7_title: "Generatív MI", t7_text: "Olyan MI, amely képes új tartalmakat, például képeket, szöveget vagy zenét létrehozni.", t7_inst: "Töltsd ki a hiányt:", t7_h1: "Valami újat alkotni.", t7_h2: "Kreatív gépek.", t7_q: "Mit tud a generatív MI létrehozni?", t7_qa: "Digitális műalkotásokat", t7_qb: "Egy igazi zsemlét", t7_qc: "Fém biciklit", t7_qd: "Egy széket",
    t7_sent: "A generatív MI ___ használ az új képek létrehozásához.", t7_qa2: "promptokat", t7_qb2: "kalapácsot", t7_qc2: "vizet", t7_qd2: "csavarokat",
    t8_title: "MI az oktatásban", t8_text: "A MI segíthet a tanulásban a feladatok tempódhoz igazításával.", t8_inst: "Válogasd szét:", t8_h1: "Tanulási segéd vs. Csalás.", t8_h2: "Értelmes használat.", t8_q: "Hogyan segítheti a MI a diákokat?", t8_qa: "Egyéni visszajelzés", t8_qb: "Házifeladat teljes másolása", t8_qc: "Sehogy", t8_qd: "PC kikapcsolása",
    t8_bl1: "Pozitív", t8_bl2: "Kritikus", t8_i1: "Magyarázatok keresése", t8_i2: "Plágium készítése", t8_i3: "Tanulási terv", t8_i4: "Vak bizalom",
    t9_title: "Környezeti hatások", t9_text: "A nagy MI modellek tanítása rengeteg energiát fogyaszt.", t9_inst: "Tedd sorrendbe a szavakat:", t9_h1: "A MI energiaéhsége.", t9_h2: "Fenntarthatóság.", t9_q: "Mi a MI egyik környezeti problémája?", t9_qa: "Magas áramfogyasztás", t9_qb: "Zajos", t9_qc: "Sok papír kell neki", t9_qd: "Nincsenek problémák",
    t9_w1: "A MI", t9_w2: "adatközpontoknak", t9_w3: "nagyon", t9_w4: "hatékony", t9_w5: "hűtésre", t9_w6: "van", t9_w7: "szükségük.",
    t10_title: "Chatbotok", t10_text: "Számítógépes programok, amelyek emberi beszélgetést szimulálnak.", t10_inst: "Jelöld meg a párbeszéd-programok nevét:", t10_h1: "Beszélgetés robotokkal.", t10_h2: "Dialógus rendszerek.", t10_q: "Hol találkozhatunk gyakran chatbotokkal?", t10_qa: "Ügyfélszolgálati oldalakon", t10_qb: "Az erdőben", t10_qc: "Egy villán", t10_qd: "A kádban",
    t10_tk1: "Chatbotok", t10_tk2: "gyorsan", t10_tk3: "válaszolnak", t10_tk4: "a kérdésekre.", t10_tk5: "", t10_tk6: "", t10_tk7: "",
    t11_title: "Deepfake-ek", t11_text: "Megtévesztően valódi médiatartalmak (képek/videók), amelyeket MI-vel hamisítottak.", t11_inst: "Párosítsd össze:", t11_h1: "Igazság vagy hazugság?", t11_h2: "Manipuláció felismerése.", t11_q: "Mi a deepfake-ek veszélye?", t11_qa: "Álhírek terjesztése", t11_qb: "Jobb képminőség", t11_qc: "Gyorsabb internet", t11_qd: "Élénk színek",
    t11_l1: "Eredeti", t11_r1: "Valódi", t11_l2: "Deepfake", t11_r2: "Hamisított", t11_l3: "Manipuláció", t11_r3: "Megtévesztés",
    t12_title: "Ember–MI együttműködés", t12_text: "Az emberek és a MI együtt dolgoznak, hogy jobb eredményeket érjenek el.", t12_inst: "Töltsd ki a hiányt:", t12_h1: "Csapatmunka.", t12_h2: "Erősségek kombinálása.", t12_q: "Hogyan nevezzük az ember és a MI együttműködését?", t12_qa: "Kiterjesztett intelligencia", t12_qb: "Fogaskerék-modell", t12_qc: "Veszekedés", t12_qd: "Magány",
    t12_sent: "Az ember hozza a ___ , a MI az adatelemzést végzi.", t12_qa2: "döntést", t12_qb2: "akkut", t12_qc2: "billentyűzetet", t12_qd2: "lámpát",
    t13_title: "MI az iparban", t13_text: "A gyári robotok MI-t használnak az alkatrészek ellenőrzésére és a hibák megtalálására.", t13_inst: "Válogasd szét:", t13_h1: "Futószalag-munka.", t13_h2: "Automatizálás.", t13_q: "Mit javít a MI a gyártásban?", t13_qa: "Minőség-ellenőrzést", t13_qb: "Az ebédszünetet", t13_qc: "A falak színét", t13_qd: "A padlóburkolatot",
    t13_bl1: "Kézi folyamat", t13_bl2: "MI folyamat", t13_i1: "Szemmel ellenőrzés", t13_i2: "Kamerás szkenner", t13_i3: "Kézi számolás", t13_i4: "Előrejelző karbantartás",
    t14_title: "Törvények a MI-re (AI Act)", t14_text: "A kormányok szabályokat alkotnak, hogy a MI használata biztonságos legyen.", t14_inst: "Tedd sorrendbe a szavakat:", t14_h1: "Szabályok a technikára.", t14_h2: "A biztonság az első.", t14_q: "Mi az EU AI Act célja?", t14_qa: "Biztonságos és tisztességes MI", t14_qb: "A MI betiltása", t14_qc: "A MI drágítása", t14_qd: "Nincs cél",
    t14_w1: "A szabályok", t14_w2: "bizalmat", t14_w3: "teremtenek", t14_w4: "a", t14_w5: "mesterséges", t14_w6: "intelligencia", t14_w7: "iránt.",
    t15_title: "A munka jövője", t15_text: "A MI átalakítja a szakmákat, de sok új munkahelyet is teremt.", t15_h1: "Változás a munkában.", t15_h2: "Új lehetőségek.", t15_q: "Melyik képesség válik fontosabbá a MI miatt?", t15_qa: "Kritikus gondolkodás", t15_qb: "Dolgok bemagolása", t15_qc: "Gyors gépelés", t15_qd: "Oda nem figyelés",
    t15_inst: "Jelöld meg a két szót, ami a folyamatos tanulást jelenti:",
    t15_tk1: "Folyamatos", t15_tk2: "tanulás", t15_tk3: "a", t15_tk4: "jövő", t15_tk5: "kulcsa.", t15_tk6: "", t15_tk7: ""
  },
  ro: {
    explorer_title: "Insula IA: Aplicații și Etică",
    t1_title: "IA în Medicină", t1_text: "IA ajută medicii să identifice bolile mai rapid prin analizarea radiografiilor.", t1_inst: "Potrivește perechile:", t1_h1: "Medic și ajutor.", t1_h2: "Sănătate și tehnică.", t1_q: "Care este un avantaj al IA în medicină?", t1_qa: "Diagnostic mai rapid", t1_qb: "IA nu greșește niciodată", t1_qc: "Medicii devin inutili", t1_qd: "Mai puține vitamine",
    t1_l1: "Radiografie", t1_r1: "Analiză", t1_l2: "Simptom", t1_r2: "Detectare", t1_l3: "Terapie", t1_r3: "Planificare",
    t2_title: "Mașini Autonome", t2_text: "Vehiculele autonome folosesc camere și senzori pentru a circula fără șofer uman.", t2_inst: "Completează spațiul liber:", t2_h1: "Fără mâini pe volan.", t2_h2: "Senzori în acțiune.", t2_q: "Ce tehnologie este crucială pentru mașinile autonome?", t2_qa: "Lidar și Radar", t2_qb: "Motor cu aburi", t2_qc: "Vele", t2_qd: "Aripi",
    t2_sent: "O mașină autonomă trebuie să își perceapă ___ în timp real.", t2_qa2: "mediul", t2_qb2: "culoarea", t2_qc2: "muzica", t2_qd2: "visurile",
    t3_title: "Algoritmi de Recomandare", t3_text: "IA analizează comportamentul tău pe YouTube sau Netflix pentru a-ți sugera clipuri noi.", t3_inst: "Sortează în găleți:", t3_h1: "Interesele tale.", t3_h2: "Ce vizionezi?", t3_q: "De ce sugerează Netflix filme?", t3_qa: "Bazat pe preferințe", t3_qb: "La întâmplare", t3_qc: "Pentru că filmele sunt vechi", t3_qd: "Fără motiv",
    t3_bl1: "Input Utilizator", t3_bl2: "Sugestie IA", t3_i1: "Film vizionat", t3_i2: "Film similar", t3_i3: "Like oferit", t3_i4: "Video trending",
    t4_title: "IA în Finanțe", t4_text: "Băncile folosesc IA pentru a detecta fraudele și a prezice bursa.", t4_inst: "Pune cuvintele în ordine:", t4_h1: "Bani și protecție.", t4_h2: "Detectare fraudă.", t4_q: "Ce detectează IA la cardurile bancare?", t4_qa: "Tranzacții suspecte", t4_qb: "Culoarea cardului", t4_qc: "Greutatea cardului", t4_qd: "Numele băncii",
    t4_w1: "IA", t4_w2: "protejează", t4_w3: "conturile", t4_w4: "bancare", t4_w5: "împotriva", t4_w6: "accesului", t4_w7: "neautorizat.",
    t5_title: "Responsabilitate (Etică)", t5_text: "Cine este responsabil când IA greșește? Omul sau mașina?", t5_inst: "Evidențiază cuvântul care înseamnă 'etică':", t5_h1: "Cine e de vină?", t5_h2: "Întrebări juridice.", t5_q: "Care este o problemă etică centrală a IA?", t5_qa: "Responsabilitatea", t5_qb: "Durata bateriei", t5_qc: "Culoarea carcasei", t5_qd: "Mărimea monitorului",
    t5_tk1: "Etica", t5_tk2: "ghidează", t5_tk3: "utilizarea", t5_tk4: "sigură", t5_tk5: "a IA.", t5_tk6: "", t5_tk7: "",
    t6_title: "Confidențialitate și IA", t6_text: "IA are nevoie de multe date, dar intimitatea noastră trebuie protejată.", t6_inst: "Potrivește perechile:", t6_h1: "Privat vs. Public.", t6_h2: "Datele mele.", t6_q: "Ce este important la antrenarea IA?", t6_qa: "Anonimizarea datelor", t6_qb: "Publicarea tuturor datelor", t6_qc: "Ștergerea datelor", t6_qd: "Lipsa datelor",
    t6_l1: "Parolă", t6_r1: "Secret", t6_l2: "Utilizator", t6_r2: "Protejat", t6_l3: "Locație", t6_r3: "Privat",
    t7_title: "IA Generativă", t7_text: "IA care poate crea conținut nou, cum ar fi imagini, text sau muzică.", t7_inst: "Completează spațiul liber:", t7_h1: "A crea ceva nou.", t7_h2: "Mașini creative.", t7_q: "Ce poate crea IA generativă?", t7_qa: "Opere de artă digitale", t7_qb: "O chiflă reală", t7_qc: "Bicicletă de metal", t7_qd: "Un scaun",
    t7_sent: "IA generativă folosește ___ pentru a crea imagini noi.", t7_qa2: "prompturi", t7_qb2: "ciocan", t7_qc2: "apă", t7_qd2: "șuruburi",
    t8_title: "IA în Educație", t8_text: "IA poate ajuta la învățare prin adaptarea sarcinilor la ritmul tău.", t8_inst: "Sortează în găleți:", t8_h1: "Ajutor vs. Copiat.", t8_h2: "Utilizare utilă.", t8_q: "Cum poate IA ajuta elevii?", t8_qa: "Feedback individual", t8_qb: "Copierea temelor", t8_qc: "Deloc", t8_qd: "Oprirea PC-ului",
    t8_bl1: "Pozitiv", t8_bl2: "Critic", t8_i1: "Căutare explicații", t8_i2: "Creare plagiate", t8_i3: "Plan de studiu", t8_i4: "Încredere oarbă",
    t9_title: "Impactul Ecologic", t9_text: "Antrenarea modelelor mari de IA consumă foarte multă energie.", t9_inst: "Pune cuvintele în ordine:", t9_h1: "Foamea de energie a IA.", t9_h2: "Sustenabilitate.", t9_q: "Care este o problemă ecologică a IA?", t9_qa: "Consum ridicat de curent", t9_qb: "Zgomot", t9_qc: "Are nevoie de multă hârtie", t9_qd: "Nu sunt probleme",
    t9_w1: "Centrele", t9_w2: "de date", t9_w3: "IA", t9_w4: "necesită", t9_w5: "o răcire", t9_w6: "foarte", t9_w7: "eficientă.",
    t10_title: "Chatboți", t10_text: "Programe care simulează o conversație cu oamenii.", t10_inst: "Evidențiază cuvântul pentru programele de dialog:", t10_h1: "Discuții cu roboți.", t10_h2: "Sisteme de dialog.", t10_q: "Unde găsim adesea chatboți?", t10_qa: "Pagini de asistență clienți", t10_qb: "În pădure", t10_qc: "Pe o furculiță", t10_qd: "În cadă",
    t10_tk1: "Chatboții", t10_tk2: "pot", t10_tk3: "răspunde", t10_tk4: "la", t10_tk5: "întrebări", t10_tk6: "în", t10_tk7: "timp real.",
    t11_title: "Deepfake-uri", t11_text: "Conținut media înșelător de real (imagini/videoclipuri) falsificat cu IA.", t11_inst: "Potrivește perechile:", t11_h1: "Adevăr sau minciună?", t11_h2: "Detectarea manipulării.", t11_q: "Care este pericolul deepfake-urilor?", t11_qa: "Răspândirea dezinformării", t11_qb: "Calitate mai bună a imaginii", t11_qc: "Internet mai rapid", t11_qd: "Culori vii",
    t11_l1: "Original", t11_r1: "Real", t11_l2: "Deepfake", t11_r2: "Fals", t11_l3: "Manipulare", t11_r3: "Înșelăciune",
    t12_title: "Colaborare Om-IA", t12_text: "Oamenii și IA lucrează împreună pentru a obține rezultate mai bune.", t12_inst: "Completează spațiul liber:", t12_h1: "Muncă în echipă.", t12_h2: "Combinarea punctelor forte.", t12_q: "Cum se numește cooperarea dintre om și IA?", t12_qa: "Inteligență augmentată", t12_qb: "Modelul cu roți dințate", t12_qc: "Ceartă", t12_qd: "Singurătate",
    t12_sent: "Omul ia ___ , iar IA face analiza datelor.", t12_qa2: "decizia", t12_qb2: "bateria", t12_qc2: "tastatura", t12_qd2: "lampa",
    t13_title: "IA în Industrie", t13_text: "Roboții din fabrici folosesc IA pentru a verifica piesele și a găsi erori.", t13_inst: "Sortează în găleți:", t13_h1: "Munca pe bandă.", t13_h2: "Automatizare.", t13_q: "Ce îmbunătățește IA în producție?", t13_qa: "Controlul calității", t13_qb: "Pauza de masă", t13_qc: "Culoarea pereților", t13_qd: "Pardoseala",
    t13_bl1: "Proces manual", t13_bl2: "Proces IA", t13_i1: "Verificare cu ochiul", t13_i2: "Scaner cu cameră", t13_i3: "Numărare manuală", t13_i4: "Mentenanță predictivă",
    t14_title: "Legi pentru IA (AI Act)", t14_text: "Guvernele creează reguli pentru a face utilizarea IA sigură.", t14_inst: "Pune cuvintele în ordine:", t14_h1: "Reguli pentru tehnologie.", t14_h2: "Siguranța pe primul loc.", t14_q: "Care este scopul EU AI Act?", t14_qa: "IA sigură și corectă", t14_qb: "Interzicerea IA", t14_qc: "Scumpirea IA", t14_qd: "Niciun scop",
    t14_w1: "Regulile", t14_w2: "clare", t14_w3: "creează", t14_w4: "încredere", t14_w5: "în", t14_w6: "inteligența", t14_w7: "artificială.",
    t15_title: "Viitorul Muncii", t15_text: "IA va schimba profesiile, dar va crea și multe locuri de muncă noi.", t15_h1: "Schimbare în meserii.", t15_h2: "Oportunități noi.", t15_q: "Care abilitate devine mai importantă datorită IA?", t15_qa: "Gândire critică", t15_qb: "Memorarea lucrurilor", t15_qc: "Tastare rapidă", t15_qd: "Lipsa atenției",
    t15_inst: "Evidențiază cele două cuvinte pentru 'învățare continuă':",
    t15_tk1: "Învățarea", t15_tk2: "continuă", t15_tk3: "este", t15_tk4: "cheia", t15_tk5: "viitorului.", t15_tk6: "", t15_tk7: ""
  }
};

export const INFO_K8_I5_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "simple-icon", icon: "🏥", color: "#F44336" },
    interactive: { type: "match-pairs", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", pairs: [{left:"t1_l1",right:"t1_r1"},{left:"t1_l2",right:"t1_r2"},{left:"t1_l3",right:"t1_r3"}] },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" }
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "🚗", color: "#2196F3" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" }
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "icon-grid", items: [{emoji:"📺",label:"YouTube"},{emoji:"🎬",label:"Netflix"}] },
    interactive: { type: "drag-to-bucket", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", buckets: [{id:"b1",label:"t3_bl1"},{id:"b2",label:"t3_bl2"}], items: [{text:"t3_i1",bucketId:"b1"},{text:"t3_i2",bucketId:"b2"},{text:"t3_i3",bucketId:"b1"},{text:"t3_i4",bucketId:"b2"}] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "🛡️", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", words: ["t4_w1", "t4_w2", "t4_w3", "t4_w4", "t4_w5", "t4_w6", "t4_w7"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "⚖️", color: "#795548" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6","t5_tk7"].filter(x=>x!==""), correctIndices: [0] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" }
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "simple-icon", icon: "🔒", color: "#607D8B" },
    interactive: { type: "match-pairs", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", pairs: [{left:"t6_l1",right:"t6_r1"},{left:"t6_l2",right:"t6_r2"},{left:"t6_l3",right:"t6_r3"}] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" }
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "🎨", color: "#E91E63" },
    interactive: { type: "gap-fill", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", sentence: "t7_sent", choices: ["t7_qa2", "t7_qb2", "t7_qc2", "t7_qd2"], correctIndex: 0 },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" }
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "icon-grid", items: [{emoji:"🎓",label:"Learn"},{emoji:"⚠️",label:"Check"}] },
    interactive: { type: "drag-to-bucket", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", buckets: [{id:"b1",label:"t8_bl1"},{id:"b2",label:"t8_bl2"}], items: [{text:"t8_i1",bucketId:"b1"},{text:"t8_i2",bucketId:"b2"},{text:"t8_i3",bucketId:"b1"},{text:"t8_i4",bucketId:"b2"}] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" }
  },
  {
    infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "simple-icon", icon: "🌱", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2", words: ["t9_w1", "t9_w2", "t9_w3", "t9_w4", "t9_w5", "t9_w6", "t9_w7"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t9_q", choices: ["t9_qa", "t9_qb", "t9_qc", "t9_qd"], answer: "t9_qa" }
  },
  {
    infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "simple-icon", icon: "💬", color: "#3F51B5" },
    interactive: { type: "highlight-text", instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2", tokens: ["t10_tk1","t10_tk2","t10_tk3","t10_tk4","t10_tk5","t10_tk6","t10_tk7"].filter(x=>x!==""), correctIndices: [0] },
    quiz: { question: "t10_q", choices: ["t10_qa", "t10_qb", "t10_qc", "t10_qd"], answer: "t10_qa" }
  },
  {
    infoTitle: "t11_title", infoText: "t11_text",
    svg: { type: "simple-icon", icon: "🎭", color: "#9C27B0" },
    interactive: { type: "match-pairs", instruction: "t11_inst", hint1: "t11_h1", hint2: "t11_h2", pairs: [{left:"t11_l1",right:"t11_r1"},{left:"t11_l2",right:"t11_r2"},{left:"t11_l3",right:"t11_r3"}] },
    quiz: { question: "t11_q", choices: ["t11_qa", "t11_qb", "t11_qc", "t11_qd"], answer: "t11_qa" }
  },
  {
    infoTitle: "t12_title", infoText: "t12_text",
    svg: { type: "simple-icon", icon: "🤝", color: "#FF5722" },
    interactive: { type: "gap-fill", instruction: "t12_inst", hint1: "t12_h1", hint2: "t12_h2", sentence: "t12_sent", choices: ["t12_qa2", "t12_qb2", "t12_qc2", "t12_qd2"], correctIndex: 0 },
    quiz: { question: "t12_q", choices: ["t12_qa", "t12_qb", "t12_qc", "t12_qd"], answer: "t12_qa" }
  },
  {
    infoTitle: "t13_title", infoText: "t13_text",
    svg: { type: "icon-grid", items: [{emoji:"🏭",label:"Manual"},{emoji:"⚡",label:"AI"}] },
    interactive: { type: "drag-to-bucket", instruction: "t13_inst", hint1: "t13_h1", hint2: "t13_h2", buckets: [{id:"b1",label:"t13_bl1"},{id:"b2",label:"t13_bl2"}], items: [{text:"t13_i1",bucketId:"b1"},{text:"t13_i2",bucketId:"b2"},{text:"t13_i3",bucketId:"b1"},{text:"t13_i4",bucketId:"b2"}] },
    quiz: { question: "t13_q", choices: ["t13_qa", "t13_qb", "t13_qc", "t13_qd"], answer: "t13_qa" }
  },
  {
    infoTitle: "t14_title", infoText: "t14_text",
    svg: { type: "simple-icon", icon: "📜", color: "#FFC107" },
    interactive: { type: "word-order", instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2", words: ["t14_w1", "t14_w2", "t14_w3", "t14_w4", "t14_w5", "t14_w6", "t14_w7"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t14_q", choices: ["t14_qa", "t14_qb", "t14_qc", "t14_qd"], answer: "t14_qa" }
  },
  {
    infoTitle: "t15_title", infoText: "t15_text",
    svg: { type: "text-bubbles", items: [{text:"Job",bg:"#fff",color:"#000",emoji:"🏢"},{text:"Future",bg:"#fff",color:"#000",emoji:"🚀"}] },
    interactive: { type: "highlight-text", instruction: "t15_inst", hint1: "t15_h1", hint2: "t15_h2", tokens: ["t15_tk1","t15_tk2","t15_tk3","t15_tk4","t15_tk5","t15_tk6","t15_tk7"].filter(x=>x!==""), correctIndices: [0,1] },
    quiz: { question: "t15_q", choices: ["t15_qa", "t15_qb", "t15_qc", "t15_qd"], answer: "t15_qa" }
  }
];

