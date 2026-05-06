// @ts-nocheck
// lib/explorerPools/aiK6_i7.ts
import type { PoolTopicDef } from "./types";

export const INFO_K6_I7_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "KI Grundlagen",
    t1_title: "Was ist KI?", t1_text: "Künstliche Intelligenz (KI) versucht, menschliches Lernen und Problemlösen auf Computer zu übertragen.", t1_inst: "Verbinde die Begriffe:", t1_h1: "Mensch vs. Maschine.", t1_h2: "Was gehört zusammen?", t1_q: "Wofür steht die Abkürzung KI?", t1_qa: "Künstliche Intelligenz", t1_qb: "Kleine Information", t1_qc: "Kabel-Internet", t1_qd: "Keine Idee",
    t1_l1: "Künstlich", t1_r1: "Vom Menschen gemacht", t1_l2: "Intelligenz", t1_r2: "Fähigkeit zu lernen", t1_l3: "Computer", t1_r3: "Führt Befehle aus",
    t2_title: "Maschinelles Lernen", t2_text: "Maschinen lernen aus Daten, ohne dass jeder Schritt einzeln programmiert werden muss.", t2_inst: "Fülle die Lücke aus:", t2_h1: "Lernen durch Erfahrung.", t2_h2: "Daten sind wichtig.", t2_q: "Was braucht eine KI zum Lernen?", t2_qa: "Große Datenmengen", t2_qb: "Einen Monitor", t2_qc: "Mehr Strom", t2_qd: "Eine Tastatur",
    t2_sent: "Beim maschinellen Lernen erkennt der Computer ___ in den Daten.", t2_qa2: "Muster", t2_qb2: "Fehler", t2_qc2: "Kuchen", t2_qd2: "Wetter",
    t3_title: "Daten: Das Futter für KI", t3_text: "KI braucht viele Beispiele (Daten), um zu verstehen, was sie tun soll.", t3_inst: "Sortiere die Datenquellen:", t3_h1: "Woher kommen Infos?", t3_h2: "Bilder oder Texte.", t3_q: "Was sind Daten für eine Bild-KI?", t3_qa: "Millionen Fotos", t3_qb: "Ein Pinsel", t3_qc: "Ein USB-Kabel", t3_qd: "Das Gehäuse",
    t3_bl1: "Visuelle Daten", t3_bl2: "Text-Daten", t3_i1: "Fotos", t3_i2: "Bücher", t3_i3: "Videos", t3_i4: "Artikel",
    t4_title: "Algorithmen", t4_text: "Ein Algorithmus ist eine genaue Anleitung, die die KI befolgt.", t4_inst: "Bringe den Ablauf in Ordnung:", t4_h1: "Schritt für Schritt.", t4_h2: "Wie ein Rezept.", t4_q: "Was ist ein Algorithmus?", t4_qa: "Eine Handlungsanweisung", t4_qb: "Ein Roboterarm", t4_qc: "Ein Bildschirmfehler", t4_qd: "Ein Computerspiel",
    t4_w1: "Ein", t4_w2: "Algorithmus", t4_w3: "löst", t4_w4: "ein", t4_w5: "bestimmtes", t4_w6: "Problem.", t4_w7: "",
    t5_title: "Mustererkennung", t5_text: "KI ist besonders gut darin, Ähnlichkeiten in großen Mengen von Informationen zu finden.", t5_inst: "Markiere das Wort für Ähnlichkeiten:", t5_h1: "Wiederholungen.", t5_h2: "Was sich gleicht.", t5_q: "Was sucht eine KI in Daten?", t5_qa: "Muster", t5_qb: "Verstecke", t5_qc: "Kabel", t5_qd: "Staub",
    t5_tk1: "KI", t5_tk2: "kann", t5_tk3: "Muster", t5_tk4: "viel", t5_tk5: "schneller", t5_tk6: "finden", t5_tk7: "als wir.",
    t6_title: "KI-Training", t6_text: "In der Trainingsphase lernt die KI anhand von bekannten Beispielen.", t6_inst: "Zähle die Trainingsbilder:", t6_h1: "Klick die Hunde an.", t6_h2: "Wie viele sind es?", t6_q: "Wie nennt man die Phase, in der die KI lernt?", t6_qa: "Training", t6_qb: "Urlaub", t6_qc: "Pause", t6_qd: "Abschluss",
    t6_c: "5",
    t7_title: "Neuronale Netze", t7_text: "Diese sind dem menschlichen Gehirn nachempfunden und helfen der KI beim Denken.", t7_inst: "Verbinde die Teile:", t7_h1: "Wie im Gehirn.", t7_h2: "Verknüpfungen.", t7_q: "Was ist ein neuronales Netz?", t7_qa: "Ein Rechenmodell", t7_qb: "Ein Fischernetz", t7_qc: "Ein Stromkabel", t7_qd: "Ein Spinnennetz",
    t7_l1: "Input", t7_r1: "Eingabe", t7_l2: "Hidden Layer", t7_r2: "Verarbeitung", t7_l3: "Output", t7_r3: "Ergebnis",
    t8_title: "KI im Alltag", t8_text: "Wir nutzen KI oft, ohne es zu merken, z.B. bei der Smartphone-Entsperrung.", t8_inst: "Fülle die Lücke aus:", t8_h1: "Überall um uns.", t8_h2: "Praktische Helfer.", t8_q: "Wo findest du oft KI?", t8_qa: "In Sprachassistenten", t8_qb: "Im Toaster", t8_qc: "Im Bleistift", t8_qd: "In der Schultasche",
    t8_sent: "Siri und Alexa sind bekannte digitale ___.", t8_qa2: "Assistenten", t8_qb2: "Lehrer", t8_qc2: "Haustiere", t8_qd2: "Brillen",
    t9_title: "Bilderkennung", t9_text: "KI kann Objekte auf Fotos identifizieren, wie Hunde oder Autos.", t9_inst: "Sortiere die Bilder:", t9_h1: "Was ist was?", t9_h2: "Kategorien finden.", t9_q: "Was nutzt KI zur Bilderkennung?", t9_qa: "Computer Vision", t9_qb: "Ein Fernglas", t9_qc: "Eine Lupe", t9_qd: "Ein Mikrofon",
    t9_bl1: "Fahrzeuge", t9_bl2: "Tiere", t9_i1: "Auto", t9_i2: "Hund", t9_i3: "LKW", t9_i4: "Katze",
    t10_title: "Spracherkennung", t10_text: "KI wandelt gesprochene Sprache in Text um, damit Computer uns verstehen.", t10_inst: "Bringe den Satz in Ordnung:", t10_h1: "Hör gut zu.", t10_h2: "Sprechen zu Text.", t10_q: "Was macht Spracherkennung?", t10_qa: "Stimme in Text wandeln", t10_qb: "Musik abspielen", t10_qc: "Den PC ausschalten", t10_qd: "Bilder malen",
    t10_w1: "KI", t10_w2: "versteht", t10_w3: "unsere", t10_w4: "menschliche", t10_w5: "Sprache", t10_w6: "immer", t10_w7: "besser.",
    t11_title: "Natural Language Processing", t11_text: "NLP hilft Computern, die Bedeutung hinter unseren Sätzen zu verstehen.", t11_inst: "Markiere das Wort für Sprache:", t11_h1: "Was wir sprechen.", t11_h2: "Kommunikation.", t11_q: "Wofür steht NLP?", t11_qa: "Sprachverarbeitung", t11_qc: "Netz-Lern-Programm", t11_qb: "Neu-Lade-Plan", t11_qd: "Nacht-Licht-Punkt",
    t11_tk1: "NLP", t11_tk2: "analysiert", t11_tk3: "die", t11_tk4: "Struktur", t11_tk5: "unserer", t11_tk6: "Sätze.",
    t12_title: "Roboter & KI", t12_text: "KI ist das 'Gehirn', das Roboter steuert und sie schlau macht.", t12_inst: "Zähle die Roboterarme:", t12_h1: "Wie viele arbeiten hier?", t12_h2: "Präzision.", t12_q: "Was ist der Unterschied zwischen Roboter und KI?", t12_qa: "Körper vs. Geist", t12_qb: "Es gibt keinen", t12_qc: "KI ist aus Metall", t12_qd: "Roboter sind unsichtbar",
    t12_c: "4",
    t13_title: "KI vs. Mensch", t13_text: "KI ist schnell beim Rechnen, aber Menschen sind kreativer und haben Gefühle.", t13_inst: "Vergleiche die Stärken:", t13_h1: "Wer kann was besser?", t13_h2: "Talente.", t13_q: "Was kann eine KI (noch) nicht?", t13_qa: "Echte Gefühle haben", t13_qb: "Schnell rechnen", t13_qc: "Daten speichern", t13_qd: "Muster finden",
    t13_l1: "Mensch", t13_r1: "Empathie", t13_l2: "KI", t13_r2: "Geschwindigkeit", t13_l3: "Beide", t13_r3: "Lernen",
    t14_title: "Entscheidungsbäume", t14_text: "KI nutzt oft verzweigte Fragen, um zu einem logischen Ergebnis zu kommen.", t14_inst: "Fülle die Lücke aus:", t14_h1: "Ja oder Nein?", t14_h2: "Einen Weg wählen.", t14_q: "Wie nennt man ein einfaches KI-Logikmodell?", t14_qa: "Entscheidungsbaum", t14_qb: "Rechenblume", t14_qc: "Datenwolke", t14_qd: "Logikstein",
    t14_sent: "Ein Entscheidungsbaum hilft der KI bei der ___.", t14_qa2: "Wahl", t14_qb2: "Pause", t14_qc2: "Farbe", t14_qd2: "Musik",
    t15_title: "Vorhersagetexte", t15_text: "KI rät, welches Wort du als nächstes schreiben willst.", t15_inst: "Sortiere die Wortarten:", t15_h1: "Was schreiben wir?", t15_h2: "Nomen oder Verben.", t15_q: "Woher weiß das Handy das nächste Wort?", t15_qa: "Durch Wahrscheinlichkeit", t15_qb: "Es liest Gedanken", t15_qc: "Zufall", t15_qd: "Es ist Zauberei",
    t15_bl1: "Nomen", t15_bl2: "Verben", t15_i1: "Haus", t15_i2: "laufen", t15_i3: "Apfel", t15_i4: "spielen"
  },
  en: {
    explorer_title: "AI Basics",
    t1_title: "What is AI?", t1_text: "Artificial Intelligence (AI) tries to transfer human learning and problem solving to computers.", t1_inst: "Connect the terms:", t1_h1: "Human vs. machine.", t1_h2: "What goes together?", t1_q: "What does AI stand for?", t1_qa: "Artificial Intelligence", t1_qb: "All Information", t1_qc: "Apple Internet", t1_qd: "Always Intelligent",
    t1_l1: "Artificial", t1_r1: "Made by humans", t1_l2: "Intelligence", t1_r2: "Ability to learn", t1_l3: "Computer", t1_r3: "Executes commands",
    t2_title: "Machine Learning", t2_text: "Machines learn from data without every step needing to be programmed individually.", t2_inst: "Fill in the blank:", t2_h1: "Learning through experience.", t2_h2: "Data is important.", t2_q: "What does an AI need to learn?", t2_qa: "Large amounts of data", t2_qb: "A monitor", t2_qc: "More electricity", t2_qd: "A keyboard",
    t2_sent: "In machine learning, the computer recognizes ___ in the data.", t2_qa2: "patterns", t2_qb2: "errors", t2_qc2: "cake", t2_qd2: "weather",
    t3_title: "Data: Fuel for AI", t3_text: "AI needs many examples (data) to understand what it should do.", t3_inst: "Sort the data sources:", t3_h1: "Where does info come from?", t3_h2: "Images or texts.", t3_q: "What is data for an image AI?", t3_qa: "Millions of photos", t3_qb: "A brush", t3_qc: "A USB cable", t3_qd: "The case",
    t3_bl1: "Visual Data", t3_bl2: "Text Data", t3_i1: "Photos", t3_i2: "Books", t3_i3: "Videos", t3_i4: "Articles",
    t4_title: "Algorithms", t4_text: "An algorithm is a precise set of instructions that the AI follows.", t4_inst: "Put the process in order:", t4_h1: "Step by step.", t4_h2: "Like a recipe.", t4_q: "What is an algorithm?", t4_qa: "A set of instructions", t4_qb: "A robot arm", t4_qc: "A screen error", t4_qd: "A computer game",
    t4_w1: "An", t4_w2: "algorithm", t4_w3: "solves", t4_w4: "a", t4_w5: "specific", t4_w6: "problem.", t4_w7: "",
    t5_title: "Pattern Recognition", t5_text: "AI is particularly good at finding similarities in large amounts of information.", t5_inst: "Highlight the word for similarities:", t5_h1: "Repetitions.", t5_h2: "What is alike.", t5_q: "What does an AI look for in data?", t5_qa: "Patterns", t5_qb: "Hiding spots", t5_qc: "Cables", t5_qd: "Dust",
    t5_tk1: "AI", t5_tk2: "can", t5_tk3: "find", t5_tk4: "patterns", t5_tk5: "much", t5_tk6: "faster", t5_tk7: "than us.",
    t6_title: "AI Training", t6_text: "In the training phase, the AI learns from known examples.", t6_inst: "Count the training images:", t6_h1: "Click on the dogs.", t6_h2: "How many are there?", t6_q: "What is the phase called where the AI learns?", t6_qa: "Training", t6_qb: "Vacation", t6_qc: "Break", t6_qd: "Graduation",
    t6_c: "5",
    t7_title: "Neural Networks", t7_text: "These are modeled after the human brain and help the AI to think.", t7_inst: "Connect the parts:", t7_h1: "Like in the brain.", t7_h2: "Connections.", t7_q: "What is a neural network?", t7_qa: "A computing model", t7_qb: "A fishing net", t7_qc: "A power cable", t7_qd: "A spider web",
    t7_l1: "Input", t7_r1: "Data entry", t7_l2: "Hidden Layer", t7_r2: "Processing", t7_l3: "Output", t7_r3: "Result",
    t8_title: "AI in Everyday Life", t8_text: "We often use AI without realizing it, e.g., when unlocking a smartphone.", t8_inst: "Fill in the blank:", t8_h1: "All around us.", t8_h2: "Practical helpers.", t8_q: "Where do you often find AI?", t8_qa: "In voice assistants", t8_qb: "In the toaster", t8_qc: "In the pencil", t8_qd: "In the school bag",
    t8_sent: "Siri and Alexa are well-known digital ___.", t8_qa2: "assistants", t8_qb2: "teachers", t8_qc2: "pets", t8_qd2: "glasses",
    t9_title: "Image Recognition", t9_text: "AI can identify objects in photos, such as dogs or cars.", t9_inst: "Sort the images:", t9_h1: "What is what?", t9_h2: "Find categories.", t9_q: "What does AI use for image recognition?", t9_qa: "Computer Vision", t9_qb: "Binoculars", t9_qc: "A magnifying glass", t9_qd: "A microphone",
    t9_bl1: "Vehicles", t9_bl2: "Animals", t9_i1: "Car", t9_i2: "Dog", t9_i3: "Truck", t9_i4: "Cat",
    t10_title: "Speech Recognition", t10_text: "AI converts spoken language into text so that computers can understand us.", t10_inst: "Put the sentence in order:", t10_h1: "Listen carefully.", t10_h2: "Speech to text.", t10_q: "What does speech recognition do?", t10_qa: "Convert voice to text", t10_qb: "Play music", t10_qc: "Turn off the PC", t10_qd: "Paint pictures",
    t10_w1: "AI", t10_w2: "understands", t10_w3: "our", t10_w4: "human", t10_w5: "language", t10_w6: "better", t10_w7: "now.",
    t11_title: "Natural Language Processing", t11_text: "NLP helps computers understand the meaning behind our sentences.", t11_inst: "Highlight the word for language:", t11_h1: "What we speak.", t11_h2: "Communication.", t11_q: "What does NLP stand for?", t11_qa: "Natural Language Processing", t11_qc: "New Link Plan", t11_qb: "Network Learning Program", t11_qd: "Night Light Point",
    t11_tk1: "NLP", t11_tk2: "analyzes", t11_tk3: "the", t11_tk4: "structure", t11_tk5: "of", t11_tk6: "sentences.",
    t12_title: "Robots & AI", t12_text: "AI is the 'brain' that controls robots and makes them smart.", t12_inst: "Count the robot arms:", t12_h1: "How many are working here?", t12_h2: "Precision.", t12_q: "What is the difference between a robot and AI?", t12_qa: "Body vs. Mind", t12_qb: "There is none", t12_qc: "AI is made of metal", t12_qd: "Robots are invisible",
    t12_c: "4",
    t13_title: "AI vs. Human", t13_text: "AI is fast at calculating, but humans are more creative and have feelings.", t13_inst: "Compare strengths:", t13_h1: "Who does what better?", t13_h2: "Talents.", t13_q: "What can't an AI do (yet)?", t13_qa: "Have real feelings", t13_qb: "Calculate quickly", t13_qc: "Store data", t13_qd: "Find patterns",
    t13_l1: "Human", t13_r1: "Empathy", t13_l2: "AI", t13_r2: "Speed", t13_l3: "Both", t13_r3: "Learning",
    t14_title: "Decision Trees", t14_text: "AI often uses branched questions to arrive at a logical result.", t14_inst: "Fill in the blank:", t14_h1: "Yes or No?", t14_h2: "Choose a path.", t14_q: "What is a simple AI logic model called?", t14_qa: "Decision tree", t14_qb: "Math flower", t14_qc: "Data cloud", t14_qd: "Logic stone",
    t14_sent: "A decision tree helps the AI make a ___.", t14_qa2: "choice", t14_qb2: "break", t14_qc2: "color", t14_qd2: "music",
    t15_title: "Predictive Text", t15_text: "AI guesses which word you want to write next.", t15_inst: "Sort the word types:", t15_h1: "What do we write?", t15_h2: "Nouns or verbs.", t15_q: "How does the phone know the next word?", t15_qa: "By probability", t15_qb: "It reads thoughts", t15_qc: "Coincidence", t15_qd: "It's magic",
    t15_bl1: "Nouns", t15_bl2: "Verbs", t15_i1: "House", t15_i2: "run", t15_i3: "Apple", t15_i4: "play"
  },
  hu: {
    explorer_title: "MI Alapok",
    t1_title: "Mi az a MI?", t1_text: "A mesterséges intelligencia (MI) próbálja az emberi tanulást és problémamegoldást számítógépekre átültetni.", t1_inst: "Kösd össze a fogalmakat:", t1_h1: "Ember vs. gép.", t1_h2: "Mi tartozik össze?", t1_q: "Mit jelent a MI rövidítés?", t1_qa: "Mesterséges Intelligencia", t1_qb: "Minden Információ", t1_qc: "Méretes Internet", t1_qd: "Másik Irány",
    t1_l1: "Mesterséges", t1_r1: "Ember alkotta", t1_l2: "Intelligencia", t1_r2: "Tanulási képesség", t1_l3: "Számítógép", t1_r3: "Parancsokat hajt végre",
    t2_title: "Gépi tanulás", t2_text: "A gépek adatokból tanulnak, anélkül, hogy minden lépést külön be kellene programozni.", t2_inst: "Töltsd ki a hiányt:", t2_h1: "Tanulás tapasztalatból.", t2_h2: "Az adatok fontosak.", t2_q: "Mire van szüksége a MI-nek a tanuláshoz?", t2_qa: "Nagy mennyiségű adatra", t2_qb: "Egy monitorra", t2_qc: "Több áramra", t2_qd: "Egy billentyűzetre",
    t2_sent: "A gépi tanulás során a számítógép ___ ismer fel az adatokban.", t2_qa2: "mintákat", t2_qb2: "hibákat", t2_qc2: "sütit", t2_qd2: "időjárást",
    t3_title: "Adat: a MI üzemanyaga", t3_text: "A MI-nek sok példára (adatra) van szüksége, hogy megértse, mit kell tennie.", t3_inst: "Válogasd szét az adatforrásokat:", t3_h1: "Honnan jön az infó?", t3_h2: "Képek vagy szövegek.", t3_q: "Mik az adatok egy képfelismerő MI számára?", t3_qa: "Milliónyi fotó", t3_qb: "Egy ecset", t3_qc: "Egy USB kábel", t3_qd: "A gépház",
    t3_bl1: "Vizuális adatok", t3_bl2: "Szöveges adatok", t3_i1: "Fotók", t3_i2: "Könyvek", t3_i3: "Videók", t3_i4: "Cikkek",
    t4_title: "Algoritmusok", t4_text: "Az algoritmus egy pontos utasítássorozat, amelyet a MI követ.", t4_inst: "Tedd sorrendbe a folyamatot:", t4_h1: "Lépésről lépésre.", t4_h2: "Mint egy recept.", t4_q: "Mi az algoritmus?", t4_qa: "Egy utasítássorozat", t4_qb: "Egy robotkar", t4_qc: "Egy képernyőhiba", t4_qd: "Egy számítógépes játék",
    t4_w1: "Az", t4_w2: "algoritmus", t4_w3: "megold", t4_w4: "egy", t4_w5: "meghatározott", t4_w6: "problémát.", t4_w7: "",
    t5_title: "Mintafelismerés", t5_text: "A MI különösen jó abban, hogy hasonlóságokat találjon nagy mennyiségű információban.", t5_inst: "Jelöld meg a hasonlóságra utaló szót:", t5_h1: "Ismétlődések.", t5_h2: "Ami egyforma.", t5_q: "Mit keres a MI az adatokban?", t5_qa: "Mintákat", t5_qb: "Rejtekhelyeket", t5_qc: "Kábeleket", t5_qd: "Port",
    t5_tk1: "A MI", t5_tk2: "sokkal", t5_tk3: "gyorsabban", t5_tk4: "talál", t5_tk5: "mintákat", t5_tk6: "mint", t5_tk7: "mi.",
    t6_title: "MI-tanítás", t6_text: "A tanítási fázisban a MI ismert példák alapján tanul.", t6_inst: "Számold meg a tanító képeket:", t6_h1: "Kattints a kutyákra.", t6_h2: "Hányat látsz?", t6_q: "Hogy hívják azt a fázist, amikor a MI tanul?", t6_qa: "Tanítás", t6_qb: "Nyaralás", t6_qc: "Szünet", t6_qd: "Vizsga",
    t6_c: "5",
    t7_title: "Neurális hálózatok", t7_text: "Ezeket az emberi agy mintájára hozták létre, és segítenek a MI-nek a gondolkodásban.", t7_inst: "Kösd össze a részeket:", t7_h1: "Mint az agyban.", t7_h2: "Kapcsolatok.", t7_q: "Mi a neurális hálózat?", t7_qa: "Egy számítási modell", t7_qb: "Egy halászháló", t7_qc: "Egy tápkábel", t7_qd: "Egy pókháló",
    t7_l1: "Bemenet", t7_r1: "Bevitel", t7_l2: "Rejtett réteg", t7_r2: "Feldolgozás", t7_l3: "Kimenet", t7_r3: "Eredmény",
    t8_title: "MI a mindennapokban", t8_text: "Gyakran használunk MI-t anélkül, hogy tudnánk róla, pl. az okostelefon feloldásakor.", t8_inst: "Töltsd ki a hiányt:", t8_h1: "Körülöttünk mindenhol.", t8_h2: "Praktikus segítők.", t8_q: "Hol találsz gyakran MI-t?", t8_qa: "Hangasszisztensekben", t8_qb: "A pirítóban", t8_qc: "A ceruzában", t8_qd: "Az iskolatáskában",
    t8_sent: "Siri és Alexa ismert digitális ___.", t8_qa2: "asszisztensek", t8_qb2: "tanárok", t8_qc2: "háziállatok", t8_qd2: "szemüvegek",
    t9_title: "Képfelismerés", t9_text: "A MI képes azonosítani tárgyakat a fotókon, például kutyákat vagy autókat.", t9_inst: "Válogasd szét a képeket:", t9_h1: "Mi micsoda?", t9_h2: "Kategóriák keresése.", t9_q: "Mit használ a MI képfelismerésre?", t9_qa: "Számítógépes látást", t9_qb: "Távcsövet", t9_qc: "Nagyítót", t9_qd: "Mikrofont",
    t9_bl1: "Járművek", t9_bl2: "Állatok", t9_i1: "Autó", t9_i2: "Kutya", t9_i3: "Teherautó", t9_i4: "Macska",
    t10_title: "Beszédfelismerés", t10_text: "A MI a beszélt nyelvet szöveggé alakítja, hogy a gépek megértsenek minket.", t10_inst: "Tedd sorrendbe a mondatot:", t10_h1: "Figyelj jól.", t10_h2: "Beszédből szöveg.", t10_q: "Mit csinál a beszédfelismerés?", t10_qa: "Hangot szöveggé alakít", t10_qb: "Zenét játszik le", t10_qc: "Kikapcsolja a gépet", t10_qd: "Képet fest",
    t10_w1: "A MI", t10_w2: "egyre", t10_w3: "jobban", t10_w4: "megérti", t10_w5: "az", t10_w6: "emberi", t10_w7: "beszédet.",
    t11_title: "Természetes nyelvfeldolgozás", t11_text: "Az NLP segít a gépeknek megérteni a mondataink mögötti jelentést.", t11_inst: "Jelöld meg a nyelvre utaló szót:", t11_h1: "Amit beszélünk.", t11_h2: "Kommunikáció.", t11_q: "Mit jelent az NLP?", t11_qa: "Nyelvfeldolgozás", t11_qc: "Nagy Link Program", t11_qb: "Network Tanuló Terv", t11_qd: "Éjszakai fény",
    t11_tk1: "Az NLP", t11_tk2: "elemzi", t11_tk3: "a", t11_tk4: "mondataink", t11_tk5: "szerkezetét", t11_tk6: "és jelentését.",
    t12_title: "Robotok és MI", t12_text: "A MI az az 'agy', ami a robotokat vezérli és okossá teszi őket.", t12_inst: "Számold meg a robotkarokat:", t12_h1: "Hányan dolgoznak itt?", t12_h2: "Precizitás.", t12_q: "Mi a különbség a robot és a MI között?", t12_qa: "Test vs. Szellem", t12_qb: "Nincs különbség", t12_qc: "A MI fémből van", t12_qd: "A robotok láthatatlanok",
    t12_c: "4",
    t13_title: "MI vs. Ember", t13_text: "A MI gyors a számolásban, de az emberek kreatívabbak és vannak érzéseik.", t13_inst: "Hasonlítsd össze az erősségeket:", t13_h1: "Ki miben jobb?", t13_h2: "Tehetségek.", t13_q: "Mit nem tud (még) a MI?", t13_qa: "Valódi érzései lenni", t13_qb: "Gyorsan számolni", t13_qc: "Adatokat tárolni", t13_qd: "Mintákat találni",
    t13_l1: "Ember", t13_r1: "Empátia", t13_l2: "MI", t13_r2: "Gyorsaság", t13_l3: "Mindkettő", t13_r3: "Tanulás",
    t14_title: "Döntési fák", t14_text: "A MI gyakran elágazó kérdéseket használ, hogy logikus eredményre jusson.", t14_inst: "Töltsd ki a hiányt:", t14_h1: "Igen vagy Nem?", t14_h2: "Válassz egy utat.", t14_q: "Hogy hívnak egy egyszerű MI logikai modellt?", t14_qa: "Döntési fa", t14_qb: "Számolómaci", t14_qc: "Adatfelhő", t14_qd: "Logikai kő",
    t14_sent: "A döntési fa segíti a MI-t a ___ meghozatalában.", t14_qa2: "döntés", t14_qb2: "szünet", t14_qc2: "szín", t14_qd2: "zene",
    t15_title: "Jósolt szövegek", t15_text: "A MI kitalálja, melyik szót akarod leírni legközelebb.", t15_inst: "Válogasd szét a szófajokat:", t15_h1: "Mit írunk?", t15_h2: "Főnevek vagy igék.", t15_q: "Honnan tudja a telefon a következő szót?", t15_qa: "Valószínűség alapján", t15_qb: "Gondolatolvasó", t15_qc: "Véletlen", t15_qd: "Varázslat",
    t15_bl1: "Főnevek", t15_bl2: "Igék", t15_i1: "Ház", t15_i2: "fut", t15_i3: "Alma", t15_i4: "játszik"
  },
  ro: {
    explorer_title: "Bazele IA",
    t1_title: "Ce este IA?", t1_text: "Inteligența Artificială (IA) încearcă să transfere învățarea și rezolvarea problemelor umane către calculatoare.", t1_inst: "Conectează termenii:", t1_h1: "Om vs. mașină.", t1_h2: "Ce se potrivește?", t1_q: "Ce înseamnă IA?", t1_qa: "Inteligență Artificială", t1_qb: "Informație Automatizată", t1_qc: "Internet Avansat", t1_qd: "Idee Abstractă",
    t1_l1: "Artificial", t1_r1: "Creat de oameni", t1_l2: "Inteligență", t1_r2: "Abilitatea de a învăța", t1_l3: "Calculator", t1_r3: "Execută comenzi",
    t2_title: "Învățare Automată", t2_text: "Mașinile învață din date fără ca fiecare pas să fie programat individual.", t2_inst: "Completează spațiul liber:", t2_h1: "Învățare prin experiență.", t2_h2: "Datele sunt importante.", t2_q: "De ce are nevoie o IA pentru a învăța?", t2_qa: "Cantități mari de date", t2_qb: "Un monitor", t2_qc: "Mai mult curent", t2_qd: "O tastatură",
    t2_sent: "În învățarea automată, calculatorul recunoaște ___ în date.", t2_qa2: "tipare", t2_qb2: "erori", t2_qc2: "prăjitură", t2_qd2: "vremea",
    t3_title: "Datele: Combustibilul IA", t3_text: "IA are nevoie de multe exemple (date) pentru a înțelege ce trebuie să facă.", t3_inst: "Sortează sursele de date:", t3_h1: "De unde vin informațiile?", t3_h2: "Imagini sau texte.", t3_q: "Ce reprezintă datele pentru o IA de imagini?", t3_qa: "Milioane de fotografii", t3_qb: "O pensulă", t3_qc: "Un cablu USB", t3_qd: "Carcasa",
    t3_bl1: "Date Vizuale", t3_bl2: "Date Text", t3_i1: "Fotografii", t3_i2: "Cărți", t3_i3: "Videoclipuri", t3_i4: "Articole",
    t4_title: "Algoritmi", t4_text: "Un algoritm este un set precis de instrucțiuni pe care IA le urmează.", t4_inst: "Pune procesul în ordine:", t4_h1: "Pas cu pas.", t4_h2: "Ca o rețetă.", t4_q: "Ce este un algoritm?", t4_qa: "Un set de instrucțiuni", t4_qb: "Un braț robot", t4_qc: "O eroare de ecran", t4_qd: "Un joc pe calculator",
    t4_w1: "Un", t4_w2: "algoritm", t4_w3: "rezolvă", t4_w4: "o", t4_w5: "problemă", t4_w6: "anume.", t4_w7: "",
    t5_title: "Recunoașterea Tiparelor", t5_text: "IA este deosebit de bună la găsirea asemănărilor în cantități mari de informații.", t5_inst: "Evidențiază cuvântul pentru asemănări:", t5_h1: "Repetiții.", t5_h2: "Ce seamănă.", t5_q: "Ce caută o IA în date?", t5_qa: "Tipare", t5_qb: "Ascunzători", t5_qc: "Cabluri", t5_qd: "Praf",
    t5_tk1: "IA", t5_tk2: "poate", t5_tk3: "găsi", t5_tk4: "tipare", t5_tk5: "mult", t5_tk6: "mai", t5_tk7: "rapid", t5_tk8: "decât noi.",
    t6_title: "Antrenarea IA", t6_text: "În faza de antrenare, IA învață din exemple cunoscute.", t6_inst: "Numără imaginile de antrenare:", t6_h1: "Apasă pe câini.", t6_h2: "Câți sunt?", t6_q: "Cum se numește faza în care IA învață?", t6_qa: "Antrenare", t6_qb: "Vacanță", t6_qc: "Pauză", t6_qd: "Absolvire",
    t6_c: "5",
    t7_title: "Rețele Neuronale", t7_text: "Acestea sunt modelate după creierul uman și ajută IA să 'gândească'.", t7_inst: "Conectează părțile:", t7_h1: "Ca în creier.", t7_h2: "Conexiuni.", t7_q: "Ce este o rețea neuronală?", t7_qa: "Un model de calcul", t7_qb: "O plasă de pescuit", t7_qc: "Un cablu de alimentare", t7_qd: "O pânză de păianjen",
    t7_l1: "Input", t7_r1: "Intrare date", t7_l2: "Hidden Layer", t7_r2: "Procesare", t7_l3: "Output", t7_r3: "Rezultat",
    t8_title: "IA în viața de zi cu zi", t8_text: "Folosim adesea IA fără să ne dăm seama, de exemplu, la deblocarea telefonului.", t8_inst: "Completează spațiul liber:", t8_h1: "Peste tot în jur.", t8_h2: "Ajutoare practice.", t8_q: "Unde găsești adesea IA?", t8_qa: "În asistenții vocali", t8_qb: "În prăjitorul de pâine", t8_qc: "În creion", t8_qd: "În ghiozdan",
    t8_sent: "Siri și Alexa sunt asistenți digitali ___.", t8_qa2: "cunoscuți", t8_qb2: "profesori", t8_qc2: "animale", t8_qd2: "ochelari",
    t9_title: "Recunoașterea Imaginilor", t9_text: "IA poate identifica obiecte în fotografii, cum ar ani câini sau mașini.", t9_inst: "Sortează imaginile:", t9_h1: "Ce este ce?", t9_h2: "Găsește categorii.", t9_q: "Ce folosește IA pentru recunoașterea imaginilor?", t9_qa: "Computer Vision", t9_qb: "Binoclu", t9_qc: "O lupă", t9_qd: "Un microfon",
    t9_bl1: "Vehicule", t9_bl2: "Animale", t9_i1: "Mașină", t9_i2: "Câine", t9_i3: "Camion", t9_i4: "Pisică",
    t10_title: "Recunoașterea Vorbirii", t10_text: "IA transformă limbajul vorbit în text pentru ca mașinile să ne înțeleagă.", t10_inst: "Pune propoziția în ordine:", t10_h1: "Ascultă cu atenție.", t10_h2: "Vorbire în text.", t10_q: "Ce face recunoașterea vorbirii?", t10_qa: "Transformă vocea în text", t10_qb: "Redă muzică", t10_qc: "Oprește PC-ul", t10_qd: "Pictează tablouri",
    t10_w1: "IA", t10_w2: "înțelege", t10_w3: "limbajul", t10_w4: "nostru", t10_w5: "uman", t10_w6: "tot", t10_w7: "mai bine.",
    t11_title: "Procesarea Limbajului Natural", t11_text: "NLP ajută calculatoarele să înțeleagă sensul din spatele propozițiilor noastre.", t11_inst: "Evidențiază cuvântul pentru limbaj:", t11_h1: "Ce vorbim.", t11_h2: "Comunicare.", t11_q: "Ce înseamnă NLP?", t11_qa: "Procesarea limbajului", t11_qc: "Plan de legătură", t11_qb: "Program de învățare", t11_qd: "Punct de lumină",
    t11_tk1: "NLP", t11_tk2: "analizează", t11_tk3: "structura", t11_tk4: "propozițiilor", t11_tk5: "noastre.",
    t12_title: "Roboți și IA", t12_text: "IA este 'creierul' care controlează roboții și îi face inteligenți.", t12_inst: "Numără brațele robotice:", t12_h1: "Câți lucrează aici?", t12_h2: "Precizie.", t12_q: "Care este diferența dintre un robot și IA?", t12_qa: "Corp vs. Minte", t12_qb: "Nu există nicio diferență", t12_qc: "IA este din metal", t12_qd: "Roboții sunt invizibili",
    t12_c: "4",
    t13_title: "IA vs. Om", t13_text: "IA este rapidă la calcule, dar oamenii sunt mai creativi și au sentimente.", t13_inst: "Compară punctele forte:", t13_h1: "Cine ce face mai bine?", t13_h2: "Talente.", t13_q: "Ce nu poate face o IA (încă)?", t13_qa: "Să aibă sentimente reale", t13_qb: "Să calculeze rapid", t13_qc: "Să salveze date", t13_qd: "Să găsească tipare",
    t13_l1: "Om", t13_r1: "Empatie", t13_l2: "IA", t13_r2: "Viteză", t13_l3: "Amândoi", t13_r3: "Învățare",
    t14_title: "Arbori de Decizie", t14_text: "IA folosește adesea întrebări ramificate pentru a ajunge la un rezultat logic.", t14_inst: "Completează spațiul liber:", t14_h1: "Da sau Nu?", t14_h2: "Alege o cale.", t14_q: "Cum se numește un model logic simplu de IA?", t14_qa: "Arbore de decizie", t14_qb: "Floare de calcul", t14_qc: "Nor de date", t14_qd: "Piatră logică",
    t14_sent: "Un arbore de decizie ajută IA să ia o ___.", t14_qa2: "decizie", t14_qb2: "pauză", t14_qc2: "culoare", t14_qd2: "muzică",
    t15_title: "Text Predictiv", t15_text: "IA ghicește ce cuvânt vrei să scrii în continuare.", t15_inst: "Sortează tipurile de cuvinte:", t15_h1: "Ce scriem?", t15_h2: "Substantive sau verbe.", t15_q: "Cum știe telefonul următorul cuvânt?", t15_qa: "Prin probabilitate", t15_qb: "Citește gândurile", t15_qc: "Coincidență", t15_qd: "Este magie",
    t15_bl1: "Substantive", t15_bl2: "Verbe", t15_i1: "Casă", t15_i2: "fuge", t15_i3: "Măr", t15_i4: "joacă"
  }
};

export const INFO_K6_I7_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "simple-icon", icon: "🧠", color: "#9C27B0" },
    interactive: { type: "match-pairs", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", pairs: [{left:"t1_l1",right:"t1_r1"},{left:"t1_l2",right:"t1_r2"},{left:"t1_l3",right:"t1_r3"}] },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" }
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "📈", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" }
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "icon-grid", items: [{emoji:"🖼️",label:"Visual"},{emoji:"📄",label:"Text"}] },
    interactive: { type: "drag-to-bucket", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", buckets: [{id:"b1",label:"t3_bl1"},{id:"b2",label:"t3_bl2"}], items: [{text:"t3_i1",bucketId:"b1"},{text:"t3_i2",bucketId:"b2"},{text:"t3_i3",bucketId:"b1"},{text:"t3_i4",bucketId:"b2"}] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "🔢", color: "#FF9800" },
    interactive: { type: "word-order", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", words: ["t4_w1", "t4_w2", "t4_w3", "t4_w4", "t4_w5", "t4_w6", "t4_w7"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6].slice(0, 6) },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "🔍", color: "#2196F3" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6","t5_tk7","t5_tk8"].filter(x=>x!==undefined), correctIndices: [2,3] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" }
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "simple-icon", icon: "🐕", color: "#795548" },
    interactive: { type: "tap-count", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", tapCount: { emoji: "🐕", count: 5 } },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" }
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "🕸️", color: "#607D8B" },
    interactive: { type: "match-pairs", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", pairs: [{left:"t7_l1",right:"t7_r1"},{left:"t7_l2",right:"t7_r2"},{left:"t7_l3",right:"t7_r3"}] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" }
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "simple-icon", icon: "📱", color: "#00BCD4" },
    interactive: { type: "gap-fill", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", sentence: "t8_sent", choices: ["t8_qa2", "t8_qb2", "t8_qc2", "t8_qd2"], correctIndex: 0 },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" }
  },
  {
    infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "icon-grid", items: [{emoji:"🚗",label:"Vehicles"},{emoji:"🐱",label:"Animals"}] },
    interactive: { type: "drag-to-bucket", instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2", buckets: [{id:"b1",label:"t9_bl1"},{id:"b2",label:"t9_bl2"}], items: [{text:"t9_i1",bucketId:"b1"},{text:"t9_i2",bucketId:"b2"},{text:"t9_i3",bucketId:"b1"},{text:"t9_i4",bucketId:"b2"}] },
    quiz: { question: "t9_q", choices: ["t9_qa", "t9_qb", "t9_qc", "t9_qd"], answer: "t9_qa" }
  },
  {
    infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "simple-icon", icon: "🎙️", color: "#E91E63" },
    interactive: { type: "word-order", instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2", words: ["t10_w1", "t10_w2", "t10_w3", "t10_w4", "t10_w5", "t10_w6", "t10_w7"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6].slice(0, 7) },
    quiz: { question: "t10_q", choices: ["t10_qa", "t10_qb", "t10_qc", "t10_qd"], answer: "t10_qa" }
  },
  {
    infoTitle: "t11_title", infoText: "t11_text",
    svg: { type: "simple-icon", icon: "💬", color: "#3F51B5" },
    interactive: { type: "highlight-text", instruction: "t11_inst", hint1: "t11_h1", hint2: "t11_h2", tokens: ["t11_tk1","t11_tk2","t11_tk3","t11_tk4","t11_tk5","t11_tk6"].filter(x=>x!==undefined), correctIndices: [0,5] },
    quiz: { question: "t11_q", choices: ["t11_qa", "t11_qb", "t11_qc", "t11_qd"], answer: "t11_qa" }
  },
  {
    infoTitle: "t12_title", infoText: "t12_text",
    svg: { type: "simple-icon", icon: "🦾", color: "#9E9E9E" },
    interactive: { type: "tap-count", instruction: "t12_inst", hint1: "t12_h1", hint2: "t12_h2", tapCount: { emoji: "🦾", count: 4 } },
    quiz: { question: "t12_q", choices: ["t12_qa", "t12_qb", "t12_qc", "t12_qd"], answer: "t12_qa" }
  },
  {
    infoTitle: "t13_title", infoText: "t13_text",
    svg: { type: "simple-icon", icon: "👨‍💻", color: "#FFEB3B" },
    interactive: { type: "match-pairs", instruction: "t13_inst", hint1: "t13_h1", hint2: "t13_h2", pairs: [{left:"t13_l1",right:"t13_r1"},{left:"t13_l2",right:"t13_r2"},{left:"t13_l3",right:"t13_r3"}] },
    quiz: { question: "t13_q", choices: ["t13_qa", "t13_qb", "t13_qc", "t13_qd"], answer: "t13_qa" }
  },
  {
    infoTitle: "t14_title", infoText: "t14_text",
    svg: { type: "simple-icon", icon: "🌳", color: "#8BC34A" },
    interactive: { type: "gap-fill", instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2", sentence: "t14_sent", choices: ["t14_qa2", "t14_qb2", "t14_qc2", "t14_qd2"], correctIndex: 0 },
    quiz: { question: "t14_q", choices: ["t14_qa", "t14_qb", "t14_qc", "t14_qd"], answer: "t14_qa" }
  },
  {
    infoTitle: "t15_title", infoText: "t15_text",
    svg: { type: "icon-grid", items: [{emoji:"🍎",label:"Nouns"},{emoji:"🏃",label:"Verbs"}] },
    interactive: { type: "drag-to-bucket", instruction: "t15_inst", hint1: "t15_h1", hint2: "t15_h2", buckets: [{id:"b1",label:"t15_bl1"},{id:"b2",label:"t15_bl2"}], items: [{text:"t15_i1",bucketId:"b1"},{text:"t15_i2",bucketId:"b2"},{text:"t15_i3",bucketId:"b1"},{text:"t15_i4",bucketId:"b2"}] },
    quiz: { question: "t15_q", choices: ["t15_qa", "t15_qb", "t15_qc", "t15_qd"], answer: "t15_qa" }
  }
];

