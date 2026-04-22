// lib/explorerPools/aiK6_i2.ts
import type { PoolTopicDef } from "./types";

export const INFO_K6_I2_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "KI Insel 2: Anwendungen",
    t1_title: "Bilderkennung", t1_text: "KI kann heute Objekte in Bildern sekundenschnell benennen, egal ob Katze, Baum oder Auto.", t1_inst: "Paare zuordnen:", t1_h1: "Was sieht die KI?", t1_h2: "Objekte erkennen.", t1_q: "Was erkennt KI in einem Foto von einem Wald?", t1_qa: "Bäume und Tiere", t1_qb: "Den Geruch von Tannen", t1_qc: "Die Temperatur", t1_qd: "Nichts",
    t1_l1: "Katze", t1_r1: "Haustier", t1_l2: "Fahrrad", t1_r2: "Fahrzeug", t1_l3: "Apfel", t1_r3: "Obst",
    t2_title: "Echtzeit-Übersetzung", t2_text: "KI-Systeme können Sprache fast ohne Verzögerung in eine andere Sprache übersetzen.", t2_inst: "Lücke füllen:", t2_h1: "Fremdsprachen.", t2_h2: "Verständigung.", t2_q: "Wie hilft KI beim Reisen?", t2_qa: "Durch Sofort-Übersetzung", t2_qb: "Durch Koffer tragen", t2_qc: "Durch Fliegen", t2_qd: "Durch Schlafen",
    t2_sent: "KI bricht die Barriere der ___.", t2_qa2: "Sprachen", t2_qb2: "Mauern", t2_qc2: "Fenster", t2_qd2: "Türen",
    t3_title: "Selbstfahrende Autos", t3_text: "Autonome Fahrzeuge nutzen Kameras und KI, um sicher durch den Verkehr zu steuern.", t3_inst: "Sortieren:", t3_h1: "Auto-Technik.", t3_h2: "Sensoren & KI.", t3_q: "Was braucht ein selbstfahrendes Auto?", t3_qa: "KI und Sensoren", t3_qb: "Einen unsichtbaren Fahrer", t3_qc: "Magie", t3_qd: "Nur Benzin",
    t3_bl1: "Auto-KI", t3_bl2: "Normales Auto", t3_i1: "Spurerkennung", t3_i2: "Lenkrad drehen", t3_i3: "Abstand halten", t3_i4: "Gang schalten",
    t4_title: "KI in der Medizin", t4_text: "KI hilft Ärzten, Krankheiten auf Röntgenbildern schneller und genauer zu finden.", t4_inst: "Wörter ordnen:", t4_h1: "KI hilft heilen.", t4_h2: "Gesundheit.", t4_q: "Was macht die KI beim Arzt?", t4_qa: "Analysiert Bilder", t4_qb: "Operiert alleine", t4_qc: "Putzt den Boden", t4_qd: "Schreibt Rezepte",
    t4_w1: "KI", t4_w2: "unterstützt", t4_w3: "Ärzte", t4_w4: "bei", t4_w5: "der", t4_w6: "Diagnose.", t4_w7: "",
    t5_title: "Deep Learning", t5_text: "Deep Learning nutzt sehr tiefe neuronale Netze für besonders komplizierte Aufgaben.", t5_inst: "Wort markieren:", t5_h1: "Tiefes Lernen.", t5_h2: "Viele Schichten.", t5_q: "Was bedeutet 'Deep' bei Deep Learning?", t5_qa: "Viele Netz-Schichten", t5_qb: "Unter Wasser", t5_qc: "Sehr teuer", t5_qd: "Langsam",
    t5_tk1: "Deep", t5_tk2: "Learning", t5_tk3: "ist", t5_tk4: "besonders", t5_tk5: "leistungsfähig.",
    t6_title: "Big Data", t6_text: "KI braucht riesige Mengen an Informationen (Big Data), um komplexe Muster zu verstehen.", t6_inst: "Paare zuordnen:", t6_h1: "Viel Information.", t6_h2: "Datenmengen.", t6_q: "Was ist Big Data?", t6_qa: "Riesige Datenmengen", t6_qb: "Ein großer Computer", t6_qc: "Ein dickes Buch", t6_qd: "Eine große Festplatte",
    t6_l1: "Internet", t6_r1: "Suchanfragen", t6_l2: "Wetter", t6_r2: "Messstationen", t6_l3: "Handy", t6_r3: "Standortdaten",
    t7_title: "Generative KI", t7_text: "Diese KI-Art kann völlig neue Inhalte wie Texte oder Bilder aus dem Nichts erschaffen.", t7_inst: "Lücke füllen:", t7_h1: "Erschaffen.", t7_h2: "Neu machen.", t7_q: "Was ist ChatGPT?", t7_qa: "Eine generative KI", t7_qb: "Eine Suchmaschine", t1_qc: "Ein Spiel", t1_qd: "Ein Video",
    t7_sent: "Generative KI ___ neue Texte.", t7_qa2: "erstellt", t7_qb2: "löscht", t7_qc2: "liest", t7_qd2: "druckt",
    t8_title: "Der Turing-Test", t8_text: "Ein Test, um zu prüfen, ob eine Maschine so intelligent wie ein Mensch wirkt.", t8_inst: "Sortieren:", t8_h1: "Mensch oder Maschine?", t8_h2: "Wer antwortet?", t8_q: "Wer hat den Test erfunden?", t8_qa: "Alan Turing", t8_qb: "Steve Jobs", t8_qc: "Albert Einstein", t8_qd: "Bill Gates",
    t8_bl1: "KI Ziel", t8_bl2: "Realität", t8_i1: "Mensch täuschen", t8_i2: "Code schreiben", t8_i3: "Sinnvoll antworten", t8_i4: "Strom verbrauchen",
    t9_title: "KI im Weltraum", t9_text: "KI hilft Rovern auf dem Mars, Hindernissen auszuweichen, ohne auf die Erde zu warten.", t9_inst: "Wörter ordnen:", t9_h1: "Weit weg.", t9_h2: "Mars-Mission.", t9_q: "Warum braucht ein Mars-Rover KI?", t9_qa: "Wegen der Signalpause", t9_qb: "Um Fotos zu machen", t9_qc: "Um Benzin zu sparen", t9_qd: "Um Musik zu hören",
    t9_w1: "KI", t9_w2: "steuert", t9_w3: "Rover", t9_w4: "auf", t9_w5: "fremden", t9_w6: "Planeten.", t9_w7: "",
    t10_title: "Smarthome & KI", t10_text: "KI steuert Heizung und Licht im Haus, um Energie zu sparen und es gemütlich zu machen.", t10_inst: "Wort markieren:", t10_h1: "Schlaues Haus.", t10_h2: "Automation.", t10_q: "Was macht ein Smarthome?", t10_qa: "Automatisiert Abläufe", t10_qb: "Baut sich selbst", t10_qc: "Wäscht die Wäsche", t10_qd: "Kocht Kaffee",
    t10_tk1: "Das", t10_tk2: "Haus", t10_tk3: "lernt", t10_tk4: "die", t10_tk5: "Gewohnheiten", t10_tk6: "der", t10_tk7: "Bewohner.",
    t11_title: "Gesichtserkennung", t11_text: "KI erkennt Gesichter zur Sicherheit, aber wir müssen auf unsere Privatsphäre achten.", t11_inst: "Paare zuordnen:", t11_h1: "Wer bist du?", t11_h2: "Merkmale.", t11_q: "Wo nutzt du Gesichtserkennung?", t11_qa: "Handy entsperren", t11_qb: "Pizza bestellen", t11_qc: "Hausaufgaben machen", t11_qd: "Schuhe binden",
    t11_l1: "Auge", t11_r1: "Iris-Scan", t11_l2: "Gesicht", t11_r2: "Video-Ident", t11_l3: "Finger", t11_r3: "Abdruck",
    t12_title: "KI & Umwelt", t12_text: "KI hilft, den Energieverbrauch von Städten zu senken und Müll besser zu trennen.", t12_inst: "Lücke füllen:", t12_h1: "Grüne KI.", t12_h2: "Nachhaltigkeit.", t12_q: "Wie hilft KI dem Klima?", t12_qa: "Optimiert Energie", t12_qb: "KI braucht keinen Strom", t12_qc: "KI pflanzt Bäume", t12_qd: "KI macht Wind",
    t12_sent: "KI macht unsere Welt ___.", t12_qa2: "effizienter", t12_qb2: "lauter", t12_qc2: "schmutziger", t12_qd2: "langsamer",
    t13_title: "Personalisierung", t13_text: "Algorithmen merken sich, was dir gefällt, und zeigen dir passende Werbung.", t13_inst: "Sortieren:", t13_h1: "Was passt?", t13_h2: "Algorithmen.", t13_q: "Warum siehst du Werbung für Turnschuhe?", t13_qa: "Wegen deiner Suche", t13_qb: "Wegen deiner Noten", t13_qc: "Wegen deinem Alter", t13_qd: "Wegen deinem Namen",
    t13_bl1: "Datenquelle", t13_bl2: "Ergebnis", t13_i1: "Browserverlauf", t13_i2: "Passende Anzeige", t13_i3: "Kaufhistorie", t13_i4: "Rabattcode",
    t14_title: "Social Media Bots", t14_text: "Viele Accounts in sozialen Medien sind KIs, die Nachrichten verbreiten.", t14_inst: "Wörter ordnen:", t14_h1: "Unechte Nutzer.", t14_h2: "Internet-Bots.", t14_q: "Was ist ein Social Bot?", t14_qa: "Ein KI-Nutzerkonto", t14_qb: "Ein neuer Computer", t14_qc: "Ein Internetkabel", t14_qd: "Ein Handy-Spiel",
    t14_w1: "Bots", t14_w2: "können", t14_w3: "automatisch", t14_w4: "Beiträge", t14_w5: "im", t14_w6: "Netz", t14_w7: "posten.",
    t15_title: "Zukunft der Arbeit", t15_text: "KI wird viele Jobs verändern. Wir müssen lernen, mit ihr zusammenzuarbeiten.", t15_inst: "Wort markieren:", t15_h1: "Neue Jobs.", t15_h2: "Teamwork.", t15_q: "Was ist wichtig für die Zukunft?", t15_qa: "KI verstehen", t15_qb: "Schneller tippen", t15_qc: "KI abschalten", t15_qd: "Nichts tun",
    t15_tk1: "Menschen", t15_tk2: "und", t15_tk3: "KI", t15_tk4: "arbeiten", t15_tk5: "künftig", t15_tk6: "zusammen."
  },
  en: {
    explorer_title: "AI Island 2: Applications",
    t1_title: "Image Recognition", t1_text: "AI can name objects in images in seconds today, whether it's a cat, a tree, or a car.", t1_inst: "Match the pairs:", t1_h1: "What does AI see?", t1_h2: "Recognize objects.", t1_q: "What does AI recognize in a photo of a forest?", t1_qa: "Trees and animals", t1_qb: "The smell of pines", t1_qc: "The temperature", t1_qd: "Nothing",
    t1_l1: "Cat", t1_r1: "Pet", t1_l2: "Bicycle", t1_r2: "Vehicle", t1_l3: "Apple", t1_r3: "Fruit",
    t2_title: "Real-time Translation", t2_text: "AI systems can translate speech into another language with almost no delay.", t2_inst: "Fill in the blank:", t2_h1: "Foreign languages.", t2_h2: "Communication.", t2_q: "How does AI help when traveling?", t2_qa: "Through instant translation", t2_qb: "By carrying suitcases", t2_qc: "By flying", t2_qd: "By sleeping",
    t2_sent: "AI breaks the barrier of ___.", t2_qa2: "languages", t2_qb2: "walls", t2_qc2: "windows", t2_qd2: "doors",
    t3_title: "Self-driving Cars", t3_text: "Autonomous vehicles use cameras and AI to steer safely through traffic.", t3_inst: "Sort them:", t3_h1: "Car tech.", t3_h2: "Sensors & AI.", t3_q: "What does a self-driving car need?", t3_qa: "AI and sensors", t3_qb: "An invisible driver", t3_qc: "Magic", t3_qd: "Only gasoline",
    t3_bl1: "Car AI", t3_bl2: "Normal Car", t3_i1: "Lane recognition", t3_i2: "Turn steering wheel", t3_i3: "Keep distance", t3_i4: "Shift gears",
    t4_title: "AI in Medicine", t4_text: "AI helps doctors find diseases on X-rays faster and more accurately.", t4_inst: "Order the words:", t4_h1: "AI helps heal.", t4_h2: "Health.", t4_q: "What does AI do at the doctor's?", t4_qa: "Analyzes images", t4_qb: "Operates alone", t4_qc: "Cleans the floor", t4_qd: "Writes prescriptions",
    t4_w1: "AI", t4_w2: "supports", t4_w3: "doctors", t4_w4: "with", t4_w5: "the", t4_w6: "diagnosis.", t4_w7: "",
    t5_title: "Deep Learning", t5_text: "Deep Learning uses very deep neural networks for particularly complex tasks.", t5_inst: "Highlight the word:", t5_h1: "Deep learning.", t5_h2: "Many layers.", t5_q: "What does 'Deep' mean in Deep Learning?", t5_qa: "Many network layers", t5_qb: "Under water", t5_qc: "Very expensive", t5_qd: "Slow",
    t5_tk1: "Deep", t5_tk2: "Learning", t5_tk3: "is", t5_tk4: "very", t5_tk5: "powerful.",
    t6_title: "Big Data", t6_text: "AI needs huge amounts of information (Big Data) to understand complex patterns.", t6_inst: "Match the pairs:", t6_h1: "Lots of information.", t6_h2: "Data volumes.", t6_q: "What is Big Data?", t6_qa: "Huge amounts of data", t6_qb: "A large computer", t6_qc: "A thick book", t6_qd: "A large hard drive",
    t6_l1: "Internet", t6_r1: "Search queries", t6_l2: "Weather", t6_r2: "Measuring stations", t6_l3: "Phone", t6_r3: "Location data",
    t7_title: "Generative AI", t7_text: "This type of AI can create completely new content like text or images from scratch.", t7_inst: "Fill in the blank:", t7_h1: "Create.", t7_h2: "Make new.", t7_q: "What is ChatGPT?", t7_qa: "A generative AI", t7_qb: "A search engine", t1_qc: "A game", t1_qd: "A video",
    t7_sent: "Generative AI ___ new texts.", t7_qa2: "creates", t7_qb2: "deletes", t7_qc2: "reads", t7_qd2: "prints",
    t8_title: "The Turing Test", t8_text: "A test to check if a machine seems as intelligent as a human.", t8_inst: "Sort them:", t8_h1: "Human or machine?", t8_h2: "Who answers?", t8_q: "Who invented the test?", t8_qa: "Alan Turing", t8_qb: "Steve Jobs", t8_qc: "Albert Einstein", t8_qd: "Bill Gates",
    t8_bl1: "AI Goal", t8_bl2: "Reality", t8_i1: "Deceive human", t8_i2: "Write code", t8_i3: "Answer sensibly", t8_i4: "Use electricity",
    t9_title: "AI in Space", t9_text: "AI helps rovers on Mars avoid obstacles without waiting for Earth.", t9_inst: "Order the words:", t9_h1: "Far away.", t9_h2: "Mars mission.", t9_q: "Why does a Mars rover need AI?", t9_qa: "Because of signal delay", t9_qb: "To take photos", t9_qc: "To save fuel", t9_qd: "To listen to music",
    t9_w1: "AI", t9_w2: "controls", t9_w3: "rovers", t9_w4: "on", t9_w5: "foreign", t9_w6: "planets.", t9_w7: "",
    t10_title: "Smarthome & AI", t10_text: "AI controls heating and light in the house to save energy and make it cozy.", t10_inst: "Highlight the word:", t10_h1: "Smart house.", t10_h2: "Automation.", t10_q: "What does a smarthome do?", t10_qa: "Automates processes", t10_qb: "Builds itself", t10_qc: "Washes the laundry", t10_qd: "Cooks coffee",
    t10_tk1: "The", t10_tk2: "house", t10_tk3: "learns", t10_tk4: "the", t10_tk5: "habits", t10_tk6: "of", t10_tk7: "residents.",
    t11_title: "Face Recognition", t11_text: "AI recognizes faces for security, but we must respect our privacy.", t11_inst: "Match the pairs:", t11_h1: "Who are you?", t11_h2: "Features.", t11_q: "Where do you use face recognition?", t11_qa: "Unlocking phone", t11_qb: "Ordering pizza", t11_qc: "Doing homework", t11_qd: "Tying shoes",
    t11_l1: "Eye", t11_r1: "Iris scan", t11_l2: "Face", t11_r2: "Video ID", t11_l3: "Finger", t11_r3: "Print",
    t12_title: "AI & Environment", t12_text: "AI helps reduce the energy consumption of cities and sort waste better.", t12_inst: "Fill in the blank:", t12_h1: "Green AI.", t12_h2: "Sustainability.", t12_q: "How does AI help the climate?", t12_qa: "Optimizes energy", t12_qb: "AI needs no power", t12_qc: "AI plants trees", t12_qd: "AI makes wind",
    t12_sent: "AI makes our world ___.", t12_qa2: "more efficient", t12_qb2: "louder", t12_qc2: "dirtier", t12_qd2: "slower",
    t13_title: "Personalization", t13_text: "Algorithms remember what you like and show you matching ads.", t13_inst: "Sort them:", t13_h1: "What fits?", t13_h2: "Algorithms.", t13_q: "Why do you see ads for sneakers?", t13_qa: "Because of your search", t13_qb: "Because of your grades", t13_qc: "Because of your age", t13_qd: "Because of your name",
    t13_bl1: "Data source", t13_bl2: "Result", t13_i1: "Browser history", t13_i2: "Matching ad", t13_i3: "Purchase history", t13_i4: "Discount code",
    t14_title: "Social Media Bots", t14_text: "Many accounts in social media are AIs that spread messages.", t14_inst: "Order the words:", t14_h1: "Fake users.", t14_h2: "Internet bots.", t14_q: "What is a social bot?", t14_qa: "An AI user account", t14_qb: "A new computer", t14_qc: "An internet cable", t14_qd: "A phone game",
    t14_w1: "Bots", t14_w2: "can", t14_w3: "automatically", t14_w4: "post", t14_w5: "messages", t14_w6: "online.", t14_w7: "",
    t15_title: "Future of Work", t15_text: "AI will change many jobs. We must learn to work together with it.", t15_inst: "Highlight the word:", t15_h1: "New jobs.", t15_h2: "Teamwork.", t15_q: "What is important for the future?", t15_qa: "Understanding AI", t15_qb: "Typing faster", t15_qc: "Turning off AI", t15_qd: "Doing nothing",
    t15_tk1: "Humans", t15_tk2: "and", t15_tk3: "AI", t15_tk4: "will", t15_tk5: "work", t15_tk6: "together."
  },
  hu: {
    explorer_title: "MI Sziget 2: Alkalmazások",
    t1_title: "Képfelismerés", t1_text: "A MI ma már másodpercek alatt azonosítja a tárgyakat a képeken: macska, fa vagy autó.", t1_inst: "Párosítás:", t1_h1: "Mit lát a MI?", t1_h2: "Tárgyak felismerése.", t1_q: "Mit ismer fel a MI egy erdőről készült fotón?", t1_qa: "Fákat és állatokat", t1_qb: "A fenyő illatát", t1_qc: "A hőmérsékletet", t1_qd: "Semmit",
    t1_l1: "Macska", t1_r1: "Háziállat", t1_l2: "Bicikli", t1_r2: "Jármű", t1_l3: "Alma", t1_r3: "Gyümölcs",
    t2_title: "Valós idejű fordítás", t2_text: "A MI rendszerek szinte késleltetés nélkül képesek lefordítani a beszédet egy másik nyelvre.", t2_inst: "Hiánypótlás:", t2_h1: "Idegen nyelvek.", t2_h2: "Kommunikáció.", t2_q: "Hogyan segít a MI utazáskor?", t2_qa: "Azonnali fordítással", t2_qb: "Bőröndcipeléssel", t2_qc: "Repüléssel", t2_qd: "Alvással",
    t2_sent: "A MI lebontja a ___ közötti korlátokat.", t2_qa2: "nyelvek", t2_qb2: "falak", t2_qc2: "ablakok", t2_qd2: "ajtók",
    t3_title: "Önvezető autók", t3_text: "Az autonóm járművek kamerákat és MI-t használnak a biztonságos közlekedéshez.", t3_inst: "Válogatás:", t3_h1: "Autó-technika.", t3_h2: "Szenzorok és MI.", t3_q: "Mire van szüksége egy önvezető autónak?", t3_qa: "MI-re és szenzorokra", t3_qb: "Egy láthatatlan sofőrre", t3_qc: "Varázslatra", t3_qd: "Csak benzinre",
    t3_bl1: "Autó-MI", t3_bl2: "Sima autó", t3_i1: "Sávfelismerés", t3_i2: "Kormány tekerése", t3_i3: "Távolságtartás", t3_i4: "Váltás",
    t4_title: "MI az orvoslásban", t4_text: "A MI segít az orvosoknak gyorsabban és pontosabban felismerni a betegségeket a röntgenképeken.", t4_inst: "Szórend:", t4_h1: "A MI segít gyógyítani.", t4_h2: "Egészség.", t4_q: "Mit csinál a MI az orvosnál?", t4_qa: "Képeket elemez", t4_qb: "Egyedül műt", t4_qc: "Feltakarít", t4_qd: "Receptet ír",
    t4_w1: "A MI", t4_w2: "segíti", t4_w3: "az orvosokat", t4_w4: "a diagnózis", t4_w5: "felállításában.", t4_w6: "", t4_w7: "",
    t5_title: "Deep Learning", t5_text: "A mélytanulás nagyon sok rétegű neurális hálókat használ a bonyolult feladatokhoz.", t5_inst: "Szó megjelölése:", t5_h1: "Mélytanulás.", t5_h2: "Sok réteg.", t5_q: "Mit jelent a 'Deep' a Deep Learningnél?", t5_qa: "Sok hálózati réteg", t5_qb: "Víz alatt", t5_qc: "Nagyon drága", t5_qd: "Lassú",
    t5_tk1: "A Deep", t5_tk2: "Learning", t5_tk3: "rendkívül", t5_tk4: "erőteljes", t5_tk5: "technológia.",
    t6_title: "Big Data", t6_text: "A MI-nek hatalmas mennyiségű információra (Big Data) van szüksége a minták megértéséhez.", t6_inst: "Párosítás:", t6_h1: "Rengeteg információ.", t6_h2: "Adatmennyiség.", t6_q: "Mi az a Big Data?", t6_qa: "Hatalmas adathalmaz", t6_qb: "Egy nagy számítógép", t6_qc: "Egy vastag könyv", t6_qd: "Egy nagy merevlemez",
    t6_l1: "Internet", t6_r1: "Keresések", t6_l2: "Időjárás", t6_r2: "Mérőállomások", t6_l3: "Mobil", t6_r3: "Helyadatok",
    t7_title: "Generatív MI", t7_text: "Ez a MI típus képes teljesen új tartalmakat, például szövegeket vagy képeket létrehozni a semmiből.", t7_inst: "Hiánypótlás:", t7_h1: "Létrehozás.", t7_h2: "Újat alkotni.", t7_q: "Mi a ChatGPT?", t7_qa: "Egy generatív MI", t7_qb: "Egy keresőmotor", t1_qc: "Egy játék", t1_qd: "Egy videó",
    t7_sent: "A generatív MI új szövegeket ___.", t7_qa2: "hoz létre", t7_qb2: "töröl ki", t7_qc2: "olvas el", t7_qd2: "nyomtat ki",
    t8_title: "A Turing-teszt", t8_text: "Egy teszt annak eldöntésére, hogy egy gép képes-e emberi intelligenciát mutatni.", t8_inst: "Válogatás:", t8_h1: "Ember vagy gép?", t8_h2: "Ki válaszol?", t8_q: "Ki találta fel a tesztet?", t8_qa: "Alan Turing", t8_qb: "Steve Jobs", t8_qc: "Albert Einstein", t8_qd: "Bill Gates",
    t8_bl1: "MI cél", t8_bl2: "Valóság", t8_i1: "Ember megtévesztése", t8_i2: "Kódírás", t8_i3: "Értelmes válasz", t8_i4: "Áramfogyasztás",
    t9_title: "MI az űrben", t9_text: "A MI segít a Marson lévő rovereknek kikerülni az akadályokat anélkül, hogy a Földre várnának.", t9_inst: "Szórend:", t9_h1: "Nagyon messze.", t9_h2: "Mars misszió.", t9_q: "Miért kell MI a Mars-rovernek?", t9_qa: "A jelkésleltetés miatt", t9_qb: "Hogy fotózzon", t9_qc: "Hogy benzint spóroljon", t9_qd: "Hogy zenét hallgasson",
    t9_w1: "A MI", t9_w2: "irányítja", t9_w3: "a rovereket", t9_w4: "idegen", t9_w5: "bolygókon.", t9_w6: "", t9_w7: "",
    t10_title: "Smarthome & MI", t10_text: "A MI vezérli a fűtést és a világítást a házban, hogy energiát spóroljon.", t10_inst: "Szó megjelölése:", t10_h1: "Okos ház.", t10_h2: "Automatizálás.", t10_q: "Mit csinál egy okosotthon?", t10_qa: "Folyamatokat automatizál", t10_qb: "Magától felépül", t10_qc: "Kimos", t10_qd: "Kávét főz",
    t10_tk1: "A ház", t10_tk2: "megtanulja", t10_tk3: "a lakók", t10_tk4: "szokásait.", t10_tk5: "", t10_tk6: "", t10_tk7: "",
    t11_title: "Arcfelismerés", t11_text: "A MI felismeri az arcokat a biztonság érdekében, de figyelnünk kell a magánéletünkre.", t11_inst: "Párosítás:", t11_h1: "Ki vagy te?", t11_h2: "Jellemzők.", t11_q: "Hol használsz arcfelismerést?", t11_qa: "Mobil feloldása", t11_qb: "Pizza rendelés", t11_qc: "Tanulás", t11_qd: "Cipőfűzés",
    t11_l1: "Szem", t11_r1: "Írisz-szkenner", t11_l2: "Arc", t11_r2: "Videó-azonosítás", t11_l3: "Ujj", t11_r3: "Lenyomat",
    t12_title: "MI & Környezet", t12_text: "A MI segít csökkenteni a városok energiafogyasztását és jobban szétválogatni a szemetet.", t12_inst: "Hiánypótlás:", t12_h1: "Zöld MI.", t12_h2: "Fenntarthatóság.", t12_q: "Hogyan segít a MI a klímán?", t12_qa: "Optimalizálja az energiát", t12_qb: "Nem kell neki áram", t12_qc: "Fákat ültet", t12_qd: "Szelet csinál",
    t12_sent: "A MI ___ teszi a világunkat.", t12_qa2: "hatékonyabbá", t12_qb2: "hangosabbá", t12_qc2: "piszkosabbá", t12_qd2: "lassabbá",
    t13_title: "Személyre szabás", t13_text: "Az algoritmusok megjegyzik, mi tetszik neked, és ahhoz illő hirdetéseket mutatnak.", t13_inst: "Válogatás:", t13_h1: "Mi illik hozzád?", t13_h2: "Algoritmusok.", t13_q: "Miért látsz cipőreklámot?", t13_qa: "A kereséseid alapján", t13_qb: "A jegyeid alapján", t13_qc: "A korod alapján", t13_qd: "A neved alapján",
    t13_bl1: "Adatforrás", t13_bl2: "Eredmény", t13_i1: "Böngészési előzmény", t13_i2: "Találó hirdetés", t13_i3: "Vásárlási múlt", t13_i4: "Kuponkód",
    t14_title: "Social Media Botok", t14_text: "Sok profil a közösségi médiában valójában MI, ami üzeneteket terjeszt.", t14_inst: "Szórend:", t14_h1: "Nem igazi felhasználók.", t14_h2: "Internetes botok.", t14_q: "Mi az a Social Bot?", t14_qa: "Egy MI felhasználói fiók", t14_qb: "Egy új gép", t14_qc: "Egy kábel", t14_qd: "Egy mobiljáték",
    t14_w1: "A botok", t14_w2: "automatikusan", t14_w3: "tudnak", t14_w4: "posztolni", t14_w5: "a hálón.", t14_w6: "", t14_w7: "",
    t15_title: "A munka jövője", t15_text: "A MI sok munkakört megváltoztat majd. Meg kell tanulnunk együttműködni vele.", t15_inst: "Szó megjelölése:", t15_h1: "Új munkák.", t15_h2: "Csapatmunka.", t15_q: "Mi a legfontosabb a jövőre nézve?", t15_qa: "Érteni a MI-hez", t15_qb: "Gyorsabban gépelni", t15_qc: "Kikapcsolni a MI-t", t15_qd: "Semmit sem tenni",
    t15_tk1: "Az emberek", t15_tk2: "és a MI", t15_tk3: "együtt", t15_tk4: "fognak", t15_tk5: "dolgozni."
  },
  ro: {
    explorer_title: "Insula IA 2: Aplicații",
    t1_title: "Recunoașterea imaginilor", t1_text: "IA poate numi azi obiectele din imagini în câteva secunde, fie că e vorba de o pisică, un copac sau o mașină.", t1_inst: "Potrivește perechile:", t1_h1: "Ce vede IA?", t1_h2: "Recunoaștere obiecte.", t1_q: "Ce recunoaște IA într-o poză cu o pădure?", t1_qa: "Copaci și animale", t1_qb: "Mirosul pinilor", t1_qc: "Temperatura", t1_qd: "Nimic",
    t1_l1: "Pisică", t1_r1: "Animal companie", t1_l2: "Bicicletă", t1_r2: "Vehicul", t1_l3: "Măr", t1_r3: "Fruct",
    t2_title: "Traducere în timp real", t2_text: "Sistemele IA pot traduce vorbirea în altă limbă aproape fără întârziere.", t2_inst: "Completează spațiul:", t2_h1: "Limbi străine.", t2_h2: "Comunicare.", t2_q: "Cum ajută IA în călătorii?", t2_qa: "Prin traducere instantanee", t2_qb: "Cărând valize", t2_qc: "Zburând", t2_qd: "Dormind",
    t2_sent: "IA elimină bariera ___.", t2_qa2: "limbilor", t2_qb2: "zidurilor", t2_qc2: "ferestrelor", t2_qd2: "ușilor",
    t3_title: "Mașini autonome", t3_text: "Vehiculele autonome folosesc camere și IA pentru a se conduce singure prin trafic.", t3_inst: "Sortează:", t3_h1: "Tehnologie auto.", t3_h2: "Senzori și IA.", t3_q: "De ce are nevoie o mașină autonomă?", t3_qa: "IA și senzori", t3_qb: "Un șofer invizibil", t3_qc: "Magie", t3_qd: "Doar benzină",
    t3_bl1: "IA Mașină", t3_bl2: "Mașină normală", t3_i1: "Recunoaștere bandă", t3_i2: "Rotire volan", t3_i3: "Păstrare distanță", t3_i4: "Schimbare viteze",
    t4_title: "IA în medicină", t4_text: "IA îi ajută pe medici să găsească boli pe radiografii mai rapid și mai precis.", t4_inst: "Ordonează cuvintele:", t4_h1: "IA ajută la vindecare.", t4_h2: "Sănătate.", t4_q: "Ce face IA la doctor?", t4_qa: "Analizează imagini", t4_qb: "Operează singură", t4_qc: "Face curat", t4_qd: "Scrie rețete",
    t4_w1: "IA", t4_w2: "sprijină", t4_w3: "medicii", t4_w4: "în", t4_w5: "stabilirea", t4_w6: "diagnosticului.", t4_w7: "",
    t5_title: "Deep Learning", t5_text: "Deep Learning folosește rețele neuronale foarte adânci pentru sarcini complexe.", t5_inst: "Evidențiază cuvântul:", t5_h1: "Învățare profundă.", t5_h2: "Multe straturi.", t5_q: "Ce înseamnă 'Deep' la Deep Learning?", t5_qa: "Multe straturi de rețea", t5_qb: "Sub apă", t5_qc: "Foarte scump", t5_qd: "Lent",
    t5_tk1: "Deep", t5_tk2: "Learning", t5_tk3: "este", t5_tk4: "foarte", t5_tk5: "puternic.",
    t6_title: "Big Data", t6_text: "IA are nevoie de cantități uriașe de date (Big Data) pentru a înțelege tiparele complexe.", t6_inst: "Potrivește perechile:", t6_h1: "Multă informație.", t6_h2: "Volume de date.", t6_q: "Ce este Big Data?", t6_qa: "Date în cantități uriașe", t6_qb: "Un calculator mare", t6_qc: "O carte groasă", t6_qd: "Un hard disk mare",
    t6_l1: "Internet", t6_r1: "Căutări", t6_l2: "Vreme", t6_r2: "Stații măsură", t6_l3: "Telefon", t6_r3: "Date locație",
    t7_title: "IA Generativă", t7_text: "Acest tip de IA poate crea conținut nou, cum ar fii texte sau imagini, de la zero.", t7_inst: "Completează spațiul:", t7_h1: "Creare.", t7_h2: "Creație nouă.", t7_q: "Ce este ChatGPT?", t7_qa: "O IA generativă", t7_qb: "Un motor de căutare", t1_qc: "Un joc", t1_qd: "Un video",
    t7_sent: "IA generativă ___ texte noi.", t7_qa2: "creează", t7_qb2: "șterge", t7_qc2: "citește", t7_qd2: "imprimă",
    t8_title: "Testul Turing", t8_text: "Un test pentru a verifica dacă o mașină pare la fel de inteligentă ca un om.", t8_inst: "Sortează:", t8_h1: "Om sau mașină?", t8_h2: "Cine răspunde?", t8_q: "Cine a inventat testul?", t8_qa: "Alan Turing", t8_qb: "Steve Jobs", t8_qc: "Albert Einstein", t8_qd: "Bill Gates",
    t8_bl1: "Scop IA", t8_bl2: "Realitate", t8_i1: "Păcălire om", t8_i2: "Scriere cod", t8_i3: "Răspuns logic", t8_i4: "Consum curent",
    t9_title: "IA în spațiu", t9_text: "IA ajută roverele de pe Marte să evite obstacolele fără să aștepte comenzi de pe Pământ.", t9_inst: "Ordonează cuvintele:", t9_h1: "Foarte departe.", t9_h2: "Misiune Marte.", t9_q: "De ce are nevoie roverul de IA?", t9_qa: "Din cauza întârzierii semnalului", t9_qb: "Ca să facă poze", t9_qc: "Ca să economisească benzină", t9_qd: "Ca să asculte muzică",
    t9_w1: "IA", t9_w2: "conduce", t9_w3: "roverele", t9_w4: "pe", t9_w5: "alte", t9_w6: "planete.", t9_w7: "",
    t10_title: "Smarthome & IA", t10_text: "IA controlează căldura și lumina în casă pentru a economisi energie.", t10_inst: "Evidențiază cuvântul:", t10_h1: "Casă deșteaptă.", t10_h2: "Automatizare.", t10_q: "Ce face o casă smart?", t10_qa: "Automatizează procese", t10_qb: "Se construiește singură", t10_qc: "Spală rufele", t10_qd: "Face cafea",
    t10_tk1: "Casa", t10_tk2: "învață", t10_tk3: "obiceiurile", t10_tk4: "locuitorilor.", t10_tk5: "", t10_tk6: "", t10_tk7: "",
    t11_title: "Recunoaștere facială", t11_text: "IA recunoaște fețele pentru securitate, dar trebuie să ne protejăm datele personale.", t11_inst: "Potrivește perechile:", t11_h1: "Cine ești?", t11_h2: "Trăsături.", t11_q: "Unde folosești recunoașterea facială?", t11_qa: "Deblocare telefon", t11_qb: "Comandă pizza", t11_qc: "Teme", t11_qd: "Legat șireturi",
    t11_l1: "Ochi", t11_r1: "Scanare iris", t11_l2: "Față", t11_r2: "Identificare video", t11_l3: "Deget", t11_r3: "Amprentă",
    t12_title: "IA & Mediul", t12_text: "IA ajută la reducerea consumului de energie al orașelor și la sortarea gunoiului.", t12_inst: "Completează spațiul:", t12_h1: "IA verde.", t12_h2: "Sustenabilitate.", t12_q: "Cum ajută IA clima?", t12_qa: "Optimizează energia", t12_qb: "IA nu consumă curent", t12_qc: "IA plantează copaci", t12_qd: "IA face vânt",
    t12_sent: "IA face lumea ___.", t12_qa2: "mai eficientă", t12_qb2: "mai gălăgioasă", t12_qc2: "mai murdară", t12_qd2: "mai lentă",
    t13_title: "Personalizare", t13_text: "Algoritmii rețin ce îți place și îți arată reclame potrivite.", t13_inst: "Sortează:", t13_h1: "Ce ți se potrivește?", t13_h2: "Algoritmi.", t13_q: "De ce vezi reclame la pantofi sport?", t13_qa: "Datorită căutărilor", t13_qb: "Datorită notelor", t13_qc: "Datorită vârstei", t13_qd: "Datorită numelui",
    t13_bl1: "Sursă date", t13_bl2: "Rezultat", t13_i1: "Istoric navigare", t13_i2: "Reclamă potrivită", t13_i3: "Istoric cumpărături", t13_i4: "Cod reducere",
    t14_title: "Boti Social Media", t14_text: "Multe conturi de pe rețelele sociale sunt IA-uri care distribuie mesaje.", t14_inst: "Ordonează cuvintele:", t14_h1: "Utilizatori falși.", t14_h2: "Boți de internet.", t14_q: "Ce este un Social Bot?", t14_qa: "Un cont de utilizator IA", t14_qb: "Un calculator nou", t14_qc: "Un cablu", t14_qd: "Un joc",
    t14_w1: "Boții", t14_w2: "pot", t14_w3: "posta", t14_w4: "automat", t14_w5: "mesaje", t14_w6: "pe", t14_w7: "rețea.",
    t15_title: "Viitorul muncii", t15_text: "IA va schimba multe meserii. Trebuie să învățăm să colaborăm cu ea.", t15_inst: "Evidențiază cuvântul:", t15_h1: "Joburi noi.", t15_h2: "Muncă în echipă.", t15_q: "Ce e important pentru viitor?", t15_qa: "Să înțelegem IA", t15_qb: "Să scriem mai repede", t15_qc: "Să oprim IA", t15_qd: "Să nu facem nimic",
    t15_tk1: "Oamenii", t15_tk2: "și IA", t15_tk3: "vor", t15_tk4: "lucra", t15_tk5: "împreună."
  }
};

export const INFO_K6_I2_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "simple-icon", icon: "🖼️", color: "#FF5722" },
    interactive: { type: "match-pairs", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", pairs: [{left:"t1_l1",right:"t1_r1"},{left:"t1_l2",right:"t1_r2"},{left:"t1_l3",right:"t1_r3"}] },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" }
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "🌍", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" }
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "icon-grid", items: [{emoji:"🚗",label:"Auto"},{emoji:"📏",label:"Sensor"}] },
    interactive: { type: "drag-to-bucket", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", buckets: [{id:"b1",label:"t3_bl1"},{id:"b2",label:"t3_bl2"}], items: [{text:"t3_i1",bucketId:"b1"},{text:"t3_i2",bucketId:"b2"},{text:"t3_i3",bucketId:"b1"},{text:"t3_i4",bucketId:"b2"}] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "🏥", color: "#E91E63" },
    interactive: { type: "word-order", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", words: ["t4_w1", "t4_w2", "t4_w3", "t4_w4", "t4_w5", "t4_w6", "t4_w7"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6].slice(0, 6) },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "🎢", color: "#673AB7" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5"].filter(x=>x!==undefined), correctIndices: [0,1] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" }
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "simple-icon", icon: "📊", color: "#2196F3" },
    interactive: { type: "match-pairs", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", pairs: [{left:"t6_l1",right:"t6_r1"},{left:"t6_l2",right:"t6_r2"},{left:"t6_l3",right:"t6_r3"}] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" }
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "✍️", color: "#FFC107" },
    interactive: { type: "gap-fill", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", sentence: "t7_sent", choices: ["t7_qa2", "t7_qb2", "t7_qc2", "t7_qd2"], correctIndex: 0 },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" }
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "icon-grid", items: [{emoji:"🎭",label:"Test"},{emoji:"⚡",label:"Power"}] },
    interactive: { type: "drag-to-bucket", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", buckets: [{id:"b1",label:"t8_bl1"},{id:"b2",label:"t8_bl2"}], items: [{text:"t8_i1",bucketId:"b1"},{text:"t8_i2",bucketId:"b2"},{text:"t8_i3",bucketId:"b1"},{text:"t8_i4",bucketId:"b2"}] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" }
  },
  {
    infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "simple-icon", icon: "🚀", color: "#9E9E9E" },
    interactive: { type: "word-order", instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2", words: ["t9_w1", "t9_w2", "t9_w3", "t9_w4", "t9_w5", "t9_w6"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5] },
    quiz: { question: "t9_q", choices: ["t9_qa", "t9_qb", "t9_qc", "t9_qd"], answer: "t9_qa" }
  },
  {
    infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "simple-icon", icon: "🏠", color: "#795548" },
    interactive: { type: "highlight-text", instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2", tokens: ["t10_tk1","t10_tk2","t10_tk3","t10_tk4","t10_tk5","t10_tk6","t10_tk7"].filter(x=>x!==undefined), correctIndices: [2,4] },
    quiz: { question: "t10_q", choices: ["t10_qa", "t10_qb", "t10_qc", "t10_qd"], answer: "t10_qa" }
  },
  {
    infoTitle: "t11_title", infoText: "t11_text",
    svg: { type: "simple-icon", icon: "👤", color: "#607D8B" },
    interactive: { type: "match-pairs", instruction: "t11_inst", hint1: "t11_h1", hint2: "t11_h2", pairs: [{left:"t11_l1",right:"t11_r1"},{left:"t11_l2",right:"t11_r2"},{left:"t11_l3",right:"t11_r3"}] },
    quiz: { question: "t11_q", choices: ["t11_qa", "t11_qb", "t11_qc", "t11_qd"], answer: "t11_qa" }
  },
  {
    infoTitle: "t12_title", infoText: "t12_text",
    svg: { type: "simple-icon", icon: "🌱", color: "#8BC34A" },
    interactive: { type: "gap-fill", instruction: "t12_inst", hint1: "t12_h1", hint2: "t12_h2", sentence: "t12_sent", choices: ["t12_qa2", "t12_qb2", "t12_qc2", "t12_qd2"], correctIndex: 0 },
    quiz: { question: "t12_q", choices: ["t12_qa", "t12_qb", "t12_qc", "t12_qd"], answer: "t12_qa" }
  },
  {
    infoTitle: "t13_title", infoText: "t13_text",
    svg: { type: "icon-grid", items: [{emoji:"👁️",label:"Source"},{emoji:"🎯",label:"Target"}] },
    interactive: { type: "drag-to-bucket", instruction: "t13_inst", hint1: "t13_h1", hint2: "t13_h2", buckets: [{id:"b1",label:"t13_bl1"},{id:"b2",label:"t13_bl2"}], items: [{text:"t13_i1",bucketId:"b1"},{text:"t13_i2",bucketId:"b2"},{text:"t13_i3",bucketId:"b1"},{text:"t13_i4",bucketId:"b2"}] },
    quiz: { question: "t13_q", choices: ["t13_qa", "t13_qb", "t13_qc", "t13_qd"], answer: "t13_qa" }
  },
  {
    infoTitle: "t14_title", infoText: "t14_text",
    svg: { type: "simple-icon", icon: "📢", color: "#03A9F4" },
    interactive: { type: "word-order", instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2", words: ["t14_w1", "t14_w2", "t14_w3", "t14_w4", "t14_w5", "t14_w6", "t14_w7"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t14_q", choices: ["t14_qa", "t14_qb", "t14_qc", "t14_qd"], answer: "t14_qa" }
  },
  {
    infoTitle: "t15_title", infoText: "t15_text",
    svg: { type: "simple-icon", icon: "🤝", color: "#9C27B0" },
    interactive: { type: "highlight-text", instruction: "t15_inst", hint1: "t15_h1", hint2: "t15_h2", tokens: ["t15_tk1","t15_tk2","t15_tk3","t15_tk4","t15_tk5","t15_tk6"].filter(x=>x!==undefined), correctIndices: [0,2] },
    quiz: { question: "t15_q", choices: ["t15_qa", "t15_qb", "t15_qc", "t15_qd"], answer: "t15_qa" }
  }
];
