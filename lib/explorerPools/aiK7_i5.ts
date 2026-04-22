import type { PoolTopicDef } from "./types";

export const INFO_K7_I5_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "KI Insel 5: Fortgeschrittene KI",
    t1_title: "Generative KI", t1_text: "KI, die neue Inhalte wie Texte, Bilder oder Musik erstellt.", t1_inst: "Ordne die Paare zu:", t1_h1: "Erschaffen statt nur erkennen.", t1_h2: "Moderne Modelle.", t1_q: "Was ist Generative KI?", t1_qa: "KI, die Inhalte erstellt", t1_qb: "KI, die nur löscht", t1_qc: "Ein Taschenrechner", t1_qd: "Ein altes Radio",
    t1_l1: "Text", t1_r1: "ChatGPT", t1_l2: "Bild", t1_r2: "Midjourney", t1_l3: "Code", t1_r3: "Copilot",
    t2_title: "ChatGPT & LLMs", t2_text: "Large Language Models (LLMs) sagen das nächste wahrscheinliche Wort voraus.", t2_inst: "Fülle die Lücke aus:", t2_h1: "Große Sprachmodelle.", t2_h2: "Wahrscheinlichkeiten.", t2_q: "Wofür steht GPT?", t2_qa: "Generative Pre-trained Transformer", t2_qb: "General Power Tool", t2_qc: "Global Point Tracker", t2_qd: "Great Photo Type",
    t2_sent: "LLMs sagen das nächste ___ in einem Satz voraus.", t2_qa2: "Wort", t2_qb2: "Wetter", t2_qc2: "Auto", t2_qd2: "Haus",
    t3_title: "KI-Kunst", t3_text: "KI kann Bilder aus Textbeschreibungen (Prompts) generieren.", t3_inst: "Sortiere in die Eimer:", t3_h1: "Prompting.", t3_h2: "Diffusion-Modelle.", t3_q: "Wie nennt man den Textbefehl für die KI?", t3_qa: "Prompt", t3_qb: "Brief", t3_qc: "Zahl", t3_qd: "Code",
    t3_bl1: "KI-Bild", t3_bl2: "Echtes Foto", t3_i1: "DALL-E Generation", t3_i2: "Kamera-Schnappschuss", t3_i3: "Stable Diffusion", t3_i4: "Urlaubsfoto",
    t4_title: "KI in der Medizin", t4_text: "KI hilft Ärzten, Krankheiten auf Röntgenbildern schneller zu finden.", t4_inst: "Bringe die Wörter in Ordnung:", t4_h1: "Diagnosehilfe.", t4_h2: "Präzision.", t4_q: "Was kann KI in der Medizin verbessern?", t4_qa: "Früherkennung", t4_qb: "Die Raumtemperatur", t4_qc: "Den Geschmack von Medizin", t4_qd: "Die Farbe des Krankenhauses",
    t4_w1: "KI", t4_w2: "erkennt", t4_w3: "Tumore", t4_w4: "auf", t4_w5: "Scans", t4_w6: "sehr", t4_w7: "genau.",
    t5_title: "Autonome Fahrzeuge", t5_text: "Selbstfahrende Autos nutzen Sensoren und KI, um den Verkehr zu verstehen.", t5_inst: "Markiere das richtige Wort:", t5_h1: "Ohne Fahrer.", t5_h2: "Sensordaten.", t5_q: "Welcher Sensor hilft beim Abstandhalten?", t5_qa: "Lidar", t5_qb: "Thermometer", t5_qc: "Barometer", t5_qd: "Mikrofon",
    t5_tk1: "Autonome", t5_tk2: "Autos", t5_tk3: "navigieren", t5_tk4: "mithilfe", t5_tk5: "von", t5_tk6: "Echtzeit-Daten.",
    t6_title: "Robotik und KI", t6_text: "KI gibt Robotern ein 'Gehirn', damit sie auf Umgebungen reagieren können.", t6_inst: "Ordne die Paare zu:", t6_h1: "Hardware + Software.", t6_h2: "Interaktion.", t6_q: "Was ist ein Vorteil von KI in Robotern?", t6_qa: "Anpassungsfähigkeit", t6_qb: "Sie brauchen mehr Strom", t6_qc: "Sie werden schwerer", t6_qd: "Sie glänzen mehr",
    t6_l1: "Sensor", t6_r1: "Auge", t6_l2: "KI", t6_r2: "Gehirn", t6_l3: "Motor", t6_r3: "Muskel",
    t7_title: "Computer Vision", t7_text: "Computer Vision ist die Fähigkeit von Maschinen, Bilder und Videos zu 'sehen'.", t7_inst: "Fülle die Lücke aus:", t7_h1: "Sehen verstehen.", t7_h2: "Objekterkennung.", t7_q: "Wo wird Computer Vision genutzt?", t7_qa: "QR-Code Scanner", t7_qb: "Radio", t7_qc: "Kühlschrank (normal)", t7_qd: "Taschenlampe",
    t7_sent: "Computer Vision erkennt ___ in digitalen Bildern.", t7_qa2: "Objekte", t7_qb2: "Geräusche", t7_qc2: "Düfte", t7_qd2: "Gefühle",
    t8_title: "Sprachsynthese", t8_text: "Technik, die geschriebenen Text in natürliche Sprache umwandelt (Text-to-Speech).", t8_inst: "Sortiere in die Eimer:", t8_h1: "Sprechen lernen.", t8_h2: "Stimm-KI.", t8_q: "Was macht Sprachsynthese?", t8_qa: "Text zu Ton", t8_qb: "Ton zu Text", t8_qc: "Bild zu Text", t8_qd: "Code zu Bild",
    t8_bl1: "Input", t8_bl2: "Output", t8_i1: "Satz", t8_i2: "Stimme", t8_i3: "Dokument", t8_i4: "Audio",
    t9_title: "Gesichtserkennung", t9_text: "KI identifiziert Personen anhand einzigartiger Merkmale ihres Gesichts.", t9_inst: "Bringe die Wörter in Ordnung:", t9_h1: "Biometrie.", t9_h2: "Sicherheit.", t9_q: "Wo nutzt man Gesichtserkennung?", t9_qa: "Smartphone-Sperre", t9_qb: "Fahrradschloss", t9_qc: "Haustür (Schlüssel)", t9_qd: "Briefumschlag",
    t9_w1: "Das", t9_w2: "Gesicht", t9_w3: "dient", t9_w4: "als", t9_w5: "digitaler", t9_w6: "Schlüssel", t9_w7: "für den Zugang.",
    t10_title: "KI in den Finanzen", t10_text: "KI erkennt Betrugsversuche beim Online-Banking in Millisekunden.", t10_inst: "Markiere das richtige Wort:", t10_h1: "Sicher bezahlen.", t10_h2: "Betrugserkennung.", t10_q: "Was prüft die KI bei Banken?", t10_qa: "Ungewöhnliche Muster", t10_qb: "Die Farbe der Karte", t10_qc: "Die Form des Geldautomaten", t10_qd: "Den Kontonamen",
    t10_tk1: "KI", t10_tk2: "schützt", t10_tk3: "Transaktionen", t10_tk4: "vor", t10_tk5: "digitalem", t10_tk6: "Betrug.",
    t11_title: "Predictive Analytics", t11_text: "KI nutzt Daten der Vergangenheit, um Zukünftiges vorherzusagen.", t11_inst: "Ordne die Paare zu:", t11_h1: "Vorhersage.", t11_h2: "Wahrscheinlichkeiten.", t11_q: "Ein Beispiel für Predictive Analytics?", t11_qa: "Wettervorhersage", t11_qb: "Live-Stream", t11_qc: "E-Mail schreiben", t11_qd: "Video löschen",
    t11_l1: "Gestern", t11_r1: "Daten sammeln", t11_l2: "Morgen", t11_r2: "Vorhersage", t11_l3: "Heute", t11_r3: "Analyse",
    t12_title: "Spiele-KI", t12_text: "KI besiegt Weltmeister in komplexen Spielen wie Go oder Schach.", t12_inst: "Fülle die Lücke aus:", t12_h1: "AlphaGo.", t12_h2: "Strategie.", t12_q: "Welches Spiel gilt als extrem schwer für KI?", t12_qa: "Go", t12_qb: "Tic-Tac-Toe", t12_qc: "Mensch ärgere dich nicht", t12_qd: "Mau-Mau",
    t12_sent: "Die KI ___ lernte durch Millionen von Spielen.", t12_qa2: "AlphaGo", t12_qb2: "Pacman", t12_qc2: "Mario", t12_qd2: "Tetris",
    t13_title: "Humanoide Roboter", t13_text: "Roboter, die in Form und Bewegung dem Menschen nachempfunden sind.", t13_inst: "Sortiere in die Eimer:", t13_h1: "Menschenähnlich.", t13_h2: "Androiden.", t13_q: "Ein bekannter humanoider Roboter?", t13_qa: "Atlas (Boston Dynamics)", t13_qb: "Ein Staubsauger", t13_qc: "Ein Toaster", t13_qd: "Ein Mixer",
    t13_bl1: "Humanoid", t13_bl2: "Industrie", t13_i1: "Gehender Roboter", t13_i2: "Schweiß-Arm", t13_i3: "Soziale Interaktion", t13_i4: "Förderband",
    t14_title: "Schwarmintelligenz", t14_text: "Viele kleine Roboter arbeiten zusammen wie Ameisen oder Bienen.", t14_inst: "Bringe die Wörter in Ordnung:", t14_h1: "Gemeinsam stark.", t14_h2: "Zusammenarbeit.", t14_q: "Was ist Schwarmintelligenz?", t14_qa: "Zusammenarbeit vieler Agenten", t14_qb: "Ein sehr schlaues Individuum", t14_qc: "Ein kaputter Roboter", t14_qd: "Internetgeschwindigkeit",
    t14_w1: "Kleine", t14_w2: "Drohnen", t14_w3: "bilden", t14_w4: "einen", t14_w5: "koordinierten", t14_w6: "Schwarm", t14_w7: "am Himmel.",
    t15_title: "Expertensysteme", t15_text: "Frühe KI-Systeme, die das Wissen von Experten in Regeln speichern.", t15_inst: "Markiere das richtige Wort:", t15_h1: "Regelbasiert.", t15_h2: "Wenn-Dann Logik.", t15_q: "Worauf basieren Expertensysteme?", t15_qa: "Wissensdatenbank", t15_qb: "Zufall", t15_qc: "Träume", t15_qd: "Magie",
    t15_tk1: "Expertensysteme", t15_tk2: "nutzen", t15_tk3: "logische", t15_tk4: "Regeln", t15_tk5: "für", t15_tk6: "Entscheidungen."
  },
  en: {
    explorer_title: "AI Island 5: Advanced AI",
    t1_title: "Generative AI", t1_text: "AI that creates new content such as text, images, or music.", t1_inst: "Match the pairs:", t1_h1: "Create instead of recognize.", t1_h2: "Modern models.", t1_q: "What is Generative AI?", t1_qa: "AI that creates content", t1_qb: "AI that only deletes", t1_qc: "A calculator", t1_qd: "An old radio",
    t1_l1: "Text", t1_r1: "ChatGPT", t1_l2: "Image", t1_r2: "Midjourney", t1_l3: "Code", t1_r3: "Copilot",
    t2_title: "ChatGPT & LLMs", t2_text: "Large Language Models (LLMs) predict the next likely word.", t2_inst: "Fill in the blank:", t2_h1: "Large language models.", t2_h2: "Probabilities.", t2_q: "What does GPT stand for?", t2_qa: "Generative Pre-trained Transformer", t2_qb: "General Power Tool", t2_qc: "Global Point Tracker", t2_qd: "Great Photo Type",
    t2_sent: "LLMs predict the next ___ in a sentence.", t2_qa2: "word", t2_qb2: "weather", t2_qc2: "car", t2_qd2: "house",
    t3_title: "AI Art", t3_text: "AI can generate images from text descriptions (prompts).", t3_inst: "Sort into buckets:", t3_h1: "Prompting.", t3_h2: "Diffusion models.", t3_q: "What is the text command for the AI called?", t3_qa: "Prompt", t3_qb: "Letter", t3_qc: "Number", t3_qd: "Code",
    t3_bl1: "AI Image", t3_bl2: "Real Photo", t3_i1: "DALL-E generation", t3_i2: "Camera snapshot", t3_i3: "Stable Diffusion", t3_i4: "Vacation photo",
    t4_title: "AI in Medicine", t4_text: "AI helps doctors find diseases on X-rays faster.", t4_inst: "Put the words in order:", t4_h1: "Diagnostic help.", t4_h2: "Precision.", t4_q: "What can AI improve in medicine?", t4_qa: "Early detection", t4_qb: "Room temperature", t4_qc: "Taste of medicine", t4_qd: "Hospital color",
    t4_w1: "AI", t4_w2: "recognizes", t4_w3: "tumors", t4_w4: "on", t4_w5: "scans", t4_w6: "very", t4_w7: "accurately.",
    t5_title: "Autonomous Vehicles", t5_text: "Self-driving cars use sensors and AI to understand traffic.", t5_inst: "Highlight the correct word:", t5_h1: "Without a driver.", t5_h2: "Sensor data.", t5_q: "Which sensor helps with distance?", t5_qa: "Lidar", t5_qb: "Thermometer", t5_qc: "Barometer", t5_qd: "Microphone",
    t5_tk1: "Autonomous", t5_tk2: "cars", t5_tk3: "navigate", t5_tk4: "using", t5_tk5: "real-time", t5_tk6: "data.",
    t6_title: "Robotics and AI", t6_text: "AI gives robots a 'brain' so they can react to environments.", t6_inst: "Match the pairs:", t6_h1: "Hardware + Software.", t6_h2: "Interaction.", t6_q: "What is an advantage of AI in robots?", t6_qa: "Adaptability", t6_qb: "Higher power use", t6_qc: "Heavier weight", t6_qd: "Shinier appearance",
    t6_l1: "Sensor", t6_r1: "Eye", t6_l2: "AI", t6_r2: "Brain", t6_l3: "Motor", t6_r3: "Muscle",
    t7_title: "Computer Vision", t7_text: "Computer Vision is the ability of machines to 'see' images and videos.", t7_inst: "Fill in the blank:", t7_h1: "Understanding seeing.", t7_h2: "Object recognition.", t7_q: "Where is Computer Vision used?", t7_qa: "QR code scanner", t7_qb: "Radio", t7_qc: "Fridge (normal)", t7_qd: "Flashlight",
    t7_sent: "Computer Vision recognizes ___ in digital images.", t7_qa2: "objects", t7_qb2: "sounds", t7_qc2: "scents", t7_qd2: "feelings",
    t8_title: "Speech Synthesis", t8_text: "Technology that converts written text into natural speech (Text-to-Speech).", t8_inst: "Sort into buckets:", t8_h1: "Learning to speak.", t8_h2: "Voice AI.", t8_q: "What does speech synthesis do?", t8_qa: "Text to sound", t8_qb: "Sound to text", t8_qc: "Image to text", t8_qd: "Code to image",
    t8_bl1: "Input", t8_bl2: "Output", t8_i1: "Sentence", t8_i2: "Voice", t8_i3: "Document", t8_i4: "Audio",
    t9_title: "Facial Recognition", t9_text: "AI identifies people based on unique features of their face.", t9_inst: "Put the words in order:", t9_h1: "Biometrics.", t9_h2: "Security.", t9_q: "Where is facial recognition used?", t9_qa: "Smartphone unlock", t9_qb: "Bike lock", t9_qc: "Front door (key)", t9_qd: "Envelope",
    t9_w1: "The", t9_w2: "face", t9_w3: "serves", t9_w4: "as", t9_w5: "a", t9_w6: "digital", t9_w7: "key.",
    t10_title: "AI in Finance", t10_text: "AI detects fraud attempts in online banking within milliseconds.", t10_inst: "Highlight the correct word:", t10_h1: "Secure payments.", t10_h2: "Fraud detection.", t10_q: "What does AI check at banks?", t10_qa: "Unusual patterns", t10_qb: "Card color", t10_qc: "ATM shape", t10_qd: "Account name",
    t10_tk1: "AI", t10_tk2: "protects", t10_tk3: "transactions", t10_tk4: "from", t10_tk5: "digital", t10_tk6: "fraud.",
    t11_title: "Predictive Analytics", t11_text: "AI uses past data to predict future events.", t11_inst: "Match the pairs:", t11_h1: "Prediction.", t11_h2: "Probabilities.", t11_q: "An example of Predictive Analytics?", t11_qa: "Weather forecast", t11_qb: "Live stream", t11_qc: "Writing email", t11_qd: "Deleting video",
    t11_l1: "Yesterday", t11_r1: "Collect data", t11_l2: "Tomorrow", t11_r2: "Prediction", t11_l3: "Today", t11_r3: "Analysis",
    t12_title: "Game AI", t12_text: "AI defeats world champions in complex games like Go or chess.", t12_inst: "Fill in the blank:", t12_h1: "AlphaGo.", t12_h2: "Strategy.", t12_q: "Which game is extremely hard for AI?", t12_qa: "Go", t12_qb: "Tic-Tac-Toe", t12_qc: "Ludo", t12_qd: "Card games",
    t12_sent: "The AI ___ learned by playing millions of games.", t12_qa2: "AlphaGo", t12_qb2: "Pacman", t12_qc2: "Mario", t12_qd2: "Tetris",
    t13_title: "Humanoid Robots", t13_text: "Robots designed to look and move like humans.", t13_inst: "Sort into buckets:", t13_h1: "Human-like.", t13_h2: "Androids.", t13_q: "A well-known humanoid robot?", t13_qa: "Atlas (Boston Dynamics)", t13_qb: "A vacuum cleaner", t13_qc: "A toaster", t13_qd: "A mixer",
    t13_bl1: "Humanoid", t13_bl2: "Industrial", t13_i1: "Walking robot", t13_i2: "Welding arm", t13_i3: "Social interaction", t13_i4: "Conveyor belt",
    t14_title: "Swarm Intelligence", t14_text: "Many small robots working together like ants or bees.", t14_inst: "Put the words in order:", t14_h1: "Strong together.", t14_h2: "Collaboration.", t14_q: "What is swarm intelligence?", t14_qa: "Collaboration of many agents", t14_qb: "One very smart individual", t14_qc: "A broken robot", t14_qd: "Internet speed",
    t14_w1: "Small", t14_w2: "drones", t14_w3: "form", t14_w4: "a", t14_w5: "coordinated", t14_w6: "swarm", t14_w7: "in the sky.",
    t15_title: "Expert Systems", t15_text: "Early AI systems that store expert knowledge in rules.", t15_inst: "Highlight the correct word:", t15_h1: "Rule-based.", t15_h2: "If-then logic.", t15_q: "What are expert systems based on?", t15_qa: "Knowledge base", t15_qb: "Randomness", t15_qc: "Dreams", t15_qd: "Magic",
    t15_tk1: "Expert", t15_tk2: "systems", t15_tk3: "use", t15_tk4: "logical", t15_tk5: "rules", t15_tk6: "for", t15_tk7: "decisions."
  },
  hu: {
    explorer_title: "MI Sziget 5: Haladó MI",
    t1_title: "Generatív MI", t1_text: "Olyan MI, amely új tartalmakat, például szöveget, képet vagy zenét hoz létre.", t1_inst: "Párosítsd össze:", t1_h1: "Alkotás felismerés helyett.", t1_h2: "Modern modellek.", t1_q: "Mi a Generatív MI?", t1_qa: "MI, ami tartalmat gyárt", t1_qb: "MI, ami csak töröl", t1_qc: "Egy számológép", t1_qd: "Egy régi rádió",
    t1_l1: "Szöveg", t1_r1: "ChatGPT", t1_l2: "Kép", t1_r2: "Midjourney", t1_l3: "Kód", t1_r3: "Copilot",
    t2_title: "ChatGPT & LLM-ek", t2_text: "A Large Language Models (LLM) a következő legvalószínűbb szót jósolják meg.", t2_inst: "Töltsd ki a hiányt:", t2_h1: "Nagy nyelvi modellek.", t2_h2: "Valószínűségek.", t2_q: "Mit jelent a GPT?", t2_qa: "Generative Pre-trained Transformer", t2_qb: "General Power Tool", t2_qc: "Global Point Tracker", t2_qd: "Great Photo Type",
    t2_sent: "Az LLM-ek a következő ___ jósolják meg egy mondatban.", t2_qa2: "szót", t2_qb2: "időjárást", t2_qc2: "autót", t2_qd2: "házat",
    t3_title: "MI művészet", t3_text: "A MI képes képeket generálni szöveges leírásokból (promptokból).", t3_inst: "Válogasd szét:", t3_h1: "Promp-tolás.", t3_h2: "Diffúziós modellek.", t3_q: "Hogy hívják a MI-nek adott szöveges utasítást?", t3_qa: "Prompt", t3_qb: "Levél", t3_qc: "Szám", t3_qd: "Kód",
    t3_bl1: "MI kép", t3_bl2: "Valódi fotó", t3_i1: "DALL-E generáció", t3_i2: "Kamerás pillanatkép", t3_i3: "Stable Diffusion", t3_i4: "Nyaralási fotó",
    t4_title: "MI az orvoslásban", t4_text: "A MI segít az orvosoknak gyorsabban megtalálni a betegségeket a röntgenképeken.", t4_inst: "Tedd sorrendbe a szavakat:", t4_h1: "Diagnosztikai segítség.", t4_h2: "Precízió.", t4_q: "Mit javíthat a MI az orvoslásban?", t4_qa: "Korai felismerés", t4_qb: "Szobahőmérséklet", t4_qc: "Gyógyszer íze", t4_qd: "Kórház színe",
    t4_w1: "A MI", t4_w2: "nagyon", t4_w3: "pontosan", t4_w4: "felismeri", t4_w5: "a tumorokat", t4_w6: "a", t4_w7: "felvételeken.",
    t5_title: "Önvezető járművek", t5_text: "Az önvezető autók szenzorokat és MI-t használnak a forgalom megértéséhez.", t5_inst: "Jelöld meg a helyes szót:", t5_h1: "Sofőr nélkül.", t5_h2: "Szenzoradatok.", t5_q: "Melyik szenzor segít a távolságtartásban?", t5_qa: "Lidar", t5_qb: "Hőmérő", t5_qc: "Barométer", t5_qd: "Mikrofon",
    t5_tk1: "Az önvezető", t5_tk2: "autók", t5_tk3: "valós", t5_tk4: "idejű", t5_tk5: "adatokkal", t5_tk6: "navigálnak.",
    t6_title: "Robotika és MI", t6_text: "A MI 'agyat' ad a robotoknak, hogy reagálni tudjanak a környezetükre.", t6_inst: "Párosítsd össze:", t6_h1: "Hardver + Szoftver.", t6_h2: "Interakció.", t6_q: "Mi a MI előnye a robotokban?", t6_qa: "Alkalmazkodóképesség", t6_qb: "Több áramot fogyasztanak", t6_qc: "Nehezebbek lesznek", t6_qd: "Fényesebbek",
    t6_l1: "Szenzor", t6_r1: "Szem", t6_l2: "MI", t6_r2: "Agy", t6_l3: "Motor", t6_r3: "Izom",
    t7_title: "Számítógépes látás", t7_text: "A Computer Vision a gépek azon képessége, hogy 'lássanak' képeket és videókat.", t7_inst: "Töltsd ki a hiányt:", t7_h1: "Látás megértése.", t7_h2: "Objektumfelismerés.", t7_q: "Hol használják?", t7_qa: "QR-kód olvasó", t7_qb: "Rádió", t7_qc: "Hűtőszekrény (sima)", t7_qd: "Zseblámpa",
    t7_sent: "A számítógépes látás ___ ismer fel digitális képeken.", t7_qa2: "tárgyakat", t7_qb2: "hangokat", t7_qc2: "szagokat", t7_qd2: "érzéseket",
    t8_title: "Beszédszintézis", t8_text: "Technológia, amely az írott szöveget természetes beszéddé alakítja (Text-to-Speech).", t8_inst: "Válogasd szét:", t8_h1: "Beszélni tanulás.", t8_h2: "Hang-MI.", t8_q: "Mit csinál a beszédszintézis?", t8_qa: "Szövegből hangot", t8_qb: "Hangból szöveget", t8_qc: "Képből szöveget", t8_qd: "Kódból képet",
    t8_bl1: "Bevitel", t8_bl2: "Kivitel", t8_i1: "Mondat", t8_i2: "Hang", t8_i3: "Dokumentum", t8_i4: "Audió",
    t9_title: "Arcfelismerés", t9_text: "A MI az arc egyedi jellemzői alapján azonosítja a személyeket.", t9_inst: "Tedd sorrendbe a szavakat:", t9_h1: "Biometria.", t9_h2: "Biztonság.", t9_q: "Hol használják?", t9_qa: "Mobil feloldása", t9_qb: "Kerékpárzár", t9_qc: "Bejárati ajtó (kulcs)", t9_qd: "Boríték",
    t9_w1: "Az", t9_w2: "arc", t9_w3: "digitális", t9_w4: "kulcsként", t9_w5: "szolgál", t9_w6: "a", t9_w7: "hozzáféréshez.",
    t10_title: "MI a pénzügyekben", t10_text: "A MI milliszekundumok alatt felismeri a csalási kísérleteket a bankolásban.", t10_inst: "Jelöld meg a helyes szót:", t10_h1: "Biztonságos fizetés.", t10_h2: "Csalásfelismerés.", t10_q: "Mit ellenőriz a MI a bankoknál?", t10_qa: "Szokatlan minták", t10_qb: "Kártya színe", t10_qc: "ATM formája", t10_qd: "Számla neve",
    t10_tk1: "A MI", t10_tk2: "megvédi", t10_tk3: "a tranzakciókat", t10_tk4: "a digitális", t10_tk5: "csalásoktól.",
    t11_title: "Prediktív analitika", t11_text: "A MI múltbéli adatokat használ a jövőbeli események megjósolására.", t11_inst: "Párosítsd össze:", t11_h1: "Jóslás.", t11_h2: "Valószínűségek.", t11_q: "Példa a prediktív analitikára?", t11_qa: "Időjárás-jelentés", t11_qb: "Élő adás", t11_qc: "E-mail írás", t11_qd: "Videó törlése",
    t11_l1: "Tegnap", t11_r1: "Adatgyűjtés", t11_l2: "Holnap", t11_r2: "Előrejelzés", t11_l3: "Ma", t11_r3: "Elemzés",
    t12_title: "Játék MI", t12_text: "A MI legyőzi a világbajnokokat olyan komplex játékokban, mint a Go vagy a sakk.", t12_inst: "Töltsd ki a hiányt:", t12_h1: "AlphaGo.", t12_h2: "Stratégia.", t12_q: "Melyik játék extrém nehéz a MI-nek?", t12_qa: "Go", t12_qb: "Amőba", t12_qc: "Ki nevet a végén", t12_qd: "Kártyajátékok",
    t12_sent: "Az ___ MI több millió játék során tanult.", t12_qa2: "AlphaGo", t12_qb2: "Pacman", t12_qc2: "Mario", t12_qd2: "Tetris",
    t13_title: "Humánoid robotok", t13_text: "Robotok, amiket az ember alakjára és mozgására terveztek.", t13_inst: "Válogasd szét:", t13_h1: "Emberszerű.", t13_h2: "Androidok.", t13_q: "Egy ismert humánoid robot?", t13_qa: "Atlas (Boston Dynamics)", t13_qb: "Porszívó", t13_qc: "Kenyérpirító", t13_qd: "Mixer",
    t13_bl1: "Humánoid", t13_bl2: "Ipari", t13_i1: "Sétáló robot", t13_i2: "Hegesztőkar", t13_i3: "Szociális interakció", t13_i4: "Futószalag",
    t14_title: "Schwarmintelligenz", t14_text: "Sok kis robot dolgozik együtt, mint a hangyák vagy a méhek.", t14_inst: "Tedd sorrendbe a szavakat:", t14_h1: "Együtt erősek.", t14_h2: "Együttműködés.", t14_q: "Mi a rajintelligencia?", t14_qa: "Sok ágens együttműködése", t14_qb: "Egy nagyon okos egyén", t14_qc: "Egy elromlott robot", t14_qd: "Internet sebesség",
    t14_w1: "Kicsi", t14_w2: "drónok", t14_w3: "összehangolt", t14_w4: "rajt", t14_w5: "alkotnak", t14_w6: "az", t14_w7: "égen.",
    t15_title: "Szakértői rendszerek", t15_text: "Korai MI rendszerek, amelyek szakértők tudását tárolják szabályokban.", t15_inst: "Jelöld meg a helyes szót:", t15_h1: "Szabályalapú.", t15_h2: "Ha-akkor logika.", t15_q: "Min alapulnak a szakértői rendszerek?", t15_qa: "Tudásbázis", t15_qb: "Véletlen", t15_qc: "Álmok", t15_qd: "Mágia",
    t15_tk1: "A szakértői", t15_tk2: "rendszerek", t15_tk3: "logikai", t15_tk4: "szabályokat", t15_tk5: "használnak."
  },
  ro: {
    explorer_title: "IA Insula 5: IA Avansată",
    t1_title: "IA Generativă", t1_text: "IA care creează conținut nou, cum ar fi text, imagini sau muzică.", t1_inst: "Potrivește perechile:", t1_h1: "Creație în loc de recunoaștere.", t1_h2: "Modele moderne.", t1_q: "Ce este IA Generativă?", t1_qa: "IA care creează conținut", t1_qb: "IA care doar șterge", t1_qc: "Un calculator", t1_qd: "Un radio vechi",
    t1_l1: "Text", t1_r1: "ChatGPT", t1_l2: "Imagine", t1_r2: "Midjourney", t1_l3: "Cod", t1_r3: "Copilot",
    t2_title: "ChatGPT & LLM-uri", t2_text: "Large Language Models (LLM) prezic următorul cuvânt probabil.", t2_inst: "Completează spațiul liber:", t2_h1: "Modele de limbaj mari.", t2_h2: "Probabilități.", t2_q: "Ce înseamnă GPT?", t2_qa: "Generative Pre-trained Transformer", t2_qb: "General Power Tool", t2_qc: "Global Point Tracker", t2_qd: "Great Photo Type",
    t2_sent: "LLM-urile prezic următorul ___ într-o propoziție.", t2_qa2: "cuvânt", t2_qb2: "vreme", t2_qc2: "mașină", t2_qd2: "casă",
    t3_title: "Artă prin IA", t3_text: "IA poate genera imagini din descrieri text (prompturi).", t3_inst: "Sortează în găleți:", t3_h1: "Prompting.", t3_h2: "Modele de difuzie.", t3_q: "Cum se numește comanda text pentru IA?", t3_qa: "Prompt", t3_qb: "Scrisoare", t3_qc: "Număr", t3_qd: "Cod",
    t3_bl1: "Imagine IA", t3_bl2: "Foto reală", t3_i1: "Generare DALL-E", t3_i2: "Instantaneu cameră", t3_i3: "Stable Diffusion", t3_i4: "Foto vacanță",
    t4_title: "IA în medicină", t4_text: "IA ajută medicii să găsească boli pe radiografii mai rapid.", t4_inst: "Pune cuvintele în ordine:", t4_h1: "Ajutor diagnostic.", t4_h2: "Precizie.", t4_q: "Ce poate îmbunătăți IA în medicină?", t4_qa: "Detectare timpurie", t4_qb: "Temperatura camerei", t4_qc: "Gustul medicinei", t4_qd: "Culoarea spitalului",
    t4_w1: "IA", t4_w2: "recunoaște", t4_w3: "tumorile", t4_w4: "pe", t4_w5: "scanări", t4_w6: "foarte", t4_w7: "precis.",
    t5_title: "Vehicule autonome", t5_text: "Mașinile autonome folosesc senzori și IA pentru a înțelege traficul.", t5_inst: "Evidențiază cuvântul corect:", t5_h1: "Fără șofer.", t5_h2: "Date senzori.", t5_q: "Care senzor ajută la distanță?", t5_qa: "Lidar", t5_qb: "Termometru", t5_qc: "Barometru", t5_qd: "Microfon",
    t5_tk1: "Mașinile", t5_tk2: "autonome", t5_tk3: "navighează", t5_tk4: "folosind", t5_tk5: "date", t5_tk6: "în timp real.",
    t6_title: "Robotică și IA", t6_text: "IA oferă roboților un 'creier' pentru a reacționa la mediu.", t6_inst: "Potrivește perechile:", t6_h1: "Hardware + Software.", t6_h2: "Interacțiune.", t6_q: "Care este un avantaj al IA în roboți?", t6_qa: "Adaptabilitate", t6_qb: "Consum mai mare", t6_qc: "Greutate mai mare", t6_qd: "Aspect mai lucios",
    t6_l1: "Senzor", t6_r1: "Ochi", t6_l2: "IA", t6_r2: "Creier", t6_l3: "Motor", t6_r3: "Mușchi",
    t7_title: "Viziune computerizată", t7_text: "Computer Vision este capacitatea mașinilor de a 'vedea' imagini și video.", t7_inst: "Completează spațiul liber:", t7_h1: "Înțelegerea vederii.", t7_h2: "Recunoaștere obiecte.", t7_q: "Unde este folosită?", t7_qa: "Scanner cod QR", t7_qb: "Radio", t7_qc: "Frigider (normal)", t7_qd: "Lanternă",
    t7_sent: "Computer Vision recunoaște ___ în imagini digitale.", t7_qa2: "obiecte", t7_qb2: "sunete", t7_qc2: "parfumuri", t7_qd2: "sentimente",
    t8_title: "Sinteză vocală", t8_text: "Tehnologie care convertește textul scris în vorbire naturală (Text-to-Speech).", t8_inst: "Sortează în găleți:", t8_h1: "Învățarea vorbirii.", t8_h2: "IA vocală.", t8_q: "Ce face sinteza vocală?", t8_qa: "Text în sunet", t8_qb: "Sunet în text", t8_qc: "Imagine în text", t8_qd: "Cod în imagine",
    t8_bl1: "Intrare", t8_bl2: "Ieșire", t8_i1: "Propoziție", t8_i2: "Voce", t8_i3: "Document", t8_i4: "Audio",
    t9_title: "Recunoaștere facială", t9_text: "IA identifică persoane pe baza trăsăturilor unice ale feței.", t9_inst: "Pune cuvintele în ordine:", t9_h1: "Biometrie.", t9_h2: "Securitate.", t9_q: "Unde se folosește?", t9_qa: "Deblocare telefon", t9_qb: "Antifurt bicicletă", t9_qc: "Ușă (cheie)", t9_qd: "Plic",
    t9_w1: "Fața", t9_w2: "servește", t9_w3: "drept", t9_w4: "cheie", t9_w5: "digitală", t9_w6: "pentru", t9_w7: "acces.",
    t10_title: "IA în finanțe", t10_text: "IA detectează tentative de fraudă în banking în milisecunde.", t10_inst: "Evidențiază cuvântul corect:", t10_h1: "Plăți sigure.", t10_h2: "Detectare fraudă.", t10_q: "Ce verifică IA la bănci?", t10_qa: "Tipare neobișnuite", t10_qb: "Culoarea cardului", t10_qc: "Forma ATM", t10_qd: "Nume cont",
    t10_tk1: "IA", t10_tk2: "protejează", t10_tk3: "tranzacțiile", t10_tk4: "de", t10_tk5: "frauda", t10_tk6: "digitală.",
    t11_title: "Analiză predictivă", t11_text: "IA folosește date din trecut pentru a prezice evenimente viitoare.", t11_inst: "Potrivește perechile:", t11_h1: "Predicție.", t11_h2: "Probabilități.", t11_q: "Exemplu de analiză predictivă?", t11_qa: "Prognoza meteo", t11_qb: "Live stream", t11_qc: "Scriere e-mail", t11_qd: "Ștergere video",
    t11_l1: "Ieri", t11_r1: "Colectare date", t11_l2: "Mâine", t11_r2: "Predicție", t11_l3: "Azi", t11_r3: "Analiză",
    t12_title: "IA în jocuri", t12_text: "IA învinge campioni mondiali în jocuri complexe ca Go sau șah.", t12_inst: "Completează spațiul liber:", t12_h1: "AlphaGo.", t12_h2: "Strategie.", t12_q: "Care joc e extrem de greu pentru IA?", t12_qa: "Go", t12_qb: "X și 0", t12_qc: "Nu te supăra frate", t12_qd: "Jocuri cărți",
    t12_sent: "IA ___ a învățat jucând milioane de partide.", t12_qa2: "AlphaGo", t12_qb2: "Pacman", t12_qc2: "Mario", t12_qd2: "Tetris",
    t13_title: "Roboți umanoizi", t13_text: "Roboți concepuți să arate și să se miște ca oamenii.", t13_inst: "Sortează în găleți:", t13_h1: "Asemănător omului.", t13_h2: "Androizi.", t13_q: "Un robot umanoid cunoscut?", t13_qa: "Atlas (Boston Dynamics)", t13_qb: "Aspirator", t13_qc: "Prăjitor", t13_qd: "Mixer",
    t13_bl1: "Umanoid", t13_bl2: "Industrial", t13_i1: "Robot mergător", t13_i2: "Braț sudură", t13_i3: "Interacțiune socială", t13_i4: "Bandă rulantă",
    t14_title: "Inteligența de roi", t14_text: "Mulți roboți mici care lucrează împreună ca furnicile sau albinele.", t14_inst: "Pune cuvintele în ordine:", t14_h1: "Puternici împreună.", t14_h2: "Colaborare.", t14_q: "Ce este inteligența de roi?", t14_qa: "Colaborarea multor agenți", t14_qb: "Un individ foarte deștept", t14_qc: "Un robot stricat", t14_qd: "Viteză internet",
    t14_w1: "Dronele", t14_w2: "mici", t14_w3: "formează", t14_w4: "un", t14_w5: "roi", t14_w6: "coordonat", t14_w7: "pe cer.",
    t15_title: "Sisteme expert", t15_text: "Sisteme IA timpurii care stochează cunoștințele experților în reguli.", t15_inst: "Evidențiază cuvântul corect:", t15_h1: "Bazat pe reguli.", t15_h2: "Logica dacă-atunci.", t15_q: "Pe ce se bazează sistemele expert?", t15_qa: "Bază de cunoștințe", t15_qb: "Hazard", t15_qc: "Vise", t15_qd: "Magie",
    t15_tk1: "Sistemele", t15_tk2: "expert", t15_tk3: "folosesc", t15_tk4: "reguli", t15_tk5: "logice", t15_tk6: "pentru", t15_tk7: "decizii."
  }
};

export const INFO_K7_I5_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "simple-icon", icon: "🎨", color: "#E91E63" },
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
    svg: { type: "icon-grid", items: [{emoji:"🖼️",label:"AI Art"},{emoji:"📸",label:"Photo"}] },
    interactive: { type: "drag-to-bucket", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", buckets: [{id:"b1",label:"t3_bl1"},{id:"b2",label:"t3_bl2"}], items: [{text:"t3_i1",bucketId:"b1"},{text:"t3_i2",bucketId:"b2"},{text:"t3_i3",bucketId:"b1"},{text:"t3_i4",bucketId:"b2"}] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "🏥", color: "#F44336" },
    interactive: { type: "word-order", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", words: ["t4_w1", "t4_w2", "t4_w3", "t4_w4", "t4_w5", "t4_w6", "t4_w7"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6].slice(0, 7) },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "🚗", color: "#607D8B" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6"].filter(x=>x!==undefined), correctIndices: [0] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" }
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "simple-icon", icon: "🤖", color: "#9E9E9E" },
    interactive: { type: "match-pairs", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", pairs: [{left:"t6_l1",right:"t6_r1"},{left:"t6_l2",right:"t6_r2"},{left:"t6_l3",right:"t6_r3"}] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" }
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "📷", color: "#00BCD4" },
    interactive: { type: "gap-fill", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", sentence: "t7_sent", choices: ["t7_qa2", "t7_qb2", "t7_qc2", "t7_qd2"], correctIndex: 0 },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" }
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "icon-grid", items: [{emoji:"📥",label:"Input"},{emoji:"🔊",label:"Output"}] },
    interactive: { type: "drag-to-bucket", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", buckets: [{id:"b1",label:"t8_bl1"},{id:"b2",label:"t8_bl2"}], items: [{text:"t8_i1",bucketId:"b1"},{text:"t8_i2",bucketId:"b2"},{text:"t8_i3",bucketId:"b1"},{text:"t8_i4",bucketId:"b2"}] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" }
  },
  {
    infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "simple-icon", icon: "👤", color: "#3F51B5" },
    interactive: { type: "word-order", instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2", words: ["t9_w1", "t9_w2", "t9_w3", "t9_w4", "t9_w5", "t9_w6", "t9_w7"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6].slice(0, 7) },
    quiz: { question: "t9_q", choices: ["t9_qa", "t9_qb", "t9_qc", "t9_qd"], answer: "t9_qa" }
  },
  {
    infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "simple-icon", icon: "💰", color: "#4CAF50" },
    interactive: { type: "highlight-text", instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2", tokens: ["t10_tk1","t10_tk2","t10_tk3","t10_tk4","t10_tk5","t10_tk6"].filter(x=>x!==undefined), correctIndices: [0] },
    quiz: { question: "t10_q", choices: ["t10_qa", "t10_qb", "t10_qc", "t10_qd"], answer: "t10_qa" }
  },
  {
    infoTitle: "t11_title", infoText: "t11_text",
    svg: { type: "simple-icon", icon: "🔮", color: "#9C27B0" },
    interactive: { type: "match-pairs", instruction: "t11_inst", hint1: "t11_h1", hint2: "t11_h2", pairs: [{left:"t11_l1",right:"t11_r1"},{left:"t11_l2",right:"t11_r2"},{left:"t11_l3",right:"t11_r3"}] },
    quiz: { question: "t11_q", choices: ["t11_qa", "t11_qb", "t11_qc", "t11_qd"], answer: "t11_qa" }
  },
  {
    infoTitle: "t12_title", infoText: "t12_text",
    svg: { type: "simple-icon", icon: "🎮", color: "#FF5722" },
    interactive: { type: "gap-fill", instruction: "t12_inst", hint1: "t12_h1", hint2: "t12_h2", sentence: "t12_sent", choices: ["t12_qa2", "t12_qb2", "t12_qc2", "t12_qd2"], correctIndex: 0 },
    quiz: { question: "t12_q", choices: ["t12_qa", "t12_qb", "t12_qc", "t12_qd"], answer: "t12_qa" }
  },
  {
    infoTitle: "t13_title", infoText: "t13_text",
    svg: { type: "icon-grid", items: [{emoji:"🏃",label:"Humanoid"},{emoji:"🏗️",label:"Industrial"}] },
    interactive: { type: "drag-to-bucket", instruction: "t13_inst", hint1: "t13_h1", hint2: "t13_h2", buckets: [{id:"b1",label:"t13_bl1"},{id:"b2",label:"t13_bl2"}], items: [{text:"t13_i1",bucketId:"b1"},{text:"t13_i2",bucketId:"b2"},{text:"t13_i3",bucketId:"b1"},{text:"t13_i4",bucketId:"b2"}] },
    quiz: { question: "t13_q", choices: ["t13_qa", "t13_qb", "t13_qc", "t13_qd"], answer: "t13_qa" }
  },
  {
    infoTitle: "t14_title", infoText: "t14_text",
    svg: { type: "simple-icon", icon: "🐝", color: "#FFEB3B" },
    interactive: { type: "word-order", instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2", words: ["t14_w1", "t14_w2", "t14_w3", "t14_w4", "t14_w5", "t14_w6", "t14_w7"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6].slice(0, 7) },
    quiz: { question: "t14_q", choices: ["t14_qa", "t14_qb", "t14_qc", "t14_qd"], answer: "t14_qa" }
  },
  {
    infoTitle: "t15_title", infoText: "t15_text",
    svg: { type: "simple-icon", icon: "🧠", color: "#FF9800" },
    interactive: { type: "highlight-text", instruction: "t15_inst", hint1: "t15_h1", hint2: "t15_h2", tokens: ["t15_tk1","t15_tk2","t15_tk3","t15_tk4","t15_tk5","t15_tk6","t15_tk7"].filter(x=>x!==undefined), correctIndices: [0] },
    quiz: { question: "t15_q", choices: ["t15_qa", "t15_qb", "t15_qc", "t15_qd"], answer: "t15_qa" }
  }
];
