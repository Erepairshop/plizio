// @ts-nocheck
// lib/explorerPools/aiK6_i1.ts
import type { PoolTopicDef } from "./types";

export const INFO_K6_I1_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "KI Insel 1: Grundlagen",
    t1_title: "Was ist KI?", t1_text: "Künstliche Intelligenz (KI) lässt Computer Aufgaben lösen, für die man sonst menschliche Intelligenz braucht.", t1_inst: "Paare zuordnen:", t1_h1: "Mensch vs Maschine.", t1_h2: "Wer macht was?", t1_q: "Was macht eine KI?", t1_qa: "Sie lernt aus Daten", t1_qb: "Sie schläft nachts", t1_qc: "Sie isst Strom", t1_qd: "Sie wird müde",
    t1_l1: "Mensch", t1_r1: "Denkt selbst", t1_l2: "KI", t1_r2: "Nutzt Algorithmen", t1_l3: "Rechner", t1_r3: "Folgt Befehlen",
    t2_title: "Daten: Das Futter", t2_text: "KI braucht viele Beispiele (Daten), um zu lernen. Ohne Daten weiß sie nichts.", t2_inst: "Lücke füllen:", t2_h1: "Lernen braucht...", t2_h2: "Beispiele sind wichtig.", t2_q: "Was ist das Wichtigste für KI?", t2_qa: "Daten", t2_qb: "Farbe", t2_qc: "Tastatur", t2_qd: "Gehäuse",
    t2_sent: "Eine KI lernt durch viele ___.", t2_qa2: "Beispiele", t2_qb2: "Kabel", t2_qc2: "Ferien", t2_qd2: "Geräusche",
    t3_title: "Maschinelles Lernen", t3_text: "Beim Maschinellen Lernen findet der Computer von selbst Regeln in den Daten.", t3_inst: "Sortieren:", t3_h1: "Lernen oder Befehl?", t3_h2: "Was ist KI?", t3_q: "Wie lernt eine KI?", t3_qa: "Durch Muster in Daten", t3_qb: "Durch Auswendiglernen", t3_qc: "Gar nicht", t3_qd: "Durch Lesen von Büchern",
    t3_bl1: "KI Lernen", t3_bl2: "Klassisch", t3_i1: "Muster finden", t3_i2: "Schritt-für-Schritt", t3_i3: "Selbstverbesserung", t3_i4: "Fester Plan",
    t4_title: "Mustererkennung", t4_text: "KI ist super darin, Gesichter oder Stimmen in großen Datenmengen zu finden.", t4_inst: "Wörter ordnen:", t4_h1: "KI findet...", t4_h2: "Regelmäßigkeiten.", t4_q: "Was sucht die KI in Bildern?", t4_qa: "Muster", t4_qb: "Fehler", t4_qc: "Staub", t4_qd: "Pixelanzahl",
    t4_w1: "KI", t4_w2: "erkennt", t4_w3: "wichtige", t4_w4: "Muster", t4_w5: "in", t4_w6: "Bildern.", t4_w7: "",
    t5_title: "Neuronale Netze", t5_text: "Das sind Computer-Strukturen, die ein bisschen wie unser Gehirn funktionieren.", t5_inst: "Wort markieren:", t5_h1: "Wie im Kopf.", t5_h2: "Netzwerk.", t5_q: "Was ist ein neuronales Netz?", t5_qa: "Ein Modell des Gehirns", t5_qb: "Ein Fischernetz", t5_qc: "Ein Stromkabel", t5_qd: "Ein Internet-Router",
    t5_tk1: "Neuronale", t5_tk2: "Netze", t5_tk3: "bestehen", t5_tk4: "aus", t5_tk5: "vielen", t5_tk6: "Schichten.",
    t6_title: "Computer Vision", t6_text: "KI kann Bilder 'sehen' und verstehen, was darauf abgebildet ist.", t6_inst: "Paare zuordnen:", t6_h1: "Sehen lernen.", t6_h2: "Was erkennt die KI?", t6_q: "Wie nennt man das 'Sehen' von Computern?", t6_qa: "Computer Vision", t6_qb: "Super-Auge", t6_qc: "Video-Player", t6_qd: "Monitor-Blick",
    t6_l1: "Hund", t6_r1: "Tier erkannt", t6_l2: "Stoppschild", t6_r2: "Verkehr", t6_l3: "Gesicht", t6_r3: "Person",
    t7_title: "Spracherkennung", t7_text: "KI wandelt gesprochene Sprache in Text um, den sie verarbeiten kann.", t7_inst: "Lücke füllen:", t7_h1: "Zuhören.", t7_h2: "Mikrofon an.", t7_q: "Wo nutzt man Spracherkennung?", t7_qa: "Diktat-Apps", t7_qb: "Drucker", t7_qc: "Mausklick", t7_qd: "Monitor",
    t7_sent: "Die KI wandelt ___ in Text um.", t7_qa2: "Stimmen", t7_qb2: "Bilder", t7_qc2: "Wasser", t7_qd2: "Papier",
    t8_title: "NLP (Sprache)", t8_text: "Natural Language Processing hilft der KI, menschliche Sprache zu verstehen.", t8_inst: "Sortieren:", t8_h1: "Sprache vs. Code.", t8_h2: "Was ist NLP?", t8_q: "Was bedeutet NLP?", t8_qa: "Sprachverarbeitung", t8_qb: "Neue Lern-Plattform", t8_qc: "Netz-Lade-Plan", t8_qd: "Nur Lustige Programme",
    t8_bl1: "NLP Aufgabe", t8_bl2: "Andere", t8_i1: "Übersetzen", t8_i2: "Rechnen", t8_i3: "Zusammenfassen", t8_i4: "Malen",
    t9_title: "Chatbots", t9_text: "Chatbots sind Programme, mit denen man wie mit Menschen schreiben kann.", t9_inst: "Wörter ordnen:", t9_h1: "Sprechen mit KI.", t9_h2: "Text-Gespräch.", t9_q: "Was ist ein Chatbot?", t9_qa: "Ein Dialog-Programm", t9_qb: "Ein kleiner Roboter", t9_qc: "Ein Virus", t9_qd: "Eine Tastatur",
    t9_w1: "Chatbots", t9_w2: "können", t9_w3: "Fragen", t9_w4: "von", t9_w5: "Benutzern", t9_w6: "beantworten.", t9_w7: "",
    t10_title: "Roboter vs. KI", t10_text: "KI ist das Gehirn (Software), der Roboter ist der Körper (Hardware).", t10_inst: "Wort markieren:", t10_h1: "Körper vs Geist.", t10_h2: "Hardware vs Software.", t10_q: "Was ist der Unterschied?", t10_qa: "KI ist Software", t10_qb: "KI ist immer Metall", t10_qc: "Es gibt keinen", t10_qd: "Roboter haben keine Kabel",
    t10_tk1: "Die", t10_tk2: "KI", t10_tk3: "steuert", t10_tk4: "als", t10_tk5: "Software", t10_tk6: "den", t10_tk7: "Roboter.",
    t11_title: "KI im Alltag", t11_text: "KI steckt heute fast überall: im Handy, im Auto und im Internet.", t11_inst: "Paare zuordnen:", t11_h1: "Wo ist KI?", t11_h2: "Überall dabei.", t11_q: "Wo findest du KI im Handy?", t11_qa: "Gesichtsentsperrung", t11_qb: "Akku", t11_qc: "Glasdisplay", t11_qd: "SIM-Karte",
    t11_l1: "Auto", t11_r1: "Navigationssystem", t11_l2: "Handy", t11_r2: "Smart Assistant", t11_l3: "Shopping", t11_r3: "Vorschläge",
    t12_title: "Vorschlag-Systeme", t12_text: "Streaming-Dienste nutzen KI, um dir Filme vorzuschlagen, die dir gefallen könnten.", t12_inst: "Lücke füllen:", t12_h1: "Was guckst du?", t12_h2: "Interessen finden.", t12_q: "Warum schlägt Netflix Filme vor?", t12_qa: "Wegen deiner Vorlieben", t12_qb: "Zufall", t12_qc: "Weil sie neu sind", t12_qd: "Weil sie teuer sind",
    t12_sent: "Die KI analysiert deinen ___.", t12_qa2: "Geschmack", t12_qb2: "Monitor", t12_qc2: "Tisch", t12_qd2: "Hunger",
    t13_title: "KI in Spielen", t13_text: "KI macht Gegner in Videospielen schlauer und unvorhersehbarer.", t13_inst: "Sortieren:", t13_h1: "Echt vs Spiel.", t13_h2: "Gegner-KI.", t13_q: "Was macht Spiele-KI?", t13_qa: "Steuert Gegner", t13_qb: "Macht die Grafik", t13_qc: "Säubert die CD", t13_qd: "Kühlt die Konsole",
    t13_bl1: "KI Verhalten", t13_bl2: "Grafik", t13_i1: "Gegner sucht Weg", t13_i2: "Lichteffekte", t13_i3: "Taktik anpassen", t13_i4: "3D Modell",
    t14_title: "KI & Kreativität", t14_text: "KIs können heute Bilder malen, Musik schreiben oder Gedichte verfassen.", t14_inst: "Wörter ordnen:", t14_h1: "KI als Künstler.", t14_h2: "Bilder erschaffen.", t14_q: "Kann KI Kunst machen?", t14_qa: "Ja, mit Vorgaben", t14_qb: "Nur mit Pinsel", t14_qc: "Nein, niemals", t14_qd: "Nur in Schwarz-Weiß",
    t14_w1: "KI", t14_w2: "erzeugt", t14_w3: "neue", t14_w4: "Bilder", t14_w5: "aus", t14_w6: "Texten.", t14_w7: "",
    t15_title: "Ethik & Fairness", t15_text: "KI kann Vorurteile lernen, wenn die Daten nicht fair sind. Wir müssen aufpassen!", t15_inst: "Wort markieren:", t15_h1: "Gerechtigkeit.", t15_h2: "Vorsicht!", t15_q: "Was ist ein Problem von KI?", t15_qa: "Voreingenommenheit", t15_qb: "Sie wird zu schwer", t15_qc: "Sie braucht zu viel Platz", t15_qd: "Sie spricht zu laut",
    t15_tk1: "Menschen", t15_tk2: "müssen", t15_tk3: "KI", t15_tk4: "auf", t15_tk5: "Fairness", t15_tk6: "prüfen."
  },
  en: {
    explorer_title: "AI Island 1: Basics",
    t1_title: "What is AI?", t1_text: "Artificial Intelligence (AI) lets computers solve tasks that normally need human intelligence.", t1_inst: "Match the pairs:", t1_h1: "Human vs machine.", t1_h2: "Who does what?", t1_q: "What does an AI do?", t1_qa: "It learns from data", t1_qb: "It sleeps at night", t1_qc: "It eats electricity", t1_qd: "It gets tired",
    t1_l1: "Human", t1_r1: "Thinks independently", t1_l2: "AI", t1_r2: "Uses algorithms", t1_l3: "Calculator", t1_r3: "Follows commands",
    t2_title: "Data: The Fuel", t2_text: "AI needs many examples (data) to learn. Without data, it knows nothing.", t2_inst: "Fill in the blank:", t2_h1: "Learning needs...", t2_h2: "Examples are important.", t2_q: "What is the most important for AI?", t2_qa: "Data", t2_qb: "Color", t2_qc: "Keyboard", t2_qd: "Case",
    t2_sent: "An AI learns through many ___.", t2_qa2: "examples", t2_qb2: "cables", t2_qc2: "holidays", t2_qd2: "noises",
    t3_title: "Machine Learning", t3_text: "In machine learning, the computer finds rules in the data by itself.", t3_inst: "Sort them:", t3_h1: "Learning or command?", t3_h2: "What is AI?", t3_q: "How does an AI learn?", t3_qa: "Through patterns in data", t3_qb: "By memorizing", t3_qc: "It doesn't", t3_qd: "By reading books",
    t3_bl1: "AI Learning", t3_bl2: "Classic", t3_i1: "Find patterns", t3_i2: "Step-by-step", t3_i3: "Self-improvement", t3_i4: "Fixed plan",
    t4_title: "Pattern Recognition", t4_text: "AI is great at finding faces or voices in large amounts of data.", t4_inst: "Order the words:", t4_h1: "AI finds...", t4_h2: "Regularities.", t4_q: "What does the AI look for in images?", t4_qa: "Patterns", t4_qb: "Errors", t4_qc: "Dust", t4_qd: "Pixel count",
    t4_w1: "AI", t4_w2: "recognizes", t4_w3: "important", t4_w4: "patterns", t4_w5: "in", t4_w6: "images.", t4_w7: "",
    t5_title: "Neural Networks", t5_text: "These are computer structures that work a bit like our brain.", t5_inst: "Highlight the word:", t5_h1: "Like in your head.", t5_h2: "Network.", t5_q: "What is a neural network?", t5_qa: "A model of the brain", t5_qb: "A fishing net", t5_qc: "A power cable", t5_qd: "An internet router",
    t5_tk1: "Neural", t5_tk2: "networks", t5_tk3: "consist", t5_tk4: "of", t5_tk5: "many", t5_tk6: "layers.",
    t6_title: "Computer Vision", t6_text: "AI can 'see' images and understand what is shown on them.", t6_inst: "Match the pairs:", t6_h1: "Learn to see.", t6_h2: "What does AI recognize?", t6_q: "What is computer 'seeing' called?", t6_qa: "Computer Vision", t6_qb: "Super-Eye", t6_qc: "Video Player", t6_qd: "Monitor gaze",
    t6_l1: "Dog", t6_r1: "Animal detected", t6_l2: "Stop sign", t6_r2: "Traffic", t6_l3: "Face", t6_r3: "Person",
    t7_title: "Speech Recognition", t7_text: "AI converts spoken language into text it can process.", t7_inst: "Fill in the blank:", t7_h1: "Listening.", t7_h2: "Microphone on.", t7_q: "Where is speech recognition used?", t7_qa: "Dictation apps", t7_qb: "Printers", t7_qc: "Mouse click", t7_qd: "Monitor",
    t7_sent: "The AI converts ___ into text.", t7_qa2: "voices", t7_qb2: "images", t7_qc2: "water", t7_qd2: "paper",
    t8_title: "NLP (Language)", t8_text: "Natural Language Processing helps AI understand human language.", t8_inst: "Sort them:", t8_h1: "Language vs Code.", t8_h2: "What is NLP?", t8_q: "What does NLP stand for?", t8_qa: "Language processing", t8_qb: "New Learning Platform", t8_qc: "Network Load Plan", t8_qd: "Nice Little Programs",
    t8_bl1: "NLP Task", t8_bl2: "Other", t8_i1: "Translate", t8_i2: "Calculate", t8_i3: "Summarize", t8_i4: "Paint",
    t9_title: "Chatbots", t9_text: "Chatbots are programs you can write to as if they were humans.", t9_inst: "Order the words:", t9_h1: "Talking to AI.", t9_h2: "Text conversation.", t9_q: "What is a chatbot?", t9_qa: "A dialog program", t9_qb: "A small robot", t9_qc: "A virus", t9_qd: "A keyboard",
    t9_w1: "Chatbots", t9_w2: "can", t9_w3: "answer", t9_w4: "questions", t9_w5: "from", t9_w6: "users.", t9_w7: "",
    t10_title: "Robot vs AI", t10_text: "AI is the brain (software), the robot is the body (hardware).", t10_inst: "Highlight the word:", t10_h1: "Body vs Mind.", t10_h2: "Hardware vs Software.", t10_q: "What is the difference?", t10_qa: "AI is software", t10_qb: "AI is always metal", t10_qc: "There is none", t10_qd: "Robots have no cables",
    t10_tk1: "The", t10_tk2: "AI", t10_tk3: "controls", t10_tk4: "the", t10_tk5: "robot", t10_tk6: "as", t10_tk7: "software.",
    t11_title: "AI in Daily Life", t11_text: "AI is everywhere today: in phones, cars, and on the internet.", t11_inst: "Match the pairs:", t11_h1: "Where is AI?", t11_h2: "Always there.", t11_q: "Where do you find AI in your phone?", t11_qa: "Face unlock", t11_qb: "Battery", t11_qc: "Glass screen", t11_qd: "SIM card",
    t11_l1: "Car", t11_r1: "Navigation system", t11_l2: "Phone", t11_r2: "Smart Assistant", t11_l3: "Shopping", t11_r3: "Suggestions",
    t12_title: "Recommendation Systems", t12_text: "Streaming services use AI to suggest movies you might like.", t12_inst: "Fill in the blank:", t12_h1: "What are you watching?", t12_h2: "Finding interests.", t12_q: "Why does Netflix suggest movies?", t12_qa: "Because of your preferences", t12_qb: "Random", t12_qc: "Because they are new", t12_qd: "Because they are expensive",
    t12_sent: "The AI analyzes your ___.", t12_qa2: "taste", t12_qb2: "monitor", t12_qc2: "table", t12_qd2: "hunger",
    t13_title: "AI in Games", t13_text: "AI makes opponents in video games smarter and more unpredictable.", t13_inst: "Sort them:", t13_h1: "Real vs Game.", t13_h2: "Opponent AI.", t13_q: "What does game AI do?", t13_qa: "Controls opponents", t13_qb: "Makes the graphics", t13_qc: "Cleans the CD", t13_qd: "Cools the console",
    t13_bl1: "AI Behavior", t13_bl2: "Graphics", t13_i1: "Gegner pathfinding", t13_i2: "Light effects", t13_i3: "Adapt tactics", t13_i4: "3D model",
    t14_title: "AI & Creativity", t14_text: "AIs today can paint pictures, write music, or compose poems.", t14_inst: "Order the words:", t14_h1: "AI as artist.", t14_h2: "Creating images.", t14_q: "Can AI make art?", t14_qa: "Yes, with prompts", t14_qb: "Only with a brush", t14_qc: "No, never", t14_qd: "Only in black and white",
    t14_w1: "AI", t14_w2: "creates", t14_w3: "new", t14_w4: "images", t14_w5: "from", t14_w6: "text.", t14_w7: "",
    t15_title: "Ethics & Fairness", t15_text: "AI can learn biases if the data is not fair. We must be careful!", t15_inst: "Highlight the word:", t15_h1: "Justice.", t15_h2: "Caution!", t15_q: "What is a problem with AI?", t15_qa: "Bias", t15_qb: "It gets too heavy", t15_qc: "It takes too much space", t15_qd: "It speaks too loud",
    t15_tk1: "Humans", t15_tk2: "must", t15_tk3: "check", t15_tk4: "AI", t15_tk5: "for", t15_tk6: "fairness."
  },
  hu: {
    explorer_title: "MI Sziget 1: Alapok",
    t1_title: "Mi az a MI?", t1_text: "A Mesterséges Intelligencia (MI) lehetővé teszi, hogy a gépek emberi ésszel megoldható feladatokat végezzenek.", t1_inst: "Párosítás:", t1_h1: "Ember vs gép.", t1_h2: "Ki mit csinál?", t1_q: "Mit csinál a MI?", t1_qa: "Adatokból tanul", t1_qb: "Éjjel alszik", t1_qc: "Áramot eszik", t1_qd: "Elfárad",
    t1_l1: "Ember", t1_r1: "Önállóan gondolkodik", t1_l2: "MI", t1_r2: "Algoritmusokat használ", t1_l3: "Számológép", t1_r3: "Utasításokat követ",
    t2_title: "Adat: Az üzemanyag", t2_text: "A MI-nek sok példára (adatra) van szüksége a tanuláshoz. Adatok nélkül semmit sem tud.", t2_inst: "Hiánypótlás:", t2_h1: "A tanuláshoz kell...", t2_h2: "A példák fontosak.", t2_q: "Mi a legfontosabb a MI számára?", t2_qa: "Adat", t2_qb: "Szín", t2_qc: "Billentyűzet", t2_qd: "Ház",
    t2_sent: "A MI sok ___ segítségével tanul.", t2_qa2: "példa", t2_qb2: "kábel", t2_qc2: "szünet", t2_qd2: "zaj",
    t3_title: "Gépi tanulás", t3_text: "A gépi tanulás során a számítógép maga találja meg a szabályokat az adatokban.", t3_inst: "Válogatás:", t3_h1: "Tanulás vagy parancs?", t3_h2: "Mi a MI?", t3_q: "Hogyan tanul a MI?", t3_qa: "Adatokban lévő minták alapján", t3_qb: "Magolással", t3_qc: "Sehogy", t3_qd: "Könyvolvasással",
    t3_bl1: "MI tanulás", t3_bl2: "Klasszikus", t3_i1: "Minták keresése", t3_i2: "Lépésről lépésre", t3_i3: "Önfejlesztés", t3_i4: "Fix terv",
    t4_title: "Mintafelismerés", t4_text: "A MI kiválóan tud arcokat vagy hangokat keresni hatalmas adathalmazokban.", t4_inst: "Szórend:", t4_h1: "A MI talál...", t4_h2: "Szabályosságok.", t4_q: "Mit keres a MI a képeken?", t4_qa: "Mintákat", t4_qb: "Hibákat", t4_qc: "Port", t4_qd: "Pixeleket",
    t4_w1: "A MI", t4_w2: "fontos", t4_w3: "mintákat", t4_w4: "ismer", t4_w5: "fel", t4_w6: "a képeken.", t4_w7: "",
    t5_title: "Neurális hálók", t5_text: "Ezek olyan számítógépes struktúrák, amik kicsit úgy működnek, mint az agyunk.", t5_inst: "Szó megjelölése:", t5_h1: "Mint a fejedben.", t5_h2: "Hálózat.", t5_q: "Mi az a neurális háló?", t5_qa: "Az agy modellje", t5_qb: "Halászháló", t5_qc: "Tápkábel", t5_qd: "Internet router",
    t5_tk1: "A neurális", t5_tk2: "hálók", t5_tk3: "sok", t5_tk4: "rétegből", t5_tk5: "épülnek", t5_tk6: "fel.",
    t6_title: "Számítógépes látás", t6_text: "A MI képes 'látni' a képeket és megérteni, mi van rajtuk.", t6_inst: "Párosítás:", t6_h1: "Tanulj meg látni.", t6_h2: "Mit ismer fel a MI?", t6_q: "Hogy hívják a gépi látást?", t6_qa: "Computer Vision", t6_qb: "Szuper-szem", t6_qc: "Videólejátszó", t6_qd: "Monitor nézés",
    t6_l1: "Kutya", t6_r1: "Állat felismerve", t6_l2: "Stopp tábla", t6_r2: "Közlekedés", t6_l3: "Arc", t6_r3: "Személy",
    t7_title: "Beszédfelismerés", t7_text: "A MI a beszélt nyelvet szöveggé alakítja, amit fel tud dolgozni.", t7_inst: "Hiánypótlás:", t7_h1: "Hallgatás.", t7_h2: "Mikrofon be.", t7_q: "Hol használunk beszédfelismerést?", t7_qa: "Diktáló appok", t7_qb: "Nyomtató", t7_qc: "Egérkattintás", t7_qd: "Monitor",
    t7_sent: "A MI a ___ szöveggé alakítja.", t7_qa2: "hangot", t7_qb2: "képet", t7_qc2: "vizet", t7_qd2: "papírt",
    t8_title: "NLP (Nyelv)", t8_text: "A természetes nyelvfeldolgozás segít a MI-nek megérteni az emberi beszédet.", t8_inst: "Válogatás:", t8_h1: "Nyelv vs kód.", t8_h2: "Mi az az NLP?", t8_q: "Mit jelent az NLP?", t8_qa: "Nyelvfeldolgozás", t8_qb: "Új Tanulási Platform", t8_qc: "Hálózati Terv", t8_qd: "Csak Vicces Programok",
    t8_bl1: "NLP feladat", t8_bl2: "Egyéb", t8_i1: "Fordítás", t8_i2: "Számolás", t8_i3: "Összegzés", t8_i4: "Festés",
    t9_title: "Chatbotok", t9_text: "A chatbotok olyan programok, amikkel úgy írhatunk, mintha emberek lennének.", t9_inst: "Szórend:", t9_h1: "Beszélgetés a MI-vel.", t9_h2: "Szöveges csevegés.", t9_q: "Mi az a chatbot?", t9_qa: "Párbeszéd-program", t9_qb: "Egy kis robot", t9_qc: "Vírus", t9_qd: "Billentyűzet",
    t9_w1: "A chatbotok", t9_w2: "válaszolni", t9_w3: "tudnak", t9_w4: "a felhasználók", t9_w5: "kérdéseire.", t9_w6: "", t9_w7: "",
    t10_title: "Robot vs MI", t10_text: "A MI az agy (szoftver), a robot a test (hardver).", t10_inst: "Szó megjelölése:", t10_h1: "Test vs Szellem.", t10_h2: "Hardver vs Szoftver.", t10_q: "Mi a különbség?", t10_qa: "A MI szoftver", t10_qb: "A MI mindig fém", t10_qc: "Nincs különbség", t10_qd: "A robotnak nincs kábele",
    t10_tk1: "A MI", t10_tk2: "mint", t10_tk3: "szoftver", t10_tk4: "irányítja", t10_tk5: "a robot", t10_tk6: "testét.",
    t11_title: "MI a mindennapokban", t11_text: "A MI ma már mindenhol ott van: a mobilban, az autóban és a neten.", t11_inst: "Párosítás:", t11_h1: "Hol van MI?", t11_h2: "Mindig velünk.", t11_q: "Hol találsz MI-t a mobilodban?", t11_qa: "Arcalapú feloldás", t11_qb: "Akku", t11_qc: "Üveg kijelző", t11_qd: "SIM kártya",
    t11_l1: "Autó", t11_r1: "Navigáció", t11_l2: "Mobil", t11_r2: "Okos segéd", t11_l3: "Vásárlás", t11_r3: "Ajánlatok",
    t12_title: "Ajánlórendszerek", t12_text: "A streaming szolgáltatók MI-t használnak, hogy neked tetsző filmeket ajánljanak.", t12_inst: "Hiánypótlás:", t12_h1: "Mit nézel?", t12_h2: "Érdeklődés keresése.", t12_q: "Miért ajánl filmeket a Netflix?", t12_qa: "A kedvenceid alapján", t12_qb: "Véletlen", t12_qc: "Mert újak", t12_qd: "Mert drágák",
    t12_sent: "A MI elemzi az ___.", t12_qa2: "ízlésedet", t12_qb2: "monitorodat", t12_qc2: "asztalodat", t12_qd2: "éhségedet",
    t13_title: "MI a játékokban", t13_text: "A MI okosabbá és kiszámíthatatlanabbá teszi az ellenfeleket a játékokban.", t13_inst: "Válogatás:", t13_h1: "Valóság vs Játék.", t13_h2: "Ellenfél MI.", t13_q: "Mit csinál a játék-MI?", t13_qa: "Irányítja az ellenfeleket", t13_qb: "Készíti a grafikát", t13_qc: "Tisztítja a lemezt", t13_qd: "Hűti a konzolt",
    t13_bl1: "MI viselkedés", t13_bl2: "Grafika", t13_i1: "Útvonalkeresés", t13_i2: "Fényhatások", t13_i3: "Taktika váltás", t13_i4: "3D modell",
    t14_title: "MI & Kreativitás", t14_text: "A MI ma már tud képeket festeni, zenét írni vagy verseket költeni.", t14_inst: "Szórend:", t14_h1: "MI mint művész.", t14_h2: "Képek alkotása.", t14_q: "Tud a MI művészetet alkotni?", t14_qa: "Igen, utasításra", t14_qb: "Csak ecsettel", t14_qc: "Nem, soha", t14_qd: "Csak fekete-fehérben",
    t14_w1: "A MI", t14_w2: "szövegből", t14_w3: "képes", t14_w4: "új", t14_w5: "képeket", t14_w6: "alkotni.", t14_w7: "",
    t15_title: "Etika & Tisztesség", t15_text: "A MI megtanulhat előítéleteket, ha az adatok nem korrektek. Figyelnünk kell!", t15_inst: "Szó megjelölése:", t15_h1: "Igazságosság.", t15_h2: "Vigyázat!", t15_q: "Mi lehet a MI egyik hibája?", t15_qa: "Előítéletesség", t15_qb: "Túl nehéz lesz", t15_qc: "Túl sok helyet foglal", t15_qd: "Túl hangos",
    t15_tk1: "Az", t15_tk2: "embereknek", t15_tk3: "ellenőrizniük", t15_tk4: "kell", t15_tk5: "a MI", t15_tk6: "tisztességét."
  },
  ro: {
    explorer_title: "Insula IA 1: Bazele",
    t1_title: "Ce este IA?", t1_text: "Inteligența Artificială (IA) permite computerelor să rezolve sarcini care în mod normal necesită inteligență umană.", t1_inst: "Potrivește perechile:", t1_h1: "Om vs mașină.", t1_h2: "Cine ce face?", t1_q: "Ce face o IA?", t1_qa: "Învață din date", t1_qb: "Doarme noaptea", t1_qc: "Mănâncă curent", t1_qd: "Obosește",
    t1_l1: "Om", t1_r1: "Gândește singur", t1_l2: "IA", t1_r2: "Folosește algoritmi", t1_l3: "Calculator", t1_r3: "Urmează comenzi",
    t2_title: "Datele: Combustibilul", t2_text: "IA are nevoie de multe exemple (date) pentru a învăța. Fără date, nu știe nimic.", t2_inst: "Completează spațiul:", t2_h1: "Învățarea are nevoie de...", t2_h2: "Exemplele sunt importante.", t2_q: "Ce este cel mai important pentru IA?", t2_qa: "Datele", t2_qb: "Culoarea", t2_qc: "Tastatura", t2_qd: "Carcasa",
    t2_sent: "O IA învață prin multe ___.", t2_qa2: "exemple", t2_qb2: "cabluri", t2_qc2: "vacanțe", t2_qd2: "zgomote",
    t3_title: "Învățare Automată", t3_text: "În învățarea automată, computerul găsește singur reguli în date.", t3_inst: "Sortează:", t3_h1: "Învățare sau comandă?", t3_h2: "Ce este IA?", t3_q: "Cum învață o IA?", t3_qa: "Prin tipare în date", t3_qb: "Prin memorare", t3_qc: "Deloc", t3_qd: "Citind cărți",
    t3_bl1: "Învățare IA", t3_bl2: "Clasic", t3_i1: "Găsire tipare", t3_i2: "Pas cu pas", t3_i3: "Auto-îmbunătățire", t3_i4: "Plan fix",
    t4_title: "Recunoașterea Tiparelor", t4_text: "IA este excelentă la găsirea fețelor sau vocilor în cantități mari de date.", t4_inst: "Ordonează cuvintele:", t4_h1: "IA găsește...", t4_h2: "Regularități.", t4_q: "Ce caută IA în imagini?", t4_qa: "Tipare", t4_qb: "Erori", t4_qc: "Praf", t4_qd: "Număr pixeli",
    t4_w1: "IA", t4_w2: "recunoaște", t4_w3: "tipare", t4_w4: "importante", t4_w5: "în", t4_w6: "imagini.", t4_w7: "",
    t5_title: "Rețele Neuronale", t5_text: "Acestea sunt structuri de computer care funcționează puțin ca creierul nostru.", t5_inst: "Evidențiază cuvântul:", t5_h1: "Ca în capul tău.", t5_h2: "Rețea.", t5_q: "Ce este o rețea neuronală?", t5_qa: "Un model al creierului", t5_qb: "O plasă de pescuit", t5_qc: "Un cablu de curent", t5_qd: "Un router internet",
    t5_tk1: "Rețelele", t5_tk2: "neuronale", t5_tk3: "sunt", t5_tk4: "formate", t5_tk5: "din", t5_tk6: "multe", t5_tk7: "straturi.",
    t6_title: "Computer Vision", t6_text: "IA poate 'vedea' imagini și înțelege ce este reprezentat în ele.", t6_inst: "Potrivește perechile:", t6_h1: "Învață să vezi.", t6_h2: "Ce recunoaște IA?", t6_q: "Cum se numește 'vederea' computerelor?", t6_qa: "Computer Vision", t6_qb: "Super-Ochi", t6_qc: "Video Player", t6_qd: "Privire monitor",
    t6_l1: "Câine", t6_r1: "Animal detectat", t6_l2: "Stop", t6_r2: "Trafic", t6_l3: "Față", t6_r3: "Persoană",
    t7_title: "Recunoaștere Vocală", t7_text: "IA transformă limbajul vorbit în text pe care îl poate procesa.", t7_inst: "Completează spațiul:", t7_h1: "Ascultare.", t7_h2: "Microfon pornit.", t7_q: "Unde se folosește recunoașterea vocală?", t7_qa: "Aplicații dictare", t7_qb: "Imprimantă", t7_qc: "Clic mouse", t7_qd: "Monitor",
    t7_sent: "IA transformă ___ în text.", t7_qa2: "vocea", t7_qb2: "imaginile", t7_qc2: "apa", t7_qd2: "hârtia",
    t8_title: "NLP (Limbaj)", t8_text: "Procesarea Limbajului Natural ajută IA să înțeleagă vorbirea umană.", t8_inst: "Sortează:", t8_h1: "Limbaj vs Cod.", t8_h2: "Ce este NLP?", t8_q: "Ce înseamnă NLP?", t8_qa: "Procesare limbaj", t8_qb: "Nouă Platformă Învățare", t8_qc: "Plan Încărcare Rețea", t8_qd: "Doar Programe Amuzante",
    t8_bl1: "Sarcini NLP", t8_bl2: "Altele", t8_i1: "Traducere", t8_i2: "Calcul", t8_i3: "Rezumat", t8_i4: "Pictură",
    t9_title: "Chatboți", t9_text: "Chatboții sunt programe cu care poți scrie ca și cum ar fi oameni.", t9_inst: "Ordonează cuvintele:", t9_h1: "Vorbind cu IA.", t9_h2: "Conversație text.", t9_q: "Ce este un chatbot?", t9_qa: "Program de dialog", t9_qb: "Un mic robot", t9_qc: "Un virus", t9_qd: "O tastatură",
    t9_w1: "Chatboții", t9_w2: "pot", t9_w3: "răspunde", t9_w4: "la", t9_w5: "întrebările", t9_w6: "utilizatorilor.", t9_w7: "",
    t10_title: "Robot vs IA", t10_text: "IA este creierul (software), robotul este corpul (hardware).", t10_inst: "Evidențiază cuvântul:", t10_h1: "Corp vs Spirit.", t10_h2: "Hardware vs Software.", t10_q: "Care este diferența?", t10_qa: "IA este software", t10_qb: "IA este mereu metal", t10_qc: "Nu există", t10_qd: "Roboții nu au cabluri",
    t10_tk1: "IA", t10_tk2: "controlează", t10_tk3: "robotul", t10_tk4: "din", t10_tk5: "poziția", t10_tk6: "de", t10_tk7: "software.",
    t11_title: "IA în viața de zi cu zi", t11_text: "IA este peste tot azi: în telefon, în mașină și pe internet.", t11_inst: "Potrivește perechile:", t11_h1: "Unde e IA?", t11_h2: "Mereu prezentă.", t11_q: "Unde găsești IA în telefon?", t11_qa: "Deblocare facială", t11_qb: "Baterie", t11_qc: "Ecran sticlă", t11_qd: "Cartelă SIM",
    t11_l1: "Mașină", t11_r1: "Navigație", t11_l2: "Telefon", t11_r2: "Asistent smart", t11_l3: "Shopping", t11_r3: "Sugestii",
    t12_title: "Sisteme de Sugestii", t12_text: "Serviciile de streaming folosesc IA pentru a-ți sugera filme care ți-ar plăcea.", t12_inst: "Completează spațiul:", t12_h1: "Ce vizionezi?", t12_h2: "Găsirea intereselor.", t12_q: "De ce sugerează Netflix filme?", t12_qa: "Datorită preferințelor", t12_qb: "La întâmplare", t12_qc: "Fiindcă sunt noi", t12_qd: "Fiindcă sunt scumpe",
    t12_sent: "IA analizează ___ tău.", t12_qa2: "gustul", t12_qb2: "monitorul", t12_qc2: "masa", t12_qd2: "foamea",
    t13_title: "IA în jocuri", t13_text: "IA face adversarii din jocurile video mai deștepți și imprevizibili.", t13_inst: "Sortează:", t13_h1: "Realitate vs Joc.", t13_h2: "Adversar IA.", t13_q: "Ce face IA în jocuri?", t13_qa: "Control adversari", t13_qb: "Face grafica", t13_qc: "Curăță CD-ul", t13_qd: "Răcește consola",
    t13_bl1: "Comportament IA", t13_bl2: "Grafică", t13_i1: "Găsire drum", t13_i2: "Efecte lumină", t13_i3: "Adaptare tactică", t13_i4: "Model 3D",
    t14_title: "IA & Creativitate", t14_text: "IA-urile pot picta azi tablouri, scrie muzică sau compune poezii.", t14_inst: "Ordonează cuvintele:", t14_h1: "IA ca artist.", t14_h2: "Crearea imaginilor.", t14_q: "Poate IA să facă artă?", t14_qa: "Da, cu instrucțiuni", t14_qb: "Doar cu pensula", t14_qc: "Nu, niciodată", t14_qd: "Doar alb-negru",
    t14_w1: "IA", t14_w2: "creează", t14_w3: "imagini", t14_w4: "noi", t14_w5: "din", t14_w6: "text.", t14_w7: "",
    t15_title: "Etică & Echitate", t15_text: "IA poate învăța prejudecăți dacă datele nu sunt corecte. Trebuie să fim atenți!", t15_inst: "Evidențiază cuvântul:", t15_h1: "Dreptate.", t15_h2: "Atenție!", t15_q: "Care este o problemă a IA?", t15_qa: "Prejudecățile", t15_qb: "Devine prea grea", t15_qc: "Ocupă prea mult loc", t15_qd: "Vorbește prea tare",
    t15_tk1: "Oamenii", t15_tk2: "trebuie", t15_tk3: "să", t15_tk4: "verifice", t15_tk5: "echitatea", t15_tk6: "IA."
  }
};

export const INFO_K6_I1_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "simple-icon", icon: "🧠", color: "#9C27B0" },
    interactive: { type: "match-pairs", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", pairs: [{left:"t1_l1",right:"t1_r1"},{left:"t1_l2",right:"t1_r2"},{left:"t1_l3",right:"t1_r3"}] },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" }
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "💾", color: "#2196F3" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" }
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "icon-grid", items: [{emoji:"🤖",label:"MI"},{emoji:"📜",label:"Fix"}] },
    interactive: { type: "drag-to-bucket", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", buckets: [{id:"b1",label:"t3_bl1"},{id:"b2",label:"t3_bl2"}], items: [{text:"t3_i1",bucketId:"b1"},{text:"t3_i2",bucketId:"b2"},{text:"t3_i3",bucketId:"b1"},{text:"t3_i4",bucketId:"b2"}] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "🔍", color: "#FF9800" },
    interactive: { type: "word-order", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", words: ["t4_w1", "t4_w2", "t4_w3", "t4_w4", "t4_w5", "t4_w6", "t4_w7"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6].slice(0, 6) },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "🕸️", color: "#607D8B" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6","t5_tk7"].filter(x=>x!==undefined), correctIndices: [0,1] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" }
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "simple-icon", icon: "👁️", color: "#4CAF50" },
    interactive: { type: "match-pairs", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", pairs: [{left:"t6_l1",right:"t6_r1"},{left:"t6_l2",right:"t6_r2"},{left:"t6_l3",right:"t6_r3"}] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" }
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "🎙️", color: "#E91E63" },
    interactive: { type: "gap-fill", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", sentence: "t7_sent", choices: ["t7_qa2", "t7_qb2", "t7_qc2", "t7_qd2"], correctIndex: 0 },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" }
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "icon-grid", items: [{emoji:"🗣️",label:"NLP"},{emoji:"🧮",label:"Math"}] },
    interactive: { type: "drag-to-bucket", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", buckets: [{id:"b1",label:"t8_bl1"},{id:"b2",label:"t8_bl2"}], items: [{text:"t8_i1",bucketId:"b1"},{text:"t8_i2",bucketId:"b2"},{text:"t8_i3",bucketId:"b1"},{text:"t8_i4",bucketId:"b2"}] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" }
  },
  {
    infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "simple-icon", icon: "💬", color: "#00BCD4" },
    interactive: { type: "word-order", instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2", words: ["t9_w1", "t9_w2", "t9_w3", "t9_w4", "t9_w5", "t9_w6", "t9_w7"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6].slice(0, 6) },
    quiz: { question: "t9_q", choices: ["t9_qa", "t9_qb", "t9_qc", "t9_qd"], answer: "t9_qa" }
  },
  {
    infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "icon-grid", items: [{emoji:"🤖",label:"Body"},{emoji:"🧠",label:"Brain"}] },
    interactive: { type: "highlight-text", instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2", tokens: ["t10_tk1","t10_tk2","t10_tk3","t10_tk4","t10_tk5","t10_tk6","t10_tk7"].filter(x=>x!==undefined), correctIndices: [1,4] },
    quiz: { question: "t10_q", choices: ["t10_qa", "t10_qb", "t10_qc", "t10_qd"], answer: "t10_qa" }
  },
  {
    infoTitle: "t11_title", infoText: "t11_text",
    svg: { type: "simple-icon", icon: "📱", color: "#3F51B5" },
    interactive: { type: "match-pairs", instruction: "t11_inst", hint1: "t11_h1", hint2: "t11_h2", pairs: [{left:"t11_l1",right:"t11_r1"},{left:"t11_l2",right:"t11_r2"},{left:"t11_l3",right:"t11_r3"}] },
    quiz: { question: "t11_q", choices: ["t11_qa", "t11_qb", "t11_qc", "t11_qd"], answer: "t11_qa" }
  },
  {
    infoTitle: "t12_title", infoText: "t12_text",
    svg: { type: "simple-icon", icon: "🎬", color: "#F44336" },
    interactive: { type: "gap-fill", instruction: "t12_inst", hint1: "t12_h1", hint2: "t12_h2", sentence: "t12_sent", choices: ["t12_qa2", "t12_qb2", "t12_qc2", "t12_qd2"], correctIndex: 0 },
    quiz: { question: "t12_q", choices: ["t12_qa", "t12_qb", "t12_qc", "t12_qd"], answer: "t12_qa" }
  },
  {
    infoTitle: "t13_title", infoText: "t13_text",
    svg: { type: "icon-grid", items: [{emoji:"🎮",label:"Game"},{emoji:"🖼️",label:"Graphics"}] },
    interactive: { type: "drag-to-bucket", instruction: "t13_inst", hint1: "t13_h1", hint2: "t13_h2", buckets: [{id:"b1",label:"t13_bl1"},{id:"b2",label:"t13_bl2"}], items: [{text:"t13_i1",bucketId:"b1"},{text:"t13_i2",bucketId:"b2"},{text:"t13_i3",bucketId:"b1"},{text:"t13_i4",bucketId:"b2"}] },
    quiz: { question: "t13_q", choices: ["t13_qa", "t13_qb", "t13_qc", "t13_qd"], answer: "t13_qa" }
  },
  {
    infoTitle: "t14_title", infoText: "t14_text",
    svg: { type: "simple-icon", icon: "🎨", color: "#FFEB3B" },
    interactive: { type: "word-order", instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2", words: ["t14_w1", "t14_w2", "t14_w3", "t14_w4", "t14_w5", "t14_w6", "t14_w7"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6].slice(0, 6) },
    quiz: { question: "t14_q", choices: ["t14_qa", "t14_qb", "t14_qc", "t14_qd"], answer: "t14_qa" }
  },
  {
    infoTitle: "t15_title", infoText: "t15_text",
    svg: { type: "simple-icon", icon: "⚖️", color: "#CDDC39" },
    interactive: { type: "highlight-text", instruction: "t15_inst", hint1: "t15_h1", hint2: "t15_h2", tokens: ["t15_tk1","t15_tk2","t15_tk3","t15_tk4","t15_tk5","t15_tk6","t15_tk7"].filter(x=>x!==undefined), correctIndices: [4] },
    quiz: { question: "t15_q", choices: ["t15_qa", "t15_qb", "t15_qc", "t15_qd"], answer: "t15_qa" }
  }
];

