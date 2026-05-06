// @ts-nocheck
import type { PoolTopicDef } from "./types";

export const INFO_K7_I7_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "KI Insel 7: Grundlagen & Geschichte",
    t1_title: "Alan Turing", t1_text: "Alan Turing gilt als Vater der Informatik. Er erfand die theoretische Maschine, die heute als Computer bekannt ist.", t1_inst: "Ordne die Begriffe zu:", t1_h1: "Wer war er?", t1_h2: "Was hat er erfunden?", t1_q: "Wie heißt der Test zur Prüfung von Maschinenintelligenz?", t1_qa: "Turing-Test", t1_qb: "IQ-Test", t1_qc: "Rechen-Test", t1_qd: "Web-Test",
    t1_l1: "Alan Turing", t1_r1: "Vater der KI", t1_l2: "Enigma", t1_r2: "Code-Knacker", t1_l3: "Computer", t1_r3: "Turing-Maschine",
    t2_title: "Neuronale Netze", t2_text: "Künstliche neuronale Netze sind vom menschlichen Gehirn inspiriert.", t2_inst: "Fülle die Lücke aus:", t2_h1: "Denk an das Gehirn.", t2_h2: "Biologische Vorbilder.", t2_q: "Was ist das Vorbild für neuronale Netze?", t2_qa: "Das Gehirn", t2_qb: "Ein Motor", t2_qc: "Das Internet", t2_qd: "Ein Buch",
    t2_sent: "Neuronale Netze bestehen aus künstlichen ___.", t2_qa2: "Neuronen", t2_qb2: "Kabeln", t2_qc2: "Batterien", t2_qd2: "Schaltern",
    t3_title: "Deep Learning", t3_text: "Deep Learning nutzt viele Schichten von Neuronen, um komplexe Muster zu erkennen.", t3_inst: "Sortiere die Begriffe:", t3_h1: "Schichten lernen.", t3_h2: "Tiefes Lernen.", t3_q: "Was bedeutet 'Deep' in Deep Learning?", t3_qa: "Viele Schichten", t3_qb: "Große Festplatte", t3_qc: "Schnelles Internet", t3_qd: "Dunkle Farbe",
    t3_bl1: "Lernprozess", t3_bl2: "Architektur", t3_i1: "Training", t3_i2: "Eingabeschicht", t3_i3: "Optimierung", t3_i4: "Ausgabeschicht",
    t4_title: "Trainingsdaten", t4_text: "KI braucht riesige Mengen an Daten, um zu lernen.", t4_inst: "Bringe die Wörter in Ordnung:", t4_h1: "Daten sind Nahrung.", t4_h2: "Lernen durch Beispiele.", t4_q: "Warum sind gute Daten wichtig?", t4_qa: "Für bessere Vorhersagen", t4_qb: "Damit der PC glänzt", t4_qc: "Für mehr Speicherplatz", t4_qd: "Keine Bedeutung",
    t4_w1: "KI", t4_w2: "lernt", t4_w3: "aus", t4_w4: "vielen", t4_w5: "Beispielen", t4_w6: "und", t4_w7: "Daten.",
    t5_title: "Überwachtes Lernen", t5_text: "Beim überwachten Lernen bekommt die KI Daten mit den richtigen Antworten (Labels).", t5_inst: "Markiere das richtige Wort:", t5_h1: "Mit Lehrer.", t5_h2: "Markierte Daten.", t5_q: "Was braucht überwachtes Lernen?", t5_qa: "Labels", t5_qb: "Zufall", t5_qc: "Keine Daten", t5_qd: "Einen Stift",
    t5_tk1: "Überwachtes", t5_tk2: "Lernen", t5_tk3: "nutzt", t5_tk4: "gelabelte", t5_tk5: "Datensätze", t5_tk6: "zum", t5_tk7: "Training.",
    t6_title: "Unüberwachtes Lernen", t6_text: "Die KI sucht selbstständig nach Mustern in Daten ohne vorgegebene Antworten.", t6_inst: "Zähle die Cluster (Gruppen):", t6_h1: "Muster finden.", t6_h2: "Gruppierung.", t6_q: "Was erkennt unüberwachtes Lernen?", t6_qa: "Muster", t6_qb: "Befehle", t6_qc: "Namen", t6_qd: "Preise",
    t6_c1: "Gruppe", t6_n1: "3",
    t7_title: "Bestärkendes Lernen", t7_text: "Die KI lernt durch Belohnung und Bestrafung (Trial and Error).", t7_inst: "Verbinde die Begriffe:", t7_h1: "Lernen wie ein Hund.", t7_h2: "Feedback-Schleife.", t7_q: "Was bekommt die KI bei Erfolg?", t7_qa: "Belohnung", t7_qb: "Strom", t7_qc: "Urlaub", t7_qd: "Neue Hardware",
    t7_l1: "Aktion", t7_r1: "Ausführung", t7_l2: "Feedback", t7_r2: "Belohnung", t7_l3: "Ziel", t7_r3: "Maximierung",
    t8_title: "NLP (Sprachverarbeitung)", t8_text: "NLP hilft Computern, menschliche Sprache zu verstehen und zu erzeugen.", t8_inst: "Fülle die Lücke aus:", t8_h1: "Reden mit dem PC.", t8_h2: "Text verstehen.", t8_q: "Was bedeutet NLP?", t8_qa: "Natural Language Processing", t8_qb: "Network Link Power", t8_qc: "New Logic Program", t8_qd: "Next Level Play",
    t8_sent: "Chatbots nutzen ___, um mit uns zu sprechen.", t8_qa2: "NLP", t8_qb2: "GPS", t8_qc2: "USB", t8_qd2: "RAM",
    t9_title: "Computer Vision", t9_text: "Computer Vision erlaubt es KIs, Bilder und Videos zu 'sehen' und zu verstehen.", t9_inst: "Sortiere die Begriffe:", t9_h1: "Augen der KI.", t9_h2: "Bilder erkennen.", t9_q: "Was erkennt Computer Vision in einem Foto?", t9_qa: "Objekte", t9_qb: "Gerüche", t9_qc: "Gefühle", t9_qd: "Gewicht",
    t9_bl1: "Bildinhalt", t9_bl2: "Technik", t9_i1: "Katze", t9_i2: "Pixel", t9_i3: "Gesicht", t9_i4: "Kamera",
    t10_title: "Generative KI", t10_text: "Generative KI kann neue Inhalte wie Texte, Bilder oder Musik erstellen.", t10_inst: "Bringe die Wörter in Ordnung:", t10_h1: "Etwas Neues erschaffen.", t10_h2: "KI als Künstler.", t10_q: "Was macht generative KI?", t10_qa: "Erstellt neue Daten", t10_qb: "Löscht Dateien", t10_qc: "Repariert Hardware", t10_qd: "Sperrt das Internet",
    t10_w1: "Generative", t10_w2: "KI", t10_w3: "erzeugt", t10_w4: "völlig", t10_w5: "neue", t10_w6: "Inhalte.", t10_w7: "",
    t11_title: "LLMs (Sprachmodelle)", t11_text: "Large Language Models sind riesige KI-Modelle für Textaufgaben.", t11_inst: "Markiere das richtige Wort:", t11_h1: "Große Modelle.", t11_h2: "Riesige Textmengen.", t11_q: "Was ist ein Beispiel für ein LLM?", t11_qa: "GPT-4", t11_qb: "Windows 11", t11_qc: "Photoshop", t11_qd: "Excel",
    t11_tk1: "LLMs", t11_tk2: "werden", t11_tk3: "mit", t11_tk4: "Milliarden", t11_tk5: "von", t11_tk6: "Wörtern", t11_tk7: "trainiert.",
    t12_title: "Transformer Architektur", t12_text: "Transformer sind die Basis für moderne KI-Sprachmodelle.", t12_inst: "Ordne die Begriffe zu:", t12_h1: "Aufmerksamkeit!", t12_h2: "Wichtige Struktur.", t12_q: "Was ist ein Kernkonzept von Transformern?", t12_qa: "Self-Attention", t12_qb: "Turbo-Boost", t12_qc: "Data-Save", t12_qd: "Auto-Off",
    t12_l1: "Input", t12_r1: "Eingabe", t12_l2: "Attention", t12_r2: "Aufmerksamkeit", t12_l3: "Output", t12_r3: "Ausgabe",
    t13_title: "Turing-Test", t13_text: "Ein Test, um festzustellen, ob eine Maschine intelligentes Verhalten zeigt.", t13_inst: "Fülle die Lücke aus:", t13_h1: "Mensch oder Maschine?", t13_h2: "Unterscheidung.", t13_q: "Wer hat den Turing-Test vorgeschlagen?", t13_qa: "Alan Turing", t13_qb: "Bill Gates", t13_qc: "Steve Jobs", t13_qd: "Elon Musk",
    t13_sent: "Beim Turing-Test führt ein Mensch ein ___.", t13_qa2: "Gespräch", t13_qb2: "Auto", t13_qc2: "Experiment", t13_qd2: "Telefonat",
    t14_title: "Algorithmen", t14_text: "Ein Algorithmus ist eine präzise Anleitung zur Lösung eines Problems.", t14_inst: "Bringe die Wörter in Ordnung:", t14_h1: "Wie ein Kochrezept.", t14_h2: "Schritt für Schritt.", t14_q: "Was ist ein Algorithmus?", t14_qa: "Eine Handlungsanweisung", t14_qb: "Ein Computerbauteil", t14_qc: "Ein Bildschirm", t14_qd: "Ein Kabel",
    t14_w1: "Algorithmen", t14_w2: "steuern", t14_w3: "das", t14_w4: "Verhalten", t14_w5: "einer", t14_w6: "KI.", t14_w7: "",
    t15_title: "Expertensysteme", t15_text: "Frühe KI-Formen, die das Wissen von Experten in Regeln speichern.", t15_inst: "Sortiere die Begriffe:", t15_h1: "Regelbasiert.", t15_h2: "Wenn-Dann Logik.", t15_q: "Was nutzen Expertensysteme?", t15_qa: "Wenn-Dann-Regeln", t15_qb: "Zufallszahlen", t15_qc: "Bilder", t15_qd: "Sensoren",
    t15_bl1: "Bestandteile", t15_bl2: "Beispiele", t15_i1: "Wissensbasis", t15_i2: "Diagnose", t15_i3: "Logik", t15_i4: "Beratung"
  },
  en: {
    explorer_title: "AI Island 7: Basics & History",
    t1_title: "Alan Turing", t1_text: "Alan Turing is considered the father of computer science. He invented the theoretical machine now known as the computer.", t1_inst: "Match the terms:", t1_h1: "Who was he?", t1_h2: "What did he invent?", t1_q: "What is the test for checking machine intelligence called?", t1_qa: "Turing Test", t1_qb: "IQ Test", t1_qc: "Math Test", t1_qd: "Web Test",
    t1_l1: "Alan Turing", t1_r1: "Father of AI", t1_l2: "Enigma", t1_r2: "Code breaker", t1_l3: "Computer", t1_r3: "Turing Machine",
    t2_title: "Neural Networks", t2_text: "Artificial neural networks are inspired by the human brain.", t2_inst: "Fill in the blank:", t2_h1: "Think of the brain.", t2_h2: "Biological models.", t2_q: "What is the model for neural networks?", t2_qa: "The brain", t2_qb: "An engine", t2_qc: "The internet", t2_qd: "A book",
    t2_sent: "Neural networks consist of artificial ___.", t2_qa2: "neurons", t2_qb2: "cables", t2_qc2: "batteries", t2_qd2: "switches",
    t3_title: "Deep Learning", t3_text: "Deep Learning uses many layers of neurons to recognize complex patterns.", t3_inst: "Sort the terms:", t3_h1: "Layers are learning.", t3_h2: "Deep architecture.", t3_q: "What does 'Deep' mean in Deep Learning?", t3_qa: "Many layers", t3_qb: "Big hard drive", t3_qc: "Fast internet", t3_qd: "Dark color",
    t3_bl1: "Learning process", t3_bl2: "Architecture", t3_i1: "Training", t3_i2: "Input layer", t3_i3: "Optimization", t3_i4: "Output layer",
    t4_title: "Training Data", t4_text: "AI needs huge amounts of data to learn.", t4_inst: "Put the words in order:", t4_h1: "Data is food.", t4_h2: "Learning by examples.", t4_q: "Why is good data important?", t4_qa: "For better predictions", t4_qb: "To make PC shine", t4_qc: "For more storage", t4_qd: "No meaning",
    t4_w1: "AI", t4_w2: "learns", t4_w3: "from", t4_w4: "many", t4_w5: "examples", t4_w6: "and", t4_w7: "data.",
    t5_title: "Supervised Learning", t5_text: "In supervised learning, the AI receives data with the correct answers (labels).", t5_inst: "Highlight the correct word:", t5_h1: "With a teacher.", t5_h2: "Tagged data.", t5_q: "What does supervised learning need?", t5_qa: "Labels", t5_qb: "Randomness", t5_qc: "No data", t5_qd: "A pen",
    t5_tk1: "Supervised", t5_tk2: "learning", t5_tk3: "uses", t5_tk4: "labeled", t5_tk5: "datasets", t5_tk6: "for", t5_tk7: "training.",
    t6_title: "Unsupervised Learning", t6_text: "The AI independently searches for patterns in data without given answers.", t6_inst: "Count the clusters (groups):", t6_h1: "Finding patterns.", t6_h2: "Grouping.", t6_q: "What does unsupervised learning detect?", t6_qa: "Patterns", t6_qb: "Commands", t6_qc: "Names", t6_qd: "Prices",
    t6_c1: "Group", t6_n1: "3",
    t7_title: "Reinforcement Learning", t7_text: "The AI learns through reward and punishment (trial and error).", t7_inst: "Connect the terms:", t7_h1: "Learning like a dog.", t7_h2: "Feedback loop.", t7_q: "What does the AI get for success?", t7_qa: "Reward", t7_qb: "Electricity", t7_qc: "Vacation", t7_qd: "New hardware",
    t7_l1: "Action", t7_r1: "Execution", t7_l2: "Feedback", t7_r2: "Reward", t7_l3: "Goal", t7_r3: "Maximization",
    t8_title: "NLP (Language Processing)", t8_text: "NLP helps computers understand and generate human language.", t8_inst: "Fill in the blank:", t8_h1: "Talking to the PC.", t8_h2: "Understanding text.", t8_q: "What does NLP stand for?", t8_qa: "Natural Language Processing", t8_qb: "Network Link Power", t8_qc: "New Logic Program", t8_qd: "Next Level Play",
    t8_sent: "Chatbots use ___ to talk to us.", t8_qa2: "NLP", t8_qb2: "GPS", t8_qc2: "USB", t8_qd2: "RAM",
    t9_title: "Computer Vision", t9_text: "Computer Vision allows AIs to 'see' and understand images and videos.", t9_inst: "Sort the terms:", t9_h1: "Eyes of the AI.", t9_h2: "Recognizing images.", t9_q: "What does computer vision recognize in a photo?", t9_qa: "Objects", t9_qb: "Smells", t9_qc: "Feelings", t9_qd: "Weight",
    t9_bl1: "Image content", t9_bl2: "Technique", t9_i1: "Cat", t9_i2: "Pixel", t9_i3: "Face", t9_i4: "Camera",
    t10_title: "Generative AI", t10_text: "Generative AI can create new content like text, images, or music.", t10_inst: "Put the words in order:", t10_h1: "Creating something new.", t10_h2: "AI as an artist.", t10_q: "What does generative AI do?", t10_qa: "Creates new data", t10_qb: "Deletes files", t10_qc: "Repairs hardware", t10_qd: "Blocks internet",
    t10_w1: "Generative", t10_w2: "AI", t10_w3: "creates", t10_w4: "completely", t10_w5: "new", t10_w6: "content.", t10_w7: "",
    t11_title: "LLMs (Language Models)", t11_text: "Large Language Models are huge AI models for text tasks.", t11_inst: "Highlight the correct word:", t11_h1: "Large models.", t11_h2: "Huge amounts of text.", t11_q: "What is an example of an LLM?", t11_qa: "GPT-4", t11_qb: "Windows 11", t11_qc: "Photoshop", t11_qd: "Excel",
    t11_tk1: "LLMs", t11_tk2: "are", t11_tk3: "trained", t11_tk4: "with", t11_tk5: "billions", t11_tk6: "of", t11_tk7: "words.",
    t12_title: "Transformer Architecture", t12_text: "Transformers are the basis for modern AI language models.", t12_inst: "Match the terms:", t12_h1: "Attention!", t12_h2: "Important structure.", t12_q: "What is a core concept of transformers?", t12_qa: "Self-attention", t12_qb: "Turbo boost", t12_qc: "Data save", t12_qd: "Auto off",
    t12_l1: "Input", t12_r1: "Input", t12_l2: "Attention", t12_r2: "Attention", t12_l3: "Output", t12_r3: "Output",
    t13_title: "Turing Test", t13_text: "A test to determine if a machine exhibits intelligent behavior.", t13_inst: "Fill in the blank:", t13_h1: "Human or machine?", t13_h2: "Distinction.", t13_q: "Who proposed the Turing Test?", t13_qa: "Alan Turing", t13_qb: "Bill Gates", t13_qc: "Steve Jobs", t13_qd: "Elon Musk",
    t13_sent: "In the Turing Test, a human conducts a ___.", t13_qa2: "conversation", t13_qb2: "car", t13_qc2: "experiment", t13_qd2: "phone call",
    t14_title: "Algorithms", t14_text: "An algorithm is a precise set of instructions for solving a problem.", t14_inst: "Put the words in order:", t14_h1: "Like a recipe.", t14_h2: "Step by step.", t14_q: "What is an algorithm?", t14_qa: "A set of instructions", t14_qb: "A computer part", t14_qc: "A screen", t14_qd: "A cable",
    t14_w1: "Algorithms", t14_w2: "control", t14_w3: "the", t14_w4: "behavior", t14_w5: "of", t14_w6: "an", t14_w7: "AI.",
    t15_title: "Expert Systems", t15_text: "Early AI forms that store expert knowledge in rules.", t15_inst: "Sort the terms:", t15_h1: "Rule-based.", t15_h2: "If-Then logic.", t15_q: "What do expert systems use?", t15_qa: "If-Then rules", t15_qb: "Random numbers", t15_qc: "Images", t15_qd: "Sensors",
    t15_bl1: "Components", t15_bl2: "Examples", t15_i1: "Knowledge base", t15_i2: "Diagnosis", t15_i3: "Logic", t15_i4: "Advice"
  },
  hu: {
    explorer_title: "MI Sziget 7: Alapok és történelem",
    t1_title: "Alan Turing", t1_text: "Alan Turingot a számítástechnika atyjának tekintik. Ő találta fel az elméleti gépet, amelyet ma számítógépnek hívunk.", t1_inst: "Párosítsd a fogalmakat:", t1_h1: "Ki volt ő?", t1_h2: "Mit talált fel?", t1_q: "Hogy hívják a gépi intelligencia tesztelésére szolgáló tesztet?", t1_qa: "Turing-teszt", t1_qb: "IQ-teszt", t1_qc: "Matek teszt", t1_qd: "Web teszt",
    t1_l1: "Alan Turing", t1_r1: "MI atyja", t1_l2: "Enigma", t1_r2: "Kódfeltörő", t1_l3: "Számítógép", t1_r3: "Turing-gép",
    t2_title: "Neurális hálózatok", t2_text: "A mesterséges neurális hálózatokat az emberi agy ihlette.", t2_inst: "Töltsd ki a hiányt:", t2_h1: "Gondolj az agyra.", t2_h2: "Biológiai minták.", t2_q: "Mi a neurális hálózatok mintája?", t2_qa: "Az agy", t2_qb: "Egy motor", t2_qc: "Az internet", t2_qd: "Egy könyv",
    t2_sent: "A neurális hálózatok mesterséges ___ állnak.", t2_qa2: "neuronokból", t2_qb2: "kábelekből", t2_qc2: "elemekből", t2_qd2: "kapcsolókból",
    t3_title: "Mély tanulás", t3_text: "A Deep Learning (mély tanulás) sok neuronréteget használ az összetett minták felismeréséhez.", t3_inst: "Válogasd szét:", t3_h1: "A rétegek tanulnak.", t3_h2: "Mély architektúra.", t3_q: "Mit jelent a 'Deep' a Deep Learningben?", t3_qa: "Sok réteg", t3_qb: "Nagy merevlemez", t3_qc: "Gyors internet", t3_qd: "Sötét szín",
    t3_bl1: "Tanulási folyamat", t3_bl2: "Architektúra", t3_i1: "Tanítás", t3_i2: "Bemeneti réteg", t3_i3: "Optimalizálás", t3_i4: "Kimeneti réteg",
    t4_title: "Tanítóadatok", t4_text: "A MI-nek hatalmas mennyiségű adatra van szüksége a tanuláshoz.", t4_inst: "Tedd sorrendbe a szavakat:", t4_h1: "Az adat az üzemanyag.", t4_h2: "Példákon keresztüli tanulás.", t4_q: "Miért fontos a jó adat?", t4_qa: "Jobb előrejelzésekért", t4_qb: "Hogy csillogjon a PC", t4_qc: "Több tárhelyért", t4_qd: "Nincs jelentősége",
    t4_w1: "A MI", t4_w2: "sok", t4_w3: "példából", t4_w4: "és", t4_w5: "adatból", t4_w6: "tanul.", t4_w7: "",
    t5_title: "Felügyelt tanulás", t5_text: "A felügyelt tanulás során a MI megkapja az adatokat a helyes válaszokkal (címkékkel) együtt.", t5_inst: "Jelöld meg a helyes szót:", t5_h1: "Tanárral.", t5_h2: "Felcímkézett adatok.", t5_q: "Mire van szüksége a felügyelt tanulásnak?", t5_qa: "Címkékre", t5_qb: "Véletlenre", t5_qc: "Semmilyen adatra", t5_qd: "Egy tollra",
    t5_tk1: "A felügyelt", t5_tk2: "tanulás", t5_tk3: "címkézett", t5_tk4: "adatkészleteket", t5_tk5: "használ", t5_tk6: "a", t5_tk7: "tanításhoz.",
    t6_title: "Nem felügyelt tanulás", t6_text: "A MI önállóan keres mintákat az adatokban, előre megadott válaszok nélkül.", t6_inst: "Számold meg a csoportokat:", t6_h1: "Minták keresése.", t6_h2: "Csoportosítás.", t6_q: "Mit ismer fel a nem felügyelt tanulás?", t6_qa: "Mintákat", t6_qb: "Parancsokat", t6_qc: "Neveket", t6_qd: "Árakat",
    t6_c1: "Csoport", t6_n1: "3",
    t7_title: "Megerősítéses tanulás", t7_text: "A MI jutalmazáson és büntetésen keresztül tanul (próba-szerencse).", t7_inst: "Kapcsold össze:", t7_h1: "Tanulás, mint egy kutya.", t7_h2: "Visszacsatolás.", t7_q: "Mit kap a MI siker esetén?", t7_qa: "Jutalmat", t7_qb: "Áramot", t7_qc: "Szabadságot", t7_qd: "Új hardvert",
    t7_l1: "Akció", t7_r1: "Végrehajtás", t7_l2: "Visszajelzés", t7_r2: "Jutalom", t7_l3: "Cél", t7_r3: "Maximalizálás",
    t8_title: "NLP (Nyelvfeldolgozás)", t8_text: "Az NLP segít a számítógépeknek megérteni és előállítani az emberi nyelvet.", t8_inst: "Töltsd ki a hiányt:", t8_h1: "Beszélgetés a géppel.", t8_h2: "Szövegértés.", t8_q: "Mit jelent az NLP?", t8_qa: "Natural Language Processing", t8_qb: "Network Link Power", t8_qc: "New Logic Program", t8_qd: "Next Level Play",
    t8_sent: "A chatbotok ___ használnak a beszélgetéshez.", t8_qa2: "NLP-t", t8_qb2: "GPS-t", t8_qc2: "USB-t", t8_qd2: "RAM-ot",
    t9_title: "Számítógépes látás", t9_text: "A Computer Vision lehetővé teszi, hogy a MI 'lássa' és értelmezze a képeket.", t9_inst: "Válogasd szét:", t9_h1: "A MI szemei.", t9_h2: "Képfelismerés.", t9_q: "Mit ismer fel a gépi látás egy fotón?", t9_qa: "Objektumokat", t9_qb: "Szagokat", t9_qc: "Érzéseket", t9_qd: "Súlyt",
    t9_bl1: "Képtartalom", t9_bl2: "Technika", t9_i1: "Macska", t9_i2: "Pixel", t9_i3: "Arc", t9_i4: "Kamera",
    t10_title: "Generatív MI", t10_text: "A generatív MI új tartalmakat, például szöveget, képet vagy zenét tud létrehozni.", t10_inst: "Tedd sorrendbe a szavakat:", t10_h1: "Újat alkotni.", t10_h2: "MI mint művész.", t10_q: "Mit csinál a generatív MI?", t10_qa: "Új adatokat hoz létre", t10_qb: "Fájlokat töröl", t10_qc: "Hardvert javít", t10_qd: "Blokkolja a netet",
    t10_w1: "A generatív", t10_w2: "MI", t10_w3: "teljesen", t10_w4: "új", t10_w5: "tartalmakat", t10_w6: "hoz", t10_w7: "létre.",
    t11_title: "LLM-ek (Nyelvi modellek)", t11_text: "A Large Language Models óriási MI modellek szöveges feladatokhoz.", t11_inst: "Jelöld meg a helyes szót:", t11_h1: "Nagy modellek.", t11_h2: "Hatalmas szövegmennyiség.", t11_q: "Melyik egy példa LLM-re?", t11_qa: "GPT-4", t11_qb: "Windows 11", t11_qc: "Photoshop", t11_qd: "Excel",
    t11_tk1: "Az LLM-eket", t11_tk2: "milliárdnyi", t11_tk3: "szóval", t11_tk4: "tanítják", t11_tk5: "be", t11_tk6: "a", t11_tk7: "tréning során.",
    t12_title: "Transformer architektúra", t12_text: "A Transformerek képezik a modern MI nyelvi modellek alapját.", t12_inst: "Párosítsd a fogalmakat:", t12_h1: "Figyelem!", t12_h2: "Fontos struktúra.", t12_q: "Mi a Transformerek egyik alapkoncepciója?", t12_qa: "Self-Attention", t12_qb: "Turbo-Boost", t12_qc: "Data-Save", t12_qd: "Auto-Off",
    t12_l1: "Bemenet", t12_r1: "Input", t12_l2: "Figyelem", t12_r2: "Attention", t12_l3: "Kimenet", t12_r3: "Output",
    t13_title: "Turing-teszt", t13_text: "Egy teszt annak megállapítására, hogy egy gép mutat-e intelligens viselkedést.", t13_inst: "Töltsd ki a hiányt:", t13_h1: "Ember vagy gép?", t13_h2: "Megkülönböztetés.", t13_q: "Ki javasolta a Turing-tesztet?", t13_qa: "Alan Turing", t13_qb: "Bill Gates", t13_qc: "Steve Jobs", t13_qd: "Elon Musk",
    t13_sent: "A Turing-teszt során egy ember ___ folytat.", t13_qa2: "beszélgetést", t13_qb2: "autót", t13_qc2: "kísérletet", t13_qd2: "hívást",
    t14_title: "Algoritmusok", t14_text: "Az algoritmus egy pontos útmutatás egy probléma megoldására.", t14_inst: "Tedd sorrendbe a szavakat:", t14_h1: "Mint egy recept.", t14_h2: "Lépésről lépésre.", t14_q: "Mi az algoritmus?", t14_qa: "Egy utasítássorozat", t14_qb: "Egy gépalkatrész", t14_qc: "Egy képernyő", t14_qd: "Egy kábel",
    t14_w1: "Az algoritmusok", t14_w2: "irányítják", t14_w3: "a", t14_w4: "MI", t14_w5: "működését.", t14_w6: "", t14_w7: "",
    t15_title: "Szakértői rendszerek", t15_text: "Korai MI-formák, amelyek szakértők tudását szabályokban tárolják.", t15_inst: "Válogasd szét:", t15_h1: "Szabályalapú.", t15_h2: "Ha-Akkor logika.", t15_q: "Mit használnak a szakértői rendszerek?", t15_qa: "Ha-Akkor szabályokat", t15_qb: "Véletlen számokat", t15_qc: "Képeket", t15_qd: "Szenzorokat",
    t15_bl1: "Összetevők", t15_bl2: "Példák", t15_i1: "Tudásbázis", t15_i2: "Diagnózis", t15_i3: "Logika", t15_i4: "Tanácsadás"
  },
  ro: {
    explorer_title: "IA Insula 7: Noțiuni de bază și istorie",
    t1_title: "Alan Turing", t1_text: "Alan Turing este considerat părintele informaticii. El a inventat mașina teoretică cunoscută astăzi sub numele de computer.", t1_inst: "Potrivește termenii:", t1_h1: "Cine a fost el?", t1_h2: "Ce a inventat?", t1_q: "Cum se numește testul pentru verificarea inteligenței mașinii?", t1_qa: "Testul Turing", t1_qb: "Testul IQ", t1_qc: "Test de mate", t1_qd: "Test Web",
    t1_l1: "Alan Turing", t1_r1: "Părintele IA", t1_l2: "Enigma", t1_r2: "Spărgător de coduri", t1_l3: "Computer", t1_r3: "Mașina Turing",
    t2_title: "Rețele neuronale", t2_text: "Rețelele neuronale artificiale sunt inspirate de creierul uman.", t2_inst: "Completează spațiul liber:", t2_h1: "Gândește-te la creier.", t2_h2: "Modele biologice.", t2_q: "Care este modelul pentru rețelele neuronale?", t2_qa: "Creierul", t2_qb: "Un motor", t2_qc: "Internetul", t2_qd: "O carte",
    t2_sent: "Rețelele neuronale constă în ___ artificiali.", t2_qa2: "neuroni", t2_qb2: "cabluri", t2_qc2: "baterii", t2_qd2: "comutatoare",
    t3_title: "Deep Learning", t3_text: "Deep Learning folosește multe straturi de neuroni pentru a recunoaște modele complexe.", t3_inst: "Sortează termenii:", t3_h1: "Straturile învață.", t3_h2: "Arhitectură profundă.", t3_q: "Ce înseamnă 'Deep' în Deep Learning?", t3_qa: "Multe straturi", t3_qb: "Hard disk mare", t3_qc: "Internet rapid", t3_qd: "Culoare închisă",
    t3_bl1: "Proces de învățare", t3_bl2: "Arhitectură", t3_i1: "Antrenament", t3_i2: "Strat de intrare", t3_i3: "Optimizare", t3_i4: "Strat de ieșire",
    t4_title: "Date de antrenament", t4_text: "IA are nevoie de cantități uriașe de date pentru a învăța.", t4_inst: "Pune cuvintele în ordine:", t4_h1: "Datele sunt hrană.", t4_h2: "Învățare prin exemple.", t4_q: "De ce sunt importante datele bune?", t4_qa: "Pentru predicții mai bune", t4_qb: "Pentru a face PC-ul să strălucească", t4_qc: "Pentru mai multă stocare", t4_qd: "Nicio semnificație",
    t4_w1: "IA", t4_w2: "învață", t4_w3: "din", t4_w4: "multe", t4_w5: "exemple", t4_w6: "și", t4_w7: "date.",
    t5_title: "Învățare supravegheată", t5_text: "În învățarea supravegheată, IA primește date cu răspunsurile corecte (etichete).", t5_inst: "Evidențiază cuvântul corect:", t5_h1: "Cu un profesor.", t5_h2: "Date etichetate.", t5_q: "De ce are nevoie învățarea supravegheată?", t5_qa: "Etichete", t5_qb: "Hazard", t5_qc: "Nicio dată", t5_qd: "Un stilou",
    t5_tk1: "Învățarea", t5_tk2: "supravegheată", t5_tk3: "folosește", t5_tk4: "seturi", t5_tk5: "de", t5_tk6: "date", t5_tk7: "etichetate.",
    t6_title: "Învățare nesupravegheată", t6_text: "IA caută independent modele în date fără răspunsuri date.", t6_inst: "Numără grupurile (clusterele):", t6_h1: "Găsirea modelelor.", t6_h2: "Grupare.", t6_q: "Ce detectează învățarea nesupravegheată?", t6_qa: "Modele", t6_qb: "Comenzi", t6_qc: "Nume", t6_qd: "Prețuri",
    t6_c1: "Grup", t6_n1: "3",
    t7_title: "Reinforcement Learning", t7_text: "IA învață prin recompensă și pedeapsă (încercare și eroare).", t7_inst: "Conectează termenii:", t7_h1: "Învățare ca la un câine.", t7_h2: "Buclă de feedback.", t7_q: "Ce primește IA pentru succes?", t7_qa: "Recompensă", t7_qb: "Electricitate", t7_qc: "Vacanță", t7_qd: "Hardware nou",
    t7_l1: "Acțiune", t7_r1: "Execuție", t7_l2: "Feedback", t7_r2: "Recompensă", t7_l3: "Scop", t7_r3: "Maximizare",
    t8_title: "NLP (Procesarea limbajului)", t8_text: "NLP ajută computerele să înțeleagă și să genereze limbajul uman.", t8_inst: "Completează spațiul liber:", t8_h1: "Vorbind cu PC-ul.", t8_h2: "Înțelegerea textului.", t8_q: "Ce înseamnă NLP?", t8_qa: "Natural Language Processing", t8_qb: "Network Link Power", t8_qc: "New Logic Program", t8_qd: "Next Level Play",
    t8_sent: "Chatboții folosesc ___ pentru a vorbi cu noi.", t8_qa2: "NLP", t8_qb2: "GPS", t8_qc2: "USB", t8_qd2: "RAM",
    t9_title: "Computer Vision", t9_text: "Viziunea computerizată permite IA să 'vadă' și să înțeleagă imagini și videoclipuri.", t9_inst: "Sortează termenii:", t9_h1: "Ochii IA.", t9_h2: "Recunoașterea imaginilor.", t9_q: "Ce recunoaște viziunea computerizată într-o fotografie?", t9_qa: "Obiecte", t9_qb: "Mirosuri", t9_qc: "Sentimente", t9_qd: "Greutate",
    t9_bl1: "Conținut imagine", t9_bl2: "Tehnică", t9_i1: "Pisică", t9_i2: "Pixel", t9_i3: "Față", t9_i4: "Cameră",
    t10_title: "IA Generativă", t10_text: "IA generativă poate crea conținut nou, cum ar fi text, imagini sau muzică.", t10_inst: "Pune cuvintele în ordine:", t10_h1: "Crearea a ceva nou.", t10_h2: "IA ca artist.", t10_q: "Ce face IA generativă?", t10_qa: "Creează date noi", t10_qb: "Șterge fișiere", t10_qc: "Repară hardware", t10_qd: "Blochează internetul",
    t10_w1: "IA", t10_w2: "generativă", t10_w3: "creează", t10_w4: "conținut", t10_w5: "complet", t10_w6: "nou.", t10_w7: "",
    t11_title: "LLM-uri (Modele de limbaj)", t11_text: "Large Language Models sunt modele IA uriașe pentru sarcini de text.", t11_inst: "Evidențiază cuvântul corect:", t11_h1: "Modele mari.", t11_h2: "Cantități uriașe de text.", t11_q: "Ce este un exemplu de LLM?", t11_qa: "GPT-4", t11_qb: "Windows 11", t11_qc: "Photoshop", t11_qd: "Excel",
    t11_tk1: "LLM-urile", t11_tk2: "sunt", t11_tk3: "antrenate", t11_tk4: "cu", t11_tk5: "miliarde", t11_tk6: "de", t11_tk7: "cuvinte.",
    t12_title: "Arhitectura Transformer", t12_text: "Transformerii sunt baza modelelor moderne de limbaj IA.", t12_inst: "Potrivește termenii:", t12_h1: "Atenție!", t12_h2: "Structură importantă.", t12_q: "Care este un concept de bază al transformerilor?", t12_qa: "Self-Attention", t12_qb: "Turbo Boost", t12_qc: "Data Save", t12_qd: "Auto Off",
    t12_l1: "Intrare", t12_r1: "Input", t12_l2: "Atenție", t12_r2: "Attention", t12_l3: "Ieșire", t12_r3: "Output",
    t13_title: "Testul Turing", t13_text: "Un test pentru a determina dacă o mașină prezintă un comportament inteligent.", t13_inst: "Completează spațiul liber:", t13_h1: "Om sau mașină?", t13_h2: "Distincție.", t13_q: "Cine a propus testul Turing?", t13_qa: "Alan Turing", t13_qb: "Bill Gates", t13_qc: "Steve Jobs", t13_qd: "Elon Musk",
    t13_sent: "În testul Turing, un om conduce o ___.", t13_qa2: "conversație", t13_qb2: "mașină", t13_qc2: "experiment", t13_qd2: "apel telefonic",
    t14_title: "Algoritmi", t14_text: "Un algoritm este un set precis de instrucțiuni pentru rezolvarea unei probleme.", t14_inst: "Pune cuvintele în ordine:", t14_h1: "Ca o rețetă.", t14_h2: "Pas cu pas.", t14_q: "Ce este un algoritm?", t14_qa: "Un set de instrucțiuni", t14_qb: "O piesă de computer", t14_qc: "Un ecran", t14_qd: "Un cablu",
    t14_w1: "Algoritmii", t14_w2: "controlează", t14_w3: "comportamentul", t14_w4: "unei", t14_w5: "IA.", t14_w6: "", t14_w7: "",
    t15_title: "Sisteme expert", t15_text: "Forme timpurii de IA care stochează cunoștințele experților în reguli.", t15_inst: "Sortează termenii:", t15_h1: "Bazat pe reguli.", t15_h2: "Logică If-Then.", t15_q: "Ce folosesc sistemele expert?", t15_qa: "Reguli If-Then", t15_qb: "Numere aleatorii", t15_qc: "Imagini", t15_qd: "Senzori",
    t15_bl1: "Componente", t15_bl2: "Exemple", t15_i1: "Baza de cunoștințe", t15_i2: "Diagnostic", t15_i3: "Logică", t15_i4: "Sfat"
  }
};

export const INFO_K7_I7_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "simple-icon", icon: "👨‍🔬", color: "#3F51B5" },
    interactive: { type: "match-pairs", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", pairs: [{left:"t1_l1",right:"t1_r1"},{left:"t1_l2",right:"t1_r2"},{left:"t1_l3",right:"t1_r3"}] },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" }
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "🧠", color: "#E91E63" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" }
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "icon-grid", items: [{emoji:"🧱",label:"Layers"},{emoji:"🎓",label:"Learning"}] },
    interactive: { type: "drag-to-bucket", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", buckets: [{id:"b1",label:"t3_bl1"},{id:"b2",label:"t3_bl2"}], items: [{text:"t3_i1",bucketId:"b1"},{text:"t3_i2",bucketId:"b2"},{text:"t3_i3",bucketId:"b1"},{text:"t3_i4",bucketId:"b2"}] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "📊", color: "#2196F3" },
    interactive: { type: "word-order", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", words: ["t4_w1", "t4_w2", "t4_w3", "t4_w4", "t4_w5", "t4_w6", "t4_w7"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6].slice(0, 7) },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "🏷️", color: "#FF9800" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6","t5_tk7"].filter(x=>x!==undefined), correctIndices: [3,4] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" }
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "simple-icon", icon: "🔍", color: "#9C27B0" },
    interactive: { type: "tap-count", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", tapCount: { emoji: "🔵", count: 3 } },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" }
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "🐶", color: "#795548" },
    interactive: { type: "match-pairs", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", pairs: [{left:"t7_l1",right:"t7_r1"},{left:"t7_l2",right:"t7_r2"},{left:"t7_l3",right:"t7_r3"}] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" }
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "simple-icon", icon: "💬", color: "#00BCD4" },
    interactive: { type: "gap-fill", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", sentence: "t8_sent", choices: ["t8_qa2", "t8_qb2", "t8_qc2", "t8_qd2"], correctIndex: 0 },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" }
  },
  {
    infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "icon-grid", items: [{emoji:"👁️",label:"Vision"},{emoji:"🖼️",label:"Image"}] },
    interactive: { type: "drag-to-bucket", instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2", buckets: [{id:"b1",label:"t9_bl1"},{id:"b2",label:"t9_bl2"}], items: [{text:"t9_i1",bucketId:"b1"},{text:"t9_i2",bucketId:"b2"},{text:"t9_i3",bucketId:"b1"},{text:"t9_i4",bucketId:"b2"}] },
    quiz: { question: "t9_q", choices: ["t9_qa", "t9_qb", "t9_qc", "t9_qd"], answer: "t9_qa" }
  },
  {
    infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "simple-icon", icon: "🎨", color: "#FFEB3B" },
    interactive: { type: "word-order", instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2", words: ["t10_w1", "t10_w2", "t10_w3", "t10_w4", "t10_w5", "t10_w6", "t10_w7"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6].slice(0, 6) },
    quiz: { question: "t10_q", choices: ["t10_qa", "t10_qb", "t10_qc", "t10_qd"], answer: "t10_qa" }
  },
  {
    infoTitle: "t11_title", infoText: "t11_text",
    svg: { type: "simple-icon", icon: "📚", color: "#4CAF50" },
    interactive: { type: "highlight-text", instruction: "t11_inst", hint1: "t11_h1", hint2: "t11_h2", tokens: ["t11_tk1","t11_tk2","t11_tk3","t11_tk4","t11_tk5","t11_tk6","t11_tk7"].filter(x=>x!==undefined), correctIndices: [3,4,5] },
    quiz: { question: "t11_q", choices: ["t11_qa", "t11_qb", "t11_qc", "t11_qd"], answer: "t11_qa" }
  },
  {
    infoTitle: "t12_title", infoText: "t12_text",
    svg: { type: "simple-icon", icon: "🔄", color: "#607D8B" },
    interactive: { type: "match-pairs", instruction: "t12_inst", hint1: "t12_h1", hint2: "t12_h2", pairs: [{left:"t12_l1",right:"t12_r1"},{left:"t12_l2",right:"t12_r2"},{left:"t12_l3",right:"t12_r3"}] },
    quiz: { question: "t12_q", choices: ["t12_qa", "t12_qb", "t12_qc", "t12_qd"], answer: "t12_qa" }
  },
  {
    infoTitle: "t13_title", infoText: "t13_text",
    svg: { type: "simple-icon", icon: "👥", color: "#009688" },
    interactive: { type: "gap-fill", instruction: "t13_inst", hint1: "t13_h1", hint2: "t13_h2", sentence: "t13_sent", choices: ["t13_qa2", "t13_qb2", "t13_qc2", "t13_qd2"], correctIndex: 0 },
    quiz: { question: "t13_q", choices: ["t13_qa", "t13_qb", "t13_qc", "t13_qd"], answer: "t13_qa" }
  },
  {
    infoTitle: "t14_title", infoText: "t14_text",
    svg: { type: "simple-icon", icon: "📜", color: "#FF5722" },
    interactive: { type: "word-order", instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2", words: ["t14_w1", "t14_w2", "t14_w3", "t14_w4", "t14_w5", "t14_w6", "t14_w7"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6].slice(0, 6) },
    quiz: { question: "t14_q", choices: ["t14_qa", "t14_qb", "t14_qc", "t14_qd"], answer: "t14_qa" }
  },
  {
    infoTitle: "t15_title", infoText: "t15_text",
    svg: { type: "icon-grid", items: [{emoji:"👨‍💼",label:"Expert"},{emoji:"⚙️",label:"Rules"}] },
    interactive: { type: "drag-to-bucket", instruction: "t15_inst", hint1: "t15_h1", hint2: "t15_h2", buckets: [{id:"b1",label:"t15_bl1"},{id:"b2",label:"t15_bl2"}], items: [{text:"t15_i1",bucketId:"b1"},{text:"t15_i2",bucketId:"b2"},{text:"t15_i3",bucketId:"b1"},{text:"t15_i4",bucketId:"b2"}] },
    quiz: { question: "t15_q", choices: ["t15_qa", "t15_qb", "t15_qc", "t15_qd"], answer: "t15_qa" }
  }
];

