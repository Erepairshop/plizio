// @ts-nocheck
// lib/explorerPools/aiK6_i8.ts
import type { PoolTopicDef } from "./types";

export const INFO_K6_I8_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Moderne KI-Anwendungen",
    t1_title: "Große Sprachmodelle (LLMs)", t1_text: "LLMs wie GPT sind KIs, die riesige Mengen Text gelesen haben und nun wie Menschen schreiben können.", t1_inst: "Verbinde die Fakten:", t1_h1: "Viel Text.", t1_h2: "Sprache verstehen.", t1_q: "Wofür steht LLM?", t1_qa: "Large Language Model", t1_qb: "Little Logic Machine", t1_qc: "Long Learning Method", t1_qd: "Light Language Mode",
    t1_l1: "Input", t1_r1: "Deine Frage", t1_l2: "LLM", t1_r2: "Verarbeitet Wissen", t1_l3: "Output", t1_r3: "Die Antwort",
    t2_title: "Chatbots & ChatGPT", t2_text: "Ein Chatbot ist ein Computerprogramm, mit dem man sich wie mit einer Person unterhalten kann.", t2_inst: "Fülle die Lücke aus:", t2_h1: "Unterhaltung per Text.", t2_h2: "Frage und Antwort.", t2_q: "Was ist ChatGPT?", t2_qa: "Ein KI-Chatbot", t2_qb: "Ein Computerspiel", t2_qc: "Ein Internetbrowser", t2_qd: "Ein Video-Editor",
    t2_sent: "Wir können mit einem Chatbot in ___ kommunizieren.", t2_qa2: "Echtzeit", t2_qb2: "Gedanken", t2_qc2: "Briefen", t2_qd2: "Träumen",
    t3_title: "Generative Kunst", t3_text: "KI kann aus einer Textbeschreibung völlig neue Bilder erschaffen.", t3_inst: "Sortiere die Kunstformen:", t3_h1: "Was erschafft die KI?", t3_h2: "Bilder oder Texte.", t3_q: "Wie nennt man ein Bild-KI-Programm?", t3_qa: "DALL-E", t3_qb: "Excel", t3_qc: "PowerPoint", t3_qd: "Chrome",
    t3_bl1: "Text-zu-Bild", t3_bl2: "Text-zu-Text", t3_i1: "Midjourney", t3_i2: "ChatGPT", t3_i3: "Stable Diffusion", t3_i4: "Claude",
    t4_title: "Prompt Engineering", t4_text: "Ein Prompt ist der Befehl, den wir der KI geben. Je genauer er ist, desto besser ist das Ergebnis.", t4_inst: "Bringe den Satz in Ordnung:", t4_h1: "Gute Fragen stellen.", t4_h2: "Anweisungen geben.", t4_q: "Was ist ein Prompt?", t4_qa: "Ein Eingabebefehl", t4_qb: "Ein Computervirus", t4_qc: "Ein Hardware-Teil", t4_qd: "Ein Bildpunkt",
    t4_w1: "Ein", t4_w2: "guter", t4_w3: "Prompt", t4_w4: "liefert", t4_w5: "präzise", t4_w6: "KI-Ergebnisse.", t4_w7: "",
    t5_title: "Deepfakes", t5_text: "Deepfakes sind täuschend echte, aber künstlich erzeugte Videos oder Fotos von Personen.", t5_inst: "Markiere das Wort für Fälschung:", t5_h1: "Nicht echt.", t5_h2: "Manipulation.", t5_q: "Warum muss man bei Deepfakes vorsichtig sein?", t5_qa: "Sie verbreiten Fake News", t5_qb: "Sie verbrauchen zu viel Strom", t5_qc: "Sie löschen Dateien", t5_qd: "Sie machen den PC langsam",
    t5_tk1: "Deepfakes", t5_tk2: "können", t5_tk3: "Menschen", t5_tk4: "Dinge", t5_tk5: "sagen", t5_tk6: "lassen,", t5_tk7: "die", t5_tk8: "sie", t5_tk9: "nie", t5_tk10: "gesagt", t5_tk11: "haben.",
    t6_title: "KI in der Musik", t6_text: "KI kann Melodien komponieren und Instrumente imitieren.", t6_inst: "Zähle die Noten:", t6_h1: "Klick die Musiknoten an.", t6_h2: "KI-Komposition.", t6_q: "Kann KI Musik machen?", t6_qa: "Ja, sie kann komponieren", t6_qb: "Nein, nie", t6_qc: "Nur wenn sie Strom hat", t6_qd: "Nur Schlagzeug",
    t6_c: "6",
    t7_title: "KI in Spielen", t7_text: "KI steuert Gegner oder erschafft automatisch riesige Spielewelten.", t7_inst: "Verbinde die Funktionen:", t7_h1: "Spielspaß durch Technik.", t7_h2: "Gegner oder Welten.", t7_q: "Was macht KI in Videospielen?", t7_qa: "Charaktere steuern", t7_qb: "Den Monitor putzen", t7_qc: "Den Spieler beleidigen", t7_qd: "Kabel sortieren",
    t7_l1: "NPCs", t7_r1: "Computer-Charaktere", t7_l2: "Prozedural", t7_r2: "Zufällige Welten", t7_l3: "Adaptive KI", t7_r3: "Passt Schwierigkeit an",
    t8_title: "Empfehlungssysteme", t8_text: "KIs auf YouTube oder Netflix schlagen dir vor, was du als nächstes sehen möchtest.", t8_inst: "Fülle die Lücke aus:", t8_h1: "Was dir gefällt.", t8_h2: "Algorithmen raten.", t8_q: "Wie weiß Netflix, was ich mag?", t8_qa: "Durch meinen Verlauf", t8_qb: "Durch Raten", t8_qc: "Durch meine Adresse", t8_qd: "Durch Zauberei",
    t8_sent: "Die KI nutzt meine ___ für neue Vorschläge.", t8_qa2: "Interessen", t8_qb2: "Hausaufgaben", t8_qc2: "Schuhgröße", t8_qd2: "Noten",
    t9_title: "Autonome Fahrzeuge", t9_text: "Selbstfahrende Autos nutzen KI, um den Verkehr zu erkennen und sicher zu lenken.", t9_inst: "Sortiere die Sensoren:", t9_h1: "Was sieht das Auto?", t9_h2: "Abstand und Bilder.", t9_q: "Was steuert ein autonomes Auto?", t9_qa: "Eine KI", t9_qb: "Ein Fernsteuerung", t9_qc: "Ein unsichtbarer Geist", t9_qd: "Nur der Fahrer",
    t9_bl1: "Kameras", t9_bl2: "Radar/Lidar", t9_i1: "Schilder", t9_i2: "Abstand", t9_i3: "Ampeln", t9_i4: "Hindernisse",
    t10_title: "KI in der Medizin", t10_text: "KI hilft Ärzten, Krankheiten auf Röntgenbildern schneller zu finden.", t10_inst: "Bringe den Ablauf in Ordnung:", t10_h1: "Gesundheit.", t10_h2: "Diagnose.", t10_q: "Wie unterstützt KI Ärzte?", t10_qa: "Bilder analysieren", t10_qb: "OP-Tische putzen", t10_qc: "Kaffee kochen", t10_qd: "Blumen gießen",
    t10_w1: "KI", t10_w2: "erkennt", t10_w3: "Krankheiten", t10_w4: "oft", t10_w5: "sehr", t10_w6: "frühzeitig.", t10_w7: "",
    t11_title: "Wettervorhersage", t11_text: "KI analysiert Millionen Wetterdaten, um Stürme präziser vorherzusagen.", t11_inst: "Markiere das Wort für Wetter:", t11_h1: "Sonne oder Regen.", t11_h2: "Klima.", t11_q: "Warum ist KI gut fürs Wetter?", t11_qa: "Sie berechnet Datenmengen", t11_qb: "Sie macht die Sonne an", t11_qc: "Sie stoppt den Regen", t11_qd: "Sie fliegt zum Mond",
    t11_tk1: "Meteorologen", t11_tk2: "nutzen", t11_tk3: "KI", t11_tk4: "für", t11_tk5: "genaue", t11_tk6: "Vorhersagen.",
    t12_title: "Smart Homes", t12_text: "KI steuert Licht und Heizung automatisch, um Energie zu sparen.", t12_inst: "Zähle die Lampen:", t12_h1: "Energie sparen.", t12_h2: "Helles Licht.", t12_q: "Was macht ein Smart Home?", t12_qa: "Hausgeräte vernetzen", t12_qb: "Selbst aufräumen", t12_qc: "Hausaufgaben machen", t12_qd: "Kochen",
    t12_c: "7",
    t13_title: "Personalisiertes Lernen", t13_text: "KI-Lernprogramme passen sich deinem Tempo und deinen Fehlern an.", t13_inst: "Verbinde die Vorteile:", t13_h1: "Besser lernen.", t13_h2: "Dein eigener Weg.", t13_q: "Was ist der Vorteil von KI beim Lernen?", t13_qa: "Individuelle Hilfe", t13_qb: "Keine Tests mehr", t13_qc: "Man muss nichts tun", t13_qd: "Es gibt Schokolade",
    t13_l1: "Schwer", t13_r1: "KI gibt Tipps", t13_l2: "Leicht", t13_r2: "KI geht weiter", t13_l3: "Fehler", t13_r3: "KI erklärt neu",
    t14_title: "Virtuelle Assistenten", t14_text: "Digitale Helfer planen Termine und beantworten Fragen im Haushalt.", t14_inst: "Fülle die Lücke aus:", t14_h1: "Hilfe per Stimme.", t14_h2: "Organisation.", t14_q: "Welches ist ein virtueller Assistent?", t14_qa: "Alexa", t14_qb: "Ein Hammer", t14_qc: "Ein Buch", t14_qd: "Ein Stuhl",
    t14_sent: "Virtuelle Assistenten verstehen unsere ___.", t14_qa2: "Stimme", t14_qb2: "Gedanken", t14_qc2: "Schrift", t14_qd2: "Farbe",
    t15_title: "Kreative KI", t15_text: "KI kann Gedichte schreiben, Geschichten erfinden und Logos entwerfen.", t15_inst: "Sortiere die kreativen Aufgaben:", t15_h1: "KI als Künstler.", t15_h2: "Was entsteht?", t15_q: "Kann KI kreativ sein?", t15_qa: "Ja, sie kombiniert Wissen", t15_qb: "Nein, sie kann nur Mathe", t15_qc: "Nur wenn sie schläft", t15_qd: "Nur Schwarz-Weiß",
    t15_bl1: "Schreiben", t15_bl2: "Design", t15_i1: "Gedichte", t15_i2: "Logos", t15_i3: "Storys", t15_i4: "Grafik"
  },
  en: {
    explorer_title: "Modern AI Applications",
    t1_title: "Large Language Models (LLMs)", t1_text: "LLMs like GPT are AIs that have read huge amounts of text and can now write like humans.", t1_inst: "Connect the facts:", t1_h1: "Lots of text.", t1_h2: "Understanding language.", t1_q: "What does LLM stand for?", t1_qa: "Large Language Model", t1_qb: "Little Logic Machine", t1_qc: "Long Learning Method", t1_qd: "Light Language Mode",
    t1_l1: "Input", t1_r1: "Your question", t1_l2: "LLM", t1_r2: "Processes knowledge", t1_l3: "Output", t1_r3: "The answer",
    t2_title: "Chatbots & ChatGPT", t2_text: "A chatbot is a computer program that you can talk to like a person.", t2_inst: "Fill in the blank:", t2_h1: "Conversation via text.", t2_h2: "Question and answer.", t2_q: "What is ChatGPT?", t2_qa: "An AI chatbot", t2_qb: "A computer game", t2_qc: "An internet browser", t2_qd: "A video editor",
    t2_sent: "We can communicate with a chatbot in ___.", t2_qa2: "real time", t2_qb2: "thoughts", t2_qc2: "letters", t2_qd2: "dreams",
    t3_title: "Generative Art", t3_text: "AI can create completely new images from a text description.", t3_inst: "Sort the art forms:", t3_h1: "What does the AI create?", t3_h2: "Images or texts.", t3_q: "What is an image AI program called?", t3_qa: "DALL-E", t3_qb: "Excel", t3_qc: "PowerPoint", t3_qd: "Chrome",
    t3_bl1: "Text-to-Image", t3_bl2: "Text-to-Text", t3_i1: "Midjourney", t3_i2: "ChatGPT", t3_i3: "Stable Diffusion", t3_i4: "Claude",
    t4_title: "Prompt Engineering", t4_text: "A prompt is the command we give the AI. The more precise it is, the better the result.", t4_inst: "Put the sentence in order:", t4_h1: "Ask good questions.", t4_h2: "Give instructions.", t4_q: "What is a prompt?", t4_qa: "An input command", t4_qb: "A computer virus", t4_qc: "A hardware part", t4_qd: "A pixel",
    t4_w1: "A", t4_w2: "good", t4_w3: "prompt", t4_w4: "provides", t4_w5: "precise", t4_w6: "AI", t4_w7: "results.",
    t5_title: "Deepfakes", t5_text: "Deepfakes are deceptively real but artificially generated videos or photos of people.", t5_inst: "Highlight the word for forgery:", t5_h1: "Not real.", t5_h2: "Manipulation.", t5_q: "Why should you be careful with deepfakes?", t5_qa: "They spread fake news", t5_qb: "They use too much power", t5_qc: "They delete files", t5_qd: "They slow down the PC",
    t5_tk1: "Deepfakes", t5_tk2: "can", t5_tk3: "make", t5_tk4: "people", t5_tk5: "say", t5_tk6: "things", t5_tk7: "they", t5_tk8: "never", t5_tk9: "said.",
    t6_title: "AI in Music", t6_text: "AI can compose melodies and imitate instruments.", t6_inst: "Count the notes:", t6_h1: "Click on the music notes.", t6_h2: "AI composition.", t6_q: "Can AI make music?", t6_qa: "Yes, it can compose", t6_qb: "No, never", t6_qc: "Only if it has power", t6_qd: "Only drums",
    t6_c: "6",
    t7_title: "AI in Games", t7_text: "AI controls opponents or automatically creates huge game worlds.", t7_inst: "Connect the functions:", t7_h1: "Fun through technology.", t7_h2: "Opponents or worlds.", t7_q: "What does AI do in video games?", t7_qa: "Control characters", t7_qb: "Clean the monitor", t7_qc: "Insult the player", t7_qd: "Sort cables",
    t7_l1: "NPCs", t7_r1: "Computer characters", t7_l2: "Procedural", t7_r2: "Random worlds", t7_l3: "Adaptive AI", t7_r3: "Adjusts difficulty",
    t8_title: "Recommendation Systems", t8_text: "AIs on YouTube or Netflix suggest what you might want to watch next.", t8_inst: "Fill in the blank:", t8_h1: "What you like.", t8_h2: "Algorithms guess.", t8_q: "How does Netflix know what I like?", t8_qa: "Through my history", t8_qb: "By guessing", t8_qc: "By my address", t8_qd: "By magic",
    t8_sent: "The AI uses my ___ for new suggestions.", t8_qa2: "interests", t8_qb2: "homework", t8_qc2: "shoe size", t8_qd2: "grades",
    t9_title: "Autonomous Vehicles", t9_text: "Self-driving cars use AI to recognize traffic and steer safely.", t9_inst: "Sort the sensors:", t9_h1: "What does the car see?", t9_h2: "Distance and images.", t9_q: "What controls an autonomous car?", t9_qa: "An AI", t9_qb: "A remote control", t9_qc: "An invisible ghost", t9_qd: "Only the driver",
    t9_bl1: "Cameras", t9_bl2: "Radar/Lidar", t9_i1: "Signs", t9_i2: "Distance", t9_i3: "Lights", t9_i4: "Obstacles",
    t10_title: "AI in Medicine", t10_text: "AI helps doctors find diseases on X-rays faster.", t10_inst: "Put the process in order:", t10_h1: "Health.", t10_h2: "Diagnosis.", t10_q: "How does AI support doctors?", t10_qa: "Analyze images", t10_qb: "Clean OP tables", t10_qc: "Make coffee", t10_qd: "Water flowers",
    t10_w1: "AI", t10_w2: "detects", t10_w3: "diseases", t10_w4: "often", t10_w5: "very", t10_w6: "early.", t10_w7: "",
    t11_title: "Weather Forecast", t11_text: "AI analyzes millions of weather data points to predict storms more accurately.", t11_inst: "Highlight the word for weather:", t11_h1: "Sun or rain.", t11_h2: "Climate.", t11_q: "Why is AI good for the weather?", t11_qa: "It calculates data volumes", t11_qb: "It turns on the sun", t11_qc: "It stops the rain", t11_qd: "It flies to the moon",
    t11_tk1: "Meteorologists", t11_tk2: "use", t11_tk3: "AI", t11_tk4: "for", t11_tk5: "accurate", t11_tk6: "forecasts.",
    t12_title: "Smart Homes", t12_text: "AI controls lighting and heating automatically to save energy.", t12_inst: "Count the lamps:", t12_h1: "Save energy.", t12_h2: "Bright light.", t12_q: "What does a smart home do?", t12_qa: "Network home devices", t12_qb: "Clean up itself", t12_qc: "Do homework", t12_qd: "Cook",
    t12_c: "7",
    t13_title: "Personalized Learning", t13_text: "AI learning programs adapt to your pace and your mistakes.", t13_inst: "Connect the benefits:", t13_h1: "Learn better.", t13_h2: "Your own path.", t13_q: "What is the benefit of AI in learning?", t13_qa: "Individual help", t13_qb: "No more tests", t13_qc: "You don't have to do anything", t13_qd: "There is chocolate",
    t13_l1: "Hard", t13_r1: "AI gives tips", t13_l2: "Easy", t13_r2: "AI moves on", t13_l3: "Error", t13_r3: "AI explains again",
    t14_title: "Virtual Assistants", t14_text: "Digital helpers schedule appointments and answer household questions.", t14_inst: "Fill in the blank:", t14_h1: "Help by voice.", t14_h2: "Organization.", t14_q: "Which one is a virtual assistant?", t14_qa: "Alexa", t14_qb: "A hammer", t14_qc: "A book", t14_qd: "A chair",
    t14_sent: "Virtual assistants understand our ___.", t14_qa2: "voice", t14_qb2: "thoughts", t14_qc2: "writing", t14_qd2: "color",
    t15_title: "Creative AI", t15_text: "AI can write poems, invent stories, and design logos.", t15_inst: "Sort the creative tasks:", t15_h1: "AI as an artist.", t15_h2: "What is created?", t15_q: "Can AI be creative?", t15_qa: "Yes, it combines knowledge", t15_qb: "No, it only does math", t15_qc: "Only when it sleeps", t15_qd: "Only black and white",
    t15_bl1: "Writing", t15_bl2: "Design", t15_i1: "Poems", t15_i2: "Logos", t15_i3: "Stories", t15_i4: "Graphics"
  },
  hu: {
    explorer_title: "Modern MI alkalmazások",
    t1_title: "Nagy nyelvi modellek (LLM)", t1_text: "Az LLM-ek (mint a GPT) olyan MI-k, amelyek rengeteg szöveget olvastak, és tudnak úgy írni, mint az emberek.", t1_inst: "Kösd össze a tényeket:", t1_h1: "Sok szöveg.", t1_h2: "Nyelv megértése.", t1_q: "Mit jelent az LLM?", t1_qa: "Large Language Model", t1_qb: "Little Logic Machine", t1_qc: "Long Learning Method", t1_qd: "Light Language Mode",
    t1_l1: "Bevitel", t1_r1: "A te kérdésed", t1_l2: "LLM", t1_r2: "Feldolgozza a tudást", t1_l3: "Kimenet", t1_r3: "A válasz",
    t2_title: "Chatbotok és ChatGPT", t2_text: "A chatbot egy olyan program, amivel úgy beszélgethetünk, mintha egy ember lenne.", t2_inst: "Töltsd ki a hiányt:", t2_h1: "Beszélgetés szöveggel.", t2_h2: "Kérdés és válasz.", t2_q: "Mi a ChatGPT?", t2_qa: "Egy MI chatbot", t2_qb: "Egy számítógépes játék", t2_qc: "Egy böngésző", t2_qd: "Egy videószerkesztő",
    t2_sent: "A chatbottal ___ időben kommunikálhatunk.", t2_qa2: "valós", t2_qb2: "gondolati", t2_qc2: "levél", t2_qd2: "álom",
    t3_title: "Generatív művészet", t3_text: "A MI képes teljesen új képeket létrehozni egy szöveges leírás alapján.", t3_inst: "Válogasd szét a formákat:", t3_h1: "Mit hoz létre a MI?", t3_h2: "Képek vagy szövegek.", t3_q: "Hogy hívják az egyik ismert képgeneráló MI-t?", t3_qa: "DALL-E", t3_qb: "Excel", t3_qc: "PowerPoint", t3_qd: "Chrome",
    t3_bl1: "Szöveg-kép", t3_bl2: "Szöveg-szöveg", t3_i1: "Midjourney", t3_i2: "ChatGPT", t3_i3: "Stable Diffusion", t3_i4: "Claude",
    t4_title: "Prompt engineering", t4_text: "A prompt az az utasítás, amit a MI-nek adunk. Minél pontosabb, annál jobb az eredmény.", t4_inst: "Tedd sorrendbe a mondatot:", t4_h1: "Kérdezz jól.", t4_h2: "Adj utasítást.", t4_q: "Mi az a prompt?", t4_qa: "Egy beviteli parancs", t4_qb: "Egy vírus", t4_qc: "Egy hardver elem", t4_qd: "Egy képpont",
    t4_w1: "A", t4_w2: "jó", t4_w3: "prompt", t4_w4: "pontos", t4_w5: "eredményt", t4_w6: "hoz", t4_w7: "létre.",
    t5_title: "Deepfake", t5_text: "A deepfake-ek megtévesztően valódi, de mesterségesen generált videók vagy fotók emberekről.", t5_inst: "Jelöld meg a hamisításra utaló szót:", t5_h1: "Nem igazi.", t5_h2: "Manipuláció.", t5_q: "Miért veszélyes a deepfake?", t5_qa: "Álhíreket terjeszthet", t5_qb: "Sok áramot fogyaszt", t5_qc: "Törli a fájlokat", t5_qd: "Lassítja a gépet",
    t5_tk1: "A deepfake", t5_tk2: "képes", t5_tk3: "olyat", t5_tk4: "mondatni", t5_tk5: "emberekkel,", t5_tk6: "amit", t5_tk7: "sosem", t5_tk8: "mondtak.",
    t6_title: "MI a zenében", t6_text: "A MI képes dallamokat komponálni és hangszereket utánozni.", t6_inst: "Számold meg a hangjegyeket:", t6_h1: "Kattints a hangjegyekre.", t6_h2: "MI zeneszerzés.", t6_q: "Tud a MI zenét szerezni?", t6_qa: "Igen, képes rá", t6_qb: "Nem, soha", t6_qc: "Csak ha van áram", t6_qd: "Csak dobolni",
    t6_c: "6",
    t7_title: "MI a játékokban", t7_text: "A MI irányítja az ellenfeleket vagy automatikusan hoz létre hatalmas világokat.", t7_inst: "Kösd össze a funkciókat:", t7_h1: "Játékélmény technológiával.", t7_h2: "Ellenfelek vagy világok.", t7_q: "Mit csinál a MI a játékokban?", t7_qa: "Karaktereket irányít", t7_qb: "Takarítja a monitort", t7_qc: "Szidja a játékost", t7_qd: "Kábeleket válogat",
    t7_l1: "NPC", t7_r1: "Gép irányította karakter", t7_l2: "Procedurális", t7_r2: "Véletlen világok", t7_l3: "Adaptív MI", t7_r3: "Állítja a nehézséget",
    t8_title: "Ajánlórendszerek", t8_text: "A YouTube vagy Netflix MI-je javasolja neked, mit nézz meg legközelebb.", t8_inst: "Töltsd ki a hiányt:", t8_h1: "Ami tetszik neked.", t8_h2: "Algoritmusok tippelnek.", t8_q: "Honnan tudja a Netflix, mit szeretek?", t8_qa: "Az előzményeimből", t8_qb: "Tippel", t8_qc: "A címem alapján", t8_qd: "Varázslat",
    t8_sent: "A MI az ___ alapján tesz javaslatot.", t8_qa2: "érdeklődésem", t8_qb2: "házim", t8_qc2: "cipőméretem", t8_qd2: "jegyeim",
    t9_title: "Önvezető járművek", t9_text: "Az önvezető autók MI-t használnak a forgalom felismeréséhez és a kormányzáshoz.", t9_inst: "Válogasd szét a szenzorokat:", t9_h1: "Mit lát az autó?", t9_h2: "Távolság és képek.", t9_q: "Mi irányítja az önvezető autót?", t9_qa: "Egy MI", t9_qb: "Távirányító", t9_qc: "Egy láthatatlan szellem", t9_qd: "Csak a sofőr",
    t9_bl1: "Kamerák", t9_bl2: "Radar/Lidar", t9_i1: "Táblák", t9_i2: "Távolság", t9_i3: "Lámpák", t9_i4: "Akadályok",
    t10_title: "MI az orvoslásban", t10_text: "A MI segít az orvosoknak gyorsabban felismerni a betegségeket a röntgenképeken.", t10_inst: "Tedd sorrendbe a folyamatot:", t10_h1: "Egészség.", t10_h2: "Diagnózis.", t10_q: "Hogyan segít a MI az orvosoknak?", t10_qa: "Elemzi a képeket", t10_qb: "Takarít a műtőben", t10_qc: "Kávét főz", t10_qd: "Virágot locsol",
    t10_w1: "A MI", t10_w2: "gyakran", t10_w3: "nagyon", t10_w4: "korán", t10_w5: "felismeri", t10_w6: "a", t10_w7: "bajokat.",
    t11_title: "Időjárásjóslás", t11_text: "A MI több millió adatot elemez, hogy pontosabban jelezze előre a viharokat.", t11_inst: "Jelöld meg az időjárásra utaló szót:", t11_h1: "Nap vagy eső.", t11_h2: "Klíma.", t11_q: "Miért jó a MI az időjáráshoz?", t11_qa: "Kiszámítja az adatokat", t11_qb: "Bekapcsolja a Napot", t11_qc: "Megállítja az esőt", t11_qd: "Holdra repül",
    t11_tk1: "A meteorológusok", t11_tk2: "MI-t", t11_tk3: "használnak", t11_tk4: "a", t11_tk5: "pontos", t11_tk6: "jósláshoz.",
    t12_title: "Okosotthonok", t12_text: "A MI automatikusan vezérli a fényt és a fűtést az energiatakarékosság jegyében.", t12_inst: "Számold meg a lámpákat:", t12_h1: "Spórolj energiát.", t12_h2: "Világos van.", t12_q: "Mit csinál egy okosotthon?", t12_qa: "Összeköti az eszközöket", t12_qb: "Magától rendet rak", t12_qc: "Megírja a házit", t12_qd: "Főz",
    t12_c: "7",
    t13_title: "Személyre szabott tanulás", t13_text: "A MI-alapú tanulóprogramok alkalmazkodnak a tempódhoz és a hibáidhoz.", t13_inst: "Kösd össze az előnyöket:", t13_h1: "Tanulj jobban.", t13_h2: "A saját utad.", t13_q: "Mi az előnye a MI-nek a tanulásban?", t13_qa: "Egyéni segítség", t13_qb: "Nincsenek tesztek", t13_qc: "Semmit sem kell tenni", t13_qd: "Csokit ad",
    t13_l1: "Nehéz", t13_r1: "MI tippeket ad", t13_l2: "Könnyű", t13_r2: "MI továbbmegy", t13_l3: "Hiba", t13_r3: "MI újra elmagyarázza",
    t14_title: "Virtuális asszisztensek", t14_text: "A digitális segítők naptárat kezelnek és válaszolnak a kérdésekre a házban.", t14_inst: "Töltsd ki a hiányt:", t14_h1: "Segítség hanggal.", t14_h2: "Szervezés.", t14_q: "Melyik egy virtuális asszisztens?", t14_qa: "Alexa", t14_qb: "Egy kalapács", t14_qc: "Egy könyv", t14_qd: "Egy szék",
    t14_sent: "A virtuális asszisztensek megértik a ___.", t14_qa2: "hangunkat", t14_qb2: "gondolatunkat", t14_qc2: "írásunkat", t14_qd2: "színünket",
    t15_title: "Kreatív MI", t15_text: "A MI tud verseket írni, meséket kitalálni és logókat tervezni.", t15_inst: "Válogasd szét a feladatokat:", t15_h1: "MI mint művész.", t15_h2: "Mi jön létre?", t15_q: "Lehet kreatív a MI?", t15_qa: "Igen, kombinálja a tudást", t15_qb: "Nem, csak matekozni tud", t15_qc: "Csak ha alszik", t15_qd: "Csak fekete-fehérben",
    t15_bl1: "Írás", t15_bl2: "Design", t15_i1: "Versek", t15_i2: "Logók", t15_i3: "Mesék", t15_i4: "Grafikák"
  },
  ro: {
    explorer_title: "Aplicații Moderne IA",
    t1_title: "Modele de Limbaj Mari (LLM)", t1_text: "LLM-urile precum GPT sunt IA-uri care au citit cantități enorme de text și acum pot scrie ca oamenii.", t1_inst: "Conectează faptele:", t1_h1: "Mult text.", t1_h2: "Înțelegerea limbajului.", t1_q: "Ce înseamnă LLM?", t1_qa: "Large Language Model", t1_qb: "Little Logic Machine", t1_qc: "Long Learning Method", t1_qd: "Light Language Mode",
    t1_l1: "Input", t1_r1: "Întrebarea ta", t1_l2: "LLM", t1_r2: "Procesează cunoștințele", t1_l3: "Output", t1_r3: "Răspunsul",
    t2_title: "Chatboți & ChatGPT", t2_text: "Un chatbot este un program de calculator cu care poți vorbi ca și cu o persoană.", t2_inst: "Completează spațiul liber:", t2_h1: "Conversație prin text.", t2_h2: "Întrebare și răspuns.", t2_q: "Ce este ChatGPT?", t2_qa: "Un chatbot IA", t2_qb: "Un joc pe calculator", t2_qc: "Un browser web", t2_qd: "Un editor video",
    t2_sent: "Putem comunica cu un chatbot în timp ___.", t2_qa2: "real", t2_qb2: "mental", t2_qc2: "scris", t2_qd2: "visat",
    t3_title: "Artă Generativă", t3_text: "IA poate crea imagini complet noi dintr-o descriere text.", t3_inst: "Sortează formele de artă:", t3_h1: "Ce creează IA?", t3_h2: "Imagini sau texte.", t3_q: "Cum se numește un program IA de imagini?", t3_qa: "DALL-E", t3_qb: "Excel", t3_qc: "PowerPoint", t3_qd: "Chrome",
    t3_bl1: "Text-în-Imagine", t3_bl2: "Text-în-Text", t3_i1: "Midjourney", t3_i2: "ChatGPT", t3_i3: "Stable Diffusion", t3_i4: "Claude",
    t4_title: "Prompt engineering", t4_text: "Un prompt este comanda pe care o dăm IA. Cu cât este mai precisă, cu atât rezultatul este mai bun.", t4_inst: "Pune propoziția în ordine:", t4_h1: "Pune întrebări bune.", t4_h2: "Dă instrucțiuni.", t4_q: "Ce este un prompt?", t4_qa: "O comandă de intrare", t4_qb: "Un virus", t4_qc: "O piesă hardware", t4_qd: "Un pixel",
    t4_w1: "Un", t4_w2: "prompt", t4_w3: "bun", t4_w4: "oferă", t4_w5: "rezultate", t4_w6: "IA", t4_w7: "precise.",
    t5_title: "Deepfake", t5_text: "Deepfake-urile sunt videoclipuri sau fotografii cu oameni, create artificial, care par incredibil de reale.", t5_inst: "Evidențiază cuvântul pentru fals:", t5_h1: "Nu e real.", t5_h2: "Manipulare.", t5_q: "De ce trebuie să fim atenți la deepfake?", t5_qa: "Pot răspândi știri false", t5_qb: "Consumă prea mult curent", t5_qc: "Șterg fișiere", t5_qd: "Încetinesc PC-ul",
    t5_tk1: "Deepfake-urile", t5_tk2: "pot", t5_tk3: "face", t5_tk4: "oamenii", t5_tk5: "să", t5_tk6: "spună", t5_tk7: "lucruri", t5_tk8: "neadevărate.",
    t6_title: "IA în muzică", t6_text: "IA poate compune melodii și poate imita instrumente muzicale.", t6_inst: "Numără notele:", t6_h1: "Apasă pe notele muzicale.", t6_h2: "Compoziție IA.", t6_q: "Poate IA să facă muzică?", t6_qa: "Da, poate compune", t6_qb: "Nu, niciodată", t6_qc: "Doar dacă are curent", t6_qd: "Doar tobe",
    t6_c: "6",
    t7_title: "IA în jocuri", t7_text: "IA controlează adversarii sau creează automat lumi de joc uriașe.", t7_inst: "Conectează funcțiile:", t7_h1: "Distracție prin tehnologie.", t7_h2: "Adversari sau lumi.", t7_q: "Ce face IA în jocurile video?", t7_qa: "Controlează caractere", t7_qb: "Curăță monitorul", t7_qc: "Insultă jucătorul", t7_qd: "Sortează cabluri",
    t7_l1: "NPC", t7_r1: "Caractere controlate de calculator", t7_l2: "Procedural", t7_r2: "Lumi aleatorii", t7_l3: "IA Adaptivă", t7_r3: "Reglează dificultatea",
    t8_title: "Sisteme de recomandare", t8_text: "IA-urile de pe YouTube sau Netflix îți sugerează ce să urmărești în continuare.", t8_inst: "Completează spațiul liber:", t8_h1: "Ce îți place.", t8_h2: "Algoritmii ghicesc.", t8_q: "Cum știe Netflix ce îmi place?", t8_qa: "Prin istoricul meu", t8_qb: "Prin ghicit", t8_qc: "Prin adresa mea", t8_qd: "Prin magie",
    t8_sent: "IA folosește ___ mele pentru sugestii noi.", t8_qa2: "interesele", t8_qb2: "temele", t8_qc2: "mărimea la pantofi", t8_qd2: "notele",
    t9_title: "Vehicule autonome", t9_text: "Mașinile care se conduc singure folosesc IA pentru a recunoaște traficul și a vira în siguranță.", t9_inst: "Sortează senzorii:", t9_h1: "Ce vede mașina?", t9_h2: "Distanță și imagini.", t9_q: "Ce controlează o mașină autonomă?", t9_qa: "O IA", t9_qb: "O telecomandă", t9_qc: "Un spirit invizibil", t9_qd: "Doar șoferul",
    t9_bl1: "Camere", t9_bl2: "Radar/Lidar", t9_i1: "Semne", t9_i2: "Distanță", t9_i3: "Semafoare", t9_i4: "Obstacole",
    t10_title: "IA în medicină", t10_text: "IA ajută medicii să găsească boli pe radiografii mai rapid.", t10_inst: "Pune procesul în ordine:", t10_h1: "Sănătate.", t10_h2: "Diagnostic.", t10_q: "Cum sprijină IA medicii?", t10_qa: "Analizează imagini", t10_qb: "Curăță mesele de operație", t10_qc: "Face cafea", t10_qd: "Udă florile",
    t10_w1: "IA", t10_w2: "detectează", t10_w3: "bolile", t10_w4: "adesea", t10_w5: "foarte", t10_w6: "devreme.", t10_w7: "",
    t11_title: "Prognoza meteo", t11_text: "IA analizează milioane de date meteo pentru a prezice furtunile mai precis.", t11_inst: "Evidențiază cuvântul pentru vreme:", t11_h1: "Soare sau ploaie.", t11_h2: "Climă.", t11_q: "De ce e IA bună pentru vreme?", t11_qa: "Calculează volume de date", t11_qb: "Aprinde soarele", t11_qc: "Oprește ploaia", t11_qd: "Zboară pe lună",
    t11_tk1: "Meteorologii", t11_tk2: "folosesc", t11_tk3: "IA", t11_tk4: "pentru", t11_tk5: "prognoze", t11_tk6: "precise.",
    t12_title: "Case Inteligente", t12_text: "IA controlează iluminatul și încălzirea automat pentru a economisi energie.", t12_inst: "Numără lămpile:", t12_h1: "Economisește energie.", t12_h2: "Lumină puternică.", t12_q: "Ce face o casă inteligentă?", t12_qa: "Conectează aparatele", t12_qb: "Face curat singură", t12_qc: "Face temele", t12_qd: "Gătește",
    t12_c: "7",
    t13_title: "Învățare personalizată", t13_text: "Programele de învățare cu IA se adaptează la ritmul și greșelile tale.", t13_inst: "Conectează beneficiile:", t13_h1: "Învață mai bine.", t13_h2: "Calea ta proprie.", t13_q: "Care este beneficiul IA în învățare?", t13_qa: "Ajutor individual", t13_qb: "Fără teste", t13_qc: "Nu trebuie să faci nimic", t13_qd: "Primești ciocolată",
    t13_l1: "Greu", t13_r1: "IA dă sfaturi", t13_l2: "Ușor", t13_r2: "IA merge mai departe", t13_l3: "Eroare", t13_r3: "IA explică din nou",
    t14_title: "Asistenți virtuali", t14_text: "Ajutoarele digitale planifică întâlniri și răspund la întrebări în casă.", t14_inst: "Completează spațiul liber:", t14_h1: "Ajutor prin voce.", t14_h2: "Organizare.", t14_q: "Care este un asistent virtual?", t14_qa: "Alexa", t14_qb: "Un ciocan", t14_qc: "O carte", t14_qd: "Un scaun",
    t14_sent: "Asistenții virtuali înțeleg ___ noastră.", t14_qa2: "vocea", t14_qb2: "gândurile", t14_qc2: "scrisul", t14_qd2: "culoarea",
    t15_title: "IA Creativă", t15_text: "IA poate scrie poezii, poate inventa povești și poate crea logo-uri.", t15_inst: "Sortează sarcinile creative:", t15_h1: "IA ca artist.", t15_h2: "Ce se creează?", t15_q: "Poate IA să fie creativă?", t15_qa: "Da, combină cunoștințele", t15_qb: "Nu, știe doar mate", t15_qc: "Doar când doarme", t15_qd: "Doar alb-negru",
    t15_bl1: "Scriere", t15_bl2: "Design", t15_i1: "Poezii", t15_i2: "Logo-uri", t15_i3: "Povești", t15_i4: "Grafică"
  }
};

export const INFO_K6_I8_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "simple-icon", icon: "📚", color: "#FF5722" },
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
    svg: { type: "icon-grid", items: [{emoji:"🖼️",label:"Image"},{emoji:"✍️",label:"Text"}] },
    interactive: { type: "drag-to-bucket", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", buckets: [{id:"b1",label:"t3_bl1"},{id:"b2",label:"t3_bl2"}], items: [{text:"t3_i1",bucketId:"b1"},{text:"t3_i2",bucketId:"b2"},{text:"t3_i3",bucketId:"b1"},{text:"t3_i4",bucketId:"b2"}] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "⌨️", color: "#607D8B" },
    interactive: { type: "word-order", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", words: ["t4_w1", "t4_w2", "t4_w3", "t4_w4", "t4_w5", "t4_w6", "t4_w7"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6].slice(0, 7) },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "🎭", color: "#E91E63" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6","t5_tk7","t5_tk8","t5_tk9"].filter(x=>x!==undefined), correctIndices: [0] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" }
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "simple-icon", icon: "🎵", color: "#9C27B0" },
    interactive: { type: "tap-count", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", tapCount: { emoji: "🎵", count: 6 } },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" }
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "🎮", color: "#3F51B5" },
    interactive: { type: "match-pairs", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", pairs: [{left:"t7_l1",right:"t7_r1"},{left:"t7_l2",right:"t7_r2"},{left:"t7_l3",right:"t7_r3"}] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" }
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "simple-icon", icon: "📺", color: "#FF9800" },
    interactive: { type: "gap-fill", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", sentence: "t8_sent", choices: ["t8_qa2", "t8_qb2", "t8_qc2", "t8_qd2"], correctIndex: 0 },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" }
  },
  {
    infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "icon-grid", items: [{emoji:"📷",label:"Cameras"},{emoji:"📡",label:"Radar"}] },
    interactive: { type: "drag-to-bucket", instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2", buckets: [{id:"b1",label:"t9_bl1"},{id:"b2",label:"t9_bl2"}], items: [{text:"t9_i1",bucketId:"b1"},{text:"t9_i2",bucketId:"b2"},{text:"t9_i3",bucketId:"b1"},{text:"t9_i4",bucketId:"b2"}] },
    quiz: { question: "t9_q", choices: ["t9_qa", "t9_qb", "t9_qc", "t9_qd"], answer: "t9_qa" }
  },
  {
    infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "simple-icon", icon: "🏥", color: "#F44336" },
    interactive: { type: "word-order", instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2", words: ["t10_w1", "t10_w2", "t10_w3", "t10_w4", "t10_w5", "t10_w6", "t10_w7"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6].slice(0, 6) },
    quiz: { question: "t10_q", choices: ["t10_qa", "t10_qb", "t10_qc", "t10_qd"], answer: "t10_qa" }
  },
  {
    infoTitle: "t11_title", infoText: "t11_text",
    svg: { type: "simple-icon", icon: "☁️", color: "#03A9F4" },
    interactive: { type: "highlight-text", instruction: "t11_inst", hint1: "t11_h1", hint2: "t11_h2", tokens: ["t11_tk1","t11_tk2","t11_tk3","t11_tk4","t11_tk5","t11_tk6"].filter(x=>x!==undefined), correctIndices: [0,5] },
    quiz: { question: "t11_q", choices: ["t11_qa", "t11_qb", "t11_qc", "t11_qd"], answer: "t11_qa" }
  },
  {
    infoTitle: "t12_title", infoText: "t12_text",
    svg: { type: "simple-icon", icon: "💡", color: "#FFEB3B" },
    interactive: { type: "tap-count", instruction: "t12_inst", hint1: "t12_h1", hint2: "t12_h2", tapCount: { emoji: "💡", count: 7 } },
    quiz: { question: "t12_q", choices: ["t12_qa", "t12_qb", "t12_qc", "t12_qd"], answer: "t12_qa" }
  },
  {
    infoTitle: "t13_title", infoText: "t13_text",
    svg: { type: "simple-icon", icon: "🎓", color: "#4CAF50" },
    interactive: { type: "match-pairs", instruction: "t13_inst", hint1: "t13_h1", hint2: "t13_h2", pairs: [{left:"t13_l1",right:"t13_r1"},{left:"t13_l2",right:"t13_r2"},{left:"t13_l3",right:"t13_r3"}] },
    quiz: { question: "t13_q", choices: ["t13_qa", "t13_qb", "t13_qc", "t13_qd"], answer: "t13_qa" }
  },
  {
    infoTitle: "t14_title", infoText: "t14_text",
    svg: { type: "simple-icon", icon: "🗣️", color: "#9E9E9E" },
    interactive: { type: "gap-fill", instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2", sentence: "t14_sent", choices: ["t14_qa2", "t14_qb2", "t14_qc2", "t14_qd2"], correctIndex: 0 },
    quiz: { question: "t14_q", choices: ["t14_qa", "t14_qb", "t14_qc", "t14_qd"], answer: "t14_qa" }
  },
  {
    infoTitle: "t15_title", infoText: "t15_text",
    svg: { type: "icon-grid", items: [{emoji:"✍️",label:"Writing"},{emoji:"🎨",label:"Design"}] },
    interactive: { type: "drag-to-bucket", instruction: "t15_inst", hint1: "t15_h1", hint2: "t15_h2", buckets: [{id:"b1",label:"t15_bl1"},{id:"b2",label:"t15_bl2"}], items: [{text:"t15_i1",bucketId:"b1"},{text:"t15_i2",bucketId:"b2"},{text:"t15_i3",bucketId:"b1"},{text:"t15_i4",bucketId:"b2"}] },
    quiz: { question: "t15_q", choices: ["t15_qa", "t15_qb", "t15_qc", "t15_qd"], answer: "t15_qa" }
  }
];

