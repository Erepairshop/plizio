// @ts-nocheck
import type { PoolTopicDef } from "./types";

export const INFO_K7_I9_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "KI Insel 9: Ethik & Zukunft",
    t1_title: "Voreingenommenheit (Bias)", t1_text: "Wenn Trainingsdaten einseitig sind, kann die KI unfaire Vorurteile entwickeln.", t1_inst: "Ordne die Begriffe zu:", t1_h1: "Ungerechtigkeit.", t1_h2: "Einseitige Daten.", t1_q: "Was verursacht Bias in der KI?", t1_qa: "Einseitige Trainingsdaten", t1_qb: "Zu viel Strom", t1_qc: "Ein neuer Monitor", t1_qd: "Schnelles Internet",
    t1_l1: "Bias", t1_r1: "Voreingenommenheit", t1_l2: "Fairness", t1_r2: "Gerechtigkeit", t1_l3: "Datensatz", t1_r3: "Grundlage",
    t2_title: "Datenschutz", t2_text: "KI-Systeme verarbeiten oft persönliche Daten, die besonders geschützt werden müssen.", t2_inst: "Fülle die Lücke aus:", t2_h1: "Privatsphäre.", t2_h2: "Sicherer Umgang.", t2_q: "Warum ist Datenschutz bei KI wichtig?", t2_qa: "Zum Schutz der Privatsphäre", t2_qb: "Damit die KI schneller lernt", t2_qc: "Für schönere Bilder", t2_qd: "Gar nicht wichtig",
    t2_sent: "Daten müssen vor Missbrauch ___ werden.", t2_qa2: "geschützt", t2_qb2: "gelöscht", t2_qc2: "verkauft", t2_qd2: "gezeigt",
    t3_title: "Deepfakes", t3_text: "Deepfakes sind täuschend echte, aber künstlich erzeugte Bilder oder Videos von echten Menschen.", t3_inst: "Sortiere die Begriffe:", t3_h1: "Echt oder Fake?", t3_h2: "Manipulation.", t3_q: "Was ist das Hauptproblem bei Deepfakes?", t3_qa: "Glaubwürdigkeit & Täuschung", t3_qb: "Schlechte Bildqualität", t3_qc: "Hoher Preis", t3_qd: "Lange Ladezeiten",
    t3_bl1: "Medientyp", t3_bl2: "Gefahr", t3_i1: "Video", t3_i2: "Falschinformation", t3_i3: "Audio", t3_i4: "Betrug",
    t4_title: "KI-Sicherheit", t4_text: "KI-Sicherheit stellt sicher, dass KIs immer im Sinne des Menschen handeln (Alignment).", t4_inst: "Bringe die Wörter in Ordnung:", t4_h1: "Kontrolle behalten.", t4_h2: "Sichere Entwicklung.", t4_q: "Was bedeutet 'Alignment' in der KI?", t4_qa: "Anpassung an menschliche Werte", t4_qb: "Einstellen des Bildschirms", t4_qc: "Sortieren von Dateien", t4_qd: "Verbindung zum WLAN",
    t4_w1: "KI-Sicherheit", t4_w2: "verhindert", t4_w3: "ungewollte", t4_w4: "Auswirkungen", t4_w5: "der", t4_w6: "Technik.", t4_w7: "",
    t5_title: "Automatisierung & Jobs", t5_text: "KI kann viele Aufgaben übernehmen, was die Arbeitswelt stark verändert.", t5_inst: "Markiere, was neue Berufe schafft:", t5_h1: "Wandel der Arbeit.", t5_h2: "Neue Fähigkeiten.", t5_q: "Was passiert durch KI-Automatisierung?", t5_qa: "Berufsbilder verändern sich", t5_qb: "Arbeit wird abgeschafft", t5_qc: "Nichts ändert sich", t5_qd: "Alle werden arbeitslos",
    t5_tk1: "Automatisierung", t5_tk2: "schafft", t5_tk3: "auch", t5_tk4: "neue", t5_tk5: "Arten", t5_tk6: "von", t5_tk7: "Berufen.",
    t6_title: "Mensch-KI-Zusammenarbeit", t6_text: "In Zukunft werden Menschen und KI oft als Team zusammenarbeiten.", t6_inst: "Zähle die Teammitglieder:", t6_h1: "Teamwork.", t6_h2: "Ergänzung.", t6_q: "Wie nennt man die Zusammenarbeit von Mensch und KI?", t6_qa: "Kollaboration", t6_qb: "Wettbewerb", t6_qc: "Streit", t6_qd: "Ignoranz",
    t6_c1: "Partner", t6_n1: "2",
    t7_title: "Digitale Souveränität", t7_text: "Länder wollen unabhängig sein bei der Entwicklung eigener KI-Technologien.", t7_inst: "Verbinde die Begriffe:", t7_h1: "Unabhängigkeit.", t7_h2: "Eigene Kontrolle.", t7_q: "Was bedeutet digitale Souveränität?", t7_qa: "Selbstbestimmung über Technik", t7_qb: "Ein schnelles Handy haben", t7_qc: "Viel spielen", t7_qd: "Überall WLAN",
    t7_l1: "Staat", t7_r1: "Regulierung", t7_l2: "Daten", t7_r2: "Kontrolle", t7_l3: "KI", t7_r3: "Entwicklung",
    t8_title: "Umweltbelastung", t8_text: "Das Training großer KIs verbraucht sehr viel Energie und Wasser zur Kühlung.", t8_inst: "Fülle die Lücke aus:", t8_h1: "Ökologischer Fußabdruck.", t8_h2: "Energieverbrauch.", t8_q: "Was benötigt das Training einer KI?", t8_qa: "Viel Strom & Kühlung", t8_qb: "Nur gute Laune", t8_qc: "Einen Stuhl", t8_qd: "Papier",
    t8_sent: "KI-Training hat einen hohen ___.", t8_qa2: "Energiebedarf", t8_qb2: "Lärmpegel", t8_qc2: "Platzmangel", t8_qd2: "Zeitverlust",
    t9_title: "KI-Regulierung", t9_text: "Gesetze (wie der EU AI Act) sollen den sicheren Einsatz von KI regeln.", t9_inst: "Sortiere die Begriffe:", t9_h1: "Regeln für die KI.", t9_h2: "Sicherheit durch Gesetze.", t9_q: "Was ist der EU AI Act?", t9_qa: "Ein Gesetz zur KI-Regulierung", t9_qb: "Ein neues Computerspiel", t9_qc: "Ein Hardware-Standard", t9_qd: "Ein Social Media Netzwerk",
    t9_bl1: "Regelwerk", t9_bl2: "Ziel", t9_i1: "EU AI Act", t9_i2: "Sicherheit", t9_i3: "Gesetze", t9_i4: "Ethik",
    t10_title: "Erklärbare KI (XAI)", t10_text: "Wir müssen verstehen können, warum eine KI eine bestimmte Entscheidung getroffen hat.", t10_inst: "Bringe die Wörter in Ordnung:", t10_h1: "Transparenz.", t10_h2: "Warum hat sie das getan?", t10_q: "Warum ist XAI wichtig?", t10_qa: "Um Vertrauen zu schaffen", t10_qb: "Damit die KI bunter aussieht", t10_qc: "Zum Stromsparen", t10_qd: "Für schnellere Spiele",
    t10_w1: "Transparenz", t10_w2: "macht", t10_w3: "KI-Entscheidungen", t10_w4: "für", t10_w5: "Menschen", t10_w6: "nachvollziehbar.", t10_w7: "",
    t11_title: "Emotionale KI", t11_text: "Einige KIs versuchen, menschliche Gefühle zu erkennen und darauf zu reagieren.", t11_inst: "Markiere, was die emotionale KI erkennt:", t11_h1: "Gefühle erkennen.", t11_h2: "Empathie-Simulation.", t11_q: "Was analysiert emotionale KI?", t11_qa: "Mimik & Stimme", t11_qb: "Die Schuhgröße", t11_qc: "Den Kontostand", t11_qd: "Das Alter",
    t11_tk1: "Emotionale", t11_tk2: "KI", t11_tk3: "kann", t11_tk4: "Stimmungen", t11_tk5: "in", t11_tk6: "der", t11_tk7: "Stimme", t11_tk8: "erkennen.",
    t12_title: "AGI vs. Narrow AI", t12_text: "Heutige KIs sind spezialisiert (Narrow), während AGI menschenähnliche Intelligenz hätte.", t12_inst: "Ordne die Begriffe zu:", t12_h1: "Spezialist vs. Alleskönner.", t12_h2: "Ebenen der Intelligenz.", t12_q: "Was kann eine 'Narrow AI'?", t12_qa: "Nur eine spezielle Aufgabe", t12_qb: "Alles, was ein Mensch kann", t12_qc: "Kaffee kochen", t12_qd: "Die Welt beherrschen",
    t12_l1: "Narrow AI", t12_r1: "Spezialisiert", t12_l2: "AGI", t12_r2: "Allgemein", t12_l3: "Heutige KI", t12_r3: "Narrow",
    t13_title: "Algorithmische Haftung", t13_text: "Wer ist verantwortlich, wenn eine KI einen Fehler macht?", t13_inst: "Fülle die Lücke aus:", t13_h1: "Verantwortung.", t13_h2: "Rechtliche Fragen.", t13_q: "Wer steht oft in der Verantwortung für KI-Fehler?", t13_qa: "Entwickler & Betreiber", t13_qb: "Die KI selbst", t13_qc: "Der Stromanbieter", t13_qd: "Niemand",
    t13_sent: "Haftung regelt die rechtliche ___.", t13_qa2: "Verantwortung", t13_qb2: "Leistung", t13_qc2: "Farbe", t13_qd2: "Größe",
    t14_title: "Zukunft der Arbeit", t14_text: "Lebenslanges Lernen wird wichtiger, da sich Berufe durch KI ständig ändern.", t14_inst: "Bringe die Wörter in Ordnung:", t14_h1: "Ständiger Wandel.", t14_h2: "Anpassung.", t14_q: "Was ist wichtig für die Zukunft der Arbeit?", t14_qa: "Lebenslanges Lernen", t14_qb: "Immer gleich bleiben", t14_qc: "Keine Technik nutzen", t14_qd: "Warten",
    t14_w1: "Bildung", t14_w2: "ist", t14_w3: "der", t14_w4: "Schlüssel", t14_w5: "zur", t14_w6: "KI-Zukunft.", t14_w7: "",
    t15_title: "Weltraumkolonisation", t15_text: "KI könnte helfen, fremde Planeten bewohnbar zu machen (Terraforming).", t15_inst: "Sortiere die Begriffe:", t15_h1: "Zukunftsvision.", t15_h2: "KI im All.", t15_q: "Wie könnte KI bei der Mars-Kolonisation helfen?", t15_qa: "Durch Bauen & Steuern", t15_qb: "Durch Singen", t15_qc: "Durch Kochen", t15_qd: "Gar nicht",
    t15_bl1: "Planet", t15_bl2: "Aufgabe", t15_i1: "Mars", t15_i2: "Bau", t15_i3: "Mond", t15_i4: "Überwachung"
  },
  en: {
    explorer_title: "AI Island 9: Ethics & Future",
    t1_title: "Bias", t1_text: "If training data is biased, the AI can develop unfair prejudices.", t1_inst: "Match the terms:", t1_h1: "Injustice.", t1_h2: "One-sided data.", t1_q: "What causes bias in AI?", t1_qa: "One-sided training data", t1_qb: "Too much power", t1_qc: "A new monitor", t1_qd: "Fast internet",
    t1_l1: "Bias", t1_r1: "Prejudice", t1_l2: "Fairness", t1_r2: "Injustice", t1_l3: "Dataset", t1_r3: "Basis",
    t2_title: "Data Privacy", t2_text: "AI systems often process personal data that must be specially protected.", t2_inst: "Fill in the blank:", t2_h1: "Privacy.", t2_h2: "Secure handling.", t2_q: "Why is data privacy important in AI?", t2_qa: "To protect privacy", t2_qb: "So AI learns faster", t2_qc: "For nicer images", t2_qd: "Not important at all",
    t2_sent: "Data must be ___ from misuse.", t2_qa2: "protected", t2_qb2: "deleted", t2_qc2: "sold", t2_qd2: "shown",
    t3_title: "Deepfakes", t3_text: "Deepfakes are deceptively real but artificially generated images or videos of real people.", t3_inst: "Sort the terms:", t3_h1: "Real or fake?", t3_h2: "Manipulation.", t3_q: "What is the main problem with deepfakes?", t3_qa: "Credibility & deception", t3_qb: "Poor image quality", t3_qc: "High price", t3_qd: "Long loading times",
    t3_bl1: "Media type", t3_bl2: "Danger", t3_i1: "Video", t3_i2: "Misinformation", t3_i3: "Audio", t3_i4: "Fraud",
    t4_title: "AI Safety", t4_text: "AI safety ensures that AIs always act in the interest of humans (alignment).", t4_inst: "Put the words in order:", t4_h1: "Keeping control.", t4_h2: "Secure development.", t4_q: "What does 'alignment' mean in AI?", t4_qa: "Adjustment to human values", t4_qb: "Setting the screen", t4_qc: "Sorting files", t4_qd: "Connecting to Wi-Fi",
    t4_w1: "AI", t4_w2: "safety", t4_w3: "prevents", t4_w4: "unwanted", t4_w5: "effects", t4_w6: "of", t4_w7: "technology.",
    t5_title: "Automation & Jobs", t5_text: "AI can take over many tasks, which significantly changes the world of work.", t5_inst: "Highlight what creates new jobs:", t5_h1: "Work transformation.", t5_h2: "New skills.", t5_q: "What happens through AI automation?", t5_qa: "Job profiles change", t5_qb: "Work is abolished", t5_qc: "Nothing changes", t5_qd: "Everyone becomes unemployed",
    t5_tk1: "Automation", t5_tk2: "also", t5_tk3: "creates", t5_tk4: "new", t5_tk5: "types", t5_tk6: "of", t5_tk7: "jobs.",
    t6_title: "Human-AI Collaboration", t6_text: "In the future, humans and AI will often work together as a team.", t6_inst: "Count the team members:", t6_h1: "Teamwork.", t6_h2: "Complementarity.", t6_q: "What is the collaboration between humans and AI called?", t6_qa: "Collaboration", t6_qb: "Competition", t6_qc: "Conflict", t6_qd: "Ignorance",
    t6_c1: "Partner", t6_n1: "2",
    t7_title: "Digital Sovereignty", t7_text: "Countries want to be independent in developing their own AI technologies.", t7_inst: "Connect the terms:", t7_h1: "Independence.", t7_h2: "Own control.", t7_q: "What does digital sovereignty mean?", t7_qa: "Self-determination over technology", t7_qb: "Having a fast phone", t7_qc: "Playing a lot", t7_qd: "Wi-Fi everywhere",
    t7_l1: "State", t7_r1: "Regulation", t7_l2: "Data", t7_r2: "Control", t7_l3: "AI", t7_r3: "Development",
    t8_title: "Environmental Impact", t8_text: "Training large AIs consumes a lot of energy and water for cooling.", t8_inst: "Fill in the blank:", t8_h1: "Ecological footprint.", t8_h2: "Power consumption.", t8_q: "What does training an AI require?", t8_qa: "Lots of power & cooling", t8_qb: "Just a good mood", t8_qc: "A chair", t8_qd: "Paper",
    t8_sent: "AI training has a high ___.", t8_qa2: "energy demand", t8_qb2: "noise level", t8_qc2: "space shortage", t8_qd2: "time loss",
    t9_title: "AI Regulation", t9_text: "Laws (like the EU AI Act) are intended to regulate the safe use of AI.", t9_inst: "Sort the terms:", t9_h1: "Rules for AI.", t9_h2: "Safety through laws.", t9_q: "What is the EU AI Act?", t9_qa: "A law for AI regulation", t9_qb: "A new computer game", t9_qc: "A hardware standard", t9_qd: "A social media network",
    t9_bl1: "Rules", t9_bl2: "Goal", t9_i1: "EU AI Act", t9_i2: "Safety", t9_i3: "Laws", t9_i4: "Ethics",
    t10_title: "Explainable AI (XAI)", t10_text: "We need to be able to understand why an AI made a certain decision.", t10_inst: "Put the words in order:", t10_h1: "Transparency.", t10_h2: "Why did it do that?", t10_q: "Why is XAI important?", t10_qa: "To build trust", t10_qb: "To make AI look colorful", t10_qc: "To save power", t10_qd: "For faster games",
    t10_w1: "Transparency", t10_w2: "makes", t10_w3: "AI", t10_w4: "decisions", t10_w5: "understandable", t10_w6: "for", t10_w7: "humans.",
    t11_title: "Emotional AI", t11_text: "Some AIs try to recognize and react to human emotions.", t11_inst: "Highlight what emotional AI detects:", t11_h1: "Recognizing feelings.", t11_h2: "Empathy simulation.", t11_q: "What does emotional AI analyze?", t11_qa: "Facial expressions & voice", t11_qb: "Shoe size", t11_qc: "Bank balance", t11_qd: "Age",
    t11_tk1: "Emotional", t11_tk2: "AI", t11_tk3: "detects", t11_tk4: "moods", t11_tk5: "in", t11_tk6: "our", t11_tk7: "voice.", t11_tk8: "",
    t12_title: "AGI vs. Narrow AI", t12_text: "Current AIs are specialized (Narrow), while AGI would have human-like intelligence.", t12_inst: "Match the terms:", t12_h1: "Specialist vs. all-rounder.", t12_h2: "Levels of intelligence.", t12_q: "What can a 'Narrow AI' do?", t12_qa: "Only a specific task", t12_qb: "Everything a human can do", t12_qc: "Make coffee", t12_qd: "Rule the world",
    t12_l1: "Narrow AI", t12_r1: "Specialized", t12_l2: "AGI", t12_r2: "General", t12_l3: "Current AI", t12_r3: "Narrow",
    t13_title: "Algorithmic Liability", t13_text: "Who is responsible if an AI makes a mistake?", t13_inst: "Fill in the blank:", t13_h1: "Responsibility.", t13_h2: "Legal questions.", t13_q: "Who is often held responsible for AI errors?", t13_qa: "Developers & operators", t13_qb: "The AI itself", t13_qc: "Power provider", t13_qd: "Nobody",
    t13_sent: "Liability regulates legal ___.", t13_qa2: "responsibility", t13_qb2: "performance", t13_qc2: "color", t13_qd2: "size",
    t14_title: "Future of Work", t14_text: "Lifelong learning is becoming more important as jobs constantly change through AI.", t14_inst: "Put the words in order:", t14_h1: "Constant change.", t14_h2: "Adaptation.", t14_q: "What is important for the future of work?", t14_qa: "Lifelong learning", t14_qb: "Staying the same", t14_qc: "No technology", t14_qd: "Waiting",
    t14_w1: "Education", t14_w2: "is", t14_w3: "the", t14_w4: "key", t14_w5: "to", t14_w6: "the", t14_w7: "AI future.",
    t15_title: "Space Colonization", t15_text: "AI could help make other planets habitable (terraforming).", t15_inst: "Sort the terms:", t15_h1: "Future vision.", t15_h2: "AI in space.", t15_q: "How could AI help with Mars colonization?", t15_qa: "By building & controlling", t15_qb: "By singing", t15_qc: "By cooking", t15_qd: "Not at all",
    t15_bl1: "Planet", t15_bl2: "Task", t15_i1: "Mars", t15_i2: "Building", t15_i3: "Moon", t15_i4: "Monitoring"
  },
  hu: {
    explorer_title: "MI Sziget 9: Etika és jövő",
    t1_title: "Elfogyultság (Bias)", t1_text: "Ha a tanítóadatok egyoldalúak, a MI igazságtalan előítéleteket fejleszthet ki.", t1_inst: "Párosítsd a fogalmakat:", t1_h1: "Igazságtalanság.", t1_h2: "Egyoldalú adatok.", t1_q: "Mi okozza a Bias-t a MI-nél?", t1_qa: "Egyoldalú tanítóadatok", t1_qb: "Túl sok áram", t1_qc: "Új monitor", t1_qd: "Gyors internet",
    t1_l1: "Bias", t1_r1: "Előítélet", t1_l2: "Fairness", t1_r2: "Pártatlanság", t1_l3: "Adatkészlet", t1_r3: "Alap",
    t2_title: "Adatvédelem", t2_text: "A MI-rendszerek gyakran személyes adatokat dolgoznak fel, amiket különösen védeni kell.", t2_inst: "Töltsd ki a hiányt:", t2_h1: "Magánélet.", t2_h2: "Biztonságos kezelés.", t2_q: "Miért fontos az adatvédelem a MI-nél?", t2_qa: "A magánélet védelme miatt", t2_qb: "Hogy gyorsabb legyen a gép", t2_qc: "Szebb képekért", t2_qd: "Egyáltalán nem fontos",
    t2_sent: "Az adatokat ___ kell a visszaélésektől.", t2_qa2: "védeni", t2_qb2: "törölni", t2_qc2: "eladni", t2_qd2: "mutatni",
    t3_title: "Deepfakes", t3_text: "A Deepfakes megtévesztően valódi, de mesterségesen generált képek vagy videók emberekről.", t3_inst: "Válogasd szét:", t3_h1: "Valódi vagy hamis?", t3_h2: "Manipuláció.", t3_q: "Mi a fő probléma a Deepfakes-szel?", t3_qa: "Hitelesség és megtévesztés", t3_qb: "Rossz képminőség", t3_qc: "Magas ár", t3_qd: "Hosszú töltés",
    t3_bl1: "Média típus", t3_bl2: "Veszély", t3_i1: "Videó", t3_i2: "Félretájékoztatás", t3_i3: "Audió", t3_i4: "Csalás",
    t4_title: "MI-biztonság", t4_text: "A MI-biztonság biztosítja, hogy a MI mindig az ember érdekében cselekedjen (Alignment).", t4_inst: "Tedd sorrendbe a szavakat:", t4_h1: "Kontroll megőrzése.", t4_h2: "Biztonságos fejlesztés.", t4_q: "Mit jelent az 'alignment' a MI-nél?", t4_qa: "Az emberi értékekhez igazítás", t4_qb: "A képernyő beállítása", t4_qc: "Fájlok sorrendje", t4_qd: "Wifi csatlakozás",
    t4_w1: "A MI-biztonság", t4_w2: "megelőzi", t4_w3: "a technika", t4_w4: "nem kívánt", t4_w5: "hatásait.", t4_w6: "", t4_w7: "",
    t5_title: "Automatizálás és munka", t5_text: "A MI sok feladatot átvehet, ami jelentősen megváltoztatja a munka világát.", t5_inst: "Jelöld meg, mi hoz létre új munkákat:", t5_h1: "A munka átalakulása.", t5_h2: "Új készségek.", t5_q: "Mi történik a MI-automatizálás által?", t5_qa: "Megváltoznak a munkakörök", t5_qb: "Megszűnik a munka", t5_qc: "Semmi nem változik", t5_qd: "Mindenki munkanélküli lesz",
    t5_tk1: "Automatizálás", t5_tk2: "új", t5_tk3: "típusú", t5_tk4: "munkákat", t5_tk5: "is", t5_tk6: "létrehoz.", t5_tk7: "",
    t6_title: "Ember-MI együttműködés", t6_text: "A jövőben az emberek és a MI gyakran csapatként fognak együtt dolgozni.", t6_inst: "Számold meg a csapattagokat:", t6_h1: "Csapatmunka.", t6_h2: "Kiegészítés.", t6_q: "Hogy hívják az ember és a MI közös munkáját?", t6_qa: "Kollaboráció", t6_qb: "Verseny", t6_qc: "Vita", t6_qd: "Ignorancia",
    t6_c1: "Partner", t6_n1: "2",
    t7_title: "Digitális szuverenitás", t7_text: "Az országok függetlenek akarnak lenni saját MI-technológiáik fejlesztésében.", t7_inst: "Kapcsold össze:", t7_h1: "Függetlenség.", t7_h2: "Saját kontroll.", t7_q: "Mit jelent a digitális szuverenitás?", t7_qa: "Önrendelkezés a technika felett", t7_qb: "Gyors telefon", t7_qc: "Sok játék", t7_qd: "Wifi mindenhol",
    t7_l1: "Állam", t7_r1: "Szabályozás", t7_l2: "Adat", t7_r2: "Ellenőrzés", t7_l3: "MI", t7_r3: "Fejlesztés",
    t8_title: "Környezeti hatás", t8_text: "A nagy MI-k tanítása rengeteg energiát és hűtővizet fogyaszt.", t8_inst: "Töltsd ki a hiányt:", t8_h1: "Ökológiai lábnyom.", t8_h2: "Energiafogyasztás.", t8_q: "Mire van szüksége a MI tanításának?", t8_qa: "Sok áramra és hűtésre", t8_qb: "Csak jókedvre", t8_qc: "Egy székre", t8_qd: "Papírra",
    t8_sent: "A MI tanításának nagy az ___.", t8_qa2: "energiaigénye", t8_qb2: "zaja", t8_qc2: "helyigénye", t8_qd2: "időigénye",
    t9_title: "MI szabályozás", t9_text: "A törvények (mint az EU AI Act) a MI biztonságos használatát hivatottak szabályozni.", t9_inst: "Válogasd szét:", t9_h1: "Szabályok a MI-nek.", t9_h2: "Biztonság törvényekkel.", t9_q: "Mi az az EU AI Act?", t9_qa: "Egy törvény a MI szabályozására", t9_qb: "Egy új játék", t9_qc: "Hardver szabvány", t9_qd: "Közösségi média",
    t9_bl1: "Szabályok", t9_bl2: "Cél", t9_i1: "EU AI Act", t9_i2: "Biztonság", t9_i3: "Törvények", t9_i4: "Etika",
    t10_title: "Magyarázható MI (XAI)", t10_text: "Értenünk kell, hogy a MI miért hozott meg egy adott döntést.", t10_inst: "Tedd sorrendbe a szavakat:", t10_h1: "Átláthatóság.", t10_h2: "Miért tette ezt?", t10_q: "Miért fontos az XAI?", t10_qa: "A bizalom építése miatt", t10_qb: "Hogy színesebb legyen", t10_qc: "Spórolás miatt", t10_qd: "Gyorsabb játékért",
    t10_w1: "Az átláthatóság", t10_w2: "érthetővé", t10_w3: "teszi", t10_w4: "a döntéseket", t10_w5: "az emberek", t10_w6: "számára.", t10_w7: "",
    t11_title: "Érzelmi MI", t11_text: "Egyes MI-k próbálják felismerni az emberi érzelmeket és reagálni rájuk.", t11_inst: "Jelöld meg, mit ismer fel az érzelmi MI:", t11_h1: "Érzések felismerése.", t11_h2: "Empátia szimuláció.", t11_q: "Mit elemez az érzelmi MI?", t11_qa: "Arcjátékot és hangot", t11_qb: "Cipőméretet", t11_qc: "Bankszámlát", t11_qd: "Életkort",
    t11_tk1: "Az", t11_tk2: "érzelmi", t11_tk3: "MI", t11_tk4: "hangulatokat", t11_tk5: "ismer", t11_tk6: "fel", t11_tk7: "a hangunkból.", t11_tk8: "",
    t12_title: "AGI vs. Narrow AI", t12_text: "A mai MI-k specializáltak (Narrow), míg az AGI emberi szintű intelligencia lenne.", t12_inst: "Párosítsd a fogalmakat:", t12_h1: "Specialista vs. mindentudó.", t12_h2: "Intelligencia szintek.", t12_q: "Mire képes egy 'Narrow AI'?", t12_qa: "Csak egy speciális feladatra", t12_qb: "Mindenre, amire az ember", t12_qc: "Kávéfőzésre", t12_qd: "Világuralomra",
    t12_l1: "Narrow AI", t12_r1: "Speciális", t12_l2: "AGI", t12_r2: "Általános", t12_l3: "Mai MI", t12_r3: "Narrow",
    t13_title: "Algoritmikus felelősség", t13_text: "Ki a felelős, ha a MI hibát követ el?", t13_inst: "Töltsd ki a hiányt:", t13_h1: "Felelősségvállalás.", t13_h2: "Jogi kérdések.", t13_q: "Ki a felelős gyakran a MI hibáiért?", t13_qa: "Fejlesztők és üzemeltetők", t13_qb: "Maga a MI", t13_qc: "Az áramszolgáltató", t13_qd: "Senki",
    t13_sent: "A felelősség a jogi ___ szabályozza.", t13_qa2: "elszámoltathatóságot", t13_qb2: "teljesítményt", t13_qc2: "színt", t13_qd2: "méretet",
    t14_title: "A munka jövője", t14_text: "Az élethosszig tartó tanulás fontosabbá válik, mert a munkák folyamatosan változnak.", t14_inst: "Tedd sorrendbe a szavakat:", t14_h1: "Állandó változás.", t14_h2: "Alkalmazkodás.", t14_q: "Mi fontos a munka jövőjéhez?", t14_qa: "Élethosszig tartó tanulás", t14_qb: "Mindig ugyanolyannak maradni", t14_qc: "Technika elutasítása", t14_qd: "Várakozás",
    t14_w1: "A tanulás", t14_w2: "a kulcs", t14_w3: "a", t14_w4: "MI-vel", t14_w5: "teli", t14_w6: "jövőhöz.", t14_w7: "",
    t15_title: "Űrkolonizáció", t15_text: "A MI segíthet más bolygók lakhatóvá tételében (terraformálás).", t15_inst: "Válogasd szét:", t15_h1: "Jövőkép.", t15_h2: "MI az űrben.", t15_q: "Hogyan segíthetne a MI a Mars-kolonizációban?", t15_qa: "Építéssel és vezérléssel", t15_qb: "Énekléssel", t15_qc: "Főzéssel", t15_qd: "Sehogy",
    t15_bl1: "Bolygó", t15_bl2: "Feladat", t15_i1: "Mars", t15_i2: "Építés", t15_i3: "Hold", t15_i4: "Felügyelet"
  },
  ro: {
    explorer_title: "IA Insula 9: Etică și Viitor",
    t1_title: "Bias (Prejudecată)", t1_text: "Dacă datele de antrenament sunt părtinitoare, IA poate dezvolta prejudecăți neloiale.", t1_inst: "Potrivește termenii:", t1_h1: "Nedreptate.", t1_h2: "Date unilaterale.", t1_q: "Ce cauzează bias-ul în IA?", t1_qa: "Date de antrenament unilaterale", t1_qb: "Prea mult curent", t1_qc: "Un monitor nou", t1_qd: "Internet rapid",
    t1_l1: "Bias", t1_r1: "Prejudecată", t1_l2: "Fairness", t1_r2: "Echitate", t1_l3: "Set de date", t1_r3: "Bază",
    t2_title: "Confidențialitatea datelor", t2_text: "Sistemele IA procesează adesea date personale care trebuie protejate în mod special.", t2_inst: "Completează spațiul liber:", t2_h1: "Privat.", t2_h2: "Manipulare sigură.", t2_q: "De ce este importantă confidențialitatea datelor în IA?", t2_qa: "Pentru a proteja viața privată", t2_qb: "Ca IA să învețe mai repede", t2_qc: "Pentru imagini mai frumoase", t2_qd: "Deloc important",
    t2_sent: "Datele trebuie ___ de utilizarea abuzivă.", t2_qa2: "protejate", t2_qb2: "șterse", t2_qc2: "vândute", t2_qd2: "arătate",
    t3_title: "Deepfakes", t3_text: "Deepfakes sunt imagini sau videoclipuri cu oameni reali, generate artificial, care par incredibil de reale.", t3_inst: "Sortează termenii:", t3_h1: "Real sau fals?", t3_h2: "Manipulare.", t3_q: "Care este principala problemă a deepfakes-urilor?", t3_qa: "Credibilitatea și înșelăciunea", t3_qb: "Calitatea slabă", t3_qc: "Prețul ridicat", t3_qd: "Încărcarea lentă",
    t3_bl1: "Tip media", t3_bl2: "Pericol", t3_i1: "Video", t3_i2: "Dezinformare", t3_i3: "Audio", t3_i4: "Fraudă",
    t4_title: "Siguranța IA", t4_text: "Siguranța IA asigură că IA acționează întotdeauna în interesul oamenilor (alignment).", t4_inst: "Pune cuvintele în ordine:", t4_h1: "Menținerea controlului.", t4_h2: "Dezvoltare sigură.", t4_q: "Ce înseamnă 'alignment' în IA?", t4_qa: "Alinierea la valorile umane", t4_qb: "Setarea ecranului", t4_qc: "Sortarea fișierelor", t4_qd: "Conectarea la Wifi",
    t4_w1: "Siguranța", t4_w2: "IA", t4_w3: "previne", t4_w4: "efectele", t4_w5: "nedorite", t4_w6: "ale", t4_w7: "tehnologiei.",
    t5_title: "Automatizare și locuri de muncă", t5_text: "IA poate prelua multe sarcini, ceea ce schimbă semnificativ lumea muncii.", t5_inst: "Evidențiază ce creează noi joburi:", t5_h1: "Transformarea muncii.", t5_h2: "Abilități noi.", t5_q: "Ce se întâmplă prin automatizarea IA?", t5_qa: "Profilurile joburilor se schimbă", t5_qb: "Munca este eliminată", t5_qc: "Nimic nu se schimbă", t5_qd: "Toți devin șomeri",
    t5_tk1: "Automatizarea", t5_tk2: "creează", t5_tk3: "și", t5_tk4: "noi", t5_tk5: "tipuri", t5_tk6: "de", t5_tk7: "joburi.",
    t6_title: "Colaborare Om-IA", t6_text: "În viitor, oamenii și IA vor lucra adesea împreună ca o echipă.", t6_inst: "Numără membrii echipei:", t6_h1: "Muncă în echipă.", t6_h2: "Complementaritate.", t6_q: "Cum se numește colaborarea dintre om și IA?", t6_qa: "Colaborare", t6_qb: "Competiție", t6_qc: "Conflict", t6_qd: "Ignoranță",
    t6_c1: "Partener", t6_n1: "2",
    t7_title: "Suveranitatea digitală", t7_text: "Țările doresc să fie independente în dezvoltarea propriilor tehnologii IA.", t7_inst: "Conectează termenii:", t7_h1: "Independență.", t7_h2: "Control propriu.", t7_q: "Ce înseamnă suveranitatea digitală?", t7_qa: "Autodeterminare asupra tehnologiei", t7_qb: "Un telefon rapid", t7_qc: "Jocuri multe", t7_qd: "Wifi peste tot",
    t7_l1: "Stat", t7_r1: "Reglementare", t7_l2: "Date", t7_r2: "Control", t7_l3: "IA", t7_r3: "Dezvoltare",
    t8_title: "Impactul asupra mediului", t8_text: "Antrenarea IA-urilor mari consumă multă energie și apă pentru răcire.", t8_inst: "Completează spațiul liber:", t8_h1: "Amprenta ecologică.", t8_h2: "Consum de energie.", t8_q: "Ce necesită antrenarea unei IA?", t8_qa: "Mult curent și răcire", t8_qb: "Doar voie bună", t8_qc: "Un scaun", t8_qd: "Hârtie",
    t8_sent: "Antrenarea IA are un ___ ridicat.", t8_qa2: "consum de energie", t8_qb2: "nivel de zgomot", t8_qc2: "deficit de spațiu", t8_qd2: "pierdere de timp",
    t9_title: "Reglementarea IA", t9_text: "Legile (cum ar fi EU AI Act) sunt menite să reglementeze utilizarea sigură a IA.", t9_inst: "Sortează termenii:", t9_h1: "Reguli pentru IA.", t9_h2: "Siguranță prin legi.", t9_q: "Ce este EU AI Act?", t9_qa: "O lege pentru reglementarea IA", t9_qb: "Un joc nou", t9_qc: "Standard hardware", t9_qd: "Rețea socială",
    t9_bl1: "Reguli", t9_bl2: "Scop", t9_i1: "EU AI Act", t9_i2: "Siguranță", t9_i3: "Legi", t9_i4: "Etică",
    t10_title: "IA explicabilă (XAI)", t10_text: "Trebuie să putem înțelege de ce o IA a luat o anumită decizie.", t10_inst: "Pune cuvintele în ordine:", t10_h1: "Transparență.", t10_h2: "De ce a făcut asta?", t10_q: "De ce este XAI importantă?", t10_qa: "Pentru a construi încredere", t10_qb: "Ca IA să fie colorată", t10_qc: "Pentru economie", t10_qd: "Pentru jocuri rapide",
    t10_w1: "Transparența", t10_w2: "face", t10_w3: "deciziile", t10_w4: "IA", t10_w5: "inteligibile", t10_w6: "pentru", t10_w7: "oameni.",
    t11_title: "IA emoțională", t11_text: "Unele IA-uri încearcă să recunoască și să reacționeze la emoțiile umane.", t11_inst: "Evidențiază ce detectează IA emoțională:", t11_h1: "Recunoașterea sentimentelor.", t11_h2: "Simularea empatiei.", t11_q: "Ce analizează IA emoțională?", t11_qa: "Mimica și vocea", t11_qb: "Mărimea la pantofi", t11_qc: "Contul bancar", t11_qd: "Vârsta",
    t11_tk1: "IA", t11_tk2: "emoțională", t11_tk3: "detectează", t11_tk4: "stările", t11_tk5: "din", t11_tk6: "voce.", t11_tk7: "", t11_tk8: "",
    t12_title: "AGI vs. Narrow AI", t12_text: "IA-urile de azi sunt specializate (Narrow), în timp ce AGI ar avea inteligență umană.", t12_inst: "Potrivește termenii:", t12_h1: "Specialist vs. polivalent.", t12_h2: "Niveluri de inteligență.", t12_q: "Ce poate face o 'Narrow AI'?", t12_qa: "Doar o sarcină specifică", t12_qb: "Tot ce poate un om", t12_qc: "Face cafea", t12_qd: "Conduce lumea",
    t12_l1: "Narrow IA", t12_r1: "Specializată", t12_l2: "AGI", t12_r2: "Generală", t12_l3: "IA de azi", t12_r3: "Narrow",
    t13_title: "Răspunderea algoritmică", t13_text: "Cine este responsabil dacă o IA face o greșeală?", t13_inst: "Completează spațiul liber:", t13_h1: "Responsabilitate.", t13_h2: "Întrebări juridice.", t13_q: "Cine este adesea responsabil pentru erorile IA?", t13_qa: "Dezvoltatorii și operatorii", t13_qb: "IA însăși", t13_qc: "Furnizorul de curent", t13_qd: "Nimeni",
    t13_sent: "Răspunderea reglementează ___ juridică.", t13_qa2: "responsabilitatea", t13_qb2: "performanța", t13_qc2: "culoarea", t13_qd2: "mărimea",
    t14_title: "Viitorul muncii", t14_text: "Învățarea pe tot parcursul vieții devine mai importantă pe măsură ce joburile se schimbă prin IA.", t14_inst: "Pune cuvintele în ordine:", t14_h1: "Schimbare constantă.", t14_h2: "Adaptare.", t14_q: "Ce este important pentru viitorul muncii?", t14_qa: "Învățarea continuă", t14_qb: "Să rămâi la fel", t14_qc: "Fără tehnologie", t14_qd: "Așteptarea",
    t14_w1: "Educația", t14_w2: "este", t14_w3: "cheia", t14_w4: "către", t14_w5: "viitorul", t14_w6: "cu", t14_w7: "IA.",
    t15_title: "Colonizarea spațială", t15_text: "IA ar putea ajuta la transformarea altor planete în locuri locuibile (terraformare).", t15_inst: "Sortează termenii:", t15_h1: "Viziune de viitor.", t15_h2: "IA în spațiu.", t15_q: "Cum ar putea IA ajuta la colonizarea planetei Marte?", t15_qa: "Prin construire și control", t15_qb: "Cântând", t15_qc: "Gătind", t15_qd: "Deloc",
    t15_bl1: "Planetă", t15_bl2: "Sarcină", t15_i1: "Marte", t15_i2: "Construcție", t15_i3: "Lună", t15_i4: "Monitorizare"
  }
};

export const INFO_K7_I9_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "simple-icon", icon: "⚖️", color: "#795548" },
    interactive: { type: "match-pairs", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", pairs: [{left:"t1_l1",right:"t1_r1"},{left:"t1_l2",right:"t1_r2"},{left:"t1_l3",right:"t1_r3"}] },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" }
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "🔒", color: "#607D8B" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" }
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "icon-grid", items: [{emoji:"🎭",label:"Deepfake"},{emoji:"⚠️",label:"Danger"}] },
    interactive: { type: "drag-to-bucket", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", buckets: [{id:"b1",label:"t3_bl1"},{id:"b2",label:"t3_bl2"}], items: [{text:"t3_i1",bucketId:"b1"},{text:"t3_i2",bucketId:"b2"},{text:"t3_i3",bucketId:"b1"},{text:"t3_i4",bucketId:"b2"}] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "🛡️", color: "#2196F3" },
    interactive: { type: "word-order", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", words: ["t4_w1", "t4_w2", "t4_w3", "t4_w4", "t4_w5", "t4_w6", "t4_w7"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6].slice(0, 7) },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "💼", color: "#FF9800" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4","t5_tk5","t5_tk6","t5_tk7"].filter(x=>x!==undefined), correctIndices: [0] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" }
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "simple-icon", icon: "🤝", color: "#4CAF50" },
    interactive: { type: "tap-count", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", tapCount: { emoji: "👥", count: 2 } },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" }
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "🏰", color: "#9C27B0" },
    interactive: { type: "match-pairs", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", pairs: [{left:"t7_l1",right:"t7_r1"},{left:"t7_l2",right:"t7_r2"},{left:"t7_l3",right:"t7_r3"}] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" }
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "simple-icon", icon: "🌱", color: "#8BC34A" },
    interactive: { type: "gap-fill", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", sentence: "t8_sent", choices: ["t8_qa2", "t8_qb2", "t8_qc2", "t8_qd2"], correctIndex: 0 },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" }
  },
  {
    infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "icon-grid", items: [{emoji:"📜",label:"Laws"},{emoji:"🛡️",label:"Safety"}] },
    interactive: { type: "drag-to-bucket", instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2", buckets: [{id:"b1",label:"t9_bl1"},{id:"b2",label:"t9_bl2"}], items: [{text:"t9_i1",bucketId:"b1"},{text:"t9_i2",bucketId:"b2"},{text:"t9_i3",bucketId:"b1"},{text:"t9_i4",bucketId:"b2"}] },
    quiz: { question: "t9_q", choices: ["t9_qa", "t9_qb", "t9_qc", "t9_qd"], answer: "t9_qa" }
  },
  {
    infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "simple-icon", icon: "🔎", color: "#00BCD4" },
    interactive: { type: "word-order", instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2", words: ["t10_w1", "t10_w2", "t10_w3", "t10_w4", "t10_w5", "t10_w6", "t10_w7"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6].slice(0, 7) },
    quiz: { question: "t10_q", choices: ["t10_qa", "t10_qb", "t10_qc", "t10_qd"], answer: "t10_qa" }
  },
  {
    infoTitle: "t11_title", infoText: "t11_text",
    svg: { type: "simple-icon", icon: "😊", color: "#FFEB3B" },
    interactive: { type: "highlight-text", instruction: "t11_inst", hint1: "t11_h1", hint2: "t11_h2", tokens: ["t11_tk1","t11_tk2","t11_tk3","t11_tk4","t11_tk5","t11_tk6","t11_tk7","t11_tk8"].filter(x=>x!==undefined), correctIndices: [3] },
    quiz: { question: "t11_q", choices: ["t11_qa", "t11_qb", "t11_qc", "t11_qd"], answer: "t11_qa" }
  },
  {
    infoTitle: "t12_title", infoText: "t12_text",
    svg: { type: "simple-icon", icon: "🧬", color: "#E91E63" },
    interactive: { type: "match-pairs", instruction: "t12_inst", hint1: "t12_h1", hint2: "t12_h2", pairs: [{left:"t12_l1",right:"t12_r1"},{left:"t12_l2",right:"t12_r2"},{left:"t12_l3",right:"t12_r3"}] },
    quiz: { question: "t12_q", choices: ["t12_qa", "t12_qb", "t12_qc", "t12_qd"], answer: "t12_qa" }
  },
  {
    infoTitle: "t13_title", infoText: "t13_text",
    svg: { type: "simple-icon", icon: "⚖️", color: "#FF5722" },
    interactive: { type: "gap-fill", instruction: "t13_inst", hint1: "t13_h1", hint2: "t13_h2", sentence: "t13_sent", choices: ["t13_qa2", "t13_qb2", "t13_qc2", "t13_qd2"], correctIndex: 0 },
    quiz: { question: "t13_q", choices: ["t13_qa", "t13_qb", "t13_qc", "t13_qd"], answer: "t13_qa" }
  },
  {
    infoTitle: "t14_title", infoText: "t14_text",
    svg: { type: "simple-icon", icon: "🎓", color: "#3F51B5" },
    interactive: { type: "word-order", instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2", words: ["t14_w1", "t14_w2", "t14_w3", "t14_w4", "t14_w5", "t14_w6", "t14_w7"].filter(x=>x!==""), correctOrder: [0,1,2,3,4,5,6].slice(0, 7) },
    quiz: { question: "t14_q", choices: ["t14_qa", "t14_qb", "t14_qc", "t14_qd"], answer: "t14_qa" }
  },
  {
    infoTitle: "t15_title", infoText: "t15_text",
    svg: { type: "icon-grid", items: [{emoji:"🪐",label:"Planet"},{emoji:"🏗️",label:"Build"}] },
    interactive: { type: "drag-to-bucket", instruction: "t15_inst", hint1: "t15_h1", hint2: "t15_h2", buckets: [{id:"b1",label:"t15_bl1"},{id:"b2",label:"t15_bl2"}], items: [{text:"t15_i1",bucketId:"b1"},{text:"t15_i2",bucketId:"b2"},{text:"t15_i3",bucketId:"b1"},{text:"t15_i4",bucketId:"b2"}] },
    quiz: { question: "t15_q", choices: ["t15_qa", "t15_qb", "t15_qc", "t15_qd"], answer: "t15_qa" }
  }
];

