// @ts-nocheck
// lib/explorerPools/aiK5_i7.ts
import type { PoolTopicDef } from "./types";

export const INFO_K5_I7_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "KI-Entdecker 7",
    t1_title: "Was ist KI?", t1_text: "Künstliche Intelligenz (KI) ist die Fähigkeit von Maschinen, Aufgaben zu lösen, für die man normalerweise menschliche Intelligenz braucht.", t1_inst: "Ordne die Paare zu:", t1_h1: "Mensch vs. Maschine.", t1_h2: "Wer lernt?", t1_q: "Was bedeutet KI?", t1_qa: "Künstliche Intelligenz", t1_qb: "Kleines Internet", t1_qc: "Kabel-Input", t1_qd: "Keine Information",
    t1_l1: "Mensch", t1_r1: "Biologisch", t1_l2: "KI", t1_r2: "Digital", t1_l3: "Lernen", t1_r3: "Daten",
    t2_title: "Maschinelles Lernen", t2_text: "Maschinen lernen nicht auswendig, sondern erkennen Muster in großen Datenmengen.", t2_inst: "Fülle die Lücke aus:", t2_h1: "Lernen aus Erfahrung.", t2_h2: "Daten sind wichtig.", t2_q: "Wie lernt eine KI?", t2_qa: "Durch Trainingsdaten", t2_qb: "Durch Schlafen", t2_qc: "Durch Essen", t2_qd: "Gar nicht",
    t2_sent: "KI lernt aus vielen ___, um Muster zu finden.", t2_qa2: "Beispielen", t2_qb2: "Büchern", t2_qc2: "Kabeln", t2_qd2: "Steinen",
    t3_title: "Chatbots", t3_text: "Chatbots sind KI-Programme, mit denen man wie mit Menschen schreiben kann.", t3_inst: "Sortiere in die Eimer:", t3_h1: "Menschen vs. Programme.", t3_h2: "Was ist ein Chatbot?", t3_q: "Was macht ein Chatbot?", t3_qa: "Texte schreiben", t3_qb: "Kuchen backen", t3_qc: "Zimmer aufräumen", t3_qd: "Fahrrad fahren",
    t3_bl1: "Mensch", t3_bl2: "Chatbot", t3_i1: "Freund", t3_i2: "ChatGPT", t3_i3: "Lehrer", t3_i4: "Support-Bot",
    t4_title: "Sprachassistenten", t4_text: "Siri und Alexa verstehen unsere Stimme dank KI.", t4_inst: "Bringe die Wörter in Ordnung:", t4_h1: "Wir sprechen mit...", t4_h2: "Stimme erkennen.", t4_q: "Wer ist ein Sprachassistent?", t4_qa: "Alexa", t4_qb: "YouTube", t4_qc: "Minecraft", t4_qd: "Windows",
    t4_w1: "KI", t4_w2: "versteht", t4_w3: "unsere", t4_w4: "gesprochene", t4_w5: "Sprache", t4_w6: "heute", t4_w7: "sehr gut.",
    t5_title: "Bilderkennung", t5_text: "KI kann Gesichter, Tiere und Objekte auf Fotos erkennen.", t5_inst: "Markiere, welches Tier die KI erkennt:", t5_h1: "Was sieht die Kamera?", t5_h2: "Objekte finden.", t5_q: "Was erkennt eine Foto-KI?", t5_qa: "Gegenstände", t5_qb: "Gerüche", t5_qc: "Geschmack", t5_qd: "Gedanken",
    t5_tk1: "Die KI", t5_tk2: "kann", t5_tk3: "einen", t5_tk4: "Hund", t5_tk5: "auf einem", t5_tk6: "Foto", t5_tk7: "identifizieren.",
    t6_title: "Face ID", t6_text: "Manche Handys entsperren sich, wenn die KI dein Gesicht erkennt.", t6_inst: "Ordne die Paare zu:", t6_h1: "Biometrie.", t6_h2: "Sicherheit.", t6_q: "Was nutzt Face ID?", t6_qa: "Gesichtsform", t6_qb: "Haarfarbe", t6_qc: "Kleidung", t6_qd: "Lieblingsessen",
    t6_l1: "Passwort", t6_r1: "Text", t6_l2: "Face ID", t6_r2: "Gesicht", t6_l3: "Touch ID", t6_r3: "Finger",
    t7_title: "KI in Spielen", t7_text: "Gegner in Videospielen verhalten sich dank KI oft wie echte Spieler.", t7_inst: "Fülle die Lücke aus:", t7_h1: "Schlaue Gegner.", t7_h2: "NPCs.", t7_q: "Was steuert die KI im Spiel?", t7_qa: "Computergegner", t7_qb: "Die Maus", t7_qc: "Den Strom", t7_qd: "Die Internetflatrate",
    t7_sent: "Gegner im Spiel werden durch ___ gesteuert.", t7_qa2: "KI", t7_qb2: "Zauberei", t7_qc2: "Batterien", t7_qd2: "Luft",
    t8_title: "Smart Home", t8_text: "Ein schlaues Zuhause nutzt KI, um Licht oder Heizung zu regeln.", t8_inst: "Sortiere in die Eimer:", t8_h1: "Alt vs. Smart.", t8_h2: "Was ist intelligent?", t8_q: "Was macht ein Smart Home?", t8_qa: "Energie sparen", t8_qb: "Witze erzählen", t8_qc: "Selbst fliegen", t8_qd: "Hausaufgaben machen",
    t8_bl1: "Normal", t8_bl2: "Smart", t8_i1: "Besen", t8_i2: "Saugroboter", t8_i3: "Schalter", t8_i4: "Sprachsteuerung",
    t9_title: "Roboter", t9_text: "Roboter sind Maschinen mit Körpern, die oft durch KI gesteuert werden.", t9_inst: "Bringe die Wörter in Ordnung:", t9_h1: "Maschinen mit Arm.", t9_h2: "Bewegung.", t9_q: "Was ist ein Roboter?", t9_qa: "Bewegliche Maschine", t9_qb: "Ein Comic", t9_qc: "Nur ein Bild", t9_qd: "Eine Website",
    t9_w1: "KI", t9_w2: "gibt", t9_w3: "dem", t9_w4: "Roboter", t9_w5: "sein", t9_w6: "digitales", t9_w7: "Gehirn.",
    t10_title: "Sensoren", t10_text: "Sensoren sind die Augen und Ohren der KI.", t10_inst: "Markiere, was den Abstand misst:", t10_h1: "Wahrnehmung.", t10_h2: "Messen.", t10_q: "Was ist ein Sensor?", t10_qa: "Messgerät", t10_qb: "Ein Motor", t10_qc: "Ein Rad", t10_qd: "Ein Kabel",
    t10_tk1: "Ein", t10_tk2: "Sensor", t10_tk3: "misst", t10_tk4: "den", t10_tk5: "Abstand", t10_tk6: "zu Hindernissen.",
    t11_title: "KI vs. Software", t11_text: "Normale Programme folgen festen Regeln, KI lernt dazu.", t11_inst: "Ordne die Paare zu:", t11_h1: "Regeln vs. Lernen.", t11_h2: "Was ist flexibel?", t11_q: "Was ist der Unterschied?", t11_qa: "KI lernt selbst", t11_qb: "KI braucht Benzin", t11_qc: "KI hat Gefühle", t11_qd: "Es gibt keinen",
    t11_l1: "Programm", t11_r1: "Regeln", t11_l2: "KI", t11_r2: "Muster", t11_l3: "Mensch", t11_r3: "Gefühle",
    t12_title: "Generative KI", t12_text: "KI kann neue Texte, Bilder oder Musik erschaffen.", t12_inst: "Fülle die Lücke aus:", t12_h1: "Etwas erschaffen.", t12_h2: "Kreativität.", t12_q: "Was bedeutet 'generieren'?", t12_qa: "Erzeugen", t12_qb: "Löschen", t12_qc: "Suchen", t12_qd: "Verstecken",
    t12_sent: "KI kann neue Bilder ___.", t12_qa2: "erstellen", t12_qb2: "essen", t12_qc2: "vergessen", t12_qd2: "kaufen",
    t13_title: "Texte schreiben", t13_text: "KI kann Geschichten schreiben oder Fragen beantworten.", t13_inst: "Sortiere in die Eimer:", t13_h1: "KI-Text vs. Mensch.", t13_h2: "Wer schreibt?", t13_q: "Wofür nutzt man Text-KI?", t13_qa: "Zusammenfassungen", t13_qb: "Sport treiben", t13_qc: "Essen kochen", t13_qd: "Wäsche waschen",
    t13_bl1: "Handgeschrieben", t13_bl2: "KI-generiert", t13_i1: "Brief", t13_i2: "Chatbot-Antwort", t13_i3: "Tagebuch", t13_i4: "Auto-Übersetzung",
    t14_title: "KI-Kunst", t14_text: "KI-Modelle können aus Wortbeschreibungen Bilder malen.", t14_inst: "Bringe die Wörter in Ordnung:", t14_h1: "Malen mit Worten.", t14_h2: "Prompting.", t14_q: "Wie nennt man den Befehl an die KI?", t14_qa: "Prompt", t14_qb: "Klick", t14_qc: "Link", t14_qd: "Datei",
    t14_w1: "Aus", t14_w2: "Text", t14_w3: "macht", t14_w4: "die", t14_w5: "KI", t14_w6: "ein", t14_w7: "Bild.",
    t15_title: "Neuronale Netze", t15_text: "KI-Gehirne sind oft wie Netze im menschlichen Gehirn aufgebaut.", t15_inst: "Markiere die zwei Wörter für das KI-Gehirn:", t15_h1: "Struktur.", t15_h2: "Verbindungen.", t15_q: "Woran orientiert sich KI-Architektur?", t15_qa: "Menschliches Gehirn", t15_qb: "Ein Uhrwerk", t15_qc: "Ein Kochtopf", t15_qd: "Ein Auto",
    t15_tk1: "Neuronale", t15_tk2: "Netze", t15_tk3: "helfen", t15_tk4: "der KI", t15_tk5: "beim", t15_tk6: "Verstehen."
  },
  en: {
    explorer_title: "AI Explorer 7",
    t1_title: "What is AI?", t1_text: "Artificial Intelligence (AI) is the ability of machines to solve tasks that normally require human intelligence.", t1_inst: "Match the pairs:", t1_h1: "Human vs. Machine.", t1_h2: "Who learns?", t1_q: "What does AI stand for?", t1_qa: "Artificial Intelligence", t1_qb: "Advanced Internet", t1_qc: "All Information", t1_qd: "Always Intelligent",
    t1_l1: "Human", t1_r1: "Biological", t1_l2: "AI", t1_r2: "Digital", t1_l3: "Learning", t1_r3: "Data",
    t2_title: "Machine Learning", t2_text: "Machines don't memorize; they recognize patterns in large amounts of data.", t2_inst: "Fill in the blank:", t2_h1: "Learn from experience.", t2_h2: "Data is key.", t2_q: "How does AI learn?", t2_qa: "Through training data", t2_qb: "By sleeping", t2_qc: "By eating", t2_qd: "It doesn't",
    t2_sent: "AI learns from many ___ to find patterns.", t2_qa2: "examples", t2_qb2: "books", t2_qc2: "cables", t2_qd2: "stones",
    t3_title: "Chatbots", t3_text: "Chatbots are AI programs that you can write to as if they were people.", t3_inst: "Sort into buckets:", t3_h1: "People vs. programs.", t3_h2: "What is a chatbot?", t3_q: "What does a chatbot do?", t3_qa: "Write text", t3_qb: "Bake cakes", t3_qc: "Clean rooms", t3_qd: "Ride bikes",
    t3_bl1: "Human", t3_bl2: "Chatbot", t3_i1: "Friend", t3_i2: "ChatGPT", t3_i3: "Teacher", t3_i4: "Support bot",
    t4_title: "Voice Assistants", t4_text: "Siri and Alexa understand our voice thanks to AI.", t4_inst: "Put the words in order:", t4_h1: "We talk to...", t4_h2: "Recognizing voice.", t4_q: "Who is a voice assistant?", t4_qa: "Alexa", t4_qb: "YouTube", t4_qc: "Minecraft", t4_qd: "Windows",
    t4_w1: "AI", t4_w2: "understands", t4_w3: "our", t4_w4: "spoken", t4_w5: "language", t4_w6: "very", t4_w7: "well today.",
    t5_title: "Image Recognition", t5_text: "AI can recognize faces, animals, and objects in photos.", t5_inst: "Highlight which animal the AI recognizes:", t5_h1: "What does the camera see?", t5_h2: "Finding objects.", t5_q: "What does an image AI recognize?", t5_qa: "Objects", t5_qb: "Smells", t5_qc: "Tastes", t5_qd: "Thoughts",
    t5_tk1: "AI", t5_tk2: "can", t5_tk3: "recognize", t5_tk4: "dogs", t5_tk5: "in", t5_tk6: "photos.", t5_tk7: "",
    t6_title: "Face ID", t6_text: "Some phones unlock when the AI recognizes your face.", t6_inst: "Match the pairs:", t6_h1: "Biometrics.", t6_h2: "Security.", t6_q: "What does Face ID use?", t6_qa: "Face shape", t6_qb: "Hair color", t6_qc: "Clothing", t6_qd: "Favorite food",
    t6_l1: "Password", t6_r1: "Text", t6_l2: "Face ID", t6_r2: "Face", t6_l3: "Touch ID", t6_r3: "Finger",
    t7_title: "AI in Games", t7_text: "Opponents in video games often behave like real players thanks to AI.", t7_inst: "Fill in the blank:", t7_h1: "Smart opponents.", t7_h2: "NPCs.", t7_q: "What does AI control in games?", t7_qa: "Computer opponents", t7_qb: "The mouse", t7_qc: "The power", t7_qd: "Internet speed",
    t7_sent: "Opponents in games are controlled by ___.", t7_qa2: "AI", t7_qb2: "magic", t7_qc2: "batteries", t7_qd2: "air",
    t8_title: "Smart Home", t8_text: "A smart home uses AI to regulate lights or heating.", t8_inst: "Sort into buckets:", t8_h1: "Old vs. Smart.", t8_h2: "What is intelligent?", t8_q: "What does a smart home do?", t8_qa: "Save energy", t8_qb: "Tell jokes", t8_qc: "Fly itself", t8_qd: "Do homework",
    t8_bl1: "Normal", t8_bl2: "Smart", t8_i1: "Broom", t8_i2: "Robot vacuum", t8_i3: "Switch", t8_i4: "Voice control",
    t9_title: "Robots", t9_text: "Robots are machines with bodies, often controlled by AI.", t9_inst: "Put the words in order:", t9_h1: "Machines with arms.", t9_h2: "Movement.", t9_q: "What is a robot?", t9_qa: "Moving machine", t9_qb: "A comic", t9_qc: "Just a picture", t9_qd: "A website",
    t9_w1: "AI", t9_w2: "gives", t9_w3: "the", t9_w4: "robot", t9_w5: "its", t9_w6: "digital", t9_w7: "brain.",
    t10_title: "Sensors", t10_text: "Sensors are the eyes and ears of AI.", t10_inst: "Highlight what measures the distance:", t10_h1: "Perception.", t10_h2: "Measuring.", t10_q: "What is a sensor?", t10_qa: "Measuring device", t10_qb: "A motor", t10_qc: "A wheel", t10_qd: "A cable",
    t10_tk1: "A", t10_tk2: "sensor", t10_tk3: "measures", t10_tk4: "the", t10_tk5: "distance", t10_tk6: "to obstacles.",
    t11_title: "AI vs. Software", t11_text: "Normal programs follow fixed rules, AI learns on its own.", t11_inst: "Match the pairs:", t11_h1: "Rules vs. learning.", t11_h2: "What is flexible?", t11_q: "What is the difference?", t11_qa: "AI learns by itself", t11_qb: "AI needs gas", t11_qc: "AI has feelings", t11_qd: "There is none",
    t11_l1: "Program", t11_r1: "Rules", t11_l2: "AI", t11_r2: "Patterns", t11_l3: "Human", t11_r3: "Feelings",
    t12_title: "Generative AI", t12_text: "AI can create new text, images, or music.", t12_inst: "Fill in the blank:", t12_h1: "Creating something.", t12_h2: "Creativity.", t12_q: "What does 'generate' mean?", t12_qa: "Create", t12_qb: "Delete", t12_qc: "Search", t12_qd: "Hide",
    t12_sent: "AI can ___ new images.", t12_qa2: "create", t12_qb2: "eat", t12_qc2: "forget", t12_qd2: "buy",
    t13_title: "Writing Texts", t13_text: "AI can write stories or answer questions.", t13_inst: "Sort into buckets:", t13_h1: "AI text vs. human.", t13_h2: "Who is writing?", t13_q: "What is text AI used for?", t13_qa: "Summaries", t13_qb: "Doing sports", t13_qc: "Cooking food", t13_qd: "Washing laundry",
    t13_bl1: "Handwritten", t13_bl2: "AI-generated", t13_i1: "Letter", t13_i2: "Chatbot answer", t13_i3: "Diary", t13_i4: "Auto-translate",
    t14_title: "AI Art", t14_text: "AI models can paint pictures from word descriptions.", t14_inst: "Put the words in order:", t14_h1: "Painting with words.", t14_h2: "Prompting.", t14_q: "What is the command for AI called?", t14_qa: "Prompt", t14_qb: "Click", t14_qc: "Link", t14_qd: "File",
    t14_w1: "AI", t14_w2: "makes", t14_w3: "an", t14_w4: "image", t14_w5: "from", t14_w6: "your", t14_w7: "text.",
    t15_title: "Neural Networks", t15_text: "AI brains are often structured like networks in the human brain.", t15_inst: "Highlight the two words for the AI brain:", t15_h1: "Structure.", t15_h2: "Connections.", t15_q: "What is AI architecture based on?", t15_qa: "Human brain", t15_qb: "A clockwork", t15_qc: "A cooking pot", t15_qd: "A car",
    t15_tk1: "Neural", t15_tk2: "networks", t15_tk3: "help", t15_tk4: "the AI", t15_tk5: "to", t15_tk6: "understand."
  },
  hu: {
    explorer_title: "AI Felfedező 7",
    t1_title: "Mi az az MI?", t1_text: "A mesterséges intelligencia (MI) a gépek azon képessége, hogy olyan feladatokat oldjanak meg, amikhez emberi ész kellene.", t1_inst: "Párosítsd össze:", t1_h1: "Ember vs. gép.", t1_h2: "Ki tanul?", t1_q: "Mit jelent az MI?", t1_qa: "Mesterséges Intelligencia", t1_qb: "Magas Internet", t1_qc: "Minden Információ", t1_qd: "Majdnem Igazi",
    t1_l1: "Ember", t1_r1: "Biológiai", t1_l2: "MI", t1_r2: "Digitális", t1_l3: "Tanulás", t1_r3: "Adatok",
    t2_title: "Gépi tanulás", t2_text: "A gépek nem bemagolják a dolgokat, hanem mintázatokat keresnek rengeteg adatban.", t2_inst: "Töltsd ki a hiányt:", t2_h1: "Tapasztalatból tanul.", t2_h2: "Az adat a kulcs.", t2_q: "Hogyan tanul az MI?", t2_qa: "Tanító adatokkal", t2_qb: "Alvással", t2_qc: "Evéssel", t2_qd: "Sehogy",
    t2_sent: "Az MI sok ___ alapján tanul meg mintákat felismerni.", t2_qa2: "példa", t2_qb2: "könyv", t2_qc2: "kábel", t2_qd2: "kő",
    t3_title: "Chatbotok", t3_text: "A chatbotok olyan MI-programok, amikkel úgy tudunk írásban beszélgetni, mintha emberek lennének.", t3_inst: "Válogasd szét:", t3_h1: "Emberek vs. programok.", t3_h2: "Mi az a chatbot?", t3_q: "Mire jó egy chatbot?", t3_qa: "Szövegírásra", t3_qb: "Sütisütésre", t3_qc: "Rendet rakni", t3_qd: "Biciklizésre",
    t3_bl1: "Ember", t3_bl2: "Chatbot", t3_i1: "Barát", t3_i2: "ChatGPT", t3_i3: "Tanár", i4: "Ügyfélszolgálati robot",
    t4_title: "Hangasszisztensek", t4_text: "A Siri és az Alexa az MI segítségével érti meg a hangunkat.", t4_inst: "Tedd sorrendbe a szavakat:", t4_h1: "Beszélünk hozzá...", t4_h2: "Hangfelismerés.", t4_q: "Ki egy hangasszisztens?", t4_qa: "Alexa", t4_qb: "YouTube", t4_qc: "Minecraft", t4_qd: "Windows",
    t4_w1: "Az MI", t4_w2: "ma már", t4_w3: "nagyon", t4_w4: "jól", t4_w5: "érti", t4_w6: "a", t4_w7: "beszédünket.",
    t5_title: "Képfelismerés", t5_text: "Az MI képes felismerni arcokat, állatokat és tárgyakat a fotókon.", t5_inst: "Jelöld meg, melyik állatot ismeri fel az MI:", t5_h1: "Mit lát a kamera?", t5_h2: "Tárgyak keresése.", t5_q: "Mit ismer fel egy kép-MI?", t5_qa: "Tárgyakat", t5_qb: "Szagokat", t5_qc: "Ízeket", t5_qd: "Gondolatokat",
    t5_tk1: "Az MI", t5_tk2: "felismeri", t5_tk3: "a", t5_tk4: "kutyákat", t5_tk5: "a", t5_tk6: "fotókon.", t5_tk7: "",
    t6_title: "Arccal feloldás", t6_text: "Néhány telefon feloldódik, ha az MI felismeri az arcodat.", t6_inst: "Párosítsd össze:", t6_h1: "Biometria.", t6_h2: "Biztonság.", t6_q: "Mit használ a Face ID?", t6_qa: "Arcforma", t6_qb: "Hajszín", t6_qc: "Ruha", t6_qd: "Kedvenc étel",
    t6_l1: "Jelszó", t6_r1: "Szöveg", t6_l2: "Face ID", t6_r2: "Arc", t6_l3: "Touch ID", t6_r3: "Ujj",
    t7_title: "MI a játékokban", t7_text: "A videojátékokban az ellenfél az MI-nek köszönhetően úgy viselkedik, mint egy igazi játékos.", t7_inst: "Töltsd ki a hiányt:", t7_h1: "Okos ellenfelek.", t7_h2: "NPC-k.", t7_q: "Mit irányít az MI a játékban?", t7_qa: "Gép ellenfeleket", t7_qb: "Az egeret", t7_qc: "Az áramot", t7_qd: "Az internetet",
    t7_sent: "A játékban az ellenfeleket az ___ irányítja.", t7_qa2: "MI", t7_qb2: "varázslat", t7_qc2: "elem", t7_qd2: "levegő",
    t8_title: "Okosotthon", t8_text: "Az okosotthon MI-vel szabályozza a világítást vagy a fűtést.", t8_inst: "Válogasd szét:", t8_h1: "Régi vs. Okos.", t8_h2: "Mi az intelligens?", t8_q: "Mire jó az okosotthon?", t8_qa: "Spórolni az árammal", t8_qb: "Viccmesélésre", t8_qc: "Repülni tud", t8_qd: "Megírja a házit",
    t8_bl1: "Normál", t8_bl2: "Okos", t8_i1: "Seprű", t8_i2: "Robotporszívó", t8_i3: "Kapcsoló", t8_i4: "Hangvezérlés",
    t9_title: "Robotok", t9_text: "A robotok testtel rendelkező gépek, amiket gyakran MI vezérel.", t9_inst: "Tedd sorrendbe a szavakat:", t9_h1: "Gépek karokkal.", t9_h2: "Mozgás.", t9_q: "Mi az a robot?", t9_qa: "Mozgó gép", t9_qb: "Egy képregény", t9_qc: "Csak egy kép", t9_qd: "Egy honlap",
    t9_w1: "Az MI", t9_w2: "adja", t9_w3: "a", t9_w4: "robot", t9_w5: "digitális", t9_w6: "agyát.", t9_w7: "",
    t10_title: "Szenzorok", t10_text: "A szenzorok az MI szemei és fülei.", t10_inst: "Jelöld meg, mi méri a távolságot:", t10_h1: "Érzékelés.", t10_h2: "Mérés.", t10_q: "Mi az a szenzor?", t10_qa: "Mérőeszköz", t10_qb: "Egy motor", t10_qc: "Egy kerék", t10_qd: "Egy kábel",
    t10_tk1: "A", t10_tk2: "szenzor", t10_tk3: "méri", t10_tk4: "az", t10_tk5: "akadályok", t10_tk6: "távolságát.",
    t11_title: "MI vs. Szoftver", t11_text: "A sima programok fix szabályokat követnek, az MI magától tanul.", t11_inst: "Párosítsd össze:", t11_h1: "Szabály vs. tanulás.", t11_h2: "Mi a rugalmas?", t11_q: "Mi a különbség?", t11_qa: "Az MI magától tanul", t11_qb: "Az MI benzinnel megy", t11_qc: "Az MI-nek vannak érzései", t11_qd: "Nincs különbség",
    t11_l1: "Program", t11_r1: "Szabályok", t11_l2: "MI", t11_r2: "Minták", t11_l3: "Ember", t11_r3: "Érzések",
    t12_title: "Generatív MI", t12_text: "Az MI képes új szövegeket, képeket vagy zenét létrehozni.", t12_inst: "Töltsd ki a hiányt:", t12_h1: "Létrehozni valamit.", t12_h2: "Kreativitás.", t12_q: "Mit jelent a 'generálni'?", t12_qa: "Létrehozni", t12_qb: "Törölni", t12_qc: "Keresni", t12_qd: "Elrejteni",
    t12_sent: "Az MI képes új képeket ___.", t12_qa2: "alkotni", t12_qb2: "enni", t12_qc2: "elfelejteni", t12_qd2: "venni",
    t13_title: "Szövegírás", t13_text: "Az MI tud történeteket írni vagy kérdésekre válaszolni.", t13_inst: "Válogasd szét:", t13_h1: "MI szöveg vs. Ember.", t13_h2: "Ki ír?", t13_q: "Mire használunk szöveges MI-t?", t13_qa: "Összefoglalókra", t13_qb: "Sportolásra", t13_qc: "Főzésre", t13_qd: "Mosásra",
    t13_bl1: "Kézzel írt", t13_bl2: "MI által írt", t13_i1: "Levél", t13_i2: "Chatbot válasz", t13_i3: "Napló", t13_i4: "Automata fordítás",
    t14_title: "MI művészet", t14_text: "Az MI modellek leírás alapján tudnak képeket festeni.", t14_inst: "Tedd sorrendbe a szavakat:", t14_h1: "Festés szavakkal.", t14_h2: "Promptolás.", t14_q: "Hogy hívják az MI-nek adott parancsot?", t14_qa: "Prompt", t14_qb: "Kattintás", t14_qc: "Link", t14_qd: "Fájl",
    t14_w1: "A szövegből", t14_w2: "az", t14_w3: "MI", t14_w4: "egész", t14_w5: "szép", t14_w6: "képet", t14_w7: "készít.",
    t15_title: "Neurális hálók", t15_text: "Az MI agya sokszor az emberi agy hálózatához hasonlóan épül fel.", t15_inst: "Jelöld meg a két szót az MI agyára:", t15_h1: "Felépítés.", t15_h2: "Kapcsolatok.", t15_q: "Mire hasonlít az MI felépítése?", t15_qa: "Emberi agy", t15_qb: "Egy óramű", t15_qc: "Egy fazék", t15_qd: "Egy autó",
    t15_tk1: "Neurális", t15_tk2: "hálózatok", t15_tk3: "segítik", t15_tk4: "az MI-t", t15_tk5: "a", t15_tk6: "megértésben."
  },
  ro: {
    explorer_title: "Explorator IA 7",
    t1_title: "Ce este IA?", t1_text: "Inteligența Artificială (IA) este capacitatea mașinilor de a rezolva sarcini care necesită de obicei inteligență umană.", t1_inst: "Potrivește perechile:", t1_h1: "Om vs. Mașină.", t1_h2: "Cine învață?", t1_q: "Ce înseamnă IA?", t1_qa: "Inteligență Artificială", t1_qb: "Internet Avansat", t1_qc: "Informație Automatizată", t1_qd: "Input Artificial",
    t1_l1: "Om", t1_r1: "Biologic", t1_l2: "IA", t1_r2: "Digital", t1_l3: "Învățare", t1_r3: "Date",
    t2_title: "Învățare Automată", t2_text: "Mașinile nu memorează, ci recunosc tipare în cantități mari de date.", t2_inst: "Completează spațiul liber:", t2_h1: "Învață din experiență.", t2_h2: "Datele sunt cheia.", t2_q: "Cum învață IA?", t2_qa: "Prin date de antrenament", t2_qb: "Prin somn", t2_qc: "Prin mâncare", t2_qd: "Deloc",
    t2_sent: "IA învață din multe ___ pentru a găsi tipare.", t2_qa2: "exemple", t2_qb2: "cărți", t2_qc2: "cabluri", t2_qd2: "pietre",
    t3_title: "Chatboți", t3_text: "Chatboții sunt programe IA cu care poți scrie ca și cum ar fi oameni.", t3_inst: "Sortează în găleți:", t3_h1: "Oameni vs. programe.", t3_h2: "Ce este un chatbot?", t3_q: "Ce face un chatbot?", t3_qa: "Scrie texte", t3_qb: "Coace prăjituri", t3_qc: "Face curat", t3_qd: "Merge pe bicicletă",
    t3_bl1: "Om", t3_bl2: "Chatbot", t3_i1: "Prieten", t3_i2: "ChatGPT", t3_i3: "Profesor", t3_i4: "Bot suport",
    t4_title: "Asistenți vocali", t4_text: "Siri și Alexa înțeleg vocea noastră datorită IA.", t4_inst: "Pune cuvintele în ordine:", t4_h1: "Vorbim cu...", t4_h2: "Recunoaștere vocală.", t4_q: "Cine este un asistent vocal?", t4_qa: "Alexa", t4_qb: "YouTube", t4_qc: "Minecraft", t4_qd: "Windows",
    t4_w1: "IA", t4_w2: "înțelege", t4_w3: "astăzi", t4_w4: "foarte", t4_w5: "bine", t4_w6: "limba", t4_w7: "vorbită.",
    t5_title: "Recunoaștere imagini", t5_text: "IA poate recunoaște fețe, animale și obiecte în fotografii.", t5_inst: "Evidențiază ce animal recunoaște IA:", t5_h1: "Ce vede camera?", t5_h2: "Găsirea obiectelor.", t5_q: "Ce recunoaște o IA foto?", t5_qa: "Obiecte", t5_qb: "Mirosuri", t5_qc: "Gusturi", t5_qd: "Gânduri",
    t5_tk1: "IA", t5_tk2: "poate", t5_tk3: "recunoaște", t5_tk4: "câinii", t5_tk5: "din", t5_tk6: "poze.", t5_tk7: "",
    t6_title: "Face ID", t6_text: "Unele telefoane se deblochează când IA îți recunoaște fața.", t6_inst: "Potrivește perechile:", t6_h1: "Biometrie.", t6_h2: "Securitate.", t6_q: "Ce folosește Face ID?", t6_qa: "Forma feței", t6_qb: "Culoarea părului", t6_qc: "Hainele", t6_qd: "Mâncarea preferată",
    t6_l1: "Parolă", t6_r1: "Text", t6_l2: "Face ID", t6_r2: "Față", t6_l3: "Touch ID", t6_r3: "Deget",
    t7_title: "IA în jocuri", t7_text: "Adversarii din jocuri se comportă adesea ca jucători reali datorită IA.", t7_inst: "Completează spațiul liber:", t7_h1: "Adversari deștepți.", t7_h2: "NPC-uri.", t7_q: "Ce controlează IA în joc?", t7_qa: "Adversarii computer", t7_qb: "Mouse-ul", t7_qc: "Curentul", t7_qd: "Viteza internet",
    t7_sent: "Adversarii din joc sunt controlați de ___.", t7_qa2: "IA", t7_qb2: "magie", t7_qc2: "baterii", t7_qd2: "aer",
    t8_title: "Casă inteligentă", t8_text: "O casă inteligentă folosește IA pentru a regla lumina sau căldura.", t8_inst: "Sortează în găleți:", t8_h1: "Normal vs. Smart.", t8_h2: "Ce este inteligent?", t8_q: "Ce face o casă inteligentă?", t8_qa: "Economisește energie", t8_qb: "Spune glume", t8_qc: "Zboară singură", t8_qd: "Face temele",
    t8_bl1: "Normal", t8_bl2: "Smart", t8_i1: "Mătură", t8_i2: "Robot aspirator", t8_i3: "Întrerupător", t8_i4: "Control vocal",
    t9_title: "Roboți", t9_text: "Roboții sunt mașini cu corpuri, adesea controlați de IA.", t9_inst: "Pune cuvintele în ordine:", t9_h1: "Mașini cu brațe.", t9_h2: "Mișcare.", t9_q: "Ce este un robot?", t9_qa: "Mașină mobilă", t9_qb: "Un comic", t9_qc: "Doar o poză", t9_qd: "Un site",
    t9_w1: "IA", t9_w2: "oferă", t9_w3: "robotului", t9_w4: "creierul", t9_w5: "său", t9_w6: "digital.", t9_w7: "",
    t10_title: "Senzori", t10_text: "Senzorii sunt ochii și urechile IA.", t10_inst: "Evidențiază ce măsoară distanța:", t10_h1: "Percepție.", t10_h2: "Măsurare.", t10_q: "Ce este un senzor?", t10_qa: "Dispozitiv de măsură", t10_qb: "Un motor", t10_qc: "O roată", t10_qd: "Un cablu",
    t10_tk1: "Un", t10_tk2: "senzor", t10_tk3: "măsoară", t10_tk4: "distanța", t10_tk5: "față de", t10_tk6: "obstacole.",
    t11_title: "IA vs. Software", t11_text: "Programele normale urmează reguli fixe, IA învață singură.", t11_inst: "Potrivește perechile:", t11_h1: "Reguli vs. învățare.", t11_h2: "Ce este flexibil?", t11_q: "Care este diferența?", t11_qa: "IA învață singură", t11_qb: "IA are nevoie de benzină", t11_qc: "IA are sentimente", t11_qd: "Nu este niciuna",
    t11_l1: "Program", t11_r1: "Reguli", t11_l2: "IA", t11_r2: "Tipare", t11_l3: "Om", t11_r3: "Sentimente",
    t12_title: "IA Generativă", t12_text: "IA poate crea texte, imagini sau muzică noi.", t12_inst: "Completează spațiul liber:", t12_h1: "A crea ceva.", t12_h2: "Creativitate.", t12_q: "Ce înseamnă 'a genera'?", t12_qa: "A crea", t12_qb: "A șterge", t12_qc: "A căuta", t12_qd: "A ascunde",
    t12_sent: "IA poate ___ imagini noi.", t12_qa2: "crea", t12_qb2: "mânca", t12_qc2: "uita", t12_qd2: "cumpăra",
    t13_title: "Scrierea de texte", t13_text: "IA poate scrie povești sau răspunde la întrebări.", t13_inst: "Sortează în găleți:", t13_h1: "IA vs. Om.", t13_h2: "Cine scrie?", t13_q: "La ce folosim IA de text?", t13_qa: "Rezumat", t13_qb: "Sport", t13_qc: "Gătit", t13_qd: "Spălat rufe",
    t13_bl1: "Scris de mână", t13_bl2: "Generat de IA", t13_i1: "Scrisoare", t13_i2: "Răspuns chatbot", t13_i3: "Jurnal", t13_i4: "Traducere automată",
    t14_title: "Artă IA", t14_text: "Modelele IA pot picta imagini din descrieri prin cuvinte.", t14_inst: "Pune cuvintele în ordine:", t14_h1: "Pictură cu cuvinte.", t14_h2: "Prompting.", t14_q: "Cum se numește comanda pentru IA?", t14_qa: "Prompt", t14_qb: "Clic", t14_qc: "Link", t14_qd: "Fișier",
    t14_w1: "IA", t14_w2: "creează", t14_w3: "o", t14_w4: "imagine", t14_w5: "din", t14_w6: "textul", t14_w7: "tău.",
    t15_title: "Rețele neuronale", t15_text: "Creierele IA sunt adesea structurate ca rețelele din creierul uman.", t15_inst: "Evidențiază cele două cuvinte pentru creierul IA:", t15_h1: "Structură.", t15_h2: "Conexiuni.", t15_q: "Pe ce se bazează arhitectura IA?", t15_qa: "Creierul uman", t15_qb: "Un ceasornic", t15_qc: "O oală", t15_qd: "O mașină",
    t15_tk1: "Rețelele", t15_tk2: "neuronale", t15_tk3: "ajută", t15_tk4: "IA", t15_tk5: "să", t15_tk6: "înțeleagă."
  }
};

export const INFO_K5_I7_POOL: PoolTopicDef[] = [
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
    svg: { type: "icon-grid", items: [{emoji:"👤",label:"Mensch"},{emoji:"🤖",label:"Bot"}] },
    interactive: { type: "drag-to-bucket", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", buckets: [{id:"b1",label:"t3_bl1"},{id:"b2",label:"t3_bl2"}], items: [{text:"t3_i1",bucketId:"b1"},{text:"t3_i2",bucketId:"b2"},{text:"t3_i3",bucketId:"b1"},{text:"t3_i4",bucketId:"b2"}] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "🎙️", color: "#2196F3" },
    interactive: { type: "word-order", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", words: ["t4_w1", "t4_w2", "t4_w3", "t4_w4", "t4_w5", "t4_w6", "t4_w7"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6].slice(0, 7) },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "📷", color: "#FF9800" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6","t5_tk7"].filter(x=>x!==undefined), correctIndices: [3] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" }
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "simple-icon", icon: "👤", color: "#607D8B" },
    interactive: { type: "match-pairs", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", pairs: [{left:"t6_l1",right:"t6_r1"},{left:"t6_l2",right:"t6_r2"},{left:"t6_l3",right:"t6_r3"}] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" }
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "🎮", color: "#E91E63" },
    interactive: { type: "gap-fill", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", sentence: "t7_sent", choices: ["t7_qa2", "t7_qb2", "t7_qc2", "t7_qd2"], correctIndex: 0 },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" }
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "simple-icon", icon: "🏠", color: "#FFC107" },
    interactive: { type: "drag-to-bucket", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", buckets: [{id:"b1",label:"t8_bl1"},{id:"b2",label:"t8_bl2"}], items: [{text:"t8_i1",bucketId:"b1"},{text:"t8_i2",bucketId:"b2"},{text:"t8_i3",bucketId:"b1"},{text:"t8_i4",bucketId:"b2"}] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" }
  },
  {
    infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "simple-icon", icon: "🤖", color: "#795548" },
    interactive: { type: "word-order", instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2", words: ["t9_w1", "t9_w2", "t9_w3", "t9_w4", "t9_w5", "t9_w6", "t9_w7"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6].slice(0, 7) },
    quiz: { question: "t9_q", choices: ["t9_qa", "t9_qb", "t9_qc", "t9_qd"], answer: "t9_qa" }
  },
  {
    infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "simple-icon", icon: "📡", color: "#00BCD4" },
    interactive: { type: "highlight-text", instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2", tokens: ["t10_tk1","t10_tk2","t10_tk3","t10_tk4","t10_tk5","t10_tk6"].filter(x=>x!==undefined), correctIndices: [1] },
    quiz: { question: "t10_q", choices: ["t10_qa", "t10_qb", "t10_qc", "t10_qd"], answer: "t10_qa" }
  },
  {
    infoTitle: "t11_title", infoText: "t11_text",
    svg: { type: "simple-icon", icon: "⚖️", color: "#3F51B5" },
    interactive: { type: "match-pairs", instruction: "t11_inst", hint1: "t11_h1", hint2: "t11_h2", pairs: [{left:"t11_l1",right:"t11_r1"},{left:"t11_l2",right:"t11_r2"},{left:"t11_l3",right:"t11_r3"}] },
    quiz: { question: "t11_q", choices: ["t11_qa", "t11_qb", "t11_qc", "t11_qd"], answer: "t11_qa" }
  },
  {
    infoTitle: "t12_title", infoText: "t12_text",
    svg: { type: "simple-icon", icon: "🎨", color: "#F44336" },
    interactive: { type: "gap-fill", instruction: "t12_inst", hint1: "t12_h1", hint2: "t12_h2", sentence: "t12_sent", choices: ["t12_qa2", "t12_qb2", "t12_qc2", "t12_qd2"], correctIndex: 0 },
    quiz: { question: "t12_q", choices: ["t12_qa", "t12_qb", "t12_qc", "t12_qd"], answer: "t12_qa" }
  },
  {
    infoTitle: "t13_title", infoText: "t13_text",
    svg: { type: "icon-grid", items: [{emoji:"✍️",label:"Hand"},{emoji:"💻",label:"AI"}] },
    interactive: { type: "drag-to-bucket", instruction: "t13_inst", hint1: "t13_h1", hint2: "t13_h2", buckets: [{id:"b1",label:"t13_bl1"},{id:"b2",label:"t13_bl2"}], items: [{text:"t13_i1",bucketId:"b1"},{text:"t13_i2",bucketId:"b2"},{text:"t13_i3",bucketId:"b1"},{text:"t13_i4",bucketId:"b2"}] },
    quiz: { question: "t13_q", choices: ["t13_qa", "t13_qb", "t13_qc", "t13_qd"], answer: "t13_qa" }
  },
  {
    infoTitle: "t14_title", infoText: "t14_text",
    svg: { type: "simple-icon", icon: "🖼️", color: "#8BC34A" },
    interactive: { type: "word-order", instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2", words: ["t14_w1", "t14_w2", "t14_w3", "t14_w4", "t14_w5", "t14_w6", "t14_w7"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6].slice(0, 7) },
    quiz: { question: "t14_q", choices: ["t14_qa", "t14_qb", "t14_qc", "t14_qd"], answer: "t14_qa" }
  },
  {
    infoTitle: "t15_title", infoText: "t15_text",
    svg: { type: "simple-icon", icon: "🕸️", color: "#009688" },
    interactive: { type: "highlight-text", instruction: "t15_inst", hint1: "t15_h1", hint2: "t15_h2", tokens: ["t15_tk1","t15_tk2","t15_tk3","t15_tk4","t15_tk5","t15_tk6"].filter(x=>x!==undefined), correctIndices: [0,1] },
    quiz: { question: "t15_q", choices: ["t15_qa", "t15_qb", "t15_qc", "t15_qd"], answer: "t15_qa" }
  }
];

