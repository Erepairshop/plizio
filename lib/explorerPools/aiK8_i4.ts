// lib/explorerPools/aiK8_i4.ts
import type { PoolTopicDef } from "./types";

export const INFO_K8_I4_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "KI-Insel: Grundlagen",
    t1_title: "Was ist KI?", t1_text: "Künstliche Intelligenz (KI) ist die Fähigkeit von Maschinen, Aufgaben auszuführen, die normalerweise menschliche Intelligenz erfordern.", t1_inst: "Ordne die Paare zu:", t1_h1: "Maschine vs. Mensch.", t1_h2: "Intelligente Funktionen.", t1_q: "Was beschreibt KI am besten?", t1_qa: "Simulation menschlicher Intelligenz", t1_qb: "Eine mechanische Schreibmaschine", t1_qc: "Nur ein Taschenrechner", t1_qd: "Ein Stromkabel",
    t1_l1: "Lernen", t1_r1: "Erfahrung", t1_l2: "Logik", t1_r2: "Regeln", t1_l3: "Vision", t1_r3: "Bilder",
    t2_title: "Der Turing-Test", t2_text: "Alan Turing schlug einen Test vor, um festzustellen, ob eine Maschine 'denken' kann.", t2_inst: "Fülle die Lücke aus:", t2_h1: "Werden wir getäuscht?", t2_h2: "Mensch oder Maschine?", t2_q: "Wer erfand den Turing-Test?", t2_qa: "Alan Turing", t2_qb: "Steve Jobs", t2_qc: "Bill Gates", t2_qd: "Albert Einstein",
    t2_sent: "Beim Turing-Test versucht ein Mensch zu unterscheiden, ob sein Gesprächspartner ein Mensch oder eine ___ ist.", t2_qa2: "Maschine", t2_qb2: "Pflanze", t2_qc2: "Wolke", t2_qd2: "Farbe",
    t3_title: "Schwache vs. Starke KI", t3_text: "Schwache KI ist auf eine Aufgabe spezialisiert, starke KI könnte jede menschliche Aufgabe lösen.", t3_inst: "Sortiere in die Eimer:", t3_h1: "Spezialist vs. Alleskönner.", t3_h2: "Was existiert heute?", t3_q: "Welche KI nutzen wir heute hauptsächlich?", t3_qa: "Schwache KI", t3_qb: "Starke KI", t3_qc: "Keine KI", t3_qd: "Magische KI",
    t3_bl1: "Schwache KI", t3_bl2: "Starke KI", t3_i1: "Schach-KI", t3_i2: "Menschliches Bewusstsein", t3_i3: "Spam-Filter", t3_i4: "Superintelligenz",
    t4_title: "Wie KI lernt", t4_text: "KI lernt aus riesigen Datenmengen, um Muster zu erkennen.", t4_inst: "Bringe die Wörter in Ordnung:", t4_h1: "Daten sind Nahrung.", t4_h2: "Mustererkennung.", t4_q: "Was benötigt KI zum Lernen am meisten?", t4_qa: "Daten", t4_qb: "Benzin", t4_qc: "Wasser", t4_qd: "Papier",
    t4_w1: "KI", t4_w2: "erkennt", t4_w3: "Muster", t4_w4: "in", t4_w5: "sehr", t4_w6: "großen", t4_w7: "Datenmengen.",
    t5_title: "Maschinelles Lernen", t5_text: "Ein Teilbereich der KI, bei dem Algorithmen aus Daten lernen, ohne explizit programmiert zu werden.", t5_inst: "Markiere das richtige Wort:", t5_h1: "Algorithmen lernen.", t5_h2: "ML Abkürzung.", t5_q: "Wofür steht ML?", t5_qa: "Machine Learning", t5_qb: "Mega Logic", t5_qc: "Micro Laptop", t5_qd: "Music Layer",
    t5_tk1: "Maschinelles", t5_tk2: "Lernen", t5_tk3: "basiert", t5_tk4: "auf", t5_tk5: "statistischen", t5_tk6: "Modellen.",
    t6_title: "Überwachtes Lernen", t6_text: "Lernen mit Beispielen, die bereits 'Labels' (Etiketten) haben.", t6_inst: "Ordne die Paare zu:", t6_h1: "Input und Label.", t6_h2: "Lehrer gibt Antwort.", t6_q: "Was ist typisch für überwachtes Lernen?", t6_qa: "Beschriftete Daten", t6_qb: "Zufälliges Raten", t6_qc: "Keine Daten", t6_qd: "Stilles Sitzen",
    t6_l1: "Bild", t6_r1: "Hund-Label", t6_l2: "Email", t6_r2: "Spam-Label", t6_l3: "Ton", t6_r3: "Musik-Genre",
    t7_title: "Unüberwachtes Lernen", t7_text: "Die KI sucht selbstständig nach versteckten Strukturen in Daten ohne Labels.", t7_inst: "Fülle die Lücke aus:", t7_h1: "Keine Hilfe.", t7_h2: "Gruppen finden.", t7_q: "Was macht unüberwachtes Lernen?", t7_qa: "Clustering", t7_qb: "Diktat schreiben", t7_qc: "Malen nach Zahlen", t7_qd: "Vokabeln lernen",
    t7_sent: "Bei unüberwachtem Lernen sucht die KI nach ___ in den Daten.", t7_qa2: "Strukturen", t7_qb2: "Fehlern", t7_qc2: "Katzenvideos", t7_qd2: "Kabeln",
    t8_title: "Neuronale Netze", t8_text: "Computersysteme, die dem menschlichen Gehirn nachempfunden sind.", t8_inst: "Sortiere in die Eimer:", t8_h1: "Biologie vs. Technik.", t8_h2: "Schichten von Neuronen.", t8_q: "Was ist die Basiseinheit eines neuronalen Netzes?", t8_qa: "Künstliches Neuron", t8_qb: "Zahnrad", t8_qc: "Glühbirne", t8_qd: "Schraube",
    t8_bl1: "Biologisch", t8_bl2: "Künstlich", t8_i1: "Gehirnzelle", t8_i2: "Algorithmus-Knoten", t8_i3: "Synapse", t8_i4: "Gewichtung",
    t9_title: "Deep Learning", t9_text: "Neuronale Netze mit sehr vielen Schichten (tief), die komplexe Aufgaben lösen.", t9_inst: "Bringe die Wörter in Ordnung:", t9_h1: "Tiefe Netze.", t9_h2: "Komplexität.", t9_q: "Was bedeutet 'Deep' in Deep Learning?", t9_qa: "Viele Schichten", t9_qb: "Unter Wasser", t9_qc: "Sehr schlau", t9_qd: "Geheimnisvoll",
    t9_w1: "Deep", t9_w2: "Learning", t9_w3: "nutzt", t9_w4: "viele", t9_w5: "Schichten", t9_w6: "von", t9_w7: "Neuronen.",
    t10_title: "NLP (Sprachverarbeitung)", t10_text: "Fähigkeit von Computern, menschliche Sprache zu verstehen und zu erzeugen.", t10_inst: "Markiere das richtige Wort:", t10_h1: "Reden und Verstehen.", t10_h2: "Natural Language.", t10_q: "Welche Anwendung nutzt NLP?", t10_qa: "Chatbots", t10_qb: "Toaster", t10_qc: "Fahrradschloss", t10_qd: "Kühlschrank",
    t10_tk1: "NLP", t10_tk2: "hilft", t10_tk3: "beim", t10_tk4: "Übersetzen", t10_tk5: "von", t10_tk6: "Sprachen.",
    t11_title: "Computer Vision", t11_text: "Maschinen lernen, Bilder und Videos wie Menschen zu 'sehen' und zu verstehen.", t11_inst: "Ordne die Paare zu:", t11_h1: "Auge der KI.", t11_h2: "Bilder erkennen.", t11_q: "Wo wird Computer Vision eingesetzt?", t11_qa: "Gesichtserkennung", t11_qb: "Radio", t11_qc: "Schreibmaschine", t11_qd: "Kaffeemaschine",
    t11_l1: "Kamera", t11_r1: "Auge", t11_l2: "Pixel", t11_r2: "Information", t11_l3: "Objekt", t11_r3: "Erkennung",
    t12_title: "Robotik & KI", t12_text: "Roboter nutzen KI, um sich in ihrer Umgebung zurechtzufinden und Aufgaben zu lösen.", t12_inst: "Fülle die Lücke aus:", t12_h1: "Bewegliche Hardware.", t12_h2: "Sensoren nutzen.", t12_q: "Was unterscheidet einen KI-Roboter von einer einfachen Maschine?", t12_qa: "Anpassungsfähigkeit", t12_qb: "Farbe", t12_qc: "Gewicht", t12_qd: "Preis",
    t12_sent: "Ein intelligenter Roboter nutzt ___ , um seine Umgebung wahrzunehmen.", t12_qa2: "Sensoren", t12_qb2: "Löffel", t12_qc2: "Träume", t12_qd2: "Stifte",
    t13_title: "Bias (Voreingenommenheit)", t13_text: "KI kann menschliche Vorurteile übernehmen, wenn die Trainingsdaten einseitig sind.", t13_inst: "Sortiere in die Eimer:", t13_h1: "Fair oder unfair?", t13_h2: "Datenqualität.", t13_q: "Woher kommt der Bias in der KI meistens?", t13_qa: "Aus den Trainingsdaten", t13_qb: "Vom Strom", t13_qc: "Vom Metallgehäuse", t13_qd: "Vom Bildschirm",
    t13_bl1: "Neutral", t13_bl2: "Voreingenommen", t13_i1: "Vielfältige Daten", t13_i2: "Einseitige Beispiele", t13_i3: "Faire Auswahl", t13_i4: "Vorurteile im Text",
    t14_title: "Big Data", t14_text: "KI benötigt riesige Datenmengen (Big Data), um effektiv trainiert zu werden.", t14_inst: "Bringe die Wörter in Ordnung:", t14_h1: "Sehr viele Daten.", t14_h2: "KI-Treibstoff.", t14_q: "Warum ist Big Data wichtig für KI?", t14_qa: "Mehr Beispiele zum Lernen", t14_qb: "Damit der PC schwerer wird", t14_qc: "Für buntere Bilder", t14_qd: "Es ist nicht wichtig",
    t14_w1: "Big", t14_w2: "Data", t14_w3: "liefert", t14_w4: "die", t14_w5: "Grundlage", t14_w6: "für", t14_w7: "moderne KI.",
    t15_title: "Berühmte KI-Modelle", t15_text: "Modelle wie GPT oder BERT haben die KI-Welt revolutioniert.", t15_inst: "Markiere das richtige Wort:", t15_h1: "Sprachmodelle.", t15_h2: "Bekannte Namen.", t15_q: "Was ist ChatGPT?", t15_qa: "Ein KI-Sprachmodell", t15_qb: "Ein Computerspiel", t15_qc: "Ein Betriebssystem", t15_qd: "Eine Suchmaschine (klassisch)",
    t15_tk1: "GPT", t15_tk2: "ist", t15_tk3: "ein", t15_tk4: "Beispiel", t15_tk5: "für", t15_tk6: "ein", t15_tk7: "Großes Sprachmodell."
  },
  en: {
    explorer_title: "AI Island: Fundamentals",
    t1_title: "What is AI?", t1_text: "Artificial Intelligence (AI) is the ability of machines to perform tasks that typically require human intelligence.", t1_inst: "Match the pairs:", t1_h1: "Machine vs. Human.", t1_h2: "Intelligent functions.", t1_q: "What best describes AI?", t1_qa: "Simulation of human intelligence", t1_qb: "A mechanical typewriter", t1_qc: "Just a calculator", t1_qd: "A power cable",
    t1_l1: "Learning", t1_r1: "Experience", t1_l2: "Logic", t1_r2: "Rules", t1_l3: "Vision", t1_r3: "Images",
    t2_title: "The Turing Test", t2_text: "Alan Turing proposed a test to determine if a machine can 'think'.", t2_inst: "Fill in the blank:", t2_h1: "Are we being fooled?", t2_h2: "Human or machine?", t2_q: "Who invented the Turing Test?", t2_qa: "Alan Turing", t2_qb: "Steve Jobs", t2_qc: "Bill Gates", t2_qd: "Albert Einstein",
    t2_sent: "In the Turing Test, a human tries to distinguish if their conversation partner is a human or a ___.", t2_qa2: "machine", t2_qb2: "plant", t2_qc2: "cloud", t2_qd2: "color",
    t3_title: "Weak vs. Strong AI", t3_text: "Weak AI is specialized in one task, Strong AI could solve any human task.", t3_inst: "Sort into buckets:", t3_h1: "Specialist vs. Generalist.", t3_h2: "What exists today?", t3_q: "Which AI do we mainly use today?", t3_qa: "Weak AI", t3_qb: "Strong AI", t3_qc: "No AI", t3_qd: "Magic AI",
    t3_bl1: "Weak AI", t3_bl2: "Strong AI", t3_i1: "Chess AI", t3_i2: "Human consciousness", t3_i3: "Spam filter", t3_i4: "Superintelligence",
    t4_title: "How AI Learns", t4_text: "AI learns from massive amounts of data to recognize patterns.", t4_inst: "Put the words in order:", t4_h1: "Data is food.", t4_h2: "Pattern recognition.", t4_q: "What does AI need most to learn?", t4_qa: "Data", t4_qb: "Gasoline", t4_qc: "Water", t4_qd: "Paper",
    t4_w1: "AI", t4_w2: "recognizes", t4_w3: "patterns", t4_w4: "in", t4_w5: "very", t4_w6: "large", t4_w7: "datasets.",
    t5_title: "Machine Learning", t5_text: "A field of AI where algorithms learn from data without being explicitly programmed.", t5_inst: "Highlight the correct word:", t5_h1: "Algorithms learn.", t5_h2: "ML abbreviation.", t5_q: "What does ML stand for?", t5_qa: "Machine Learning", t5_qb: "Mega Logic", t5_qc: "Micro Laptop", t5_qd: "Music Layer",
    t5_tk1: "Machine", t5_tk2: "Learning", t5_tk3: "is", t5_tk4: "based", t5_tk5: "on", t5_tk6: "statistical", t5_tk7: "models.",
    t6_title: "Supervised Learning", t6_text: "Learning with examples that already have 'labels'.", t6_inst: "Match the pairs:", t6_h1: "Input and label.", t6_h2: "Teacher gives answer.", t6_q: "What is typical for supervised learning?", t6_qa: "Labeled data", t6_qb: "Random guessing", t6_qc: "No data", t6_qd: "Sitting quietly",
    t6_l1: "Image", t6_r1: "Dog label", t6_l2: "Email", t6_r2: "Spam label", t6_l3: "Sound", t6_r3: "Music genre",
    t7_title: "Unsupervised Learning", t7_text: "AI independently looks for hidden structures in data without labels.", t7_inst: "Fill in the blank:", t7_h1: "No help.", t7_h2: "Finding groups.", t7_q: "What does unsupervised learning do?", t7_qa: "Clustering", t7_qb: "Writing dictation", t7_qc: "Paint by numbers", t7_qd: "Learning vocabulary",
    t7_sent: "In unsupervised learning, the AI looks for ___ in the data.", t7_qa2: "structures", t7_qb2: "errors", t7_qc2: "cat videos", t7_qd2: "cables",
    t8_title: "Neural Networks", t8_text: "Computer systems modeled after the human brain.", t8_inst: "Sort into buckets:", t8_h1: "Biology vs. Tech.", t8_h2: "Layers of neurons.", t8_q: "What is the basic unit of a neural network?", t8_qa: "Artificial neuron", t8_qb: "Gear", t8_qc: "Light bulb", t8_qd: "Screw",
    t8_bl1: "Biological", t8_bl2: "Artificial", t8_i1: "Brain cell", t8_i2: "Algorithm node", t8_i3: "Synapse", t8_i4: "Weighting",
    t9_title: "Deep Learning", t9_text: "Neural networks with many layers (deep) that solve complex tasks.", t9_inst: "Put the words in order:", t9_h1: "Deep networks.", t9_h2: "Complexity.", t9_q: "What does 'Deep' mean in Deep Learning?", t9_qa: "Many layers", t9_qb: "Under water", t9_qc: "Very smart", t9_qd: "Mysterious",
    t9_w1: "Deep", t9_w2: "Learning", t9_w3: "uses", t9_w4: "many", t9_w5: "layers", t9_w6: "of", t9_w7: "neurons.",
    t10_title: "NLP (Language Processing)", t10_text: "The ability of computers to understand and generate human language.", t10_inst: "Highlight the correct word:", t10_h1: "Talking and understanding.", t10_h2: "Natural Language.", t10_q: "Which application uses NLP?", t10_qa: "Chatbots", t10_qb: "Toaster", t10_qc: "Bike lock", t10_qd: "Fridge",
    t10_tk1: "NLP", t10_tk2: "helps", t10_tk3: "in", t10_tk4: "translating", t10_tk5: "between", t10_tk6: "languages.",
    t11_title: "Computer Vision", t11_text: "Machines learn to 'see' and understand images and videos like humans.", t11_inst: "Match the pairs:", t11_h1: "AI's eye.", t11_h2: "Recognizing images.", t11_q: "Where is Computer Vision used?", t11_qa: "Facial recognition", t11_qb: "Radio", t11_qc: "Typewriter", t11_qd: "Coffee machine",
    t11_l1: "Camera", t11_r1: "Eye", t11_l2: "Pixel", t11_r2: "Information", t11_l3: "Object", t11_r3: "Detection",
    t12_title: "Robotics & AI", t12_text: "Robots use AI to navigate their environment and solve tasks.", t12_inst: "Fill in the blank:", t12_h1: "Movable hardware.", t12_h2: "Using sensors.", t12_q: "What distinguishes an AI robot from a simple machine?", t12_qa: "Adaptability", t12_qb: "Color", t12_qc: "Weight", t12_qd: "Price",
    t12_sent: "An intelligent robot uses ___ to perceive its environment.", t12_qa2: "sensors", t12_qb2: "spoons", t12_qc2: "dreams", t12_qd2: "pens",
    t13_title: "Bias", t13_text: "AI can adopt human prejudices if the training data is one-sided.", t13_inst: "Sort into buckets:", t13_h1: "Fair or unfair?", t13_h2: "Data quality.", t13_q: "Where does bias in AI mostly come from?", t13_qa: "From training data", t13_qb: "From electricity", t13_qc: "From the metal case", t13_qd: "From the screen",
    t13_bl1: "Neutral", t13_bl2: "Biased", t13_i1: "Diverse data", t13_i2: "One-sided examples", t13_i3: "Fair selection", t13_i4: "Prejudices in text",
    t14_title: "Big Data", t14_text: "AI needs massive amounts of data (Big Data) to be trained effectively.", t14_inst: "Put the words in order:", t14_h1: "Lots of data.", t14_h2: "AI fuel.", t14_q: "Why is Big Data important for AI?", t14_qa: "More examples to learn", t14_qb: "To make the PC heavier", t14_qc: "For more colorful images", t14_qd: "It's not important",
    t14_w1: "Big", t14_w2: "Data", t14_w3: "provides", t14_w4: "the", t14_w5: "basis", t14_w6: "for", t14_w7: "modern AI.",
    t15_title: "Famous AI Models", t15_text: "Models like GPT or BERT have revolutionized the AI world.", t15_inst: "Highlight the correct word:", t15_h1: "Language models.", t15_h2: "Known names.", t15_q: "What is ChatGPT?", t15_qa: "An AI language model", t15_qb: "A computer game", t15_qc: "An operating system", t15_qd: "A search engine",
    t15_tk1: "GPT", t15_tk2: "is", t15_tk3: "an", t15_tk4: "example", t15_tk5: "of", t15_tk6: "a", t15_tk7: "Large Language Model."
  },
  hu: {
    explorer_title: "MI Sziget: Alapok",
    t1_title: "Mi az a MI?", t1_text: "A Mesterséges Intelligencia (MI) a gépek azon képessége, hogy olyan feladatokat lássanak el, amikhez emberi intelligencia kell.", t1_inst: "Párosítsd össze:", t1_h1: "Gép vs. Ember.", t1_h2: "Intelligens funkciók.", t1_q: "Mi írja le legjobban a MI-t?", t1_qa: "Az emberi intelligencia szimulációja", t1_qb: "Egy mechanikus írógép", t1_qc: "Csak egy számológép", t1_qd: "Egy tápkábel",
    t1_l1: "Tanulás", t1_r1: "Tapasztalat", t1_l2: "Logika", t1_r2: "Szabályok", t1_l3: "Látás", t1_r3: "Képek",
    t2_title: "A Turing-teszt", t2_text: "Alan Turing javasolt egy tesztet annak eldöntésére, hogy egy gép tud-e 'gondolkodni'.", t2_inst: "Töltsd ki a hiányt:", t2_h1: "Átvernek minket?", t2_h2: "Ember vagy gép?", t2_q: "Ki találta fel a Turing-tesztet?", t2_qa: "Alan Turing", t2_qb: "Steve Jobs", t2_qc: "Bill Gates", t2_qd: "Albert Einstein",
    t2_sent: "A Turing-teszt során egy ember próbálja eldönteni, hogy a beszélgetőpartnere ember-e vagy egy ___.", t2_qa2: "gép", t2_qb2: "növény", t2_qc2: "felhő", t2_qd2: "szín",
    t3_title: "Gyenge vs. Erős MI", t3_text: "A gyenge MI egy feladatra szakosodott, az erős MI bármilyen emberi feladatot megoldana.", t3_inst: "Válogasd szét:", t3_h1: "Specialista vs. Mindentudó.", t3_h2: "Mi létezik ma?", t3_q: "Milyen MI-t használunk ma főleg?", t3_qa: "Gyenge MI", t3_qb: "Erős MI", t3_qc: "Nincs MI", t3_qd: "Mágikus MI",
    t3_bl1: "Gyenge MI", t3_bl2: "Erős MI", t3_i1: "Sakk-MI", t3_i2: "Emberi öntudat", t3_i3: "Spam-szűrő", t3_i4: "Szuperintelligencia",
    t4_title: "Hogyan tanul a MI?", t4_text: "A MI hatalmas adatmennyiségből tanul, hogy mintákat ismerjen fel.", t4_inst: "Tedd sorrendbe a szavakat:", t4_h1: "Az adat az üzemanyag.", t4_h2: "Mintafelismerés.", t4_q: "Mire van leginkább szüksége a MI-nek a tanuláshoz?", t4_qa: "Adatokra", t4_qb: "Benzinre", t4_qc: "Vízre", t4_qd: "Papírra",
    t4_w1: "A MI", t4_w2: "mintákat", t4_w3: "ismer", t4_w4: "fel", t4_w5: "nagyon", t4_w6: "nagy", t4_w7: "adathalmazokban.",
    t5_title: "Gépi tanulás", t5_text: "A MI egy területe, ahol az algoritmusok adatokból tanulnak explicit programozás nélkül.", t5_inst: "Jelöld meg a helyes szót:", t5_h1: "Az algoritmusok tanulnak.", t5_h2: "ML rövidítés.", t5_q: "Mit jelent az ML?", t5_qa: "Machine Learning", t5_qb: "Mega Logic", t5_qc: "Micro Laptop", t5_qd: "Music Layer",
    t5_tk1: "A gépi", t5_tk2: "tanulás", t5_tk3: "statisztikai", t5_tk4: "modelleken", t5_tk5: "alapul.", t5_tk6: "",
    t6_title: "Felügyelt tanulás", t6_text: "Tanulás olyan példákkal, amelyek már rendelkeznek 'címkékkel' (labels).", t6_inst: "Párosítsd össze:", t6_h1: "Bemenet és címke.", t6_h2: "A tanár megadja a választ.", t6_q: "Mi jellemző a felügyelt tanulásra?", t6_qa: "Címkézett adatok", t6_qb: "Véletlen találgatás", t6_qc: "Nincs adat", t6_qd: "Csendben ülés",
    t6_l1: "Kép", t6_r1: "Kutya címke", t6_l2: "Email", t6_r2: "Spam címke", t6_l3: "Hang", t6_r3: "Zenei stílus",
    t7_title: "Felügyelet nélküli tanulás", t7_text: "A MI önállóan keres rejtett struktúrákat a címke nélküli adatokban.", t7_inst: "Töltsd ki a hiányt:", t7_h1: "Nincs segítség.", t7_h2: "Csoportok keresése.", t7_q: "Mit csinál a felügyelet nélküli tanulás?", t7_qa: "Klaszterezés", t7_qb: "Diktálás", t7_qc: "Számfestő", t7_qd: "Szótanulás",
    t7_sent: "Felügyelet nélküli tanulásnál a MI ___ keres az adatokban.", t7_qa2: "szerkezeteket", t7_qb2: "hibákat", t7_qc2: "macskás videókat", t7_qd2: "kábeleket",
    t8_title: "Neurális hálózatok", t8_text: "Az emberi agy működését modellező számítógépes rendszerek.", t8_inst: "Válogasd szét:", t8_h1: "Biológia vs. Technika.", t8_h2: "Neurón rétegek.", t8_q: "Mi a neurális háló alapegysége?", t8_qa: "Mesterséges neuron", t8_qb: "Fogaskerék", t8_qc: "Izzó", t8_qd: "Csavar",
    t8_bl1: "Biológiai", t8_bl2: "Mesterséges", t8_i1: "Agysejt", t8_i2: "Algoritmus csomópont", t8_i3: "Szinapszis", t8_i4: "Súlyozás",
    t9_title: "Mély tanulás (Deep Learning)", t9_text: "Sok rétegű (mély) neurális hálók, amik komplex feladatokat oldanak meg.", t9_inst: "Tedd sorrendbe a szavakat:", t9_h1: "Mély hálózatok.", t9_h2: "Komplexitás.", t9_q: "Mit jelent a 'Deep' a Deep Learningben?", t9_qa: "Sok réteget", t9_qb: "Víz alattit", t9_qc: "Nagyon okosat", t9_qd: "Titokzatosat",
    t9_w1: "A Deep", t9_w2: "Learning", t9_w3: "sok", t9_w4: "neurón", t9_w5: "réteget", t9_w6: "használ.", t9_w7: "",
    t10_title: "NLP (Nyelvi feldolgozás)", t10_text: "A gépek képessége az emberi nyelv megértésére és generálására.", t10_inst: "Jelöld meg a helyes szót:", t10_h1: "Beszéd és értés.", t10_h2: "Natural Language.", t10_q: "Melyik alkalmazás használ NLP-t?", t10_qa: "Chatbotok", t10_qb: "Pirító", t10_qc: "Biciklizár", t10_qd: "Hűtő",
    t10_tk1: "Az NLP", t10_tk2: "segít", t10_tk3: "a nyelvek", t10_tk4: "közötti", t10_tk5: "fordításban.", t10_tk6: "",
    t11_title: "Számítógépes látás", t11_text: "A gépek megtanulják 'látni' és érteni a képeket és videókat.", t11_inst: "Párosítsd össze:", t11_h1: "A MI szeme.", t11_h2: "Képfelismerés.", t11_q: "Hol használnak számítógépes látást?", t11_qa: "Arcfelismerés", t11_qb: "Rádió", t11_qc: "Írógép", t11_qd: "Kávéfőző",
    t11_l1: "Kamera", t11_r1: "Szem", t11_l2: "Pixel", t11_r2: "Információ", t11_l3: "Objektum", t11_r3: "Felismerés",
    t12_title: "Robotika és MI", t12_text: "A robotok MI-t használnak a tájékozódáshoz és feladatokhoz.", t12_inst: "Töltsd ki a hiányt:", t12_h1: "Mozgó hardver.", t12_h2: "Szenzorok használata.", t12_q: "Mi különbözteti meg a MI robotot egy sima géptől?", t12_qa: "Alkalmazkodóképesség", t12_qb: "Szín", t12_qc: "Súly", t12_qd: "Ár",
    t12_sent: "Egy intelligens robot ___ használ a környezete érzékeléséhez.", t12_qa2: "szenzorokat", t12_qb2: "kanalakat", t12_qc2: "álmokat", t12_qd2: "tollakat",
    t13_title: "Torzítás (Bias)", t13_text: "A MI átveheti az emberi előítéleteket, ha a tanítóadatok egyoldalúak.", t13_inst: "Válogasd szét:", t13_h1: "Fair vagy nem?", t13_h2: "Adatminőség.", t13_q: "Honnan ered legtöbbször a MI torzítása?", t13_qa: "A tanítóadatokból", t13_qb: "Az áramból", t13_qc: "A fémházból", t13_qd: "A képernyőből",
    t13_bl1: "Semleges", t13_bl2: "Elfogult", t13_i1: "Változatos adatok", t13_i2: "Egyoldalú példák", t13_i3: "Tisztességes választás", t13_i4: "Előítéletek a szövegben",
    t14_title: "Big Data", t14_text: "A MI-nek óriási adatmennyiségre van szüksége a hatékony tanuláshoz.", t14_inst: "Tedd sorrendbe a szavakat:", t14_h1: "Sok-sok adat.", t14_h2: "MI üzemanyag.", t14_q: "Miért fontos a Big Data a MI-nek?", t14_qa: "Több példa a tanuláshoz", t14_qb: "Hogy nehezebb legyen a PC", t14_qc: "Színesebb képekért", t14_qd: "Nem fontos",
    t14_w1: "A Big", t14_w2: "Data", t14_w3: "adja", t14_w4: "az", t14_w5: "alapot", t14_w6: "a modern", t14_w7: "MI-nek.",
    t15_title: "Híres MI modellek", t15_text: "Az olyan modellek, mint a GPT vagy a BERT, forradalmasították a MI világát.", t15_inst: "Jelöld meg a helyes szót:", t15_h1: "Nyelvi modellek.", t15_h2: "Ismert nevek.", t15_q: "Mi az a ChatGPT?", t15_qa: "Egy MI nyelvi modell", t15_qb: "Egy számítógépes játék", t15_qc: "Operációs rendszer", t15_qd: "Keresőmotor",
    t15_tk1: "A GPT", t15_tk2: "egy", t15_tk3: "példa", t15_tk4: "a nagy", t15_tk5: "nyelvi", t15_tk6: "modellekre.", t15_tk7: ""
  },
  ro: {
    explorer_title: "Insula IA: Fundamente",
    t1_title: "Ce este IA?", t1_text: "Inteligența Artificială (IA) este capacitatea mașinilor de a îndeplini sarcini care necesită inteligență umană.", t1_inst: "Potrivește perechile:", t1_h1: "Mașină vs. Om.", t1_h2: "Funcții inteligente.", t1_q: "Ce descrie cel mai bine IA?", t1_qa: "Simularea inteligenței umane", t1_qb: "O mașină de scris mecanică", t1_qc: "Doar un calculator", t1_qd: "Un cablu de alimentare",
    t1_l1: "Învățare", t1_r1: "Experiență", t1_l2: "Logică", t1_r2: "Reguli", t1_l3: "Viziune", t1_r3: "Imagini",
    t2_title: "Testul Turing", t2_text: "Alan Turing a propus un test pentru a determina dacă o mașină poate 'gândi'.", t2_inst: "Completează spațiul liber:", t2_h1: "Suntem păcăliți?", t2_h2: "Om sau mașină?", t2_q: "Cine a inventat testul Turing?", t2_qa: "Alan Turing", t2_qb: "Steve Jobs", t2_qc: "Bill Gates", t2_qd: "Albert Einstein",
    t2_sent: "În testul Turing, un om încearcă să distingă dacă partenerul de discuție este un om sau o ___.", t2_qa2: "mașină", t2_qb2: "plantă", t2_qc2: "nor", t2_qd2: "culoare",
    t3_title: "IA Slabă vs. IA Puternică", t3_text: "IA slabă este specializată pe o sarcină, IA puternică ar putea rezolva orice sarcină umană.", t3_inst: "Sortează în găleți:", t3_h1: "Specialist vs. Generalist.", t3_h2: "Ce există azi?", t3_q: "Ce fel de IA folosim în principal azi?", t3_qa: "IA Slabă", t3_qb: "IA Puternică", t3_qc: "Nicio IA", t3_qd: "IA Magică",
    t3_bl1: "IA Slabă", t3_bl2: "IA Puternică", t3_i1: "IA de șah", t3_i2: "Conștiință umană", t3_i3: "Filtru spam", t3_i4: "Superinteligență",
    t4_title: "Cum învață IA", t4_text: "IA învață din cantități masive de date pentru a recunoaște modele.", t4_inst: "Pune cuvintele în ordine:", t4_h1: "Datele sunt combustibil.", t4_h2: "Recunoașterea modelelor.", t4_q: "De ce are nevoie IA cel mai mult pentru a învăța?", t4_qa: "Date", t4_qb: "Benzină", t4_qc: "Apă", t4_qd: "Hârtie",
    t4_w1: "IA", t4_w2: "recunoaște", t4_w3: "modele", t4_w4: "în", t4_w5: "seturi", t4_w6: "mari", t4_w7: "de date.",
    t5_title: "Machine Learning", t5_text: "Un domeniu al IA unde algoritmii învață din date fără a fi programați explicit.", t5_inst: "Evidențiază cuvântul corect:", t5_h1: "Algoritmii învață.", t5_h2: "Abreviere ML.", t5_q: "Ce înseamnă ML?", t5_qa: "Machine Learning", t5_qb: "Mega Logic", t5_qc: "Micro Laptop", t5_qd: "Music Layer",
    t5_tk1: "Machine", t5_tk2: "Learning", t5_tk3: "se", t5_tk4: "bazează", t5_tk5: "pe", t5_tk6: "modele", t5_tk7: "statistice.",
    t6_title: "Învățare Supervizată", t6_text: "Învățare cu exemple care au deja 'etichete' (labels).", t6_inst: "Potrivește perechile:", t6_h1: "Input și etichetă.", t6_h2: "Profesorul dă răspunsul.", t6_q: "Ce este tipic pentru învățarea supervizată?", t6_qa: "Date etichetate", t6_qb: "Ghicire aleatorie", t6_qc: "Lipsă date", t6_qd: "Stat liniștit",
    t6_l1: "Imagine", t6_r1: "Etichetă câine", t6_l2: "Email", t6_r2: "Etichetă spam", t6_l3: "Sunet", t6_r3: "Gen muzical",
    t7_title: "Învățare Nesupervizată", t7_text: "IA caută singură structuri ascunse în date fără etichete.", t7_inst: "Completează spațiul liber:", t7_h1: "Fără ajutor.", t7_h2: "Găsirea grupurilor.", t7_q: "Ce face învățarea nesupervizată?", t7_qa: "Clustering", t7_qb: "Dictare", t7_qc: "Pictură pe numere", t7_qd: "Învățare vocabular",
    t7_sent: "În învățarea nesupervizată, IA caută ___ în date.", t7_qa2: "structuri", t7_qb2: "erori", t7_qc2: "clipuri cu pisici", t7_qd2: "cabluri",
    t8_title: "Rețele Neuronale", t8_text: "Sisteme informatice modelate după creierul uman.", t8_inst: "Sortează în găleți:", t8_h1: "Biologie vs. Tehnică.", t8_h2: "Straturi de neuroni.", t8_q: "Care este unitatea de bază a unei rețele neuronale?", t8_qa: "Neuron artificial", t8_qb: "Roată dințată", t8_qc: "Bec", t8_qd: "Șurub",
    t8_bl1: "Biologic", t8_bl2: "Artificial", t8_i1: "Celulă nervoasă", t8_i2: "Nod algoritm", t8_i3: "Sinapsă", t8_i4: "Ponderare",
    t9_title: "Deep Learning", t9_text: "Rețele neuronale cu multe straturi (adânci) care rezolvă sarcini complexe.", t9_inst: "Pune cuvintele în ordine:", t9_h1: "Rețele adânci.", t9_h2: "Complexitate.", t9_q: "Ce înseamnă 'Deep' în Deep Learning?", t9_qa: "Multe straturi", t9_qb: "Sub apă", t9_qc: "Foarte deștept", t9_qd: "Misterios",
    t9_w1: "Deep", t9_w2: "Learning", t9_w3: "folosește", t9_w4: "multe", t9_w5: "straturi", t9_w6: "de", t9_w7: "neuroni.",
    t10_title: "NLP (Procesarea limbajului)", t10_text: "Capacitatea calculatoarelor de a înțelege și genera limbaj uman.", t10_inst: "Evidențiază cuvântul corect:", t10_h1: "Vorbire și înțelegere.", t10_h2: "Natural Language.", t10_q: "Ce aplicație folosește NLP?", t10_qa: "Chatboți", t10_qb: "Prăjitor", t10_qc: "Antifurt bicicletă", t10_qd: "Frigider",
    t10_tk1: "NLP", t10_tk2: "ajută", t10_tk3: "la", t10_tk4: "traducerea", t10_tk5: "între", t10_tk6: "limbi.", t10_tk7: "",
    t11_title: "Viziune Artificială", t11_text: "Mașinile învață să 'vadă' și să înțeleagă imagini și videoclipuri.", t11_inst: "Potrivește perechile:", t11_h1: "Ochiul IA.", t11_h2: "Recunoașterea imaginilor.", t11_q: "Unde este folosită viziunea artificială?", t11_qa: "Recunoaștere facială", t11_qb: "Radio", t11_qc: "Mașină de scris", t11_qd: "Cafetieră",
    t11_l1: "Cameră", t11_r1: "Ochi", t11_l2: "Pixel", t11_r2: "Informație", t11_l3: "Obiect", t11_r3: "Detecție",
    t12_title: "Robotică și IA", t12_text: "Roboții folosesc IA pentru a naviga și a rezolva sarcini.", t12_inst: "Completează spațiul liber:", t12_h1: "Hardware mobil.", t12_h2: "Folosirea senzorilor.", t12_q: "Ce distinge un robot cu IA de o mașină simplă?", t12_qa: "Adaptabilitatea", t12_qb: "Culoarea", t12_qc: "Greutatea", t12_qd: "Prețul",
    t12_sent: "Un robot inteligent folosește ___ pentru a percepe mediul.", t12_qa2: "senzori", t12_qb2: "linguri", t12_qc2: "vise", t12_qd2: "pixuri",
    t13_title: "Bias (Prejudecată)", t13_text: "IA poate prelua prejudecăți umane dacă datele sunt unilaterale.", t13_inst: "Sortează în găleți:", t13_h1: "Echitabil sau nu?", t13_h2: "Calitatea datelor.", t13_q: "De unde provine bias-ul în IA de cele mai multe ori?", t13_qa: "Din datele de antrenament", t13_qb: "Din curent", t13_qc: "Din carcasa de metal", t13_qd: "Din ecran",
    t13_bl1: "Neutru", t13_bl2: "Părtinitor", t13_i1: "Date diverse", t13_i2: "Exemple unilaterale", t13_i3: "Selecție corectă", t13_i4: "Prejudecăți în text",
    t14_title: "Big Data", t14_text: "IA are nevoie de cantități uriașe de date pentru antrenament.", t14_inst: "Pune cuvintele în ordine:", t14_h1: "Multe date.", t14_h2: "Combustibil IA.", t14_q: "De ce este Big Data important pentru IA?", t14_qa: "Mai multe exemple de învățat", t14_qb: "Să fie PC-ul mai greu", t14_qc: "Pentru imagini colorate", t14_qd: "Nu este important",
    t14_w1: "Big", t14_w2: "Data", t14_w3: "oferă", t14_w4: "baza", t14_w5: "pentru", t14_w6: "IA", t14_w7: "modernă.",
    t15_title: "Modele IA Celebre", t15_text: "Modele ca GPT sau BERT au revoluționat lumea IA.", t15_inst: "Evidențiază cuvântul corect:", t15_h1: "Modele de limbaj.", t15_h2: "Nume cunoscute.", t15_q: "Ce este ChatGPT?", t15_qa: "Un model de limbaj IA", t15_qb: "Un joc pe calculator", t15_qc: "Un sistem de operare", t15_qd: "Un motor de căutare",
    t15_tk1: "GPT", t15_tk2: "este", t15_tk3: "un", t15_tk4: "exemplu", t15_tk5: "de", t15_tk6: "model", t15_tk7: "de limbaj mare."
  }
};

export const INFO_K8_I4_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "simple-icon", icon: "🤖", color: "#2196F3" },
    interactive: { type: "match-pairs", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", pairs: [{left:"t1_l1",right:"t1_r1"},{left:"t1_l2",right:"t1_r2"},{left:"t1_l3",right:"t1_r3"}] },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" }
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "📝", color: "#FF9800" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" }
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "icon-grid", items: [{emoji:"♟️",label:"Weak"},{emoji:"🧠",label:"Strong"}] },
    interactive: { type: "drag-to-bucket", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", buckets: [{id:"b1",label:"t3_bl1"},{id:"b2",label:"t3_bl2"}], items: [{text:"t3_i1",bucketId:"b1"},{text:"t3_i2",bucketId:"b2"},{text:"t3_i3",bucketId:"b1"},{text:"t3_i4",bucketId:"b2"}] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "📉", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", words: ["t4_w1", "t4_w2", "t4_w3", "t4_w4", "t4_w5", "t4_w6", "t4_w7"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "🧠", color: "#E91E63" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6","t5_tk7"].filter(x=>x!==""), correctIndices: [0,1] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" }
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "simple-icon", icon: "🏷️", color: "#9C27B0" },
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
    svg: { type: "icon-grid", items: [{emoji:"🧬",label:"Bio"},{emoji:"💻",label:"Tech"}] },
    interactive: { type: "drag-to-bucket", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", buckets: [{id:"b1",label:"t8_bl1"},{id:"b2",label:"t8_bl2"}], items: [{text:"t8_i1",bucketId:"b1"},{text:"t8_i2",bucketId:"b2"},{text:"t8_i3",bucketId:"b1"},{text:"t8_i4",bucketId:"b2"}] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" }
  },
  {
    infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "simple-icon", icon: "🏗️", color: "#607D8B" },
    interactive: { type: "word-order", instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2", words: ["t9_w1", "t9_w2", "t9_w3", "t9_w4", "t9_w5", "t9_w6", "t9_w7"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t9_q", choices: ["t9_qa", "t9_qb", "t9_qc", "t9_qd"], answer: "t9_qa" }
  },
  {
    infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "simple-icon", icon: "💬", color: "#3F51B5" },
    interactive: { type: "highlight-text", instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2", tokens: ["t10_tk1","t10_tk2","t10_tk3","t10_tk4","t10_tk5","t10_tk6"].filter(x=>x!==""), correctIndices: [0] },
    quiz: { question: "t10_q", choices: ["t10_qa", "t10_qb", "t10_qc", "t10_qd"], answer: "t10_qa" }
  },
  {
    infoTitle: "t11_title", infoText: "t11_text",
    svg: { type: "simple-icon", icon: "👁️", color: "#795548" },
    interactive: { type: "match-pairs", instruction: "t11_inst", hint1: "t11_h1", hint2: "t11_h2", pairs: [{left:"t11_l1",right:"t11_r1"},{left:"t11_l2",right:"t11_r2"},{left:"t11_l3",right:"t11_r3"}] },
    quiz: { question: "t11_q", choices: ["t11_qa", "t11_qb", "t11_qc", "t11_qd"], answer: "t11_qa" }
  },
  {
    infoTitle: "t12_title", infoText: "t12_text",
    svg: { type: "simple-icon", icon: "🦾", color: "#212121" },
    interactive: { type: "gap-fill", instruction: "t12_inst", hint1: "t12_h1", hint2: "t12_h2", sentence: "t12_sent", choices: ["t12_qa2", "t12_qb2", "t12_qc2", "t12_qd2"], correctIndex: 0 },
    quiz: { question: "t12_q", choices: ["t12_qa", "t12_qb", "t12_qc", "t12_qd"], answer: "t12_qa" }
  },
  {
    infoTitle: "t13_title", infoText: "t13_text",
    svg: { type: "icon-grid", items: [{emoji:"⚖️",label:"Fair"},{emoji:"🚫",label:"Bias"}] },
    interactive: { type: "drag-to-bucket", instruction: "t13_inst", hint1: "t13_h1", hint2: "t13_h2", buckets: [{id:"b1",label:"t13_bl1"},{id:"b2",label:"t13_bl2"}], items: [{text:"t13_i1",bucketId:"b1"},{text:"t13_i2",bucketId:"b2"},{text:"t13_i3",bucketId:"b1"},{text:"t13_i4",bucketId:"b2"}] },
    quiz: { question: "t13_q", choices: ["t13_qa", "t13_qb", "t13_qc", "t13_qd"], answer: "t13_qa" }
  },
  {
    infoTitle: "t14_title", infoText: "t14_text",
    svg: { type: "simple-icon", icon: "📊", color: "#FFEB3B" },
    interactive: { type: "word-order", instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2", words: ["t14_w1", "t14_w2", "t14_w3", "t14_w4", "t14_w5", "t14_w6", "t14_w7"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t14_q", choices: ["t14_qa", "t14_qb", "t14_qc", "t14_qd"], answer: "t14_qa" }
  },
  {
    infoTitle: "t15_title", infoText: "t15_text",
    svg: { type: "text-bubbles", items: [{text:"GPT",bg:"#fff",color:"#000",emoji:"🤖"},{text:"BERT",bg:"#fff",color:"#000",emoji:"🧠"}] },
    interactive: { type: "highlight-text", instruction: "t15_inst", hint1: "t15_h1", hint2: "t15_h2", tokens: ["t15_tk1","t15_tk2","t15_tk3","t15_tk4","t15_tk5","t15_tk6","t15_tk7"].filter(x=>x!==""), correctIndices: [0] },
    quiz: { question: "t15_q", choices: ["t15_qa", "t15_qb", "t15_qc", "t15_qd"], answer: "t15_qa" }
  }
];
