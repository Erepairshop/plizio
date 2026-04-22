// lib/explorerPools/informatikaK8_i7.ts
import type { PoolTopicDef } from "./types";

export const INFO_K8_I7_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Künstliche Intelligenz",
    t1_title: "Künstliche Intelligenz (KI)", t1_text: "KI ist die Fähigkeit von Computern, Aufgaben zu lösen, die normalerweise menschliche Intelligenz erfordern, wie Spracherkennung oder Bildverarbeitung.", t1_inst: "Ordne die KI-Begriffe zu.", t1_h1: "KI kann sprechen, sehen und lernen", t1_h2: "KI lernt aus Daten, nicht aus Regeln allein", t1_l1: "Künstliche Intelligenz", t1_r1: "Computer löst menschenähnliche Aufgaben", t1_l2: "Spracherkennung", t1_r2: "KI versteht gesprochene Sprache", t1_l3: "Bildverarbeitung", t1_r3: "KI erkennt Objekte auf Fotos", t1_q: "Was ist Künstliche Intelligenz?", t1_qa: "Die Fähigkeit von Computern, menschenähnliche Aufgaben zu lösen", t1_qb: "Eine neue Programmiersprache", t1_qc: "Ein Hardware-Upgrade für PCs", t1_qd: "Ein Cloud-Speicherdienst",
    t2_title: "Maschinelles Lernen", t2_text: "Maschinelles Lernen ist ein Teilgebiet der KI, bei dem Algorithmen aus Daten lernen, ohne explizit programmiert zu werden.", t2_inst: "Fülle die Lücke aus.", t2_h1: "Maschinelles Lernen = KI lernt aus Daten", t2_h2: "Daten → Modell → Vorhersagen", t2_sent: "Beim maschinellen Lernen lernen Algorithmen aus ___ , statt explizit programmiert zu werden.", t2_qa2: "Daten", t2_qb2: "Regelwerken", t2_qc2: "Tastatureingaben", t2_qd2: "Passwörtern", t2_q: "Was unterscheidet maschinelles Lernen von klassischer Programmierung?", t2_qa: "Algorithmen lernen aus Daten, nicht aus festen Regeln", t2_qb: "Programme werden von Hand geschrieben", t2_qc: "Es werden keine Computer benötigt", t2_qd: "Der Benutzer gibt alle Antworten ein",
    t3_title: "Neuronales Netz", t3_text: "Ein neuronales Netz ist ein KI-Modell, das vom menschlichen Gehirn inspiriert ist. Es besteht aus Schichten von Knoten (Neuronen), die Daten verarbeiten.", t3_inst: "Sortiere die Wörter in die richtige Reihenfolge.", t3_h1: "Eingangsschicht → versteckte Schichten → Ausgangsschicht", t3_h2: "Je mehr Schichten, desto 'tiefer' das Netz", t3_w1: "Ein neuronales Netz", t3_w2: "besteht aus", t3_w3: "Schichten von Knoten,", t3_w4: "die Daten", t3_w5: "verarbeiten.", t3_q: "Was inspirierte das Konzept des neuronalen Netzes?", t3_qa: "Das menschliche Gehirn", t3_qb: "Das Internet", t3_qc: "Eine Datenbank", t3_qd: "Ein Tabellenkalkulationsprogramm",
    t4_title: "Trainingsdaten", t4_text: "KI-Modelle lernen aus Trainingsdaten: großen Mengen an Beispielen mit bekannten Ergebnissen. Mehr und bessere Daten führen zu genaueren Modellen.", t4_inst: "Sortiere die Begriffe in die richtige Kategorie.", t4_h1: "Trainingsdaten = gelabelte Beispiele fürs Lernen", t4_h2: "Testdaten = neue Daten zur Überprüfung des Modells", t4_bl1: "Trainingsdaten", t4_bl2: "Testdaten", t4_i1: "gelabelte Beispiele zum Lernen", t4_i2: "neue Daten zur Bewertung", t4_i3: "Fotos mit richtiger Bezeichnung", t4_i4: "Daten, die das Modell noch nicht kannte", t4_q: "Wozu dienen Trainingsdaten bei KI?", t4_qa: "Um das Modell anhand von Beispielen zu trainieren", t4_qb: "Um das fertige Modell zu testen", t4_qc: "Um das Modell zu verschlüsseln", t4_qd: "Um den Benutzer zu identifizieren",
    t5_title: "Sprachmodelle (LLM / ChatGPT)", t5_text: "Große Sprachmodelle (LLMs) wie ChatGPT wurden auf riesigen Textmengen trainiert und können Texte verstehen und generieren.", t5_inst: "Markiere die Aussagen, die auf LLMs zutreffen.", t5_h1: "LLM = auf Sprache spezialisiertes KI-Modell", t5_h2: "ChatGPT ist ein bekanntes LLM von OpenAI", t5_tk1: "auf Milliarden Texten trainiert", t5_tk2: "führt nur Rechenbefehle aus", t5_tk3: "kann Fragen beantworten", t5_tk4: "speichert Passwörter", t5_tk5: "generiert zusammenhängenden Text", t5_q: "Wofür stehen die Buchstaben LLM?", t5_qa: "Large Language Model", t5_qb: "Low Level Module", t5_qc: "Layered Logic Machine", t5_qd: "Linear Learning Method",
    t6_title: "Künstliche Neuronale Netze", t6_text: "Künstliche Neuronale Netze (KNN) bestehen aus künstlichen Neuronen, die in Schichten angeordnet sind, um komplexe Muster zu erkennen.", t6_inst: "Bilde den Satz:", t6_f1: "Neuronale Netze", t6_f2: "können", t6_f3: "komplexe", t6_f4: "Muster erkennen.", t6_q: "Woraus bestehen Neuronale Netze?", t6_qa: "Künstlichen Neuronen", t6_qb: "Nur aus Speicherchips", t6_qc: "Aus Zahnrädern", t6_qd: "Aus HTML-Tags",
    t7_title: "Deep Learning", t7_text: "Deep Learning ist ein Bereich des maschinellen Lernens, der neuronale Netze mit vielen versteckten Schichten verwendet, um riesige Datenmengen zu analysieren.", t7_inst: "Fülle die Lücke:", t7_sent: "Deep Learning nutzt Netze mit vielen ___ Schichten.", t7_qa7: "versteckten", t7_qb7: "sichtbaren", t7_qc7: "gelöschten", t7_qd7: "kaputten", t7_q: "Was zeichnet Deep Learning aus?", t7_qa: "Viele versteckte Schichten", t7_qb: "Weniger Rechenleistung", t7_qc: "Es braucht keine Daten", t7_qd: "Es ist nur für Text",
    t8_title: "Turing-Test", t8_text: "Der Turing-Test prüft, ob eine Maschine ein dem Menschen gleichwertiges Denkvermögen aufweist.", t8_inst: "Ordne die Wörter:", t8_w1: "Der", t8_w2: "Turing-Test", t8_w3: "prüft", t8_w4: "intelligentes", t8_w5: "Verhalten.", t8_q: "Was misst der Turing-Test?", t8_qa: "Maschinelle Intelligenz", t8_qb: "Prozessorgeschwindigkeit", t8_qc: "Internetverbindung", t8_qd: "Akkulaufzeit",
    t9_title: "Generative KI", t9_text: "Generative Künstliche Intelligenz kann neue Inhalte wie Texte, Bilder, Musik oder Code erstellen, anstatt nur bestehende Daten zu analysieren.", t9_inst: "Verbinde:", t9_l1: "Text", t9_r1: "ChatGPT", t9_l2: "Bild", t9_r2: "Midjourney", t9_l3: "Code", t9_r3: "Copilot", t9_q: "Was macht generative KI?", t9_qa: "Sie erschafft neue Inhalte", t9_qb: "Sie löscht Dateien", t9_qc: "Sie repariert Computer", t9_qd: "Sie druckt Dokumente",
    t10_title: "Computer Vision", t10_text: "Computer Vision ermöglicht es Computern, visuelle Informationen aus der realen Welt (wie Bilder und Videos) zu verstehen und zu interpretieren.", t10_inst: "Sortiere:", t10_bl1: "Computer Vision", t10_bl2: "Kein Vision", t10_i1: "Gesichtserkennung", t10_i2: "Audioaufnahme", t10_i3: "Objekterkennung", t10_i4: "Textdokument", t10_q: "Welches Feld beschäftigt sich mit dem maschinellen Sehen?", t10_qa: "Computer Vision", t10_qb: "Audio Processing", t10_qc: "Data Mining", t10_qd: "Network Security",
    t11_title: "Natural Language Processing", t11_text: "NLP (Natürliche Sprachverarbeitung) ermöglicht es Computern, menschliche Sprache zu verstehen, zu interpretieren und zu generieren.", t11_inst: "Markiere das NLP-Anwendungsfeld:", t11_tk1: "Maschinelle", t11_tk2: "Übersetzung", t11_tk3: "ist", t11_tk4: "ein", t11_tk5: "Beispiel.", t11_q: "Wofür steht NLP?", t11_qa: "Natural Language Processing", t11_qb: "New Level Programming", t11_qc: "Neural Logic Process", t11_qd: "Network Local Protocol",
    t12_title: "KI-Ethik & Bias", t12_text: "KI-Modelle können Vorurteile (Bias) aus ihren Trainingsdaten übernehmen. KI-Ethik befasst sich mit Fairness, Transparenz und Verantwortung in der KI.", t12_inst: "Baue den Satz:", t12_f1: "KI", t12_f2: "sollte", t12_f3: "fair und", t12_f4: "transparent sein.", t12_q: "Was ist ein KI-Bias?", t12_qa: "Eine Voreingenommenheit im Modell", t12_qb: "Ein Computervirus", t12_qc: "Ein Hardware-Fehler", t12_qd: "Ein neues KI-Modell",
    t13_title: "Robotik", t13_text: "Robotik kombiniert KI mit physischen Maschinen, um Aufgaben in der realen Welt autonom oder halbautonom auszuführen.", t13_inst: "Ordne:", t13_w1: "Roboter", t13_w2: "interagieren", t13_w3: "mit der", t13_w4: "physischen", t13_w5: "Welt.", t13_q: "Was ist das Hauptmerkmal der Robotik?", t13_qa: "Physische Maschinen", t13_qb: "Nur Software", t13_qc: "Websites erstellen", t13_qd: "Text generieren",
    t14_title: "Expertensysteme", t14_text: "Ein Expertensystem ist ein Computerprogramm, das das Wissen und die Entscheidungsfähigkeit eines menschlichen Experten nachahmt.", t14_inst: "Fülle die Lücke:", t14_sent: "Expertensysteme nutzen eine ___ zur Entscheidungsfindung.", t14_qa14: "Wissensdatenbank", t14_qb14: "Maus", t14_qc14: "Grafikkarte", t14_qd14: "Kamera", t14_q: "Was simulieren Expertensysteme?", t14_qa: "Menschliches Fachwissen", t14_qb: "Wetterbedingungen", t14_qc: "Videospiele", t14_qd: "Netzwerkverkehr",
    t15_title: "Empfehlungssysteme", t15_text: "Empfehlungssysteme analysieren Benutzerdaten, um personalisierte Vorschläge wie Filme, Produkte oder Musik zu machen.", t15_inst: "Verbinde:", t15_l1: "Netflix", t15_r1: "Filme", t15_l2: "Spotify", t15_r2: "Musik", t15_l3: "Amazon", t15_r3: "Produkte", t15_q: "Was ist das Ziel eines Empfehlungssystems?", t15_qa: "Personalisierte Vorschläge machen", t15_qb: "Den Computer ausschalten", t15_qc: "Passwörter ändern", t15_qd: "Viren suchen"
  },
  en: {
    explorer_title: "Artificial Intelligence",
    t1_title: "Artificial Intelligence (AI)", t1_text: "AI is the ability of computers to solve tasks that normally require human intelligence, such as speech recognition or image processing.", t1_inst: "Match the AI terms.", t1_h1: "AI can speak, see and learn", t1_h2: "AI learns from data, not just from rules", t1_l1: "Artificial Intelligence", t1_r1: "computer solves human-like tasks", t1_l2: "Speech recognition", t1_r2: "AI understands spoken language", t1_l3: "Image processing", t1_r3: "AI recognizes objects in photos", t1_q: "What is Artificial Intelligence?", t1_qa: "The ability of computers to solve human-like tasks", t1_qb: "A new programming language", t1_qc: "A hardware upgrade for PCs", t1_qd: "A cloud storage service",
    t2_title: "Machine learning", t2_text: "Machine learning is a branch of AI where algorithms learn from data without being explicitly programmed.", t2_inst: "Fill in the blank.", t2_h1: "Machine learning = AI learns from data", t2_h2: "Data → model → predictions", t2_sent: "In machine learning, algorithms learn from ___ instead of being explicitly programmed.", t2_qa2: "data", t2_qb2: "rule sets", t2_qc2: "keyboard inputs", t2_qd2: "passwords", t2_q: "What distinguishes machine learning from classic programming?", t2_qa: "Algorithms learn from data, not from fixed rules", t2_qb: "Programs are written by hand", t2_qc: "No computers are needed", t2_qd: "The user enters all answers",
    t3_title: "Neural network", t3_text: "A neural network is an AI model inspired by the human brain. It consists of layers of nodes (neurons) that process data.", t3_inst: "Sort the words into the correct order.", t3_h1: "Input layer → hidden layers → output layer", t3_h2: "The more layers, the 'deeper' the network", t3_w1: "A neural network", t3_w2: "consists of", t3_w3: "layers of nodes", t3_w4: "that process", t3_w5: "data.", t3_q: "What inspired the concept of the neural network?", t3_qa: "The human brain", t3_qb: "The internet", t3_qc: "A database", t3_qd: "A spreadsheet program",
    t4_title: "Training data", t4_text: "AI models learn from training data: large amounts of examples with known outcomes. More and better data leads to more accurate models.", t4_inst: "Sort the terms into the correct category.", t4_h1: "Training data = labeled examples for learning", t4_h2: "Test data = new data to check the model", t4_bl1: "Training data", t4_bl2: "Test data", t4_i1: "labeled examples for learning", t4_i2: "new data for evaluation", t4_i3: "photos with correct labels", t4_i4: "data the model has not seen before", t4_q: "What are training data used for in AI?", t4_qa: "To train the model using examples", t4_qb: "To test the finished model", t4_qc: "To encrypt the model", t4_qd: "To identify the user",
    t5_title: "Language models (LLM / ChatGPT)", t5_text: "Large language models (LLMs) like ChatGPT were trained on huge amounts of text and can understand and generate text.", t5_inst: "Highlight the statements that apply to LLMs.", t5_h1: "LLM = AI model specialized in language", t5_h2: "ChatGPT is a well-known LLM from OpenAI", t5_tk1: "trained on billions of texts", t5_tk2: "only executes arithmetic commands", t5_tk3: "can answer questions", t5_tk4: "stores passwords", t5_tk5: "generates coherent text", t5_q: "What does LLM stand for?", t5_qa: "Large Language Model", t5_qb: "Low Level Module", t5_qc: "Layered Logic Machine", t5_qd: "Linear Learning Method",
    t6_title: "Artificial Neural Networks", t6_text: "Artificial Neural Networks (ANN) consist of artificial neurons arranged in layers to recognize complex patterns.", t6_inst: "Build the sentence:", t6_f1: "Neural networks", t6_f2: "can", t6_f3: "recognize", t6_f4: "complex patterns.", t6_q: "What do Neural Networks consist of?", t6_qa: "Artificial neurons", t6_qb: "Only memory chips", t6_qc: "Gears", t6_qd: "HTML tags",
    t7_title: "Deep Learning", t7_text: "Deep Learning is a subset of machine learning that uses neural networks with many hidden layers to analyze vast amounts of data.", t7_inst: "Fill the gap:", t7_sent: "Deep Learning uses networks with many ___ layers.", t7_qa7: "hidden", t7_qb7: "visible", t7_qc7: "deleted", t7_qd7: "broken", t7_q: "What characterizes Deep Learning?", t7_qa: "Many hidden layers", t7_qb: "Less computing power", t7_qc: "It needs no data", t7_qd: "It is only for text",
    t8_title: "Turing Test", t8_text: "The Turing Test evaluates whether a machine can exhibit intelligent behavior equivalent to a human.", t8_inst: "Order the words:", t8_w1: "The", t8_w2: "Turing Test", t8_w3: "evaluates", t8_w4: "intelligent", t8_w5: "behavior.", t8_q: "What does the Turing Test measure?", t8_qa: "Machine intelligence", t8_qb: "Processor speed", t8_qc: "Internet connection", t8_qd: "Battery life",
    t9_title: "Generative AI", t9_text: "Generative Artificial Intelligence can create new content like texts, images, music, or code instead of just analyzing existing data.", t9_inst: "Match:", t9_l1: "Text", t9_r1: "ChatGPT", t9_l2: "Image", t9_r2: "Midjourney", t9_l3: "Code", t9_r3: "Copilot", t9_q: "What does generative AI do?", t9_qa: "It creates new content", t9_qb: "It deletes files", t9_qc: "It repairs computers", t9_qd: "It prints documents",
    t10_title: "Computer Vision", t10_text: "Computer Vision enables computers to understand and interpret visual information from the real world, such as images and videos.", t10_inst: "Sort:", t10_bl1: "Computer Vision", t10_bl2: "Not Vision", t10_i1: "Face recognition", t10_i2: "Audio recording", t10_i3: "Object detection", t10_i4: "Text document", t10_q: "Which field deals with machine vision?", t10_qa: "Computer Vision", t10_qb: "Audio Processing", t10_qc: "Data Mining", t10_qd: "Network Security",
    t11_title: "Natural Language Processing", t11_text: "NLP (Natural Language Processing) allows computers to understand, interpret, and generate human language.", t11_inst: "Highlight the NLP application:", t11_tk1: "Machine", t11_tk2: "translation", t11_tk3: "is", t11_tk4: "an", t11_tk5: "example.", t11_q: "What does NLP stand for?", t11_qa: "Natural Language Processing", t11_qb: "New Level Programming", t11_qc: "Neural Logic Process", t11_qd: "Network Local Protocol",
    t12_title: "AI Ethics & Bias", t12_text: "AI models can inherit biases from their training data. AI ethics deals with fairness, transparency, and accountability in AI.", t12_inst: "Build the sentence:", t12_f1: "AI", t12_f2: "should", t12_f3: "be fair", t12_f4: "and transparent.", t12_q: "What is an AI bias?", t12_qa: "A prejudice in the model", t12_qb: "A computer virus", t12_qc: "A hardware error", t12_qd: "A new AI model",
    t13_title: "Robotics", t13_text: "Robotics combines AI with physical machines to perform tasks in the real world autonomously or semi-autonomously.", t13_inst: "Order:", t13_w1: "Robots", t13_w2: "interact", t13_w3: "with", t13_w4: "the physical", t13_w5: "world.", t13_q: "What is the main feature of robotics?", t13_qa: "Physical machines", t13_qb: "Only software", t13_qc: "Creating websites", t13_qd: "Generating text",
    t14_title: "Expert Systems", t14_text: "An expert system is a computer program that mimics the knowledge and decision-making ability of a human expert.", t14_inst: "Fill in the blank:", t14_sent: "Expert systems use a ___ to make decisions.", t14_qa14: "knowledge base", t14_qb14: "mouse", t14_qc14: "graphics card", t14_qd14: "camera", t14_q: "What do expert systems simulate?", t14_qa: "Human expertise", t14_qb: "Weather conditions", t14_qc: "Video games", t14_qd: "Network traffic",
    t15_title: "Recommendation Systems", t15_text: "Recommendation systems analyze user data to make personalized suggestions like movies, products, or music.", t15_inst: "Match:", t15_l1: "Netflix", t15_r1: "Movies", t15_l2: "Spotify", t15_r2: "Music", t15_l3: "Amazon", t15_r3: "Products", t15_q: "What is the goal of a recommendation system?", t15_qa: "To make personalized suggestions", t15_qb: "To turn off the computer", t15_qc: "To change passwords", t15_qd: "To scan for viruses"
  },
  hu: {
    explorer_title: "Mesterséges intelligencia",
    t1_title: "Mesterséges intelligencia (MI)", t1_text: "A mesterséges intelligencia (MI) a számítógépek azon képessége, hogy emberi intelligenciát igénylő feladatokat oldjanak meg, például hangfelismerés vagy képfeldolgozás.", t1_inst: "Párosítsd az MI fogalmakat.", t1_h1: "az MI képes beszélni, látni és tanulni", t1_h2: "az MI adatokból tanul, nem csak szabályokból", t1_l1: "Mesterséges intelligencia", t1_r1: "számítógép emberhez hasonló feladatokat old meg", t1_l2: "Hangfelismerés", t1_r2: "az MI megérti a beszélt nyelvet", t1_l3: "Képfeldolgozás", t1_r3: "az MI tárgyakat ismer fel fényképeken", t1_q: "Mi a mesterséges intelligencia?", t1_qa: "A számítógépek képessége emberhez hasonló feladatok megoldására", t1_qb: "Egy új programozási nyelv", t1_qc: "Hardverfejlesztés PC-khez", t1_qd: "Felhőalapú tárolószolgáltatás",
    t2_title: "Gépi tanulás", t2_text: "A gépi tanulás az MI egy területe, ahol az algoritmusok adatokból tanulnak anélkül, hogy explicit programozásra szorulnának.", t2_inst: "Töltsd ki a hiányzó részt.", t2_h1: "gépi tanulás = MI adatokból tanul", t2_h2: "adatok → modell → előrejelzések", t2_sent: "A gépi tanulás során az algoritmusok ___ tanulnak, nem explicit programozásból.", t2_qa2: "adatokból", t2_qb2: "szabályrendszerekből", t2_qc2: "billentyűzetbevitelből", t2_qd2: "jelszavakból", t2_q: "Mi különbözteti meg a gépi tanulást a klasszikus programozástól?", t2_qa: "Az algoritmusok adatokból tanulnak, nem rögzített szabályokból", t2_qb: "A programokat kézzel írják", t2_qc: "Nincs szükség számítógépre", t2_qd: "A felhasználó ad meg minden választ",
    t3_title: "Neurális háló", t3_text: "A neurális háló az emberi agyból ihletett MI-modell. Csomópontok (neuronok) rétegeiből áll, amelyek adatokat dolgoznak fel.", t3_inst: "Rendezd a szavakat helyes sorrendbe.", t3_h1: "bemeneti réteg → rejtett rétegek → kimeneti réteg", t3_h2: "minél több réteg, annál 'mélyebb' a hálózat", t3_w1: "A neurális háló", t3_w2: "neuronok rétegeiből", t3_w3: "áll, amelyek", t3_w4: "adatokat", t3_w5: "dolgoznak fel.", t3_q: "Mi ihlette a neurális háló koncepcióját?", t3_qa: "Az emberi agy", t3_qb: "Az internet", t3_qc: "Egy adatbázis", t3_qd: "Egy táblázatkezelő program",
    t4_title: "Tanítási adatok", t4_text: "Az MI-modellek tanítási adatokból tanulnak: nagy mennyiségű ismert eredményű példából. Több és jobb adat pontosabb modelleket eredményez.", t4_inst: "Rendezd a fogalmakat a megfelelő kategóriába.", t4_h1: "tanítási adatok = jelölt példák tanuláshoz", t4_h2: "tesztadatok = új adatok a modell ellenőrzéséhez", t4_bl1: "Tanítási adatok", t4_bl2: "Tesztadatok", t4_i1: "jelölt példák a tanuláshoz", t4_i2: "új adatok az értékeléshez", t4_i3: "helyes felirattal ellátott fényképek", t4_i4: "adatok, amelyeket a modell még nem látott", t4_q: "Mire valók a tanítási adatok az MI-ben?", t4_qa: "A modell példák alapján való betanítására", t4_qb: "A kész modell tesztelésére", t4_qc: "A modell titkosítására", t4_qd: "A felhasználó azonosítására",
    t5_title: "Nyelvi modellek (LLM / ChatGPT)", t5_text: "A nagy nyelvi modellek (LLM-ek), mint a ChatGPT, hatalmas szövegmennyiségeken lettek betanítva, és képesek szövegeket megérteni és generálni.", t5_inst: "Emeld ki az LLM-ekre igaz állításokat.", t5_h1: "LLM = nyelvre specializált MI-modell", t5_h2: "a ChatGPT egy ismert LLM az OpenAI-tól", t5_tk1: "milliárd szövegen tanítva", t5_tk2: "csak aritmetikai parancsokat hajt végre", t5_tk3: "képes kérdéseket megválaszolni", t5_tk4: "jelszavakat tárol", t5_tk5: "összefüggő szöveget generál", t5_q: "Mit jelent az LLM rövidítés?", t5_qa: "Large Language Model", t5_qb: "Low Level Module", t5_qc: "Layered Logic Machine", t5_qd: "Linear Learning Method",
    t6_title: "Mesterséges Neurális Hálózatok", t6_text: "A mesterséges neurális hálózatok rétegekbe rendezett mesterséges neuronokból állnak, hogy komplex mintákat ismerjenek fel.", t6_inst: "Építs mondatot:", t6_f1: "A neurális hálózatok", t6_f2: "képesek", t6_f3: "komplex", t6_f4: "mintákat felismerni.", t6_q: "Miből állnak a neurális hálózatok?", t6_qa: "Mesterséges neuronokból", t6_qb: "Csak memóriachipekből", t6_qc: "Fogaskerekekből", t6_qd: "HTML tagekből",
    t7_title: "Mélytanulás (Deep Learning)", t7_text: "A mélytanulás a gépi tanulás egy olyan területe, amely sok rejtett réteggel rendelkező neurális hálózatokat használ hatalmas mennyiségű adat elemzésére.", t7_inst: "Pótold a hiányzó szót:", t7_sent: "A mélytanulás sok ___ réteggel rendelkező hálózatokat használ.", t7_qa7: "rejtett", t7_qb7: "látható", t7_qc7: "törölt", t7_qd7: "hibás", t7_q: "Mi jellemzi a mélytanulást?", t7_qa: "Sok rejtett réteg", t7_qb: "Kevesebb számítási teljesítmény", t7_qc: "Nincs szüksége adatokra", t7_qd: "Csak szövegre jó",
    t8_title: "Turing-teszt", t8_text: "A Turing-teszt azt vizsgálja, hogy egy gép képes-e emberi szintű intelligens viselkedésre.", t8_inst: "Rendezd a szavakat:", t8_w1: "A", t8_w2: "Turing-teszt", t8_w3: "az", t8_w4: "intelligens", t8_w5: "viselkedést vizsgálja.", t8_q: "Mit mér a Turing-teszt?", t8_qa: "A gépi intelligenciát", t8_qb: "A processzor sebességét", t8_qc: "Az internetkapcsolatot", t8_qd: "Az akkumulátor élettartamát",
    t9_title: "Generatív MI", t9_text: "A generatív mesterséges intelligencia képes új tartalmakat, például szöveget, képet, zenét vagy kódot létrehozni, ahelyett, hogy csak meglévő adatokat elemezne.", t9_inst: "Párosítsd:", t9_l1: "Szöveg", t9_r1: "ChatGPT", t9_l2: "Kép", t9_r2: "Midjourney", t9_l3: "Kód", t9_r3: "Copilot", t9_q: "Mit csinál a generatív MI?", t9_qa: "Új tartalmat hoz létre", t9_qb: "Fájlokat töröl", t9_qc: "Számítógépeket javít", t9_qd: "Dokumentumokat nyomtat",
    t10_title: "Számítógépes látás", t10_text: "A számítógépes látás lehetővé teszi a gépek számára, hogy megértsék és értelmezzék a valós világ vizuális információit, például képeket és videókat.", t10_inst: "Válogasd szét:", t10_bl1: "Számítógépes látás", t10_bl2: "Nem látás", t10_i1: "Arcfelismerés", t10_i2: "Hangfelvétel", t10_i3: "Tárgyfelismerés", t10_i4: "Szöveges dokumentum", t10_q: "Melyik terület foglalkozik a gépi látással?", t10_qa: "Számítógépes látás", t10_qb: "Hangfeldolgozás", t10_qc: "Adatbányászat", t10_qd: "Hálózati biztonság",
    t11_title: "Természetes nyelvfeldolgozás (NLP)", t11_text: "Az NLP (Natural Language Processing) lehetővé teszi a számítógépek számára az emberi nyelv megértését, értelmezését és generálását.", t11_inst: "Jelöld ki az NLP alkalmazást:", t11_tk1: "A gépi", t11_tk2: "fordítás", t11_tk3: "egy", t11_tk4: "jó", t11_tk5: "példa.", t11_q: "Mit jelent az NLP?", t11_qa: "Natural Language Processing", t11_qb: "New Level Programming", t11_qc: "Neural Logic Process", t11_qd: "Network Local Protocol",
    t12_title: "MI Etika és Elfogultság", t12_text: "Az MI-modellek átvehetik a tanítási adataikban lévő előítéleteket (bias). Az MI-etika a méltányossággal, átláthatósággal és felelősséggel foglalkozik.", t12_inst: "Építs mondatot:", t12_f1: "Az MI-nek", t12_f2: "igazságosnak", t12_f3: "és átláthatónak", t12_f4: "kell lennie.", t12_q: "Mi az MI elfogultság (bias)?", t12_qa: "Előítélet a modellben", t12_qb: "Számítógépes vírus", t12_qc: "Hardverhiba", t12_qd: "Új MI modell",
    t13_title: "Robotika", t13_text: "A robotika az MI-t fizikai gépekkel kombinálja, hogy a valós világban autonóm vagy félautonóm módon hajtson végre feladatokat.", t13_inst: "Rendezd:", t13_w1: "A robotok", t13_w2: "kölcsönhatásba", t13_w3: "lépnek", t13_w4: "a fizikai", t13_w5: "világgal.", t13_q: "Mi a robotika fő jellemzője?", t13_qa: "Fizikai gépek", t13_qb: "Csak szoftver", t13_qc: "Weboldalak készítése", t13_qd: "Szöveggenerálás",
    t14_title: "Szakértői rendszerek", t14_text: "A szakértői rendszer olyan számítógépes program, amely egy emberi szakértő tudását és döntéshozatali képességét utánozza.", t14_inst: "Pótold a hiányzó szót:", t14_sent: "A szakértői rendszerek ___ használnak a döntéshozatalhoz.", t14_qa14: "tudásbázist", t14_qb14: "egeret", t14_qc14: "videókártyát", t14_qd14: "kamerát", t14_q: "Mit szimulálnak a szakértői rendszerek?", t14_qa: "Emberi szakértelmet", t14_qb: "Időjárási viszonyokat", t14_qc: "Videójátékokat", t14_qd: "Hálózati forgalmat",
    t15_title: "Ajánlórendszerek", t15_text: "Az ajánlórendszerek elemzik a felhasználói adatokat, hogy személyre szabott javaslatokat tegyenek filmekre, termékekre vagy zenékre.", t15_inst: "Párosítsd:", t15_l1: "Netflix", t15_r1: "Filmek", t15_l2: "Spotify", t15_r2: "Zene", t15_l3: "Amazon", t15_r3: "Termékek", t15_q: "Mi a célja egy ajánlórendszernek?", t15_qa: "Személyre szabott javaslatok tétele", t15_qb: "A számítógép kikapcsolása", t15_qc: "Jelszavak megváltoztatása", t15_qd: "Víruskeresés"
  },
  ro: {
    explorer_title: "Inteligența artificială",
    t1_title: "Inteligența artificială (IA)", t1_text: "IA este capacitatea calculatoarelor de a rezolva sarcini care necesită în mod normal inteligență umană, cum ar fi recunoașterea vocală sau procesarea imaginilor.", t1_inst: "Potrivește termenii IA.", t1_h1: "IA poate vorbi, vedea și învăța", t1_h2: "IA învață din date, nu doar din reguli", t1_l1: "Inteligență artificială", t1_r1: "calculatorul rezolvă sarcini asemănătoare omului", t1_l2: "Recunoaștere vocală", t1_r2: "IA înțelege limbajul vorbit", t1_l3: "Procesare imagini", t1_r3: "IA recunoaște obiecte în fotografii", t1_q: "Ce este inteligența artificială?", t1_qa: "Capacitatea calculatoarelor de a rezolva sarcini asemănătoare omului", t1_qb: "Un nou limbaj de programare", t1_qc: "O îmbunătățire hardware pentru PC-uri", t1_qd: "Un serviciu de stocare în cloud",
    t2_title: "Învățare automată", t2_text: "Învățarea automată este o ramură a IA unde algoritmii învață din date fără a fi programați explicit.", t2_inst: "Completează spațiul liber.", t2_h1: "Învățare automată = IA învață din date", t2_h2: "Date → model → predicții", t2_sent: "În învățarea automată, algoritmii învață din ___ în loc să fie programați explicit.", t2_qa2: "date", t2_qb2: "seturi de reguli", t2_qc2: "intrări de la tastatură", t2_qd2: "parole", t2_q: "Ce deosebește învățarea automată de programarea clasică?", t2_qa: "Algoritmii învață din date, nu din reguli fixe", t2_qb: "Programele sunt scrise de mână", t2_qc: "Nu sunt necesare calculatoare", t2_qd: "Utilizatorul introduce toate răspunsurile",
    t3_title: "Rețea neuronală", t3_text: "O rețea neuronală este un model IA inspirat de creierul uman. Constă din straturi de noduri (neuroni) care procesează date.", t3_inst: "Sortează cuvintele în ordinea corectă.", t3_h1: "Strat de intrare → straturi ascunse → strat de ieșire", t3_h2: "Cu cât mai multe straturi, cu atât rețeaua este mai 'adâncă'", t3_w1: "O rețea neuronală", t3_w2: "constă din", t3_w3: "straturi de noduri,", t3_w4: "care procesează", t3_w5: "date.", t3_q: "Ce a inspirat conceptul rețelei neuronale?", t3_qa: "Creierul uman", t3_qb: "Internetul", t3_qc: "O bază de date", t3_qd: "Un program de calcul tabelar",
    t4_title: "Date de antrenament", t4_text: "Modelele IA învață din date de antrenament: cantități mari de exemple cu rezultate cunoscute. Mai multe date și mai bune duc la modele mai precise.", t4_inst: "Sortează termenii în categoria corectă.", t4_h1: "Date de antrenament = exemple etichetate pentru învățare", t4_h2: "Date de test = date noi pentru verificarea modelului", t4_bl1: "Date de antrenament", t4_bl2: "Date de test", t4_i1: "exemple etichetate pentru învățare", t4_i2: "date noi pentru evaluare", t4_i3: "fotografii cu etichete corecte", t4_i4: "date pe care modelul nu le-a văzut înainte", t4_q: "La ce servesc datele de antrenament în IA?", t4_qa: "Pentru a antrena modelul pe baza exemplelor", t4_qb: "Pentru a testa modelul finalizat", t4_qc: "Pentru a cripta modelul", t4_qd: "Pentru a identifica utilizatorul",
    t5_title: "Modele de limbaj (LLM / ChatGPT)", t5_text: "Modelele de limbaj mari (LLM) ca ChatGPT au fost antrenate pe cantități uriașe de text și pot înțelege și genera text.", t5_inst: "Evidențiază afirmațiile care se aplică LLM-urilor.", t5_h1: "LLM = model IA specializat în limbaj", t5_h2: "ChatGPT este un LLM cunoscut de la OpenAI", t5_tk1: "antrenat pe miliarde de texte", t5_tk2: "execută doar comenzi aritmetice", t5_tk3: "poate răspunde la întrebări", t5_tk4: "stochează parole", t5_tk5: "generează text coerent", t5_q: "Ce înseamnă abrevierea LLM?", t5_qa: "Large Language Model", t5_qb: "Low Level Module", t5_qc: "Layered Logic Machine", t5_qd: "Linear Learning Method",
    t6_title: "Rețele Neuronale Artificiale", t6_text: "Rețelele Neuronale Artificiale sunt formate din neuroni artificiali organizați în straturi pentru a recunoaște modele complexe.", t6_inst: "Construiește fraza:", t6_f1: "Rețelele neuronale", t6_f2: "pot", t6_f3: "recunoaște", t6_f4: "modele complexe.", t6_q: "Din ce sunt formate rețelele neuronale?", t6_qa: "Neuroni artificiali", t6_qb: "Doar cipuri de memorie", t6_qc: "Roți dințate", t6_qd: "Etichete HTML",
    t7_title: "Învățare profundă (Deep Learning)", t7_text: "Învățarea profundă este o subcategorie a învățării automate care utilizează rețele neuronale cu multe straturi ascunse pentru a analiza cantități uriașe de date.", t7_inst: "Completează spațiul liber:", t7_sent: "Învățarea profundă folosește rețele cu multe straturi ___.", t7_qa7: "ascunse", t7_qb7: "vizibile", t7_qc7: "șterse", t7_qd7: "stricate", t7_q: "Ce caracterizează Deep Learning?", t7_qa: "Multe straturi ascunse", t7_qb: "Mai puțină putere de calcul", t7_qc: "Nu are nevoie de date", t7_qd: "Este doar pentru text",
    t8_title: "Testul Turing", t8_text: "Testul Turing evaluează dacă o mașină poate manifesta un comportament inteligent echivalent cu cel uman.", t8_inst: "Ordonează cuvintele:", t8_w1: "Testul", t8_w2: "Turing", t8_w3: "evaluează", t8_w4: "comportamentul", t8_w5: "inteligent.", t8_q: "Ce măsoară Testul Turing?", t8_qa: "Inteligența artificială", t8_qb: "Viteza procesorului", t8_qc: "Conexiunea la internet", t8_qd: "Durata bateriei",
    t9_title: "IA Generativă", t9_text: "Inteligența Artificială Generativă poate crea conținut nou precum texte, imagini, muzică sau cod, în loc doar să analizeze datele existente.", t9_inst: "Potrivește:", t9_l1: "Text", t9_r1: "ChatGPT", t9_l2: "Imagine", t9_r2: "Midjourney", t9_l3: "Cod", t9_r3: "Copilot", t9_q: "Ce face IA generativă?", t9_qa: "Creează conținut nou", t9_qb: "Șterge fișiere", t9_qc: "Repară calculatoare", t9_qd: "Imprimă documente",
    t10_title: "Viziune computerizată", t10_text: "Viziunea computerizată permite calculatoarelor să înțeleagă și să interpreteze informații vizuale din lumea reală, cum ar fi imagini și videoclipuri.", t10_inst: "Sortează:", t10_bl1: "Viziune computerizată", t10_bl2: "Fără viziune", t10_i1: "Recunoaștere facială", t10_i2: "Înregistrare audio", t10_i3: "Detectarea obiectelor", t10_i4: "Document text", t10_q: "Ce domeniu se ocupă de vederea artificială?", t10_qa: "Viziunea computerizată", t10_qb: "Procesare audio", t10_qc: "Data Mining", t10_qd: "Securitatea rețelei",
    t11_title: "Procesarea limbajului natural (NLP)", t11_text: "NLP (Procesarea Limbajului Natural) permite calculatoarelor să înțeleagă, să interpreteze și să genereze limbaj uman.", t11_inst: "Evidențiază aplicația NLP:", t11_tk1: "Traducerea", t11_tk2: "automată", t11_tk3: "este", t11_tk4: "un", t11_tk5: "exemplu.", t11_q: "Ce înseamnă NLP?", t11_qa: "Natural Language Processing", t11_qb: "New Level Programming", t11_qc: "Neural Logic Process", t11_qd: "Network Local Protocol",
    t12_title: "Etica și prejudecățile IA", t12_text: "Modelele IA pot moșteni prejudecăți (bias) din datele lor de antrenament. Etica IA se ocupă de corectitudine, transparență și responsabilitate în IA.", t12_inst: "Construiește fraza:", t12_f1: "IA", t12_f2: "trebuie", t12_f3: "să fie corectă", t12_f4: "și transparentă.", t12_q: "Ce este o prejudecată IA (bias)?", t12_qa: "O preconcepție în model", t12_qb: "Un virus de calculator", t12_qc: "O eroare hardware", t12_qd: "Un nou model IA",
    t13_title: "Robotică", t13_text: "Robotica combină IA cu mașini fizice pentru a efectua sarcini în lumea reală, în mod autonom sau semi-autonom.", t13_inst: "Ordonează:", t13_w1: "Roboții", t13_w2: "interacționează", t13_w3: "cu", t13_w4: "lumea", t13_w5: "fizică.", t13_q: "Care este caracteristica principală a roboticii?", t13_qa: "Mașinile fizice", t13_qb: "Doar software-ul", t13_qc: "Crearea de site-uri", t13_qd: "Generarea de text",
    t14_title: "Sisteme expert", t14_text: "Un sistem expert este un program de calculator care imită cunoștințele și capacitatea de decizie a unui expert uman.", t14_inst: "Completează spațiul liber:", t14_sent: "Sistemele expert folosesc o ___ pentru a lua decizii.", t14_qa14: "bază de cunoștințe", t14_qb14: "mouse", t14_qc14: "placă video", t14_qd14: "cameră", t14_q: "Ce simulează sistemele expert?", t14_qa: "Expertiza umană", t14_qb: "Condițiile meteorologice", t14_qc: "Jocurile video", t14_qd: "Traficul în rețea",
    t15_title: "Sisteme de recomandare", t15_text: "Sistemele de recomandare analizează datele utilizatorilor pentru a oferi sugestii personalizate, cum ar fi filme, produse sau muzică.", t15_inst: "Potrivește:", t15_l1: "Netflix", t15_r1: "Filme", t15_l2: "Spotify", t15_r2: "Muzică", t15_l3: "Amazon", t15_r3: "Produse", t15_q: "Care este obiectivul unui sistem de recomandare?", t15_qa: "Să facă sugestii personalizate", t15_qb: "Să oprească calculatorul", t15_qc: "Să schimbe parole", t15_qd: "Să caute viruși"
  }
};

export const INFO_K8_I7_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "simple-icon", icon: "🤖", color: "#1A237E" },
    interactive: {
      type: "match-pairs",
      instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2",
      pairs: [
        { left: "t1_l1", right: "t1_r1" },
        { left: "t1_l2", right: "t1_r2" },
        { left: "t1_l3", right: "t1_r3" },
      ],
    },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "📊", color: "#006064" },
    interactive: {
      type: "gap-fill",
      instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2",
      sentence: "t2_sent",
      choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"],
      correctIndex: 0,
    },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "simple-icon", icon: "🧠", color: "#880E4F" },
    interactive: {
      type: "word-order",
      instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2",
      words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5"],
      correctOrder: [0, 1, 2, 3, 4],
    },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "📚", color: "#E65100" },
    interactive: {
      type: "drag-to-bucket",
      instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2",
      buckets: [
        { id: "train", label: "t4_bl1" },
        { id: "test", label: "t4_bl2" },
      ],
      items: [
        { text: "t4_i1", bucketId: "train" },
        { text: "t4_i2", bucketId: "test" },
        { text: "t4_i3", bucketId: "train" },
        { text: "t4_i4", bucketId: "test" },
      ],
    },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "💬", color: "#1B5E20" },
    interactive: {
      type: "highlight-text",
      instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2",
      tokens: ["t5_tk1", "t5_tk2", "t5_tk3", "t5_tk4", "t5_tk5"],
      correctIndices: [0, 2, 4],
    },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "simple-icon", icon: "🕸️", title: "Neural Networks" },
    interactive: { type: "sentence-build", instruction: "t6_inst", fragments: ["t6_f1", "t6_f2", "t6_f3", "t6_f4"] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" }
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "Deep", color: "#3F51B5" },
    interactive: { type: "gap-fill", instruction: "t7_inst", sentence: "t7_sent", choices: ["t7_qa7", "t7_qb7", "t7_qc7", "t7_qd7"], correctIndex: 0 },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" }
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "simple-icon", icon: "🕵️", title: "Turing Test" },
    interactive: { type: "word-order", instruction: "t8_inst", words: ["t8_w1", "t8_w2", "t8_w3", "t8_w4", "t8_w5"], correctOrder: [0, 1, 2, 3, 4] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" }
  },
  {
    infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "simple-icon", icon: "✨", title: "Generative AI" },
    interactive: { type: "match-pairs", instruction: "t9_inst", pairs: [{ left: "t9_l1", right: "t9_r1" }, { left: "t9_l2", right: "t9_r2" }, { left: "t9_l3", right: "t9_r3" }] },
    quiz: { question: "t9_q", choices: ["t9_qa", "t9_qb", "t9_qc", "t9_qd"], answer: "t9_qa" }
  },
  {
    infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "simple-icon", icon: "👁️", title: "Computer Vision" },
    interactive: { type: "drag-to-bucket", instruction: "t10_inst", buckets: [{ id: "cv", label: "t10_bl1" }, { id: "no", label: "t10_bl2" }], items: [{ text: "t10_i1", bucketId: "cv" }, { text: "t10_i2", bucketId: "no" }, { text: "t10_i3", bucketId: "cv" }, { text: "t10_i4", bucketId: "no" }] },
    quiz: { question: "t10_q", choices: ["t10_qa", "t10_qb", "t10_qc", "t10_qd"], answer: "t10_qa" }
  },
  {
    infoTitle: "t11_title", infoText: "t11_text",
    svg: { type: "simple-icon", icon: "🗣️", title: "NLP" },
    interactive: { type: "highlight-text", instruction: "t11_inst", tokens: ["t11_tk1", "t11_tk2", "t11_tk3", "t11_tk4", "t11_tk5"], correctIndices: [0, 1] },
    quiz: { question: "t11_q", choices: ["t11_qa", "t11_qb", "t11_qc", "t11_qd"], answer: "t11_qa" }
  },
  {
    infoTitle: "t12_title", infoText: "t12_text",
    svg: { type: "simple-icon", icon: "⚖️", title: "Ethics" },
    interactive: { type: "sentence-build", instruction: "t12_inst", fragments: ["t12_f1", "t12_f2", "t12_f3", "t12_f4"] },
    quiz: { question: "t12_q", choices: ["t12_qa", "t12_qb", "t12_qc", "t12_qd"], answer: "t12_qa" }
  },
  {
    infoTitle: "t13_title", infoText: "t13_text",
    svg: { type: "simple-icon", icon: "🦾", title: "Robotics" },
    interactive: { type: "word-order", instruction: "t13_inst", words: ["t13_w1", "t13_w2", "t13_w3", "t13_w4", "t13_w5"], correctOrder: [0, 1, 2, 3, 4] },
    quiz: { question: "t13_q", choices: ["t13_qa", "t13_qb", "t13_qc", "t13_qd"], answer: "t13_qa" }
  },
  {
    infoTitle: "t14_title", infoText: "t14_text",
    svg: { type: "simple-icon", icon: "🎓", title: "Expert Systems" },
    interactive: { type: "gap-fill", instruction: "t14_inst", sentence: "t14_sent", choices: ["t14_qa14", "t14_qb14", "t14_qc14", "t14_qd14"], correctIndex: 0 },
    quiz: { question: "t14_q", choices: ["t14_qa", "t14_qb", "t14_qc", "t14_qd"], answer: "t14_qa" }
  },
  {
    infoTitle: "t15_title", infoText: "t15_text",
    svg: { type: "simple-icon", icon: "👍", title: "Recommendation Systems" },
    interactive: { type: "match-pairs", instruction: "t15_inst", pairs: [{ left: "t15_l1", right: "t15_r1" }, { left: "t15_l2", right: "t15_r2" }, { left: "t15_l3", right: "t15_r3" }] },
    quiz: { question: "t15_q", choices: ["t15_qa", "t15_qb", "t15_qc", "t15_qd"], answer: "t15_qa" }
  }
];
