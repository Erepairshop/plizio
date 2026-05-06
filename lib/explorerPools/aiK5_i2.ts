// @ts-nocheck
// lib/explorerPools/aiK5_i2.ts
import type { PoolTopicDef } from "./types";

export const INFO_K5_I2_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "KI-Entdecker: Wie es funktioniert",
    t1_title: "Neuronale Netze", t1_text: "KI-Gehirne bestehen aus neuronalen Netzen, die wie die Nervenzellen in unserem Kopf funktionieren.", t1_inst: "Ordne die Begriffe zu:", t1_h1: "Was ist im Netz?", t1_h2: "Biologie trifft Technik.", t1_q: "Was ahmen neuronale Netze nach?", t1_qa: "Das menschliche Gehirn", t1_qb: "Einen Fußball", t1_qc: "Ein Spinnennetz", t1_qd: "Einen Taschenrechner",
    t1_l1: "Mensch", t1_r1: "Nervenzelle", t1_l2: "KI", t1_r2: "Digitales Neuron", t1_l3: "Verbindung", t1_r3: "Netzwerk",
    t2_title: "KI trainieren", t2_text: "Bevor eine KI schlau wird, muss sie mit Millionen von Beispielen trainiert werden.", t2_inst: "Fülle die Lücke aus:", t2_h1: "Übung macht den Meister.", t2_h2: "Lernen durch Daten.", t2_q: "Wie nennt man den Lernprozess einer KI?", t2_qa: "Training", t2_qb: "Schlafen", t2_qc: "Essen", t2_qd: "Laufen",
    t2_sent: "Die KI braucht viele ___, um zu lernen.", t2_qa2: "Daten", t2_qb2: "Steine", t2_qc2: "Äpfel", t2_qd2: "Socken",
    t3_title: "KI testen", t3_text: "Nach dem Training prüfen wir, ob die KI die richtigen Antworten gibt.", t3_inst: "Sortiere in die Eimer:", t3_h1: "Ist das richtig?", t3_h2: "Fehler finden.", t3_q: "Warum testen wir eine KI?", t3_qa: "Um Fehler zu finden", t3_qb: "Weil uns langweilig ist", t3_qc: "Damit sie schneller wird", t3_qd: "Um Strom zu sparen",
    t3_bl1: "Erfolg", t3_bl2: "Fehler", t3_i1: "Richtige Antwort", t3_i2: "Falsches Bild", t3_i3: "Gute Vorhersage", t3_i4: "Verwechslung",
    t4_title: "KI-Fehler", t4_text: "KI ist nicht perfekt. Wenn sie schlechte Daten bekommt, macht sie Fehler (Bias).", t4_inst: "Bringe die Wörter in Ordnung:", t4_h1: "Nicht perfekt.", t4_h2: "Vorsicht bei Daten.", t4_q: "Was passiert bei schlechten Trainingsdaten?", t4_qa: "Die KI macht Fehler", t4_qb: "Die KI wird müde", t4_qc: "Der PC schmilzt", t4_qd: "Nichts passiert",
    t4_w1: "Schlechte", t4_w2: "Daten", t4_w3: "führen", t4_w4: "zu", t4_w5: "Fehlern", t4_w6: "in", t4_w7: "der KI.",
    t5_title: "KI-Kunst", t5_text: "KI kann aus Textbeschreibungen völlig neue Bilder malen.", t5_inst: "Markiere das richtige Wort:", t5_h1: "Malen mit Worten.", t5_h2: "Kreative Computer.", t5_q: "Was kann eine KI-Kunst-Software?", t5_qa: "Bilder generieren", t5_qb: "Wände streichen", t5_qc: "Stifte spitzen", t5_qd: "Papier falten",
    t5_tk1: "Die", t5_tk2: "KI", t5_tk3: "erstellt", t5_tk4: "ein", t5_tk5: "neues", t5_tk6: "Kunstwerk", t5_tk7: "für uns.",
    t6_title: "KI-Musik", t6_text: "Computer können eigene Melodien und Lieder komponieren.", t6_inst: "Ordne die Paare zu:", t6_h1: "Töne und Rhythmus.", t6_h2: "Digitale Komponisten.", t6_q: "Was nutzt KI zum Komponieren?", t6_qa: "Noten und Rhythmen", t6_qb: "Einen Kochtopf", t6_qc: "Eine Schere", t6_qd: "Einen Besen",
    t6_l1: "Melodie", t6_r1: "Tonfolge", t6_l2: "KI", t6_r2: "Komponist", t6_l3: "Hörer", t6_r3: "Mensch",
    t7_title: "Sensoren", t7_text: "Sensoren sind die 'Sinne' der KI, wie Kameras (Augen) oder Mikrofone (Ohren).", t7_inst: "Fülle die Lücke aus:", t7_h1: "Wie fühlt die KI?", t7_h2: "Daten von außen.", t7_q: "Welcher Sensor entspricht dem menschlichen Auge?", t7_qa: "Kamera", t7_qb: "Lautsprecher", t7_qc: "Tastatur", t7_qd: "Batterie",
    t7_sent: "Ein Roboter nutzt ___, um Hindernisse zu fühlen.", t7_qa2: "Sensoren", t7_qb2: "Zucker", t7_qc2: "Papier", t7_qd2: "Licht",
    t8_title: "Rechenleistung", t8_text: "KI braucht sehr schnelle Computerchips (GPUs), um viele Daten gleichzeitig zu verarbeiten.", t8_inst: "Sortiere in die Eimer:", t8_h1: "Schnell oder langsam?", t8_h2: "Power für die KI.", t8_q: "Welches Bauteil ist wichtig für KI?", t8_qa: "Grafikprozessor (GPU)", t8_qb: "Das Gehäuse", t8_qc: "Das Mauskabel", t8_qd: "Die Leertaste",
    t8_bl1: "KI-Power", t8_bl2: "Normaler PC", t8_i1: "GPU", t8_i2: "Diskettenlaufwerk", t8_i3: "Supercomputer", t8_i4: "Alte Maus",
    t9_title: "Internet der Dinge (IoT)", t9_text: "Wenn Geräte wie Kühlschränke oder Uhren vernetzt sind, kann KI sie steuern.", t9_inst: "Bringe die Wörter in Ordnung:", t9_h1: "Alles ist verbunden.", t9_h2: "Vernetzte Welt.", t9_q: "Wofür steht IoT?", t9_qa: "Internet of Things", t9_qb: "Igel ohne Tasche", t9_qc: "Immer oben tanzen", t9_qd: "Information ohne Text",
    t9_w1: "Viele", t9_w2: "Geräte", t9_w3: "sind", t9_w4: "heute", t9_w5: "mit", t9_w6: "dem", t9_w7: "Internet verbunden.",
    t10_title: "Mustererkennung", t10_text: "KI ist ein Profi darin, Muster in großen Datenmengen zu finden.", t10_inst: "Markiere das richtige Wort:", t10_h1: "Such das Muster!", t10_h2: "Strukturen finden.", t10_q: "Was findet die KI in Daten?", t10_qa: "Muster", t10_qb: "Bonbons", t10_qc: "Staub", t10_qd: "Geld",
    t10_tk1: "Die", t10_tk2: "KI", t10_tk3: "erkennt", t10_tk4: "ein", t10_tk5: "Muster", t10_tk6: "in", t10_tk7: "den Zahlen.",
    t11_title: "Textvorhersage", t11_text: "Beim Tippen am Handy schlägt dir die KI das nächste Wort vor.", t11_inst: "Ordne die Paare zu:", t11_h1: "Was schreibst du?", t11_h2: "Schneller tippen.", t11_q: "Was hilft beim schnellen Schreiben?", t11_qa: "Textvorhersage", t11_qb: "Der Akku", t11_qc: "Die Kamera", t11_qd: "Der Flugmodus",
    t11_l1: "Ich tippe", t11_r1: "Ha", t11_l2: "KI schlägt vor", t11_r2: "Hallo", t11_l3: "Ziel", t11_r3: "Schnelligkeit",
    t12_title: "Gesichtsfilter", t12_text: "KI erkennt dein Gesicht und legt lustige Masken oder Effekte darüber.", t12_inst: "Fülle die Lücke aus:", t12_h1: "Hundohren oder Brillen.", t12_h2: "Effekte in Echtzeit.", t12_q: "Wie funktionieren Snapchat-Filter?", t12_qa: "Durch KI-Gesichtserkennung", t12_qb: "Durch Zauberei", t12_qc: "Durch Aufkleber auf dem Glas", t12_qd: "Gar nicht",
    t12_sent: "Ein Filter legt eine digitale ___ über dein Gesicht.", t12_qa2: "Maske", t12_qb2: "Torte", t12_qc2: "Decke", t12_qd2: "Wand",
    t13_title: "Virtuelle Realität (VR)", t13_text: "KI berechnet in VR-Brillen die Umgebung, damit alles echt aussieht.", t13_inst: "Sortiere in die Eimer:", t3_h1: "Echt oder VR?", t3_h2: "Digitale Welten.", t13_q: "Was macht VR?", t13_qa: "Erzeugt digitale Welten", t13_qb: "Kocht Kaffee", t13_qc: "Putzt Schuhe", t13_qd: "Macht Hausaufgaben",
    t13_bl1: "Virtual Reality", t13_bl2: "Echte Welt", t13_i1: "VR-Brille", t13_i2: "Bäume im Park", t13_i3: "3D-Avatar", t13_i4: "Echter Regen",
    t14_title: "Deepfakes", t14_text: "Deepfakes sind täuschend echte Videos, die von KI erstellt wurden. Man muss vorsichtig sein!", t14_inst: "Bringe die Wörter in Ordnung:", t14_h1: "Echt oder Fake?", t14_h2: "Nicht alles glauben.", t14_q: "Was ist ein Deepfake?", t14_qa: "Ein gefälschtes KI-Video", t14_qb: "Ein leckerer Kuchen", t14_qc: "Ein Computerspiel", t14_qd: "Ein neuer Tanz",
    t14_w1: "Man", t14_w2: "sollte", t14_w3: "KI-Videos", t14_w4: "immer", t14_w5: "kritisch", t14_w6: "hinterfragen.", t14_w7: "",
    t15_title: "Echtzeit-Übersetzung", t15_text: "KI kann gesprochene Sprache sofort in eine andere Sprache umwandeln.", t15_inst: "Markiere das richtige Wort:", t15_h1: "Hören und verstehen.", t15_h2: "Dolmetscher-KI.", t15_q: "Was kann eine Dolmetscher-App?", t15_qa: "Gesprochenes übersetzen", t15_qb: "Das Handy aufladen", t15_qc: "Fotos sortieren", t15_qd: "Spiele löschen",
    t15_tk1: "KI", t15_tk2: "übersetzt", t15_tk3: "unser", t15_tk4: "Gespräch", t15_tk5: "sofort", t15_tk6: "für", t15_tk7: "andere."
  },
  en: {
    explorer_title: "AI Explorer: How It Works",
    t1_title: "Neural Networks", t1_text: "AI brains consist of neural networks that function like the nerve cells in our heads.", t1_inst: "Match the terms:", t1_h1: "What's in the net?", t1_h2: "Biology meets tech.", t1_q: "What do neural networks mimic?", t1_qa: "The human brain", t1_qb: "A football", t1_qc: "A spider web", t1_qd: "A calculator",
    t1_l1: "Human", t1_r1: "Nerve cell", t1_l2: "AI", t1_r2: "Digital neuron", t1_l3: "Connection", t1_r3: "Network",
    t2_title: "Training AI", t2_text: "Before an AI becomes smart, it must be trained with millions of examples.", t2_inst: "Fill in the blank:", t2_h1: "Practice makes perfect.", t2_h2: "Learning through data.", t2_q: "What is the learning process of an AI called?", t2_qa: "Training", t2_qb: "Sleeping", t2_qc: "Eating", t2_qd: "Running",
    t2_sent: "The AI needs many ___ to learn.", t2_qa2: "data", t2_qb2: "stones", t2_qc2: "apples", t2_qd2: "socks",
    t3_title: "Testing AI", t3_text: "After training, we check whether the AI gives the correct answers.", t3_inst: "Sort into buckets:", t3_h1: "Is this correct?", t3_h2: "Finding errors.", t3_q: "Why do we test an AI?", t3_qa: "To find errors", t3_qb: "Because we are bored", t3_qc: "To make it faster", t3_qd: "To save power",
    t3_bl1: "Success", t3_bl2: "Error", t3_i1: "Correct answer", t3_i2: "Wrong image", t3_i3: "Good prediction", t3_i4: "Confusion",
    t4_title: "AI Errors", t4_text: "AI is not perfect. If it gets bad data, it makes mistakes (bias).", t4_inst: "Put the words in order:", t4_h1: "Not perfect.", t4_h2: "Be careful with data.", t4_q: "What happens with poor training data?", t4_qa: "The AI makes mistakes", t4_qb: "The AI gets tired", t4_qc: "The PC melts", t4_qd: "Nothing happens",
    t4_w1: "Bad", t4_w2: "data", t4_w3: "leads", t4_w4: "to", t4_w5: "errors", t4_w6: "in", t4_w7: "the AI.",
    t5_title: "AI Art", t5_text: "AI can paint completely new images from text descriptions.", t5_inst: "Highlight the correct word:", t5_h1: "Painting with words.", t5_h2: "Creative computers.", t5_q: "What can AI art software do?", t5_qa: "Generate images", t5_qb: "Paint walls", t5_qc: "Sharpen pencils", t5_qd: "Fold paper",
    t5_tk1: "The", t5_tk2: "AI", t5_tk3: "creates", t5_tk4: "a", t5_tk5: "new", t5_tk6: "artwork", t5_tk7: "for us.",
    t6_title: "AI Music", t6_text: "Computers can compose their own melodies and songs.", t6_inst: "Match the pairs:", t6_h1: "Tones and rhythm.", t6_h2: "Digital composers.", t6_q: "What does AI use to compose?", t6_qa: "Notes and rhythms", t6_qb: "A cooking pot", t6_qc: "Scissors", t6_qd: "A broom",
    t6_l1: "Melody", t6_r1: "Sequence", t6_l2: "AI", t6_r2: "Composer", t6_l3: "Listener", t6_r3: "Human",
    t7_title: "Sensors", t7_text: "Sensors are the 'senses' of the AI, like cameras (eyes) or microphones (ears).", t7_inst: "Fill in the blank:", t7_h1: "How does AI feel?", t7_h2: "Data from outside.", t7_q: "Which sensor corresponds to the human eye?", t7_qa: "Camera", t7_qb: "Speaker", t7_qc: "Keyboard", t7_qd: "Battery",
    t7_sent: "A robot uses ___ to feel obstacles.", t7_qa2: "sensors", t7_qb2: "sugar", t7_qc2: "paper", t7_qd2: "light",
    t8_title: "Processing Power", t8_text: "AI needs very fast computer chips (GPUs) to process a lot of data simultaneously.", t8_inst: "Sort into buckets:", t8_h1: "Fast or slow?", t8_h2: "Power for the AI.", t8_q: "Which component is important for AI?", t8_qa: "Graphics processor (GPU)", t8_qb: "The case", t8_qc: "The mouse cable", t8_qd: "The space bar",
    t8_bl1: "AI Power", t8_bl2: "Normal PC", t8_i1: "GPU", t8_i2: "Floppy drive", t8_i3: "Supercomputer", t8_i4: "Old mouse",
    t9_title: "Internet of Things (IoT)", t9_text: "When devices like fridges or watches are connected, AI can control them.", t9_inst: "Put the words in order:", t9_h1: "Everything is connected.", t9_h2: "Connected world.", t9_q: "What does IoT stand for?", t9_qa: "Internet of Things", t9_qb: "Ice on Top", t9_qc: "Inside our Town", t9_qd: "Idea of Time",
    t9_w1: "Many", t9_w2: "devices", t9_w3: "are", t9_w4: "connected", t9_w5: "to", t9_w6: "the", t9_w7: "internet today.",
    t10_title: "Pattern Recognition", t10_text: "AI is an expert at finding patterns in large amounts of data.", t10_inst: "Highlight the correct word:", t10_h1: "Find the pattern!", t10_h2: "Finding structures.", t10_q: "What does AI find in data?", t10_qa: "Patterns", t10_qb: "Candies", t10_qc: "Dust", t10_qd: "Money",
    t10_tk1: "AI", t10_tk2: "finds", t10_tk3: "a", t10_tk4: "pattern", t10_tk5: "in", t10_tk6: "the", t10_tk7: "numbers.",
    t11_title: "Predictive Text", t11_text: "When typing on your phone, AI suggests the next word to you.", t11_inst: "Match the pairs:", t11_h1: "What are you writing?", t11_h2: "Type faster.", t11_q: "What helps with fast writing?", t11_qa: "Predictive text", t11_qb: "The battery", t11_qc: "The camera", t11_qd: "Flight mode",
    t11_l1: "I type", t11_r1: "He", t11_l2: "AI suggests", t11_r2: "Hello", t11_l3: "Goal", t11_r3: "Speed",
    t12_title: "Face Filters", t12_text: "AI recognizes your face and puts fun masks or effects over it.", t12_inst: "Fill in the blank:", t12_h1: "Dog ears or glasses.", t12_h2: "Real-time effects.", t12_q: "How do face filters work?", t12_qa: "Via AI face recognition", t12_qb: "By magic", t12_qc: "By stickers on the lens", t12_qd: "Not at all",
    t12_sent: "A filter puts a digital ___ over your face.", t12_qa2: "mask", t12_qb2: "cake", t12_qc2: "blanket", t12_qd2: "wall",
    t13_title: "Virtual Reality (VR)", t13_text: "AI calculates the environment in VR goggles so that everything looks real.", t13_inst: "Sort into buckets:", t13_h1: "Real or VR?", t13_h2: "Digital worlds.", t13_q: "What does VR do?", t13_qa: "Creates digital worlds", t13_qb: "Makes coffee", t13_qc: "Cleans shoes", t13_qd: "Does homework",
    t13_bl1: "Virtual Reality", t13_bl2: "Real World", t13_i1: "VR Goggles", t13_i2: "Trees in park", t13_i3: "3D Avatar", t13_i4: "Real rain",
    t14_title: "Deepfakes", t14_text: "Deepfakes are deceptively real videos created by AI. You have to be careful!", t14_inst: "Put the words in order:", t14_h1: "Real or fake?", t14_h2: "Don't believe everything.", t14_q: "What is a deepfake?", t14_qa: "A fake AI video", t14_qb: "A delicious cake", t14_qc: "A computer game", t14_qd: "A new dance",
    t14_w1: "One", t14_w2: "should", t14_w3: "always", t14_w4: "question", t14_w5: "AI", t14_w6: "videos", t14_w7: "critically.",
    t15_title: "Real-time Translation", t15_text: "AI can immediately convert spoken language into another language.", t15_inst: "Highlight the correct word:", t15_h1: "Listen and understand.", t15_h2: "Interpreter AI.", t15_q: "What can an interpreter app do?", t15_qa: "Translate speech", t15_qb: "Charge the phone", t15_qc: "Sort photos", t15_qd: "Delete games",
    t15_tk1: "AI", t15_tk2: "translates", t15_tk3: "our", t15_tk4: "conversation", t15_tk5: "immediately", t15_tk6: "for", t15_tk7: "others."
  },
  hu: {
    explorer_title: "MI Felfedező: Hogyan működik",
    t1_title: "Neurális hálózatok", t1_text: "Az MI-agya neurális hálózatokból áll, amik úgy működnek, mint a fejünkben lévő idegsejtek.", t1_inst: "Párosítsd a fogalmakat:", t1_h1: "Mi van a hálóban?", t1_h2: "Biológia és technika.", t1_q: "Mit utánoznak a neurális hálózatok?", t1_qa: "Az emberi agyat", t1_qb: "Egy focilabdát", t1_qc: "Pókhálót", t1_qd: "Számológépet",
    t1_l1: "Ember", t1_r1: "Idegsejt", t1_l2: "MI", t1_r2: "Digitális neuron", t1_l3: "Kapcsolat", t1_r3: "Hálózat",
    t2_title: "MI tanítása", t2_text: "Mielőtt az MI okos lenne, több millió példával kell tanítani.", t2_inst: "Töltsd ki a hiányt:", t2_h1: "Gyakorlat teszi a mestert.", t2_h2: "Tanulás adatokkal.", t2_q: "Hogy hívják az MI tanulási folyamatát?", t2_qa: "Tanítás", t2_qb: "Alvás", t2_qc: "Evés", t2_qd: "Futás",
    t2_sent: "Az MI-nek sok ___ van szüksége a tanuláshoz.", t2_qa2: "adatra", t2_qb2: "kőre", t2_qc2: "almára", t2_qd2: "zoknira",
    t3_title: "MI tesztelése", t3_text: "Tanítás után ellenőrizzük, hogy az MI helyes válaszokat ad-e.", t3_inst: "Válogasd szét:", t3_h1: "Helyes ez?", t3_h2: "Hibák keresése.", t3_q: "Miért teszteljük az MI-t?", t3_qa: "Hogy hibákat találjunk", t3_qb: "Mert unatkozunk", t3_qc: "Hogy gyorsabb legyen", t3_qd: "Hogy áramot spóroljunk",
    t3_bl1: "Siker", t3_bl2: "Hiba", t3_i1: "Helyes válasz", t3_i2: "Rossz kép", t3_i3: "Jó jóslat", t3_i4: "Tévedés",
    t4_title: "MI hibák", t4_text: "Az MI nem tökéletes. Ha rossz adatokat kap, hibázni fog (elfogultság).", t4_inst: "Tedd sorrendbe a szavakat:", t4_h1: "Nem tökéletes.", t4_h2: "Vigyázz az adatokkal.", t4_q: "Mi történik rossz tanítóadatok esetén?", t4_qa: "Az MI hibázik", t4_qb: "Az MI elfárad", t4_qc: "Elolvad a gép", t4_qd: "Semmi sem történik",
    t4_w1: "A rossz", t4_w2: "adatok", t4_w3: "hibákhoz", t4_w4: "vezetnek", t4_w5: "az", t4_w6: "MI", t4_w7: "működésében.",
    t5_title: "MI művészet", t5_text: "Az MI képes teljesen új képeket festeni szöveges leírás alapján.", t5_inst: "Jelöld meg a helyes szót:", t5_h1: "Festés szavakkal.", t5_h2: "Kreatív számítógépek.", t5_q: "Mire képes egy MI művészeti szoftver?", t5_qa: "Képek generálására", t5_qb: "Falfestésre", t5_qc: "Ceruzahegyezésre", t5_qd: "Papírhajtogatásra",
    t5_tk1: "Az", t5_tk2: "MI", t5_tk3: "létrehoz", t5_tk4: "egy", t5_tk5: "új", t5_tk6: "alkotást", t5_tk7: "nekünk.",
    t6_title: "MI zene", t6_text: "A számítógépek képesek saját dallamokat és dalokat komponálni.", t6_inst: "Párosítsd össze:", t6_h1: "Hangok és ritmus.", t6_h2: "Digitális zeneszerzők.", t6_q: "Mit használ az MI a zeneszerzéshez?", t6_qa: "Hangjegyeket és ritmust", t6_qb: "Főzőedényt", t6_qc: "Ollót", t6_qd: "Seprűt",
    t6_l1: "Dallam", t6_r1: "Hangsor", t6_l2: "MI", t6_r2: "Zeneszerző", t6_l3: "Hallgató", t6_r3: "Ember",
    t7_title: "Szenzorok", t7_text: "A szenzorok az MI 'érzékszervei', mint a kamerák (szemek) vagy mikrofonok (fülek).", t7_inst: "Töltsd ki a hiányt:", t7_h1: "Hogyan érez az MI?", t7_h2: "Külső adatok.", t7_q: "Melyik szenzor felel meg az emberi szemnek?", t7_qa: "Kamera", t7_qb: "Hangszóró", t7_qc: "Billentyűzet", t7_qd: "Akku",
    t7_sent: "A robot ___ használ az akadályok érzékeléséhez.", t7_qa2: "szenzorokat", t7_qb2: "cukrot", t7_qc2: "papírt", t7_qd2: "fényt",
    t8_title: "Számítási teljesítmény", t8_text: "Az MI-nek nagyon gyors chipekre (GPU) van szüksége sok adat feldolgozásához.", t8_inst: "Válogasd szét:", t8_h1: "Gyors vagy lassú?", t8_h2: "Erő az MI-nek.", t8_q: "Melyik alkatrész fontos az MI-nek?", t8_qa: "Grafikus processzor (GPU)", t8_qb: "A számítógépház", t8_qc: "Az egérkábel", t8_qd: "A szóköz",
    t8_bl1: "MI-erő", t8_bl2: "Sima gép", t8_i1: "GPU", t8_i2: "Floppy meghajtó", t8_i3: "Szuper-számítógép", t8_i4: "Régi egér",
    t9_title: "Dolgok internete (IoT)", t9_text: "Ha az eszközök (óra, hűtő) hálózatba vannak kötve, az MI tudja irányítani őket.", t9_inst: "Tedd sorrendbe a szavakat:", t9_h1: "Minden összekapcsolódik.", t9_h2: "Összekötött világ.", t9_q: "Mit jelent az IoT?", t9_qa: "Internet of Things", t9_qb: "Iskolai okos tábla", t9_qc: "Ingyen online tánc", t9_qd: "Időjárás okos telefonon",
    t9_w1: "Sok", t9_w2: "eszköz", t9_w3: "kapcsolódik", t9_w4: "ma", t9_w5: "már", t9_w6: "az", t9_w7: "internethez.",
    t10_title: "Mintafelismerés", t10_text: "Az MI profi abban, hogy mintákat találjon nagy adatmennyiségekben.", t10_inst: "Jelöld meg a helyes szót:", t10_h1: "Keresd a mintát!", t10_h2: "Struktúrák keresése.", t10_q: "Mit talál az MI az adatokban?", t10_qa: "Mintákat", t10_qb: "Cukorkát", t10_qc: "Port", t10_qd: "Pénzt",
    t10_tk1: "Az", t10_tk2: "MI", t10_tk3: "felismeri", t10_tk4: "a", t10_tk5: "mintát", t10_tk6: "a", t10_tk7: "számokban.",
    t11_title: "Prediktív szöveg", t11_text: "Mobilozás közben az MI kitalálja és felajánlja a következő szót.", t11_inst: "Párosítsd össze:", t11_h1: "Mit írsz?", t11_h2: "Gyorsabb gépelés.", t11_q: "Mi segít a gyorsabb írásban?", t11_qa: "Prediktív szöveg", t11_qb: "Az akkumulátor", t11_qc: "A kamera", t11_qd: "Repülő üzemmód",
    t11_l1: "Gépelek", t11_r1: "Sz", t11_l2: "MI ajánlja", t11_r2: "Szia", t11_l3: "Cél", t11_r3: "Gyorsaság",
    t12_title: "Arcszűrők", t12_text: "Az MI felismeri az arcodat és vicces maszkokat vagy effekteket tesz rá.", t12_inst: "Töltsd ki a hiányt:", t12_h1: "Kutyfülek vagy szemüveg.", t12_h2: "Effektek valós időben.", t12_q: "Hogyan működnek az arcszűrők?", t12_qa: "MI arcfelismeréssel", t12_qb: "Varázslattal", t12_qc: "Matricával a lencsén", t12_qd: "Sehogy",
    t12_sent: "A szűrő egy digitális ___ tesz az arcodra.", t12_qa2: "maszkot", t12_qb2: "tortát", t12_qc2: "takarót", t12_qd2: "falat",
    t13_title: "Virtuális valóság (VR)", t13_text: "Az MI számolja ki a VR környezetet, hogy minden valódinak tűnjön.", t13_inst: "Válogasd szét:", t13_h1: "Valódi vagy VR?", t13_h2: "Digitális világok.", t13_q: "Mit csinál a VR?", t13_qa: "Digitális világot teremt", t13_qb: "Kávét főz", t13_qc: "Cipőt pucol", t13_qd: "Házit ír",
    t13_bl1: "Virtuális valóság", t13_bl2: "Valódi világ", t13_i1: "VR szemüveg", t13_i2: "Fák a parkban", t13_i3: "3D Avatar", t13_i4: "Igazi eső",
    t14_title: "Deepfakes", t14_text: "A deepfake-ek megtévesztően valódi, MI által készített videók. Óvatosnak kell lenni!", t14_inst: "Tedd sorrendbe a szavakat:", t14_h1: "Igazi vagy hamis?", t14_h2: "Ne higgy el mindent.", t14_q: "Mi az a deepfake?", t14_qa: "Hamis MI videó", t14_qb: "Egy finom süti", t14_qc: "Egy számítógépes játék", t14_qd: "Egy új tánc",
    t14_w1: "Mindig", t14_w2: "kritikusan", t14_w3: "kell", t14_w4: "figyelni", t14_w5: "az", t14_w6: "MI", t14_w7: "videókat.",
    t15_title: "Valós idejű fordítás", t15_text: "Az MI képes az elhangzott beszédet azonnal más nyelvre fordítani.", t15_inst: "Jelöld meg a helyes szót:", t15_h1: "Hallani és érteni.", t15_h2: "Tolmács MI.", t15_q: "Mire képes egy tolmács app?", t15_qa: "A beszéd fordítására", t15_qb: "A telefon töltésére", t15_qc: "Fotók válogatására", t15_qd: "Játékok törlésére",
    t15_tk1: "Az", t15_tk2: "MI", t15_tk3: "azonnal", t15_tk4: "lefordítja", t15_tk5: "a", t15_tk6: "beszélgetést", t15_tk7: "nekünk."
  },
  ro: {
    explorer_title: "Explorator IA: Cum funcționează",
    t1_title: "Rețele neuronale", t1_text: "Creierele IA constau în rețele neuronale care funcționează ca celulele nervoase din capul nostru.", t1_inst: "Potrivește termenii:", t1_h1: "Ce este în rețea?", t1_h2: "Biologia întâlnește tehnologia.", t1_q: "Ce imită rețelele neuronale?", t1_qa: "Creierul uman", t1_qb: "O minge de fotbal", t1_qc: "O pânză de păianjen", t1_qd: "Un calculator",
    t1_l1: "Om", t1_r1: "Celulă nervoasă", t1_l2: "IA", t1_r2: "Neuron digital", t1_l3: "Conexiune", t1_r3: "Rețea",
    t2_title: "Antrenarea IA", t2_text: "Înainte ca o IA să devină inteligentă, ea trebuie antrenată cu milioane de exemple.", t2_inst: "Completează spațiul liber:", t2_h1: "Repetiția e mama învățăturii.", t2_h2: "Învățare prin date.", t2_q: "Cum se numește procesul de învățare al unei IA?", t2_qa: "Antrenare", t2_qb: "Dormit", t2_qc: "Mâncat", t2_qd: "Alergat",
    t2_sent: "IA are nevoie de multe ___ pentru a învăța.", t2_qa2: "date", t2_qb2: "pietre", t2_qc2: "mere", t2_qd2: "șosete",
    t3_title: "Testarea IA", t3_text: "După antrenament, verificăm dacă IA oferă răspunsurile corecte.", t3_inst: "Sortează în găleți:", t3_h1: "Este corect?", t3_h2: "Găsirea erorilor.", t3_q: "De ce testăm o IA?", t3_qa: "Pentru a găsi erori", t3_qb: "Pentru că ne plictisim", t3_qc: "Pentru a o face mai rapidă", t3_qd: "Pentru a economisi curent",
    t3_bl1: "Succes", t3_bl2: "Eroare", t3_i1: "Răspuns corect", t3_i2: "Imagine greșită", t3_i3: "Predicție bună", t3_i4: "Confuzie",
    t4_title: "Erori IA", t4_text: "IA nu este perfectă. Dacă primește date proaste, face greșeli (bias).", t4_inst: "Pune cuvintele în ordine:", t4_h1: "Nu e perfectă.", t4_h2: "Atenție la date.", t4_q: "Ce se întâmplă cu date de antrenament proaste?", t4_qa: "IA face greșeli", t4_qb: "IA obosește", t4_qc: "PC-ul se topește", t4_qd: "Nu se întâmplă nimic",
    t4_w1: "Datele", t4_w2: "proaste", t4_w3: "duc", t4_w4: "la", t4_w5: "erori", t4_w6: "în", t4_w7: "sistemul IA.",
    t5_title: "Artă IA", t5_text: "IA poate picta imagini complet noi din descrieri textuale.", t5_inst: "Evidențiază cuvântul corect:", t5_h1: "Pictură cu cuvinte.", t5_h2: "Calculatoare creative.", t5_q: "Ce poate face software-ul de artă IA?", t5_qa: "Generează imagini", t5_qb: "Vopsește pereți", t5_qc: "Ascute creioane", t5_qd: "Împăturește hârtie",
    t5_tk1: "IA", t5_tk2: "creează", t5_tk3: "o", t5_tk4: "operă", t5_tk5: "de", t5_tk6: "artă", t5_tk7: "nouă.",
    t6_title: "Muzică IA", t6_text: "Calculatoarele pot compune propriile melodii și cântece.", t6_inst: "Potrivește perechile:", t6_h1: "Tonuri și ritm.", t6_h2: "Compozitori digitali.", t6_q: "Ce folosește IA pentru a compune?", t6_qa: "Note și ritmuri", t6_qb: "O oală de gătit", t6_qc: "Foarfecă", t6_qd: "O mătură",
    t6_l1: "Melodie", t6_r1: "Secvență", t6_l2: "IA", t6_r2: "Compozitor", t6_l3: "Ascultător", t6_r3: "Om",
    t7_title: "Senzori", t7_text: "Senzorii sunt 'simțurile' IA, cum ar fi camerele (ochi) sau microfoanele (urechi).", t7_inst: "Completează spațiul liber:", t7_h1: "Cum simte IA?", t7_h2: "Date din exterior.", t7_q: "Care senzor corespunde ochiului uman?", t7_qa: "Camera", t7_qb: "Boxa", t7_qc: "Tastatura", t7_qd: "Bateria",
    t7_sent: "Un robot folosește ___ pentru a simți obstacolele.", t7_qa2: "senzori", t7_qb2: "zahăr", t7_qc2: "hârtie", t7_qd2: "lumină",
    t8_title: "Putere de calcul", t8_text: "IA are nevoie de cipuri rapide (GPU) pentru a procesa multe date simultan.", t8_inst: "Sortează în găleți:", t8_h1: "Rapid sau lent?", t8_h2: "Putere pentru IA.", t8_q: "Care componentă este importantă pentru IA?", t8_qa: "Procesor grafic (GPU)", t8_qb: "Carcasa", t8_qc: "Cablul mouse-ului", t8_qd: "Bara de spațiu",
    t8_bl1: "Putere IA", t8_bl2: "PC normal", t8_i1: "GPU", t8_i2: "Unitate floppy", t8_i3: "Supercomputer", t8_i4: "Mouse vechi",
    t9_title: "Internetul lucrurilor (IoT)", t9_text: "Când dispozitive precum frigiderele sunt conectate, IA le poate controla.", t9_inst: "Pune cuvintele în ordine:", t9_h1: "Totul e conectat.", t9_h2: "Lume conectată.", t9_q: "Ce înseamnă IoT?", t9_qa: "Internet of Things", t9_qb: "Iarna omoară trandafirii", t9_qc: "Informație online totală", t9_qd: "Ieri oricare tată",
    t9_w1: "Multe", t9_w2: "dispozitive", t9_w3: "sunt", t9_w4: "conectate", t9_w5: "la", t9_w6: "internet", t9_w7: "astăzi.",
    t10_title: "Recunoașterea modelelor", t10_text: "IA este expertă în găsirea de modele în cantități mari de date.", t10_inst: "Evidențiază cuvântul corect:", t10_h1: "Găsește modelul!", t10_h2: "Găsirea structurilor.", t10_q: "Ce găsește IA în date?", t10_qa: "Modele", t10_qb: "Bomboane", t10_qc: "Praf", t10_qd: "Bani",
    t10_tk1: "IA", t10_tk2: "găsește", t10_tk3: "un", t10_tk4: "model", t10_tk5: "în", t10_tk6: "aceste", t10_tk7: "numere.",
    t11_title: "Text predictiv", t11_text: "Când tastezi pe telefon, IA îți sugerează următorul cuvânt.", t11_inst: "Potrivește perechile:", t11_h1: "Ce scrii?", t11_h2: "Tastează mai rapid.", t11_q: "Ce ajută la scrierea rapidă?", t11_qa: "Text predictiv", t11_qb: "Bateria", t11_qc: "Camera", t11_qd: "Mod avion",
    t11_l1: "Eu tastez", t11_r1: "Sa", t11_l2: "IA sugerează", t11_r2: "Salut", t11_l3: "Scop", t11_r3: "Viteză",
    t12_title: "Filtre faciale", t12_text: "IA îți recunoaște fața și pune măști sau efecte amuzante peste ea.", t12_inst: "Completează spațiul liber:", t12_h1: "Urechi de cățel.", t12_h2: "Efecte în timp real.", t12_q: "Cum funcționează filtrele faciale?", t12_qa: "Prin recunoaștere facială IA", t12_qb: "Prin magie", t12_qc: "Prin stickere pe lentilă", t12_qd: "Deloc",
    t12_sent: "Un filtru pune o ___ digitală peste fața ta.", t12_qa2: "mască", t12_qb2: "turtă", t12_qc2: "pătură", t12_qd2: "perete",
    t13_title: "Realitate Virtuală (VR)", t13_text: "IA calculează mediul în ochelarii VR pentru ca totul să pară real.", t13_inst: "Sortează în găleți:", t13_h1: "Real sau VR?", t13_h2: "Lumi digitale.", t13_q: "Ce face VR?", t13_qa: "Creează lumi digitale", t13_qb: "Face cafea", t13_qc: "Curăță pantofi", t13_qd: "Face temele",
    t13_bl1: "Realitate Virtuală", t13_bl2: "Lumea Reală", t13_i1: "Ochelari VR", t13_i2: "Copaci în parc", t13_i3: "Avatar 3D", t13_i4: "Ploaie reală",
    t14_title: "Deepfakes", t14_text: "Deepfakes sunt videoclipuri create de IA care par reale. Trebuie să fim atenți!", t14_inst: "Pune cuvintele în ordine:", t14_h1: "Real sau fals?", t14_h2: "Nu crede totul.", t14_q: "Ce este un deepfake?", t14_qa: "Un video IA fals", t14_qb: "Un tort delicios", t14_qc: "Un joc pe calculator", t14_qd: "Un dans nou",
    t14_w1: "Trebuie", t14_w2: "să", t14_w3: "analizăm", t14_w4: "mereu", t14_w5: "critic", t14_w6: "videoclipurile", t14_w7: "IA.",
    t15_title: "Traducere instantanee", t15_text: "IA poate converti imediat limba vorbită în altă limbă.", t15_inst: "Evidențiază cuvântul corect:", t15_h1: "Ascultă și înțelege.", t15_h2: "Translator IA.", t15_q: "Ce poate face o aplicație de translator?", t15_qa: "Traduce vorbirea", t15_qb: "Încarcă telefonul", t15_qc: "Sortează poze", t15_qd: "Șterge jocuri",
    t15_tk1: "IA", t15_tk2: "traduce", t15_tk3: "conversația", t15_tk4: "noastră", t15_tk5: "imediat", t15_tk6: "pentru", t15_tk7: "ceilalți."
  }
};

export const INFO_K5_I2_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "simple-icon", icon: "🕸️", color: "#FF5722" },
    interactive: { type: "match-pairs", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", pairs: [{left:"t1_l1",right:"t1_r1"},{left:"t1_l2",right:"t1_r2"},{left:"t1_l3",right:"t1_r3"}] },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" }
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "🏋️", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" }
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "icon-grid", items: [{emoji:"✅",label:"Success"},{emoji:"❌",label:"Error"}] },
    interactive: { type: "drag-to-bucket", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", buckets: [{id:"b1",label:"t3_bl1"},{id:"b2",label:"t3_bl2"}], items: [{text:"t3_i1",bucketId:"b1"},{text:"t3_i2",bucketId:"b2"},{text:"t3_i3",bucketId:"b1"},{text:"t3_i4",bucketId:"b2"}] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "⚠️", color: "#F44336" },
    interactive: { type: "word-order", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", words: ["t4_w1", "t4_w2", "t4_w3", "t4_w4", "t4_w5", "t4_w6", "t4_w7"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6].slice(0, 7) },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "🎨", color: "#E91E63" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6","t5_tk7"].filter(x=>x!==""), correctIndices: [5] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" }
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "simple-icon", icon: "🎼", color: "#673AB7" },
    interactive: { type: "match-pairs", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", pairs: [{left:"t6_l1",right:"t6_r1"},{left:"t6_l2",right:"t6_r2"},{left:"t6_l3",right:"t6_r3"}] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" }
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "👁️", color: "#00BCD4" },
    interactive: { type: "gap-fill", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", sentence: "t7_sent", choices: ["t7_qa2", "t7_qb2", "t7_qc2", "t7_qd2"], correctIndex: 0 },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" }
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "simple-icon", icon: "🚀", color: "#3F51B5" },
    interactive: { type: "drag-to-bucket", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", buckets: [{id:"b1",label:"t8_bl1"},{id:"b2",label:"t8_bl2"}], items: [{text:"t8_i1",bucketId:"b1"},{text:"t8_i2",bucketId:"b2"},{text:"t8_i3",bucketId:"b1"},{text:"t8_i4",bucketId:"b2"}] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" }
  },
  {
    infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "simple-icon", icon: "☁️", color: "#03A9F4" },
    interactive: { type: "word-order", instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2", words: ["t9_w1", "t9_w2", "t9_w3", "t9_w4", "t9_w5", "t9_w6", "t9_w7"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6].slice(0, 7) },
    quiz: { question: "t9_q", choices: ["t9_qa", "t9_qb", "t9_qc", "t9_qd"], answer: "t9_qa" }
  },
  {
    infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "simple-icon", icon: "🏁", color: "#000000" },
    interactive: { type: "highlight-text", instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2", tokens: ["t10_tk1","t10_tk2","t10_tk3","t10_tk4","t10_tk5","t10_tk6","t10_tk7"].filter(x=>x!==""), correctIndices: [4] },
    quiz: { question: "t10_q", choices: ["t10_qa", "t10_qb", "t10_qc", "t10_qd"], answer: "t10_qa" }
  },
  {
    infoTitle: "t11_title", infoText: "t11_text",
    svg: { type: "simple-icon", icon: "⌨️", color: "#9E9E9E" },
    interactive: { type: "match-pairs", instruction: "t11_inst", hint1: "t11_h1", hint2: "t11_h2", pairs: [{left:"t11_l1",right:"t11_r1"},{left:"t11_l2",right:"t11_r2"},{left:"t11_l3",right:"t11_r3"}] },
    quiz: { question: "t11_q", choices: ["t11_qa", "t11_qb", "t11_qc", "t11_qd"], answer: "t11_qa" }
  },
  {
    infoTitle: "t12_title", infoText: "t12_text",
    svg: { type: "simple-icon", icon: "🎭", color: "#8BC34A" },
    interactive: { type: "gap-fill", instruction: "t12_inst", hint1: "t12_h1", hint2: "t12_h2", sentence: "t12_sent", choices: ["t12_qa2", "t12_qb2", "t12_qc2", "t12_qd2"], correctIndex: 0 },
    quiz: { question: "t12_q", choices: ["t12_qa", "t12_qb", "t12_qc", "t12_qd"], answer: "t12_qa" }
  },
  {
    infoTitle: "t13_title", infoText: "t13_text",
    svg: { type: "icon-grid", items: [{emoji:"🕶️",label:"VR"},{emoji:"🌍",label:"Real"}] },
    interactive: { type: "drag-to-bucket", instruction: "t13_inst", hint1: "t13_h1", hint2: "t13_h2", buckets: [{id:"b1",label:"t13_bl1"},{id:"b2",label:"t13_bl2"}], items: [{text:"t13_i1",bucketId:"b1"},{text:"t13_i2",bucketId:"b2"},{text:"t13_i3",bucketId:"b1"},{text:"t13_i4",bucketId:"b2"}] },
    quiz: { question: "t13_q", choices: ["t13_qa", "t13_qb", "t13_qc", "t13_qd"], answer: "t13_qa" }
  },
  {
    infoTitle: "t14_title", infoText: "t14_text",
    svg: { type: "simple-icon", icon: "🤥", color: "#795548" },
    interactive: { type: "word-order", instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2", words: ["t14_w1", "t14_w2", "t14_w3", "t14_w4", "t14_w5", "t14_w6", "t14_w7"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6].slice(0, 7) },
    quiz: { question: "t14_q", choices: ["t14_qa", "t14_qb", "t14_qc", "t14_qd"], answer: "t14_qa" }
  },
  {
    infoTitle: "t15_title", infoText: "t15_text",
    svg: { type: "simple-icon", icon: "📢", color: "#FF9800" },
    interactive: { type: "highlight-text", instruction: "t15_inst", hint1: "t15_h1", hint2: "t15_h2", tokens: ["t15_tk1","t15_tk2","t15_tk3","t15_tk4","t15_tk5","t15_tk6","t15_tk7"].filter(x=>x!==""), correctIndices: [1] },
    quiz: { question: "t15_q", choices: ["t15_qa", "t15_qb", "t15_qc", "t15_qd"], answer: "t15_qa" }
  }
];

