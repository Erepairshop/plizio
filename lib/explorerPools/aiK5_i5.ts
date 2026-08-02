// @ts-nocheck
// lib/explorerPools/aiK5_i5.ts
import type { PoolTopicDef } from "./types";

export const INFO_K5_I5_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "KI-Entdecker: Wie es funktioniert",
    t1_title: "Neuronale Netze", t1_text: "Das Gehirn der KI ist wie ein Netz aus vielen kleinen Schaltern aufgebaut, ähnlich wie unser Gehirn.", t1_inst: "Ordne die Paare zu:", t1_h1: "Netzwerk-Teile.", t1_h2: "Verbindungen.", t1_q: "Was ähnelt einem neuronalen Netz?", t1_qa: "Das menschliche Gehirn", t1_qb: "Ein Fußballnetz", t1_qc: "Ein Fischernetz", t1_qd: "Ein Spinnennetz allein",
    t1_l1: "Eingang", t1_r1: "Daten", t1_l2: "Verarbeitung", t1_r2: "Netz", t1_l3: "Ausgang", t1_r3: "Ergebnis",
    t2_title: "Trainingsdaten", t2_text: "Bevor eine KI schlau wird, muss sie mit riesigen Mengen an Daten trainiert werden.", t2_inst: "Sortiere in die Eimer:", t2_h1: "Gute oder schlechte Daten?", t2_h2: "Was hilft der KI?", t2_q: "Was passiert beim Training?", t2_qa: "Die KI lernt Muster", t2_qb: "Die KI macht Urlaub", t2_qc: "Die KI wird gelöscht", t2_qd: "Nichts",
    t2_bl1: "Training", t2_bl2: "Nicht Training", t2_i1: "Bilder zeigen", t2_i2: "Computer ausschalten", t2_i3: "Fehler korrigieren", t2_i4: "Musik hören zum Spaß",
    t3_title: "Testphase", t3_text: "Nach dem Training wird die KI mit neuen Daten getestet, um zu sehen, ob sie wirklich gelernt hat.", t3_inst: "Bringe die Wörter in Ordnung:", t3_h1: "Prüfen!", t3_h2: "Funktioniert es?", t3_q: "Warum testen wir die KI?", t3_qa: "Um die Genauigkeit zu prüfen", t3_qb: "Damit sie nicht weint", t3_qc: "Weil es Vorschrift ist", t3_qd: "Zum Spaß",
    t3_w1: "Tests", t3_w2: "zeigen", t3_w3: "wie", t3_w4: "gut", t3_w5: "die", t3_w6: "KI", t3_w7: "wirklich ist.",
    t4_title: "Bilderkennung", t4_text: "KI erkennt Objekte auf Bildern, indem sie Kanten, Formen und Farben analysiert.", t4_inst: "Fülle die Lücke aus:", t4_h1: "Was ist auf dem Foto?", t4_h2: "Pixel prüfen.", t4_q: "Wie sieht die KI ein Bild?", t4_qa: "Als Raster aus Zahlen (Pixel)", t4_qb: "Wie ein Mensch mit Augen", t4_qc: "Gar nicht", t4_qd: "Als magisches Licht",
    t4_sent: "Die KI erkennt einen ___ auf dem Bild.", t4_qa2: "Hund", t4_qb2: "Satz", t4_qc2: "Duft", t4_qd2: "Gedanken",
    t5_title: "Mustervergleich", t5_text: "KI vergleicht neue Informationen mit dem, was sie schon kennt.", t5_inst: "Markiere, wonach die KI sucht:", t5_h1: "Ähnlichkeit.", t5_h2: "Vergleich.", t5_q: "Was macht die KI beim Mustervergleich?", t5_qa: "Ähnlichkeiten finden", t5_qb: "Alles löschen", t5_qc: "Würfeln", t5_qd: "Schlafen",
    t5_tk1: "KI", t5_tk2: "sucht", t5_tk3: "nach", t5_tk4: "bekannten", t5_tk5: "Mustern", t5_tk6: "in", t5_tk7: "Daten.",
    t6_title: "Machine Learning", t6_text: "Maschinelles Lernen bedeutet, dass der Computer aus Erfahrungen selbstständig lernt.", t6_inst: "Ordne die Paare zu:", t6_h1: "Lernen!", t6_h2: "Erfahrung sammeln.", t6_q: "Was ist Machine Learning?", t6_qa: "Lernen aus Daten", t6_qb: "Eine Waschmaschine", t6_qc: "Ein Laufband", t6_qd: "Hausaufgaben machen",
    t6_l1: "Erfahrung", t6_r1: "Lernen", t6_l2: "Algorithmus", t6_r2: "Regel", t6_l3: "Daten", t6_r3: "Basis",
    t7_title: "Algorithmen", t7_text: "Ein Algorithmus ist eine Schritt-für-Schritt-Anleitung für den Computer.", t7_inst: "Fülle die Lücke aus:", t7_h1: "Das Rezept.", t7_h2: "Anweisungen.", t7_q: "Was ist ein Algorithmus?", t7_qa: "Ein Lösungsweg", t7_qb: "Ein Computervirus", t7_qc: "Ein neuer Monitor", t7_qd: "Ein Tanz",
    t7_sent: "Ein Algorithmus gibt klare ___.", t7_qa2: "Regeln", t7_qb2: "Farben", t7_qc2: "Geräusche", t7_qd2: "Wünsche",
    t8_title: "Sensoren für KI", t8_text: "KI braucht 'Sinne' wie Kameras oder Mikrofone, um die Umwelt wahrzunehmen.", t8_inst: "Sortiere in die Eimer:", t8_h1: "Sinne der Technik.", t8_h2: "Was wird gemessen?", t8_q: "Welcher Sensor hilft beim Sehen?", t8_qa: "Kamera", t8_qb: "Thermometer", t8_qc: "Lautsprecher", t8_qd: "Batterie",
    t8_bl1: "Auge", t8_bl2: "Ohr", t8_i1: "Kamera", t8_i2: "Mikrofon", t8_i3: "Lidar-Scanner", t8_i4: "Schallsensor",
    t9_title: "Roboter-Gehirne", t9_text: "In Robotern steuert die KI die Bewegungen und Entscheidungen.", t9_inst: "Bringe die Wörter in Ordnung:", t9_h1: "Wer lenkt?", t9_h2: "Roboter-Steuerung.", t9_q: "Was macht die KI im Roboter?", t9_qa: "Befehle berechnen", t9_qb: "Strom erzeugen", t9_qc: "Metall biegen", t9_qd: "Öl wechseln",
    t9_w1: "Die", t9_w2: "KI", t9_w3: "ist", t9_w4: "das", t9_w5: "Gehirn", t9_w6: "des", t9_w7: "Roboters.",
    t10_title: "Selbstfahrende Autos", t10_text: "Diese Autos nutzen KI, um Hindernisse zu erkennen und sicher zu lenken.", t10_inst: "Markiere, was Hindernisse erkennt:", t10_h1: "Sicher fahren.", t10_h2: "Technik am Steuer.", t10_q: "Was erkennt ein KI-Auto?", t10_qa: "Verkehrsschilder", t10_qb: "Gedanken von Vögeln", t10_qc: "Träume der Fahrer", t10_qd: "Radio-Musik",
    t10_tk1: "KI-Autos", t10_tk2: "erkennen", t10_tk3: "Hindernisse", t10_tk4: "mit", t10_tk5: "vielen", t10_tk6: "Sensoren.",
    t11_title: "KI in der Medizin", t11_text: "KI hilft Ärzten, Krankheiten auf Röntgenbildern schneller zu finden.", t11_inst: "Ordne die Paare zu:", t11_h1: "Gesundheit.", t11_h2: "Helfen.", t11_q: "Was kann KI in der Medizin?", t11_qa: "Bilder analysieren", t11_qb: "Spritzen geben allein", t11_qc: "Patienten trösten", t11_qd: "Kaffee kochen",
    t11_l1: "Röntgen", t11_r1: "Bild", t11_l2: "Diagnose", t11_r2: "Ergebnis", t11_l3: "Arzt", t11_r3: "Experte",
    t12_title: "Wettervorhersage", t12_text: "KI analysiert Millionen Wetterdaten, um Gewitter genauer vorherzusagen.", t12_inst: "Fülle die Lücke aus:", t12_h1: "Sonne oder Regen?", t12_h2: "Prognosen.", t12_q: "Was braucht die Wetter-KI?", t12_qa: "Daten von Satelliten", t12_qb: "Einen Regenschirm", t12_qc: "Eine Sonnenbrille", t12_qd: "Einen Frosch",
    t12_sent: "Die KI berechnet das ___ von morgen.", t12_qa2: "Wetter", t12_qb2: "Essen", t12_qc2: "Spielzeug", t12_qd2: "Lied",
    t13_title: "Generative KI (Bilder)", t13_text: "KI kann neue Bilder erschaffen, wenn man ihr beschreibt, was man sehen will.", t13_inst: "Sortiere in die Eimer:", t13_h1: "Echt oder KI?", t13_h2: "Wer hat's gemacht?", t13_q: "Wie erstellt man KI-Bilder?", t13_qa: "Durch Text-Beschreibungen", t13_qb: "Mit einem echten Pinsel", t13_qc: "Durch Klatschen", t13_qd: "Gar nicht",
    t13_bl1: "Prompt", t13_bl2: "Ergebnis", t13_i1: "Text-Eingabe", t13_i2: "Neues Bild", t13_i3: "Befehl", t13_i4: "Grafik",
    t14_title: "Generative KI (Text)", t14_text: "Einige KIs können ganze Geschichten schreiben oder Fragen beantworten.", t14_inst: "Bringe die Wörter in Ordnung:", t14_h1: "Schreiben lassen.", t14_h2: "Wort für Wort.", t14_q: "Was kann eine Text-KI?", t14_qa: "Texte zusammenfassen", t14_qb: "Echte Gefühle haben", t14_qc: "In die Schule gehen", t14_qd: "Essen kochen",
    t14_w1: "KI", t14_w2: "kann", t14_w3: "sinnvolle", t14_w4: "Texte", t14_w5: "selbst", t14_w6: "erzeugen.", t14_w7: "",
    t15_title: "Bias (Voreingenommenheit)", t15_text: "Wenn die Trainingsdaten einseitig sind, lernt die KI falsche Dinge.", t15_inst: "Markiere die zwei Wörter für faire Daten:", t15_h1: "Fairness prüfen.", t15_h2: "Fehler im Lernen.", t15_q: "Was ist ein 'Bias'?", t15_qa: "Ein einseitiger Fehler", t15_qb: "Ein schneller Prozessor", t15_qc: "Ein schönes Bild", t15_qd: "Ein neues Spiel",
    t15_tk1: "Gute", t15_tk2: "Daten", t15_tk3: "sind", t15_tk4: "wichtig", t15_tk5: "gegen", t15_tk6: "Vorurteile", t15_tk7: "der KI."
  },
  en: {
    explorer_title: "AI Explorer: How It Works",
    t1_title: "Neural Networks", t1_text: "The brain of AI is built like a network of many small switches, similar to our brain.", t1_inst: "Match the pairs:", t1_h1: "Network parts.", t1_h2: "Connections.", t1_q: "What does a neural network resemble?", t1_qa: "The human brain", t1_qb: "A football net", t1_qc: "A fishing net", t1_qd: "A spider web alone",
    t1_l1: "Input", t1_r1: "Data", t1_l2: "Processing", t1_r2: "Network", t1_l3: "Output", t1_r3: "Result",
    t2_title: "Training Data", t2_text: "Before an AI becomes smart, it must be trained with huge amounts of data.", t2_inst: "Sort into buckets:", t2_h1: "Good or bad data?", t2_h2: "What helps the AI?", t2_q: "What happens during training?", t2_qa: "The AI learns patterns", t2_qb: "The AI goes on vacation", t2_qc: "The AI is deleted", t2_qd: "Nothing",
    t2_bl1: "Training", t2_bl2: "Not Training", t2_i1: "Showing images", t2_i2: "Switching off computer", t2_i3: "Correcting errors", t2_i4: "Listening to music for fun",
    t3_title: "Test Phase", t3_text: "After training, the AI is tested with new data to see if it really learned.", t3_inst: "Put the words in order:", t3_h1: "Checking!", t3_h2: "Does it work?", t3_q: "Why do we test the AI?", t3_qa: "To check accuracy", t3_qb: "So it doesn't cry", t3_qc: "Because it's a rule", t3_qd: "For fun",
    t3_w1: "Tests", t3_w2: "show", t3_w3: "how", t3_w4: "well", t3_w5: "the", t3_w6: "AI", t3_w7: "really is.",
    t4_title: "Image Recognition", t4_text: "AI recognizes objects in images by analyzing edges, shapes, and colors.", t4_inst: "Fill in the blank:", t4_h1: "What's in the photo?", t4_h2: "Checking pixels.", t4_q: "How does AI see an image?", t4_qa: "As a grid of numbers (pixels)", t4_qb: "Like a human with eyes", t4_qc: "It doesn't", t4_qd: "As magic light",
    t4_sent: "The AI recognizes a ___ in the image.", t4_qa2: "dog", t4_qb2: "sentence", t4_qc2: "scent", t4_qd2: "thought",
    t5_title: "Pattern Matching", t5_text: "AI compares new information with what it already knows.", t5_inst: "Highlight what the AI looks for:", t5_h1: "Similarity.", t5_h2: "Comparison.", t5_q: "What does AI do during pattern matching?", t5_qa: "Find similarities", t5_qb: "Delete everything", t5_qc: "Roll dice", t5_qd: "Sleep",
    t5_tk1: "AI", t5_tk2: "looks", t5_tk3: "for", t5_tk4: "known", t5_tk5: "patterns", t5_tk6: "in", t5_tk7: "data.",
    t6_title: "Machine Learning", t6_text: "Machine learning means that the computer learns independently from experience.", t6_inst: "Match the pairs:", t6_h1: "Learning!", t6_h2: "Gaining experience.", t6_q: "What is machine learning?", t6_qa: "Learning from data", t6_qb: "A washing machine", t6_qc: "A treadmill", t6_qd: "Doing homework",
    t6_l1: "Experience", t6_r1: "Learning", t6_l2: "Algorithm", t6_r2: "Rule", t6_l3: "Data", t6_r3: "Basis",
    t7_title: "Algorithms", t7_text: "An algorithm is a step-by-step instruction for the computer.", t7_inst: "Fill in the blank:", t7_h1: "The recipe.", t7_h2: "Instructions.", t7_q: "What is an algorithm?", t7_qa: "A solution path", t7_qb: "A computer virus", t7_qc: "A new monitor", t7_qd: "A dance",
    t7_sent: "An algorithm gives clear ___.", t7_qa2: "rules", t7_qb2: "colors", t7_qc2: "sounds", t7_qd2: "wishes",
    t8_title: "Sensors for AI", t8_text: "AI needs 'senses' like cameras or microphones to perceive the environment.", t8_inst: "Sort into buckets:", t8_h1: "Tech senses.", t8_h2: "What is measured?", t8_q: "Which sensor helps with seeing?", t8_qa: "Camera", t8_qb: "Thermometer", t8_qc: "Speaker", t8_qd: "Battery",
    t8_bl1: "Eye", t8_bl2: "Ear", t8_i1: "Camera", t8_i2: "Microphone", t8_i3: "Lidar scanner", t8_i4: "Sound sensor",
    t9_title: "Robot Brains", t9_text: "In robots, AI controls movements and decisions.", t9_inst: "Put the words in order:", t9_h1: "Who steers?", t9_h2: "Robot control.", t9_q: "What does AI do in a robot?", t9_qa: "Calculate commands", t9_qb: "Generate power", t9_qc: "Bend metal", t9_qd: "Change oil",
    t9_w1: "The", t9_w2: "AI", t9_w3: "is", t9_w4: "the", t9_w5: "brain", t9_w6: "of", t9_w7: "the robot.",
    t10_title: "Self-driving Cars", t10_text: "These cars use AI to recognize obstacles and steer safely.", t10_inst: "Highlight what recognizes obstacles:", t10_h1: "Drive safely.", t10_h2: "Tech at the wheel.", t10_q: "What does an AI car recognize?", t10_qa: "Traffic signs", t10_qb: "Bird thoughts", t10_qc: "Driver's dreams", t10_qd: "Radio music",
    t10_tk1: "AI cars", t10_tk2: "recognize", t10_tk3: "obstacles", t10_tk4: "with", t10_tk5: "many", t10_tk6: "sensors.",
    t11_title: "AI in Medicine", t11_text: "AI helps doctors find diseases on X-ray images faster.", t11_inst: "Match the pairs:", t11_h1: "Health.", t11_h2: "Helping.", t11_q: "What can AI do in medicine?", t11_qa: "Analyze images", t11_qb: "Give injections alone", t11_qc: "Comfort patients", t11_qd: "Make coffee",
    t11_l1: "X-ray", t11_r1: "Image", t11_l2: "Diagnosis", t11_r2: "Result", t11_l3: "Doctor", t11_r3: "Expert",
    t12_title: "Weather Forecast", t12_text: "AI analyzes millions of weather data to predict storms more accurately.", t12_inst: "Fill in the blank:", t12_h1: "Sun or rain?", t12_h2: "Forecasts.", t12_q: "What does the weather AI need?", t12_qa: "Satellite data", t12_qb: "An umbrella", t12_qc: "Sunglasses", t12_qd: "A frog",
    t12_sent: "The AI calculates tomorrow's ___.", t12_qa2: "weather", t12_qb2: "food", t12_qc2: "toys", t12_qd2: "song",
    t13_title: "Generative AI (Images)", t13_text: "AI can create new images if you describe what you want to see.", t13_inst: "Sort into buckets:", t13_h1: "Real or AI?", t13_h2: "Who made it?", t13_q: "How to create AI images?", t13_qa: "Through text descriptions", t13_qb: "With a real brush", t13_qc: "By clapping", t13_qd: "It doesn't",
    t13_bl1: "Prompt", t13_bl2: "Result", t13_i1: "Text input", t13_i2: "New image", t13_i3: "Command", t13_i4: "Graphic",
    t14_title: "Generative AI (Text)", t14_text: "Some AIs can write entire stories or answer questions.", t14_inst: "Put the words in order:", t14_h1: "Let it write.", t14_h2: "Word by word.", t14_q: "What can a text AI do?", t14_qa: "Summarize texts", t14_qb: "Have real feelings", t14_qc: "Go to school", t14_qd: "Cook food",
    t14_w1: "AI", t14_w2: "can", t14_w3: "create", t14_w4: "meaningful", t14_w5: "texts", t14_w6: "itself.", t14_w7: "",
    t15_title: "Bias", t15_text: "If training data is one-sided, the AI learns wrong things.", t15_inst: "Highlight the two words for fair data:", t15_h1: "Check fairness.", t15_h2: "Error in learning.", t15_q: "What is 'Bias'?", t15_qa: "A one-sided error", t15_qb: "A fast processor", t15_qc: "A nice image", t15_qd: "A new game",
    t15_tk1: "Good", t15_tk2: "data", t15_tk3: "is", t15_tk4: "important", t15_tk5: "against", t15_tk6: "AI", t15_tk7: "bias."
  },
  hu: {
    explorer_title: "MI Felfedező: Hogyan működik?",
    t1_title: "Neurális hálózatok", t1_text: "A MI agya sok apró kapcsoló hálózatából áll, hasonlóan az emberi agyhoz.", t1_inst: "Párosítsd össze:", t1_h1: "Hálózati részek.", t1_h2: "Kapcsolatok.", t1_q: "Mire hasonlít a neurális hálózat?", t1_qa: "Az emberi agyra", t1_qb: "Egy focihálóra", t1_qc: "Egy halászhálóra", t1_qd: "Egy pókhálóra",
    t1_l1: "Bemenet", t1_r1: "Adat", t1_l2: "Feldolgozás", t1_r2: "Hálózat", t1_l3: "Kimenet", t1_r3: "Eredmény",
    t2_title: "Tanító adatok", t2_text: "Mielőtt a MI okos lenne, óriási mennyiségű adattal kell tanítani.", t2_inst: "Válogasd szét:", t2_h1: "Jó vagy rossz adatok?", t2_h2: "Mi segíti a MI-t?", t2_q: "Mi történik a tanítás alatt?", t2_qa: "A MI mintákat tanul", t2_qb: "A MI elmegy nyaralni", t2_qc: "A MI-t letörlik", t2_qd: "Semmi",
    t2_bl1: "Tanítás", t2_bl2: "Nem tanítás", t2_i1: "Képek mutogatása", t2_i2: "Gép kikapcsolása", t2_i3: "Hibák javítása", t2_i4: "Zenehallgatás",
    t3_title: "Tesztfázis", t3_text: "A tanítás után a MI-t új adatokkal teszteljük, hogy lássuk, tényleg tanult-e.", t3_inst: "Tedd sorrendbe a szavakat:", t3_h1: "Ellenőrzés!", t3_h2: "Működik?", t3_q: "Miért teszteljük a MI-t?", t3_qa: "A pontosság mérésére", t3_qb: "Hogy ne sírjon", t3_qc: "Mert ez a szabály", t3_qd: "Szórakozásból",
    t3_w1: "A tesztek", t3_w2: "megmutatják,", t3_w3: "mennyire", t3_w4: "jó", t3_w5: "valójában", t3_w6: "a", t3_w7: "MI.",
    t4_title: "Képfelismerés", t4_text: "A MI éleket, formákat és színeket elemezve ismeri fel a tárgyakat.", t4_inst: "Töltsd ki a hiányt:", t4_h1: "Mi van a képen?", t4_h2: "Pixelek nézése.", t4_q: "Hogyan látja a MI a képet?", t4_qa: "Számok rácsaként (pixelek)", t4_qb: "Mint az ember a szemével", t4_qc: "Sehogy", t4_qd: "Varázsfényként",
    t4_sent: "A MI felismer egy ___ a képen.", t4_qa2: "kutyát", t4_qb2: "mondatot", t4_qc2: "illatot", t4_qd2: "gondolatot",
    t5_title: "Mintakeresés", t5_text: "A MI összehasonlítja az új infókat azzal, amit már ismer.", t5_inst: "Jelöld meg, mit keres a MI:", t5_h1: "Hasonlóság.", t5_h2: "Összehasonlítás.", t5_q: "Mit csinál a MI mintakereséskor?", t5_qa: "Hasonlóságokat keres", t5_qb: "Mindent töröl", t5_qc: "Dobókockázik", t5_qd: "Alszik",
    t5_tk1: "A MI", t5_tk2: "az", t5_tk3: "adatokban", t5_tk4: "ismert", t5_tk5: "mintákat", t5_tk6: "keres.", t5_tk7: "",
    t6_title: "Gépi tanulás", t6_text: "A gépi tanulás azt jelenti, hogy a gép tapasztalatokból önállóan tanul.", t6_inst: "Párosítsd össze:", t6_h1: "Tanulás!", t6_h2: "Tapasztalatszerzés.", t6_q: "Mi a gépi tanulás?", t6_qa: "Tanulás adatokból", t6_qb: "Egy mosógép", t6_qc: "Egy futópad", t6_qd: "Házifeladat-írás",
    t6_l1: "Tapasztalat", t6_r1: "Tanulás", t6_l2: "Algoritmus", t6_r2: "Szabály", t6_l3: "Adat", t6_r3: "Alap",
    t7_title: "Algoritmusok", t7_text: "Az algoritmus egy lépésről lépésre követhető útmutató a gépnek.", t7_inst: "Töltsd ki a hiányt:", t7_h1: "A recept.", t7_h2: "Utasítások.", t7_q: "Mi az az algoritmus?", t7_qa: "Megoldási terv", t7_qb: "Számítógépes vírus", t7_qc: "Új monitor", t7_qd: "Egy tánc",
    t7_sent: "Az algoritmus tiszta ___ ad.", t7_qa2: "szabályokat", t7_qb2: "színeket", t7_qc2: "hangokat", t7_qd2: "vágyakat",
    t8_title: "Szenzorok", t8_text: "A MI-nek 'érzékekre' (kamera, mikrofon) van szüksége a világ észleléséhez.", t8_inst: "Válogasd szét:", t8_h1: "Technikai érzékek.", t8_h2: "Mit mérünk?", t8_q: "Melyik szenzor segít a látásban?", t8_qa: "Kamera", t8_qb: "Hőmérő", t8_qc: "Hangszóró", t8_qd: "Akku",
    t8_bl1: "Szem", t8_bl2: "Fül", t8_i1: "Kamera", t8_i2: "Mikrofon", t8_i3: "Lidar szkenner", t8_i4: "Hangszenzor",
    t9_title: "Robot-agyak", t9_text: "A robotokban a MI irányítja a mozgást és a döntéseket.", t9_inst: "Tedd sorrendbe a szavakat:", t9_h1: "Ki vezet?", t9_h2: "Robotirányítás.", t9_q: "Mit csinál a MI a robotban?", t9_qa: "Parancsokat számol", t9_qb: "Áramot termel", t9_qc: "Vasat hajlít", t9_qd: "Olajat cserél",
    t9_w1: "A MI", t9_w2: "a", t9_w3: "robot", t9_w4: "irányító", t9_w5: "agya.", t9_w6: "", t9_w7: "",
    t10_title: "Önvezető autók", t10_text: "Ezek az autók MI-t használnak az akadályok felismeréséhez.", t10_inst: "Jelöld meg, mi ismeri fel az akadályokat:", t10_h1: "Biztonságos vezetés.", t10_h2: "Technika a kormánynál.", t10_q: "Mit ismer fel a MI-autó?", t10_qa: "Közlekedési táblákat", t10_qb: "Madarak gondolatait", t10_qc: "A sofőr álmait", t10_qd: "Rádiózenét",
    t10_tk1: "A MI-autók", t10_tk2: "sok", t10_tk3: "szenzorral", t10_tk4: "látják", t10_tk5: "az", t10_tk6: "akadályokat.",
    t11_title: "MI az orvoslásban", t11_text: "A MI segít az orvosoknak gyorsabban megtalálni a betegségeket a röntgenképeken.", t11_inst: "Párosítsd össze:", t11_h1: "Egészség.", t11_h2: "Segítség.", t11_q: "Mit tud a MI az orvoslásban?", t11_qa: "Képek elemzése", t11_qb: "Injekciózás egyedül", t11_qc: "Betegek vigasztalása", t11_qd: "Kávéfőzés",
    t11_l1: "Röntgen", t11_r1: "Kép", t11_l2: "Diagnózis", t11_r2: "Eredmény", t11_l3: "Orvos", t11_r3: "Szakértő",
    t12_title: "Időjárás-előrejelzés", t12_text: "A MI millió adatot elemez, hogy pontosabb jóslatokat adjon.", t12_inst: "Töltsd ki a hiányt:", t12_h1: "Napsütés vagy eső?", t12_h2: "Jóslatok.", t12_q: "Mire van szüksége az időjárás-MI-nek?", t12_qa: "Műholdas adatokra", t12_qb: "Esernyőre", t12_qc: "Napszemüvegre", t12_qd: "Egy békára",
    t12_sent: "A MI kiszámítja a holnapi ___.", t12_qa2: "időjárást", t12_qb2: "ételt", t12_qc2: "játékot", t12_qd2: "dalt",
    t13_title: "Képgenerálás", t13_text: "A MI új képeket hoz létre, ha leírod neki, mit szeretnél látni.", t13_inst: "Válogasd szét:", t13_h1: "Valódi vagy MI?", t13_h2: "Ki készítette?", t13_q: "Hogyan készülnek a MI-képek?", t13_qa: "Szöveges leírásból", t13_qb: "Valódi ecsettel", t13_qc: "Tapsolással", t13_qd: "Sehogy",
    t13_bl1: "Prompt", t13_bl2: "Eredmény", t13_i1: "Szöveg", t13_i2: "Új kép", t13_i3: "Parancs", t13_i4: "Grafika",
    t14_title: "Szöveggenerálás", t14_text: "Némelyik MI képes történeteket írni vagy kérdésekre válaszolni.", t14_inst: "Tedd sorrendbe a szavakat:", t14_h1: "Hagyd írni.", t14_h2: "Szóról szóra.", t14_q: "Mit tud egy szöveges MI?", t14_qa: "Szövegek összefoglalása", t14_qb: "Valódi érzései vannak", t14_qc: "Iskolába jár", t14_qd: "Főzni tud",
    t14_w1: "A MI", t14_w2: "képes", t14_w3: "értelmes", t14_w4: "szövegeket", t14_w5: "írni.", t14_w6: "", t14_w7: "",
    t15_title: "Elfogyultság (Bias)", t15_text: "Ha a tanító adatok egyoldalúak, a MI rossz dolgokat tanul meg.", t15_inst: "Jelöld meg a két szót a megbízható adatra:", t15_h1: "Igazságosság.", t15_h2: "Hiba a tanulásban.", t15_q: "Mi az a 'Bias'?", t15_qa: "Egyoldalú hiba", t15_qb: "Gyors processzor", t15_qc: "Szép kép", t15_qd: "Új játék",
    t15_tk1: "A jó", t15_tk2: "adat", t15_tk3: "fontos", t15_tk4: "a MI", t15_tk5: "előítéletei", t15_tk6: "ellen.", t15_tk7: ""
  },
  ro: {
    explorer_title: "Explorator IA: Cum funcționează?",
    t1_title: "Rețele neuronale", t1_text: "Creierul IA este construit ca o rețea de mulți comutatori mici, similar cu creierul nostru.", t1_inst: "Potrivește perechile:", t1_h1: "Părți rețea.", t1_h2: "Conexiuni.", t1_q: "Cu ce seamănă o rețea neuronală?", t1_qa: "Creierul uman", t1_qb: "O plasă de fotbal", t1_qc: "O plasă de pescuit", t1_qd: "O pânză de păianjen",
    t1_l1: "Intrare", t1_r1: "Date", t1_l2: "Procesare", t1_r2: "Rețea", t1_l3: "Ieșire", t1_r3: "Rezultat",
    t2_title: "Date de antrenament", t2_text: "Înainte ca o IA să devină deșteaptă, trebuie antrenată cu cantități uriașe de date.", t2_inst: "Sortează în găleți:", t2_h1: "Date bune sau rele?", t2_h2: "Ce ajută IA?", t2_q: "Ce se întâmplă în timpul antrenamentului?", t2_qa: "IA învață tipare", t2_qb: "IA pleacă în vacanță", t2_qc: "IA este ștearsă", t2_qd: "Nimic",
    t2_bl1: "Antrenament", t2_bl2: "Nu antrenament", t2_i1: "Arătarea imaginilor", t2_i2: "Oprirea gării", t2_i3: "Corectarea erorilor", t2_i4: "Ascultarea muzicii",
    t3_title: "Faza de testare", t3_text: "După antrenament, IA este testată cu date noi pentru a vedea dacă a învățat cu adevărat.", t3_inst: "Pune cuvintele în ordine:", t3_h1: "Verificare!", t3_h2: "Funcționează?", t3_q: "De ce testăm IA?", t3_qa: "Pentru a verifica precizia", t3_qb: "Să nu plângă", t3_qc: "Pentru că e o regulă", t3_qd: "Pentru distracție",
    t3_w1: "Testele", t3_w2: "arată", t3_w3: "cât", t3_w4: "de", t3_w5: "bine", t3_w6: "funcționează", t3_w7: "IA.",
    t4_title: "Recunoașterea imaginilor", t4_text: "IA recunoaște obiecte în imagini analizând margini, forme și culori.", t4_inst: "Completează spațiul liber:", t4_h1: "Ce e în poză?", t4_h2: "Verificare pixeli.", t4_q: "Cum vede IA o imagine?", t4_qa: "Ca o grilă de numere (pixeli)", t4_qb: "Ca un om cu ochi", t4_qc: "Deloc", t4_qd: "Ca o lumină magică",
    t4_sent: "IA recunoaște un ___ în imagine.", t4_qa2: "câine", t4_qb2: "propoziție", t4_qc2: "parfum", t4_qd2: "gând",
    t5_title: "Potrivirea tiparelor", t5_text: "IA compară informațiile noi cu ceea ce știe deja.", t5_inst: "Evidențiază ce caută IA:", t5_h1: "Asemănare.", t5_h2: "Comparație.", t5_q: "Ce face IA în timpul potrivirii tiparelor?", t5_qa: "Găsește asemănări", t5_qb: "Șterge tot", t5_qc: "Dă cu zarul", t5_qd: "Doarme",
    t5_tk1: "IA", t5_tk2: "caută", t5_tk3: "în", t5_tk4: "date", t5_tk5: "tipare", t5_tk6: "cunoscute.", t5_tk7: "",
    t6_title: "Machine Learning", t6_text: "Învățarea automată înseamnă că computerul învață independent din experiență.", t6_inst: "Potrivește perechile:", t6_h1: "Învățare!", t6_h2: "Acumularea experienței.", t6_q: "Ce este Machine Learning?", t6_qa: "Învățarea din date", t6_qb: "O mașină de spălat", t6_qc: "O bandă de alergat", t6_qd: "Efectuarea temelor",
    t6_l1: "Experiență", t6_r1: "Învățare", t6_l2: "Algoritm", t6_r2: "Regulă", t6_l3: "Date", t6_r3: "Bază",
    t7_title: "Algoritmi", t7_text: "Un algoritm este o instrucțiune pas cu pas pentru computer.", t7_inst: "Completează spațiul liber:", t7_h1: "Rețeta.", t7_h2: "Instrucțiuni.", t7_q: "Ce este un algoritm?", t7_qa: "O cale de soluționare", t7_qb: "Un virus informatic", t7_qc: "Un monitor nou", t7_qd: "Un dans",
    t7_sent: "Un algoritm oferă ___ clare.", t7_qa2: "reguli", t7_qb2: "culori", t7_qc2: "sunete", t7_qd2: "dorințe",
    t8_title: "Senzori pentru IA", t8_text: "IA are nevoie de 'simțuri' ca camere sau microfoane pentru a percepe mediul.", t8_inst: "Sortează în găleți:", t8_h1: "Simțuri tehnice.", t8_h2: "Ce se măsoară?", t8_q: "Care senzor ajută la vedere?", t8_qa: "Cameră", t8_qb: "Termometru", t8_qc: "Difuzor", t8_qd: "Baterie",
    t8_bl1: "Ochi", t8_bl2: "Ureche", t8_i1: "Cameră", t8_i2: "Microfon", t8_i3: "Scanner Lidar", t8_i4: "Senzor sunet",
    t9_title: "Creierul roboților", t9_text: "În roboți, IA controlează mișcările și deciziile.", t9_inst: "Pune cuvintele în ordine:", t9_h1: "Cine conduce?", t9_h2: "Control robot.", t9_q: "Ce face IA într-un robot?", t9_qa: "Calculează comenzi", t9_qb: "Generază curent", t9_qc: "Îndoaie metal", t9_qd: "Schimbă uleiul",
    t9_w1: "IA", t9_w2: "este", t9_w3: "creierul", t9_w4: "care", t9_w5: "conduce", t9_w6: "robotul.", t9_w7: "",
    t10_title: "Mașini autonome", t10_text: "Aceste mașini folosesc IA pentru a recunoaște obstacolele.", t10_inst: "Evidențiază ce recunoaște obstacolele:", t10_h1: "Conducere sigură.", t10_h2: "Tehnica la volan.", t10_q: "Ce recunoaște o mașină IA?", t10_qa: "Semne de circulație", t10_qb: "Gândurile păsărilor", t10_qc: "Visurile șoferului", t10_qd: "Muzica radio",
    t10_tk1: "Mașinile IA", t10_tk2: "văd", t10_tk3: "obstacolele", t10_tk4: "cu", t10_tk5: "mulți", t10_tk6: "senzori.", t10_tk7: "",
    t11_title: "IA în medicină", t11_text: "IA ajută medicii să găsească boli pe radiografii mai rapid.", t11_inst: "Potrivește perechile:", t11_h1: "Sănătate.", t11_h2: "Ajutor.", t11_q: "Ce poate face IA în medicină?", t11_qa: "Analizează imagini", t11_qb: "Face injecții singură", t11_qc: "Consolează pacienții", t11_qd: "Face cafea",
    t11_l1: "Radiografie", t11_r1: "Imagine", t11_l2: "Diagnostic", t11_r2: "Rezultat", t11_l3: "Medic", t11_r3: "Expert",
    t12_title: "Prognoza meteo", t12_text: "IA analizează milioane de date meteo pentru predicții mai exacte.", t12_inst: "Completează spațiul liber:", t12_h1: "Soare sau ploaie?", t12_h2: "Predicții.", t12_q: "De ce are nevoie IA meteo?", t12_qa: "Date satelit", t12_qb: "O umbrelă", t12_qc: "Ochelari de soare", t12_qd: "O broască",
    t12_sent: "IA calculează ___ de mâine.", t12_qa2: "vremea", t12_qb2: "mâncarea", t12_qc2: "jucăria", t12_qd2: "cântecul",
    t13_title: "IA generativă (Imagini)", t13_text: "IA poate crea imagini noi dacă îi descrii ce vrei să vezi.", t13_inst: "Sortează în găleți:", t13_h1: "Real sau IA?", t13_h2: "Cine a făcut-o?", t13_q: "Cum se crează imagini IA?", t13_qa: "Prin descrieri text", t13_qb: "Cu o pensulă reală", t13_qc: "Prin aplauze", t13_qd: "Deloc",
    t13_bl1: "Prompt", t13_bl2: "Rezultat", t13_i1: "Intrare text", t13_i2: "Imagine nouă", t13_i3: "Comandă", t13_i4: "Grafică",
    t14_title: "IA generativă (Text)", t14_text: "Unele IA pot scrie povești întregi sau răspunde la întrebări.", t14_inst: "Pune cuvintele în ordine:", t14_h1: "Lasă-l să scrie.", t14_h2: "Cuvânt cu cuvânt.", t14_q: "Ce poate face o IA de text?", t14_qa: "Rezumat de texte", t14_qb: "Are sentimente reale", t14_qc: "Merge la școală", t14_qd: "Gătește",
    t14_w1: "IA", t14_w2: "poate", t14_w3: "genera", t14_w4: "texte", t14_w5: "cu", t14_w6: "sens.", t14_w7: "",
    t15_title: "Bias (Eroare)", t15_text: "Dacă datele de antrenament sunt subiective, IA învață lucruri greșite.", t15_inst: "Evidențiază cele două cuvinte pentru date corecte:", t15_h1: "Echitate.", t15_h2: "Eroare de învățare.", t15_q: "Ce este 'Bias'?", t15_qa: "O eroare subiectivă", t15_qb: "Un procesor rapid", t15_qc: "O imagine frumoasă", t15_qd: "Un joc nou",
    t15_tk1: "Datele", t15_tk2: "bune", t15_tk3: "sunt", t15_tk4: "importante", t15_tk5: "împotriva", t15_tk6: "erorilor", t15_tk7: "IA."
  }
};

export const INFO_K5_I5_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "simple-icon", icon: "🕸️", color: "#607D8B" },
    interactive: { type: "match-pairs", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", pairs: [{left:"t1_l1",right:"t1_r1"},{left:"t1_l2",right:"t1_r2"},{left:"t1_l3",right:"t1_r3"}] },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" }
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "icon-grid", items: [{emoji:"📚",label:"Training"},{emoji:"❌",label:"Other"}] },
    interactive: { type: "drag-to-bucket", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", buckets: [{id:"b1",label:"t2_bl1"},{id:"b2",label:"t2_bl2"}], items: [{text:"t2_i1",bucketId:"b1"},{text:"t2_i2",bucketId:"b2"},{text:"t2_i3",bucketId:"b1"},{text:"t2_i4",bucketId:"b2"}] },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" }
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "simple-icon", icon: "🧪", color: "#FF9800" },
    interactive: { type: "word-order", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5", "t3_w6", "t3_w7"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "🖼️", color: "#2196F3" },
    interactive: { type: "gap-fill", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", sentence: "t4_sent", choices: ["t4_qa2", "t4_qb2", "t4_qc2", "t4_qd2"], correctIndex: 0 },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "🔍", color: "#4CAF50" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6","t5_tk7"].filter(x=>x!==""), correctIndices: [4] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" }
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "simple-icon", icon: "🎓", color: "#9C27B0" },
    interactive: { type: "match-pairs", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", pairs: [{left:"t6_l1",right:"t6_r1"},{left:"t6_l2",right:"t6_r2"},{left:"t6_l3",right:"t6_r3"}] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" }
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "📝", color: "#F44336" },
    interactive: { type: "gap-fill", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", sentence: "t7_sent", choices: ["t7_qa2", "t7_qb2", "t7_qc2", "t7_qd2"], correctIndex: 0 },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" }
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "icon-grid", items: [{emoji:"👁️",label:"Eye"},{emoji:"👂",label:"Ear"}] },
    interactive: { type: "drag-to-bucket", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", buckets: [{id:"b1",label:"t8_bl1"},{id:"b2",label:"t8_bl2"}], items: [{text:"t8_i1",bucketId:"b1"},{text:"t8_i2",bucketId:"b2"},{text:"t8_i3",bucketId:"b1"},{text:"t8_i4",bucketId:"b2"}] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" }
  },
  {
    infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "simple-icon", icon: "🤖", color: "#3F51B5" },
    interactive: { type: "word-order", instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2", words: ["t9_w1", "t9_w2", "t9_w3", "t9_w4", "t9_w5", "t9_w6", "t9_w7"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t9_q", choices: ["t9_qa", "t9_qb", "t9_qc", "t9_qd"], answer: "t9_qa" }
  },
  {
    infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "simple-icon", icon: "🚗", color: "#FFC107" },
    interactive: { type: "highlight-text", instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2", tokens: ["t10_tk1","t10_tk2","t10_tk3","t10_tk4","t10_tk5","t10_tk6"].filter(x=>x!==""), correctIndices: [0] },
    quiz: { question: "t10_q", choices: ["t10_qa", "t10_qb", "t10_qc", "t10_qd"], answer: "t10_qa" }
  },
  {
    infoTitle: "t11_title", infoText: "t11_text",
    svg: { type: "simple-icon", icon: "🏥", color: "#E91E63" },
    interactive: { type: "match-pairs", instruction: "t11_inst", hint1: "t11_h1", hint2: "t11_h2", pairs: [{left:"t11_l1",right:"t11_r1"},{left:"t11_l2",right:"t11_r2"},{left:"t11_l3",right:"t11_r3"}] },
    quiz: { question: "t11_q", choices: ["t11_qa", "t11_qb", "t11_qc", "t11_qd"], answer: "t11_qa" }
  },
  {
    infoTitle: "t12_title", infoText: "t12_text",
    svg: { type: "simple-icon", icon: "🌦️", color: "#03A9F4" },
    interactive: { type: "gap-fill", instruction: "t12_inst", hint1: "t12_h1", hint2: "t12_h2", sentence: "t12_sent", choices: ["t12_qa2", "t12_qb2", "t12_qc2", "t12_qd2"], correctIndex: 0 },
    quiz: { question: "t12_q", choices: ["t12_qa", "t12_qb", "t12_qc", "t12_qd"], answer: "t12_qa" }
  },
  {
    infoTitle: "t13_title", infoText: "t13_text",
    svg: { type: "icon-grid", items: [{emoji:"💡",label:"Prompt"},{emoji:"🖼️",label:"Graphics"}] },
    interactive: { type: "drag-to-bucket", instruction: "t13_inst", hint1: "t13_h1", hint2: "t13_h2", buckets: [{id:"b1",label:"t13_bl1"},{id:"b2",label:"t13_bl2"}], items: [{text:"t13_i1",bucketId:"b1"},{text:"t13_i2",bucketId:"b2"},{text:"t13_i3",bucketId:"b1"},{text:"t13_i4",bucketId:"b2"}] },
    quiz: { question: "t13_q", choices: ["t13_qa", "t13_qb", "t13_qc", "t13_qd"], answer: "t13_qa" }
  },
  {
    infoTitle: "t14_title", infoText: "t14_text",
    svg: { type: "simple-icon", icon: "📖", color: "#8BC34A" },
    interactive: { type: "word-order", instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2", words: ["t14_w1", "t14_w2", "t14_w3", "t14_w4", "t14_w5", "t14_w6", "t14_w7"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5] },
    quiz: { question: "t14_q", choices: ["t14_qa", "t14_qb", "t14_qc", "t14_qd"], answer: "t14_qa" }
  },
  {
    infoTitle: "t15_title", infoText: "t15_text",
    svg: { type: "simple-icon", icon: "⚖️", color: "#FF5722" },
    interactive: { type: "highlight-text", instruction: "t15_inst", hint1: "t15_h1", hint2: "t15_h2", tokens: ["t15_tk1","t15_tk2","t15_tk3","t15_tk4","t15_tk5","t15_tk6","t15_tk7"].filter(x=>x!==""), correctIndices: [0,1] },
    quiz: { question: "t15_q", choices: ["t15_qa", "t15_qb", "t15_qc", "t15_qd"], answer: "t15_qa" }
  }
];

