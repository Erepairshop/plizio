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
      { icon: "🔢", label: "Zahlen bis 20" },
      { icon: "➕", label: "Addition bis 20" },
      { icon: "➖", label: "Subtraktion bis 20" },
      { icon: "📏", label: "Mengen & Vergleichen" },
      { icon: "🔷", label: "Geometrische Formen" },
      { icon: "1️⃣", label: "Ordinalzahlen" },
    ],
    intro: `Der Mathe Test für Klasse 1 richtet sich an Erstklässler, die gerade ihre ersten Schritte in der Welt der Zahlen machen. In der ersten Klasse lernen Kinder im Alter von etwa sechs bis sieben Jahren die Grundlagen der Mathematik kennen: Zahlen erkennen, benennen, vergleichen und einfache Rechenoperationen durchführen. Unser kostenloser Online-Test hilft Eltern und Lehrern dabei, den Lernfortschritt ihrer Kinder spielerisch zu überprüfen. Jede Aufgabe ist altersgerecht gestaltet und deckt genau die Themen ab, die im deutschen Lehrplan für die erste Klasse vorgesehen sind. Kinder können den Test so oft wiederholen wie sie möchten – ohne Anmeldung, ohne Download, einfach im Browser.`,
    deepDive: [
      `In der ersten Klasse steht das Kennenlernen der Zahlen von 1 bis 20 im Mittelpunkt. Kinder lernen, Zahlen zu schreiben, zu lesen und in der richtigen Reihenfolge anzuordnen. Sie üben das Zählen vorwärts und rückwärts, erkennen Mengen und ordnen diesen die richtige Zahl zu. Das Verständnis von Mengen ist fundamental – ob es darum geht, Äpfel auf einem Bild zu zählen oder Punkte auf einem Würfel zu erkennen.`,
      `Addition und Subtraktion bis 20 sind die wichtigsten Rechenoperationen in der ersten Klasse. Kinder lernen zunächst mit konkreten Gegenständen zu rechnen, bevor sie zur abstrakten Zahlrechnung übergehen. Aufgaben wie 5 + 3 = ? oder 12 – 4 = ? werden geübt, bis sie sicher beherrscht werden. Der Zahlenstrahl hilft dabei, das Addieren und Subtrahieren zu visualisieren.`,
      `Ordinalzahlen – also erste, zweite, dritte usw. – spielen im Alltag der Kinder eine wichtige Rolle. Wer kommt als Erster ins Ziel? Welcher Stift liegt an dritter Stelle? Diese Konzepte werden in Klasse 1 eingeführt. Außerdem lernen Kinder geometrische Grundformen kennen: Kreis, Dreieck, Viereck und weitere Figuren, die sie in ihrer Umgebung entdecken können.`,
      `Vergleichen von Zahlen und Mengen ist ebenfalls ein zentrales Thema: Welche Zahl ist größer, kleiner oder gleich? Die Zeichen > < = werden eingeführt und geübt. Dieser Grundstein ist wichtig für alle späteren Mathematikthemen. Unser Test prüft alle diese Bereiche mit kindgerechten, anschaulichen Aufgaben, die Spaß machen und gleichzeitig das Gelernte festigen.`,
    ],
    faqs: [
      { q: "Was lernt man in Mathe Klasse 1?", a: "In Klasse 1 lernen Kinder Zahlen bis 20 kennen, einfache Addition und Subtraktion, das Vergleichen von Mengen und Zahlen, Ordinalzahlen sowie grundlegende geometrische Formen wie Kreis, Dreieck und Viereck." },
      { q: "Ist der Mathe Test für Klasse 1 kostenlos?", a: "Ja, der Test ist vollständig kostenlos. Es ist keine Anmeldung und kein Download erforderlich – einfach im Browser starten und direkt loslegen." },
      { q: "Wie lange dauert ein Mathe Test für Klasse 1?", a: "Ein Test dauert je nach Einstellung zwischen 3 und 10 Minuten. Kinder können das Tempo selbst bestimmen und den Test jederzeit wiederholen." },
      { q: "Für welches Alter ist der Test für Klasse 1 geeignet?", a: "Der Test ist ideal für Kinder im Alter von 6–7 Jahren, also typische Erstklässler. Er kann auch als Vorbereitung für Zweitklässler genutzt werden, die Grundlagen wiederholen möchten." },
      { q: "Welche Themen werden in Klasse 1 geprüft?", a: "Der Test prüft: Zahlen bis 20, Addition und Subtraktion bis 20, Ordinalzahlen, Mengenvergleiche sowie das Erkennen geometrischer Grundformen." },
      { q: "Kann mein Kind den Test mehrmals machen?", a: "Ja, der Test kann beliebig oft wiederholt werden. Die Fragen werden dabei variiert, sodass immer neue Aufgaben erscheinen. Das fördert nachhaltiges Lernen." },
    ],
  },
  2: {
    age: "7–8",
    topics: [
      { icon: "💯", label: "Zahlen bis 100" },
      { icon: "➕", label: "Addition bis 100" },
      { icon: "➖", label: "Subtraktion bis 100" },
      { icon: "✖️", label: "Einmaleins (2, 5, 10)" },
      { icon: "📐", label: "Geometrie" },
      { icon: "⏰", label: "Uhrzeit & Zeit" },
    ],
    intro: `Der Mathe Test für Klasse 2 deckt alle wichtigen Themen ab, die im zweiten Schuljahr behandelt werden. Zweitklässler im Alter von etwa sieben bis acht Jahren erweitern ihren Zahlenraum auf 100 und lernen das kleine Einmaleins kennen. Unser kostenloser Online-Test hilft dabei, das Schulwissen zu festigen und eventuelle Lücken aufzudecken. Die Aufgaben sind abwechslungsreich gestaltet und orientieren sich am deutschen Grundschullehrplan. Eltern können mit dem Test schnell einschätzen, wie gut ihr Kind den Stoff der zweiten Klasse beherrscht – ohne Lehrbuch, ohne Vorbereitung, einfach sofort online üben.`,
    deepDive: [
      `In der zweiten Klasse wird der Zahlenraum erheblich erweitert: Kinder lernen alle Zahlen bis 100 kennen, lesen und schreiben. Sie ordnen Zahlen auf dem Zahlenstrahl an, erkennen Zehner und Einer und verstehen den Aufbau des Dezimalsystems. Aufgaben wie "Welche Zahl kommt nach 59?" oder "Ordne die Zahlen der Größe nach" sind typisch für dieses Schuljahr.`,
      `Addition und Subtraktion werden bis 100 ausgedehnt. Kinder lernen, auch mit Zehnerübergang zu rechnen – eine Herausforderung, die viele Übung erfordert. Aufgaben wie 47 + 38 = ? oder 83 – 27 = ? müssen sicher gelöst werden können. Unser Test enthält genau solche Aufgaben in unterschiedlichem Schwierigkeitsgrad.`,
      `Das kleine Einmaleins der 2er-, 5er- und 10er-Reihe wird in Klasse 2 eingeführt. Diese Grundlagen sind entscheidend für alle späteren Multiplikationsaufgaben. Kinder lernen die Reihen auswendig und verstehen den Zusammenhang zwischen Addition und Multiplikation: 3 × 2 bedeutet dreimal die Zahl 2, also 2 + 2 + 2 = 6.`,
      `Geometrie spielt ebenfalls eine wachsende Rolle: Kinder messen Längen in Zentimeter und Meter, zeichnen einfache Figuren und lernen die Eigenschaften von Dreiecken und Vierecken kennen. Die Uhrzeit – volle Stunden und halbe Stunden – wird in Klasse 2 eingeführt, ebenso wie einfache Zeitberechnungen. All diese Themen werden in unserem Test spielerisch abgefragt.`,
    ],
    faqs: [
      { q: "Was lernt man in Mathe Klasse 2?", a: "In Klasse 2 lernen Kinder Zahlen bis 100, Addition und Subtraktion bis 100 (auch mit Zehnerübergang), das kleine Einmaleins (2er, 5er, 10er Reihe), Längen messen, Geometrie und die Uhrzeit." },
      { q: "Ist der Mathe Test für Klasse 2 kostenlos?", a: "Ja, vollständig kostenlos. Kein Account, kein Download – einfach im Browser spielen." },
      { q: "Wie lange dauert ein Mathe Test für Klasse 2?", a: "Je nach Aufgabenanzahl dauert ein Durchgang 5–10 Minuten. Kinder können jederzeit erneut starten und ihren Score verbessern." },
      { q: "Für welches Alter ist Klasse 2 geeignet?", a: "Der Test richtet sich an Kinder im Alter von 7–8 Jahren. Er eignet sich auch als Wiederholung für Drittklässler." },
      { q: "Welche Themen werden in Klasse 2 geprüft?", a: "Zahlen bis 100, Addition/Subtraktion bis 100, kleines Einmaleins (2, 5, 10), Längen (cm, m), Uhrzeit (volle und halbe Stunden) und Grundformen der Geometrie." },
      { q: "Kann ich den Test mehrmals machen?", a: "Ja, der Test lässt sich beliebig oft wiederholen. Die Aufgaben variieren dabei automatisch." },
    ],
  },
  3: {
    age: "8–9",
    topics: [
      { icon: "✖️", label: "Einmaleins (1–10)" },
      { icon: "📝", label: "Schriftl. Rechnen" },
      { icon: "➗", label: "Einfache Division" },
      { icon: "📏", label: "Einheiten (m, km, kg)" },
      { icon: "⏰", label: "Uhrzeit & Kalender" },
      { icon: "💰", label: "Geldrechnung" },
    ],
    intro: `Der Mathe Test für Klasse 3 bereitet Schülerinnen und Schüler im Alter von acht bis neun Jahren optimal auf die Klassenarbeiten vor. Das dritte Schuljahr ist ein entscheidendes Jahr: Das vollständige Einmaleins wird gelernt und gefestigt, schriftliche Rechenverfahren werden eingeführt und die Kinder machen ihre ersten Schritte in der Division. Unser kostenloser Online-Test deckt alle relevanten Themen ab und hilft dabei, Wissenslücken frühzeitig zu erkennen. Besonders das Einmaleins lässt sich durch regelmäßiges Üben mit unserem Test schnell und sicher lernen – spielerisch und ohne Druck.`,
    deepDive: [
      `Das vollständige Einmaleins – alle Reihen von 1 bis 10 – ist das Herzstück des dritten Schuljahres. Kinder müssen die Multiplikationsaufgaben sicher und schnell beherrschen, da sie die Grundlage für alle weiteren mathematischen Operationen bilden. Unser Test prüft alle Reihen, beginnend mit den einfacheren (1er, 2er, 10er) bis zu den schwierigeren (7er, 8er, 9er). Regelmäßiges Üben ist entscheidend.`,
      `Schriftliche Addition und Subtraktion werden in Klasse 3 eingeführt. Kinder lernen, mehrstellige Zahlen untereinander zu schreiben und spaltenweise zu addieren oder zu subtrahieren – inklusive Übertrag. Dies ist eine wichtige Rechentechnik, die in den folgenden Schuljahren immer wieder angewendet wird. Der Zahlenraum erweitert sich dabei bis 1.000.`,
      `Die Division wird als Umkehrung der Multiplikation eingeführt. Aufgaben wie 24 ÷ 6 = ? oder 35 ÷ 5 = ? werden geübt. Kinder verstehen, dass Teilen das Aufteilen einer Menge in gleich große Gruppen bedeutet. Dieser Zusammenhang zwischen Multiplikation und Division ist fundamental für das mathematische Verständnis.`,
      `Maßeinheiten spielen in Klasse 3 eine größere Rolle: Meter und Kilometer für Längen, Kilogramm und Gramm für Gewichte, Liter und Milliliter für Flüssigkeiten. Kinder lernen, zwischen Einheiten umzurechnen und Alltagssituationen rechnerisch zu lösen. Außerdem wird die Uhrzeit vertieft – auch Viertelstunden und Minutenangaben – sowie der Umgang mit dem Kalender. All das prüft unser Klasse-3-Test.`,
    ],
    faqs: [
      { q: "Was lernt man in Mathe Klasse 3?", a: "Das vollständige Einmaleins (1–10), schriftliche Addition und Subtraktion bis 1.000, einfache Division, Maßeinheiten (m, km, kg, l) und die Uhrzeit mit Viertelstunden." },
      { q: "Ist der Mathe Test für Klasse 3 kostenlos?", a: "Ja, vollständig kostenlos und ohne Registrierung. Direkt im Browser starten." },
      { q: "Wie lange dauert ein Mathe Test für Klasse 3?", a: "Etwa 5–12 Minuten, je nach Anzahl der Aufgaben. Kinder können das Tempo selbst bestimmen." },
      { q: "Für welches Alter ist der Test für Klasse 3?", a: "Ideal für Kinder im Alter von 8–9 Jahren. Kann auch zur Vorbereitung auf Klasse 4 genutzt werden." },
      { q: "Welche Themen werden in Klasse 3 geprüft?", a: "Vollständiges Einmaleins, schriftliche Addition/Subtraktion, Division, Maßeinheiten und Uhrzeit/Kalender." },
      { q: "Kann ich den Test mehrmals machen?", a: "Ja, beliebig oft. Die Aufgaben werden automatisch variiert, sodass immer neue Übungen erscheinen." },
    ],
  },
  4: {
    age: "9–10",
    topics: [
      { icon: "✖️", label: "Schriftl. Multiplikation" },
      { icon: "➗", label: "Schriftl. Division" },
      { icon: "½", label: "Brüche (Hälfte/Viertel)" },
      { icon: "📐", label: "Umfang & Fläche" },
      { icon: "🔢", label: "Zahlen bis 1 Million" },
      { icon: "📏", label: "Größen & Einheiten" },
    ],
    intro: `Der Mathe Test für Klasse 4 bereitet Viertklässler im Alter von neun bis zehn Jahren auf die Grundschulabschluss-Anforderungen vor. In der vierten Klasse werden die Rechenoperationen erheblich komplexer: Schriftliche Multiplikation und Division mit mehrstelligen Zahlen, erste Brüche und die Berechnung von Umfang und Fläche stehen auf dem Lehrplan. Unser kostenloser Online-Test hilft Kindern, sich gezielt auf Klassenarbeiten vorzubereiten und den Übergang in die weiterführende Schule sicher zu meistern. Alle Themen des vierten Schuljahres sind abgedeckt.`,
    deepDive: [
      `Schriftliche Multiplikation ist ein Kernthema der vierten Klasse. Kinder lernen, zwei- und dreistellige Zahlen schriftlich mit einer einstelligen Zahl zu multiplizieren – später auch mit zweistelligen Multiplikatoren. Das schriftliche Verfahren erfordert ein sicheres Beherrschen des Einmaleins und ein Verständnis des Stellenwertsystems. Aufgaben wie 347 × 6 = ? oder 58 × 23 = ? sind typisch.`,
      `Die schriftliche Division ergänzt die Multiplikation als Umkehrung: Kinder lernen, vierstellige Zahlen durch einstellige Divisoren zu teilen, auch mit Rest. Das schrittweise Divisionsverfahren – dividieren, multiplizieren, subtrahieren, Rest übernehmen – wird systematisch geübt, bis es sicher sitzt.`,
      `Brüche werden in Klasse 4 eingeführt: Hälfte, Viertel und Achtel sind die ersten Brüche, die Kinder kennenlernen. Sie lernen, Brüche auf einem Zahlenstrahl darzustellen, zu vergleichen und einfache Bruchteile von Mengen zu berechnen. Das Verständnis, dass 1/2 die Hälfte eines Ganzen darstellt, bildet die Grundlage für alle späteren Bruchrechnungen.`,
      `Geometrie wird vertieft: Kinder berechnen Umfang und Flächeninhalt einfacher Figuren wie Rechteck und Quadrat. Die Formeln (Umfang = 2 × Länge + 2 × Breite; Fläche = Länge × Breite) werden eingeführt und angewendet. Der Zahlenraum erweitert sich auf Zahlen bis zu einer Million – das Lesen und Schreiben großer Zahlen sowie das Verständnis von Millionen werden geübt.`,
    ],
    faqs: [
      { q: "Was lernt man in Mathe Klasse 4?", a: "Schriftliche Multiplikation und Division, erste Brüche (Hälfte, Viertel, Achtel), Umfang und Flächenberechnung, Zahlen bis 1 Million sowie Maßeinheiten und Größenvergleiche." },
      { q: "Ist der Mathe Test für Klasse 4 kostenlos?", a: "Ja, komplett kostenlos. Keine Anmeldung, kein Download – sofort im Browser starten." },
      { q: "Wie lange dauert ein Mathe Test für Klasse 4?", a: "Ca. 8–15 Minuten, abhängig von der Aufgabenanzahl. Kinder können beliebig oft erneut starten." },
      { q: "Für welches Alter ist der Test für Klasse 4?", a: "Optimal für 9–10-jährige Kinder. Ideal zur Vorbereitung auf den Übertritt in die weiterführende Schule." },
      { q: "Welche Themen werden in Klasse 4 geprüft?", a: "Schriftliche Multiplikation/Division, Brüche, Umfang und Fläche, große Zahlen bis 1 Million und Einheitenumrechnungen." },
      { q: "Kann ich den Test mehrmals machen?", a: "Ja, der Test lässt sich beliebig oft wiederholen mit automatisch variierenden Aufgaben." },
    ],
  },
  5: {
    age: "10–11",
    topics: [
      { icon: "🔢", label: "Zahlen bis Millionen" },
      { icon: "🔢", label: "Negative Zahlen" },
      { icon: "💧", label: "Dezimalzahlen" },
      { icon: "½", label: "Brüche (Add/Sub)" },
      { icon: "📊", label: "Koordinatensystem" },
      { icon: "📐", label: "Geometrie & Flächen" },
    ],
    intro: `Der Mathe Test für Klasse 5 markiert den Übergang in die Sekundarstufe und bereitet Schülerinnen und Schüler im Alter von zehn bis elf Jahren auf die deutlich anspruchsvolleren Inhalte der weiterführenden Schule vor. Der Zahlenraum wird stark erweitert, Dezimalzahlen und negative Zahlen kommen hinzu, und Brüche werden vertieft. Unser kostenloser Online-Test hilft dabei, alle neuen Konzepte zu festigen und den Unterricht optimal zu ergänzen – ohne Registrierung, sofort verfügbar.`,
    deepDive: [
      `Natürliche Zahlen werden in Klasse 5 bis in den Millionenbereich ausgedehnt. Kinder lernen, sehr große Zahlen zu lesen, zu schreiben und zu ordnen. Das Verständnis des Stellenwertsystems – Einer, Zehner, Hunderter, Tausender, Zehntausender, Hunderttausender, Millionen – wird vertieft. Rundungsregeln werden systematisch eingeführt.`,
      `Dezimalzahlen sind ein zentrales neues Thema: Was bedeutet 3,7? Wie rechne ich 4,5 + 2,8? Kinder lernen, Dezimalzahlen auf dem Zahlenstrahl darzustellen, zu vergleichen, zu addieren und zu subtrahieren. Der Zusammenhang zwischen Brüchen und Dezimalzahlen (1/2 = 0,5; 1/4 = 0,25) wird erarbeitet.`,
      `Negative Zahlen werden als Erweiterung des Zahlenstrahls eingeführt. Temperaturen unter Null, Schulden oder Höhen unter dem Meeresspiegel sind anschauliche Beispiele. Kinder lernen, negative Zahlen zu ordnen und einfache Rechnungen mit ihnen durchzuführen. Das Addieren und Subtrahieren von ganzen Zahlen (positiv und negativ) wird systematisch geübt.`,
      `Brüche werden vertieft: Addition und Subtraktion von Brüchen mit gleichen Nennern, Kürzen und Erweitern. Das Koordinatensystem wird eingeführt – Punkte mit positiven und negativen Koordinaten eintragen und ablesen. Geometrie umfasst Flächenberechnungen verschiedener Figuren. All diese Themen finden sich in unserem umfangreichen Klasse-5-Test.`,
    ],
    faqs: [
      { q: "Was lernt man in Mathe Klasse 5?", a: "Zahlen bis zu Millionen, Dezimalzahlen, negative Zahlen (ganze Zahlen), Brüche (Addition/Subtraktion), das Koordinatensystem und Geometrie (Flächen verschiedener Figuren)." },
      { q: "Ist der Mathe Test für Klasse 5 kostenlos?", a: "Ja, vollständig kostenlos. Kein Account nötig – direkt im Browser starten." },
      { q: "Wie lange dauert ein Mathe Test für Klasse 5?", a: "Etwa 8–15 Minuten. Der Test kann beliebig oft wiederholt werden." },
      { q: "Für welches Alter ist der Test für Klasse 5?", a: "Für Schülerinnen und Schüler im Alter von 10–11 Jahren, also typische Fünftklässler." },
      { q: "Welche Themen werden in Klasse 5 geprüft?", a: "Große natürliche Zahlen, Dezimalzahlen, negative Zahlen, Bruchrechnung, Koordinatensystem und Flächenberechnung." },
      { q: "Kann ich den Test mehrmals machen?", a: "Ja, mit automatisch wechselnden Aufgaben – ideal für kontinuierliches Üben." },
    ],
  },
  6: {
    age: "11–12",
    topics: [
      { icon: "½", label: "Brüche (alle Ops.)" },
      { icon: "📉", label: "Rationale Zahlen" },
      { icon: "⚖️", label: "Proportionen" },
      { icon: "🔄", label: "Dreisatz" },
      { icon: "%", label: "Prozentrechnung" },
      { icon: "🔢", label: "Primzahlen & Teiler" },
    ],
    intro: `Der Mathe Test für Klasse 6 richtet sich an Schülerinnen und Schüler im Alter von elf bis zwölf Jahren und deckt alle wichtigen Themen des sechsten Schuljahres ab. Bruchrechnung wird vollständig eingeführt, rationale Zahlen erweitern den Zahlenraum und erste Konzepte wie Proportionen, Dreisatz und Prozentrechnung bereiten auf die höheren Klassen vor. Unser kostenloser Test hilft dabei, diese anspruchsvollen Themen regelmäßig zu üben und sicherer zu werden – spielerisch, ohne Anmeldung.`,
    deepDive: [
      `Die vollständige Bruchrechnung ist das Herzstück der sechsten Klasse. Kinder lernen nicht nur Addition und Subtraktion von Brüchen mit verschiedenen Nennern (Hauptnenner finden, Erweitern), sondern auch Multiplikation und Division von Brüchen. "Zähler mal Zähler, Nenner mal Nenner" für die Multiplikation und "Kehrwert und dann multiplizieren" für die Division – diese Regeln müssen sicher sitzen.`,
      `Rationale Zahlen – also alle Brüche und ihre negativen Entsprechungen – erweitern den Zahlenraum erheblich. Kinder lernen, rationale Zahlen auf dem Zahlenstrahl darzustellen, zu vergleichen und die Grundrechenarten mit ihnen durchzuführen. Das Verständnis von Gegenzahlen und absoluten Werten wird eingeführt.`,
      `Proportionen und der Dreisatz sind wichtige Anwendungsthemen: Wenn 3 Liter Saft 2,40 Euro kosten, was kosten dann 5 Liter? Diese Art von Aufgaben trainiert logisches Denken und die Anwendung von Mathematik im Alltag. Direkte und indirekte Proportionen werden unterschieden und geübt.`,
      `Prozentrechnung wird grundlegend eingeführt: Was bedeutet Prozent? Wie berechne ich Prozentwert, Prozentsatz und Grundwert? Alltagsbeispiele wie Rabatte, Mehrwertsteuer oder Testergebnisse machen das Thema greifbar. Primzahlen und das Konzept von Teilern und Vielfachen runden das Curriculum der sechsten Klasse ab.`,
    ],
    faqs: [
      { q: "Was lernt man in Mathe Klasse 6?", a: "Vollständige Bruchrechnung (alle vier Grundoperationen), rationale Zahlen, Proportionen, Dreisatz, grundlegende Prozentrechnung sowie Primzahlen und Teilbarkeitsregeln." },
      { q: "Ist der Mathe Test für Klasse 6 kostenlos?", a: "Ja, vollständig kostenlos und ohne Registrierung. Direkt im Browser nutzbar." },
      { q: "Wie lange dauert ein Mathe Test für Klasse 6?", a: "Etwa 10–15 Minuten pro Durchgang. Beliebig wiederholbar." },
      { q: "Für welches Alter ist der Test für Klasse 6?", a: "Für Schülerinnen und Schüler im Alter von 11–12 Jahren." },
      { q: "Welche Themen werden in Klasse 6 geprüft?", a: "Bruchrechnung (alle Operationen), rationale Zahlen, Proportionen, Dreisatz und Prozentrechnung." },
      { q: "Kann ich den Test mehrmals machen?", a: "Ja, der Test kann beliebig oft wiederholt werden." },
    ],
  },
  7: {
    age: "12–13",
    topics: [
      { icon: "🔣", label: "Lineare Gleichungen" },
      { icon: "%", label: "Prozentrechnung" },
      { icon: "📐", label: "Geometrie & Winkel" },
      { icon: "🔺", label: "Dreiecke & Kreise" },
      { icon: "📊", label: "Statistik" },
      { icon: "🔢", label: "Proportionale Zuordnung" },
    ],
    intro: `Der Mathe Test für Klasse 7 richtet sich an Schülerinnen und Schüler im Alter von zwölf bis dreizehn Jahren und behandelt die anspruchsvollen Themen des siebten Schuljahres. Lineare Gleichungen, vertiefte Prozentrechnung, Geometrie mit Dreiecken und Kreisen sowie Grundlagen der Statistik stehen auf dem Lehrplan. Unser kostenloser Online-Test bietet gezielte Übungsmöglichkeiten für alle diese Themen – ohne Anmeldung, ohne Download, direkt im Browser.`,
    deepDive: [
      `Lineare Gleichungen sind das zentrale neue Konzept in Klasse 7. Kinder lernen, Gleichungen der Form 2x + 3 = 11 systematisch zu lösen – durch Umformen nach der Waage-Methode. Das Ziel ist immer, die Variable x zu isolieren. Dabei werden Äquivalenzumformungen eingeführt: Was ich auf einer Seite mache, muss ich auch auf der anderen tun.`,
      `Prozentrechnung wird erheblich vertieft: Prozentsatz, Prozentwert und Grundwert können alle drei berechnet werden. Dazu kommen Prozentrechnung mit Zinsen (einfache Zinsrechnung) und Anwendungen wie Rabatte, Preiserhöhungen und Mehrwertsteuer. Diese Themen sind hochgradig alltagsrelevant und werden im Test mit realitätsnahen Aufgaben abgefragt.`,
      `Geometrie umfasst in Klasse 7 Winkelarten und Winkelsummen, die Berechnung von Dreiecken (Flächeninhalt, Umfang, Winkelsumme = 180°) und ersten Kreis-Rechnungen (Umfang = π × d; Fläche = π × r²). Das Verständnis von kongruenten Figuren und Symmetrie wird ebenfalls vertieft.`,
      `Statistik als neues Themengebiet: Kinder lernen, Daten zu erheben, in Tabellen und Diagrammen darzustellen und statistische Kennwerte wie Mittelwert, Median und Modalwert zu berechnen. Proportionale und antiproportionale Zuordnungen werden mit Wertetabellen und Graphen dargestellt. Unser Klasse-7-Test prüft alle diese Bereiche mit abwechslungsreichen Aufgaben.`,
    ],
    faqs: [
      { q: "Was lernt man in Mathe Klasse 7?", a: "Lineare Gleichungen, vertiefte Prozentrechnung (Zinsrechnung), Geometrie (Winkel, Dreiecke, Kreisfläche), Statistik (Mittelwert, Median) und proportionale/antiproportionale Zuordnungen." },
      { q: "Ist der Mathe Test für Klasse 7 kostenlos?", a: "Ja, vollständig kostenlos. Keine Anmeldung erforderlich." },
      { q: "Wie lange dauert ein Mathe Test für Klasse 7?", a: "Etwa 10–20 Minuten pro Durchgang." },
      { q: "Für welches Alter ist der Test für Klasse 7?", a: "Für Schülerinnen und Schüler im Alter von 12–13 Jahren." },
      { q: "Welche Themen werden in Klasse 7 geprüft?", a: "Lineare Gleichungen, Prozentrechnung, Geometrie (Winkel, Dreiecke, Kreise) und Statistik." },
      { q: "Kann ich den Test mehrmals machen?", a: "Ja, beliebig oft – Aufgaben variieren automatisch." },
    ],
  },
  8: {
    age: "13–14",
    topics: [
      { icon: "🔣", label: "Gleichungssysteme" },
      { icon: "²", label: "Quadratische Gleichungen" },
      { icon: "📐", label: "Satz des Pythagoras" },
      { icon: "🎲", label: "Wahrscheinlichkeit" },
      { icon: "📈", label: "Funktionen" },
      { icon: "📊", label: "Statistik vertieft" },
    ],
    intro: `Der Mathe Test für Klasse 8 richtet sich an Schülerinnen und Schüler im Alter von dreizehn bis vierzehn Jahren und behandelt die komplexen Themen des achten Schuljahres. Gleichungssysteme, erste quadratische Gleichungen, der Satz des Pythagoras, Wahrscheinlichkeitsrechnung und lineare Funktionen sind die großen Themenblöcke. Unser kostenloser Online-Test hilft dabei, diese anspruchsvollen Inhalte systematisch zu üben und Klassenarbeiten sicher zu bestehen.`,
    deepDive: [
      `Gleichungssysteme mit zwei Unbekannten sind ein neues Konzept in Klasse 8. Kinder lernen, zwei Gleichungen mit zwei Variablen (x und y) zu lösen – durch Substitutions- oder Additionsverfahren. Typische Aufgaben lauten: Löse das Gleichungssystem 2x + y = 8 und x – y = 1. Das systematische Umformen und Einsetzen wird schrittweise erlernt.`,
      `Quadratische Gleichungen werden eingeführt: Was ist x², warum kann es zwei Lösungen geben? Einfache quadratische Gleichungen der Form x² = 9 oder x² – 4 = 0 werden durch Wurzelziehen gelöst. Die Verbindung zu quadratischen Funktionen (Parabeln) wird hergestellt und erste Graphen werden skizziert.`,
      `Der Satz des Pythagoras ist eines der bekanntesten Theoreme der Mathematik: a² + b² = c². In Klasse 8 lernen Schüler, ihn anzuwenden – zur Berechnung der fehlenden Seite eines rechtwinkligen Dreiecks, bei Aufgaben aus dem Alltag (Leitern, Entfernungen) und als Basis für spätere trigonometrische Berechnungen.`,
      `Wahrscheinlichkeitsrechnung wird systematisch eingeführt: Was bedeutet Zufall? Wie berechne ich die Wahrscheinlichkeit eines Ereignisses? Laplace-Experimente, Baumdiagramme und einfache kombinatorische Überlegungen sind die Grundwerkzeuge. Lineare Funktionen (y = mx + b) werden mit Steigung und y-Achsenabschnitt analysiert, in Koordinatensysteme gezeichnet und auf reale Situationen angewendet.`,
    ],
    faqs: [
      { q: "Was lernt man in Mathe Klasse 8?", a: "Gleichungssysteme, Einführung in quadratische Gleichungen, Satz des Pythagoras, Wahrscheinlichkeitsrechnung, lineare Funktionen (y = mx + b) und vertiefte Statistik." },
      { q: "Ist der Mathe Test für Klasse 8 kostenlos?", a: "Ja, vollständig kostenlos und ohne Anmeldung." },
      { q: "Wie lange dauert ein Mathe Test für Klasse 8?", a: "Etwa 10–20 Minuten, je nach Aufgabenanzahl." },
      { q: "Für welches Alter ist der Test für Klasse 8?", a: "Für Schülerinnen und Schüler im Alter von 13–14 Jahren." },
      { q: "Welche Themen werden in Klasse 8 geprüft?", a: "Gleichungssysteme, quadratische Gleichungen, Satz des Pythagoras, Wahrscheinlichkeit und lineare Funktionen." },
      { q: "Kann ich den Test mehrmals machen?", a: "Ja, beliebig oft mit automatisch variierenden Aufgaben." },
    ],
  },
};

// ─── COMPONENT ────────────────────────────────────────────────────────────────
export default function MatheTestKlasse({ grade }: { grade: number }) {
  const data = GRADE_DATA[grade];
  if (!data) return null;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Startseite", item: "https://plizio.com/" },
      { "@type": "ListItem", position: 2, name: "Mathe Test", item: "https://plizio.com/mathe-test/" },
      { "@type": "ListItem", position: 3, name: `Klasse ${grade}`, item: `https://plizio.com/mathe-test/klasse-${grade}/` },
    ],
  };

  return (
    <main
      className="min-h-screen"
      style={{ background: "var(--color-bg, #0A0A1A)", color: "white" }}
    >
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="max-w-3xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-white/40 mb-6">
          <a href="/" className="hover:text-white/70 transition-colors">Startseite</a>
          <span>›</span>
          <a href="/mathe-test/" className="hover:text-white/70 transition-colors">Mathe Test</a>
          <span>›</span>
          <span className="text-white/70">Klasse {grade}</span>
        </nav>

        {/* Hero */}
        <div className="mb-8">
          <div className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-3"
            style={{ background: "rgba(0,212,255,0.1)", color: "#00D4FF", border: "1px solid rgba(0,212,255,0.25)" }}>
            Klasse {grade} · Alter {data.age} Jahre · Kostenlos
          </div>
          <h1 className="text-3xl sm:text-4xl font-black mb-4 leading-tight">
            Mathe Test Klasse {grade} Online{" "}
            <span style={{ color: "#00FF88" }}>– Kostenlos Üben</span>
          </h1>
          <p className="text-white/65 text-base leading-relaxed">{data.intro}</p>

          {/* CTA */}
          <a
            href="/mathtest"
            className="inline-flex items-center gap-2 mt-5 px-6 py-3 rounded-2xl font-black text-black text-sm"
            style={{ background: "linear-gradient(135deg, #00FF88, #00D4FF)" }}
          >
            ▶ Test jetzt starten – Klasse {grade}
          </a>
        </div>

        {/* Topics */}
        <section className="mb-8">
          <h2 className="text-xl font-black mb-4" style={{ color: "#00D4FF" }}>
            Themen in Klasse {grade}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {data.topics.map((t, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-semibold"
                style={{ background: "var(--color-card, #12122A)", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <span className="text-lg">{t.icon}</span>
                <span className="text-white/80">{t.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section className="mb-8 p-5 rounded-2xl" style={{ background: "var(--color-card, #12122A)", border: "1px solid rgba(255,255,255,0.07)" }}>
          <h2 className="text-xl font-black mb-3" style={{ color: "#FFD700" }}>
            Wie funktioniert der Test?
          </h2>
          <div className="space-y-2 text-white/65 text-sm leading-relaxed">
            <p>Der Mathe Test startet sofort – ohne Anmeldung, ohne Download, direkt im Browser. Wähle deine Klassenstufe aus und beantworte die Aufgaben in deinem eigenen Tempo. Jede richtige Antwort bringt Punkte, nach dem Test siehst du dein Ergebnis und kannst direkt erneut starten.</p>
            <p>Alle Aufgaben basieren auf dem deutschen Grundschul- und Sekundarschullehrplan. Die Schwierigkeitsstufen steigen innerhalb des Tests an, sodass du deinen Fortschritt gut einschätzen kannst. Eltern und Lehrer können den Test nutzen, um den aktuellen Wissensstand zu überprüfen.</p>
          </div>
        </section>

        {/* Deep dive */}
        <section className="mb-8">
          <h2 className="text-xl font-black mb-4" style={{ color: "#B44DFF" }}>
            Lernstoff Klasse {grade} im Detail
          </h2>
          <div className="space-y-4">
            {data.deepDive.map((para, i) => (
              <p key={i} className="text-white/65 text-sm leading-relaxed">{para}</p>
            ))}
          </div>
        </section>

        {/* Tipps fürs Üben */}
        <section className="mb-8 p-5 rounded-2xl" style={{ background: "rgba(0,255,136,0.04)", border: "1px solid rgba(0,255,136,0.12)" }}>
          <h2 className="text-xl font-black mb-3" style={{ color: "#00FF88" }}>
            Tipps für effektives Üben in Klasse {grade}
          </h2>
          <ul className="space-y-2 text-white/65 text-sm list-disc list-inside leading-relaxed">
            <li>Täglich 10–15 Minuten üben ist effektiver als einmal in der Woche eine Stunde.</li>
            <li>Starte mit den Themen, die dir am schwierigsten fallen – so nutzt du frische Konzentration.</li>
            <li>Fehler sind Lernchancen: Überlege nach jedem Fehler, warum die richtige Antwort stimmt.</li>
            <li>Nutze unseren Test als Vorbereitung auf Klassenarbeiten – mach mehrere Durchgänge hintereinander.</li>
            <li>Vergleiche deine Ergebnisse über Zeit – Verbesserungen motivieren!</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-8">
          <h2 className="text-xl font-black mb-4" style={{ color: "#FF2D78" }}>
            Häufige Fragen – Mathe Klasse {grade}
          </h2>
          <div className="space-y-4">
            {data.faqs.map((faq, i) => (
              <div
                key={i}
                className="p-4 rounded-xl"
                style={{ background: "var(--color-card, #12122A)", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <h3 className="font-bold text-white mb-1.5 text-sm">{faq.q}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related grades */}
        <section className="mb-8">
          <h2 className="text-lg font-black mb-3 text-white/50">Andere Klassen</h2>
          <div className="flex flex-wrap gap-2">
            {[1,2,3,4,5,6,7,8].filter(n => n !== grade).map(n => (
              <a key={n} href={`/mathe-test/klasse-${n}/`}
                className="px-4 py-2 rounded-xl text-sm font-bold"
                style={{ background: "rgba(0,212,255,0.08)", color: "#00D4FF", border: "1px solid rgba(0,212,255,0.2)" }}>
                Klasse {n}
              </a>
            ))}
            <a href="/mathe-test/" className="px-4 py-2 rounded-xl text-sm font-bold"
              style={{ background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.4)", border: "1px solid rgba(255,255,255,0.1)" }}>
              ← Übersicht
            </a>
          </div>
        </section>

        {/* Related educational games */}
        <section className="mb-8">
          <h2 className="text-lg font-black mb-3 text-white/50">Verwandte Lernspiele</h2>
          <div className="flex flex-wrap gap-2">
            {[
              { name: "🧮 Math Test spielen", href: "/mathtest/" },
              { name: "🔐 Kódex Expedíció", href: "/kodex/" },
              { name: "🔀 Word Scramble", href: "/wordscramble/" },
              { name: "⚡ Quick Pick", href: "/quickpick/" },
            ].map(g => (
              <a key={g.href} href={g.href}
                className="px-4 py-2 rounded-xl text-sm font-bold"
                style={{ background: "rgba(0,255,136,0.08)", color: "#00FF88", border: "1px solid rgba(0,255,136,0.2)" }}>
                {g.name}
              </a>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="text-center pt-4 pb-8">
          <p className="text-white/40 text-sm mb-4">
            Bereit für den Mathe Test Klasse {grade}? Starte jetzt kostenlos!
          </p>
          <a
            href="/mathtest"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-black text-black text-base"
            style={{ background: "linear-gradient(135deg, #00FF88, #00D4FF)" }}
          >
            🚀 Test starten – Klasse {grade}
          </a>
          <div className="mt-4 text-white/25 text-xs">
            Kostenlos · Kein Account · Sofort verfügbar
          </div>
        </div>
      </div>
    </main>
  );
}
