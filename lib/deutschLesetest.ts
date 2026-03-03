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
      {
  id: "k2_4",
  title: "Die kleine Schnecke",
  text: "Nach dem Regen kriecht eine kleine Schnecke langsam über den nassen Gartenweg. Sie trägt ihr rundes, braunes Haus auf dem Rücken und lässt eine glitzernde Spur hinter sich. Plötzlich kommt eine neugierige Katze und schnüffelt an der Schnecke. Die Schnecke zieht sich sofort ganz in ihr Haus zurück und wartet still. Als die Katze weitergeht, kommt die Schnecke wieder heraus und kriecht ruhig weiter.",
  questions: [
    { type: "mcq", question: "Was trägt die Schnecke auf dem Rücken?", options: ["einen Rucksack", "ihr Haus", "einen Stein"], correct: 1 },
    { type: "typing", question: "Was macht die Schnecke, als die Katze kommt?", answer: ["sie zieht sich zurück", "sie versteckt sich", "sie geht ins Haus"] },
    { type: "mcq", question: "Wann kriecht die Schnecke wieder heraus?", options: ["als es regnet", "als die Katze weitergeht", "am Abend"], correct: 1 },
  ],
},
{
  id: "k2_5",
  title: "Der neue Rucksack",
  text: "Heute ist Lenas erster Schultag und sie hat einen neuen, roten Rucksack bekommen. Darin liegen ein Heft, ein Mäppchen und eine Brotdose mit einem leckeren Käsebrot. In der Schule setzt sie sich neben ein Mädchen mit langen Zöpfen, das Lisa heißt. Die beiden lachen zusammen und tauschen ihre Buntstifte aus. Nach dem Unterricht laufen sie gemeinsam nach Hause und verabreden sich für den nächsten Tag.",
  questions: [
    { type: "mcq", question: "Welche Farbe hat Lenas neuer Rucksack?", options: ["blau", "grün", "rot"], correct: 2 },
    { type: "typing", question: "Wie heißt das Mädchen, das neben Lena sitzt?", answer: ["Lisa"] },
    { type: "mcq", question: "Was machen die beiden Mädchen am Ende?", options: ["Sie streiten sich.", "Sie verabreden sich.", "Sie schlafen ein."], correct: 1 },
  ],
},
{
  id: "k2_6",
  title: "Das Vogelhaus",
  text: "Im Winter ist es sehr kalt und Papa baut mit Tim zusammen ein kleines Vogelhaus aus Holz. Sie hängen es an den großen Apfelbaum im Garten und füllen es mit Sonnenblumenkernen. Schon am nächsten Morgen kommen zwei kleine Meisen und fressen die Körner. Tim schaut von seinem Zimmer aus durchs Fenster und freut sich sehr. Jeden Tag füllt er das Vogelhaus nach, damit die Vögel genug zu fressen haben.",
  questions: [
    { type: "mcq", question: "Wohin hängen Tim und Papa das Vogelhaus?", options: ["ans Fenster", "an den Apfelbaum", "an den Zaun"], correct: 1 },
    { type: "typing", question: "Welche Vögel kommen als erste zum Vogelhaus?", answer: ["Meisen", "zwei Meisen"] },
    { type: "mcq", question: "Warum füllt Tim das Vogelhaus jeden Tag nach?", options: ["weil es kaputt ist", "damit die Vögel genug Futter haben", "weil Papa es sagt"], correct: 1 },
  ],
},
    {
  id: "k2_7",
  title: "Der Schneemann",
  text: "Es hat die ganze Nacht geschneit und am Morgen liegt der Garten tief unter weißem Schnee. Mia und ihr Bruder Ben laufen sofort nach draußen und rollen drei große Schneebälle. Sie stapeln sie aufeinander und der Schneemann wird fast so groß wie Mama. Ben steckt ihm eine Karotte als Nase ins Gesicht und Mia wickelt einen bunten Schal um seinen Hals. Beide sind sehr stolz auf ihren Schneemann und machen ein Foto davon.",
  questions: [
    { type: "mcq", question: "Was machen Mia und Ben als erstes draußen?", options: ["Sie fahren Schlitten.", "Sie rollen Schneebälle.", "Sie werfen sich Schneebälle."], correct: 1 },
    { type: "typing", question: "Was steckt Ben dem Schneemann ins Gesicht?", answer: ["eine Karotte", "Karotte"] },
    { type: "mcq", question: "Was machen die Kinder am Ende?", options: ["Sie gehen rein.", "Sie machen ein Foto.", "Sie weinen."], correct: 1 },
  ],
},
{
  id: "k2_8",
  title: "Der mutige Frosch",
  text: "Am Teich sitzt ein kleiner grüner Frosch auf einem Stein und schaut ins Wasser. Als ein großer Hund bellend vorbeiläuft, springt der Frosch erschrocken ins Wasser. Er schwimmt schnell zu den Seerosen in der Mitte des Teiches und versteckt sich dort. Nach einer Weile ist alles wieder ruhig und der Frosch kommt zurück auf seinen Stein. Er blinzelt in die Sonne und quakt laut, als wäre nichts gewesen.",
  questions: [
    { type: "mcq", question: "Wo sitzt der Frosch am Anfang?", options: ["auf einer Seerose", "auf einem Stein", "im Wasser"], correct: 1 },
    { type: "typing", question: "Wohin schwimmt der Frosch, um sich zu verstecken?", answer: ["zu den Seerosen", "Seerosen", "Mitte des Teiches"] },
    { type: "mcq", question: "Was macht der Frosch, als alles wieder ruhig ist?", options: ["Er schläft.", "Er quakt laut.", "Er springt weg."], correct: 1 },
  ],
},
{
  id: "k2_9",
  title: "Die Geburtstagstorte",
  text: "Heute hat Oma Geburtstag und die ganze Familie backt zusammen eine Torte. Mama rührt den Teig, Papa schneidet die Erdbeeren und Emma streut Zucker darüber. Als die Torte fertig ist, stecken sie fünf Kerzen hinein und tragen sie zu Oma ins Wohnzimmer. Alle singen laut Geburtstagslied und Oma pustet die Kerzen auf einmal aus. Sie lacht und sagt, das ist die schönste Torte, die sie je bekommen hat.",
  questions: [
    { type: "mcq", question: "Wer hat heute Geburtstag?", options: ["Emma", "Mama", "Oma"], correct: 2 },
    { type: "typing", question: "Was macht Emma bei der Torte?", answer: ["sie streut Zucker", "Zucker streuen", "Zucker"] },
    { type: "mcq", question: "Was macht Oma mit den Kerzen?", options: ["Sie zündet sie an.", "Sie pustet sie aus.", "Sie nimmt sie weg."], correct: 1 },
  ],
},
{
  id: "k2_10",
  title: "Der Regenwurm",
  text: "Nach einem starken Regen liegt ein langer Regenwurm mitten auf dem Gehweg. Leo sieht ihn und hat Angst, dass jemand auf ihn tritt. Er nimmt vorsichtig ein Stöckchen und schiebt den Wurm behutsam ins feuchte Gras. Der Regenwurm bewegt sich sofort und verschwindet schnell in der Erde. Leo wischt seine Hände an der Hose ab und geht zufrieden weiter.",
  questions: [
    { type: "mcq", question: "Wo liegt der Regenwurm?", options: ["im Gras", "auf dem Gehweg", "in der Erde"], correct: 1 },
    { type: "typing", question: "Womit schiebt Leo den Wurm ins Gras?", answer: ["mit einem Stöckchen", "Stöckchen", "ein Stöckchen"] },
    { type: "mcq", question: "Was passiert mit dem Wurm am Ende?", options: ["Er stirbt.", "Er springt weg.", "Er verschwindet in der Erde."], correct: 2 },
  ],
},
{
  id: "k2_11",
  title: "Das Kätzchen im Baum",
  text: "Das kleine Kätzchen Mimi ist auf den alten Kirschbaum geklettert und kommt nicht mehr herunter. Es miaut laut und schaut ängstlich nach unten. Nachbar Herr Braun holt eine lange Leiter und steigt vorsichtig hinauf. Er nimmt das zitternde Kätzchen behutsam in die Arme und bringt es sicher auf den Boden. Mimi schnurrt laut und leckt Herrn Brauns Hand als Dankeschön.",
  questions: [
    { type: "mcq", question: "Wo sitzt das Kätzchen Mimi?", options: ["auf dem Dach", "auf dem Kirschbaum", "auf dem Zaun"], correct: 1 },
    { type: "typing", question: "Was holt Herr Braun, um zu helfen?", answer: ["eine Leiter", "Leiter", "eine lange Leiter"] },
    { type: "mcq", question: "Wie bedankt sich Mimi?", options: ["Sie springt weg.", "Sie kratzt ihn.", "Sie leckt seine Hand."], correct: 2 },
  ],
},
{
  id: "k2_12",
  title: "Die Pfütze",
  text: "Nach dem Regen liegt eine riesige Pfütze mitten auf dem Schulhof. Jonas läuft absichtlich mit seinen Gummistiefeln hindurch und spritzt das Wasser hoch. Dabei trifft er seine Freundin Sara und ihr Mantel wird nass. Sara ist zuerst sauer, aber dann lacht sie und springt selbst in die Pfütze. Die beiden spritzen so lange, bis beide von Kopf bis Fuß nass sind.",
  questions: [
    { type: "mcq", question: "Was trägt Jonas an den Füßen?", options: ["Turnschuhe", "Gummistiefel", "Sandalen"], correct: 1 },
    { type: "typing", question: "Wen trifft Jonas mit dem Spritzwasser?", answer: ["Sara", "seine Freundin Sara", "seine Freundin"] },
    { type: "mcq", question: "Wie endet die Geschichte?", options: ["Jonas läuft weg.", "Beide sind nass.", "Sara weint."], correct: 1 },
  ],
},
{
  id: "k2_13",
  title: "Das Meerschweinchen",
  text: "Nina hat zu ihrem Geburtstag ein kleines braunes Meerschweinchen bekommen und nennt es Krümel. Sie baut ihm ein weiches Bett aus Heu in seinem Käfig und gibt ihm frische Möhren. Krümel schnüffelt neugierig an Ninas Hand und frisst die Möhre ganz auf. Am Abend hält Nina Krümel vorsichtig in den Armen und er quiekt leise vor Freude. Von nun an kümmert sich Nina jeden Tag um ihr neues Haustier.",
  questions: [
    { type: "mcq", question: "Was hat Nina zu ihrem Geburtstag bekommen?", options: ["einen Hund", "ein Meerschweinchen", "eine Katze"], correct: 1 },
    { type: "typing", question: "Wie nennt Nina ihr Meerschweinchen?", answer: ["Krümel"] },
    { type: "mcq", question: "Was frisst Krümel von Nina?", options: ["Brot", "Käse", "eine Möhre"], correct: 2 },
  ],
},
{
  id: "k2_14",
  title: "Der große Einkauf",
  text: "Mama und Felix gehen zusammen in den Supermarkt, um Essen für die Woche einzukaufen. Felix darf den Einkaufswagen schieben und die Sachen aus dem Regal nehmen. An der Käsetheke darf er sogar ein kleines Stück probieren und es schmeckt ihm sehr gut. An der Kasse hilft Felix beim Aufs-Band-Legen und zahlt mit einem Geldstück. Auf dem Heimweg trägt er stolz eine leichte Tüte selbst.",
  questions: [
    { type: "mcq", question: "Was darf Felix im Supermarkt schieben?", options: ["einen Kinderwagen", "einen Einkaufswagen", "einen Trolley"], correct: 1 },
    { type: "typing", question: "Was darf Felix an der Käsetheke machen?", answer: ["probieren", "ein Stück probieren", "Käse probieren"] },
    { type: "mcq", question: "Was macht Felix auf dem Heimweg?", options: ["Er läuft voraus.", "Er trägt eine Tüte.", "Er schläft im Auto."], correct: 1 },
  ],
},
{
  id: "k2_15",
  title: "Der Regenbogen",
  text: "Nach einem kurzen Sommerregen scheint die Sonne wieder und am Himmel erscheint ein bunter Regenbogen. Sophie ruft laut ihre Mama und zeigt aufgeregt auf den Himmel. Die Mama erklärt ihr, dass Sonnenlicht und Regentropfen zusammen die bunten Farben erzeugen. Sophie zählt alle sieben Farben mit dem Finger in der Luft nach. Sie holt schnell ihren Malblock und malt den schönen Regenbogen auf ein weißes Blatt.",
  questions: [
    { type: "mcq", question: "Was erscheint nach dem Regen am Himmel?", options: ["ein Blitz", "ein Regenbogen", "eine Wolke"], correct: 1 },
    { type: "typing", question: "Wie viele Farben hat der Regenbogen?", answer: ["sieben", "7"] },
    { type: "mcq", question: "Was macht Sophie am Ende?", options: ["Sie schläft.", "Sie malt den Regenbogen.", "Sie läuft in den Regen."], correct: 1 },
  ],
},
{
  id: "k2_16",
  title: "Der verlorene Teddybär",
  text: "Moritz kann nicht einschlafen, weil sein Lieblingsteddybär Bruno nirgends zu finden ist. Er sucht unter dem Bett, im Schrank und hinter dem Sofa, aber Bruno bleibt verschwunden. Mama hilft suchen und findet Bruno schließlich in der Waschmaschine. Bruno wurde versehentlich mit der Wäsche eingeschlossen und ist jetzt ganz nass. Mama hängt ihn schnell auf die Heizung zum Trocknen und Moritz schläft mit einem Lächeln ein.",
  questions: [
    { type: "mcq", question: "Warum kann Moritz nicht schlafen?", options: ["Er hat Hunger.", "Er hat Angst.", "Sein Teddy ist weg."], correct: 2 },
    { type: "typing", question: "Wo findet Mama den Teddybär?", answer: ["in der Waschmaschine", "Waschmaschine"] },
    { type: "mcq", question: "Was macht Mama mit dem nassen Teddy?", options: ["Sie kauft einen neuen.", "Sie legt ihn ins Bett.", "Sie hängt ihn auf die Heizung."], correct: 2 },
  ],
},
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
         {
  id: "k3_4",
  title: "Der Gartenteich",
  text: "Im Garten von Familie Müller gibt es einen kleinen Teich mit goldenen Fischen und grünen Seerosen. Eines Morgens bemerkt Opa, dass einer der Fische nicht mehr schwimmt, sondern traurig an der Oberfläche treibt. Er ruft seinen Enkel Felix und gemeinsam schauen sie sich das Wasser genau an. Das Wasser ist trüb und grünlich, weil es seit Wochen nicht gereinigt wurde. Felix hilft Opa dabei, das Wasser mit einem Eimer auszuwechseln und frisches Wasser einzufüllen. Nach ein paar Stunden schwimmen alle Fische wieder munter durch den sauberen Teich. Felix ist erleichtert und verspricht, den Teich von nun an regelmäßig zu pflegen.",
  questions: [
    { type: "mcq", question: "Was bemerkt Opa am Morgen?", options: ["Ein Fisch treibt an der Oberfläche.", "Der Teich ist leer.", "Eine Seerose ist verschwunden."], correct: 0 },
    { type: "typing", question: "Warum ist das Wasser trüb?", answer: ["es wurde nicht gereinigt", "weil es nicht gereinigt wurde", "keine Reinigung"] },
    { type: "mcq", question: "Was verspricht Felix am Ende?", options: ["Einen neuen Teich zu bauen.", "Den Teich regelmäßig zu pflegen.", "Keine Fische mehr zu halten."], correct: 1 },
  ],
},
{
  id: "k3_5",
  title: "Das Gewitter",
  text: "Marie sitzt allein zu Hause und macht ihre Hausaufgaben, als plötzlich ein heftiges Gewitter losbricht. Der Donner kracht so laut, dass Marie erschrocken ihr Heft fallen lässt. Sie schließt schnell alle Fenster und holt die Wäsche von der Leine, bevor alles nass wird. Dann kuschelt sie sich mit ihrer Katze Bella unter eine warme Decke auf das Sofa. Bella schnurrt beruhigend und Marie fühlt sich gleich viel mutiger. Als ihre Eltern nach Hause kommen, hat das Gewitter schon aufgehört. Marie erzählt stolz, dass sie alles ganz alleine geschafft hat.",
  questions: [
    { type: "mcq", question: "Was macht Marie, als das Gewitter beginnt?", options: ["Sie schläft.", "Sie macht Hausaufgaben.", "Sie spielt draußen."], correct: 1 },
    { type: "typing", question: "Was holt Marie von der Leine?", answer: ["die Wäsche", "Wäsche"] },
    { type: "mcq", question: "Was macht Marie mutig?", options: ["Das Licht anmachen.", "Die Katze Bella.", "Ein Lied singen."], correct: 1 },
  ],
},
{
  id: "k3_6",
  title: "Der Tauschmarkt",
  text: "In der Schule veranstaltet die Klasse von Leon einen Tauschmarkt, bei dem jeder etwas von zu Hause mitbringen darf. Leon bringt ein altes Bilderbuch mit, das er nicht mehr braucht, und hofft, dafür etwas Spannendes zu tauschen. An einem Tisch liegt ein kleines Taschenmesser mit vielen Werkzeugen, das ihm sofort gefällt. Leider hat der Besitzer kein Interesse an Leons Buch und schüttelt den Kopf. Dann sieht Leon, dass ein Mädchen namens Hanna das Buch unbedingt haben möchte. Hanna tauscht ihm dafür eine tolle Lupe, die sie nicht mehr braucht. Leon ist zufrieden, denn mit der Lupe kann er endlich seine Käfersammlung genau untersuchen.",
  questions: [
    { type: "mcq", question: "Was bringt Leon zum Tauschmarkt mit?", options: ["Ein Taschenmesser.", "Ein Bilderbuch.", "Eine Lupe."], correct: 1 },
    { type: "typing", question: "Was bekommt Leon am Ende beim Tauschen?", answer: ["eine Lupe", "Lupe"] },
    { type: "mcq", question: "Wofür möchte Leon die Lupe benutzen?", options: ["Zum Lesen.", "Für seine Käfersammlung.", "Für die Schule."], correct: 1 },
  ],
},
{
  id: "k3_7",
  title: "Die kranke Freundin",
  text: "Sophie erfährt, dass ihre beste Freundin Lea krank ist und seit drei Tagen nicht in die Schule kommen kann. Sie beschließt, Lea nach dem Unterricht zu besuchen und ihr etwas Aufmunterndes mitzubringen. Sophie malt eine bunte Karte mit einem lachenden Sonnenblumen-Gesicht und schreibt einen lieben Gruß hinein. Außerdem packt sie ihre Lieblingscomichefte in eine Tasche, damit Lea etwas zu lesen hat. Als Sophie klingelt, öffnet Leas Mama die Tür und freut sich sehr über den Besuch. Lea liegt im Bett, aber ihre Augen leuchten auf, als sie Sophie mit den Heften sieht. Die beiden verbringen den Nachmittag beim Lesen und Lachen, bis Sophie nach Hause muss.",
  questions: [
    { type: "mcq", question: "Warum ist Lea nicht in der Schule?", options: ["Sie hat Ferien.", "Sie ist krank.", "Sie ist umgezogen."], correct: 1 },
    { type: "typing", question: "Was malt Sophie für Lea?", answer: ["eine bunte Karte", "eine Karte", "Karte"] },
    { type: "mcq", question: "Was bringt Sophie außerdem mit?", options: ["Süßigkeiten.", "Comichefte.", "Blumen."], correct: 1 },
  ],
},
{
  id: "k3_8",
  title: "Das Nest im Briefkasten",
  text: "Als Herr Wagner seinen Briefkasten öffnen will, entdeckt er darin ein kleines Vogelnest mit drei winzigen blauen Eiern. Er schließt den Briefkasten vorsichtig wieder und überlegt, was er tun soll. Seine Nachbarin, die sich gut mit Vögeln auskennt, rät ihm, das Nest in Ruhe zu lassen. Also befestigt Herr Wagner am Gartentor einen Zettel mit der Aufschrift: 'Bitte Briefe hier einwerfen' und hängt daneben eine Kiste. Jeden Morgen beobachtet er vom Fenster aus, wie ein kleines braunes Vögelchen das Nest wärmt. Nach drei Wochen schlüpfen die Küken und lernen schnell das Fliegen. Erst als alle drei Vögel davongeflogen sind, räumt Herr Wagner das leere Nest behutsam aus dem Briefkasten.",
  questions: [
    { type: "mcq", question: "Was findet Herr Wagner in seinem Briefkasten?", options: ["Einen Brief.", "Ein Vogelnest mit Eiern.", "Eine Maus."], correct: 1 },
    { type: "typing", question: "Was schreibt Herr Wagner auf den Zettel am Gartentor?", answer: ["Bitte Briefe hier einwerfen", "Briefe hier einwerfen"] },
    { type: "mcq", question: "Wann räumt er das Nest weg?", options: ["Nach einer Woche.", "Wenn die Eier schlüpfen.", "Wenn alle Vögel weggeflogen sind."], correct: 2 },
  ],
},
{
  id: "k3_9",
  title: "Das verschwundene Pausenbrot",
  text: "Als Finn in der Pause seine Brotdose öffnet, ist sein Pausenbrot verschwunden und er weiß nicht warum. Er fragt seine Sitznachbarin Emma, ob sie etwas gesehen hat, aber auch sie schüttelt den Kopf. Plötzlich hört Finn ein leises Rascheln aus seinem Rucksack und zieht ihn neugierig auf. Darin sitzt sein Hamster Knubbel, den er heute Morgen versehentlich eingepackt hat. Das Brot liegt angekaut neben ihm und Knubbel schaut Finn mit großen schwarzen Augen an. Alle Kinder in der Klasse lachen herzlich und Finn wird rot vor Scham. Sein Lehrer hilft ihm, Knubbel sicher nach Hause zu bringen.",
  questions: [
    { type: "mcq", question: "Was fehlt in Finns Brotdose?", options: ["Ein Apfel.", "Sein Pausenbrot.", "Sein Trinkgeld."], correct: 1 },
    { type: "typing", question: "Was entdeckt Finn in seinem Rucksack?", answer: ["seinen Hamster", "Hamster", "Knubbel"] },
    { type: "mcq", question: "Wie reagieren die Kinder?", options: ["Sie weinen.", "Sie lachen herzlich.", "Sie werden böse."], correct: 1 },
  ],
},
{
  id: "k3_10",
  title: "Die Klassenreise",
  text: "Die Klasse 3b fährt für zwei Tage in ein Waldhotel und alle Kinder sind aufgeregt. Im Wald führt eine Rangerin die Gruppe zu einem alten Baumstumpf, unter dem eine Fuchsfamilie lebt. Die Kinder müssen ganz leise sein, damit die Füchse nicht erschrecken. Tatsächlich kommt ein junger Fuchs neugierig aus dem Bau heraus und schaut die Gruppe an. Alle halten den Atem an und staunen über das mutige Tier. Abends sitzen die Kinder am Lagerfeuer, singen Lieder und essen Marshmallows. Niemand möchte am nächsten Morgen wieder nach Hause fahren.",
  questions: [
    { type: "mcq", question: "Wohin fährt die Klasse 3b?", options: ["An den See.", "In ein Waldhotel.", "In die Stadt."], correct: 1 },
    { type: "typing", question: "Was lebt unter dem alten Baumstumpf?", answer: ["eine Fuchsfamilie", "Füchse", "Fuchsfamilie"] },
    { type: "mcq", question: "Was machen die Kinder am Abend?", options: ["Sie schlafen früh.", "Sie spielen Fußball.", "Sie sitzen am Lagerfeuer."], correct: 2 },
  ],
},
{
  id: "k3_11",
  title: "Der Kuchen für die Oma",
  text: "Luisa möchte ihrer Oma zum Namenstag einen Kuchen backen und sucht im Internet nach einem einfachen Rezept. Sie schreibt alle Zutaten auf einen Zettel und geht alleine in den Supermarkt, um alles einzukaufen. Zu Hause mischt sie Mehl, Eier, Zucker und Butter sorgfältig zusammen und gießt den Teig in eine Form. Nach vierzig Minuten im Ofen duftet die ganze Wohnung nach frischem Kuchen. Luisa wartet ungeduldig, bis der Kuchen abgekühlt ist, und streut dann Puderzucker darüber. Als sie ihn zur Oma bringt, strahlt die alte Frau vor Freude. Sie sagt, es ist der allerbeste Kuchen, den sie je gegessen hat.",
  questions: [
    { type: "mcq", question: "Für wen backt Luisa den Kuchen?", options: ["Für ihre Lehrerin.", "Für ihre Oma.", "Für ihre Freundin."], correct: 1 },
    { type: "typing", question: "Was streut Luisa über den abgekühlten Kuchen?", answer: ["Puderzucker", "Zucker"] },
    { type: "mcq", question: "Wie reagiert die Oma auf den Kuchen?", options: ["Sie isst ihn nicht.", "Sie strahlt vor Freude.", "Sie ist traurig."], correct: 1 },
  ],
},
{
  id: "k3_12",
  title: "Der neue Mitschüler",
  text: "An einem Montag kommt ein neuer Junge namens Omar in die Klasse und setzt sich schüchtern auf den freien Platz neben Tom. Omar ist erst vor einer Woche aus einem anderen Land hergezogen und spricht noch nicht viel Deutsch. Tom bemerkt, dass Omar in der Pause alleine auf der Bank sitzt und traurig schaut. Er geht zu ihm, zeigt auf sich selbst und sagt laut seinen Namen. Omar lächelt und nennt auch seinen Namen, dann zeigen beide auf verschiedene Dinge und lernen gegenseitig neue Wörter. Schon am nächsten Tag spielen sie gemeinsam Fußball in der Pause. Tom freut sich, denn er hat einen neuen Freund gewonnen.",
  questions: [
    { type: "mcq", question: "Warum spricht Omar wenig Deutsch?", options: ["Er mag die Sprache nicht.", "Er ist neu aus einem anderen Land.", "Er ist krank."], correct: 1 },
    { type: "typing", question: "Was macht Tom, um sich Omar vorzustellen?", answer: ["er zeigt auf sich und sagt seinen Namen", "er nennt seinen Namen", "seinen Namen sagen"] },
    { type: "mcq", question: "Was machen Tom und Omar am nächsten Tag?", options: ["Sie lesen zusammen.", "Sie spielen Fußball.", "Sie malen Bilder."], correct: 1 },
  ],
},
{
  id: "k3_13",
  title: "Die mutige Mia",
  text: "Mia hat schon lange Angst vor Hunden, weil sie einmal als kleines Kind von einem erschreckt wurde. Als ihr Nachbar einen großen goldenen Hund namens Bello bekommt, weicht Mia ihm immer aus. Eines Tages bleibt Bello vor ihr stehen, wedelt mit dem Schwanz und legt sich dann einfach auf den Boden. Mias Herz klopft laut, aber sie kauert sich langsam hin und streckt zitternd die Hand aus. Bello leckt ihre Hand sanft und schaut sie mit treuen Augen an. Mia lacht überrascht, denn es fühlt sich gar nicht bedrohlich an. Von diesem Tag an besucht sie Bello jeden Nachmittag und ihre Angst verschwindet langsam.",
  questions: [
    { type: "mcq", question: "Wovor hat Mia Angst?", options: ["Vor Katzen.", "Vor Hunden.", "Vor Gewitter."], correct: 1 },
    { type: "typing", question: "Wie heißt der Hund des Nachbarn?", answer: ["Bello"] },
    { type: "mcq", question: "Was passiert mit Mias Angst am Ende?", options: ["Sie wird größer.", "Sie bleibt gleich.", "Sie verschwindet langsam."], correct: 2 },
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
      [
  {
    id: "k4_4",
    title: "Der entlaufene Hund",
    text: "Es war ein stürmischer Dienstagabend, als Herr Müller bemerkte, dass das Gartentor sperrangelweit offen stand. Sein kleiner Hund 'Bello' war nirgends zu sehen. Verzweifelt lief Herr Müller durch die Nachbarschaft und rief laut seinen Namen. Der Wind wehte ihm den Regen ins Gesicht, doch er gab nicht auf. An der alten Bushaltestelle traf er die kleine Emma. 'Haben Sie einen braunen Hund mit einem roten Halsband gesucht?', fragte sie aufgeregt. Sie zeigte in Richtung des Stadtparks. Herr Müller eilte dorthin und fand Bello, der verängstigt unter einer Parkbank hockte. Vor Freude schloss er seinen treuen Begleiter in die Arme und versprach, das Tor in Zukunft immer doppelt zu kontrollieren.",
    questions: [
      { type: "mcq", question: "Warum ist Bello verschwunden?", options: ["Er ist über den Zaun gesprungen.", "Das Gartentor war offen.", "Er wurde gestohlen."], correct: 1 },
      { type: "typing", question: "Welche Farbe hat Bellos Halsband?", answer: ["rot", "ein rotes Halsband", "rotes"] },
      { type: "mcq", question: "Wo findet Herr Müller seinen Hund schließlich?", options: ["im Garten", "an der Bushaltestelle", "unter einer Parkbank im Park"], correct: 2 },
    ],
  },
  {
    id: "k4_5",
    title: "Rettung für den kleinen Vogel",
    text: "Lukas spielte im Garten, als er unter dem Kirschbaum ein leises Piepsen hörte. Im hohen Gras lag ein kleiner Vogel, der offenbar aus dem Nest gefallen war. Er hatte noch kaum Federn und zitterte. Lukas wusste, dass er ihn nicht einfach mit bloßen Händen anfassen sollte. Er lief schnell ins Haus und holte seinen Vater. Gemeinsam bauten sie aus einem alten Schuhkarton und etwas weichem Heu ein Ersatznest. Der Vater holte die lange Leiter aus dem Schuppen und setzte das Vögelchen vorsichtig zurück in die Astgabel. Aus sicherer Entfernung beobachteten sie, wie die Vogelmutter kurz darauf mit Futter zurückkehrte. Lukas war froh, dass er dem kleinen Tier helfen konnte.",
    questions: [
      { type: "mcq", question: "Was findet Lukas unter dem Kirschbaum?", options: ["einen Igel", "einen kleinen Vogel", "einen Apfel"], correct: 1 },
      { type: "typing", question: "Woraus bauen Lukas und sein Vater ein Ersatznest?", answer: ["Schuhkarton", "aus einem Schuhkarton", "Karton"] },
      { type: "mcq", question: "Was macht der Vater, um den Vogel zurückzubringen?", options: ["Er wirft ihn hoch.", "Er benutzt eine Leiter.", "Er klettert auf den Baum."], correct: 1 },
    ],
  },
  {
    id: "k4_6",
    title: "Die Überraschungsparty",
    text: "Heute war Papas vierzigster Geburtstag, und die ganze Familie war seit Stunden heimlich am Vorbereiten. Mama backte in der Küche einen riesigen Schokoladenkuchen, während Lisa und Tom das Wohnzimmer mit bunten Girlanden und Luftballons schmückten. 'Psst, er parkt gerade das Auto!', flüsterte Tom aufgeregt. Schnell versteckten sich alle hinter dem Sofa und unter dem Esstisch. Als Papa die Tür öffnete und das Licht einschaltete, sprangen alle hervor und riefen im Chor: 'Überraschung!' Papa erschrak kurz, fing dann aber laut an zu lachen. Er hatte den ganzen Tag gearbeitet und überhaupt nicht damit gerechnet, dass alle an seine Feier gedacht hatten.",
    questions: [
      { type: "mcq", question: "Welchen Geburtstag feiert der Vater?", options: ["den dreißigsten", "den fünfzigsten", "den vierzigsten"], correct: 2 },
      { type: "typing", question: "Wo verstecken sich die Kinder?", answer: ["hinter dem Sofa", "unterm Tisch", "Sofa und Tisch"] },
      { type: "mcq", question: "Wie reagiert Papa auf die Überraschung?", options: ["Er ist wütend.", "Er lacht laut.", "Er weint vor Schreck."], correct: 1 },
    ],
  },
  {
    id: "k4_7",
    title: "Ein Tag am See",
    text: "Die Sonne brannte heiß vom Himmel, als Familie Schmidt am Ufer des Silbersees ankam. Sarah konnte es kaum erwarten und sprang sofort mit ihren knallgelben Schwimmflügeln ins kühle Wasser. Ihr Bruder Max wollte lieber eine riesige Sandburg bauen. Er sammelte Muscheln und kleine Steine, um die Türme zu verzieren. Gegen Mittag packte Mutter die Kühltasche aus. Es gab belegte Brötchen, Melonenstücke und kalte Limonade. Nach dem Essen machten sie ein kurzes Nickerchen im Schatten der großen Weide. Es war ein herrlicher Sommertag, den niemand so schnell vergessen würde. Erst als die Sonne langsam unterging, packten sie ihre Sachen und fuhren müde, aber glücklich nach Hause.",
    questions: [
      { type: "mcq", question: "Welche Farbe haben Sarahs Schwimmflügel?", options: ["blau", "gelb", "rot"], correct: 1 },
      { type: "typing", question: "Was benutzt Max, um seine Sandburg zu verzieren?", answer: ["Muscheln und Steine", "Muscheln", "Steine"] },
      { type: "mcq", question: "Wo ruht sich die Familie nach dem Mittagessen aus?", options: ["im Zelt", "im Wasser", "im Schatten einer Weide"], correct: 2 },
    ],
  },
  {
    id: "k4_8",
    title: "Der verlorene Schlüssel",
    text: "Annas Mutter suchte schon seit zehn Minuten ihren Hausschlüssel. Sie war spät dran für einen wichtigen Termin und wurde immer nervöser. Sie schaute in ihrer Handtasche, im Flur auf der Kommode und sogar im Kühlschrank nach. 'Hast du ihn vielleicht gesehen, Anna?', fragte sie hektisch. Anna überlegte kurz. Sie erinnerte sich, dass ihre Mutter gestern Abend die Blumen auf der Terrasse gegossen hatte. Anna lief nach draußen und suchte den Boden ab. Tatsächlich: Direkt neben dem großen Tontopf lag der silberne Schlüsselbund im Gras. 'Hier ist er!', rief Anna stolz. Ihre Mutter war so erleichtert, dass sie Anna zum Dank versprach, auf dem Heimweg ihr Lieblingseis mitzubringen.",
    questions: [
      { type: "mcq", question: "Warum ist die Mutter nervös?", options: ["Sie hat Hunger.", "Sie sucht ihren Schlüssel.", "Sie muss zum Sport."], correct: 1 },
      { type: "typing", question: "Wo findet Anna den Schlüssel?", options: ["auf der Terrasse", "neben dem Tontopf", "im Gras"] },
      { type: "mcq", question: "Was bekommt Anna als Belohnung?", options: ["ein Spielzeug", "ein Eis", "Geld"], correct: 1 },
    ],
  },
  {
    id: "k4_9",
    title: "Nachtwanderung im Ferienlager",
    text: "Die erste Nacht im Ferienlager war besonders aufregend. Der Betreuer Marc hatte eine Nachtwanderung durch den angrenzenden Wald angekündigt. Nur mit Taschenlampen bewaffnet machten sich die Kinder auf den Weg. Überall knackten Äste und die Schatten der Bäume sahen im fahlen Mondlicht wie riesige Gespenster aus. Leo hielt die Hand seines Freundes fest umschlossen. Plötzlich hörten sie ein lautes 'Uhu, Uhu'. Alle blieben stehen und hielten den Atem an. 'Keine Angst, das ist nur eine Eule', erklärte Marc ruhig und leuchtete mit seiner starken Lampe in eine alte Kiefer. Tatsächlich sahen sie zwei große, leuchtende Augen. Nach diesem Abenteuer schliefen alle Kinder tief und fest in ihren Schlafsäcken.",
    questions: [
      { type: "mcq", question: "Womit sind die Kinder bei der Wanderung ausgestattet?", options: ["Fackeln", "Taschenlampen", "Kerzen"], correct: 1 },
      { type: "typing", question: "Welches Tier macht das 'Uhu'-Geräusch?", answer: ["Eule", "eine Eule", "Waldkauz"] },
      { type: "mcq", question: "In welcher Baumart sitzt die Eule?", options: ["Eiche", "Buche", "Kiefer"], correct: 2 },
    ],
  },
  {
    id: "k4_10",
    title: "Das erste Fußballtraining",
    text: "Julian hatte heute sein allererstes Training im Fußballverein. Er trug seine neuen, blauen Fußballschuhe und ein weißes Trikot. Auf dem Platz warteten schon viele andere Kinder. Der Trainer, Herr Krause, erklärte zuerst die Regeln: 'Das Wichtigste ist der Teamgeist und dass ihr Spaß habt!' Dann machten sie Aufwärmübungen und dribbelten mit dem Ball um bunte Hütchen. Julian war anfangs sehr schüchtern, aber als er im Abschlussspiel ein Tor schoss, jubelten seine neuen Mitspieler laut. Er klatschte mit allen ab und fühlte sich sofort als Teil der Mannschaft. Auf dem Heimweg fragte er seinen Vater: 'Wann ist das nächste Training?'",
    questions: [
      { type: "mcq", question: "Welche Farbe haben Julians neue Schuhe?", options: ["schwarz", "blau", "grün"], correct: 1 },
      { type: "typing", question: "Was ist laut Trainer Krause das Wichtigste?", answer: ["Teamgeist", "Spaß", "Teamgeist und Spaß"] },
      { type: "mcq", question: "Was passiert im Abschlussspiel?", options: ["Julian verletzt sich.", "Julian schießt ein Tor.", "Julian geht nach Hause."], correct: 1 },
    ],
  },
  {
    id: "k4_11",
    title: "Stau auf der Autobahn",
    text: "Familie Weber wollte in den Urlaub nach Italien fahren. Die Koffer waren gepackt und die Stimmung war prächtig. Doch plötzlich bremste der Vater das Auto ab. Vor ihnen stand eine lange Schlange von Fahrzeugen – Stau! 'Oh nein, das kann Stunden dauern', seufzte die Mutter. Draußen war es sehr heiß und die Klimaanlage summte leise. Um die Zeit zu vertreiben, spielten sie 'Ich sehe was, was du nicht siehst'. Lisa entdeckte einen roten Laster und Tom ein Motorrad mit Beiwagen. Nach einer gefühlten Ewigkeit löste sich der Stau endlich auf, weil eine Baustelle zu Ende war. Als sie abends das Meer sahen, war der Ärger über die Wartezeit sofort vergessen.",
    questions: [
      { type: "mcq", question: "Wohin möchte Familie Weber in den Urlaub fahren?", options: ["Spanien", "Italien", "Frankreich"], correct: 1 },
      { type: "typing", question: "Welches Spiel spielen sie im Auto?", answer: ["Ich sehe was, was du nicht siehst", "Rate-Spiel", "Ich sehe was"] },
      { type: "mcq", question: "Was war der Grund für den Stau?", options: ["ein Unfall", "eine Baustelle", "ein liegengebliebenes Auto"], correct: 1 },
    ],
  },
  {
    id: "k4_12",
    title: "Besuch im Tierpark",
    text: "Am Sonntag besuchten Klara und ihr Opa den großen Tierpark. Klara freute sich am meisten auf die Elefanten. Als sie am Gehege ankamen, fütterte ein Pfleger die Tiere gerade mit Äpfeln und Heu. Klara staunte, wie geschickt die Elefanten ihren Rüssel benutzten. Danach gingen sie zu den Affen, die lustige Purzelbäume schlugen und von Ast zu Ast sprangen. 'Guck mal Opa, der kleine Affe hat eine Banane geklaut!', lachte Klara. Zum Abschluss kaufte Opa ihr eine große Tüte Popcorn. Während sie auf einer Bank saßen und die Flamingos beobachteten, erzählte Opa Geschichten von früher. Es war ein wunderbarer Tag voller neuer Eindrücke.",
    questions: [
      { type: "mcq", question: "Auf welches Tier freut sich Klara am meisten?", options: ["Löwen", "Elefanten", "Giraffen"], correct: 1 },
      { type: "typing", question: "Was fressen die Elefanten beim Pfleger?", answer: ["Äpfel und Heu", "Äpfel", "Heu"] },
      { type: "mcq", question: "Was essen Klara und Opa am Ende?", options: ["Eis", "Würstchen", "Popcorn"], correct: 2 },
    ],
  },
  {
    id: "k4_13",
    title: "Der Stromausfall",
    text: "Es war ein dunkler Novemberabend, als plötzlich das Licht ausging. Der Fernseher wurde schwarz und der Computer summte nicht mehr. 'Ein Stromausfall!', rief Papa aus der Küche. Zuerst war es im Haus unheimlich still. Doch dann holte Mama dicke Stumpenkerzen und stellte sie im Wohnzimmer auf. Das warme Licht warf gemütliche Schatten an die Wände. Da sie nicht fernsehen konnten, holten sie das alte Brettspiel 'Mensch ärgere dich nicht' hervor. Sie spielten beim Schein der Kerzen und lachten viel mehr als sonst. Als das Licht nach einer Stunde plötzlich wieder anging, riefen die Kinder fast ein bisschen enttäuscht: 'Och, schon vorbei?'",
    questions: [
      { type: "mcq", question: "In welchem Monat spielt die Geschichte?", options: ["Januar", "November", "März"], correct: 1 },
      { type: "typing", question: "Welches Brettspiel spielt die Familie?", answer: ["Mensch ärgere dich nicht", "Mensch ärgere dich", "Mensch ärgere dich nicht Spiel"] },
      { type: "mcq", question: "Wie lange dauerte der Stromausfall?", options: ["den ganzen Tag", "zehn Minuten", "eine Stunde"], correct: 2 },
    ],
  }
]
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
