// @ts-nocheck
// lib/explorerPools/aiK7_i3.ts
import type { PoolTopicDef } from "./types";

export const INFO_K7_I3_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "KI Insel 3: Zukunft & Vision",
    t1_title: "Robotik & KI", t1_text: "Roboter werden durch KI intelligent und können komplexe Aufgaben im Alltag übernehmen.", t1_inst: "Ordne die Paare zu:", t1_h1: "Hardware trifft Software.", t1_h2: "Bewegung und Denken.", t1_q: "Was unterscheidet einen Roboter von einem normalen Computer?", t1_qa: "Er kann sich physisch bewegen", t1_qb: "Er hat einen Bildschirm", t1_qc: "Er braucht keinen Strom", t1_qd: "Er ist immer klein",
    t1_l1: "Gelenke", t1_r1: "Bewegung", t1_l2: "Sensoren", t1_r2: "Wahrnehmung", t1_l3: "KI-Gehirn", t1_r3: "Entscheidung",
    t2_title: "Wie KI die Welt sieht", t2_text: "Über Sensoren (Lidar, Radar) nimmt die KI ihre Umgebung in 3D wahr.", t2_inst: "Fülle die Lücke aus:", t2_h1: "Augen der Maschine.", t2_h2: "Abstände messen.", t2_q: "Welcher Sensor nutzt Laser zur Messung?", t2_qa: "Lidar", t2_qb: "Mikrofon", t2_qc: "Thermometer", t2_qd: "Waage",
    t2_sent: "Ein ___ Sensor erkennt Hindernisse durch Funkwellen.", t2_qa2: "Radar", t2_qb2: "Licht", t2_qc2: "Geschmacks", t2_qd2: "Geruchs",
    t3_title: "IoT & KI", t3_text: "Das 'Internet der Dinge' verbindet Alltagsgeräte, die durch KI schlauer werden.", t3_inst: "Sortiere in die Eimer:", t3_h1: "Vernetzte Welt.", t3_h2: "Smart Home.", t3_q: "Was bedeutet IoT?", t3_qa: "Internet of Things", t3_qb: "Inside of Technology", t3_qc: "Input of Time", t3_qd: "International Online Team",
    t3_bl1: "Smart Home", t3_bl2: "Normales Haus", t3_i1: "Smarte Heizung", t3_i2: "Normaler Besen", t3_i3: "KI-Kühlschrank", t3_i4: "Holztür",
    t4_title: "Smart Cities", t4_text: "KI steuert in Städten den Verkehr und spart Energie bei der Straßenbeleuchtung.", t4_inst: "Bringe die Wörter in Ordnung:", t4_h1: "Städte der Zukunft.", t4_h2: "Effizienz durch Daten.", t4_q: "Was ist ein Ziel einer Smart City?", t4_qa: "Ressourcen sparen", t4_qb: "Mehr Staus", t4_qc: "Weniger Internet", t4_qd: "Höhere Kosten",
    t4_w1: "Eine", t4_w2: "Smart", t4_w3: "City", t4_w4: "nutzt", t4_w5: "KI", t4_w6: "für", t4_w7: "besseren", t4_w8: "Verkehr.",
    t5_title: "KI im Weltraum", t5_text: "KI hilft bei der Auswertung von Satellitendaten und steuert Mars-Rover.", t5_inst: "Markiere, wie die KI den Rover steuert:", t5_h1: "Zu den Sternen.", t5_h2: "Ferne Welten erkunden.", t5_q: "Warum nutzt man KI im All?", t5_qa: "Wegen der Zeitverzögerung", t5_qb: "Wegen der Kälte", t5_qc: "Weil es dort kein Licht gibt", t5_qd: "KI kann besser atmen",
    t5_tk1: "KI", t5_tk2: "steuert", t5_tk3: "Rover", t5_tk4: "autonom", t5_tk5: "auf", t5_tk6: "dem", t5_tk7: "Mars.",
    t6_title: "Personalisierte Bildung", t6_text: "KI-Tutorien passen sich genau deinem Lerntempo und deinen Lücken an.", t6_inst: "Tippe auf den Lernpfad:", t6_h1: "Individuelles Lernen.", t6_h2: "Dein digitaler Lehrer.", t6_q: "Wie hilft KI beim Lernen?", t6_qa: "Durch passgenaue Übungen", t6_qb: "Durch Hausaufgaben-Verbot", t6_qc: "Indem sie alles vorsagt", t6_qd: "Gar nicht",
    t6_tap_count: "3", t6_tap_inst: "Tippe 3 Mal auf den Lernpfad!",
    t7_title: "Wissenschaft & KI", t7_text: "KI findet neue Medikamente oder faltet Proteine in Rekordzeit.", t7_inst: "Ordne die Paare zu:", t7_h1: "Labor der Zukunft.", t7_h2: "Forschung beschleunigen.", t7_q: "Was kann KI in der Chemie tun?", t7_qa: "Strukturen simulieren", t7_qb: "Reagenzgläser putzen", t7_qc: "Kaffee kochen", t7_qd: "Sauerstoff erzeugen",
    t7_l1: "Protein", t7_r1: "Biologie", t7_l2: "Molekül", t7_r2: "Chemie", t7_l3: "Daten", t7_r3: "Grundlage",
    t8_title: "Klimaschutz mit KI", t8_text: "KI berechnet Klimamodelle und hilft, den Energieverbrauch weltweit zu senken.", t8_inst: "Fülle die Lücke aus:", t8_h1: "Rettet den Planeten.", t8_h2: "Umwelttechnik.", t8_q: "Wie schützt KI die Umwelt?", t8_qa: "Durch Optimierung von Energie", t8_qb: "Durch mehr Plastik", t8_qc: "Indem sie Bäume fällt", t8_qd: "Durch mehr Server",
    t8_sent: "KI hilft dabei, ___ Energiequellen besser zu nutzen.", t8_qa2: "erneuerbare", t8_qb2: "schmutzige", t8_qc2: "alte", t8_qd2: "keine",
    t9_title: "Brain-Computer Interface", t9_text: "Die Verbindung zwischen Gehirn und Computer (Gedankensteuerung).", t9_inst: "Sortiere in die Eimer:", t9_h1: "Sci-Fi wird wahr.", t9_h2: "Direktverbindung.", t9_q: "Was verbindet ein BCI?", t9_qa: "Gehirn und Maschine", t9_qb: "Maus und Tastatur", t9_qc: "Handy und WLAN", t9_qd: "Auto und Straße",
    t9_bl1: "Input (Rein)", t9_bl2: "Output (Raus)", t9_i1: "Sinneseindruck", t9_i2: "Roboterarm-Steuerung", t9_i3: "Virtuelles Bild", t9_i4: "Text tippen",
    t10_title: "Quantencomputing & KI", t10_text: "Quantencomputer könnten KI-Modelle millionenfach schneller trainieren.", t10_inst: "Bringe die Wörter in Ordnung:", t10_h1: "Super-Computer.", t10_h2: "Zukunftstechnologie.", t10_q: "Was ist der Vorteil von Quanten-KI?", t10_qa: "Enorme Geschwindigkeit", t10_qb: "Sie ist kleiner", t10_qc: "Sie braucht kein Kabel", t10_qd: "Sie ist billiger",
    t10_w1: "Quanten", t10_w2: "beschleunigen", t10_w3: "das", t10_w4: "Training", t10_w5: "komplexer", t10_w6: "KI", t10_w7: "Modelle.",
    t11_title: "Die Singularität", t11_text: "Ein theoretischer Zeitpunkt, an dem KI klüger als die gesamte Menschheit wird.", t11_inst: "Markiere die zwei Wörter für die super-schlaue Zukunft:", t11_h1: "Superintelligenz.", t11_h2: "Zukunftstheorie.", t11_q: "Was ist die Singularität?", t11_qa: "KI übertrifft Menschen", t11_qb: "Ein neuer Feiertag", t11_qc: "Ein KI-Museum", t11_qd: "Ein kaputter Computer",
    t11_tk1: "Singularität", t11_tk2: "beschreibt", t11_tk3: "den", t11_tk4: "großen", t11_tk5: "Aufstieg", t11_tk6: "der", t11_tk7: "Superintelligenz.",
    t12_title: "Kreative KI", t12_text: "KI schreibt Gedichte und Geschichten, die fast menschlich wirken.", t12_inst: "Tippe auf die Kreativität:", t12_h1: "Dichtung mit Daten.", t12_h2: "KI als Autor.", t12_q: "Was kann eine KI-Schreibsoftware?", t12_qa: "Texte verfassen", t12_qb: "Bilder malen", t12_qc: "Kaffee kochen", t12_qd: "Hardware reparieren",
    t12_tap_count: "4", t12_tap_inst: "Tippe 4 Mal auf das Buch!",
    t13_title: "Game AI", t13_text: "KI macht Gegner in Videospielen schlauer und Welten lebendiger.", t13_inst: "Ordne die Paare zu:", t13_h1: "Smarte Gegner.", t13_h2: "Spielspaß.", t13_q: "Was macht Game AI?", t13_qa: "Steuert NPC-Verhalten", t13_qb: "Macht das Internet schneller", t13_qc: "Säubert die Konsole", t13_qd: "Verkauft Spiele",
    t13_l1: "NPC", t13_r1: "Spielfigur", t13_l2: "Pathfinding", t13_r2: "Wegfindung", t13_l3: "Procedural", t13_r3: "Zufällig generiert",
    t14_title: "Deine Zukunft mit KI", t14_text: "Du wirst lernen, KI als Werkzeug für deine eigenen Ideen zu nutzen.", t14_inst: "Fülle die Lücke aus:", t14_h1: "Du bist der Chef.", t14_h2: "Mitgestaltung.", t14_q: "Was ist wichtig im Umgang mit KI?", t14_qa: "Kritisches Denken", t14_qb: "Blindes Vertrauen", t14_qc: "Angst", t14_qd: "Ignoranz",
    t14_sent: "Wir nutzen KI als ___ für unsere Arbeit.", t14_qa2: "Werkzeug", t14_qb2: "Ersatz", t14_qc2: "Spielzeug", t14_qd2: "Feind",
    t15_title: "KI-Visionen", t15_text: "Wie wird die Welt in 50 Jahren aussehen? KI wird ein Teil davon sein.", t15_inst: "Sortiere in die Eimer:", t15_h1: "Utopie oder Dystopie?", t15_h2: "Zukunftsszenarien.", t15_q: "Wer gestaltet die KI-Zukunft?", t15_qa: "Wir alle", t15_qb: "Nur Roboter", t15_qc: "Niemand", t15_qd: "Die Natur allein",
    t15_bl1: "Positive Vision", t15_bl2: "Herausforderung", t15_i1: "Krankheiten geheilt", t15_i2: "Falschinformationen", t15_i3: "Saubere Energie", t15_i4: "Kontrollverlust"
  },
  en: {
    explorer_title: "AI Island 3: Future & Vision",
    t1_title: "Robotics & AI", t1_text: "Robots become intelligent through AI and can take on complex tasks in daily life.", t1_inst: "Match the pairs:", t1_h1: "Hardware meets software.", t1_h2: "Movement and thinking.", t1_q: "What distinguishes a robot from a normal computer?", t1_qa: "It can move physically", t1_qb: "It has a screen", t1_qc: "It doesn't need power", t1_qd: "It is always small",
    t1_l1: "Joints", t1_r1: "Movement", t1_l2: "Sensors", t1_r2: "Perception", t1_l3: "AI Brain", t1_r3: "Decision",
    t2_title: "How AI Sees the World", t2_text: "Through sensors (Lidar, Radar), AI perceives its environment in 3D.", t2_inst: "Fill in the blank:", t2_h1: "Eyes of the machine.", t2_h2: "Measuring distances.", t2_q: "Which sensor uses lasers for measurement?", t2_qa: "Lidar", t2_qb: "Microphone", t2_qc: "Thermometer", t2_qd: "Scale",
    t2_sent: "A ___ sensor detects obstacles using radio waves.", t2_qa2: "Radar", t2_qb2: "Light", t2_qc2: "Taste", t2_qd2: "Smell",
    t3_title: "IoT & AI", t3_text: "The 'Internet of Things' connects everyday devices that get smarter through AI.", t3_inst: "Sort into buckets:", t3_h1: "Connected world.", t3_h2: "Smart Home.", t3_q: "What does IoT stand for?", t3_qa: "Internet of Things", t3_qb: "Inside of Technology", t3_qc: "Input of Time", t3_qd: "International Online Team",
    t3_bl1: "Smart Home", t3_bl2: "Normal House", t3_i1: "Smart heating", t3_i2: "Normal broom", t3_i3: "AI Fridge", t3_i4: "Wooden door",
    t4_title: "Smart Cities", t4_text: "In cities, AI manages traffic and saves energy in street lighting.", t4_inst: "Put the words in order:", t4_h1: "Cities of the future.", t4_h2: "Efficiency through data.", t4_q: "What is a goal of a Smart City?", t4_qa: "Saving resources", t4_qb: "More traffic jams", t4_qc: "Less internet", t4_qd: "Higher costs",
    t4_w1: "A", t4_w2: "Smart", t4_w3: "City", t4_w4: "uses", t4_w5: "AI", t4_w6: "for", t4_w7: "better", t4_w8: "traffic.",
    t5_title: "AI in Space", t5_text: "AI helps in analyzing satellite data and controls Mars rovers.", t5_inst: "Highlight how the AI controls the rover:", t5_h1: "To the stars.", t5_h2: "Exploring distant worlds.", t5_q: "Why is AI used in space?", t5_qa: "Because of the time delay", t5_qb: "Because of the cold", t5_qc: "Because there is no light", t5_qd: "AI can breathe better",
    t5_tk1: "AI", t5_tk2: "controls", t5_tk3: "rovers", t5_tk4: "autonomously", t5_tk5: "on", t5_tk6: "Mars.", t5_tk7: "",
    t6_title: "Personalized Education", t6_text: "AI tutorials adapt exactly to your learning pace and your gaps.", t6_inst: "Tap on the learning path:", t6_h1: "Individual learning.", t6_h2: "Your digital tutor.", t6_q: "How does AI help with learning?", t6_qa: "Through tailor-made exercises", t6_qb: "By banning homework", t6_qc: "By telling you all the answers", t6_qd: "Not at all",
    t6_tap_count: "3", t6_tap_inst: "Tap the learning path 3 times!",
    t7_title: "Science & AI", t7_text: "AI finds new medicines or folds proteins in record time.", t7_inst: "Match the pairs:", t7_h1: "Lab of the future.", t7_h2: "Accelerating research.", t7_q: "What can AI do in chemistry?", t7_qa: "Simulate structures", t7_qb: "Clean test tubes", t7_qc: "Make coffee", t7_qd: "Generate oxygen",
    t7_l1: "Protein", t7_r1: "Biology", t7_l2: "Molecule", t7_r2: "Chemistry", t7_l3: "Data", t7_r3: "Foundation",
    t8_title: "Climate Protection with AI", t8_text: "AI calculates climate models and helps to reduce global energy consumption.", t8_inst: "Fill in the blank:", t8_h1: "Save the planet.", t8_h2: "Environmental tech.", t8_q: "How does AI protect the environment?", t8_qa: "By optimizing energy", t8_qb: "By more plastic", t8_qc: "By cutting down trees", t8_qd: "By more servers",
    t8_sent: "AI helps to better utilize ___ energy sources.", t8_qa2: "renewable", t8_qb2: "dirty", t8_qc2: "old", t8_qd2: "no",
    t9_title: "Brain-Computer Interface", t9_text: "The connection between brain and computer (mind control).", t9_inst: "Sort into buckets:", t9_h1: "Sci-Fi comes true.", t9_h2: "Direct connection.", t9_q: "What does a BCI connect?", t9_qa: "Brain and machine", t9_qb: "Mouse and keyboard", t9_qc: "Phone and WLAN", t9_qd: "Car and road",
    t9_bl1: "Input (In)", t9_bl2: "Output (Out)", t9_i1: "Sensory impression", t9_i2: "Robot arm control", t9_i3: "Virtual image", t9_i4: "Typing text",
    t10_title: "Quantum Computing & AI", t10_text: "Quantum computers could train AI models millions of times faster.", t10_inst: "Put the words in order:", t10_h1: "Super computers.", t10_h2: "Future technology.", t10_q: "What is the advantage of Quantum AI?", t10_qa: "Enormous speed", t10_qb: "It is smaller", t10_qc: "It needs no cable", t10_qd: "It is cheaper",
    t10_w1: "Quantum", t10_w2: "accelerates", t10_w3: "the", t10_w4: "training", t10_w5: "of", t10_w6: "complex", t10_w7: "AI", t10_w8: "models.",
    t11_title: "The Singularity", t11_text: "A theoretical point in time when AI becomes smarter than all of humanity.", t11_inst: "Highlight the two words for the super-smart future:", t11_h1: "Superintelligence.", t11_h2: "Future theory.", t11_q: "What is the Singularity?", t11_qa: "AI surpasses humans", t11_qb: "A new holiday", t11_qc: "An AI museum", t11_qd: "A broken computer",
    t11_tk1: "Singularity", t11_tk2: "describes", t11_tk3: "the", t11_tk4: "great", t11_tk5: "rise", t11_tk6: "of", t11_tk7: "superintelligence.",
    t12_title: "Creative AI", t12_text: "AI writes poems and stories that seem almost human.", t12_inst: "Tap on the creativity:", t12_h1: "Poetry with data.", t12_h2: "AI as author.", t12_q: "What can AI writing software do?", t12_qa: "Compose texts", t12_qb: "Paint pictures", t12_qc: "Make coffee", t12_qd: "Repair hardware",
    t12_tap_count: "4", t12_tap_inst: "Tap the book 4 times!",
    t13_title: "Game AI", t13_text: "AI makes opponents in video games smarter and worlds more alive.", t13_inst: "Match the pairs:", t13_h1: "Smart opponents.", t13_h2: "Gaming fun.", t13_q: "What does Game AI do?", t13_qa: "Controls NPC behavior", t13_qb: "Makes internet faster", t13_qc: "Cleans the console", t13_qd: "Sells games",
    t13_l1: "NPC", t13_r1: "Game character", t13_l2: "Pathfinding", t13_r2: "Route finding", t13_l3: "Procedural", t13_r3: "Randomly generated",
    t14_title: "Your Future with AI", t14_text: "You will learn to use AI as a tool for your own ideas.", t14_inst: "Fill in the blank:", t14_h1: "You are the boss.", t14_h2: "Shaping the future.", t14_q: "What is important when dealing with AI?", t14_qa: "Critical thinking", t14_qb: "Blind trust", t14_qc: "Fear", t14_qd: "Ignorance",
    t14_sent: "We use AI as a ___ for our work.", t14_qa2: "tool", t14_qb2: "replacement", t14_qc2: "toy", t14_qd2: "enemy",
    t15_title: "AI Visions", t15_text: "What will the world look like in 50 years? AI will be a part of it.", t15_inst: "Sort into buckets:", t15_h1: "Utopia or Dystopia?", t15_h2: "Future scenarios.", t15_q: "Who shapes the AI future?", t15_qa: "All of us", t15_qb: "Only robots", t15_qc: "Nobody", t15_qd: "Nature alone",
    t15_bl1: "Positive Vision", t15_bl2: "Challenge", t15_i1: "Diseases cured", t15_i2: "Misinformation", t15_i3: "Clean energy", t15_i4: "Loss of control"
  },
  hu: {
    explorer_title: "KI Sziget 3: Jövő & Vízió",
    t1_title: "Robotika & KI", t1_text: "A robotok a MI által válnak intelligenssé, és képesek összetett feladatokat ellátni a mindennapokban.", t1_inst: "Párosítsd össze:", t1_h1: "Hardver és szoftver találkozása.", t1_h2: "Mozgás és gondolkodás.", t1_q: "Mi különbözteti meg a robotot egy sima számítógéptől?", t1_qa: "Képes fizikai mozgásra", t1_qb: "Van képernyője", t1_qc: "Nincs szüksége áramra", t1_qd: "Mindig kicsi",
    t1_l1: "Ízületek", t1_r1: "Mozgás", t1_l2: "Szenzorok", t1_r2: "Érzékelés", t1_l3: "MI-agy", t1_r3: "Döntés",
    t2_title: "Hogyan látja a MI a világot", t2_text: "Szenzorokon keresztül (Lidar, Radar) a MI 3D-ben érzékeli a környezetét.", t2_inst: "Töltsd ki a hiányt:", t2_h1: "A gép szemei.", t2_h2: "Távolságmérés.", t2_q: "Melyik szenzor használ lézert a méréshez?", t2_qa: "Lidar", t2_qb: "Mikrofon", t2_qc: "Hőmérő", t2_qd: "Mérleg",
    t2_sent: "A ___ szenzor rádióhullámokkal ismeri fel az akadályokat.", t2_qa2: "Radar", t2_qb2: "Fény", t2_qc2: "Ízlelő", t2_qd2: "Szagló",
    t3_title: "IoT & KI", t3_text: "A 'Dolgok Internete' összeköti a mindennapi eszközöket, amik a MI-vel okosabbak lesznek.", t3_inst: "Válogasd szét:", t3_h1: "Összekapcsolt világ.", t3_h2: "Okosotthon.", t3_q: "Mit jelent az IoT?", t3_qa: "Internet of Things", t3_qb: "Inside of Technology", t3_qc: "Input of Time", t3_qd: "International Online Team",
    t3_bl1: "Okosotthon", t3_bl2: "Sima ház", t3_i1: "Okos fűtés", t3_i2: "Sima seprű", t3_i3: "MI hűtő", t3_i4: "Fajó",
    t4_title: "Smart Cities (Okos városok)", t4_text: "A városokban a MI irányítja a forgalmat és energiát spórol az utcai világítással.", t4_inst: "Tedd sorrendbe a szavakat:", t4_h1: "A jövő városai.", t4_h2: "Hatékonyság adatokkal.", t4_q: "Mi az okos város célja?", t4_qa: "Erőforrások spórolása", t4_qb: "Több dugó", t4_qc: "Kevesebb internet", t4_qd: "Magasabb költségek",
    t4_w1: "Az", t4_w2: "okos", t4_w3: "város", t4_w4: "MI-t", t4_w5: "használ", t4_w6: "a jobb", t4_w7: "közlekedésért.", t4_w8: "",
    t5_title: "MI az űrben", t5_text: "A MI segít a műholdas adatok elemzésében és Mars-járókat irányít.", t5_inst: "Jelöld meg, hogyan irányítja a MI a járókat:", t5_h1: "A csillagok felé.", t5_h2: "Távoli világok felfedezése.", t5_q: "Miért használnak MI-t az űrben?", t5_qa: "Az időeltolódás miatt", t5_qb: "A hideg miatt", t5_qc: "Mert ott nincs fény", t5_qd: "A MI jobban kap levegőt",
    t5_tk1: "A MI", t5_tk2: "irányítja", t5_tk3: "a járókat", t5_tk4: "önállóan", t5_tk5: "a", t5_tk6: "Marson.", t5_tk7: "",
    t6_title: "Személyre szabott oktatás", t6_text: "A MI tutorok pontosan a te tanulási tempódhoz és hiányosságaidhoz igazodnak.", t6_inst: "Kattints a tanulási útra:", t6_h1: "Egyéni tanulás.", t6_h2: "A digitális tanárod.", t6_q: "Hogyan segít a MI a tanulásban?", t6_qa: "Személyre szabott feladatokkal", t6_qb: "A házi feladat betiltásával", t6_qc: "Úgy, hogy mindent megsúg", t6_qd: "Sehogy",
    t6_tap_count: "3", t6_tap_inst: "Kattints a tanulási útra 3-szor!",
    t7_title: "Tudomány & MI", t7_text: "A MI új gyógyszereket talál vagy fehérjéket hajtogat rekordidő alatt.", t7_inst: "Párosítsd össze:", t7_h1: "A jövő laborja.", t7_h2: "Kutatás felgyorsítása.", t7_q: "Mit tud a MI a kémiában?", t7_qa: "Szerkezeteket szimulálni", t7_qb: "Kémcsöveket mosni", t7_qc: "Kávét főzni", t7_qd: "Oxigént termelni",
    t7_l1: "Fehérje", t7_r1: "Biológia", t7_l2: "Molekula", t7_r2: "Kémia", t7_l3: "Adat", t7_r3: "Alapzat",
    t8_title: "Klímavédelem MI-vel", t8_text: "A MI klímamodelleket számol és segít csökkenteni az energiafogyasztást.", t8_inst: "Töltsd ki a hiányt:", t8_h1: "Mentsük meg a bolygót.", t8_h2: "Környezeti technika.", t8_q: "Hogyan védi a MI a környezetet?", t8_qa: "Energiaoptimalizálással", t8_qb: "Több műanyaggal", t8_qc: "Fakivágással", t8_qd: "Több szerverrel",
    t8_sent: "A MI segít a ___ energiaforrások jobb kihasználásában.", t8_qa2: "megújuló", t8_qb2: "szennyező", t8_qc2: "régi", t8_qd2: "semmilyen",
    t9_title: "Brain-Computer Interface", t9_text: "Az agy és a számítógép közötti kapcsolat (gondolati irányítás).", t9_inst: "Válogasd szét:", t9_h1: "A sci-fi valósággá válik.", t9_h2: "Közvetlen kapcsolat.", t9_q: "Mit köt össze a BCI?", t9_qa: "Agyat és gépet", t9_qb: "Egeret és billentyűzetet", t9_qc: "Mobilt és Wi-Fi-t", t9_qd: "Autót és utat",
    t9_bl1: "Bevitel (Be)", t9_bl2: "Kivitel (Ki)", t9_i1: "Érzéklet", t9_i2: "Robotkar irányítása", t9_i3: "Virtuális kép", t9_i4: "Szöveg gépelése",
    t10_title: "Kvantum MI", t10_text: "A kvantumszámítógépek milliószor gyorsabban taníthatják a MI modelleket.", t10_inst: "Tedd sorrendbe a szavakat:", t10_h1: "Szuper-számítógép.", t10_h2: "Jövő technológiája.", t10_q: "Mi a kvantum MI előnye?", t10_qa: "Hatalmas sebesség", t10_qb: "Kisebb méret", t10_qc: "Nem kell kábel", t10_qd: "Olcsóbb",
    t10_w1: "A kvantumok", t10_w2: "felgyorsítják", t10_w3: "az összetett", t10_w4: "MI modellek", t10_w5: "tanítását.", t10_w6: "", t10_w7: "", t10_w8: "",
    t11_title: "A Szingularitás", t11_text: "Egy elméleti időpont, amikor a MI okosabb lesz az egész emberiségnél.", t11_inst: "Jelöld meg a két szót a szuper-okos jövőre:", t11_h1: "Szuperintelligencia.", t11_h2: "Jövőelmélet.", t11_q: "Mi a szingularitás?", t11_qa: "A MI túlszárnyalja az embert", t11_qb: "Egy új ünnepnap", t11_qc: "Egy MI múzeum", t11_qd: "Egy elromlott gép",
    t11_tk1: "A szingularitás", t11_tk2: "a", t11_tk3: "gépek", t11_tk4: "nagy", t11_tk5: "felemelkedése,", t11_tk6: "a", t11_tk7: "szuperintelligencia.",
    t12_title: "Kreatív MI", t12_text: "A MI verseket és történeteket ír, amik majdnem emberinek tűnnek.", t12_inst: "Kattints a kreativitásra:", t12_h1: "Költészet adatokkal.", t12_h2: "A MI mint szerző.", t12_q: "Mire képes egy MI szövegíró szoftver?", t12_qa: "Szövegek írására", t12_qb: "Képek festésére", t12_qc: "Kávéfőzésre", t12_qd: "Hardverjavításra",
    t12_tap_count: "4", t12_tap_inst: "Kattints a könyvre 4-szer!",
    t13_title: "Game AI (Játék MI)", t13_text: "A MI okosabbá teszi az ellenfeleket a játékokban és élettelibbé a világokat.", t13_inst: "Párosítsd össze:", t13_h1: "Okos ellenfelek.", t13_h2: "Játékélmény.", t13_q: "Mit csinál a játék MI?", t13_qa: "Irányítja az NPC-k viselkedését", t13_qb: "Gyorsítja a netet", t13_qc: "Tisztítja a konzolt", t13_qd: "Játékokat árul",
    t13_l1: "NPC", t13_r1: "Játékkarakter", t13_l2: "Pathfinding", t13_r2: "Útvonalkeresés", t13_l3: "Procedural", t13_r3: "Véletlenszerűen generált",
    t14_title: "A jövőd a MI-vel", t14_text: "Meg fogod tanulni a MI-t eszközként használni a saját ötleteidhez.", t14_inst: "Töltsd ki a hiányt:", t14_h1: "Te vagy a főnök.", t14_h2: "A jövő alakítása.", t14_q: "Mi fontos a MI-vel való kapcsolatban?", t14_qa: "Kritikus gondolkodás", t14_qb: "Vak bizalom", t14_qc: "Félelem", t14_qd: "Ignorancia",
    t14_sent: "A MI-t ___ használjuk a munkánkhoz.", t14_qa2: "eszközként", t14_qb2: "pótlékként", t14_qc2: "játékként", t14_qd2: "ellenségként",
    t15_title: "MI-víziók", t15_text: "Milyen lesz a világ 50 év múlva? A MI a részese lesz.", t15_inst: "Válogasd szét:", t15_h1: "Utópia vagy disztópia?", t15_h2: "Jövőbeli forgatókönyvek.", t15_q: "Ki alakítja a MI jövőjét?", t15_qa: "Mindannyian", t15_qb: "Csak a robotok", t15_qc: "Senki", t15_qd: "Csak a természet",
    t15_bl1: "Pozitív vízió", t15_bl2: "Kihívás", t15_i1: "Gyógyított betegségek", t15_i2: "Félreinformálás", t15_i3: "Tiszta energia", t15_i4: "Kontrollvesztés"
  },
  ro: {
    explorer_title: "IA Insula 3: Viitor & Viziune",
    t1_title: "Robotică & IA", t1_text: "Roboții devin inteligenți prin IA și pot prelua sarcini complexe în viața de zi cu zi.", t1_inst: "Potrivește perechile:", t1_h1: "Hardware întâlnește software.", t1_h2: "Mișcare și gândire.", t1_q: "Ce deosebește un robot de un calculator obișnuit?", t1_qa: "Se poate mișca fizic", t1_qb: "Are ecran", t1_qc: "Nu are nevoie de curent", t1_qd: "Este mereu mic",
    t1_l1: "Articulații", t1_r1: "Mișcare", t1_l2: "Senzori", t1_r2: "Percepție", t1_l3: "Creier IA", t1_r3: "Decizie",
    t2_title: "Cum vede IA lumea", t2_text: "Prin senzori (Lidar, Radar), IA își percepe mediul în 3D.", t2_inst: "Completează spațiul liber:", t2_h1: "Ochii mașinii.", t2_h2: "Măsurarea distanțelor.", t2_q: "Ce senzor folosește lasere pentru măsurare?", t2_qa: "Lidar", t2_qb: "Microfon", t2_qc: "Termometru", t2_qd: "Cântar",
    t2_sent: "Un senzor ___ detectează obstacolele prin unde radio.", t2_qa2: "Radar", t2_qb2: "de lumină", t2_qc2: "de gust", t2_qd2: "de miros",
    t3_title: "IoT & IA", t3_text: "'Internetul Lucrurilor' conectează dispozitivele obișnuite care devin mai deștepte prin IA.", t3_inst: "Sortează în găleți:", t3_h1: "Lume conectată.", t3_h2: "Smart Home.", t3_q: "Ce înseamnă IoT?", t3_qa: "Internet of Things", t3_qb: "Inside of Technology", t3_qc: "Input of Time", t3_qd: "International Online Team",
    t3_bl1: "Smart Home", t3_bl2: "Casă normală", t3_i1: "Încălzire smart", t3_i2: "Mătură normală", t3_i3: "Frigider IA", t3_i4: "Ușă de lemn",
    t4_title: "Smart Cities (Orașe inteligente)", t4_text: "În orașe, IA gestionează traficul și economisește energie la iluminatul stradal.", t4_inst: "Pune cuvintele în ordine:", t4_h1: "Orașele viitorului.", t4_h2: "Eficiență prin date.", t4_q: "Care este un scop al unui Smart City?", t4_qa: "Economisirea resurselor", t4_qb: "Mai multe ambuteiaje", t4_qc: "Mai puțin internet", t4_qd: "Costuri mai mari",
    t4_w1: "Un", t4_w2: "Smart", t4_w3: "City", t4_w4: "folosește", t4_w5: "IA", t4_w6: "pentru", t4_w7: "un trafic", t4_w8: "mai bun.",
    t5_title: "IA în spațiu", t5_text: "IA ajută la analiza datelor de satelit și controlează roverele de pe Marte.", t5_inst: "Evidențiază cum controlează IA roverul:", t5_h1: "Către stele.", t5_h2: "Explorarea lumilor îndepărtate.", t5_q: "De ce se folosește IA în spațiu?", t5_qa: "Din cauza întârzierii semnalului", t5_qb: "Din cauza frigului", t5_qc: "Fiindcă acolo nu e lumină", t5_qd: "IA poate respira mai bine",
    t5_tk1: "IA", t5_tk2: "controlează", t5_tk3: "roverele", t5_tk4: "autonom", t5_tk5: "pe", t5_tk6: "Marte.", t5_tk7: "",
    t6_title: "Educație personalizată", t6_text: "Tutorialele IA se adaptează exact ritmului tău de învățare și lipsurilor tale.", t6_inst: "Atinge calea de învățare:", t6_h1: "Învățare individuală.", t6_h2: "Tutorul tău digital.", t6_q: "Cum ajută IA la învățare?", t6_qa: "Prin exerciții personalizate", t6_qb: "Prin interzicerea temelor", t6_qc: "Spunându-ți toate răspunsurile", t6_qd: "Deloc",
    t6_tap_count: "3", t6_tap_inst: "Atinge calea de învățare de 3 ori!",
    t7_title: "Știință & IA", t7_text: "IA găsește medicamente noi sau pliază proteine în timp record.", t7_inst: "Potrivește perechile:", t7_h1: "Laboratorul viitorului.", t7_h2: "Accelerarea cercetării.", t7_q: "Ce poate face IA în chimie?", t7_qa: "Simularea structurilor", t7_qb: "Spălarea eprubetelor", t7_qc: "Prepararea cafelei", t7_qd: "Generarea de oxigen",
    t7_l1: "Proteină", t7_r1: "Biologie", t7_l2: "Moleculă", t7_r2: "Chimie", t7_l3: "Date", t7_r3: "Fundație",
    t8_title: "Protecția climei cu IA", t8_text: "IA calculează modele climatice și ajută la reducerea consumului de energie global.", t8_inst: "Completează spațiul liber:", t8_h1: "Salvați planeta.", t8_h2: "Tehnică de mediu.", t8_q: "Cum protejează IA mediul?", t8_qa: "Prin optimizarea energiei", t8_qb: "Prin mai mult plastic", t8_qc: "Tăind copacii", t8_qd: "Prin mai multe servere",
    t8_sent: "IA ajută la o mai bună utilizare a surselor de energie ___.", t8_qa2: "regenerabile", t8_qb2: "murdare", t8_qc2: "vechi", t8_qd2: "inexistente",
    t9_title: "Brain-Computer Interface", t9_text: "Conexiunea dintre creier și computer (control prin gândire).", t9_inst: "Sortează în găleți:", t9_h1: "Sci-Fi devine realitate.", t9_h2: "Conexiune directă.", t9_q: "Ce conectează un BCI?", t9_qa: "Creierul și mașina", t9_qb: "Mouse-ul și tastatura", t9_qc: "Telefonul și Wi-Fi", t9_qd: "Mașina și drumul",
    t9_bl1: "Intrare (In)", t9_bl2: "Ieșire (Out)", t9_i1: "Impresie senzorială", t9_i2: "Control braț robot", t9_i3: "Imagine virtuală", t9_i4: "Tastare text",
    t10_title: "Quantum IA", t10_text: "Computerele cuantice ar putea antrena modelele IA de milioane de ori mai rapid.", t10_inst: "Pune cuvintele în ordine:", t10_h1: "Super computere.", t10_h2: "Tehnologia viitorului.", t10_q: "Care este avantajul IA cuantice?", t10_qa: "Viteză enormă", t10_qb: "Este mai mică", t10_qc: "Nu are nevoie de cablu", t10_qd: "Este mai ieftină",
    t10_w1: "Cuantele", t10_w2: "accelerează", t10_w3: "antrenarea", t10_w4: "modelelor", t10_w5: "IA", t10_w6: "complexe.", t10_w7: "", t10_w8: "",
    t11_title: "Singularitatea", t11_text: "Un moment teoretic în timp când IA devine mai deșteaptă decât întreaga umanitate.", t11_inst: "Evidențiază cele două cuvinte pentru viitorul super-inteligent:", t11_h1: "Superinteligență.", t11_h2: "Teoria viitorului.", t11_q: "Ce este singularitatea?", t11_qa: "IA depășește oamenii", t11_qb: "O nouă zi de sărbătoare", t11_qc: "Un muzeu IA", t11_qd: "Un computer stricat",
    t11_tk1: "Singularitatea", t11_tk2: "descrie", t11_tk3: "marea", t11_tk4: "ascensiune", t11_tk5: "a", t11_tk6: "noii", t11_tk7: "superinteligențe.",
    t12_title: "IA creativă", t12_text: "IA scrie poezii și povești care par aproape umane.", t12_inst: "Atinge creativitatea:", t12_h1: "Poezie cu date.", t12_h2: "IA ca autor.", t12_q: "Ce poate face un software de scriere IA?", t12_qa: "Compunerea de texte", t12_qb: "Pictarea de tablouri", t12_qc: "Prepararea cafelei", t12_qd: "Repararea hardware-ului",
    t12_tap_count: "4", t12_tap_inst: "Atinge cartea de 4 ori!",
    t13_title: "Game AI (IA în jocuri)", t13_text: "IA face adversarii din jocuri mai deștepți și lumile mai vii.", t13_inst: "Potrivește perechile:", t13_h1: "Adversari smart.", t13_h2: "Distracție în joc.", t13_q: "Ce face Game IA?", t13_qa: "Controlează comportamentul NPC", t13_qb: "Face internetul mai rapid", t13_qc: "Curăță consola", t13_qd: "Vinde jocuri",
    t13_l1: "NPC", t13_r1: "Personaj de joc", t13_l2: "Pathfinding", t13_r2: "Găsirea rutei", t13_l3: "Procedural", t13_r3: "Generat aleatoriu",
    t14_title: "Viitorul tău cu IA", t14_text: "Vei învăța să folosești IA ca pe un instrument pentru propriile tale idei.", t14_inst: "Completează spațiul liber:", t14_h1: "Tu ești șeful.", t14_h2: "Modelarea viitorului.", t14_q: "Ce este important în relația cu IA?", t14_qa: "Gândirea critică", t14_qb: "Încrederea oarbă", t14_qc: "Teama", t14_qd: "Ignoranța",
    t14_sent: "Folosim IA ca pe un ___ pentru munca noastră.", t14_qa2: "instrument", t14_qb2: "înlocuitor", t14_qc2: "jucărie", t14_qd2: "dușman",
    t15_title: "Viziuni IA", t15_text: "Cum va arăta lumea peste 50 de ani? IA va face parte din ea.", t15_inst: "Sortează în găleți:", t15_h1: "Utopie sau distopie?", t15_h2: "Scenarii de viitor.", t15_q: "Cine modelează viitorul IA?", t15_qa: "Noi toți", t15_qb: "Doar roboții", t15_qc: "Nimeni", t15_qd: "Doar natura",
    t15_bl1: "Viziune pozitivă", t15_bl2: "Provocare", t15_i1: "Boli vindecate", t15_i2: "Dezinformare", t15_i3: "Energie curată", t15_i4: "Pierderea controlului"
  }
};

export const INFO_K7_I3_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "simple-icon", icon: "🤖", color: "#FF5722" },
    interactive: { type: "match-pairs", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", pairs: [{left:"t1_l1",right:"t1_r1"},{left:"t1_l2",right:"t1_r2"},{left:"t1_l3",right:"t1_r3"}] },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" }
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "📡", color: "#607D8B" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" }
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "icon-grid", items: [{emoji:"🏠",label:"Home"},{emoji:"🌐",label:"Network"}] },
    interactive: { type: "drag-to-bucket", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", buckets: [{id:"b1",label:"t3_bl1"},{id:"b2",label:"t3_bl2"}], items: [{text:"t3_i1",bucketId:"b1"},{text:"t3_i2",bucketId:"b2"},{text:"t3_i3",bucketId:"b1"},{text:"t3_i4",bucketId:"b2"}] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "🏙️", color: "#2196F3" },
    interactive: { type: "word-order", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", words: ["t4_w1", "t4_w2", "t4_w3", "t4_w4", "t4_w5", "t4_w6", "t4_w7", "t4_w8"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6,7].slice(0, 8) },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "🚀", color: "#3F51B5" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6","t5_tk7"].filter(x=>x!==undefined), correctIndices: [3] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" }
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "simple-icon", icon: "🎓", color: "#4CAF50" },
    interactive: { type: "tap-count", instruction: "t6_tap_inst", tapCount: { emoji: "🎓", count: 3 } },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" }
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "🧬", color: "#9C27B0" },
    interactive: { type: "match-pairs", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", pairs: [{left:"t7_l1",right:"t7_r1"},{left:"t7_l2",right:"t7_r2"},{left:"t7_l3",right:"t7_r3"}] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" }
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "simple-icon", icon: "🌍", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", sentence: "t8_sent", choices: ["t8_qa2", "t8_qb2", "t8_qc2", "t8_qd2"], correctIndex: 0 },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" }
  },
  {
    infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "icon-grid", items: [{emoji:"📥",label:"In"},{emoji:"📤",label:"Out"}] },
    interactive: { type: "drag-to-bucket", instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2", buckets: [{id:"b1",label:"t9_bl1"},{id:"b2",label:"t9_bl2"}], items: [{text:"t9_i1",bucketId:"b1"},{text:"t9_i2",bucketId:"b2"},{text:"t9_i3",bucketId:"b1"},{text:"t9_i4",bucketId:"b2"}] },
    quiz: { question: "t9_q", choices: ["t9_qa", "t9_qb", "t9_qc", "t9_qd"], answer: "t9_qa" }
  },
  {
    infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "simple-icon", icon: "⚛️", color: "#FFC107" },
    interactive: { type: "word-order", instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2", words: ["t10_w1", "t10_w2", "t10_w3", "t10_w4", "t10_w5", "t10_w6", "t10_w7", "t10_w8"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6,7].slice(0, 7) },
    quiz: { question: "t10_q", choices: ["t10_qa", "t10_qb", "t10_qc", "t10_qd"], answer: "t10_qa" }
  },
  {
    infoTitle: "t11_title", infoText: "t11_text",
    svg: { type: "simple-icon", icon: "♾️", color: "#000000" },
    interactive: { type: "highlight-text", instruction: "t11_inst", hint1: "t11_h1", hint2: "t11_h2", tokens: ["t11_tk1","t11_tk2","t11_tk3","t11_tk4","t11_tk5","t11_tk6","t11_tk7"].filter(x=>x!==undefined), correctIndices: [0,6] },
    quiz: { question: "t11_q", choices: ["t11_qa", "t11_qb", "t11_qc", "t11_qd"], answer: "t11_qa" }
  },
  {
    infoTitle: "t12_title", infoText: "t12_text",
    svg: { type: "simple-icon", icon: "📖", color: "#795548" },
    interactive: { type: "tap-count", instruction: "t12_tap_inst", tapCount: { emoji: "📖", count: 4 } },
    quiz: { question: "t12_q", choices: ["t12_qa", "t12_qb", "t12_qc", "t12_qd"], answer: "t12_qa" }
  },
  {
    infoTitle: "t13_title", infoText: "t13_text",
    svg: { type: "simple-icon", icon: "🎮", color: "#E91E63" },
    interactive: { type: "match-pairs", instruction: "t13_inst", hint1: "t13_h1", hint2: "t13_h2", pairs: [{left:"t13_l1",right:"t13_r1"},{left:"t13_l2",right:"t13_r2"},{left:"t13_l3",right:"t13_r3"}] },
    quiz: { question: "t13_q", choices: ["t13_qa", "t13_qb", "t13_qc", "t13_qd"], answer: "t13_qa" }
  },
  {
    infoTitle: "t14_title", infoText: "t14_text",
    svg: { type: "simple-icon", icon: "🛠️", color: "#9E9E9E" },
    interactive: { type: "gap-fill", instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2", sentence: "t14_sent", choices: ["t14_qa2", "t14_qb2", "t14_qc2", "t14_qd2"], correctIndex: 0 },
    quiz: { question: "t14_q", choices: ["t14_qa", "t14_qb", "t14_qc", "t14_qd"], answer: "t14_qa" }
  },
  {
    infoTitle: "t15_title", infoText: "t15_text",
    svg: { type: "icon-grid", items: [{emoji:"🌈",label:"Vision"},{emoji:"⚠️",label:"Challenge"}] },
    interactive: { type: "drag-to-bucket", instruction: "t15_inst", hint1: "t15_h1", hint2: "t15_h2", buckets: [{id:"b1",label:"t15_bl1"},{id:"b2",label:"t15_bl2"}], items: [{text:"t15_i1",bucketId:"b1"},{text:"t15_i2",bucketId:"b2"},{text:"t15_i3",bucketId:"b1"},{text:"t15_i4",bucketId:"b2"}] },
    quiz: { question: "t15_q", choices: ["t15_qa", "t15_qb", "t15_qc", "t15_qd"], answer: "t15_qa" }
  }
];

