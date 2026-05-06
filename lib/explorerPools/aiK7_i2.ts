// @ts-nocheck
// lib/explorerPools/aiK7_i2.ts
import type { PoolTopicDef } from "./types";

export const INFO_K7_I2_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "KI Insel 2: Anwendung & Ethik",
    t1_title: "Selbstfahrende Autos", t1_text: "KI steuert Autos sicher durch den Verkehr, indem sie die Umgebung scannt.", t1_inst: "Ordne die Paare zu:", t1_h1: "Sicher ankommen.", t1_h2: "Sensoren am Auto.", t1_q: "Was nutzt ein selbstfahrendes Auto zum Sehen?", t1_qa: "Kameras und Sensoren", t1_qb: "Einen Atlas", t1_qc: "Ein Fernglas", t1_qd: "Den Rückspiegel",
    t1_l1: "Kamera", t1_r1: "Objekterkennung", t1_l2: "Radar", t1_r2: "Abstandsmessung", t1_l3: "KI-Modell", t1_r3: "Fahrentscheidung",
    t2_title: "KI in der Medizin", t2_text: "KI hilft Ärzten, Krankheiten auf Röntgenbildern schneller zu finden.", t2_inst: "Fülle die Lücke aus:", t2_h1: "Gesundheit zuerst.", t2_h2: "Früherkennung.", t2_q: "Wie unterstützt KI Mediziner?", t2_qa: "Durch Analyse von Daten", t2_qb: "Durch Staubsaugen", t2_qc: "Durch Kochen", t2_qd: "Durch Schlafen",
    t2_sent: "KI kann helfen, ___ auf Bildern zu entdecken.", t2_qa2: "Tumore", t2_qb2: "Blumen", t2_qc2: "Autos", t2_qd2: "Sterne",
    t3_title: "Generative KI", t3_text: "KI kann neue Bilder, Texte und Musik erschaffen (z.B. Midjourney).", t3_inst: "Sortiere in die Eimer:", t3_h1: "Echtes Foto oder KI?", t3_h2: "Kreative Maschinen.", t3_q: "Was kann generative KI?", t3_qa: "Neue Inhalte erstellen", t3_qb: "Nur Kopieren", t3_qc: "Hardware bauen", t3_qd: "Strom sparen",
    t3_bl1: "Text-KI", t3_bl2: "Bild-KI", t3_i1: "ChatGPT", t3_i2: "DALL-E", t3_i3: "Gemini", t3_i4: "Stable Diffusion",
    t4_title: "Empfehlungssysteme", t4_text: "Netflix und YouTube nutzen KI, um dir passende Videos vorzuschlagen.", t4_inst: "Bringe die Wörter in Ordnung:", t4_h1: "Was dir gefällt.", t4_h2: "Personalisierung.", t4_q: "Warum schlägt YouTube Videos vor?", t4_qa: "Wegen deiner Vorlieben", t4_qb: "Durch Zufall", t4_qc: "Weil es regnet", t4_qd: "Es ist ein Fehler",
    t4_w1: "KI", t4_w2: "analysiert", t4_w3: "dein", t4_w4: "Verhalten,", t4_w5: "um", t4_w6: "Vorschläge", t4_w7: "zu", t4_w8: "machen.",
    t5_title: "Übersetzung & Sprache", t5_text: "KI-Tools wie DeepL übersetzen Texte fast so gut wie Menschen.", t5_inst: "Markiere das richtige Wort:", t5_h1: "Sprachbarrieren abbauen.", t5_h2: "Weltweite Kommunikation.", t5_q: "Welches Tool nutzt oft KI?", t5_qa: "Google Übersetzer", t5_qb: "Ein Taschenrechner", t5_qc: "Eine Stoppuhr", t5_qd: "Paint",
    t5_tk1: "Moderne", t5_tk2: "Übersetzer", t5_tk3: "verstehen", t5_tk4: "den", t5_tk5: "Kontext", t5_tk6: "eines", t5_tk7: "Satzes.",
    t6_title: "Vorurteile in der KI (Bias)", t6_text: "KI kann unfair sein, wenn sie mit schlechten Daten trainiert wurde.", t6_inst: "Tippe auf die Daten:", t6_h1: "Gerechtigkeit.", t6_h2: "Datenqualität zählt.", t6_q: "Woher kommen KI-Vorurteile?", t6_qa: "Aus den Trainingsdaten", t6_qb: "Vom Stromnetz", t6_qc: "Vom Gehäuse", t6_qd: "Vom Internetkabel",
    t6_tap_count: "4", t6_tap_inst: "Tippe 4 Mal auf die unfairen Daten!",
    t7_title: "Datenschutz & KI", t7_text: "KI braucht viele Daten, aber unsere Privatsphäre muss geschützt bleiben.", t7_inst: "Ordne die Paare zu:", t7_h1: "Sicher im Netz.", t7_h2: "Meine Daten gehören mir.", t7_q: "Was ist wichtig bei KI-Daten?", t7_qa: "Datenschutz", t7_qb: "Viel Werbung", t7_qc: "Kein Passwort", t7_qd: "Löschen verboten",
    t7_l1: "Anonymisierung", t7_r1: "Namen entfernen", t7_l2: "Verschlüsselung", t7_r2: "Sicherheit", t7_l3: "Einwilligung", t7_r3: "Erlaubnis",
    t8_title: "Jobs & KI", t8_text: "KI wird viele Berufe verändern, aber auch neue erschaffen.", t8_inst: "Fülle die Lücke aus:", t8_h1: "Zukunft der Arbeit.", t8_h2: "Neue Chancen.", t8_q: "Was passiert durch KI mit Jobs?", t8_qa: "Sie verändern sich", t8_qb: "Alle verschwinden", t8_qc: "Nichts", t8_qd: "Sie werden kürzer",
    t8_sent: "Ein ___ Engineer arbeitet direkt mit KI.", t8_qa2: "Prompt", t8_qb2: "Pizza", t8_qc2: "Bus", t8_qd2: "Wald",
    t9_title: "Deepfakes", t9_text: "Täuschend echte, aber gefälschte Videos oder Audios von Personen.", t9_inst: "Sortiere in die Eimer:", t9_h1: "Echt oder Fake?", t9_h2: "Manipulation erkennen.", t9_q: "Was ist ein Deepfake?", t9_qa: "Ein KI-gefälschtes Medium", t9_qb: "Ein tiefes Loch", t9_qc: "Eine neue Kamera", t9_qd: "Ein Kuchen",
    t9_bl1: "Echtes Video", t9_bl2: "Deepfake", t9_i1: "Handykamera-Clip", t9_i2: "KI-generiertes Gesicht", t9_i3: "Live-Interview", t9_i4: "Stimm-Manipulation",
    t10_title: "KI & Nachhaltigkeit", t10_text: "Das Training von KI verbraucht sehr viel Energie.", t10_inst: "Bringe die Wörter in Ordnung:", t10_h1: "Grüne Technik?", t10_h2: "Stromhunger der Server.", t10_q: "Was verbraucht eine KI beim Training?", t10_qa: "Viel Strom", t10_qb: "Viel Wasser", t10_qc: "Viel Papier", t10_qd: "Viel Holz",
    t10_w1: "Große", t10_w2: "KI-Modelle", t10_w3: "benötigen", t10_w4: "riesige", t10_w5: "Mengen", t10_w6: "an", t10_w7: "Energie.",
    t11_title: "Fairness", t11_text: "KI-Systeme sollten alle Menschen gleich behandeln.", t11_inst: "Markiere das richtige Wort:", t11_h1: "Alle sind gleich.", t11_h2: "Gerechtigkeit.", t11_q: "Was ist ein Ziel ethischer KI?", t11_qa: "Fairness", t11_qb: "Geschwindigkeit", t11_qc: "Profit", t11_qd: "Lautstärke",
    t11_tk1: "KI", t11_tk2: "sollte", t11_tk3: "ohne", t11_tk4: "Diskriminierung", t11_tk5: "entscheiden.",
    t12_title: "Rechenschaftspflicht", t12_text: "Wer ist verantwortlich, wenn eine KI einen Fehler macht?", t12_inst: "Tippe auf die Verantwortlichen:", t12_h1: "Verantwortung.", t12_h2: "Wer haftet?", t12_q: "Wer trägt die Verantwortung für die KI?", t12_qa: "Die Entwickler/Nutzer", t12_qb: "Die Batterie", t12_qc: "Der Monitor", t12_qd: "Die Steckdose",
    t12_tap_count: "2", t12_tap_inst: "Tippe 2 Mal auf die Entwickler!",
    t13_title: "Transparenz", t13_text: "Wir müssen verstehen können, wie eine KI zu ihrer Entscheidung kommt.", t13_inst: "Ordne die Paare zu:", t13_h1: "Durchblick haben.", t13_h2: "Erklärbarkeit.", t13_q: "Was bedeutet Transparenz bei KI?", t13_qa: "Nachvollziehbarkeit", t13_qb: "Dass sie aus Glas ist", t13_qc: "Dass sie unsichtbar ist", t13_qd: "Dass sie leuchtet",
    t13_l1: "Black Box", t13_r1: "Unklar", t13_l2: "Explainable AI", t13_r2: "Erklärbar", t13_l3: "Open Source", t13_r3: "Offener Code",
    t14_title: "KI-Sicherheit", t14_text: "Sicherstellen, dass KI keine gefährlichen Dinge tut.", t14_inst: "Fülle die Lücke aus:", t14_h1: "Kontrolle behalten.", t14_h2: "Risiken minimieren.", t14_q: "Was ist das Ziel von AI Safety?", t14_qa: "Sicherer Einsatz von KI", t14_qb: "KI-Waffen bauen", t14_qc: "KI-Spiele spielen", t14_qd: "Nichts tun",
    t14_sent: "Sicherheit bedeutet, dass die KI den ___ nicht schadet.", t14_qa2: "Menschen", t14_qb2: "Steinen", t14_qc2: "Wolken", t14_qd2: "Farben",
    t15_title: "Mensch-KI Kollaboration", t15_text: "Mensch und KI arbeiten als Team zusammen.", t15_inst: "Sortiere in die Eimer:", t15_h1: "Teamwork.", t15_h2: "Stärken kombinieren.", t15_q: "Was ist ein Vorteil von Teamarbeit mit KI?", t15_qa: "Bessere Ergebnisse", t15_qb: "Mehr Pause für Menschen", t15_qc: "Weniger Strom", t15_qd: "Kein Internet nötig",
    t15_bl1: "Menschliche Stärken", t15_bl2: "KI Stärken", t15_i1: "Empathie", t15_i2: "Schnelle Berechnung", t15_i3: "Kreativität", t15_i4: "Mustererkennung"
  },
  en: {
    explorer_title: "AI Island 2: Apps & Ethics",
    t1_title: "Self-Driving Cars", t1_text: "AI drives cars safely through traffic by scanning the environment.", t1_inst: "Match the pairs:", t1_h1: "Arrive safely.", t1_h2: "Car sensors.", t1_q: "What does a self-driving car use to see?", t1_qa: "Cameras and sensors", t1_qb: "An atlas", t1_qc: "Binoculars", t1_qd: "The rearview mirror",
    t1_l1: "Camera", t1_r1: "Object recognition", t1_l2: "Radar", t1_r2: "Distance measurement", t1_l3: "AI model", t1_r3: "Driving decision",
    t2_title: "AI in Medicine", t2_text: "AI helps doctors find diseases on X-ray images faster.", t2_inst: "Fill in the blank:", t2_h1: "Health first.", t2_h2: "Early detection.", t2_q: "How does AI support medics?", t2_qa: "By analyzing data", t2_qb: "By vacuuming", t2_qc: "By cooking", t2_qd: "By sleeping",
    t2_sent: "AI can help detect ___ in images.", t2_qa2: "tumors", t2_qb2: "flowers", t2_qc2: "cars", t2_qd2: "stars",
    t3_title: "Generative AI", t3_text: "AI can create new images, texts, and music (e.g., Midjourney).", t3_inst: "Sort into buckets:", t3_h1: "Real photo or AI?", t3_h2: "Creative machines.", t3_q: "What can generative AI do?", t3_qa: "Create new content", t3_qb: "Just copy", t3_qc: "Build hardware", t3_qd: "Save power",
    t3_bl1: "Text AI", t3_bl2: "Image AI", t3_i1: "ChatGPT", t3_i2: "DALL-E", t3_i3: "Gemini", t3_i4: "Stable Diffusion",
    t4_title: "Recommendation Systems", t4_text: "Netflix and YouTube use AI to suggest videos you might like.", t4_inst: "Put the words in order:", t4_h1: "What you like.", t4_h2: "Personalization.", t4_q: "Why does YouTube suggest videos?", t4_qa: "Because of your preferences", t4_qb: "By chance", t4_qc: "Because it's raining", t4_qd: "It's a bug",
    t4_w1: "AI", t4_w2: "analyzes", t4_w3: "your", t4_w4: "behavior", t4_w5: "to", t4_w6: "make", t4_w7: "suggestions.", t4_w8: "",
    t5_title: "Translation & Language", t5_text: "AI tools like DeepL translate texts almost as well as humans.", t5_inst: "Highlight the correct word:", t5_h1: "Breaking language barriers.", t5_h2: "Global communication.", t5_q: "Which tool often uses AI?", t5_qa: "Google Translate", t5_qb: "A calculator", t5_qc: "A stopwatch", t5_qd: "Paint",
    t5_tk1: "Modern", t5_tk2: "translators", t5_tk3: "understand", t5_tk4: "the", t5_tk5: "context", t5_tk6: "of", t5_tk7: "a", t5_tk8: "sentence.",
    t6_title: "Bias in AI", t6_text: "AI can be unfair if it was trained with poor or biased data.", t6_inst: "Tap on the data:", t6_h1: "Justice.", t6_h2: "Data quality matters.", t6_q: "Where do AI biases come from?", t6_qa: "From the training data", t6_qb: "From the power grid", t6_qc: "From the case", t6_qd: "From the internet cable",
    t6_tap_count: "4", t6_tap_inst: "Tap the unfair data 4 times!",
    t7_title: "Privacy & AI", t7_text: "AI needs lots of data, but our privacy must remain protected.", t7_inst: "Match the pairs:", t7_h1: "Safe on the web.", t7_h2: "My data belongs to me.", t7_q: "What is important with AI data?", t7_qa: "Data privacy", t7_qb: "Lots of ads", t7_qc: "No password", t7_qd: "Deleting forbidden",
    t7_l1: "Anonymization", t7_r1: "Remove names", t7_l2: "Encryption", t7_r2: "Security", t7_l3: "Consent", t7_r3: "Permission",
    t8_title: "Jobs & AI", t8_text: "AI will change many jobs but also create new ones.", t8_inst: "Fill in the blank:", t8_h1: "Future of work.", t8_h2: "New opportunities.", t8_q: "What happens to jobs due to AI?", t8_qa: "They are changing", t8_qb: "They all disappear", t8_qc: "Nothing", t8_qd: "They get shorter",
    t8_sent: "A ___ Engineer works directly with AI.", t8_qa2: "Prompt", t8_qb2: "Pizza", t8_qc2: "Bus", t8_qd2: "Forest",
    t9_title: "Deepfakes", t9_text: "Deceptively real but fake videos or audios of people.", t9_inst: "Sort into buckets:", t9_h1: "Real or Fake?", t9_h2: "Recognizing manipulation.", t9_q: "What is a deepfake?", t9_qa: "An AI-faked medium", t9_qb: "A deep hole", t9_qc: "A new camera", t9_qd: "A cake",
    t9_bl1: "Real video", t9_bl2: "Deepfake", t9_i1: "Phone camera clip", t9_i2: "AI-generated face", t9_i3: "Live interview", t9_i4: "Voice manipulation",
    t10_title: "AI & Sustainability", t10_text: "Training AI consumes a lot of energy.", t10_inst: "Put the words in order:", t10_h1: "Green tech?", t10_h2: "Power hunger of servers.", t10_q: "What does AI consume during training?", t10_qa: "A lot of electricity", t10_qb: "A lot of water", t10_qc: "A lot of paper", t10_qd: "A lot of wood",
    t10_w1: "Large", t10_w2: "AI", t10_w3: "models", t10_w4: "require", t10_w5: "huge", t10_w6: "amounts", t10_w7: "of", t10_w8: "energy.",
    t11_title: "Fairness", t11_text: "AI systems should treat everyone equally.", t11_inst: "Highlight the correct word:", t11_h1: "All are equal.", t11_h2: "Justice.", t11_q: "What is a goal of ethical AI?", t11_qa: "Fairness", t11_qb: "Speed", t11_qc: "Profit", t11_qd: "Volume",
    t11_tk1: "AI", t11_tk2: "should", t11_tk3: "decide", t11_tk4: "without", t11_tk5: "any", t11_tk6: "discrimination.",
    t12_title: "Accountability", t12_text: "Who is responsible when AI makes a mistake?", t12_inst: "Tap the responsible ones:", t12_h1: "Responsibility.", t12_h2: "Who is liable?", t12_q: "Who bears the responsibility for AI?", t12_qa: "Developers/Users", t12_qb: "The battery", t12_qc: "The monitor", t12_qd: "The socket",
    t12_tap_count: "2", t12_tap_inst: "Tap the developers 2 times!",
    t13_title: "Transparency", t13_text: "We must be able to understand how an AI reaches its decision.", t13_inst: "Match the pairs:", t13_h1: "Having insight.", t13_h2: "Explainability.", t13_q: "What does transparency mean in AI?", t13_qa: "Traceability", t13_qb: "That it's made of glass", t13_qc: "That it's invisible", t13_qd: "That it glows",
    t13_l1: "Black Box", t13_r1: "Unclear", t13_l2: "Explainable AI", t13_r2: "Explainable", t13_l3: "Open Source", t13_r3: "Open code",
    t14_title: "AI Safety", t14_text: "Ensuring that AI does not do dangerous things.", t14_inst: "Fill in the blank:", t14_h1: "Maintaining control.", t14_h2: "Minimizing risks.", t14_q: "What is the goal of AI Safety?", t14_qa: "Safe deployment of AI", t14_qb: "Building AI weapons", t14_qc: "Playing AI games", t14_qd: "Doing nothing",
    t14_sent: "Safety means that AI does not harm ___.", t14_qa2: "people", t14_qb2: "stones", t14_qc2: "clouds", t14_qd2: "colors",
    t15_title: "Human-AI Collaboration", t15_text: "Humans and AI work together as a team.", t15_inst: "Sort into buckets:", t15_h1: "Teamwork.", t15_h2: "Combine strengths.", t15_q: "What is a benefit of teamwork with AI?", t15_qa: "Better results", t15_qb: "More break for humans", t15_qc: "Less power", t15_qd: "No internet needed",
    t15_bl1: "Human Strengths", t15_bl2: "AI Strengths", t15_i1: "Empathy", t15_i2: "Fast calculation", t15_i3: "Creativity", t15_i4: "Pattern recognition"
  },
  hu: {
    explorer_title: "KI Sziget 2: Alkalmazás & Etika",
    t1_title: "Önvezető autók", t1_text: "A MI biztonságosan vezeti az autókat a forgalomban a környezet pásztázásával.", t1_inst: "Párosítsd össze:", t1_h1: "Érj célba biztonságban.", t1_h2: "Szenzorok az autón.", t1_q: "Mit használ az önvezető autó a látáshoz?", t1_qa: "Kamerákat és szenzorokat", t1_qb: "Atlaszt", t1_qc: "Távcsövet", t1_qd: "Visszapillantót",
    t1_l1: "Kamera", t1_r1: "Tárgyfelismerés", t1_l2: "Radar", t1_r2: "Távolságmérés", t1_l3: "MI modell", t1_r3: "Vezetési döntés",
    t2_title: "MI az orvoslásban", t2_text: "A MI segít az orvosoknak gyorsabban megtalálni a betegségeket a röntgenképeken.", t2_inst: "Töltsd ki a hiányt:", t2_h1: "Az egészség az első.", t2_h2: "Korai felismerés.", t2_q: "Hogyan támogatja a MI az orvosokat?", t2_qa: "Adatok elemzésével", t2_qb: "Porszívózással", t2_qc: "Főzéssel", t2_qd: "Alvással",
    t2_sent: "A MI segíthet felfedezni a ___ a képeken.", t2_qa2: "tumorokat", t2_qb2: "virágokat", t2_qc2: "autókat", t2_qd2: "csillagokat",
    t3_title: "Generatív MI", t3_text: "A MI képes új képeket, szövegeket és zenét alkotni (pl. Midjourney).", t3_inst: "Válogasd szét:", t3_h1: "Valódi fotó vagy MI?", t3_h2: "Kreatív gépek.", t3_q: "Mire képes a generatív MI?", t3_qa: "Új tartalmak létrehozására", t3_qb: "Csak másolásra", t3_qc: "Hardverépítésre", t3_qd: "Áramspórolásra",
    t3_bl1: "Szöveges MI", t3_bl2: "Képgeneráló MI", t3_i1: "ChatGPT", t3_i2: "DALL-E", t3_i3: "Gemini", t3_i4: "Stable Diffusion",
    t4_title: "Ajánlórendszerek", t4_text: "A Netflix és a YouTube MI-t használ, hogy neked tetsző videókat ajánljon.", t4_inst: "Tedd sorrendbe a szavakat:", t4_h1: "Ami tetszik neked.", t4_h2: "Személyre szabás.", t4_q: "Miért ajánl a YouTube videókat?", t4_qa: "Az érdeklődésed alapján", t4_qb: "Véletlenül", t4_qc: "Mert esik az eső", t4_qd: "Ez egy hiba",
    t4_w1: "A MI", t4_w2: "elemzi", t4_w3: "a", t4_w4: "viselkedésedet,", t4_w5: "hogy", t4_w6: "ajánlásokat", t4_w7: "tegyen.", t4_w8: "",
    t5_title: "Fordítás & Nyelv", t5_text: "A MI eszközök, mint a DeepL, majdnem olyan jól fordítanak, mint az emberek.", t5_inst: "Jelöld meg a helyes szót:", t5_h1: "Nyelvi korlátok lebontása.", t5_h2: "Világszintű kommunikáció.", t5_q: "Melyik eszköz használ gyakran MI-t?", t5_qa: "Google Fordító", t5_qb: "Számológép", t5_qc: "Stopperóra", t5_qd: "Paint",
    t5_tk1: "A modern", t5_tk2: "fordítók", t5_tk3: "értik", t5_tk4: "egy", t5_tk5: "mondat", t5_tk6: "környezetét.",
    t6_title: "Előítélet a MI-ben (Bias)", t6_text: "A MI igazságtalan lehet, ha rossz adatokkal tanították.", t6_inst: "Kattints az adatokra:", t6_h1: "Igazságosság.", t6_h2: "Az adatminőség számít.", t6_q: "Honnan jönnek a MI előítéletei?", t6_qa: "A tanító adatokból", t6_qb: "Az elektromos hálózatból", t6_qc: "A gépházból", t6_qd: "Az internetkábelből",
    t6_tap_count: "4", t6_tap_inst: "Kattints 4-szer az igazságtalan adatokra!",
    t7_title: "Adatvédelem & MI", t7_text: "A MI-nek sok adatra van szüksége, de a magánéletünket meg kell védeni.", t7_inst: "Párosítsd össze:", t7_h1: "Biztonság a hálón.", t7_h2: "Az adataim az enyémek.", t7_q: "Mi fontos a MI adatoknál?", t7_qa: "Adatvédelem", t7_qb: "Sok reklám", t7_qc: "Nincs jelszó", t7_qd: "Tilos törölni",
    t7_l1: "Anonimizálás", t7_r1: "Nevek eltávolítása", t7_l2: "Titkosítás", t7_r2: "Biztonság", t7_l3: "Hozzájárulás", t7_r3: "Engedély",
    t8_title: "Munkák & MI", t8_text: "A MI sok szakmát megváltoztat, de újakat is létrehoz.", t8_inst: "Töltsd ki a hiányt:", t8_h1: "A munka jövője.", t8_h2: "Új lehetőségek.", t8_q: "Mi történik a munkákkal a MI miatt?", t8_qa: "Megváltoznak", t8_qb: "Mind eltűnik", t8_qc: "Semmi", t8_qd: "Rövidebbek lesznek",
    t8_sent: "Egy ___ Engineer közvetlenül a MI-vel dolgozik.", t8_qa2: "Prompt", t8_qb2: "Pizza", t8_qc2: "Busz", t8_qd2: "Erdő",
    t9_title: "Deepfakes", t9_text: "Megtévesztően valódi, de hamisított videók vagy hangok emberekről.", t9_inst: "Válogasd szét:", t9_h1: "Valódi vagy hamis?", t9_h2: "Manipuláció felismerése.", t9_q: "Mi az a deepfake?", t9_qa: "MI-vel hamisított média", t9_qb: "Egy mély lyuk", t9_qc: "Egy új kamera", t9_qd: "Egy süti",
    t9_bl1: "Valódi videó", t9_bl2: "Deepfake", t9_i1: "Mobiltelefonos klip", t9_i2: "MI-generált arc", t9_i3: "Élő interjú", t9_i4: "Hangmanipuláció",
    t10_title: "MI & Fenntarthatóság", t10_text: "A MI tanítása nagyon sok energiát fogyaszt.", t10_inst: "Tedd sorrendbe a szavakat:", t10_h1: "Zöld technika?", t10_h2: "A szerverek áraméhsége.", t10_q: "Mit fogyaszt a MI tanítás közben?", t10_qa: "Sok áramot", t10_qb: "Sok vizet", t10_qc: "Sok papírt", t10_qd: "Sok fát",
    t10_w1: "A nagy", t10_w2: "MI modellek", t10_w3: "hatalmas", t10_w4: "mennyiségű", t10_w5: "energiát", t10_w6: "igényelnek.", t10_w7: "",
    t11_title: "Fairness (Méltányosság)", t11_text: "A MI rendszereknek minden embert egyenlően kellene kezelniük.", t11_inst: "Jelöld meg a helyes szót:", t11_h1: "Mindenki egyenlő.", t11_h2: "Igazságosság.", t11_q: "Mi az etikus MI egyik célja?", t11_qa: "Fairness", t11_qb: "Sebesség", t11_qc: "Profit", t11_qd: "Hangerő",
    t11_tk1: "A MI-nek", t11_tk2: "diszkrimináció", t11_tk3: "nélkül", t11_tk4: "kellene", t11_tk5: "döntenie.",
    t12_title: "Felelősség", t12_text: "Ki a felelős, ha a MI hibát követ el?", t12_inst: "Kattints a felelősökre:", t12_h1: "Felelősségvállalás.", t12_h2: "Ki a felelős?", t12_q: "Ki viseli a felelősséget a MI-ért?", t12_qa: "A fejlesztők/felhasználók", t12_qb: "Az akkumulátor", t12_qc: "A monitor", t12_qd: "A konnektor",
    t12_tap_count: "2", t12_tap_inst: "Kattints a fejlesztőkre 2-szer!",
    t13_title: "Transzparencia", t13_text: "Értenünk kell, hogyan jut a MI egy döntésre.", t13_inst: "Párosítsd össze:", t13_h1: "Látni a folyamatot.", t13_h2: "Magyarázhatóság.", t13_q: "Mit jelent a transzparencia a MI-nél?", t13_qa: "Nyomonkövethetőség", t13_qb: "Hogy üvegből van", t13_qc: "Hogy láthatatlan", t13_qd: "Hogy világít",
    t13_l1: "Black Box", t13_r1: "Nem világos", t13_l2: "Explainable AI", t13_r2: "Magyarázható", t13_l3: "Open Source", t13_r3: "Nyílt forráskód",
    t14_title: "MI-biztonság", t14_text: "Annak biztosítása, hogy a MI ne tegyen veszélyes dolgokat.", t14_inst: "Töltsd ki a hiányt:", t14_h1: "Kontroll megőrzése.", t14_h2: "Kockázatok csökkentése.", t14_q: "Mi a célja az AI Safety-nek?", t14_qa: "A MI biztonságos használata", t14_qb: "MI fegyverek építése", t14_qc: "MI játékok játszása", t14_qd: "Semmittevés",
    t14_sent: "A biztonság azt jelenti, hogy a MI nem árt az ___.", t14_qa2: "embereknek", t14_qb2: "köveknek", t14_qc2: "felhőknek", t14_qd2: "színeknek",
    t15_title: "Ember-MI együttműködés", t15_text: "Az ember és a MI csapatként dolgoznak együtt.", t15_inst: "Válogasd szét:", t15_h1: "Csapatmunka.", t15_h2: "Erősségek egyesítése.", t15_q: "Mi az előnye az MI-vel való közös munkának?", t15_qa: "Jobb eredmények", t15_qb: "Több szünet az embernek", t15_qc: "Kevesebb áram", t15_qd: "Nincs szükség netre",
    t15_bl1: "Emberi erősségek", t15_bl2: "MI erősségek", t15_i1: "Empátia", t15_i2: "Gyors számítás", t15_i3: "Kreativitás", t15_i4: "Mintafelismerés"
  },
  ro: {
    explorer_title: "IA Insula 2: Aplicații & Etică",
    t1_title: "Mașini autonome", t1_text: "IA conduce mașinile în siguranță prin trafic scanând mediul înconjurător.", t1_inst: "Potrivește perechile:", t1_h1: "Ajungi în siguranță.", t1_h2: "Senzori pe mașină.", t1_q: "Ce folosește o mașină autonomă pentru a vedea?", t1_qa: "Camere și senzori", t1_qb: "Un atlas", t1_qc: "Un binoclu", t1_qd: "Oglinda retrovizoare",
    t1_l1: "Cameră", t1_r1: "Recunoaștere obiecte", t1_l2: "Radar", t1_r2: "Măsurare distanță", t1_l3: "Model IA", t1_r3: "Decizie de condus",
    t2_title: "IA în medicină", t2_text: "IA îi ajută pe medici să găsească boli pe radiografii mai rapid.", t2_inst: "Completează spațiul liber:", t2_h1: "Sănătatea pe primul loc.", t2_h2: "Detectare timpurie.", t2_q: "Cum îi ajută IA pe medici?", t2_qa: "Prin analizarea datelor", t2_qb: "Dând cu aspiratorul", t2_qc: "Gătind", t2_qd: "Dormind",
    t2_sent: "IA poate ajuta la detectarea ___ pe imagini.", t2_qa2: "tumorilor", t2_qb2: "florilor", t2_qc2: "mașinilor", t2_qd2: "stelelor",
    t3_title: "IA generativă", t3_text: "IA poate crea imagini, texte și muzică noi (ex. Midjourney).", t3_inst: "Sortează în găleți:", t3_h1: "Poză reală sau IA?", t3_h2: "Mașini creative.", t3_q: "Ce poate face IA generativă?", t3_qa: "Creează conținut nou", t3_qb: "Doar copiază", t3_qc: "Construiește hardware", t3_qd: "Economisește curent",
    t3_bl1: "IA de text", t3_bl2: "IA de imagine", t3_i1: "ChatGPT", t3_i2: "DALL-E", t3_i3: "Gemini", t3_i4: "Stable Diffusion",
    t4_title: "Sisteme de recomandare", t4_text: "Netflix și YouTube folosesc IA pentru a-ți sugera videoclipuri pe placul tău.", t4_inst: "Pune cuvintele în ordine:", t4_h1: "Ce îți place.", t4_h2: "Personalizare.", t4_q: "De ce recomandă YouTube videoclipuri?", t4_qa: "Pe baza preferințelor tale", t4_qb: "Din întâmplare", t4_qc: "Fiindcă plouă", t4_qd: "E o eroare",
    t4_w1: "IA", t4_w2: "analizează", t4_w3: "comportamentul", t4_w4: "tău", t4_w5: "pentru", t4_w6: "a", t4_w7: "face", t4_w8: "recomandări.",
    t5_title: "Traducere & Limbă", t5_text: "Instrumentele IA precum DeepL traduc texte aproape la fel de bine ca oamenii.", t5_inst: "Evidențiază cuvântul corect:", t5_h1: "Depășirea barierelor lingvistice.", t5_h2: "Comunicare globală.", t5_q: "Ce instrument folosește adesea IA?", t5_qa: "Google Translate", t5_qb: "Un calculator", t5_qc: "Un cronometru", t5_qd: "Paint",
    t5_tk1: "Traducătorii", t5_tk2: "moderni", t5_tk3: "înțeleg", t5_tk4: "contextul", t5_tk5: "unei", t5_tk6: "propoziții.",
    t6_title: "Prejudecăți în IA (Bias)", t6_text: "IA poate fi nedreaptă dacă a fost antrenată cu date proaste.", t6_inst: "Atinge datele:", t6_h1: "Dreptate.", t6_h2: "Calitatea datelor contează.", t6_q: "De unde vin prejudecățile IA?", t6_qa: "Din datele de antrenament", t6_qb: "Din rețeaua electrică", t6_qc: "Din carcasă", t6_qd: "Din cablul de net",
    t6_tap_count: "4", t6_tap_inst: "Atinge datele nedrepte de 4 ori!",
    t7_title: "Confidențialitate & IA", t7_text: "IA are nevoie de multe date, dar viața privată trebuie protejată.", t7_inst: "Potrivește perechile:", t7_h1: "Sigur pe net.", t7_h2: "Datele mele îmi aparțin.", t7_q: "Ce este important la datele IA?", t7_qa: "Confidențialitatea", t7_qb: "Multă reclamă", t7_qc: "Fără parolă", t7_qd: "Ștergerea interzisă",
    t7_l1: "Anonimizare", t7_r1: "Eliminare nume", t7_l2: "Criptare", t7_r2: "Securitate", t7_l3: "Consimțământ", t7_r3: "Permisiune",
    t8_title: "Joburi & IA", t8_text: "IA va schimba multe profesii, dar va crea și altele noi.", t8_inst: "Completează spațiul liber:", t8_h1: "Viitorul muncii.", t8_h2: "Noi oportunități.", t8_q: "Ce se întâmplă cu joburile din cauza IA?", t8_qa: "Se schimbă", t8_qb: "Dispar toate", t8_qc: "Nimic", t8_qd: "Devin mai scurte",
    t8_sent: "Un ___ Engineer lucrează direct cu IA.", t8_qa2: "Prompt", t8_qb2: "Pizza", t8_qc2: "Autobuz", t8_qd2: "Pădure",
    t9_title: "Deepfakes", t9_text: "Videoclipuri sau audio-uri cu persoane, falsificate dar foarte reale.", t9_inst: "Sortează în găleți:", t9_h1: "Real sau Hamis?", t9_h2: "Recunoașterea manipulării.", t9_q: "Ce este un deepfake?", t9_qa: "Media falsificată cu IA", t9_qb: "O groapă adâncă", t9_qc: "O cameră nouă", t9_qd: "O prăjitură",
    t9_bl1: "Video real", t9_bl2: "Deepfake", t9_i1: "Clip de pe telefon", t9_i2: "Față generată de IA", t9_i3: "Interviu live", t9_i4: "Manipulare voce",
    t10_title: "IA & Sustenabilitate", t10_text: "Antrenarea IA consumă foarte multă energie.", t10_inst: "Pune cuvintele în ordine:", t10_h1: "Tehnică verde?", t10_h2: "Foamea de curent a serverelor.", t10_q: "Ce consumă IA în timpul antrenării?", t10_qa: "Mult curent", t10_qb: "Multă apă", t10_qc: "Multă hârtie", t10_qd: "Mult lemn",
    t10_w1: "Modelele", t10_w2: "IA", t10_w3: "mari", t10_w4: "necesită", t10_w5: "cantități", t10_w6: "uriașe", t10_w7: "de", t10_w8: "energie.",
    t11_title: "Fairness (Echitate)", t11_text: "Sistemele IA ar trebui să trateze toți oamenii în mod egal.", t11_inst: "Evidențiază cuvântul corect:", t11_h1: "Toți sunt egali.", t11_h2: "Dreptate.", t11_q: "Care este un scop al IA etice?", t11_qa: "Echitatea", t11_qb: "Viteza", t11_qc: "Profitul", t11_qd: "Volumul",
    t11_tk1: "IA", t11_tk2: "ar", t11_tk3: "trebui", t11_tk4: "să", t11_tk5: "decidă", t11_tk6: "fără", t11_tk7: "discriminare.",
    t12_title: "Responsabilitate", t12_text: "Cine este responsabil când IA face o greșeală?", t12_inst: "Atinge responsabilii:", t12_h1: "Asumarea responsabilității.", t12_h2: "Cine e vinovat?", t12_q: "Cine poartă responsabilitatea pentru IA?", t12_qa: "Dezvoltatorii/utilizatorii", t12_qb: "Bateria", t12_qc: "Monitorul", t12_qd: "Priza",
    t12_tap_count: "2", t12_tap_inst: "Atinge dezvoltatorii de 2 ori!",
    t13_title: "Transparență", t13_text: "Trebuie să putem înțelege cum ajunge IA la o decizie.", t13_inst: "Potrivește perechile:", t13_h1: "Vedere clară.", t13_h2: "Explicabilitate.", t13_q: "Ce înseamnă transparența în IA?", t13_qa: "Trasabilitate", t13_qb: "Că e din sticlă", t13_qc: "Că e invizibilă", t13_qd: "Că luminează",
    t13_l1: "Black Box", t13_r1: "Neclar", t13_l2: "Explainable AI", t13_r2: "Explicabil", t13_l3: "Open Source", t13_r3: "Cod deschis",
    t14_title: "Siguranța IA", t14_text: "Asigurarea faptului că IA nu face lucruri periculoase.", t14_inst: "Completează spațiul liber:", t14_h1: "Menținerea controlului.", t14_h2: "Reducerea riscurilor.", t14_q: "Care este scopul AI Safety?", t14_qa: "Utilizarea sigură a IA", t14_qb: "Construirea de arme IA", t14_qc: "Jocuri IA", t14_qd: "Nimic",
    t14_sent: "Siguranța înseamnă că IA nu dăunează ___.", t14_qa2: "oamenilor", t14_qb2: "pietrelor", t14_qc2: "norilor", t14_qd2: "culorilor",
    t15_title: "Colaborare Om-IA", t15_text: "Omul și IA lucrează împreună ca o echipă.", t15_inst: "Sortează în găleți:", t15_h1: "Muncă în echipă.", t15_h2: "Unirea forțelor.", t15_q: "Care este avantajul muncii în echipă cu IA?", t15_qa: "Rezultate mai bune", t15_qb: "Mai multă pauză pentru om", t15_qc: "Mai puțin curent", t15_qd: "Nu e nevoie de net",
    t15_bl1: "Puncte forte umane", t15_bl2: "Puncte forte IA", t15_i1: "Empatie", t15_i2: "Calcul rapid", t15_i3: "Creativitate", t15_i4: "Recunoaștere modele"
  }
};

export const INFO_K7_I2_POOL: PoolTopicDef[] = [
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
    svg: { type: "icon-grid", items: [{emoji:"🎨",label:"Art"},{emoji:"✍️",label:"Text"}] },
    interactive: { type: "drag-to-bucket", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", buckets: [{id:"b1",label:"t3_bl1"},{id:"b2",label:"t3_bl2"}], items: [{text:"t3_i1",bucketId:"b1"},{text:"t3_i2",bucketId:"b2"},{text:"t3_i3",bucketId:"b1"},{text:"t3_i4",bucketId:"b2"}] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "📺", color: "#E91E63" },
    interactive: { type: "word-order", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", words: ["t4_w1", "t4_w2", "t4_w3", "t4_w4", "t4_w5", "t4_w6", "t4_w7", "t4_w8"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6,7].slice(0, 8) },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "🌐", color: "#2196F3" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6","t5_tk7","t5_tk8"].filter(x=>x!==undefined), correctIndices: [4] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" }
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "simple-icon", icon: "⚖️", color: "#FF9800" },
    interactive: { type: "tap-count", instruction: "t6_tap_inst", tapCount: { emoji: "⚖️", count: 4 } },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" }
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "🔒", color: "#4CAF50" },
    interactive: { type: "match-pairs", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", pairs: [{left:"t7_l1",right:"t7_r1"},{left:"t7_l2",right:"t7_r2"},{left:"t7_l3",right:"t7_r3"}] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" }
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "simple-icon", icon: "💼", color: "#795548" },
    interactive: { type: "gap-fill", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", sentence: "t8_sent", choices: ["t8_qa2", "t8_qb2", "t8_qc2", "t8_qd2"], correctIndex: 0 },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" }
  },
  {
    infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "icon-grid", items: [{emoji:"🎥",label:"Real"},{emoji:"🎭",label:"Fake"}] },
    interactive: { type: "drag-to-bucket", instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2", buckets: [{id:"b1",label:"t9_bl1"},{id:"b2",label:"t9_bl2"}], items: [{text:"t9_i1",bucketId:"b1"},{text:"t9_i2",bucketId:"b2"},{text:"t9_i3",bucketId:"b1"},{text:"t9_i4",bucketId:"b2"}] },
    quiz: { question: "t9_q", choices: ["t9_qa", "t9_qb", "t9_qc", "t9_qd"], answer: "t9_qa" }
  },
  {
    infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "simple-icon", icon: "🍃", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2", words: ["t10_w1", "t10_w2", "t10_w3", "t10_w4", "t10_w5", "t10_w6", "t10_w7", "t10_w8"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6,7].slice(0, 8) },
    quiz: { question: "t10_q", choices: ["t10_qa", "t10_qb", "t10_qc", "t10_qd"], answer: "t10_qa" }
  },
  {
    infoTitle: "t11_title", infoText: "t11_text",
    svg: { type: "simple-icon", icon: "🤝", color: "#FFC107" },
    interactive: { type: "highlight-text", instruction: "t11_inst", hint1: "t11_h1", hint2: "t11_h2", tokens: ["t11_tk1","t11_tk2","t11_tk3","t11_tk4","t11_tk5","t11_tk6","t11_tk7"].filter(x=>x!==undefined), correctIndices: [3] },
    quiz: { question: "t11_q", choices: ["t11_qa", "t11_qb", "t11_qc", "t11_qd"], answer: "t11_qa" }
  },
  {
    infoTitle: "t12_title", infoText: "t12_text",
    svg: { type: "simple-icon", icon: "✍️", color: "#000000" },
    interactive: { type: "tap-count", instruction: "t12_tap_inst", tapCount: { emoji: "👥", count: 2 } },
    quiz: { question: "t12_q", choices: ["t12_qa", "t12_qb", "t12_qc", "t12_qd"], answer: "t12_qa" }
  },
  {
    infoTitle: "t13_title", infoText: "t13_text",
    svg: { type: "simple-icon", icon: "🔍", color: "#9E9E9E" },
    interactive: { type: "match-pairs", instruction: "t13_inst", hint1: "t13_h1", hint2: "t13_h2", pairs: [{left:"t13_l1",right:"t13_r1"},{left:"t13_l2",right:"t13_r2"},{left:"t13_l3",right:"t13_r3"}] },
    quiz: { question: "t13_q", choices: ["t13_qa", "t13_qb", "t13_qc", "t13_qd"], answer: "t13_qa" }
  },
  {
    infoTitle: "t14_title", infoText: "t14_text",
    svg: { type: "simple-icon", icon: "🛡️", color: "#3F51B5" },
    interactive: { type: "gap-fill", instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2", sentence: "t14_sent", choices: ["t14_qa2", "t14_qb2", "t14_qc2", "t14_qd2"], correctIndex: 0 },
    quiz: { question: "t14_q", choices: ["t14_qa", "t14_qb", "t14_qc", "t14_qd"], answer: "t14_qa" }
  },
  {
    infoTitle: "t15_title", infoText: "t15_text",
    svg: { type: "icon-grid", items: [{emoji:"👨‍💻",label:"Human"},{emoji:"⚙️",label:"AI"}] },
    interactive: { type: "drag-to-bucket", instruction: "t15_inst", hint1: "t15_h1", hint2: "t15_h2", buckets: [{id:"b1",label:"t15_bl1"},{id:"b2",label:"t15_bl2"}], items: [{text:"t15_i1",bucketId:"b1"},{text:"t15_i2",bucketId:"b2"},{text:"t15_i3",bucketId:"b1"},{text:"t15_i4",bucketId:"b2"}] },
    quiz: { question: "t15_q", choices: ["t15_qa", "t15_qb", "t15_qc", "t15_qd"], answer: "t15_qa" }
  }
];

