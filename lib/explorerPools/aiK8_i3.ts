// lib/explorerPools/aiK8_i3.ts
import type { PoolTopicDef } from "./types";

export const INFO_K8_I3_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "KI Insel 3: Ethik & Zukunft",
    t1_title: "Generative KI", t1_text: "Generative KI kann neue Inhalte wie Texte, Bilder oder Musik erstellen, statt nur vorhandene Daten zu analysieren.", t1_inst: "Ordne die Paare zu:", t1_h1: "Erschaffen statt nur finden.", t1_h2: "Kreative Maschinen.", t1_q: "Was zeichnet generative KI aus?", t1_qa: "Erstellung neuer Inhalte", t1_qb: "Nur Daten löschen", t1_qc: "Hardware reparieren", t1_qd: "Strom sparen",
    t1_l1: "Text", t1_r1: "ChatGPT", t1_l2: "Bild", t1_r2: "Midjourney", t1_l3: "Musik", t1_r3: "Suno",
    t2_title: "LLMs (Sprachmodelle)", t2_text: "Große Sprachmodelle (LLMs) wie GPT-4 wurden mit riesigen Textmengen trainiert, um menschenähnlich zu schreiben.", t2_inst: "Fülle die Lücke aus:", t2_h1: "Riesige Netze.", t2_h2: "Wort für Wort.", t2_q: "Was bedeutet LLM?", t2_qa: "Large Language Model", t2_qb: "Little Logic Machine", t2_qc: "Long Learning Method", t2_qd: "Local Language Monitor",
    t2_sent: "Ein LLM sagt das nächste ___ in einem Satz voraus.", t2_qa2: "Wort", t2_qb2: "Bild", t2_qc2: "Auto", t2_qd2: "Wetter",
    t3_title: "KI-Kunst", t3_text: "KI kann aus Textbeschreibungen (Prompts) beeindruckende Bilder in jedem Stil erzeugen.", t3_inst: "Sortiere in die Eimer:", t3_h1: "Text zu Bild.", t3_h2: "Werkzeuge.", t3_q: "Wie nennt man die Textanweisung an eine KI?", t3_qa: "Prompt", t3_qb: "Code", t3_qc: "Mail", t3_qd: "Befehl",
    t3_bl1: "KI Tool", t3_bl2: "Klassisch", t3_i1: "DALL-E", t3_i2: "Ölfarbe", t3_i3: "Stable Diffusion", t3_i4: "Bleistift",
    t4_title: "KI-Ethik", t4_text: "Ethik in der KI befasst sich mit Fragen der Fairness, Verantwortung und Sicherheit.", t4_inst: "Bringe die Wörter in Ordnung:", t4_h1: "Richtig oder falsch?", t4_h2: "Werte für Maschinen.", t4_q: "Warum ist KI-Ethik wichtig?", t4_qa: "Um Diskriminierung zu vermeiden", t4_qb: "Damit KI schneller wird", t4_qc: "Um Geld zu sparen", t4_qd: "Für besseres WLAN",
    t4_w1: "KI", t4_w2: "sollte", t4_w3: "fair", t4_w4: "und", t4_w5: "für", t4_w6: "alle", t4_w7: "nutzbar sein.",
    t5_title: "Deepfakes", t5_text: "Deepfakes sind täuschend echte, aber künstlich erzeugte Medien (Bilder, Videos), die oft Personen zeigen.", t5_inst: "Markiere das richtige Wort:", t5_h1: "Gefahr der Manipulation.", t5_h2: "Nicht alles glauben.", t5_q: "Was ist ein Deepfake?", t5_qa: "Manipuliertes Video", t5_qb: "Ein Computerspiel", t5_qc: "Ein neuer Prozessor", t5_qd: "Ein tiefes Loch",
    t5_tk1: "Deepfakes", t5_tk2: "können", t5_tk3: "genutzt", t5_tk4: "werden", t5_tk5: "um", t5_tk6: "Falschinformationen", t5_tk7: "zu verbreiten.",
    t6_title: "Arbeitswelt & KI", t6_text: "KI wird viele Berufe verändern; einige Aufgaben fallen weg, neue Berufe entstehen.", t6_inst: "Ordne die Paare zu:", t6_h1: "Wandel der Arbeit.", t6_h2: "Neue Rollen.", t6_q: "Was ist ein neuer Beruf durch KI?", t6_qa: "Prompt Engineer", t6_qb: "Hufschmied", t6_qc: "Schriftsetzer", t6_qd: "Kutscher",
    t6_l1: "Routine", t6_r1: "Automatisierung", t6_l2: "KI-Hilfe", t6_r2: "Co-Pilot", t6_l3: "Neu", t6_r3: "KI-Trainer",
    t7_title: "Verantwortung", t7_text: "Wer ist verantwortlich, wenn eine KI einen Fehler macht? Diese Frage ist rechtlich oft noch ungeklärt.", t7_inst: "Fülle die Lücke aus:", t7_h1: "Wer haftet?", t7_h2: "Mensch oder Maschine?", t7_q: "Warum ist die Haftung bei KI schwierig?", t7_qa: "KI ist keine Person", t7_qb: "KI ist zu teuer", t7_qc: "KI hat keinen Akku", t7_qd: "KI ist zu klein",
    t7_sent: "Am Ende trägt der ___ die Verantwortung.", t7_qa2: "Mensch", t7_qb2: "Algorithmus", t7_qc2: "Computer", t7_qd2: "Monitor",
    t8_title: "Nachhaltigkeit", t8_text: "Das Training großer KI-Modelle verbraucht sehr viel Energie und Wasser zur Kühlung.", t8_inst: "Sortiere in die Eimer:", t8_h1: "Umweltfolgen.", t8_h2: "Ressourcen.", t8_q: "Was ist ein Umweltproblem von KI?", t8_qa: "Hoher Stromverbrauch", t8_qb: "Zu viel Lärm", t8_qc: "Schlechte Gerüche", t8_qd: "Mehr Plastik",
    t8_bl1: "Ressource", t8_bl2: "Keine", t8_i1: "Strom", t8_i2: "Kühlwasser", t8_i3: "Sonnenlicht", t8_i4: "Vogelgesang",
    t9_title: "Autonome Fahrzeuge", t9_text: "Selbstfahrende Autos nutzen KI, um den Verkehr zu analysieren und sicher zu navigieren.", t9_inst: "Bringe die Wörter in Ordnung:", t9_h1: "Fahren ohne Hände.", t9_h2: "Sicherheit zuerst.", t9_q: "Welches System hilft beim autonomen Fahren?", t9_qa: "Lidar & Kameras", t9_qb: "CD-Player", t9_qc: "Klimaanlage", t9_qd: "Hupe",
    t9_w1: "Autonome", t9_w2: "Autos", t9_w3: "treffen", t9_w4: "Entscheidungen", t9_w5: "in", t9_w6: "Echtzeit.", t9_w7: "",
    t10_title: "KI in der Medizin", t10_text: "KI hilft Ärzten, Krankheiten auf Röntgenbildern schneller zu erkennen oder Medikamente zu entwickeln.", t10_inst: "Markiere das richtige Wort:", t10_h1: "Diagnose-Hilfe.", t10_h2: "Leben retten.", t10_q: "Was kann KI in der Medizin besonders gut?", t10_qa: "Mustererkennung", t10_qb: "Operationen alleine machen", t10_qc: "Patienten trösten", t10_qd: "Kaffee kochen",
    t10_tk1: "KI", t10_tk2: "unterstützt", t10_tk3: "Ärzte", t10_tk4: "bei", t10_tk5: "der", t10_tk6: "Diagnose.",
    t11_title: "KI in der Bildung", t11_text: "KI-Tutoren können Schülern beim Lernen helfen und Aufgaben individuell anpassen.", t11_inst: "Ordne die Paare zu:", t11_h1: "Lernen 2.0.", t11_h2: "Persönlicher Tutor.", t11_q: "Wie hilft KI beim Lernen?", t11_qa: "Individuelle Förderung", t11_qb: "Hausaufgaben klauen", t11_qc: "Schule löschen", t11_qd: "Noten würfeln",
    t11_l1: "Schüler", t11_r1: "Lerntempo", t11_l2: "KI", t11_r2: "Erklärung", t11_l3: "Feedback", t11_r3: "Sofort",
    t12_title: "Die Zukunft der KI", t12_text: "Forscher arbeiten an KI, die kreativer, logischer und energieeffizienter ist.", t12_inst: "Fülle die Lücke aus:", t12_h1: "Was kommt noch?", t12_h2: "Visionen.", t12_q: "Was ist ein Ziel für zukünftige KI?", t12_qa: "Energieeffizienz", t12_qb: "Weltherrschaft", t12_qc: "Mehr Werbung", t12_qd: "Langsamer werden",
    t12_sent: "Zukünftige KI soll noch besser ___ können.", t12_qa2: "denken", t12_qb2: "schlafen", t12_qc2: "essen", t12_qd2: "schwimmen",
    t13_title: "Superintelligenz", t13_text: "Eine hypothetische KI, die die menschliche Intelligenz in allen Bereichen weit übertrifft.", t13_inst: "Sortiere in die Eimer:", t13_h1: "Theorie vs. Realität.", t13_h2: "Science Fiction?", t13_q: "Existiert Superintelligenz heute schon?", t13_qa: "Nein", t13_qb: "Ja", t13_qc: "In jedem Handy", t13_qd: "Nur nachts",
    t13_bl1: "Realität", t13_bl2: "Theorie", t13_i1: "Taschenrechner", t13_i2: "Superintelligenz", t13_i3: "Spam Filter", t13_i4: "Bewusstsein",
    t14_title: "Explainable AI (XAI)", t14_text: "Erklärbare KI soll Entscheidungen für Menschen nachvollziehbar machen (keine Black Box).", t14_inst: "Bringe die Wörter in Ordnung:", t14_h1: "Warum hat sie das getan?", t14_h2: "Transparenz.", t14_q: "Was ist das Ziel von XAI?", t14_qa: "Transparenz", t14_qb: "Mehr Geheimnisse", t14_qc: "Schönere Farben", t14_qd: "Schnelleres Internet",
    t14_w1: "KI", t14_w2: "Entscheidungen", t14_w3: "müssen", t14_w4: "für", t14_w5: "Menschen", t14_w6: "verstehbar", t14_w7: "sein.",
    t15_title: "Mensch-KI Team", t15_text: "Die besten Ergebnisse entstehen oft durch die Zusammenarbeit von menschlicher Kreativität und KI-Geschwindigkeit.", t15_inst: "Markiere das richtige Wort:", t15_h1: "Zusammen stärker.", t15_h2: "Partnerschaft.", t15_q: "Wie nennt man die Zusammenarbeit von Mensch und KI?", t15_qa: "Kollaboration", t15_qb: "Kampf", t15_qc: "Ignoranz", t15_qd: "Trennung",
    t15_tk1: "Mensch", t15_tk2: "und", t15_tk3: "KI", t15_tk4: "ergänzen", t15_tk5: "sich", t15_tk6: "gegenseitig."
  },
  en: {
    explorer_title: "AI Island 3: Ethics & Future",
    t1_title: "Generative AI", t1_text: "Generative AI can create new content like text, images, or music, instead of just analyzing existing data.", t1_inst: "Match the pairs:", t1_h1: "Creating instead of just finding.", t1_h2: "Creative machines.", t1_q: "What characterizes generative AI?", t1_qa: "Creation of new content", t1_qb: "Just deleting data", t1_qc: "Repairing hardware", t1_qd: "Saving power",
    t1_l1: "Text", t1_r1: "ChatGPT", t1_l2: "Image", t1_r2: "Midjourney", t1_l3: "Music", t1_r3: "Suno",
    t2_title: "LLMs", t2_text: "Large Language Models (LLMs) like GPT-4 were trained on huge amounts of text to write like a human.", t2_inst: "Fill in the blank:", t2_h1: "Huge networks.", t2_h2: "Word by word.", t2_q: "What does LLM stand for?", t2_qa: "Large Language Model", t2_qb: "Little Logic Machine", t2_qc: "Long Learning Method", t2_qd: "Local Language Monitor",
    t2_sent: "An LLM predicts the next ___ in a sentence.", t2_qa2: "word", t2_qb2: "image", t2_qc2: "car", t2_qd2: "weather",
    t3_title: "AI Art", t3_text: "AI can generate impressive images in any style from text descriptions (prompts).", t3_inst: "Sort into buckets:", t3_h1: "Text to image.", t3_h2: "Tools.", t3_q: "What is the text instruction to an AI called?", t3_qa: "Prompt", t3_qb: "Code", t3_qc: "Mail", t3_qd: "Command",
    t3_bl1: "AI Tool", t3_bl2: "Classic", t3_i1: "DALL-E", t3_i2: "Oil paint", t3_i3: "Stable Diffusion", t3_i4: "Pencil",
    t4_title: "AI Ethics", t4_text: "Ethics in AI deals with issues of fairness, accountability, and safety.", t4_inst: "Put the words in order:", t4_h1: "Right or wrong?", t4_h2: "Values for machines.", t4_q: "Why is AI ethics important?", t4_qa: "To avoid discrimination", t4_qb: "To make AI faster", t4_qc: "To save money", t4_qd: "For better Wi-Fi",
    t4_w1: "AI", t4_w2: "should", t4_w3: "be", t4_w4: "fair", t4_w5: "and", t4_w6: "accessible", t4_w7: "to everyone.",
    t5_title: "Deepfakes", t5_text: "Deepfakes are deceptively real but artificially created media (images, videos) that often show people.", t5_inst: "Highlight the correct word:", t5_h1: "Risk of manipulation.", t5_h2: "Don't believe everything.", t5_q: "What is a deepfake?", t5_qa: "Manipulated video", t5_qb: "A computer game", t5_qc: "A new processor", t5_qd: "A deep hole",
    t5_tk1: "Deepfakes", t5_tk2: "can", t5_tk3: "be", t5_tk4: "used", t5_tk5: "to", t5_tk6: "spread", t5_tk7: "misinformation.",
    t6_title: "Work & AI", t6_text: "AI will change many jobs; some tasks will disappear, new professions will emerge.", t6_inst: "Match the pairs:", t6_h1: "Change of work.", t6_h2: "New roles.", t6_q: "What is a new job created by AI?", t6_qa: "Prompt Engineer", t6_qb: "Blacksmith", t6_qc: "Typesetter", t6_qd: "Coachman",
    t6_l1: "Routine", t6_r1: "Automation", t6_l2: "AI Help", t6_r2: "Co-pilot", t6_l3: "New", t6_r3: "AI Trainer",
    t7_title: "Responsibility", t7_text: "Who is responsible when an AI makes a mistake? This question is often still legally unresolved.", t7_inst: "Fill in the blank:", t7_h1: "Who is liable?", t7_h2: "Human or machine?", t7_q: "Why is liability difficult with AI?", t7_qa: "AI is not a person", t7_qb: "AI is too expensive", t7_qc: "AI has no battery", t7_qd: "AI is too small",
    t7_sent: "In the end, the ___ bears the responsibility.", t7_qa2: "human", t7_qb2: "algorithm", t7_qc2: "computer", t7_qd2: "monitor",
    t8_title: "Sustainability", t8_text: "Training large AI models consumes a lot of energy and water for cooling.", t8_inst: "Sort into buckets:", t8_h1: "Environmental impact.", t8_h2: "Resources.", t8_q: "What is an environmental problem of AI?", t8_qa: "High power consumption", t8_qb: "Too much noise", t8_qc: "Bad smells", t8_qd: "More plastic",
    t8_bl1: "Resource", t8_bl2: "None", t8_i1: "Electricity", t8_i2: "Cooling water", t8_i3: "Sunlight", t8_i4: "Birdsong",
    t9_title: "Autonomous Vehicles", t9_text: "Self-driving cars use AI to analyze traffic and navigate safely.", t9_inst: "Put the words in order:", t9_h1: "Driving without hands.", t9_h2: "Safety first.", t9_q: "Which system helps with autonomous driving?", t9_qa: "Lidar & cameras", t9_qb: "CD player", t9_qc: "Air conditioning", t9_qd: "Horn",
    t9_w1: "Autonomous", t9_w2: "cars", t9_w3: "make", t9_w4: "decisions", t9_w5: "in", t9_w6: "real", t9_w7: "time.",
    t10_title: "AI in Medicine", t10_text: "AI helps doctors identify diseases on X-rays faster or develop new drugs.", t10_inst: "Highlight the correct word:", t10_h1: "Diagnosis help.", t10_h2: "Saving lives.", t10_q: "What can AI do particularly well in medicine?", t10_qa: "Pattern recognition", t10_qb: "Perform surgeries alone", t10_qc: "Comfort patients", t10_qd: "Make coffee",
    t10_tk1: "AI", t10_tk2: "supports", t10_tk3: "doctors", t10_tk4: "with", t10_tk5: "the", t10_tk6: "diagnosis.",
    t11_title: "AI in Education", t11_text: "AI tutors can help students learn and adapt tasks individually.", t11_inst: "Match the pairs:", t11_h1: "Learning 2.0.", t11_h2: "Personal tutor.", t11_q: "How does AI help with learning?", t11_qa: "Individual support", t11_qb: "Stealing homework", t11_qc: "Deleting school", t11_qd: "Rolling grades",
    t11_l1: "Student", t11_r1: "Learning pace", t11_l2: "AI", t11_r2: "Explanation", t11_l3: "Feedback", t11_r3: "Immediate",
    t12_title: "Future of AI", t12_text: "Researchers are working on AI that is more creative, logical, and energy-efficient.", t12_inst: "Fill in the blank:", t12_h1: "What's next?", t12_h2: "Visions.", t12_q: "What is a goal for future AI?", t12_qa: "Energy efficiency", t12_qb: "World domination", t12_qc: "More ads", t12_qd: "Slowing down",
    t12_sent: "Future AI should be able to ___ even better.", t12_qa2: "think", t12_qb2: "sleep", t12_qc2: "eat", t12_qd2: "swim",
    t13_title: "Superintelligence", t13_text: "A hypothetical AI that far surpasses human intelligence in all areas.", t13_inst: "Sort into buckets:", t13_h1: "Theory vs. Reality.", t13_h2: "Science fiction?", t13_q: "Does superintelligence exist today?", t13_qa: "No", t13_qb: "Yes", t13_qc: "In every phone", t13_qd: "Only at night",
    t13_bl1: "Reality", t13_bl2: "Theory", t13_i1: "Calculator", t13_i2: "Superintelligence", t13_i3: "Spam filter", t13_i4: "Consciousness",
    t14_title: "XAI", t14_text: "Explainable AI (XAI) aims to make decisions understandable for humans (no black box).", t14_inst: "Put the words in order:", t14_h1: "Why did it do that?", t14_h2: "Transparency.", t14_q: "What is the goal of XAI?", t14_qa: "Transparency", t14_qb: "More secrets", t14_qc: "Prettier colors", t14_qd: "Faster internet",
    t14_w1: "AI", t14_w2: "decisions", t14_w3: "must", t14_w4: "be", t14_w5: "understandable", t14_w6: "for", t14_w7: "humans.",
    t15_title: "Human-AI Team", t15_text: "The best results often come from the collaboration of human creativity and AI speed.", t15_inst: "Highlight the correct word:", t15_h1: "Stronger together.", t15_h2: "Partnership.", t15_q: "What is the collaboration between human and AI called?", t15_qa: "Collaboration", t15_qb: "Fight", t15_qc: "Ignorance", t15_qd: "Separation",
    t15_tk1: "Human", t15_tk2: "and", t15_tk3: "AI", t15_tk4: "complement", t15_tk5: "each", t15_tk6: "other."
  },
  hu: {
    explorer_title: "MI Sziget 3: Etika és jövő",
    t1_title: "Generatív MI", t1_text: "A generatív MI képes új tartalmakat, például szöveget, képet vagy zenét létrehozni ahelyett, hogy csak elemezné a meglévőket.", t1_inst: "Párosítsd össze:", t1_h1: "Alkotás keresés helyett.", t1_h2: "Kreatív gépek.", t1_q: "Mi jellemzi a generatív MI-t?", t1_qa: "Új tartalmak létrehozása", t1_qb: "Csak adattörlés", t1_qc: "Hardverjavítás", t1_qd: "Árammegtakarítás",
    t1_l1: "Szöveg", t1_r1: "ChatGPT", t1_l2: "Kép", t1_r2: "Midjourney", t1_l3: "Zene", t1_r3: "Suno",
    t2_title: "LLM-ek", t2_text: "A nagy nyelvi modelleket (LLM) óriási szövegmennyiségen tanították, hogy emberszerűen írjanak.", t2_inst: "Töltsd ki a hiányt:", t2_h1: "Óriási hálózatok.", t2_h2: "Szóról szóra.", t2_q: "Mit jelent az LLM?", t2_qa: "Nagy nyelvi modell", t2_qb: "Kis logikai gép", t2_qc: "Hosszú tanulási módszer", t2_qd: "Helyi nyelvfigyelő",
    t2_sent: "Az LLM megjósolja a következő ___ a mondatban.", t2_qa2: "szót", t2_qb2: "képet", t2_qc2: "autót", t2_qd2: "időjárást",
    t3_title: "MI-művészet", t3_text: "A MI szöveges leírások (promptok) alapján bármilyen stílusban képes lenyűgöző képeket generálni.", t3_inst: "Válogasd szét:", t3_h1: "Szövegből kép.", t3_h2: "Eszközök.", t3_q: "Hogy hívják a MI-nek adott szöveges utasítást?", t3_qa: "Prompt", t3_qb: "Kód", t3_qc: "E-mail", t3_qd: "Parancs",
    t3_bl1: "MI eszköz", t3_bl2: "Klasszikus", t3_i1: "DALL-E", t3_i2: "Olajfesték", t3_i3: "Stable Diffusion", t3_i4: "Ceruza",
    t4_title: "MI-etika", t4_text: "A MI-etika az igazságosság, a felelősség és a biztonság kérdéseivel foglalkozik.", t4_inst: "Tedd sorrendbe a szavakat:", t4_h1: "Helyes vagy helytelen?", t4_h2: "Értékek a gépeknek.", t4_q: "Miért fontos a MI-etika?", t4_qa: "A diszkrimináció elkerülése miatt", t4_qb: "Hogy gyorsabb legyen a MI", t4_qc: "Hogy pénzt spóroljunk", t4_qd: "A jobb Wi-Fi miatt",
    t4_w1: "A MI-nek", t4_w2: "igazságosnak", t4_w3: "és", t4_w4: "mindenki", t4_w5: "számára", t4_w6: "elérhetőnek", t4_w7: "kellene lennie.",
    t5_title: "Deepfakes", t5_text: "A deepfake-ek megtévesztően valódi, de mesterségesen generált médiatartalmak (képek, videók).", t5_inst: "Jelöld meg a helyes szót:", t5_h1: "Manipuláció veszélye.", t5_h2: "Ne higgy el mindent.", t5_q: "Mi az a deepfake?", t5_qa: "Manipulált videó", t5_qb: "Egy számítógépes játék", t5_qc: "Egy új processzor", t5_qd: "Egy mély lyuk",
    t5_tk1: "A deepfake-eket", t5_tk2: "felhasználhatják", t5_tk3: "álhírek", t5_tk4: "és", t5_tk5: "félrevezető", t5_tk6: "információk", t5_tk7: "terjesztésére.",
    t6_title: "Munka és MI", t6_text: "A MI sok szakmát megváltoztat; egyes feladatok megszűnnek, új foglalkozások jönnek létre.", t6_inst: "Párosítsd össze:", t6_h1: "A munka változása.", t6_h2: "Új szerepkörök.", t6_q: "Mi egy új, MI által létrehozott szakma?", t6_qa: "Prompt Engineer", t6_qb: "Patkolókovács", t6_qc: "Betűszedő", t6_qd: "Kocsis",
    t6_l1: "Rutin", t6_r1: "Automatizálás", t6_l2: "MI segítség", t6_r2: "Co-pilot", t6_l3: "Új", t6_r3: "MI tréner",
    t7_title: "Felelősség", t7_text: "Ki a felelős, ha a MI hibázik? Ez a kérdés jogilag még sokszor tisztázatlan.", t7_inst: "Töltsd ki a hiányt:", t7_h1: "Ki a felelős?", t7_h2: "Ember vagy gép?", t7_q: "Miért nehéz a felelősség kérdése a MI-nél?", t7_qa: "A MI nem jogi személy", t7_qb: "A MI túl drága", t7_qc: "A MI-nek nincs akkuja", t7_qd: "A MI túl kicsi",
    t7_sent: "A végén mindig az ___ viseli a felelősséget.", t7_qa2: "ember", t7_qb2: "algoritmus", t7_qc2: "számítógép", t7_qd2: "monitor",
    t8_title: "Fenntarthatóság", t8_text: "A nagy MI modellek tanítása rengeteg energiát és hűtővizet igényel.", t8_inst: "Válogasd szét:", t8_h1: "Környezeti hatás.", t8_h2: "Erőforrások.", t8_q: "Mi a MI egyik környezeti problémája?", t8_qa: "Magas áramfogyasztás", t8_qb: "Túl sok zaj", t8_qc: "Rossz szagok", t8_qd: "Több műanyag",
    t8_bl1: "Erőforrás", t8_bl2: "Nem az", t8_i1: "Elektromosság", t8_i2: "Hűtővíz", t8_i3: "Napsütés", t8_i4: "Madárdal",
    t9_title: "Önvezető járművek", t9_text: "Az önvezető autók MI-t használnak a forgalom elemzésére és a biztonságos navigációra.", t9_inst: "Tedd sorrendbe a szavakat:", t9_h1: "Vezetés kéz nélkül.", t9_h2: "Első a biztonság.", t9_q: "Melyik rendszer segít az önvezetésben?", t9_qa: "Lidar és kamerák", t9_qb: "CD lejátszó", t9_qc: "Légkondi", t9_qd: "Duda",
    t9_w1: "Az önvezető", t9_w2: "autók", t9_w3: "valós", t9_w4: "időben", t9_w5: "hoznak", t9_w6: "döntéseket.", t9_w7: "",
    t10_title: "MI az orvoslásban", t10_text: "A MI segít az orvosoknak gyorsabban felismerni a betegségeket vagy új gyógyszereket fejleszteni.", t10_inst: "Jelöld meg a helyes szót:", t10_h1: "Diagnózis segítő.", t10_h2: "Életmentés.", t10_q: "Miben kiemelkedő a MI az orvoslásban?", t10_qa: "Mintafelismerés", t10_qb: "Műtétek egyedül", t10_qc: "Vigasztalás", t10_qd: "Kávéfőzés",
    t10_tk1: "A MI", t10_tk2: "támogatja", t10_tk3: "az orvosokat", t10_tk4: "a pontos", t10_tk5: "diagnózisban.", t10_tk6: "",
    t11_title: "MI az oktatásban", t11_text: "A MI-tutorok segíthetnek a tanulóknak a tanulásban és a feladatok személyre szabásában.", t11_inst: "Párosítsd össze:", t11_h1: "Tanulás 2.0.", t11_h2: "Személyes tutor.", t11_q: "Hogyan segít a MI a tanulásban?", t11_qa: "Egyéni fejlesztés", t11_qb: "Házifeladat lopás", t11_qc: "Iskola törlése", t11_qd: "Jegyek sorsolása",
    t11_l1: "Tanuló", t11_r1: "Tanulási tempó", t11_l2: "MI", t11_r2: "Magyarázat", t11_l3: "Visszajelzés", t11_r3: "Azonnali",
    t12_title: "A MI jövője", t12_text: "A kutatók olyan MI-n dolgoznak, amely kreatívabb, logikusabb és energiatakarékosabb.", t12_inst: "Töltsd ki a hiányt:", t12_h1: "Mi jön még?", t12_h2: "Víziók.", t12_q: "Mi a jövőbeli MI egyik célja?", t12_qa: "Energiahatékonyság", t12_qb: "Világuralom", t12_qc: "Több reklám", t12_qd: "Lassulás",
    t12_sent: "A jövő MI-je még jobban tud majd ___.", t12_qa2: "gondolkodni", t12_qb2: "aludni", t12_qc2: "enni", t12_qd2: "úszni",
    t13_title: "Szuperintelligencia", t13_text: "Egy elméleti MI, amely minden területen messze felülmúlja az emberi intelligenciát.", t13_inst: "Válogasd szét:", t13_h1: "Elmélet vs. Valóság.", t13_h2: "Sci-fi?", t13_q: "Létezik ma már szuperintelligencia?", t13_qa: "Nem", t13_qb: "Igen", t13_qc: "Minden mobilban", t13_qd: "Csak éjszaka",
    t13_bl1: "Valóság", t13_bl2: "Elmélet", t13_i1: "Számológép", t13_i2: "Szuperintelligencia", t13_i3: "Spamszűrő", t13_i4: "Öntudat",
    t14_title: "XAI", t14_text: "Az érthető MI célja, hogy a döntéseket követhetővé tegye az emberek számára.", t14_inst: "Tedd sorrendbe a szavakat:", t14_h1: "Miért tette ezt?", t14_h2: "Átláthatóság.", t14_q: "Mi az XAI célja?", t14_qa: "Átláthatóság", t14_qb: "Több titok", t14_qc: "Szebb színek", t14_qd: "Gyorsabb net",
    t14_w1: "A MI", t14_w2: "döntéseinek", t14_w3: "érthetőnek", t14_w4: "kell", t14_w5: "lenniük", t14_w6: "az emberek", t14_w7: "számára.",
    t15_title: "Ember-MI csapat", t15_text: "A legjobb eredmények gyakran az emberi kreativitás és a MI sebességének ötvözéséből születnek.", t15_inst: "Jelöld meg a helyes szót:", t15_h1: "Együtt erősebbek.", t15_h2: "Partnerség.", t15_q: "Hogy hívják az ember és a MI együttműködését?", t15_qa: "Kollaboráció", t15_qb: "Harc", t15_qc: "Ignorálás", t15_qd: "Szétválás",
    t15_tk1: "Az ember", t15_tk2: "és", t15_tk3: "a MI", t15_tk4: "kiegészítik", t15_tk5: "egymást."
  },
  ro: {
    explorer_title: "Insula AI 3: Etică și viitor",
    t1_title: "AI Generativ", t1_text: "AI generativ poate crea conținut nou, cum ar fi text, imagini sau muzică, în loc să analizeze doar datele existente.", t1_inst: "Potrivește perechile:", t1_h1: "Creare în loc de găsire.", t1_h2: "Mașini creative.", t1_q: "Ce caracterizează AI generativ?", t1_qa: "Crearea de conținut nou", t1_qb: "Doar ștergerea datelor", t1_qc: "Repararea hardware-ului", t1_qd: "Economisirea energiei",
    t1_l1: "Text", t1_r1: "ChatGPT", t1_l2: "Imagine", t1_r2: "Midjourney", t1_l3: "Muzică", t1_r3: "Suno",
    t2_title: "LLM-uri", t2_text: "Modelele de limbaj mari (LLM) precum GPT-4 au fost antrenate pe cantități uriașe de text pentru a scrie ca un om.", t2_inst: "Completează spațiul liber:", t2_h1: "Rețele uriașe.", t2_h2: "Cuvânt cu cuvânt.", t2_q: "Ce înseamnă LLM?", t2_qa: "Large Language Model", t2_qb: "Little Logic Machine", t2_qc: "Long Learning Method", t2_qd: "Local Language Monitor",
    t2_sent: "Un LLM prezice următorul ___ dintr-o propoziție.", t2_qa2: "cuvânt", t2_qb2: "imagine", t2_qc2: "mașină", t2_qd2: "vreme",
    t3_title: "Artă AI", t3_text: "AI poate genera imagini impresionante în orice stil din descrieri textuale (prompts).", t3_inst: "Sortează în găleți:", t3_h1: "Text în imagine.", t3_h2: "Unelte.", t3_q: "Cum se numește instrucțiunea text dată unui AI?", t3_qa: "Prompt", t3_qb: "Cod", t3_qc: "Mail", t3_qd: "Comandă",
    t3_bl1: "Unealtă AI", t3_bl2: "Clasic", t3_i1: "DALL-E", t3_i2: "Pictură ulei", t3_i3: "Stable Diffusion", t3_i4: "Creion",
    t4_title: "Etică AI", t4_text: "Etica în AI se ocupă de chestiuni de corectitudine, responsabilitate și siguranță.", t4_inst: "Pune cuvintele în ordine:", t4_h1: "Corect sau greșit?", t4_h2: "Valori pentru mașini.", t4_q: "De ce este importantă etica AI?", t4_qa: "Pentru a evita discriminarea", t4_qb: "Pentru a face AI mai rapid", t4_qc: "Pentru a economisi bani", t4_qd: "Pentru Wi-Fi mai bun",
    t4_w1: "AI", t4_w2: "ar", t4_w3: "trebui", t4_w4: "să", t4_w5: "fie", t4_w6: "corect", t4_w7: "pentru toți.",
    t5_title: "Deepfakes", t5_text: "Deepfakes sunt medii (imagini, videoclipuri) create artificial, care par incredibil de reale.", t5_inst: "Evidențiază cuvântul corect:", t5_h1: "Risc de manipulare.", t5_h2: "Nu crede totul.", t5_q: "Ce este un deepfake?", t5_qa: "Video manipulat", t5_qb: "Un joc pe calculator", t5_qc: "Un procesor nou", t5_qd: "O groapă adâncă",
    t5_tk1: "Deepfake-urile", t5_tk2: "pot", t5_tk3: "fi", t5_tk4: "folosite", t5_tk5: "pentru", t5_tk6: "a răspândi", t5_tk7: "dezinformări.",
    t6_title: "Muncă și AI", t6_text: "AI va schimba multe locuri de muncă; unele sarcini vor dispărea, vor apărea profesii noi.", t6_inst: "Potrivește perechile:", t6_h1: "Schimbarea muncii.", t6_h2: "Roluri noi.", t6_q: "Care este un job nou creat de AI?", t6_qa: "Prompt Engineer", t6_qb: "Potcovar", t6_qc: "Zețar", t6_qd: "Vizitiu",
    t6_l1: "Rutină", t6_r1: "Automatizare", t6_l2: "Ajutor AI", t6_r2: "Co-pilot", t6_l3: "Nou", t6_r3: "Trainer AI",
    t7_title: "Responsabilitate", t7_text: "Cine este responsabil când un AI greșește? Această întrebare este adesea nerezolvată legal.", t7_inst: "Completează spațiul liber:", t7_h1: "Cine este răspunzător?", t7_h2: "Om sau mașină?", t7_q: "De ce este dificilă răspunderea în AI?", t7_qa: "AI nu este o persoană", t7_qb: "AI este prea scump", t7_qc: "AI nu are baterie", t7_qd: "AI este prea mic",
    t7_sent: "La final, ___ poartă responsabilitatea.", t7_qa2: "omul", t7_qb2: "algoritmul", t7_qc2: "computerul", t7_qd2: "monitorul",
    t8_title: "Sustenabilitate", t8_text: "Antrenarea modelelor mari AI consumă multă energie și apă pentru răcire.", t8_inst: "Sortează în găleți:", t8_h1: "Impact asupra mediului.", t8_h2: "Resurse.", t8_q: "Care este o problemă de mediu a AI?", t8_qa: "Consum mare de curent", t8_qb: "Prea mult zgomot", t8_qc: "Mirosuri urâte", t8_qd: "Mai mult plastic",
    t8_bl1: "Resursă", t8_bl2: "Nu e", t8_i1: "Electricitate", t8_i2: "Apă răcire", t8_i3: "Lumina soarelui", t8_i4: "Cântec păsări",
    t9_title: "Vehicule autonome", t9_text: "Mașinile care se conduc singure folosesc AI pentru a analiza traficul și a naviga sigur.", t9_inst: "Pune cuvintele în ordine:", t9_h1: "Condus fără mâini.", t9_h2: "Siguranța întâi.", t9_q: "Ce sistem ajută la conducerea autonomă?", t9_qa: "Lidar și camere", t9_qb: "CD player", t9_qc: "Aer condiționat", t9_qd: "Claxon",
    t9_w1: "Mașinile", t9_w2: "autonome", t9_w3: "iau", t9_w4: "decizii", t9_w5: "în", t9_w6: "timp", t9_w7: "real.",
    t10_title: "AI în medicină", t10_text: "AI ajută medicii să identifice boli pe radiografii mai rapid sau să dezvolte medicamente noi.", t10_inst: "Evidențiază cuvântul corect:", t10_h1: "Ajutor diagnostic.", t10_h2: "Salvarea vieților.", t10_q: "Ce poate face AI bine în medicină?", t10_qa: "Recunoaștere tipare", t10_qb: "Operații singur", t10_qc: "Consolare pacienți", t10_qd: "Făcut cafea",
    t10_tk1: "AI", t10_tk2: "ajută", t10_tk3: "medicii", t10_tk4: "la", t10_tk5: "punerea", t10_tk6: "diagnosticului.",
    t11_title: "AI in educație", t11_text: "Tutorii AI pot ajuta elevii să învețe și să adapteze sarcinile individual.", t11_inst: "Potrivește perechile:", t11_h1: "Învățare 2.0.", t11_h2: "Tutor personal.", t11_q: "Cum ajută AI la învățare?", t11_qa: "Suport individual", t11_qb: "Furat teme", t11_qc: "Șters școala", t11_qd: "Dat note la zar",
    t11_l1: "Elev", t11_r1: "Ritm învățare", t11_l2: "AI", t11_r2: "Explicație", t11_l3: "Feedback", t11_r3: "Imediat",
    t12_title: "Viitorul AI", t12_text: "Cercetătorii lucrează la un AI care să fie mai creativ, logic și eficient energetic.", t12_inst: "Completează spațiul liber:", t12_h1: "Ce urmează?", t12_h2: "Viziuni.", t12_q: "Care este un scop pentru viitorul AI?", t12_qa: "Eficiență energetică", t12_qb: "Dominația lumii", t12_qc: "Mai multe reclame", t12_qd: "Încetinire",
    t12_sent: "Viitorul AI ar trebui să poată ___ mai bine.", t12_qa2: "gândi", t12_qb2: "dormi", t12_qc2: "mânca", t12_qd2: "înota",
    t13_title: "Superinteligența", t13_text: "Un AI ipotetic care depășește cu mult inteligența umană în toate domeniile.", t13_inst: "Sortează în găleți:", t13_h1: "Teorie vs. Realitate.", t13_h2: "Sci-fi?", t13_q: "Există superinteligență azi?", t13_qa: "Nu", t13_qb: "Da", t13_qc: "În fiecare telefon", t13_qd: "Doar noaptea",
    t13_bl1: "Realitate", t13_bl2: "Teorie", t13_i1: "Calculator", t13_i2: "Superinteligență", t13_i3: "Filtru spam", t13_i4: "Conștiință",
    t14_title: "XAI", t14_text: "AI explicabil (XAI) urmărește să facă deciziile pe înțelesul oamenilor (fără cutie neagră).", t14_inst: "Pune cuvintele în ordine:", t14_h1: "De ce a făcut asta?", t14_h2: "Transparență.", t14_q: "Care este scopul XAI?", t14_qa: "Transparență", t14_qb: "Mai multe secrete", t14_qc: "Culori mai frumoase", t14_qd: "Internet mai rapid",
    t14_w1: "Deciziile", t14_w2: "AI", t14_w3: "trebuie", t14_w4: "să", t14_w5: "fie", t14_w6: "pe înțelesul", t14_w7: "oamenilor.",
    t15_title: "Echipa Om-AI", t15_text: "Cele mai bune rezultate vin adesea din colaborarea dintre creativitatea umană și viteza AI.", t15_inst: "Evidențiază cuvântul corect:", t15_h1: "Mai puternici împreună.", t15_h2: "Parteneriat.", t15_q: "Cum se numește colaborarea dintre om și AI?", t15_qa: "Colaborare", t15_qb: "Luptă", t15_qc: "Ignoranță", t15_qd: "Separare",
    t15_tk1: "Omul", t15_tk2: "și", t15_tk3: "AI", t15_tk4: "se", t15_tk5: "completează", t15_tk6: "reciproc."
  }
};

export const INFO_K8_I3_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "simple-icon", icon: "🎨", color: "#E91E63" },
    interactive: { type: "match-pairs", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", pairs: [{left:"t1_l1",right:"t1_r1"},{left:"t1_l2",right:"t1_r2"},{left:"t1_l3",right:"t1_r3"}] },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" }
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "📚", color: "#3F51B5" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" }
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "icon-grid", items: [{emoji:"🖼️",label:"AI Art"},{emoji:"⌨️",label:"Prompt"}] },
    interactive: { type: "drag-to-bucket", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", buckets: [{id:"b1",label:"t3_bl1"},{id:"b2",label:"t3_bl2"}], items: [{text:"t3_i1",bucketId:"b1"},{text:"t3_i2",bucketId:"b2"},{text:"t3_i3",bucketId:"b1"},{text:"t3_i4",bucketId:"b2"}] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "⚖️", color: "#607D8B" },
    interactive: { type: "word-order", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", words: ["t4_w1", "t4_w2", "t4_w3", "t4_w4", "t4_w5", "t4_w6", "t4_w7"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "🎭", color: "#FF5722" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6","t5_tk7"].filter(x=>x!==undefined), correctIndices: [0,5] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" }
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "simple-icon", icon: "💼", color: "#795548" },
    interactive: { type: "match-pairs", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", pairs: [{left:"t6_l1",right:"t6_r1"},{left:"t6_l2",right:"t6_r2"},{left:"t6_l3",right:"t6_r3"}] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" }
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "🤔", color: "#FF9800" },
    interactive: { type: "gap-fill", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", sentence: "t7_sent", choices: ["t7_qa2", "t7_qb2", "t7_qc2", "t7_qd2"], correctIndex: 0 },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" }
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "simple-icon", icon: "🌱", color: "#4CAF50" },
    interactive: { type: "drag-to-bucket", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", buckets: [{id:"b1",label:"t8_bl1"},{id:"b2",label:"t8_bl2"}], items: [{text:"t8_i1",bucketId:"b1"},{text:"t8_i2",bucketId:"b1"},{text:"t8_i3",bucketId:"b2"},{text:"t8_i4",bucketId:"b2"}] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" }
  },
  {
    infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "simple-icon", icon: "🚗", color: "#2196F3" },
    interactive: { type: "word-order", instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2", words: ["t9_w1", "t9_w2", "t9_w3", "t9_w4", "t9_w5", "t9_w6", "t9_w7"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t9_q", choices: ["t9_qa", "t9_qb", "t9_qc", "t9_qd"], answer: "t9_qa" }
  },
  {
    infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "simple-icon", icon: "🏥", color: "#F44336" },
    interactive: { type: "highlight-text", instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2", tokens: ["t10_tk1","t10_tk2","t10_tk3","t10_tk4","t10_tk5","t10_tk6"].filter(x=>x!==undefined), correctIndices: [0] },
    quiz: { question: "t10_q", choices: ["t10_qa", "t10_qb", "t10_qc", "t10_qd"], answer: "t10_qa" }
  },
  {
    infoTitle: "t11_title", infoText: "t11_text",
    svg: { type: "simple-icon", icon: "🎓", color: "#9C27B0" },
    interactive: { type: "match-pairs", instruction: "t11_inst", hint1: "t11_h1", hint2: "t11_h2", pairs: [{left:"t11_l1",right:"t11_r1"},{left:"t11_l2",right:"t11_r2"},{left:"t11_l3",right:"t11_r3"}] },
    quiz: { question: "t11_q", choices: ["t11_qa", "t11_qb", "t11_qc", "t11_qd"], answer: "t11_qa" }
  },
  {
    infoTitle: "t12_title", infoText: "t12_text",
    svg: { type: "simple-icon", icon: "🚀", color: "#00BCD4" },
    interactive: { type: "gap-fill", instruction: "t12_inst", hint1: "t12_h1", hint2: "t12_h2", sentence: "t12_sent", choices: ["t12_qa2", "t12_qb2", "t12_qc2", "t12_qd2"], correctIndex: 0 },
    quiz: { question: "t12_q", choices: ["t12_qa", "t12_qb", "t12_qc", "t12_qd"], answer: "t12_qa" }
  },
  {
    infoTitle: "t13_title", infoText: "t13_text",
    svg: { type: "icon-grid", items: [{emoji:"📱",label:"Reality"},{emoji:"👽",label:"Theory"}] },
    interactive: { type: "drag-to-bucket", instruction: "t13_inst", hint1: "t13_h1", hint2: "t13_h2", buckets: [{id:"b1",label:"t13_bl1"},{id:"b2",label:"t13_bl2"}], items: [{text:"t13_i1",bucketId:"b1"},{text:"t13_i2",bucketId:"b2"},{text:"t13_i3",bucketId:"b1"},{text:"t13_i4",bucketId:"b2"}] },
    quiz: { question: "t13_q", choices: ["t13_qa", "t13_qb", "t13_qc", "t13_qd"], answer: "t13_qa" }
  },
  {
    infoTitle: "t14_title", infoText: "t14_text",
    svg: { type: "simple-icon", icon: "🔍", color: "#673AB7" },
    interactive: { type: "word-order", instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2", words: ["t14_w1", "t14_w2", "t14_w3", "t14_w4", "t14_w5", "t14_w6", "t14_w7"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t14_q", choices: ["t14_qa", "t14_qb", "t14_qc", "t14_qd"], answer: "t14_qa" }
  },
  {
    infoTitle: "t15_title", infoText: "t15_text",
    svg: { type: "text-bubbles", items: [{text:"Human",bg:"#E91E63",color:"#fff",emoji:"🧠"},{text:"AI",bg:"#2196F3",color:"#fff",emoji:"🤖"}] },
    interactive: { type: "highlight-text", instruction: "t15_inst", hint1: "t15_h1", hint2: "t15_h2", tokens: ["t15_tk1","t15_tk2","t15_tk3","t15_tk4","t15_tk5","t15_tk6"].filter(x=>x!==undefined), correctIndices: [0,2] },
    quiz: { question: "t15_q", choices: ["t15_qa", "t15_qb", "t15_qc", "t15_qd"], answer: "t15_qa" }
  }
];
