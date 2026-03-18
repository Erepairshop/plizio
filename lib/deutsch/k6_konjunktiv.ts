import type { DeutschTheme } from "./types";

export const K6_KONJUNKTIV: DeutschTheme[] = [
  {
    id: "konjunktiv_k6",
    name: "Konjunktiv II",
    color: "#8B5CF6",
    icon: "🌙",
    subtopics: [
      {
        id: "konjunktiv2_formen_k6",
        name: "Konjunktiv II Formen",
        questions: [
          // MCQ 1
          { type: "mcq", topic: "konjunktiv_k6", subtopic: "konjunktiv2_formen_k6", question: "Was ist die Konjunktiv-II-Form von 'sein' (er)?", options: ["sei", "wäre", "ist", "war"], correct: 1 },
          // MCQ 2
          { type: "mcq", topic: "konjunktiv_k6", subtopic: "konjunktiv2_formen_k6", question: "Was ist die Konjunktiv-II-Form von 'haben' (ich)?", options: ["habe", "hatte", "hätte", "haben"], correct: 2 },
          // Typing 3
          { type: "typing", topic: "konjunktiv_k6", subtopic: "konjunktiv2_formen_k6", question: "Wie lautet die Konjunktiv-II-Form von 'können' (er)?", answer: "könnte" },
          // MCQ 4
          { type: "mcq", topic: "konjunktiv_k6", subtopic: "konjunktiv2_formen_k6", question: "Welche Form ist der Konjunktiv II von 'müssen' (wir)?", options: ["müssen", "mussten", "müssten", "müsstet"], correct: 2 },
          // Typing 5
          { type: "typing", topic: "konjunktiv_k6", subtopic: "konjunktiv2_formen_k6", question: "Wie lautet die Konjunktiv-II-Form von 'dürfen' (du)?", answer: "dürftest" },
          // MCQ 6
          { type: "mcq", topic: "konjunktiv_k6", subtopic: "konjunktiv2_formen_k6", question: "Konjunktiv II: 'sollen' (sie, Plural)?", options: ["sollen", "sollten", "sollten", "söllten"], correct: 1 },
          // Typing 7
          { type: "typing", topic: "konjunktiv_k6", subtopic: "konjunktiv2_formen_k6", question: "Ergänze den Konjunktiv II: Ich ___ (mögen) gern einen Kaffee.", answer: ["möchte"] },
          // MCQ 8
          { type: "mcq", topic: "konjunktiv_k6", subtopic: "konjunktiv2_formen_k6", question: "Was ist die Konjunktiv-II-Form von 'wollen' (er)?", options: ["will", "wollte", "wöllte", "wolle"], correct: 1 },
          // Typing 9
          { type: "typing", topic: "konjunktiv_k6", subtopic: "konjunktiv2_formen_k6", question: "Wie bildet man den Konjunktiv II mit 'würde'? Beispiel: 'ich gehen' → ?", answer: ["ich würde gehen"] },
          // MCQ 10
          { type: "mcq", topic: "konjunktiv_k6", subtopic: "konjunktiv2_formen_k6", question: "Welche Konstruktion ersetzt den Konjunktiv II bei schwachen Verben?", options: ["haben + Infinitiv", "würde + Infinitiv", "sein + Partizip II", "zu + Infinitiv"], correct: 1 },
          // Typing 11
          { type: "typing", topic: "konjunktiv_k6", subtopic: "konjunktiv2_formen_k6", question: "Konjunktiv II von 'sein' (ihr):", answer: "wäret" },
          // MCQ 12
          { type: "mcq", topic: "konjunktiv_k6", subtopic: "konjunktiv2_formen_k6", question: "Konjunktiv II von 'haben' (du)?", options: ["hättest", "hattest", "habest", "hast"], correct: 0 },
          // Typing 13
          { type: "typing", topic: "konjunktiv_k6", subtopic: "konjunktiv2_formen_k6", question: "Bilde den Konjunktiv II: 'Er kommt.' → Er ___ (mit würde).", answer: ["würde kommen"] },
          // MCQ 14
          { type: "mcq", topic: "konjunktiv_k6", subtopic: "konjunktiv2_formen_k6", question: "Welche Form ist falsch als Konjunktiv II?", options: ["wäre", "könnte", "gehet", "hätte"], correct: 2 },
          // Typing 15
          { type: "typing", topic: "konjunktiv_k6", subtopic: "konjunktiv2_formen_k6", question: "Konjunktiv II von 'können' (wir):", answer: "könnten" },
          // MCQ 16
          { type: "mcq", topic: "konjunktiv_k6", subtopic: "konjunktiv2_formen_k6", question: "Konjunktiv II von 'müssen' (du)?", options: ["musstest", "müsstest", "müssen", "musst"], correct: 1 },
          // Typing 17
          { type: "typing", topic: "konjunktiv_k6", subtopic: "konjunktiv2_formen_k6", question: "Konjunktiv II von 'dürfen' (er):", answer: "dürfte" },
          // MCQ 18
          { type: "mcq", topic: "konjunktiv_k6", subtopic: "konjunktiv2_formen_k6", question: "Konjunktiv II von 'sein' (ich)?", options: ["bin", "war", "wäre", "sei"], correct: 2 },
          // Typing 19
          { type: "typing", topic: "konjunktiv_k6", subtopic: "konjunktiv2_formen_k6", question: "Konjunktiv II von 'sollen' (ich):", answer: "sollte" },
          // MCQ 20
          { type: "mcq", topic: "konjunktiv_k6", subtopic: "konjunktiv2_formen_k6", question: "Konjunktiv II von 'wollen' (wir)?", options: ["wollen", "wollten", "wöllten", "wolltet"], correct: 1 },
          // Typing 21
          { type: "typing", topic: "konjunktiv_k6", subtopic: "konjunktiv2_formen_k6", question: "Konjunktiv II von 'mögen' (ich) — Wunschform:", answer: "möchte" },
          // MCQ 22
          { type: "mcq", topic: "konjunktiv_k6", subtopic: "konjunktiv2_formen_k6", question: "Welches Verb hat im Konjunktiv II keinen Umlaut?", options: ["haben → hätte", "sollen → sollte", "können → könnte", "müssen → müsste"], correct: 1 },
          // Typing 23
          { type: "typing", topic: "konjunktiv_k6", subtopic: "konjunktiv2_formen_k6", question: "Ergänze: Sie ___ (sein, Konjunktiv II, Plural) glücklich.", answer: "wären" },
          // MCQ 24
          { type: "mcq", topic: "konjunktiv_k6", subtopic: "konjunktiv2_formen_k6", question: "Konjunktiv II von 'haben' (sie, Plural)?", options: ["hatten", "hätten", "haben", "habe"], correct: 1 },
          // Typing 25
          { type: "typing", topic: "konjunktiv_k6", subtopic: "konjunktiv2_formen_k6", question: "Bilde den Konjunktiv II mit würde: 'Du schreibst.' →", answer: ["Du würdest schreiben"] },
          // MCQ 26
          { type: "mcq", topic: "konjunktiv_k6", subtopic: "konjunktiv2_formen_k6", question: "Welche Form von 'können' ist korrekt im Konjunktiv II (ihr)?", options: ["könntet", "konntet", "könnt", "könntest"], correct: 0 },
          // Typing 27
          { type: "typing", topic: "konjunktiv_k6", subtopic: "konjunktiv2_formen_k6", question: "Konjunktiv II von 'dürfen' (wir):", answer: "dürften" },
          // MCQ 28
          { type: "mcq", topic: "konjunktiv_k6", subtopic: "konjunktiv2_formen_k6", question: "Was ist die Konjunktiv-II-Form von 'wollen' (du)?", options: ["willst", "wolltest", "wölltest", "wollst"], correct: 1 },
          // Typing 29
          { type: "typing", topic: "konjunktiv_k6", subtopic: "konjunktiv2_formen_k6", question: "Konjunktiv II von 'müssen' (sie, Sg.):", answer: "müsste" },
          // MCQ 30
          { type: "mcq", topic: "konjunktiv_k6", subtopic: "konjunktiv2_formen_k6", question: "Welche Aussage über den Konjunktiv II ist richtig?", options: ["Er drückt etwas Reales aus.", "Er drückt Irreales oder Höfliches aus.", "Er wird nur in Fragen verwendet.", "Er ersetzt immer das Perfekt."], correct: 1 },
        ],
      },
      {
        id: "konjunktiv2_hoeflichkeit_k6",
        name: "Konjunktiv II Höflichkeit",
        questions: [
          // MCQ 1
          { type: "mcq", topic: "konjunktiv_k6", subtopic: "konjunktiv2_hoeflichkeit_k6", question: "Welcher Satz ist eine höfliche Bitte im Konjunktiv II?", options: ["Gib mir das Salz!", "Können Sie mir das Salz geben?", "Könnten Sie mir das Salz geben?", "Geben Sie mir das Salz sofort!"], correct: 2 },
          // Typing 2
          { type: "typing", topic: "konjunktiv_k6", subtopic: "konjunktiv2_hoeflichkeit_k6", question: "Formuliere höflich: 'Öffnen Sie das Fenster!' → ___ Sie bitte das Fenster öffnen?", answer: ["Könnten", "Würden"] },
          // MCQ 3
          { type: "mcq", topic: "konjunktiv_k6", subtopic: "konjunktiv2_hoeflichkeit_k6", question: "Welche Form passt: '___ ich kurz telefonieren?'", options: ["Darf", "Dürfte", "Dürfen", "Dürftest"], correct: 1 },
          // Typing 4
          { type: "typing", topic: "konjunktiv_k6", subtopic: "konjunktiv2_hoeflichkeit_k6", question: "Ergänze die höfliche Frage: ___ Sie mir bitte helfen?", answer: ["Könnten", "Würden"] },
          // MCQ 5
          { type: "mcq", topic: "konjunktiv_k6", subtopic: "konjunktiv2_hoeflichkeit_k6", question: "Was drückt 'Hätten Sie einen Moment Zeit?' aus?", options: ["Eine Behauptung", "Eine höfliche Bitte/Frage", "Einen Befehl", "Eine Vermutung"], correct: 1 },
          // Typing 6
          { type: "typing", topic: "konjunktiv_k6", subtopic: "konjunktiv2_hoeflichkeit_k6", question: "Wie fragt man höflich nach dem Weg? Ergänze: ___ Sie mir sagen, wo der Bahnhof ist?", answer: ["Könnten", "Würden"] },
          // MCQ 7
          { type: "mcq", topic: "konjunktiv_k6", subtopic: "konjunktiv2_hoeflichkeit_k6", question: "Welcher Satz klingt am höflichsten?", options: ["Ich will ein Glas Wasser.", "Ich hätte gern ein Glas Wasser.", "Gib mir Wasser!", "Wasser, bitte."], correct: 1 },
          // Typing 8
          { type: "typing", topic: "konjunktiv_k6", subtopic: "konjunktiv2_hoeflichkeit_k6", question: "Bitte höflich um Erlaubnis (Konjunktiv II): ___ ich das Buch nehmen?", answer: "Dürfte" },
          // MCQ 9
          { type: "mcq", topic: "konjunktiv_k6", subtopic: "konjunktiv2_hoeflichkeit_k6", question: "Konjunktiv II in der Bitte: 'Würden Sie bitte...' — Was folgt danach?", options: ["Partizip II", "Infinitiv", "Konjunktiv I", "Präteritum"], correct: 1 },
          // Typing 10
          { type: "typing", topic: "konjunktiv_k6", subtopic: "konjunktiv2_hoeflichkeit_k6", question: "Schreibe eine höfliche Bitte: 'Du sollst die Tür schließen.' → ___ du bitte die Tür schließen?", answer: ["Könntest", "Würdest"] },
          // MCQ 11
          { type: "mcq", topic: "konjunktiv_k6", subtopic: "konjunktiv2_hoeflichkeit_k6", question: "Was bedeutet: 'Ich hätte gern einen Kaffee.'?", options: ["Ich habe einen Kaffee bekommen.", "Ich möchte höflich einen Kaffee bestellen.", "Ich hatte früher Kaffee.", "Ich kann keinen Kaffee trinken."], correct: 1 },
          // Typing 11
          { type: "typing", topic: "konjunktiv_k6", subtopic: "konjunktiv2_hoeflichkeit_k6", question: "Ergänze: ___ Sie mir bitte Ihren Ausweis zeigen?", answer: ["Könnten", "Würden"] },
          // MCQ 13
          { type: "mcq", topic: "konjunktiv_k6", subtopic: "konjunktiv2_hoeflichkeit_k6", question: "Welche Frage ist mit Konjunktiv II gebildet?", options: ["Können Sie helfen?", "Könnten Sie helfen?", "Haben Sie geholfen?", "Werden Sie helfen?"], correct: 1 },
          // Typing 14
          { type: "typing", topic: "konjunktiv_k6", subtopic: "konjunktiv2_hoeflichkeit_k6", question: "Formuliere höflich: 'Ich will das wissen.' → Ich ___ das gern wissen.", answer: "würde" },
          // MCQ 15
          { type: "mcq", topic: "konjunktiv_k6", subtopic: "konjunktiv2_hoeflichkeit_k6", question: "'Dürfte ich fragen, wie Sie heißen?' — Welche Form von 'dürfen' steht hier?", options: ["Indikativ Präteritum", "Konjunktiv II", "Konjunktiv I", "Indikativ Präsens"], correct: 1 },
          // Typing 16
          { type: "typing", topic: "konjunktiv_k6", subtopic: "konjunktiv2_hoeflichkeit_k6", question: "Schreibe: Ich ___ (hätte gern) eine Reservierung für zwei Personen.", answer: "hätte gern" },
          // MCQ 17
          { type: "mcq", topic: "konjunktiv_k6", subtopic: "konjunktiv2_hoeflichkeit_k6", question: "Welcher Ausdruck zeigt eine höfliche Bitte?", options: ["Mach das sofort!", "Du musst das tun.", "Würdest du das bitte tun?", "Tu das jetzt!"], correct: 2 },
          // Typing 18
          { type: "typing", topic: "konjunktiv_k6", subtopic: "konjunktiv2_hoeflichkeit_k6", question: "Höfliche Anfrage: ___ ich mich kurz setzen?", answer: "Dürfte" },
          // MCQ 19
          { type: "mcq", topic: "konjunktiv_k6", subtopic: "konjunktiv2_hoeflichkeit_k6", question: "Was bedeutet 'Hätten Sie Lust mitzukommen?'", options: ["Einen Befehl", "Eine höfliche Einladung", "Eine Drohung", "Eine Ablehnung"], correct: 1 },
          // Typing 20
          { type: "typing", topic: "konjunktiv_k6", subtopic: "konjunktiv2_hoeflichkeit_k6", question: "Bitte um Information (Konjunktiv II): ___ Sie mir sagen, wie spät es ist?", answer: ["Könnten", "Würden"] },
          // MCQ 21
          { type: "mcq", topic: "konjunktiv_k6", subtopic: "konjunktiv2_hoeflichkeit_k6", question: "Welche Form klingt höflicher beim Bestellen?", options: ["Ich will eine Pizza.", "Ich werde eine Pizza nehmen.", "Ich hätte gern eine Pizza.", "Pizza her!"], correct: 2 },
          // Typing 22
          { type: "typing", topic: "konjunktiv_k6", subtopic: "konjunktiv2_hoeflichkeit_k6", question: "Ergänze die Bitte: ___ du mir bitte beim Tragen helfen?", answer: ["Könntest", "Würdest"] },
          // MCQ 23
          { type: "mcq", topic: "konjunktiv_k6", subtopic: "konjunktiv2_hoeflichkeit_k6", question: "Welcher Satz enthält eine höfliche Frage mit 'würden'?", options: ["Werden Sie das tun?", "Würden Sie bitte das Fenster öffnen?", "Sie haben das getan?", "Haben Sie das geöffnet?"], correct: 1 },
          // Typing 24
          { type: "typing", topic: "konjunktiv_k6", subtopic: "konjunktiv2_hoeflichkeit_k6", question: "Schreibe höflich: 'Ich möchte ein Zimmer reservieren.' → Ich ___ gern ein Zimmer reservieren.", answer: "würde" },
          // MCQ 25
          { type: "mcq", topic: "konjunktiv_k6", subtopic: "konjunktiv2_hoeflichkeit_k6", question: "Was passt: 'Könnten Sie bitte ___ leiser sprechen?'", options: ["ein bisschen", "gar nicht", "immer", "nie"], correct: 0 },
          // Typing 26
          { type: "typing", topic: "konjunktiv_k6", subtopic: "konjunktiv2_hoeflichkeit_k6", question: "Bitte im Restaurant (Konjunktiv II): ___ ich die Speisekarte haben?", answer: "Dürfte" },
          // MCQ 27
          { type: "mcq", topic: "konjunktiv_k6", subtopic: "konjunktiv2_hoeflichkeit_k6", question: "Welcher Satz ist korrekt und höflich?", options: ["Gibst du mir das sofort!", "Könntest du mir das bitte geben?", "Du gibst mir das jetzt.", "Ich will das haben."], correct: 1 },
          // Typing 28
          { type: "typing", topic: "konjunktiv_k6", subtopic: "konjunktiv2_hoeflichkeit_k6", question: "Ergänze: ___ Sie bitte Ihren Namen buchstabieren?", answer: ["Könnten", "Würden"] },
          // MCQ 29
          { type: "mcq", topic: "konjunktiv_k6", subtopic: "konjunktiv2_hoeflichkeit_k6", question: "Warum benutzt man den Konjunktiv II bei Bitten?", options: ["Weil er einfacher ist", "Weil er höflicher und weniger direkt klingt", "Weil er die Vergangenheit zeigt", "Weil er Fakten beschreibt"], correct: 1 },
          // Typing 30
          { type: "typing", topic: "konjunktiv_k6", subtopic: "konjunktiv2_hoeflichkeit_k6", question: "Formuliere höflich: 'Kann ich Ihnen helfen?' → ___ ich Ihnen helfen?", answer: "Dürfte" },
        ],
      },
      {
        id: "konjunktiv2_wunsch_k6",
        name: "Wünsche & Träume",
        questions: [
          // MCQ 1
          { type: "mcq", topic: "konjunktiv_k6", subtopic: "konjunktiv2_wunsch_k6", question: "Welcher Satz drückt einen irrealen Wunsch aus?", options: ["Ich habe ein Haus.", "Wenn ich ein Haus hätte!", "Ich kaufe ein Haus.", "Ich hatte ein Haus."], correct: 1 },
          // Typing 2
          { type: "typing", topic: "konjunktiv_k6", subtopic: "konjunktiv2_wunsch_k6", question: "Ergänze den Wunschsatz: Ich wünschte, ich ___ (sein) reich.", answer: "wäre" },
          // MCQ 3
          { type: "mcq", topic: "konjunktiv_k6", subtopic: "konjunktiv2_wunsch_k6", question: "Was bedeutet: 'Wenn ich fliegen könnte!'?", options: ["Ich kann fliegen.", "Es ist ein irrealer Wunsch.", "Ich werde fliegen.", "Ich bin geflogen."], correct: 1 },
          // Typing 4
          { type: "typing", topic: "konjunktiv_k6", subtopic: "konjunktiv2_wunsch_k6", question: "Bilde einen Wunschsatz: Ich wünschte, ich ___ (haben) mehr Zeit.", answer: "hätte" },
          // MCQ 5
          { type: "mcq", topic: "konjunktiv_k6", subtopic: "konjunktiv2_wunsch_k6", question: "Welche Konjunktiv-II-Form passt: 'Wenn ich Millionär ___, würde ich reisen.'?", options: ["bin", "wäre", "war", "sei"], correct: 1 },
          // Typing 6
          { type: "typing", topic: "konjunktiv_k6", subtopic: "konjunktiv2_wunsch_k6", question: "Ergänze: Im Traumhaus ___ (würde) ich einen großen Garten haben.", answer: "würde" },
          // MCQ 7
          { type: "mcq", topic: "konjunktiv_k6", subtopic: "konjunktiv2_wunsch_k6", question: "Welcher Satz beschreibt einen irrealen Traum?", options: ["Ich lebe in Paris.", "Wenn ich in Paris leben würde!", "Ich bin nach Paris gefahren.", "Ich fahre nach Paris."], correct: 1 },
          // Typing 8
          { type: "typing", topic: "konjunktiv_k6", subtopic: "konjunktiv2_wunsch_k6", question: "Wunschsatz: Wenn ich zaubern ___ (können), würde ich die Welt verändern.", answer: "könnte" },
          // MCQ 9
          { type: "mcq", topic: "konjunktiv_k6", subtopic: "konjunktiv2_wunsch_k6", question: "'Ich wünschte, du wärst hier.' — Was drückt dieser Satz aus?", options: ["Eine Tatsache", "Einen irrealen Wunsch", "Eine Frage", "Einen Befehl"], correct: 1 },
          // Typing 10
          { type: "typing", topic: "konjunktiv_k6", subtopic: "konjunktiv2_wunsch_k6", question: "Ergänze: Wenn ich mehr Geld ___ (haben), ___ (würde) ich eine Reise machen.", answer: ["hätte, würde"] },
          // MCQ 11
          { type: "mcq", topic: "konjunktiv_k6", subtopic: "konjunktiv2_wunsch_k6", question: "Welches Modalverb steht im Konjunktiv II im Traumsatz: 'Wenn ich Pilot ___, flöge ich um die Welt.'?", options: ["wäre", "hätte", "könnte", "würde"], correct: 0 },
          // Typing 12
          { type: "typing", topic: "konjunktiv_k6", subtopic: "konjunktiv2_wunsch_k6", question: "Formuliere den Traum: Im Traum ___ (würde) ich auf einer Insel leben.", answer: "würde" },
          // MCQ 13
          { type: "mcq", topic: "konjunktiv_k6", subtopic: "konjunktiv2_wunsch_k6", question: "Was ist typisch für irreale Wünsche im Deutschen?", options: ["Indikativ Präsens", "Konjunktiv II", "Futur I", "Perfekt"], correct: 1 },
          // Typing 14
          { type: "typing", topic: "konjunktiv_k6", subtopic: "konjunktiv2_wunsch_k6", question: "Wunsch: Ich wünschte, es ___ (geben) keine Kriege.", answer: "gäbe" },
          // MCQ 15
          { type: "mcq", topic: "konjunktiv_k6", subtopic: "konjunktiv2_wunsch_k6", question: "Wähle die richtige Form: 'Wenn sie tanzen ___, würde sie Balletttänzerin.'", options: ["könnte", "kann", "konnte", "könnte sie"], correct: 0 },
          // Typing 16
          { type: "typing", topic: "konjunktiv_k6", subtopic: "konjunktiv2_wunsch_k6", question: "Traumsatz: Ich ___ (wünschte) gern eine Weltreise machen.", answer: "würde" },
          // MCQ 17
          { type: "mcq", topic: "konjunktiv_k6", subtopic: "konjunktiv2_wunsch_k6", question: "Welcher Satz enthält den korrekten Konjunktiv II für einen Wunsch?", options: ["Ich wünschte, ich hätte Flügel.", "Ich wünsche, ich habe Flügel.", "Ich wünsche, ich hatte Flügel.", "Ich hätte Flügel gewünscht."], correct: 0 },
          // Typing 18
          { type: "typing", topic: "konjunktiv_k6", subtopic: "konjunktiv2_wunsch_k6", question: "Bilde: Wenn ich Superkräfte ___ (haben), ___ (helfen, würde) ich allen Menschen.", answer: ["hätte, würde ich helfen"] },
          // MCQ 19
          { type: "mcq", topic: "konjunktiv_k6", subtopic: "konjunktiv2_wunsch_k6", question: "'Im Traumhaus würde ich einen Pool haben.' — Ist dieser Wunsch real?", options: ["Ja, er besitzt einen Pool.", "Nein, es ist ein irrealer Wunsch.", "Ja, er kauft einen Pool.", "Nein, es ist eine Frage."], correct: 1 },
          // Typing 20
          { type: "typing", topic: "konjunktiv_k6", subtopic: "konjunktiv2_wunsch_k6", question: "Wunschsatz: Ich wünschte, ich ___ (können) gut singen.", answer: "könnte" },
          // MCQ 21
          { type: "mcq", topic: "konjunktiv_k6", subtopic: "konjunktiv2_wunsch_k6", question: "Welche Einleitung passt zu einem Wunschsatz?", options: ["Obwohl ich...", "Wenn ich nur...", "Weil ich...", "Nachdem ich..."], correct: 1 },
          // Typing 22
          { type: "typing", topic: "konjunktiv_k6", subtopic: "konjunktiv2_wunsch_k6", question: "Ergänze: Wenn ich Prinzessin ___ (sein), ___ (würde) ich ein Schloss bewohnen.", answer: ["wäre, würde"] },
          // MCQ 23
          { type: "mcq", topic: "konjunktiv_k6", subtopic: "konjunktiv2_wunsch_k6", question: "Konjunktiv II des Wunsches: 'Es ___ schön, wenn wir uns sehen könnten.'", options: ["ist", "war", "wäre", "sei"], correct: 2 },
          // Typing 24
          { type: "typing", topic: "konjunktiv_k6", subtopic: "konjunktiv2_wunsch_k6", question: "Traumsatz: Im Traumurlaub ___ (würde) ich jeden Tag am Strand liegen.", answer: "würde" },
          // MCQ 25
          { type: "mcq", topic: "konjunktiv_k6", subtopic: "konjunktiv2_wunsch_k6", question: "'Hätte ich nur mehr gelernt!' — Was drückt dieser Satz aus?", options: ["Zufriedenheit", "Bedauern/Wunsch", "Eine Frage", "Einen Befehl"], correct: 1 },
          // Typing 26
          { type: "typing", topic: "konjunktiv_k6", subtopic: "konjunktiv2_wunsch_k6", question: "Schreibe einen Wunsch: Ich wünschte, die Ferien ___ (sein) länger.", answer: "wären" },
          // MCQ 27
          { type: "mcq", topic: "konjunktiv_k6", subtopic: "konjunktiv2_wunsch_k6", question: "Was drückt 'Wenn ich nur dabei gewesen wäre!' aus?", options: ["Gegenwärtigen Wunsch", "Vergangenes Bedauern", "Zukünftigen Plan", "Eine Frage"], correct: 1 },
          // Typing 28
          { type: "typing", topic: "konjunktiv_k6", subtopic: "konjunktiv2_wunsch_k6", question: "Traumsatz: Wenn ich viel Geld ___ (haben), ___ (kaufen, würde) ich ein Segelboot.", answer: ["hätte, würde ich kaufen"] },
          // MCQ 29
          { type: "mcq", topic: "konjunktiv_k6", subtopic: "konjunktiv2_wunsch_k6", question: "Welche Form von 'geben' steht im Konjunktiv II (es)?", options: ["gibt", "gab", "gäbe", "gegeben"], correct: 2 },
          // Typing 30
          { type: "typing", topic: "konjunktiv_k6", subtopic: "konjunktiv2_wunsch_k6", question: "Ergänze: Ich wünschte, ich ___ (wissen) die Antwort.", answer: "wüsste" },
        ],
      },
      {
        id: "konjunktiv2_irrealis_k6",
        name: "Irreale Bedingungen",
        questions: [
          // MCQ 1
          { type: "mcq", topic: "konjunktiv_k6", subtopic: "konjunktiv2_irrealis_k6", question: "Welcher Satz ist ein irrealer Bedingungssatz?", options: ["Wenn es regnet, nehme ich einen Schirm.", "Wenn es regnete, würde ich einen Schirm nehmen.", "Weil es regnet, nehme ich einen Schirm.", "Es regnet, also nehme ich einen Schirm."], correct: 1 },
          // Typing 2
          { type: "typing", topic: "konjunktiv_k6", subtopic: "konjunktiv2_irrealis_k6", question: "Ergänze: Wenn ich mehr Zeit ___ (haben), ___ (würde) ich Sport treiben.", answer: ["hätte, würde"] },
          // MCQ 3
          { type: "mcq", topic: "konjunktiv_k6", subtopic: "konjunktiv2_irrealis_k6", question: "'Als ob er ein Experte wäre' — Was drückt diese Konstruktion aus?", options: ["Einen realen Vergleich", "Einen irrealen Vergleich", "Eine Frage", "Einen Befehl"], correct: 1 },
          // Typing 4
          { type: "typing", topic: "konjunktiv_k6", subtopic: "konjunktiv2_irrealis_k6", question: "Bilde den Konditionalsatz: Wenn wir früher aufgestanden ___ (sein), ___ (verpassen, würde) wir den Zug nicht.", answer: ["wären, würden wir nicht verpassen"] },
          // MCQ 5
          { type: "mcq", topic: "konjunktiv_k6", subtopic: "konjunktiv2_irrealis_k6", question: "Welche Form passt: 'Wenn er fleißiger ___, würde er besser schreiben.'?", options: ["ist", "wäre", "war", "sei"], correct: 1 },
          // Typing 6
          { type: "typing", topic: "konjunktiv_k6", subtopic: "konjunktiv2_irrealis_k6", question: "Irrealer Vergleich: Er tut so, als ___ (ob) er alles wüsste.", answer: "ob" },
          // MCQ 7
          { type: "mcq", topic: "konjunktiv_k6", subtopic: "konjunktiv2_irrealis_k6", question: "Was ist der Unterschied zwischen 'wenn es regnet' und 'wenn es regnete'?", options: ["Kein Unterschied", "Ersteres ist real, zweites ist irreal (Konjunktiv II)", "Ersteres ist irreal, zweites ist real", "Beide sind irreal"], correct: 1 },
          // Typing 8
          { type: "typing", topic: "konjunktiv_k6", subtopic: "konjunktiv2_irrealis_k6", question: "Ergänze den irrealen Satz: Wenn ich Arzt ___ (sein), ___ (helfen, würde) ich vielen Menschen.", answer: ["wäre, würde ich helfen"] },
          // MCQ 9
          { type: "mcq", topic: "konjunktiv_k6", subtopic: "konjunktiv2_irrealis_k6", question: "Welche Konjunktionen leiten irreale Vergleiche ein?", options: ["weil, da", "als ob, als wenn", "obwohl, obgleich", "damit, sodass"], correct: 1 },
          // Typing 10
          { type: "typing", topic: "konjunktiv_k6", subtopic: "konjunktiv2_irrealis_k6", question: "Bilde: Wenn das Wetter schöner ___ (sein), ___ (gehen, würde) ich spazieren.", answer: ["wäre, würde ich gehen"] },
          // MCQ 11
          { type: "mcq", topic: "konjunktiv_k6", subtopic: "konjunktiv2_irrealis_k6", question: "'Er spricht, als wenn er alles wüsste.' — Was steht nach 'als wenn'?", options: ["Indikativ", "Konjunktiv II", "Imperativ", "Infinitiv"], correct: 1 },
          // Typing 12
          { type: "typing", topic: "konjunktiv_k6", subtopic: "konjunktiv2_irrealis_k6", question: "Irrealer Vergleich: Sie sieht aus, als ob sie krank ___ (sein).", answer: "wäre" },
          // MCQ 13
          { type: "mcq", topic: "konjunktiv_k6", subtopic: "konjunktiv2_irrealis_k6", question: "Wähle den korrekten irrealen Konditionalsatz:", options: ["Wenn ich kann, helfe ich.", "Wenn ich könnte, würde ich helfen.", "Wenn ich helfe, kann ich.", "Wenn ich geholfen habe, kann ich."], correct: 1 },
          // Typing 14
          { type: "typing", topic: "konjunktiv_k6", subtopic: "konjunktiv2_irrealis_k6", question: "Ergänze: Wenn du mehr übst, ___ (können) du besser spielen. (irreal)", answer: "könntest" },
          // MCQ 15
          { type: "mcq", topic: "konjunktiv_k6", subtopic: "konjunktiv2_irrealis_k6", question: "'Als ob sie schliefe' — In welchem Modus steht 'schliefe'?", options: ["Indikativ Präteritum", "Konjunktiv I", "Konjunktiv II", "Imperativ"], correct: 2 },
          // Typing 16
          { type: "typing", topic: "konjunktiv_k6", subtopic: "konjunktiv2_irrealis_k6", question: "Bilde den irrealen Satz: Wenn ich gewinnen ___ (würde), ___ (kaufen, würde) ich ein Auto.", answer: ["würde, würde ich kaufen"] },
          // MCQ 17
          { type: "mcq", topic: "konjunktiv_k6", subtopic: "konjunktiv2_irrealis_k6", question: "Was passt in die Lücke: 'Wenn er Hunger ___, würde er essen.'?", options: ["hat", "hatte", "hätte", "gehabt hätte"], correct: 2 },
          // Typing 18
          { type: "typing", topic: "konjunktiv_k6", subtopic: "konjunktiv2_irrealis_k6", question: "Irrealer Vergleich: Das Kind weint, als ___ (ob) es sich wehgetan hätte.", answer: "ob" },
          // MCQ 19
          { type: "mcq", topic: "konjunktiv_k6", subtopic: "konjunktiv2_irrealis_k6", question: "Welcher Satz ist korrekt gebildet?", options: ["Wenn ich mehr lerne, wird es gut.", "Wenn ich mehr lernte, würde es besser.", "Wenn ich mehr lernte, wird es besser.", "Wenn mehr lernen, würde besser sein."], correct: 1 },
          // Typing 20
          { type: "typing", topic: "konjunktiv_k6", subtopic: "konjunktiv2_irrealis_k6", question: "Ergänze: Wenn er nicht so müde ___ (sein), ___ (mitkommen, würde) er mit.", answer: ["wäre, würde er mitkommen"] },
          // MCQ 21
          { type: "mcq", topic: "konjunktiv_k6", subtopic: "konjunktiv2_irrealis_k6", question: "In welchem Teil des Konditionalsatzes steht der Konjunktiv II bei: 'Wenn A, dann B'?", options: ["Nur in A", "Nur in B", "In beiden Teilen (A und B)", "In keinem Teil"], correct: 2 },
          // Typing 22
          { type: "typing", topic: "konjunktiv_k6", subtopic: "konjunktiv2_irrealis_k6", question: "Bilde: Wenn sie schneller laufen ___ (können), ___ (gewinnen, würde) sie das Rennen.", answer: ["könnte, würde sie gewinnen"] },
          // MCQ 23
          { type: "mcq", topic: "konjunktiv_k6", subtopic: "konjunktiv2_irrealis_k6", question: "'Als wenn er kein Deutsch verstand' — Ist dieser Satz korrekt?", options: ["Ja, korrekt", "Nein, es muss 'verstünde' oder 'verstehen würde' heißen", "Nein, es muss Konjunktiv I sein", "Ja, Präteritum ist hier korrekt"], correct: 1 },
          // Typing 24
          { type: "typing", topic: "konjunktiv_k6", subtopic: "konjunktiv2_irrealis_k6", question: "Irrealer Satz: Wenn ich nicht krank ___ (sein), ___ (gehen, würde) ich zur Party.", answer: ["wäre, würde ich gehen"] },
          // MCQ 25
          { type: "mcq", topic: "konjunktiv_k6", subtopic: "konjunktiv2_irrealis_k6", question: "Welche Aussage über irreale Konditionalsätze stimmt?", options: ["Sie beschreiben etwas Reales.", "Die Bedingung ist nicht erfüllt oder nicht erfüllbar.", "Sie stehen immer im Futur.", "Sie brauchen kein Verb."], correct: 1 },
          // Typing 26
          { type: "typing", topic: "konjunktiv_k6", subtopic: "konjunktiv2_irrealis_k6", question: "Ergänze den irrealen Vergleich: Er isst, als ___ (ob) er tagelang nichts gegessen ___ (haben).", answer: ["ob, hätte"] },
          // MCQ 27
          { type: "mcq", topic: "konjunktiv_k6", subtopic: "konjunktiv2_irrealis_k6", question: "Welche Form von 'kommen' steht im Konjunktiv II (er)?", options: ["kommt", "kam", "käme", "komme"], correct: 2 },
          // Typing 28
          { type: "typing", topic: "konjunktiv_k6", subtopic: "konjunktiv2_irrealis_k6", question: "Bilde: Wenn wir uns früher gekannt ___ (haben), ___ (freunden, würde) wir uns befreunden.", answer: ["hätten, würden wir uns befreunden"] },
          // MCQ 29
          { type: "mcq", topic: "konjunktiv_k6", subtopic: "konjunktiv2_irrealis_k6", question: "Welcher Satz zeigt einen irrealen Vergleich mit 'als ob'?", options: ["Er ist klug, als ob er studiert hat.", "Er tut so, als ob er alles wüsste.", "Er fragt, als ob er weiß.", "Er weiß, als ob er klug ist."], correct: 1 },
          // Typing 30
          { type: "typing", topic: "konjunktiv_k6", subtopic: "konjunktiv2_irrealis_k6", question: "Irrealer Konditionalsatz: Wenn ich ein Vogel ___ (sein), ___ (fliegen, würde) ich in den Süden.", answer: ["wäre, würde ich fliegen"] },
        ],
      },
    ],
  },
];
