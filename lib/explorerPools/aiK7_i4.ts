import type { PoolTopicDef } from "./types";

export const INFO_K7_I4_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "KI Insel 4: Grundlagen",
    t1_title: "Was ist KI?", t1_text: "Künstliche Intelligenz (KI) ist die Fähigkeit von Maschinen, Aufgaben zu erledigen, die normalerweise menschliche Intelligenz erfordern.", t1_inst: "Ordne die Paare zu:", t1_h1: "Maschinen lernen.", t1_h2: "Intelligenz simulieren.", t1_q: "Was bedeutet KI?", t1_qa: "Künstliche Intelligenz", t1_qb: "Keine Information", t1_qc: "Kleine Insel", t1_qd: "Kabel-Input",
    t1_l1: "KI", t1_r1: "Artificial Intelligence", t1_l2: "Mensch", t1_r2: "Natürliche Intelligenz", t1_l3: "Computer", t1_r3: "Rechenkraft",
    t2_title: "Geschichte der KI", t2_text: "Die KI-Forschung begann offiziell 1956 auf der Dartmouth-Konferenz.", t2_inst: "Fülle die Lücke aus:", t2_h1: "Wann fing es an?", t2_h2: "In den 50ern.", t2_q: "Wer gilt als Vater der Informatik?", t2_qa: "Alan Turing", t2_qb: "Albert Einstein", t2_qc: "Isaac Newton", t2_qd: "Steve Jobs",
    t2_sent: "Die Dartmouth-Konferenz fand im Jahr ___ statt.", t2_qa2: "1956", t2_qb2: "1999", t2_qc2: "1850", t2_qd2: "2010",
    t3_title: "Schwache vs. Starke KI", t3_text: "Schwache KI löst eine Aufgabe (z.B. Schach). Starke KI wäre wie ein Mensch.", t3_inst: "Sortiere in die Eimer:", t3_h1: "Spezialisiert oder Alleskönner?", t3_h2: "Heutige KI ist meist schwach.", t3_q: "Was ist Alexa?", t3_qa: "Schwache KI", t3_qb: "Starke KI", t3_qc: "Superintelligenz", t3_qd: "Keine KI",
    t3_bl1: "Schwache KI", t3_bl2: "Starke KI", t3_i1: "Navigationssystem", t3_i2: "Theoretischer Android", t3_i3: "Gesichtserkennung", t3_i4: "Bewusste Maschine",
    t4_title: "Maschinelles Lernen (ML)", t4_text: "ML ist ein Teilbereich der KI, bei dem Computer aus Daten lernen, ohne explizit programmiert zu werden.", t4_inst: "Bringe die Wörter in Ordnung:", t4_h1: "Lernen durch Daten.", t4_h2: "Algorithmen finden Muster.", t4_q: "Was braucht ML zum Lernen?", t4_qa: "Daten", t4_qb: "Kaffee", t4_qc: "Papier", t4_qd: "Einen Stift",
    t4_w1: "Maschinen", t4_w2: "lernen", t4_w3: "Muster", t4_w4: "in", t4_w5: "großen", t4_w6: "Datenmengen", t4_w7: "zu erkennen.",
    t5_title: "Überwachtes Lernen", t5_text: "Der Algorithmus lernt mit Beispieldaten, die bereits beschriftet sind.", t5_inst: "Markiere das richtige Wort:", t5_h1: "Mit Lehrer.", t5_h2: "Beschriftete Daten.", t5_q: "Wie nennt man beschriftete Daten?", t5_qa: "Labels", t5_qb: "Sticker", t5_qc: "Namen", t5_qd: "Tags",
    t5_tk1: "Überwachtes", t5_tk2: "Lernen", t5_tk3: "benötigt", t5_tk4: "gelabelte", t5_tk5: "Trainingsdaten", t5_tk6: "für", t5_tk7: "den Erfolg.",
    t6_title: "Unüberwachtes Lernen", t6_text: "Die KI findet selbstständig Strukturen in Daten, ohne Labels.", t6_inst: "Ordne die Paare zu:", t6_h1: "Kein Lehrer.", t6_h2: "Gruppen finden.", t6_q: "Was ist ein Ziel von unüberwachtem Lernen?", t6_qa: "Clustering", t6_qb: "Übersetzung", t6_qc: "Wettervorhersage", t6_qd: "Schach spielen",
    t6_l1: "Clustering", t6_r1: "Gruppen finden", t6_l2: "Muster", t6_r2: "Strukturen", t6_l3: "Rohdaten", t6_r3: "Keine Labels",
    t7_title: "Bestärkendes Lernen", t7_text: "Lernen durch Belohnung und Bestrafung (Trial and Error).", t7_inst: "Fülle die Lücke aus:", t7_h1: "Wie ein Hund.", t7_h2: "Positive Rückmeldung.", t7_q: "Wo wird bestärkendes Lernen oft genutzt?", t7_qa: "Robotersteuerung", t7_qb: "E-Mail schreiben", t7_qc: "Drucken", t7_qd: "Taschenrechner",
    t7_sent: "Die KI erhält für gute Aktionen eine ___.", t7_qa2: "Belohnung", t7_qb2: "Pause", t7_qc2: "Rechnung", t7_qd2: "Nachricht",
    t8_title: "Daten und KI", t8_text: "Daten sind der Treibstoff der KI. Je mehr gute Daten, desto besser die KI.", t8_inst: "Sortiere in die Eimer:", t8_h1: "Qualität ist wichtig.", t8_h2: "Müll rein, Müll raus.", t8_q: "Was macht eine KI schlechter?", t8_qa: "Fehlerhafte Daten", t8_qb: "Mehr Speicher", t8_qc: "Schnelles Internet", t8_qd: "Großer Monitor",
    t8_bl1: "Gute Daten", t8_bl2: "Schlechte Daten", t8_i1: "Präzise Messwerte", t8_i2: "Falsche Labels", t8_i3: "Diverse Fotos", t8_i4: "Einseitige Daten",
    t9_title: "Neuronale Netze", t9_text: "Sie sind vom menschlichen Gehirn inspiriert und bestehen aus Schichten.", t9_inst: "Bringe die Wörter in Ordnung:", t9_h1: "Wie das Gehirn.", t9_h2: "Schichten von Neuronen.", t9_q: "Was ist ein Neuron?", t9_qa: "Eine Recheneinheit", t9_qb: "Ein Bildschirm", t9_qc: "Ein Kabel", t9_qd: "Eine Tastatur",
    t9_w1: "Neuronale", t9_w2: "Netze", t9_w3: "bestehen", t9_w4: "aus", t9_w5: "vielen", t9_w6: "verbundenen", t9_w7: "Schichten.",
    t10_title: "Deep Learning", t10_text: "Deep Learning nutzt neuronale Netze mit sehr vielen Schichten.", t10_inst: "Markiere das richtige Wort:", t10_h1: "Tiefes Lernen.", t10_h2: "Viele Schichten.", t10_q: "Warum heißt es 'Deep'?", t10_qa: "Wegen vieler Schichten", t10_qb: "Es lernt im Wasser", t10_qc: "Es ist sehr schlau", t10_qd: "Es ist geheim",
    t10_tk1: "Deep", t10_tk2: "Learning", t10_tk3: "ist", t10_tk4: "die", t10_tk5: "Basis", t10_tk6: "für", t10_tk7: "Moderne KI.",
    t11_title: "KI im Alltag", t11_text: "Wir nutzen KI täglich, oft ohne es zu merken.", t11_inst: "Ordne die Paare zu:", t11_h1: "Überall dabei.", t11_h2: "Smartphone-Apps.", t11_q: "Wo steckt KI drin?", t11_qa: "Suchmaschinen", t11_qb: "Toaster (einfach)", t11_qc: "Bleistift", t11_qd: "Wasserflasche",
    t11_l1: "Smartphone", t11_r1: "Gesichtsscan", t11_l2: "YouTube", t11_r2: "Empfehlungen", t11_l3: "E-Mail", t11_r3: "Spam-Filter",
    t12_title: "Smarte Assistenten", t12_text: "Siri, Alexa und Google Assistant nutzen Sprachverarbeitung.", t12_inst: "Fülle die Lücke aus:", t12_h1: "Rede mit mir.", t12_h2: "Sprache verstehen.", t12_q: "Was erkennt ein smarter Assistent?", t12_qa: "Stimme", t12_qb: "Gedanken", t12_qc: "Geruch", t12_qd: "Gewicht",
    t12_sent: "Assistenten nutzen ___ zur Spracherkennung.", t12_qa2: "KI-Modelle", t12_qb2: "Tastaturen", t12_qc2: "Batterien", t12_qd2: "Kabel",
    t13_title: "Empfehlungssysteme", t13_text: "Algorithmen schlagen vor, was du als nächstes sehen oder kaufen möchtest.", t13_inst: "Sortiere in die Eimer:", t13_h1: "Personalisierung.", t13_h2: "Netflix oder Amazon.", t13_q: "Was nutzt ein Empfehlungssystem?", t13_qa: "Dein Nutzerverhalten", t13_qb: "Das Wetter", t13_qc: "Deine Haarfarbe", t13_qd: "Deinen Namen",
    t13_bl1: "Plattform", t13_bl2: "Inhalt", t13_i1: "Netflix", t13_i2: "Serien", t13_i3: "Spotify", t13_i4: "Musik",
    t14_title: "Bilderkennung", t14_text: "KI kann Objekte, Gesichter und Szenen in Fotos identifizieren.", t14_inst: "Bringe die Wörter in Ordnung:", t14_h1: "Sehen lernen.", t14_h2: "Pixel analysieren.", t14_q: "Wo wird Bilderkennung genutzt?", t14_qa: "Selbstfahrende Autos", t14_qb: "Radio hören", t14_qc: "Suppe kochen", t14_qd: "Fahrrad fahren",
    t14_w1: "KI", t14_w2: "kann", t14_w3: "Katzen", t14_w4: "auf", t14_w5: "Fotos", t14_w6: "automatisch", t14_w7: "erkennen.",
    t15_title: "NLP (Sprachverarbeitung)", t15_text: "Natural Language Processing lässt Computer menschliche Sprache verstehen.", t15_inst: "Markiere das richtige Wort:", t15_h1: "Menschliche Sprache.", t15_h2: "Natürliche Sprache.", t15_q: "Wofür steht NLP?", t15_qa: "Natural Language Processing", t15_qb: "New Laser Printer", t15_qc: "Next Level Programming", t15_qd: "Net Loop Protocol",
    t15_tk1: "NLP", t15_tk2: "ermöglicht", t15_tk3: "die", t15_tk4: "Kommunikation", t15_tk5: "zwischen", t15_tk6: "Mensch", t15_tk7: "und Maschine."
  },
  en: {
    explorer_title: "AI Island 4: Basics",
    t1_title: "What is AI?", t1_text: "Artificial Intelligence (AI) is the ability of machines to perform tasks that normally require human intelligence.", t1_inst: "Match the pairs:", t1_h1: "Machines learning.", t1_h2: "Simulating intelligence.", t1_q: "What does AI stand for?", t1_qa: "Artificial Intelligence", t1_qb: "Advanced Information", t1_qc: "Automated Input", t1_qd: "Analytical Insight",
    t1_l1: "AI", t1_r1: "Artificial Intelligence", t1_l2: "Human", t1_r2: "Natural Intelligence", t1_l3: "Computer", t1_r3: "Computing Power",
    t2_title: "History of AI", t2_text: "AI research officially began in 1956 at the Dartmouth Conference.", t2_inst: "Fill in the blank:", t2_h1: "When did it start?", t2_h2: "In the 50s.", t2_q: "Who is considered the father of computer science?", t2_qa: "Alan Turing", t2_qb: "Albert Einstein", t2_qc: "Isaac Newton", t2_qd: "Steve Jobs",
    t2_sent: "The Dartmouth Conference took place in the year ___.", t2_qa2: "1956", t2_qb2: "1999", t2_qc2: "1850", t2_qd2: "2010",
    t3_title: "Narrow vs. General AI", t3_text: "Narrow AI solves one task (e.g. chess). General AI would be like a human.", t3_inst: "Sort into buckets:", t3_h1: "Specialized or all-rounder?", t3_h2: "Today's AI is mostly narrow.", t3_q: "What is Alexa?", t3_qa: "Narrow AI", t3_qb: "General AI", t3_qc: "Superintelligence", t3_qd: "No AI",
    t3_bl1: "Narrow AI", t3_bl2: "General AI", t3_i1: "Navigation system", t3_i2: "Theoretical android", t3_i3: "Face recognition", t3_i4: "Conscious machine",
    t4_title: "Machine Learning (ML)", t4_text: "ML is a subset of AI where computers learn from data without being explicitly programmed.", t4_inst: "Put the words in order:", t4_h1: "Learning through data.", t4_h2: "Algorithms find patterns.", t4_q: "What does ML need to learn?", t4_qa: "Data", t4_qb: "Coffee", t4_qc: "Paper", t4_qd: "A pen",
    t4_w1: "Machines", t4_w2: "learn", t4_w3: "to recognize", t4_w4: "patterns", t4_w5: "in", t4_w6: "large", t4_w7: "data sets.",
    t5_title: "Supervised Learning", t5_text: "The algorithm learns using example data that is already labeled.", t5_inst: "Highlight the correct word:", t5_h1: "With a teacher.", t5_h2: "Labeled data.", t5_q: "What are labeled data points called?", t5_qa: "Labels", t5_qb: "Stickers", t5_qc: "Names", t5_qd: "Tags",
    t5_tk1: "Supervised", t5_tk2: "learning", t5_tk3: "requires", t5_tk4: "labeled", t5_tk5: "training", t5_tk6: "data", t5_tk7: "for success.",
    t6_title: "Unsupervised Learning", t6_text: "AI finds structures in data independently, without labels.", t6_inst: "Match the pairs:", t6_h1: "No teacher.", t6_h2: "Finding groups.", t6_q: "What is a goal of unsupervised learning?", t6_qa: "Clustering", t6_qb: "Translation", t6_qc: "Weather forecast", t6_qd: "Playing chess",
    t6_l1: "Clustering", t6_r1: "Finding groups", t6_l2: "Pattern", t6_r2: "Structures", t6_l3: "Raw data", t6_r3: "No labels",
    t7_title: "Reinforcement Learning", t7_text: "Learning through reward and punishment (trial and error).", t7_inst: "Fill in the blank:", t7_h1: "Like a dog.", t7_h2: "Positive feedback.", t7_q: "Where is reinforcement learning often used?", t7_qa: "Robot control", t7_qb: "Writing email", t7_qc: "Printing", t7_qd: "Calculator",
    t7_sent: "The AI receives a ___ for good actions.", t7_qa2: "reward", t7_qb2: "break", t7_qc2: "bill", t7_qd2: "message",
    t8_title: "Data and AI", t8_text: "Data is the fuel of AI. The more good data, the better the AI.", t8_inst: "Sort into buckets:", t8_h1: "Quality is important.", t8_h2: "Garbage in, garbage out.", t8_q: "What makes an AI worse?", t8_qa: "Faulty data", t8_qb: "More memory", t8_qc: "Fast internet", t8_qd: "Large monitor",
    t8_bl1: "Good data", t8_bl2: "Bad data", t8_i1: "Precise measurements", t8_i2: "Wrong labels", t8_i3: "Diverse photos", t8_i4: "Biased data",
    t9_title: "Neural Networks", t9_text: "They are inspired by the human brain and consist of layers.", t9_inst: "Put the words in order:", t9_h1: "Like the brain.", t9_h2: "Layers of neurons.", t9_q: "What is a neuron?", t9_qa: "A computing unit", t9_qb: "A screen", t9_qc: "A cable", t9_qd: "A keyboard",
    t9_w1: "Neural", t9_w2: "networks", t9_w3: "consist", t9_w4: "of", t9_w5: "many", t9_w6: "connected", t9_w7: "layers.",
    t10_title: "Deep Learning", t10_text: "Deep Learning uses neural networks with very many layers.", t10_inst: "Highlight the correct word:", t10_h1: "Deep learning.", t10_h2: "Many layers.", t10_q: "Why is it called 'Deep'?", t10_qa: "Because of many layers", t10_qb: "It learns in water", t10_qc: "It is very smart", t10_qd: "It is secret",
    t10_tk1: "Deep", t10_tk2: "learning", t10_tk3: "is", t10_tk4: "the", t10_tk5: "basis", t10_tk6: "for", t10_tk7: "modern AI.",
    t11_title: "AI in Everyday Life", t11_text: "We use AI daily, often without realizing it.", t11_inst: "Match the pairs:", t11_h1: "Everywhere with us.", t11_h2: "Smartphone apps.", t11_q: "Where is AI included?", t11_qa: "Search engines", t11_qb: "Toaster (simple)", t11_qc: "Pencil", t11_qd: "Water bottle",
    t11_l1: "Smartphone", t11_r1: "Face scan", t11_l2: "YouTube", t11_r2: "Recommendations", t11_l3: "Email", t11_r3: "Spam filter",
    t12_title: "Smart Assistants", t12_text: "Siri, Alexa, and Google Assistant use language processing.", t12_inst: "Fill in the blank:", t12_h1: "Talk to me.", t12_h2: "Understanding language.", t12_q: "What does a smart assistant recognize?", t12_qa: "Voice", t12_qb: "Thoughts", t12_qc: "Smell", t12_qd: "Weight",
    t12_sent: "Assistants use ___ for speech recognition.", t12_qa2: "AI models", t12_qb2: "keyboards", t12_qc2: "batteries", t12_qd2: "cables",
    t13_title: "Recommendation Systems", t13_text: "Algorithms suggest what you might want to see or buy next.", t13_inst: "Sort into buckets:", t13_h1: "Personalization.", t13_h2: "Netflix or Amazon.", t13_q: "What does a recommendation system use?", t13_qa: "User behavior", t13_qb: "Weather", t13_qc: "Hair color", t13_qd: "Your name",
    t13_bl1: "Platform", t13_bl2: "Content", t13_i1: "Netflix", t13_i2: "Series", t13_i3: "Spotify", t13_i4: "Music",
    t14_title: "Image Recognition", t14_text: "AI can identify objects, faces, and scenes in photos.", t14_inst: "Put the words in order:", t14_h1: "Learning to see.", t14_h2: "Analyzing pixels.", t14_q: "Where is image recognition used?", t14_qa: "Self-driving cars", t14_qb: "Listening to radio", t14_qc: "Cooking soup", t14_qd: "Riding a bike",
    t14_w1: "AI", t14_w2: "can", t14_w3: "automatically", t14_w4: "recognize", t14_w5: "cats", t14_w6: "in", t14_w7: "photos.",
    t15_title: "NLP (Language Processing)", t15_text: "Natural Language Processing allows computers to understand human language.", t15_inst: "Highlight the correct word:", t15_h1: "Human language.", t15_h2: "Natural language.", t15_q: "What does NLP stand for?", t15_qa: "Natural Language Processing", t15_qb: "New Laser Printer", t15_qc: "Next Level Programming", t15_qd: "Net Loop Protocol",
    t15_tk1: "NLP", t15_tk2: "enables", t15_tk3: "communication", t15_tk4: "between", t15_tk5: "humans", t15_tk6: "and", t15_tk7: "machines."
  },
  hu: {
    explorer_title: "MI Sziget 4: Alapok",
    t1_title: "Mi a MI?", t1_text: "A Mesterséges Intelligencia (MI) a gépek azon képessége, hogy olyan feladatokat lássanak el, amikhez emberi intelligencia kell.", t1_inst: "Párosítsd össze:", t1_h1: "Tanuló gépek.", t1_h2: "Intelligencia szimulálása.", t1_q: "Mit jelent a MI?", t1_qa: "Mesterséges Intelligencia", t1_qb: "Minden Információ", t1_qc: "Magas Idő", t1_qd: "Mély Irányítás",
    t1_l1: "MI", t1_r1: "Artificial Intelligence", t1_l2: "Ember", t1_r2: "Természetes intelligencia", t1_l3: "Számítógép", t1_r3: "Számítási kapacitás",
    t2_title: "A MI története", t2_text: "A MI kutatás hivatalosan 1956-ban kezdődött a Dartmouth-i konferencián.", t2_inst: "Töltsd ki a hiányt:", t2_h1: "Mikor kezdődött?", t2_h2: "Az 50-es években.", t2_q: "Kit tartanak az informatika atyjának?", t2_qa: "Alan Turing", t2_qb: "Albert Einstein", t2_qc: "Isaac Newton", t2_qd: "Steve Jobs",
    t2_sent: "A Dartmouth-i konferenciát ___ évben rendezték meg.", t2_qa2: "1956", t2_qb2: "1999", t2_qc2: "1850", t2_qd2: "2010",
    t3_title: "Szűk vs. Általános MI", t3_text: "A szűk MI egy feladatot old meg (pl. sakk). Az általános MI olyan lenne, mint egy ember.", t3_inst: "Válogasd szét:", t3_h1: "Specialista vagy polihisztor?", t3_h2: "A mai MI többnyire szűk.", t3_q: "Mi az Alexa?", t3_qa: "Szűk MI", t3_qb: "Általános MI", t3_qc: "Szuperintelligencia", t3_qd: "Nem MI",
    t3_bl1: "Szűk MI", t3_bl2: "Általános MI", t3_i1: "Navigációs rendszer", t3_i2: "Elméleti android", t3_i3: "Arcfelismerés", t3_i4: "Öntudatos gép",
    t4_title: "Gépi Tanulás (ML)", t4_text: "Az ML a MI egy részterülete, ahol a gépek adatokból tanulnak, külön programozás nélkül.", t4_inst: "Tedd sorrendbe a szavakat:", t4_h1: "Tanulás adatokon keresztül.", t4_h2: "Algoritmusok mintákat keresnek.", t4_q: "Mi kell az ML-nek a tanuláshoz?", t4_qa: "Adatok", t4_qb: "Kávé", t4_qc: "Papír", t4_qd: "Toll",
    t4_w1: "A gépek", t4_w2: "megtanulják", t4_w3: "felismerni", t4_w4: "a mintákat", t4_w5: "a nagy", t4_w6: "adathalmazokban.", t4_w7: "",
    t5_title: "Felügyelt tanulás", t5_text: "Az algoritmus olyan példaadatokból tanul, amik már fel vannak címkézve.", t5_inst: "Jelöld meg a helyes szót:", t5_h1: "Tanárral.", t5_h2: "Címkézett adatok.", t5_q: "Hogy hívják a címkézett adatokat?", t5_qa: "Label-ek", t5_qb: "Matricák", t5_qc: "Nevek", t5_qd: "Tagek",
    t5_tk1: "A felügyelt", t5_tk2: "tanuláshoz", t5_tk3: "címkézett", t5_tk4: "tanítóadatokra", t5_tk5: "van", t5_tk6: "szükség.",
    t6_title: "Felügyelet nélküli tanulás", t6_text: "A MI önállóan talál szerkezeteket az adatokban, címkék nélkül.", t6_inst: "Párosítsd össze:", t6_h1: "Nincs tanár.", t6_h2: "Csoportok keresése.", t6_q: "Mi a felügyelet nélküli tanulás célja?", t6_qa: "Klaszterezés", t6_qb: "Fordítás", t6_qc: "Időjárásjóslás", t6_qd: "Sakk",
    t6_l1: "Klaszterezés", t6_r1: "Csoportosítás", t6_l2: "Minta", t6_r2: "Szerkezet", t6_l3: "Nyers adatok", t6_r3: "Nincs címke",
    t7_title: "Megerősítéses tanulás", t7_text: "Tanulás jutalmazáson és büntetésen keresztül (próba-szerencse).", t7_inst: "Töltsd kit a hiányt:", t7_h1: "Mint a kutyáknál.", t7_h2: "Pozitív visszajelzés.", t7_q: "Hol használják leginkább?", t7_qa: "Robotirányítás", t7_qb: "E-mail írás", t7_qc: "Nyomtatás", t7_qd: "Számológép",
    t7_sent: "A MI a jó lépésekért ___ kap.", t7_qa2: "jutalmat", t7_qb2: "szünetet", t7_qc2: "számlát", t7_qd2: "üzenetet",
    t8_title: "Adatok és MI", t8_text: "Az adat a MI üzemanyaga. Minél több jó adat, annál jobb a MI.", t8_inst: "Válogasd szét:", t8_h1: "A minőség számít.", t8_h2: "Szemét be, szemét ki.", t8_q: "Mi rontja el a MI-t?", t8_qa: "Hibás adatok", t8_qb: "Több memória", t8_qc: "Gyors internet", t8_qd: "Nagy monitor",
    t8_bl1: "Jó adatok", t8_bl2: "Rossz adatok", t8_i1: "Pontos mérések", t8_i2: "Rossz címkék", t8_i3: "Változatos fotók", t8_i4: "Elfajult adatok",
    t9_title: "Neurális hálózatok", t9_text: "Az emberi agy ihlette őket, és rétegekből állnak.", t9_inst: "Tedd sorrendbe a szavakat:", t9_h1: "Mint az agy.", t9_h2: "Neuronok rétegei.", t9_q: "Mi az a neuron?", t9_qa: "Számítási egység", t9_qb: "Képernyő", t9_qc: "Kábel", t9_qd: "Billentyűzet",
    t9_w1: "A neurális", t9_w2: "hálózatok", t9_w3: "sok", t9_w4: "összekapcsolt", t9_w5: "rétegből", t9_w6: "épülnek", t9_w7: "fel.",
    t10_title: "Deep Learning", t10_text: "A mély tanulás sok rétegű neurális hálózatokat használ.", t10_inst: "Jelöld meg a helyes szót:", t10_h1: "Mély tanulás.", t10_h2: "Sok réteg.", t10_q: "Miért 'mély' (Deep)?", t10_qa: "A sok réteg miatt", t10_qb: "A víz alatt tanul", t10_qc: "Nagyon okos", t10_qd: "Titkos",
    t10_tk1: "A Deep", t10_tk2: "Learning", t10_tk3: "a", t10_tk4: "modern", t10_tk5: "MI", t10_tk6: "alapja.",
    t11_title: "MI a mindennapokban", t11_text: "Naponta használunk MI-t, gyakran észre sem vesszük.", t11_inst: "Párosítsd össze:", t11_h1: "Mindenhol ott van.", t11_h2: "Mobilalkalmazások.", t11_q: "Miben van MI?", t11_qa: "Keresőmotorok", t11_qb: "Egyszerű pirító", t11_qc: "Ceruza", t11_qd: "Vizespalack",
    t11_l1: "Okostelefon", t11_r1: "Arcalapú feloldás", t11_l2: "YouTube", t11_r2: "Ajánlások", t11_l3: "E-mail", t11_r3: "Spam szűrő",
    t12_title: "Okos asszisztensek", t12_text: "Siri, Alexa és a Google Assistant nyelvfeldolgozást használnak.", t12_inst: "Töltsd ki a hiányt:", t12_h1: "Beszélj hozzám.", t12_h2: "Nyelv megértése.", t12_q: "Mit ismer fel az asszisztens?", t12_qa: "Hang", t12_qb: "Gondolat", t12_qc: "Szag", t12_qd: "Súly",
    t12_sent: "Az asszisztensek ___ használnak a hangfelismeréshez.", t12_qa2: "MI-modelleket", t12_qb2: "billentyűzetet", t12_qc2: "elemet", t12_qd2: "kábelt",
    t13_title: "Ajánlórendszerek", t13_text: "Algoritmusok javasolják, mit nézz meg vagy vegyél meg legközelebb.", t13_inst: "Válogasd szét:", t13_h1: "Személyre szabás.", t13_h2: "Netflix vagy Amazon.", t13_q: "Mit használ az ajánlórendszer?", t13_qa: "Felhasználói viselkedés", t13_qb: "Időjárás", t13_qc: "Hajszín", t13_qd: "A neved",
    t13_bl1: "Platform", t13_bl2: "Tartalom", t13_i1: "Netflix", t13_i2: "Sorozatok", t13_i3: "Spotify", t13_i4: "Zene",
    t14_title: "Képfelismerés", t14_text: "A MI képes objektumokat, arcokat és jeleneteket azonosítani fotókon.", t14_inst: "Tedd sorrendbe a szavakat:", t14_h1: "Látni tanul.", t14_h2: "Pixelek elemzése.", t14_q: "Hol használják?", t14_qa: "Önvezető autók", t14_qb: "Rádiózás", t14_qc: "Főzés", t14_qd: "Biciklizés",
    t14_w1: "A MI", t14_w2: "képes", t14_w3: "automatikusan", t14_w4: "felismerni", t14_w5: "a macskákat", t14_w6: "a fotókon.", t14_w7: "",
    t15_title: "NLP (Nyelvfeldolgozás)", t15_text: "A Natural Language Processing lehetővé teszi a gépeknek az emberi nyelv megértését.", t15_inst: "Jelöld meg a helyes szót:", t15_h1: "Emberi nyelv.", t15_h2: "Természetes nyelv.", t15_q: "Mit jelent az NLP?", t15_qa: "Natural Language Processing", t15_qb: "New Laser Printer", t15_qc: "Next Level Programming", t15_qd: "Net Loop Protocol",
    t15_tk1: "Az NLP", t15_tk2: "lehetővé", t15_tk3: "teszi", t15_tk4: "az ember", t15_tk5: "és a gép", t15_tk6: "közötti", t15_tk7: "kommunikációt."
  },
  ro: {
    explorer_title: "IA Insula 4: Fundamente",
    t1_title: "Ce este IA?", t1_text: "Inteligența Artificială (IA) este capacitatea mașinilor de a îndeplini sarcini care necesită în mod normal inteligență umană.", t1_inst: "Potrivește perechile:", t1_h1: "Mașini care învață.", t1_h2: "Simularea inteligenței.", t1_q: "Ce înseamnă IA?", t1_qa: "Inteligență Artificială", t1_qb: "Informație Avansată", t1_qc: "Input Automat", t1_qd: "Interfață Activă",
    t1_l1: "IA", t1_r1: "Artificial Intelligence", t1_l2: "Om", t1_r2: "Inteligență naturală", t1_l3: "Computer", t1_r3: "Putere de calcul",
    t2_title: "Istoria IA", t2_text: "Cercetarea IA a început oficial în 1956 la conferința de la Dartmouth.", t2_inst: "Completează spațiul liber:", t2_h1: "Când a început?", t2_h2: "În anii '50.", t2_q: "Cine este considerat părintele informaticii?", t2_qa: "Alan Turing", t2_qb: "Albert Einstein", t2_qc: "Isaac Newton", t2_qd: "Steve Jobs",
    t2_sent: "Conferința de la Dartmouth a avut loc în anul ___.", t2_qa2: "1956", t2_qb2: "1999", t2_qc2: "1850", t2_qd2: "2010",
    t3_title: "IA Slabă vs. IA Puternică", t3_text: "IA slabă rezolvă o singură sarcină (ex. șah). IA puternică ar fi ca un om.", t3_inst: "Sortează în găleți:", t3_h1: "Specializat sau polivalent?", t3_h2: "IA de azi este mai ales slabă.", t3_q: "Ce este Alexa?", t3_qa: "IA slabă", t3_qb: "IA puternică", t3_qc: "Superinteligență", t3_qd: "Nu e IA",
    t3_bl1: "IA slabă", t3_bl2: "IA puternică", t3_i1: "Sistem navigație", t3_i2: "Android teoretic", t3_i3: "Recunoaștere facială", t3_i4: "Mașină conștientă",
    t4_title: "Machine Learning (ML)", t4_text: "ML este un subdomeniu al IA în care computerele învață din date fără a fi programate explicit.", t4_inst: "Pune cuvintele în ordine:", t4_h1: "Învățare prin date.", t4_h2: "Algoritmii găsesc modele.", t4_q: "De ce are nevoie ML pentru a învăța?", t4_qa: "Date", t4_qb: "Cafea", t4_qc: "Hârtie", t4_qd: "Un stilou",
    t4_w1: "Mașinile", t4_w2: "învață", t4_w3: "să recunoască", t4_w4: "modele", t4_w5: "în", t4_w6: "seturi mari", t4_w7: "de date.",
    t5_title: "Învățare supravegheată", t5_text: "Algoritmul învață folosind date exemplu care sunt deja etichetate.", t5_inst: "Evidențiază cuvântul corect:", t5_h1: "Cu un profesor.", t5_h2: "Date etichetate.", t5_q: "Cum se numesc datele etichetate?", t5_qa: "Label-uri", t5_qb: "Stickere", t5_qc: "Nume", t5_qd: "Tag-uri",
    t5_tk1: "Învățarea", t5_tk2: "supravegheată", t5_tk3: "necesită", t5_tk4: "date", t5_tk5: "de antrenament", t5_tk6: "etichetate", t5_tk7: "pentru succes.",
    t6_title: "Învățare nesupravegheată", t6_text: "IA găsește singură structuri în date, fără etichete.", t6_inst: "Potrivește perechile:", t6_h1: "Fără profesor.", t6_h2: "Găsirea grupurilor.", t6_q: "Care este un scop al învățării nesupravegheate?", t6_qa: "Clustering", t6_qb: "Traducere", t6_qc: "Prognoza meteo", t6_qd: "Joc de șah",
    t6_l1: "Clustering", t6_r1: "Grupare", t6_l2: "Model", t6_r2: "Structuri", t6_l3: "Date brute", t6_r3: "Fără etichete",
    t7_title: "Învățare prin recompensă", t7_text: "Învățare prin recompensă și pedeapsă (încercare și eroare).", t7_inst: "Completează spațiul liber:", t7_h1: "Ca la un câine.", t7_h2: "Feedback pozitiv.", t7_q: "Unde este folosită des?", t7_qa: "Control roboți", t7_qb: "Scriere e-mail", t7_qc: "Imprimare", t7_qd: "Calculator",
    t7_sent: "IA primește o ___ pentru acțiuni bune.", t7_qa2: "recompensă", t7_qb2: "pauză", t7_qc2: "factură", t7_qd2: "mesaj",
    t8_title: "Datele și IA", t8_text: "Datele sunt combustibilul IA. Cu cât mai multe date bune, cu atât IA e mai bună.", t8_inst: "Sortează în găleți:", t8_h1: "Calitatea contează.", t8_h2: "Gunoi intră, gunoi iese.", t8_q: "Ce strică o IA?", t8_qa: "Date eronate", t8_qb: "Mai multă memorie", t8_qc: "Internet rapid", t8_qd: "Monitor mare",
    t8_bl1: "Date bune", t8_bl2: "Date rele", t8_i1: "Măsurători precise", t8_i2: "Etichete greșite", t8_i3: "Foto diverse", t8_i4: "Date părtinitoare",
    t9_title: "Rețele neuronale", t9_text: "Sunt inspirate de creierul uman și constau în straturi.", t9_inst: "Pune cuvintele în ordine:", t9_h1: "Ca și creierul.", t9_h2: "Straturi de neuroni.", t9_q: "Ce este un neuron?", t9_qa: "O unitate de calcul", t9_qb: "Un ecran", t9_qc: "Un cablu", t9_qd: "O tastatură",
    t9_w1: "Rețelele", t9_w2: "neuronale", t9_w3: "sunt", t9_w4: "formate", t9_w5: "din", t9_w6: "multe", t9_w7: "straturi.",
    t10_title: "Deep Learning", t10_text: "Deep Learning folosește rețele neuronale cu foarte multe straturi.", t10_inst: "Evidențiază cuvântul corect:", t10_h1: "Învățare profundă.", t10_h2: "Multe straturi.", t10_q: "De ce se numește 'Deep'?", t10_qa: "Datorită multor straturi", t10_qb: "Învață sub apă", t10_qc: "Este foarte deșteaptă", t10_qd: "Este secretă",
    t10_tk1: "Deep", t10_tk2: "Learning", t10_tk3: "este", t10_tk4: "baza", t10_tk5: "pentru", t10_tk6: "IA", t10_tk7: "modernă.",
    t11_title: "IA în viața de zi cu zi", t11_text: "Folosim IA zilnic, adesea fără să ne dăm seama.", t11_inst: "Potrivește perechile:", t11_h1: "Peste tot cu noi.", t11_h2: "Aplicații smartphone.", t11_q: "Unde se află IA?", t11_qa: "Motoare de căutare", t11_qb: "Prăjitor (simplu)", t11_qc: "Creion", t11_qd: "Sticlă de apă",
    t11_l1: "Smartphone", t11_r1: "Scanare facială", t11_l2: "YouTube", t11_r2: "Recomandări", t11_l3: "E-mail", t11_r3: "Filtru spam",
    t12_title: "Asistenți smart", t12_text: "Siri, Alexa și Google Assistant folosesc procesarea limbajului.", t12_inst: "Completează spațiul liber:", t12_h1: "Vorbește cu mine.", t12_h2: "Înțelegerea limbajului.", t12_q: "Ce recunoaște un asistent smart?", t12_qa: "Vocea", t12_qb: "Gândurile", t12_qc: "Mirosul", t12_qd: "Greutatea",
    t12_sent: "Asistenții folosesc ___ pentru recunoașterea vocii.", t12_qa2: "modele IA", t12_qb2: "tastaturi", t12_qc2: "baterii", t12_qd2: "cabluri",
    t13_title: "Sisteme de recomandare", t13_text: "Algoritmii sugerează ce ai vrea să vezi sau să cumperi în continuare.", t13_inst: "Sortează în găleți:", t13_h1: "Personalizare.", t13_h2: "Netflix sau Amazon.", t13_q: "Ce folosește un sistem de recomandare?", t13_qa: "Comportament utilizator", t13_qb: "Vremea", t13_qc: "Culoarea părului", t13_qd: "Numele tău",
    t13_bl1: "Platformă", t13_bl2: "Conținut", t13_i1: "Netflix", t13_i2: "Seriale", t13_i3: "Spotify", t13_i4: "Muzică",
    t14_title: "Recunoaștere imagini", t14_text: "IA poate identifica obiecte, fețe și scene în fotografii.", t14_inst: "Pune cuvintele în ordine:", t14_h1: "Învață să vadă.", t14_h2: "Analizarea pixelilor.", t14_q: "Unde este folosită?", t14_qa: "Mașini autonome", t14_qb: "Ascultat radio", t14_qc: "Gătit supă", t14_qd: "Mers pe bicicletă",
    t14_w1: "IA", t14_w2: "poate", t14_w3: "recunoaște", t14_w4: "automat", t14_w5: "pisicile", t14_w6: "din", t14_w7: "fotografii.",
    t15_title: "NLP (Procesarea limbajului)", t15_text: "Natural Language Processing permite computerelor să înțeleagă limbajul uman.", t15_inst: "Evidențiază cuvântul corect:", t15_h1: "Limbaj uman.", t15_h2: "Limbaj natural.", t15_q: "Ce înseamnă NLP?", t15_qa: "Natural Language Processing", t15_qb: "New Laser Printer", t15_qc: "Next Level Programming", t15_qd: "Net Loop Protocol",
    t15_tk1: "NLP", t15_tk2: "permite", t15_tk3: "comunicarea", t15_tk4: "între", t15_tk5: "om", t15_tk6: "și", t15_tk7: "mașină."
  }
};

export const INFO_K7_I4_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "simple-icon", icon: "🤖", color: "#2196F3" },
    interactive: { type: "match-pairs", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", pairs: [{left:"t1_l1",right:"t1_r1"},{left:"t1_l2",right:"t1_r2"},{left:"t1_l3",right:"t1_r3"}] },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" }
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "📜", color: "#795548" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" }
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "icon-grid", items: [{emoji:"♟️",label:"Narrow"},{emoji:"🧠",label:"General"}] },
    interactive: { type: "drag-to-bucket", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", buckets: [{id:"b1",label:"t3_bl1"},{id:"b2",label:"t3_bl2"}], items: [{text:"t3_i1",bucketId:"b1"},{text:"t3_i2",bucketId:"b2"},{text:"t3_i3",bucketId:"b1"},{text:"t3_i4",bucketId:"b2"}] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "📈", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", words: ["t4_w1", "t4_w2", "t4_w3", "t4_w4", "t4_w5", "t4_w6", "t4_w7"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6].slice(0, 7) },
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
    svg: { type: "simple-icon", icon: "🧩", color: "#9C27B0" },
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
    svg: { type: "icon-grid", items: [{emoji:"💎",label:"Good"},{emoji:"🗑️",label:"Bad"}] },
    interactive: { type: "drag-to-bucket", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", buckets: [{id:"b1",label:"t8_bl1"},{id:"b2",label:"t8_bl2"}], items: [{text:"t8_i1",bucketId:"b1"},{text:"t8_i2",bucketId:"b2"},{text:"t8_i3",bucketId:"b1"},{text:"t8_i4",bucketId:"b2"}] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" }
  },
  {
    infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "simple-icon", icon: "🕸️", color: "#607D8B" },
    interactive: { type: "word-order", instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2", words: ["t9_w1", "t9_w2", "t9_w3", "t9_w4", "t9_w5", "t9_w6", "t9_w7"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6].slice(0, 7) },
    quiz: { question: "t9_q", choices: ["t9_qa", "t9_qb", "t9_qc", "t9_qd"], answer: "t9_qa" }
  },
  {
    infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "simple-icon", icon: "🌊", color: "#00BCD4" },
    interactive: { type: "highlight-text", instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2", tokens: ["t10_tk1","t10_tk2","t10_tk3","t10_tk4","t10_tk5","t10_tk6","t10_tk7"].filter(x=>x!==undefined), correctIndices: [0,1] },
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
    svg: { type: "simple-icon", icon: "🎙️", color: "#E91E63" },
    interactive: { type: "gap-fill", instruction: "t12_inst", hint1: "t12_h1", hint2: "t12_h2", sentence: "t12_sent", choices: ["t12_qa2", "t12_qb2", "t12_qc2", "t12_qd2"], correctIndex: 0 },
    quiz: { question: "t12_q", choices: ["t12_qa", "t12_qb", "t12_qc", "t12_qd"], answer: "t12_qa" }
  },
  {
    infoTitle: "t13_title", infoText: "t13_text",
    svg: { type: "icon-grid", items: [{emoji:"🎬",label:"Movies"},{emoji:"🎵",label:"Music"}] },
    interactive: { type: "drag-to-bucket", instruction: "t13_inst", hint1: "t13_h1", hint2: "t13_h2", buckets: [{id:"b1",label:"t13_bl1"},{id:"b2",label:"t13_bl2"}], items: [{text:"t13_i1",bucketId:"b1"},{text:"t13_i2",bucketId:"b2"},{text:"t13_i3",bucketId:"b1"},{text:"t13_i4",bucketId:"b2"}] },
    quiz: { question: "t13_q", choices: ["t13_qa", "t13_qb", "t13_qc", "t13_qd"], answer: "t13_qa" }
  },
  {
    infoTitle: "t14_title", infoText: "t14_text",
    svg: { type: "simple-icon", icon: "👁️", color: "#F44336" },
    interactive: { type: "word-order", instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2", words: ["t14_w1", "t14_w2", "t14_w3", "t14_w4", "t14_w5", "t14_w6", "t14_w7"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6].slice(0, 7) },
    quiz: { question: "t14_q", choices: ["t14_qa", "t14_qb", "t14_qc", "t14_qd"], answer: "t14_qa" }
  },
  {
    infoTitle: "t15_title", infoText: "t15_text",
    svg: { type: "simple-icon", icon: "💬", color: "#009688" },
    interactive: { type: "highlight-text", instruction: "t15_inst", hint1: "t15_h1", hint2: "t15_h2", tokens: ["t15_tk1","t15_tk2","t15_tk3","t15_tk4","t15_tk5","t15_tk6","t15_tk7"].filter(x=>x!==undefined), correctIndices: [0] },
    quiz: { question: "t15_q", choices: ["t15_qa", "t15_qb", "t15_qc", "t15_qd"], answer: "t15_qa" }
  }
];
