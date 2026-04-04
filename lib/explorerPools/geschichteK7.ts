import type { PoolTopicDef, SvgConfig } from "./types";

type Lang = "de";
type L1 = Record<Lang, string>;

const L = (de: string): L1 => ({ de });

interface TopicSpec {
  id: string;
  title: L1;
  hint1: L1;
  hint2: L1;
  svg: SvgConfig;
  interactive: any; 
  quiz: {
    question: L1;
    choices: L1[];
    answer: L1;
  };
}

interface IslandSpec {
  id: string;
  title: L1;
  topics: TopicSpec[];
}

function buildIsland(island: IslandSpec) {
  const labels: Record<Lang, Record<string, string>> = {
    de: { explorer_title: island.title.de },
  };

  const pool: PoolTopicDef[] = island.topics.map((topic) => {
    const prefix = `${island.id}_${topic.id}`;
    
    labels.de[`${prefix}_title`] = topic.title.de;
    labels.de[`${prefix}_h1`] = topic.hint1.de;
    labels.de[`${prefix}_h2`] = topic.hint2.de;
    labels.de[`${prefix}_q`] = topic.quiz.question.de;
    topic.quiz.choices.forEach((c, i) => {
      labels.de[`${prefix}_c${i}`] = c.de;
    });
    labels.de[`${prefix}_a`] = topic.quiz.answer.de;

    let interactive = { ...topic.interactive };
    if (interactive.instruction) {
      labels.de[`${prefix}_instr`] = interactive.instruction.de;
      interactive.instruction = `${prefix}_instr`;
    }
    
    if (interactive.type === "match-pairs") {
      interactive.pairs = interactive.pairs.map((p: any, i: number) => {
        labels.de[`${prefix}_p${i}l`] = p.left.de;
        labels.de[`${prefix}_p${i}r`] = p.right.de;
        return { left: `${prefix}_p${i}l`, right: `${prefix}_p${i}r` };
      });
    } else if (interactive.type === "gap-fill") {
      labels.de[`${prefix}_gf_text`] = interactive.text.de;
      interactive.text = `${prefix}_gf_text`;
      interactive.gaps = interactive.gaps.map((g: any, i: number) => {
        g.options = g.options.map((opt: any, j: number) => {
          labels.de[`${prefix}_gf${i}o${j}`] = opt.de;
          return `${prefix}_gf${i}o${j}`;
        });
        return g;
      });
    } else if (interactive.type === "drag-to-bucket") {
      interactive.buckets = interactive.buckets.map((b: any, i: number) => {
        labels.de[`${prefix}_b${i}`] = b.label.de;
        b.label = `${prefix}_b${i}`;
        return b;
      });
      interactive.items = interactive.items.map((it: any, i: number) => {
        labels.de[`${prefix}_it${i}`] = it.text.de;
        it.text = `${prefix}_it${i}`;
        return it;
      });
    } else if (interactive.type === "word-order" || interactive.type === "sentence-build") {
      interactive.words = interactive.words.map((w: any, i: number) => {
        labels.de[`${prefix}_w${i}`] = w.de;
        return `${prefix}_w${i}`;
      });
    } else if (interactive.type === "highlight-text") {
      labels.de[`${prefix}_ht`] = interactive.text.de;
      interactive.text = `${prefix}_ht`;
    } else if (interactive.type === "lang-mcq") {
      labels.de[`${prefix}_lq`] = interactive.question.de;
      interactive.question = `${prefix}_lq`;
      interactive.choices = interactive.choices.map((c: any, i: number) => {
        labels.de[`${prefix}_lc${i}`] = c.de;
        return `${prefix}_lc${i}`;
      });
      labels.de[`${prefix}_la`] = interactive.answer.de;
      interactive.answer = `${prefix}_la`;
    }

    return {
      infoTitle: `${prefix}_title`,
      infoText: `${prefix}_h1`,
      hintKey: `${prefix}_h2`,
      svg: topic.svg,
      interactive: interactive,
      quiz: {
        question: `${prefix}_q`,
        choices: topic.quiz.choices.map((_, i) => `${prefix}_c${i}`),
        answer: `${prefix}_a`,
      },
    };
  });

  return { labels, pool };
}

// ─── ISLAND 1: DIE FRANZÖSISCHE REVOLUTION (BEGINN) ────────────────────────
const I1: IslandSpec = {
  id: "i1",
  title: L("Französische Revolution: Beginn"),
  topics: [
    {
      id: "staende",
      title: L("Ständegesellschaft"),
      hint1: L("Die Gesellschaft war in drei Stände geteilt."),
      hint2: L("Klerus, Adel und der Dritte Stand."),
      svg: { type: "two-groups", left: { items: ["Klerus", "Adel"], bg: "#fee2e2", border: "#ef4444" }, right: { items: ["Bauern", "Bürger"], bg: "#dcfce7", border: "#22c55e" } },
      interactive: { type: "match-pairs", pairs: [{ left: L("1. Stand"), right: L("Klerus") }, { left: L("2. Stand"), right: L("Adel") }, { left: L("3. Stand"), right: L("Bauern") }] },
      quiz: { question: L("Wer gehörte zum ersten Stand?"), choices: [L("Klerus"), L("Adel"), L("Bauern"), L("König")], answer: L("Klerus") }
    },
    {
      id: "generalstaende",
      title: L("Generalstände"),
      hint1: L("1789 rief Ludwig XVI. die Generalstände zusammen."),
      hint2: L("Das Ziel war die Lösung der Finanzkrise."),
      svg: { type: "text-bubbles", items: [{ text: "1789", color: "#fff", bg: "#3b82f6" }, { text: "Steuern", color: "#fff", bg: "#ef4444" }] },
      interactive: { type: "gap-fill", text: L("Der König brauchte neues __."), gaps: [{ index: 0, options: [L("Geld"), L("Brot")], correct: 0 }] },
      quiz: { question: L("In welchem Jahr wurden die Generalstände einberufen?"), choices: [L("1789"), L("1776"), L("1815"), L("1799")], answer: L("1789") }
    },
    {
      id: "ballhaus",
      title: L("Ballhausschwur"),
      hint1: L("Abgeordnete schworen, eine Verfassung zu geben."),
      hint2: L("Sie trafen sich im Ballhaus von Versailles."),
      svg: { type: "word-display", word: "Verfassung", color: "#1e3a8a" },
      interactive: { type: "word-order", words: [L("Wir"), L("geben"), L("uns"), L("eine"), L("Verfassung")], instruction: L("Ordne den Schwur!") },
      quiz: { question: L("Was forderten die Abgeordneten im Ballhaus?"), choices: [L("Eine Verfassung"), L("Mehr Wein"), L("Einen neuen König"), L("Krieg")], answer: L("Eine Verfassung") }
    },
    {
      id: "bastille",
      title: L("Sturm auf die Bastille"),
      hint1: L("Am 14. Juli 1789 begann der Aufstand."),
      hint2: L("Die Bastille war ein Symbol der Willkür."),
      svg: { type: "text-bubbles", items: [{ text: "Bastille", color: "#fff", bg: "#3b82f6" }, { text: "Gefängnis", color: "#fff", bg: "#6366f1" }, { text: "Waffen", color: "#fff", bg: "#3b82f6" }, { text: "Pulver", color: "#fff", bg: "#6366f1" }] },
      interactive: { type: "tap-count", count: 14, instruction: L("An welchem Tag im Juli war der Sturm?") },
      quiz: { question: L("Was war die Bastille?"), choices: [L("Ein Gefängnis"), L("Ein Schloss"), L("Eine Kirche"), L("Ein Markt")], answer: L("Ein Gefängnis") }
    },
    {
      id: "menschenrechte",
      title: L("Menschenrechte"),
      hint1: L("1789 wurde die Erklärung der Rechte verkündet."),
      hint2: L("Gleichheit vor dem Gesetz war zentral."),
      svg: { type: "sentence-display", words: ["Freiheit", "Gleichheit", "Brüderlichkeit"], color: "#16a34a" },
      interactive: { type: "highlight-text", text: L("Alle Menschen sind von Geburt an frei und gleich an Rechten."), instruction: L("Markiere die zentrale Aussage!") },
      quiz: { question: L("Was ist ein Kernpunkt der Menschenrechte?"), choices: [L("Gleichheit"), L("Sklaverei"), L("Absolute Macht"), L("Zensur")], answer: L("Gleichheit") }
    },
    {
      id: "trikolore",
      title: L("Die Trikolore"),
      hint1: L("Die neue Flagge Frankreichs."),
      hint2: L("Blau, Weiß und Rot."),
      svg: { type: "text-bubbles", items: [{ text: "Blau", color: "#fff", bg: "#002395" }, { text: "Weiß", color: "#000", bg: "#ffffff" }, { text: "Rot", color: "#fff", bg: "#ed2939" }] },
      interactive: { type: "block-drag", blocks: [{ label: L("Revolution"), items: [L("Trikolore"), L("Kokarde")] }, { label: L("Monarchie"), items: [L("Lilie")] }] },
      quiz: { question: L("Welche Farben hat die Trikolore?"), choices: [L("Blau-Weiß-Rot"), L("Schwarz-Rot-Gold"), L("Rot-Gelb"), L("Grün-Weiß-Rot")], answer: L("Blau-Weiß-Rot") }
    },
    {
      id: "ludwig16",
      title: L("Ludwig XVI."),
      hint1: L("Der letzte absolutistische König."),
      hint2: L("Er war mit der Situation überfordert."),
      svg: { type: "icon-grid", items: [{ emoji: "👑", label: "Krone" }, { emoji: "🏰", label: "Versailles" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Ludwig XVI."), right: L("König") }, { left: L("Marie Antoinette"), right: L("Königin") }] },
      quiz: { question: L("Wer war der König zu Beginn der Revolution?"), choices: [L("Ludwig XVI."), L("Ludwig XIV."), L("Napoleon"), L("Karl X.")], answer: L("Ludwig XVI.") }
    },
    {
      id: "nationalversammlung",
      title: L("Nationalversammlung"),
      hint1: L("Der 3. Stand erklärte sich zur Vertretung."),
      hint2: L("Sie wollten die Nation allein vertreten."),
      svg: { type: "word-display", word: "Nation", color: "#dc2626" },
      interactive: { type: "sentence-build", words: [L("Die"), L("Nationalversammlung"), L("vertritt"), L("das"), L("Volk")], instruction: L("Bilde den Satz!") },
      quiz: { question: L("Wer bildete die Nationalversammlung?"), choices: [L("Der 3. Stand"), L("Nur der Adel"), L("Die Priester"), L("Ausländer")], answer: L("Der 3. Stand") }
    },
    {
      id: "brotpreise",
      title: L("Hunger & Brot"),
      hint1: L("Missernten führten zu hohen Brotpreisen."),
      hint2: L("Das Volk litt unter großem Hunger."),
      svg: { type: "text-bubbles", items: [{ text: "Missernte", color: "#fff", bg: "#dc2626" }, { text: "Hunger", color: "#fff", bg: "#991b1b" }, { text: "Hohe Preise", color: "#fff", bg: "#dc2626" }, { text: "Wut", color: "#fff", bg: "#991b1b" }] },
      interactive: { type: "drag-to-bucket", buckets: [{ id: "urs", label: L("Ursachen") }], items: [{ text: L("Hunger"), bucketId: "urs" }, { text: L("Schulden"), bucketId: "urs" }] },
      quiz: { question: L("Was war ein wirtschaftlicher Grund für die Revolution?"), choices: [L("Hohe Brotpreise"), L("Zu viel Gold"), L("Günstige Mieten"), L("Keine Steuern")], answer: L("Hohe Brotpreise") }
    },
    {
      id: "versailles",
      title: L("Versailles"),
      hint1: L("Der prunkvolle Sitz des Königs."),
      hint2: L("Weit weg vom hungernden Volk in Paris."),
      svg: { type: "icon-grid", items: [{ emoji: "🏰", label: "Schloss" }, { emoji: "🌳", label: "Park" }] },
      interactive: { type: "gap-fill", text: L("Der König residierte in __."), gaps: [{ index: 0, options: ["Versailles", "Berlin", "Wien"], correct: 0 }] },
      quiz: { question: L("Wo wohnte der französische König?"), choices: [L("Versailles"), L("Louvre"), L("Bastille"), L("Eiffelturm")], answer: L("Versailles") }
    },
    {
      id: "aufklaerung",
      title: L("Einfluss der Aufklärung"),
      hint1: L("Denker forderten Vernunft und Freiheit."),
      hint2: L("Kritik an der Macht des Königs."),
      svg: { type: "text-bubbles", items: [{ text: "Vernunft", color: "#fff", bg: "#8b5cf6" }, { text: "Wissen", color: "#fff", bg: "#4f46e5" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Montesquieu"), right: L("Gewaltenteilung") }, { left: L("Rousseau"), right: L("Volkswille") }] },
      quiz: { question: L("Was forderten die Aufklärer?"), choices: [L("Gewaltenteilung"), L("Mehr Steuern"), L("Absolute Macht"), L("Hexenverbrennung")], answer: L("Gewaltenteilung") }
    },
    {
      id: "olympe",
      title: L("Olympe de Gouges"),
      hint1: L("Sie forderte Rechte für Frauen."),
      hint2: L("Erklärung der Rechte der Frau."),
      svg: { type: "word-display", word: "Frauenrechte", color: "#db2777" },
      interactive: { type: "lang-mcq", question: L("Was forderte Olympe de Gouges?"), choices: [L("Rechte für Frauen"), L("Rückkehr zum König"), L("Krieg gegen England")], answer: L("Rechte für Frauen") },
      quiz: { question: L("Was forderte Olympe de Gouges?"), choices: [L("Rechte für Frauen"), L("Rückkehr zum König"), L("Krieg gegen England"), L("Steuererhöhung")], answer: L("Rechte für Frauen") }
    },
    {
      id: "marschfrauen",
      title: L("Marsch der Frauen"),
      hint1: L("Frauen zogen nach Versailles."),
      hint2: L("Sie holten den König nach Paris."),
      svg: { type: "icon-grid", items: [{ emoji: "🥖", label: "Brot" }, { emoji: "🚶‍♀️", label: "Marsch" }] },
      interactive: { type: "tap-count", count: 7, instruction: L("In welchem Monat (Oktober=10) war der Marsch?") },
      quiz: { question: L("Wohin zogen die Frauen beim Marsch?"), choices: [L("Versailles"), L("Lyon"), L("Marseille"), L("London")], answer: L("Versailles") }
    },
    {
      id: "verfassung1791",
      title: L("Verfassung 1791"),
      hint1: L("Frankreich wurde eine konstitutionelle Monarchie."),
      hint2: L("Der König war an Gesetze gebunden."),
      svg: { type: "two-groups", left: { items: ["Gesetz"], bg: "#dbeafe", border: "#2563eb" }, right: { items: ["König"], bg: "#fef3c7", border: "#d97706" } },
      interactive: { type: "gap-fill", text: L("Die Verfassung beschränkt die Macht des __."), gaps: [{ index: 0, options: [L("Königs"), L("Volkes")], correct: 0 }] },
      quiz: { question: L("Was bedeutet konstitutionelle Monarchie?"), choices: [L("König an Verfassung gebunden"), L("König hat alle Macht"), L("Es gibt keinen König"), L("Nur die Kirche regiert")], answer: L("König an Verfassung gebunden") }
    },
    {
      id: "fluchtkoenig",
      title: L("Fluchtversuch"),
      hint1: L("Ludwig XVI. wollte ins Ausland fliehen."),
      hint2: L("Er wurde in Varennes gefasst."),
      svg: { type: "text-bubbles", items: [{ text: "Varennes", color: "#fff", bg: "#475569" }, { text: "Verrat", color: "#fff", bg: "#991b1b" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Varennes"), right: L("Ort der Festnahme") }, { left: L("Flucht"), right: L("Vertrauensverlust") }] },
      quiz: { question: L("Wo wurde der fliehende König gefasst?"), choices: [L("Varennes"), L("Paris"), L("Berlin"), L("Straßburg")], answer: L("Varennes") }
    }
  ]
};

// ─── ISLAND 2: DIE SCHRECKENSHERRSCHAFT & NAPOLEON ─────────────────────────
const I2: IslandSpec = {
  id: "i2",
  title: L("Terror & Napoleon"),
  topics: [
    {
      id: "guillotine",
      title: L("Die Guillotine"),
      hint1: L("Ein Gerät zur schnellen Hinrichtung."),
      hint2: L("Es galt als 'humaner' Weg zu töten."),
      svg: { type: "icon-grid", items: [{ emoji: "🗡️", label: "Fallbeil" }, { emoji: "⚖️", label: "Strafe" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Guillotine"), right: L("Hinrichtung") }, { left: L("Dr. Guillotin"), right: L("Erfinder") }] },
      quiz: { question: L("Wofür wurde die Guillotine genutzt?"), choices: [L("Hinrichtungen"), L("Brot schneiden"), L("Hausbau"), L("Sport")], answer: L("Hinrichtungen") }
    },
    {
      id: "robespierre",
      title: L("Maximilien Robespierre"),
      hint1: L("Anführer der Jakobiner."),
      hint2: L("Er rechtfertigte den Terror mit Tugend."),
      svg: { type: "text-bubbles", items: [{ text: "Terror", color: "#fff", bg: "#991b1b" }, { text: "Tugend", color: "#fff", bg: "#16a34a" }] },
      interactive: { type: "gap-fill", text: L("Robespierre war ein __."), gaps: [{ index: 0, options: ["Jakobiner", "Königstreuer"], correct: 0 }] },
      quiz: { question: L("Wer war der Kopf der Schreckensherrschaft?"), choices: [L("Robespierre"), L("Napoleon"), L("Ludwig XVI."), L("Metternich")], answer: L("Robespierre") }
    },
    {
      id: "jakobiner",
      title: L("Die Jakobiner"),
      hint1: L("Radikale Anhänger der Revolution."),
      hint2: L("Sie wollten die Republik mit Gewalt."),
      svg: { type: "word-display", word: "Republik", color: "#ef4444" },
      interactive: { type: "block-drag", blocks: [{ label: L("Gruppen"), items: [L("Jakobiner"), L("Girondisten")] }] },
      quiz: { question: L("Was wollten die Jakobiner?"), choices: [L("Eine radikale Republik"), L("Die Rückkehr des Königs"), L("Frieden mit allen"), L("Keine Gesetze")], answer: L("Eine radikale Republik") }
    },
    {
      id: "endemonarchie",
      title: L("Ende der Monarchie"),
      hint1: L("Der König wurde abgesetzt und hingerichtet."),
      hint2: L("1792 wurde Frankreich zur Republik."),
      svg: { type: "text-bubbles", items: [{ text: "1791", color: "#fff", bg: "#2563eb" }, { text: "Monarchie", color: "#fff", bg: "#6366f1" }, { text: "1792", color: "#fff", bg: "#dc2626" }, { text: "Republik", color: "#fff", bg: "#ef4444" }] },
      interactive: { type: "tap-count", count: 1792, instruction: L("In welchem Jahr wurde die Republik ausgerufen?") },
      quiz: { question: L("Was geschah 1792?"), choices: [L("Ausrufung der Republik"), L("Sieg bei Waterloo"), L("Entdeckung Amerikas"), L("Bau der Bastille")], answer: L("Ausrufung der Republik") }
    },
    {
      id: "napoleonaufstieg",
      title: L("Aufstieg Napoleons"),
      hint1: L("Ein erfolgreicher General aus Korsika."),
      hint2: L("Er beendete die Revolution 1799."),
      svg: { type: "text-bubbles", items: [{ text: "General", color: "#fff", bg: "#3b82f6" }, { text: "1799", color: "#fff", bg: "#475569" }] },
      interactive: { type: "word-order", words: [L("Napoleon"), L("wird"), L("Erster"), L("Konsul")], instruction: L("Sein erster Titel?") },
      quiz: { question: L("Woher stammte Napoleon?"), choices: [L("Korsika"), L("Paris"), L("London"), L("Berlin")], answer: L("Korsika") }
    },
    {
      id: "codecivil",
      title: L("Code Civil"),
      hint1: L("Ein modernes Gesetzbuch Napoleons."),
      hint2: L("Es garantierte Freiheit und Eigentum."),
      svg: { type: "icon-grid", items: [{ emoji: "📜", label: "Gesetze" }] },
      interactive: { type: "highlight-text", text: L("Gleichheit vor dem Gesetz für alle männlichen Bürger."), instruction: L("Was war neu?") },
      quiz: { question: L("Was war der Code Civil?"), choices: [L("Ein Gesetzbuch"), L("Ein Kochbuch"), L("Ein Kriegsplan"), L("Eine Schiffsklasse")], answer: L("Ein Gesetzbuch") }
    },
    {
      id: "kaiserkroenung",
      title: L("Kaiserkrönung"),
      hint1: L("1804 krönte sich Napoleon selbst."),
      hint2: L("Er wollte seine Macht festigen."),
      svg: { type: "icon-grid", items: [{ emoji: "👑", label: "Kaiser" }, { emoji: "🏛️", label: "Notre Dame" }] },
      interactive: { type: "sentence-build", words: [L("Er"), L("setzte"), L("sich"), L("die"), L("Krone"), L("selbst"), L("auf")], instruction: L("Was tat er?") },
      quiz: { question: L("Wann wurde Napoleon Kaiser?"), choices: [L("1804"), L("1789"), L("1815"), L("1871")], answer: L("1804") }
    },
    {
      id: "russlandfeldzug",
      title: L("Russlandfeldzug"),
      hint1: L("1812 scheiterte die Große Armee."),
      hint2: L("Kälte und Hunger besiegten ihn."),
      svg: { type: "text-bubbles", items: [{ text: "Russland", color: "#fff", bg: "#1e40af" }, { text: "Kälte", color: "#fff", bg: "#6366f1" }, { text: "Napoleon", color: "#fff", bg: "#1e40af" }, { text: "Rückzug", color: "#fff", bg: "#6366f1" }] },
      interactive: { type: "drag-to-bucket", buckets: [{ id: "fail", label: L("Gründe") }], items: [{ text: L("Winter"), bucketId: "fail" }, { text: L("Hunger"), bucketId: "fail" }] },
      quiz: { question: L("Was stoppte Napoleon in Russland?"), choices: [L("Kälte und Hunger"), L("Die russische Marine"), L("Ein Vulkanausbruch"), L("Geldmangel")], answer: L("Kälte und Hunger") }
    },
    {
      id: "leipzig",
      title: L("Völkerschlacht bei Leipzig"),
      hint1: L("1813 kämpften viele Völker gegen ihn."),
      hint2: L("Napoleons Macht in Deutschland brach zusammen."),
      svg: { type: "text-bubbles", items: [{ text: "1813", color: "#fff", bg: "#1e3a8a" }, { text: "Leipzig", color: "#fff", bg: "#ea580c" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Leipzig"), right: L("1813") }, { left: L("Völkerschlacht"), right: L("Niederlage") }] },
      quiz: { question: L("Wann war die Völkerschlacht bei Leipzig?"), choices: [L("1813"), L("1804"), L("1815"), L("1789")], answer: L("1813") }
    },
    {
      id: "waterloo",
      title: L("Schlacht bei Waterloo"),
      hint1: L("Seine endgültige Niederlage 1815."),
      hint2: L("Besiegt von Wellington und Blücher."),
      svg: { type: "word-display", word: "Waterloo", color: "#000" },
      interactive: { type: "gap-fill", text: L("Waterloo liegt im heutigen __."), gaps: [{ index: 0, options: ["Belgien", "Frankreich"], correct: 0 }] },
      quiz: { question: L("In welchem Jahr wurde Napoleon bei Waterloo besiegt?"), choices: [L("1815"), L("1812"), L("1813"), L("1821")], answer: L("1815") }
    },
    {
      id: "sthelena",
      title: L("Verbannung St. Helena"),
      hint1: L("Seine letzte Station im Exil."),
      hint2: L("Eine einsame Insel im Atlantik."),
      svg: { type: "letter-circles", letters: ["I", "N", "S", "E", "L"], color: "#1e40af" },
      interactive: { type: "lang-mcq", question: L("Wo starb Napoleon?"), choices: [L("St. Helena"), L("Elba"), L("Paris")], answer: L("St. Helena") },
      quiz: { question: L("Wo starb Napoleon?"), choices: [L("St. Helena"), L("Elba"), L("Paris"), L("London")], answer: L("St. Helena") }
    },
    {
      id: "rheinbund",
      title: L("Rheinbund"),
      hint1: L("Deutsche Staaten unter Napoleons Schutz."),
      hint2: L("Ende des Heiligen Römischen Reiches."),
      svg: { type: "two-groups", left: { items: ["Bayern", "Sachsen"], bg: "#dcfce7", border: "#16a34a" }, right: { items: ["Österreich", "Preußen"], bg: "#fee2e2", border: "#ef4444" } },
      interactive: { type: "match-pairs", pairs: [{ left: L("Rheinbund"), right: L("Napoleon") }, { left: L("1806"), right: L("Ende HRRDN") }] },
      quiz: { question: L("Wann endete das Heilige Römische Reich?"), choices: [L("1806"), L("1804"), L("1815"), L("1871")], answer: L("1806") }
    },
    {
      id: "kontinentalsperre",
      title: L("Kontinentalsperre"),
      hint1: L("Handelsverbot gegen England."),
      hint2: L("Er wollte England wirtschaftlich besiegen."),
      svg: { type: "text-bubbles", items: [{ text: "Handel", color: "#fff", bg: "#0ea5e9" }, { text: "Stopp", color: "#fff", bg: "#991b1b" }] },
      interactive: { type: "gap-fill", text: L("Die Sperre galt gegen __."), gaps: [{ index: 0, options: ["England", "Russland"], correct: 0 }] },
      quiz: { question: L("Gegen wen richtete sich die Kontinentalsperre?"), choices: [L("England"), L("Spanien"), L("Preußen"), L("Amerika")], answer: L("England") }
    },
    {
      id: "saekularisation",
      title: L("Säkularisation"),
      hint1: L("Enteignung kirchlicher Besitztümer."),
      hint2: L("Fürsten erhielten Kirchenland."),
      svg: { type: "text-bubbles", items: [{ text: "Kirche", color: "#fff", bg: "#7c3aed" }, { text: "Landverlust", color: "#fff", bg: "#6366f1" }, { text: "Fürsten", color: "#fff", bg: "#7c3aed" }, { text: "Landgewinn", color: "#fff", bg: "#6366f1" }] },
      interactive: { type: "word-order", words: [L("Kirche"), L("verliert"), L("ihre"), L("Macht")], instruction: L("Was geschah?") },
      quiz: { question: L("Was bedeutet Säkularisation?"), choices: [L("Enteignung der Kirche"), L("Wahl eines Papstes"), L("Bau von Kirchen"), L("Neugründung von Klöstern")], answer: L("Enteignung der Kirche") }
    },
    {
      id: "legende",
      title: L("Napoleons Legende"),
      hint1: L("Widersprüchliche Wirkung bis heute."),
      hint2: L("Befreier oder Tyrann?"),
      svg: { type: "text-bubbles", items: [{ text: "Befreier", color: "#fff", bg: "#16a34a" }, { text: "Tyrann", color: "#fff", bg: "#dc2626" }] },
      interactive: { type: "block-drag", blocks: [{ label: L("Meinungen"), items: [L("Modernisierer"), L("Eroberer")] }] },
      quiz: { question: L("Wie wird Napoleon oft gesehen?"), choices: [L("Widersprüchlich"), L("Nur als Heiliger"), L("Nur als Versager"), L("Gar nicht mehr")], answer: L("Widersprüchlich") }
    }
  ]
};

// ─── ISLAND 3: DER WIENER KONGRESS & RESTAURATION ──────────────────────────
const I3: IslandSpec = {
  id: "i3",
  title: L("Wiener Kongress"),
  topics: [
    {
      id: "restauration",
      title: L("Restauration"),
      hint1: L("Wiederherstellung der alten Ordnung."),
      hint2: L("Zeit vor der Revolution als Ideal."),
      svg: { type: "text-bubbles", items: [{ text: "Neu", color: "#fff", bg: "#16a34a" }, { text: "Revolution", color: "#fff", bg: "#15803d" }, { text: "Alt", color: "#fff", bg: "#dc2626" }, { text: "Monarchie", color: "#fff", bg: "#991b1b" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Restauration"), right: L("Wiederherstellung") }, { left: L("Alt"), right: L("Vor 1789") }] },
      quiz: { question: L("Was bedeutet Restauration?"), choices: [L("Wiederherstellung"), L("Zerstörung"), L("Neuanfang"), L("Urlaub")], answer: L("Wiederherstellung") }
    },
    {
      id: "legitimitaet",
      title: L("Legitimität"),
      hint1: L("Rechtmäßigkeit der Herrschaft."),
      hint2: L("Gottesgnadentum als Begründung."),
      svg: { type: "icon-grid", items: [{ emoji: "👑", label: "König" }, { emoji: "🙏", label: "Gott" }] },
      interactive: { type: "gap-fill", text: L("Herrschaft durch __ Gnade."), gaps: [{ index: 0, options: ["Gottes", "Volkes"], correct: 0 }] },
      quiz: { question: L("Wie begründeten Fürsten ihre Macht?"), choices: [L("Gottesgnadentum"), L("Wahlen"), L("Stärke"), L("Zufall")], answer: L("Gottesgnadentum") }
    },
    {
      id: "solidaritaet",
      title: L("Solidarität"),
      hint1: L("Gegenseitige Hilfe der Monarchen."),
      hint2: L("Schutz gegen neue Revolutionen."),
      svg: { type: "text-bubbles", items: [{ text: "Allianz", color: "#fff", bg: "#16a34a" }, { text: "Hilfe", color: "#fff", bg: "#3b82f6" }] },
      interactive: { type: "word-order", words: [L("Fürsten"), L("helfen"), L("sich"), L("gegenseitig")], instruction: L("Was war Solidarität?") },
      quiz: { question: L("Gegen wen richtete sich die Solidarität?"), choices: [L("Revolutionäre"), L("Andere Könige"), L("Die Kirche"), L("Händler")], answer: L("Revolutionäre") }
    },
    {
      id: "metternich",
      title: L("Fürst von Metternich"),
      hint1: L("Der 'Kutscher Europas'."),
      hint2: L("Österreichischer Staatsmann."),
      svg: { type: "word-display", word: "Metternich", color: "#475569" },
      interactive: { type: "highlight-text", text: L("Metternich bekämpfte alle liberalen Ideen mit Zensur."), instruction: L("Seine Methode?") },
      quiz: { question: L("Welches Land vertrat Metternich?"), choices: [L("Österreich"), L("Preußen"), L("Russland"), L("England")], answer: L("Österreich") }
    },
    {
      id: "deutscherbund",
      title: L("Deutscher Bund"),
      hint1: L("Lockerer Staatenbund von 39 Staaten."),
      hint2: L("Kein deutscher Nationalstaat."),
      svg: { type: "icon-grid", items: [{ emoji: "🤝", label: "Staatenbund" }] },
      interactive: { type: "tap-count", count: 39, instruction: L("Wie viele Staaten gehörten zum Bund?") },
      quiz: { question: L("Was war der Deutsche Bund?"), choices: [L("Lockerer Staatenbund"), L("Ein Einheitsstaat"), L("Ein Sportverein"), L("Eine Armee")], answer: L("Lockerer Staatenbund") }
    },
    {
      id: "zensur",
      title: L("Zensur"),
      hint1: L("Kontrolle von Büchern und Zeitungen."),
      hint2: L("Verbot von freien Meinungen."),
      svg: { type: "text-bubbles", items: [{ text: "Stopp", color: "#fff", bg: "#dc2626" }, { text: "Verbot", color: "#fff", bg: "#991b1b" }] },
      interactive: { type: "gap-fill", text: L("Die Presse wurde __."), gaps: [{ index: 0, options: ["zensiert", "gefeiert"], correct: 0 }] },
      quiz: { question: L("Wozu diente die Zensur?"), choices: [L("Kontrolle der Meinung"), L("Leseförderung"), L("Papier sparen"), L("Werbung")], answer: L("Kontrolle der Meinung") }
    },
    {
      id: "karlsbad",
      title: L("Karlsbader Beschlüsse"),
      hint1: L("Harte Gesetze gegen Liberale."),
      hint2: L("Verbot von Burschenschaften."),
      svg: { type: "text-bubbles", items: [{ text: "1819", color: "#fff", bg: "#475569" }, { text: "Beschlüsse", color: "#fff", bg: "#64748b" }, { text: "Zensur", color: "#fff", bg: "#475569" }, { text: "Überwachung", color: "#fff", bg: "#64748b" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Karlsbad"), right: L("1819") }, { left: L("Verbot"), right: L("Burschenschaften") }] },
      quiz: { question: L("Was wurde in Karlsbad beschlossen?"), choices: [L("Strenge Zensur"), L("Mehr Freiheit"), L("Ein neuer König"), L("Ein Volksfest")], answer: L("Strenge Zensur") }
    },
    {
      id: "biedermeier",
      title: L("Biedermeier"),
      hint1: L("Rückzug ins Private."),
      hint2: L("Häuslichkeit und Ruhe."),
      svg: { type: "icon-grid", items: [{ emoji: "🏠", label: "Heim" }, { emoji: "☕", label: "Kaffee" }] },
      interactive: { type: "sentence-build", words: [L("Rückzug"), L("in"), L("die"), L("eigene"), L("Wohnung")], instruction: L("Biedermeier-Motto?") },
      quiz: { question: L("Was ist typisch für die Biedermeier-Zeit?"), choices: [L("Rückzug ins Private"), L("Politische Revolten"), L("Weltreisen"), L("Fabrikbau")], answer: L("Rückzug ins Private") }
    },
    {
      id: "hambach",
      title: L("Hambacher Fest"),
      hint1: L("Große Demonstration für Freiheit 1832."),
      hint2: L("30.000 Menschen auf dem Hambacher Schloss."),
      svg: { type: "text-bubbles", items: [{ text: "1832", color: "#fff", bg: "#f59e0b" }, { text: "Freiheit", color: "#fff", bg: "#16a34a" }] },
      interactive: { type: "word-order", words: [L("Hinauf"), L("zum"), L("Schloss")], instruction: L("Der Ruf von Hambach?") },
      quiz: { question: L("Was forderten die Menschen in Hambach?"), choices: [L("Einheit und Freiheit"), L("Mehr Steuern"), L("Einen neuen Papst"), L("Nichts")], answer: L("Einheit und Freiheit") }
    },
    {
      id: "wartburg",
      title: L("Wartburgfest"),
      hint1: L("Studenten forderten deutsche Einheit 1817."),
      hint2: L("Verbrennung von Symbolen der Unfreiheit."),
      svg: { type: "word-display", word: "Einheit", color: "#000" },
      interactive: { type: "tap-count", count: 1817, instruction: L("In welchem Jahr war das Wartburgfest?") },
      quiz: { question: L("Wer organisierte das Wartburgfest?"), choices: [L("Studenten"), L("Bauern"), L("Könige"), L("Händler")], answer: L("Studenten") }
    },
    {
      id: "liberalismus",
      title: L("Liberalismus"),
      hint1: L("Forderung nach Freiheit des Einzelnen."),
      hint2: L("Rechte gegenüber dem Staat."),
      svg: { type: "two-groups", left: { items: ["Freiheit"], bg: "#dcfce7", border: "#16a34a" }, right: { items: ["Zwang"], bg: "#fee2e2", border: "#dc2626" } },
      interactive: { type: "lang-mcq", question: L("Was ist das Hauptziel des Liberalismus?"), choices: [L("Freiheit"), L("Absolute Macht"), L("Gleiche Armut")], answer: L("Freiheit") },
      quiz: { question: L("Was ist das Hauptziel des Liberalismus?"), choices: [L("Freiheit"), L("Absolute Macht"), L("Gleiche Armut"), L("Zensur")], answer: L("Freiheit") }
    },
    {
      id: "nationalismus",
      title: L("Nationalismus (19. Jh.)"),
      hint1: L("Wunsch nach einem eigenen Nationalstaat."),
      hint2: L("Ein Volk, eine Nation."),
      svg: { type: "icon-grid", items: [{ emoji: "🇩🇪", label: "Einheit" }, { emoji: "⚔️", label: "Kampf" }] },
      interactive: { type: "gap-fill", text: L("Ein Volk will ein __."), gaps: [{ index: 0, options: ["Land", "Haus"], correct: 0 }] },
      quiz: { question: L("Was wollten Nationalisten im 19. Jahrhundert?"), choices: [L("Einen Nationalstaat"), L("Viele kleine Fürstentümer"), L("Ein Weltreich"), L("Gar keinen Staat")], answer: L("Einen Nationalstaat") }
    },
    {
      id: "heiligeallianz",
      title: L("Heilige Allianz"),
      hint1: L("Bündnis von Russland, Preußen, Österreich."),
      hint2: L("Christliche Grundwerte als Basis."),
      svg: { type: "text-bubbles", items: [{ text: "Drei", color: "#fff", bg: "#475569" }, { text: "Mächte", color: "#fff", bg: "#1e3a8a" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Russland"), right: L("Zar") }, { left: L("Preußen"), right: L("König") }] },
      quiz: { question: L("Wer gehörte zur Heiligen Allianz?"), choices: [L("Österreich, Preußen, Russland"), L("Frankreich, England, USA"), L("China, Indien, Japan"), L("Niemand")], answer: L("Österreich, Preußen, Russland") }
    },
    {
      id: "pentarchie",
      title: L("Pentarchie"),
      hint1: L("Die fünf Großmächte Europas."),
      hint2: L("Gleichgewicht der Kräfte."),
      svg: { type: "text-bubbles", items: [{ text: "5", color: "#fff", bg: "#2563eb" }, { text: "Mächte", color: "#fff", bg: "#6366f1" }, { text: "Gleichgewicht", color: "#fff", bg: "#2563eb" }, { text: "Frieden", color: "#fff", bg: "#6366f1" }] },
      interactive: { type: "tap-count", count: 5, instruction: L("Wie viele Mächte bildeten die Pentarchie?") },
      quiz: { question: L("Was war das Ziel der Pentarchie?"), choices: [L("Gleichgewicht der Mächte"), L("Weltherrschaft"), L("Vernichtung Englands"), L("Zerstörung Frankreichs")], answer: L("Gleichgewicht der Mächte") }
    },
    {
      id: "grenzen",
      title: L("Neue Grenzen"),
      hint1: L("Europa wurde neu aufgeteilt."),
      hint2: L("Preußen erhielt Gebiete am Rhein."),
      svg: { type: "icon-grid", items: [{ emoji: "🦅", label: "Preußen" }, { emoji: "👑", label: "Österreich" }] },
      interactive: { type: "block-drag", blocks: [{ label: L("Gewinner"), items: [L("Preußen"), L("Russland")] }] },
      quiz: { question: L("Welches Land erhielt Gebiete am Rhein?"), choices: [L("Preußen"), L("Frankreich"), L("Italien"), L("Spanien")], answer: L("Preußen") }
    }
  ]
};

// ─── ISLAND 4: DIE REVOLUTION VON 1848 ─────────────────────────────────────
const I4: IslandSpec = {
  id: "i4",
  title: L("Revolution 1848"),
  topics: [
    {
      id: "maerz",
      title: L("Märzforderungen"),
      hint1: L("Was das Volk im März forderte."),
      hint2: L("Pressefreiheit und Parlament."),
      svg: { type: "icon-grid", items: [{ emoji: "📜", label: "Forderung" }, { emoji: "📢", label: "Freiheit" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Presse"), right: L("Freiheit") }, { left: L("Verfassung"), right: L("Recht") }] },
      quiz: { question: L("Was war eine Märzforderung?"), choices: [L("Pressefreiheit"), L("Mehr Steuern"), L("Zensur"), L("Königsmacht")], answer: L("Pressefreiheit") }
    },
    {
      id: "barrikaden",
      title: L("Barrikadenkämpfe"),
      hint1: L("Kämpfe in Berlin und Wien."),
      hint2: L("Das Volk gegen das Militär."),
      svg: { type: "text-bubbles", items: [{ text: "Kampf", color: "#fff", bg: "#991b1b" }, { text: "Straße", color: "#fff", bg: "#475569" }] },
      interactive: { type: "gap-fill", text: L("In __ gab es schwere Kämpfe."), gaps: [{ index: 0, options: ["Berlin", "London"], correct: 0 }] },
      quiz: { question: L("Wo fanden Barrikadenkämpfe statt?"), choices: [L("Berlin"), L("München"), L("Hamburg"), L("Bremen")], answer: L("Berlin") }
    },
    {
      id: "paulskirche",
      title: L("Die Paulskirche"),
      hint1: L("Sitz des ersten deutschen Parlaments."),
      hint2: L("Frankfurt am Main."),
      svg: { type: "word-display", word: "Parlament", color: "#1e3a8a" },
      interactive: { type: "word-order", words: [L("Erstes"), L("deutsches"), L("Parlament")], instruction: L("Was tagte dort?") },
      quiz: { question: L("In welcher Stadt steht die Paulskirche?"), choices: [L("Frankfurt"), L("Berlin"), L("Leipzig"), L("Köln")], answer: L("Frankfurt") }
    },
    {
      id: "grundrechte1848",
      title: L("Grundrechte 1848"),
      hint1: L("Erstmals Rechte für alle Deutschen."),
      hint2: L("Vorbild für heutige Gesetze."),
      svg: { type: "text-bubbles", items: [{ text: "Freiheit", color: "#fff", bg: "#1e3a8a" }, { text: "Recht", color: "#fff", bg: "#3b82f6" }, { text: "Gleichheit", color: "#fff", bg: "#1e3a8a" }, { text: "Gesetz", color: "#fff", bg: "#3b82f6" }] },
      interactive: { type: "highlight-text", text: L("Die Freiheit der Person ist unverletzlich."), instruction: L("Wichtiger Satz!") },
      quiz: { question: L("Was wurde in der Paulskirche erarbeitet?"), choices: [L("Grundrechte"), L("Kriegspläne"), L("Steuertabellen"), L("Liederbücher")], answer: L("Grundrechte") }
    },
    {
      id: "kleindeutsch",
      title: L("Kleindeutsche Lösung"),
      hint1: L("Ein Deutschland ohne Österreich."),
      hint2: L("Preußen sollte die Führung übernehmen."),
      svg: { type: "text-bubbles", items: [{ text: "Ohne", color: "#fff", bg: "#dc2626" }, { text: "Österreich", color: "#fff", bg: "#475569" }] },
      interactive: { type: "gap-fill", text: L("Kleindeutsch heißt __ Österreich."), gaps: [{ index: 0, options: ["ohne", "mit"], correct: 0 }] },
      quiz: { question: L("Was bedeutete kleindeutsch?"), choices: [L("Ohne Österreich"), L("Mit Österreich"), L("Nur Preußen"), L("Nur Bayern")], answer: L("Ohne Österreich") }
    },
    {
      id: "grossdeutsch",
      title: L("Großdeutsche Lösung"),
      hint1: L("Ein Deutschland mit Österreich."),
      hint2: L("Schwierig wegen der vielen Völker dort."),
      svg: { type: "text-bubbles", items: [{ text: "Mit", color: "#fff", bg: "#16a34a" }, { text: "Österreich", color: "#fff", bg: "#475569" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Großdeutsch"), right: L("Mit Österreich") }, { left: L("Kleindeutsch"), right: L("Preußen führt") }] },
      quiz: { question: L("Was war das Problem der großdeutschen Lösung?"), choices: [L("Vielvölkerstaat Österreich"), L("Zu wenig Land"), L("Kein König"), L("Geldmangel")], answer: L("Vielvölkerstaat Österreich") }
    },
    {
      id: "friedrichwilhelm",
      title: L("Friedrich Wilhelm IV."),
      hint1: L("Preußischer König."),
      hint2: L("Er lehnte die Kaiserkrone ab."),
      svg: { type: "icon-grid", items: [{ emoji: "👑", label: "Krone" }, { emoji: "🚫", label: "Nein" }] },
      interactive: { type: "sentence-build", words: [L("Er"), L("will"), L("keine"), L("Krone"), L("vom"), L("Volk")], instruction: L("Seine Haltung?") },
      quiz: { question: L("Warum lehnte der König die Krone ab?"), choices: [L("Er wollte sie nicht vom Volk"), L("Sie war zu schwer"), L("Er wollte Republik"), L("Er hatte schon eine")], answer: L("Er wollte sie nicht vom Volk") }
    },
    {
      id: "scheitern1848",
      title: L("Das Scheitern"),
      hint1: L("Die Revolution wurde niedergeschlagen."),
      hint2: L("Die alten Mächte siegten."),
      svg: { type: "text-bubbles", items: [{ text: "Revolution", color: "#fff", bg: "#dc2626" }, { text: "Aus", color: "#fff", bg: "#991b1b" }, { text: "Monarchie", color: "#fff", bg: "#2563eb" }, { text: "Bleibt", color: "#fff", bg: "#1e40af" }] },
      interactive: { type: "block-drag", blocks: [{ label: L("Ende"), items: [L("Niederlage"), L("Auflösung")] }] },
      quiz: { question: L("Wie endete die Revolution 1848?"), choices: [L("Sie scheiterte"), L("Sie siegte"), L("Nichts geschah"), L("Krieg begann")], answer: L("Sie scheiterte") }
    },
    {
      id: "auswanderung",
      title: L("Auswanderung"),
      hint1: L("Viele Deutsche flohen nach Amerika."),
      hint2: L("Die 'Forty-Eighters'."),
      svg: { type: "icon-grid", items: [{ emoji: "🇺🇸", label: "USA" }] },
      interactive: { type: "tap-count", count: 48, instruction: L("Wie nennt man die Auswanderer von 18..?") },
      quiz: { question: L("Wohin flohen viele Revolutionäre?"), choices: [L("Amerika (USA)"), L("Russland"), L("China"), L("Afrika")], answer: L("Amerika (USA)") }
    },
    {
      id: "erbe1848",
      title: L("Das Erbe von 1848"),
      hint1: L("Die Ideen blieben lebendig."),
      hint2: L("Wegbereiter für die Demokratie."),
      svg: { type: "text-bubbles", items: [{ text: "Demokratie", color: "#fff", bg: "#16a34a" }, { text: "Einheit", color: "#fff", bg: "#3b82f6" }] },
      interactive: { type: "highlight-text", text: L("1848 war der erste Versuch einer deutschen Demokratie."), instruction: L("Historischer Wert?") },
      quiz: { question: L("Was blieb von 1848?"), choices: [L("Die demokratischen Ideen"), L("Die alten Könige"), L("Nur Ruinen"), L("Nichts")], answer: L("Die demokratischen Ideen") }
    },
    {
      id: "frankreich1848",
      title: L("Februarrevolution"),
      hint1: L("Beginn der Unruhen in Paris."),
      hint2: L("Sturz des 'Bürgerkönigs'."),
      svg: { type: "text-bubbles", items: [{ text: "Paris", color: "#fff", bg: "#2563eb" }, { text: "Februar", color: "#fff", bg: "#6366f1" }, { text: "Berlin", color: "#fff", bg: "#2563eb" }, { text: "März", color: "#fff", bg: "#6366f1" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Februar"), right: L("Paris") }, { left: L("März"), right: L("Berlin") }] },
      quiz: { question: L("Wo begann die Revolution 1848?"), choices: [L("Paris"), L("London"), L("Rom"), L("Madrid")], answer: L("Paris") }
    },
    {
      id: "parlamentarier",
      title: L("Abgeordnete"),
      hint1: L("Meist Professoren und Juristen."),
      hint2: L("Das 'Professorenparlament'."),
      svg: { type: "icon-grid", items: [{ emoji: "🎓", label: "Professoren" }, { emoji: "⚖️", label: "Juristen" }] },
      interactive: { type: "lang-mcq", question: L("Wer saß hauptsächlich im Parlament?"), choices: [L("Gebildete Bürger"), L("Bauern"), L("Fabrikarbeiter")], answer: L("Gebildete Bürger") },
      quiz: { question: L("Wer saß hauptsächlich im Parlament?"), choices: [L("Gebildete Bürger"), L("Bauern"), L("Fabrikarbeiter"), L("Adlige")], answer: L("Gebildete Bürger") }
    },
    {
      id: "grundrechte_heute",
      title: L("Grundrechte heute"),
      hint1: L("Ähnlichkeit zum Grundgesetz."),
      hint2: L("Wurzeln unserer Freiheit."),
      svg: { type: "word-display", word: "Grundgesetz", color: "#166534" },
      interactive: { type: "gap-fill", text: L("1848 war ein __ für heute."), gaps: [{ index: 0, options: ["Vorbild", "Fehler"], correct: 0 }] },
      quiz: { question: L("Welches heutige Gesetz hat Wurzeln in 1848?"), choices: [L("Grundgesetz"), L("Strafgesetzbuch"), L("Straßenverkehrsordnung"), L("Schulordnung")], answer: L("Grundgesetz") }
    },
    {
      id: "schwarzrotgold",
      title: L("Schwarz-Rot-Gold"),
      hint1: L("Die Farben der Freiheit."),
      hint2: L("Entstanden aus den Lützower Jägern."),
      svg: { type: "text-bubbles", items: [{ text: "Schwarz", color: "#fff", bg: "#000" }, { text: "Rot", color: "#fff", bg: "#f00" }, { text: "Gold", color: "#000", bg: "#ff0" }] },
      interactive: { type: "tap-count", count: 3, instruction: L("Wie viele Farben hat die deutsche Flagge?") },
      quiz: { question: L("Wofür standen die Farben 1848?"), choices: [L("Einheit und Freiheit"), L("Krieg und Tod"), L("Reichtum"), L("Nichts")], answer: L("Einheit und Freiheit") }
    },
    {
      id: "reaktion",
      title: L("Reaktionszeit"),
      hint1: L("Rückkehr zur alten Ordnung nach 1849."),
      hint2: L("Unterdrückung der Demokraten."),
      svg: { type: "text-bubbles", items: [{ text: "Revolution", color: "#fff", bg: "#dc2626" }, { text: "Ende", color: "#fff", bg: "#991b1b" }, { text: "Polizei", color: "#fff", bg: "#475569" }, { text: "Macht", color: "#fff", bg: "#64748b" }] },
      interactive: { type: "block-drag", blocks: [{ label: L("Folgen"), items: [L("Überwachung"), L("Verhaftung")] }] },
      quiz: { question: L("Was geschah nach dem Scheitern?"), choices: [L("Harte Unterdrückung"), L("Sofortige Wahlen"), L("Ein Volksfest"), L("Krieg gegen England")], answer: L("Harte Unterdrückung") }
    }
  ]
};

// ─── ISLAND 5: DIE INDUSTRIELLE REVOLUTION (ANFÄNGE) ───────────────────────
const I5: IslandSpec = {
  id: "i5",
  title: L("Industrielle Revolution"),
  topics: [
    {
      id: "watt",
      title: L("James Watt"),
      hint1: L("Verbesserer der Dampfmaschine."),
      hint2: L("Er ermöglichte den Antrieb von Maschinen."),
      svg: { type: "icon-grid", items: [{ emoji: "⚙️", label: "Technik" }, { emoji: "💨", label: "Dampf" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("James Watt"), right: L("Dampfmaschine") }, { left: L("Kraft"), right: L("Dampf") }] },
      quiz: { question: L("Was verbesserte James Watt?"), choices: [L("Dampfmaschine"), L("Auto"), L("Flugzeug"), L("Internet")], answer: L("Dampfmaschine") }
    },
    {
      id: "england",
      title: L("Mutterland England"),
      hint1: L("Hier begann die Industrialisierung."),
      hint2: L("Rohstoffe und Erfindungen."),
      svg: { type: "icon-grid", items: [{ emoji: "🇬🇧", label: "England" }] },
      interactive: { type: "gap-fill", text: L("England hatte viel __."), gaps: [{ index: 0, options: ["Kohle", "Holz"], correct: 0 }] },
      quiz: { question: L("In welchem Land begann die Industrie?"), choices: [L("England"), L("Deutschland"), L("Frankreich"), L("USA")], answer: L("England") }
    },
    {
      id: "webstuhl",
      title: L("Mechanischer Webstuhl"),
      hint1: L("Erste große Industrie: Textilien."),
      hint2: L("Stoffe wurden viel günstiger."),
      svg: { type: "text-bubbles", items: [{ text: "Stoff", color: "#fff", bg: "#16a34a" }, { text: "Weben", color: "#fff", bg: "#0ea5e9" }] },
      interactive: { type: "word-order", words: [L("Maschinen"), L("weben"), L("schneller")], instruction: L("Was war neu?") },
      quiz: { question: L("Welche Industrie war die erste?"), choices: [L("Textilindustrie"), L("Autoindustrie"), L("Computer"), L("Luftfahrt")], answer: L("Textilindustrie") }
    },
    {
      id: "eisenbahn",
      title: L("Die Eisenbahn"),
      hint1: L("Revolution des Transports."),
      hint2: L("Schneller Transport von Kohle."),
      svg: { type: "word-display", word: "Dampflok", color: "#475569" },
      interactive: { type: "match-pairs", pairs: [{ left: L("Adler"), right: L("Erste Bahn") }, { left: L("Schienen"), right: L("Weg") }] },
      quiz: { question: L("Was veränderte den Transport?"), choices: [L("Eisenbahn"), L("Pferdewagen"), L("Schiff"), L("Flugzeug")], answer: L("Eisenbahn") }
    },
    {
      id: "kohle",
      title: L("Kohle & Eisen"),
      hint1: L("Wichtigste Rohstoffe."),
      hint2: L("Brennstoff für Maschinen."),
      svg: { type: "icon-grid", items: [{ emoji: "⬛", label: "Kohle" }, { emoji: "⛏️", label: "Bergbau" }] },
      interactive: { type: "block-drag", blocks: [{ label: L("Rohstoffe"), items: [L("Kohle"), L("Eisenerz")] }] },
      quiz: { question: L("Welcher Rohstoff trieb Maschinen an?"), choices: [L("Kohle"), L("Öl"), L("Holz"), L("Wasser")], answer: L("Kohle") }
    },
    {
      id: "fabrik",
      title: L("Fabrikarbeit"),
      hint1: L("Arbeit unter einem Dach."),
      hint2: L("Feste Arbeitszeiten und Disziplin."),
      svg: { type: "text-bubbles", items: [{ text: "Früher", color: "#fff", bg: "#92400e" }, { text: "Handarbeit", color: "#fff", bg: "#b45309" }, { text: "Heute", color: "#fff", bg: "#475569" }, { text: "Maschinen", color: "#fff", bg: "#64748b" }] },
      interactive: { type: "gap-fill", text: L("In der Fabrik regiert die __."), gaps: [{ index: 0, options: ["Uhr", "Sonne"], correct: 0 }] },
      quiz: { question: L("Was war neu in Fabriken?"), choices: [L("Strenge Disziplin"), L("Viel Freiheit"), L("Keine Regeln"), L("Kurze Arbeit")], answer: L("Strenge Disziplin") }
    },
    {
      id: "adler1835",
      title: L("Der Adler"),
      hint1: L("Erste Eisenbahn in Deutschland."),
      hint2: L("Von Nürnberg nach Fürth."),
      svg: { type: "text-bubbles", items: [{ text: "1835", color: "#fff", bg: "#ea580c" }, { text: "Nürnberg", color: "#fff", bg: "#1e3a8a" }] },
      interactive: { type: "tap-count", count: 1835, instruction: L("In welchem Jahr fuhr der Adler?") },
      quiz: { question: L("Wo fuhr die erste deutsche Bahn?"), choices: [L("Nürnberg-Fürth"), L("Berlin-Potsdam"), L("Hamburg-Kiel"), L("München-Augsburg")], answer: L("Nürnberg-Fürth") }
    },
    {
      id: "urbanisierung",
      title: L("Urbanisierung"),
      hint1: L("Wachstum der Städte."),
      hint2: L("Menschen ziehen vom Land weg."),
      svg: { type: "icon-grid", items: [{ emoji: "🏙️", label: "Großstadt" }] },
      interactive: { type: "sentence-build", words: [L("Städte"), L("wachsen"), L("sehr"), L("schnell")], instruction: L("Was ist Urbanisierung?") },
      quiz: { question: L("Wohin zogen die Menschen?"), choices: [L("In die Städte"), L("Aufs Land"), L("In den Wald"), L("Gar nicht")], answer: L("In die Städte") }
    },
    {
      id: "kapitalismus",
      title: L("Kapitalismus"),
      hint1: L("Privater Besitz von Fabriken."),
      hint2: L("Gewinn steht im Vordergrund."),
      svg: { type: "text-bubbles", items: [{ text: "Kapital", color: "#fff", bg: "#fbbf24" }, { text: "Profit", color: "#fff", bg: "#16a34a" }] },
      interactive: { type: "lang-mcq", question: L("Was ist Kapitalismus?"), choices: [L("Marktwirtschaft mit Profit"), L("Tausch von Äpfeln"), L("Alles gehört allen")], answer: L("Marktwirtschaft mit Profit") },
      quiz: { question: L("Was ist Kapitalismus?"), choices: [L("Marktwirtschaft mit Profit"), L("Tausch von Äpfeln"), L("Alles gehört allen"), L("Planwirtschaft")], answer: L("Marktwirtschaft mit Profit") }
    },
    {
      id: "technisierung",
      title: L("Technisierung"),
      hint1: L("Maschinen übernehmen Aufgaben."),
      hint2: L("Effizienz steigt extrem."),
      svg: { type: "icon-grid", items: [{ emoji: "⚙️", label: "Maschine" }, { emoji: "📈", label: "Ertrag" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Hand"), right: L("Langsam") }, { left: L("Maschine"), right: L("Schnell") }] },
      quiz: { question: L("Was war der Vorteil von Maschinen?"), choices: [L("Schnellere Produktion"), L("Mehr Freizeit"), L("Bessere Luft"), L("Nichts")], answer: L("Schnellere Produktion") }
    },
    {
      id: "lokomotive",
      title: L("Dampflokomotive"),
      hint1: L("Antrieb durch Wasserdampf."),
      hint2: L("Schwerer Transport möglich."),
      svg: { type: "text-bubbles", items: [{ text: "Pferd", color: "#fff", bg: "#92400e" }, { text: "Schwach", color: "#fff", bg: "#b45309" }, { text: "Lok", color: "#fff", bg: "#475569" }, { text: "Stark", color: "#fff", bg: "#64748b" }] },
      interactive: { type: "gap-fill", text: L("Die Lok braucht Wasser und __."), gaps: [{ index: 0, options: ["Kohle", "Holz"], correct: 0 }] },
      quiz: { question: L("Wie wurde die Lok angetrieben?"), choices: [L("Wasserdampf"), L("Elektrizität"), L("Benzin"), L("Luft")], answer: L("Wasserdampf") }
    },
    {
      id: "fabrikherr",
      title: L("Fabrikbesitzer"),
      hint1: L("Die neuen Reichen."),
      hint2: L("Oft Bourgeoisie genannt."),
      svg: { type: "word-display", word: "Unternehmer", color: "#1e3a8a" },
      interactive: { type: "highlight-text", text: L("Die Unternehmer besaßen das Kapital."), instruction: L("Wer war mächtig?") },
      quiz: { question: L("Wer besaß die Fabriken?"), choices: [L("Unternehmer"), L("Arbeiter"), L("Könige"), L("Priester")], answer: L("Unternehmer") }
    },
    {
      id: "bevoelkerung",
      title: L("Bevölkerungsexplosion"),
      hint1: L("Zahl der Menschen stieg stark an."),
      hint2: L("Bessere Hygiene und Medizin."),
      svg: { type: "icon-grid", items: [{ emoji: "👨‍👩‍👧‍👦", label: "Wachstum" }, { emoji: "➕", label: "Mehr" }] },
      interactive: { type: "tap-count", count: 2, instruction: L("Wie viele Faktoren (Essen+Medizin) halfen?") },
      quiz: { question: L("Warum stieg die Bevölkerung?"), choices: [L("Bessere Nahrung"), L("Mehr Kriege"), L("Wenig Kinder"), L("Kälte")], answer: L("Bessere Nahrung") }
    },
    {
      id: "export",
      title: L("Welthandel"),
      hint1: L("Waren wurden weltweit verkauft."),
      hint2: L("Dampfschiffe halfen dabei."),
      svg: { type: "text-bubbles", items: [{ text: "Schiff", color: "#fff", bg: "#0284c7" }, { text: "Welt", color: "#fff", bg: "#16a34a" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Import"), right: L("Einfuhr") }, { left: L("Export"), right: L("Ausfuhr") }] },
      quiz: { question: L("Was beschleunigte den Welthandel?"), choices: [L("Dampfschiffe"), L("Ruderboote"), L("Flugzeuge"), L("Autos")], answer: L("Dampfschiffe") }
    },
    {
      id: "erfindungen",
      title: L("Wichtige Erfindungen"),
      hint1: L("Rad, Pflug, Dampfmaschine."),
      hint2: L("Technik verändert die Welt."),
      svg: { type: "icon-grid", items: [{ emoji: "📞", label: "Telefon" }, { emoji: "💡", label: "Glühbirne" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Telefon"), right: L("Bell") }, { left: L("Glühbirne"), right: L("Edison") }] },
      quiz: { question: L("Was gehört zur späten Industriezeit?"), choices: [L("Elektrizität"), L("Feuerstein"), L("Höhlenmalerei"), L("Streitwagen")], answer: L("Elektrizität") }
    }
  ]
};

// ─── ISLAND 6: SOZIALE FRAGE & TECHNISCHER FORTSCHRITT ─────────────────────
const I6: IslandSpec = {
  id: "i6",
  title: L("Soziale Frage"),
  topics: [
    {
      id: "arbeiterelend",
      title: L("Das Elend"),
      hint1: L("Schlechte Arbeitsbedingungen."),
      hint2: L("Lange Arbeitszeiten, wenig Lohn."),
      svg: { type: "text-bubbles", items: [{ text: "Lohn", color: "#fff", bg: "#991b1b" }, { text: "Niedrig", color: "#fff", bg: "#dc2626" }, { text: "Zeit", color: "#fff", bg: "#991b1b" }, { text: "14 Stunden", color: "#fff", bg: "#dc2626" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Lohn"), right: L("Wenig") }, { left: L("Wohnung"), right: L("Eng") }] },
      quiz: { question: L("Wie war das Leben der Arbeiter?"), choices: [L("Sehr arm"), L("Reich"), L("Gemütlich"), L("Luxuriös")], answer: L("Sehr arm") }
    },
    {
      id: "kinderarbeit",
      title: L("Kinderarbeit"),
      hint1: L("Kinder mussten mitverdienen."),
      hint2: L("In Bergwerken oder Fabriken."),
      svg: { type: "icon-grid", items: [{ emoji: "👶", label: "Kind" }, { emoji: "⛏️", label: "Arbeit" }] },
      interactive: { type: "gap-fill", text: L("Kinder arbeiteten oft __ Stunden."), gaps: [{ index: 0, options: ["12", "2"], correct: 0 }] },
      quiz: { question: L("Wo arbeiteten Kinder oft?"), choices: [L("In Bergwerken"), L("In der Schule"), L("Im Kindergarten"), L("Gar nicht")], answer: L("In Bergwerken") }
    },
    {
      id: "proletariat",
      title: L("Das Proletariat"),
      hint1: L("Die neue Klasse der Arbeiter."),
      hint2: L("Besitzlose Lohnarbeiter."),
      svg: { type: "word-display", word: "Arbeiterklasse", color: "#991b1b" },
      interactive: { type: "sentence-build", words: [L("Arbeiter"), L("haben"), L("keinen"), L("Besitz")], instruction: L("Wer sind Proletarier?") },
      quiz: { question: L("Wie nennt man die besitzlose Klasse?"), choices: [L("Proletariat"), L("Adel"), L("Bourgeoisie"), L("Klerus")], answer: L("Proletariat") }
    },
    {
      id: "gewerkschaften",
      title: L("Gewerkschaften"),
      hint1: L("Zusammenschluss von Arbeitern."),
      hint2: L("Kampf für bessere Bedingungen."),
      svg: { type: "text-bubbles", items: [{ text: "Streik", color: "#fff", bg: "#ef4444" }, { text: "Rechte", color: "#fff", bg: "#3b82f6" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Streik"), right: L("Waffe") }, { left: L("Gewerkschaft"), right: L("Schutz") }] },
      quiz: { question: L("Was forderten Gewerkschaften?"), choices: [L("Höhere Löhne"), L("Längere Arbeit"), L("Mehr Steuern"), L("Nichts")], answer: L("Höhere Löhne") }
    },
    {
      id: "marx",
      title: L("Karl Marx"),
      hint1: L("Denker des Kommunismus."),
      hint2: L("Das Kapital' und 'Manifest'."),
      svg: { type: "icon-grid", items: [{ emoji: "📖", label: "Manifest" }, { emoji: "⚒️", label: "Symbol" }] },
      interactive: { type: "highlight-text", text: L("Proletarier aller Länder, vereinigt euch!"), instruction: L("Berühmter Satz?") },
      quiz: { question: L("Was forderte Karl Marx?"), choices: [L("Klassenlose Gesellschaft"), L("Einen starken König"), L("Mehr Klöster"), L("Privatisierung")], answer: L("Klassenlose Gesellschaft") }
    },
    {
      id: "sozialversicherung",
      title: L("Bismarcks Gesetze"),
      hint1: L("Erste Krankenversicherung 1883."),
      hint2: L("Schutz gegen Krankheiten und Unfälle."),
      svg: { type: "text-bubbles", items: [{ text: "Krankheit", color: "#fff", bg: "#7c3aed" }, { text: "Geld", color: "#fff", bg: "#6d28d9" }, { text: "Alter", color: "#fff", bg: "#7c3aed" }, { text: "Rente", color: "#fff", bg: "#6d28d9" }] },
      interactive: { type: "tap-count", count: 3, instruction: L("Wie viele große Versicherungen (Kranken, Unfall, Rente)?") },
      quiz: { question: L("Wer führte die Sozialversicherung ein?"), choices: [L("Bismarck"), L("Napoleon"), L("Marx"), L("Hitler")], answer: L("Bismarck") }
    },
    {
      id: "mietskaserne",
      title: L("Mietskasernen"),
      hint1: L("Enge, dunkle Wohnungen."),
      hint2: L("Oft viele Menschen in einem Zimmer."),
      svg: { type: "icon-grid", items: [{ emoji: "🏚️", label: "Hinterhof" }] },
      interactive: { type: "gap-fill", text: L("Es war eng und __."), gaps: [{ index: 0, options: ["ungesund", "luxuriös"], correct: 0 }] },
      quiz: { question: L("Wie nannte man die Arbeiterhäuser?"), choices: [L("Mietskasernen"), L("Villen"), L("Schlösser"), L("Hotels")], answer: L("Mietskasernen") }
    },
    {
      id: "streik",
      title: L("Der Streik"),
      hint1: L("Arbeitsniederlegung als Protest."),
      hint2: L("Druckmittel gegen Fabrikherren."),
      svg: { type: "text-bubbles", items: [{ text: "Halt", color: "#fff", bg: "#dc2626" }, { text: "Protest", color: "#fff", bg: "#ea580c" }] },
      interactive: { type: "block-drag", blocks: [{ label: L("Methoden"), items: [L("Streik"), L("Demos")] }] },
      quiz: { question: L("Was passiert bei einem Streik?"), choices: [L("Arbeit ruht"), L("Arbeit wird schneller"), L("Man geht wandern"), L("Nichts")], answer: L("Arbeit ruht") }
    },
    {
      id: "sozialismus",
      title: L("Sozialismus"),
      hint1: L("Gleichheit und soziale Gerechtigkeit."),
      hint2: L("Staat soll Wirtschaft lenken."),
      svg: { type: "word-display", word: "Gleichheit", color: "#991b1b" },
      interactive: { type: "lang-mcq", question: L("Was will der Sozialismus?"), choices: [L("Soziale Sicherheit"), L("Absolute Monarchie"), L("Sklaverei")], answer: L("Soziale Sicherheit") },
      quiz: { question: L("Was will der Sozialismus?"), choices: [L("Soziale Sicherheit"), L("Absolute Monarchie"), L("Sklaverei"), L("Feudalismus")], answer: L("Soziale Sicherheit") }
    },
    {
      id: "hygiene",
      title: L("Hygiene & Medizin"),
      hint1: L("Kampf gegen Krankheiten."),
      hint2: L("Robert Koch und Bakterien."),
      svg: { type: "icon-grid", items: [{ emoji: "🔬", label: "Mikroskop" }, { emoji: "🧼", label: "Sauberkeit" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Koch"), right: L("Bakterien") }, { left: L("Seife"), right: L("Sauberkeit") }] },
      quiz: { question: L("Wer erforschte Bakterien?"), choices: [L("Robert Koch"), L("James Watt"), L("Bismarck"), L("Napoleon")], answer: L("Robert Koch") }
    },
    {
      id: "telekommunikation",
      title: L("Das Telefon"),
      hint1: L("Schnelle Übermittlung von Tönen."),
      hint2: L("Graham Bell."),
      svg: { type: "icon-grid", items: [{ emoji: "📞", label: "Telefon" }] },
      interactive: { type: "gap-fill", text: L("Erfinder: Graham __."), gaps: [{ index: 0, options: ["Bell", "Edison"], correct: 0 }] },
      quiz: { question: L("Was erfand Graham Bell?"), choices: [L("Telefon"), L("Auto"), L("Radio"), L("Dampfschiff")], answer: L("Telefon") }
    },
    {
      id: "gluehbirne",
      title: L("Die Glühbirne"),
      hint1: L("Licht durch Elektrizität."),
      hint2: L("Thomas Edison."),
      svg: { type: "text-bubbles", items: [{ text: "Licht", color: "#fff", bg: "#fde047" }, { text: "Strom", color: "#fff", bg: "#3b82f6" }] },
      interactive: { type: "tap-count", count: 1, instruction: L("Wie viele Fäden glühen?") },
      quiz: { question: L("Wer erfand die Glühbirne?"), choices: [L("Thomas Edison"), L("James Watt"), L("Karl Marx"), L("Bismarck")], answer: L("Thomas Edison") }
    },
    {
      id: "automobil",
      title: L("Das Auto"),
      hint1: L("Fahrzeug mit Verbrennungsmotor."),
      hint2: L("Carl Benz 1886."),
      svg: { type: "word-display", word: "Benz", color: "#475569" },
      interactive: { type: "match-pairs", pairs: [{ left: L("Benz"), right: L("Auto") }, { left: L("1886"), right: L("Patent") }] },
      quiz: { question: L("Wann wurde das Auto erfunden?"), choices: [L("1886"), L("1835"), L("1914"), L("1789")], answer: L("1886") }
    },
    {
      id: "frauenarbeit",
      title: L("Frauen in der Industrie"),
      hint1: L("Frauen arbeiteten oft für weniger Lohn."),
      hint2: L("Doppelbelastung: Haushalt und Fabrik."),
      svg: { type: "text-bubbles", items: [{ text: "Mann", color: "#fff", bg: "#2563eb" }, { text: "Mehr Lohn", color: "#fff", bg: "#3b82f6" }, { text: "Frau", color: "#fff", bg: "#db2777" }, { text: "Weniger Lohn", color: "#fff", bg: "#ec4899" }] },
      interactive: { type: "sentence-build", words: [L("Frauen"), L("verdienten"), L("weniger"), L("als"), L("Männer")], instruction: L("Ungerechtigkeit?") },
      quiz: { question: L("Warum stellten Fabrikanten gerne Frauen ein?"), choices: [L("Sie waren billiger"), L("Sie waren stärker"), L("Sie hatten Ferien"), L("Nichts")], answer: L("Sie waren billiger") }
    },
    {
      id: "flieszband",
      title: L("Fließbandarbeit"),
      hint1: L("Zerlegung in kleine Schritte."),
      hint2: L("Später durch Henry Ford berühmt."),
      svg: { type: "icon-grid", items: [{ emoji: "🏭", label: "Fabrik" }, { emoji: "🔄", label: "Schritt" }] },
      interactive: { type: "block-drag", blocks: [{ label: L("Arbeit"), items: [L("Monoton"), L("Schnell")] }] },
      quiz: { question: L("Was ist typisch für Fließbandarbeit?"), choices: [L("Immer gleicher Schritt"), L("Viel Abwechslung"), L("Keine Zeitvorgabe"), L("Freie Wahl")], answer: L("Immer gleicher Schritt") }
    }
  ]
};

// ─── ISLAND 7: DIE DEUTSCHE EINIGUNG 1871 ──────────────────────────────────
const I7: IslandSpec = {
  id: "i7",
  title: L("Deutsche Einigung"),
  topics: [
    {
      id: "bismarck",
      title: L("Otto von Bismarck"),
      hint1: L("Preußischer Ministerpräsident."),
      hint2: L("Einte Deutschland 'mit Eisen und Blut'."),
      svg: { type: "icon-grid", items: [{ emoji: "⚒️", label: "Eisen" }, { emoji: "🩸", label: "Blut" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Bismarck"), right: L("Preußen") }, { left: L("Kanzler"), right: L("Reich") }] },
      quiz: { question: L("Wie nannte man Bismarck?"), choices: [L("Eiserner Kanzler"), L("Sonnenkönig"), L("Der Große"), L("Reformkönig")], answer: L("Eiserner Kanzler") }
    },
    {
      id: "eisenblut",
      title: L("Eisen und Blut"),
      hint1: L("Bismarcks Motto für die Einigung."),
      hint2: L("Einigung durch Kriege."),
      svg: { type: "text-bubbles", items: [{ text: "Krieg", color: "#fff", bg: "#991b1b" }, { text: "Einheit", color: "#fff", bg: "#1e3a8a" }] },
      interactive: { type: "word-order", words: [L("Nicht"), L("durch"), L("Reden"), L("sondern"), L("Eisen"), L("und"), L("Blut")], instruction: L("Das Zitat!") },
      quiz: { question: L("Was meinte Bismarck mit 'Eisen und Blut'?"), choices: [L("Militärische Gewalt"), L("Gartenarbeit"), L("Kochen"), L("Friedliche Reden")], answer: L("Militärische Gewalt") }
    },
    {
      id: "reichsgruendung",
      title: L("Reichsgründung 1871"),
      hint1: L("Nach dem Sieg gegen Frankreich."),
      hint2: L("Im Spiegelsaal von Versailles."),
      svg: { type: "icon-grid", items: [{ emoji: "🏛️", label: "Versailles" }] },
      interactive: { type: "tap-count", count: 1871, instruction: L("In welchem Jahr wurde das Reich gegründet?") },
      quiz: { question: L("Wo wurde das Deutsche Reich gegründet?"), choices: [L("Versailles"), L("Berlin"), L("Frankfurt"), L("München")], answer: L("Versailles") }
    },
    {
      id: "wilhelm1",
      title: L("Wilhelm I."),
      hint1: L("Erster deutscher Kaiser."),
      hint2: L("Vorher König von Preußen."),
      svg: { type: "icon-grid", items: [{ emoji: "👑", label: "Kaiser" }, { emoji: "🛡️", label: "Preußen" }] },
      interactive: { type: "gap-fill", text: L("Wilhelm I. war König von __."), gaps: [{ index: 0, options: ["Preußen", "Bayern"], correct: 0 }] },
      quiz: { question: L("Wer wurde 1871 Kaiser?"), choices: [L("Wilhelm I."), L("Friedrich III."), L("Bismarck"), L("Napoleon III.")], answer: L("Wilhelm I.") }
    },
    {
      id: "elsaßlothringen",
      title: L("Elsass-Lothringen"),
      hint1: L("Gebiet, das 1871 an Deutschland fiel."),
      hint2: L("Grund für lange Feindschaft mit Frankreich."),
      svg: { type: "text-bubbles", items: [{ text: "Land", color: "#fff", bg: "#475569" }, { text: "Streit", color: "#fff", bg: "#dc2626" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Elsass"), right: L("Straßburg") }, { left: L("Gewinn"), right: L("1871") }] },
      quiz: { question: L("Welches Gebiet verlor Frankreich 1871?"), choices: [L("Elsass-Lothringen"), L("Paris"), L("Normandie"), L("Bretagne")], answer: L("Elsass-Lothringen") }
    },
    {
      id: "kulturkampf",
      title: L("Kulturkampf"),
      hint1: L("Konflikt zwischen Staat und Kirche."),
      hint2: L("Bismarck gegen den Papst."),
      svg: { type: "text-bubbles", items: [{ text: "Bismarck", color: "#fff", bg: "#475569" }, { text: "Staat", color: "#fff", bg: "#64748b" }, { text: "Papst", color: "#fff", bg: "#7c3aed" }, { text: "Kirche", color: "#fff", bg: "#6d28d9" }] },
      interactive: { type: "lang-mcq", question: L("Gegen wen richtete sich der Kulturkampf?"), choices: [L("Katholische Kirche"), L("Bauern"), L("Händler")], answer: L("Katholische Kirche") },
      quiz: { question: L("Gegen wen richtete sich der Kulturkampf?"), choices: [L("Katholische Kirche"), L("Bauern"), L("Händler"), L("Armee")], answer: L("Katholische Kirche") }
    },
    {
      id: "sozialistengesetze",
      title: L("Sozialistengesetze"),
      hint1: L("Verbot von sozialistischen Parteien."),
      hint2: L("Angst vor Revolution der Arbeiter."),
      svg: { type: "word-display", word: "Verbot", color: "#991b1b" },
      interactive: { type: "gap-fill", text: L("Bismarck verbot die __."), gaps: [{ index: 0, options: ["Sozialisten", "Könige"], correct: 0 }] },
      quiz: { question: L("Warum gab es die Sozialistengesetze?"), choices: [L("Angst vor Umsturz"), L("Geldmangel"), L("Umweltgründe"), L("Nichts")], answer: L("Angst vor Umsturz") }
    },
    {
      id: "buendnispolitik",
      title: L("Bündnispolitik"),
      hint1: L("Bismarck wollte Frankreich isolieren."),
      hint2: L("Sicherung des Friedens durch Verträge."),
      svg: { type: "text-bubbles", items: [{ text: "Vertrag", color: "#fff", bg: "#16a34a" }, { text: "Schutz", color: "#fff", bg: "#3b82f6" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Zweibund"), right: L("Österreich") }, { left: L("Rückvers."), right: L("Russland") }] },
      quiz: { question: L("Was war Bismarcks Ziel in Europa?"), choices: [L("Frieden sichern"), L("Frankreich stärken"), L("Krieg gegen alle"), L("Urlaub")], answer: L("Frieden sichern") }
    },
    {
      id: "sedan",
      title: L("Schlacht von Sedan"),
      hint1: L("Entscheidender Sieg 1870."),
      hint2: L("Napoleon III. wurde gefangen."),
      svg: { type: "icon-grid", items: [{ emoji: "🏆", label: "Sieg" }] },
      interactive: { type: "tap-count", count: 1, instruction: L("Wie viele Kaiser wurden gefangen?") },
      quiz: { question: L("Welche Schlacht entschied den Krieg 1870?"), choices: [L("Sedan"), L("Waterloo"), L("Leipzig"), L("Stalingrad")], answer: L("Sedan") }
    },
    {
      id: "norddeutscherbund",
      title: L("Norddeutscher Bund"),
      hint1: L("Vorstufe zum Kaiserreich."),
      hint2: L("Gegründet nach 1866."),
      svg: { type: "text-bubbles", items: [{ text: "Preußen", color: "#fff", bg: "#1e3a8a" }, { text: "Führung", color: "#fff", bg: "#2563eb" }, { text: "Norden", color: "#fff", bg: "#1e3a8a" }, { text: "Einheit", color: "#fff", bg: "#2563eb" }] },
      interactive: { type: "word-order", words: [L("Bund"), L("der"), L("nördlichen"), L("Staaten")], instruction: L("Was war es?") },
      quiz: { question: L("Wer führte den Norddeutschen Bund an?"), choices: [L("Preußen"), L("Bayern"), L("Sachsen"), L("Hessen")], answer: L("Preußen") }
    },
    {
      id: "koeniggraetz",
      title: L("Königgrätz 1866"),
      hint1: L("Preußen besiegt Österreich."),
      hint2: L("Entscheidung um die Führung in Deutschland."),
      svg: { type: "icon-grid", items: [{ emoji: "⚔️", label: "Bruderkrieg" }, { emoji: "🥇", label: "Preußen" }] },
      interactive: { type: "gap-fill", text: L("Preußen verdrängt __."), gaps: [{ index: 0, options: ["Österreich", "Bayern"], correct: 0 }] },
      quiz: { question: L("Was war die Folge von Königgrätz?"), choices: [L("Preußen führt"), L("Österreich führt"), L("Frieden mit allen"), L("Nichts")], answer: L("Preußen führt") }
    },
    {
      id: "spiegelsaal",
      title: L("Spiegelsaal"),
      hint1: L("Ort der Proklamation."),
      hint2: L("Besonders demütigend für Frankreich."),
      svg: { type: "text-bubbles", items: [{ text: "Spiegel", color: "#fff", bg: "#fde047" }, { text: "Prunk", color: "#fff", bg: "#fbbf24" }] },
      interactive: { type: "highlight-text", text: L("Der König von Preußen wird zum Deutschen Kaiser."), instruction: L("Was geschah?") },
      quiz: { question: L("In welchem Schloss ist der Spiegelsaal?"), choices: [L("Versailles"), L("Berlin"), L("Neuschwanstein"), L("Sanssouci")], answer: L("Versailles") }
    },
    {
      id: "dreiklassenwahl",
      title: L("Dreiklassenwahlrecht"),
      hint1: L("Wahlsystem in Preußen."),
      hint2: L("Reiche hatten mehr Stimmen."),
      svg: { type: "text-bubbles", items: [{ text: "Reich", color: "#fff", bg: "#b45309" }, { text: "Viel Macht", color: "#fff", bg: "#d97706" }, { text: "Arm", color: "#fff", bg: "#475569" }, { text: "Wenig Macht", color: "#fff", bg: "#64748b" }] },
      interactive: { type: "block-drag", blocks: [{ label: L("Stimmen"), items: [L("Klasse 1"), L("Klasse 2"), L("Klasse 3")] }] },
      quiz: { question: L("Wer hatte beim Dreiklassenwahlrecht am meisten Macht?"), choices: [L("Die Reichen"), L("Die Armen"), L("Die Bauern"), L("Niemand")], answer: L("Die Reichen") }
    },
    {
      id: "nationalhymne",
      title: L("Lied der Deutschen"),
      hint1: L("1841 von Fallersleben geschrieben."),
      hint2: L("Wunsch nach Einheit."),
      svg: { type: "word-display", word: "Helgoland", color: "#0284c7" },
      interactive: { type: "sentence-build", words: [L("Einigkeit"), L("und"), L("Recht"), L("und"), L("Freiheit")], instruction: L("Beginn der Hymne?") },
      quiz: { question: L("Wer schrieb das Lied der Deutschen?"), choices: [L("Fallersleben"), L("Goethe"), L("Schiller"), L("Bismarck")], answer: L("Fallersleben") }
    },
    {
      id: "proklamation",
      title: L("Proklamation"),
      hint1: L("Ausrufung des Kaisers."),
      hint2: L("18. Januar 1871."),
      svg: { type: "icon-grid", items: [{ emoji: "📅", label: "18. Jan" }, { emoji: "📣", label: "Ruf" }] },
      interactive: { type: "tap-count", count: 18, instruction: L("An welchem Tag im Januar?") },
      quiz: { question: L("An welchem Tag wurde das Reich gegründet?"), choices: [L("18. Januar"), L("1. Januar"), L("4. Juli"), L("24. Dezember")], answer: L("18. Januar") }
    }
  ]
};

// ─── ISLAND 8: IMPERIALISMUS & KOLONIALISMUS ───────────────────────────────
const I8: IslandSpec = {
  id: "i8",
  title: L("Imperialismus"),
  topics: [
    {
      id: "weltmacht",
      title: L("Platz an der Sonne"),
      hint1: L("Deutscher Wunsch nach Weltmacht."),
      hint2: L("Forderung nach eigenen Kolonien."),
      svg: { type: "icon-grid", items: [{ emoji: "☀️", label: "Sonne" }, { emoji: "🌍", label: "Welt" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Platz"), right: L("Sonne") }, { left: L("Kolonie"), right: L("Macht") }] },
      quiz: { question: L("Was meint 'Platz an der Sonne'?"), choices: [L("Weltmachtanspruch"), L("Urlaub am Strand"), L("Gartenbau"), L("Astronomie")], answer: L("Weltmachtanspruch") }
    },
    {
      id: "afrika",
      title: L("Wettlauf um Afrika"),
      hint1: L("Aufteilung Afrikas unter Europa."),
      hint2: L("Konferenz in Berlin 1884."),
      svg: { type: "icon-grid", items: [{ emoji: "🌍", label: "Afrika" }] },
      interactive: { type: "gap-fill", text: L("Die Mächte zogen __."), gaps: [{ index: 0, options: ["Grenzen", "Schiffe"], correct: 0 }] },
      quiz: { question: L("Wo wurde Afrika aufgeteilt?"), choices: [L("Berlin"), L("Paris"), L("London"), L("Rom")], answer: L("Berlin") }
    },
    {
      id: "rohstoffe",
      title: L("Rohstoffraub"),
      hint1: L("Kolonien lieferten billige Waren."),
      hint2: L("Gummi, Gold und Kakao."),
      svg: { type: "text-bubbles", items: [{ text: "Kolonie", color: "#fff", bg: "#3b82f6" }, { text: "Rohstoff", color: "#fff", bg: "#6366f1" }, { text: "Europa", color: "#fff", bg: "#3b82f6" }, { text: "Fabrik", color: "#fff", bg: "#6366f1" }] },
      interactive: { type: "block-drag", blocks: [{ label: L("Waren"), items: [L("Gold"), L("Gummi")] }] },
      quiz: { question: L("Was holten die Europäer aus Kolonien?"), choices: [L("Rohstoffe"), L("Fertige Autos"), L("Computer"), L("Nichts")], answer: L("Rohstoffe") }
    },
    {
      id: "herero",
      title: L("Herero-Aufstand"),
      hint1: L("Widerstand gegen deutsche Herrschaft."),
      hint2: L("Grausame Niederschlagung."),
      svg: { type: "text-bubbles", items: [{ text: "1904", color: "#fff", bg: "#991b1b" }, { text: "Namibia", color: "#fff", bg: "#475569" }] },
      interactive: { type: "highlight-text", text: L("Der Aufstand der Herero wurde gewaltsam beendet."), instruction: L("Was geschah?") },
      quiz: { question: L("In welcher Kolonie war der Aufstand?"), choices: [L("Deutsch-Südwestafrika"), L("Kamerun"), L("Togo"), L("China")], answer: L("Deutsch-Südwestafrika") }
    },
    {
      id: "flottenbau",
      title: L("Flottenbau"),
      hint1: L("Deutschland baut große Kriegsschiffe."),
      hint2: L("Wettlauf mit England zur See."),
      svg: { type: "word-display", word: "Schlachtschiff", color: "#1e3a8a" },
      interactive: { type: "tap-count", count: 2, instruction: L("Wie viele Mächte (DE/GB) bauten um die Wette?") },
      quiz: { question: L("Gegen wen baute Deutschland Schiffe?"), choices: [L("England"), L("Russland"), L("USA"), L("Spanien")], answer: L("England") }
    },
    {
      id: "zivilisierung",
      title: L("Angebliche Zivilisierung"),
      hint1: L("Europäer hielten sich für überlegen."),
      hint2: L("Rechtfertigung für Unterdrückung."),
      svg: { type: "icon-grid", items: [{ emoji: "📖", label: "Lehre" }, { emoji: "⛪", label: "Mission" }] },
      interactive: { type: "lang-mcq", question: L("Was war eine Rechtfertigung?"), choices: [L("Zivilisierungsmission"), L("Sportwettkampf"), L("Urlaubshilfe")], answer: L("Zivilisierungsmission") },
      quiz: { question: L("Was war eine Rechtfertigung für Kolonisierung?"), choices: [L("Zivilisierungsmission"), L("Sportwettkampf"), L("Urlaubshilfe"), L("Friedenspakt")], answer: L("Zivilisierungsmission") }
    },
    {
      id: "wilhelm2",
      title: L("Wilhelm II."),
      hint1: L("Der letzte deutsche Kaiser."),
      hint2: L("Er liebte Uniformen und Paraden."),
      svg: { type: "text-bubbles", items: [{ text: "Kaiser", color: "#fff", bg: "#475569" }, { text: "Marine", color: "#fff", bg: "#3b82f6" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Wilhelm II."), right: L("Letzter Kaiser") }, { left: L("Flotte"), right: L("Leidenschaft") }] },
      quiz: { question: L("Wer regierte während des Imperialismus?"), choices: [L("Wilhelm II."), L("Bismarck"), L("Wilhelm I."), L("Hitler")], answer: L("Wilhelm II.") }
    },
    {
      id: "socialdarwinism",
      title: L("Sozialdarwinismus"),
      hint1: L("Recht des Stärkeren."),
      hint2: L("Falsche Anwendung von Darwins Lehre."),
      svg: { type: "text-bubbles", items: [{ text: "Stark", color: "#fff", bg: "#dc2626" }, { text: "Herrscht", color: "#fff", bg: "#b91c1c" }, { text: "Schwach", color: "#fff", bg: "#2563eb" }, { text: "Dient", color: "#fff", bg: "#1d4ed8" }] },
      interactive: { type: "gap-fill", text: L("Recht des __."), gaps: [{ index: 0, options: ["Stärkeren", "Gerechten"], correct: 0 }] },
      quiz: { question: L("Was besagt der Sozialdarwinismus?"), choices: [L("Recht des Stärkeren"), L("Alle sind gleich"), L("Gott herrscht"), L("Nichts")], answer: L("Recht des Stärkeren") }
    },
    {
      id: "kolonialmaechte",
      title: L("Kolonialmächte"),
      hint1: L("England, Frankreich, Deutschland."),
      hint2: L("Wer hat die meisten Kolonien?"),
      svg: { type: "icon-grid", items: [{ emoji: "🇬🇧", label: "England" }, { emoji: "🇫🇷", label: "Frankreich" }, { emoji: "🇩🇪", label: "Deutschland" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Indien"), right: L("England") }, { left: L("Algerien"), right: L("Frankreich") }] },
      quiz: { question: L("Wer hatte das größte Weltreich?"), choices: [L("England"), L("Deutschland"), L("Russland"), L("Japan")], answer: L("England") }
    },
    {
      id: "opiumkrieg",
      title: L("Opiumkrieg"),
      hint1: L("England gegen China."),
      hint2: L("Erzwungener Drogenhandel."),
      svg: { type: "text-bubbles", items: [{ text: "China", color: "#fff", bg: "#ea580c" }, { text: "Opium", color: "#fff", bg: "#8b5cf6" }] },
      interactive: { type: "sentence-build", words: [L("England"), L("zwang"), L("China"), L("zum"), L("Handel")], instruction: L("Was geschah?") },
      quiz: { question: L("Gegen wen kämpfte China?"), choices: [L("England"), L("USA"), L("Spanien"), L("Italien")], answer: L("England") }
    },
    {
      id: "boxeraufstand",
      title: L("Boxeraufstand"),
      hint1: L("Chinesischer Widerstand."),
      hint2: L("Gegen fremde Mächte."),
      svg: { type: "icon-grid", items: [{ emoji: "🥊", label: "Boxer" }, { emoji: "🇨🇳", label: "China" }] },
      interactive: { type: "tap-count", count: 8, instruction: L("Wie viele Nationen (8-Nationen-Bund) kämpften?") },
      quiz: { question: L("Was wollten die 'Boxer'?"), choices: [L("Ausländer vertreiben"), L("Sport treiben"), L("Tee verkaufen"), L("Nichts")], answer: L("Ausländer vertreiben") }
    },
    {
      id: "missionare",
      title: L("Missionare"),
      hint1: L("Verbreitung des Christentums."),
      hint2: L("Oft Hand in Hand mit Soldaten."),
      svg: { type: "text-bubbles", items: [{ text: "Bibel", color: "#fff", bg: "#7c3aed" }, { text: "Glaube", color: "#fff", bg: "#6d28d9" }, { text: "Schutz", color: "#fff", bg: "#059669" }, { text: "Armee", color: "#fff", bg: "#047857" }] },
      interactive: { type: "gap-fill", text: L("Sie brachten das __."), gaps: [{ index: 0, options: ["Christentum", "Islam"], correct: 0 }] },
      quiz: { question: L("Was machten Missionare in Afrika?"), choices: [L("Religion verbreiten"), L("Häuser bauen"), L("Gar nichts"), L("Auto fahren")], answer: L("Religion verbreiten") }
    },
    {
      id: "eisenbahn_kolonien",
      title: L("Bahn in Afrika"),
      hint1: L("Transport von Rohstoffen zur Küste."),
      hint2: L("Ausbeutung des Hinterlandes."),
      svg: { type: "icon-grid", items: [{ emoji: "⛏️", label: "Mine" }, { emoji: "🚢", label: "Hafen" }] },
      interactive: { type: "word-order", words: [L("Vom"), L("Inneren"), L("zum"), L("Meer")], instruction: L("Der Weg?") },
      quiz: { question: L("Wozu dienten die Bahnen in Kolonien?"), choices: [L("Rohstofftransport"), L("Tourismus"), L("Zum Spaß"), L("Nichts")], answer: L("Rohstofftransport") }
    },
    {
      id: "schutzgebiete",
      title: L("Schutzgebiete"),
      hint1: L("Name für deutsche Kolonien."),
      hint2: L("Angeblicher Schutz durch das Reich."),
      svg: { type: "word-display", word: "Togo", color: "#16a34a" },
      interactive: { type: "match-pairs", pairs: [{ left: L("Togo"), right: L("Afrika") }, { left: L("Samoa"), right: L("Südsee") }] },
      quiz: { question: L("Wie nannte Deutschland seine Kolonien?"), choices: [L("Schutzgebiete"), L("Ferienorte"), L("Bundesländer"), L("Provinzen")], answer: L("Schutzgebiete") }
    },
    {
      id: "nationalstolz",
      title: L("Nationalstolz"),
      hint1: L("Kolonien als Zeichen von Ehre."),
      hint2: L("Man wollte dazugehören."),
      svg: { type: "text-bubbles", items: [{ text: "Ehre", color: "#fff", bg: "#fbbf24" }, { text: "Stolz", color: "#fff", bg: "#ea580c" }] },
      interactive: { type: "highlight-text", text: L("Ein Volk ohne Kolonien galt als zweitklassig."), instruction: L("Die Meinung damals?") },
      quiz: { question: L("Was war ein Grund für Kolonien?"), choices: [L("Prestige"), L("Geld sparen"), L("Umweltschutz"), L("Nichts")], answer: L("Prestige") }
    }
  ]
};

// ─── ISLAND 9: DER WEG IN DEN ERSTEN WELTKRIEG ─────────────────────────────
const I9: IslandSpec = {
  id: "i9",
  title: L("Weg zum Krieg"),
  topics: [
    {
      id: "attentat",
      title: L("Das Attentat"),
      hint1: L("Mord in Sarajevo 1914."),
      hint2: L("Österreichischer Thronfolger."),
      svg: { type: "icon-grid", items: [{ emoji: "🔫", label: "Schuss" }, { emoji: "📅", label: "28. Juni" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Sarajevo"), right: L("Ort") }, { left: L("Franz Ferd."), right: L("Opfer") }] },
      quiz: { question: L("Wo geschah das Attentat?"), choices: [L("Sarajevo"), L("Berlin"), L("Paris"), L("Wien")], answer: L("Sarajevo") }
    },
    {
      id: "pulverfass",
      title: L("Pulverfass Balkan"),
      hint1: L("Viele Konflikte in Südosteuropa."),
      hint2: L("Spannungen zwischen den Mächten."),
      svg: { type: "text-bubbles", items: [{ text: "Balkan", color: "#fff", bg: "#991b1b" }, { text: "Pulver", color: "#fff", bg: "#475569" }] },
      interactive: { type: "gap-fill", text: L("Der Balkan war ein __."), gaps: [{ index: 0, options: ["Pulverfass", "Spielplatz"], correct: 0 }] },
      quiz: { question: L("Wie nannte man den Balkan vor 1914?"), choices: [L("Pulverfass Europas"), L("Garten Europas"), L("Küche Europas"), L("Nichts")], answer: L("Pulverfass Europas") }
    },
    {
      id: "buendnissysteme",
      title: L("Bündnisse 1914"),
      hint1: L("Europa war in zwei Blöcke geteilt."),
      hint2: L("Entente gegen Mittelmächte."),
      svg: { type: "two-groups", left: { items: ["Deutschland", "Österreich"], bg: "#fee2e2", border: "#ef4444" }, right: { items: ["Frankreich", "Russland"], bg: "#dbeafe", border: "#2563eb" } },
      interactive: { type: "block-drag", blocks: [{ label: L("Mittelmächte"), items: [L("Deutschland"), L("Österreich")] }] },
      quiz: { question: L("Wer gehörte zur Entente?"), choices: [L("Frankreich, Russland, England"), L("Deutschland, Österreich"), L("USA, China"), L("Niemand")], answer: L("Frankreich, Russland, England") }
    },
    {
      id: "aufruestung",
      title: L("Wettrüsten"),
      hint1: L("Alle Mächte vergrößern ihr Heer."),
      hint2: L("Angst vor dem Nachbarn."),
      svg: { type: "text-bubbles", items: [{ text: "Früher", color: "#fff", bg: "#16a34a" }, { text: "Wenig Waffen", color: "#fff", bg: "#15803d" }, { text: "1914", color: "#fff", bg: "#dc2626" }, { text: "Viel Waffen", color: "#fff", bg: "#b91c1c" }] },
      interactive: { type: "tap-count", count: 2, instruction: L("Wie viele große Bündnisblöcke?") },
      quiz: { question: L("Was ist ein Wettrüsten?"), choices: [L("Immer mehr Waffen bauen"), L("Ein sportlicher Wettkampf"), L("Hausbau-Wettbewerb"), L("Nichts")], answer: L("Immer mehr Waffen bauen") }
    },
    {
      id: "blankoscheck",
      title: L("Der Blankoscheck"),
      hint1: L("Zusage Deutschlands an Österreich."),
      hint2: L("Bedingungslose Unterstützung."),
      svg: { type: "word-display", word: "Scheck", color: "#16a34a" },
      interactive: { type: "highlight-text", text: L("Deutschland versprach Österreich volle Hilfe."), instruction: L("Was war der Scheck?") },
      quiz: { question: L("Wem gab Deutschland den Blankoscheck?"), choices: [L("Österreich"), L("Russland"), L("Serbien"), L("Italien")], answer: L("Österreich") }
    },
    {
      id: "mobilmachung",
      title: L("Mobilmachung"),
      hint1: L("Vorbereitung der Armee auf Krieg."),
      hint2: L("Züge bringen Soldaten an die Grenze."),
      svg: { type: "icon-grid", items: [{ emoji: "🚆", label: "Zug" }, { emoji: "🔫", label: "Soldat" }] },
      interactive: { type: "word-order", words: [L("Die"), L("Armeen"), L("machen"), L("sich"), L("bereit")], instruction: L("Was bedeutet Mobil?") },
      quiz: { question: L("Was passiert bei der Mobilmachung?"), choices: [L("Soldaten ziehen in den Krieg"), L("Friedensvertrag wird unterschrieben"), L("Nichts"), L("Urlaub beginnt")], answer: L("Soldaten ziehen in den Krieg") }
    },
    {
      id: "schlieffenplan",
      title: L("Schlieffenplan"),
      hint1: L("Deutscher Plan für Zweifrontenkrieg."),
      hint2: L("Erst Frankreich, dann Russland."),
      svg: { type: "icon-grid", items: [{ emoji: "🇫🇷", label: "Frankreich" }, { emoji: "🇷🇺", label: "Russland" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Westen"), right: L("Frankreich") }, { left: L("Osten"), right: L("Russland") }] },
      quiz: { question: L("Wen wollte Deutschland zuerst besiegen?"), choices: [L("Frankreich"), L("Russland"), L("England"), L("USA")], answer: L("Frankreich") }
    },
    {
      id: "belgien",
      title: L("Durchmarsch Belgien"),
      hint1: L("Verletzung der Neutralität."),
      hint2: L("Grund für Englands Kriegseintritt."),
      svg: { type: "text-bubbles", items: [{ text: "Belgien", color: "#fff", bg: "#ef4444" }, { text: "Neutral", color: "#fff", bg: "#475569" }] },
      interactive: { type: "gap-fill", text: L("Deutschland marschierte durch __."), gaps: [{ index: 0, options: ["Belgien", "Holland"], correct: 0 }] },
      quiz: { question: L("Welches Land wurde neutral überrannt?"), choices: [L("Belgien"), L("Schweiz"), L("Schweden"), L("Spanien")], answer: L("Belgien") }
    },
    {
      id: "kriegsausbruch",
      title: L("Kriegsausbruch 1914"),
      hint1: L("Anfang August begann das Töten."),
      hint2: L("Begeisterung bei vielen jungen Männern."),
      svg: { type: "text-bubbles", items: [{ text: "August", color: "#fff", bg: "#991b1b" }, { text: "1914", color: "#fff", bg: "#475569" }] },
      interactive: { type: "tap-count", count: 1914, instruction: L("In welchem Jahr begann der 1. Weltkrieg?") },
      quiz: { question: L("Wann brach der 1. Weltkrieg aus?"), choices: [L("August 1914"), L("Juli 1789"), L("Mai 1848"), L("Januar 1871")], answer: L("August 1914") }
    },
    {
      id: "automatisierung_tod",
      title: L("Moderner Krieg"),
      hint1: L("Maschinengewehre und Kanonen."),
      hint2: L("Industrielles Töten."),
      svg: { type: "icon-grid", items: [{ emoji: "💣", label: "Bombe" }, { emoji: "🔫", label: "MG" }] },
      interactive: { type: "sentence-build", words: [L("Neue"), L("Waffen"), L("töten"), L("viele"), L("Menschen")], instruction: L("Was war neu?") },
      quiz: { question: L("Warum gab es so viele Tote?"), choices: [L("Moderne Waffen"), L("Wenig Soldaten"), L("Kein Essen"), L("Nichts")], answer: L("Moderne Waffen") }
    },
    {
      id: "serbien",
      title: L("Österreich gegen Serbien"),
      hint1: L("Der Funke am Balkan."),
      hint2: L("Ultimatum nach dem Attentat."),
      svg: { type: "text-bubbles", items: [{ text: "Österreich", color: "#fff", bg: "#dc2626" }, { text: "Groß", color: "#fff", bg: "#b91c1c" }, { text: "Serbien", color: "#fff", bg: "#2563eb" }, { text: "Klein", color: "#fff", bg: "#1d4ed8" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Wien"), right: L("Österreich") }, { left: L("Belgrad"), right: L("Serbien") }] },
      quiz: { question: L("Gegen wen erklärte Österreich zuerst den Krieg?"), choices: [L("Serbien"), L("Russland"), L("Frankreich"), L("England")], answer: L("Serbien") }
    },
    {
      id: "russlandmobil",
      title: L("Russlands Antwort"),
      hint1: L("Russland hilft seinem 'Bruder' Serbien."),
      hint2: L("Mobilmachung im Osten."),
      svg: { type: "word-display", word: "Schutz", color: "#1e3a8a" },
      interactive: { type: "gap-fill", text: L("Russland schützte __."), gaps: [{ index: 0, options: ["Serbien", "Polen"], correct: 0 }] },
      quiz: { question: L("Wen schützte Russland?"), choices: [L("Serbien"), L("Deutschland"), L("Österreich"), L("Türkei")], answer: L("Serbien") }
    },
    {
      id: "augusterlebnis",
      title: L("August-Erlebnis"),
      hint1: L("Freude auf den Krieg."),
      hint2: L("Man dachte, man ist zu Weihnachten zuhause."),
      svg: { type: "icon-grid", items: [{ emoji: "🚩", label: "Stolz" }, { emoji: "🚅", label: "Abfahrt" }] },
      interactive: { type: "lang-mcq", question: L("Was dachten viele Soldaten am Anfang?"), choices: [L("Kurzer Krieg"), L("Langer Krieg"), L("Gar kein Krieg")], answer: L("Kurzer Krieg") },
      quiz: { question: L("Was dachten viele Soldaten am Anfang?"), choices: [L("Kurzer Krieg"), L("Langer Krieg"), L("Gar kein Krieg"), L("Frieden")], answer: L("Kurzer Krieg") }
    },
    {
      id: "weltkrieg",
      title: L("Warum 'Weltkrieg'?"),
      hint1: L("Krieg auf fast allen Kontinenten."),
      hint2: L("Beteiligung vieler Nationen."),
      svg: { type: "text-bubbles", items: [{ text: "Erde", color: "#fff", bg: "#16a34a" }, { text: "Global", color: "#fff", bg: "#3b82f6" }] },
      interactive: { type: "highlight-text", text: L("Der Krieg umfasste fast die ganze bewohnte Welt."), instruction: L("Was bedeutet Welt?") },
      quiz: { question: L("Warum hieß es Weltkrieg?"), choices: [L("Beteiligung vieler Nationen"), L("Nur in Europa"), L("Nur im Meer"), L("Nichts")], answer: L("Beteiligung vieler Nationen") }
    },
    {
      id: "fazit1914",
      title: L("Ende einer Epoche"),
      hint1: L("Die alte Welt geht unter."),
      hint2: L("Beginn des Zeitalters der Extreme."),
      svg: { type: "text-bubbles", items: [{ text: "Früher", color: "#fff", bg: "#7c3aed" }, { text: "Könige", color: "#fff", bg: "#6d28d9" }, { text: "Später", color: "#fff", bg: "#dc2626" }, { text: "Chaos", color: "#fff", bg: "#b91c1c" }] },
      interactive: { type: "block-drag", blocks: [{ label: L("Wandel"), items: [L("Ende"), L("Neuanfang")] }] },
      quiz: { question: L("Was markiert 1914 historisch?"), choices: [L("Ende des 19. Jahrhunderts"), L("Anfang der Römer"), L("Entdeckung Amerikas"), L("Nichts")], answer: L("Ende des 19. Jahrhunderts") }
    }
  ]
};

const islands = [I1, I2, I3, I4, I5, I6, I7, I8, I9];
const built = islands.map(buildIsland);

export const GESCHICHTE_K7_I1_LABELS = built[0].labels;
export const GESCHICHTE_K7_I1_POOL = built[0].pool;
export const GESCHICHTE_K7_I2_LABELS = built[1].labels;
export const GESCHICHTE_K7_I2_POOL = built[1].pool;
export const GESCHICHTE_K7_I3_LABELS = built[2].labels;
export const GESCHICHTE_K7_I3_POOL = built[2].pool;
export const GESCHICHTE_K7_I4_LABELS = built[3].labels;
export const GESCHICHTE_K7_I4_POOL = built[3].pool;
export const GESCHICHTE_K7_I5_LABELS = built[4].labels;
export const GESCHICHTE_K7_I5_POOL = built[4].pool;
export const GESCHICHTE_K7_I6_LABELS = built[5].labels;
export const GESCHICHTE_K7_I6_POOL = built[5].pool;
export const GESCHICHTE_K7_I7_LABELS = built[6].labels;
export const GESCHICHTE_K7_I7_POOL = built[6].pool;
export const GESCHICHTE_K7_I8_LABELS = built[7].labels;
export const GESCHICHTE_K7_I8_POOL = built[7].pool;
export const GESCHICHTE_K7_I9_LABELS = built[8].labels;
export const GESCHICHTE_K7_I9_POOL = built[8].pool;
