// lib/explorerPools/aiK8_i2.ts
import type { PoolTopicDef } from "./types";

export const INFO_K8_I2_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "KI Insel 2: Neuronale Netze & Vision",
    t1_title: "Neuronale Netze", t1_text: "Künstliche neuronale Netze sind vom menschlichen Gehirn inspiriert und bestehen aus Schichten von verbundenen 'Neuronen'.", t1_inst: "Ordne die Paare zu:", t1_h1: "Gehirn-Inspiration.", t1_h2: "Struktur.", t1_q: "Wovon sind neuronale Netze inspiriert?", t1_qa: "Menschliches Gehirn", t1_qb: "Ein Spinnennetz", t1_qc: "Ein Autobahnnetz", t1_qd: "Das Internet",
    t1_l1: "Schicht", t1_r1: "Layer", t1_l2: "Verbindung", t1_r2: "Gewichtung", t1_l3: "Baustein", t1_r3: "Neuron",
    t2_title: "Das künstliche Neuron", t2_text: "Ein Neuron empfängt Signale, verarbeitet sie und gibt ein Ergebnis weiter, wenn ein Schwellenwert erreicht ist.", t2_inst: "Fülle die Lücke aus:", t2_h1: "Eingabe -> Verarbeitung -> Ausgabe.", t2_h2: "Wie im Gehirn.", t2_q: "Was macht ein künstliches Neuron mit den Eingangssignalen?", t2_qa: "Gewichten und Summieren", t2_qb: "Löschen", t2_qc: "Ausdrucken", t2_qd: "Speichern",
    t2_sent: "Ein Neuron hat Eingänge, eine ___ und einen Ausgang.", t2_qa2: "Aktivierungsfunktion", t2_qb2: "Tastatur", t2_qc2: "Batterie", t2_qd2: "Maus",
    t3_title: "Schichten (Layers)", t3_text: "Ein Netz hat meist eine Eingabeschicht, mehrere versteckte Schichten und eine Ausgabeschicht.", t3_inst: "Sortiere in die Eimer:", t3_h1: "Vorne, Mitte, Hinten.", t3_h2: "Wo fließen die Daten?", t3_q: "Wie heißen die Schichten zwischen Input und Output?", t3_qa: "Hidden Layers", t3_qb: "Mittel-Schichten", t3_qc: "Geheim-Layers", t3_qd: "Puffer-Schichten",
    t3_bl1: "Sichtbar", t3_bl2: "Versteckt", t3_i1: "Input Layer", t3_i2: "Hidden Layer 1", t3_i3: "Output Layer", t3_i4: "Hidden Layer 2",
    t4_title: "Deep Learning", t4_text: "Deep Learning bezeichnet neuronale Netze mit sehr vielen versteckten Schichten.", t4_inst: "Bringe die Wörter in Ordnung:", t4_h1: "Tiefe Netze.", t4_h2: "Viele Schichten.", t4_q: "Was bedeutet 'Deep' in Deep Learning?", t4_qa: "Viele Schichten", t4_qb: "Im Meer", t4_qc: "Sehr schwer", t4_qd: "Dunkel",
    t4_w1: "Deep", t4_w2: "Learning", t4_w3: "nutzt", t4_w4: "viele", t4_w5: "Schichten", t4_w6: "von", t4_w7: "Neuronen.",
    t5_title: "Computer Vision", t5_text: "Computer Vision ermöglicht es Maschinen, Bilder und Videos zu 'sehen' und zu verstehen.", t5_inst: "Markiere das richtige Wort:", t5_h1: "Sehen mit Kameras.", t5_h2: "Bilder verstehen.", t5_q: "Welches Feld der KI befasst sich mit der Bildverarbeitung?", t5_qa: "Computer Vision", t5_qb: "NLP", t5_qc: "Robotik", t5_qd: "Datenbanken",
    t5_tk1: "Computer", t5_tk2: "Vision", t5_tk3: "erkennt", t5_tk4: "Objekte", t5_tk5: "in", t5_tk6: "Bildern.",
    t6_title: "Bilderkennung", t6_text: "Die KI kann lernen, Objekte wie Autos, Fußgänger oder Tiere auf Fotos zu identifizieren.", t6_inst: "Ordne die Paare zu:", t6_h1: "Was ist das?", t6_h2: "Kategorisierung.", t6_q: "Was ist das Ziel der Bilderkennung?", t6_qa: "Objekte klassifizieren", t6_qb: "Bilder löschen", t6_qc: "Bilder malen", t6_qd: "Drucken",
    t6_l1: "Foto", t6_r1: "Pixeldaten", t6_l2: "KI", t6_r2: "Erkennung", t6_l3: "Label", t6_r3: "Katze",
    t7_title: "Objekterkennung", t7_text: "Im Gegensatz zur reinen Klassifizierung findet die Objekterkennung auch den Ort (Box) des Objekts im Bild.", t7_inst: "Fülle die Lücke aus:", t7_h1: "Wo ist es?", t7_h2: "Rahmen ziehen.", t7_q: "Was markiert die KI bei der Objekterkennung oft?", t7_qa: "Bounding Box", t7_qb: "Ein Kreuz", t7_qc: "Einen Punkt", t7_qd: "Nichts",
    t7_sent: "Die Objekterkennung zeichnet einen ___ um das Ding.", t7_qa2: "Rahmen", t7_qb2: "Kreis", t7_qc2: "Strich", t7_qd2: "Punkt",
    t8_title: "Gesichtserkennung", t8_text: "KI kann Gesichter identifizieren, indem sie Merkmale wie Augenabstand oder Nasenform analysiert.", t8_inst: "Sortiere in die Eimer:", t8_h1: "Biometrie.", t8_h2: "Sicherheit vs. Analyse.", t8_q: "Wo wird Gesichtserkennung oft genutzt?", t8_qa: "Smartphone-Entsperrung", t8_qb: "Beim Kochen", t8_qc: "Beim Schlafen", t8_qd: "Zum Musikhören",
    t8_bl1: "Merkmal", t8_bl2: "Kein Merkmal", t8_i1: "Augenabstand", t8_i2: "Schuhgröße", t8_i3: "Nasenform", t8_i4: "Lieblingsfarbe",
    t9_title: "NLP (Sprachverarbeitung)", t9_text: "Natural Language Processing (NLP) hilft Computern, menschliche Sprache zu verstehen und zu erzeugen.", t9_inst: "Bringe die Wörter in Ordnung:", t9_h1: "Sprechen und Verstehen.", t9_h2: "Text-KI.", t9_q: "Was bedeutet NLP?", t9_qa: "Natural Language Processing", t9_qb: "New Laser Printer", t9_qc: "Next Level Programming", t9_qd: "Netz-Lern-Programm",
    t9_w1: "NLP", t9_w2: "hilft", t9_w3: "Maschinen", t9_w4: "menschliche", t9_w5: "Texte", t9_w6: "zu", t9_w7: "verarbeiten.",
    t10_title: "Chatbots", t10_text: "Chatbots sind Programme, die mit Nutzern über Text oder Sprache kommunizieren können.", t10_inst: "Markiere das richtige Wort:", t10_h1: "Digitale Berater.", t10_h2: "Unterhaltung.", t10_q: "Welche KI-Technik nutzen moderne Chatbots hauptsächlich?", t10_qa: "NLP", t10_qb: "Bildverarbeitung", t10_qc: "Hardware", t10_qd: "Chemie",
    t10_tk1: "Ein", t10_tk2: "Chatbot", t10_tk3: "antwortet", t10_tk4: "automatisch", t10_tk5: "auf", t10_tk6: "Fragen.",
    t11_title: "Sentiment Analyse", t11_text: "KI kann erkennen, ob ein Text positiv, negativ oder neutral geschrieben ist.", t11_inst: "Ordne die Paare zu:", t11_h1: "Gefühle im Text.", t11_h2: "Stimmung erkennen.", t11_q: "Was analysiert die Sentiment-Analyse?", t11_qa: "Stimmung/Gefühle", t11_qb: "Wortanzahl", t11_qc: "Dateigröße", t11_qd: "Schriftart",
    t11_l1: "Super!", t11_r1: "Positiv", t11_l2: "Schlecht.", t11_r2: "Negativ", t11_l3: "Okay.", t11_r3: "Neutral",
    t12_title: "Spracherkennung", t12_text: "KI wandelt gesprochene Worte in digitalen Text um (Speech-to-Text).", t12_inst: "Fülle die Lücke aus:", t12_h1: "Hören und Schreiben.", t12_h2: "Audio zu Text.", t12_q: "Wie nennt man die Umwandlung von Stimme in Text?", t12_qa: "Spracherkennung", t12_qb: "Drucken", t12_qc: "Singen", t12_qd: "Löschen",
    t12_sent: "Die KI macht aus Audio einen ___.", t12_qa2: "Text", t12_qb2: "Film", t12_qc2: "Kaffee", t12_qd2: "Roboter",
    t13_title: "KI-Übersetzung", t13_text: "Moderne Übersetzer nutzen neuronale Netze, um Texte flüssig in andere Sprachen zu übertragen.", t13_inst: "Sortiere in die Eimer:", t13_h1: "Sprachen mixen.", t13_h2: "Besser als alte Tools.", t13_q: "Warum ist KI-Übersetzung heute so gut?", t13_qa: "Kontext-Verständnis", t13_qb: "Mehr Strom", t13_qc: "Größere Bildschirme", t13_qd: "Zufall",
    t13_bl1: "KI Tool", t13_bl2: "Kein Tool", t13_i1: "DeepL", t13_i2: "Hammer", t13_i3: "Google Translate", t13_i4: "Bleistift",
    t14_title: "Virtuelle Assistenten", t14_text: "Siri, Alexa und Google Assistant nutzen KI, um Sprachbefehle auszuführen.", t14_inst: "Bringe die Wörter in Ordnung:", t14_h1: "Helfer im Alltag.", t14_h2: "Sprachsteuerung.", t14_q: "Was ist Alexa?", t14_qa: "Virtueller Assistent", t14_qb: "Ein Betriebssystem", t14_qc: "Ein Hardware-Hersteller", t14_qd: "Ein Spielzeugauto",
    t14_w1: "Assistenten", t14_w2: "nutzen", t14_w3: "KI", t14_w4: "um", t14_w5: "Sprachbefehle", t14_w6: "zu", t14_w7: "verstehen.",
    t15_title: "Synthetische Sprache", t15_text: "KI kann täuschend echt klingende Stimmen aus Text erzeugen (Text-to-Speech).", t15_inst: "Markiere das richtige Wort:", t15_h1: "Computer spricht.", t15_h2: "Künstliche Stimme.", t15_q: "Wie nennt man die Erzeugung von Sprache?", t15_qa: "Sprachsynthese", t15_qb: "Chorgesang", t15_qc: "Stille", t15_qd: "Echo",
    t15_tk1: "KI", t15_tk2: "kann", t15_tk3: "Text", t15_tk4: "in", t15_tk5: "Sprache", t15_tk6: "umwandeln."
  },
  en: {
    explorer_title: "AI Island 2: Neural Networks & Vision",
    t1_title: "Neural Networks", t1_text: "Artificial neural networks are inspired by the human brain and consist of layers of connected 'neurons'.", t1_inst: "Match the pairs:", t1_h1: "Brain inspiration.", t1_h2: "Structure.", t1_q: "What are neural networks inspired by?", t1_qa: "Human brain", t1_qb: "A spider web", t1_qc: "A highway network", t1_qd: "The Internet",
    t1_l1: "Layer", t1_r1: "Layer", t1_l2: "Connection", t1_r2: "Weight", t1_l3: "Building block", t1_r3: "Neuron",
    t2_title: "The Artificial Neuron", t2_text: "A neuron receives signals, processes them, and passes on a result if a threshold is reached.", t2_inst: "Fill in the blank:", t2_h1: "Input -> Processing -> Output.", t2_h2: "Like in the brain.", t2_q: "What does an artificial neuron do with input signals?", t2_qa: "Weight and sum", t2_qb: "Delete", t2_qc: "Print", t2_qd: "Save",
    t2_sent: "A neuron has inputs, an ___ and an output.", t2_qa2: "activation function", t2_qb2: "keyboard", t2_qc2: "battery", t2_qd2: "mouse",
    t3_title: "Layers", t3_text: "A network usually has an input layer, several hidden layers, and an output layer.", t3_inst: "Sort into buckets:", t3_h1: "Front, middle, back.", t3_h2: "Where do data flow?", t3_q: "What are the layers between input and output called?", t3_qa: "Hidden layers", t3_qb: "Middle layers", t3_qc: "Secret layers", t3_qd: "Buffer layers",
    t3_bl1: "Visible", t3_bl2: "Hidden", t3_i1: "Input Layer", t3_i2: "Hidden Layer 1", t3_i3: "Output Layer", t3_i4: "Hidden Layer 2",
    t4_title: "Deep Learning", t4_text: "Deep Learning refers to neural networks with many hidden layers.", t4_inst: "Put the words in order:", t4_h1: "Deep networks.", t4_h2: "Many layers.", t4_q: "What does 'Deep' mean in Deep Learning?", t4_qa: "Many layers", t4_qb: "In the sea", t4_qc: "Very heavy", t4_qd: "Dark",
    t4_w1: "Deep", t4_w2: "Learning", t4_w3: "uses", t4_w4: "many", t4_w5: "layers", t4_w6: "of", t4_w7: "neurons.",
    t5_title: "Computer Vision", t5_text: "Computer Vision allows machines to 'see' and understand images and videos.", t5_inst: "Highlight the correct word:", t5_h1: "Seeing with cameras.", t5_h2: "Understanding images.", t5_q: "Which field of AI deals with image processing?", t5_qa: "Computer Vision", t5_qb: "NLP", t5_qc: "Robotics", t5_qd: "Databases",
    t5_tk1: "Computer", t5_tk2: "vision", t5_tk3: "recognizes", t5_tk4: "objects", t5_tk5: "in", t5_tk6: "images.",
    t6_title: "Image Recognition", t6_text: "AI can learn to identify objects like cars, pedestrians, or animals in photos.", t6_inst: "Match the pairs:", t6_h1: "What is it?", t6_h2: "Categorization.", t6_q: "What is the goal of image recognition?", t6_qa: "Classify objects", t6_qb: "Delete images", t6_qc: "Paint images", t6_qd: "Print",
    t6_l1: "Photo", t6_r1: "Pixel data", t6_l2: "AI", t6_r2: "Recognition", t6_l3: "Label", t6_r3: "Cat",
    t7_title: "Object Detection", t7_text: "Unlike pure classification, object detection also finds the location (box) of the object in the image.", t7_inst: "Fill in the blank:", t7_h1: "Where is it?", t7_h2: "Draw a frame.", t7_q: "What does AI often mark in object detection?", t7_qa: "Bounding Box", t7_qb: "A cross", t7_qc: "A point", t7_qd: "Nothing",
    t7_sent: "Object detection draws a ___ around the thing.", t7_qa2: "frame", t7_qb2: "circle", t7_qc2: "line", t7_qd2: "point",
    t8_title: "Facial Recognition", t8_text: "AI can identify faces by analyzing features like eye distance or nose shape.", t8_inst: "Sort into buckets:", t8_h1: "Biometrics.", t8_h2: "Security vs. analysis.", t8_q: "Where is facial recognition often used?", t8_qa: "Smartphone unlocking", t8_qb: "Cooking", t8_qc: "Sleeping", t8_qd: "Listening to music",
    t8_bl1: "Feature", t8_bl2: "Not a feature", t8_i1: "Eye distance", t8_i2: "Shoe size", t8_i3: "Nose shape", t8_i4: "Favorite color",
    t9_title: "NLP", t9_text: "Natural Language Processing (NLP) helps computers understand and generate human language.", t9_inst: "Put the words in order:", t9_h1: "Speaking and understanding.", t9_h2: "Text-AI.", t9_q: "What does NLP stand for?", t9_qa: "Natural Language Processing", t9_qb: "New Laser Printer", t9_qc: "Next Level Programming", t9_qd: "Net-Learn-Program",
    t9_w1: "NLP", t9_w2: "helps", t9_w3: "machines", t9_w4: "process", t9_w5: "human", t9_w6: "text", t9_w7: "data.",
    t10_title: "Chatbots", t10_text: "Chatbots are programs that can communicate with users via text or speech.", t10_inst: "Highlight the correct word:", t10_h1: "Digital advisors.", t10_h2: "Conversation.", t10_q: "What AI technique do modern chatbots mainly use?", t10_qa: "NLP", t10_qb: "Image processing", t10_qc: "Hardware", t10_qd: "Chemistry",
    t10_tk1: "A", t10_tk2: "chatbot", t10_tk3: "answers", t10_tk4: "questions", t10_tk5: "automatically.", t10_tk6: "",
    t11_title: "Sentiment Analysis", t11_text: "AI can detect whether a text is written in a positive, negative, or neutral way.", t11_inst: "Match the pairs:", t11_h1: "Feelings in text.", t11_h2: "Recognize mood.", t11_q: "What does sentiment analysis analyze?", t11_qa: "Mood/Feelings", t11_qb: "Word count", t11_qc: "File size", t11_qd: "Font type",
    t11_l1: "Great!", t11_r1: "Positive", t11_l2: "Bad.", t11_r2: "Negative", t11_l3: "Okay.", t11_r3: "Neutral",
    t12_title: "Speech Recognition", t12_text: "AI converts spoken words into digital text (Speech-to-Text).", t12_inst: "Fill in the blank:", t12_h1: "Hearing and writing.", t12_h2: "Audio to text.", t12_q: "What is the conversion of voice to text called?", t12_qa: "Speech recognition", t12_qb: "Printing", t12_qc: "Singing", t12_qd: "Deleting",
    t12_sent: "The AI turns audio into ___.", t12_qa2: "text", t12_qb2: "film", t12_qc2: "coffee", t12_qd2: "robot",
    t13_title: "AI Translation", t13_text: "Modern translators use neural networks to translate texts smoothly into other languages.", t13_inst: "Sort into buckets:", t13_h1: "Mixing languages.", t13_h2: "Better than old tools.", t13_q: "Why is AI translation so good today?", t13_qa: "Context understanding", t13_qb: "More power", t13_qc: "Larger screens", t13_qd: "Randomness",
    t13_bl1: "AI Tool", t13_bl2: "Not a Tool", t13_i1: "DeepL", t13_i2: "Hammer", t13_i3: "Google Translate", t13_i4: "Pencil",
    t14_title: "Virtual Assistants", t14_text: "Siri, Alexa, and Google Assistant use AI to execute voice commands.", t14_inst: "Put the words in order:", t14_h1: "Everyday helpers.", t14_h2: "Voice control.", t14_q: "What is Alexa?", t14_qa: "Virtual Assistant", t14_qb: "An OS", t14_qc: "A hardware maker", t14_qd: "A toy car",
    t14_w1: "Assistants", t14_w2: "use", t14_w3: "AI", t14_w4: "to", t14_w5: "understand", t14_w6: "voice", t14_w7: "commands.",
    t15_title: "Synthetic Speech", t15_text: "AI can create deceptively real-sounding voices from text (Text-to-Speech).", t15_inst: "Highlight the correct word:", t15_h1: "Computer speaks.", t15_h2: "Artificial voice.", t15_q: "What is the creation of speech called?", t15_qa: "Speech synthesis", t15_qb: "Choir singing", t15_qc: "Silence", t15_qd: "Echo",
    t15_tk1: "AI", t15_tk2: "can", t15_tk3: "convert", t15_tk4: "text", t15_tk5: "into", t15_tk6: "speech."
  },
  hu: {
    explorer_title: "MI Sziget 2: Neurális hálók és látás",
    t1_title: "Neurális hálózatok", t1_text: "A mesterséges neurális hálózatokat az emberi agy ihlette, és összekapcsolt 'neuronok' rétegeiből állnak.", t1_inst: "Párosítsd össze:", t1_h1: "Agy ihletés.", t1_h2: "Szerkezet.", t1_q: "Mi ihlette a neurális hálózatokat?", t1_qa: "Emberi agy", t1_qb: "Pókháló", t1_qc: "Autópálya-hálózat", t1_qd: "Az internet",
    t1_l1: "Réteg", t1_r1: "Layer", t1_l2: "Kapcsolat", t1_r2: "Súlyozás", t1_l3: "Építőelem", t1_r3: "Neuron",
    t2_title: "A mesterséges neuron", t2_text: "A neuron jeleket fogad, feldolgozza őket, és eredményt ad tovább, ha elért egy küszöbértéket.", t2_inst: "Töltsd ki a hiányt:", t2_h1: "Bemenet -> Feldolgozás -> Kimenet.", t2_h2: "Mint az agyban.", t2_q: "Mit csinál a mesterséges neuron a bemeneti jelekkel?", t2_qa: "Súlyozza és összegzi", t2_qb: "Törli", t2_qc: "Kinyomtatja", t2_qd: "Menti",
    t2_sent: "A neuronnak vannak bemenetei, egy ___ és kimenete.", t2_qa2: "aktivációs függvénye", t2_qb2: "billentyűzete", t2_qc2: "eleme", t2_qd2: "egere",
    t3_title: "Rétegek", t3_text: "Egy hálózatnak általában van bemeneti rétege, több rejtett rétege und egy kimeneti rétege.", t3_inst: "Válogasd szét:", t3_h1: "Eleje, közepe, vége.", t3_h2: "Hol folynak az adatok?", t3_q: "Hogy hívják a bemenet und kimenet közötti rétegeket?", t3_qa: "Rejtett rétegek", t3_qb: "Középső rétegek", t3_qc: "Titkos rétegek", t3_qd: "Puffer rétegek",
    t3_bl1: "Látható", t3_bl2: "Rejtett", t3_i1: "Bemeneti réteg", t3_i2: "1. rejtett réteg", t3_i3: "Kimeneti réteg", t3_i4: "2. rejtett réteg",
    t4_title: "Deep Learning", t4_text: "A Deep Learning (mély tanulás) nagyon sok rejtett réteggel rendelkező neurális hálózatokat jelent.", t4_inst: "Tedd sorrendbe a szavakat:", t4_h1: "Mély hálózatok.", t4_h2: "Sok réteg.", t4_q: "Mit jelent a 'Deep' a Deep Learning-ben?", t4_qa: "Sok réteg", t4_qb: "A tengerben", t4_qc: "Nagyon nehéz", t4_qd: "Sötét",
    t4_w1: "A Deep", t4_w2: "Learning", t4_w3: "sok", t4_w4: "neuronréteget", t4_w5: "használ", t4_w6: "a tanuláshoz.", t4_w7: "",
    t5_title: "Számítógépes látás", t5_text: "A Computer Vision lehetővé teszi a gépeknek, hogy képeket und videókat 'lássanak' und megértsenek.", t5_inst: "Jelöld meg a helyes szót:", t5_h1: "Látás kamerával.", t5_h2: "Képek megértése.", t5_q: "A MI melyik területe foglalkozik képfeldolgozással?", t5_qa: "Számítógépes látás", t5_qb: "NLP", t5_qc: "Robotika", t5_qd: "Adatbázisok",
    t5_tk1: "A számítógépes", t5_tk2: "látás", t5_tk3: "felismeri", t5_tk4: "a tárgyakat", t5_tk5: "a képeken.", t5_tk6: "",
    t6_title: "Képfelismerés", t6_text: "A MI meg tudja tanulni a fotókon lévő tárgyak (autó, gyalogos, állat) azonosítását.", t6_inst: "Párosítsd össze:", t6_h1: "Mi ez?", t6_h2: "Kategorizálás.", t6_q: "Mi a képfelismerés célja?", t6_qa: "Tárgyak osztályozása", t6_qb: "Képtörlés", t6_qc: "Képfestés", t6_qd: "Nyomtatás",
    t6_l1: "Foto", t6_r1: "Pixeladatok", t6_l2: "MI", t6_r2: "Felismerés", t6_l3: "Címke", t6_r3: "Macska",
    t7_title: "Tárgyfelismerés", t7_text: "A sima osztályozással szemben a tárgyfelismerés a tárgy helyét (keretét) is megtalálja a képen.", t7_inst: "Töltsd ki a hiányt:", t7_h1: "Hol van?", t7_h2: "Keret rajzolása.", t7_q: "Mit jelöl meg gyakran a MI tárgyfelismeréskor?", t7_qa: "Bounding Box", t7_qb: "Egy kereszt", t7_qc: "Egy pont", t7_qd: "Semmi",
    t7_sent: "A tárgyfelismerés egy ___ rajzol a dolog köré.", t7_qa2: "keretet", t7_qb2: "kört", t7_qc2: "vonalat", t7_qd2: "pontot",
    t8_title: "Arcfelismerés", t8_text: "A MI azonosítani tudja az arcokat olyan jellemzők alapján, mint a szemtávolság vagy az orr formája.", t8_inst: "Válogasd szét:", t8_h1: "Biometria.", t8_h2: "Biztonság vs. Elemzés.", t8_q: "Hol használnak gyakran arcfelismerést?", t8_qa: "Mobil feloldása", t8_qb: "Főzéskor", t8_qc: "Alváskor", t8_qd: "Zenehallgatáshoz",
    t8_bl1: "Jellemző", t8_bl2: "Nem jellemző", t8_i1: "Szemtávolság", t8_i2: "Cipőméret", t8_i3: "Orrforma", t8_i4: "Kedvenc szín",
    t9_title: "NLP", t9_text: "A természetes nyelvfeldolgozás (NLP) segít a gépeknek az emberi beszéd megértésében und előállításában.", t9_inst: "Tedd sorrendbe a szavakat:", t9_h1: "Beszéd und megértés.", t9_h2: "Szöveg-MI.", t9_q: "Mit jelent az NLP?", t9_qa: "Természetes nyelvfeldolgozás", t9_qb: "Új lézer nyomtató", t9_qc: "Következő szintű kódolás", t9_qd: "Hálózati program",
    t9_w1: "Az NLP", t9_w2: "segít", t9_w3: "a gépeknek", t9_w4: "feldolgozni", t9_w5: "az emberi", t9_w6: "szövegeket.", t9_w7: "",
    t10_title: "Chatbotok", t10_text: "A chatbotok olyan programok, amelyek szövegesen vagy szóban kommunikálnak a felhasználókkal.", t10_inst: "Jelöld meg a helyes szót:", t10_h1: "Digitális tanácsadók.", t10_h2: "Beszélgetés.", t10_q: "Melyik MI technikát használják főleg a modern chatbotok?", t10_qa: "NLP", t10_qb: "Képfeldolgozás", t10_qc: "Hardver", t10_qd: "Kémia",
    t10_tk1: "A chatbot", t10_tk2: "automatikusan", t10_tk3: "válaszol", t10_tk4: "a feltett", t10_tk5: "kérdésekre.", t10_tk6: "",
    t11_title: "Szentiment elemzés", t11_text: "A MI fel tudja ismerni, hogy egy szöveg pozitív, negatív vagy semleges hangvételű-e.", t11_inst: "Párosítsd össze:", t11_h1: "Érzések a szövegben.", t11_h2: "Hangulat felismerése.", t11_q: "Mit elemez a szentiment elemzés?", t11_qa: "Hangulat/Érzések", t11_qb: "Szószám", t11_qc: "Fájlméret", t11_qd: "Betűtípus",
    t11_l1: "Szuper!", t11_r1: "Pozitív", t11_l2: "Rossz.", t11_r2: "Negatív", t11_l3: "Oké.", t11_r3: "Semleges",
    t12_title: "Beszédfelismerés", t12_text: "A MI a kimondott szavakat digitális szöveggé alakítja (Speech-to-Text).", t12_inst: "Töltsd ki a hiányt:", t12_h1: "Hallás und írás.", t12_h2: "Hangból szöveg.", t12_q: "Hogy hívják a hang szöveggé alakítását?", t12_qa: "Beszédfelismerés", t12_qb: "Nyomtatás", t12_qc: "Éneklés", t12_qd: "Törlés",
    t12_sent: "A MI a hangból ___ készít.", t12_qa2: "szöveget", t12_qb2: "filmet", t12_qc2: "kávét", t12_qd2: "robotot",
    t13_title: "MI-fordítás", t13_text: "A modern fordítók neurális hálókat használnak a szövegek pontos átültetésére.", t13_inst: "Válogasd szét:", t13_h1: "Nyelvek keverése.", t13_h2: "Jobb, mint a régi eszközök.", t13_q: "Miért olyan jó ma a MI-fordítás?", t13_qa: "Kontextus értése", t13_qb: "Több áram", t13_qc: "Nagyobb képernyő", t13_qd: "Véletlen",
    t13_bl1: "MI eszköz", t13_bl2: "Nem az", t13_i1: "DeepL", t13_i2: "Kalapács", t13_i3: "Google Translate", t13_i4: "Ceruza",
    t14_title: "Virtuális asszisztensek", t14_text: "Siri, Alexa und a Google Assistant MI-t használnak a hangparancsok végrehajtásához.", t14_inst: "Tedd sorrendbe a szavakat:", t14_h1: "Mindennapi segítők.", t14_h2: "Hangvezérlés.", t14_q: "Mi az Alexa?", t14_qa: "Virtuális asszisztens", t14_qb: "Egy oprendszer", t14_qc: "Hardvergyártó", t14_qd: "Játékautó",
    t14_w1: "Az", t14_w2: "asszisztensek", t14_w3: "MI-t", t14_w4: "használnak", t14_w5: "a beszéd", t14_w6: "megértéséhez.", t14_w7: "",
    t15_title: "Szintetikus beszéd", t15_text: "A MI élethű hangokat tud generálni szövegből (Text-to-Speech).", t15_inst: "Jelöld meg a helyes szót:", t15_h1: "Beszél a gép.", t15_h2: "Mesterséges hang.", t15_q: "Hogy hívják a beszéd előállítását?", t15_qa: "Beszédszintézis", t15_qb: "Kórus", t15_qc: "Csend", t15_qd: "Visszhang",
    t15_tk1: "A MI", t15_tk2: "képes", t15_tk3: "a szöveget", t15_tk4: "beszéddé", t15_tk5: "alakítani.", t15_tk6: ""
  },
  ro: {
    explorer_title: "Insula AI 2: Rețele neurale și viziune",
    t1_title: "Rețele neurale", t1_text: "Rețelele neurale artificiale sunt inspirate de creierul uman și constau în straturi de 'neuroni' conectați.", t1_inst: "Potrivește perechile:", t1_h1: "Inspirație din creier.", t1_h2: "Structură.", t1_q: "De ce sunt inspirate rețelele neurale?", t1_qa: "Creierul uman", t1_qb: "O pânză de păianjen", t1_qc: "O rețea de autostrăzi", t1_qd: "Internet",
    t1_l1: "Strat", t1_r1: "Layer", t1_l2: "Conexiune", t1_r2: "Pondere", t1_l3: "Element", t1_r3: "Neuron",
    t2_title: "Neuronul artificial", t2_text: "Un neuron primește semnale, le procesează și transmite un rezultat dacă se atinge un prag.", t2_inst: "Completează spațiul liber:", t2_h1: "Intrare -> Procesare -> Ieșire.", t2_h2: "Ca în creier.", t2_q: "Ce face un neuron artificial cu semnalele de intrare?", t2_qa: "Ponderează și sumează", t2_qb: "Șterge", t2_qc: "Imprimă", t2_qd: "Salvează",
    t2_sent: "Un neuron are intrări, o ___ și o ieșire.", t2_qa2: "funcție de activare", t2_qb2: "tastatură", t2_qc2: "baterie", t2_qd2: "mouse",
    t3_title: "Straturi (Layers)", t3_text: "O rețea are de obicei un strat de intrare, mai multe straturi ascunse și un strat de ieșire.", t3_inst: "Sortează în găleți:", t3_h1: "Față, mijloc, spate.", t3_h2: "Unde curg datele?", t3_q: "Cum se numesc straturile dintre input și output?", t3_qa: "Hidden Layers", t3_qb: "Straturi medii", t3_qc: "Straturi secrete", t3_qd: "Straturi buffer",
    t3_bl1: "Vizibil", t3_bl2: "Ascuns", t3_i1: "Input Layer", t3_i2: "Hidden Layer 1", t3_i3: "Output Layer", t3_i4: "Hidden Layer 2",
    t4_title: "Deep Learning", t4_text: "Deep Learning se referă la rețele neurale cu foarte multe straturi ascunse.", t4_inst: "Pune cuvintele în ordine:", t4_h1: "Rețele adânci.", t4_h2: "Multe straturi.", t4_q: "Ce înseamnă 'Deep' în Deep Learning?", t4_qa: "Multe straturi", t4_qb: "În mare", t4_qc: "Foarte greu", t4_qd: "Întunecat",
    t4_w1: "Deep", t4_w2: "Learning", t4_w3: "folosește", t4_w4: "multe", t4_w5: "straturi", t4_w6: "de", t4_w7: "neuroni.",
    t5_title: "Computer Vision", t5_text: "Computer Vision permite mașinilor să 'vadă' și să înțeleagă imagini și videoclipuri.", t5_inst: "Evidențiază cuvântul corect:", t5_h1: "Vedere cu camere.", t5_h2: "Înțelegerea imaginilor.", t5_q: "Care domeniu AI se ocupă cu procesarea imaginilor?", t5_qa: "Computer Vision", t5_qb: "NLP", t5_qc: "Robotică", t5_qd: "Baze de date",
    t5_tk1: "Computer", t5_tk2: "Vision", t5_tk3: "recunoaște", t5_tk4: "obiecte", t5_tk5: "în", t5_tk6: "imagini.",
    t6_title: "Recunoașterea imaginilor", t6_text: "AI poate învăța să identifice obiecte precum mașini, pietoni sau animale în fotografii.", t6_inst: "Potrivește perechile:", t6_h1: "Ce este asta?", t6_h2: "Categorisire.", t6_q: "Care este scopul recunoașterii imaginilor?", t6_qa: "Clasificare obiecte", t6_qb: "Ștergere imagini", t6_qc: "Pictare imagini", t6_qd: "Imprimare",
    t6_l1: "Foto", t6_r1: "Date pixeli", t6_l2: "AI", t6_r2: "Recunoaștere", t6_l3: "Etichetă", t6_r3: "Pisică",
    t7_title: "Detectarea obiectelor", t7_text: "Spre deosebire de clasificare, detectarea obiectelor găsește și locația (box) obiectului în imagine.", t7_inst: "Completează spațiul liber:", t7_h1: "Unde este?", t7_h2: "Desenare cadru.", t7_q: "Ce marchează AI des în detectarea obiectelor?", t7_qa: "Bounding Box", t7_qb: "O cruce", t7_qc: "Un punct", t7_qd: "Nimic",
    t7_sent: "Detectarea obiectelor desenează un ___ în jurul lucrului.", t7_qa2: "cadru", t7_qb2: "cerc", t7_qc2: "linie", t7_qd2: "punct",
    t8_title: "Recunoaștere facială", t8_text: "AI poate identifica fețe analizând caracteristici precum distanța dintre ochi sau forma nasului.", t8_inst: "Sortează în găleți:", t8_h1: "Biometrie.", t8_h2: "Securitate vs. Analiză.", t8_q: "Unde se folosește des recunoașterea facială?", t8_qa: "Deblocare smartphone", t8_qb: "La gătit", t8_qc: "În timpul somnului", t8_qd: "Ascultat muzică",
    t8_bl1: "Caracteristică", t8_bl2: "Nu e", t8_i1: "Distanță ochi", t8_i2: "Mărime pantof", t8_i3: "Formă nas", t8_i4: "Culoare preferată",
    t9_title: "NLP", t9_text: "Procesarea Limbajului Natural (NLP) ajută computerele să înțeleagă și să genereze limbaj uman.", t9_inst: "Pune cuvintele în ordine:", t9_h1: "Vorbire și înțelegere.", t9_h2: "Text-AI.", t9_q: "Ce înseamnă NLP?", t9_qa: "Natural Language Processing", t9_qb: "New Laser Printer", t9_qc: "Next Level Programming", t9_qd: "Net-Lern-Program",
    t9_w1: "NLP", t9_w2: "ajută", t9_w3: "mașinile", t9_w4: "să", t9_w5: "proceseze", t9_w6: "texte", t9_w7: "umane.",
    t10_title: "Chatboți", t10_text: "Chatboții sunt programe care pot comunica cu utilizatorii prin text sau voce.", t10_inst: "Evidențiază cuvântul corect:", t10_h1: "Consilieri digitali.", t10_h2: "Conversație.", t10_q: "Ce tehnică AI folosesc în principal chatboții moderni?", t10_qa: "NLP", t10_qb: "Procesare imagini", t10_qc: "Hardware", t10_qd: "Chimie",
    t10_tk1: "Un", t10_tk2: "chatbot", t10_tk3: "răspunde", t10_tk4: "automat", t10_tk5: "la", t10_tk6: "întrebări.",
    t11_title: "Analiza sentimentelor", t11_text: "AI poate recunoaște dacă un text este scris într-un mod pozitiv, negativ sau neutru.", t11_inst: "Potrivește perechile:", t11_h1: "Sentimente în text.", t11_h2: "Recunoaștere stare.", t11_q: "Ce analizează analiza sentimentelor?", t11_qa: "Starea/Sentimente", t11_qb: "Nr. cuvinte", t11_qc: "Mărime fișier", t11_qd: "Tip font",
    t11_l1: "Super!", t11_r1: "Pozitiv", t11_l2: "Rău.", t11_r2: "Negativ", t11_l3: "Ok.", t11_r3: "Neutru",
    t12_title: "Recunoaștere vocală", t12_text: "AI convertește cuvintele vorbite în text digital (Speech-to-Text).", t12_inst: "Completează spațiul liber:", t12_h1: "Auzire și scriere.", t12_h2: "Audio în text.", t12_q: "Cum se numește conversia vocii în text?", t12_qa: "Recunoaștere vocală", t12_qb: "Imprimare", t12_qc: "Cântat", t12_qd: "Ștergere",
    t12_sent: "AI transformă audio întrun ___.", t12_qa2: "text", t12_qb2: "film", t12_qc2: "cafea", t12_qd2: "robot",
    t13_title: "Traducere AI", t13_text: "Traducătorii moderni folosesc rețele neurale pentru a traduce textele cursiv.", t13_inst: "Sortează în găleți:", t13_h1: "Amestecare limbi.", t13_h2: "Mai bune decât vechile unelte.", t13_q: "De ce e atât de bună traducerea AI azi?", t13_qa: "Înțelegerea contextului", t13_qb: "Mai mult curent", t13_qc: "Ecrane mai mari", t13_qd: "Hazard",
    t13_bl1: "Unealtă AI", t13_bl2: "Nu e", t13_i1: "DeepL", t13_i2: "Ciocan", t13_i3: "Google Translate", t13_i4: "Creion",
    t14_title: "Asistenți virtuali", t14_text: "Siri, Alexa și Google Assistant folosesc AI pentru a executa comenzi vocale.", t14_inst: "Pune cuvintele în ordine:", t14_h1: "Ajutoare zilnice.", t14_h2: "Control vocal.", t14_q: "Ce este Alexa?", t14_qa: "Asistent virtual", t14_qb: "Un OS", t14_qc: "Producător hardware", t14_qd: "Mașină de jucărie",
    t14_w1: "Asistenții", t14_w2: "folosesc", t14_w3: "AI", t14_w4: "pentru", t14_w5: "a înțelege", t14_w6: "comenzi", t14_w7: "vocale.",
    t15_title: "Vorbire sintetică", t15_text: "AI poate genera voci care sună incredibil de real din text (Text-to-Speech).", t15_inst: "Evidențiază cuvântul corect:", t15_h1: "Calculatorul vorbește.", t15_h2: "Voce artificială.", t15_q: "Cum se numește generarea vorbirii?", t15_qa: "Sinteză vocală", t15_qb: "Cor", t15_qc: "Liniște", t15_qd: "Ecou",
    t15_tk1: "AI", t15_tk2: "poate", t15_tk3: "transforma", t15_tk4: "textul", t15_tk5: "în", t15_tk6: "vorbire."
  }
};

export const INFO_K8_I2_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "simple-icon", icon: "🕸️", color: "#3F51B5" },
    interactive: { type: "match-pairs", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", pairs: [{left:"t1_l1",right:"t1_r1"},{left:"t1_l2",right:"t1_r2"},{left:"t1_l3",right:"t1_r3"}] },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" }
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "⚡", color: "#FFEB3B" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" }
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "icon-grid", items: [{emoji:"📥",label:"Input"},{emoji:"📦",label:"Hidden"},{emoji:"📤",label:"Output"}] },
    interactive: { type: "drag-to-bucket", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", buckets: [{id:"b1",label:"t3_bl1"},{id:"b2",label:"t3_bl2"}], items: [{text:"t3_i1",bucketId:"b1"},{text:"t3_i2",bucketId:"b2"},{text:"t3_i3",bucketId:"b1"},{text:"t3_i4",bucketId:"b2"}] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "🧬", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", words: ["t4_w1", "t4_w2", "t4_w3", "t4_w4", "t4_w5", "t4_w6", "t4_w7"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "👁️", color: "#2196F3" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6"].filter(x=>x!==undefined), correctIndices: [0,1] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" }
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "simple-icon", icon: "🖼️", color: "#00BCD4" },
    interactive: { type: "match-pairs", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", pairs: [{left:"t6_l1",right:"t6_r1"},{left:"t6_l2",right:"t6_r2"},{left:"t6_l3",right:"t6_r3"}] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" }
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "🎯", color: "#F44336" },
    interactive: { type: "gap-fill", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", sentence: "t7_sent", choices: ["t7_qa2", "t7_qb2", "t7_qc2", "t7_qd2"], correctIndex: 0 },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" }
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "simple-icon", icon: "👤", color: "#9E9E9E" },
    interactive: { type: "drag-to-bucket", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", buckets: [{id:"b1",label:"t8_bl1"},{id:"b2",label:"t8_bl2"}], items: [{text:"t8_i1",bucketId:"b1"},{text:"t8_i2",bucketId:"b2"},{text:"t8_i3",bucketId:"b1"},{text:"t8_i4",bucketId:"b2"}] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" }
  },
  {
    infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "simple-icon", icon: "💬", color: "#FF9800" },
    interactive: { type: "word-order", instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2", words: ["t9_w1", "t9_w2", "t9_w3", "t9_w4", "t9_w5", "t9_w6", "t9_w7"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t9_q", choices: ["t9_qa", "t9_qb", "t9_qc", "t9_qd"], answer: "t9_qa" }
  },
  {
    infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "simple-icon", icon: "🤖", color: "#607D8B" },
    interactive: { type: "highlight-text", instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2", tokens: ["t10_tk1","t10_tk2","t10_tk3","t10_tk4","t10_tk5","t10_tk6"].filter(x=>x!==undefined), correctIndices: [1] },
    quiz: { question: "t10_q", choices: ["t10_qa", "t10_qb", "t10_qc", "t10_qd"], answer: "t10_qa" }
  },
  {
    infoTitle: "t11_title", infoText: "t11_text",
    svg: { type: "simple-icon", icon: "😊", color: "#FFC107" },
    interactive: { type: "match-pairs", instruction: "t11_inst", hint1: "t11_h1", hint2: "t11_h2", pairs: [{left:"t11_l1",right:"t11_r1"},{left:"t11_l2",right:"t11_r2"},{left:"t11_l3",right:"t11_r3"}] },
    quiz: { question: "t11_q", choices: ["t11_qa", "t11_qb", "t11_qc", "t11_qd"], answer: "t11_qa" }
  },
  {
    infoTitle: "t12_title", infoText: "t12_text",
    svg: { type: "simple-icon", icon: "🎙️", color: "#E91E63" },
    interactive: { type: "gap-fill", instruction: "t12_inst", hint1: "t12_h1", hint2: "t12_h2", sentence: "t12_sent", choices: ["t12_qa2", "t12_qb2", "t12_qc2", "t12_qd2"], correctIndex: 0 },
    quiz: { question: "t12_q", choices: ["t12_qa", "t12_qb", "t12_qc", "t12_qd"], answer: "t12_qa" }
  },
  {
    infoTitle: "t13_title", infoText: "t13_text",
    svg: { type: "icon-grid", items: [{emoji:"🌍",label:"Translation"},{emoji:"📚",label:"Language"}] },
    interactive: { type: "drag-to-bucket", instruction: "t13_inst", hint1: "t13_h1", hint2: "t13_h2", buckets: [{id:"b1",label:"t13_bl1"},{id:"b2",label:"t13_bl2"}], items: [{text:"t13_i1",bucketId:"b1"},{text:"t13_i2",bucketId:"b2"},{text:"t13_i3",bucketId:"b1"},{text:"t13_i4",bucketId:"b2"}] },
    quiz: { question: "t13_q", choices: ["t13_qa", "t13_qb", "t13_qc", "t13_qd"], answer: "t13_qa" }
  },
  {
    infoTitle: "t14_title", infoText: "t14_text",
    svg: { type: "simple-icon", icon: "🔊", color: "#673AB7" },
    interactive: { type: "word-order", instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2", words: ["t14_w1", "t14_w2", "t14_w3", "t14_w4", "t14_w5", "t14_w6", "t14_w7"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t14_q", choices: ["t14_qa", "t14_qb", "t14_qc", "t14_qd"], answer: "t14_qa" }
  },
  {
    infoTitle: "t15_title", infoText: "t15_text",
    svg: { type: "text-bubbles", items: [{text:"ABC",bg:"#00BCD4",color:"#fff",emoji:"🔤"},{text:"Hello",bg:"#FF9800",color:"#fff",emoji:"🗣️"}] },
    interactive: { type: "highlight-text", instruction: "t15_inst", hint1: "t15_h1", hint2: "t15_h2", tokens: ["t15_tk1","t15_tk2","t15_tk3","t15_tk4","t15_tk5","t15_tk6"].filter(x=>x!==undefined), correctIndices: [0,1] },
    quiz: { question: "t15_q", choices: ["t15_qa", "t15_qb", "t15_qc", "t15_qd"], answer: "t15_qa" }
  }
];
