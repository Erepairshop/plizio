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
    t5_title: "Transparenz", t5_text: "Es ist wichtig zu verstehen, wie eine KI zu einer Entscheidung gekommen ist (Explainable AI).", t5_inst: "Markiere das richtige Wort:", t5_h1: "Offenheit.", t5_h2: "Erklärbarkeit.", t5_q: "Was bedeutet Transparenz bei KI?", t5_qa: "Entscheidungen verstehen", t5_qb: "Ein Glasgehäuse für den PC", t5_qc: "Ein unsichtbarer Roboter", t5_qd: "Schnelles Internet",
    t5_tk1: "KI", t5_tk2: "Entscheidungen", t5_tk3: "müssen", t5_tk4: "nachvollziehbar", t5_tk5: "sein.", t5_tk6: "",
    t6_title: "Verantwortung", t6_text: "Wer haftet, wenn eine KI einen Fehler macht? Designer, Nutzer oder die KI selbst?", t6_inst: "Ordne die Paare zu:", t6_h1: "Wer ist schuld?", t6_h2: "Haftung klären.", t6_q: "Wer trägt aktuell meist die Verantwortung für KI-Fehler?", t6_qa: "Die Entwickler / Firmen", t6_qb: "Die KI selbst", t6_qc: "Der Stromanbieter", t6_qd: "Niemand",
    t6_l1: "Entwickler", t6_r1: "Erstellung", t6_l2: "Nutzer", t6_r2: "Anwendung", t6_l3: "Gesetz", t6_r3: "Regulierung",
    t7_title: "Ethische Richtlinien", t7_text: "Organisationen weltweit erstellen Regeln, um KI zum Wohle der Menschheit einzusetzen.", t7_inst: "Fülle die Lücke aus:", t7_h1: "Gute Regeln.", t7_h2: "Ethik-Kodex.", t7_q: "Was ist ein Ziel ethischer KI-Richtlinien?", t7_qa: "Wohl der Menschheit", t7_qb: "Höhere Preise", t7_qc: "Weniger Speicher", t7_qd: "Bunte Roboter",
    t7_sent: "KI sollte den Menschen ___ und nicht schaden.", t7_qa2: "helfen", t7_qb2: "ignorieren", t7_qc2: "ersetzen", t7_qd2: "ärgern",
    t8_title: "Umweltbelastung", t8_text: "Das Training großer KI-Modelle verbraucht enorm viel Energie und Wasser zur Kühlung.", t8_inst: "Sortiere in die Eimer:", t8_h1: "KI und Natur.", t8_h2: "Ressourcenverbrauch.", t8_q: "Was verbraucht KI-Training besonders viel?", t8_qa: "Strom & Wasser", t8_qb: "Papier", t8_qc: "Holz", t8_qd: "Sauerstoff",
    t8_bl1: "Verbrauch", t8_bl2: "Lösung", t8_i1: "Große Rechenzentren", t8_i2: "Grüne Energie", t8_i3: "Hardware-Kühlung", t8_i4: "Effiziente Codes",
    t9_title: "KI Regulierung", t9_text: "Gesetze (wie der EU AI Act) sollen den Einsatz von KI sicher und fair gestalten.", t9_inst: "Bringe die Wörter in Ordnung:", t9_h1: "Gesetze für KI.", t9_h2: "Staatliche Kontrolle.", t9_q: "Was ist der EU AI Act?", t9_qa: "Ein Gesetz zur KI", t9_qb: "Ein neues KI-Modell", t9_qc: "Eine Grafikkarte", t9_qd: "Ein Computerspiel",
    t9_w1: "Gesetze", t9_w2: "schützen", t9_w3: "uns", t9_w4: "vor", t9_w5: "dem", t9_w6: "Missbrauch", t9_w7: "von KI.",
    t10_title: "Mensch-KI Kollaboration", t10_text: "In der Zukunft werden Menschen und KI als Team zusammenarbeiten (Co-Piloten).", t10_inst: "Markiere das richtige Wort:", t10_h1: "Zusammenarbeit.", t10_h2: "Teamwork.", t10_q: "Wie nennt man KI, die uns bei der Arbeit hilft?", t10_qa: "Co-Pilot / Assistent", t10_qb: "Chef", t10_qc: "Konkurrent", t10_qd: "Feind",
    t10_tk1: "Menschen", t10_tk2: "und", t10_tk3: "KI", t10_tk4: "ergänzen", t10_tk5: "ihre", t10_tk6: "Stärken.", t10_tk7: "",
    t11_title: "Die Singularität", t11_text: "Ein hypothetischer Zeitpunkt, an dem KI klüger wird als alle Menschen zusammen.", t11_inst: "Ordne die Paare zu:", t11_h1: "Superintelligenz.", t11_h2: "Zukunftstheorie.", t11_q: "Was beschreibt die Singularität?", t11_qa: "KI übertrifft Menschen", t11_qb: "Ein schwarzes Loch im PC", t11_qc: "Das Ende des Internets", t11_qd: "Ein neuer Feiertag",
    t11_l1: "Mensch", t11_r1: "Biologische Intelligenz", t11_l2: "KI", t11_r2: "Künstliche Intelligenz", t11_l3: "Singularität", t11_r3: "Überlegenheit",
    t12_title: "Urheberrecht & KI", t12_text: "Wem gehört ein Bild, das eine KI gemalt hat? Dem Programmierer oder der KI?", t12_inst: "Fülle die Lücke aus:", t12_h1: "Wem gehört es?", t12_h2: "Copyright-Fragen.", t12_q: "Was ist ein Problem bei KI-Kunst?", t12_qa: "Unklare Urheberschaft", t12_qb: "Zu viele Farben", t12_qc: "Die KI hat keinen Pinsel", t12_qd: "Bilder sind zu schwer",
    t12_sent: "Das ___ regelt den Schutz von Werken.", t12_qa2: "Urheberrecht", t12_qb2: "Wetter", t12_qc2: "Internet", t12_qd2: "Telefon",
    t13_title: "Social Media Algorithmen", t13_text: "KI entscheidet, welche Beiträge du siehst, was oft zu 'Filterblasen' führt.", t13_inst: "Sortiere in die Eimer:", t13_h1: "Echokammern.", t13_h2: "Informationsauswahl.", t13_q: "Was ist eine Filterblase?", t13_qa: "Man sieht nur eigene Meinungen", t13_qb: "Eine echte Seifenblase", t13_qc: "Ein Schutzschild", t13_qd: "Ein Grafikfehler",
    t13_bl1: "Algorithmus", t13_bl2: "Effekt", t13_i1: "Interessen-Analyse", t13_i2: "Filterblase", t13_i3: "Inhalts-Ranking", t13_i4: "Isolation",
    t14_title: "Überwachung", t14_text: "Gesichtserkennung kann für Sicherheit genutzt werden, aber auch zur totalen Überwachung.", t14_inst: "Bringe die Wörter in Ordnung:", t14_h1: "Kameras überall.", t14_h2: "Kontrolle vs Freiheit.", t14_q: "Was ist ein Risiko von Gesichtserkennung?", t14_qa: "Verlust der Anonymität", t14_qb: "Bessere Fotos", t14_qc: "Schnelleres Make-up", t14_qd: "Längere Akkulaufzeit",
    t14_w1: "KI-Überwachung", t14_w2: "kann", t14_w3: "unsere", t14_w4: "persönliche", t14_w5: "Freiheit", t14_w6: "stark", t14_w7: "einschränken.",
    t15_title: "Die Zukunft der KI", t15_text: "KI wird unseren Alltag grundlegend verändern, von Bildung bis Arbeit.", t15_inst: "Markiere das richtige Wort:", t15_h1: "Ausblick.", t15_h2: "Neue Welt.", t15_q: "Was sollten wir im Umgang mit KI lernen?", t15_qa: "Kritischer Umgang", t15_qb: "Alles blind glauben", t15_qc: "Keine Computer nutzen", t15_qd: "Angst haben",
    t15_tk1: "Die", t15_tk2: "Zukunft", t15_tk3: "gestalten", t15_tk4: "wir", t15_tk5: "gemeinsam", t15_tk6: "mit", t15_tk7: "KI."
  },
  en: {
    explorer_title: "AI Ethics & Future",
    t1_title: "Bias", t1_text: "AI systems can adopt prejudices from their training data and treat people unfairly.", t1_inst: "Match the pairs:", t1_h1: "Unfair data.", t1_h2: "What goes together?", t1_q: "What is bias in AI?", t1_qa: "Inbuilt prejudices", t1_qb: "A fast processor", t1_qc: "A new battery", t1_qd: "A colorful screen",
    t1_l1: "Data", t1_r1: "Source of bias", t1_l2: "Fairness", t1_r2: "Goal of ethics", t1_l3: "Algorithm", t1_r3: "Decision rule",
    t2_title: "Privacy", t2_text: "AI needs lots of data, which poses risks to the protection of our personal information.", t2_inst: "Fill in the blank:", t2_h1: "Protecting own data.", t2_h2: "Right to...", t2_q: "Why is privacy important in AI?", t2_qa: "Protection of personal data", t2_qb: "To make AI faster", t2_qc: "To save power", t2_qd: "For better graphics",
    t2_sent: "Data protection protects our ___ information.", t2_qa2: "private", t2_qb2: "public", t2_qc2: "broken", t2_qd2: "expensive",
    t3_title: "Work & Automation", t3_text: "AI can take over monotonous tasks, changing professions but also creating new jobs.", t3_inst: "Sort into buckets:", t3_h1: "Replacing vs Complementing.", t3_h2: "Change.", t3_q: "What happens through AI automation?", t3_qa: "Professions change", t3_qb: "No one has to work anymore", t3_qc: "Computers are banned", t3_qd: "Everyone becomes a baker",
    t3_bl1: "Automation", t3_bl2: "Human Work", t3_i1: "Assembly line sorting", t3_i2: "Artistic consulting", t3_i3: "Data analysis", t3_i4: "Empathic care"
  },
  hu: {
    explorer_title: "MI Etika és Jövő",
    t1_title: "Előítélet (Bias)", t1_text: "A MI rendszerek átvehetik a tanító adatokban lévő előítéleteket, így igazságtalanok lehetnek.", t1_inst: "Párosítsd össze:", t1_h1: "Igazságtalan adatok.", t1_h2: "Mi tartozik össze?", t1_q: "Mi a bias a MI-ben?", t1_qa: "Beépített előítélet", t1_qb: "Gyors processzor", t1_qc: "Új akkumulátor", t1_qd: "Színes képernyő",
    t1_l1: "Adat", t1_r1: "Bias forrása", t1_l2: "Fairness", t1_r2: "Etikai cél", t1_l3: "Algoritmus", t1_r3: "Döntési szabály",
    t2_title: "Magánélet", t2_text: "A MI-nek sok adatra van szüksége, ami kockázatot jelent a személyes adataink védelmére.", t2_inst: "Töltsd ki a hiányt:", t2_h1: "Saját adatok védelme.", t2_h2: "Jog a...", t2_q: "Miért fontos a magánélet védelme?", t2_qa: "Személyes adatok védelme", t2_qb: "Hogy gyorsabb legyen a gép", t2_qc: "Árammegtakarítás", t2_qd: "Jobb grafika",
    t2_sent: "Az adatvédelem a ___ információinkat óvja.", t2_qa2: "magán", t2_qb2: "nyilvános", t2_qc2: "hibás", t2_qd2: "drága"
  },
  ro: {
    explorer_title: "Etica IA și Viitorul",
    t1_title: "Prejudecată (Bias)", t1_text: "Sistemele IA pot prelua prejudecăți din datele de antrenament și pot fi nedrepte.", t1_inst: "Potrivește perechile:", t1_h1: "Date nedrepte.", t1_h2: "Ce se potrivește?", t1_q: "Ce este bias-ul în IA?", t1_qa: "Prejudecăți înnăscute", t1_qb: "Un procesor rapid", t1_qc: "O baterie nouă", t1_qd: "Un ecran colorat",
    t1_l1: "Date", t1_r1: "Sursa bias-ului", t1_l2: "Echitate", t1_r2: "Scopul eticii", t1_l3: "Algoritm", t1_r3: "Regulă de decizie"
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
