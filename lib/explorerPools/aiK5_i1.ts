// @ts-nocheck
// lib/explorerPools/aiK5_i1.ts
import type { PoolTopicDef } from "./types";

export const INFO_K5_I1_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "KI-Entdecker: Grundlagen",
    t1_title: "Was ist KI?", t1_text: "Künstliche Intelligenz (KI) sind Computerprogramme, die Aufgaben lösen, für die man normalerweise menschliche Intelligenz braucht.", t1_inst: "Ordne die Abkürzungen zu:", t1_h1: "Was heißt KI?", t1_h2: "Artificial Intelligence.", t1_q: "Wofür steht die Abkürzung KI?", t1_qa: "Künstliche Intelligenz", t1_qb: "Kleine Information", t1_qc: "Kabel-Internet", t1_qd: "Keine Idee",
    t1_l1: "KI (Deutsch)", t1_r1: "Künstliche Intelligenz", t1_l2: "AI (Englisch)", t1_r2: "Artificial Intelligence", t1_l3: "MI (Ungarisch)", t1_r3: "Mesterséges Intelligencia",
    t2_title: "KI im Alltag", t2_text: "KI hilft uns jeden Tag, zum Beispiel beim Suchen im Internet oder beim Entsperren des Handys.", t2_inst: "Fülle die Lücke aus:", t2_h1: "Wo ist KI?", t2_h2: "Überall in der Technik.", t2_q: "Wo finden wir KI im Alltag?", t2_qa: "In Smartphones", t2_qb: "In einer Gabel", t2_qc: "In einem Apfel", t2_qd: "In einer Socke",
    t2_sent: "Ein intelligenter ___ hilft uns bei Fragen.", t2_qa2: "Assistent", t2_qb2: "Schuh", t2_qc2: "Stuhl", t2_qd2: "Baum",
    t3_title: "Lernen wie ein Mensch", t3_text: "KI-Systeme lernen aus Beispielen. Je mehr Beispiele sie sehen, desto besser werden sie.", t3_inst: "Sortiere in die Eimer:", t3_h1: "Wie lernt KI?", t3_h2: "Daten vs. Hardware.", t3_q: "Was braucht eine KI zum Lernen?", t3_qa: "Viele Daten", t3_qb: "Einen Urlaub", t3_qc: "Ein Pausenbrot", t3_qd: "Eine Mütze",
    t3_bl1: "KI braucht", t3_bl2: "KI braucht nicht", t3_i1: "Daten", t3_i2: "Eiscreme", t3_i3: "Beispiele", t3_i4: "Fahrräder",
    t4_title: "Roboter vs. KI", t4_text: "Ein Roboter ist der Körper (Hardware), die KI ist das Gehirn (Software).", t4_inst: "Bringe die Wörter in Ordnung:", t4_h1: "Was ist was?", t4_h2: "Körper und Gehirn.", t4_q: "Was ist das 'Gehirn' eines Roboters?", t4_qa: "Die KI-Software", t4_qb: "Der Metallarm", t4_qc: "Das Rad", t4_qd: "Die Batterie",
    t4_w1: "KI", t4_w2: "ist", t4_w3: "das", t4_w4: "digitale", t4_w5: "Gehirn", t4_w6: "eines", t4_w7: "Roboters.",
    t5_title: "Bilderkennung", t5_text: "KI kann erkennen, was auf einem Foto zu sehen ist, zum Beispiel einen Hund oder eine Katze.", t5_inst: "Markiere das richtige Wort:", t5_h1: "Was sieht die KI?", t5_h2: "Erkennen von Objekten.", t5_q: "Was macht die KI bei der Bilderkennung?", t5_qa: "Objekte finden", t5_qb: "Fotos löschen", t5_qc: "Die Kamera putzen", t5_qd: "Strom sparen",
    t5_tk1: "Die", t5_tk2: "KI", t5_tk3: "erkennt", t5_tk4: "Hunde", t5_tk5: "auf", t5_tk6: "unseren", t5_tk7: "Fotos.",
    t6_title: "Spracherkennung", t6_text: "KI kann verstehen, was wir sagen, und unsere Befehle ausführen.", t6_inst: "Ordne die Paare zu:", t6_h1: "Wer spricht?", t6_h2: "Stimmen und Namen.", t6_q: "Wie heißt ein bekannter Sprachassistent?", t6_qa: "Alexa", t6_qb: "Lego", t6_qc: "Nutella", t6_qd: "Minecraft",
    t6_l1: "Apple", t6_r1: "Siri", t6_l2: "Amazon", t6_r2: "Alexa", t6_l3: "Google", t6_r3: "Assistant",
    t7_title: "KI-Chatbots", t7_text: "Chatbots sind Programme, mit denen man wie mit einem Menschen schreiben kann.", t7_inst: "Fülle die Lücke aus:", t7_h1: "Schreiben mit KI.", t7_h2: "Chatten ist reden.", t7_q: "Was kann ein Chatbot?", t7_qa: "Fragen beantworten", t7_qb: "Kuchen backen", t7_qc: "Zimmer aufräumen", t7_qd: "Fahrrad fahren",
    t7_sent: "Ein Chatbot nutzt ___ um zu antworten.", t7_qa2: "Text", t7_qb2: "Wasser", t7_qc2: "Holz", t7_qd2: "Sand",
    t8_title: "Empfehlungen", t8_text: "KI schlägt dir Filme oder Musik vor, die dir gefallen könnten.", t8_inst: "Sortiere in die Eimer:", t8_h1: "Was magst du?", t8_h2: "KI lernt Vorlieben.", t8_q: "Warum gibt uns die KI Tipps?", t8_qa: "Weil sie uns kennt", t8_qb: "Durch Zufall", t8_qc: "Weil sie Hunger hat", t8_qd: "Um uns zu ärgern",
    t8_bl1: "Empfehlungen", t8_bl2: "Keine KI", t8_i1: "Filmtipps", t8_i2: "Apfel essen", t8_i3: "Musik-Playlist", t8_i4: "Schlafen",
    t9_title: "Selbstfahrende Autos", t9_text: "KI steuert Autos sicher durch den Verkehr, indem sie Hindernisse erkennt.", t9_inst: "Bringe die Wörter in Ordnung:", t9_h1: "Wer lenkt?", t9_h2: "Sicherheit zuerst.", t9_q: "Was braucht ein KI-Auto?", t9_qa: "Sensoren & Kameras", t9_qb: "Einen Führerschein", t9_qc: "Ein Radio", t9_qd: "Einen Regenschirm",
    t9_w1: "Autos", t9_w2: "fahren", t9_w3: "mit", t9_w4: "KI", t9_w5: "ohne", t9_w6: "einen", t9_w7: "Fahrer.",
    t10_title: "Gesichtserkennung", t10_text: "Dein Handy erkennt dein Gesicht und entsperrt sich nur für dich.", t10_inst: "Markiere das richtige Wort:", t10_h1: "Wer bist du?", t10_h2: "Dein Gesicht ist der Schlüssel.", t10_q: "Was schützt die Gesichtserkennung?", t10_qa: "Unsere Daten", t10_qb: "Die Haare", t10_qc: "Die Kleidung", t10_qd: "Das Wetter",
    t10_tk1: "Das", t10_tk2: "Handy", t10_tk3: "scannt", t10_tk4: "dein", t10_tk5: "Gesicht", t10_tk6: "zum", t10_tk7: "Entsperren.",
    t11_title: "Spiele-KI", t11_text: "In Videospielen steuert KI deine Gegner oder Mitspieler.", t11_inst: "Ordne die Paare zu:", t11_h1: "Wer spielt?", t11_h2: "Echte vs. Computer.", t11_q: "Was macht die KI in Spielen?", t11_qa: "Gegner steuern", t11_qb: "Den PC ausschalten", t11_qc: "Hausaufgaben machen", t11_qd: "Pizza bestellen",
    t11_l1: "Ich", t11_r1: "Spieler", t11_l2: "Computer", t11_r2: "Gegner-KI", t11_l3: "Konsole", t11_r3: "Hardware",
    t12_title: "KI-Übersetzung", t12_text: "KI kann Texte in Sekunden in eine andere Sprache übersetzen.", t12_inst: "Fülle die Lücke aus:", t12_h1: "Hallo Welt!", t12_h2: "Viele Sprachen.", t12_q: "Was hilft beim Übersetzen?", t12_qa: "DeepL oder Google", t12_qb: "Ein Taschenmesser", t12_qc: "Eine Lampe", t12_qd: "Ein Kissen",
    t12_sent: "Die KI ___ Texte in Fremdsprachen.", t12_qa2: "übersetzt", t12_qb2: "löscht", t12_qc2: "malt", t12_qd2: "singt",
    t13_title: "Maschinelles Lernen", t13_text: "Das ist ein Teil der KI, bei dem der Computer selbstständig Regeln in Daten findet.", t13_inst: "Sortiere in die Eimer:", t13_h1: "Wie lernt man?", t13_h2: "Beispiele sind wichtig.", t13_q: "Wie lernt maschinelles Lernen?", t13_qa: "Durch Erfahrung", t13_qb: "Durch Schlafen", t13_qc: "Gar nicht", t13_qd: "Nur durch Strom",
    t13_bl1: "Lernen", t13_bl2: "Nicht Lernen", t13_i1: "Beispiele", t13_i2: "Dunkelheit", t13_i3: "Rückmeldung", t13_i4: "Staub",
    t14_title: "KI-Voraussagen", t14_text: "KI kann das Wetter oder Staus voraussagen, indem sie alte Daten nutzt.", t14_inst: "Bringe die Wörter in Ordnung:", t14_h1: "Was passiert morgen?", t14_h2: "Blick in die Zukunft.", t14_q: "Was nutzt KI für Vorhersagen?", t14_qa: "Vergangene Daten", t14_qb: "Eine Glaskugel", t14_qc: "Würfel", t14_qd: "Kaffeesatz",
    t14_w1: "KI", t14_w2: "berechnet", t14_w3: "die", t14_w4: "Wahrscheinlichkeit", t14_w5: "für", t14_w6: "morgiges", t14_w7: "Wetter.",
    t15_title: "Smarte Geräte", t15_text: "Geräte im Haus, wie Lampen oder Heizungen, können mit KI gesteuert werden.", t15_inst: "Markiere das richtige Wort:", t15_h1: "Schlaues Haus.", t15_h2: "Smart Home.", t15_q: "Wie nennt man ein vernetztes Haus?", t15_qa: "Smart Home", t15_qb: "Fast House", t15_qc: "Old School", t15_qd: "Lazy Place",
    t15_tk1: "Smarte", t15_tk2: "Lampen", t15_tk3: "sparen", t15_tk4: "Energie", t15_tk5: "durch", t15_tk6: "intelligente", t15_tk7: "Steuerung."
  },
  en: {
    explorer_title: "AI Explorer: Basics",
    t1_title: "What is AI?", t1_text: "Artificial Intelligence (AI) are computer programs that solve tasks that normally require human intelligence.", t1_inst: "Match the abbreviations:", t1_h1: "What does AI stand for?", t1_h2: "Artificial Intelligence.", t1_q: "What does AI stand for?", t1_qa: "Artificial Intelligence", t1_qb: "All Information", t1_qc: "Always Internet", t1_qd: "Apple Inside",
    t1_l1: "AI (English)", t1_r1: "Artificial Intelligence", t1_l2: "KI (German)", t1_r2: "Künstliche Intelligenz", t1_l3: "MI (Hungarian)", t1_r3: "Mesterséges Intelligencia",
    t2_title: "AI in Daily Life", t2_text: "AI helps us every day, for example when searching the web or unlocking our phones.", t2_inst: "Fill in the blank:", t2_h1: "Where is AI?", t2_h2: "Everywhere in tech.", t2_q: "Where do we find AI in daily life?", t2_qa: "In smartphones", t2_qb: "In a fork", t2_qc: "In an apple", t2_qd: "In a sock",
    t2_sent: "A smart ___ helps us with questions.", t2_qa2: "assistant", t2_qb2: "shoe", t2_qc2: "chair", t2_qd2: "tree",
    t3_title: "Learning like a Human", t3_text: "AI systems learn from examples. The more examples they see, the better they get.", t3_inst: "Sort into buckets:", t3_h1: "How does AI learn?", t3_h2: "Data vs. hardware.", t3_q: "What does an AI need to learn?", t3_qa: "Lots of data", t3_qb: "A vacation", t3_qc: "A sandwich", t3_qd: "A hat",
    t3_bl1: "AI needs", t3_bl2: "AI doesn't need", t3_i1: "Data", t3_i2: "Ice cream", t3_i3: "Examples", t3_i4: "Bicycles",
    t4_title: "Robot vs. AI", t4_text: "A robot is the body (hardware), AI is the brain (software).", t4_inst: "Put the words in order:", t4_h1: "Which is which?", t4_h2: "Body and brain.", t4_q: "What is the 'brain' of a robot?", t4_qa: "The AI software", t4_qb: "The metal arm", t4_qc: "The wheel", t4_qd: "The battery",
    t4_w1: "AI", t4_w2: "is", t4_w3: "the", t4_w4: "digital", t4_w5: "brain", t4_w6: "of", t4_w7: "a robot.",
    t5_title: "Image Recognition", t5_text: "AI can recognize what is in a photo, for example a dog or a cat.", t5_inst: "Highlight the correct word:", t5_h1: "What does AI see?", t5_h2: "Recognizing objects.", t5_q: "What does AI do in image recognition?", t5_qa: "Identify objects", t5_qb: "Delete photos", t5_qc: "Clean the camera", t5_qd: "Save power",
    t5_tk1: "AI", t5_tk2: "recognizes", t5_tk3: "dogs", t5_tk4: "in", t5_tk5: "our", t5_tk6: "photos.", t5_tk7: "",
    t6_title: "Voice Recognition", t6_text: "AI can understand what we say and carry out our commands.", t6_inst: "Match the pairs:", t6_h1: "Who is speaking?", t6_h2: "Voices and names.", t6_q: "What is the name of a well-known voice assistant?", t6_qa: "Alexa", t6_qb: "Lego", t6_qc: "Nutella", t6_qd: "Minecraft",
    t6_l1: "Apple", t6_r1: "Siri", t6_l2: "Amazon", t6_r2: "Alexa", t6_l3: "Google", t6_r3: "Assistant",
    t7_title: "AI Chatbots", t7_text: "Chatbots are programs that you can write to as if they were a human.", t7_inst: "Fill in the blank:", t7_h1: "Writing with AI.", t7_h2: "Chatting is talking.", t7_q: "What can a chatbot do?", t7_qa: "Answer questions", t7_qb: "Bake cakes", t7_qc: "Clean the room", t7_qd: "Ride a bike",
    t7_sent: "A chatbot uses ___ to answer.", t7_qa2: "text", t7_qb2: "water", t7_qc2: "wood", t7_qd2: "sand",
    t8_title: "Recommendations", t8_text: "AI suggests movies or music that you might like.", t8_inst: "Sort into buckets:", t8_h1: "What do you like?", t8_h2: "AI learns preferences.", t8_q: "Why does the AI give us tips?", t8_qa: "Because it knows us", t8_qb: "By chance", t8_qc: "Because it's hungry", t8_qd: "To annoy us",
    t8_bl1: "Recommendations", t8_bl2: "Not AI", t8_i1: "Movie tips", t8_i2: "Eating an apple", t8_i3: "Music playlist", t8_i4: "Sleeping",
    t9_title: "Self-Driving Cars", t9_text: "AI steers cars safely through traffic by identifying obstacles.", t9_inst: "Put the words in order:", t9_h1: "Who steers?", t9_h2: "Safety first.", t9_q: "What does an AI car need?", t9_qa: "Sensors & cameras", t9_qb: "A driver's license", t9_qc: "A radio", t9_qd: "An umbrella",
    t9_w1: "Cars", t9_w2: "can", t9_w3: "drive", t9_w4: "with", t9_w5: "AI", t9_w6: "without", t9_w7: "a driver.",
    t10_title: "Face Recognition", t10_text: "Your phone recognizes your face and only unlocks for you.", t10_inst: "Highlight the correct word:", t10_h1: "Who are you?", t10_h2: "Your face is the key.", t10_q: "What does facial recognition protect?", t10_qa: "Our data", t10_qb: "The hair", t10_qc: "The clothes", t10_qd: "The weather",
    t10_tk1: "The", t10_tk2: "phone", t10_tk3: "scans", t10_tk4: "your", t10_tk5: "face", t10_tk6: "to", t10_tk7: "unlock.",
    t11_title: "Game AI", t11_text: "In video games, AI controls your opponents or teammates.", t11_inst: "Match the pairs:", t11_h1: "Who plays?", t11_h2: "Real vs. computer.", t11_q: "What does AI do in games?", t11_qa: "Control enemies", t11_qb: "Turn off the PC", t11_qc: "Do homework", t11_qd: "Order pizza",
    t11_l1: "Me", t11_r1: "Player", t11_l2: "Computer", t11_r2: "Opponent AI", t11_l3: "Console", t11_r3: "Hardware",
    t12_title: "AI Translation", t12_text: "AI can translate text into another language in seconds.", t12_inst: "Fill in the blank:", t12_h1: "Hello world!", t12_h2: "Many languages.", t12_q: "What helps with translation?", t12_qa: "DeepL or Google", t12_qb: "A pocket knife", t12_qc: "A lamp", t12_qd: "A pillow",
    t12_sent: "AI ___ texts into foreign languages.", t12_qa2: "translates", t12_qb2: "deletes", t12_qc2: "paints", t12_qd2: "sings",
    t13_title: "Machine Learning", t13_text: "This is a part of AI where the computer independently finds rules in data.", t13_inst: "Sort into buckets:", t13_h1: "How to learn?", t13_h2: "Examples are important.", t13_q: "How does machine learning learn?", t13_qa: "Through experience", t13_qb: "Through sleeping", t13_qc: "Not at all", t13_qd: "Only via power",
    t13_bl1: "Learning", t13_bl2: "Not Learning", t13_i1: "Examples", t13_i2: "Darkness", t13_i3: "Feedback", t13_i4: "Dust",
    t14_title: "AI Predictions", t14_text: "AI can predict the weather or traffic jams by using old data.", t14_inst: "Put the words in order:", t14_h1: "What's tomorrow?", t14_h2: "Look into the future.", t14_q: "What does AI use for predictions?", t14_qa: "Past data", t14_qb: "A crystal ball", t14_qc: "Dice", t14_qd: "Coffee grounds",
    t14_w1: "AI", t14_w2: "calculates", t14_w3: "the", t14_w4: "probability", t14_w5: "of", t14_w6: "tomorrow's", t14_w7: "weather.",
    t15_title: "Smart Devices", t15_text: "Devices in the house, such as lamps or heaters, can be controlled with AI.", t15_inst: "Highlight the correct word:", t15_h1: "Smart home.", t15_h2: "Connected house.", t15_q: "What is a connected house called?", t15_qa: "Smart Home", t15_qb: "Fast House", t15_qc: "Old School", t15_qd: "Lazy Place",
    t15_tk1: "Smart", t15_tk2: "lamps", t15_tk3: "save", t15_tk4: "energy", t15_tk5: "through", t15_tk6: "intelligent", t15_tk7: "control."
  },
  hu: {
    explorer_title: "MI Felfedező: Alapok",
    t1_title: "Mi az az MI?", t1_text: "A Mesterséges Intelligencia (MI) olyan számítógépes programok, amelyek emberi intelligenciát igénylő feladatokat oldanak meg.", t1_inst: "Párosítsd a rövidítéseket:", t1_h1: "Mit jelent az MI?", t1_h2: "Artificial Intelligence.", t1_q: "Mit jelent az MI rövidítés?", t1_qa: "Mesterséges Intelligencia", t1_qb: "Minden Információ", t1_qc: "Magas Intelligencia", t1_qd: "Mai Időjárás",
    t1_l1: "MI (Magyar)", t1_r1: "Mesterséges Intelligencia", t1_l2: "AI (Angol)", t1_r2: "Artificial Intelligence", t1_l3: "KI (Német)", t1_r3: "Künstliche Intelligenz",
    t2_title: "MI a mindennapokban", t2_text: "Az MI minden nap segít nekünk, például az internetes keresésben vagy a telefon feloldásában.", t2_inst: "Töltsd ki a hiányt:", t2_h1: "Hol van MI?", t2_h2: "Mindenhol a technikában.", t2_q: "Hol találkozunk MI-vel a mindennapokban?", t2_qa: "Okostelefonokban", t2_qb: "Egy villában", t2_qc: "Egy almában", t2_qd: "Egy zokniban",
    t2_sent: "Egy okos ___ segít megválaszolni a kérdéseinket.", t2_qa2: "asszisztens", t2_qb2: "cipő", t2_qc2: "szék", t2_qd2: "fa",
    t3_title: "Tanulás, mint az ember", t3_text: "Az MI rendszerek példákból tanulnak. Minél több példát látnak, annál ügyesebbek lesznek.", t3_inst: "Válogasd szét:", t3_h1: "Hogyan tanul az MI?", t3_h2: "Adatok vs. hardver.", t3_q: "Mire van szüksége az MI-nek a tanuláshoz?", t3_qa: "Sok adatra", t3_qb: "Nyaralásra", t3_qc: "Szendvicsre", t3_qd: "Sapkára",
    t3_bl1: "Kell az MI-nek", t3_bl2: "Nem kell", t3_i1: "Adatok", t3_i2: "Fagyi", t3_i3: "Példák", t3_i4: "Bicikli",
    t4_title: "Robot vs. MI", t4_text: "A robot a test (hardver), az MI az agy (szoftver).", t4_inst: "Tedd sorrendbe a szavakat:", t4_h1: "Melyik melyik?", t4_h2: "Test és agy.", t4_q: "Mi a robot 'agya'?", t4_qa: "Az MI szoftver", t4_qb: "A fém kar", t4_qc: "A kerék", t4_qd: "Az akkumulátor",
    t4_w1: "Az MI", t4_w2: "a", t4_w3: "robotok", t4_w4: "digitális", t4_w5: "agya.", t4_w6: "", t4_w7: "",
    t5_title: "Képfelismerés", t5_text: "Az MI képes felismerni, mi van egy fotón, például egy kutya vagy egy macska.", t5_inst: "Jelöld meg a helyes szót:", t5_h1: "Mit lát az MI?", t5_h2: "Tárgyak felismerése.", t5_q: "Mit csinál az MI képfelismeréskor?", t5_qa: "Tárgyakat azonosít", t5_qb: "Törli a képeket", t5_qc: "Tisztítja a lencsét", t5_qd: "Áramot spórol",
    t5_tk1: "Az", t5_tk2: "MI", t5_tk3: "felismeri", t5_tk4: "a kutyákat", t5_tk5: "a", t5_tk6: "fotóinkon.", t5_tk7: "",
    t6_title: "Beszedfelismerés", t6_text: "Az MI érti, amit mondunk, és végrehajtja a parancsainkat.", t6_inst: "Párosítsd össze:", t6_h1: "Ki beszél?", t6_h2: "Hangok és nevek.", t6_q: "Hogy hívnak egy ismert hangasszisztenst?", t6_qa: "Alexa", t6_qb: "Lego", t6_qc: "Nutella", t6_qd: "Minecraft",
    t6_l1: "Apple", t6_r1: "Siri", t6_l2: "Amazon", t6_r2: "Alexa", t6_l3: "Google", t6_r3: "Assistant",
    t7_title: "MI Chatbotok", t7_text: "A chatbotok olyan programok, amikkel úgy írogathatunk, mintha emberek lennének.", t7_inst: "Töltsd ki a hiányt:", t7_h1: "Írás az MI-vel.", t7_h2: "Csetelés beszélgetés.", t7_q: "Mire képes egy chatbot?", t7_qa: "Válaszol a kérdésekre", t7_qb: "Sütit süt", t7_qc: "Rendet rak", t7_qd: "Biciklizik",
    t7_sent: "A chatbot ___ használ a válaszadáshoz.", t7_qa2: "szöveget", t7_qb2: "vizet", t7_qc2: "fát", t7_qd2: "homokot",
    t8_title: "Ajánlások", t8_text: "Az MI olyan filmeket vagy zenéket ajánl, amik tetszhetnek neked.", t8_inst: "Válogasd szét:", t8_h1: "Mit szeretsz?", t8_h2: "Az MI tanulja az ízlésed.", t8_q: "Miért ad nekünk tippeket az MI?", t8_qa: "Mert ismer minket", t8_qb: "Véletlenül", t8_qc: "Mert éhes", t8_qd: "Hogy bosszantson",
    t8_bl1: "Ajánlások", t8_bl2: "Nem MI", t8_i1: "Filmajánló", t8_i2: "Almaevés", t8_i3: "Zenei lejátszási lista", t8_i4: "Alvás",
    t9_title: "Önvezető autók", t9_text: "Az MI biztonságosan vezeti az autókat, felismerve az akadályokat.", t9_inst: "Tedd sorrendbe a szavakat:", t9_h1: "Ki kormányoz?", t9_h2: "Biztonság az első.", t9_q: "Mire van szüksége egy MI autónak?", t9_qa: "Szenzorokra & kamerákra", t9_qb: "Jogosítványra", t9_qc: "Rádióra", t9_qd: "Esernyőre",
    t9_w1: "Az", t9_w2: "autók", t9_w3: "vezető", t9_w4: "nélkül", t9_w5: "is", t9_w6: "tudnak", t9_w7: "menni.",
    t10_title: "Arcfelismerés", t10_text: "A telefonod felismeri az arcodat, és csak neked old fel.", t10_inst: "Jelöld meg a helyes szót:", t10_h1: "Ki vagy te?", t10_h2: "Az arcod a kulcs.", t10_q: "Mit véd az arcfelismerés?", t10_qa: "Az adatainkat", t10_qb: "A hajunkat", t10_qc: "A ruhánkat", t10_qd: "Az időjárást",
    t10_tk1: "A", t10_tk2: "telefon", t10_tk3: "beszkenneli", t10_tk4: "az", t10_tk5: "arcodat", t10_tk6: "a", t10_tk7: "feloldáshoz.",
    t11_title: "Játék MI", t11_text: "A videojátékokban az MI irányítja az ellenfeleidet vagy a csapattársaidat.", t11_inst: "Párosítsd össze:", t11_h1: "Ki játszik?", t11_h2: "Valódi vs. gép.", t11_q: "Mit csinál az MI a játékokban?", t11_qa: "Irányítja az ellenfelet", t11_qb: "Kikapcsolja a gépet", t11_qc: "Házit ír", t11_qd: "Pizzát rendel",
    t11_l1: "Én", t11_r1: "Játékos", t11_l2: "Gép", t11_r2: "Ellenfél MI", t11_l3: "Konzol", t11_r3: "Hardver",
    t12_title: "MI Fordítás", t12_text: "Az MI másodpercek alatt lefordít szövegeket egy másik nyelvre.", t12_inst: "Töltsd ki a hiányt:", t12_h1: "Helló világ!", t12_h2: "Sok nyelv.", t12_q: "Mi segít a fordításban?", t12_qa: "DeepL vagy Google", t12_qb: "Bicska", t12_qc: "Lámpa", t12_qd: "Párna",
    t12_sent: "Az MI idegen nyelvekre ___ a szöveget.", t12_qa2: "fordítja", t12_qb2: "törli", t12_qc2: "festi", t12_qd2: "énekli",
    t13_title: "Gépi tanulás", t13_text: "Az MI egy része, ahol a gép önállóan talál szabályokat az adatokban.", t13_inst: "Válogasd szét:", t13_h1: "Hogyan tanulunk?", t13_h2: "A példák fontosak.", t13_q: "Hogyan tanul a gépi tanulás?", t13_qa: "Tapasztalat útján", t13_qb: "Alvás közben", t13_qc: "Sehogy", t13_qd: "Csak árammal",
    t13_bl1: "Tanulás", t13_bl2: "Nem tanulás", t13_i1: "Példák", t13_i2: "Sötétség", t13_i3: "Visszacsatolás", t13_i4: "Por",
    t14_title: "MI Jóslatok", t14_text: "Az MI meg tudja jósolni az időjárást vagy a dugókat régi adatok alapján.", t14_inst: "Tedd sorrendbe a szavakat:", t14_h1: "Mi lesz holnap?", t14_h2: "Jövőbe tekintés.", t14_q: "Mit használ az MI a jósláshoz?", t14_qa: "Múltbeli adatokat", t14_qb: "Üveggömböt", t14_qc: "Dobókockát", t14_qd: "Kávézaccot",
    t14_w1: "Az MI", t14_w2: "kiszámolja", t14_w3: "a", t14_w4: "holnapi", t14_w5: "időjárás", t14_w6: "valószínűségét.", t14_w7: "",
    t15_title: "Okos eszközök", t15_text: "A házban lévő eszközök, mint a lámpák, MI-vel vezérelhetők.", t15_inst: "Jelöld meg a helyes szót:", t15_h1: "Okos otthon.", t15_h2: "Hálózatba kötött ház.", t15_q: "Hogy hívják az okos otthont?", t15_qa: "Smart Home", t15_qb: "Fast House", t15_qc: "Old School", t15_qd: "Lazy Place",
    t15_tk1: "Az", t15_tk2: "okos", t15_tk3: "lámpák", t15_tk4: "energiát", t15_tk5: "spórolnak", t15_tk6: "nekünk.", t15_tk7: ""
  },
  ro: {
    explorer_title: "Explorator IA: Noțiuni de bază",
    t1_title: "Ce este IA?", t1_text: "Inteligența Artificială (IA) sunt programe de calculator care rezolvă sarcini ce necesită în mod normal inteligență umană.", t1_inst: "Potrivește abrevierile:", t1_h1: "Ce înseamnă IA?", t1_h2: "Artificial Intelligence.", t1_q: "Ce înseamnă abrevierea IA?", t1_qa: "Inteligență Artificială", t1_qb: "Informație Automatizată", t1_qc: "Internet Avansat", t1_qd: "Idee Absentă",
    t1_l1: "IA (Română)", t1_r1: "Inteligență Artificială", t1_l2: "AI (Engleză)", t1_r2: "Artificial Intelligence", t1_l3: "KI (Germană)", t1_r3: "Künstliche Intelligenz",
    t2_title: "IA în viața de zi cu zi", t2_text: "IA ne ajută în fiecare zi, de exemplu la căutarea pe internet sau la deblocarea telefonului.", t2_inst: "Completează spațiul liber:", t2_h1: "Unde este IA?", t2_h2: "Peste tot în tehnologie.", t2_q: "Unde găsim IA în viața de zi cu zi?", t2_qa: "În smartphone-uri", t2_qb: "Într-o furculiță", t2_qc: "Într-un măr", t2_qd: "Într-o șosetă",
    t2_sent: "Un ___ inteligent ne ajută cu întrebările.", t2_qa2: "asistent", t2_qb2: "pantof", t2_qc2: "scaun", t2_qd2: "copac",
    t3_title: "Învățarea ca un om", t3_text: "Sistemele IA învață din exemple. Cu cât văd mai multe exemple, cu atât devin mai bune.", t3_inst: "Sortează în găleți:", t3_h1: "Cum învață IA?", t3_h2: "Date vs. hardware.", t3_q: "De ce are nevoie o IA pentru a învăța?", t3_qa: "Multe date", t3_qb: "O vacanță", t3_qc: "Un sandviș", t3_qd: "O căciulă",
    t3_bl1: "IA are nevoie", t3_bl2: "IA nu are nevoie", t3_i1: "Date", t3_i2: "Înghețată", t3_i3: "Exemple", t3_i4: "Biciclete",
    t4_title: "Robot vs. IA", t4_text: "Un robot este corpul (hardware), IA este creierul (software).", t4_inst: "Pune cuvintele în ordine:", t4_h1: "Care e care?", t4_h2: "Corp și creier.", t4_q: "Ce este 'creierul' unui robot?", t4_qa: "Software-ul IA", t4_qb: "Brațul de metal", t4_qc: "Roata", t4_qd: "Bateria",
    t4_w1: "IA", t4_w2: "este", t4_w3: "creierul", t4_w4: "digital", t4_w5: "al", t4_w6: "unui", t4_w7: "robot.",
    t5_title: "Recunoașterea imaginilor", t5_text: "IA poate recunoaște ce se află într-o fotografie, de exemplu un câine sau o pisică.", t5_inst: "Evidențiază cuvântul corect:", t5_h1: "Ce vede IA?", t5_h2: "Recunoașterea obiectelor.", t5_q: "Ce face IA în recunoașterea imaginilor?", t5_qa: "Identifică obiecte", t5_qb: "Șterge poze", t5_qc: "Curăță camera", t5_qd: "Economisește curent",
    t5_tk1: "IA", t5_tk2: "recunoaște", t5_tk3: "câinii", t5_tk4: "din", t5_tk5: "fotografiile", t5_tk6: "noastre.", t5_tk7: "",
    t6_title: "Recunoașterea vocală", t6_text: "IA poate înțelege ce spunem și ne poate executa comenzile.", t6_inst: "Potrivește perechile:", t6_h1: "Cine vorbește?", t6_h2: "Voci și nume.", t6_q: "Cum se numește un asistent vocal cunoscut?", t6_qa: "Alexa", t6_qb: "Lego", t6_qc: "Nutella", t6_qd: "Minecraft",
    t6_l1: "Apple", t6_r1: "Siri", t6_l2: "Amazon", t6_r2: "Alexa", t6_l3: "Google", t6_r3: "Assistant",
    t7_title: "Chatboți IA", t7_text: "Chatboții sunt programe cu care poți scrie ca și cum ar fi un om.", t7_inst: "Completează spațiul liber:", t7_h1: "Scrisul cu IA.", t7_h2: "Chat-ul este vorbire.", t7_q: "Ce poate face un chatbot?", t7_qa: "Răspunde la întrebări", t7_qb: "Face prăjituri", t7_qc: "Face curat", t7_qd: "Merge pe bicicletă",
    t7_sent: "Un chatbot folosește ___ pentru a răspunde.", t7_qa2: "text", t7_qb2: "apă", t7_qc2: "lemn", t7_qd2: "nisip",
    t8_title: "Recomandări", t8_text: "IA îți sugerează filme sau muzică ce ți-ar putea plăcea.", t8_inst: "Sortează în găleți:", t8_h1: "Ce îți place?", t8_h2: "IA învață preferințele.", t8_q: "De ce ne dă IA sfaturi?", t8_qa: "Pentru că ne cunoaște", t8_qb: "Din întâmplare", t8_qc: "Pentru că îi e foame", t8_qd: "Ca să ne enerveze",
    t8_bl1: "Recomandări", t8_bl2: "Nu IA", t8_i1: "Sugestii filme", t8_i2: "Mâncat măr", t8_i3: "Playlist muzică", t8_i4: "Dormit",
    t9_title: "Mașini autonome", t9_text: "IA conduce mașinile în siguranță prin trafic, identificând obstacolele.", t9_inst: "Pune cuvintele în ordine:", t9_h1: "Cine conduce?", t9_h2: "Siguranța pe primul loc.", t9_q: "De ce are nevoie o mașină IA?", t9_qa: "Senzori și camere", t9_qb: "Permis de conducere", t9_qc: "Un radio", t9_qd: "O umbrelă",
    t9_w1: "Mașinile", t9_w2: "pot", t9_w3: "merge", t9_w4: "cu", t9_w5: "IA", t9_w6: "fără", t9_w7: "șofer.",
    t10_title: "Recunoaștere facială", t10_text: "Telefonul tău îți recunoaște fața și se deblochează doar pentru tine.", t10_inst: "Evidențiază cuvântul corect:", t10_h1: "Cine ești?", t10_h2: "Fața ta este cheia.", t10_q: "Ce protejează recunoașterea facială?", t10_qa: "Datele noastre", t10_qb: "Părul", t10_qc: "Hainele", t10_qd: "Vremea",
    t10_tk1: "Telefonul", t10_tk2: "scanează", t10_tk3: "fața", t10_tk4: "ta", t10_tk5: "pentru", t10_tk6: "a", t10_tk7: "se debloca.",
    t11_title: "IA în jocuri", t11_text: "În jocurile video, IA îți controlează adversarii sau coechipierii.", t11_inst: "Potrivește perechile:", t11_h1: "Cine joacă?", t11_h2: "Real vs. computer.", t11_q: "Ce face IA în jocuri?", t11_qa: "Controlează inamicii", t11_qb: "Oprește PC-ul", t11_qc: "Face temele", t11_qd: "Comandă pizza",
    t11_l1: "Eu", t11_r1: "Jucător", t11_l2: "Computer", t11_r2: "IA Adversar", t11_l3: "Consolă", t11_r3: "Hardware",
    t12_title: "Traducere IA", t12_text: "IA poate traduce texte în altă limbă în câteva secunde.", t12_inst: "Completează spațiul liber:", t12_h1: "Salut lume!", t12_h2: "Multe limbi.", t12_q: "Ce ajută la traducere?", t12_qa: "DeepL sau Google", t12_qb: "Un briceag", t12_qc: "O lampă", t12_qd: "O pernă",
    t12_sent: "IA ___ texte în limbi străine.", t12_qa2: "traduce", t12_qb2: "șterge", t12_qc2: "pictează", t12_qd2: "cântă",
    t13_title: "Machine Learning", t13_text: "Aceasta este o parte a IA în care computerul găsește singur reguli în date.", t13_inst: "Sortează în găleți:", t13_h1: "Cum învățăm?", t13_h2: "Exemplele sunt importante.", t13_q: "Cum învață machine learning?", t13_qa: "Prin experiență", t13_qb: "Prin somn", t13_qc: "Deloc", t13_qd: "Doar prin curent",
    t13_bl1: "Învățare", t13_bl2: "Nu învățare", t13_i1: "Exemple", t13_i2: "Întuneric", t13_i3: "Feedback", t13_i4: "Praf",
    t14_title: "Predicții IA", t14_text: "IA poate prezice vremea sau blocajele în trafic folosind date vechi.", t14_inst: "Pune cuvintele în ordine:", t14_h1: "Ce va fi mâine?", t14_h2: "Privire în viitor.", t14_q: "Ce folosește IA pentru predicții?", t14_qa: "Date din trecut", t14_qb: "Un glob de cristal", t14_qc: "Zaruri", t14_qd: "Zaț de cafea",
    t14_w1: "IA", t14_w2: "calculează", t14_w3: "probabilitatea", t14_w4: "pentru", t14_w5: "vremea", t14_w6: "de", t14_w7: "mâine.",
    t15_title: "Dispozitive smart", t15_text: "Dispozitivele din casă, cum ar fi lămpile sau caloriferele, pot fi controlate cu IA.", t15_inst: "Evidențiază cuvântul corect:", t15_h1: "Casă inteligentă.", t15_h2: "Smart Home.", t15_q: "Cum se numește o casă conectată?", t15_qa: "Smart Home", t15_qb: "Fast House", t15_qc: "Old School", t15_qd: "Lazy Place",
    t15_tk1: "Lămpile", t15_tk2: "smart", t15_tk3: "economisesc", t15_tk4: "energie", t15_tk5: "prin", t15_tk6: "control", t15_tk7: "inteligent."
  }
};

export const INFO_K5_I1_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "simple-icon", icon: "🧠", color: "#9C27B0" },
    interactive: { type: "match-pairs", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", pairs: [{left:"t1_l1",right:"t1_r1"},{left:"t1_l2",right:"t1_r2"},{left:"t1_l3",right:"t1_r3"}] },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" }
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "📱", color: "#2196F3" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" }
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "icon-grid", items: [{emoji:"📊",label:"Data"},{emoji:"💡",label:"Idea"}] },
    interactive: { type: "drag-to-bucket", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", buckets: [{id:"b1",label:"t3_bl1"},{id:"b2",label:"t3_bl2"}], items: [{text:"t3_i1",bucketId:"b1"},{text:"t3_i2",bucketId:"b2"},{text:"t3_i3",bucketId:"b1"},{text:"t3_i4",bucketId:"b2"}] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "🤖", color: "#607D8B" },
    interactive: { type: "word-order", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", words: ["t4_w1", "t4_w2", "t4_w3", "t4_w4", "t4_w5", "t4_w6", "t4_w7"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6].slice(0, 7) },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "📷", color: "#FFC107" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6","t5_tk7"].filter(x=>x!==""), correctIndices: [3] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" }
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "simple-icon", icon: "🗣️", color: "#E91E63" },
    interactive: { type: "match-pairs", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", pairs: [{left:"t6_l1",right:"t6_r1"},{left:"t6_l2",right:"t6_r2"},{left:"t6_l3",right:"t6_r3"}] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" }
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "💬", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", sentence: "t7_sent", choices: ["t7_qa2", "t7_qb2", "t7_qc2", "t7_qd2"], correctIndex: 0 },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" }
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "simple-icon", icon: "🎵", color: "#3F51B5" },
    interactive: { type: "drag-to-bucket", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", buckets: [{id:"b1",label:"t8_bl1"},{id:"b2",label:"t8_bl2"}], items: [{text:"t8_i1",bucketId:"b1"},{text:"t8_i2",bucketId:"b2"},{text:"t8_i3",bucketId:"b1"},{text:"t8_i4",bucketId:"b2"}] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" }
  },
  {
    infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "simple-icon", icon: "🚗", color: "#FF5722" },
    interactive: { type: "word-order", instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2", words: ["t9_w1", "t9_w2", "t9_w3", "t9_w4", "t9_w5", "t9_w6", "t9_w7"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6].slice(0, 7) },
    quiz: { question: "t9_q", choices: ["t9_qa", "t9_qb", "t9_qc", "t9_qd"], answer: "t9_qa" }
  },
  {
    infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "simple-icon", icon: "👤", color: "#00BCD4" },
    interactive: { type: "highlight-text", instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2", tokens: ["t10_tk1","t10_tk2","t10_tk3","t10_tk4","t10_tk5","t10_tk6","t10_tk7"].filter(x=>x!==""), correctIndices: [4] },
    quiz: { question: "t10_q", choices: ["t10_qa", "t10_qb", "t10_qc", "t10_qd"], answer: "t10_qa" }
  },
  {
    infoTitle: "t11_title", infoText: "t11_text",
    svg: { type: "simple-icon", icon: "🎮", color: "#212121" },
    interactive: { type: "match-pairs", instruction: "t11_inst", hint1: "t11_h1", hint2: "t11_h2", pairs: [{left:"t11_l1",right:"t11_r1"},{left:"t11_l2",right:"t11_r2"},{left:"t11_l3",right:"t11_r3"}] },
    quiz: { question: "t11_q", choices: ["t11_qa", "t11_qb", "t11_qc", "t11_qd"], answer: "t11_qa" }
  },
  {
    infoTitle: "t12_title", infoText: "t12_text",
    svg: { type: "simple-icon", icon: "🌐", color: "#8BC34A" },
    interactive: { type: "gap-fill", instruction: "t12_inst", hint1: "t12_h1", hint2: "t12_h2", sentence: "t12_sent", choices: ["t12_qa2", "t12_qb2", "t12_qc2", "t12_qd2"], correctIndex: 0 },
    quiz: { question: "t12_q", choices: ["t12_qa", "t12_qb", "t12_qc", "t12_qd"], answer: "t12_qa" }
  },
  {
    infoTitle: "t13_title", infoText: "t13_text",
    svg: { type: "icon-grid", items: [{emoji:"📚",label:"Learning"},{emoji:"🌑",label:"No Info"}] },
    interactive: { type: "drag-to-bucket", instruction: "t13_inst", hint1: "t13_h1", hint2: "t13_h2", buckets: [{id:"b1",label:"t13_bl1"},{id:"b2",label:"t13_bl2"}], items: [{text:"t13_i1",bucketId:"b1"},{text:"t13_i2",bucketId:"b2"},{text:"t13_i3",bucketId:"b1"},{text:"t13_i4",bucketId:"b2"}] },
    quiz: { question: "t13_q", choices: ["t13_qa", "t13_qb", "t13_qc", "t13_qd"], answer: "t13_qa" }
  },
  {
    infoTitle: "t14_title", infoText: "t14_text",
    svg: { type: "simple-icon", icon: "📅", color: "#FFEB3B" },
    interactive: { type: "word-order", instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2", words: ["t14_w1", "t14_w2", "t14_w3", "t14_w4", "t14_w5", "t14_w6", "t14_w7"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6].slice(0, 7) },
    quiz: { question: "t14_q", choices: ["t14_qa", "t14_qb", "t14_qc", "t14_qd"], answer: "t14_qa" }
  },
  {
    infoTitle: "t15_title", infoText: "t15_text",
    svg: { type: "simple-icon", icon: "🏠", color: "#795548" },
    interactive: { type: "highlight-text", instruction: "t15_inst", hint1: "t15_h1", hint2: "t15_h2", tokens: ["t15_tk1","t15_tk2","t15_tk3","t15_tk4","t15_tk5","t15_tk6","t15_tk7"].filter(x=>x!==""), correctIndices: [0,1] },
    quiz: { question: "t15_q", choices: ["t15_qa", "t15_qb", "t15_qc", "t15_qd"], answer: "t15_qa" }
  }
];

