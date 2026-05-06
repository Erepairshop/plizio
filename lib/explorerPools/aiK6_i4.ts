// @ts-nocheck
// lib/explorerPools/aiK6_i4.ts
import type { PoolTopicDef } from "./types";

export const INFO_K6_I4_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "KI Insel 4: Grundlagen",
    t1_title: "Was ist KI?", t1_text: "Künstliche Intelligenz (KI) ist die Fähigkeit von Maschinen, Aufgaben zu erledigen, die normalerweise menschliche Intelligenz erfordern.", t1_inst: "Ordne die Paare zu:", t1_h1: "Maschine vs Mensch.", t1_h2: "Was macht die KI?", t1_q: "Was bedeutet KI?", t1_qa: "Künstliche Intelligenz", t1_qb: "Keine Information", t1_qc: "Kleine Insel", t1_qd: "Karten Index",
    t1_l1: "KI", t1_r1: "Artificial Intelligence", t1_l2: "Maschine", t1_r2: "Computer", t1_l3: "Mensch", t1_r3: "Biologische Intelligenz",
    t2_title: "Alan Turing", t2_text: "Alan Turing gilt als Vater der theoretischen Informatik und KI.", t2_inst: "Fülle die Lücke aus:", t2_h1: "Ein Pionier.", t2_h2: "Er erfand einen Test.", t2_q: "Wer war Alan Turing?", t2_qa: "Ein Mathematiker", t2_qb: "Ein Bäcker", t2_qc: "Ein Astronaut", t2_qd: "Ein Maler",
    t2_sent: "Turing entwickelte den Turing-___.", t2_qa2: "Test", t2_qb2: "Weg", t2_qc2: "Code", t2_qd2: "Plan",
    t3_title: "Maschinelles Lernen", t3_text: "Maschinen lernen aus Daten, ohne explizit programmiert zu werden.", t3_inst: "Sortiere in die Eimer:", t3_h1: "Wie lernen wir?", t3_h2: "Daten oder Regeln.", t3_q: "Was braucht ML?", t3_qa: "Daten", t3_qb: "Wasser", t3_qc: "Holz", t3_qd: "Sand",
    t3_bl1: "Lernquelle", t3_bl2: "Ergebnis", t3_i1: "Daten", t3_i2: "Vorhersage", t3_i3: "Beispiele", t3_i4: "Modell",
    t4_title: "Daten: Der Treibstoff", t4_text: "KI braucht riesige Mengen an Daten, um Muster zu erkennen.", t4_inst: "Bringe die Wörter in Ordnung:", t4_h1: "Viele Informationen.", t4_h2: "Muster finden.", t4_q: "Was ist Treibstoff für KI?", t4_qa: "Daten", t4_qb: "Strom", t4_qc: "Benzin", t4_qd: "Luft",
    t4_w1: "Daten", t4_w2: "sind", t4_w3: "wichtig", t4_w4: "für", t4_w5: "das", t4_w6: "KI-Training.", t4_w7: "",
    t5_title: "Überwachtes Lernen", t5_text: "Die KI lernt mit beschrifteten Beispielen (z.B. Bilder mit 'Hund').", t5_inst: "Markiere das richtige Wort:", t5_h1: "Mit Anleitung.", t5_h2: "Beschriftete Daten.", t5_q: "Was nutzt überwachtes Lernen?", t5_qa: "Label (Etiketten)", t5_qb: "Zufall", t5_qc: "Keine Daten", t5_qd: "Nur Rauschen",
    t5_tk1: "Überwachtes", t5_tk2: "Lernen", t5_tk3: "braucht", t5_tk4: "beschriftete", t5_tk5: "Beispiele.", t5_tk6: "",
    t6_title: "Unüberwachtes Lernen", t6_text: "Die KI findet selbstständig Muster in Daten ohne Labels.", t6_inst: "Ordne die Paare zu:", t6_h1: "Selbstständig finden.", t6_h2: "Gruppen bilden.", t6_q: "Was macht unüberwachtes Lernen?", t6_qa: "Muster finden", t6_qb: "Fragen stellen", t6_qc: "Schlafen", t6_qd: "Essen",
    t6_l1: "Gruppen", t6_r1: "Clustering", t6_l2: "Muster", t6_r2: "Pattern", t6_l3: "Kein Lehrer", t6_r3: "Autonom",
    t7_title: "Bestärkendes Lernen", t7_text: "Die KI lernt durch Belohnung und Bestrafung (Trial and Error).", t7_inst: "Fülle die Lücke aus:", t7_h1: "Wie ein Spiel.", t7_h2: "Punkte sammeln.", t7_q: "Was bekommt die KI bei Erfolg?", t7_qa: "Belohnung", t7_qb: "Urlaub", t7_qc: "Geld", t7_qd: "Eis",
    t7_sent: "Reinforcement Learning nutzt eine ___.", t7_qa2: "Belohnung", t7_qb2: "Pause", t7_qc2: "Kamera", t7_qd2: "Tastatur",
    t8_title: "Neuronale Netze", t8_text: "Computersysteme, die dem menschlichen Gehirn nachempfunden sind.", t8_inst: "Sortiere in die Eimer:", t8_h1: "Biologie vs Technik.", t8_h2: "Gehirn-Modell.", t8_q: "Was ist ein Neuronales Netz?", t8_qa: "Ein KI-Modell", t8_qb: "Ein Fischernetz", t8_qc: "Ein Stromnetz", t8_qd: "Ein Spinnennetz",
    t8_bl1: "Biologisch", t8_bl2: "Künstlich", t8_i1: "Gehirn", t8_i2: "Software", t8_i3: "Nervenzelle", t8_i4: "Algorithmus",
    t9_title: "Mensch vs Maschine", t9_text: "Menschen haben Empathie, KI ist gut im Rechnen und Mustern.", t9_inst: "Bringe die Wörter in Ordnung:", t9_h1: "Wer kann was?", t9_h2: "Unterschiede.", t9_q: "Was fehlt der KI meist?", t9_qa: "Gefühle", t9_qb: "Strom", t9_qc: "Speicher", t9_qd: "Schnelligkeit",
    t9_w1: "Menschen", t9_w2: "haben", t9_w3: "echte", t9_w4: "Gefühle", t9_w5: "und", t9_w6: "Kreativität.", t9_w7: "",
    t10_title: "Turing-Test", t10_text: "Ein Test, um festzustellen, ob eine Maschine intelligent ist.", t10_inst: "Markiere das richtige Wort:", t10_h1: "Unterscheidung.", t10_h2: "Mensch oder Bot?", t10_q: "Ziel des Turing-Tests?", t10_qa: "Intelligenz prüfen", t10_qb: "Gewicht messen", t10_qc: "Farbe raten", t10_qd: "Schnell tippen",
    t10_tk1: "Der", t10_tk2: "Turing-Test", t10_tk3: "prüft", t10_tk4: "künstliche", t10_tk5: "Intelligenz.", t10_tk6: "",
    t11_title: "Algorithmen", t11_text: "Schritt-für-Schritt-Anleitungen für den Computer.", t11_inst: "Ordne die Paare zu:", t11_h1: "Rezepte.", t11_h2: "Abläufe.", t11_q: "Was ist ein Algorithmus?", t11_qa: "Handlungsanweisung", t11_qb: "Ein Bildschirm", t11_qc: "Ein Kabel", t11_qd: "Eine Maus",
    t11_l1: "Rezept", t11_r1: "Kochen", t11_l2: "Algorithmus", t11_r2: "Programm", t11_l3: "Schritt", t11_r3: "Anweisung",
    t12_title: "Bias (Voreingenommenheit)", t12_text: "KI kann Vorurteile aus schlechten Daten übernehmen.", t12_inst: "Fülle die Lücke aus:", t12_h1: "Fehler in Daten.", t12_h2: "Ungerechtigkeit.", t12_q: "Was ist Bias?", t12_qa: "Voreingenommenheit", t12_qb: "Schnelligkeit", t12_qc: "Farbe", t12_qd: "Größe",
    t12_sent: "Schlechte Daten führen zu ___.", t12_qa2: "Bias", t12_qb2: "Glück", t12_qc2: "Speed", t12_qd2: "Wissen",
    t13_title: "Vorhersage", t13_text: "KI nutzt Wahrscheinlichkeiten, um Ereignisse vorherzusagen.", t13_inst: "Sortiere in die Eimer:", t13_h1: "Zukunft raten.", t13_h2: "Wahrscheinlich.", t13_q: "Was macht eine Wetter-KI?", t13_qa: "Vorhersage", t13_qb: "Gegenwart", t13_qc: "Vergangenheit", t13_qd: "Kochen",
    t13_bl1: "Eingabe", t13_bl2: "Vorhersage", t13_i1: "Wetterdaten", t13_i2: "Regenrisiko", t13_i3: "Verkaufszahlen", t13_i4: "Trend",
    t14_title: "Klassifizierung", t14_text: "Dinge in Kategorien einteilen (z.B. Spam oder nicht Spam).", t14_inst: "Bringe die Wörter in Ordnung:", t14_h1: "Sortieren.", t14_h2: "Schubladen.", t14_q: "Was macht ein Spam-Filter?", t14_qa: "Klassifizierung", t14_qb: "Löschen", t14_qc: "Senden", t14_qd: "Drucken",
    t14_w1: "KI", t14_w2: "sortiert", t14_w3: "E-Mails", t14_w4: "in", t14_w5: "verschiedene", t14_w6: "Ordner.", t14_w7: "",
    t15_title: "Clustering", t15_text: "Ähnliche Datenpunkte ohne vorgegebene Gruppen zusammenfassen.", t15_inst: "Markiere das richtige Wort:", t15_h1: "Haufen bilden.", t15_h2: "Ähnlichkeit.", t15_q: "Was bedeutet Clustering?", t15_qa: "Gruppenbildung", t15_qb: "Einzelhaft", t15_qc: "Löschen", t15_qd: "Malen",
    t15_tk1: "Clustering", t15_tk2: "findet", t15_tk3: "ähnliche", t15_tk4: "Gruppen", t15_tk5: "in", t15_tk6: "Daten.", t15_tk7: ""
  },
  en: {
    explorer_title: "AI Island 4: Fundamentals",
    t1_title: "What is AI?", t1_text: "Artificial Intelligence (AI) is the ability of machines to perform tasks that typically require human intelligence.", t1_inst: "Match the pairs:", t1_h1: "Machine vs Human.", t1_h2: "What does AI do?", t1_q: "What does AI stand for?", t1_qa: "Artificial Intelligence", t1_qb: "Actual Information", t1_qc: "Automated Island", t1_qd: "Advanced Input",
    t1_l1: "AI", t1_r1: "Artificial Intelligence", t1_l2: "Machine", t1_r2: "Computer", t1_l3: "Human", t1_r3: "Biological Intel",
    t2_title: "Alan Turing", t2_text: "Alan Turing is considered the father of theoretical computer science and AI.", t2_inst: "Fill in the blank:", t2_h1: "A pioneer.", t2_h2: "He invented a test.", t2_q: "Who was Alan Turing?", t2_qa: "A mathematician", t2_qb: "A baker", t2_qc: "An astronaut", t2_qd: "A painter",
    t2_sent: "Turing developed the Turing ___.", t2_qa2: "test", t2_qb2: "path", t2_qc2: "code", t2_qd2: "plan",
    t3_title: "Machine Learning", t3_text: "Machines learn from data without being explicitly programmed.", t3_inst: "Sort into buckets:", t3_h1: "How do we learn?", t3_h2: "Data or rules.", t3_q: "What does ML need?", t3_qa: "Data", t3_qb: "Water", t3_qc: "Wood", t3_qd: "Sand",
    t3_bl1: "Learning Source", t3_bl2: "Result", t3_i1: "Data", t3_i2: "Prediction", t3_i3: "Examples", t3_i4: "Model",
    t4_title: "Data: The Fuel", t4_text: "AI needs huge amounts of data to recognize patterns.", t4_inst: "Put the words in order:", t4_h1: "Lots of information.", t4_h2: "Finding patterns.", t4_q: "What is fuel for AI?", t4_qa: "Data", t4_qb: "Electricity", t4_qc: "Gasoline", t4_qd: "Air",
    t4_w1: "Data", t4_w2: "is", t4_w3: "crucial", t4_w4: "for", t4_w5: "training", t4_w6: "AI.", t4_w7: "",
    t5_title: "Supervised Learning", t5_text: "AI learns with labeled examples (e.g., pictures with 'dog').", t5_inst: "Highlight the correct word:", t5_h1: "With guidance.", t5_h2: "Labeled data.", t5_q: "What does supervised learning use?", t5_qa: "Labels", t5_qb: "Chance", t5_qc: "No data", t5_qd: "Just noise",
    t5_tk1: "Supervised", t5_tk2: "learning", t5_tk3: "needs", t5_tk4: "labeled", t5_tk5: "examples.", t5_tk6: "",
    t6_title: "Unsupervised Learning", t6_text: "AI finds patterns in data on its own without labels.", t6_inst: "Match the pairs:", t6_h1: "Find on its own.", t6_h2: "Form groups.", t6_q: "What does unsupervised learning do?", t6_qa: "Find patterns", t6_qb: "Ask questions", t6_qc: "Sleep", t6_qd: "Eat",
    t6_l1: "Groups", t6_r1: "Clustering", t6_l2: "Pattern", t6_r2: "Muster", t6_l3: "No teacher", t6_r3: "Autonomous",
    t7_title: "Reinforcement Learning", t7_text: "AI learns through reward and punishment (trial and error).", t7_inst: "Fill in the blank:", t7_h1: "Like a game.", t7_h2: "Collect points.", t7_q: "What does AI get for success?", t7_qa: "Reward", t7_qb: "Vacation", t7_qc: "Money", t7_qd: "Ice cream",
    t7_sent: "Reinforcement learning uses a ___.", t7_qa2: "reward", t7_qb2: "break", t7_qc2: "camera", t7_qd2: "keyboard",
    t8_title: "Neural Networks", t8_text: "Computer systems modeled after the human brain.", t8_inst: "Sort into buckets:", t8_h1: "Biology vs Tech.", t8_h2: "Brain model.", t8_q: "What is a neural network?", t8_qa: "An AI model", t8_qb: "A fishing net", t8_qc: "A power grid", t8_qd: "A spider web",
    t8_bl1: "Biological", t8_bl2: "Artificial", t8_i1: "Brain", t8_i2: "Software", t8_i3: "Nerve cell", t8_i4: "Algorithm",
    t9_title: "Human vs Machine", t9_text: "Humans have empathy, AI is good at calculation and patterns.", t9_inst: "Put the words in order:", t9_h1: "Who can do what?", t9_h2: "Differences.", t9_q: "What does AI usually lack?", t9_qa: "Emotions", t9_qb: "Power", t9_qc: "Memory", t9_qd: "Speed",
    t9_w1: "Humans", t9_w2: "have", t9_w3: "real", t9_w4: "feelings", t9_w5: "and", t9_w6: "creativity.", t9_w7: "",
    t10_title: "Turing Test", t10_text: "A test to determine if a machine is intelligent.", t10_inst: "Highlight the correct word:", t10_h1: "Distinction.", t10_h2: "Human or bot?", t10_q: "Goal of the Turing Test?", t10_qa: "Test intelligence", t10_qb: "Measure weight", t10_qc: "Guess color", t10_qd: "Type fast",
    t10_tk1: "The", t10_tk2: "Turing", t10_tk3: "test", t10_tk4: "checks", t10_tk5: "artificial", t10_tk6: "intelligence.",
    t11_title: "Algorithms", t11_text: "Step-by-step instructions for the computer.", t11_inst: "Match the pairs:", t11_h1: "Recipes.", t11_h2: "Processes.", t11_q: "What is an algorithm?", t11_qa: "Set of instructions", t11_qb: "A screen", t11_qc: "A cable", t11_qd: "A mouse",
    t11_l1: "Recipe", t11_r1: "Cooking", t11_l2: "Algorithm", t11_r2: "Program", t11_l3: "Step", t11_r3: "Instruction",
    t12_title: "Bias", t12_text: "AI can pick up prejudices from poor data.", t12_inst: "Fill in the blank:", t12_h1: "Errors in data.", t12_h2: "Unfairness.", t12_q: "What is bias?", t12_qa: "Prejudice", t12_qb: "Speed", t12_qc: "Color", t12_qd: "Size",
    t12_sent: "Poor data leads to ___.", t12_qa2: "bias", t12_qb2: "luck", t12_qc2: "speed", t12_qd2: "knowledge",
    t13_title: "Prediction", t13_text: "AI uses probabilities to predict events.", t13_inst: "Sort into buckets:", t13_h1: "Guessing the future.", t13_h2: "Probable.", t13_q: "What does a weather AI do?", t13_qa: "Prediction", t13_qb: "Present", t13_qc: "Past", t13_qd: "Cooking",
    t13_bl1: "Input", t13_bl2: "Prediction", t13_i1: "Weather data", t13_i2: "Rain risk", t13_i3: "Sales figures", t13_i4: "Trend",
    t14_title: "Classification", t14_text: "Dividing things into categories (e.g., spam or not spam).", t14_inst: "Put the words in order:", t14_h1: "Sorting.", t14_h2: "Drawers.", t14_q: "What does a spam filter do?", t14_qa: "Classification", t14_qb: "Delete", t14_qc: "Send", t14_qd: "Print",
    t14_w1: "AI", t14_w2: "sorts", t14_w3: "emails", t14_w4: "into", t14_w5: "different", t14_w6: "folders.", t14_w7: "",
    t15_title: "Clustering", t15_text: "Grouping similar data points without predefined groups.", t15_inst: "Highlight the correct word:", t15_h1: "Forming piles.", t15_h2: "Similarity.", t15_q: "What does clustering mean?", t15_qa: "Grouping", t15_qb: "Isolation", t15_qc: "Deleting", t15_qd: "Painting",
    t15_tk1: "Clustering", t15_tk2: "finds", t15_tk3: "similar", t15_tk4: "groups", t15_tk5: "in", t15_tk6: "data.", t15_tk7: ""
  },
  hu: {
    explorer_title: "MI Sziget 4: Alapok",
    t1_title: "Mi a MI?", t1_text: "A Mesterséges Intelligencia (MI) a gépek azon képessége, hogy emberi intelligenciát igénylő feladatokat végezzenek.", t1_inst: "Párosítsd össze:", t1_h1: "Gép vs Ember.", t1_h2: "Mit csinál az MI?", t1_q: "Mit jelent a MI?", t1_qa: "Mesterséges Intelligencia", t1_qb: "Minden Időben", t1_qc: "Magas Ismeret", t1_qd: "Magyar Irat",
    t1_l1: "MI", t1_r1: "Artificial Intelligence", t1_l2: "Gép", t1_r2: "Számítógép", t1_l3: "Ember", t1_r3: "Biológiai értelem",
    t2_title: "Alan Turing", t2_text: "Alan Turingot az informatika és az MI atyjának tekintik.", t2_inst: "Töltsd ki a hiányt:", t2_h1: "Egy úttörő.", t2_h2: "Kitalált egy tesztet.", t2_q: "Ki volt Alan Turing?", t2_qa: "Matematikus", t2_qb: "Pék", t2_qc: "Űrhajós", t2_qd: "Festő",
    t2_sent: "Turing fejlesztette ki a Turing-___.", t2_qa2: "tesztet", t2_qb2: "utat", t2_qc2: "kódot", t2_qd2: "tervet",
    t3_title: "Gépi tanulás", t3_text: "A gépek adatokból tanulnak anélkül, hogy közvetlenül programoznák őket.", t3_inst: "Válogasd szét:", t3_h1: "Hogyan tanulunk?", t3_h2: "Adat vagy szabály.", t3_q: "Mire van szüksége az ML-nek?", t3_qa: "Adatokra", t3_qb: "Vízre", t3_qc: "Fára", t3_qd: "Homokra",
    t3_bl1: "Forrás", t3_bl2: "Eredmény", t3_i1: "Adatok", t3_i2: "Jóslat", t3_i3: "Példák", t3_i4: "Modell",
    t4_title: "Adat: Az üzemanyag", t4_text: "Az MI-nek hatalmas mennyiségű adatra van szüksége a minták felismeréséhez.", t4_inst: "Tedd sorrendbe a szavakat:", t4_h1: "Sok információ.", t4_h2: "Mintakeresés.", t4_q: "Mi az MI üzemanyaga?", t4_qa: "Adat", t4_qb: "Áram", t4_qc: "Benzin", t4_qd: "Levegő",
    t4_w1: "Az adatok", t4_w2: "fontosak", t4_w3: "az", t4_w4: "MI", t4_w5: "tanításához.", t4_w6: "", t4_w7: "",
    t5_title: "Felügyelt tanulás", t5_text: "Az MI címkézett példákból tanul (pl. képek 'kutya' felirattal).", t5_inst: "Jelöld meg a helyes szót:", t5_h1: "Irányítással.", t5_h2: "Címkézett adatok.", t5_q: "Mit használ a felügyelt tanulás?", t5_qa: "Címkéket", t5_qb: "Véletlent", t5_qc: "Nincs adat", t5_qd: "Zajt",
    t5_tk1: "A felügyelt", t5_tk2: "tanuláshoz", t5_tk3: "címkézett", t5_tk4: "példák", t5_tk5: "kellenek.", t5_tk6: "",
    t6_title: "Nem felügyelt tanulás", t6_text: "Az MI önállóan talál mintákat az adatokban címkék nélkül.", t6_inst: "Párosítsd össze:", t6_h1: "Önálló keresés.", t6_h2: "Csoportalkotás.", t6_q: "Mit csinál a nem felügyelt tanulás?", t6_qa: "Mintát keres", t6_qb: "Kérdez", t6_qc: "Alszik", t6_qd: "Eszik",
    t6_l1: "Csoportok", t6_r1: "Clustering", t6_l2: "Minta", t6_r2: "Pattern", t6_l3: "Nincs tanár", t6_r3: "Autonóm",
    t7_title: "Megerősítéses tanulás", t7_text: "Az MI jutalom és büntetés útján tanul (próba-szerencse).", t7_inst: "Töltsd ki a hiányt:", t7_h1: "Mint egy játék.", t7_h2: "Pontgyűjtés.", t7_q: "Mit kap az MI siker esetén?", t7_qa: "Jutalmat", t7_qb: "Szabit", t7_qc: "Pénzt", t7_qd: "Fagyit",
    t7_sent: "A tanulás során ___ kap a gép.", t7_qa2: "jutalmat", t7_qb2: "szünetet", t7_qc2: "kamerát", t7_qd2: "egeret",
    t8_title: "Neurális hálózatok", t8_text: "Az emberi agy működését utánzó számítógépes rendszerek.", t8_inst: "Válogasd szét:", t8_h1: "Biológia vs Technika.", t8_h2: "Agy modell.", t8_q: "Mi az a neurális háló?", t8_qa: "Egy MI modell", t8_qb: "Halászháló", t8_qc: "Áramháló", t8_qd: "Pókháló",
    t8_bl1: "Biológiai", t8_bl2: "Mesterséges", t8_i1: "Agy", t8_i2: "Szoftver", t8_i3: "Idegsejt", t8_i4: "Algoritmus",
    t9_title: "Ember vs Gép", t9_text: "Az embereknek van empátiája, az MI jó a számolásban.", t9_inst: "Tedd sorrendbe a szavakat:", t9_h1: "Ki mit tud?", t9_h2: "Különbségek.", t9_q: "Mi hiányzik az MI-ből?", t9_qa: "Érzések", t9_qb: "Áram", t9_qc: "Memória", t9_qd: "Gyorsaság",
    t9_w1: "Az", t9_w2: "embereknek", t9_w3: "vannak", t9_w4: "valódi", t9_w5: "érzéseik.", t9_w6: "", t9_w7: "",
    t10_title: "Turing-teszt", t10_text: "Teszt annak megállapítására, hogy egy gép intelligens-e.", t10_inst: "Jelöld meg a helyes szót:", t10_h1: "Megkülönböztetés.", t10_h2: "Ember vagy bot?", t10_q: "Mi a Turing-teszt célja?", t10_qa: "Intelligenst mér", t10_qb: "Súlyt mér", t10_qc: "Színt tippel", t10_qd: "Gyors gépelés",
    t10_tk1: "A", t10_tk2: "Turing-teszt", t10_tk3: "az", t10_tk4: "intelligenciát", t10_tk5: "vizsgálja.", t10_tk6: "",
    t11_title: "Algoritmusok", t11_text: "Lépésről lépésre követhető utasítások a gépnek.", t11_inst: "Párosítsd össze:", t11_h1: "Receptek.", t11_h2: "Folyamatok.", t11_q: "Mi az algoritmus?", t11_qa: "Utasítássorozat", t11_qb: "Képernyő", t11_qc: "Kábel", t11_qd: "Egér",
    t11_l1: "Recept", t11_r1: "Főzés", t11_l2: "Algoritmus", t11_r2: "Program", t11_l3: "Lépés", t11_r3: "Utasítás",
    t12_title: "Elfajultság (Bias)", t12_text: "Az MI átvehet előítéleteket a rossz adatokból.", t12_inst: "Töltsd ki a hiányt:", t12_h1: "Hiba az adatban.", t12_h2: "Igazságtalanság.", t12_q: "Mi a Bias?", t12_qa: "Előítélet", t12_qb: "Gyorsaság", t12_qc: "Szín", t12_qd: "Méret",
    t12_sent: "A rossz adatok ___ vezetnek.", t12_qa2: "előítélethez", t12_qb2: "sikerhez", t12_qc2: "fényhez", t12_qd2: "tudáshoz",
    t13_title: "Jóslás", t13_text: "Az MI valószínűségeket használ események megjósolására.", t13_inst: "Válogasd szét:", t13_h1: "Jövő kitalálása.", t13_h2: "Valószínű.", t13_q: "Mit csinál az időjárás MI?", t13_qa: "Jósol", t13_qb: "Jelen", t13_qc: "Múlt", t13_qd: "Főz",
    t13_bl1: "Bemenet", t13_bl2: "Jóslat", t13_i1: "Adatok", t13_i2: "Eső esélye", t13_i3: "Eladások", t13_i4: "Trend",
    t14_title: "Osztályozás", t14_text: "Dolgok kategóriákba sorolása (pl. spam vagy nem).", t14_inst: "Tedd sorrendbe a szavakat:", t14_h1: "Rendszerezés.", t14_h2: "Fiókok.", t14_q: "Mit csinál a spamszűrő?", t14_qa: "Osztályoz", t14_qb: "Töröl", t14_qc: "Küld", t14_qd: "Nyomtat",
    t14_w1: "Az MI", t14_w2: "mappákba", t14_w3: "rendezi", t14_w4: "a", t14_w5: "leveleket.", t14_w6: "", t14_w7: "",
    t15_title: "Csoportosítás", t15_text: "Hasonló adatok csoportosítása előre megadott kategóriák nélkül.", t15_inst: "Jelöld meg a helyes szót:", t15_h1: "Halmok készítése.", t15_h2: "Hasonlóság.", t15_q: "Mit jelent a Clustering?", t15_qa: "Csoportosítás", t15_qb: "Magány", t15_qc: "Törlés", t15_qd: "Festés",
    t15_tk1: "A csoportosítás", t15_tk2: "hasonló", t15_tk3: "adatokat", t15_tk4: "keres", t15_tk5: "meg.", t15_tk6: "", t15_tk7: ""
  },
  ro: {
    explorer_title: "Insula AI 4: Fundamente",
    t1_title: "Ce este AI?", t1_text: "Inteligența Artificială (AI) este capacitatea mașinilor de a îndeplini sarcini care necesită inteligență umană.", t1_inst: "Potrivește perechile:", t1_h1: "Mașină vs Om.", t1_h2: "Ce face AI?", t1_q: "Ce înseamnă AI?", t1_qa: "Inteligență Artificială", t1_qb: "Informație Actuală", t1_qc: "Insulă Automată", t1_qd: "Intrare Avansată",
    t1_l1: "AI", t1_r1: "Inteligență Artificială", t1_l2: "Mașină", t1_r2: "Computer", t1_l3: "Om", t1_r3: "Inteligență biologică",
    t2_title: "Alan Turing", t2_text: "Alan Turing este considerat părintele informaticii teoretice și al AI.", t2_inst: "Completează spațiul liber:", t2_h1: "Un pionier.", t2_h2: "A inventat un test.", t2_q: "Cine a fost Alan Turing?", t2_qa: "Un matematician", t2_qb: "Un brutar", t2_qc: "Un astronaut", t2_qd: "Un pictor",
    t2_sent: "Turing a dezvoltat ___ Turing.", t2_qa2: "testul", t2_qb2: "calea", t2_qc2: "codul", t2_qd2: "planul",
    t3_title: "Machine Learning", t3_text: "Mașinile învață din date fără a fi programate explicit.", t3_inst: "Sortează în găleți:", t3_h1: "Cum învățăm?", t3_h2: "Date sau reguli.", t3_q: "De ce are nevoie ML?", t3_qa: "Date", t3_qb: "Apă", t3_qc: "Lemn", t3_qd: "Nisip",
    t3_bl1: "Sursă învățare", t3_bl2: "Rezultat", t3_i1: "Date", t3_i2: "Predicție", t3_i3: "Exemple", t3_i4: "Model",
    t4_title: "Datele: Combustibilul", t4_text: "AI are nevoie de cantități uriașe de date pentru a recunoaște modele.", t4_inst: "Pune cuvintele în ordine:", t4_h1: "Multe informații.", t4_h2: "Găsirea modelelor.", t4_q: "Ce este combustibilul pentru AI?", t4_qa: "Datele", t4_qb: "Curentul", t4_qc: "Benzina", t4_qd: "Aerul",
    t4_w1: "Datele", t4_w2: "sunt", t4_w3: "esențiale", t4_w4: "pentru", t4_w5: "antrenarea", t4_w6: "AI.", t4_w7: "",
    t5_title: "Învățare supervizată", t5_text: "AI învață cu exemple etichetate (ex: poze cu 'câine').", t5_inst: "Evidențiază cuvântul corect:", t5_h1: "Cu îndrumare.", t5_h2: "Date etichetate.", t5_q: "Ce folosește învățarea supervizată?", t5_qa: "Etichete", t5_qb: "Noroc", t5_qc: "Fără date", t5_qd: "Zgomot",
    t5_tk1: "Învățarea", t5_tk2: "supervizată", t5_tk3: "necesită", t5_tk4: "exemple", t5_tk5: "etichetate.", t5_tk6: "",
    t6_title: "Învățare nesupervizată", t6_text: "AI găsește singură modele în date fără etichete.", t6_inst: "Potrivește perechile:", t6_h1: "Găsește singur.", t6_h2: "Formează grupuri.", t6_q: "Ce face învățarea nesupervizată?", t6_qa: "Găsește modele", t6_qb: "Pune întrebări", t6_qc: "Doarme", t6_qd: "Mănâncă",
    t6_l1: "Grupuri", t6_r1: "Clustering", t6_l2: "Modele", t6_r2: "Patterns", t6_l3: "Fără profesor", t6_r3: "Autonom",
    t7_title: "Învățare prin recompensă", t7_text: "AI învață prin recompensă și pedeapsă (încercare și eroare).", t7_inst: "Completează spațiul liber:", t7_h1: "Ca un joc.", t7_h2: "Colectează puncte.", t7_q: "Ce primește AI pentru succes?", t7_qa: "Recompensă", t7_qb: "Vacanță", t7_qc: "Bani", t7_qd: "Înghețată",
    t7_sent: "AI primește o ___ pentru succes.", t7_qa2: "recompensă", t7_qb2: "pauză", t7_qc2: "cameră", t7_qd2: "tastatură",
    t8_title: "Rețele Neuronale", t8_text: "Sisteme informatice modelate după creierul uman.", t8_inst: "Sortează în găleți:", t8_h1: "Biologie vs Tehnologie.", t8_h2: "Model creier.", t8_q: "Ce este o rețea neuronală?", t8_qa: "Un model AI", t8_qb: "O plasă de pescuit", t8_qc: "O rețea electrică", t8_qd: "O pânză de păianjen",
    t8_bl1: "Biologic", t8_bl2: "Artificial", t8_i1: "Creier", t8_i2: "Software", t8_i3: "Neuroni", t8_i4: "Algoritm",
    t9_title: "Om vs Mașină", t9_text: "Oamenii au empatie, AI este bună la calcule și modele.", t9_inst: "Pune cuvintele în ordine:", t9_h1: "Cine ce poate?", t9_h2: "Diferențe.", t9_q: "Ce îi lipsește de obicei AI?", t9_qa: "Emoțiile", t9_qb: "Curentul", t9_qc: "Memoria", t9_qd: "Viteza",
    t9_w1: "Oamenii", t9_w2: "au", t9_w3: "sentimente", t9_w4: "reale", t9_w5: "și", t9_w6: "creativitate.", t9_w7: "",
    t10_title: "Testul Turing", t10_text: "Un test pentru a determina dacă o mașină este inteligentă.", t10_inst: "Evidențiază cuvântul corect:", t10_h1: "Distincție.", t10_h2: "Om sau bot?", t10_q: "Scopul testului Turing?", t10_qa: "Testarea inteligenței", t10_qb: "Măsurarea greutății", t10_qc: "Ghicitul culorii", t10_qd: "Tastare rapidă",
    t10_tk1: "Testul", t10_tk2: "Turing", t10_tk3: "verifică", t10_tk4: "inteligența", t10_tk5: "artificială.", t10_tk6: "",
    t11_title: "Algoritmi", t11_text: "Instrucțiuni pas cu pas pentru computer.", t11_inst: "Potrivește perechile:", t11_h1: "Rețete.", t11_h2: "Procese.", t11_q: "Ce este un algoritm?", t11_qa: "Set de instrucțiuni", t11_qb: "Un ecran", t11_qc: "Un cablu", t11_qd: "Un mouse",
    t11_l1: "Rețetă", t11_r1: "Gătit", t11_l2: "Algoritm", t11_r2: "Program", t11_l3: "Pas", t11_r3: "Instrucțiune",
    t12_title: "Bias (Prejudecată)", t12_text: "AI poate prelua prejudecăți din date proaste.", t12_inst: "Completează spațiul liber:", t12_h1: "Erori în date.", t12_h2: "Nedreptate.", t12_q: "Ce este Bias?", t12_qa: "Prejudecată", t12_qb: "Viteză", t12_qc: "Culoare", t12_qd: "Mărime",
    t12_sent: "Datele proaste duc la ___.", t12_qa2: "prejudecăți", t12_qb2: "noroc", t12_qc2: "viteză", t12_qd2: "cunoaștere",
    t13_title: "Predicție", t13_text: "AI folosește probabilități pentru a prezice evenimente.", t13_inst: "Sortează în găleți:", t13_h1: "Ghicirea viitorului.", t13_h2: "Probabil.", t13_q: "Ce face un AI meteo?", t13_qa: "Predicție", t13_qb: "Prezent", t13_qc: "Trecut", t13_qd: "Gătit",
    t13_bl1: "Intrare", t13_bl2: "Predicție", t13_i1: "Date meteo", t13_i2: "Risc ploaie", t13_i3: "Vânzări", t13_i4: "Trend",
    t14_title: "Clasificare", t14_text: "Împărțirea lucrurilor în categorii (ex: spam sau nu).", t14_inst: "Pune cuvintele în ordine:", t14_h1: "Sortare.", t14_h2: "Sertare.", t14_q: "Ce face un filtru de spam?", t14_qa: "Clasificare", t14_qb: "Ștergere", t14_qc: "Trimitere", t14_qd: "Imprimare",
    t14_w1: "AI", t14_w2: "sortează", t14_w3: "email-urile", t14_w4: "în", t14_w5: "diverse", t14_w6: "dosare.", t14_w7: "",
    t15_title: "Clustering", t15_text: "Gruparea punctelor de date similare fără categorii prestabilite.", t15_inst: "Evidențiază cuvântul corect:", t15_h1: "Formarea de grămezi.", t15_h2: "Similitudine.", t15_q: "Ce înseamnă clustering?", t15_qa: "Grupare", t15_qb: "Izolare", t15_qc: "Ștergere", t15_qd: "Pictură",
    t15_tk1: "Clustering-ul", t15_tk2: "găsește", t15_tk3: "grupuri", t15_tk4: "similare", t15_tk5: "în", t15_tk6: "date.", t15_tk7: ""
  }
};

export const INFO_K6_I4_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "simple-icon", icon: "🤖", color: "#2196F3" },
    interactive: { type: "match-pairs", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", pairs: [{left:"t1_l1",right:"t1_r1"},{left:"t1_l2",right:"t1_r2"},{left:"t1_l3",right:"t1_r3"}] },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" }
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "👨‍🔬", color: "#795548" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" }
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "icon-grid", items: [{emoji:"📚",label:"Data"},{emoji:"🧠",label:"Learning"}] },
    interactive: { type: "drag-to-bucket", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", buckets: [{id:"b1",label:"t3_bl1"},{id:"b2",label:"t3_bl2"}], items: [{text:"t3_i1",bucketId:"b1"},{text:"t3_i2",bucketId:"b2"},{text:"t3_i3",bucketId:"b1"},{text:"t3_i4",bucketId:"b2"}] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "⛽", color: "#607D8B" },
    interactive: { type: "word-order", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", words: ["t4_w1", "t4_w2", "t4_w3", "t4_w4", "t4_w5", "t4_w6", "t4_w7"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5].slice(0, 6) },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "🏷️", color: "#FFC107" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5"].filter(x=>x!==""), correctIndices: [3] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" }
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "simple-icon", icon: "🔍", color: "#9E9E9E" },
    interactive: { type: "match-pairs", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", pairs: [{left:"t6_l1",right:"t6_r1"},{left:"t6_l2",right:"t6_r2"},{left:"t6_l3",right:"t6_r3"}] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" }
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "🏆", color: "#E91E63" },
    interactive: { type: "gap-fill", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", sentence: "t7_sent", choices: ["t7_qa2", "t7_qb2", "t7_qc2", "t7_qd2"], correctIndex: 0 },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" }
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "simple-icon", icon: "🕸️", color: "#4CAF50" },
    interactive: { type: "drag-to-bucket", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", buckets: [{id:"b1",label:"t8_bl1"},{id:"b2",label:"t8_bl2"}], items: [{text:"t8_i1",bucketId:"b1"},{text:"t8_i2",bucketId:"b2"},{text:"t8_i3",bucketId:"b1"},{text:"t8_i4",bucketId:"b2"}] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" }
  },
  {
    infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "simple-icon", icon: "👥", color: "#3F51B5" },
    interactive: { type: "word-order", instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2", words: ["t9_w1", "t9_w2", "t9_w3", "t9_w4", "t9_w5", "t9_w6", "t9_w7"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5].slice(0, 6) },
    quiz: { question: "t9_q", choices: ["t9_qa", "t9_qb", "t9_qc", "t9_qd"], answer: "t9_qa" }
  },
  {
    infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "simple-icon", icon: "📝", color: "#00BCD4" },
    interactive: { type: "highlight-text", instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2", tokens: ["t10_tk1","t10_tk2","t10_tk3","t10_tk4","t10_tk5","t10_tk6"].filter(x=>x!==""), correctIndices: [3,4] },
    quiz: { question: "t10_q", choices: ["t10_qa", "t10_qb", "t10_qc", "t10_qd"], answer: "t10_qa" }
  },
  {
    infoTitle: "t11_title", infoText: "t11_text",
    svg: { type: "simple-icon", icon: "🪜", color: "#212121" },
    interactive: { type: "match-pairs", instruction: "t11_inst", hint1: "t11_h1", hint2: "t11_h2", pairs: [{left:"t11_l1",right:"t11_r1"},{left:"t11_l2",right:"t11_r2"},{left:"t11_l3",right:"t11_r3"}] },
    quiz: { question: "t11_q", choices: ["t11_qa", "t11_qb", "t11_qc", "t11_qd"], answer: "t11_qa" }
  },
  {
    infoTitle: "t12_title", infoText: "t12_text",
    svg: { type: "simple-icon", icon: "⚖️", color: "#FF5722" },
    interactive: { type: "gap-fill", instruction: "t12_inst", hint1: "t12_h1", hint2: "t12_h2", sentence: "t12_sent", choices: ["t12_qa2", "t12_qb2", "t12_qc2", "t12_qd2"], correctIndex: 0 },
    quiz: { question: "t12_q", choices: ["t12_qa", "t12_qb", "t12_qc", "t12_qd"], answer: "t12_qa" }
  },
  {
    infoTitle: "t13_title", infoText: "t13_text",
    svg: { type: "icon-grid", items: [{emoji:"📥",label:"Input"},{emoji:"🔮",label:"Prediction"}] },
    interactive: { type: "drag-to-bucket", instruction: "t13_inst", hint1: "t13_h1", hint2: "t13_h2", buckets: [{id:"b1",label:"t13_bl1"},{id:"b2",label:"t13_bl2"}], items: [{text:"t13_i1",bucketId:"b1"},{text:"t13_i2",bucketId:"b2"},{text:"t13_i3",bucketId:"b1"},{text:"t13_i4",bucketId:"b2"}] },
    quiz: { question: "t13_q", choices: ["t13_qa", "t13_qb", "t13_qc", "t13_qd"], answer: "t13_qa" }
  },
  {
    infoTitle: "t14_title", infoText: "t14_text",
    svg: { type: "simple-icon", icon: "📂", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2", words: ["t14_w1", "t14_w2", "t14_w3", "t14_w4", "t14_w5", "t14_w6", "t14_w7"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5].slice(0, 6) },
    quiz: { question: "t14_q", choices: ["t14_qa", "t14_qb", "t14_qc", "t14_qd"], answer: "t14_qa" }
  },
  {
    infoTitle: "t15_title", infoText: "t15_text",
    svg: { type: "simple-icon", icon: "🧩", color: "#673AB7" },
    interactive: { type: "highlight-text", instruction: "t15_inst", hint1: "t15_h1", hint2: "t15_h2", tokens: ["t15_tk1","t15_tk2","t15_tk3","t15_tk4","t15_tk5","t15_tk6","t15_tk7"].filter(x=>x!==""), correctIndices: [0,3] },
    quiz: { question: "t15_q", choices: ["t15_qa", "t15_qb", "t15_qc", "t15_qd"], answer: "t15_qa" }
  }
];

