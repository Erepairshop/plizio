import Link from "next/link";

// ─── GRADE DATA ────────────────────────────────────────────────────────────────
const GRADE_DATA: Record<number, {
  age: string;
  topics: { icon: string; label: string }[];
  intro: string;
  deepDive: string[];
  faqs: { q: string; a: string }[];
}> = {
  1: {
    age: "6–7",
    topics: [
      { icon: "🔤", label: "Buchstaben & Laute" },
      { icon: "📝", label: "Silben & Wörter" },
      { icon: "📖", label: "Einfaches Lesen" },
      { icon: "✏️", label: "Schreiben lernen" },
      { icon: "🗣️", label: "Sätze bilden" },
      { icon: "🔡", label: "Groß- und Kleinschreibung" },
    ],
    intro: "Mit unserem kostenlosen Deutsch Test für Klasse 1 üben Erstklässler im Alter von 6–7 Jahren Buchstaben, Laute, einfache Wörter und erste Sätze. Der Deutschtest Klasse 1 ist ideal für den Schulstart – direkt im Browser, ohne Anmeldung.",
    deepDive: [
      "In der 1. Klasse steht das Erlernen der Buchstaben und Laute im Mittelpunkt. Kinder lernen alle Buchstaben kennen, üben die Laut-Buchstaben-Zuordnung und beginnen, einfache Silben zu lesen und zu schreiben. Unser Deutsch Test Klasse 1 begleitet diesen Lernprozess spielerisch und kostenlos.",
      "Das Lesen einfacher Wörter und kurzer Sätze ist ein zentrales Ziel in Klasse 1. Kinder entwickeln ihr Leseverstehen schrittweise und lernen, Texte mit bekannten Wörtern zu erschließen. Mit dem Deutschtest Klasse 1 online kann dieser Lernfortschritt jederzeit überprüft werden.",
      "Groß- und Kleinschreibung ist für Erstklässler eine wichtige Regel: Nomen werden großgeschrieben, alle anderen Wörter klein. Unser Test hilft Kindern, diese Grundregel spielerisch zu üben und sicher anzuwenden – ohne Druck, immer kostenlos.",
      "Eltern und Lehrkräfte können den kostenlosen Deutsch Test Klasse 1 jederzeit zum Üben oder zur Lernstandsüberprüfung einsetzen. Alle Aufgaben sind auf den Lehrplan der 1. Klasse abgestimmt und können beliebig oft wiederholt werden – ohne Download, ohne Account.",
    ],
    faqs: [
      { q: "Was lernt man in Deutsch Klasse 1?", a: "In Klasse 1 lernen Kinder die Buchstaben und Laute des Alphabets, lesen und schreiben einfache Silben und Wörter sowie kurze Sätze. Außerdem wird die Groß- und Kleinschreibung eingeführt und das Leseverstehen mit einfachen Texten geübt." },
      { q: "Ist der Deutsch Test für Klasse 1 kostenlos?", a: "Ja, der Test ist vollständig kostenlos. Es ist keine Anmeldung erforderlich." },
      { q: "Wie lange dauert ein Deutsch Test für Klasse 1?", a: "Ein Testdurchgang dauert je nach Aufgabenanzahl 5–10 Minuten. Kinder können den Test jederzeit pausieren und zu einem anderen Zeitpunkt fortsetzen oder von vorne beginnen." },
      { q: "Für welches Alter ist der Test geeignet?", a: "Der Test richtet sich an Erstklässler im Alter von 6–7 Jahren. Er eignet sich auch als Auffrischung für Zweitklässler, die grundlegende Buchstaben- und Lesekenntnisse wiederholen möchten." },
      { q: "Welche Themen werden geprüft?", a: "Geprüft werden: Buchstaben und Laute, Silbentrennung, einfache Wörter lesen und schreiben, Groß- und Kleinschreibung sowie das Verstehen kurzer einfacher Sätze." },
      { q: "Kann mein Kind den Test mehrmals machen?", a: "Ja, der Test kann beliebig oft wiederholt werden." },
    ],
  },
  2: {
    age: "7–8",
    topics: [
      { icon: "🔤", label: "Rechtschreibung" },
      { icon: "🅰️", label: "Großschreibung" },
      { icon: "✅", label: "Satzzeichen" },
      { icon: "🌿", label: "Wortstamm" },
      { icon: "📖", label: "Leseverstehen" },
      { icon: "✏️", label: "Einfache Texte" },
    ],
    intro: "Mit unserem kostenlosen Deutsch Test für Klasse 2 üben Schülerinnen und Schüler im Alter von 7–8 Jahren Rechtschreibung, Groß- und Kleinschreibung, Satzzeichen und einfache Texte. Der Deutschtest Klasse 2 ist ideal zur Festigung der Grundlagen – direkt im Browser, ohne Anmeldung.",
    deepDive: [
      "In der 2. Klasse wird das Lesen und Schreiben systematisch erweitert: Kinder lernen einfache Rechtschreibregeln kennen, üben die Großschreibung von Nomen und die korrekte Verwendung von Satzzeichen wie Punkt und Ausrufezeichen. Unser Deutsch Test Klasse 2 hilft dabei, diese Regeln sicher anzuwenden.",
      "Der Wortstamm ist ein wichtiges Thema in Klasse 2: Kinder lernen, Wörter durch Ableitung und Zusammensetzung zu verstehen. Sie üben, Wortfamilien zu erkennen und verwandte Wörter zuzuordnen. Mit dem Deutschtest Klasse 2 online wird diese Fähigkeit spielerisch geübt.",
      "Leseverstehen wird in der 2. Klasse gezielt gefördert: Kinder lesen einfache Texte und beantworten Verständnisfragen. Sie lernen, Informationen aus Texten zu entnehmen und den Inhalt wiederzugeben. Unser Test enthält altersgerechte Leseaufgaben, die auf den Lehrplan abgestimmt sind.",
      "Eltern und Lehrkräfte können den kostenlosen Deutsch Test Klasse 2 jederzeit zum Üben oder zur Vorbereitung auf Klassenarbeiten einsetzen. Alle Aufgaben sind auf den Lehrplan der 2. Klasse abgestimmt und können beliebig oft wiederholt werden – ohne Download, ohne Account.",
    ],
    faqs: [
      { q: "Was lernt man in Deutsch Klasse 2?", a: "In Klasse 2 vertiefen Kinder ihre Lese- und Schreibkenntnisse: Rechtschreibregeln, Großschreibung von Nomen, einfache Satzzeichen (Punkt, Fragezeichen, Ausrufezeichen), Wortstamm und Wortfamilien sowie Leseverstehen mit einfachen Texten werden systematisch geübt." },
      { q: "Ist der Deutsch Test für Klasse 2 kostenlos?", a: "Ja, vollständig kostenlos. Kein Account, kein Download." },
      { q: "Wie lange dauert ein Deutsch Test für Klasse 2?", a: "Ein Testdurchgang dauert 5–10 Minuten. Der Test kann jederzeit wiederholt werden, um das Ergebnis zu verbessern und Lücken gezielt zu schließen." },
      { q: "Für welches Alter ist der Test geeignet?", a: "Der Test richtet sich an Zweitklässler im Alter von 7–8 Jahren. Er eignet sich auch als Vorbereitung für Drittklässler, die Grundlagen der Rechtschreibung und des Leseverstehens auffrischen möchten." },
      { q: "Welche Themen werden geprüft?", a: "Geprüft werden: Rechtschreibung, Großschreibung von Nomen, Satzzeichen (Punkt, Fragezeichen, Ausrufezeichen), Wortstamm und Wortfamilien sowie Leseverstehen mit einfachen Texten." },
      { q: "Kann ich den Test mehrmals machen?", a: "Ja, der Test lässt sich beliebig oft wiederholen." },
    ],
  },
  3: {
    age: "8–9",
    topics: [
      { icon: "🏷️", label: "Wortarten" },
      { icon: "🔗", label: "Satzglieder" },
      { icon: "⏳", label: "Zeitformen" },
      { icon: "📏", label: "Rechtschreibregeln" },
      { icon: "📖", label: "Leseverstehen" },
      { icon: "✍️", label: "Texte schreiben" },
    ],
    intro: "Mit unserem kostenlosen Deutsch Test für Klasse 3 üben Schülerinnen und Schüler im Alter von 8–9 Jahren Wortarten, Satzglieder, Zeitformen und Rechtschreibregeln. Der Deutschtest Klasse 3 ist ideal zur Vorbereitung auf Klassenarbeiten – direkt im Browser, ohne Anmeldung.",
    deepDive: [
      "In der 3. Klasse werden die Wortarten systematisch eingeführt: Kinder lernen Nomen, Verben, Adjektive und Artikel zu unterscheiden und korrekt zu verwenden. Unser Deutsch Test Klasse 3 prüft diese Grundlagen gezielt und bereitet optimal auf Klassenarbeiten vor.",
      "Satzglieder wie Subjekt, Prädikat und Objekt sind zentrale Themen in Klasse 3. Schülerinnen und Schüler lernen, Sätze zu analysieren und die Funktion einzelner Satzteile zu erkennen. Mit dem Deutschtest Klasse 3 online können diese grammatischen Strukturen spielerisch geübt werden.",
      "Zeitformen des Verbs – Präsens, Präteritum und Perfekt – werden in der 3. Klasse systematisch geübt. Kinder lernen, Verben in verschiedene Zeitformen zu setzen und diese situationsgerecht anzuwenden. Unser Test hilft dabei, diese Formen sicher zu beherrschen.",
      "Eltern und Lehrkräfte können den kostenlosen Deutsch Test Klasse 3 jederzeit zum Üben oder zur Vorbereitung auf Klassenarbeiten einsetzen. Alle Aufgaben sind auf den Lehrplan der 3. Klasse abgestimmt und können beliebig oft wiederholt werden – ohne Download, ohne Account.",
    ],
    faqs: [
      { q: "Was lernt man in Deutsch Klasse 3?", a: "In Klasse 3 werden Wortarten (Nomen, Verben, Adjektive, Artikel) eingeführt, Satzglieder (Subjekt, Prädikat, Objekt) analysiert, Zeitformen (Präsens, Präteritum, Perfekt) geübt sowie Rechtschreibregeln und Leseverstehen vertieft." },
      { q: "Ist der Test kostenlos?", a: "Ja, vollständig kostenlos und ohne Anmeldung." },
      { q: "Wie lange dauert der Test?", a: "Ein Testdurchgang dauert 5–10 Minuten. Schülerinnen und Schüler können den Test jederzeit wiederholen, um Lücken gezielt zu schließen." },
      { q: "Für welches Alter geeignet?", a: "Der Test richtet sich an Drittklässler im Alter von 8–9 Jahren. Er eignet sich auch zur Vorbereitung für die 4. Klasse oder als Auffrischung nach den Sommerferien." },
      { q: "Welche Themen werden geprüft?", a: "Geprüft werden: Wortarten (Nomen, Verben, Adjektive, Artikel), Satzglieder (Subjekt, Prädikat, Objekt), Zeitformen (Präsens, Präteritum, Perfekt), Rechtschreibregeln sowie Leseverstehen." },
      { q: "Kann ich den Test mehrmals machen?", a: "Ja, beliebig oft wiederholbar." },
    ],
  },
  4: {
    age: "9–10",
    topics: [
      { icon: "🔗", label: "Satzgefüge" },
      { icon: "📚", label: "Wortfelder & Synonyme" },
      { icon: "✍️", label: "Aufsatz & Textsorten" },
      { icon: "🏷️", label: "Erweiterte Grammatik" },
      { icon: "🔤", label: "Rechtschreibung" },
      { icon: "📖", label: "Leseverstehen" },
    ],
    intro: "Mit unserem kostenlosen Deutsch Test für Klasse 4 üben Schülerinnen und Schüler im Alter von 9–10 Jahren Satzgefüge, Wortfelder, Aufsatzformen und erweiterte Grammatik. Der Deutschtest Klasse 4 ist ideal zur Vorbereitung auf den Schulübertritt – direkt im Browser, ohne Anmeldung.",
    deepDive: [
      "In der 4. Klasse werden Satzgefüge und Satzverbindungen gezielt geübt: Kinder lernen Haupt- und Nebensätze zu unterscheiden und korrekt mit Konjunktionen zu verbinden. Unser Deutsch Test Klasse 4 prüft diese Strukturen und bereitet auf den Schulübertritt vor.",
      "Wortfelder und Synonyme sind wichtige Themen in Klasse 4: Schülerinnen und Schüler erweitern ihren Wortschatz und lernen, Wörter mit ähnlicher Bedeutung zu erkennen und situationsgerecht einzusetzen. Mit dem Deutschtest Klasse 4 online wird dieser Wortschatz spielerisch gefestigt.",
      "Aufsatz und Textsorten stehen in Klasse 4 im Mittelpunkt: Kinder üben das Schreiben von Erlebnisberichten, Beschreibungen und einfachen Meinungsaufsätzen. Unser Test enthält Aufgaben zu Textaufbau und sprachlichen Mitteln, die auf den Lehrplan abgestimmt sind.",
      "Eltern und Lehrkräfte können den kostenlosen Deutsch Test Klasse 4 jederzeit zur Vorbereitung auf Klassenarbeiten oder den Schulübertritt einsetzen. Alle Aufgaben sind auf den Lehrplan der 4. Klasse abgestimmt und können beliebig oft wiederholt werden – ohne Download, ohne Account.",
    ],
    faqs: [
      { q: "Was lernt man in Deutsch Klasse 4?", a: "In Klasse 4 werden Satzgefüge (Haupt- und Nebensätze, Konjunktionen), Wortfelder und Synonyme, verschiedene Aufsatzformen (Bericht, Beschreibung, Meinung) sowie erweiterte Grammatik und Rechtschreibung systematisch geübt." },
      { q: "Ist der Test kostenlos?", a: "Ja, vollständig kostenlos und ohne Anmeldung." },
      { q: "Wie lange dauert der Test?", a: "Ein Testdurchgang dauert 5–10 Minuten. Der Test kann jederzeit wiederholt werden – ideal zur gezielten Vorbereitung auf Klassenarbeiten oder den Schulübertritt." },
      { q: "Für welches Alter geeignet?", a: "Der Test richtet sich an Viertklässler im Alter von 9–10 Jahren. Er eignet sich besonders gut zur Vorbereitung auf den Übertritt an weiterführende Schulen." },
      { q: "Welche Themen werden geprüft?", a: "Geprüft werden: Satzgefüge (Haupt- und Nebensätze), Wortfelder und Synonyme, Aufsatzformen (Bericht, Beschreibung), erweiterte Grammatik (Konjunktionen, Adjektivdeklination) sowie Rechtschreibung." },
      { q: "Kann ich den Test mehrmals machen?", a: "Ja, beliebig oft wiederholbar." },
    ],
  },
  5: {
    age: "10–11",
    topics: [
      { icon: "📝", label: "Textanalyse" },
      { icon: "🔤", label: "Grammatik (Verben, Adj.)" },
      { icon: "✍️", label: "Aufsatzformen" },
      { icon: "📖", label: "Erzählen & Beschreiben" },
      { icon: "🔡", label: "Rechtschreibung" },
      { icon: "💬", label: "Zeichensetzung" },
    ],
    intro: "Mit unserem kostenlosen Deutsch Test für Klasse 5 üben Schülerinnen und Schüler im Alter von 10–11 Jahren Grammatik, Rechtschreibung, Wortarten und Leseverstehen. Der Deutschtest Klasse 5 ist ideal für den Einstieg in die weiterführende Schule – direkt im Browser, ohne Anmeldung.",
    deepDive: [
      "In der 5. Klasse beginnt ein neuer Abschnitt im Deutschunterricht: Schülerinnen und Schüler vertiefen ihr Wissen über Wortarten wie Nomen, Verben, Adjektive und Pronomen. Unser Deutsch Test Klasse 5 prüft diese Grundlagen gezielt und bereitet optimal auf Klassenarbeiten vor.",
      "Rechtschreibung und Zeichensetzung sind zentrale Themen im Deutschunterricht der 5. Klasse. Kinder lernen Kommaregeln, Groß- und Kleinschreibung und üben komplexere Wortformen. Mit dem Deutschtest Klasse 5 online können Schüler diese Bereiche spielerisch und kostenlos festigen.",
      "Textanalyse und das Verfassen eigener Texte gewinnen in Klasse 5 zunehmend an Bedeutung. Schülerinnen und Schüler lernen verschiedene Aufsatzformen kennen – Erlebniserzählung, Beschreibung und Bericht. Der Deutsch Test Klasse 5 bereitet gezielt auf diese Textsorten vor.",
      "Eltern und Lehrkräfte können den kostenlosen Deutsch Test Klasse 5 jederzeit zum Üben oder zur Vorbereitung auf Klassenarbeiten einsetzen. Alle Aufgaben sind auf den Lehrplan der 5. Klasse abgestimmt und können beliebig oft wiederholt werden – ohne Download, ohne Account.",
    ],
    faqs: [
      { q: "Was lernt man in Deutsch Klasse 5?", a: "In Klasse 5 lernen Schülerinnen und Schüler, Texte zu analysieren (Aufbau, Figuren, Handlung), verschiedene Aufsatzformen zu schreiben (Erlebniserzählung, Beschreibung, Bericht) sowie Grammatik zu vertiefen: Verben (Konjugation, Zeitformen), Adjektive und Pronomen. Außerdem wird die Zeichensetzung systematisch geübt." },
      { q: "Ist der Test kostenlos?", a: "Ja, vollständig kostenlos und ohne Anmeldung." },
      { q: "Wie lange dauert der Test?", a: "Ein Testdurchgang dauert je nach gewählter Aufgabenanzahl zwischen 5 und 10 Minuten. Der Test kann jederzeit wiederholt werden, um das Ergebnis zu verbessern." },
      { q: "Für welches Alter geeignet?", a: "Der Test richtet sich an Schülerinnen und Schüler der 5. Klasse, also im Alter von 10–11 Jahren. Er eignet sich auch als Einstieg für Sechstklässler, die Grundlagen wiederholen möchten." },
      { q: "Welche Themen werden geprüft?", a: "Geprüft werden: Textanalyse (Aufbau, Figuren, Thema), Aufsatzformen (Erzählung, Beschreibung, Bericht), Grammatik (Verben, Adjektive, Pronomen), Zeichensetzung (Komma, Punkt, Ausrufezeichen) sowie Rechtschreibung nach den Grundregeln." },
      { q: "Kann ich den Test mehrmals machen?", a: "Ja, beliebig oft wiederholbar." },
    ],
  },
  6: {
    age: "11–12",
    topics: [
      { icon: "🎭", label: "Stilmittel & Metaphern" },
      { icon: "📖", label: "Kurzgeschichte" },
      { icon: "🔤", label: "Grammatik & Syntax" },
      { icon: "💬", label: "Zeichensetzung" },
      { icon: "✍️", label: "Erörterung (Einstieg)" },
      { icon: "📝", label: "Textinterpretation" },
    ],
    intro: "Mit unserem kostenlosen Deutsch Test für Klasse 6 üben Schülerinnen und Schüler im Alter von 11–12 Jahren Stilmittel, Kurzgeschichte, Textinterpretation und erweiterte Grammatik. Der Deutschtest Klasse 6 bereitet ideal auf Klassenarbeiten vor – direkt im Browser, ohne Anmeldung.",
    deepDive: [
      "In der 6. Klasse werden Stilmittel systematisch eingeführt: Schülerinnen und Schüler lernen Metapher, Vergleich, Personifikation und Alliteration zu erkennen und zu benennen. Unser Deutsch Test Klasse 6 prüft diese literarischen Werkzeuge gezielt und bereitet auf Klassenarbeiten vor.",
      "Die Kurzgeschichte ist eine zentrale Textsorte in Klasse 6: Schüler lernen typische Merkmale (offener Anfang, Wendepunkt, offenes Ende) zu erkennen und Texte zu analysieren. Mit dem Deutschtest Klasse 6 online wird das Analysieren und Interpretieren von Kurzgeschichten geübt.",
      "Grammatik und Syntax werden in der 6. Klasse weiter vertieft: Nebensätze, Konjunktiv und komplexe Satzgefüge stehen im Mittelpunkt. Außerdem wird die Zeichensetzung systematisch erweitert – Kommaregeln bei Nebensätzen und Aufzählungen werden gezielt geübt.",
      "Eltern und Lehrkräfte können den kostenlosen Deutsch Test Klasse 6 jederzeit zur Vorbereitung auf Klassenarbeiten oder zum gezielten Wiederholen einsetzen. Alle Aufgaben sind auf den Lehrplan der 6. Klasse abgestimmt und können beliebig oft wiederholt werden – ohne Download, ohne Account.",
    ],
    faqs: [
      { q: "Was lernt man in Deutsch Klasse 6?", a: "In Klasse 6 stehen Stilmittel im Mittelpunkt: Schülerinnen und Schüler lernen Metapher, Vergleich, Personifikation und Alliteration zu erkennen und zu benennen. Die Kurzgeschichte wird als Textsorte eingeführt und analysiert. Außerdem wird die Erörterung vorbereitet sowie Grammatik und Syntax vertieft." },
      { q: "Ist der Test kostenlos?", a: "Ja, vollständig kostenlos und ohne Anmeldung." },
      { q: "Wie lange dauert der Test?", a: "Ein Testdurchgang dauert 5–10 Minuten. Schülerinnen und Schüler können den Test jederzeit wiederholen, um gezielte Schwachstellen zu erkennen und zu verbessern." },
      { q: "Für welches Alter geeignet?", a: "Der Test richtet sich an Schülerinnen und Schüler der 6. Klasse, also im Alter von 11–12 Jahren. Er eignet sich auch als Vorbereitung für Siebtklässler auf weiterführende Textanalyse." },
      { q: "Welche Themen werden geprüft?", a: "Geprüft werden: Stilmittel (Metapher, Vergleich, Personifikation, Alliteration), Textinterpretation von Kurzgeschichten, Grundlagen der Erörterung, komplexe Zeichensetzung sowie Grammatik (Syntax, Satzgefüge, Konjunktiv)." },
      { q: "Kann ich den Test mehrmals machen?", a: "Ja, beliebig oft wiederholbar." },
    ],
  },
  7: {
    age: "12–13",
    topics: [
      { icon: "📜", label: "Lyrik & Epik Analyse" },
      { icon: "🔤", label: "Sprachgeschichte" },
      { icon: "✍️", label: "Erörterung" },
      { icon: "📖", label: "Textinterpretation" },
      { icon: "🏷️", label: "Komplexe Grammatik" },
      { icon: "💬", label: "Rhetorische Mittel" },
    ],
    intro: "Mit unserem kostenlosen Deutsch Test für Klasse 7 üben Schülerinnen und Schüler im Alter von 12–13 Jahren Grammatik, Stilmittel, Nebensatztypen und Textanalyse. Der Deutschtest Klasse 7 ist ideal zur Vorbereitung auf Klassenarbeiten und Schulaufgaben – direkt im Browser, ohne Anmeldung.",
    deepDive: [
      "In der 7. Klasse erweitern Schülerinnen und Schüler ihr Grammatikwissen deutlich: Sie lernen verschiedene Nebensatztypen wie Kausal-, Konditional- und Temporalsätze zu erkennen und korrekt zu bilden. Unser Deutsch Test Klasse 7 prüft diese Themen spielerisch und kostenlos online.",
      "Stilmittel wie Alliteration, Metapher, Personifikation und Vergleich sind zentrale Themen im Deutschunterricht der 7. Klasse. Schüler lernen, diese Mittel in Texten zu erkennen und ihre Wirkung zu beschreiben. Mit dem Deutschtest Klasse 7 online lässt sich dieses Wissen gezielt festigen.",
      "Textanalyse und Leseverstehen gewinnen in Klasse 7 zunehmend an Bedeutung: Schülerinnen und Schüler analysieren literarische und Sachtexte, bestimmen Erzählperspektiven und erkennen sprachliche Mittel. Der Lesetest Klasse 7 enthält vielfältige Aufgaben, die den Lehrplan vollständig abdecken.",
      "Eltern und Lehrkräfte können den kostenlosen Deutsch Test Klasse 7 jederzeit zur Vorbereitung auf Klassenarbeiten oder zum gezielten Wiederholen einsetzen. Alle Aufgaben sind auf den Lehrplan der 7. Klasse abgestimmt und können beliebig oft wiederholt werden – ohne Download, ohne Account.",
    ],
    faqs: [
      { q: "Was lernt man in Deutsch Klasse 7?", a: "In Klasse 7 werden Texte aus Lyrik und Epik analysiert: Schülerinnen und Schüler lernen Gedichte zu interpretieren (Reim, Metrum, Strophenform) und epische Texte zu untersuchen (Erzählperspektive, Handlung, Figuren). Die Erörterung wird vollständig eingeführt und rhetorische Mittel vertieft." },
      { q: "Ist der Test kostenlos?", a: "Ja, vollständig kostenlos und ohne Anmeldung." },
      { q: "Wie lange dauert der Test?", a: "Ein Testdurchgang dauert 5–10 Minuten. Siebtklässler können gezielt einzelne Bereiche wiederholen und ihren Wissensstand überprüfen – ohne Druck und jederzeit." },
      { q: "Für welches Alter geeignet?", a: "Der Test richtet sich an Schülerinnen und Schüler der 7. Klasse, also im Alter von 12–13 Jahren. Er ist auch für Achtklässler geeignet, die Grundlagen der Lyrik- und Epikanalyse auffrischen möchten." },
      { q: "Welche Themen werden geprüft?", a: "Geprüft werden: Lyrikanalyse (Reim, Metrum, Strophe, Stilmittel), Epikanalyse (Erzählperspektive, Figurencharakterisierung), Erörterung (Pro-Kontra-Argumente, Schlussfolgerung), rhetorische Mittel sowie komplexe Grammatik (Nebensätze, Konjunktiv II)." },
      { q: "Kann ich den Test mehrmals machen?", a: "Ja, beliebig oft wiederholbar." },
    ],
  },
  8: {
    age: "13–14",
    topics: [
      { icon: "📝", label: "Erörterung & Argumentation" },
      { icon: "📖", label: "Literaturanalyse" },
      { icon: "🔤", label: "Komplexe Grammatik" },
      { icon: "🎭", label: "Drama & Prosa" },
      { icon: "✍️", label: "Aufsatzformen (alle)" },
      { icon: "💬", label: "Stilanalyse" },
    ],
    intro: "Mit unserem kostenlosen Deutsch Test für Klasse 8 üben Schülerinnen und Schüler im Alter von 13–14 Jahren Erörterung, Literaturanalyse, Drama und komplexe Grammatik. Der Deutschtest Klasse 8 ist ideal zur Prüfungsvorbereitung – direkt im Browser, ohne Anmeldung.",
    deepDive: [
      "In der 8. Klasse steht die Erörterung als zentrale Aufsatzform im Mittelpunkt: Schülerinnen und Schüler lernen, Thesen zu formulieren, Argumente logisch zu strukturieren und zu einem schlüssigen Schluss zu kommen. Unser Deutsch Test Klasse 8 prüft diese Fähigkeiten gezielt.",
      "Literaturanalyse wird in Klasse 8 vertieft: Drama und Prosa werden analysiert – Figuren, Konflikte, Handlungsstruktur und sprachliche Mittel stehen im Fokus. Mit dem Deutschtest Klasse 8 online werden diese Analysefähigkeiten systematisch geübt.",
      "Komplexe Grammatik – Konjunktiv I und II, Infinitivkonstruktionen und erweiterte Satzgefüge – sind zentrale Themen in Klasse 8. Schülerinnen und Schüler vertiefen ihr Wissen und bereiten sich auf die sprachlichen Anforderungen der Oberstufe vor.",
      "Eltern und Lehrkräfte können den kostenlosen Deutsch Test Klasse 8 jederzeit zur gezielten Prüfungsvorbereitung einsetzen. Alle Aufgaben sind auf den Lehrplan der 8. Klasse abgestimmt und können beliebig oft wiederholt werden – ohne Download, ohne Account.",
    ],
    faqs: [
      { q: "Was lernt man in Deutsch Klasse 8?", a: "In Klasse 8 werden Erörterung (Argumentation, Thesen, Gegenargumente), Literaturanalyse (Drama, Prosa, Lyrik), komplexe Grammatik (Konjunktiv I und II, Infinitivkonstruktionen) sowie Stilanalyse und alle Aufsatzformen systematisch vertieft." },
      { q: "Ist der Test kostenlos?", a: "Ja, vollständig kostenlos und ohne Anmeldung." },
      { q: "Wie lange dauert der Test?", a: "Ein Testdurchgang dauert 5–10 Minuten. Der Test kann jederzeit wiederholt werden – ideal zur gezielten Vorbereitung auf Schulaufgaben, Klassenarbeiten oder Abschlussprüfungen." },
      { q: "Für welches Alter geeignet?", a: "Der Test richtet sich an Achtklässler im Alter von 13–14 Jahren. Er eignet sich auch als Vorbereitung für die Oberstufe oder zum Auffrischen der Grundlagen vor Abschlussprüfungen." },
      { q: "Welche Themen werden geprüft?", a: "Geprüft werden: Erörterung (Argumentation, Thesen), Literaturanalyse (Drama, Prosa), Stilmittel und Stilanalyse, komplexe Grammatik (Konjunktiv I und II, Infinitivkonstruktionen) sowie alle Aufsatzformen." },
      { q: "Kann ich den Test mehrmals machen?", a: "Ja, beliebig oft wiederholbar." },
    ],
  },
};

// ─── COMPONENT ─────────────────────────────────────────────────────────────────
export default function DeutschTestKlasse({ grade }: { grade: number }) {
  const data = GRADE_DATA[grade];
  if (!data) return null;

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Startseite", item: "https://plizio.com/" },
      { "@type": "ListItem", position: 2, name: "Deutsch Test", item: "https://plizio.com/deutsch-test/" },
      { "@type": "ListItem", position: 3, name: `Deutsch Test Klasse ${grade}`, item: `https://plizio.com/deutsch-test/klasse-${grade}/` },
    ],
  };

  return (
    <main className="min-h-screen" style={{ background: "#0A0A1A", color: "white" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />

      <div className="max-w-3xl mx-auto px-4 py-8">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-white/40 mb-6 flex-wrap">
          <a href="/" className="hover:text-white/70 transition-colors">Startseite</a>
          <span>›</span>
          <a href="/deutsch-test/" className="hover:text-white/70 transition-colors">Deutsch Test</a>
          <span>›</span>
          <span className="text-white/70">Klasse {grade}</span>
        </nav>

        {/* Hero */}
        <div className="mb-10">
          <div
            className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-3"
            style={{ background: "rgba(0,212,255,0.1)", color: "#00D4FF", border: "1px solid rgba(0,212,255,0.25)" }}
          >
            Klasse {grade} · Alter {data.age} · Kostenlos · Kein Account
          </div>
          <h1 className="text-3xl sm:text-4xl font-black mb-4 leading-tight">
            Deutsch Test Klasse {grade} –{" "}
            <span style={{ color: "#00FF88" }}>Online Üben kostenlos</span>
          </h1>
          <p className="text-white/65 text-base leading-relaxed mb-5">{data.intro}</p>
          <a
            href="/deutschtest"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-black text-black text-sm"
            style={{ background: "linear-gradient(135deg, #00D4FF, #00FF88)" }}
          >
            ▶ Deutsch Test starten
          </a>
        </div>

        {/* Topics */}
        <section className="mb-10">
          <h2 className="text-2xl font-black mb-4" style={{ color: "#00D4FF" }}>
            Themen in Deutsch Klasse {grade}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {data.topics.map((t, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-3 rounded-2xl"
                style={{ background: "#12122A", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <span className="text-2xl flex-shrink-0">{t.icon}</span>
                <span className="text-white/80 text-xs font-semibold leading-tight">{t.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Deep Dive */}
        <section className="mb-10">
          <h2 className="text-2xl font-black mb-4" style={{ color: "#B44DFF" }}>
            Deutsch Klasse {grade} – Im Detail
          </h2>
          <div className="space-y-4 text-white/65 text-sm leading-relaxed">
            {data.deepDive.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </section>

        {/* CTA mid */}
        <div
          className="flex flex-col sm:flex-row items-center gap-4 p-5 rounded-2xl mb-10"
          style={{ background: "rgba(0,212,255,0.05)", border: "1px solid rgba(0,212,255,0.15)" }}
        >
          <div className="flex-1">
            <p className="font-black text-white text-base mb-1">Bereit für den Test?</p>
            <p className="text-white/50 text-xs">Wähle deine Klasse direkt im Spiel – kostenlos, ohne Anmeldung.</p>
          </div>
          <a
            href="/deutschtest"
            className="flex-shrink-0 px-6 py-3 rounded-2xl font-black text-black text-sm"
            style={{ background: "linear-gradient(135deg, #00D4FF, #00FF88)" }}
          >
            ▶ Jetzt starten
          </a>
        </div>

        {/* FAQ */}
        <section className="mb-10">
          <h2 className="text-2xl font-black mb-4" style={{ color: "#FFD700" }}>
            Häufige Fragen – Deutsch Test Klasse {grade}
          </h2>
          <div className="space-y-3">
            {data.faqs.map((faq, i) => (
              <div
                key={i}
                className="p-4 rounded-2xl"
                style={{ background: "#12122A", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <p className="font-bold text-white text-sm mb-1">{faq.q}</p>
                <p className="text-white/60 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Other grades */}
        <section className="mb-10">
          <h2 className="text-xl font-black mb-4 text-white/80">Andere Klassenstufen</h2>
          <div className="flex flex-wrap gap-2">
            {[1, 2, 3, 4, 5, 6, 7, 8].filter((g) => g !== grade).map((g) => (
              <a
                key={g}
                href={`/deutsch-test/klasse-${g}/`}
                className="px-4 py-2 rounded-xl text-sm font-bold transition-all hover:opacity-80"
                style={{ background: "rgba(0,212,255,0.1)", color: "#00D4FF", border: "1px solid rgba(0,212,255,0.25)" }}
              >
                Klasse {g}
              </a>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <div
          className="text-center py-6 rounded-2xl"
          style={{ background: "rgba(0,255,136,0.04)", border: "1px solid rgba(0,255,136,0.12)" }}
        >
          <p className="text-white/60 text-sm mb-3">Starte deinen Deutsch Test für Klasse {grade} jetzt!</p>
          <a
            href="/deutschtest"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-black text-black text-base"
            style={{ background: "linear-gradient(135deg, #00FF88, #00D4FF)" }}
          >
            🚀 Deutsch Test starten
          </a>
          <p className="text-white/25 text-xs mt-3">Kostenlos · Kein Account · Klasse {grade} · Sofort verfügbar</p>
        </div>

      </div>
    </main>
  );
}
