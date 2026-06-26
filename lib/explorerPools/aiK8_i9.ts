// @ts-nocheck
// lib/explorerPools/aiK8_i9.ts
import type { PoolTopicDef } from "./types";

export const INFO_K8_I9_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "KI Ethik & Zukunft",
    t1_title: "Voreingenommenheit (Bias)", t1_text: "KI-Systeme können Vorurteile aus ihren Trainingsdaten übernehmen und Menschen unfair behandeln.", t1_inst: "Ordne die Paare zu:", t1_h1: "Unfaire Daten.", t1_h2: "Was gehört zusammen?", t1_q: "Was ist Bias in der KI?", t1_qa: "Eingebaute Vorurteile", t1_qb: "Ein schneller Prozessor", t1_qc: "Ein neuer Akku", t1_qd: "Ein bunter Bildschirm",
    t1_l1: "Daten", t1_r1: "Quelle von Bias", t1_l2: "Fairness", t1_r2: "Ziel der Ethik", t1_l3: "Algorithmus", t1_r3: "Entscheidungsregel",
    t2_title: "Privatsphäre", t2_text: "KI benötigt viele Daten, was Risiken für den Schutz unserer persönlichen Informationen birgt.", t2_inst: "Fülle die Lücke aus:", t2_h1: "Eigene Daten schützen.", t2_h2: "Recht auf...", t2_q: "Warum ist Privatsphäre bei KI wichtig?", t2_qa: "Schutz persönlicher Daten", t2_qb: "Damit die KI schneller wird", t2_qc: "Um Strom zu sparen", t2_qd: "Für bessere Grafik",
    t2_sent: "Datenschutz schützt unsere ___ Informationen.", t2_qa2: "privaten", t2_qb2: "öffentlichen", t2_qc2: "kaputten", t2_qd2: "teuren",
    t3_title: "Arbeitswelt & Automation", t3_text: "KI kann monotone Aufgaben übernehmen, was Berufe verändert, aber auch neue Jobs schafft.", t3_inst: "Sortiere in die Eimer:", t3_h1: "Ersetzen vs Ergänzen.", t3_h2: "Veränderung.", t3_q: "Was passiert durch KI-Automation?", t3_qa: "Berufe verändern sich", t3_qb: "Niemand muss mehr arbeiten", t3_qc: "Computer werden verboten", t3_qd: "Alle werden Bäcker",
    t3_bl1: "Automation", t3_bl2: "Menschliche Arbeit", t3_i1: "Fließband-Sortierung", t3_i2: "Künstlerische Beratung", t3_i3: "Daten-Analyse", t3_i4: "Empathische Pflege",
    t4_title: "KI-Sicherheit", t4_text: "KI-Systeme müssen so entwickelt werden, dass sie sicher sind und keine unbeabsichtigten Schäden anrichten.", t4_inst: "Bringe die Wörter in Ordnung:", t4_h1: "Sicherheit zuerst.", t4_h2: "Kontrolle behalten.", t4_q: "Was ist ein Ziel der KI-Sicherheit?", t4_qa: "Vermeidung von Unfällen", t4_qb: "Maximale Geschwindigkeit", t4_qc: "KI ohne Strom", t4_qd: "KI als Spielzeug",
    t4_w1: "Sicherheit", t4_w2: "ist", t4_w3: "entscheidend", t4_w4: "für", t4_w5: "das", t4_w6: "Vertrauen", t4_w7: "in KI.",
    t5_title: "Transparenz", t5_text: "Es ist wichtig zu verstehen, wie eine KI zu einer Entscheidung gekommen ist (Explainable AI).", t5_inst: "Markiere das Wort für 'verständlich':", t5_h1: "Offenheit.", t5_h2: "Erklärbarkeit.", t5_q: "Was bedeutet Transparenz bei KI?", t5_qa: "Entscheidungen verstehen", t5_qb: "Ein Glasgehäuse für den PC", t5_qc: "Ein unsichtbarer Roboter", t5_qd: "Schnelles Internet",
    t5_tk1: "KI", t5_tk2: "Entscheidungen", t5_tk3: "müssen", t5_tk4: "nachvollziehbar", t5_tk5: "sein.", t5_tk6: "",
    t6_title: "Verantwortung", t6_text: "Wer haftet, wenn eine KI einen Fehler macht? Designer, Nutzer oder die KI selbst?", t6_inst: "Ordne die Paare zu:", t6_h1: "Wer ist schuld?", t6_h2: "Haftung klären.", t6_q: "Wer trägt aktuell meist die Verantwortung für KI-Fehler?", t6_qa: "Die Entwickler / Firmen", t6_qb: "Die KI selbst", t6_qc: "Der Stromanbieter", t6_qd: "Niemand",
    t6_l1: "Entwickler", t6_r1: "Erstellung", t6_l2: "Nutzer", t6_r2: "Anwendung", t6_l3: "Gesetz", t6_r3: "Regulierung",
    t7_title: "Ethische Richtlinien", t7_text: "Organisationen weltweit erstellen Regeln, um KI zum Wohle der Menschheit einzusetzen.", t7_inst: "Fülle die Lücke aus:", t7_h1: "Gute Regeln.", t7_h2: "Ethik-Kodex.", t7_q: "Was ist ein Ziel ethischer KI-Richtlinien?", t7_qa: "Wohl der Menschheit", t7_qb: "Höhere Preise", t7_qc: "Weniger Speicher", t7_qd: "Bunte Roboter",
    t7_sent: "KI sollte den Menschen ___ und nicht schaden.", t7_qa2: "helfen", t7_qb2: "ignorieren", t7_qc2: "ersetzen", t7_qd2: "ärgern",
    t8_title: "Umweltbelastung", t8_text: "Das Training großer KI-Modelle verbraucht enorm viel Energie und Wasser zur Kühlung.", t8_inst: "Sortiere in die Eimer:", t8_h1: "KI und Natur.", t8_h2: "Ressourcenverbrauch.", t8_q: "Was verbraucht KI-Training besonders viel?", t8_qa: "Strom & Wasser", t8_qb: "Papier", t8_qc: "Holz", t8_qd: "Sauerstoff",
    t8_bl1: "Verbrauch", t8_bl2: "Lösung", t8_i1: "Große Rechenzentren", t8_i2: "Grüne Energie", t8_i3: "Hardware-Kühlung", t8_i4: "Effiziente Codes",
    t9_title: "KI Regulierung", t9_text: "Gesetze (wie der EU AI Act) sollen den Einsatz von KI sicher und fair gestalten.", t9_inst: "Bringe die Wörter in Ordnung:", t9_h1: "Gesetze für KI.", t9_h2: "Staatliche Kontrolle.", t9_q: "Was ist der EU AI Act?", t9_qa: "Ein Gesetz zur KI", t9_qb: "Ein neues KI-Modell", t9_qc: "Eine Grafikkarte", t9_qd: "Ein Computerspiel",
    t9_w1: "Gesetze", t9_w2: "schützen", t9_w3: "uns", t9_w4: "vor", t9_w5: "dem", t9_w6: "Missbrauch", t9_w7: "von KI.",
    t10_title: "Mensch-KI Kollaboration", t10_text: "In der Zukunft werden Menschen und KI als Team zusammenarbeiten (Co-Piloten).", t10_inst: "Markiere die zwei Partner, die im Team zusammenarbeiten:", t10_h1: "Zusammenarbeit.", t10_h2: "Teamwork.", t10_q: "Wie nennt man KI, die uns bei der Arbeit hilft?", t10_qa: "Co-Pilot / Assistent", t10_qb: "Chef", t10_qc: "Konkurrent", t10_qd: "Feind",
    t10_tk1: "Menschen", t10_tk2: "und", t10_tk3: "KI", t10_tk4: "ergänzen", t10_tk5: "ihre", t10_tk6: "Stärken.", t10_tk7: "",
    t11_title: "Die Singularität", t11_text: "Ein hypothetischer Zeitpunkt, an dem KI klüger wird als alle Menschen zusammen.", t11_inst: "Ordne die Paare zu:", t11_h1: "Superintelligenz.", t11_h2: "Zukunftstheorie.", t11_q: "Was beschreibt die Singularität?", t11_qa: "KI übertrifft Menschen", t11_qb: "Ein schwarzes Loch im PC", t11_qc: "Das Ende des Internets", t11_qd: "Ein neuer Feiertag",
    t11_l1: "Mensch", t11_r1: "Biologische Intelligenz", t11_l2: "KI", t11_r2: "Künstliche Intelligenz", t11_l3: "Singularität", t11_r3: "Überlegenheit",
    t12_title: "Urheberrecht & KI", t12_text: "Wem gehört ein Bild, das eine KI gemalt hat? Dem Programmierer oder der KI?", t12_inst: "Fülle die Lücke aus:", t12_h1: "Wem gehört es?", t12_h2: "Copyright-Fragen.", t12_q: "Was ist ein Problem bei KI-Kunst?", t12_qa: "Unklare Urheberschaft", t12_qb: "Zu viele Farben", t12_qc: "Die KI hat keinen Pinsel", t12_qd: "Bilder sind zu schwer",
    t12_sent: "Das ___ regelt den Schutz von Werken.", t12_qa2: "Urheberrecht", t12_qb2: "Wetter", t12_qc2: "Internet", t12_qd2: "Telefon",
    t13_title: "Social Media Algorithmen", t13_text: "KI entscheidet, welche Beiträge du siehst, was oft zu 'Filterblasen' führt.", t13_inst: "Sortiere in die Eimer:", t13_h1: "Echokammern.", t13_h2: "Informationsauswahl.", t13_q: "Was ist eine Filterblase?", t13_qa: "Man sieht nur eigene Meinungen", t13_qb: "Eine echte Seifenblase", t13_qc: "Ein Schutzschild", t13_qd: "Ein Grafikfehler",
    t13_bl1: "Algorithmus", t13_bl2: "Effekt", t13_i1: "Interessen-Analyse", t13_i2: "Filterblase", t13_i3: "Inhalts-Ranking", t13_i4: "Isolation",
    t14_title: "Überwachung", t14_text: "Gesichtserkennung kann für Sicherheit genutzt werden, aber auch zur totalen Überwachung.", t14_inst: "Bringe die Wörter in Ordnung:", t14_h1: "Kameras überall.", t14_h2: "Kontrolle vs Freiheit.", t14_q: "Was ist ein Risiko von Gesichtserkennung?", t14_qa: "Verlust der Anonymität", t14_qb: "Bessere Fotos", t14_qc: "Schnelleres Make-up", t14_qd: "Längere Akkulaufzeit",
    t14_w1: "KI-Überwachung", t14_w2: "kann", t14_w3: "unsere", t14_w4: "persönliche", t14_w5: "Freiheit", t14_w6: "stark", t14_w7: "einschränken.",
    t15_title: "Die Zukunft der KI", t15_text: "KI wird unseren Alltag grundlegend verändern, von Bildung bis Arbeit.", t15_inst: "Markiere das Wort für 'Zukunft':", t15_h1: "Ausblick.", t15_h2: "Neue Welt.", t15_q: "Was sollten wir im Umgang mit KI lernen?", t15_qa: "Kritischer Umgang", t15_qb: "Alles blind glauben", t15_qc: "Keine Computer nutzen", t15_qd: "Angst haben",
    t15_tk1: "Die", t15_tk2: "Zukunft", t15_tk3: "gestalten", t15_tk4: "wir", t15_tk5: "gemeinsam", t15_tk6: "mit", t15_tk7: "KI."
  },
  en: {
    explorer_title: "AI Ethics & Future",
    t1_title: "Bias", t1_text: "AI systems can adopt prejudices from their training data and treat people unfairly.", t1_inst: "Match the pairs:", t1_h1: "Unfair data.", t1_h2: "What goes together?", t1_q: "What is bias in AI?", t1_qa: "Inbuilt prejudices", t1_qb: "A fast processor", t1_qc: "A new battery", t1_qd: "A colorful screen",
    t1_l1: "Data", t1_r1: "Source of bias", t1_l2: "Fairness", t1_r2: "Goal of ethics", t1_l3: "Algorithm", t1_r3: "Decision rule",
    t2_title: "Privacy", t2_text: "AI needs lots of data, which poses risks to the protection of our personal information.", t2_inst: "Fill in the blank:", t2_h1: "Protecting own data.", t2_h2: "Right to...", t2_q: "Why is privacy important in AI?", t2_qa: "Protection of personal data", t2_qb: "To make AI faster", t2_qc: "To save power", t2_qd: "For better graphics",
    t2_sent: "Data protection protects our ___ information.", t2_qa2: "private", t2_qb2: "public", t2_qc2: "broken", t2_qd2: "expensive",
    t3_title: "Work & Automation", t3_text: "AI can take over monotonous tasks, changing professions but also creating new jobs.", t3_inst: "Sort into buckets:", t3_h1: "Replacing vs Complementing.", t3_h2: "Change.", t3_q: "What happens through AI automation?", t3_qa: "Professions change", t3_qb: "No one has to work anymore", t3_qc: "Computers are banned", t3_qd: "Everyone becomes a baker",
    t3_bl1: "Automation", t3_bl2: "Human Work", t3_i1: "Assembly line sorting", t3_i2: "Artistic consulting", t3_i3: "Data analysis", t3_i4: "Empathic care",
    t4_title: "AI Safety", t4_text: "AI systems must be developed so that they are safe and cause no unintended harm.", t4_inst: "Put the words in order:", t4_h1: "Safety first.", t4_h2: "Stay in control.", t4_q: "What is a goal of AI safety?", t4_qa: "Avoiding accidents", t4_qb: "Maximum speed", t4_qc: "AI without power", t4_qd: "AI as a toy",
    t4_w1: "Safety", t4_w2: "is", t4_w3: "crucial", t4_w4: "for", t4_w5: "trust", t4_w6: "in", t4_w7: "AI.",
    t5_title: "Transparency", t5_text: "It is important to understand how an AI reached a decision (Explainable AI).", t5_h1: "Openness.", t5_h2: "Explainability.", t5_q: "What does transparency in AI mean?", t5_qa: "Understanding decisions", t5_qb: "A glass case for the PC", t5_qc: "An invisible robot", t5_qd: "Fast internet",
    t6_title: "Responsibility", t6_text: "Who is liable when an AI makes a mistake? Designers, users, or the AI itself?", t6_inst: "Match the pairs:", t6_h1: "Who is to blame?", t6_h2: "Clarify liability.", t6_q: "Who usually bears responsibility for AI errors today?", t6_qa: "The developers / companies", t6_qb: "The AI itself", t6_qc: "The power company", t6_qd: "Nobody",
    t6_l1: "Developer", t6_r1: "Creation", t6_l2: "User", t6_r2: "Use", t6_l3: "Law", t6_r3: "Regulation",
    t7_title: "Ethical Guidelines", t7_text: "Organizations worldwide create rules to use AI for the good of humanity.", t7_inst: "Fill in the blank:", t7_h1: "Good rules.", t7_h2: "Code of ethics.", t7_q: "What is a goal of ethical AI guidelines?", t7_qa: "The good of humanity", t7_qb: "Higher prices", t7_qc: "Less storage", t7_qd: "Colorful robots",
    t7_sent: "AI should ___ humans and not harm them.", t7_qa2: "help", t7_qb2: "ignore", t7_qc2: "replace", t7_qd2: "annoy",
    t8_title: "Environmental Impact", t8_text: "Training large AI models uses enormous amounts of energy and water for cooling.", t8_inst: "Sort into buckets:", t8_h1: "AI and nature.", t8_h2: "Resource use.", t8_q: "What does AI training use a lot of?", t8_qa: "Electricity & water", t8_qb: "Paper", t8_qc: "Wood", t8_qd: "Oxygen",
    t8_bl1: "Consumption", t8_bl2: "Solution", t8_i1: "Large data centers", t8_i2: "Green energy", t8_i3: "Hardware cooling", t8_i4: "Efficient code",
    t9_title: "AI Regulation", t9_text: "Laws (like the EU AI Act) aim to make the use of AI safe and fair.", t9_inst: "Put the words in order:", t9_h1: "Laws for AI.", t9_h2: "Government control.", t9_q: "What is the EU AI Act?", t9_qa: "A law on AI", t9_qb: "A new AI model", t9_qc: "A graphics card", t9_qd: "A computer game",
    t9_w1: "Laws", t9_w2: "protect", t9_w3: "us", t9_w4: "from", t9_w5: "the", t9_w6: "misuse", t9_w7: "of AI.",
    t10_title: "Human-AI Collaboration", t10_text: "In the future, humans and AI will work together as a team (co-pilots).", t10_h1: "Cooperation.", t10_h2: "Teamwork.", t10_q: "What do we call AI that helps us at work?", t10_qa: "Co-pilot / assistant", t10_qb: "Boss", t10_qc: "Competitor", t10_qd: "Enemy",
    t11_title: "The Singularity", t11_text: "A hypothetical point at which AI becomes smarter than all humans combined.", t11_inst: "Match the pairs:", t11_h1: "Superintelligence.", t11_h2: "Future theory.", t11_q: "What does the singularity describe?", t11_qa: "AI surpasses humans", t11_qb: "A black hole in the PC", t11_qc: "The end of the internet", t11_qd: "A new holiday",
    t11_l1: "Human", t11_r1: "Biological intelligence", t11_l2: "AI", t11_r2: "Artificial intelligence", t11_l3: "Singularity", t11_r3: "Superiority",
    t12_title: "Copyright & AI", t12_text: "Who owns a picture that an AI has painted? The programmer or the AI?", t12_inst: "Fill in the blank:", t12_h1: "Who owns it?", t12_h2: "Copyright questions.", t12_q: "What is a problem with AI art?", t12_qa: "Unclear authorship", t12_qb: "Too many colors", t12_qc: "The AI has no brush", t12_qd: "Pictures are too heavy",
    t12_sent: "___ regulates the protection of works.", t12_qa2: "Copyright", t12_qb2: "Weather", t12_qc2: "Internet", t12_qd2: "Telephone",
    t13_title: "Social Media Algorithms", t13_text: "AI decides which posts you see, which often leads to 'filter bubbles'.", t13_inst: "Sort into buckets:", t13_h1: "Echo chambers.", t13_h2: "Information selection.", t13_q: "What is a filter bubble?", t13_qa: "You only see your own opinions", t13_qb: "A real soap bubble", t13_qc: "A protective shield", t13_qd: "A graphics glitch",
    t13_bl1: "Algorithm", t13_bl2: "Effect", t13_i1: "Interest analysis", t13_i2: "Filter bubble", t13_i3: "Content ranking", t13_i4: "Isolation",
    t14_title: "Surveillance", t14_text: "Facial recognition can be used for security, but also for total surveillance.", t14_inst: "Put the words in order:", t14_h1: "Cameras everywhere.", t14_h2: "Control vs freedom.", t14_q: "What is a risk of facial recognition?", t14_qa: "Loss of anonymity", t14_qb: "Better photos", t14_qc: "Faster makeup", t14_qd: "Longer battery life",
    t14_w1: "AI surveillance", t14_w2: "can", t14_w3: "strongly", t14_w4: "limit", t14_w5: "our", t14_w6: "personal", t14_w7: "freedom.",
    t15_title: "The Future of AI", t15_text: "AI will fundamentally change our daily lives, from education to work.", t15_h1: "Outlook.", t15_h2: "New world.", t15_q: "What should we learn when dealing with AI?", t15_qa: "Critical thinking", t15_qb: "Believe everything blindly", t15_qc: "Use no computers", t15_qd: "Be afraid",
    t5_inst: "Highlight the word that means 'understandable':", t5_tk1: "AI", t5_tk2: "decisions", t5_tk3: "stay", t5_tk4: "explainable", t5_tk5: "today.",
    t10_inst: "Highlight the two partners who work together as a team:", t10_tk1: "Humans", t10_tk2: "and", t10_tk3: "AI", t10_tk4: "combine", t10_tk5: "their", t10_tk6: "strengths.",
    t15_inst: "Highlight the word that means 'the future':", t15_tk1: "The", t15_tk2: "future", t15_tk3: "we", t15_tk4: "shape", t15_tk5: "together", t15_tk6: "with", t15_tk7: "AI."
  },
  hu: {
    explorer_title: "MI Etika és Jövő",
    t1_title: "Előítélet (Bias)", t1_text: "A MI rendszerek átvehetik a tanító adatokban lévő előítéleteket, így igazságtalanok lehetnek.", t1_inst: "Párosítsd össze:", t1_h1: "Igazságtalan adatok.", t1_h2: "Mi tartozik össze?", t1_q: "Mi a bias a MI-ben?", t1_qa: "Beépített előítélet", t1_qb: "Gyors processzor", t1_qc: "Új akkumulátor", t1_qd: "Színes képernyő",
    t1_l1: "Adat", t1_r1: "Bias forrása", t1_l2: "Fairness", t1_r2: "Etikai cél", t1_l3: "Algoritmus", t1_r3: "Döntési szabály",
    t2_title: "Magánélet", t2_text: "A MI-nek sok adatra van szüksége, ami kockázatot jelent a személyes adataink védelmére.", t2_inst: "Töltsd ki a hiányt:", t2_h1: "Saját adatok védelme.", t2_h2: "Jog a...", t2_q: "Miért fontos a magánélet védelme?", t2_qa: "Személyes adatok védelme", t2_qb: "Hogy gyorsabb legyen a gép", t2_qc: "Árammegtakarítás", t2_qd: "Jobb grafika",
    t2_sent: "Az adatvédelem a ___ információinkat óvja.", t2_qa2: "magán", t2_qb2: "nyilvános", t2_qc2: "hibás", t2_qd2: "drága",
    t3_title: "Munka világa és automatizálás", t3_text: "A MI átveheti az egyhangú feladatokat, ami megváltoztatja a szakmákat, de új munkákat is teremt.", t3_inst: "Rendezd a kosarakba:", t3_h1: "Helyettesít vs kiegészít.", t3_h2: "Változás.", t3_q: "Mit okoz a MI-automatizálás?", t3_qa: "A szakmák megváltoznak", t3_qb: "Senkinek sem kell már dolgoznia", t3_qc: "Betiltják a számítógépeket", t3_qd: "Mindenkiből pék lesz",
    t3_bl1: "Automatizálás", t3_bl2: "Emberi munka", t3_i1: "Futószalag-válogatás", t3_i2: "Művészi tanácsadás", t3_i3: "Adatelemzés", t3_i4: "Empatikus gondozás",
    t4_title: "MI-biztonság", t4_text: "A MI-rendszereket úgy kell fejleszteni, hogy biztonságosak legyenek és ne okozzanak nem szándékos kárt.", t4_inst: "Rakd sorba a szavakat:", t4_h1: "Előbb a biztonság.", t4_h2: "Tartsd kézben.", t4_q: "Mi a MI-biztonság egyik célja?", t4_qa: "A balesetek elkerülése", t4_qb: "Maximális sebesség", t4_qc: "MI áram nélkül", t4_qd: "MI mint játék",
    t4_w1: "A biztonság", t4_w2: "a", t4_w3: "legfontosabb", t4_w4: "az", t4_w5: "MI", t4_w6: "iránti", t4_w7: "bizalomban.",
    t5_title: "Átláthatóság", t5_text: "Fontos megérteni, hogyan jutott egy MI egy döntésre (megmagyarázható MI).", t5_h1: "Nyíltság.", t5_h2: "Megmagyarázhatóság.", t5_q: "Mit jelent az átláthatóság a MI-ben?", t5_qa: "A döntések megértése", t5_qb: "Üvegház a gépnek", t5_qc: "Egy láthatatlan robot", t5_qd: "Gyors internet",
    t6_title: "Felelősség", t6_text: "Ki felel, ha egy MI hibázik? A tervezők, a felhasználók vagy maga a MI?", t6_inst: "Párosítsd össze:", t6_h1: "Ki a hibás?", t6_h2: "Tisztázzuk a felelősséget.", t6_q: "Ki viseli ma többnyire a felelősséget a MI-hibákért?", t6_qa: "A fejlesztők / cégek", t6_qb: "Maga a MI", t6_qc: "Az áramszolgáltató", t6_qd: "Senki",
    t6_l1: "Fejlesztő", t6_r1: "Létrehozás", t6_l2: "Felhasználó", t6_r2: "Használat", t6_l3: "Törvény", t6_r3: "Szabályozás",
    t7_title: "Etikai irányelvek", t7_text: "Világszerte szervezetek alkotnak szabályokat, hogy a MI-t az emberiség javára használják.", t7_inst: "Töltsd ki a hiányt:", t7_h1: "Jó szabályok.", t7_h2: "Etikai kódex.", t7_q: "Mi az etikai MI-irányelvek egyik célja?", t7_qa: "Az emberiség java", t7_qb: "Magasabb árak", t7_qc: "Kevesebb tárhely", t7_qd: "Színes robotok",
    t7_sent: "A MI-nek ___ kellene az embert, nem ártani.", t7_qa2: "segítenie", t7_qb2: "figyelmen kívül hagynia", t7_qc2: "helyettesítenie", t7_qd2: "bosszantania",
    t8_title: "Környezeti hatás", t8_text: "A nagy MI-modellek tanítása rengeteg energiát és hűtővizet fogyaszt.", t8_inst: "Rendezd a kosarakba:", t8_h1: "MI és természet.", t8_h2: "Erőforrás-fogyasztás.", t8_q: "Miből fogyaszt sokat a MI-tanítás?", t8_qa: "Áram és víz", t8_qb: "Papír", t8_qc: "Fa", t8_qd: "Oxigén",
    t8_bl1: "Fogyasztás", t8_bl2: "Megoldás", t8_i1: "Nagy adatközpontok", t8_i2: "Zöld energia", t8_i3: "Hardverhűtés", t8_i4: "Hatékony kód",
    t9_title: "MI-szabályozás", t9_text: "A törvények (mint az EU AI Act) biztonságossá és igazságossá teszik a MI használatát.", t9_inst: "Rakd sorba a szavakat:", t9_h1: "Törvények a MI-nek.", t9_h2: "Állami ellenőrzés.", t9_q: "Mi az EU AI Act?", t9_qa: "Egy MI-ről szóló törvény", t9_qb: "Egy új MI-modell", t9_qc: "Egy videokártya", t9_qd: "Egy számítógépes játék",
    t9_w1: "A törvények", t9_w2: "védenek", t9_w3: "minket", t9_w4: "a", t9_w5: "mesterséges", t9_w6: "intelligencia", t9_w7: "visszaélésétől.",
    t10_title: "Ember-MI együttműködés", t10_text: "A jövőben az emberek és a MI csapatként dolgoznak majd együtt (másodpilóták).", t10_h1: "Együttműködés.", t10_h2: "Csapatmunka.", t10_q: "Hogy hívják a MI-t, ami a munkában segít?", t10_qa: "Másodpilóta / asszisztens", t10_qb: "Főnök", t10_qc: "Versenytárs", t10_qd: "Ellenség",
    t11_title: "A szingularitás", t11_text: "Egy feltételezett pillanat, amikor a MI okosabb lesz az összes embernél együttvéve.", t11_inst: "Párosítsd össze:", t11_h1: "Szuperintelligencia.", t11_h2: "Jövőelmélet.", t11_q: "Mit ír le a szingularitás?", t11_qa: "A MI túlszárnyalja az embert", t11_qb: "Egy fekete lyuk a gépben", t11_qc: "Az internet vége", t11_qd: "Egy új ünnep",
    t11_l1: "Ember", t11_r1: "Biológiai intelligencia", t11_l2: "MI", t11_r2: "Mesterséges intelligencia", t11_l3: "Szingularitás", t11_r3: "Fölény",
    t12_title: "Szerzői jog és MI", t12_text: "Kié a kép, amit egy MI festett? A programozóé vagy a MI-é?", t12_inst: "Töltsd ki a hiányt:", t12_h1: "Kié ez?", t12_h2: "Szerzői jogi kérdések.", t12_q: "Mi a probléma a MI-művészettel?", t12_qa: "Tisztázatlan szerzőség", t12_qb: "Túl sok szín", t12_qc: "A MI-nek nincs ecsetje", t12_qd: "A képek túl nehezek",
    t12_sent: "A ___ szabályozza a művek védelmét.", t12_qa2: "szerzői jog", t12_qb2: "időjárás", t12_qc2: "internet", t12_qd2: "telefon",
    t13_title: "Közösségi média algoritmusok", t13_text: "A MI dönti el, mely bejegyzéseket látod, ami gyakran 'szűrőbuborékhoz' vezet.", t13_inst: "Rendezd a kosarakba:", t13_h1: "Visszhangkamrák.", t13_h2: "Információválogatás.", t13_q: "Mi a szűrőbuborék?", t13_qa: "Csak a saját véleményed látod", t13_qb: "Egy igazi szappanbuborék", t13_qc: "Egy védőpajzs", t13_qd: "Egy grafikai hiba",
    t13_bl1: "Algoritmus", t13_bl2: "Hatás", t13_i1: "Érdeklődés-elemzés", t13_i2: "Szűrőbuborék", t13_i3: "Tartalom-rangsorolás", t13_i4: "Elszigetelődés",
    t14_title: "Megfigyelés", t14_text: "Az arcfelismerés használható biztonságra, de totális megfigyelésre is.", t14_inst: "Rakd sorba a szavakat:", t14_h1: "Kamerák mindenhol.", t14_h2: "Ellenőrzés vs szabadság.", t14_q: "Mi az arcfelismerés egyik kockázata?", t14_qa: "A névtelenség elvesztése", t14_qb: "Jobb fotók", t14_qc: "Gyorsabb smink", t14_qd: "Hosszabb akkumulátor-üzemidő",
    t14_w1: "Az MI-megfigyelés", t14_w2: "komolyan", t14_w3: "korlátozhatja", t14_w4: "a", t14_w5: "mi", t14_w6: "személyes", t14_w7: "szabadságunkat.",
    t15_title: "A MI jövője", t15_text: "A MI alapjaiban változtatja meg a mindennapjainkat, az oktatástól a munkáig.", t15_h1: "Kitekintés.", t15_h2: "Új világ.", t15_q: "Mit kell megtanulnunk a MI használatában?", t15_qa: "Kritikus hozzáállás", t15_qb: "Mindent vakon elhinni", t15_qc: "Ne használjunk gépet", t15_qd: "Félni",
    t5_inst: "Jelöld meg az 'átlátható' jelentésű szót:", t5_tk1: "Az MI", t5_tk2: "döntései", t5_tk3: "mindig", t5_tk4: "átláthatóak", t5_tk5: "maradnak.",
    t10_inst: "Jelöld meg a két partnert, akik csapatként dolgoznak:", t10_tk1: "Az ember", t10_tk2: "és", t10_tk3: "az MI", t10_tk4: "kiegészítik", t10_tk5: "egymás", t10_tk6: "erősségeit.",
    t15_inst: "Jelöld meg a 'jövő' jelentésű szót:", t15_tk1: "A", t15_tk2: "jövőt", t15_tk3: "együtt", t15_tk4: "építjük", t15_tk5: "fel", t15_tk6: "az", t15_tk7: "MI-vel."
  },
  ro: {
    explorer_title: "Etica IA și Viitorul",
    t1_title: "Prejudecată (Bias)", t1_text: "Sistemele IA pot prelua prejudecăți din datele de antrenament și pot fi nedrepte.", t1_inst: "Potrivește perechile:", t1_h1: "Date nedrepte.", t1_h2: "Ce se potrivește?", t1_q: "Ce este bias-ul în IA?", t1_qa: "Prejudecăți înnăscute", t1_qb: "Un procesor rapid", t1_qc: "O baterie nouă", t1_qd: "Un ecran colorat",
    t1_l1: "Date", t1_r1: "Sursa bias-ului", t1_l2: "Echitate", t1_r2: "Scopul eticii", t1_l3: "Algoritm", t1_r3: "Regulă de decizie",
    t2_title: "Confidențialitate", t2_text: "IA are nevoie de multe date, ceea ce creează riscuri pentru protecția informațiilor noastre personale.", t2_inst: "Completează spațiul liber:", t2_h1: "Protejează-ți datele.", t2_h2: "Dreptul la...", t2_q: "De ce este importantă confidențialitatea în IA?", t2_qa: "Protecția datelor personale", t2_qb: "Ca IA să fie mai rapidă", t2_qc: "Pentru a economisi energie", t2_qd: "Pentru grafică mai bună",
    t2_sent: "Protecția datelor ne apără informațiile ___.", t2_qa2: "personale", t2_qb2: "publice", t2_qc2: "stricate", t2_qd2: "scumpe",
    t3_title: "Munca și automatizarea", t3_text: "IA poate prelua sarcinile monotone, schimbând profesiile, dar creând și locuri de muncă noi.", t3_inst: "Sortează în coșuri:", t3_h1: "Înlocuire vs completare.", t3_h2: "Schimbare.", t3_q: "Ce se întâmplă prin automatizarea IA?", t3_qa: "Profesiile se schimbă", t3_qb: "Nimeni nu mai trebuie să muncească", t3_qc: "Calculatoarele sunt interzise", t3_qd: "Toți devin brutari",
    t3_bl1: "Automatizare", t3_bl2: "Munca umană", t3_i1: "Sortare pe bandă", t3_i2: "Consultanță artistică", t3_i3: "Analiză de date", t3_i4: "Îngrijire empatică",
    t4_title: "Siguranța IA", t4_text: "Sistemele IA trebuie dezvoltate astfel încât să fie sigure și să nu provoace daune neintenționate.", t4_inst: "Pune cuvintele în ordine:", t4_h1: "Siguranța mai întâi.", t4_h2: "Păstrează controlul.", t4_q: "Care este un scop al siguranței IA?", t4_qa: "Evitarea accidentelor", t4_qb: "Viteză maximă", t4_qc: "IA fără energie", t4_qd: "IA ca jucărie",
    t4_w1: "Siguranța", t4_w2: "este", t4_w3: "esențială", t4_w4: "pentru", t4_w5: "încrederea", t4_w6: "în", t4_w7: "IA.",
    t5_title: "Transparență", t5_text: "Este important să înțelegem cum a ajuns o IA la o decizie (IA explicabilă).", t5_h1: "Deschidere.", t5_h2: "Explicabilitate.", t5_q: "Ce înseamnă transparența în IA?", t5_qa: "Înțelegerea deciziilor", t5_qb: "O carcasă de sticlă pentru PC", t5_qc: "Un robot invizibil", t5_qd: "Internet rapid",
    t6_title: "Responsabilitate", t6_text: "Cine răspunde când o IA greșește? Designerii, utilizatorii sau IA însăși?", t6_inst: "Potrivește perechile:", t6_h1: "Cine e vinovat?", t6_h2: "Clarifică răspunderea.", t6_q: "Cine poartă de obicei azi responsabilitatea pentru erorile IA?", t6_qa: "Dezvoltatorii / firmele", t6_qb: "IA însăși", t6_qc: "Furnizorul de energie", t6_qd: "Nimeni",
    t6_l1: "Dezvoltator", t6_r1: "Creare", t6_l2: "Utilizator", t6_r2: "Utilizare", t6_l3: "Lege", t6_r3: "Reglementare",
    t7_title: "Ghiduri etice", t7_text: "Organizații din întreaga lume creează reguli pentru a folosi IA în beneficiul omenirii.", t7_inst: "Completează spațiul liber:", t7_h1: "Reguli bune.", t7_h2: "Cod etic.", t7_q: "Care este un scop al ghidurilor etice pentru IA?", t7_qa: "Binele omenirii", t7_qb: "Prețuri mai mari", t7_qc: "Mai puțină memorie", t7_qd: "Roboți colorați",
    t7_sent: "IA ar trebui să ___ oamenii, nu să le facă rău.", t7_qa2: "ajute", t7_qb2: "ignore", t7_qc2: "înlocuiască", t7_qd2: "supere",
    t8_title: "Impactul asupra mediului", t8_text: "Antrenarea modelelor mari de IA consumă enorm de multă energie și apă pentru răcire.", t8_inst: "Sortează în coșuri:", t8_h1: "IA și natura.", t8_h2: "Consum de resurse.", t8_q: "Ce consumă mult antrenarea IA?", t8_qa: "Electricitate și apă", t8_qb: "Hârtie", t8_qc: "Lemn", t8_qd: "Oxigen",
    t8_bl1: "Consum", t8_bl2: "Soluție", t8_i1: "Centre de date mari", t8_i2: "Energie verde", t8_i3: "Răcirea hardware-ului", t8_i4: "Cod eficient",
    t9_title: "Reglementarea IA", t9_text: "Legile (precum EU AI Act) urmăresc să facă utilizarea IA sigură și echitabilă.", t9_inst: "Pune cuvintele în ordine:", t9_h1: "Legi pentru IA.", t9_h2: "Control de stat.", t9_q: "Ce este EU AI Act?", t9_qa: "O lege despre IA", t9_qb: "Un model nou de IA", t9_qc: "O placă video", t9_qd: "Un joc pe calculator",
    t9_w1: "Legile", t9_w2: "ne", t9_w3: "protejează", t9_w4: "de", t9_w5: "abuzul", t9_w6: "inteligenței", t9_w7: "artificiale.",
    t10_title: "Colaborarea om-IA", t10_text: "În viitor, oamenii și IA vor lucra împreună ca o echipă (co-piloți).", t10_h1: "Cooperare.", t10_h2: "Muncă în echipă.", t10_q: "Cum numim IA care ne ajută la muncă?", t10_qa: "Co-pilot / asistent", t10_qb: "Șef", t10_qc: "Concurent", t10_qd: "Dușman",
    t11_title: "Singularitatea", t11_text: "Un moment ipotetic în care IA devine mai inteligentă decât toți oamenii la un loc.", t11_inst: "Potrivește perechile:", t11_h1: "Superinteligență.", t11_h2: "Teorie despre viitor.", t11_q: "Ce descrie singularitatea?", t11_qa: "IA depășește oamenii", t11_qb: "O gaură neagră în PC", t11_qc: "Sfârșitul internetului", t11_qd: "O nouă sărbătoare",
    t11_l1: "Om", t11_r1: "Inteligență biologică", t11_l2: "IA", t11_r2: "Inteligență artificială", t11_l3: "Singularitate", t11_r3: "Superioritate",
    t12_title: "Drepturi de autor și IA", t12_text: "Cui îi aparține o imagine pictată de o IA? Programatorului sau IA?", t12_inst: "Completează spațiul liber:", t12_h1: "Cui îi aparține?", t12_h2: "Întrebări despre copyright.", t12_q: "Care este o problemă a artei IA?", t12_qa: "Autor neclar", t12_qb: "Prea multe culori", t12_qc: "IA nu are pensulă", t12_qd: "Imaginile sunt prea grele",
    t12_sent: "___ reglementează protecția operelor.", t12_qa2: "Dreptul de autor", t12_qb2: "Vremea", t12_qc2: "Internetul", t12_qd2: "Telefonul",
    t13_title: "Algoritmii rețelelor sociale", t13_text: "IA decide ce postări vezi, ceea ce duce adesea la 'bule de filtrare'.", t13_inst: "Sortează în coșuri:", t13_h1: "Camere de ecou.", t13_h2: "Selecția informațiilor.", t13_q: "Ce este o bulă de filtrare?", t13_qa: "Vezi doar propriile opinii", t13_qb: "Un balon de săpun real", t13_qc: "Un scut de protecție", t13_qd: "O eroare grafică",
    t13_bl1: "Algoritm", t13_bl2: "Efect", t13_i1: "Analiza intereselor", t13_i2: "Bulă de filtrare", t13_i3: "Clasarea conținutului", t13_i4: "Izolare",
    t14_title: "Supraveghere", t14_text: "Recunoașterea facială poate fi folosită pentru securitate, dar și pentru supraveghere totală.", t14_inst: "Pune cuvintele în ordine:", t14_h1: "Camere peste tot.", t14_h2: "Control vs libertate.", t14_q: "Care este un risc al recunoașterii faciale?", t14_qa: "Pierderea anonimatului", t14_qb: "Fotografii mai bune", t14_qc: "Machiaj mai rapid", t14_qd: "Baterie mai durabilă",
    t14_w1: "Supravegherea IA", t14_w2: "ne", t14_w3: "poate", t14_w4: "limita", t14_w5: "puternic", t14_w6: "libertatea", t14_w7: "personală.",
    t15_title: "Viitorul IA", t15_text: "IA ne va schimba fundamental viața de zi cu zi, de la educație la muncă.", t15_h1: "Perspectivă.", t15_h2: "Lume nouă.", t15_q: "Ce ar trebui să învățăm în relația cu IA?", t15_qa: "Gândire critică", t15_qb: "Să credem totul orbește", t15_qc: "Să nu folosim calculatoare", t15_qd: "Să ne fie frică",
    t5_inst: "Evidențiază cuvântul care înseamnă 'explicabil':", t5_tk1: "Deciziile", t5_tk2: "IA", t5_tk3: "rămân", t5_tk4: "explicabile", t5_tk5: "mereu.",
    t10_inst: "Evidențiază cei doi parteneri care lucrează în echipă:", t10_tk1: "Omul", t10_tk2: "și", t10_tk3: "IA", t10_tk4: "își combină", t10_tk5: "punctele", t10_tk6: "forte.",
    t15_inst: "Evidențiază cuvântul care înseamnă 'viitor':", t15_tk1: "Construim", t15_tk2: "viitorul", t15_tk3: "împreună", t15_tk4: "cu", t15_tk5: "IA."
  }
};

export const INFO_K8_I9_POOL: PoolTopicDef[] = [
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
    svg: { type: "icon-grid", items: [{emoji:"🤖",label:"Automation"},{emoji:"👤",label:"Mensch"}] },
    interactive: { type: "drag-to-bucket", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", buckets: [{id:"b1",label:"t3_bl1"},{id:"b2",label:"t3_bl2"}], items: [{text:"t3_i1",bucketId:"b1"},{text:"t3_i2",bucketId:"b2"},{text:"t3_i3",bucketId:"b1"},{text:"t3_i4",bucketId:"b2"}] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "🛡️", color: "#4CAF50" },
    interactive: { type: "word-order", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", words: ["t4_w1", "t4_w2", "t4_w3", "t4_w4", "t4_w5", "t4_w6", "t4_w7"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "🔎", color: "#FF9800" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5"].filter(x=>x!==""), correctIndices: [3] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" }
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "simple-icon", icon: "🤝", color: "#9C27B0" },
    interactive: { type: "match-pairs", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", pairs: [{left:"t6_l1",right:"t6_r1"},{left:"t6_l2",right:"t6_r2"},{left:"t6_l3",right:"t6_r3"}] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" }
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "📜", color: "#795548" },
    interactive: { type: "gap-fill", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", sentence: "t7_sent", choices: ["t7_qa2", "t7_qb2", "t7_qc2", "t7_qd2"], correctIndex: 0 },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" }
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "icon-grid", items: [{emoji:"⚡",label:"Verbrauch"},{emoji:"🌿",label:"Lösung"}] },
    interactive: { type: "drag-to-bucket", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", buckets: [{id:"b1",label:"t8_bl1"},{id:"b2",label:"t8_bl2"}], items: [{text:"t8_i1",bucketId:"b1"},{text:"t8_i2",bucketId:"b2"},{text:"t8_i3",bucketId:"b1"},{text:"t8_i4",bucketId:"b2"}] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" }
  },
  {
    infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "simple-icon", icon: "⚖️", color: "#3F51B5" },
    interactive: { type: "word-order", instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2", words: ["t9_w1", "t9_w2", "t9_w3", "t9_w4", "t9_w5", "t9_w6", "t9_w7"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t9_q", choices: ["t9_qa", "t9_qb", "t9_qc", "t9_qd"], answer: "t9_qa" }
  },
  {
    infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "simple-icon", icon: "👥", color: "#00BCD4" },
    interactive: { type: "highlight-text", instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2", tokens: ["t10_tk1","t10_tk2","t10_tk3","t10_tk4","t10_tk5","t10_tk6"].filter(x=>x!==""), correctIndices: [0,2] },
    quiz: { question: "t10_q", choices: ["t10_qa", "t10_qb", "t10_qc", "t10_qd"], answer: "t10_qa" }
  },
  {
    infoTitle: "t11_title", infoText: "t11_text",
    svg: { type: "simple-icon", icon: "🔮", color: "#000000" },
    interactive: { type: "match-pairs", instruction: "t11_inst", hint1: "t11_h1", hint2: "t11_h2", pairs: [{left:"t11_l1",right:"t11_r1"},{left:"t11_l2",right:"t11_r2"},{left:"t11_l3",right:"t11_r3"}] },
    quiz: { question: "t11_q", choices: ["t11_qa", "t11_qb", "t11_qc", "t11_qd"], answer: "t11_qa" }
  },
  {
    infoTitle: "t12_title", infoText: "t12_text",
    svg: { type: "simple-icon", icon: "©️", color: "#607D8B" },
    interactive: { type: "gap-fill", instruction: "t12_inst", hint1: "t12_h1", hint2: "t12_h2", sentence: "t12_sent", choices: ["t12_qa2", "t12_qb2", "t12_qc2", "t12_qd2"], correctIndex: 0 },
    quiz: { question: "t12_q", choices: ["t12_qa", "t12_qb", "t12_qc", "t12_qd"], answer: "t12_qa" }
  },
  {
    infoTitle: "t13_title", infoText: "t13_text",
    svg: { type: "icon-grid", items: [{emoji:"📱",label:"Algorithmus"},{emoji:"🌀",label:"Effekt"}] },
    interactive: { type: "drag-to-bucket", instruction: "t13_inst", hint1: "t13_h1", hint2: "t13_h2", buckets: [{id:"b1",label:"t13_bl1"},{id:"b2",label:"t13_bl2"}], items: [{text:"t13_i1",bucketId:"b1"},{text:"t13_i2",bucketId:"b2"},{text:"t13_i3",bucketId:"b1"},{text:"t13_i4",bucketId:"b2"}] },
    quiz: { question: "t13_q", choices: ["t13_qa", "t13_qb", "t13_qc", "t13_qd"], answer: "t13_qa" }
  },
  {
    infoTitle: "t14_title", infoText: "t14_text",
    svg: { type: "simple-icon", icon: "👁️", color: "#F44336" },
    interactive: { type: "word-order", instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2", words: ["t14_w1", "t14_w2", "t14_w3", "t14_w4", "t14_w5", "t14_w6", "t14_w7"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t14_q", choices: ["t14_qa", "t14_qb", "t14_qc", "t14_qd"], answer: "t14_qa" }
  },
  {
    infoTitle: "t15_title", infoText: "t15_text",
    svg: { type: "simple-icon", icon: "🚀", color: "#FFC107" },
    interactive: { type: "highlight-text", instruction: "t15_inst", hint1: "t15_h1", hint2: "t15_h2", tokens: ["t15_tk1","t15_tk2","t15_tk3","t15_tk4","t15_tk5","t15_tk6","t15_tk7"].filter(x=>x!==""), correctIndices: [1] },
    quiz: { question: "t15_q", choices: ["t15_qa", "t15_qb", "t15_qc", "t15_qd"], answer: "t15_qa" }
  }
];

