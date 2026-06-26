// @ts-nocheck
// lib/explorerPools/aiK8_i8.ts
import type { PoolTopicDef } from "./types";

export const INFO_K8_I8_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "KI Anwendungen & Kreativität",
    t1_title: "Bilderkennung", t1_text: "KI kann Objekte in Bildern identifizieren, z.B. Hunde von Katzen unterscheiden.", t1_inst: "Ordne die Paare zu:", t1_h1: "Was sieht die Kamera?", t1_h2: "Objekte erkennen.", t1_q: "Wo wird Bilderkennung genutzt?", t1_qa: "Gesichtsscan am Handy", t1_qb: "Beim Musikhören", t1_qc: "Beim Kochen", t1_qd: "Im Schlafsack",
    t1_l1: "Pixel", t1_r1: "Bildpunkt", t1_l2: "Muster", t1_r2: "Form", t1_l3: "Label", t1_r3: "Name des Objekts",
    t2_title: "Sprachverarbeitung (NLP)", t2_text: "Natural Language Processing (NLP) ermöglicht es KI, menschliche Sprache zu verstehen und zu erzeugen.", t2_inst: "Fülle die Lücke aus:", t2_h1: "Sprechen mit Maschinen.", t2_h2: "Abkürzung NLP.", t2_q: "Was bedeutet NLP?", t2_qa: "Natural Language Processing", t2_qb: "Net-Lade-Programm", t2_qc: "Neue-Logik-Plattform", t2_qd: "Nur-Lese-Protokoll",
    t2_sent: "Mit NLP versteht die KI unsere ___.", t2_qa2: "Sprache", t2_qb2: "Schuhe", t2_qc2: "Hardware", t2_qd2: "Stromrechnung",
    t3_title: "KI in Spielen", t3_text: "KI steuert Gegner in Videospielen oder hilft beim Finden von Pfaden.", t3_inst: "Sortiere in die Eimer:", t3_h1: "Spieler vs Computer.", t3_h2: "Verhalten im Spiel.", t3_q: "Was macht eine KI in einem Shooter?", t3_qa: "Gegner steuern", t3_qb: "Punkte zählen", t3_qc: "Das Spiel löschen", t3_qd: "Die Grafikkarte kühlen",
    t3_bl1: "Aktion", t3_bl2: "KI-Entscheidung", t3_i1: "Spieler läuft", t3_i2: "Gegner sucht Deckung", t3_i3: "Taste drücken", t3_i4: "Pfad berechnen",
    t4_title: "Selbstfahrende Autos", t4_text: "Autos nutzen Kameras, Lidar und KI, um Hindernisse zu erkennen und sicher zu navigieren.", t4_inst: "Bringe die Wörter in Ordnung:", t4_h1: "Ohne Fahrer.", t4_h2: "Sicherheit durch Sensoren.", t4_q: "Welcher Sensor ist wichtig für autonome Autos?", t4_qa: "Lidar / Radar", t4_qb: "Das Radio", t4_qc: "Die Hupe", t4_qd: "Der Aschenbecher",
    t4_w1: "Autonome", t4_w2: "Autos", t4_w3: "reagieren", t4_w4: "in", t4_w5: "Echtzeit", t4_w6: "auf", t4_w7: "Hindernisse.",
    t5_title: "KI in der Medizin", t5_text: "KI hilft Ärzten, Krankheiten wie Krebs auf Röntgenbildern schneller zu entdecken.", t5_inst: "Markiere das Wort für die Erkennung einer Krankheit:", t5_h1: "Diagnosehilfe.", t5_h2: "Bilder analysieren.", t5_q: "Was ist ein Vorteil von KI in der Medizin?", t5_qa: "Früherkennung", t5_qb: "Heilung durch Zauberei", t5_qc: "Weniger Betten", t5_qd: "Kostenlose Pizza",
    t5_tk1: "KI", t5_tk2: "unterstützt", t5_tk3: "die", t5_tk4: "Diagnose", t5_tk5: "von", t5_tk6: "Krankheiten.",
    t6_title: "Empfehlungssysteme", t6_text: "Algorithmen bei YouTube oder Netflix schlagen dir Videos vor, die dir gefallen könnten.", t6_inst: "Ordne die Paare zu:", t6_h1: "Was schaust du?", t6_h2: "Interessen finden.", t6_q: "Wie lernt YouTube deinen Geschmack?", t6_qa: "Durch dein Sehverhalten", t6_qb: "Durch Würfeln", t6_qc: "Durch deine Telefonnummer", t6_qd: "Durch das Wetter",
    t6_l1: "Historie", t6_r1: "Gesehene Videos", t6_l2: "Ranking", t6_r2: "Beliebtheit", t6_l3: "Vorschlag", t6_r3: "Neues Video",
    t7_title: "Generative KI (Bilder)", t7_text: "KIs wie Midjourney können aus einer Textbeschreibung (Prompt) neue Bilder erstellen.", t7_inst: "Fülle die Lücke aus:", t7_h1: "Text zu Bild.", t7_h2: "Eingabe-Befehl.", t7_q: "Wie nennt man die Texteingabe bei Bild-KIs?", t7_qa: "Prompt", t7_qb: "Passwort", t7_qc: "Email", t7_qd: "SMS",
    t7_sent: "Ein guter ___ führt zu besseren Bildern.", t7_qa2: "Prompt", t7_qb2: "Drucker", t7_qc2: "Monitor", t7_qd2: "Kaffee",
    t8_title: "Large Language Models", t8_text: "LLMs (wie ChatGPT) wurden mit riesigen Textmengen trainiert, um Dialoge zu führen.", t8_inst: "Sortiere in die Eimer:", t8_h1: "Was kann ChatGPT?", t8_h2: "Text-Fähigkeiten.", t8_q: "Wofür steht das 'G' in GPT?", t8_qa: "Generative", t8_qb: "Gross", t3_qc: "Gehirn", t3_qd: "Global",
    t8_bl1: "Training", t8_bl2: "Anwendung", t8_i1: "Milliarden Wörter", t8_i2: "Aufsatz schreiben", t8_i3: "Internet-Archiv", t8_i4: "Code korrigieren",
    t9_title: "Virtuelle Assistenten", t9_text: "Siri und Alexa nutzen Spracherkennung und KI, um deine Fragen zu beantworten.", t9_inst: "Bringe die Wörter in Ordnung:", t9_h1: "Stimmsteuerung.", t9_h2: "Helfer im Alltag.", t9_q: "Wie aktiviert man meistens Alexa?", t9_qa: "Durch ein Signalwort", t9_qb: "Durch Klatschen", t9_qc: "Durch Pfeifen", t9_qd: "Durch Tanzen",
    t9_w1: "Digitale", t9_w2: "Assistenten", t9_w3: "verstehen", t9_w4: "gesprochene", t9_w5: "Befehle", t9_w6: "sehr", t9_w7: "gut.",
    t10_title: "KI in der Robotik", t10_text: "KI gibt Robotern 'Augen' und 'Verstand', um sich in der Welt zurechtzufinden.", t10_inst: "Markiere das Wort dafür, woraus Roboter lernen:", t10_h1: "Hardware + KI.", t10_h2: "Bewegung.", t10_q: "Was ermöglicht KI einem Roboter?", t10_qa: "Anpassungsfähigkeit", t10_qb: "Ewiges Leben", t10_qc: "Gefühle", t10_qd: "Einen Namen",
    t10_tk1: "Moderne", t10_tk2: "Roboter", t10_tk3: "lernen", t10_tk4: "durch", t10_tk5: "Erfahrung.", t10_tk6: "",
    t11_title: "Content Moderation", t11_text: "KI hilft sozialen Medien, unangemessene Inhalte automatisch zu erkennen und zu filtern.", t11_inst: "Ordne die Paare zu:", t11_h1: "Sauberes Internet.", t11_h2: "Filterregeln.", t11_q: "Warum nutzt man KI zur Moderation?", t11_qa: "Wegen der Datenmenge", t11_qb: "Weil Menschen keine Augen haben", t11_qc: "Weil es Strom spart", t11_qd: "Damit es bunter wird",
    t11_l1: "Filter", t11_r1: "Schutz", t11_l2: "Spam", t11_r2: "Unerwünscht", t11_l3: "Report", t11_r3: "Meldung",
    t12_title: "Deepfakes", t12_text: "KI kann täuschend echte Videos von Personen erstellen, die Dinge sagen, die sie nie gesagt haben.", t12_inst: "Fülle die Lücke aus:", t12_h1: "KI-Fälschungen.", t12_h2: "Manipulation.", t12_q: "Was ist ein Deepfake?", t12_qa: "Ein manipuliertes Video", t12_qb: "Ein tiefer Teller", t12_qc: "Ein schnelles Auto", t12_qd: "Ein neues Betriebssystem",
    t12_sent: "Deepfakes können zur ___ genutzt werden.", t12_qa2: "Täuschung", t12_qb2: "Heilung", t12_qc2: "Kühlung", t12_qd2: "Reinigung",
    t13_title: "Predictive Analytics", t13_text: "KI berechnet Wahrscheinlichkeiten für die Zukunft, z.B. Wetter oder Aktienkurse.", t13_inst: "Sortiere in die Eimer:", t13_h1: "Vorhersage vs Fakt.", t13_h2: "Wahrscheinlichkeit.", t13_q: "Was macht Predictive Analytics?", t13_qa: "Trends vorhersagen", t13_qb: "Die Vergangenheit löschen", t13_qc: "Den Monitor ausschalten", t13_qd: "Texte malen",
    t13_bl1: "Datenquelle", t13_bl2: "Vorhersage", t13_i1: "Wetterdaten", t13_i2: "Regenrisiko", t13_i3: "Kaufhistorie", t13_i4: "Kaufempfehlung",
    t14_title: "Chatbots", t14_text: "Automatisierte Programme, die mit Kunden chatten, um einfache Probleme zu lösen.", t14_inst: "Bringe die Wörter in Ordnung:", t14_h1: "Chat-Roboter.", t14_h2: "Kundenservice.", t14_q: "Wo findet man meistens Chatbots?", t14_qa: "Auf Webseiten", t14_qb: "Im Kühlschrank", t14_qc: "Auf der Straße", t14_qd: "Im Wald",
    t14_w1: "Ein", t14_w2: "Chatbot", t14_w3: "antwortet", t14_w4: "rund", t14_w5: "um", t14_w6: "die", t14_w7: "Uhr.",
    t15_title: "Kreative KI", t15_text: "KI kann Musik komponieren, Gedichte schreiben oder neue Kochrezepte erfinden.", t15_inst: "Markiere das Wort für die neuen Werke der KI:", t15_h1: "Kunst und KI.", t15_h2: "Neue Ideen.", t15_q: "Kann KI wirklich kreativ sein?", t15_qa: "Ja, durch neue Kombinationen", t15_qb: "Nein, niemals", t15_qc: "Nur wenn sie Strom hat", t15_qd: "Nur in der Nacht",
    t15_tk1: "KI", t15_tk2: "schafft", t15_tk3: "neue", t15_tk4: "Formen", t15_tk5: "der", t15_tk6: "Kunst.", t15_tk7: ""
  },
  en: {
    explorer_title: "AI Applications & Creativity",
    t1_title: "Image Recognition", t1_text: "AI can identify objects in images, such as distinguishing dogs from cats.", t1_inst: "Match the pairs:", t1_h1: "What does the camera see?", t1_h2: "Recognizing objects.", t1_q: "Where is image recognition used?", t1_qa: "Face scan on phone", t1_qb: "Listening to music", t1_qc: "When cooking", t1_qd: "In a sleeping bag",
    t1_l1: "Pixel", t1_r1: "Picture element", t1_l2: "Pattern", t1_r2: "Shape", t1_l3: "Label", t1_r3: "Object name",
    t2_title: "Natural Language Processing", t2_text: "NLP enables AI to understand and generate human language.", t2_inst: "Fill in the blank:", t2_h1: "Talking to machines.", t2_h2: "Abbreviation NLP.", t2_q: "What does NLP stand for?", t2_qa: "Natural Language Processing", t2_qb: "Net Loading Program", t2_qc: "New Logic Platform", t2_qd: "Read Only Protocol",
    t2_sent: "With NLP, the AI understands our ___.", t2_qa2: "language", t2_qb2: "shoes", t2_qc2: "hardware", t2_qd2: "power bill",
    t3_title: "AI in Games", t3_text: "AI controls enemies in video games or helps with pathfinding.", t3_inst: "Sort into buckets:", t3_h1: "Player vs Computer.", t3_h2: "In-game behavior.", t3_q: "What does an AI do in a shooter?", t3_qa: "Control enemies", t3_qb: "Count points", t3_qc: "Delete the game", t3_qd: "Cool the graphics card",
    t3_bl1: "Action", t3_bl2: "AI Decision", t3_i1: "Player runs", t3_i2: "Enemy takes cover", t3_i3: "Press key", t3_i4: "Calculate path",
    t4_title: "Self-Driving Cars", t4_text: "Cars use cameras, lidar, and AI to detect obstacles and navigate safely.", t4_inst: "Put the words in order:", t4_h1: "No driver.", t4_h2: "Safety through sensors.", t4_q: "Which sensor is important for autonomous cars?", t4_qa: "Lidar / Radar", t4_qb: "The radio", t4_qc: "The horn", t4_qd: "The ashtray",
    t4_w1: "Autonomous", t4_w2: "cars", t4_w3: "react", t4_w4: "in", t4_w5: "real-time", t4_w6: "to", t4_w7: "obstacles.",
    t5_title: "AI in Medicine", t5_text: "AI helps doctors detect diseases like cancer on X-rays faster.", t5_inst: "Highlight the word for detecting an illness:", t5_h1: "Diagnostic help.", t5_h2: "Analyze images.", t5_q: "What is a benefit of AI in medicine?", t5_qa: "Early detection", t5_qb: "Healing by magic", t5_qc: "Fewer beds", t5_qd: "Free pizza",
    t5_tk1: "AI", t5_tk2: "supports", t5_tk3: "the", t5_tk4: "diagnosis", t5_tk5: "of", t5_tk6: "diseases.",
    t6_title: "Recommendation Systems", t6_text: "Algorithms on YouTube or Netflix suggest videos you might like.", t6_inst: "Match the pairs:", t6_h1: "What do you watch?", t6_h2: "Find interests.", t6_q: "How does YouTube learn your taste?", t6_qa: "Through your viewing behavior", t6_qb: "By rolling dice", t6_qc: "Through your phone number", t6_qd: "By the weather",
    t6_l1: "History", t6_r1: "Watched videos", t6_l2: "Ranking", t6_r2: "Popularity", t6_l3: "Suggestion", t6_r3: "New video",
    t7_title: "Generative AI (Images)", t7_text: "AIs like Midjourney can create new images from a text description (prompt).", t7_inst: "Fill in the blank:", t7_h1: "Text to image.", t7_h2: "Input command.", t7_q: "What do you call the text input for image AIs?", t7_qa: "Prompt", t7_qb: "Password", t7_qc: "Email", t7_qd: "SMS",
    t7_sent: "A good ___ leads to better images.", t7_qa2: "prompt", t7_qb2: "printer", t7_qc2: "monitor", t7_qd2: "coffee",
    t8_title: "Large Language Models", t8_text: "LLMs (like ChatGPT) were trained with massive amounts of text to hold dialogues.", t8_inst: "Sort into buckets:", t8_h1: "What can ChatGPT do?", t8_h2: "Text abilities.", t8_q: "What does the 'G' stand for in GPT?", t8_qa: "Generative", t8_qb: "Great", t3_qc: "Gbrain", t3_qd: "Global",
    t8_bl1: "Training", t8_bl2: "Application", t8_i1: "Billions of words", t8_i2: "Write essay", t8_i3: "Internet archive", t8_i4: "Fix code",
    t9_title: "Virtual Assistants", t9_text: "Siri and Alexa use voice recognition and AI to answer your questions.", t9_inst: "Put the words in order:", t9_h1: "Voice control.", t9_h2: "Everyday helper.", t9_q: "How do you usually activate Alexa?", t9_qa: "Through a wake word", t9_qb: "By clapping", t9_qc: "By whistling", t9_qd: "By dancing",
    t9_w1: "Digital", t9_w2: "assistants", t9_w3: "understand", t9_w4: "spoken", t9_w5: "commands", t9_w6: "very", t9_w7: "well.",
    t10_title: "AI in Robotics", t10_text: "AI gives robots 'eyes' and 'brains' to navigate the world.", t10_inst: "Highlight the word for what robots learn from:", t10_h1: "Hardware + AI.", t10_h2: "Movement.", t10_q: "What does AI enable for a robot?", t10_qa: "Adaptability", t10_qb: "Eternal life", t10_qc: "Feelings", t10_qd: "A name",
    t10_tk1: "Modern", t10_tk2: "robots", t10_tk3: "learn", t10_tk4: "through", t10_tk5: "experience.", t10_tk6: "",
    t11_title: "Content Moderation", t11_text: "AI helps social media automatically detect and filter inappropriate content.", t11_inst: "Match the pairs:", t11_h1: "Clean internet.", t11_h2: "Filter rules.", t11_q: "Why use AI for moderation?", t11_qa: "Volume of data", t11_qb: "Humans have no eyes", t11_qc: "Saves power", t11_qd: "More colors",
    t11_l1: "Filter", t11_r1: "Protection", t11_l2: "Spam", t11_r2: "Unwanted", t11_l3: "Report", t11_r3: "Notification",
    t12_title: "Deepfakes", t12_text: "AI can create realistic videos of people saying things they never said.", t12_inst: "Fill in the blank:", t12_h1: "AI fakes.", t12_h2: "Manipulation.", t12_q: "What is a deepfake?", t12_qa: "A manipulated video", t12_qb: "A deep plate", t12_qc: "A fast car", t12_qd: "A new OS",
    t12_sent: "Deepfakes can be used for ___.", t12_qa2: "deception", t12_qb2: "healing", t12_qc2: "cooling", t12_qd2: "cleaning",
    t13_title: "Predictive Analytics", t13_text: "AI calculates future probabilities, like weather or stock prices.", t13_inst: "Sort into buckets:", t13_h1: "Prediction vs Fact.", t13_h2: "Probability.", t13_q: "What does predictive analytics do?", t13_qa: "Predict trends", t13_qb: "Delete past", t13_qc: "Turn off monitor", t13_qd: "Paint text",
    t13_bl1: "Data source", t13_bl2: "Prediction", t13_i1: "Weather data", t13_i2: "Rain risk", t13_i3: "Purchase history", t13_i4: "Recommendation",
    t14_title: "Chatbots", t14_text: "Automated programs that chat with customers to solve simple problems.", t14_inst: "Put the words in order:", t14_h1: "Chat robots.", t14_h2: "Customer service.", t14_q: "Where are chatbots usually found?", t14_qa: "On websites", t14_qb: "In the fridge", t14_qc: "On the street", t14_qd: "In the forest",
    t14_w1: "A", t14_w2: "chatbot", t14_w3: "answers", t14_w4: "around", t14_w5: "the", t14_w6: "clock.", t14_w7: "",
    t15_title: "Creative AI", t15_text: "AI can compose music, write poems, or invent new cooking recipes.", t15_inst: "Highlight the word for the new creations of art:", t15_h1: "Art and AI.", t15_h2: "New ideas.", t15_q: "Can AI really be creative?", t15_qa: "Yes, via new combinations", t15_qb: "No, never", t15_qc: "Only with power", t15_qd: "Only at night",
    t15_tk1: "AI", t15_tk2: "creates", t15_tk3: "new", t15_tk4: "forms", t15_tk5: "of", t15_tk6: "art.", t15_tk7: ""
  },
  hu: {
    explorer_title: "MI Alkalmazások és Kreativitás",
    t1_title: "Képfelismerés", t1_text: "A MI képes azonosítani a képeken lévő tárgyakat, például megkülönbözteti a kutyát a macskától.", t1_inst: "Párosítsd össze:", t1_h1: "Mit lát a kamera?", t1_h2: "Tárgyak felismerése.", t1_q: "Hol használnak képfelismerést?", t1_qa: "Arcalapú feloldás", t1_qb: "Zenehallgatás közben", t1_qc: "Főzéskor", t1_qd: "Hálózsákban",
    t1_l1: "Pixel", t1_r1: "Képpont", t1_l2: "Minta", t1_r2: "Forma", t1_l3: "Címke", t1_r3: "Tárgy neve",
    t2_title: "Nyelvfeldolgozás (NLP)", t2_text: "Az NLP lehetővé teszi, hogy a MI megértse és használja az emberi nyelvet.", t2_inst: "Töltsd ki a hiányt:", t2_h1: "Beszéd a gépekkel.", t2_h2: "NLP rövidítés.", t2_q: "Mit jelent az NLP?", t2_qa: "Natural Language Processing", t2_qb: "Nagy-Lekérdező-Program", t2_qc: "Net-Logika-Platform", t2_qd: "Néma-Lap-Protokoll",
    t2_sent: "Az NLP-vel a MI érti a mi ___.", t2_qa2: "nyelvünket", t2_qb2: "cipőnket", t2_qc2: "hardverünket", t2_qd2: "számlánkat",
    t3_title: "MI a játékokban", t3_text: "A MI irányítja az ellenségeket a játékokban, vagy segít az útvonaltervezésben.", t3_inst: "Válogasd szét:", t3_h1: "Játékos vs Gép.", t3_h2: "Játékon belüli viselkedés.", t3_q: "Mit csinál a MI egy lövöldözős játékban?", t3_qa: "Ellenségeket irányít", t3_qb: "Pontokat számol", t3_qc: "Letörli a játékot", t3_qd: "Hűti a videókártyát",
    t3_bl1: "Akció", t3_bl2: "MI döntés", t3_i1: "Játékos fut", t3_i2: "Ellenség fedezékbe vonul", t3_i3: "Gombnyomás", t3_i4: "Útvonal számítása",
    t4_title: "Önvezető autók", t4_text: "Az autók kamerákat, lidart és MI-t használnak az akadályok észleléséhez.", t4_inst: "Tedd sorrendbe a szavakat:", t4_h1: "Sofőr nélkül.", t4_h2: "Biztonság szenzorokkal.", t4_q: "Melyik szenzor fontos az önvezető autóknak?", t4_qa: "Lidar / Radar", t4_qb: "Rádió", t4_qc: "Duda", t4_qd: "Hamu tartó",
    t4_w1: "Az önvezető", t4_w2: "autók", t4_w3: "valós", t4_w4: "időben", t4_w5: "reagálnak", t4_w6: "az", t4_w7: "akadályokra.",
    t5_title: "MI az orvoslásban", t5_text: "A MI segít az orvosoknak gyorsabban felismerni a betegségeket a röntgenképeken.", t5_inst: "Jelöld meg a betegség felismerésének szavát:", t5_h1: "Diagnózis segítő.", t5_h2: "Képek elemzése.", t5_q: "Mi az előnye a MI-nek az orvoslásban?", t5_qa: "Korai felismerés", t5_qb: "Varázslatos gyógyulás", t5_qc: "Kevesebb ágy", t5_qd: "Ingyen pizza",
    t5_tk1: "A MI", t5_tk2: "segít", t5_tk3: "a", t5_tk4: "diagnózis", t5_tk5: "felállításában.", t5_tk6: "",
    t6_title: "Ajánlórendszerek", t6_text: "A YouTube vagy a Netflix algoritmusai olyan videókat ajánlanak, amelyek tetszhetnek neked.", t6_inst: "Párosítsd össze:", t6_h1: "Mit nézel?", t6_h2: "Érdeklődés megtalálása.", t6_q: "Hogyan tanulja meg a YouTube az ízlésedet?", t6_qa: "A nézési szokásaidból", t6_qb: "Kockadobással", t6_qc: "A telefonszámodból", t6_qd: "Az időjárásból",
    t6_l1: "Előzmények", t6_r1: "Megnézett videók", t6_l2: "Rangsor", t6_r2: "Népszerűség", t6_l3: "Ajánlás", t6_r3: "Új videó",
    t7_title: "Generatív MI (képek)", t7_text: "Az olyan MI-k, mint a Midjourney, szöveges leírásból (prompt) új képeket tudnak készíteni.", t7_inst: "Töltsd ki a hiányt:", t7_h1: "Szövegből kép.", t7_h2: "Bemeneti parancs.", t7_q: "Hogyan hívják a szöveges bemenetet a kép-MI-knél?", t7_qa: "Prompt", t7_qb: "Jelszó", t7_qc: "Email", t7_qd: "SMS",
    t7_sent: "Egy jó ___ jobb képekhez vezet.", t7_qa2: "prompt", t7_qb2: "nyomtató", t7_qc2: "monitor", t7_qd2: "kávé",
    t8_title: "Nagy nyelvi modellek", t8_text: "Az LLM-eket (mint a ChatGPT) hatalmas mennyiségű szöveggel tanították be, hogy párbeszédet folytassanak.", t8_inst: "Válogasd szét:", t8_h1: "Mit tud a ChatGPT?", t8_h2: "Szöveges képességek.", t8_q: "Mit jelent a 'G' a GPT-ben?", t8_qa: "Generatív", t8_qb: "Nagy", t8_qc: "Agy", t8_qd: "Globális",
    t8_bl1: "Betanítás", t8_bl2: "Alkalmazás", t8_i1: "Milliárdnyi szó", t8_i2: "Fogalmazás írása", t8_i3: "Internet-archívum", t8_i4: "Kód javítása",
    t9_title: "Virtuális asszisztensek", t9_text: "A Siri és az Alexa beszédfelismerést és MI-t használnak, hogy megválaszolják a kérdéseidet.", t9_inst: "Tedd sorrendbe a szavakat:", t9_h1: "Hangvezérlés.", t9_h2: "Segítő a mindennapokban.", t9_q: "Hogyan aktiválják általában az Alexát?", t9_qa: "Egy ébresztő szóval", t9_qb: "Tapssal", t9_qc: "Füttyel", t9_qd: "Tánccal",
    t9_w1: "A digitális", t9_w2: "asszisztensek", t9_w3: "nagyon", t9_w4: "jól", t9_w5: "értik", t9_w6: "a kimondott", t9_w7: "parancsokat.",
    t10_title: "MI a robotikában", t10_text: "A MI 'szemet' és 'észt' ad a robotoknak, hogy eligazodjanak a világban.", t10_h1: "Hardver + MI.", t10_h2: "Mozgás.", t10_q: "Mit tesz lehetővé a MI egy robot számára?", t10_qa: "Alkalmazkodóképesség", t10_qb: "Örök élet", t10_qc: "Érzelmek", t10_qd: "Egy név",
    t11_title: "Tartalommoderálás", t11_text: "A MI segít a közösségi médiának, hogy automatikusan felismerje és kiszűrje a nem megfelelő tartalmat.", t11_inst: "Párosítsd össze:", t11_h1: "Tiszta internet.", t11_h2: "Szűrési szabályok.", t11_q: "Miért használnak MI-t a moderáláshoz?", t11_qa: "Az adatmennyiség miatt", t11_qb: "Mert az embereknek nincs szemük", t11_qc: "Mert áramot spórol", t11_qd: "Hogy színesebb legyen",
    t11_l1: "Szűrő", t11_r1: "Védelem", t11_l2: "Spam", t11_r2: "Nemkívánatos", t11_l3: "Jelentés", t11_r3: "Bejelentés",
    t12_title: "Deepfake-ek", t12_text: "A MI megtévesztően valódi videókat tud készíteni emberekről, akik olyat mondanak, amit soha nem mondtak.", t12_inst: "Töltsd ki a hiányt:", t12_h1: "MI-hamisítványok.", t12_h2: "Manipuláció.", t12_q: "Mi az a deepfake?", t12_qa: "Egy manipulált videó", t12_qb: "Egy mély tányér", t12_qc: "Egy gyors autó", t12_qd: "Egy új operációs rendszer",
    t12_sent: "A deepfake-eket ___ lehet használni.", t12_qa2: "megtévesztésre", t12_qb2: "gyógyításra", t12_qc2: "hűtésre", t12_qd2: "tisztításra",
    t13_title: "Prediktív analitika", t13_text: "A MI valószínűségeket számol a jövőre, például az időjárásra vagy a részvényárakra.", t13_inst: "Válogasd szét:", t13_h1: "Előrejelzés vs tény.", t13_h2: "Valószínűség.", t13_q: "Mit csinál a prediktív analitika?", t13_qa: "Trendeket jelez előre", t13_qb: "Letörli a múltat", t13_qc: "Kikapcsolja a monitort", t13_qd: "Szövegeket fest",
    t13_bl1: "Adatforrás", t13_bl2: "Előrejelzés", t13_i1: "Időjárási adatok", t13_i2: "Esőkockázat", t13_i3: "Vásárlási előzmények", t13_i4: "Vásárlási ajánlás",
    t14_title: "Csevegőrobotok", t14_text: "Automatizált programok, amelyek ügyfelekkel csevegnek, hogy egyszerű problémákat oldjanak meg.", t14_inst: "Tedd sorrendbe a szavakat:", t14_h1: "Csevegő robotok.", t14_h2: "Ügyfélszolgálat.", t14_q: "Hol találhatók általában a csevegőrobotok?", t14_qa: "Weboldalakon", t14_qb: "A hűtőszekrényben", t14_qc: "Az utcán", t14_qd: "Az erdőben",
    t14_w1: "Egy", t14_w2: "csevegőrobot", t14_w3: "a nap", t14_w4: "minden", t14_w5: "órájában", t14_w6: "válaszol", t14_w7: "neked.",
    t15_title: "Kreatív MI", t15_text: "A MI tud zenét szerezni, verseket írni, vagy új recepteket kitalálni.", t15_h1: "Művészet és MI.", t15_h2: "Új ötletek.", t15_q: "Lehet a MI valóban kreatív?", t15_qa: "Igen, új kombinációk révén", t15_qb: "Nem, soha", t15_qc: "Csak ha van árama", t15_qd: "Csak éjszaka",
    t10_inst: "Jelöld meg a szót, amiből a robotok tanulnak:", t10_tk1: "A modern", t10_tk2: "robotok", t10_tk3: "egyre többet", t10_tk4: "tanulnak", t10_tk5: "tapasztalatból.", t10_tk6: "",
    t15_inst: "Jelöld meg az új művészi alkotások szavát:", t15_tk1: "A MI", t15_tk2: "alkot", t15_tk3: "új", t15_tk4: "formákat", t15_tk5: "a", t15_tk6: "művészetben.", t15_tk7: ""
  },
  ro: {
    explorer_title: "Aplicații IA și Creativitate",
    t1_title: "Recunoașterea imaginilor", t1_text: "IA poate identifica obiecte în imagini, de exemplu distinge câinii de pisici.", t1_inst: "Potrivește perechile:", t1_h1: "Ce vede camera?", t1_h2: "Recunoașterea obiectelor.", t1_q: "Unde se folosește recunoașterea imaginilor?", t1_qa: "Scanare facială pe telefon", t1_qb: "Ascultând muzică", t1_qc: "La gătit", t1_qd: "În sacul de dormit",
    t1_l1: "Pixel", t1_r1: "Element de imagine", t1_l2: "Model", t1_r2: "Formă", t1_l3: "Etichetă", t1_r3: "Nume obiect",
    t2_title: "Procesarea limbajului natural", t2_text: "NLP permite IA să înțeleagă și să genereze limbaj uman.", t2_inst: "Completează spațiul liber:", t2_h1: "Vorbind cu mașinile.", t2_h2: "Abreviere NLP.", t2_q: "Ce înseamnă NLP?", t2_qa: "Natural Language Processing", t2_qb: "Net Loading Program", t2_qc: "New Logic Platform", t2_qd: "Protocol de citire",
    t2_sent: "Cu NLP, IA înțelege ___ noastră.", t2_qa2: "limba", t2_qb2: "încălțămintea", t2_qc2: "hardware-ul", t2_qd2: "factura",
    t3_title: "IA în jocuri", t3_text: "IA controlează inamicii în jocurile video sau ajută la găsirea drumului.", t3_inst: "Sortează în găleți:", t3_h1: "Jucător vs Computer.", t3_h2: "Comportament în joc.", t3_q: "Ce face o IA într-un shooter?", t3_qa: "Controlează inamicii", t3_qb: "Numără punctele", t3_qc: "Șterge jocul", t3_qd: "Răcește placa video",
    t3_bl1: "Acțiune", t3_bl2: "Decizie IA", t3_i1: "Jucătorul aleargă", t3_i2: "Inamicul se ascunde", t3_i3: "Apasă tasta", t3_i4: "Calculează drumul",
    t4_title: "Mașini autonome", t4_text: "Mașinile folosesc camere, lidar și IA pentru a detecta obstacolele și a naviga în siguranță.", t4_inst: "Pune cuvintele în ordine:", t4_h1: "Fără șofer.", t4_h2: "Siguranță prin senzori.", t4_q: "Care senzor este important pentru mașinile autonome?", t4_qa: "Lidar / Radar", t4_qb: "Radioul", t4_qc: "Claxonul", t4_qd: "Scrumiera",
    t4_w1: "Mașinile", t4_w2: "autonome", t4_w3: "reacționează", t4_w4: "în timp", t4_w5: "real", t4_w6: "la", t4_w7: "obstacole.",
    t5_title: "IA în medicină", t5_text: "IA ajută medicii să detecteze mai repede boli precum cancerul pe radiografii.", t5_h1: "Ajutor de diagnostic.", t5_h2: "Analiza imaginilor.", t5_q: "Care este un avantaj al IA în medicină?", t5_qa: "Depistarea timpurie", t5_qb: "Vindecare prin magie", t5_qc: "Mai puține paturi", t5_qd: "Pizza gratuită",
    t6_title: "Sisteme de recomandare", t6_text: "Algoritmii de pe YouTube sau Netflix îți sugerează videoclipuri care ți-ar putea plăcea.", t6_inst: "Potrivește perechile:", t6_h1: "Ce te uiți?", t6_h2: "Găsirea intereselor.", t6_q: "Cum învață YouTube gusturile tale?", t6_qa: "Din comportamentul tău de vizionare", t6_qb: "Aruncând zarurile", t6_qc: "Din numărul tău de telefon", t6_qd: "După vreme",
    t6_l1: "Istoric", t6_r1: "Videoclipuri vizionate", t6_l2: "Clasament", t6_r2: "Popularitate", t6_l3: "Sugestie", t6_r3: "Videoclip nou",
    t7_title: "IA generativă (imagini)", t7_text: "IA precum Midjourney pot crea imagini noi dintr-o descriere text (prompt).", t7_inst: "Completează spațiul liber:", t7_h1: "Text în imagine.", t7_h2: "Comandă de intrare.", t7_q: "Cum se numește textul introdus la IA de imagini?", t7_qa: "Prompt", t7_qb: "Parolă", t7_qc: "Email", t7_qd: "SMS",
    t7_sent: "Un ___ bun duce la imagini mai bune.", t7_qa2: "prompt", t7_qb2: "imprimantă", t7_qc2: "monitor", t7_qd2: "cafea",
    t8_title: "Modele lingvistice mari", t8_text: "LLM-urile (precum ChatGPT) au fost antrenate cu cantități uriașe de text pentru a purta dialoguri.", t8_inst: "Sortează în găleți:", t8_h1: "Ce poate face ChatGPT?", t8_h2: "Abilități text.", t8_q: "Ce înseamnă 'G' din GPT?", t8_qa: "Generative", t8_qb: "Mare", t8_qc: "Creier", t8_qd: "Global",
    t8_bl1: "Antrenare", t8_bl2: "Aplicare", t8_i1: "Miliarde de cuvinte", t8_i2: "Scrierea unui eseu", t8_i3: "Arhiva internetului", t8_i4: "Corectarea codului",
    t9_title: "Asistenți virtuali", t9_text: "Siri și Alexa folosesc recunoașterea vocii și IA pentru a-ți răspunde la întrebări.", t9_inst: "Pune cuvintele în ordine:", t9_h1: "Control vocal.", t9_h2: "Ajutor zilnic.", t9_q: "Cum activezi de obicei Alexa?", t9_qa: "Printr-un cuvânt de activare", t9_qb: "Bătând din palme", t9_qc: "Fluierând", t9_qd: "Dansând",
    t9_w1: "Asistenții", t9_w2: "digitali", t9_w3: "înțeleg", t9_w4: "foarte", t9_w5: "bine", t9_w6: "comenzile", t9_w7: "rostite.",
    t10_title: "IA în robotică", t10_text: "IA dă roboților 'ochi' și 'minte' pentru a se descurca în lume.", t10_h1: "Hardware + IA.", t10_h2: "Mișcare.", t10_q: "Ce îi permite IA unui robot?", t10_qa: "Adaptabilitate", t10_qb: "Viață veșnică", t10_qc: "Sentimente", t10_qd: "Un nume",
    t11_title: "Moderarea conținutului", t11_text: "IA ajută rețelele sociale să detecteze și să filtreze automat conținutul nepotrivit.", t11_inst: "Potrivește perechile:", t11_h1: "Internet curat.", t11_h2: "Reguli de filtrare.", t11_q: "De ce se folosește IA pentru moderare?", t11_qa: "Din cauza volumului de date", t11_qb: "Pentru că oamenii nu au ochi", t11_qc: "Pentru că economisește energie", t11_qd: "Ca să fie mai colorat",
    t11_l1: "Filtru", t11_r1: "Protecție", t11_l2: "Spam", t11_r2: "Nedorit", t11_l3: "Raport", t11_r3: "Sesizare",
    t12_title: "Deepfake-uri", t12_text: "IA poate crea videoclipuri înșelător de reale cu persoane care spun lucruri pe care nu le-au spus niciodată.", t12_inst: "Completează spațiul liber:", t12_h1: "Falsuri IA.", t12_h2: "Manipulare.", t12_q: "Ce este un deepfake?", t12_qa: "Un videoclip manipulat", t12_qb: "O farfurie adâncă", t12_qc: "O mașină rapidă", t12_qd: "Un sistem de operare nou",
    t12_sent: "Deepfake-urile pot fi folosite pentru ___.", t12_qa2: "înșelăciune", t12_qb2: "vindecare", t12_qc2: "răcire", t12_qd2: "curățare",
    t13_title: "Analiză predictivă", t13_text: "IA calculează probabilități pentru viitor, de exemplu vremea sau prețurile acțiunilor.", t13_inst: "Sortează în găleți:", t13_h1: "Predicție vs fapt.", t13_h2: "Probabilitate.", t13_q: "Ce face analiza predictivă?", t13_qa: "Prezice tendințe", t13_qb: "Șterge trecutul", t13_qc: "Oprește monitorul", t13_qd: "Pictează texte",
    t13_bl1: "Sursă de date", t13_bl2: "Predicție", t13_i1: "Date meteo", t13_i2: "Risc de ploaie", t13_i3: "Istoric de cumpărături", t13_i4: "Recomandare de cumpărare",
    t14_title: "Chatboți", t14_text: "Programe automate care discută cu clienții pentru a rezolva probleme simple.", t14_inst: "Pune cuvintele în ordine:", t14_h1: "Roboți de chat.", t14_h2: "Serviciu clienți.", t14_q: "Unde se găsesc de obicei chatboții?", t14_qa: "Pe site-uri web", t14_qb: "În frigider", t14_qc: "Pe stradă", t14_qd: "În pădure",
    t14_w1: "Un", t14_w2: "chatbot", t14_w3: "răspunde", t14_w4: "în", t14_w5: "orice", t14_w6: "moment", t14_w7: "al zilei.",
    t15_title: "IA creativă", t15_text: "IA poate compune muzică, scrie poezii sau inventa rețete noi de gătit.", t15_h1: "Artă și IA.", t15_h2: "Idei noi.", t15_q: "Poate IA să fie cu adevărat creativă?", t15_qa: "Da, prin combinații noi", t15_qb: "Nu, niciodată", t15_qc: "Doar dacă are curent", t15_qd: "Doar noaptea",
    t5_inst: "Evidențiază cuvântul pentru depistarea bolii:", t5_tk1: "IA", t5_tk2: "ajută", t5_tk3: "la", t5_tk4: "diagnosticul", t5_tk5: "bolilor.", t5_tk6: "",
    t10_inst: "Evidențiază cuvântul din care învață roboții:", t10_tk1: "Roboții", t10_tk2: "moderni", t10_tk3: "învață", t10_tk4: "din", t10_tk5: "experiență.", t10_tk6: "",
    t15_inst: "Evidențiază cuvântul pentru noile creații artistice:", t15_tk1: "IA", t15_tk2: "creează", t15_tk3: "noi", t15_tk4: "forme", t15_tk5: "de", t15_tk6: "artă.", t15_tk7: ""
  }
};

export const INFO_K8_I8_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "simple-icon", icon: "🖼️", color: "#4CAF50" },
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
    svg: { type: "icon-grid", items: [{emoji:"🎮",label:"Spieler"},{emoji:"🤖",label:"KI"}] },
    interactive: { type: "drag-to-bucket", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", buckets: [{id:"b1",label:"t3_bl1"},{id:"b2",label:"t3_bl2"}], items: [{text:"t3_i1",bucketId:"b1"},{text:"t3_i2",bucketId:"b2"},{text:"t3_i3",bucketId:"b1"},{text:"t3_i4",bucketId:"b2"}] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "🚗", color: "#607D8B" },
    interactive: { type: "word-order", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", words: ["t4_w1", "t4_w2", "t4_w3", "t4_w4", "t4_w5", "t4_w6", "t4_w7"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "🏥", color: "#F44336" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6"].filter(x=>x!==undefined), correctIndices: [3] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" }
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "simple-icon", icon: "🍿", color: "#FFC107" },
    interactive: { type: "match-pairs", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", pairs: [{left:"t6_l1",right:"t6_r1"},{left:"t6_l2",right:"t6_r2"},{left:"t6_l3",right:"t6_r3"}] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" }
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "🎨", color: "#E91E63" },
    interactive: { type: "gap-fill", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", sentence: "t7_sent", choices: ["t7_qa2", "t7_qb2", "t7_qc2", "t7_qd2"], correctIndex: 0 },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" }
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "icon-grid", items: [{emoji:"📚",label:"Training"},{emoji:"✍️",label:"Anwendung"}] },
    interactive: { type: "drag-to-bucket", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", buckets: [{id:"b1",label:"t8_bl1"},{id:"b2",label:"t8_bl2"}], items: [{text:"t8_i1",bucketId:"b1"},{text:"t8_i2",bucketId:"b2"},{text:"t8_i3",bucketId:"b1"},{text:"t8_i4",bucketId:"b2"}] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" }
  },
  {
    infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "simple-icon", icon: "🗣️", color: "#3F51B5" },
    interactive: { type: "word-order", instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2", words: ["t9_w1", "t9_w2", "t9_w3", "t9_w4", "t9_w5", "t9_w6", "t9_w7"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t9_q", choices: ["t9_qa", "t9_qb", "t9_qc", "t9_qd"], answer: "t9_qa" }
  },
  {
    infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "simple-icon", icon: "🦾", color: "#212121" },
    interactive: { type: "highlight-text", instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2", tokens: ["t10_tk1","t10_tk2","t10_tk3","t10_tk4","t10_tk5"].filter(x=>x!==""), correctIndices: [4] },
    quiz: { question: "t10_q", choices: ["t10_qa", "t10_qb", "t10_qc", "t10_qd"], answer: "t10_qa" }
  },
  {
    infoTitle: "t11_title", infoText: "t11_text",
    svg: { type: "simple-icon", icon: "🛡️", color: "#607D8B" },
    interactive: { type: "match-pairs", instruction: "t11_inst", hint1: "t11_h1", hint2: "t11_h2", pairs: [{left:"t11_l1",right:"t11_r1"},{left:"t11_l2",right:"t11_r2"},{left:"t11_l3",right:"t11_r3"}] },
    quiz: { question: "t11_q", choices: ["t11_qa", "t11_qb", "t11_qc", "t11_qd"], answer: "t11_qa" }
  },
  {
    infoTitle: "t12_title", infoText: "t12_text",
    svg: { type: "simple-icon", icon: "🎭", color: "#9C27B0" },
    interactive: { type: "gap-fill", instruction: "t12_inst", hint1: "t12_h1", hint2: "t12_h2", sentence: "t12_sent", choices: ["t12_qa2", "t12_qb2", "t12_qc2", "t12_qd2"], correctIndex: 0 },
    quiz: { question: "t12_q", choices: ["t12_qa", "t12_qb", "t12_qc", "t12_qd"], answer: "t12_qa" }
  },
  {
    infoTitle: "t13_title", infoText: "t13_text",
    svg: { type: "icon-grid", items: [{emoji:"📊",label:"Datenquelle"},{emoji:"🔮",label:"Vorhersage"}] },
    interactive: { type: "drag-to-bucket", instruction: "t13_inst", hint1: "t13_h1", hint2: "t13_h2", buckets: [{id:"b1",label:"t13_bl1"},{id:"b2",label:"t13_bl2"}], items: [{text:"t13_i1",bucketId:"b1"},{text:"t13_i2",bucketId:"b2"},{text:"t13_i3",bucketId:"b1"},{text:"t13_i4",bucketId:"b2"}] },
    quiz: { question: "t13_q", choices: ["t13_qa", "t13_qb", "t13_qc", "t13_qd"], answer: "t13_qa" }
  },
  {
    infoTitle: "t14_title", infoText: "t14_text",
    svg: { type: "simple-icon", icon: "💬", color: "#00BCD4" },
    interactive: { type: "word-order", instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2", words: ["t14_w1", "t14_w2", "t14_w3", "t14_w4", "t14_w5", "t14_w6", "t14_w7"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t14_q", choices: ["t14_qa", "t14_qb", "t14_qc", "t14_qd"], answer: "t14_qa" }
  },
  {
    infoTitle: "t15_title", infoText: "t15_text",
    svg: { type: "simple-icon", icon: "🎻", color: "#FF5722" },
    interactive: { type: "highlight-text", instruction: "t15_inst", hint1: "t15_h1", hint2: "t15_h2", tokens: ["t15_tk1","t15_tk2","t15_tk3","t15_tk4","t15_tk5","t15_tk6"].filter(x=>x!==""), correctIndices: [3] },
    quiz: { question: "t15_q", choices: ["t15_qa", "t15_qb", "t15_qc", "t15_qd"], answer: "t15_qa" }
  }
];

