// @ts-nocheck
import type { PoolTopicDef } from "./types";

export const INFO_K7_I8_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "KI Insel 8: Anwendungen & Auswirkungen",
    t1_title: "Selbstfahrende Autos", t1_text: "Autonome Fahrzeuge nutzen Kameras und KI, um ohne menschliche Hilfe zu navigieren.", t1_inst: "Ordne die Sensoren zu:", t1_h1: "Sehen ohne Augen.", t1_h2: "Abstand messen.", t1_q: "Was hilft einem Auto, Hindernisse zu sehen?", t1_qa: "Kameras & LiDAR", t1_qb: "Der Radio", t1_qc: "Die Hupe", t1_qd: "Der Sitz",
    t1_l1: "Kamera", t1_r1: "Bilderkennung", t1_l2: "LiDAR", t1_r2: "Abstandsmessung", t1_l3: "KI-Modell", t1_r3: "Entscheidungsfindung",
    t2_title: "Medizinische KI", t2_text: "KI hilft Ärzten, Krankheiten auf Röntgenbildern schneller und genauer zu erkennen.", t2_inst: "Fülle die Lücke aus:", t2_h1: "Früherkennung.", t2_h2: "KI als Assistent.", t2_q: "Wo unterstützt KI in der Medizin am meisten?", t2_qa: "Diagnose", t2_qb: "Betten machen", t2_qc: "Essen kochen", t2_qd: "Boden putzen",
    t2_sent: "KI kann Krankheiten auf ___ erkennen.", t2_qa2: "Scans", t2_qb2: "Papier", t2_qc2: "Wasser", t2_qd2: "Luft",
    t3_title: "KI in der Kunst", t3_text: "KIs können heute beeindruckende Bilder malen oder Musik komponieren.", t3_inst: "Sortiere die Begriffe:", t3_h1: "KI als Künstler.", t3_h2: "Kreative Prozesse.", t3_q: "Was braucht eine KI, um Kunst zu erzeugen?", t3_qa: "Prompts", t3_qb: "Pinsel", t3_qc: "Leinwand", t3_qd: "Gitarre",
    t3_bl1: "Medien", t3_bl2: "Beispiele", t3_i1: "Bilder", t3_i2: "Midjourney", t3_i3: "Musik", t3_i4: "Suno",
    t4_title: "Empfehlungssysteme", t4_text: "Streaming-Dienste nutzen KI, um dir Filme vorzuschlagen, die dir gefallen könnten.", t4_inst: "Bringe die Wörter in Ordnung:", t4_h1: "Was schaust du?", t4_h2: "Personalisierung.", t4_q: "Wonach entscheidet die KI, was sie empfiehlt?", t4_qa: "Nach deinem Verlauf", t4_qb: "Nach dem Wetter", t4_qc: "Durch Zufall", t4_qd: "Gar nicht",
    t4_w1: "Empfehlungen", t4_w2: "basieren", t4_w3: "auf", t4_w4: "deinem", t4_w5: "früheren", t4_w6: "Verhalten.", t4_w7: "",
    t5_title: "Chatbots", t5_text: "Virtuelle Assistenten beantworten Fragen und helfen im Kundenservice.", t5_inst: "Markiere das richtige Wort:", t5_h1: "Sprechen mit Text.", t5_h2: "Rund um die Uhr.", t5_q: "Was ist ein bekannter Chatbot?", t5_qa: "ChatGPT", t5_qb: "Minecraft", t5_qc: "Spotify", t5_qd: "TikTok",
    t5_tk1: "Chatbots", t5_tk2: "verstehen", t5_tk3: "und", t5_tk4: "generieren", t5_tk5: "menschliche", t5_tk6: "Sprache.",
    t6_title: "KI im Weltraum", t6_text: "Rover auf dem Mars nutzen KI, um Hindernissen autonom auszuweichen.", t6_inst: "Zähle die Rover:", t6_h1: "Fremde Planeten.", t6_h2: "Autonome Fahrt.", t6_q: "Warum ist KI im Weltraum wichtig?", t6_qa: "Wegen Signalverzögerung", t6_qb: "Zum Spaß", t6_qc: "Um Musik zu hören", t6_qd: "Gegen Langeweile",
    t6_c1: "Rover", t6_n1: "2",
    t7_title: "Vorausschauender Text", t7_text: "Dein Smartphone schlägt Wörter vor, während du tippst.", t7_inst: "Verbinde die Begriffe:", t7_h1: "Schneller schreiben.", t7_h2: "Nächstes Wort.", t7_q: "Wie lernt dein Handy neue Wörter?", t7_qa: "Durch dein Tippen", t7_qb: "Durch Schütteln", t7_qc: "Gar nicht", t7_qd: "Vom Akku",
    t7_l1: "Input", t7_r1: "Tippen", t7_l2: "KI", t7_r2: "Vorhersage", t7_l3: "Output", t7_r3: "Vorschlag",
    t8_title: "Gesichtserkennung", t8_text: "KI kann Gesichter in Fotos identifizieren, um z.B. Handys zu entsperren.", t8_inst: "Fülle die Lücke aus:", t8_h1: "Biometrie.", t8_h2: "Dein Gesicht ist der Schlüssel.", t8_q: "Was analysiert die KI bei der Gesichtserkennung?", t8_qa: "Merkmale & Abstände", t8_qb: "Haarfarbe", t8_qc: "Kleidung", t8_qd: "Hintergrund",
    t8_sent: "Gesichtserkennung erhöht die ___.", t8_qa2: "Sicherheit", t8_qb2: "Geschwindigkeit", t8_qc2: "Lautstärke", t8_qd2: "Helligkeit",
    t9_title: "Spam-Filter", t9_text: "KI erkennt unerwünschte E-Mails und sortiert sie automatisch aus.", t9_inst: "Sortiere die E-Mails:", t9_h1: "Sauberes Postfach.", t9_h2: "Müll erkennen.", t9_q: "Was macht ein Spam-Filter?", t9_qa: "Sortiert Müll aus", t9_qb: "Löscht alle Mails", t9_qc: "Schreibt Antworten", t9_qd: "Verkauft Daten",
    t9_bl1: "Posteingang", t9_bl2: "Spam", t9_i1: "Freunde", t9_i2: "Werbung", t9_i3: "Schule", t9_i4: "Gewinnspiel",
    t10_title: "Übersetzungs-KI", t10_text: "KI-Modelle können Texte fast in Echtzeit zwischen Sprachen übersetzen.", t10_inst: "Bringe die Wörter in Ordnung:", t10_h1: "Keine Sprachbarrieren.", t10_h2: "Globales Verstehen.", t10_q: "Was ist ein bekannter Online-Übersetzer?", t10_qa: "DeepL", t10_qb: "Instagram", t10_qc: "Netflix", t10_qd: "Candy Crush",
    t10_w1: "KI", t10_w2: "übersetzt", t10_w3: "Texte", t10_w4: "in", t10_w5: "viele", t10_w6: "Sprachen.", t10_w7: "",
    t11_title: "Wettervorhersage", t11_text: "KI analysiert riesige Datenmengen, um das Wetter genauer vorherzusagen.", t11_inst: "Markiere das richtige Wort:", t11_h1: "Meteorologie.", t11_h2: "Bessere Prognosen.", t11_q: "Was hilft der KI bei der Wettervorhersage?", t11_qa: "Satellitendaten", t11_qb: "Ein Würfel", t11_qc: "Ein Fernseher", t11_qd: "Das Datum",
    t11_tk1: "Moderne", t11_tk2: "Wettervorhersage", t11_tk3: "nutzt", t11_tk4: "KI-Modelle", t11_tk5: "für", t11_tk6: "Präzision.",
    t12_title: "Robotik & KI", t12_text: "Roboter mit KI können Aufgaben in Fabriken oder Haushalten selbstständig lösen.", t12_inst: "Ordne die Aufgaben zu:", t12_h1: "Hardware + Software.", t12_h2: "Maschinen lernen.", t12_q: "Was unterscheidet einen KI-Roboter von einer einfachen Maschine?", t12_qa: "Anpassungsfähigkeit", t12_qb: "Die Farbe", t12_qc: "Der Stromverbrauch", t12_qd: "Das Gewicht",
    t12_l1: "Greifen", t12_r1: "Feinmotorik", t12_l2: "Pfad finden", t12_r2: "Navigation", t12_l3: "Hindernis", t12_r3: "Ausweichen",
    t13_title: "Smart Home", t13_text: "Intelligente Assistenten steuern Licht, Heizung und Musik in deinem Zuhause.", t13_inst: "Fülle die Lücke aus:", t13_h1: "Vernetztes Wohnen.", t13_h2: "Smarte Geräte.", t13_q: "Wie steuert man Smart-Home-KI oft?", t13_qa: "Per Sprache", t13_qb: "Per Brief", t13_qc: "Gar nicht", t13_qd: "Mit Klopfen",
    t13_sent: "Ein Smart Home spart ___.", t13_qa2: "Energie", t13_qb2: "Platz", t13_qc2: "Fenster", t13_qd2: "Türen",
    t14_title: "Betrugserkennung", t14_text: "KI schützt Banken, indem sie verdächtige Transaktionen sofort erkennt.", t14_inst: "Bringe die Wörter in Ordnung:", t14_h1: "Sicher bezahlen.", t14_h2: "Muster von Dieben.", t14_q: "Wann schlägt die KI bei einer Bank Alarm?", t14_qa: "Bei ungewöhnlichem Verhalten", t14_qb: "Jeden Montag", t14_qc: "Nie", t14_qd: "Bei jedem Kauf",
    t14_w1: "KI", t14_w2: "erkennt", t14_w3: "verdächtige", t14_w4: "Zahlungen", t14_w5: "in", t14_w6: "Echtzeit.", t14_w7: "",
    t15_title: "Spiele-KI", t15_text: "In Videospielen steuert KI die Gegner, damit sie sich schlau verhalten.", t15_inst: "Sortiere die Begriffe:", t15_h1: "Herausforderung.", t15_h2: "NPC-Verhalten.", t15_q: "Welche KI besiegte Weltmeister in Go?", t15_qa: "AlphaGo", t15_qb: "Pac-Man", t15_qc: "Tetris", t15_qd: "Mario",
    t15_bl1: "Spielertyp", t15_bl2: "Beispiel", t15_i1: "Gegner", t15_i2: "Schach", t15_i3: "Partner", t15_i4: "Rollenspiel"
  },
  en: {
    explorer_title: "AI Island 8: Applications & Impact",
    t1_title: "Self-Driving Cars", t1_text: "Autonomous vehicles use cameras and AI to navigate without human help.", t1_inst: "Match the sensors:", t1_h1: "Seeing without eyes.", t1_h2: "Measuring distance.", t1_q: "What helps a car see obstacles?", t1_qa: "Cameras & LiDAR", t1_qb: "The radio", t1_qc: "The horn", t1_qd: "The seat",
    t1_l1: "Camera", t1_r1: "Image recognition", t1_l2: "LiDAR", t1_r2: "Distance measurement", t1_l3: "AI Model", t1_r3: "Decision making",
    t2_title: "Medical AI", t2_text: "AI helps doctors identify diseases on X-rays faster and more accurately.", t2_inst: "Fill in the blank:", t2_h1: "Early detection.", t2_h2: "AI as an assistant.", t2_q: "Where does AI support medicine the most?", t2_qa: "Diagnosis", t2_qb: "Making beds", t2_qc: "Cooking food", t2_qd: "Cleaning floors",
    t2_sent: "AI can detect diseases on ___.", t2_qa2: "scans", t2_qb2: "paper", t2_qc2: "water", t2_qd2: "air",
    t3_title: "AI in Art", t3_text: "AIs can now paint impressive pictures or compose music.", t3_inst: "Sort the terms:", t3_h1: "AI as an artist.", t3_h2: "Creative processes.", t3_q: "What does an AI need to generate art?", t3_qa: "Prompts", t3_qb: "Brushes", t3_qc: "Canvas", t3_qd: "Guitar",
    t3_bl1: "Media", t3_bl2: "Examples", t3_i1: "Images", t3_i2: "Midjourney", t3_i3: "Music", t3_i4: "Suno",
    t4_title: "Recommendation Systems", t4_text: "Streaming services use AI to suggest movies you might like.", t4_inst: "Put the words in order:", t4_h1: "What are you watching?", t4_h2: "Personalization.", t4_q: "How does the AI decide what to recommend?", t4_qa: "Based on your history", t4_qb: "Based on weather", t4_qc: "By chance", t4_qd: "Not at all",
    t4_w1: "Recommendations", t4_w2: "are", t4_w3: "based", t4_w4: "on", t4_w5: "your", t4_w6: "previous", t4_w7: "behavior.",
    t5_title: "Chatbots", t5_text: "Virtual assistants answer questions and help with customer service.", t5_inst: "Highlight the correct word:", t5_h1: "Talking with text.", t5_h2: "24/7 service.", t5_q: "What is a well-known chatbot?", t5_qa: "ChatGPT", t5_qb: "Minecraft", t5_qc: "Spotify", t5_qd: "TikTok",
    t5_tk1: "Chatbots", t5_tk2: "understand", t5_tk3: "and", t5_tk4: "generate", t5_tk5: "human", t5_tk6: "language.",
    t6_title: "AI in Space", t6_text: "Rovers on Mars use AI to avoid obstacles autonomously.", t6_inst: "Count the rovers:", t6_h1: "Foreign planets.", t6_h2: "Autonomous driving.", t6_q: "Why is AI important in space?", t6_qa: "Signal delay", t6_qb: "For fun", t6_qc: "To hear music", t6_qd: "Against boredom",
    t6_c1: "Rover", t6_n1: "2",
    t7_title: "Predictive Text", t7_text: "Your smartphone suggests words while you type.", t7_inst: "Connect the terms:", t7_h1: "Write faster.", t7_h2: "Next word.", t7_q: "How does your phone learn new words?", t7_qa: "From your typing", t7_qb: "By shaking", t7_qc: "Not at all", t7_qd: "From battery",
    t7_l1: "Input", t7_r1: "Typing", t7_l2: "AI", t7_r2: "Prediction", t7_l3: "Output", t7_r3: "Suggestion",
    t8_title: "Facial Recognition", t8_text: "AI can identify faces in photos to unlock phones, for example.", t8_inst: "Fill in the blank:", t8_h1: "Biometrics.", t8_h2: "Your face is the key.", t8_q: "What does AI analyze in facial recognition?", t8_qa: "Features & distances", t8_qb: "Hair color", t8_qc: "Clothes", t8_qd: "Background",
    t8_sent: "Facial recognition increases ___.", t8_qa2: "security", t8_qb2: "speed", t8_qc2: "volume", t8_qd2: "brightness",
    t9_title: "Spam Filters", t9_text: "AI detects unwanted emails and sorts them out automatically.", t9_inst: "Sort the emails:", t9_h1: "Clean inbox.", t9_h2: "Identifying junk.", t9_q: "What does a spam filter do?", t9_qa: "Sorts out junk", t9_qb: "Deletes all emails", t9_qc: "Writes replies", t9_qd: "Sells data",
    t9_bl1: "Inbox", t9_bl2: "Spam", t9_i1: "Friends", t9_i2: "Ads", t9_i3: "School", t9_i4: "Contest",
    t10_title: "Translation AI", t10_text: "AI models can translate text between languages almost in real-time.", t10_inst: "Put the words in order:", t10_h1: "No language barriers.", t10_h2: "Global understanding.", t10_q: "What is a well-known online translator?", t10_qa: "DeepL", t10_qb: "Instagram", t10_qc: "Netflix", t10_qd: "Candy Crush",
    t10_w1: "AI", t10_w2: "translates", t10_w3: "text", t10_w4: "into", t10_w5: "many", t10_w6: "languages.", t10_w7: "",
    t11_title: "Weather Forecasting", t11_text: "AI analyzes huge amounts of data to predict weather more accurately.", t11_inst: "Highlight the correct word:", t11_h1: "Meteorology.", t11_h2: "Better forecasts.", t11_q: "What helps AI in weather forecasting?", t11_qa: "Satellite data", t11_qb: "A dice", t11_qc: "A TV", t11_qd: "The date",
    t11_tk1: "Modern", t11_tk2: "weather", t11_tk3: "forecasting", t11_tk4: "uses", t11_tk5: "AI", t11_tk6: "models.",
    t12_title: "Robotics & AI", t12_text: "Robots with AI can solve tasks in factories or homes independently.", t12_inst: "Match the tasks:", t12_h1: "Hardware + software.", t12_h2: "Machines learn.", t12_q: "What distinguishes an AI robot from a simple machine?", t12_qa: "Adaptability", t12_qb: "The color", t12_qc: "Power consumption", t12_qd: "The weight",
    t12_l1: "Grasping", t12_r1: "Fine motor skills", t12_l2: "Find path", t12_r2: "Navigation", t12_l3: "Obstacle", t12_r3: "Avoidance",
    t13_title: "Smart Home", t13_text: "Smart assistants control light, heating, and music in your home.", t13_inst: "Fill in the blank:", t13_h1: "Connected living.", t13_h2: "Smart devices.", t13_q: "How is smart home AI often controlled?", t13_qa: "By voice", t13_qb: "By letter", t13_qc: "Not at all", t13_qd: "With knocking",
    t13_sent: "A smart home saves ___.", t13_qa2: "energy", t13_qb2: "space", t13_qc2: "windows", t13_qd2: "doors",
    t14_title: "Fraud Detection", t14_text: "AI protects banks by immediately detecting suspicious transactions.", t14_inst: "Put the words in order:", t14_h1: "Safe payments.", t14_h2: "Theft patterns.", t14_q: "When does the AI alert a bank?", t14_qa: "Unusual behavior", t14_qb: "Every Monday", t14_qc: "Never", t14_qd: "On every purchase",
    t14_w1: "AI", t14_w2: "detects", t14_w3: "suspicious", t14_w4: "payments", t14_w5: "in", t14_w6: "real", t14_w7: "time.",
    t15_title: "Game AI", t15_text: "In video games, AI controls enemies so they behave cleverly.", t15_inst: "Sort the terms:", t15_h1: "Challenge.", t15_h2: "NPC behavior.", t15_q: "Which AI defeated world champions in Go?", t15_qa: "AlphaGo", t15_qb: "Pac-Man", t15_qc: "Tetris", t15_qd: "Mario",
    t15_bl1: "Player type", t15_bl2: "Example", t15_i1: "Enemy", t15_i2: "Chess", t15_i3: "Partner", t15_i4: "RPG"
  },
  hu: {
    explorer_title: "MI Sziget 8: Alkalmazások és hatások",
    t1_title: "Önvezető autók", t1_text: "Az autonóm járművek kamerákat és MI-t használnak a navigációhoz emberi segítség nélkül.", t1_inst: "Párosítsd a szenzorokat:", t1_h1: "Látás szemek nélkül.", t1_h2: "Távolságmérés.", t1_q: "Mi segíti az autót az akadályok felismerésében?", t1_qa: "Kamerák és LiDAR", t1_qb: "A rádió", t1_qc: "A duda", t1_qd: "Az ülés",
    t1_l1: "Kamera", t1_r1: "Képfelismerés", t1_l2: "LiDAR", t1_r2: "Távolságmérés", t1_l3: "MI modell", t1_r3: "Döntéshozatal",
    t2_title: "Orvosi MI", t2_text: "A MI segíti az orvosokat a betegségek gyorsabb és pontosabb felismerésében a röntgenfelvételeken.", t2_inst: "Töltsd ki a hiányt:", t2_h1: "Korai felismerés.", t2_h2: "MI mint asszisztens.", t2_q: "Hol segíti leginkább a MI az orvostudományt?", t2_qa: "Diagnózis", t2_qb: "Ágyazás", t2_qc: "Főzés", t2_qd: "Takarítás",
    t2_sent: "A MI képes felismerni a betegségeket a ___.", t2_qa2: "leleteken", t2_qb2: "papíron", t2_qc2: "vízben", t2_qd2: "levegőben",
    t3_title: "MI a művészetben", t3_text: "A MI ma már lenyűgöző képeket képes festeni vagy zenét szerezni.", t3_inst: "Válogasd szét:", t3_h1: "MI mint művész.", t3_h2: "Kreatív folyamatok.", t3_q: "Mire van szüksége a MI-nek művészet létrehozásához?", t3_qa: "Promptokra", t3_qb: "Ecsetre", t3_qc: "Vászonra", t3_qd: "Gitárra",
    t3_bl1: "Média", t3_bl2: "Példák", t3_i1: "Képek", t3_i2: "Midjourney", t3_i3: "Zene", t3_i4: "Suno",
    t4_title: "Ajánlórendszerek", t4_text: "A streaming szolgáltatók MI-t használnak, hogy olyan filmeket ajánljanak, amik tetszhetnek neked.", t4_inst: "Tedd sorrendbe a szavakat:", t4_h1: "Mit nézel?", t4_h2: "Személyre szabás.", t4_q: "Mi alapján dönt a MI az ajánlásokról?", t4_qa: "A korábbi tevékenységeid", t4_qb: "Az időjárás", t4_qc: "Véletlen", t4_qd: "Egyáltalán nem dönt",
    t4_w1: "Az ajánlások", t4_w2: "a korábbi", t4_w3: "viselkedéseden", t4_w4: "alapulnak.", t4_w5: "", t4_w6: "", t4_w7: "",
    t5_title: "Chatbotok", t5_text: "A virtuális asszisztensek megválaszolják a kérdéseket és segítenek az ügyfélszolgálaton.", t5_inst: "Jelöld meg a helyes szót:", t5_h1: "Beszélgetés szöveggel.", t5_h2: "24/7 ügyfélszolgálat.", t5_q: "Melyik egy ismert chatbot?", t5_qa: "ChatGPT", t5_qb: "Minecraft", t5_qc: "Spotify", t5_qd: "TikTok",
    t5_tk1: "A chatbotok", t5_tk2: "megértik", t5_tk3: "és", t5_tk4: "létrehozzák", t5_tk5: "az emberi", t5_tk6: "beszédet.",
    t6_title: "MI az űrben", t6_text: "A Mars-járók MI-t használnak, hogy önállóan elkerüljék az akadályokat.", t6_inst: "Számold meg a rovereket:", t6_h1: "Idegen bolygók.", t6_h2: "Önvezetés.", t6_q: "Miért fontos a MI az űrben?", t6_qa: "A jelkésleltetés miatt", t6_qb: "Szórakozásból", t6_qc: "Zenehallgatáshoz", t6_qd: "Unalom ellen",
    t6_c1: "Rover", t6_n1: "2",
    t7_title: "Prediktív szöveg", t7_text: "Az okostelefonod szavakat javasol gépelés közben.", t7_inst: "Kapcsold össze:", t7_h1: "Gyorsabb írás.", t7_h2: "Következő szó.", t7_q: "Hogyan tanul a telefonod új szavakat?", t7_qa: "A gépelésedből", t7_qb: "Rázástól", t7_qc: "Sehogy", t7_qd: "Az akkutól",
    t7_l1: "Bevitel", t7_r1: "Gépelés", t7_l2: "MI", t7_r2: "Jóslás", t7_l3: "Kimenet", t7_r3: "Javaslat",
    t8_title: "Arcfelismerés", t8_text: "A MI képes azonosítani az arcokat a fotókon, pl. telefon feloldásához.", t8_inst: "Töltsd ki a hiányt:", t8_h1: "Biometria.", t8_h2: "Az arcod a kulcs.", t8_q: "Mit elemez a MI az arcfelismerésnél?", t8_qa: "Vonásokat és távolságokat", t8_qb: "Hajszínt", t8_qc: "Ruhát", t8_qd: "Hátteret",
    t8_sent: "Az arcfelismerés növeli a ___.", t8_qa2: "biztonságot", t8_qb2: "sebességet", t8_qc2: "hangerőt", t8_qd2: "fényt",
    t9_title: "Spamszűrő", t9_text: "A MI felismeri a nemkívánatos e-maileket és automatikusan kiszűri őket.", t9_inst: "Válogasd szét:", t9_h1: "Tiszta fiók.", t9_h2: "Szemét felismerése.", t9_q: "Mit csinál a spamszűrő?", t9_qa: "Kiszűri a szemetet", t9_qb: "Töröl minden e-mailt", t9_qc: "Válaszokat ír", t9_qd: "Adatokat árul",
    t9_bl1: "Beérkező", t9_bl2: "Spam", t9_i1: "Barátok", t9_i2: "Reklám", t9_i3: "Iskola", t9_i4: "Nyeremény",
    t10_title: "Fordító MI", t10_text: "A MI modellek szinte valós időben képesek szövegeket fordítani nyelvek között.", t10_inst: "Tedd sorrendbe a szavakat:", t10_h1: "Nincsenek nyelvi korlátok.", t10_h2: "Globális megértés.", t10_q: "Melyik egy ismert online fordító?", t10_qa: "DeepL", t10_qb: "Instagram", t10_qc: "Netflix", t10_qd: "Candy Crush",
    t10_w1: "A MI", t10_w2: "sok", t10_w3: "nyelvre", t10_w4: "lefordítja", t10_w5: "a", t10_w6: "szöveget.", t10_w7: "",
    t11_title: "Időjárás-előrejelzés", t11_text: "A MI hatalmas adatmennyiséget elemez az időjárás pontosabb jóslásához.", t11_inst: "Jelöld meg a helyes szót:", t11_h1: "Meteorológia.", t11_h2: "Jobb prognózisok.", t11_q: "Mi segíti a MI-t az előrejelzésben?", t11_qa: "Műholdas adatok", t11_qb: "Egy dobókocka", t11_qc: "Egy tévé", t11_qd: "A dátum",
    t11_tk1: "A modern", t11_tk2: "jóslás", t11_tk3: "MI-t", t11_tk4: "használ", t11_tk5: "a pontosság", t11_tk6: "érdekében.",
    t12_title: "Robotika és MI", t12_text: "A MI-vel ellátott robotok önállóan képesek feladatokat megoldani a gyárakban vagy otthon.", t12_inst: "Párosítsd a feladatokat:", t12_h1: "Hardver + szoftver.", t12_h2: "A gépek tanulnak.", t12_q: "Mi különbözteti meg a MI-robotot egy sima géptől?", t12_qa: "Alkalmazkodóképesség", t12_qb: "A színe", t12_qc: "Energiafogyasztás", t12_qd: "A súlya",
    t12_l1: "Megfogás", t12_r1: "Finommotorika", t12_l2: "Útvonal", t12_r2: "Navigáció", t12_l3: "Akadály", t12_r3: "Kikerülés",
    t13_title: "Okosotthon", t13_text: "Az intelligens asszisztensek vezérlik a fényt, a fűtést és a zenét az otthonodban.", t13_inst: "Töltsd ki a hiányt:", t13_h1: "Összekapcsolt élet.", t13_h2: "Okos eszközök.", t13_q: "Hogyan irányítják gyakran az okosotthont?", t13_qa: "Hanggal", t13_qb: "Levélben", t13_qc: "Sehogy", t13_qd: "Kopogással",
    t13_sent: "Az okosotthon ___ takarít meg.", t13_qa2: "energiát", t13_qb2: "helyet", t13_qc2: "ablakot", t13_qd2: "ajtót",
    t14_title: "Csalásfelismerés", t14_text: "A MI védi a bankokat azzal, hogy azonnal felismeri a gyanús tranzakciókat.", t14_inst: "Tedd sorrendbe a szavakat:", t14_h1: "Biztonságos fizetés.", t14_h2: "Lopási minták.", t14_q: "Mikor riaszt a banki MI?", t14_qa: "Szokatlan viselkedésnél", t14_qb: "Minden hétfőn", t14_qc: "Soha", t14_qd: "Minden vásárlásnál",
    t14_w1: "A MI", t14_w2: "valós", t14_w3: "időben", t14_w4: "felismeri", t14_w5: "a", t14_w6: "gyanús", t14_w7: "utalást.",
    t15_title: "Játék MI", t15_text: "A videojátékokban a MI irányítja az ellenfeleket, hogy okosan viselkedjenek.", t15_inst: "Válogasd szét:", t15_h1: "Kihívás.", t15_h2: "NPC viselkedés.", t15_q: "Melyik MI győzte le a világbajnokot Go-ban?", t15_qa: "AlphaGo", t15_qb: "Pac-Man", t15_qc: "Tetris", t15_qd: "Mario",
    t15_bl1: "Játékos típusa", t15_bl2: "Példa", t15_i1: "Ellenség", t15_i2: "Sakk", t15_i3: "Partner", t15_i4: "Szerepjáték"
  },
  ro: {
    explorer_title: "IA Insula 8: Aplicații și Impact",
    t1_title: "Mașini autonome", t1_text: "Vehiculele autonome folosesc camere și IA pentru a naviga fără ajutor uman.", t1_inst: "Potrivește senzorii:", t1_h1: "Văzând fără ochi.", t1_h2: "Măsurarea distanței.", t1_q: "Ce ajută o mașină să vadă obstacolele?", t1_qa: "Camere și LiDAR", t1_qb: "Radioul", t1_qc: "Claxonul", t1_qd: "Scaunul",
    t1_l1: "Cameră", t1_r1: "Recunoaștere imagine", t1_l2: "LiDAR", t1_r2: "Măsurare distanță", t1_l3: "Model IA", t1_r3: "Luarea deciziilor",
    t2_title: "IA medicală", t2_text: "IA ajută medicii să identifice bolile pe radiografii mai rapid și mai precis.", t2_inst: "Completează spațiul liber:", t2_h1: "Detectare timpurie.", t2_h2: "IA ca asistent.", t2_q: "Unde sprijină IA medicina cel mai mult?", t2_qa: "Diagnostic", t2_qb: "Făcutul paturilor", t2_qc: "Gătit", t2_qd: "Curățat podele",
    t2_sent: "IA poate detecta boli pe ___.", t2_qa2: "scanări", t2_qb2: "hârtie", t2_qc2: "apă", t2_qd2: "aer",
    t3_title: "IA în artă", t3_text: "IA-urile pot acum picta imagini impresionante sau compune muzică.", t3_inst: "Sortează termenii:", t3_h1: "IA ca artist.", t3_h2: "Procese creative.", t3_q: "De ce are nevoie o IA pentru a genera artă?", t3_qa: "Prompt-uri", t3_qb: "Pensule", t3_qc: "Pânză", t3_qd: "Chitară",
    t3_bl1: "Media", t3_bl2: "Exemple", t3_i1: "Imagini", t3_i2: "Midjourney", t3_i3: "Muzică", t3_i4: "Suno",
    t4_title: "Sisteme de recomandare", t4_text: "Serviciile de streaming folosesc IA pentru a sugera filme care ți-ar putea plăcea.", t4_inst: "Pune cuvintele în ordine:", t4_h1: "Ce urmărești?", t4_h2: "Personalizare.", t4_q: "Cum decide IA ce să recomande?", t4_qa: "Pe baza istoricului tău", t4_qb: "Pe baza vremii", t4_qc: "La întâmplare", t4_qd: "Deloc",
    t4_w1: "Recomandările", t4_w2: "se", t4_w3: "bazează", t4_w4: "pe", t4_w5: "comportamentul", t4_w6: "tău", t4_w7: "anterior.",
    t5_title: "Chatboți", t5_text: "Asistenții virtuali răspund la întrebări și ajută la serviciul clienți.", t5_inst: "Evidențiază cuvântul corect:", t5_h1: "Vorbind prin text.", t5_h2: "Serviciu 24/7.", t5_q: "Ce este un chatbot bine cunoscut?", t5_qa: "ChatGPT", t5_qb: "Minecraft", t5_qc: "Spotify", t5_qd: "TikTok",
    t5_tk1: "Chatboții", t5_tk2: "înțeleg", t5_tk3: "și", t5_tk4: "generează", t5_tk5: "limbajul", t5_tk6: "uman.",
    t6_title: "IA în spațiu", t6_text: "Roverele de pe Marte folosesc IA pentru a evita obstacolele în mod autonom.", t6_inst: "Numără roverele:", t6_h1: "Planete străine.", t6_h2: "Conducere autonomă.", t6_q: "De ce este importantă IA în spațiu?", t6_qa: "Întârzierea semnalului", t6_qb: "Pentru distracție", t6_qc: "Muzică", t6_qd: "Contra plictiselii",
    t6_c1: "Rover", t6_n1: "2",
    t7_title: "Text predictiv", t7_text: "Smartphone-ul tău sugerează cuvinte în timp ce tastezi.", t7_inst: "Conectează termenii:", t7_h1: "Scrie mai repede.", t7_h2: "Cuvântul următor.", t7_q: "Cum învață telefonul tău cuvinte noi?", t7_qa: "Din tastarea ta", t7_qb: "Prin agitare", t7_qc: "Deloc", t7_qd: "Din baterie",
    t7_l1: "Intrare", t7_r1: "Tastare", t7_l2: "IA", t7_r2: "Predicție", t7_l3: "Ieșire", t7_r3: "Sugestie",
    t8_title: "Recunoaștere facială", t8_text: "IA poate identifica fețele în fotografii pentru a debloca telefoane, de exemplu.", t8_inst: "Completează spațiul liber:", t8_h1: "Biometrie.", t8_h2: "Fața ta e cheia.", t8_q: "Ce analizează IA la recunoașterea facială?", t8_qa: "Trăsături și distanțe", t8_qb: "Culoarea părului", t8_qc: "Haine", t8_qd: "Fundal",
    t8_sent: "Recunoașterea facială crește ___.", t8_qa2: "securitatea", t8_qb2: "viteza", t8_qc2: "volumul", t8_qd2: "luminozitatea",
    t9_title: "Filtre Spam", t9_text: "IA detectează e-mailurile nedorite și le sortează automat.", t9_inst: "Sortează e-mailurile:", t9_h1: "Inbox curat.", t9_h2: "Identificarea gunoiului.", t9_q: "Ce face un filtru spam?", t9_qa: "Sortează gunoiul", t9_qb: "Șterge tot", t9_qc: "Scrie răspunsuri", t9_qd: "Vinde date",
    t9_bl1: "Inbox", t9_bl2: "Spam", t9_i1: "Prieteni", t9_i2: "Reclame", t9_i3: "Școală", t9_i4: "Concurs",
    t10_title: "IA de traducere", t10_text: "Modelele IA pot traduce text între limbi aproape în timp real.", t10_inst: "Pune cuvintele în ordine:", t10_h1: "Fără bariere lingvistice.", t10_h2: "Înțelegere globală.", t10_q: "Ce este un traducător online cunoscut?", t10_qa: "DeepL", t10_qb: "Instagram", t10_qc: "Netflix", t10_qd: "Candy Crush",
    t10_w1: "IA", t10_w2: "traduce", t10_w3: "textul", t10_w4: "în", t10_w5: "multe", t10_w6: "limbi.", t10_w7: "",
    t11_title: "Prognoza meteo", t11_text: "IA analizează cantități uriașe de date pentru a prezice vremea mai precis.", t11_inst: "Evidențiază cuvântul corect:", t11_h1: "Meteorologie.", t11_h2: "Prognoze mai bune.", t11_q: "Ce ajută IA în prognoza meteo?", t11_qa: "Date satelitare", t11_qb: "Un zar", t11_qc: "Un TV", t11_qd: "Data",
    t11_tk1: "Prognoza", t11_tk2: "modernă", t11_tk3: "folosește", t11_tk4: "modele", t11_tk5: "IA", t11_tk6: "precise.",
    t12_title: "Robotică și IA", t12_text: "Roboții cu IA pot rezolva sarcini în fabrici sau case în mod independent.", t12_inst: "Potrivește sarcinile:", t12_h1: "Hardware + software.", t12_h2: "Mașinile învață.", t12_q: "Ce distinge un robot IA de o mașină simplă?", t12_qa: "Adaptabilitatea", t12_qb: "Culoarea", t12_qc: "Consumul", t12_qd: "Greutatea",
    t12_l1: "Prindere", t12_r1: "Motricitate fină", t12_l2: "Găsire cale", t12_r2: "Navigație", t12_l3: "Obstacol", t12_r3: "Evitare",
    t13_title: "Smart Home", t13_text: "Asistenții inteligenți controlează lumina, căldura și muzica în casa ta.", t13_inst: "Completează spațiul liber:", t13_h1: "Viață conectată.", t13_h2: "Dispozitive smart.", t13_q: "Cum este controlată IA smart home?", t13_qa: "Prin voce", t13_qb: "Prin scrisori", t13_qc: "Deloc", t13_qd: "Bătând la ușă",
    t13_sent: "O casă smart economisește ___.", t13_qa2: "energie", t13_qb2: "spațiu", t13_qc2: "ferestre", t13_qd2: "uși",
    t14_title: "Detectarea fraudei", t14_text: "IA protejează băncile prin detectarea imediată a tranzacțiilor suspecte.", t14_inst: "Pune cuvintele în ordine:", t14_h1: "Plăți sigure.", t14_h2: "Modele de furt.", t14_q: "Când alertează IA o bancă?", t14_qa: "La comportament neobișnuit", t14_qb: "Lunea", t14_qc: "Niciodată", t14_qd: "La fiecare cumpărătură",
    t14_w1: "IA", t14_w2: "detectează", t14_w3: "plățile", t14_w4: "suspecte", t14_w5: "în", t14_w6: "timp", t14_w7: "real.",
    t15_title: "IA în jocuri", t15_text: "În jocurile video, IA controlează inamicii pentru ca aceștia să se comporte inteligent.", t15_inst: "Sortează termenii:", t15_h1: "Provocare.", t15_h2: "Comportament NPC.", t15_q: "Ce IA a învins campionii mondiali la Go?", t15_qa: "AlphaGo", t15_qb: "Pac-Man", t15_qc: "Tetris", t15_qd: "Mario",
    t15_bl1: "Tip jucător", t15_bl2: "Exemplu", t15_i1: "Inamic", t15_i2: "Șah", t15_i3: "Partener", t15_i4: "RPG"
  }
};

export const INFO_K7_I8_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "simple-icon", icon: "🚗", color: "#607D8B" },
    interactive: { type: "match-pairs", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", pairs: [{left:"t1_l1",right:"t1_r1"},{left:"t1_l2",right:"t1_r2"},{left:"t1_l3",right:"t1_r3"}] },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" }
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "🏥", color: "#F44336" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" }
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "icon-grid", items: [{emoji:"🎨",label:"Art"},{emoji:"🎵",label:"Music"}] },
    interactive: { type: "drag-to-bucket", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", buckets: [{id:"b1",label:"t3_bl1"},{id:"b2",label:"t3_bl2"}], items: [{text:"t3_i1",bucketId:"b1"},{text:"t3_i2",bucketId:"b2"},{text:"t3_i3",bucketId:"b1"},{text:"t3_i4",bucketId:"b2"}] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "🎬", color: "#9C27B0" },
    interactive: { type: "word-order", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", words: ["t4_w1", "t4_w2", "t4_w3", "t4_w4", "t4_w5", "t4_w6", "t4_w7"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6].slice(0, 6) },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "🤖", color: "#3F51B5" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6"].filter(x=>x!==undefined), correctIndices: [0] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" }
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "simple-icon", icon: "🚀", color: "#FF9800" },
    interactive: { type: "tap-count", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", tapCount: { emoji: "🚜", count: 2 } },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" }
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "📱", color: "#4CAF50" },
    interactive: { type: "match-pairs", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", pairs: [{left:"t7_l1",right:"t7_r1"},{left:"t7_l2",right:"t7_r2"},{left:"t7_l3",right:"t7_r3"}] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" }
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "simple-icon", icon: "👤", color: "#2196F3" },
    interactive: { type: "gap-fill", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", sentence: "t8_sent", choices: ["t8_qa2", "t8_qb2", "t8_qc2", "t8_qd2"], correctIndex: 0 },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" }
  },
  {
    infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "icon-grid", items: [{emoji:"📥",label:"Inbox"},{emoji:"🚫",label:"Spam"}] },
    interactive: { type: "drag-to-bucket", instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2", buckets: [{id:"b1",label:"t9_bl1"},{id:"b2",label:"t9_bl2"}], items: [{text:"t9_i1",bucketId:"b1"},{text:"t9_i2",bucketId:"b2"},{text:"t9_i3",bucketId:"b1"},{text:"t9_i4",bucketId:"b2"}] },
    quiz: { question: "t9_q", choices: ["t9_qa", "t9_qb", "t9_qc", "t9_qd"], answer: "t9_qa" }
  },
  {
    infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "simple-icon", icon: "🌐", color: "#00BCD4" },
    interactive: { type: "word-order", instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2", words: ["t10_w1", "t10_w2", "t10_w3", "t10_w4", "t10_w5", "t10_w6", "t10_w7"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6].slice(0, 6) },
    quiz: { question: "t10_q", choices: ["t10_qa", "t10_qb", "t10_qc", "t10_qd"], answer: "t10_qa" }
  },
  {
    infoTitle: "t11_title", infoText: "t11_text",
    svg: { type: "simple-icon", icon: "☁️", color: "#607D8B" },
    interactive: { type: "highlight-text", instruction: "t11_inst", hint1: "t11_h1", hint2: "t11_h2", tokens: ["t11_tk1","t11_tk2","t11_tk3","t11_tk4","t11_tk5","t11_tk6"].filter(x=>x!==undefined), correctIndices: [3] },
    quiz: { question: "t11_q", choices: ["t11_qa", "t11_qb", "t11_qc", "t11_qd"], answer: "t11_qa" }
  },
  {
    infoTitle: "t12_title", infoText: "t12_text",
    svg: { type: "simple-icon", icon: "🦾", color: "#795548" },
    interactive: { type: "match-pairs", instruction: "t12_inst", hint1: "t12_h1", hint2: "t12_h2", pairs: [{left:"t12_l1",right:"t12_r1"},{left:"t12_l2",right:"t12_r2"},{left:"t12_l3",right:"t12_r3"}] },
    quiz: { question: "t12_q", choices: ["t12_qa", "t12_qb", "t12_qc", "t12_qd"], answer: "t12_qa" }
  },
  {
    infoTitle: "t13_title", infoText: "t13_text",
    svg: { type: "simple-icon", icon: "🏠", color: "#FFEB3B" },
    interactive: { type: "gap-fill", instruction: "t13_inst", hint1: "t13_h1", hint2: "t13_h2", sentence: "t13_sent", choices: ["t13_qa2", "t13_qb2", "t13_qc2", "t13_qd2"], correctIndex: 0 },
    quiz: { question: "t13_q", choices: ["t13_qa", "t13_qb", "t13_qc", "t13_qd"], answer: "t13_qa" }
  },
  {
    infoTitle: "t14_title", infoText: "t14_text",
    svg: { type: "simple-icon", icon: "🛡️", color: "#673AB7" },
    interactive: { type: "word-order", instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2", words: ["t14_w1", "t14_w2", "t14_w3", "t14_w4", "t14_w5", "t14_w6", "t14_w7"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6].slice(0, 6) },
    quiz: { question: "t14_q", choices: ["t14_qa", "t14_qb", "t14_qc", "t14_qd"], answer: "t14_qa" }
  },
  {
    infoTitle: "t15_title", infoText: "t15_text",
    svg: { type: "icon-grid", items: [{emoji:"🎮",label:"Game"},{emoji:"♟️",label:"Chess"}] },
    interactive: { type: "drag-to-bucket", instruction: "t15_inst", hint1: "t15_h1", hint2: "t15_h2", buckets: [{id:"b1",label:"t15_bl1"},{id:"b2",label:"t15_bl2"}], items: [{text:"t15_i1",bucketId:"b1"},{text:"t15_i2",bucketId:"b2"},{text:"t15_i3",bucketId:"b1"},{text:"t15_i4",bucketId:"b2"}] },
    quiz: { question: "t15_q", choices: ["t15_qa", "t15_qb", "t15_qc", "t15_qd"], answer: "t15_qa" }
  }
];

