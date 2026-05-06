// @ts-nocheck
// lib/explorerPools/aiK7_i1.ts
import type { PoolTopicDef } from "./types";

export const INFO_K7_I1_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "KI Insel 1: Grundlagen",
    t1_title: "Was ist KI?", t1_text: "Künstliche Intelligenz (KI) lässt Maschinen wie Menschen denken und lernen.", t1_inst: "Ordne die Paare zu:", t1_h1: "Maschine oder Mensch?", t1_h2: "Begriffe verbinden.", t1_q: "Wofür steht die Abkürzung KI?", t1_qa: "Künstliche Intelligenz", t1_qb: "Kleine Information", t1_qc: "Kühler Interpreter", t1_qd: "Keine Idee",
    t1_l1: "Künstlich", t1_r1: "Vom Menschen gemacht", t1_l2: "Intelligenz", t1_r2: "Fähigkeit zu lernen", t1_l3: "Algorithmus", t1_r3: "Rechenvorschrift",
    t2_title: "Der Turing-Test", t2_text: "Ein Test, um festzustellen, ob eine Maschine echtes Denkvermögen zeigt.", t2_inst: "Fülle die Lücke aus:", t2_h1: "Alan Turing.", t2_h2: "Mensch oder Maschine?", t2_q: "Wer erfand den Turing-Test?", t2_qa: "Alan Turing", t2_qb: "Albert Einstein", t2_qc: "Bill Gates", t2_qd: "Steve Jobs",
    t2_sent: "Beim Turing-Test versucht ein Mensch zu erraten, ob er mit einer ___ spricht.", t2_qa2: "Maschine", t2_qb2: "Pflanze", t2_qc2: "Katze", t2_qd2: "Sonne",
    t3_title: "Geschichte der KI", t3_text: "Die Idee der KI ist alt, aber die Forschung begann richtig in den 1950ern.", t3_inst: "Sortiere in die Eimer:", t3_h1: "Alt oder Neu?", t3_h2: "Meilensteine der Technik.", t3_q: "In welchem Jahrzehnt wurde der Begriff KI geprägt?", t3_qa: "1950er", t3_qb: "1850er", t3_qc: "1990er", t3_qd: "2010er",
    t3_bl1: "Frühe KI", t3_bl2: "Moderne KI", t3_i1: "Logik-Theoretiker", t3_i2: "ChatGPT", t3_i3: "Schach-Computer", t3_i4: "Bilderkennung",
    t4_title: "Lernen aus Daten", t4_text: "Maschinelles Lernen bedeutet, dass Computer ohne direkte Programmierung lernen.", t4_inst: "Bringe die Wörter in Ordnung:", t4_h1: "Erfahrung macht schlau.", t4_h2: "Computer lernen aus Beispielen.", t4_q: "Was braucht eine KI zum Lernen?", t4_qa: "Daten", t4_qb: "Benzin", t4_qc: "Essen", t4_qd: "Schlaf",
    t4_w1: "Computer", t4_w2: "lernen", t4_w3: "aus", t4_w4: "vielen", t4_w5: "verschiedenen", t4_w6: "Daten.",
    t5_title: "Algorithmen", t5_text: "Ein Algorithmus ist wie ein Kochrezept für den Computer.", t5_inst: "Markiere das richtige Wort:", t5_h1: "Schritt für Schritt.", t5_h2: "Anweisungen folgen.", t5_q: "Was beschreibt ein Algorithmus?", t5_qa: "Einen Lösungsweg", t5_qb: "Einen Bildschirm", t5_qc: "Ein Stromkabel", t5_qd: "Eine Tastatur",
    t5_tk1: "Ein", t5_tk2: "Algorithmus", t5_tk3: "ist", t5_tk4: "eine", t5_tk5: "genaue", t5_tk6: "Anweisung.",
    t6_title: "Neuronale Netze", t6_text: "Sie sind dem menschlichen Gehirn nachempfunden.", t6_inst: "Zähle die Neuronen:", t6_h1: "Biologisches Vorbild.", t6_h2: "Vernetzung ist alles.", t6_q: "Was ahmen neuronale Netze nach?", t6_qa: "Das Gehirn", t6_qb: "Das Herz", t6_qc: "Die Lunge", t6_qd: "Den Magen",
    t6_tap_count: "5", t6_tap_inst: "Tippe 5 Mal auf das Netzwerk!",
    t7_title: "Überwachtes Lernen", t7_text: "Die KI lernt mit markierten Beispielen (z.B. Hund/Katze).", t7_inst: "Ordne die Paare zu:", t7_h1: "Etiketten nutzen.", t7_h2: "Lehrer gibt Feedback.", t7_q: "Was ist typisch für überwachtes Lernen?", t7_qa: "Markierte Daten", t7_qb: "Keine Daten", t7_qc: "Zufall", t7_qd: "Gar nichts",
    t7_l1: "Eingabe", t7_r1: "Bild", t7_l2: "Label", t7_r2: "Hund", t7_l3: "Vorhersage", t7_r3: "Ergebnis",
    t8_title: "Unüberwachtes Lernen", t8_text: "Die KI findet selbst Muster in Daten ohne Hilfe.", t8_inst: "Fülle die Lücke aus:", t8_h1: "Kein Lehrer.", t8_h2: "Muster erkennen.", t8_q: "Wie lernt die KI hier?", t8_qa: "Selbstständig", t8_qb: "Mit Buch", t8_qc: "Gar nicht", t8_qd: "Nur nachts",
    t8_sent: "Die KI sucht nach ___ in den Daten.", t8_qa2: "Mustern", t8_qb2: "Süßigkeiten", t8_qc2: "Schlüsseln", t8_qd2: "Fehlern",
    t9_title: "Bestärkendes Lernen", t9_text: "Lernen durch Belohnung und Bestrafung (wie beim Hundetraining).", t9_inst: "Sortiere in die Eimer:", t9_h1: "Gut oder Schlecht?", t9_h2: "Feedback-Schleife.", t9_q: "Wie nennt man dieses Lernen?", t9_qa: "Reinforcement Learning", t9_qb: "Lazy Learning", t9_qc: "Hard Learning", t9_qd: "Speed Learning",
    t9_bl1: "Belohnung", t9_bl2: "Bestrafung", t9_i1: "Punktgewinn", t9_i2: "Game Over", t9_i3: "Level Up", t9_i4: "Zeitabzug",
    t10_title: "Deep Learning", t10_text: "Tiefe neuronale Netze mit vielen Schichten.", t10_inst: "Bringe die Wörter in Ordnung:", t10_h1: "Ganz tief drin.", t10_h2: "Komplexe Strukturen.", t10_q: "Was bedeutet 'Deep' in Deep Learning?", t10_qa: "Viele Schichten", t10_qb: "Im Meer", t10_qc: "Dunkel", t10_qd: "Schwer",
    t10_w1: "Deep", t10_w2: "Learning", t10_w3: "nutzt", t10_w4: "viele", t10_w5: "Schichten", t10_w6: "im", t10_w7: "Netzwerk.",
    t11_title: "KI im Alltag", t11_text: "KI steckt heute in vielen Dingen, die wir nutzen.", t11_inst: "Markiere das richtige Wort:", t11_h1: "Überall dabei.", t11_h2: "Technik hilft.", t11_q: "Wo finden wir KI oft?", t11_qa: "Im Smartphone", t11_qb: "Im Bleistift", t11_qc: "Im Apfel", t11_qd: "In der Decke",
    t11_tk1: "Smartphones", t11_tk2: "nutzen", t11_tk3: "KI", t11_tk4: "zur", t11_tk5: "Gesichtserkennung.",
    t12_title: "NLP & Chatbots", t12_text: "Natural Language Processing hilft KI, Sprache zu verstehen.", t12_inst: "Tippe auf die Wörter:", t12_h1: "Sprechen mit KI.", t12_h2: "Verständnis.", t12_q: "Was bedeutet NLP?", t12_qa: "Natürliche Sprachverarbeitung", t12_qb: "Netter kleiner Prozessor", t12_qc: "Neu-Lern-Programm", t12_qd: "Nur-Lese-Pfad",
    t12_tap_count: "3", t12_tap_inst: "Tippe 3 Mal auf den Chatbot!",
    t13_title: "Computer Vision", t13_text: "Die Fähigkeit von Computern, Bilder und Videos zu 'sehen'.", t13_inst: "Ordne die Paare zu:", t13_h1: "Sehen lernen.", t13_h2: "Bilder analysieren.", t13_q: "Was erkennt Computer Vision?", t13_qa: "Objekte in Bildern", t13_qb: "Musikgeschmack", t13_qc: "Gerüche", t13_qd: "Gedanken",
    t13_l1: "Kamera", t13_r1: "Auge", t13_l2: "Software", t13_r2: "Gehirn", t13_l3: "Pixel", t13_r3: "Information",
    t14_title: "Virtuelle Assistenten", t14_text: "Programme wie Siri oder Alexa nutzen KI.", t14_inst: "Fülle die Lücke aus:", t14_h1: "Siri, Alexa, Google.", t14_h2: "Stimmen hören.", t14_q: "Was machen diese Assistenten?", t14_qa: "Sprachbefehle ausführen", t14_qb: "Essen kochen", t14_qc: "Zimmer aufräumen", t14_qd: "Schlafen",
    t14_sent: "Assistenten reagieren auf unsere ___.", t14_qa2: "Stimme", t14_qb2: "Gedanken", t14_qc2: "Schritte", t14_qd2: "Träume",
    t15_title: "Starke vs. Schwache KI", t15_text: "Schwache KI kann nur eine Aufgabe, starke KI wäre wie ein Mensch.", t15_inst: "Sortiere in die Eimer:", t15_h1: "Spezialist vs. Genie.", t15_h2: "Heute vs. Zukunft.", t15_q: "Welche KI haben wir heute?", t15_qa: "Schwache KI", t15_qb: "Starke KI", t15_qc: "Super KI", t15_qd: "Keine KI",
    t15_bl1: "Schwache KI", t15_bl2: "Starke KI", t15_i1: "Navigationssystem", t15_i2: "Bewusstsein", t15_i3: "Spamfilter", t15_i4: "Universelles Genie"
  },
  en: {
    explorer_title: "AI Island 1: Fundamentals",
    t1_title: "What is AI?", t1_text: "Artificial Intelligence (AI) lets machines think and learn like humans.", t1_inst: "Match the pairs:", t1_h1: "Machine or human?", t1_h2: "Connect the terms.", t1_q: "What does AI stand for?", t1_qa: "Artificial Intelligence", t1_qb: "Actual Information", t1_qc: "Advanced Interpreter", t1_qd: "Already Interconnected",
    t1_l1: "Artificial", t1_r1: "Man-made", t1_l2: "Intelligence", t1_r2: "Ability to learn", t1_l3: "Algorithm", t1_r3: "Set of rules",
    t2_title: "The Turing Test", t2_text: "A test to determine if a machine shows true thinking ability.", t2_inst: "Fill in the blank:", t2_h1: "Alan Turing.", t2_h2: "Human or machine?", t2_q: "Who invented the Turing Test?", t2_qa: "Alan Turing", t2_qb: "Albert Einstein", t2_qc: "Bill Gates", t2_qd: "Steve Jobs",
    t2_sent: "In the Turing Test, a human tries to guess if they are talking to a ___.", t2_qa2: "machine", t2_qb2: "plant", t2_qc2: "cat", t2_qd2: "sun",
    t3_title: "History of AI", t3_text: "The idea of AI is old, but research really started in the 1950s.", t3_inst: "Sort into buckets:", t3_h1: "Old or New?", t3_h2: "Tech milestones.", t3_q: "In which decade was the term AI coined?", t3_qa: "1950s", t3_qb: "1850s", t3_qc: "1990s", t3_qd: "2010s",
    t3_bl1: "Early AI", t3_bl2: "Modern AI", t3_i1: "Logic Theorist", t3_i2: "ChatGPT", t3_i3: "Chess Computer", t3_i4: "Image Recognition",
    t4_title: "Learning from Data", t4_text: "Machine Learning means computers learn without being directly programmed.", t4_inst: "Put the words in order:", t4_h1: "Experience is key.", t4_h2: "Computers learn from examples.", t4_q: "What does AI need to learn?", t4_qa: "Data", t4_qb: "Fuel", t4_qc: "Food", t4_qd: "Sleep",
    t4_w1: "Computers", t4_w2: "learn", t4_w3: "from", t4_w4: "many", t4_w5: "different", t4_w6: "data", t4_w7: "sets.",
    t5_title: "Algorithms", t5_text: "An algorithm is like a recipe for the computer.", t5_inst: "Highlight the correct word:", t5_h1: "Step by step.", t5_h2: "Following instructions.", t5_q: "What does an algorithm describe?", t5_qa: "A solution path", t5_qb: "A monitor", t5_qc: "A power cable", t5_qd: "A keyboard",
    t5_tk1: "An", t5_tk2: "algorithm", t5_tk3: "is", t5_tk4: "a", t5_tk5: "precise", t5_tk6: "instruction.",
    t6_title: "Neural Networks", t6_text: "They are modeled after the human brain.", t6_inst: "Count the neurons:", t6_h1: "Biological model.", t6_h2: "Networking is key.", t6_q: "What do neural networks mimic?", t6_qa: "The brain", t6_qb: "The heart", t6_qc: "The lungs", t6_qd: "The stomach",
    t6_tap_count: "5", t6_tap_inst: "Tap the network 5 times!",
    t7_title: "Supervised Learning", t7_text: "AI learns with labeled examples (e.g., dog/cat).", t7_inst: "Match the pairs:", t7_h1: "Using labels.", t7_h2: "Teacher gives feedback.", t7_q: "What is typical for supervised learning?", t7_qa: "Labeled data", t7_qb: "No data", t7_qc: "Randomness", t7_qd: "Nothing",
    t7_l1: "Input", t7_r1: "Image", t7_l2: "Label", t7_r2: "Dog", t7_l3: "Prediction", t7_r3: "Result",
    t8_title: "Unsupervised Learning", t8_text: "AI finds patterns in data on its own without help.", t8_inst: "Fill in the blank:", t8_h1: "No teacher.", t8_h2: "Recognizing patterns.", t8_q: "How does AI learn here?", t8_qa: "Independently", t8_qb: "With a book", t8_qc: "Not at all", t8_qd: "Only at night",
    t8_sent: "AI looks for ___ in the data.", t8_qa2: "patterns", t8_qb2: "sweets", t8_qc2: "keys", t8_qd2: "errors",
    t9_title: "Reinforcement Learning", t9_text: "Learning through reward and punishment (like dog training).", t9_inst: "Sort into buckets:", t9_h1: "Good or Bad?", t9_h2: "Feedback loop.", t9_q: "What is this learning called?", t9_qa: "Reinforcement Learning", t9_qb: "Lazy Learning", t9_qc: "Hard Learning", t9_qd: "Speed Learning",
    t9_bl1: "Reward", t9_bl2: "Punishment", t9_i1: "Gaining points", t9_i2: "Game Over", t9_i3: "Level Up", t9_i4: "Time deduction",
    t10_title: "Deep Learning", t10_text: "Deep neural networks with many layers.", t10_inst: "Put the words in order:", t10_h1: "Deep inside.", t10_h2: "Complex structures.", t10_q: "What does 'Deep' mean in Deep Learning?", t10_qa: "Many layers", t10_qb: "In the ocean", t10_qc: "Dark", t10_qd: "Heavy",
    t10_w1: "Deep", t10_w2: "Learning", t10_w3: "uses", t10_w4: "many", t10_w5: "layers", t10_w6: "in", t10_w7: "the", t10_w8: "network.",
    t11_title: "AI in Everyday Life", t11_text: "AI is in many things we use today.", t11_inst: "Highlight the correct word:", t11_h1: "Everywhere with us.", t11_h2: "Tech helps.", t11_q: "Where do we often find AI?", t11_qa: "In the smartphone", t11_qb: "In the pencil", t11_qc: "In the apple", t11_qd: "In the blanket",
    t11_tk1: "Smartphones", t11_tk2: "use", t11_tk3: "AI", t11_tk4: "for", t11_tk5: "face", t11_tk6: "recognition.",
    t12_title: "NLP & Chatbots", t12_text: "Natural Language Processing helps AI understand language.", t12_inst: "Tap on the items:", t12_h1: "Talking with AI.", t12_h2: "Understanding.", t12_q: "What does NLP stand for?", t12_qa: "Natural Language Processing", t12_qb: "Nice Little Processor", t12_qc: "New Learning Program", t12_qd: "No Logic Path",
    t12_tap_count: "3", t12_tap_inst: "Tap the chatbot 3 times!",
    t13_title: "Computer Vision", t13_text: "The ability of computers to 'see' images and videos.", t13_inst: "Match the pairs:", t13_h1: "Learning to see.", t13_h2: "Analyzing images.", t13_q: "What does Computer Vision recognize?", t13_qa: "Objects in images", t13_qb: "Music taste", t13_qc: "Smells", t13_qd: "Thoughts",
    t13_l1: "Camera", t13_r1: "Eye", t13_l2: "Software", t13_r2: "Brain", t13_l3: "Pixel", t13_r3: "Information",
    t14_title: "Virtual Assistants", t14_text: "Programs like Siri or Alexa use AI.", t14_inst: "Fill in the blank:", t14_h1: "Siri, Alexa, Google.", t14_h2: "Hearing voices.", t14_q: "What do these assistants do?", t14_qa: "Execute voice commands", t14_qb: "Cook food", t14_qc: "Clean the room", t14_qd: "Sleep",
    t14_sent: "Assistants react to our ___.", t14_qa2: "voice", t14_qb2: "thoughts", t14_qc2: "steps", t14_qd2: "dreams",
    t15_title: "Strong vs. Weak AI", t15_text: "Weak AI can only do one task; strong AI would be like a human.", t15_inst: "Sort into buckets:", t15_h1: "Specialist vs. Genius.", t15_h2: "Today vs. Future.", t15_q: "Which AI do we have today?", t15_qa: "Weak AI", t15_qb: "Strong AI", t15_qc: "Super AI", t15_qd: "No AI",
    t15_bl1: "Weak AI", t15_bl2: "Strong AI", t15_i1: "Navigation system", t15_i2: "Consciousness", t15_i3: "Spam filter", t15_i4: "Universal genius"
  },
  hu: {
    explorer_title: "KI Sziget 1: Alapok",
    t1_title: "Mi az a MI?", t1_text: "A Mesterséges Intelligencia (MI) lehetővé teszi, hogy a gépek úgy gondolkodjanak és tanuljanak, mint az emberek.", t1_inst: "Párosítsd össze:", t1_h1: "Gép vagy ember?", t1_h2: "Kösd össze a fogalmakat.", t1_q: "Mit jelent a MI rövidítés?", t1_qa: "Mesterséges Intelligencia", t1_qb: "Minden Információ", t1_qc: "Majdnem Intelligens", t1_qd: "Mai Ismeret",
    t1_l1: "Mesterséges", t1_r1: "Ember alkotta", t1_l2: "Intelligencia", t1_r2: "Tanulási képesség", t1_l3: "Algoritmus", t1_r3: "Számítási szabály",
    t2_title: "A Turing-teszt", t2_text: "Egy teszt annak megállapítására, hogy egy gép mutat-e valódi gondolkodási képességet.", t2_inst: "Töltsd ki a hiányt:", t2_h1: "Alan Turing.", t2_h2: "Ember vagy gép?", t2_q: "Ki találta fel a Turing-tesztet?", t2_qa: "Alan Turing", t2_qb: "Albert Einstein", t2_qc: "Bill Gates", t2_qd: "Steve Jobs",
    t2_sent: "A Turing-teszt során egy ember próbálja kitalálni, hogy egy ___ beszélget-e.", t2_qa2: "géppel", t2_qb2: "növénnyel", t2_qc2: "macskával", t2_qd2: "nappal",
    t3_title: "A MI története", t3_text: "A MI ötlete régi, de a kutatás igazán az 1950-es években kezdődött.", t3_inst: "Válogasd szét:", t3_h1: "Régi vagy új?", t3_h2: "Technikai mérföldkövek.", t3_q: "Melyik évtizedben született meg a MI kifejezés?", t3_qa: "1950-es évek", t3_qb: "1850-es évek", t3_qc: "1990-es évek", t3_qd: "2010-es évek",
    t3_bl1: "Korai MI", t3_bl2: "Modern MI", t3_i1: "Logikai Teoretikus", t3_i2: "ChatGPT", t3_i3: "Sakk-számítógép", t3_i4: "Képfelismerés",
    t4_title: "Tanulás adatokból", t4_text: "A gépi tanulás azt jelenti, hogy a számítógépek közvetlen programozás nélkül tanulnak.", t4_inst: "Tedd sorrendbe a szavakat:", t4_h1: "A tapasztalat okosít.", t4_h2: "A gépek példákból tanulnak.", t4_q: "Mire van szüksége a MI-nek a tanuláshoz?", t4_qa: "Adatokra", t4_qb: "Benzinre", t4_qc: "Ételre", t4_qd: "Alvásra",
    t4_w1: "A számítógépek", t4_w2: "sok", t4_w3: "különféle", t4_w4: "adatból", t4_w5: "tanulnak.", t4_w6: "", t4_w7: "",
    t5_title: "Algoritmusok", t5_text: "Az algoritmus olyan, mint egy recept a számítógép számára.", t5_inst: "Jelöld meg a helyes szót:", t5_h1: "Lépésről lépésre.", t5_h2: "Utasítások követése.", t5_q: "Mit ír le egy algoritmus?", t5_qa: "Egy megoldási utat", t5_qb: "Egy monitort", t5_qc: "Egy tápkábelt", t5_qd: "Egy billentyűzetet",
    t5_tk1: "Az", t5_tk2: "algoritmus", t5_tk3: "egy", t5_tk4: "pontos", t5_tk5: "utasítás.",
    t6_title: "Neurális hálózatok", t6_text: "Az emberi agy működését utánozzák.", t6_inst: "Számold meg a neuronokat:", t6_h1: "Biológiai minta.", t6_h2: "A hálózat a lényeg.", t6_q: "Mit utánoznak a neurális hálók?", t6_qa: "Az agyat", t6_qb: "A szívet", t6_qc: "A tüdőt", t6_qd: "A gyomrot",
    t6_tap_count: "5", t6_tap_inst: "Kattints 5-ször a hálózatra!",
    t7_title: "Felügyelt tanulás", t7_text: "A MI feliratozott példákból tanul (pl. kutya/macska).", t7_inst: "Párosítsd össze:", t7_h1: "Címkék használata.", t7_h2: "A tanár visszajelzést ad.", t7_q: "Mi jellemző a felügyelt tanulásra?", t7_qa: "Címkézett adatok", t7_qb: "Nincsenek adatok", t7_qc: "Véletlenszerűség", t7_qd: "Semmi",
    t1_l1: "Bevitel", t1_r1: "Kép", t1_l2: "Címke", t1_r2: "Kutya", t1_l3: "Jóslat", t1_r3: "Eredmény",
    t8_title: "Nem felügyelt tanulás", t8_text: "A MI magától talál mintákat az adatokban segítség nélkül.", t8_inst: "Töltsd ki a hiányt:", t8_h1: "Nincs tanár.", t8_h2: "Minták felismerése.", t8_q: "Hogyan tanul itt a MI?", t8_qa: "Önállóan", t8_qb: "Könyvből", t8_qc: "Sehogy", t8_qd: "Csak éjjel",
    t8_sent: "A MI ___ keres az adatokban.", t8_qa2: "mintákat", t8_qb2: "édességet", t8_qc2: "kulcsokat", t8_qd2: "hibákat",
    t9_title: "Megerősítéses tanulás", t9_text: "Tanulás jutalmazással és büntetéssel (mint a kutyatréningnél).", t9_inst: "Válogasd szét:", t9_h1: "Jó vagy rossz?", t9_h2: "Visszacsatolás.", t9_q: "Hogy hívják ezt a tanulást?", t9_qa: "Reinforcement Learning", t9_qb: "Lusta tanulás", t9_qc: "Nehéz tanulás", t9_qd: "Gyors tanulás",
    t9_bl1: "Jutalom", t9_bl2: "Büntetés", t9_i1: "Pontszerzés", t9_i2: "Game Over", t9_i3: "Szintugrás", t9_i4: "Időlevonás",
    t10_title: "Deep Learning", t10_text: "Mély neurális hálózatok sok réteggel.", t10_inst: "Tedd sorrendbe a szavakat:", t10_h1: "Mélyen belül.", t10_h2: "Összetett szerkezetek.", t10_q: "Mit jelent a 'Deep' a Deep Learningben?", t10_qa: "Sok réteg", t10_qb: "A tengerben", t10_qc: "Sötét", t10_qd: "Nehéz",
    t10_w1: "A Deep", t10_w2: "Learning", t10_w3: "sok", t10_w4: "réteget", t10_w5: "használ", t10_w6: "a hálózatban.", t10_w7: "",
    t11_title: "MI a mindennapokban", t11_text: "A MI ma már sok mindenben benne van, amit használunk.", t11_inst: "Jelöld meg a helyes szót:", t11_h1: "Mindenhol ott van.", t11_h2: "A technika segít.", t11_q: "Hol találunk gyakran MI-t?", t11_qa: "Okostelefonban", t11_qb: "Ceruzában", t11_qc: "Almában", t11_qd: "Takaróban",
    t11_tk1: "Az", t11_tk2: "okostelefonok", t11_tk3: "MI-t", t11_tk4: "használnak", t11_tk5: "arcfelismeréshez.",
    t12_title: "NLP & Chatbotok", t12_text: "A természetes nyelvfeldolgozás segít a MI-nek érteni a nyelvet.", t12_inst: "Kattints az elemekre:", t12_h1: "Beszélgetés MI-vel.", t12_h2: "Megértés.", t12_q: "Mit jelent az NLP?", t12_qa: "Természetes nyelvfeldolgozás", t12_qb: "Nagyon Lassú Processzor", t12_qc: "Új Lemez Program", t12_qd: "Nincs Logikai Pálya",
    t12_tap_count: "3", t12_tap_inst: "Kattints a chatbotra 3-szor!",
    t13_title: "Gépi látás", t13_text: "A számítógépek képessége, hogy 'lássák' a képeket és videókat.", t13_inst: "Párosítsd össze:", t13_h1: "Tanulni látni.", t13_h2: "Képek elemzése.", t13_q: "Mit ismer fel a gépi látás?", t13_qa: "Objektumokat képeken", t13_qb: "Zenei ízlést", t13_qc: "Szagokat", t13_qd: "Gondolatokat",
    t13_l1: "Kamera", t13_r1: "Szem", t13_l2: "Szoftver", t13_r2: "Agy", t13_l3: "Pixel", t13_r3: "Információ",
    t14_title: "Virtuális asszisztensek", t14_text: "Olyan programok, mint a Siri vagy az Alexa, MI-t használnak.", t14_inst: "Töltsd ki a hiányt:", t14_h1: "Siri, Alexa, Google.", t14_h2: "Hangok hallása.", t14_q: "Mit csinálnak ezek az asszisztensek?", t14_qa: "Hangutasításokat hajtanak végre", t14_qb: "Ételt főznek", t14_qc: "Szobát takarítanak", t14_qd: "Alszanak",
    t14_sent: "Az asszisztensek a ___ reagálnak.", t14_qa2: "hangunkra", t14_qb2: "gondolatainkra", t14_qc2: "lépteinkre", t14_qd2: "álmainkra",
    t15_title: "Erős vs. Gyenge MI", t15_text: "A gyenge MI csak egy feladatra képes, az erős olyan lenne, mint az ember.", t15_inst: "Válogasd szét:", t15_h1: "Specialista vs. Zseni.", t15_h2: "Ma vs. Jövő.", t15_q: "Milyen MI-nk van ma?", t15_qa: "Gyenge MI", t15_qb: "Erős MI", t15_qc: "Szuper MI", t15_qd: "Nincs MI",
    t15_bl1: "Gyenge MI", t15_bl2: "Erős MI", t15_i1: "Navigációs rendszer", t15_i2: "Öntudat", t15_i3: "Spamszűrő", t15_i4: "Univerzális zseni"
  },
  ro: {
    explorer_title: "IA Insula 1: Fundamente",
    t1_title: "Ce este IA?", t1_text: "Inteligența Artificială (IA) permite mașinilor să gândească și să învețe ca oamenii.", t1_inst: "Potrivește perechile:", t1_h1: "Mașină sau om?", t1_h2: "Conectează termenii.", t1_q: "Ce înseamnă abrevierea IA?", t1_qa: "Inteligență Artificială", t1_qb: "Informație Actuală", t1_qc: "Interpret Avansat", t1_qd: "Idee Absentă",
    t1_l1: "Artificial", t1_r1: "Creat de om", t1_l2: "Inteligență", t1_r2: "Capacitatea de a învăța", t1_l3: "Algoritm", t1_r3: "Regulă de calcul",
    t2_title: "Testul Turing", t2_text: "Un test pentru a determina dacă o mașină arată o capacitate reală de gândire.", t2_inst: "Completează spațiul liber:", t2_h1: "Alan Turing.", t2_h2: "Om sau mașină?", t2_q: "Cine a inventat testul Turing?", t2_qa: "Alan Turing", t2_qb: "Albert Einstein", t2_qc: "Bill Gates", t2_qd: "Steve Jobs",
    t2_sent: "În testul Turing, un om încearcă să ghicească dacă vorbește cu o ___.", t2_qa2: "mașină", t2_qb2: "plantă", t2_qc2: "pisică", t2_qd2: "soare",
    t3_title: "Istoria IA", t3_text: "Ideea de IA este veche, dar cercetarea a început cu adevărat în anii 1950.", t3_inst: "Sortează în găleți:", t3_h1: "Vechi sau Nou?", t3_h2: "Repere tehnice.", t3_q: "În ce deceniu a fost inventat termenul IA?", t3_qa: "Anii 1950", t3_qb: "Anii 1850", t3_qc: "Anii 1990", t3_qd: "Anii 2010",
    t3_bl1: "IA timpurie", t3_bl2: "IA modernă", t3_i1: "Logic Theorist", t3_i2: "ChatGPT", t3_i3: "Computer de șah", t3_i4: "Recunoaștere imagini",
    t4_title: "Învățarea din date", t4_text: "Învățarea automată înseamnă că computerele învață fără a fi programate direct.", t4_inst: "Pune cuvintele în ordine:", t4_h1: "Experiența contează.", t4_h2: "Computerele învață din exemple.", t4_q: "De ce are nevoie IA pentru a învăța?", t4_qa: "Date", t4_qb: "Benzină", t4_qc: "Mâncare", t4_qd: "Somn",
    t4_w1: "Computerele", t4_w2: "învață", t4_w3: "din", t4_w4: "multe", t4_w5: "date", t4_w6: "diferite.", t4_w7: "",
    t5_title: "Algoritmi", t5_text: "Un algoritm este ca o rețetă pentru computer.", t5_inst: "Evidențiază cuvântul corect:", t5_h1: "Pas cu pas.", t5_h2: "Urmarea instrucțiunilor.", t5_q: "Ce descrie un algoritm?", t5_qa: "O cale de soluționare", t5_qb: "Un monitor", t5_qc: "Un cablu", t5_qd: "O tastatură",
    t5_tk1: "Un", t5_tk2: "algoritm", t5_tk3: "este", t5_tk4: "o", t5_tk5: "instrucțiune", t5_tk6: "precisă.",
    t6_title: "Rețele neuronale", t6_text: "Sunt modelate după creierul uman.", t6_inst: "Numără neuronii:", t6_h1: "Model biologic.", t6_h2: "Rețeaua este totul.", t6_q: "Ce imită rețelele neuronale?", t6_qa: "Creierul", t6_qb: "Inima", t6_qc: "Plămânii", t6_qd: "Stomacul",
    t6_tap_count: "5", t6_tap_inst: "Atinge rețeaua de 5 ori!",
    t7_title: "Învățare supravegheată", t7_text: "IA învață cu exemple etichetate (ex. câine/pisică).", t7_inst: "Potrivește perechile:", t7_h1: "Folosirea etichetelor.", t7_h2: "Profesorul dă feedback.", t7_q: "Ce este tipic pentru învățarea supravegheată?", t7_qa: "Date etichetate", t7_qb: "Fără date", t7_qc: "Hazard", t7_qd: "Nimic",
    t7_l1: "Intrare", t7_r1: "Imagine", t7_l2: "Etichetă", t7_r2: "Câine", t7_l3: "Predicție", t7_r3: "Rezultat",
    t8_title: "Învățare nesupravegheată", t8_text: "IA găsește singură modele în date fără ajutor.", t8_inst: "Completează spațiul liber:", t8_h1: "Fără profesor.", t8_h2: "Recunoașterea modelelor.", t8_q: "Cum învață IA aici?", t8_qa: "Independent", t8_qb: "Cu o carte", t8_qc: "Deloc", t8_qd: "Doar noaptea",
    t8_sent: "IA caută ___ în date.", t8_qa2: "modele", t8_qb2: "dulciuri", t8_qc2: "chei", t8_qd2: "erori",
    t9_title: "Învățare prin întărire", t9_text: "Învățare prin recompensă și pedeapsă (ca la dresajul câinilor).", t9_inst: "Sortează în găleți:", t9_h1: "Bine sau Rău?", t9_h2: "Buclă de feedback.", t9_q: "Cum se numește această învățare?", t9_qa: "Reinforcement Learning", t9_qb: "Lazy Learning", t9_qc: "Hard Learning", t9_qd: "Speed Learning",
    t9_bl1: "Recompensă", t9_bl2: "Pedeapsă", t9_i1: "Câștig puncte", t9_i2: "Game Over", t9_i3: "Level Up", t9_i4: "Deducere timp",
    t10_title: "Deep Learning", t10_text: "Rețele neuronale adânci cu multe straturi.", t10_inst: "Pune cuvintele în ordine:", t10_h1: "Adânc în interior.", t10_h2: "Structuri complexe.", t10_q: "Ce înseamnă 'Deep' în Deep Learning?", t10_qa: "Multe straturi", t10_qb: "În ocean", t10_qc: "Întuneric", t10_qd: "Greu",
    t10_w1: "Deep", t10_w2: "Learning", t10_w3: "folosește", t10_w4: "multe", t10_w5: "straturi", t10_w6: "în", t10_w7: "rețea.",
    t11_title: "IA în viața de zi cu zi", t11_text: "IA se află astăzi în multe lucruri pe care le folosim.", t11_inst: "Evidențiază cuvântul corect:", t11_h1: "Peste tot cu noi.", t11_h2: "Tehnica ajută.", t11_q: "Unde găsim adesea IA?", t11_qa: "În smartphone", t11_qb: "În creion", t11_qc: "În măr", t11_qd: "În pătură",
    t11_tk1: "Smartphones", t11_tk2: "folosesc", t11_tk3: "IA", t11_tk4: "pentru", t11_tk5: "recunoașterea", t11_tk6: "facială.",
    t12_title: "NLP & Chatboți", t12_text: "Procesarea limbajului natural ajută IA să înțeleagă limba.", t12_inst: "Atinge elementele:", t12_h1: "Vorbind cu IA.", t12_h2: "Înțelegere.", t12_q: "Ce înseamnă NLP?", t12_qa: "Procesarea Limbajului Natural", t12_qb: "Procesor Mic și Lent", t12_qc: "Program Nou de Învățare", t12_qd: "Fără Cale Logică",
    t12_tap_count: "3", t12_tap_inst: "Atinge chatbot-ul de 3 ori!",
    t13_title: "Computer Vision", t13_text: "Capacitatea computerelor de a 'vedea' imagini și videoclipuri.", t13_inst: "Potrivește perechile:", t13_h1: "Învățând să vadă.", t13_h2: "Analizarea imaginilor.", t13_q: "Ce recunoaște Computer Vision?", t13_qa: "Obiecte în imagini", t13_qb: "Gusturi muzicale", t13_qc: "Mirosuri", t13_qd: "Gânduri",
    t13_l1: "Cameră", t13_r1: "Ochi", t13_l2: "Software", t13_r2: "Creier", t13_l3: "Pixel", t13_r3: "Informație",
    t14_title: "Asistenți virtuali", t14_text: "Programe precum Siri sau Alexa folosesc IA.", t14_inst: "Completează spațiul liber:", t14_h1: "Siri, Alexa, Google.", t14_h2: "Auzind voci.", t14_q: "Ce fac acești asistenți?", t14_qa: "Execută comenzi vocale", t14_qb: "Gătesc mâncare", t14_qc: "Curăță camera", t14_qd: "Dorm",
    t14_sent: "Asistenții reacționează la ___ noastră.", t14_qa2: "vocea", t14_qb2: "gândurile", t14_qc2: "pașii", t14_qd2: "visele",
    t15_title: "IA Slabă vs. Puternică", t15_text: "IA slabă poate face doar o sarcină; IA puternică ar fi ca un om.", t15_inst: "Sortează în găleți:", t15_h1: "Specialist vs. Geniu.", t15_h2: "Azi vs. Viitor.", t15_q: "Ce fel de IA avem astăzi?", t15_qa: "IA Slabă", t15_qb: "IA Puternică", t15_qc: "Super IA", t15_qd: "Fără IA",
    t15_bl1: "IA Slabă", t15_bl2: "IA Puternică", t15_i1: "Sistem navigație", t15_i2: "Conștiință", t15_i3: "Filtru spam", t15_i4: "Geniu universal"
  }
};

export const INFO_K7_I1_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "simple-icon", icon: "🤖", color: "#2196F3" },
    interactive: { type: "match-pairs", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", pairs: [{left:"t1_l1",right:"t1_r1"},{left:"t1_l2",right:"t1_r2"},{left:"t1_l3",right:"t1_r3"}] },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" }
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "👤", color: "#607D8B" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" }
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "icon-grid", items: [{emoji:"📜",label:"Past"},{emoji:"🚀",label:"Future"}] },
    interactive: { type: "drag-to-bucket", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", buckets: [{id:"b1",label:"t3_bl1"},{id:"b2",label:"t3_bl2"}], items: [{text:"t3_i1",bucketId:"b1"},{text:"t3_i2",bucketId:"b2"},{text:"t3_i3",bucketId:"b1"},{text:"t3_i4",bucketId:"b2"}] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "📊", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", words: ["t4_w1", "t4_w2", "t4_w3", "t4_w4", "t4_w5", "t4_w6", "t4_w7"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6].slice(0, 6) },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "📝", color: "#FFC107" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6"].filter(x=>x!==undefined), correctIndices: [1] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" }
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "simple-icon", icon: "🧠", color: "#E91E63" },
    interactive: { type: "tap-count", instruction: "t6_tap_inst", tapCount: { emoji: "🧠", count: 5 } },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" }
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "🏷️", color: "#9C27B0" },
    interactive: { type: "match-pairs", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", pairs: [{left:"t7_l1",right:"t7_r1"},{left:"t7_l2",right:"t7_r2"},{left:"t7_l3",right:"t7_r3"}] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" }
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "simple-icon", icon: "🔍", color: "#00BCD4" },
    interactive: { type: "gap-fill", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", sentence: "t8_sent", choices: ["t8_qa2", "t8_qb2", "t8_qc2", "t8_qd2"], correctIndex: 0 },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" }
  },
  {
    infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "icon-grid", items: [{emoji:"🏆",label:"Reward"},{emoji:"⚠️",label:"Penalty"}] },
    interactive: { type: "drag-to-bucket", instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2", buckets: [{id:"b1",label:"t9_bl1"},{id:"b2",label:"t9_bl2"}], items: [{text:"t9_i1",bucketId:"b1"},{text:"t9_i2",bucketId:"b2"},{text:"t9_i3",bucketId:"b1"},{text:"t9_i4",bucketId:"b2"}] },
    quiz: { question: "t9_q", choices: ["t9_qa", "t9_qb", "t9_qc", "t9_qd"], answer: "t9_qa" }
  },
  {
    infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "simple-icon", icon: "🌊", color: "#3F51B5" },
    interactive: { type: "word-order", instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2", words: ["t10_w1", "t10_w2", "t10_w3", "t10_w4", "t10_w5", "t10_w6", "t10_w7"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6].slice(0, 7) },
    quiz: { question: "t10_q", choices: ["t10_qa", "t10_qb", "t10_qc", "t10_qd"], answer: "t10_qa" }
  },
  {
    infoTitle: "t11_title", infoText: "t11_text",
    svg: { type: "simple-icon", icon: "📱", color: "#000000" },
    interactive: { type: "highlight-text", instruction: "t11_inst", hint1: "t11_h1", hint2: "t11_h2", tokens: ["t11_tk1","t11_tk2","t11_tk3","t11_tk4","t11_tk5","t11_tk6"].filter(x=>x!==undefined), correctIndices: [0,2] },
    quiz: { question: "t11_q", choices: ["t11_qa", "t11_qb", "t11_qc", "t11_qd"], answer: "t11_qa" }
  },
  {
    infoTitle: "t12_title", infoText: "t12_text",
    svg: { type: "simple-icon", icon: "💬", color: "#0084FF" },
    interactive: { type: "tap-count", instruction: "t12_tap_inst", tapCount: { emoji: "💬", count: 3 } },
    quiz: { question: "t12_q", choices: ["t12_qa", "t12_qb", "t12_qc", "t12_qd"], answer: "t12_qa" }
  },
  {
    infoTitle: "t13_title", infoText: "t13_text",
    svg: { type: "simple-icon", icon: "👁️", color: "#795548" },
    interactive: { type: "match-pairs", instruction: "t13_inst", hint1: "t13_h1", hint2: "t13_h2", pairs: [{left:"t13_l1",right:"t13_r1"},{left:"t13_l2",right:"t13_r2"},{left:"t13_l3",right:"t13_r3"}] },
    quiz: { question: "t13_q", choices: ["t13_qa", "t13_qb", "t13_qc", "t13_qd"], answer: "t13_qa" }
  },
  {
    infoTitle: "t14_title", infoText: "t14_text",
    svg: { type: "simple-icon", icon: "🔊", color: "#F44336" },
    interactive: { type: "gap-fill", instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2", sentence: "t14_sent", choices: ["t14_qa2", "t14_qb2", "t14_qc2", "t14_qd2"], correctIndex: 0 },
    quiz: { question: "t14_q", choices: ["t14_qa", "t14_qb", "t14_qc", "t14_qd"], answer: "t14_qa" }
  },
  {
    infoTitle: "t15_title", infoText: "t15_text",
    svg: { type: "icon-grid", items: [{emoji:"🔋",label:"Weak"},{emoji:"⚡",label:"Strong"}] },
    interactive: { type: "drag-to-bucket", instruction: "t15_inst", hint1: "t15_h1", hint2: "t15_h2", buckets: [{id:"b1",label:"t15_bl1"},{id:"b2",label:"t15_bl2"}], items: [{text:"t15_i1",bucketId:"b1"},{text:"t15_i2",bucketId:"b2"},{text:"t15_i3",bucketId:"b1"},{text:"t15_i4",bucketId:"b2"}] },
    quiz: { question: "t15_q", choices: ["t15_qa", "t15_qb", "t15_qc", "t15_qd"], answer: "t15_qa" }
  }
];

