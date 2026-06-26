// @ts-nocheck
// lib/explorerPools/aiK8_i7.ts
import type { PoolTopicDef } from "./types";

export const INFO_K8_I7_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "KI Grundlagen & Geschichte",
    t1_title: "Was ist KI?", t1_text: "Künstliche Intelligenz (KI) ist die Fähigkeit von Maschinen, Aufgaben auszuführen, die normalerweise menschliche Intelligenz erfordern.", t1_inst: "Ordne die Paare zu:", t1_h1: "Maschine vs Mensch", t1_h2: "Was macht KI?", t1_q: "Was beschreibt KI am besten?", t1_qa: "Simulation menschlicher Intelligenz", t1_qb: "Ein Taschenrechner", t1_qc: "Ein einfacher Motor", t1_qd: "Nur ein Bildschirm",
    t1_l1: "KI", t1_r1: "Problemlösung", t1_l2: "Mensch", t1_r2: "Natürliche Intelligenz", t1_l3: "Algorithmus", t1_r3: "Regelsatz",
    t2_title: "Alan Turing", t2_text: "Alan Turing war ein Pionier der Informatik und schlug den 'Turing-Test' vor, um Maschinen-Intelligenz zu prüfen.", t2_inst: "Fülle die Lücke aus:", t2_h1: "Pionier der Informatik", t2_h2: "Der Test-Name.", t2_q: "Wer erfand den Turing-Test?", t2_qa: "Alan Turing", t2_qb: "Bill Gates", t2_qc: "Steve Jobs", t2_qd: "Elon Musk",
    t2_sent: "Der Turing-Test prüft, ob eine ___ intelligent ist.", t2_qa2: "Maschine", t2_qb2: "Pflanze", t2_qc2: "Tastatur", t2_qd2: "Maus",
    t3_title: "Maschinelles Lernen", t3_text: "ML ist ein Teilbereich der KI, bei dem Computer aus Daten lernen, ohne explizit programmiert zu werden.", t3_inst: "Sortiere in die Eimer:", t3_h1: "Lernen vs Programmieren.", t3_h2: "Daten sind der Schlüssel.", t3_q: "Was braucht ML zum Lernen?", t3_qa: "Daten", t3_qb: "Kaffee", t3_qc: "Einen Hammer", t3_qd: "Nur Strom",
    t3_bl1: "Klassisch", t3_bl2: "KI/ML", t3_i1: "Feste Regeln", t3_i2: "Mustererkennung", t3_i3: "Statische Logik", t3_i4: "Selbstverbesserung",
    t4_title: "Neuronale Netze", t4_text: "Neuronale Netze sind Computersysteme, die grob dem menschlichen Gehirn nachempfunden sind.", t4_inst: "Bringe die Wörter in Ordnung:", t4_h1: "Wie im Gehirn.", t4_h2: "Künstliche Neuronen.", t4_q: "Was ist die Basis neuronaler Netze?", t4_qa: "Künstliche Neuronen", t4_qb: "Zahnräder", t4_qc: "Wasserleitungen", t4_qd: "Batterien",
    t4_w1: "Künstliche", t4_w2: "Neuronen", t4_w3: "leiten", t4_w4: "Signale", t4_w5: "im", t4_w6: "Netz", t4_w7: "weiter.",
    t5_title: "Deep Learning", t5_text: "Deep Learning nutzt vielschichtige neuronale Netze für komplexe Aufgaben wie Bilderkennung.", t5_inst: "Markiere die zwei Wörter, die den Namen der Methode bilden:", t5_h1: "Tiefe Schichten.", t5_h2: "Komplexes Lernen.", t5_q: "Was bedeutet 'Deep' in Deep Learning?", t5_qa: "Viele Schichten", t5_qb: "Unter Wasser", t5_qc: "Dunkle Farben", t5_qd: "Schwergewicht",
    t5_tk1: "Deep", t5_tk2: "Learning", t5_tk3: "benötigt", t5_tk4: "sehr", t5_tk5: "viele", t5_tk6: "Daten.",
    t6_title: "Überwachtes Lernen", t6_text: "Beim Supervised Learning lernt die KI mit gelabelten Daten (Eingabe + Ergebnis).", t6_inst: "Ordne die Paare zu:", t6_h1: "Input + Label.", t6_h2: "Der Lehrer gibt Antworten.", t6_q: "Was ist typisch für überwachtes Lernen?", t6_qa: "Gelabelte Daten", t6_qb: "Zufällige Raten", t6_qc: "Keine Daten", t6_qd: "Nur Hardware",
    t6_l1: "Eingabe", t6_r1: "Bild", t6_l2: "Label", t6_r2: "Hund", t6_l3: "Ziel", t6_r3: "Vorhersage",
    t7_title: "Unüberwachtes Lernen", t7_text: "Unsupervised Learning findet versteckte Muster in Daten ohne vorgegebene Labels.", t7_inst: "Fülle die Lücke aus:", t7_h1: "Keine Labels.", t7_h2: "Strukturen finden.", t7_q: "Was sucht unüberwachtes Lernen?", t7_qa: "Muster", t7_qb: "Den Lehrer", t7_qc: "Das Passwort", t7_qd: "Den Ausschalter",
    t7_sent: "Hier lernt die KI ohne ___ Daten.", t7_qa2: "gelabelte", t7_qb2: "viele", t7_qc2: "digitale", t7_qd2: "teure",
    t8_title: "Bestärkendes Lernen", t8_text: "Reinforcement Learning lernt durch Belohnung und Bestrafung (Trial & Error).", t8_inst: "Sortiere in die Eimer:", t8_h1: "Wie beim Hundetraining.", t8_h2: "Belohnung hilft.", t8_q: "Was bekommt die KI bei Erfolg?", t8_qa: "Belohnung (Punkte)", t8_qb: "Urlaub", t8_qc: "Mehr Strom", t8_qd: "Ein Zertifikat",
    t8_bl1: "Aktion", t8_bl2: "Feedback", t8_i1: "Zug machen", t8_i2: "Punkt erhalten", t8_i3: "Roboter bewegt sich", t8_i4: "Fehlermeldung",
    t9_title: "KI vs. Mensch", t9_text: "KI ist schnell bei Daten, Menschen sind besser bei Empathie und Kreativität.", t9_inst: "Bringe die Wörter in Ordnung:", t9_h1: "Unterschiedliche Stärken.", t9_h2: "Wer kann was besser?", t9_q: "Was kann der Mensch besser als KI?", t9_qa: "Empathie zeigen", t9_qb: "Trilliarden rechnen", t9_qc: "Niemals schlafen", t9_qd: "Daten speichern",
    t9_w1: "KI", t9_w2: "kann", t9_w3: "Muster", t9_w4: "schneller", t9_w5: "erkennen", t9_w6: "als", t9_w7: "Menschen.",
    t10_title: "Daten sind Treibstoff", t10_text: "Ohne große Datenmengen (Big Data) kann moderne KI nicht effektiv trainiert werden.", t10_inst: "Markiere das Wort für den Treibstoff der KI:", t10_h1: "Viel hilft viel.", t10_h2: "Big Data.", t10_q: "Warum sind Daten wichtig für KI?", t10_qa: "Zum Lernen", t10_qb: "Zum Kühlen", t10_qc: "Als Dekoration", t10_qd: "Gegen Viren",
    t10_tk1: "Daten", t10_tk2: "sind", t10_tk3: "das", t10_tk4: "Fundament", t10_tk5: "der", t10_tk6: "KI.",
    t11_title: "KI-Modell Training", t11_text: "Training ist der Prozess, bei dem die KI ihre Parameter an die Daten anpasst.", t11_inst: "Ordne die Paare zu:", t11_h1: "Vorbereiten.", t11_h2: "Übung macht den Meister.", t11_q: "Was passiert beim Training?", t11_qa: "Parameter-Anpassung", t11_qb: "Bildschirmreinigung", t11_qc: "Kabeltausch", t11_qd: "Abschalten",
    t11_l1: "Input", t11_r1: "Trainingsdaten", t11_l2: "Prozess", t11_r2: "Lernen", t11_l3: "Output", t11_r3: "Modell",
    t12_title: "Inferenz", t12_text: "Inferenz ist der Moment, in dem das fertige KI-Modell auf neue Daten angewendet wird.", t12_inst: "Fülle die Lücke aus:", t12_h1: "Anwendung.", t12_h2: "Nach dem Training.", t12_q: "Was bedeutet Inferenz?", t12_qa: "Anwendung des Modells", t12_qb: "Neustart des PCs", t12_qc: "Löschen von Daten", t12_qd: "Programmieren",
    t12_sent: "Nach dem Training folgt die ___.", t12_qa2: "Inferenz", t12_qb2: "Pause", t12_qc2: "Installation", t12_qd2: "Hardware",
    t13_title: "Schwache KI (Narrow)", t13_text: "Schwache KI ist auf eine spezifische Aufgabe spezialisiert (z.B. Schach, Wetter).", t13_inst: "Sortiere in die Eimer:", t13_h1: "Nur ein Expertengebiet.", t13_h2: "Heutige KI.", t13_q: "Was ist ein Beispiel für schwache KI?", t13_qa: "Schachcomputer", t13_qb: "Ein Roboter, der alles kann", t13_qc: "Ein Mensch", t13_qd: "Das Internet",
    t13_bl1: "Spezifisch", t13_bl2: "Allgemein", t13_i1: "Spam-Filter", t13_i2: "Menschlicher Geist", t13_i3: "Gesichtserkennung", t13_i4: "Superintelligenz",
    t14_title: "Starke KI (General)", t14_text: "Starke KI (AGI) wäre eine Maschine mit menschenähnlichem Bewusstsein und Verstand.", t14_inst: "Bringe die Wörter in Ordnung:", t14_h1: "Science-Fiction?", t14_h2: "Kann alles wie ein Mensch.", t14_q: "Existiert AGI bereits?", t14_qa: "Nein, noch nicht", t14_qb: "Ja, in jedem Handy", t14_qc: "Seit 1950", t14_qd: "Nur in Taschenrechnern",
    t14_w1: "Starke", t14_w2: "KI", t14_w3: "wäre", t14_w4: "so", t14_w5: "intelligent", t14_w6: "wie", t14_w7: "Menschen.",
    t15_title: "Der Turing-Test", t15_text: "Ein Test, bei dem ein Mensch entscheiden muss, ob er mit einer KI oder einem Menschen chattet.", t15_inst: "Markiere das Wort für das, was uns täuschen soll:", t15_h1: "Unterscheidungstest.", t15_h2: "Bestehen oder nicht.", t15_q: "Was wird beim Turing-Test beurteilt?", t15_qa: "Verhalten", t15_qb: "Geschwindigkeit", t15_qc: "Gewicht", t15_qd: "Farbe",
    t15_tk1: "Kann", t15_tk2: "eine", t15_tk3: "Maschine", t15_tk4: "uns", t15_tk5: "täuschen?", t15_tk6: ""
  },
  en: {
    explorer_title: "AI Basics & History",
    t1_title: "What is AI?", t1_text: "Artificial Intelligence (AI) is the ability of machines to perform tasks that typically require human intelligence.", t1_inst: "Match the pairs:", t1_h1: "Machine vs Human", t1_h2: "What does AI do?", t1_q: "What best describes AI?", t1_qa: "Simulation of human intelligence", t1_qb: "A calculator", t1_qc: "A simple motor", t1_qd: "Just a screen",
    t1_l1: "AI", t1_r1: "Problem solving", t1_l2: "Human", t1_r2: "Natural intelligence", t1_l3: "Algorithm", t1_r3: "Set of rules",
    t2_title: "Alan Turing", t2_text: "Alan Turing was a computer science pioneer who proposed the 'Turing Test' to check machine intelligence.", t2_inst: "Fill in the blank:", t2_h1: "Computer science pioneer", t2_h2: "The name of the test.", t2_q: "Who invented the Turing Test?", t2_qa: "Alan Turing", t2_qb: "Bill Gates", t2_qc: "Steve Jobs", t2_qd: "Elon Musk",
    t2_sent: "The Turing Test checks if a ___ is intelligent.", t2_qa2: "machine", t2_qb2: "plant", t2_qc2: "keyboard", t2_qd2: "mouse",
    t3_title: "Machine Learning", t3_text: "ML is a subset of AI where computers learn from data without being explicitly programmed.", t3_inst: "Sort into buckets:", t3_h1: "Learning vs Programming.", t3_h2: "Data is the key.", t3_q: "What does ML need to learn?", t3_qa: "Data", t3_qb: "Coffee", t3_qc: "A hammer", t3_qd: "Only electricity",
    t3_bl1: "Classic", t3_bl2: "AI/ML", t3_i1: "Fixed rules", t3_i2: "Pattern recognition", t3_i3: "Static logic", t3_i4: "Self-improvement",
    t4_title: "Neural Networks", t4_text: "Neural networks are computer systems modeled roughly after the human brain.", t4_inst: "Put the words in order:", t4_h1: "Like in the brain.", t4_h2: "Artificial neurons.", t4_q: "What is the basis of neural networks?", t4_qa: "Artificial neurons", t4_qb: "Gears", t4_qc: "Water pipes", t4_qd: "Batteries",
    t4_w1: "Artificial", t4_w2: "neurons", t4_w3: "pass", t4_w4: "signals", t4_w5: "through", t4_w6: "the", t4_w7: "network.",
    t5_title: "Deep Learning", t5_text: "Deep Learning uses multi-layered neural networks for complex tasks like image recognition.", t5_inst: "Highlight the two words that form the method's name:", t5_h1: "Deep layers.", t5_h2: "Complex learning.", t5_q: "What does 'Deep' mean in Deep Learning?", t5_qa: "Many layers", t5_qb: "Under water", t5_qc: "Dark colors", t5_qd: "Heavyweight",
    t5_tk1: "Deep", t5_tk2: "Learning", t5_tk3: "requires", t5_tk4: "lots", t5_tk5: "of", t5_tk6: "data.",
    t6_title: "Supervised Learning", t6_text: "In Supervised Learning, AI learns with labeled data (input + result).", t6_inst: "Match the pairs:", t6_h1: "Input + Label.", t6_h2: "The teacher gives answers.", t6_q: "What is typical for supervised learning?", t6_qa: "Labeled data", t6_qb: "Random guessing", t6_qc: "No data", t6_qd: "Hardware only",
    t6_l1: "Input", t6_r1: "Image", t6_l2: "Label", t6_r2: "Dog", t6_l3: "Goal", t6_r3: "Prediction",
    t7_title: "Unsupervised Learning", t7_text: "Unsupervised Learning finds hidden patterns in data without given labels.", t7_inst: "Fill in the blank:", t7_h1: "No labels.", t7_h2: "Finding structures.", t7_q: "What does unsupervised learning look for?", t7_qa: "Patterns", t7_qb: "The teacher", t7_qc: "The password", t7_qd: "The off switch",
    t7_sent: "Here AI learns without ___ data.", t7_qa2: "labeled", t7_qb2: "much", t7_qc2: "digital", t7_qd2: "expensive",
    t8_title: "Reinforcement Learning", t8_text: "Reinforcement Learning learns through reward and punishment (trial & error).", t8_inst: "Sort into buckets:", t8_h1: "Like dog training.", t8_h2: "Reward helps.", t8_q: "What does the AI get on success?", t8_qa: "Reward (points)", t8_qb: "Vacation", t8_qc: "More power", t8_qd: "A certificate",
    t8_bl1: "Action", t8_bl2: "Feedback", t8_i1: "Make a move", t8_i2: "Get point", t8_i3: "Robot moves", t8_i4: "Error message",
    t9_title: "AI vs. Human", t9_text: "AI is fast with data, humans are better at empathy and creativity.", t9_inst: "Put the words in order:", t9_h1: "Different strengths.", t9_h2: "Who is better at what?", t9_q: "What can humans do better than AI?", t9_qa: "Show empathy", t9_qb: "Calculate trillions", t9_qc: "Never sleep", t9_qd: "Store raw data",
    t9_w1: "AI", t9_w2: "can", t9_w3: "recognize", t9_w4: "patterns", t9_w5: "faster", t9_w6: "than", t9_w7: "humans.",
    t10_title: "Data is Fuel", t10_text: "Without large amounts of data (Big Data), modern AI cannot be trained effectively.", t10_inst: "Highlight the word for AI's fuel:", t10_h1: "More is better.", t10_h2: "Big Data.", t10_q: "Why is data important for AI?", t10_qa: "For learning", t10_qb: "For cooling", t10_qc: "As decoration", t10_qd: "Against viruses",
    t10_tk1: "Data", t10_tk2: "is", t10_tk3: "the", t10_tk4: "foundation", t10_tk5: "of", t10_tk6: "AI.",
    t11_title: "AI Model Training", t11_text: "Training is the process where AI adjusts its parameters to the data.", t11_inst: "Match the pairs:", t11_h1: "Getting ready.", t11_h2: "Practice makes perfect.", t11_q: "What happens during training?", t11_qa: "Parameter adjustment", t11_qb: "Screen cleaning", t11_qc: "Cable swap", t11_qd: "Shut down",
    t11_l1: "Input", t11_r1: "Training data", t11_l2: "Process", t11_r2: "Learning", t11_l3: "Output", t11_r3: "Model",
    t12_title: "Inference", t12_text: "Inference is the moment when the trained AI model is applied to new data.", t12_inst: "Fill in the blank:", t12_h1: "Application.", t12_h2: "After training.", t12_q: "What does inference mean?", t12_qa: "Applying the model", t12_qb: "Restarting PC", t12_qc: "Deleting data", t12_qd: "Programming",
    t12_sent: "After training comes ___.", t12_qa2: "inference", t12_qb2: "a break", t12_qc2: "installation", t12_qd2: "hardware",
    t13_title: "Weak AI (Narrow)", t13_text: "Weak AI is specialized for one specific task (e.g., chess, weather).", t13_inst: "Sort into buckets:", t13_h1: "Only one expertise.", t13_h2: "Today's AI.", t13_q: "What is an example of weak AI?", t13_qa: "Chess computer", t13_qb: "A robot that can do everything", t13_qc: "A human", t13_qd: "The Internet",
    t13_bl1: "Specific", t13_bl2: "General", t13_i1: "Spam filter", t13_i2: "Human mind", t13_i3: "Face recognition", t13_i4: "Superintelligence",
    t14_title: "Strong AI (General)", t14_text: "Strong AI (AGI) would be a machine with human-like consciousness and reason.", t14_inst: "Put the words in order:", t14_h1: "Science fiction?", t14_h2: "Can do everything like a human.", t14_q: "Does AGI exist yet?", t14_qa: "No, not yet", t14_qb: "Yes, in every phone", t14_qc: "Since 1950", t14_qd: "Only in calculators",
    t14_w1: "Strong", t14_w2: "AI", t14_w3: "would", t14_w4: "be", t14_w5: "as", t14_w6: "smart", t14_w7: "as humans.",
    t15_title: "The Turing Test", t15_text: "A test where a human must decide if they are chatting with an AI or a human.", t15_inst: "Highlight the word for what tries to fool us:", t15_h1: "Discrimination test.", t15_h2: "Pass or fail.", t15_q: "What is judged in the Turing Test?", t15_qa: "Behavior", t15_qb: "Speed", t15_qc: "Weight", t15_qd: "Color",
    t15_tk1: "Can", t15_tk2: "a", t15_tk3: "machine", t15_tk4: "fool", t15_tk5: "us?", t15_tk6: ""
  },
  hu: {
    explorer_title: "MI Alapok és Történelem",
    t1_title: "Mi az a MI?", t1_text: "A Mesterséges Intelligencia (MI) a gépek azon képessége, hogy olyan feladatokat lássanak el, amikhez emberi ész kell.", t1_inst: "Párosítsd össze:", t1_h1: "Gép vs Ember", t1_h2: "Mit csinál a MI?", t1_q: "Mi írja le legjobban a MI-t?", t1_qa: "Emberi intelligencia szimulációja", t1_qb: "Egy számológép", t1_qc: "Egy egyszerű motor", t1_qd: "Csak egy képernyő",
    t1_l1: "MI", t1_r1: "Problémamegoldás", t1_l2: "Ember", t1_r2: "Természetes intelligencia", t1_l3: "Algoritmus", t1_r3: "Szabályrendszer",
    t2_title: "Alan Turing", t2_text: "Alan Turing az informatika úttörője volt, ő javasolta a 'Turing-tesztet' a gépi intelligencia mérésére.", t2_inst: "Töltsd ki a hiányt:", t2_h1: "Az informatika úttörője", t2_h2: "A teszt neve.", t2_q: "Ki találta fel a Turing-tesztet?", t2_qa: "Alan Turing", t2_qb: "Bill Gates", t2_qc: "Steve Jobs", t2_qd: "Elon Musk",
    t2_sent: "A Turing-teszt azt vizsgálja, hogy egy ___ intelligens-e.", t2_qa2: "gép", t2_qb2: "növény", t2_qc2: "billentyűzet", t2_qd2: "egér",
    t3_title: "Gépi tanulás", t3_text: "A ML a MI egy részterülete, ahol a számítógépek adatokból tanulnak, külön programozás nélkül.", t3_inst: "Válogasd szét:", t3_h1: "Tanulás vs Programozás.", t3_h2: "Az adat a kulcs.", t3_q: "Mire van szüksége a ML-nek a tanuláshoz?", t3_qa: "Adatokra", t3_qb: "Kávéra", t3_qc: "Kalapácsra", t3_qd: "Csak áramra",
    t3_bl1: "Klasszikus", t3_bl2: "MI/ML", t3_i1: "Fix szabályok", t3_i2: "Mintázatfelismerés", t3_i3: "Statikus logika", t3_i4: "Önfejlesztés",
    t4_title: "Neurális hálózatok", t4_text: "A neurális hálózatok az emberi agy működését modellező számítógépes rendszerek.", t4_inst: "Tedd sorrendbe a szavakat:", t4_h1: "Mint az agyban.", t4_h2: "Mesterséges neuronok.", t4_q: "Mi a neurális hálózatok alapja?", t4_qa: "Mesterséges neuronok", t4_qb: "Fogaskerekek", t4_qc: "Vízvezetékek", t4_qd: "Elemek",
    t4_w1: "A mesterséges", t4_w2: "neuronok", t4_w3: "jeleket", t4_w4: "továbbítanak", t4_w5: "a", t4_w6: "hálózaton", t4_w7: "keresztül.",
    t5_title: "Mély tanulás", t5_text: "A Deep Learning sokrétegű hálózatokat használ komplex feladatokhoz, pl. képfelismeréshez.", t5_inst: "Jelöld meg a két szót, amely a módszer nevét adja:", t5_h1: "Mély rétegek.", t5_h2: "Komplex tanulás.", t5_q: "Mit jelent a 'mély' a mély tanulásban?", t5_qa: "Sok réteget", t5_qb: "Víz alattit", t5_qc: "Sötét színeket", t5_qd: "Nehézsúlyút",
    t5_tk1: "A mély", t5_tk2: "tanulás", t5_tk3: "sok", t5_tk4: "adatot", t5_tk5: "igényel.", t5_tk6: "",
    t6_title: "Felügyelt tanulás", t6_text: "A Supervised Learning során a MI címkézett adatokból tanul (bemenet + válasz).", t6_inst: "Párosítsd össze:", t6_h1: "Bemenet + Címke.", t6_h2: "A tanár megadja a választ.", t6_q: "Mi jellemző a felügyelt tanulásra?", t6_qa: "Címkézett adatok", t6_qb: "Véletlen tippek", t6_qc: "Nincsenek adatok", t6_qd: "Csak hardver",
    t6_l1: "Bemenet", t6_r1: "Kép", t6_l2: "Címke", t6_r2: "Kutya", t6_l3: "Cél", t6_r3: "Jóslat",
    t7_title: "Nem felügyelt tanulás", t7_text: "Az Unsupervised Learning rejtett mintákat keres az adatokban címkék nélkül.", t7_inst: "Töltsd ki a hiányt:", t7_h1: "Nincsenek címkék.", t7_h2: "Struktúrák keresése.", t7_q: "Mit keres a nem felügyelt tanulás?", t7_qa: "Mintákat", t7_qb: "A tanárt", t7_qc: "A jelszót", t7_qd: "A kikapcsolót",
    t7_sent: "Itt a MI ___ adatok nélkül tanul.", t7_qa2: "címkézett", t7_qb2: "sok", t7_qc2: "digitális", t7_qd2: "drága",
    t8_title: "Megerősítéses tanulás", t8_text: "A Reinforcement Learning jutalmazás és büntetés útján tanul (próba-szerencse).", t8_inst: "Válogasd szét:", t8_h1: "Mint a kutyanevelés.", t8_h2: "A jutalom segít.", t8_q: "Mit kap a MI siker esetén?", t8_qa: "Jutalmat (pontot)", t8_qb: "Szabadságot", t8_qc: "Több áramot", t8_qd: "Oklevelet",
    t8_bl1: "Akció", t8_bl2: "Visszacsatolás", t8_i1: "Lépés megtétele", t8_i2: "Pontszerzés", t8_i3: "Robot mozdul", t8_i4: "Hibaüzenet",
    t9_title: "MI vs. Ember", t9_text: "A MI gyors az adatokban, az ember jobb az empátiában és kreativitásban.", t9_inst: "Tedd sorrendbe a szavakat:", t9_h1: "Eltérő erősségek.", t9_h2: "Ki miben jobb?", t9_q: "Miben jobb az ember a MI-nél?", t9_qa: "Empátia kimutatása", t9_qb: "Trilliárdok számolása", t9_qc: "Soha nem alszik", t9_qd: "Adatok tárolása",
    t9_w1: "A MI", t9_w2: "gyorsabban", t9_w3: "felismeri", t9_w4: "a mintákat,", t9_w5: "mint", t9_w6: "az", t9_w7: "emberek.",
    t10_title: "Az adat az üzemanyag", t10_text: "Nagy adatmennyiség (Big Data) nélkül a modern MI nem tanítható hatékonyan.", t10_inst: "Jelöld meg a szót, amely a MI üzemanyaga:", t10_h1: "Sok kell belőle.", t10_h2: "Big Data.", t10_q: "Miért fontos az adat a MI-nek?", t10_qa: "Tanuláshoz", t10_qb: "Hűtéshez", t10_qc: "Dísznek", t10_qd: "Vírusok ellen",
    t10_tk1: "Az adat", t10_tk2: "a MI", t10_tk3: "üzemanyaga.", t10_tk4: "", t10_tk5: "", t10_tk6: "",
    t15_inst: "Jelöld meg a szót, amely megpróbál becsapni minket:",
    t15_tk1: "Vajon", t15_tk2: "egy", t15_tk3: "gép", t15_tk4: "be tud", t15_tk5: "csapni minket?", t15_tk6: "",
    t11_title: "MI-modell tanítása", t11_text: "A tanítás az a folyamat, amelyben a MI a paramétereit az adatokhoz igazítja.", t11_inst: "Párosítsd össze:", t11_h1: "Felkészülés.", t11_h2: "Gyakorlat teszi a mestert.", t11_q: "Mi történik a tanítás során?", t11_qa: "Paraméter-beállítás", t11_qb: "Képernyőtisztítás", t11_qc: "Kábelcsere", t11_qd: "Kikapcsolás",
    t11_l1: "Bemenet", t11_r1: "Tanítóadatok", t11_l2: "Folyamat", t11_r2: "Tanulás", t11_l3: "Kimenet", t11_r3: "Modell",
    t12_title: "Inferencia", t12_text: "Az inferencia az a pillanat, amikor a kész MI-modellt új adatokra alkalmazzuk.", t12_inst: "Töltsd ki a hiányt:", t12_h1: "Alkalmazás.", t12_h2: "A tanítás után.", t12_q: "Mit jelent az inferencia?", t12_qa: "A modell alkalmazását", t12_qb: "A gép újraindítását", t12_qc: "Adatok törlését", t12_qd: "Programozást",
    t12_sent: "A tanítás után következik az ___.", t12_qa2: "inferencia", t12_qb2: "szünet", t12_qc2: "telepítés", t12_qd2: "hardver",
    t13_title: "Gyenge MI (szűk)", t13_text: "A gyenge MI egyetlen konkrét feladatra specializálódott (pl. sakk, időjárás).", t13_inst: "Válogasd szét:", t13_h1: "Csak egy szakterület.", t13_h2: "A mai MI.", t13_q: "Mi a gyenge MI egyik példája?", t13_qa: "Sakkszámítógép", t13_qb: "Egy robot, ami mindent tud", t13_qc: "Egy ember", t13_qd: "Az internet",
    t13_bl1: "Specifikus", t13_bl2: "Általános", t13_i1: "Spamszűrő", t13_i2: "Emberi elme", t13_i3: "Arcfelismerés", t13_i4: "Szuperintelligencia",
    t14_title: "Erős MI (általános)", t14_text: "Az erős MI (AGI) emberhez hasonló tudattal és értelemmel rendelkező gép lenne.", t14_inst: "Tedd sorrendbe a szavakat:", t14_h1: "Tudományos-fantasztikum?", t14_h2: "Mindent tud, mint egy ember.", t14_q: "Létezik már az AGI?", t14_qa: "Nem, még nem", t14_qb: "Igen, minden telefonban", t14_qc: "1950 óta", t14_qd: "Csak a számológépekben",
    t14_w1: "Az erős", t14_w2: "MI", t14_w3: "olyan", t14_w4: "okos", t14_w5: "lenne,", t14_w6: "mint", t14_w7: "az emberek.",
    t15_title: "A Turing-teszt", t15_text: "Egy teszt, amelyben az embernek el kell döntenie, hogy egy MI-vel vagy egy emberrel beszélget.", t15_h1: "Megkülönböztetési teszt.", t15_h2: "Sikeres vagy sem.", t15_q: "Mit ítélnek meg a Turing-tesztben?", t15_qa: "A viselkedést", t15_qb: "A sebességet", t15_qc: "A súlyt", t15_qd: "A színt"
  },
  ro: {
    explorer_title: "Bazele IA și Istorie",
    t1_title: "Ce este IA?", t1_text: "Inteligența Artificială (IA) este capacitatea mașinilor de a îndeplini sarcini care necesită inteligență umană.", t1_inst: "Potrivește perechile:", t1_h1: "Mașină vs Om", t1_h2: "Ce face IA?", t1_q: "Ce descrie cel mai bine IA?", t1_qa: "Simularea inteligenței umane", t1_qb: "Un calculator de buzunar", t1_qc: "Un motor simplu", t1_qd: "Doar un ecran",
    t1_l1: "IA", t1_r1: "Rezolvare probleme", t1_l2: "Om", t1_r2: "Inteligență naturală", t1_l3: "Algoritm", t1_r3: "Set de reguli",
    t2_title: "Alan Turing", t2_text: "Alan Turing a fost un pionier al informaticii care a propus 'Testul Turing' pentru a verifica inteligența mașinilor.", t2_inst: "Completează spațiul liber:", t2_h1: "Pionier informatică", t2_h2: "Numele testului.", t2_q: "Cine a inventat Testul Turing?", t2_qa: "Alan Turing", t2_qb: "Bill Gates", t2_qc: "Steve Jobs", t2_qd: "Elon Musk",
    t2_sent: "Testul Turing verifică dacă o ___ este inteligentă.", t2_qa2: "mașină", t2_qb2: "plantă", t2_qc2: "tastatură", t2_qd2: "mouse",
    t3_title: "Învățare automată", t3_text: "ML este o submulțime a IA în care computerele învață din date fără a fi programate explicit.", t3_inst: "Sortează în găleți:", t3_h1: "Învățare vs Programare.", t3_h2: "Datele sunt cheia.", t3_q: "De ce are nevoie ML pentru a învăța?", t3_qa: "Date", t3_qb: "Cafea", t3_qc: "Un ciocan", t3_qd: "Doar curent",
    t3_bl1: "Clasic", t3_bl2: "IA/ML", t3_i1: "Reguli fixe", t3_i2: "Recunoaștere modele", t3_i3: "Logică statică", t3_i4: "Auto-îmbunătățire",
    t4_title: "Rețele neuronale", t4_text: "Rețelele neuronale sunt sisteme informatice modelate grosier după creierul uman.", t4_inst: "Pune cuvintele în ordine:", t4_h1: "Ca în creier.", t4_h2: "Neuroni artificiali.", t4_q: "Care este baza rețelelor neuronale?", t4_qa: "Neuroni artificiali", t4_qb: "Angrenaje", t4_qc: "Țevi de apă", t4_qd: "Baterii",
    t4_w1: "Neuronii", t4_w2: "artificiali", t4_w3: "transmit", t4_w4: "semnale", t4_w5: "prin", t4_w6: "rețea.", t4_w7: "",
    t5_title: "Deep Learning", t5_text: "Deep Learning folosește rețele neuronale multistrat pentru sarcini complexe.", t5_inst: "Evidențiază cele două cuvinte care formează numele metodei:", t5_h1: "Straturi adânci.", t5_h2: "Învățare complexă.", t5_q: "Ce înseamnă 'Deep' în Deep Learning?", t5_qa: "Multe straturi", t5_qb: "Sub apă", t5_qc: "Culori închise", t5_qd: "Greutate mare",
    t5_tk1: "Deep", t5_tk2: "Learning", t5_tk3: "necesită", t5_tk4: "foarte", t5_tk5: "multe", t5_tk6: "date.",
    t6_title: "Învățare supravegheată", t6_text: "În Supervised Learning, IA învață cu date etichetate (intrare + rezultat).", t6_inst: "Potrivește perechile:", t6_h1: "Intrare + Etichetă.", t6_h2: "Profesorul dă răspunsuri.", t6_q: "Ce este tipic pentru învățarea supravegheată?", t6_qa: "Date etichetate", t6_qb: "Ghiciri aleatorii", t6_qc: "Fără date", t6_qd: "Doar hardware",
    t6_l1: "Intrare", t6_r1: "Imagine", t6_l2: "Etichetă", t6_r2: "Câine", t6_l3: "Țintă", t6_r3: "Predicție",
    t7_title: "Învățare nesupravegheată", t7_text: "Unsupervised Learning găsește modele ascunse în date fără etichete.", t7_inst: "Completează spațiul liber:", t7_h1: "Fără etichete.", t7_h2: "Găsirea structurilor.", t7_q: "Ce caută învățarea nesupravegheată?", t7_qa: "Modele", t7_qb: "Profesorul", t7_qc: "Parola", t7_qd: "Butonul oprit",
    t7_sent: "Aici IA învață fără date ___.", t7_qa2: "etichetate", t7_qb2: "multe", t7_qc2: "digitale", t7_qd2: "scumpe",
    t10_inst: "Evidențiază cuvântul care numește combustibilul IA:",
    t10_tk1: "Datele", t10_tk2: "sunt", t10_tk3: "combustibilul", t10_tk4: "IA.", t10_tk5: "", t10_tk6: "",
    t15_inst: "Evidențiază cuvântul care încearcă să ne păcălească:",
    t15_tk1: "Poate", t15_tk2: "o", t15_tk3: "mașină", t15_tk4: "să ne", t15_tk5: "păcălească?", t15_tk6: "",
    t8_title: "Învățare prin întărire", t8_text: "Reinforcement Learning învață prin recompensă și pedeapsă (încercare și eroare).", t8_inst: "Sortează în găleți:", t8_h1: "Ca la dresajul câinilor.", t8_h2: "Recompensa ajută.", t8_q: "Ce primește IA la succes?", t8_qa: "Recompensă (puncte)", t8_qb: "Vacanță", t8_qc: "Mai mult curent", t8_qd: "Un certificat",
    t8_bl1: "Acțiune", t8_bl2: "Feedback", t8_i1: "Face o mutare", t8_i2: "Primește punct", t8_i3: "Robotul se mișcă", t8_i4: "Mesaj de eroare",
    t9_title: "IA vs. Om", t9_text: "IA este rapidă cu datele, oamenii sunt mai buni la empatie și creativitate.", t9_inst: "Pune cuvintele în ordine:", t9_h1: "Puncte forte diferite.", t9_h2: "Cine e mai bun la ce?", t9_q: "Ce pot face oamenii mai bine decât IA?", t9_qa: "Să arate empatie", t9_qb: "Să calculeze trilioane", t9_qc: "Să nu doarmă niciodată", t9_qd: "Să stocheze date",
    t9_w1: "IA", t9_w2: "poate", t9_w3: "recunoaște", t9_w4: "modele", t9_w5: "mai repede", t9_w6: "decât", t9_w7: "oamenii.",
    t10_title: "Datele sunt combustibil", t10_text: "Fără cantități mari de date (Big Data), IA modernă nu poate fi antrenată eficient.", t10_h1: "Mai mult e mai bine.", t10_h2: "Big Data.", t10_q: "De ce sunt importante datele pentru IA?", t10_qa: "Pentru învățare", t10_qb: "Pentru răcire", t10_qc: "Ca decor", t10_qd: "Împotriva virușilor",
    t11_title: "Antrenarea modelului IA", t11_text: "Antrenarea este procesul prin care IA își ajustează parametrii la date.", t11_inst: "Potrivește perechile:", t11_h1: "Pregătire.", t11_h2: "Exercițiul te face maestru.", t11_q: "Ce se întâmplă în timpul antrenării?", t11_qa: "Ajustarea parametrilor", t11_qb: "Curățarea ecranului", t11_qc: "Schimbarea cablului", t11_qd: "Oprirea",
    t11_l1: "Intrare", t11_r1: "Date de antrenare", t11_l2: "Proces", t11_r2: "Învățare", t11_l3: "Ieșire", t11_r3: "Model",
    t12_title: "Inferență", t12_text: "Inferența este momentul în care modelul IA antrenat este aplicat pe date noi.", t12_inst: "Completează spațiul liber:", t12_h1: "Aplicare.", t12_h2: "După antrenare.", t12_q: "Ce înseamnă inferența?", t12_qa: "Aplicarea modelului", t12_qb: "Repornirea PC-ului", t12_qc: "Ștergerea datelor", t12_qd: "Programare",
    t12_sent: "După antrenare urmează ___.", t12_qa2: "inferența", t12_qb2: "o pauză", t12_qc2: "instalarea", t12_qd2: "hardware-ul",
    t13_title: "IA slabă (îngustă)", t13_text: "IA slabă este specializată pentru o singură sarcină specifică (ex. șah, vreme).", t13_inst: "Sortează în găleți:", t13_h1: "Doar o expertiză.", t13_h2: "IA de azi.", t13_q: "Care este un exemplu de IA slabă?", t13_qa: "Computer de șah", t13_qb: "Un robot care poate face orice", t13_qc: "Un om", t13_qd: "Internetul",
    t13_bl1: "Specific", t13_bl2: "General", t13_i1: "Filtru spam", t13_i2: "Mintea umană", t13_i3: "Recunoaștere facială", t13_i4: "Superinteligență",
    t14_title: "IA puternică (generală)", t14_text: "IA puternică (AGI) ar fi o mașină cu conștiință și rațiune asemănătoare omului.", t14_inst: "Pune cuvintele în ordine:", t14_h1: "Science fiction?", t14_h2: "Poate face totul ca un om.", t14_q: "Există deja AGI?", t14_qa: "Nu, încă nu", t14_qb: "Da, în fiecare telefon", t14_qc: "Din 1950", t14_qd: "Doar în calculatoare",
    t14_w1: "IA", t14_w2: "puternică", t14_w3: "ar fi", t14_w4: "la fel de", t14_w5: "inteligentă", t14_w6: "ca", t14_w7: "oamenii.",
    t15_title: "Testul Turing", t15_text: "Un test în care un om trebuie să decidă dacă vorbește cu o IA sau cu un om.", t15_h1: "Test de diferențiere.", t15_h2: "Trece sau nu.", t15_q: "Ce se evaluează în Testul Turing?", t15_qa: "Comportamentul", t15_qb: "Viteza", t15_qc: "Greutatea", t15_qd: "Culoarea"
  }
};

export const INFO_K8_I7_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "simple-icon", icon: "🤖", color: "#2196F3" },
    interactive: { type: "match-pairs", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", pairs: [{left:"t1_l1",right:"t1_r1"},{left:"t1_l2",right:"t1_r2"},{left:"t1_l3",right:"t1_r3"}] },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" }
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "👨‍🔬", color: "#9C27B0" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" }
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "icon-grid", items: [{emoji:"🧠",label:"Lernen"},{emoji:"📜",label:"Regeln"}] },
    interactive: { type: "drag-to-bucket", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", buckets: [{id:"b1",label:"t3_bl1"},{id:"b2",label:"t3_bl2"}], items: [{text:"t3_i1",bucketId:"b1"},{text:"t3_i2",bucketId:"b2"},{text:"t3_i3",bucketId:"b1"},{text:"t3_i4",bucketId:"b2"}] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "🕸️", color: "#FF9800" },
    interactive: { type: "word-order", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", words: ["t4_w1", "t4_w2", "t4_w3", "t4_w4", "t4_w5", "t4_w6", "t4_w7"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "🌊", color: "#00BCD4" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6"].filter(x=>x!==undefined), correctIndices: [0,1] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" }
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "simple-icon", icon: "🏷️", color: "#4CAF50" },
    interactive: { type: "match-pairs", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", pairs: [{left:"t6_l1",right:"t6_r1"},{left:"t6_l2",right:"t6_r2"},{left:"t6_l3",right:"t6_r3"}] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" }
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "🔍", color: "#795548" },
    interactive: { type: "gap-fill", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", sentence: "t7_sent", choices: ["t7_qa2", "t7_qb2", "t7_qc2", "t7_qd2"], correctIndex: 0 },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" }
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "icon-grid", items: [{emoji:"🎯",label:"Aktion"},{emoji:"🏆",label:"Feedback"}] },
    interactive: { type: "drag-to-bucket", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", buckets: [{id:"b1",label:"t8_bl1"},{id:"b2",label:"t8_bl2"}], items: [{text:"t8_i1",bucketId:"b1"},{text:"t8_i2",bucketId:"b2"},{text:"t8_i3",bucketId:"b1"},{text:"t8_i4",bucketId:"b2"}] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" }
  },
  {
    infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "simple-icon", icon: "⚖️", color: "#607D8B" },
    interactive: { type: "word-order", instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2", words: ["t9_w1", "t9_w2", "t9_w3", "t9_w4", "t9_w5", "t9_w6", "t9_w7"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t9_q", choices: ["t9_qa", "t9_qb", "t9_qc", "t9_qd"], answer: "t9_qa" }
  },
  {
    infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "simple-icon", icon: "⛽", color: "#F44336" },
    interactive: { type: "highlight-text", instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2", tokens: ["t10_tk1","t10_tk2","t10_tk3","t10_tk4","t10_tk5","t10_tk6"].filter(x=>x!==undefined), correctIndices: [0] },
    quiz: { question: "t10_q", choices: ["t10_qa", "t10_qb", "t10_qc", "t10_qd"], answer: "t10_qa" }
  },
  {
    infoTitle: "t11_title", infoText: "t11_text",
    svg: { type: "simple-icon", icon: "🏋️", color: "#3F51B5" },
    interactive: { type: "match-pairs", instruction: "t11_inst", hint1: "t11_h1", hint2: "t11_h2", pairs: [{left:"t11_l1",right:"t11_r1"},{left:"t11_l2",right:"t11_r2"},{left:"t11_l3",right:"t11_r3"}] },
    quiz: { question: "t11_q", choices: ["t11_qa", "t11_qb", "t11_qc", "t11_qd"], answer: "t11_qa" }
  },
  {
    infoTitle: "t12_title", infoText: "t12_text",
    svg: { type: "simple-icon", icon: "🚀", color: "#FFEB3B" },
    interactive: { type: "gap-fill", instruction: "t12_inst", hint1: "t12_h1", hint2: "t12_h2", sentence: "t12_sent", choices: ["t12_qa2", "t12_qb2", "t12_qc2", "t12_qd2"], correctIndex: 0 },
    quiz: { question: "t12_q", choices: ["t12_qa", "t12_qb", "t12_qc", "t12_qd"], answer: "t12_qa" }
  },
  {
    infoTitle: "t13_title", infoText: "t13_text",
    svg: { type: "icon-grid", items: [{emoji:"🎯",label:"Spezifisch"},{emoji:"🌍",label:"Allgemein"}] },
    interactive: { type: "drag-to-bucket", instruction: "t13_inst", hint1: "t13_h1", hint2: "t13_h2", buckets: [{id:"b1",label:"t13_bl1"},{id:"b2",label:"t13_bl2"}], items: [{text:"t13_i1",bucketId:"b1"},{text:"t13_i2",bucketId:"b2"},{text:"t13_i3",bucketId:"b1"},{text:"t13_i4",bucketId:"b2"}] },
    quiz: { question: "t13_q", choices: ["t13_qa", "t13_qb", "t13_qc", "t13_qd"], answer: "t13_qa" }
  },
  {
    infoTitle: "t14_title", infoText: "t14_text",
    svg: { type: "simple-icon", icon: "🦾", color: "#000000" },
    interactive: { type: "word-order", instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2", words: ["t14_w1", "t14_w2", "t14_w3", "t14_w4", "t14_w5", "t14_w6", "t14_w7"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t14_q", choices: ["t14_qa", "t14_qb", "t14_qc", "t14_qd"], answer: "t14_qa" }
  },
  {
    infoTitle: "t15_title", infoText: "t15_text",
    svg: { type: "text-bubbles", items: [{text:"MI",bg:"#fff",color:"#000",emoji:"🤖"},{text:"Ember",bg:"#fff",color:"#000",emoji:"👤"}] },
    interactive: { type: "highlight-text", instruction: "t15_inst", hint1: "t15_h1", hint2: "t15_h2", tokens: ["t15_tk1","t15_tk2","t15_tk3","t15_tk4","t15_tk5"].filter(x=>x!==""), correctIndices: [2] },
    quiz: { question: "t15_q", choices: ["t15_qa", "t15_qb", "t15_qc", "t15_qd"], answer: "t15_qa" }
  }
];

