// @ts-nocheck
// lib/explorerPools/aiK6_i5.ts
import type { PoolTopicDef } from "./types";

export const INFO_K6_I5_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "KI Insel 5: Anwendungen",
    t1_title: "Computer Vision", t1_text: "Die Fähigkeit von Computern, Bilder und Videos zu 'sehen' und zu verstehen.", t1_inst: "Ordne die Paare zu:", t1_h1: "Sehen lernen.", t1_h2: "Was erkennt die KI?", t1_q: "Was nutzt Computer Vision?", t1_qa: "Kameras", t1_qb: "Mikrofone", t1_qc: "Lautsprecher", t1_qd: "Tastaturen",
    t1_l1: "Gesicht", t1_r1: "Erkennung", t1_l2: "Auto", t1_r2: "Hindernis", t1_l3: "Foto", t1_r3: "Pixelanalyse",
    t2_title: "NLP (Sprachverarbeitung)", t2_text: "Natural Language Processing hilft Computern, menschliche Sprache zu verstehen.", t2_inst: "Fülle die Lücke aus:", t2_h1: "Reden mit dem PC.", t2_h2: "Texte verstehen.", t2_q: "Wofür steht NLP?", t2_qa: "Sprachverarbeitung", t2_qb: "Netz-Protokoll", t2_qc: "Natur-Plan", t2_qd: "Neu-Programm",
    t2_sent: "NLP analysiert geschriebenen ___.", t2_qa2: "Text", t2_qb2: "Strom", t2_qc2: "Kaffee", t2_qd2: "Monitor",
    t3_title: "Spracherkennung", t3_text: "KI wandelt gesprochene Worte in digitalen Text um.", t3_inst: "Sortiere in die Eimer:", t3_h1: "Hören vs Verstehen.", t3_h2: "Ton zu Text.", t3_q: "Was ist ein Beispiel für Spracherkennung?", t3_qa: "Diktierfunktion", t3_qb: "Drucker", t3_qc: "Mausklick", t3_qd: "Bildschirm",
    t3_bl1: "Eingabe (Ton)", t3_bl2: "Ausgabe (Text)", t3_i1: "Stimme", t3_i2: "Wörter", t3_i3: "Audio", t3_i4: "Sätze",
    t4_title: "KI in der Robotik", t4_text: "KI gibt Robotern ein 'Gehirn', um sich in der Welt zu bewegen.", t4_inst: "Bringe die Wörter in Ordnung:", t4_h1: "Roboter lernen.", t4_h2: "Bewegung.", t4_q: "Was steuert ein KI-Roboter?", t4_qa: "Seine Bewegungen", t4_qb: "Das Wetter", t4_qc: "Den Fernseher", t4_qd: "Die Sonne",
    t4_w1: "KI", t4_w2: "hilft", t4_w3: "Robotern", t4_w4: "beim", t4_w5: "Ausweichen", t4_w6: "von", t4_w7: "Hindernissen.",
    t5_title: "Empfehlungssysteme", t5_text: "KI schlägt dir Filme oder Musik vor, die dir gefallen könnten.", t5_inst: "Markiere das richtige Wort:", t5_h1: "Netflix-Effekt.", t5_h2: "Vorschläge.", t5_q: "Wo findest du Empfehlungs-KIs?", t5_qa: "YouTube", t5_qb: "Taschenrechner", t5_qc: "Toaster", t5_qd: "Besen",
    t5_tk1: "KI", t5_tk2: "berechnet", t5_tk3: "deine", t5_tk4: "nächste", t5_tk5: "Lieblings-Serie.", t5_tk6: "",
    t6_title: "Autonomes Fahren", t6_text: "Autos, die mithilfe von KI ohne menschlichen Fahrer lenken.", t6_inst: "Ordne die Paare zu:", t6_h1: "Sicher fahren.", t6_h2: "Sensoren.", t6_q: "Was braucht ein KI-Auto?", t6_qa: "Sensoren & KI", t6_qb: "Einen Piloten", t6_qc: "Segel", t6_qd: "Hufeisen",
    t6_l1: "LIDAR", t6_r1: "Abstand", t6_l2: "KI", t6_r2: "Entscheidung", t6_l3: "Stoppschild", t6_r3: "Anhalten",
    t7_title: "Smarte Assistenten", t7_text: "Siri, Alexa und Google Assistant nutzen KI, um Fragen zu beantworten.", t7_inst: "Fülle die Lücke aus:", t7_h1: "Frag mich was.", t7_h2: "Sprachsteuerung.", t7_q: "Wer ist ein smarter Assistent?", t7_qa: "Alexa", t7_qb: "Mario", t7_qc: "Pac-Man", t7_qd: "Excel",
    t7_sent: "Assistenten reagieren auf ein ___.", t7_qa2: "Aktivierungswort", t7_qb2: "Lied", t7_qc2: "Bild", t7_qd2: "Hustgeräusch",
    t8_title: "KI in der Medizin", t8_text: "KI hilft Ärzten, Krankheiten auf Röntgenbildern schneller zu finden.", t8_inst: "Sortiere in die Eimer:", t8_h1: "Helfende KI.", t8_h2: "Diagnose.", t8_q: "Was kann KI in der Medizin tun?", t8_qa: "Bilder analysieren", t8_qb: "Operationen vergessen", t8_qc: "Kaffee kochen", t8_qd: "Patienten kitzeln",
    t8_bl1: "Diagnose", t8_bl2: "Behandlung", t8_i1: "Tumorsuche", t8_i2: "Roboter-OP", t8_i3: "Röntgen-Scan", t8_i4: "Dosierung",
    t9_title: "KI in Spielen", t9_text: "KI-Gegner in Videospielen passen sich an dein Spielverhalten an.", t9_inst: "Bringe die Wörter in Ordnung:", t9_h1: "Schlaue Gegner.", t9_h2: "Gaming.", t9_q: "Was macht die Spiel-KI?", t9_qa: "Herausfordern", t9_qb: "Gewinnen lassen", t9_qc: "PC ausschalten", t9_qd: "Essen bestellen",
    t9_w1: "KI-Gegner", t9_w2: "lernen", t9_w3: "aus", t9_w4: "den", t9_w5: "Taktiken", t9_w6: "der", t9_w7: "Spieler.",
    t10_title: "Deepfakes", t10_text: "KI-generierte gefälschte Videos oder Bilder, die echt aussehen.", t10_inst: "Markiere das richtige Wort:", t10_h1: "Vorsicht!", t10_h2: "Manipulation.", t10_q: "Was ist ein Deepfake?", t10_qa: "Ein KI-Fake", t10_qb: "Ein tiefes Loch", t10_qc: "Ein echtes Foto", t10_qd: "Ein Kuchen",
    t10_tk1: "Deepfakes", t10_tk2: "können", t10_tk3: "Menschen", t10_tk4: "täuschend", t10_tk5: "echt", t10_tk6: "nachahmen.",
    t11_title: "Generative Kunst", t11_text: "KI-Modelle wie Midjourney erstellen Bilder aus Textbeschreibungen.", t11_inst: "Ordne die Paare zu:", t11_h1: "Prompt zu Bild.", t11_h2: "Kreative KI.", t11_q: "Wie erstellt man KI-Kunst?", t11_qa: "Durch Prompts", t11_qb: "Durch Singen", t11_qc: "Durch Tanzen", t11_qd: "Gar nicht",
    t11_l1: "Text", t11_r1: "Eingabe", t11_l2: "Bild", t11_r2: "Ergebnis", t11_l3: "Prompt", t11_r3: "Befehl",
    t12_title: "Übersetzungs-KI", t12_text: "Systeme wie DeepL übersetzen ganze Texte in Sekunden.", t12_inst: "Fülle die Lücke aus:", t12_h1: "Fremdsprachen.", t12_h2: "Schnell verstehen.", t12_q: "Was macht eine Übersetzungs-KI?", t12_qa: "Sprachen wechseln", t12_qb: "Bücher drucken", t12_qc: "Witze erzählen", t12_qd: "Musik spielen",
    t12_sent: "KI übersetzt zwischen vielen ___.", t12_qa2: "Sprachen", t12_qb2: "Farben", t12_qc2: "Zahlen", t12_qd2: "Autos",
    t13_title: "Sentiment Analyse", t13_text: "KI erkennt, ob ein Text positiv oder negativ gemeint ist.", t13_inst: "Sortiere in die Eimer:", t13_h1: "Gefühle im Text.", t13_h2: "Stimmung.", t13_q: "Was erkennt Sentiment Analyse?", t13_qa: "Die Stimmung", t13_qb: "Die Uhrzeit", t13_qc: "Den Preis", t13_qd: "Die Schriftart",
    t13_bl1: "Positiv", t13_bl2: "Negativ", t13_i1: "Super!", t13_i2: "Schlecht.", t13_i3: "Toll!", t13_i4: "Fehler.",
    t14_title: "KI im Weltraum", t14_text: "Rover auf dem Mars nutzen KI, um selbstständig Wege zu finden.", t14_inst: "Bringe die Wörter in Ordnung:", t14_h1: "Mars-Mission.", t14_h2: "Weit weg.", t14_q: "Wo hilft KI im All?", t14_qa: "Navigation", t14_qb: "Sauerstoff machen", t14_qc: "Sterne putzen", t14_qd: "Ufos fangen",
    t14_w1: "KI", t14_w2: "steuert", t14_w3: "Sonden", t14_w4: "durch", t14_w5: "das", t14_w6: "Weltall.", t14_w7: "",
    t15_title: "Smart Home", t15_text: "KI optimiert den Energieverbrauch und die Sicherheit im Haus.", t15_inst: "Markiere das richtige Wort:", t15_h1: "Schlaues Haus.", t15_h2: "Vernetzung.", t15_q: "Was macht ein Smart Home?", t15_qa: "Energie sparen", t15_qb: "Wände streichen", t15_qc: "Hausaufgaben machen", t15_qd: "Schlafen",
    t15_tk1: "Smart", t15_tk2: "Home", t15_tk3: "Geräte", t15_tk4: "lernen", t15_tk5: "deinen", t15_tk6: "Alltag", t15_tk7: "kennen."
  },
  en: {
    explorer_title: "AI Island 5: Applications",
    t1_title: "Computer Vision", t1_text: "The ability of computers to 'see' and understand images and videos.", t1_inst: "Match the pairs:", t1_h1: "Learning to see.", t1_h2: "What does AI recognize?", t1_q: "What does computer vision use?", t1_qa: "Cameras", t1_qb: "Microphones", t1_qc: "Speakers", t1_qd: "Keyboards",
    t1_l1: "Face", t1_r1: "Recognition", t1_l2: "Car", t1_r2: "Obstacle", t1_l3: "Photo", t1_r3: "Pixel analysis",
    t2_title: "NLP", t2_text: "Natural Language Processing helps computers understand human language.", t2_inst: "Fill in the blank:", t2_h1: "Talking to the PC.", t2_h2: "Understanding text.", t2_q: "What does NLP stand for?", t2_qa: "Language Processing", t2_qb: "Net Protocol", t2_qc: "Nature Plan", t2_qd: "New Program",
    t2_sent: "NLP analyzes written ___.", t2_qa2: "text", t2_qb2: "power", t2_qc2: "coffee", t2_qd2: "monitor",
    t3_title: "Speech Recognition", t3_text: "AI converts spoken words into digital text.", t3_inst: "Sort into buckets:", t3_h1: "Listening vs Understanding.", t3_h2: "Sound to text.", t3_q: "What is an example of speech recognition?", t3_qa: "Dictation", t3_qb: "Printer", t3_qc: "Mouse click", t3_qd: "Screen",
    t3_bl1: "Input (Sound)", t3_bl2: "Output (Text)", t3_i1: "Voice", t3_i2: "Words", t3_i3: "Audio", t3_i4: "Sentences",
    t4_title: "AI in Robotics", t4_text: "AI gives robots a 'brain' to move around the world.", t4_inst: "Put the words in order:", t4_h1: "Robots learn.", t4_h2: "Movement.", t4_q: "What does an AI robot control?", t4_qa: "Its movements", t4_qb: "The weather", t4_qc: "The TV", t4_qd: "The sun",
    t4_w1: "AI", t4_w2: "helps", t4_w3: "robots", t4_w4: "avoid", t4_w5: "hitting", t4_w6: "any", t4_w7: "obstacles.",
    t5_title: "Recommendation Systems", t5_text: "AI suggests movies or music you might like.", t5_inst: "Highlight the correct word:", t5_h1: "Netflix effect.", t5_h2: "Suggestions.", t5_q: "Where do you find recommendation AIs?", t5_qa: "YouTube", t5_qb: "Calculator", t5_qc: "Toaster", t5_qd: "Broom",
    t5_tk1: "AI", t5_tk2: "calculates", t5_tk3: "your", t5_tk4: "next", t5_tk5: "favorite", t5_tk6: "show.",
    t6_title: "Autonomous Driving", t6_text: "Cars that steer themselves without a human driver using AI.", t6_inst: "Match the pairs:", t6_h1: "Drive safely.", t6_h2: "Sensors.", t6_q: "What does an AI car need?", t6_qa: "Sensors & AI", t6_qb: "A pilot", t6_qc: "Sails", t6_qd: "Horseshoes",
    t6_l1: "LIDAR", t6_r1: "Distance", t6_l2: "AI", t6_r2: "Decision", t6_l3: "Stop sign", t6_r3: "Stopping",
    t7_title: "Smart Assistants", t7_text: "Siri, Alexa, and Google Assistant use AI to answer questions.", t7_inst: "Fill in the blank:", t7_h1: "Ask me anything.", t7_h2: "Voice control.", t7_q: "Who is a smart assistant?", t7_qa: "Alexa", t7_qb: "Mario", t7_qc: "Pac-Man", t7_qd: "Excel",
    t7_sent: "Assistants react to a ___.", t7_qa2: "wake word", t7_qb2: "song", t7_qc2: "picture", t7_qd2: "cough",
    t8_title: "AI in Medicine", t8_text: "AI helps doctors find diseases on X-rays faster.", t8_inst: "Sort into buckets:", t8_h1: "Helping AI.", t8_h2: "Diagnosis.", t8_q: "What can AI do in medicine?", t8_qa: "Analyze images", t8_qb: "Forget surgery", t8_qc: "Make coffee", t8_qd: "Tickle patients",
    t8_bl1: "Diagnosis", t8_bl2: "Treatment", t8_i1: "Tumor search", t8_i2: "Robot surgery", t8_i3: "X-ray scan", t8_i4: "Dosage",
    t9_title: "AI in Games", t9_text: "AI opponents in video games adapt to how you play.", t9_inst: "Put the words in order:", t9_h1: "Smart enemies.", t9_h2: "Gaming.", t9_q: "What does game AI do?", t9_qa: "Challenge you", t9_qb: "Let you win", t9_qc: "Turn off PC", t9_qd: "Order food",
    t9_w1: "AI", t9_w2: "opponents", t9_w3: "learn", t9_w4: "from", t9_w5: "the", t9_w6: "player's", t9_w7: "tactics.",
    t10_title: "Deepfakes", t10_text: "AI-generated fake videos or images that look real.", t10_inst: "Highlight the correct word:", t10_h1: "Careful!", t10_h2: "Manipulation.", t10_q: "What is a deepfake?", t10_qa: "An AI fake", t10_qb: "A deep hole", t10_qc: "A real photo", t10_qd: "A cake",
    t10_tk1: "Deepfakes", t10_tk2: "can", t10_tk3: "imitate", t10_tk4: "people", t10_tk5: "very", t10_tk6: "realistically.",
    t11_title: "Generative Art", t11_text: "AI models like Midjourney create images from text descriptions.", t11_inst: "Match the pairs:", t11_h1: "Prompt to image.", t11_h2: "Creative AI.", t11_q: "How to create AI art?", t11_qa: "Using prompts", t11_qb: "By singing", t11_qc: "By dancing", t11_qd: "Not at all",
    t11_l1: "Text", t11_r1: "Input", t11_l2: "Image", t11_r2: "Result", t11_l3: "Prompt", t11_r3: "Command",
    t12_title: "Translation AI", t12_text: "Systems like DeepL translate entire texts in seconds.", t12_inst: "Fill in the blank:", t12_h1: "Foreign languages.", t12_h2: "Understand fast.", t12_q: "What does translation AI do?", t12_qa: "Change languages", t12_qb: "Print books", t12_qc: "Tell jokes", t12_qd: "Play music",
    t12_sent: "AI translates between many ___.", t12_qa2: "languages", t12_qb2: "colors", t12_qc2: "numbers", t12_qd2: "cars",
    t13_title: "Sentiment Analysis", t13_text: "AI detects if a text is meant to be positive or negative.", t13_inst: "Sort into buckets:", t13_h1: "Feelings in text.", t13_h2: "Mood.", t13_q: "What does sentiment analysis detect?", t13_qa: "The mood", t13_qb: "The time", t13_qc: "The price", t13_qd: "The font",
    t13_bl1: "Positive", t13_bl2: "Negative", t13_i1: "Great!", t13_i2: "Bad.", t13_i3: "Awesome!", t13_i4: "Error.",
    t14_title: "AI in Space", t14_text: "Rovers on Mars use AI to find paths autonomously.", t14_inst: "Put the words in order:", t14_h1: "Mars mission.", t14_h2: "Far away.", t14_q: "Where does AI help in space?", t14_qa: "Navigation", t14_qb: "Make oxygen", t14_qc: "Clean stars", t14_qd: "Catch UFOs",
    t14_w1: "AI", t14_w2: "guides", t14_w3: "probes", t14_w4: "through", t14_w5: "outer", t14_w6: "space.", t14_w7: "",
    t15_title: "Smart Home", t15_text: "AI optimizes energy use and security in the home.", t15_inst: "Highlight the correct word:", t15_h1: "Smart house.", t15_h2: "Networking.", t15_q: "What does a smart home do?", t15_qa: "Save energy", t15_qb: "Paint walls", t15_qc: "Do homework", t15_qd: "Sleep",
    t15_tk1: "Smart", t15_tk2: "home", t15_tk3: "devices", t15_tk4: "learn", t15_tk5: "your", t15_tk6: "daily", t15_tk7: "routine."
  },
  hu: {
    explorer_title: "MI Sziget 5: Alkalmazások",
    t1_title: "Számítógépes látás", t1_text: "A gépek azon képessége, hogy 'lássák' és értelmezzék a képeket és videókat.", t1_inst: "Párosítsd össze:", t1_h1: "Látni tanulás.", t1_h2: "Mit ismer fel az MI?", t1_q: "Mit használ a számítógépes látás?", t1_qa: "Kamerákat", t1_qb: "Mikrofont", t1_qc: "Hangszórót", t1_qd: "Billentyűt",
    t1_l1: "Arc", t1_r1: "Felismerés", t1_l2: "Autó", t1_r2: "Akadály", t1_l3: "Fotó", t1_r3: "Pixelanalízis",
    t2_title: "NLP", t2_text: "A természetes nyelvfeldolgozás segít a gépeknek megérteni az emberi beszédet.", t2_inst: "Töltsd ki a hiányt:", t2_h1: "Beszélgetés a géppel.", t2_h2: "Szövegértés.", t2_q: "Mit jelent az NLP?", t2_qa: "Nyelvfeldolgozás", t2_qb: "Hálózat", t2_qc: "Terv", t2_qd: "Program",
    t2_sent: "Az NLP az írott ___ elemzi.", t2_qa2: "szöveget", t2_qb2: "áramot", t2_qc2: "kávét", t2_qd2: "monitort",
    t3_title: "Beszédfelismerés", t3_text: "Az MI a kimondott szavakat digitális szöveggé alakítja.", t3_inst: "Válogasd szét:", t3_h1: "Hallás vs Értés.", t3_h2: "Hangból szöveg.", t3_q: "Mi a példa a beszédfelismerésre?", t3_qa: "Diktálás", t3_qb: "Nyomtató", t3_qc: "Kattintás", t3_qd: "Képernyő",
    t3_bl1: "Bemenet (Hang)", t3_bl2: "Kimenet (Szöveg)", t3_i1: "Hang", t3_i2: "Szavak", t3_i3: "Audió", t3_i4: "Mondatok",
    t4_title: "MI a robotikában", t4_text: "Az MI 'agyat' ad a robotoknak a világban való mozgáshoz.", t4_inst: "Tedd sorrendbe a szavakat:", t4_h1: "Robotok tanulnak.", t4_h2: "Mozgás.", t4_q: "Mit irányít egy MI robot?", t4_qa: "A mozgását", t4_qb: "Az időjárást", t4_qc: "A tévét", t4_qd: "A napot",
    t4_w1: "Az MI", t4_w2: "segít", t4_w3: "a", t4_w4: "robotoknak", t4_w5: "elkerülni", t4_w6: "az", t4_w7: "akadályokat.",
    t5_title: "Ajánlórendszerek", t5_text: "Az MI olyan filmeket vagy zenéket ajánl, amik tetszhetnek neked.", t5_inst: "Jelöld meg a helyes szót:", t5_h1: "Netflix-hatás.", t5_h2: "Javaslatok.", t5_q: "Hol találsz ajánló MI-t?", t5_qa: "YouTube", t5_qb: "Számológép", t5_qc: "Pirító", t5_qd: "Seprű",
    t5_tk1: "Az MI", t5_tk2: "kiszámolja", t5_tk3: "a", t5_tk4: "következő", t5_tk5: "kedvenc", t5_tk6: "sorozatodat.",
    t6_title: "Önvezető autók", t6_text: "Autók, amik emberi vezető nélkül, MI segítségével közlekednek.", t6_inst: "Párosítsd össze:", t6_h1: "Biztonságos út.", t6_h2: "Szenzorok.", t6_q: "Mire van szüksége az önvezető autónak?", t6_qa: "Szenzorokra és MI-re", t6_qb: "Pilótára", t6_qc: "Vitorlára", t6_qd: "Patkóra",
    t6_l1: "LIDAR", t6_r1: "Távolság", t6_l2: "MI", t6_r2: "Döntés", t6_l3: "Stop tábla", t6_r3: "Megállás",
    t7_title: "Okos asszisztensek", t7_text: "Siri, Alexa és a Google Assistant MI-t használ a válaszokhoz.", t7_inst: "Töltsd ki a hiányt:", t7_h1: "Kérdezz bármit.", t7_h2: "Hangvezérlés.", t7_q: "Ki az okos asszisztens?", t7_qa: "Alexa", t7_qb: "Mario", t7_qc: "Pac-Man", t7_qd: "Excel",
    t7_sent: "Az asszisztensek egy ___ reagálnak.", t7_qa2: "hívószóra", t7_qb2: "dalra", t7_qc2: "képre", t7_qd2: "köhögésre",
    t8_title: "MI az orvoslásban", t8_text: "Az MI segít az orvosoknak gyorsabban felismerni a betegségeket.", t8_inst: "Válogasd szét:", t8_h1: "Segítő MI.", t8_h2: "Diagnózis.", t8_q: "Mit tud az MI az orvoslásban?", t8_qa: "Képeket elemez", t8_qb: "Mindent elfelejt", t8_qc: "Kávét főz", t8_qd: "Csiklandoz",
    t8_bl1: "Diagnózis", t8_bl2: "Kezelés", t8_i1: "Tumorkeresés", t8_i2: "Robotműtét", t8_i3: "Röntgen", t8_i4: "Adagolás",
    t9_title: "MI a játékokban", t9_text: "A videojátéko MI-ellenfelei alkalmazkodnak a stílusodhoz.", t9_inst: "Tedd sorrendbe a szavakat:", t9_h1: "Okos ellenségek.", t9_h2: "Gaming.", t9_q: "Mit csinál a játék MI?", t9_qa: "Kihívást ad", t9_qb: "Hagy nyerni", t9_qc: "Kikapcsolja a gépet", t9_qd: "Étel rendel",
    t9_w1: "Az MI", t9_w2: "ellenfelek", t9_w3: "tanulnak", t9_w4: "a", t9_w5: "játékos", t9_w6: "taktikájából.", t9_w7: "",
    t10_title: "Deepfakes", t10_text: "MI által generált hamis videók vagy képek, amik valódinak tűnnek.", t10_inst: "Jelöld meg a helyes szót:", t10_h1: "Vigyázat!", t10_h2: "Manipuláció.", t10_q: "Mi az a deepfake?", t10_qa: "MI-hamisítvány", t10_qb: "Mély gödör", t10_qc: "Igazi fotó", t10_qd: "Sütemény",
    t10_tk1: "A deepfake", t10_tk2: "megtévesztően", t10_tk3: "élethűen", t10_tk4: "tud", t10_tk5: "utánozni", t10_tk6: "embereket.",
    t11_title: "Generatív művészet", t11_text: "Az MI szöveges leírás alapján készít képeket.", t11_inst: "Párosítsd össze:", t11_h1: "Szövegből kép.", t11_h2: "Kreatív MI.", t11_q: "Hogyan készítünk MI művészetet?", t11_qa: "Promptokkal", t11_qb: "Énekléssel", t11_qc: "Tánccal", t11_qd: "Sehogy",
    t11_l1: "Szöveg", t11_r1: "Bemenet", t11_l2: "Kép", t11_r2: "Eredmény", t11_l3: "Prompt", t11_r3: "Utasítás",
    t12_title: "Fordító MI", t12_text: "Rendszerek, mint a DeepL, másodpercek alatt fordítanak szövegeket.", t12_inst: "Töltsd ki a hiányt:", t12_h1: "Idegen nyelvek.", t12_h2: "Gyors megértés.", t12_q: "Mit csinál a fordító MI?", t12_qa: "Nyelveket vált", t12_qb: "Könyvet nyomtat", t12_qc: "Viccet mesél", t12_qd: "Zenél",
    t12_sent: "Az MI sok ___ között fordít.", t12_qa2: "nyelv", t12_qb2: "szín", t12_qc2: "szám", t12_qd2: "autó",
    t13_title: "Érzelem elemzés", t13_text: "Az MI felismeri, hogy egy szöveg pozitív vagy negatív hangvételű-e.", t13_inst: "Válogasd szét:", t13_h1: "Érzések a szövegben.", t13_h2: "Hangulat.", t13_q: "Mit ismer fel az érzelem elemzés?", t13_qa: "Hangulatot", t13_qb: "Időt", t13_qc: "Árat", t13_qd: "Betűtípust",
    t13_bl1: "Pozitív", t13_bl2: "Negatív", t13_i1: "Szuper!", t13_i2: "Rossz.", t13_i3: "Király!", t13_i4: "Hiba.",
    t14_title: "MI az űrben", t14_text: "A marsi robotok MI-t használnak az önálló útvonalkereséshez.", t14_inst: "Tedd sorrendbe a szavakat:", t14_h1: "Mars küldetés.", t14_h2: "Messze van.", t14_q: "Hol segít az MI az űrben?", t14_qa: "Navigáció", t14_qb: "Oxigén gyártás", t14_qc: "Csillagmosás", t14_qd: "Ufóvadászat",
    t14_w1: "Az MI", t14_w2: "irányítja", t14_w3: "a", t14_w4: "szondákat", t14_w5: "a", t14_w6: "világűrben.", t14_w7: "",
    t15_title: "Okosotthon", t15_text: "Az MI optimalizálja az energiafogyasztást és a biztonságot.", t15_inst: "Jelöld meg a helyes szót:", t15_h1: "Okos ház.", t15_h2: "Hálózat.", t15_q: "Mit csinál az okosotthon?", t15_qa: "Energiát spórol", t15_qb: "Falat fest", t15_qc: "Leckét ír", t15_qd: "Alszik",
    t15_tk1: "Az okos", t15_tk2: "eszközök", t15_tk3: "megtanulják", t15_tk4: "a", t15_tk5: "napi", t15_tk6: "rutinodat.", t15_tk7: ""
  },
  ro: {
    explorer_title: "Insula AI 5: Aplicații",
    t1_title: "Computer Vision", t1_text: "Capacitatea computerelor de a 'vedea' și înțelege imagini și videoclipuri.", t1_inst: "Potrivește perechile:", t1_h1: "Învățarea vizuală.", t1_h2: "Ce recunoaște AI?", t1_q: "Ce folosește computer vision?", t1_qa: "Camere", t1_qb: "Microfoane", t1_qc: "Boxe", t1_qd: "Tastaturi",
    t1_l1: "Față", t1_r1: "Recunoaștere", t1_l2: "Mașină", t1_r2: "Obstacol", t1_l3: "Foto", t1_r3: "Analiză pixeli",
    t2_title: "NLP", t2_text: "Procesarea limbajului natural ajută computerele să înțeleagă limbajul uman.", t2_inst: "Completează spațiul liber:", t2_h1: "Discuții cu PC-ul.", t2_h2: "Înțelegere text.", t2_q: "Ce înseamnă NLP?", t2_qa: "Procesare limbaj", t2_qb: "Protocol Net", t2_qc: "Plan Natură", t2_qd: "Program Nou",
    t2_sent: "NLP analizează ___ scris.", t2_qa2: "textul", t2_qb2: "curentul", t2_qc2: "cafeaua", t2_qd2: "monitorul",
    t3_title: "Recunoaștere vocală", t3_text: "AI transformă cuvintele rostite în text digital.", t3_inst: "Sortează în găleți:", t3_h1: "Ascultare vs Înțelegere.", t3_h2: "Sunet în text.", t3_q: "Ce este un exemplu de recunoaștere vocală?", t3_qa: "Dictare", t3_qb: "Imprimantă", t3_qc: "Clic mouse", t3_qd: "Ecran",
    t3_bl1: "Intrare (Sunet)", t3_bl2: "Ieșire (Text)", t3_i1: "Voce", t3_i2: "Cuvinte", t3_i3: "Audio", t3_i4: "Propoziții",
    t4_title: "AI în robotică", t4_text: "AI oferă roboților un 'creier' pentru a se deplasa în lume.", t4_inst: "Pune cuvintele în ordine:", t4_h1: "Roboții învață.", t4_h2: "Mișcare.", t4_q: "Ce controlează un robot AI?", t4_qa: "Mișcările sale", t4_qb: "Vremea", t4_qc: "Televizorul", t4_qd: "Soarele",
    t4_w1: "AI", t4_w2: "ajută", t4_w3: "roboții", t4_w4: "să", t4_w5: "evite", t4_w6: "orice", t4_w7: "obstacole.",
    t5_title: "Sisteme de recomandare", t5_text: "AI sugerează filme sau muzică care ți-ar putea plăcea.", t5_inst: "Evidențiază cuvântul corect:", t5_h1: "Efectul Netflix.", t5_h2: "Sugestii.", t5_q: "Unde găsești AI de recomandare?", t5_qa: "YouTube", t5_qb: "Calculator", t5_qc: "Prăjitor", t5_qd: "Mătură",
    t5_tk1: "AI", t5_tk2: "calculează", t5_tk3: "următorul", t5_tk4: "tău", t5_tk5: "serial", t5_tk6: "preferat.",
    t6_title: "Conducere autonomă", t6_text: "Mașini care se conduc singure folosind AI, fără șofer uman.", t6_inst: "Potrivește perechile:", t6_h1: "Conducere sigură.", t6_h2: "Senzori.", t6_q: "De ce are nevoie o mașină AI?", t6_qa: "Senzori și AI", t6_qb: "Un pilot", t6_qc: "Pânze", t6_qd: "Potcoave",
    t6_l1: "LIDAR", t6_r1: "Distanță", t6_l2: "AI", t6_r2: "Decizie", t6_l3: "Stop", t6_r3: "Oprire",
    t7_title: "Asistenți smart", t7_text: "Siri, Alexa și Google Assistant folosesc AI pentru răspunsuri.", t7_inst: "Completează spațiul liber:", t7_h1: "Întreabă-mă orice.", t7_h2: "Control vocal.", t7_q: "Cine este un asistent smart?", t7_qa: "Alexa", t7_qb: "Mario", t7_qc: "Pac-Man", t7_qd: "Excel",
    t7_sent: "Asistenții reacționează la un ___.", t7_qa2: "cuvânt de trezire", t7_qb2: "cântec", t7_qc2: "tablou", t7_qd2: "tuse",
    t8_title: "AI în medicină", t8_text: "AI ajută medicii să găsească boli pe radiografii mai rapid.", t8_inst: "Sortează în găleți:", t8_h1: "AI care ajută.", t8_h2: "Diagnostic.", t8_q: "Ce poate face AI în medicină?", t8_qa: "Analizează imagini", t8_qb: "Uită operații", t8_qc: "Face cafea", t8_qd: "Gâdilă",
    t8_bl1: "Diagnostic", t8_bl2: "Tratament", t8_i1: "Căutare tumori", t8_i2: "Operație robot", t8_i3: "Radiografie", t8_i4: "Dozaj",
    t9_title: "AI în jocuri", t9_text: "Adversarii AI din jocuri se adaptează la modul tău de joc.", t9_inst: "Pune cuvintele în ordine:", t9_h1: "Inamici deștepți.", t9_h2: "Gaming.", t9_q: "Ce face AI-ul din jocuri?", t9_qa: "Te provoacă", t9_qb: "Te lasă să câștigi", t9_qc: "Oprește PC-ul", t9_qd: "Comandă pizza",
    t9_w1: "Adversarii", t9_w2: "AI", t9_w3: "învață", t9_w4: "din", t9_w5: "tacticile", t9_w6: "jucătorului.", t9_w7: "",
    t10_title: "Deepfakes", t10_text: "Videoclipuri sau imagini false generate de AI care par reale.", t10_inst: "Evidențiază cuvântul corect:", t10_h1: "Atenție!", t10_h2: "Manipulare.", t10_q: "Ce este un deepfake?", t10_qa: "Un fals AI", t10_qb: "O groapă adâncă", t10_qc: "O poză reală", t10_qd: "O prăjitură",
    t10_tk1: "Deepfake-urile", t10_tk2: "pot", t10_tk3: "imita", t10_tk4: "oameni", t10_tk5: "foarte", t10_tk6: "realist.",
    t11_title: "Artă generativă", t11_text: "Modele AI precum Midjourney creează imagini din descrieri text.", t11_inst: "Potrivește perechile:", t11_h1: "Prompt în imagine.", t11_h2: "AI creativ.", t11_q: "Cum creăm artă AI?", t11_qa: "Folosind prompturi", t11_qb: "Cântând", t11_qc: "Dansând", t11_qd: "Deloc",
    t11_l1: "Text", t11_r1: "Intrare", t11_l2: "Imagine", t11_r2: "Rezultat", t11_l3: "Prompt", t11_r3: "Comandă",
    t12_title: "AI de traducere", t12_text: "Sisteme precum DeepL traduc texte întregi în secunde.", t12_inst: "Completează spațiul liber:", t12_h1: "Limbi străine.", t12_h2: "Înțelegere rapidă.", t12_q: "Ce face un AI de traducere?", t12_qa: "Schimbă limbi", t12_qb: "Tipărește cărți", t12_qc: "Spune glume", t12_qd: "Cântă",
    t12_sent: "AI traduce între multe ___.", t12_qa2: "limbi", t12_qb2: "culori", t12_qc2: "numere", t12_qd2: "mașini",
    t13_title: "Analiză sentiment", t13_text: "AI detectează dacă un text este pozitiv sau negativ.", t13_inst: "Sortează în găleți:", t13_h1: "Sentiment în text.", t13_h2: "Stare.", t13_q: "Ce detectează analiza sentimentului?", t13_qa: "Starea", t13_qb: "Ora", t13_qc: "Prețul", t13_qd: "Fontul",
    t13_bl1: "Pozitiv", t13_bl2: "Negativ", t13_i1: "Super!", t13_i2: "Rău.", t13_i3: "Grozav!", t13_i4: "Eroare.",
    t14_title: "AI în spațiu", t14_text: "Roverele de pe Marte folosesc AI pentru a găsi căi singure.", t14_inst: "Pune cuvintele în ordine:", t14_h1: "Misiune Marte.", t14_h2: "Departe.", t14_q: "Unde ajută AI în spațiu?", t14_qa: "Navigație", t14_qb: "Face oxigen", t14_qc: "Spală stele", t14_qd: "Prinde OZN-uri",
    t14_w1: "AI", t14_w2: "ghidează", t14_w3: "sondele", t14_w4: "prin", t14_w5: "spațiul", t14_w6: "cosmic.", t14_w7: "",
    t15_title: "Smart Home", t15_text: "AI optimizează consumul de energie și securitatea casei.", t15_inst: "Evidențiază cuvântul corect:", t15_h1: "Casă deșteaptă.", t15_h2: "Rețea.", t15_q: "Ce face un smart home?", t15_qa: "Economisește energie", t15_qb: "Vopsește pereți", t15_qc: "Face teme", t15_qd: "Doarme",
    t15_tk1: "Dispozitivele", t15_tk2: "smart", t15_tk3: "învăță", t15_tk4: "rutina", t15_tk5: "ta", t15_tk6: "zilnică.", t15_tk7: ""
  }
};

export const INFO_K6_I5_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "simple-icon", icon: "👁️", color: "#4CAF50" },
    interactive: { type: "match-pairs", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", pairs: [{left:"t1_l1",right:"t1_r1"},{left:"t1_l2",right:"t1_r2"},{left:"t1_l3",right:"t1_r3"}] },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" }
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "💬", color: "#2196F3" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" }
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "icon-grid", items: [{emoji:"🎤",label:"Sound"},{emoji:"📄",label:"Text"}] },
    interactive: { type: "drag-to-bucket", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", buckets: [{id:"b1",label:"t3_bl1"},{id:"b2",label:"t3_bl2"}], items: [{text:"t3_i1",bucketId:"b1"},{text:"t3_i2",bucketId:"b2"},{text:"t3_i3",bucketId:"b1"},{text:"t3_i4",bucketId:"b2"}] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "🤖", color: "#9E9E9E" },
    interactive: { type: "word-order", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", words: ["t4_w1", "t4_w2", "t4_w3", "t4_w4", "t4_w5", "t4_w6", "t4_w7"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6].slice(0, 7) },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "🎬", color: "#E91E63" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6"].filter(x=>x!==""), correctIndices: [4,5] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" }
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "simple-icon", icon: "🚗", color: "#FF5722" },
    interactive: { type: "match-pairs", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", pairs: [{left:"t6_l1",right:"t6_r1"},{left:"t6_l2",right:"t6_r2"},{left:"t6_l3",right:"t6_r3"}] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" }
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "🎙️", color: "#00BCD4" },
    interactive: { type: "gap-fill", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", sentence: "t7_sent", choices: ["t7_qa2", "t7_qb2", "t7_qc2", "t7_qd2"], correctIndex: 0 },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" }
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "simple-icon", icon: "🏥", color: "#F44336" },
    interactive: { type: "drag-to-bucket", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", buckets: [{id:"b1",label:"t8_bl1"},{id:"b2",label:"t8_bl2"}], items: [{text:"t8_i1",bucketId:"b1"},{text:"t8_i2",bucketId:"b2"},{text:"t8_i3",bucketId:"b1"},{text:"t8_i4",bucketId:"b2"}] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" }
  },
  {
    infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "simple-icon", icon: "🎮", color: "#673AB7" },
    interactive: { type: "word-order", instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2", words: ["t9_w1", "t9_w2", "t9_w3", "t9_w4", "t9_w5", "t9_w6", "t9_w7"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6].slice(0, 7) },
    quiz: { question: "t9_q", choices: ["t9_qa", "t9_qb", "t9_qc", "t9_qd"], answer: "t9_qa" }
  },
  {
    infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "simple-icon", icon: "🎭", color: "#000000" },
    interactive: { type: "highlight-text", instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2", tokens: ["t10_tk1","t10_tk2","t10_tk3","t10_tk4","t10_tk5","t10_tk6"].filter(x=>x!==""), correctIndices: [0] },
    quiz: { question: "t10_q", choices: ["t10_qa", "t10_qb", "t10_qc", "t10_qd"], answer: "t10_qa" }
  },
  {
    infoTitle: "t11_title", infoText: "t11_text",
    svg: { type: "simple-icon", icon: "🎨", color: "#FFC107" },
    interactive: { type: "match-pairs", instruction: "t11_inst", hint1: "t11_h1", hint2: "t11_h2", pairs: [{left:"t11_l1",right:"t11_r1"},{left:"t11_l2",right:"t11_r2"},{left:"t11_l3",right:"t11_r3"}] },
    quiz: { question: "t11_q", choices: ["t11_qa", "t11_qb", "t11_qc", "t11_qd"], answer: "t11_qa" }
  },
  {
    infoTitle: "t12_title", infoText: "t12_text",
    svg: { type: "simple-icon", icon: "🌍", color: "#3F51B5" },
    interactive: { type: "gap-fill", instruction: "t12_inst", hint1: "t12_h1", hint2: "t12_h2", sentence: "t12_sent", choices: ["t12_qa2", "t12_qb2", "t12_qc2", "t12_qd2"], correctIndex: 0 },
    quiz: { question: "t12_q", choices: ["t12_qa", "t12_qb", "t12_qc", "t12_qd"], answer: "t12_qa" }
  },
  {
    infoTitle: "t13_title", infoText: "t13_text",
    svg: { type: "icon-grid", items: [{emoji:"😊",label:"Positive"},{emoji:"😠",label:"Negative"}] },
    interactive: { type: "drag-to-bucket", instruction: "t13_inst", hint1: "t13_h1", hint2: "t13_h2", buckets: [{id:"b1",label:"t13_bl1"},{id:"b2",label:"t13_bl2"}], items: [{text:"t13_i1",bucketId:"b1"},{text:"t13_i2",bucketId:"b2"},{text:"t13_i3",bucketId:"b1"},{text:"t13_i4",bucketId:"b2"}] },
    quiz: { question: "t13_q", choices: ["t13_qa", "t13_qb", "t13_qc", "t13_qd"], answer: "t13_qa" }
  },
  {
    infoTitle: "t14_title", infoText: "t14_text",
    svg: { type: "simple-icon", icon: "🚀", color: "#607D8B" },
    interactive: { type: "word-order", instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2", words: ["t14_w1", "t14_w2", "t14_w3", "t14_w4", "t14_w5", "t14_w6", "t14_w7"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5].slice(0, 6) },
    quiz: { question: "t14_q", choices: ["t14_qa", "t14_qb", "t14_qc", "t14_qd"], answer: "t14_qa" }
  },
  {
    infoTitle: "t15_title", infoText: "t15_text",
    svg: { type: "simple-icon", icon: "🏠", color: "#FF9800" },
    interactive: { type: "highlight-text", instruction: "t15_inst", hint1: "t15_h1", hint2: "t15_h2", tokens: ["t15_tk1","t15_tk2","t15_tk3","t15_tk4","t15_tk5","t15_tk6","t15_tk7"].filter(x=>x!==""), correctIndices: [0,1,3] },
    quiz: { question: "t15_q", choices: ["t15_qa", "t15_qb", "t15_qc", "t15_qd"], answer: "t15_qa" }
  }
];

