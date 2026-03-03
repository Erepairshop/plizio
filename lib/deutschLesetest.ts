// ─── DEUTSCH TEST — LESETEXTE ─────────────────────────────────────────────────
// Lesetexte für Klasse 1–8 mit MCQ- und Typing-Fragen
//
// ═══════════════════════════════════════════════════════════════════════════════
// FORMAT — so fügst du Texte und Fragen ein:
//
//   text:  Der eigentliche Lesetext (mehrere Sätze)
//   title: Überschrift des Textes (optional aber empfohlen)
//
//   MCQ-Frage:
//   { type: "mcq",
//     question: "Was macht Max?",
//     options: ["schlafen", "spielen", "lesen", "essen"],
//     correct: 1 }        ← Index der richtigen Antwort (0 = erste Option)
//
//   Typing-Frage:
//   { type: "typing",
//     question: "Welche Farbe hat der Ball?",
//     answer: "rot" }     ← oder mehrere: answer: ["rot", "Rot"]
//
// ═══════════════════════════════════════════════════════════════════════════════

export interface LeseQuestion {
  type: "mcq" | "typing";
  question: string;
  options?: string[];       // nur bei mcq
  correct?: number;         // nur bei mcq (0-indexed)
  answer?: string | string[]; // nur bei typing
}

export interface Lesepassage {
  id: string;
  title: string;
  text: string;
  questions: LeseQuestion[];
}

export const LESETEST: Record<number, Lesepassage[]> = {

// ─── KLASSE 1 ─── (2-3 einfache Sätze · wer? was? wo? welche Farbe?)
  1: [
    {
      id: "k1_1",
      title: "Max im Garten",
      text: "Max spielt im Garten. Er hat einen Ball. Der Ball ist rot.",
      questions: [
        { type: "mcq", question: "Was macht Max?", options: ["schlafen", "spielen", "lesen", "essen"], correct: 1 },
        { type: "typing", question: "Welche Farbe hat der Ball?", answer: ["rot", "Rot"] },
        { type: "mcq", question: "Wo ist Max?", options: ["im Haus", "in der Schule", "im Garten"], correct: 2 },
      ],
    },
    {
      id: "k1_2",
      title: "Die Katze Mimi",
      text: "Mimi ist eine Katze. Sie ist weiß. Mimi trinkt gerne Milch.",
      questions: [
        { type: "mcq", question: "Wer ist Mimi?", options: ["ein Hund", "eine Katze", "ein Vogel"], correct: 1 },
        { type: "typing", question: "Welche Farbe hat die Katze?", answer: ["weiß", "Weiß"] },
        { type: "typing", question: "Was trinkt Mimi?", answer: ["Milch", "milch"] },
      ],
    },
    {
      id: "k1_3",
      title: "In der Schule",
      text: "Das Kind lernt in der Schule. Es schreibt in das Heft. Das Heft ist blau.",
      questions: [
        { type: "mcq", question: "Wo lernt das Kind?", options: ["im Park", "im Kino", "in der Schule"], correct: 2 },
        { type: "typing", question: "Wohin schreibt das Kind?", answer: ["in das Heft", "ins Heft", "Heft"] },
        { type: "mcq", question: "Welche Farbe hat das Heft?", options: ["blau", "gelb", "grün"], correct: 0 },
      ],
    },
  ],

  // ─── KLASSE 2 ─── (4-5 Sätze · Handlung, Figuren, einfache Kausalität)
  2: [
    {
      id: "k2_1",
      title: "Der hungrige Igel",
      text: "Es ist ein windiger Herbsttag und der kleine Igel sucht unter den bunten Blättern nach Futter. Plötzlich findet er einen großen, roten Apfel, der direkt unter einem alten Baum liegt. Weil der Igel sehr großen Hunger hat, frisst er den süßen Apfel sofort ganz alleine auf. Danach sucht er sich einen geschützten Platz im trockenen Laub, um dort gemütlich einzuschlafen. Jetzt ist er satt und hat keine Angst mehr vor dem kalten Winter.",
      questions: [
        { type: "mcq", question: "Wo sucht der Igel nach seinem Futter?", options: ["unter den Blättern", "auf dem Baum", "im Wasser"], correct: 0 },
        { type: "typing", question: "Warum frisst er den Apfel sofort auf?", answer: ["Hunger", "weil er Hunger hat", "er hat Hunger"] },
        { type: "mcq", question: "Wie fühlt sich der Igel am Ende?", options: ["traurig", "satt und zufrieden", "hungrig"], correct: 1 },
      ],
    },
    {
      id: "k2_2",
      title: "Ein Tag am See",
      text: "Heute fahren Lukas und sein Papa mit dem Fahrrad zu einem großen, blauen See in der Nähe. Die Sonne scheint hell, aber das Wasser ist nach dem Regen noch immer sehr kalt. Lukas geht nur vorsichtig mit den Füßen hinein, weil er im kalten Wasser nicht frieren möchte. Sein mutiger Papa springt dagegen sofort hinein und schwimmt eine schnelle Runde bis zum Steg. Zur Belohnung essen beide am Nachmittag zusammen ein großes Schokoladeneis.",
      questions: [
        { type: "mcq", question: "Wie sind Lukas und sein Papa zum See gekommen?", options: ["mit dem Auto", "zu Fuß", "mit dem Fahrrad"], correct: 2 },
        { type: "typing", question: "Wer schwimmt eine Runde im See?", answer: ["Papa", "der Papa", "sein Papa"] },
        { type: "mcq", question: "Warum geht Lukas nur mit den Füßen ins Wasser?", options: ["er hat keine Zeit", "es ist zu kalt", "er kann nicht schwimmen"], correct: 1 },
      ],
    },
    {
      id: "k2_3",
      title: "Die fleißige Biene",
      text: "In einem bunten Garten fliegt eine kleine Biene fleißig von einer Blume zur nächsten. Sie sammelt den süßen, gelben Nektar und bringt ihn schnell zurück in ihren dunklen Bienenstock. Die Sonne scheint warm auf ihre Flügel, deshalb macht ihr die schwere Arbeit heute großen Spaß. Die Biene möchte nämlich viel Honig sammeln, damit alle Bienen im Winter genug zu essen haben. Erst als es dunkel wird, fliegt sie müde, aber glücklich nach Hause.",
      questions: [
        { type: "mcq", question: "Was macht die Biene mit dem Nektar?", options: ["sie spielt damit", "sie bringt ihn zum Bienenstock", "sie wirft ihn weg"], correct: 1 },
        { type: "typing", question: "Wann fliegt die Biene endlich nach Hause?", answer: ["am Abend", "als es dunkel wird", "Abend", "dunkel"] },
        { type: "mcq", question: "Warum sammelt sie so viel Honig?", options: ["für den Winter", "für die Blumen", "zum Spaß"], correct: 0 },
      ],
    },
  ],

  // ─── KLASSE 3 ─── (5-7 Sätze · Erzählung, Hauptfigur, Ursache-Wirkung)
  3: [
    {
      id: "k3_1",
      title: "Der verlorene Schlüssel",
      text: "Anna kommt nach einem langen Schultag müde nach Hause und greift in ihre Tasche. Doch plötzlich erschrickt sie, denn ihr Hausschlüssel ist nicht an seinem Platz. Sie sucht nervös in allen Fächern, aber der Schlüssel bleibt verschwunden. Da sie nun nicht ins Haus kann, setzt sie sich traurig auf die Treppe und wartet auf ihre Mutter. Nach einer Weile entdeckt sie etwas Glitzerndes im Gras direkt neben dem Gehweg. Voller Freude erkennt sie ihren Schlüssel, der ihr wohl beim Laufen aus der Tasche gefallen ist. Jetzt kann sie endlich die Tür öffnen und geht glücklich hinein.",
      questions: [
        { type: "mcq", question: "Warum erschrickt Anna vor der Haustür?", options: ["Sie hat Hunger.", "Ihr Schlüssel ist weg.", "Die Tür ist offen."], correct: 1 },
        { type: "typing", question: "Wo findet sie den Schlüssel schließlich?", answer: ["im Gras", "Gras", "neben dem Gehweg"] },
        { type: "mcq", question: "Was macht Anna, während sie wartet?", options: ["Sie spielt Fußball.", "Sie liest ein Buch.", "Sie setzt sich auf die Treppe."], correct: 2 },
      ],
    },
    {
      id: "k3_2",
      title: "Ein kleiner Retter",
      text: "An einem heißen Sommertag bemerkt der junge Paul einen kleinen Marienkäfer, der hilflos in einer Wasserpfütze treibt. Da der Käfer nicht von alleine herauskommt, sucht Paul schnell ein trockenes Blatt. Er hält das Blatt vorsichtig in das Wasser, damit der Käfer darauf klettern kann. Tatsächlich greift das kleine Tier mit seinen Beinen nach dem Rand und rettet sich aus dem Wasser. Paul legt das Blatt mit dem Marienkäfer sicher auf eine sonnige Blume. Dort trocknet der Käfer seine Flügel und fliegt nach wenigen Minuten dankbar davon. Paul freut sich sehr, dass er dem kleinen Wesen helfen konnte.",
      questions: [
        { type: "mcq", question: "In welcher Notlage befindet sich der Käfer?", options: ["Er findet kein Futter.", "Er ist in einer Pfütze.", "Er hat seine Punkte verloren."], correct: 1 },
        { type: "typing", question: "Was benutzt Paul, um den Käfer zu retten?", answer: ["ein Blatt", "ein trockenes Blatt", "Blatt"] },
        { type: "mcq", question: "Was macht der Käfer am Ende auf der Blume?", options: ["Er schläft ein.", "Er frisst die Blume.", "Er trocknet seine Flügel."], correct: 2 },
      ],
    },
    {
      id: "k3_3",
      title: "Das misslungene Experiment",
      text: "Im Sachunterricht möchte Jonas heute ein spannendes Experiment mit Wasser und Salz vorführen. Er schüttet viel zu viel Salz in das Glas, weil er nicht genau in die Anleitung geschaut hat. Plötzlich trübt sich das Wasser ganz stark und nichts passiert so, wie er es sich vorgestellt hat. Sein Lehrer erklärt ihm lächelnd, dass man beim Experimentieren immer genau auf die Mengen achten muss. Jonas schüttet die Mischung weg und fängt noch einmal ganz von vorne an. Diesmal liest er jeden Schritt sehr aufmerksam durch und misst das Salz vorsichtig ab. Am Ende leuchten seine Augen, denn nun ist der Versuch perfekt gelungen.",
      questions: [
        { type: "mcq", question: "Welchen Fehler macht Jonas zu Beginn?", options: ["Er zerbricht das Glas.", "Er nimmt zu viel Salz.", "Er vergisst das Wasser."], correct: 1 },
        { type: "typing", question: "Was muss man laut Lehrer beim Experimentieren beachten?", answer: ["auf die Mengen achten", "genau lesen", "Mengen"] },
        { type: "mcq", question: "Wie fühlt sich Jonas am Ende des Unterrichts?", options: ["enttäuscht", "müde", "stolz und zufrieden"], correct: 2 },
      ],
    },
  ],

 // ─── KLASSE 4 ─── (8-10 Sätze + Dialog · Figuren, Gefühle, Handlungsverlauf)
  4: [
    {
      id: "k4_1",
      title: "Das kaputte Fenster",
      text: "Es passierte am Samstagnachmittag beim Fußballspielen im Hinterhof. Felix schoss den Ball mit voller Kraft, doch statt im Tor landete er direkt in der Scheibe von Frau Meier. Ein lautes Klirren erfüllte die Luft und die Jungen erstarrten vor Schreck. 'Oje, das gibt Ärger!', flüsterte sein bester Freund Tim und wollte am liebsten sofort weglaufen. Doch Felix nahm seinen Mut zusammen und ging langsam zur Haustür der Nachbarin. Als Frau Meier öffnete, sagte er mit zittriger Stimme: 'Es tut mir leid, ich habe aus Versehen Ihr Fenster kaputt geschossen.' Zu seiner Überraschung sah sie ihn lange an und antwortete dann ruhig: 'Es ist gut, dass du ehrlich zu mir bist und nicht einfach wegrennst.' Gemeinsam riefen sie Felix’ Eltern an, um den Schaden zu klären. Felix war zwar noch immer traurig, aber auch erleichtert, die Wahrheit gesagt zu haben.",
      questions: [
        { type: "mcq", question: "Wie reagiert Tim auf das klirrende Geräusch?", options: ["Er lacht laut.", "Er möchte weglaufen.", "Er schießt weiter."], correct: 1 },
        { type: "typing", question: "Was sagt Frau Meier über Felix' Verhalten?", answer: ["gut dass du ehrlich bist", "ehrlich", "Ehrlichkeit"] },
        { type: "mcq", question: "Wie fühlt sich Felix am Ende der Geschichte?", options: ["wütend", "erleichtert", "ängstlich"], correct: 1 },
      ],
    },
    {
      id: "k4_2",
      title: "Die geheimnisvolle Schatzkarte",
      text: "Marie und Jonas stöberten auf dem staubigen Dachboden ihrer Großmutter in alten Kisten herum. Plötzlich zog Jonas ein vergilbtes Papier hervor, auf dem seltsame Zeichen und ein rotes Kreuz zu sehen waren. 'Guck mal Marie, das muss eine echte Schatzkarte sein!', rief er aufgeregt mit glänzenden Augen. Marie untersuchte das Papier genau und meinte skeptisch: 'Vielleicht ist es auch nur eine alte Zeichnung von Opa.' Doch die Neugier war stärker, also holten sie eine Taschenlampe und folgten den Hinweisen in den Garten. Sie suchten hinter dem alten Brunnen und unter den großen Wurzeln der Eiche. Nach einigem Graben stießen sie tatsächlich auf eine kleine, rostige Metalldose. 'Soll ich sie öffnen?', fragte Jonas mit klopfendem Herzen. In der Dose fanden sie keine Goldmünzen, sondern alte Fotos und einen handgeschriebenen Brief aus der Kindheit ihres Opas.",
      questions: [
        { type: "mcq", question: "Was halten die Kinder zuerst in den Händen?", options: ["ein Buch", "ein vergilbtes Papier", "einen Schlüssel"], correct: 1 },
        { type: "typing", question: "Wo im Garten beginnen sie ihre Suche?", answer: ["am alten Brunnen", "Brunnen", "beim Brunnen"] },
        { type: "mcq", question: "Was war wirklich in der Metalldose?", options: ["Gold und Silber", "alte Fotos und ein Brief", "Süßigkeiten"], correct: 1 },
      ],
    },
    {
      id: "k4_3",
      title: "Lampenfieber vor dem Auftritt",
      text: "In der Aula der Grundschule war es mucksmäuschenstill, denn die Theater-AG bereitete sich auf ihr großes Stück vor. Sophie stand hinter dem schweren, roten Vorhang und zitterte am ganzen Körper. Ihr Herz hämmerte so laut, dass sie Angst hatte, ihren Einsatz zu verpassen. Ihr Lehrer, Herr Wagner, kam zu ihr und legte ihr beruhigend eine Hand auf die Schulter. 'Hast du Angst, deinen Text zu vergessen?', fragte er sie leise mit einem Lächeln. Sophie nickte nur stumm, da ihr Hals wie zugeschnürt war. Herr Wagner sagte: 'Atme tief durch, du hast so fleißig geübt, du schaffst das ganz sicher!' Als der Vorhang schließlich aufging, atmete Sophie noch einmal tief ein und trat fest entschlossen ins Rampenlicht. Schon nach dem ersten Satz war ihre Angst wie weggeblasen und sie spielte ihre Rolle perfekt. Das Publikum klatschte am Ende so laut, dass Sophie vor Stolz fast platzte.",
      questions: [
        { type: "mcq", question: "Warum zittert Sophie hinter dem Vorhang?", options: ["Ihr ist kalt.", "Sie hat Lampenfieber.", "Sie ist wütend."], correct: 1 },
        { type: "typing", question: "Wer macht Sophie vor dem Auftritt Mut?", answer: ["Herr Wagner", "ihr Lehrer", "Wagner"] },
        { type: "mcq", question: "Was passiert mit Sophies Angst, als sie anfängt zu spielen?", options: ["Sie wird schlimmer.", "Sie bleibt gleich.", "Sie verschwindet."], correct: 2 },
      ],
    },
  ],

  // ─── KLASSE 5 ─── (Sachtext · Natur, Tiere, Schule · Informationen entnehmen)
  5: [
    {
      id: "k5_1",
      title: "Das Wunder der Honigbiene",
      text: "Honigbienen sind für unsere Umwelt unverzichtbar, da sie fast 80 Prozent aller Nutz- und Wildpflanzen bestäuben. Ein gesundes Bienenvolk besteht im Sommer aus bis zu 60.000 Tieren, die in drei Gruppen unterteilt sind: die Königin, die Arbeiterinnen und die männlichen Drohnen. Während die Königin für das Eierlegen zuständig ist, sammeln die Arbeiterinnen Nektar und Pollen als Nahrung. Ohne die fleißige Arbeit dieser Insekten gäbe es deutlich weniger Obstsorten wie Äpfel vagy Kirschen. Um ein einziges Glas Honig zu füllen, müssen die Bienen insgesamt etwa zwei Millionen Blüten anfliegen. Da Bienen heute immer weniger Lebensraum finden, pflanzen viele Menschen spezielle Wildblumen in ihren Gärten an.",
      questions: [
        { type: "mcq", question: "Wie viel Prozent der Pflanzen werden von Bienen bestäubt?", options: ["50 Prozent", "80 Prozent", "100 Prozent"], correct: 1 },
        { type: "typing", question: "Wie nennt man die männlichen Bienen?", answer: ["Drohnen", "die Drohnen", "Drohne"] },
        { type: "mcq", question: "Wie viele Blütenbesuche sind für ein Glas Honig nötig?", options: ["10.000", "500.000", "2 Millionen"], correct: 2 },
      ],
    },
    {
      id: "k5_2",
      title: "Unser Sonnensystem: Der Riese Jupiter",
      text: "Jupiter ist der größte Planet in unserem Sonnensystem und wird oft als 'Gasriese' bezeichnet, da er keine feste Oberfläche wie die Erde besitzt. Er ist so gewaltig, dass die Erde mehr als 1.300 Mal in ihn hineinpassen würde. Ein besonderes Merkmal des Jupiters ist der 'Große Rote Fleck', ein gigantischer Wirbelsturm, der schon seit über 300 Jahren tobt. Trotz seiner enormen Größe dreht sich der Planet extrem schnell um die eigene Achse; ein Tag dauert dort weniger als zehn Stunden. Jupiter besitzt zudem über 80 Monde, wobei Ganymed der größte von ihnen ist. Wegen seiner starken Schwerkraft schützt er die inneren Planeten oft vor einschlagenden Asteroiden.",
      questions: [
        { type: "mcq", question: "Warum nennt man den Jupiter einen Gasriesen?", options: ["Weil er blau ist.", "Weil er keine feste Oberfläche hat.", "Weil er sehr heiß ist."], correct: 1 },
        { type: "typing", question: "Wie lange dauert ein Tag auf dem Jupiter ungefähr?", answer: ["weniger als 10 Stunden", "10 Stunden", "unter 10 Stunden"] },
        { type: "mcq", question: "Welcher ist der größte Mond des Jupiters?", options: ["Europa", "Ganymed", "Io"], correct: 1 },
      ],
    },
    {
      id: "k5_3",
      title: "Die Geschichte des Papiers",
      text: "Heute nutzen wir Papier ganz selbstverständlich in der Schule, doch seine Erfindung liegt lange zurück. Vor etwa 2.000 Jahren erfanden die Chinesen das erste richtige Papier aus Pflanzenfasern und alten Stoffresten. Zuvor schrieben die Menschen im alten Ägypten auf Papyrus, das aus einer Schilfpflanze hergestellt wurde. Im Mittelalter benutzte man in Europa oft Pergament, das aus getrockneter Tierhaut bestand, was jedoch sehr teuer war. Erst mit der Erfindung des Buchdrucks stieg der Bedarf an Papier massiv an. Heute wird Papier hauptsächlich aus Holzfasern gewonnen, wobei Recycling immer wichtiger wird, um die Wälder zu schonen. Für die Herstellung von Recyclingpapier wird deutlich weniger Energie und Wasser verbraucht als für neues Papier.",
      questions: [
        { type: "mcq", question: "Wo wurde das erste richtige Papier erfunden?", options: ["In Ägypten", "In China", "In Deutschland"], correct: 1 },
        { type: "typing", question: "Aus welchem Material bestand Pergament?", answer: ["Tierhaut", "aus Tierhaut", "getrocknete Tierhaut"] },
        { type: "mcq", question: "Was ist ein Vorteil von Recyclingpapier?", options: ["Es ist bunter.", "Es verbraucht weniger Energie.", "Es riecht besser."], correct: 1 },
      ],
    },
  ],

  // ─── KLASSE 6 ─── (Zeitungsartikel-Stil · Hauptaussage, Details, Autor-Absicht)
  6: [
    {
      id: "k6_1",
      title: "Plastikflut im Ozean: Forscher schlagen Alarm",
      text: "KIEL – Eine neue Studie des Instituts für Meereskunde zeigt erschreckende Ergebnisse: Die Plastikkonzentration in der Nordsee hat einen neuen Höchststand erreicht. Jedes Jahr gelangen Tonnen von Verpackungsmüll über die Flüsse in das offene Meer. Besonders gefährlich ist das sogenannte Mikroplastik, das von Fischen gefressen wird und so in die menschliche Nahrungskette gelangt. Dr. Schmidt, Leiter der Studie, warnt: 'Wenn wir unser Konsumverhalten nicht sofort ändern, wird es im Jahr 2050 mehr Plastik als Fische in den Weltmeeren geben.' Umweltschutzorganisationen fordern nun weltweit strengere Gesetze gegen Einwegplastik, um diese ökologische Katastrophe zu verhindern.",
      questions: [
        { type: "mcq", question: "Was ist die Hauptaussage des Artikels?", options: ["Fische essen gerne Plastik.", "Die Plastikverschmutzung im Meer ist kritisch.", "Kiel ist eine schöne Stadt."], correct: 1 },
        { type: "typing", question: "Wie gelangt das Plastik laut Text hauptsächlich ins Meer?", answer: ["über die Flüsse", "Flüsse", "durch Flüsse"] },
        { type: "mcq", question: "Welche Absicht verfolgt der Autor vermutlich?", options: ["Er möchte den Verkauf von Fisch fördern.", "Er möchte über eine Studie informieren und warnen.", "Er möchte Urlaub in Kiel machen."], correct: 1 },
      ],
    },
    {
      id: "k6_2",
      title: "Sensationeller Fund bei Schularbeiten",
      text: "AUGSBURG – Damit hatte niemand gerechnet: Während der Bauarbeiten für die neue Turnhalle des Gymnasiums stießen Arbeiter auf antike Mauerreste. Archäologen bestätigten nach einer ersten Untersuchung, dass es sich um ein Wohnhaus aus der Römerzeit handelt, das etwa 1.800 Jahre alt ist. Der Fund ist so bedeutend, dass die Baustelle vorerst für mehrere Monate stillgelegt werden muss. 'Für unsere Schüler ist das Geschichte zum Anfassen', freut sich Schulleiterin Weber. Während die Experten die Fundamente vorsichtig freilegen, hoffen die Schüler auf einen längeren Sportausfall. Ob die Turnhalle wie geplant im nächsten Jahr fertig wird, bleibt jedoch fraglich.",
      questions: [
        { type: "mcq", question: "Was wurde auf dem Schulgelände gefunden?", options: ["Ein alter Fußball", "Reste eines römischen Wohnhauses", "Eine Turnhalle"], correct: 1 },
        { type: "typing", question: "Wie alt ist das gefundene Bauwerk etwa?", answer: ["1800 Jahre", "1.800 Jahre", "achtzehnhundert Jahre"] },
        { type: "mcq", question: "Warum wird die Baustelle vorerst gestoppt?", options: ["Wegen Geldmangel.", "Wegen archäologischer Untersuchungen.", "Wegen schlechten Wetters."], correct: 1 },
      ],
    },
    {
      id: "k6_3",
      title: "Handyverbot auf dem Pausenhof?",
      text: "BERLIN – An deutschen Schulen wird derzeit heftig über ein generelles Smartphone-Verbot diskutiert. Während einige Elternvertreter die ständige Ablenkung und das Risiko von Cybermobbing kritisieren, sehen Lehrerverbände auch Chancen in der digitalen Bildung. An einer Berliner Realschule wurde nun ein Testlauf gestartet: Handys müssen während der Pausen in den Schließfächern bleiben. 'Die Kinder spielen wieder miteinander und unterhalten sich mehr', berichtet ein Sprecher der Schule nach den ersten zwei Wochen. Kritiker werfen jedoch ein, dass man den Schülern den verantwortungsvollen Umgang mit Technik beibringen müsse, statt ihn einfach zu verbieten. Eine endgültige Entscheidung des Bildungsministeriums steht noch aus.",
      questions: [
        { type: "mcq", question: "Welches Problem wird im Text mit Handys verknüpft?", options: ["Hohe Kosten", "Cybermobbing", "Leere Akkus"], correct: 1 },
        { type: "typing", question: "Wo müssen die Schüler im Testlauf ihre Handys lassen?", answer: ["in den Schließfächern", "Schließfach", "Schließfächer"] },
        { type: "mcq", question: "Wie ist die Haltung im Text zur Entscheidung des Ministeriums?", options: ["Es wurde bereits verboten.", "Es wurde bereits erlaubt.", "Die Entscheidung ist noch offen."], correct: 2 },
      ],
    },
  ],

  // ─── KLASSE 7 ─── (Literarischer Text · Erzählperspektive, Stimmung, Stilmittel)
  7: [
    {
      id: "k7_1",
      title: "Das alte Haus am Deich",
      text: "Das Haus stand da wie ein müder Riese, der sich gegen den ewigen Nordwind stemmte. Die Fensterläden klapperten im Rhythmus der Brandung, ein unaufhörliches Taktmaß des Verfalls. Elias zog den Kragen seiner Jacke hoch, während er die morsche Veranda betrat. Er fühlte sich wie ein Eindringling in die eigene Vergangenheit. Hier, wo früher das Lachen seiner Großeltern die Räume mit Wärme gefüllt hatte, herrschte nun eine staubige Stille, die schwer auf seinen Schultern lastete. Das Holz knarrte unter seinen Schritten, als wolle es ihn vor den Geheimnissen warnen, die hinter der nächsten Tür warteten. Er zögerte kurz, doch die Neugier zog ihn unaufhaltsam tiefer in das dunkle Innere des Gebäudes.",
      questions: [
        { type: "mcq", question: "Welches Stilmittel findet man im ersten Satz?", options: ["Eine Ironie", "Einen Vergleich", "Eine Übertreibung"], correct: 1 },
        { type: "typing", question: "Welche Stimmung dominiert in diesem Textabschnitt?", answer: ["melancholisch", "unheimlich", "düster", "einsam"] },
        { type: "mcq", question: "Wie verhält sich Elias gegenüber dem Haus?", options: ["Er ist gleichgültig.", "Er ist voller Vorfreude.", "Er ist hin- und hergerissen zwischen Zögern und Neugier."], correct: 2 },
      ],
    },
    {
      id: "k7_2",
      title: "Der Abschied",
      text: "Der Bahnsteig war in ein fahles, kaltes Licht getaucht, das die Gesichter der Wartenden wie Masken erscheinen ließ. Sarah starrte auf die Gleise, die sich wie endlose silberne Fäden in der Dunkelheit verloren. In ihrer Brust fühlte sie ein dumpfes Echo der Leere, das mit jedem Blick auf die Uhr lauter zu werden schien. 'Vielleicht ist es besser so', murmelte sie, doch die Worte klangen hohl und boten keinen Trost. Als der Zug schließlich mit einem kreischenden Geräusch einfuhr, zuckte sie zusammen. Es gab kein Zurück mehr. Der kalte Wind, der durch die Einfahrt aufwirbelte, schien ihre Entscheidung bereits davonzutragen, noch bevor sie den ersten Schritt in den Waggon gesetzt hatte.",
      questions: [
        { type: "mcq", question: "Aus welcher Erzählperspektive ist der Text verfasst?", options: ["Ich-Perspektive", "Er/Sie-Perspektive (Personaler Erzähler)", "Auktorialer Erzähler"], correct: 1 },
        { type: "typing", question: "Womit werden die Gleise im Text verglichen?", answer: ["silberne Fäden", "Fäden", "endlose Fäden"] },
        { type: "mcq", question: "Was symbolisiert das 'kreischende Geräusch' des Zuges?", options: ["Die Freude auf die Reise.", "Den harten Bruch durch den Abschied.", "Die technische Modernität."], correct: 1 },
      ],
    },
    {
      id: "k7_3",
      title: "Gewitter über der Stadt",
      text: "Der Himmel hatte sich tiefschwarz verfärbt, als hätte jemand ein Tintenfass über der Stadt ausgeleert. Die Hitze des Tages stand noch immer drückend zwischen den Häuserzeilen, fast so, als könne die Luft nicht mehr atmen. Plötzlich zerriss ein gleißender Blitz die Dunkelheit, gefolgt von einem Donnerhall, der die Fensterscheiben in ihren Rahmen erzittern ließ. Die ersten Regentropfen schlugen wie schwere Kieselsteine auf das Pflaster. Julian beobachtete das Naturschauspiel durch das Glas; er bewunderte die rohe Gewalt der Elemente, die die menschliche Ordnung für einen Moment vollkommen unbedeutend erscheinen ließ. Es war eine Reinigung, die er herbeigesehnt hatte, ein gewaltiger Befreiungsschlag gegen die bleierne Schwüle der letzten Wochen.",
      questions: [
        { type: "mcq", question: "Was bewirkt die Metapher des 'Tintenfasses'?", options: ["Sie beschreibt die Dunkelheit des Himmels.", "Sie weist auf einen Schreibfehler hin.", "Sie beschreibt das kühle Wetter."], correct: 0 },
        { type: "typing", question: "Wie nimmt Julian das Gewitter wahr?", answer: ["als Reinigung", "bewundernd", "Befreiungsschlag"] },
        { type: "mcq", question: "Welche Funktion hat der Donner im Text?", options: ["Er dient der Beruhigung.", "Er unterstreicht die Gewalt der Natur.", "Er kündigt den Besuch an."], correct: 1 },
      ],
    },
  ],

 // ─── KLASSE 8 ─── (Argumentativer Text · These, Argumente, Schlussfolgerung)
  8: [
    {
      id: "k8_1",
      title: "Chancen und Risiken der KI im Unterricht",
      text: "Die Integration von Künstlicher Intelligenz (KI) in den Schulalltag ist eines der am heftigsten debattierten Themen der modernen Pädagogik. Befürworter betonen, dass KI-gestützte Lernprogramme eine individuelle Förderung ermöglichen, die Lehrkräfte allein kaum leisten können. So können Aufgaben in Echtzeit an das Leistungsniveau der Schüler angepasst werden. Kritiker hingegen warnen vor einem massiven Verlust an Eigenständigkeit und der Gefahr, dass kritisches Denken durch die reine Ergebnislieferung ersetzt wird. Zudem bleibe die Frage des Datenschutzes oft ungeklärt. Zusammenfassend lässt sich sagen, dass KI ein mächtiges Werkzeug sein kann, jedoch eine klare pädagogische Anleitung erfordert, um nicht zur bloßen 'Denkhilfe' zu verkommen. Nur so kann die Technologie den Lernprozess sinnvoll ergänzen, ohne die menschliche Komponente zu verdrängen.",
      questions: [
        { type: "mcq", question: "Welches Hauptargument führen die Befürworter an?", options: ["Kostenersparnis", "Individuelle Förderung", "Kürzerer Schultag"], correct: 1 },
        { type: "typing", question: "Was befürchten Kritiker bezüglich der Schüler?", answer: ["Verlust an Eigenständigkeit", "weniger kritisches Denken", "Abhängigkeit"] },
        { type: "mcq", question: "Was ist das Fazit des Autors?", options: ["KI sollte verboten werden.", "KI ersetzt den Lehrer komplett.", "KI braucht pädagogische Anleitung."], correct: 2 },
      ],
    },
    {
      id: "k8_2",
      title: "Verpflichtendes soziales Jahr nach dem Schulabschluss?",
      text: "Immer wieder wird die Einführung eines verpflichtenden sozialen Jahres für Schulabgänger gefordert. Ein wesentliches Argument dafür ist die Stärkung des gesellschaftlichen Zusammenhalts; junge Menschen könnten so wertvolle Erfahrungen in Krankenhäusern oder Pflegeheimen sammeln. Dies würde nicht nur dem Personalmangel im sozialen Sektor entgegenwirken, sondern auch die Persönlichkeitsentwicklung der Jugendlichen fördern. Auf der anderen Seite wird argumentiert, dass ein solcher Zwang einen erheblichen Eingriff in die individuelle Freiheit darstellt. Viele Schulabgänger möchten nach dem Prüfungsstress sofort mit dem Studium oder der Ausbildung beginnen. Ein Pflichtjahr könnte somit den Berufseinstieg unnötig verzögern. Letztlich stellt sich die Frage, ob echtes soziales Engagement erzwungen werden kann oder ob die Förderung von Freiwilligendiensten nicht der bessere Weg wäre.",
      questions: [
        { type: "mcq", question: "Welche gesellschaftliche Hoffnung ist mit dem Pflichtjahr verbunden?", options: ["Wirtschaftswachstum", "Stärkung des Zusammenhalts", "Höhere Steuereinnahmen"], correct: 1 },
        { type: "typing", question: "Was sehen Kritiker durch die Verpflichtung gefährdet?", answer: ["individuelle Freiheit", "persönliche Freiheit", "Entscheidungsfreiheit"] },
        { type: "mcq", question: "Welche Alternative schlägt der Text am Ende indirekt vor?", options: ["Die Abschaffung der Schule.", "Die Förderung von Freiwilligendiensten.", "Längere Arbeitszeiten für alle."], correct: 1 },
      ],
    },
    {
      id: "k8_3",
      title: "Billigfleisch und seine moralischen Kosten",
      text: "Trotz des wachsenden Bewusstseins für Nachhaltigkeit greifen viele Konsumenten im Supermarkt noch immer zu Billigfleisch. Das Hauptargument für diese Produkte ist meist der niedrige Preis, der es auch einkommensschwachen Haushalten ermöglicht, täglich Fleisch zu konsumieren. Doch dieser Preis ist trügerisch, da er die ökologischen und ethischen Folgen der Massentierhaltung ignoriert. Die enorme Belastung des Grundwassers durch Nitrate und der hohe Antibiotikaeinsatz in der Tiermast sind wissenschaftlich belegt. Zudem widersprechen die Haltungsbedingungen in vielen Großbetrieben jeglichem Tierschutzgedanken. Wer Billigfleisch kauft, unterstützt somit indirekt ein System, das auf Ausbeutung von Natur und Kreatur basiert. Eine konsequente Wende in der Agrarpolitik und eine höhere Wertschätzung für Lebensmittel sind daher dringend erforderlich, um langfristige Schäden für unseren Planeten zu minimieren.",
      questions: [
        { type: "mcq", question: "Was ist das stärkste Argument für den Kauf von Billigfleisch?", options: ["Der bessere Geschmack", "Der niedrige Preis", "Die regionale Herkunft"], correct: 1 },
        { type: "typing", question: "Nenne eine ökologische Folge der Massentierhaltung laut Text.", answer: ["Belastung des Grundwassers", "Nitrate", "Antibiotikaeinsatz"] },
        { type: "mcq", question: "Welche Forderung stellt der Autor am Ende?", options: ["Mehr Werbung für Fleisch.", "Senkung der Preise.", "Wende in der Agrarpolitik."], correct: 2 },
      ],
    },
  ],
};

/** Gibt eine zufällige, ausgefüllte Passage für die Klassenstufe zurück. */
export function getRandomPassage(grade: number): Lesepassage | null {
  const all = LESETEST[grade] ?? [];
  const filled = all.filter((p) => p.text.trim().length > 0 && p.questions.length > 0);
  if (filled.length === 0) return null;
  return filled[Math.floor(Math.random() * filled.length)];
}
