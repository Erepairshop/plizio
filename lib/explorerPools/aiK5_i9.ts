// @ts-nocheck
// lib/explorerPools/aiK5_i9.ts
import type { PoolTopicDef } from "./types";

export const INFO_K5_I9_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "KI-Entdecker 9",
    t1_title: "Lernarten", t1_text: "Es gibt verschiedene Arten, wie KI lernt: mit Anleitung (überwacht) oder durch eigenes Ausprobieren.", t1_inst: "Ordne die Paare zu:", t1_h1: "Wie wird gelernt?", t1_h2: "Methoden.", t1_q: "Was ist 'Supervised Learning'?", t1_qa: "Lernen mit Beispielen", t1_qb: "Lernen ohne Daten", t1_qc: "Lernen im Schlaf", t1_qd: "Gar kein Lernen",
    t1_l1: "Überwacht", t1_r1: "Mit Lehrer", t1_l2: "Unüberwacht", t1_r2: "Selbstständig", t1_l3: "Bestärkend", t1_r3: "Belohnung",
    t2_title: "Big Data", t2_text: "Big Data sind riesige Mengen an Informationen, die eine KI braucht, um schlau zu werden.", t2_inst: "Fülle die Lücke aus:", t2_h1: "Viel Information.", t2_h2: "Treibstoff für KI.", t2_q: "Was ist Big Data?", t2_qa: "Riesige Datenmengen", t2_qb: "Ein großer Computer", t2_qc: "Ein dickes Buch", t2_qd: "Eine große Maus",
    t2_sent: "KI braucht ___, um Muster in der Welt zu erkennen.", t2_qa2: "Daten", t2_qb2: "Wasser", t2_qc2: "Obst", t2_qd2: "Sand",
    t3_title: "Turing-Test", t3_text: "Der Turing-Test prüft, ob ein Mensch merkt, dass er mit einer Maschine spricht.", t3_inst: "Sortiere in die Eimer:", t3_h1: "Echt oder KI?", t3_h2: "Kommunikation.", t3_q: "Wer erfand den Turing-Test?", t3_qa: "Alan Turing", t3_qb: "Steve Jobs", t3_qc: "Albert Einstein", t3_qd: "Bill Gates",
    t3_bl1: "Mensch", t3_bl2: "KI", t3_i1: "Echte Stimme", t3_i2: "Synthetische Stimme", t3_i3: "Gefühle", t3_i4: "Algorithmus",
    t4_title: "NLP", t4_text: "Natural Language Processing (NLP) hilft der KI, menschliche Sprache wirklich zu verstehen.", t4_inst: "Bringe die Wörter in Ordnung:", t4_h1: "Sprache verarbeiten.", t4_h2: "Verstehen.", t4_q: "Was bedeutet NLP?", t4_qa: "Sprachverarbeitung", t4_qb: "Netz-Lern-Programm", t4_qc: "Neuer Licht-Punkt", t4_qd: "Nicht-Lustige-Post",
    t4_w1: "NLP", t4_w2: "ermöglicht", t4_w3: "es", t4_w4: "Computern,", t4_w5: "unsere", t4_w6: "Sprache", t4_w7: "zu verstehen.",
    t5_title: "Computer Vision", t5_text: "Computer Vision lässt Maschinen Bilder und Videos 'verstehen' wie Menschen.", t5_inst: "Markiere das richtige Wort:", t5_h1: "Sehen lernen.", t5_h2: "Pixel deuten.", t5_q: "Wo wird Computer Vision genutzt?", t5_qa: "Gesichtserkennung", t5_qb: "Lautsprecher", t5_qc: "Tastatur", t5_qd: "Mausmatte",
    t5_tk1: "Computer", t5_tk2: "Vision", t5_tk3: "hilft", t5_tk4: "beim", t5_tk5: "Erkennen", t5_tk6: "von", t5_tk7: "Gegenständen.",
    t6_title: "Reinforcement Learning", t6_text: "KI lernt hier durch Belohnung und Bestrafung, wie in einem Videospiel.", t6_inst: "Ordne die Paare zu:", t6_h1: "Lernen durch Erfolg.", t6_h2: "Versuch und Irrtum.", t6_q: "Was bekommt die KI bei Erfolg?", t6_qa: "Belohnungspunkte", t6_qb: "Einen Apfel", t6_qc: "Mehr Strom", t6_qd: "Urlaub",
    t6_l1: "Erfolg", t6_r1: "Belohnung", t6_l2: "Fehler", t6_r2: "Abzug", t6_l3: "Ziel", t6_r3: "Highscore",
    t7_title: "KI in der Schule", t7_text: "KI kann beim Lernen helfen, indem sie Aufgaben an dein Tempo anpasst.", t7_inst: "Fülle die Lücke aus:", t7_h1: "Besser lernen.", t7_h2: "Personalisiert.", t7_q: "Wie hilft KI Schülern?", t7_qa: "Individuelle Hilfe", t7_qb: "Hausaufgaben klauen", t7_qc: "Lehrer ersetzen", t7_qd: "Ferien verlängern",
    t7_sent: "Eine Lern-KI passt sich an dein ___ an.", t7_qa2: "Tempo", t7_qb2: "Aussehen", t7_qc2: "Fahrrad", t7_qd2: "Mittagessen",
    t8_title: "Jobs der Zukunft", t8_text: "KI wird viele Berufe verändern. Neue Jobs wie 'Prompt Engineer' entstehen.", t8_inst: "Sortiere in die Eimer:", t8_h1: "Was bleibt? Was kommt?", t8_h2: "Arbeitswelt.", t8_q: "Was ist ein Prompt Engineer?", t8_qa: "KI-Befehl-Experte", t8_qb: "Ein Lokführer", t8_qc: "Ein Koch", t8_qd: "Ein Gärtner",
    t8_bl1: "Klassisch", t8_bl2: "KI-Beruf", t8_i1: "Bäcker", t8_i2: "KI-Trainer", t3_i3: "Tischler", t3_i4: "Daten-Ethiker",
    t9_title: "Mensch & KI", t9_text: "Am besten arbeitet KI, wenn sie Menschen unterstützt, statt sie zu ersetzen.", t9_inst: "Bringe die Wörter in Ordnung:", t9_h1: "Teamarbeit.", t9_h2: "Zusammenarbeit.", t9_q: "Was ist das Ziel der KI?", t9_qa: "Den Menschen helfen", t9_qb: "Die Weltherrschaft", t9_qc: "Menschen ärgern", t9_qd: "Nichts tun",
    t9_w1: "Mensch", t9_w2: "und", t9_w3: "Maschine", t9_w4: "sind", t9_w5: "zusammen", t9_w6: "ein", t9_w7: "starkes Team.",
    t10_title: "Energie & KI", t10_text: "KI braucht sehr viel Strom. Wir müssen sie nachhaltiger machen.", t10_inst: "Markiere das richtige Wort:", t10_h1: "Umwelt.", t10_h2: "Stromverbrauch.", t10_q: "Was ist ein Problem bei KI?", t10_qa: "Hoher Stromverbrauch", t10_qb: "Zu viel Wasser", t10_qc: "Kein Internet", t10_qd: "Zu laut",
    t10_tk1: "Nachhaltige", t10_tk2: "KI", t10_tk3: "schont", t10_tk4: "unsere", t10_tk5: "wertvollen", t10_tk6: "Ressourcen.",
    t11_title: "Ethische Dilemmas", t11_text: "Darf eine KI entscheiden, wer einen Job bekommt? Das ist eine ethische Frage.", t11_inst: "Ordne die Paare zu:", t11_h1: "Richtig oder Falsch?", t11_h2: "Verantwortung.", t11_q: "Was ist Ethik bei KI?", t11_qa: "Fragen zur Fairness", t11_qb: "Die Kabelfarbe", t11_qc: "Die Bildschirmgröße", t11_qd: "Der Preis",
    t11_l1: "Entscheidung", t11_r1: "Moral", t11_l2: "KI", t11_r2: "Werkzeug", t11_l3: "Gesetz", t11_r3: "Regeln",
    t12_title: "AGI", t12_text: "Eine 'Allgemeine KI' (AGI) könnte alles lernen, was ein Mensch kann. Noch gibt es sie nicht.", t12_inst: "Fülle die Lücke aus:", t12_h1: "Super-KI.", t12_h2: "Theorie.", t12_q: "Was bedeutet AGI?", t12_qa: "Allgemeine Intelligenz", t12_qb: "Alte Grafik-Insel", t12_qc: "Alles-Gute-Immer", t12_qd: "Auto-Gas-Input",
    t12_sent: "Eine AGI wäre so schlau wie ein ___.", t12_qa2: "Mensch", t12_qb2: "Toaster", t12_qc2: "Stein", t12_qd2: "Kabel",
    t13_title: "Die Singularität", t13_text: "Manche glauben, KI wird irgendwann schlauer als alle Menschen zusammen.", t13_inst: "Sortiere in die Eimer:", t13_h1: "Zukunftsvisionen.", t13_h2: "Science Fiction?", t13_q: "Was ist die Singularität?", t13_qa: "KI übertrifft Menschen", t13_qb: "Ein schwarzes Loch", t13_qc: "Eine neue Musikrichtung", t13_qd: "Ein Feiertag",
    t13_bl1: "Heute", t13_bl2: "Zukunft", t13_i1: "Smarte App", t13_i2: "Super-Intelligenz", t13_i3: "Chatbot", t13_i4: "Bewusste Maschine",
    t14_title: "KI im Weltraum", t14_text: "KI steuert Rover auf dem Mars und hilft, ferne Galaxien zu entdecken.", t14_inst: "Bringe die Wörter in Ordnung:", t14_h1: "Zu den Sternen.", t14_h2: "Weltraumforschung.", t14_q: "Was macht KI im All?", t14_qa: "Teleskopdaten auswerten", t14_qb: "Sterne putzen", t14_qc: "Kaffee kochen", t14_qd: "Sauerstoff malen",
    t14_w1: "KI", t14_w2: "hilft", t14_w3: "uns,", t14_w4: "das", t14_w5: "Universum", t14_w6: "besser", t14_w7: "zu erforschen.",
    t15_title: "KI-Schöpfer werden", t15_text: "Jeder kann lernen, wie man einfache KI-Modelle programmiert.", t15_inst: "Markiere das richtige Wort:", t15_h1: "Selbst machen.", t15_h2: "Programmieren.", t15_q: "Was ist wichtig für KI-Entwickler?", t15_qa: "Logik und Mathe", t15_qb: "Viel Schlaf", t15_qc: "Ein schöner Schreibtisch", t15_qd: "Teure Kleidung",
    t15_tk1: "Lerne", t15_tk2: "Programmieren,", t15_tk3: "um die", t15_tk4: "Zukunft", t15_tk5: "mit", t15_tk6: "KI", t15_tk7: "zu gestalten."
  },
  en: {
    explorer_title: "AI Explorer 9",
    t1_title: "Learning Types", t1_text: "There are different ways AI learns: with guidance (supervised) or through its own trial and error.", t1_inst: "Match the pairs:", t1_h1: "How is it learned?", t1_h2: "Methods.", t1_q: "What is 'Supervised Learning'?", t1_qa: "Learning with examples", t1_qb: "Learning without data", t1_qc: "Learning while sleeping", t1_qd: "No learning at all",
    t1_l1: "Supervised", t1_r1: "With teacher", t1_l2: "Unsupervised", t1_r2: "Independently", t1_l3: "Reinforcement", t1_r3: "Reward",
    t2_title: "Big Data", t2_text: "Big Data refers to huge amounts of information that AI needs to become smart.", t2_inst: "Fill in the blank:", t2_h1: "Lots of information.", t2_h2: "Fuel for AI.", t2_q: "What is Big Data?", t2_qa: "Huge amounts of data", t2_qb: "A big computer", t2_qc: "A thick book", t2_qd: "A big mouse",
    t2_sent: "AI needs ___ to recognize patterns in the world.", t2_qa2: "data", t2_qb2: "water", t2_qc2: "fruit", t2_qd2: "sand",
    t3_title: "Turing Test", t3_text: "The Turing test checks whether a human notices they are talking to a machine.", t3_inst: "Sort into buckets:", t3_h1: "Real or AI?", t3_h2: "Communication.", t3_q: "Who invented the Turing Test?", t3_qa: "Alan Turing", t3_qb: "Steve Jobs", t3_qc: "Albert Einstein", t3_qd: "Bill Gates",
    t3_bl1: "Human", t3_bl2: "AI", t3_i1: "Real voice", t3_i2: "Synthetic voice", t3_i3: "Feelings", t3_i4: "Algorithm",
    t4_title: "NLP", t4_text: "Natural Language Processing (NLP) helps AI truly understand human language.", t4_inst: "Put the words in order:", t4_h1: "Process language.", t4_h2: "Understanding.", t4_q: "What does NLP stand for?", t4_qa: "Natural Language Processing", t4_qb: "Net Learn Program", t4_qc: "New Light Point", t4_qd: "Non-Linear Post",
    t4_w1: "NLP", t4_w2: "allows", t4_w3: "computers", t4_w4: "to", t4_w5: "understand", t4_w6: "human", t4_w7: "language.",
    t5_title: "Computer Vision", t5_text: "Computer Vision allows machines to 'understand' images and videos like humans do.", t5_inst: "Highlight the correct word:", t5_h1: "Learning to see.", t5_h2: "Interpreting pixels.", t5_q: "Where is Computer Vision used?", t5_qa: "Face recognition", t5_qb: "Speakers", t5_qc: "Keyboard", t5_qd: "Mouse pad",
    t5_tk1: "Computer", t5_tk2: "vision", t5_tk3: "helps", t5_tk4: "in", t5_tk5: "identifying", t5_tk6: "objects", t5_tk7: "clearly.",
    t6_title: "Reinforcement Learning", t6_text: "AI learns through reward and punishment, just like in a video game.", t6_inst: "Match the pairs:", t6_h1: "Learn through success.", t6_h2: "Trial and error.", t6_q: "What does AI get when successful?", t6_qa: "Reward points", t6_qb: "An apple", t6_qc: "More power", t6_qd: "Vacation",
    t6_l1: "Success", t6_r1: "Reward", t6_l2: "Mistake", t6_r2: "Deduction", t6_l3: "Goal", t6_r3: "Highscore",
    t7_title: "AI in School", t7_text: "AI can help with learning by adapting tasks to your pace.", t7_inst: "Fill in the blank:", t7_h1: "Learn better.", t7_h2: "Personalized.", t7_q: "How does AI help students?", t7_qa: "Individual help", t7_qb: "Stealing homework", t7_qc: "Replacing teachers", t7_qd: "Extending holidays",
    t7_sent: "A learning AI adapts to your ___.", t7_qa2: "pace", t7_qb2: "looks", t7_qc2: "bike", t7_qd2: "lunch",
    t8_title: "Future Jobs", t8_text: "AI will change many professions. New jobs like 'Prompt Engineer' are emerging.", t8_inst: "Sort into buckets:", t8_h1: "What stays? What comes?", t8_h2: "World of work.", t8_q: "What is a Prompt Engineer?", t8_qa: "AI prompt expert", t8_qb: "A train driver", t8_qc: "A cook", t8_qd: "A gardener",
    t8_bl1: "Classic", t8_bl2: "AI Profession", t8_i1: "Baker", t8_i2: "AI Trainer", t8_i3: "Carpenter", t8_i4: "Data Ethicist",
    t9_title: "Human & AI", t9_text: "AI works best when it supports humans instead of replacing them.", t9_inst: "Put the words in order:", t9_h1: "Teamwork.", t9_h2: "Collaboration.", t9_q: "What is the goal of AI?", t9_qa: "To help humans", t9_qb: "World domination", t9_qc: "Annoying people", t9_qd: "Doing nothing",
    t9_w1: "Human", t9_w2: "and", t9_w3: "machine", t9_w4: "are", t9_w5: "a", t9_w6: "strong", t9_w7: "team together.",
    t10_title: "Energy & AI", t10_text: "AI requires a lot of electricity. We must make it more sustainable.", t10_inst: "Highlight the correct word:", t10_h1: "Environment.", t10_h2: "Power consumption.", t10_q: "What is a problem with AI?", t10_qa: "High energy consumption", t10_qb: "Too much water", t10_qc: "No internet", t10_qd: "Too loud",
    t10_tk1: "Sustainable", t10_tk2: "AI", t10_tk3: "protects", t10_tk4: "our", t10_tk5: "valuable", t10_tk6: "resources.",
    t11_title: "Ethical Dilemmas", t11_text: "Should an AI decide who gets a job? This is an ethical question.", t11_inst: "Match the pairs:", t11_h1: "Right or wrong?", t11_h2: "Responsibility.", t11_q: "What is ethics in AI?", t11_qa: "Questions about fairness", t11_qb: "Cable color", t11_qc: "Screen size", t11_qd: "Price",
    t11_l1: "Decision", t11_r1: "Morals", t11_l2: "AI", t11_r2: "Tool", t11_l3: "Law", t11_r3: "Rules",
    t12_title: "AGI", t12_text: "An 'Artificial General Intelligence' (AGI) could learn anything a human can. It doesn't exist yet.", t12_inst: "Fill in the blank:", t12_h1: "Super AI.", t12_h2: "Theory.", t12_q: "What does AGI stand for?", t12_qa: "General Intelligence", t12_qb: "Advanced Graphic Island", t12_qc: "Always Good Idea", t12_qd: "Auto Gas Input",
    t12_sent: "An AGI would be as smart as a ___.", t12_qa2: "human", t12_qb2: "toaster", t12_qc2: "stone", t12_qd2: "cable",
    t13_title: "Singularity", t13_text: "Some believe AI will eventually become smarter than all humans combined.", t13_inst: "Sort into buckets:", t13_h1: "Future visions.", t13_h2: "Science fiction?", t13_q: "What is the Singularity?", t13_qa: "AI surpasses humans", t13_qb: "A black hole", t13_qc: "A new music genre", t13_qd: "A holiday",
    t13_bl1: "Today", t13_bl2: "Future", t13_i1: "Smart app", t13_i2: "Super-intelligence", t13_i3: "Chatbot", t13_i4: "Conscious machine",
    t14_title: "AI in Space", t14_text: "AI controls rovers on Mars and helps discover distant galaxies.", t14_inst: "Put the words in order:", t14_h1: "To the stars.", t14_h2: "Space research.", t14_q: "What does AI do in space?", t14_qa: "Analyze telescope data", t14_qb: "Clean stars", t14_qc: "Make coffee", t14_qd: "Paint oxygen",
    t14_w1: "AI", t14_w2: "helps", t14_w3: "us", t14_w4: "explore", t14_w5: "the", t14_w6: "universe", t14_w7: "better.",
    t15_title: "Become an AI Creator", t15_text: "Anyone can learn how to program simple AI models.", t15_inst: "Highlight the correct word:", t15_h1: "Do it yourself.", t15_h2: "Programming.", t15_q: "What is important for AI developers?", t15_qa: "Logic and math", t15_qb: "Lots of sleep", t15_qc: "A nice desk", t15_qd: "Expensive clothes",
    t15_tk1: "Learn", t15_tk2: "programming", t15_tk3: "to", t15_tk4: "shape", t15_tk5: "the future", t15_tk6: "with", t15_tk7: "AI."
  },
  hu: {
    explorer_title: "AI Felfedező 9",
    t1_title: "Tanulási típusok", t1_text: "Az MI többféleképpen tanulhat: segítséggel (felügyelt) vagy saját próbálkozásokkal.", t1_inst: "Párosítsd össze:", t1_h1: "Hogyan tanul?", t1_h2: "Módszerek.", t1_q: "Mi az a 'Supervised Learning'?", t1_qa: "Tanulás példákkal", t1_qb: "Tanulás adatok nélkül", t1_qc: "Tanulás alvás közben", t1_qd: "Egyáltalán nincs tanulás",
    t1_l1: "Felügyelt", t1_r1: "Tanárral", t1_l2: "Nem felügyelt", t1_r2: "Önállóan", t1_l3: "Megerősítéses", t1_r3: "Jutalommal",
    t2_title: "Big Data", t2_text: "A Big Data az a hatalmas mennyiségű információ, amire az MI-nek szüksége van az okosodáshoz.", t2_inst: "Töltsd ki a hiányt:", t2_h1: "Sok információ.", t2_h2: "Az MI üzemanyaga.", t2_q: "Mi az a Big Data?", t2_qa: "Hatalmas adatmennyiség", t2_qb: "Egy nagy számítógép", t2_qc: "Egy vastag könyv", t2_qd: "Egy nagy egér",
    t2_sent: "Az MI-nek ___ kell, hogy mintákat találjon a világban.", t2_qa2: "adat", t2_qb2: "víz", t2_qc2: "gyümölcs", t2_qd2: "homok",
    t3_title: "Turing-teszt", t3_text: "A Turing-teszt azt vizsgálja, hogy egy ember észreveszi-e, hogy géppel beszél.", t3_inst: "Válogasd szét:", t3_h1: "Ember vagy MI?", t3_h2: "Kommunikáció.", t3_q: "Ki találta fel a Turing-tesztet?", t3_qa: "Alan Turing", t3_qb: "Steve Jobs", t3_qc: "Albert Einstein", t3_qd: "Bill Gates",
    t3_bl1: "Ember", t3_bl2: "MI", t3_i1: "Igazi hang", t3_i2: "Szintetikus hang", t3_i3: "Érzések", t3_i4: "Algoritmus",
    t4_title: "NLP", t4_text: "A természetes nyelvfeldolgozás (NLP) segít az MI-nek igazán megérteni az emberi beszédet.", t4_inst: "Tedd sorrendbe a szavakat:", t4_h1: "Nyelv feldolgozása.", t4_h2: "Megértés.", t4_q: "Mit jelent az NLP?", t4_qa: "Nyelvfeldolgozás", t4_qb: "Net-Lern-Program", t4_qc: "Nagy-Lassú-Pont", t4_qd: "Nem-Lát-Pontosan",
    t4_w1: "Az NLP", t4_w2: "lehetővé", t4_w3: "teszi,", t4_w4: "hogy", t4_w5: "a gép", t4_w6: "értse", t4_w7: "a nyelvünket.",
    t5_title: "Számítógépes látás", t5_text: "Ez a terület lehetővé teszi, hogy a gépek úgy 'értsék' a képeket, mint az emberek.", t5_inst: "Jelöld meg a helyes szót:", t5_h1: "Látni tanul.", t5_h2: "Pixelek értelmezése.", t5_q: "Hol használják a gépi látást?", t5_qa: "Arcfelismerés", t5_qb: "Hangszórók", t5_qc: "Billentyűzet", t5_qd: "Egérpad",
    t5_tk1: "A gépi", t5_tk2: "látás", t5_tk3: "segít", t5_tk4: "a tárgyak", t5_tk5: "pontos", t5_tk6: "felismerésében.",
    t6_title: "Reinforcement Learning", t6_text: "Az MI itt jutalmazás és büntetés útján tanul, mint egy videojátékban.", t6_inst: "Párosítsd össze:", t6_h1: "Sikeres tanulás.", t6_h2: "Próba-szerencse.", t6_q: "Mit kap az MI siker esetén?", t6_qa: "Jutalompontokat", t6_qb: "Egy almát", t6_qc: "Több áramot", t6_qd: "Szabit",
    t6_l1: "Siker", t6_r1: "Jutalom", t6_l2: "Hiba", t6_r2: "Levonás", t6_l3: "Cél", t6_r3: "Rekord",
    t7_title: "MI az iskolában", t7_text: "Az MI segíthet a tanulásban azzal, hogy a feladatokat a te tempódhoz igazítja.", t7_inst: "Töltsd ki a hiányt:", t7_h1: "Jobban tanulni.", t7_h2: "Személyre szabott.", t7_q: "Hogyan segít az MI a diákoknak?", t7_qa: "Egyéni segítség", t7_qb: "Ellopja a házit", t7_qc: "Tanár helyett van", t7_qd: "Több szünetet ad",
    t7_sent: "A tanuló MI a te ___ igazodik.", t7_qa2: "tempódhoz", t7_qb2: "hajadhoz", t7_qc2: "biciklidhez", t7_qd2: "ebédedhez",
    t8_title: "A jövő szakmái", t8_text: "Az MI sok munkát megváltoztat. Új szakmák születnek, mint az 'MI-tréner'.", t8_inst: "Válogasd szét:", t8_h1: "Mi marad? Mi jön?", t8_h2: "Munka világa.", t8_q: "Mi az a Prompt Engineer?", t8_qa: "MI-utasítás szakértő", t8_qb: "Mozdonyvezető", t8_qc: "Szakács", t8_qd: "Kertész",
    t8_bl1: "Klasszikus", t8_bl2: "MI szakma", t8_i1: "Pék", t8_i2: "MI-tanító", t8_i3: "Asztalos", t8_i4: "Adat-etikus",
    t9_title: "Ember és MI", t9_text: "Az MI akkor a leghasznosabb, ha segíti az embert, nem pedig helyettesíti.", t9_inst: "Tedd sorrendbe a szavakat:", t9_h1: "Csapatmunka.", t9_h2: "Együttműködés.", t9_q: "Mi az MI célja?", t9_qa: "Segíteni az embert", t9_qb: "Világuralom", t9_qc: "Bosszantani minket", t9_qd: "Semmittevés",
    t9_w1: "Az ember", t9_w2: "és", t9_w3: "a gép", t9_w4: "együtt", t9_w5: "egy", t9_w6: "erős", t9_w7: "csapatot alkot.",
    t10_title: "Energia és MI", t10_text: "Az MI sok áramot fogyaszt. Fontos, hogy fenntarthatóbbá tegyük.", t10_inst: "Jelöld meg a helyes szót:", t10_h1: "Környezet.", t10_h2: "Áramfogyasztás.", t10_q: "Mi az egyik probléma az MI-vel?", t10_qa: "Magas áramfogyasztás", t10_qb: "Túl sok víz", t10_qc: "Nincs internet", t10_qd: "Túl hangos",
    t10_tk1: "A fenntartható", t10_tk2: "MI", t10_tk3: "kíméli", t10_tk4: "az értékes", t10_tk5: "erőforrásainkat.",
    t11_title: "Etikai kérdések", t11_text: "Dönthet-e egy gép arról, ki kapjon munkát? Ez egy etikai kérdés.", t11_inst: "Párosítsd össze:", t11_h1: "Jó vagy Rossz?", t11_h2: "Felelősség.", t11_q: "Mi az etika az MI-ben?", t11_qa: "Tisztességgel kapcsolatos kérdések", t11_qb: "Kábelszín", t11_qc: "Képernyőméret", t11_qd: "Ár",
    t11_l1: "Döntés", t11_r1: "Morál", t11_l2: "MI", t11_r2: "Eszköz", t11_l3: "Törvény", t11_r3: "Szabályok",
    t12_title: "AGI", t12_text: "Az 'Általános MI' (AGI) bármit meg tudna tanulni, amit egy ember. Még nem létezik.", t12_inst: "Töltsd ki a hiányt:", t12_h1: "Szuper-MI.", t12_h2: "Elmélet.", t12_q: "Mit jelent az AGI?", t12_qa: "Általános Intelligencia", t12_qb: "Alacsony Gép-Input", t12_qc: "Akkor-Garantált-Igen", t12_qd: "Automata-Gyors-Írás",
    t12_sent: "Az AGI olyan okos lenne, mint egy ___.", t12_qa2: "ember", t12_qb2: "pirító", t12_qc2: "kő", t12_qd2: "kábel",
    t13_title: "Szingularitás", t13_text: "Sokan hiszik, hogy az MI egyszer okosabb lesz, mint az összes ember együttvéve.", t13_inst: "Válogasd szét:", t13_h1: "Jövőkép.", t13_h2: "Sci-fi?", t13_q: "Mi az a szingularitás?", t13_qa: "Az MI túlszárnyalja az embert", t13_qb: "Fekete lyuk", t13_qc: "Új zenei stílus", t13_qd: "Ünnepnap",
    t13_bl1: "Ma", t13_bl2: "Jövő", t13_i1: "Okos app", t13_i2: "Szuper-intelligencia", t13_i3: "Chatbot", t13_i4: "Tudatos gép",
    t14_title: "MI a világűrben", t14_text: "Az MI irányítja a rovereket a Marson és segít felfedezni a távoli galaxisokat.", t14_inst: "Tedd sorrendbe a szavakat:", t14_h1: "A csillagok felé.", t14_h2: "Űrkutatás.", t14_q: "Mit csinál az MI az űrben?", t14_qa: "Távcsőadatokat elemez", t14_qb: "Csillagot takarít", t14_qc: "Kávét főz", t14_qd: "Oxigént fest",
    t14_w1: "Az MI", t14_w2: "segít", t14_w3: "nekünk", t14_w4: "jobban", t14_w5: "megismerni", t14_w6: "a", t14_w7: "világegyetemet.",
    t15_title: "Legyél MI alkotó!", t15_text: "Bárki megtanulhatja, hogyan kell egyszerű MI modelleket készíteni.", t15_inst: "Jelöld meg a helyes szót:", t15_h1: "Csináld magad.", t15_h2: "Programozás.", t15_q: "Mi fontos egy MI fejlesztőnek?", t15_qa: "Logika és matek", t15_qb: "Sok alvás", t15_qc: "Szép asztal", t15_qd: "Drága ruha",
    t15_tk1: "Tanulj", t15_tk2: "programozni,", t15_tk3: "hogy te", t15_tk4: "alakítsd", t15_tk5: "az MI", t15_tk6: "jövőjét."
  },
  ro: {
    explorer_title: "Explorator IA 9",
    t1_title: "Tipuri de învățare", t1_text: "Există moduri diferite în care IA învață: cu îndrumare (supravegheată) sau prin încercări proprii.", t1_inst: "Potrivește perechile:", t1_h1: "Cum se învață?", t1_h2: "Metode.", t1_q: "Ce este 'Supervised Learning'?", t1_qa: "Învățare cu exemple", t1_qb: "Învățare fără date", t1_qc: "Învățare în somn", t1_qd: "Deloc",
    t1_l1: "Supravegheată", t1_r1: "Cu profesor", t1_l2: "Nesupravegheată", t1_r2: "Independent", t1_l3: "Prin recompensă", t1_r3: "Recompensă",
    t2_title: "Big Data", t2_text: "Big Data reprezintă cantități uriașe de informații de care IA are nevoie pentru a deveni inteligentă.", t2_inst: "Completează spațiul liber:", t2_h1: "Multă informație.", t2_h2: "Combustibil pentru IA.", t2_q: "Ce este Big Data?", t2_qa: "Cantități enorme de date", t2_qb: "Un computer mare", t2_qc: "O carte groasă", t2_qd: "Un mouse mare",
    t2_sent: "IA are nevoie de ___ pentru a recunoaște tipare în lume.", t2_qa2: "date", t2_qb2: "apă", t2_qc2: "fructe", t2_qd2: "nisip",
    t3_title: "Testul Turing", t3_text: "Testul Turing verifică dacă un om își dă seama că vorbește cu o mașină.", t3_inst: "Sortează în găleți:", t3_h1: "Real sau IA?", t3_h2: "Comunicare.", t3_q: "Cine a inventat Testul Turing?", t3_qa: "Alan Turing", t3_qb: "Steve Jobs", t3_qc: "Albert Einstein", t3_qd: "Bill Gates",
    t3_bl1: "Om", t3_bl2: "IA", t3_i1: "Voce reală", t3_i2: "Voce sintetică", t3_i3: "Sentimente", t3_i4: "Algoritm",
    t4_title: "NLP", t4_text: "Procesarea limbajului natural (NLP) ajută IA să înțeleagă cu adevărat limbajul uman.", t4_inst: "Pune cuvintele în ordine:", t4_h1: "Procesare limbaj.", t4_h2: "Înțelegere.", t4_q: "Ce înseamnă NLP?", t4_qa: "Procesarea limbajului", t4_qb: "Net-Lern-Program", t4_qc: "Noul-Loc-Plan", t4_qd: "Nu-Lucrează-Prost",
    t4_w1: "NLP", t4_w2: "permite", t4_w3: "computerelor", t4_w4: "să", t4_w5: "înțeleagă", t4_w6: "limba", t4_w7: "noastră.",
    t5_title: "Computer Vision", t5_text: "Viziunea computerizată permite mașinilor să 'înțeleagă' imagini și videoclipuri.", t5_inst: "Evidențiază cuvântul corect:", t5_h1: "Învățarea vederii.", t5_h2: "Interpretarea pixelilor.", t5_q: "Unde este folosită Computer Vision?", t5_qa: "Recunoaștere facială", t5_qb: "Boxe", t5_qc: "Tastatură", t5_qd: "Mouse pad",
    t5_tk1: "Viziunea", t5_tk2: "computerizată", t5_tk3: "ajută", t5_tk4: "la", t5_tk5: "identificarea", t5_tk6: "obiectelor", t5_tk7: "clar.",
    t6_title: "Reinforcement Learning", t6_text: "IA învață aici prin recompensă și pedeapsă, ca într-un joc video.", t6_inst: "Potrivește perechile:", t6_h1: "Învățare prin succes.", t6_h2: "Încercare și eroare.", t6_q: "Ce primește IA la succes?", t6_qa: "Puncte de recompensă", t6_qb: "Un măr", t6_qc: "Mai mult curent", t6_qd: "Vacanță",
    t6_l1: "Succes", t6_r1: "Recompensă", t6_l2: "Eroare", t6_r2: "Scădere", t6_l3: "Scop", t6_r3: "Highscore",
    t7_title: "IA la școală", t7_text: "IA poate ajuta la învățare prin adaptarea sarcinilor la ritmul tău.", t7_inst: "Completează spațiul liber:", t7_h1: "Învățare mai bună.", t7_h2: "Personalizat.", t7_q: "Cum ajută IA elevii?", t7_qa: "Ajutor individual", t7_qb: "Fură temele", t7_qc: "Înlocuiește profesorii", t7_qd: "Prelungește vacanța",
    t7_sent: "O IA de învățare se adaptează la ___ tău.", t7_qa2: "ritmul", t7_qb2: "aspectul", t7_qc2: "bicicleta", t7_qd2: "prânzul",
    t8_title: "Joburile viitorului", t8_text: "IA va schimba multe profesii. Apar joburi noi precum 'Prompt Engineer'.", t8_inst: "Sortează în găleți:", t8_h1: "Ce rămâne? Ce vine?", t8_h2: "Lumea muncii.", t8_q: "Ce este un Prompt Engineer?", t8_qa: "Expert în comenzi IA", t8_qb: "Mecanic de tren", t8_qc: "Un bucătar", t8_qd: "Un grădinar",
    t8_bl1: "Clasic", t8_bl2: "Job IA", t8_i1: "Brutar", t8_i2: "Antrenor IA", t8_i3: "Tâmplar", t8_i4: "Etician de date",
    t9_title: "Om & IA", t9_text: "IA funcționează cel mai bine când sprijină oamenii, nu când îi înlocuiește.", t9_inst: "Pune cuvintele în ordine:", t9_h1: "Muncă în echipă.", t9_h2: "Colaborare.", t9_q: "Care este scopul IA?", t9_qa: "Să ajute oamenii", t9_qb: "Dominația lumii", t9_qc: "Să supere oamenii", t9_qd: "Să nu facă nimic",
    t9_w1: "Omul", t9_w2: "și", t9_w3: "mașina", t9_w4: "formează", t9_w5: "împreună", t9_w6: "o", t9_w7: "echipă puternică.",
    t10_title: "Energie & IA", t10_text: "IA consumă mult curent. Trebuie să o facem mai sustenabilă.", t10_inst: "Evidențiază cuvântul corect:", t10_h1: "Mediu.", t10_h2: "Consum energie.", t10_q: "Care este o problemă a IA?", t10_qa: "Consum mare de energie", t10_qb: "Prea multă apă", t10_qc: "Fără internet", t10_qd: "Prea zgomotoasă",
    t10_tk1: "IA", t10_tk2: "sustenabilă", t10_tk3: "protejează", t10_tk4: "resursele", t10_tk5: "noastre", t10_tk6: "valoroase.",
    t11_title: "Dileme etice", t11_text: "Ar trebui o IA să decidă cine primește un job? Aceasta este o întrebare etică.", t11_inst: "Potrivește perechile:", t11_h1: "Corect sau Greșit?", t11_h2: "Responsabilitate.", t11_q: "Ce este etica în IA?", t11_qa: "Întrebări despre echitate", t11_qb: "Culoarea cablului", t11_qc: "Mărimea ecranului", t11_qd: "Prețul",
    t11_l1: "Decizie", t11_r1: "Morală", t11_l2: "IA", t11_r2: "Instrument", t11_l3: "Lege", t11_r3: "Reguli",
    t12_title: "AGI", t12_text: "O 'Inteligență Generală' (AGI) ar putea învăța orice poate un om. Încă nu există.", t12_inst: "Completează spațiul liber:", t12_h1: "Super-IA.", t12_h2: "Teorie.", t12_q: "Ce înseamnă AGI?", t12_qa: "Inteligență Generală", t12_qb: "Alt-Grup-Info", t12_qc: "Aici-Găsim-Inovație", t12_qd: "Auto-Gid-Input",
    t12_sent: "O AGI ar fi la fel de deșteaptă ca un ___.", t12_qa2: "om", t12_qb2: "prăjitor", t12_qc2: "piatră", t12_qd2: "cablu",
    t13_title: "Singularitatea", t13_text: "Unii cred că IA va deveni la un moment dat mai deșteaptă decât toți oamenii la un loc.", t13_inst: "Sortează în găleți:", t13_h1: "Viziuni viitoare.", t13_h2: "Science fiction?", t13_q: "Ce este singularitatea?", t13_qa: "IA depășește oamenii", t13_qb: "O gaură neagră", t13_qc: "Un nou gen muzical", t13_qd: "O sărbătoare",
    t13_bl1: "Azi", t13_bl2: "Viitor", t13_i1: "Aplicație smart", t13_i2: "Super-inteligență", t13_i3: "Chatbot", t13_i4: "Mașină conștientă",
    t14_title: "IA în spațiu", t14_text: "IA controlează roverele pe Marte și ajută la descoperirea galaxiilor îndepărtate.", t14_inst: "Pune cuvintele în ordine:", t14_h1: "Spre stele.", t14_h2: "Cercetare spațială.", t14_q: "Ce face IA în spațiu?", t14_qa: "Analizează date telescop", t14_qb: "Curăță stelele", t14_qc: "Face cafea", t14_qd: "Pictează oxigen",
    t14_w1: "IA", t14_w2: "ne", t14_w3: "ajută", t14_w4: "să", t14_w5: "explorăm", t14_w6: "universul", t14_w7: "mai bine.",
    t15_title: "Fii un creator IA", t15_text: "Oricine poate învăța cum să programeze modele IA simple.", t15_inst: "Evidențiază cuvântul corect:", t15_h1: "Fă-o singur.", t15_h2: "Programare.", t15_q: "Ce este important pentru un dezvoltator IA?", t15_qa: "Logica și mate", t15_qb: "Mult somn", t15_qc: "Un birou frumos", t15_qd: "Haine scumpe",
    t15_tk1: "Învață", t15_tk2: "să programezi", t15_tk3: "pentru a", t15_tk4: "modela", t15_tk5: "viitorul", t15_tk6: "prin", t15_tk7: "IA."
  }
};

export const INFO_K5_I9_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "simple-icon", icon: "🛤️", color: "#607D8B" },
    interactive: { type: "match-pairs", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", pairs: [{left:"t1_l1",right:"t1_r1"},{left:"t1_l2",right:"t1_r2"},{left:"t1_l3",right:"t1_r3"}] },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" }
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "💾", color: "#3F51B5" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" }
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "icon-grid", items: [{emoji:"👤",label:"Echt"},{emoji:"🤖",label:"Maschine"}] },
    interactive: { type: "drag-to-bucket", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", buckets: [{id:"b1",label:"t3_bl1"},{id:"b2",label:"t3_bl2"}], items: [{text:"t3_i1",bucketId:"b1"},{text:"t3_i2",bucketId:"b2"},{text:"t3_i3",bucketId:"b1"},{text:"t3_i4",bucketId:"b2"}] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "💬", color: "#2196F3" },
    interactive: { type: "word-order", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", words: ["t4_w1", "t4_w2", "t4_w3", "t4_w4", "t4_w5", "t4_w6", "t4_w7"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6].slice(0, 7) },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "👁️", color: "#FF5722" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6","t5_tk7"].filter(x=>x!==undefined), correctIndices: [4] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" }
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "simple-icon", icon: "🎮", color: "#9C27B0" },
    interactive: { type: "match-pairs", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", pairs: [{left:"t6_l1",right:"t6_r1"},{left:"t6_l2",right:"t6_r2"},{left:"t6_l3",right:"t6_r3"}] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" }
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "🏫", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", sentence: "t7_sent", choices: ["t7_qa2", "t7_qb2", "t7_qc2", "t7_qd2"], correctIndex: 0 },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" }
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "icon-grid", items: [{emoji:"🥯",label:"Klassisch"},{emoji:"🦾",label:"KI-Job"}] },
    interactive: { type: "drag-to-bucket", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", buckets: [{id:"b1",label:"t8_bl1"},{id:"b2",label:"t8_bl2"}], items: [{text:"t8_i1",bucketId:"b1"},{text:"t8_i2",bucketId:"b2"},{text:"t8_i3",bucketId:"b1"},{text:"t8_i4",bucketId:"b2"}] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" }
  },
  {
    infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "simple-icon", icon: "🤝", color: "#FFC107" },
    interactive: { type: "word-order", instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2", words: ["t9_w1", "t9_w2", "t9_w3", "t9_w4", "t9_w5", "t9_w6", "t9_w7"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6].slice(0, 7) },
    quiz: { question: "t9_q", choices: ["t9_qa", "t9_qb", "t9_qc", "t9_qd"], answer: "t9_qa" }
  },
  {
    infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "simple-icon", icon: "⚡", color: "#FFEB3B" },
    interactive: { type: "highlight-text", instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2", tokens: ["t10_tk1","t10_tk2","t10_tk3","t10_tk4","t10_tk5","t10_tk6"].filter(x=>x!==undefined), correctIndices: [0] },
    quiz: { question: "t10_q", choices: ["t10_qa", "t10_qb", "t10_qc", "t10_qd"], answer: "t10_qa" }
  },
  {
    infoTitle: "t11_title", infoText: "t11_text",
    svg: { type: "simple-icon", icon: "⚖️", color: "#9E9E9E" },
    interactive: { type: "match-pairs", instruction: "t11_inst", hint1: "t11_h1", hint2: "t11_h2", pairs: [{left:"t11_l1",right:"t11_r1"},{left:"t11_l2",right:"t11_r2"},{left:"t11_l3",right:"t11_r3"}] },
    quiz: { question: "t11_q", choices: ["t11_qa", "t11_qb", "t11_qc", "t11_qd"], answer: "t11_qa" }
  },
  {
    infoTitle: "t12_title", infoText: "t12_text",
    svg: { type: "simple-icon", icon: "🧠", color: "#FF9800" },
    interactive: { type: "gap-fill", instruction: "t12_inst", hint1: "t12_h1", hint2: "t12_h2", sentence: "t12_sent", choices: ["t12_qa2", "t12_qb2", "t12_qc2", "t12_qd2"], correctIndex: 0 },
    quiz: { question: "t12_q", choices: ["t12_qa", "t12_qb", "t12_qc", "t12_qd"], answer: "t12_qa" }
  },
  {
    infoTitle: "t13_title", infoText: "t13_text",
    svg: { type: "icon-grid", items: [{emoji:"📅",label:"Heute"},{emoji:"🚀",label:"Zukunft"}] },
    interactive: { type: "drag-to-bucket", instruction: "t13_inst", hint1: "t13_h1", hint2: "t13_h2", buckets: [{id:"b1",label:"t13_bl1"},{id:"b2",label:"t13_bl2"}], items: [{text:"t13_i1",bucketId:"b1"},{text:"t13_i2",bucketId:"b2"},{text:"t13_i3",bucketId:"b1"},{text:"t13_i4",bucketId:"b2"}] },
    quiz: { question: "t13_q", choices: ["t13_qa", "t13_qb", "t13_qc", "t13_qd"], answer: "t13_qa" }
  },
  {
    infoTitle: "t14_title", infoText: "t14_text",
    svg: { type: "simple-icon", icon: "🌌", color: "#000000" },
    interactive: { type: "word-order", instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2", words: ["t14_w1", "t14_w2", "t14_w3", "t14_w4", "t14_w5", "t14_w6", "t14_w7"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6].slice(0, 7) },
    quiz: { question: "t14_q", choices: ["t14_qa", "t14_qb", "t14_qc", "t14_qd"], answer: "t14_qa" }
  },
  {
    infoTitle: "t15_title", infoText: "t15_text",
    svg: { type: "simple-icon", icon: "👨‍💻", color: "#009688" },
    interactive: { type: "highlight-text", instruction: "t15_inst", hint1: "t15_h1", hint2: "t15_h2", tokens: ["t15_tk1","t15_tk2","t15_tk3","t15_tk4","t15_tk5","t15_tk6","t15_tk7"].filter(x=>x!==undefined), correctIndices: [1,6] },
    quiz: { question: "t15_q", choices: ["t15_qa", "t15_qb", "t15_qc", "t15_qd"], answer: "t15_qa" }
  }
];

