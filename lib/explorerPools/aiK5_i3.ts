// lib/explorerPools/aiK5_i3.ts
import type { PoolTopicDef } from "./types";

export const INFO_K5_I3_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "KI-Entdecker: Ethik & Zukunft",
    t1_title: "Fairness", t1_text: "KI sollte alle Menschen gleich und fair behandeln, ohne Vorurteile.", t1_inst: "Ordne die Begriffe zu:", t1_h1: "Alle sind gleich.", t1_h2: "Gerechtigkeit für alle.", t1_q: "Was bedeutet Fairness bei der KI?", t1_qa: "Gleiche Behandlung aller", t1_qb: "Dass die KI gewinnt", t1_qc: "Dass die KI teuer ist", t1_qd: "Dass die KI schnell ist",
    t1_l1: "Vorurteil", t1_r1: "Ungerecht", t1_l2: "Fairness", t1_r2: "Gleichbehandlung", t1_l3: "Regel", t1_r3: "Gesetz",
    t2_title: "Privatsphäre", t2_text: "Wir müssen vorsichtig sein, welche persönlichen Daten wir einer KI verraten.", t2_inst: "Fülle die Lücke aus:", t2_h1: "Schütze deine Daten.", t2_h2: "Geheimnisse bewahren.", t2_q: "Was sollte man einer KI NICHT sagen?", t2_qa: "Passwörter", t2_qb: "Lieblingsfarbe", t2_qc: "Wetterwünsche", t2_qd: "Witze",
    t2_sent: "Meine ___ sind privat und gehören nicht ins Internet.", t2_qa2: "Daten", t2_qb2: "Schuhe", t2_qc2: "Bücher", t2_qd2: "Träume",
    t3_title: "KI-Sicherheit", t3_text: "Forscher arbeiten daran, dass KI sicher bleibt und niemals Menschen schadet.", t3_inst: "Sortiere in die Eimer:", t3_h1: "Sicher oder Gefahr?", t3_h2: "Regeln einhalten.", t3_q: "Was ist das wichtigste Ziel der KI-Sicherheit?", t3_qa: "Menschen schützen", t3_qb: "Spiele gewinnen", t3_qc: "Bilder malen", t3_qd: "Schnell rechnen",
    t3_bl1: "Sicher", t3_bl2: "Gefährlich", t3_i1: "Notstopp", t3_i2: "Viren", t3_i3: "Regeln", t3_i4: "Kontrollverlust",
    t4_title: "KI in der Medizin", t4_text: "KI hilft Ärzten, Krankheiten schneller zu finden und Leben zu retten.", t4_inst: "Bringe die Wörter in Ordnung:", t4_h1: "KI als Helfer.", t4_h2: "Gesundheit zuerst.", t4_q: "Wie hilft KI im Krankenhaus?", t4_qa: "Bei Diagnosen", t4_qb: "Beim Kochen", t4_qc: "Beim Bettenmachen", t4_qd: "Beim Staubsaugen",
    t4_w1: "KI", t4_w2: "unterstützt", t4_w3: "Ärzte", t4_w4: "bei", t4_w5: "schwierigen", t4_w6: "Operationen.", t4_w7: "",
    t5_title: "Umwelt & KI", t5_text: "KI kann helfen, Energie zu sparen, aber sie braucht selbst auch viel Strom.", t5_inst: "Markiere das richtige Wort:", t5_h1: "Grüne Technik.", t5_h2: "Energieverbrauch.", t5_q: "Was ist ein Problem von großen KI-Modellen?", t5_qa: "Hoher Stromverbrauch", t5_qb: "Sie sind zu klein", t5_qc: "Sie brauchen Wasser", t5_qd: "Sie machen Lärm",
    t5_tk1: "KI", t5_tk2: "kann", t5_tk3: "helfen", t5_tk4: "das", t5_tk5: "Klima", t5_tk6: "zu", t5_tk7: "schützen.",
    t6_title: "Berufe der Zukunft", t6_text: "KI wird viele Jobs verändern, aber es entstehen auch viele neue Berufe.", t6_inst: "Ordne die Paare zu:", t6_h1: "Was arbeitest du?", t6_h2: "Neue Chancen.", t6_q: "Wer arbeitet mit KI zusammen?", t6_qa: "KI-Trainer", t6_qb: "Steinzeitmensch", t6_qc: "Dinosaurier", t6_qd: "Ritter",
    t6_l1: "Neu", t6_r1: "Prompt Engineer", t6_l2: "Alt", t6_r2: "Schreiber", t6_l3: "Mix", t6_r3: "KI-Experte",
    t7_title: "Mensch & Maschine", t7_text: "Die besten Ergebnisse erzielen wir, wenn Menschen und KI als Team zusammenarbeiten.", t7_inst: "Fülle die Lücke aus:", t7_h1: "Zusammen sind wir stark.", t7_h2: "Teamwork.", t7_q: "Was kann der Mensch besser als die KI?", t7_qa: "Gefühle verstehen", t7_qb: "Schnell rechnen", t7_qc: "Daten speichern", t7_qd: "Niemals schlafen",
    t7_sent: "Mensch und KI bilden ein starkes ___.", t7_qa2: "Team", t7_qb2: "Haus", t7_qc2: "Auto", t7_qd2: "Fahrrad",
    t8_title: "Smarte Städte", t8_text: "KI steuert Ampeln und Busse, um Staus in großen Städten zu vermeiden.", t8_inst: "Sortiere in die Eimer:", t8_h1: "Schlaue Stadt.", t8_h2: "Smart City.", t8_q: "Was verbessert KI in einer Smart City?", t8_qa: "Den Verkehrsfluss", t8_qb: "Die Anzahl der Tauben", t8_qc: "Die Farbe der Häuser", t8_qd: "Das Wetter",
    t8_bl1: "Smart City", t8_bl2: "Dorf", t8_i1: "Intelligente Ampel", t8_i2: "Feldweg", t8_i3: "E-Bus-Netz", t8_i4: "Traktor",
    t9_title: "Weltraumforschung", t9_text: "Auf fernen Planeten wie dem Mars erkunden KI-Roboter die Umgebung für uns.", t9_inst: "Bringe die Wörter in Ordnung:", t9_h1: "KI im All.", t9_h2: "Fremde Welten.", t9_q: "Warum schicken wir KI-Roboter ins All?", t9_qa: "Weil es dort zu gefährlich ist", t9_qb: "Zum Picknick", t9_qc: "Weil sie nicht atmen müssen", t9_qd: "Um dort zu schlafen",
    t9_w1: "Roboter", t9_w2: "erforschen", t9_w3: "den", t9_w4: "Mars", t9_w5: "mit", t9_w6: "Hilfe", t9_w7: "von KI.",
    t10_title: "KI-Programmierung", t10_text: "Man kann einer KI durch Befehle (Prompts) sagen, was sie tun soll.", t10_inst: "Markiere das richtige Wort:", t10_h1: "Sag der KI was zu tun ist.", t10_h2: "Befehle geben.", t10_q: "Wie nennt man den Befehl an eine KI?", t10_qa: "Prompt", t10_qb: "Anruf", t10_qc: "Brief", t10_qd: "Schrei",
    t10_tk1: "Ein", t10_tk2: "guter", t10_tk3: "Prompt", t10_tk4: "hilft", t10_tk5: "der", t10_tk6: "KI", t10_tk7: "sehr.",
    t11_title: "Grenzen der KI", t11_text: "KI hat kein Bewusstsein und keine echten Gefühle, auch wenn es manchmal so scheint.", t11_inst: "Ordne die Paare zu:", t11_h1: "Was fehlt der KI?", t11_h2: "Technik vs. Leben.", t11_q: "Was hat eine KI nicht?", t11_qa: "Echte Gefühle", t11_qb: "Einen Prozessor", t11_qc: "Daten", t11_qd: "Strom",
    t11_l1: "Mensch", t11_r1: "Herz", t11_l2: "KI", t11_r2: "Chip", t11_l3: "Fühlen", t11_r3: "Rechnen",
    t12_title: "Verantwortung", t12_text: "Wenn eine KI einen Fehler macht, müssen die Menschen entscheiden, wer verantwortlich ist.", t12_inst: "Fülle die Lücke aus:", t12_h1: "Wer war's?", t12_h2: "Entscheidungen treffen.", t12_q: "Wer ist für die KI verantwortlich?", t12_qa: "Der Entwickler", t12_qb: "Die Maus", t12_qc: "Der Monitor", t12_qd: "Das Kabel",
    t12_sent: "Menschen tragen die ___ für KI-Systeme.", t12_qa2: "Verantwortung", t12_qb2: "Tasche", t12_qc2: "Brille", t12_qd2: "Mütze",
    t13_title: "Fakten-Check", t13_text: "KI kann manchmal Dinge erfinden. Wir sollten Informationen immer prüfen.", t13_inst: "Sortiere in die Eimer:", t13_h1: "Wahr oder falsch?", t13_h2: "Halluzinationen.", t13_q: "Was bedeutet 'Halluzinieren' bei einer KI?", t13_qa: "Sich Dinge ausdenken", t13_qb: "Schnell laufen", t13_qc: "Licht anmachen", t13_qd: "Singen",
    t13_bl1: "Fakt", t13_bl2: "Erfunden", t13_i1: "Geprüftes Wissen", t13_i2: "KI-Flunkerei", t13_i3: "Lexikon", t13_i4: "Falsche Info",
    t14_title: "Helfende KI", t14_text: "KI hilft Menschen mit Behinderungen, zum Beispiel durch Vorlesen von Texten für Blinde.", t14_inst: "Bringe die Wörter in Ordnung:", t14_h1: "KI hilft allen.", t14_h2: "Barrierefreiheit.", t14_q: "Wie hilft KI Menschen, die nicht sehen können?", t14_qa: "Durch Vorlesen von Texten", t14_qb: "Durch laute Musik", t14_qc: "Durch Kochen", t14_qd: "Gar nicht",
    t14_w1: "KI", t14_w2: "macht", t14_w3: "die", t14_w4: "Welt", t14_w5: "für", t14_w6: "alle", t14_w7: "zugänglicher.",
    t15_title: "Die Zukunft", t15_text: "KI wird immer schlauer werden. Es ist wichtig, dass wir lernen, gut mit ihr umzugehen.", t15_inst: "Markiere das richtige Wort:", t15_h1: "Was kommt noch?", t15_h2: "Zukunft gestalten.", t15_q: "Was ist wichtig für die Zukunft mit KI?", t15_qa: "Viel darüber lernen", t15_qb: "Angst haben", t15_qc: "KI verbieten", t15_qd: "Nichts tun",
    t15_tk1: "Wir", t15_tk2: "gestalten", t15_tk3: "die", t15_tk4: "Zukunft", t15_tk5: "mit", t15_tk6: "der", t15_tk7: "KI."
  },
  en: {
    explorer_title: "AI Explorer: Ethics & Future",
    t1_title: "Fairness", t1_text: "AI should treat all people equally and fairly, without prejudice.", t1_inst: "Match the terms:", t1_h1: "Everyone is equal.", t1_h2: "Justice for all.", t1_q: "What does fairness mean in AI?", t1_qa: "Equal treatment for all", t1_qb: "That the AI wins", t1_qc: "That the AI is expensive", t1_qd: "That the AI is fast",
    t1_l1: "Prejudice", t1_r1: "Unfair", t1_l2: "Fairness", t1_r2: "Equality", t1_l3: "Rule", t1_r3: "Law",
    t2_title: "Privacy", t2_text: "We must be careful about what personal data we reveal to an AI.", t2_inst: "Fill in the blank:", t2_h1: "Protect your data.", t2_h2: "Keep secrets.", t2_q: "What should you NOT tell an AI?", t2_qa: "Passwords", t2_qb: "Favorite color", t2_qc: "Weather wishes", t2_qd: "Jokes",
    t2_sent: "My ___ are private and do not belong on the internet.", t2_qa2: "data", t2_qb2: "shoes", t2_qc2: "books", t2_qd2: "dreams",
    t3_title: "AI Safety", t3_text: "Researchers are working to ensure that AI remains safe and never harms humans.", t3_inst: "Sort into buckets:", t3_h1: "Safe or danger?", t3_h2: "Follow rules.", t3_q: "What is the most important goal of AI safety?", t3_qa: "To protect humans", t3_qb: "To win games", t3_qc: "To paint pictures", t3_qd: "To calculate fast",
    t3_bl1: "Safe", t3_bl2: "Dangerous", t3_i1: "Emergency stop", t3_i2: "Viruses", t3_i3: "Rules", t3_i4: "Loss of control",
    t4_title: "AI in Medicine", t4_text: "AI helps doctors find diseases faster and save lives.", t4_inst: "Put the words in order:", t4_h1: "AI as a helper.", t4_h2: "Health first.", t4_q: "How does AI help in hospitals?", t4_qa: "With diagnoses", t4_qb: "With cooking", t4_qc: "With making beds", t4_qd: "With vacuuming",
    t4_w1: "AI", t4_w2: "supports", t4_w3: "doctors", t4_w4: "during", t4_w5: "difficult", t4_w6: "operations.", t4_w7: "",
    t5_title: "Environment & AI", t5_text: "AI can help save energy, but it also needs a lot of electricity itself.", t5_inst: "Highlight the correct word:", t5_h1: "Green tech.", t5_h2: "Power consumption.", t5_q: "What is a problem with large AI models?", t5_qa: "High power consumption", t5_qb: "They are too small", t5_qc: "They need water", t5_qd: "They make noise",
    t5_tk1: "AI", t5_tk2: "can", t5_tk3: "help", t5_tk4: "protect", t5_tk5: "the", t5_tk6: "climate.", t5_tk7: "",
    t6_title: "Future Jobs", t6_text: "AI will change many jobs, but many new professions are also being created.", t6_inst: "Match the pairs:", t6_h1: "What do you do?", t6_h2: "New opportunities.", t6_q: "Who works together with AI?", t6_qa: "AI trainer", t6_qb: "Stone Age man", t6_qc: "Dinosaur", t6_qd: "Knight",
    t6_l1: "New", t6_r1: "Prompt Engineer", t6_l2: "Old", t6_r2: "Scribe", t6_l3: "Mix", t6_r3: "AI Expert",
    t7_title: "Human & Machine", t7_text: "We achieve the best results when humans and AI work together as a team.", t7_inst: "Fill in the blank:", t7_h1: "Strong together.", t7_h2: "Teamwork.", t7_q: "What can humans do better than AI?", t7_qa: "Understand feelings", t7_qb: "Calculate fast", t7_qc: "Store data", t7_qd: "Never sleep",
    t7_sent: "Humans and AI form a strong ___.", t7_qa2: "team", t7_qb2: "house", t7_qc2: "car", t7_qd2: "bicycle",
    t8_title: "Smart Cities", t8_text: "AI controls traffic lights and buses to avoid traffic jams in large cities.", t8_inst: "Sort into buckets:", t8_h1: "Smart city.", t8_h2: "Better life.", t8_q: "What does AI improve in a smart city?", t8_qa: "Traffic flow", t8_qb: "Number of pigeons", t8_qc: "House colors", t8_qd: "The weather",
    t8_bl1: "Smart City", t8_bl2: "Village", t8_i1: "Intelligent lights", t8_i2: "Dirt road", t8_i3: "E-bus network", t8_i4: "Tractor",
    t9_title: "Space Exploration", t9_text: "On distant planets like Mars, AI robots explore the environment for us.", t9_inst: "Put the words in order:", t9_h1: "AI in space.", t9_h2: "Alien worlds.", t9_q: "Why do we send AI robots into space?", t9_qa: "Because it's too dangerous", t9_qb: "For a picnic", t9_qc: "They don't breathe", t9_qd: "To sleep there",
    t9_w1: "Robots", t9_w2: "explore", t9_w3: "Mars", t9_w4: "with", t9_w5: "the", t9_w6: "help", t9_w7: "of AI.",
    t10_title: "AI Programming", t10_text: "You can tell an AI what to do using commands (prompts).", t10_inst: "Highlight the correct word:", t10_h1: "Tell the AI what to do.", t10_h2: "Giving commands.", t10_q: "What is a command to an AI called?", t10_qa: "Prompt", t10_qb: "Call", t10_qc: "Letter", t10_qd: "Scream",
    t10_tk1: "A", t10_tk2: "good", t10_tk3: "prompt", t10_tk4: "helps", t10_tk5: "the", t10_tk6: "AI", t10_tk7: "a lot.",
    t11_title: "Limits of AI", t11_text: "AI has no consciousness and no real feelings, even if it sometimes seems that way.", t11_inst: "Match the pairs:", t11_h1: "What is AI missing?", t11_h2: "Tech vs. life.", t11_q: "What does an AI NOT have?", t11_qa: "Real feelings", t11_qb: "A processor", t11_qc: "Data", t11_qd: "Power",
    t11_l1: "Human", t11_r1: "Heart", t11_l2: "AI", t11_r2: "Chip", t11_l3: "Feeling", t11_r3: "Calculating",
    t12_title: "Responsibility", t12_text: "If an AI makes a mistake, humans must decide who is responsible.", t12_inst: "Fill in the blank:", t12_h1: "Who was it?", t12_h2: "Making decisions.", t12_q: "Who is responsible for the AI?", t12_qa: "The developer", t12_qb: "The mouse", t12_qc: "The monitor", t12_qd: "The cable",
    t12_sent: "Humans carry the ___ for AI systems.", t12_qa2: "responsibility", t12_qb2: "bag", t12_qc2: "glasses", t12_qd2: "hat",
    t13_title: "Fact Checking", t13_text: "AI can sometimes invent things. We should always check information.", t13_inst: "Sort into buckets:", t13_h1: "True or false?", t13_h2: "Hallucinations.", t13_q: "What does 'hallucinating' mean in an AI?", t13_qa: "Making things up", t13_qb: "Running fast", t13_qc: "Turning on lights", t13_qd: "Singing",
    t13_bl1: "Fact", t13_bl2: "Invented", t13_i1: "Checked knowledge", t13_i2: "AI fibbing", t13_i3: "Encyclopedia", t13_i4: "False info",
    t14_title: "Helping AI", t14_text: "AI helps people with disabilities, for example by reading text aloud for the blind.", t14_inst: "Put the words in order:", t14_h1: "AI helps everyone.", t14_h2: "Accessibility.", t14_q: "How does AI help people who cannot see?", t14_qa: "By reading text aloud", t14_qb: "By loud music", t14_qc: "By cooking", t14_qd: "Not at all",
    t14_w1: "AI", t14_w2: "makes", t14_w3: "the", t14_w4: "world", t14_w5: "more", t14_w6: "accessible", t14_w7: "for all.",
    t15_title: "The Future", t15_text: "AI will continue to get smarter. It is important that we learn how to use it well.", t15_inst: "Highlight the correct word:", t15_h1: "What else?", t15_h2: "Shape the future.", t15_q: "What is important for the future with AI?", t15_qa: "Learning a lot", t15_qb: "Being afraid", t15_qc: "Banning AI", t15_qd: "Doing nothing",
    t15_tk1: "We", t15_tk2: "shape", t15_tk3: "the", t15_tk4: "future", t15_tk5: "with", t15_tk6: "AI.", t15_tk7: ""
  },
  hu: {
    explorer_title: "MI Felfedező: Etika és Jövő",
    t1_title: "Pártatlanság", t1_text: "Az MI-nek minden embert egyenlően és igazságosan kell kezelnie, előítéletek nélkül.", t1_inst: "Párosítsd a fogalmakat:", t1_h1: "Mindenki egyenlő.", t1_h2: "Igazságosság mindenkinek.", t1_q: "Mit jelent a pártatlanság az MI-nél?", t1_qa: "Mindenki egyenlő kezelése", t1_qb: "Hogy az MI nyerjen", t1_qc: "Hogy az MI drága", t1_qd: "Hogy az MI gyors",
    t1_l1: "Előítélet", t1_r1: "Igazságtalan", t1_l2: "Pártatlanság", t1_r2: "Egyenlőség", t1_l3: "Szabály", t1_r3: "Törvény",
    t2_title: "Adatvédelem", t2_text: "Vigyáznunk kell, milyen személyes adatokat árulunk el egy MI-nek.", t2_inst: "Töltsd ki a hiányt:", t2_h1: "Védd az adataidat.", t2_h2: "Titkok megőrzése.", t2_q: "Mit NE mondj el egy MI-nek?", t2_qa: "Jelszavakat", t2_qb: "Kedvenc színt", t2_qc: "Időjárási kívánságot", t2_qd: "Vicceket",
    t2_sent: "Az ___ magánügyek, nem tartoznak az internetre.", t2_qa2: "adataim", t2_qb2: "cipőim", t2_qc2: "könyveim", t2_qd2: "álmaim",
    t3_title: "MI biztonság", t3_text: "A kutatók azon dolgoznak, hogy az MI biztonságos maradjon, és ne ártson az embereknek.", t3_inst: "Válogasd szét:", t3_h1: "Biztonság vagy veszély?", t3_h2: "Szabályok betartása.", t3_q: "Mi az MI-biztonság legfontosabb célja?", t3_qa: "Az emberek védelme", t3_qb: "Játékok megnyerése", t3_qc: "Képek festése", t3_qd: "Gyors számolás",
    t3_bl1: "Biztonságos", t3_bl2: "Veszélyes", t3_i1: "Vészleállító", t3_i2: "Vírusok", t3_i3: "Szabályok", t3_i4: "Kontrollvesztés",
    t4_title: "MI az orvoslásban", t4_text: "Az MI segít az orvosoknak gyorsabban felismerni a betegségeket és életeket menteni.", t4_inst: "Tedd sorrendbe a szavakat:", t4_h1: "Az MI, mint segítő.", t4_h2: "Egészség az első.", t4_q: "Hogyan segít az MI a kórházban?", t4_qa: "A diagnózisban", t4_qb: "A főzésben", t4_qc: "Az ágyazásban", t4_qd: "A porszívózásban",
    t4_w1: "Az MI", t4_w2: "segíti", t4_w3: "az", t4_w4: "orvosok", t4_w5: "munkáját", t4_w6: "a", t4_w7: "kórházakban.",
    t5_title: "Környezet és MI", t5_text: "Az MI segíthet energiát spórolni, de ő maga is sok áramot fogyaszt.", t5_inst: "Jelöld meg a helyes szót:", t5_h1: "Zöld technika.", t5_h2: "Energiafogyasztás.", t5_q: "Mi a gond a nagy MI modellekkel?", t5_qa: "Nagy az áramfogyasztásuk", t5_qb: "Túl kicsik", t5_qc: "Vízre van szükségük", t5_qd: "Zajosak",
    t5_tk1: "Az", t5_tk2: "MI", t5_tk3: "segíthet", t5_tk4: "megvédeni", t5_tk5: "a", t5_tk6: "környezetünket.", t5_tk7: "",
    t6_title: "A jövő munkái", t6_text: "Az MI sok munkakört megváltoztat, de sok új szakma is születik.", t6_inst: "Párosítsd össze:", t6_h1: "Mit dolgozol?", t6_h2: "Új lehetőségek.", t6_q: "Ki dolgozik együtt az MI-vel?", t6_qa: "MI-tréner", t6_qb: "Ősember", t6_qc: "Dinoszaurusz", t6_qd: "Lovag",
    t6_l1: "Új", t6_r1: "Prompt mérnök", t6_l2: "Régi", t6_r2: "Írnok", t6_l3: "Mix", t6_r3: "MI szakértő",
    t7_title: "Ember és Gép", t7_text: "A legjobb eredményt akkor érjük el, ha az ember és az MI csapatként dolgozik együtt.", t7_inst: "Töltsd ki a hiányt:", t7_h1: "Együtt erősek vagyunk.", t7_h2: "Csapatmunka.", t7_q: "Miben jobb az ember, mint az MI?", t7_qa: "Érzelmek megértése", t7_qb: "Gyors számolás", t7_qc: "Adattárolás", t7_qd: "Sosem alszik",
    t7_sent: "Az ember és az MI egy erős ___ alkot.", t7_qa2: "csapatot", t7_qb2: "házat", t7_qc2: "autót", t7_qd2: "biciklit",
    t8_title: "Okos városok", t8_text: "Az MI irányítja a lámpákat és buszokat, hogy elkerüljük a dugókat.", t8_inst: "Válogasd szét:", t8_h1: "Okos város.", t8_h2: "Smart City.", t8_q: "Mit javít az MI egy okos városban?", t8_qa: "A forgalmat", t8_qb: "A galambok számát", t8_qc: "A házak színét", t8_qd: "Az időjárást",
    t8_bl1: "Okos város", t8_bl2: "Falu", t8_i1: "Okos lámpa", t8_i2: "Földút", t8_i3: "E-busz hálózat", t8_i4: "Traktor",
    t9_title: "Világűr-kutatás", t9_text: "Távoli bolygókon, mint a Mars, MI-robotok fedezik fel a környéket nekünk.", t9_inst: "Tedd sorrendbe a szavakat:", t9_h1: "MI az űrben.", t9_h2: "Idegen világok.", t9_q: "Miért küldünk MI-robotokat az űrbe?", t9_qa: "Mert ott túl veszélyes", t9_qb: "Piknikezni", t9_qc: "Nem kell lélegezniük", t9_qd: "Hogy ott aludjanak",
    t9_w1: "A robotok", t9_w2: "az", t9_w3: "MI", t9_w4: "segítségével", t9_w5: "kutatják", t9_w6: "a", t9_w7: "Marsot.",
    t10_title: "MI programozás", t10_text: "Parancsokkal (promptok) meg tudjuk mondani az MI-nek, mit csináljon.", t10_inst: "Jelöld meg a helyes szót:", t10_h1: "Mondd meg neki!", t10_h2: "Parancsot adni.", t10_q: "Hogy hívják az MI-nek adott parancsot?", t10_qa: "Prompt", t10_qb: "Hívás", t10_qc: "Levél", t10_qd: "Kiáltás",
    t10_tk1: "Egy", t10_tk2: "jó", t10_tk3: "prompt", t10_tk4: "sokat", t10_tk5: "segít", t10_tk6: "az", t10_tk7: "MI-nek.",
    t11_title: "Az MI korlátai", t11_text: "Az MI-nek nincs tudata és nincsenek igazi érzelmei, még ha néha úgy is tűnik.", t11_inst: "Párosítsd össze:", t11_h1: "Mi hiányzik?", t11_h2: "Technika vs. Élet.", t11_q: "Mije nincs az MI-nek?", t11_qa: "Igazi érzelmei", t11_qb: "Processzora", t11_qc: "Adatai", t11_qd: "Áramellátása",
    t11_l1: "Ember", t11_r1: "Szív", t11_l2: "MI", t11_r2: "Chip", t11_l3: "Érzés", t11_r3: "Számolás",
    t12_title: "Felelősség", t12_text: "Ha az MI hibázik, az embereknek kell dönteniük, ki a felelős.", t12_inst: "Töltsd ki a hiányt:", t12_h1: "Ki volt az?", t12_h2: "Döntéseket hozni.", t12_q: "Ki felelős az MI-ért?", t12_qa: "A fejlesztő", t12_qb: "Az egér", t12_qc: "A monitor", t12_qd: "A kábel",
    t12_sent: "Az embereké a ___ az MI rendszerekért.", t12_qa2: "felelősség", t12_qb2: "táska", t12_qc2: "szemüveg", t12_qd2: "sapka",
    t13_title: "Tényellenőrzés", t13_text: "Az MI néha kitalál dolgokat. Mindig ellenőrizni kell az információt.", t13_inst: "Válogasd szét:", t13_h1: "Igaz vagy hamis?", t13_h2: "Hallucinációk.", t13_q: "Mit jelent a 'hallucinálás' az MI-nél?", t13_qa: "Kitalál dolgokat", t13_qb: "Gyorsan fut", t13_qc: "Lámpát gyújt", t13_qd: "Énekel",
    t13_bl1: "Tény", t13_bl2: "Kitalált", t13_i1: "Ellenőrzött tudás", t13_i2: "MI-kitaláció", t13_i3: "Lexikon", t13_i4: "Téves infó",
    t14_title: "Segítő MI", t14_text: "Az MI segít a fogyatékkal élőknek, például felolvassa a szöveget a vakoknak.", t14_inst: "Tedd sorrendbe a szavakat:", t14_h1: "Mindenkinek segít.", t14_h2: "Akadálymentesség.", t14_q: "Hogyan segít az MI azoknak, akik nem látnak?", t14_qa: "Szövegfelolvasással", t14_qb: "Hangos zenével", t14_qc: "Főzéssel", t14_qd: "Sehogy",
    t14_w1: "Az MI", t14_w2: "mindenki", t14_w3: "számára", t14_w4: "elérhetőbbé", t14_w5: "teszi", t14_w6: "a", t14_w7: "világot.",
    t15_title: "A jövő", t15_text: "Az MI egyre okosabb lesz. Fontos, hogy megtanuljuk jól használni.", t15_inst: "Jelöld meg a helyes szót:", t15_h1: "Mi jön még?", t15_h2: "Alakítsuk a jövőt.", t15_q: "Mi fontos a jövőre nézve?", t15_qa: "Sokat tanulni róla", t15_qb: "Félni tőle", t15_qc: "Betiltani", t15_qd: "Semmit tenni",
    t15_tk1: "Mi", t15_tk2: "együtt", t15_tk3: "alakítjuk", t15_tk4: "a", t15_tk5: "jövőt", t15_tk6: "az", t15_tk7: "MI-vel."
  },
  ro: {
    explorer_title: "Explorator IA: Etică și viitor",
    t1_title: "Echitate", t1_text: "IA ar trebui să trateze toți oamenii în mod egal și corect, fără prejudecăți.", t1_inst: "Potrivește termenii:", t1_h1: "Toți suntem egali.", t1_h2: "Dreptate pentru toți.", t1_q: "Ce înseamnă echitatea în IA?", t1_qa: "Tratament egal pentru toți", t1_qb: "Ca IA să câștige", t1_qc: "Că IA este scumpă", t1_qd: "Că IA este rapidă",
    t1_l1: "Prejudecată", t1_r1: "Incorect", t1_l2: "Echitate", t1_r2: "Egalitate", t1_l3: "Regulă", t1_r3: "Lege",
    t2_title: "Confidențialitate", t2_text: "Trebuie să fim atenți ce date personale dezvăluim unei IA.", t2_inst: "Completează spațiul liber:", t2_h1: "Protejează-ți datele.", t2_h2: "Păstrează secrete.", t2_q: "Ce NU ar trebui să îi spui unei IA?", t2_qa: "Parolele", t2_qb: "Culoarea preferată", t2_qc: "Dorințe meteo", t2_qd: "Bancuri",
    t2_sent: "___ mele sunt private și nu aparțin internetului.", t2_qa2: "datele", t2_qb2: "pantofii", t2_qc2: "cărțile", t2_qd2: "visurile",
    t3_title: "Siguranța IA", t3_text: "Cercetătorii lucrează pentru ca IA să rămână sigură și să nu rănească niciodată oamenii.", t3_inst: "Sortează în găleți:", t3_h1: "Sigur sau pericol?", t3_h2: "Respectă regulile.", t3_q: "Care este cel mai important scop al siguranței IA?", t3_qa: "Protejarea oamenilor", t3_qb: "Câștigarea jocurilor", t3_qc: "Pictarea tablourilor", t3_qd: "Calculul rapid",
    t3_bl1: "Sigur", t3_bl2: "Periculos", t3_i1: "Oprire de urgență", t3_i2: "Viruși", t3_i3: "Reguli", t3_i4: "Pierderea controlului",
    t4_title: "IA în medicină", t4_text: "IA îi ajută pe medici să găsească bolile mai rapid și să salveze vieți.", t4_inst: "Pune cuvintele în ordine:", t4_h1: "IA ca ajutor.", t4_h2: "Sănătatea pe primul loc.", t4_q: "Cum ajută IA în spital?", t4_qa: "La diagnosticare", t4_qb: "La gătit", t4_qc: "La făcut patul", t4_qd: "La aspirat",
    t4_w1: "IA", t4_w2: "ajută", t4_w3: "medicii", t4_w4: "să", t4_w5: "pună", t4_w6: "diagnostice", t4_w7: "corecte.",
    t5_title: "Mediu și IA", t5_text: "IA poate ajuta la economisirea energiei, dar consumă ea însăși mult curent.", t5_inst: "Evidențiază cuvântul corect:", t5_h1: "Tehnologie verde.", t5_h2: "Consum de energie.", t5_q: "Care este o problemă a modelelor IA mari?", t5_qa: "Consumul mare de curent", t5_qb: "Sunt prea mici", t5_qc: "Au nevoie de apă", t5_qd: "Fac zgomot",
    t5_tk1: "IA", t5_tk2: "poate", t5_tk3: "ajuta", t5_tk4: "la", t5_tk5: "protejarea", t5_tk6: "mediului.", t5_tk7: "",
    t6_title: "Meseriile viitorului", t6_text: "IA va schimba multe locuri de muncă, dar vor apărea și multe meserii noi.", t6_inst: "Potrivește perechile:", t6_h1: "Ce lucrezi?", t6_h2: "Oportunități noi.", t6_q: "Cine lucrează împreună cu IA?", t6_qa: "Antrenor IA", t6_qb: "Omul peșterilor", t6_qc: "Dinozaur", t6_qd: "Cavaler",
    t6_l1: "Nou", t6_r1: "Inginer de Prompts", t6_l2: "Vechi", t6_r2: "Scrib", t6_l3: "Mix", t6_r3: "Expert IA",
    t7_title: "Om și Mașină", t7_text: "Obținem cele mai bune rezultate când oamenii și IA lucrează în echipă.", t7_inst: "Completează spațiul liber:", t7_h1: "Puternici împreună.", t7_h2: "Muncă în echipă.", t7_q: "Ce pot face oamenii mai bine decât IA?", t7_qa: "Înțeleg sentimentele", t7_qb: "Calculează rapid", t7_qc: "Stochează date", t7_qd: "Nu dorm niciodată",
    t7_sent: "Oamenii și IA formează o ___ puternică.", t7_qa2: "echipă", t7_qb2: "casă", t7_qc2: "mașină", t7_qd2: "bicicletă",
    t8_title: "Orașe inteligente", t8_text: "IA controlează semafoarele și autobuzele pentru a evita blocajele în orașele mari.", t8_inst: "Sortează în găleți:", t8_h1: "Oraș deștept.", t8_h2: "Viață mai bună.", t8_q: "Ce îmbunătățește IA într-un Smart City?", t8_qa: "Fluxul de trafic", t8_qb: "Numărul porumbeilor", t8_qc: "Culoarea caselor", t8_qd: "Vremea",
    t8_bl1: "Smart City", t8_bl2: "Sat", t8_i1: "Semafoare inteligente", t8_i2: "Drum de țară", t8_i3: "Rețea e-bus", t8_i4: "Tractor",
    t9_title: "Explorarea spațiului", t9_text: "Pe planete îndepărtate ca Marte, roboții IA explorează mediul pentru noi.", t9_inst: "Pune cuvintele în ordine:", t9_h1: "IA în spațiu.", t9_h2: "Lumi străine.", t9_q: "De ce trimitem roboți IA în spațiu?", t9_qa: "Pentru că e prea periculos", t9_qb: "La picnic", t9_qc: "Nu trebuie să respire", t9_qd: "Să doarmă acolo",
    t9_w1: "Roboții", t9_w2: "explorează", t9_w3: "planeta", t9_w4: "Marte", t9_w5: "folosind", t9_w6: "tehnologia", t9_w7: "IA.",
    t10_title: "Programare IA", t10_text: "Poți spune unei IA ce să facă folosind comenzi numite prompts.", t10_inst: "Evidențiază cuvântul corect:", t10_h1: "Spune-i IA ce să facă.", t10_h2: "Dai comenzi.", t10_q: "Cum se numește o comandă dată unei IA?", t10_qa: "Prompt", t10_qb: "Apel", t10_qc: "Scrisoare", t10_qd: "Strigăt",
    t10_tk1: "Un", t10_tk2: "prompt", t10_tk3: "bun", t10_tk4: "ajută", t10_tk5: "mult", t10_tk6: "sistemul", t10_tk7: "IA.",
    t11_title: "Limitele IA", t11_text: "IA nu are conștiință și nici sentimente reale, chiar dacă uneori pare că are.", t11_inst: "Potrivește perechile:", t11_h1: "Ce îi lipsește IA?", t11_h2: "Tehnică vs. Viață.", t11_q: "Ce NU are o IA?", t11_qa: "Sentimentele reale", t11_qb: "Un procesor", t11_qc: "Date", t11_qd: "Curent",
    t11_l1: "Om", t11_r1: "Inimă", t11_l2: "IA", t11_r2: "Cip", t11_l3: "Simțire", t11_r3: "Calcul",
    t12_title: "Responsabilitate", t12_text: "Dacă o IA face o greșeală, oamenii trebuie să decidă cine este responsabil.", t12_inst: "Completează spațiul liber:", t12_h1: "Cine a fost?", t12_h2: "Luarea deciziilor.", t12_q: "Cine este responsabil pentru IA?", t12_qa: "Dezvoltatorul", t12_qb: "Mouse-ul", t12_qc: "Monitorul", t12_qd: "Cablul",
    t12_sent: "Oamenii poartă ___ pentru sistemele IA.", t12_qa2: "responsabilitatea", t12_qb2: "geanta", t12_qc2: "ochelarii", t12_qd2: "căciula",
    t13_title: "Verificarea faptelor", t13_text: "IA poate inventa uneori lucruri. Ar trebui să verificăm mereu informațiile.", t13_inst: "Sortează în găleți:", t13_h1: "Adevărat sau fals?", t13_h2: "Halucinații.", t13_q: "Ce înseamnă 'a halucina' la o IA?", t13_qa: "A inventa lucruri", t13_qb: "A alerga rapid", t13_qc: "A aprinde lumina", t13_qd: "A cânta",
    t13_bl1: "Fapt", t13_bl2: "Inventat", t13_i1: "Cunoștințe verificate", t13_i2: "Minciuni IA", t13_i3: "Enciclopedie", t13_i4: "Info falsă",
    t14_title: "IA de ajutor", t14_text: "IA ajută persoanele cu dizabilități, de exemplu prin citirea textelor pentru nevăzători.", t14_inst: "Pune cuvintele în ordine:", t14_h1: "IA ajută pe toți.", t14_h2: "Accesibilitate.", t14_q: "Cum ajută IA persoanele care nu văd?", t14_qa: "Prin citirea textelor cu voce", t14_qb: "Prin muzică tare", t14_qc: "Prin gătit", t14_qd: "Deloc",
    t14_w1: "IA", t14_w2: "face", t14_w3: "lumea", t14_w4: "mai", t14_w5: "accesibilă", t14_w6: "pentru", t14_w7: "toți.",
    t15_title: "Viitorul", t15_text: "IA va deveni tot mai deșteaptă. Este important să învățăm cum să o folosim bine.", t15_inst: "Evidențiază cuvântul corect:", t15_h1: "Ce mai urmează?", t15_h2: "Modelează viitorul.", t15_q: "Ce este important pentru viitorul cu IA?", t15_qa: "Să învățăm mult", t15_qb: "Să ne fie frică", t15_qc: "Să interzicem IA", t15_qd: "Să nu facem nimic",
    t15_tk1: "Noi", t15_tk2: "modelăm", t15_tk3: "viitorul", t15_tk4: "împreună", t15_tk5: "cu", t15_tk6: "sistemele", t15_tk7: "IA."
  }
};

export const INFO_K5_I3_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "simple-icon", icon: "⚖️", color: "#607D8B" },
    interactive: { type: "match-pairs", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", pairs: [{left:"t1_l1",right:"t1_r1"},{left:"t1_l2",right:"t1_r2"},{left:"t1_l3",right:"t1_r3"}] },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" }
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "🔒", color: "#F44336" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" }
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "icon-grid", items: [{emoji:"🛡️",label:"Safe"},{emoji:"⚠️",label:"Danger"}] },
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
    svg: { type: "simple-icon", icon: "🌱", color: "#4CAF50" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6","t5_tk7"].filter(x=>x!==""), correctIndices: [4] },
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
    svg: { type: "simple-icon", icon: "🤝", color: "#FF9800" },
    interactive: { type: "gap-fill", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", sentence: "t7_sent", choices: ["t7_qa2", "t7_qb2", "t7_qc2", "t7_qd2"], correctIndex: 0 },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" }
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "simple-icon", icon: "🏙️", color: "#3F51B5" },
    interactive: { type: "drag-to-bucket", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", buckets: [{id:"b1",label:"t8_bl1"},{id:"b2",label:"t8_bl2"}], items: [{text:"t8_i1",bucketId:"b1"},{text:"t8_i2",bucketId:"b2"},{text:"t8_i3",bucketId:"b1"},{text:"t8_i4",bucketId:"b2"}] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" }
  },
  {
    infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "simple-icon", icon: "🚀", color: "#00BCD4" },
    interactive: { type: "word-order", instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2", words: ["t9_w1", "t9_w2", "t9_w3", "t9_w4", "t9_w5", "t9_w6", "t9_w7"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6].slice(0, 7) },
    quiz: { question: "t9_q", choices: ["t9_qa", "t9_qb", "t9_qc", "t9_qd"], answer: "t9_qa" }
  },
  {
    infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "simple-icon", icon: "⌨️", color: "#000000" },
    interactive: { type: "highlight-text", instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2", tokens: ["t10_tk1","t10_tk2","t10_tk3","t10_tk4","t10_tk5","t10_tk6","t10_tk7"].filter(x=>x!==""), correctIndices: [2] },
    quiz: { question: "t10_q", choices: ["t10_qa", "t10_qb", "t10_qc", "t10_qd"], answer: "t10_qa" }
  },
  {
    infoTitle: "t11_title", infoText: "t11_text",
    svg: { type: "simple-icon", icon: "🧠", color: "#9C27B0" },
    interactive: { type: "match-pairs", instruction: "t11_inst", hint1: "t11_h1", hint2: "t11_h2", pairs: [{left:"t11_l1",right:"t11_r1"},{left:"t11_l2",right:"t11_r2"},{left:"t11_l3",right:"t11_r3"}] },
    quiz: { question: "t11_q", choices: ["t11_qa", "t11_qb", "t11_qc", "t11_qd"], answer: "t11_qa" }
  },
  {
    infoTitle: "t12_title", infoText: "t12_text",
    svg: { type: "simple-icon", icon: "🗳️", color: "#2196F3" },
    interactive: { type: "gap-fill", instruction: "t12_inst", hint1: "t12_h1", hint2: "t12_h2", sentence: "t12_sent", choices: ["t12_qa2", "t12_qb2", "t12_qc2", "t12_qd2"], correctIndex: 0 },
    quiz: { question: "t12_q", choices: ["t12_qa", "t12_qb", "t12_qc", "t12_qd"], answer: "t12_qa" }
  },
  {
    infoTitle: "t13_title", infoText: "t13_text",
    svg: { type: "icon-grid", items: [{emoji:"📖",label:"Fact"},{emoji:"💭",label:"Hallucination"}] },
    interactive: { type: "drag-to-bucket", instruction: "t13_inst", hint1: "t13_h1", hint2: "t13_h2", buckets: [{id:"b1",label:"t13_bl1"},{id:"b2",label:"t13_bl2"}], items: [{text:"t13_i1",bucketId:"b1"},{text:"t13_i2",bucketId:"b2"},{text:"t13_i3",bucketId:"b1"},{text:"t13_i4",bucketId:"b2"}] },
    quiz: { question: "t13_q", choices: ["t13_qa", "t13_qb", "t13_qc", "t13_qd"], answer: "t13_qa" }
  },
  {
    infoTitle: "t14_title", infoText: "t14_text",
    svg: { type: "simple-icon", icon: "♿", color: "#2196F3" },
    interactive: { type: "word-order", instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2", words: ["t14_w1", "t14_w2", "t14_w3", "t14_w4", "t14_w5", "t14_w6", "t14_w7"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6].slice(0, 7) },
    quiz: { question: "t14_q", choices: ["t14_qa", "t14_qb", "t14_qc", "t14_qd"], answer: "t14_qa" }
  },
  {
    infoTitle: "t15_title", infoText: "t15_text",
    svg: { type: "simple-icon", icon: "🔮", color: "#673AB7" },
    interactive: { type: "highlight-text", instruction: "t15_inst", hint1: "t15_h1", hint2: "t15_h2", tokens: ["t15_tk1","t15_tk2","t15_tk3","t15_tk4","t15_tk5","t15_tk6","t15_tk7"].filter(x=>x!==""), correctIndices: [3] },
    quiz: { question: "t15_q", choices: ["t15_qa", "t15_qb", "t15_qc", "t15_qd"], answer: "t15_qa" }
  }
];
