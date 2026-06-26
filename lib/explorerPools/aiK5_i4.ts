// @ts-nocheck
// lib/explorerPools/aiK5_i4.ts
import type { PoolTopicDef } from "./types";

export const INFO_K5_I4_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "KI-Entdecker: Alltag",
    t1_title: "Was ist KI?", t1_text: "Künstliche Intelligenz (KI) lässt Computer Aufgaben lösen, die normalerweise menschliches Denken erfordern.", t1_inst: "Ordne die Paare zu:", t1_h1: "KI oder Mensch?", t1_h2: "Wer macht was?", t1_q: "Wofür steht die Abkürzung KI?", t1_qa: "Künstliche Intelligenz", t1_qb: "Kleine Information", t1_qc: "Kabel-Interaktion", t1_qd: "Keine Idee",
    t1_l1: "Natürlich", t1_r1: "Mensch", t1_l2: "Künstlich", t1_r2: "Computer", t1_l3: "Denken", t1_r3: "Gehirn",
    t2_title: "KI vs. Mensch", t2_text: "Menschen fühlen und verstehen, während KI schnell rechnet und Muster erkennt.", t2_inst: "Sortiere in die Eimer:", t2_h1: "Wer kann es besser?", t2_h2: "Gefühle vs. Daten.", t2_q: "Was kann eine KI besser als ein Mensch?", t2_qa: "Millionen Daten prüfen", t2_qb: "Echte Liebe fühlen", t2_qc: "Pizza genießen", t2_qd: "Träumen",
    t2_bl1: "Mensch", t2_bl2: "KI", t2_i1: "Empathie", t2_i2: "Schnelle Berechnung", t2_i3: "Kreativität", t2_i4: "Mustererkennung",
    t3_title: "Lernen durch Muster", t3_text: "KI lernt, indem sie Tausende von Beispielen ansieht und Ähnlichkeiten findet.", t3_inst: "Bringe die Wörter in Ordnung:", t3_h1: "KI lernt...", t3_h2: "Beispiele sind wichtig.", t3_q: "Wie lernt eine KI meistens?", t3_qa: "Durch Beispiele", t3_qb: "Durch Schlafen", t3_qc: "Durch Essen", t3_qd: "Gar nicht",
    t3_w1: "KI", t3_w2: "erkennt", t3_w3: "Muster", t3_w4: "in", t3_w5: "vielen", t3_w6: "Daten.", t3_w7: "",
    t4_title: "KI im Smartphone", t4_text: "Dein Handy nutzt KI für Fotos, Sprachbefehle und Akku-Optimierung.", t4_inst: "Fülle die Lücke aus:", t4_h1: "Handy-Helfer.", t4_h2: "Es denkt mit.", t4_q: "Was nutzt KI im Handy?", t4_qa: "Gesichtserkennung", t4_qb: "Die Schutzhülle", t4_qc: "Das Ladekabel", t4_qd: "Das Glas",
    t4_sent: "Die Sprachsteuerung nutzt ___ zur Erkennung.", t4_qa2: "KI", t4_qb2: "Wasser", t4_qc2: "Magie", t4_qd2: "Holz",
    t5_title: "Empfehlungen", t5_text: "Apps like YouTube oder Netflix schlagen dir Videos vor, die dir gefallen könnten.", t5_inst: "Markiere, was persönliche Vorschläge macht:", t5_h1: "Was kommt als nächstes?", t5_h2: "Vorschläge.", t5_q: "Warum schlägt Netflix Filme vor?", t5_qa: "Weil KI dein Interesse lernt", t5_qb: "Zufall", t5_qc: "Weil es regnet", t5_qd: "Weil die KI Hunger hat",
    t5_tk1: "KI", t5_tk2: "macht", t5_tk3: "persönliche", t5_tk4: "Vorschläge", t5_tk5: "für", t5_tk6: "dich.",
    t6_title: "Gesichtserkennung", t6_text: "KI kann Gesichter auf Fotos erkennen und unterscheiden.", t6_inst: "Ordne die Paare zu:", t6_h1: "Wer ist das?", t6_h2: "Merkmale finden.", t6_q: "Was prüft die KI beim Gesicht?", t6_qa: "Abstände der Augen", t6_qb: "Die Haarfarbe", t6_qc: "Den Namen", t6_qd: "Die Kleidung",
    t6_l1: "Auge", t6_r1: "Abstand", t6_l2: "Nase", t6_r2: "Form", t6_l3: "Mund", t6_r3: "Lächeln",
    t7_title: "Sprachsteuerung", t7_text: "Assistenten wie Siri oder Alexa verstehen deine Stimme dank KI.", t7_inst: "Fülle die Lücke aus:", t7_h1: "Hör mir zu!", t7_h2: "Wandle Ton in Text.", t7_q: "Was macht ein Sprachassistent?", t7_qa: "Befehle ausführen", t7_qb: "Kuchen backen", t7_qc: "Hausaufgaben machen", t7_qd: "Zimmer aufräumen",
    t7_sent: "Alexa versteht meine ___.", t7_qa2: "Stimme", t7_qb2: "Gedanken", t7_qc2: "Schuhe", t7_qd2: "Zeichnung",
    t8_title: "Smart Home", t8_text: "Ein intelligentes Zuhause steuert Licht und Heizung automatisch.", t8_inst: "Sortiere in die Eimer:", t8_h1: "Schlaues Haus.", t8_h2: "Technik hilft.", t8_q: "Was gehört zum Smart Home?", t8_qa: "Smarte Lampe", t8_qb: "Normaler Besen", t8_qc: "Holztür", t8_qd: "Fensterglas",
    t8_bl1: "Smart", t8_bl2: "Normal", t8_i1: "WLAN-Thermostat", t8_i2: "Kerze", t8_i3: "Saugroboter", t8_i4: "Handfeger",
    t9_title: "Navigation", t9_text: "KI berechnet den schnellsten Weg und erkennt Staus in Echtzeit.", t9_inst: "Bringe die Wörter in Ordnung:", t9_h1: "Wo geht's lang?", t9_h2: "Karten-Apps.", t9_q: "Was hilft der KI bei der Navigation?", t9_qa: "Echtzeitdaten", t9_qb: "Ein Kompass allein", t9_qc: "Die Sterne", t9_qd: "Raten",
    t9_w1: "KI", t9_w2: "findet", t9_w3: "den", t9_w4: "besten", t9_w5: "Weg", t9_w6: "zum", t9_w7: "Ziel.",
    t10_title: "Übersetzer", t10_text: "KI-Übersetzer können ganze Texte fast perfekt in andere Sprachen übertragen.", t10_inst: "Markiere, was beim Übersetzen hilft:", t10_h1: "Andere Sprachen.", t10_h2: "Verstehen.", t10_q: "Wie übersetzt KI?", t10_qa: "Durch Kontext-Analyse", t10_qb: "Wort für Wort (stur)", t10_qc: "Gar nicht", t10_qd: "Durch Würfeln",
    t10_tk1: "KI", t10_tk2: "hilft", t10_tk3: "uns", t10_tk4: "fremde", t10_tk5: "Sprachen", t10_tk6: "zu", t10_tk7: "verstehen.",
    t11_title: "KI-Filter", t11_text: "In Apps verändern KI-Filter dein Gesicht oder fügen Effekte hinzu.", t11_inst: "Ordne die Paare zu:", t11_h1: "Lustige Effekte.", t11_h2: "Masken aufsetzen.", t11_q: "Wie folgen Filter deinem Gesicht?", t11_qa: "Tracking-Punkte", t11_qb: "Mit Kleber", t11_qc: "Zufällig", t11_qd: "Gar nicht",
    t11_l1: "Hundeohren", t11_r1: "Filter", t11_l2: "Hintergrund", t11_r2: "Unscharf", t11_l3: "Haut", t11_r3: "Glatt",
    t12_title: "KI in Spielen", t12_text: "Gegner in Videospielen verhalten sich dank KI klüger.", t12_inst: "Fülle die Lücke aus:", t12_h1: "Gegner im Spiel.", t12_h2: "NPC-Verhalten.", t12_q: "Was ist ein NPC?", t12_qa: "Nicht-Spieler-Charakter", t12_qb: "Neuer Computer", t12_qc: "Nette Person", t12_qd: "Nacht-Party",
    t12_sent: "Die KI steuert die ___ im Spiel.", t12_qa2: "Gegner", t12_qb2: "Spieler", t12_qc2: "Konsole", t12_qd2: "Couch",
    t13_title: "Chatbots", t13_text: "Chatbots sind Programme, mit denen man wie mit Menschen schreiben kann.", t13_inst: "Sortiere in die Eimer:", t13_h1: "Mensch oder Bot?", t13_h2: "Wer antwortet?", t13_q: "Was macht ein Chatbot?", t13_qa: "Fragen beantworten", t13_qb: "Zähne putzen", t13_qc: "Schlafen", t13_qd: "Sport treiben",
    t13_bl1: "Bot", t13_bl2: "Mensch", t13_i1: "Sofortige Antwort", t13_i2: "Echte Gefühle", t13_i3: "24/7 verfügbar", t13_i4: "Braucht Pausen",
    t14_title: "Daten: Nahrung für KI", t14_text: "Ohne Daten kann eine KI nichts lernen. Je mehr Daten, desto schlauer.", t14_inst: "Bringe die Wörter in Ordnung:", t14_h1: "Viel füttern.", t14_h2: "Daten-Hunger.", t14_q: "Was ist wichtig für eine gute KI?", t14_qa: "Viele gute Daten", t14_qb: "Ein schönes Gehäuse", t14_qc: "Ein lauter Lüfter", t14_qd: "Viel Staub",
    t14_w1: "Daten", t14_w2: "sind", t14_w3: "sehr", t14_w4: "wichtig", t14_w5: "für", t14_w6: "die", t14_w7: "KI.",
    t15_title: "Ethik & Fairness", t15_text: "KI sollte fair sein und niemanden benachteiligen.", t15_inst: "Markiere die zwei Wörter für eine gerechte KI:", t15_h1: "Richtig oder falsch?", t15_h2: "Gerechtigkeit.", t15_q: "Darf eine KI lügen?", t15_qa: "Nein, sie sollte ehrlich sein", t15_qb: "Ja, immer", t15_qc: "Nur am Wochenende", t15_qd: "Wenn sie Lust hat",
    t15_tk1: "Eine", t15_tk2: "faire", t15_tk3: "KI", t15_tk4: "behandelt", t15_tk5: "alle", t15_tk6: "Menschen", t15_tk7: "gleich."
  },
  en: {
    explorer_title: "AI Explorer: Daily Life",
    t1_title: "What is AI?", t1_text: "Artificial Intelligence (AI) allows computers to solve tasks that normally require human thinking.", t1_inst: "Match the pairs:", t1_h1: "AI or human?", t1_h2: "Who does what?", t1_q: "What does AI stand for?", t1_qa: "Artificial Intelligence", t1_qb: "Active Information", t1_qc: "Android Interaction", t1_qd: "Always Intelligent",
    t1_l1: "Natural", t1_r1: "Human", t1_l2: "Artificial", t1_r2: "Computer", t1_l3: "Thinking", t1_r3: "Brain",
    t2_title: "AI vs. Human", t2_text: "Humans feel and understand, while AI calculates quickly and recognizes patterns.", t2_inst: "Sort into buckets:", t2_h1: "Who is better?", t2_h2: "Feelings vs. data.", t2_q: "What can an AI do better than a human?", t2_qa: "Check millions of data points", t2_qb: "Feel real love", t2_qc: "Enjoy pizza", t2_qd: "Dream",
    t2_bl1: "Human", t2_bl2: "AI", t2_i1: "Empathy", t2_i2: "Fast calculation", t2_i3: "Creativity", t2_i4: "Pattern recognition",
    t3_title: "Learning by Patterns", t3_text: "AI learns by looking at thousands of examples and finding similarities.", t3_inst: "Put the words in order:", t3_h1: "AI learns...", t3_h2: "Examples are important.", t3_q: "How does an AI usually learn?", t3_qa: "Through examples", t3_qb: "By sleeping", t3_qc: "By eating", t3_qd: "It doesn't",
    t3_w1: "AI", t3_w2: "recognizes", t3_w3: "patterns", t3_w4: "in", t3_w5: "lots", t3_w6: "of", t3_w7: "data.",
    t4_title: "AI in Smartphones", t4_text: "Your phone uses AI for photos, voice commands, and battery optimization.", t4_inst: "Fill in the blank:", t4_h1: "Phone helpers.", t4_h2: "It thinks along.", t4_q: "What uses AI in a phone?", t4_qa: "Face recognition", t4_qb: "The protective case", t4_qc: "The charging cable", t4_qd: "The glass",
    t4_sent: "Voice control uses ___ for recognition.", t4_qa2: "AI", t4_qb2: "water", t4_qc2: "magic", t4_qd2: "wood",
    t5_title: "Recommendations", t5_text: "Apps like YouTube or Netflix suggest videos you might like.", t5_inst: "Highlight what makes personal suggestions:", t5_h1: "What's next?", t5_h2: "Suggestions.", t5_q: "Why does Netflix suggest movies?", t5_qa: "Because AI learns your interests", t5_qb: "Random chance", t5_qc: "Because it's raining", t5_qd: "Because the AI is hungry",
    t5_tk1: "AI", t5_tk2: "makes", t5_tk3: "personal", t5_tk4: "suggestions", t5_tk5: "for", t5_tk6: "you.",
    t6_title: "Face Recognition", t6_text: "AI can recognize and distinguish faces in photos.", t6_inst: "Match the pairs:", t6_h1: "Who is this?", t6_h2: "Finding features.", t6_q: "What does AI check in a face?", t6_qa: "Distance between eyes", t6_qb: "Hair color", t6_qc: "The name", t6_qd: "The clothes",
    t6_l1: "Eye", t6_r1: "Distance", t6_l2: "Nose", t6_r2: "Shape", t6_l3: "Mouth", t6_r3: "Smile",
    t7_title: "Voice Control", t7_text: "Assistants like Siri or Alexa understand your voice thanks to AI.", t7_inst: "Fill in the blank:", t7_h1: "Listen to me!", t7_h2: "Convert sound to text.", t7_q: "What does a voice assistant do?", t7_qa: "Execute commands", t7_qb: "Bake cakes", t7_qc: "Do homework", t7_qd: "Clean room",
    t7_sent: "Alexa understands my ___.", t7_qa2: "voice", t7_qb2: "thoughts", t7_qc2: "shoes", t7_qd2: "drawing",
    t8_title: "Smart Home", t8_text: "A smart home controls lights and heating automatically.", t8_inst: "Sort into buckets:", t8_h1: "Smart house.", t8_h2: "Tech helps.", t8_q: "What belongs to a smart home?", t8_qa: "Smart bulb", t8_qb: "Normal broom", t8_qc: "Wooden door", t8_qd: "Window glass",
    t8_bl1: "Smart", t8_bl2: "Normal", t8_i1: "WLAN thermostat", t8_i2: "Candle", t8_i3: "Robot vacuum", t8_i4: "Dustpan",
    t9_title: "Navigation", t9_text: "AI calculates the fastest route and recognizes traffic jams in real time.", t9_inst: "Put the words in order:", t9_h1: "Which way?", t9_h2: "Map apps.", t9_q: "What helps AI with navigation?", t9_qa: "Real-time data", t9_qb: "A compass alone", t9_qc: "The stars", t9_qd: "Guessing",
    t9_w1: "AI", t9_w2: "finds", t9_w3: "the", t9_w4: "best", t9_w5: "way", t9_w6: "to", t9_w7: "the goal.",
    t10_title: "Translators", t10_text: "AI translators can translate whole texts almost perfectly into other languages.", t10_inst: "Highlight what helps with translation:", t10_h1: "Other languages.", t10_h2: "Understand.", t10_q: "How does AI translate?", t10_qa: "Through context analysis", t10_qb: "Word for word", t10_qc: "It doesn't", t10_qd: "By rolling dice",
    t10_tk1: "AI", t10_tk2: "helps", t10_tk3: "us", t10_tk4: "understand", t10_tk5: "foreign", t10_tk6: "languages.",
    t11_title: "AI Filters", t11_text: "In apps, AI filters change your face or add effects.", t11_inst: "Match the pairs:", t11_h1: "Funny effects.", t11_h2: "Putting on masks.", t11_q: "How do filters follow your face?", t11_qa: "Tracking points", t11_qb: "With glue", t11_qc: "Randomly", t11_qd: "They don't",
    t11_l1: "Dog ears", t11_r1: "Filter", t11_l2: "Background", t11_r2: "Blurry", t11_l3: "Skin", t11_r3: "Smooth",
    t12_title: "AI in Games", t12_text: "Enemies in video games behave smarter thanks to AI.", t12_inst: "Fill in the blank:", t12_h1: "Enemies in game.", t12_h2: "NPC behavior.", t12_q: "What is an NPC?", t12_qa: "Non-Player Character", t12_qb: "New Personal Computer", t12_qc: "Nice Person", t12_qd: "Night Party",
    t12_sent: "The AI controls the ___ in the game.", t12_qa2: "enemies", t12_qb2: "players", t12_qc2: "console", t12_qd2: "couch",
    t13_title: "Chatbots", t13_text: "Chatbots are programs you can write to like a human.", t13_inst: "Sort into buckets:", t13_h1: "Human or bot?", t13_h2: "Who answers?", t13_q: "What does a chatbot do?", t13_qa: "Answer questions", t13_qb: "Brush teeth", t13_qc: "Sleep", t13_qd: "Do sports",
    t13_bl1: "Bot", t13_bl2: "Human", t13_i1: "Instant reply", t13_i2: "Real feelings", t13_i3: "24/7 available", t13_i4: "Needs breaks",
    t14_title: "Data: AI's Food", t14_text: "Without data, an AI can't learn anything. The more data, the smarter it gets.", t14_inst: "Put the words in order:", t14_h1: "Feed a lot.", t14_h2: "Data hunger.", t14_q: "What is important for a good AI?", t14_qa: "Lots of good data", t14_qb: "A nice case", t14_qc: "A loud fan", t14_qd: "Lots of dust",
    t14_w1: "Data", t14_w2: "is", t14_w3: "very", t14_w4: "important", t14_w5: "for", t14_w6: "the", t14_w7: "AI.",
    t15_title: "Ethics & Fairness", t15_text: "AI should be fair and not disadvantage anyone.", t15_inst: "Highlight the two words for an unbiased AI:", t15_h1: "Right or wrong?", t15_h2: "Justice.", t15_q: "Is an AI allowed to lie?", t15_qa: "No, it should be honest", t15_qb: "Yes, always", t15_qc: "Only on weekends", t15_qd: "When it wants to",
    t15_tk1: "A", t15_tk2: "fair", t15_tk3: "AI", t15_tk4: "treats", t15_tk5: "everyone", t15_tk6: "equally."
  },
  hu: {
    explorer_title: "MI Felfedező: Mindennapok",
    t1_title: "Mi az a MI?", t1_text: "A Mesterséges Intelligencia (MI) lehetővé teszi, hogy a számítógépek emberi gondolkodást igénylő feladatokat oldjanak meg.", t1_inst: "Párosítsd össze:", t1_h1: "Gép vagy ember?", t1_h2: "Ki mit csinál?", t1_q: "Mit jelent a MI rövidítés?", t1_qa: "Mesterséges Intelligencia", t1_qb: "Minden Információ", t1_qc: "Magas Intelligencia", t1_qd: "Másik Internet",
    t1_l1: "Természetes", t1_r1: "Ember", t1_l2: "Mesterséges", t1_r2: "Számítógép", t1_l3: "Gondolkodás", t1_r3: "Agy",
    t2_title: "MI vs. Ember", t2_text: "Az emberek éreznek és értenek, míg a MI gyorsan számol és mintákat keres.", t2_inst: "Válogasd szét:", t2_h1: "Ki a jobb?", t2_h2: "Érzések vs. adatok.", t2_q: "Mit tud a MI jobban az embernél?", t2_qa: "Milliónyi adat elemzése", t2_qb: "Valódi szeretet", t2_qc: "Pizza élvezete", t2_qd: "Álmodozás",
    t2_bl1: "Ember", t2_bl2: "MI", t2_i1: "Együttérzés", t2_i2: "Gyors számítás", t2_i3: "Kreativitás", t2_i4: "Mintafelismerés",
    t3_title: "Tanulás mintákból", t3_text: "A MI példák ezreit elemzi, és így találja meg a hasonlóságokat.", t3_inst: "Tedd sorrendbe a szavakat:", t3_h1: "A MI tanul...", t3_h2: "A példák fontosak.", t3_q: "Hogyan tanul a MI leggyakrabban?", t3_qa: "Példákon keresztül", t3_qb: "Alvással", t3_qc: "Evéssel", t3_qd: "Sehogy",
    t3_w1: "A MI", t3_w2: "mintákat", t3_w3: "ismer", t3_w4: "fel", t3_w5: "sok", t3_w6: "adatban.", t3_w7: "",
    t4_title: "MI az okostelefonban", t4_text: "A telefonod MI-t használ fotózáshoz, hangvezérléshez és az akku kíméléséhez.", t4_inst: "Töltsd ki a hiányt:", t4_h1: "Mobil segítők.", t4_h2: "Vele gondolkodik.", t4_q: "Mi használ MI-t a telefonban?", t4_qa: "Arcfelismerés", t4_qb: "A védőtok", t4_qc: "A töltőkábel", t4_qd: "Az üveg",
    t4_sent: "A hangvezérlés ___ használ a felismeréshez.", t4_qa2: "MI-t", t4_qb2: "vizet", t4_qc2: "mágiát", t4_qd2: "fát",
    t5_title: "Ajánlások", t5_text: "A YouTube vagy a Netflix olyan videókat ajánl, amik tetszhetnek neked.", t5_inst: "Jelöld meg, mi készít személyes ajánlatokat:", t5_h1: "Mi legyen a következő?", t5_h2: "Javaslatok.", t5_q: "Miért ajánl filmeket a Netflix?", t5_qa: "Mert a MI megtanulja az érdeklődésed", t5_qb: "Véletlen", t5_qc: "Mert esik az eső", t5_qd: "Mert a MI éhes",
    t5_tk1: "A MI", t5_tk2: "személyes", t5_tk3: "ajánlatokat", t5_tk4: "készít", t5_tk5: "neked.", t5_tk6: "",
    t6_title: "Arcfelismerés", t6_text: "A MI képes felismerni és megkülönböztetni az arcokat a fotókon.", t6_inst: "Párosítsd össze:", t6_h1: "Ki ez?", t6_h2: "Jegyek keresése.", t6_q: "Mit néz a MI az arcon?", t6_qa: "Szemek távolsága", t6_qb: "Hajszín", t6_qc: "A név", t6_qd: "A ruha",
    t6_l1: "Szem", t6_r1: "Távolság", t6_l2: "Orr", t6_r2: "Forma", t6_l3: "Száj", t6_r3: "Mosoly",
    t7_title: "Hangvezérlés", t7_text: "Az olyan asszisztensek, mint Siri vagy Alexa, a MI-nek köszönhetően értik meg a hangod.", t7_inst: "Töltsd ki a hiányt:", t7_h1: "Hallgass rám!", t7_h2: "Hangból szöveg.", t7_q: "Mit csinál egy hangasszisztens?", t7_qa: "Parancsokat hajt végre", t7_qb: "Sütit süt", t7_qc: "Házit ír", t7_qd: "Szobát takarít",
    t7_sent: "Alexa megérti a ___.", t7_qa2: "hangomat", t7_qb2: "gondolataimat", t7_qc2: "cipőmet", t7_qd2: "rajzomat",
    t8_title: "Okos otthon", t8_text: "Az okos otthon automatikusan irányítja a világítást és a fűtést.", t8_inst: "Válogasd szét:", t8_h1: "Okos ház.", t8_h2: "Technika segít.", t8_q: "Mi tartozik az okos otthonhoz?", t8_qa: "Okos lámpa", t8_qb: "Sima seprű", t8_qc: "Faajtó", t8_qd: "Ablaküveg",
    t8_bl1: "Okos", t8_bl2: "Sima", t8_i1: "WLAN termosztát", t8_i2: "Gyertya", t8_i3: "Robotporszívó", t8_i4: "Szemétlapát",
    t9_title: "Navigáció", t9_text: "A MI kiszámítja a leggyorsabb utat és jelzi a dugókat.", t9_inst: "Tedd sorrendbe a szavakat:", t9_h1: "Merre menjünk?", t9_h2: "Térkép appok.", t9_q: "Mi segíti a MI-t a navigációban?", t9_qa: "Valós idejű adatok", t9_qb: "Csak egy iránytű", t9_qc: "A csillagok", t9_qd: "Tippelés",
    t9_w1: "A MI", t9_w2: "megtalálja", t9_w3: "a", t9_w4: "legjobb", t9_w5: "utat", t9_w6: "a", t9_w7: "célhoz.",
    t10_title: "Fordítók", t10_text: "A MI fordítók képesek egész szövegeket szinte tökéletesen más nyelvre átültetni.", t10_inst: "Jelöld meg, mi segít a fordításban:", t10_h1: "Idegen nyelvek.", t10_h2: "Megértés.", t10_q: "Hogyan fordít a MI?", t10_qa: "Kontextus elemzéssel", t10_qb: "Szóról szóra (bután)", t10_qc: "Sehogy", t10_qd: "Dobókockával",
    t10_tk1: "A MI", t10_tk2: "segít", t10_tk3: "megérteni", t10_tk4: "az", t10_tk5: "idegen", t10_tk6: "nyelveket.",
    t11_title: "MI szűrők", t11_text: "Az appokban MI szűrők változtatják meg az arcodat vagy adnak hozzá effektusokat.", t11_inst: "Párosítsd össze:", t11_h1: "Vicces effektek.", t11_h2: "Maszkok felvétele.", t11_q: "Hogyan követik a szűrők az arcodat?", t11_qa: "Követési pontokkal", t11_qb: "Ragasztóval", t11_qc: "Véletlenül", t11_qd: "Sehogy",
    t11_l1: "Kutyafülek", t11_r1: "Szűrő", t11_l2: "Háttér", t11_r2: "Elmosott", t11_l3: "Bőr", t11_r3: "Sima",
    t12_title: "MI a játékokban", t12_text: "A videojátékok ellenségei a MI-nek köszönhetően okosabban viselkednek.", t12_inst: "Töltsd kit a hiányt:", t12_h1: "Ellenségek a gépben.", t12_h2: "NPC viselkedés.", t12_q: "Mi az az NPC?", t12_qa: "Nem-játékos karakter", t12_qb: "Új számítógép", t12_qc: "Kedves személy", t12_qd: "Éjszakai buli",
    t12_sent: "A MI irányítja az ___ a játékban.", t12_qa2: "ellenségeket", t12_qb2: "játékosokat", t12_qc2: "konzolt", t12_qd2: "kanapét",
    t13_title: "Chatbotok", t13_text: "A chatbotok olyan programok, amikkel úgy írhatsz, mintha emberrel beszélnél.", t13_inst: "Válogasd szét:", t13_h1: "Ember vagy bot?", t13_h2: "Ki válaszol?", t13_q: "Mit csinál egy chatbot?", t13_qa: "Kérdéseket válaszol meg", t13_qb: "Fogat mos", t13_qc: "Alszik", t13_qd: "Sportol",
    t13_bl1: "Bot", t13_bl2: "Ember", t13_i1: "Azonnali válasz", t13_i2: "Valódi érzések", t13_i3: "24/7 elérhető", t13_i4: "Szünetre van szüksége",
    t14_title: "Adat: a MI étele", t14_text: "Adatok nélkül a MI nem tud tanulni. Minél több az adat, annál okosabb.", t14_inst: "Tedd sorrendbe a szavakat:", t14_h1: "Sokat etetni.", t14_h2: "Adatéhség.", t14_q: "Mi fontos a jó MI-hez?", t14_qa: "Sok jó adat", t14_qb: "Szép gépház", t14_qc: "Hangos hűtő", t14_qd: "Sok por",
    t14_w1: "Az adatok", t14_w2: "nagyon", t14_w3: "fontosak", t14_w4: "a MI", t14_w5: "számára.", t14_w6: "", t14_w7: "",
    t15_title: "Etika & Igazságosság", t15_text: "A MI-nek igazságosnak kell lennie, nem szabad hátrányosan megkülönböztetnie senkit.", t15_inst: "Jelöld meg a két szót az elfogulatlan MI-re:", t15_h1: "Helyes vagy helytelen?", t15_h2: "Igazságosság.", t15_q: "Szabad-e hazudnia a MI-nek?", t15_qa: "Nem, őszintének kell lennie", t15_qb: "Igen, mindig", t15_qc: "Csak hétvégén", t15_qd: "Amikor kedve van",
    t15_tk1: "Egy", t15_tk2: "igazságos", t15_tk3: "MI", t15_tk4: "minden", t15_tk5: "embert", t15_tk6: "egyenlően", t15_tk7: "kezel."
  },
  ro: {
    explorer_title: "Explorator IA: Viața de zi cu zi",
    t1_title: "Ce este IA?", t1_text: "Inteligența Artificială (IA) permite calculatoarelor să rezolve sarcini care necesită de obicei gândirea umană.", t1_inst: "Potrivește perechile:", t1_h1: "IA sau om?", t1_h2: "Cine ce face?", t1_q: "Ce înseamnă abrevierea IA?", t1_qa: "Inteligență Artificială", t1_qb: "Informație Activă", t1_qc: "Interacțiune Android", t1_qd: "Idee Abstractă",
    t1_l1: "Natural", t1_r1: "Om", t1_l2: "Artificial", t1_r2: "Calculator", t1_l3: "Gândire", t1_r3: "Creier",
    t2_title: "IA vs. Om", t2_text: "Oamenii simt și înțeleg, în timp ce IA calculează rapid și recunoaște tipare.", t2_inst: "Sortează în găleți:", t2_h1: "Cine e mai bun?", t2_h2: "Sentimentele vs. date.", t2_q: "Ce poate face o IA mai bine decât un om?", t2_qa: "Verifică milioane de date", t2_qb: "Simte dragoste reală", t2_qc: "Savurează pizza", t2_qd: "Visează",
    t2_bl1: "Om", t2_bl2: "IA", t2_i1: "Empatie", t2_i2: "Calcul rapid", t2_i3: "Creativitate", t2_i4: "Recunoaștere tipare",
    t3_title: "Învățarea prin tipare", t3_text: "IA învață uitându-se la mii de exemple și găsind asemănări.", t3_inst: "Pune cuvintele în ordine:", t3_h1: "IA învață...", t3_h2: "Exemplele sunt importante.", t3_q: "Cum învață o IA de obicei?", t3_qa: "Prin exemple", t3_qb: "Prin somn", t3_qc: "Mâncând", t3_qd: "Deloc",
    t3_w1: "IA", t3_w2: "recunoaște", t3_w3: "tipare", t3_w4: "în", t3_w5: "multe", t3_w6: "date.", t3_w7: "",
    t4_title: "IA în smartphone", t4_text: "Telefonul tău folosește IA pentru fotografii, comenzi vocale și optimizarea bateriei.", t4_inst: "Completează spațiul liber:", t4_h1: "Ajutoare mobil.", t4_h2: "Gândește împreună.", t4_q: "Ce folosește IA în telefon?", t4_qa: "Recunoaștere facială", t4_qb: "Husa de protecție", t4_qc: "Cablul de încărcare", t4_qd: "Sticla",
    t4_sent: "Controlul vocal folosește ___ pentru recunoaștere.", t4_qa2: "IA", t4_qb2: "apă", t4_qc2: "magie", t4_qd2: "lemn",
    t5_title: "Recomandări", t5_text: "Aplicații precum YouTube sau Netflix îți sugerează videoclipuri care ți-ar putea plăcea.", t5_inst: "Evidențiază ce face recomandări personale:", t5_h1: "Ce urmează?", t5_h2: "Sugestii.", t5_q: "De ce Netflix sugerează filme?", t5_qa: "Pentru că IA învață interesele tale", t5_qb: "Din întâmplare", t5_qc: "Pentru că plouă", t5_qd: "Pentru că IA îi este foame",
    t5_tk1: "IA", t5_tk2: "face", t5_tk3: "recomandări", t5_tk4: "personale", t5_tk5: "pentru", t5_tk6: "tine.",
    t6_title: "Recunoaștere facială", t6_text: "IA poate recunoaște și distinge fețele în fotografii.", t6_inst: "Potrivește perechile:", t6_h1: "Cine este acesta?", t6_h2: "Găsirea trăsăturilor.", t6_q: "Ce verifică IA la o față?", t6_qa: "Distanța dintre ochi", t6_qb: "Culoarea părului", t6_qc: "Numele", t6_qd: "Hainele",
    t6_l1: "Ochi", t6_r1: "Distanță", t6_l2: "Nas", t6_r2: "Formă", t6_l3: "Gură", t6_r3: "Zâmbet",
    t7_title: "Control vocal", t7_text: "Asistenții precum Siri sau Alexa îți înțeleg vocea datorită IA.", t7_inst: "Completează spațiul liber:", t7_h1: "Ascultă-mă!", t7_h2: "Transformă sunetul în text.", t7_q: "Ce face un asistent vocal?", t7_qa: "Execută comenzi", t7_qb: "Coace prăjituri", t7_qc: "Face temele", t7_qd: "Face curat",
    t7_sent: "Alexa îmi înțelege ___.", t7_qa2: "vocea", t7_qb2: "gândurile", t7_qc2: "pantofii", t7_qd2: "desenul",
    t8_title: "Smart Home", t8_text: "O casă inteligentă controlează luminile și încălzirea automat.", t8_inst: "Sortează în găleți:", t8_h1: "Casă deșteaptă.", t8_h2: "Tehnologia ajută.", t8_q: "Ce aparține unei case inteligente?", t8_qa: "Bec inteligent", t8_qb: "Mătură normală", t8_qc: "Ușă de lemn", t8_qd: "Geamul",
    t8_bl1: "Smart", t8_bl2: "Normal", t8_i1: "Termostat WLAN", t8_i2: "Lumânare", t8_i3: "Aspirator robot", t8_i4: "Făraș",
    t9_title: "Navigație", t9_text: "IA calculează cea mai rapidă rută și recunoaște blocajele în timp real.", t9_inst: "Pune cuvintele în ordine:", t9_h1: "Pe unde mergem?", t9_h2: "Aplicații hărți.", t9_q: "Ce ajută IA la navigație?", t9_qa: "Date în timp real", t9_qb: "Doar o busolă", t9_qc: "Stelele", t9_qd: "Ghicitul",
    t9_w1: "IA", t9_w2: "găsește", t9_w3: "cel", t9_w4: "mai", t9_w5: "bun", t9_w6: "drum.", t9_w7: "",
    t10_title: "Traducători", t10_text: "Traducătorii IA pot transfera texte întregi aproape perfect în alte limbi.", t10_inst: "Evidențiază ce ajută la traducere:", t10_h1: "Alte limbi.", t10_h2: "Înțelegere.", t10_q: "Cum traduce IA?", t10_qa: "Prin analiza contextului", t10_qb: "Cuvânt cu cuvânt", t10_qc: "Deloc", t10_qd: "Dând cu zarul",
    t10_tk1: "IA", t10_tk2: "ne", t10_tk3: "ajută", t10_tk4: "să", t10_tk5: "înțelegem", t10_tk6: "limbi", t10_tk7: "străine.",
    t11_title: "Filtre IA", t11_text: "In aplicații, filtrele IA îți schimbă fața sau adaugă efecte.", t11_inst: "Potrivește perechile:", t11_h1: "Efecte amuzante.", t11_h2: "Punerea măștilor.", t11_q: "Cum urmăresc filtrele fața ta?", t11_qa: "Puncte de urmărire", t11_qb: "Cu lipici", t11_qc: "Aleatoriu", t11_qd: "Deloc",
    t11_l1: "Urechi câine", t11_r1: "Filtru", t11_l2: "Fundal", t11_r2: "Blurat", t11_l3: "Piele", t11_r3: "Netedă",
    t12_title: "IA în jocuri", t12_text: "Inamicii din jocurile video se comportă mai inteligent datorită IA.", t12_inst: "Completează spațiul liber:", t12_h1: "Inamici în joc.", t12_h2: "Comportament NPC.", t12_q: "Ce este un NPC?", t12_qa: "Caracter non-jucător", t12_qb: "Nou PC", t12_qc: "Persoană drăguță", t12_qd: "Petrecere nocturnă",
    t12_sent: "IA controlează ___ în joc.", t12_qa2: "inamicii", t12_qb2: "jucătorii", t12_qc2: "consola", t12_qd2: "canapeaua",
    t13_title: "Chatboți", t13_text: "Chatboții sunt programe cu care poți scrie ca și cu un om.", t13_inst: "Sortează în găleți:", t13_h1: "Om sau bot?", t13_h2: "Cine răspunde?", t13_q: "Ce face un chatbot?", t13_qa: "Răspunde la întrebări", t13_qb: "Se spală pe dinți", t13_qc: "Doarme", t13_qd: "Face sport",
    t13_bl1: "Bot", t13_bl2: "Om", t13_i1: "Răspuns instant", t13_i2: "Sentimente reale", t13_i3: "Disponibil 24/7", t13_i4: "Are nevoie de pauze",
    t14_title: "Datele: hrana IA", t14_text: "Fără date, o IA nu poate învăța nimic. Cu cât mai multe date, cu atât mai deșteaptă.", t14_inst: "Pune cuvintele în ordine:", t14_h1: "Hrănește mult.", t14_h2: "Foame de date.", t14_q: "Ce este important pentru o IA bună?", t14_qa: "Multe date bune", t14_qb: "O carcasă frumoasă", t14_qc: "Un ventilator zgomotos", t14_qd: "Mult praf",
    t14_w1: "Datele", t14_w2: "sunt", t14_w3: "foarte", t14_w4: "importante", t14_w5: "pentru", t14_w6: "IA.", t14_w7: "",
    t15_title: "Etică și echitate", t15_text: "IA ar trebui să fie corectă și să nu dezavantajeze pe nimeni.", t15_inst: "Evidențiază cele două cuvinte pentru o IA echitabilă:", t15_h1: "Corect sau greșit?", t15_h2: "Dreptate.", t15_q: "Are voie o IA să mintă?", t15_qa: "Nu, ar trebui să fie onestă", t15_qb: "Da, întotdeauna", t15_qc: "Doar în weekend", t15_qd: "Când vrea ea",
    t15_tk1: "O", t15_tk2: "IA", t15_tk3: "corectă", t15_tk4: "tratează", t15_tk5: "toți", t15_tk6: "oamenii", t15_tk7: "egal."
  }
};

export const INFO_K5_I4_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "simple-icon", icon: "🤖", color: "#2196F3" },
    interactive: { type: "match-pairs", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", pairs: [{left:"t1_l1",right:"t1_r1"},{left:"t1_l2",right:"t1_r2"},{left:"t1_l3",right:"t1_r3"}] },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" }
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "icon-grid", items: [{emoji:"🧠",label:"Mensch"},{emoji:"💻",label:"KI"}] },
    interactive: { type: "drag-to-bucket", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", buckets: [{id:"b1",label:"t2_bl1"},{id:"b2",label:"t2_bl2"}], items: [{text:"t2_i1",bucketId:"b1"},{text:"t2_i2",bucketId:"b2"},{text:"t2_i3",bucketId:"b1"},{text:"t2_i4",bucketId:"b2"}] },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" }
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "simple-icon", icon: "🧩", color: "#9C27B0" },
    interactive: { type: "word-order", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5", "t3_w6", "t3_w7"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "📱", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", sentence: "t4_sent", choices: ["t4_qa2", "t4_qb2", "t4_qc2", "t4_qd2"], correctIndex: 0 },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "🎬", color: "#F44336" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6"].filter(x=>x!==""), correctIndices: [0] },
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
    svg: { type: "simple-icon", icon: "🗣️", color: "#FFC107" },
    interactive: { type: "gap-fill", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", sentence: "t7_sent", choices: ["t7_qa2", "t7_qb2", "t7_qc2", "t7_qd2"], correctIndex: 0 },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" }
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "simple-icon", icon: "🏠", color: "#00BCD4" },
    interactive: { type: "drag-to-bucket", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", buckets: [{id:"b1",label:"t8_bl1"},{id:"b2",label:"t8_bl2"}], items: [{text:"t8_i1",bucketId:"b1"},{text:"t8_i2",bucketId:"b2"},{text:"t8_i3",bucketId:"b1"},{text:"t8_i4",bucketId:"b2"}] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" }
  },
  {
    infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "simple-icon", icon: "🗺️", color: "#8BC34A" },
    interactive: { type: "word-order", instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2", words: ["t9_w1", "t9_w2", "t9_w3", "t9_w4", "t9_w5", "t9_w6", "t9_w7"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t9_q", choices: ["t9_qa", "t9_qb", "t9_qc", "t9_qd"], answer: "t9_qa" }
  },
  {
    infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "simple-icon", icon: "🌐", color: "#3F51B5" },
    interactive: { type: "highlight-text", instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2", tokens: ["t10_tk1","t10_tk2","t10_tk3","t10_tk4","t10_tk5","t10_tk6","t10_tk7"].filter(x=>x!==""), correctIndices: [0] },
    quiz: { question: "t10_q", choices: ["t10_qa", "t10_qb", "t10_qc", "t10_qd"], answer: "t10_qa" }
  },
  {
    infoTitle: "t11_title", infoText: "t11_text",
    svg: { type: "simple-icon", icon: "🎭", color: "#E91E63" },
    interactive: { type: "match-pairs", instruction: "t11_inst", hint1: "t11_h1", hint2: "t11_h2", pairs: [{left:"t11_l1",right:"t11_r1"},{left:"t11_l2",right:"t11_r2"},{left:"t11_l3",right:"t11_r3"}] },
    quiz: { question: "t11_q", choices: ["t11_qa", "t11_qb", "t11_qc", "t11_qd"], answer: "t11_qa" }
  },
  {
    infoTitle: "t12_title", infoText: "t12_text",
    svg: { type: "simple-icon", icon: "🎮", color: "#795548" },
    interactive: { type: "gap-fill", instruction: "t12_inst", hint1: "t12_h1", hint2: "t12_h2", sentence: "t12_sent", choices: ["t12_qa2", "t12_qb2", "t12_qc2", "t12_qd2"], correctIndex: 0 },
    quiz: { question: "t12_q", choices: ["t12_qa", "t12_qb", "t12_qc", "t12_qd"], answer: "t12_qa" }
  },
  {
    infoTitle: "t13_title", infoText: "t13_text",
    svg: { type: "icon-grid", items: [{emoji:"💬",label:"Bot"},{emoji:"🧍",label:"Mensch"}] },
    interactive: { type: "drag-to-bucket", instruction: "t13_inst", hint1: "t13_h1", hint2: "t13_h2", buckets: [{id:"b1",label:"t13_bl1"},{id:"b2",label:"t13_bl2"}], items: [{text:"t13_i1",bucketId:"b1"},{text:"t13_i2",bucketId:"b2"},{text:"t13_i3",bucketId:"b1"},{text:"t13_i4",bucketId:"b2"}] },
    quiz: { question: "t13_q", choices: ["t13_qa", "t13_qb", "t13_qc", "t13_qd"], answer: "t13_qa" }
  },
  {
    infoTitle: "t14_title", infoText: "t14_text",
    svg: { type: "simple-icon", icon: "🍱", color: "#FF9800" },
    interactive: { type: "word-order", instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2", words: ["t14_w1", "t14_w2", "t14_w3", "t14_w4", "t14_w5", "t14_w6", "t14_w7"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t14_q", choices: ["t14_qa", "t14_qb", "t14_qc", "t14_qd"], answer: "t14_qa" }
  },
  {
    infoTitle: "t15_title", infoText: "t15_text",
    svg: { type: "simple-icon", icon: "⚖️", color: "#3F51B5" },
    interactive: { type: "highlight-text", instruction: "t15_inst", hint1: "t15_h1", hint2: "t15_h2", tokens: ["t15_tk1","t15_tk2","t15_tk3","t15_tk4","t15_tk5","t15_tk6","t15_tk7"].filter(x=>x!==""), correctIndices: [1,2] },
    quiz: { question: "t15_q", choices: ["t15_qa", "t15_qb", "t15_qc", "t15_qd"], answer: "t15_qa" }
  }
];

