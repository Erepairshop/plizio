// lib/explorerPools/aiK8_i1.ts
import type { PoolTopicDef } from "./types";

export const INFO_K8_I1_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "KI Insel 1: Grundlagen",
    t1_title: "Was ist KI?", t1_text: "Künstliche Intelligenz ist die Fähigkeit von Maschinen, Aufgaben zu lösen, die normalerweise menschliche Intelligenz erfordern.", t1_inst: "Ordne die Paare zu:", t1_h1: "Mensch vs. Maschine.", t1_h2: "Was kann KI?", t1_q: "Was beschreibt KI am besten?", t1_qa: "Simulation von Intelligenz", t1_qb: "Ein Taschenrechner", t1_qc: "Nur ein Roboter", t1_qd: "Ein Toaster",
    t1_l1: "Mensch", t1_r1: "Biologisch", t1_l2: "KI", t1_r2: "Algorithmus", t1_l3: "Ziel", t1_r3: "Problemlösung",
    t2_title: "Geschichte der KI", t2_text: "Die Idee der KI entstand schon in den 1950er Jahren mit Pionieren wie Alan Turing.", t2_inst: "Fülle die Lücke aus:", t2_h1: "Frühe Anfänge.", t2_h2: "Wer war der Pionier?", t2_q: "In welchem Jahrzehnt begann die moderne KI-Forschung?", t2_qa: "1950er", t2_qb: "1990er", t2_qc: "2010er", t2_qd: "1850er",
    t2_sent: "Alan Turing entwickelte den ___ Test.", t2_qa2: "Turing", t2_qb2: "KI", t2_qc2: "Roboter", t2_qd2: "Mathe",
    t3_title: "Schwache vs. Starke KI", t3_text: "Schwache KI löst eine spezifische Aufgabe (z.B. Schach), starke KI wäre wie ein Mensch in allen Bereichen.", t3_inst: "Sortiere in die Eimer:", t3_h1: "Spezialist vs. Allrounder.", t3_h2: "Was existiert heute?", t3_q: "Welche KI nutzen wir heute hauptsächlich?", t3_qa: "Schwache KI", t3_qb: "Starke KI", t3_qc: "Keine KI", t3_qd: "Super-KI",
    t3_bl1: "Schwach", t3_bl2: "Stark", t3_i1: "Siri", t3_i2: "Sci-Fi Roboter", t3_i3: "Spam-Filter", t3_i4: "Super-Intelligenz",
    t4_title: "Maschinelles Lernen (ML)", t4_text: "ML ist ein Teil der KI, bei dem Computer aus Daten lernen, ohne explizit programmiert zu werden.", t4_inst: "Bringe die Wörter in Ordnung:", t4_h1: "Lernen aus Erfahrung.", t4_h2: "Daten sind der Schlüssel.", t4_q: "Was braucht Maschinelles Lernen?", t4_qa: "Viele Daten", t4_qb: "Nur Strom", t4_qc: "Einen Hammer", t4_qd: "Papier",
    t4_w1: "Maschinen", t4_w2: "lernen", t4_w3: "Muster", t4_w4: "in", t4_w5: "großen", t4_w6: "Datenmengen", t4_w7: "zu erkennen.",
    t5_title: "Überwachtes Lernen", t5_text: "Die KI lernt mit Beispielen, die bereits beschriftet sind (z.B. Hund/Katze).", t5_inst: "Markiere das richtige Wort:", t5_h1: "Lernen mit Lehrer.", t5_h2: "Labels sind wichtig.", t5_q: "Was ist typisch für überwachtes Lernen?", t5_qa: "Beschriftete Daten", t5_qb: "Zufälliges Raten", t5_qc: "Gar keine Daten", t5_qd: "Selbststudium",
    t5_tk1: "Überwachtes", t5_tk2: "Lernen", t5_tk3: "nutzt", t5_tk4: "markierte", t5_tk5: "Beispieldaten.",
    t6_title: "Unüberwachtes Lernen", t6_text: "Die KI sucht selbstständig nach versteckten Mustern in unbeschrifteten Daten.", t6_inst: "Ordne die Paare zu:", t6_h1: "Keine Labels.", t6_h2: "Gruppen finden.", t6_q: "Was macht unüberwachtes Lernen?", t6_qa: "Clustering", t6_qb: "Vokabeltest", t6_qc: "Auswendiglernen", t6_qd: "Malen",
    t6_l1: "Daten", t6_r1: "Unsortiert", t6_l2: "KI", t6_r2: "Findet Muster", t6_l3: "Ergebnis", t6_r3: "Gruppen",
    t7_title: "Bestärkendes Lernen", t7_text: "Die KI lernt durch Belohnung und Bestrafung (wie beim Training eines Hundes).", t7_inst: "Fülle die Lücke aus:", t7_h1: "Feedback-Schleife.", t7_h2: "Belohnung!", t7_q: "Wofür wird Bestärkendes Lernen oft genutzt?", t7_qa: "Spiele & Robotik", t7_qb: "E-Mail schreiben", t7_qc: "Drucken", t7_qd: "Kochen",
    t7_sent: "Die KI erhält eine ___ für gute Aktionen.", t7_qa2: "Belohnung", t7_qb2: "Strafe", t7_qc2: "Pause", t7_qd2: "Mail",
    t8_title: "Daten sind Treibstoff", t8_text: "Ohne hochwertige Daten kann eine KI nicht gut lernen.", t8_inst: "Sortiere in die Eimer:", t8_h1: "Gute vs. schlechte Daten.", t8_h2: "Qualität zählt.", t8_q: "Was passiert bei schlechten Daten?", t8_qa: "KI macht Fehler", t8_qb: "KI wird schneller", t8_qc: "KI explodiert", t8_qd: "Nichts",
    t8_bl1: "Gut", t8_bl2: "Schlecht", t8_i1: "Sauber sortiert", t8_i2: "Veraltet", t8_i3: "Vollständig", t8_i4: "Fehlerhaft",
    t9_title: "Datenbeschriftung", t9_text: "Menschen markieren Daten, damit die KI weiß, was darauf zu sehen ist (Labeling).", t9_inst: "Bringe die Wörter in Ordnung:", t9_h1: "Was ist auf dem Bild?", t9_h2: "Menschen helfen.", t9_q: "Wie nennt man das Markieren von Daten?", t9_qa: "Labeling", t9_qb: "Gaming", t9_qc: "Surfen", t9_qd: "Drucken",
    t9_w1: "Menschen", t9_w2: "markieren", t9_w3: "Bilder", t9_w4: "für", t9_w5: "das", t9_w6: "Training.",
    t10_title: "Algorithmen", t10_text: "Ein Algorithmus ist eine Schritt-für-Schritt-Anleitung zur Problemlösung.", t10_inst: "Markiere das richtige Wort:", t10_h1: "Das Rezept.", t10_h2: "Klare Regeln.", t10_q: "Was ist ein Algorithmus?", t10_qa: "Rechenvorschrift", t10_qb: "Ein Bildschirm", t10_qc: "Ein Kabel", t10_qd: "Eine Batterie",
    t10_tk1: "Ein", t10_tk2: "Algorithmus", t10_tk3: "ist", t10_tk4: "wie", t10_tk5: "ein", t10_tk6: "Rezept.",
    t11_title: "Features (Merkmale)", t11_text: "Features sind die Eigenschaften, auf die die KI achtet (z.B. Fellfarbe, Größe).", t11_inst: "Ordne die Paare zu:", t11_h1: "Was ist wichtig?", t11_h2: "Eigenschaften.", t11_q: "Was wäre ein Feature für ein Auto?", t11_qa: "PS-Zahl", t11_qb: "Der Fahrer", t11_qc: "Das Wetter", t11_qd: "Der Benzinpreis",
    t11_l1: "Haus", t11_r1: "Anzahl Zimmer", t11_l2: "Frucht", t11_r2: "Farbe", t11_l3: "Mensch", t11_r3: "Größe",
    t12_title: "Training vs. Test", t12_text: "Zuerst trainiert die KI mit Daten, dann wird sie mit neuen Daten getestet.", t12_inst: "Fülle die Lücke aus:", t12_h1: "Lernen und Prüfen.", t12_h2: "Neue Daten.", t12_q: "Warum testen wir die KI?", t12_qa: "Genauigkeit prüfen", t12_qb: "Zum Spaß", t12_qc: "Daten löschen", t12_qd: "Energie sparen",
    t12_sent: "Im ___ zeigt die KI, was sie gelernt hat.", t12_qa2: "Test", t12_qb2: "Training", t12_qc2: "Schlaf", t12_qd2: "Urlaub",
    t13_title: "Bias (Voreingenommenheit)", t13_text: "Wenn Trainingsdaten einseitig sind, wird auch die KI einseitig und unfair.", t13_inst: "Sortiere in die Eimer:", t13_h1: "Fair vs. Unfair.", t13_h2: "Einseitige Daten.", t13_q: "Was verursacht Bias?", t13_qa: "Einseitige Daten", t13_qb: "Schnelle CPUs", t13_qc: "Viel Speicher", t13_qd: "Gute Kabel",
    t13_bl1: "Neutral", t13_bl2: "Bias", t13_i1: "Vielfältige Daten", t13_i2: "Nur Männer-Fotos", t13_i3: "Alle Altersgruppen", t13_i4: "Nur eine Region",
    t14_title: "Sensoren und Input", t14_text: "Roboter nutzen Sensoren (Kameras, Lidar), um Daten aus der Umwelt zu sammeln.", t14_inst: "Bringe die Wörter in Ordnung:", t14_h1: "Augen der Maschine.", t14_h2: "Input sammeln.", t14_q: "Welcher Sensor hilft beim Sehen?", t14_qa: "Kamera", t14_qb: "Mikrofon", t14_qc: "Thermometer", t14_qd: "Tastatur",
    t14_w1: "Sensoren", t14_w2: "liefern", t14_w3: "der", t14_w4: "KI", t14_w5: "wichtige", t14_w6: "Umwelt-Daten.",
    t15_title: "Turing Test", t15_text: "Ein Test, um festzustellen, ob eine Maschine ein dem Menschen gleichwertiges Denkvermögen zeigt.", t15_inst: "Markiere das richtige Wort:", t15_h1: "Kann sie denken?", t15_h2: "Mensch oder Maschine?", t15_q: "Wer erfand den Turing Test?", t15_qa: "Alan Turing", t15_qb: "Bill Gates", t15_qc: "Steve Jobs", t15_qd: "Elon Musk",
    t15_tk1: "Der", t15_tk2: "Turing", t15_tk3: "Test", t15_tk4: "prüft", t15_tk5: "menschliches", t15_tk6: "Verhalten."
  },
  en: {
    explorer_title: "AI Island 1: Basics",
    t1_title: "What is AI?", t1_text: "Artificial Intelligence is the ability of machines to perform tasks that normally require human intelligence.", t1_inst: "Match the pairs:", t1_h1: "Human vs. Machine.", t1_h2: "What can AI do?", t1_q: "What describes AI best?", t1_qa: "Simulation of intelligence", t1_qb: "A calculator", t1_qc: "Just a robot", t1_qd: "A toaster",
    t1_l1: "Human", t1_r1: "Biological", t1_l2: "AI", t1_r2: "Algorithm", t1_l3: "Goal", t1_r3: "Problem solving",
    t2_title: "History of AI", t2_text: "The idea of AI was born in the 1950s with pioneers like Alan Turing.", t2_inst: "Fill in the blank:", t2_h1: "Early beginnings.", t2_h2: "Who was the pioneer?", t2_q: "In which decade did modern AI research begin?", t2_qa: "1950s", t2_qb: "1990s", t2_qc: "2010s", t2_qd: "1850s",
    t2_sent: "Alan Turing developed the ___ test.", t2_qa2: "Turing", t2_qb2: "AI", t2_qc2: "robot", t2_qd2: "math",
    t3_title: "Narrow vs. General AI", t3_text: "Narrow AI solves a specific task (e.g. chess), General AI would be like a human in all areas.", t3_inst: "Sort into buckets:", t3_h1: "Specialist vs. All-rounder.", t3_h2: "What exists today?", t3_q: "What type of AI do we mainly use today?", t3_qa: "Narrow AI", t3_qb: "General AI", t3_qc: "No AI", t3_qd: "Super-AI",
    t3_bl1: "Narrow", t3_bl2: "General", t3_i1: "Siri", t3_i2: "Sci-fi robots", t3_i3: "Spam filter", t3_i4: "Super-intelligence",
    t4_title: "Machine Learning (ML)", t4_text: "ML is a part of AI where computers learn from data without being explicitly programmed.", t4_inst: "Put the words in order:", t4_h1: "Learning from experience.", t4_h2: "Data is key.", t4_q: "What does Machine Learning need?", t4_qa: "Lots of data", t4_qb: "Only power", t4_qc: "A hammer", t4_qd: "Paper",
    t4_w1: "Machines", t4_w2: "learn", t4_w3: "to", t4_w4: "recognize", t4_w5: "patterns", t4_w6: "in", t4_w7: "data.",
    t5_title: "Supervised Learning", t5_text: "The AI learns with examples that are already labeled (e.g. dog/cat).", t5_inst: "Highlight the correct word:", t5_h1: "Learning with a teacher.", t5_h2: "Labels are important.", t5_q: "What is typical for supervised learning?", t5_qa: "Labeled data", t5_qb: "Random guessing", t5_qc: "No data at all", t5_qd: "Self-study",
    t5_tk1: "Supervised", t5_tk2: "learning", t5_tk3: "uses", t5_tk4: "labeled", t5_tk5: "example", t5_tk6: "data.",
    t6_title: "Unsupervised Learning", t6_text: "The AI independently looks for hidden patterns in unlabeled data.", t6_inst: "Match the pairs:", t6_h1: "No labels.", t6_h2: "Finding groups.", t6_q: "What does unsupervised learning do?", t6_qa: "Clustering", t6_qb: "Vocabulary test", t6_qc: "Memorizing", t6_qd: "Painting",
    t6_l1: "Data", t6_r1: "Unsorted", t6_l2: "AI", t6_r2: "Finds patterns", t6_l3: "Result", t6_r3: "Groups",
    t7_title: "Reinforcement Learning", t7_text: "The AI learns through reward and punishment (like training a dog).", t7_inst: "Fill in the blank:", t7_h1: "Feedback loop.", t7_h2: "Reward!", t7_q: "What is reinforcement learning often used for?", t7_qa: "Games & Robotics", t7_qb: "Writing emails", t7_qc: "Printing", t7_qd: "Cooking",
    t7_sent: "The AI receives a ___ for good actions.", t7_qa2: "reward", t7_qb2: "penalty", t7_qc2: "break", t7_qd2: "mail",
    t8_title: "Data is Fuel", t8_text: "Without high-quality data, an AI cannot learn well.", t8_inst: "Sort into buckets:", t8_h1: "Good vs. bad data.", t8_h2: "Quality matters.", t8_q: "What happens with bad data?", t8_qa: "AI makes mistakes", t8_qb: "AI gets faster", t8_qc: "AI explodes", t8_qd: "Nothing",
    t8_bl1: "Good", t8_bl2: "Bad", t8_i1: "Cleanly sorted", t8_i2: "Outdated", t8_i3: "Complete", t8_i4: "Incorrect",
    t9_title: "Data Labeling", t9_text: "Humans mark data so the AI knows what is shown on it.", t9_inst: "Put the words in order:", t9_h1: "What's in the image?", t9_h2: "Humans helping.", t9_q: "What is marking data called?", t9_qa: "Labeling", t9_qb: "Gaming", t9_qc: "Surfing", t9_qd: "Printing",
    t9_w1: "Humans", t9_w2: "label", t9_w3: "images", t9_w4: "for", t9_w5: "AI", t9_w6: "training.",
    t10_title: "Algorithms", t10_text: "An algorithm is a step-by-step set of instructions for solving a problem.", t10_inst: "Highlight the correct word:", t10_h1: "The recipe.", t10_h2: "Clear rules.", t10_q: "What is an algorithm?", t10_qa: "Set of rules", t10_qb: "A screen", t10_qc: "A cable", t10_qd: "A battery",
    t10_tk1: "An", t10_tk2: "algorithm", t10_tk3: "is", t10_tk4: "like", t10_tk5: "a", t10_tk6: "recipe.",
    t11_title: "Features", t11_text: "Features are the properties the AI looks at (e.g. fur color, size).", t11_inst: "Match the pairs:", t11_h1: "What is important?", t11_h2: "Properties.", t11_q: "What would be a feature for a car?", t11_qa: "Horsepower", t11_qb: "The driver", t11_qc: "The weather", t11_qd: "Gas price",
    t11_l1: "House", t11_r1: "Number of rooms", t11_l2: "Fruit", t11_r2: "Color", t11_l3: "Human", t11_r3: "Height",
    t12_title: "Training vs. Test", t12_text: "First, the AI trains with data, then it is tested with new data.", t12_inst: "Fill in the blank:", t12_h1: "Learning and testing.", t12_h2: "New data.", t12_q: "Why do we test the AI?", t12_qa: "Check accuracy", t12_qb: "For fun", t12_qc: "Delete data", t12_qd: "Save energy",
    t12_sent: "In the ___, the AI shows what it learned.", t12_qa2: "test", t12_qb2: "training", t12_qc2: "sleep", t12_qd2: "vacation",
    t13_title: "Bias", t13_text: "If training data is biased, the AI will also be biased and unfair.", t13_inst: "Sort into buckets:", t13_h1: "Fair vs. Unfair.", t13_h2: "One-sided data.", t13_q: "What causes bias?", t13_qa: "One-sided data", t13_qb: "Fast CPUs", t13_qc: "Lots of memory", t13_qd: "Good cables",
    t13_bl1: "Neutral", t13_bl2: "Biased", t13_i1: "Diverse data", t13_i2: "Only male photos", t13_i3: "All age groups", t13_i4: "Only one region",
    t14_title: "Sensors and Input", t14_text: "Robots use sensors (cameras, lidar) to collect data from the environment.", t14_inst: "Put the words in order:", t14_h1: "Eyes of the machine.", t14_h2: "Collect input.", t14_q: "Which sensor helps with seeing?", t14_qa: "Camera", t14_qb: "Microphone", t14_qc: "Thermometer", t14_qd: "Keyboard",
    t14_w1: "Sensors", t14_w2: "provide", t14_w3: "the", t14_w4: "AI", t14_w5: "with", t14_w6: "environmental", t14_w7: "data.",
    t15_title: "Turing Test", t15_text: "A test to determine if a machine shows human-equivalent intelligence.", t15_inst: "Highlight the correct word:", t15_h1: "Can it think?", t15_h2: "Human or machine?", t15_q: "Who invented the Turing Test?", t15_qa: "Alan Turing", t15_qb: "Bill Gates", t15_qc: "Steve Jobs", t15_qd: "Elon Musk",
    t15_tk1: "The", t15_tk2: "Turing", t15_tk3: "test", t15_tk4: "checks", t15_tk5: "human", t15_tk6: "behavior."
  },
  hu: {
    explorer_title: "MI Sziget 1: Alapok",
    t1_title: "Mi az a MI?", t1_text: "A mesterséges intelligencia a gépek azon képessége, hogy emberi intelligenciát igénylő feladatokat oldjanak meg.", t1_inst: "Párosítsd össze:", t1_h1: "Ember vs. Gép.", t1_h2: "Mire képes a MI?", t1_q: "Mi írja le legjobban a MI-t?", t1_qa: "Az intelligencia szimulációja", t1_qb: "Egy számológép", t1_qc: "Csak egy robot", t1_qd: "Egy kenyérpirító",
    t1_l1: "Ember", t1_r1: "Biológiai", t1_l2: "MI", t1_r2: "Algoritmus", t1_l3: "Cél", t1_r3: "Problémamegoldás",
    t2_title: "A MI története", t2_text: "A MI ötlete az 1950-es években született olyan úttörőkkel, mint Alan Turing.", t2_inst: "Töltsd ki a hiányt:", t2_h1: "Korai kezdetek.", t2_h2: "Ki volt az úttörő?", t2_q: "Melyik évtizedben kezdődött a modern MI kutatás?", t2_qa: "1950-es évek", t2_qb: "1990-es évek", t2_qc: "2010-es évek", t2_qd: "1850-es évek",
    t2_sent: "Alan Turing fejlesztette ki a ___ tesztet.", t2_qa2: "Turing", t2_qb2: "MI", t2_qc2: "robot", t2_qd2: "matek",
    t3_title: "Gyenge vs. Erős MI", t3_text: "A gyenge MI egy konkrét feladatot old meg (pl. sakk), az erős MI minden téren olyan lenne, mint az ember.", t3_inst: "Válogasd szét:", t3_h1: "Specialista vs. Mindentudó.", t3_h2: "Mi létezik ma?", t3_q: "Milyen MI-t használunk ma főként?", t3_qa: "Gyenge MI", t3_qb: "Erős MI", t3_qc: "Nincs MI", t3_qd: "Szuper-MI",
    t3_bl1: "Gyenge", t3_bl2: "Erős", t3_i1: "Siri", t3_i2: "Sci-fi robotok", t3_i3: "Spam szűrő", t3_i4: "Szuperintelligencia",
    t4_title: "Gépi tanulás (ML)", t4_text: "Az ML a MI része, ahol a számítógépek adatokból tanulnak anélkül, hogy közvetlenül programoznák őket.", t4_inst: "Tedd sorrendbe a szavakat:", t4_h1: "Tanulás tapasztalatból.", t4_h2: "Az adat a kulcs.", t4_q: "Mire van szüksége a gépi tanulásnak?", t4_qa: "Sok adatra", t4_qb: "Csak áramra", t4_qc: "Egy kalapácsra", t4_qd: "Papírra",
    t4_w1: "A gépek", t4_w2: "megtanulják", t4_w3: "felismerni", t4_w4: "a mintákat", t4_w5: "a nagy", t4_w6: "adatmennyiségekben.", t4_w7: "",
    t5_title: "Felügyelt tanulás", t5_text: "A MI olyan példákból tanul, amelyek már fel vannak címkézve (pl. kutya/macska).", t5_inst: "Jelöld meg a helyes szót:", t5_h1: "Tanulás tanárral.", t5_h2: "A címkék fontosak.", t5_q: "Mi jellemző a felügyelt tanulásra?", t5_qa: "Címkézett adatok", t5_qb: "Véletlen találgatás", t5_qc: "Egyáltalán nincs adat", t5_qd: "Önképzés",
    t5_tk1: "A felügyelt", t5_tk2: "tanulás", t5_tk3: "felcímkézett", t5_tk4: "példaadatokat", t5_tk5: "használ.",
    t6_title: "Felügyelet nélküli tanulás", t6_text: "A MI önállóan keres rejtett mintákat a címkézetlen adatokban.", t6_inst: "Párosítsd össze:", t6_h1: "Nincsenek címkék.", t6_h2: "Csoportok keresése.", t6_q: "Mit csinál a felügyelet nélküli tanulás?", t6_qa: "Klaszterezés", t6_qb: "Szódolgozat", t6_qc: "Magolás", t6_qd: "Festés",
    t6_l1: "Adatok", t6_r1: "Rendezetlen", t6_l2: "MI", t6_r2: "Mintát talál", t6_l3: "Eredmény", t6_r3: "Csoportok",
    t7_title: "Megerősítéses tanulás", t7_text: "A MI jutalmazás és büntetés útján tanul (mint a kutyakiképzésnél).", t7_inst: "Töltsd ki a hiányt:", t7_h1: "Visszacsatolás.", t7_h2: "Jutalom!", t7_q: "Mire használják gyakran a megerősítéses tanulást?", t7_qa: "Játékok és robotika", t7_qb: "E-mail írás", t7_qc: "Nyomtatás", t7_qd: "Főzés",
    t7_sent: "A MI ___ kap a jó lépésekért.", t7_qa2: "jutalmat", t7_qb2: "büntetést", t7_qc2: "szünetet", t7_qd2: "levelet",
    t8_title: "Az adat az üzemanyag", t8_text: "Kiváló minőségű adatok nélkül a MI nem tud jól tanulni.", t8_inst: "Válogasd szét:", t8_h1: "Jó vs. rossz adatok.", t8_h2: "A minőség számít.", t8_q: "Mi történik rossz adatok esetén?", t8_qa: "A MI hibázik", t8_qb: "A MI gyorsabb lesz", t8_qc: "A MI felrobban", t8_qd: "Semmi",
    t8_bl1: "Jó", t8_bl2: "Rossz", t8_i1: "Tisztán rendezett", t8_i2: "Elavult", t8_i3: "Teljes", t8_i4: "Hibás",
    t9_title: "Adatcímkézés", t9_text: "Emberek jelölik meg az adatokat, hogy a MI tudja, mi van rajtuk (labeling).", t9_inst: "Tedd sorrendbe a szavakat:", t9_h1: "Mi van a képen?", t9_h2: "Emberek segítenek.", t9_q: "Hogy hívják az adatok megjelölését?", t9_qa: "Címkézés", t9_qb: "Gaming", t9_qc: "Netezés", t9_qd: "Nyomtatás",
    t9_w1: "Emberek", t9_w2: "jelölik", t9_w3: "meg", t9_w4: "a képeket", t9_w5: "a MI", t9_w6: "tanításához.", t9_w7: "",
    t10_title: "Algoritmusok", t10_text: "Az algoritmus egy lépésről lépésre követhető utasítássorozat egy probléma megoldására.", t10_inst: "Jelöld meg a helyes szót:", t10_h1: "A recept.", t10_h2: "Világos szabályok.", t10_q: "Mi az algoritmus?", t10_qa: "Szabályrendszer", t10_qb: "Egy képernyő", t10_qc: "Egy kábel", t10_qd: "Egy elem",
    t10_tk1: "Az", t10_tk2: "algoritmus", t10_tk3: "olyan", t10_tk4: "mint", t10_tk5: "egy", t10_tk6: "recept.",
    t11_title: "Jellemzők (Features)", t11_text: "A jellemzők azok a tulajdonságok, amiket a MI figyel (pl. szőrszín, méret).", t11_inst: "Párosítsd össze:", t11_h1: "Mi a fontos?", t11_h2: "Tulajdonságok.", t11_q: "Mi lenne egy autó jellemzője?", t11_qa: "Lóerő", t11_qb: "A sofőr", t11_qc: "Az időjárás", t11_qd: "Benzinár",
    t11_l1: "Ház", t11_r1: "Szobák száma", t11_l2: "Gyümölcs", t11_r2: "Szín", t11_l3: "Ember", t11_r3: "Magasság",
    t12_title: "Tanítás vs. Tesztelés", t12_text: "Először a MI adatokon tanul, majd új adatokkal teszteljük.", t12_inst: "Töltsd ki a hiányt:", t12_h1: "Tanulás és vizsga.", t12_h2: "Új adatok.", t12_q: "Miért teszteljük a MI-t?", t12_qa: "Pontosság ellenőrzése", t12_qb: "Szórakozásból", t12_qc: "Adattörlés miatt", t12_qd: "Spórolás miatt",
    t12_sent: "A ___ során derül ki, mit tanult a MI.", t12_qa2: "tesztelés", t12_qb2: "tanítás", t12_qc2: "alvás", t12_qd2: "nyaralás",
    t13_title: "Torzítás (Bias)", t13_text: "Ha a tanító adatok részrehajlóak, a MI is igazságtalan lesz.", t13_inst: "Válogasd szét:", t13_h1: "Fair vs. Igazságtalan.", t13_h2: "Egyoldalú adatok.", t13_q: "Mi okozza a torzítást?", t13_qa: "Egyoldalú adatok", t13_qb: "Gyors CPU-k", t13_qc: "Sok memória", t13_qd: "Jó kábelek",
    t13_bl1: "Semleges", t13_bl2: "Torzított", t13_i1: "Változatos adatok", t13_i2: "Csak férfi fotók", t13_i3: "Minden korosztály", t13_i4: "Csak egy régió",
    t14_title: "Szenzorok és bemenet", t14_text: "A robotok szenzorokat (kamera, lidar) használnak a környezeti adatok gyűjtésére.", t14_inst: "Tedd sorrendbe a szavakat:", t14_h1: "A gép szemei.", t14_h2: "Adatgyűjtés.", t14_q: "Melyik szenzor segít a látásban?", t14_qa: "Camera", t14_qb: "Mikrofon", t14_qc: "Hőmérő", t14_qd: "Billentyűzet",
    t14_w1: "A szenzorok", t14_w2: "fontos", t14_w3: "környezeti", t14_w4: "adatokat", t14_w5: "szolgáltatnak", t14_w6: "a MI-nek.", t14_w7: "",
    t15_title: "Turing-teszt", t15_text: "Teszt annak megállapítására, hogy a gép képes-e emberihez hasonló gondolkodásra.", t15_inst: "Jelöld meg a helyes szót:", t15_h1: "Tud gondolkodni?", t15_h2: "Ember vagy gép?", t15_q: "Ki találta fel a Turing-tesztet?", t15_qa: "Alan Turing", t15_qb: "Bill Gates", t15_qc: "Steve Jobs", t15_qd: "Elon Musk",
    t15_tk1: "A Turing-teszt", t15_tk2: "az", t15_tk3: "emberi", t15_tk4: "viselkedést", t15_tk5: "vizsgálja", t15_tk6: "gépeknél."
  },
  ro: {
    explorer_title: "Insula AI 1: Noțiuni de bază",
    t1_title: "Ce este AI?", t1_text: "Inteligența Artificială este capacitatea mașinilor de a rezolva sarcini care necesită în mod normal inteligență umană.", t1_inst: "Potrivește perechile:", t1_h1: "Om vs. Mașină.", t1_h2: "Ce poate face AI?", t1_q: "Ce descrie cel mai bine AI?", t1_qa: "Simularea inteligenței", t1_qb: "Un calculator", t1_qc: "Doar un robot", t1_qd: "Un prăjitor de pâine",
    t1_l1: "Om", t1_r1: "Biologic", t1_l2: "AI", t1_r2: "Algoritm", t1_l3: "Scop", t1_r3: "Rezolvare probleme",
    t2_title: "Istoria AI", t2_text: "Ideea de AI s-a născut în anii 1950 cu pionieri precum Alan Turing.", t2_inst: "Completează spațiul liber:", t2_h1: "Începuturi timpurii.", t2_h2: "Cine a fost pionierul?", t2_q: "În ce deceniu a început cercetarea modernă în AI?", t2_qa: "Anii '50", t2_qb: "Anii '90", t2_qc: "Anii 2010", t2_qd: "Anii 1850",
    t2_sent: "Alan Turing a dezvoltat testul ___.", t2_qa2: "Turing", t2_qb2: "AI", t2_qc2: "robot", t2_qd2: "mate",
    t3_title: "AI Slab vs. Puternic", t3_text: "AI slab rezolvă o sarcină specifică (ex. șah), AI puternic ar fi ca un om în toate domeniile.", t3_inst: "Sortează în găleți:", t3_h1: "Specialist vs. Universal.", t3_h2: "Ce există azi?", t3_q: "Ce tip de AI folosim în principal azi?", t3_qa: "AI Slab", t3_qb: "AI Puternic", t3_qc: "Fără AI", t3_qd: "Super-AI",
    t3_bl1: "Slab", t3_bl2: "Puternic", t3_i1: "Siri", t3_i2: "Roboți Sci-Fi", t3_i3: "Filtru spam", t3_i4: "Super-inteligență",
    t4_title: "Machine Learning (ML)", t4_text: "ML este o parte a AI în care computerele învață din date fără a fi programate explicit.", t4_inst: "Pune cuvintele în ordine:", t4_h1: "Învățare din experiență.", t4_h2: "Datele sunt cheia.", t4_q: "De ce are nevoie Machine Learning?", t4_qa: "Multe date", t4_qb: "Doar curent", t4_qc: "Un ciocan", t4_qd: "Hârtie",
    t4_w1: "Mașinile", t4_w2: "învață", t4_w3: "să", t4_w4: "recunoască", t4_w5: "tipare", t4_w6: "în", t4_w7: "date.",
    t5_title: "Învățare supervizată", t5_text: "AI învață cu exemple care sunt deja etichetate (ex. câine/pisică).", t5_inst: "Evidențiază cuvântul corect:", t5_h1: "Învățare cu profesor.", t5_h2: "Etichetele sunt importante.", t5_q: "Ce este tipic pentru învățarea supervizată?", t5_qa: "Date etichetate", t5_qb: "Ghicit aleatoriu", t5_qc: "Fără date deloc", t5_qd: "Studiu propriu",
    t5_tk1: "Învățarea", t5_tk2: "supervizată", t5_tk3: "folosește", t5_tk4: "date", t5_tk5: "de", t5_tk6: "exemplu", t5_tk7: "etichetate.",
    t6_title: "Învățare nesupervizată", t6_text: "AI caută singură tipare ascunse în date neetichetate.", t6_inst: "Potrivește perechile:", t6_h1: "Fără etichete.", t6_h2: "Găsirea grupurilor.", t6_q: "Ce face învățarea nesupervizată?", t6_qa: "Clustering", t6_qb: "Test vocabular", t6_qc: "Memorare", t6_qd: "Pictură",
    t6_l1: "Date", t6_r1: "Nesortate", t6_l2: "AI", t6_r2: "Găsește tipare", t6_l3: "Rezultat", t6_r3: "Grupuri",
    t7_title: "Învățare prin recompensă", t7_text: "AI învață prin recompensă și pedeapsă (ca la dresajul unui câine).", t7_inst: "Completează spațiul liber:", t7_h1: "Buclă de feedback.", t7_h2: "Recompensă!", t7_q: "Pentru ce se folosește des învățarea prin recompensă?", t7_qa: "Jocuri și robotică", t7_qb: "Scris e-mailuri", t7_qc: "Imprimare", t7_qd: "Gătit",
    t7_sent: "AI primește o ___ pentru acțiuni bune.", t7_qa2: "recompensă", t7_qb2: "pedeapsă", t7_qc2: "pauză", t7_qd2: "mail",
    t8_title: "Datele sunt combustibil", t8_text: "Fără date de înaltă calitate, un AI nu poate învăța bine.", t8_inst: "Sortează în găleți:", t8_h1: "Date bune vs. rele.", t8_h2: "Calitatea contează.", t8_q: "Ce se întâmplă cu datele proaste?", t8_qa: "AI face greșeli", t8_qb: "AI devine mai rapid", t8_qc: "AI explodează", t8_qd: "Nimic",
    t8_bl1: "Bune", t8_bl2: "Rele", t8_i1: "Sortate curat", t8_i2: "Învechite", t8_i3: "Complete", t8_i4: "Eronate",
    t9_title: "Etichetarea datelor", t9_text: "Oamenii marchează datele pentru ca AI să știe ce apare în ele (labeling).", t9_inst: "Pune cuvintele în ordine:", t9_h1: "Ce este în imagine?", t9_h2: "Oamenii ajută.", t9_q: "Cum se numește marcarea datelor?", t9_qa: "Labeling", t9_qb: "Gaming", t9_qc: "Surfing", t9_qd: "Printare",
    t9_w1: "Oamenii", t9_w2: "etichetează", t9_w3: "imagini", t9_w4: "pentru", t9_w5: "antrenarea", t9_w6: "AI.", t9_w7: "",
    t10_title: "Algoritmi", t10_text: "Un algoritm este un set de instrucțiuni pas cu pas pentru rezolvarea unei probleme.", t10_inst: "Evidențiază cuvântul corect:", t10_h1: "Rețeta.", t10_h2: "Reguli clare.", t10_q: "Ce este un algoritm?", t10_qa: "Set de reguli", t10_qb: "Un ecran", t10_qc: "Un cablu", t10_qd: "O baterie",
    t10_tk1: "Un", t10_tk2: "algoritmu", t10_tk3: "este", t10_tk4: "ca", t10_tk5: "o", t10_tk6: "rețetă.",
    t11_title: "Caracteristici (Features)", t11_text: "Caracteristicile sunt proprietățile la care se uită AI (ex. culoarea blănii, mărime).", t11_inst: "Potrivește perechile:", t11_h1: "Ce este important?", t11_h2: "Proprietăți.", t11_q: "Ce ar fi o caracteristică pentru o mașină?", t11_qa: "Cai putere", t11_qb: "Șoferul", t11_qc: "Vremea", t11_qd: "Prețul benzinei",
    t11_l1: "Casă", t11_r1: "Nr. camere", t11_l2: "Fruct", t11_r2: "Culoare", t11_l3: "Om", t11_r3: "Înălțime",
    t12_title: "Antrenament vs. Test", t12_text: "Mai întâi, AI se antrenează pe date, apoi este testat cu date noi.", t12_inst: "Completează spațiul liber:", t12_h1: "Învățare și examinare.", t12_h2: "Date noi.", t12_q: "De ce testăm AI?", t12_qa: "Verificare precizie", t12_qb: "De distracție", t12_qc: "Ștergere date", t12_qd: "Economisire",
    t12_sent: "În timpul ___ vedem ce a învátat AI.", t12_qa2: "testării", t12_qb2: "antrenării", t12_qc2: "somnului", t12_qd2: "vacanței",
    t13_title: "Bias (Prejudecată)", t13_text: "Dacă datele de antrenament sunt părtinitoare, AI va fi, de asemenea, nedrept.", t13_inst: "Sortează în găleți:", t13_h1: "Fair vs. Nedrept.", t13_h2: "Date unilaterale.", t13_q: "Ce cauzează bias-ul?", t13_qa: "Date unilaterale", t13_qb: "CPU-uri rapide", t13_qc: "Multă memorie", t13_qd: "Cabluri bune",
    t13_bl1: "Neutral", t13_bl2: "Bias", t13_i1: "Date diverse", t13_i2: "Doar poze cu bărbați", t13_i3: "Toate vârstele", t13_i4: "Doar o regiune",
    t14_title: "Senzori și Input", t14_text: "Roboții folosesc senzori (camere, lidar) pentru a colecta date din mediu.", t14_inst: "Pune cuvintele în ordine:", t14_h1: "Ochii mașinii.", t14_h2: "Colectare input.", t14_q: "Care senzor ajută la văz?", t14_qa: "Cameră", t14_qb: "Microfon", t14_qc: "Termometru", t14_qd: "Tastatură",
    t14_w1: "Senzorii", t14_w2: "oferă", t14_w3: "date", t14_w4: "de", t14_w5: "mediu", t14_w6: "importante", t14_w7: "către AI.",
    t15_title: "Testul Turing", t15_text: "Un test pentru a determina dacă o mașină prezintă o inteligență echivalentă cu cea umană.", t15_inst: "Evidențiază cuvântul corect:", t15_h1: "Poate gândi?", t15_h2: "Om sau mașină?", t15_q: "Cine a inventat testul Turing?", t15_qa: "Alan Turing", t15_qb: "Bill Gates", t15_qc: "Steve Jobs", t15_qd: "Elon Musk",
    t15_tk1: "Testul", t15_tk2: "Turing", t15_tk3: "verifică", t15_tk4: "comportamentul", t15_tk5: "uman", t15_tk6: "la mașini."
  }
};

export const INFO_K8_I1_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "simple-icon", icon: "🧠", color: "#9C27B0" },
    interactive: { type: "match-pairs", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", pairs: [{left:"t1_l1",right:"t1_r1"},{left:"t1_l2",right:"t1_r2"},{left:"t1_l3",right:"t1_r3"}] },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" }
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "🕰️", color: "#795548" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" }
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "icon-grid", items: [{emoji:"♟️",label:"Narrow"},{emoji:"🤖",label:"General"}] },
    interactive: { type: "drag-to-bucket", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", buckets: [{id:"b1",label:"t3_bl1"},{id:"b2",label:"t3_bl2"}], items: [{text:"t3_i1",bucketId:"b1"},{text:"t3_i2",bucketId:"b2"},{text:"t3_i3",bucketId:"b1"},{text:"t3_i4",bucketId:"b2"}] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "📈", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", words: ["t4_w1", "t4_w2", "t4_w3", "t4_w4", "t4_w5", "t4_w6", "t4_w7"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "🏷️", color: "#FFC107" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6","t5_tk7"].filter(x=>x!==undefined), correctIndices: [3] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" }
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "simple-icon", icon: "🔍", color: "#2196F3" },
    interactive: { type: "match-pairs", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", pairs: [{left:"t6_l1",right:"t6_r1"},{left:"t6_l2",right:"t6_r2"},{left:"t6_l3",right:"t6_r3"}] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" }
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "🏆", color: "#FF9800" },
    interactive: { type: "gap-fill", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", sentence: "t7_sent", choices: ["t7_qa2", "t7_qb2", "t7_qc2", "t7_qd2"], correctIndex: 0 },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" }
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "simple-icon", icon: "⛽", color: "#607D8B" },
    interactive: { type: "drag-to-bucket", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", buckets: [{id:"b1",label:"t8_bl1"},{id:"b2",label:"t8_bl2"}], items: [{text:"t8_i1",bucketId:"b1"},{text:"t8_i2",bucketId:"b2"},{text:"t8_i3",bucketId:"b1"},{text:"t8_i4",bucketId:"b2"}] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" }
  },
  {
    infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "simple-icon", icon: "🖊️", color: "#E91E63" },
    interactive: { type: "word-order", instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2", words: ["t9_w1", "t9_w2", "t9_w3", "t9_w4", "t9_w5", "t9_w6"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5] },
    quiz: { question: "t9_q", choices: ["t9_qa", "t9_qb", "t9_qc", "t9_qd"], answer: "t9_qa" }
  },
  {
    infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "simple-icon", icon: "📜", color: "#FF5722" },
    interactive: { type: "highlight-text", instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2", tokens: ["t10_tk1","t10_tk2","t10_tk3","t10_tk4","t10_tk5","t10_tk6"].filter(x=>x!==undefined), correctIndices: [1] },
    quiz: { question: "t10_q", choices: ["t10_qa", "t10_qb", "t10_qc", "t10_qd"], answer: "t10_qa" }
  },
  {
    infoTitle: "t11_title", infoText: "t11_text",
    svg: { type: "simple-icon", icon: "💎", color: "#00BCD4" },
    interactive: { type: "match-pairs", instruction: "t11_inst", hint1: "t11_h1", hint2: "t11_h2", pairs: [{left:"t11_l1",right:"t11_r1"},{left:"t11_l2",right:"t11_r2"},{left:"t11_l3",right:"t11_r3"}] },
    quiz: { question: "t11_q", choices: ["t11_qa", "t11_qb", "t11_qc", "t11_qd"], answer: "t11_qa" }
  },
  {
    infoTitle: "t12_title", infoText: "t12_text",
    svg: { type: "simple-icon", icon: "🧪", color: "#673AB7" },
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
    svg: { type: "simple-icon", icon: "📡", color: "#3F51B5" },
    interactive: { type: "word-order", instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2", words: ["t14_w1", "t14_w2", "t14_w3", "t14_w4", "t14_w5", "t14_w6", "t14_w7"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t14_q", choices: ["t14_qa", "t14_qb", "t14_qc", "t14_qd"], answer: "t14_qa" }
  },
  {
    infoTitle: "t15_title", infoText: "t15_text",
    svg: { type: "text-bubbles", items: [{text:"AI",bg:"#9C27B0",color:"#fff",emoji:"🤖"},{text:"Human",bg:"#E91E63",color:"#fff",emoji:"👤"}] },
    interactive: { type: "highlight-text", instruction: "t15_inst", hint1: "t15_h1", hint2: "t15_h2", tokens: ["t15_tk1","t15_tk2","t15_tk3","t15_tk4","t15_tk5","t15_tk6"].filter(x=>x!==undefined), correctIndices: [1] },
    quiz: { question: "t15_q", choices: ["t15_qa", "t15_qb", "t15_qc", "t15_qd"], answer: "t15_qa" }
  }
];
